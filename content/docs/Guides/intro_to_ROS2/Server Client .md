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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGBQEIU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAhHTjGUkeS0LtbCujIqy8ZRD6RAL8R7eIZoMT9B7lT5AiEAsX987VTdEtj5NEPUmKhFSlvORDDqm%2FanY3SKzCgdbaYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcTHswdhEK6N3rQ7ircA%2B%2FDjprtR6pyNs5WCx1LN8qwlPMNfI0Vib4NFvq3f7tE2RLYn7%2BdXrQwsvXoKeOZD4seIu0ogwkSf7QAvt6o9lHdZDvmfp%2BxnBjg%2F%2F824lgEDcmjVWZADbaTm8YIGoqU9PaI2lyXqVLu%2FARNwOrTXDHL4SaNu0%2FPgrAEoJypGcASx0DwNVIayx%2F7l7jd8nZ%2BijdxuW1P7%2BmOA2z5VK0KZnE3b48b5YA2UHCUVgRKb8PHZgOwyBSjfgiQS4%2FXWe2Wn86yeSN30q8Kj8VI6FwXW14P%2B8EMYu4b1gJiDETvNnrHdY7FXRPAiAY6fiU3X0SIC2XSCr7GAhb4EvyCMvhY0%2BWAzh5zxm2mtowBe49AkSyzrMq9eqzQu60J1KUQxnc5ZAWCcBP86ieIdXtf08u7LJXLBu8pMugtBelrZaMy%2FCS9FsSWmu%2FcCunya9YNZGCxvRQxQ%2F6iO4ziNpa8eC2AHsCBXTLj8W5B25ujP7DSqovcmq3j7cjnGonEer8S6puJwBQ5SQOLqwzsqaqLK%2FBEXW%2FK0f39BuxylSn9BB0BnyKOIgLRn8LVWckF27h6viAlZ6zOiJJqHNGjLm236x9iQ7rKb3nL5%2BXCtaKQGxwmdDTzlvJwjhUcT5P3OUUyMIKooccGOqUBd9lqaaQDAzYW5yGbjT1Zgvp2uXq0LbZe2B2NYnqdQ0ZjefMAh4DT9QT%2BqjXLIuCuYMfYQa78v9eZ%2BCnMYphyV%2F7YtznBxiO5sP1JRmkFAURJDRQ5SN6uqPDJPcYJ7hS44iv%2BjIKQurXH5q8NyYHvIFTqZix33zUH%2Bve2%2BHEUzzEkVaymtEXzx%2B839gYbmIzn8takOiUfmnTWUWIUjQxwDN%2BI0QVl&X-Amz-Signature=88537f6d567945d9686db08cbb2ba53cd67aafa20afc314d4bc2995cc2910eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGBQEIU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAhHTjGUkeS0LtbCujIqy8ZRD6RAL8R7eIZoMT9B7lT5AiEAsX987VTdEtj5NEPUmKhFSlvORDDqm%2FanY3SKzCgdbaYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcTHswdhEK6N3rQ7ircA%2B%2FDjprtR6pyNs5WCx1LN8qwlPMNfI0Vib4NFvq3f7tE2RLYn7%2BdXrQwsvXoKeOZD4seIu0ogwkSf7QAvt6o9lHdZDvmfp%2BxnBjg%2F%2F824lgEDcmjVWZADbaTm8YIGoqU9PaI2lyXqVLu%2FARNwOrTXDHL4SaNu0%2FPgrAEoJypGcASx0DwNVIayx%2F7l7jd8nZ%2BijdxuW1P7%2BmOA2z5VK0KZnE3b48b5YA2UHCUVgRKb8PHZgOwyBSjfgiQS4%2FXWe2Wn86yeSN30q8Kj8VI6FwXW14P%2B8EMYu4b1gJiDETvNnrHdY7FXRPAiAY6fiU3X0SIC2XSCr7GAhb4EvyCMvhY0%2BWAzh5zxm2mtowBe49AkSyzrMq9eqzQu60J1KUQxnc5ZAWCcBP86ieIdXtf08u7LJXLBu8pMugtBelrZaMy%2FCS9FsSWmu%2FcCunya9YNZGCxvRQxQ%2F6iO4ziNpa8eC2AHsCBXTLj8W5B25ujP7DSqovcmq3j7cjnGonEer8S6puJwBQ5SQOLqwzsqaqLK%2FBEXW%2FK0f39BuxylSn9BB0BnyKOIgLRn8LVWckF27h6viAlZ6zOiJJqHNGjLm236x9iQ7rKb3nL5%2BXCtaKQGxwmdDTzlvJwjhUcT5P3OUUyMIKooccGOqUBd9lqaaQDAzYW5yGbjT1Zgvp2uXq0LbZe2B2NYnqdQ0ZjefMAh4DT9QT%2BqjXLIuCuYMfYQa78v9eZ%2BCnMYphyV%2F7YtznBxiO5sP1JRmkFAURJDRQ5SN6uqPDJPcYJ7hS44iv%2BjIKQurXH5q8NyYHvIFTqZix33zUH%2Bve2%2BHEUzzEkVaymtEXzx%2B839gYbmIzn8takOiUfmnTWUWIUjQxwDN%2BI0QVl&X-Amz-Signature=6db6aef7fed9e9f65cef16d5efe95ed8802b3e2dd40f1756b923dae66274116c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGBQEIU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAhHTjGUkeS0LtbCujIqy8ZRD6RAL8R7eIZoMT9B7lT5AiEAsX987VTdEtj5NEPUmKhFSlvORDDqm%2FanY3SKzCgdbaYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcTHswdhEK6N3rQ7ircA%2B%2FDjprtR6pyNs5WCx1LN8qwlPMNfI0Vib4NFvq3f7tE2RLYn7%2BdXrQwsvXoKeOZD4seIu0ogwkSf7QAvt6o9lHdZDvmfp%2BxnBjg%2F%2F824lgEDcmjVWZADbaTm8YIGoqU9PaI2lyXqVLu%2FARNwOrTXDHL4SaNu0%2FPgrAEoJypGcASx0DwNVIayx%2F7l7jd8nZ%2BijdxuW1P7%2BmOA2z5VK0KZnE3b48b5YA2UHCUVgRKb8PHZgOwyBSjfgiQS4%2FXWe2Wn86yeSN30q8Kj8VI6FwXW14P%2B8EMYu4b1gJiDETvNnrHdY7FXRPAiAY6fiU3X0SIC2XSCr7GAhb4EvyCMvhY0%2BWAzh5zxm2mtowBe49AkSyzrMq9eqzQu60J1KUQxnc5ZAWCcBP86ieIdXtf08u7LJXLBu8pMugtBelrZaMy%2FCS9FsSWmu%2FcCunya9YNZGCxvRQxQ%2F6iO4ziNpa8eC2AHsCBXTLj8W5B25ujP7DSqovcmq3j7cjnGonEer8S6puJwBQ5SQOLqwzsqaqLK%2FBEXW%2FK0f39BuxylSn9BB0BnyKOIgLRn8LVWckF27h6viAlZ6zOiJJqHNGjLm236x9iQ7rKb3nL5%2BXCtaKQGxwmdDTzlvJwjhUcT5P3OUUyMIKooccGOqUBd9lqaaQDAzYW5yGbjT1Zgvp2uXq0LbZe2B2NYnqdQ0ZjefMAh4DT9QT%2BqjXLIuCuYMfYQa78v9eZ%2BCnMYphyV%2F7YtznBxiO5sP1JRmkFAURJDRQ5SN6uqPDJPcYJ7hS44iv%2BjIKQurXH5q8NyYHvIFTqZix33zUH%2Bve2%2BHEUzzEkVaymtEXzx%2B839gYbmIzn8takOiUfmnTWUWIUjQxwDN%2BI0QVl&X-Amz-Signature=4f9f53d301c6acf2b513e43297865eef8f3d1b43e020f2895214eb7f42007f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGBQEIU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAhHTjGUkeS0LtbCujIqy8ZRD6RAL8R7eIZoMT9B7lT5AiEAsX987VTdEtj5NEPUmKhFSlvORDDqm%2FanY3SKzCgdbaYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcTHswdhEK6N3rQ7ircA%2B%2FDjprtR6pyNs5WCx1LN8qwlPMNfI0Vib4NFvq3f7tE2RLYn7%2BdXrQwsvXoKeOZD4seIu0ogwkSf7QAvt6o9lHdZDvmfp%2BxnBjg%2F%2F824lgEDcmjVWZADbaTm8YIGoqU9PaI2lyXqVLu%2FARNwOrTXDHL4SaNu0%2FPgrAEoJypGcASx0DwNVIayx%2F7l7jd8nZ%2BijdxuW1P7%2BmOA2z5VK0KZnE3b48b5YA2UHCUVgRKb8PHZgOwyBSjfgiQS4%2FXWe2Wn86yeSN30q8Kj8VI6FwXW14P%2B8EMYu4b1gJiDETvNnrHdY7FXRPAiAY6fiU3X0SIC2XSCr7GAhb4EvyCMvhY0%2BWAzh5zxm2mtowBe49AkSyzrMq9eqzQu60J1KUQxnc5ZAWCcBP86ieIdXtf08u7LJXLBu8pMugtBelrZaMy%2FCS9FsSWmu%2FcCunya9YNZGCxvRQxQ%2F6iO4ziNpa8eC2AHsCBXTLj8W5B25ujP7DSqovcmq3j7cjnGonEer8S6puJwBQ5SQOLqwzsqaqLK%2FBEXW%2FK0f39BuxylSn9BB0BnyKOIgLRn8LVWckF27h6viAlZ6zOiJJqHNGjLm236x9iQ7rKb3nL5%2BXCtaKQGxwmdDTzlvJwjhUcT5P3OUUyMIKooccGOqUBd9lqaaQDAzYW5yGbjT1Zgvp2uXq0LbZe2B2NYnqdQ0ZjefMAh4DT9QT%2BqjXLIuCuYMfYQa78v9eZ%2BCnMYphyV%2F7YtznBxiO5sP1JRmkFAURJDRQ5SN6uqPDJPcYJ7hS44iv%2BjIKQurXH5q8NyYHvIFTqZix33zUH%2Bve2%2BHEUzzEkVaymtEXzx%2B839gYbmIzn8takOiUfmnTWUWIUjQxwDN%2BI0QVl&X-Amz-Signature=bf022ae23bf103bb7b6ee3e10e8e7b8d9ffa7b14346bc622ccf27c5ecd95d580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGBQEIU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAhHTjGUkeS0LtbCujIqy8ZRD6RAL8R7eIZoMT9B7lT5AiEAsX987VTdEtj5NEPUmKhFSlvORDDqm%2FanY3SKzCgdbaYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcTHswdhEK6N3rQ7ircA%2B%2FDjprtR6pyNs5WCx1LN8qwlPMNfI0Vib4NFvq3f7tE2RLYn7%2BdXrQwsvXoKeOZD4seIu0ogwkSf7QAvt6o9lHdZDvmfp%2BxnBjg%2F%2F824lgEDcmjVWZADbaTm8YIGoqU9PaI2lyXqVLu%2FARNwOrTXDHL4SaNu0%2FPgrAEoJypGcASx0DwNVIayx%2F7l7jd8nZ%2BijdxuW1P7%2BmOA2z5VK0KZnE3b48b5YA2UHCUVgRKb8PHZgOwyBSjfgiQS4%2FXWe2Wn86yeSN30q8Kj8VI6FwXW14P%2B8EMYu4b1gJiDETvNnrHdY7FXRPAiAY6fiU3X0SIC2XSCr7GAhb4EvyCMvhY0%2BWAzh5zxm2mtowBe49AkSyzrMq9eqzQu60J1KUQxnc5ZAWCcBP86ieIdXtf08u7LJXLBu8pMugtBelrZaMy%2FCS9FsSWmu%2FcCunya9YNZGCxvRQxQ%2F6iO4ziNpa8eC2AHsCBXTLj8W5B25ujP7DSqovcmq3j7cjnGonEer8S6puJwBQ5SQOLqwzsqaqLK%2FBEXW%2FK0f39BuxylSn9BB0BnyKOIgLRn8LVWckF27h6viAlZ6zOiJJqHNGjLm236x9iQ7rKb3nL5%2BXCtaKQGxwmdDTzlvJwjhUcT5P3OUUyMIKooccGOqUBd9lqaaQDAzYW5yGbjT1Zgvp2uXq0LbZe2B2NYnqdQ0ZjefMAh4DT9QT%2BqjXLIuCuYMfYQa78v9eZ%2BCnMYphyV%2F7YtznBxiO5sP1JRmkFAURJDRQ5SN6uqPDJPcYJ7hS44iv%2BjIKQurXH5q8NyYHvIFTqZix33zUH%2Bve2%2BHEUzzEkVaymtEXzx%2B839gYbmIzn8takOiUfmnTWUWIUjQxwDN%2BI0QVl&X-Amz-Signature=2460173f8c27303d9daaec5ff0322267f67aa2c28eb1fca4fcc991a40138930c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
