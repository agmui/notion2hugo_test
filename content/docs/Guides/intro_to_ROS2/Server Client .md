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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCKWN3T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICi%2F3X9l0EXt0Pb%2FSBgUDV2TfPb%2F40vMIwV%2B52ywVTfKAiEA89kneEAJB8TNY34VZdptQNrpeVRGbHy8l8b%2BunqV88Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOnqxK0VS36pBgdlpCrcA2NA4%2Frk843%2FfPcH2CLFcc%2BI4evbUPpZ29CpYoA%2FPTAkyEsOf%2FhyefvcfV6xEFGJb5vIS7sYL6IAu16IzA39oSP0sNa1Bv2W%2BA5ATDvhlzfyh2QKA78Qvaf4xLknrTh1hTuS7UQZXaMKtED%2F2nmImqUT94Ta%2Bm0xIMwi8INGG1Pgz6ZNnx3V9Z8mNYPh6IYWE5xlnWWscjpBE%2BtFRrBGd56eLVJWddMAk06OTsxSKJNi8IBBH444nlGnrUijXtJpyso3hx67qvC0WacvUb%2FbDjX5d5ChKLZVkV3xMs1G4P1jcnI0SzlW%2B6iqhDHbtbs2YWZbTCBbscLMONiIJrq5fw1bC%2FjIA7e6kGhkPTJK%2B%2B7bYiyHEDmv1UAWaojETaleymZZRoWrbu9jfV25m6JZrNKMkHOVjQ5Nf7LknCYHk4yNKrBTSP04pvbtJ1XKeuYrV918xtO3VN82z4OWfZRSMgJBqAlU3JOUUyUCQMdNGs2w5cWyfPvvjeFehu%2BQLKkGqPQpzBv9e%2FPiwVRTqoKl%2BlBeiaEFabSa6w%2FzHLAc02WvVB8nnZNjt9DvkBOzFq3RtzNVccCB7FpQFAEYIw%2FX%2FlaO9RhkgG%2FqMxTBgPuxMdpD14hWW4AoUT75AAYAMJX1zcEGOqUBoij6MFQNHFpeo%2BH4baM0A8rj2T3%2Fsyl6GOgWWt5GEtzYiVeTeiWFz7T4vcIlD0PI5XBS1mA8nIpedZ1H5GYfry2cfC5W1Kx1FK4GtDE1EDfVYNb9DwbO9MW5YzyMAfTUTPD%2BLsuZAzrfEJQB53dVIp5QTK9Mnfg575Z33fYjc4QgUXW41%2BJHzDCwObzerw5xu2JpFr7O7AAtrIUDBKA0keib4X8P&X-Amz-Signature=fcf668cf12e2fd9bbc08547676332cd4b25c735416f9175b9b5dc493d05225a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCKWN3T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICi%2F3X9l0EXt0Pb%2FSBgUDV2TfPb%2F40vMIwV%2B52ywVTfKAiEA89kneEAJB8TNY34VZdptQNrpeVRGbHy8l8b%2BunqV88Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOnqxK0VS36pBgdlpCrcA2NA4%2Frk843%2FfPcH2CLFcc%2BI4evbUPpZ29CpYoA%2FPTAkyEsOf%2FhyefvcfV6xEFGJb5vIS7sYL6IAu16IzA39oSP0sNa1Bv2W%2BA5ATDvhlzfyh2QKA78Qvaf4xLknrTh1hTuS7UQZXaMKtED%2F2nmImqUT94Ta%2Bm0xIMwi8INGG1Pgz6ZNnx3V9Z8mNYPh6IYWE5xlnWWscjpBE%2BtFRrBGd56eLVJWddMAk06OTsxSKJNi8IBBH444nlGnrUijXtJpyso3hx67qvC0WacvUb%2FbDjX5d5ChKLZVkV3xMs1G4P1jcnI0SzlW%2B6iqhDHbtbs2YWZbTCBbscLMONiIJrq5fw1bC%2FjIA7e6kGhkPTJK%2B%2B7bYiyHEDmv1UAWaojETaleymZZRoWrbu9jfV25m6JZrNKMkHOVjQ5Nf7LknCYHk4yNKrBTSP04pvbtJ1XKeuYrV918xtO3VN82z4OWfZRSMgJBqAlU3JOUUyUCQMdNGs2w5cWyfPvvjeFehu%2BQLKkGqPQpzBv9e%2FPiwVRTqoKl%2BlBeiaEFabSa6w%2FzHLAc02WvVB8nnZNjt9DvkBOzFq3RtzNVccCB7FpQFAEYIw%2FX%2FlaO9RhkgG%2FqMxTBgPuxMdpD14hWW4AoUT75AAYAMJX1zcEGOqUBoij6MFQNHFpeo%2BH4baM0A8rj2T3%2Fsyl6GOgWWt5GEtzYiVeTeiWFz7T4vcIlD0PI5XBS1mA8nIpedZ1H5GYfry2cfC5W1Kx1FK4GtDE1EDfVYNb9DwbO9MW5YzyMAfTUTPD%2BLsuZAzrfEJQB53dVIp5QTK9Mnfg575Z33fYjc4QgUXW41%2BJHzDCwObzerw5xu2JpFr7O7AAtrIUDBKA0keib4X8P&X-Amz-Signature=734da8a2c66c9895a5f4bdf8d607e98ff0ba1aceedc94ed549ea355469e674e6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCKWN3T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICi%2F3X9l0EXt0Pb%2FSBgUDV2TfPb%2F40vMIwV%2B52ywVTfKAiEA89kneEAJB8TNY34VZdptQNrpeVRGbHy8l8b%2BunqV88Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOnqxK0VS36pBgdlpCrcA2NA4%2Frk843%2FfPcH2CLFcc%2BI4evbUPpZ29CpYoA%2FPTAkyEsOf%2FhyefvcfV6xEFGJb5vIS7sYL6IAu16IzA39oSP0sNa1Bv2W%2BA5ATDvhlzfyh2QKA78Qvaf4xLknrTh1hTuS7UQZXaMKtED%2F2nmImqUT94Ta%2Bm0xIMwi8INGG1Pgz6ZNnx3V9Z8mNYPh6IYWE5xlnWWscjpBE%2BtFRrBGd56eLVJWddMAk06OTsxSKJNi8IBBH444nlGnrUijXtJpyso3hx67qvC0WacvUb%2FbDjX5d5ChKLZVkV3xMs1G4P1jcnI0SzlW%2B6iqhDHbtbs2YWZbTCBbscLMONiIJrq5fw1bC%2FjIA7e6kGhkPTJK%2B%2B7bYiyHEDmv1UAWaojETaleymZZRoWrbu9jfV25m6JZrNKMkHOVjQ5Nf7LknCYHk4yNKrBTSP04pvbtJ1XKeuYrV918xtO3VN82z4OWfZRSMgJBqAlU3JOUUyUCQMdNGs2w5cWyfPvvjeFehu%2BQLKkGqPQpzBv9e%2FPiwVRTqoKl%2BlBeiaEFabSa6w%2FzHLAc02WvVB8nnZNjt9DvkBOzFq3RtzNVccCB7FpQFAEYIw%2FX%2FlaO9RhkgG%2FqMxTBgPuxMdpD14hWW4AoUT75AAYAMJX1zcEGOqUBoij6MFQNHFpeo%2BH4baM0A8rj2T3%2Fsyl6GOgWWt5GEtzYiVeTeiWFz7T4vcIlD0PI5XBS1mA8nIpedZ1H5GYfry2cfC5W1Kx1FK4GtDE1EDfVYNb9DwbO9MW5YzyMAfTUTPD%2BLsuZAzrfEJQB53dVIp5QTK9Mnfg575Z33fYjc4QgUXW41%2BJHzDCwObzerw5xu2JpFr7O7AAtrIUDBKA0keib4X8P&X-Amz-Signature=f65e4cb4df8216a2dd1843fa49b723f22f2cb969d89c24b8d329a2c3185a4ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCKWN3T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICi%2F3X9l0EXt0Pb%2FSBgUDV2TfPb%2F40vMIwV%2B52ywVTfKAiEA89kneEAJB8TNY34VZdptQNrpeVRGbHy8l8b%2BunqV88Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOnqxK0VS36pBgdlpCrcA2NA4%2Frk843%2FfPcH2CLFcc%2BI4evbUPpZ29CpYoA%2FPTAkyEsOf%2FhyefvcfV6xEFGJb5vIS7sYL6IAu16IzA39oSP0sNa1Bv2W%2BA5ATDvhlzfyh2QKA78Qvaf4xLknrTh1hTuS7UQZXaMKtED%2F2nmImqUT94Ta%2Bm0xIMwi8INGG1Pgz6ZNnx3V9Z8mNYPh6IYWE5xlnWWscjpBE%2BtFRrBGd56eLVJWddMAk06OTsxSKJNi8IBBH444nlGnrUijXtJpyso3hx67qvC0WacvUb%2FbDjX5d5ChKLZVkV3xMs1G4P1jcnI0SzlW%2B6iqhDHbtbs2YWZbTCBbscLMONiIJrq5fw1bC%2FjIA7e6kGhkPTJK%2B%2B7bYiyHEDmv1UAWaojETaleymZZRoWrbu9jfV25m6JZrNKMkHOVjQ5Nf7LknCYHk4yNKrBTSP04pvbtJ1XKeuYrV918xtO3VN82z4OWfZRSMgJBqAlU3JOUUyUCQMdNGs2w5cWyfPvvjeFehu%2BQLKkGqPQpzBv9e%2FPiwVRTqoKl%2BlBeiaEFabSa6w%2FzHLAc02WvVB8nnZNjt9DvkBOzFq3RtzNVccCB7FpQFAEYIw%2FX%2FlaO9RhkgG%2FqMxTBgPuxMdpD14hWW4AoUT75AAYAMJX1zcEGOqUBoij6MFQNHFpeo%2BH4baM0A8rj2T3%2Fsyl6GOgWWt5GEtzYiVeTeiWFz7T4vcIlD0PI5XBS1mA8nIpedZ1H5GYfry2cfC5W1Kx1FK4GtDE1EDfVYNb9DwbO9MW5YzyMAfTUTPD%2BLsuZAzrfEJQB53dVIp5QTK9Mnfg575Z33fYjc4QgUXW41%2BJHzDCwObzerw5xu2JpFr7O7AAtrIUDBKA0keib4X8P&X-Amz-Signature=5dda1137db423ae6ce2691afc01edaf1ff8519ba3d37e9c8c5a8dcb3cbad4625&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCKWN3T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICi%2F3X9l0EXt0Pb%2FSBgUDV2TfPb%2F40vMIwV%2B52ywVTfKAiEA89kneEAJB8TNY34VZdptQNrpeVRGbHy8l8b%2BunqV88Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOnqxK0VS36pBgdlpCrcA2NA4%2Frk843%2FfPcH2CLFcc%2BI4evbUPpZ29CpYoA%2FPTAkyEsOf%2FhyefvcfV6xEFGJb5vIS7sYL6IAu16IzA39oSP0sNa1Bv2W%2BA5ATDvhlzfyh2QKA78Qvaf4xLknrTh1hTuS7UQZXaMKtED%2F2nmImqUT94Ta%2Bm0xIMwi8INGG1Pgz6ZNnx3V9Z8mNYPh6IYWE5xlnWWscjpBE%2BtFRrBGd56eLVJWddMAk06OTsxSKJNi8IBBH444nlGnrUijXtJpyso3hx67qvC0WacvUb%2FbDjX5d5ChKLZVkV3xMs1G4P1jcnI0SzlW%2B6iqhDHbtbs2YWZbTCBbscLMONiIJrq5fw1bC%2FjIA7e6kGhkPTJK%2B%2B7bYiyHEDmv1UAWaojETaleymZZRoWrbu9jfV25m6JZrNKMkHOVjQ5Nf7LknCYHk4yNKrBTSP04pvbtJ1XKeuYrV918xtO3VN82z4OWfZRSMgJBqAlU3JOUUyUCQMdNGs2w5cWyfPvvjeFehu%2BQLKkGqPQpzBv9e%2FPiwVRTqoKl%2BlBeiaEFabSa6w%2FzHLAc02WvVB8nnZNjt9DvkBOzFq3RtzNVccCB7FpQFAEYIw%2FX%2FlaO9RhkgG%2FqMxTBgPuxMdpD14hWW4AoUT75AAYAMJX1zcEGOqUBoij6MFQNHFpeo%2BH4baM0A8rj2T3%2Fsyl6GOgWWt5GEtzYiVeTeiWFz7T4vcIlD0PI5XBS1mA8nIpedZ1H5GYfry2cfC5W1Kx1FK4GtDE1EDfVYNb9DwbO9MW5YzyMAfTUTPD%2BLsuZAzrfEJQB53dVIp5QTK9Mnfg575Z33fYjc4QgUXW41%2BJHzDCwObzerw5xu2JpFr7O7AAtrIUDBKA0keib4X8P&X-Amz-Signature=47eb6451d172aa336b10d3b2691bff53e2ddf8f0b4a9e0864cbf2a29dbb04a88&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
