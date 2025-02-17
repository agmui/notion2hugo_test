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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTA4CLL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDFDH2QaYfZraRZTBVNDGhfOKgXxUF9dbZSCWW1cog1WgIgB%2FblTLvHGMXA1RsXpmsWp2%2F6jjXZW5%2BMs4AZ7He4nKMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPPOjRP13MMhe4nDhyrcA4wGvClmjE47zffmqivHT40BOzKGHC%2BIjG904ykNOkZfw4GINovOnvpQD2%2FmhSaItzTDrw7lX6Sv0X0%2Bb5wrFG2RDuO4bDV0j8BPgwkcV88G0leAxDCRCFcRUzbciJO9rPJorZ39kmZGKNTds%2BO9tMvRa%2Bd9%2BIk0gJSB3xiChLdKP1NvkdyaJg9bO6rZNqKUtnke9LgQDWawOvPgiArUFGqpJHd%2BxkOJKFiiI0yys9Id9JdSCcHYELlEZ%2FvmjEcUpyu4vSPATXgguJ9q0UtzMx6oIe%2FFJUMg6WTukCSsnXBDzYFajdTNeCWWjfOmDENCAyQIBbDeC%2FO16Lgqo7TKSajoQbaELx6CmFRa42hdRh6HsFh%2FALjgJhkigdcdetwjGpsTo6PMTLAk8Cs43gTgsx5FCkj%2F6hh11hQzfBJePMnwvLGnHYM1Ac4Hf5oGz9JBfO1BbICM%2FzuMVdVioHIvaFtdmW5rTLMhRYn6k6Too8QCyh97RBaA%2FTknC7cQt4709dLX3FV3G5LbCWjUFUq7Qxo9CbRGNhkEkbXcVqUh5U9%2B7ys7bO6jZT5oOmmiEB8IFAat%2FNxoyzVOq593sM4i1SG82HUwFXUZp7ub%2FN9s%2BN%2BbcvI8nDY2QjOQrPEDMK7rzr0GOqUBfdfNuffqhU4EEo7CD5An76pwWAHmSnXBgHO%2B%2BMmsZJKhot%2BswdgeMon310FMsq6No3So2sHJC8tFRFIAuwniEgpsbEm74XXK%2B6Kt%2FVGooGvtNC2qdp%2BcNtNZbwia5Gn9SVDWv7MbLDEif7L58prSceMvsmtXzFXiFoqxxk%2BjB%2Fnw0adnSg87%2BJ6Y7AWGN2PPbba7yW3cNiF%2FMI4bl9uB437XIEJb&X-Amz-Signature=9b96794f795833659afca398d17e35b83658690548f446a35c5086bb105636fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTA4CLL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDFDH2QaYfZraRZTBVNDGhfOKgXxUF9dbZSCWW1cog1WgIgB%2FblTLvHGMXA1RsXpmsWp2%2F6jjXZW5%2BMs4AZ7He4nKMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPPOjRP13MMhe4nDhyrcA4wGvClmjE47zffmqivHT40BOzKGHC%2BIjG904ykNOkZfw4GINovOnvpQD2%2FmhSaItzTDrw7lX6Sv0X0%2Bb5wrFG2RDuO4bDV0j8BPgwkcV88G0leAxDCRCFcRUzbciJO9rPJorZ39kmZGKNTds%2BO9tMvRa%2Bd9%2BIk0gJSB3xiChLdKP1NvkdyaJg9bO6rZNqKUtnke9LgQDWawOvPgiArUFGqpJHd%2BxkOJKFiiI0yys9Id9JdSCcHYELlEZ%2FvmjEcUpyu4vSPATXgguJ9q0UtzMx6oIe%2FFJUMg6WTukCSsnXBDzYFajdTNeCWWjfOmDENCAyQIBbDeC%2FO16Lgqo7TKSajoQbaELx6CmFRa42hdRh6HsFh%2FALjgJhkigdcdetwjGpsTo6PMTLAk8Cs43gTgsx5FCkj%2F6hh11hQzfBJePMnwvLGnHYM1Ac4Hf5oGz9JBfO1BbICM%2FzuMVdVioHIvaFtdmW5rTLMhRYn6k6Too8QCyh97RBaA%2FTknC7cQt4709dLX3FV3G5LbCWjUFUq7Qxo9CbRGNhkEkbXcVqUh5U9%2B7ys7bO6jZT5oOmmiEB8IFAat%2FNxoyzVOq593sM4i1SG82HUwFXUZp7ub%2FN9s%2BN%2BbcvI8nDY2QjOQrPEDMK7rzr0GOqUBfdfNuffqhU4EEo7CD5An76pwWAHmSnXBgHO%2B%2BMmsZJKhot%2BswdgeMon310FMsq6No3So2sHJC8tFRFIAuwniEgpsbEm74XXK%2B6Kt%2FVGooGvtNC2qdp%2BcNtNZbwia5Gn9SVDWv7MbLDEif7L58prSceMvsmtXzFXiFoqxxk%2BjB%2Fnw0adnSg87%2BJ6Y7AWGN2PPbba7yW3cNiF%2FMI4bl9uB437XIEJb&X-Amz-Signature=d6438b52a2359e827122c9c954cf9a8324b0108f622b7ac900fa32c5d3284154&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTA4CLL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDFDH2QaYfZraRZTBVNDGhfOKgXxUF9dbZSCWW1cog1WgIgB%2FblTLvHGMXA1RsXpmsWp2%2F6jjXZW5%2BMs4AZ7He4nKMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPPOjRP13MMhe4nDhyrcA4wGvClmjE47zffmqivHT40BOzKGHC%2BIjG904ykNOkZfw4GINovOnvpQD2%2FmhSaItzTDrw7lX6Sv0X0%2Bb5wrFG2RDuO4bDV0j8BPgwkcV88G0leAxDCRCFcRUzbciJO9rPJorZ39kmZGKNTds%2BO9tMvRa%2Bd9%2BIk0gJSB3xiChLdKP1NvkdyaJg9bO6rZNqKUtnke9LgQDWawOvPgiArUFGqpJHd%2BxkOJKFiiI0yys9Id9JdSCcHYELlEZ%2FvmjEcUpyu4vSPATXgguJ9q0UtzMx6oIe%2FFJUMg6WTukCSsnXBDzYFajdTNeCWWjfOmDENCAyQIBbDeC%2FO16Lgqo7TKSajoQbaELx6CmFRa42hdRh6HsFh%2FALjgJhkigdcdetwjGpsTo6PMTLAk8Cs43gTgsx5FCkj%2F6hh11hQzfBJePMnwvLGnHYM1Ac4Hf5oGz9JBfO1BbICM%2FzuMVdVioHIvaFtdmW5rTLMhRYn6k6Too8QCyh97RBaA%2FTknC7cQt4709dLX3FV3G5LbCWjUFUq7Qxo9CbRGNhkEkbXcVqUh5U9%2B7ys7bO6jZT5oOmmiEB8IFAat%2FNxoyzVOq593sM4i1SG82HUwFXUZp7ub%2FN9s%2BN%2BbcvI8nDY2QjOQrPEDMK7rzr0GOqUBfdfNuffqhU4EEo7CD5An76pwWAHmSnXBgHO%2B%2BMmsZJKhot%2BswdgeMon310FMsq6No3So2sHJC8tFRFIAuwniEgpsbEm74XXK%2B6Kt%2FVGooGvtNC2qdp%2BcNtNZbwia5Gn9SVDWv7MbLDEif7L58prSceMvsmtXzFXiFoqxxk%2BjB%2Fnw0adnSg87%2BJ6Y7AWGN2PPbba7yW3cNiF%2FMI4bl9uB437XIEJb&X-Amz-Signature=c6fb94999cf8ab856894a057ee847987c2376b4b88a3b87f2c07f40986d88b45&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTA4CLL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDFDH2QaYfZraRZTBVNDGhfOKgXxUF9dbZSCWW1cog1WgIgB%2FblTLvHGMXA1RsXpmsWp2%2F6jjXZW5%2BMs4AZ7He4nKMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPPOjRP13MMhe4nDhyrcA4wGvClmjE47zffmqivHT40BOzKGHC%2BIjG904ykNOkZfw4GINovOnvpQD2%2FmhSaItzTDrw7lX6Sv0X0%2Bb5wrFG2RDuO4bDV0j8BPgwkcV88G0leAxDCRCFcRUzbciJO9rPJorZ39kmZGKNTds%2BO9tMvRa%2Bd9%2BIk0gJSB3xiChLdKP1NvkdyaJg9bO6rZNqKUtnke9LgQDWawOvPgiArUFGqpJHd%2BxkOJKFiiI0yys9Id9JdSCcHYELlEZ%2FvmjEcUpyu4vSPATXgguJ9q0UtzMx6oIe%2FFJUMg6WTukCSsnXBDzYFajdTNeCWWjfOmDENCAyQIBbDeC%2FO16Lgqo7TKSajoQbaELx6CmFRa42hdRh6HsFh%2FALjgJhkigdcdetwjGpsTo6PMTLAk8Cs43gTgsx5FCkj%2F6hh11hQzfBJePMnwvLGnHYM1Ac4Hf5oGz9JBfO1BbICM%2FzuMVdVioHIvaFtdmW5rTLMhRYn6k6Too8QCyh97RBaA%2FTknC7cQt4709dLX3FV3G5LbCWjUFUq7Qxo9CbRGNhkEkbXcVqUh5U9%2B7ys7bO6jZT5oOmmiEB8IFAat%2FNxoyzVOq593sM4i1SG82HUwFXUZp7ub%2FN9s%2BN%2BbcvI8nDY2QjOQrPEDMK7rzr0GOqUBfdfNuffqhU4EEo7CD5An76pwWAHmSnXBgHO%2B%2BMmsZJKhot%2BswdgeMon310FMsq6No3So2sHJC8tFRFIAuwniEgpsbEm74XXK%2B6Kt%2FVGooGvtNC2qdp%2BcNtNZbwia5Gn9SVDWv7MbLDEif7L58prSceMvsmtXzFXiFoqxxk%2BjB%2Fnw0adnSg87%2BJ6Y7AWGN2PPbba7yW3cNiF%2FMI4bl9uB437XIEJb&X-Amz-Signature=1d530afe088005e1c8c28e27a7d1d998c202be4111f7d90d9f7d207d2b7ab49e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTA4CLL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDFDH2QaYfZraRZTBVNDGhfOKgXxUF9dbZSCWW1cog1WgIgB%2FblTLvHGMXA1RsXpmsWp2%2F6jjXZW5%2BMs4AZ7He4nKMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPPOjRP13MMhe4nDhyrcA4wGvClmjE47zffmqivHT40BOzKGHC%2BIjG904ykNOkZfw4GINovOnvpQD2%2FmhSaItzTDrw7lX6Sv0X0%2Bb5wrFG2RDuO4bDV0j8BPgwkcV88G0leAxDCRCFcRUzbciJO9rPJorZ39kmZGKNTds%2BO9tMvRa%2Bd9%2BIk0gJSB3xiChLdKP1NvkdyaJg9bO6rZNqKUtnke9LgQDWawOvPgiArUFGqpJHd%2BxkOJKFiiI0yys9Id9JdSCcHYELlEZ%2FvmjEcUpyu4vSPATXgguJ9q0UtzMx6oIe%2FFJUMg6WTukCSsnXBDzYFajdTNeCWWjfOmDENCAyQIBbDeC%2FO16Lgqo7TKSajoQbaELx6CmFRa42hdRh6HsFh%2FALjgJhkigdcdetwjGpsTo6PMTLAk8Cs43gTgsx5FCkj%2F6hh11hQzfBJePMnwvLGnHYM1Ac4Hf5oGz9JBfO1BbICM%2FzuMVdVioHIvaFtdmW5rTLMhRYn6k6Too8QCyh97RBaA%2FTknC7cQt4709dLX3FV3G5LbCWjUFUq7Qxo9CbRGNhkEkbXcVqUh5U9%2B7ys7bO6jZT5oOmmiEB8IFAat%2FNxoyzVOq593sM4i1SG82HUwFXUZp7ub%2FN9s%2BN%2BbcvI8nDY2QjOQrPEDMK7rzr0GOqUBfdfNuffqhU4EEo7CD5An76pwWAHmSnXBgHO%2B%2BMmsZJKhot%2BswdgeMon310FMsq6No3So2sHJC8tFRFIAuwniEgpsbEm74XXK%2B6Kt%2FVGooGvtNC2qdp%2BcNtNZbwia5Gn9SVDWv7MbLDEif7L58prSceMvsmtXzFXiFoqxxk%2BjB%2Fnw0adnSg87%2BJ6Y7AWGN2PPbba7yW3cNiF%2FMI4bl9uB437XIEJb&X-Amz-Signature=9e3f26ebc02074003f19684f0182489c732f926a5fc5b32e82409c8e436a2167&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
