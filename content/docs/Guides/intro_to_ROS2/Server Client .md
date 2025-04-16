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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TGGFND%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyrHR44eJ1vL2WP12gmhJyH5HfQ9402L2NRuA4ZTwtsAiEAnOU4Ko4PtLM2Lz7gQotBhYzu%2BdF95s%2FkuShnXpTOk6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFNDauR1LowP6QpKGCrcA8P3A8zY8AO82N0zf%2Bqs%2BqaX7IrZQfDXnNafILj8dLguhmGVBszY%2BTPh2h74jlflz9AVkGuVWNTkzFkzeWYHr%2FTQGH71mLtnsvzZ1meA%2BN4s632%2BQrCtU5OssVOyy2w4FVKCQZoJfKn9839BqBTY4Qe%2FhJRp0aSLyMPB%2FzNkL6nr589Zl9TEpCE2wGsgNVfeGV780J%2BZpYVVo%2Bu4XfnpwZ%2F2C4e%2FvQnlFYq%2BCD%2BvZaCQ2ud22e76Xz1i8UEmPwArnA1Tn0tleyDoKfERsyqqWeNMTPbWjxjzWHcdCrvoJ7rBVM%2Fkve2ZdXL%2FjYpvW67aNPiLNE4VfmEnXJx1xG1uKLzVJ%2FOZxvwmdHiqV2JL7SdzFr2Q8rP0aZNqpUWP8z72C2%2FB%2F9liC6Fy6fjIgl4gymIe71c6U789IkD5H6%2B6E7%2Br%2BtGV9euZ84tmEOjrAVnz9AVeWPzlDknZfMI1wOZRqRXsOnpdjVMpAic1v6SOg381%2F8tbkRGtvibKtrWgz4W%2FEXquiimpD%2F3lEcmabTgDzolwk1ShypK9DrE6mpXKz7gYC02pC%2FyULS4kD4tHLkbG39ro3GpBlAS9UBO%2BMj9t9UHyvKnYeHrkDWLhtd62%2B0BQBNkz9z42DJpV0fykMILw%2B78GOqUBDiwaJrXEqo77%2B8qyWsn9kuhFJyK5dBzkO58VzAs1hAHXAxmhI3YrRmQXrgkEJ8y020SrAbg04yMXrFpRTXEe9dClvu6PkHaUlCxrARnA0hv2hYn6mG7Smug9bpLPXCMiPuVyzgrOBOwQjpqu9HiZYGug5ygon43pre8ENEAlxQat0Vde9JCVZdPwA154tvO9EU8SLzFYHvcwjxbV5q%2FlReifJzZN&X-Amz-Signature=a8bb07cc6f0af40a5354bc3a132d3dd194e144cbe3e9094d94c4fdbc3a6da923&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TGGFND%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyrHR44eJ1vL2WP12gmhJyH5HfQ9402L2NRuA4ZTwtsAiEAnOU4Ko4PtLM2Lz7gQotBhYzu%2BdF95s%2FkuShnXpTOk6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFNDauR1LowP6QpKGCrcA8P3A8zY8AO82N0zf%2Bqs%2BqaX7IrZQfDXnNafILj8dLguhmGVBszY%2BTPh2h74jlflz9AVkGuVWNTkzFkzeWYHr%2FTQGH71mLtnsvzZ1meA%2BN4s632%2BQrCtU5OssVOyy2w4FVKCQZoJfKn9839BqBTY4Qe%2FhJRp0aSLyMPB%2FzNkL6nr589Zl9TEpCE2wGsgNVfeGV780J%2BZpYVVo%2Bu4XfnpwZ%2F2C4e%2FvQnlFYq%2BCD%2BvZaCQ2ud22e76Xz1i8UEmPwArnA1Tn0tleyDoKfERsyqqWeNMTPbWjxjzWHcdCrvoJ7rBVM%2Fkve2ZdXL%2FjYpvW67aNPiLNE4VfmEnXJx1xG1uKLzVJ%2FOZxvwmdHiqV2JL7SdzFr2Q8rP0aZNqpUWP8z72C2%2FB%2F9liC6Fy6fjIgl4gymIe71c6U789IkD5H6%2B6E7%2Br%2BtGV9euZ84tmEOjrAVnz9AVeWPzlDknZfMI1wOZRqRXsOnpdjVMpAic1v6SOg381%2F8tbkRGtvibKtrWgz4W%2FEXquiimpD%2F3lEcmabTgDzolwk1ShypK9DrE6mpXKz7gYC02pC%2FyULS4kD4tHLkbG39ro3GpBlAS9UBO%2BMj9t9UHyvKnYeHrkDWLhtd62%2B0BQBNkz9z42DJpV0fykMILw%2B78GOqUBDiwaJrXEqo77%2B8qyWsn9kuhFJyK5dBzkO58VzAs1hAHXAxmhI3YrRmQXrgkEJ8y020SrAbg04yMXrFpRTXEe9dClvu6PkHaUlCxrARnA0hv2hYn6mG7Smug9bpLPXCMiPuVyzgrOBOwQjpqu9HiZYGug5ygon43pre8ENEAlxQat0Vde9JCVZdPwA154tvO9EU8SLzFYHvcwjxbV5q%2FlReifJzZN&X-Amz-Signature=5be4adde05bbf67a3d177092810ba8ce321d9245b2099dc19c7508045c91b04d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TGGFND%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyrHR44eJ1vL2WP12gmhJyH5HfQ9402L2NRuA4ZTwtsAiEAnOU4Ko4PtLM2Lz7gQotBhYzu%2BdF95s%2FkuShnXpTOk6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFNDauR1LowP6QpKGCrcA8P3A8zY8AO82N0zf%2Bqs%2BqaX7IrZQfDXnNafILj8dLguhmGVBszY%2BTPh2h74jlflz9AVkGuVWNTkzFkzeWYHr%2FTQGH71mLtnsvzZ1meA%2BN4s632%2BQrCtU5OssVOyy2w4FVKCQZoJfKn9839BqBTY4Qe%2FhJRp0aSLyMPB%2FzNkL6nr589Zl9TEpCE2wGsgNVfeGV780J%2BZpYVVo%2Bu4XfnpwZ%2F2C4e%2FvQnlFYq%2BCD%2BvZaCQ2ud22e76Xz1i8UEmPwArnA1Tn0tleyDoKfERsyqqWeNMTPbWjxjzWHcdCrvoJ7rBVM%2Fkve2ZdXL%2FjYpvW67aNPiLNE4VfmEnXJx1xG1uKLzVJ%2FOZxvwmdHiqV2JL7SdzFr2Q8rP0aZNqpUWP8z72C2%2FB%2F9liC6Fy6fjIgl4gymIe71c6U789IkD5H6%2B6E7%2Br%2BtGV9euZ84tmEOjrAVnz9AVeWPzlDknZfMI1wOZRqRXsOnpdjVMpAic1v6SOg381%2F8tbkRGtvibKtrWgz4W%2FEXquiimpD%2F3lEcmabTgDzolwk1ShypK9DrE6mpXKz7gYC02pC%2FyULS4kD4tHLkbG39ro3GpBlAS9UBO%2BMj9t9UHyvKnYeHrkDWLhtd62%2B0BQBNkz9z42DJpV0fykMILw%2B78GOqUBDiwaJrXEqo77%2B8qyWsn9kuhFJyK5dBzkO58VzAs1hAHXAxmhI3YrRmQXrgkEJ8y020SrAbg04yMXrFpRTXEe9dClvu6PkHaUlCxrARnA0hv2hYn6mG7Smug9bpLPXCMiPuVyzgrOBOwQjpqu9HiZYGug5ygon43pre8ENEAlxQat0Vde9JCVZdPwA154tvO9EU8SLzFYHvcwjxbV5q%2FlReifJzZN&X-Amz-Signature=730dd20e16c47dc466f89ba0649a0ff383c9d0573ad6482d403e3c289a662ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TGGFND%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyrHR44eJ1vL2WP12gmhJyH5HfQ9402L2NRuA4ZTwtsAiEAnOU4Ko4PtLM2Lz7gQotBhYzu%2BdF95s%2FkuShnXpTOk6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFNDauR1LowP6QpKGCrcA8P3A8zY8AO82N0zf%2Bqs%2BqaX7IrZQfDXnNafILj8dLguhmGVBszY%2BTPh2h74jlflz9AVkGuVWNTkzFkzeWYHr%2FTQGH71mLtnsvzZ1meA%2BN4s632%2BQrCtU5OssVOyy2w4FVKCQZoJfKn9839BqBTY4Qe%2FhJRp0aSLyMPB%2FzNkL6nr589Zl9TEpCE2wGsgNVfeGV780J%2BZpYVVo%2Bu4XfnpwZ%2F2C4e%2FvQnlFYq%2BCD%2BvZaCQ2ud22e76Xz1i8UEmPwArnA1Tn0tleyDoKfERsyqqWeNMTPbWjxjzWHcdCrvoJ7rBVM%2Fkve2ZdXL%2FjYpvW67aNPiLNE4VfmEnXJx1xG1uKLzVJ%2FOZxvwmdHiqV2JL7SdzFr2Q8rP0aZNqpUWP8z72C2%2FB%2F9liC6Fy6fjIgl4gymIe71c6U789IkD5H6%2B6E7%2Br%2BtGV9euZ84tmEOjrAVnz9AVeWPzlDknZfMI1wOZRqRXsOnpdjVMpAic1v6SOg381%2F8tbkRGtvibKtrWgz4W%2FEXquiimpD%2F3lEcmabTgDzolwk1ShypK9DrE6mpXKz7gYC02pC%2FyULS4kD4tHLkbG39ro3GpBlAS9UBO%2BMj9t9UHyvKnYeHrkDWLhtd62%2B0BQBNkz9z42DJpV0fykMILw%2B78GOqUBDiwaJrXEqo77%2B8qyWsn9kuhFJyK5dBzkO58VzAs1hAHXAxmhI3YrRmQXrgkEJ8y020SrAbg04yMXrFpRTXEe9dClvu6PkHaUlCxrARnA0hv2hYn6mG7Smug9bpLPXCMiPuVyzgrOBOwQjpqu9HiZYGug5ygon43pre8ENEAlxQat0Vde9JCVZdPwA154tvO9EU8SLzFYHvcwjxbV5q%2FlReifJzZN&X-Amz-Signature=68359b819fe8ec188fc6f6d7ef100f375af1d044a7ada086f0647e05b6685f79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TGGFND%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyrHR44eJ1vL2WP12gmhJyH5HfQ9402L2NRuA4ZTwtsAiEAnOU4Ko4PtLM2Lz7gQotBhYzu%2BdF95s%2FkuShnXpTOk6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFNDauR1LowP6QpKGCrcA8P3A8zY8AO82N0zf%2Bqs%2BqaX7IrZQfDXnNafILj8dLguhmGVBszY%2BTPh2h74jlflz9AVkGuVWNTkzFkzeWYHr%2FTQGH71mLtnsvzZ1meA%2BN4s632%2BQrCtU5OssVOyy2w4FVKCQZoJfKn9839BqBTY4Qe%2FhJRp0aSLyMPB%2FzNkL6nr589Zl9TEpCE2wGsgNVfeGV780J%2BZpYVVo%2Bu4XfnpwZ%2F2C4e%2FvQnlFYq%2BCD%2BvZaCQ2ud22e76Xz1i8UEmPwArnA1Tn0tleyDoKfERsyqqWeNMTPbWjxjzWHcdCrvoJ7rBVM%2Fkve2ZdXL%2FjYpvW67aNPiLNE4VfmEnXJx1xG1uKLzVJ%2FOZxvwmdHiqV2JL7SdzFr2Q8rP0aZNqpUWP8z72C2%2FB%2F9liC6Fy6fjIgl4gymIe71c6U789IkD5H6%2B6E7%2Br%2BtGV9euZ84tmEOjrAVnz9AVeWPzlDknZfMI1wOZRqRXsOnpdjVMpAic1v6SOg381%2F8tbkRGtvibKtrWgz4W%2FEXquiimpD%2F3lEcmabTgDzolwk1ShypK9DrE6mpXKz7gYC02pC%2FyULS4kD4tHLkbG39ro3GpBlAS9UBO%2BMj9t9UHyvKnYeHrkDWLhtd62%2B0BQBNkz9z42DJpV0fykMILw%2B78GOqUBDiwaJrXEqo77%2B8qyWsn9kuhFJyK5dBzkO58VzAs1hAHXAxmhI3YrRmQXrgkEJ8y020SrAbg04yMXrFpRTXEe9dClvu6PkHaUlCxrARnA0hv2hYn6mG7Smug9bpLPXCMiPuVyzgrOBOwQjpqu9HiZYGug5ygon43pre8ENEAlxQat0Vde9JCVZdPwA154tvO9EU8SLzFYHvcwjxbV5q%2FlReifJzZN&X-Amz-Signature=9a47646574e2da9d78a2f5e5b11b55e4cbdebc74231aeb068a8d9399a3b67bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
