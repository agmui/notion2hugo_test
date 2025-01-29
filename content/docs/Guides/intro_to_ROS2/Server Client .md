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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR4MKKR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmn7%2FI3BKHgT%2Bm4e6c9JdGF6NSiM95ezO6od6YFk2JuAiEAncPju%2B1n4TqKRzkWsp%2BXn7fm3P0XZF2roOyWYJsBo%2BcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGUa%2FPp7KSdcHpGFSrcA4cyRNJcndTdRzU%2FpBSomHekluG1DIeTZsy8rPAocRffJT%2F4UaqntgBKG1Ae2ZitNEZ2lctJGbl2kjGshKuQFwaZh493wlQNJYJwUhtRqcE1eCm5Wcj759JW5EwBDP9H3jGWi%2BOgb6eOdx10LvJ36OpXvuZRV1yOACQgd7ghcd%2BRzJX7sWE5XPz%2FAKXwkPRveOC74eRLSi7a%2FLatjSG1%2F7iJswQK00vhY5re0iGP6yWcvZ7aiEGudLM9ZBabATYG1y4Jw2jYhQRL%2F9E8JzAPGubEqtNxSwWg1sZnPF7wizHXsUYQaNQmBJzZOz%2FsQtFhPK8uipFoZT9%2F8fEFPXud4wIb8FFqABxgolzHTH6oTLJHhrCTbF%2B8s%2FV6VkpwCY9NbsA1ZSEhf6SqWPShGCCJnr2KY7Y%2Fe6FyIN7%2FapMo5gnRMLQ9%2BqdvzaeinFFBtBdwWW82sWfDlRweeL3LfzN9%2BQCOc1E%2F5H4HmpJDnznEhgiat7U5DpgrDs%2BXeIbioGi4vIIBtI6ZKi7xwnGIn0DhcjPC8cU4VvacUMH9VSDnS%2FqKaPMuiZNqQOU%2Bed7zZ49S9sKdQCMmNDa9agywevA2XipWxqPQpVq49uRWtpwBJMjzca%2BRwr5Sk8bYHsJ4MKja6bwGOqUBDo%2B2532arGs5%2FE16xAnozFaZ5ks59DfHPXN7VFARjdBdmMhq1lihb2S0LhGVJAPWkylaPo8Cv3F0DlUxpDJRXPeJp32G7uSXlO4sHuLV6U%2B16DzoxKewgQ6w4FGeJAd9hMkIjWbW8SZDTZQ%2FKOr3VW9fUDMjfA%2FOLtRNmpt78c57AdLsBNQ4bxFrFRZGJ4dXgYnHv6jxiIqLU1uul096N9iaXIwt&X-Amz-Signature=74acc0af3aff972a41a5ba20307eca8689fb83d403b172c712e17db1b2da750a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR4MKKR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmn7%2FI3BKHgT%2Bm4e6c9JdGF6NSiM95ezO6od6YFk2JuAiEAncPju%2B1n4TqKRzkWsp%2BXn7fm3P0XZF2roOyWYJsBo%2BcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGUa%2FPp7KSdcHpGFSrcA4cyRNJcndTdRzU%2FpBSomHekluG1DIeTZsy8rPAocRffJT%2F4UaqntgBKG1Ae2ZitNEZ2lctJGbl2kjGshKuQFwaZh493wlQNJYJwUhtRqcE1eCm5Wcj759JW5EwBDP9H3jGWi%2BOgb6eOdx10LvJ36OpXvuZRV1yOACQgd7ghcd%2BRzJX7sWE5XPz%2FAKXwkPRveOC74eRLSi7a%2FLatjSG1%2F7iJswQK00vhY5re0iGP6yWcvZ7aiEGudLM9ZBabATYG1y4Jw2jYhQRL%2F9E8JzAPGubEqtNxSwWg1sZnPF7wizHXsUYQaNQmBJzZOz%2FsQtFhPK8uipFoZT9%2F8fEFPXud4wIb8FFqABxgolzHTH6oTLJHhrCTbF%2B8s%2FV6VkpwCY9NbsA1ZSEhf6SqWPShGCCJnr2KY7Y%2Fe6FyIN7%2FapMo5gnRMLQ9%2BqdvzaeinFFBtBdwWW82sWfDlRweeL3LfzN9%2BQCOc1E%2F5H4HmpJDnznEhgiat7U5DpgrDs%2BXeIbioGi4vIIBtI6ZKi7xwnGIn0DhcjPC8cU4VvacUMH9VSDnS%2FqKaPMuiZNqQOU%2Bed7zZ49S9sKdQCMmNDa9agywevA2XipWxqPQpVq49uRWtpwBJMjzca%2BRwr5Sk8bYHsJ4MKja6bwGOqUBDo%2B2532arGs5%2FE16xAnozFaZ5ks59DfHPXN7VFARjdBdmMhq1lihb2S0LhGVJAPWkylaPo8Cv3F0DlUxpDJRXPeJp32G7uSXlO4sHuLV6U%2B16DzoxKewgQ6w4FGeJAd9hMkIjWbW8SZDTZQ%2FKOr3VW9fUDMjfA%2FOLtRNmpt78c57AdLsBNQ4bxFrFRZGJ4dXgYnHv6jxiIqLU1uul096N9iaXIwt&X-Amz-Signature=49d2ab00781dd4097c876b507f52f343fc911df32790771ff023553732b7b31c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR4MKKR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmn7%2FI3BKHgT%2Bm4e6c9JdGF6NSiM95ezO6od6YFk2JuAiEAncPju%2B1n4TqKRzkWsp%2BXn7fm3P0XZF2roOyWYJsBo%2BcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGUa%2FPp7KSdcHpGFSrcA4cyRNJcndTdRzU%2FpBSomHekluG1DIeTZsy8rPAocRffJT%2F4UaqntgBKG1Ae2ZitNEZ2lctJGbl2kjGshKuQFwaZh493wlQNJYJwUhtRqcE1eCm5Wcj759JW5EwBDP9H3jGWi%2BOgb6eOdx10LvJ36OpXvuZRV1yOACQgd7ghcd%2BRzJX7sWE5XPz%2FAKXwkPRveOC74eRLSi7a%2FLatjSG1%2F7iJswQK00vhY5re0iGP6yWcvZ7aiEGudLM9ZBabATYG1y4Jw2jYhQRL%2F9E8JzAPGubEqtNxSwWg1sZnPF7wizHXsUYQaNQmBJzZOz%2FsQtFhPK8uipFoZT9%2F8fEFPXud4wIb8FFqABxgolzHTH6oTLJHhrCTbF%2B8s%2FV6VkpwCY9NbsA1ZSEhf6SqWPShGCCJnr2KY7Y%2Fe6FyIN7%2FapMo5gnRMLQ9%2BqdvzaeinFFBtBdwWW82sWfDlRweeL3LfzN9%2BQCOc1E%2F5H4HmpJDnznEhgiat7U5DpgrDs%2BXeIbioGi4vIIBtI6ZKi7xwnGIn0DhcjPC8cU4VvacUMH9VSDnS%2FqKaPMuiZNqQOU%2Bed7zZ49S9sKdQCMmNDa9agywevA2XipWxqPQpVq49uRWtpwBJMjzca%2BRwr5Sk8bYHsJ4MKja6bwGOqUBDo%2B2532arGs5%2FE16xAnozFaZ5ks59DfHPXN7VFARjdBdmMhq1lihb2S0LhGVJAPWkylaPo8Cv3F0DlUxpDJRXPeJp32G7uSXlO4sHuLV6U%2B16DzoxKewgQ6w4FGeJAd9hMkIjWbW8SZDTZQ%2FKOr3VW9fUDMjfA%2FOLtRNmpt78c57AdLsBNQ4bxFrFRZGJ4dXgYnHv6jxiIqLU1uul096N9iaXIwt&X-Amz-Signature=529ce5b3a45a877cc1db474c91aeceb8d6ab4a6dac58116bc986f64bdd9fa285&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR4MKKR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmn7%2FI3BKHgT%2Bm4e6c9JdGF6NSiM95ezO6od6YFk2JuAiEAncPju%2B1n4TqKRzkWsp%2BXn7fm3P0XZF2roOyWYJsBo%2BcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGUa%2FPp7KSdcHpGFSrcA4cyRNJcndTdRzU%2FpBSomHekluG1DIeTZsy8rPAocRffJT%2F4UaqntgBKG1Ae2ZitNEZ2lctJGbl2kjGshKuQFwaZh493wlQNJYJwUhtRqcE1eCm5Wcj759JW5EwBDP9H3jGWi%2BOgb6eOdx10LvJ36OpXvuZRV1yOACQgd7ghcd%2BRzJX7sWE5XPz%2FAKXwkPRveOC74eRLSi7a%2FLatjSG1%2F7iJswQK00vhY5re0iGP6yWcvZ7aiEGudLM9ZBabATYG1y4Jw2jYhQRL%2F9E8JzAPGubEqtNxSwWg1sZnPF7wizHXsUYQaNQmBJzZOz%2FsQtFhPK8uipFoZT9%2F8fEFPXud4wIb8FFqABxgolzHTH6oTLJHhrCTbF%2B8s%2FV6VkpwCY9NbsA1ZSEhf6SqWPShGCCJnr2KY7Y%2Fe6FyIN7%2FapMo5gnRMLQ9%2BqdvzaeinFFBtBdwWW82sWfDlRweeL3LfzN9%2BQCOc1E%2F5H4HmpJDnznEhgiat7U5DpgrDs%2BXeIbioGi4vIIBtI6ZKi7xwnGIn0DhcjPC8cU4VvacUMH9VSDnS%2FqKaPMuiZNqQOU%2Bed7zZ49S9sKdQCMmNDa9agywevA2XipWxqPQpVq49uRWtpwBJMjzca%2BRwr5Sk8bYHsJ4MKja6bwGOqUBDo%2B2532arGs5%2FE16xAnozFaZ5ks59DfHPXN7VFARjdBdmMhq1lihb2S0LhGVJAPWkylaPo8Cv3F0DlUxpDJRXPeJp32G7uSXlO4sHuLV6U%2B16DzoxKewgQ6w4FGeJAd9hMkIjWbW8SZDTZQ%2FKOr3VW9fUDMjfA%2FOLtRNmpt78c57AdLsBNQ4bxFrFRZGJ4dXgYnHv6jxiIqLU1uul096N9iaXIwt&X-Amz-Signature=29dc157413c152f4ed75bb130e5ff9b9bc03f5c6d951056ce5bd56835129278b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR4MKKR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmn7%2FI3BKHgT%2Bm4e6c9JdGF6NSiM95ezO6od6YFk2JuAiEAncPju%2B1n4TqKRzkWsp%2BXn7fm3P0XZF2roOyWYJsBo%2BcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGUa%2FPp7KSdcHpGFSrcA4cyRNJcndTdRzU%2FpBSomHekluG1DIeTZsy8rPAocRffJT%2F4UaqntgBKG1Ae2ZitNEZ2lctJGbl2kjGshKuQFwaZh493wlQNJYJwUhtRqcE1eCm5Wcj759JW5EwBDP9H3jGWi%2BOgb6eOdx10LvJ36OpXvuZRV1yOACQgd7ghcd%2BRzJX7sWE5XPz%2FAKXwkPRveOC74eRLSi7a%2FLatjSG1%2F7iJswQK00vhY5re0iGP6yWcvZ7aiEGudLM9ZBabATYG1y4Jw2jYhQRL%2F9E8JzAPGubEqtNxSwWg1sZnPF7wizHXsUYQaNQmBJzZOz%2FsQtFhPK8uipFoZT9%2F8fEFPXud4wIb8FFqABxgolzHTH6oTLJHhrCTbF%2B8s%2FV6VkpwCY9NbsA1ZSEhf6SqWPShGCCJnr2KY7Y%2Fe6FyIN7%2FapMo5gnRMLQ9%2BqdvzaeinFFBtBdwWW82sWfDlRweeL3LfzN9%2BQCOc1E%2F5H4HmpJDnznEhgiat7U5DpgrDs%2BXeIbioGi4vIIBtI6ZKi7xwnGIn0DhcjPC8cU4VvacUMH9VSDnS%2FqKaPMuiZNqQOU%2Bed7zZ49S9sKdQCMmNDa9agywevA2XipWxqPQpVq49uRWtpwBJMjzca%2BRwr5Sk8bYHsJ4MKja6bwGOqUBDo%2B2532arGs5%2FE16xAnozFaZ5ks59DfHPXN7VFARjdBdmMhq1lihb2S0LhGVJAPWkylaPo8Cv3F0DlUxpDJRXPeJp32G7uSXlO4sHuLV6U%2B16DzoxKewgQ6w4FGeJAd9hMkIjWbW8SZDTZQ%2FKOr3VW9fUDMjfA%2FOLtRNmpt78c57AdLsBNQ4bxFrFRZGJ4dXgYnHv6jxiIqLU1uul096N9iaXIwt&X-Amz-Signature=a6e9f5c15aee47f1e3d69a8b53d3ef03417464fb505dbf49cdec492b748af8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
