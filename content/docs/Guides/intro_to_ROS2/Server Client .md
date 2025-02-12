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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPH75JO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO7UFWBfvl0xgpIQ4ttbJld3titLCnK7mTVUMkRAx1uAiArVFMDG%2BSd9YVr8ual1t1I02liK1j6K3KK%2FX%2Bn%2Bgv8gCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BV8%2FINXSTVr99UN3KtwDKMxhArhdD0ekhw1YNGDkC8igpuOvBU5k2mwfpV%2B3PzUioWq4LDQN8gZqlzRa6MO1owPe7CK%2BCEEFn2pjvWEZc2Vbu1TiGEMXphQ7A0Ckt8tzNSJfxdBx6YnrfadG0aelVonZnpaGzyCEt88xoZxAOZCTdoRp0B1QQT21tpcU3xlzsVn%2F6v3y1xx9sHgGUmSYZzopkdbrozxT402XiYaY2%2BhSBysn3OdGoB%2BiJ6Kb9RWa%2FgRXs%2BOF6QKK36WltWVE97otYhtS7oxwR2JVxQc7oEYoFXOfnh06TS4NvO6Ezg734Brs2sZq9CbZRibtcj4979a8wilzdk1uZhDsO7Whx1RZJJgrDyzgA6UzDUycwUkaJ5UgZ9ZYNIof1%2BZSC9aQ6CDRZsaxTKELgLs%2BLRinNijDsIqARHD%2FhpBugi3%2Bd8xBvSaCxX3DgFjQPm%2BCJ1%2FQpRL1oBvx8w1j5RUObaD5hFZk6nObIrRd43pF%2BycghPRuaMfWgLbcCcAQ2Ka8Orjo72enmzRz5HPS3ZCsWu76%2BbAK5VRfVNbU%2F0OXJ%2BcSS6Vb8ywvjD3d0pEv41SKk1Tx2WjmZ%2F4n%2B4Glx3D8Gohj%2FyM64iTdfI2GnVFf5I4a2iSl%2FtBaqt49IsWNNucwxKiyvQY6pgHEViE0V5F0i5t28zZsy6mDd3aEuqgytNVNDQ4S6rpFFW%2BAU%2FuKMT7EjZeiFZwrw%2BrvR6rHP2BV1%2B74QTMv1xulYUXCBLjqfzFYgL69ioSV%2B2M20Z3lJvzjPDyjlYnkFhqiClimoLXwXEdq9RyhZFGeKDeA%2BoYH0Nu8zeTPECucNHcx93rZ9aScHU9N10pZtRQhufipaDgT0rZNWmOidp8Q5hBpbA55&X-Amz-Signature=244e74222bcde43eff576a1bc2d32b2567528dc025777a283a2f4f20aca003f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPH75JO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO7UFWBfvl0xgpIQ4ttbJld3titLCnK7mTVUMkRAx1uAiArVFMDG%2BSd9YVr8ual1t1I02liK1j6K3KK%2FX%2Bn%2Bgv8gCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BV8%2FINXSTVr99UN3KtwDKMxhArhdD0ekhw1YNGDkC8igpuOvBU5k2mwfpV%2B3PzUioWq4LDQN8gZqlzRa6MO1owPe7CK%2BCEEFn2pjvWEZc2Vbu1TiGEMXphQ7A0Ckt8tzNSJfxdBx6YnrfadG0aelVonZnpaGzyCEt88xoZxAOZCTdoRp0B1QQT21tpcU3xlzsVn%2F6v3y1xx9sHgGUmSYZzopkdbrozxT402XiYaY2%2BhSBysn3OdGoB%2BiJ6Kb9RWa%2FgRXs%2BOF6QKK36WltWVE97otYhtS7oxwR2JVxQc7oEYoFXOfnh06TS4NvO6Ezg734Brs2sZq9CbZRibtcj4979a8wilzdk1uZhDsO7Whx1RZJJgrDyzgA6UzDUycwUkaJ5UgZ9ZYNIof1%2BZSC9aQ6CDRZsaxTKELgLs%2BLRinNijDsIqARHD%2FhpBugi3%2Bd8xBvSaCxX3DgFjQPm%2BCJ1%2FQpRL1oBvx8w1j5RUObaD5hFZk6nObIrRd43pF%2BycghPRuaMfWgLbcCcAQ2Ka8Orjo72enmzRz5HPS3ZCsWu76%2BbAK5VRfVNbU%2F0OXJ%2BcSS6Vb8ywvjD3d0pEv41SKk1Tx2WjmZ%2F4n%2B4Glx3D8Gohj%2FyM64iTdfI2GnVFf5I4a2iSl%2FtBaqt49IsWNNucwxKiyvQY6pgHEViE0V5F0i5t28zZsy6mDd3aEuqgytNVNDQ4S6rpFFW%2BAU%2FuKMT7EjZeiFZwrw%2BrvR6rHP2BV1%2B74QTMv1xulYUXCBLjqfzFYgL69ioSV%2B2M20Z3lJvzjPDyjlYnkFhqiClimoLXwXEdq9RyhZFGeKDeA%2BoYH0Nu8zeTPECucNHcx93rZ9aScHU9N10pZtRQhufipaDgT0rZNWmOidp8Q5hBpbA55&X-Amz-Signature=33551c6690850064d80c8a488d07fbc55036c29edfdcb342f26557423bcd10a7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPH75JO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO7UFWBfvl0xgpIQ4ttbJld3titLCnK7mTVUMkRAx1uAiArVFMDG%2BSd9YVr8ual1t1I02liK1j6K3KK%2FX%2Bn%2Bgv8gCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BV8%2FINXSTVr99UN3KtwDKMxhArhdD0ekhw1YNGDkC8igpuOvBU5k2mwfpV%2B3PzUioWq4LDQN8gZqlzRa6MO1owPe7CK%2BCEEFn2pjvWEZc2Vbu1TiGEMXphQ7A0Ckt8tzNSJfxdBx6YnrfadG0aelVonZnpaGzyCEt88xoZxAOZCTdoRp0B1QQT21tpcU3xlzsVn%2F6v3y1xx9sHgGUmSYZzopkdbrozxT402XiYaY2%2BhSBysn3OdGoB%2BiJ6Kb9RWa%2FgRXs%2BOF6QKK36WltWVE97otYhtS7oxwR2JVxQc7oEYoFXOfnh06TS4NvO6Ezg734Brs2sZq9CbZRibtcj4979a8wilzdk1uZhDsO7Whx1RZJJgrDyzgA6UzDUycwUkaJ5UgZ9ZYNIof1%2BZSC9aQ6CDRZsaxTKELgLs%2BLRinNijDsIqARHD%2FhpBugi3%2Bd8xBvSaCxX3DgFjQPm%2BCJ1%2FQpRL1oBvx8w1j5RUObaD5hFZk6nObIrRd43pF%2BycghPRuaMfWgLbcCcAQ2Ka8Orjo72enmzRz5HPS3ZCsWu76%2BbAK5VRfVNbU%2F0OXJ%2BcSS6Vb8ywvjD3d0pEv41SKk1Tx2WjmZ%2F4n%2B4Glx3D8Gohj%2FyM64iTdfI2GnVFf5I4a2iSl%2FtBaqt49IsWNNucwxKiyvQY6pgHEViE0V5F0i5t28zZsy6mDd3aEuqgytNVNDQ4S6rpFFW%2BAU%2FuKMT7EjZeiFZwrw%2BrvR6rHP2BV1%2B74QTMv1xulYUXCBLjqfzFYgL69ioSV%2B2M20Z3lJvzjPDyjlYnkFhqiClimoLXwXEdq9RyhZFGeKDeA%2BoYH0Nu8zeTPECucNHcx93rZ9aScHU9N10pZtRQhufipaDgT0rZNWmOidp8Q5hBpbA55&X-Amz-Signature=56ad93a0aabe9543211cde2b83d2b9a1231c226e2bf28ec55917165c031abf95&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPH75JO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO7UFWBfvl0xgpIQ4ttbJld3titLCnK7mTVUMkRAx1uAiArVFMDG%2BSd9YVr8ual1t1I02liK1j6K3KK%2FX%2Bn%2Bgv8gCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BV8%2FINXSTVr99UN3KtwDKMxhArhdD0ekhw1YNGDkC8igpuOvBU5k2mwfpV%2B3PzUioWq4LDQN8gZqlzRa6MO1owPe7CK%2BCEEFn2pjvWEZc2Vbu1TiGEMXphQ7A0Ckt8tzNSJfxdBx6YnrfadG0aelVonZnpaGzyCEt88xoZxAOZCTdoRp0B1QQT21tpcU3xlzsVn%2F6v3y1xx9sHgGUmSYZzopkdbrozxT402XiYaY2%2BhSBysn3OdGoB%2BiJ6Kb9RWa%2FgRXs%2BOF6QKK36WltWVE97otYhtS7oxwR2JVxQc7oEYoFXOfnh06TS4NvO6Ezg734Brs2sZq9CbZRibtcj4979a8wilzdk1uZhDsO7Whx1RZJJgrDyzgA6UzDUycwUkaJ5UgZ9ZYNIof1%2BZSC9aQ6CDRZsaxTKELgLs%2BLRinNijDsIqARHD%2FhpBugi3%2Bd8xBvSaCxX3DgFjQPm%2BCJ1%2FQpRL1oBvx8w1j5RUObaD5hFZk6nObIrRd43pF%2BycghPRuaMfWgLbcCcAQ2Ka8Orjo72enmzRz5HPS3ZCsWu76%2BbAK5VRfVNbU%2F0OXJ%2BcSS6Vb8ywvjD3d0pEv41SKk1Tx2WjmZ%2F4n%2B4Glx3D8Gohj%2FyM64iTdfI2GnVFf5I4a2iSl%2FtBaqt49IsWNNucwxKiyvQY6pgHEViE0V5F0i5t28zZsy6mDd3aEuqgytNVNDQ4S6rpFFW%2BAU%2FuKMT7EjZeiFZwrw%2BrvR6rHP2BV1%2B74QTMv1xulYUXCBLjqfzFYgL69ioSV%2B2M20Z3lJvzjPDyjlYnkFhqiClimoLXwXEdq9RyhZFGeKDeA%2BoYH0Nu8zeTPECucNHcx93rZ9aScHU9N10pZtRQhufipaDgT0rZNWmOidp8Q5hBpbA55&X-Amz-Signature=c3ebd3152d527802f8368f8413ac53f7063224eb7d74be739f6286abdc605b15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPH75JO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO7UFWBfvl0xgpIQ4ttbJld3titLCnK7mTVUMkRAx1uAiArVFMDG%2BSd9YVr8ual1t1I02liK1j6K3KK%2FX%2Bn%2Bgv8gCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BV8%2FINXSTVr99UN3KtwDKMxhArhdD0ekhw1YNGDkC8igpuOvBU5k2mwfpV%2B3PzUioWq4LDQN8gZqlzRa6MO1owPe7CK%2BCEEFn2pjvWEZc2Vbu1TiGEMXphQ7A0Ckt8tzNSJfxdBx6YnrfadG0aelVonZnpaGzyCEt88xoZxAOZCTdoRp0B1QQT21tpcU3xlzsVn%2F6v3y1xx9sHgGUmSYZzopkdbrozxT402XiYaY2%2BhSBysn3OdGoB%2BiJ6Kb9RWa%2FgRXs%2BOF6QKK36WltWVE97otYhtS7oxwR2JVxQc7oEYoFXOfnh06TS4NvO6Ezg734Brs2sZq9CbZRibtcj4979a8wilzdk1uZhDsO7Whx1RZJJgrDyzgA6UzDUycwUkaJ5UgZ9ZYNIof1%2BZSC9aQ6CDRZsaxTKELgLs%2BLRinNijDsIqARHD%2FhpBugi3%2Bd8xBvSaCxX3DgFjQPm%2BCJ1%2FQpRL1oBvx8w1j5RUObaD5hFZk6nObIrRd43pF%2BycghPRuaMfWgLbcCcAQ2Ka8Orjo72enmzRz5HPS3ZCsWu76%2BbAK5VRfVNbU%2F0OXJ%2BcSS6Vb8ywvjD3d0pEv41SKk1Tx2WjmZ%2F4n%2B4Glx3D8Gohj%2FyM64iTdfI2GnVFf5I4a2iSl%2FtBaqt49IsWNNucwxKiyvQY6pgHEViE0V5F0i5t28zZsy6mDd3aEuqgytNVNDQ4S6rpFFW%2BAU%2FuKMT7EjZeiFZwrw%2BrvR6rHP2BV1%2B74QTMv1xulYUXCBLjqfzFYgL69ioSV%2B2M20Z3lJvzjPDyjlYnkFhqiClimoLXwXEdq9RyhZFGeKDeA%2BoYH0Nu8zeTPECucNHcx93rZ9aScHU9N10pZtRQhufipaDgT0rZNWmOidp8Q5hBpbA55&X-Amz-Signature=8cf9cbdc294f261ac6b4bcfc4ae3ab41152d7d6aa85f99c969cf5c24edc7a0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
