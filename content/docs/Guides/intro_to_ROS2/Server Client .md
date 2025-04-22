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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBMAI2R%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDL3FUyzU2aDLmSpm0s8uedCCnfXszjaXeyXxRPz6bY2gIgQj3ajehjcuFZSytcbMYks3Gat1dBhMLATm0B2elzkAkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BDmpkXj1QWRlqhiircA8K5TBBkU6FAkZUWRfDQALIMXOOMDIO3s7cnawaVc%2F4FpYW9%2F5YoR%2BF4O%2B8tOirjDm3C5ASoY5kUl25HB98PYa6jAu8a5diwILvq4i1XV%2FBh7wja7WIlPQubL9BZoq87KCT%2B%2FM3GtMDTgQX%2BbBs1mO8sTxtGxZeMIGp%2BeYWhZ4vkceTqKmqluvo%2FnOAyvcqBb0is%2FhrsZfiXvOhgNg0ojAtje0Z8VEJ%2Ff9xbDnFSHqBSiDpNAnqlZhTxZmTZmeszSMxKOAi7Cq5mwjjlYClLGrA9XLmS6FqYVc75jjcdKZDfK0obE1%2FP%2FmH4%2F8HePkWdcM8eN5sYGpkRldFmUxZLC1hIo9OxkuvIcFZfpeDWLWtI0fxxAf2ItQUah1gvxf5xyej8WLJv4%2FZPojbdei7%2FYCkDonJTcDQ6LUnyS%2F9mywEUB6AAht3mR1UmG8V63AwecLfbivoLmsmvMhYRHQdpePmsYbRPLh3B8SkdqZ6P6I4Nm3q7%2FFGo3lUB%2BmDe0FU7MNAo5gVjKbaBwPOqKyOdEqdWM3yysJ%2BAIS0FWT%2FLpk7dA9MaLGcmJjbxo6HBMMeHarh8rFt7ETx2FmjNVTR8bvzO3Lqq0%2F50PDI86OF5ShJ3mXvD6%2BB36m%2BGyKG2MKOrnsAGOqUBS%2BouuYmXboeJmQDWj9lW0F83mJ1KDZMFrRw4vm7%2Bi%2BVLE%2BlzU6ItDJ83su8ogV9J4U5UbdxQM7XhHLYSkJ4yzn9XHOf9zdURJndPdypur9Lfa1VXWFx3kzIAc4Ckpw1Zmq0iSM45fIhZ0uOpfLBidWj%2FzhHSuuKpsxF6yaSkM02Rzr7zjlf%2Bp3Su09DIquBPB4gnS2SILTtQ3nUurWJEleCuLCsn&X-Amz-Signature=ba35a2887fa5f7a91df0acbc47c2ea39cf4bbb701166ce7d909ed1f8af5aeed6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBMAI2R%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDL3FUyzU2aDLmSpm0s8uedCCnfXszjaXeyXxRPz6bY2gIgQj3ajehjcuFZSytcbMYks3Gat1dBhMLATm0B2elzkAkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BDmpkXj1QWRlqhiircA8K5TBBkU6FAkZUWRfDQALIMXOOMDIO3s7cnawaVc%2F4FpYW9%2F5YoR%2BF4O%2B8tOirjDm3C5ASoY5kUl25HB98PYa6jAu8a5diwILvq4i1XV%2FBh7wja7WIlPQubL9BZoq87KCT%2B%2FM3GtMDTgQX%2BbBs1mO8sTxtGxZeMIGp%2BeYWhZ4vkceTqKmqluvo%2FnOAyvcqBb0is%2FhrsZfiXvOhgNg0ojAtje0Z8VEJ%2Ff9xbDnFSHqBSiDpNAnqlZhTxZmTZmeszSMxKOAi7Cq5mwjjlYClLGrA9XLmS6FqYVc75jjcdKZDfK0obE1%2FP%2FmH4%2F8HePkWdcM8eN5sYGpkRldFmUxZLC1hIo9OxkuvIcFZfpeDWLWtI0fxxAf2ItQUah1gvxf5xyej8WLJv4%2FZPojbdei7%2FYCkDonJTcDQ6LUnyS%2F9mywEUB6AAht3mR1UmG8V63AwecLfbivoLmsmvMhYRHQdpePmsYbRPLh3B8SkdqZ6P6I4Nm3q7%2FFGo3lUB%2BmDe0FU7MNAo5gVjKbaBwPOqKyOdEqdWM3yysJ%2BAIS0FWT%2FLpk7dA9MaLGcmJjbxo6HBMMeHarh8rFt7ETx2FmjNVTR8bvzO3Lqq0%2F50PDI86OF5ShJ3mXvD6%2BB36m%2BGyKG2MKOrnsAGOqUBS%2BouuYmXboeJmQDWj9lW0F83mJ1KDZMFrRw4vm7%2Bi%2BVLE%2BlzU6ItDJ83su8ogV9J4U5UbdxQM7XhHLYSkJ4yzn9XHOf9zdURJndPdypur9Lfa1VXWFx3kzIAc4Ckpw1Zmq0iSM45fIhZ0uOpfLBidWj%2FzhHSuuKpsxF6yaSkM02Rzr7zjlf%2Bp3Su09DIquBPB4gnS2SILTtQ3nUurWJEleCuLCsn&X-Amz-Signature=8233dc8018ba9ffe5903dd2e6b641b6eefb1955a16c36476e9328e44208667c4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBMAI2R%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDL3FUyzU2aDLmSpm0s8uedCCnfXszjaXeyXxRPz6bY2gIgQj3ajehjcuFZSytcbMYks3Gat1dBhMLATm0B2elzkAkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BDmpkXj1QWRlqhiircA8K5TBBkU6FAkZUWRfDQALIMXOOMDIO3s7cnawaVc%2F4FpYW9%2F5YoR%2BF4O%2B8tOirjDm3C5ASoY5kUl25HB98PYa6jAu8a5diwILvq4i1XV%2FBh7wja7WIlPQubL9BZoq87KCT%2B%2FM3GtMDTgQX%2BbBs1mO8sTxtGxZeMIGp%2BeYWhZ4vkceTqKmqluvo%2FnOAyvcqBb0is%2FhrsZfiXvOhgNg0ojAtje0Z8VEJ%2Ff9xbDnFSHqBSiDpNAnqlZhTxZmTZmeszSMxKOAi7Cq5mwjjlYClLGrA9XLmS6FqYVc75jjcdKZDfK0obE1%2FP%2FmH4%2F8HePkWdcM8eN5sYGpkRldFmUxZLC1hIo9OxkuvIcFZfpeDWLWtI0fxxAf2ItQUah1gvxf5xyej8WLJv4%2FZPojbdei7%2FYCkDonJTcDQ6LUnyS%2F9mywEUB6AAht3mR1UmG8V63AwecLfbivoLmsmvMhYRHQdpePmsYbRPLh3B8SkdqZ6P6I4Nm3q7%2FFGo3lUB%2BmDe0FU7MNAo5gVjKbaBwPOqKyOdEqdWM3yysJ%2BAIS0FWT%2FLpk7dA9MaLGcmJjbxo6HBMMeHarh8rFt7ETx2FmjNVTR8bvzO3Lqq0%2F50PDI86OF5ShJ3mXvD6%2BB36m%2BGyKG2MKOrnsAGOqUBS%2BouuYmXboeJmQDWj9lW0F83mJ1KDZMFrRw4vm7%2Bi%2BVLE%2BlzU6ItDJ83su8ogV9J4U5UbdxQM7XhHLYSkJ4yzn9XHOf9zdURJndPdypur9Lfa1VXWFx3kzIAc4Ckpw1Zmq0iSM45fIhZ0uOpfLBidWj%2FzhHSuuKpsxF6yaSkM02Rzr7zjlf%2Bp3Su09DIquBPB4gnS2SILTtQ3nUurWJEleCuLCsn&X-Amz-Signature=13d2f4280daf4616b5a329f230b8db7c5c308bcb63d7532fc188c36bfa6ec71d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBMAI2R%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDL3FUyzU2aDLmSpm0s8uedCCnfXszjaXeyXxRPz6bY2gIgQj3ajehjcuFZSytcbMYks3Gat1dBhMLATm0B2elzkAkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BDmpkXj1QWRlqhiircA8K5TBBkU6FAkZUWRfDQALIMXOOMDIO3s7cnawaVc%2F4FpYW9%2F5YoR%2BF4O%2B8tOirjDm3C5ASoY5kUl25HB98PYa6jAu8a5diwILvq4i1XV%2FBh7wja7WIlPQubL9BZoq87KCT%2B%2FM3GtMDTgQX%2BbBs1mO8sTxtGxZeMIGp%2BeYWhZ4vkceTqKmqluvo%2FnOAyvcqBb0is%2FhrsZfiXvOhgNg0ojAtje0Z8VEJ%2Ff9xbDnFSHqBSiDpNAnqlZhTxZmTZmeszSMxKOAi7Cq5mwjjlYClLGrA9XLmS6FqYVc75jjcdKZDfK0obE1%2FP%2FmH4%2F8HePkWdcM8eN5sYGpkRldFmUxZLC1hIo9OxkuvIcFZfpeDWLWtI0fxxAf2ItQUah1gvxf5xyej8WLJv4%2FZPojbdei7%2FYCkDonJTcDQ6LUnyS%2F9mywEUB6AAht3mR1UmG8V63AwecLfbivoLmsmvMhYRHQdpePmsYbRPLh3B8SkdqZ6P6I4Nm3q7%2FFGo3lUB%2BmDe0FU7MNAo5gVjKbaBwPOqKyOdEqdWM3yysJ%2BAIS0FWT%2FLpk7dA9MaLGcmJjbxo6HBMMeHarh8rFt7ETx2FmjNVTR8bvzO3Lqq0%2F50PDI86OF5ShJ3mXvD6%2BB36m%2BGyKG2MKOrnsAGOqUBS%2BouuYmXboeJmQDWj9lW0F83mJ1KDZMFrRw4vm7%2Bi%2BVLE%2BlzU6ItDJ83su8ogV9J4U5UbdxQM7XhHLYSkJ4yzn9XHOf9zdURJndPdypur9Lfa1VXWFx3kzIAc4Ckpw1Zmq0iSM45fIhZ0uOpfLBidWj%2FzhHSuuKpsxF6yaSkM02Rzr7zjlf%2Bp3Su09DIquBPB4gnS2SILTtQ3nUurWJEleCuLCsn&X-Amz-Signature=0feb8a12fa2b47275da4b17bbfd6a473038cbbf421abaec15234c7fddf7f117c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBMAI2R%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDL3FUyzU2aDLmSpm0s8uedCCnfXszjaXeyXxRPz6bY2gIgQj3ajehjcuFZSytcbMYks3Gat1dBhMLATm0B2elzkAkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BDmpkXj1QWRlqhiircA8K5TBBkU6FAkZUWRfDQALIMXOOMDIO3s7cnawaVc%2F4FpYW9%2F5YoR%2BF4O%2B8tOirjDm3C5ASoY5kUl25HB98PYa6jAu8a5diwILvq4i1XV%2FBh7wja7WIlPQubL9BZoq87KCT%2B%2FM3GtMDTgQX%2BbBs1mO8sTxtGxZeMIGp%2BeYWhZ4vkceTqKmqluvo%2FnOAyvcqBb0is%2FhrsZfiXvOhgNg0ojAtje0Z8VEJ%2Ff9xbDnFSHqBSiDpNAnqlZhTxZmTZmeszSMxKOAi7Cq5mwjjlYClLGrA9XLmS6FqYVc75jjcdKZDfK0obE1%2FP%2FmH4%2F8HePkWdcM8eN5sYGpkRldFmUxZLC1hIo9OxkuvIcFZfpeDWLWtI0fxxAf2ItQUah1gvxf5xyej8WLJv4%2FZPojbdei7%2FYCkDonJTcDQ6LUnyS%2F9mywEUB6AAht3mR1UmG8V63AwecLfbivoLmsmvMhYRHQdpePmsYbRPLh3B8SkdqZ6P6I4Nm3q7%2FFGo3lUB%2BmDe0FU7MNAo5gVjKbaBwPOqKyOdEqdWM3yysJ%2BAIS0FWT%2FLpk7dA9MaLGcmJjbxo6HBMMeHarh8rFt7ETx2FmjNVTR8bvzO3Lqq0%2F50PDI86OF5ShJ3mXvD6%2BB36m%2BGyKG2MKOrnsAGOqUBS%2BouuYmXboeJmQDWj9lW0F83mJ1KDZMFrRw4vm7%2Bi%2BVLE%2BlzU6ItDJ83su8ogV9J4U5UbdxQM7XhHLYSkJ4yzn9XHOf9zdURJndPdypur9Lfa1VXWFx3kzIAc4Ckpw1Zmq0iSM45fIhZ0uOpfLBidWj%2FzhHSuuKpsxF6yaSkM02Rzr7zjlf%2Bp3Su09DIquBPB4gnS2SILTtQ3nUurWJEleCuLCsn&X-Amz-Signature=b1babf3846c491e1514973382a0190510d5bf83c86f6f53d755f6cc980ffe2b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
