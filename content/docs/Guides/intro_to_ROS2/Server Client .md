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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PFSLGA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDuwILJA7TI7c5Nsc4IdEKv51TJ99bBeCj39qDnmMg58wIgeXDESqwqjOtPIfUSCCDwuABg2RkEDoMLB6MGrAYSJpAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI8lQXLboMZyUzRHdircA%2FE6W8Ngg4ITgiKlb5B4G%2Bth1Eyxq5knylQswuLmS%2BPRTc84r%2BZwOdcSM4D1Y0q%2F0OxMbTcsOhGWGn5BOnmc%2BbS9tnPT1sZL1yLzlbtRbTEO6PoUrSnglEipHAeZ%2BIBgPaDO15mUr%2FpIKwjs8JC9dU8nc6TKgFUOW6Th07QRBh0MnDxFnV4TTdrf6LULcmldOL100x5wsB1hxy29%2B%2BMaaI6iwM9NErwN5DALELQH3aqaC56SodTcsKmVkEkgT2IVISGdGdUzwcwZyqeM1jwGROEewCT1zv%2BRe0H8em2UOg770kGxf9rI2ZflUOx72Q6yDK0i6aPYnxW3LdhNl%2BJAT%2Bq3Ty6vKYYmO5ph7hrWGvUPFjr7F%2FY4fHensBaULM2vqvdoJFj7tlpXzr817b94lsYCex9e%2FTXldWtw3EuYIQvTStdEfHumwhJBNpje2gO5SE5ij2%2BYztnm%2FjCt5GuwiwynFuv2GsBsodr32ggNb%2FIQRcQCWDJxP3SWOpx32iZ37UCi1FyjQm8qRFPr7rudN1UxKHFTMh%2BLv3puhM0OqoL%2BX%2BiIJatVFYiiWkbMqWoo8fvv1rCXhJbO9l%2FtsqEtx9FN8L9H63wNgQfLPvVgwnit%2FCwTkVBMk3iHE4reMI7Ow8QGOqUBwWq5IhuM2D8gummSgfGgl1LmAHA7k2k8sHNyZxx4KNO6W8eZuBsfD8B2xrXosIBo78VgOHoyIB%2FXHwAmFzNKzUHTMLy9kQ2pjUaz9Vj7z5MoHpsS%2B%2FivrBnBjFE1raI8ZX5KiVgUNkpdox1E1lncs42CqNgIdroFHp8OrgpW4ISdfFXoXlnBUfiARrr9JfPyUxuLGQhCd3mtrvO987LPD7MjW%2BNu&X-Amz-Signature=7d045e45888bcd3a3911767420c640cf6ae4178dcd03a0723c6338ad561158e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PFSLGA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDuwILJA7TI7c5Nsc4IdEKv51TJ99bBeCj39qDnmMg58wIgeXDESqwqjOtPIfUSCCDwuABg2RkEDoMLB6MGrAYSJpAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI8lQXLboMZyUzRHdircA%2FE6W8Ngg4ITgiKlb5B4G%2Bth1Eyxq5knylQswuLmS%2BPRTc84r%2BZwOdcSM4D1Y0q%2F0OxMbTcsOhGWGn5BOnmc%2BbS9tnPT1sZL1yLzlbtRbTEO6PoUrSnglEipHAeZ%2BIBgPaDO15mUr%2FpIKwjs8JC9dU8nc6TKgFUOW6Th07QRBh0MnDxFnV4TTdrf6LULcmldOL100x5wsB1hxy29%2B%2BMaaI6iwM9NErwN5DALELQH3aqaC56SodTcsKmVkEkgT2IVISGdGdUzwcwZyqeM1jwGROEewCT1zv%2BRe0H8em2UOg770kGxf9rI2ZflUOx72Q6yDK0i6aPYnxW3LdhNl%2BJAT%2Bq3Ty6vKYYmO5ph7hrWGvUPFjr7F%2FY4fHensBaULM2vqvdoJFj7tlpXzr817b94lsYCex9e%2FTXldWtw3EuYIQvTStdEfHumwhJBNpje2gO5SE5ij2%2BYztnm%2FjCt5GuwiwynFuv2GsBsodr32ggNb%2FIQRcQCWDJxP3SWOpx32iZ37UCi1FyjQm8qRFPr7rudN1UxKHFTMh%2BLv3puhM0OqoL%2BX%2BiIJatVFYiiWkbMqWoo8fvv1rCXhJbO9l%2FtsqEtx9FN8L9H63wNgQfLPvVgwnit%2FCwTkVBMk3iHE4reMI7Ow8QGOqUBwWq5IhuM2D8gummSgfGgl1LmAHA7k2k8sHNyZxx4KNO6W8eZuBsfD8B2xrXosIBo78VgOHoyIB%2FXHwAmFzNKzUHTMLy9kQ2pjUaz9Vj7z5MoHpsS%2B%2FivrBnBjFE1raI8ZX5KiVgUNkpdox1E1lncs42CqNgIdroFHp8OrgpW4ISdfFXoXlnBUfiARrr9JfPyUxuLGQhCd3mtrvO987LPD7MjW%2BNu&X-Amz-Signature=0138733938d2a78ddf2c718c11bbba0368034ee8138d54daed4c0fb538b0dfa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PFSLGA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDuwILJA7TI7c5Nsc4IdEKv51TJ99bBeCj39qDnmMg58wIgeXDESqwqjOtPIfUSCCDwuABg2RkEDoMLB6MGrAYSJpAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI8lQXLboMZyUzRHdircA%2FE6W8Ngg4ITgiKlb5B4G%2Bth1Eyxq5knylQswuLmS%2BPRTc84r%2BZwOdcSM4D1Y0q%2F0OxMbTcsOhGWGn5BOnmc%2BbS9tnPT1sZL1yLzlbtRbTEO6PoUrSnglEipHAeZ%2BIBgPaDO15mUr%2FpIKwjs8JC9dU8nc6TKgFUOW6Th07QRBh0MnDxFnV4TTdrf6LULcmldOL100x5wsB1hxy29%2B%2BMaaI6iwM9NErwN5DALELQH3aqaC56SodTcsKmVkEkgT2IVISGdGdUzwcwZyqeM1jwGROEewCT1zv%2BRe0H8em2UOg770kGxf9rI2ZflUOx72Q6yDK0i6aPYnxW3LdhNl%2BJAT%2Bq3Ty6vKYYmO5ph7hrWGvUPFjr7F%2FY4fHensBaULM2vqvdoJFj7tlpXzr817b94lsYCex9e%2FTXldWtw3EuYIQvTStdEfHumwhJBNpje2gO5SE5ij2%2BYztnm%2FjCt5GuwiwynFuv2GsBsodr32ggNb%2FIQRcQCWDJxP3SWOpx32iZ37UCi1FyjQm8qRFPr7rudN1UxKHFTMh%2BLv3puhM0OqoL%2BX%2BiIJatVFYiiWkbMqWoo8fvv1rCXhJbO9l%2FtsqEtx9FN8L9H63wNgQfLPvVgwnit%2FCwTkVBMk3iHE4reMI7Ow8QGOqUBwWq5IhuM2D8gummSgfGgl1LmAHA7k2k8sHNyZxx4KNO6W8eZuBsfD8B2xrXosIBo78VgOHoyIB%2FXHwAmFzNKzUHTMLy9kQ2pjUaz9Vj7z5MoHpsS%2B%2FivrBnBjFE1raI8ZX5KiVgUNkpdox1E1lncs42CqNgIdroFHp8OrgpW4ISdfFXoXlnBUfiARrr9JfPyUxuLGQhCd3mtrvO987LPD7MjW%2BNu&X-Amz-Signature=ceab4146296b5905afb94af1750c9361dde5fa097819c4962174716e52c3153f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PFSLGA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDuwILJA7TI7c5Nsc4IdEKv51TJ99bBeCj39qDnmMg58wIgeXDESqwqjOtPIfUSCCDwuABg2RkEDoMLB6MGrAYSJpAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI8lQXLboMZyUzRHdircA%2FE6W8Ngg4ITgiKlb5B4G%2Bth1Eyxq5knylQswuLmS%2BPRTc84r%2BZwOdcSM4D1Y0q%2F0OxMbTcsOhGWGn5BOnmc%2BbS9tnPT1sZL1yLzlbtRbTEO6PoUrSnglEipHAeZ%2BIBgPaDO15mUr%2FpIKwjs8JC9dU8nc6TKgFUOW6Th07QRBh0MnDxFnV4TTdrf6LULcmldOL100x5wsB1hxy29%2B%2BMaaI6iwM9NErwN5DALELQH3aqaC56SodTcsKmVkEkgT2IVISGdGdUzwcwZyqeM1jwGROEewCT1zv%2BRe0H8em2UOg770kGxf9rI2ZflUOx72Q6yDK0i6aPYnxW3LdhNl%2BJAT%2Bq3Ty6vKYYmO5ph7hrWGvUPFjr7F%2FY4fHensBaULM2vqvdoJFj7tlpXzr817b94lsYCex9e%2FTXldWtw3EuYIQvTStdEfHumwhJBNpje2gO5SE5ij2%2BYztnm%2FjCt5GuwiwynFuv2GsBsodr32ggNb%2FIQRcQCWDJxP3SWOpx32iZ37UCi1FyjQm8qRFPr7rudN1UxKHFTMh%2BLv3puhM0OqoL%2BX%2BiIJatVFYiiWkbMqWoo8fvv1rCXhJbO9l%2FtsqEtx9FN8L9H63wNgQfLPvVgwnit%2FCwTkVBMk3iHE4reMI7Ow8QGOqUBwWq5IhuM2D8gummSgfGgl1LmAHA7k2k8sHNyZxx4KNO6W8eZuBsfD8B2xrXosIBo78VgOHoyIB%2FXHwAmFzNKzUHTMLy9kQ2pjUaz9Vj7z5MoHpsS%2B%2FivrBnBjFE1raI8ZX5KiVgUNkpdox1E1lncs42CqNgIdroFHp8OrgpW4ISdfFXoXlnBUfiARrr9JfPyUxuLGQhCd3mtrvO987LPD7MjW%2BNu&X-Amz-Signature=fa3301d018edb3e040da24b227a611da79f4a29630065894f4bb422613c73441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PFSLGA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDuwILJA7TI7c5Nsc4IdEKv51TJ99bBeCj39qDnmMg58wIgeXDESqwqjOtPIfUSCCDwuABg2RkEDoMLB6MGrAYSJpAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI8lQXLboMZyUzRHdircA%2FE6W8Ngg4ITgiKlb5B4G%2Bth1Eyxq5knylQswuLmS%2BPRTc84r%2BZwOdcSM4D1Y0q%2F0OxMbTcsOhGWGn5BOnmc%2BbS9tnPT1sZL1yLzlbtRbTEO6PoUrSnglEipHAeZ%2BIBgPaDO15mUr%2FpIKwjs8JC9dU8nc6TKgFUOW6Th07QRBh0MnDxFnV4TTdrf6LULcmldOL100x5wsB1hxy29%2B%2BMaaI6iwM9NErwN5DALELQH3aqaC56SodTcsKmVkEkgT2IVISGdGdUzwcwZyqeM1jwGROEewCT1zv%2BRe0H8em2UOg770kGxf9rI2ZflUOx72Q6yDK0i6aPYnxW3LdhNl%2BJAT%2Bq3Ty6vKYYmO5ph7hrWGvUPFjr7F%2FY4fHensBaULM2vqvdoJFj7tlpXzr817b94lsYCex9e%2FTXldWtw3EuYIQvTStdEfHumwhJBNpje2gO5SE5ij2%2BYztnm%2FjCt5GuwiwynFuv2GsBsodr32ggNb%2FIQRcQCWDJxP3SWOpx32iZ37UCi1FyjQm8qRFPr7rudN1UxKHFTMh%2BLv3puhM0OqoL%2BX%2BiIJatVFYiiWkbMqWoo8fvv1rCXhJbO9l%2FtsqEtx9FN8L9H63wNgQfLPvVgwnit%2FCwTkVBMk3iHE4reMI7Ow8QGOqUBwWq5IhuM2D8gummSgfGgl1LmAHA7k2k8sHNyZxx4KNO6W8eZuBsfD8B2xrXosIBo78VgOHoyIB%2FXHwAmFzNKzUHTMLy9kQ2pjUaz9Vj7z5MoHpsS%2B%2FivrBnBjFE1raI8ZX5KiVgUNkpdox1E1lncs42CqNgIdroFHp8OrgpW4ISdfFXoXlnBUfiARrr9JfPyUxuLGQhCd3mtrvO987LPD7MjW%2BNu&X-Amz-Signature=61501797e4f1ce6009ba9856af312f11df9e8882446c1a48e953d10096b7b5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
