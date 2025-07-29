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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=6f07862e22b002a40e0ed0ab9fc1f5f2769baf3770c42152decbdda34198bdd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=2a646ac7c61de41f2c10ac1aa879dfd81b43b3a86c59244a1793870796cbf272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=cbc24bb4b07ae78ce6b4b4b72b2bf6fdd5139b804b770fcf402e32dc5aae566e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=c40b6359ca10e7eb9e2c134c1f14454813d0c37df8ea700eba100e14a001e6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=d3ec7370d318b3e51291824402a6664e61b8f9269ef1b7614cb780bcf459d77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
