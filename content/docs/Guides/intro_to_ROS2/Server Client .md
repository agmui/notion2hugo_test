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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GD2JQV4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs66lakIf8FssCCd4lTVRAXkFuykq5zE63aCfODnB4FgIgB%2BX3K0KBce5UYICAWH7bshqpq%2BKB9WteNkV%2Bh1n6wLAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwz9WOq9gTRJa7oxSrcA1Usr0ZyH%2BPEEt66Hu3RDmozW59a61PUKoZViRLNzKyMYnv11XYZwzleVADVVm2QWrf6En%2BGXDrOQ0NdJvsjBH7hjCi%2FEWuHazJNNWkD1U34YNA3W%2Bqixir24qSYhCGC8T%2BD7AiraKebNXRwUUrzmz38a2%2FNJNO9mwGVVQBJPSEYIOQFRbYGWV5nBE2uSmBgHBmW%2F5yyInVDC04PS5SeXWIR0Bi8d87R1N%2BjWg%2FvzayfX6XyRx9RhqkBI%2BT5hFd5pyCi6oXJfmm30ra%2FTvfkv2Ouqs4npwR7GHT4MKVa9N1TOlraayMMUcM6%2BNhxc38Rv3K0Pkjwryr1PZ6BmH4bJEiVaG0vFglPDTXLAvIREWizd79OlVP2i1EnX142YjCEuBPKnfqJb1U6%2FizEss6PlVrs3dMf1SiKmPagng5H0C7vhQCyQDjgJTJAtlSnJJFmiemBQA04Xlwz%2FqbOpx2GcVw%2BfSD4HjG%2F1gd8WAnspJpjboSgMEIrRtg4yBSjLPZy17mY8Pq0UoJFtpmOrjH64ZaFwwZN0hJZkQxaWNm29Qh6So8FBAs9nmf2P70%2Be5zqL01GmA8aHDI43TVHPVICCNRIERIxDQJORYkSePt7rQ2rpNZfWrt42bEcf4vDMLWancIGOqUBpUuUCFsSDDiOlPzclZ2%2BGR%2B5NwOX8ZBQntYGapXqJ22ZaHA0y7NN1245B7D2jm36VeiXArLEkwaljaul134BCl1mcM%2FfMBql7rnXlaObmJrmiWwaERp76tNjulc4DGb2wCrtiY1f8opjVqkMI%2B1FOOTCmRO%2B%2BxpvNmdCqxXom%2Bo%2Brr%2BV5EFyhVd4zzKOHSlN2ZsDMxbq9GjzUjGiLih5YxQCoQ2a&X-Amz-Signature=6fa607a425945600bed3d67edc49759166c81892de6ce50fb7b6093d7b1187cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GD2JQV4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs66lakIf8FssCCd4lTVRAXkFuykq5zE63aCfODnB4FgIgB%2BX3K0KBce5UYICAWH7bshqpq%2BKB9WteNkV%2Bh1n6wLAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwz9WOq9gTRJa7oxSrcA1Usr0ZyH%2BPEEt66Hu3RDmozW59a61PUKoZViRLNzKyMYnv11XYZwzleVADVVm2QWrf6En%2BGXDrOQ0NdJvsjBH7hjCi%2FEWuHazJNNWkD1U34YNA3W%2Bqixir24qSYhCGC8T%2BD7AiraKebNXRwUUrzmz38a2%2FNJNO9mwGVVQBJPSEYIOQFRbYGWV5nBE2uSmBgHBmW%2F5yyInVDC04PS5SeXWIR0Bi8d87R1N%2BjWg%2FvzayfX6XyRx9RhqkBI%2BT5hFd5pyCi6oXJfmm30ra%2FTvfkv2Ouqs4npwR7GHT4MKVa9N1TOlraayMMUcM6%2BNhxc38Rv3K0Pkjwryr1PZ6BmH4bJEiVaG0vFglPDTXLAvIREWizd79OlVP2i1EnX142YjCEuBPKnfqJb1U6%2FizEss6PlVrs3dMf1SiKmPagng5H0C7vhQCyQDjgJTJAtlSnJJFmiemBQA04Xlwz%2FqbOpx2GcVw%2BfSD4HjG%2F1gd8WAnspJpjboSgMEIrRtg4yBSjLPZy17mY8Pq0UoJFtpmOrjH64ZaFwwZN0hJZkQxaWNm29Qh6So8FBAs9nmf2P70%2Be5zqL01GmA8aHDI43TVHPVICCNRIERIxDQJORYkSePt7rQ2rpNZfWrt42bEcf4vDMLWancIGOqUBpUuUCFsSDDiOlPzclZ2%2BGR%2B5NwOX8ZBQntYGapXqJ22ZaHA0y7NN1245B7D2jm36VeiXArLEkwaljaul134BCl1mcM%2FfMBql7rnXlaObmJrmiWwaERp76tNjulc4DGb2wCrtiY1f8opjVqkMI%2B1FOOTCmRO%2B%2BxpvNmdCqxXom%2Bo%2Brr%2BV5EFyhVd4zzKOHSlN2ZsDMxbq9GjzUjGiLih5YxQCoQ2a&X-Amz-Signature=3c678c40dc419d2e4dfbe957384776014b98df53566aba72a60a32f3d7b54610&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GD2JQV4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs66lakIf8FssCCd4lTVRAXkFuykq5zE63aCfODnB4FgIgB%2BX3K0KBce5UYICAWH7bshqpq%2BKB9WteNkV%2Bh1n6wLAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwz9WOq9gTRJa7oxSrcA1Usr0ZyH%2BPEEt66Hu3RDmozW59a61PUKoZViRLNzKyMYnv11XYZwzleVADVVm2QWrf6En%2BGXDrOQ0NdJvsjBH7hjCi%2FEWuHazJNNWkD1U34YNA3W%2Bqixir24qSYhCGC8T%2BD7AiraKebNXRwUUrzmz38a2%2FNJNO9mwGVVQBJPSEYIOQFRbYGWV5nBE2uSmBgHBmW%2F5yyInVDC04PS5SeXWIR0Bi8d87R1N%2BjWg%2FvzayfX6XyRx9RhqkBI%2BT5hFd5pyCi6oXJfmm30ra%2FTvfkv2Ouqs4npwR7GHT4MKVa9N1TOlraayMMUcM6%2BNhxc38Rv3K0Pkjwryr1PZ6BmH4bJEiVaG0vFglPDTXLAvIREWizd79OlVP2i1EnX142YjCEuBPKnfqJb1U6%2FizEss6PlVrs3dMf1SiKmPagng5H0C7vhQCyQDjgJTJAtlSnJJFmiemBQA04Xlwz%2FqbOpx2GcVw%2BfSD4HjG%2F1gd8WAnspJpjboSgMEIrRtg4yBSjLPZy17mY8Pq0UoJFtpmOrjH64ZaFwwZN0hJZkQxaWNm29Qh6So8FBAs9nmf2P70%2Be5zqL01GmA8aHDI43TVHPVICCNRIERIxDQJORYkSePt7rQ2rpNZfWrt42bEcf4vDMLWancIGOqUBpUuUCFsSDDiOlPzclZ2%2BGR%2B5NwOX8ZBQntYGapXqJ22ZaHA0y7NN1245B7D2jm36VeiXArLEkwaljaul134BCl1mcM%2FfMBql7rnXlaObmJrmiWwaERp76tNjulc4DGb2wCrtiY1f8opjVqkMI%2B1FOOTCmRO%2B%2BxpvNmdCqxXom%2Bo%2Brr%2BV5EFyhVd4zzKOHSlN2ZsDMxbq9GjzUjGiLih5YxQCoQ2a&X-Amz-Signature=9fe5d02a8e2f54496fefe067d81003760dcb8ff80369d9ee7d23f332073fe94a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GD2JQV4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs66lakIf8FssCCd4lTVRAXkFuykq5zE63aCfODnB4FgIgB%2BX3K0KBce5UYICAWH7bshqpq%2BKB9WteNkV%2Bh1n6wLAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwz9WOq9gTRJa7oxSrcA1Usr0ZyH%2BPEEt66Hu3RDmozW59a61PUKoZViRLNzKyMYnv11XYZwzleVADVVm2QWrf6En%2BGXDrOQ0NdJvsjBH7hjCi%2FEWuHazJNNWkD1U34YNA3W%2Bqixir24qSYhCGC8T%2BD7AiraKebNXRwUUrzmz38a2%2FNJNO9mwGVVQBJPSEYIOQFRbYGWV5nBE2uSmBgHBmW%2F5yyInVDC04PS5SeXWIR0Bi8d87R1N%2BjWg%2FvzayfX6XyRx9RhqkBI%2BT5hFd5pyCi6oXJfmm30ra%2FTvfkv2Ouqs4npwR7GHT4MKVa9N1TOlraayMMUcM6%2BNhxc38Rv3K0Pkjwryr1PZ6BmH4bJEiVaG0vFglPDTXLAvIREWizd79OlVP2i1EnX142YjCEuBPKnfqJb1U6%2FizEss6PlVrs3dMf1SiKmPagng5H0C7vhQCyQDjgJTJAtlSnJJFmiemBQA04Xlwz%2FqbOpx2GcVw%2BfSD4HjG%2F1gd8WAnspJpjboSgMEIrRtg4yBSjLPZy17mY8Pq0UoJFtpmOrjH64ZaFwwZN0hJZkQxaWNm29Qh6So8FBAs9nmf2P70%2Be5zqL01GmA8aHDI43TVHPVICCNRIERIxDQJORYkSePt7rQ2rpNZfWrt42bEcf4vDMLWancIGOqUBpUuUCFsSDDiOlPzclZ2%2BGR%2B5NwOX8ZBQntYGapXqJ22ZaHA0y7NN1245B7D2jm36VeiXArLEkwaljaul134BCl1mcM%2FfMBql7rnXlaObmJrmiWwaERp76tNjulc4DGb2wCrtiY1f8opjVqkMI%2B1FOOTCmRO%2B%2BxpvNmdCqxXom%2Bo%2Brr%2BV5EFyhVd4zzKOHSlN2ZsDMxbq9GjzUjGiLih5YxQCoQ2a&X-Amz-Signature=528da683fbc304ca9d252aa7b7355975391cf9c910e09b8e4ba92d6cac01c5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GD2JQV4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs66lakIf8FssCCd4lTVRAXkFuykq5zE63aCfODnB4FgIgB%2BX3K0KBce5UYICAWH7bshqpq%2BKB9WteNkV%2Bh1n6wLAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwz9WOq9gTRJa7oxSrcA1Usr0ZyH%2BPEEt66Hu3RDmozW59a61PUKoZViRLNzKyMYnv11XYZwzleVADVVm2QWrf6En%2BGXDrOQ0NdJvsjBH7hjCi%2FEWuHazJNNWkD1U34YNA3W%2Bqixir24qSYhCGC8T%2BD7AiraKebNXRwUUrzmz38a2%2FNJNO9mwGVVQBJPSEYIOQFRbYGWV5nBE2uSmBgHBmW%2F5yyInVDC04PS5SeXWIR0Bi8d87R1N%2BjWg%2FvzayfX6XyRx9RhqkBI%2BT5hFd5pyCi6oXJfmm30ra%2FTvfkv2Ouqs4npwR7GHT4MKVa9N1TOlraayMMUcM6%2BNhxc38Rv3K0Pkjwryr1PZ6BmH4bJEiVaG0vFglPDTXLAvIREWizd79OlVP2i1EnX142YjCEuBPKnfqJb1U6%2FizEss6PlVrs3dMf1SiKmPagng5H0C7vhQCyQDjgJTJAtlSnJJFmiemBQA04Xlwz%2FqbOpx2GcVw%2BfSD4HjG%2F1gd8WAnspJpjboSgMEIrRtg4yBSjLPZy17mY8Pq0UoJFtpmOrjH64ZaFwwZN0hJZkQxaWNm29Qh6So8FBAs9nmf2P70%2Be5zqL01GmA8aHDI43TVHPVICCNRIERIxDQJORYkSePt7rQ2rpNZfWrt42bEcf4vDMLWancIGOqUBpUuUCFsSDDiOlPzclZ2%2BGR%2B5NwOX8ZBQntYGapXqJ22ZaHA0y7NN1245B7D2jm36VeiXArLEkwaljaul134BCl1mcM%2FfMBql7rnXlaObmJrmiWwaERp76tNjulc4DGb2wCrtiY1f8opjVqkMI%2B1FOOTCmRO%2B%2BxpvNmdCqxXom%2Bo%2Brr%2BV5EFyhVd4zzKOHSlN2ZsDMxbq9GjzUjGiLih5YxQCoQ2a&X-Amz-Signature=27991e7fa7a04f5074c0c7c1274b34801ee9dafdf8253af3ae36a59ce9103c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
