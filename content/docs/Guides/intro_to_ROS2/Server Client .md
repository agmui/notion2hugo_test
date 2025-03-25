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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZX6OFGU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8JJ52E1fXqNE06fgtRQOWZbFsQrtxIau4Sq%2FZF%2B8fPAiAdh8OvrfACjEMSu5G1H%2Bbng21QhKoMp0KR5irl4aQ35ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMby%2Ft3QGGXFiJCzEPKtwD8Hm5vlZQkm0J7RF%2F5t0tSr82rxJ6l%2BEdTEUZDAoyXbaPXJYKUdfD83UvNR6EkLQnZzRPsK0s9fGhqpYdargG%2FOHyY5jhy76rqOjQbbyDqwgzdRo64fS2uLYM35o4y772zlv9LWp8dnFvycBbypK7dSPtJmUYdOMXJEmX2rc5V7lT16ZwGFxeQqoYS9%2B7kqm5W3HGD709OQ4YQA78Yj0jw5eVEws90UPd6SSPCiVCx06JhvpI9J%2BDUv%2BwCms2A2Qxch%2F1790QE5%2BdjsUygCVuTaHdBFpmGgKwn1X4yoWsPS00hbKctRZNa38SNxfAyGlHwIpMiJmMxMswMxh0qxIgSGsokJA%2BXRJjF2jwPeF4hJGGyk8cApo7U3WaKH5NOdqAy1j%2FIGXT9LU6oiVgOh45af9DwuThGCEl0sMg2QW5LjyMgZVlueH%2FtiVgcxOUs2uK3MlT1wRUg2muGYlm8u4tcex%2Frr5qGPzdvZrIbxo3oLJTWB2IlTDd%2FTIZie9UwwapBt22jQyDOmDvwrUlRz1bTyRxK9rG%2Fd6y5WnBFMsXhUCHmcdd5mUiqeI9DT6yvyGTOCAqwPBkp8htZjdpuMXZeASPDrbuH7C8gttyv4o0Dwyr%2F%2FbgZ3uyzkD1A18wn86JvwY6pgFdPRXOKFCpRRK7bdO%2FE4rnt3XGnXilRGxM17eDKtizzJx3%2Ba%2Boug75vkzvY%2F8z6lRTVjudSDHvDwlw5cNIi1MwVthB05%2FGQKQfqn2cGtDYoIUJ%2FsTVvKlPCqRiDJ0LbQ1lsL5Nkc4fB4e%2FksVGI7x5u0Grxz9yRq1nzn%2BOUvdGPbk8OSU%2BLD9L96jJYByapDbmDLlMhPyy%2Bls0HcdaEFbiFd5N1E4R&X-Amz-Signature=48142c13febcc7b3e2326db9cb868eed796dc5ea8cf7adffa123aab570995cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZX6OFGU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8JJ52E1fXqNE06fgtRQOWZbFsQrtxIau4Sq%2FZF%2B8fPAiAdh8OvrfACjEMSu5G1H%2Bbng21QhKoMp0KR5irl4aQ35ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMby%2Ft3QGGXFiJCzEPKtwD8Hm5vlZQkm0J7RF%2F5t0tSr82rxJ6l%2BEdTEUZDAoyXbaPXJYKUdfD83UvNR6EkLQnZzRPsK0s9fGhqpYdargG%2FOHyY5jhy76rqOjQbbyDqwgzdRo64fS2uLYM35o4y772zlv9LWp8dnFvycBbypK7dSPtJmUYdOMXJEmX2rc5V7lT16ZwGFxeQqoYS9%2B7kqm5W3HGD709OQ4YQA78Yj0jw5eVEws90UPd6SSPCiVCx06JhvpI9J%2BDUv%2BwCms2A2Qxch%2F1790QE5%2BdjsUygCVuTaHdBFpmGgKwn1X4yoWsPS00hbKctRZNa38SNxfAyGlHwIpMiJmMxMswMxh0qxIgSGsokJA%2BXRJjF2jwPeF4hJGGyk8cApo7U3WaKH5NOdqAy1j%2FIGXT9LU6oiVgOh45af9DwuThGCEl0sMg2QW5LjyMgZVlueH%2FtiVgcxOUs2uK3MlT1wRUg2muGYlm8u4tcex%2Frr5qGPzdvZrIbxo3oLJTWB2IlTDd%2FTIZie9UwwapBt22jQyDOmDvwrUlRz1bTyRxK9rG%2Fd6y5WnBFMsXhUCHmcdd5mUiqeI9DT6yvyGTOCAqwPBkp8htZjdpuMXZeASPDrbuH7C8gttyv4o0Dwyr%2F%2FbgZ3uyzkD1A18wn86JvwY6pgFdPRXOKFCpRRK7bdO%2FE4rnt3XGnXilRGxM17eDKtizzJx3%2Ba%2Boug75vkzvY%2F8z6lRTVjudSDHvDwlw5cNIi1MwVthB05%2FGQKQfqn2cGtDYoIUJ%2FsTVvKlPCqRiDJ0LbQ1lsL5Nkc4fB4e%2FksVGI7x5u0Grxz9yRq1nzn%2BOUvdGPbk8OSU%2BLD9L96jJYByapDbmDLlMhPyy%2Bls0HcdaEFbiFd5N1E4R&X-Amz-Signature=b1a9a629735645297a9835c4f31f3166718ddc523434374c6e4ba582cbfefafe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZX6OFGU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8JJ52E1fXqNE06fgtRQOWZbFsQrtxIau4Sq%2FZF%2B8fPAiAdh8OvrfACjEMSu5G1H%2Bbng21QhKoMp0KR5irl4aQ35ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMby%2Ft3QGGXFiJCzEPKtwD8Hm5vlZQkm0J7RF%2F5t0tSr82rxJ6l%2BEdTEUZDAoyXbaPXJYKUdfD83UvNR6EkLQnZzRPsK0s9fGhqpYdargG%2FOHyY5jhy76rqOjQbbyDqwgzdRo64fS2uLYM35o4y772zlv9LWp8dnFvycBbypK7dSPtJmUYdOMXJEmX2rc5V7lT16ZwGFxeQqoYS9%2B7kqm5W3HGD709OQ4YQA78Yj0jw5eVEws90UPd6SSPCiVCx06JhvpI9J%2BDUv%2BwCms2A2Qxch%2F1790QE5%2BdjsUygCVuTaHdBFpmGgKwn1X4yoWsPS00hbKctRZNa38SNxfAyGlHwIpMiJmMxMswMxh0qxIgSGsokJA%2BXRJjF2jwPeF4hJGGyk8cApo7U3WaKH5NOdqAy1j%2FIGXT9LU6oiVgOh45af9DwuThGCEl0sMg2QW5LjyMgZVlueH%2FtiVgcxOUs2uK3MlT1wRUg2muGYlm8u4tcex%2Frr5qGPzdvZrIbxo3oLJTWB2IlTDd%2FTIZie9UwwapBt22jQyDOmDvwrUlRz1bTyRxK9rG%2Fd6y5WnBFMsXhUCHmcdd5mUiqeI9DT6yvyGTOCAqwPBkp8htZjdpuMXZeASPDrbuH7C8gttyv4o0Dwyr%2F%2FbgZ3uyzkD1A18wn86JvwY6pgFdPRXOKFCpRRK7bdO%2FE4rnt3XGnXilRGxM17eDKtizzJx3%2Ba%2Boug75vkzvY%2F8z6lRTVjudSDHvDwlw5cNIi1MwVthB05%2FGQKQfqn2cGtDYoIUJ%2FsTVvKlPCqRiDJ0LbQ1lsL5Nkc4fB4e%2FksVGI7x5u0Grxz9yRq1nzn%2BOUvdGPbk8OSU%2BLD9L96jJYByapDbmDLlMhPyy%2Bls0HcdaEFbiFd5N1E4R&X-Amz-Signature=6e3b66ba864d7331194a14ae484de401ae19016c090b72fd6b17e5cbfbd5eccb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZX6OFGU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8JJ52E1fXqNE06fgtRQOWZbFsQrtxIau4Sq%2FZF%2B8fPAiAdh8OvrfACjEMSu5G1H%2Bbng21QhKoMp0KR5irl4aQ35ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMby%2Ft3QGGXFiJCzEPKtwD8Hm5vlZQkm0J7RF%2F5t0tSr82rxJ6l%2BEdTEUZDAoyXbaPXJYKUdfD83UvNR6EkLQnZzRPsK0s9fGhqpYdargG%2FOHyY5jhy76rqOjQbbyDqwgzdRo64fS2uLYM35o4y772zlv9LWp8dnFvycBbypK7dSPtJmUYdOMXJEmX2rc5V7lT16ZwGFxeQqoYS9%2B7kqm5W3HGD709OQ4YQA78Yj0jw5eVEws90UPd6SSPCiVCx06JhvpI9J%2BDUv%2BwCms2A2Qxch%2F1790QE5%2BdjsUygCVuTaHdBFpmGgKwn1X4yoWsPS00hbKctRZNa38SNxfAyGlHwIpMiJmMxMswMxh0qxIgSGsokJA%2BXRJjF2jwPeF4hJGGyk8cApo7U3WaKH5NOdqAy1j%2FIGXT9LU6oiVgOh45af9DwuThGCEl0sMg2QW5LjyMgZVlueH%2FtiVgcxOUs2uK3MlT1wRUg2muGYlm8u4tcex%2Frr5qGPzdvZrIbxo3oLJTWB2IlTDd%2FTIZie9UwwapBt22jQyDOmDvwrUlRz1bTyRxK9rG%2Fd6y5WnBFMsXhUCHmcdd5mUiqeI9DT6yvyGTOCAqwPBkp8htZjdpuMXZeASPDrbuH7C8gttyv4o0Dwyr%2F%2FbgZ3uyzkD1A18wn86JvwY6pgFdPRXOKFCpRRK7bdO%2FE4rnt3XGnXilRGxM17eDKtizzJx3%2Ba%2Boug75vkzvY%2F8z6lRTVjudSDHvDwlw5cNIi1MwVthB05%2FGQKQfqn2cGtDYoIUJ%2FsTVvKlPCqRiDJ0LbQ1lsL5Nkc4fB4e%2FksVGI7x5u0Grxz9yRq1nzn%2BOUvdGPbk8OSU%2BLD9L96jJYByapDbmDLlMhPyy%2Bls0HcdaEFbiFd5N1E4R&X-Amz-Signature=25fa7afd3fccb5f71dabb3221c26f34b0d4258217b1ad719af49ef06a8bce5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZX6OFGU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8JJ52E1fXqNE06fgtRQOWZbFsQrtxIau4Sq%2FZF%2B8fPAiAdh8OvrfACjEMSu5G1H%2Bbng21QhKoMp0KR5irl4aQ35ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMby%2Ft3QGGXFiJCzEPKtwD8Hm5vlZQkm0J7RF%2F5t0tSr82rxJ6l%2BEdTEUZDAoyXbaPXJYKUdfD83UvNR6EkLQnZzRPsK0s9fGhqpYdargG%2FOHyY5jhy76rqOjQbbyDqwgzdRo64fS2uLYM35o4y772zlv9LWp8dnFvycBbypK7dSPtJmUYdOMXJEmX2rc5V7lT16ZwGFxeQqoYS9%2B7kqm5W3HGD709OQ4YQA78Yj0jw5eVEws90UPd6SSPCiVCx06JhvpI9J%2BDUv%2BwCms2A2Qxch%2F1790QE5%2BdjsUygCVuTaHdBFpmGgKwn1X4yoWsPS00hbKctRZNa38SNxfAyGlHwIpMiJmMxMswMxh0qxIgSGsokJA%2BXRJjF2jwPeF4hJGGyk8cApo7U3WaKH5NOdqAy1j%2FIGXT9LU6oiVgOh45af9DwuThGCEl0sMg2QW5LjyMgZVlueH%2FtiVgcxOUs2uK3MlT1wRUg2muGYlm8u4tcex%2Frr5qGPzdvZrIbxo3oLJTWB2IlTDd%2FTIZie9UwwapBt22jQyDOmDvwrUlRz1bTyRxK9rG%2Fd6y5WnBFMsXhUCHmcdd5mUiqeI9DT6yvyGTOCAqwPBkp8htZjdpuMXZeASPDrbuH7C8gttyv4o0Dwyr%2F%2FbgZ3uyzkD1A18wn86JvwY6pgFdPRXOKFCpRRK7bdO%2FE4rnt3XGnXilRGxM17eDKtizzJx3%2Ba%2Boug75vkzvY%2F8z6lRTVjudSDHvDwlw5cNIi1MwVthB05%2FGQKQfqn2cGtDYoIUJ%2FsTVvKlPCqRiDJ0LbQ1lsL5Nkc4fB4e%2FksVGI7x5u0Grxz9yRq1nzn%2BOUvdGPbk8OSU%2BLD9L96jJYByapDbmDLlMhPyy%2Bls0HcdaEFbiFd5N1E4R&X-Amz-Signature=d7abd5ebaed9f5814dc2cabff60e665e7d701dfe9f81c81bc2f0c09e43d00178&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
