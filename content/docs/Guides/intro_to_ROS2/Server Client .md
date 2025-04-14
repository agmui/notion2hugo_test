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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6FMSUZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh7%2BHc%2FrgySBrjriIQ8buAOAHr93mEajRMe7uR%2FqhgCQIgeTQadO2hviwFdeCfDk3sIp6egZYbESVSyZQcC74OrVgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMpRKXRsVpXC79oOlyrcA0CWZCStPSK9FtZjaUjeUzyp5K0TCjDGRy5eSDDGA0ZWf%2FqX01JC635EE6UVc6R8K4SnrpIGuytlivpOB%2F1hiji1JwYJD%2Fq1RCtnqvZQqOiSVlhO8phSw7kAUKSSXm%2FC2oMTDE4cX0jtvvf4xGy3eYGJ0Sb%2FjnTgdVLBeX05uTt%2FrpCXwNmhPJCXoOPq7%2Fh4UtKHddIBoyKYWjPByhTucuB9OxKvhVcKKb2jRecwCjE4aiPQcCDBrM0L4DWQuIT0K8fvjsUEw4wflqmb37c%2FrApYM9mrD424sQ2Pfc47D7lm%2Bg6wgVWyXgqXp1UNwn1ImS5cFRADEvZ8RqhpHbWGZyIgLYAzUROZ4AYGNZZhmegZsmiFM6gXrt8b1CuJrEGy4mhbxwPgSaBupjwAXgLOY8Bj3%2B6CG%2FWkwOdQd1tbQNzvprFO0RPaLFIvbJhyzaZwCqhTEU3kBFyowjuu6D85ROInNZzPTok5V8pPB%2BBnKmR3R9kLnw5DzQNSZ6js2q9seRKUqU1BPoest0jOZifidbPtZBjjJKwJh6zyA4lcwVayH6dK3kIAIB%2FQfUEAOJnnl1rh6yBXs%2FGIkx1XTR1uQzoMRYpC50MHzkoHBx1Nitt3LzrBAma%2B%2Fr9YkvIlMLqo9L8GOqUBgNbWTQbXirT2jmEFImMeM5jNig%2BQV1oGW8jdVp3YgSzWk3oWh8e8dCW2pg4hooLYzsaKo3YU13CB5aevTtnh9dmwd1DQ2nPdfnO%2Bkum%2BpDfjVUf5bIY4gVkAyYXranz5wfbYQYfamjenFQI03Kc2fB%2F30qk8Z8rJLdvzuEwBR%2FXzoDBvuLLSQTtJR3emKdJnRx%2B6BZ1NQ1sPshHT5gv6%2B9PmPgTA&X-Amz-Signature=4f63fdda817a28d6a0f9f1bddbfa73252c9a398ef772232fd5d9ee52653fbbb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6FMSUZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh7%2BHc%2FrgySBrjriIQ8buAOAHr93mEajRMe7uR%2FqhgCQIgeTQadO2hviwFdeCfDk3sIp6egZYbESVSyZQcC74OrVgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMpRKXRsVpXC79oOlyrcA0CWZCStPSK9FtZjaUjeUzyp5K0TCjDGRy5eSDDGA0ZWf%2FqX01JC635EE6UVc6R8K4SnrpIGuytlivpOB%2F1hiji1JwYJD%2Fq1RCtnqvZQqOiSVlhO8phSw7kAUKSSXm%2FC2oMTDE4cX0jtvvf4xGy3eYGJ0Sb%2FjnTgdVLBeX05uTt%2FrpCXwNmhPJCXoOPq7%2Fh4UtKHddIBoyKYWjPByhTucuB9OxKvhVcKKb2jRecwCjE4aiPQcCDBrM0L4DWQuIT0K8fvjsUEw4wflqmb37c%2FrApYM9mrD424sQ2Pfc47D7lm%2Bg6wgVWyXgqXp1UNwn1ImS5cFRADEvZ8RqhpHbWGZyIgLYAzUROZ4AYGNZZhmegZsmiFM6gXrt8b1CuJrEGy4mhbxwPgSaBupjwAXgLOY8Bj3%2B6CG%2FWkwOdQd1tbQNzvprFO0RPaLFIvbJhyzaZwCqhTEU3kBFyowjuu6D85ROInNZzPTok5V8pPB%2BBnKmR3R9kLnw5DzQNSZ6js2q9seRKUqU1BPoest0jOZifidbPtZBjjJKwJh6zyA4lcwVayH6dK3kIAIB%2FQfUEAOJnnl1rh6yBXs%2FGIkx1XTR1uQzoMRYpC50MHzkoHBx1Nitt3LzrBAma%2B%2Fr9YkvIlMLqo9L8GOqUBgNbWTQbXirT2jmEFImMeM5jNig%2BQV1oGW8jdVp3YgSzWk3oWh8e8dCW2pg4hooLYzsaKo3YU13CB5aevTtnh9dmwd1DQ2nPdfnO%2Bkum%2BpDfjVUf5bIY4gVkAyYXranz5wfbYQYfamjenFQI03Kc2fB%2F30qk8Z8rJLdvzuEwBR%2FXzoDBvuLLSQTtJR3emKdJnRx%2B6BZ1NQ1sPshHT5gv6%2B9PmPgTA&X-Amz-Signature=4661b3878e51f200e1428fe51d75fed3c951676cfc484b03b5b2089455da7cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6FMSUZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh7%2BHc%2FrgySBrjriIQ8buAOAHr93mEajRMe7uR%2FqhgCQIgeTQadO2hviwFdeCfDk3sIp6egZYbESVSyZQcC74OrVgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMpRKXRsVpXC79oOlyrcA0CWZCStPSK9FtZjaUjeUzyp5K0TCjDGRy5eSDDGA0ZWf%2FqX01JC635EE6UVc6R8K4SnrpIGuytlivpOB%2F1hiji1JwYJD%2Fq1RCtnqvZQqOiSVlhO8phSw7kAUKSSXm%2FC2oMTDE4cX0jtvvf4xGy3eYGJ0Sb%2FjnTgdVLBeX05uTt%2FrpCXwNmhPJCXoOPq7%2Fh4UtKHddIBoyKYWjPByhTucuB9OxKvhVcKKb2jRecwCjE4aiPQcCDBrM0L4DWQuIT0K8fvjsUEw4wflqmb37c%2FrApYM9mrD424sQ2Pfc47D7lm%2Bg6wgVWyXgqXp1UNwn1ImS5cFRADEvZ8RqhpHbWGZyIgLYAzUROZ4AYGNZZhmegZsmiFM6gXrt8b1CuJrEGy4mhbxwPgSaBupjwAXgLOY8Bj3%2B6CG%2FWkwOdQd1tbQNzvprFO0RPaLFIvbJhyzaZwCqhTEU3kBFyowjuu6D85ROInNZzPTok5V8pPB%2BBnKmR3R9kLnw5DzQNSZ6js2q9seRKUqU1BPoest0jOZifidbPtZBjjJKwJh6zyA4lcwVayH6dK3kIAIB%2FQfUEAOJnnl1rh6yBXs%2FGIkx1XTR1uQzoMRYpC50MHzkoHBx1Nitt3LzrBAma%2B%2Fr9YkvIlMLqo9L8GOqUBgNbWTQbXirT2jmEFImMeM5jNig%2BQV1oGW8jdVp3YgSzWk3oWh8e8dCW2pg4hooLYzsaKo3YU13CB5aevTtnh9dmwd1DQ2nPdfnO%2Bkum%2BpDfjVUf5bIY4gVkAyYXranz5wfbYQYfamjenFQI03Kc2fB%2F30qk8Z8rJLdvzuEwBR%2FXzoDBvuLLSQTtJR3emKdJnRx%2B6BZ1NQ1sPshHT5gv6%2B9PmPgTA&X-Amz-Signature=00c20ca9b0b18e6e716394a70396a0bfdcb6104f50069b2eaa0d71e6f28e10e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6FMSUZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh7%2BHc%2FrgySBrjriIQ8buAOAHr93mEajRMe7uR%2FqhgCQIgeTQadO2hviwFdeCfDk3sIp6egZYbESVSyZQcC74OrVgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMpRKXRsVpXC79oOlyrcA0CWZCStPSK9FtZjaUjeUzyp5K0TCjDGRy5eSDDGA0ZWf%2FqX01JC635EE6UVc6R8K4SnrpIGuytlivpOB%2F1hiji1JwYJD%2Fq1RCtnqvZQqOiSVlhO8phSw7kAUKSSXm%2FC2oMTDE4cX0jtvvf4xGy3eYGJ0Sb%2FjnTgdVLBeX05uTt%2FrpCXwNmhPJCXoOPq7%2Fh4UtKHddIBoyKYWjPByhTucuB9OxKvhVcKKb2jRecwCjE4aiPQcCDBrM0L4DWQuIT0K8fvjsUEw4wflqmb37c%2FrApYM9mrD424sQ2Pfc47D7lm%2Bg6wgVWyXgqXp1UNwn1ImS5cFRADEvZ8RqhpHbWGZyIgLYAzUROZ4AYGNZZhmegZsmiFM6gXrt8b1CuJrEGy4mhbxwPgSaBupjwAXgLOY8Bj3%2B6CG%2FWkwOdQd1tbQNzvprFO0RPaLFIvbJhyzaZwCqhTEU3kBFyowjuu6D85ROInNZzPTok5V8pPB%2BBnKmR3R9kLnw5DzQNSZ6js2q9seRKUqU1BPoest0jOZifidbPtZBjjJKwJh6zyA4lcwVayH6dK3kIAIB%2FQfUEAOJnnl1rh6yBXs%2FGIkx1XTR1uQzoMRYpC50MHzkoHBx1Nitt3LzrBAma%2B%2Fr9YkvIlMLqo9L8GOqUBgNbWTQbXirT2jmEFImMeM5jNig%2BQV1oGW8jdVp3YgSzWk3oWh8e8dCW2pg4hooLYzsaKo3YU13CB5aevTtnh9dmwd1DQ2nPdfnO%2Bkum%2BpDfjVUf5bIY4gVkAyYXranz5wfbYQYfamjenFQI03Kc2fB%2F30qk8Z8rJLdvzuEwBR%2FXzoDBvuLLSQTtJR3emKdJnRx%2B6BZ1NQ1sPshHT5gv6%2B9PmPgTA&X-Amz-Signature=9921bb0b5e4861d5eb80dd29ee70df187f59f4c4176de86770d25ace0d033d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6FMSUZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh7%2BHc%2FrgySBrjriIQ8buAOAHr93mEajRMe7uR%2FqhgCQIgeTQadO2hviwFdeCfDk3sIp6egZYbESVSyZQcC74OrVgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMpRKXRsVpXC79oOlyrcA0CWZCStPSK9FtZjaUjeUzyp5K0TCjDGRy5eSDDGA0ZWf%2FqX01JC635EE6UVc6R8K4SnrpIGuytlivpOB%2F1hiji1JwYJD%2Fq1RCtnqvZQqOiSVlhO8phSw7kAUKSSXm%2FC2oMTDE4cX0jtvvf4xGy3eYGJ0Sb%2FjnTgdVLBeX05uTt%2FrpCXwNmhPJCXoOPq7%2Fh4UtKHddIBoyKYWjPByhTucuB9OxKvhVcKKb2jRecwCjE4aiPQcCDBrM0L4DWQuIT0K8fvjsUEw4wflqmb37c%2FrApYM9mrD424sQ2Pfc47D7lm%2Bg6wgVWyXgqXp1UNwn1ImS5cFRADEvZ8RqhpHbWGZyIgLYAzUROZ4AYGNZZhmegZsmiFM6gXrt8b1CuJrEGy4mhbxwPgSaBupjwAXgLOY8Bj3%2B6CG%2FWkwOdQd1tbQNzvprFO0RPaLFIvbJhyzaZwCqhTEU3kBFyowjuu6D85ROInNZzPTok5V8pPB%2BBnKmR3R9kLnw5DzQNSZ6js2q9seRKUqU1BPoest0jOZifidbPtZBjjJKwJh6zyA4lcwVayH6dK3kIAIB%2FQfUEAOJnnl1rh6yBXs%2FGIkx1XTR1uQzoMRYpC50MHzkoHBx1Nitt3LzrBAma%2B%2Fr9YkvIlMLqo9L8GOqUBgNbWTQbXirT2jmEFImMeM5jNig%2BQV1oGW8jdVp3YgSzWk3oWh8e8dCW2pg4hooLYzsaKo3YU13CB5aevTtnh9dmwd1DQ2nPdfnO%2Bkum%2BpDfjVUf5bIY4gVkAyYXranz5wfbYQYfamjenFQI03Kc2fB%2F30qk8Z8rJLdvzuEwBR%2FXzoDBvuLLSQTtJR3emKdJnRx%2B6BZ1NQ1sPshHT5gv6%2B9PmPgTA&X-Amz-Signature=76509384cf989ff40ccb73e89f84e5a3159a15c5044c0cb26e00924e16e7321a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
