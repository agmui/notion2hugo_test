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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAABDSO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFlxs06gs9h6VF%2FAiHD7gKE%2BKhB5knWXHtT5mm6sKBggIhAPAA%2BrJ4X2av6UFeyO3BOvvrwG026GeUD62znyqd0%2FPVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwsTeWuG01NSi8Yx3gq3APwHGDQ91NcPUcOKZW4e5ECobIZFqOAUNKEljAoz2ke1lTkQZgnQy0ISP40f9KVlgWXTj0mCERP9c6UyJAz9WY%2B0YpAN1ro8Huo8Hi%2B1W82Yu1RxgaEke96tbBnggFC28W9tiNfuH6nQCs7TMJvzRvfxA1zFqqxZYOnKpFVa6jOfTbZJRzDvU0D5bwlgyvIXG9r0j3EaoQ998KxW5%2B9hI6i7QPxCo0APm5GKcjRP4bVaDYuNF54H1C0fz4V3c42%2FJRSb%2F3TScVo%2BurXNEfELmtl7gx7qhQCkvDsjCDzCEYo2d9dfCSNeVP1W9d3bKN0SMnKi5c%2FmfhyJxutIJ6NmpmP%2BB87vcVLSE3vhZfLiSZoQWNubvj58VFaMtYGVMxrrZjSdp2qmyw5e%2F8rhRafAc48dPJoWjPITMpwxk%2BpD83OU3exGvDNZD9YFhA9GXmaWPHxlJvlLDssQT7ZJ6Pc5YN60gB67bPvLgOAd9JJ6QS8CCF9SiHBQGSf8AQ0mE0HJ%2FYNiQ2jhsG%2BFUpVWeYrWb57J6Gg%2B5aVFi9%2Fpg4p0HNbH0ayXFaRlbsIYpcKNLzQLGsDiLsLLCCkKxnI6Vh9JvB%2Fg6dlDbiPcv%2BL1JlNB9lSYY9nYmQqm1wkgF7RwjD45dHBBjqkAc%2BRMiTZlKfqi6ZRxqSuzcb0Z4nvjUi0uX44x7ZdNccQZXSFYdp%2Fvn9FF0eSS%2F6EsRruxFbTfns6iGZSyI3zLdql3pfyTuXvVPpMfJc03LniAQAlbp11mB67PydZBTVODba2LF5YorgC8Z7aEOj%2FoCsEFtVkp2NbtqCGdZ877boaTcDqWg6nQqnOLKLmuLcjVzbSVPEp4%2B0O1BLFPjX2xZtN5m56&X-Amz-Signature=4bad106958d74e3f60fe71199ba637d50a05db9a46a08eb574336370a177054c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAABDSO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFlxs06gs9h6VF%2FAiHD7gKE%2BKhB5knWXHtT5mm6sKBggIhAPAA%2BrJ4X2av6UFeyO3BOvvrwG026GeUD62znyqd0%2FPVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwsTeWuG01NSi8Yx3gq3APwHGDQ91NcPUcOKZW4e5ECobIZFqOAUNKEljAoz2ke1lTkQZgnQy0ISP40f9KVlgWXTj0mCERP9c6UyJAz9WY%2B0YpAN1ro8Huo8Hi%2B1W82Yu1RxgaEke96tbBnggFC28W9tiNfuH6nQCs7TMJvzRvfxA1zFqqxZYOnKpFVa6jOfTbZJRzDvU0D5bwlgyvIXG9r0j3EaoQ998KxW5%2B9hI6i7QPxCo0APm5GKcjRP4bVaDYuNF54H1C0fz4V3c42%2FJRSb%2F3TScVo%2BurXNEfELmtl7gx7qhQCkvDsjCDzCEYo2d9dfCSNeVP1W9d3bKN0SMnKi5c%2FmfhyJxutIJ6NmpmP%2BB87vcVLSE3vhZfLiSZoQWNubvj58VFaMtYGVMxrrZjSdp2qmyw5e%2F8rhRafAc48dPJoWjPITMpwxk%2BpD83OU3exGvDNZD9YFhA9GXmaWPHxlJvlLDssQT7ZJ6Pc5YN60gB67bPvLgOAd9JJ6QS8CCF9SiHBQGSf8AQ0mE0HJ%2FYNiQ2jhsG%2BFUpVWeYrWb57J6Gg%2B5aVFi9%2Fpg4p0HNbH0ayXFaRlbsIYpcKNLzQLGsDiLsLLCCkKxnI6Vh9JvB%2Fg6dlDbiPcv%2BL1JlNB9lSYY9nYmQqm1wkgF7RwjD45dHBBjqkAc%2BRMiTZlKfqi6ZRxqSuzcb0Z4nvjUi0uX44x7ZdNccQZXSFYdp%2Fvn9FF0eSS%2F6EsRruxFbTfns6iGZSyI3zLdql3pfyTuXvVPpMfJc03LniAQAlbp11mB67PydZBTVODba2LF5YorgC8Z7aEOj%2FoCsEFtVkp2NbtqCGdZ877boaTcDqWg6nQqnOLKLmuLcjVzbSVPEp4%2B0O1BLFPjX2xZtN5m56&X-Amz-Signature=ba7fed49d50f953489eced785efb118d7cc3b6541994daeb41680160d43e3b48&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAABDSO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFlxs06gs9h6VF%2FAiHD7gKE%2BKhB5knWXHtT5mm6sKBggIhAPAA%2BrJ4X2av6UFeyO3BOvvrwG026GeUD62znyqd0%2FPVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwsTeWuG01NSi8Yx3gq3APwHGDQ91NcPUcOKZW4e5ECobIZFqOAUNKEljAoz2ke1lTkQZgnQy0ISP40f9KVlgWXTj0mCERP9c6UyJAz9WY%2B0YpAN1ro8Huo8Hi%2B1W82Yu1RxgaEke96tbBnggFC28W9tiNfuH6nQCs7TMJvzRvfxA1zFqqxZYOnKpFVa6jOfTbZJRzDvU0D5bwlgyvIXG9r0j3EaoQ998KxW5%2B9hI6i7QPxCo0APm5GKcjRP4bVaDYuNF54H1C0fz4V3c42%2FJRSb%2F3TScVo%2BurXNEfELmtl7gx7qhQCkvDsjCDzCEYo2d9dfCSNeVP1W9d3bKN0SMnKi5c%2FmfhyJxutIJ6NmpmP%2BB87vcVLSE3vhZfLiSZoQWNubvj58VFaMtYGVMxrrZjSdp2qmyw5e%2F8rhRafAc48dPJoWjPITMpwxk%2BpD83OU3exGvDNZD9YFhA9GXmaWPHxlJvlLDssQT7ZJ6Pc5YN60gB67bPvLgOAd9JJ6QS8CCF9SiHBQGSf8AQ0mE0HJ%2FYNiQ2jhsG%2BFUpVWeYrWb57J6Gg%2B5aVFi9%2Fpg4p0HNbH0ayXFaRlbsIYpcKNLzQLGsDiLsLLCCkKxnI6Vh9JvB%2Fg6dlDbiPcv%2BL1JlNB9lSYY9nYmQqm1wkgF7RwjD45dHBBjqkAc%2BRMiTZlKfqi6ZRxqSuzcb0Z4nvjUi0uX44x7ZdNccQZXSFYdp%2Fvn9FF0eSS%2F6EsRruxFbTfns6iGZSyI3zLdql3pfyTuXvVPpMfJc03LniAQAlbp11mB67PydZBTVODba2LF5YorgC8Z7aEOj%2FoCsEFtVkp2NbtqCGdZ877boaTcDqWg6nQqnOLKLmuLcjVzbSVPEp4%2B0O1BLFPjX2xZtN5m56&X-Amz-Signature=2454e3178c280f924508f9c88dfc17f0181f3af9c46fc6d6b79e7a69f7049952&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAABDSO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFlxs06gs9h6VF%2FAiHD7gKE%2BKhB5knWXHtT5mm6sKBggIhAPAA%2BrJ4X2av6UFeyO3BOvvrwG026GeUD62znyqd0%2FPVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwsTeWuG01NSi8Yx3gq3APwHGDQ91NcPUcOKZW4e5ECobIZFqOAUNKEljAoz2ke1lTkQZgnQy0ISP40f9KVlgWXTj0mCERP9c6UyJAz9WY%2B0YpAN1ro8Huo8Hi%2B1W82Yu1RxgaEke96tbBnggFC28W9tiNfuH6nQCs7TMJvzRvfxA1zFqqxZYOnKpFVa6jOfTbZJRzDvU0D5bwlgyvIXG9r0j3EaoQ998KxW5%2B9hI6i7QPxCo0APm5GKcjRP4bVaDYuNF54H1C0fz4V3c42%2FJRSb%2F3TScVo%2BurXNEfELmtl7gx7qhQCkvDsjCDzCEYo2d9dfCSNeVP1W9d3bKN0SMnKi5c%2FmfhyJxutIJ6NmpmP%2BB87vcVLSE3vhZfLiSZoQWNubvj58VFaMtYGVMxrrZjSdp2qmyw5e%2F8rhRafAc48dPJoWjPITMpwxk%2BpD83OU3exGvDNZD9YFhA9GXmaWPHxlJvlLDssQT7ZJ6Pc5YN60gB67bPvLgOAd9JJ6QS8CCF9SiHBQGSf8AQ0mE0HJ%2FYNiQ2jhsG%2BFUpVWeYrWb57J6Gg%2B5aVFi9%2Fpg4p0HNbH0ayXFaRlbsIYpcKNLzQLGsDiLsLLCCkKxnI6Vh9JvB%2Fg6dlDbiPcv%2BL1JlNB9lSYY9nYmQqm1wkgF7RwjD45dHBBjqkAc%2BRMiTZlKfqi6ZRxqSuzcb0Z4nvjUi0uX44x7ZdNccQZXSFYdp%2Fvn9FF0eSS%2F6EsRruxFbTfns6iGZSyI3zLdql3pfyTuXvVPpMfJc03LniAQAlbp11mB67PydZBTVODba2LF5YorgC8Z7aEOj%2FoCsEFtVkp2NbtqCGdZ877boaTcDqWg6nQqnOLKLmuLcjVzbSVPEp4%2B0O1BLFPjX2xZtN5m56&X-Amz-Signature=1579905c562a3b117b4a6ff25790247dada3b07d26f0c250b5deafc39f97a0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAABDSO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFlxs06gs9h6VF%2FAiHD7gKE%2BKhB5knWXHtT5mm6sKBggIhAPAA%2BrJ4X2av6UFeyO3BOvvrwG026GeUD62znyqd0%2FPVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwsTeWuG01NSi8Yx3gq3APwHGDQ91NcPUcOKZW4e5ECobIZFqOAUNKEljAoz2ke1lTkQZgnQy0ISP40f9KVlgWXTj0mCERP9c6UyJAz9WY%2B0YpAN1ro8Huo8Hi%2B1W82Yu1RxgaEke96tbBnggFC28W9tiNfuH6nQCs7TMJvzRvfxA1zFqqxZYOnKpFVa6jOfTbZJRzDvU0D5bwlgyvIXG9r0j3EaoQ998KxW5%2B9hI6i7QPxCo0APm5GKcjRP4bVaDYuNF54H1C0fz4V3c42%2FJRSb%2F3TScVo%2BurXNEfELmtl7gx7qhQCkvDsjCDzCEYo2d9dfCSNeVP1W9d3bKN0SMnKi5c%2FmfhyJxutIJ6NmpmP%2BB87vcVLSE3vhZfLiSZoQWNubvj58VFaMtYGVMxrrZjSdp2qmyw5e%2F8rhRafAc48dPJoWjPITMpwxk%2BpD83OU3exGvDNZD9YFhA9GXmaWPHxlJvlLDssQT7ZJ6Pc5YN60gB67bPvLgOAd9JJ6QS8CCF9SiHBQGSf8AQ0mE0HJ%2FYNiQ2jhsG%2BFUpVWeYrWb57J6Gg%2B5aVFi9%2Fpg4p0HNbH0ayXFaRlbsIYpcKNLzQLGsDiLsLLCCkKxnI6Vh9JvB%2Fg6dlDbiPcv%2BL1JlNB9lSYY9nYmQqm1wkgF7RwjD45dHBBjqkAc%2BRMiTZlKfqi6ZRxqSuzcb0Z4nvjUi0uX44x7ZdNccQZXSFYdp%2Fvn9FF0eSS%2F6EsRruxFbTfns6iGZSyI3zLdql3pfyTuXvVPpMfJc03LniAQAlbp11mB67PydZBTVODba2LF5YorgC8Z7aEOj%2FoCsEFtVkp2NbtqCGdZ877boaTcDqWg6nQqnOLKLmuLcjVzbSVPEp4%2B0O1BLFPjX2xZtN5m56&X-Amz-Signature=7373f6c22e74ccfd269cabf0506c6310a46d676c32a8d32b978de81c20542470&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
