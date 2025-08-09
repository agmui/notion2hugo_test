---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOH2WD7L%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDoBhOLtroF7F43dyt75le4nv7IPyI5PL0%2BFQgfp4abewIhAOhJ5sLwbjTTp7lewK7E0xk9M5PBiuYE9x6yLYE6kZgOKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkI2KMYKOh8Vi0fEIq3AOX8o8BSB9Pa0wtfrXwiGR6whXk9ePUSyOAg3%2BmIm%2FfeUzugNpVIu7ycmW1oGvJy%2FbTGEqDePmjZcOtitJiqeWZqNAg2JqEXT6W4zxcynO9LhsFVxB0JcsQ6EPC6HTkUyZLkWUAGbNwXajqzM5GQSwYgPjp5pzwwq%2BJWVUC%2Bbglv%2FowrNQgKmxnZGnaP%2Bqyaj13lIRMMN0iFOBYXfR4zbsXGEMgGjlNEfg%2F2g4K4qROo%2BrukGvOUA36tRBzmn6AnJmqfredLW9B7421BVHzz0nQphgO0yllBi7P0Pi35%2FuIrghxxGGD9Lih46EVwtTyd7%2FrlmAON9jXKY0N4Z6byWB2BSRq3RCOUx7qg9N%2FXfg30eVZOnACrVqGdJJiH6qExntELUWnO%2FIl3OsnTfrH23E7EvaDheMU1U%2BletELtHrTQi6QoRo%2BM6vKMDY55k23mbaMqHEn6N7BnXUmos5OE0I77pNzjfzFciUCEhFDXNQdQ%2BfhkTGFQyAM0fAuCwv5b52djv2uxmiemKW2RruFptF%2FZ5s1mEeXuvbGkChvBDw9GZ1Phrp73ygQ4ifIazK85eh80hgtp%2BaUKK9aOgYriGNrDOazJR4PG2wfuhF2k7KTx0x0qUpu6ln6y8TcnzCb9trEBjqkAcXCw2UPLVPMtQBT1O156dfXTdlA2I425%2FvFmA5nSz2vNqJN5xm0esGC5N3QfQKX83Wufe3DeSvZO8JNQpQ6enRk%2B0HjaG3c5PnaeQnnIdkuqP6bywLomDKmHd2uxPrw3eTnaotbmsItmriO2%2BtUbtTy8NmPv%2BDyBMlx%2F3ndcWGd7B%2FUcAJBiK33UnM6l2mGc2gSS10zyBGDYdWEJPc6JUr4z%2BeK&X-Amz-Signature=3729c381e88d2249a91a49e00d20993e16e4186d6f07b0475073a04b060b80fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOH2WD7L%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDoBhOLtroF7F43dyt75le4nv7IPyI5PL0%2BFQgfp4abewIhAOhJ5sLwbjTTp7lewK7E0xk9M5PBiuYE9x6yLYE6kZgOKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkI2KMYKOh8Vi0fEIq3AOX8o8BSB9Pa0wtfrXwiGR6whXk9ePUSyOAg3%2BmIm%2FfeUzugNpVIu7ycmW1oGvJy%2FbTGEqDePmjZcOtitJiqeWZqNAg2JqEXT6W4zxcynO9LhsFVxB0JcsQ6EPC6HTkUyZLkWUAGbNwXajqzM5GQSwYgPjp5pzwwq%2BJWVUC%2Bbglv%2FowrNQgKmxnZGnaP%2Bqyaj13lIRMMN0iFOBYXfR4zbsXGEMgGjlNEfg%2F2g4K4qROo%2BrukGvOUA36tRBzmn6AnJmqfredLW9B7421BVHzz0nQphgO0yllBi7P0Pi35%2FuIrghxxGGD9Lih46EVwtTyd7%2FrlmAON9jXKY0N4Z6byWB2BSRq3RCOUx7qg9N%2FXfg30eVZOnACrVqGdJJiH6qExntELUWnO%2FIl3OsnTfrH23E7EvaDheMU1U%2BletELtHrTQi6QoRo%2BM6vKMDY55k23mbaMqHEn6N7BnXUmos5OE0I77pNzjfzFciUCEhFDXNQdQ%2BfhkTGFQyAM0fAuCwv5b52djv2uxmiemKW2RruFptF%2FZ5s1mEeXuvbGkChvBDw9GZ1Phrp73ygQ4ifIazK85eh80hgtp%2BaUKK9aOgYriGNrDOazJR4PG2wfuhF2k7KTx0x0qUpu6ln6y8TcnzCb9trEBjqkAcXCw2UPLVPMtQBT1O156dfXTdlA2I425%2FvFmA5nSz2vNqJN5xm0esGC5N3QfQKX83Wufe3DeSvZO8JNQpQ6enRk%2B0HjaG3c5PnaeQnnIdkuqP6bywLomDKmHd2uxPrw3eTnaotbmsItmriO2%2BtUbtTy8NmPv%2BDyBMlx%2F3ndcWGd7B%2FUcAJBiK33UnM6l2mGc2gSS10zyBGDYdWEJPc6JUr4z%2BeK&X-Amz-Signature=274c3b3809540fdf1d4e6dbcec01a95d9fbda9aff84ae95f86651f0ec065614b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOH2WD7L%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDoBhOLtroF7F43dyt75le4nv7IPyI5PL0%2BFQgfp4abewIhAOhJ5sLwbjTTp7lewK7E0xk9M5PBiuYE9x6yLYE6kZgOKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkI2KMYKOh8Vi0fEIq3AOX8o8BSB9Pa0wtfrXwiGR6whXk9ePUSyOAg3%2BmIm%2FfeUzugNpVIu7ycmW1oGvJy%2FbTGEqDePmjZcOtitJiqeWZqNAg2JqEXT6W4zxcynO9LhsFVxB0JcsQ6EPC6HTkUyZLkWUAGbNwXajqzM5GQSwYgPjp5pzwwq%2BJWVUC%2Bbglv%2FowrNQgKmxnZGnaP%2Bqyaj13lIRMMN0iFOBYXfR4zbsXGEMgGjlNEfg%2F2g4K4qROo%2BrukGvOUA36tRBzmn6AnJmqfredLW9B7421BVHzz0nQphgO0yllBi7P0Pi35%2FuIrghxxGGD9Lih46EVwtTyd7%2FrlmAON9jXKY0N4Z6byWB2BSRq3RCOUx7qg9N%2FXfg30eVZOnACrVqGdJJiH6qExntELUWnO%2FIl3OsnTfrH23E7EvaDheMU1U%2BletELtHrTQi6QoRo%2BM6vKMDY55k23mbaMqHEn6N7BnXUmos5OE0I77pNzjfzFciUCEhFDXNQdQ%2BfhkTGFQyAM0fAuCwv5b52djv2uxmiemKW2RruFptF%2FZ5s1mEeXuvbGkChvBDw9GZ1Phrp73ygQ4ifIazK85eh80hgtp%2BaUKK9aOgYriGNrDOazJR4PG2wfuhF2k7KTx0x0qUpu6ln6y8TcnzCb9trEBjqkAcXCw2UPLVPMtQBT1O156dfXTdlA2I425%2FvFmA5nSz2vNqJN5xm0esGC5N3QfQKX83Wufe3DeSvZO8JNQpQ6enRk%2B0HjaG3c5PnaeQnnIdkuqP6bywLomDKmHd2uxPrw3eTnaotbmsItmriO2%2BtUbtTy8NmPv%2BDyBMlx%2F3ndcWGd7B%2FUcAJBiK33UnM6l2mGc2gSS10zyBGDYdWEJPc6JUr4z%2BeK&X-Amz-Signature=9cd4b33452c35e9a3ab1c7b752418a490ac52c333c499f00bf443743c29fd184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOH2WD7L%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDoBhOLtroF7F43dyt75le4nv7IPyI5PL0%2BFQgfp4abewIhAOhJ5sLwbjTTp7lewK7E0xk9M5PBiuYE9x6yLYE6kZgOKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkI2KMYKOh8Vi0fEIq3AOX8o8BSB9Pa0wtfrXwiGR6whXk9ePUSyOAg3%2BmIm%2FfeUzugNpVIu7ycmW1oGvJy%2FbTGEqDePmjZcOtitJiqeWZqNAg2JqEXT6W4zxcynO9LhsFVxB0JcsQ6EPC6HTkUyZLkWUAGbNwXajqzM5GQSwYgPjp5pzwwq%2BJWVUC%2Bbglv%2FowrNQgKmxnZGnaP%2Bqyaj13lIRMMN0iFOBYXfR4zbsXGEMgGjlNEfg%2F2g4K4qROo%2BrukGvOUA36tRBzmn6AnJmqfredLW9B7421BVHzz0nQphgO0yllBi7P0Pi35%2FuIrghxxGGD9Lih46EVwtTyd7%2FrlmAON9jXKY0N4Z6byWB2BSRq3RCOUx7qg9N%2FXfg30eVZOnACrVqGdJJiH6qExntELUWnO%2FIl3OsnTfrH23E7EvaDheMU1U%2BletELtHrTQi6QoRo%2BM6vKMDY55k23mbaMqHEn6N7BnXUmos5OE0I77pNzjfzFciUCEhFDXNQdQ%2BfhkTGFQyAM0fAuCwv5b52djv2uxmiemKW2RruFptF%2FZ5s1mEeXuvbGkChvBDw9GZ1Phrp73ygQ4ifIazK85eh80hgtp%2BaUKK9aOgYriGNrDOazJR4PG2wfuhF2k7KTx0x0qUpu6ln6y8TcnzCb9trEBjqkAcXCw2UPLVPMtQBT1O156dfXTdlA2I425%2FvFmA5nSz2vNqJN5xm0esGC5N3QfQKX83Wufe3DeSvZO8JNQpQ6enRk%2B0HjaG3c5PnaeQnnIdkuqP6bywLomDKmHd2uxPrw3eTnaotbmsItmriO2%2BtUbtTy8NmPv%2BDyBMlx%2F3ndcWGd7B%2FUcAJBiK33UnM6l2mGc2gSS10zyBGDYdWEJPc6JUr4z%2BeK&X-Amz-Signature=4e381fae2c980d699114d0dc7fe941bc64bfab84efce7c1a3a3f06d275dd09fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOH2WD7L%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDoBhOLtroF7F43dyt75le4nv7IPyI5PL0%2BFQgfp4abewIhAOhJ5sLwbjTTp7lewK7E0xk9M5PBiuYE9x6yLYE6kZgOKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkI2KMYKOh8Vi0fEIq3AOX8o8BSB9Pa0wtfrXwiGR6whXk9ePUSyOAg3%2BmIm%2FfeUzugNpVIu7ycmW1oGvJy%2FbTGEqDePmjZcOtitJiqeWZqNAg2JqEXT6W4zxcynO9LhsFVxB0JcsQ6EPC6HTkUyZLkWUAGbNwXajqzM5GQSwYgPjp5pzwwq%2BJWVUC%2Bbglv%2FowrNQgKmxnZGnaP%2Bqyaj13lIRMMN0iFOBYXfR4zbsXGEMgGjlNEfg%2F2g4K4qROo%2BrukGvOUA36tRBzmn6AnJmqfredLW9B7421BVHzz0nQphgO0yllBi7P0Pi35%2FuIrghxxGGD9Lih46EVwtTyd7%2FrlmAON9jXKY0N4Z6byWB2BSRq3RCOUx7qg9N%2FXfg30eVZOnACrVqGdJJiH6qExntELUWnO%2FIl3OsnTfrH23E7EvaDheMU1U%2BletELtHrTQi6QoRo%2BM6vKMDY55k23mbaMqHEn6N7BnXUmos5OE0I77pNzjfzFciUCEhFDXNQdQ%2BfhkTGFQyAM0fAuCwv5b52djv2uxmiemKW2RruFptF%2FZ5s1mEeXuvbGkChvBDw9GZ1Phrp73ygQ4ifIazK85eh80hgtp%2BaUKK9aOgYriGNrDOazJR4PG2wfuhF2k7KTx0x0qUpu6ln6y8TcnzCb9trEBjqkAcXCw2UPLVPMtQBT1O156dfXTdlA2I425%2FvFmA5nSz2vNqJN5xm0esGC5N3QfQKX83Wufe3DeSvZO8JNQpQ6enRk%2B0HjaG3c5PnaeQnnIdkuqP6bywLomDKmHd2uxPrw3eTnaotbmsItmriO2%2BtUbtTy8NmPv%2BDyBMlx%2F3ndcWGd7B%2FUcAJBiK33UnM6l2mGc2gSS10zyBGDYdWEJPc6JUr4z%2BeK&X-Amz-Signature=b6684de44f5be89887b9b2f30bd02806aecf8356eec50d3ef422f578e4d68fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
