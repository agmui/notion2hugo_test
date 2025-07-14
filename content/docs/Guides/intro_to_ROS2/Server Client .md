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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4PO22O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH97oxHXTwH4ISfVOqeV2FMoxnAmSmlBtEoyPn6SC4fMAiAl74RRJ1czXt1waGARr25jQ7wFVPIE6ETi34N7JJuEeSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQkwKfUZ8%2BP8K2gIGKtwDEPTV%2Bl3j6moS5XyF%2FTR%2FdJtui27DYD5vYEGHrCe0x16GnBLW9l7UGsReS3fFWoN6JRjj0BV1C9ldTPnw6IST8nxfowhNrIlzDaiiqC5YXfsZpHO8mjDIyYW41iKiwbnDJPpcalRkTN91GYpcWvelS7L3MVTGmFA4oM0VA99eTmDUTMPXGTZdWTtUf%2FWW70GWf0dzr6ZYPtR2ux2ltPNR4ZSg6ZxrtMq2UURubW2UJHOskcZb0MPZXiRtMd0hfi9onEhzpnUgXXIFYXwtf5JXT%2BecvQZfHALXg4WyItL55ukkBpHMjMRKkNxWAz1428fFEMETAQhdcemmcu9IC90aHwNV1ccxGSKjM0wYnLumIIZGPMOgw2M2Aj2O8EZHk0VfoAjFjEbdATsG5bJTPm41Op3Xn%2BjA9IitNBrbAQ0xpT1caJBW%2FXpB90lOh178Hey2vWnrejkiXkswVS0KP9VJDcGnaNUkZtP2JVA1bV4KVC%2BpM3iRFgSxwf%2Fzu1FkoVM9LrH%2FWrWTycwjgv3odXg5PP0Sr%2Flgk%2FuyTALsIgCn%2FCor4eaMPqcr7mIojYIoqKvXoqrr%2BWvVlsPG%2BrG3WpPOmYrViZFTuobY6ZerF2J3u%2F97E8q57Ge4GOtGvYww%2F4XUwwY6pgEY04X6Tj%2FEW0vWS%2FL%2BsLbdcqt3kstuGZCwVIiUkPJy%2FVXlZIXC7mZbzdtvmZFpH9MLzfA9zWaDgNlEZ6lBSmO5%2FBjt4elewZ6ub6HkF4DmcwMfFl24YqH99vOwfzy3q3eDZSp72kTZn0zhAu1lp%2BSvip5bQli4hWBdPJWsNUQnU4Hrzpg0PaNBdIpJrSpt5TUjPcZZvYAjFYPmR3gdpG1XuSQ29biD&X-Amz-Signature=2bea3d869fbba53e12a7c127c63c8a34542e05ab151aed4bd3751aabafd9a902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4PO22O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH97oxHXTwH4ISfVOqeV2FMoxnAmSmlBtEoyPn6SC4fMAiAl74RRJ1czXt1waGARr25jQ7wFVPIE6ETi34N7JJuEeSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQkwKfUZ8%2BP8K2gIGKtwDEPTV%2Bl3j6moS5XyF%2FTR%2FdJtui27DYD5vYEGHrCe0x16GnBLW9l7UGsReS3fFWoN6JRjj0BV1C9ldTPnw6IST8nxfowhNrIlzDaiiqC5YXfsZpHO8mjDIyYW41iKiwbnDJPpcalRkTN91GYpcWvelS7L3MVTGmFA4oM0VA99eTmDUTMPXGTZdWTtUf%2FWW70GWf0dzr6ZYPtR2ux2ltPNR4ZSg6ZxrtMq2UURubW2UJHOskcZb0MPZXiRtMd0hfi9onEhzpnUgXXIFYXwtf5JXT%2BecvQZfHALXg4WyItL55ukkBpHMjMRKkNxWAz1428fFEMETAQhdcemmcu9IC90aHwNV1ccxGSKjM0wYnLumIIZGPMOgw2M2Aj2O8EZHk0VfoAjFjEbdATsG5bJTPm41Op3Xn%2BjA9IitNBrbAQ0xpT1caJBW%2FXpB90lOh178Hey2vWnrejkiXkswVS0KP9VJDcGnaNUkZtP2JVA1bV4KVC%2BpM3iRFgSxwf%2Fzu1FkoVM9LrH%2FWrWTycwjgv3odXg5PP0Sr%2Flgk%2FuyTALsIgCn%2FCor4eaMPqcr7mIojYIoqKvXoqrr%2BWvVlsPG%2BrG3WpPOmYrViZFTuobY6ZerF2J3u%2F97E8q57Ge4GOtGvYww%2F4XUwwY6pgEY04X6Tj%2FEW0vWS%2FL%2BsLbdcqt3kstuGZCwVIiUkPJy%2FVXlZIXC7mZbzdtvmZFpH9MLzfA9zWaDgNlEZ6lBSmO5%2FBjt4elewZ6ub6HkF4DmcwMfFl24YqH99vOwfzy3q3eDZSp72kTZn0zhAu1lp%2BSvip5bQli4hWBdPJWsNUQnU4Hrzpg0PaNBdIpJrSpt5TUjPcZZvYAjFYPmR3gdpG1XuSQ29biD&X-Amz-Signature=59aad2752d34e7059eb57abd1c53688a99f564e0d28beb6ef35a1f73fc7cb920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4PO22O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH97oxHXTwH4ISfVOqeV2FMoxnAmSmlBtEoyPn6SC4fMAiAl74RRJ1czXt1waGARr25jQ7wFVPIE6ETi34N7JJuEeSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQkwKfUZ8%2BP8K2gIGKtwDEPTV%2Bl3j6moS5XyF%2FTR%2FdJtui27DYD5vYEGHrCe0x16GnBLW9l7UGsReS3fFWoN6JRjj0BV1C9ldTPnw6IST8nxfowhNrIlzDaiiqC5YXfsZpHO8mjDIyYW41iKiwbnDJPpcalRkTN91GYpcWvelS7L3MVTGmFA4oM0VA99eTmDUTMPXGTZdWTtUf%2FWW70GWf0dzr6ZYPtR2ux2ltPNR4ZSg6ZxrtMq2UURubW2UJHOskcZb0MPZXiRtMd0hfi9onEhzpnUgXXIFYXwtf5JXT%2BecvQZfHALXg4WyItL55ukkBpHMjMRKkNxWAz1428fFEMETAQhdcemmcu9IC90aHwNV1ccxGSKjM0wYnLumIIZGPMOgw2M2Aj2O8EZHk0VfoAjFjEbdATsG5bJTPm41Op3Xn%2BjA9IitNBrbAQ0xpT1caJBW%2FXpB90lOh178Hey2vWnrejkiXkswVS0KP9VJDcGnaNUkZtP2JVA1bV4KVC%2BpM3iRFgSxwf%2Fzu1FkoVM9LrH%2FWrWTycwjgv3odXg5PP0Sr%2Flgk%2FuyTALsIgCn%2FCor4eaMPqcr7mIojYIoqKvXoqrr%2BWvVlsPG%2BrG3WpPOmYrViZFTuobY6ZerF2J3u%2F97E8q57Ge4GOtGvYww%2F4XUwwY6pgEY04X6Tj%2FEW0vWS%2FL%2BsLbdcqt3kstuGZCwVIiUkPJy%2FVXlZIXC7mZbzdtvmZFpH9MLzfA9zWaDgNlEZ6lBSmO5%2FBjt4elewZ6ub6HkF4DmcwMfFl24YqH99vOwfzy3q3eDZSp72kTZn0zhAu1lp%2BSvip5bQli4hWBdPJWsNUQnU4Hrzpg0PaNBdIpJrSpt5TUjPcZZvYAjFYPmR3gdpG1XuSQ29biD&X-Amz-Signature=ec64e2187f0ac9f7b0d64796d1213f1b17d33a1aeb08ea059b8ace76ba301019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4PO22O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH97oxHXTwH4ISfVOqeV2FMoxnAmSmlBtEoyPn6SC4fMAiAl74RRJ1czXt1waGARr25jQ7wFVPIE6ETi34N7JJuEeSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQkwKfUZ8%2BP8K2gIGKtwDEPTV%2Bl3j6moS5XyF%2FTR%2FdJtui27DYD5vYEGHrCe0x16GnBLW9l7UGsReS3fFWoN6JRjj0BV1C9ldTPnw6IST8nxfowhNrIlzDaiiqC5YXfsZpHO8mjDIyYW41iKiwbnDJPpcalRkTN91GYpcWvelS7L3MVTGmFA4oM0VA99eTmDUTMPXGTZdWTtUf%2FWW70GWf0dzr6ZYPtR2ux2ltPNR4ZSg6ZxrtMq2UURubW2UJHOskcZb0MPZXiRtMd0hfi9onEhzpnUgXXIFYXwtf5JXT%2BecvQZfHALXg4WyItL55ukkBpHMjMRKkNxWAz1428fFEMETAQhdcemmcu9IC90aHwNV1ccxGSKjM0wYnLumIIZGPMOgw2M2Aj2O8EZHk0VfoAjFjEbdATsG5bJTPm41Op3Xn%2BjA9IitNBrbAQ0xpT1caJBW%2FXpB90lOh178Hey2vWnrejkiXkswVS0KP9VJDcGnaNUkZtP2JVA1bV4KVC%2BpM3iRFgSxwf%2Fzu1FkoVM9LrH%2FWrWTycwjgv3odXg5PP0Sr%2Flgk%2FuyTALsIgCn%2FCor4eaMPqcr7mIojYIoqKvXoqrr%2BWvVlsPG%2BrG3WpPOmYrViZFTuobY6ZerF2J3u%2F97E8q57Ge4GOtGvYww%2F4XUwwY6pgEY04X6Tj%2FEW0vWS%2FL%2BsLbdcqt3kstuGZCwVIiUkPJy%2FVXlZIXC7mZbzdtvmZFpH9MLzfA9zWaDgNlEZ6lBSmO5%2FBjt4elewZ6ub6HkF4DmcwMfFl24YqH99vOwfzy3q3eDZSp72kTZn0zhAu1lp%2BSvip5bQli4hWBdPJWsNUQnU4Hrzpg0PaNBdIpJrSpt5TUjPcZZvYAjFYPmR3gdpG1XuSQ29biD&X-Amz-Signature=68326b2a29824234d877851e7095970372bb479e8f653130e666dcddb30d821a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4PO22O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH97oxHXTwH4ISfVOqeV2FMoxnAmSmlBtEoyPn6SC4fMAiAl74RRJ1czXt1waGARr25jQ7wFVPIE6ETi34N7JJuEeSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQkwKfUZ8%2BP8K2gIGKtwDEPTV%2Bl3j6moS5XyF%2FTR%2FdJtui27DYD5vYEGHrCe0x16GnBLW9l7UGsReS3fFWoN6JRjj0BV1C9ldTPnw6IST8nxfowhNrIlzDaiiqC5YXfsZpHO8mjDIyYW41iKiwbnDJPpcalRkTN91GYpcWvelS7L3MVTGmFA4oM0VA99eTmDUTMPXGTZdWTtUf%2FWW70GWf0dzr6ZYPtR2ux2ltPNR4ZSg6ZxrtMq2UURubW2UJHOskcZb0MPZXiRtMd0hfi9onEhzpnUgXXIFYXwtf5JXT%2BecvQZfHALXg4WyItL55ukkBpHMjMRKkNxWAz1428fFEMETAQhdcemmcu9IC90aHwNV1ccxGSKjM0wYnLumIIZGPMOgw2M2Aj2O8EZHk0VfoAjFjEbdATsG5bJTPm41Op3Xn%2BjA9IitNBrbAQ0xpT1caJBW%2FXpB90lOh178Hey2vWnrejkiXkswVS0KP9VJDcGnaNUkZtP2JVA1bV4KVC%2BpM3iRFgSxwf%2Fzu1FkoVM9LrH%2FWrWTycwjgv3odXg5PP0Sr%2Flgk%2FuyTALsIgCn%2FCor4eaMPqcr7mIojYIoqKvXoqrr%2BWvVlsPG%2BrG3WpPOmYrViZFTuobY6ZerF2J3u%2F97E8q57Ge4GOtGvYww%2F4XUwwY6pgEY04X6Tj%2FEW0vWS%2FL%2BsLbdcqt3kstuGZCwVIiUkPJy%2FVXlZIXC7mZbzdtvmZFpH9MLzfA9zWaDgNlEZ6lBSmO5%2FBjt4elewZ6ub6HkF4DmcwMfFl24YqH99vOwfzy3q3eDZSp72kTZn0zhAu1lp%2BSvip5bQli4hWBdPJWsNUQnU4Hrzpg0PaNBdIpJrSpt5TUjPcZZvYAjFYPmR3gdpG1XuSQ29biD&X-Amz-Signature=6c9d024dbe4591a42291079714f1c4c5f54eca000df854db1a183c01b78f0835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
