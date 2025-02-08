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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OE6FXJO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCqPoAemcFD7eOjfhr9kVVZdzsPiz6%2Fz5CcKKuUJbXPcwIgW%2FNmJnNHyb10R3%2FdiB%2BvcO3x9p9L1yauFlDQP8kZvskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2Au9NIgsYuZYOgcircA7%2BFjRCVQbsRkTy5DSjCjTuVPHnvP6A5Mxy37KOs788YxSkTrD8xlcq97vR%2FDCCy5Nh31%2FTA04cK6pwb0z%2FjQHHWP%2FZ%2BXlg6izOsOLhCArK1vOoSwjJeLOGdKtkU3XYZa%2BcwLRua8S%2FHQsQybGBgQShia9abMbv%2BNxxq8Pwcquont2Lc%2B3jaggfEYeFeDees6bBHxqsLezWxcUkcf73YCCT7j4lLRVVxBS7Uvw17xxSUIZf93KAKBg9E1dEO1XCqRohEj9PV5LXa4pbJuu7s19YQWMo33cGOzYrVFi1%2BSsojFvViEtC%2BPIqXpI%2BxRYaT3gjKg5yE5b7u0Bw267nb99pU0oKCXBOmnJInDlmoRZ9zEXdjtOHPMG9JEv3o2yRLi6EQNgr4R%2FUpWp9kpH5ymq%2FNrqxNmbxRA1fSWlmtUYoN9LOun2zxVOD9HcqoqDEfXI99J%2BJBGWR1ekSYjHX8G1av7nVTtHsfxC8R474HOxmbgTfa3YSFzk0Gr7R1NZ22I9Tm6IaPfcHCVW4gPzkzdQ8VmuJTn1fVSQj5ZVb%2BU%2FmdG%2BR8E1FfzymHn7QwRnArgkFuiMQ7IUq%2BAH4h7W15xmsXbADXqLOkSXgj1qZP29I4RSCdmQ2ubauCETWRMJaHnb0GOqUB%2FAuFVRNEiZHrk14vgT%2Bs0DI5vsp1v1cGfLaI81TFIcZlPF2iEUF4I06G%2BwSZuHWKaKFw%2FiEAPRPfRUNqMWmXuf8yQhP9Nebo4qwGq9znCkJva9g%2FrPpvP%2Ff%2BigvmlGxIwwq9E0sPDzm0pJgBkwTPOpQj60eBnqJDMEfLNQKkyxPWTUAlkr1LU3dwKfoRW%2FZbjIe8M2sEQB3Be7d5YEnc80QsWZdS&X-Amz-Signature=d35385a947247dc177e721e0523939f18e0729fc9cbbc5fad03ced4d8e54afc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OE6FXJO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCqPoAemcFD7eOjfhr9kVVZdzsPiz6%2Fz5CcKKuUJbXPcwIgW%2FNmJnNHyb10R3%2FdiB%2BvcO3x9p9L1yauFlDQP8kZvskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2Au9NIgsYuZYOgcircA7%2BFjRCVQbsRkTy5DSjCjTuVPHnvP6A5Mxy37KOs788YxSkTrD8xlcq97vR%2FDCCy5Nh31%2FTA04cK6pwb0z%2FjQHHWP%2FZ%2BXlg6izOsOLhCArK1vOoSwjJeLOGdKtkU3XYZa%2BcwLRua8S%2FHQsQybGBgQShia9abMbv%2BNxxq8Pwcquont2Lc%2B3jaggfEYeFeDees6bBHxqsLezWxcUkcf73YCCT7j4lLRVVxBS7Uvw17xxSUIZf93KAKBg9E1dEO1XCqRohEj9PV5LXa4pbJuu7s19YQWMo33cGOzYrVFi1%2BSsojFvViEtC%2BPIqXpI%2BxRYaT3gjKg5yE5b7u0Bw267nb99pU0oKCXBOmnJInDlmoRZ9zEXdjtOHPMG9JEv3o2yRLi6EQNgr4R%2FUpWp9kpH5ymq%2FNrqxNmbxRA1fSWlmtUYoN9LOun2zxVOD9HcqoqDEfXI99J%2BJBGWR1ekSYjHX8G1av7nVTtHsfxC8R474HOxmbgTfa3YSFzk0Gr7R1NZ22I9Tm6IaPfcHCVW4gPzkzdQ8VmuJTn1fVSQj5ZVb%2BU%2FmdG%2BR8E1FfzymHn7QwRnArgkFuiMQ7IUq%2BAH4h7W15xmsXbADXqLOkSXgj1qZP29I4RSCdmQ2ubauCETWRMJaHnb0GOqUB%2FAuFVRNEiZHrk14vgT%2Bs0DI5vsp1v1cGfLaI81TFIcZlPF2iEUF4I06G%2BwSZuHWKaKFw%2FiEAPRPfRUNqMWmXuf8yQhP9Nebo4qwGq9znCkJva9g%2FrPpvP%2Ff%2BigvmlGxIwwq9E0sPDzm0pJgBkwTPOpQj60eBnqJDMEfLNQKkyxPWTUAlkr1LU3dwKfoRW%2FZbjIe8M2sEQB3Be7d5YEnc80QsWZdS&X-Amz-Signature=13fde24d4fc30f1cd5fe373ab34c9d8d1197ceac57269191fc5c83c309e5d4f6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OE6FXJO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCqPoAemcFD7eOjfhr9kVVZdzsPiz6%2Fz5CcKKuUJbXPcwIgW%2FNmJnNHyb10R3%2FdiB%2BvcO3x9p9L1yauFlDQP8kZvskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2Au9NIgsYuZYOgcircA7%2BFjRCVQbsRkTy5DSjCjTuVPHnvP6A5Mxy37KOs788YxSkTrD8xlcq97vR%2FDCCy5Nh31%2FTA04cK6pwb0z%2FjQHHWP%2FZ%2BXlg6izOsOLhCArK1vOoSwjJeLOGdKtkU3XYZa%2BcwLRua8S%2FHQsQybGBgQShia9abMbv%2BNxxq8Pwcquont2Lc%2B3jaggfEYeFeDees6bBHxqsLezWxcUkcf73YCCT7j4lLRVVxBS7Uvw17xxSUIZf93KAKBg9E1dEO1XCqRohEj9PV5LXa4pbJuu7s19YQWMo33cGOzYrVFi1%2BSsojFvViEtC%2BPIqXpI%2BxRYaT3gjKg5yE5b7u0Bw267nb99pU0oKCXBOmnJInDlmoRZ9zEXdjtOHPMG9JEv3o2yRLi6EQNgr4R%2FUpWp9kpH5ymq%2FNrqxNmbxRA1fSWlmtUYoN9LOun2zxVOD9HcqoqDEfXI99J%2BJBGWR1ekSYjHX8G1av7nVTtHsfxC8R474HOxmbgTfa3YSFzk0Gr7R1NZ22I9Tm6IaPfcHCVW4gPzkzdQ8VmuJTn1fVSQj5ZVb%2BU%2FmdG%2BR8E1FfzymHn7QwRnArgkFuiMQ7IUq%2BAH4h7W15xmsXbADXqLOkSXgj1qZP29I4RSCdmQ2ubauCETWRMJaHnb0GOqUB%2FAuFVRNEiZHrk14vgT%2Bs0DI5vsp1v1cGfLaI81TFIcZlPF2iEUF4I06G%2BwSZuHWKaKFw%2FiEAPRPfRUNqMWmXuf8yQhP9Nebo4qwGq9znCkJva9g%2FrPpvP%2Ff%2BigvmlGxIwwq9E0sPDzm0pJgBkwTPOpQj60eBnqJDMEfLNQKkyxPWTUAlkr1LU3dwKfoRW%2FZbjIe8M2sEQB3Be7d5YEnc80QsWZdS&X-Amz-Signature=2eda181fff14ec3d80042abd41e6d652a3f7a9f3faae390e36e3f6bf5b042f82&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OE6FXJO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCqPoAemcFD7eOjfhr9kVVZdzsPiz6%2Fz5CcKKuUJbXPcwIgW%2FNmJnNHyb10R3%2FdiB%2BvcO3x9p9L1yauFlDQP8kZvskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2Au9NIgsYuZYOgcircA7%2BFjRCVQbsRkTy5DSjCjTuVPHnvP6A5Mxy37KOs788YxSkTrD8xlcq97vR%2FDCCy5Nh31%2FTA04cK6pwb0z%2FjQHHWP%2FZ%2BXlg6izOsOLhCArK1vOoSwjJeLOGdKtkU3XYZa%2BcwLRua8S%2FHQsQybGBgQShia9abMbv%2BNxxq8Pwcquont2Lc%2B3jaggfEYeFeDees6bBHxqsLezWxcUkcf73YCCT7j4lLRVVxBS7Uvw17xxSUIZf93KAKBg9E1dEO1XCqRohEj9PV5LXa4pbJuu7s19YQWMo33cGOzYrVFi1%2BSsojFvViEtC%2BPIqXpI%2BxRYaT3gjKg5yE5b7u0Bw267nb99pU0oKCXBOmnJInDlmoRZ9zEXdjtOHPMG9JEv3o2yRLi6EQNgr4R%2FUpWp9kpH5ymq%2FNrqxNmbxRA1fSWlmtUYoN9LOun2zxVOD9HcqoqDEfXI99J%2BJBGWR1ekSYjHX8G1av7nVTtHsfxC8R474HOxmbgTfa3YSFzk0Gr7R1NZ22I9Tm6IaPfcHCVW4gPzkzdQ8VmuJTn1fVSQj5ZVb%2BU%2FmdG%2BR8E1FfzymHn7QwRnArgkFuiMQ7IUq%2BAH4h7W15xmsXbADXqLOkSXgj1qZP29I4RSCdmQ2ubauCETWRMJaHnb0GOqUB%2FAuFVRNEiZHrk14vgT%2Bs0DI5vsp1v1cGfLaI81TFIcZlPF2iEUF4I06G%2BwSZuHWKaKFw%2FiEAPRPfRUNqMWmXuf8yQhP9Nebo4qwGq9znCkJva9g%2FrPpvP%2Ff%2BigvmlGxIwwq9E0sPDzm0pJgBkwTPOpQj60eBnqJDMEfLNQKkyxPWTUAlkr1LU3dwKfoRW%2FZbjIe8M2sEQB3Be7d5YEnc80QsWZdS&X-Amz-Signature=82dd6b57a5099b238489440ee28be281d18bef8b22404dcfe11ce4f3d0f49aba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OE6FXJO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCqPoAemcFD7eOjfhr9kVVZdzsPiz6%2Fz5CcKKuUJbXPcwIgW%2FNmJnNHyb10R3%2FdiB%2BvcO3x9p9L1yauFlDQP8kZvskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2Au9NIgsYuZYOgcircA7%2BFjRCVQbsRkTy5DSjCjTuVPHnvP6A5Mxy37KOs788YxSkTrD8xlcq97vR%2FDCCy5Nh31%2FTA04cK6pwb0z%2FjQHHWP%2FZ%2BXlg6izOsOLhCArK1vOoSwjJeLOGdKtkU3XYZa%2BcwLRua8S%2FHQsQybGBgQShia9abMbv%2BNxxq8Pwcquont2Lc%2B3jaggfEYeFeDees6bBHxqsLezWxcUkcf73YCCT7j4lLRVVxBS7Uvw17xxSUIZf93KAKBg9E1dEO1XCqRohEj9PV5LXa4pbJuu7s19YQWMo33cGOzYrVFi1%2BSsojFvViEtC%2BPIqXpI%2BxRYaT3gjKg5yE5b7u0Bw267nb99pU0oKCXBOmnJInDlmoRZ9zEXdjtOHPMG9JEv3o2yRLi6EQNgr4R%2FUpWp9kpH5ymq%2FNrqxNmbxRA1fSWlmtUYoN9LOun2zxVOD9HcqoqDEfXI99J%2BJBGWR1ekSYjHX8G1av7nVTtHsfxC8R474HOxmbgTfa3YSFzk0Gr7R1NZ22I9Tm6IaPfcHCVW4gPzkzdQ8VmuJTn1fVSQj5ZVb%2BU%2FmdG%2BR8E1FfzymHn7QwRnArgkFuiMQ7IUq%2BAH4h7W15xmsXbADXqLOkSXgj1qZP29I4RSCdmQ2ubauCETWRMJaHnb0GOqUB%2FAuFVRNEiZHrk14vgT%2Bs0DI5vsp1v1cGfLaI81TFIcZlPF2iEUF4I06G%2BwSZuHWKaKFw%2FiEAPRPfRUNqMWmXuf8yQhP9Nebo4qwGq9znCkJva9g%2FrPpvP%2Ff%2BigvmlGxIwwq9E0sPDzm0pJgBkwTPOpQj60eBnqJDMEfLNQKkyxPWTUAlkr1LU3dwKfoRW%2FZbjIe8M2sEQB3Be7d5YEnc80QsWZdS&X-Amz-Signature=62a66ade0da26c548914d6d65b9f33fa22cdb25b41961a78f770ecf77d64954a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
