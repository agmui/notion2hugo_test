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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7BUKLP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCuPUWIgg0F92zLJO8a0ka%2BXZYB7sI%2BYsSF1fR6z3JinQIhAK%2F6WbmS95SMjRIt%2BxHpoWzv5XCk4fnPzxMGjcPXTR7VKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzeu3DJjWyGTpPK52Eq3ANG7yiQ6i4MM%2F7jWSVJMbvrpG9gFesZbW3jk%2BbScSSw6B6O9peF6YFmYqKmC21BS3LWsfpeX5YioTZakvvelmlKRo5RcXQz3WSjohJ4aRa2RXbKxnvTFeut1EASWDgRsKXMAWUL8O%2Brghfg3hM%2BylWVtuO5GFoIgHA9TE%2B3sr29zQ85rVI8s%2FZ0lqR3dc9X76rxssNdyYIGDdHz%2FIXEYjMXP6jcsy%2FGurn6zJYK2asM0YinS1WdMqS2yvblQ2DKiUww3wb5BenQg%2F%2BYxmWz7Sd91LD%2B6ORPD6BBbb2hO7yy4hW8K5%2F6SFrJA5xiK89tVI937wd42BFJnklF%2F4x1d7qfae8VNijiTmjIYBPliVjq12SKlyN4EnzjST05deDWymbovMyThNZLmIQE1Ockp4qyO0ihfaCeQFprgdjRg5Zq3ZI4CPATu4cAPZEXqrH2bTwZtCI7IKzGNrhNMGNHCftswlKyFecPvoH85LG6Jz1OxSwHQLBdumo56FBQdKYN6a%2BBdmryxeNzr8StNWhJAhHmJW6YpBC6VDEha%2FKMB5yUvArt7qJzfQ8rBI4QfKRwv%2BOcj8WCnjlM%2BEbqMOwwdXBbiCz2poz72U5wf2d7VuHlPb0SUoWMf%2BgJ0xXNrTCUkfXBBjqkAYDk2cyej3DKaoJzyWa3I40unLPpRKgGL77cOyI0fjBIltaLgjLxey2u0txp7nyhINFvFTEZiQAApK75SIFmyRtTA24BX4O8yx2Bjal2%2FfI1KXbYQefekxpe1TtrRvXcK40LxYmVw8DbeK%2FhXbrHu2yYaDh%2BwcmNSsV%2FkR6bPiBZmj5MmNoJgro2RWR7b9SjjtXkBm3Z%2FbRX%2BOWL2EB9i7H1uake&X-Amz-Signature=c56abc363355dc2141e617d2070cd296c5039609a32c52c82e160a133e637a67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7BUKLP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCuPUWIgg0F92zLJO8a0ka%2BXZYB7sI%2BYsSF1fR6z3JinQIhAK%2F6WbmS95SMjRIt%2BxHpoWzv5XCk4fnPzxMGjcPXTR7VKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzeu3DJjWyGTpPK52Eq3ANG7yiQ6i4MM%2F7jWSVJMbvrpG9gFesZbW3jk%2BbScSSw6B6O9peF6YFmYqKmC21BS3LWsfpeX5YioTZakvvelmlKRo5RcXQz3WSjohJ4aRa2RXbKxnvTFeut1EASWDgRsKXMAWUL8O%2Brghfg3hM%2BylWVtuO5GFoIgHA9TE%2B3sr29zQ85rVI8s%2FZ0lqR3dc9X76rxssNdyYIGDdHz%2FIXEYjMXP6jcsy%2FGurn6zJYK2asM0YinS1WdMqS2yvblQ2DKiUww3wb5BenQg%2F%2BYxmWz7Sd91LD%2B6ORPD6BBbb2hO7yy4hW8K5%2F6SFrJA5xiK89tVI937wd42BFJnklF%2F4x1d7qfae8VNijiTmjIYBPliVjq12SKlyN4EnzjST05deDWymbovMyThNZLmIQE1Ockp4qyO0ihfaCeQFprgdjRg5Zq3ZI4CPATu4cAPZEXqrH2bTwZtCI7IKzGNrhNMGNHCftswlKyFecPvoH85LG6Jz1OxSwHQLBdumo56FBQdKYN6a%2BBdmryxeNzr8StNWhJAhHmJW6YpBC6VDEha%2FKMB5yUvArt7qJzfQ8rBI4QfKRwv%2BOcj8WCnjlM%2BEbqMOwwdXBbiCz2poz72U5wf2d7VuHlPb0SUoWMf%2BgJ0xXNrTCUkfXBBjqkAYDk2cyej3DKaoJzyWa3I40unLPpRKgGL77cOyI0fjBIltaLgjLxey2u0txp7nyhINFvFTEZiQAApK75SIFmyRtTA24BX4O8yx2Bjal2%2FfI1KXbYQefekxpe1TtrRvXcK40LxYmVw8DbeK%2FhXbrHu2yYaDh%2BwcmNSsV%2FkR6bPiBZmj5MmNoJgro2RWR7b9SjjtXkBm3Z%2FbRX%2BOWL2EB9i7H1uake&X-Amz-Signature=8c7b62912016bfce5c213053c2f16f795c0eaa693448119232658746b406f2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7BUKLP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCuPUWIgg0F92zLJO8a0ka%2BXZYB7sI%2BYsSF1fR6z3JinQIhAK%2F6WbmS95SMjRIt%2BxHpoWzv5XCk4fnPzxMGjcPXTR7VKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzeu3DJjWyGTpPK52Eq3ANG7yiQ6i4MM%2F7jWSVJMbvrpG9gFesZbW3jk%2BbScSSw6B6O9peF6YFmYqKmC21BS3LWsfpeX5YioTZakvvelmlKRo5RcXQz3WSjohJ4aRa2RXbKxnvTFeut1EASWDgRsKXMAWUL8O%2Brghfg3hM%2BylWVtuO5GFoIgHA9TE%2B3sr29zQ85rVI8s%2FZ0lqR3dc9X76rxssNdyYIGDdHz%2FIXEYjMXP6jcsy%2FGurn6zJYK2asM0YinS1WdMqS2yvblQ2DKiUww3wb5BenQg%2F%2BYxmWz7Sd91LD%2B6ORPD6BBbb2hO7yy4hW8K5%2F6SFrJA5xiK89tVI937wd42BFJnklF%2F4x1d7qfae8VNijiTmjIYBPliVjq12SKlyN4EnzjST05deDWymbovMyThNZLmIQE1Ockp4qyO0ihfaCeQFprgdjRg5Zq3ZI4CPATu4cAPZEXqrH2bTwZtCI7IKzGNrhNMGNHCftswlKyFecPvoH85LG6Jz1OxSwHQLBdumo56FBQdKYN6a%2BBdmryxeNzr8StNWhJAhHmJW6YpBC6VDEha%2FKMB5yUvArt7qJzfQ8rBI4QfKRwv%2BOcj8WCnjlM%2BEbqMOwwdXBbiCz2poz72U5wf2d7VuHlPb0SUoWMf%2BgJ0xXNrTCUkfXBBjqkAYDk2cyej3DKaoJzyWa3I40unLPpRKgGL77cOyI0fjBIltaLgjLxey2u0txp7nyhINFvFTEZiQAApK75SIFmyRtTA24BX4O8yx2Bjal2%2FfI1KXbYQefekxpe1TtrRvXcK40LxYmVw8DbeK%2FhXbrHu2yYaDh%2BwcmNSsV%2FkR6bPiBZmj5MmNoJgro2RWR7b9SjjtXkBm3Z%2FbRX%2BOWL2EB9i7H1uake&X-Amz-Signature=32e180d669a2b49d81c57ed3012740481fef18518d435d5409afc14234f16525&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7BUKLP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCuPUWIgg0F92zLJO8a0ka%2BXZYB7sI%2BYsSF1fR6z3JinQIhAK%2F6WbmS95SMjRIt%2BxHpoWzv5XCk4fnPzxMGjcPXTR7VKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzeu3DJjWyGTpPK52Eq3ANG7yiQ6i4MM%2F7jWSVJMbvrpG9gFesZbW3jk%2BbScSSw6B6O9peF6YFmYqKmC21BS3LWsfpeX5YioTZakvvelmlKRo5RcXQz3WSjohJ4aRa2RXbKxnvTFeut1EASWDgRsKXMAWUL8O%2Brghfg3hM%2BylWVtuO5GFoIgHA9TE%2B3sr29zQ85rVI8s%2FZ0lqR3dc9X76rxssNdyYIGDdHz%2FIXEYjMXP6jcsy%2FGurn6zJYK2asM0YinS1WdMqS2yvblQ2DKiUww3wb5BenQg%2F%2BYxmWz7Sd91LD%2B6ORPD6BBbb2hO7yy4hW8K5%2F6SFrJA5xiK89tVI937wd42BFJnklF%2F4x1d7qfae8VNijiTmjIYBPliVjq12SKlyN4EnzjST05deDWymbovMyThNZLmIQE1Ockp4qyO0ihfaCeQFprgdjRg5Zq3ZI4CPATu4cAPZEXqrH2bTwZtCI7IKzGNrhNMGNHCftswlKyFecPvoH85LG6Jz1OxSwHQLBdumo56FBQdKYN6a%2BBdmryxeNzr8StNWhJAhHmJW6YpBC6VDEha%2FKMB5yUvArt7qJzfQ8rBI4QfKRwv%2BOcj8WCnjlM%2BEbqMOwwdXBbiCz2poz72U5wf2d7VuHlPb0SUoWMf%2BgJ0xXNrTCUkfXBBjqkAYDk2cyej3DKaoJzyWa3I40unLPpRKgGL77cOyI0fjBIltaLgjLxey2u0txp7nyhINFvFTEZiQAApK75SIFmyRtTA24BX4O8yx2Bjal2%2FfI1KXbYQefekxpe1TtrRvXcK40LxYmVw8DbeK%2FhXbrHu2yYaDh%2BwcmNSsV%2FkR6bPiBZmj5MmNoJgro2RWR7b9SjjtXkBm3Z%2FbRX%2BOWL2EB9i7H1uake&X-Amz-Signature=71be38c067062c853f036ab86c5a47334b6c6431470fc46d2d2ab76406cfc129&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7BUKLP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCuPUWIgg0F92zLJO8a0ka%2BXZYB7sI%2BYsSF1fR6z3JinQIhAK%2F6WbmS95SMjRIt%2BxHpoWzv5XCk4fnPzxMGjcPXTR7VKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzeu3DJjWyGTpPK52Eq3ANG7yiQ6i4MM%2F7jWSVJMbvrpG9gFesZbW3jk%2BbScSSw6B6O9peF6YFmYqKmC21BS3LWsfpeX5YioTZakvvelmlKRo5RcXQz3WSjohJ4aRa2RXbKxnvTFeut1EASWDgRsKXMAWUL8O%2Brghfg3hM%2BylWVtuO5GFoIgHA9TE%2B3sr29zQ85rVI8s%2FZ0lqR3dc9X76rxssNdyYIGDdHz%2FIXEYjMXP6jcsy%2FGurn6zJYK2asM0YinS1WdMqS2yvblQ2DKiUww3wb5BenQg%2F%2BYxmWz7Sd91LD%2B6ORPD6BBbb2hO7yy4hW8K5%2F6SFrJA5xiK89tVI937wd42BFJnklF%2F4x1d7qfae8VNijiTmjIYBPliVjq12SKlyN4EnzjST05deDWymbovMyThNZLmIQE1Ockp4qyO0ihfaCeQFprgdjRg5Zq3ZI4CPATu4cAPZEXqrH2bTwZtCI7IKzGNrhNMGNHCftswlKyFecPvoH85LG6Jz1OxSwHQLBdumo56FBQdKYN6a%2BBdmryxeNzr8StNWhJAhHmJW6YpBC6VDEha%2FKMB5yUvArt7qJzfQ8rBI4QfKRwv%2BOcj8WCnjlM%2BEbqMOwwdXBbiCz2poz72U5wf2d7VuHlPb0SUoWMf%2BgJ0xXNrTCUkfXBBjqkAYDk2cyej3DKaoJzyWa3I40unLPpRKgGL77cOyI0fjBIltaLgjLxey2u0txp7nyhINFvFTEZiQAApK75SIFmyRtTA24BX4O8yx2Bjal2%2FfI1KXbYQefekxpe1TtrRvXcK40LxYmVw8DbeK%2FhXbrHu2yYaDh%2BwcmNSsV%2FkR6bPiBZmj5MmNoJgro2RWR7b9SjjtXkBm3Z%2FbRX%2BOWL2EB9i7H1uake&X-Amz-Signature=86658e60453e83730ced8a9918a38a4c3f94d6e86fa779a49570c8cb1e494bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
