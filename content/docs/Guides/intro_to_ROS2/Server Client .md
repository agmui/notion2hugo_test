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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7UEA76R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIBe7gJh%2FD%2BJQ8nUwjOZAQIU6LVAdMvApXl1IqkRIMrQIhAJKhvh4CEN%2BBn%2B7V9CYjYrVC4xcfyNYCgXZwgztmFWRyKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcieER4RtqNA3aMtkq3APs7%2FKUOxeeQ7z%2BH7BQvtjhWzhVRNkdu0xZ9Bs12nZCWRf29RDzOwcwJGex7GYObQXxa3y22tQvxFG%2FvsFQ537zTVWuqlIEUTlTDTAL3ZlYhDKYSx0PJGaMpVpULgChWMBPuBWQebnw3oLpL3gbxo2wdRXBmMRNUGE4SfeizEkn6Tgejc26ZyxxV3tfwBf0ZrXTSsjmVyZQ5M77rEEJTClsK0dCwesZJC4qOSFJBAzTwj%2FFbk2l1MnHP%2F542YGKzp21kQrPooi%2FpOSu18tLFLR8iYM2Pa70iNlgTA0GuAkjTmoBewl8wPFfdoLOSlCnIcy%2F%2B0aJyKc9qrEAFn8SGh9BfthdLFt11lFAkDppzG5wI%2FdeglfBvJb%2FYl4v6bFN4mvl0SQR0CgtMvTBGKfT7tgiSni3ZuZihRYrKSKu1M7gnM6%2Bx76WWaHwRlLbVSBtc6HPEN7%2FHsgpwcaTugxFTfsm3czgi4ERiLFKCPnnIocrz%2Fyg%2BrQeSuf46AykioAQ5bvLzb9MJNBTMjMq0Ewxp0XCmUoCBWIDIo7ZJt0ZFLqCcU3eF1Eay%2FKBUaVPUv7sVJsx%2B6StNddk0wRjta6qy7EdFefS2zBsPPedPpxabcGrSmMlQB8GwiL3B7qS8zDQ8NrCBjqkAf1BTgs9mNLNG90TCrjQpU4vLcuTEPLvNttY90EbvGrj35rKHQGOL6ac2bSnS1EtZOOIgymcL8fJ508BZYGbBD9DZ5HvBzsdN6Br3z6AVGatX2XXe1DQOK5U0b%2FoIDm4g0H%2B%2FGzhdJCs2%2Ftnf4H43tS1ktJGTp9DH1XsDO%2BRpHH9sah%2B8PcuFjVlsFKqNqZmh4rNzHBnANKczDEsMP2RXZHprNZv&X-Amz-Signature=f25f111b8871fc97e8226bb4bd3df5f2ede16a398163f43b6e1c9cf8e5b32802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7UEA76R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIBe7gJh%2FD%2BJQ8nUwjOZAQIU6LVAdMvApXl1IqkRIMrQIhAJKhvh4CEN%2BBn%2B7V9CYjYrVC4xcfyNYCgXZwgztmFWRyKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcieER4RtqNA3aMtkq3APs7%2FKUOxeeQ7z%2BH7BQvtjhWzhVRNkdu0xZ9Bs12nZCWRf29RDzOwcwJGex7GYObQXxa3y22tQvxFG%2FvsFQ537zTVWuqlIEUTlTDTAL3ZlYhDKYSx0PJGaMpVpULgChWMBPuBWQebnw3oLpL3gbxo2wdRXBmMRNUGE4SfeizEkn6Tgejc26ZyxxV3tfwBf0ZrXTSsjmVyZQ5M77rEEJTClsK0dCwesZJC4qOSFJBAzTwj%2FFbk2l1MnHP%2F542YGKzp21kQrPooi%2FpOSu18tLFLR8iYM2Pa70iNlgTA0GuAkjTmoBewl8wPFfdoLOSlCnIcy%2F%2B0aJyKc9qrEAFn8SGh9BfthdLFt11lFAkDppzG5wI%2FdeglfBvJb%2FYl4v6bFN4mvl0SQR0CgtMvTBGKfT7tgiSni3ZuZihRYrKSKu1M7gnM6%2Bx76WWaHwRlLbVSBtc6HPEN7%2FHsgpwcaTugxFTfsm3czgi4ERiLFKCPnnIocrz%2Fyg%2BrQeSuf46AykioAQ5bvLzb9MJNBTMjMq0Ewxp0XCmUoCBWIDIo7ZJt0ZFLqCcU3eF1Eay%2FKBUaVPUv7sVJsx%2B6StNddk0wRjta6qy7EdFefS2zBsPPedPpxabcGrSmMlQB8GwiL3B7qS8zDQ8NrCBjqkAf1BTgs9mNLNG90TCrjQpU4vLcuTEPLvNttY90EbvGrj35rKHQGOL6ac2bSnS1EtZOOIgymcL8fJ508BZYGbBD9DZ5HvBzsdN6Br3z6AVGatX2XXe1DQOK5U0b%2FoIDm4g0H%2B%2FGzhdJCs2%2Ftnf4H43tS1ktJGTp9DH1XsDO%2BRpHH9sah%2B8PcuFjVlsFKqNqZmh4rNzHBnANKczDEsMP2RXZHprNZv&X-Amz-Signature=51e76a24f2d17651cfdc46e0fd892a88f5957813aa34f8fa2e165ab2165047b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7UEA76R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIBe7gJh%2FD%2BJQ8nUwjOZAQIU6LVAdMvApXl1IqkRIMrQIhAJKhvh4CEN%2BBn%2B7V9CYjYrVC4xcfyNYCgXZwgztmFWRyKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcieER4RtqNA3aMtkq3APs7%2FKUOxeeQ7z%2BH7BQvtjhWzhVRNkdu0xZ9Bs12nZCWRf29RDzOwcwJGex7GYObQXxa3y22tQvxFG%2FvsFQ537zTVWuqlIEUTlTDTAL3ZlYhDKYSx0PJGaMpVpULgChWMBPuBWQebnw3oLpL3gbxo2wdRXBmMRNUGE4SfeizEkn6Tgejc26ZyxxV3tfwBf0ZrXTSsjmVyZQ5M77rEEJTClsK0dCwesZJC4qOSFJBAzTwj%2FFbk2l1MnHP%2F542YGKzp21kQrPooi%2FpOSu18tLFLR8iYM2Pa70iNlgTA0GuAkjTmoBewl8wPFfdoLOSlCnIcy%2F%2B0aJyKc9qrEAFn8SGh9BfthdLFt11lFAkDppzG5wI%2FdeglfBvJb%2FYl4v6bFN4mvl0SQR0CgtMvTBGKfT7tgiSni3ZuZihRYrKSKu1M7gnM6%2Bx76WWaHwRlLbVSBtc6HPEN7%2FHsgpwcaTugxFTfsm3czgi4ERiLFKCPnnIocrz%2Fyg%2BrQeSuf46AykioAQ5bvLzb9MJNBTMjMq0Ewxp0XCmUoCBWIDIo7ZJt0ZFLqCcU3eF1Eay%2FKBUaVPUv7sVJsx%2B6StNddk0wRjta6qy7EdFefS2zBsPPedPpxabcGrSmMlQB8GwiL3B7qS8zDQ8NrCBjqkAf1BTgs9mNLNG90TCrjQpU4vLcuTEPLvNttY90EbvGrj35rKHQGOL6ac2bSnS1EtZOOIgymcL8fJ508BZYGbBD9DZ5HvBzsdN6Br3z6AVGatX2XXe1DQOK5U0b%2FoIDm4g0H%2B%2FGzhdJCs2%2Ftnf4H43tS1ktJGTp9DH1XsDO%2BRpHH9sah%2B8PcuFjVlsFKqNqZmh4rNzHBnANKczDEsMP2RXZHprNZv&X-Amz-Signature=e1816b9eb0290495007e72745651d9e9c031ce282ab7f0d7ed10016c03de99ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7UEA76R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIBe7gJh%2FD%2BJQ8nUwjOZAQIU6LVAdMvApXl1IqkRIMrQIhAJKhvh4CEN%2BBn%2B7V9CYjYrVC4xcfyNYCgXZwgztmFWRyKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcieER4RtqNA3aMtkq3APs7%2FKUOxeeQ7z%2BH7BQvtjhWzhVRNkdu0xZ9Bs12nZCWRf29RDzOwcwJGex7GYObQXxa3y22tQvxFG%2FvsFQ537zTVWuqlIEUTlTDTAL3ZlYhDKYSx0PJGaMpVpULgChWMBPuBWQebnw3oLpL3gbxo2wdRXBmMRNUGE4SfeizEkn6Tgejc26ZyxxV3tfwBf0ZrXTSsjmVyZQ5M77rEEJTClsK0dCwesZJC4qOSFJBAzTwj%2FFbk2l1MnHP%2F542YGKzp21kQrPooi%2FpOSu18tLFLR8iYM2Pa70iNlgTA0GuAkjTmoBewl8wPFfdoLOSlCnIcy%2F%2B0aJyKc9qrEAFn8SGh9BfthdLFt11lFAkDppzG5wI%2FdeglfBvJb%2FYl4v6bFN4mvl0SQR0CgtMvTBGKfT7tgiSni3ZuZihRYrKSKu1M7gnM6%2Bx76WWaHwRlLbVSBtc6HPEN7%2FHsgpwcaTugxFTfsm3czgi4ERiLFKCPnnIocrz%2Fyg%2BrQeSuf46AykioAQ5bvLzb9MJNBTMjMq0Ewxp0XCmUoCBWIDIo7ZJt0ZFLqCcU3eF1Eay%2FKBUaVPUv7sVJsx%2B6StNddk0wRjta6qy7EdFefS2zBsPPedPpxabcGrSmMlQB8GwiL3B7qS8zDQ8NrCBjqkAf1BTgs9mNLNG90TCrjQpU4vLcuTEPLvNttY90EbvGrj35rKHQGOL6ac2bSnS1EtZOOIgymcL8fJ508BZYGbBD9DZ5HvBzsdN6Br3z6AVGatX2XXe1DQOK5U0b%2FoIDm4g0H%2B%2FGzhdJCs2%2Ftnf4H43tS1ktJGTp9DH1XsDO%2BRpHH9sah%2B8PcuFjVlsFKqNqZmh4rNzHBnANKczDEsMP2RXZHprNZv&X-Amz-Signature=3ae1d970f04341a4cdfa10bb05cbbb5048b2ec6c75a1fb8967c49b690394aa17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7UEA76R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIBe7gJh%2FD%2BJQ8nUwjOZAQIU6LVAdMvApXl1IqkRIMrQIhAJKhvh4CEN%2BBn%2B7V9CYjYrVC4xcfyNYCgXZwgztmFWRyKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcieER4RtqNA3aMtkq3APs7%2FKUOxeeQ7z%2BH7BQvtjhWzhVRNkdu0xZ9Bs12nZCWRf29RDzOwcwJGex7GYObQXxa3y22tQvxFG%2FvsFQ537zTVWuqlIEUTlTDTAL3ZlYhDKYSx0PJGaMpVpULgChWMBPuBWQebnw3oLpL3gbxo2wdRXBmMRNUGE4SfeizEkn6Tgejc26ZyxxV3tfwBf0ZrXTSsjmVyZQ5M77rEEJTClsK0dCwesZJC4qOSFJBAzTwj%2FFbk2l1MnHP%2F542YGKzp21kQrPooi%2FpOSu18tLFLR8iYM2Pa70iNlgTA0GuAkjTmoBewl8wPFfdoLOSlCnIcy%2F%2B0aJyKc9qrEAFn8SGh9BfthdLFt11lFAkDppzG5wI%2FdeglfBvJb%2FYl4v6bFN4mvl0SQR0CgtMvTBGKfT7tgiSni3ZuZihRYrKSKu1M7gnM6%2Bx76WWaHwRlLbVSBtc6HPEN7%2FHsgpwcaTugxFTfsm3czgi4ERiLFKCPnnIocrz%2Fyg%2BrQeSuf46AykioAQ5bvLzb9MJNBTMjMq0Ewxp0XCmUoCBWIDIo7ZJt0ZFLqCcU3eF1Eay%2FKBUaVPUv7sVJsx%2B6StNddk0wRjta6qy7EdFefS2zBsPPedPpxabcGrSmMlQB8GwiL3B7qS8zDQ8NrCBjqkAf1BTgs9mNLNG90TCrjQpU4vLcuTEPLvNttY90EbvGrj35rKHQGOL6ac2bSnS1EtZOOIgymcL8fJ508BZYGbBD9DZ5HvBzsdN6Br3z6AVGatX2XXe1DQOK5U0b%2FoIDm4g0H%2B%2FGzhdJCs2%2Ftnf4H43tS1ktJGTp9DH1XsDO%2BRpHH9sah%2B8PcuFjVlsFKqNqZmh4rNzHBnANKczDEsMP2RXZHprNZv&X-Amz-Signature=400b196d93732838c9db5e2606f157b86aad2ea42392daa18338dd2610bd461d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
