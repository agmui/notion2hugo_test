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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNR4N2T5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICdQz5K8S7c%2BehvqDJft2kGTeruulRZ65ZM4ivtjB%2BDaAiB37v8yaxiT4aoqdazsPQhphHUl5AbuHEsZwHGyTGtudiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoYF8bHTZ3GWLvGtKtwDPcEgk%2Ba07Cs%2Bw32yeQ1LJuje2%2Fp4z8vDIJxSJMJAD540ss3cD%2BRqO5oH1944qjKsIa3JZluUO3XCNeYabAMkRJL63uBSHBrCb%2BMtWDr%2FxDI90%2FKv3DfzLbwZYoliXaoqroMY1qR7dkG9cJGIJHWHdiPO9SiMZN75D9SsRS4HMVFIKuZjlA193KNp4XnHRO65eVtYXoBlF%2BabhLHEpoA2qBsfPbhv9O9CATtveeVHoHSSCcG2ebpZIZpV%2FPu%2BtywZMPy%2FiiXqj46CnAzElyxJZAhsEa20pRED%2BSewtB9E0TULN6b0jvcCThrrDEH4QXFN0x9QdKUJ18Gv8437irewXJGG3DkDQNnuQqbx9pVHp%2Bv9jc7prrMgCF95BfgUM9e89X20nHEZryxnZA1krX8WyINzJ6YfV8pKnhW2U2wi08HAvoz8NB7ZVlLaFa1cWib7LMrlFOE6XLBRd64LaUFHqJca1mjrtW52Sls%2Fr5ehIM3kvT4sBoy0jiGmazw%2FUSczoWkbcKoj2552SMzDk3Ht%2F9HToWBsiOolD%2BimuZIqmN6EnFfwIKPGJln67vYPHxlMzKWIO8EM24EKLrDC9va5%2FpCq%2F2U2rM7ZU%2Fdmd3RNCPj5Sh%2FvCs71gPkB3rwwpuqivwY6pgHf7LQiV%2FBnweg2A7%2FtNQaKdnsciyJ3%2BQRahLhTcItDj0BcSJXbNruDNQTJ4BdDyrHobG3XMsUJkyTPiAKls16t9n2LFV3EB8COD9N8z4SMYjECtrd38K6hjuiBNlFyUnJwYlvuaZVq9vsBBcrYJXplu29Bl7AqhHLoVbZ8Q%2BJcQW47OEZTkYO6sp6WNRjAXRUINdU5ULRRiwN8dhRa2mtEOOQn5L46&X-Amz-Signature=ccad408babf669a363c5e028e858a380ae211e885621316dfc117e205f034858&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNR4N2T5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICdQz5K8S7c%2BehvqDJft2kGTeruulRZ65ZM4ivtjB%2BDaAiB37v8yaxiT4aoqdazsPQhphHUl5AbuHEsZwHGyTGtudiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoYF8bHTZ3GWLvGtKtwDPcEgk%2Ba07Cs%2Bw32yeQ1LJuje2%2Fp4z8vDIJxSJMJAD540ss3cD%2BRqO5oH1944qjKsIa3JZluUO3XCNeYabAMkRJL63uBSHBrCb%2BMtWDr%2FxDI90%2FKv3DfzLbwZYoliXaoqroMY1qR7dkG9cJGIJHWHdiPO9SiMZN75D9SsRS4HMVFIKuZjlA193KNp4XnHRO65eVtYXoBlF%2BabhLHEpoA2qBsfPbhv9O9CATtveeVHoHSSCcG2ebpZIZpV%2FPu%2BtywZMPy%2FiiXqj46CnAzElyxJZAhsEa20pRED%2BSewtB9E0TULN6b0jvcCThrrDEH4QXFN0x9QdKUJ18Gv8437irewXJGG3DkDQNnuQqbx9pVHp%2Bv9jc7prrMgCF95BfgUM9e89X20nHEZryxnZA1krX8WyINzJ6YfV8pKnhW2U2wi08HAvoz8NB7ZVlLaFa1cWib7LMrlFOE6XLBRd64LaUFHqJca1mjrtW52Sls%2Fr5ehIM3kvT4sBoy0jiGmazw%2FUSczoWkbcKoj2552SMzDk3Ht%2F9HToWBsiOolD%2BimuZIqmN6EnFfwIKPGJln67vYPHxlMzKWIO8EM24EKLrDC9va5%2FpCq%2F2U2rM7ZU%2Fdmd3RNCPj5Sh%2FvCs71gPkB3rwwpuqivwY6pgHf7LQiV%2FBnweg2A7%2FtNQaKdnsciyJ3%2BQRahLhTcItDj0BcSJXbNruDNQTJ4BdDyrHobG3XMsUJkyTPiAKls16t9n2LFV3EB8COD9N8z4SMYjECtrd38K6hjuiBNlFyUnJwYlvuaZVq9vsBBcrYJXplu29Bl7AqhHLoVbZ8Q%2BJcQW47OEZTkYO6sp6WNRjAXRUINdU5ULRRiwN8dhRa2mtEOOQn5L46&X-Amz-Signature=1d2bc6ac7eaafa5a5ee4763c36b51cbbd086e37f7fae2b6ac3da467dc3680e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNR4N2T5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICdQz5K8S7c%2BehvqDJft2kGTeruulRZ65ZM4ivtjB%2BDaAiB37v8yaxiT4aoqdazsPQhphHUl5AbuHEsZwHGyTGtudiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoYF8bHTZ3GWLvGtKtwDPcEgk%2Ba07Cs%2Bw32yeQ1LJuje2%2Fp4z8vDIJxSJMJAD540ss3cD%2BRqO5oH1944qjKsIa3JZluUO3XCNeYabAMkRJL63uBSHBrCb%2BMtWDr%2FxDI90%2FKv3DfzLbwZYoliXaoqroMY1qR7dkG9cJGIJHWHdiPO9SiMZN75D9SsRS4HMVFIKuZjlA193KNp4XnHRO65eVtYXoBlF%2BabhLHEpoA2qBsfPbhv9O9CATtveeVHoHSSCcG2ebpZIZpV%2FPu%2BtywZMPy%2FiiXqj46CnAzElyxJZAhsEa20pRED%2BSewtB9E0TULN6b0jvcCThrrDEH4QXFN0x9QdKUJ18Gv8437irewXJGG3DkDQNnuQqbx9pVHp%2Bv9jc7prrMgCF95BfgUM9e89X20nHEZryxnZA1krX8WyINzJ6YfV8pKnhW2U2wi08HAvoz8NB7ZVlLaFa1cWib7LMrlFOE6XLBRd64LaUFHqJca1mjrtW52Sls%2Fr5ehIM3kvT4sBoy0jiGmazw%2FUSczoWkbcKoj2552SMzDk3Ht%2F9HToWBsiOolD%2BimuZIqmN6EnFfwIKPGJln67vYPHxlMzKWIO8EM24EKLrDC9va5%2FpCq%2F2U2rM7ZU%2Fdmd3RNCPj5Sh%2FvCs71gPkB3rwwpuqivwY6pgHf7LQiV%2FBnweg2A7%2FtNQaKdnsciyJ3%2BQRahLhTcItDj0BcSJXbNruDNQTJ4BdDyrHobG3XMsUJkyTPiAKls16t9n2LFV3EB8COD9N8z4SMYjECtrd38K6hjuiBNlFyUnJwYlvuaZVq9vsBBcrYJXplu29Bl7AqhHLoVbZ8Q%2BJcQW47OEZTkYO6sp6WNRjAXRUINdU5ULRRiwN8dhRa2mtEOOQn5L46&X-Amz-Signature=c2435bd37f66ca88f910ebf762933b51ec291c52a81d305bc9a912767147d9ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNR4N2T5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICdQz5K8S7c%2BehvqDJft2kGTeruulRZ65ZM4ivtjB%2BDaAiB37v8yaxiT4aoqdazsPQhphHUl5AbuHEsZwHGyTGtudiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoYF8bHTZ3GWLvGtKtwDPcEgk%2Ba07Cs%2Bw32yeQ1LJuje2%2Fp4z8vDIJxSJMJAD540ss3cD%2BRqO5oH1944qjKsIa3JZluUO3XCNeYabAMkRJL63uBSHBrCb%2BMtWDr%2FxDI90%2FKv3DfzLbwZYoliXaoqroMY1qR7dkG9cJGIJHWHdiPO9SiMZN75D9SsRS4HMVFIKuZjlA193KNp4XnHRO65eVtYXoBlF%2BabhLHEpoA2qBsfPbhv9O9CATtveeVHoHSSCcG2ebpZIZpV%2FPu%2BtywZMPy%2FiiXqj46CnAzElyxJZAhsEa20pRED%2BSewtB9E0TULN6b0jvcCThrrDEH4QXFN0x9QdKUJ18Gv8437irewXJGG3DkDQNnuQqbx9pVHp%2Bv9jc7prrMgCF95BfgUM9e89X20nHEZryxnZA1krX8WyINzJ6YfV8pKnhW2U2wi08HAvoz8NB7ZVlLaFa1cWib7LMrlFOE6XLBRd64LaUFHqJca1mjrtW52Sls%2Fr5ehIM3kvT4sBoy0jiGmazw%2FUSczoWkbcKoj2552SMzDk3Ht%2F9HToWBsiOolD%2BimuZIqmN6EnFfwIKPGJln67vYPHxlMzKWIO8EM24EKLrDC9va5%2FpCq%2F2U2rM7ZU%2Fdmd3RNCPj5Sh%2FvCs71gPkB3rwwpuqivwY6pgHf7LQiV%2FBnweg2A7%2FtNQaKdnsciyJ3%2BQRahLhTcItDj0BcSJXbNruDNQTJ4BdDyrHobG3XMsUJkyTPiAKls16t9n2LFV3EB8COD9N8z4SMYjECtrd38K6hjuiBNlFyUnJwYlvuaZVq9vsBBcrYJXplu29Bl7AqhHLoVbZ8Q%2BJcQW47OEZTkYO6sp6WNRjAXRUINdU5ULRRiwN8dhRa2mtEOOQn5L46&X-Amz-Signature=245231806182514335481285c31d096e80b2a29fdc2a772e486e9b50b3adb733&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNR4N2T5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICdQz5K8S7c%2BehvqDJft2kGTeruulRZ65ZM4ivtjB%2BDaAiB37v8yaxiT4aoqdazsPQhphHUl5AbuHEsZwHGyTGtudiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoYF8bHTZ3GWLvGtKtwDPcEgk%2Ba07Cs%2Bw32yeQ1LJuje2%2Fp4z8vDIJxSJMJAD540ss3cD%2BRqO5oH1944qjKsIa3JZluUO3XCNeYabAMkRJL63uBSHBrCb%2BMtWDr%2FxDI90%2FKv3DfzLbwZYoliXaoqroMY1qR7dkG9cJGIJHWHdiPO9SiMZN75D9SsRS4HMVFIKuZjlA193KNp4XnHRO65eVtYXoBlF%2BabhLHEpoA2qBsfPbhv9O9CATtveeVHoHSSCcG2ebpZIZpV%2FPu%2BtywZMPy%2FiiXqj46CnAzElyxJZAhsEa20pRED%2BSewtB9E0TULN6b0jvcCThrrDEH4QXFN0x9QdKUJ18Gv8437irewXJGG3DkDQNnuQqbx9pVHp%2Bv9jc7prrMgCF95BfgUM9e89X20nHEZryxnZA1krX8WyINzJ6YfV8pKnhW2U2wi08HAvoz8NB7ZVlLaFa1cWib7LMrlFOE6XLBRd64LaUFHqJca1mjrtW52Sls%2Fr5ehIM3kvT4sBoy0jiGmazw%2FUSczoWkbcKoj2552SMzDk3Ht%2F9HToWBsiOolD%2BimuZIqmN6EnFfwIKPGJln67vYPHxlMzKWIO8EM24EKLrDC9va5%2FpCq%2F2U2rM7ZU%2Fdmd3RNCPj5Sh%2FvCs71gPkB3rwwpuqivwY6pgHf7LQiV%2FBnweg2A7%2FtNQaKdnsciyJ3%2BQRahLhTcItDj0BcSJXbNruDNQTJ4BdDyrHobG3XMsUJkyTPiAKls16t9n2LFV3EB8COD9N8z4SMYjECtrd38K6hjuiBNlFyUnJwYlvuaZVq9vsBBcrYJXplu29Bl7AqhHLoVbZ8Q%2BJcQW47OEZTkYO6sp6WNRjAXRUINdU5ULRRiwN8dhRa2mtEOOQn5L46&X-Amz-Signature=e5492142ecf2056dcfb89de95fe145b2ef4f58fb735645ba8e5990d7b1d05782&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
