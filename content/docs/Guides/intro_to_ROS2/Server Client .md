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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL275D5F%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC5TW4wocziTAJHstNt5YFKj7SO%2B4I6sL9iFRWttw1JWgIgdcNkq6zClNV1J6%2FaVxLdAXi0bM7y4Y3Oekb%2FviUj00kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEx%2F3DyZufh8i0dfLCrcAyR82v59EfpqayIc%2B69sbwH8bk3MwC8mua79z5BBL%2FMgtkhmWEl7aJRwU1boajN8unouwm0QTpNxpLcjsz6ydxQmGy%2FP33RBKfA1qGNBBnCzuwqK6DUsuCiDYaEh5qJ5xD1L4Oj4pF%2BmRgjdgQnfoYRUN5%2FErGDkiTDzOqFKFsgK2i6iLh%2FL4qvea4GfnvaZ1Om7uarn9ZxrCcOUKjoPLKRxBw1AQ3xf92eocvKtbTyW6xWVbgbWGAYqqjDy7w28IfVntB7s8XGKLvqqV6gJ%2Fnhlqa1%2BEAFvv%2F5V4KuMGtVa4eag8zPAhvK3exIjlzgU6ZmqHk6K1BXJVpkL8NjrShaUZq%2BA45OroweYUR5QjCiqamZyy59GZIFK1kMUkbll8p3YE8j2LQFBdcmEcltZSRXopy0edeiQfHTdupdurKi60ChPf0qZQjz%2BdzLPwrDZswFcQ%2F1bFDCDB4zi4JreVRLaBvHAEoMaKzqAHc5djg90DKqh%2FbpSu46Gjx3O8YLcmFNTdwAV2zIrwLZ0fAZ8L5VgDeR4T8sYmlJMKMxrhsJl76wPE2lXdtBTvJA8Gyo9gkZ5XbZGDiItzDgmoS9YdjcHVMxPLd9KiF%2BFzJIwQcKdnCcN95j%2BOrpKTgM3MNu61b8GOqUB%2FVC0iB%2FSeopqvBuXoJtMIGKkf9wxh21UL8LsrtHHEThlaFlvfF7sWu%2FO68uspP5H8zqc4%2B9CbzAZxZmvxPm5H4r53mKwAsNPr%2BypOr91riKpasof7aDGAPO4xWSenoWN4qRI0tOULDsOb4FOHnf1EXyb7X%2F9eoCFRx6TkauOWkhG6Nye1RyI5kNUo2i1GNuk4wexgYhhTIOHHwc%2BOH44ce7yboqb&X-Amz-Signature=16bcc62de050ced8f58454ad00d91065ee6772e857ea0599a0373a8fb9cb1003&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL275D5F%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC5TW4wocziTAJHstNt5YFKj7SO%2B4I6sL9iFRWttw1JWgIgdcNkq6zClNV1J6%2FaVxLdAXi0bM7y4Y3Oekb%2FviUj00kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEx%2F3DyZufh8i0dfLCrcAyR82v59EfpqayIc%2B69sbwH8bk3MwC8mua79z5BBL%2FMgtkhmWEl7aJRwU1boajN8unouwm0QTpNxpLcjsz6ydxQmGy%2FP33RBKfA1qGNBBnCzuwqK6DUsuCiDYaEh5qJ5xD1L4Oj4pF%2BmRgjdgQnfoYRUN5%2FErGDkiTDzOqFKFsgK2i6iLh%2FL4qvea4GfnvaZ1Om7uarn9ZxrCcOUKjoPLKRxBw1AQ3xf92eocvKtbTyW6xWVbgbWGAYqqjDy7w28IfVntB7s8XGKLvqqV6gJ%2Fnhlqa1%2BEAFvv%2F5V4KuMGtVa4eag8zPAhvK3exIjlzgU6ZmqHk6K1BXJVpkL8NjrShaUZq%2BA45OroweYUR5QjCiqamZyy59GZIFK1kMUkbll8p3YE8j2LQFBdcmEcltZSRXopy0edeiQfHTdupdurKi60ChPf0qZQjz%2BdzLPwrDZswFcQ%2F1bFDCDB4zi4JreVRLaBvHAEoMaKzqAHc5djg90DKqh%2FbpSu46Gjx3O8YLcmFNTdwAV2zIrwLZ0fAZ8L5VgDeR4T8sYmlJMKMxrhsJl76wPE2lXdtBTvJA8Gyo9gkZ5XbZGDiItzDgmoS9YdjcHVMxPLd9KiF%2BFzJIwQcKdnCcN95j%2BOrpKTgM3MNu61b8GOqUB%2FVC0iB%2FSeopqvBuXoJtMIGKkf9wxh21UL8LsrtHHEThlaFlvfF7sWu%2FO68uspP5H8zqc4%2B9CbzAZxZmvxPm5H4r53mKwAsNPr%2BypOr91riKpasof7aDGAPO4xWSenoWN4qRI0tOULDsOb4FOHnf1EXyb7X%2F9eoCFRx6TkauOWkhG6Nye1RyI5kNUo2i1GNuk4wexgYhhTIOHHwc%2BOH44ce7yboqb&X-Amz-Signature=64d7e12d82c2c815bc4ae20b49eb661de5e072cc58f1270957c7841237cf6832&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL275D5F%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC5TW4wocziTAJHstNt5YFKj7SO%2B4I6sL9iFRWttw1JWgIgdcNkq6zClNV1J6%2FaVxLdAXi0bM7y4Y3Oekb%2FviUj00kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEx%2F3DyZufh8i0dfLCrcAyR82v59EfpqayIc%2B69sbwH8bk3MwC8mua79z5BBL%2FMgtkhmWEl7aJRwU1boajN8unouwm0QTpNxpLcjsz6ydxQmGy%2FP33RBKfA1qGNBBnCzuwqK6DUsuCiDYaEh5qJ5xD1L4Oj4pF%2BmRgjdgQnfoYRUN5%2FErGDkiTDzOqFKFsgK2i6iLh%2FL4qvea4GfnvaZ1Om7uarn9ZxrCcOUKjoPLKRxBw1AQ3xf92eocvKtbTyW6xWVbgbWGAYqqjDy7w28IfVntB7s8XGKLvqqV6gJ%2Fnhlqa1%2BEAFvv%2F5V4KuMGtVa4eag8zPAhvK3exIjlzgU6ZmqHk6K1BXJVpkL8NjrShaUZq%2BA45OroweYUR5QjCiqamZyy59GZIFK1kMUkbll8p3YE8j2LQFBdcmEcltZSRXopy0edeiQfHTdupdurKi60ChPf0qZQjz%2BdzLPwrDZswFcQ%2F1bFDCDB4zi4JreVRLaBvHAEoMaKzqAHc5djg90DKqh%2FbpSu46Gjx3O8YLcmFNTdwAV2zIrwLZ0fAZ8L5VgDeR4T8sYmlJMKMxrhsJl76wPE2lXdtBTvJA8Gyo9gkZ5XbZGDiItzDgmoS9YdjcHVMxPLd9KiF%2BFzJIwQcKdnCcN95j%2BOrpKTgM3MNu61b8GOqUB%2FVC0iB%2FSeopqvBuXoJtMIGKkf9wxh21UL8LsrtHHEThlaFlvfF7sWu%2FO68uspP5H8zqc4%2B9CbzAZxZmvxPm5H4r53mKwAsNPr%2BypOr91riKpasof7aDGAPO4xWSenoWN4qRI0tOULDsOb4FOHnf1EXyb7X%2F9eoCFRx6TkauOWkhG6Nye1RyI5kNUo2i1GNuk4wexgYhhTIOHHwc%2BOH44ce7yboqb&X-Amz-Signature=e1807c681628c1e1cf1dd76e93876f7b38872d1f28d6b5a452941417325a54a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL275D5F%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC5TW4wocziTAJHstNt5YFKj7SO%2B4I6sL9iFRWttw1JWgIgdcNkq6zClNV1J6%2FaVxLdAXi0bM7y4Y3Oekb%2FviUj00kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEx%2F3DyZufh8i0dfLCrcAyR82v59EfpqayIc%2B69sbwH8bk3MwC8mua79z5BBL%2FMgtkhmWEl7aJRwU1boajN8unouwm0QTpNxpLcjsz6ydxQmGy%2FP33RBKfA1qGNBBnCzuwqK6DUsuCiDYaEh5qJ5xD1L4Oj4pF%2BmRgjdgQnfoYRUN5%2FErGDkiTDzOqFKFsgK2i6iLh%2FL4qvea4GfnvaZ1Om7uarn9ZxrCcOUKjoPLKRxBw1AQ3xf92eocvKtbTyW6xWVbgbWGAYqqjDy7w28IfVntB7s8XGKLvqqV6gJ%2Fnhlqa1%2BEAFvv%2F5V4KuMGtVa4eag8zPAhvK3exIjlzgU6ZmqHk6K1BXJVpkL8NjrShaUZq%2BA45OroweYUR5QjCiqamZyy59GZIFK1kMUkbll8p3YE8j2LQFBdcmEcltZSRXopy0edeiQfHTdupdurKi60ChPf0qZQjz%2BdzLPwrDZswFcQ%2F1bFDCDB4zi4JreVRLaBvHAEoMaKzqAHc5djg90DKqh%2FbpSu46Gjx3O8YLcmFNTdwAV2zIrwLZ0fAZ8L5VgDeR4T8sYmlJMKMxrhsJl76wPE2lXdtBTvJA8Gyo9gkZ5XbZGDiItzDgmoS9YdjcHVMxPLd9KiF%2BFzJIwQcKdnCcN95j%2BOrpKTgM3MNu61b8GOqUB%2FVC0iB%2FSeopqvBuXoJtMIGKkf9wxh21UL8LsrtHHEThlaFlvfF7sWu%2FO68uspP5H8zqc4%2B9CbzAZxZmvxPm5H4r53mKwAsNPr%2BypOr91riKpasof7aDGAPO4xWSenoWN4qRI0tOULDsOb4FOHnf1EXyb7X%2F9eoCFRx6TkauOWkhG6Nye1RyI5kNUo2i1GNuk4wexgYhhTIOHHwc%2BOH44ce7yboqb&X-Amz-Signature=42fb13b6b747f2c297a75a051521b15c7f044b6523f903a09f0d6b1f682b370e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL275D5F%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC5TW4wocziTAJHstNt5YFKj7SO%2B4I6sL9iFRWttw1JWgIgdcNkq6zClNV1J6%2FaVxLdAXi0bM7y4Y3Oekb%2FviUj00kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEx%2F3DyZufh8i0dfLCrcAyR82v59EfpqayIc%2B69sbwH8bk3MwC8mua79z5BBL%2FMgtkhmWEl7aJRwU1boajN8unouwm0QTpNxpLcjsz6ydxQmGy%2FP33RBKfA1qGNBBnCzuwqK6DUsuCiDYaEh5qJ5xD1L4Oj4pF%2BmRgjdgQnfoYRUN5%2FErGDkiTDzOqFKFsgK2i6iLh%2FL4qvea4GfnvaZ1Om7uarn9ZxrCcOUKjoPLKRxBw1AQ3xf92eocvKtbTyW6xWVbgbWGAYqqjDy7w28IfVntB7s8XGKLvqqV6gJ%2Fnhlqa1%2BEAFvv%2F5V4KuMGtVa4eag8zPAhvK3exIjlzgU6ZmqHk6K1BXJVpkL8NjrShaUZq%2BA45OroweYUR5QjCiqamZyy59GZIFK1kMUkbll8p3YE8j2LQFBdcmEcltZSRXopy0edeiQfHTdupdurKi60ChPf0qZQjz%2BdzLPwrDZswFcQ%2F1bFDCDB4zi4JreVRLaBvHAEoMaKzqAHc5djg90DKqh%2FbpSu46Gjx3O8YLcmFNTdwAV2zIrwLZ0fAZ8L5VgDeR4T8sYmlJMKMxrhsJl76wPE2lXdtBTvJA8Gyo9gkZ5XbZGDiItzDgmoS9YdjcHVMxPLd9KiF%2BFzJIwQcKdnCcN95j%2BOrpKTgM3MNu61b8GOqUB%2FVC0iB%2FSeopqvBuXoJtMIGKkf9wxh21UL8LsrtHHEThlaFlvfF7sWu%2FO68uspP5H8zqc4%2B9CbzAZxZmvxPm5H4r53mKwAsNPr%2BypOr91riKpasof7aDGAPO4xWSenoWN4qRI0tOULDsOb4FOHnf1EXyb7X%2F9eoCFRx6TkauOWkhG6Nye1RyI5kNUo2i1GNuk4wexgYhhTIOHHwc%2BOH44ce7yboqb&X-Amz-Signature=39876ec7e88dc4175a80ad90cc40f159fd201cb6d7baed799f609a58ba40987c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
