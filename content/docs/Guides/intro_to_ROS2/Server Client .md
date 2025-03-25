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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNMNCHY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BFL3F8jejNFyGrRIx1jbOl5LRU6R4BKldi0lahvTRRAiEAgruBAytwaejKdj3%2FgWd8yPTZxX1fjXhtp5dhMC%2Fuzb0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBScmuO42Mh0Ruzx8ircA05AxyFb4To6yphbk1%2FkCtCO8CYlyyX9jh0HdgKIyFVjMB3wNOwuc9UZ11gB7KetQUIbyxkcIEghwD%2Brk4EX03BcG48NuVtOGw3bw3OwovZHG204r2ZRxhw%2Fr6pL%2BLdyApaUfwf5eJt4u2UaZBn35zsC564lNd9bzBd7XNOAFEPuDgIRcnSvMPYi0YmsvT%2B5c78%2Bkc1rS6hyFaXAI5c96N5sAp6VGkwVyI0Oy2gk0AYYllUHDdvTximGosZ0rYpxAjqhpLjrppeHWe8Sxjt2PIuoAzV5zZav0pdK7SX8lOOVlO8UG%2FIb3hf3D2OkFM8X92TmYeff0JN1yJQ2ts8H63btcbAJaKRNaaTOOp%2B1lrPj5yDH02%2BmBizgPV%2BkE1CqijdXBt201bbadNigYiWx5a%2Bkz3HaiaFGtGAa1pFPY%2Fek%2FKE0lrlOkNw5PJwMONB5K%2FG3Jz8lsRDFeoYIRLU%2Fq%2F1jGNvDn2%2FfWhfQolRgweog9DMgZOoBqVExl7xyahEeX78VErjYO74Oq4zx7f9v99rhdeMP5HNahBzyaJH0Z%2Ba6yPJsVLo4jCEy89TVVenmTI2smZn6U73g59JOjd6WORyWVGnPjbyGs8IoCP5ELeNgsvL%2Bszq1NLMR5dZYMKWvib8GOqUBRA8nnugc07joMF0oliy8%2FV1MIPbfkF3zu7qPxjZ7heOOkrQuLvOaZ691vOslYVNe8tx2QUy0IhIYALfEz40bHWlAxpEAu77Q0AbMou%2BLOQJt%2FNI%2B1cnN9jy4DVwabol2kfp%2FWW%2BI5zwfwTMXDha65r07%2B7jPNUebXQLv9UKZDlWaawsF359cwBj8ra%2Fwh0dYUc%2FSM8UJPdHWo%2BhlHCjR%2BHjtiEIg&X-Amz-Signature=239de3257922b80b8fc482e0a483e90f811a8025055efd2eb2a2517658f584d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNMNCHY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BFL3F8jejNFyGrRIx1jbOl5LRU6R4BKldi0lahvTRRAiEAgruBAytwaejKdj3%2FgWd8yPTZxX1fjXhtp5dhMC%2Fuzb0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBScmuO42Mh0Ruzx8ircA05AxyFb4To6yphbk1%2FkCtCO8CYlyyX9jh0HdgKIyFVjMB3wNOwuc9UZ11gB7KetQUIbyxkcIEghwD%2Brk4EX03BcG48NuVtOGw3bw3OwovZHG204r2ZRxhw%2Fr6pL%2BLdyApaUfwf5eJt4u2UaZBn35zsC564lNd9bzBd7XNOAFEPuDgIRcnSvMPYi0YmsvT%2B5c78%2Bkc1rS6hyFaXAI5c96N5sAp6VGkwVyI0Oy2gk0AYYllUHDdvTximGosZ0rYpxAjqhpLjrppeHWe8Sxjt2PIuoAzV5zZav0pdK7SX8lOOVlO8UG%2FIb3hf3D2OkFM8X92TmYeff0JN1yJQ2ts8H63btcbAJaKRNaaTOOp%2B1lrPj5yDH02%2BmBizgPV%2BkE1CqijdXBt201bbadNigYiWx5a%2Bkz3HaiaFGtGAa1pFPY%2Fek%2FKE0lrlOkNw5PJwMONB5K%2FG3Jz8lsRDFeoYIRLU%2Fq%2F1jGNvDn2%2FfWhfQolRgweog9DMgZOoBqVExl7xyahEeX78VErjYO74Oq4zx7f9v99rhdeMP5HNahBzyaJH0Z%2Ba6yPJsVLo4jCEy89TVVenmTI2smZn6U73g59JOjd6WORyWVGnPjbyGs8IoCP5ELeNgsvL%2Bszq1NLMR5dZYMKWvib8GOqUBRA8nnugc07joMF0oliy8%2FV1MIPbfkF3zu7qPxjZ7heOOkrQuLvOaZ691vOslYVNe8tx2QUy0IhIYALfEz40bHWlAxpEAu77Q0AbMou%2BLOQJt%2FNI%2B1cnN9jy4DVwabol2kfp%2FWW%2BI5zwfwTMXDha65r07%2B7jPNUebXQLv9UKZDlWaawsF359cwBj8ra%2Fwh0dYUc%2FSM8UJPdHWo%2BhlHCjR%2BHjtiEIg&X-Amz-Signature=4646fd74fe2ed97aa5e61c19bcb1a9ba8c3c9e26a395eafa4c6b751ca3e114ce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNMNCHY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BFL3F8jejNFyGrRIx1jbOl5LRU6R4BKldi0lahvTRRAiEAgruBAytwaejKdj3%2FgWd8yPTZxX1fjXhtp5dhMC%2Fuzb0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBScmuO42Mh0Ruzx8ircA05AxyFb4To6yphbk1%2FkCtCO8CYlyyX9jh0HdgKIyFVjMB3wNOwuc9UZ11gB7KetQUIbyxkcIEghwD%2Brk4EX03BcG48NuVtOGw3bw3OwovZHG204r2ZRxhw%2Fr6pL%2BLdyApaUfwf5eJt4u2UaZBn35zsC564lNd9bzBd7XNOAFEPuDgIRcnSvMPYi0YmsvT%2B5c78%2Bkc1rS6hyFaXAI5c96N5sAp6VGkwVyI0Oy2gk0AYYllUHDdvTximGosZ0rYpxAjqhpLjrppeHWe8Sxjt2PIuoAzV5zZav0pdK7SX8lOOVlO8UG%2FIb3hf3D2OkFM8X92TmYeff0JN1yJQ2ts8H63btcbAJaKRNaaTOOp%2B1lrPj5yDH02%2BmBizgPV%2BkE1CqijdXBt201bbadNigYiWx5a%2Bkz3HaiaFGtGAa1pFPY%2Fek%2FKE0lrlOkNw5PJwMONB5K%2FG3Jz8lsRDFeoYIRLU%2Fq%2F1jGNvDn2%2FfWhfQolRgweog9DMgZOoBqVExl7xyahEeX78VErjYO74Oq4zx7f9v99rhdeMP5HNahBzyaJH0Z%2Ba6yPJsVLo4jCEy89TVVenmTI2smZn6U73g59JOjd6WORyWVGnPjbyGs8IoCP5ELeNgsvL%2Bszq1NLMR5dZYMKWvib8GOqUBRA8nnugc07joMF0oliy8%2FV1MIPbfkF3zu7qPxjZ7heOOkrQuLvOaZ691vOslYVNe8tx2QUy0IhIYALfEz40bHWlAxpEAu77Q0AbMou%2BLOQJt%2FNI%2B1cnN9jy4DVwabol2kfp%2FWW%2BI5zwfwTMXDha65r07%2B7jPNUebXQLv9UKZDlWaawsF359cwBj8ra%2Fwh0dYUc%2FSM8UJPdHWo%2BhlHCjR%2BHjtiEIg&X-Amz-Signature=75874f4c7c0b6b6aa35c7807f9b3f26572a2ba398f97a74569c36e66c4bf5ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNMNCHY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BFL3F8jejNFyGrRIx1jbOl5LRU6R4BKldi0lahvTRRAiEAgruBAytwaejKdj3%2FgWd8yPTZxX1fjXhtp5dhMC%2Fuzb0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBScmuO42Mh0Ruzx8ircA05AxyFb4To6yphbk1%2FkCtCO8CYlyyX9jh0HdgKIyFVjMB3wNOwuc9UZ11gB7KetQUIbyxkcIEghwD%2Brk4EX03BcG48NuVtOGw3bw3OwovZHG204r2ZRxhw%2Fr6pL%2BLdyApaUfwf5eJt4u2UaZBn35zsC564lNd9bzBd7XNOAFEPuDgIRcnSvMPYi0YmsvT%2B5c78%2Bkc1rS6hyFaXAI5c96N5sAp6VGkwVyI0Oy2gk0AYYllUHDdvTximGosZ0rYpxAjqhpLjrppeHWe8Sxjt2PIuoAzV5zZav0pdK7SX8lOOVlO8UG%2FIb3hf3D2OkFM8X92TmYeff0JN1yJQ2ts8H63btcbAJaKRNaaTOOp%2B1lrPj5yDH02%2BmBizgPV%2BkE1CqijdXBt201bbadNigYiWx5a%2Bkz3HaiaFGtGAa1pFPY%2Fek%2FKE0lrlOkNw5PJwMONB5K%2FG3Jz8lsRDFeoYIRLU%2Fq%2F1jGNvDn2%2FfWhfQolRgweog9DMgZOoBqVExl7xyahEeX78VErjYO74Oq4zx7f9v99rhdeMP5HNahBzyaJH0Z%2Ba6yPJsVLo4jCEy89TVVenmTI2smZn6U73g59JOjd6WORyWVGnPjbyGs8IoCP5ELeNgsvL%2Bszq1NLMR5dZYMKWvib8GOqUBRA8nnugc07joMF0oliy8%2FV1MIPbfkF3zu7qPxjZ7heOOkrQuLvOaZ691vOslYVNe8tx2QUy0IhIYALfEz40bHWlAxpEAu77Q0AbMou%2BLOQJt%2FNI%2B1cnN9jy4DVwabol2kfp%2FWW%2BI5zwfwTMXDha65r07%2B7jPNUebXQLv9UKZDlWaawsF359cwBj8ra%2Fwh0dYUc%2FSM8UJPdHWo%2BhlHCjR%2BHjtiEIg&X-Amz-Signature=61df61d06c2d915f5dbdc400f3103d74fada24f0f76dcf7bf1cf4c44c9436e09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNMNCHY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BFL3F8jejNFyGrRIx1jbOl5LRU6R4BKldi0lahvTRRAiEAgruBAytwaejKdj3%2FgWd8yPTZxX1fjXhtp5dhMC%2Fuzb0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBScmuO42Mh0Ruzx8ircA05AxyFb4To6yphbk1%2FkCtCO8CYlyyX9jh0HdgKIyFVjMB3wNOwuc9UZ11gB7KetQUIbyxkcIEghwD%2Brk4EX03BcG48NuVtOGw3bw3OwovZHG204r2ZRxhw%2Fr6pL%2BLdyApaUfwf5eJt4u2UaZBn35zsC564lNd9bzBd7XNOAFEPuDgIRcnSvMPYi0YmsvT%2B5c78%2Bkc1rS6hyFaXAI5c96N5sAp6VGkwVyI0Oy2gk0AYYllUHDdvTximGosZ0rYpxAjqhpLjrppeHWe8Sxjt2PIuoAzV5zZav0pdK7SX8lOOVlO8UG%2FIb3hf3D2OkFM8X92TmYeff0JN1yJQ2ts8H63btcbAJaKRNaaTOOp%2B1lrPj5yDH02%2BmBizgPV%2BkE1CqijdXBt201bbadNigYiWx5a%2Bkz3HaiaFGtGAa1pFPY%2Fek%2FKE0lrlOkNw5PJwMONB5K%2FG3Jz8lsRDFeoYIRLU%2Fq%2F1jGNvDn2%2FfWhfQolRgweog9DMgZOoBqVExl7xyahEeX78VErjYO74Oq4zx7f9v99rhdeMP5HNahBzyaJH0Z%2Ba6yPJsVLo4jCEy89TVVenmTI2smZn6U73g59JOjd6WORyWVGnPjbyGs8IoCP5ELeNgsvL%2Bszq1NLMR5dZYMKWvib8GOqUBRA8nnugc07joMF0oliy8%2FV1MIPbfkF3zu7qPxjZ7heOOkrQuLvOaZ691vOslYVNe8tx2QUy0IhIYALfEz40bHWlAxpEAu77Q0AbMou%2BLOQJt%2FNI%2B1cnN9jy4DVwabol2kfp%2FWW%2BI5zwfwTMXDha65r07%2B7jPNUebXQLv9UKZDlWaawsF359cwBj8ra%2Fwh0dYUc%2FSM8UJPdHWo%2BhlHCjR%2BHjtiEIg&X-Amz-Signature=d4cb5ff96dfb99da98c1243d95e8cc3d16029d2bed06c0476ac1078578a3ee02&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
