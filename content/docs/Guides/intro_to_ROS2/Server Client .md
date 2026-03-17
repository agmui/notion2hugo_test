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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4BYLYW%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGQuVmoGGWcyKa9hC4dk4xFVyAO0OJRb8aevZ9Fjv9xgAiEA52NU2v%2FGPD%2BRkxVQ80pOkwLhl2huALTIPy9bp5c%2BldwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDuZFcp8CLMX2VH3yrcA3q4DrF6uix7yO%2FBFJBNhwejpOPjxgi5E5K%2Fv9gq0%2FfSU4g42euD0LnoXaT0jdb8%2FeQgcPLJy%2FKm3aeEnvB2DrGUlXr0GuZzpPjsLafIhso8IhW3A%2Fah3gvsNN%2BxdFe7Y8%2BoND5%2BdMANFuDk1zlCn%2BrMCd9snfZXV%2FFBj%2FpdfxN4veygy9va3c%2BmX%2Fouj2zrVX9WlzEVUbq2cntl8xnpFIRIb2ibEI78voRJA6AdZL7NCRG4eorPwtskGcSKK9WWq%2BHYUr7XSo5h9%2FHtB%2BBSC5IKV3Lg0Pj7pi4Yn9D%2B8F84XXKVqdeUFdBiAavdx0LfzPrHrKCOobtpMTho%2FLc%2FM0w9LH7Fo1bXRa%2FjHgtqsXaOpXQqKyJeD8xKzJRqAkwzuFSbfW1ByawTC2ras4MI06%2Big9pvhvMooL%2BBb5w1lXDi75IxR9cMRXMjmDZN8i6vNxvScTSHW%2F%2BiesRuPEHzGZ9WzGTa4jzi%2Bp6VzpY%2FCkcBT3tFNGQBNccqMCZAi3dVQiwWmApxdWSk8fE85ZCsI19z3P07aiKohf6PulnIw2PWoY07DTAGZ6t7dos4V99W%2F0MaP0PpC0f676Y4MyAoISbs5L4kiA%2Bw0QL9W%2FN7VeVAKriWWU1TL3C%2FwY0CMKnn4s0GOqUBkDRSOW%2Bkq02UZQnKemRD8HWGfMGckJGNZ7EiIO2CynoB856he1UR5MLjkF9F0iaPuupJhAO%2BuOEFWiSKN0dpP1yi13YbYYG9HCsIwXaAt1mpAHWkH9ro9T7VpNQH0Cte8ERMDWc5qQi9lV6gibkP8Rr1OaoFAO8l0YY1ZheYjSi0V5OjDp0m85Awj1WrQSKEkmGshVXqi8w%2B5Io4IFGwqEwe4gep&X-Amz-Signature=1abdcd9dc9bd31c907cc0b5049984254cc3188445c8c6517d00036cb4e74d08b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4BYLYW%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGQuVmoGGWcyKa9hC4dk4xFVyAO0OJRb8aevZ9Fjv9xgAiEA52NU2v%2FGPD%2BRkxVQ80pOkwLhl2huALTIPy9bp5c%2BldwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDuZFcp8CLMX2VH3yrcA3q4DrF6uix7yO%2FBFJBNhwejpOPjxgi5E5K%2Fv9gq0%2FfSU4g42euD0LnoXaT0jdb8%2FeQgcPLJy%2FKm3aeEnvB2DrGUlXr0GuZzpPjsLafIhso8IhW3A%2Fah3gvsNN%2BxdFe7Y8%2BoND5%2BdMANFuDk1zlCn%2BrMCd9snfZXV%2FFBj%2FpdfxN4veygy9va3c%2BmX%2Fouj2zrVX9WlzEVUbq2cntl8xnpFIRIb2ibEI78voRJA6AdZL7NCRG4eorPwtskGcSKK9WWq%2BHYUr7XSo5h9%2FHtB%2BBSC5IKV3Lg0Pj7pi4Yn9D%2B8F84XXKVqdeUFdBiAavdx0LfzPrHrKCOobtpMTho%2FLc%2FM0w9LH7Fo1bXRa%2FjHgtqsXaOpXQqKyJeD8xKzJRqAkwzuFSbfW1ByawTC2ras4MI06%2Big9pvhvMooL%2BBb5w1lXDi75IxR9cMRXMjmDZN8i6vNxvScTSHW%2F%2BiesRuPEHzGZ9WzGTa4jzi%2Bp6VzpY%2FCkcBT3tFNGQBNccqMCZAi3dVQiwWmApxdWSk8fE85ZCsI19z3P07aiKohf6PulnIw2PWoY07DTAGZ6t7dos4V99W%2F0MaP0PpC0f676Y4MyAoISbs5L4kiA%2Bw0QL9W%2FN7VeVAKriWWU1TL3C%2FwY0CMKnn4s0GOqUBkDRSOW%2Bkq02UZQnKemRD8HWGfMGckJGNZ7EiIO2CynoB856he1UR5MLjkF9F0iaPuupJhAO%2BuOEFWiSKN0dpP1yi13YbYYG9HCsIwXaAt1mpAHWkH9ro9T7VpNQH0Cte8ERMDWc5qQi9lV6gibkP8Rr1OaoFAO8l0YY1ZheYjSi0V5OjDp0m85Awj1WrQSKEkmGshVXqi8w%2B5Io4IFGwqEwe4gep&X-Amz-Signature=26643922af0cfd2546210c1b7eba9d58210fe8a37a7b8faa93f29935e79f4ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4BYLYW%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGQuVmoGGWcyKa9hC4dk4xFVyAO0OJRb8aevZ9Fjv9xgAiEA52NU2v%2FGPD%2BRkxVQ80pOkwLhl2huALTIPy9bp5c%2BldwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDuZFcp8CLMX2VH3yrcA3q4DrF6uix7yO%2FBFJBNhwejpOPjxgi5E5K%2Fv9gq0%2FfSU4g42euD0LnoXaT0jdb8%2FeQgcPLJy%2FKm3aeEnvB2DrGUlXr0GuZzpPjsLafIhso8IhW3A%2Fah3gvsNN%2BxdFe7Y8%2BoND5%2BdMANFuDk1zlCn%2BrMCd9snfZXV%2FFBj%2FpdfxN4veygy9va3c%2BmX%2Fouj2zrVX9WlzEVUbq2cntl8xnpFIRIb2ibEI78voRJA6AdZL7NCRG4eorPwtskGcSKK9WWq%2BHYUr7XSo5h9%2FHtB%2BBSC5IKV3Lg0Pj7pi4Yn9D%2B8F84XXKVqdeUFdBiAavdx0LfzPrHrKCOobtpMTho%2FLc%2FM0w9LH7Fo1bXRa%2FjHgtqsXaOpXQqKyJeD8xKzJRqAkwzuFSbfW1ByawTC2ras4MI06%2Big9pvhvMooL%2BBb5w1lXDi75IxR9cMRXMjmDZN8i6vNxvScTSHW%2F%2BiesRuPEHzGZ9WzGTa4jzi%2Bp6VzpY%2FCkcBT3tFNGQBNccqMCZAi3dVQiwWmApxdWSk8fE85ZCsI19z3P07aiKohf6PulnIw2PWoY07DTAGZ6t7dos4V99W%2F0MaP0PpC0f676Y4MyAoISbs5L4kiA%2Bw0QL9W%2FN7VeVAKriWWU1TL3C%2FwY0CMKnn4s0GOqUBkDRSOW%2Bkq02UZQnKemRD8HWGfMGckJGNZ7EiIO2CynoB856he1UR5MLjkF9F0iaPuupJhAO%2BuOEFWiSKN0dpP1yi13YbYYG9HCsIwXaAt1mpAHWkH9ro9T7VpNQH0Cte8ERMDWc5qQi9lV6gibkP8Rr1OaoFAO8l0YY1ZheYjSi0V5OjDp0m85Awj1WrQSKEkmGshVXqi8w%2B5Io4IFGwqEwe4gep&X-Amz-Signature=c8830a85e2c00b8dc23b15a0cbc9a52d9f8908d8d0f043a532228d1912b9abe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4BYLYW%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGQuVmoGGWcyKa9hC4dk4xFVyAO0OJRb8aevZ9Fjv9xgAiEA52NU2v%2FGPD%2BRkxVQ80pOkwLhl2huALTIPy9bp5c%2BldwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDuZFcp8CLMX2VH3yrcA3q4DrF6uix7yO%2FBFJBNhwejpOPjxgi5E5K%2Fv9gq0%2FfSU4g42euD0LnoXaT0jdb8%2FeQgcPLJy%2FKm3aeEnvB2DrGUlXr0GuZzpPjsLafIhso8IhW3A%2Fah3gvsNN%2BxdFe7Y8%2BoND5%2BdMANFuDk1zlCn%2BrMCd9snfZXV%2FFBj%2FpdfxN4veygy9va3c%2BmX%2Fouj2zrVX9WlzEVUbq2cntl8xnpFIRIb2ibEI78voRJA6AdZL7NCRG4eorPwtskGcSKK9WWq%2BHYUr7XSo5h9%2FHtB%2BBSC5IKV3Lg0Pj7pi4Yn9D%2B8F84XXKVqdeUFdBiAavdx0LfzPrHrKCOobtpMTho%2FLc%2FM0w9LH7Fo1bXRa%2FjHgtqsXaOpXQqKyJeD8xKzJRqAkwzuFSbfW1ByawTC2ras4MI06%2Big9pvhvMooL%2BBb5w1lXDi75IxR9cMRXMjmDZN8i6vNxvScTSHW%2F%2BiesRuPEHzGZ9WzGTa4jzi%2Bp6VzpY%2FCkcBT3tFNGQBNccqMCZAi3dVQiwWmApxdWSk8fE85ZCsI19z3P07aiKohf6PulnIw2PWoY07DTAGZ6t7dos4V99W%2F0MaP0PpC0f676Y4MyAoISbs5L4kiA%2Bw0QL9W%2FN7VeVAKriWWU1TL3C%2FwY0CMKnn4s0GOqUBkDRSOW%2Bkq02UZQnKemRD8HWGfMGckJGNZ7EiIO2CynoB856he1UR5MLjkF9F0iaPuupJhAO%2BuOEFWiSKN0dpP1yi13YbYYG9HCsIwXaAt1mpAHWkH9ro9T7VpNQH0Cte8ERMDWc5qQi9lV6gibkP8Rr1OaoFAO8l0YY1ZheYjSi0V5OjDp0m85Awj1WrQSKEkmGshVXqi8w%2B5Io4IFGwqEwe4gep&X-Amz-Signature=39ac330ab7ab79427a5eea6829340757c03cb1c7c7f48e3e9351e331e9cb1784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4BYLYW%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGQuVmoGGWcyKa9hC4dk4xFVyAO0OJRb8aevZ9Fjv9xgAiEA52NU2v%2FGPD%2BRkxVQ80pOkwLhl2huALTIPy9bp5c%2BldwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDuZFcp8CLMX2VH3yrcA3q4DrF6uix7yO%2FBFJBNhwejpOPjxgi5E5K%2Fv9gq0%2FfSU4g42euD0LnoXaT0jdb8%2FeQgcPLJy%2FKm3aeEnvB2DrGUlXr0GuZzpPjsLafIhso8IhW3A%2Fah3gvsNN%2BxdFe7Y8%2BoND5%2BdMANFuDk1zlCn%2BrMCd9snfZXV%2FFBj%2FpdfxN4veygy9va3c%2BmX%2Fouj2zrVX9WlzEVUbq2cntl8xnpFIRIb2ibEI78voRJA6AdZL7NCRG4eorPwtskGcSKK9WWq%2BHYUr7XSo5h9%2FHtB%2BBSC5IKV3Lg0Pj7pi4Yn9D%2B8F84XXKVqdeUFdBiAavdx0LfzPrHrKCOobtpMTho%2FLc%2FM0w9LH7Fo1bXRa%2FjHgtqsXaOpXQqKyJeD8xKzJRqAkwzuFSbfW1ByawTC2ras4MI06%2Big9pvhvMooL%2BBb5w1lXDi75IxR9cMRXMjmDZN8i6vNxvScTSHW%2F%2BiesRuPEHzGZ9WzGTa4jzi%2Bp6VzpY%2FCkcBT3tFNGQBNccqMCZAi3dVQiwWmApxdWSk8fE85ZCsI19z3P07aiKohf6PulnIw2PWoY07DTAGZ6t7dos4V99W%2F0MaP0PpC0f676Y4MyAoISbs5L4kiA%2Bw0QL9W%2FN7VeVAKriWWU1TL3C%2FwY0CMKnn4s0GOqUBkDRSOW%2Bkq02UZQnKemRD8HWGfMGckJGNZ7EiIO2CynoB856he1UR5MLjkF9F0iaPuupJhAO%2BuOEFWiSKN0dpP1yi13YbYYG9HCsIwXaAt1mpAHWkH9ro9T7VpNQH0Cte8ERMDWc5qQi9lV6gibkP8Rr1OaoFAO8l0YY1ZheYjSi0V5OjDp0m85Awj1WrQSKEkmGshVXqi8w%2B5Io4IFGwqEwe4gep&X-Amz-Signature=ec152d01b62cf4435f78fc98a019075ea7d03669cf710171079e517cea4e00b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
