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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKX5PU62%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCi8N9emCmwNvrWewrkUciYek%2FVoiH46pcHeP4l4EQVrgIhAL1tRXwR6ak2oLqe0MdSneph01%2FZdp2V87OdXs6yWBt%2BKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQayzb99l%2B4Fx3HSkq3AOgLgxEN44fuCGz%2BfUHuCpeTylOvE76ESTu5Mz%2FsIpOpj9Z%2BNCjuSeuoGC8Q47ySvT0A%2BNoZ97B0V7DSIsGz7OicG15hTpJIexyi7MIXPlqPdBwxoayRQViSk4tErojTjkwW6P0W%2Bv8ZlAHo1Z71JWmW3%2FMJG%2FcOaqad1uSNKa44yQO0uPZzOiug35Cef14EaI%2FIj79wff5Q4w9Md0NFsgR%2FCV9uvhgm%2FYU3q6iPBo7YJld2Y%2BQ7jK%2FU3%2Bp7oDUgdaAr0mpedA0wFZ2B18EBQBS14Zhv3v%2FvFU8UFWprr8zNNfxskXpXvjh6s92jTJWgajsJ23j%2FM8Fc8hwW1meCklTScyfixppVl%2FwsKRUU%2FaUD2VS4Aqd7ft59Mvh5Y44TF1d4DHTh%2FCAUxuUwad%2BnaZ9eQxXWD00Cs7eliwOrXlYlfVf0%2FUJC4ZozYCiMaBr%2FyvWeDlILBlWlprCqylDQG5i926cfSgyc5Unxw8cu8eoX6AncXbLZWTf0r4cu2tUON6ZTJmOy1z0OmueXRJQQTrRC%2BoXQU%2BejoNS33KA6WnSycAhiBad75lbGH4Nc6AdZGKUp5bYKPtVMi2Bo%2FHY2x0%2BfKvRUAR24y7er5FAk41N2%2B0Et4P7QiLKp9WljjCAhYm%2BBjqkAQf29ldwbilUOrJmBq2bp2Eixdi6P%2B2T9F1zsudugGbGMC4v3vlhKErzIIzTCtxOmNCQdVn00507zjFELhUXuJaKM90K1wJKYVg1iKvDZ5WtCbW3YBGpXcxjLprq6NsEBUJFv3tR8cpgz3WKy25Y%2BNNmZLYny45CkIPkcLsOQOH48%2BmSE%2B1oDKLVX6Q0%2FhIsbnXJBoQ7p1LoElZfOKc1TKuLJs1o&X-Amz-Signature=971dce7c8ce6f5ae6e9485513634ba902c3d2a20f733abb3a9a27a7be3f2babb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKX5PU62%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCi8N9emCmwNvrWewrkUciYek%2FVoiH46pcHeP4l4EQVrgIhAL1tRXwR6ak2oLqe0MdSneph01%2FZdp2V87OdXs6yWBt%2BKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQayzb99l%2B4Fx3HSkq3AOgLgxEN44fuCGz%2BfUHuCpeTylOvE76ESTu5Mz%2FsIpOpj9Z%2BNCjuSeuoGC8Q47ySvT0A%2BNoZ97B0V7DSIsGz7OicG15hTpJIexyi7MIXPlqPdBwxoayRQViSk4tErojTjkwW6P0W%2Bv8ZlAHo1Z71JWmW3%2FMJG%2FcOaqad1uSNKa44yQO0uPZzOiug35Cef14EaI%2FIj79wff5Q4w9Md0NFsgR%2FCV9uvhgm%2FYU3q6iPBo7YJld2Y%2BQ7jK%2FU3%2Bp7oDUgdaAr0mpedA0wFZ2B18EBQBS14Zhv3v%2FvFU8UFWprr8zNNfxskXpXvjh6s92jTJWgajsJ23j%2FM8Fc8hwW1meCklTScyfixppVl%2FwsKRUU%2FaUD2VS4Aqd7ft59Mvh5Y44TF1d4DHTh%2FCAUxuUwad%2BnaZ9eQxXWD00Cs7eliwOrXlYlfVf0%2FUJC4ZozYCiMaBr%2FyvWeDlILBlWlprCqylDQG5i926cfSgyc5Unxw8cu8eoX6AncXbLZWTf0r4cu2tUON6ZTJmOy1z0OmueXRJQQTrRC%2BoXQU%2BejoNS33KA6WnSycAhiBad75lbGH4Nc6AdZGKUp5bYKPtVMi2Bo%2FHY2x0%2BfKvRUAR24y7er5FAk41N2%2B0Et4P7QiLKp9WljjCAhYm%2BBjqkAQf29ldwbilUOrJmBq2bp2Eixdi6P%2B2T9F1zsudugGbGMC4v3vlhKErzIIzTCtxOmNCQdVn00507zjFELhUXuJaKM90K1wJKYVg1iKvDZ5WtCbW3YBGpXcxjLprq6NsEBUJFv3tR8cpgz3WKy25Y%2BNNmZLYny45CkIPkcLsOQOH48%2BmSE%2B1oDKLVX6Q0%2FhIsbnXJBoQ7p1LoElZfOKc1TKuLJs1o&X-Amz-Signature=beff56bd08144d4c6149c501c0745b17e858bc8f15a0eb39dabab122ac0dcf08&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKX5PU62%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCi8N9emCmwNvrWewrkUciYek%2FVoiH46pcHeP4l4EQVrgIhAL1tRXwR6ak2oLqe0MdSneph01%2FZdp2V87OdXs6yWBt%2BKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQayzb99l%2B4Fx3HSkq3AOgLgxEN44fuCGz%2BfUHuCpeTylOvE76ESTu5Mz%2FsIpOpj9Z%2BNCjuSeuoGC8Q47ySvT0A%2BNoZ97B0V7DSIsGz7OicG15hTpJIexyi7MIXPlqPdBwxoayRQViSk4tErojTjkwW6P0W%2Bv8ZlAHo1Z71JWmW3%2FMJG%2FcOaqad1uSNKa44yQO0uPZzOiug35Cef14EaI%2FIj79wff5Q4w9Md0NFsgR%2FCV9uvhgm%2FYU3q6iPBo7YJld2Y%2BQ7jK%2FU3%2Bp7oDUgdaAr0mpedA0wFZ2B18EBQBS14Zhv3v%2FvFU8UFWprr8zNNfxskXpXvjh6s92jTJWgajsJ23j%2FM8Fc8hwW1meCklTScyfixppVl%2FwsKRUU%2FaUD2VS4Aqd7ft59Mvh5Y44TF1d4DHTh%2FCAUxuUwad%2BnaZ9eQxXWD00Cs7eliwOrXlYlfVf0%2FUJC4ZozYCiMaBr%2FyvWeDlILBlWlprCqylDQG5i926cfSgyc5Unxw8cu8eoX6AncXbLZWTf0r4cu2tUON6ZTJmOy1z0OmueXRJQQTrRC%2BoXQU%2BejoNS33KA6WnSycAhiBad75lbGH4Nc6AdZGKUp5bYKPtVMi2Bo%2FHY2x0%2BfKvRUAR24y7er5FAk41N2%2B0Et4P7QiLKp9WljjCAhYm%2BBjqkAQf29ldwbilUOrJmBq2bp2Eixdi6P%2B2T9F1zsudugGbGMC4v3vlhKErzIIzTCtxOmNCQdVn00507zjFELhUXuJaKM90K1wJKYVg1iKvDZ5WtCbW3YBGpXcxjLprq6NsEBUJFv3tR8cpgz3WKy25Y%2BNNmZLYny45CkIPkcLsOQOH48%2BmSE%2B1oDKLVX6Q0%2FhIsbnXJBoQ7p1LoElZfOKc1TKuLJs1o&X-Amz-Signature=59043ffbe657f4758605634ffcd9c1fcb7fd27bdc785712bba05a8235294b642&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKX5PU62%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCi8N9emCmwNvrWewrkUciYek%2FVoiH46pcHeP4l4EQVrgIhAL1tRXwR6ak2oLqe0MdSneph01%2FZdp2V87OdXs6yWBt%2BKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQayzb99l%2B4Fx3HSkq3AOgLgxEN44fuCGz%2BfUHuCpeTylOvE76ESTu5Mz%2FsIpOpj9Z%2BNCjuSeuoGC8Q47ySvT0A%2BNoZ97B0V7DSIsGz7OicG15hTpJIexyi7MIXPlqPdBwxoayRQViSk4tErojTjkwW6P0W%2Bv8ZlAHo1Z71JWmW3%2FMJG%2FcOaqad1uSNKa44yQO0uPZzOiug35Cef14EaI%2FIj79wff5Q4w9Md0NFsgR%2FCV9uvhgm%2FYU3q6iPBo7YJld2Y%2BQ7jK%2FU3%2Bp7oDUgdaAr0mpedA0wFZ2B18EBQBS14Zhv3v%2FvFU8UFWprr8zNNfxskXpXvjh6s92jTJWgajsJ23j%2FM8Fc8hwW1meCklTScyfixppVl%2FwsKRUU%2FaUD2VS4Aqd7ft59Mvh5Y44TF1d4DHTh%2FCAUxuUwad%2BnaZ9eQxXWD00Cs7eliwOrXlYlfVf0%2FUJC4ZozYCiMaBr%2FyvWeDlILBlWlprCqylDQG5i926cfSgyc5Unxw8cu8eoX6AncXbLZWTf0r4cu2tUON6ZTJmOy1z0OmueXRJQQTrRC%2BoXQU%2BejoNS33KA6WnSycAhiBad75lbGH4Nc6AdZGKUp5bYKPtVMi2Bo%2FHY2x0%2BfKvRUAR24y7er5FAk41N2%2B0Et4P7QiLKp9WljjCAhYm%2BBjqkAQf29ldwbilUOrJmBq2bp2Eixdi6P%2B2T9F1zsudugGbGMC4v3vlhKErzIIzTCtxOmNCQdVn00507zjFELhUXuJaKM90K1wJKYVg1iKvDZ5WtCbW3YBGpXcxjLprq6NsEBUJFv3tR8cpgz3WKy25Y%2BNNmZLYny45CkIPkcLsOQOH48%2BmSE%2B1oDKLVX6Q0%2FhIsbnXJBoQ7p1LoElZfOKc1TKuLJs1o&X-Amz-Signature=24fcf37058c5aea71a7fe0e0d2e42007237a98d285f2ccd2cf056945c6bee07a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKX5PU62%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCi8N9emCmwNvrWewrkUciYek%2FVoiH46pcHeP4l4EQVrgIhAL1tRXwR6ak2oLqe0MdSneph01%2FZdp2V87OdXs6yWBt%2BKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQayzb99l%2B4Fx3HSkq3AOgLgxEN44fuCGz%2BfUHuCpeTylOvE76ESTu5Mz%2FsIpOpj9Z%2BNCjuSeuoGC8Q47ySvT0A%2BNoZ97B0V7DSIsGz7OicG15hTpJIexyi7MIXPlqPdBwxoayRQViSk4tErojTjkwW6P0W%2Bv8ZlAHo1Z71JWmW3%2FMJG%2FcOaqad1uSNKa44yQO0uPZzOiug35Cef14EaI%2FIj79wff5Q4w9Md0NFsgR%2FCV9uvhgm%2FYU3q6iPBo7YJld2Y%2BQ7jK%2FU3%2Bp7oDUgdaAr0mpedA0wFZ2B18EBQBS14Zhv3v%2FvFU8UFWprr8zNNfxskXpXvjh6s92jTJWgajsJ23j%2FM8Fc8hwW1meCklTScyfixppVl%2FwsKRUU%2FaUD2VS4Aqd7ft59Mvh5Y44TF1d4DHTh%2FCAUxuUwad%2BnaZ9eQxXWD00Cs7eliwOrXlYlfVf0%2FUJC4ZozYCiMaBr%2FyvWeDlILBlWlprCqylDQG5i926cfSgyc5Unxw8cu8eoX6AncXbLZWTf0r4cu2tUON6ZTJmOy1z0OmueXRJQQTrRC%2BoXQU%2BejoNS33KA6WnSycAhiBad75lbGH4Nc6AdZGKUp5bYKPtVMi2Bo%2FHY2x0%2BfKvRUAR24y7er5FAk41N2%2B0Et4P7QiLKp9WljjCAhYm%2BBjqkAQf29ldwbilUOrJmBq2bp2Eixdi6P%2B2T9F1zsudugGbGMC4v3vlhKErzIIzTCtxOmNCQdVn00507zjFELhUXuJaKM90K1wJKYVg1iKvDZ5WtCbW3YBGpXcxjLprq6NsEBUJFv3tR8cpgz3WKy25Y%2BNNmZLYny45CkIPkcLsOQOH48%2BmSE%2B1oDKLVX6Q0%2FhIsbnXJBoQ7p1LoElZfOKc1TKuLJs1o&X-Amz-Signature=d70777d3011bf439f877d706689e8a376ca1c4a01568f74c5428749025a895b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
