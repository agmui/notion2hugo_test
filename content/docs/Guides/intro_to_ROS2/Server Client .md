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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV2UEKY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDOMHy%2FiaTyDEnp9NoRfYSBFDyQWQXk4dPWdmfBgZ20ggIhAOI7aVpl0rjx%2FYQqI67tL2%2BunAbN1d5E6sxk3zHWq24dKv8DCG0QABoMNjM3NDIzMTgzODA1Igzef8bicDCRZiHpPIUq3AMWuq2l4fXInEEtl8zrILFGqifu7t%2BCpxsVFb%2B9270xleV4IKCfK33mqFgMu6E9sv%2BHsVbF5VXK5nsk4ijh3rJF8Su6v1bcKHNbhbrMh8uvMX3NP4WyNZRM3RaZgrigyBxmkIa52wQHo5nT%2F7r6oPuuOkqqdSiPDSQHggP22h9Wh9KklPdCDN%2F9BcElG1UzokA8sOkCaGm3CX%2BcV12SfuCrr0wOXh7EwIdDA%2BQV5uJckkzKnhAEdTmh4BHvRMZ2NIeUJMmsjIO5x%2F79qbIFsfBPrwu%2BKass%2FTe%2B4V8uTqGLAF%2FSog5kJ7EWIiWBMZODbi4Hi4l30Vi6qBMupfes6%2FOKgQWRpi6nxBO0uedOB7FoDuo6CNHdaNyNXHCuTS9cymxGrQ4luE%2FD0TTpyYafeAUMMUtS80ukfZda4EI8ciNA%2BmleTdRwk9fUsGf8Z7pF1p1r6SFC9ESFODN3a5yDpxEV2iB8s%2BPpBfGHbNHeuaopSReJX4h6oMoioLt3L17DruYBpgJ2llxFnNq61O94mCIDpevgUBINsOiJSC7vwgip%2FicONrpH04F%2BDEkjjXRR4%2FJ8YcyyMxmU2JpOy46hmzVN1jbn9sc%2B5%2FD8Msq%2FmhXGLubi0r7g89OQy5ZwwDC7u5bEBjqkAergipg9Es06qPCH1RUno57a0KhXE%2F03xyw5%2B1q5%2FVi%2FU7rMmFCsZFram%2Fvtddx8eOIEwjA%2FrExCCY6IgD5wiEbjLZRDPMaf3dvSFZUSFwn6hou3KPPzMVB1mEWv4hRRHB9P%2FcYAHYgvL3RiKj2XHwsB0HgI6PM1W0WNT1BGk2mMJBCKMH8eKfLwPHnUBf7HeZL%2F2GvlMTs0cNuD%2F7W93OrvoNAN&X-Amz-Signature=3798a7315f3c61b65b22620069b51c143cd61faf03be562fd6a408f22a4b0242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV2UEKY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDOMHy%2FiaTyDEnp9NoRfYSBFDyQWQXk4dPWdmfBgZ20ggIhAOI7aVpl0rjx%2FYQqI67tL2%2BunAbN1d5E6sxk3zHWq24dKv8DCG0QABoMNjM3NDIzMTgzODA1Igzef8bicDCRZiHpPIUq3AMWuq2l4fXInEEtl8zrILFGqifu7t%2BCpxsVFb%2B9270xleV4IKCfK33mqFgMu6E9sv%2BHsVbF5VXK5nsk4ijh3rJF8Su6v1bcKHNbhbrMh8uvMX3NP4WyNZRM3RaZgrigyBxmkIa52wQHo5nT%2F7r6oPuuOkqqdSiPDSQHggP22h9Wh9KklPdCDN%2F9BcElG1UzokA8sOkCaGm3CX%2BcV12SfuCrr0wOXh7EwIdDA%2BQV5uJckkzKnhAEdTmh4BHvRMZ2NIeUJMmsjIO5x%2F79qbIFsfBPrwu%2BKass%2FTe%2B4V8uTqGLAF%2FSog5kJ7EWIiWBMZODbi4Hi4l30Vi6qBMupfes6%2FOKgQWRpi6nxBO0uedOB7FoDuo6CNHdaNyNXHCuTS9cymxGrQ4luE%2FD0TTpyYafeAUMMUtS80ukfZda4EI8ciNA%2BmleTdRwk9fUsGf8Z7pF1p1r6SFC9ESFODN3a5yDpxEV2iB8s%2BPpBfGHbNHeuaopSReJX4h6oMoioLt3L17DruYBpgJ2llxFnNq61O94mCIDpevgUBINsOiJSC7vwgip%2FicONrpH04F%2BDEkjjXRR4%2FJ8YcyyMxmU2JpOy46hmzVN1jbn9sc%2B5%2FD8Msq%2FmhXGLubi0r7g89OQy5ZwwDC7u5bEBjqkAergipg9Es06qPCH1RUno57a0KhXE%2F03xyw5%2B1q5%2FVi%2FU7rMmFCsZFram%2Fvtddx8eOIEwjA%2FrExCCY6IgD5wiEbjLZRDPMaf3dvSFZUSFwn6hou3KPPzMVB1mEWv4hRRHB9P%2FcYAHYgvL3RiKj2XHwsB0HgI6PM1W0WNT1BGk2mMJBCKMH8eKfLwPHnUBf7HeZL%2F2GvlMTs0cNuD%2F7W93OrvoNAN&X-Amz-Signature=30c88f1803b1f5de294ab6100888345da33d91b2cb78ef3e5104e96ecbcc0022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV2UEKY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDOMHy%2FiaTyDEnp9NoRfYSBFDyQWQXk4dPWdmfBgZ20ggIhAOI7aVpl0rjx%2FYQqI67tL2%2BunAbN1d5E6sxk3zHWq24dKv8DCG0QABoMNjM3NDIzMTgzODA1Igzef8bicDCRZiHpPIUq3AMWuq2l4fXInEEtl8zrILFGqifu7t%2BCpxsVFb%2B9270xleV4IKCfK33mqFgMu6E9sv%2BHsVbF5VXK5nsk4ijh3rJF8Su6v1bcKHNbhbrMh8uvMX3NP4WyNZRM3RaZgrigyBxmkIa52wQHo5nT%2F7r6oPuuOkqqdSiPDSQHggP22h9Wh9KklPdCDN%2F9BcElG1UzokA8sOkCaGm3CX%2BcV12SfuCrr0wOXh7EwIdDA%2BQV5uJckkzKnhAEdTmh4BHvRMZ2NIeUJMmsjIO5x%2F79qbIFsfBPrwu%2BKass%2FTe%2B4V8uTqGLAF%2FSog5kJ7EWIiWBMZODbi4Hi4l30Vi6qBMupfes6%2FOKgQWRpi6nxBO0uedOB7FoDuo6CNHdaNyNXHCuTS9cymxGrQ4luE%2FD0TTpyYafeAUMMUtS80ukfZda4EI8ciNA%2BmleTdRwk9fUsGf8Z7pF1p1r6SFC9ESFODN3a5yDpxEV2iB8s%2BPpBfGHbNHeuaopSReJX4h6oMoioLt3L17DruYBpgJ2llxFnNq61O94mCIDpevgUBINsOiJSC7vwgip%2FicONrpH04F%2BDEkjjXRR4%2FJ8YcyyMxmU2JpOy46hmzVN1jbn9sc%2B5%2FD8Msq%2FmhXGLubi0r7g89OQy5ZwwDC7u5bEBjqkAergipg9Es06qPCH1RUno57a0KhXE%2F03xyw5%2B1q5%2FVi%2FU7rMmFCsZFram%2Fvtddx8eOIEwjA%2FrExCCY6IgD5wiEbjLZRDPMaf3dvSFZUSFwn6hou3KPPzMVB1mEWv4hRRHB9P%2FcYAHYgvL3RiKj2XHwsB0HgI6PM1W0WNT1BGk2mMJBCKMH8eKfLwPHnUBf7HeZL%2F2GvlMTs0cNuD%2F7W93OrvoNAN&X-Amz-Signature=06f55cf7c4a86120674fc929fd04fb7e4122099732e512b8c06d47767b9778da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV2UEKY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDOMHy%2FiaTyDEnp9NoRfYSBFDyQWQXk4dPWdmfBgZ20ggIhAOI7aVpl0rjx%2FYQqI67tL2%2BunAbN1d5E6sxk3zHWq24dKv8DCG0QABoMNjM3NDIzMTgzODA1Igzef8bicDCRZiHpPIUq3AMWuq2l4fXInEEtl8zrILFGqifu7t%2BCpxsVFb%2B9270xleV4IKCfK33mqFgMu6E9sv%2BHsVbF5VXK5nsk4ijh3rJF8Su6v1bcKHNbhbrMh8uvMX3NP4WyNZRM3RaZgrigyBxmkIa52wQHo5nT%2F7r6oPuuOkqqdSiPDSQHggP22h9Wh9KklPdCDN%2F9BcElG1UzokA8sOkCaGm3CX%2BcV12SfuCrr0wOXh7EwIdDA%2BQV5uJckkzKnhAEdTmh4BHvRMZ2NIeUJMmsjIO5x%2F79qbIFsfBPrwu%2BKass%2FTe%2B4V8uTqGLAF%2FSog5kJ7EWIiWBMZODbi4Hi4l30Vi6qBMupfes6%2FOKgQWRpi6nxBO0uedOB7FoDuo6CNHdaNyNXHCuTS9cymxGrQ4luE%2FD0TTpyYafeAUMMUtS80ukfZda4EI8ciNA%2BmleTdRwk9fUsGf8Z7pF1p1r6SFC9ESFODN3a5yDpxEV2iB8s%2BPpBfGHbNHeuaopSReJX4h6oMoioLt3L17DruYBpgJ2llxFnNq61O94mCIDpevgUBINsOiJSC7vwgip%2FicONrpH04F%2BDEkjjXRR4%2FJ8YcyyMxmU2JpOy46hmzVN1jbn9sc%2B5%2FD8Msq%2FmhXGLubi0r7g89OQy5ZwwDC7u5bEBjqkAergipg9Es06qPCH1RUno57a0KhXE%2F03xyw5%2B1q5%2FVi%2FU7rMmFCsZFram%2Fvtddx8eOIEwjA%2FrExCCY6IgD5wiEbjLZRDPMaf3dvSFZUSFwn6hou3KPPzMVB1mEWv4hRRHB9P%2FcYAHYgvL3RiKj2XHwsB0HgI6PM1W0WNT1BGk2mMJBCKMH8eKfLwPHnUBf7HeZL%2F2GvlMTs0cNuD%2F7W93OrvoNAN&X-Amz-Signature=331b6782a4c0f4adee53aacda154c2136195f6e1fb7fda1f0cb0933b78a63703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV2UEKY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDOMHy%2FiaTyDEnp9NoRfYSBFDyQWQXk4dPWdmfBgZ20ggIhAOI7aVpl0rjx%2FYQqI67tL2%2BunAbN1d5E6sxk3zHWq24dKv8DCG0QABoMNjM3NDIzMTgzODA1Igzef8bicDCRZiHpPIUq3AMWuq2l4fXInEEtl8zrILFGqifu7t%2BCpxsVFb%2B9270xleV4IKCfK33mqFgMu6E9sv%2BHsVbF5VXK5nsk4ijh3rJF8Su6v1bcKHNbhbrMh8uvMX3NP4WyNZRM3RaZgrigyBxmkIa52wQHo5nT%2F7r6oPuuOkqqdSiPDSQHggP22h9Wh9KklPdCDN%2F9BcElG1UzokA8sOkCaGm3CX%2BcV12SfuCrr0wOXh7EwIdDA%2BQV5uJckkzKnhAEdTmh4BHvRMZ2NIeUJMmsjIO5x%2F79qbIFsfBPrwu%2BKass%2FTe%2B4V8uTqGLAF%2FSog5kJ7EWIiWBMZODbi4Hi4l30Vi6qBMupfes6%2FOKgQWRpi6nxBO0uedOB7FoDuo6CNHdaNyNXHCuTS9cymxGrQ4luE%2FD0TTpyYafeAUMMUtS80ukfZda4EI8ciNA%2BmleTdRwk9fUsGf8Z7pF1p1r6SFC9ESFODN3a5yDpxEV2iB8s%2BPpBfGHbNHeuaopSReJX4h6oMoioLt3L17DruYBpgJ2llxFnNq61O94mCIDpevgUBINsOiJSC7vwgip%2FicONrpH04F%2BDEkjjXRR4%2FJ8YcyyMxmU2JpOy46hmzVN1jbn9sc%2B5%2FD8Msq%2FmhXGLubi0r7g89OQy5ZwwDC7u5bEBjqkAergipg9Es06qPCH1RUno57a0KhXE%2F03xyw5%2B1q5%2FVi%2FU7rMmFCsZFram%2Fvtddx8eOIEwjA%2FrExCCY6IgD5wiEbjLZRDPMaf3dvSFZUSFwn6hou3KPPzMVB1mEWv4hRRHB9P%2FcYAHYgvL3RiKj2XHwsB0HgI6PM1W0WNT1BGk2mMJBCKMH8eKfLwPHnUBf7HeZL%2F2GvlMTs0cNuD%2F7W93OrvoNAN&X-Amz-Signature=90d01f2981ea39d07677fb1ce4018cb041f7181440930991120299ddc23b2066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
