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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZ7WJLL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIF%2FLKpcIgv1dbcowA3HTH6w7L58HdOGaCi8XLPWckn81AiAVXDoxfNIjswL3AabXuAqAe%2F03ajEtkPBzqXG6nHm46SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3bHrIsFw33A2l1woKtwDOR4%2Fu2%2FpSSu78wGPXx3P%2F%2Bc%2FGbcMVeyXYXP97xNkcO1jToIpZBgXjQIfxG%2FR9WF7LSEOcYS0NsjN3tdscCDE5jbWzBoH1BxPgVcUPy19T6GFUfQyCNV5pAw9dGxxDootyp3kNpb6gWKqwxTsmXbyjz0BBGSJ4%2BsRSoR%2F9ZNW%2FF2EtFqEUMHXTeXk0A95spycWFs%2F72tOLx4QRWN6hUYlx%2F6Hrc95EiX%2FFRGlU3Rf%2B6LwVjpbo20VfNfnNmt5HGRg%2FAWQn2tg7gWb4V8xQ0sOGAGvoMikI39f0Vn0DfZrYIrJul95VkX3Scc9Q1nnfKvECfFPk%2FtOLebmKRbFLYPQ5hChfs6q0PUJcwk0XQtkJAXhJy8Yq0LPSfA6jIuFwgwMHCTGxJDGxy5YGtaSSLBxy9lBiEg%2BGY7CbaYxrBvQXejsgVUeqZ7VzGv3v9mSGY3d6%2F33dKvce1HIb2dG8v9E1LQRTFAX31domNxPcbigMBbLn4Pvcit5%2BFONCCS7YzCBph%2FmpIfrK3e5Vqp00C6otnLSJOpkaKC7SJ5PJVRVyIOxz1%2Fi4%2FqoXze%2FYo%2FH1TQPDvRVP%2FteUeJJNctUOCK67YiggSqBTpipXLn6yvFxSe5BqRDlFXnAzp5nmh0w95mnwgY6pgFpBh3evvdngA%2FIArJDUE1VCrABn%2FFmAxTDWq5ms3GANd%2F92jxdhgd4CI%2BQM52mnyiBK9VvZqrQvQ9l1gL9aAyiPnvNMNN5G72R2gZ4LzKsG%2BjJzgz5gyy67tVEf7BijlaUg70gZhvKW3YX3A25CSK7z8opT8g8EOy620bMYYUEm%2BIjjCcZi8lhzI1s1PYf5OcksJZIyj8hpOqntPheQ2KXUbLAkVas&X-Amz-Signature=d923da336ab7b269fbc3235393f775ac38a440f79f8bafe46d8cf106388ec423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZ7WJLL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIF%2FLKpcIgv1dbcowA3HTH6w7L58HdOGaCi8XLPWckn81AiAVXDoxfNIjswL3AabXuAqAe%2F03ajEtkPBzqXG6nHm46SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3bHrIsFw33A2l1woKtwDOR4%2Fu2%2FpSSu78wGPXx3P%2F%2Bc%2FGbcMVeyXYXP97xNkcO1jToIpZBgXjQIfxG%2FR9WF7LSEOcYS0NsjN3tdscCDE5jbWzBoH1BxPgVcUPy19T6GFUfQyCNV5pAw9dGxxDootyp3kNpb6gWKqwxTsmXbyjz0BBGSJ4%2BsRSoR%2F9ZNW%2FF2EtFqEUMHXTeXk0A95spycWFs%2F72tOLx4QRWN6hUYlx%2F6Hrc95EiX%2FFRGlU3Rf%2B6LwVjpbo20VfNfnNmt5HGRg%2FAWQn2tg7gWb4V8xQ0sOGAGvoMikI39f0Vn0DfZrYIrJul95VkX3Scc9Q1nnfKvECfFPk%2FtOLebmKRbFLYPQ5hChfs6q0PUJcwk0XQtkJAXhJy8Yq0LPSfA6jIuFwgwMHCTGxJDGxy5YGtaSSLBxy9lBiEg%2BGY7CbaYxrBvQXejsgVUeqZ7VzGv3v9mSGY3d6%2F33dKvce1HIb2dG8v9E1LQRTFAX31domNxPcbigMBbLn4Pvcit5%2BFONCCS7YzCBph%2FmpIfrK3e5Vqp00C6otnLSJOpkaKC7SJ5PJVRVyIOxz1%2Fi4%2FqoXze%2FYo%2FH1TQPDvRVP%2FteUeJJNctUOCK67YiggSqBTpipXLn6yvFxSe5BqRDlFXnAzp5nmh0w95mnwgY6pgFpBh3evvdngA%2FIArJDUE1VCrABn%2FFmAxTDWq5ms3GANd%2F92jxdhgd4CI%2BQM52mnyiBK9VvZqrQvQ9l1gL9aAyiPnvNMNN5G72R2gZ4LzKsG%2BjJzgz5gyy67tVEf7BijlaUg70gZhvKW3YX3A25CSK7z8opT8g8EOy620bMYYUEm%2BIjjCcZi8lhzI1s1PYf5OcksJZIyj8hpOqntPheQ2KXUbLAkVas&X-Amz-Signature=491f0d045ce0d5119756ad331b5aa89f2f5ad80d306cf9e156e4770b6e4c53e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZ7WJLL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIF%2FLKpcIgv1dbcowA3HTH6w7L58HdOGaCi8XLPWckn81AiAVXDoxfNIjswL3AabXuAqAe%2F03ajEtkPBzqXG6nHm46SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3bHrIsFw33A2l1woKtwDOR4%2Fu2%2FpSSu78wGPXx3P%2F%2Bc%2FGbcMVeyXYXP97xNkcO1jToIpZBgXjQIfxG%2FR9WF7LSEOcYS0NsjN3tdscCDE5jbWzBoH1BxPgVcUPy19T6GFUfQyCNV5pAw9dGxxDootyp3kNpb6gWKqwxTsmXbyjz0BBGSJ4%2BsRSoR%2F9ZNW%2FF2EtFqEUMHXTeXk0A95spycWFs%2F72tOLx4QRWN6hUYlx%2F6Hrc95EiX%2FFRGlU3Rf%2B6LwVjpbo20VfNfnNmt5HGRg%2FAWQn2tg7gWb4V8xQ0sOGAGvoMikI39f0Vn0DfZrYIrJul95VkX3Scc9Q1nnfKvECfFPk%2FtOLebmKRbFLYPQ5hChfs6q0PUJcwk0XQtkJAXhJy8Yq0LPSfA6jIuFwgwMHCTGxJDGxy5YGtaSSLBxy9lBiEg%2BGY7CbaYxrBvQXejsgVUeqZ7VzGv3v9mSGY3d6%2F33dKvce1HIb2dG8v9E1LQRTFAX31domNxPcbigMBbLn4Pvcit5%2BFONCCS7YzCBph%2FmpIfrK3e5Vqp00C6otnLSJOpkaKC7SJ5PJVRVyIOxz1%2Fi4%2FqoXze%2FYo%2FH1TQPDvRVP%2FteUeJJNctUOCK67YiggSqBTpipXLn6yvFxSe5BqRDlFXnAzp5nmh0w95mnwgY6pgFpBh3evvdngA%2FIArJDUE1VCrABn%2FFmAxTDWq5ms3GANd%2F92jxdhgd4CI%2BQM52mnyiBK9VvZqrQvQ9l1gL9aAyiPnvNMNN5G72R2gZ4LzKsG%2BjJzgz5gyy67tVEf7BijlaUg70gZhvKW3YX3A25CSK7z8opT8g8EOy620bMYYUEm%2BIjjCcZi8lhzI1s1PYf5OcksJZIyj8hpOqntPheQ2KXUbLAkVas&X-Amz-Signature=e537250a82bce447e05a00cffdd28882c4022512755a6a4c8fbf126ec93ef0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZ7WJLL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIF%2FLKpcIgv1dbcowA3HTH6w7L58HdOGaCi8XLPWckn81AiAVXDoxfNIjswL3AabXuAqAe%2F03ajEtkPBzqXG6nHm46SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3bHrIsFw33A2l1woKtwDOR4%2Fu2%2FpSSu78wGPXx3P%2F%2Bc%2FGbcMVeyXYXP97xNkcO1jToIpZBgXjQIfxG%2FR9WF7LSEOcYS0NsjN3tdscCDE5jbWzBoH1BxPgVcUPy19T6GFUfQyCNV5pAw9dGxxDootyp3kNpb6gWKqwxTsmXbyjz0BBGSJ4%2BsRSoR%2F9ZNW%2FF2EtFqEUMHXTeXk0A95spycWFs%2F72tOLx4QRWN6hUYlx%2F6Hrc95EiX%2FFRGlU3Rf%2B6LwVjpbo20VfNfnNmt5HGRg%2FAWQn2tg7gWb4V8xQ0sOGAGvoMikI39f0Vn0DfZrYIrJul95VkX3Scc9Q1nnfKvECfFPk%2FtOLebmKRbFLYPQ5hChfs6q0PUJcwk0XQtkJAXhJy8Yq0LPSfA6jIuFwgwMHCTGxJDGxy5YGtaSSLBxy9lBiEg%2BGY7CbaYxrBvQXejsgVUeqZ7VzGv3v9mSGY3d6%2F33dKvce1HIb2dG8v9E1LQRTFAX31domNxPcbigMBbLn4Pvcit5%2BFONCCS7YzCBph%2FmpIfrK3e5Vqp00C6otnLSJOpkaKC7SJ5PJVRVyIOxz1%2Fi4%2FqoXze%2FYo%2FH1TQPDvRVP%2FteUeJJNctUOCK67YiggSqBTpipXLn6yvFxSe5BqRDlFXnAzp5nmh0w95mnwgY6pgFpBh3evvdngA%2FIArJDUE1VCrABn%2FFmAxTDWq5ms3GANd%2F92jxdhgd4CI%2BQM52mnyiBK9VvZqrQvQ9l1gL9aAyiPnvNMNN5G72R2gZ4LzKsG%2BjJzgz5gyy67tVEf7BijlaUg70gZhvKW3YX3A25CSK7z8opT8g8EOy620bMYYUEm%2BIjjCcZi8lhzI1s1PYf5OcksJZIyj8hpOqntPheQ2KXUbLAkVas&X-Amz-Signature=877e3804a56d042744589759a5e6a7b7019ab2508d1bc37402a06105084e1de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZ7WJLL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIF%2FLKpcIgv1dbcowA3HTH6w7L58HdOGaCi8XLPWckn81AiAVXDoxfNIjswL3AabXuAqAe%2F03ajEtkPBzqXG6nHm46SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3bHrIsFw33A2l1woKtwDOR4%2Fu2%2FpSSu78wGPXx3P%2F%2Bc%2FGbcMVeyXYXP97xNkcO1jToIpZBgXjQIfxG%2FR9WF7LSEOcYS0NsjN3tdscCDE5jbWzBoH1BxPgVcUPy19T6GFUfQyCNV5pAw9dGxxDootyp3kNpb6gWKqwxTsmXbyjz0BBGSJ4%2BsRSoR%2F9ZNW%2FF2EtFqEUMHXTeXk0A95spycWFs%2F72tOLx4QRWN6hUYlx%2F6Hrc95EiX%2FFRGlU3Rf%2B6LwVjpbo20VfNfnNmt5HGRg%2FAWQn2tg7gWb4V8xQ0sOGAGvoMikI39f0Vn0DfZrYIrJul95VkX3Scc9Q1nnfKvECfFPk%2FtOLebmKRbFLYPQ5hChfs6q0PUJcwk0XQtkJAXhJy8Yq0LPSfA6jIuFwgwMHCTGxJDGxy5YGtaSSLBxy9lBiEg%2BGY7CbaYxrBvQXejsgVUeqZ7VzGv3v9mSGY3d6%2F33dKvce1HIb2dG8v9E1LQRTFAX31domNxPcbigMBbLn4Pvcit5%2BFONCCS7YzCBph%2FmpIfrK3e5Vqp00C6otnLSJOpkaKC7SJ5PJVRVyIOxz1%2Fi4%2FqoXze%2FYo%2FH1TQPDvRVP%2FteUeJJNctUOCK67YiggSqBTpipXLn6yvFxSe5BqRDlFXnAzp5nmh0w95mnwgY6pgFpBh3evvdngA%2FIArJDUE1VCrABn%2FFmAxTDWq5ms3GANd%2F92jxdhgd4CI%2BQM52mnyiBK9VvZqrQvQ9l1gL9aAyiPnvNMNN5G72R2gZ4LzKsG%2BjJzgz5gyy67tVEf7BijlaUg70gZhvKW3YX3A25CSK7z8opT8g8EOy620bMYYUEm%2BIjjCcZi8lhzI1s1PYf5OcksJZIyj8hpOqntPheQ2KXUbLAkVas&X-Amz-Signature=7d287300264b272184463026397dc628202b71b2986c47be2b2c8f6d55caad63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
