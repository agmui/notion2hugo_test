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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4JLLOV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFGd6YaV6W2Ba8G1agFO%2FyxkLUCTIHQk3iZ7x%2BJ7lxrhAiBVJcV52QU3U1EfBjG2ItS4Fwbgexyq6U1nO5fmm3dg0Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZjC789zsTr7Z2tNIKtwD67AQAOEV0Y9skJFqmavsVGktt8P7ZtlTPVP4%2BhQMH87aIZyTxG44lTmN%2FYPii9pRJXci6YvkaDqBP%2BXHiHEPH%2B%2BwOPmnTkl1ee%2Fv1fLYz12kKm9m9Yp%2BxLeVCb207nWYZ6cwOo2TtIoSRmj6%2B9Oci%2FQoCPisLp1B3NhlqBAavQiJBB26Aoew6PwslXqDpYMqLdJ%2BIVqEtGtlEzIhGvldX2jYThg4c3xw0wQwcNrRG%2FveF9CO84uuRW%2FhcnXbb2PXgtQbvkZuoaLFU%2BWQI5H0opi3G%2FoGojOR1EO1jSwBl6j8IwLSTB6DAZ3jQE6Ldgk8dI%2BJE5YIG5asb%2BdhRSN%2FntGYMvDhqiS7hY%2BADL8g57voPEz5N%2Fgm5sinp5GKKlnLSN4rn8Zz9ZqD04Jo3qX1fOVBk3F59L3bewsi7EixCj0gSFgB2aG19ukT3heVxemrpvcaesw%2B6JXYYOzJ8%2FtiV%2F0yr%2BckZOuYiuB7i4b7f%2FO1kRf8kzqyDfygxmpwC%2BIOmsCTqMMJYJvGx9cfNjzlxjp8G9BywavJRySDTbJ27I%2FdJtEWn1FMHGroujqUYET706kIs30%2Bug7Mq%2Fhur4wJdlWqAuxHD7MMFQ2au121yKiqmxzIexEEqVozNA4wiqa7wgY6pgE4sWhn%2BEfWX6t%2FUcY%2FL8AlU%2Bao7Z7aTksWrYijPcrJ5J0a6VU7ZYNKoenxkKFoffIDlpla9ipFrjHjENqcIcMATHYbyfcnvuE%2FTjoThkCJe9ijQmrCodWcJfeBbskQehQscZa8oDQKXL%2BXmrymXE3gGBQmdYhzuR9qSlXbzCSOqyxczcSFdx%2FA48EvGnLym894H8RU6iEJbKdNYRca%2F2nHr%2BFJDWOI&X-Amz-Signature=00cdff798f814ec57c89cabd4f0fab645257e65c8ca7545e13b3a92f4c89e4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4JLLOV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFGd6YaV6W2Ba8G1agFO%2FyxkLUCTIHQk3iZ7x%2BJ7lxrhAiBVJcV52QU3U1EfBjG2ItS4Fwbgexyq6U1nO5fmm3dg0Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZjC789zsTr7Z2tNIKtwD67AQAOEV0Y9skJFqmavsVGktt8P7ZtlTPVP4%2BhQMH87aIZyTxG44lTmN%2FYPii9pRJXci6YvkaDqBP%2BXHiHEPH%2B%2BwOPmnTkl1ee%2Fv1fLYz12kKm9m9Yp%2BxLeVCb207nWYZ6cwOo2TtIoSRmj6%2B9Oci%2FQoCPisLp1B3NhlqBAavQiJBB26Aoew6PwslXqDpYMqLdJ%2BIVqEtGtlEzIhGvldX2jYThg4c3xw0wQwcNrRG%2FveF9CO84uuRW%2FhcnXbb2PXgtQbvkZuoaLFU%2BWQI5H0opi3G%2FoGojOR1EO1jSwBl6j8IwLSTB6DAZ3jQE6Ldgk8dI%2BJE5YIG5asb%2BdhRSN%2FntGYMvDhqiS7hY%2BADL8g57voPEz5N%2Fgm5sinp5GKKlnLSN4rn8Zz9ZqD04Jo3qX1fOVBk3F59L3bewsi7EixCj0gSFgB2aG19ukT3heVxemrpvcaesw%2B6JXYYOzJ8%2FtiV%2F0yr%2BckZOuYiuB7i4b7f%2FO1kRf8kzqyDfygxmpwC%2BIOmsCTqMMJYJvGx9cfNjzlxjp8G9BywavJRySDTbJ27I%2FdJtEWn1FMHGroujqUYET706kIs30%2Bug7Mq%2Fhur4wJdlWqAuxHD7MMFQ2au121yKiqmxzIexEEqVozNA4wiqa7wgY6pgE4sWhn%2BEfWX6t%2FUcY%2FL8AlU%2Bao7Z7aTksWrYijPcrJ5J0a6VU7ZYNKoenxkKFoffIDlpla9ipFrjHjENqcIcMATHYbyfcnvuE%2FTjoThkCJe9ijQmrCodWcJfeBbskQehQscZa8oDQKXL%2BXmrymXE3gGBQmdYhzuR9qSlXbzCSOqyxczcSFdx%2FA48EvGnLym894H8RU6iEJbKdNYRca%2F2nHr%2BFJDWOI&X-Amz-Signature=8b5872dc66b87eeda8a9dea39eb4b72fc061f79213ad4515279bf55cb3b95abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4JLLOV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFGd6YaV6W2Ba8G1agFO%2FyxkLUCTIHQk3iZ7x%2BJ7lxrhAiBVJcV52QU3U1EfBjG2ItS4Fwbgexyq6U1nO5fmm3dg0Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZjC789zsTr7Z2tNIKtwD67AQAOEV0Y9skJFqmavsVGktt8P7ZtlTPVP4%2BhQMH87aIZyTxG44lTmN%2FYPii9pRJXci6YvkaDqBP%2BXHiHEPH%2B%2BwOPmnTkl1ee%2Fv1fLYz12kKm9m9Yp%2BxLeVCb207nWYZ6cwOo2TtIoSRmj6%2B9Oci%2FQoCPisLp1B3NhlqBAavQiJBB26Aoew6PwslXqDpYMqLdJ%2BIVqEtGtlEzIhGvldX2jYThg4c3xw0wQwcNrRG%2FveF9CO84uuRW%2FhcnXbb2PXgtQbvkZuoaLFU%2BWQI5H0opi3G%2FoGojOR1EO1jSwBl6j8IwLSTB6DAZ3jQE6Ldgk8dI%2BJE5YIG5asb%2BdhRSN%2FntGYMvDhqiS7hY%2BADL8g57voPEz5N%2Fgm5sinp5GKKlnLSN4rn8Zz9ZqD04Jo3qX1fOVBk3F59L3bewsi7EixCj0gSFgB2aG19ukT3heVxemrpvcaesw%2B6JXYYOzJ8%2FtiV%2F0yr%2BckZOuYiuB7i4b7f%2FO1kRf8kzqyDfygxmpwC%2BIOmsCTqMMJYJvGx9cfNjzlxjp8G9BywavJRySDTbJ27I%2FdJtEWn1FMHGroujqUYET706kIs30%2Bug7Mq%2Fhur4wJdlWqAuxHD7MMFQ2au121yKiqmxzIexEEqVozNA4wiqa7wgY6pgE4sWhn%2BEfWX6t%2FUcY%2FL8AlU%2Bao7Z7aTksWrYijPcrJ5J0a6VU7ZYNKoenxkKFoffIDlpla9ipFrjHjENqcIcMATHYbyfcnvuE%2FTjoThkCJe9ijQmrCodWcJfeBbskQehQscZa8oDQKXL%2BXmrymXE3gGBQmdYhzuR9qSlXbzCSOqyxczcSFdx%2FA48EvGnLym894H8RU6iEJbKdNYRca%2F2nHr%2BFJDWOI&X-Amz-Signature=662535c1fcf751d3e44beb4565d2669602a8a721f034386b35e04f8c9f03e951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4JLLOV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFGd6YaV6W2Ba8G1agFO%2FyxkLUCTIHQk3iZ7x%2BJ7lxrhAiBVJcV52QU3U1EfBjG2ItS4Fwbgexyq6U1nO5fmm3dg0Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZjC789zsTr7Z2tNIKtwD67AQAOEV0Y9skJFqmavsVGktt8P7ZtlTPVP4%2BhQMH87aIZyTxG44lTmN%2FYPii9pRJXci6YvkaDqBP%2BXHiHEPH%2B%2BwOPmnTkl1ee%2Fv1fLYz12kKm9m9Yp%2BxLeVCb207nWYZ6cwOo2TtIoSRmj6%2B9Oci%2FQoCPisLp1B3NhlqBAavQiJBB26Aoew6PwslXqDpYMqLdJ%2BIVqEtGtlEzIhGvldX2jYThg4c3xw0wQwcNrRG%2FveF9CO84uuRW%2FhcnXbb2PXgtQbvkZuoaLFU%2BWQI5H0opi3G%2FoGojOR1EO1jSwBl6j8IwLSTB6DAZ3jQE6Ldgk8dI%2BJE5YIG5asb%2BdhRSN%2FntGYMvDhqiS7hY%2BADL8g57voPEz5N%2Fgm5sinp5GKKlnLSN4rn8Zz9ZqD04Jo3qX1fOVBk3F59L3bewsi7EixCj0gSFgB2aG19ukT3heVxemrpvcaesw%2B6JXYYOzJ8%2FtiV%2F0yr%2BckZOuYiuB7i4b7f%2FO1kRf8kzqyDfygxmpwC%2BIOmsCTqMMJYJvGx9cfNjzlxjp8G9BywavJRySDTbJ27I%2FdJtEWn1FMHGroujqUYET706kIs30%2Bug7Mq%2Fhur4wJdlWqAuxHD7MMFQ2au121yKiqmxzIexEEqVozNA4wiqa7wgY6pgE4sWhn%2BEfWX6t%2FUcY%2FL8AlU%2Bao7Z7aTksWrYijPcrJ5J0a6VU7ZYNKoenxkKFoffIDlpla9ipFrjHjENqcIcMATHYbyfcnvuE%2FTjoThkCJe9ijQmrCodWcJfeBbskQehQscZa8oDQKXL%2BXmrymXE3gGBQmdYhzuR9qSlXbzCSOqyxczcSFdx%2FA48EvGnLym894H8RU6iEJbKdNYRca%2F2nHr%2BFJDWOI&X-Amz-Signature=aa9497b57055551881d1fafebd85b9bc55e0d55faa39a734c42b5db9684eb61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4JLLOV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFGd6YaV6W2Ba8G1agFO%2FyxkLUCTIHQk3iZ7x%2BJ7lxrhAiBVJcV52QU3U1EfBjG2ItS4Fwbgexyq6U1nO5fmm3dg0Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZjC789zsTr7Z2tNIKtwD67AQAOEV0Y9skJFqmavsVGktt8P7ZtlTPVP4%2BhQMH87aIZyTxG44lTmN%2FYPii9pRJXci6YvkaDqBP%2BXHiHEPH%2B%2BwOPmnTkl1ee%2Fv1fLYz12kKm9m9Yp%2BxLeVCb207nWYZ6cwOo2TtIoSRmj6%2B9Oci%2FQoCPisLp1B3NhlqBAavQiJBB26Aoew6PwslXqDpYMqLdJ%2BIVqEtGtlEzIhGvldX2jYThg4c3xw0wQwcNrRG%2FveF9CO84uuRW%2FhcnXbb2PXgtQbvkZuoaLFU%2BWQI5H0opi3G%2FoGojOR1EO1jSwBl6j8IwLSTB6DAZ3jQE6Ldgk8dI%2BJE5YIG5asb%2BdhRSN%2FntGYMvDhqiS7hY%2BADL8g57voPEz5N%2Fgm5sinp5GKKlnLSN4rn8Zz9ZqD04Jo3qX1fOVBk3F59L3bewsi7EixCj0gSFgB2aG19ukT3heVxemrpvcaesw%2B6JXYYOzJ8%2FtiV%2F0yr%2BckZOuYiuB7i4b7f%2FO1kRf8kzqyDfygxmpwC%2BIOmsCTqMMJYJvGx9cfNjzlxjp8G9BywavJRySDTbJ27I%2FdJtEWn1FMHGroujqUYET706kIs30%2Bug7Mq%2Fhur4wJdlWqAuxHD7MMFQ2au121yKiqmxzIexEEqVozNA4wiqa7wgY6pgE4sWhn%2BEfWX6t%2FUcY%2FL8AlU%2Bao7Z7aTksWrYijPcrJ5J0a6VU7ZYNKoenxkKFoffIDlpla9ipFrjHjENqcIcMATHYbyfcnvuE%2FTjoThkCJe9ijQmrCodWcJfeBbskQehQscZa8oDQKXL%2BXmrymXE3gGBQmdYhzuR9qSlXbzCSOqyxczcSFdx%2FA48EvGnLym894H8RU6iEJbKdNYRca%2F2nHr%2BFJDWOI&X-Amz-Signature=c14bbd369db656e90f56975e1037365d2dc5b99d25da16d3d266142ba98d49bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
