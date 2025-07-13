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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI2VFRTT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwpdYLLWKo18P8%2BX0GgCp5q%2F6LH0Bh1ekAYux3h85l1wIgAZqO2uthvVOjF%2Bb3hNteZiGC7jpjnA08OKRCzjqidxUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDO8HOMRKMTZTXaH6SircA4MT80a3cm9QisABseAGkoqPuc6y4%2FPTTtXwdOcWODO%2BH6N%2FVNczk6F0x37Vav4ostHyljNVZYOKGl%2FMWzrquetW5kN9QnjT1X8e7PqDADMATWnfBK4D0EsRQg8RAb86QxxS68Jag0HoFtryvs0Bt3oeA%2BQha%2BDsXN4im4%2B2kNuES6%2BSYCniOiSaw9GraKN%2FS1kW%2FM8yaE5XpPJ4BvVPaI8GGrf%2Fj9w5GJKyrhy3ACX7PIR%2F7c5vygmhvC40i0tVaGh%2Bfi68smneeyOfo7HbJ59amWn407D9UwCujrH1w0br0ZSNeYxP9VXdekbfYppZAXk9%2FQFgJI%2Biy70tHPW4KYwZb2%2BbWb1etV2iBD4E8O360uaq198HnmwGUfxqZjBACG1GEjybb9eObr%2FdIfLZFGPKt9ohDfgHWa4VBKJgMdZTyIA46Gfu0P%2BdEG6NHSk7OVapp7Ki9SRnuv9W5%2F1WHZ8o7uFLfJwSvTR5R19Wjp1l34b4AMVYmkBpw29PZgOYOJ21VTEJiPRNwx6P0QeMjfgmuHUxfS2DjXx9k3aO7%2BQpdE3rpunEtHqc%2FGVgQud%2B8eUCmWs9ZBIYYyMGB8DcuRyhealuilfnZfVT0qXVAG8K4JuuCWzHRDQofeGpMLqkzcMGOqUB5giKQuDjPNzxIiL3QbUuTionnQQg1QnrVDqG4twOmSHux5mImqW6kPwf%2BqGnMkfwoHGM%2Bybfe5cek6Cm2Fo0Vju6GyoMKNqk0jYTG3TsHfLagpbPWfsZegm5diTPCN47AbP4%2BDsbb0uO0KBopDfMP59kvQ%2Fu%2FO2wRdxfbsa7o8Ih4uJFQrXymfrjsp3OkZ8kBI8BcFkjAypf9xJ7CFYYDZwGa9nz&X-Amz-Signature=4b65b4a0955ce985759e645fd29a77a14d1c4d77f7cb46e6a38fdfabba4d4ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI2VFRTT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwpdYLLWKo18P8%2BX0GgCp5q%2F6LH0Bh1ekAYux3h85l1wIgAZqO2uthvVOjF%2Bb3hNteZiGC7jpjnA08OKRCzjqidxUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDO8HOMRKMTZTXaH6SircA4MT80a3cm9QisABseAGkoqPuc6y4%2FPTTtXwdOcWODO%2BH6N%2FVNczk6F0x37Vav4ostHyljNVZYOKGl%2FMWzrquetW5kN9QnjT1X8e7PqDADMATWnfBK4D0EsRQg8RAb86QxxS68Jag0HoFtryvs0Bt3oeA%2BQha%2BDsXN4im4%2B2kNuES6%2BSYCniOiSaw9GraKN%2FS1kW%2FM8yaE5XpPJ4BvVPaI8GGrf%2Fj9w5GJKyrhy3ACX7PIR%2F7c5vygmhvC40i0tVaGh%2Bfi68smneeyOfo7HbJ59amWn407D9UwCujrH1w0br0ZSNeYxP9VXdekbfYppZAXk9%2FQFgJI%2Biy70tHPW4KYwZb2%2BbWb1etV2iBD4E8O360uaq198HnmwGUfxqZjBACG1GEjybb9eObr%2FdIfLZFGPKt9ohDfgHWa4VBKJgMdZTyIA46Gfu0P%2BdEG6NHSk7OVapp7Ki9SRnuv9W5%2F1WHZ8o7uFLfJwSvTR5R19Wjp1l34b4AMVYmkBpw29PZgOYOJ21VTEJiPRNwx6P0QeMjfgmuHUxfS2DjXx9k3aO7%2BQpdE3rpunEtHqc%2FGVgQud%2B8eUCmWs9ZBIYYyMGB8DcuRyhealuilfnZfVT0qXVAG8K4JuuCWzHRDQofeGpMLqkzcMGOqUB5giKQuDjPNzxIiL3QbUuTionnQQg1QnrVDqG4twOmSHux5mImqW6kPwf%2BqGnMkfwoHGM%2Bybfe5cek6Cm2Fo0Vju6GyoMKNqk0jYTG3TsHfLagpbPWfsZegm5diTPCN47AbP4%2BDsbb0uO0KBopDfMP59kvQ%2Fu%2FO2wRdxfbsa7o8Ih4uJFQrXymfrjsp3OkZ8kBI8BcFkjAypf9xJ7CFYYDZwGa9nz&X-Amz-Signature=f754be37616585a0e7d1ed544de5d70890b9053cb374e20137cac0cbdc9cd7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI2VFRTT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwpdYLLWKo18P8%2BX0GgCp5q%2F6LH0Bh1ekAYux3h85l1wIgAZqO2uthvVOjF%2Bb3hNteZiGC7jpjnA08OKRCzjqidxUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDO8HOMRKMTZTXaH6SircA4MT80a3cm9QisABseAGkoqPuc6y4%2FPTTtXwdOcWODO%2BH6N%2FVNczk6F0x37Vav4ostHyljNVZYOKGl%2FMWzrquetW5kN9QnjT1X8e7PqDADMATWnfBK4D0EsRQg8RAb86QxxS68Jag0HoFtryvs0Bt3oeA%2BQha%2BDsXN4im4%2B2kNuES6%2BSYCniOiSaw9GraKN%2FS1kW%2FM8yaE5XpPJ4BvVPaI8GGrf%2Fj9w5GJKyrhy3ACX7PIR%2F7c5vygmhvC40i0tVaGh%2Bfi68smneeyOfo7HbJ59amWn407D9UwCujrH1w0br0ZSNeYxP9VXdekbfYppZAXk9%2FQFgJI%2Biy70tHPW4KYwZb2%2BbWb1etV2iBD4E8O360uaq198HnmwGUfxqZjBACG1GEjybb9eObr%2FdIfLZFGPKt9ohDfgHWa4VBKJgMdZTyIA46Gfu0P%2BdEG6NHSk7OVapp7Ki9SRnuv9W5%2F1WHZ8o7uFLfJwSvTR5R19Wjp1l34b4AMVYmkBpw29PZgOYOJ21VTEJiPRNwx6P0QeMjfgmuHUxfS2DjXx9k3aO7%2BQpdE3rpunEtHqc%2FGVgQud%2B8eUCmWs9ZBIYYyMGB8DcuRyhealuilfnZfVT0qXVAG8K4JuuCWzHRDQofeGpMLqkzcMGOqUB5giKQuDjPNzxIiL3QbUuTionnQQg1QnrVDqG4twOmSHux5mImqW6kPwf%2BqGnMkfwoHGM%2Bybfe5cek6Cm2Fo0Vju6GyoMKNqk0jYTG3TsHfLagpbPWfsZegm5diTPCN47AbP4%2BDsbb0uO0KBopDfMP59kvQ%2Fu%2FO2wRdxfbsa7o8Ih4uJFQrXymfrjsp3OkZ8kBI8BcFkjAypf9xJ7CFYYDZwGa9nz&X-Amz-Signature=4c5ca8503b0e1750ad657e491b74a7425a1c8d02f944904bde38e330e75df43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI2VFRTT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwpdYLLWKo18P8%2BX0GgCp5q%2F6LH0Bh1ekAYux3h85l1wIgAZqO2uthvVOjF%2Bb3hNteZiGC7jpjnA08OKRCzjqidxUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDO8HOMRKMTZTXaH6SircA4MT80a3cm9QisABseAGkoqPuc6y4%2FPTTtXwdOcWODO%2BH6N%2FVNczk6F0x37Vav4ostHyljNVZYOKGl%2FMWzrquetW5kN9QnjT1X8e7PqDADMATWnfBK4D0EsRQg8RAb86QxxS68Jag0HoFtryvs0Bt3oeA%2BQha%2BDsXN4im4%2B2kNuES6%2BSYCniOiSaw9GraKN%2FS1kW%2FM8yaE5XpPJ4BvVPaI8GGrf%2Fj9w5GJKyrhy3ACX7PIR%2F7c5vygmhvC40i0tVaGh%2Bfi68smneeyOfo7HbJ59amWn407D9UwCujrH1w0br0ZSNeYxP9VXdekbfYppZAXk9%2FQFgJI%2Biy70tHPW4KYwZb2%2BbWb1etV2iBD4E8O360uaq198HnmwGUfxqZjBACG1GEjybb9eObr%2FdIfLZFGPKt9ohDfgHWa4VBKJgMdZTyIA46Gfu0P%2BdEG6NHSk7OVapp7Ki9SRnuv9W5%2F1WHZ8o7uFLfJwSvTR5R19Wjp1l34b4AMVYmkBpw29PZgOYOJ21VTEJiPRNwx6P0QeMjfgmuHUxfS2DjXx9k3aO7%2BQpdE3rpunEtHqc%2FGVgQud%2B8eUCmWs9ZBIYYyMGB8DcuRyhealuilfnZfVT0qXVAG8K4JuuCWzHRDQofeGpMLqkzcMGOqUB5giKQuDjPNzxIiL3QbUuTionnQQg1QnrVDqG4twOmSHux5mImqW6kPwf%2BqGnMkfwoHGM%2Bybfe5cek6Cm2Fo0Vju6GyoMKNqk0jYTG3TsHfLagpbPWfsZegm5diTPCN47AbP4%2BDsbb0uO0KBopDfMP59kvQ%2Fu%2FO2wRdxfbsa7o8Ih4uJFQrXymfrjsp3OkZ8kBI8BcFkjAypf9xJ7CFYYDZwGa9nz&X-Amz-Signature=a2369573bdd7660cca891edbf8bb5c9c9e5cd84e03cc055056be5a1ad5584dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI2VFRTT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwpdYLLWKo18P8%2BX0GgCp5q%2F6LH0Bh1ekAYux3h85l1wIgAZqO2uthvVOjF%2Bb3hNteZiGC7jpjnA08OKRCzjqidxUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDO8HOMRKMTZTXaH6SircA4MT80a3cm9QisABseAGkoqPuc6y4%2FPTTtXwdOcWODO%2BH6N%2FVNczk6F0x37Vav4ostHyljNVZYOKGl%2FMWzrquetW5kN9QnjT1X8e7PqDADMATWnfBK4D0EsRQg8RAb86QxxS68Jag0HoFtryvs0Bt3oeA%2BQha%2BDsXN4im4%2B2kNuES6%2BSYCniOiSaw9GraKN%2FS1kW%2FM8yaE5XpPJ4BvVPaI8GGrf%2Fj9w5GJKyrhy3ACX7PIR%2F7c5vygmhvC40i0tVaGh%2Bfi68smneeyOfo7HbJ59amWn407D9UwCujrH1w0br0ZSNeYxP9VXdekbfYppZAXk9%2FQFgJI%2Biy70tHPW4KYwZb2%2BbWb1etV2iBD4E8O360uaq198HnmwGUfxqZjBACG1GEjybb9eObr%2FdIfLZFGPKt9ohDfgHWa4VBKJgMdZTyIA46Gfu0P%2BdEG6NHSk7OVapp7Ki9SRnuv9W5%2F1WHZ8o7uFLfJwSvTR5R19Wjp1l34b4AMVYmkBpw29PZgOYOJ21VTEJiPRNwx6P0QeMjfgmuHUxfS2DjXx9k3aO7%2BQpdE3rpunEtHqc%2FGVgQud%2B8eUCmWs9ZBIYYyMGB8DcuRyhealuilfnZfVT0qXVAG8K4JuuCWzHRDQofeGpMLqkzcMGOqUB5giKQuDjPNzxIiL3QbUuTionnQQg1QnrVDqG4twOmSHux5mImqW6kPwf%2BqGnMkfwoHGM%2Bybfe5cek6Cm2Fo0Vju6GyoMKNqk0jYTG3TsHfLagpbPWfsZegm5diTPCN47AbP4%2BDsbb0uO0KBopDfMP59kvQ%2Fu%2FO2wRdxfbsa7o8Ih4uJFQrXymfrjsp3OkZ8kBI8BcFkjAypf9xJ7CFYYDZwGa9nz&X-Amz-Signature=7c157ed8ebcfab45937ceb0f7cff213dcfc2eb471ceac39555d39c01f65a3546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
