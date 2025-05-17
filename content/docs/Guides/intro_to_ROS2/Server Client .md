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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJ2FIV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHuZQaEEPj9vkb40P9bU3XQlWiSaXyaRqipW5K%2FVPowIgdEM5onmUCVFBIjOy8pRLFT9TOYt1vTO1Uxof9MLUON4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDRI0Cru7Zvy%2BRxvbircA4YmJBZRcOu0E1A1Lg8J%2F7bTV0CEotnTvUWy154o8U38gjabpaH0O%2B6FVhRZBp%2FCkOqiTKT%2F5F%2B%2Frgryj0TVFsBRmv3fK7Hagnji4vUnBYagCCmm5mSZ0062Lik%2FaYAFvcldMUJYBZXHbAhl7Yg5fyWJZ%2Bh59r1QKkEs890Z1KCWc8MyTsvPnbZeT4i%2FvZTUsORtgCumEXIYjKX4SSCRnrlDga2QY6dNn4NMoprxbWuvrzOt3IRqxL2Gp57Xke3pQqHeKI53g%2FfYtHJtkGvE%2FeCu1CnLNQzG5A%2BTIMFPl4fL%2FdxZWzCsAjusgtifx92r%2B3Y6t8uA0wQo%2FX%2F4NPCSaIYqKwMWE9Wd73c2DacW2TIwoPpzwDpexY8HywK6BBQszoM33PFUhCe08Bb5uluys02ipkttxPyxYXMbgM1weIWFn5leWE%2BZ6Th6ZHlybc2aE1wAmqY3tr7JCpLFWrSMeI7f4OdT5Z1iCmDvbRAYCUt5X9lbYylV7t1xlqxxxYIbFPl%2FYNjtiRtPwH6f0xD202yu3xbmP1yaz%2BB7Cgq7dac0mW4B%2F92zDdzaBGwGSM0OI83eNRFEhrc4FJT4qJJK2ld%2FSVIto1Yqnt4YpRT7Ta%2FaPhSvkRt1co48pMrBMMufosEGOqUBPPakRprGRFaNQKMbnvGpMJmOEv0Fn3n1twMuuNm%2F%2B5S6WcncSUNny2Hheh%2BfyhIKwyk%2BxKOEEKRZlsIMiMxHhSy7Ot6OBj2jlbF3Q9nUrt%2BuCWEs4il8tfY%2F1P3Cz8ptQCUqAv1SyROPWaBiCB94KloPlZq7FWks8lD9NjNe7FjtAXYng4S3ghvZWAPCDlCDUB6vKAWTC71beJNwGTl4YoJo5%2FJJ&X-Amz-Signature=5bc37c8ab3a18ed4c05093b843ce696ea87618f36df127118df298ff0f3e449f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJ2FIV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHuZQaEEPj9vkb40P9bU3XQlWiSaXyaRqipW5K%2FVPowIgdEM5onmUCVFBIjOy8pRLFT9TOYt1vTO1Uxof9MLUON4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDRI0Cru7Zvy%2BRxvbircA4YmJBZRcOu0E1A1Lg8J%2F7bTV0CEotnTvUWy154o8U38gjabpaH0O%2B6FVhRZBp%2FCkOqiTKT%2F5F%2B%2Frgryj0TVFsBRmv3fK7Hagnji4vUnBYagCCmm5mSZ0062Lik%2FaYAFvcldMUJYBZXHbAhl7Yg5fyWJZ%2Bh59r1QKkEs890Z1KCWc8MyTsvPnbZeT4i%2FvZTUsORtgCumEXIYjKX4SSCRnrlDga2QY6dNn4NMoprxbWuvrzOt3IRqxL2Gp57Xke3pQqHeKI53g%2FfYtHJtkGvE%2FeCu1CnLNQzG5A%2BTIMFPl4fL%2FdxZWzCsAjusgtifx92r%2B3Y6t8uA0wQo%2FX%2F4NPCSaIYqKwMWE9Wd73c2DacW2TIwoPpzwDpexY8HywK6BBQszoM33PFUhCe08Bb5uluys02ipkttxPyxYXMbgM1weIWFn5leWE%2BZ6Th6ZHlybc2aE1wAmqY3tr7JCpLFWrSMeI7f4OdT5Z1iCmDvbRAYCUt5X9lbYylV7t1xlqxxxYIbFPl%2FYNjtiRtPwH6f0xD202yu3xbmP1yaz%2BB7Cgq7dac0mW4B%2F92zDdzaBGwGSM0OI83eNRFEhrc4FJT4qJJK2ld%2FSVIto1Yqnt4YpRT7Ta%2FaPhSvkRt1co48pMrBMMufosEGOqUBPPakRprGRFaNQKMbnvGpMJmOEv0Fn3n1twMuuNm%2F%2B5S6WcncSUNny2Hheh%2BfyhIKwyk%2BxKOEEKRZlsIMiMxHhSy7Ot6OBj2jlbF3Q9nUrt%2BuCWEs4il8tfY%2F1P3Cz8ptQCUqAv1SyROPWaBiCB94KloPlZq7FWks8lD9NjNe7FjtAXYng4S3ghvZWAPCDlCDUB6vKAWTC71beJNwGTl4YoJo5%2FJJ&X-Amz-Signature=e89ef30f637f2ae7564de8ed8217720600b341edcc8c0a899ff434775b97c057&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJ2FIV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHuZQaEEPj9vkb40P9bU3XQlWiSaXyaRqipW5K%2FVPowIgdEM5onmUCVFBIjOy8pRLFT9TOYt1vTO1Uxof9MLUON4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDRI0Cru7Zvy%2BRxvbircA4YmJBZRcOu0E1A1Lg8J%2F7bTV0CEotnTvUWy154o8U38gjabpaH0O%2B6FVhRZBp%2FCkOqiTKT%2F5F%2B%2Frgryj0TVFsBRmv3fK7Hagnji4vUnBYagCCmm5mSZ0062Lik%2FaYAFvcldMUJYBZXHbAhl7Yg5fyWJZ%2Bh59r1QKkEs890Z1KCWc8MyTsvPnbZeT4i%2FvZTUsORtgCumEXIYjKX4SSCRnrlDga2QY6dNn4NMoprxbWuvrzOt3IRqxL2Gp57Xke3pQqHeKI53g%2FfYtHJtkGvE%2FeCu1CnLNQzG5A%2BTIMFPl4fL%2FdxZWzCsAjusgtifx92r%2B3Y6t8uA0wQo%2FX%2F4NPCSaIYqKwMWE9Wd73c2DacW2TIwoPpzwDpexY8HywK6BBQszoM33PFUhCe08Bb5uluys02ipkttxPyxYXMbgM1weIWFn5leWE%2BZ6Th6ZHlybc2aE1wAmqY3tr7JCpLFWrSMeI7f4OdT5Z1iCmDvbRAYCUt5X9lbYylV7t1xlqxxxYIbFPl%2FYNjtiRtPwH6f0xD202yu3xbmP1yaz%2BB7Cgq7dac0mW4B%2F92zDdzaBGwGSM0OI83eNRFEhrc4FJT4qJJK2ld%2FSVIto1Yqnt4YpRT7Ta%2FaPhSvkRt1co48pMrBMMufosEGOqUBPPakRprGRFaNQKMbnvGpMJmOEv0Fn3n1twMuuNm%2F%2B5S6WcncSUNny2Hheh%2BfyhIKwyk%2BxKOEEKRZlsIMiMxHhSy7Ot6OBj2jlbF3Q9nUrt%2BuCWEs4il8tfY%2F1P3Cz8ptQCUqAv1SyROPWaBiCB94KloPlZq7FWks8lD9NjNe7FjtAXYng4S3ghvZWAPCDlCDUB6vKAWTC71beJNwGTl4YoJo5%2FJJ&X-Amz-Signature=e802297cecfa6b60d3a1df6e9af3264612bd282fab152ab69fcbc0660684a06e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJ2FIV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHuZQaEEPj9vkb40P9bU3XQlWiSaXyaRqipW5K%2FVPowIgdEM5onmUCVFBIjOy8pRLFT9TOYt1vTO1Uxof9MLUON4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDRI0Cru7Zvy%2BRxvbircA4YmJBZRcOu0E1A1Lg8J%2F7bTV0CEotnTvUWy154o8U38gjabpaH0O%2B6FVhRZBp%2FCkOqiTKT%2F5F%2B%2Frgryj0TVFsBRmv3fK7Hagnji4vUnBYagCCmm5mSZ0062Lik%2FaYAFvcldMUJYBZXHbAhl7Yg5fyWJZ%2Bh59r1QKkEs890Z1KCWc8MyTsvPnbZeT4i%2FvZTUsORtgCumEXIYjKX4SSCRnrlDga2QY6dNn4NMoprxbWuvrzOt3IRqxL2Gp57Xke3pQqHeKI53g%2FfYtHJtkGvE%2FeCu1CnLNQzG5A%2BTIMFPl4fL%2FdxZWzCsAjusgtifx92r%2B3Y6t8uA0wQo%2FX%2F4NPCSaIYqKwMWE9Wd73c2DacW2TIwoPpzwDpexY8HywK6BBQszoM33PFUhCe08Bb5uluys02ipkttxPyxYXMbgM1weIWFn5leWE%2BZ6Th6ZHlybc2aE1wAmqY3tr7JCpLFWrSMeI7f4OdT5Z1iCmDvbRAYCUt5X9lbYylV7t1xlqxxxYIbFPl%2FYNjtiRtPwH6f0xD202yu3xbmP1yaz%2BB7Cgq7dac0mW4B%2F92zDdzaBGwGSM0OI83eNRFEhrc4FJT4qJJK2ld%2FSVIto1Yqnt4YpRT7Ta%2FaPhSvkRt1co48pMrBMMufosEGOqUBPPakRprGRFaNQKMbnvGpMJmOEv0Fn3n1twMuuNm%2F%2B5S6WcncSUNny2Hheh%2BfyhIKwyk%2BxKOEEKRZlsIMiMxHhSy7Ot6OBj2jlbF3Q9nUrt%2BuCWEs4il8tfY%2F1P3Cz8ptQCUqAv1SyROPWaBiCB94KloPlZq7FWks8lD9NjNe7FjtAXYng4S3ghvZWAPCDlCDUB6vKAWTC71beJNwGTl4YoJo5%2FJJ&X-Amz-Signature=58c162c76693326eaba4d78589530c9c04d77c2f897d32ea7686cb75bf2f8d79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJ2FIV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHuZQaEEPj9vkb40P9bU3XQlWiSaXyaRqipW5K%2FVPowIgdEM5onmUCVFBIjOy8pRLFT9TOYt1vTO1Uxof9MLUON4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDRI0Cru7Zvy%2BRxvbircA4YmJBZRcOu0E1A1Lg8J%2F7bTV0CEotnTvUWy154o8U38gjabpaH0O%2B6FVhRZBp%2FCkOqiTKT%2F5F%2B%2Frgryj0TVFsBRmv3fK7Hagnji4vUnBYagCCmm5mSZ0062Lik%2FaYAFvcldMUJYBZXHbAhl7Yg5fyWJZ%2Bh59r1QKkEs890Z1KCWc8MyTsvPnbZeT4i%2FvZTUsORtgCumEXIYjKX4SSCRnrlDga2QY6dNn4NMoprxbWuvrzOt3IRqxL2Gp57Xke3pQqHeKI53g%2FfYtHJtkGvE%2FeCu1CnLNQzG5A%2BTIMFPl4fL%2FdxZWzCsAjusgtifx92r%2B3Y6t8uA0wQo%2FX%2F4NPCSaIYqKwMWE9Wd73c2DacW2TIwoPpzwDpexY8HywK6BBQszoM33PFUhCe08Bb5uluys02ipkttxPyxYXMbgM1weIWFn5leWE%2BZ6Th6ZHlybc2aE1wAmqY3tr7JCpLFWrSMeI7f4OdT5Z1iCmDvbRAYCUt5X9lbYylV7t1xlqxxxYIbFPl%2FYNjtiRtPwH6f0xD202yu3xbmP1yaz%2BB7Cgq7dac0mW4B%2F92zDdzaBGwGSM0OI83eNRFEhrc4FJT4qJJK2ld%2FSVIto1Yqnt4YpRT7Ta%2FaPhSvkRt1co48pMrBMMufosEGOqUBPPakRprGRFaNQKMbnvGpMJmOEv0Fn3n1twMuuNm%2F%2B5S6WcncSUNny2Hheh%2BfyhIKwyk%2BxKOEEKRZlsIMiMxHhSy7Ot6OBj2jlbF3Q9nUrt%2BuCWEs4il8tfY%2F1P3Cz8ptQCUqAv1SyROPWaBiCB94KloPlZq7FWks8lD9NjNe7FjtAXYng4S3ghvZWAPCDlCDUB6vKAWTC71beJNwGTl4YoJo5%2FJJ&X-Amz-Signature=b9be8a51408bea395f7ac14ff0c3606c36ee0569b09c326d11f41ffc0fedd033&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
