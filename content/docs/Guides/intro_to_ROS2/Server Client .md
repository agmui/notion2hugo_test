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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FX2UATF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZPHqtu%2Bkk1k4YYvH9pBFb2LbcGWCEa6JIc0dSdKCYQIhAIxqTK6SgvgX%2BAsXgcJ4RUTKdP3lUs53KHlwwKd4a0ryKv8DCD0QABoMNjM3NDIzMTgzODA1Igzljdt7nFXt%2FkU8bikq3AP896OzcHibduNootNhKGXuQuhSaxQhk076srH04k1omocsMtSnHXYx24Rw6C8J5zH16%2FASqaTya3WlQnsjR4fAhoS8q5tGmkXRRYKxLf%2FY1PbcQFY6MdPpTz2HM5DCyymd3gqdYBeSHFR0akGJTRVmQ8jMcE0j8t7mrvdIIUguH9rpfMW43ymbZFSgxrynIe%2FzmJRwjmc2A8rwPBRemCz51WLmuy9ANHzI9j7qylGGzmWf%2BdoJRSFpHcS9XvKU7HvrZfsu6PgW0weME9CvnVUYr9ZjIyVN16swmkf6Aou56sGCAd5m%2BpTdueTeCO8ANupsKvzUFdYF1zBkB%2B4o9IunoafweW9xxxojAWSt7ZcFb2XtXnUe1l21JRpmxXxIRtcL7aRLf%2F4NGH6%2BEtWSyO6TJnyRyDVEj4kQZmmeMc%2F%2BmDp%2BiJjjTzsJVbasqq53qJcTbm66Po6KvDWSaERmvxR8DRE%2BhBI2Is9MtDaO1MNF63aGOAOmEvnbjRwi%2FNKA5SE4C6qONgSXQtWW97au%2BytrqzvQTgPpx2UCOjMtHaLnW56OgQjo1mmy1CeXMLEXQNEHZz7WNVFw3rsk93HxXZi53eulBMWuQt5OaCTEw0KuHTN4PJUsrG4S7zqvczDZuvXEBjqkATLYg3FXgadToBp%2B3wgWSM9ZhP7Wcqaz8xV3OnGhVjJN9qLTp4yAKkvwf8zVBJ%2Bob55GBfw693AM90mRc8UKoLnhF%2B%2FNYIQypeVHGyiQGAE111MI5LdObpCUW4pTQOYa%2F3Yd5Nl74fmlq2NKa2SsNiHADOZ7kO3CQLRaM3e8U4Y6godjo5oVgJyBiYBnRD7vypklP122dGkn6dV4gWzUK5R%2Bozsa&X-Amz-Signature=abbfffc18f3f5acb5128ba9ac62fb20c227b716a9da2871429457aded7da2180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FX2UATF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZPHqtu%2Bkk1k4YYvH9pBFb2LbcGWCEa6JIc0dSdKCYQIhAIxqTK6SgvgX%2BAsXgcJ4RUTKdP3lUs53KHlwwKd4a0ryKv8DCD0QABoMNjM3NDIzMTgzODA1Igzljdt7nFXt%2FkU8bikq3AP896OzcHibduNootNhKGXuQuhSaxQhk076srH04k1omocsMtSnHXYx24Rw6C8J5zH16%2FASqaTya3WlQnsjR4fAhoS8q5tGmkXRRYKxLf%2FY1PbcQFY6MdPpTz2HM5DCyymd3gqdYBeSHFR0akGJTRVmQ8jMcE0j8t7mrvdIIUguH9rpfMW43ymbZFSgxrynIe%2FzmJRwjmc2A8rwPBRemCz51WLmuy9ANHzI9j7qylGGzmWf%2BdoJRSFpHcS9XvKU7HvrZfsu6PgW0weME9CvnVUYr9ZjIyVN16swmkf6Aou56sGCAd5m%2BpTdueTeCO8ANupsKvzUFdYF1zBkB%2B4o9IunoafweW9xxxojAWSt7ZcFb2XtXnUe1l21JRpmxXxIRtcL7aRLf%2F4NGH6%2BEtWSyO6TJnyRyDVEj4kQZmmeMc%2F%2BmDp%2BiJjjTzsJVbasqq53qJcTbm66Po6KvDWSaERmvxR8DRE%2BhBI2Is9MtDaO1MNF63aGOAOmEvnbjRwi%2FNKA5SE4C6qONgSXQtWW97au%2BytrqzvQTgPpx2UCOjMtHaLnW56OgQjo1mmy1CeXMLEXQNEHZz7WNVFw3rsk93HxXZi53eulBMWuQt5OaCTEw0KuHTN4PJUsrG4S7zqvczDZuvXEBjqkATLYg3FXgadToBp%2B3wgWSM9ZhP7Wcqaz8xV3OnGhVjJN9qLTp4yAKkvwf8zVBJ%2Bob55GBfw693AM90mRc8UKoLnhF%2B%2FNYIQypeVHGyiQGAE111MI5LdObpCUW4pTQOYa%2F3Yd5Nl74fmlq2NKa2SsNiHADOZ7kO3CQLRaM3e8U4Y6godjo5oVgJyBiYBnRD7vypklP122dGkn6dV4gWzUK5R%2Bozsa&X-Amz-Signature=811a8eb8ef5e706d6b4e0b4ed8bee1a7e90be594c7f79a5e24af99c4e9aade14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FX2UATF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZPHqtu%2Bkk1k4YYvH9pBFb2LbcGWCEa6JIc0dSdKCYQIhAIxqTK6SgvgX%2BAsXgcJ4RUTKdP3lUs53KHlwwKd4a0ryKv8DCD0QABoMNjM3NDIzMTgzODA1Igzljdt7nFXt%2FkU8bikq3AP896OzcHibduNootNhKGXuQuhSaxQhk076srH04k1omocsMtSnHXYx24Rw6C8J5zH16%2FASqaTya3WlQnsjR4fAhoS8q5tGmkXRRYKxLf%2FY1PbcQFY6MdPpTz2HM5DCyymd3gqdYBeSHFR0akGJTRVmQ8jMcE0j8t7mrvdIIUguH9rpfMW43ymbZFSgxrynIe%2FzmJRwjmc2A8rwPBRemCz51WLmuy9ANHzI9j7qylGGzmWf%2BdoJRSFpHcS9XvKU7HvrZfsu6PgW0weME9CvnVUYr9ZjIyVN16swmkf6Aou56sGCAd5m%2BpTdueTeCO8ANupsKvzUFdYF1zBkB%2B4o9IunoafweW9xxxojAWSt7ZcFb2XtXnUe1l21JRpmxXxIRtcL7aRLf%2F4NGH6%2BEtWSyO6TJnyRyDVEj4kQZmmeMc%2F%2BmDp%2BiJjjTzsJVbasqq53qJcTbm66Po6KvDWSaERmvxR8DRE%2BhBI2Is9MtDaO1MNF63aGOAOmEvnbjRwi%2FNKA5SE4C6qONgSXQtWW97au%2BytrqzvQTgPpx2UCOjMtHaLnW56OgQjo1mmy1CeXMLEXQNEHZz7WNVFw3rsk93HxXZi53eulBMWuQt5OaCTEw0KuHTN4PJUsrG4S7zqvczDZuvXEBjqkATLYg3FXgadToBp%2B3wgWSM9ZhP7Wcqaz8xV3OnGhVjJN9qLTp4yAKkvwf8zVBJ%2Bob55GBfw693AM90mRc8UKoLnhF%2B%2FNYIQypeVHGyiQGAE111MI5LdObpCUW4pTQOYa%2F3Yd5Nl74fmlq2NKa2SsNiHADOZ7kO3CQLRaM3e8U4Y6godjo5oVgJyBiYBnRD7vypklP122dGkn6dV4gWzUK5R%2Bozsa&X-Amz-Signature=0cb8de760ed32a1f86733c61f266742d2b75a1ef81387426585fd9b18800350f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FX2UATF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZPHqtu%2Bkk1k4YYvH9pBFb2LbcGWCEa6JIc0dSdKCYQIhAIxqTK6SgvgX%2BAsXgcJ4RUTKdP3lUs53KHlwwKd4a0ryKv8DCD0QABoMNjM3NDIzMTgzODA1Igzljdt7nFXt%2FkU8bikq3AP896OzcHibduNootNhKGXuQuhSaxQhk076srH04k1omocsMtSnHXYx24Rw6C8J5zH16%2FASqaTya3WlQnsjR4fAhoS8q5tGmkXRRYKxLf%2FY1PbcQFY6MdPpTz2HM5DCyymd3gqdYBeSHFR0akGJTRVmQ8jMcE0j8t7mrvdIIUguH9rpfMW43ymbZFSgxrynIe%2FzmJRwjmc2A8rwPBRemCz51WLmuy9ANHzI9j7qylGGzmWf%2BdoJRSFpHcS9XvKU7HvrZfsu6PgW0weME9CvnVUYr9ZjIyVN16swmkf6Aou56sGCAd5m%2BpTdueTeCO8ANupsKvzUFdYF1zBkB%2B4o9IunoafweW9xxxojAWSt7ZcFb2XtXnUe1l21JRpmxXxIRtcL7aRLf%2F4NGH6%2BEtWSyO6TJnyRyDVEj4kQZmmeMc%2F%2BmDp%2BiJjjTzsJVbasqq53qJcTbm66Po6KvDWSaERmvxR8DRE%2BhBI2Is9MtDaO1MNF63aGOAOmEvnbjRwi%2FNKA5SE4C6qONgSXQtWW97au%2BytrqzvQTgPpx2UCOjMtHaLnW56OgQjo1mmy1CeXMLEXQNEHZz7WNVFw3rsk93HxXZi53eulBMWuQt5OaCTEw0KuHTN4PJUsrG4S7zqvczDZuvXEBjqkATLYg3FXgadToBp%2B3wgWSM9ZhP7Wcqaz8xV3OnGhVjJN9qLTp4yAKkvwf8zVBJ%2Bob55GBfw693AM90mRc8UKoLnhF%2B%2FNYIQypeVHGyiQGAE111MI5LdObpCUW4pTQOYa%2F3Yd5Nl74fmlq2NKa2SsNiHADOZ7kO3CQLRaM3e8U4Y6godjo5oVgJyBiYBnRD7vypklP122dGkn6dV4gWzUK5R%2Bozsa&X-Amz-Signature=b7be23941ebffd1271ec920105b99b6a106abb144873c86abd2366e6b5876127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FX2UATF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZPHqtu%2Bkk1k4YYvH9pBFb2LbcGWCEa6JIc0dSdKCYQIhAIxqTK6SgvgX%2BAsXgcJ4RUTKdP3lUs53KHlwwKd4a0ryKv8DCD0QABoMNjM3NDIzMTgzODA1Igzljdt7nFXt%2FkU8bikq3AP896OzcHibduNootNhKGXuQuhSaxQhk076srH04k1omocsMtSnHXYx24Rw6C8J5zH16%2FASqaTya3WlQnsjR4fAhoS8q5tGmkXRRYKxLf%2FY1PbcQFY6MdPpTz2HM5DCyymd3gqdYBeSHFR0akGJTRVmQ8jMcE0j8t7mrvdIIUguH9rpfMW43ymbZFSgxrynIe%2FzmJRwjmc2A8rwPBRemCz51WLmuy9ANHzI9j7qylGGzmWf%2BdoJRSFpHcS9XvKU7HvrZfsu6PgW0weME9CvnVUYr9ZjIyVN16swmkf6Aou56sGCAd5m%2BpTdueTeCO8ANupsKvzUFdYF1zBkB%2B4o9IunoafweW9xxxojAWSt7ZcFb2XtXnUe1l21JRpmxXxIRtcL7aRLf%2F4NGH6%2BEtWSyO6TJnyRyDVEj4kQZmmeMc%2F%2BmDp%2BiJjjTzsJVbasqq53qJcTbm66Po6KvDWSaERmvxR8DRE%2BhBI2Is9MtDaO1MNF63aGOAOmEvnbjRwi%2FNKA5SE4C6qONgSXQtWW97au%2BytrqzvQTgPpx2UCOjMtHaLnW56OgQjo1mmy1CeXMLEXQNEHZz7WNVFw3rsk93HxXZi53eulBMWuQt5OaCTEw0KuHTN4PJUsrG4S7zqvczDZuvXEBjqkATLYg3FXgadToBp%2B3wgWSM9ZhP7Wcqaz8xV3OnGhVjJN9qLTp4yAKkvwf8zVBJ%2Bob55GBfw693AM90mRc8UKoLnhF%2B%2FNYIQypeVHGyiQGAE111MI5LdObpCUW4pTQOYa%2F3Yd5Nl74fmlq2NKa2SsNiHADOZ7kO3CQLRaM3e8U4Y6godjo5oVgJyBiYBnRD7vypklP122dGkn6dV4gWzUK5R%2Bozsa&X-Amz-Signature=2c6846c58757214f8cf99a6200014c80b5e615349a4893ff3de9ee0485cbfd2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
