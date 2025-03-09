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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYW7T3C%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCiVmDoJ6o9OFuCSc90EJqlvNzcUnCOwoxc6cVkc63JngIgGCNhzI0RXscr7Z6oqLEJv06hlU6QrHyTrH9vjKkaUb0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFdc0eXtdGS6ERzKCSrcAzlUnlhA7QBfJmmMmf3%2FjKtKTsL9XXVroL6Suj%2FKhIKdq1cVRoP1zELF4wl8xdixU5Nn25pAFkQx1nqPZTiGiCfpCLME0p5CmOOyR1OxHk4FZWiaguV73%2FoNP%2FBXGohVhJERzKQqZHJ7q5KYIxiO%2FLYipp%2F2EAFBJF8y%2FmKvw%2FiG6J%2B8TY43olXcMgSPjlswAbHWaTafe2V5%2BAa%2B6zEeAkrIJea5dB3aLt4EMhU%2FjVc%2BdB0p7JUA6OZG8wVaqG%2F9QCX7aVl9k5EZ%2FwLTT6%2FeRerXmYJlxdNRqAH5Zz0lQBJ2wKXBbEKIageAyhxqKs1SLNv8qg2IqvpYFYku1VvU4anXGb2jlgaq2esNrpvBX1f5efzUNOg5N0JrQ2QxOfjN%2FS4Y0UWc0ITJDMtEzdnC%2B5UlelVlNirkcdLfwTqzR0L5GU0aQad0L7gZNnySzFObZHep1CvqTOOF1HjMvEDHyIrUltA90p7mFZBiVQisKYhC5uHeV%2BuAfXjzBYun1GqNwrda7eszUay9MFqKVtW45kBIPI2q858sa0KAbwz0BkuE5XCfTQ%2Byf6mtSvKhDDuKyqQpkDy8TBQV71Ca84wQTUOPID2wzP28F41UPVFyXsYKrzoqyg%2BGDZuFJINgMIeCtr4GOqUBwwEIjfnmvjZdtMBBVO7caf42uOcAS3LfxbTp8YT%2BBASjn8m5OZP%2BKt6%2BrM02zJ0CDL1f174Gfr6jEPvle8lqpJ395T0aKRvmxdBi%2Broz0MRECcCVikGcOTsAspQf3Cs1enV%2FiAxCZmCHv%2F6wO7og5BHR%2BYOGpaAxUuQiKub6NRFdUWb%2FM5RJoaxuuMgFIAiYcj%2BbWTzyuyeL8AtCajhRrk%2BzRpeK&X-Amz-Signature=a4a8af8d107e676aaf86597c331d660b16fb79720812c03f9073f893f0675b50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYW7T3C%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCiVmDoJ6o9OFuCSc90EJqlvNzcUnCOwoxc6cVkc63JngIgGCNhzI0RXscr7Z6oqLEJv06hlU6QrHyTrH9vjKkaUb0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFdc0eXtdGS6ERzKCSrcAzlUnlhA7QBfJmmMmf3%2FjKtKTsL9XXVroL6Suj%2FKhIKdq1cVRoP1zELF4wl8xdixU5Nn25pAFkQx1nqPZTiGiCfpCLME0p5CmOOyR1OxHk4FZWiaguV73%2FoNP%2FBXGohVhJERzKQqZHJ7q5KYIxiO%2FLYipp%2F2EAFBJF8y%2FmKvw%2FiG6J%2B8TY43olXcMgSPjlswAbHWaTafe2V5%2BAa%2B6zEeAkrIJea5dB3aLt4EMhU%2FjVc%2BdB0p7JUA6OZG8wVaqG%2F9QCX7aVl9k5EZ%2FwLTT6%2FeRerXmYJlxdNRqAH5Zz0lQBJ2wKXBbEKIageAyhxqKs1SLNv8qg2IqvpYFYku1VvU4anXGb2jlgaq2esNrpvBX1f5efzUNOg5N0JrQ2QxOfjN%2FS4Y0UWc0ITJDMtEzdnC%2B5UlelVlNirkcdLfwTqzR0L5GU0aQad0L7gZNnySzFObZHep1CvqTOOF1HjMvEDHyIrUltA90p7mFZBiVQisKYhC5uHeV%2BuAfXjzBYun1GqNwrda7eszUay9MFqKVtW45kBIPI2q858sa0KAbwz0BkuE5XCfTQ%2Byf6mtSvKhDDuKyqQpkDy8TBQV71Ca84wQTUOPID2wzP28F41UPVFyXsYKrzoqyg%2BGDZuFJINgMIeCtr4GOqUBwwEIjfnmvjZdtMBBVO7caf42uOcAS3LfxbTp8YT%2BBASjn8m5OZP%2BKt6%2BrM02zJ0CDL1f174Gfr6jEPvle8lqpJ395T0aKRvmxdBi%2Broz0MRECcCVikGcOTsAspQf3Cs1enV%2FiAxCZmCHv%2F6wO7og5BHR%2BYOGpaAxUuQiKub6NRFdUWb%2FM5RJoaxuuMgFIAiYcj%2BbWTzyuyeL8AtCajhRrk%2BzRpeK&X-Amz-Signature=8dbecf0de75386cb0e7768355a8d8922c70c3cb5f39a07663aa9dbf93cbfc0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYW7T3C%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCiVmDoJ6o9OFuCSc90EJqlvNzcUnCOwoxc6cVkc63JngIgGCNhzI0RXscr7Z6oqLEJv06hlU6QrHyTrH9vjKkaUb0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFdc0eXtdGS6ERzKCSrcAzlUnlhA7QBfJmmMmf3%2FjKtKTsL9XXVroL6Suj%2FKhIKdq1cVRoP1zELF4wl8xdixU5Nn25pAFkQx1nqPZTiGiCfpCLME0p5CmOOyR1OxHk4FZWiaguV73%2FoNP%2FBXGohVhJERzKQqZHJ7q5KYIxiO%2FLYipp%2F2EAFBJF8y%2FmKvw%2FiG6J%2B8TY43olXcMgSPjlswAbHWaTafe2V5%2BAa%2B6zEeAkrIJea5dB3aLt4EMhU%2FjVc%2BdB0p7JUA6OZG8wVaqG%2F9QCX7aVl9k5EZ%2FwLTT6%2FeRerXmYJlxdNRqAH5Zz0lQBJ2wKXBbEKIageAyhxqKs1SLNv8qg2IqvpYFYku1VvU4anXGb2jlgaq2esNrpvBX1f5efzUNOg5N0JrQ2QxOfjN%2FS4Y0UWc0ITJDMtEzdnC%2B5UlelVlNirkcdLfwTqzR0L5GU0aQad0L7gZNnySzFObZHep1CvqTOOF1HjMvEDHyIrUltA90p7mFZBiVQisKYhC5uHeV%2BuAfXjzBYun1GqNwrda7eszUay9MFqKVtW45kBIPI2q858sa0KAbwz0BkuE5XCfTQ%2Byf6mtSvKhDDuKyqQpkDy8TBQV71Ca84wQTUOPID2wzP28F41UPVFyXsYKrzoqyg%2BGDZuFJINgMIeCtr4GOqUBwwEIjfnmvjZdtMBBVO7caf42uOcAS3LfxbTp8YT%2BBASjn8m5OZP%2BKt6%2BrM02zJ0CDL1f174Gfr6jEPvle8lqpJ395T0aKRvmxdBi%2Broz0MRECcCVikGcOTsAspQf3Cs1enV%2FiAxCZmCHv%2F6wO7og5BHR%2BYOGpaAxUuQiKub6NRFdUWb%2FM5RJoaxuuMgFIAiYcj%2BbWTzyuyeL8AtCajhRrk%2BzRpeK&X-Amz-Signature=9064098027b16da769ceccd687eca89e0457dbed0417c9ee75a22057ba5499d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYW7T3C%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCiVmDoJ6o9OFuCSc90EJqlvNzcUnCOwoxc6cVkc63JngIgGCNhzI0RXscr7Z6oqLEJv06hlU6QrHyTrH9vjKkaUb0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFdc0eXtdGS6ERzKCSrcAzlUnlhA7QBfJmmMmf3%2FjKtKTsL9XXVroL6Suj%2FKhIKdq1cVRoP1zELF4wl8xdixU5Nn25pAFkQx1nqPZTiGiCfpCLME0p5CmOOyR1OxHk4FZWiaguV73%2FoNP%2FBXGohVhJERzKQqZHJ7q5KYIxiO%2FLYipp%2F2EAFBJF8y%2FmKvw%2FiG6J%2B8TY43olXcMgSPjlswAbHWaTafe2V5%2BAa%2B6zEeAkrIJea5dB3aLt4EMhU%2FjVc%2BdB0p7JUA6OZG8wVaqG%2F9QCX7aVl9k5EZ%2FwLTT6%2FeRerXmYJlxdNRqAH5Zz0lQBJ2wKXBbEKIageAyhxqKs1SLNv8qg2IqvpYFYku1VvU4anXGb2jlgaq2esNrpvBX1f5efzUNOg5N0JrQ2QxOfjN%2FS4Y0UWc0ITJDMtEzdnC%2B5UlelVlNirkcdLfwTqzR0L5GU0aQad0L7gZNnySzFObZHep1CvqTOOF1HjMvEDHyIrUltA90p7mFZBiVQisKYhC5uHeV%2BuAfXjzBYun1GqNwrda7eszUay9MFqKVtW45kBIPI2q858sa0KAbwz0BkuE5XCfTQ%2Byf6mtSvKhDDuKyqQpkDy8TBQV71Ca84wQTUOPID2wzP28F41UPVFyXsYKrzoqyg%2BGDZuFJINgMIeCtr4GOqUBwwEIjfnmvjZdtMBBVO7caf42uOcAS3LfxbTp8YT%2BBASjn8m5OZP%2BKt6%2BrM02zJ0CDL1f174Gfr6jEPvle8lqpJ395T0aKRvmxdBi%2Broz0MRECcCVikGcOTsAspQf3Cs1enV%2FiAxCZmCHv%2F6wO7og5BHR%2BYOGpaAxUuQiKub6NRFdUWb%2FM5RJoaxuuMgFIAiYcj%2BbWTzyuyeL8AtCajhRrk%2BzRpeK&X-Amz-Signature=75c91a6cd436aa419cd831387c35bf443c2cbc2896a3af800d1c4e2c7e79699b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYW7T3C%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCiVmDoJ6o9OFuCSc90EJqlvNzcUnCOwoxc6cVkc63JngIgGCNhzI0RXscr7Z6oqLEJv06hlU6QrHyTrH9vjKkaUb0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFdc0eXtdGS6ERzKCSrcAzlUnlhA7QBfJmmMmf3%2FjKtKTsL9XXVroL6Suj%2FKhIKdq1cVRoP1zELF4wl8xdixU5Nn25pAFkQx1nqPZTiGiCfpCLME0p5CmOOyR1OxHk4FZWiaguV73%2FoNP%2FBXGohVhJERzKQqZHJ7q5KYIxiO%2FLYipp%2F2EAFBJF8y%2FmKvw%2FiG6J%2B8TY43olXcMgSPjlswAbHWaTafe2V5%2BAa%2B6zEeAkrIJea5dB3aLt4EMhU%2FjVc%2BdB0p7JUA6OZG8wVaqG%2F9QCX7aVl9k5EZ%2FwLTT6%2FeRerXmYJlxdNRqAH5Zz0lQBJ2wKXBbEKIageAyhxqKs1SLNv8qg2IqvpYFYku1VvU4anXGb2jlgaq2esNrpvBX1f5efzUNOg5N0JrQ2QxOfjN%2FS4Y0UWc0ITJDMtEzdnC%2B5UlelVlNirkcdLfwTqzR0L5GU0aQad0L7gZNnySzFObZHep1CvqTOOF1HjMvEDHyIrUltA90p7mFZBiVQisKYhC5uHeV%2BuAfXjzBYun1GqNwrda7eszUay9MFqKVtW45kBIPI2q858sa0KAbwz0BkuE5XCfTQ%2Byf6mtSvKhDDuKyqQpkDy8TBQV71Ca84wQTUOPID2wzP28F41UPVFyXsYKrzoqyg%2BGDZuFJINgMIeCtr4GOqUBwwEIjfnmvjZdtMBBVO7caf42uOcAS3LfxbTp8YT%2BBASjn8m5OZP%2BKt6%2BrM02zJ0CDL1f174Gfr6jEPvle8lqpJ395T0aKRvmxdBi%2Broz0MRECcCVikGcOTsAspQf3Cs1enV%2FiAxCZmCHv%2F6wO7og5BHR%2BYOGpaAxUuQiKub6NRFdUWb%2FM5RJoaxuuMgFIAiYcj%2BbWTzyuyeL8AtCajhRrk%2BzRpeK&X-Amz-Signature=8d0d39c6636d73b231157964177430b1a98ca300a74c8d684c4231a00c505a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
