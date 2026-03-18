---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVMFTQ4%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBIwwXP0a8ckaO7FeVxkT9x%2FTzljX2IkpdfpbPR2zNb1AiA79aY874JHA87VrvZZPSbZEJHQrFfPpUF6hZzfc8zhfSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrrybpPhvFHzUy8ugKtwDCE23aLOlnv6p%2BcNDG4hcGDufi2w1mOx2RE4GwZtgiDKNV%2BShxiKrxExyWf2z2bm0GcEFtgzUcj5%2BOJmWNkVsjUi8vQsYa5VQ2%2Baiplcv7PhgPTYvCNFm5bef0JeDrqJ%2FVGwKbQoPrFVrrPdjpjNuzGebJU1YyxQh0%2FuJ81X06hJXpZCrQF4IRKQkUYja0EDKtVCaUTk6qy%2F9A1SeFGWjjLDUqVoydifql49YRd%2FaMqJxu68ORIZbwWyCs3ldU7Q7xqEAdq3UVjVdt2YEbSnrjeAYBCraVqNcfanPAOq3A%2Ba9dfRf92lY5V%2BqA%2F5K9Zdw87cdLqlJ6oSPZaNA3kzSpw%2BLJU9pbF7L4bqACgv6dz8MGz6ISfBYU0URDMSRvjW6aboGG%2BUW7%2FTg%2BS1aWSvI8s7CeKb5B8l5WUwhGPyRP3%2BQBKgg3UDVyqYbHQqGpl%2FJgWpdKJxFBac%2B3VcDIhyWXinvttcAqgWfL36mYMF4PtYzqzAHztSehrnwwnc4ptOKKV29UgoTyMBdqyrQB1IZ4F1CYgT1nhN7yIkfWrUxbHzOdaGqZI4ksLpkDKbjLIXp1OCBd1h8kv0M38WEHmUguSozrq9YvVcj6HU7G%2B59bo5aTCsEQxHfI7AU3L4w5ennzQY6pgEu38o0n7FIaNxm6BYiPflU7p94l466XlPm4BSDaLtFZXZ4T1mGnTIyr4BfdRiZgdlIWL8l0K03zYO%2ByLGqG%2F5S%2B1%2Bol69xSE%2F0y1U2LTAEYNlKkFAByXYT3VinJdf%2BF6hdkpafj6YFoyFR4JRPcHnQO3pKSTp1Fo8bqmZbokz%2Fx6eV7xoJRAbyWzlMin%2Fp%2FGbmiYC4ywimfpAf3MXg%2BQWD3Cf0dd2h&X-Amz-Signature=350830f0b5da7de4fa78ebfa46f5e27f743327867e0d2707337e8e4f04fe4c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVMFTQ4%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBIwwXP0a8ckaO7FeVxkT9x%2FTzljX2IkpdfpbPR2zNb1AiA79aY874JHA87VrvZZPSbZEJHQrFfPpUF6hZzfc8zhfSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrrybpPhvFHzUy8ugKtwDCE23aLOlnv6p%2BcNDG4hcGDufi2w1mOx2RE4GwZtgiDKNV%2BShxiKrxExyWf2z2bm0GcEFtgzUcj5%2BOJmWNkVsjUi8vQsYa5VQ2%2Baiplcv7PhgPTYvCNFm5bef0JeDrqJ%2FVGwKbQoPrFVrrPdjpjNuzGebJU1YyxQh0%2FuJ81X06hJXpZCrQF4IRKQkUYja0EDKtVCaUTk6qy%2F9A1SeFGWjjLDUqVoydifql49YRd%2FaMqJxu68ORIZbwWyCs3ldU7Q7xqEAdq3UVjVdt2YEbSnrjeAYBCraVqNcfanPAOq3A%2Ba9dfRf92lY5V%2BqA%2F5K9Zdw87cdLqlJ6oSPZaNA3kzSpw%2BLJU9pbF7L4bqACgv6dz8MGz6ISfBYU0URDMSRvjW6aboGG%2BUW7%2FTg%2BS1aWSvI8s7CeKb5B8l5WUwhGPyRP3%2BQBKgg3UDVyqYbHQqGpl%2FJgWpdKJxFBac%2B3VcDIhyWXinvttcAqgWfL36mYMF4PtYzqzAHztSehrnwwnc4ptOKKV29UgoTyMBdqyrQB1IZ4F1CYgT1nhN7yIkfWrUxbHzOdaGqZI4ksLpkDKbjLIXp1OCBd1h8kv0M38WEHmUguSozrq9YvVcj6HU7G%2B59bo5aTCsEQxHfI7AU3L4w5ennzQY6pgEu38o0n7FIaNxm6BYiPflU7p94l466XlPm4BSDaLtFZXZ4T1mGnTIyr4BfdRiZgdlIWL8l0K03zYO%2ByLGqG%2F5S%2B1%2Bol69xSE%2F0y1U2LTAEYNlKkFAByXYT3VinJdf%2BF6hdkpafj6YFoyFR4JRPcHnQO3pKSTp1Fo8bqmZbokz%2Fx6eV7xoJRAbyWzlMin%2Fp%2FGbmiYC4ywimfpAf3MXg%2BQWD3Cf0dd2h&X-Amz-Signature=6b0864303bbc3566e84e05cf9c9269d6c5e34b15587acdd1c71a5c2a2d37c049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVMFTQ4%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBIwwXP0a8ckaO7FeVxkT9x%2FTzljX2IkpdfpbPR2zNb1AiA79aY874JHA87VrvZZPSbZEJHQrFfPpUF6hZzfc8zhfSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrrybpPhvFHzUy8ugKtwDCE23aLOlnv6p%2BcNDG4hcGDufi2w1mOx2RE4GwZtgiDKNV%2BShxiKrxExyWf2z2bm0GcEFtgzUcj5%2BOJmWNkVsjUi8vQsYa5VQ2%2Baiplcv7PhgPTYvCNFm5bef0JeDrqJ%2FVGwKbQoPrFVrrPdjpjNuzGebJU1YyxQh0%2FuJ81X06hJXpZCrQF4IRKQkUYja0EDKtVCaUTk6qy%2F9A1SeFGWjjLDUqVoydifql49YRd%2FaMqJxu68ORIZbwWyCs3ldU7Q7xqEAdq3UVjVdt2YEbSnrjeAYBCraVqNcfanPAOq3A%2Ba9dfRf92lY5V%2BqA%2F5K9Zdw87cdLqlJ6oSPZaNA3kzSpw%2BLJU9pbF7L4bqACgv6dz8MGz6ISfBYU0URDMSRvjW6aboGG%2BUW7%2FTg%2BS1aWSvI8s7CeKb5B8l5WUwhGPyRP3%2BQBKgg3UDVyqYbHQqGpl%2FJgWpdKJxFBac%2B3VcDIhyWXinvttcAqgWfL36mYMF4PtYzqzAHztSehrnwwnc4ptOKKV29UgoTyMBdqyrQB1IZ4F1CYgT1nhN7yIkfWrUxbHzOdaGqZI4ksLpkDKbjLIXp1OCBd1h8kv0M38WEHmUguSozrq9YvVcj6HU7G%2B59bo5aTCsEQxHfI7AU3L4w5ennzQY6pgEu38o0n7FIaNxm6BYiPflU7p94l466XlPm4BSDaLtFZXZ4T1mGnTIyr4BfdRiZgdlIWL8l0K03zYO%2ByLGqG%2F5S%2B1%2Bol69xSE%2F0y1U2LTAEYNlKkFAByXYT3VinJdf%2BF6hdkpafj6YFoyFR4JRPcHnQO3pKSTp1Fo8bqmZbokz%2Fx6eV7xoJRAbyWzlMin%2Fp%2FGbmiYC4ywimfpAf3MXg%2BQWD3Cf0dd2h&X-Amz-Signature=9fb6c8c0131eb99f14e8c0b5538c692465c20eecbb89553db733572a6bb40c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVMFTQ4%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBIwwXP0a8ckaO7FeVxkT9x%2FTzljX2IkpdfpbPR2zNb1AiA79aY874JHA87VrvZZPSbZEJHQrFfPpUF6hZzfc8zhfSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrrybpPhvFHzUy8ugKtwDCE23aLOlnv6p%2BcNDG4hcGDufi2w1mOx2RE4GwZtgiDKNV%2BShxiKrxExyWf2z2bm0GcEFtgzUcj5%2BOJmWNkVsjUi8vQsYa5VQ2%2Baiplcv7PhgPTYvCNFm5bef0JeDrqJ%2FVGwKbQoPrFVrrPdjpjNuzGebJU1YyxQh0%2FuJ81X06hJXpZCrQF4IRKQkUYja0EDKtVCaUTk6qy%2F9A1SeFGWjjLDUqVoydifql49YRd%2FaMqJxu68ORIZbwWyCs3ldU7Q7xqEAdq3UVjVdt2YEbSnrjeAYBCraVqNcfanPAOq3A%2Ba9dfRf92lY5V%2BqA%2F5K9Zdw87cdLqlJ6oSPZaNA3kzSpw%2BLJU9pbF7L4bqACgv6dz8MGz6ISfBYU0URDMSRvjW6aboGG%2BUW7%2FTg%2BS1aWSvI8s7CeKb5B8l5WUwhGPyRP3%2BQBKgg3UDVyqYbHQqGpl%2FJgWpdKJxFBac%2B3VcDIhyWXinvttcAqgWfL36mYMF4PtYzqzAHztSehrnwwnc4ptOKKV29UgoTyMBdqyrQB1IZ4F1CYgT1nhN7yIkfWrUxbHzOdaGqZI4ksLpkDKbjLIXp1OCBd1h8kv0M38WEHmUguSozrq9YvVcj6HU7G%2B59bo5aTCsEQxHfI7AU3L4w5ennzQY6pgEu38o0n7FIaNxm6BYiPflU7p94l466XlPm4BSDaLtFZXZ4T1mGnTIyr4BfdRiZgdlIWL8l0K03zYO%2ByLGqG%2F5S%2B1%2Bol69xSE%2F0y1U2LTAEYNlKkFAByXYT3VinJdf%2BF6hdkpafj6YFoyFR4JRPcHnQO3pKSTp1Fo8bqmZbokz%2Fx6eV7xoJRAbyWzlMin%2Fp%2FGbmiYC4ywimfpAf3MXg%2BQWD3Cf0dd2h&X-Amz-Signature=006ef1fd0b5b49e59306703ccd84b6db81366ba591a37837cf7d85fa5273a80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVMFTQ4%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBIwwXP0a8ckaO7FeVxkT9x%2FTzljX2IkpdfpbPR2zNb1AiA79aY874JHA87VrvZZPSbZEJHQrFfPpUF6hZzfc8zhfSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrrybpPhvFHzUy8ugKtwDCE23aLOlnv6p%2BcNDG4hcGDufi2w1mOx2RE4GwZtgiDKNV%2BShxiKrxExyWf2z2bm0GcEFtgzUcj5%2BOJmWNkVsjUi8vQsYa5VQ2%2Baiplcv7PhgPTYvCNFm5bef0JeDrqJ%2FVGwKbQoPrFVrrPdjpjNuzGebJU1YyxQh0%2FuJ81X06hJXpZCrQF4IRKQkUYja0EDKtVCaUTk6qy%2F9A1SeFGWjjLDUqVoydifql49YRd%2FaMqJxu68ORIZbwWyCs3ldU7Q7xqEAdq3UVjVdt2YEbSnrjeAYBCraVqNcfanPAOq3A%2Ba9dfRf92lY5V%2BqA%2F5K9Zdw87cdLqlJ6oSPZaNA3kzSpw%2BLJU9pbF7L4bqACgv6dz8MGz6ISfBYU0URDMSRvjW6aboGG%2BUW7%2FTg%2BS1aWSvI8s7CeKb5B8l5WUwhGPyRP3%2BQBKgg3UDVyqYbHQqGpl%2FJgWpdKJxFBac%2B3VcDIhyWXinvttcAqgWfL36mYMF4PtYzqzAHztSehrnwwnc4ptOKKV29UgoTyMBdqyrQB1IZ4F1CYgT1nhN7yIkfWrUxbHzOdaGqZI4ksLpkDKbjLIXp1OCBd1h8kv0M38WEHmUguSozrq9YvVcj6HU7G%2B59bo5aTCsEQxHfI7AU3L4w5ennzQY6pgEu38o0n7FIaNxm6BYiPflU7p94l466XlPm4BSDaLtFZXZ4T1mGnTIyr4BfdRiZgdlIWL8l0K03zYO%2ByLGqG%2F5S%2B1%2Bol69xSE%2F0y1U2LTAEYNlKkFAByXYT3VinJdf%2BF6hdkpafj6YFoyFR4JRPcHnQO3pKSTp1Fo8bqmZbokz%2Fx6eV7xoJRAbyWzlMin%2Fp%2FGbmiYC4ywimfpAf3MXg%2BQWD3Cf0dd2h&X-Amz-Signature=fe30ecbd4627dc667ff0cd801a133a3f1af1597c468f5c08fcced3c6cf3e9624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
