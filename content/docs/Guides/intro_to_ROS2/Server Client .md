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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2AXEUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDYdnlGa5h2Fu2GQo%2Ft09F%2BAZmiR4lyjEr2Z0yPZKLiewIhAJ24oY38zROZ12MLw7bSscNrlriIfnvNrazYvGwhmjjXKv8DCE8QABoMNjM3NDIzMTgzODA1Igx0kwzZTlvwGDQv8HYq3AO7qjzW2XoxjP%2BJRkiJOolODy9vMTjdJ6cIDEvrHG2AYfYXC1Iyy9%2FJBysZiyz2swdZ3Yvy852RU%2Bul73Pa09ycMNXSHRNbKVpPPx2VbGV3bbM0NqOAnPvwVMxxxdcimtu%2BkKzU9Li7OBHEcWq2CLHvfUChA%2BAtRvSO6RR%2B3NnxbWNWuaOYQH4gQCBh6ZXIk5jFsOIiz1YyinLQLc%2FaaRrXB%2BC%2FAuD2ipQPW%2B0IsBSw7CTELH9jpCidft4RSI0WY5Lpmrb3Nm9ENUYkeT6CnLlH%2FX%2FYwIehD%2FVkNXJlW0BF%2BeoeQZ%2BvHOkYmHrjxmCu7QXyI95MMDq150lUWuVAatcjUMuziLg14qZwLXv%2FLacJ8oxrjorwzF%2FuQqvqZwYyp4q1XlnjPDTkjWKSDuhLC4do8YdiUz%2BLRpwjIsK2qQzQzYNx1Z5g9k6vMXKRx9vQ7uh7FhGrtYvcnxB6DX%2B6n1C6O4uZqRkOuC2RxUvAOcJ6dLbAUnQvJ0%2FXIQVPDOAPJdKs7jw25CbK7gTBIjctVcG9Qu2GWnMw2nFakNVRuGZZvjdgLLDhBNBeI6%2FV4wV294vuOaDofW%2BLiXJ%2BlSMJOtM5pHKhGM0O3PKq%2FPbrEMtREbRvHxCXZ1PgEsVk4zCN3%2FHCBjqkAZlT0TsVUVG7a0f0HkImp0BV2aEERszC0WLuvLHnz4NppecJH9wuJVlVDsYhHumCd%2BszbQ7daPUpMMRkrjBMu0zgMarY4Uh6txeQj5xqGjtO%2BAgesUxgU4NhPCtBQzYjBFK1ISmnJznubvo0bkNGN7W5iLpX%2B5oqvaupXrpmpLL2YkrN6ObnQxQMf59EccQn5ZLL9H5Y4ZHXOWpsiOwcralmpaA3&X-Amz-Signature=9739c7bee5f1328b8cb4558a4cf35e5baf0104f54e66c0d9a1edac3a2f8c1305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2AXEUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDYdnlGa5h2Fu2GQo%2Ft09F%2BAZmiR4lyjEr2Z0yPZKLiewIhAJ24oY38zROZ12MLw7bSscNrlriIfnvNrazYvGwhmjjXKv8DCE8QABoMNjM3NDIzMTgzODA1Igx0kwzZTlvwGDQv8HYq3AO7qjzW2XoxjP%2BJRkiJOolODy9vMTjdJ6cIDEvrHG2AYfYXC1Iyy9%2FJBysZiyz2swdZ3Yvy852RU%2Bul73Pa09ycMNXSHRNbKVpPPx2VbGV3bbM0NqOAnPvwVMxxxdcimtu%2BkKzU9Li7OBHEcWq2CLHvfUChA%2BAtRvSO6RR%2B3NnxbWNWuaOYQH4gQCBh6ZXIk5jFsOIiz1YyinLQLc%2FaaRrXB%2BC%2FAuD2ipQPW%2B0IsBSw7CTELH9jpCidft4RSI0WY5Lpmrb3Nm9ENUYkeT6CnLlH%2FX%2FYwIehD%2FVkNXJlW0BF%2BeoeQZ%2BvHOkYmHrjxmCu7QXyI95MMDq150lUWuVAatcjUMuziLg14qZwLXv%2FLacJ8oxrjorwzF%2FuQqvqZwYyp4q1XlnjPDTkjWKSDuhLC4do8YdiUz%2BLRpwjIsK2qQzQzYNx1Z5g9k6vMXKRx9vQ7uh7FhGrtYvcnxB6DX%2B6n1C6O4uZqRkOuC2RxUvAOcJ6dLbAUnQvJ0%2FXIQVPDOAPJdKs7jw25CbK7gTBIjctVcG9Qu2GWnMw2nFakNVRuGZZvjdgLLDhBNBeI6%2FV4wV294vuOaDofW%2BLiXJ%2BlSMJOtM5pHKhGM0O3PKq%2FPbrEMtREbRvHxCXZ1PgEsVk4zCN3%2FHCBjqkAZlT0TsVUVG7a0f0HkImp0BV2aEERszC0WLuvLHnz4NppecJH9wuJVlVDsYhHumCd%2BszbQ7daPUpMMRkrjBMu0zgMarY4Uh6txeQj5xqGjtO%2BAgesUxgU4NhPCtBQzYjBFK1ISmnJznubvo0bkNGN7W5iLpX%2B5oqvaupXrpmpLL2YkrN6ObnQxQMf59EccQn5ZLL9H5Y4ZHXOWpsiOwcralmpaA3&X-Amz-Signature=dcb7257c91e0ee91bd4d39a4f6e3ff141d96d23462c03272d1e7a1bb9a00e9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2AXEUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDYdnlGa5h2Fu2GQo%2Ft09F%2BAZmiR4lyjEr2Z0yPZKLiewIhAJ24oY38zROZ12MLw7bSscNrlriIfnvNrazYvGwhmjjXKv8DCE8QABoMNjM3NDIzMTgzODA1Igx0kwzZTlvwGDQv8HYq3AO7qjzW2XoxjP%2BJRkiJOolODy9vMTjdJ6cIDEvrHG2AYfYXC1Iyy9%2FJBysZiyz2swdZ3Yvy852RU%2Bul73Pa09ycMNXSHRNbKVpPPx2VbGV3bbM0NqOAnPvwVMxxxdcimtu%2BkKzU9Li7OBHEcWq2CLHvfUChA%2BAtRvSO6RR%2B3NnxbWNWuaOYQH4gQCBh6ZXIk5jFsOIiz1YyinLQLc%2FaaRrXB%2BC%2FAuD2ipQPW%2B0IsBSw7CTELH9jpCidft4RSI0WY5Lpmrb3Nm9ENUYkeT6CnLlH%2FX%2FYwIehD%2FVkNXJlW0BF%2BeoeQZ%2BvHOkYmHrjxmCu7QXyI95MMDq150lUWuVAatcjUMuziLg14qZwLXv%2FLacJ8oxrjorwzF%2FuQqvqZwYyp4q1XlnjPDTkjWKSDuhLC4do8YdiUz%2BLRpwjIsK2qQzQzYNx1Z5g9k6vMXKRx9vQ7uh7FhGrtYvcnxB6DX%2B6n1C6O4uZqRkOuC2RxUvAOcJ6dLbAUnQvJ0%2FXIQVPDOAPJdKs7jw25CbK7gTBIjctVcG9Qu2GWnMw2nFakNVRuGZZvjdgLLDhBNBeI6%2FV4wV294vuOaDofW%2BLiXJ%2BlSMJOtM5pHKhGM0O3PKq%2FPbrEMtREbRvHxCXZ1PgEsVk4zCN3%2FHCBjqkAZlT0TsVUVG7a0f0HkImp0BV2aEERszC0WLuvLHnz4NppecJH9wuJVlVDsYhHumCd%2BszbQ7daPUpMMRkrjBMu0zgMarY4Uh6txeQj5xqGjtO%2BAgesUxgU4NhPCtBQzYjBFK1ISmnJznubvo0bkNGN7W5iLpX%2B5oqvaupXrpmpLL2YkrN6ObnQxQMf59EccQn5ZLL9H5Y4ZHXOWpsiOwcralmpaA3&X-Amz-Signature=57e021f71e3637d320760ec25df29596bdb6a8a022a62aad5ff21c15e0e68f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2AXEUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDYdnlGa5h2Fu2GQo%2Ft09F%2BAZmiR4lyjEr2Z0yPZKLiewIhAJ24oY38zROZ12MLw7bSscNrlriIfnvNrazYvGwhmjjXKv8DCE8QABoMNjM3NDIzMTgzODA1Igx0kwzZTlvwGDQv8HYq3AO7qjzW2XoxjP%2BJRkiJOolODy9vMTjdJ6cIDEvrHG2AYfYXC1Iyy9%2FJBysZiyz2swdZ3Yvy852RU%2Bul73Pa09ycMNXSHRNbKVpPPx2VbGV3bbM0NqOAnPvwVMxxxdcimtu%2BkKzU9Li7OBHEcWq2CLHvfUChA%2BAtRvSO6RR%2B3NnxbWNWuaOYQH4gQCBh6ZXIk5jFsOIiz1YyinLQLc%2FaaRrXB%2BC%2FAuD2ipQPW%2B0IsBSw7CTELH9jpCidft4RSI0WY5Lpmrb3Nm9ENUYkeT6CnLlH%2FX%2FYwIehD%2FVkNXJlW0BF%2BeoeQZ%2BvHOkYmHrjxmCu7QXyI95MMDq150lUWuVAatcjUMuziLg14qZwLXv%2FLacJ8oxrjorwzF%2FuQqvqZwYyp4q1XlnjPDTkjWKSDuhLC4do8YdiUz%2BLRpwjIsK2qQzQzYNx1Z5g9k6vMXKRx9vQ7uh7FhGrtYvcnxB6DX%2B6n1C6O4uZqRkOuC2RxUvAOcJ6dLbAUnQvJ0%2FXIQVPDOAPJdKs7jw25CbK7gTBIjctVcG9Qu2GWnMw2nFakNVRuGZZvjdgLLDhBNBeI6%2FV4wV294vuOaDofW%2BLiXJ%2BlSMJOtM5pHKhGM0O3PKq%2FPbrEMtREbRvHxCXZ1PgEsVk4zCN3%2FHCBjqkAZlT0TsVUVG7a0f0HkImp0BV2aEERszC0WLuvLHnz4NppecJH9wuJVlVDsYhHumCd%2BszbQ7daPUpMMRkrjBMu0zgMarY4Uh6txeQj5xqGjtO%2BAgesUxgU4NhPCtBQzYjBFK1ISmnJznubvo0bkNGN7W5iLpX%2B5oqvaupXrpmpLL2YkrN6ObnQxQMf59EccQn5ZLL9H5Y4ZHXOWpsiOwcralmpaA3&X-Amz-Signature=c50222f8941590f1d774be2b1e15b91643912b7ca2daf6bede1e04d12c3e4253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2AXEUC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDYdnlGa5h2Fu2GQo%2Ft09F%2BAZmiR4lyjEr2Z0yPZKLiewIhAJ24oY38zROZ12MLw7bSscNrlriIfnvNrazYvGwhmjjXKv8DCE8QABoMNjM3NDIzMTgzODA1Igx0kwzZTlvwGDQv8HYq3AO7qjzW2XoxjP%2BJRkiJOolODy9vMTjdJ6cIDEvrHG2AYfYXC1Iyy9%2FJBysZiyz2swdZ3Yvy852RU%2Bul73Pa09ycMNXSHRNbKVpPPx2VbGV3bbM0NqOAnPvwVMxxxdcimtu%2BkKzU9Li7OBHEcWq2CLHvfUChA%2BAtRvSO6RR%2B3NnxbWNWuaOYQH4gQCBh6ZXIk5jFsOIiz1YyinLQLc%2FaaRrXB%2BC%2FAuD2ipQPW%2B0IsBSw7CTELH9jpCidft4RSI0WY5Lpmrb3Nm9ENUYkeT6CnLlH%2FX%2FYwIehD%2FVkNXJlW0BF%2BeoeQZ%2BvHOkYmHrjxmCu7QXyI95MMDq150lUWuVAatcjUMuziLg14qZwLXv%2FLacJ8oxrjorwzF%2FuQqvqZwYyp4q1XlnjPDTkjWKSDuhLC4do8YdiUz%2BLRpwjIsK2qQzQzYNx1Z5g9k6vMXKRx9vQ7uh7FhGrtYvcnxB6DX%2B6n1C6O4uZqRkOuC2RxUvAOcJ6dLbAUnQvJ0%2FXIQVPDOAPJdKs7jw25CbK7gTBIjctVcG9Qu2GWnMw2nFakNVRuGZZvjdgLLDhBNBeI6%2FV4wV294vuOaDofW%2BLiXJ%2BlSMJOtM5pHKhGM0O3PKq%2FPbrEMtREbRvHxCXZ1PgEsVk4zCN3%2FHCBjqkAZlT0TsVUVG7a0f0HkImp0BV2aEERszC0WLuvLHnz4NppecJH9wuJVlVDsYhHumCd%2BszbQ7daPUpMMRkrjBMu0zgMarY4Uh6txeQj5xqGjtO%2BAgesUxgU4NhPCtBQzYjBFK1ISmnJznubvo0bkNGN7W5iLpX%2B5oqvaupXrpmpLL2YkrN6ObnQxQMf59EccQn5ZLL9H5Y4ZHXOWpsiOwcralmpaA3&X-Amz-Signature=ea8565219b3fc06e3b452c7e1b749831b661bd63cb6498c4852ae7a7fa11e792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
