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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQW7TBI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQ3pR8m5RwsxrxSEYB%2Bb87Xf0PFtj%2BfdaCEIMPfzwurAIhAIu%2BN5h38Y4SUMAKpTbxNel%2Fs9oQ1ImPZZ5aRuXo6SBbKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpysV2tzhuBirfx7Mq3ANhuQoCf6NwhA1ukamVP5WyB3WQOTiKrXLwPKhcA3xq9Xk02ACEia4jbCsoSSQGbs7X3BEqTgCArZGuC5uXTyikc%2BkQwy1o%2FZsHjaNLxjYQhQs74Q3vP3CzyXsQpq6Zl%2F6tih3tNfNF3EF3fykwtX1zBXuOcy%2BusEFI5j41w2bXHRSDvR6gs23ZD8T2PPKrFIfa5MuwHJJQ52Pqu3Oz8nj64pB5nHVpVHvkTRnuWn%2B2NPlLzL%2BLb%2B1zO96ksu8e6Iwqj1qii3ri6A%2FlrT1Va6jgsLf7rDGthPcT79UExePR%2BqUphYWdSbIdBz8Wi1RIomb%2F632bZEm6tsqHhQJ%2ByzOHhB%2BCe%2BogN5hHaV9ZsxTBiGUPI69EvcQqww8jULD%2FKbknW1IXh4WjJLu8y5v91rvEicV3AoEeQl3hXgW4RnGN09XgtG9ORHpdOdoyezzdNkAFfx%2BLHKxTz%2FsGfsd%2B7fzmylmNCqiL6H%2BRjzqniiE3TG5rEbWZXx9jga3rrGxUKPgeKWVOGgqHoZynjeELrG5ZrNBP2BoHHO6lgRIPxHCCVpiRAB%2FYMz1KDutzGTzpWT%2FK5EcSOB5LyM%2Bqcmeycx18khksuc9Tq2%2BgrJlJLofLWm45TjVqj96GMitknTDi7vu%2BBjqkAfL442I42m%2FAsbHKdKezRPDDF4A6WEoqT%2FzsNmCpKhwLE24T3EVDw1TVu5KvGfoe7hKRMBxxzaWq9pjD5VGwbgnlibSlCoe20H9BXCYMEtMwHeX1fVi%2FiV46oPdTS68LpCED5SefcQsb%2Bh291N5veGW4vUZjO6epWBHvBUZ98XnmPqu86XAnnesCe3nhW7HZS%2BstYuJoDCa%2B%2FYoSo6uBX89%2Fdjm9&X-Amz-Signature=3c464fb9173fd17c6285cc9247a60b0e8cf6025843837045d9f6ee1470e1e332&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQW7TBI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQ3pR8m5RwsxrxSEYB%2Bb87Xf0PFtj%2BfdaCEIMPfzwurAIhAIu%2BN5h38Y4SUMAKpTbxNel%2Fs9oQ1ImPZZ5aRuXo6SBbKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpysV2tzhuBirfx7Mq3ANhuQoCf6NwhA1ukamVP5WyB3WQOTiKrXLwPKhcA3xq9Xk02ACEia4jbCsoSSQGbs7X3BEqTgCArZGuC5uXTyikc%2BkQwy1o%2FZsHjaNLxjYQhQs74Q3vP3CzyXsQpq6Zl%2F6tih3tNfNF3EF3fykwtX1zBXuOcy%2BusEFI5j41w2bXHRSDvR6gs23ZD8T2PPKrFIfa5MuwHJJQ52Pqu3Oz8nj64pB5nHVpVHvkTRnuWn%2B2NPlLzL%2BLb%2B1zO96ksu8e6Iwqj1qii3ri6A%2FlrT1Va6jgsLf7rDGthPcT79UExePR%2BqUphYWdSbIdBz8Wi1RIomb%2F632bZEm6tsqHhQJ%2ByzOHhB%2BCe%2BogN5hHaV9ZsxTBiGUPI69EvcQqww8jULD%2FKbknW1IXh4WjJLu8y5v91rvEicV3AoEeQl3hXgW4RnGN09XgtG9ORHpdOdoyezzdNkAFfx%2BLHKxTz%2FsGfsd%2B7fzmylmNCqiL6H%2BRjzqniiE3TG5rEbWZXx9jga3rrGxUKPgeKWVOGgqHoZynjeELrG5ZrNBP2BoHHO6lgRIPxHCCVpiRAB%2FYMz1KDutzGTzpWT%2FK5EcSOB5LyM%2Bqcmeycx18khksuc9Tq2%2BgrJlJLofLWm45TjVqj96GMitknTDi7vu%2BBjqkAfL442I42m%2FAsbHKdKezRPDDF4A6WEoqT%2FzsNmCpKhwLE24T3EVDw1TVu5KvGfoe7hKRMBxxzaWq9pjD5VGwbgnlibSlCoe20H9BXCYMEtMwHeX1fVi%2FiV46oPdTS68LpCED5SefcQsb%2Bh291N5veGW4vUZjO6epWBHvBUZ98XnmPqu86XAnnesCe3nhW7HZS%2BstYuJoDCa%2B%2FYoSo6uBX89%2Fdjm9&X-Amz-Signature=5ebf7ce384a108e61b2163ace6d1a85dbc7b86731ce37e8348b89adbb539a203&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQW7TBI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQ3pR8m5RwsxrxSEYB%2Bb87Xf0PFtj%2BfdaCEIMPfzwurAIhAIu%2BN5h38Y4SUMAKpTbxNel%2Fs9oQ1ImPZZ5aRuXo6SBbKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpysV2tzhuBirfx7Mq3ANhuQoCf6NwhA1ukamVP5WyB3WQOTiKrXLwPKhcA3xq9Xk02ACEia4jbCsoSSQGbs7X3BEqTgCArZGuC5uXTyikc%2BkQwy1o%2FZsHjaNLxjYQhQs74Q3vP3CzyXsQpq6Zl%2F6tih3tNfNF3EF3fykwtX1zBXuOcy%2BusEFI5j41w2bXHRSDvR6gs23ZD8T2PPKrFIfa5MuwHJJQ52Pqu3Oz8nj64pB5nHVpVHvkTRnuWn%2B2NPlLzL%2BLb%2B1zO96ksu8e6Iwqj1qii3ri6A%2FlrT1Va6jgsLf7rDGthPcT79UExePR%2BqUphYWdSbIdBz8Wi1RIomb%2F632bZEm6tsqHhQJ%2ByzOHhB%2BCe%2BogN5hHaV9ZsxTBiGUPI69EvcQqww8jULD%2FKbknW1IXh4WjJLu8y5v91rvEicV3AoEeQl3hXgW4RnGN09XgtG9ORHpdOdoyezzdNkAFfx%2BLHKxTz%2FsGfsd%2B7fzmylmNCqiL6H%2BRjzqniiE3TG5rEbWZXx9jga3rrGxUKPgeKWVOGgqHoZynjeELrG5ZrNBP2BoHHO6lgRIPxHCCVpiRAB%2FYMz1KDutzGTzpWT%2FK5EcSOB5LyM%2Bqcmeycx18khksuc9Tq2%2BgrJlJLofLWm45TjVqj96GMitknTDi7vu%2BBjqkAfL442I42m%2FAsbHKdKezRPDDF4A6WEoqT%2FzsNmCpKhwLE24T3EVDw1TVu5KvGfoe7hKRMBxxzaWq9pjD5VGwbgnlibSlCoe20H9BXCYMEtMwHeX1fVi%2FiV46oPdTS68LpCED5SefcQsb%2Bh291N5veGW4vUZjO6epWBHvBUZ98XnmPqu86XAnnesCe3nhW7HZS%2BstYuJoDCa%2B%2FYoSo6uBX89%2Fdjm9&X-Amz-Signature=95def6c1965eaf081390e08540267361ed98fe57ec44455246f79a89cd9df1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQW7TBI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQ3pR8m5RwsxrxSEYB%2Bb87Xf0PFtj%2BfdaCEIMPfzwurAIhAIu%2BN5h38Y4SUMAKpTbxNel%2Fs9oQ1ImPZZ5aRuXo6SBbKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpysV2tzhuBirfx7Mq3ANhuQoCf6NwhA1ukamVP5WyB3WQOTiKrXLwPKhcA3xq9Xk02ACEia4jbCsoSSQGbs7X3BEqTgCArZGuC5uXTyikc%2BkQwy1o%2FZsHjaNLxjYQhQs74Q3vP3CzyXsQpq6Zl%2F6tih3tNfNF3EF3fykwtX1zBXuOcy%2BusEFI5j41w2bXHRSDvR6gs23ZD8T2PPKrFIfa5MuwHJJQ52Pqu3Oz8nj64pB5nHVpVHvkTRnuWn%2B2NPlLzL%2BLb%2B1zO96ksu8e6Iwqj1qii3ri6A%2FlrT1Va6jgsLf7rDGthPcT79UExePR%2BqUphYWdSbIdBz8Wi1RIomb%2F632bZEm6tsqHhQJ%2ByzOHhB%2BCe%2BogN5hHaV9ZsxTBiGUPI69EvcQqww8jULD%2FKbknW1IXh4WjJLu8y5v91rvEicV3AoEeQl3hXgW4RnGN09XgtG9ORHpdOdoyezzdNkAFfx%2BLHKxTz%2FsGfsd%2B7fzmylmNCqiL6H%2BRjzqniiE3TG5rEbWZXx9jga3rrGxUKPgeKWVOGgqHoZynjeELrG5ZrNBP2BoHHO6lgRIPxHCCVpiRAB%2FYMz1KDutzGTzpWT%2FK5EcSOB5LyM%2Bqcmeycx18khksuc9Tq2%2BgrJlJLofLWm45TjVqj96GMitknTDi7vu%2BBjqkAfL442I42m%2FAsbHKdKezRPDDF4A6WEoqT%2FzsNmCpKhwLE24T3EVDw1TVu5KvGfoe7hKRMBxxzaWq9pjD5VGwbgnlibSlCoe20H9BXCYMEtMwHeX1fVi%2FiV46oPdTS68LpCED5SefcQsb%2Bh291N5veGW4vUZjO6epWBHvBUZ98XnmPqu86XAnnesCe3nhW7HZS%2BstYuJoDCa%2B%2FYoSo6uBX89%2Fdjm9&X-Amz-Signature=9e48374ee340cbb47a3d2f06b5fb9bac70eb10595e32acd1af5636d72acea00b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQW7TBI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQ3pR8m5RwsxrxSEYB%2Bb87Xf0PFtj%2BfdaCEIMPfzwurAIhAIu%2BN5h38Y4SUMAKpTbxNel%2Fs9oQ1ImPZZ5aRuXo6SBbKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpysV2tzhuBirfx7Mq3ANhuQoCf6NwhA1ukamVP5WyB3WQOTiKrXLwPKhcA3xq9Xk02ACEia4jbCsoSSQGbs7X3BEqTgCArZGuC5uXTyikc%2BkQwy1o%2FZsHjaNLxjYQhQs74Q3vP3CzyXsQpq6Zl%2F6tih3tNfNF3EF3fykwtX1zBXuOcy%2BusEFI5j41w2bXHRSDvR6gs23ZD8T2PPKrFIfa5MuwHJJQ52Pqu3Oz8nj64pB5nHVpVHvkTRnuWn%2B2NPlLzL%2BLb%2B1zO96ksu8e6Iwqj1qii3ri6A%2FlrT1Va6jgsLf7rDGthPcT79UExePR%2BqUphYWdSbIdBz8Wi1RIomb%2F632bZEm6tsqHhQJ%2ByzOHhB%2BCe%2BogN5hHaV9ZsxTBiGUPI69EvcQqww8jULD%2FKbknW1IXh4WjJLu8y5v91rvEicV3AoEeQl3hXgW4RnGN09XgtG9ORHpdOdoyezzdNkAFfx%2BLHKxTz%2FsGfsd%2B7fzmylmNCqiL6H%2BRjzqniiE3TG5rEbWZXx9jga3rrGxUKPgeKWVOGgqHoZynjeELrG5ZrNBP2BoHHO6lgRIPxHCCVpiRAB%2FYMz1KDutzGTzpWT%2FK5EcSOB5LyM%2Bqcmeycx18khksuc9Tq2%2BgrJlJLofLWm45TjVqj96GMitknTDi7vu%2BBjqkAfL442I42m%2FAsbHKdKezRPDDF4A6WEoqT%2FzsNmCpKhwLE24T3EVDw1TVu5KvGfoe7hKRMBxxzaWq9pjD5VGwbgnlibSlCoe20H9BXCYMEtMwHeX1fVi%2FiV46oPdTS68LpCED5SefcQsb%2Bh291N5veGW4vUZjO6epWBHvBUZ98XnmPqu86XAnnesCe3nhW7HZS%2BstYuJoDCa%2B%2FYoSo6uBX89%2Fdjm9&X-Amz-Signature=7a72c4fa61b33e8cd696f982a146cac03308b372c38638b5387ff921bc5a3e97&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
