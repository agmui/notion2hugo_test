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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4VXD3V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIHWDxig5a2NyOb91yhVhVIcyaJYul3kc5m28Ydn34LAiATV2bPbysUHc7py%2Bn1BLoirwQx5WPxE76EvQihMSbt8SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6SY7zxU2atWjGi8KtwDt4YmISGv9zndjorCS%2FMaElQoziVGrsjUpZ6q7%2BrQftmExeyIvJrr6hi%2Fmb4lzNtrfDVdl9gsN47EeX1JyzlakZtuFhRuHAK28GB3NieclJJha6TLGgNHTJPP440Xb%2B%2BYtZcJpwqsrfoka8wuETFeM9%2FwQygh9YpRNH1xr%2BIPMQIvjwMs1bu%2Fr3zhX14XSy51RzpNlcNs3qownOV9ZWaS4jtXiOGOprHmwK9kv1PUYLjUR0VH2Sv7CtmsxztW3ad%2FS%2BR9ghBtZjC1%2FGyocXqvFlYOvU75i0qkKXCJdrYcxUiXz%2BvBILrGDPnKLbnOS0vHdl41YSW0gPq1plhC0AJzpDXgH%2FCaR1QdwF%2BwW8SFeL4MY0bKvhHrc8HHWg1FjyeP6JiHlo0JOj%2FtUkxr4mu3omJCFY5b2qNU5RfHi%2B7XWXz8nMowZW%2BI9YTBdC0VM%2BIO6wt6l6EXXxFLdPk4O855eyBHfhqMi2yvONADlWBuIoUUNvZkls4WJ6%2BauOX%2FJGSafwsx2BhOZpd4S8j%2Bq7HPIIxU1WIZGI%2BRR1Ulo5IAYFFXo7jrXNuv26G10%2B2Wx4Ecic8c%2F%2Ficv5ecQ0yq4rmkNM7aJpxJxA1HlCfdPkZ1M1Hr%2F6%2BvghqU%2FHjCxC0wnL3ivQY6pgG95W06%2B1%2FRoLEP5fwz8eqaL9HEL1eVOs2G9%2BWyhO4MHOoGX2Ty5Kdi3RCqK22Red1pqHHojpkG%2Fnho2rvs7o89OyXeC5fCckkR7hIl4cin17Of4k3%2Fb5ht%2FxrdTe8m89LbIss7huprNqE78t9YUIFK7hq2ANCDvzsAxXF3LEiWxlmhymoIngdqwue81D0FxZn3zmq%2FEW3%2Fs75%2BMQJFO1SwvYJj5jlC&X-Amz-Signature=3cfb1bc61b262576d66e9d1a859acbe6b03dab98b0cd847480fcf22f57ae33ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4VXD3V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIHWDxig5a2NyOb91yhVhVIcyaJYul3kc5m28Ydn34LAiATV2bPbysUHc7py%2Bn1BLoirwQx5WPxE76EvQihMSbt8SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6SY7zxU2atWjGi8KtwDt4YmISGv9zndjorCS%2FMaElQoziVGrsjUpZ6q7%2BrQftmExeyIvJrr6hi%2Fmb4lzNtrfDVdl9gsN47EeX1JyzlakZtuFhRuHAK28GB3NieclJJha6TLGgNHTJPP440Xb%2B%2BYtZcJpwqsrfoka8wuETFeM9%2FwQygh9YpRNH1xr%2BIPMQIvjwMs1bu%2Fr3zhX14XSy51RzpNlcNs3qownOV9ZWaS4jtXiOGOprHmwK9kv1PUYLjUR0VH2Sv7CtmsxztW3ad%2FS%2BR9ghBtZjC1%2FGyocXqvFlYOvU75i0qkKXCJdrYcxUiXz%2BvBILrGDPnKLbnOS0vHdl41YSW0gPq1plhC0AJzpDXgH%2FCaR1QdwF%2BwW8SFeL4MY0bKvhHrc8HHWg1FjyeP6JiHlo0JOj%2FtUkxr4mu3omJCFY5b2qNU5RfHi%2B7XWXz8nMowZW%2BI9YTBdC0VM%2BIO6wt6l6EXXxFLdPk4O855eyBHfhqMi2yvONADlWBuIoUUNvZkls4WJ6%2BauOX%2FJGSafwsx2BhOZpd4S8j%2Bq7HPIIxU1WIZGI%2BRR1Ulo5IAYFFXo7jrXNuv26G10%2B2Wx4Ecic8c%2F%2Ficv5ecQ0yq4rmkNM7aJpxJxA1HlCfdPkZ1M1Hr%2F6%2BvghqU%2FHjCxC0wnL3ivQY6pgG95W06%2B1%2FRoLEP5fwz8eqaL9HEL1eVOs2G9%2BWyhO4MHOoGX2Ty5Kdi3RCqK22Red1pqHHojpkG%2Fnho2rvs7o89OyXeC5fCckkR7hIl4cin17Of4k3%2Fb5ht%2FxrdTe8m89LbIss7huprNqE78t9YUIFK7hq2ANCDvzsAxXF3LEiWxlmhymoIngdqwue81D0FxZn3zmq%2FEW3%2Fs75%2BMQJFO1SwvYJj5jlC&X-Amz-Signature=9aff03bf938ee3c32ac243e26e6feeeb806f9394a3bb1ea6e2a0e2c30319ed4b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4VXD3V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIHWDxig5a2NyOb91yhVhVIcyaJYul3kc5m28Ydn34LAiATV2bPbysUHc7py%2Bn1BLoirwQx5WPxE76EvQihMSbt8SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6SY7zxU2atWjGi8KtwDt4YmISGv9zndjorCS%2FMaElQoziVGrsjUpZ6q7%2BrQftmExeyIvJrr6hi%2Fmb4lzNtrfDVdl9gsN47EeX1JyzlakZtuFhRuHAK28GB3NieclJJha6TLGgNHTJPP440Xb%2B%2BYtZcJpwqsrfoka8wuETFeM9%2FwQygh9YpRNH1xr%2BIPMQIvjwMs1bu%2Fr3zhX14XSy51RzpNlcNs3qownOV9ZWaS4jtXiOGOprHmwK9kv1PUYLjUR0VH2Sv7CtmsxztW3ad%2FS%2BR9ghBtZjC1%2FGyocXqvFlYOvU75i0qkKXCJdrYcxUiXz%2BvBILrGDPnKLbnOS0vHdl41YSW0gPq1plhC0AJzpDXgH%2FCaR1QdwF%2BwW8SFeL4MY0bKvhHrc8HHWg1FjyeP6JiHlo0JOj%2FtUkxr4mu3omJCFY5b2qNU5RfHi%2B7XWXz8nMowZW%2BI9YTBdC0VM%2BIO6wt6l6EXXxFLdPk4O855eyBHfhqMi2yvONADlWBuIoUUNvZkls4WJ6%2BauOX%2FJGSafwsx2BhOZpd4S8j%2Bq7HPIIxU1WIZGI%2BRR1Ulo5IAYFFXo7jrXNuv26G10%2B2Wx4Ecic8c%2F%2Ficv5ecQ0yq4rmkNM7aJpxJxA1HlCfdPkZ1M1Hr%2F6%2BvghqU%2FHjCxC0wnL3ivQY6pgG95W06%2B1%2FRoLEP5fwz8eqaL9HEL1eVOs2G9%2BWyhO4MHOoGX2Ty5Kdi3RCqK22Red1pqHHojpkG%2Fnho2rvs7o89OyXeC5fCckkR7hIl4cin17Of4k3%2Fb5ht%2FxrdTe8m89LbIss7huprNqE78t9YUIFK7hq2ANCDvzsAxXF3LEiWxlmhymoIngdqwue81D0FxZn3zmq%2FEW3%2Fs75%2BMQJFO1SwvYJj5jlC&X-Amz-Signature=ed9aebd0b93b4f3c30030187ac67f71fa8280de117eeb12b02f05e20d8518355&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4VXD3V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIHWDxig5a2NyOb91yhVhVIcyaJYul3kc5m28Ydn34LAiATV2bPbysUHc7py%2Bn1BLoirwQx5WPxE76EvQihMSbt8SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6SY7zxU2atWjGi8KtwDt4YmISGv9zndjorCS%2FMaElQoziVGrsjUpZ6q7%2BrQftmExeyIvJrr6hi%2Fmb4lzNtrfDVdl9gsN47EeX1JyzlakZtuFhRuHAK28GB3NieclJJha6TLGgNHTJPP440Xb%2B%2BYtZcJpwqsrfoka8wuETFeM9%2FwQygh9YpRNH1xr%2BIPMQIvjwMs1bu%2Fr3zhX14XSy51RzpNlcNs3qownOV9ZWaS4jtXiOGOprHmwK9kv1PUYLjUR0VH2Sv7CtmsxztW3ad%2FS%2BR9ghBtZjC1%2FGyocXqvFlYOvU75i0qkKXCJdrYcxUiXz%2BvBILrGDPnKLbnOS0vHdl41YSW0gPq1plhC0AJzpDXgH%2FCaR1QdwF%2BwW8SFeL4MY0bKvhHrc8HHWg1FjyeP6JiHlo0JOj%2FtUkxr4mu3omJCFY5b2qNU5RfHi%2B7XWXz8nMowZW%2BI9YTBdC0VM%2BIO6wt6l6EXXxFLdPk4O855eyBHfhqMi2yvONADlWBuIoUUNvZkls4WJ6%2BauOX%2FJGSafwsx2BhOZpd4S8j%2Bq7HPIIxU1WIZGI%2BRR1Ulo5IAYFFXo7jrXNuv26G10%2B2Wx4Ecic8c%2F%2Ficv5ecQ0yq4rmkNM7aJpxJxA1HlCfdPkZ1M1Hr%2F6%2BvghqU%2FHjCxC0wnL3ivQY6pgG95W06%2B1%2FRoLEP5fwz8eqaL9HEL1eVOs2G9%2BWyhO4MHOoGX2Ty5Kdi3RCqK22Red1pqHHojpkG%2Fnho2rvs7o89OyXeC5fCckkR7hIl4cin17Of4k3%2Fb5ht%2FxrdTe8m89LbIss7huprNqE78t9YUIFK7hq2ANCDvzsAxXF3LEiWxlmhymoIngdqwue81D0FxZn3zmq%2FEW3%2Fs75%2BMQJFO1SwvYJj5jlC&X-Amz-Signature=ae02308152d7b491267b150e19e6a6c7f90aa0670a021d358ea05bf04aff70b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4VXD3V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIHWDxig5a2NyOb91yhVhVIcyaJYul3kc5m28Ydn34LAiATV2bPbysUHc7py%2Bn1BLoirwQx5WPxE76EvQihMSbt8SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6SY7zxU2atWjGi8KtwDt4YmISGv9zndjorCS%2FMaElQoziVGrsjUpZ6q7%2BrQftmExeyIvJrr6hi%2Fmb4lzNtrfDVdl9gsN47EeX1JyzlakZtuFhRuHAK28GB3NieclJJha6TLGgNHTJPP440Xb%2B%2BYtZcJpwqsrfoka8wuETFeM9%2FwQygh9YpRNH1xr%2BIPMQIvjwMs1bu%2Fr3zhX14XSy51RzpNlcNs3qownOV9ZWaS4jtXiOGOprHmwK9kv1PUYLjUR0VH2Sv7CtmsxztW3ad%2FS%2BR9ghBtZjC1%2FGyocXqvFlYOvU75i0qkKXCJdrYcxUiXz%2BvBILrGDPnKLbnOS0vHdl41YSW0gPq1plhC0AJzpDXgH%2FCaR1QdwF%2BwW8SFeL4MY0bKvhHrc8HHWg1FjyeP6JiHlo0JOj%2FtUkxr4mu3omJCFY5b2qNU5RfHi%2B7XWXz8nMowZW%2BI9YTBdC0VM%2BIO6wt6l6EXXxFLdPk4O855eyBHfhqMi2yvONADlWBuIoUUNvZkls4WJ6%2BauOX%2FJGSafwsx2BhOZpd4S8j%2Bq7HPIIxU1WIZGI%2BRR1Ulo5IAYFFXo7jrXNuv26G10%2B2Wx4Ecic8c%2F%2Ficv5ecQ0yq4rmkNM7aJpxJxA1HlCfdPkZ1M1Hr%2F6%2BvghqU%2FHjCxC0wnL3ivQY6pgG95W06%2B1%2FRoLEP5fwz8eqaL9HEL1eVOs2G9%2BWyhO4MHOoGX2Ty5Kdi3RCqK22Red1pqHHojpkG%2Fnho2rvs7o89OyXeC5fCckkR7hIl4cin17Of4k3%2Fb5ht%2FxrdTe8m89LbIss7huprNqE78t9YUIFK7hq2ANCDvzsAxXF3LEiWxlmhymoIngdqwue81D0FxZn3zmq%2FEW3%2Fs75%2BMQJFO1SwvYJj5jlC&X-Amz-Signature=5e0e634f79ed553781f26c76ec615a23f2334bb1bd31296cb645691c97520270&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
