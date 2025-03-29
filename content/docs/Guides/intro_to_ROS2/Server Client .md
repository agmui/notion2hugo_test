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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBTUEAA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD%2BSHj8Pcsp9UDuFD9JqX46kkIfrZD%2FLWMFS3rKSRGKNAIhAKQ0N9HLnUIyMIHObJi0r99QoBS6ThPVeD1T0NXSkE4KKv8DCGgQABoMNjM3NDIzMTgzODA1IgwkvhMqwdNSieoWbJgq3AMMe1q2kUxsaClviIXt%2FpumlUlxz4E%2FaV9iv1bTJYvhUOBFPemiPJ%2Fzh%2FvSLH7TIxezQTQaUEN5dQmweod7cfV9zc3bcabmsQOdWbSCyNuGUkANcDNhTFFo1GU4qsDCxoXAXr0lbJKyIklYdQKwkeaL6exRfraXOxmQpGfjbVm7uNXu00O1zgRDbO8g3HWugxnr4jeTvou%2BRk8qYIUMyAj9F0mnrgowHN%2B7N3dT3MS%2FYGolsP1a2gxonkjrFh6lUOzXod6FTPjWeRZDDxed8bQKA6dhTvdcbugF3hXIo6SBf1xOfnOuoyoTWeh0z0oh9q%2BCzw3BGcwsQ9U%2F8f6rtxGA8eeRlc62CuskJ8%2BY5cRufuBfZcDCPvXwsBn4SCzRiBCwkjJX534T9wA%2FUAN8k2XSlDjFcb3TTaqyCNuAl6Shc42HcSPVzi1zCdptJHYmEcIZtnBS7I3IhQnSeYbQ8G5eW4Yrzi%2FZvn9dVmEnwUBj3c%2FDhCIZ0s5VJF0RC3JsaQ%2BzG9mOP1Tn%2Ftiz%2FO3c0GXraX9nuAJhCaFE2iSllyeqKKIgMqlWt3PJPrmWm8SKHosHicmCmHd%2FRjswbgLH1BGQvRP%2BmkEXQkivf2UIY5rYgGBbwld8j1l5xAxgtjC535y%2FBjqkAZs%2F3sk5QGujNMeBnbakJbrzEIcpPUCrTZVIqtCMroD%2F3Xc01Q5ELp%2Bc%2F2ROnfhJRvHFHpdzeZWfakt%2BV%2FqzUkojheZu%2F5azC%2Fywzkg2hfo%2B7UZMAStt5APbda0a1vj9H0X29UUEl%2FfMPVRLe96bzHRlR31hBiSqK3BzS%2BJatUJ1D6vw%2F8JDgRZoMHCDUr0NCQEhH%2FXQC6EzHUDuWsrx98KGT6zH&X-Amz-Signature=80432671d1f5a6a9c1950b5314ad3430079c5230f3daace10bad0bbf15e1105c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBTUEAA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD%2BSHj8Pcsp9UDuFD9JqX46kkIfrZD%2FLWMFS3rKSRGKNAIhAKQ0N9HLnUIyMIHObJi0r99QoBS6ThPVeD1T0NXSkE4KKv8DCGgQABoMNjM3NDIzMTgzODA1IgwkvhMqwdNSieoWbJgq3AMMe1q2kUxsaClviIXt%2FpumlUlxz4E%2FaV9iv1bTJYvhUOBFPemiPJ%2Fzh%2FvSLH7TIxezQTQaUEN5dQmweod7cfV9zc3bcabmsQOdWbSCyNuGUkANcDNhTFFo1GU4qsDCxoXAXr0lbJKyIklYdQKwkeaL6exRfraXOxmQpGfjbVm7uNXu00O1zgRDbO8g3HWugxnr4jeTvou%2BRk8qYIUMyAj9F0mnrgowHN%2B7N3dT3MS%2FYGolsP1a2gxonkjrFh6lUOzXod6FTPjWeRZDDxed8bQKA6dhTvdcbugF3hXIo6SBf1xOfnOuoyoTWeh0z0oh9q%2BCzw3BGcwsQ9U%2F8f6rtxGA8eeRlc62CuskJ8%2BY5cRufuBfZcDCPvXwsBn4SCzRiBCwkjJX534T9wA%2FUAN8k2XSlDjFcb3TTaqyCNuAl6Shc42HcSPVzi1zCdptJHYmEcIZtnBS7I3IhQnSeYbQ8G5eW4Yrzi%2FZvn9dVmEnwUBj3c%2FDhCIZ0s5VJF0RC3JsaQ%2BzG9mOP1Tn%2Ftiz%2FO3c0GXraX9nuAJhCaFE2iSllyeqKKIgMqlWt3PJPrmWm8SKHosHicmCmHd%2FRjswbgLH1BGQvRP%2BmkEXQkivf2UIY5rYgGBbwld8j1l5xAxgtjC535y%2FBjqkAZs%2F3sk5QGujNMeBnbakJbrzEIcpPUCrTZVIqtCMroD%2F3Xc01Q5ELp%2Bc%2F2ROnfhJRvHFHpdzeZWfakt%2BV%2FqzUkojheZu%2F5azC%2Fywzkg2hfo%2B7UZMAStt5APbda0a1vj9H0X29UUEl%2FfMPVRLe96bzHRlR31hBiSqK3BzS%2BJatUJ1D6vw%2F8JDgRZoMHCDUr0NCQEhH%2FXQC6EzHUDuWsrx98KGT6zH&X-Amz-Signature=2a94c1c00ecd70516ea1c2496288579dca64ff58a15f94bb15db74b246d9c6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBTUEAA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD%2BSHj8Pcsp9UDuFD9JqX46kkIfrZD%2FLWMFS3rKSRGKNAIhAKQ0N9HLnUIyMIHObJi0r99QoBS6ThPVeD1T0NXSkE4KKv8DCGgQABoMNjM3NDIzMTgzODA1IgwkvhMqwdNSieoWbJgq3AMMe1q2kUxsaClviIXt%2FpumlUlxz4E%2FaV9iv1bTJYvhUOBFPemiPJ%2Fzh%2FvSLH7TIxezQTQaUEN5dQmweod7cfV9zc3bcabmsQOdWbSCyNuGUkANcDNhTFFo1GU4qsDCxoXAXr0lbJKyIklYdQKwkeaL6exRfraXOxmQpGfjbVm7uNXu00O1zgRDbO8g3HWugxnr4jeTvou%2BRk8qYIUMyAj9F0mnrgowHN%2B7N3dT3MS%2FYGolsP1a2gxonkjrFh6lUOzXod6FTPjWeRZDDxed8bQKA6dhTvdcbugF3hXIo6SBf1xOfnOuoyoTWeh0z0oh9q%2BCzw3BGcwsQ9U%2F8f6rtxGA8eeRlc62CuskJ8%2BY5cRufuBfZcDCPvXwsBn4SCzRiBCwkjJX534T9wA%2FUAN8k2XSlDjFcb3TTaqyCNuAl6Shc42HcSPVzi1zCdptJHYmEcIZtnBS7I3IhQnSeYbQ8G5eW4Yrzi%2FZvn9dVmEnwUBj3c%2FDhCIZ0s5VJF0RC3JsaQ%2BzG9mOP1Tn%2Ftiz%2FO3c0GXraX9nuAJhCaFE2iSllyeqKKIgMqlWt3PJPrmWm8SKHosHicmCmHd%2FRjswbgLH1BGQvRP%2BmkEXQkivf2UIY5rYgGBbwld8j1l5xAxgtjC535y%2FBjqkAZs%2F3sk5QGujNMeBnbakJbrzEIcpPUCrTZVIqtCMroD%2F3Xc01Q5ELp%2Bc%2F2ROnfhJRvHFHpdzeZWfakt%2BV%2FqzUkojheZu%2F5azC%2Fywzkg2hfo%2B7UZMAStt5APbda0a1vj9H0X29UUEl%2FfMPVRLe96bzHRlR31hBiSqK3BzS%2BJatUJ1D6vw%2F8JDgRZoMHCDUr0NCQEhH%2FXQC6EzHUDuWsrx98KGT6zH&X-Amz-Signature=bc4fdb14432de43b689751993eb761849760e9400f6908ec511506319231c083&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBTUEAA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD%2BSHj8Pcsp9UDuFD9JqX46kkIfrZD%2FLWMFS3rKSRGKNAIhAKQ0N9HLnUIyMIHObJi0r99QoBS6ThPVeD1T0NXSkE4KKv8DCGgQABoMNjM3NDIzMTgzODA1IgwkvhMqwdNSieoWbJgq3AMMe1q2kUxsaClviIXt%2FpumlUlxz4E%2FaV9iv1bTJYvhUOBFPemiPJ%2Fzh%2FvSLH7TIxezQTQaUEN5dQmweod7cfV9zc3bcabmsQOdWbSCyNuGUkANcDNhTFFo1GU4qsDCxoXAXr0lbJKyIklYdQKwkeaL6exRfraXOxmQpGfjbVm7uNXu00O1zgRDbO8g3HWugxnr4jeTvou%2BRk8qYIUMyAj9F0mnrgowHN%2B7N3dT3MS%2FYGolsP1a2gxonkjrFh6lUOzXod6FTPjWeRZDDxed8bQKA6dhTvdcbugF3hXIo6SBf1xOfnOuoyoTWeh0z0oh9q%2BCzw3BGcwsQ9U%2F8f6rtxGA8eeRlc62CuskJ8%2BY5cRufuBfZcDCPvXwsBn4SCzRiBCwkjJX534T9wA%2FUAN8k2XSlDjFcb3TTaqyCNuAl6Shc42HcSPVzi1zCdptJHYmEcIZtnBS7I3IhQnSeYbQ8G5eW4Yrzi%2FZvn9dVmEnwUBj3c%2FDhCIZ0s5VJF0RC3JsaQ%2BzG9mOP1Tn%2Ftiz%2FO3c0GXraX9nuAJhCaFE2iSllyeqKKIgMqlWt3PJPrmWm8SKHosHicmCmHd%2FRjswbgLH1BGQvRP%2BmkEXQkivf2UIY5rYgGBbwld8j1l5xAxgtjC535y%2FBjqkAZs%2F3sk5QGujNMeBnbakJbrzEIcpPUCrTZVIqtCMroD%2F3Xc01Q5ELp%2Bc%2F2ROnfhJRvHFHpdzeZWfakt%2BV%2FqzUkojheZu%2F5azC%2Fywzkg2hfo%2B7UZMAStt5APbda0a1vj9H0X29UUEl%2FfMPVRLe96bzHRlR31hBiSqK3BzS%2BJatUJ1D6vw%2F8JDgRZoMHCDUr0NCQEhH%2FXQC6EzHUDuWsrx98KGT6zH&X-Amz-Signature=01e006c6988d22589714357ee9c7fdb24b6d3f96e1acf77c13976a1d1a6e5f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBTUEAA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD%2BSHj8Pcsp9UDuFD9JqX46kkIfrZD%2FLWMFS3rKSRGKNAIhAKQ0N9HLnUIyMIHObJi0r99QoBS6ThPVeD1T0NXSkE4KKv8DCGgQABoMNjM3NDIzMTgzODA1IgwkvhMqwdNSieoWbJgq3AMMe1q2kUxsaClviIXt%2FpumlUlxz4E%2FaV9iv1bTJYvhUOBFPemiPJ%2Fzh%2FvSLH7TIxezQTQaUEN5dQmweod7cfV9zc3bcabmsQOdWbSCyNuGUkANcDNhTFFo1GU4qsDCxoXAXr0lbJKyIklYdQKwkeaL6exRfraXOxmQpGfjbVm7uNXu00O1zgRDbO8g3HWugxnr4jeTvou%2BRk8qYIUMyAj9F0mnrgowHN%2B7N3dT3MS%2FYGolsP1a2gxonkjrFh6lUOzXod6FTPjWeRZDDxed8bQKA6dhTvdcbugF3hXIo6SBf1xOfnOuoyoTWeh0z0oh9q%2BCzw3BGcwsQ9U%2F8f6rtxGA8eeRlc62CuskJ8%2BY5cRufuBfZcDCPvXwsBn4SCzRiBCwkjJX534T9wA%2FUAN8k2XSlDjFcb3TTaqyCNuAl6Shc42HcSPVzi1zCdptJHYmEcIZtnBS7I3IhQnSeYbQ8G5eW4Yrzi%2FZvn9dVmEnwUBj3c%2FDhCIZ0s5VJF0RC3JsaQ%2BzG9mOP1Tn%2Ftiz%2FO3c0GXraX9nuAJhCaFE2iSllyeqKKIgMqlWt3PJPrmWm8SKHosHicmCmHd%2FRjswbgLH1BGQvRP%2BmkEXQkivf2UIY5rYgGBbwld8j1l5xAxgtjC535y%2FBjqkAZs%2F3sk5QGujNMeBnbakJbrzEIcpPUCrTZVIqtCMroD%2F3Xc01Q5ELp%2Bc%2F2ROnfhJRvHFHpdzeZWfakt%2BV%2FqzUkojheZu%2F5azC%2Fywzkg2hfo%2B7UZMAStt5APbda0a1vj9H0X29UUEl%2FfMPVRLe96bzHRlR31hBiSqK3BzS%2BJatUJ1D6vw%2F8JDgRZoMHCDUr0NCQEhH%2FXQC6EzHUDuWsrx98KGT6zH&X-Amz-Signature=9954d9ad8588b818b64da7f9ea69a69cb987d5be3b94b8d87193763fae399b34&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
