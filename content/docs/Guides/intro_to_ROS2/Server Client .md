---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEUAWFY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCWbe95Blhm0qX7cY9gh9gRFSP0uh%2Fln7kWPEazehmHyQIhAObGY%2BFoB3%2BplI8Y5NL3THuZH37wq8Ru2uAC7BKMFjvvKv8DCGcQABoMNjM3NDIzMTgzODA1Igxbffkutd2oQxx6VHEq3AMQRNKmq3215n743UDlNJHVBuW1SwTMcE6mMlatBikwELgdqey1USJTFi7JIVcGLNICyq7a3d478Jk2CUWj4pZ82eGmQrcD1zAXd3g7qAGkidp4zWdTobsXyjEgR7WFAHGdhzQGVq4RdlhqtCiFYBNk7tsnVSuJCCmb2WgOVCfX7V%2Bm0vH3UKKnwLz95ravMC3fCkOv7n3eZ3etjZ2C7Wei2ib%2F5PgCzdrbZJvXTdAHtg926WyKuv3fk4pleTvQ%2BCYL9ywzm%2Bh0PEljVX2WrnMGmR8U7gGSvctzsAs85E7wF%2Bhq7xkzmssljm6EiW3ggbZHVPsLu7wDnrc0Oryg%2Fme4opCoU4Lwf8B1OqJeh9eQ8kI9qBLUpB6if3LtLutLiWW02ieoj4jYUizYZhCw3kN7PhD1F0pMbasUft18kps0f7z4A6CDlKIUbF0%2Bb%2FSvMP0WSQDKwv%2BC0tF1AaMc6ZOfliWMFDpWTwlJnJ0%2ByoiLmNetDV1jeBb%2BQdkU6x58R89ALGjzhhcz0roj7B8Gz75Tg0e6iekYQgPTfapWJgwjzf6IL%2BSxVXbw9bsYwIA%2B8DdVcDMuDCUVUTDzkWLDEZCtM61Um%2BVu%2Fha193LTjPR6%2BCZw9%2Btsf2mSkWPgDTDnh8rEBjqkAdkiIig9307k7jmDEohOR25hB%2BPy%2BVtmNTfpsj3xPhbG7of7pFgct%2FW9uLAnFizJT%2BjyNK0wCb7MoYgHUDcH11fbsCL0cBDy%2B389c4WCck9Lvb9p5n6yTYNQ44xue5uk6vXWkegukbXjN5aNUy35XKeH218EcI%2BBTHdzZmpcdl425sE2KNkCexUvPg9u4s2Jr6%2FOy10xJQYMYiMqSyHO%2BjUjSnNR&X-Amz-Signature=1cb792b48c4fb1c56ea7c4010afb8fe3ef534d8c151355a851b3a983167c332e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEUAWFY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCWbe95Blhm0qX7cY9gh9gRFSP0uh%2Fln7kWPEazehmHyQIhAObGY%2BFoB3%2BplI8Y5NL3THuZH37wq8Ru2uAC7BKMFjvvKv8DCGcQABoMNjM3NDIzMTgzODA1Igxbffkutd2oQxx6VHEq3AMQRNKmq3215n743UDlNJHVBuW1SwTMcE6mMlatBikwELgdqey1USJTFi7JIVcGLNICyq7a3d478Jk2CUWj4pZ82eGmQrcD1zAXd3g7qAGkidp4zWdTobsXyjEgR7WFAHGdhzQGVq4RdlhqtCiFYBNk7tsnVSuJCCmb2WgOVCfX7V%2Bm0vH3UKKnwLz95ravMC3fCkOv7n3eZ3etjZ2C7Wei2ib%2F5PgCzdrbZJvXTdAHtg926WyKuv3fk4pleTvQ%2BCYL9ywzm%2Bh0PEljVX2WrnMGmR8U7gGSvctzsAs85E7wF%2Bhq7xkzmssljm6EiW3ggbZHVPsLu7wDnrc0Oryg%2Fme4opCoU4Lwf8B1OqJeh9eQ8kI9qBLUpB6if3LtLutLiWW02ieoj4jYUizYZhCw3kN7PhD1F0pMbasUft18kps0f7z4A6CDlKIUbF0%2Bb%2FSvMP0WSQDKwv%2BC0tF1AaMc6ZOfliWMFDpWTwlJnJ0%2ByoiLmNetDV1jeBb%2BQdkU6x58R89ALGjzhhcz0roj7B8Gz75Tg0e6iekYQgPTfapWJgwjzf6IL%2BSxVXbw9bsYwIA%2B8DdVcDMuDCUVUTDzkWLDEZCtM61Um%2BVu%2Fha193LTjPR6%2BCZw9%2Btsf2mSkWPgDTDnh8rEBjqkAdkiIig9307k7jmDEohOR25hB%2BPy%2BVtmNTfpsj3xPhbG7of7pFgct%2FW9uLAnFizJT%2BjyNK0wCb7MoYgHUDcH11fbsCL0cBDy%2B389c4WCck9Lvb9p5n6yTYNQ44xue5uk6vXWkegukbXjN5aNUy35XKeH218EcI%2BBTHdzZmpcdl425sE2KNkCexUvPg9u4s2Jr6%2FOy10xJQYMYiMqSyHO%2BjUjSnNR&X-Amz-Signature=e950fe50ed81df3ec30515f3b5f461fe9a0bf3bb47d58e34e33032b224696f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEUAWFY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCWbe95Blhm0qX7cY9gh9gRFSP0uh%2Fln7kWPEazehmHyQIhAObGY%2BFoB3%2BplI8Y5NL3THuZH37wq8Ru2uAC7BKMFjvvKv8DCGcQABoMNjM3NDIzMTgzODA1Igxbffkutd2oQxx6VHEq3AMQRNKmq3215n743UDlNJHVBuW1SwTMcE6mMlatBikwELgdqey1USJTFi7JIVcGLNICyq7a3d478Jk2CUWj4pZ82eGmQrcD1zAXd3g7qAGkidp4zWdTobsXyjEgR7WFAHGdhzQGVq4RdlhqtCiFYBNk7tsnVSuJCCmb2WgOVCfX7V%2Bm0vH3UKKnwLz95ravMC3fCkOv7n3eZ3etjZ2C7Wei2ib%2F5PgCzdrbZJvXTdAHtg926WyKuv3fk4pleTvQ%2BCYL9ywzm%2Bh0PEljVX2WrnMGmR8U7gGSvctzsAs85E7wF%2Bhq7xkzmssljm6EiW3ggbZHVPsLu7wDnrc0Oryg%2Fme4opCoU4Lwf8B1OqJeh9eQ8kI9qBLUpB6if3LtLutLiWW02ieoj4jYUizYZhCw3kN7PhD1F0pMbasUft18kps0f7z4A6CDlKIUbF0%2Bb%2FSvMP0WSQDKwv%2BC0tF1AaMc6ZOfliWMFDpWTwlJnJ0%2ByoiLmNetDV1jeBb%2BQdkU6x58R89ALGjzhhcz0roj7B8Gz75Tg0e6iekYQgPTfapWJgwjzf6IL%2BSxVXbw9bsYwIA%2B8DdVcDMuDCUVUTDzkWLDEZCtM61Um%2BVu%2Fha193LTjPR6%2BCZw9%2Btsf2mSkWPgDTDnh8rEBjqkAdkiIig9307k7jmDEohOR25hB%2BPy%2BVtmNTfpsj3xPhbG7of7pFgct%2FW9uLAnFizJT%2BjyNK0wCb7MoYgHUDcH11fbsCL0cBDy%2B389c4WCck9Lvb9p5n6yTYNQ44xue5uk6vXWkegukbXjN5aNUy35XKeH218EcI%2BBTHdzZmpcdl425sE2KNkCexUvPg9u4s2Jr6%2FOy10xJQYMYiMqSyHO%2BjUjSnNR&X-Amz-Signature=f4a43bb105eeb8a20220beb6082c9ab95189fd6533d4d78cb1c829b3e8a6e38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEUAWFY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCWbe95Blhm0qX7cY9gh9gRFSP0uh%2Fln7kWPEazehmHyQIhAObGY%2BFoB3%2BplI8Y5NL3THuZH37wq8Ru2uAC7BKMFjvvKv8DCGcQABoMNjM3NDIzMTgzODA1Igxbffkutd2oQxx6VHEq3AMQRNKmq3215n743UDlNJHVBuW1SwTMcE6mMlatBikwELgdqey1USJTFi7JIVcGLNICyq7a3d478Jk2CUWj4pZ82eGmQrcD1zAXd3g7qAGkidp4zWdTobsXyjEgR7WFAHGdhzQGVq4RdlhqtCiFYBNk7tsnVSuJCCmb2WgOVCfX7V%2Bm0vH3UKKnwLz95ravMC3fCkOv7n3eZ3etjZ2C7Wei2ib%2F5PgCzdrbZJvXTdAHtg926WyKuv3fk4pleTvQ%2BCYL9ywzm%2Bh0PEljVX2WrnMGmR8U7gGSvctzsAs85E7wF%2Bhq7xkzmssljm6EiW3ggbZHVPsLu7wDnrc0Oryg%2Fme4opCoU4Lwf8B1OqJeh9eQ8kI9qBLUpB6if3LtLutLiWW02ieoj4jYUizYZhCw3kN7PhD1F0pMbasUft18kps0f7z4A6CDlKIUbF0%2Bb%2FSvMP0WSQDKwv%2BC0tF1AaMc6ZOfliWMFDpWTwlJnJ0%2ByoiLmNetDV1jeBb%2BQdkU6x58R89ALGjzhhcz0roj7B8Gz75Tg0e6iekYQgPTfapWJgwjzf6IL%2BSxVXbw9bsYwIA%2B8DdVcDMuDCUVUTDzkWLDEZCtM61Um%2BVu%2Fha193LTjPR6%2BCZw9%2Btsf2mSkWPgDTDnh8rEBjqkAdkiIig9307k7jmDEohOR25hB%2BPy%2BVtmNTfpsj3xPhbG7of7pFgct%2FW9uLAnFizJT%2BjyNK0wCb7MoYgHUDcH11fbsCL0cBDy%2B389c4WCck9Lvb9p5n6yTYNQ44xue5uk6vXWkegukbXjN5aNUy35XKeH218EcI%2BBTHdzZmpcdl425sE2KNkCexUvPg9u4s2Jr6%2FOy10xJQYMYiMqSyHO%2BjUjSnNR&X-Amz-Signature=938b9de19cdddb26aa8ed48be6dee5185de4df503866917fca3032a3480d71a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEUAWFY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCWbe95Blhm0qX7cY9gh9gRFSP0uh%2Fln7kWPEazehmHyQIhAObGY%2BFoB3%2BplI8Y5NL3THuZH37wq8Ru2uAC7BKMFjvvKv8DCGcQABoMNjM3NDIzMTgzODA1Igxbffkutd2oQxx6VHEq3AMQRNKmq3215n743UDlNJHVBuW1SwTMcE6mMlatBikwELgdqey1USJTFi7JIVcGLNICyq7a3d478Jk2CUWj4pZ82eGmQrcD1zAXd3g7qAGkidp4zWdTobsXyjEgR7WFAHGdhzQGVq4RdlhqtCiFYBNk7tsnVSuJCCmb2WgOVCfX7V%2Bm0vH3UKKnwLz95ravMC3fCkOv7n3eZ3etjZ2C7Wei2ib%2F5PgCzdrbZJvXTdAHtg926WyKuv3fk4pleTvQ%2BCYL9ywzm%2Bh0PEljVX2WrnMGmR8U7gGSvctzsAs85E7wF%2Bhq7xkzmssljm6EiW3ggbZHVPsLu7wDnrc0Oryg%2Fme4opCoU4Lwf8B1OqJeh9eQ8kI9qBLUpB6if3LtLutLiWW02ieoj4jYUizYZhCw3kN7PhD1F0pMbasUft18kps0f7z4A6CDlKIUbF0%2Bb%2FSvMP0WSQDKwv%2BC0tF1AaMc6ZOfliWMFDpWTwlJnJ0%2ByoiLmNetDV1jeBb%2BQdkU6x58R89ALGjzhhcz0roj7B8Gz75Tg0e6iekYQgPTfapWJgwjzf6IL%2BSxVXbw9bsYwIA%2B8DdVcDMuDCUVUTDzkWLDEZCtM61Um%2BVu%2Fha193LTjPR6%2BCZw9%2Btsf2mSkWPgDTDnh8rEBjqkAdkiIig9307k7jmDEohOR25hB%2BPy%2BVtmNTfpsj3xPhbG7of7pFgct%2FW9uLAnFizJT%2BjyNK0wCb7MoYgHUDcH11fbsCL0cBDy%2B389c4WCck9Lvb9p5n6yTYNQ44xue5uk6vXWkegukbXjN5aNUy35XKeH218EcI%2BBTHdzZmpcdl425sE2KNkCexUvPg9u4s2Jr6%2FOy10xJQYMYiMqSyHO%2BjUjSnNR&X-Amz-Signature=0bac82803a9b0f02a467e93d5ca1d5bc66ec0cfa1e57855b10dddba75989a741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
