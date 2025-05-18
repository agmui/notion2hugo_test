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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGHLFPN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtRBt75sf8UaM9vAkt9%2BqtrxzlPri1ULrXKPa5n4tQIAiEA2zVtbFkUfygKJOTvqBzkiaa%2B63RHaYM%2FfslVFIiu5t8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPUNuZwM5PDnC0zdEyrcA8U8%2Fbe5eEECp3otiI4SAXoYl5y4Xiv%2BVuAX1zIX9RsPRMR3njNzJOsCzPCAAWKNu9ck8e6rZNBjxTOKsiXqw8v%2BHjljqcik5RvfwCjcl6IBV8bBcOSSo120Rv6Cyv%2BLxKqXS4aBrXkJO2tfZL%2BKNPLLS3JIE%2BsVCRb%2BG2nxNiOoiZM6t4yynr9I69S80iYDym1a7VWb%2FRfaZv9CsaUMxjozWqIWNQ01usPGufW8Q7vAuJJ4GsPAHawwVFcTNySDjXU2WyY8j93t81THvH3boJupaWjEm4MmVQ4KMeP2y7J8p7CyCGhSJau%2FbFYKElewKHhZifBtAvFySMX2qx214tNF6ckN6hyfPk21ZiAc4753lyyFswo%2BVhcXbFdMJHLW7xprDkLD6qwIUtzz91MTDcEnQqFi0XafTd41JG8OQEKyuBlr6osDbh53r2XyaTTUtou8JKyaWyZRxayFWz4HVywv4Tjpc9L0xLJH2cjLD0HeTrwlsrho%2FkppIaIe5Fjt7kZ4K56f84wXFJ84dW67R3ik8sxJcBCOnHVTKckeOxwvGYQw6UaRI0C8YEfHP27DIB8OyELsKe9MeKdnTKB645DgR370O2jMsoN5CBHaFEviBMJrdTzkb%2BSWVG1fMMKdp8EGOqUB%2B%2F%2Bot9DT%2FmkbOT7%2FyOGnHgO3kz6pRZ1W0xAgFTOiJV2rvielaKzFIqgyArIkLbma2YN53WX2%2BnZi4pLs9GwsN0F04aXHqqdkXcAGYjOt1IAoaVaKkZih8Vd6Z%2FKfv05JdqvRIZ776GZW75D0LtRCeusJ0TFMGmwdwsSAIDWZM8tMjPRPfKiQ1qfhgY8WBC3pr4iTOO7Wkan%2BRtmhXc0y4b0kI2DV&X-Amz-Signature=66b9602e11a1e906507a0cb56789c7cb8e81e2a72be4fe0b0b2a8c742f8b376f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGHLFPN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtRBt75sf8UaM9vAkt9%2BqtrxzlPri1ULrXKPa5n4tQIAiEA2zVtbFkUfygKJOTvqBzkiaa%2B63RHaYM%2FfslVFIiu5t8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPUNuZwM5PDnC0zdEyrcA8U8%2Fbe5eEECp3otiI4SAXoYl5y4Xiv%2BVuAX1zIX9RsPRMR3njNzJOsCzPCAAWKNu9ck8e6rZNBjxTOKsiXqw8v%2BHjljqcik5RvfwCjcl6IBV8bBcOSSo120Rv6Cyv%2BLxKqXS4aBrXkJO2tfZL%2BKNPLLS3JIE%2BsVCRb%2BG2nxNiOoiZM6t4yynr9I69S80iYDym1a7VWb%2FRfaZv9CsaUMxjozWqIWNQ01usPGufW8Q7vAuJJ4GsPAHawwVFcTNySDjXU2WyY8j93t81THvH3boJupaWjEm4MmVQ4KMeP2y7J8p7CyCGhSJau%2FbFYKElewKHhZifBtAvFySMX2qx214tNF6ckN6hyfPk21ZiAc4753lyyFswo%2BVhcXbFdMJHLW7xprDkLD6qwIUtzz91MTDcEnQqFi0XafTd41JG8OQEKyuBlr6osDbh53r2XyaTTUtou8JKyaWyZRxayFWz4HVywv4Tjpc9L0xLJH2cjLD0HeTrwlsrho%2FkppIaIe5Fjt7kZ4K56f84wXFJ84dW67R3ik8sxJcBCOnHVTKckeOxwvGYQw6UaRI0C8YEfHP27DIB8OyELsKe9MeKdnTKB645DgR370O2jMsoN5CBHaFEviBMJrdTzkb%2BSWVG1fMMKdp8EGOqUB%2B%2F%2Bot9DT%2FmkbOT7%2FyOGnHgO3kz6pRZ1W0xAgFTOiJV2rvielaKzFIqgyArIkLbma2YN53WX2%2BnZi4pLs9GwsN0F04aXHqqdkXcAGYjOt1IAoaVaKkZih8Vd6Z%2FKfv05JdqvRIZ776GZW75D0LtRCeusJ0TFMGmwdwsSAIDWZM8tMjPRPfKiQ1qfhgY8WBC3pr4iTOO7Wkan%2BRtmhXc0y4b0kI2DV&X-Amz-Signature=e494b44141901d5dc1089c3491ebd0da9dfa1857ae195e7a84bcd6afd1cf4fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGHLFPN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtRBt75sf8UaM9vAkt9%2BqtrxzlPri1ULrXKPa5n4tQIAiEA2zVtbFkUfygKJOTvqBzkiaa%2B63RHaYM%2FfslVFIiu5t8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPUNuZwM5PDnC0zdEyrcA8U8%2Fbe5eEECp3otiI4SAXoYl5y4Xiv%2BVuAX1zIX9RsPRMR3njNzJOsCzPCAAWKNu9ck8e6rZNBjxTOKsiXqw8v%2BHjljqcik5RvfwCjcl6IBV8bBcOSSo120Rv6Cyv%2BLxKqXS4aBrXkJO2tfZL%2BKNPLLS3JIE%2BsVCRb%2BG2nxNiOoiZM6t4yynr9I69S80iYDym1a7VWb%2FRfaZv9CsaUMxjozWqIWNQ01usPGufW8Q7vAuJJ4GsPAHawwVFcTNySDjXU2WyY8j93t81THvH3boJupaWjEm4MmVQ4KMeP2y7J8p7CyCGhSJau%2FbFYKElewKHhZifBtAvFySMX2qx214tNF6ckN6hyfPk21ZiAc4753lyyFswo%2BVhcXbFdMJHLW7xprDkLD6qwIUtzz91MTDcEnQqFi0XafTd41JG8OQEKyuBlr6osDbh53r2XyaTTUtou8JKyaWyZRxayFWz4HVywv4Tjpc9L0xLJH2cjLD0HeTrwlsrho%2FkppIaIe5Fjt7kZ4K56f84wXFJ84dW67R3ik8sxJcBCOnHVTKckeOxwvGYQw6UaRI0C8YEfHP27DIB8OyELsKe9MeKdnTKB645DgR370O2jMsoN5CBHaFEviBMJrdTzkb%2BSWVG1fMMKdp8EGOqUB%2B%2F%2Bot9DT%2FmkbOT7%2FyOGnHgO3kz6pRZ1W0xAgFTOiJV2rvielaKzFIqgyArIkLbma2YN53WX2%2BnZi4pLs9GwsN0F04aXHqqdkXcAGYjOt1IAoaVaKkZih8Vd6Z%2FKfv05JdqvRIZ776GZW75D0LtRCeusJ0TFMGmwdwsSAIDWZM8tMjPRPfKiQ1qfhgY8WBC3pr4iTOO7Wkan%2BRtmhXc0y4b0kI2DV&X-Amz-Signature=d0953d5e1ecfad5a455929c0908f4d5949ad3735c2ca8d27b9cd27148fd6d135&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGHLFPN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtRBt75sf8UaM9vAkt9%2BqtrxzlPri1ULrXKPa5n4tQIAiEA2zVtbFkUfygKJOTvqBzkiaa%2B63RHaYM%2FfslVFIiu5t8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPUNuZwM5PDnC0zdEyrcA8U8%2Fbe5eEECp3otiI4SAXoYl5y4Xiv%2BVuAX1zIX9RsPRMR3njNzJOsCzPCAAWKNu9ck8e6rZNBjxTOKsiXqw8v%2BHjljqcik5RvfwCjcl6IBV8bBcOSSo120Rv6Cyv%2BLxKqXS4aBrXkJO2tfZL%2BKNPLLS3JIE%2BsVCRb%2BG2nxNiOoiZM6t4yynr9I69S80iYDym1a7VWb%2FRfaZv9CsaUMxjozWqIWNQ01usPGufW8Q7vAuJJ4GsPAHawwVFcTNySDjXU2WyY8j93t81THvH3boJupaWjEm4MmVQ4KMeP2y7J8p7CyCGhSJau%2FbFYKElewKHhZifBtAvFySMX2qx214tNF6ckN6hyfPk21ZiAc4753lyyFswo%2BVhcXbFdMJHLW7xprDkLD6qwIUtzz91MTDcEnQqFi0XafTd41JG8OQEKyuBlr6osDbh53r2XyaTTUtou8JKyaWyZRxayFWz4HVywv4Tjpc9L0xLJH2cjLD0HeTrwlsrho%2FkppIaIe5Fjt7kZ4K56f84wXFJ84dW67R3ik8sxJcBCOnHVTKckeOxwvGYQw6UaRI0C8YEfHP27DIB8OyELsKe9MeKdnTKB645DgR370O2jMsoN5CBHaFEviBMJrdTzkb%2BSWVG1fMMKdp8EGOqUB%2B%2F%2Bot9DT%2FmkbOT7%2FyOGnHgO3kz6pRZ1W0xAgFTOiJV2rvielaKzFIqgyArIkLbma2YN53WX2%2BnZi4pLs9GwsN0F04aXHqqdkXcAGYjOt1IAoaVaKkZih8Vd6Z%2FKfv05JdqvRIZ776GZW75D0LtRCeusJ0TFMGmwdwsSAIDWZM8tMjPRPfKiQ1qfhgY8WBC3pr4iTOO7Wkan%2BRtmhXc0y4b0kI2DV&X-Amz-Signature=da892c9400c4abe46b62524a4234c651ce58ce73454923630c831353af32d405&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGHLFPN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtRBt75sf8UaM9vAkt9%2BqtrxzlPri1ULrXKPa5n4tQIAiEA2zVtbFkUfygKJOTvqBzkiaa%2B63RHaYM%2FfslVFIiu5t8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPUNuZwM5PDnC0zdEyrcA8U8%2Fbe5eEECp3otiI4SAXoYl5y4Xiv%2BVuAX1zIX9RsPRMR3njNzJOsCzPCAAWKNu9ck8e6rZNBjxTOKsiXqw8v%2BHjljqcik5RvfwCjcl6IBV8bBcOSSo120Rv6Cyv%2BLxKqXS4aBrXkJO2tfZL%2BKNPLLS3JIE%2BsVCRb%2BG2nxNiOoiZM6t4yynr9I69S80iYDym1a7VWb%2FRfaZv9CsaUMxjozWqIWNQ01usPGufW8Q7vAuJJ4GsPAHawwVFcTNySDjXU2WyY8j93t81THvH3boJupaWjEm4MmVQ4KMeP2y7J8p7CyCGhSJau%2FbFYKElewKHhZifBtAvFySMX2qx214tNF6ckN6hyfPk21ZiAc4753lyyFswo%2BVhcXbFdMJHLW7xprDkLD6qwIUtzz91MTDcEnQqFi0XafTd41JG8OQEKyuBlr6osDbh53r2XyaTTUtou8JKyaWyZRxayFWz4HVywv4Tjpc9L0xLJH2cjLD0HeTrwlsrho%2FkppIaIe5Fjt7kZ4K56f84wXFJ84dW67R3ik8sxJcBCOnHVTKckeOxwvGYQw6UaRI0C8YEfHP27DIB8OyELsKe9MeKdnTKB645DgR370O2jMsoN5CBHaFEviBMJrdTzkb%2BSWVG1fMMKdp8EGOqUB%2B%2F%2Bot9DT%2FmkbOT7%2FyOGnHgO3kz6pRZ1W0xAgFTOiJV2rvielaKzFIqgyArIkLbma2YN53WX2%2BnZi4pLs9GwsN0F04aXHqqdkXcAGYjOt1IAoaVaKkZih8Vd6Z%2FKfv05JdqvRIZ776GZW75D0LtRCeusJ0TFMGmwdwsSAIDWZM8tMjPRPfKiQ1qfhgY8WBC3pr4iTOO7Wkan%2BRtmhXc0y4b0kI2DV&X-Amz-Signature=0eff57766998d549320bbd8e1d81d08c14faa838b794445c3a6544f9db663188&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
