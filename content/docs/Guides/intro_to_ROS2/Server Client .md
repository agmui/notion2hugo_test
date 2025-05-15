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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR3SLZ5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGhdtyZB8ci9V649C6miYUxIIEXyV29eOuODCnMAvK9aAiEAjI7csMDWII8NbtvNk4EbcUW%2FRhgz%2B4LyBSDa7pkO%2FqYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJsEq4pSQc5XPqxhiCrcAyQqLxNiFB6ZYoDr70d0G5UotZVx0OOdj%2FNSydOWq6CxYHlGV6sN73Y6bAEHQBNxhakQ7yrJP6f3qS2Ny7i%2Bf30c%2FBxQvvHj6nhWQgr642LtKkNOJlTpOel2XNShfpOCGKn29OjopnzCxU1VAvzTu2soTkmIeAqYBu32L8y2iEWEB05J5vnFxn469xSLvNYsqKFovlwAorE7PEPQKY2Re4yqQISKthwudI%2B%2B6FGuAHB82uE1DNQFP%2Fjyw5ASajH5PgTrVaDKBaJ42W1%2BTnJJIs%2B0GDtUV4YHggLT0EhSw827o3DYNyE25rT9Dka6KTaGVqG4xPlbk4E74mSxFUdRxOkcsDTQ6odF%2B00UM03N8bpBMJKPbBuzl98zcY%2B8N%2FjFxGaV0LtM1GeJfjVo1kUFfUbjK6VxWR3RJ%2F7H4O4xY2%2BXum9GRYalyagIFC6OuMqbyq9AnK3ppHWic57RnJoKNTm4TvdOCO63W%2FDDrPMx%2Fecgcvsemw25K8%2FMcWWaeq%2FpNjqck1LH9YsHSRm%2BXboSko5Pav9tBhqx8%2Ba18Kn45RzF4iTBaT0DP%2FPJVZaqztKQbejhy%2BkF4d8KoNPtKkjt6SIQC1LvigJqd7%2Bk6k5QeufUnWKnEyhdesQN1ZNSMM%2B1lcEGOqUBWb0CX2k%2BRTu1KVR4SIYam2H4FzlenV7NOWVsMG1W6sCzPvlTmANforRaoLjilneE5iIM4cgBSJPJT7Fnony4PrDgvZCesZ8DXWnMO12dtcZc%2Bala%2FkMPIyXaQvajy%2F%2BiXVlYXUWQlvR5G8E%2FATA6nSbEzQSnrNOuSP2Qzv0L5vtv1qGHKKjSwilAzdVcZTkwcpCud7QtzWx%2B36gQyrODbVXmVR%2F%2B&X-Amz-Signature=1e0b798c91c4a2c0cac75bd3aadeb0e801cca85ada68d17d64737f963ed27b40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR3SLZ5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGhdtyZB8ci9V649C6miYUxIIEXyV29eOuODCnMAvK9aAiEAjI7csMDWII8NbtvNk4EbcUW%2FRhgz%2B4LyBSDa7pkO%2FqYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJsEq4pSQc5XPqxhiCrcAyQqLxNiFB6ZYoDr70d0G5UotZVx0OOdj%2FNSydOWq6CxYHlGV6sN73Y6bAEHQBNxhakQ7yrJP6f3qS2Ny7i%2Bf30c%2FBxQvvHj6nhWQgr642LtKkNOJlTpOel2XNShfpOCGKn29OjopnzCxU1VAvzTu2soTkmIeAqYBu32L8y2iEWEB05J5vnFxn469xSLvNYsqKFovlwAorE7PEPQKY2Re4yqQISKthwudI%2B%2B6FGuAHB82uE1DNQFP%2Fjyw5ASajH5PgTrVaDKBaJ42W1%2BTnJJIs%2B0GDtUV4YHggLT0EhSw827o3DYNyE25rT9Dka6KTaGVqG4xPlbk4E74mSxFUdRxOkcsDTQ6odF%2B00UM03N8bpBMJKPbBuzl98zcY%2B8N%2FjFxGaV0LtM1GeJfjVo1kUFfUbjK6VxWR3RJ%2F7H4O4xY2%2BXum9GRYalyagIFC6OuMqbyq9AnK3ppHWic57RnJoKNTm4TvdOCO63W%2FDDrPMx%2Fecgcvsemw25K8%2FMcWWaeq%2FpNjqck1LH9YsHSRm%2BXboSko5Pav9tBhqx8%2Ba18Kn45RzF4iTBaT0DP%2FPJVZaqztKQbejhy%2BkF4d8KoNPtKkjt6SIQC1LvigJqd7%2Bk6k5QeufUnWKnEyhdesQN1ZNSMM%2B1lcEGOqUBWb0CX2k%2BRTu1KVR4SIYam2H4FzlenV7NOWVsMG1W6sCzPvlTmANforRaoLjilneE5iIM4cgBSJPJT7Fnony4PrDgvZCesZ8DXWnMO12dtcZc%2Bala%2FkMPIyXaQvajy%2F%2BiXVlYXUWQlvR5G8E%2FATA6nSbEzQSnrNOuSP2Qzv0L5vtv1qGHKKjSwilAzdVcZTkwcpCud7QtzWx%2B36gQyrODbVXmVR%2F%2B&X-Amz-Signature=005c9a3c9e64446b6b2817342155688ffe29eb6758e863359ee608dec4ef5c56&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR3SLZ5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGhdtyZB8ci9V649C6miYUxIIEXyV29eOuODCnMAvK9aAiEAjI7csMDWII8NbtvNk4EbcUW%2FRhgz%2B4LyBSDa7pkO%2FqYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJsEq4pSQc5XPqxhiCrcAyQqLxNiFB6ZYoDr70d0G5UotZVx0OOdj%2FNSydOWq6CxYHlGV6sN73Y6bAEHQBNxhakQ7yrJP6f3qS2Ny7i%2Bf30c%2FBxQvvHj6nhWQgr642LtKkNOJlTpOel2XNShfpOCGKn29OjopnzCxU1VAvzTu2soTkmIeAqYBu32L8y2iEWEB05J5vnFxn469xSLvNYsqKFovlwAorE7PEPQKY2Re4yqQISKthwudI%2B%2B6FGuAHB82uE1DNQFP%2Fjyw5ASajH5PgTrVaDKBaJ42W1%2BTnJJIs%2B0GDtUV4YHggLT0EhSw827o3DYNyE25rT9Dka6KTaGVqG4xPlbk4E74mSxFUdRxOkcsDTQ6odF%2B00UM03N8bpBMJKPbBuzl98zcY%2B8N%2FjFxGaV0LtM1GeJfjVo1kUFfUbjK6VxWR3RJ%2F7H4O4xY2%2BXum9GRYalyagIFC6OuMqbyq9AnK3ppHWic57RnJoKNTm4TvdOCO63W%2FDDrPMx%2Fecgcvsemw25K8%2FMcWWaeq%2FpNjqck1LH9YsHSRm%2BXboSko5Pav9tBhqx8%2Ba18Kn45RzF4iTBaT0DP%2FPJVZaqztKQbejhy%2BkF4d8KoNPtKkjt6SIQC1LvigJqd7%2Bk6k5QeufUnWKnEyhdesQN1ZNSMM%2B1lcEGOqUBWb0CX2k%2BRTu1KVR4SIYam2H4FzlenV7NOWVsMG1W6sCzPvlTmANforRaoLjilneE5iIM4cgBSJPJT7Fnony4PrDgvZCesZ8DXWnMO12dtcZc%2Bala%2FkMPIyXaQvajy%2F%2BiXVlYXUWQlvR5G8E%2FATA6nSbEzQSnrNOuSP2Qzv0L5vtv1qGHKKjSwilAzdVcZTkwcpCud7QtzWx%2B36gQyrODbVXmVR%2F%2B&X-Amz-Signature=7426bdc43aac06c5c806249a2df0b5a538ea78a5bbabbdf5f26c5c51bc337eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR3SLZ5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGhdtyZB8ci9V649C6miYUxIIEXyV29eOuODCnMAvK9aAiEAjI7csMDWII8NbtvNk4EbcUW%2FRhgz%2B4LyBSDa7pkO%2FqYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJsEq4pSQc5XPqxhiCrcAyQqLxNiFB6ZYoDr70d0G5UotZVx0OOdj%2FNSydOWq6CxYHlGV6sN73Y6bAEHQBNxhakQ7yrJP6f3qS2Ny7i%2Bf30c%2FBxQvvHj6nhWQgr642LtKkNOJlTpOel2XNShfpOCGKn29OjopnzCxU1VAvzTu2soTkmIeAqYBu32L8y2iEWEB05J5vnFxn469xSLvNYsqKFovlwAorE7PEPQKY2Re4yqQISKthwudI%2B%2B6FGuAHB82uE1DNQFP%2Fjyw5ASajH5PgTrVaDKBaJ42W1%2BTnJJIs%2B0GDtUV4YHggLT0EhSw827o3DYNyE25rT9Dka6KTaGVqG4xPlbk4E74mSxFUdRxOkcsDTQ6odF%2B00UM03N8bpBMJKPbBuzl98zcY%2B8N%2FjFxGaV0LtM1GeJfjVo1kUFfUbjK6VxWR3RJ%2F7H4O4xY2%2BXum9GRYalyagIFC6OuMqbyq9AnK3ppHWic57RnJoKNTm4TvdOCO63W%2FDDrPMx%2Fecgcvsemw25K8%2FMcWWaeq%2FpNjqck1LH9YsHSRm%2BXboSko5Pav9tBhqx8%2Ba18Kn45RzF4iTBaT0DP%2FPJVZaqztKQbejhy%2BkF4d8KoNPtKkjt6SIQC1LvigJqd7%2Bk6k5QeufUnWKnEyhdesQN1ZNSMM%2B1lcEGOqUBWb0CX2k%2BRTu1KVR4SIYam2H4FzlenV7NOWVsMG1W6sCzPvlTmANforRaoLjilneE5iIM4cgBSJPJT7Fnony4PrDgvZCesZ8DXWnMO12dtcZc%2Bala%2FkMPIyXaQvajy%2F%2BiXVlYXUWQlvR5G8E%2FATA6nSbEzQSnrNOuSP2Qzv0L5vtv1qGHKKjSwilAzdVcZTkwcpCud7QtzWx%2B36gQyrODbVXmVR%2F%2B&X-Amz-Signature=658b62e4f8b8cd2e7645fc240f650aadc2d6ebe0f053147f3ca0343af53ab4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR3SLZ5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGhdtyZB8ci9V649C6miYUxIIEXyV29eOuODCnMAvK9aAiEAjI7csMDWII8NbtvNk4EbcUW%2FRhgz%2B4LyBSDa7pkO%2FqYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJsEq4pSQc5XPqxhiCrcAyQqLxNiFB6ZYoDr70d0G5UotZVx0OOdj%2FNSydOWq6CxYHlGV6sN73Y6bAEHQBNxhakQ7yrJP6f3qS2Ny7i%2Bf30c%2FBxQvvHj6nhWQgr642LtKkNOJlTpOel2XNShfpOCGKn29OjopnzCxU1VAvzTu2soTkmIeAqYBu32L8y2iEWEB05J5vnFxn469xSLvNYsqKFovlwAorE7PEPQKY2Re4yqQISKthwudI%2B%2B6FGuAHB82uE1DNQFP%2Fjyw5ASajH5PgTrVaDKBaJ42W1%2BTnJJIs%2B0GDtUV4YHggLT0EhSw827o3DYNyE25rT9Dka6KTaGVqG4xPlbk4E74mSxFUdRxOkcsDTQ6odF%2B00UM03N8bpBMJKPbBuzl98zcY%2B8N%2FjFxGaV0LtM1GeJfjVo1kUFfUbjK6VxWR3RJ%2F7H4O4xY2%2BXum9GRYalyagIFC6OuMqbyq9AnK3ppHWic57RnJoKNTm4TvdOCO63W%2FDDrPMx%2Fecgcvsemw25K8%2FMcWWaeq%2FpNjqck1LH9YsHSRm%2BXboSko5Pav9tBhqx8%2Ba18Kn45RzF4iTBaT0DP%2FPJVZaqztKQbejhy%2BkF4d8KoNPtKkjt6SIQC1LvigJqd7%2Bk6k5QeufUnWKnEyhdesQN1ZNSMM%2B1lcEGOqUBWb0CX2k%2BRTu1KVR4SIYam2H4FzlenV7NOWVsMG1W6sCzPvlTmANforRaoLjilneE5iIM4cgBSJPJT7Fnony4PrDgvZCesZ8DXWnMO12dtcZc%2Bala%2FkMPIyXaQvajy%2F%2BiXVlYXUWQlvR5G8E%2FATA6nSbEzQSnrNOuSP2Qzv0L5vtv1qGHKKjSwilAzdVcZTkwcpCud7QtzWx%2B36gQyrODbVXmVR%2F%2B&X-Amz-Signature=bbc1796f9d769243f731a68ab08dc9ef3143b13fcecec8d7434fe031dac320fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
