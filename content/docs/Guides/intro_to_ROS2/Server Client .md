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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK2LVEK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDXj79%2FQeuJRRcFnAShF1O9TiZ%2BFC41972ha7vfEGTMjAIgduvSsec7h2tk26za7D2OLhMpbyLSsgSJU87Bae87rdQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdOmaR%2Frhhp9r9UESrcA3iVjSn6Ig4JNu1fV1hQ0yaF7OU3tcKLh5tICs2%2BLTLxYTm1QL2hijKizkkiNnbJaCf1o%2BmsipXT0Y%2FrdCsagS44xETWfx8idcmPs0zPjN8xWumbnGPKTlEWmlX3xD7uTivZsFhDAJvQGkG3GhKKvNU%2FXAb7NDfgKCJm4tIktYK%2BorliNfNgrn1pRRQr6tshnB4R%2BRwiLDfWJOVCc%2FCpPsg8apEbY9%2Bjsn0TQcWGXWXJi%2BX6ArlxGFMSojiIDR6sM%2FlFZTkxSFnmCp5RvKW0D8Tv7cKXskRdTzIUXSoMYT5LoWrwBitXBxGoU%2Bej%2FL6vHUkCnNpXR6XR3c%2BPO0vxpp%2FpbhCDbFkY70KDWh7J8J975DsXqm6kW8%2BjCDRW9dOKaPcumnPLU24jyHnroqdKgxdcCzAwKKM8n37H%2FZlLH1gTSwiLg8KMZ%2BOHPEGZEj1AaQhD8RNRoHeNOFmECo26k2KyFkgRrfKLy6QQQIwZCxJUWBSRWxk4HY4MS5ijGx9bg8QuTQaukh3IaLrzCsPTtntRtaYhJQEtMous67LmFrwIiifcuySDMjQLKf870YRDV02UoxEIUTbK1zNL7QfdoqcQTSnWk4yFP7fHi0ba9D4WLlwa1H1FdK6l0LvEMPqZ6sMGOqUBUZJtUdV6es4c8Ir1H7opiwdv4brmMjePBQl1oyKJUmub99iOKjPkmbRge%2Fk9FHHyCtos3LRX6kHF7LsQbNa8h3OHkmEVIKBxf8fLsSxe%2FA6Fss1nHeVA2LJtL123UaEm%2BM1eBOEh7qL%2FIznDV39GaAgleLOdoA%2FwTYSOLHF8wGw7xEvciWvpRXQmtLKXclOMQMNVNvCJW7k89JfrGqn2dxnKwpUc&X-Amz-Signature=d013b19772f47d5a892db4fa3a5761e28ea61e8813f692f3903d10d2e8249f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK2LVEK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDXj79%2FQeuJRRcFnAShF1O9TiZ%2BFC41972ha7vfEGTMjAIgduvSsec7h2tk26za7D2OLhMpbyLSsgSJU87Bae87rdQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdOmaR%2Frhhp9r9UESrcA3iVjSn6Ig4JNu1fV1hQ0yaF7OU3tcKLh5tICs2%2BLTLxYTm1QL2hijKizkkiNnbJaCf1o%2BmsipXT0Y%2FrdCsagS44xETWfx8idcmPs0zPjN8xWumbnGPKTlEWmlX3xD7uTivZsFhDAJvQGkG3GhKKvNU%2FXAb7NDfgKCJm4tIktYK%2BorliNfNgrn1pRRQr6tshnB4R%2BRwiLDfWJOVCc%2FCpPsg8apEbY9%2Bjsn0TQcWGXWXJi%2BX6ArlxGFMSojiIDR6sM%2FlFZTkxSFnmCp5RvKW0D8Tv7cKXskRdTzIUXSoMYT5LoWrwBitXBxGoU%2Bej%2FL6vHUkCnNpXR6XR3c%2BPO0vxpp%2FpbhCDbFkY70KDWh7J8J975DsXqm6kW8%2BjCDRW9dOKaPcumnPLU24jyHnroqdKgxdcCzAwKKM8n37H%2FZlLH1gTSwiLg8KMZ%2BOHPEGZEj1AaQhD8RNRoHeNOFmECo26k2KyFkgRrfKLy6QQQIwZCxJUWBSRWxk4HY4MS5ijGx9bg8QuTQaukh3IaLrzCsPTtntRtaYhJQEtMous67LmFrwIiifcuySDMjQLKf870YRDV02UoxEIUTbK1zNL7QfdoqcQTSnWk4yFP7fHi0ba9D4WLlwa1H1FdK6l0LvEMPqZ6sMGOqUBUZJtUdV6es4c8Ir1H7opiwdv4brmMjePBQl1oyKJUmub99iOKjPkmbRge%2Fk9FHHyCtos3LRX6kHF7LsQbNa8h3OHkmEVIKBxf8fLsSxe%2FA6Fss1nHeVA2LJtL123UaEm%2BM1eBOEh7qL%2FIznDV39GaAgleLOdoA%2FwTYSOLHF8wGw7xEvciWvpRXQmtLKXclOMQMNVNvCJW7k89JfrGqn2dxnKwpUc&X-Amz-Signature=4d3b0aafc77a7c3c130e740c0c9a16b36c30813f0c7787ecb8d9086698b08fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK2LVEK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDXj79%2FQeuJRRcFnAShF1O9TiZ%2BFC41972ha7vfEGTMjAIgduvSsec7h2tk26za7D2OLhMpbyLSsgSJU87Bae87rdQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdOmaR%2Frhhp9r9UESrcA3iVjSn6Ig4JNu1fV1hQ0yaF7OU3tcKLh5tICs2%2BLTLxYTm1QL2hijKizkkiNnbJaCf1o%2BmsipXT0Y%2FrdCsagS44xETWfx8idcmPs0zPjN8xWumbnGPKTlEWmlX3xD7uTivZsFhDAJvQGkG3GhKKvNU%2FXAb7NDfgKCJm4tIktYK%2BorliNfNgrn1pRRQr6tshnB4R%2BRwiLDfWJOVCc%2FCpPsg8apEbY9%2Bjsn0TQcWGXWXJi%2BX6ArlxGFMSojiIDR6sM%2FlFZTkxSFnmCp5RvKW0D8Tv7cKXskRdTzIUXSoMYT5LoWrwBitXBxGoU%2Bej%2FL6vHUkCnNpXR6XR3c%2BPO0vxpp%2FpbhCDbFkY70KDWh7J8J975DsXqm6kW8%2BjCDRW9dOKaPcumnPLU24jyHnroqdKgxdcCzAwKKM8n37H%2FZlLH1gTSwiLg8KMZ%2BOHPEGZEj1AaQhD8RNRoHeNOFmECo26k2KyFkgRrfKLy6QQQIwZCxJUWBSRWxk4HY4MS5ijGx9bg8QuTQaukh3IaLrzCsPTtntRtaYhJQEtMous67LmFrwIiifcuySDMjQLKf870YRDV02UoxEIUTbK1zNL7QfdoqcQTSnWk4yFP7fHi0ba9D4WLlwa1H1FdK6l0LvEMPqZ6sMGOqUBUZJtUdV6es4c8Ir1H7opiwdv4brmMjePBQl1oyKJUmub99iOKjPkmbRge%2Fk9FHHyCtos3LRX6kHF7LsQbNa8h3OHkmEVIKBxf8fLsSxe%2FA6Fss1nHeVA2LJtL123UaEm%2BM1eBOEh7qL%2FIznDV39GaAgleLOdoA%2FwTYSOLHF8wGw7xEvciWvpRXQmtLKXclOMQMNVNvCJW7k89JfrGqn2dxnKwpUc&X-Amz-Signature=4887fd80e83e9653938fbadee29627ec25dfac174445b686eecbe270329df1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK2LVEK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDXj79%2FQeuJRRcFnAShF1O9TiZ%2BFC41972ha7vfEGTMjAIgduvSsec7h2tk26za7D2OLhMpbyLSsgSJU87Bae87rdQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdOmaR%2Frhhp9r9UESrcA3iVjSn6Ig4JNu1fV1hQ0yaF7OU3tcKLh5tICs2%2BLTLxYTm1QL2hijKizkkiNnbJaCf1o%2BmsipXT0Y%2FrdCsagS44xETWfx8idcmPs0zPjN8xWumbnGPKTlEWmlX3xD7uTivZsFhDAJvQGkG3GhKKvNU%2FXAb7NDfgKCJm4tIktYK%2BorliNfNgrn1pRRQr6tshnB4R%2BRwiLDfWJOVCc%2FCpPsg8apEbY9%2Bjsn0TQcWGXWXJi%2BX6ArlxGFMSojiIDR6sM%2FlFZTkxSFnmCp5RvKW0D8Tv7cKXskRdTzIUXSoMYT5LoWrwBitXBxGoU%2Bej%2FL6vHUkCnNpXR6XR3c%2BPO0vxpp%2FpbhCDbFkY70KDWh7J8J975DsXqm6kW8%2BjCDRW9dOKaPcumnPLU24jyHnroqdKgxdcCzAwKKM8n37H%2FZlLH1gTSwiLg8KMZ%2BOHPEGZEj1AaQhD8RNRoHeNOFmECo26k2KyFkgRrfKLy6QQQIwZCxJUWBSRWxk4HY4MS5ijGx9bg8QuTQaukh3IaLrzCsPTtntRtaYhJQEtMous67LmFrwIiifcuySDMjQLKf870YRDV02UoxEIUTbK1zNL7QfdoqcQTSnWk4yFP7fHi0ba9D4WLlwa1H1FdK6l0LvEMPqZ6sMGOqUBUZJtUdV6es4c8Ir1H7opiwdv4brmMjePBQl1oyKJUmub99iOKjPkmbRge%2Fk9FHHyCtos3LRX6kHF7LsQbNa8h3OHkmEVIKBxf8fLsSxe%2FA6Fss1nHeVA2LJtL123UaEm%2BM1eBOEh7qL%2FIznDV39GaAgleLOdoA%2FwTYSOLHF8wGw7xEvciWvpRXQmtLKXclOMQMNVNvCJW7k89JfrGqn2dxnKwpUc&X-Amz-Signature=a4c0f3900fec1d992ae896d80bb0101bcc07048a5a1474ad0aff7204bc7a7e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK2LVEK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDXj79%2FQeuJRRcFnAShF1O9TiZ%2BFC41972ha7vfEGTMjAIgduvSsec7h2tk26za7D2OLhMpbyLSsgSJU87Bae87rdQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdOmaR%2Frhhp9r9UESrcA3iVjSn6Ig4JNu1fV1hQ0yaF7OU3tcKLh5tICs2%2BLTLxYTm1QL2hijKizkkiNnbJaCf1o%2BmsipXT0Y%2FrdCsagS44xETWfx8idcmPs0zPjN8xWumbnGPKTlEWmlX3xD7uTivZsFhDAJvQGkG3GhKKvNU%2FXAb7NDfgKCJm4tIktYK%2BorliNfNgrn1pRRQr6tshnB4R%2BRwiLDfWJOVCc%2FCpPsg8apEbY9%2Bjsn0TQcWGXWXJi%2BX6ArlxGFMSojiIDR6sM%2FlFZTkxSFnmCp5RvKW0D8Tv7cKXskRdTzIUXSoMYT5LoWrwBitXBxGoU%2Bej%2FL6vHUkCnNpXR6XR3c%2BPO0vxpp%2FpbhCDbFkY70KDWh7J8J975DsXqm6kW8%2BjCDRW9dOKaPcumnPLU24jyHnroqdKgxdcCzAwKKM8n37H%2FZlLH1gTSwiLg8KMZ%2BOHPEGZEj1AaQhD8RNRoHeNOFmECo26k2KyFkgRrfKLy6QQQIwZCxJUWBSRWxk4HY4MS5ijGx9bg8QuTQaukh3IaLrzCsPTtntRtaYhJQEtMous67LmFrwIiifcuySDMjQLKf870YRDV02UoxEIUTbK1zNL7QfdoqcQTSnWk4yFP7fHi0ba9D4WLlwa1H1FdK6l0LvEMPqZ6sMGOqUBUZJtUdV6es4c8Ir1H7opiwdv4brmMjePBQl1oyKJUmub99iOKjPkmbRge%2Fk9FHHyCtos3LRX6kHF7LsQbNa8h3OHkmEVIKBxf8fLsSxe%2FA6Fss1nHeVA2LJtL123UaEm%2BM1eBOEh7qL%2FIznDV39GaAgleLOdoA%2FwTYSOLHF8wGw7xEvciWvpRXQmtLKXclOMQMNVNvCJW7k89JfrGqn2dxnKwpUc&X-Amz-Signature=fb79444de28a2563e025a06bcb87803349d9ef86a6909d60468802fc3f23b7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
