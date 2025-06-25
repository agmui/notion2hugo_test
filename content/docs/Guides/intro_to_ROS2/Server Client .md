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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5FRCCY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCfDkiM0eOin6UqGISfyfjeISUgo0XzfPDc4wUQw4eDqgIgQCY%2BJXcrg%2Bmmf24LICxgiqbe2zmfazJEzgtV2tuUl0wq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKsz0SsKCLwe7Twg%2BircA5gxFyc7QvjPX8syyYB9DfvDK2dqm8gkrKeFp7NZ2%2FGXw2zO5PwJ8RGcZB6%2FFQoKpHtOZAufH8G93N8pcqRVj5rCXYzttX5hD%2BZf7Ykoc2XNEHoPoeuG1rPFPZ%2F3EQydOL9ezktXyiSDvAZwEfLgO%2FzhK4hhi9NZsg0ygwkRPRd3SowSFM8RNKrANpVxnOfcC47INXnBiL3AblRjtR%2FpQ%2F4Iklp3Y%2F1VpGanSmU3fQOYpnBXbJxaT2Vz7VRLyiBAE2HRuUGD9CLAQ%2B52lY%2BkGBNBq2jV5rBtHxvOahnLEqCgLzKr2lXxaZ1i11UhK%2F3LxgchoLfdMjFvZ4uvYqUyiRXzQx%2FI%2Fwnu4PIZsM9iyNnJF46gFaivUsdePjG5Jaqt77am1CjIFZzcvftDZOAEfTmj6owvNE8Qb0h1UQa3gdzev7oBtknbn5g5woFF7iUlDYzEB8eYfSUERAwOx%2BVnVsuojTxudiEPyZXx60OEwptKY%2B3EIhT0LjVaVqZilUu2yGQDhE4PKxTCWOi2ZNibepHaKtTDhP1j9cykXGKOB%2F5sG5BSV4d%2BigkhUpYHALC17mG3tKwZPJ2cLPxxAnDB92MpK4rSi%2FTLPz700DjbhKW%2B7%2BDWIxU2hSwieMHCMKGQ78IGOqUBnEU98pOV4b5fdX6waSvqD33hiHDuP5ucQ7qhJlrL3GElCfDFGzjXMoFELl7U%2FX%2BbJweB%2FYtNox%2BNa54SlA7ZYdJ37pgTZltVBfDMdZUlEf82p9v70CU7WoJLvX9spIyeRD%2BrmmgfXwgwKbZd7REZ3w0gZoX2XKL%2Bli%2FbZ1Id71ORfJ93Kn8Ze7jTDgexuOtM0Rq7MWgRAsdF94ciUtT%2F4uw4tRok&X-Amz-Signature=5ab5db21eee533236493365af3a01b72f3adff8c0b4cb2119a701531ad2f85a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5FRCCY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCfDkiM0eOin6UqGISfyfjeISUgo0XzfPDc4wUQw4eDqgIgQCY%2BJXcrg%2Bmmf24LICxgiqbe2zmfazJEzgtV2tuUl0wq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKsz0SsKCLwe7Twg%2BircA5gxFyc7QvjPX8syyYB9DfvDK2dqm8gkrKeFp7NZ2%2FGXw2zO5PwJ8RGcZB6%2FFQoKpHtOZAufH8G93N8pcqRVj5rCXYzttX5hD%2BZf7Ykoc2XNEHoPoeuG1rPFPZ%2F3EQydOL9ezktXyiSDvAZwEfLgO%2FzhK4hhi9NZsg0ygwkRPRd3SowSFM8RNKrANpVxnOfcC47INXnBiL3AblRjtR%2FpQ%2F4Iklp3Y%2F1VpGanSmU3fQOYpnBXbJxaT2Vz7VRLyiBAE2HRuUGD9CLAQ%2B52lY%2BkGBNBq2jV5rBtHxvOahnLEqCgLzKr2lXxaZ1i11UhK%2F3LxgchoLfdMjFvZ4uvYqUyiRXzQx%2FI%2Fwnu4PIZsM9iyNnJF46gFaivUsdePjG5Jaqt77am1CjIFZzcvftDZOAEfTmj6owvNE8Qb0h1UQa3gdzev7oBtknbn5g5woFF7iUlDYzEB8eYfSUERAwOx%2BVnVsuojTxudiEPyZXx60OEwptKY%2B3EIhT0LjVaVqZilUu2yGQDhE4PKxTCWOi2ZNibepHaKtTDhP1j9cykXGKOB%2F5sG5BSV4d%2BigkhUpYHALC17mG3tKwZPJ2cLPxxAnDB92MpK4rSi%2FTLPz700DjbhKW%2B7%2BDWIxU2hSwieMHCMKGQ78IGOqUBnEU98pOV4b5fdX6waSvqD33hiHDuP5ucQ7qhJlrL3GElCfDFGzjXMoFELl7U%2FX%2BbJweB%2FYtNox%2BNa54SlA7ZYdJ37pgTZltVBfDMdZUlEf82p9v70CU7WoJLvX9spIyeRD%2BrmmgfXwgwKbZd7REZ3w0gZoX2XKL%2Bli%2FbZ1Id71ORfJ93Kn8Ze7jTDgexuOtM0Rq7MWgRAsdF94ciUtT%2F4uw4tRok&X-Amz-Signature=bee9472ab9260855b3397ac5419ce897aac7c0bb2ee23ab3c523d8a5813581e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5FRCCY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCfDkiM0eOin6UqGISfyfjeISUgo0XzfPDc4wUQw4eDqgIgQCY%2BJXcrg%2Bmmf24LICxgiqbe2zmfazJEzgtV2tuUl0wq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKsz0SsKCLwe7Twg%2BircA5gxFyc7QvjPX8syyYB9DfvDK2dqm8gkrKeFp7NZ2%2FGXw2zO5PwJ8RGcZB6%2FFQoKpHtOZAufH8G93N8pcqRVj5rCXYzttX5hD%2BZf7Ykoc2XNEHoPoeuG1rPFPZ%2F3EQydOL9ezktXyiSDvAZwEfLgO%2FzhK4hhi9NZsg0ygwkRPRd3SowSFM8RNKrANpVxnOfcC47INXnBiL3AblRjtR%2FpQ%2F4Iklp3Y%2F1VpGanSmU3fQOYpnBXbJxaT2Vz7VRLyiBAE2HRuUGD9CLAQ%2B52lY%2BkGBNBq2jV5rBtHxvOahnLEqCgLzKr2lXxaZ1i11UhK%2F3LxgchoLfdMjFvZ4uvYqUyiRXzQx%2FI%2Fwnu4PIZsM9iyNnJF46gFaivUsdePjG5Jaqt77am1CjIFZzcvftDZOAEfTmj6owvNE8Qb0h1UQa3gdzev7oBtknbn5g5woFF7iUlDYzEB8eYfSUERAwOx%2BVnVsuojTxudiEPyZXx60OEwptKY%2B3EIhT0LjVaVqZilUu2yGQDhE4PKxTCWOi2ZNibepHaKtTDhP1j9cykXGKOB%2F5sG5BSV4d%2BigkhUpYHALC17mG3tKwZPJ2cLPxxAnDB92MpK4rSi%2FTLPz700DjbhKW%2B7%2BDWIxU2hSwieMHCMKGQ78IGOqUBnEU98pOV4b5fdX6waSvqD33hiHDuP5ucQ7qhJlrL3GElCfDFGzjXMoFELl7U%2FX%2BbJweB%2FYtNox%2BNa54SlA7ZYdJ37pgTZltVBfDMdZUlEf82p9v70CU7WoJLvX9spIyeRD%2BrmmgfXwgwKbZd7REZ3w0gZoX2XKL%2Bli%2FbZ1Id71ORfJ93Kn8Ze7jTDgexuOtM0Rq7MWgRAsdF94ciUtT%2F4uw4tRok&X-Amz-Signature=957304a6d140f4a310cf4a5962c63572521fc7f79e825653df08c91f149e7a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5FRCCY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCfDkiM0eOin6UqGISfyfjeISUgo0XzfPDc4wUQw4eDqgIgQCY%2BJXcrg%2Bmmf24LICxgiqbe2zmfazJEzgtV2tuUl0wq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKsz0SsKCLwe7Twg%2BircA5gxFyc7QvjPX8syyYB9DfvDK2dqm8gkrKeFp7NZ2%2FGXw2zO5PwJ8RGcZB6%2FFQoKpHtOZAufH8G93N8pcqRVj5rCXYzttX5hD%2BZf7Ykoc2XNEHoPoeuG1rPFPZ%2F3EQydOL9ezktXyiSDvAZwEfLgO%2FzhK4hhi9NZsg0ygwkRPRd3SowSFM8RNKrANpVxnOfcC47INXnBiL3AblRjtR%2FpQ%2F4Iklp3Y%2F1VpGanSmU3fQOYpnBXbJxaT2Vz7VRLyiBAE2HRuUGD9CLAQ%2B52lY%2BkGBNBq2jV5rBtHxvOahnLEqCgLzKr2lXxaZ1i11UhK%2F3LxgchoLfdMjFvZ4uvYqUyiRXzQx%2FI%2Fwnu4PIZsM9iyNnJF46gFaivUsdePjG5Jaqt77am1CjIFZzcvftDZOAEfTmj6owvNE8Qb0h1UQa3gdzev7oBtknbn5g5woFF7iUlDYzEB8eYfSUERAwOx%2BVnVsuojTxudiEPyZXx60OEwptKY%2B3EIhT0LjVaVqZilUu2yGQDhE4PKxTCWOi2ZNibepHaKtTDhP1j9cykXGKOB%2F5sG5BSV4d%2BigkhUpYHALC17mG3tKwZPJ2cLPxxAnDB92MpK4rSi%2FTLPz700DjbhKW%2B7%2BDWIxU2hSwieMHCMKGQ78IGOqUBnEU98pOV4b5fdX6waSvqD33hiHDuP5ucQ7qhJlrL3GElCfDFGzjXMoFELl7U%2FX%2BbJweB%2FYtNox%2BNa54SlA7ZYdJ37pgTZltVBfDMdZUlEf82p9v70CU7WoJLvX9spIyeRD%2BrmmgfXwgwKbZd7REZ3w0gZoX2XKL%2Bli%2FbZ1Id71ORfJ93Kn8Ze7jTDgexuOtM0Rq7MWgRAsdF94ciUtT%2F4uw4tRok&X-Amz-Signature=b9b788574be6e5484a53f0bc16f0f592522f5747ecd62a17339137192b90d9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5FRCCY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCfDkiM0eOin6UqGISfyfjeISUgo0XzfPDc4wUQw4eDqgIgQCY%2BJXcrg%2Bmmf24LICxgiqbe2zmfazJEzgtV2tuUl0wq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKsz0SsKCLwe7Twg%2BircA5gxFyc7QvjPX8syyYB9DfvDK2dqm8gkrKeFp7NZ2%2FGXw2zO5PwJ8RGcZB6%2FFQoKpHtOZAufH8G93N8pcqRVj5rCXYzttX5hD%2BZf7Ykoc2XNEHoPoeuG1rPFPZ%2F3EQydOL9ezktXyiSDvAZwEfLgO%2FzhK4hhi9NZsg0ygwkRPRd3SowSFM8RNKrANpVxnOfcC47INXnBiL3AblRjtR%2FpQ%2F4Iklp3Y%2F1VpGanSmU3fQOYpnBXbJxaT2Vz7VRLyiBAE2HRuUGD9CLAQ%2B52lY%2BkGBNBq2jV5rBtHxvOahnLEqCgLzKr2lXxaZ1i11UhK%2F3LxgchoLfdMjFvZ4uvYqUyiRXzQx%2FI%2Fwnu4PIZsM9iyNnJF46gFaivUsdePjG5Jaqt77am1CjIFZzcvftDZOAEfTmj6owvNE8Qb0h1UQa3gdzev7oBtknbn5g5woFF7iUlDYzEB8eYfSUERAwOx%2BVnVsuojTxudiEPyZXx60OEwptKY%2B3EIhT0LjVaVqZilUu2yGQDhE4PKxTCWOi2ZNibepHaKtTDhP1j9cykXGKOB%2F5sG5BSV4d%2BigkhUpYHALC17mG3tKwZPJ2cLPxxAnDB92MpK4rSi%2FTLPz700DjbhKW%2B7%2BDWIxU2hSwieMHCMKGQ78IGOqUBnEU98pOV4b5fdX6waSvqD33hiHDuP5ucQ7qhJlrL3GElCfDFGzjXMoFELl7U%2FX%2BbJweB%2FYtNox%2BNa54SlA7ZYdJ37pgTZltVBfDMdZUlEf82p9v70CU7WoJLvX9spIyeRD%2BrmmgfXwgwKbZd7REZ3w0gZoX2XKL%2Bli%2FbZ1Id71ORfJ93Kn8Ze7jTDgexuOtM0Rq7MWgRAsdF94ciUtT%2F4uw4tRok&X-Amz-Signature=e7ae759a24f1793558bd12c5ef67ac6047a3a3f9cb0c567ab483748734124064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
