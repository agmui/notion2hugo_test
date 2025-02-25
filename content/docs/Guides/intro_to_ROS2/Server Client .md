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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIXAGLE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDrj4hCUAqKYY%2FT9za7rAOTgK9u0ytpVRnGAOAIgz%2FdjQIhAKTCf8JN62KAs3L%2Bajj%2FghQD8P6nBHJesrcKcoxRDj%2BKKv8DCEMQABoMNjM3NDIzMTgzODA1Igx%2F8Awv3YbuPTHp2QUq3AO3SxQUPIqoEK8c9KD95ldbiJw%2F0mNyz6l4GLK2%2Bt28Baa9%2B%2BH2NESROKFCeyOF5C8yDma0cLxw%2BbH9SaEE%2Fw5wKP014IyTbK3Zeg8tIZ7YIbEhRxmm1mgTiZrQlQfCRMbHGdQU4EQjVdzhnyh%2FP%2F8AskcPlgMfRgRP%2BDFaTc85tv7u8RdLIYXNL3P9%2BKO3HaOYKrGUGUCeIC6chQR8jzj9gsxFTronjz2U%2Fl3dK3u8PtTv1IGWTlbwWsDr7l8%2BZfG5DSF3QynjQlIKy8d3fEJbCUWrxP6HOU4bkCbB7l5iBGF09FgP9axb5grgqCakTPiwPgDBOu1uU9CZI8VDqg7GqDZ5pD1Kqa5KnqdcZgGQgiJwmKuFgbToXVCJHGutKBp1bTFdDKFYsXx8KpNEQeiMZvat0unw3uUXWLI79EUDk5Cbg9yRuryovgerX8DHe%2FotnuWZBNppLDqYvZuag8e3gfdRZ%2B3%2FL%2FQe7KOD9VAnKzTocaxlj92PEnUpZbW1tc3YxWvEZQHjN7gxjLwayfBLeOZPptbAEhr1xE2jYHFoGZDeHzSVJ%2Bqps%2BOYRDlrkHdO8ypZ9uG7XrWxiAvvuKU3ZNV4zntRhtF8IU9JH2%2BocLY8iKZw2KqANyn7uDCRova9BjqkAXpYFX0idQxYzTAMD6EmH9unLCvXHm49wZpRYwjf4fFr8LBdaQ6LudcwQnSFzd1WPGJHGS9fYB13P1ueyYNUKFnWGNKZxv8Y5LdH%2FtZDbVCmUATPjTSd1gowdtkGAirtZK40lUpcLjuRgi%2BnJNIVFZsxPjHlpACGjG1mxMf8Y8B%2FSmZf0E4WOSKphU%2BlwGalNZXHkT143OPVTxBbt2Hu8jmJLWnE&X-Amz-Signature=794e8b7c186265e0bd594c5c7fa9d46feb2abb1ee6ccd419968bf97e309cbcef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIXAGLE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDrj4hCUAqKYY%2FT9za7rAOTgK9u0ytpVRnGAOAIgz%2FdjQIhAKTCf8JN62KAs3L%2Bajj%2FghQD8P6nBHJesrcKcoxRDj%2BKKv8DCEMQABoMNjM3NDIzMTgzODA1Igx%2F8Awv3YbuPTHp2QUq3AO3SxQUPIqoEK8c9KD95ldbiJw%2F0mNyz6l4GLK2%2Bt28Baa9%2B%2BH2NESROKFCeyOF5C8yDma0cLxw%2BbH9SaEE%2Fw5wKP014IyTbK3Zeg8tIZ7YIbEhRxmm1mgTiZrQlQfCRMbHGdQU4EQjVdzhnyh%2FP%2F8AskcPlgMfRgRP%2BDFaTc85tv7u8RdLIYXNL3P9%2BKO3HaOYKrGUGUCeIC6chQR8jzj9gsxFTronjz2U%2Fl3dK3u8PtTv1IGWTlbwWsDr7l8%2BZfG5DSF3QynjQlIKy8d3fEJbCUWrxP6HOU4bkCbB7l5iBGF09FgP9axb5grgqCakTPiwPgDBOu1uU9CZI8VDqg7GqDZ5pD1Kqa5KnqdcZgGQgiJwmKuFgbToXVCJHGutKBp1bTFdDKFYsXx8KpNEQeiMZvat0unw3uUXWLI79EUDk5Cbg9yRuryovgerX8DHe%2FotnuWZBNppLDqYvZuag8e3gfdRZ%2B3%2FL%2FQe7KOD9VAnKzTocaxlj92PEnUpZbW1tc3YxWvEZQHjN7gxjLwayfBLeOZPptbAEhr1xE2jYHFoGZDeHzSVJ%2Bqps%2BOYRDlrkHdO8ypZ9uG7XrWxiAvvuKU3ZNV4zntRhtF8IU9JH2%2BocLY8iKZw2KqANyn7uDCRova9BjqkAXpYFX0idQxYzTAMD6EmH9unLCvXHm49wZpRYwjf4fFr8LBdaQ6LudcwQnSFzd1WPGJHGS9fYB13P1ueyYNUKFnWGNKZxv8Y5LdH%2FtZDbVCmUATPjTSd1gowdtkGAirtZK40lUpcLjuRgi%2BnJNIVFZsxPjHlpACGjG1mxMf8Y8B%2FSmZf0E4WOSKphU%2BlwGalNZXHkT143OPVTxBbt2Hu8jmJLWnE&X-Amz-Signature=8b4ed166bd3e9d4c96f2c6292b6fa7620b08f403597226506941c8c8760199e9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIXAGLE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDrj4hCUAqKYY%2FT9za7rAOTgK9u0ytpVRnGAOAIgz%2FdjQIhAKTCf8JN62KAs3L%2Bajj%2FghQD8P6nBHJesrcKcoxRDj%2BKKv8DCEMQABoMNjM3NDIzMTgzODA1Igx%2F8Awv3YbuPTHp2QUq3AO3SxQUPIqoEK8c9KD95ldbiJw%2F0mNyz6l4GLK2%2Bt28Baa9%2B%2BH2NESROKFCeyOF5C8yDma0cLxw%2BbH9SaEE%2Fw5wKP014IyTbK3Zeg8tIZ7YIbEhRxmm1mgTiZrQlQfCRMbHGdQU4EQjVdzhnyh%2FP%2F8AskcPlgMfRgRP%2BDFaTc85tv7u8RdLIYXNL3P9%2BKO3HaOYKrGUGUCeIC6chQR8jzj9gsxFTronjz2U%2Fl3dK3u8PtTv1IGWTlbwWsDr7l8%2BZfG5DSF3QynjQlIKy8d3fEJbCUWrxP6HOU4bkCbB7l5iBGF09FgP9axb5grgqCakTPiwPgDBOu1uU9CZI8VDqg7GqDZ5pD1Kqa5KnqdcZgGQgiJwmKuFgbToXVCJHGutKBp1bTFdDKFYsXx8KpNEQeiMZvat0unw3uUXWLI79EUDk5Cbg9yRuryovgerX8DHe%2FotnuWZBNppLDqYvZuag8e3gfdRZ%2B3%2FL%2FQe7KOD9VAnKzTocaxlj92PEnUpZbW1tc3YxWvEZQHjN7gxjLwayfBLeOZPptbAEhr1xE2jYHFoGZDeHzSVJ%2Bqps%2BOYRDlrkHdO8ypZ9uG7XrWxiAvvuKU3ZNV4zntRhtF8IU9JH2%2BocLY8iKZw2KqANyn7uDCRova9BjqkAXpYFX0idQxYzTAMD6EmH9unLCvXHm49wZpRYwjf4fFr8LBdaQ6LudcwQnSFzd1WPGJHGS9fYB13P1ueyYNUKFnWGNKZxv8Y5LdH%2FtZDbVCmUATPjTSd1gowdtkGAirtZK40lUpcLjuRgi%2BnJNIVFZsxPjHlpACGjG1mxMf8Y8B%2FSmZf0E4WOSKphU%2BlwGalNZXHkT143OPVTxBbt2Hu8jmJLWnE&X-Amz-Signature=8833cfbe1ec55c785bc2011d3cb022da3f8868600cda99147f308ff70e91c172&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIXAGLE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDrj4hCUAqKYY%2FT9za7rAOTgK9u0ytpVRnGAOAIgz%2FdjQIhAKTCf8JN62KAs3L%2Bajj%2FghQD8P6nBHJesrcKcoxRDj%2BKKv8DCEMQABoMNjM3NDIzMTgzODA1Igx%2F8Awv3YbuPTHp2QUq3AO3SxQUPIqoEK8c9KD95ldbiJw%2F0mNyz6l4GLK2%2Bt28Baa9%2B%2BH2NESROKFCeyOF5C8yDma0cLxw%2BbH9SaEE%2Fw5wKP014IyTbK3Zeg8tIZ7YIbEhRxmm1mgTiZrQlQfCRMbHGdQU4EQjVdzhnyh%2FP%2F8AskcPlgMfRgRP%2BDFaTc85tv7u8RdLIYXNL3P9%2BKO3HaOYKrGUGUCeIC6chQR8jzj9gsxFTronjz2U%2Fl3dK3u8PtTv1IGWTlbwWsDr7l8%2BZfG5DSF3QynjQlIKy8d3fEJbCUWrxP6HOU4bkCbB7l5iBGF09FgP9axb5grgqCakTPiwPgDBOu1uU9CZI8VDqg7GqDZ5pD1Kqa5KnqdcZgGQgiJwmKuFgbToXVCJHGutKBp1bTFdDKFYsXx8KpNEQeiMZvat0unw3uUXWLI79EUDk5Cbg9yRuryovgerX8DHe%2FotnuWZBNppLDqYvZuag8e3gfdRZ%2B3%2FL%2FQe7KOD9VAnKzTocaxlj92PEnUpZbW1tc3YxWvEZQHjN7gxjLwayfBLeOZPptbAEhr1xE2jYHFoGZDeHzSVJ%2Bqps%2BOYRDlrkHdO8ypZ9uG7XrWxiAvvuKU3ZNV4zntRhtF8IU9JH2%2BocLY8iKZw2KqANyn7uDCRova9BjqkAXpYFX0idQxYzTAMD6EmH9unLCvXHm49wZpRYwjf4fFr8LBdaQ6LudcwQnSFzd1WPGJHGS9fYB13P1ueyYNUKFnWGNKZxv8Y5LdH%2FtZDbVCmUATPjTSd1gowdtkGAirtZK40lUpcLjuRgi%2BnJNIVFZsxPjHlpACGjG1mxMf8Y8B%2FSmZf0E4WOSKphU%2BlwGalNZXHkT143OPVTxBbt2Hu8jmJLWnE&X-Amz-Signature=f012af5f9094f72e0760f111de45cafe3dcc6e0865ffb9a348b9bd909fd41bea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIXAGLE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDrj4hCUAqKYY%2FT9za7rAOTgK9u0ytpVRnGAOAIgz%2FdjQIhAKTCf8JN62KAs3L%2Bajj%2FghQD8P6nBHJesrcKcoxRDj%2BKKv8DCEMQABoMNjM3NDIzMTgzODA1Igx%2F8Awv3YbuPTHp2QUq3AO3SxQUPIqoEK8c9KD95ldbiJw%2F0mNyz6l4GLK2%2Bt28Baa9%2B%2BH2NESROKFCeyOF5C8yDma0cLxw%2BbH9SaEE%2Fw5wKP014IyTbK3Zeg8tIZ7YIbEhRxmm1mgTiZrQlQfCRMbHGdQU4EQjVdzhnyh%2FP%2F8AskcPlgMfRgRP%2BDFaTc85tv7u8RdLIYXNL3P9%2BKO3HaOYKrGUGUCeIC6chQR8jzj9gsxFTronjz2U%2Fl3dK3u8PtTv1IGWTlbwWsDr7l8%2BZfG5DSF3QynjQlIKy8d3fEJbCUWrxP6HOU4bkCbB7l5iBGF09FgP9axb5grgqCakTPiwPgDBOu1uU9CZI8VDqg7GqDZ5pD1Kqa5KnqdcZgGQgiJwmKuFgbToXVCJHGutKBp1bTFdDKFYsXx8KpNEQeiMZvat0unw3uUXWLI79EUDk5Cbg9yRuryovgerX8DHe%2FotnuWZBNppLDqYvZuag8e3gfdRZ%2B3%2FL%2FQe7KOD9VAnKzTocaxlj92PEnUpZbW1tc3YxWvEZQHjN7gxjLwayfBLeOZPptbAEhr1xE2jYHFoGZDeHzSVJ%2Bqps%2BOYRDlrkHdO8ypZ9uG7XrWxiAvvuKU3ZNV4zntRhtF8IU9JH2%2BocLY8iKZw2KqANyn7uDCRova9BjqkAXpYFX0idQxYzTAMD6EmH9unLCvXHm49wZpRYwjf4fFr8LBdaQ6LudcwQnSFzd1WPGJHGS9fYB13P1ueyYNUKFnWGNKZxv8Y5LdH%2FtZDbVCmUATPjTSd1gowdtkGAirtZK40lUpcLjuRgi%2BnJNIVFZsxPjHlpACGjG1mxMf8Y8B%2FSmZf0E4WOSKphU%2BlwGalNZXHkT143OPVTxBbt2Hu8jmJLWnE&X-Amz-Signature=5fb205a3b04cf6f3bf92b63ad62ee061edf996086355e30ce6d90e11022bba16&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
