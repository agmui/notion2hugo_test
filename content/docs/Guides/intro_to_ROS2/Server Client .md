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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVNLM7X%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFhME4Q8WxFr%2F%2FGEEzhLOD83fUmgZVET9pNFM8795erzAiAedNUm8UwHtPHcCnjza5N%2Fo8K3oNlluIwZq%2FOM2IcD0ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMY6YonUmhFQgjyFBaKtwDIO%2BGaPHa24oxV51ftWKH6L99YIXEsU5GFLsihCS5kM7w5CKCqCxNwU4JYPeQjJBa18aHVDPalvPPUMPZ288mm8fS4lE2SZ667%2F4sbVtpoXiFuIe7U6Otp%2FM0Il6K2ZfNAiLLYuLTctKwdocYrVXtFk9HHxXpMfaPzeMaz6TUpvv%2FtdVM12CFEHLKV35mAl6drLIXj8V30Z5hLx41ee%2F0QpAkUyWyUVLoxobybzWq27QeWA5soU9bsEeUNqdanrWiZkUcwJlqwUDHaJPP7zQjfx6cdsRLzhT9LsxqF15swWPthEld7u3L0SneZXpE5bBisF1357IN4rmoapGoCilNOUZ9OYGmu%2Fqt2VnhAdMmLD6oSsfmZjBNl%2BYZ4m8n6Pt6fdp0Ksh4t9re0S5Z0pMhGbMbDpvKzuH%2FvGig2ss7YQS%2Fe%2BxD7dwSfutCEzAonR4n52CbHL40o4N4qm3BIIYSu1g8N636D0DD6w2joYidVvSwlFzKKevpeEfPHuG0dx%2B3XtLnwIkqBrgljM2eXb68gbqiOAn8Hg%2BLbfFJH6ybSeEC%2FOl03ISPLAB7mWUzpdRktJ9S3kkqicWhldzjQUnMRypP%2Fth9BqdAa6%2Bz85z1NckFDM%2FbYEPYXVWRgEAw%2F6aEwgY6pgFK0pDosnN9mjARL2QR8qXalyTYleET4ser2St6bg1K271m7llrMlinn21KifwKxl17Iicz7t%2BMjkqOekXBSCZVLb8riiYaP6bvqUDkgLRbdmplF4kVQf1xjCVgpUT86nQkJHGFYa%2B%2BNPBhmFeGb7EwKdvquPYNYCCyNpTihXJpD3gLiwe3GaPAcYq2QU2eHGRJfWeIoHfXXUQsdXfsF9iGUfE5P93V&X-Amz-Signature=88c0eb004fe0b86dc2cc14193616d591d17cfe8c09883dae7cc1c059e1bf83a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVNLM7X%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFhME4Q8WxFr%2F%2FGEEzhLOD83fUmgZVET9pNFM8795erzAiAedNUm8UwHtPHcCnjza5N%2Fo8K3oNlluIwZq%2FOM2IcD0ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMY6YonUmhFQgjyFBaKtwDIO%2BGaPHa24oxV51ftWKH6L99YIXEsU5GFLsihCS5kM7w5CKCqCxNwU4JYPeQjJBa18aHVDPalvPPUMPZ288mm8fS4lE2SZ667%2F4sbVtpoXiFuIe7U6Otp%2FM0Il6K2ZfNAiLLYuLTctKwdocYrVXtFk9HHxXpMfaPzeMaz6TUpvv%2FtdVM12CFEHLKV35mAl6drLIXj8V30Z5hLx41ee%2F0QpAkUyWyUVLoxobybzWq27QeWA5soU9bsEeUNqdanrWiZkUcwJlqwUDHaJPP7zQjfx6cdsRLzhT9LsxqF15swWPthEld7u3L0SneZXpE5bBisF1357IN4rmoapGoCilNOUZ9OYGmu%2Fqt2VnhAdMmLD6oSsfmZjBNl%2BYZ4m8n6Pt6fdp0Ksh4t9re0S5Z0pMhGbMbDpvKzuH%2FvGig2ss7YQS%2Fe%2BxD7dwSfutCEzAonR4n52CbHL40o4N4qm3BIIYSu1g8N636D0DD6w2joYidVvSwlFzKKevpeEfPHuG0dx%2B3XtLnwIkqBrgljM2eXb68gbqiOAn8Hg%2BLbfFJH6ybSeEC%2FOl03ISPLAB7mWUzpdRktJ9S3kkqicWhldzjQUnMRypP%2Fth9BqdAa6%2Bz85z1NckFDM%2FbYEPYXVWRgEAw%2F6aEwgY6pgFK0pDosnN9mjARL2QR8qXalyTYleET4ser2St6bg1K271m7llrMlinn21KifwKxl17Iicz7t%2BMjkqOekXBSCZVLb8riiYaP6bvqUDkgLRbdmplF4kVQf1xjCVgpUT86nQkJHGFYa%2B%2BNPBhmFeGb7EwKdvquPYNYCCyNpTihXJpD3gLiwe3GaPAcYq2QU2eHGRJfWeIoHfXXUQsdXfsF9iGUfE5P93V&X-Amz-Signature=c11ffd8ca561f8299559fc74fae7314db5903070aab2e24d3fae8d03fcf52e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVNLM7X%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFhME4Q8WxFr%2F%2FGEEzhLOD83fUmgZVET9pNFM8795erzAiAedNUm8UwHtPHcCnjza5N%2Fo8K3oNlluIwZq%2FOM2IcD0ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMY6YonUmhFQgjyFBaKtwDIO%2BGaPHa24oxV51ftWKH6L99YIXEsU5GFLsihCS5kM7w5CKCqCxNwU4JYPeQjJBa18aHVDPalvPPUMPZ288mm8fS4lE2SZ667%2F4sbVtpoXiFuIe7U6Otp%2FM0Il6K2ZfNAiLLYuLTctKwdocYrVXtFk9HHxXpMfaPzeMaz6TUpvv%2FtdVM12CFEHLKV35mAl6drLIXj8V30Z5hLx41ee%2F0QpAkUyWyUVLoxobybzWq27QeWA5soU9bsEeUNqdanrWiZkUcwJlqwUDHaJPP7zQjfx6cdsRLzhT9LsxqF15swWPthEld7u3L0SneZXpE5bBisF1357IN4rmoapGoCilNOUZ9OYGmu%2Fqt2VnhAdMmLD6oSsfmZjBNl%2BYZ4m8n6Pt6fdp0Ksh4t9re0S5Z0pMhGbMbDpvKzuH%2FvGig2ss7YQS%2Fe%2BxD7dwSfutCEzAonR4n52CbHL40o4N4qm3BIIYSu1g8N636D0DD6w2joYidVvSwlFzKKevpeEfPHuG0dx%2B3XtLnwIkqBrgljM2eXb68gbqiOAn8Hg%2BLbfFJH6ybSeEC%2FOl03ISPLAB7mWUzpdRktJ9S3kkqicWhldzjQUnMRypP%2Fth9BqdAa6%2Bz85z1NckFDM%2FbYEPYXVWRgEAw%2F6aEwgY6pgFK0pDosnN9mjARL2QR8qXalyTYleET4ser2St6bg1K271m7llrMlinn21KifwKxl17Iicz7t%2BMjkqOekXBSCZVLb8riiYaP6bvqUDkgLRbdmplF4kVQf1xjCVgpUT86nQkJHGFYa%2B%2BNPBhmFeGb7EwKdvquPYNYCCyNpTihXJpD3gLiwe3GaPAcYq2QU2eHGRJfWeIoHfXXUQsdXfsF9iGUfE5P93V&X-Amz-Signature=af61e74959b91f212fd5545d73fec6bc1ce2823e232d8f218215d8e096dd7c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVNLM7X%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFhME4Q8WxFr%2F%2FGEEzhLOD83fUmgZVET9pNFM8795erzAiAedNUm8UwHtPHcCnjza5N%2Fo8K3oNlluIwZq%2FOM2IcD0ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMY6YonUmhFQgjyFBaKtwDIO%2BGaPHa24oxV51ftWKH6L99YIXEsU5GFLsihCS5kM7w5CKCqCxNwU4JYPeQjJBa18aHVDPalvPPUMPZ288mm8fS4lE2SZ667%2F4sbVtpoXiFuIe7U6Otp%2FM0Il6K2ZfNAiLLYuLTctKwdocYrVXtFk9HHxXpMfaPzeMaz6TUpvv%2FtdVM12CFEHLKV35mAl6drLIXj8V30Z5hLx41ee%2F0QpAkUyWyUVLoxobybzWq27QeWA5soU9bsEeUNqdanrWiZkUcwJlqwUDHaJPP7zQjfx6cdsRLzhT9LsxqF15swWPthEld7u3L0SneZXpE5bBisF1357IN4rmoapGoCilNOUZ9OYGmu%2Fqt2VnhAdMmLD6oSsfmZjBNl%2BYZ4m8n6Pt6fdp0Ksh4t9re0S5Z0pMhGbMbDpvKzuH%2FvGig2ss7YQS%2Fe%2BxD7dwSfutCEzAonR4n52CbHL40o4N4qm3BIIYSu1g8N636D0DD6w2joYidVvSwlFzKKevpeEfPHuG0dx%2B3XtLnwIkqBrgljM2eXb68gbqiOAn8Hg%2BLbfFJH6ybSeEC%2FOl03ISPLAB7mWUzpdRktJ9S3kkqicWhldzjQUnMRypP%2Fth9BqdAa6%2Bz85z1NckFDM%2FbYEPYXVWRgEAw%2F6aEwgY6pgFK0pDosnN9mjARL2QR8qXalyTYleET4ser2St6bg1K271m7llrMlinn21KifwKxl17Iicz7t%2BMjkqOekXBSCZVLb8riiYaP6bvqUDkgLRbdmplF4kVQf1xjCVgpUT86nQkJHGFYa%2B%2BNPBhmFeGb7EwKdvquPYNYCCyNpTihXJpD3gLiwe3GaPAcYq2QU2eHGRJfWeIoHfXXUQsdXfsF9iGUfE5P93V&X-Amz-Signature=090e4d5e4140eafc6f2a727ff740a9b29f49ded6d27085f8ba3f4cf4b97e0a83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVNLM7X%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFhME4Q8WxFr%2F%2FGEEzhLOD83fUmgZVET9pNFM8795erzAiAedNUm8UwHtPHcCnjza5N%2Fo8K3oNlluIwZq%2FOM2IcD0ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMY6YonUmhFQgjyFBaKtwDIO%2BGaPHa24oxV51ftWKH6L99YIXEsU5GFLsihCS5kM7w5CKCqCxNwU4JYPeQjJBa18aHVDPalvPPUMPZ288mm8fS4lE2SZ667%2F4sbVtpoXiFuIe7U6Otp%2FM0Il6K2ZfNAiLLYuLTctKwdocYrVXtFk9HHxXpMfaPzeMaz6TUpvv%2FtdVM12CFEHLKV35mAl6drLIXj8V30Z5hLx41ee%2F0QpAkUyWyUVLoxobybzWq27QeWA5soU9bsEeUNqdanrWiZkUcwJlqwUDHaJPP7zQjfx6cdsRLzhT9LsxqF15swWPthEld7u3L0SneZXpE5bBisF1357IN4rmoapGoCilNOUZ9OYGmu%2Fqt2VnhAdMmLD6oSsfmZjBNl%2BYZ4m8n6Pt6fdp0Ksh4t9re0S5Z0pMhGbMbDpvKzuH%2FvGig2ss7YQS%2Fe%2BxD7dwSfutCEzAonR4n52CbHL40o4N4qm3BIIYSu1g8N636D0DD6w2joYidVvSwlFzKKevpeEfPHuG0dx%2B3XtLnwIkqBrgljM2eXb68gbqiOAn8Hg%2BLbfFJH6ybSeEC%2FOl03ISPLAB7mWUzpdRktJ9S3kkqicWhldzjQUnMRypP%2Fth9BqdAa6%2Bz85z1NckFDM%2FbYEPYXVWRgEAw%2F6aEwgY6pgFK0pDosnN9mjARL2QR8qXalyTYleET4ser2St6bg1K271m7llrMlinn21KifwKxl17Iicz7t%2BMjkqOekXBSCZVLb8riiYaP6bvqUDkgLRbdmplF4kVQf1xjCVgpUT86nQkJHGFYa%2B%2BNPBhmFeGb7EwKdvquPYNYCCyNpTihXJpD3gLiwe3GaPAcYq2QU2eHGRJfWeIoHfXXUQsdXfsF9iGUfE5P93V&X-Amz-Signature=266db0776529f744fde60606cc5ecd6689fbabe451c28ee163e52d02d96cdaa6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
