---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-04-05T22:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-04-05T22:48:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 143
toc: false
icon: ""
---

Publishers and Subscribers are good but what if you want a two-way style of communication between nodes?

Server and Clients are similar to Publisher and Subscribers where they have a `Service` and Nodes can communicate through those services.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OJQN26%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAWc%2BP7cdLNCGaUmOzwqQvw1iAnOS99nsH6fzzrbA38dAiEApYDcvsEm0xusMbHLQOH2Lbk0v4%2FGIc4a0MZ4IIprk1Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGaFEP2bOumVuCtq8ircA0zgNoAZBSwPi81rzV4IIf%2BmV6FEBD%2BOvw4APZuK6IAfjVpmTSHbCrwHEtmleXp38bUI69tKpFiikQIDH2SQzYT5vAJTQbwxBwUhvtfnsj5ukKZXyt%2F5eLQYVFdS7eoUn2H4nyOvBT%2BRc10hAlMrIn1EVfsYNpdT%2BIPJcE5%2BwO042kXaeJ7czQ1J7t%2FkgjKtYnBIRS2KWxtJ5t1UVThTiqfsp0FDlhbdtgsvGbPW52EahFPoq6I3mirQFqZo6Ijttxa3iD%2FgtJbKLT0F342XAH3FkCB%2F8XAkAdjyui00AP8o0SQIUbqIPkf5G4WtpjMMLiLI9uxNawaDnvIYKYqcUjaNAdpFWI6U71n%2Ba6e5pnyFUEA8WoI4cySgomFd9mpRRHf36gzbu%2B%2FgEB163HyL4sJb8%2B3QiY7iUcx5aVn%2B8%2Fp3CdQtvUpimvpBnQNATetpkomCZPoUgFSDigRy%2BMCo8NmGkQGhjTnLls%2F%2BcTqQ1yvWjT7kM2N%2BiZOY5xPIcpKU%2BJzzzB5x9d%2FBe6MBMgNwsXHm3Nqis4V%2BQGTkswx9cdW7CYDtXfTMuJTgvZbtxWDkyhe%2BYsOPcpyMwxNmctFOscmphub2Dpr3S0pVj6ND4TlxlbMH3R9sDeq24ug%2BML2smMEGOqUBp20nc0KIC7cbRU0B7EwDm7qbXODhjuHb3Rrp1CwNg%2FvvX0mVRpRM6wr45EJX4Ctmxu9kSrJVfksGAPD3VguLMnPZnLCRtSdAuRqdhGdQFWAz4cV%2F%2Bof0wb3e%2F8XLXiK1CHCqrMjo2XQ9dV7kW8DvUV40Kr150N%2BroczoX%2BoUg20Bd5kUfWf1Ruc8rTgwt3R4totBREphX1FF3N%2B1EJXA1FIGejr7&X-Amz-Signature=d0465a9d005ce3f99714c193e3f2f9b3bd4bc9d167da184df3903eae22880bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

![Service-MultipleServiceClient.gif](https://docs.ros.org/en/humble/_images/Service-MultipleServiceClient.gif)

Let's make a basic service where it just adds 2 numbers

# Server

create a file called `server.py` and import the `ROS` libraries:

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node
```

Then create a class `MinimalService` that implements `Node`

```python
class MinimalService(Node):
```

in the constructor run the parent constructor and create a service object:

```python
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)
```

The service object takes the type it expects, the name, and the function to handle the request.

Next, create the function to handle the request and have it return the result of the sum.

```python
    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response
```

Then outside of the class, we want to start the node:

```python
def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

## Solution

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node


class MinimalService(Node):
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response


def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

# Client

For the client lets have it where it takes in the two numbers as input arguments before we run it: `python3 client.py 2 3`

create a file called client`.py` and import the `ROS` libraries:

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node
```

create a class called `MinimalClientAsync` and extend the `Node` class

```python
class MinimalClientAsync(Node):
```

in the constructor run the parent class’s constructor and create a client object and a request object.

Then we try to connect the client with the service by using `while`. This will search for 1 second for the service `"add_two_ints"` before it gives up. 

```python
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

