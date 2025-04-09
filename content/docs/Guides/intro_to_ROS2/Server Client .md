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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTHTJIH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDJZMKYlTH%2Bys01aGUnDqHJFWFm2QUUFHLs3EOP5RqEVwIhAPBqgMBn5cGeRX593OcHT1bJuJnuXbsqQTT82%2BAPXpRMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztVCeNlRup2rhHDRkq3AOjS0TvKvdlGEyb7seP110MUXw%2BcNdjfpKq2nRnWgqLV41qAjPw%2FRkawFI8jEGFlMrFi1YSllqVoLr%2BYmNmdnOodnlqjIUvZjmRVgFui7lpeueC9XIBmXKb0u3jPyLQIXiQ4ZlT8p9bZLCjItojLOF01OSavWxr87v7AvrJNgo2U2FQ70tUlQf3eANIJTqJnRydoE%2Bo6VSgnxQY1xb4HGz%2FLUEJbJdKysrNC0LyKb6F%2B0rk9Um2qGnqGPKhJNXtpDovfnvCNhfmEosaIdmNAEsbuWNNeZlfub7jA7LheUZsLlb8maeXo0wI4sHw269%2FCZN4DbVKUP9V524yAs%2BDRLSg77AiQ4%2FKmiDcxXh0t2CSECbQq3MtjBwnx4h7xKdNbeU7JB712tT5j5WJLL6I6f7EshXDo9d9dlnjE17WXgl8y5IEbUqMylFmuxYH5usJdVdJ3%2Fstj0oVu8HZwI1TsvHajIZzbE4Q%2BiDLjgtQtjVCJaD%2FkdkiG%2FagjMycYpAfRTv4PIiINkJSLSRh2yUZuRATkXh8%2BvXWP4bLQ7y1Cs1RG6wXQe2ItY1jAQCK%2F2u%2FcbFF5gc3mckIZz%2FJY8AOXUXJa4DVKT77Eqmaq2C%2FhhwsB7%2FDFAUjzWOi7fNvkjDK%2B9q%2FBjqkAVyCYC%2Bu0xgKqaaY7OfXdsipwG1%2FDuukhm6BOS0zQCAmWWxL2ImoxxdRHUAnJCjIBTzu4jvj2RJn5fHY9Ma0lOI5hbmPSJGDyXzGrIY%2FLR46RKeXYou9zLEefz55aA4F5RuSoLXwKrccb9pHVRFDYXKTyU2izPiBvhlVwsZEy7v2zBUlKYW6Gpb%2B9OAQdhke0h973X8kbRlKndzQu1r5%2BpA4Bodn&X-Amz-Signature=8aa615902ee8ef34c3a15873a5b430d4e5bab10787fd5173657733a6a7b7cc81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTHTJIH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDJZMKYlTH%2Bys01aGUnDqHJFWFm2QUUFHLs3EOP5RqEVwIhAPBqgMBn5cGeRX593OcHT1bJuJnuXbsqQTT82%2BAPXpRMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztVCeNlRup2rhHDRkq3AOjS0TvKvdlGEyb7seP110MUXw%2BcNdjfpKq2nRnWgqLV41qAjPw%2FRkawFI8jEGFlMrFi1YSllqVoLr%2BYmNmdnOodnlqjIUvZjmRVgFui7lpeueC9XIBmXKb0u3jPyLQIXiQ4ZlT8p9bZLCjItojLOF01OSavWxr87v7AvrJNgo2U2FQ70tUlQf3eANIJTqJnRydoE%2Bo6VSgnxQY1xb4HGz%2FLUEJbJdKysrNC0LyKb6F%2B0rk9Um2qGnqGPKhJNXtpDovfnvCNhfmEosaIdmNAEsbuWNNeZlfub7jA7LheUZsLlb8maeXo0wI4sHw269%2FCZN4DbVKUP9V524yAs%2BDRLSg77AiQ4%2FKmiDcxXh0t2CSECbQq3MtjBwnx4h7xKdNbeU7JB712tT5j5WJLL6I6f7EshXDo9d9dlnjE17WXgl8y5IEbUqMylFmuxYH5usJdVdJ3%2Fstj0oVu8HZwI1TsvHajIZzbE4Q%2BiDLjgtQtjVCJaD%2FkdkiG%2FagjMycYpAfRTv4PIiINkJSLSRh2yUZuRATkXh8%2BvXWP4bLQ7y1Cs1RG6wXQe2ItY1jAQCK%2F2u%2FcbFF5gc3mckIZz%2FJY8AOXUXJa4DVKT77Eqmaq2C%2FhhwsB7%2FDFAUjzWOi7fNvkjDK%2B9q%2FBjqkAVyCYC%2Bu0xgKqaaY7OfXdsipwG1%2FDuukhm6BOS0zQCAmWWxL2ImoxxdRHUAnJCjIBTzu4jvj2RJn5fHY9Ma0lOI5hbmPSJGDyXzGrIY%2FLR46RKeXYou9zLEefz55aA4F5RuSoLXwKrccb9pHVRFDYXKTyU2izPiBvhlVwsZEy7v2zBUlKYW6Gpb%2B9OAQdhke0h973X8kbRlKndzQu1r5%2BpA4Bodn&X-Amz-Signature=936825c08221cabfb78aa0c5913b19720680e0f29d67eb99dce1682352826724&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTHTJIH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDJZMKYlTH%2Bys01aGUnDqHJFWFm2QUUFHLs3EOP5RqEVwIhAPBqgMBn5cGeRX593OcHT1bJuJnuXbsqQTT82%2BAPXpRMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztVCeNlRup2rhHDRkq3AOjS0TvKvdlGEyb7seP110MUXw%2BcNdjfpKq2nRnWgqLV41qAjPw%2FRkawFI8jEGFlMrFi1YSllqVoLr%2BYmNmdnOodnlqjIUvZjmRVgFui7lpeueC9XIBmXKb0u3jPyLQIXiQ4ZlT8p9bZLCjItojLOF01OSavWxr87v7AvrJNgo2U2FQ70tUlQf3eANIJTqJnRydoE%2Bo6VSgnxQY1xb4HGz%2FLUEJbJdKysrNC0LyKb6F%2B0rk9Um2qGnqGPKhJNXtpDovfnvCNhfmEosaIdmNAEsbuWNNeZlfub7jA7LheUZsLlb8maeXo0wI4sHw269%2FCZN4DbVKUP9V524yAs%2BDRLSg77AiQ4%2FKmiDcxXh0t2CSECbQq3MtjBwnx4h7xKdNbeU7JB712tT5j5WJLL6I6f7EshXDo9d9dlnjE17WXgl8y5IEbUqMylFmuxYH5usJdVdJ3%2Fstj0oVu8HZwI1TsvHajIZzbE4Q%2BiDLjgtQtjVCJaD%2FkdkiG%2FagjMycYpAfRTv4PIiINkJSLSRh2yUZuRATkXh8%2BvXWP4bLQ7y1Cs1RG6wXQe2ItY1jAQCK%2F2u%2FcbFF5gc3mckIZz%2FJY8AOXUXJa4DVKT77Eqmaq2C%2FhhwsB7%2FDFAUjzWOi7fNvkjDK%2B9q%2FBjqkAVyCYC%2Bu0xgKqaaY7OfXdsipwG1%2FDuukhm6BOS0zQCAmWWxL2ImoxxdRHUAnJCjIBTzu4jvj2RJn5fHY9Ma0lOI5hbmPSJGDyXzGrIY%2FLR46RKeXYou9zLEefz55aA4F5RuSoLXwKrccb9pHVRFDYXKTyU2izPiBvhlVwsZEy7v2zBUlKYW6Gpb%2B9OAQdhke0h973X8kbRlKndzQu1r5%2BpA4Bodn&X-Amz-Signature=e04010098cb13d20af52890c6aceead344faf5ffa4b692ffbb5153cd8b9d6f37&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTHTJIH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDJZMKYlTH%2Bys01aGUnDqHJFWFm2QUUFHLs3EOP5RqEVwIhAPBqgMBn5cGeRX593OcHT1bJuJnuXbsqQTT82%2BAPXpRMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztVCeNlRup2rhHDRkq3AOjS0TvKvdlGEyb7seP110MUXw%2BcNdjfpKq2nRnWgqLV41qAjPw%2FRkawFI8jEGFlMrFi1YSllqVoLr%2BYmNmdnOodnlqjIUvZjmRVgFui7lpeueC9XIBmXKb0u3jPyLQIXiQ4ZlT8p9bZLCjItojLOF01OSavWxr87v7AvrJNgo2U2FQ70tUlQf3eANIJTqJnRydoE%2Bo6VSgnxQY1xb4HGz%2FLUEJbJdKysrNC0LyKb6F%2B0rk9Um2qGnqGPKhJNXtpDovfnvCNhfmEosaIdmNAEsbuWNNeZlfub7jA7LheUZsLlb8maeXo0wI4sHw269%2FCZN4DbVKUP9V524yAs%2BDRLSg77AiQ4%2FKmiDcxXh0t2CSECbQq3MtjBwnx4h7xKdNbeU7JB712tT5j5WJLL6I6f7EshXDo9d9dlnjE17WXgl8y5IEbUqMylFmuxYH5usJdVdJ3%2Fstj0oVu8HZwI1TsvHajIZzbE4Q%2BiDLjgtQtjVCJaD%2FkdkiG%2FagjMycYpAfRTv4PIiINkJSLSRh2yUZuRATkXh8%2BvXWP4bLQ7y1Cs1RG6wXQe2ItY1jAQCK%2F2u%2FcbFF5gc3mckIZz%2FJY8AOXUXJa4DVKT77Eqmaq2C%2FhhwsB7%2FDFAUjzWOi7fNvkjDK%2B9q%2FBjqkAVyCYC%2Bu0xgKqaaY7OfXdsipwG1%2FDuukhm6BOS0zQCAmWWxL2ImoxxdRHUAnJCjIBTzu4jvj2RJn5fHY9Ma0lOI5hbmPSJGDyXzGrIY%2FLR46RKeXYou9zLEefz55aA4F5RuSoLXwKrccb9pHVRFDYXKTyU2izPiBvhlVwsZEy7v2zBUlKYW6Gpb%2B9OAQdhke0h973X8kbRlKndzQu1r5%2BpA4Bodn&X-Amz-Signature=b7e6d34a7eaa7e906655d4f2ebf20d9077c773cc52512743b23d162107f45e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTHTJIH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDJZMKYlTH%2Bys01aGUnDqHJFWFm2QUUFHLs3EOP5RqEVwIhAPBqgMBn5cGeRX593OcHT1bJuJnuXbsqQTT82%2BAPXpRMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztVCeNlRup2rhHDRkq3AOjS0TvKvdlGEyb7seP110MUXw%2BcNdjfpKq2nRnWgqLV41qAjPw%2FRkawFI8jEGFlMrFi1YSllqVoLr%2BYmNmdnOodnlqjIUvZjmRVgFui7lpeueC9XIBmXKb0u3jPyLQIXiQ4ZlT8p9bZLCjItojLOF01OSavWxr87v7AvrJNgo2U2FQ70tUlQf3eANIJTqJnRydoE%2Bo6VSgnxQY1xb4HGz%2FLUEJbJdKysrNC0LyKb6F%2B0rk9Um2qGnqGPKhJNXtpDovfnvCNhfmEosaIdmNAEsbuWNNeZlfub7jA7LheUZsLlb8maeXo0wI4sHw269%2FCZN4DbVKUP9V524yAs%2BDRLSg77AiQ4%2FKmiDcxXh0t2CSECbQq3MtjBwnx4h7xKdNbeU7JB712tT5j5WJLL6I6f7EshXDo9d9dlnjE17WXgl8y5IEbUqMylFmuxYH5usJdVdJ3%2Fstj0oVu8HZwI1TsvHajIZzbE4Q%2BiDLjgtQtjVCJaD%2FkdkiG%2FagjMycYpAfRTv4PIiINkJSLSRh2yUZuRATkXh8%2BvXWP4bLQ7y1Cs1RG6wXQe2ItY1jAQCK%2F2u%2FcbFF5gc3mckIZz%2FJY8AOXUXJa4DVKT77Eqmaq2C%2FhhwsB7%2FDFAUjzWOi7fNvkjDK%2B9q%2FBjqkAVyCYC%2Bu0xgKqaaY7OfXdsipwG1%2FDuukhm6BOS0zQCAmWWxL2ImoxxdRHUAnJCjIBTzu4jvj2RJn5fHY9Ma0lOI5hbmPSJGDyXzGrIY%2FLR46RKeXYou9zLEefz55aA4F5RuSoLXwKrccb9pHVRFDYXKTyU2izPiBvhlVwsZEy7v2zBUlKYW6Gpb%2B9OAQdhke0h973X8kbRlKndzQu1r5%2BpA4Bodn&X-Amz-Signature=704369e79234fd0a749438f4f93222c2135097e793d9d800b4cd4f78012802d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
