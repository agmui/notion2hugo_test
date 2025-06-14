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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUT25ERF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIArgIQllX4wedsK6NWkVRBMjInUpJLkBe7bk8CtDG6%2FKAiEA6iD%2FXtA0PtunOOaeB4tO4%2BT3O%2BhlmnV5OTSXInbLQnEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCZpwrhWZ4jxNY%2BVkCrcA%2BGtc2sH%2FuflJdBB3MW1wOheHb86affkX4%2BM7LfISs29UG9E2BXAs%2FWskSRdGhMEV5m35NWDNngsZZ64oTDe1LbNNWH2pxIcQYlT%2BTBVK3A781%2BvSuKNnD79SBr1Ub8mXUID0w3mgDeMXi7HdvNedVQLbvAV4JVg6BWbW96I6%2BaNKtF3crjdK9fg4SjqTAwiJrz6t4CnWhthcb7ry29CwDcPEWZOmm7VIFYpPueyxtDdvTMnWTTbMNEyRLciuDUctbd0CFCzIYPD6iNxrnVJqP2zuhao%2F5JYdTiWV6594qManTQEwOLK3ZXyIjNqyZrSbod5XxRhRFMPelqsW%2BpVX%2BnhV1LpWa4LgwMuMGkJgubLoVfH9Im2qWFXfTmYv6w1ksNkmWTSlkbewWK6ibVmutOg0c3Yx9WWNRMMNSKmYYd%2BHFbdaIh%2FuaOTEdnh40ZpebiTS2t5e%2BbnuJSDAZzy4IpbYVqD%2Bo3ftpl8JnZMYVb4gjEWYXXiIMdOMULv2iWhPFedvHTrknFQRtKiV%2Fxej7LUt43SSqZs01VI4KPmCVIFGzACSfJeD0iiUkHuitk7IujGpBqnoLlmKBP0DZTf%2F1UzLujfkhfo3DP6OGXFW3gu7Q34ho5ulTGRAc3wMOfbssIGOqUB7V%2F41bguygHZr5VMWQNb%2FHwf5%2BwyEf9xzNpOvvQy%2FbpPGLC07o2k9wBw8ReY6jONz0dJFuyIWZdwCia6uqZ8W8FCOoo1StA8BV9FRRZY7trKT%2BXbB%2BDgp7hq8RhFmck8jeEVJ9arXNkSqle8H6Et7%2BhVFZUXk3bsAHhio2iFWXNVdrKHbDRnzAGD9luiJoPdMQ5SDtb3qCnA3A9IflqK6hLpuR3d&X-Amz-Signature=194d610b7e1fb442be8ecb5eb8831843b0cd89e5a2765036c84b4290c73694c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUT25ERF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIArgIQllX4wedsK6NWkVRBMjInUpJLkBe7bk8CtDG6%2FKAiEA6iD%2FXtA0PtunOOaeB4tO4%2BT3O%2BhlmnV5OTSXInbLQnEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCZpwrhWZ4jxNY%2BVkCrcA%2BGtc2sH%2FuflJdBB3MW1wOheHb86affkX4%2BM7LfISs29UG9E2BXAs%2FWskSRdGhMEV5m35NWDNngsZZ64oTDe1LbNNWH2pxIcQYlT%2BTBVK3A781%2BvSuKNnD79SBr1Ub8mXUID0w3mgDeMXi7HdvNedVQLbvAV4JVg6BWbW96I6%2BaNKtF3crjdK9fg4SjqTAwiJrz6t4CnWhthcb7ry29CwDcPEWZOmm7VIFYpPueyxtDdvTMnWTTbMNEyRLciuDUctbd0CFCzIYPD6iNxrnVJqP2zuhao%2F5JYdTiWV6594qManTQEwOLK3ZXyIjNqyZrSbod5XxRhRFMPelqsW%2BpVX%2BnhV1LpWa4LgwMuMGkJgubLoVfH9Im2qWFXfTmYv6w1ksNkmWTSlkbewWK6ibVmutOg0c3Yx9WWNRMMNSKmYYd%2BHFbdaIh%2FuaOTEdnh40ZpebiTS2t5e%2BbnuJSDAZzy4IpbYVqD%2Bo3ftpl8JnZMYVb4gjEWYXXiIMdOMULv2iWhPFedvHTrknFQRtKiV%2Fxej7LUt43SSqZs01VI4KPmCVIFGzACSfJeD0iiUkHuitk7IujGpBqnoLlmKBP0DZTf%2F1UzLujfkhfo3DP6OGXFW3gu7Q34ho5ulTGRAc3wMOfbssIGOqUB7V%2F41bguygHZr5VMWQNb%2FHwf5%2BwyEf9xzNpOvvQy%2FbpPGLC07o2k9wBw8ReY6jONz0dJFuyIWZdwCia6uqZ8W8FCOoo1StA8BV9FRRZY7trKT%2BXbB%2BDgp7hq8RhFmck8jeEVJ9arXNkSqle8H6Et7%2BhVFZUXk3bsAHhio2iFWXNVdrKHbDRnzAGD9luiJoPdMQ5SDtb3qCnA3A9IflqK6hLpuR3d&X-Amz-Signature=40c3e2e64471e992a09ad57c659a59db5597d70d2546127d3a53fb630517d14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUT25ERF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIArgIQllX4wedsK6NWkVRBMjInUpJLkBe7bk8CtDG6%2FKAiEA6iD%2FXtA0PtunOOaeB4tO4%2BT3O%2BhlmnV5OTSXInbLQnEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCZpwrhWZ4jxNY%2BVkCrcA%2BGtc2sH%2FuflJdBB3MW1wOheHb86affkX4%2BM7LfISs29UG9E2BXAs%2FWskSRdGhMEV5m35NWDNngsZZ64oTDe1LbNNWH2pxIcQYlT%2BTBVK3A781%2BvSuKNnD79SBr1Ub8mXUID0w3mgDeMXi7HdvNedVQLbvAV4JVg6BWbW96I6%2BaNKtF3crjdK9fg4SjqTAwiJrz6t4CnWhthcb7ry29CwDcPEWZOmm7VIFYpPueyxtDdvTMnWTTbMNEyRLciuDUctbd0CFCzIYPD6iNxrnVJqP2zuhao%2F5JYdTiWV6594qManTQEwOLK3ZXyIjNqyZrSbod5XxRhRFMPelqsW%2BpVX%2BnhV1LpWa4LgwMuMGkJgubLoVfH9Im2qWFXfTmYv6w1ksNkmWTSlkbewWK6ibVmutOg0c3Yx9WWNRMMNSKmYYd%2BHFbdaIh%2FuaOTEdnh40ZpebiTS2t5e%2BbnuJSDAZzy4IpbYVqD%2Bo3ftpl8JnZMYVb4gjEWYXXiIMdOMULv2iWhPFedvHTrknFQRtKiV%2Fxej7LUt43SSqZs01VI4KPmCVIFGzACSfJeD0iiUkHuitk7IujGpBqnoLlmKBP0DZTf%2F1UzLujfkhfo3DP6OGXFW3gu7Q34ho5ulTGRAc3wMOfbssIGOqUB7V%2F41bguygHZr5VMWQNb%2FHwf5%2BwyEf9xzNpOvvQy%2FbpPGLC07o2k9wBw8ReY6jONz0dJFuyIWZdwCia6uqZ8W8FCOoo1StA8BV9FRRZY7trKT%2BXbB%2BDgp7hq8RhFmck8jeEVJ9arXNkSqle8H6Et7%2BhVFZUXk3bsAHhio2iFWXNVdrKHbDRnzAGD9luiJoPdMQ5SDtb3qCnA3A9IflqK6hLpuR3d&X-Amz-Signature=75426e7f70222fbe2507b7e6975763739e47ef62cc0bb0fd090f8365112e0d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUT25ERF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIArgIQllX4wedsK6NWkVRBMjInUpJLkBe7bk8CtDG6%2FKAiEA6iD%2FXtA0PtunOOaeB4tO4%2BT3O%2BhlmnV5OTSXInbLQnEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCZpwrhWZ4jxNY%2BVkCrcA%2BGtc2sH%2FuflJdBB3MW1wOheHb86affkX4%2BM7LfISs29UG9E2BXAs%2FWskSRdGhMEV5m35NWDNngsZZ64oTDe1LbNNWH2pxIcQYlT%2BTBVK3A781%2BvSuKNnD79SBr1Ub8mXUID0w3mgDeMXi7HdvNedVQLbvAV4JVg6BWbW96I6%2BaNKtF3crjdK9fg4SjqTAwiJrz6t4CnWhthcb7ry29CwDcPEWZOmm7VIFYpPueyxtDdvTMnWTTbMNEyRLciuDUctbd0CFCzIYPD6iNxrnVJqP2zuhao%2F5JYdTiWV6594qManTQEwOLK3ZXyIjNqyZrSbod5XxRhRFMPelqsW%2BpVX%2BnhV1LpWa4LgwMuMGkJgubLoVfH9Im2qWFXfTmYv6w1ksNkmWTSlkbewWK6ibVmutOg0c3Yx9WWNRMMNSKmYYd%2BHFbdaIh%2FuaOTEdnh40ZpebiTS2t5e%2BbnuJSDAZzy4IpbYVqD%2Bo3ftpl8JnZMYVb4gjEWYXXiIMdOMULv2iWhPFedvHTrknFQRtKiV%2Fxej7LUt43SSqZs01VI4KPmCVIFGzACSfJeD0iiUkHuitk7IujGpBqnoLlmKBP0DZTf%2F1UzLujfkhfo3DP6OGXFW3gu7Q34ho5ulTGRAc3wMOfbssIGOqUB7V%2F41bguygHZr5VMWQNb%2FHwf5%2BwyEf9xzNpOvvQy%2FbpPGLC07o2k9wBw8ReY6jONz0dJFuyIWZdwCia6uqZ8W8FCOoo1StA8BV9FRRZY7trKT%2BXbB%2BDgp7hq8RhFmck8jeEVJ9arXNkSqle8H6Et7%2BhVFZUXk3bsAHhio2iFWXNVdrKHbDRnzAGD9luiJoPdMQ5SDtb3qCnA3A9IflqK6hLpuR3d&X-Amz-Signature=f89bb130535a465128d40ad7c35ff78a21077685608e858bd3c61a8381b9298f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUT25ERF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIArgIQllX4wedsK6NWkVRBMjInUpJLkBe7bk8CtDG6%2FKAiEA6iD%2FXtA0PtunOOaeB4tO4%2BT3O%2BhlmnV5OTSXInbLQnEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCZpwrhWZ4jxNY%2BVkCrcA%2BGtc2sH%2FuflJdBB3MW1wOheHb86affkX4%2BM7LfISs29UG9E2BXAs%2FWskSRdGhMEV5m35NWDNngsZZ64oTDe1LbNNWH2pxIcQYlT%2BTBVK3A781%2BvSuKNnD79SBr1Ub8mXUID0w3mgDeMXi7HdvNedVQLbvAV4JVg6BWbW96I6%2BaNKtF3crjdK9fg4SjqTAwiJrz6t4CnWhthcb7ry29CwDcPEWZOmm7VIFYpPueyxtDdvTMnWTTbMNEyRLciuDUctbd0CFCzIYPD6iNxrnVJqP2zuhao%2F5JYdTiWV6594qManTQEwOLK3ZXyIjNqyZrSbod5XxRhRFMPelqsW%2BpVX%2BnhV1LpWa4LgwMuMGkJgubLoVfH9Im2qWFXfTmYv6w1ksNkmWTSlkbewWK6ibVmutOg0c3Yx9WWNRMMNSKmYYd%2BHFbdaIh%2FuaOTEdnh40ZpebiTS2t5e%2BbnuJSDAZzy4IpbYVqD%2Bo3ftpl8JnZMYVb4gjEWYXXiIMdOMULv2iWhPFedvHTrknFQRtKiV%2Fxej7LUt43SSqZs01VI4KPmCVIFGzACSfJeD0iiUkHuitk7IujGpBqnoLlmKBP0DZTf%2F1UzLujfkhfo3DP6OGXFW3gu7Q34ho5ulTGRAc3wMOfbssIGOqUB7V%2F41bguygHZr5VMWQNb%2FHwf5%2BwyEf9xzNpOvvQy%2FbpPGLC07o2k9wBw8ReY6jONz0dJFuyIWZdwCia6uqZ8W8FCOoo1StA8BV9FRRZY7trKT%2BXbB%2BDgp7hq8RhFmck8jeEVJ9arXNkSqle8H6Et7%2BhVFZUXk3bsAHhio2iFWXNVdrKHbDRnzAGD9luiJoPdMQ5SDtb3qCnA3A9IflqK6hLpuR3d&X-Amz-Signature=880c9239e2df73151cfc2b4c1851a6dec6a6c06eb6642ed1ab5e6130e2d4bdde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