```

Next lets create a function, `send_request()` to take in two numbers and call the service:

```python
	def send_request(self, a, b):
		self.req.a = a
		self.req.b = b
		return self.cli.call_async(self.req) # uses client object to call the service
```

Then outside of the class we want to run our new Node so first init the `ROS` library with:

```python
rclpy.init()
```

Then create a `MinimalClientAsync()` object.

We are then going to take the two input arguments with `sys.argv[1]` and `sys.argv[2]` 

plug them into `send_request` and wait for the result

To wait for a response from the service we use `rclpy.spin_until_future_complete()`

It takes in 2 arguments, the Client Node and the variable that holds the result.

finally, we get our results with `future.result()` and print it out.

```python

minimal_client = MinimalClientAsync()
future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
rclpy.spin_until_future_complete(minimal_client, future)
response = future.result()
minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))
```

Then we shut everything down:

```python
minimal_client.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node


class MinimalClientAsync(Node):
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        return self.cli.call_async(self.req)


def main():
    rclpy.init()

    minimal_client = MinimalClientAsync()
    future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    rclpy.spin_until_future_complete(minimal_client, future)
    response = future.result()
    minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))

    minimal_client.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Now that we have created a Server and Client we can run them both to see them in action

In two different terminals run the Server first then the client

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OJQN26%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAWc%2BP7cdLNCGaUmOzwqQvw1iAnOS99nsH6fzzrbA38dAiEApYDcvsEm0xusMbHLQOH2Lbk0v4%2FGIc4a0MZ4IIprk1Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGaFEP2bOumVuCtq8ircA0zgNoAZBSwPi81rzV4IIf%2BmV6FEBD%2BOvw4APZuK6IAfjVpmTSHbCrwHEtmleXp38bUI69tKpFiikQIDH2SQzYT5vAJTQbwxBwUhvtfnsj5ukKZXyt%2F5eLQYVFdS7eoUn2H4nyOvBT%2BRc10hAlMrIn1EVfsYNpdT%2BIPJcE5%2BwO042kXaeJ7czQ1J7t%2FkgjKtYnBIRS2KWxtJ5t1UVThTiqfsp0FDlhbdtgsvGbPW52EahFPoq6I3mirQFqZo6Ijttxa3iD%2FgtJbKLT0F342XAH3FkCB%2F8XAkAdjyui00AP8o0SQIUbqIPkf5G4WtpjMMLiLI9uxNawaDnvIYKYqcUjaNAdpFWI6U71n%2Ba6e5pnyFUEA8WoI4cySgomFd9mpRRHf36gzbu%2B%2FgEB163HyL4sJb8%2B3QiY7iUcx5aVn%2B8%2Fp3CdQtvUpimvpBnQNATetpkomCZPoUgFSDigRy%2BMCo8NmGkQGhjTnLls%2F%2BcTqQ1yvWjT7kM2N%2BiZOY5xPIcpKU%2BJzzzB5x9d%2FBe6MBMgNwsXHm3Nqis4V%2BQGTkswx9cdW7CYDtXfTMuJTgvZbtxWDkyhe%2BYsOPcpyMwxNmctFOscmphub2Dpr3S0pVj6ND4TlxlbMH3R9sDeq24ug%2BML2smMEGOqUBp20nc0KIC7cbRU0B7EwDm7qbXODhjuHb3Rrp1CwNg%2FvvX0mVRpRM6wr45EJX4Ctmxu9kSrJVfksGAPD3VguLMnPZnLCRtSdAuRqdhGdQFWAz4cV%2F%2Bof0wb3e%2F8XLXiK1CHCqrMjo2XQ9dV7kW8DvUV40Kr150N%2BroczoX%2BoUg20Bd5kUfWf1Ruc8rTgwt3R4totBREphX1FF3N%2B1EJXA1FIGejr7&X-Amz-Signature=8091c409e42e6d98e22af3c708b53d89b247673c638e653877d40b71bf07e09e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OJQN26%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAWc%2BP7cdLNCGaUmOzwqQvw1iAnOS99nsH6fzzrbA38dAiEApYDcvsEm0xusMbHLQOH2Lbk0v4%2FGIc4a0MZ4IIprk1Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGaFEP2bOumVuCtq8ircA0zgNoAZBSwPi81rzV4IIf%2BmV6FEBD%2BOvw4APZuK6IAfjVpmTSHbCrwHEtmleXp38bUI69tKpFiikQIDH2SQzYT5vAJTQbwxBwUhvtfnsj5ukKZXyt%2F5eLQYVFdS7eoUn2H4nyOvBT%2BRc10hAlMrIn1EVfsYNpdT%2BIPJcE5%2BwO042kXaeJ7czQ1J7t%2FkgjKtYnBIRS2KWxtJ5t1UVThTiqfsp0FDlhbdtgsvGbPW52EahFPoq6I3mirQFqZo6Ijttxa3iD%2FgtJbKLT0F342XAH3FkCB%2F8XAkAdjyui00AP8o0SQIUbqIPkf5G4WtpjMMLiLI9uxNawaDnvIYKYqcUjaNAdpFWI6U71n%2Ba6e5pnyFUEA8WoI4cySgomFd9mpRRHf36gzbu%2B%2FgEB163HyL4sJb8%2B3QiY7iUcx5aVn%2B8%2Fp3CdQtvUpimvpBnQNATetpkomCZPoUgFSDigRy%2BMCo8NmGkQGhjTnLls%2F%2BcTqQ1yvWjT7kM2N%2BiZOY5xPIcpKU%2BJzzzB5x9d%2FBe6MBMgNwsXHm3Nqis4V%2BQGTkswx9cdW7CYDtXfTMuJTgvZbtxWDkyhe%2BYsOPcpyMwxNmctFOscmphub2Dpr3S0pVj6ND4TlxlbMH3R9sDeq24ug%2BML2smMEGOqUBp20nc0KIC7cbRU0B7EwDm7qbXODhjuHb3Rrp1CwNg%2FvvX0mVRpRM6wr45EJX4Ctmxu9kSrJVfksGAPD3VguLMnPZnLCRtSdAuRqdhGdQFWAz4cV%2F%2Bof0wb3e%2F8XLXiK1CHCqrMjo2XQ9dV7kW8DvUV40Kr150N%2BroczoX%2BoUg20Bd5kUfWf1Ruc8rTgwt3R4totBREphX1FF3N%2B1EJXA1FIGejr7&X-Amz-Signature=8cd24f3d1627cf30168d9775eca394b4a744590062ff16b44a8dcc7c4999f403&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OJQN26%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAWc%2BP7cdLNCGaUmOzwqQvw1iAnOS99nsH6fzzrbA38dAiEApYDcvsEm0xusMbHLQOH2Lbk0v4%2FGIc4a0MZ4IIprk1Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGaFEP2bOumVuCtq8ircA0zgNoAZBSwPi81rzV4IIf%2BmV6FEBD%2BOvw4APZuK6IAfjVpmTSHbCrwHEtmleXp38bUI69tKpFiikQIDH2SQzYT5vAJTQbwxBwUhvtfnsj5ukKZXyt%2F5eLQYVFdS7eoUn2H4nyOvBT%2BRc10hAlMrIn1EVfsYNpdT%2BIPJcE5%2BwO042kXaeJ7czQ1J7t%2FkgjKtYnBIRS2KWxtJ5t1UVThTiqfsp0FDlhbdtgsvGbPW52EahFPoq6I3mirQFqZo6Ijttxa3iD%2FgtJbKLT0F342XAH3FkCB%2F8XAkAdjyui00AP8o0SQIUbqIPkf5G4WtpjMMLiLI9uxNawaDnvIYKYqcUjaNAdpFWI6U71n%2Ba6e5pnyFUEA8WoI4cySgomFd9mpRRHf36gzbu%2B%2FgEB163HyL4sJb8%2B3QiY7iUcx5aVn%2B8%2Fp3CdQtvUpimvpBnQNATetpkomCZPoUgFSDigRy%2BMCo8NmGkQGhjTnLls%2F%2BcTqQ1yvWjT7kM2N%2BiZOY5xPIcpKU%2BJzzzB5x9d%2FBe6MBMgNwsXHm3Nqis4V%2BQGTkswx9cdW7CYDtXfTMuJTgvZbtxWDkyhe%2BYsOPcpyMwxNmctFOscmphub2Dpr3S0pVj6ND4TlxlbMH3R9sDeq24ug%2BML2smMEGOqUBp20nc0KIC7cbRU0B7EwDm7qbXODhjuHb3Rrp1CwNg%2FvvX0mVRpRM6wr45EJX4Ctmxu9kSrJVfksGAPD3VguLMnPZnLCRtSdAuRqdhGdQFWAz4cV%2F%2Bof0wb3e%2F8XLXiK1CHCqrMjo2XQ9dV7kW8DvUV40Kr150N%2BroczoX%2BoUg20Bd5kUfWf1Ruc8rTgwt3R4totBREphX1FF3N%2B1EJXA1FIGejr7&X-Amz-Signature=2643305d6b421a46316c311491994bb7a81aed77363cbc6185c524e943cfdc00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OJQN26%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAWc%2BP7cdLNCGaUmOzwqQvw1iAnOS99nsH6fzzrbA38dAiEApYDcvsEm0xusMbHLQOH2Lbk0v4%2FGIc4a0MZ4IIprk1Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGaFEP2bOumVuCtq8ircA0zgNoAZBSwPi81rzV4IIf%2BmV6FEBD%2BOvw4APZuK6IAfjVpmTSHbCrwHEtmleXp38bUI69tKpFiikQIDH2SQzYT5vAJTQbwxBwUhvtfnsj5ukKZXyt%2F5eLQYVFdS7eoUn2H4nyOvBT%2BRc10hAlMrIn1EVfsYNpdT%2BIPJcE5%2BwO042kXaeJ7czQ1J7t%2FkgjKtYnBIRS2KWxtJ5t1UVThTiqfsp0FDlhbdtgsvGbPW52EahFPoq6I3mirQFqZo6Ijttxa3iD%2FgtJbKLT0F342XAH3FkCB%2F8XAkAdjyui00AP8o0SQIUbqIPkf5G4WtpjMMLiLI9uxNawaDnvIYKYqcUjaNAdpFWI6U71n%2Ba6e5pnyFUEA8WoI4cySgomFd9mpRRHf36gzbu%2B%2FgEB163HyL4sJb8%2B3QiY7iUcx5aVn%2B8%2Fp3CdQtvUpimvpBnQNATetpkomCZPoUgFSDigRy%2BMCo8NmGkQGhjTnLls%2F%2BcTqQ1yvWjT7kM2N%2BiZOY5xPIcpKU%2BJzzzB5x9d%2FBe6MBMgNwsXHm3Nqis4V%2BQGTkswx9cdW7CYDtXfTMuJTgvZbtxWDkyhe%2BYsOPcpyMwxNmctFOscmphub2Dpr3S0pVj6ND4TlxlbMH3R9sDeq24ug%2BML2smMEGOqUBp20nc0KIC7cbRU0B7EwDm7qbXODhjuHb3Rrp1CwNg%2FvvX0mVRpRM6wr45EJX4Ctmxu9kSrJVfksGAPD3VguLMnPZnLCRtSdAuRqdhGdQFWAz4cV%2F%2Bof0wb3e%2F8XLXiK1CHCqrMjo2XQ9dV7kW8DvUV40Kr150N%2BroczoX%2BoUg20Bd5kUfWf1Ruc8rTgwt3R4totBREphX1FF3N%2B1EJXA1FIGejr7&X-Amz-Signature=30adcc8e8e15f8c3ef82174cb57c1345ddcf96abd3f1a27f20cdfa9185f82a04&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
