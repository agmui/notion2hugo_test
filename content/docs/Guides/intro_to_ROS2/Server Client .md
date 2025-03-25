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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KENQN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuCyTb9XrKDvheHIunPKKo4RxfrpQHplu255BqXdISzQIhAOAbfCeu%2FQx%2FQ6%2B0H9t%2BCdJbN2YR2mqSt1%2FPInyiIMozKv8DCB0QABoMNjM3NDIzMTgzODA1Igzdoobuo2ryAJHfjxcq3AOk693n2l1se52upk76TGNHpI0dwNeXrxh4bjddIUclxHMR5FXoLAxoYAy0d8MWM3t2BeqclCYpBn01yhPga7IVkNtg%2FQdcbEvw8VC1kh6bkwpw7C3PfH%2BklF%2BCNOHTUb3HfXlZroEoLlDj3BS3F%2FuFzXcz9O1tjf285ej2NXyEiNcsLSvtebLKdgL1%2BPMtWWV7lzWCX5gvp4Uo%2F90VMyoinA6ImaIQnzKNYYsEMDVgu0lFXUbOY4sasajJszbK5KcYn9K6%2BMAa9I5JFkCTxkBhhqGsZycgB9rkCUiiEf4rB9BYtoXMju3rpQpshKusslEqaTjADdRiKHw74zWhTEVeOrLHr%2Bpn3fIXjF3UPr5Wn1OxWOIrsZ9qm5PwSKxV6TqbRMg%2F7%2FHwDOgT%2BRx99uiMDj5OqQB6yqHV8ixC9nod6UNlq7%2BvsqDzj57V%2Fnld8hvIggHgm6t1jPOZas4t0kKwIkRJEpYZs33ZodYuXbPSPUumgbt2WYHjdmDOU7r%2FVWmufVnVD7RAC1Sph3fQCk6BoUYnmPE0rOg%2FuU8ldeZ55%2FadObum8E6oPaG6d1CTzo6jKiDzSSywIWyXWC4g8RIt5EcDmKNccQ%2FXOZjK9fRP4wxwWW6kFlZ6gP27SDCFmIy%2FBjqkAZf%2B6VdOi64YZqeL0WfSp284Pxba5O952WvEgg%2Bc4joOtaYnKxHXH%2BlO%2FAnL67ocHtZmqzwo%2BDrVCvghUYct8ymV15eLL4d%2BI9UNcsgMWhm8x%2FexQOZkAvvW4qQBRN768rYbTwmkKn3pJlBxlxutv70MdwOao70ggyFgkhwIO9NWrpxqtn8P%2FR7AGYyva2XWC6VjiOrovx2fJnggsnnaUNlS53yg&X-Amz-Signature=62979ad90affeca97b24b2ca3bd2a14cd08e8f512c3be2ddaf7ddfe14d8fd3e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KENQN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuCyTb9XrKDvheHIunPKKo4RxfrpQHplu255BqXdISzQIhAOAbfCeu%2FQx%2FQ6%2B0H9t%2BCdJbN2YR2mqSt1%2FPInyiIMozKv8DCB0QABoMNjM3NDIzMTgzODA1Igzdoobuo2ryAJHfjxcq3AOk693n2l1se52upk76TGNHpI0dwNeXrxh4bjddIUclxHMR5FXoLAxoYAy0d8MWM3t2BeqclCYpBn01yhPga7IVkNtg%2FQdcbEvw8VC1kh6bkwpw7C3PfH%2BklF%2BCNOHTUb3HfXlZroEoLlDj3BS3F%2FuFzXcz9O1tjf285ej2NXyEiNcsLSvtebLKdgL1%2BPMtWWV7lzWCX5gvp4Uo%2F90VMyoinA6ImaIQnzKNYYsEMDVgu0lFXUbOY4sasajJszbK5KcYn9K6%2BMAa9I5JFkCTxkBhhqGsZycgB9rkCUiiEf4rB9BYtoXMju3rpQpshKusslEqaTjADdRiKHw74zWhTEVeOrLHr%2Bpn3fIXjF3UPr5Wn1OxWOIrsZ9qm5PwSKxV6TqbRMg%2F7%2FHwDOgT%2BRx99uiMDj5OqQB6yqHV8ixC9nod6UNlq7%2BvsqDzj57V%2Fnld8hvIggHgm6t1jPOZas4t0kKwIkRJEpYZs33ZodYuXbPSPUumgbt2WYHjdmDOU7r%2FVWmufVnVD7RAC1Sph3fQCk6BoUYnmPE0rOg%2FuU8ldeZ55%2FadObum8E6oPaG6d1CTzo6jKiDzSSywIWyXWC4g8RIt5EcDmKNccQ%2FXOZjK9fRP4wxwWW6kFlZ6gP27SDCFmIy%2FBjqkAZf%2B6VdOi64YZqeL0WfSp284Pxba5O952WvEgg%2Bc4joOtaYnKxHXH%2BlO%2FAnL67ocHtZmqzwo%2BDrVCvghUYct8ymV15eLL4d%2BI9UNcsgMWhm8x%2FexQOZkAvvW4qQBRN768rYbTwmkKn3pJlBxlxutv70MdwOao70ggyFgkhwIO9NWrpxqtn8P%2FR7AGYyva2XWC6VjiOrovx2fJnggsnnaUNlS53yg&X-Amz-Signature=0ef764fbda2e8b34713799a2746e8fb584970f1c0cb5da6358407650b05c4900&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KENQN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuCyTb9XrKDvheHIunPKKo4RxfrpQHplu255BqXdISzQIhAOAbfCeu%2FQx%2FQ6%2B0H9t%2BCdJbN2YR2mqSt1%2FPInyiIMozKv8DCB0QABoMNjM3NDIzMTgzODA1Igzdoobuo2ryAJHfjxcq3AOk693n2l1se52upk76TGNHpI0dwNeXrxh4bjddIUclxHMR5FXoLAxoYAy0d8MWM3t2BeqclCYpBn01yhPga7IVkNtg%2FQdcbEvw8VC1kh6bkwpw7C3PfH%2BklF%2BCNOHTUb3HfXlZroEoLlDj3BS3F%2FuFzXcz9O1tjf285ej2NXyEiNcsLSvtebLKdgL1%2BPMtWWV7lzWCX5gvp4Uo%2F90VMyoinA6ImaIQnzKNYYsEMDVgu0lFXUbOY4sasajJszbK5KcYn9K6%2BMAa9I5JFkCTxkBhhqGsZycgB9rkCUiiEf4rB9BYtoXMju3rpQpshKusslEqaTjADdRiKHw74zWhTEVeOrLHr%2Bpn3fIXjF3UPr5Wn1OxWOIrsZ9qm5PwSKxV6TqbRMg%2F7%2FHwDOgT%2BRx99uiMDj5OqQB6yqHV8ixC9nod6UNlq7%2BvsqDzj57V%2Fnld8hvIggHgm6t1jPOZas4t0kKwIkRJEpYZs33ZodYuXbPSPUumgbt2WYHjdmDOU7r%2FVWmufVnVD7RAC1Sph3fQCk6BoUYnmPE0rOg%2FuU8ldeZ55%2FadObum8E6oPaG6d1CTzo6jKiDzSSywIWyXWC4g8RIt5EcDmKNccQ%2FXOZjK9fRP4wxwWW6kFlZ6gP27SDCFmIy%2FBjqkAZf%2B6VdOi64YZqeL0WfSp284Pxba5O952WvEgg%2Bc4joOtaYnKxHXH%2BlO%2FAnL67ocHtZmqzwo%2BDrVCvghUYct8ymV15eLL4d%2BI9UNcsgMWhm8x%2FexQOZkAvvW4qQBRN768rYbTwmkKn3pJlBxlxutv70MdwOao70ggyFgkhwIO9NWrpxqtn8P%2FR7AGYyva2XWC6VjiOrovx2fJnggsnnaUNlS53yg&X-Amz-Signature=746212b4d4e362540eb2a7676835a02ae8621667f4eeb1f8ee2a11e633a31396&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KENQN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuCyTb9XrKDvheHIunPKKo4RxfrpQHplu255BqXdISzQIhAOAbfCeu%2FQx%2FQ6%2B0H9t%2BCdJbN2YR2mqSt1%2FPInyiIMozKv8DCB0QABoMNjM3NDIzMTgzODA1Igzdoobuo2ryAJHfjxcq3AOk693n2l1se52upk76TGNHpI0dwNeXrxh4bjddIUclxHMR5FXoLAxoYAy0d8MWM3t2BeqclCYpBn01yhPga7IVkNtg%2FQdcbEvw8VC1kh6bkwpw7C3PfH%2BklF%2BCNOHTUb3HfXlZroEoLlDj3BS3F%2FuFzXcz9O1tjf285ej2NXyEiNcsLSvtebLKdgL1%2BPMtWWV7lzWCX5gvp4Uo%2F90VMyoinA6ImaIQnzKNYYsEMDVgu0lFXUbOY4sasajJszbK5KcYn9K6%2BMAa9I5JFkCTxkBhhqGsZycgB9rkCUiiEf4rB9BYtoXMju3rpQpshKusslEqaTjADdRiKHw74zWhTEVeOrLHr%2Bpn3fIXjF3UPr5Wn1OxWOIrsZ9qm5PwSKxV6TqbRMg%2F7%2FHwDOgT%2BRx99uiMDj5OqQB6yqHV8ixC9nod6UNlq7%2BvsqDzj57V%2Fnld8hvIggHgm6t1jPOZas4t0kKwIkRJEpYZs33ZodYuXbPSPUumgbt2WYHjdmDOU7r%2FVWmufVnVD7RAC1Sph3fQCk6BoUYnmPE0rOg%2FuU8ldeZ55%2FadObum8E6oPaG6d1CTzo6jKiDzSSywIWyXWC4g8RIt5EcDmKNccQ%2FXOZjK9fRP4wxwWW6kFlZ6gP27SDCFmIy%2FBjqkAZf%2B6VdOi64YZqeL0WfSp284Pxba5O952WvEgg%2Bc4joOtaYnKxHXH%2BlO%2FAnL67ocHtZmqzwo%2BDrVCvghUYct8ymV15eLL4d%2BI9UNcsgMWhm8x%2FexQOZkAvvW4qQBRN768rYbTwmkKn3pJlBxlxutv70MdwOao70ggyFgkhwIO9NWrpxqtn8P%2FR7AGYyva2XWC6VjiOrovx2fJnggsnnaUNlS53yg&X-Amz-Signature=cc48e2c02e5ac3a917cc23e8d2529be7253a368ab1345ab3760319793605db57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KENQN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuCyTb9XrKDvheHIunPKKo4RxfrpQHplu255BqXdISzQIhAOAbfCeu%2FQx%2FQ6%2B0H9t%2BCdJbN2YR2mqSt1%2FPInyiIMozKv8DCB0QABoMNjM3NDIzMTgzODA1Igzdoobuo2ryAJHfjxcq3AOk693n2l1se52upk76TGNHpI0dwNeXrxh4bjddIUclxHMR5FXoLAxoYAy0d8MWM3t2BeqclCYpBn01yhPga7IVkNtg%2FQdcbEvw8VC1kh6bkwpw7C3PfH%2BklF%2BCNOHTUb3HfXlZroEoLlDj3BS3F%2FuFzXcz9O1tjf285ej2NXyEiNcsLSvtebLKdgL1%2BPMtWWV7lzWCX5gvp4Uo%2F90VMyoinA6ImaIQnzKNYYsEMDVgu0lFXUbOY4sasajJszbK5KcYn9K6%2BMAa9I5JFkCTxkBhhqGsZycgB9rkCUiiEf4rB9BYtoXMju3rpQpshKusslEqaTjADdRiKHw74zWhTEVeOrLHr%2Bpn3fIXjF3UPr5Wn1OxWOIrsZ9qm5PwSKxV6TqbRMg%2F7%2FHwDOgT%2BRx99uiMDj5OqQB6yqHV8ixC9nod6UNlq7%2BvsqDzj57V%2Fnld8hvIggHgm6t1jPOZas4t0kKwIkRJEpYZs33ZodYuXbPSPUumgbt2WYHjdmDOU7r%2FVWmufVnVD7RAC1Sph3fQCk6BoUYnmPE0rOg%2FuU8ldeZ55%2FadObum8E6oPaG6d1CTzo6jKiDzSSywIWyXWC4g8RIt5EcDmKNccQ%2FXOZjK9fRP4wxwWW6kFlZ6gP27SDCFmIy%2FBjqkAZf%2B6VdOi64YZqeL0WfSp284Pxba5O952WvEgg%2Bc4joOtaYnKxHXH%2BlO%2FAnL67ocHtZmqzwo%2BDrVCvghUYct8ymV15eLL4d%2BI9UNcsgMWhm8x%2FexQOZkAvvW4qQBRN768rYbTwmkKn3pJlBxlxutv70MdwOao70ggyFgkhwIO9NWrpxqtn8P%2FR7AGYyva2XWC6VjiOrovx2fJnggsnnaUNlS53yg&X-Amz-Signature=9f9a8f7c379abc34d339fe975c3fa562c0abe20046a68ba0a91f223658824538&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
