# Multiplayer Minesweeper Event Object Protocol

>Version 0.1

## Abstract

>This document is a specification of the `Multiplayer Minesweeper Event Object Transfer Protocol (MMEOTP)` used for communication between a `MMEOTP` compliant client and a `MMEOTP` compliant server over `The WebSocket Protocol` [RFC6455] using `The JavaScript Object Notation (JSON) Data Interchange Format` [RFC7159]. The protocol is used to play multiplayer minesweeper, find a multiplayer minesweeper game, and exchange data about users and user preferences.

## Table Of Contents

TODO

## <a name="GenericClientEventObject">GenericClientEventObject</a>

The [`GenericClientEventObject`](#GenericClientEventObject) is the only object that should be sent as text from the client to the server on the `MMEOTP`. This is the object's syntax:  
`{ type: (number), event: (`[`TypedClientEvent`](#TypedClientEvent)`) }`  
The value inside the `type` attribute depends on the type of the event. See [`TypedClientEvent`](#TypedClientEvent) for the possible values for this attribute.

## <a name="TypedClientEvent">TypedClientEvent</a>

The [`TypedClientEvent`](#TypedClientEvent) is one of the following:

0. [`ConnectionEvent`](#ConnectionEvent)
1. [`ListGamesEvent`](#ListGamesEvent)

## <a name="ConnectionEvent">ConnectionEvent</a>

The [`ConnectionEvent`](#ConnectionEvent) is sent when the client connects to the server. It is used to check if the server supports one of the MMEOTP versions that the client supports. This is the object's sytax:  
`{ ver: [(string)…], id: (number) }`  
The `ver` attiribute is an array of versions of the protocol supported by the client. If the client supports v0.1 it must contain the string `"MMEOTPv0.1"`. The `id` attribute can be chosen to be any number by the client, but should be unique from other event id’s. After sending the event the client should await a [`ConnectionResponseEvent`](#ConnectionResponseEvent) with the same id from the server.

## <a name="ListGamesEvent">ListGamesEvent</a>

TODO

## <a name="GenericServerEventObject">GenericServerEventObject</a>

The [`GenericServerEventObject`](#GenericServerEventObject) is the only object that should be sent as text from the server to the client on the `MMEOTP`. This is the object's syntax:  
`{ type: (number), event (`[`TypedServerEvent`](#TypedServerEvent)`) }`  
The value inside the `type` attribute depends on the type of the event. See [`TypedServerEvent`](#TypedServerEvent) for possible values from this attribute.

## <a name="TypedServerEvent">TypedServerEvent</a>

The [`TypedServerEvent`](#TypedServerEvent) is on of the following:

0. [`ConnectionResponseEvent`](#ConnectionResponseEvent)
1. [`ListGamesResponseEvent`](#ListGamesResponseEvent)

## <a name="ConnectionResponseEvent">ConnectionResponseEvent</a>

The [`ConnectionResponseEvent`](#ConnectionResponseEvent) should be sent in response to [`ConnectionEvent`](#ConnectionEvent). The server should use the recieved [`ConnectionEvent`](#ConnectionEvent)to check if the client supports the version used by the server. This is the object's syntax:  
`{ ver: (string), id: (number) }`  
The `ver` attribute should be `"MMEOTPv0.1"` if the client supports it, else if should be an empty string `""`. The id attribute should be equal to the id sent in the [`ConnectionEvent`](#ConnectionEvent).

## <a name="ListGamesResponseEvent">ListGamesResponseEvent</a>

TODO
