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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUZJRJY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRgHtZw%2FeeQO9skLFav%2BnJe0Ll5A%2B72LIOkjBcFjM6gIhAN03BnQV%2Bzq8G8w5Lup8NtVilWSzluSHbZ31115XtzxvKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKvS9r98K%2FcLjuD8Qq3AOiCl1gbzKfh6ANfKs32bruIzzHIowmmfk0FPuwj5ch0%2BmUjnFzuB2V9NFYEeb2pYW3bFXuuXr494mvLB7ROu%2F5NnzjaSnEmN6qqVRyzQzHaYziwwmUAsjAp7B7pg8MwVCzoslx0wwL2ljni7ywEqeIs0t%2FBFGsRR6La40heJZLQxVzj5pE5Y3f6Fm9TT%2Fm2R35m5NXGE0zJAd9Igo9tWDP2G4IiOPPYRzFiQ48dOtfgipfHDn0nXZU86Yl9TQlFFVv721h9LQVT5934AI4PJmV7yQqvoUhAuUyWimqInPIwsczeXv1EvAv4irBBIdkXju%2Bon4mQieIYpsJUy6OoIN96at%2BgswSAIUJOtij1oH%2FGf1LhHqqcGvoousuUXmZLN%2FgQ1dHW%2FvHcUo2LPXse18icIaN2W524WYeAG7KLAldkr0GmKy%2BR2YWZaP1jYc6tg61lH60dxfgauCE0kel8Bp8%2B5FFMtlD8Nfz2JuHL2aNraXGGOYNk5bYeeF9tsgvC7vyer0wuk82yStmJ0ow2xIiaMwJlEeOnhaQxiddEPDh3EmPFfGHPGu0mur31R0gSGEGAnsE9ncWvWYYW2pWayFCREuJGgkXFIDOh0DtZhVaP2nWMBGO8%2Bsuc8PGxzCljKfEBjqkAcplmPnEtD62ymFPE%2FqSeYmk9uivxGm36v6G3GkhyD7BSTygiTmgiZgBl3gF3jiSNf80Lml1h2URdkVb07L36M8CRY4Ghhmo4AIc%2F6QQKkQx%2B6gDhv2lV1enw%2B0l3YFyJZNtB%2Fk%2BdBL7U%2FJoP69QU6jYIDQDDDfUCXv4q7EW4EXjcBxzzshxq9ChJcLHpC1PswhRhOVN4eq5LOKAM7k4Oj177CtY&X-Amz-Signature=4544239a8a68270c50731b08a57009594854d050dbca9a67eb694bcca515e306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUZJRJY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRgHtZw%2FeeQO9skLFav%2BnJe0Ll5A%2B72LIOkjBcFjM6gIhAN03BnQV%2Bzq8G8w5Lup8NtVilWSzluSHbZ31115XtzxvKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKvS9r98K%2FcLjuD8Qq3AOiCl1gbzKfh6ANfKs32bruIzzHIowmmfk0FPuwj5ch0%2BmUjnFzuB2V9NFYEeb2pYW3bFXuuXr494mvLB7ROu%2F5NnzjaSnEmN6qqVRyzQzHaYziwwmUAsjAp7B7pg8MwVCzoslx0wwL2ljni7ywEqeIs0t%2FBFGsRR6La40heJZLQxVzj5pE5Y3f6Fm9TT%2Fm2R35m5NXGE0zJAd9Igo9tWDP2G4IiOPPYRzFiQ48dOtfgipfHDn0nXZU86Yl9TQlFFVv721h9LQVT5934AI4PJmV7yQqvoUhAuUyWimqInPIwsczeXv1EvAv4irBBIdkXju%2Bon4mQieIYpsJUy6OoIN96at%2BgswSAIUJOtij1oH%2FGf1LhHqqcGvoousuUXmZLN%2FgQ1dHW%2FvHcUo2LPXse18icIaN2W524WYeAG7KLAldkr0GmKy%2BR2YWZaP1jYc6tg61lH60dxfgauCE0kel8Bp8%2B5FFMtlD8Nfz2JuHL2aNraXGGOYNk5bYeeF9tsgvC7vyer0wuk82yStmJ0ow2xIiaMwJlEeOnhaQxiddEPDh3EmPFfGHPGu0mur31R0gSGEGAnsE9ncWvWYYW2pWayFCREuJGgkXFIDOh0DtZhVaP2nWMBGO8%2Bsuc8PGxzCljKfEBjqkAcplmPnEtD62ymFPE%2FqSeYmk9uivxGm36v6G3GkhyD7BSTygiTmgiZgBl3gF3jiSNf80Lml1h2URdkVb07L36M8CRY4Ghhmo4AIc%2F6QQKkQx%2B6gDhv2lV1enw%2B0l3YFyJZNtB%2Fk%2BdBL7U%2FJoP69QU6jYIDQDDDfUCXv4q7EW4EXjcBxzzshxq9ChJcLHpC1PswhRhOVN4eq5LOKAM7k4Oj177CtY&X-Amz-Signature=ce87e020b0900e6c79f156549ebe83bedad985a4e59375c57570c1a722817444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUZJRJY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRgHtZw%2FeeQO9skLFav%2BnJe0Ll5A%2B72LIOkjBcFjM6gIhAN03BnQV%2Bzq8G8w5Lup8NtVilWSzluSHbZ31115XtzxvKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKvS9r98K%2FcLjuD8Qq3AOiCl1gbzKfh6ANfKs32bruIzzHIowmmfk0FPuwj5ch0%2BmUjnFzuB2V9NFYEeb2pYW3bFXuuXr494mvLB7ROu%2F5NnzjaSnEmN6qqVRyzQzHaYziwwmUAsjAp7B7pg8MwVCzoslx0wwL2ljni7ywEqeIs0t%2FBFGsRR6La40heJZLQxVzj5pE5Y3f6Fm9TT%2Fm2R35m5NXGE0zJAd9Igo9tWDP2G4IiOPPYRzFiQ48dOtfgipfHDn0nXZU86Yl9TQlFFVv721h9LQVT5934AI4PJmV7yQqvoUhAuUyWimqInPIwsczeXv1EvAv4irBBIdkXju%2Bon4mQieIYpsJUy6OoIN96at%2BgswSAIUJOtij1oH%2FGf1LhHqqcGvoousuUXmZLN%2FgQ1dHW%2FvHcUo2LPXse18icIaN2W524WYeAG7KLAldkr0GmKy%2BR2YWZaP1jYc6tg61lH60dxfgauCE0kel8Bp8%2B5FFMtlD8Nfz2JuHL2aNraXGGOYNk5bYeeF9tsgvC7vyer0wuk82yStmJ0ow2xIiaMwJlEeOnhaQxiddEPDh3EmPFfGHPGu0mur31R0gSGEGAnsE9ncWvWYYW2pWayFCREuJGgkXFIDOh0DtZhVaP2nWMBGO8%2Bsuc8PGxzCljKfEBjqkAcplmPnEtD62ymFPE%2FqSeYmk9uivxGm36v6G3GkhyD7BSTygiTmgiZgBl3gF3jiSNf80Lml1h2URdkVb07L36M8CRY4Ghhmo4AIc%2F6QQKkQx%2B6gDhv2lV1enw%2B0l3YFyJZNtB%2Fk%2BdBL7U%2FJoP69QU6jYIDQDDDfUCXv4q7EW4EXjcBxzzshxq9ChJcLHpC1PswhRhOVN4eq5LOKAM7k4Oj177CtY&X-Amz-Signature=6c9308fcd1270e22666b1a346cef0732185c1b2ed5a91b9d9e9a7d50341aa68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUZJRJY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRgHtZw%2FeeQO9skLFav%2BnJe0Ll5A%2B72LIOkjBcFjM6gIhAN03BnQV%2Bzq8G8w5Lup8NtVilWSzluSHbZ31115XtzxvKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKvS9r98K%2FcLjuD8Qq3AOiCl1gbzKfh6ANfKs32bruIzzHIowmmfk0FPuwj5ch0%2BmUjnFzuB2V9NFYEeb2pYW3bFXuuXr494mvLB7ROu%2F5NnzjaSnEmN6qqVRyzQzHaYziwwmUAsjAp7B7pg8MwVCzoslx0wwL2ljni7ywEqeIs0t%2FBFGsRR6La40heJZLQxVzj5pE5Y3f6Fm9TT%2Fm2R35m5NXGE0zJAd9Igo9tWDP2G4IiOPPYRzFiQ48dOtfgipfHDn0nXZU86Yl9TQlFFVv721h9LQVT5934AI4PJmV7yQqvoUhAuUyWimqInPIwsczeXv1EvAv4irBBIdkXju%2Bon4mQieIYpsJUy6OoIN96at%2BgswSAIUJOtij1oH%2FGf1LhHqqcGvoousuUXmZLN%2FgQ1dHW%2FvHcUo2LPXse18icIaN2W524WYeAG7KLAldkr0GmKy%2BR2YWZaP1jYc6tg61lH60dxfgauCE0kel8Bp8%2B5FFMtlD8Nfz2JuHL2aNraXGGOYNk5bYeeF9tsgvC7vyer0wuk82yStmJ0ow2xIiaMwJlEeOnhaQxiddEPDh3EmPFfGHPGu0mur31R0gSGEGAnsE9ncWvWYYW2pWayFCREuJGgkXFIDOh0DtZhVaP2nWMBGO8%2Bsuc8PGxzCljKfEBjqkAcplmPnEtD62ymFPE%2FqSeYmk9uivxGm36v6G3GkhyD7BSTygiTmgiZgBl3gF3jiSNf80Lml1h2URdkVb07L36M8CRY4Ghhmo4AIc%2F6QQKkQx%2B6gDhv2lV1enw%2B0l3YFyJZNtB%2Fk%2BdBL7U%2FJoP69QU6jYIDQDDDfUCXv4q7EW4EXjcBxzzshxq9ChJcLHpC1PswhRhOVN4eq5LOKAM7k4Oj177CtY&X-Amz-Signature=55ffa8187f61799ffb6457a3d0a9db5e54ec30677f7184cd979ebf023afed5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUZJRJY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRgHtZw%2FeeQO9skLFav%2BnJe0Ll5A%2B72LIOkjBcFjM6gIhAN03BnQV%2Bzq8G8w5Lup8NtVilWSzluSHbZ31115XtzxvKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKvS9r98K%2FcLjuD8Qq3AOiCl1gbzKfh6ANfKs32bruIzzHIowmmfk0FPuwj5ch0%2BmUjnFzuB2V9NFYEeb2pYW3bFXuuXr494mvLB7ROu%2F5NnzjaSnEmN6qqVRyzQzHaYziwwmUAsjAp7B7pg8MwVCzoslx0wwL2ljni7ywEqeIs0t%2FBFGsRR6La40heJZLQxVzj5pE5Y3f6Fm9TT%2Fm2R35m5NXGE0zJAd9Igo9tWDP2G4IiOPPYRzFiQ48dOtfgipfHDn0nXZU86Yl9TQlFFVv721h9LQVT5934AI4PJmV7yQqvoUhAuUyWimqInPIwsczeXv1EvAv4irBBIdkXju%2Bon4mQieIYpsJUy6OoIN96at%2BgswSAIUJOtij1oH%2FGf1LhHqqcGvoousuUXmZLN%2FgQ1dHW%2FvHcUo2LPXse18icIaN2W524WYeAG7KLAldkr0GmKy%2BR2YWZaP1jYc6tg61lH60dxfgauCE0kel8Bp8%2B5FFMtlD8Nfz2JuHL2aNraXGGOYNk5bYeeF9tsgvC7vyer0wuk82yStmJ0ow2xIiaMwJlEeOnhaQxiddEPDh3EmPFfGHPGu0mur31R0gSGEGAnsE9ncWvWYYW2pWayFCREuJGgkXFIDOh0DtZhVaP2nWMBGO8%2Bsuc8PGxzCljKfEBjqkAcplmPnEtD62ymFPE%2FqSeYmk9uivxGm36v6G3GkhyD7BSTygiTmgiZgBl3gF3jiSNf80Lml1h2URdkVb07L36M8CRY4Ghhmo4AIc%2F6QQKkQx%2B6gDhv2lV1enw%2B0l3YFyJZNtB%2Fk%2BdBL7U%2FJoP69QU6jYIDQDDDfUCXv4q7EW4EXjcBxzzshxq9ChJcLHpC1PswhRhOVN4eq5LOKAM7k4Oj177CtY&X-Amz-Signature=5a1eb857f37226b02f049fc290363f6c20828f38624a77763ee2785bb186a8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
