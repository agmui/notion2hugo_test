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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q766ITJX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCnKzXkhOELZR1lo1XwdtQb1IiBR%2BTkyIj4p8sYWbRC1wIhAPi%2FF0ZjSkaD69dSyLx0iodoBfNuJjYQ3u7nK71CS0bBKv8DCBIQABoMNjM3NDIzMTgzODA1IgxNwGirMiV%2BgLMAm2Qq3AMiG%2BN8cYRn7q5W7gEnOYmW8WN5DdK5B6ONr6GRwHee0h5qML3aiAYmqsT%2FXBP%2BN9mu%2BGtxDc3LDI8UKxqYqHNkKJGKPdNcMsW3T5iZsmX39ir7txZpUwnhnVnzsvTO6gDU%2FR%2FGLubwKnb8iJOtk2%2FMkVG505mBJQFHp8dNN5vwI1PkrGWIZ4Ag4tDT25NuKyFHbdyodQR%2BKDpusatJ5SkmRxx8VD%2BYwJyn9vYUnLbs564zEBD1fkdqgQdGXyvAg%2BgKHd3OPPLQNJycPGfNg2ROl1KcH8cbNYFUDMoezw9LhbFS1Q9ioVroqAInJWHhOShm%2BW5go0exa7EbF7ohMdiT1UJX4o%2FzzRfyRlCG0m8HWX6K2SIAXsXdx85xcDOLTRbo8qFpgBewyWsu30iWGr1Cm%2FL85ceWbAEd8F0H5kTiTV96FgHnp3puhqUzoOeT5c%2Bw05vMCt7sywQf2qshgdpiJudfgLx2hw0lyRJNXG50vkoZOsh9mqU3yK%2Fmza8joyrJPNHrzYktsSt%2FrYRlVN4mdHTZXfv9qE9ASPt9Hm1skkKkWHHWrHOgRDkDN583kezRcc5ycCB7HBwEtIyGezF50p%2Ffk4gAN4o0JCw6Rb8SQLAMUZEo%2FWQ2INqwEDDuhKjABjqkASbyZdld7WGkVOBsWhriQ9L2gleCALxa%2FJamfkKXKlvDh%2FZZCufsr9DHNd%2BYNjz0kPaO1qpSi0jKT9d5j%2FaMqTkwM4gCbwYZpK5e2o1nKq169GUztFLEe1uakmNZy2cCjSsQhrHCHduJcEmw2n2Bn%2FuIHyarPxRnvO07YtmC9Co0za0tXQUIo4teJTKMcnR7U4KZR7Y4scXa8qINCZt0kHXD9108&X-Amz-Signature=9671a466c0ab1bcabbff798786ab7e6670b8f1a989af9b2e3a4ceb198749be57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q766ITJX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCnKzXkhOELZR1lo1XwdtQb1IiBR%2BTkyIj4p8sYWbRC1wIhAPi%2FF0ZjSkaD69dSyLx0iodoBfNuJjYQ3u7nK71CS0bBKv8DCBIQABoMNjM3NDIzMTgzODA1IgxNwGirMiV%2BgLMAm2Qq3AMiG%2BN8cYRn7q5W7gEnOYmW8WN5DdK5B6ONr6GRwHee0h5qML3aiAYmqsT%2FXBP%2BN9mu%2BGtxDc3LDI8UKxqYqHNkKJGKPdNcMsW3T5iZsmX39ir7txZpUwnhnVnzsvTO6gDU%2FR%2FGLubwKnb8iJOtk2%2FMkVG505mBJQFHp8dNN5vwI1PkrGWIZ4Ag4tDT25NuKyFHbdyodQR%2BKDpusatJ5SkmRxx8VD%2BYwJyn9vYUnLbs564zEBD1fkdqgQdGXyvAg%2BgKHd3OPPLQNJycPGfNg2ROl1KcH8cbNYFUDMoezw9LhbFS1Q9ioVroqAInJWHhOShm%2BW5go0exa7EbF7ohMdiT1UJX4o%2FzzRfyRlCG0m8HWX6K2SIAXsXdx85xcDOLTRbo8qFpgBewyWsu30iWGr1Cm%2FL85ceWbAEd8F0H5kTiTV96FgHnp3puhqUzoOeT5c%2Bw05vMCt7sywQf2qshgdpiJudfgLx2hw0lyRJNXG50vkoZOsh9mqU3yK%2Fmza8joyrJPNHrzYktsSt%2FrYRlVN4mdHTZXfv9qE9ASPt9Hm1skkKkWHHWrHOgRDkDN583kezRcc5ycCB7HBwEtIyGezF50p%2Ffk4gAN4o0JCw6Rb8SQLAMUZEo%2FWQ2INqwEDDuhKjABjqkASbyZdld7WGkVOBsWhriQ9L2gleCALxa%2FJamfkKXKlvDh%2FZZCufsr9DHNd%2BYNjz0kPaO1qpSi0jKT9d5j%2FaMqTkwM4gCbwYZpK5e2o1nKq169GUztFLEe1uakmNZy2cCjSsQhrHCHduJcEmw2n2Bn%2FuIHyarPxRnvO07YtmC9Co0za0tXQUIo4teJTKMcnR7U4KZR7Y4scXa8qINCZt0kHXD9108&X-Amz-Signature=dba48590ad7e7e8cd208e3275cc503e004715c5f86ae63065a248d569bf50ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q766ITJX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCnKzXkhOELZR1lo1XwdtQb1IiBR%2BTkyIj4p8sYWbRC1wIhAPi%2FF0ZjSkaD69dSyLx0iodoBfNuJjYQ3u7nK71CS0bBKv8DCBIQABoMNjM3NDIzMTgzODA1IgxNwGirMiV%2BgLMAm2Qq3AMiG%2BN8cYRn7q5W7gEnOYmW8WN5DdK5B6ONr6GRwHee0h5qML3aiAYmqsT%2FXBP%2BN9mu%2BGtxDc3LDI8UKxqYqHNkKJGKPdNcMsW3T5iZsmX39ir7txZpUwnhnVnzsvTO6gDU%2FR%2FGLubwKnb8iJOtk2%2FMkVG505mBJQFHp8dNN5vwI1PkrGWIZ4Ag4tDT25NuKyFHbdyodQR%2BKDpusatJ5SkmRxx8VD%2BYwJyn9vYUnLbs564zEBD1fkdqgQdGXyvAg%2BgKHd3OPPLQNJycPGfNg2ROl1KcH8cbNYFUDMoezw9LhbFS1Q9ioVroqAInJWHhOShm%2BW5go0exa7EbF7ohMdiT1UJX4o%2FzzRfyRlCG0m8HWX6K2SIAXsXdx85xcDOLTRbo8qFpgBewyWsu30iWGr1Cm%2FL85ceWbAEd8F0H5kTiTV96FgHnp3puhqUzoOeT5c%2Bw05vMCt7sywQf2qshgdpiJudfgLx2hw0lyRJNXG50vkoZOsh9mqU3yK%2Fmza8joyrJPNHrzYktsSt%2FrYRlVN4mdHTZXfv9qE9ASPt9Hm1skkKkWHHWrHOgRDkDN583kezRcc5ycCB7HBwEtIyGezF50p%2Ffk4gAN4o0JCw6Rb8SQLAMUZEo%2FWQ2INqwEDDuhKjABjqkASbyZdld7WGkVOBsWhriQ9L2gleCALxa%2FJamfkKXKlvDh%2FZZCufsr9DHNd%2BYNjz0kPaO1qpSi0jKT9d5j%2FaMqTkwM4gCbwYZpK5e2o1nKq169GUztFLEe1uakmNZy2cCjSsQhrHCHduJcEmw2n2Bn%2FuIHyarPxRnvO07YtmC9Co0za0tXQUIo4teJTKMcnR7U4KZR7Y4scXa8qINCZt0kHXD9108&X-Amz-Signature=cc85eb28784568e4dadf545db5b2cdfe3eb2568b3b90c6a2735edd4223bfa143&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q766ITJX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCnKzXkhOELZR1lo1XwdtQb1IiBR%2BTkyIj4p8sYWbRC1wIhAPi%2FF0ZjSkaD69dSyLx0iodoBfNuJjYQ3u7nK71CS0bBKv8DCBIQABoMNjM3NDIzMTgzODA1IgxNwGirMiV%2BgLMAm2Qq3AMiG%2BN8cYRn7q5W7gEnOYmW8WN5DdK5B6ONr6GRwHee0h5qML3aiAYmqsT%2FXBP%2BN9mu%2BGtxDc3LDI8UKxqYqHNkKJGKPdNcMsW3T5iZsmX39ir7txZpUwnhnVnzsvTO6gDU%2FR%2FGLubwKnb8iJOtk2%2FMkVG505mBJQFHp8dNN5vwI1PkrGWIZ4Ag4tDT25NuKyFHbdyodQR%2BKDpusatJ5SkmRxx8VD%2BYwJyn9vYUnLbs564zEBD1fkdqgQdGXyvAg%2BgKHd3OPPLQNJycPGfNg2ROl1KcH8cbNYFUDMoezw9LhbFS1Q9ioVroqAInJWHhOShm%2BW5go0exa7EbF7ohMdiT1UJX4o%2FzzRfyRlCG0m8HWX6K2SIAXsXdx85xcDOLTRbo8qFpgBewyWsu30iWGr1Cm%2FL85ceWbAEd8F0H5kTiTV96FgHnp3puhqUzoOeT5c%2Bw05vMCt7sywQf2qshgdpiJudfgLx2hw0lyRJNXG50vkoZOsh9mqU3yK%2Fmza8joyrJPNHrzYktsSt%2FrYRlVN4mdHTZXfv9qE9ASPt9Hm1skkKkWHHWrHOgRDkDN583kezRcc5ycCB7HBwEtIyGezF50p%2Ffk4gAN4o0JCw6Rb8SQLAMUZEo%2FWQ2INqwEDDuhKjABjqkASbyZdld7WGkVOBsWhriQ9L2gleCALxa%2FJamfkKXKlvDh%2FZZCufsr9DHNd%2BYNjz0kPaO1qpSi0jKT9d5j%2FaMqTkwM4gCbwYZpK5e2o1nKq169GUztFLEe1uakmNZy2cCjSsQhrHCHduJcEmw2n2Bn%2FuIHyarPxRnvO07YtmC9Co0za0tXQUIo4teJTKMcnR7U4KZR7Y4scXa8qINCZt0kHXD9108&X-Amz-Signature=5d3291a36588a238d3b673797d4b2407f81bf42d75a7f70113bacb2e5c4fabdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q766ITJX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCnKzXkhOELZR1lo1XwdtQb1IiBR%2BTkyIj4p8sYWbRC1wIhAPi%2FF0ZjSkaD69dSyLx0iodoBfNuJjYQ3u7nK71CS0bBKv8DCBIQABoMNjM3NDIzMTgzODA1IgxNwGirMiV%2BgLMAm2Qq3AMiG%2BN8cYRn7q5W7gEnOYmW8WN5DdK5B6ONr6GRwHee0h5qML3aiAYmqsT%2FXBP%2BN9mu%2BGtxDc3LDI8UKxqYqHNkKJGKPdNcMsW3T5iZsmX39ir7txZpUwnhnVnzsvTO6gDU%2FR%2FGLubwKnb8iJOtk2%2FMkVG505mBJQFHp8dNN5vwI1PkrGWIZ4Ag4tDT25NuKyFHbdyodQR%2BKDpusatJ5SkmRxx8VD%2BYwJyn9vYUnLbs564zEBD1fkdqgQdGXyvAg%2BgKHd3OPPLQNJycPGfNg2ROl1KcH8cbNYFUDMoezw9LhbFS1Q9ioVroqAInJWHhOShm%2BW5go0exa7EbF7ohMdiT1UJX4o%2FzzRfyRlCG0m8HWX6K2SIAXsXdx85xcDOLTRbo8qFpgBewyWsu30iWGr1Cm%2FL85ceWbAEd8F0H5kTiTV96FgHnp3puhqUzoOeT5c%2Bw05vMCt7sywQf2qshgdpiJudfgLx2hw0lyRJNXG50vkoZOsh9mqU3yK%2Fmza8joyrJPNHrzYktsSt%2FrYRlVN4mdHTZXfv9qE9ASPt9Hm1skkKkWHHWrHOgRDkDN583kezRcc5ycCB7HBwEtIyGezF50p%2Ffk4gAN4o0JCw6Rb8SQLAMUZEo%2FWQ2INqwEDDuhKjABjqkASbyZdld7WGkVOBsWhriQ9L2gleCALxa%2FJamfkKXKlvDh%2FZZCufsr9DHNd%2BYNjz0kPaO1qpSi0jKT9d5j%2FaMqTkwM4gCbwYZpK5e2o1nKq169GUztFLEe1uakmNZy2cCjSsQhrHCHduJcEmw2n2Bn%2FuIHyarPxRnvO07YtmC9Co0za0tXQUIo4teJTKMcnR7U4KZR7Y4scXa8qINCZt0kHXD9108&X-Amz-Signature=10584b4c98b6fe87b8e1b22420808a5e37fc4faca1fb530617236186c6ebcd94&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
