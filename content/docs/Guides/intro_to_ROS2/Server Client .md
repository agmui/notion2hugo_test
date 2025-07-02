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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVF7IA7Y%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK4N7iWhL2UtOsEVFE5qO22Pwa7T%2BrtL2MDtr8eyURuAiA%2FYgJ0mym5QRqsYFBn4PSB2sLg8%2FAjmReTY8jrKV5fYyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0gZ2sYIs5oOrt956KtwDDQSpMbZKa0bYSXJtO3D2nzFMV%2Bk8hVsiC0A1VYxt42%2Bl3cVkK1uhRaErBm0slkBMYPv3JpQDDVGSW2K7bwUmQof6%2FJyx03Ygor4jzvnPQrQjldE6Fpdfj%2BRNs9iLqAT6SZ6oMM2CcgTKko9fP4EiqR3u2SQ9NDYe4oCm3K0VQeWPF9lkI3cnwTVqDLxILUK%2FMDhONa3CZ11bYsBK7tIAfIOIHfm%2F4vsBGI7Y2p6sohpUS2FYq13xN7p56RuPHkc0kfgKyRLF%2B7n%2FZq%2FsPztbmRYHjo9RoUCvw%2BdbcRdz56gDfs8LrQy%2BlRh8dCBXtQMhEa8qPYV0CqusBqTkYoqryioyopIZyXJdVmKdySnz047BE%2FuhakO5cUoH0iNWo7Ljh978%2BhIT0FVs84oT1cAVD6BI4k8swFtehjTr0hV8cw541TkqjEKA2vS%2BeJN0AW25PH7r3CjTucyB9DlyMcypeSqjKNtlGke4mbzvKbHe2HQ%2FdjYy0lPbB4Yq3si0bRJdNmF%2FmeqKX0612367uSxpSd415fqTfFw0i5CbKhk%2BrRQTbbf8F1MIsEhUbGZgWbxzCoNKkRTVlAI3BCPC4e9Fl46fncmo4kIjbBo16FTnXc1tOkEKPBhuI%2Fe6YmswqrWTwwY6pgGpiBxd%2F93zk%2BtAA1QMpme1r%2BNKaxV%2FatKedi3OXrrbEt0ZN0fU3kzrNRcdZYbkVxYNuXWW5EL76JJRktP3y4Ty31AI%2BInJayzrnq8LckujA5jKVl%2FYVS7PXIxYeHhO0nzdSOeJHaBU5DO8L%2BttcQsSg%2Fqz50ZJrA49Xt6VZJg2e%2Bqxo7IXbtiOK%2B0v%2BtoYZDWtErhQBnKHUn0tn0AQvm80RePOMS4R&X-Amz-Signature=5c87f0ec9460cbf24d68850d11fe1a55aef2478caeffc9cea5e0cbd438a0796c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVF7IA7Y%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK4N7iWhL2UtOsEVFE5qO22Pwa7T%2BrtL2MDtr8eyURuAiA%2FYgJ0mym5QRqsYFBn4PSB2sLg8%2FAjmReTY8jrKV5fYyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0gZ2sYIs5oOrt956KtwDDQSpMbZKa0bYSXJtO3D2nzFMV%2Bk8hVsiC0A1VYxt42%2Bl3cVkK1uhRaErBm0slkBMYPv3JpQDDVGSW2K7bwUmQof6%2FJyx03Ygor4jzvnPQrQjldE6Fpdfj%2BRNs9iLqAT6SZ6oMM2CcgTKko9fP4EiqR3u2SQ9NDYe4oCm3K0VQeWPF9lkI3cnwTVqDLxILUK%2FMDhONa3CZ11bYsBK7tIAfIOIHfm%2F4vsBGI7Y2p6sohpUS2FYq13xN7p56RuPHkc0kfgKyRLF%2B7n%2FZq%2FsPztbmRYHjo9RoUCvw%2BdbcRdz56gDfs8LrQy%2BlRh8dCBXtQMhEa8qPYV0CqusBqTkYoqryioyopIZyXJdVmKdySnz047BE%2FuhakO5cUoH0iNWo7Ljh978%2BhIT0FVs84oT1cAVD6BI4k8swFtehjTr0hV8cw541TkqjEKA2vS%2BeJN0AW25PH7r3CjTucyB9DlyMcypeSqjKNtlGke4mbzvKbHe2HQ%2FdjYy0lPbB4Yq3si0bRJdNmF%2FmeqKX0612367uSxpSd415fqTfFw0i5CbKhk%2BrRQTbbf8F1MIsEhUbGZgWbxzCoNKkRTVlAI3BCPC4e9Fl46fncmo4kIjbBo16FTnXc1tOkEKPBhuI%2Fe6YmswqrWTwwY6pgGpiBxd%2F93zk%2BtAA1QMpme1r%2BNKaxV%2FatKedi3OXrrbEt0ZN0fU3kzrNRcdZYbkVxYNuXWW5EL76JJRktP3y4Ty31AI%2BInJayzrnq8LckujA5jKVl%2FYVS7PXIxYeHhO0nzdSOeJHaBU5DO8L%2BttcQsSg%2Fqz50ZJrA49Xt6VZJg2e%2Bqxo7IXbtiOK%2B0v%2BtoYZDWtErhQBnKHUn0tn0AQvm80RePOMS4R&X-Amz-Signature=04f51e7ca6e165d0c8197499b05a430a61e67a1302a823ce1ad13f9263857b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVF7IA7Y%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK4N7iWhL2UtOsEVFE5qO22Pwa7T%2BrtL2MDtr8eyURuAiA%2FYgJ0mym5QRqsYFBn4PSB2sLg8%2FAjmReTY8jrKV5fYyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0gZ2sYIs5oOrt956KtwDDQSpMbZKa0bYSXJtO3D2nzFMV%2Bk8hVsiC0A1VYxt42%2Bl3cVkK1uhRaErBm0slkBMYPv3JpQDDVGSW2K7bwUmQof6%2FJyx03Ygor4jzvnPQrQjldE6Fpdfj%2BRNs9iLqAT6SZ6oMM2CcgTKko9fP4EiqR3u2SQ9NDYe4oCm3K0VQeWPF9lkI3cnwTVqDLxILUK%2FMDhONa3CZ11bYsBK7tIAfIOIHfm%2F4vsBGI7Y2p6sohpUS2FYq13xN7p56RuPHkc0kfgKyRLF%2B7n%2FZq%2FsPztbmRYHjo9RoUCvw%2BdbcRdz56gDfs8LrQy%2BlRh8dCBXtQMhEa8qPYV0CqusBqTkYoqryioyopIZyXJdVmKdySnz047BE%2FuhakO5cUoH0iNWo7Ljh978%2BhIT0FVs84oT1cAVD6BI4k8swFtehjTr0hV8cw541TkqjEKA2vS%2BeJN0AW25PH7r3CjTucyB9DlyMcypeSqjKNtlGke4mbzvKbHe2HQ%2FdjYy0lPbB4Yq3si0bRJdNmF%2FmeqKX0612367uSxpSd415fqTfFw0i5CbKhk%2BrRQTbbf8F1MIsEhUbGZgWbxzCoNKkRTVlAI3BCPC4e9Fl46fncmo4kIjbBo16FTnXc1tOkEKPBhuI%2Fe6YmswqrWTwwY6pgGpiBxd%2F93zk%2BtAA1QMpme1r%2BNKaxV%2FatKedi3OXrrbEt0ZN0fU3kzrNRcdZYbkVxYNuXWW5EL76JJRktP3y4Ty31AI%2BInJayzrnq8LckujA5jKVl%2FYVS7PXIxYeHhO0nzdSOeJHaBU5DO8L%2BttcQsSg%2Fqz50ZJrA49Xt6VZJg2e%2Bqxo7IXbtiOK%2B0v%2BtoYZDWtErhQBnKHUn0tn0AQvm80RePOMS4R&X-Amz-Signature=99243649358d5f42431ab45c513470677d7744b85de0890b0e921e54c8508b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVF7IA7Y%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK4N7iWhL2UtOsEVFE5qO22Pwa7T%2BrtL2MDtr8eyURuAiA%2FYgJ0mym5QRqsYFBn4PSB2sLg8%2FAjmReTY8jrKV5fYyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0gZ2sYIs5oOrt956KtwDDQSpMbZKa0bYSXJtO3D2nzFMV%2Bk8hVsiC0A1VYxt42%2Bl3cVkK1uhRaErBm0slkBMYPv3JpQDDVGSW2K7bwUmQof6%2FJyx03Ygor4jzvnPQrQjldE6Fpdfj%2BRNs9iLqAT6SZ6oMM2CcgTKko9fP4EiqR3u2SQ9NDYe4oCm3K0VQeWPF9lkI3cnwTVqDLxILUK%2FMDhONa3CZ11bYsBK7tIAfIOIHfm%2F4vsBGI7Y2p6sohpUS2FYq13xN7p56RuPHkc0kfgKyRLF%2B7n%2FZq%2FsPztbmRYHjo9RoUCvw%2BdbcRdz56gDfs8LrQy%2BlRh8dCBXtQMhEa8qPYV0CqusBqTkYoqryioyopIZyXJdVmKdySnz047BE%2FuhakO5cUoH0iNWo7Ljh978%2BhIT0FVs84oT1cAVD6BI4k8swFtehjTr0hV8cw541TkqjEKA2vS%2BeJN0AW25PH7r3CjTucyB9DlyMcypeSqjKNtlGke4mbzvKbHe2HQ%2FdjYy0lPbB4Yq3si0bRJdNmF%2FmeqKX0612367uSxpSd415fqTfFw0i5CbKhk%2BrRQTbbf8F1MIsEhUbGZgWbxzCoNKkRTVlAI3BCPC4e9Fl46fncmo4kIjbBo16FTnXc1tOkEKPBhuI%2Fe6YmswqrWTwwY6pgGpiBxd%2F93zk%2BtAA1QMpme1r%2BNKaxV%2FatKedi3OXrrbEt0ZN0fU3kzrNRcdZYbkVxYNuXWW5EL76JJRktP3y4Ty31AI%2BInJayzrnq8LckujA5jKVl%2FYVS7PXIxYeHhO0nzdSOeJHaBU5DO8L%2BttcQsSg%2Fqz50ZJrA49Xt6VZJg2e%2Bqxo7IXbtiOK%2B0v%2BtoYZDWtErhQBnKHUn0tn0AQvm80RePOMS4R&X-Amz-Signature=180b6a62a3eaa2c1282150a37e95525b2a905a982dde08a0ac5fa26c5c94ddf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVF7IA7Y%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK4N7iWhL2UtOsEVFE5qO22Pwa7T%2BrtL2MDtr8eyURuAiA%2FYgJ0mym5QRqsYFBn4PSB2sLg8%2FAjmReTY8jrKV5fYyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0gZ2sYIs5oOrt956KtwDDQSpMbZKa0bYSXJtO3D2nzFMV%2Bk8hVsiC0A1VYxt42%2Bl3cVkK1uhRaErBm0slkBMYPv3JpQDDVGSW2K7bwUmQof6%2FJyx03Ygor4jzvnPQrQjldE6Fpdfj%2BRNs9iLqAT6SZ6oMM2CcgTKko9fP4EiqR3u2SQ9NDYe4oCm3K0VQeWPF9lkI3cnwTVqDLxILUK%2FMDhONa3CZ11bYsBK7tIAfIOIHfm%2F4vsBGI7Y2p6sohpUS2FYq13xN7p56RuPHkc0kfgKyRLF%2B7n%2FZq%2FsPztbmRYHjo9RoUCvw%2BdbcRdz56gDfs8LrQy%2BlRh8dCBXtQMhEa8qPYV0CqusBqTkYoqryioyopIZyXJdVmKdySnz047BE%2FuhakO5cUoH0iNWo7Ljh978%2BhIT0FVs84oT1cAVD6BI4k8swFtehjTr0hV8cw541TkqjEKA2vS%2BeJN0AW25PH7r3CjTucyB9DlyMcypeSqjKNtlGke4mbzvKbHe2HQ%2FdjYy0lPbB4Yq3si0bRJdNmF%2FmeqKX0612367uSxpSd415fqTfFw0i5CbKhk%2BrRQTbbf8F1MIsEhUbGZgWbxzCoNKkRTVlAI3BCPC4e9Fl46fncmo4kIjbBo16FTnXc1tOkEKPBhuI%2Fe6YmswqrWTwwY6pgGpiBxd%2F93zk%2BtAA1QMpme1r%2BNKaxV%2FatKedi3OXrrbEt0ZN0fU3kzrNRcdZYbkVxYNuXWW5EL76JJRktP3y4Ty31AI%2BInJayzrnq8LckujA5jKVl%2FYVS7PXIxYeHhO0nzdSOeJHaBU5DO8L%2BttcQsSg%2Fqz50ZJrA49Xt6VZJg2e%2Bqxo7IXbtiOK%2B0v%2BtoYZDWtErhQBnKHUn0tn0AQvm80RePOMS4R&X-Amz-Signature=17239a27fc724562872d8b21ff5e6b2003156c94fa08500ab56a6877aac82959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
