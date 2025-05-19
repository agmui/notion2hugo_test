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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGJJPYO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE9NJujbuUCPuyrh1DncAkFWN4qa%2BuLTq9IepmGTZPfQIgbXzfWxLgRKVHR9pLRWJDPlfDNm8GE2xFVjTM2qBRy30qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqOCsQJ4qbfUZLA4CrcAzqJUwD5icqimbMq%2BZ6Xbgdr6%2Bw%2BDNW3%2FJErZS0TUjWVP5jBuPu%2FZru39yjpag2qnIVO6JefmPO34SlJrnpCT%2FmyLLQv3XOMDNuMJCvDf3wlm%2BpasVMHn%2Ff0YoWok%2FK6bBonmmimCvnBcdMjx%2B49KnRQPdz2wETaYHEKXsRZvL6L%2B%2BojbRSc1EWc%2Fvmh2xORZGq3GyPFhny%2BwA9k%2B47r%2BgMJZD9f21UVX1nFonQKvDHO9p88V0o9YytCn%2B2ocFGSk6LPtNN54YYn4aWg%2FCQk4tZNmV5EjUekcJtIE4591my%2FP4UJPadLnuOwC4ghrNjed5ilCyFRZhqo11erXd0SZ6oOfEKgVGJcX8oaak1jaOz93atkHinEDwx6vMKJbJLGyRNPLb3eY3oUH69SjsWS8gnZZqfFXR9mYof41%2Fl%2FWVVWoxiUGXf4mSeIRg0GRWRhVX6CoM5DXXBxQCifizjhwS9MXinZ5WVwgQi7RTagYE9EibZ5wuZh8Sbr0autAVUK84Tf1lX1prVSymAqWhZSZgeFVbGySX%2BRi62rLQPLgIl4GHGJk0Nk4COpim2S%2FkD5%2Bt%2F%2BGZoyrtlzFkLQ40QvJNdy%2Bx%2BBGrKTvaDlzxvPLFCLJjdwlVFcBI3um3Q6MNuVrcEGOqUBdGOMibUAoiYhTSkiziSvIFEOVjsxj%2B9TkmeAme7WZOpTwfmSo0HR9%2B%2FcKAPI2HWpPuCcnMZ6G23ri%2FjhV3oQ6tsbBB6UktaRgvVGU8r%2B45Tkw2mpBkGLFS1MA8fbXMYWjPz1PGdy09oz%2BojKuKeAojIhyBO3%2B6z7t8N2eokJXRdOePj3OUPiXUlg7%2Fqoct%2BZkNeCG78gXLwgAHw42DD7kTPRCiYE&X-Amz-Signature=e75ba22cf565410ac677d8de2192b71ab50df7a87bc12821c9f91e3b6960d14c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGJJPYO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE9NJujbuUCPuyrh1DncAkFWN4qa%2BuLTq9IepmGTZPfQIgbXzfWxLgRKVHR9pLRWJDPlfDNm8GE2xFVjTM2qBRy30qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqOCsQJ4qbfUZLA4CrcAzqJUwD5icqimbMq%2BZ6Xbgdr6%2Bw%2BDNW3%2FJErZS0TUjWVP5jBuPu%2FZru39yjpag2qnIVO6JefmPO34SlJrnpCT%2FmyLLQv3XOMDNuMJCvDf3wlm%2BpasVMHn%2Ff0YoWok%2FK6bBonmmimCvnBcdMjx%2B49KnRQPdz2wETaYHEKXsRZvL6L%2B%2BojbRSc1EWc%2Fvmh2xORZGq3GyPFhny%2BwA9k%2B47r%2BgMJZD9f21UVX1nFonQKvDHO9p88V0o9YytCn%2B2ocFGSk6LPtNN54YYn4aWg%2FCQk4tZNmV5EjUekcJtIE4591my%2FP4UJPadLnuOwC4ghrNjed5ilCyFRZhqo11erXd0SZ6oOfEKgVGJcX8oaak1jaOz93atkHinEDwx6vMKJbJLGyRNPLb3eY3oUH69SjsWS8gnZZqfFXR9mYof41%2Fl%2FWVVWoxiUGXf4mSeIRg0GRWRhVX6CoM5DXXBxQCifizjhwS9MXinZ5WVwgQi7RTagYE9EibZ5wuZh8Sbr0autAVUK84Tf1lX1prVSymAqWhZSZgeFVbGySX%2BRi62rLQPLgIl4GHGJk0Nk4COpim2S%2FkD5%2Bt%2F%2BGZoyrtlzFkLQ40QvJNdy%2Bx%2BBGrKTvaDlzxvPLFCLJjdwlVFcBI3um3Q6MNuVrcEGOqUBdGOMibUAoiYhTSkiziSvIFEOVjsxj%2B9TkmeAme7WZOpTwfmSo0HR9%2B%2FcKAPI2HWpPuCcnMZ6G23ri%2FjhV3oQ6tsbBB6UktaRgvVGU8r%2B45Tkw2mpBkGLFS1MA8fbXMYWjPz1PGdy09oz%2BojKuKeAojIhyBO3%2B6z7t8N2eokJXRdOePj3OUPiXUlg7%2Fqoct%2BZkNeCG78gXLwgAHw42DD7kTPRCiYE&X-Amz-Signature=a8a0a8b928feb2b73986a0c581cf394c1e9cb82133d9fee2336b963e3216554d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGJJPYO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE9NJujbuUCPuyrh1DncAkFWN4qa%2BuLTq9IepmGTZPfQIgbXzfWxLgRKVHR9pLRWJDPlfDNm8GE2xFVjTM2qBRy30qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqOCsQJ4qbfUZLA4CrcAzqJUwD5icqimbMq%2BZ6Xbgdr6%2Bw%2BDNW3%2FJErZS0TUjWVP5jBuPu%2FZru39yjpag2qnIVO6JefmPO34SlJrnpCT%2FmyLLQv3XOMDNuMJCvDf3wlm%2BpasVMHn%2Ff0YoWok%2FK6bBonmmimCvnBcdMjx%2B49KnRQPdz2wETaYHEKXsRZvL6L%2B%2BojbRSc1EWc%2Fvmh2xORZGq3GyPFhny%2BwA9k%2B47r%2BgMJZD9f21UVX1nFonQKvDHO9p88V0o9YytCn%2B2ocFGSk6LPtNN54YYn4aWg%2FCQk4tZNmV5EjUekcJtIE4591my%2FP4UJPadLnuOwC4ghrNjed5ilCyFRZhqo11erXd0SZ6oOfEKgVGJcX8oaak1jaOz93atkHinEDwx6vMKJbJLGyRNPLb3eY3oUH69SjsWS8gnZZqfFXR9mYof41%2Fl%2FWVVWoxiUGXf4mSeIRg0GRWRhVX6CoM5DXXBxQCifizjhwS9MXinZ5WVwgQi7RTagYE9EibZ5wuZh8Sbr0autAVUK84Tf1lX1prVSymAqWhZSZgeFVbGySX%2BRi62rLQPLgIl4GHGJk0Nk4COpim2S%2FkD5%2Bt%2F%2BGZoyrtlzFkLQ40QvJNdy%2Bx%2BBGrKTvaDlzxvPLFCLJjdwlVFcBI3um3Q6MNuVrcEGOqUBdGOMibUAoiYhTSkiziSvIFEOVjsxj%2B9TkmeAme7WZOpTwfmSo0HR9%2B%2FcKAPI2HWpPuCcnMZ6G23ri%2FjhV3oQ6tsbBB6UktaRgvVGU8r%2B45Tkw2mpBkGLFS1MA8fbXMYWjPz1PGdy09oz%2BojKuKeAojIhyBO3%2B6z7t8N2eokJXRdOePj3OUPiXUlg7%2Fqoct%2BZkNeCG78gXLwgAHw42DD7kTPRCiYE&X-Amz-Signature=6dbcbe3bf276bcf2bf2feb3559d25bd80ccd2479df4833fe9a8a1274d3cdd365&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGJJPYO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE9NJujbuUCPuyrh1DncAkFWN4qa%2BuLTq9IepmGTZPfQIgbXzfWxLgRKVHR9pLRWJDPlfDNm8GE2xFVjTM2qBRy30qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqOCsQJ4qbfUZLA4CrcAzqJUwD5icqimbMq%2BZ6Xbgdr6%2Bw%2BDNW3%2FJErZS0TUjWVP5jBuPu%2FZru39yjpag2qnIVO6JefmPO34SlJrnpCT%2FmyLLQv3XOMDNuMJCvDf3wlm%2BpasVMHn%2Ff0YoWok%2FK6bBonmmimCvnBcdMjx%2B49KnRQPdz2wETaYHEKXsRZvL6L%2B%2BojbRSc1EWc%2Fvmh2xORZGq3GyPFhny%2BwA9k%2B47r%2BgMJZD9f21UVX1nFonQKvDHO9p88V0o9YytCn%2B2ocFGSk6LPtNN54YYn4aWg%2FCQk4tZNmV5EjUekcJtIE4591my%2FP4UJPadLnuOwC4ghrNjed5ilCyFRZhqo11erXd0SZ6oOfEKgVGJcX8oaak1jaOz93atkHinEDwx6vMKJbJLGyRNPLb3eY3oUH69SjsWS8gnZZqfFXR9mYof41%2Fl%2FWVVWoxiUGXf4mSeIRg0GRWRhVX6CoM5DXXBxQCifizjhwS9MXinZ5WVwgQi7RTagYE9EibZ5wuZh8Sbr0autAVUK84Tf1lX1prVSymAqWhZSZgeFVbGySX%2BRi62rLQPLgIl4GHGJk0Nk4COpim2S%2FkD5%2Bt%2F%2BGZoyrtlzFkLQ40QvJNdy%2Bx%2BBGrKTvaDlzxvPLFCLJjdwlVFcBI3um3Q6MNuVrcEGOqUBdGOMibUAoiYhTSkiziSvIFEOVjsxj%2B9TkmeAme7WZOpTwfmSo0HR9%2B%2FcKAPI2HWpPuCcnMZ6G23ri%2FjhV3oQ6tsbBB6UktaRgvVGU8r%2B45Tkw2mpBkGLFS1MA8fbXMYWjPz1PGdy09oz%2BojKuKeAojIhyBO3%2B6z7t8N2eokJXRdOePj3OUPiXUlg7%2Fqoct%2BZkNeCG78gXLwgAHw42DD7kTPRCiYE&X-Amz-Signature=b8416c96b0224419ab7fa2229550761f591151bf9c337af61906a62b10347f97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGJJPYO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE9NJujbuUCPuyrh1DncAkFWN4qa%2BuLTq9IepmGTZPfQIgbXzfWxLgRKVHR9pLRWJDPlfDNm8GE2xFVjTM2qBRy30qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqOCsQJ4qbfUZLA4CrcAzqJUwD5icqimbMq%2BZ6Xbgdr6%2Bw%2BDNW3%2FJErZS0TUjWVP5jBuPu%2FZru39yjpag2qnIVO6JefmPO34SlJrnpCT%2FmyLLQv3XOMDNuMJCvDf3wlm%2BpasVMHn%2Ff0YoWok%2FK6bBonmmimCvnBcdMjx%2B49KnRQPdz2wETaYHEKXsRZvL6L%2B%2BojbRSc1EWc%2Fvmh2xORZGq3GyPFhny%2BwA9k%2B47r%2BgMJZD9f21UVX1nFonQKvDHO9p88V0o9YytCn%2B2ocFGSk6LPtNN54YYn4aWg%2FCQk4tZNmV5EjUekcJtIE4591my%2FP4UJPadLnuOwC4ghrNjed5ilCyFRZhqo11erXd0SZ6oOfEKgVGJcX8oaak1jaOz93atkHinEDwx6vMKJbJLGyRNPLb3eY3oUH69SjsWS8gnZZqfFXR9mYof41%2Fl%2FWVVWoxiUGXf4mSeIRg0GRWRhVX6CoM5DXXBxQCifizjhwS9MXinZ5WVwgQi7RTagYE9EibZ5wuZh8Sbr0autAVUK84Tf1lX1prVSymAqWhZSZgeFVbGySX%2BRi62rLQPLgIl4GHGJk0Nk4COpim2S%2FkD5%2Bt%2F%2BGZoyrtlzFkLQ40QvJNdy%2Bx%2BBGrKTvaDlzxvPLFCLJjdwlVFcBI3um3Q6MNuVrcEGOqUBdGOMibUAoiYhTSkiziSvIFEOVjsxj%2B9TkmeAme7WZOpTwfmSo0HR9%2B%2FcKAPI2HWpPuCcnMZ6G23ri%2FjhV3oQ6tsbBB6UktaRgvVGU8r%2B45Tkw2mpBkGLFS1MA8fbXMYWjPz1PGdy09oz%2BojKuKeAojIhyBO3%2B6z7t8N2eokJXRdOePj3OUPiXUlg7%2Fqoct%2BZkNeCG78gXLwgAHw42DD7kTPRCiYE&X-Amz-Signature=8cab3f1c4cc1d8a0558c78e7fff83bb3b65de5e3898b1cce6136a1cde9a2fe06&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
