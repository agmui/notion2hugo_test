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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YCPPWYZ%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFecgPIO9nm6bmkQoB56xQ9lrCY9qcEogoO2ersDRhcaAiEA5cYIKoxgsDuTRrVGqCq9MifFajWSKK71BVBNRuvoQSsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL4qOAqIJGy36a0GoircA61oFW0hbLlQqO90KW5RI4HpgjD7dtq%2BJ0gWzBXU7VSj07J7z2NSHjnR2Z5uOHL2%2Bof%2BbUr9d6XosWn364388siSKri1S42jCqdMq4wwGqqy%2BKubFTmHK8LaZzTElHgHreEXAzuV%2FeS%2BptunTAAlKSmY2T9P0JUmHbk8%2FU%2BCj%2FRZo6OOXvJN4PEt5cRF%2FHRg5JuYf6FJh1f4t4US7yQtJttmhJEv0SBeA0HOag7LvhkSRCLcn9CnnXQnygxO0u%2BjEmhhOT7OVtj9drO8EJyGLDFQob5yYRnOpLmKfB6wGDva7BzJZfynHWGkUl0b0ofhmRtQySiPrUzcUFWm9huXXMpOLu3uXdqAg3afITe%2BHPXOnpUkHIEA72Ku7nBNndb2M1gsB58q4h%2BMc1bQJc9PI4rT5RtaI%2Fh9OYQmALXZsTNqHLwvOo03WcEoQeCfan5iozXf3s5etDRFWLmhHDxCzn%2BgNuMsAPcgU%2FvAPPOnbpsld3SuScpkL36yr0Gf1pnjrGGoKb8mk0d1pznwvfBPFXl9xeTmBPFYtdUl5jAA49e38xMczA6sQGNk9HixRKQ7r14VKRXHwRlR%2BzrJJ5Wm%2BRN4cvVUJUt3VIkTY%2BwCT4sIOOfPpK%2B6pU8rssAXMN7I980GOqUB7F4kIo0%2BdrURCkxLXP9Qd068Gbj4oj%2FjKw43Y2RKFPenCNB9ib9a6mi80FFkotOytCOU%2Bzksn809LBwYnogD9hPaqQU%2FmfpFBlfZZZbNIYnP3tl1zrQzbNKjrxfGzQU%2BMZJEvMPSauS8y8t%2BmVqGeL7s%2BYGQa7%2FS4VWXwnH%2FhLrOtKttjp12vke2Tv3u%2BqC%2Fzr5hTthy8Gs3xcVguAwRVnsofZMZ&X-Amz-Signature=dc9b3149c3e97fe9cf77edbef0ef477e74bf2ef53424e78228ef2b4def80bbd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YCPPWYZ%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFecgPIO9nm6bmkQoB56xQ9lrCY9qcEogoO2ersDRhcaAiEA5cYIKoxgsDuTRrVGqCq9MifFajWSKK71BVBNRuvoQSsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL4qOAqIJGy36a0GoircA61oFW0hbLlQqO90KW5RI4HpgjD7dtq%2BJ0gWzBXU7VSj07J7z2NSHjnR2Z5uOHL2%2Bof%2BbUr9d6XosWn364388siSKri1S42jCqdMq4wwGqqy%2BKubFTmHK8LaZzTElHgHreEXAzuV%2FeS%2BptunTAAlKSmY2T9P0JUmHbk8%2FU%2BCj%2FRZo6OOXvJN4PEt5cRF%2FHRg5JuYf6FJh1f4t4US7yQtJttmhJEv0SBeA0HOag7LvhkSRCLcn9CnnXQnygxO0u%2BjEmhhOT7OVtj9drO8EJyGLDFQob5yYRnOpLmKfB6wGDva7BzJZfynHWGkUl0b0ofhmRtQySiPrUzcUFWm9huXXMpOLu3uXdqAg3afITe%2BHPXOnpUkHIEA72Ku7nBNndb2M1gsB58q4h%2BMc1bQJc9PI4rT5RtaI%2Fh9OYQmALXZsTNqHLwvOo03WcEoQeCfan5iozXf3s5etDRFWLmhHDxCzn%2BgNuMsAPcgU%2FvAPPOnbpsld3SuScpkL36yr0Gf1pnjrGGoKb8mk0d1pznwvfBPFXl9xeTmBPFYtdUl5jAA49e38xMczA6sQGNk9HixRKQ7r14VKRXHwRlR%2BzrJJ5Wm%2BRN4cvVUJUt3VIkTY%2BwCT4sIOOfPpK%2B6pU8rssAXMN7I980GOqUB7F4kIo0%2BdrURCkxLXP9Qd068Gbj4oj%2FjKw43Y2RKFPenCNB9ib9a6mi80FFkotOytCOU%2Bzksn809LBwYnogD9hPaqQU%2FmfpFBlfZZZbNIYnP3tl1zrQzbNKjrxfGzQU%2BMZJEvMPSauS8y8t%2BmVqGeL7s%2BYGQa7%2FS4VWXwnH%2FhLrOtKttjp12vke2Tv3u%2BqC%2Fzr5hTthy8Gs3xcVguAwRVnsofZMZ&X-Amz-Signature=53b8e25db0d24c027a3c6d7efc868c1aae8ee2cc3382eb66772d8911a4701612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YCPPWYZ%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFecgPIO9nm6bmkQoB56xQ9lrCY9qcEogoO2ersDRhcaAiEA5cYIKoxgsDuTRrVGqCq9MifFajWSKK71BVBNRuvoQSsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL4qOAqIJGy36a0GoircA61oFW0hbLlQqO90KW5RI4HpgjD7dtq%2BJ0gWzBXU7VSj07J7z2NSHjnR2Z5uOHL2%2Bof%2BbUr9d6XosWn364388siSKri1S42jCqdMq4wwGqqy%2BKubFTmHK8LaZzTElHgHreEXAzuV%2FeS%2BptunTAAlKSmY2T9P0JUmHbk8%2FU%2BCj%2FRZo6OOXvJN4PEt5cRF%2FHRg5JuYf6FJh1f4t4US7yQtJttmhJEv0SBeA0HOag7LvhkSRCLcn9CnnXQnygxO0u%2BjEmhhOT7OVtj9drO8EJyGLDFQob5yYRnOpLmKfB6wGDva7BzJZfynHWGkUl0b0ofhmRtQySiPrUzcUFWm9huXXMpOLu3uXdqAg3afITe%2BHPXOnpUkHIEA72Ku7nBNndb2M1gsB58q4h%2BMc1bQJc9PI4rT5RtaI%2Fh9OYQmALXZsTNqHLwvOo03WcEoQeCfan5iozXf3s5etDRFWLmhHDxCzn%2BgNuMsAPcgU%2FvAPPOnbpsld3SuScpkL36yr0Gf1pnjrGGoKb8mk0d1pznwvfBPFXl9xeTmBPFYtdUl5jAA49e38xMczA6sQGNk9HixRKQ7r14VKRXHwRlR%2BzrJJ5Wm%2BRN4cvVUJUt3VIkTY%2BwCT4sIOOfPpK%2B6pU8rssAXMN7I980GOqUB7F4kIo0%2BdrURCkxLXP9Qd068Gbj4oj%2FjKw43Y2RKFPenCNB9ib9a6mi80FFkotOytCOU%2Bzksn809LBwYnogD9hPaqQU%2FmfpFBlfZZZbNIYnP3tl1zrQzbNKjrxfGzQU%2BMZJEvMPSauS8y8t%2BmVqGeL7s%2BYGQa7%2FS4VWXwnH%2FhLrOtKttjp12vke2Tv3u%2BqC%2Fzr5hTthy8Gs3xcVguAwRVnsofZMZ&X-Amz-Signature=0300552703675af2817fa1ea8d3a2e23af2f8e271cf83734d13ea4e09b042615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YCPPWYZ%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFecgPIO9nm6bmkQoB56xQ9lrCY9qcEogoO2ersDRhcaAiEA5cYIKoxgsDuTRrVGqCq9MifFajWSKK71BVBNRuvoQSsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL4qOAqIJGy36a0GoircA61oFW0hbLlQqO90KW5RI4HpgjD7dtq%2BJ0gWzBXU7VSj07J7z2NSHjnR2Z5uOHL2%2Bof%2BbUr9d6XosWn364388siSKri1S42jCqdMq4wwGqqy%2BKubFTmHK8LaZzTElHgHreEXAzuV%2FeS%2BptunTAAlKSmY2T9P0JUmHbk8%2FU%2BCj%2FRZo6OOXvJN4PEt5cRF%2FHRg5JuYf6FJh1f4t4US7yQtJttmhJEv0SBeA0HOag7LvhkSRCLcn9CnnXQnygxO0u%2BjEmhhOT7OVtj9drO8EJyGLDFQob5yYRnOpLmKfB6wGDva7BzJZfynHWGkUl0b0ofhmRtQySiPrUzcUFWm9huXXMpOLu3uXdqAg3afITe%2BHPXOnpUkHIEA72Ku7nBNndb2M1gsB58q4h%2BMc1bQJc9PI4rT5RtaI%2Fh9OYQmALXZsTNqHLwvOo03WcEoQeCfan5iozXf3s5etDRFWLmhHDxCzn%2BgNuMsAPcgU%2FvAPPOnbpsld3SuScpkL36yr0Gf1pnjrGGoKb8mk0d1pznwvfBPFXl9xeTmBPFYtdUl5jAA49e38xMczA6sQGNk9HixRKQ7r14VKRXHwRlR%2BzrJJ5Wm%2BRN4cvVUJUt3VIkTY%2BwCT4sIOOfPpK%2B6pU8rssAXMN7I980GOqUB7F4kIo0%2BdrURCkxLXP9Qd068Gbj4oj%2FjKw43Y2RKFPenCNB9ib9a6mi80FFkotOytCOU%2Bzksn809LBwYnogD9hPaqQU%2FmfpFBlfZZZbNIYnP3tl1zrQzbNKjrxfGzQU%2BMZJEvMPSauS8y8t%2BmVqGeL7s%2BYGQa7%2FS4VWXwnH%2FhLrOtKttjp12vke2Tv3u%2BqC%2Fzr5hTthy8Gs3xcVguAwRVnsofZMZ&X-Amz-Signature=353fc38490546526e91d183c6887235b03317c45b98ea5a7b233aacb27b4a2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YCPPWYZ%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFecgPIO9nm6bmkQoB56xQ9lrCY9qcEogoO2ersDRhcaAiEA5cYIKoxgsDuTRrVGqCq9MifFajWSKK71BVBNRuvoQSsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL4qOAqIJGy36a0GoircA61oFW0hbLlQqO90KW5RI4HpgjD7dtq%2BJ0gWzBXU7VSj07J7z2NSHjnR2Z5uOHL2%2Bof%2BbUr9d6XosWn364388siSKri1S42jCqdMq4wwGqqy%2BKubFTmHK8LaZzTElHgHreEXAzuV%2FeS%2BptunTAAlKSmY2T9P0JUmHbk8%2FU%2BCj%2FRZo6OOXvJN4PEt5cRF%2FHRg5JuYf6FJh1f4t4US7yQtJttmhJEv0SBeA0HOag7LvhkSRCLcn9CnnXQnygxO0u%2BjEmhhOT7OVtj9drO8EJyGLDFQob5yYRnOpLmKfB6wGDva7BzJZfynHWGkUl0b0ofhmRtQySiPrUzcUFWm9huXXMpOLu3uXdqAg3afITe%2BHPXOnpUkHIEA72Ku7nBNndb2M1gsB58q4h%2BMc1bQJc9PI4rT5RtaI%2Fh9OYQmALXZsTNqHLwvOo03WcEoQeCfan5iozXf3s5etDRFWLmhHDxCzn%2BgNuMsAPcgU%2FvAPPOnbpsld3SuScpkL36yr0Gf1pnjrGGoKb8mk0d1pznwvfBPFXl9xeTmBPFYtdUl5jAA49e38xMczA6sQGNk9HixRKQ7r14VKRXHwRlR%2BzrJJ5Wm%2BRN4cvVUJUt3VIkTY%2BwCT4sIOOfPpK%2B6pU8rssAXMN7I980GOqUB7F4kIo0%2BdrURCkxLXP9Qd068Gbj4oj%2FjKw43Y2RKFPenCNB9ib9a6mi80FFkotOytCOU%2Bzksn809LBwYnogD9hPaqQU%2FmfpFBlfZZZbNIYnP3tl1zrQzbNKjrxfGzQU%2BMZJEvMPSauS8y8t%2BmVqGeL7s%2BYGQa7%2FS4VWXwnH%2FhLrOtKttjp12vke2Tv3u%2BqC%2Fzr5hTthy8Gs3xcVguAwRVnsofZMZ&X-Amz-Signature=bec3bfbcb9dae2160365182c41aa48ca15941dc7f9e25e1e16fbe3b58aae91d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
