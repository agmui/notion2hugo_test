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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HHEUEHN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkiOb3cqFDSq1zCqFFfQumi9rCKN3GYanZfDMxaaA%2BcAiEAtBVt6uzJZT%2FaeHUu932dHWGTj%2F0zpASBPwoHdn4%2Fe4IqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMX4iTcL5L2vujRjSrcAwX7eo4jPROmEjRSup%2FdPs%2BfUqMS1aE4M0aO4VB7lGnENxfKdze6pzlrc53pihhCE358iiHRQfN%2BH%2BkIoXBYj5SCVovTXbTJSMJGvnQ5u6U%2BeJAFynHiBrBUh3PFRkKRai1uSgeESTol7AQNttXy5u5ekQAiNqtEo%2FCS1d8yjfWnMLDzVZmRSvVL6%2FJzCbt55%2FiZ1pfrf3%2BMCv9jv8JsvsgnIPumMCkI8Yy9v%2FahUJXIsyoESdtGTYZHleCsotcBoU4WoB1SswtFQ0XLSB%2FHZAEnZZviMUU%2BUH0bWBkIdAGdEfzTW%2Fw4Rx6PvmoaRhYY8exdVMIk6mMVkXUvk9f18%2Blx2MiixZ9ulfKhmVkHQK9rJZJetM2TqbkNRmLmsFrTmGTn9U4werOj4FvqLppwqPeXttdLQrLdYXqjlgLeVP6hpxpxOm0RvstmAFlRXx7vLd9mDWJjQUDyK3Fe5KKb7NhnEsu4r5prkOn3Q3F6USwj3%2FzeZJhVaBnomZaa%2BWwO1RV5R5giNdWjMDqbawfsyYou%2FrULWCquEkVlG%2BOhzdpVVCuKjCxLcqDNEXX8QT3H%2FYZY%2FH0zKCClSNmJZTSm%2FOP%2FH3ctzYZnX2JMsTiSD527blOkfGWRIJWtQYhoMKrYn70GOqUBYAHQIDmYWU4KwoWefFCbM5sswCCttO%2Fw3MNVH8OPGnsmo%2BOGy6Brp%2BPCLtBjxJjLuO0EcjsbvX0hSN%2Bu1eVJuWLef8Itk25B%2FT4INeSU8U4w5A7vVJ2M274Yb9QNJsRYb2jFTfSAVOWjlleVHeCz2pzja%2FaDsOkUYJEyRDYezG8gp9rpGoiLmhuDnri424hanx4u7aG3iXUpC1Si0iW%2FDdBQhru4&X-Amz-Signature=e71a06f7987802fd35023ee8fd4b4c21fdeeb876129afe425aa043411c67ea29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HHEUEHN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkiOb3cqFDSq1zCqFFfQumi9rCKN3GYanZfDMxaaA%2BcAiEAtBVt6uzJZT%2FaeHUu932dHWGTj%2F0zpASBPwoHdn4%2Fe4IqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMX4iTcL5L2vujRjSrcAwX7eo4jPROmEjRSup%2FdPs%2BfUqMS1aE4M0aO4VB7lGnENxfKdze6pzlrc53pihhCE358iiHRQfN%2BH%2BkIoXBYj5SCVovTXbTJSMJGvnQ5u6U%2BeJAFynHiBrBUh3PFRkKRai1uSgeESTol7AQNttXy5u5ekQAiNqtEo%2FCS1d8yjfWnMLDzVZmRSvVL6%2FJzCbt55%2FiZ1pfrf3%2BMCv9jv8JsvsgnIPumMCkI8Yy9v%2FahUJXIsyoESdtGTYZHleCsotcBoU4WoB1SswtFQ0XLSB%2FHZAEnZZviMUU%2BUH0bWBkIdAGdEfzTW%2Fw4Rx6PvmoaRhYY8exdVMIk6mMVkXUvk9f18%2Blx2MiixZ9ulfKhmVkHQK9rJZJetM2TqbkNRmLmsFrTmGTn9U4werOj4FvqLppwqPeXttdLQrLdYXqjlgLeVP6hpxpxOm0RvstmAFlRXx7vLd9mDWJjQUDyK3Fe5KKb7NhnEsu4r5prkOn3Q3F6USwj3%2FzeZJhVaBnomZaa%2BWwO1RV5R5giNdWjMDqbawfsyYou%2FrULWCquEkVlG%2BOhzdpVVCuKjCxLcqDNEXX8QT3H%2FYZY%2FH0zKCClSNmJZTSm%2FOP%2FH3ctzYZnX2JMsTiSD527blOkfGWRIJWtQYhoMKrYn70GOqUBYAHQIDmYWU4KwoWefFCbM5sswCCttO%2Fw3MNVH8OPGnsmo%2BOGy6Brp%2BPCLtBjxJjLuO0EcjsbvX0hSN%2Bu1eVJuWLef8Itk25B%2FT4INeSU8U4w5A7vVJ2M274Yb9QNJsRYb2jFTfSAVOWjlleVHeCz2pzja%2FaDsOkUYJEyRDYezG8gp9rpGoiLmhuDnri424hanx4u7aG3iXUpC1Si0iW%2FDdBQhru4&X-Amz-Signature=71ef7ee06b593ff7b44dc5ee29bd765e68489804cfe97e61277ec2c20ee4cd32&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HHEUEHN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkiOb3cqFDSq1zCqFFfQumi9rCKN3GYanZfDMxaaA%2BcAiEAtBVt6uzJZT%2FaeHUu932dHWGTj%2F0zpASBPwoHdn4%2Fe4IqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMX4iTcL5L2vujRjSrcAwX7eo4jPROmEjRSup%2FdPs%2BfUqMS1aE4M0aO4VB7lGnENxfKdze6pzlrc53pihhCE358iiHRQfN%2BH%2BkIoXBYj5SCVovTXbTJSMJGvnQ5u6U%2BeJAFynHiBrBUh3PFRkKRai1uSgeESTol7AQNttXy5u5ekQAiNqtEo%2FCS1d8yjfWnMLDzVZmRSvVL6%2FJzCbt55%2FiZ1pfrf3%2BMCv9jv8JsvsgnIPumMCkI8Yy9v%2FahUJXIsyoESdtGTYZHleCsotcBoU4WoB1SswtFQ0XLSB%2FHZAEnZZviMUU%2BUH0bWBkIdAGdEfzTW%2Fw4Rx6PvmoaRhYY8exdVMIk6mMVkXUvk9f18%2Blx2MiixZ9ulfKhmVkHQK9rJZJetM2TqbkNRmLmsFrTmGTn9U4werOj4FvqLppwqPeXttdLQrLdYXqjlgLeVP6hpxpxOm0RvstmAFlRXx7vLd9mDWJjQUDyK3Fe5KKb7NhnEsu4r5prkOn3Q3F6USwj3%2FzeZJhVaBnomZaa%2BWwO1RV5R5giNdWjMDqbawfsyYou%2FrULWCquEkVlG%2BOhzdpVVCuKjCxLcqDNEXX8QT3H%2FYZY%2FH0zKCClSNmJZTSm%2FOP%2FH3ctzYZnX2JMsTiSD527blOkfGWRIJWtQYhoMKrYn70GOqUBYAHQIDmYWU4KwoWefFCbM5sswCCttO%2Fw3MNVH8OPGnsmo%2BOGy6Brp%2BPCLtBjxJjLuO0EcjsbvX0hSN%2Bu1eVJuWLef8Itk25B%2FT4INeSU8U4w5A7vVJ2M274Yb9QNJsRYb2jFTfSAVOWjlleVHeCz2pzja%2FaDsOkUYJEyRDYezG8gp9rpGoiLmhuDnri424hanx4u7aG3iXUpC1Si0iW%2FDdBQhru4&X-Amz-Signature=d3299d25cf4e810bb43f7ca05c403fe422be4ccba68a5ba5ed73a896e914155f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HHEUEHN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkiOb3cqFDSq1zCqFFfQumi9rCKN3GYanZfDMxaaA%2BcAiEAtBVt6uzJZT%2FaeHUu932dHWGTj%2F0zpASBPwoHdn4%2Fe4IqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMX4iTcL5L2vujRjSrcAwX7eo4jPROmEjRSup%2FdPs%2BfUqMS1aE4M0aO4VB7lGnENxfKdze6pzlrc53pihhCE358iiHRQfN%2BH%2BkIoXBYj5SCVovTXbTJSMJGvnQ5u6U%2BeJAFynHiBrBUh3PFRkKRai1uSgeESTol7AQNttXy5u5ekQAiNqtEo%2FCS1d8yjfWnMLDzVZmRSvVL6%2FJzCbt55%2FiZ1pfrf3%2BMCv9jv8JsvsgnIPumMCkI8Yy9v%2FahUJXIsyoESdtGTYZHleCsotcBoU4WoB1SswtFQ0XLSB%2FHZAEnZZviMUU%2BUH0bWBkIdAGdEfzTW%2Fw4Rx6PvmoaRhYY8exdVMIk6mMVkXUvk9f18%2Blx2MiixZ9ulfKhmVkHQK9rJZJetM2TqbkNRmLmsFrTmGTn9U4werOj4FvqLppwqPeXttdLQrLdYXqjlgLeVP6hpxpxOm0RvstmAFlRXx7vLd9mDWJjQUDyK3Fe5KKb7NhnEsu4r5prkOn3Q3F6USwj3%2FzeZJhVaBnomZaa%2BWwO1RV5R5giNdWjMDqbawfsyYou%2FrULWCquEkVlG%2BOhzdpVVCuKjCxLcqDNEXX8QT3H%2FYZY%2FH0zKCClSNmJZTSm%2FOP%2FH3ctzYZnX2JMsTiSD527blOkfGWRIJWtQYhoMKrYn70GOqUBYAHQIDmYWU4KwoWefFCbM5sswCCttO%2Fw3MNVH8OPGnsmo%2BOGy6Brp%2BPCLtBjxJjLuO0EcjsbvX0hSN%2Bu1eVJuWLef8Itk25B%2FT4INeSU8U4w5A7vVJ2M274Yb9QNJsRYb2jFTfSAVOWjlleVHeCz2pzja%2FaDsOkUYJEyRDYezG8gp9rpGoiLmhuDnri424hanx4u7aG3iXUpC1Si0iW%2FDdBQhru4&X-Amz-Signature=0ea34c6047142ecdb7639af0d455c9571cffe2f0ba41df521961b76302764293&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HHEUEHN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkiOb3cqFDSq1zCqFFfQumi9rCKN3GYanZfDMxaaA%2BcAiEAtBVt6uzJZT%2FaeHUu932dHWGTj%2F0zpASBPwoHdn4%2Fe4IqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMX4iTcL5L2vujRjSrcAwX7eo4jPROmEjRSup%2FdPs%2BfUqMS1aE4M0aO4VB7lGnENxfKdze6pzlrc53pihhCE358iiHRQfN%2BH%2BkIoXBYj5SCVovTXbTJSMJGvnQ5u6U%2BeJAFynHiBrBUh3PFRkKRai1uSgeESTol7AQNttXy5u5ekQAiNqtEo%2FCS1d8yjfWnMLDzVZmRSvVL6%2FJzCbt55%2FiZ1pfrf3%2BMCv9jv8JsvsgnIPumMCkI8Yy9v%2FahUJXIsyoESdtGTYZHleCsotcBoU4WoB1SswtFQ0XLSB%2FHZAEnZZviMUU%2BUH0bWBkIdAGdEfzTW%2Fw4Rx6PvmoaRhYY8exdVMIk6mMVkXUvk9f18%2Blx2MiixZ9ulfKhmVkHQK9rJZJetM2TqbkNRmLmsFrTmGTn9U4werOj4FvqLppwqPeXttdLQrLdYXqjlgLeVP6hpxpxOm0RvstmAFlRXx7vLd9mDWJjQUDyK3Fe5KKb7NhnEsu4r5prkOn3Q3F6USwj3%2FzeZJhVaBnomZaa%2BWwO1RV5R5giNdWjMDqbawfsyYou%2FrULWCquEkVlG%2BOhzdpVVCuKjCxLcqDNEXX8QT3H%2FYZY%2FH0zKCClSNmJZTSm%2FOP%2FH3ctzYZnX2JMsTiSD527blOkfGWRIJWtQYhoMKrYn70GOqUBYAHQIDmYWU4KwoWefFCbM5sswCCttO%2Fw3MNVH8OPGnsmo%2BOGy6Brp%2BPCLtBjxJjLuO0EcjsbvX0hSN%2Bu1eVJuWLef8Itk25B%2FT4INeSU8U4w5A7vVJ2M274Yb9QNJsRYb2jFTfSAVOWjlleVHeCz2pzja%2FaDsOkUYJEyRDYezG8gp9rpGoiLmhuDnri424hanx4u7aG3iXUpC1Si0iW%2FDdBQhru4&X-Amz-Signature=7c7c0efe7abb89b3985e06ecfbe5b15c26c0916a8094a9af51f448816e56da7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
