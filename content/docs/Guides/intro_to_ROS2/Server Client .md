---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2YZK7V%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXik%2F3hgIkrIWB8eWsnXiy9j9QG2XgXZ5%2F5Q0Ed%2B8KnAiBhwoQSWXdlXmToEGs3k5wf9lvcPl4m17nKjWnRRJqu3iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTHIaBbBed1ehFBvKtwDofQXo%2BgFKJckQ%2BK%2FhqVU8Bm%2BqEyvGa9zPblRdbbJT5L73iSw96fyk5O6vvvgnJ1LKKPCiMOAMCsBDSre3p9rnFDKhQqbhOva437mwIoQ0bENDshkIXN0qXsyefAOvEeZ7iJYIJAJ2%2BPQWbZ4O26vEFY%2FIpVahIT%2Fo6wp0J7s0itqj%2FHQw6NXmcD%2FTKp8QY%2FAvzaKg7ZSdALHkgdR0G%2F2ebeQOahMSNflm%2BGKWYp%2B6TObB%2FQIhIVKjtDoe2cH5bZPq%2BnYrcNudJp%2F6SbSAdL4QXrH62aJKV%2FxAkWAuzXiutXc3dgXYlsQxZA78M5h%2Fc2W2PxOJZU%2F0QFhN2ruSRYEPkb57GxqXxmxoIaZp8xDHQAzprEazscdkBPFxK3CVcd603OnyBPhcUkCEleKFZRI9Rf7I4DjbtsnFcuElNjrRGpCl37Iign4mIrofUFSSNDOz1Avny3J41yv%2By9v%2BYff3MRLD%2FhPEmps1yxY6A2urDfHExOJW2Lqo45gRs55Zon%2F5EtA3m5IbPJuAmBn4OfQGanAt2UW%2FPFYZ%2FzeqxhERv27M1VE0vIKRqzsvxdDoDYrI3Je%2BDO5hssE5xsAXWdBeT4%2Fr%2F5%2FbjxMwDXf13Nj8splsrbU%2BLgzgLsQXTAwv4GsvQY6pgHpzaSpgTctOl6TDDYHLkdD1L7J2FWhQ6dT%2Fh05aAQ%2FZSraT91hV1W0R8w3rRCp4iOULImweNGTkgGdqOm1N%2FZDUbE2FqBSDdFD6S%2F2Mj1K7gWdoBh41w6dt3gAZD%2F9y4Fpzk%2FKct2uaKIdIW1mDk1lfLuPI5nOwHcxWi2cdD85dvd1c3v%2B59bWtHCqvhauvXGs8pm0ILXKnPPhkqkG38S9NXQQktCd&X-Amz-Signature=44f29cdbf7509eed11ebef77876f4bd21f5c2dc9444a7ae49b28ec3e696ac6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2YZK7V%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXik%2F3hgIkrIWB8eWsnXiy9j9QG2XgXZ5%2F5Q0Ed%2B8KnAiBhwoQSWXdlXmToEGs3k5wf9lvcPl4m17nKjWnRRJqu3iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTHIaBbBed1ehFBvKtwDofQXo%2BgFKJckQ%2BK%2FhqVU8Bm%2BqEyvGa9zPblRdbbJT5L73iSw96fyk5O6vvvgnJ1LKKPCiMOAMCsBDSre3p9rnFDKhQqbhOva437mwIoQ0bENDshkIXN0qXsyefAOvEeZ7iJYIJAJ2%2BPQWbZ4O26vEFY%2FIpVahIT%2Fo6wp0J7s0itqj%2FHQw6NXmcD%2FTKp8QY%2FAvzaKg7ZSdALHkgdR0G%2F2ebeQOahMSNflm%2BGKWYp%2B6TObB%2FQIhIVKjtDoe2cH5bZPq%2BnYrcNudJp%2F6SbSAdL4QXrH62aJKV%2FxAkWAuzXiutXc3dgXYlsQxZA78M5h%2Fc2W2PxOJZU%2F0QFhN2ruSRYEPkb57GxqXxmxoIaZp8xDHQAzprEazscdkBPFxK3CVcd603OnyBPhcUkCEleKFZRI9Rf7I4DjbtsnFcuElNjrRGpCl37Iign4mIrofUFSSNDOz1Avny3J41yv%2By9v%2BYff3MRLD%2FhPEmps1yxY6A2urDfHExOJW2Lqo45gRs55Zon%2F5EtA3m5IbPJuAmBn4OfQGanAt2UW%2FPFYZ%2FzeqxhERv27M1VE0vIKRqzsvxdDoDYrI3Je%2BDO5hssE5xsAXWdBeT4%2Fr%2F5%2FbjxMwDXf13Nj8splsrbU%2BLgzgLsQXTAwv4GsvQY6pgHpzaSpgTctOl6TDDYHLkdD1L7J2FWhQ6dT%2Fh05aAQ%2FZSraT91hV1W0R8w3rRCp4iOULImweNGTkgGdqOm1N%2FZDUbE2FqBSDdFD6S%2F2Mj1K7gWdoBh41w6dt3gAZD%2F9y4Fpzk%2FKct2uaKIdIW1mDk1lfLuPI5nOwHcxWi2cdD85dvd1c3v%2B59bWtHCqvhauvXGs8pm0ILXKnPPhkqkG38S9NXQQktCd&X-Amz-Signature=7632dcb4d7bb7396285925dc4322bd17668646cf26fe6efc1eb856e1c5f7cb58&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2YZK7V%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXik%2F3hgIkrIWB8eWsnXiy9j9QG2XgXZ5%2F5Q0Ed%2B8KnAiBhwoQSWXdlXmToEGs3k5wf9lvcPl4m17nKjWnRRJqu3iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTHIaBbBed1ehFBvKtwDofQXo%2BgFKJckQ%2BK%2FhqVU8Bm%2BqEyvGa9zPblRdbbJT5L73iSw96fyk5O6vvvgnJ1LKKPCiMOAMCsBDSre3p9rnFDKhQqbhOva437mwIoQ0bENDshkIXN0qXsyefAOvEeZ7iJYIJAJ2%2BPQWbZ4O26vEFY%2FIpVahIT%2Fo6wp0J7s0itqj%2FHQw6NXmcD%2FTKp8QY%2FAvzaKg7ZSdALHkgdR0G%2F2ebeQOahMSNflm%2BGKWYp%2B6TObB%2FQIhIVKjtDoe2cH5bZPq%2BnYrcNudJp%2F6SbSAdL4QXrH62aJKV%2FxAkWAuzXiutXc3dgXYlsQxZA78M5h%2Fc2W2PxOJZU%2F0QFhN2ruSRYEPkb57GxqXxmxoIaZp8xDHQAzprEazscdkBPFxK3CVcd603OnyBPhcUkCEleKFZRI9Rf7I4DjbtsnFcuElNjrRGpCl37Iign4mIrofUFSSNDOz1Avny3J41yv%2By9v%2BYff3MRLD%2FhPEmps1yxY6A2urDfHExOJW2Lqo45gRs55Zon%2F5EtA3m5IbPJuAmBn4OfQGanAt2UW%2FPFYZ%2FzeqxhERv27M1VE0vIKRqzsvxdDoDYrI3Je%2BDO5hssE5xsAXWdBeT4%2Fr%2F5%2FbjxMwDXf13Nj8splsrbU%2BLgzgLsQXTAwv4GsvQY6pgHpzaSpgTctOl6TDDYHLkdD1L7J2FWhQ6dT%2Fh05aAQ%2FZSraT91hV1W0R8w3rRCp4iOULImweNGTkgGdqOm1N%2FZDUbE2FqBSDdFD6S%2F2Mj1K7gWdoBh41w6dt3gAZD%2F9y4Fpzk%2FKct2uaKIdIW1mDk1lfLuPI5nOwHcxWi2cdD85dvd1c3v%2B59bWtHCqvhauvXGs8pm0ILXKnPPhkqkG38S9NXQQktCd&X-Amz-Signature=5178d4b91c0c54066113ecc24c97b3a915a8a8baa5e04172b85deffbe3e16bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2YZK7V%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXik%2F3hgIkrIWB8eWsnXiy9j9QG2XgXZ5%2F5Q0Ed%2B8KnAiBhwoQSWXdlXmToEGs3k5wf9lvcPl4m17nKjWnRRJqu3iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTHIaBbBed1ehFBvKtwDofQXo%2BgFKJckQ%2BK%2FhqVU8Bm%2BqEyvGa9zPblRdbbJT5L73iSw96fyk5O6vvvgnJ1LKKPCiMOAMCsBDSre3p9rnFDKhQqbhOva437mwIoQ0bENDshkIXN0qXsyefAOvEeZ7iJYIJAJ2%2BPQWbZ4O26vEFY%2FIpVahIT%2Fo6wp0J7s0itqj%2FHQw6NXmcD%2FTKp8QY%2FAvzaKg7ZSdALHkgdR0G%2F2ebeQOahMSNflm%2BGKWYp%2B6TObB%2FQIhIVKjtDoe2cH5bZPq%2BnYrcNudJp%2F6SbSAdL4QXrH62aJKV%2FxAkWAuzXiutXc3dgXYlsQxZA78M5h%2Fc2W2PxOJZU%2F0QFhN2ruSRYEPkb57GxqXxmxoIaZp8xDHQAzprEazscdkBPFxK3CVcd603OnyBPhcUkCEleKFZRI9Rf7I4DjbtsnFcuElNjrRGpCl37Iign4mIrofUFSSNDOz1Avny3J41yv%2By9v%2BYff3MRLD%2FhPEmps1yxY6A2urDfHExOJW2Lqo45gRs55Zon%2F5EtA3m5IbPJuAmBn4OfQGanAt2UW%2FPFYZ%2FzeqxhERv27M1VE0vIKRqzsvxdDoDYrI3Je%2BDO5hssE5xsAXWdBeT4%2Fr%2F5%2FbjxMwDXf13Nj8splsrbU%2BLgzgLsQXTAwv4GsvQY6pgHpzaSpgTctOl6TDDYHLkdD1L7J2FWhQ6dT%2Fh05aAQ%2FZSraT91hV1W0R8w3rRCp4iOULImweNGTkgGdqOm1N%2FZDUbE2FqBSDdFD6S%2F2Mj1K7gWdoBh41w6dt3gAZD%2F9y4Fpzk%2FKct2uaKIdIW1mDk1lfLuPI5nOwHcxWi2cdD85dvd1c3v%2B59bWtHCqvhauvXGs8pm0ILXKnPPhkqkG38S9NXQQktCd&X-Amz-Signature=09000afbb6493c90714d7ec03cda5157fefa19506f8fae737e2648d6954df1e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2YZK7V%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXik%2F3hgIkrIWB8eWsnXiy9j9QG2XgXZ5%2F5Q0Ed%2B8KnAiBhwoQSWXdlXmToEGs3k5wf9lvcPl4m17nKjWnRRJqu3iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTHIaBbBed1ehFBvKtwDofQXo%2BgFKJckQ%2BK%2FhqVU8Bm%2BqEyvGa9zPblRdbbJT5L73iSw96fyk5O6vvvgnJ1LKKPCiMOAMCsBDSre3p9rnFDKhQqbhOva437mwIoQ0bENDshkIXN0qXsyefAOvEeZ7iJYIJAJ2%2BPQWbZ4O26vEFY%2FIpVahIT%2Fo6wp0J7s0itqj%2FHQw6NXmcD%2FTKp8QY%2FAvzaKg7ZSdALHkgdR0G%2F2ebeQOahMSNflm%2BGKWYp%2B6TObB%2FQIhIVKjtDoe2cH5bZPq%2BnYrcNudJp%2F6SbSAdL4QXrH62aJKV%2FxAkWAuzXiutXc3dgXYlsQxZA78M5h%2Fc2W2PxOJZU%2F0QFhN2ruSRYEPkb57GxqXxmxoIaZp8xDHQAzprEazscdkBPFxK3CVcd603OnyBPhcUkCEleKFZRI9Rf7I4DjbtsnFcuElNjrRGpCl37Iign4mIrofUFSSNDOz1Avny3J41yv%2By9v%2BYff3MRLD%2FhPEmps1yxY6A2urDfHExOJW2Lqo45gRs55Zon%2F5EtA3m5IbPJuAmBn4OfQGanAt2UW%2FPFYZ%2FzeqxhERv27M1VE0vIKRqzsvxdDoDYrI3Je%2BDO5hssE5xsAXWdBeT4%2Fr%2F5%2FbjxMwDXf13Nj8splsrbU%2BLgzgLsQXTAwv4GsvQY6pgHpzaSpgTctOl6TDDYHLkdD1L7J2FWhQ6dT%2Fh05aAQ%2FZSraT91hV1W0R8w3rRCp4iOULImweNGTkgGdqOm1N%2FZDUbE2FqBSDdFD6S%2F2Mj1K7gWdoBh41w6dt3gAZD%2F9y4Fpzk%2FKct2uaKIdIW1mDk1lfLuPI5nOwHcxWi2cdD85dvd1c3v%2B59bWtHCqvhauvXGs8pm0ILXKnPPhkqkG38S9NXQQktCd&X-Amz-Signature=248b4120f7bae9b559066bbd93c4f2a178720ee930adbecb12954d1d990021ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
