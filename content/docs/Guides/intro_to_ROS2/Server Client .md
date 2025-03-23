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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6JDZJF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICh72dWoIryMRnB%2FkGS%2BMnFIJWyMbT%2BTzUTO0cKQRfMkAiEAlCldtFl2weV6fA8TQG%2BXfh3UZ5fdRrdvXKnP8ZvWYQUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAnwK3AkKLHf%2BhXDCrcAxZtlEa91C6e8pnE0UuGvDjWiyBuF2lhOVblsd%2FT3675QEd5St14ZBmJ4qnB8HB14bbZ6Mlg7tfc8FD%2BXASXkepGUcHUfVjwjJ8Ht%2BKdU2kFKQwkE7Jak2oHt2bN%2BWiITsZL%2Ft3AmYiSuH1HdxS8gHLFItXoLdeAXufedWNUvB26QFGlQ8%2Fc35yx1mtKx4y3vXzMQLWmP8Ci%2BM1v3MdW7yMuMgUt52zivZeQBw8DKTcNjJq%2BxKGjGCYsfe5%2B6EMfR%2Fofe12NeE%2FtZivWRnS8gxT%2FoC69gK8oqxXpu92uksi4uRq2K0itVelnjWC03mmUJIU52mvLfh2rZXww1btAl9ixp3Ee%2FpZzKXC5QOh4THDutHlxyqLvZzZP5ekGclJtyHFzsV9l%2B1OxuQ%2BngoKj9CRYSag6jUzIt%2BNUnsc5asiIDVYgYpyVgdzuTSnP0MPO6ZfNEkmI6ibBItk7lAY2GHIXTDtdmfxqZ7636Ug4sP7UuWNxwli2nH1xaTwesYE6Uhh8BpWWiRZLdDoWtORE5lRYlqAYttJvWdtwOWy4%2Bh%2B6SLi6gA35uWlCnWrNp3hvoojhzrRBI2L9EHAr8FXtJbc4Yt8DEopUgCD9SEqQbG4U4G1xgRMS8aAy3hTrMOnx%2F74GOqUBJMWq2yojHE%2Br8HDTHgxAFIt5HNQfmVnzPO6Cn2EhQAm9T5jVXoKe4gMN3QUoicZUY92x7FKS2kEUEiEpyeza9In3Ez2nD5kdwbN7hO0tTri%2FjN4Wjvb40wxSkbg5q47gtlmbZhT4cT9wnnxSofYK1%2FHj6L0R6G1uL6xEIy1atMBmbpAXFyspYus0oOWH6kwlJFFXkxTdh0SIsF%2F5BdjFRwhByTMy&X-Amz-Signature=7eb23e2ba4e16c56f67ba44ffa057ab9ac2bfbe7f778997ef77dbfe1ce51868c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6JDZJF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICh72dWoIryMRnB%2FkGS%2BMnFIJWyMbT%2BTzUTO0cKQRfMkAiEAlCldtFl2weV6fA8TQG%2BXfh3UZ5fdRrdvXKnP8ZvWYQUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAnwK3AkKLHf%2BhXDCrcAxZtlEa91C6e8pnE0UuGvDjWiyBuF2lhOVblsd%2FT3675QEd5St14ZBmJ4qnB8HB14bbZ6Mlg7tfc8FD%2BXASXkepGUcHUfVjwjJ8Ht%2BKdU2kFKQwkE7Jak2oHt2bN%2BWiITsZL%2Ft3AmYiSuH1HdxS8gHLFItXoLdeAXufedWNUvB26QFGlQ8%2Fc35yx1mtKx4y3vXzMQLWmP8Ci%2BM1v3MdW7yMuMgUt52zivZeQBw8DKTcNjJq%2BxKGjGCYsfe5%2B6EMfR%2Fofe12NeE%2FtZivWRnS8gxT%2FoC69gK8oqxXpu92uksi4uRq2K0itVelnjWC03mmUJIU52mvLfh2rZXww1btAl9ixp3Ee%2FpZzKXC5QOh4THDutHlxyqLvZzZP5ekGclJtyHFzsV9l%2B1OxuQ%2BngoKj9CRYSag6jUzIt%2BNUnsc5asiIDVYgYpyVgdzuTSnP0MPO6ZfNEkmI6ibBItk7lAY2GHIXTDtdmfxqZ7636Ug4sP7UuWNxwli2nH1xaTwesYE6Uhh8BpWWiRZLdDoWtORE5lRYlqAYttJvWdtwOWy4%2Bh%2B6SLi6gA35uWlCnWrNp3hvoojhzrRBI2L9EHAr8FXtJbc4Yt8DEopUgCD9SEqQbG4U4G1xgRMS8aAy3hTrMOnx%2F74GOqUBJMWq2yojHE%2Br8HDTHgxAFIt5HNQfmVnzPO6Cn2EhQAm9T5jVXoKe4gMN3QUoicZUY92x7FKS2kEUEiEpyeza9In3Ez2nD5kdwbN7hO0tTri%2FjN4Wjvb40wxSkbg5q47gtlmbZhT4cT9wnnxSofYK1%2FHj6L0R6G1uL6xEIy1atMBmbpAXFyspYus0oOWH6kwlJFFXkxTdh0SIsF%2F5BdjFRwhByTMy&X-Amz-Signature=73c67fb9079b342a765a3b78b688260147db93a3db174b18274950e48e7a281b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6JDZJF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICh72dWoIryMRnB%2FkGS%2BMnFIJWyMbT%2BTzUTO0cKQRfMkAiEAlCldtFl2weV6fA8TQG%2BXfh3UZ5fdRrdvXKnP8ZvWYQUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAnwK3AkKLHf%2BhXDCrcAxZtlEa91C6e8pnE0UuGvDjWiyBuF2lhOVblsd%2FT3675QEd5St14ZBmJ4qnB8HB14bbZ6Mlg7tfc8FD%2BXASXkepGUcHUfVjwjJ8Ht%2BKdU2kFKQwkE7Jak2oHt2bN%2BWiITsZL%2Ft3AmYiSuH1HdxS8gHLFItXoLdeAXufedWNUvB26QFGlQ8%2Fc35yx1mtKx4y3vXzMQLWmP8Ci%2BM1v3MdW7yMuMgUt52zivZeQBw8DKTcNjJq%2BxKGjGCYsfe5%2B6EMfR%2Fofe12NeE%2FtZivWRnS8gxT%2FoC69gK8oqxXpu92uksi4uRq2K0itVelnjWC03mmUJIU52mvLfh2rZXww1btAl9ixp3Ee%2FpZzKXC5QOh4THDutHlxyqLvZzZP5ekGclJtyHFzsV9l%2B1OxuQ%2BngoKj9CRYSag6jUzIt%2BNUnsc5asiIDVYgYpyVgdzuTSnP0MPO6ZfNEkmI6ibBItk7lAY2GHIXTDtdmfxqZ7636Ug4sP7UuWNxwli2nH1xaTwesYE6Uhh8BpWWiRZLdDoWtORE5lRYlqAYttJvWdtwOWy4%2Bh%2B6SLi6gA35uWlCnWrNp3hvoojhzrRBI2L9EHAr8FXtJbc4Yt8DEopUgCD9SEqQbG4U4G1xgRMS8aAy3hTrMOnx%2F74GOqUBJMWq2yojHE%2Br8HDTHgxAFIt5HNQfmVnzPO6Cn2EhQAm9T5jVXoKe4gMN3QUoicZUY92x7FKS2kEUEiEpyeza9In3Ez2nD5kdwbN7hO0tTri%2FjN4Wjvb40wxSkbg5q47gtlmbZhT4cT9wnnxSofYK1%2FHj6L0R6G1uL6xEIy1atMBmbpAXFyspYus0oOWH6kwlJFFXkxTdh0SIsF%2F5BdjFRwhByTMy&X-Amz-Signature=9deeb0ce0b6454fc165bb773ddcc3575a04f97842e91e5f1f0e5744e32f48fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6JDZJF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICh72dWoIryMRnB%2FkGS%2BMnFIJWyMbT%2BTzUTO0cKQRfMkAiEAlCldtFl2weV6fA8TQG%2BXfh3UZ5fdRrdvXKnP8ZvWYQUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAnwK3AkKLHf%2BhXDCrcAxZtlEa91C6e8pnE0UuGvDjWiyBuF2lhOVblsd%2FT3675QEd5St14ZBmJ4qnB8HB14bbZ6Mlg7tfc8FD%2BXASXkepGUcHUfVjwjJ8Ht%2BKdU2kFKQwkE7Jak2oHt2bN%2BWiITsZL%2Ft3AmYiSuH1HdxS8gHLFItXoLdeAXufedWNUvB26QFGlQ8%2Fc35yx1mtKx4y3vXzMQLWmP8Ci%2BM1v3MdW7yMuMgUt52zivZeQBw8DKTcNjJq%2BxKGjGCYsfe5%2B6EMfR%2Fofe12NeE%2FtZivWRnS8gxT%2FoC69gK8oqxXpu92uksi4uRq2K0itVelnjWC03mmUJIU52mvLfh2rZXww1btAl9ixp3Ee%2FpZzKXC5QOh4THDutHlxyqLvZzZP5ekGclJtyHFzsV9l%2B1OxuQ%2BngoKj9CRYSag6jUzIt%2BNUnsc5asiIDVYgYpyVgdzuTSnP0MPO6ZfNEkmI6ibBItk7lAY2GHIXTDtdmfxqZ7636Ug4sP7UuWNxwli2nH1xaTwesYE6Uhh8BpWWiRZLdDoWtORE5lRYlqAYttJvWdtwOWy4%2Bh%2B6SLi6gA35uWlCnWrNp3hvoojhzrRBI2L9EHAr8FXtJbc4Yt8DEopUgCD9SEqQbG4U4G1xgRMS8aAy3hTrMOnx%2F74GOqUBJMWq2yojHE%2Br8HDTHgxAFIt5HNQfmVnzPO6Cn2EhQAm9T5jVXoKe4gMN3QUoicZUY92x7FKS2kEUEiEpyeza9In3Ez2nD5kdwbN7hO0tTri%2FjN4Wjvb40wxSkbg5q47gtlmbZhT4cT9wnnxSofYK1%2FHj6L0R6G1uL6xEIy1atMBmbpAXFyspYus0oOWH6kwlJFFXkxTdh0SIsF%2F5BdjFRwhByTMy&X-Amz-Signature=e39cd953913adfc1fac9eecc79ca28eda9fa440ed13a88bc5dfa471f3548bd85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6JDZJF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICh72dWoIryMRnB%2FkGS%2BMnFIJWyMbT%2BTzUTO0cKQRfMkAiEAlCldtFl2weV6fA8TQG%2BXfh3UZ5fdRrdvXKnP8ZvWYQUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAnwK3AkKLHf%2BhXDCrcAxZtlEa91C6e8pnE0UuGvDjWiyBuF2lhOVblsd%2FT3675QEd5St14ZBmJ4qnB8HB14bbZ6Mlg7tfc8FD%2BXASXkepGUcHUfVjwjJ8Ht%2BKdU2kFKQwkE7Jak2oHt2bN%2BWiITsZL%2Ft3AmYiSuH1HdxS8gHLFItXoLdeAXufedWNUvB26QFGlQ8%2Fc35yx1mtKx4y3vXzMQLWmP8Ci%2BM1v3MdW7yMuMgUt52zivZeQBw8DKTcNjJq%2BxKGjGCYsfe5%2B6EMfR%2Fofe12NeE%2FtZivWRnS8gxT%2FoC69gK8oqxXpu92uksi4uRq2K0itVelnjWC03mmUJIU52mvLfh2rZXww1btAl9ixp3Ee%2FpZzKXC5QOh4THDutHlxyqLvZzZP5ekGclJtyHFzsV9l%2B1OxuQ%2BngoKj9CRYSag6jUzIt%2BNUnsc5asiIDVYgYpyVgdzuTSnP0MPO6ZfNEkmI6ibBItk7lAY2GHIXTDtdmfxqZ7636Ug4sP7UuWNxwli2nH1xaTwesYE6Uhh8BpWWiRZLdDoWtORE5lRYlqAYttJvWdtwOWy4%2Bh%2B6SLi6gA35uWlCnWrNp3hvoojhzrRBI2L9EHAr8FXtJbc4Yt8DEopUgCD9SEqQbG4U4G1xgRMS8aAy3hTrMOnx%2F74GOqUBJMWq2yojHE%2Br8HDTHgxAFIt5HNQfmVnzPO6Cn2EhQAm9T5jVXoKe4gMN3QUoicZUY92x7FKS2kEUEiEpyeza9In3Ez2nD5kdwbN7hO0tTri%2FjN4Wjvb40wxSkbg5q47gtlmbZhT4cT9wnnxSofYK1%2FHj6L0R6G1uL6xEIy1atMBmbpAXFyspYus0oOWH6kwlJFFXkxTdh0SIsF%2F5BdjFRwhByTMy&X-Amz-Signature=85ddcb5504f11c5193dc022cd5eda3965ef63599f9118fc6ee0329adde8b4a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
