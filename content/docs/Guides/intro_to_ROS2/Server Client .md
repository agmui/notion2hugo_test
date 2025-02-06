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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLIJ4IE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDexvesGdw65yGEJIwoKsnDO2XMI0J3DLfhR1YgO5CKJQIhAMAdqQTeCqXZkRlbdTQVlSrkihk8W9t3J6MMPnXRwFE6Kv8DCFUQABoMNjM3NDIzMTgzODA1Igxk%2FuWUxcpvZ2uHmCMq3AMcvIbzLC9au4tohZltdSgUQOo2KSZRS3P4eHbHDm7Fo6DP9RYqk1odyMb4Aruz%2B%2BFaO35VJWEh8ZrglZ8Qu%2Fa7C5pTZ0BCKqyzvhcYIGuPbQ1shB%2F9%2BWX6Le8ZKqApn5sijWI4NlB0iqL31%2FVjkOc9hZ8mPONV68SkJGySAnMuBjNDnrWBzoSkVD2xmVmwWr5Omi7O4X0hAAW7i4JkWcGWTeIem%2FaP5cUZcEs0wwV9xz51eyW%2FxAe0XpbircxImxvYJRr6KUpl5hTss3IXuMYqkzDef9cpjQb17bLoldHRv7i79W0LB1XJMjpQZIVVp%2F9IPKpCvJIE%2BkpeaCkVuulWjjxqcJJurk65FSZl8UzbRFm314aoX0obmHPbBXv9z9eqyMumUG%2B4pz2ZMx0f%2FuXoyhIp4%2Fwe9dyoSkiJIke3drjgw5ycd025o3Vtz%2B8i%2BFUXY3R1ubfwkc6%2Bh8sgoXgFjPT%2BHCBj6OzeYjKd%2FF5x9dn94sCjN1GOhS%2FOuvkA690o3LF3oWs19N3adp5bLuqcygo1DTASbGh8vm36q%2BJ5ogHP7xyd0nmOKlsykC1LxSjON6I9mI5fJKCP8n2rpYBqupEvj5Bt67PPFphVKF5lbVliVIQFyQo7XdtZMTDo4JC9BjqkARe3psGYKT8hhYgJ1uDR%2BOT5m3aM4sXamWIa5%2Fv7p7HI%2BTh0MJWUfrloHmfphRdxt6wSdsepkpt8zSAiNXpN9V0rD7iEz5WAHrBjI%2F7rui7Hfe8aF3Q2lYK9xtSbi%2FsA9X1y2aBV2VM2uyWM%2Fy6ghqWHQ6sxrx6Lg1s6z5tyu8nZniH8TJ467W3ZDt4kmnmpeK1y1ujIaEVTxJKdoSEWHMBsbs%2BS&X-Amz-Signature=b28fd8a835aa3a22f758f62d004c82db7f419b6b96456b4a7fb59ac4db0db45e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLIJ4IE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDexvesGdw65yGEJIwoKsnDO2XMI0J3DLfhR1YgO5CKJQIhAMAdqQTeCqXZkRlbdTQVlSrkihk8W9t3J6MMPnXRwFE6Kv8DCFUQABoMNjM3NDIzMTgzODA1Igxk%2FuWUxcpvZ2uHmCMq3AMcvIbzLC9au4tohZltdSgUQOo2KSZRS3P4eHbHDm7Fo6DP9RYqk1odyMb4Aruz%2B%2BFaO35VJWEh8ZrglZ8Qu%2Fa7C5pTZ0BCKqyzvhcYIGuPbQ1shB%2F9%2BWX6Le8ZKqApn5sijWI4NlB0iqL31%2FVjkOc9hZ8mPONV68SkJGySAnMuBjNDnrWBzoSkVD2xmVmwWr5Omi7O4X0hAAW7i4JkWcGWTeIem%2FaP5cUZcEs0wwV9xz51eyW%2FxAe0XpbircxImxvYJRr6KUpl5hTss3IXuMYqkzDef9cpjQb17bLoldHRv7i79W0LB1XJMjpQZIVVp%2F9IPKpCvJIE%2BkpeaCkVuulWjjxqcJJurk65FSZl8UzbRFm314aoX0obmHPbBXv9z9eqyMumUG%2B4pz2ZMx0f%2FuXoyhIp4%2Fwe9dyoSkiJIke3drjgw5ycd025o3Vtz%2B8i%2BFUXY3R1ubfwkc6%2Bh8sgoXgFjPT%2BHCBj6OzeYjKd%2FF5x9dn94sCjN1GOhS%2FOuvkA690o3LF3oWs19N3adp5bLuqcygo1DTASbGh8vm36q%2BJ5ogHP7xyd0nmOKlsykC1LxSjON6I9mI5fJKCP8n2rpYBqupEvj5Bt67PPFphVKF5lbVliVIQFyQo7XdtZMTDo4JC9BjqkARe3psGYKT8hhYgJ1uDR%2BOT5m3aM4sXamWIa5%2Fv7p7HI%2BTh0MJWUfrloHmfphRdxt6wSdsepkpt8zSAiNXpN9V0rD7iEz5WAHrBjI%2F7rui7Hfe8aF3Q2lYK9xtSbi%2FsA9X1y2aBV2VM2uyWM%2Fy6ghqWHQ6sxrx6Lg1s6z5tyu8nZniH8TJ467W3ZDt4kmnmpeK1y1ujIaEVTxJKdoSEWHMBsbs%2BS&X-Amz-Signature=731fb145ba579fe53f8dee4141c35905e26f391826f1b54a826e1619917b9741&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLIJ4IE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDexvesGdw65yGEJIwoKsnDO2XMI0J3DLfhR1YgO5CKJQIhAMAdqQTeCqXZkRlbdTQVlSrkihk8W9t3J6MMPnXRwFE6Kv8DCFUQABoMNjM3NDIzMTgzODA1Igxk%2FuWUxcpvZ2uHmCMq3AMcvIbzLC9au4tohZltdSgUQOo2KSZRS3P4eHbHDm7Fo6DP9RYqk1odyMb4Aruz%2B%2BFaO35VJWEh8ZrglZ8Qu%2Fa7C5pTZ0BCKqyzvhcYIGuPbQ1shB%2F9%2BWX6Le8ZKqApn5sijWI4NlB0iqL31%2FVjkOc9hZ8mPONV68SkJGySAnMuBjNDnrWBzoSkVD2xmVmwWr5Omi7O4X0hAAW7i4JkWcGWTeIem%2FaP5cUZcEs0wwV9xz51eyW%2FxAe0XpbircxImxvYJRr6KUpl5hTss3IXuMYqkzDef9cpjQb17bLoldHRv7i79W0LB1XJMjpQZIVVp%2F9IPKpCvJIE%2BkpeaCkVuulWjjxqcJJurk65FSZl8UzbRFm314aoX0obmHPbBXv9z9eqyMumUG%2B4pz2ZMx0f%2FuXoyhIp4%2Fwe9dyoSkiJIke3drjgw5ycd025o3Vtz%2B8i%2BFUXY3R1ubfwkc6%2Bh8sgoXgFjPT%2BHCBj6OzeYjKd%2FF5x9dn94sCjN1GOhS%2FOuvkA690o3LF3oWs19N3adp5bLuqcygo1DTASbGh8vm36q%2BJ5ogHP7xyd0nmOKlsykC1LxSjON6I9mI5fJKCP8n2rpYBqupEvj5Bt67PPFphVKF5lbVliVIQFyQo7XdtZMTDo4JC9BjqkARe3psGYKT8hhYgJ1uDR%2BOT5m3aM4sXamWIa5%2Fv7p7HI%2BTh0MJWUfrloHmfphRdxt6wSdsepkpt8zSAiNXpN9V0rD7iEz5WAHrBjI%2F7rui7Hfe8aF3Q2lYK9xtSbi%2FsA9X1y2aBV2VM2uyWM%2Fy6ghqWHQ6sxrx6Lg1s6z5tyu8nZniH8TJ467W3ZDt4kmnmpeK1y1ujIaEVTxJKdoSEWHMBsbs%2BS&X-Amz-Signature=dfb18523d243c677a37925ad5dc1f66880e64e4e458942521d1eeafe33c8ca9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLIJ4IE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDexvesGdw65yGEJIwoKsnDO2XMI0J3DLfhR1YgO5CKJQIhAMAdqQTeCqXZkRlbdTQVlSrkihk8W9t3J6MMPnXRwFE6Kv8DCFUQABoMNjM3NDIzMTgzODA1Igxk%2FuWUxcpvZ2uHmCMq3AMcvIbzLC9au4tohZltdSgUQOo2KSZRS3P4eHbHDm7Fo6DP9RYqk1odyMb4Aruz%2B%2BFaO35VJWEh8ZrglZ8Qu%2Fa7C5pTZ0BCKqyzvhcYIGuPbQ1shB%2F9%2BWX6Le8ZKqApn5sijWI4NlB0iqL31%2FVjkOc9hZ8mPONV68SkJGySAnMuBjNDnrWBzoSkVD2xmVmwWr5Omi7O4X0hAAW7i4JkWcGWTeIem%2FaP5cUZcEs0wwV9xz51eyW%2FxAe0XpbircxImxvYJRr6KUpl5hTss3IXuMYqkzDef9cpjQb17bLoldHRv7i79W0LB1XJMjpQZIVVp%2F9IPKpCvJIE%2BkpeaCkVuulWjjxqcJJurk65FSZl8UzbRFm314aoX0obmHPbBXv9z9eqyMumUG%2B4pz2ZMx0f%2FuXoyhIp4%2Fwe9dyoSkiJIke3drjgw5ycd025o3Vtz%2B8i%2BFUXY3R1ubfwkc6%2Bh8sgoXgFjPT%2BHCBj6OzeYjKd%2FF5x9dn94sCjN1GOhS%2FOuvkA690o3LF3oWs19N3adp5bLuqcygo1DTASbGh8vm36q%2BJ5ogHP7xyd0nmOKlsykC1LxSjON6I9mI5fJKCP8n2rpYBqupEvj5Bt67PPFphVKF5lbVliVIQFyQo7XdtZMTDo4JC9BjqkARe3psGYKT8hhYgJ1uDR%2BOT5m3aM4sXamWIa5%2Fv7p7HI%2BTh0MJWUfrloHmfphRdxt6wSdsepkpt8zSAiNXpN9V0rD7iEz5WAHrBjI%2F7rui7Hfe8aF3Q2lYK9xtSbi%2FsA9X1y2aBV2VM2uyWM%2Fy6ghqWHQ6sxrx6Lg1s6z5tyu8nZniH8TJ467W3ZDt4kmnmpeK1y1ujIaEVTxJKdoSEWHMBsbs%2BS&X-Amz-Signature=098b81b963d89189b129703f4d2c56dd14997e89703bdf2f523dc4e8a6e7ddfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLIJ4IE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDexvesGdw65yGEJIwoKsnDO2XMI0J3DLfhR1YgO5CKJQIhAMAdqQTeCqXZkRlbdTQVlSrkihk8W9t3J6MMPnXRwFE6Kv8DCFUQABoMNjM3NDIzMTgzODA1Igxk%2FuWUxcpvZ2uHmCMq3AMcvIbzLC9au4tohZltdSgUQOo2KSZRS3P4eHbHDm7Fo6DP9RYqk1odyMb4Aruz%2B%2BFaO35VJWEh8ZrglZ8Qu%2Fa7C5pTZ0BCKqyzvhcYIGuPbQ1shB%2F9%2BWX6Le8ZKqApn5sijWI4NlB0iqL31%2FVjkOc9hZ8mPONV68SkJGySAnMuBjNDnrWBzoSkVD2xmVmwWr5Omi7O4X0hAAW7i4JkWcGWTeIem%2FaP5cUZcEs0wwV9xz51eyW%2FxAe0XpbircxImxvYJRr6KUpl5hTss3IXuMYqkzDef9cpjQb17bLoldHRv7i79W0LB1XJMjpQZIVVp%2F9IPKpCvJIE%2BkpeaCkVuulWjjxqcJJurk65FSZl8UzbRFm314aoX0obmHPbBXv9z9eqyMumUG%2B4pz2ZMx0f%2FuXoyhIp4%2Fwe9dyoSkiJIke3drjgw5ycd025o3Vtz%2B8i%2BFUXY3R1ubfwkc6%2Bh8sgoXgFjPT%2BHCBj6OzeYjKd%2FF5x9dn94sCjN1GOhS%2FOuvkA690o3LF3oWs19N3adp5bLuqcygo1DTASbGh8vm36q%2BJ5ogHP7xyd0nmOKlsykC1LxSjON6I9mI5fJKCP8n2rpYBqupEvj5Bt67PPFphVKF5lbVliVIQFyQo7XdtZMTDo4JC9BjqkARe3psGYKT8hhYgJ1uDR%2BOT5m3aM4sXamWIa5%2Fv7p7HI%2BTh0MJWUfrloHmfphRdxt6wSdsepkpt8zSAiNXpN9V0rD7iEz5WAHrBjI%2F7rui7Hfe8aF3Q2lYK9xtSbi%2FsA9X1y2aBV2VM2uyWM%2Fy6ghqWHQ6sxrx6Lg1s6z5tyu8nZniH8TJ467W3ZDt4kmnmpeK1y1ujIaEVTxJKdoSEWHMBsbs%2BS&X-Amz-Signature=04be5d6c6cd274105c120f4fc6ede217adcc6360a2fbf0ab98e693ef6050824d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
