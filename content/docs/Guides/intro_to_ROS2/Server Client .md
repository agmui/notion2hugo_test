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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55PD2KW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHaeHyukO%2BIxulvCMrl5xauHWRR1CF9a8SGd6QN4xOtKAiA0qyQNAk5c0aBR%2BDZBZzP7V3nS08Etcx9NVSp%2Fx%2BaKZSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BSwnCrmhyhYWJvvFKtwD9TtSRFhtyDnfP1KFc%2BR31b31RaPdWzQthx9K168YGNeLilDXby%2FVyHbtkilQ38A906oHEkiHG%2BiK433T4Cc9qR0puC9Iz1Hh8ya6j%2BqAEgCz13Cohim85eKp6Kk%2Fjywc%2FOVEdbm0lIfRpLz1INrkYhWl7c%2BHKjkbsyTMdJzHBEpHipBgIhUFCqZ4euZJ1eyYZwKqnOhLHSYm1A4TjegMJOeAFkS19Zi4oMGWWMsSYsEJ0EK%2BDEBchll5UgdGCJU0ZCppm7fzRDbFeOp055IcrZq3X%2FLR%2BomOlc1kAjeZe44dTiD%2FvUjK%2BvB09KbNOSz5wFXSqGWZeluA%2BAYUiQD5kEtDizI4IWnrAsLm9w8BNdEfDUTxgm%2BUxPWpWfNyXEwfq5clnbHVHHzfPbxfppfpSbYEXJjoLlGqQ1Ku8%2FExbPEXt3mpfEqBL5hYYvlJ%2FAK2t7sWT9UiX64e9NydDLX5aBoRdhRQaeXtgNQ0o1pnauSO5EEogeC07KN5oNTS%2BgJTXGESYOBlCbZpMcadkwnbF5k18IMJhjSnwlX8Fuy%2B6NA0zBN8IxcqfjYJBZE68DU89kuHvJC0o69E0TsE%2FppCI5Apv%2B1qj1d7ruFiUU%2Fd9pgxyELaVQA%2FTFlEYlswwb%2FCwQY6pgGlbnQruG2ORLoMYp7CkAnOvJq0LU%2BVjWPIZoHPXA%2BlK79k8bl4xggKKT0HNrn7JbWG8l79623xb%2FlrF5JHrlNgYf2Z0BKj9A%2B6DGMESB6dUt2xXOuJotdBceA6%2FKiGraoOQ57qQ6UakEfTk4IKpyebyenbmtrkaFLNmeRtCvC%2BEj%2BSXQImiQEEr1CiYx6yJnNmqLvkaDeCEzKDTO9v5hKppWmfLbk4&X-Amz-Signature=231171d9b5ad12c85bf42a9a015363d28e7ed7753f9b664a2345229340090e45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55PD2KW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHaeHyukO%2BIxulvCMrl5xauHWRR1CF9a8SGd6QN4xOtKAiA0qyQNAk5c0aBR%2BDZBZzP7V3nS08Etcx9NVSp%2Fx%2BaKZSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BSwnCrmhyhYWJvvFKtwD9TtSRFhtyDnfP1KFc%2BR31b31RaPdWzQthx9K168YGNeLilDXby%2FVyHbtkilQ38A906oHEkiHG%2BiK433T4Cc9qR0puC9Iz1Hh8ya6j%2BqAEgCz13Cohim85eKp6Kk%2Fjywc%2FOVEdbm0lIfRpLz1INrkYhWl7c%2BHKjkbsyTMdJzHBEpHipBgIhUFCqZ4euZJ1eyYZwKqnOhLHSYm1A4TjegMJOeAFkS19Zi4oMGWWMsSYsEJ0EK%2BDEBchll5UgdGCJU0ZCppm7fzRDbFeOp055IcrZq3X%2FLR%2BomOlc1kAjeZe44dTiD%2FvUjK%2BvB09KbNOSz5wFXSqGWZeluA%2BAYUiQD5kEtDizI4IWnrAsLm9w8BNdEfDUTxgm%2BUxPWpWfNyXEwfq5clnbHVHHzfPbxfppfpSbYEXJjoLlGqQ1Ku8%2FExbPEXt3mpfEqBL5hYYvlJ%2FAK2t7sWT9UiX64e9NydDLX5aBoRdhRQaeXtgNQ0o1pnauSO5EEogeC07KN5oNTS%2BgJTXGESYOBlCbZpMcadkwnbF5k18IMJhjSnwlX8Fuy%2B6NA0zBN8IxcqfjYJBZE68DU89kuHvJC0o69E0TsE%2FppCI5Apv%2B1qj1d7ruFiUU%2Fd9pgxyELaVQA%2FTFlEYlswwb%2FCwQY6pgGlbnQruG2ORLoMYp7CkAnOvJq0LU%2BVjWPIZoHPXA%2BlK79k8bl4xggKKT0HNrn7JbWG8l79623xb%2FlrF5JHrlNgYf2Z0BKj9A%2B6DGMESB6dUt2xXOuJotdBceA6%2FKiGraoOQ57qQ6UakEfTk4IKpyebyenbmtrkaFLNmeRtCvC%2BEj%2BSXQImiQEEr1CiYx6yJnNmqLvkaDeCEzKDTO9v5hKppWmfLbk4&X-Amz-Signature=bb558cb9c8b3e282e3106511d57bd09ddddb3b754b8b054d2dbb37bcd4fad50e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55PD2KW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHaeHyukO%2BIxulvCMrl5xauHWRR1CF9a8SGd6QN4xOtKAiA0qyQNAk5c0aBR%2BDZBZzP7V3nS08Etcx9NVSp%2Fx%2BaKZSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BSwnCrmhyhYWJvvFKtwD9TtSRFhtyDnfP1KFc%2BR31b31RaPdWzQthx9K168YGNeLilDXby%2FVyHbtkilQ38A906oHEkiHG%2BiK433T4Cc9qR0puC9Iz1Hh8ya6j%2BqAEgCz13Cohim85eKp6Kk%2Fjywc%2FOVEdbm0lIfRpLz1INrkYhWl7c%2BHKjkbsyTMdJzHBEpHipBgIhUFCqZ4euZJ1eyYZwKqnOhLHSYm1A4TjegMJOeAFkS19Zi4oMGWWMsSYsEJ0EK%2BDEBchll5UgdGCJU0ZCppm7fzRDbFeOp055IcrZq3X%2FLR%2BomOlc1kAjeZe44dTiD%2FvUjK%2BvB09KbNOSz5wFXSqGWZeluA%2BAYUiQD5kEtDizI4IWnrAsLm9w8BNdEfDUTxgm%2BUxPWpWfNyXEwfq5clnbHVHHzfPbxfppfpSbYEXJjoLlGqQ1Ku8%2FExbPEXt3mpfEqBL5hYYvlJ%2FAK2t7sWT9UiX64e9NydDLX5aBoRdhRQaeXtgNQ0o1pnauSO5EEogeC07KN5oNTS%2BgJTXGESYOBlCbZpMcadkwnbF5k18IMJhjSnwlX8Fuy%2B6NA0zBN8IxcqfjYJBZE68DU89kuHvJC0o69E0TsE%2FppCI5Apv%2B1qj1d7ruFiUU%2Fd9pgxyELaVQA%2FTFlEYlswwb%2FCwQY6pgGlbnQruG2ORLoMYp7CkAnOvJq0LU%2BVjWPIZoHPXA%2BlK79k8bl4xggKKT0HNrn7JbWG8l79623xb%2FlrF5JHrlNgYf2Z0BKj9A%2B6DGMESB6dUt2xXOuJotdBceA6%2FKiGraoOQ57qQ6UakEfTk4IKpyebyenbmtrkaFLNmeRtCvC%2BEj%2BSXQImiQEEr1CiYx6yJnNmqLvkaDeCEzKDTO9v5hKppWmfLbk4&X-Amz-Signature=0b6ccd7a31a5c4a16fca77d68b4db554871386ba1ddcfe59ea58df6cc161f486&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55PD2KW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHaeHyukO%2BIxulvCMrl5xauHWRR1CF9a8SGd6QN4xOtKAiA0qyQNAk5c0aBR%2BDZBZzP7V3nS08Etcx9NVSp%2Fx%2BaKZSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BSwnCrmhyhYWJvvFKtwD9TtSRFhtyDnfP1KFc%2BR31b31RaPdWzQthx9K168YGNeLilDXby%2FVyHbtkilQ38A906oHEkiHG%2BiK433T4Cc9qR0puC9Iz1Hh8ya6j%2BqAEgCz13Cohim85eKp6Kk%2Fjywc%2FOVEdbm0lIfRpLz1INrkYhWl7c%2BHKjkbsyTMdJzHBEpHipBgIhUFCqZ4euZJ1eyYZwKqnOhLHSYm1A4TjegMJOeAFkS19Zi4oMGWWMsSYsEJ0EK%2BDEBchll5UgdGCJU0ZCppm7fzRDbFeOp055IcrZq3X%2FLR%2BomOlc1kAjeZe44dTiD%2FvUjK%2BvB09KbNOSz5wFXSqGWZeluA%2BAYUiQD5kEtDizI4IWnrAsLm9w8BNdEfDUTxgm%2BUxPWpWfNyXEwfq5clnbHVHHzfPbxfppfpSbYEXJjoLlGqQ1Ku8%2FExbPEXt3mpfEqBL5hYYvlJ%2FAK2t7sWT9UiX64e9NydDLX5aBoRdhRQaeXtgNQ0o1pnauSO5EEogeC07KN5oNTS%2BgJTXGESYOBlCbZpMcadkwnbF5k18IMJhjSnwlX8Fuy%2B6NA0zBN8IxcqfjYJBZE68DU89kuHvJC0o69E0TsE%2FppCI5Apv%2B1qj1d7ruFiUU%2Fd9pgxyELaVQA%2FTFlEYlswwb%2FCwQY6pgGlbnQruG2ORLoMYp7CkAnOvJq0LU%2BVjWPIZoHPXA%2BlK79k8bl4xggKKT0HNrn7JbWG8l79623xb%2FlrF5JHrlNgYf2Z0BKj9A%2B6DGMESB6dUt2xXOuJotdBceA6%2FKiGraoOQ57qQ6UakEfTk4IKpyebyenbmtrkaFLNmeRtCvC%2BEj%2BSXQImiQEEr1CiYx6yJnNmqLvkaDeCEzKDTO9v5hKppWmfLbk4&X-Amz-Signature=a8359c5175e29e1eadc2468d36103749782cdd5cb9703987e2add19b9b554115&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55PD2KW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHaeHyukO%2BIxulvCMrl5xauHWRR1CF9a8SGd6QN4xOtKAiA0qyQNAk5c0aBR%2BDZBZzP7V3nS08Etcx9NVSp%2Fx%2BaKZSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BSwnCrmhyhYWJvvFKtwD9TtSRFhtyDnfP1KFc%2BR31b31RaPdWzQthx9K168YGNeLilDXby%2FVyHbtkilQ38A906oHEkiHG%2BiK433T4Cc9qR0puC9Iz1Hh8ya6j%2BqAEgCz13Cohim85eKp6Kk%2Fjywc%2FOVEdbm0lIfRpLz1INrkYhWl7c%2BHKjkbsyTMdJzHBEpHipBgIhUFCqZ4euZJ1eyYZwKqnOhLHSYm1A4TjegMJOeAFkS19Zi4oMGWWMsSYsEJ0EK%2BDEBchll5UgdGCJU0ZCppm7fzRDbFeOp055IcrZq3X%2FLR%2BomOlc1kAjeZe44dTiD%2FvUjK%2BvB09KbNOSz5wFXSqGWZeluA%2BAYUiQD5kEtDizI4IWnrAsLm9w8BNdEfDUTxgm%2BUxPWpWfNyXEwfq5clnbHVHHzfPbxfppfpSbYEXJjoLlGqQ1Ku8%2FExbPEXt3mpfEqBL5hYYvlJ%2FAK2t7sWT9UiX64e9NydDLX5aBoRdhRQaeXtgNQ0o1pnauSO5EEogeC07KN5oNTS%2BgJTXGESYOBlCbZpMcadkwnbF5k18IMJhjSnwlX8Fuy%2B6NA0zBN8IxcqfjYJBZE68DU89kuHvJC0o69E0TsE%2FppCI5Apv%2B1qj1d7ruFiUU%2Fd9pgxyELaVQA%2FTFlEYlswwb%2FCwQY6pgGlbnQruG2ORLoMYp7CkAnOvJq0LU%2BVjWPIZoHPXA%2BlK79k8bl4xggKKT0HNrn7JbWG8l79623xb%2FlrF5JHrlNgYf2Z0BKj9A%2B6DGMESB6dUt2xXOuJotdBceA6%2FKiGraoOQ57qQ6UakEfTk4IKpyebyenbmtrkaFLNmeRtCvC%2BEj%2BSXQImiQEEr1CiYx6yJnNmqLvkaDeCEzKDTO9v5hKppWmfLbk4&X-Amz-Signature=85b08c0cdef79aca4212cdffb45cbc6645a42af1fe296830e18bcd71c4d65e83&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
