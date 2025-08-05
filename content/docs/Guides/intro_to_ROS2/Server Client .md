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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OFL2F4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCQXV3nCWT3LyzJHBzxFWeTgxsZ%2FXXCn6EBXCptXKW5cgIgA3cqlmYSQnK%2Bnojq5c%2FhQivFay6BgERa2X%2FciAigcmwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIlp3nIvYRdImtMRYircAzGAN%2FXpUIjzmmbclMFb4NIZvpUmvSkeRC%2FA5Ly0b5%2FUW5yo9x4w%2FzrDakPiUMODEKYxAqjI%2FQT1oE7elsLp39xvROLJ0m%2FdRfMatYAA4yBJQx7ubcObX8JhUjSO28mRimHOQO0moLYAOSQ%2F%2B98C1odWnT9iIv8GoVmjflDKKUprv6%2BwYdR0sYxdYfLCgtYmifBxaOpPuYxYc1YQ6zpL3Zo7qvSYzgICvVSABW%2FSoICkgHd0J5SS6b9usl2bc1HrSPj0V%2FHaeTbc7iwot6y6QAxcLFJX0%2FLqgdo275V2HR%2FJxrNiT2mSuWKG5RjttG9wlmOwh4gBmoRXlG7EeiH6%2B9aYNuO3LWT5mqjlWCaq5FDe%2Fpn9ibzknORMXO0w5Px3Ksokov4sCyo2mx2wW20CN7J3ODapGJDWkYBqrv4xJFP6DwS4qxqSs%2BJf0XHH%2BGrnxuusHDMh3%2B5i%2F1eohrTBjIkAcrYm1NCGFfWX3ivZlk9kS5eF1zLpjVGnVwsQali%2Bo1VlUqWmsAKeNalbX8mM%2FvAyIxCLa1Z0ng1ofS%2BMA6J2myS86EJoIdJ14c%2B3Xs2JasyGQcoBB75%2FJZGfHmOdY%2FF%2FrMBxBr1oNr6omqU46ZGQa6sy1vG9%2Bq63dX6%2FMO30xMQGOqUBR30mujGtzIljgvkBhtFeUcc53WRchKYYaugUGRts5kRp50v%2F0KdEd5jXty%2B%2B8zD2Dr78W0wf2As6h958Jz79wc%2BE1WVK7SI7Sh6DEgz%2FHoAijVyRHxVPYdK81KTAc1ue1WP6%2BoWyV6IKybj6g9diIPZSLS1JbOmgendECoT8sLskFaucHDL0sLhHnuHQoenCctZIFGVbiHegQPpu7rbCneDQHKYg&X-Amz-Signature=652cc5d6296814404eb2279f47e10e1259d52b131fbd9f02d40aa0529801a94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OFL2F4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCQXV3nCWT3LyzJHBzxFWeTgxsZ%2FXXCn6EBXCptXKW5cgIgA3cqlmYSQnK%2Bnojq5c%2FhQivFay6BgERa2X%2FciAigcmwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIlp3nIvYRdImtMRYircAzGAN%2FXpUIjzmmbclMFb4NIZvpUmvSkeRC%2FA5Ly0b5%2FUW5yo9x4w%2FzrDakPiUMODEKYxAqjI%2FQT1oE7elsLp39xvROLJ0m%2FdRfMatYAA4yBJQx7ubcObX8JhUjSO28mRimHOQO0moLYAOSQ%2F%2B98C1odWnT9iIv8GoVmjflDKKUprv6%2BwYdR0sYxdYfLCgtYmifBxaOpPuYxYc1YQ6zpL3Zo7qvSYzgICvVSABW%2FSoICkgHd0J5SS6b9usl2bc1HrSPj0V%2FHaeTbc7iwot6y6QAxcLFJX0%2FLqgdo275V2HR%2FJxrNiT2mSuWKG5RjttG9wlmOwh4gBmoRXlG7EeiH6%2B9aYNuO3LWT5mqjlWCaq5FDe%2Fpn9ibzknORMXO0w5Px3Ksokov4sCyo2mx2wW20CN7J3ODapGJDWkYBqrv4xJFP6DwS4qxqSs%2BJf0XHH%2BGrnxuusHDMh3%2B5i%2F1eohrTBjIkAcrYm1NCGFfWX3ivZlk9kS5eF1zLpjVGnVwsQali%2Bo1VlUqWmsAKeNalbX8mM%2FvAyIxCLa1Z0ng1ofS%2BMA6J2myS86EJoIdJ14c%2B3Xs2JasyGQcoBB75%2FJZGfHmOdY%2FF%2FrMBxBr1oNr6omqU46ZGQa6sy1vG9%2Bq63dX6%2FMO30xMQGOqUBR30mujGtzIljgvkBhtFeUcc53WRchKYYaugUGRts5kRp50v%2F0KdEd5jXty%2B%2B8zD2Dr78W0wf2As6h958Jz79wc%2BE1WVK7SI7Sh6DEgz%2FHoAijVyRHxVPYdK81KTAc1ue1WP6%2BoWyV6IKybj6g9diIPZSLS1JbOmgendECoT8sLskFaucHDL0sLhHnuHQoenCctZIFGVbiHegQPpu7rbCneDQHKYg&X-Amz-Signature=6676ff2421b64ffe1d53aed588b4b6b0042970c0bb7a5eef7a9c9d24dd38a2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OFL2F4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCQXV3nCWT3LyzJHBzxFWeTgxsZ%2FXXCn6EBXCptXKW5cgIgA3cqlmYSQnK%2Bnojq5c%2FhQivFay6BgERa2X%2FciAigcmwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIlp3nIvYRdImtMRYircAzGAN%2FXpUIjzmmbclMFb4NIZvpUmvSkeRC%2FA5Ly0b5%2FUW5yo9x4w%2FzrDakPiUMODEKYxAqjI%2FQT1oE7elsLp39xvROLJ0m%2FdRfMatYAA4yBJQx7ubcObX8JhUjSO28mRimHOQO0moLYAOSQ%2F%2B98C1odWnT9iIv8GoVmjflDKKUprv6%2BwYdR0sYxdYfLCgtYmifBxaOpPuYxYc1YQ6zpL3Zo7qvSYzgICvVSABW%2FSoICkgHd0J5SS6b9usl2bc1HrSPj0V%2FHaeTbc7iwot6y6QAxcLFJX0%2FLqgdo275V2HR%2FJxrNiT2mSuWKG5RjttG9wlmOwh4gBmoRXlG7EeiH6%2B9aYNuO3LWT5mqjlWCaq5FDe%2Fpn9ibzknORMXO0w5Px3Ksokov4sCyo2mx2wW20CN7J3ODapGJDWkYBqrv4xJFP6DwS4qxqSs%2BJf0XHH%2BGrnxuusHDMh3%2B5i%2F1eohrTBjIkAcrYm1NCGFfWX3ivZlk9kS5eF1zLpjVGnVwsQali%2Bo1VlUqWmsAKeNalbX8mM%2FvAyIxCLa1Z0ng1ofS%2BMA6J2myS86EJoIdJ14c%2B3Xs2JasyGQcoBB75%2FJZGfHmOdY%2FF%2FrMBxBr1oNr6omqU46ZGQa6sy1vG9%2Bq63dX6%2FMO30xMQGOqUBR30mujGtzIljgvkBhtFeUcc53WRchKYYaugUGRts5kRp50v%2F0KdEd5jXty%2B%2B8zD2Dr78W0wf2As6h958Jz79wc%2BE1WVK7SI7Sh6DEgz%2FHoAijVyRHxVPYdK81KTAc1ue1WP6%2BoWyV6IKybj6g9diIPZSLS1JbOmgendECoT8sLskFaucHDL0sLhHnuHQoenCctZIFGVbiHegQPpu7rbCneDQHKYg&X-Amz-Signature=922de03bd06160b243908ed389c60a8cd420aaa61757625a24fe26200d947f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OFL2F4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCQXV3nCWT3LyzJHBzxFWeTgxsZ%2FXXCn6EBXCptXKW5cgIgA3cqlmYSQnK%2Bnojq5c%2FhQivFay6BgERa2X%2FciAigcmwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIlp3nIvYRdImtMRYircAzGAN%2FXpUIjzmmbclMFb4NIZvpUmvSkeRC%2FA5Ly0b5%2FUW5yo9x4w%2FzrDakPiUMODEKYxAqjI%2FQT1oE7elsLp39xvROLJ0m%2FdRfMatYAA4yBJQx7ubcObX8JhUjSO28mRimHOQO0moLYAOSQ%2F%2B98C1odWnT9iIv8GoVmjflDKKUprv6%2BwYdR0sYxdYfLCgtYmifBxaOpPuYxYc1YQ6zpL3Zo7qvSYzgICvVSABW%2FSoICkgHd0J5SS6b9usl2bc1HrSPj0V%2FHaeTbc7iwot6y6QAxcLFJX0%2FLqgdo275V2HR%2FJxrNiT2mSuWKG5RjttG9wlmOwh4gBmoRXlG7EeiH6%2B9aYNuO3LWT5mqjlWCaq5FDe%2Fpn9ibzknORMXO0w5Px3Ksokov4sCyo2mx2wW20CN7J3ODapGJDWkYBqrv4xJFP6DwS4qxqSs%2BJf0XHH%2BGrnxuusHDMh3%2B5i%2F1eohrTBjIkAcrYm1NCGFfWX3ivZlk9kS5eF1zLpjVGnVwsQali%2Bo1VlUqWmsAKeNalbX8mM%2FvAyIxCLa1Z0ng1ofS%2BMA6J2myS86EJoIdJ14c%2B3Xs2JasyGQcoBB75%2FJZGfHmOdY%2FF%2FrMBxBr1oNr6omqU46ZGQa6sy1vG9%2Bq63dX6%2FMO30xMQGOqUBR30mujGtzIljgvkBhtFeUcc53WRchKYYaugUGRts5kRp50v%2F0KdEd5jXty%2B%2B8zD2Dr78W0wf2As6h958Jz79wc%2BE1WVK7SI7Sh6DEgz%2FHoAijVyRHxVPYdK81KTAc1ue1WP6%2BoWyV6IKybj6g9diIPZSLS1JbOmgendECoT8sLskFaucHDL0sLhHnuHQoenCctZIFGVbiHegQPpu7rbCneDQHKYg&X-Amz-Signature=b354a431e8c7c1e02da8479b63246f7c0b8a2fa0a7cf6fdd535e0ea090ece2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OFL2F4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCQXV3nCWT3LyzJHBzxFWeTgxsZ%2FXXCn6EBXCptXKW5cgIgA3cqlmYSQnK%2Bnojq5c%2FhQivFay6BgERa2X%2FciAigcmwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIlp3nIvYRdImtMRYircAzGAN%2FXpUIjzmmbclMFb4NIZvpUmvSkeRC%2FA5Ly0b5%2FUW5yo9x4w%2FzrDakPiUMODEKYxAqjI%2FQT1oE7elsLp39xvROLJ0m%2FdRfMatYAA4yBJQx7ubcObX8JhUjSO28mRimHOQO0moLYAOSQ%2F%2B98C1odWnT9iIv8GoVmjflDKKUprv6%2BwYdR0sYxdYfLCgtYmifBxaOpPuYxYc1YQ6zpL3Zo7qvSYzgICvVSABW%2FSoICkgHd0J5SS6b9usl2bc1HrSPj0V%2FHaeTbc7iwot6y6QAxcLFJX0%2FLqgdo275V2HR%2FJxrNiT2mSuWKG5RjttG9wlmOwh4gBmoRXlG7EeiH6%2B9aYNuO3LWT5mqjlWCaq5FDe%2Fpn9ibzknORMXO0w5Px3Ksokov4sCyo2mx2wW20CN7J3ODapGJDWkYBqrv4xJFP6DwS4qxqSs%2BJf0XHH%2BGrnxuusHDMh3%2B5i%2F1eohrTBjIkAcrYm1NCGFfWX3ivZlk9kS5eF1zLpjVGnVwsQali%2Bo1VlUqWmsAKeNalbX8mM%2FvAyIxCLa1Z0ng1ofS%2BMA6J2myS86EJoIdJ14c%2B3Xs2JasyGQcoBB75%2FJZGfHmOdY%2FF%2FrMBxBr1oNr6omqU46ZGQa6sy1vG9%2Bq63dX6%2FMO30xMQGOqUBR30mujGtzIljgvkBhtFeUcc53WRchKYYaugUGRts5kRp50v%2F0KdEd5jXty%2B%2B8zD2Dr78W0wf2As6h958Jz79wc%2BE1WVK7SI7Sh6DEgz%2FHoAijVyRHxVPYdK81KTAc1ue1WP6%2BoWyV6IKybj6g9diIPZSLS1JbOmgendECoT8sLskFaucHDL0sLhHnuHQoenCctZIFGVbiHegQPpu7rbCneDQHKYg&X-Amz-Signature=21ef8aa9c95111041c8460e3c682302a07d7f2c2ae96b71c0bcce5aada8d7b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
