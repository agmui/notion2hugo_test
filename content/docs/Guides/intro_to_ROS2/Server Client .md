---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQGZFRG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHT2%2Bg819Qj%2Bo5y9Dt3mWobVRgwq2WdBJl8Td9dlf6b3AiA8z%2FR4JniQ44x0vNURFGUhIIujC6FubRP1Ns7Mq6qvxCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCoP2UZ0vlRbb8rkIKtwDFDQaMH%2FyBzxScBq11jB6hTTrXlVkvv1PKmKZcFxdoafbF%2FlTCYAxQn8ueHuSVcSqxF0t%2FevsPTtc89Tb%2B5yUFASY9cfmeP7zs6Bl5ldwN8HyQzr7kqXNlRdot7OVhN8%2FHmN%2BWc9hNcPIGSo%2BpqCIKxsHJZWJHef1TrwOL26moN%2BxmgZmh4PKC5Fc89el7o%2FJz4%2B%2Bi9JJk5oTtSQx6QjVJn90vf3Wnrie7jD3Bvz3uQMs5gg3Vv3%2FNu24dvCw%2B8sm6fG1w3pQNM7NlGAJvV80R6Fj0rt1u6t9Qnj3IA4Fh9jrQGATJRPdYO0Jaq1O9TBi3xpnzgmkVQFyhr%2FMXySwgoPUwSDh%2B4ABifuRXYMhs1TSIw6RWSJDUGsMXdYEY5phlZ4GlCkvBDtdRHNA%2F8CwKibzsnEG2lsUwgBee1C7cn0sf%2BMCaq7FM96xLxmk1zwsyBswM67H4GUSvYr3Idhs80NAHwLdQzNFSP5hrQ3LyaGzp4giYHJbmdpD%2FMOPolijJyWdFXnjnii3l9es1%2F631JGjaoZ4sT%2BttczCWT%2Fyrjdz%2BqUtHyV8m2TNOE4WFwYtjNLK%2Bg8iFFLe4KJuk5LCJPtmfJmlTSIC8xEuozVI9GF9mD%2BIbGvDMNLivPAwqJCKvgY6pgGsfrO65fXw8ws%2BfR8lFXqyQAZsm%2Fybv5mNI%2FgDyYZeIWQWK4TMowK3BG%2BLSpGKhZgrneejdhwOHXvCFrHJl1f2mzaRpqw38v1fz3K0zjJ4T%2Beu0YvDbR%2Bv6sTcTWgbStQ35vgWbI1C4Lj9BuVg6WdCOgubziC7GxqncknTWYkegvB244kQyc7nWFxNOK%2FbonFyGyMHVJf66x%2F9O66ZaWjTj6liBK4f&X-Amz-Signature=63dd1bcd991dd097a715605d7559575b52e9db25fa425b834135242ef8609450&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQGZFRG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHT2%2Bg819Qj%2Bo5y9Dt3mWobVRgwq2WdBJl8Td9dlf6b3AiA8z%2FR4JniQ44x0vNURFGUhIIujC6FubRP1Ns7Mq6qvxCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCoP2UZ0vlRbb8rkIKtwDFDQaMH%2FyBzxScBq11jB6hTTrXlVkvv1PKmKZcFxdoafbF%2FlTCYAxQn8ueHuSVcSqxF0t%2FevsPTtc89Tb%2B5yUFASY9cfmeP7zs6Bl5ldwN8HyQzr7kqXNlRdot7OVhN8%2FHmN%2BWc9hNcPIGSo%2BpqCIKxsHJZWJHef1TrwOL26moN%2BxmgZmh4PKC5Fc89el7o%2FJz4%2B%2Bi9JJk5oTtSQx6QjVJn90vf3Wnrie7jD3Bvz3uQMs5gg3Vv3%2FNu24dvCw%2B8sm6fG1w3pQNM7NlGAJvV80R6Fj0rt1u6t9Qnj3IA4Fh9jrQGATJRPdYO0Jaq1O9TBi3xpnzgmkVQFyhr%2FMXySwgoPUwSDh%2B4ABifuRXYMhs1TSIw6RWSJDUGsMXdYEY5phlZ4GlCkvBDtdRHNA%2F8CwKibzsnEG2lsUwgBee1C7cn0sf%2BMCaq7FM96xLxmk1zwsyBswM67H4GUSvYr3Idhs80NAHwLdQzNFSP5hrQ3LyaGzp4giYHJbmdpD%2FMOPolijJyWdFXnjnii3l9es1%2F631JGjaoZ4sT%2BttczCWT%2Fyrjdz%2BqUtHyV8m2TNOE4WFwYtjNLK%2Bg8iFFLe4KJuk5LCJPtmfJmlTSIC8xEuozVI9GF9mD%2BIbGvDMNLivPAwqJCKvgY6pgGsfrO65fXw8ws%2BfR8lFXqyQAZsm%2Fybv5mNI%2FgDyYZeIWQWK4TMowK3BG%2BLSpGKhZgrneejdhwOHXvCFrHJl1f2mzaRpqw38v1fz3K0zjJ4T%2Beu0YvDbR%2Bv6sTcTWgbStQ35vgWbI1C4Lj9BuVg6WdCOgubziC7GxqncknTWYkegvB244kQyc7nWFxNOK%2FbonFyGyMHVJf66x%2F9O66ZaWjTj6liBK4f&X-Amz-Signature=95b85f778a1d810ddf92d40adc1fbb2ff3dc75da313bf496fd420aee2c47c6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQGZFRG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHT2%2Bg819Qj%2Bo5y9Dt3mWobVRgwq2WdBJl8Td9dlf6b3AiA8z%2FR4JniQ44x0vNURFGUhIIujC6FubRP1Ns7Mq6qvxCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCoP2UZ0vlRbb8rkIKtwDFDQaMH%2FyBzxScBq11jB6hTTrXlVkvv1PKmKZcFxdoafbF%2FlTCYAxQn8ueHuSVcSqxF0t%2FevsPTtc89Tb%2B5yUFASY9cfmeP7zs6Bl5ldwN8HyQzr7kqXNlRdot7OVhN8%2FHmN%2BWc9hNcPIGSo%2BpqCIKxsHJZWJHef1TrwOL26moN%2BxmgZmh4PKC5Fc89el7o%2FJz4%2B%2Bi9JJk5oTtSQx6QjVJn90vf3Wnrie7jD3Bvz3uQMs5gg3Vv3%2FNu24dvCw%2B8sm6fG1w3pQNM7NlGAJvV80R6Fj0rt1u6t9Qnj3IA4Fh9jrQGATJRPdYO0Jaq1O9TBi3xpnzgmkVQFyhr%2FMXySwgoPUwSDh%2B4ABifuRXYMhs1TSIw6RWSJDUGsMXdYEY5phlZ4GlCkvBDtdRHNA%2F8CwKibzsnEG2lsUwgBee1C7cn0sf%2BMCaq7FM96xLxmk1zwsyBswM67H4GUSvYr3Idhs80NAHwLdQzNFSP5hrQ3LyaGzp4giYHJbmdpD%2FMOPolijJyWdFXnjnii3l9es1%2F631JGjaoZ4sT%2BttczCWT%2Fyrjdz%2BqUtHyV8m2TNOE4WFwYtjNLK%2Bg8iFFLe4KJuk5LCJPtmfJmlTSIC8xEuozVI9GF9mD%2BIbGvDMNLivPAwqJCKvgY6pgGsfrO65fXw8ws%2BfR8lFXqyQAZsm%2Fybv5mNI%2FgDyYZeIWQWK4TMowK3BG%2BLSpGKhZgrneejdhwOHXvCFrHJl1f2mzaRpqw38v1fz3K0zjJ4T%2Beu0YvDbR%2Bv6sTcTWgbStQ35vgWbI1C4Lj9BuVg6WdCOgubziC7GxqncknTWYkegvB244kQyc7nWFxNOK%2FbonFyGyMHVJf66x%2F9O66ZaWjTj6liBK4f&X-Amz-Signature=0993d1ea548a8584880695d1ce885e0ffaab6d048559e7bcc2409361cea9b028&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQGZFRG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHT2%2Bg819Qj%2Bo5y9Dt3mWobVRgwq2WdBJl8Td9dlf6b3AiA8z%2FR4JniQ44x0vNURFGUhIIujC6FubRP1Ns7Mq6qvxCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCoP2UZ0vlRbb8rkIKtwDFDQaMH%2FyBzxScBq11jB6hTTrXlVkvv1PKmKZcFxdoafbF%2FlTCYAxQn8ueHuSVcSqxF0t%2FevsPTtc89Tb%2B5yUFASY9cfmeP7zs6Bl5ldwN8HyQzr7kqXNlRdot7OVhN8%2FHmN%2BWc9hNcPIGSo%2BpqCIKxsHJZWJHef1TrwOL26moN%2BxmgZmh4PKC5Fc89el7o%2FJz4%2B%2Bi9JJk5oTtSQx6QjVJn90vf3Wnrie7jD3Bvz3uQMs5gg3Vv3%2FNu24dvCw%2B8sm6fG1w3pQNM7NlGAJvV80R6Fj0rt1u6t9Qnj3IA4Fh9jrQGATJRPdYO0Jaq1O9TBi3xpnzgmkVQFyhr%2FMXySwgoPUwSDh%2B4ABifuRXYMhs1TSIw6RWSJDUGsMXdYEY5phlZ4GlCkvBDtdRHNA%2F8CwKibzsnEG2lsUwgBee1C7cn0sf%2BMCaq7FM96xLxmk1zwsyBswM67H4GUSvYr3Idhs80NAHwLdQzNFSP5hrQ3LyaGzp4giYHJbmdpD%2FMOPolijJyWdFXnjnii3l9es1%2F631JGjaoZ4sT%2BttczCWT%2Fyrjdz%2BqUtHyV8m2TNOE4WFwYtjNLK%2Bg8iFFLe4KJuk5LCJPtmfJmlTSIC8xEuozVI9GF9mD%2BIbGvDMNLivPAwqJCKvgY6pgGsfrO65fXw8ws%2BfR8lFXqyQAZsm%2Fybv5mNI%2FgDyYZeIWQWK4TMowK3BG%2BLSpGKhZgrneejdhwOHXvCFrHJl1f2mzaRpqw38v1fz3K0zjJ4T%2Beu0YvDbR%2Bv6sTcTWgbStQ35vgWbI1C4Lj9BuVg6WdCOgubziC7GxqncknTWYkegvB244kQyc7nWFxNOK%2FbonFyGyMHVJf66x%2F9O66ZaWjTj6liBK4f&X-Amz-Signature=0719f30e1acbcd0e7fe706b4cc36973dc51492b331575e7409664453907604f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQGZFRG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHT2%2Bg819Qj%2Bo5y9Dt3mWobVRgwq2WdBJl8Td9dlf6b3AiA8z%2FR4JniQ44x0vNURFGUhIIujC6FubRP1Ns7Mq6qvxCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCoP2UZ0vlRbb8rkIKtwDFDQaMH%2FyBzxScBq11jB6hTTrXlVkvv1PKmKZcFxdoafbF%2FlTCYAxQn8ueHuSVcSqxF0t%2FevsPTtc89Tb%2B5yUFASY9cfmeP7zs6Bl5ldwN8HyQzr7kqXNlRdot7OVhN8%2FHmN%2BWc9hNcPIGSo%2BpqCIKxsHJZWJHef1TrwOL26moN%2BxmgZmh4PKC5Fc89el7o%2FJz4%2B%2Bi9JJk5oTtSQx6QjVJn90vf3Wnrie7jD3Bvz3uQMs5gg3Vv3%2FNu24dvCw%2B8sm6fG1w3pQNM7NlGAJvV80R6Fj0rt1u6t9Qnj3IA4Fh9jrQGATJRPdYO0Jaq1O9TBi3xpnzgmkVQFyhr%2FMXySwgoPUwSDh%2B4ABifuRXYMhs1TSIw6RWSJDUGsMXdYEY5phlZ4GlCkvBDtdRHNA%2F8CwKibzsnEG2lsUwgBee1C7cn0sf%2BMCaq7FM96xLxmk1zwsyBswM67H4GUSvYr3Idhs80NAHwLdQzNFSP5hrQ3LyaGzp4giYHJbmdpD%2FMOPolijJyWdFXnjnii3l9es1%2F631JGjaoZ4sT%2BttczCWT%2Fyrjdz%2BqUtHyV8m2TNOE4WFwYtjNLK%2Bg8iFFLe4KJuk5LCJPtmfJmlTSIC8xEuozVI9GF9mD%2BIbGvDMNLivPAwqJCKvgY6pgGsfrO65fXw8ws%2BfR8lFXqyQAZsm%2Fybv5mNI%2FgDyYZeIWQWK4TMowK3BG%2BLSpGKhZgrneejdhwOHXvCFrHJl1f2mzaRpqw38v1fz3K0zjJ4T%2Beu0YvDbR%2Bv6sTcTWgbStQ35vgWbI1C4Lj9BuVg6WdCOgubziC7GxqncknTWYkegvB244kQyc7nWFxNOK%2FbonFyGyMHVJf66x%2F9O66ZaWjTj6liBK4f&X-Amz-Signature=9b1e95a64281e47365622009b873cdf0a90bc4f288affe95f32195864e8b1454&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
