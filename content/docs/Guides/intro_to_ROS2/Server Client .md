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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2D7A4S%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9zyqqURoLu2uQ%2FEmlLzcddxMDM2cMZ7%2B9t9iRq81IpAiB6fNDHK%2FMscNHGgsXkdSPjkIZ4%2B0X7p8dOfKsmyAXYWyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMzIxFeAeO3fsL9r%2FeKtwD2QaEVOv97tSR1djgnhQuPuC2lr7IQ0uVEp2%2BBaO%2BsksHc3umEcoDSjgrJoM5BOWQIDX8WKvOQFVMjZT3sIFUh%2BIPT%2FNqln8DAz8UmPIKyTBXICbm2ICc179qZxIF896MzkycKrQqfYw445L4SDRH9P2JQSI07hh4tqbOorRc2t6j9wVofep6BkVaUJuw4%2BfJYVWL9FRxNGcz8LGpE2cdiXv6fi%2FomU%2BM9dmam1AmQUB%2FyY15xoA7Qs5cCPc1xRlfHMKPsLoKSX62tIM7stdENk%2Fvb3YIlxcL9J8L4ScQPDL3FmwwcXf1RqBW9SYwk6eW8DFwBQsax%2BSRVyNKgjn1EiBYOnSFHt7xd%2Fun%2FreUufYF9hk68QUYD9ve7KMU1RiDB8L0Y9tsFg31QcDBsQlEMoeo3hUr3geQeicWoKrPMh9nVw7P0iZgSrsjLJ8v9TRYlB4U0C%2BhDepsnAsWlJtNS66ekmieI0bqgl15jUSt1GY1GcmE3kgY93uXRQ3o8Xyg2UuWSpXyeDS4mKiKVHG2b7b6Y%2BvUPUgOb3gNyJLMIpXc4qq8jDi3QoLG%2B%2FKeV9ZueWSVMpqlpya6KMWRrj%2F9dhhtCTGqSLhtdHlAUy9z15%2BOlnmqnwD0MR06fWow%2FJHfvgY6pgFZkhV%2BbyLgUTQorZpyneJytB%2FPaf0jiCMOKEhdIk%2BndupS7Au15F3K6iJIhKjIkJw97xxqyDbNHswhOnytRx1brNZU57G1%2B6NAssxAeTdeURXqV3F8NZ84PY93JOscfWA1ufFnNXeTd8XC5ro7UwO5W6AHb52%2BO6bYH3sdl6n1zUUFqYU2Pj8zC34sMYKGBmJ1sBaSo5Eq6GsP0oPNL%2FsrI2ZBmd4x&X-Amz-Signature=b96479da9b7679b609deca89c602bffabfbb8b584aa5ef0289560d57a11c72ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2D7A4S%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9zyqqURoLu2uQ%2FEmlLzcddxMDM2cMZ7%2B9t9iRq81IpAiB6fNDHK%2FMscNHGgsXkdSPjkIZ4%2B0X7p8dOfKsmyAXYWyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMzIxFeAeO3fsL9r%2FeKtwD2QaEVOv97tSR1djgnhQuPuC2lr7IQ0uVEp2%2BBaO%2BsksHc3umEcoDSjgrJoM5BOWQIDX8WKvOQFVMjZT3sIFUh%2BIPT%2FNqln8DAz8UmPIKyTBXICbm2ICc179qZxIF896MzkycKrQqfYw445L4SDRH9P2JQSI07hh4tqbOorRc2t6j9wVofep6BkVaUJuw4%2BfJYVWL9FRxNGcz8LGpE2cdiXv6fi%2FomU%2BM9dmam1AmQUB%2FyY15xoA7Qs5cCPc1xRlfHMKPsLoKSX62tIM7stdENk%2Fvb3YIlxcL9J8L4ScQPDL3FmwwcXf1RqBW9SYwk6eW8DFwBQsax%2BSRVyNKgjn1EiBYOnSFHt7xd%2Fun%2FreUufYF9hk68QUYD9ve7KMU1RiDB8L0Y9tsFg31QcDBsQlEMoeo3hUr3geQeicWoKrPMh9nVw7P0iZgSrsjLJ8v9TRYlB4U0C%2BhDepsnAsWlJtNS66ekmieI0bqgl15jUSt1GY1GcmE3kgY93uXRQ3o8Xyg2UuWSpXyeDS4mKiKVHG2b7b6Y%2BvUPUgOb3gNyJLMIpXc4qq8jDi3QoLG%2B%2FKeV9ZueWSVMpqlpya6KMWRrj%2F9dhhtCTGqSLhtdHlAUy9z15%2BOlnmqnwD0MR06fWow%2FJHfvgY6pgFZkhV%2BbyLgUTQorZpyneJytB%2FPaf0jiCMOKEhdIk%2BndupS7Au15F3K6iJIhKjIkJw97xxqyDbNHswhOnytRx1brNZU57G1%2B6NAssxAeTdeURXqV3F8NZ84PY93JOscfWA1ufFnNXeTd8XC5ro7UwO5W6AHb52%2BO6bYH3sdl6n1zUUFqYU2Pj8zC34sMYKGBmJ1sBaSo5Eq6GsP0oPNL%2FsrI2ZBmd4x&X-Amz-Signature=995963b9dfd0b60c0ed28e9e0993563162372918d822051e3f145b786f7e01eb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2D7A4S%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9zyqqURoLu2uQ%2FEmlLzcddxMDM2cMZ7%2B9t9iRq81IpAiB6fNDHK%2FMscNHGgsXkdSPjkIZ4%2B0X7p8dOfKsmyAXYWyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMzIxFeAeO3fsL9r%2FeKtwD2QaEVOv97tSR1djgnhQuPuC2lr7IQ0uVEp2%2BBaO%2BsksHc3umEcoDSjgrJoM5BOWQIDX8WKvOQFVMjZT3sIFUh%2BIPT%2FNqln8DAz8UmPIKyTBXICbm2ICc179qZxIF896MzkycKrQqfYw445L4SDRH9P2JQSI07hh4tqbOorRc2t6j9wVofep6BkVaUJuw4%2BfJYVWL9FRxNGcz8LGpE2cdiXv6fi%2FomU%2BM9dmam1AmQUB%2FyY15xoA7Qs5cCPc1xRlfHMKPsLoKSX62tIM7stdENk%2Fvb3YIlxcL9J8L4ScQPDL3FmwwcXf1RqBW9SYwk6eW8DFwBQsax%2BSRVyNKgjn1EiBYOnSFHt7xd%2Fun%2FreUufYF9hk68QUYD9ve7KMU1RiDB8L0Y9tsFg31QcDBsQlEMoeo3hUr3geQeicWoKrPMh9nVw7P0iZgSrsjLJ8v9TRYlB4U0C%2BhDepsnAsWlJtNS66ekmieI0bqgl15jUSt1GY1GcmE3kgY93uXRQ3o8Xyg2UuWSpXyeDS4mKiKVHG2b7b6Y%2BvUPUgOb3gNyJLMIpXc4qq8jDi3QoLG%2B%2FKeV9ZueWSVMpqlpya6KMWRrj%2F9dhhtCTGqSLhtdHlAUy9z15%2BOlnmqnwD0MR06fWow%2FJHfvgY6pgFZkhV%2BbyLgUTQorZpyneJytB%2FPaf0jiCMOKEhdIk%2BndupS7Au15F3K6iJIhKjIkJw97xxqyDbNHswhOnytRx1brNZU57G1%2B6NAssxAeTdeURXqV3F8NZ84PY93JOscfWA1ufFnNXeTd8XC5ro7UwO5W6AHb52%2BO6bYH3sdl6n1zUUFqYU2Pj8zC34sMYKGBmJ1sBaSo5Eq6GsP0oPNL%2FsrI2ZBmd4x&X-Amz-Signature=0aa82c21d7c18a449ab3d2e9b6bd86a873f4d2a19994b9e58430f8084899148e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2D7A4S%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9zyqqURoLu2uQ%2FEmlLzcddxMDM2cMZ7%2B9t9iRq81IpAiB6fNDHK%2FMscNHGgsXkdSPjkIZ4%2B0X7p8dOfKsmyAXYWyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMzIxFeAeO3fsL9r%2FeKtwD2QaEVOv97tSR1djgnhQuPuC2lr7IQ0uVEp2%2BBaO%2BsksHc3umEcoDSjgrJoM5BOWQIDX8WKvOQFVMjZT3sIFUh%2BIPT%2FNqln8DAz8UmPIKyTBXICbm2ICc179qZxIF896MzkycKrQqfYw445L4SDRH9P2JQSI07hh4tqbOorRc2t6j9wVofep6BkVaUJuw4%2BfJYVWL9FRxNGcz8LGpE2cdiXv6fi%2FomU%2BM9dmam1AmQUB%2FyY15xoA7Qs5cCPc1xRlfHMKPsLoKSX62tIM7stdENk%2Fvb3YIlxcL9J8L4ScQPDL3FmwwcXf1RqBW9SYwk6eW8DFwBQsax%2BSRVyNKgjn1EiBYOnSFHt7xd%2Fun%2FreUufYF9hk68QUYD9ve7KMU1RiDB8L0Y9tsFg31QcDBsQlEMoeo3hUr3geQeicWoKrPMh9nVw7P0iZgSrsjLJ8v9TRYlB4U0C%2BhDepsnAsWlJtNS66ekmieI0bqgl15jUSt1GY1GcmE3kgY93uXRQ3o8Xyg2UuWSpXyeDS4mKiKVHG2b7b6Y%2BvUPUgOb3gNyJLMIpXc4qq8jDi3QoLG%2B%2FKeV9ZueWSVMpqlpya6KMWRrj%2F9dhhtCTGqSLhtdHlAUy9z15%2BOlnmqnwD0MR06fWow%2FJHfvgY6pgFZkhV%2BbyLgUTQorZpyneJytB%2FPaf0jiCMOKEhdIk%2BndupS7Au15F3K6iJIhKjIkJw97xxqyDbNHswhOnytRx1brNZU57G1%2B6NAssxAeTdeURXqV3F8NZ84PY93JOscfWA1ufFnNXeTd8XC5ro7UwO5W6AHb52%2BO6bYH3sdl6n1zUUFqYU2Pj8zC34sMYKGBmJ1sBaSo5Eq6GsP0oPNL%2FsrI2ZBmd4x&X-Amz-Signature=a8b46c6d8e39bd7db95636fe6c2e3a117ac842cd6198cf9d4835f4973b874f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2D7A4S%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9zyqqURoLu2uQ%2FEmlLzcddxMDM2cMZ7%2B9t9iRq81IpAiB6fNDHK%2FMscNHGgsXkdSPjkIZ4%2B0X7p8dOfKsmyAXYWyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMzIxFeAeO3fsL9r%2FeKtwD2QaEVOv97tSR1djgnhQuPuC2lr7IQ0uVEp2%2BBaO%2BsksHc3umEcoDSjgrJoM5BOWQIDX8WKvOQFVMjZT3sIFUh%2BIPT%2FNqln8DAz8UmPIKyTBXICbm2ICc179qZxIF896MzkycKrQqfYw445L4SDRH9P2JQSI07hh4tqbOorRc2t6j9wVofep6BkVaUJuw4%2BfJYVWL9FRxNGcz8LGpE2cdiXv6fi%2FomU%2BM9dmam1AmQUB%2FyY15xoA7Qs5cCPc1xRlfHMKPsLoKSX62tIM7stdENk%2Fvb3YIlxcL9J8L4ScQPDL3FmwwcXf1RqBW9SYwk6eW8DFwBQsax%2BSRVyNKgjn1EiBYOnSFHt7xd%2Fun%2FreUufYF9hk68QUYD9ve7KMU1RiDB8L0Y9tsFg31QcDBsQlEMoeo3hUr3geQeicWoKrPMh9nVw7P0iZgSrsjLJ8v9TRYlB4U0C%2BhDepsnAsWlJtNS66ekmieI0bqgl15jUSt1GY1GcmE3kgY93uXRQ3o8Xyg2UuWSpXyeDS4mKiKVHG2b7b6Y%2BvUPUgOb3gNyJLMIpXc4qq8jDi3QoLG%2B%2FKeV9ZueWSVMpqlpya6KMWRrj%2F9dhhtCTGqSLhtdHlAUy9z15%2BOlnmqnwD0MR06fWow%2FJHfvgY6pgFZkhV%2BbyLgUTQorZpyneJytB%2FPaf0jiCMOKEhdIk%2BndupS7Au15F3K6iJIhKjIkJw97xxqyDbNHswhOnytRx1brNZU57G1%2B6NAssxAeTdeURXqV3F8NZ84PY93JOscfWA1ufFnNXeTd8XC5ro7UwO5W6AHb52%2BO6bYH3sdl6n1zUUFqYU2Pj8zC34sMYKGBmJ1sBaSo5Eq6GsP0oPNL%2FsrI2ZBmd4x&X-Amz-Signature=4df8b554fcbaaa8b643f7b94dbca3225009da7580669f89d747d9f3d9f4cb124&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
