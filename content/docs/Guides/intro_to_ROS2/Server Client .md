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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULCLNSB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDflLyR95JkIUlbBE5SY%2FJH6rclnGE5mdLKYYf76U3DzgIhAPDd1EiCWSKaCqYz1xDinnxU2hG7gEouibUSmS4PvLoIKv8DCHcQABoMNjM3NDIzMTgzODA1IgzbjJWx1rVibg3MD7Yq3AP3bv5H4wBMWfh949gxSrQ017u7Kh2qK9ykcUdiKKn3cXXhMUk6BVdjidk2GeyDook%2B9M3rXkIuiS5aN2c3zubnRubd0KQ5n9RnES3zVWqH1aqXinjPe9OfC9aO0z6zHNTLx4qRQ4wrzrQcuunRRGQxh14u2Nz77iu9t9h%2F7CRIBA9IOe1VFw3IHrBbVFzkXDM6OjPgZqK1C7lDur2wZn8BdDvAQlGCoZsnUYsOcH3ydIu3UCDMjP4VWwIHiG5jHc%2BC5X5u%2FHuAmVlLjVHnE4%2B7zO8S%2FvNRMYy2%2B8ghcrdcrmhkaLKZAOjiih5c407NPVNr788hFPe5xzNJPr1p3I%2FMVLOQ%2BR5xiCGkmKwvhVdDQoEcFS22wL1zj6EOM2Qn5UkO%2BSAIjMw4r6yHrK4kAt%2B2HBWDdNTmQwwnGsvS9ugUlpcjkz%2FXKkc3YzLcBOEBbhrzCDIvxeugjTsfw84tjRCBj%2Fvhj%2FXVEN1Eam03hs4FDmsG6iEJUagAzBgk8Xbe%2F3qsaGSpFNDS0LVhJcG%2B6tPy78rswHLNpUqNcc0i4PVasA84YXiiCuOUxWLjdlEIs4ygDaFyp7SezyAfaLqAQsRZgn6URMFOoGarml5EbxxmFc%2BOzzFsslTWY5y3eDDinb7ABjqkAcabCHJNdABHBYpjJ0hmFlDVLtFkvLvdBSmeRCvjtJVCkLJXRqIyt38%2FSNbHiVxML3giskkxZcU0C%2Fbv%2F3X1MsTUYzFcwfazFnCGUO%2BmDb7xWQmBbUqZ8PIVZI2yR6MEYWsGkVmN4AgX0HXbO%2FS3BnnJyMd82QRbROFu01yAFiaXJWKaxSBo5ZglA6oRY9ybiLDt7MRrrIQBtUZoE9sN2yZekpva&X-Amz-Signature=fa012909166cea91d1005e75757c6864a9b50871b348314176a8063a216e55c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULCLNSB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDflLyR95JkIUlbBE5SY%2FJH6rclnGE5mdLKYYf76U3DzgIhAPDd1EiCWSKaCqYz1xDinnxU2hG7gEouibUSmS4PvLoIKv8DCHcQABoMNjM3NDIzMTgzODA1IgzbjJWx1rVibg3MD7Yq3AP3bv5H4wBMWfh949gxSrQ017u7Kh2qK9ykcUdiKKn3cXXhMUk6BVdjidk2GeyDook%2B9M3rXkIuiS5aN2c3zubnRubd0KQ5n9RnES3zVWqH1aqXinjPe9OfC9aO0z6zHNTLx4qRQ4wrzrQcuunRRGQxh14u2Nz77iu9t9h%2F7CRIBA9IOe1VFw3IHrBbVFzkXDM6OjPgZqK1C7lDur2wZn8BdDvAQlGCoZsnUYsOcH3ydIu3UCDMjP4VWwIHiG5jHc%2BC5X5u%2FHuAmVlLjVHnE4%2B7zO8S%2FvNRMYy2%2B8ghcrdcrmhkaLKZAOjiih5c407NPVNr788hFPe5xzNJPr1p3I%2FMVLOQ%2BR5xiCGkmKwvhVdDQoEcFS22wL1zj6EOM2Qn5UkO%2BSAIjMw4r6yHrK4kAt%2B2HBWDdNTmQwwnGsvS9ugUlpcjkz%2FXKkc3YzLcBOEBbhrzCDIvxeugjTsfw84tjRCBj%2Fvhj%2FXVEN1Eam03hs4FDmsG6iEJUagAzBgk8Xbe%2F3qsaGSpFNDS0LVhJcG%2B6tPy78rswHLNpUqNcc0i4PVasA84YXiiCuOUxWLjdlEIs4ygDaFyp7SezyAfaLqAQsRZgn6URMFOoGarml5EbxxmFc%2BOzzFsslTWY5y3eDDinb7ABjqkAcabCHJNdABHBYpjJ0hmFlDVLtFkvLvdBSmeRCvjtJVCkLJXRqIyt38%2FSNbHiVxML3giskkxZcU0C%2Fbv%2F3X1MsTUYzFcwfazFnCGUO%2BmDb7xWQmBbUqZ8PIVZI2yR6MEYWsGkVmN4AgX0HXbO%2FS3BnnJyMd82QRbROFu01yAFiaXJWKaxSBo5ZglA6oRY9ybiLDt7MRrrIQBtUZoE9sN2yZekpva&X-Amz-Signature=68a430d7aec7a651e736688eb5c4cbb868641fa21eceddc8d02b69a59b2cd207&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULCLNSB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDflLyR95JkIUlbBE5SY%2FJH6rclnGE5mdLKYYf76U3DzgIhAPDd1EiCWSKaCqYz1xDinnxU2hG7gEouibUSmS4PvLoIKv8DCHcQABoMNjM3NDIzMTgzODA1IgzbjJWx1rVibg3MD7Yq3AP3bv5H4wBMWfh949gxSrQ017u7Kh2qK9ykcUdiKKn3cXXhMUk6BVdjidk2GeyDook%2B9M3rXkIuiS5aN2c3zubnRubd0KQ5n9RnES3zVWqH1aqXinjPe9OfC9aO0z6zHNTLx4qRQ4wrzrQcuunRRGQxh14u2Nz77iu9t9h%2F7CRIBA9IOe1VFw3IHrBbVFzkXDM6OjPgZqK1C7lDur2wZn8BdDvAQlGCoZsnUYsOcH3ydIu3UCDMjP4VWwIHiG5jHc%2BC5X5u%2FHuAmVlLjVHnE4%2B7zO8S%2FvNRMYy2%2B8ghcrdcrmhkaLKZAOjiih5c407NPVNr788hFPe5xzNJPr1p3I%2FMVLOQ%2BR5xiCGkmKwvhVdDQoEcFS22wL1zj6EOM2Qn5UkO%2BSAIjMw4r6yHrK4kAt%2B2HBWDdNTmQwwnGsvS9ugUlpcjkz%2FXKkc3YzLcBOEBbhrzCDIvxeugjTsfw84tjRCBj%2Fvhj%2FXVEN1Eam03hs4FDmsG6iEJUagAzBgk8Xbe%2F3qsaGSpFNDS0LVhJcG%2B6tPy78rswHLNpUqNcc0i4PVasA84YXiiCuOUxWLjdlEIs4ygDaFyp7SezyAfaLqAQsRZgn6URMFOoGarml5EbxxmFc%2BOzzFsslTWY5y3eDDinb7ABjqkAcabCHJNdABHBYpjJ0hmFlDVLtFkvLvdBSmeRCvjtJVCkLJXRqIyt38%2FSNbHiVxML3giskkxZcU0C%2Fbv%2F3X1MsTUYzFcwfazFnCGUO%2BmDb7xWQmBbUqZ8PIVZI2yR6MEYWsGkVmN4AgX0HXbO%2FS3BnnJyMd82QRbROFu01yAFiaXJWKaxSBo5ZglA6oRY9ybiLDt7MRrrIQBtUZoE9sN2yZekpva&X-Amz-Signature=b0ab06d507688570da1c715b5797daef008f3a05ab7b41a771846ccbb700af16&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULCLNSB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDflLyR95JkIUlbBE5SY%2FJH6rclnGE5mdLKYYf76U3DzgIhAPDd1EiCWSKaCqYz1xDinnxU2hG7gEouibUSmS4PvLoIKv8DCHcQABoMNjM3NDIzMTgzODA1IgzbjJWx1rVibg3MD7Yq3AP3bv5H4wBMWfh949gxSrQ017u7Kh2qK9ykcUdiKKn3cXXhMUk6BVdjidk2GeyDook%2B9M3rXkIuiS5aN2c3zubnRubd0KQ5n9RnES3zVWqH1aqXinjPe9OfC9aO0z6zHNTLx4qRQ4wrzrQcuunRRGQxh14u2Nz77iu9t9h%2F7CRIBA9IOe1VFw3IHrBbVFzkXDM6OjPgZqK1C7lDur2wZn8BdDvAQlGCoZsnUYsOcH3ydIu3UCDMjP4VWwIHiG5jHc%2BC5X5u%2FHuAmVlLjVHnE4%2B7zO8S%2FvNRMYy2%2B8ghcrdcrmhkaLKZAOjiih5c407NPVNr788hFPe5xzNJPr1p3I%2FMVLOQ%2BR5xiCGkmKwvhVdDQoEcFS22wL1zj6EOM2Qn5UkO%2BSAIjMw4r6yHrK4kAt%2B2HBWDdNTmQwwnGsvS9ugUlpcjkz%2FXKkc3YzLcBOEBbhrzCDIvxeugjTsfw84tjRCBj%2Fvhj%2FXVEN1Eam03hs4FDmsG6iEJUagAzBgk8Xbe%2F3qsaGSpFNDS0LVhJcG%2B6tPy78rswHLNpUqNcc0i4PVasA84YXiiCuOUxWLjdlEIs4ygDaFyp7SezyAfaLqAQsRZgn6URMFOoGarml5EbxxmFc%2BOzzFsslTWY5y3eDDinb7ABjqkAcabCHJNdABHBYpjJ0hmFlDVLtFkvLvdBSmeRCvjtJVCkLJXRqIyt38%2FSNbHiVxML3giskkxZcU0C%2Fbv%2F3X1MsTUYzFcwfazFnCGUO%2BmDb7xWQmBbUqZ8PIVZI2yR6MEYWsGkVmN4AgX0HXbO%2FS3BnnJyMd82QRbROFu01yAFiaXJWKaxSBo5ZglA6oRY9ybiLDt7MRrrIQBtUZoE9sN2yZekpva&X-Amz-Signature=31d5172922b5a1f3eb05fa15ed642cd94d56b4c44425577a117e16e5c7b8d8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULCLNSB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDflLyR95JkIUlbBE5SY%2FJH6rclnGE5mdLKYYf76U3DzgIhAPDd1EiCWSKaCqYz1xDinnxU2hG7gEouibUSmS4PvLoIKv8DCHcQABoMNjM3NDIzMTgzODA1IgzbjJWx1rVibg3MD7Yq3AP3bv5H4wBMWfh949gxSrQ017u7Kh2qK9ykcUdiKKn3cXXhMUk6BVdjidk2GeyDook%2B9M3rXkIuiS5aN2c3zubnRubd0KQ5n9RnES3zVWqH1aqXinjPe9OfC9aO0z6zHNTLx4qRQ4wrzrQcuunRRGQxh14u2Nz77iu9t9h%2F7CRIBA9IOe1VFw3IHrBbVFzkXDM6OjPgZqK1C7lDur2wZn8BdDvAQlGCoZsnUYsOcH3ydIu3UCDMjP4VWwIHiG5jHc%2BC5X5u%2FHuAmVlLjVHnE4%2B7zO8S%2FvNRMYy2%2B8ghcrdcrmhkaLKZAOjiih5c407NPVNr788hFPe5xzNJPr1p3I%2FMVLOQ%2BR5xiCGkmKwvhVdDQoEcFS22wL1zj6EOM2Qn5UkO%2BSAIjMw4r6yHrK4kAt%2B2HBWDdNTmQwwnGsvS9ugUlpcjkz%2FXKkc3YzLcBOEBbhrzCDIvxeugjTsfw84tjRCBj%2Fvhj%2FXVEN1Eam03hs4FDmsG6iEJUagAzBgk8Xbe%2F3qsaGSpFNDS0LVhJcG%2B6tPy78rswHLNpUqNcc0i4PVasA84YXiiCuOUxWLjdlEIs4ygDaFyp7SezyAfaLqAQsRZgn6URMFOoGarml5EbxxmFc%2BOzzFsslTWY5y3eDDinb7ABjqkAcabCHJNdABHBYpjJ0hmFlDVLtFkvLvdBSmeRCvjtJVCkLJXRqIyt38%2FSNbHiVxML3giskkxZcU0C%2Fbv%2F3X1MsTUYzFcwfazFnCGUO%2BmDb7xWQmBbUqZ8PIVZI2yR6MEYWsGkVmN4AgX0HXbO%2FS3BnnJyMd82QRbROFu01yAFiaXJWKaxSBo5ZglA6oRY9ybiLDt7MRrrIQBtUZoE9sN2yZekpva&X-Amz-Signature=70e68b4a10e9b624c2f7dc7bcc937c7565f37fe0799918bdb2b321ef79bc2786&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
