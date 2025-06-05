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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NYDEYV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFheR5%2FHwLwyoQOqsVmDLVIhwvXfuTpuGQXTcZNXkin7AiEAtksHXyTQVHx2u5HPCs6DT1PB37CRnRkxX7HC2d%2BEGogq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPvTF%2BJ99ZCgAHhYBircA6uXozwcWecrZWoOukzW9IdfkMzDLXRou40DYKKF%2BQ%2FhQFt5u4yPghM48yHkfqbu6%2BzV%2BHUxfKJkvtUeyzOq366MqtI3Lgz%2Bvsu81uQiNOUP3rrer5MhkQlk%2BeBV%2FeC23WzzsoZJtOOgs3gIDGVqfg%2FMx4oQu6x9XOaoui8yZC0VgVeq731U%2BqhY3kzqb71OWCfcSnB0x6fjtwNXUrggk5%2FeDfS3srp2ySVo4hoSAlZ6Ilk9Gu9zPg3vQzT%2BATqYlTBbFfiHZWrEE9MGBqiwoqiriIIj3O%2FMvsXHLpRY1COhC8%2B1Eiqe8IFmaEQAJWf%2BGzwspgGeNpwIxr7imh9jMF4dkCOEOUcVuaA6RX9jUYvoSt%2FGyWukv3ntuNzndXQra4Uea%2BqC6hMBmLteDf7GhX5Khpym4HBJ13K8lNUno0TAaeNejcm1bVAmpq4c7%2FzrLogp%2BJckHji%2BZ8keQcI15iBv%2BG1j4rXMOzIIli28ZmNuO5EZOmIjAeIJiMiGX4Xapw7r3uVa3aLvnmtOqmGs93FNisggrSyLchGU5EMKpAyzSOQGPLxeC%2FCqj76QgRtdzjR7JwQhtZw662urKlHlad9%2FoeG5Jb8NW0JLC2%2BbjEsdAO4io8C0lnJevI7OMJ%2BuhcIGOqUBm2Q8nFwFuXkLtE14Z%2BEH30YODRT3NYxQ9ps59kWkbRRTrczxTjQHEOgGeWONrf2vY1Jbdn1zkyfxm3GydwdQ8v2TWyEfqoogVJiao7WwofnPSiqeMXPMfApMntSPfG8RTAynFdXPsP8vfiooVEJAE2e192S4XUzrueumJN9gMKrwqTyYO5NesVFY0397c1PkY%2FOK77cOlgH5VOK%2FdpQKC5RHCBL8&X-Amz-Signature=3ef1e7556c9ce9cdd755e86cb50a14bf68340078cdb45968368b10e08b4bc050&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NYDEYV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFheR5%2FHwLwyoQOqsVmDLVIhwvXfuTpuGQXTcZNXkin7AiEAtksHXyTQVHx2u5HPCs6DT1PB37CRnRkxX7HC2d%2BEGogq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPvTF%2BJ99ZCgAHhYBircA6uXozwcWecrZWoOukzW9IdfkMzDLXRou40DYKKF%2BQ%2FhQFt5u4yPghM48yHkfqbu6%2BzV%2BHUxfKJkvtUeyzOq366MqtI3Lgz%2Bvsu81uQiNOUP3rrer5MhkQlk%2BeBV%2FeC23WzzsoZJtOOgs3gIDGVqfg%2FMx4oQu6x9XOaoui8yZC0VgVeq731U%2BqhY3kzqb71OWCfcSnB0x6fjtwNXUrggk5%2FeDfS3srp2ySVo4hoSAlZ6Ilk9Gu9zPg3vQzT%2BATqYlTBbFfiHZWrEE9MGBqiwoqiriIIj3O%2FMvsXHLpRY1COhC8%2B1Eiqe8IFmaEQAJWf%2BGzwspgGeNpwIxr7imh9jMF4dkCOEOUcVuaA6RX9jUYvoSt%2FGyWukv3ntuNzndXQra4Uea%2BqC6hMBmLteDf7GhX5Khpym4HBJ13K8lNUno0TAaeNejcm1bVAmpq4c7%2FzrLogp%2BJckHji%2BZ8keQcI15iBv%2BG1j4rXMOzIIli28ZmNuO5EZOmIjAeIJiMiGX4Xapw7r3uVa3aLvnmtOqmGs93FNisggrSyLchGU5EMKpAyzSOQGPLxeC%2FCqj76QgRtdzjR7JwQhtZw662urKlHlad9%2FoeG5Jb8NW0JLC2%2BbjEsdAO4io8C0lnJevI7OMJ%2BuhcIGOqUBm2Q8nFwFuXkLtE14Z%2BEH30YODRT3NYxQ9ps59kWkbRRTrczxTjQHEOgGeWONrf2vY1Jbdn1zkyfxm3GydwdQ8v2TWyEfqoogVJiao7WwofnPSiqeMXPMfApMntSPfG8RTAynFdXPsP8vfiooVEJAE2e192S4XUzrueumJN9gMKrwqTyYO5NesVFY0397c1PkY%2FOK77cOlgH5VOK%2FdpQKC5RHCBL8&X-Amz-Signature=8a500f6be13771533fa9b91ce40b3dbb22b69f2e47ca49e68168f62b81c3a0bb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NYDEYV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFheR5%2FHwLwyoQOqsVmDLVIhwvXfuTpuGQXTcZNXkin7AiEAtksHXyTQVHx2u5HPCs6DT1PB37CRnRkxX7HC2d%2BEGogq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPvTF%2BJ99ZCgAHhYBircA6uXozwcWecrZWoOukzW9IdfkMzDLXRou40DYKKF%2BQ%2FhQFt5u4yPghM48yHkfqbu6%2BzV%2BHUxfKJkvtUeyzOq366MqtI3Lgz%2Bvsu81uQiNOUP3rrer5MhkQlk%2BeBV%2FeC23WzzsoZJtOOgs3gIDGVqfg%2FMx4oQu6x9XOaoui8yZC0VgVeq731U%2BqhY3kzqb71OWCfcSnB0x6fjtwNXUrggk5%2FeDfS3srp2ySVo4hoSAlZ6Ilk9Gu9zPg3vQzT%2BATqYlTBbFfiHZWrEE9MGBqiwoqiriIIj3O%2FMvsXHLpRY1COhC8%2B1Eiqe8IFmaEQAJWf%2BGzwspgGeNpwIxr7imh9jMF4dkCOEOUcVuaA6RX9jUYvoSt%2FGyWukv3ntuNzndXQra4Uea%2BqC6hMBmLteDf7GhX5Khpym4HBJ13K8lNUno0TAaeNejcm1bVAmpq4c7%2FzrLogp%2BJckHji%2BZ8keQcI15iBv%2BG1j4rXMOzIIli28ZmNuO5EZOmIjAeIJiMiGX4Xapw7r3uVa3aLvnmtOqmGs93FNisggrSyLchGU5EMKpAyzSOQGPLxeC%2FCqj76QgRtdzjR7JwQhtZw662urKlHlad9%2FoeG5Jb8NW0JLC2%2BbjEsdAO4io8C0lnJevI7OMJ%2BuhcIGOqUBm2Q8nFwFuXkLtE14Z%2BEH30YODRT3NYxQ9ps59kWkbRRTrczxTjQHEOgGeWONrf2vY1Jbdn1zkyfxm3GydwdQ8v2TWyEfqoogVJiao7WwofnPSiqeMXPMfApMntSPfG8RTAynFdXPsP8vfiooVEJAE2e192S4XUzrueumJN9gMKrwqTyYO5NesVFY0397c1PkY%2FOK77cOlgH5VOK%2FdpQKC5RHCBL8&X-Amz-Signature=09e603690cd39d2be7b217ed440efbcbf997db38cfd8383fea92e80ce163e043&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NYDEYV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFheR5%2FHwLwyoQOqsVmDLVIhwvXfuTpuGQXTcZNXkin7AiEAtksHXyTQVHx2u5HPCs6DT1PB37CRnRkxX7HC2d%2BEGogq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPvTF%2BJ99ZCgAHhYBircA6uXozwcWecrZWoOukzW9IdfkMzDLXRou40DYKKF%2BQ%2FhQFt5u4yPghM48yHkfqbu6%2BzV%2BHUxfKJkvtUeyzOq366MqtI3Lgz%2Bvsu81uQiNOUP3rrer5MhkQlk%2BeBV%2FeC23WzzsoZJtOOgs3gIDGVqfg%2FMx4oQu6x9XOaoui8yZC0VgVeq731U%2BqhY3kzqb71OWCfcSnB0x6fjtwNXUrggk5%2FeDfS3srp2ySVo4hoSAlZ6Ilk9Gu9zPg3vQzT%2BATqYlTBbFfiHZWrEE9MGBqiwoqiriIIj3O%2FMvsXHLpRY1COhC8%2B1Eiqe8IFmaEQAJWf%2BGzwspgGeNpwIxr7imh9jMF4dkCOEOUcVuaA6RX9jUYvoSt%2FGyWukv3ntuNzndXQra4Uea%2BqC6hMBmLteDf7GhX5Khpym4HBJ13K8lNUno0TAaeNejcm1bVAmpq4c7%2FzrLogp%2BJckHji%2BZ8keQcI15iBv%2BG1j4rXMOzIIli28ZmNuO5EZOmIjAeIJiMiGX4Xapw7r3uVa3aLvnmtOqmGs93FNisggrSyLchGU5EMKpAyzSOQGPLxeC%2FCqj76QgRtdzjR7JwQhtZw662urKlHlad9%2FoeG5Jb8NW0JLC2%2BbjEsdAO4io8C0lnJevI7OMJ%2BuhcIGOqUBm2Q8nFwFuXkLtE14Z%2BEH30YODRT3NYxQ9ps59kWkbRRTrczxTjQHEOgGeWONrf2vY1Jbdn1zkyfxm3GydwdQ8v2TWyEfqoogVJiao7WwofnPSiqeMXPMfApMntSPfG8RTAynFdXPsP8vfiooVEJAE2e192S4XUzrueumJN9gMKrwqTyYO5NesVFY0397c1PkY%2FOK77cOlgH5VOK%2FdpQKC5RHCBL8&X-Amz-Signature=941b6aaafc13c45529cb76c7f36ec82bcf538d218e176653eebdfaab2f86a3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NYDEYV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFheR5%2FHwLwyoQOqsVmDLVIhwvXfuTpuGQXTcZNXkin7AiEAtksHXyTQVHx2u5HPCs6DT1PB37CRnRkxX7HC2d%2BEGogq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPvTF%2BJ99ZCgAHhYBircA6uXozwcWecrZWoOukzW9IdfkMzDLXRou40DYKKF%2BQ%2FhQFt5u4yPghM48yHkfqbu6%2BzV%2BHUxfKJkvtUeyzOq366MqtI3Lgz%2Bvsu81uQiNOUP3rrer5MhkQlk%2BeBV%2FeC23WzzsoZJtOOgs3gIDGVqfg%2FMx4oQu6x9XOaoui8yZC0VgVeq731U%2BqhY3kzqb71OWCfcSnB0x6fjtwNXUrggk5%2FeDfS3srp2ySVo4hoSAlZ6Ilk9Gu9zPg3vQzT%2BATqYlTBbFfiHZWrEE9MGBqiwoqiriIIj3O%2FMvsXHLpRY1COhC8%2B1Eiqe8IFmaEQAJWf%2BGzwspgGeNpwIxr7imh9jMF4dkCOEOUcVuaA6RX9jUYvoSt%2FGyWukv3ntuNzndXQra4Uea%2BqC6hMBmLteDf7GhX5Khpym4HBJ13K8lNUno0TAaeNejcm1bVAmpq4c7%2FzrLogp%2BJckHji%2BZ8keQcI15iBv%2BG1j4rXMOzIIli28ZmNuO5EZOmIjAeIJiMiGX4Xapw7r3uVa3aLvnmtOqmGs93FNisggrSyLchGU5EMKpAyzSOQGPLxeC%2FCqj76QgRtdzjR7JwQhtZw662urKlHlad9%2FoeG5Jb8NW0JLC2%2BbjEsdAO4io8C0lnJevI7OMJ%2BuhcIGOqUBm2Q8nFwFuXkLtE14Z%2BEH30YODRT3NYxQ9ps59kWkbRRTrczxTjQHEOgGeWONrf2vY1Jbdn1zkyfxm3GydwdQ8v2TWyEfqoogVJiao7WwofnPSiqeMXPMfApMntSPfG8RTAynFdXPsP8vfiooVEJAE2e192S4XUzrueumJN9gMKrwqTyYO5NesVFY0397c1PkY%2FOK77cOlgH5VOK%2FdpQKC5RHCBL8&X-Amz-Signature=10cb5c44f8029a356fc174fadb97463d4e3a485531a0f14ba096d932ac33dbcd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
