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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCTAZCE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxMaWEGZugyVjzKhSg4ESISl3xxzDEe62EwjXeCcr6PAiEAuYrd6cAntHpKq8n34mXvC%2FnfpKqZBE9%2BlzglkUXAzj8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLdPRqnWY%2BIL%2B5P%2BVSrcA4pscbprXU7FBhc2yW1EnHAvx2RFkgPKc0Kr2quz1z03oHpvlebonhQHEPiOL4mAWROqjUOSsk8KSbdiohG%2FxF3fKbQujzRSKYgBuwwNMzefdG47qai%2FGvA2aa0zhMH0hPEFrBeXAwEzDlye55Hz7C6jziQr6MJ0%2BsUdE426MJdmNfgRnjb4nR9x76HpWRsg07LBqZ%2Be1eUQEO5fJspzAXWNs8Yx4saSvtaRar79968O%2B1uh4AnRWfmWFPPqhDFrAVUuO5OcglPoajMyYYoAz9JljL%2F0q40agysd4xc7eMQMuaKjF3blPZx8Su4la%2FgTId7ts53m4tI%2B90FtgrRXxlLw4S662lqbfGtdxER7YmvQI73ItyBiQOVm4dQnpCZMhOkfWLW8X9bzo9JI%2BT8xMsC%2BukJddaf%2FUdbMS7lQEY2%2F9DhM32oxP4JrqX5pLEhJUOu71CvlKO0OAmTLSPTHXMzQ6ukHZ%2BApz0r9zVjb4oFTdSzpt7TiXJdTCuuIzZbg9Qti14l5SbPsQwhURjPajeiVx0KwZVT%2BONEfN7oucH5uWFFerePPQ9z3H2AXyRohgIpfLzoq8mS3hyr9FvOPckkEnhwsrDMFZ4TTKZg4RUq67vNwXjNIb7QWW%2FedMNCisMAGOqUB8VoE93p5RZ4JDsg6n13n4ZBpTucYRkdTuqgWwEWuEUh0x5f0umOEQuoHn3gSMTYvf6vM%2FPpeHLk0nkjNx5hangZO2VImbSXdrM2IPAlm1W2A7I%2BGfh2sogIyZpAoVLrCKKaDqOdHuDIpxNI%2FHZeoVNCeQH6fR91Ir8TPU%2BCAHLlbxF5oBc1m3ExxP6EKRMfhX5ouJX1ihQHY5K1ZRm84q5BJRKgC&X-Amz-Signature=f874a26defea00615e2ee6eec6ff622457aa72c2efb097d8f3967617aaa65954&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCTAZCE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxMaWEGZugyVjzKhSg4ESISl3xxzDEe62EwjXeCcr6PAiEAuYrd6cAntHpKq8n34mXvC%2FnfpKqZBE9%2BlzglkUXAzj8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLdPRqnWY%2BIL%2B5P%2BVSrcA4pscbprXU7FBhc2yW1EnHAvx2RFkgPKc0Kr2quz1z03oHpvlebonhQHEPiOL4mAWROqjUOSsk8KSbdiohG%2FxF3fKbQujzRSKYgBuwwNMzefdG47qai%2FGvA2aa0zhMH0hPEFrBeXAwEzDlye55Hz7C6jziQr6MJ0%2BsUdE426MJdmNfgRnjb4nR9x76HpWRsg07LBqZ%2Be1eUQEO5fJspzAXWNs8Yx4saSvtaRar79968O%2B1uh4AnRWfmWFPPqhDFrAVUuO5OcglPoajMyYYoAz9JljL%2F0q40agysd4xc7eMQMuaKjF3blPZx8Su4la%2FgTId7ts53m4tI%2B90FtgrRXxlLw4S662lqbfGtdxER7YmvQI73ItyBiQOVm4dQnpCZMhOkfWLW8X9bzo9JI%2BT8xMsC%2BukJddaf%2FUdbMS7lQEY2%2F9DhM32oxP4JrqX5pLEhJUOu71CvlKO0OAmTLSPTHXMzQ6ukHZ%2BApz0r9zVjb4oFTdSzpt7TiXJdTCuuIzZbg9Qti14l5SbPsQwhURjPajeiVx0KwZVT%2BONEfN7oucH5uWFFerePPQ9z3H2AXyRohgIpfLzoq8mS3hyr9FvOPckkEnhwsrDMFZ4TTKZg4RUq67vNwXjNIb7QWW%2FedMNCisMAGOqUB8VoE93p5RZ4JDsg6n13n4ZBpTucYRkdTuqgWwEWuEUh0x5f0umOEQuoHn3gSMTYvf6vM%2FPpeHLk0nkjNx5hangZO2VImbSXdrM2IPAlm1W2A7I%2BGfh2sogIyZpAoVLrCKKaDqOdHuDIpxNI%2FHZeoVNCeQH6fR91Ir8TPU%2BCAHLlbxF5oBc1m3ExxP6EKRMfhX5ouJX1ihQHY5K1ZRm84q5BJRKgC&X-Amz-Signature=f7ad9cbee01e6bcd6e848f9c511fafd9022a5bd7f2effe0f1020bef7a557bd0a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCTAZCE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxMaWEGZugyVjzKhSg4ESISl3xxzDEe62EwjXeCcr6PAiEAuYrd6cAntHpKq8n34mXvC%2FnfpKqZBE9%2BlzglkUXAzj8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLdPRqnWY%2BIL%2B5P%2BVSrcA4pscbprXU7FBhc2yW1EnHAvx2RFkgPKc0Kr2quz1z03oHpvlebonhQHEPiOL4mAWROqjUOSsk8KSbdiohG%2FxF3fKbQujzRSKYgBuwwNMzefdG47qai%2FGvA2aa0zhMH0hPEFrBeXAwEzDlye55Hz7C6jziQr6MJ0%2BsUdE426MJdmNfgRnjb4nR9x76HpWRsg07LBqZ%2Be1eUQEO5fJspzAXWNs8Yx4saSvtaRar79968O%2B1uh4AnRWfmWFPPqhDFrAVUuO5OcglPoajMyYYoAz9JljL%2F0q40agysd4xc7eMQMuaKjF3blPZx8Su4la%2FgTId7ts53m4tI%2B90FtgrRXxlLw4S662lqbfGtdxER7YmvQI73ItyBiQOVm4dQnpCZMhOkfWLW8X9bzo9JI%2BT8xMsC%2BukJddaf%2FUdbMS7lQEY2%2F9DhM32oxP4JrqX5pLEhJUOu71CvlKO0OAmTLSPTHXMzQ6ukHZ%2BApz0r9zVjb4oFTdSzpt7TiXJdTCuuIzZbg9Qti14l5SbPsQwhURjPajeiVx0KwZVT%2BONEfN7oucH5uWFFerePPQ9z3H2AXyRohgIpfLzoq8mS3hyr9FvOPckkEnhwsrDMFZ4TTKZg4RUq67vNwXjNIb7QWW%2FedMNCisMAGOqUB8VoE93p5RZ4JDsg6n13n4ZBpTucYRkdTuqgWwEWuEUh0x5f0umOEQuoHn3gSMTYvf6vM%2FPpeHLk0nkjNx5hangZO2VImbSXdrM2IPAlm1W2A7I%2BGfh2sogIyZpAoVLrCKKaDqOdHuDIpxNI%2FHZeoVNCeQH6fR91Ir8TPU%2BCAHLlbxF5oBc1m3ExxP6EKRMfhX5ouJX1ihQHY5K1ZRm84q5BJRKgC&X-Amz-Signature=6811243b3c4f42aede2dda273db5b37020105b4a112a0003c325a56da3960ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCTAZCE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxMaWEGZugyVjzKhSg4ESISl3xxzDEe62EwjXeCcr6PAiEAuYrd6cAntHpKq8n34mXvC%2FnfpKqZBE9%2BlzglkUXAzj8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLdPRqnWY%2BIL%2B5P%2BVSrcA4pscbprXU7FBhc2yW1EnHAvx2RFkgPKc0Kr2quz1z03oHpvlebonhQHEPiOL4mAWROqjUOSsk8KSbdiohG%2FxF3fKbQujzRSKYgBuwwNMzefdG47qai%2FGvA2aa0zhMH0hPEFrBeXAwEzDlye55Hz7C6jziQr6MJ0%2BsUdE426MJdmNfgRnjb4nR9x76HpWRsg07LBqZ%2Be1eUQEO5fJspzAXWNs8Yx4saSvtaRar79968O%2B1uh4AnRWfmWFPPqhDFrAVUuO5OcglPoajMyYYoAz9JljL%2F0q40agysd4xc7eMQMuaKjF3blPZx8Su4la%2FgTId7ts53m4tI%2B90FtgrRXxlLw4S662lqbfGtdxER7YmvQI73ItyBiQOVm4dQnpCZMhOkfWLW8X9bzo9JI%2BT8xMsC%2BukJddaf%2FUdbMS7lQEY2%2F9DhM32oxP4JrqX5pLEhJUOu71CvlKO0OAmTLSPTHXMzQ6ukHZ%2BApz0r9zVjb4oFTdSzpt7TiXJdTCuuIzZbg9Qti14l5SbPsQwhURjPajeiVx0KwZVT%2BONEfN7oucH5uWFFerePPQ9z3H2AXyRohgIpfLzoq8mS3hyr9FvOPckkEnhwsrDMFZ4TTKZg4RUq67vNwXjNIb7QWW%2FedMNCisMAGOqUB8VoE93p5RZ4JDsg6n13n4ZBpTucYRkdTuqgWwEWuEUh0x5f0umOEQuoHn3gSMTYvf6vM%2FPpeHLk0nkjNx5hangZO2VImbSXdrM2IPAlm1W2A7I%2BGfh2sogIyZpAoVLrCKKaDqOdHuDIpxNI%2FHZeoVNCeQH6fR91Ir8TPU%2BCAHLlbxF5oBc1m3ExxP6EKRMfhX5ouJX1ihQHY5K1ZRm84q5BJRKgC&X-Amz-Signature=b3f76ba2cf39365796ab03b5703ada003b205c63a20ea2f44d0967713590824a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCTAZCE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxMaWEGZugyVjzKhSg4ESISl3xxzDEe62EwjXeCcr6PAiEAuYrd6cAntHpKq8n34mXvC%2FnfpKqZBE9%2BlzglkUXAzj8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLdPRqnWY%2BIL%2B5P%2BVSrcA4pscbprXU7FBhc2yW1EnHAvx2RFkgPKc0Kr2quz1z03oHpvlebonhQHEPiOL4mAWROqjUOSsk8KSbdiohG%2FxF3fKbQujzRSKYgBuwwNMzefdG47qai%2FGvA2aa0zhMH0hPEFrBeXAwEzDlye55Hz7C6jziQr6MJ0%2BsUdE426MJdmNfgRnjb4nR9x76HpWRsg07LBqZ%2Be1eUQEO5fJspzAXWNs8Yx4saSvtaRar79968O%2B1uh4AnRWfmWFPPqhDFrAVUuO5OcglPoajMyYYoAz9JljL%2F0q40agysd4xc7eMQMuaKjF3blPZx8Su4la%2FgTId7ts53m4tI%2B90FtgrRXxlLw4S662lqbfGtdxER7YmvQI73ItyBiQOVm4dQnpCZMhOkfWLW8X9bzo9JI%2BT8xMsC%2BukJddaf%2FUdbMS7lQEY2%2F9DhM32oxP4JrqX5pLEhJUOu71CvlKO0OAmTLSPTHXMzQ6ukHZ%2BApz0r9zVjb4oFTdSzpt7TiXJdTCuuIzZbg9Qti14l5SbPsQwhURjPajeiVx0KwZVT%2BONEfN7oucH5uWFFerePPQ9z3H2AXyRohgIpfLzoq8mS3hyr9FvOPckkEnhwsrDMFZ4TTKZg4RUq67vNwXjNIb7QWW%2FedMNCisMAGOqUB8VoE93p5RZ4JDsg6n13n4ZBpTucYRkdTuqgWwEWuEUh0x5f0umOEQuoHn3gSMTYvf6vM%2FPpeHLk0nkjNx5hangZO2VImbSXdrM2IPAlm1W2A7I%2BGfh2sogIyZpAoVLrCKKaDqOdHuDIpxNI%2FHZeoVNCeQH6fR91Ir8TPU%2BCAHLlbxF5oBc1m3ExxP6EKRMfhX5ouJX1ihQHY5K1ZRm84q5BJRKgC&X-Amz-Signature=a11be2348dc67e6838a4fda3605d98bfe6a69089e0fcc93af9c78b9116573d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
