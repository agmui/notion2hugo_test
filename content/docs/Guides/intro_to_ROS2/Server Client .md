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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZO6R4TX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNzyywaa9hfjCeNOuPcVHBaGLLMS4T6kBs%2B4DgxtSJJwIgROPpJQEaPQaV1TRIdYhkAQdY%2FCfysphs4upKCyXMEM4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO7rupYbTAnGpOYX1SrcA6dfRhjUmUP62lPC%2BNh%2Fh3GEWPmwu3MNioz8ywb1iuk%2B5N6xRg8MikcOdnClGhTfYTGHtTIX52tsiF%2BQD2O%2B7Zb%2FhxQQLfs3uxPzoYkyLWAOodRq16gDM%2FAulz%2BAG0eHPIXpV30bZsqW4zRXPfOcdO2IzJYBET0T9SVdLVc1gZ0ixYusK6HLATSg%2B4glhCUD6MSHqCCH9tADpGreTrnvBixTCe8ycZhe2opeB%2FcrjUFufh74s5X30q1h%2FcSDnHqQDvrVFPTsrTRxg3es7aihovCxMQlL57hmH1wEXV8SYy4KoFeKaL%2BDI42j8d%2FIpiBWEpCqmCPlqjF1mDoo7p%2FoW21NXimGWsiQZXYQ7%2B8ERI28zzPKP4da4ObkLxjKQ%2B2O1kD%2BoFVtpS%2BHp1PB%2FPRFofGXSQj3GpUg3br9kfgwgChXaKOeJGtBQiFOoj8yCiiR4HYdrkPDvTl4y3B9EPH1%2BHS0aSI3WxX3mhSDNMTRFD45qjHRbPYQi%2FHY8%2BFAS7Ws%2FG6FluH2xJMtX8kxpPQxA4orrdbng%2Bm%2BLut0z7HH0ewYPCPvAsRYA0tQSV%2BYZVx6m42%2FGda8DPUC1fLPWHSFjY4Ovd5WDZ7VqogX4WpjwV4w6SgBhTx8KLSKG%2BkSMOPupsEGOqUBC2Zn4KgvwcaZme%2B3fenPEoDWlEsc%2Fko25C7zpO%2FH1JGF94dZHLqtYGXzqkANRp9q8eBgVrKM7FbBZcshf%2B6sG4NxZCLXcN8wrevHZoeuSZ7Cqx9qmIkIBqMgtmfZu6RGjLj34bNHnngDqtGVIiMNnapUhhrotx45ttrBr%2BCoVNhcz7bCNduecAJIuf8uovun81gDrj29JBwqZSh0mNIr91PsXJDu&X-Amz-Signature=c16be04b5e4729931e966111b9a240f7ee81061ba649748f4c9850e61efe3ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZO6R4TX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNzyywaa9hfjCeNOuPcVHBaGLLMS4T6kBs%2B4DgxtSJJwIgROPpJQEaPQaV1TRIdYhkAQdY%2FCfysphs4upKCyXMEM4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO7rupYbTAnGpOYX1SrcA6dfRhjUmUP62lPC%2BNh%2Fh3GEWPmwu3MNioz8ywb1iuk%2B5N6xRg8MikcOdnClGhTfYTGHtTIX52tsiF%2BQD2O%2B7Zb%2FhxQQLfs3uxPzoYkyLWAOodRq16gDM%2FAulz%2BAG0eHPIXpV30bZsqW4zRXPfOcdO2IzJYBET0T9SVdLVc1gZ0ixYusK6HLATSg%2B4glhCUD6MSHqCCH9tADpGreTrnvBixTCe8ycZhe2opeB%2FcrjUFufh74s5X30q1h%2FcSDnHqQDvrVFPTsrTRxg3es7aihovCxMQlL57hmH1wEXV8SYy4KoFeKaL%2BDI42j8d%2FIpiBWEpCqmCPlqjF1mDoo7p%2FoW21NXimGWsiQZXYQ7%2B8ERI28zzPKP4da4ObkLxjKQ%2B2O1kD%2BoFVtpS%2BHp1PB%2FPRFofGXSQj3GpUg3br9kfgwgChXaKOeJGtBQiFOoj8yCiiR4HYdrkPDvTl4y3B9EPH1%2BHS0aSI3WxX3mhSDNMTRFD45qjHRbPYQi%2FHY8%2BFAS7Ws%2FG6FluH2xJMtX8kxpPQxA4orrdbng%2Bm%2BLut0z7HH0ewYPCPvAsRYA0tQSV%2BYZVx6m42%2FGda8DPUC1fLPWHSFjY4Ovd5WDZ7VqogX4WpjwV4w6SgBhTx8KLSKG%2BkSMOPupsEGOqUBC2Zn4KgvwcaZme%2B3fenPEoDWlEsc%2Fko25C7zpO%2FH1JGF94dZHLqtYGXzqkANRp9q8eBgVrKM7FbBZcshf%2B6sG4NxZCLXcN8wrevHZoeuSZ7Cqx9qmIkIBqMgtmfZu6RGjLj34bNHnngDqtGVIiMNnapUhhrotx45ttrBr%2BCoVNhcz7bCNduecAJIuf8uovun81gDrj29JBwqZSh0mNIr91PsXJDu&X-Amz-Signature=a6aff09f8e78f5886bfcebdbdc827620a70dbeca0946d9ab0a7f7d42ee48bf72&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZO6R4TX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNzyywaa9hfjCeNOuPcVHBaGLLMS4T6kBs%2B4DgxtSJJwIgROPpJQEaPQaV1TRIdYhkAQdY%2FCfysphs4upKCyXMEM4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO7rupYbTAnGpOYX1SrcA6dfRhjUmUP62lPC%2BNh%2Fh3GEWPmwu3MNioz8ywb1iuk%2B5N6xRg8MikcOdnClGhTfYTGHtTIX52tsiF%2BQD2O%2B7Zb%2FhxQQLfs3uxPzoYkyLWAOodRq16gDM%2FAulz%2BAG0eHPIXpV30bZsqW4zRXPfOcdO2IzJYBET0T9SVdLVc1gZ0ixYusK6HLATSg%2B4glhCUD6MSHqCCH9tADpGreTrnvBixTCe8ycZhe2opeB%2FcrjUFufh74s5X30q1h%2FcSDnHqQDvrVFPTsrTRxg3es7aihovCxMQlL57hmH1wEXV8SYy4KoFeKaL%2BDI42j8d%2FIpiBWEpCqmCPlqjF1mDoo7p%2FoW21NXimGWsiQZXYQ7%2B8ERI28zzPKP4da4ObkLxjKQ%2B2O1kD%2BoFVtpS%2BHp1PB%2FPRFofGXSQj3GpUg3br9kfgwgChXaKOeJGtBQiFOoj8yCiiR4HYdrkPDvTl4y3B9EPH1%2BHS0aSI3WxX3mhSDNMTRFD45qjHRbPYQi%2FHY8%2BFAS7Ws%2FG6FluH2xJMtX8kxpPQxA4orrdbng%2Bm%2BLut0z7HH0ewYPCPvAsRYA0tQSV%2BYZVx6m42%2FGda8DPUC1fLPWHSFjY4Ovd5WDZ7VqogX4WpjwV4w6SgBhTx8KLSKG%2BkSMOPupsEGOqUBC2Zn4KgvwcaZme%2B3fenPEoDWlEsc%2Fko25C7zpO%2FH1JGF94dZHLqtYGXzqkANRp9q8eBgVrKM7FbBZcshf%2B6sG4NxZCLXcN8wrevHZoeuSZ7Cqx9qmIkIBqMgtmfZu6RGjLj34bNHnngDqtGVIiMNnapUhhrotx45ttrBr%2BCoVNhcz7bCNduecAJIuf8uovun81gDrj29JBwqZSh0mNIr91PsXJDu&X-Amz-Signature=76904776cba215c34869e4ca626e3de0d5214ac75dd806d70544386649da1d79&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZO6R4TX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNzyywaa9hfjCeNOuPcVHBaGLLMS4T6kBs%2B4DgxtSJJwIgROPpJQEaPQaV1TRIdYhkAQdY%2FCfysphs4upKCyXMEM4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO7rupYbTAnGpOYX1SrcA6dfRhjUmUP62lPC%2BNh%2Fh3GEWPmwu3MNioz8ywb1iuk%2B5N6xRg8MikcOdnClGhTfYTGHtTIX52tsiF%2BQD2O%2B7Zb%2FhxQQLfs3uxPzoYkyLWAOodRq16gDM%2FAulz%2BAG0eHPIXpV30bZsqW4zRXPfOcdO2IzJYBET0T9SVdLVc1gZ0ixYusK6HLATSg%2B4glhCUD6MSHqCCH9tADpGreTrnvBixTCe8ycZhe2opeB%2FcrjUFufh74s5X30q1h%2FcSDnHqQDvrVFPTsrTRxg3es7aihovCxMQlL57hmH1wEXV8SYy4KoFeKaL%2BDI42j8d%2FIpiBWEpCqmCPlqjF1mDoo7p%2FoW21NXimGWsiQZXYQ7%2B8ERI28zzPKP4da4ObkLxjKQ%2B2O1kD%2BoFVtpS%2BHp1PB%2FPRFofGXSQj3GpUg3br9kfgwgChXaKOeJGtBQiFOoj8yCiiR4HYdrkPDvTl4y3B9EPH1%2BHS0aSI3WxX3mhSDNMTRFD45qjHRbPYQi%2FHY8%2BFAS7Ws%2FG6FluH2xJMtX8kxpPQxA4orrdbng%2Bm%2BLut0z7HH0ewYPCPvAsRYA0tQSV%2BYZVx6m42%2FGda8DPUC1fLPWHSFjY4Ovd5WDZ7VqogX4WpjwV4w6SgBhTx8KLSKG%2BkSMOPupsEGOqUBC2Zn4KgvwcaZme%2B3fenPEoDWlEsc%2Fko25C7zpO%2FH1JGF94dZHLqtYGXzqkANRp9q8eBgVrKM7FbBZcshf%2B6sG4NxZCLXcN8wrevHZoeuSZ7Cqx9qmIkIBqMgtmfZu6RGjLj34bNHnngDqtGVIiMNnapUhhrotx45ttrBr%2BCoVNhcz7bCNduecAJIuf8uovun81gDrj29JBwqZSh0mNIr91PsXJDu&X-Amz-Signature=f35f349559a2ce67beb2797caefda500a2831a85a6fe15eb2910d8002d0f984b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZO6R4TX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNzyywaa9hfjCeNOuPcVHBaGLLMS4T6kBs%2B4DgxtSJJwIgROPpJQEaPQaV1TRIdYhkAQdY%2FCfysphs4upKCyXMEM4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO7rupYbTAnGpOYX1SrcA6dfRhjUmUP62lPC%2BNh%2Fh3GEWPmwu3MNioz8ywb1iuk%2B5N6xRg8MikcOdnClGhTfYTGHtTIX52tsiF%2BQD2O%2B7Zb%2FhxQQLfs3uxPzoYkyLWAOodRq16gDM%2FAulz%2BAG0eHPIXpV30bZsqW4zRXPfOcdO2IzJYBET0T9SVdLVc1gZ0ixYusK6HLATSg%2B4glhCUD6MSHqCCH9tADpGreTrnvBixTCe8ycZhe2opeB%2FcrjUFufh74s5X30q1h%2FcSDnHqQDvrVFPTsrTRxg3es7aihovCxMQlL57hmH1wEXV8SYy4KoFeKaL%2BDI42j8d%2FIpiBWEpCqmCPlqjF1mDoo7p%2FoW21NXimGWsiQZXYQ7%2B8ERI28zzPKP4da4ObkLxjKQ%2B2O1kD%2BoFVtpS%2BHp1PB%2FPRFofGXSQj3GpUg3br9kfgwgChXaKOeJGtBQiFOoj8yCiiR4HYdrkPDvTl4y3B9EPH1%2BHS0aSI3WxX3mhSDNMTRFD45qjHRbPYQi%2FHY8%2BFAS7Ws%2FG6FluH2xJMtX8kxpPQxA4orrdbng%2Bm%2BLut0z7HH0ewYPCPvAsRYA0tQSV%2BYZVx6m42%2FGda8DPUC1fLPWHSFjY4Ovd5WDZ7VqogX4WpjwV4w6SgBhTx8KLSKG%2BkSMOPupsEGOqUBC2Zn4KgvwcaZme%2B3fenPEoDWlEsc%2Fko25C7zpO%2FH1JGF94dZHLqtYGXzqkANRp9q8eBgVrKM7FbBZcshf%2B6sG4NxZCLXcN8wrevHZoeuSZ7Cqx9qmIkIBqMgtmfZu6RGjLj34bNHnngDqtGVIiMNnapUhhrotx45ttrBr%2BCoVNhcz7bCNduecAJIuf8uovun81gDrj29JBwqZSh0mNIr91PsXJDu&X-Amz-Signature=146f71264272e34907b64c5691e9e7ca480600b5488a7dcce00322487707969e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
