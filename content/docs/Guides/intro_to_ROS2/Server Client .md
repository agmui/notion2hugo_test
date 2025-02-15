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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGI7OJK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFcIkeOaL61pYEfd5bAlxc3kuwXXEZbJ99SOQMp9SkpPAiEAjxb371Ec3pj4ZD9YNT5HCScAuzaiTrnCXp%2BXe2Z%2BGQ8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFfwgXznEvhhtoejhircAy4xVYVfoLpvFVasJhwnVhYjpHRXRDB4vZWdG0JGHoPxHP7yVEDXoczFElGchZpZ36OvKDWHioRM%2Fut6OUwP5OktmPL45ZXT9xq95w1kL1zw7IKerqGiHZbTJZQwxgLo2IN7BSbPMIMIxUzySpe5b%2BxCE5PddxFF2bUmRnQ%2BG5KLqe7YmNgBbhOw5LeHtuct%2FPz2%2BEHq8V2uXCGOmgILvrcM2%2BfplbR1bW4rdfwApXfsMHAzBK0ANTjJ6Yes5Plp6W5cr5dExnD%2F4uzumnOc3kV%2FT%2Fh6WSedhsX%2BM0PH4b2m68%2B1NDTr4rkNsv2edxk%2F1mvfVg83NMY3GMdk6LWk7MGvxKp7SQ%2BkASmwQXR1b0QVb7aRQoljWmWEhc5ZX9dxAyl9EDgSftrUYCWHaS4hN0KYP4wiz7Un8VJU5ruycIcb%2Bmr0ReszZ%2BfieTbSKV30BpWUkaI2iwnKJ6nb9H7Enpa%2FFbqMoMcpl801ivcEQ6ZGpONH4hyWyTBsA7%2FxZFcAlnOm63LYNyDdWbvTDXXST%2BcdbdOyjv36yEiwN5Q%2FsGB3Q%2B9sKUom3UHjYgd2NyqAIdtSXB5XjSBXnRfq7RQingj%2FMsxT3q2Uy%2F92U4w4EL870f6vTy6wLOZC16WQMNL1w70GOqUBnCcLFjifvxZIvV%2BdXZan2D9JLujwB%2FEbt1gv2AIgeLkEaNvgUC42B1gTNEx2BwTBOnZw%2FBFYb8dMxZ%2F9V6NtSKuJ8h%2BuNe0ewopKmGgtsmF8xSQKIjLTrrSfVEnHAJg8GYUSY4Ts%2BnCJ7gK0tHeXxEe1AtCFOzGEbj4ipkCYO0AayRIwp4OU8cz6QhI6PzOMh5iAmiAaoKJBgLPkDq3%2FFbPkAEW3&X-Amz-Signature=c3171223b5cd900f9ce6076d253be3af6bf7a5e248d7f7911d64cb51d88ab934&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGI7OJK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFcIkeOaL61pYEfd5bAlxc3kuwXXEZbJ99SOQMp9SkpPAiEAjxb371Ec3pj4ZD9YNT5HCScAuzaiTrnCXp%2BXe2Z%2BGQ8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFfwgXznEvhhtoejhircAy4xVYVfoLpvFVasJhwnVhYjpHRXRDB4vZWdG0JGHoPxHP7yVEDXoczFElGchZpZ36OvKDWHioRM%2Fut6OUwP5OktmPL45ZXT9xq95w1kL1zw7IKerqGiHZbTJZQwxgLo2IN7BSbPMIMIxUzySpe5b%2BxCE5PddxFF2bUmRnQ%2BG5KLqe7YmNgBbhOw5LeHtuct%2FPz2%2BEHq8V2uXCGOmgILvrcM2%2BfplbR1bW4rdfwApXfsMHAzBK0ANTjJ6Yes5Plp6W5cr5dExnD%2F4uzumnOc3kV%2FT%2Fh6WSedhsX%2BM0PH4b2m68%2B1NDTr4rkNsv2edxk%2F1mvfVg83NMY3GMdk6LWk7MGvxKp7SQ%2BkASmwQXR1b0QVb7aRQoljWmWEhc5ZX9dxAyl9EDgSftrUYCWHaS4hN0KYP4wiz7Un8VJU5ruycIcb%2Bmr0ReszZ%2BfieTbSKV30BpWUkaI2iwnKJ6nb9H7Enpa%2FFbqMoMcpl801ivcEQ6ZGpONH4hyWyTBsA7%2FxZFcAlnOm63LYNyDdWbvTDXXST%2BcdbdOyjv36yEiwN5Q%2FsGB3Q%2B9sKUom3UHjYgd2NyqAIdtSXB5XjSBXnRfq7RQingj%2FMsxT3q2Uy%2F92U4w4EL870f6vTy6wLOZC16WQMNL1w70GOqUBnCcLFjifvxZIvV%2BdXZan2D9JLujwB%2FEbt1gv2AIgeLkEaNvgUC42B1gTNEx2BwTBOnZw%2FBFYb8dMxZ%2F9V6NtSKuJ8h%2BuNe0ewopKmGgtsmF8xSQKIjLTrrSfVEnHAJg8GYUSY4Ts%2BnCJ7gK0tHeXxEe1AtCFOzGEbj4ipkCYO0AayRIwp4OU8cz6QhI6PzOMh5iAmiAaoKJBgLPkDq3%2FFbPkAEW3&X-Amz-Signature=993279371065ba00b66b8322edf84c283780b62db141f8acff9560a29349b17d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGI7OJK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFcIkeOaL61pYEfd5bAlxc3kuwXXEZbJ99SOQMp9SkpPAiEAjxb371Ec3pj4ZD9YNT5HCScAuzaiTrnCXp%2BXe2Z%2BGQ8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFfwgXznEvhhtoejhircAy4xVYVfoLpvFVasJhwnVhYjpHRXRDB4vZWdG0JGHoPxHP7yVEDXoczFElGchZpZ36OvKDWHioRM%2Fut6OUwP5OktmPL45ZXT9xq95w1kL1zw7IKerqGiHZbTJZQwxgLo2IN7BSbPMIMIxUzySpe5b%2BxCE5PddxFF2bUmRnQ%2BG5KLqe7YmNgBbhOw5LeHtuct%2FPz2%2BEHq8V2uXCGOmgILvrcM2%2BfplbR1bW4rdfwApXfsMHAzBK0ANTjJ6Yes5Plp6W5cr5dExnD%2F4uzumnOc3kV%2FT%2Fh6WSedhsX%2BM0PH4b2m68%2B1NDTr4rkNsv2edxk%2F1mvfVg83NMY3GMdk6LWk7MGvxKp7SQ%2BkASmwQXR1b0QVb7aRQoljWmWEhc5ZX9dxAyl9EDgSftrUYCWHaS4hN0KYP4wiz7Un8VJU5ruycIcb%2Bmr0ReszZ%2BfieTbSKV30BpWUkaI2iwnKJ6nb9H7Enpa%2FFbqMoMcpl801ivcEQ6ZGpONH4hyWyTBsA7%2FxZFcAlnOm63LYNyDdWbvTDXXST%2BcdbdOyjv36yEiwN5Q%2FsGB3Q%2B9sKUom3UHjYgd2NyqAIdtSXB5XjSBXnRfq7RQingj%2FMsxT3q2Uy%2F92U4w4EL870f6vTy6wLOZC16WQMNL1w70GOqUBnCcLFjifvxZIvV%2BdXZan2D9JLujwB%2FEbt1gv2AIgeLkEaNvgUC42B1gTNEx2BwTBOnZw%2FBFYb8dMxZ%2F9V6NtSKuJ8h%2BuNe0ewopKmGgtsmF8xSQKIjLTrrSfVEnHAJg8GYUSY4Ts%2BnCJ7gK0tHeXxEe1AtCFOzGEbj4ipkCYO0AayRIwp4OU8cz6QhI6PzOMh5iAmiAaoKJBgLPkDq3%2FFbPkAEW3&X-Amz-Signature=e950be12c58fdf0dc26c3fff607db5b5cd2b8d8c9d17b1c7d86c54da8efdbcb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGI7OJK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFcIkeOaL61pYEfd5bAlxc3kuwXXEZbJ99SOQMp9SkpPAiEAjxb371Ec3pj4ZD9YNT5HCScAuzaiTrnCXp%2BXe2Z%2BGQ8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFfwgXznEvhhtoejhircAy4xVYVfoLpvFVasJhwnVhYjpHRXRDB4vZWdG0JGHoPxHP7yVEDXoczFElGchZpZ36OvKDWHioRM%2Fut6OUwP5OktmPL45ZXT9xq95w1kL1zw7IKerqGiHZbTJZQwxgLo2IN7BSbPMIMIxUzySpe5b%2BxCE5PddxFF2bUmRnQ%2BG5KLqe7YmNgBbhOw5LeHtuct%2FPz2%2BEHq8V2uXCGOmgILvrcM2%2BfplbR1bW4rdfwApXfsMHAzBK0ANTjJ6Yes5Plp6W5cr5dExnD%2F4uzumnOc3kV%2FT%2Fh6WSedhsX%2BM0PH4b2m68%2B1NDTr4rkNsv2edxk%2F1mvfVg83NMY3GMdk6LWk7MGvxKp7SQ%2BkASmwQXR1b0QVb7aRQoljWmWEhc5ZX9dxAyl9EDgSftrUYCWHaS4hN0KYP4wiz7Un8VJU5ruycIcb%2Bmr0ReszZ%2BfieTbSKV30BpWUkaI2iwnKJ6nb9H7Enpa%2FFbqMoMcpl801ivcEQ6ZGpONH4hyWyTBsA7%2FxZFcAlnOm63LYNyDdWbvTDXXST%2BcdbdOyjv36yEiwN5Q%2FsGB3Q%2B9sKUom3UHjYgd2NyqAIdtSXB5XjSBXnRfq7RQingj%2FMsxT3q2Uy%2F92U4w4EL870f6vTy6wLOZC16WQMNL1w70GOqUBnCcLFjifvxZIvV%2BdXZan2D9JLujwB%2FEbt1gv2AIgeLkEaNvgUC42B1gTNEx2BwTBOnZw%2FBFYb8dMxZ%2F9V6NtSKuJ8h%2BuNe0ewopKmGgtsmF8xSQKIjLTrrSfVEnHAJg8GYUSY4Ts%2BnCJ7gK0tHeXxEe1AtCFOzGEbj4ipkCYO0AayRIwp4OU8cz6QhI6PzOMh5iAmiAaoKJBgLPkDq3%2FFbPkAEW3&X-Amz-Signature=d7a2a6a0cb51ae9b955b3ac12b21801419483f5bf2b8a30fd6375dfdb7aeef19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGI7OJK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFcIkeOaL61pYEfd5bAlxc3kuwXXEZbJ99SOQMp9SkpPAiEAjxb371Ec3pj4ZD9YNT5HCScAuzaiTrnCXp%2BXe2Z%2BGQ8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFfwgXznEvhhtoejhircAy4xVYVfoLpvFVasJhwnVhYjpHRXRDB4vZWdG0JGHoPxHP7yVEDXoczFElGchZpZ36OvKDWHioRM%2Fut6OUwP5OktmPL45ZXT9xq95w1kL1zw7IKerqGiHZbTJZQwxgLo2IN7BSbPMIMIxUzySpe5b%2BxCE5PddxFF2bUmRnQ%2BG5KLqe7YmNgBbhOw5LeHtuct%2FPz2%2BEHq8V2uXCGOmgILvrcM2%2BfplbR1bW4rdfwApXfsMHAzBK0ANTjJ6Yes5Plp6W5cr5dExnD%2F4uzumnOc3kV%2FT%2Fh6WSedhsX%2BM0PH4b2m68%2B1NDTr4rkNsv2edxk%2F1mvfVg83NMY3GMdk6LWk7MGvxKp7SQ%2BkASmwQXR1b0QVb7aRQoljWmWEhc5ZX9dxAyl9EDgSftrUYCWHaS4hN0KYP4wiz7Un8VJU5ruycIcb%2Bmr0ReszZ%2BfieTbSKV30BpWUkaI2iwnKJ6nb9H7Enpa%2FFbqMoMcpl801ivcEQ6ZGpONH4hyWyTBsA7%2FxZFcAlnOm63LYNyDdWbvTDXXST%2BcdbdOyjv36yEiwN5Q%2FsGB3Q%2B9sKUom3UHjYgd2NyqAIdtSXB5XjSBXnRfq7RQingj%2FMsxT3q2Uy%2F92U4w4EL870f6vTy6wLOZC16WQMNL1w70GOqUBnCcLFjifvxZIvV%2BdXZan2D9JLujwB%2FEbt1gv2AIgeLkEaNvgUC42B1gTNEx2BwTBOnZw%2FBFYb8dMxZ%2F9V6NtSKuJ8h%2BuNe0ewopKmGgtsmF8xSQKIjLTrrSfVEnHAJg8GYUSY4Ts%2BnCJ7gK0tHeXxEe1AtCFOzGEbj4ipkCYO0AayRIwp4OU8cz6QhI6PzOMh5iAmiAaoKJBgLPkDq3%2FFbPkAEW3&X-Amz-Signature=596f4504aa52d808aa0e83710f1696b00e7e1a600533099769441544e9476ded&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
