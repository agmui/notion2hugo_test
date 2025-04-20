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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNC5VEMS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFr4xJ8mBggjYwxBW1EFPd%2BmKxj%2B6TAQ4B9LweQRq2SkAiBrV8ktbVykcSpih5kMeHNhZ9WS%2F3tm%2BhsxQ41S00PDjyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6BmnIwRBMzoTvQTAKtwDD6IsXipuWoxbZlEshZYzuEOEt%2BUiHA4r8JyboQ4zt8H47UiaUdpqV03Va%2BzGq%2FRvslmgPDKXXzEYuO2WwsnLNXvXo3sNo%2BjeWGES%2Bo39z5fR4p1BIadYMxtUhmHSzIpRyuPDv1WtmtwyoZmTv1M7kR45PyPWt%2BhrzAunF5UmuqwI2gW2CnGaEQnbkcP6VAnieJFj738f0wtKeP6r1njHQ%2BxtsH7EC%2FezYkKZjP7jwbYeTFhlOwiKUebzP04G00CnqlRG4PTjpPy5M3pgU%2FVmp7HgPOYv%2FM4f67EW02WoNwrz8zABehro3a0DH69Qs2PRBiRGHkwO4XgvNHQYNN8qQL%2BLKn09o83Hr2j05WjDLvFSe50Li9pYKNjeOVp936g%2BKGWiMLV0bCgI8u5iczURiWJz9uhpvv7TJAr4BwChslwy1HaHF4cfLH5gfKWZRKD%2BJ0G4kZYF1bjbcVSzCTGtjNdeyKub8qnuy6tfIsiw5jDishwlAd7LeBJkXgl1pRXtF4UYCCDlrxESWeNI81jRdJU28uKhEmCRF6rRJfzkN6z3fBs5S5ZQTVCzvn17RzyUfGVoJmb2Y%2Bc2EZ%2Bhhfin9Ryr8oMoO10VPmPeic%2BhcNjy5TTRCcR8lAV%2BApgwsqSSwAY6pgF9MYsg0ZIqhibmXMbr1eFvdefUiYvqbNgQw99vrI%2BT%2Biosn4ys%2Be9ZQc0%2B7A83D4BwOdSNhR5HrSKK6OJQr1BXiOES4xL2p2%2B611c19TBysbg%2BTX2j7H5qI%2F7HWvw4BV6NF%2F5Ip0NELQDkxw95U%2B%2F7b44Yx6fWIZ8POaDPsfBzGuRGNE6UUF%2FhCO9BdNJsYm0NZPDH3330GtjAm6QK8moJwPYrb%2FWh&X-Amz-Signature=b0d9f28bf335557f32404b734295f84d5e9e29158953b2d84ea468899c5c550b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNC5VEMS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFr4xJ8mBggjYwxBW1EFPd%2BmKxj%2B6TAQ4B9LweQRq2SkAiBrV8ktbVykcSpih5kMeHNhZ9WS%2F3tm%2BhsxQ41S00PDjyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6BmnIwRBMzoTvQTAKtwDD6IsXipuWoxbZlEshZYzuEOEt%2BUiHA4r8JyboQ4zt8H47UiaUdpqV03Va%2BzGq%2FRvslmgPDKXXzEYuO2WwsnLNXvXo3sNo%2BjeWGES%2Bo39z5fR4p1BIadYMxtUhmHSzIpRyuPDv1WtmtwyoZmTv1M7kR45PyPWt%2BhrzAunF5UmuqwI2gW2CnGaEQnbkcP6VAnieJFj738f0wtKeP6r1njHQ%2BxtsH7EC%2FezYkKZjP7jwbYeTFhlOwiKUebzP04G00CnqlRG4PTjpPy5M3pgU%2FVmp7HgPOYv%2FM4f67EW02WoNwrz8zABehro3a0DH69Qs2PRBiRGHkwO4XgvNHQYNN8qQL%2BLKn09o83Hr2j05WjDLvFSe50Li9pYKNjeOVp936g%2BKGWiMLV0bCgI8u5iczURiWJz9uhpvv7TJAr4BwChslwy1HaHF4cfLH5gfKWZRKD%2BJ0G4kZYF1bjbcVSzCTGtjNdeyKub8qnuy6tfIsiw5jDishwlAd7LeBJkXgl1pRXtF4UYCCDlrxESWeNI81jRdJU28uKhEmCRF6rRJfzkN6z3fBs5S5ZQTVCzvn17RzyUfGVoJmb2Y%2Bc2EZ%2Bhhfin9Ryr8oMoO10VPmPeic%2BhcNjy5TTRCcR8lAV%2BApgwsqSSwAY6pgF9MYsg0ZIqhibmXMbr1eFvdefUiYvqbNgQw99vrI%2BT%2Biosn4ys%2Be9ZQc0%2B7A83D4BwOdSNhR5HrSKK6OJQr1BXiOES4xL2p2%2B611c19TBysbg%2BTX2j7H5qI%2F7HWvw4BV6NF%2F5Ip0NELQDkxw95U%2B%2F7b44Yx6fWIZ8POaDPsfBzGuRGNE6UUF%2FhCO9BdNJsYm0NZPDH3330GtjAm6QK8moJwPYrb%2FWh&X-Amz-Signature=f6a7f1febeb92a957ee7c7aaa2882075de44e66b5194cecfaf5c712c263487cc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNC5VEMS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFr4xJ8mBggjYwxBW1EFPd%2BmKxj%2B6TAQ4B9LweQRq2SkAiBrV8ktbVykcSpih5kMeHNhZ9WS%2F3tm%2BhsxQ41S00PDjyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6BmnIwRBMzoTvQTAKtwDD6IsXipuWoxbZlEshZYzuEOEt%2BUiHA4r8JyboQ4zt8H47UiaUdpqV03Va%2BzGq%2FRvslmgPDKXXzEYuO2WwsnLNXvXo3sNo%2BjeWGES%2Bo39z5fR4p1BIadYMxtUhmHSzIpRyuPDv1WtmtwyoZmTv1M7kR45PyPWt%2BhrzAunF5UmuqwI2gW2CnGaEQnbkcP6VAnieJFj738f0wtKeP6r1njHQ%2BxtsH7EC%2FezYkKZjP7jwbYeTFhlOwiKUebzP04G00CnqlRG4PTjpPy5M3pgU%2FVmp7HgPOYv%2FM4f67EW02WoNwrz8zABehro3a0DH69Qs2PRBiRGHkwO4XgvNHQYNN8qQL%2BLKn09o83Hr2j05WjDLvFSe50Li9pYKNjeOVp936g%2BKGWiMLV0bCgI8u5iczURiWJz9uhpvv7TJAr4BwChslwy1HaHF4cfLH5gfKWZRKD%2BJ0G4kZYF1bjbcVSzCTGtjNdeyKub8qnuy6tfIsiw5jDishwlAd7LeBJkXgl1pRXtF4UYCCDlrxESWeNI81jRdJU28uKhEmCRF6rRJfzkN6z3fBs5S5ZQTVCzvn17RzyUfGVoJmb2Y%2Bc2EZ%2Bhhfin9Ryr8oMoO10VPmPeic%2BhcNjy5TTRCcR8lAV%2BApgwsqSSwAY6pgF9MYsg0ZIqhibmXMbr1eFvdefUiYvqbNgQw99vrI%2BT%2Biosn4ys%2Be9ZQc0%2B7A83D4BwOdSNhR5HrSKK6OJQr1BXiOES4xL2p2%2B611c19TBysbg%2BTX2j7H5qI%2F7HWvw4BV6NF%2F5Ip0NELQDkxw95U%2B%2F7b44Yx6fWIZ8POaDPsfBzGuRGNE6UUF%2FhCO9BdNJsYm0NZPDH3330GtjAm6QK8moJwPYrb%2FWh&X-Amz-Signature=306ab8a5a92823dc5f86175d6459f8bf41e575ddf564041850b316bc5aea3b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNC5VEMS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFr4xJ8mBggjYwxBW1EFPd%2BmKxj%2B6TAQ4B9LweQRq2SkAiBrV8ktbVykcSpih5kMeHNhZ9WS%2F3tm%2BhsxQ41S00PDjyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6BmnIwRBMzoTvQTAKtwDD6IsXipuWoxbZlEshZYzuEOEt%2BUiHA4r8JyboQ4zt8H47UiaUdpqV03Va%2BzGq%2FRvslmgPDKXXzEYuO2WwsnLNXvXo3sNo%2BjeWGES%2Bo39z5fR4p1BIadYMxtUhmHSzIpRyuPDv1WtmtwyoZmTv1M7kR45PyPWt%2BhrzAunF5UmuqwI2gW2CnGaEQnbkcP6VAnieJFj738f0wtKeP6r1njHQ%2BxtsH7EC%2FezYkKZjP7jwbYeTFhlOwiKUebzP04G00CnqlRG4PTjpPy5M3pgU%2FVmp7HgPOYv%2FM4f67EW02WoNwrz8zABehro3a0DH69Qs2PRBiRGHkwO4XgvNHQYNN8qQL%2BLKn09o83Hr2j05WjDLvFSe50Li9pYKNjeOVp936g%2BKGWiMLV0bCgI8u5iczURiWJz9uhpvv7TJAr4BwChslwy1HaHF4cfLH5gfKWZRKD%2BJ0G4kZYF1bjbcVSzCTGtjNdeyKub8qnuy6tfIsiw5jDishwlAd7LeBJkXgl1pRXtF4UYCCDlrxESWeNI81jRdJU28uKhEmCRF6rRJfzkN6z3fBs5S5ZQTVCzvn17RzyUfGVoJmb2Y%2Bc2EZ%2Bhhfin9Ryr8oMoO10VPmPeic%2BhcNjy5TTRCcR8lAV%2BApgwsqSSwAY6pgF9MYsg0ZIqhibmXMbr1eFvdefUiYvqbNgQw99vrI%2BT%2Biosn4ys%2Be9ZQc0%2B7A83D4BwOdSNhR5HrSKK6OJQr1BXiOES4xL2p2%2B611c19TBysbg%2BTX2j7H5qI%2F7HWvw4BV6NF%2F5Ip0NELQDkxw95U%2B%2F7b44Yx6fWIZ8POaDPsfBzGuRGNE6UUF%2FhCO9BdNJsYm0NZPDH3330GtjAm6QK8moJwPYrb%2FWh&X-Amz-Signature=eb64f34134c1a111c9dac668bdaa01d172e7ca4587c98df2d33935cc922dbf6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNC5VEMS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFr4xJ8mBggjYwxBW1EFPd%2BmKxj%2B6TAQ4B9LweQRq2SkAiBrV8ktbVykcSpih5kMeHNhZ9WS%2F3tm%2BhsxQ41S00PDjyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6BmnIwRBMzoTvQTAKtwDD6IsXipuWoxbZlEshZYzuEOEt%2BUiHA4r8JyboQ4zt8H47UiaUdpqV03Va%2BzGq%2FRvslmgPDKXXzEYuO2WwsnLNXvXo3sNo%2BjeWGES%2Bo39z5fR4p1BIadYMxtUhmHSzIpRyuPDv1WtmtwyoZmTv1M7kR45PyPWt%2BhrzAunF5UmuqwI2gW2CnGaEQnbkcP6VAnieJFj738f0wtKeP6r1njHQ%2BxtsH7EC%2FezYkKZjP7jwbYeTFhlOwiKUebzP04G00CnqlRG4PTjpPy5M3pgU%2FVmp7HgPOYv%2FM4f67EW02WoNwrz8zABehro3a0DH69Qs2PRBiRGHkwO4XgvNHQYNN8qQL%2BLKn09o83Hr2j05WjDLvFSe50Li9pYKNjeOVp936g%2BKGWiMLV0bCgI8u5iczURiWJz9uhpvv7TJAr4BwChslwy1HaHF4cfLH5gfKWZRKD%2BJ0G4kZYF1bjbcVSzCTGtjNdeyKub8qnuy6tfIsiw5jDishwlAd7LeBJkXgl1pRXtF4UYCCDlrxESWeNI81jRdJU28uKhEmCRF6rRJfzkN6z3fBs5S5ZQTVCzvn17RzyUfGVoJmb2Y%2Bc2EZ%2Bhhfin9Ryr8oMoO10VPmPeic%2BhcNjy5TTRCcR8lAV%2BApgwsqSSwAY6pgF9MYsg0ZIqhibmXMbr1eFvdefUiYvqbNgQw99vrI%2BT%2Biosn4ys%2Be9ZQc0%2B7A83D4BwOdSNhR5HrSKK6OJQr1BXiOES4xL2p2%2B611c19TBysbg%2BTX2j7H5qI%2F7HWvw4BV6NF%2F5Ip0NELQDkxw95U%2B%2F7b44Yx6fWIZ8POaDPsfBzGuRGNE6UUF%2FhCO9BdNJsYm0NZPDH3330GtjAm6QK8moJwPYrb%2FWh&X-Amz-Signature=0963798037d021769b4f678cbef2b5952af46b6daa59888d53c9a50719cc8fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
