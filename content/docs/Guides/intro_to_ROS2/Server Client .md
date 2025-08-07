---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLHJXMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCPFKB4Y6OUsyeOmi2NcFuMlmL32RH%2FLYQN%2BWP%2FWSxEVAIhAKoRm17mQqvYCNPbS10%2B%2Fl72pNnAU%2FYWiQw54yfqoilqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoPzs7917OWfyo9roq3ANDOcSH%2BBzYxs83Ufh1walERt2vCJnJGbudxqomnr9VCWESLBhNiCGSKWaSFBnhVan6IU7i7RzE3fIMA%2FeF9FnEGkkwzWos1UqmB0AEkKtwBsKprgru%2Fc1LY%2BA4ohS%2Bw7hW3eEtrKKNFxQ9xVZl9ctEN2fw7XPhtWoYnej7XHnNQ8dHDM2D1TcEBR%2BMsSGyOw54FjunuHfOtpZmMODs6OXDwsk02C8RY3wD0S9wVrHoKZ17kptSvwQ7f4E6z0IOAxoihQpjrYJsqXkg3nghCfhN%2FWy1iOM%2FAQvyF%2F0oydAjPaYqZz97%2Fhu94McxUh3MsWe4bdo%2BGB%2Bo%2BWmO86QQreddVK7Tt3FIRmFtd8ukN4jMCRmm5QsxT0lIH1qomwl6lZNoSFb1fj9%2FerRismtgjjf0TbPKOTAXSGQvSy1hX03dqONrGYd1N2YFMxHSJcjbmDHZT2nBrRa5d3kcLQeQOxX%2BcXrOJLnDHAhkm9giWkARGRYwHggf3dRY%2FgdyHexT%2F1ANqIH6Vwh0QFelLZha0bMOGf6PHh6ATFLzpr6uCOb8ruh0jku8W95CFVUtjTJGFeeJlAle4VKm5j1iVISEYEiqvJoi9dKneqF6a%2F%2FyyaVzh82fk%2FxGdHWkrfLIgjDItdHEBjqkAczZOWJv%2BsiiunOmcFtjxX2VXM6S93e%2BIRD%2B%2BI0wG4RogAIjd63yuXtpERRxKHuv7PNasC00Jprk9mEBsLJCcuKetEnbD%2BK%2BGnAnMmR2McPYI54yZnarZIUnsBnVcDMlCD4s9T1j4eSMbezz4ybre6Wmf813g5fkjWACSjcXi8zXFzb1dt%2FTt0oeMH6m%2BztYJLtEMq2MtyhYYuiU%2BCzBPz3D5LV4&X-Amz-Signature=ea526229263d2abf904ca88626cf8b0de6706278b2c386c5b676ddf6406fc4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLHJXMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCPFKB4Y6OUsyeOmi2NcFuMlmL32RH%2FLYQN%2BWP%2FWSxEVAIhAKoRm17mQqvYCNPbS10%2B%2Fl72pNnAU%2FYWiQw54yfqoilqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoPzs7917OWfyo9roq3ANDOcSH%2BBzYxs83Ufh1walERt2vCJnJGbudxqomnr9VCWESLBhNiCGSKWaSFBnhVan6IU7i7RzE3fIMA%2FeF9FnEGkkwzWos1UqmB0AEkKtwBsKprgru%2Fc1LY%2BA4ohS%2Bw7hW3eEtrKKNFxQ9xVZl9ctEN2fw7XPhtWoYnej7XHnNQ8dHDM2D1TcEBR%2BMsSGyOw54FjunuHfOtpZmMODs6OXDwsk02C8RY3wD0S9wVrHoKZ17kptSvwQ7f4E6z0IOAxoihQpjrYJsqXkg3nghCfhN%2FWy1iOM%2FAQvyF%2F0oydAjPaYqZz97%2Fhu94McxUh3MsWe4bdo%2BGB%2Bo%2BWmO86QQreddVK7Tt3FIRmFtd8ukN4jMCRmm5QsxT0lIH1qomwl6lZNoSFb1fj9%2FerRismtgjjf0TbPKOTAXSGQvSy1hX03dqONrGYd1N2YFMxHSJcjbmDHZT2nBrRa5d3kcLQeQOxX%2BcXrOJLnDHAhkm9giWkARGRYwHggf3dRY%2FgdyHexT%2F1ANqIH6Vwh0QFelLZha0bMOGf6PHh6ATFLzpr6uCOb8ruh0jku8W95CFVUtjTJGFeeJlAle4VKm5j1iVISEYEiqvJoi9dKneqF6a%2F%2FyyaVzh82fk%2FxGdHWkrfLIgjDItdHEBjqkAczZOWJv%2BsiiunOmcFtjxX2VXM6S93e%2BIRD%2B%2BI0wG4RogAIjd63yuXtpERRxKHuv7PNasC00Jprk9mEBsLJCcuKetEnbD%2BK%2BGnAnMmR2McPYI54yZnarZIUnsBnVcDMlCD4s9T1j4eSMbezz4ybre6Wmf813g5fkjWACSjcXi8zXFzb1dt%2FTt0oeMH6m%2BztYJLtEMq2MtyhYYuiU%2BCzBPz3D5LV4&X-Amz-Signature=3454d4bfa626ba1193dbd28b9338cd9ea07151784d5cf85b4351b7cb253b157a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLHJXMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCPFKB4Y6OUsyeOmi2NcFuMlmL32RH%2FLYQN%2BWP%2FWSxEVAIhAKoRm17mQqvYCNPbS10%2B%2Fl72pNnAU%2FYWiQw54yfqoilqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoPzs7917OWfyo9roq3ANDOcSH%2BBzYxs83Ufh1walERt2vCJnJGbudxqomnr9VCWESLBhNiCGSKWaSFBnhVan6IU7i7RzE3fIMA%2FeF9FnEGkkwzWos1UqmB0AEkKtwBsKprgru%2Fc1LY%2BA4ohS%2Bw7hW3eEtrKKNFxQ9xVZl9ctEN2fw7XPhtWoYnej7XHnNQ8dHDM2D1TcEBR%2BMsSGyOw54FjunuHfOtpZmMODs6OXDwsk02C8RY3wD0S9wVrHoKZ17kptSvwQ7f4E6z0IOAxoihQpjrYJsqXkg3nghCfhN%2FWy1iOM%2FAQvyF%2F0oydAjPaYqZz97%2Fhu94McxUh3MsWe4bdo%2BGB%2Bo%2BWmO86QQreddVK7Tt3FIRmFtd8ukN4jMCRmm5QsxT0lIH1qomwl6lZNoSFb1fj9%2FerRismtgjjf0TbPKOTAXSGQvSy1hX03dqONrGYd1N2YFMxHSJcjbmDHZT2nBrRa5d3kcLQeQOxX%2BcXrOJLnDHAhkm9giWkARGRYwHggf3dRY%2FgdyHexT%2F1ANqIH6Vwh0QFelLZha0bMOGf6PHh6ATFLzpr6uCOb8ruh0jku8W95CFVUtjTJGFeeJlAle4VKm5j1iVISEYEiqvJoi9dKneqF6a%2F%2FyyaVzh82fk%2FxGdHWkrfLIgjDItdHEBjqkAczZOWJv%2BsiiunOmcFtjxX2VXM6S93e%2BIRD%2B%2BI0wG4RogAIjd63yuXtpERRxKHuv7PNasC00Jprk9mEBsLJCcuKetEnbD%2BK%2BGnAnMmR2McPYI54yZnarZIUnsBnVcDMlCD4s9T1j4eSMbezz4ybre6Wmf813g5fkjWACSjcXi8zXFzb1dt%2FTt0oeMH6m%2BztYJLtEMq2MtyhYYuiU%2BCzBPz3D5LV4&X-Amz-Signature=db645fcc4c3b51d9bdedcb44b01c5938999011b141600afaade0b900435a93e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLHJXMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCPFKB4Y6OUsyeOmi2NcFuMlmL32RH%2FLYQN%2BWP%2FWSxEVAIhAKoRm17mQqvYCNPbS10%2B%2Fl72pNnAU%2FYWiQw54yfqoilqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoPzs7917OWfyo9roq3ANDOcSH%2BBzYxs83Ufh1walERt2vCJnJGbudxqomnr9VCWESLBhNiCGSKWaSFBnhVan6IU7i7RzE3fIMA%2FeF9FnEGkkwzWos1UqmB0AEkKtwBsKprgru%2Fc1LY%2BA4ohS%2Bw7hW3eEtrKKNFxQ9xVZl9ctEN2fw7XPhtWoYnej7XHnNQ8dHDM2D1TcEBR%2BMsSGyOw54FjunuHfOtpZmMODs6OXDwsk02C8RY3wD0S9wVrHoKZ17kptSvwQ7f4E6z0IOAxoihQpjrYJsqXkg3nghCfhN%2FWy1iOM%2FAQvyF%2F0oydAjPaYqZz97%2Fhu94McxUh3MsWe4bdo%2BGB%2Bo%2BWmO86QQreddVK7Tt3FIRmFtd8ukN4jMCRmm5QsxT0lIH1qomwl6lZNoSFb1fj9%2FerRismtgjjf0TbPKOTAXSGQvSy1hX03dqONrGYd1N2YFMxHSJcjbmDHZT2nBrRa5d3kcLQeQOxX%2BcXrOJLnDHAhkm9giWkARGRYwHggf3dRY%2FgdyHexT%2F1ANqIH6Vwh0QFelLZha0bMOGf6PHh6ATFLzpr6uCOb8ruh0jku8W95CFVUtjTJGFeeJlAle4VKm5j1iVISEYEiqvJoi9dKneqF6a%2F%2FyyaVzh82fk%2FxGdHWkrfLIgjDItdHEBjqkAczZOWJv%2BsiiunOmcFtjxX2VXM6S93e%2BIRD%2B%2BI0wG4RogAIjd63yuXtpERRxKHuv7PNasC00Jprk9mEBsLJCcuKetEnbD%2BK%2BGnAnMmR2McPYI54yZnarZIUnsBnVcDMlCD4s9T1j4eSMbezz4ybre6Wmf813g5fkjWACSjcXi8zXFzb1dt%2FTt0oeMH6m%2BztYJLtEMq2MtyhYYuiU%2BCzBPz3D5LV4&X-Amz-Signature=a77f8c70bfc384bf370ad909ee3819ab602a7476aa2a2a40ed2c3e17f91cc7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLHJXMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCPFKB4Y6OUsyeOmi2NcFuMlmL32RH%2FLYQN%2BWP%2FWSxEVAIhAKoRm17mQqvYCNPbS10%2B%2Fl72pNnAU%2FYWiQw54yfqoilqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoPzs7917OWfyo9roq3ANDOcSH%2BBzYxs83Ufh1walERt2vCJnJGbudxqomnr9VCWESLBhNiCGSKWaSFBnhVan6IU7i7RzE3fIMA%2FeF9FnEGkkwzWos1UqmB0AEkKtwBsKprgru%2Fc1LY%2BA4ohS%2Bw7hW3eEtrKKNFxQ9xVZl9ctEN2fw7XPhtWoYnej7XHnNQ8dHDM2D1TcEBR%2BMsSGyOw54FjunuHfOtpZmMODs6OXDwsk02C8RY3wD0S9wVrHoKZ17kptSvwQ7f4E6z0IOAxoihQpjrYJsqXkg3nghCfhN%2FWy1iOM%2FAQvyF%2F0oydAjPaYqZz97%2Fhu94McxUh3MsWe4bdo%2BGB%2Bo%2BWmO86QQreddVK7Tt3FIRmFtd8ukN4jMCRmm5QsxT0lIH1qomwl6lZNoSFb1fj9%2FerRismtgjjf0TbPKOTAXSGQvSy1hX03dqONrGYd1N2YFMxHSJcjbmDHZT2nBrRa5d3kcLQeQOxX%2BcXrOJLnDHAhkm9giWkARGRYwHggf3dRY%2FgdyHexT%2F1ANqIH6Vwh0QFelLZha0bMOGf6PHh6ATFLzpr6uCOb8ruh0jku8W95CFVUtjTJGFeeJlAle4VKm5j1iVISEYEiqvJoi9dKneqF6a%2F%2FyyaVzh82fk%2FxGdHWkrfLIgjDItdHEBjqkAczZOWJv%2BsiiunOmcFtjxX2VXM6S93e%2BIRD%2B%2BI0wG4RogAIjd63yuXtpERRxKHuv7PNasC00Jprk9mEBsLJCcuKetEnbD%2BK%2BGnAnMmR2McPYI54yZnarZIUnsBnVcDMlCD4s9T1j4eSMbezz4ybre6Wmf813g5fkjWACSjcXi8zXFzb1dt%2FTt0oeMH6m%2BztYJLtEMq2MtyhYYuiU%2BCzBPz3D5LV4&X-Amz-Signature=8889071d300ff50e5aa0dfe10b779dec8290173755af0cf72034425168c35aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
