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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7EL6XV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBoNn%2Fn%2F6xhfGCZqx4YpSCDIKpUIx7QXybTxEmhpdXGMAiEAk6LBjwC5fNEKelxIxQXfpx8bDl9ah65TMOK4BEEWwGwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA9M%2FR5aseH7AaKPMircA8q36KJvPwPn6o9e6CwqcT9nzvPRjr2kV%2BJlG8QsPAqmNxA1qaJywLlLNs7jkLZ0eLZF6KwcaFrEFXbKa5aohO%2FcZKy%2BFY0wbWwe0LEYkiFI5%2BvczO3%2Fmuf1fdNpZsdE0i766kkyxA8P8IhCVT6Kp8EnU%2FTGbXO8V%2FaDhuZP3a0wISVUm6I2mzkzSn0h4FLr%2Fk%2FkHOT6qihJqQxCbPChZ9z8hoVBYWOfJLZsp7dQN8HaVeAv%2FBt9eTyfDzuODfnMRbj4Ms5gBwYr1TJyAowM%2FeRu%2BHPzDkP%2Fts9mXTLbFyeN73e4SrKEfk%2BybPgNCr592ISxqzhIauzZdnCoyzN6hTxs8AJ%2BYeLW6b7GzvqeUnKBkYhphQgjTBwr2EypKqGpck2hyw5NjeDSBOWg4xhe5EY%2B46YEjWOAR%2FoU4cXoVDrllyBOefcfqlD5sT1PMJhrkVsyU0hvaN%2BLzptqq4pPGu0Op8zzkXwbcFhglBd9DuW98C95XRUeaZgVPZsWOZs3fQasWym023s7o%2FquHOg7CxDA%2Fyhkgn4mGGjMi%2FGZ8C9G194AptSen81LZzrJ6DKPsuYp9d2UncwfBgUH%2BHXKNlIgL4ZuvjSgnJH1cbiOYAkXAWPSOVFD4A%2Ban0EEMOuq0cEGOqUBAYcqzrdw%2BJ5564l5dvfHjt%2FONPLWOh75kZnndpNdqEPPVSsOdh0%2BIB4OovBjaUFwRJgQ5sxo7M4Bt6sIoT6DnwFcVxnU3ShhhbiWdgea2%2BdAIk9XZUcdmQ5KdM2IzWiRGG%2BFNPC0FAy0L7EkZtC0WPeewd39YbK%2BbsBDWtB%2Bq%2BAWPh1ZPC0F5B7OqLR%2F0vZW19sK%2B0Li2yuRRZRJHePjNbQbtcDz&X-Amz-Signature=3d893bf62870a220d6ec2b4b9cf622f631e5ba9c6ba274958ed6237ce9a0b99c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7EL6XV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBoNn%2Fn%2F6xhfGCZqx4YpSCDIKpUIx7QXybTxEmhpdXGMAiEAk6LBjwC5fNEKelxIxQXfpx8bDl9ah65TMOK4BEEWwGwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA9M%2FR5aseH7AaKPMircA8q36KJvPwPn6o9e6CwqcT9nzvPRjr2kV%2BJlG8QsPAqmNxA1qaJywLlLNs7jkLZ0eLZF6KwcaFrEFXbKa5aohO%2FcZKy%2BFY0wbWwe0LEYkiFI5%2BvczO3%2Fmuf1fdNpZsdE0i766kkyxA8P8IhCVT6Kp8EnU%2FTGbXO8V%2FaDhuZP3a0wISVUm6I2mzkzSn0h4FLr%2Fk%2FkHOT6qihJqQxCbPChZ9z8hoVBYWOfJLZsp7dQN8HaVeAv%2FBt9eTyfDzuODfnMRbj4Ms5gBwYr1TJyAowM%2FeRu%2BHPzDkP%2Fts9mXTLbFyeN73e4SrKEfk%2BybPgNCr592ISxqzhIauzZdnCoyzN6hTxs8AJ%2BYeLW6b7GzvqeUnKBkYhphQgjTBwr2EypKqGpck2hyw5NjeDSBOWg4xhe5EY%2B46YEjWOAR%2FoU4cXoVDrllyBOefcfqlD5sT1PMJhrkVsyU0hvaN%2BLzptqq4pPGu0Op8zzkXwbcFhglBd9DuW98C95XRUeaZgVPZsWOZs3fQasWym023s7o%2FquHOg7CxDA%2Fyhkgn4mGGjMi%2FGZ8C9G194AptSen81LZzrJ6DKPsuYp9d2UncwfBgUH%2BHXKNlIgL4ZuvjSgnJH1cbiOYAkXAWPSOVFD4A%2Ban0EEMOuq0cEGOqUBAYcqzrdw%2BJ5564l5dvfHjt%2FONPLWOh75kZnndpNdqEPPVSsOdh0%2BIB4OovBjaUFwRJgQ5sxo7M4Bt6sIoT6DnwFcVxnU3ShhhbiWdgea2%2BdAIk9XZUcdmQ5KdM2IzWiRGG%2BFNPC0FAy0L7EkZtC0WPeewd39YbK%2BbsBDWtB%2Bq%2BAWPh1ZPC0F5B7OqLR%2F0vZW19sK%2B0Li2yuRRZRJHePjNbQbtcDz&X-Amz-Signature=cba13436f3053d29639b540732df0df73e369848e0a1c28f6d31a11b38e01399&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7EL6XV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBoNn%2Fn%2F6xhfGCZqx4YpSCDIKpUIx7QXybTxEmhpdXGMAiEAk6LBjwC5fNEKelxIxQXfpx8bDl9ah65TMOK4BEEWwGwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA9M%2FR5aseH7AaKPMircA8q36KJvPwPn6o9e6CwqcT9nzvPRjr2kV%2BJlG8QsPAqmNxA1qaJywLlLNs7jkLZ0eLZF6KwcaFrEFXbKa5aohO%2FcZKy%2BFY0wbWwe0LEYkiFI5%2BvczO3%2Fmuf1fdNpZsdE0i766kkyxA8P8IhCVT6Kp8EnU%2FTGbXO8V%2FaDhuZP3a0wISVUm6I2mzkzSn0h4FLr%2Fk%2FkHOT6qihJqQxCbPChZ9z8hoVBYWOfJLZsp7dQN8HaVeAv%2FBt9eTyfDzuODfnMRbj4Ms5gBwYr1TJyAowM%2FeRu%2BHPzDkP%2Fts9mXTLbFyeN73e4SrKEfk%2BybPgNCr592ISxqzhIauzZdnCoyzN6hTxs8AJ%2BYeLW6b7GzvqeUnKBkYhphQgjTBwr2EypKqGpck2hyw5NjeDSBOWg4xhe5EY%2B46YEjWOAR%2FoU4cXoVDrllyBOefcfqlD5sT1PMJhrkVsyU0hvaN%2BLzptqq4pPGu0Op8zzkXwbcFhglBd9DuW98C95XRUeaZgVPZsWOZs3fQasWym023s7o%2FquHOg7CxDA%2Fyhkgn4mGGjMi%2FGZ8C9G194AptSen81LZzrJ6DKPsuYp9d2UncwfBgUH%2BHXKNlIgL4ZuvjSgnJH1cbiOYAkXAWPSOVFD4A%2Ban0EEMOuq0cEGOqUBAYcqzrdw%2BJ5564l5dvfHjt%2FONPLWOh75kZnndpNdqEPPVSsOdh0%2BIB4OovBjaUFwRJgQ5sxo7M4Bt6sIoT6DnwFcVxnU3ShhhbiWdgea2%2BdAIk9XZUcdmQ5KdM2IzWiRGG%2BFNPC0FAy0L7EkZtC0WPeewd39YbK%2BbsBDWtB%2Bq%2BAWPh1ZPC0F5B7OqLR%2F0vZW19sK%2B0Li2yuRRZRJHePjNbQbtcDz&X-Amz-Signature=bd1ae0a185dc69f7af97404e5ba384f4feaa61a9c2eddb33f44a3f7f065a5b59&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7EL6XV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBoNn%2Fn%2F6xhfGCZqx4YpSCDIKpUIx7QXybTxEmhpdXGMAiEAk6LBjwC5fNEKelxIxQXfpx8bDl9ah65TMOK4BEEWwGwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA9M%2FR5aseH7AaKPMircA8q36KJvPwPn6o9e6CwqcT9nzvPRjr2kV%2BJlG8QsPAqmNxA1qaJywLlLNs7jkLZ0eLZF6KwcaFrEFXbKa5aohO%2FcZKy%2BFY0wbWwe0LEYkiFI5%2BvczO3%2Fmuf1fdNpZsdE0i766kkyxA8P8IhCVT6Kp8EnU%2FTGbXO8V%2FaDhuZP3a0wISVUm6I2mzkzSn0h4FLr%2Fk%2FkHOT6qihJqQxCbPChZ9z8hoVBYWOfJLZsp7dQN8HaVeAv%2FBt9eTyfDzuODfnMRbj4Ms5gBwYr1TJyAowM%2FeRu%2BHPzDkP%2Fts9mXTLbFyeN73e4SrKEfk%2BybPgNCr592ISxqzhIauzZdnCoyzN6hTxs8AJ%2BYeLW6b7GzvqeUnKBkYhphQgjTBwr2EypKqGpck2hyw5NjeDSBOWg4xhe5EY%2B46YEjWOAR%2FoU4cXoVDrllyBOefcfqlD5sT1PMJhrkVsyU0hvaN%2BLzptqq4pPGu0Op8zzkXwbcFhglBd9DuW98C95XRUeaZgVPZsWOZs3fQasWym023s7o%2FquHOg7CxDA%2Fyhkgn4mGGjMi%2FGZ8C9G194AptSen81LZzrJ6DKPsuYp9d2UncwfBgUH%2BHXKNlIgL4ZuvjSgnJH1cbiOYAkXAWPSOVFD4A%2Ban0EEMOuq0cEGOqUBAYcqzrdw%2BJ5564l5dvfHjt%2FONPLWOh75kZnndpNdqEPPVSsOdh0%2BIB4OovBjaUFwRJgQ5sxo7M4Bt6sIoT6DnwFcVxnU3ShhhbiWdgea2%2BdAIk9XZUcdmQ5KdM2IzWiRGG%2BFNPC0FAy0L7EkZtC0WPeewd39YbK%2BbsBDWtB%2Bq%2BAWPh1ZPC0F5B7OqLR%2F0vZW19sK%2B0Li2yuRRZRJHePjNbQbtcDz&X-Amz-Signature=9665ac954d41ad88a4f1f20a0f1e7485136c8c22923b47b767c2c7fb45174033&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7EL6XV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBoNn%2Fn%2F6xhfGCZqx4YpSCDIKpUIx7QXybTxEmhpdXGMAiEAk6LBjwC5fNEKelxIxQXfpx8bDl9ah65TMOK4BEEWwGwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA9M%2FR5aseH7AaKPMircA8q36KJvPwPn6o9e6CwqcT9nzvPRjr2kV%2BJlG8QsPAqmNxA1qaJywLlLNs7jkLZ0eLZF6KwcaFrEFXbKa5aohO%2FcZKy%2BFY0wbWwe0LEYkiFI5%2BvczO3%2Fmuf1fdNpZsdE0i766kkyxA8P8IhCVT6Kp8EnU%2FTGbXO8V%2FaDhuZP3a0wISVUm6I2mzkzSn0h4FLr%2Fk%2FkHOT6qihJqQxCbPChZ9z8hoVBYWOfJLZsp7dQN8HaVeAv%2FBt9eTyfDzuODfnMRbj4Ms5gBwYr1TJyAowM%2FeRu%2BHPzDkP%2Fts9mXTLbFyeN73e4SrKEfk%2BybPgNCr592ISxqzhIauzZdnCoyzN6hTxs8AJ%2BYeLW6b7GzvqeUnKBkYhphQgjTBwr2EypKqGpck2hyw5NjeDSBOWg4xhe5EY%2B46YEjWOAR%2FoU4cXoVDrllyBOefcfqlD5sT1PMJhrkVsyU0hvaN%2BLzptqq4pPGu0Op8zzkXwbcFhglBd9DuW98C95XRUeaZgVPZsWOZs3fQasWym023s7o%2FquHOg7CxDA%2Fyhkgn4mGGjMi%2FGZ8C9G194AptSen81LZzrJ6DKPsuYp9d2UncwfBgUH%2BHXKNlIgL4ZuvjSgnJH1cbiOYAkXAWPSOVFD4A%2Ban0EEMOuq0cEGOqUBAYcqzrdw%2BJ5564l5dvfHjt%2FONPLWOh75kZnndpNdqEPPVSsOdh0%2BIB4OovBjaUFwRJgQ5sxo7M4Bt6sIoT6DnwFcVxnU3ShhhbiWdgea2%2BdAIk9XZUcdmQ5KdM2IzWiRGG%2BFNPC0FAy0L7EkZtC0WPeewd39YbK%2BbsBDWtB%2Bq%2BAWPh1ZPC0F5B7OqLR%2F0vZW19sK%2B0Li2yuRRZRJHePjNbQbtcDz&X-Amz-Signature=051018f10d49ba5621b7ba0f10178ff246cf42887b5940f74421ea47bb2605e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
