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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBJDWAD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBplcwNNtpqJIOmw1phRpzXukYpmmQxgf%2FqY4pYHAlRrAiEA%2BqFeHxNfcDby04Ld2E6Ha04Vn8382oQtM4TfXl9ZDAAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRwUEbusQkcBLmncyrcA%2F%2FNO0OlExrXMJwysdCtE2a%2BXyXaKrKhxZQ16cZlnsBhYgVc88Esrv%2Be7Ld6KjLvrz1BTrvYyjMnkqcs3FAlHsnIeroGSjlRz2YG2I%2F5i%2Bmxdiei8V0SeNQQGPdiGkivAJS5%2BNso3gzZWs%2Fjs9yY0gVP3ABEPIf2rv9oTTFoyz7H%2FK01rk3i8Zb3ovNcm5Pc0wzK9gw1oTQ8v6beFiWKFRrHCtc43aFqovN7d9uSt1qn89vbXVJnWV7iLI3So2uoN9uGtSuJVvjBe%2F7AXfqROkkqRS71GB7LlPpqF1UGt64O0MltAaGw5S9n0jcThjJsEAu5iLgul7Sh5jcQCTi2vwSSCk8ORkelXghnjCiP9KlBnhHQYG5hJczR60iSGvRBd5zxOu9Io46pz4llS6%2BLPXE1G%2FcDuj%2FHcfuXQKx3%2BNyNfiXWEQpCVOFYDZPM5TTqc4nzUzWxvqj4%2BY2ccEop3furZFPCkSAh5dfhsdKI5xVu553zY8rb0ZSP3JFCDteZ9cUqYPXBO5Ke6hNZIsH2wRutT9PvmZ1N8Y2wuF4fSZRQjMIpi5NMxhH59ZGndFP%2FzmBkaL6XTPwqTrGgwNoAnKiNvQPOkSia2NBcsbm76Uqhr%2BObirdc%2Bu6sP6ZmMJL4xMEGOqUBWnsLPpb4e0P7P9DF4XlNwmM7PZI1kJ5ZRALTRnn7zIepLmN98%2BwweaToVDcZK7NbZSYeUmPQLBByYui%2FZvLEQXhryGFDxiGAJ0d4BVw6pp%2F6xd8jePOC2Da5udAzbcwvIx3my5J7YU2JpJyw3EG5NwJA%2BLSEhfp2tUk2y79Qs5eIV9vfyKSevfZvCzD%2B5nrvPvGije9KAnm7GaTgKfhz3no%2BWaeX&X-Amz-Signature=4e78b10bcbc77a780f599301066fe9a3166d333decddc6fb3e044a6636297e30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBJDWAD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBplcwNNtpqJIOmw1phRpzXukYpmmQxgf%2FqY4pYHAlRrAiEA%2BqFeHxNfcDby04Ld2E6Ha04Vn8382oQtM4TfXl9ZDAAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRwUEbusQkcBLmncyrcA%2F%2FNO0OlExrXMJwysdCtE2a%2BXyXaKrKhxZQ16cZlnsBhYgVc88Esrv%2Be7Ld6KjLvrz1BTrvYyjMnkqcs3FAlHsnIeroGSjlRz2YG2I%2F5i%2Bmxdiei8V0SeNQQGPdiGkivAJS5%2BNso3gzZWs%2Fjs9yY0gVP3ABEPIf2rv9oTTFoyz7H%2FK01rk3i8Zb3ovNcm5Pc0wzK9gw1oTQ8v6beFiWKFRrHCtc43aFqovN7d9uSt1qn89vbXVJnWV7iLI3So2uoN9uGtSuJVvjBe%2F7AXfqROkkqRS71GB7LlPpqF1UGt64O0MltAaGw5S9n0jcThjJsEAu5iLgul7Sh5jcQCTi2vwSSCk8ORkelXghnjCiP9KlBnhHQYG5hJczR60iSGvRBd5zxOu9Io46pz4llS6%2BLPXE1G%2FcDuj%2FHcfuXQKx3%2BNyNfiXWEQpCVOFYDZPM5TTqc4nzUzWxvqj4%2BY2ccEop3furZFPCkSAh5dfhsdKI5xVu553zY8rb0ZSP3JFCDteZ9cUqYPXBO5Ke6hNZIsH2wRutT9PvmZ1N8Y2wuF4fSZRQjMIpi5NMxhH59ZGndFP%2FzmBkaL6XTPwqTrGgwNoAnKiNvQPOkSia2NBcsbm76Uqhr%2BObirdc%2Bu6sP6ZmMJL4xMEGOqUBWnsLPpb4e0P7P9DF4XlNwmM7PZI1kJ5ZRALTRnn7zIepLmN98%2BwweaToVDcZK7NbZSYeUmPQLBByYui%2FZvLEQXhryGFDxiGAJ0d4BVw6pp%2F6xd8jePOC2Da5udAzbcwvIx3my5J7YU2JpJyw3EG5NwJA%2BLSEhfp2tUk2y79Qs5eIV9vfyKSevfZvCzD%2B5nrvPvGije9KAnm7GaTgKfhz3no%2BWaeX&X-Amz-Signature=0309a9f291412fb6c50f21849d13323b6ffcaf7669a5e50ebd4aaf085a9ee7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBJDWAD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBplcwNNtpqJIOmw1phRpzXukYpmmQxgf%2FqY4pYHAlRrAiEA%2BqFeHxNfcDby04Ld2E6Ha04Vn8382oQtM4TfXl9ZDAAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRwUEbusQkcBLmncyrcA%2F%2FNO0OlExrXMJwysdCtE2a%2BXyXaKrKhxZQ16cZlnsBhYgVc88Esrv%2Be7Ld6KjLvrz1BTrvYyjMnkqcs3FAlHsnIeroGSjlRz2YG2I%2F5i%2Bmxdiei8V0SeNQQGPdiGkivAJS5%2BNso3gzZWs%2Fjs9yY0gVP3ABEPIf2rv9oTTFoyz7H%2FK01rk3i8Zb3ovNcm5Pc0wzK9gw1oTQ8v6beFiWKFRrHCtc43aFqovN7d9uSt1qn89vbXVJnWV7iLI3So2uoN9uGtSuJVvjBe%2F7AXfqROkkqRS71GB7LlPpqF1UGt64O0MltAaGw5S9n0jcThjJsEAu5iLgul7Sh5jcQCTi2vwSSCk8ORkelXghnjCiP9KlBnhHQYG5hJczR60iSGvRBd5zxOu9Io46pz4llS6%2BLPXE1G%2FcDuj%2FHcfuXQKx3%2BNyNfiXWEQpCVOFYDZPM5TTqc4nzUzWxvqj4%2BY2ccEop3furZFPCkSAh5dfhsdKI5xVu553zY8rb0ZSP3JFCDteZ9cUqYPXBO5Ke6hNZIsH2wRutT9PvmZ1N8Y2wuF4fSZRQjMIpi5NMxhH59ZGndFP%2FzmBkaL6XTPwqTrGgwNoAnKiNvQPOkSia2NBcsbm76Uqhr%2BObirdc%2Bu6sP6ZmMJL4xMEGOqUBWnsLPpb4e0P7P9DF4XlNwmM7PZI1kJ5ZRALTRnn7zIepLmN98%2BwweaToVDcZK7NbZSYeUmPQLBByYui%2FZvLEQXhryGFDxiGAJ0d4BVw6pp%2F6xd8jePOC2Da5udAzbcwvIx3my5J7YU2JpJyw3EG5NwJA%2BLSEhfp2tUk2y79Qs5eIV9vfyKSevfZvCzD%2B5nrvPvGije9KAnm7GaTgKfhz3no%2BWaeX&X-Amz-Signature=0e3a35e6530bd08dfad0a07c59e7750a5a4d6fa70ac0df903f41fde92ecc3b95&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBJDWAD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBplcwNNtpqJIOmw1phRpzXukYpmmQxgf%2FqY4pYHAlRrAiEA%2BqFeHxNfcDby04Ld2E6Ha04Vn8382oQtM4TfXl9ZDAAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRwUEbusQkcBLmncyrcA%2F%2FNO0OlExrXMJwysdCtE2a%2BXyXaKrKhxZQ16cZlnsBhYgVc88Esrv%2Be7Ld6KjLvrz1BTrvYyjMnkqcs3FAlHsnIeroGSjlRz2YG2I%2F5i%2Bmxdiei8V0SeNQQGPdiGkivAJS5%2BNso3gzZWs%2Fjs9yY0gVP3ABEPIf2rv9oTTFoyz7H%2FK01rk3i8Zb3ovNcm5Pc0wzK9gw1oTQ8v6beFiWKFRrHCtc43aFqovN7d9uSt1qn89vbXVJnWV7iLI3So2uoN9uGtSuJVvjBe%2F7AXfqROkkqRS71GB7LlPpqF1UGt64O0MltAaGw5S9n0jcThjJsEAu5iLgul7Sh5jcQCTi2vwSSCk8ORkelXghnjCiP9KlBnhHQYG5hJczR60iSGvRBd5zxOu9Io46pz4llS6%2BLPXE1G%2FcDuj%2FHcfuXQKx3%2BNyNfiXWEQpCVOFYDZPM5TTqc4nzUzWxvqj4%2BY2ccEop3furZFPCkSAh5dfhsdKI5xVu553zY8rb0ZSP3JFCDteZ9cUqYPXBO5Ke6hNZIsH2wRutT9PvmZ1N8Y2wuF4fSZRQjMIpi5NMxhH59ZGndFP%2FzmBkaL6XTPwqTrGgwNoAnKiNvQPOkSia2NBcsbm76Uqhr%2BObirdc%2Bu6sP6ZmMJL4xMEGOqUBWnsLPpb4e0P7P9DF4XlNwmM7PZI1kJ5ZRALTRnn7zIepLmN98%2BwweaToVDcZK7NbZSYeUmPQLBByYui%2FZvLEQXhryGFDxiGAJ0d4BVw6pp%2F6xd8jePOC2Da5udAzbcwvIx3my5J7YU2JpJyw3EG5NwJA%2BLSEhfp2tUk2y79Qs5eIV9vfyKSevfZvCzD%2B5nrvPvGije9KAnm7GaTgKfhz3no%2BWaeX&X-Amz-Signature=22894b918e9009fd20760426773ad9268edb53974c3c0b5d52886c71696c5871&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBJDWAD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBplcwNNtpqJIOmw1phRpzXukYpmmQxgf%2FqY4pYHAlRrAiEA%2BqFeHxNfcDby04Ld2E6Ha04Vn8382oQtM4TfXl9ZDAAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRwUEbusQkcBLmncyrcA%2F%2FNO0OlExrXMJwysdCtE2a%2BXyXaKrKhxZQ16cZlnsBhYgVc88Esrv%2Be7Ld6KjLvrz1BTrvYyjMnkqcs3FAlHsnIeroGSjlRz2YG2I%2F5i%2Bmxdiei8V0SeNQQGPdiGkivAJS5%2BNso3gzZWs%2Fjs9yY0gVP3ABEPIf2rv9oTTFoyz7H%2FK01rk3i8Zb3ovNcm5Pc0wzK9gw1oTQ8v6beFiWKFRrHCtc43aFqovN7d9uSt1qn89vbXVJnWV7iLI3So2uoN9uGtSuJVvjBe%2F7AXfqROkkqRS71GB7LlPpqF1UGt64O0MltAaGw5S9n0jcThjJsEAu5iLgul7Sh5jcQCTi2vwSSCk8ORkelXghnjCiP9KlBnhHQYG5hJczR60iSGvRBd5zxOu9Io46pz4llS6%2BLPXE1G%2FcDuj%2FHcfuXQKx3%2BNyNfiXWEQpCVOFYDZPM5TTqc4nzUzWxvqj4%2BY2ccEop3furZFPCkSAh5dfhsdKI5xVu553zY8rb0ZSP3JFCDteZ9cUqYPXBO5Ke6hNZIsH2wRutT9PvmZ1N8Y2wuF4fSZRQjMIpi5NMxhH59ZGndFP%2FzmBkaL6XTPwqTrGgwNoAnKiNvQPOkSia2NBcsbm76Uqhr%2BObirdc%2Bu6sP6ZmMJL4xMEGOqUBWnsLPpb4e0P7P9DF4XlNwmM7PZI1kJ5ZRALTRnn7zIepLmN98%2BwweaToVDcZK7NbZSYeUmPQLBByYui%2FZvLEQXhryGFDxiGAJ0d4BVw6pp%2F6xd8jePOC2Da5udAzbcwvIx3my5J7YU2JpJyw3EG5NwJA%2BLSEhfp2tUk2y79Qs5eIV9vfyKSevfZvCzD%2B5nrvPvGije9KAnm7GaTgKfhz3no%2BWaeX&X-Amz-Signature=a3642ad1990dc08ea6ba26fb6a77f6e3d72486ade4120f499e89cdfe214727af&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
