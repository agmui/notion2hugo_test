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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STOXCURX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIChr8MpGuKHgNqJi4l%2FRkbOTwghL0jYv1nMfnkBd%2Fp6zAiA5u3OtLqtR2KzVftj5uVk2dXq7sce3SS%2Bd%2BsQoADZgGir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM43XTT2vLgptIlHNYKtwDTOC2cu%2F158ah%2FELQvojCnI32%2FgNeb0oA0Ey2hYTLv9dRF1x%2BtbiYqdi%2F5L1vgT0ORQxp1Re%2F440zqDYcuWc1p4HWoQmfoOxJDNN37cggAcx1l1Bkr6HT1BMbBQtwMjxYvzfWEP9ccJ8YDcZRgnxkTRTzgBlo3DlKh1rPWH0%2FPYhu0am2dNcFrksfyrTekKRHRtbcmfHoCoJK3%2BOY%2FpnkmNn4muzlX2duTaXPzayOL3Z25pPkKLctXfmo1areqeBoUydoK9CgPa2sAwGZdu9W3FyFe6rzfTNhZIKNUWI6IG6Bv4F7NMLhJqq%2FXLnUBKJuPgijfYOtTNiIf158wTb%2Bi0RmjUcltoyGlnrYiYdma%2FNebapNdycxJMAwJ%2FM9cXlJCyfGQZe0gdlH8tl48dAWuFbTJBQ4jBx1ja%2BChYz1sobFLDKMAaa1lxnnz7k%2Bz2PzKq5%2Bz4Oq2f7uSZh8l5I6%2BfA1n0g%2BTqeOwa7ol9dy8OmPhN2evwHPTF2s%2B1H6FZCTIJXpnGcwg60CaXFwFS3CxgXXxajPBup20%2FMUm5rwYkPgaZhw3hnHgRTcqxTNe3Rs9kty5Ycui1JTB10ZIEj8fJL8J72Ezss1OQsB7uuMHQf1OuHB%2FYHHiolefDMw6O%2BpwwY6pgGo%2BhCj9k5%2BPw9G03xucsoT2L3tF1hrUhndptYM19nwIWBdXKIAyz2%2BSeKDbDZU3%2Bt2%2BzY6jJ2V63cIkEsGs9Ly0fye29KQclYevsQrk4XqUeY4pYlItQPQRP8K2x%2Bk3LoV%2Bit2jMtPqWFjsi4gWHkWIIrlRclwt47SGzMQaTk2a4eR7doehvWf3HRHIpdEbMmWJfe7lQTk9co%2Ba0ieiHOgFWD0uSFK&X-Amz-Signature=021c1b5841b725b03f135a495f3d7e1086a311681a68fc8518cadc6a34c4a26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STOXCURX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIChr8MpGuKHgNqJi4l%2FRkbOTwghL0jYv1nMfnkBd%2Fp6zAiA5u3OtLqtR2KzVftj5uVk2dXq7sce3SS%2Bd%2BsQoADZgGir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM43XTT2vLgptIlHNYKtwDTOC2cu%2F158ah%2FELQvojCnI32%2FgNeb0oA0Ey2hYTLv9dRF1x%2BtbiYqdi%2F5L1vgT0ORQxp1Re%2F440zqDYcuWc1p4HWoQmfoOxJDNN37cggAcx1l1Bkr6HT1BMbBQtwMjxYvzfWEP9ccJ8YDcZRgnxkTRTzgBlo3DlKh1rPWH0%2FPYhu0am2dNcFrksfyrTekKRHRtbcmfHoCoJK3%2BOY%2FpnkmNn4muzlX2duTaXPzayOL3Z25pPkKLctXfmo1areqeBoUydoK9CgPa2sAwGZdu9W3FyFe6rzfTNhZIKNUWI6IG6Bv4F7NMLhJqq%2FXLnUBKJuPgijfYOtTNiIf158wTb%2Bi0RmjUcltoyGlnrYiYdma%2FNebapNdycxJMAwJ%2FM9cXlJCyfGQZe0gdlH8tl48dAWuFbTJBQ4jBx1ja%2BChYz1sobFLDKMAaa1lxnnz7k%2Bz2PzKq5%2Bz4Oq2f7uSZh8l5I6%2BfA1n0g%2BTqeOwa7ol9dy8OmPhN2evwHPTF2s%2B1H6FZCTIJXpnGcwg60CaXFwFS3CxgXXxajPBup20%2FMUm5rwYkPgaZhw3hnHgRTcqxTNe3Rs9kty5Ycui1JTB10ZIEj8fJL8J72Ezss1OQsB7uuMHQf1OuHB%2FYHHiolefDMw6O%2BpwwY6pgGo%2BhCj9k5%2BPw9G03xucsoT2L3tF1hrUhndptYM19nwIWBdXKIAyz2%2BSeKDbDZU3%2Bt2%2BzY6jJ2V63cIkEsGs9Ly0fye29KQclYevsQrk4XqUeY4pYlItQPQRP8K2x%2Bk3LoV%2Bit2jMtPqWFjsi4gWHkWIIrlRclwt47SGzMQaTk2a4eR7doehvWf3HRHIpdEbMmWJfe7lQTk9co%2Ba0ieiHOgFWD0uSFK&X-Amz-Signature=4d5077846b96e1e63df5bb8a24f44e6e48be3dfd0e7c68a6dbfc051a7242e911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STOXCURX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIChr8MpGuKHgNqJi4l%2FRkbOTwghL0jYv1nMfnkBd%2Fp6zAiA5u3OtLqtR2KzVftj5uVk2dXq7sce3SS%2Bd%2BsQoADZgGir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM43XTT2vLgptIlHNYKtwDTOC2cu%2F158ah%2FELQvojCnI32%2FgNeb0oA0Ey2hYTLv9dRF1x%2BtbiYqdi%2F5L1vgT0ORQxp1Re%2F440zqDYcuWc1p4HWoQmfoOxJDNN37cggAcx1l1Bkr6HT1BMbBQtwMjxYvzfWEP9ccJ8YDcZRgnxkTRTzgBlo3DlKh1rPWH0%2FPYhu0am2dNcFrksfyrTekKRHRtbcmfHoCoJK3%2BOY%2FpnkmNn4muzlX2duTaXPzayOL3Z25pPkKLctXfmo1areqeBoUydoK9CgPa2sAwGZdu9W3FyFe6rzfTNhZIKNUWI6IG6Bv4F7NMLhJqq%2FXLnUBKJuPgijfYOtTNiIf158wTb%2Bi0RmjUcltoyGlnrYiYdma%2FNebapNdycxJMAwJ%2FM9cXlJCyfGQZe0gdlH8tl48dAWuFbTJBQ4jBx1ja%2BChYz1sobFLDKMAaa1lxnnz7k%2Bz2PzKq5%2Bz4Oq2f7uSZh8l5I6%2BfA1n0g%2BTqeOwa7ol9dy8OmPhN2evwHPTF2s%2B1H6FZCTIJXpnGcwg60CaXFwFS3CxgXXxajPBup20%2FMUm5rwYkPgaZhw3hnHgRTcqxTNe3Rs9kty5Ycui1JTB10ZIEj8fJL8J72Ezss1OQsB7uuMHQf1OuHB%2FYHHiolefDMw6O%2BpwwY6pgGo%2BhCj9k5%2BPw9G03xucsoT2L3tF1hrUhndptYM19nwIWBdXKIAyz2%2BSeKDbDZU3%2Bt2%2BzY6jJ2V63cIkEsGs9Ly0fye29KQclYevsQrk4XqUeY4pYlItQPQRP8K2x%2Bk3LoV%2Bit2jMtPqWFjsi4gWHkWIIrlRclwt47SGzMQaTk2a4eR7doehvWf3HRHIpdEbMmWJfe7lQTk9co%2Ba0ieiHOgFWD0uSFK&X-Amz-Signature=3dd87f82854e05673e7c7d6439b2e1a5f523b452eccf697113149f230a70f68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STOXCURX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIChr8MpGuKHgNqJi4l%2FRkbOTwghL0jYv1nMfnkBd%2Fp6zAiA5u3OtLqtR2KzVftj5uVk2dXq7sce3SS%2Bd%2BsQoADZgGir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM43XTT2vLgptIlHNYKtwDTOC2cu%2F158ah%2FELQvojCnI32%2FgNeb0oA0Ey2hYTLv9dRF1x%2BtbiYqdi%2F5L1vgT0ORQxp1Re%2F440zqDYcuWc1p4HWoQmfoOxJDNN37cggAcx1l1Bkr6HT1BMbBQtwMjxYvzfWEP9ccJ8YDcZRgnxkTRTzgBlo3DlKh1rPWH0%2FPYhu0am2dNcFrksfyrTekKRHRtbcmfHoCoJK3%2BOY%2FpnkmNn4muzlX2duTaXPzayOL3Z25pPkKLctXfmo1areqeBoUydoK9CgPa2sAwGZdu9W3FyFe6rzfTNhZIKNUWI6IG6Bv4F7NMLhJqq%2FXLnUBKJuPgijfYOtTNiIf158wTb%2Bi0RmjUcltoyGlnrYiYdma%2FNebapNdycxJMAwJ%2FM9cXlJCyfGQZe0gdlH8tl48dAWuFbTJBQ4jBx1ja%2BChYz1sobFLDKMAaa1lxnnz7k%2Bz2PzKq5%2Bz4Oq2f7uSZh8l5I6%2BfA1n0g%2BTqeOwa7ol9dy8OmPhN2evwHPTF2s%2B1H6FZCTIJXpnGcwg60CaXFwFS3CxgXXxajPBup20%2FMUm5rwYkPgaZhw3hnHgRTcqxTNe3Rs9kty5Ycui1JTB10ZIEj8fJL8J72Ezss1OQsB7uuMHQf1OuHB%2FYHHiolefDMw6O%2BpwwY6pgGo%2BhCj9k5%2BPw9G03xucsoT2L3tF1hrUhndptYM19nwIWBdXKIAyz2%2BSeKDbDZU3%2Bt2%2BzY6jJ2V63cIkEsGs9Ly0fye29KQclYevsQrk4XqUeY4pYlItQPQRP8K2x%2Bk3LoV%2Bit2jMtPqWFjsi4gWHkWIIrlRclwt47SGzMQaTk2a4eR7doehvWf3HRHIpdEbMmWJfe7lQTk9co%2Ba0ieiHOgFWD0uSFK&X-Amz-Signature=e0ab979a3401271c2140a4c6cbd7c30811b2be61ba2b08cdffe873ca5e15a935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STOXCURX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIChr8MpGuKHgNqJi4l%2FRkbOTwghL0jYv1nMfnkBd%2Fp6zAiA5u3OtLqtR2KzVftj5uVk2dXq7sce3SS%2Bd%2BsQoADZgGir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM43XTT2vLgptIlHNYKtwDTOC2cu%2F158ah%2FELQvojCnI32%2FgNeb0oA0Ey2hYTLv9dRF1x%2BtbiYqdi%2F5L1vgT0ORQxp1Re%2F440zqDYcuWc1p4HWoQmfoOxJDNN37cggAcx1l1Bkr6HT1BMbBQtwMjxYvzfWEP9ccJ8YDcZRgnxkTRTzgBlo3DlKh1rPWH0%2FPYhu0am2dNcFrksfyrTekKRHRtbcmfHoCoJK3%2BOY%2FpnkmNn4muzlX2duTaXPzayOL3Z25pPkKLctXfmo1areqeBoUydoK9CgPa2sAwGZdu9W3FyFe6rzfTNhZIKNUWI6IG6Bv4F7NMLhJqq%2FXLnUBKJuPgijfYOtTNiIf158wTb%2Bi0RmjUcltoyGlnrYiYdma%2FNebapNdycxJMAwJ%2FM9cXlJCyfGQZe0gdlH8tl48dAWuFbTJBQ4jBx1ja%2BChYz1sobFLDKMAaa1lxnnz7k%2Bz2PzKq5%2Bz4Oq2f7uSZh8l5I6%2BfA1n0g%2BTqeOwa7ol9dy8OmPhN2evwHPTF2s%2B1H6FZCTIJXpnGcwg60CaXFwFS3CxgXXxajPBup20%2FMUm5rwYkPgaZhw3hnHgRTcqxTNe3Rs9kty5Ycui1JTB10ZIEj8fJL8J72Ezss1OQsB7uuMHQf1OuHB%2FYHHiolefDMw6O%2BpwwY6pgGo%2BhCj9k5%2BPw9G03xucsoT2L3tF1hrUhndptYM19nwIWBdXKIAyz2%2BSeKDbDZU3%2Bt2%2BzY6jJ2V63cIkEsGs9Ly0fye29KQclYevsQrk4XqUeY4pYlItQPQRP8K2x%2Bk3LoV%2Bit2jMtPqWFjsi4gWHkWIIrlRclwt47SGzMQaTk2a4eR7doehvWf3HRHIpdEbMmWJfe7lQTk9co%2Ba0ieiHOgFWD0uSFK&X-Amz-Signature=52a951fec10f47711538d7f2f09366c5cba7c6a50ea8938215408a429d579de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
