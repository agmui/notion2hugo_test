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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657H45T6X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9tTZYCfM9GHQxzXaS%2B5o1GsOz2ACbG13ihiba5%2B4QegIhAKf%2BIzjZgNhKsVBvvXArnHLAyUkJ99a1PsjLEEZouj43KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGA8KuYGlXiCOsfT0q3AP4huZfASP%2F7L%2BHjuMWhhwdeXLlMhD4A6kJ%2B6nplRjWHrVIMC9%2FHqt7no%2BS0Ym%2BNDfDfQ9vhq92YlttRup%2FP5oLt7fQe3VPoT626d7Puo75PobAV2XB3VRH9yEmXxJfazLCQWCR9atIGm%2FPuIwRNEvN6hAt9pZWtCXW8MQSAHPSkRKQCtfqTlzsylGIAkXA7yCy6fzct7is2NoLlNcWVlO9%2FPtM9G7THO28HtsRkyeS5G9Oa2KtKiGAcVj2WZs3VfFerEJ4KtVerJ3WM50V7tZeIBTo%2BT%2FReA32N86wLdtMOp5yGk4Z1zFEynAtKDncQFLnMVutV6FDxkUwGGJ0RloiydjgDDiT2euBUdqIn%2FOBIA49nvpAED5CCyvPPQBq6VTDs2J5kDT7PfnT2mAoIoMX32YSV2E3PDt%2ByBuJ37%2Fs9bqr32UcyysprC8sDp95SdN0BZJSiTVS51k9ITMpCNKddVKqEUD9SFMf1lWos%2FV8ZZscSiHtBExNxCRhswHGsX6G3IwPtTiHG%2BZbYGgOBi3Pd5l22%2FSodjYPHKaz8NygtBk2V20V8%2F3PZxgl34GBkfe3XC1aqFON14227QEJTe9wgFyOR82BxKpyCK7JYHYNDFjtuu2y3R1A6iw3hjCvpvS8BjqkAUZwoKlZSpPOl5qyC72wZwBQflEXf2eTB4ZAtsTxcEvdxXqTADLWzCGKEXGiobJOepoPvdpnDYYrcIv8wHl0XXvbpANu5oi%2FTqUs5LqNvuZYJKaU8HjmFH1rRyB1SZ1b7EF721BXJ98FXfyYOnGhvUcbqnQgNdIk4SqqlK5KEv3nvHDlCfX7VW2tcViaYBNEoNWCRmKmOFK7e5ZC%2Fsn8otJP4zUf&X-Amz-Signature=cfaa1c7f7dc6f8c45f22310dedd7d9ca3b432869fa8030b3c62213e1c7117f38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657H45T6X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9tTZYCfM9GHQxzXaS%2B5o1GsOz2ACbG13ihiba5%2B4QegIhAKf%2BIzjZgNhKsVBvvXArnHLAyUkJ99a1PsjLEEZouj43KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGA8KuYGlXiCOsfT0q3AP4huZfASP%2F7L%2BHjuMWhhwdeXLlMhD4A6kJ%2B6nplRjWHrVIMC9%2FHqt7no%2BS0Ym%2BNDfDfQ9vhq92YlttRup%2FP5oLt7fQe3VPoT626d7Puo75PobAV2XB3VRH9yEmXxJfazLCQWCR9atIGm%2FPuIwRNEvN6hAt9pZWtCXW8MQSAHPSkRKQCtfqTlzsylGIAkXA7yCy6fzct7is2NoLlNcWVlO9%2FPtM9G7THO28HtsRkyeS5G9Oa2KtKiGAcVj2WZs3VfFerEJ4KtVerJ3WM50V7tZeIBTo%2BT%2FReA32N86wLdtMOp5yGk4Z1zFEynAtKDncQFLnMVutV6FDxkUwGGJ0RloiydjgDDiT2euBUdqIn%2FOBIA49nvpAED5CCyvPPQBq6VTDs2J5kDT7PfnT2mAoIoMX32YSV2E3PDt%2ByBuJ37%2Fs9bqr32UcyysprC8sDp95SdN0BZJSiTVS51k9ITMpCNKddVKqEUD9SFMf1lWos%2FV8ZZscSiHtBExNxCRhswHGsX6G3IwPtTiHG%2BZbYGgOBi3Pd5l22%2FSodjYPHKaz8NygtBk2V20V8%2F3PZxgl34GBkfe3XC1aqFON14227QEJTe9wgFyOR82BxKpyCK7JYHYNDFjtuu2y3R1A6iw3hjCvpvS8BjqkAUZwoKlZSpPOl5qyC72wZwBQflEXf2eTB4ZAtsTxcEvdxXqTADLWzCGKEXGiobJOepoPvdpnDYYrcIv8wHl0XXvbpANu5oi%2FTqUs5LqNvuZYJKaU8HjmFH1rRyB1SZ1b7EF721BXJ98FXfyYOnGhvUcbqnQgNdIk4SqqlK5KEv3nvHDlCfX7VW2tcViaYBNEoNWCRmKmOFK7e5ZC%2Fsn8otJP4zUf&X-Amz-Signature=973f40fbdb939bd1fc9164ecedc0bfd95514fbe6eb4edeb59540ec430d11e80a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657H45T6X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9tTZYCfM9GHQxzXaS%2B5o1GsOz2ACbG13ihiba5%2B4QegIhAKf%2BIzjZgNhKsVBvvXArnHLAyUkJ99a1PsjLEEZouj43KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGA8KuYGlXiCOsfT0q3AP4huZfASP%2F7L%2BHjuMWhhwdeXLlMhD4A6kJ%2B6nplRjWHrVIMC9%2FHqt7no%2BS0Ym%2BNDfDfQ9vhq92YlttRup%2FP5oLt7fQe3VPoT626d7Puo75PobAV2XB3VRH9yEmXxJfazLCQWCR9atIGm%2FPuIwRNEvN6hAt9pZWtCXW8MQSAHPSkRKQCtfqTlzsylGIAkXA7yCy6fzct7is2NoLlNcWVlO9%2FPtM9G7THO28HtsRkyeS5G9Oa2KtKiGAcVj2WZs3VfFerEJ4KtVerJ3WM50V7tZeIBTo%2BT%2FReA32N86wLdtMOp5yGk4Z1zFEynAtKDncQFLnMVutV6FDxkUwGGJ0RloiydjgDDiT2euBUdqIn%2FOBIA49nvpAED5CCyvPPQBq6VTDs2J5kDT7PfnT2mAoIoMX32YSV2E3PDt%2ByBuJ37%2Fs9bqr32UcyysprC8sDp95SdN0BZJSiTVS51k9ITMpCNKddVKqEUD9SFMf1lWos%2FV8ZZscSiHtBExNxCRhswHGsX6G3IwPtTiHG%2BZbYGgOBi3Pd5l22%2FSodjYPHKaz8NygtBk2V20V8%2F3PZxgl34GBkfe3XC1aqFON14227QEJTe9wgFyOR82BxKpyCK7JYHYNDFjtuu2y3R1A6iw3hjCvpvS8BjqkAUZwoKlZSpPOl5qyC72wZwBQflEXf2eTB4ZAtsTxcEvdxXqTADLWzCGKEXGiobJOepoPvdpnDYYrcIv8wHl0XXvbpANu5oi%2FTqUs5LqNvuZYJKaU8HjmFH1rRyB1SZ1b7EF721BXJ98FXfyYOnGhvUcbqnQgNdIk4SqqlK5KEv3nvHDlCfX7VW2tcViaYBNEoNWCRmKmOFK7e5ZC%2Fsn8otJP4zUf&X-Amz-Signature=dfdb313f980c651bed1e8aac3fe08c50f3aba19170c5647df6426d8b40243e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657H45T6X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9tTZYCfM9GHQxzXaS%2B5o1GsOz2ACbG13ihiba5%2B4QegIhAKf%2BIzjZgNhKsVBvvXArnHLAyUkJ99a1PsjLEEZouj43KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGA8KuYGlXiCOsfT0q3AP4huZfASP%2F7L%2BHjuMWhhwdeXLlMhD4A6kJ%2B6nplRjWHrVIMC9%2FHqt7no%2BS0Ym%2BNDfDfQ9vhq92YlttRup%2FP5oLt7fQe3VPoT626d7Puo75PobAV2XB3VRH9yEmXxJfazLCQWCR9atIGm%2FPuIwRNEvN6hAt9pZWtCXW8MQSAHPSkRKQCtfqTlzsylGIAkXA7yCy6fzct7is2NoLlNcWVlO9%2FPtM9G7THO28HtsRkyeS5G9Oa2KtKiGAcVj2WZs3VfFerEJ4KtVerJ3WM50V7tZeIBTo%2BT%2FReA32N86wLdtMOp5yGk4Z1zFEynAtKDncQFLnMVutV6FDxkUwGGJ0RloiydjgDDiT2euBUdqIn%2FOBIA49nvpAED5CCyvPPQBq6VTDs2J5kDT7PfnT2mAoIoMX32YSV2E3PDt%2ByBuJ37%2Fs9bqr32UcyysprC8sDp95SdN0BZJSiTVS51k9ITMpCNKddVKqEUD9SFMf1lWos%2FV8ZZscSiHtBExNxCRhswHGsX6G3IwPtTiHG%2BZbYGgOBi3Pd5l22%2FSodjYPHKaz8NygtBk2V20V8%2F3PZxgl34GBkfe3XC1aqFON14227QEJTe9wgFyOR82BxKpyCK7JYHYNDFjtuu2y3R1A6iw3hjCvpvS8BjqkAUZwoKlZSpPOl5qyC72wZwBQflEXf2eTB4ZAtsTxcEvdxXqTADLWzCGKEXGiobJOepoPvdpnDYYrcIv8wHl0XXvbpANu5oi%2FTqUs5LqNvuZYJKaU8HjmFH1rRyB1SZ1b7EF721BXJ98FXfyYOnGhvUcbqnQgNdIk4SqqlK5KEv3nvHDlCfX7VW2tcViaYBNEoNWCRmKmOFK7e5ZC%2Fsn8otJP4zUf&X-Amz-Signature=bb9dbb7fc15134554a4f19af69892d3c63b7e927a5434d9ef91f12da4d60acc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657H45T6X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9tTZYCfM9GHQxzXaS%2B5o1GsOz2ACbG13ihiba5%2B4QegIhAKf%2BIzjZgNhKsVBvvXArnHLAyUkJ99a1PsjLEEZouj43KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGA8KuYGlXiCOsfT0q3AP4huZfASP%2F7L%2BHjuMWhhwdeXLlMhD4A6kJ%2B6nplRjWHrVIMC9%2FHqt7no%2BS0Ym%2BNDfDfQ9vhq92YlttRup%2FP5oLt7fQe3VPoT626d7Puo75PobAV2XB3VRH9yEmXxJfazLCQWCR9atIGm%2FPuIwRNEvN6hAt9pZWtCXW8MQSAHPSkRKQCtfqTlzsylGIAkXA7yCy6fzct7is2NoLlNcWVlO9%2FPtM9G7THO28HtsRkyeS5G9Oa2KtKiGAcVj2WZs3VfFerEJ4KtVerJ3WM50V7tZeIBTo%2BT%2FReA32N86wLdtMOp5yGk4Z1zFEynAtKDncQFLnMVutV6FDxkUwGGJ0RloiydjgDDiT2euBUdqIn%2FOBIA49nvpAED5CCyvPPQBq6VTDs2J5kDT7PfnT2mAoIoMX32YSV2E3PDt%2ByBuJ37%2Fs9bqr32UcyysprC8sDp95SdN0BZJSiTVS51k9ITMpCNKddVKqEUD9SFMf1lWos%2FV8ZZscSiHtBExNxCRhswHGsX6G3IwPtTiHG%2BZbYGgOBi3Pd5l22%2FSodjYPHKaz8NygtBk2V20V8%2F3PZxgl34GBkfe3XC1aqFON14227QEJTe9wgFyOR82BxKpyCK7JYHYNDFjtuu2y3R1A6iw3hjCvpvS8BjqkAUZwoKlZSpPOl5qyC72wZwBQflEXf2eTB4ZAtsTxcEvdxXqTADLWzCGKEXGiobJOepoPvdpnDYYrcIv8wHl0XXvbpANu5oi%2FTqUs5LqNvuZYJKaU8HjmFH1rRyB1SZ1b7EF721BXJ98FXfyYOnGhvUcbqnQgNdIk4SqqlK5KEv3nvHDlCfX7VW2tcViaYBNEoNWCRmKmOFK7e5ZC%2Fsn8otJP4zUf&X-Amz-Signature=db98f1af6b2f8d860de5a85c14ae44281bcb555a9f9cf568ac2d6024a13595b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
