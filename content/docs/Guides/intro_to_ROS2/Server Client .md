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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCPWM55%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIA0kKmuWgFlrcB6xJ687VsgKZj90IkDtk1gT4gnIVV6FAiA1PmqlwJ2SinmyowwDpOfmVLiK8LQU9HoIcYbNLU0vHSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMH1eSCEhdrMO9WmLyKtwDcWuVZxCIn6cioajldINHK0esSZguOLngGndbwF7U8zN25NGEd4f9DqbN82x9E1NXzYBT97DDVdmqGh0Qx66KX3uvWk95w9N20z6OMaOORkxIH2r7NqQCAGbHlVEUZm1KHOr74YTUpt9IWNrHzhLbL9heivu434UvSsMq5OB6FcE%2Fb1mEDD%2BBuBGewvk%2F%2B8LYrgjjVSIotQyKeadRaIqJCsj4KJtrkgTVBvnFWCvPIT6HIsZO7ZTgUIrT3BTx4Z69sfLmMgq7HsLYaEjhXDDjQXnmglFL4PgjqsW3f0UGJVtiuPkGWG%2B6CVP1kndPD%2F3SxxSEwf5suan3LYbJujVrOKoj0i5MivwV1GKAJ6xfErReU3TVBRLSkdQrnlJsRB3B8ki8cMOeluVa7ELfpZUAvvu1DM70V9jsTg46aDi4x0CH17C%2FPtFbjHoM79I%2Ff1yWdqQg450N%2Bvs6fB7Y6PPPdLyqtIQyQH2Z0q7fCMuOnP1WAWltiesagvjXLjqTPoE5P%2Bqap%2BgT%2FEK3JlpWM7f3opepghalPedICelzRfD9XKFPjyuhuhvYrf6MfpSf%2FMAqik%2BwWfsfPkfvfOTRjPrke1LQBBjRIJq1175zi53nJyXDJMbIEsgjJqnRSAIw58GWvQY6pgF2J2GkI0Be%2B5WTvu6p76xxB5S58750gESTnM1SGyYJLAHhP9Uh1j8w4tYfs0VnqDM3%2FvPFPEs8rmsofqVAbha4E3XNjMHHQi%2B%2B2ghXuVVinAhIcTTKcKypUPHIaoMg4KBcONRKHTALBgtxEyRKAmRwqTIZ8uIHbtshBRy30hTNFScU9dcBascUcQQ17UdywkYp4qo8GHrXS7MYW37rSmSF%2BeFg9Cqs&X-Amz-Signature=570fb16602af7cd9d36e2774b2965f91983601a8ba3327f5243dc3edc82f9dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCPWM55%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIA0kKmuWgFlrcB6xJ687VsgKZj90IkDtk1gT4gnIVV6FAiA1PmqlwJ2SinmyowwDpOfmVLiK8LQU9HoIcYbNLU0vHSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMH1eSCEhdrMO9WmLyKtwDcWuVZxCIn6cioajldINHK0esSZguOLngGndbwF7U8zN25NGEd4f9DqbN82x9E1NXzYBT97DDVdmqGh0Qx66KX3uvWk95w9N20z6OMaOORkxIH2r7NqQCAGbHlVEUZm1KHOr74YTUpt9IWNrHzhLbL9heivu434UvSsMq5OB6FcE%2Fb1mEDD%2BBuBGewvk%2F%2B8LYrgjjVSIotQyKeadRaIqJCsj4KJtrkgTVBvnFWCvPIT6HIsZO7ZTgUIrT3BTx4Z69sfLmMgq7HsLYaEjhXDDjQXnmglFL4PgjqsW3f0UGJVtiuPkGWG%2B6CVP1kndPD%2F3SxxSEwf5suan3LYbJujVrOKoj0i5MivwV1GKAJ6xfErReU3TVBRLSkdQrnlJsRB3B8ki8cMOeluVa7ELfpZUAvvu1DM70V9jsTg46aDi4x0CH17C%2FPtFbjHoM79I%2Ff1yWdqQg450N%2Bvs6fB7Y6PPPdLyqtIQyQH2Z0q7fCMuOnP1WAWltiesagvjXLjqTPoE5P%2Bqap%2BgT%2FEK3JlpWM7f3opepghalPedICelzRfD9XKFPjyuhuhvYrf6MfpSf%2FMAqik%2BwWfsfPkfvfOTRjPrke1LQBBjRIJq1175zi53nJyXDJMbIEsgjJqnRSAIw58GWvQY6pgF2J2GkI0Be%2B5WTvu6p76xxB5S58750gESTnM1SGyYJLAHhP9Uh1j8w4tYfs0VnqDM3%2FvPFPEs8rmsofqVAbha4E3XNjMHHQi%2B%2B2ghXuVVinAhIcTTKcKypUPHIaoMg4KBcONRKHTALBgtxEyRKAmRwqTIZ8uIHbtshBRy30hTNFScU9dcBascUcQQ17UdywkYp4qo8GHrXS7MYW37rSmSF%2BeFg9Cqs&X-Amz-Signature=70b1760052741f6ff01b5aef81da8a250b52779b4592604ff8386700f5d3256d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCPWM55%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIA0kKmuWgFlrcB6xJ687VsgKZj90IkDtk1gT4gnIVV6FAiA1PmqlwJ2SinmyowwDpOfmVLiK8LQU9HoIcYbNLU0vHSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMH1eSCEhdrMO9WmLyKtwDcWuVZxCIn6cioajldINHK0esSZguOLngGndbwF7U8zN25NGEd4f9DqbN82x9E1NXzYBT97DDVdmqGh0Qx66KX3uvWk95w9N20z6OMaOORkxIH2r7NqQCAGbHlVEUZm1KHOr74YTUpt9IWNrHzhLbL9heivu434UvSsMq5OB6FcE%2Fb1mEDD%2BBuBGewvk%2F%2B8LYrgjjVSIotQyKeadRaIqJCsj4KJtrkgTVBvnFWCvPIT6HIsZO7ZTgUIrT3BTx4Z69sfLmMgq7HsLYaEjhXDDjQXnmglFL4PgjqsW3f0UGJVtiuPkGWG%2B6CVP1kndPD%2F3SxxSEwf5suan3LYbJujVrOKoj0i5MivwV1GKAJ6xfErReU3TVBRLSkdQrnlJsRB3B8ki8cMOeluVa7ELfpZUAvvu1DM70V9jsTg46aDi4x0CH17C%2FPtFbjHoM79I%2Ff1yWdqQg450N%2Bvs6fB7Y6PPPdLyqtIQyQH2Z0q7fCMuOnP1WAWltiesagvjXLjqTPoE5P%2Bqap%2BgT%2FEK3JlpWM7f3opepghalPedICelzRfD9XKFPjyuhuhvYrf6MfpSf%2FMAqik%2BwWfsfPkfvfOTRjPrke1LQBBjRIJq1175zi53nJyXDJMbIEsgjJqnRSAIw58GWvQY6pgF2J2GkI0Be%2B5WTvu6p76xxB5S58750gESTnM1SGyYJLAHhP9Uh1j8w4tYfs0VnqDM3%2FvPFPEs8rmsofqVAbha4E3XNjMHHQi%2B%2B2ghXuVVinAhIcTTKcKypUPHIaoMg4KBcONRKHTALBgtxEyRKAmRwqTIZ8uIHbtshBRy30hTNFScU9dcBascUcQQ17UdywkYp4qo8GHrXS7MYW37rSmSF%2BeFg9Cqs&X-Amz-Signature=ee8692164e6415fd7f4dc6b1d3d19ba7ab3d73d3eac4afdccedc9eb9e10c90be&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCPWM55%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIA0kKmuWgFlrcB6xJ687VsgKZj90IkDtk1gT4gnIVV6FAiA1PmqlwJ2SinmyowwDpOfmVLiK8LQU9HoIcYbNLU0vHSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMH1eSCEhdrMO9WmLyKtwDcWuVZxCIn6cioajldINHK0esSZguOLngGndbwF7U8zN25NGEd4f9DqbN82x9E1NXzYBT97DDVdmqGh0Qx66KX3uvWk95w9N20z6OMaOORkxIH2r7NqQCAGbHlVEUZm1KHOr74YTUpt9IWNrHzhLbL9heivu434UvSsMq5OB6FcE%2Fb1mEDD%2BBuBGewvk%2F%2B8LYrgjjVSIotQyKeadRaIqJCsj4KJtrkgTVBvnFWCvPIT6HIsZO7ZTgUIrT3BTx4Z69sfLmMgq7HsLYaEjhXDDjQXnmglFL4PgjqsW3f0UGJVtiuPkGWG%2B6CVP1kndPD%2F3SxxSEwf5suan3LYbJujVrOKoj0i5MivwV1GKAJ6xfErReU3TVBRLSkdQrnlJsRB3B8ki8cMOeluVa7ELfpZUAvvu1DM70V9jsTg46aDi4x0CH17C%2FPtFbjHoM79I%2Ff1yWdqQg450N%2Bvs6fB7Y6PPPdLyqtIQyQH2Z0q7fCMuOnP1WAWltiesagvjXLjqTPoE5P%2Bqap%2BgT%2FEK3JlpWM7f3opepghalPedICelzRfD9XKFPjyuhuhvYrf6MfpSf%2FMAqik%2BwWfsfPkfvfOTRjPrke1LQBBjRIJq1175zi53nJyXDJMbIEsgjJqnRSAIw58GWvQY6pgF2J2GkI0Be%2B5WTvu6p76xxB5S58750gESTnM1SGyYJLAHhP9Uh1j8w4tYfs0VnqDM3%2FvPFPEs8rmsofqVAbha4E3XNjMHHQi%2B%2B2ghXuVVinAhIcTTKcKypUPHIaoMg4KBcONRKHTALBgtxEyRKAmRwqTIZ8uIHbtshBRy30hTNFScU9dcBascUcQQ17UdywkYp4qo8GHrXS7MYW37rSmSF%2BeFg9Cqs&X-Amz-Signature=f1660d3a52ce51d8e3e5721654b2025e342a22c8b12b5c7964531a595c86e565&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCPWM55%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIA0kKmuWgFlrcB6xJ687VsgKZj90IkDtk1gT4gnIVV6FAiA1PmqlwJ2SinmyowwDpOfmVLiK8LQU9HoIcYbNLU0vHSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMH1eSCEhdrMO9WmLyKtwDcWuVZxCIn6cioajldINHK0esSZguOLngGndbwF7U8zN25NGEd4f9DqbN82x9E1NXzYBT97DDVdmqGh0Qx66KX3uvWk95w9N20z6OMaOORkxIH2r7NqQCAGbHlVEUZm1KHOr74YTUpt9IWNrHzhLbL9heivu434UvSsMq5OB6FcE%2Fb1mEDD%2BBuBGewvk%2F%2B8LYrgjjVSIotQyKeadRaIqJCsj4KJtrkgTVBvnFWCvPIT6HIsZO7ZTgUIrT3BTx4Z69sfLmMgq7HsLYaEjhXDDjQXnmglFL4PgjqsW3f0UGJVtiuPkGWG%2B6CVP1kndPD%2F3SxxSEwf5suan3LYbJujVrOKoj0i5MivwV1GKAJ6xfErReU3TVBRLSkdQrnlJsRB3B8ki8cMOeluVa7ELfpZUAvvu1DM70V9jsTg46aDi4x0CH17C%2FPtFbjHoM79I%2Ff1yWdqQg450N%2Bvs6fB7Y6PPPdLyqtIQyQH2Z0q7fCMuOnP1WAWltiesagvjXLjqTPoE5P%2Bqap%2BgT%2FEK3JlpWM7f3opepghalPedICelzRfD9XKFPjyuhuhvYrf6MfpSf%2FMAqik%2BwWfsfPkfvfOTRjPrke1LQBBjRIJq1175zi53nJyXDJMbIEsgjJqnRSAIw58GWvQY6pgF2J2GkI0Be%2B5WTvu6p76xxB5S58750gESTnM1SGyYJLAHhP9Uh1j8w4tYfs0VnqDM3%2FvPFPEs8rmsofqVAbha4E3XNjMHHQi%2B%2B2ghXuVVinAhIcTTKcKypUPHIaoMg4KBcONRKHTALBgtxEyRKAmRwqTIZ8uIHbtshBRy30hTNFScU9dcBascUcQQ17UdywkYp4qo8GHrXS7MYW37rSmSF%2BeFg9Cqs&X-Amz-Signature=030441c2e775fa9b773dfe9c9c25562716a4becfc25a2431fb1ef04d986c7695&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
