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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXT6II4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC0deAjDruWVCdSGcPMR0DANJNJG4VWx%2FlYLF3HGqpFTQIhANsm9bsrwiCswTX0l33fn6qwmH8GJdfs%2FfIXbRzlS6R8Kv8DCD8QABoMNjM3NDIzMTgzODA1IgwLwOzicJwu07NqjdYq3AM42N5C9SH1%2FKk5UwDbg4KxnO4YlD%2FlZi6o605JMUu2Co%2F7DePsgOEIEZGqw78ajGGnNyi5l0%2F0UO4P5Dh06oj3WVkZAiibeSTKu7kJDiUCcDEF1zKm2j9pvUV1SDmNbWlOqbCxr2OjlgPH%2B46H6IEsi3ipPb7PYDpspeWvQ4%2BFwfdPQeTODQ%2FY%2F%2BBv44UVETwnpX31b9kHFtDs%2BxEbWSqyIXT8IUzSwUdiQqOaomE2ZCHeCsc%2BbGklJXdCEsGKbhAh0XL8JsLQXtqM%2BfPuArSuZ9RwIkjCs%2BTL8dtPm8OXs2vmqu3rfPqYyIPL4XBs%2BRTyrICtEVHmD4dwzytg%2BBgwUsm%2F3%2FBWcxnAJ5vlw9PQNh4Z%2FFPo%2B5bRTcLOu10%2B7qsO1QpD6%2FrU6Lf4M5hXd9%2FRi1Q%2F2nfnSeWlCbkKZ6S6YmxEg7XAHkJbNuH%2BIQpXETzEzjfo5QDdcer%2FxPdEgUUIspS2dXPheOz%2B986qsr%2Bssfdd%2BYijvRil9Hd3Jk5kUIg4Vpl8y7FWPj36c%2F%2BdUuIMIHNpSJtIC5IArrA9OUOlSn6GCX1cmpErMQosLGkUCenLIF%2FJiQzos1hqHkj5NTdyspEOw8yUbIlSedfC%2FMU6KFGGlhkdpVdSjzz18DCOwozEBjqkAbiqLkOY60h5WFhLOide77dZ8qTOPc4bKrdVUvSVwNsG9kMMnhLwA%2FwuTojpyLZDCrKKuf8DXRUBAvasX4aT1cEQu2QsePkfJMvExk%2FDz%2BR23NB3VSYUl7reH3iS2UmP5n4mAH70sSXSzE3w7ve99oFVx9KohwIm8ktLfiYdpDPzYDc74ZkVZ3%2BbQdw5%2BO3pNQT%2BJd9rekUt11jThIQojSO%2BgRzO&X-Amz-Signature=75582adc5608c6ca15b1d6116b95e417ac7576d38a4289d102a41321f4e4a856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXT6II4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC0deAjDruWVCdSGcPMR0DANJNJG4VWx%2FlYLF3HGqpFTQIhANsm9bsrwiCswTX0l33fn6qwmH8GJdfs%2FfIXbRzlS6R8Kv8DCD8QABoMNjM3NDIzMTgzODA1IgwLwOzicJwu07NqjdYq3AM42N5C9SH1%2FKk5UwDbg4KxnO4YlD%2FlZi6o605JMUu2Co%2F7DePsgOEIEZGqw78ajGGnNyi5l0%2F0UO4P5Dh06oj3WVkZAiibeSTKu7kJDiUCcDEF1zKm2j9pvUV1SDmNbWlOqbCxr2OjlgPH%2B46H6IEsi3ipPb7PYDpspeWvQ4%2BFwfdPQeTODQ%2FY%2F%2BBv44UVETwnpX31b9kHFtDs%2BxEbWSqyIXT8IUzSwUdiQqOaomE2ZCHeCsc%2BbGklJXdCEsGKbhAh0XL8JsLQXtqM%2BfPuArSuZ9RwIkjCs%2BTL8dtPm8OXs2vmqu3rfPqYyIPL4XBs%2BRTyrICtEVHmD4dwzytg%2BBgwUsm%2F3%2FBWcxnAJ5vlw9PQNh4Z%2FFPo%2B5bRTcLOu10%2B7qsO1QpD6%2FrU6Lf4M5hXd9%2FRi1Q%2F2nfnSeWlCbkKZ6S6YmxEg7XAHkJbNuH%2BIQpXETzEzjfo5QDdcer%2FxPdEgUUIspS2dXPheOz%2B986qsr%2Bssfdd%2BYijvRil9Hd3Jk5kUIg4Vpl8y7FWPj36c%2F%2BdUuIMIHNpSJtIC5IArrA9OUOlSn6GCX1cmpErMQosLGkUCenLIF%2FJiQzos1hqHkj5NTdyspEOw8yUbIlSedfC%2FMU6KFGGlhkdpVdSjzz18DCOwozEBjqkAbiqLkOY60h5WFhLOide77dZ8qTOPc4bKrdVUvSVwNsG9kMMnhLwA%2FwuTojpyLZDCrKKuf8DXRUBAvasX4aT1cEQu2QsePkfJMvExk%2FDz%2BR23NB3VSYUl7reH3iS2UmP5n4mAH70sSXSzE3w7ve99oFVx9KohwIm8ktLfiYdpDPzYDc74ZkVZ3%2BbQdw5%2BO3pNQT%2BJd9rekUt11jThIQojSO%2BgRzO&X-Amz-Signature=34bcadbe619b230cc908672474dfd1e0010fda9154d79ec0c5009075b337640a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXT6II4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC0deAjDruWVCdSGcPMR0DANJNJG4VWx%2FlYLF3HGqpFTQIhANsm9bsrwiCswTX0l33fn6qwmH8GJdfs%2FfIXbRzlS6R8Kv8DCD8QABoMNjM3NDIzMTgzODA1IgwLwOzicJwu07NqjdYq3AM42N5C9SH1%2FKk5UwDbg4KxnO4YlD%2FlZi6o605JMUu2Co%2F7DePsgOEIEZGqw78ajGGnNyi5l0%2F0UO4P5Dh06oj3WVkZAiibeSTKu7kJDiUCcDEF1zKm2j9pvUV1SDmNbWlOqbCxr2OjlgPH%2B46H6IEsi3ipPb7PYDpspeWvQ4%2BFwfdPQeTODQ%2FY%2F%2BBv44UVETwnpX31b9kHFtDs%2BxEbWSqyIXT8IUzSwUdiQqOaomE2ZCHeCsc%2BbGklJXdCEsGKbhAh0XL8JsLQXtqM%2BfPuArSuZ9RwIkjCs%2BTL8dtPm8OXs2vmqu3rfPqYyIPL4XBs%2BRTyrICtEVHmD4dwzytg%2BBgwUsm%2F3%2FBWcxnAJ5vlw9PQNh4Z%2FFPo%2B5bRTcLOu10%2B7qsO1QpD6%2FrU6Lf4M5hXd9%2FRi1Q%2F2nfnSeWlCbkKZ6S6YmxEg7XAHkJbNuH%2BIQpXETzEzjfo5QDdcer%2FxPdEgUUIspS2dXPheOz%2B986qsr%2Bssfdd%2BYijvRil9Hd3Jk5kUIg4Vpl8y7FWPj36c%2F%2BdUuIMIHNpSJtIC5IArrA9OUOlSn6GCX1cmpErMQosLGkUCenLIF%2FJiQzos1hqHkj5NTdyspEOw8yUbIlSedfC%2FMU6KFGGlhkdpVdSjzz18DCOwozEBjqkAbiqLkOY60h5WFhLOide77dZ8qTOPc4bKrdVUvSVwNsG9kMMnhLwA%2FwuTojpyLZDCrKKuf8DXRUBAvasX4aT1cEQu2QsePkfJMvExk%2FDz%2BR23NB3VSYUl7reH3iS2UmP5n4mAH70sSXSzE3w7ve99oFVx9KohwIm8ktLfiYdpDPzYDc74ZkVZ3%2BbQdw5%2BO3pNQT%2BJd9rekUt11jThIQojSO%2BgRzO&X-Amz-Signature=17cbeab8096677a121ccc727aed0f920d2ed78caec2056088243944b92dc58ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXT6II4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC0deAjDruWVCdSGcPMR0DANJNJG4VWx%2FlYLF3HGqpFTQIhANsm9bsrwiCswTX0l33fn6qwmH8GJdfs%2FfIXbRzlS6R8Kv8DCD8QABoMNjM3NDIzMTgzODA1IgwLwOzicJwu07NqjdYq3AM42N5C9SH1%2FKk5UwDbg4KxnO4YlD%2FlZi6o605JMUu2Co%2F7DePsgOEIEZGqw78ajGGnNyi5l0%2F0UO4P5Dh06oj3WVkZAiibeSTKu7kJDiUCcDEF1zKm2j9pvUV1SDmNbWlOqbCxr2OjlgPH%2B46H6IEsi3ipPb7PYDpspeWvQ4%2BFwfdPQeTODQ%2FY%2F%2BBv44UVETwnpX31b9kHFtDs%2BxEbWSqyIXT8IUzSwUdiQqOaomE2ZCHeCsc%2BbGklJXdCEsGKbhAh0XL8JsLQXtqM%2BfPuArSuZ9RwIkjCs%2BTL8dtPm8OXs2vmqu3rfPqYyIPL4XBs%2BRTyrICtEVHmD4dwzytg%2BBgwUsm%2F3%2FBWcxnAJ5vlw9PQNh4Z%2FFPo%2B5bRTcLOu10%2B7qsO1QpD6%2FrU6Lf4M5hXd9%2FRi1Q%2F2nfnSeWlCbkKZ6S6YmxEg7XAHkJbNuH%2BIQpXETzEzjfo5QDdcer%2FxPdEgUUIspS2dXPheOz%2B986qsr%2Bssfdd%2BYijvRil9Hd3Jk5kUIg4Vpl8y7FWPj36c%2F%2BdUuIMIHNpSJtIC5IArrA9OUOlSn6GCX1cmpErMQosLGkUCenLIF%2FJiQzos1hqHkj5NTdyspEOw8yUbIlSedfC%2FMU6KFGGlhkdpVdSjzz18DCOwozEBjqkAbiqLkOY60h5WFhLOide77dZ8qTOPc4bKrdVUvSVwNsG9kMMnhLwA%2FwuTojpyLZDCrKKuf8DXRUBAvasX4aT1cEQu2QsePkfJMvExk%2FDz%2BR23NB3VSYUl7reH3iS2UmP5n4mAH70sSXSzE3w7ve99oFVx9KohwIm8ktLfiYdpDPzYDc74ZkVZ3%2BbQdw5%2BO3pNQT%2BJd9rekUt11jThIQojSO%2BgRzO&X-Amz-Signature=8bfb88d19aa6346135c966e5ca00b6319e820ccff13571d65f5e32a710b0ee19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXT6II4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC0deAjDruWVCdSGcPMR0DANJNJG4VWx%2FlYLF3HGqpFTQIhANsm9bsrwiCswTX0l33fn6qwmH8GJdfs%2FfIXbRzlS6R8Kv8DCD8QABoMNjM3NDIzMTgzODA1IgwLwOzicJwu07NqjdYq3AM42N5C9SH1%2FKk5UwDbg4KxnO4YlD%2FlZi6o605JMUu2Co%2F7DePsgOEIEZGqw78ajGGnNyi5l0%2F0UO4P5Dh06oj3WVkZAiibeSTKu7kJDiUCcDEF1zKm2j9pvUV1SDmNbWlOqbCxr2OjlgPH%2B46H6IEsi3ipPb7PYDpspeWvQ4%2BFwfdPQeTODQ%2FY%2F%2BBv44UVETwnpX31b9kHFtDs%2BxEbWSqyIXT8IUzSwUdiQqOaomE2ZCHeCsc%2BbGklJXdCEsGKbhAh0XL8JsLQXtqM%2BfPuArSuZ9RwIkjCs%2BTL8dtPm8OXs2vmqu3rfPqYyIPL4XBs%2BRTyrICtEVHmD4dwzytg%2BBgwUsm%2F3%2FBWcxnAJ5vlw9PQNh4Z%2FFPo%2B5bRTcLOu10%2B7qsO1QpD6%2FrU6Lf4M5hXd9%2FRi1Q%2F2nfnSeWlCbkKZ6S6YmxEg7XAHkJbNuH%2BIQpXETzEzjfo5QDdcer%2FxPdEgUUIspS2dXPheOz%2B986qsr%2Bssfdd%2BYijvRil9Hd3Jk5kUIg4Vpl8y7FWPj36c%2F%2BdUuIMIHNpSJtIC5IArrA9OUOlSn6GCX1cmpErMQosLGkUCenLIF%2FJiQzos1hqHkj5NTdyspEOw8yUbIlSedfC%2FMU6KFGGlhkdpVdSjzz18DCOwozEBjqkAbiqLkOY60h5WFhLOide77dZ8qTOPc4bKrdVUvSVwNsG9kMMnhLwA%2FwuTojpyLZDCrKKuf8DXRUBAvasX4aT1cEQu2QsePkfJMvExk%2FDz%2BR23NB3VSYUl7reH3iS2UmP5n4mAH70sSXSzE3w7ve99oFVx9KohwIm8ktLfiYdpDPzYDc74ZkVZ3%2BbQdw5%2BO3pNQT%2BJd9rekUt11jThIQojSO%2BgRzO&X-Amz-Signature=546f8f8c33675fcca8b87e41566cda51438563b56dd02818becc9e6436dd4113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
