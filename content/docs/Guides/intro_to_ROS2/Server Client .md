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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFHOPKQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIxFgUmKRZohaxg1GYQCsqqWD0enraoaO6U8P25lCZ6AiEAxQRAkWrM%2BOeQyoujCna9nYuzMRgLvpxvWlGoX%2FaTfD0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzKirAoixxvU%2FsjwyrcA9EpdwzA9s1sPVAAPZ%2F%2BeEMBZ5Me3F0KsUaZriMVTZIqGAuqnNXzh35C4KoyysrwXQG4D3voAFr21f%2FaE3pScHQItELbgOFzDObTkfVisQtrn8xw9NUFgIM0Ots2ZUXoqCsAz%2BJQoPS1DNWQ8UyZFxqxsVzVRgKKf%2BYufs%2FvuoGWOUkeCuZiLZmmpqqmI8paVtChQKf%2F1FGEX3MrHYnJPG3mQlP7TGRuqVVc27u5Isd6kejXqBsgtrRKKv14g5Bf4iIgcIWAtGMHOF5eoG7hapVGIPvpUIKONY9JCiBAD3NQe7CDo%2FlQKM6g2D6R2DPV3oho7tBTunXlOReQt5ek7f%2Fq6%2FBWbl6qdm5vAppq9kMEhQsPnDfqp7uqc4ZJ2QKxllowA4DipWW3U2g0AdUKS0XYir0AszngbXr6uskv4htnLJZ%2FoSbzj14lRW%2FIU42jXc%2FOanUY1qh%2B%2FxHZ8GV8osbzZNbe%2BidXEESKeopdsydGbj6EBO8o8YZWbF2f%2F%2FIJTG%2Bt1m0kCuyIEGREWo8DE0FjoK5XdYV%2B9l0GVT6HNpRkHV08GMIJTHCQaZXqf1r0TSl3j2kPoBICsUmsier4Fa3qBlsVrIv7eFaTkNN9%2F2SoNlzX5RNMywq0nRNCMPndmsIGOqUBWiAGoRK3MNFz5elsO4bVFYx0jp8fqCzJ%2FE3qmsY49TtdBCh7BreaEXLNLdU80aUBMJicj4BVCFwiUsWCY5Fyy6XvK4D0Q4DMhoAlfOxPpq6m9jvlE56u5jBXBKbGceAYwiT3QrZoKS%2FPk6TYz2lnhwsl9R%2ByyU9Ozu%2FlG3tGIOp66o70yORQ12kmD3SIDsLgL3MMDGUIuMEHnxidRXOsbPeFgrlV&X-Amz-Signature=d835803657cf1bda4dbee82a94434090d3c75133ca4fdd074fc3ee444ec9daf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFHOPKQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIxFgUmKRZohaxg1GYQCsqqWD0enraoaO6U8P25lCZ6AiEAxQRAkWrM%2BOeQyoujCna9nYuzMRgLvpxvWlGoX%2FaTfD0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzKirAoixxvU%2FsjwyrcA9EpdwzA9s1sPVAAPZ%2F%2BeEMBZ5Me3F0KsUaZriMVTZIqGAuqnNXzh35C4KoyysrwXQG4D3voAFr21f%2FaE3pScHQItELbgOFzDObTkfVisQtrn8xw9NUFgIM0Ots2ZUXoqCsAz%2BJQoPS1DNWQ8UyZFxqxsVzVRgKKf%2BYufs%2FvuoGWOUkeCuZiLZmmpqqmI8paVtChQKf%2F1FGEX3MrHYnJPG3mQlP7TGRuqVVc27u5Isd6kejXqBsgtrRKKv14g5Bf4iIgcIWAtGMHOF5eoG7hapVGIPvpUIKONY9JCiBAD3NQe7CDo%2FlQKM6g2D6R2DPV3oho7tBTunXlOReQt5ek7f%2Fq6%2FBWbl6qdm5vAppq9kMEhQsPnDfqp7uqc4ZJ2QKxllowA4DipWW3U2g0AdUKS0XYir0AszngbXr6uskv4htnLJZ%2FoSbzj14lRW%2FIU42jXc%2FOanUY1qh%2B%2FxHZ8GV8osbzZNbe%2BidXEESKeopdsydGbj6EBO8o8YZWbF2f%2F%2FIJTG%2Bt1m0kCuyIEGREWo8DE0FjoK5XdYV%2B9l0GVT6HNpRkHV08GMIJTHCQaZXqf1r0TSl3j2kPoBICsUmsier4Fa3qBlsVrIv7eFaTkNN9%2F2SoNlzX5RNMywq0nRNCMPndmsIGOqUBWiAGoRK3MNFz5elsO4bVFYx0jp8fqCzJ%2FE3qmsY49TtdBCh7BreaEXLNLdU80aUBMJicj4BVCFwiUsWCY5Fyy6XvK4D0Q4DMhoAlfOxPpq6m9jvlE56u5jBXBKbGceAYwiT3QrZoKS%2FPk6TYz2lnhwsl9R%2ByyU9Ozu%2FlG3tGIOp66o70yORQ12kmD3SIDsLgL3MMDGUIuMEHnxidRXOsbPeFgrlV&X-Amz-Signature=8c6902c638945533910dc036b293c602ace1c2271f43e0f00767d393bc2302bd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFHOPKQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIxFgUmKRZohaxg1GYQCsqqWD0enraoaO6U8P25lCZ6AiEAxQRAkWrM%2BOeQyoujCna9nYuzMRgLvpxvWlGoX%2FaTfD0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzKirAoixxvU%2FsjwyrcA9EpdwzA9s1sPVAAPZ%2F%2BeEMBZ5Me3F0KsUaZriMVTZIqGAuqnNXzh35C4KoyysrwXQG4D3voAFr21f%2FaE3pScHQItELbgOFzDObTkfVisQtrn8xw9NUFgIM0Ots2ZUXoqCsAz%2BJQoPS1DNWQ8UyZFxqxsVzVRgKKf%2BYufs%2FvuoGWOUkeCuZiLZmmpqqmI8paVtChQKf%2F1FGEX3MrHYnJPG3mQlP7TGRuqVVc27u5Isd6kejXqBsgtrRKKv14g5Bf4iIgcIWAtGMHOF5eoG7hapVGIPvpUIKONY9JCiBAD3NQe7CDo%2FlQKM6g2D6R2DPV3oho7tBTunXlOReQt5ek7f%2Fq6%2FBWbl6qdm5vAppq9kMEhQsPnDfqp7uqc4ZJ2QKxllowA4DipWW3U2g0AdUKS0XYir0AszngbXr6uskv4htnLJZ%2FoSbzj14lRW%2FIU42jXc%2FOanUY1qh%2B%2FxHZ8GV8osbzZNbe%2BidXEESKeopdsydGbj6EBO8o8YZWbF2f%2F%2FIJTG%2Bt1m0kCuyIEGREWo8DE0FjoK5XdYV%2B9l0GVT6HNpRkHV08GMIJTHCQaZXqf1r0TSl3j2kPoBICsUmsier4Fa3qBlsVrIv7eFaTkNN9%2F2SoNlzX5RNMywq0nRNCMPndmsIGOqUBWiAGoRK3MNFz5elsO4bVFYx0jp8fqCzJ%2FE3qmsY49TtdBCh7BreaEXLNLdU80aUBMJicj4BVCFwiUsWCY5Fyy6XvK4D0Q4DMhoAlfOxPpq6m9jvlE56u5jBXBKbGceAYwiT3QrZoKS%2FPk6TYz2lnhwsl9R%2ByyU9Ozu%2FlG3tGIOp66o70yORQ12kmD3SIDsLgL3MMDGUIuMEHnxidRXOsbPeFgrlV&X-Amz-Signature=e55f87d30f0678f53677f76b6f5ebbe5803df6adb40c1062e38b06e150106275&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFHOPKQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIxFgUmKRZohaxg1GYQCsqqWD0enraoaO6U8P25lCZ6AiEAxQRAkWrM%2BOeQyoujCna9nYuzMRgLvpxvWlGoX%2FaTfD0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzKirAoixxvU%2FsjwyrcA9EpdwzA9s1sPVAAPZ%2F%2BeEMBZ5Me3F0KsUaZriMVTZIqGAuqnNXzh35C4KoyysrwXQG4D3voAFr21f%2FaE3pScHQItELbgOFzDObTkfVisQtrn8xw9NUFgIM0Ots2ZUXoqCsAz%2BJQoPS1DNWQ8UyZFxqxsVzVRgKKf%2BYufs%2FvuoGWOUkeCuZiLZmmpqqmI8paVtChQKf%2F1FGEX3MrHYnJPG3mQlP7TGRuqVVc27u5Isd6kejXqBsgtrRKKv14g5Bf4iIgcIWAtGMHOF5eoG7hapVGIPvpUIKONY9JCiBAD3NQe7CDo%2FlQKM6g2D6R2DPV3oho7tBTunXlOReQt5ek7f%2Fq6%2FBWbl6qdm5vAppq9kMEhQsPnDfqp7uqc4ZJ2QKxllowA4DipWW3U2g0AdUKS0XYir0AszngbXr6uskv4htnLJZ%2FoSbzj14lRW%2FIU42jXc%2FOanUY1qh%2B%2FxHZ8GV8osbzZNbe%2BidXEESKeopdsydGbj6EBO8o8YZWbF2f%2F%2FIJTG%2Bt1m0kCuyIEGREWo8DE0FjoK5XdYV%2B9l0GVT6HNpRkHV08GMIJTHCQaZXqf1r0TSl3j2kPoBICsUmsier4Fa3qBlsVrIv7eFaTkNN9%2F2SoNlzX5RNMywq0nRNCMPndmsIGOqUBWiAGoRK3MNFz5elsO4bVFYx0jp8fqCzJ%2FE3qmsY49TtdBCh7BreaEXLNLdU80aUBMJicj4BVCFwiUsWCY5Fyy6XvK4D0Q4DMhoAlfOxPpq6m9jvlE56u5jBXBKbGceAYwiT3QrZoKS%2FPk6TYz2lnhwsl9R%2ByyU9Ozu%2FlG3tGIOp66o70yORQ12kmD3SIDsLgL3MMDGUIuMEHnxidRXOsbPeFgrlV&X-Amz-Signature=e57d8052522184969d76d0b9c4ef8c48643cfc0a994703ed8dccceb39d3a3413&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFHOPKQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIxFgUmKRZohaxg1GYQCsqqWD0enraoaO6U8P25lCZ6AiEAxQRAkWrM%2BOeQyoujCna9nYuzMRgLvpxvWlGoX%2FaTfD0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzKirAoixxvU%2FsjwyrcA9EpdwzA9s1sPVAAPZ%2F%2BeEMBZ5Me3F0KsUaZriMVTZIqGAuqnNXzh35C4KoyysrwXQG4D3voAFr21f%2FaE3pScHQItELbgOFzDObTkfVisQtrn8xw9NUFgIM0Ots2ZUXoqCsAz%2BJQoPS1DNWQ8UyZFxqxsVzVRgKKf%2BYufs%2FvuoGWOUkeCuZiLZmmpqqmI8paVtChQKf%2F1FGEX3MrHYnJPG3mQlP7TGRuqVVc27u5Isd6kejXqBsgtrRKKv14g5Bf4iIgcIWAtGMHOF5eoG7hapVGIPvpUIKONY9JCiBAD3NQe7CDo%2FlQKM6g2D6R2DPV3oho7tBTunXlOReQt5ek7f%2Fq6%2FBWbl6qdm5vAppq9kMEhQsPnDfqp7uqc4ZJ2QKxllowA4DipWW3U2g0AdUKS0XYir0AszngbXr6uskv4htnLJZ%2FoSbzj14lRW%2FIU42jXc%2FOanUY1qh%2B%2FxHZ8GV8osbzZNbe%2BidXEESKeopdsydGbj6EBO8o8YZWbF2f%2F%2FIJTG%2Bt1m0kCuyIEGREWo8DE0FjoK5XdYV%2B9l0GVT6HNpRkHV08GMIJTHCQaZXqf1r0TSl3j2kPoBICsUmsier4Fa3qBlsVrIv7eFaTkNN9%2F2SoNlzX5RNMywq0nRNCMPndmsIGOqUBWiAGoRK3MNFz5elsO4bVFYx0jp8fqCzJ%2FE3qmsY49TtdBCh7BreaEXLNLdU80aUBMJicj4BVCFwiUsWCY5Fyy6XvK4D0Q4DMhoAlfOxPpq6m9jvlE56u5jBXBKbGceAYwiT3QrZoKS%2FPk6TYz2lnhwsl9R%2ByyU9Ozu%2FlG3tGIOp66o70yORQ12kmD3SIDsLgL3MMDGUIuMEHnxidRXOsbPeFgrlV&X-Amz-Signature=ba14821bb822a3a9704c1c633624e4e2cad5d494da51bb7aa2b013cdaaca34fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
