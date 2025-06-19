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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWDMKVH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BZ01Tco2Cl6Llo07xn%2BD12A0QIpPrbYTFfGzvuPvC9QIhAKHFaLEPoF9TvCvt37HBJe5mmzf2v7i72qWUG5jBpYv%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2Frru%2BwEiM8uGyqgq3ANMKagkt6QL3QOiM9NQ%2Bt9tyss9l8O7ovaX%2BVs%2FGPt942zorIsEMEi9SW5uJOd5XYceIlOVr7ewwnUAgea6ioR4akv6AKXpAl7VewYUeN8ENetUC%2BR2nWG1vZOVPgBUDNqCRsm%2Fwc%2Fni6r9ZHqUQ6K16LkoDLiWd1e293r44zCtRWopRJtaB01IDY8f50RBS%2FQerXiVgQJCJpv0QLQ4wh5MQsN6RMoHK9SJIo%2BVqa0dZs9nen6UOiQ9IvsofsBOZKbH6jJCROE0qBFuBY421G9%2FXgZFMrGAD466VuPshuS2M0A5RT6M3fnv19to9adYOWdC2V94wmBS4Aflfliwto%2BECj0LOoRrKWxzznpTCaF4WADEh49Gk5Y%2Bv63nZliQ%2BxbT86k377XciygGcfb2U6Y5aFBuBQ%2BpvyyzBl%2BfrgswwbGXFSRqArlXEz3AV2GENJMuwVS6pLiKx2iRnMiec5Ds1THYG86JXw8uy3MTtdMe7pkOOk8WewIKTWr9S5K%2BIa88jQ1z0I6DhYdvVbJA9WffIlrh4L6Sos6w1HOnTy9r6CQGC2oks5ECMN1VPT8zCMrlXIVbzPAXZ0Z8RfzrXDagxMubJEW1kIik4Ad1YkAcVDJkgP98UGm4sta7IzCK4M7CBjqkAYTEVYA7Zn90NpgwpvmymAP83Q05UN0sc85NziTBa2PCNqoxAeF2ySy9ygPE8TuskUZOzVbVTOkfczqf2RUfBfQnDT9ye9eO89UgZgjHa%2BJj1%2BRqA4d7vJmfT%2BLeauSVp0t%2FgR3XUSWDqFE5XBEiZO7IwT8o53w8eDcfnub5NXvDzbR8c3BHi8ccE6QBxVOC76CiFvMPCu2x3S9rhhirxoVWHGUa&X-Amz-Signature=05cd8ea5b0233517b8bcf1053ff8483a73c8b0cf52fb654dad50a7ff4169c0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWDMKVH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BZ01Tco2Cl6Llo07xn%2BD12A0QIpPrbYTFfGzvuPvC9QIhAKHFaLEPoF9TvCvt37HBJe5mmzf2v7i72qWUG5jBpYv%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2Frru%2BwEiM8uGyqgq3ANMKagkt6QL3QOiM9NQ%2Bt9tyss9l8O7ovaX%2BVs%2FGPt942zorIsEMEi9SW5uJOd5XYceIlOVr7ewwnUAgea6ioR4akv6AKXpAl7VewYUeN8ENetUC%2BR2nWG1vZOVPgBUDNqCRsm%2Fwc%2Fni6r9ZHqUQ6K16LkoDLiWd1e293r44zCtRWopRJtaB01IDY8f50RBS%2FQerXiVgQJCJpv0QLQ4wh5MQsN6RMoHK9SJIo%2BVqa0dZs9nen6UOiQ9IvsofsBOZKbH6jJCROE0qBFuBY421G9%2FXgZFMrGAD466VuPshuS2M0A5RT6M3fnv19to9adYOWdC2V94wmBS4Aflfliwto%2BECj0LOoRrKWxzznpTCaF4WADEh49Gk5Y%2Bv63nZliQ%2BxbT86k377XciygGcfb2U6Y5aFBuBQ%2BpvyyzBl%2BfrgswwbGXFSRqArlXEz3AV2GENJMuwVS6pLiKx2iRnMiec5Ds1THYG86JXw8uy3MTtdMe7pkOOk8WewIKTWr9S5K%2BIa88jQ1z0I6DhYdvVbJA9WffIlrh4L6Sos6w1HOnTy9r6CQGC2oks5ECMN1VPT8zCMrlXIVbzPAXZ0Z8RfzrXDagxMubJEW1kIik4Ad1YkAcVDJkgP98UGm4sta7IzCK4M7CBjqkAYTEVYA7Zn90NpgwpvmymAP83Q05UN0sc85NziTBa2PCNqoxAeF2ySy9ygPE8TuskUZOzVbVTOkfczqf2RUfBfQnDT9ye9eO89UgZgjHa%2BJj1%2BRqA4d7vJmfT%2BLeauSVp0t%2FgR3XUSWDqFE5XBEiZO7IwT8o53w8eDcfnub5NXvDzbR8c3BHi8ccE6QBxVOC76CiFvMPCu2x3S9rhhirxoVWHGUa&X-Amz-Signature=644311ea602a86054a32021f75b7ed56210ddc7650dd39bac0761a9d2ab71f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWDMKVH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BZ01Tco2Cl6Llo07xn%2BD12A0QIpPrbYTFfGzvuPvC9QIhAKHFaLEPoF9TvCvt37HBJe5mmzf2v7i72qWUG5jBpYv%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2Frru%2BwEiM8uGyqgq3ANMKagkt6QL3QOiM9NQ%2Bt9tyss9l8O7ovaX%2BVs%2FGPt942zorIsEMEi9SW5uJOd5XYceIlOVr7ewwnUAgea6ioR4akv6AKXpAl7VewYUeN8ENetUC%2BR2nWG1vZOVPgBUDNqCRsm%2Fwc%2Fni6r9ZHqUQ6K16LkoDLiWd1e293r44zCtRWopRJtaB01IDY8f50RBS%2FQerXiVgQJCJpv0QLQ4wh5MQsN6RMoHK9SJIo%2BVqa0dZs9nen6UOiQ9IvsofsBOZKbH6jJCROE0qBFuBY421G9%2FXgZFMrGAD466VuPshuS2M0A5RT6M3fnv19to9adYOWdC2V94wmBS4Aflfliwto%2BECj0LOoRrKWxzznpTCaF4WADEh49Gk5Y%2Bv63nZliQ%2BxbT86k377XciygGcfb2U6Y5aFBuBQ%2BpvyyzBl%2BfrgswwbGXFSRqArlXEz3AV2GENJMuwVS6pLiKx2iRnMiec5Ds1THYG86JXw8uy3MTtdMe7pkOOk8WewIKTWr9S5K%2BIa88jQ1z0I6DhYdvVbJA9WffIlrh4L6Sos6w1HOnTy9r6CQGC2oks5ECMN1VPT8zCMrlXIVbzPAXZ0Z8RfzrXDagxMubJEW1kIik4Ad1YkAcVDJkgP98UGm4sta7IzCK4M7CBjqkAYTEVYA7Zn90NpgwpvmymAP83Q05UN0sc85NziTBa2PCNqoxAeF2ySy9ygPE8TuskUZOzVbVTOkfczqf2RUfBfQnDT9ye9eO89UgZgjHa%2BJj1%2BRqA4d7vJmfT%2BLeauSVp0t%2FgR3XUSWDqFE5XBEiZO7IwT8o53w8eDcfnub5NXvDzbR8c3BHi8ccE6QBxVOC76CiFvMPCu2x3S9rhhirxoVWHGUa&X-Amz-Signature=9b251cfbe0d68fbfd1694e7d45fcd6f24a1ff359343c27560b65dee2ea08ab09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWDMKVH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BZ01Tco2Cl6Llo07xn%2BD12A0QIpPrbYTFfGzvuPvC9QIhAKHFaLEPoF9TvCvt37HBJe5mmzf2v7i72qWUG5jBpYv%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2Frru%2BwEiM8uGyqgq3ANMKagkt6QL3QOiM9NQ%2Bt9tyss9l8O7ovaX%2BVs%2FGPt942zorIsEMEi9SW5uJOd5XYceIlOVr7ewwnUAgea6ioR4akv6AKXpAl7VewYUeN8ENetUC%2BR2nWG1vZOVPgBUDNqCRsm%2Fwc%2Fni6r9ZHqUQ6K16LkoDLiWd1e293r44zCtRWopRJtaB01IDY8f50RBS%2FQerXiVgQJCJpv0QLQ4wh5MQsN6RMoHK9SJIo%2BVqa0dZs9nen6UOiQ9IvsofsBOZKbH6jJCROE0qBFuBY421G9%2FXgZFMrGAD466VuPshuS2M0A5RT6M3fnv19to9adYOWdC2V94wmBS4Aflfliwto%2BECj0LOoRrKWxzznpTCaF4WADEh49Gk5Y%2Bv63nZliQ%2BxbT86k377XciygGcfb2U6Y5aFBuBQ%2BpvyyzBl%2BfrgswwbGXFSRqArlXEz3AV2GENJMuwVS6pLiKx2iRnMiec5Ds1THYG86JXw8uy3MTtdMe7pkOOk8WewIKTWr9S5K%2BIa88jQ1z0I6DhYdvVbJA9WffIlrh4L6Sos6w1HOnTy9r6CQGC2oks5ECMN1VPT8zCMrlXIVbzPAXZ0Z8RfzrXDagxMubJEW1kIik4Ad1YkAcVDJkgP98UGm4sta7IzCK4M7CBjqkAYTEVYA7Zn90NpgwpvmymAP83Q05UN0sc85NziTBa2PCNqoxAeF2ySy9ygPE8TuskUZOzVbVTOkfczqf2RUfBfQnDT9ye9eO89UgZgjHa%2BJj1%2BRqA4d7vJmfT%2BLeauSVp0t%2FgR3XUSWDqFE5XBEiZO7IwT8o53w8eDcfnub5NXvDzbR8c3BHi8ccE6QBxVOC76CiFvMPCu2x3S9rhhirxoVWHGUa&X-Amz-Signature=8f10c7929b4760d6c7a26252460184ffff0d9f75a0fd515b328cdc62c8052c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWDMKVH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BZ01Tco2Cl6Llo07xn%2BD12A0QIpPrbYTFfGzvuPvC9QIhAKHFaLEPoF9TvCvt37HBJe5mmzf2v7i72qWUG5jBpYv%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2Frru%2BwEiM8uGyqgq3ANMKagkt6QL3QOiM9NQ%2Bt9tyss9l8O7ovaX%2BVs%2FGPt942zorIsEMEi9SW5uJOd5XYceIlOVr7ewwnUAgea6ioR4akv6AKXpAl7VewYUeN8ENetUC%2BR2nWG1vZOVPgBUDNqCRsm%2Fwc%2Fni6r9ZHqUQ6K16LkoDLiWd1e293r44zCtRWopRJtaB01IDY8f50RBS%2FQerXiVgQJCJpv0QLQ4wh5MQsN6RMoHK9SJIo%2BVqa0dZs9nen6UOiQ9IvsofsBOZKbH6jJCROE0qBFuBY421G9%2FXgZFMrGAD466VuPshuS2M0A5RT6M3fnv19to9adYOWdC2V94wmBS4Aflfliwto%2BECj0LOoRrKWxzznpTCaF4WADEh49Gk5Y%2Bv63nZliQ%2BxbT86k377XciygGcfb2U6Y5aFBuBQ%2BpvyyzBl%2BfrgswwbGXFSRqArlXEz3AV2GENJMuwVS6pLiKx2iRnMiec5Ds1THYG86JXw8uy3MTtdMe7pkOOk8WewIKTWr9S5K%2BIa88jQ1z0I6DhYdvVbJA9WffIlrh4L6Sos6w1HOnTy9r6CQGC2oks5ECMN1VPT8zCMrlXIVbzPAXZ0Z8RfzrXDagxMubJEW1kIik4Ad1YkAcVDJkgP98UGm4sta7IzCK4M7CBjqkAYTEVYA7Zn90NpgwpvmymAP83Q05UN0sc85NziTBa2PCNqoxAeF2ySy9ygPE8TuskUZOzVbVTOkfczqf2RUfBfQnDT9ye9eO89UgZgjHa%2BJj1%2BRqA4d7vJmfT%2BLeauSVp0t%2FgR3XUSWDqFE5XBEiZO7IwT8o53w8eDcfnub5NXvDzbR8c3BHi8ccE6QBxVOC76CiFvMPCu2x3S9rhhirxoVWHGUa&X-Amz-Signature=fe38558a9aec20730ecd4d6e187ac2efe7bbabf88e600464406dfacc9327cf95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
