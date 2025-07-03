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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNOTOTP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHz6tkrWO3pk7sGERmDWlTVnk1W0BR0au%2F4rTrC0sh8VAiEAtnPojD0NOCxlLxXajIaLOGurb836SmDDNUfKLvZx9V8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDmYlThitp2aBn2qTCrcA7ZmL2BtGJKoshO29EvCm3kqLEwifq72VKkkcg5C5xolfA8EHmfklrL%2BWpYef0ZQH8IoknsT9mfwIi86OSxF2NrdtMEc63WI11ZRa%2FokPgUMc%2FMEr%2FyF4rSgwpUnnbK9Sn57ZCT2GkyW6l8WCQVtoz%2B%2FqiBg0S5pFJmFk78bqQ4uuYc6RGwcv7CfhwQ706XmoXzX0bjpbQL%2Fhb29DVcCnYPMKPXdfhlzl5Snb6trAG89oG8JtMF4luzDZ5tWksPEGlOe8gGe4M%2FZpZx8c%2BIDHVZsxKS7jUEDdcBU8ZJuhqZ5biVQx5ma67PG13r%2Fi46DCYqBrNzwu8iLfY3qPtqbbQsJKFGwbiuHUguNJccJzEnDzQU4R5n3HVsOv%2BnrRFgFR5w%2FqepGDgDlT5k7y5TcJO8hp%2BLsZuR6qV54Y6HUXxynNjnmoywdH0AQjuNZ3puttdtY7fp66Ug3jzzNq9uoJkEo7vJVfB1lHwrYHX0F7%2BGSXQTJlcd0tPMiMXzL%2BAVOm2CgQe7vfAQBG9wf2SEzejPE%2Bg90Baa8C5h94aL%2BAjTaZTVbLhhXonU%2FAprojVw7NoMwIDSDF6eSF1qWGwxbF8wyLZUsNh4u7wnVfR6m7zCWfYwjHZsOm6snYoNBMIq8m8MGOqUBeqc4VDp5I3j8APY8%2B%2BIU117OTWOGnjt3Sb6Ej19hVEV5cobU%2FqN2z4uRjd%2Fvny%2F05J3593%2F1%2Fd%2BT2ySDsOBjeXXEhyHi4u5uCmbgOjeVIi6svgCK%2BJVOhPfh2qzBvQJ%2BRAOYTQy6MOYk8qkGhd6zG5QhT65eFBmk2euKHtdi3CgXgNrNPXvLISjEOU2sKVKPGMS6x%2FHcyMMxfR1RZ6wj1Nhw5m8g&X-Amz-Signature=f28e95ce4bf90b0e99d9336ee85daa5f8932898f8c7258b48c1da6837dee9aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNOTOTP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHz6tkrWO3pk7sGERmDWlTVnk1W0BR0au%2F4rTrC0sh8VAiEAtnPojD0NOCxlLxXajIaLOGurb836SmDDNUfKLvZx9V8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDmYlThitp2aBn2qTCrcA7ZmL2BtGJKoshO29EvCm3kqLEwifq72VKkkcg5C5xolfA8EHmfklrL%2BWpYef0ZQH8IoknsT9mfwIi86OSxF2NrdtMEc63WI11ZRa%2FokPgUMc%2FMEr%2FyF4rSgwpUnnbK9Sn57ZCT2GkyW6l8WCQVtoz%2B%2FqiBg0S5pFJmFk78bqQ4uuYc6RGwcv7CfhwQ706XmoXzX0bjpbQL%2Fhb29DVcCnYPMKPXdfhlzl5Snb6trAG89oG8JtMF4luzDZ5tWksPEGlOe8gGe4M%2FZpZx8c%2BIDHVZsxKS7jUEDdcBU8ZJuhqZ5biVQx5ma67PG13r%2Fi46DCYqBrNzwu8iLfY3qPtqbbQsJKFGwbiuHUguNJccJzEnDzQU4R5n3HVsOv%2BnrRFgFR5w%2FqepGDgDlT5k7y5TcJO8hp%2BLsZuR6qV54Y6HUXxynNjnmoywdH0AQjuNZ3puttdtY7fp66Ug3jzzNq9uoJkEo7vJVfB1lHwrYHX0F7%2BGSXQTJlcd0tPMiMXzL%2BAVOm2CgQe7vfAQBG9wf2SEzejPE%2Bg90Baa8C5h94aL%2BAjTaZTVbLhhXonU%2FAprojVw7NoMwIDSDF6eSF1qWGwxbF8wyLZUsNh4u7wnVfR6m7zCWfYwjHZsOm6snYoNBMIq8m8MGOqUBeqc4VDp5I3j8APY8%2B%2BIU117OTWOGnjt3Sb6Ej19hVEV5cobU%2FqN2z4uRjd%2Fvny%2F05J3593%2F1%2Fd%2BT2ySDsOBjeXXEhyHi4u5uCmbgOjeVIi6svgCK%2BJVOhPfh2qzBvQJ%2BRAOYTQy6MOYk8qkGhd6zG5QhT65eFBmk2euKHtdi3CgXgNrNPXvLISjEOU2sKVKPGMS6x%2FHcyMMxfR1RZ6wj1Nhw5m8g&X-Amz-Signature=f881c946b1c1e0ef636f2449521517df3adea7521be8c8254c10db7e7f15f662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNOTOTP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHz6tkrWO3pk7sGERmDWlTVnk1W0BR0au%2F4rTrC0sh8VAiEAtnPojD0NOCxlLxXajIaLOGurb836SmDDNUfKLvZx9V8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDmYlThitp2aBn2qTCrcA7ZmL2BtGJKoshO29EvCm3kqLEwifq72VKkkcg5C5xolfA8EHmfklrL%2BWpYef0ZQH8IoknsT9mfwIi86OSxF2NrdtMEc63WI11ZRa%2FokPgUMc%2FMEr%2FyF4rSgwpUnnbK9Sn57ZCT2GkyW6l8WCQVtoz%2B%2FqiBg0S5pFJmFk78bqQ4uuYc6RGwcv7CfhwQ706XmoXzX0bjpbQL%2Fhb29DVcCnYPMKPXdfhlzl5Snb6trAG89oG8JtMF4luzDZ5tWksPEGlOe8gGe4M%2FZpZx8c%2BIDHVZsxKS7jUEDdcBU8ZJuhqZ5biVQx5ma67PG13r%2Fi46DCYqBrNzwu8iLfY3qPtqbbQsJKFGwbiuHUguNJccJzEnDzQU4R5n3HVsOv%2BnrRFgFR5w%2FqepGDgDlT5k7y5TcJO8hp%2BLsZuR6qV54Y6HUXxynNjnmoywdH0AQjuNZ3puttdtY7fp66Ug3jzzNq9uoJkEo7vJVfB1lHwrYHX0F7%2BGSXQTJlcd0tPMiMXzL%2BAVOm2CgQe7vfAQBG9wf2SEzejPE%2Bg90Baa8C5h94aL%2BAjTaZTVbLhhXonU%2FAprojVw7NoMwIDSDF6eSF1qWGwxbF8wyLZUsNh4u7wnVfR6m7zCWfYwjHZsOm6snYoNBMIq8m8MGOqUBeqc4VDp5I3j8APY8%2B%2BIU117OTWOGnjt3Sb6Ej19hVEV5cobU%2FqN2z4uRjd%2Fvny%2F05J3593%2F1%2Fd%2BT2ySDsOBjeXXEhyHi4u5uCmbgOjeVIi6svgCK%2BJVOhPfh2qzBvQJ%2BRAOYTQy6MOYk8qkGhd6zG5QhT65eFBmk2euKHtdi3CgXgNrNPXvLISjEOU2sKVKPGMS6x%2FHcyMMxfR1RZ6wj1Nhw5m8g&X-Amz-Signature=537843a9325cae1f8ca55c45fea7051f966e5deb9484ff65fc75e817b90ed6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNOTOTP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHz6tkrWO3pk7sGERmDWlTVnk1W0BR0au%2F4rTrC0sh8VAiEAtnPojD0NOCxlLxXajIaLOGurb836SmDDNUfKLvZx9V8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDmYlThitp2aBn2qTCrcA7ZmL2BtGJKoshO29EvCm3kqLEwifq72VKkkcg5C5xolfA8EHmfklrL%2BWpYef0ZQH8IoknsT9mfwIi86OSxF2NrdtMEc63WI11ZRa%2FokPgUMc%2FMEr%2FyF4rSgwpUnnbK9Sn57ZCT2GkyW6l8WCQVtoz%2B%2FqiBg0S5pFJmFk78bqQ4uuYc6RGwcv7CfhwQ706XmoXzX0bjpbQL%2Fhb29DVcCnYPMKPXdfhlzl5Snb6trAG89oG8JtMF4luzDZ5tWksPEGlOe8gGe4M%2FZpZx8c%2BIDHVZsxKS7jUEDdcBU8ZJuhqZ5biVQx5ma67PG13r%2Fi46DCYqBrNzwu8iLfY3qPtqbbQsJKFGwbiuHUguNJccJzEnDzQU4R5n3HVsOv%2BnrRFgFR5w%2FqepGDgDlT5k7y5TcJO8hp%2BLsZuR6qV54Y6HUXxynNjnmoywdH0AQjuNZ3puttdtY7fp66Ug3jzzNq9uoJkEo7vJVfB1lHwrYHX0F7%2BGSXQTJlcd0tPMiMXzL%2BAVOm2CgQe7vfAQBG9wf2SEzejPE%2Bg90Baa8C5h94aL%2BAjTaZTVbLhhXonU%2FAprojVw7NoMwIDSDF6eSF1qWGwxbF8wyLZUsNh4u7wnVfR6m7zCWfYwjHZsOm6snYoNBMIq8m8MGOqUBeqc4VDp5I3j8APY8%2B%2BIU117OTWOGnjt3Sb6Ej19hVEV5cobU%2FqN2z4uRjd%2Fvny%2F05J3593%2F1%2Fd%2BT2ySDsOBjeXXEhyHi4u5uCmbgOjeVIi6svgCK%2BJVOhPfh2qzBvQJ%2BRAOYTQy6MOYk8qkGhd6zG5QhT65eFBmk2euKHtdi3CgXgNrNPXvLISjEOU2sKVKPGMS6x%2FHcyMMxfR1RZ6wj1Nhw5m8g&X-Amz-Signature=bcfc9117ff0f29654ee997f483ac96cefb820f035eb3b97af9d6d924834be5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNOTOTP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHz6tkrWO3pk7sGERmDWlTVnk1W0BR0au%2F4rTrC0sh8VAiEAtnPojD0NOCxlLxXajIaLOGurb836SmDDNUfKLvZx9V8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDmYlThitp2aBn2qTCrcA7ZmL2BtGJKoshO29EvCm3kqLEwifq72VKkkcg5C5xolfA8EHmfklrL%2BWpYef0ZQH8IoknsT9mfwIi86OSxF2NrdtMEc63WI11ZRa%2FokPgUMc%2FMEr%2FyF4rSgwpUnnbK9Sn57ZCT2GkyW6l8WCQVtoz%2B%2FqiBg0S5pFJmFk78bqQ4uuYc6RGwcv7CfhwQ706XmoXzX0bjpbQL%2Fhb29DVcCnYPMKPXdfhlzl5Snb6trAG89oG8JtMF4luzDZ5tWksPEGlOe8gGe4M%2FZpZx8c%2BIDHVZsxKS7jUEDdcBU8ZJuhqZ5biVQx5ma67PG13r%2Fi46DCYqBrNzwu8iLfY3qPtqbbQsJKFGwbiuHUguNJccJzEnDzQU4R5n3HVsOv%2BnrRFgFR5w%2FqepGDgDlT5k7y5TcJO8hp%2BLsZuR6qV54Y6HUXxynNjnmoywdH0AQjuNZ3puttdtY7fp66Ug3jzzNq9uoJkEo7vJVfB1lHwrYHX0F7%2BGSXQTJlcd0tPMiMXzL%2BAVOm2CgQe7vfAQBG9wf2SEzejPE%2Bg90Baa8C5h94aL%2BAjTaZTVbLhhXonU%2FAprojVw7NoMwIDSDF6eSF1qWGwxbF8wyLZUsNh4u7wnVfR6m7zCWfYwjHZsOm6snYoNBMIq8m8MGOqUBeqc4VDp5I3j8APY8%2B%2BIU117OTWOGnjt3Sb6Ej19hVEV5cobU%2FqN2z4uRjd%2Fvny%2F05J3593%2F1%2Fd%2BT2ySDsOBjeXXEhyHi4u5uCmbgOjeVIi6svgCK%2BJVOhPfh2qzBvQJ%2BRAOYTQy6MOYk8qkGhd6zG5QhT65eFBmk2euKHtdi3CgXgNrNPXvLISjEOU2sKVKPGMS6x%2FHcyMMxfR1RZ6wj1Nhw5m8g&X-Amz-Signature=a4ef73f5a0a1ca1cb41a070fb1764960bb781541a24a8985c86ec330b431f77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
