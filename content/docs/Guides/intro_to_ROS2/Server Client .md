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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZWASLSE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAqambTc56xcAyhbicLORRT4dsUXlSokWeqKnEnp8cwxAiEA%2FBln3i3jYF6W3ihdWafqmxoYyQc9ujvAOp2ZYo8gmHYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuyNlTom3qGgKITsCrcAy8XlqphikBGJzePUJYqEnAFsDa4z%2FPc%2FlnM5NZf4ORqAxcjyBUrA%2FwTwVEdsvx51tDb%2F8hwKZ3OszYGuYQXrs3nEtrEMrnwz1as0QOeyWqod0Q7HDdmycFPUfkYz1DosSpkeO5DknhTvrVYUDqvwln7cYRe9GDsHu8hQroHc0DIlKLZ%2BjrVwzLuApwZZTFurje%2FgCzgn6H0gHyT3%2Fy9xnKU9PKJ%2F2sLzTuUNipJu0mzg%2BTYm%2FdejceYXI7iBjmU75eTxFps385L6xunXnvqTFg17ETIAg7CCrYcUh1H3DMb6KetPW1sqwzkxMOdiTh9s9e4UwWmM1MKf0IKiB2rvrishDJehQJouJpTWRfARUGxhxfSGOadwvG8DRpxu4%2Fj%2FjlTyCrrHMeW1UoZ0gAQ%2Foi2c%2FiFf0wd7jyTeX29v9d5znqHkmkxlNUV8phjNcH05URAaKx5wgQwnORy13%2BoCijYwHt5oeb%2Bp11mxKGfeiixwUBHOswoE5%2B8J3Z%2Bxj%2Fkrqzp812BkypHA60dHkirIWUzjjV3nLK%2ByLkQD9X%2By9VTGbO8J22QaWQIbmgQhq9kUFD0JKQjtaYrgYUAqnJrjmxVO%2BLZOLrcA%2FtLFx9744PLsxOVe94Vfl4%2FlVh%2BMODr3r8GOqUBOWnXXXWFV4n0Tle4OXx5vJ909nhjMVq5T3hmAqfBf7L7Q6VtPg3Uk44XWtUFX%2BCiYxnlNiJ%2BmofO3v%2FrgTwB3e%2Blwva9I0umCfJ1UxYPQMVaxmE6fOyoeCGBL1Kuf1k0xnxLUrkneM%2FcZT65qSYw2XBcKQ0ZsLSUjL5%2FGsd80YxheEOC5YTm%2BLSMm1zOebO5brJss7VfShOoB3Nj3fae9Q6q1qFL&X-Amz-Signature=b7e43e6b66bd26fe1b2cf2725d146fe4393dc7d320359a39add5fb60c21d3e74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZWASLSE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAqambTc56xcAyhbicLORRT4dsUXlSokWeqKnEnp8cwxAiEA%2FBln3i3jYF6W3ihdWafqmxoYyQc9ujvAOp2ZYo8gmHYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuyNlTom3qGgKITsCrcAy8XlqphikBGJzePUJYqEnAFsDa4z%2FPc%2FlnM5NZf4ORqAxcjyBUrA%2FwTwVEdsvx51tDb%2F8hwKZ3OszYGuYQXrs3nEtrEMrnwz1as0QOeyWqod0Q7HDdmycFPUfkYz1DosSpkeO5DknhTvrVYUDqvwln7cYRe9GDsHu8hQroHc0DIlKLZ%2BjrVwzLuApwZZTFurje%2FgCzgn6H0gHyT3%2Fy9xnKU9PKJ%2F2sLzTuUNipJu0mzg%2BTYm%2FdejceYXI7iBjmU75eTxFps385L6xunXnvqTFg17ETIAg7CCrYcUh1H3DMb6KetPW1sqwzkxMOdiTh9s9e4UwWmM1MKf0IKiB2rvrishDJehQJouJpTWRfARUGxhxfSGOadwvG8DRpxu4%2Fj%2FjlTyCrrHMeW1UoZ0gAQ%2Foi2c%2FiFf0wd7jyTeX29v9d5znqHkmkxlNUV8phjNcH05URAaKx5wgQwnORy13%2BoCijYwHt5oeb%2Bp11mxKGfeiixwUBHOswoE5%2B8J3Z%2Bxj%2Fkrqzp812BkypHA60dHkirIWUzjjV3nLK%2ByLkQD9X%2By9VTGbO8J22QaWQIbmgQhq9kUFD0JKQjtaYrgYUAqnJrjmxVO%2BLZOLrcA%2FtLFx9744PLsxOVe94Vfl4%2FlVh%2BMODr3r8GOqUBOWnXXXWFV4n0Tle4OXx5vJ909nhjMVq5T3hmAqfBf7L7Q6VtPg3Uk44XWtUFX%2BCiYxnlNiJ%2BmofO3v%2FrgTwB3e%2Blwva9I0umCfJ1UxYPQMVaxmE6fOyoeCGBL1Kuf1k0xnxLUrkneM%2FcZT65qSYw2XBcKQ0ZsLSUjL5%2FGsd80YxheEOC5YTm%2BLSMm1zOebO5brJss7VfShOoB3Nj3fae9Q6q1qFL&X-Amz-Signature=a4f5d00fe25dd4d9274794263e5cb74b24ff1e23bf61420b684291a1d9783f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZWASLSE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAqambTc56xcAyhbicLORRT4dsUXlSokWeqKnEnp8cwxAiEA%2FBln3i3jYF6W3ihdWafqmxoYyQc9ujvAOp2ZYo8gmHYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuyNlTom3qGgKITsCrcAy8XlqphikBGJzePUJYqEnAFsDa4z%2FPc%2FlnM5NZf4ORqAxcjyBUrA%2FwTwVEdsvx51tDb%2F8hwKZ3OszYGuYQXrs3nEtrEMrnwz1as0QOeyWqod0Q7HDdmycFPUfkYz1DosSpkeO5DknhTvrVYUDqvwln7cYRe9GDsHu8hQroHc0DIlKLZ%2BjrVwzLuApwZZTFurje%2FgCzgn6H0gHyT3%2Fy9xnKU9PKJ%2F2sLzTuUNipJu0mzg%2BTYm%2FdejceYXI7iBjmU75eTxFps385L6xunXnvqTFg17ETIAg7CCrYcUh1H3DMb6KetPW1sqwzkxMOdiTh9s9e4UwWmM1MKf0IKiB2rvrishDJehQJouJpTWRfARUGxhxfSGOadwvG8DRpxu4%2Fj%2FjlTyCrrHMeW1UoZ0gAQ%2Foi2c%2FiFf0wd7jyTeX29v9d5znqHkmkxlNUV8phjNcH05URAaKx5wgQwnORy13%2BoCijYwHt5oeb%2Bp11mxKGfeiixwUBHOswoE5%2B8J3Z%2Bxj%2Fkrqzp812BkypHA60dHkirIWUzjjV3nLK%2ByLkQD9X%2By9VTGbO8J22QaWQIbmgQhq9kUFD0JKQjtaYrgYUAqnJrjmxVO%2BLZOLrcA%2FtLFx9744PLsxOVe94Vfl4%2FlVh%2BMODr3r8GOqUBOWnXXXWFV4n0Tle4OXx5vJ909nhjMVq5T3hmAqfBf7L7Q6VtPg3Uk44XWtUFX%2BCiYxnlNiJ%2BmofO3v%2FrgTwB3e%2Blwva9I0umCfJ1UxYPQMVaxmE6fOyoeCGBL1Kuf1k0xnxLUrkneM%2FcZT65qSYw2XBcKQ0ZsLSUjL5%2FGsd80YxheEOC5YTm%2BLSMm1zOebO5brJss7VfShOoB3Nj3fae9Q6q1qFL&X-Amz-Signature=660abb7ef9c55fa37c5b93c5b1e1ce43e66454b55145e38f157b9288238ebd49&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZWASLSE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAqambTc56xcAyhbicLORRT4dsUXlSokWeqKnEnp8cwxAiEA%2FBln3i3jYF6W3ihdWafqmxoYyQc9ujvAOp2ZYo8gmHYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuyNlTom3qGgKITsCrcAy8XlqphikBGJzePUJYqEnAFsDa4z%2FPc%2FlnM5NZf4ORqAxcjyBUrA%2FwTwVEdsvx51tDb%2F8hwKZ3OszYGuYQXrs3nEtrEMrnwz1as0QOeyWqod0Q7HDdmycFPUfkYz1DosSpkeO5DknhTvrVYUDqvwln7cYRe9GDsHu8hQroHc0DIlKLZ%2BjrVwzLuApwZZTFurje%2FgCzgn6H0gHyT3%2Fy9xnKU9PKJ%2F2sLzTuUNipJu0mzg%2BTYm%2FdejceYXI7iBjmU75eTxFps385L6xunXnvqTFg17ETIAg7CCrYcUh1H3DMb6KetPW1sqwzkxMOdiTh9s9e4UwWmM1MKf0IKiB2rvrishDJehQJouJpTWRfARUGxhxfSGOadwvG8DRpxu4%2Fj%2FjlTyCrrHMeW1UoZ0gAQ%2Foi2c%2FiFf0wd7jyTeX29v9d5znqHkmkxlNUV8phjNcH05URAaKx5wgQwnORy13%2BoCijYwHt5oeb%2Bp11mxKGfeiixwUBHOswoE5%2B8J3Z%2Bxj%2Fkrqzp812BkypHA60dHkirIWUzjjV3nLK%2ByLkQD9X%2By9VTGbO8J22QaWQIbmgQhq9kUFD0JKQjtaYrgYUAqnJrjmxVO%2BLZOLrcA%2FtLFx9744PLsxOVe94Vfl4%2FlVh%2BMODr3r8GOqUBOWnXXXWFV4n0Tle4OXx5vJ909nhjMVq5T3hmAqfBf7L7Q6VtPg3Uk44XWtUFX%2BCiYxnlNiJ%2BmofO3v%2FrgTwB3e%2Blwva9I0umCfJ1UxYPQMVaxmE6fOyoeCGBL1Kuf1k0xnxLUrkneM%2FcZT65qSYw2XBcKQ0ZsLSUjL5%2FGsd80YxheEOC5YTm%2BLSMm1zOebO5brJss7VfShOoB3Nj3fae9Q6q1qFL&X-Amz-Signature=4c10079cf696413a962c91bb2dce07fd1a2b1ba61142efa094570407ab868101&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZWASLSE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAqambTc56xcAyhbicLORRT4dsUXlSokWeqKnEnp8cwxAiEA%2FBln3i3jYF6W3ihdWafqmxoYyQc9ujvAOp2ZYo8gmHYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuyNlTom3qGgKITsCrcAy8XlqphikBGJzePUJYqEnAFsDa4z%2FPc%2FlnM5NZf4ORqAxcjyBUrA%2FwTwVEdsvx51tDb%2F8hwKZ3OszYGuYQXrs3nEtrEMrnwz1as0QOeyWqod0Q7HDdmycFPUfkYz1DosSpkeO5DknhTvrVYUDqvwln7cYRe9GDsHu8hQroHc0DIlKLZ%2BjrVwzLuApwZZTFurje%2FgCzgn6H0gHyT3%2Fy9xnKU9PKJ%2F2sLzTuUNipJu0mzg%2BTYm%2FdejceYXI7iBjmU75eTxFps385L6xunXnvqTFg17ETIAg7CCrYcUh1H3DMb6KetPW1sqwzkxMOdiTh9s9e4UwWmM1MKf0IKiB2rvrishDJehQJouJpTWRfARUGxhxfSGOadwvG8DRpxu4%2Fj%2FjlTyCrrHMeW1UoZ0gAQ%2Foi2c%2FiFf0wd7jyTeX29v9d5znqHkmkxlNUV8phjNcH05URAaKx5wgQwnORy13%2BoCijYwHt5oeb%2Bp11mxKGfeiixwUBHOswoE5%2B8J3Z%2Bxj%2Fkrqzp812BkypHA60dHkirIWUzjjV3nLK%2ByLkQD9X%2By9VTGbO8J22QaWQIbmgQhq9kUFD0JKQjtaYrgYUAqnJrjmxVO%2BLZOLrcA%2FtLFx9744PLsxOVe94Vfl4%2FlVh%2BMODr3r8GOqUBOWnXXXWFV4n0Tle4OXx5vJ909nhjMVq5T3hmAqfBf7L7Q6VtPg3Uk44XWtUFX%2BCiYxnlNiJ%2BmofO3v%2FrgTwB3e%2Blwva9I0umCfJ1UxYPQMVaxmE6fOyoeCGBL1Kuf1k0xnxLUrkneM%2FcZT65qSYw2XBcKQ0ZsLSUjL5%2FGsd80YxheEOC5YTm%2BLSMm1zOebO5brJss7VfShOoB3Nj3fae9Q6q1qFL&X-Amz-Signature=e2adeea1cbdaca2f1a3b6a0eeb91dc869f4dba2d779ad790c109355e71460087&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
