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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4SAZ2J%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIH2m2YcoOCeu3cwmyuH%2Bv875BMZsaRKc3hCQzsojI2nrAiEAgHCNHZHQDIVgQNj2ys4gxUm7S1xGEUtJyzwa1yrs6i4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw5xXj63sA1LSMxsCrcA7HboHd10IuAcX%2FnKrtW%2FAtT1zUZzzIm%2BBOxPOQZ4sv8KPxt5XHyDxKB6m0XRZtQNxizLDM7LEL0m%2BElnl5Cp7JSxoCx60lToZP%2B%2F7c5nSwfz9SkU7JrIZkVCHdsgNdsAIN6%2FWI6I0pRaC9OVC84BRb%2F3lfnYzoH0oajdV6kebdRDd95%2BIdhuK6q4X4%2Fx66vLyeVnIK3Nlfw3EO4lIlV87oLbUV9VUI1iffTlg%2ByyLQ3rJVs1AGFR8%2FM4X7iaEBcsFbTfZWY1XmN9bvCWdbffE5X7qF2v%2BLpWOpIbXbwjgW0RehsB2dGeD7p%2FPipTuqT5FYw1zw27e4Uak%2FbWnAfRBOuD2bIuBxlAGG2dycBslkRejWOS%2FeCy8PCwRIL1v%2Bo4ZPtUL20N8w9vt8%2Ff0PYYO4TTrW%2Bc9qDi%2FxHsqFevuhUbDHEyyeIlCW1IczXWciHITrBUzmL9N8JuH9oa0qyNutDDvQnV9ARPNi%2FHhC2W2RvjR1hvuwyKfRJuvz1Audq797uT5kFPfs%2FsNXAYPKkMrhOw0j%2BE7jd9DO9MgyDS0Lwra%2FZZCiibkflKRSabpqOHmoP256%2B5lOKPbv%2BRNgqCFQzEzCgkxSr8VWbQPMAIu8i7cwDj2IZ61utVSXGML2KjMEGOqUBhvNcxNed8honQ6AWvDk60PXxj6G99NDMKw25BX%2F2%2BemkqniE4%2BEq0u1E1RajeaHIxVERNooDkKlZfM8No35UorGPudQSR%2Fsv5mKrZg0mktqijMIzLrci1odK%2BElh5up8zcoQo9lPFwUCpIpy0WADQ7gD5pzX0mVJWLGuapb%2Bm9MMaNtf9%2F3VRp8%2Fv3CZqo5H0dTzOYdcwHFK7A8YURMBZp1u69lv&X-Amz-Signature=730d41864c05f0da6f8f4f764a5786939ca9e8935a889823555e92ab616b3b43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4SAZ2J%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIH2m2YcoOCeu3cwmyuH%2Bv875BMZsaRKc3hCQzsojI2nrAiEAgHCNHZHQDIVgQNj2ys4gxUm7S1xGEUtJyzwa1yrs6i4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw5xXj63sA1LSMxsCrcA7HboHd10IuAcX%2FnKrtW%2FAtT1zUZzzIm%2BBOxPOQZ4sv8KPxt5XHyDxKB6m0XRZtQNxizLDM7LEL0m%2BElnl5Cp7JSxoCx60lToZP%2B%2F7c5nSwfz9SkU7JrIZkVCHdsgNdsAIN6%2FWI6I0pRaC9OVC84BRb%2F3lfnYzoH0oajdV6kebdRDd95%2BIdhuK6q4X4%2Fx66vLyeVnIK3Nlfw3EO4lIlV87oLbUV9VUI1iffTlg%2ByyLQ3rJVs1AGFR8%2FM4X7iaEBcsFbTfZWY1XmN9bvCWdbffE5X7qF2v%2BLpWOpIbXbwjgW0RehsB2dGeD7p%2FPipTuqT5FYw1zw27e4Uak%2FbWnAfRBOuD2bIuBxlAGG2dycBslkRejWOS%2FeCy8PCwRIL1v%2Bo4ZPtUL20N8w9vt8%2Ff0PYYO4TTrW%2Bc9qDi%2FxHsqFevuhUbDHEyyeIlCW1IczXWciHITrBUzmL9N8JuH9oa0qyNutDDvQnV9ARPNi%2FHhC2W2RvjR1hvuwyKfRJuvz1Audq797uT5kFPfs%2FsNXAYPKkMrhOw0j%2BE7jd9DO9MgyDS0Lwra%2FZZCiibkflKRSabpqOHmoP256%2B5lOKPbv%2BRNgqCFQzEzCgkxSr8VWbQPMAIu8i7cwDj2IZ61utVSXGML2KjMEGOqUBhvNcxNed8honQ6AWvDk60PXxj6G99NDMKw25BX%2F2%2BemkqniE4%2BEq0u1E1RajeaHIxVERNooDkKlZfM8No35UorGPudQSR%2Fsv5mKrZg0mktqijMIzLrci1odK%2BElh5up8zcoQo9lPFwUCpIpy0WADQ7gD5pzX0mVJWLGuapb%2Bm9MMaNtf9%2F3VRp8%2Fv3CZqo5H0dTzOYdcwHFK7A8YURMBZp1u69lv&X-Amz-Signature=d659c17e3226961a54e50ffb69974f5baea1ee09dc947eff50a57373c38fcb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4SAZ2J%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIH2m2YcoOCeu3cwmyuH%2Bv875BMZsaRKc3hCQzsojI2nrAiEAgHCNHZHQDIVgQNj2ys4gxUm7S1xGEUtJyzwa1yrs6i4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw5xXj63sA1LSMxsCrcA7HboHd10IuAcX%2FnKrtW%2FAtT1zUZzzIm%2BBOxPOQZ4sv8KPxt5XHyDxKB6m0XRZtQNxizLDM7LEL0m%2BElnl5Cp7JSxoCx60lToZP%2B%2F7c5nSwfz9SkU7JrIZkVCHdsgNdsAIN6%2FWI6I0pRaC9OVC84BRb%2F3lfnYzoH0oajdV6kebdRDd95%2BIdhuK6q4X4%2Fx66vLyeVnIK3Nlfw3EO4lIlV87oLbUV9VUI1iffTlg%2ByyLQ3rJVs1AGFR8%2FM4X7iaEBcsFbTfZWY1XmN9bvCWdbffE5X7qF2v%2BLpWOpIbXbwjgW0RehsB2dGeD7p%2FPipTuqT5FYw1zw27e4Uak%2FbWnAfRBOuD2bIuBxlAGG2dycBslkRejWOS%2FeCy8PCwRIL1v%2Bo4ZPtUL20N8w9vt8%2Ff0PYYO4TTrW%2Bc9qDi%2FxHsqFevuhUbDHEyyeIlCW1IczXWciHITrBUzmL9N8JuH9oa0qyNutDDvQnV9ARPNi%2FHhC2W2RvjR1hvuwyKfRJuvz1Audq797uT5kFPfs%2FsNXAYPKkMrhOw0j%2BE7jd9DO9MgyDS0Lwra%2FZZCiibkflKRSabpqOHmoP256%2B5lOKPbv%2BRNgqCFQzEzCgkxSr8VWbQPMAIu8i7cwDj2IZ61utVSXGML2KjMEGOqUBhvNcxNed8honQ6AWvDk60PXxj6G99NDMKw25BX%2F2%2BemkqniE4%2BEq0u1E1RajeaHIxVERNooDkKlZfM8No35UorGPudQSR%2Fsv5mKrZg0mktqijMIzLrci1odK%2BElh5up8zcoQo9lPFwUCpIpy0WADQ7gD5pzX0mVJWLGuapb%2Bm9MMaNtf9%2F3VRp8%2Fv3CZqo5H0dTzOYdcwHFK7A8YURMBZp1u69lv&X-Amz-Signature=ed217bf1ccf13f36f0892679ff2b267e71628bcad7691a3e2234b535d894149d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4SAZ2J%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIH2m2YcoOCeu3cwmyuH%2Bv875BMZsaRKc3hCQzsojI2nrAiEAgHCNHZHQDIVgQNj2ys4gxUm7S1xGEUtJyzwa1yrs6i4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw5xXj63sA1LSMxsCrcA7HboHd10IuAcX%2FnKrtW%2FAtT1zUZzzIm%2BBOxPOQZ4sv8KPxt5XHyDxKB6m0XRZtQNxizLDM7LEL0m%2BElnl5Cp7JSxoCx60lToZP%2B%2F7c5nSwfz9SkU7JrIZkVCHdsgNdsAIN6%2FWI6I0pRaC9OVC84BRb%2F3lfnYzoH0oajdV6kebdRDd95%2BIdhuK6q4X4%2Fx66vLyeVnIK3Nlfw3EO4lIlV87oLbUV9VUI1iffTlg%2ByyLQ3rJVs1AGFR8%2FM4X7iaEBcsFbTfZWY1XmN9bvCWdbffE5X7qF2v%2BLpWOpIbXbwjgW0RehsB2dGeD7p%2FPipTuqT5FYw1zw27e4Uak%2FbWnAfRBOuD2bIuBxlAGG2dycBslkRejWOS%2FeCy8PCwRIL1v%2Bo4ZPtUL20N8w9vt8%2Ff0PYYO4TTrW%2Bc9qDi%2FxHsqFevuhUbDHEyyeIlCW1IczXWciHITrBUzmL9N8JuH9oa0qyNutDDvQnV9ARPNi%2FHhC2W2RvjR1hvuwyKfRJuvz1Audq797uT5kFPfs%2FsNXAYPKkMrhOw0j%2BE7jd9DO9MgyDS0Lwra%2FZZCiibkflKRSabpqOHmoP256%2B5lOKPbv%2BRNgqCFQzEzCgkxSr8VWbQPMAIu8i7cwDj2IZ61utVSXGML2KjMEGOqUBhvNcxNed8honQ6AWvDk60PXxj6G99NDMKw25BX%2F2%2BemkqniE4%2BEq0u1E1RajeaHIxVERNooDkKlZfM8No35UorGPudQSR%2Fsv5mKrZg0mktqijMIzLrci1odK%2BElh5up8zcoQo9lPFwUCpIpy0WADQ7gD5pzX0mVJWLGuapb%2Bm9MMaNtf9%2F3VRp8%2Fv3CZqo5H0dTzOYdcwHFK7A8YURMBZp1u69lv&X-Amz-Signature=cfdc9538de50ecad4d268a1efe8c263f928c49cfc47445e4fd9888625e6fe86c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4SAZ2J%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIH2m2YcoOCeu3cwmyuH%2Bv875BMZsaRKc3hCQzsojI2nrAiEAgHCNHZHQDIVgQNj2ys4gxUm7S1xGEUtJyzwa1yrs6i4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw5xXj63sA1LSMxsCrcA7HboHd10IuAcX%2FnKrtW%2FAtT1zUZzzIm%2BBOxPOQZ4sv8KPxt5XHyDxKB6m0XRZtQNxizLDM7LEL0m%2BElnl5Cp7JSxoCx60lToZP%2B%2F7c5nSwfz9SkU7JrIZkVCHdsgNdsAIN6%2FWI6I0pRaC9OVC84BRb%2F3lfnYzoH0oajdV6kebdRDd95%2BIdhuK6q4X4%2Fx66vLyeVnIK3Nlfw3EO4lIlV87oLbUV9VUI1iffTlg%2ByyLQ3rJVs1AGFR8%2FM4X7iaEBcsFbTfZWY1XmN9bvCWdbffE5X7qF2v%2BLpWOpIbXbwjgW0RehsB2dGeD7p%2FPipTuqT5FYw1zw27e4Uak%2FbWnAfRBOuD2bIuBxlAGG2dycBslkRejWOS%2FeCy8PCwRIL1v%2Bo4ZPtUL20N8w9vt8%2Ff0PYYO4TTrW%2Bc9qDi%2FxHsqFevuhUbDHEyyeIlCW1IczXWciHITrBUzmL9N8JuH9oa0qyNutDDvQnV9ARPNi%2FHhC2W2RvjR1hvuwyKfRJuvz1Audq797uT5kFPfs%2FsNXAYPKkMrhOw0j%2BE7jd9DO9MgyDS0Lwra%2FZZCiibkflKRSabpqOHmoP256%2B5lOKPbv%2BRNgqCFQzEzCgkxSr8VWbQPMAIu8i7cwDj2IZ61utVSXGML2KjMEGOqUBhvNcxNed8honQ6AWvDk60PXxj6G99NDMKw25BX%2F2%2BemkqniE4%2BEq0u1E1RajeaHIxVERNooDkKlZfM8No35UorGPudQSR%2Fsv5mKrZg0mktqijMIzLrci1odK%2BElh5up8zcoQo9lPFwUCpIpy0WADQ7gD5pzX0mVJWLGuapb%2Bm9MMaNtf9%2F3VRp8%2Fv3CZqo5H0dTzOYdcwHFK7A8YURMBZp1u69lv&X-Amz-Signature=8b0c61afcfc9d6df1477b36c925c824c3c8059c569ce19084104c46ef98060fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
