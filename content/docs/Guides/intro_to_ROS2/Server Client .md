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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXKYLT7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDXsVJwKIaYLN%2FD594uyFSPy4yWt24WFWMCuP%2BeSxfLAIgUEWAumZXux1aZzL9aOI93r%2FLzcl7HvY8CxZJlH7WWf4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIpv3FN8bQoi5n3LDircAxFfzYhwRpvPTLoDUsKn%2B7BegUyxgxu6jghIzdbuFvGMt7oZM%2Blsx26Klg68OaaV2iqmRmVDx7AoX2MFKNS6L%2BNixoVVuC7Nyw9IxVCmKx2zRLnrbCSQy%2BAvzEIewFZDFnkaXPajkYVdJHCeSutfO%2BRVbNzjoU9zy7U7x56%2B%2BjlNKR0%2FkU7GS8dx91QFxRJl4jULuZK7dGDM0YsdqEk3PkrJUmi6il7UybieJweavfcIItdN5xU%2B%2FlapUvx87KKo07UJR4Y7g%2BbNwdvdSwfdHpQvgva%2FVaQoXIY2AR3tALMUYJOIa%2BlGBz6NDcgsecvlpFi1HCUqwDvpimXN%2FopDZvNNz3nzl9fB38GSVgiIL6w5qLu%2BNWYXv0FjgRJOtFCYsR7mmzR7WEK9GAkEN2Z48%2Bw9aN1diVk6GrbuubBAYi4G8iMEWOwfZQeFsi6sMjvWVjWvPg3Dpjd5hd3w166egUzRrD6KRCBJr31lA2tHT3jC4i7n2x97bFXR5p23ku8DOMgkvTOuviAhTVTJhMdAQpAd%2Ba42xpjb1NiS8NTWvOL3scTWfzD5fyGZzf8kBJiHQyCDefqsFvAwdh9eU%2B828Zc65oOiSpIPWGK8BTkW1pDjxzQb7gXBLoLduNhmMOemj78GOqUBc1ABLk%2F7axNy0VQegpIyDSRc6gsKMRFFNsx2%2F%2FU%2BQhHwhiwPaWa9QAEhPN3e8wL9MIJYSI6nyFdPgSAoF%2BvbZ705Cr18TfUtOZMD79uAa9D4m6XWywFjqqYyCpzUc1X0YkAxevWamCUMIZOnp3csabxCBO3O5XSxTnkUoVnWDsy7gJbOUbkzcfV8Fp94he%2FK6EOO5%2FKxJy6sFjzWSDNEFOIjYYo8&X-Amz-Signature=276dc5f334cb2561846adacc7b158fcc42640f2faf0c5928b5d1a7f7c44bd475&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXKYLT7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDXsVJwKIaYLN%2FD594uyFSPy4yWt24WFWMCuP%2BeSxfLAIgUEWAumZXux1aZzL9aOI93r%2FLzcl7HvY8CxZJlH7WWf4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIpv3FN8bQoi5n3LDircAxFfzYhwRpvPTLoDUsKn%2B7BegUyxgxu6jghIzdbuFvGMt7oZM%2Blsx26Klg68OaaV2iqmRmVDx7AoX2MFKNS6L%2BNixoVVuC7Nyw9IxVCmKx2zRLnrbCSQy%2BAvzEIewFZDFnkaXPajkYVdJHCeSutfO%2BRVbNzjoU9zy7U7x56%2B%2BjlNKR0%2FkU7GS8dx91QFxRJl4jULuZK7dGDM0YsdqEk3PkrJUmi6il7UybieJweavfcIItdN5xU%2B%2FlapUvx87KKo07UJR4Y7g%2BbNwdvdSwfdHpQvgva%2FVaQoXIY2AR3tALMUYJOIa%2BlGBz6NDcgsecvlpFi1HCUqwDvpimXN%2FopDZvNNz3nzl9fB38GSVgiIL6w5qLu%2BNWYXv0FjgRJOtFCYsR7mmzR7WEK9GAkEN2Z48%2Bw9aN1diVk6GrbuubBAYi4G8iMEWOwfZQeFsi6sMjvWVjWvPg3Dpjd5hd3w166egUzRrD6KRCBJr31lA2tHT3jC4i7n2x97bFXR5p23ku8DOMgkvTOuviAhTVTJhMdAQpAd%2Ba42xpjb1NiS8NTWvOL3scTWfzD5fyGZzf8kBJiHQyCDefqsFvAwdh9eU%2B828Zc65oOiSpIPWGK8BTkW1pDjxzQb7gXBLoLduNhmMOemj78GOqUBc1ABLk%2F7axNy0VQegpIyDSRc6gsKMRFFNsx2%2F%2FU%2BQhHwhiwPaWa9QAEhPN3e8wL9MIJYSI6nyFdPgSAoF%2BvbZ705Cr18TfUtOZMD79uAa9D4m6XWywFjqqYyCpzUc1X0YkAxevWamCUMIZOnp3csabxCBO3O5XSxTnkUoVnWDsy7gJbOUbkzcfV8Fp94he%2FK6EOO5%2FKxJy6sFjzWSDNEFOIjYYo8&X-Amz-Signature=179a4e08bba0ca126f2c8f0d29ef72b9f7f6b69ffeb047e41a6fe4bdb39ff51b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXKYLT7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDXsVJwKIaYLN%2FD594uyFSPy4yWt24WFWMCuP%2BeSxfLAIgUEWAumZXux1aZzL9aOI93r%2FLzcl7HvY8CxZJlH7WWf4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIpv3FN8bQoi5n3LDircAxFfzYhwRpvPTLoDUsKn%2B7BegUyxgxu6jghIzdbuFvGMt7oZM%2Blsx26Klg68OaaV2iqmRmVDx7AoX2MFKNS6L%2BNixoVVuC7Nyw9IxVCmKx2zRLnrbCSQy%2BAvzEIewFZDFnkaXPajkYVdJHCeSutfO%2BRVbNzjoU9zy7U7x56%2B%2BjlNKR0%2FkU7GS8dx91QFxRJl4jULuZK7dGDM0YsdqEk3PkrJUmi6il7UybieJweavfcIItdN5xU%2B%2FlapUvx87KKo07UJR4Y7g%2BbNwdvdSwfdHpQvgva%2FVaQoXIY2AR3tALMUYJOIa%2BlGBz6NDcgsecvlpFi1HCUqwDvpimXN%2FopDZvNNz3nzl9fB38GSVgiIL6w5qLu%2BNWYXv0FjgRJOtFCYsR7mmzR7WEK9GAkEN2Z48%2Bw9aN1diVk6GrbuubBAYi4G8iMEWOwfZQeFsi6sMjvWVjWvPg3Dpjd5hd3w166egUzRrD6KRCBJr31lA2tHT3jC4i7n2x97bFXR5p23ku8DOMgkvTOuviAhTVTJhMdAQpAd%2Ba42xpjb1NiS8NTWvOL3scTWfzD5fyGZzf8kBJiHQyCDefqsFvAwdh9eU%2B828Zc65oOiSpIPWGK8BTkW1pDjxzQb7gXBLoLduNhmMOemj78GOqUBc1ABLk%2F7axNy0VQegpIyDSRc6gsKMRFFNsx2%2F%2FU%2BQhHwhiwPaWa9QAEhPN3e8wL9MIJYSI6nyFdPgSAoF%2BvbZ705Cr18TfUtOZMD79uAa9D4m6XWywFjqqYyCpzUc1X0YkAxevWamCUMIZOnp3csabxCBO3O5XSxTnkUoVnWDsy7gJbOUbkzcfV8Fp94he%2FK6EOO5%2FKxJy6sFjzWSDNEFOIjYYo8&X-Amz-Signature=6602591dfaae038c92b4506f538f466115e86018e5c32fde1d7b732f9e882fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXKYLT7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDXsVJwKIaYLN%2FD594uyFSPy4yWt24WFWMCuP%2BeSxfLAIgUEWAumZXux1aZzL9aOI93r%2FLzcl7HvY8CxZJlH7WWf4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIpv3FN8bQoi5n3LDircAxFfzYhwRpvPTLoDUsKn%2B7BegUyxgxu6jghIzdbuFvGMt7oZM%2Blsx26Klg68OaaV2iqmRmVDx7AoX2MFKNS6L%2BNixoVVuC7Nyw9IxVCmKx2zRLnrbCSQy%2BAvzEIewFZDFnkaXPajkYVdJHCeSutfO%2BRVbNzjoU9zy7U7x56%2B%2BjlNKR0%2FkU7GS8dx91QFxRJl4jULuZK7dGDM0YsdqEk3PkrJUmi6il7UybieJweavfcIItdN5xU%2B%2FlapUvx87KKo07UJR4Y7g%2BbNwdvdSwfdHpQvgva%2FVaQoXIY2AR3tALMUYJOIa%2BlGBz6NDcgsecvlpFi1HCUqwDvpimXN%2FopDZvNNz3nzl9fB38GSVgiIL6w5qLu%2BNWYXv0FjgRJOtFCYsR7mmzR7WEK9GAkEN2Z48%2Bw9aN1diVk6GrbuubBAYi4G8iMEWOwfZQeFsi6sMjvWVjWvPg3Dpjd5hd3w166egUzRrD6KRCBJr31lA2tHT3jC4i7n2x97bFXR5p23ku8DOMgkvTOuviAhTVTJhMdAQpAd%2Ba42xpjb1NiS8NTWvOL3scTWfzD5fyGZzf8kBJiHQyCDefqsFvAwdh9eU%2B828Zc65oOiSpIPWGK8BTkW1pDjxzQb7gXBLoLduNhmMOemj78GOqUBc1ABLk%2F7axNy0VQegpIyDSRc6gsKMRFFNsx2%2F%2FU%2BQhHwhiwPaWa9QAEhPN3e8wL9MIJYSI6nyFdPgSAoF%2BvbZ705Cr18TfUtOZMD79uAa9D4m6XWywFjqqYyCpzUc1X0YkAxevWamCUMIZOnp3csabxCBO3O5XSxTnkUoVnWDsy7gJbOUbkzcfV8Fp94he%2FK6EOO5%2FKxJy6sFjzWSDNEFOIjYYo8&X-Amz-Signature=b6e31c558e8e413f9296ad88bb56e50de81aaec40625022881f0b99cbf16c463&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXKYLT7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDXsVJwKIaYLN%2FD594uyFSPy4yWt24WFWMCuP%2BeSxfLAIgUEWAumZXux1aZzL9aOI93r%2FLzcl7HvY8CxZJlH7WWf4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIpv3FN8bQoi5n3LDircAxFfzYhwRpvPTLoDUsKn%2B7BegUyxgxu6jghIzdbuFvGMt7oZM%2Blsx26Klg68OaaV2iqmRmVDx7AoX2MFKNS6L%2BNixoVVuC7Nyw9IxVCmKx2zRLnrbCSQy%2BAvzEIewFZDFnkaXPajkYVdJHCeSutfO%2BRVbNzjoU9zy7U7x56%2B%2BjlNKR0%2FkU7GS8dx91QFxRJl4jULuZK7dGDM0YsdqEk3PkrJUmi6il7UybieJweavfcIItdN5xU%2B%2FlapUvx87KKo07UJR4Y7g%2BbNwdvdSwfdHpQvgva%2FVaQoXIY2AR3tALMUYJOIa%2BlGBz6NDcgsecvlpFi1HCUqwDvpimXN%2FopDZvNNz3nzl9fB38GSVgiIL6w5qLu%2BNWYXv0FjgRJOtFCYsR7mmzR7WEK9GAkEN2Z48%2Bw9aN1diVk6GrbuubBAYi4G8iMEWOwfZQeFsi6sMjvWVjWvPg3Dpjd5hd3w166egUzRrD6KRCBJr31lA2tHT3jC4i7n2x97bFXR5p23ku8DOMgkvTOuviAhTVTJhMdAQpAd%2Ba42xpjb1NiS8NTWvOL3scTWfzD5fyGZzf8kBJiHQyCDefqsFvAwdh9eU%2B828Zc65oOiSpIPWGK8BTkW1pDjxzQb7gXBLoLduNhmMOemj78GOqUBc1ABLk%2F7axNy0VQegpIyDSRc6gsKMRFFNsx2%2F%2FU%2BQhHwhiwPaWa9QAEhPN3e8wL9MIJYSI6nyFdPgSAoF%2BvbZ705Cr18TfUtOZMD79uAa9D4m6XWywFjqqYyCpzUc1X0YkAxevWamCUMIZOnp3csabxCBO3O5XSxTnkUoVnWDsy7gJbOUbkzcfV8Fp94he%2FK6EOO5%2FKxJy6sFjzWSDNEFOIjYYo8&X-Amz-Signature=e9ac990cd3535e68d7c9f4d12117b2134d3a31ac9edeac9cabff0fe8ab020bae&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
