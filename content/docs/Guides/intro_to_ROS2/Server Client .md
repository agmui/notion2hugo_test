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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEQKDCL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1l%2Fg3rNnA1nA7mtuTU416nDgJQ%2FrjsoJP6Pe1MB9ZagIhAJJGOXdekTv1q6ykuigR95a1JJ%2BaGEFLewY25IhGFil4KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0XpEHsJdOe2zWYT0q3ANdZy%2BW651w4pzmaXI3106oWx1piWn1gbxEJmZvI%2FMcvKyyTPHsW6lnOV1O6g7mL9pE2911mWKXqb%2B5mn%2FZpluUOMG1zTzxVfJM6ii%2BjM17JEFPnK2Zbd4XIEh29eKLGshn%2FNEbPSy2pldMHhAWEma45ojd%2BEmzkI20wCmo3WtQUSFhmVfM1DE11wVNGQD3qlh5e87UhjniM4f%2F7jSOSn6y1zFhU1kwDYmLduAqmTTOGZeKVnFVNf6Fh7uZy4EZWFjIQblE1r8pggmFjHcP8CCoVXRqmIdNmYuKABIWbBVb0SaBbVFnyBENPR3f199PMuD1bz3AsUL%2BNO%2BLTBdQ9iIP9QvEptMqI3cSu%2FRdxJzcq3jj%2FGCxs1MCtjE0PWuI0slft5xH2lO28HzaSiae2dFBtioUos%2B5kbSge1K1LuK6KZdcUI%2BbqEbGJACaV7vxS0BliX59Ufp6iKJUPmNElTIy1OToTB%2BvtVNch2aBAuTQmAW25CUtryE%2BIB6yXznLWY6ihRoK3TnlLIwBZAQnRxvaLrPXt73lQOaI17S8Ii9YgFEGQ3UuEmDix8xV5lwWoTE6lw8Qh0KDTpniUS2isUWkR7zqc4bLAGD8RENicBKqKaL%2FPi9NBHPBkYrGlTDjq4G%2FBjqkASPAri3PzhRsuW2ku%2FiwtVifTIqHSMUj%2FNUJm4u%2FWpecBSbRbcdQqw7UbZkMwx1A%2Bg3DtDj50BoSdIfwv5MeaFGBzPVKMTanBFy%2BdwNoYQXPfrAPaYNbf2l7%2FDIiTB7sSuMmkh49t2Dr3JuQSoCT7meVzesnDFaUPgOxJLJUlVRnhuC5IEO0snVF9kXULkZtdgym4dZex2uV0X9I%2BExMFtpaGBoS&X-Amz-Signature=00c090b64ee1e600554499843ca4404244c91d8384e181482e64fa6418787d16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEQKDCL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1l%2Fg3rNnA1nA7mtuTU416nDgJQ%2FrjsoJP6Pe1MB9ZagIhAJJGOXdekTv1q6ykuigR95a1JJ%2BaGEFLewY25IhGFil4KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0XpEHsJdOe2zWYT0q3ANdZy%2BW651w4pzmaXI3106oWx1piWn1gbxEJmZvI%2FMcvKyyTPHsW6lnOV1O6g7mL9pE2911mWKXqb%2B5mn%2FZpluUOMG1zTzxVfJM6ii%2BjM17JEFPnK2Zbd4XIEh29eKLGshn%2FNEbPSy2pldMHhAWEma45ojd%2BEmzkI20wCmo3WtQUSFhmVfM1DE11wVNGQD3qlh5e87UhjniM4f%2F7jSOSn6y1zFhU1kwDYmLduAqmTTOGZeKVnFVNf6Fh7uZy4EZWFjIQblE1r8pggmFjHcP8CCoVXRqmIdNmYuKABIWbBVb0SaBbVFnyBENPR3f199PMuD1bz3AsUL%2BNO%2BLTBdQ9iIP9QvEptMqI3cSu%2FRdxJzcq3jj%2FGCxs1MCtjE0PWuI0slft5xH2lO28HzaSiae2dFBtioUos%2B5kbSge1K1LuK6KZdcUI%2BbqEbGJACaV7vxS0BliX59Ufp6iKJUPmNElTIy1OToTB%2BvtVNch2aBAuTQmAW25CUtryE%2BIB6yXznLWY6ihRoK3TnlLIwBZAQnRxvaLrPXt73lQOaI17S8Ii9YgFEGQ3UuEmDix8xV5lwWoTE6lw8Qh0KDTpniUS2isUWkR7zqc4bLAGD8RENicBKqKaL%2FPi9NBHPBkYrGlTDjq4G%2FBjqkASPAri3PzhRsuW2ku%2FiwtVifTIqHSMUj%2FNUJm4u%2FWpecBSbRbcdQqw7UbZkMwx1A%2Bg3DtDj50BoSdIfwv5MeaFGBzPVKMTanBFy%2BdwNoYQXPfrAPaYNbf2l7%2FDIiTB7sSuMmkh49t2Dr3JuQSoCT7meVzesnDFaUPgOxJLJUlVRnhuC5IEO0snVF9kXULkZtdgym4dZex2uV0X9I%2BExMFtpaGBoS&X-Amz-Signature=1dbd6086fed68057b3ef66e05e640c63a3aab3606ec63425bd7388528bd5adfc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEQKDCL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1l%2Fg3rNnA1nA7mtuTU416nDgJQ%2FrjsoJP6Pe1MB9ZagIhAJJGOXdekTv1q6ykuigR95a1JJ%2BaGEFLewY25IhGFil4KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0XpEHsJdOe2zWYT0q3ANdZy%2BW651w4pzmaXI3106oWx1piWn1gbxEJmZvI%2FMcvKyyTPHsW6lnOV1O6g7mL9pE2911mWKXqb%2B5mn%2FZpluUOMG1zTzxVfJM6ii%2BjM17JEFPnK2Zbd4XIEh29eKLGshn%2FNEbPSy2pldMHhAWEma45ojd%2BEmzkI20wCmo3WtQUSFhmVfM1DE11wVNGQD3qlh5e87UhjniM4f%2F7jSOSn6y1zFhU1kwDYmLduAqmTTOGZeKVnFVNf6Fh7uZy4EZWFjIQblE1r8pggmFjHcP8CCoVXRqmIdNmYuKABIWbBVb0SaBbVFnyBENPR3f199PMuD1bz3AsUL%2BNO%2BLTBdQ9iIP9QvEptMqI3cSu%2FRdxJzcq3jj%2FGCxs1MCtjE0PWuI0slft5xH2lO28HzaSiae2dFBtioUos%2B5kbSge1K1LuK6KZdcUI%2BbqEbGJACaV7vxS0BliX59Ufp6iKJUPmNElTIy1OToTB%2BvtVNch2aBAuTQmAW25CUtryE%2BIB6yXznLWY6ihRoK3TnlLIwBZAQnRxvaLrPXt73lQOaI17S8Ii9YgFEGQ3UuEmDix8xV5lwWoTE6lw8Qh0KDTpniUS2isUWkR7zqc4bLAGD8RENicBKqKaL%2FPi9NBHPBkYrGlTDjq4G%2FBjqkASPAri3PzhRsuW2ku%2FiwtVifTIqHSMUj%2FNUJm4u%2FWpecBSbRbcdQqw7UbZkMwx1A%2Bg3DtDj50BoSdIfwv5MeaFGBzPVKMTanBFy%2BdwNoYQXPfrAPaYNbf2l7%2FDIiTB7sSuMmkh49t2Dr3JuQSoCT7meVzesnDFaUPgOxJLJUlVRnhuC5IEO0snVF9kXULkZtdgym4dZex2uV0X9I%2BExMFtpaGBoS&X-Amz-Signature=c6a87a732abcb07151294b38d385c83a17d89fa7848bee6d4c202d9590eb6c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEQKDCL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1l%2Fg3rNnA1nA7mtuTU416nDgJQ%2FrjsoJP6Pe1MB9ZagIhAJJGOXdekTv1q6ykuigR95a1JJ%2BaGEFLewY25IhGFil4KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0XpEHsJdOe2zWYT0q3ANdZy%2BW651w4pzmaXI3106oWx1piWn1gbxEJmZvI%2FMcvKyyTPHsW6lnOV1O6g7mL9pE2911mWKXqb%2B5mn%2FZpluUOMG1zTzxVfJM6ii%2BjM17JEFPnK2Zbd4XIEh29eKLGshn%2FNEbPSy2pldMHhAWEma45ojd%2BEmzkI20wCmo3WtQUSFhmVfM1DE11wVNGQD3qlh5e87UhjniM4f%2F7jSOSn6y1zFhU1kwDYmLduAqmTTOGZeKVnFVNf6Fh7uZy4EZWFjIQblE1r8pggmFjHcP8CCoVXRqmIdNmYuKABIWbBVb0SaBbVFnyBENPR3f199PMuD1bz3AsUL%2BNO%2BLTBdQ9iIP9QvEptMqI3cSu%2FRdxJzcq3jj%2FGCxs1MCtjE0PWuI0slft5xH2lO28HzaSiae2dFBtioUos%2B5kbSge1K1LuK6KZdcUI%2BbqEbGJACaV7vxS0BliX59Ufp6iKJUPmNElTIy1OToTB%2BvtVNch2aBAuTQmAW25CUtryE%2BIB6yXznLWY6ihRoK3TnlLIwBZAQnRxvaLrPXt73lQOaI17S8Ii9YgFEGQ3UuEmDix8xV5lwWoTE6lw8Qh0KDTpniUS2isUWkR7zqc4bLAGD8RENicBKqKaL%2FPi9NBHPBkYrGlTDjq4G%2FBjqkASPAri3PzhRsuW2ku%2FiwtVifTIqHSMUj%2FNUJm4u%2FWpecBSbRbcdQqw7UbZkMwx1A%2Bg3DtDj50BoSdIfwv5MeaFGBzPVKMTanBFy%2BdwNoYQXPfrAPaYNbf2l7%2FDIiTB7sSuMmkh49t2Dr3JuQSoCT7meVzesnDFaUPgOxJLJUlVRnhuC5IEO0snVF9kXULkZtdgym4dZex2uV0X9I%2BExMFtpaGBoS&X-Amz-Signature=962ef86aeb87de965fa280affa2f112e43bdd760c317022fd1d30dfc1028fec7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEQKDCL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1l%2Fg3rNnA1nA7mtuTU416nDgJQ%2FrjsoJP6Pe1MB9ZagIhAJJGOXdekTv1q6ykuigR95a1JJ%2BaGEFLewY25IhGFil4KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0XpEHsJdOe2zWYT0q3ANdZy%2BW651w4pzmaXI3106oWx1piWn1gbxEJmZvI%2FMcvKyyTPHsW6lnOV1O6g7mL9pE2911mWKXqb%2B5mn%2FZpluUOMG1zTzxVfJM6ii%2BjM17JEFPnK2Zbd4XIEh29eKLGshn%2FNEbPSy2pldMHhAWEma45ojd%2BEmzkI20wCmo3WtQUSFhmVfM1DE11wVNGQD3qlh5e87UhjniM4f%2F7jSOSn6y1zFhU1kwDYmLduAqmTTOGZeKVnFVNf6Fh7uZy4EZWFjIQblE1r8pggmFjHcP8CCoVXRqmIdNmYuKABIWbBVb0SaBbVFnyBENPR3f199PMuD1bz3AsUL%2BNO%2BLTBdQ9iIP9QvEptMqI3cSu%2FRdxJzcq3jj%2FGCxs1MCtjE0PWuI0slft5xH2lO28HzaSiae2dFBtioUos%2B5kbSge1K1LuK6KZdcUI%2BbqEbGJACaV7vxS0BliX59Ufp6iKJUPmNElTIy1OToTB%2BvtVNch2aBAuTQmAW25CUtryE%2BIB6yXznLWY6ihRoK3TnlLIwBZAQnRxvaLrPXt73lQOaI17S8Ii9YgFEGQ3UuEmDix8xV5lwWoTE6lw8Qh0KDTpniUS2isUWkR7zqc4bLAGD8RENicBKqKaL%2FPi9NBHPBkYrGlTDjq4G%2FBjqkASPAri3PzhRsuW2ku%2FiwtVifTIqHSMUj%2FNUJm4u%2FWpecBSbRbcdQqw7UbZkMwx1A%2Bg3DtDj50BoSdIfwv5MeaFGBzPVKMTanBFy%2BdwNoYQXPfrAPaYNbf2l7%2FDIiTB7sSuMmkh49t2Dr3JuQSoCT7meVzesnDFaUPgOxJLJUlVRnhuC5IEO0snVF9kXULkZtdgym4dZex2uV0X9I%2BExMFtpaGBoS&X-Amz-Signature=53d71bd5f152fcf14e0bdcae576336626b478618b65f752ae052318bfff40d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
