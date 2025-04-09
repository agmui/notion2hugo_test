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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUYO7YKJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCcSboO1Mw7geN6FuTIXCvCXjRYdKtEkm%2FFhO99v9%2B22gIhAIfX763IORr8SG%2Be5VZwDAMuttQzJhBid2UzLkTKzOB6KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FznApR%2FiMxq4XxaUq3AMXmxJJAmyaHhsrGPOucQtoD6NypbuG11ZenZZn%2Bwj8X%2BlQkxvIwRCc5i6wQj3sb4zJU0w8idE%2BStpFZoxNXWqXUwDepWlCXWJ2fyzd1I4n%2FufBA7sk%2Bjz03xCLcYZzHCp28344uID1woh0sjsh0q%2BYhB0QW88UoxhyiDC%2F%2BN3L4bWjwfPJby%2BMtRsIQUNJRqM8Jo1bnewNYJZ6ZgtSvvdtLQPkR7w8Oml2mTUKl0o7rHnq%2FosQ4oytWGJt5vqcuWoTUBK5OBMSa8iIAj67DeCyyGd1rXZGPhw6PH%2BcXq5zz9wGXlXFybcEGkNFzQbjPQuq%2BgRAferVVfkdCbe3HRdEKisxS8zBsT8aEdM8n7w7BjlcydAnqSEwrhE6xQJajSXBreua4U5eHu8IQZRnSBNgF52dhO65Fn%2BELA0H44CowrLF1IVlSoKLjA%2FFm7kXM1tK6fcTluOeC26glrZ2EOHRO7RdPg9hu0iyuvzQd6DhOFtdeHBZqQDpDozu4RmbZKDMDroV6lQ7wkfqE35cpPQxfFGXpXevK%2FFsl9TskjbpCiAlofELMfDoxtearbSmhHYIoRKMODfdg27miNyuHU6mbOxOUa1kGdgSnlE6jRmlQg1fWU9wCFw6Be9sCjDMstm%2FBjqkAVbHb3qmtBKX8%2FcRAFC3lqWXl3jggk09gaoT%2Fmq6deJaMQULaJhMIL6HIQLEmelzdqtbk8gsO7TC8jYcEr2Ja%2BJFxmlYDgxmogbimtxtaKe3drQar09akC4ktR8t%2Fo0KQMj%2BB3vVALZsLy9FUKIV27Mv23jL4HuuT1LR4Espv38%2F8oIPH3RNuJqkLOem9FlyODaUMzZbT1AXI7P5936HE2NDtyAv&X-Amz-Signature=f761871f924b62b30376016272ca5929761026253e6262ae4862a4af0ab654be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUYO7YKJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCcSboO1Mw7geN6FuTIXCvCXjRYdKtEkm%2FFhO99v9%2B22gIhAIfX763IORr8SG%2Be5VZwDAMuttQzJhBid2UzLkTKzOB6KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FznApR%2FiMxq4XxaUq3AMXmxJJAmyaHhsrGPOucQtoD6NypbuG11ZenZZn%2Bwj8X%2BlQkxvIwRCc5i6wQj3sb4zJU0w8idE%2BStpFZoxNXWqXUwDepWlCXWJ2fyzd1I4n%2FufBA7sk%2Bjz03xCLcYZzHCp28344uID1woh0sjsh0q%2BYhB0QW88UoxhyiDC%2F%2BN3L4bWjwfPJby%2BMtRsIQUNJRqM8Jo1bnewNYJZ6ZgtSvvdtLQPkR7w8Oml2mTUKl0o7rHnq%2FosQ4oytWGJt5vqcuWoTUBK5OBMSa8iIAj67DeCyyGd1rXZGPhw6PH%2BcXq5zz9wGXlXFybcEGkNFzQbjPQuq%2BgRAferVVfkdCbe3HRdEKisxS8zBsT8aEdM8n7w7BjlcydAnqSEwrhE6xQJajSXBreua4U5eHu8IQZRnSBNgF52dhO65Fn%2BELA0H44CowrLF1IVlSoKLjA%2FFm7kXM1tK6fcTluOeC26glrZ2EOHRO7RdPg9hu0iyuvzQd6DhOFtdeHBZqQDpDozu4RmbZKDMDroV6lQ7wkfqE35cpPQxfFGXpXevK%2FFsl9TskjbpCiAlofELMfDoxtearbSmhHYIoRKMODfdg27miNyuHU6mbOxOUa1kGdgSnlE6jRmlQg1fWU9wCFw6Be9sCjDMstm%2FBjqkAVbHb3qmtBKX8%2FcRAFC3lqWXl3jggk09gaoT%2Fmq6deJaMQULaJhMIL6HIQLEmelzdqtbk8gsO7TC8jYcEr2Ja%2BJFxmlYDgxmogbimtxtaKe3drQar09akC4ktR8t%2Fo0KQMj%2BB3vVALZsLy9FUKIV27Mv23jL4HuuT1LR4Espv38%2F8oIPH3RNuJqkLOem9FlyODaUMzZbT1AXI7P5936HE2NDtyAv&X-Amz-Signature=7d34f91e9698a4bffe126db648ce1de2625cfb2a0bd3f29eca88e367d325141b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUYO7YKJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCcSboO1Mw7geN6FuTIXCvCXjRYdKtEkm%2FFhO99v9%2B22gIhAIfX763IORr8SG%2Be5VZwDAMuttQzJhBid2UzLkTKzOB6KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FznApR%2FiMxq4XxaUq3AMXmxJJAmyaHhsrGPOucQtoD6NypbuG11ZenZZn%2Bwj8X%2BlQkxvIwRCc5i6wQj3sb4zJU0w8idE%2BStpFZoxNXWqXUwDepWlCXWJ2fyzd1I4n%2FufBA7sk%2Bjz03xCLcYZzHCp28344uID1woh0sjsh0q%2BYhB0QW88UoxhyiDC%2F%2BN3L4bWjwfPJby%2BMtRsIQUNJRqM8Jo1bnewNYJZ6ZgtSvvdtLQPkR7w8Oml2mTUKl0o7rHnq%2FosQ4oytWGJt5vqcuWoTUBK5OBMSa8iIAj67DeCyyGd1rXZGPhw6PH%2BcXq5zz9wGXlXFybcEGkNFzQbjPQuq%2BgRAferVVfkdCbe3HRdEKisxS8zBsT8aEdM8n7w7BjlcydAnqSEwrhE6xQJajSXBreua4U5eHu8IQZRnSBNgF52dhO65Fn%2BELA0H44CowrLF1IVlSoKLjA%2FFm7kXM1tK6fcTluOeC26glrZ2EOHRO7RdPg9hu0iyuvzQd6DhOFtdeHBZqQDpDozu4RmbZKDMDroV6lQ7wkfqE35cpPQxfFGXpXevK%2FFsl9TskjbpCiAlofELMfDoxtearbSmhHYIoRKMODfdg27miNyuHU6mbOxOUa1kGdgSnlE6jRmlQg1fWU9wCFw6Be9sCjDMstm%2FBjqkAVbHb3qmtBKX8%2FcRAFC3lqWXl3jggk09gaoT%2Fmq6deJaMQULaJhMIL6HIQLEmelzdqtbk8gsO7TC8jYcEr2Ja%2BJFxmlYDgxmogbimtxtaKe3drQar09akC4ktR8t%2Fo0KQMj%2BB3vVALZsLy9FUKIV27Mv23jL4HuuT1LR4Espv38%2F8oIPH3RNuJqkLOem9FlyODaUMzZbT1AXI7P5936HE2NDtyAv&X-Amz-Signature=1e208a648cf69598b43236e449abea8b03791a6520925d9e9fcbd8085097e833&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUYO7YKJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCcSboO1Mw7geN6FuTIXCvCXjRYdKtEkm%2FFhO99v9%2B22gIhAIfX763IORr8SG%2Be5VZwDAMuttQzJhBid2UzLkTKzOB6KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FznApR%2FiMxq4XxaUq3AMXmxJJAmyaHhsrGPOucQtoD6NypbuG11ZenZZn%2Bwj8X%2BlQkxvIwRCc5i6wQj3sb4zJU0w8idE%2BStpFZoxNXWqXUwDepWlCXWJ2fyzd1I4n%2FufBA7sk%2Bjz03xCLcYZzHCp28344uID1woh0sjsh0q%2BYhB0QW88UoxhyiDC%2F%2BN3L4bWjwfPJby%2BMtRsIQUNJRqM8Jo1bnewNYJZ6ZgtSvvdtLQPkR7w8Oml2mTUKl0o7rHnq%2FosQ4oytWGJt5vqcuWoTUBK5OBMSa8iIAj67DeCyyGd1rXZGPhw6PH%2BcXq5zz9wGXlXFybcEGkNFzQbjPQuq%2BgRAferVVfkdCbe3HRdEKisxS8zBsT8aEdM8n7w7BjlcydAnqSEwrhE6xQJajSXBreua4U5eHu8IQZRnSBNgF52dhO65Fn%2BELA0H44CowrLF1IVlSoKLjA%2FFm7kXM1tK6fcTluOeC26glrZ2EOHRO7RdPg9hu0iyuvzQd6DhOFtdeHBZqQDpDozu4RmbZKDMDroV6lQ7wkfqE35cpPQxfFGXpXevK%2FFsl9TskjbpCiAlofELMfDoxtearbSmhHYIoRKMODfdg27miNyuHU6mbOxOUa1kGdgSnlE6jRmlQg1fWU9wCFw6Be9sCjDMstm%2FBjqkAVbHb3qmtBKX8%2FcRAFC3lqWXl3jggk09gaoT%2Fmq6deJaMQULaJhMIL6HIQLEmelzdqtbk8gsO7TC8jYcEr2Ja%2BJFxmlYDgxmogbimtxtaKe3drQar09akC4ktR8t%2Fo0KQMj%2BB3vVALZsLy9FUKIV27Mv23jL4HuuT1LR4Espv38%2F8oIPH3RNuJqkLOem9FlyODaUMzZbT1AXI7P5936HE2NDtyAv&X-Amz-Signature=5b3fb75c00367bf85a44d68f798ffc875871d50d1f9010a1f58a3c807e1885a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUYO7YKJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCcSboO1Mw7geN6FuTIXCvCXjRYdKtEkm%2FFhO99v9%2B22gIhAIfX763IORr8SG%2Be5VZwDAMuttQzJhBid2UzLkTKzOB6KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FznApR%2FiMxq4XxaUq3AMXmxJJAmyaHhsrGPOucQtoD6NypbuG11ZenZZn%2Bwj8X%2BlQkxvIwRCc5i6wQj3sb4zJU0w8idE%2BStpFZoxNXWqXUwDepWlCXWJ2fyzd1I4n%2FufBA7sk%2Bjz03xCLcYZzHCp28344uID1woh0sjsh0q%2BYhB0QW88UoxhyiDC%2F%2BN3L4bWjwfPJby%2BMtRsIQUNJRqM8Jo1bnewNYJZ6ZgtSvvdtLQPkR7w8Oml2mTUKl0o7rHnq%2FosQ4oytWGJt5vqcuWoTUBK5OBMSa8iIAj67DeCyyGd1rXZGPhw6PH%2BcXq5zz9wGXlXFybcEGkNFzQbjPQuq%2BgRAferVVfkdCbe3HRdEKisxS8zBsT8aEdM8n7w7BjlcydAnqSEwrhE6xQJajSXBreua4U5eHu8IQZRnSBNgF52dhO65Fn%2BELA0H44CowrLF1IVlSoKLjA%2FFm7kXM1tK6fcTluOeC26glrZ2EOHRO7RdPg9hu0iyuvzQd6DhOFtdeHBZqQDpDozu4RmbZKDMDroV6lQ7wkfqE35cpPQxfFGXpXevK%2FFsl9TskjbpCiAlofELMfDoxtearbSmhHYIoRKMODfdg27miNyuHU6mbOxOUa1kGdgSnlE6jRmlQg1fWU9wCFw6Be9sCjDMstm%2FBjqkAVbHb3qmtBKX8%2FcRAFC3lqWXl3jggk09gaoT%2Fmq6deJaMQULaJhMIL6HIQLEmelzdqtbk8gsO7TC8jYcEr2Ja%2BJFxmlYDgxmogbimtxtaKe3drQar09akC4ktR8t%2Fo0KQMj%2BB3vVALZsLy9FUKIV27Mv23jL4HuuT1LR4Espv38%2F8oIPH3RNuJqkLOem9FlyODaUMzZbT1AXI7P5936HE2NDtyAv&X-Amz-Signature=11ad0cdf92ff42d2a13ca83584876afee87fd5d781951b96b3550685c4cdc31f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
