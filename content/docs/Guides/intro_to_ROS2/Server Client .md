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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEKBTHG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ8nv96%2B9jb05haWFXR95vSoSNYncFzqnz%2Fb4vkcS7nwIhANrCSQ0IV7CBgxTzgFA745zoCf7GLHPHv1MRr9aNjO1XKv8DCGUQABoMNjM3NDIzMTgzODA1Igz%2F0VlkkUdmBalNfV8q3APk7eDbuU8eTuXI3aVNJeAU0RIOcEuyyiI%2BJbryN5Hm%2FCh05JTqBgiH5CmV66qsi%2BoVoYBuEmKtloj%2FIniml2%2FOBXN%2FXJA6j0T2bPW1LCupF%2BarHjtdcuIyTiv7hMwxocCSN0dEYVaLPdaW9XnHkV9cQszNBTvW%2F%2FitoJU4mWPjdcLdHMhPeyd3e3gz%2B8QJroP7sl8xmWD8gfOOj8r6qYPzPYgE1P0vZpHDKyosK7UXKD2R886t99s1YQpsJ6bvgiJUMSa0oW25%2Bs20zjAjD9IR5HgV5OYmrM30B%2FJznE9kD8mIR%2BpY4rXD8cwZAdv5%2BYh6Pq8LlNv5EFqiDsadE2%2BZbtgDU2zmDhxaTDu4f7mQFC6%2FUOr5O%2BTM86Fb%2Fm02GFIK60e70vWJ33iBQq6gxobUWDQscmsK8aqpyOLJS5%2BDdYl7GLTc9IVDBHhJEG8MQupbtAg%2BHl%2BGB69VuzUdw4J3kGpPl9c79Ml5bkkXuEFcVS7o5qVnQCYxU3QReVB0wzb2oKgq%2FoX2uhRlW9ROsPcPcLyAcL9hMcLrLwyeHxOB%2FhmNHk96WNOrIJcNSkx39eIUNHGaE3P2HifuUt7FywHkWzSjAn9o7WIEZT4cjVVFMQgvT8DiBJDMFISrfjD2kY3CBjqkATNA%2BioBnbQ5s0FPpHETrq%2Bn6BUhlm5tV7s2TNInl1zsU8V1RQZiJUS5w5Rf0MwfXJpQw508GXBjTvhJ9A5GlJ%2BlVTsVhNtVdTWNY3xumX%2FbSSqM%2FTVK8nmL59h5wPxkhgwaln2tN6jFQzucsuq%2BbS5Sik7ScdZQrjzA%2FHZDorUR8apaSbmET3fkx2LOU2u6KTA2Vlw3TJTIBb8mjKkDB4amnQM%2B&X-Amz-Signature=9d70f7422869a8e83bb756dba55dede83be364b5665523b6c99251607939ed09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEKBTHG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ8nv96%2B9jb05haWFXR95vSoSNYncFzqnz%2Fb4vkcS7nwIhANrCSQ0IV7CBgxTzgFA745zoCf7GLHPHv1MRr9aNjO1XKv8DCGUQABoMNjM3NDIzMTgzODA1Igz%2F0VlkkUdmBalNfV8q3APk7eDbuU8eTuXI3aVNJeAU0RIOcEuyyiI%2BJbryN5Hm%2FCh05JTqBgiH5CmV66qsi%2BoVoYBuEmKtloj%2FIniml2%2FOBXN%2FXJA6j0T2bPW1LCupF%2BarHjtdcuIyTiv7hMwxocCSN0dEYVaLPdaW9XnHkV9cQszNBTvW%2F%2FitoJU4mWPjdcLdHMhPeyd3e3gz%2B8QJroP7sl8xmWD8gfOOj8r6qYPzPYgE1P0vZpHDKyosK7UXKD2R886t99s1YQpsJ6bvgiJUMSa0oW25%2Bs20zjAjD9IR5HgV5OYmrM30B%2FJznE9kD8mIR%2BpY4rXD8cwZAdv5%2BYh6Pq8LlNv5EFqiDsadE2%2BZbtgDU2zmDhxaTDu4f7mQFC6%2FUOr5O%2BTM86Fb%2Fm02GFIK60e70vWJ33iBQq6gxobUWDQscmsK8aqpyOLJS5%2BDdYl7GLTc9IVDBHhJEG8MQupbtAg%2BHl%2BGB69VuzUdw4J3kGpPl9c79Ml5bkkXuEFcVS7o5qVnQCYxU3QReVB0wzb2oKgq%2FoX2uhRlW9ROsPcPcLyAcL9hMcLrLwyeHxOB%2FhmNHk96WNOrIJcNSkx39eIUNHGaE3P2HifuUt7FywHkWzSjAn9o7WIEZT4cjVVFMQgvT8DiBJDMFISrfjD2kY3CBjqkATNA%2BioBnbQ5s0FPpHETrq%2Bn6BUhlm5tV7s2TNInl1zsU8V1RQZiJUS5w5Rf0MwfXJpQw508GXBjTvhJ9A5GlJ%2BlVTsVhNtVdTWNY3xumX%2FbSSqM%2FTVK8nmL59h5wPxkhgwaln2tN6jFQzucsuq%2BbS5Sik7ScdZQrjzA%2FHZDorUR8apaSbmET3fkx2LOU2u6KTA2Vlw3TJTIBb8mjKkDB4amnQM%2B&X-Amz-Signature=355ac9880a612f9ccbc4eb2bdba28f2b63c7b6e3023702ccf679536c838dad88&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEKBTHG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ8nv96%2B9jb05haWFXR95vSoSNYncFzqnz%2Fb4vkcS7nwIhANrCSQ0IV7CBgxTzgFA745zoCf7GLHPHv1MRr9aNjO1XKv8DCGUQABoMNjM3NDIzMTgzODA1Igz%2F0VlkkUdmBalNfV8q3APk7eDbuU8eTuXI3aVNJeAU0RIOcEuyyiI%2BJbryN5Hm%2FCh05JTqBgiH5CmV66qsi%2BoVoYBuEmKtloj%2FIniml2%2FOBXN%2FXJA6j0T2bPW1LCupF%2BarHjtdcuIyTiv7hMwxocCSN0dEYVaLPdaW9XnHkV9cQszNBTvW%2F%2FitoJU4mWPjdcLdHMhPeyd3e3gz%2B8QJroP7sl8xmWD8gfOOj8r6qYPzPYgE1P0vZpHDKyosK7UXKD2R886t99s1YQpsJ6bvgiJUMSa0oW25%2Bs20zjAjD9IR5HgV5OYmrM30B%2FJznE9kD8mIR%2BpY4rXD8cwZAdv5%2BYh6Pq8LlNv5EFqiDsadE2%2BZbtgDU2zmDhxaTDu4f7mQFC6%2FUOr5O%2BTM86Fb%2Fm02GFIK60e70vWJ33iBQq6gxobUWDQscmsK8aqpyOLJS5%2BDdYl7GLTc9IVDBHhJEG8MQupbtAg%2BHl%2BGB69VuzUdw4J3kGpPl9c79Ml5bkkXuEFcVS7o5qVnQCYxU3QReVB0wzb2oKgq%2FoX2uhRlW9ROsPcPcLyAcL9hMcLrLwyeHxOB%2FhmNHk96WNOrIJcNSkx39eIUNHGaE3P2HifuUt7FywHkWzSjAn9o7WIEZT4cjVVFMQgvT8DiBJDMFISrfjD2kY3CBjqkATNA%2BioBnbQ5s0FPpHETrq%2Bn6BUhlm5tV7s2TNInl1zsU8V1RQZiJUS5w5Rf0MwfXJpQw508GXBjTvhJ9A5GlJ%2BlVTsVhNtVdTWNY3xumX%2FbSSqM%2FTVK8nmL59h5wPxkhgwaln2tN6jFQzucsuq%2BbS5Sik7ScdZQrjzA%2FHZDorUR8apaSbmET3fkx2LOU2u6KTA2Vlw3TJTIBb8mjKkDB4amnQM%2B&X-Amz-Signature=bf2ab40b34f695ef67a8c8ab0b8e0e7ad81120998c14270332d1965b1ead0431&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEKBTHG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ8nv96%2B9jb05haWFXR95vSoSNYncFzqnz%2Fb4vkcS7nwIhANrCSQ0IV7CBgxTzgFA745zoCf7GLHPHv1MRr9aNjO1XKv8DCGUQABoMNjM3NDIzMTgzODA1Igz%2F0VlkkUdmBalNfV8q3APk7eDbuU8eTuXI3aVNJeAU0RIOcEuyyiI%2BJbryN5Hm%2FCh05JTqBgiH5CmV66qsi%2BoVoYBuEmKtloj%2FIniml2%2FOBXN%2FXJA6j0T2bPW1LCupF%2BarHjtdcuIyTiv7hMwxocCSN0dEYVaLPdaW9XnHkV9cQszNBTvW%2F%2FitoJU4mWPjdcLdHMhPeyd3e3gz%2B8QJroP7sl8xmWD8gfOOj8r6qYPzPYgE1P0vZpHDKyosK7UXKD2R886t99s1YQpsJ6bvgiJUMSa0oW25%2Bs20zjAjD9IR5HgV5OYmrM30B%2FJznE9kD8mIR%2BpY4rXD8cwZAdv5%2BYh6Pq8LlNv5EFqiDsadE2%2BZbtgDU2zmDhxaTDu4f7mQFC6%2FUOr5O%2BTM86Fb%2Fm02GFIK60e70vWJ33iBQq6gxobUWDQscmsK8aqpyOLJS5%2BDdYl7GLTc9IVDBHhJEG8MQupbtAg%2BHl%2BGB69VuzUdw4J3kGpPl9c79Ml5bkkXuEFcVS7o5qVnQCYxU3QReVB0wzb2oKgq%2FoX2uhRlW9ROsPcPcLyAcL9hMcLrLwyeHxOB%2FhmNHk96WNOrIJcNSkx39eIUNHGaE3P2HifuUt7FywHkWzSjAn9o7WIEZT4cjVVFMQgvT8DiBJDMFISrfjD2kY3CBjqkATNA%2BioBnbQ5s0FPpHETrq%2Bn6BUhlm5tV7s2TNInl1zsU8V1RQZiJUS5w5Rf0MwfXJpQw508GXBjTvhJ9A5GlJ%2BlVTsVhNtVdTWNY3xumX%2FbSSqM%2FTVK8nmL59h5wPxkhgwaln2tN6jFQzucsuq%2BbS5Sik7ScdZQrjzA%2FHZDorUR8apaSbmET3fkx2LOU2u6KTA2Vlw3TJTIBb8mjKkDB4amnQM%2B&X-Amz-Signature=47a7a04c98a08abccefa423f7732c03cc0eba52d67f1c1d9cdd66958c672c6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEKBTHG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ8nv96%2B9jb05haWFXR95vSoSNYncFzqnz%2Fb4vkcS7nwIhANrCSQ0IV7CBgxTzgFA745zoCf7GLHPHv1MRr9aNjO1XKv8DCGUQABoMNjM3NDIzMTgzODA1Igz%2F0VlkkUdmBalNfV8q3APk7eDbuU8eTuXI3aVNJeAU0RIOcEuyyiI%2BJbryN5Hm%2FCh05JTqBgiH5CmV66qsi%2BoVoYBuEmKtloj%2FIniml2%2FOBXN%2FXJA6j0T2bPW1LCupF%2BarHjtdcuIyTiv7hMwxocCSN0dEYVaLPdaW9XnHkV9cQszNBTvW%2F%2FitoJU4mWPjdcLdHMhPeyd3e3gz%2B8QJroP7sl8xmWD8gfOOj8r6qYPzPYgE1P0vZpHDKyosK7UXKD2R886t99s1YQpsJ6bvgiJUMSa0oW25%2Bs20zjAjD9IR5HgV5OYmrM30B%2FJznE9kD8mIR%2BpY4rXD8cwZAdv5%2BYh6Pq8LlNv5EFqiDsadE2%2BZbtgDU2zmDhxaTDu4f7mQFC6%2FUOr5O%2BTM86Fb%2Fm02GFIK60e70vWJ33iBQq6gxobUWDQscmsK8aqpyOLJS5%2BDdYl7GLTc9IVDBHhJEG8MQupbtAg%2BHl%2BGB69VuzUdw4J3kGpPl9c79Ml5bkkXuEFcVS7o5qVnQCYxU3QReVB0wzb2oKgq%2FoX2uhRlW9ROsPcPcLyAcL9hMcLrLwyeHxOB%2FhmNHk96WNOrIJcNSkx39eIUNHGaE3P2HifuUt7FywHkWzSjAn9o7WIEZT4cjVVFMQgvT8DiBJDMFISrfjD2kY3CBjqkATNA%2BioBnbQ5s0FPpHETrq%2Bn6BUhlm5tV7s2TNInl1zsU8V1RQZiJUS5w5Rf0MwfXJpQw508GXBjTvhJ9A5GlJ%2BlVTsVhNtVdTWNY3xumX%2FbSSqM%2FTVK8nmL59h5wPxkhgwaln2tN6jFQzucsuq%2BbS5Sik7ScdZQrjzA%2FHZDorUR8apaSbmET3fkx2LOU2u6KTA2Vlw3TJTIBb8mjKkDB4amnQM%2B&X-Amz-Signature=b88a0871bb775719b90ffad80e1f3e78619e84dc237374b6475a932d27ef3386&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
