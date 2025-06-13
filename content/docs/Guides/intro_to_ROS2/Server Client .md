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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXDXOLPB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIArlfUGbiuqjo8yIglGdaG3lu73qxMlzOlv40THTDbz7AiEAlNcSQIDfslqH0S2gfeRF0bMMx0vA2xP5KY%2BSePkueM4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXKOnlvYXxVNN2nUSrcA8eY90%2F1bZ1KUKzMljMDa20MD2WREwSmN2qzLaaTJ5HRZ3WFirBpRW%2BxQFtCgO2Lp4j%2BS%2FqoQMhT5i0hXSdemyaYTkAY0IGaKm6J9pPDB18NHPKYyqhKMAF64LQS%2B12veZ50LIfd61dc1AYFghP2%2FvArtWUwYPc1RW5saysR%2B0dOFgoAGdqVA9%2FGgGtQo3kknoiZXLaKamL%2FAqBhEMu%2Bd3NDNqFuwPcJ%2BESX3wz%2BGfv5hC128hpuBOrBtQA0kbbc%2BITmddjN%2BH3nToqsK6zTfL02fcquZ5IufKtc%2BkWw8CcL5mfr9AEGMRQ%2FhrfPhKhU9m25kNXrYLOsP7skVmN6IS7V9UMMC9rBGmu3kORdWCn9SrhfLzezsG6K41Qwf1iCm5Kz%2Ft4tSiSykbCWv3K9AfyYu%2BFIcGhpwDMJ2F%2BOaxd6bA2zuIdOZeGVH%2F3whVuQNES04PAzeFTcxLKBp3EGbFZPd3qnZBss%2BHkiNySGZn%2BSueIFMnrWEMb9ieyCOvmcrw0NTvbIh0IQh4WVqZrHKVDnpwItBLNwyIqH7YPacuoIRuA9qVXpX0IZyrxskfOvBqQpiYXBF3d%2F0%2Bxh%2BKbHFhFVVpE%2BmwLD28HvfzEp7chGhPY9A%2FrQmSw8tSeVMKHWrsIGOqUBN3UCv8G%2BGs5QsSpsXugZMy8JEixv0gwpm7J%2BXcXK7EYYjA72VTUy4uv8XD7LKrpfq7Uu5L2tGvZr0fMECisSmjDsqMA4jPh4kPe98xU0r%2BWFZnl1JDNBm6GxdeKTzktay8Tun0TgK1LuyNKAG99Yj%2BRXdq9uy0WMzO7TolMlgGsVLZFrehSWtwH%2F5m1PvUpGRigcxnRT4zn6SEwXtYImRVysHsBw&X-Amz-Signature=07294a576992abccbccb1f319e64b96ee13a3d5eb797c8bc8e1619a4504dc807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXDXOLPB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIArlfUGbiuqjo8yIglGdaG3lu73qxMlzOlv40THTDbz7AiEAlNcSQIDfslqH0S2gfeRF0bMMx0vA2xP5KY%2BSePkueM4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXKOnlvYXxVNN2nUSrcA8eY90%2F1bZ1KUKzMljMDa20MD2WREwSmN2qzLaaTJ5HRZ3WFirBpRW%2BxQFtCgO2Lp4j%2BS%2FqoQMhT5i0hXSdemyaYTkAY0IGaKm6J9pPDB18NHPKYyqhKMAF64LQS%2B12veZ50LIfd61dc1AYFghP2%2FvArtWUwYPc1RW5saysR%2B0dOFgoAGdqVA9%2FGgGtQo3kknoiZXLaKamL%2FAqBhEMu%2Bd3NDNqFuwPcJ%2BESX3wz%2BGfv5hC128hpuBOrBtQA0kbbc%2BITmddjN%2BH3nToqsK6zTfL02fcquZ5IufKtc%2BkWw8CcL5mfr9AEGMRQ%2FhrfPhKhU9m25kNXrYLOsP7skVmN6IS7V9UMMC9rBGmu3kORdWCn9SrhfLzezsG6K41Qwf1iCm5Kz%2Ft4tSiSykbCWv3K9AfyYu%2BFIcGhpwDMJ2F%2BOaxd6bA2zuIdOZeGVH%2F3whVuQNES04PAzeFTcxLKBp3EGbFZPd3qnZBss%2BHkiNySGZn%2BSueIFMnrWEMb9ieyCOvmcrw0NTvbIh0IQh4WVqZrHKVDnpwItBLNwyIqH7YPacuoIRuA9qVXpX0IZyrxskfOvBqQpiYXBF3d%2F0%2Bxh%2BKbHFhFVVpE%2BmwLD28HvfzEp7chGhPY9A%2FrQmSw8tSeVMKHWrsIGOqUBN3UCv8G%2BGs5QsSpsXugZMy8JEixv0gwpm7J%2BXcXK7EYYjA72VTUy4uv8XD7LKrpfq7Uu5L2tGvZr0fMECisSmjDsqMA4jPh4kPe98xU0r%2BWFZnl1JDNBm6GxdeKTzktay8Tun0TgK1LuyNKAG99Yj%2BRXdq9uy0WMzO7TolMlgGsVLZFrehSWtwH%2F5m1PvUpGRigcxnRT4zn6SEwXtYImRVysHsBw&X-Amz-Signature=1beac26852c944d3d54c91531f7166e12096651d911c9b17c24562c7b6134dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXDXOLPB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIArlfUGbiuqjo8yIglGdaG3lu73qxMlzOlv40THTDbz7AiEAlNcSQIDfslqH0S2gfeRF0bMMx0vA2xP5KY%2BSePkueM4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXKOnlvYXxVNN2nUSrcA8eY90%2F1bZ1KUKzMljMDa20MD2WREwSmN2qzLaaTJ5HRZ3WFirBpRW%2BxQFtCgO2Lp4j%2BS%2FqoQMhT5i0hXSdemyaYTkAY0IGaKm6J9pPDB18NHPKYyqhKMAF64LQS%2B12veZ50LIfd61dc1AYFghP2%2FvArtWUwYPc1RW5saysR%2B0dOFgoAGdqVA9%2FGgGtQo3kknoiZXLaKamL%2FAqBhEMu%2Bd3NDNqFuwPcJ%2BESX3wz%2BGfv5hC128hpuBOrBtQA0kbbc%2BITmddjN%2BH3nToqsK6zTfL02fcquZ5IufKtc%2BkWw8CcL5mfr9AEGMRQ%2FhrfPhKhU9m25kNXrYLOsP7skVmN6IS7V9UMMC9rBGmu3kORdWCn9SrhfLzezsG6K41Qwf1iCm5Kz%2Ft4tSiSykbCWv3K9AfyYu%2BFIcGhpwDMJ2F%2BOaxd6bA2zuIdOZeGVH%2F3whVuQNES04PAzeFTcxLKBp3EGbFZPd3qnZBss%2BHkiNySGZn%2BSueIFMnrWEMb9ieyCOvmcrw0NTvbIh0IQh4WVqZrHKVDnpwItBLNwyIqH7YPacuoIRuA9qVXpX0IZyrxskfOvBqQpiYXBF3d%2F0%2Bxh%2BKbHFhFVVpE%2BmwLD28HvfzEp7chGhPY9A%2FrQmSw8tSeVMKHWrsIGOqUBN3UCv8G%2BGs5QsSpsXugZMy8JEixv0gwpm7J%2BXcXK7EYYjA72VTUy4uv8XD7LKrpfq7Uu5L2tGvZr0fMECisSmjDsqMA4jPh4kPe98xU0r%2BWFZnl1JDNBm6GxdeKTzktay8Tun0TgK1LuyNKAG99Yj%2BRXdq9uy0WMzO7TolMlgGsVLZFrehSWtwH%2F5m1PvUpGRigcxnRT4zn6SEwXtYImRVysHsBw&X-Amz-Signature=5a37740e1514a6fd359fa997ce537758b325bb24cd4fa10085818a4bc0db0bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXDXOLPB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIArlfUGbiuqjo8yIglGdaG3lu73qxMlzOlv40THTDbz7AiEAlNcSQIDfslqH0S2gfeRF0bMMx0vA2xP5KY%2BSePkueM4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXKOnlvYXxVNN2nUSrcA8eY90%2F1bZ1KUKzMljMDa20MD2WREwSmN2qzLaaTJ5HRZ3WFirBpRW%2BxQFtCgO2Lp4j%2BS%2FqoQMhT5i0hXSdemyaYTkAY0IGaKm6J9pPDB18NHPKYyqhKMAF64LQS%2B12veZ50LIfd61dc1AYFghP2%2FvArtWUwYPc1RW5saysR%2B0dOFgoAGdqVA9%2FGgGtQo3kknoiZXLaKamL%2FAqBhEMu%2Bd3NDNqFuwPcJ%2BESX3wz%2BGfv5hC128hpuBOrBtQA0kbbc%2BITmddjN%2BH3nToqsK6zTfL02fcquZ5IufKtc%2BkWw8CcL5mfr9AEGMRQ%2FhrfPhKhU9m25kNXrYLOsP7skVmN6IS7V9UMMC9rBGmu3kORdWCn9SrhfLzezsG6K41Qwf1iCm5Kz%2Ft4tSiSykbCWv3K9AfyYu%2BFIcGhpwDMJ2F%2BOaxd6bA2zuIdOZeGVH%2F3whVuQNES04PAzeFTcxLKBp3EGbFZPd3qnZBss%2BHkiNySGZn%2BSueIFMnrWEMb9ieyCOvmcrw0NTvbIh0IQh4WVqZrHKVDnpwItBLNwyIqH7YPacuoIRuA9qVXpX0IZyrxskfOvBqQpiYXBF3d%2F0%2Bxh%2BKbHFhFVVpE%2BmwLD28HvfzEp7chGhPY9A%2FrQmSw8tSeVMKHWrsIGOqUBN3UCv8G%2BGs5QsSpsXugZMy8JEixv0gwpm7J%2BXcXK7EYYjA72VTUy4uv8XD7LKrpfq7Uu5L2tGvZr0fMECisSmjDsqMA4jPh4kPe98xU0r%2BWFZnl1JDNBm6GxdeKTzktay8Tun0TgK1LuyNKAG99Yj%2BRXdq9uy0WMzO7TolMlgGsVLZFrehSWtwH%2F5m1PvUpGRigcxnRT4zn6SEwXtYImRVysHsBw&X-Amz-Signature=24545de80e7873bc4146f4a0d93bdd46ca5ceb6420bc79c5d8f1c4c5993e4140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXDXOLPB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIArlfUGbiuqjo8yIglGdaG3lu73qxMlzOlv40THTDbz7AiEAlNcSQIDfslqH0S2gfeRF0bMMx0vA2xP5KY%2BSePkueM4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXKOnlvYXxVNN2nUSrcA8eY90%2F1bZ1KUKzMljMDa20MD2WREwSmN2qzLaaTJ5HRZ3WFirBpRW%2BxQFtCgO2Lp4j%2BS%2FqoQMhT5i0hXSdemyaYTkAY0IGaKm6J9pPDB18NHPKYyqhKMAF64LQS%2B12veZ50LIfd61dc1AYFghP2%2FvArtWUwYPc1RW5saysR%2B0dOFgoAGdqVA9%2FGgGtQo3kknoiZXLaKamL%2FAqBhEMu%2Bd3NDNqFuwPcJ%2BESX3wz%2BGfv5hC128hpuBOrBtQA0kbbc%2BITmddjN%2BH3nToqsK6zTfL02fcquZ5IufKtc%2BkWw8CcL5mfr9AEGMRQ%2FhrfPhKhU9m25kNXrYLOsP7skVmN6IS7V9UMMC9rBGmu3kORdWCn9SrhfLzezsG6K41Qwf1iCm5Kz%2Ft4tSiSykbCWv3K9AfyYu%2BFIcGhpwDMJ2F%2BOaxd6bA2zuIdOZeGVH%2F3whVuQNES04PAzeFTcxLKBp3EGbFZPd3qnZBss%2BHkiNySGZn%2BSueIFMnrWEMb9ieyCOvmcrw0NTvbIh0IQh4WVqZrHKVDnpwItBLNwyIqH7YPacuoIRuA9qVXpX0IZyrxskfOvBqQpiYXBF3d%2F0%2Bxh%2BKbHFhFVVpE%2BmwLD28HvfzEp7chGhPY9A%2FrQmSw8tSeVMKHWrsIGOqUBN3UCv8G%2BGs5QsSpsXugZMy8JEixv0gwpm7J%2BXcXK7EYYjA72VTUy4uv8XD7LKrpfq7Uu5L2tGvZr0fMECisSmjDsqMA4jPh4kPe98xU0r%2BWFZnl1JDNBm6GxdeKTzktay8Tun0TgK1LuyNKAG99Yj%2BRXdq9uy0WMzO7TolMlgGsVLZFrehSWtwH%2F5m1PvUpGRigcxnRT4zn6SEwXtYImRVysHsBw&X-Amz-Signature=980e9bcff6db1ccf6d2980e8d988f091cc6826cf20524180654fc70714dd8811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
