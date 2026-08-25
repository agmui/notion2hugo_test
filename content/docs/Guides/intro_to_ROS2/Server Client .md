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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYZHZKN%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDLDOibwxjBOtrVmu8q11ZVLzPKAwGud6UhOVAvkFM8aAiEA5onFHKeKFYanh4woAHsg50SlVLndD1Bl7vDpkUA0yCoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1TT3nvDYeR%2FtbW4SrcA1nJgR%2BwfCK1YWAYVs%2BTJVNm6y6m4o0X8KjS%2F7X5Ko7ZQLsnBKjkTkjXxNuWUp0BGF4BmXRtGoSxk%2BfBarnIhvVgh6wNSzII%2FGFpQKAqNXaIXjCZYTObNsAXaSk66cUClocFIZegk4%2Bf%2FJyv0N6MNpXuWIl7l0RrfzXp0bDRFDIijqT%2FF%2BiEt45YUrBAfzY3Y8vMqo0PPJuXP6XU7SPd80znbr3B8tKLgK5UJCy7Psd9BN5pJsUocyU9NgmHZ2KY%2BtZNJBmRxdp7ssIvYhmKE%2BV6%2B%2B4g8otE6C7PbzHO4%2FQc6KUjziGmczRCeY2m2T31rdUVil39IWW9JakZHlI89z4zxhuT2RmdCfhigFRmegUVEpwNp%2BbcSpKBXl7C%2BR%2FL21e7ccgNjjg3%2FHZ%2FbUCLPjSM6MyKkfCJkz84oOBkHuHuWQQ2z4PZ6syRoj3FMHGX17a4363B7xzlxzbHxP33hyeZXuBvhIFNrD%2B1yLDTtuJqvGb%2BPn2gPBKsnlhvxJJ90lEnOjNqUe6U6vEFcrIc3uW7YLe9SXrZasNILQENTE32NWnxU431xVtSfi5cIkYys9QbJRWIiQzyXpAsarE%2FErIrA9cdTK2ylaBp%2FcJ92MLqC3JaYgxU9DO61fH8MMHUs9QGOqUBC9aXuh0db6puPSDMfyT4hmAxHgL%2FxkrQkaGwRO0gt31Wagm48hLYqC%2BItp34qPdcEFQSv79%2BTd9T2B8r2t%2FUlS3kGp2daUjBkmsI%2FlrMxsttgHWw5fNPro%2FwVdaUEJLfL0Wm%2BUagv5QQeIAp%2BHZT1YW4HgFvx7SffAk424aHKp5DaSEGnlCfNtADyuaCnWbIaiv6PyemgAWJfzm9pS4EGwarN9RY&X-Amz-Signature=211c35632fdaf4137be621be3bbe80bf0da4c01f0596033b04ede5bb30dfbe76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYZHZKN%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDLDOibwxjBOtrVmu8q11ZVLzPKAwGud6UhOVAvkFM8aAiEA5onFHKeKFYanh4woAHsg50SlVLndD1Bl7vDpkUA0yCoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1TT3nvDYeR%2FtbW4SrcA1nJgR%2BwfCK1YWAYVs%2BTJVNm6y6m4o0X8KjS%2F7X5Ko7ZQLsnBKjkTkjXxNuWUp0BGF4BmXRtGoSxk%2BfBarnIhvVgh6wNSzII%2FGFpQKAqNXaIXjCZYTObNsAXaSk66cUClocFIZegk4%2Bf%2FJyv0N6MNpXuWIl7l0RrfzXp0bDRFDIijqT%2FF%2BiEt45YUrBAfzY3Y8vMqo0PPJuXP6XU7SPd80znbr3B8tKLgK5UJCy7Psd9BN5pJsUocyU9NgmHZ2KY%2BtZNJBmRxdp7ssIvYhmKE%2BV6%2B%2B4g8otE6C7PbzHO4%2FQc6KUjziGmczRCeY2m2T31rdUVil39IWW9JakZHlI89z4zxhuT2RmdCfhigFRmegUVEpwNp%2BbcSpKBXl7C%2BR%2FL21e7ccgNjjg3%2FHZ%2FbUCLPjSM6MyKkfCJkz84oOBkHuHuWQQ2z4PZ6syRoj3FMHGX17a4363B7xzlxzbHxP33hyeZXuBvhIFNrD%2B1yLDTtuJqvGb%2BPn2gPBKsnlhvxJJ90lEnOjNqUe6U6vEFcrIc3uW7YLe9SXrZasNILQENTE32NWnxU431xVtSfi5cIkYys9QbJRWIiQzyXpAsarE%2FErIrA9cdTK2ylaBp%2FcJ92MLqC3JaYgxU9DO61fH8MMHUs9QGOqUBC9aXuh0db6puPSDMfyT4hmAxHgL%2FxkrQkaGwRO0gt31Wagm48hLYqC%2BItp34qPdcEFQSv79%2BTd9T2B8r2t%2FUlS3kGp2daUjBkmsI%2FlrMxsttgHWw5fNPro%2FwVdaUEJLfL0Wm%2BUagv5QQeIAp%2BHZT1YW4HgFvx7SffAk424aHKp5DaSEGnlCfNtADyuaCnWbIaiv6PyemgAWJfzm9pS4EGwarN9RY&X-Amz-Signature=e9a4dd17080233351d6ff9d8a0b565200642b9f85e97d0b6b32f09939cf46767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYZHZKN%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDLDOibwxjBOtrVmu8q11ZVLzPKAwGud6UhOVAvkFM8aAiEA5onFHKeKFYanh4woAHsg50SlVLndD1Bl7vDpkUA0yCoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1TT3nvDYeR%2FtbW4SrcA1nJgR%2BwfCK1YWAYVs%2BTJVNm6y6m4o0X8KjS%2F7X5Ko7ZQLsnBKjkTkjXxNuWUp0BGF4BmXRtGoSxk%2BfBarnIhvVgh6wNSzII%2FGFpQKAqNXaIXjCZYTObNsAXaSk66cUClocFIZegk4%2Bf%2FJyv0N6MNpXuWIl7l0RrfzXp0bDRFDIijqT%2FF%2BiEt45YUrBAfzY3Y8vMqo0PPJuXP6XU7SPd80znbr3B8tKLgK5UJCy7Psd9BN5pJsUocyU9NgmHZ2KY%2BtZNJBmRxdp7ssIvYhmKE%2BV6%2B%2B4g8otE6C7PbzHO4%2FQc6KUjziGmczRCeY2m2T31rdUVil39IWW9JakZHlI89z4zxhuT2RmdCfhigFRmegUVEpwNp%2BbcSpKBXl7C%2BR%2FL21e7ccgNjjg3%2FHZ%2FbUCLPjSM6MyKkfCJkz84oOBkHuHuWQQ2z4PZ6syRoj3FMHGX17a4363B7xzlxzbHxP33hyeZXuBvhIFNrD%2B1yLDTtuJqvGb%2BPn2gPBKsnlhvxJJ90lEnOjNqUe6U6vEFcrIc3uW7YLe9SXrZasNILQENTE32NWnxU431xVtSfi5cIkYys9QbJRWIiQzyXpAsarE%2FErIrA9cdTK2ylaBp%2FcJ92MLqC3JaYgxU9DO61fH8MMHUs9QGOqUBC9aXuh0db6puPSDMfyT4hmAxHgL%2FxkrQkaGwRO0gt31Wagm48hLYqC%2BItp34qPdcEFQSv79%2BTd9T2B8r2t%2FUlS3kGp2daUjBkmsI%2FlrMxsttgHWw5fNPro%2FwVdaUEJLfL0Wm%2BUagv5QQeIAp%2BHZT1YW4HgFvx7SffAk424aHKp5DaSEGnlCfNtADyuaCnWbIaiv6PyemgAWJfzm9pS4EGwarN9RY&X-Amz-Signature=e8ce48aa835db50a443df1f22021c7b27c917c446672481e33c69799ae323809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYZHZKN%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDLDOibwxjBOtrVmu8q11ZVLzPKAwGud6UhOVAvkFM8aAiEA5onFHKeKFYanh4woAHsg50SlVLndD1Bl7vDpkUA0yCoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1TT3nvDYeR%2FtbW4SrcA1nJgR%2BwfCK1YWAYVs%2BTJVNm6y6m4o0X8KjS%2F7X5Ko7ZQLsnBKjkTkjXxNuWUp0BGF4BmXRtGoSxk%2BfBarnIhvVgh6wNSzII%2FGFpQKAqNXaIXjCZYTObNsAXaSk66cUClocFIZegk4%2Bf%2FJyv0N6MNpXuWIl7l0RrfzXp0bDRFDIijqT%2FF%2BiEt45YUrBAfzY3Y8vMqo0PPJuXP6XU7SPd80znbr3B8tKLgK5UJCy7Psd9BN5pJsUocyU9NgmHZ2KY%2BtZNJBmRxdp7ssIvYhmKE%2BV6%2B%2B4g8otE6C7PbzHO4%2FQc6KUjziGmczRCeY2m2T31rdUVil39IWW9JakZHlI89z4zxhuT2RmdCfhigFRmegUVEpwNp%2BbcSpKBXl7C%2BR%2FL21e7ccgNjjg3%2FHZ%2FbUCLPjSM6MyKkfCJkz84oOBkHuHuWQQ2z4PZ6syRoj3FMHGX17a4363B7xzlxzbHxP33hyeZXuBvhIFNrD%2B1yLDTtuJqvGb%2BPn2gPBKsnlhvxJJ90lEnOjNqUe6U6vEFcrIc3uW7YLe9SXrZasNILQENTE32NWnxU431xVtSfi5cIkYys9QbJRWIiQzyXpAsarE%2FErIrA9cdTK2ylaBp%2FcJ92MLqC3JaYgxU9DO61fH8MMHUs9QGOqUBC9aXuh0db6puPSDMfyT4hmAxHgL%2FxkrQkaGwRO0gt31Wagm48hLYqC%2BItp34qPdcEFQSv79%2BTd9T2B8r2t%2FUlS3kGp2daUjBkmsI%2FlrMxsttgHWw5fNPro%2FwVdaUEJLfL0Wm%2BUagv5QQeIAp%2BHZT1YW4HgFvx7SffAk424aHKp5DaSEGnlCfNtADyuaCnWbIaiv6PyemgAWJfzm9pS4EGwarN9RY&X-Amz-Signature=ff314dc983528c6bcc87c071efbf81ca1b0d0e3c1dc225145fed53d6a6097745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYZHZKN%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDLDOibwxjBOtrVmu8q11ZVLzPKAwGud6UhOVAvkFM8aAiEA5onFHKeKFYanh4woAHsg50SlVLndD1Bl7vDpkUA0yCoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1TT3nvDYeR%2FtbW4SrcA1nJgR%2BwfCK1YWAYVs%2BTJVNm6y6m4o0X8KjS%2F7X5Ko7ZQLsnBKjkTkjXxNuWUp0BGF4BmXRtGoSxk%2BfBarnIhvVgh6wNSzII%2FGFpQKAqNXaIXjCZYTObNsAXaSk66cUClocFIZegk4%2Bf%2FJyv0N6MNpXuWIl7l0RrfzXp0bDRFDIijqT%2FF%2BiEt45YUrBAfzY3Y8vMqo0PPJuXP6XU7SPd80znbr3B8tKLgK5UJCy7Psd9BN5pJsUocyU9NgmHZ2KY%2BtZNJBmRxdp7ssIvYhmKE%2BV6%2B%2B4g8otE6C7PbzHO4%2FQc6KUjziGmczRCeY2m2T31rdUVil39IWW9JakZHlI89z4zxhuT2RmdCfhigFRmegUVEpwNp%2BbcSpKBXl7C%2BR%2FL21e7ccgNjjg3%2FHZ%2FbUCLPjSM6MyKkfCJkz84oOBkHuHuWQQ2z4PZ6syRoj3FMHGX17a4363B7xzlxzbHxP33hyeZXuBvhIFNrD%2B1yLDTtuJqvGb%2BPn2gPBKsnlhvxJJ90lEnOjNqUe6U6vEFcrIc3uW7YLe9SXrZasNILQENTE32NWnxU431xVtSfi5cIkYys9QbJRWIiQzyXpAsarE%2FErIrA9cdTK2ylaBp%2FcJ92MLqC3JaYgxU9DO61fH8MMHUs9QGOqUBC9aXuh0db6puPSDMfyT4hmAxHgL%2FxkrQkaGwRO0gt31Wagm48hLYqC%2BItp34qPdcEFQSv79%2BTd9T2B8r2t%2FUlS3kGp2daUjBkmsI%2FlrMxsttgHWw5fNPro%2FwVdaUEJLfL0Wm%2BUagv5QQeIAp%2BHZT1YW4HgFvx7SffAk424aHKp5DaSEGnlCfNtADyuaCnWbIaiv6PyemgAWJfzm9pS4EGwarN9RY&X-Amz-Signature=0a8e886e403ea4b9e4acb563ad2e930ece291377b7656b4504122e0e28420849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
