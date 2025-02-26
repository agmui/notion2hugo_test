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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JOH7RM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEikzlWVPvkPp13nY8t60kvNAdMFs5W205gHuS1Dj8VxAiBEPE3rqR6bkXToPzPQyQO4riojd0xeiEz8JGFVxngxnyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMy%2FhpaDRrH2fIeRCJKtwD1B%2B%2BicyNsHnAY01hQsLQEFMK%2F4Au%2FBSenVfvmekkzR%2B9ZDeo87UN5Pd9StN5MY9gzWos3p1k5MBJ6LMFxUxS31H0slv3EUL07mtVPV4Flk7SkZctWRoe2Esju7xWSsxURkMU%2BN8JIw8JSXV%2BGDbfD7kJu0QKW11GHBAXjMYukg%2FXoNRi12Jw5a4FIwGLpU4r0guLn8Zrz7XeK4ZitOGVc4ChF8lHZf6Gv%2BCqb6qiKfT%2FG92MpXyVxa9NdJ%2FAqWRr2R5tlHA5lFWy%2BPxWXTnZMJhGxAttYLR0iTz6Lp11fUacXRjs31TuccUj0on%2BVD9eNxpQL%2FXSkwv%2B9nlEZEzn%2BG7qTkAi7zpFr2lCMD0ZI3aEgAXG8mgIo9OYgiEL%2B39q%2FUpexlj%2BEZTFpFlQwrEZuKsv7faBZDySvQLK0WaiaVQZIbF4yCBJsQq2L%2BCvrelA8f9CHNJEg2o7x%2FiHyJfFwhohKtxbYuWDyi7Xmc9UnVRRGx3hug4xgGI585YasFZFfv2elEA2bXu4PfNTVmjzQ7tZI7hxmqVkACMW%2Beqw6KRrj1dC4%2F36hU9pDhVXGRQdTLtCpCsKFRy7LFxjZMEkEERwTsvZo6fxowjq56J0abnfkLTT4nI8Yjq0SvkwjYn8vQY6pgHdK8pdDV5bfI6EMQVneTJB%2Bl8OAeNrVkXbqiglB1APUqMD41a5zDL5vWMCxYuAt9Lx4yDJYFg5LleNJk9cwhlzuN8%2FvssSbc7DSKLAHSnrVPkgjYvhwC6qbeJVTIGEc5MoxZvjeJfcUA1srAbQ1AQpFMgMMCAkzIgeAnqRorW%2Futzflr46vw4A5IudKBEZDWdRgwGy%2FI5IwdzLFYPslekyr2ftuCVf&X-Amz-Signature=2a78d56b82bdd17b6ac22dcc8b2e8b4a0202efda8c0b9101f6d3bc0a8124fc8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JOH7RM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEikzlWVPvkPp13nY8t60kvNAdMFs5W205gHuS1Dj8VxAiBEPE3rqR6bkXToPzPQyQO4riojd0xeiEz8JGFVxngxnyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMy%2FhpaDRrH2fIeRCJKtwD1B%2B%2BicyNsHnAY01hQsLQEFMK%2F4Au%2FBSenVfvmekkzR%2B9ZDeo87UN5Pd9StN5MY9gzWos3p1k5MBJ6LMFxUxS31H0slv3EUL07mtVPV4Flk7SkZctWRoe2Esju7xWSsxURkMU%2BN8JIw8JSXV%2BGDbfD7kJu0QKW11GHBAXjMYukg%2FXoNRi12Jw5a4FIwGLpU4r0guLn8Zrz7XeK4ZitOGVc4ChF8lHZf6Gv%2BCqb6qiKfT%2FG92MpXyVxa9NdJ%2FAqWRr2R5tlHA5lFWy%2BPxWXTnZMJhGxAttYLR0iTz6Lp11fUacXRjs31TuccUj0on%2BVD9eNxpQL%2FXSkwv%2B9nlEZEzn%2BG7qTkAi7zpFr2lCMD0ZI3aEgAXG8mgIo9OYgiEL%2B39q%2FUpexlj%2BEZTFpFlQwrEZuKsv7faBZDySvQLK0WaiaVQZIbF4yCBJsQq2L%2BCvrelA8f9CHNJEg2o7x%2FiHyJfFwhohKtxbYuWDyi7Xmc9UnVRRGx3hug4xgGI585YasFZFfv2elEA2bXu4PfNTVmjzQ7tZI7hxmqVkACMW%2Beqw6KRrj1dC4%2F36hU9pDhVXGRQdTLtCpCsKFRy7LFxjZMEkEERwTsvZo6fxowjq56J0abnfkLTT4nI8Yjq0SvkwjYn8vQY6pgHdK8pdDV5bfI6EMQVneTJB%2Bl8OAeNrVkXbqiglB1APUqMD41a5zDL5vWMCxYuAt9Lx4yDJYFg5LleNJk9cwhlzuN8%2FvssSbc7DSKLAHSnrVPkgjYvhwC6qbeJVTIGEc5MoxZvjeJfcUA1srAbQ1AQpFMgMMCAkzIgeAnqRorW%2Futzflr46vw4A5IudKBEZDWdRgwGy%2FI5IwdzLFYPslekyr2ftuCVf&X-Amz-Signature=89dc7a654d195e83014de3a68296aa9fbdf9cc66d1649514428200b0bc2148b6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JOH7RM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEikzlWVPvkPp13nY8t60kvNAdMFs5W205gHuS1Dj8VxAiBEPE3rqR6bkXToPzPQyQO4riojd0xeiEz8JGFVxngxnyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMy%2FhpaDRrH2fIeRCJKtwD1B%2B%2BicyNsHnAY01hQsLQEFMK%2F4Au%2FBSenVfvmekkzR%2B9ZDeo87UN5Pd9StN5MY9gzWos3p1k5MBJ6LMFxUxS31H0slv3EUL07mtVPV4Flk7SkZctWRoe2Esju7xWSsxURkMU%2BN8JIw8JSXV%2BGDbfD7kJu0QKW11GHBAXjMYukg%2FXoNRi12Jw5a4FIwGLpU4r0guLn8Zrz7XeK4ZitOGVc4ChF8lHZf6Gv%2BCqb6qiKfT%2FG92MpXyVxa9NdJ%2FAqWRr2R5tlHA5lFWy%2BPxWXTnZMJhGxAttYLR0iTz6Lp11fUacXRjs31TuccUj0on%2BVD9eNxpQL%2FXSkwv%2B9nlEZEzn%2BG7qTkAi7zpFr2lCMD0ZI3aEgAXG8mgIo9OYgiEL%2B39q%2FUpexlj%2BEZTFpFlQwrEZuKsv7faBZDySvQLK0WaiaVQZIbF4yCBJsQq2L%2BCvrelA8f9CHNJEg2o7x%2FiHyJfFwhohKtxbYuWDyi7Xmc9UnVRRGx3hug4xgGI585YasFZFfv2elEA2bXu4PfNTVmjzQ7tZI7hxmqVkACMW%2Beqw6KRrj1dC4%2F36hU9pDhVXGRQdTLtCpCsKFRy7LFxjZMEkEERwTsvZo6fxowjq56J0abnfkLTT4nI8Yjq0SvkwjYn8vQY6pgHdK8pdDV5bfI6EMQVneTJB%2Bl8OAeNrVkXbqiglB1APUqMD41a5zDL5vWMCxYuAt9Lx4yDJYFg5LleNJk9cwhlzuN8%2FvssSbc7DSKLAHSnrVPkgjYvhwC6qbeJVTIGEc5MoxZvjeJfcUA1srAbQ1AQpFMgMMCAkzIgeAnqRorW%2Futzflr46vw4A5IudKBEZDWdRgwGy%2FI5IwdzLFYPslekyr2ftuCVf&X-Amz-Signature=fe9c5993d9548a7326b25645093f69bae35c18bd5d6473d7529a86a424ef1d18&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JOH7RM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEikzlWVPvkPp13nY8t60kvNAdMFs5W205gHuS1Dj8VxAiBEPE3rqR6bkXToPzPQyQO4riojd0xeiEz8JGFVxngxnyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMy%2FhpaDRrH2fIeRCJKtwD1B%2B%2BicyNsHnAY01hQsLQEFMK%2F4Au%2FBSenVfvmekkzR%2B9ZDeo87UN5Pd9StN5MY9gzWos3p1k5MBJ6LMFxUxS31H0slv3EUL07mtVPV4Flk7SkZctWRoe2Esju7xWSsxURkMU%2BN8JIw8JSXV%2BGDbfD7kJu0QKW11GHBAXjMYukg%2FXoNRi12Jw5a4FIwGLpU4r0guLn8Zrz7XeK4ZitOGVc4ChF8lHZf6Gv%2BCqb6qiKfT%2FG92MpXyVxa9NdJ%2FAqWRr2R5tlHA5lFWy%2BPxWXTnZMJhGxAttYLR0iTz6Lp11fUacXRjs31TuccUj0on%2BVD9eNxpQL%2FXSkwv%2B9nlEZEzn%2BG7qTkAi7zpFr2lCMD0ZI3aEgAXG8mgIo9OYgiEL%2B39q%2FUpexlj%2BEZTFpFlQwrEZuKsv7faBZDySvQLK0WaiaVQZIbF4yCBJsQq2L%2BCvrelA8f9CHNJEg2o7x%2FiHyJfFwhohKtxbYuWDyi7Xmc9UnVRRGx3hug4xgGI585YasFZFfv2elEA2bXu4PfNTVmjzQ7tZI7hxmqVkACMW%2Beqw6KRrj1dC4%2F36hU9pDhVXGRQdTLtCpCsKFRy7LFxjZMEkEERwTsvZo6fxowjq56J0abnfkLTT4nI8Yjq0SvkwjYn8vQY6pgHdK8pdDV5bfI6EMQVneTJB%2Bl8OAeNrVkXbqiglB1APUqMD41a5zDL5vWMCxYuAt9Lx4yDJYFg5LleNJk9cwhlzuN8%2FvssSbc7DSKLAHSnrVPkgjYvhwC6qbeJVTIGEc5MoxZvjeJfcUA1srAbQ1AQpFMgMMCAkzIgeAnqRorW%2Futzflr46vw4A5IudKBEZDWdRgwGy%2FI5IwdzLFYPslekyr2ftuCVf&X-Amz-Signature=2ba670799b0316efd984fc1eabb257c46bfc98301e2271cc3f9d156b7f71367f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JOH7RM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEikzlWVPvkPp13nY8t60kvNAdMFs5W205gHuS1Dj8VxAiBEPE3rqR6bkXToPzPQyQO4riojd0xeiEz8JGFVxngxnyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMy%2FhpaDRrH2fIeRCJKtwD1B%2B%2BicyNsHnAY01hQsLQEFMK%2F4Au%2FBSenVfvmekkzR%2B9ZDeo87UN5Pd9StN5MY9gzWos3p1k5MBJ6LMFxUxS31H0slv3EUL07mtVPV4Flk7SkZctWRoe2Esju7xWSsxURkMU%2BN8JIw8JSXV%2BGDbfD7kJu0QKW11GHBAXjMYukg%2FXoNRi12Jw5a4FIwGLpU4r0guLn8Zrz7XeK4ZitOGVc4ChF8lHZf6Gv%2BCqb6qiKfT%2FG92MpXyVxa9NdJ%2FAqWRr2R5tlHA5lFWy%2BPxWXTnZMJhGxAttYLR0iTz6Lp11fUacXRjs31TuccUj0on%2BVD9eNxpQL%2FXSkwv%2B9nlEZEzn%2BG7qTkAi7zpFr2lCMD0ZI3aEgAXG8mgIo9OYgiEL%2B39q%2FUpexlj%2BEZTFpFlQwrEZuKsv7faBZDySvQLK0WaiaVQZIbF4yCBJsQq2L%2BCvrelA8f9CHNJEg2o7x%2FiHyJfFwhohKtxbYuWDyi7Xmc9UnVRRGx3hug4xgGI585YasFZFfv2elEA2bXu4PfNTVmjzQ7tZI7hxmqVkACMW%2Beqw6KRrj1dC4%2F36hU9pDhVXGRQdTLtCpCsKFRy7LFxjZMEkEERwTsvZo6fxowjq56J0abnfkLTT4nI8Yjq0SvkwjYn8vQY6pgHdK8pdDV5bfI6EMQVneTJB%2Bl8OAeNrVkXbqiglB1APUqMD41a5zDL5vWMCxYuAt9Lx4yDJYFg5LleNJk9cwhlzuN8%2FvssSbc7DSKLAHSnrVPkgjYvhwC6qbeJVTIGEc5MoxZvjeJfcUA1srAbQ1AQpFMgMMCAkzIgeAnqRorW%2Futzflr46vw4A5IudKBEZDWdRgwGy%2FI5IwdzLFYPslekyr2ftuCVf&X-Amz-Signature=0cf00e7a227135852e02c8850b8fcc2fff480784a53653433659014c96ea0f39&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
