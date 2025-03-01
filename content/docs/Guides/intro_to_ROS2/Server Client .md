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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJZIVHO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2Ff4Qch8rvQch7ASsIK9%2B7JZUuTc%2BY%2FGraJu4MZbz1yAIhAPP70QMeUizI4K2r%2FVEikSQ953tAO9HFUsQcqwaJcipwKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWmszN3mKu0mfcmfYq3APFQ1AtayvdAdoYUJfl5Zbnc6E%2BhTPTfs2KOQzsSj2b7ARWa8bkyvIYtChvANIPnOw7OLScSPKaG%2B6o7UUbDyRwFITiw8%2FOC2gj3yjsmNjTeDXjB%2F2Im3G6PaS1uPxY6oCzcSkrYdZy0d80Wwv4vZNkNWm9MkLvBFsqFOQq4nvW0y2%2Bgpgkku7rRiZIJ%2BJahxLutccjUnvA3RN7sq6Z7W4Md7jdUmA0onDn3nc4X58AAgF1FaP5cE2YTloisQXIm7f3lJSGqsDSKoLmgTDjpJgwqaTKOmFKPZXc980%2B0mV9SPSXyEh6Vt9Yeu%2FkKO0cUfY8NH82LZRZEEJg9JXNefGqH50YeugJtxzUkYyoeKZ42GNfViIlNO6UX9Hqj7iJQ%2FXssLsYt7A6rGwl2VJ1UIa3XgT7PcgUNaoW6nIn80iBLisQQpch5X6OTD%2BjG9YbXLiH4HIyR8CmaT5faswRmNibkLe1nFlexYbT9I2ooKCq%2Fl%2By7viqBDnCfivP%2BpxIT4Lk%2FIA%2BmqQJM7ZxnF9sYGC2WhR3MEX4GA5oOronTUm7htq7dk2NpGlP0XsZGfDfMNmOwwfgFyAMgEVv9zpxLsjoFXjl9a0TYjHzEKgPB3UOxgHk1KoZRLXIft1KYDDOrYu%2BBjqkAV2UwNwVLpKJ4qgWkYNbx%2BA6U7%2FQff8X%2BpHbm6TTltQwzcimILu78JmcKA6JNznIRkdZxDix2pESPSKmZb%2BCEu1dUCMAAovfQf%2BStfUlWpWBEm3jo4mrYAxPptomyM0tR3fEBfMXLN0xSG%2B7HmNXcURO1VeVXwJQpQxo840qvw2NGJfXXB7jShANEEZDNpnjHUr10mUcAYpGUf3EGiM3ngRUhupq&X-Amz-Signature=56a1c931da0d315359ff1c72de1f5d5200bcca6b292fc80c06ebc23a0bc3a6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJZIVHO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2Ff4Qch8rvQch7ASsIK9%2B7JZUuTc%2BY%2FGraJu4MZbz1yAIhAPP70QMeUizI4K2r%2FVEikSQ953tAO9HFUsQcqwaJcipwKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWmszN3mKu0mfcmfYq3APFQ1AtayvdAdoYUJfl5Zbnc6E%2BhTPTfs2KOQzsSj2b7ARWa8bkyvIYtChvANIPnOw7OLScSPKaG%2B6o7UUbDyRwFITiw8%2FOC2gj3yjsmNjTeDXjB%2F2Im3G6PaS1uPxY6oCzcSkrYdZy0d80Wwv4vZNkNWm9MkLvBFsqFOQq4nvW0y2%2Bgpgkku7rRiZIJ%2BJahxLutccjUnvA3RN7sq6Z7W4Md7jdUmA0onDn3nc4X58AAgF1FaP5cE2YTloisQXIm7f3lJSGqsDSKoLmgTDjpJgwqaTKOmFKPZXc980%2B0mV9SPSXyEh6Vt9Yeu%2FkKO0cUfY8NH82LZRZEEJg9JXNefGqH50YeugJtxzUkYyoeKZ42GNfViIlNO6UX9Hqj7iJQ%2FXssLsYt7A6rGwl2VJ1UIa3XgT7PcgUNaoW6nIn80iBLisQQpch5X6OTD%2BjG9YbXLiH4HIyR8CmaT5faswRmNibkLe1nFlexYbT9I2ooKCq%2Fl%2By7viqBDnCfivP%2BpxIT4Lk%2FIA%2BmqQJM7ZxnF9sYGC2WhR3MEX4GA5oOronTUm7htq7dk2NpGlP0XsZGfDfMNmOwwfgFyAMgEVv9zpxLsjoFXjl9a0TYjHzEKgPB3UOxgHk1KoZRLXIft1KYDDOrYu%2BBjqkAV2UwNwVLpKJ4qgWkYNbx%2BA6U7%2FQff8X%2BpHbm6TTltQwzcimILu78JmcKA6JNznIRkdZxDix2pESPSKmZb%2BCEu1dUCMAAovfQf%2BStfUlWpWBEm3jo4mrYAxPptomyM0tR3fEBfMXLN0xSG%2B7HmNXcURO1VeVXwJQpQxo840qvw2NGJfXXB7jShANEEZDNpnjHUr10mUcAYpGUf3EGiM3ngRUhupq&X-Amz-Signature=2f459ec7a350f2619e0872d7f7368c274eca73a6a9299c33835b1c9ed40570f6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJZIVHO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2Ff4Qch8rvQch7ASsIK9%2B7JZUuTc%2BY%2FGraJu4MZbz1yAIhAPP70QMeUizI4K2r%2FVEikSQ953tAO9HFUsQcqwaJcipwKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWmszN3mKu0mfcmfYq3APFQ1AtayvdAdoYUJfl5Zbnc6E%2BhTPTfs2KOQzsSj2b7ARWa8bkyvIYtChvANIPnOw7OLScSPKaG%2B6o7UUbDyRwFITiw8%2FOC2gj3yjsmNjTeDXjB%2F2Im3G6PaS1uPxY6oCzcSkrYdZy0d80Wwv4vZNkNWm9MkLvBFsqFOQq4nvW0y2%2Bgpgkku7rRiZIJ%2BJahxLutccjUnvA3RN7sq6Z7W4Md7jdUmA0onDn3nc4X58AAgF1FaP5cE2YTloisQXIm7f3lJSGqsDSKoLmgTDjpJgwqaTKOmFKPZXc980%2B0mV9SPSXyEh6Vt9Yeu%2FkKO0cUfY8NH82LZRZEEJg9JXNefGqH50YeugJtxzUkYyoeKZ42GNfViIlNO6UX9Hqj7iJQ%2FXssLsYt7A6rGwl2VJ1UIa3XgT7PcgUNaoW6nIn80iBLisQQpch5X6OTD%2BjG9YbXLiH4HIyR8CmaT5faswRmNibkLe1nFlexYbT9I2ooKCq%2Fl%2By7viqBDnCfivP%2BpxIT4Lk%2FIA%2BmqQJM7ZxnF9sYGC2WhR3MEX4GA5oOronTUm7htq7dk2NpGlP0XsZGfDfMNmOwwfgFyAMgEVv9zpxLsjoFXjl9a0TYjHzEKgPB3UOxgHk1KoZRLXIft1KYDDOrYu%2BBjqkAV2UwNwVLpKJ4qgWkYNbx%2BA6U7%2FQff8X%2BpHbm6TTltQwzcimILu78JmcKA6JNznIRkdZxDix2pESPSKmZb%2BCEu1dUCMAAovfQf%2BStfUlWpWBEm3jo4mrYAxPptomyM0tR3fEBfMXLN0xSG%2B7HmNXcURO1VeVXwJQpQxo840qvw2NGJfXXB7jShANEEZDNpnjHUr10mUcAYpGUf3EGiM3ngRUhupq&X-Amz-Signature=09fd8e0773b8fc9ed6a7fff8b50a5feb9a0bf32d76155ca9aaca0b5549a3910d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJZIVHO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2Ff4Qch8rvQch7ASsIK9%2B7JZUuTc%2BY%2FGraJu4MZbz1yAIhAPP70QMeUizI4K2r%2FVEikSQ953tAO9HFUsQcqwaJcipwKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWmszN3mKu0mfcmfYq3APFQ1AtayvdAdoYUJfl5Zbnc6E%2BhTPTfs2KOQzsSj2b7ARWa8bkyvIYtChvANIPnOw7OLScSPKaG%2B6o7UUbDyRwFITiw8%2FOC2gj3yjsmNjTeDXjB%2F2Im3G6PaS1uPxY6oCzcSkrYdZy0d80Wwv4vZNkNWm9MkLvBFsqFOQq4nvW0y2%2Bgpgkku7rRiZIJ%2BJahxLutccjUnvA3RN7sq6Z7W4Md7jdUmA0onDn3nc4X58AAgF1FaP5cE2YTloisQXIm7f3lJSGqsDSKoLmgTDjpJgwqaTKOmFKPZXc980%2B0mV9SPSXyEh6Vt9Yeu%2FkKO0cUfY8NH82LZRZEEJg9JXNefGqH50YeugJtxzUkYyoeKZ42GNfViIlNO6UX9Hqj7iJQ%2FXssLsYt7A6rGwl2VJ1UIa3XgT7PcgUNaoW6nIn80iBLisQQpch5X6OTD%2BjG9YbXLiH4HIyR8CmaT5faswRmNibkLe1nFlexYbT9I2ooKCq%2Fl%2By7viqBDnCfivP%2BpxIT4Lk%2FIA%2BmqQJM7ZxnF9sYGC2WhR3MEX4GA5oOronTUm7htq7dk2NpGlP0XsZGfDfMNmOwwfgFyAMgEVv9zpxLsjoFXjl9a0TYjHzEKgPB3UOxgHk1KoZRLXIft1KYDDOrYu%2BBjqkAV2UwNwVLpKJ4qgWkYNbx%2BA6U7%2FQff8X%2BpHbm6TTltQwzcimILu78JmcKA6JNznIRkdZxDix2pESPSKmZb%2BCEu1dUCMAAovfQf%2BStfUlWpWBEm3jo4mrYAxPptomyM0tR3fEBfMXLN0xSG%2B7HmNXcURO1VeVXwJQpQxo840qvw2NGJfXXB7jShANEEZDNpnjHUr10mUcAYpGUf3EGiM3ngRUhupq&X-Amz-Signature=b8abd8a8743f0fa8219c9f8e13f1f725d950d368b07ff86cccec03461a2fcfaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJZIVHO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2Ff4Qch8rvQch7ASsIK9%2B7JZUuTc%2BY%2FGraJu4MZbz1yAIhAPP70QMeUizI4K2r%2FVEikSQ953tAO9HFUsQcqwaJcipwKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWmszN3mKu0mfcmfYq3APFQ1AtayvdAdoYUJfl5Zbnc6E%2BhTPTfs2KOQzsSj2b7ARWa8bkyvIYtChvANIPnOw7OLScSPKaG%2B6o7UUbDyRwFITiw8%2FOC2gj3yjsmNjTeDXjB%2F2Im3G6PaS1uPxY6oCzcSkrYdZy0d80Wwv4vZNkNWm9MkLvBFsqFOQq4nvW0y2%2Bgpgkku7rRiZIJ%2BJahxLutccjUnvA3RN7sq6Z7W4Md7jdUmA0onDn3nc4X58AAgF1FaP5cE2YTloisQXIm7f3lJSGqsDSKoLmgTDjpJgwqaTKOmFKPZXc980%2B0mV9SPSXyEh6Vt9Yeu%2FkKO0cUfY8NH82LZRZEEJg9JXNefGqH50YeugJtxzUkYyoeKZ42GNfViIlNO6UX9Hqj7iJQ%2FXssLsYt7A6rGwl2VJ1UIa3XgT7PcgUNaoW6nIn80iBLisQQpch5X6OTD%2BjG9YbXLiH4HIyR8CmaT5faswRmNibkLe1nFlexYbT9I2ooKCq%2Fl%2By7viqBDnCfivP%2BpxIT4Lk%2FIA%2BmqQJM7ZxnF9sYGC2WhR3MEX4GA5oOronTUm7htq7dk2NpGlP0XsZGfDfMNmOwwfgFyAMgEVv9zpxLsjoFXjl9a0TYjHzEKgPB3UOxgHk1KoZRLXIft1KYDDOrYu%2BBjqkAV2UwNwVLpKJ4qgWkYNbx%2BA6U7%2FQff8X%2BpHbm6TTltQwzcimILu78JmcKA6JNznIRkdZxDix2pESPSKmZb%2BCEu1dUCMAAovfQf%2BStfUlWpWBEm3jo4mrYAxPptomyM0tR3fEBfMXLN0xSG%2B7HmNXcURO1VeVXwJQpQxo840qvw2NGJfXXB7jShANEEZDNpnjHUr10mUcAYpGUf3EGiM3ngRUhupq&X-Amz-Signature=7ba4ecf772e53ef6dd6d5e2c4b452250a19643e7745d7e385c44fa05015e66ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
