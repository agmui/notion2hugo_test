---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6MN7KB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGAsDyZeBTqBX3ypDxuanAbtqznHC19gYInd2oivAWPlAiAVw9OAWqBiuQr8L%2BRHAambqMRJSEzhxtljDYAK6D5%2BuCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ7Erc3z9dNfARzdLKtwDyYP86UISc%2FeGzGG36m3jeS9ZTJ8F8rPRUOt%2FZ00%2FczDP1WMEhS3s3%2FuZdOuuyeFfg81ehQNKbmJhM6oaFHQWKWriL103M%2BWs5lkVdmmcns%2Brub7rqQ0gFLVqL3egdiD0uU3cuZVRldJwJ%2BvihFiFHE1qkvj2Y2oYUalw7ZoahixlH%2FMvUm2rMypRQI%2F48Wv9wIEY9CVqIXb%2FiGWqCo%2B9RBD9qW4NjIfJR5BP4D2XuVMjIIA9F%2FsN7R7Yc%2Fp99GPR9ZGwuvfE5yF%2B9oCrOgW2bizdqikRMk0JyKtjypK5lOl%2FRPllrboUl3ufkKK0yXRTUO6ZCXyr4p3u%2FOf731ceR%2FOfBlld%2BmXrz%2FojgjtjDAHoaj6QEs5rHnSbPgONQRkcwvnKAqcpQu6WNR%2F%2FEI5Vk%2BaQB4ZyAh7hC01OdJ2lRBRcm65XfkvGlTCR6bgP3XSxasHLouFgjQSGlIbRByADf3B8nTXWoH81UVYjD%2Fe2sgjvAeKoD9JrcgOaTKER9VEfTQZ9fO2mlYcrbzOzaEzO9uJGUYWW6MgdHXhCINJsHCWXMbNZQKiY1vnZ3Z5CnCi757hGYcf4fLd3vERyI6hrYHDoGJ2dCtH%2BcwndGiDu2zTBeYylgRxVq8kzbMswwq3VxAY6pgGNt8dr%2B21m%2FWWnTnpM20RkqHh%2FL%2FSRh%2BlWklvST2NS0yVobLoQDimVl2OXN0SkCvtvDSoW8O6uNbJza7yIyaRClI7WvU7BsfFzeGvJH5HSAs1PtcHnZQl53I0U%2BrhQHUuJO07bZh5bRdLo38O6AcIFu58amCKFPGr6tWkURKI6CVEMLiUb%2BWEAOFLPM2FvuqnbHnIdfpo%2BPbWRuFHHbjBOubViyxq1&X-Amz-Signature=79efaea30f25fc215a5d3cb2a2e18047193351dd4dd94ae1d70f7ab8afbf9a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6MN7KB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGAsDyZeBTqBX3ypDxuanAbtqznHC19gYInd2oivAWPlAiAVw9OAWqBiuQr8L%2BRHAambqMRJSEzhxtljDYAK6D5%2BuCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ7Erc3z9dNfARzdLKtwDyYP86UISc%2FeGzGG36m3jeS9ZTJ8F8rPRUOt%2FZ00%2FczDP1WMEhS3s3%2FuZdOuuyeFfg81ehQNKbmJhM6oaFHQWKWriL103M%2BWs5lkVdmmcns%2Brub7rqQ0gFLVqL3egdiD0uU3cuZVRldJwJ%2BvihFiFHE1qkvj2Y2oYUalw7ZoahixlH%2FMvUm2rMypRQI%2F48Wv9wIEY9CVqIXb%2FiGWqCo%2B9RBD9qW4NjIfJR5BP4D2XuVMjIIA9F%2FsN7R7Yc%2Fp99GPR9ZGwuvfE5yF%2B9oCrOgW2bizdqikRMk0JyKtjypK5lOl%2FRPllrboUl3ufkKK0yXRTUO6ZCXyr4p3u%2FOf731ceR%2FOfBlld%2BmXrz%2FojgjtjDAHoaj6QEs5rHnSbPgONQRkcwvnKAqcpQu6WNR%2F%2FEI5Vk%2BaQB4ZyAh7hC01OdJ2lRBRcm65XfkvGlTCR6bgP3XSxasHLouFgjQSGlIbRByADf3B8nTXWoH81UVYjD%2Fe2sgjvAeKoD9JrcgOaTKER9VEfTQZ9fO2mlYcrbzOzaEzO9uJGUYWW6MgdHXhCINJsHCWXMbNZQKiY1vnZ3Z5CnCi757hGYcf4fLd3vERyI6hrYHDoGJ2dCtH%2BcwndGiDu2zTBeYylgRxVq8kzbMswwq3VxAY6pgGNt8dr%2B21m%2FWWnTnpM20RkqHh%2FL%2FSRh%2BlWklvST2NS0yVobLoQDimVl2OXN0SkCvtvDSoW8O6uNbJza7yIyaRClI7WvU7BsfFzeGvJH5HSAs1PtcHnZQl53I0U%2BrhQHUuJO07bZh5bRdLo38O6AcIFu58amCKFPGr6tWkURKI6CVEMLiUb%2BWEAOFLPM2FvuqnbHnIdfpo%2BPbWRuFHHbjBOubViyxq1&X-Amz-Signature=a2ae07b364c53f5e2b7f5d80f865051d2742a02a19367d6ff92e1b5227078b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6MN7KB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGAsDyZeBTqBX3ypDxuanAbtqznHC19gYInd2oivAWPlAiAVw9OAWqBiuQr8L%2BRHAambqMRJSEzhxtljDYAK6D5%2BuCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ7Erc3z9dNfARzdLKtwDyYP86UISc%2FeGzGG36m3jeS9ZTJ8F8rPRUOt%2FZ00%2FczDP1WMEhS3s3%2FuZdOuuyeFfg81ehQNKbmJhM6oaFHQWKWriL103M%2BWs5lkVdmmcns%2Brub7rqQ0gFLVqL3egdiD0uU3cuZVRldJwJ%2BvihFiFHE1qkvj2Y2oYUalw7ZoahixlH%2FMvUm2rMypRQI%2F48Wv9wIEY9CVqIXb%2FiGWqCo%2B9RBD9qW4NjIfJR5BP4D2XuVMjIIA9F%2FsN7R7Yc%2Fp99GPR9ZGwuvfE5yF%2B9oCrOgW2bizdqikRMk0JyKtjypK5lOl%2FRPllrboUl3ufkKK0yXRTUO6ZCXyr4p3u%2FOf731ceR%2FOfBlld%2BmXrz%2FojgjtjDAHoaj6QEs5rHnSbPgONQRkcwvnKAqcpQu6WNR%2F%2FEI5Vk%2BaQB4ZyAh7hC01OdJ2lRBRcm65XfkvGlTCR6bgP3XSxasHLouFgjQSGlIbRByADf3B8nTXWoH81UVYjD%2Fe2sgjvAeKoD9JrcgOaTKER9VEfTQZ9fO2mlYcrbzOzaEzO9uJGUYWW6MgdHXhCINJsHCWXMbNZQKiY1vnZ3Z5CnCi757hGYcf4fLd3vERyI6hrYHDoGJ2dCtH%2BcwndGiDu2zTBeYylgRxVq8kzbMswwq3VxAY6pgGNt8dr%2B21m%2FWWnTnpM20RkqHh%2FL%2FSRh%2BlWklvST2NS0yVobLoQDimVl2OXN0SkCvtvDSoW8O6uNbJza7yIyaRClI7WvU7BsfFzeGvJH5HSAs1PtcHnZQl53I0U%2BrhQHUuJO07bZh5bRdLo38O6AcIFu58amCKFPGr6tWkURKI6CVEMLiUb%2BWEAOFLPM2FvuqnbHnIdfpo%2BPbWRuFHHbjBOubViyxq1&X-Amz-Signature=8f93c5e95c045422d5a6f8f9ea23ec0166b1e376099a9dc521519b2fac363aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6MN7KB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGAsDyZeBTqBX3ypDxuanAbtqznHC19gYInd2oivAWPlAiAVw9OAWqBiuQr8L%2BRHAambqMRJSEzhxtljDYAK6D5%2BuCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ7Erc3z9dNfARzdLKtwDyYP86UISc%2FeGzGG36m3jeS9ZTJ8F8rPRUOt%2FZ00%2FczDP1WMEhS3s3%2FuZdOuuyeFfg81ehQNKbmJhM6oaFHQWKWriL103M%2BWs5lkVdmmcns%2Brub7rqQ0gFLVqL3egdiD0uU3cuZVRldJwJ%2BvihFiFHE1qkvj2Y2oYUalw7ZoahixlH%2FMvUm2rMypRQI%2F48Wv9wIEY9CVqIXb%2FiGWqCo%2B9RBD9qW4NjIfJR5BP4D2XuVMjIIA9F%2FsN7R7Yc%2Fp99GPR9ZGwuvfE5yF%2B9oCrOgW2bizdqikRMk0JyKtjypK5lOl%2FRPllrboUl3ufkKK0yXRTUO6ZCXyr4p3u%2FOf731ceR%2FOfBlld%2BmXrz%2FojgjtjDAHoaj6QEs5rHnSbPgONQRkcwvnKAqcpQu6WNR%2F%2FEI5Vk%2BaQB4ZyAh7hC01OdJ2lRBRcm65XfkvGlTCR6bgP3XSxasHLouFgjQSGlIbRByADf3B8nTXWoH81UVYjD%2Fe2sgjvAeKoD9JrcgOaTKER9VEfTQZ9fO2mlYcrbzOzaEzO9uJGUYWW6MgdHXhCINJsHCWXMbNZQKiY1vnZ3Z5CnCi757hGYcf4fLd3vERyI6hrYHDoGJ2dCtH%2BcwndGiDu2zTBeYylgRxVq8kzbMswwq3VxAY6pgGNt8dr%2B21m%2FWWnTnpM20RkqHh%2FL%2FSRh%2BlWklvST2NS0yVobLoQDimVl2OXN0SkCvtvDSoW8O6uNbJza7yIyaRClI7WvU7BsfFzeGvJH5HSAs1PtcHnZQl53I0U%2BrhQHUuJO07bZh5bRdLo38O6AcIFu58amCKFPGr6tWkURKI6CVEMLiUb%2BWEAOFLPM2FvuqnbHnIdfpo%2BPbWRuFHHbjBOubViyxq1&X-Amz-Signature=0149a56af4224d29aeca0a6ff4e67b57fcd56233f1398fe2a845a5d1c8c6cf0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6MN7KB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGAsDyZeBTqBX3ypDxuanAbtqznHC19gYInd2oivAWPlAiAVw9OAWqBiuQr8L%2BRHAambqMRJSEzhxtljDYAK6D5%2BuCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ7Erc3z9dNfARzdLKtwDyYP86UISc%2FeGzGG36m3jeS9ZTJ8F8rPRUOt%2FZ00%2FczDP1WMEhS3s3%2FuZdOuuyeFfg81ehQNKbmJhM6oaFHQWKWriL103M%2BWs5lkVdmmcns%2Brub7rqQ0gFLVqL3egdiD0uU3cuZVRldJwJ%2BvihFiFHE1qkvj2Y2oYUalw7ZoahixlH%2FMvUm2rMypRQI%2F48Wv9wIEY9CVqIXb%2FiGWqCo%2B9RBD9qW4NjIfJR5BP4D2XuVMjIIA9F%2FsN7R7Yc%2Fp99GPR9ZGwuvfE5yF%2B9oCrOgW2bizdqikRMk0JyKtjypK5lOl%2FRPllrboUl3ufkKK0yXRTUO6ZCXyr4p3u%2FOf731ceR%2FOfBlld%2BmXrz%2FojgjtjDAHoaj6QEs5rHnSbPgONQRkcwvnKAqcpQu6WNR%2F%2FEI5Vk%2BaQB4ZyAh7hC01OdJ2lRBRcm65XfkvGlTCR6bgP3XSxasHLouFgjQSGlIbRByADf3B8nTXWoH81UVYjD%2Fe2sgjvAeKoD9JrcgOaTKER9VEfTQZ9fO2mlYcrbzOzaEzO9uJGUYWW6MgdHXhCINJsHCWXMbNZQKiY1vnZ3Z5CnCi757hGYcf4fLd3vERyI6hrYHDoGJ2dCtH%2BcwndGiDu2zTBeYylgRxVq8kzbMswwq3VxAY6pgGNt8dr%2B21m%2FWWnTnpM20RkqHh%2FL%2FSRh%2BlWklvST2NS0yVobLoQDimVl2OXN0SkCvtvDSoW8O6uNbJza7yIyaRClI7WvU7BsfFzeGvJH5HSAs1PtcHnZQl53I0U%2BrhQHUuJO07bZh5bRdLo38O6AcIFu58amCKFPGr6tWkURKI6CVEMLiUb%2BWEAOFLPM2FvuqnbHnIdfpo%2BPbWRuFHHbjBOubViyxq1&X-Amz-Signature=349589318c7b8f25b5cd57c42ab71ed20bc125be8ca9bc8afcaadfb7eb1e4742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
