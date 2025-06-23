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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYJNLAQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDgKUWzcjqQUZ0G1C%2FEtO2KOjCZqMU8N2udj98ay%2BjlSAiEAm2X9LC3x751axJV3M2GGeb%2B6vEjD0Ni1pg%2F5zjcRGGYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8Y%2BuvRn%2FKj%2BRfl0SrcA24%2FNMq2PZHkRWftsBOenOsLnf%2FC%2Bl9t5Zdj2LUIqCF7F%2BQLN8QJpzQwzUKrc2tpm5uf0dkMDcwusHJzjWuuhnSVdVsnTQNB6PCpc3OwseXdWjuARRUCsrgdOoOXJDmN73IHboFKA9ZxTwjIYydPx4c54IcnwyuKVMW%2BPlz71TdlVvy2428AQjZeijY%2BlIzOIQ2gb1aZjWZ8NZLY5qpg8dVepss%2BlhE4xh3U3e9CI6kuZS5eqvSV6eXUrBQ9XaOH3CE9TgEFpVrhJ9Aykpm0V0FczLNd0FcmAD01nCrYTRZqSFRXd7JDkL4eoqPTS8DQSxmOR52k4Sk02nLvDZ0HxtPIqEXHzON7TW30fx0W%2BRZLlmCZM9fvl6ZctLCH4dienEAK9vbfJ9VrTdTtRt2kS9DysS9kgAbyy5s2M2HgtN9Euy3wtt6Seth5ZXVmWyEY2v8l%2FKYtTtaw4ienng8TXbAZgHgRT22OpPbCAMy3RBEU%2F4Hanbmj7LXIeKyKdUTXPhUfDZVwd%2B06J4e%2FKVYaadSFMFt6kNUNUCIOshj%2FkqD2gzIhGbScPAv0x8PXacItur2u%2Fu4XPxQMD6P7KzyfR4pX466STSwQQnWfcRkWQrAzq89dKYf5ZuEvlvhGMKSn4sIGOqUBE%2B00X2XWsR7gn7sk%2BRw4zxrtXo0ur3uK0jE1MJoPsn0kgSLnc%2FTAIR6KGZlQagUseQ1yWvTkrjdMbL3%2BiPo8UDOTZ6O4YPoM8ufxqBIrEAJ11kUJeLGdgwe1%2Bqrg%2FIWr%2Fi1UyJbsQk93EUBnA%2BcDkX%2FlIGzseiLOMX7eeycoLscV3SsnGtqSncOl2WNQ%2Bu%2BnhHTP1szcLXns7tMEb4WuaJlL4nCp&X-Amz-Signature=f45990f170bed75d131a48043e7b12c6c2f182376a1a83a790e682577fd8e04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYJNLAQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDgKUWzcjqQUZ0G1C%2FEtO2KOjCZqMU8N2udj98ay%2BjlSAiEAm2X9LC3x751axJV3M2GGeb%2B6vEjD0Ni1pg%2F5zjcRGGYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8Y%2BuvRn%2FKj%2BRfl0SrcA24%2FNMq2PZHkRWftsBOenOsLnf%2FC%2Bl9t5Zdj2LUIqCF7F%2BQLN8QJpzQwzUKrc2tpm5uf0dkMDcwusHJzjWuuhnSVdVsnTQNB6PCpc3OwseXdWjuARRUCsrgdOoOXJDmN73IHboFKA9ZxTwjIYydPx4c54IcnwyuKVMW%2BPlz71TdlVvy2428AQjZeijY%2BlIzOIQ2gb1aZjWZ8NZLY5qpg8dVepss%2BlhE4xh3U3e9CI6kuZS5eqvSV6eXUrBQ9XaOH3CE9TgEFpVrhJ9Aykpm0V0FczLNd0FcmAD01nCrYTRZqSFRXd7JDkL4eoqPTS8DQSxmOR52k4Sk02nLvDZ0HxtPIqEXHzON7TW30fx0W%2BRZLlmCZM9fvl6ZctLCH4dienEAK9vbfJ9VrTdTtRt2kS9DysS9kgAbyy5s2M2HgtN9Euy3wtt6Seth5ZXVmWyEY2v8l%2FKYtTtaw4ienng8TXbAZgHgRT22OpPbCAMy3RBEU%2F4Hanbmj7LXIeKyKdUTXPhUfDZVwd%2B06J4e%2FKVYaadSFMFt6kNUNUCIOshj%2FkqD2gzIhGbScPAv0x8PXacItur2u%2Fu4XPxQMD6P7KzyfR4pX466STSwQQnWfcRkWQrAzq89dKYf5ZuEvlvhGMKSn4sIGOqUBE%2B00X2XWsR7gn7sk%2BRw4zxrtXo0ur3uK0jE1MJoPsn0kgSLnc%2FTAIR6KGZlQagUseQ1yWvTkrjdMbL3%2BiPo8UDOTZ6O4YPoM8ufxqBIrEAJ11kUJeLGdgwe1%2Bqrg%2FIWr%2Fi1UyJbsQk93EUBnA%2BcDkX%2FlIGzseiLOMX7eeycoLscV3SsnGtqSncOl2WNQ%2Bu%2BnhHTP1szcLXns7tMEb4WuaJlL4nCp&X-Amz-Signature=858bc65595ff7e045721ef898b1597e84fe4fd39bfb3301d52278ce3a3a033b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYJNLAQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDgKUWzcjqQUZ0G1C%2FEtO2KOjCZqMU8N2udj98ay%2BjlSAiEAm2X9LC3x751axJV3M2GGeb%2B6vEjD0Ni1pg%2F5zjcRGGYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8Y%2BuvRn%2FKj%2BRfl0SrcA24%2FNMq2PZHkRWftsBOenOsLnf%2FC%2Bl9t5Zdj2LUIqCF7F%2BQLN8QJpzQwzUKrc2tpm5uf0dkMDcwusHJzjWuuhnSVdVsnTQNB6PCpc3OwseXdWjuARRUCsrgdOoOXJDmN73IHboFKA9ZxTwjIYydPx4c54IcnwyuKVMW%2BPlz71TdlVvy2428AQjZeijY%2BlIzOIQ2gb1aZjWZ8NZLY5qpg8dVepss%2BlhE4xh3U3e9CI6kuZS5eqvSV6eXUrBQ9XaOH3CE9TgEFpVrhJ9Aykpm0V0FczLNd0FcmAD01nCrYTRZqSFRXd7JDkL4eoqPTS8DQSxmOR52k4Sk02nLvDZ0HxtPIqEXHzON7TW30fx0W%2BRZLlmCZM9fvl6ZctLCH4dienEAK9vbfJ9VrTdTtRt2kS9DysS9kgAbyy5s2M2HgtN9Euy3wtt6Seth5ZXVmWyEY2v8l%2FKYtTtaw4ienng8TXbAZgHgRT22OpPbCAMy3RBEU%2F4Hanbmj7LXIeKyKdUTXPhUfDZVwd%2B06J4e%2FKVYaadSFMFt6kNUNUCIOshj%2FkqD2gzIhGbScPAv0x8PXacItur2u%2Fu4XPxQMD6P7KzyfR4pX466STSwQQnWfcRkWQrAzq89dKYf5ZuEvlvhGMKSn4sIGOqUBE%2B00X2XWsR7gn7sk%2BRw4zxrtXo0ur3uK0jE1MJoPsn0kgSLnc%2FTAIR6KGZlQagUseQ1yWvTkrjdMbL3%2BiPo8UDOTZ6O4YPoM8ufxqBIrEAJ11kUJeLGdgwe1%2Bqrg%2FIWr%2Fi1UyJbsQk93EUBnA%2BcDkX%2FlIGzseiLOMX7eeycoLscV3SsnGtqSncOl2WNQ%2Bu%2BnhHTP1szcLXns7tMEb4WuaJlL4nCp&X-Amz-Signature=4e22aebe136a48b3f4b364fda79e6e5377b580771d24f75f2c8de3a60a281941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYJNLAQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDgKUWzcjqQUZ0G1C%2FEtO2KOjCZqMU8N2udj98ay%2BjlSAiEAm2X9LC3x751axJV3M2GGeb%2B6vEjD0Ni1pg%2F5zjcRGGYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8Y%2BuvRn%2FKj%2BRfl0SrcA24%2FNMq2PZHkRWftsBOenOsLnf%2FC%2Bl9t5Zdj2LUIqCF7F%2BQLN8QJpzQwzUKrc2tpm5uf0dkMDcwusHJzjWuuhnSVdVsnTQNB6PCpc3OwseXdWjuARRUCsrgdOoOXJDmN73IHboFKA9ZxTwjIYydPx4c54IcnwyuKVMW%2BPlz71TdlVvy2428AQjZeijY%2BlIzOIQ2gb1aZjWZ8NZLY5qpg8dVepss%2BlhE4xh3U3e9CI6kuZS5eqvSV6eXUrBQ9XaOH3CE9TgEFpVrhJ9Aykpm0V0FczLNd0FcmAD01nCrYTRZqSFRXd7JDkL4eoqPTS8DQSxmOR52k4Sk02nLvDZ0HxtPIqEXHzON7TW30fx0W%2BRZLlmCZM9fvl6ZctLCH4dienEAK9vbfJ9VrTdTtRt2kS9DysS9kgAbyy5s2M2HgtN9Euy3wtt6Seth5ZXVmWyEY2v8l%2FKYtTtaw4ienng8TXbAZgHgRT22OpPbCAMy3RBEU%2F4Hanbmj7LXIeKyKdUTXPhUfDZVwd%2B06J4e%2FKVYaadSFMFt6kNUNUCIOshj%2FkqD2gzIhGbScPAv0x8PXacItur2u%2Fu4XPxQMD6P7KzyfR4pX466STSwQQnWfcRkWQrAzq89dKYf5ZuEvlvhGMKSn4sIGOqUBE%2B00X2XWsR7gn7sk%2BRw4zxrtXo0ur3uK0jE1MJoPsn0kgSLnc%2FTAIR6KGZlQagUseQ1yWvTkrjdMbL3%2BiPo8UDOTZ6O4YPoM8ufxqBIrEAJ11kUJeLGdgwe1%2Bqrg%2FIWr%2Fi1UyJbsQk93EUBnA%2BcDkX%2FlIGzseiLOMX7eeycoLscV3SsnGtqSncOl2WNQ%2Bu%2BnhHTP1szcLXns7tMEb4WuaJlL4nCp&X-Amz-Signature=4ad1184edf65be70c76a361277d30315ff1e80b6d44f46f76d1f61961c55c277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYJNLAQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDgKUWzcjqQUZ0G1C%2FEtO2KOjCZqMU8N2udj98ay%2BjlSAiEAm2X9LC3x751axJV3M2GGeb%2B6vEjD0Ni1pg%2F5zjcRGGYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8Y%2BuvRn%2FKj%2BRfl0SrcA24%2FNMq2PZHkRWftsBOenOsLnf%2FC%2Bl9t5Zdj2LUIqCF7F%2BQLN8QJpzQwzUKrc2tpm5uf0dkMDcwusHJzjWuuhnSVdVsnTQNB6PCpc3OwseXdWjuARRUCsrgdOoOXJDmN73IHboFKA9ZxTwjIYydPx4c54IcnwyuKVMW%2BPlz71TdlVvy2428AQjZeijY%2BlIzOIQ2gb1aZjWZ8NZLY5qpg8dVepss%2BlhE4xh3U3e9CI6kuZS5eqvSV6eXUrBQ9XaOH3CE9TgEFpVrhJ9Aykpm0V0FczLNd0FcmAD01nCrYTRZqSFRXd7JDkL4eoqPTS8DQSxmOR52k4Sk02nLvDZ0HxtPIqEXHzON7TW30fx0W%2BRZLlmCZM9fvl6ZctLCH4dienEAK9vbfJ9VrTdTtRt2kS9DysS9kgAbyy5s2M2HgtN9Euy3wtt6Seth5ZXVmWyEY2v8l%2FKYtTtaw4ienng8TXbAZgHgRT22OpPbCAMy3RBEU%2F4Hanbmj7LXIeKyKdUTXPhUfDZVwd%2B06J4e%2FKVYaadSFMFt6kNUNUCIOshj%2FkqD2gzIhGbScPAv0x8PXacItur2u%2Fu4XPxQMD6P7KzyfR4pX466STSwQQnWfcRkWQrAzq89dKYf5ZuEvlvhGMKSn4sIGOqUBE%2B00X2XWsR7gn7sk%2BRw4zxrtXo0ur3uK0jE1MJoPsn0kgSLnc%2FTAIR6KGZlQagUseQ1yWvTkrjdMbL3%2BiPo8UDOTZ6O4YPoM8ufxqBIrEAJ11kUJeLGdgwe1%2Bqrg%2FIWr%2Fi1UyJbsQk93EUBnA%2BcDkX%2FlIGzseiLOMX7eeycoLscV3SsnGtqSncOl2WNQ%2Bu%2BnhHTP1szcLXns7tMEb4WuaJlL4nCp&X-Amz-Signature=1b25ee952b9b525807864a68b15914c04bf4ba3764a7e533aab6db8954e6eb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
