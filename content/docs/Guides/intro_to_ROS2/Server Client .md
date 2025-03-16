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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLZPXR5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEzSeKBnHO59VBjYiyCinSC4jM1AXA0vAvJMsXOOr0AAiAn%2F9BcXKiCLMS2JPiOXuQkLIIOYC7r5ucm5pCDT2TZmyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMePb1uc1aQ2yPTltYKtwDhEiJ%2FnXUYFDxkbNxn%2Fle4xtjzPEpu4FK9SA%2BFvauYi0ZoplKX9MzOcRkh49Wa3BddKb1Cj5kGFFJxsiqpuj6RcCktONmRCkKG8RcIOA%2FKWVEnFJFi%2BqFsubx2FOTZNHW3s%2B6YzKWoDzxeHIRQsdmjSmoXa23poBjeDCaq7FkYaSoIGKY%2BGMrb9DkOkM0M8r1peulQ4v2mVU5KGt7DZIALXztuJlvLyfmddD0%2BVIb74AIpJHqVuLgTEzVr%2FR8OzXNHjTbJRBQggAGTVCtvuZAjo47NEJXQsesDubm1lQlNloKINJGcmCoor8%2FtI1g5%2BMuo9%2FrhtN5gDhmVn98xMAL61yNvVkhuBmqPI0MW3CETSHjREZFgZBDl9icaW71HvS5ghi39%2B1wC7mZDAShVXTZtBuXccEWNsZD%2F3GvWmwAqwblPpbfeXNug4v%2B2UiRMX9QlWuMpDqNEdYDN6XtJKgl2BYx6jkbrBtJyYiL7NxoIahK0V2sfC9juGCwBGqIe%2BVnQImIfP6Ccl7BW%2ByyQ0l5PkJJVuI2tysIbBHSmTSbRB7o%2B8%2FyWt1t1B2Gff3BEmIWkzdkt2BPDlyzsEhLZVbG%2Bb51nyHl30Xfppp7ZLnS3KYCYwXe2OlmkzeJRl4w%2BYHYvgY6pgEkjI05vkXi9dB2oqdAytELyjEMbIzxSHyMtKsf5sIaO%2BcLP8bwKI%2F%2B%2FRs6XunX%2FsoKQfJBilpffn0lYvG0ikax%2BfE8se2Ad5FogPtZ3n6Y4X9CBFITuXYy6GPRxXpCuDC2WAwqto%2Bmkcn4ZAASs5UFxhRJGmVgQVga6gtXRa3qcb2DNDXezpBzwi%2BQWmJRchmhoygOjpsup%2FVY%2FzmJ57OINljlfgVE&X-Amz-Signature=2a20992ac95bceabf2e67f6043f253de292bd215159f62a0f314c77f1f971f70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLZPXR5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEzSeKBnHO59VBjYiyCinSC4jM1AXA0vAvJMsXOOr0AAiAn%2F9BcXKiCLMS2JPiOXuQkLIIOYC7r5ucm5pCDT2TZmyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMePb1uc1aQ2yPTltYKtwDhEiJ%2FnXUYFDxkbNxn%2Fle4xtjzPEpu4FK9SA%2BFvauYi0ZoplKX9MzOcRkh49Wa3BddKb1Cj5kGFFJxsiqpuj6RcCktONmRCkKG8RcIOA%2FKWVEnFJFi%2BqFsubx2FOTZNHW3s%2B6YzKWoDzxeHIRQsdmjSmoXa23poBjeDCaq7FkYaSoIGKY%2BGMrb9DkOkM0M8r1peulQ4v2mVU5KGt7DZIALXztuJlvLyfmddD0%2BVIb74AIpJHqVuLgTEzVr%2FR8OzXNHjTbJRBQggAGTVCtvuZAjo47NEJXQsesDubm1lQlNloKINJGcmCoor8%2FtI1g5%2BMuo9%2FrhtN5gDhmVn98xMAL61yNvVkhuBmqPI0MW3CETSHjREZFgZBDl9icaW71HvS5ghi39%2B1wC7mZDAShVXTZtBuXccEWNsZD%2F3GvWmwAqwblPpbfeXNug4v%2B2UiRMX9QlWuMpDqNEdYDN6XtJKgl2BYx6jkbrBtJyYiL7NxoIahK0V2sfC9juGCwBGqIe%2BVnQImIfP6Ccl7BW%2ByyQ0l5PkJJVuI2tysIbBHSmTSbRB7o%2B8%2FyWt1t1B2Gff3BEmIWkzdkt2BPDlyzsEhLZVbG%2Bb51nyHl30Xfppp7ZLnS3KYCYwXe2OlmkzeJRl4w%2BYHYvgY6pgEkjI05vkXi9dB2oqdAytELyjEMbIzxSHyMtKsf5sIaO%2BcLP8bwKI%2F%2B%2FRs6XunX%2FsoKQfJBilpffn0lYvG0ikax%2BfE8se2Ad5FogPtZ3n6Y4X9CBFITuXYy6GPRxXpCuDC2WAwqto%2Bmkcn4ZAASs5UFxhRJGmVgQVga6gtXRa3qcb2DNDXezpBzwi%2BQWmJRchmhoygOjpsup%2FVY%2FzmJ57OINljlfgVE&X-Amz-Signature=85b6d2354fd587365b6e8f95d0b02147678fa2769b805db162f947bb4744a818&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLZPXR5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEzSeKBnHO59VBjYiyCinSC4jM1AXA0vAvJMsXOOr0AAiAn%2F9BcXKiCLMS2JPiOXuQkLIIOYC7r5ucm5pCDT2TZmyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMePb1uc1aQ2yPTltYKtwDhEiJ%2FnXUYFDxkbNxn%2Fle4xtjzPEpu4FK9SA%2BFvauYi0ZoplKX9MzOcRkh49Wa3BddKb1Cj5kGFFJxsiqpuj6RcCktONmRCkKG8RcIOA%2FKWVEnFJFi%2BqFsubx2FOTZNHW3s%2B6YzKWoDzxeHIRQsdmjSmoXa23poBjeDCaq7FkYaSoIGKY%2BGMrb9DkOkM0M8r1peulQ4v2mVU5KGt7DZIALXztuJlvLyfmddD0%2BVIb74AIpJHqVuLgTEzVr%2FR8OzXNHjTbJRBQggAGTVCtvuZAjo47NEJXQsesDubm1lQlNloKINJGcmCoor8%2FtI1g5%2BMuo9%2FrhtN5gDhmVn98xMAL61yNvVkhuBmqPI0MW3CETSHjREZFgZBDl9icaW71HvS5ghi39%2B1wC7mZDAShVXTZtBuXccEWNsZD%2F3GvWmwAqwblPpbfeXNug4v%2B2UiRMX9QlWuMpDqNEdYDN6XtJKgl2BYx6jkbrBtJyYiL7NxoIahK0V2sfC9juGCwBGqIe%2BVnQImIfP6Ccl7BW%2ByyQ0l5PkJJVuI2tysIbBHSmTSbRB7o%2B8%2FyWt1t1B2Gff3BEmIWkzdkt2BPDlyzsEhLZVbG%2Bb51nyHl30Xfppp7ZLnS3KYCYwXe2OlmkzeJRl4w%2BYHYvgY6pgEkjI05vkXi9dB2oqdAytELyjEMbIzxSHyMtKsf5sIaO%2BcLP8bwKI%2F%2B%2FRs6XunX%2FsoKQfJBilpffn0lYvG0ikax%2BfE8se2Ad5FogPtZ3n6Y4X9CBFITuXYy6GPRxXpCuDC2WAwqto%2Bmkcn4ZAASs5UFxhRJGmVgQVga6gtXRa3qcb2DNDXezpBzwi%2BQWmJRchmhoygOjpsup%2FVY%2FzmJ57OINljlfgVE&X-Amz-Signature=b17bf83ea11b9aebdaee0d25066233a1230df4d748b5423f5c7fd70331ea0178&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLZPXR5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEzSeKBnHO59VBjYiyCinSC4jM1AXA0vAvJMsXOOr0AAiAn%2F9BcXKiCLMS2JPiOXuQkLIIOYC7r5ucm5pCDT2TZmyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMePb1uc1aQ2yPTltYKtwDhEiJ%2FnXUYFDxkbNxn%2Fle4xtjzPEpu4FK9SA%2BFvauYi0ZoplKX9MzOcRkh49Wa3BddKb1Cj5kGFFJxsiqpuj6RcCktONmRCkKG8RcIOA%2FKWVEnFJFi%2BqFsubx2FOTZNHW3s%2B6YzKWoDzxeHIRQsdmjSmoXa23poBjeDCaq7FkYaSoIGKY%2BGMrb9DkOkM0M8r1peulQ4v2mVU5KGt7DZIALXztuJlvLyfmddD0%2BVIb74AIpJHqVuLgTEzVr%2FR8OzXNHjTbJRBQggAGTVCtvuZAjo47NEJXQsesDubm1lQlNloKINJGcmCoor8%2FtI1g5%2BMuo9%2FrhtN5gDhmVn98xMAL61yNvVkhuBmqPI0MW3CETSHjREZFgZBDl9icaW71HvS5ghi39%2B1wC7mZDAShVXTZtBuXccEWNsZD%2F3GvWmwAqwblPpbfeXNug4v%2B2UiRMX9QlWuMpDqNEdYDN6XtJKgl2BYx6jkbrBtJyYiL7NxoIahK0V2sfC9juGCwBGqIe%2BVnQImIfP6Ccl7BW%2ByyQ0l5PkJJVuI2tysIbBHSmTSbRB7o%2B8%2FyWt1t1B2Gff3BEmIWkzdkt2BPDlyzsEhLZVbG%2Bb51nyHl30Xfppp7ZLnS3KYCYwXe2OlmkzeJRl4w%2BYHYvgY6pgEkjI05vkXi9dB2oqdAytELyjEMbIzxSHyMtKsf5sIaO%2BcLP8bwKI%2F%2B%2FRs6XunX%2FsoKQfJBilpffn0lYvG0ikax%2BfE8se2Ad5FogPtZ3n6Y4X9CBFITuXYy6GPRxXpCuDC2WAwqto%2Bmkcn4ZAASs5UFxhRJGmVgQVga6gtXRa3qcb2DNDXezpBzwi%2BQWmJRchmhoygOjpsup%2FVY%2FzmJ57OINljlfgVE&X-Amz-Signature=60b41763cafbc33126ce4034fe9aa926424da29f634d88f387909f545d1cda30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLZPXR5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEzSeKBnHO59VBjYiyCinSC4jM1AXA0vAvJMsXOOr0AAiAn%2F9BcXKiCLMS2JPiOXuQkLIIOYC7r5ucm5pCDT2TZmyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMePb1uc1aQ2yPTltYKtwDhEiJ%2FnXUYFDxkbNxn%2Fle4xtjzPEpu4FK9SA%2BFvauYi0ZoplKX9MzOcRkh49Wa3BddKb1Cj5kGFFJxsiqpuj6RcCktONmRCkKG8RcIOA%2FKWVEnFJFi%2BqFsubx2FOTZNHW3s%2B6YzKWoDzxeHIRQsdmjSmoXa23poBjeDCaq7FkYaSoIGKY%2BGMrb9DkOkM0M8r1peulQ4v2mVU5KGt7DZIALXztuJlvLyfmddD0%2BVIb74AIpJHqVuLgTEzVr%2FR8OzXNHjTbJRBQggAGTVCtvuZAjo47NEJXQsesDubm1lQlNloKINJGcmCoor8%2FtI1g5%2BMuo9%2FrhtN5gDhmVn98xMAL61yNvVkhuBmqPI0MW3CETSHjREZFgZBDl9icaW71HvS5ghi39%2B1wC7mZDAShVXTZtBuXccEWNsZD%2F3GvWmwAqwblPpbfeXNug4v%2B2UiRMX9QlWuMpDqNEdYDN6XtJKgl2BYx6jkbrBtJyYiL7NxoIahK0V2sfC9juGCwBGqIe%2BVnQImIfP6Ccl7BW%2ByyQ0l5PkJJVuI2tysIbBHSmTSbRB7o%2B8%2FyWt1t1B2Gff3BEmIWkzdkt2BPDlyzsEhLZVbG%2Bb51nyHl30Xfppp7ZLnS3KYCYwXe2OlmkzeJRl4w%2BYHYvgY6pgEkjI05vkXi9dB2oqdAytELyjEMbIzxSHyMtKsf5sIaO%2BcLP8bwKI%2F%2B%2FRs6XunX%2FsoKQfJBilpffn0lYvG0ikax%2BfE8se2Ad5FogPtZ3n6Y4X9CBFITuXYy6GPRxXpCuDC2WAwqto%2Bmkcn4ZAASs5UFxhRJGmVgQVga6gtXRa3qcb2DNDXezpBzwi%2BQWmJRchmhoygOjpsup%2FVY%2FzmJ57OINljlfgVE&X-Amz-Signature=8c4a1a5185b916be43f34b3fb25c4a56f1cadd96ecee5b6a7357079ae705e99e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
