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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYAWFSV%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCID90xnE2%2F%2BCnePcd6EVlkF4OdGWZSsFjTrYkWKtF5HdOAiEA3xgecdOC8iwX%2B%2BrcX2glnu%2BT8Hppcb3rleEv4ysvJ6cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWg94NZt2OTrPgchCrcA6aMe3v1irf4LYkSi4L7Th%2B4vzzo3dIysusx%2FuDDbkar8shbJgK8KadQktI504cIOxSSfyeIvUWnkN1m3N8ICB1z82N0MFlMllZZhGC9nzTKLxE0IRFJc0pCdoB9vOULE35czSYXzPig9gqJSK8ArSvwrUY2nvrZIrt0uLKcWfz33bHybSQHhUpYQ%2FNXvvTiMtJyM70F1b02oAaJbfgqgmU2C2gPbJ4PfyEq%2F0Sb1YRxINDJTc8A%2F09S%2FFZ49s8y4pcc6oZnB%2BrXfvd68DSLglSBTpOI%2Bivi7DjY4VzxfEWEwR077%2BGAgbkSiMsbI99o0E6gEP6zJmz32Bibquwj%2BtAoWqsJSbRUIuezvK8UtToBwI1JudtBoNOmwjUpC%2FYlPV8b4xt%2BHoCZ9AmMMAWXIc1QZ26KqVMYpcO8ruCDMiqJXe1QS8WmaXi8WgoOWutP1jWVIS%2FZZhEZqb6NYG4e9N%2FWtY6496Lki%2Bw8e0vhs6qJzoRYBhMKABnvCkslFSBuFVZNZZezCSqn3bAJAsRwYzDEi5b1oPbkt2jUODQxJUEiJ0gWtCNDpPa0hwr92C36n%2FBDymBpmpLVMZ%2BOeX9Bc4gSXH3CsqQTuu7IypGG4SP7WddujlpvV95L0fmlMMqHgMwGOqUBnpTWjSZzAJF8tPmpMFRaiyBO%2Buums1aiETcskhbIpAF487RqVs8P8Nx4TosWL%2B3WS5JGpxxlyzklMVzK%2FBj1ULYDHq%2BEW3Vd3YI6j7Y4wBEmpWBScYOayQPPveODq2fDcn6B%2BHDF1AgXP8o0iKpf0y7IxvtvwTpgyJVh7aRqs1qjiANuPDolQCtWxhe1DnFAeddr36j2KrZMwoFgelaWL%2Bhte5ho&X-Amz-Signature=e9b53e682f3fca5e905655fb3b8ce8b0c8b0c1d46ea93c2666e2f0fa7ac4d55d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYAWFSV%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCID90xnE2%2F%2BCnePcd6EVlkF4OdGWZSsFjTrYkWKtF5HdOAiEA3xgecdOC8iwX%2B%2BrcX2glnu%2BT8Hppcb3rleEv4ysvJ6cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWg94NZt2OTrPgchCrcA6aMe3v1irf4LYkSi4L7Th%2B4vzzo3dIysusx%2FuDDbkar8shbJgK8KadQktI504cIOxSSfyeIvUWnkN1m3N8ICB1z82N0MFlMllZZhGC9nzTKLxE0IRFJc0pCdoB9vOULE35czSYXzPig9gqJSK8ArSvwrUY2nvrZIrt0uLKcWfz33bHybSQHhUpYQ%2FNXvvTiMtJyM70F1b02oAaJbfgqgmU2C2gPbJ4PfyEq%2F0Sb1YRxINDJTc8A%2F09S%2FFZ49s8y4pcc6oZnB%2BrXfvd68DSLglSBTpOI%2Bivi7DjY4VzxfEWEwR077%2BGAgbkSiMsbI99o0E6gEP6zJmz32Bibquwj%2BtAoWqsJSbRUIuezvK8UtToBwI1JudtBoNOmwjUpC%2FYlPV8b4xt%2BHoCZ9AmMMAWXIc1QZ26KqVMYpcO8ruCDMiqJXe1QS8WmaXi8WgoOWutP1jWVIS%2FZZhEZqb6NYG4e9N%2FWtY6496Lki%2Bw8e0vhs6qJzoRYBhMKABnvCkslFSBuFVZNZZezCSqn3bAJAsRwYzDEi5b1oPbkt2jUODQxJUEiJ0gWtCNDpPa0hwr92C36n%2FBDymBpmpLVMZ%2BOeX9Bc4gSXH3CsqQTuu7IypGG4SP7WddujlpvV95L0fmlMMqHgMwGOqUBnpTWjSZzAJF8tPmpMFRaiyBO%2Buums1aiETcskhbIpAF487RqVs8P8Nx4TosWL%2B3WS5JGpxxlyzklMVzK%2FBj1ULYDHq%2BEW3Vd3YI6j7Y4wBEmpWBScYOayQPPveODq2fDcn6B%2BHDF1AgXP8o0iKpf0y7IxvtvwTpgyJVh7aRqs1qjiANuPDolQCtWxhe1DnFAeddr36j2KrZMwoFgelaWL%2Bhte5ho&X-Amz-Signature=8215d9821db7d072f3e9f015ea654e9ada265e82d0c3ef02fb066020f38831bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYAWFSV%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCID90xnE2%2F%2BCnePcd6EVlkF4OdGWZSsFjTrYkWKtF5HdOAiEA3xgecdOC8iwX%2B%2BrcX2glnu%2BT8Hppcb3rleEv4ysvJ6cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWg94NZt2OTrPgchCrcA6aMe3v1irf4LYkSi4L7Th%2B4vzzo3dIysusx%2FuDDbkar8shbJgK8KadQktI504cIOxSSfyeIvUWnkN1m3N8ICB1z82N0MFlMllZZhGC9nzTKLxE0IRFJc0pCdoB9vOULE35czSYXzPig9gqJSK8ArSvwrUY2nvrZIrt0uLKcWfz33bHybSQHhUpYQ%2FNXvvTiMtJyM70F1b02oAaJbfgqgmU2C2gPbJ4PfyEq%2F0Sb1YRxINDJTc8A%2F09S%2FFZ49s8y4pcc6oZnB%2BrXfvd68DSLglSBTpOI%2Bivi7DjY4VzxfEWEwR077%2BGAgbkSiMsbI99o0E6gEP6zJmz32Bibquwj%2BtAoWqsJSbRUIuezvK8UtToBwI1JudtBoNOmwjUpC%2FYlPV8b4xt%2BHoCZ9AmMMAWXIc1QZ26KqVMYpcO8ruCDMiqJXe1QS8WmaXi8WgoOWutP1jWVIS%2FZZhEZqb6NYG4e9N%2FWtY6496Lki%2Bw8e0vhs6qJzoRYBhMKABnvCkslFSBuFVZNZZezCSqn3bAJAsRwYzDEi5b1oPbkt2jUODQxJUEiJ0gWtCNDpPa0hwr92C36n%2FBDymBpmpLVMZ%2BOeX9Bc4gSXH3CsqQTuu7IypGG4SP7WddujlpvV95L0fmlMMqHgMwGOqUBnpTWjSZzAJF8tPmpMFRaiyBO%2Buums1aiETcskhbIpAF487RqVs8P8Nx4TosWL%2B3WS5JGpxxlyzklMVzK%2FBj1ULYDHq%2BEW3Vd3YI6j7Y4wBEmpWBScYOayQPPveODq2fDcn6B%2BHDF1AgXP8o0iKpf0y7IxvtvwTpgyJVh7aRqs1qjiANuPDolQCtWxhe1DnFAeddr36j2KrZMwoFgelaWL%2Bhte5ho&X-Amz-Signature=8f4fbbd6947d86ce62d8b499b7eb81a26d08d93d94f06a280c28c80a47d94de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYAWFSV%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCID90xnE2%2F%2BCnePcd6EVlkF4OdGWZSsFjTrYkWKtF5HdOAiEA3xgecdOC8iwX%2B%2BrcX2glnu%2BT8Hppcb3rleEv4ysvJ6cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWg94NZt2OTrPgchCrcA6aMe3v1irf4LYkSi4L7Th%2B4vzzo3dIysusx%2FuDDbkar8shbJgK8KadQktI504cIOxSSfyeIvUWnkN1m3N8ICB1z82N0MFlMllZZhGC9nzTKLxE0IRFJc0pCdoB9vOULE35czSYXzPig9gqJSK8ArSvwrUY2nvrZIrt0uLKcWfz33bHybSQHhUpYQ%2FNXvvTiMtJyM70F1b02oAaJbfgqgmU2C2gPbJ4PfyEq%2F0Sb1YRxINDJTc8A%2F09S%2FFZ49s8y4pcc6oZnB%2BrXfvd68DSLglSBTpOI%2Bivi7DjY4VzxfEWEwR077%2BGAgbkSiMsbI99o0E6gEP6zJmz32Bibquwj%2BtAoWqsJSbRUIuezvK8UtToBwI1JudtBoNOmwjUpC%2FYlPV8b4xt%2BHoCZ9AmMMAWXIc1QZ26KqVMYpcO8ruCDMiqJXe1QS8WmaXi8WgoOWutP1jWVIS%2FZZhEZqb6NYG4e9N%2FWtY6496Lki%2Bw8e0vhs6qJzoRYBhMKABnvCkslFSBuFVZNZZezCSqn3bAJAsRwYzDEi5b1oPbkt2jUODQxJUEiJ0gWtCNDpPa0hwr92C36n%2FBDymBpmpLVMZ%2BOeX9Bc4gSXH3CsqQTuu7IypGG4SP7WddujlpvV95L0fmlMMqHgMwGOqUBnpTWjSZzAJF8tPmpMFRaiyBO%2Buums1aiETcskhbIpAF487RqVs8P8Nx4TosWL%2B3WS5JGpxxlyzklMVzK%2FBj1ULYDHq%2BEW3Vd3YI6j7Y4wBEmpWBScYOayQPPveODq2fDcn6B%2BHDF1AgXP8o0iKpf0y7IxvtvwTpgyJVh7aRqs1qjiANuPDolQCtWxhe1DnFAeddr36j2KrZMwoFgelaWL%2Bhte5ho&X-Amz-Signature=1eca7daffce755ffc3fcac87d334bcb9ccf5a1e38d1d44c8add865070ab4a19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYAWFSV%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCID90xnE2%2F%2BCnePcd6EVlkF4OdGWZSsFjTrYkWKtF5HdOAiEA3xgecdOC8iwX%2B%2BrcX2glnu%2BT8Hppcb3rleEv4ysvJ6cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWg94NZt2OTrPgchCrcA6aMe3v1irf4LYkSi4L7Th%2B4vzzo3dIysusx%2FuDDbkar8shbJgK8KadQktI504cIOxSSfyeIvUWnkN1m3N8ICB1z82N0MFlMllZZhGC9nzTKLxE0IRFJc0pCdoB9vOULE35czSYXzPig9gqJSK8ArSvwrUY2nvrZIrt0uLKcWfz33bHybSQHhUpYQ%2FNXvvTiMtJyM70F1b02oAaJbfgqgmU2C2gPbJ4PfyEq%2F0Sb1YRxINDJTc8A%2F09S%2FFZ49s8y4pcc6oZnB%2BrXfvd68DSLglSBTpOI%2Bivi7DjY4VzxfEWEwR077%2BGAgbkSiMsbI99o0E6gEP6zJmz32Bibquwj%2BtAoWqsJSbRUIuezvK8UtToBwI1JudtBoNOmwjUpC%2FYlPV8b4xt%2BHoCZ9AmMMAWXIc1QZ26KqVMYpcO8ruCDMiqJXe1QS8WmaXi8WgoOWutP1jWVIS%2FZZhEZqb6NYG4e9N%2FWtY6496Lki%2Bw8e0vhs6qJzoRYBhMKABnvCkslFSBuFVZNZZezCSqn3bAJAsRwYzDEi5b1oPbkt2jUODQxJUEiJ0gWtCNDpPa0hwr92C36n%2FBDymBpmpLVMZ%2BOeX9Bc4gSXH3CsqQTuu7IypGG4SP7WddujlpvV95L0fmlMMqHgMwGOqUBnpTWjSZzAJF8tPmpMFRaiyBO%2Buums1aiETcskhbIpAF487RqVs8P8Nx4TosWL%2B3WS5JGpxxlyzklMVzK%2FBj1ULYDHq%2BEW3Vd3YI6j7Y4wBEmpWBScYOayQPPveODq2fDcn6B%2BHDF1AgXP8o0iKpf0y7IxvtvwTpgyJVh7aRqs1qjiANuPDolQCtWxhe1DnFAeddr36j2KrZMwoFgelaWL%2Bhte5ho&X-Amz-Signature=a720485e3e4f34ba6aa2d0fc2e57966bbe1d77981ebb270c24f8a1328c75a393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
