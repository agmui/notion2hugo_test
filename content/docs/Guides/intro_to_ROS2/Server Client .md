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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBOD3NE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDC0FEIjSiUU5nkeG6%2FJdPv2XTPDWd0f30u5rtQp67zxwIgGZ%2BFgjQhVj1R118fx3ptSsCPEueReeMGFnfSU%2FTnVNsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL133q4bOikMowycdyrcA1PZdNItRhY%2FLaNJcQu8Z8Sq8RRT8GSVx8GOgqc5DbqHRF89nD9II%2FKGhddDG%2Bx%2F6jY5YY%2FL3gkE0B2VGzz8aFx5z1hGvQfVbly%2BzMUUjUU7S80JLx79%2B0AGuOAv%2Fup%2BTNgxWfgmN8W7RQpacDDzixp10iewVGinyRgbPZMEOf8vY%2Fcisi6FYL7mwiivvT3nbAAfm72qDFbmZNdxw6zi86OWCIGukAcYDQIM%2F3bQYRXSQue0S%2B3b1xPsNUioHOnojM%2FLy%2F54tZPXItr69R7CpODAIcomVdcZDsPMY44KXFj8q7Rm8hQt5xijoBD0yVu7ryFf9SzuQnCONmbFl6Bkr7jvDyF6VTAkUhRAkePNMin02NjrJgZuheU3vOpKlpPKjxfC%2B3VlCDihgdsaCbD8xliQi8acAqbwmAqdR4W4cOTo1OpWTbX0Mmlz%2FI7zvM9Y%2F%2Byr8YvMIj4K%2BMeAUby%2Bp4OT8HxRhxpKj%2BHy433zXgZrR9iRm0ag9stbO2Ib%2FSx46shFm94of4gMS7H5S8yg5zKQGi6ZSEG7eNI8sJx9ZvCF2GTbhYyJIdPF5sW3qizYeFsU79DVOJot4zRpUrwbusiZ2%2FzzRD%2BJ9uvSRAqdO31GRqVRniF7yzvwuDMLMNWE9sIGOqUBGM%2B8sr6rLNO4MnNKz5GJ69kzdq6O%2F5egaQY1%2B4xGfmat50F0rld4j6w5JNhhMY0s6RO5Q0dDJYd%2B6cv%2FNyndHUCta0GNBsspCaHnEHeKyGdqdVSCeOMaiMdSFlHcEIC2Z6%2BZXta9vpmSa1vN%2BBSADYrrTekSm%2BGdtwJ0eh4sXRi%2BZdsMAtn9pc1Duz63DiuBwCyvNaQ1aDn27xD0zaHNCQH%2B4u1b&X-Amz-Signature=ba51d393d21c9e401ad43a8612eb4e22bb507d8722c0c6f895df32fe811378e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBOD3NE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDC0FEIjSiUU5nkeG6%2FJdPv2XTPDWd0f30u5rtQp67zxwIgGZ%2BFgjQhVj1R118fx3ptSsCPEueReeMGFnfSU%2FTnVNsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL133q4bOikMowycdyrcA1PZdNItRhY%2FLaNJcQu8Z8Sq8RRT8GSVx8GOgqc5DbqHRF89nD9II%2FKGhddDG%2Bx%2F6jY5YY%2FL3gkE0B2VGzz8aFx5z1hGvQfVbly%2BzMUUjUU7S80JLx79%2B0AGuOAv%2Fup%2BTNgxWfgmN8W7RQpacDDzixp10iewVGinyRgbPZMEOf8vY%2Fcisi6FYL7mwiivvT3nbAAfm72qDFbmZNdxw6zi86OWCIGukAcYDQIM%2F3bQYRXSQue0S%2B3b1xPsNUioHOnojM%2FLy%2F54tZPXItr69R7CpODAIcomVdcZDsPMY44KXFj8q7Rm8hQt5xijoBD0yVu7ryFf9SzuQnCONmbFl6Bkr7jvDyF6VTAkUhRAkePNMin02NjrJgZuheU3vOpKlpPKjxfC%2B3VlCDihgdsaCbD8xliQi8acAqbwmAqdR4W4cOTo1OpWTbX0Mmlz%2FI7zvM9Y%2F%2Byr8YvMIj4K%2BMeAUby%2Bp4OT8HxRhxpKj%2BHy433zXgZrR9iRm0ag9stbO2Ib%2FSx46shFm94of4gMS7H5S8yg5zKQGi6ZSEG7eNI8sJx9ZvCF2GTbhYyJIdPF5sW3qizYeFsU79DVOJot4zRpUrwbusiZ2%2FzzRD%2BJ9uvSRAqdO31GRqVRniF7yzvwuDMLMNWE9sIGOqUBGM%2B8sr6rLNO4MnNKz5GJ69kzdq6O%2F5egaQY1%2B4xGfmat50F0rld4j6w5JNhhMY0s6RO5Q0dDJYd%2B6cv%2FNyndHUCta0GNBsspCaHnEHeKyGdqdVSCeOMaiMdSFlHcEIC2Z6%2BZXta9vpmSa1vN%2BBSADYrrTekSm%2BGdtwJ0eh4sXRi%2BZdsMAtn9pc1Duz63DiuBwCyvNaQ1aDn27xD0zaHNCQH%2B4u1b&X-Amz-Signature=a98202f95f449dab9b77c597b6bce169752992a6d444b0ad27e7c71d8ea273c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBOD3NE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDC0FEIjSiUU5nkeG6%2FJdPv2XTPDWd0f30u5rtQp67zxwIgGZ%2BFgjQhVj1R118fx3ptSsCPEueReeMGFnfSU%2FTnVNsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL133q4bOikMowycdyrcA1PZdNItRhY%2FLaNJcQu8Z8Sq8RRT8GSVx8GOgqc5DbqHRF89nD9II%2FKGhddDG%2Bx%2F6jY5YY%2FL3gkE0B2VGzz8aFx5z1hGvQfVbly%2BzMUUjUU7S80JLx79%2B0AGuOAv%2Fup%2BTNgxWfgmN8W7RQpacDDzixp10iewVGinyRgbPZMEOf8vY%2Fcisi6FYL7mwiivvT3nbAAfm72qDFbmZNdxw6zi86OWCIGukAcYDQIM%2F3bQYRXSQue0S%2B3b1xPsNUioHOnojM%2FLy%2F54tZPXItr69R7CpODAIcomVdcZDsPMY44KXFj8q7Rm8hQt5xijoBD0yVu7ryFf9SzuQnCONmbFl6Bkr7jvDyF6VTAkUhRAkePNMin02NjrJgZuheU3vOpKlpPKjxfC%2B3VlCDihgdsaCbD8xliQi8acAqbwmAqdR4W4cOTo1OpWTbX0Mmlz%2FI7zvM9Y%2F%2Byr8YvMIj4K%2BMeAUby%2Bp4OT8HxRhxpKj%2BHy433zXgZrR9iRm0ag9stbO2Ib%2FSx46shFm94of4gMS7H5S8yg5zKQGi6ZSEG7eNI8sJx9ZvCF2GTbhYyJIdPF5sW3qizYeFsU79DVOJot4zRpUrwbusiZ2%2FzzRD%2BJ9uvSRAqdO31GRqVRniF7yzvwuDMLMNWE9sIGOqUBGM%2B8sr6rLNO4MnNKz5GJ69kzdq6O%2F5egaQY1%2B4xGfmat50F0rld4j6w5JNhhMY0s6RO5Q0dDJYd%2B6cv%2FNyndHUCta0GNBsspCaHnEHeKyGdqdVSCeOMaiMdSFlHcEIC2Z6%2BZXta9vpmSa1vN%2BBSADYrrTekSm%2BGdtwJ0eh4sXRi%2BZdsMAtn9pc1Duz63DiuBwCyvNaQ1aDn27xD0zaHNCQH%2B4u1b&X-Amz-Signature=bf0dc3fa52d1c5505622f8fac06e5ede9c69d9d51c81c25a0029bad952f2850e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBOD3NE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDC0FEIjSiUU5nkeG6%2FJdPv2XTPDWd0f30u5rtQp67zxwIgGZ%2BFgjQhVj1R118fx3ptSsCPEueReeMGFnfSU%2FTnVNsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL133q4bOikMowycdyrcA1PZdNItRhY%2FLaNJcQu8Z8Sq8RRT8GSVx8GOgqc5DbqHRF89nD9II%2FKGhddDG%2Bx%2F6jY5YY%2FL3gkE0B2VGzz8aFx5z1hGvQfVbly%2BzMUUjUU7S80JLx79%2B0AGuOAv%2Fup%2BTNgxWfgmN8W7RQpacDDzixp10iewVGinyRgbPZMEOf8vY%2Fcisi6FYL7mwiivvT3nbAAfm72qDFbmZNdxw6zi86OWCIGukAcYDQIM%2F3bQYRXSQue0S%2B3b1xPsNUioHOnojM%2FLy%2F54tZPXItr69R7CpODAIcomVdcZDsPMY44KXFj8q7Rm8hQt5xijoBD0yVu7ryFf9SzuQnCONmbFl6Bkr7jvDyF6VTAkUhRAkePNMin02NjrJgZuheU3vOpKlpPKjxfC%2B3VlCDihgdsaCbD8xliQi8acAqbwmAqdR4W4cOTo1OpWTbX0Mmlz%2FI7zvM9Y%2F%2Byr8YvMIj4K%2BMeAUby%2Bp4OT8HxRhxpKj%2BHy433zXgZrR9iRm0ag9stbO2Ib%2FSx46shFm94of4gMS7H5S8yg5zKQGi6ZSEG7eNI8sJx9ZvCF2GTbhYyJIdPF5sW3qizYeFsU79DVOJot4zRpUrwbusiZ2%2FzzRD%2BJ9uvSRAqdO31GRqVRniF7yzvwuDMLMNWE9sIGOqUBGM%2B8sr6rLNO4MnNKz5GJ69kzdq6O%2F5egaQY1%2B4xGfmat50F0rld4j6w5JNhhMY0s6RO5Q0dDJYd%2B6cv%2FNyndHUCta0GNBsspCaHnEHeKyGdqdVSCeOMaiMdSFlHcEIC2Z6%2BZXta9vpmSa1vN%2BBSADYrrTekSm%2BGdtwJ0eh4sXRi%2BZdsMAtn9pc1Duz63DiuBwCyvNaQ1aDn27xD0zaHNCQH%2B4u1b&X-Amz-Signature=913752f0baa8c9a504b621df9092f51fd2a979faa8fd09e61f83f16bd98ec5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBOD3NE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDC0FEIjSiUU5nkeG6%2FJdPv2XTPDWd0f30u5rtQp67zxwIgGZ%2BFgjQhVj1R118fx3ptSsCPEueReeMGFnfSU%2FTnVNsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL133q4bOikMowycdyrcA1PZdNItRhY%2FLaNJcQu8Z8Sq8RRT8GSVx8GOgqc5DbqHRF89nD9II%2FKGhddDG%2Bx%2F6jY5YY%2FL3gkE0B2VGzz8aFx5z1hGvQfVbly%2BzMUUjUU7S80JLx79%2B0AGuOAv%2Fup%2BTNgxWfgmN8W7RQpacDDzixp10iewVGinyRgbPZMEOf8vY%2Fcisi6FYL7mwiivvT3nbAAfm72qDFbmZNdxw6zi86OWCIGukAcYDQIM%2F3bQYRXSQue0S%2B3b1xPsNUioHOnojM%2FLy%2F54tZPXItr69R7CpODAIcomVdcZDsPMY44KXFj8q7Rm8hQt5xijoBD0yVu7ryFf9SzuQnCONmbFl6Bkr7jvDyF6VTAkUhRAkePNMin02NjrJgZuheU3vOpKlpPKjxfC%2B3VlCDihgdsaCbD8xliQi8acAqbwmAqdR4W4cOTo1OpWTbX0Mmlz%2FI7zvM9Y%2F%2Byr8YvMIj4K%2BMeAUby%2Bp4OT8HxRhxpKj%2BHy433zXgZrR9iRm0ag9stbO2Ib%2FSx46shFm94of4gMS7H5S8yg5zKQGi6ZSEG7eNI8sJx9ZvCF2GTbhYyJIdPF5sW3qizYeFsU79DVOJot4zRpUrwbusiZ2%2FzzRD%2BJ9uvSRAqdO31GRqVRniF7yzvwuDMLMNWE9sIGOqUBGM%2B8sr6rLNO4MnNKz5GJ69kzdq6O%2F5egaQY1%2B4xGfmat50F0rld4j6w5JNhhMY0s6RO5Q0dDJYd%2B6cv%2FNyndHUCta0GNBsspCaHnEHeKyGdqdVSCeOMaiMdSFlHcEIC2Z6%2BZXta9vpmSa1vN%2BBSADYrrTekSm%2BGdtwJ0eh4sXRi%2BZdsMAtn9pc1Duz63DiuBwCyvNaQ1aDn27xD0zaHNCQH%2B4u1b&X-Amz-Signature=896878e34e8859f4a64945bc11182f8e89667e554daf9321baa7ed6a4a94bdd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
