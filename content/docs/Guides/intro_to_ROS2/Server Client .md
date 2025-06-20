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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX36JGBB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjfDjBhzomA%2F4GTwfVoKMP%2BI204mKCrj602VXR9ZtYNgIgEhn%2FC7bxREOnepgsTxH7ZMexNIcfHJhzWgTLfbB%2B7R4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXbDKOzDUBzVvw6qCrcA0FBTLLbwAr1SsAZN5QDZxmmwd6fKWK%2FeXSfufeS85eY928QLKOD0gICefqiRbqIfPR%2BJypPeN7n10VjU4OGDDiQr0tyNnXB4ICQysXNBxPK6F4Tx1OHbtynoNev6UcTYREHBk2uXL0mIoFleL5H8UYuih8h6pue%2FiEVilspTpcvq39wVPDYXeouf5Y8sI%2FreOxViI6EEjXIWP%2BwpLwYY52tGx5BTcwUK%2FfOiJ%2B8E1J9eMiRh6JG9%2BSzAA0VGEqKVrgAMGEe%2FnvrrKWS7uor47F3J%2FkpmtymHCc7awMnEaRCfBPbiZWco58NsbKiKTxVVBb3OQGDxE8KBL8Q3dgciTaEEVG%2FSf%2B2LSk78Z2pqJ4zQNHLpzg%2BV7OGrOeFQxcc1psLptO3Om72MIRR1Zy5LJGWXmUlt1TzKIVpedSLfJeYIvRkfBx2v0RwbX0kNPVnM2Isu1eIn6O4mwHQnTmKUXyxcVPRgf5Chv%2FcztbfYUwWgironkn302t599O4Y0GDHhrkZ5BGgHlCYITkC%2Bte7UGrc2ziP9srhdIwrRS7U64ahJxmGammKeeTTHXwTx59JPiPoYPm%2Fm4DkYyau3uGJ%2FbxA%2F%2FA3lSHvBMRwZUwMl%2BALkrrxvrKVFHtKynGMJ6z1sIGOqUBM5TToJgSwIk2iRk7E1SWEGIxU4FdNnWiQMjc3bg2DZ8i5ZcVoQewW37O2Aobl0TMFdhw6nCDy4MG0%2BuN1i7GbBFbYmQfRBvBLKNz89x84OEKh1u0LNxORcq4pophXIravKVchyqYbTbzEPmCLp7LmD87HWzf4xYsKf3hVRjn7WxelPEWkhYhRc%2F8cu2MATNF0wt82zb1WIzLk3K%2FJBRLoIo7y8nN&X-Amz-Signature=e37e059e05317f2239ced17ff0866ab095be5b17a13599cc700581550745e038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX36JGBB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjfDjBhzomA%2F4GTwfVoKMP%2BI204mKCrj602VXR9ZtYNgIgEhn%2FC7bxREOnepgsTxH7ZMexNIcfHJhzWgTLfbB%2B7R4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXbDKOzDUBzVvw6qCrcA0FBTLLbwAr1SsAZN5QDZxmmwd6fKWK%2FeXSfufeS85eY928QLKOD0gICefqiRbqIfPR%2BJypPeN7n10VjU4OGDDiQr0tyNnXB4ICQysXNBxPK6F4Tx1OHbtynoNev6UcTYREHBk2uXL0mIoFleL5H8UYuih8h6pue%2FiEVilspTpcvq39wVPDYXeouf5Y8sI%2FreOxViI6EEjXIWP%2BwpLwYY52tGx5BTcwUK%2FfOiJ%2B8E1J9eMiRh6JG9%2BSzAA0VGEqKVrgAMGEe%2FnvrrKWS7uor47F3J%2FkpmtymHCc7awMnEaRCfBPbiZWco58NsbKiKTxVVBb3OQGDxE8KBL8Q3dgciTaEEVG%2FSf%2B2LSk78Z2pqJ4zQNHLpzg%2BV7OGrOeFQxcc1psLptO3Om72MIRR1Zy5LJGWXmUlt1TzKIVpedSLfJeYIvRkfBx2v0RwbX0kNPVnM2Isu1eIn6O4mwHQnTmKUXyxcVPRgf5Chv%2FcztbfYUwWgironkn302t599O4Y0GDHhrkZ5BGgHlCYITkC%2Bte7UGrc2ziP9srhdIwrRS7U64ahJxmGammKeeTTHXwTx59JPiPoYPm%2Fm4DkYyau3uGJ%2FbxA%2F%2FA3lSHvBMRwZUwMl%2BALkrrxvrKVFHtKynGMJ6z1sIGOqUBM5TToJgSwIk2iRk7E1SWEGIxU4FdNnWiQMjc3bg2DZ8i5ZcVoQewW37O2Aobl0TMFdhw6nCDy4MG0%2BuN1i7GbBFbYmQfRBvBLKNz89x84OEKh1u0LNxORcq4pophXIravKVchyqYbTbzEPmCLp7LmD87HWzf4xYsKf3hVRjn7WxelPEWkhYhRc%2F8cu2MATNF0wt82zb1WIzLk3K%2FJBRLoIo7y8nN&X-Amz-Signature=666bcaa2d925f1354639a4705d03d9afba271efe7476cdc019c08a65b82577a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX36JGBB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjfDjBhzomA%2F4GTwfVoKMP%2BI204mKCrj602VXR9ZtYNgIgEhn%2FC7bxREOnepgsTxH7ZMexNIcfHJhzWgTLfbB%2B7R4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXbDKOzDUBzVvw6qCrcA0FBTLLbwAr1SsAZN5QDZxmmwd6fKWK%2FeXSfufeS85eY928QLKOD0gICefqiRbqIfPR%2BJypPeN7n10VjU4OGDDiQr0tyNnXB4ICQysXNBxPK6F4Tx1OHbtynoNev6UcTYREHBk2uXL0mIoFleL5H8UYuih8h6pue%2FiEVilspTpcvq39wVPDYXeouf5Y8sI%2FreOxViI6EEjXIWP%2BwpLwYY52tGx5BTcwUK%2FfOiJ%2B8E1J9eMiRh6JG9%2BSzAA0VGEqKVrgAMGEe%2FnvrrKWS7uor47F3J%2FkpmtymHCc7awMnEaRCfBPbiZWco58NsbKiKTxVVBb3OQGDxE8KBL8Q3dgciTaEEVG%2FSf%2B2LSk78Z2pqJ4zQNHLpzg%2BV7OGrOeFQxcc1psLptO3Om72MIRR1Zy5LJGWXmUlt1TzKIVpedSLfJeYIvRkfBx2v0RwbX0kNPVnM2Isu1eIn6O4mwHQnTmKUXyxcVPRgf5Chv%2FcztbfYUwWgironkn302t599O4Y0GDHhrkZ5BGgHlCYITkC%2Bte7UGrc2ziP9srhdIwrRS7U64ahJxmGammKeeTTHXwTx59JPiPoYPm%2Fm4DkYyau3uGJ%2FbxA%2F%2FA3lSHvBMRwZUwMl%2BALkrrxvrKVFHtKynGMJ6z1sIGOqUBM5TToJgSwIk2iRk7E1SWEGIxU4FdNnWiQMjc3bg2DZ8i5ZcVoQewW37O2Aobl0TMFdhw6nCDy4MG0%2BuN1i7GbBFbYmQfRBvBLKNz89x84OEKh1u0LNxORcq4pophXIravKVchyqYbTbzEPmCLp7LmD87HWzf4xYsKf3hVRjn7WxelPEWkhYhRc%2F8cu2MATNF0wt82zb1WIzLk3K%2FJBRLoIo7y8nN&X-Amz-Signature=de92e9ac560cd74faf4b7915480c99ce19c7e1b68b67e74f6099fe8936934f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX36JGBB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjfDjBhzomA%2F4GTwfVoKMP%2BI204mKCrj602VXR9ZtYNgIgEhn%2FC7bxREOnepgsTxH7ZMexNIcfHJhzWgTLfbB%2B7R4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXbDKOzDUBzVvw6qCrcA0FBTLLbwAr1SsAZN5QDZxmmwd6fKWK%2FeXSfufeS85eY928QLKOD0gICefqiRbqIfPR%2BJypPeN7n10VjU4OGDDiQr0tyNnXB4ICQysXNBxPK6F4Tx1OHbtynoNev6UcTYREHBk2uXL0mIoFleL5H8UYuih8h6pue%2FiEVilspTpcvq39wVPDYXeouf5Y8sI%2FreOxViI6EEjXIWP%2BwpLwYY52tGx5BTcwUK%2FfOiJ%2B8E1J9eMiRh6JG9%2BSzAA0VGEqKVrgAMGEe%2FnvrrKWS7uor47F3J%2FkpmtymHCc7awMnEaRCfBPbiZWco58NsbKiKTxVVBb3OQGDxE8KBL8Q3dgciTaEEVG%2FSf%2B2LSk78Z2pqJ4zQNHLpzg%2BV7OGrOeFQxcc1psLptO3Om72MIRR1Zy5LJGWXmUlt1TzKIVpedSLfJeYIvRkfBx2v0RwbX0kNPVnM2Isu1eIn6O4mwHQnTmKUXyxcVPRgf5Chv%2FcztbfYUwWgironkn302t599O4Y0GDHhrkZ5BGgHlCYITkC%2Bte7UGrc2ziP9srhdIwrRS7U64ahJxmGammKeeTTHXwTx59JPiPoYPm%2Fm4DkYyau3uGJ%2FbxA%2F%2FA3lSHvBMRwZUwMl%2BALkrrxvrKVFHtKynGMJ6z1sIGOqUBM5TToJgSwIk2iRk7E1SWEGIxU4FdNnWiQMjc3bg2DZ8i5ZcVoQewW37O2Aobl0TMFdhw6nCDy4MG0%2BuN1i7GbBFbYmQfRBvBLKNz89x84OEKh1u0LNxORcq4pophXIravKVchyqYbTbzEPmCLp7LmD87HWzf4xYsKf3hVRjn7WxelPEWkhYhRc%2F8cu2MATNF0wt82zb1WIzLk3K%2FJBRLoIo7y8nN&X-Amz-Signature=2304aad50199ee79f86b00b13e9d25bd55db8b49ffcb46212b9c523b41842867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX36JGBB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjfDjBhzomA%2F4GTwfVoKMP%2BI204mKCrj602VXR9ZtYNgIgEhn%2FC7bxREOnepgsTxH7ZMexNIcfHJhzWgTLfbB%2B7R4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXbDKOzDUBzVvw6qCrcA0FBTLLbwAr1SsAZN5QDZxmmwd6fKWK%2FeXSfufeS85eY928QLKOD0gICefqiRbqIfPR%2BJypPeN7n10VjU4OGDDiQr0tyNnXB4ICQysXNBxPK6F4Tx1OHbtynoNev6UcTYREHBk2uXL0mIoFleL5H8UYuih8h6pue%2FiEVilspTpcvq39wVPDYXeouf5Y8sI%2FreOxViI6EEjXIWP%2BwpLwYY52tGx5BTcwUK%2FfOiJ%2B8E1J9eMiRh6JG9%2BSzAA0VGEqKVrgAMGEe%2FnvrrKWS7uor47F3J%2FkpmtymHCc7awMnEaRCfBPbiZWco58NsbKiKTxVVBb3OQGDxE8KBL8Q3dgciTaEEVG%2FSf%2B2LSk78Z2pqJ4zQNHLpzg%2BV7OGrOeFQxcc1psLptO3Om72MIRR1Zy5LJGWXmUlt1TzKIVpedSLfJeYIvRkfBx2v0RwbX0kNPVnM2Isu1eIn6O4mwHQnTmKUXyxcVPRgf5Chv%2FcztbfYUwWgironkn302t599O4Y0GDHhrkZ5BGgHlCYITkC%2Bte7UGrc2ziP9srhdIwrRS7U64ahJxmGammKeeTTHXwTx59JPiPoYPm%2Fm4DkYyau3uGJ%2FbxA%2F%2FA3lSHvBMRwZUwMl%2BALkrrxvrKVFHtKynGMJ6z1sIGOqUBM5TToJgSwIk2iRk7E1SWEGIxU4FdNnWiQMjc3bg2DZ8i5ZcVoQewW37O2Aobl0TMFdhw6nCDy4MG0%2BuN1i7GbBFbYmQfRBvBLKNz89x84OEKh1u0LNxORcq4pophXIravKVchyqYbTbzEPmCLp7LmD87HWzf4xYsKf3hVRjn7WxelPEWkhYhRc%2F8cu2MATNF0wt82zb1WIzLk3K%2FJBRLoIo7y8nN&X-Amz-Signature=63e3d47c8d59a5e4548671bdaa885cc3eda6b1741352af2fded527bc34233301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
