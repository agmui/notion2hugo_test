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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665L57SC6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDBni2gHNPOx%2FqTZQLFhKi%2F8jeVukcRCUE0J%2F%2FYUPh5QIgYnsO5DZZmMc%2FYQFeUAtTOyVP2kcN4KwfwAgBAr31bV0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUUc32BFTt4hv27OircA9GB0nu61G8UAGrftfkIAotrhBV9FS9ruXrygzq6qn%2FpySHHmrWToG9BsEEN9%2FeTdlbENJ3t9nFU9iaGdyQ3tgTDI4yDS8YZrL7MBPUMpOb6T1wC2RDAHI4oywJ3pn%2FBt4t5F0E4hqxXNyp%2FT0MGmxEBN0yFqhNp4RfeFOuqqTy%2FgsHJF%2FdggsFBQroCVI8NW1WFiq4KCfSnpZ4KoSE0SZ1NUk1dlQ8O69I2zZ8nhpQtTsFiHoS6rJJi5k4h1tRYwsZ9LKEENs4mK%2FXQIOEbejBJSgyGsp9oCU7vbBUXu9BDqGtppze5PITmL1KVc%2FsBfcgVp5FF5N43Xyh43W10qsHTn0A7JuC4v9nXede8y27gTcP5wJvkaqEh8MCsWECb4b4Y8oAkwi0jl%2FxNpOqanwJc1bRDHdkxJoxDjtiK4av0a%2BjHTN1phKeDIit7EENWyVIFHxbws2L2aUHPIaVZE4zm4SYa%2B2K272zrEmxW%2FZRn57KufbC7ha1BB0b%2FvwPuB8eSjC6IOn8sFxATu45wsOwIEKf%2BOeMFVSoC%2Bt0QSazyQZWqPAubAjpA1FStDMlpk5B5OnqdJWUxnGcA3tWRcQ967md%2FtJahshR09oeUjLVLZ01Wt%2Bfcmt6RLNHcMMjQ0r4GOqUB%2FvGWH3uC0U1oYopQ4B8ysTTBPXgftdxIXUxFJCuNB9tg3cUHgM8JKD61hUv40ffKmXYj1ziiF9s5Av6EHM1e%2FxxRoOzRz8lRr3HMkpHisuN4aNM7tACdEoHCCy8StVLbei6w5LXxthIOjwcU9ovcdbCjyQH1PyKm8d6v9bH2n7qG2bMt0k0cTYAYGFw0LkHVfYn6rBIYrzg6l0BIUt3TuSow%2FJj%2F&X-Amz-Signature=fb6ef41f38e6aa988237760f45d70e29d2022d72fd65dd1b572b539f5e697463&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665L57SC6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDBni2gHNPOx%2FqTZQLFhKi%2F8jeVukcRCUE0J%2F%2FYUPh5QIgYnsO5DZZmMc%2FYQFeUAtTOyVP2kcN4KwfwAgBAr31bV0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUUc32BFTt4hv27OircA9GB0nu61G8UAGrftfkIAotrhBV9FS9ruXrygzq6qn%2FpySHHmrWToG9BsEEN9%2FeTdlbENJ3t9nFU9iaGdyQ3tgTDI4yDS8YZrL7MBPUMpOb6T1wC2RDAHI4oywJ3pn%2FBt4t5F0E4hqxXNyp%2FT0MGmxEBN0yFqhNp4RfeFOuqqTy%2FgsHJF%2FdggsFBQroCVI8NW1WFiq4KCfSnpZ4KoSE0SZ1NUk1dlQ8O69I2zZ8nhpQtTsFiHoS6rJJi5k4h1tRYwsZ9LKEENs4mK%2FXQIOEbejBJSgyGsp9oCU7vbBUXu9BDqGtppze5PITmL1KVc%2FsBfcgVp5FF5N43Xyh43W10qsHTn0A7JuC4v9nXede8y27gTcP5wJvkaqEh8MCsWECb4b4Y8oAkwi0jl%2FxNpOqanwJc1bRDHdkxJoxDjtiK4av0a%2BjHTN1phKeDIit7EENWyVIFHxbws2L2aUHPIaVZE4zm4SYa%2B2K272zrEmxW%2FZRn57KufbC7ha1BB0b%2FvwPuB8eSjC6IOn8sFxATu45wsOwIEKf%2BOeMFVSoC%2Bt0QSazyQZWqPAubAjpA1FStDMlpk5B5OnqdJWUxnGcA3tWRcQ967md%2FtJahshR09oeUjLVLZ01Wt%2Bfcmt6RLNHcMMjQ0r4GOqUB%2FvGWH3uC0U1oYopQ4B8ysTTBPXgftdxIXUxFJCuNB9tg3cUHgM8JKD61hUv40ffKmXYj1ziiF9s5Av6EHM1e%2FxxRoOzRz8lRr3HMkpHisuN4aNM7tACdEoHCCy8StVLbei6w5LXxthIOjwcU9ovcdbCjyQH1PyKm8d6v9bH2n7qG2bMt0k0cTYAYGFw0LkHVfYn6rBIYrzg6l0BIUt3TuSow%2FJj%2F&X-Amz-Signature=6bad3634b969929ed34438dab1800ce42c65c6eac11798ad6fad4755308aab0c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665L57SC6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDBni2gHNPOx%2FqTZQLFhKi%2F8jeVukcRCUE0J%2F%2FYUPh5QIgYnsO5DZZmMc%2FYQFeUAtTOyVP2kcN4KwfwAgBAr31bV0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUUc32BFTt4hv27OircA9GB0nu61G8UAGrftfkIAotrhBV9FS9ruXrygzq6qn%2FpySHHmrWToG9BsEEN9%2FeTdlbENJ3t9nFU9iaGdyQ3tgTDI4yDS8YZrL7MBPUMpOb6T1wC2RDAHI4oywJ3pn%2FBt4t5F0E4hqxXNyp%2FT0MGmxEBN0yFqhNp4RfeFOuqqTy%2FgsHJF%2FdggsFBQroCVI8NW1WFiq4KCfSnpZ4KoSE0SZ1NUk1dlQ8O69I2zZ8nhpQtTsFiHoS6rJJi5k4h1tRYwsZ9LKEENs4mK%2FXQIOEbejBJSgyGsp9oCU7vbBUXu9BDqGtppze5PITmL1KVc%2FsBfcgVp5FF5N43Xyh43W10qsHTn0A7JuC4v9nXede8y27gTcP5wJvkaqEh8MCsWECb4b4Y8oAkwi0jl%2FxNpOqanwJc1bRDHdkxJoxDjtiK4av0a%2BjHTN1phKeDIit7EENWyVIFHxbws2L2aUHPIaVZE4zm4SYa%2B2K272zrEmxW%2FZRn57KufbC7ha1BB0b%2FvwPuB8eSjC6IOn8sFxATu45wsOwIEKf%2BOeMFVSoC%2Bt0QSazyQZWqPAubAjpA1FStDMlpk5B5OnqdJWUxnGcA3tWRcQ967md%2FtJahshR09oeUjLVLZ01Wt%2Bfcmt6RLNHcMMjQ0r4GOqUB%2FvGWH3uC0U1oYopQ4B8ysTTBPXgftdxIXUxFJCuNB9tg3cUHgM8JKD61hUv40ffKmXYj1ziiF9s5Av6EHM1e%2FxxRoOzRz8lRr3HMkpHisuN4aNM7tACdEoHCCy8StVLbei6w5LXxthIOjwcU9ovcdbCjyQH1PyKm8d6v9bH2n7qG2bMt0k0cTYAYGFw0LkHVfYn6rBIYrzg6l0BIUt3TuSow%2FJj%2F&X-Amz-Signature=871d40244903d197f1014b8328fe5be96ff507890d3ef388da767163c573b14e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665L57SC6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDBni2gHNPOx%2FqTZQLFhKi%2F8jeVukcRCUE0J%2F%2FYUPh5QIgYnsO5DZZmMc%2FYQFeUAtTOyVP2kcN4KwfwAgBAr31bV0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUUc32BFTt4hv27OircA9GB0nu61G8UAGrftfkIAotrhBV9FS9ruXrygzq6qn%2FpySHHmrWToG9BsEEN9%2FeTdlbENJ3t9nFU9iaGdyQ3tgTDI4yDS8YZrL7MBPUMpOb6T1wC2RDAHI4oywJ3pn%2FBt4t5F0E4hqxXNyp%2FT0MGmxEBN0yFqhNp4RfeFOuqqTy%2FgsHJF%2FdggsFBQroCVI8NW1WFiq4KCfSnpZ4KoSE0SZ1NUk1dlQ8O69I2zZ8nhpQtTsFiHoS6rJJi5k4h1tRYwsZ9LKEENs4mK%2FXQIOEbejBJSgyGsp9oCU7vbBUXu9BDqGtppze5PITmL1KVc%2FsBfcgVp5FF5N43Xyh43W10qsHTn0A7JuC4v9nXede8y27gTcP5wJvkaqEh8MCsWECb4b4Y8oAkwi0jl%2FxNpOqanwJc1bRDHdkxJoxDjtiK4av0a%2BjHTN1phKeDIit7EENWyVIFHxbws2L2aUHPIaVZE4zm4SYa%2B2K272zrEmxW%2FZRn57KufbC7ha1BB0b%2FvwPuB8eSjC6IOn8sFxATu45wsOwIEKf%2BOeMFVSoC%2Bt0QSazyQZWqPAubAjpA1FStDMlpk5B5OnqdJWUxnGcA3tWRcQ967md%2FtJahshR09oeUjLVLZ01Wt%2Bfcmt6RLNHcMMjQ0r4GOqUB%2FvGWH3uC0U1oYopQ4B8ysTTBPXgftdxIXUxFJCuNB9tg3cUHgM8JKD61hUv40ffKmXYj1ziiF9s5Av6EHM1e%2FxxRoOzRz8lRr3HMkpHisuN4aNM7tACdEoHCCy8StVLbei6w5LXxthIOjwcU9ovcdbCjyQH1PyKm8d6v9bH2n7qG2bMt0k0cTYAYGFw0LkHVfYn6rBIYrzg6l0BIUt3TuSow%2FJj%2F&X-Amz-Signature=fe5f0d346f02da525547546876225960a06fee6518a20f07ee55ed9ba87a359b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665L57SC6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDBni2gHNPOx%2FqTZQLFhKi%2F8jeVukcRCUE0J%2F%2FYUPh5QIgYnsO5DZZmMc%2FYQFeUAtTOyVP2kcN4KwfwAgBAr31bV0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUUc32BFTt4hv27OircA9GB0nu61G8UAGrftfkIAotrhBV9FS9ruXrygzq6qn%2FpySHHmrWToG9BsEEN9%2FeTdlbENJ3t9nFU9iaGdyQ3tgTDI4yDS8YZrL7MBPUMpOb6T1wC2RDAHI4oywJ3pn%2FBt4t5F0E4hqxXNyp%2FT0MGmxEBN0yFqhNp4RfeFOuqqTy%2FgsHJF%2FdggsFBQroCVI8NW1WFiq4KCfSnpZ4KoSE0SZ1NUk1dlQ8O69I2zZ8nhpQtTsFiHoS6rJJi5k4h1tRYwsZ9LKEENs4mK%2FXQIOEbejBJSgyGsp9oCU7vbBUXu9BDqGtppze5PITmL1KVc%2FsBfcgVp5FF5N43Xyh43W10qsHTn0A7JuC4v9nXede8y27gTcP5wJvkaqEh8MCsWECb4b4Y8oAkwi0jl%2FxNpOqanwJc1bRDHdkxJoxDjtiK4av0a%2BjHTN1phKeDIit7EENWyVIFHxbws2L2aUHPIaVZE4zm4SYa%2B2K272zrEmxW%2FZRn57KufbC7ha1BB0b%2FvwPuB8eSjC6IOn8sFxATu45wsOwIEKf%2BOeMFVSoC%2Bt0QSazyQZWqPAubAjpA1FStDMlpk5B5OnqdJWUxnGcA3tWRcQ967md%2FtJahshR09oeUjLVLZ01Wt%2Bfcmt6RLNHcMMjQ0r4GOqUB%2FvGWH3uC0U1oYopQ4B8ysTTBPXgftdxIXUxFJCuNB9tg3cUHgM8JKD61hUv40ffKmXYj1ziiF9s5Av6EHM1e%2FxxRoOzRz8lRr3HMkpHisuN4aNM7tACdEoHCCy8StVLbei6w5LXxthIOjwcU9ovcdbCjyQH1PyKm8d6v9bH2n7qG2bMt0k0cTYAYGFw0LkHVfYn6rBIYrzg6l0BIUt3TuSow%2FJj%2F&X-Amz-Signature=396d8046a819ac92df85e128f46d8f84d366ca88ce1ffefc4bb0bd75e4840c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
