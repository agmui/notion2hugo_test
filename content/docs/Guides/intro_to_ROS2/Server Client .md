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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGP6M3CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDge8Kmioy8dytqIFYSZB5uekoSsT3YEqn%2F3yWqOvnR6wIhAKvOAMWE%2FG9oLpQTli%2FcSgoiftQyprSzFl9uF4w%2FHmGRKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiWIrwSZJD1H4EJo4q3ANKeh8mqGfR0p9ohobYull72EQQqLZlhSp9qCEXzO7onbWQhj2ehIz%2BnZ%2Frk%2B%2BWTrhQjEqsqJ5ExrrUhibqxHkm8eflC6fHEbQTAwVNztLH605Cr3dTfXrcv5bVVAKBaWdXD5Ntk7a9sqZKsRxBbM3WBnEJQyrBMFnp6dya7nV%2FhnEEVopLXg7nHWDInAeSzpX2jYYRRpUTKn3x7o0bWBBsm4fHRxJV%2BMADMeWl1UnY75ADKNkUNFEqwCfWqfuguusJf9bM6RqCzpx1wnUnYh5KmPW9xP%2FzEKihOr6VVTFg8Q8PqO1dm404ndICyHBFMLJalmW7BGx%2FqumiycRAh0usIjGUFpgRHJi5W15PikhAGL0LCk%2BoyOEBLEzq%2B99nN3%2FKjb%2FSzqZ8aYTeKwmJR5HlPOhhxMsabFHGj6Pj5TuEzK8V7VHZ70tn1zWyIwON76CiYk3J65%2FVXtZcVT6ekX9ITH37SZ08Iss0lmy22OCFHpbMIYEYbdDWybRh%2Fzx%2B1qhCdhz%2FDnlXADhu48xzUTGlX2yBUUA3%2BpvXJEj5k2vAUVSOJ1O08I4fdePG9KDsmboBIPjftEXd8jxNWNolUduIwGgSAHwqkoQQb0Dz6vKvKKvHQj%2BA6BvBd57n6zCqj5zEBjqkAXcwpMGXA4qAfExvORM3G%2FRBMZJfVagmGERXIU5EGDU3FKlE23oeAVSEPsLl78VbCK0%2FB%2BSB0RvI9SL8BdaFFT%2Fdx5Sk1F6hPGdLFuIYb9QveKYze0nGLJl%2BdCnrr0DSF3EIE%2B0PWWawX0QOjBwR%2Bc%2BohBWqNczun%2FWS9okXlAQ%2FJqIHgFyjRosXsfXYnY8WCtxZJnRyiROQCdlzmsnoIbInKIUn&X-Amz-Signature=46691da3ee24904c3ecada8d5c1371eda739963e5faf232a689e3ca1c76356dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGP6M3CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDge8Kmioy8dytqIFYSZB5uekoSsT3YEqn%2F3yWqOvnR6wIhAKvOAMWE%2FG9oLpQTli%2FcSgoiftQyprSzFl9uF4w%2FHmGRKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiWIrwSZJD1H4EJo4q3ANKeh8mqGfR0p9ohobYull72EQQqLZlhSp9qCEXzO7onbWQhj2ehIz%2BnZ%2Frk%2B%2BWTrhQjEqsqJ5ExrrUhibqxHkm8eflC6fHEbQTAwVNztLH605Cr3dTfXrcv5bVVAKBaWdXD5Ntk7a9sqZKsRxBbM3WBnEJQyrBMFnp6dya7nV%2FhnEEVopLXg7nHWDInAeSzpX2jYYRRpUTKn3x7o0bWBBsm4fHRxJV%2BMADMeWl1UnY75ADKNkUNFEqwCfWqfuguusJf9bM6RqCzpx1wnUnYh5KmPW9xP%2FzEKihOr6VVTFg8Q8PqO1dm404ndICyHBFMLJalmW7BGx%2FqumiycRAh0usIjGUFpgRHJi5W15PikhAGL0LCk%2BoyOEBLEzq%2B99nN3%2FKjb%2FSzqZ8aYTeKwmJR5HlPOhhxMsabFHGj6Pj5TuEzK8V7VHZ70tn1zWyIwON76CiYk3J65%2FVXtZcVT6ekX9ITH37SZ08Iss0lmy22OCFHpbMIYEYbdDWybRh%2Fzx%2B1qhCdhz%2FDnlXADhu48xzUTGlX2yBUUA3%2BpvXJEj5k2vAUVSOJ1O08I4fdePG9KDsmboBIPjftEXd8jxNWNolUduIwGgSAHwqkoQQb0Dz6vKvKKvHQj%2BA6BvBd57n6zCqj5zEBjqkAXcwpMGXA4qAfExvORM3G%2FRBMZJfVagmGERXIU5EGDU3FKlE23oeAVSEPsLl78VbCK0%2FB%2BSB0RvI9SL8BdaFFT%2Fdx5Sk1F6hPGdLFuIYb9QveKYze0nGLJl%2BdCnrr0DSF3EIE%2B0PWWawX0QOjBwR%2Bc%2BohBWqNczun%2FWS9okXlAQ%2FJqIHgFyjRosXsfXYnY8WCtxZJnRyiROQCdlzmsnoIbInKIUn&X-Amz-Signature=b3b930a437a5f2fcb7dc89dd3d65615a84db252053b3855917950e1650785e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGP6M3CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDge8Kmioy8dytqIFYSZB5uekoSsT3YEqn%2F3yWqOvnR6wIhAKvOAMWE%2FG9oLpQTli%2FcSgoiftQyprSzFl9uF4w%2FHmGRKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiWIrwSZJD1H4EJo4q3ANKeh8mqGfR0p9ohobYull72EQQqLZlhSp9qCEXzO7onbWQhj2ehIz%2BnZ%2Frk%2B%2BWTrhQjEqsqJ5ExrrUhibqxHkm8eflC6fHEbQTAwVNztLH605Cr3dTfXrcv5bVVAKBaWdXD5Ntk7a9sqZKsRxBbM3WBnEJQyrBMFnp6dya7nV%2FhnEEVopLXg7nHWDInAeSzpX2jYYRRpUTKn3x7o0bWBBsm4fHRxJV%2BMADMeWl1UnY75ADKNkUNFEqwCfWqfuguusJf9bM6RqCzpx1wnUnYh5KmPW9xP%2FzEKihOr6VVTFg8Q8PqO1dm404ndICyHBFMLJalmW7BGx%2FqumiycRAh0usIjGUFpgRHJi5W15PikhAGL0LCk%2BoyOEBLEzq%2B99nN3%2FKjb%2FSzqZ8aYTeKwmJR5HlPOhhxMsabFHGj6Pj5TuEzK8V7VHZ70tn1zWyIwON76CiYk3J65%2FVXtZcVT6ekX9ITH37SZ08Iss0lmy22OCFHpbMIYEYbdDWybRh%2Fzx%2B1qhCdhz%2FDnlXADhu48xzUTGlX2yBUUA3%2BpvXJEj5k2vAUVSOJ1O08I4fdePG9KDsmboBIPjftEXd8jxNWNolUduIwGgSAHwqkoQQb0Dz6vKvKKvHQj%2BA6BvBd57n6zCqj5zEBjqkAXcwpMGXA4qAfExvORM3G%2FRBMZJfVagmGERXIU5EGDU3FKlE23oeAVSEPsLl78VbCK0%2FB%2BSB0RvI9SL8BdaFFT%2Fdx5Sk1F6hPGdLFuIYb9QveKYze0nGLJl%2BdCnrr0DSF3EIE%2B0PWWawX0QOjBwR%2Bc%2BohBWqNczun%2FWS9okXlAQ%2FJqIHgFyjRosXsfXYnY8WCtxZJnRyiROQCdlzmsnoIbInKIUn&X-Amz-Signature=222af185467f9e3a163591ecf2082d3488df1eac1d08f8533537c2ff290c1a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGP6M3CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDge8Kmioy8dytqIFYSZB5uekoSsT3YEqn%2F3yWqOvnR6wIhAKvOAMWE%2FG9oLpQTli%2FcSgoiftQyprSzFl9uF4w%2FHmGRKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiWIrwSZJD1H4EJo4q3ANKeh8mqGfR0p9ohobYull72EQQqLZlhSp9qCEXzO7onbWQhj2ehIz%2BnZ%2Frk%2B%2BWTrhQjEqsqJ5ExrrUhibqxHkm8eflC6fHEbQTAwVNztLH605Cr3dTfXrcv5bVVAKBaWdXD5Ntk7a9sqZKsRxBbM3WBnEJQyrBMFnp6dya7nV%2FhnEEVopLXg7nHWDInAeSzpX2jYYRRpUTKn3x7o0bWBBsm4fHRxJV%2BMADMeWl1UnY75ADKNkUNFEqwCfWqfuguusJf9bM6RqCzpx1wnUnYh5KmPW9xP%2FzEKihOr6VVTFg8Q8PqO1dm404ndICyHBFMLJalmW7BGx%2FqumiycRAh0usIjGUFpgRHJi5W15PikhAGL0LCk%2BoyOEBLEzq%2B99nN3%2FKjb%2FSzqZ8aYTeKwmJR5HlPOhhxMsabFHGj6Pj5TuEzK8V7VHZ70tn1zWyIwON76CiYk3J65%2FVXtZcVT6ekX9ITH37SZ08Iss0lmy22OCFHpbMIYEYbdDWybRh%2Fzx%2B1qhCdhz%2FDnlXADhu48xzUTGlX2yBUUA3%2BpvXJEj5k2vAUVSOJ1O08I4fdePG9KDsmboBIPjftEXd8jxNWNolUduIwGgSAHwqkoQQb0Dz6vKvKKvHQj%2BA6BvBd57n6zCqj5zEBjqkAXcwpMGXA4qAfExvORM3G%2FRBMZJfVagmGERXIU5EGDU3FKlE23oeAVSEPsLl78VbCK0%2FB%2BSB0RvI9SL8BdaFFT%2Fdx5Sk1F6hPGdLFuIYb9QveKYze0nGLJl%2BdCnrr0DSF3EIE%2B0PWWawX0QOjBwR%2Bc%2BohBWqNczun%2FWS9okXlAQ%2FJqIHgFyjRosXsfXYnY8WCtxZJnRyiROQCdlzmsnoIbInKIUn&X-Amz-Signature=4e75d1f5cf7ea4852ab04125a07decbabd5cf8222d392405f7910a90812c317f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGP6M3CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDge8Kmioy8dytqIFYSZB5uekoSsT3YEqn%2F3yWqOvnR6wIhAKvOAMWE%2FG9oLpQTli%2FcSgoiftQyprSzFl9uF4w%2FHmGRKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiWIrwSZJD1H4EJo4q3ANKeh8mqGfR0p9ohobYull72EQQqLZlhSp9qCEXzO7onbWQhj2ehIz%2BnZ%2Frk%2B%2BWTrhQjEqsqJ5ExrrUhibqxHkm8eflC6fHEbQTAwVNztLH605Cr3dTfXrcv5bVVAKBaWdXD5Ntk7a9sqZKsRxBbM3WBnEJQyrBMFnp6dya7nV%2FhnEEVopLXg7nHWDInAeSzpX2jYYRRpUTKn3x7o0bWBBsm4fHRxJV%2BMADMeWl1UnY75ADKNkUNFEqwCfWqfuguusJf9bM6RqCzpx1wnUnYh5KmPW9xP%2FzEKihOr6VVTFg8Q8PqO1dm404ndICyHBFMLJalmW7BGx%2FqumiycRAh0usIjGUFpgRHJi5W15PikhAGL0LCk%2BoyOEBLEzq%2B99nN3%2FKjb%2FSzqZ8aYTeKwmJR5HlPOhhxMsabFHGj6Pj5TuEzK8V7VHZ70tn1zWyIwON76CiYk3J65%2FVXtZcVT6ekX9ITH37SZ08Iss0lmy22OCFHpbMIYEYbdDWybRh%2Fzx%2B1qhCdhz%2FDnlXADhu48xzUTGlX2yBUUA3%2BpvXJEj5k2vAUVSOJ1O08I4fdePG9KDsmboBIPjftEXd8jxNWNolUduIwGgSAHwqkoQQb0Dz6vKvKKvHQj%2BA6BvBd57n6zCqj5zEBjqkAXcwpMGXA4qAfExvORM3G%2FRBMZJfVagmGERXIU5EGDU3FKlE23oeAVSEPsLl78VbCK0%2FB%2BSB0RvI9SL8BdaFFT%2Fdx5Sk1F6hPGdLFuIYb9QveKYze0nGLJl%2BdCnrr0DSF3EIE%2B0PWWawX0QOjBwR%2Bc%2BohBWqNczun%2FWS9okXlAQ%2FJqIHgFyjRosXsfXYnY8WCtxZJnRyiROQCdlzmsnoIbInKIUn&X-Amz-Signature=78b4f47aeb00facae1a6b56e67b629794a6b0da7fa478d8bd9a55f6caefd319c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
