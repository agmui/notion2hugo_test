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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITZUX4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOYwxKzfhLTDRniajNBVIKpaUT3HEQLlBILOl%2BUMV6zAiEAmse%2B9xqe%2BXnHDRUE%2FwNZX%2BVxXDeTJqMgtBJlNkj4TBUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJEFx7Us3WpBQqdZqircA540yGzDJC55v5vE3Bljt%2BbCJ2uaxBai%2F2BGjSQ8LVZZPdwQMCAzO0nlrjV%2Fq65OyYVF9nuX7gA1DmzxDXlbqrFb0mx2rLiLqfmfJICE6T7IFvKyibvOe74cp4x65jBN%2B%2FCdDFgKyKVlwmabTWRveQj6lspt%2BzHHJIndfG4dK8FjgZkQFR%2BR22GRGzogsJ6Fq%2B19944SYyO0QYj0iqthD%2Bp6msASnD8i%2BWF3QsSQmBX%2Fcuja6loToE3KoNY0xkcAbkAffzK4n%2FCthyGlewM%2FyK9W%2BsHBDfT6icH%2BtOsNW1XrVgNXE0xSzkvffylW5vlQjzWtaIb%2BqjOxhAA%2BDt8EcjciptG1SQ8ljdph%2F0rrADtG7PCXCNQDlfD6pDwoavTd0bV1QsxAx4VPF4qKfVsE3yd79co6K%2B8By4QqnvYwmQyC15UaODNIdGaaUtViijfr3XdpBbE1xN07vjasftUmeu6QZk7rdm%2FWiq%2BCWydn3C1xQlbshXKAaC1jzKTIcKwaE8M9YN3yS063IOccUsDrnNrHn5SJ6vqtA4pIo5%2FPTwWEMfKr3YrtTRumX6XMTmqepi8gfP471iKV0%2B1zInQVs9FhMtnZFtyZIjgRw%2FWbO0cYC75TyJAtz17eGd3iMIH5mb8GOqUBTWzHRqTCtKYCHZsq2PsSCis5rKV3tduk88SislVoj%2FJmyyPmNpsZcmhT4V%2FFKwmrDONTRxKDLE5%2Bxb6c3zyrGOt1XfQVTmiHbUcj9HsaXE%2FnuTM6G27ZoJhQrUq7HNT4JWHj6u3%2BwKj3STDaz7zEjE7b5Iug4A3TSTupx80jICpxDuulCOy2rmbk9JfwDBJq%2FY5%2FrJlHTrkMyvjjlkxyIlRG7%2FhO&X-Amz-Signature=d51b432b8996c7fca066446ee3ba2ee232183d5e99e05cdc7be72b637114936d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITZUX4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOYwxKzfhLTDRniajNBVIKpaUT3HEQLlBILOl%2BUMV6zAiEAmse%2B9xqe%2BXnHDRUE%2FwNZX%2BVxXDeTJqMgtBJlNkj4TBUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJEFx7Us3WpBQqdZqircA540yGzDJC55v5vE3Bljt%2BbCJ2uaxBai%2F2BGjSQ8LVZZPdwQMCAzO0nlrjV%2Fq65OyYVF9nuX7gA1DmzxDXlbqrFb0mx2rLiLqfmfJICE6T7IFvKyibvOe74cp4x65jBN%2B%2FCdDFgKyKVlwmabTWRveQj6lspt%2BzHHJIndfG4dK8FjgZkQFR%2BR22GRGzogsJ6Fq%2B19944SYyO0QYj0iqthD%2Bp6msASnD8i%2BWF3QsSQmBX%2Fcuja6loToE3KoNY0xkcAbkAffzK4n%2FCthyGlewM%2FyK9W%2BsHBDfT6icH%2BtOsNW1XrVgNXE0xSzkvffylW5vlQjzWtaIb%2BqjOxhAA%2BDt8EcjciptG1SQ8ljdph%2F0rrADtG7PCXCNQDlfD6pDwoavTd0bV1QsxAx4VPF4qKfVsE3yd79co6K%2B8By4QqnvYwmQyC15UaODNIdGaaUtViijfr3XdpBbE1xN07vjasftUmeu6QZk7rdm%2FWiq%2BCWydn3C1xQlbshXKAaC1jzKTIcKwaE8M9YN3yS063IOccUsDrnNrHn5SJ6vqtA4pIo5%2FPTwWEMfKr3YrtTRumX6XMTmqepi8gfP471iKV0%2B1zInQVs9FhMtnZFtyZIjgRw%2FWbO0cYC75TyJAtz17eGd3iMIH5mb8GOqUBTWzHRqTCtKYCHZsq2PsSCis5rKV3tduk88SislVoj%2FJmyyPmNpsZcmhT4V%2FFKwmrDONTRxKDLE5%2Bxb6c3zyrGOt1XfQVTmiHbUcj9HsaXE%2FnuTM6G27ZoJhQrUq7HNT4JWHj6u3%2BwKj3STDaz7zEjE7b5Iug4A3TSTupx80jICpxDuulCOy2rmbk9JfwDBJq%2FY5%2FrJlHTrkMyvjjlkxyIlRG7%2FhO&X-Amz-Signature=68908cbc1fc9e1868e13c723fbc4609d4bfc4107e739ece722b0c116f081beed&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITZUX4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOYwxKzfhLTDRniajNBVIKpaUT3HEQLlBILOl%2BUMV6zAiEAmse%2B9xqe%2BXnHDRUE%2FwNZX%2BVxXDeTJqMgtBJlNkj4TBUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJEFx7Us3WpBQqdZqircA540yGzDJC55v5vE3Bljt%2BbCJ2uaxBai%2F2BGjSQ8LVZZPdwQMCAzO0nlrjV%2Fq65OyYVF9nuX7gA1DmzxDXlbqrFb0mx2rLiLqfmfJICE6T7IFvKyibvOe74cp4x65jBN%2B%2FCdDFgKyKVlwmabTWRveQj6lspt%2BzHHJIndfG4dK8FjgZkQFR%2BR22GRGzogsJ6Fq%2B19944SYyO0QYj0iqthD%2Bp6msASnD8i%2BWF3QsSQmBX%2Fcuja6loToE3KoNY0xkcAbkAffzK4n%2FCthyGlewM%2FyK9W%2BsHBDfT6icH%2BtOsNW1XrVgNXE0xSzkvffylW5vlQjzWtaIb%2BqjOxhAA%2BDt8EcjciptG1SQ8ljdph%2F0rrADtG7PCXCNQDlfD6pDwoavTd0bV1QsxAx4VPF4qKfVsE3yd79co6K%2B8By4QqnvYwmQyC15UaODNIdGaaUtViijfr3XdpBbE1xN07vjasftUmeu6QZk7rdm%2FWiq%2BCWydn3C1xQlbshXKAaC1jzKTIcKwaE8M9YN3yS063IOccUsDrnNrHn5SJ6vqtA4pIo5%2FPTwWEMfKr3YrtTRumX6XMTmqepi8gfP471iKV0%2B1zInQVs9FhMtnZFtyZIjgRw%2FWbO0cYC75TyJAtz17eGd3iMIH5mb8GOqUBTWzHRqTCtKYCHZsq2PsSCis5rKV3tduk88SislVoj%2FJmyyPmNpsZcmhT4V%2FFKwmrDONTRxKDLE5%2Bxb6c3zyrGOt1XfQVTmiHbUcj9HsaXE%2FnuTM6G27ZoJhQrUq7HNT4JWHj6u3%2BwKj3STDaz7zEjE7b5Iug4A3TSTupx80jICpxDuulCOy2rmbk9JfwDBJq%2FY5%2FrJlHTrkMyvjjlkxyIlRG7%2FhO&X-Amz-Signature=8813a2bb26c2247702caa88888d71f612ffbd7ed85b2daa9587040840b054402&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITZUX4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOYwxKzfhLTDRniajNBVIKpaUT3HEQLlBILOl%2BUMV6zAiEAmse%2B9xqe%2BXnHDRUE%2FwNZX%2BVxXDeTJqMgtBJlNkj4TBUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJEFx7Us3WpBQqdZqircA540yGzDJC55v5vE3Bljt%2BbCJ2uaxBai%2F2BGjSQ8LVZZPdwQMCAzO0nlrjV%2Fq65OyYVF9nuX7gA1DmzxDXlbqrFb0mx2rLiLqfmfJICE6T7IFvKyibvOe74cp4x65jBN%2B%2FCdDFgKyKVlwmabTWRveQj6lspt%2BzHHJIndfG4dK8FjgZkQFR%2BR22GRGzogsJ6Fq%2B19944SYyO0QYj0iqthD%2Bp6msASnD8i%2BWF3QsSQmBX%2Fcuja6loToE3KoNY0xkcAbkAffzK4n%2FCthyGlewM%2FyK9W%2BsHBDfT6icH%2BtOsNW1XrVgNXE0xSzkvffylW5vlQjzWtaIb%2BqjOxhAA%2BDt8EcjciptG1SQ8ljdph%2F0rrADtG7PCXCNQDlfD6pDwoavTd0bV1QsxAx4VPF4qKfVsE3yd79co6K%2B8By4QqnvYwmQyC15UaODNIdGaaUtViijfr3XdpBbE1xN07vjasftUmeu6QZk7rdm%2FWiq%2BCWydn3C1xQlbshXKAaC1jzKTIcKwaE8M9YN3yS063IOccUsDrnNrHn5SJ6vqtA4pIo5%2FPTwWEMfKr3YrtTRumX6XMTmqepi8gfP471iKV0%2B1zInQVs9FhMtnZFtyZIjgRw%2FWbO0cYC75TyJAtz17eGd3iMIH5mb8GOqUBTWzHRqTCtKYCHZsq2PsSCis5rKV3tduk88SislVoj%2FJmyyPmNpsZcmhT4V%2FFKwmrDONTRxKDLE5%2Bxb6c3zyrGOt1XfQVTmiHbUcj9HsaXE%2FnuTM6G27ZoJhQrUq7HNT4JWHj6u3%2BwKj3STDaz7zEjE7b5Iug4A3TSTupx80jICpxDuulCOy2rmbk9JfwDBJq%2FY5%2FrJlHTrkMyvjjlkxyIlRG7%2FhO&X-Amz-Signature=12fa548f6465941d7714a79dfcc4f3b69643e8d7faf143fbf01848745875c736&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITZUX4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOYwxKzfhLTDRniajNBVIKpaUT3HEQLlBILOl%2BUMV6zAiEAmse%2B9xqe%2BXnHDRUE%2FwNZX%2BVxXDeTJqMgtBJlNkj4TBUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJEFx7Us3WpBQqdZqircA540yGzDJC55v5vE3Bljt%2BbCJ2uaxBai%2F2BGjSQ8LVZZPdwQMCAzO0nlrjV%2Fq65OyYVF9nuX7gA1DmzxDXlbqrFb0mx2rLiLqfmfJICE6T7IFvKyibvOe74cp4x65jBN%2B%2FCdDFgKyKVlwmabTWRveQj6lspt%2BzHHJIndfG4dK8FjgZkQFR%2BR22GRGzogsJ6Fq%2B19944SYyO0QYj0iqthD%2Bp6msASnD8i%2BWF3QsSQmBX%2Fcuja6loToE3KoNY0xkcAbkAffzK4n%2FCthyGlewM%2FyK9W%2BsHBDfT6icH%2BtOsNW1XrVgNXE0xSzkvffylW5vlQjzWtaIb%2BqjOxhAA%2BDt8EcjciptG1SQ8ljdph%2F0rrADtG7PCXCNQDlfD6pDwoavTd0bV1QsxAx4VPF4qKfVsE3yd79co6K%2B8By4QqnvYwmQyC15UaODNIdGaaUtViijfr3XdpBbE1xN07vjasftUmeu6QZk7rdm%2FWiq%2BCWydn3C1xQlbshXKAaC1jzKTIcKwaE8M9YN3yS063IOccUsDrnNrHn5SJ6vqtA4pIo5%2FPTwWEMfKr3YrtTRumX6XMTmqepi8gfP471iKV0%2B1zInQVs9FhMtnZFtyZIjgRw%2FWbO0cYC75TyJAtz17eGd3iMIH5mb8GOqUBTWzHRqTCtKYCHZsq2PsSCis5rKV3tduk88SislVoj%2FJmyyPmNpsZcmhT4V%2FFKwmrDONTRxKDLE5%2Bxb6c3zyrGOt1XfQVTmiHbUcj9HsaXE%2FnuTM6G27ZoJhQrUq7HNT4JWHj6u3%2BwKj3STDaz7zEjE7b5Iug4A3TSTupx80jICpxDuulCOy2rmbk9JfwDBJq%2FY5%2FrJlHTrkMyvjjlkxyIlRG7%2FhO&X-Amz-Signature=e8e72da7d491f0f4de1376ec26229264cf10dba2e630d669fcada62f8abaa093&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
