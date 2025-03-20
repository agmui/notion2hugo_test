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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OARN3RF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIC7CvAatM3bgbgl9nP97MvfsjXS3BiA7kqMt4n30Um9QAiBjjBSUc92al8YuHsqGvoH1QM4mw50H6jQNd2Ybv0H1myqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyfnBKrZ2TWXjga0OKtwDLS%2FXzyb2leYqyP7OyTG10RbEtkxQGnIm6Z9cKZxQ7DhEnbeHKug3pN3Te5NofbMa6jy5q2G3xx7RX9dzw6fehUUhaOFNSnj5MGTKE81Ypd4ZCIqFVxHXZfwKHs69mCsnY5pgpeWwwamAb5midmc64q3yL%2F6axmZFhQ2zSAxWQwd54Tb8W43U5PvxfSuuE8wpFXZw7MTyy5aw%2F%2F70d%2FYVlpL8IiBYVJNJxhfU6QIo6R7SNtJ8HQUQvF%2BDek2AwcvxGKstdBf2odMuEA66ApimquaQ9kBdErHZnvMY4fnNzAzHhFH7Z9MzF8xmRr1yEt3dIh3Sl7VoYCbBx1VjAX%2Fh2E3EwiRyzbS0mw1Rm%2BGuT2mjpB74Bf5v%2F2y3svpLlowqk96%2BTJMgcoBfYsa%2FiCj%2FFXNY0ztAIRaWTQkJLUjvDVtimMKKrOLDVRb670VQTB90JZCoI4W3Bu7uzKCLJzhjtLfKrysFOVajE0FR%2FbV4gR%2FeWOUOfKyyusegbVv%2Bz5oY0Cwt0BPFRcOvuYAJreFHl9mRdZtzGl4qr80oFPVVr%2F%2BM1enFYk%2Fi0AmjzItC4su%2B9Mx2n8IMojK3QFmWdHUQUtu2Fze%2FjkXzR0Z%2FGmTCViZYtbakdUD7WWVL9owwq6fyvgY6pgFJdRWjZXNl5kfN06KSS5UBs11Dxu8QA%2BY6014ewGao8bM0deooTwnyfMojzgB5t%2F0nPFBgXCsGueZyPj%2BychKgixFutyocs4xn8SB8qyzgaZIEFawlWvczKLS1mBu1IFribP8dUcmKqgDY3INq8XnhV%2BFdB770XgzHmydfhPwxSj2JBq5RS3qRpnwrVUbxX8ZrK3Ivw301MvZk0hqL6jFImwpKmTCt&X-Amz-Signature=9ab4eda4be5847c5791c32490c7069c5421a1b12eece3977613543f1b5ef4471&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OARN3RF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIC7CvAatM3bgbgl9nP97MvfsjXS3BiA7kqMt4n30Um9QAiBjjBSUc92al8YuHsqGvoH1QM4mw50H6jQNd2Ybv0H1myqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyfnBKrZ2TWXjga0OKtwDLS%2FXzyb2leYqyP7OyTG10RbEtkxQGnIm6Z9cKZxQ7DhEnbeHKug3pN3Te5NofbMa6jy5q2G3xx7RX9dzw6fehUUhaOFNSnj5MGTKE81Ypd4ZCIqFVxHXZfwKHs69mCsnY5pgpeWwwamAb5midmc64q3yL%2F6axmZFhQ2zSAxWQwd54Tb8W43U5PvxfSuuE8wpFXZw7MTyy5aw%2F%2F70d%2FYVlpL8IiBYVJNJxhfU6QIo6R7SNtJ8HQUQvF%2BDek2AwcvxGKstdBf2odMuEA66ApimquaQ9kBdErHZnvMY4fnNzAzHhFH7Z9MzF8xmRr1yEt3dIh3Sl7VoYCbBx1VjAX%2Fh2E3EwiRyzbS0mw1Rm%2BGuT2mjpB74Bf5v%2F2y3svpLlowqk96%2BTJMgcoBfYsa%2FiCj%2FFXNY0ztAIRaWTQkJLUjvDVtimMKKrOLDVRb670VQTB90JZCoI4W3Bu7uzKCLJzhjtLfKrysFOVajE0FR%2FbV4gR%2FeWOUOfKyyusegbVv%2Bz5oY0Cwt0BPFRcOvuYAJreFHl9mRdZtzGl4qr80oFPVVr%2F%2BM1enFYk%2Fi0AmjzItC4su%2B9Mx2n8IMojK3QFmWdHUQUtu2Fze%2FjkXzR0Z%2FGmTCViZYtbakdUD7WWVL9owwq6fyvgY6pgFJdRWjZXNl5kfN06KSS5UBs11Dxu8QA%2BY6014ewGao8bM0deooTwnyfMojzgB5t%2F0nPFBgXCsGueZyPj%2BychKgixFutyocs4xn8SB8qyzgaZIEFawlWvczKLS1mBu1IFribP8dUcmKqgDY3INq8XnhV%2BFdB770XgzHmydfhPwxSj2JBq5RS3qRpnwrVUbxX8ZrK3Ivw301MvZk0hqL6jFImwpKmTCt&X-Amz-Signature=2e769d6adea06fc78e85d6dba5aa05c61b48047432ae83ab0009d68ac34cf48e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OARN3RF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIC7CvAatM3bgbgl9nP97MvfsjXS3BiA7kqMt4n30Um9QAiBjjBSUc92al8YuHsqGvoH1QM4mw50H6jQNd2Ybv0H1myqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyfnBKrZ2TWXjga0OKtwDLS%2FXzyb2leYqyP7OyTG10RbEtkxQGnIm6Z9cKZxQ7DhEnbeHKug3pN3Te5NofbMa6jy5q2G3xx7RX9dzw6fehUUhaOFNSnj5MGTKE81Ypd4ZCIqFVxHXZfwKHs69mCsnY5pgpeWwwamAb5midmc64q3yL%2F6axmZFhQ2zSAxWQwd54Tb8W43U5PvxfSuuE8wpFXZw7MTyy5aw%2F%2F70d%2FYVlpL8IiBYVJNJxhfU6QIo6R7SNtJ8HQUQvF%2BDek2AwcvxGKstdBf2odMuEA66ApimquaQ9kBdErHZnvMY4fnNzAzHhFH7Z9MzF8xmRr1yEt3dIh3Sl7VoYCbBx1VjAX%2Fh2E3EwiRyzbS0mw1Rm%2BGuT2mjpB74Bf5v%2F2y3svpLlowqk96%2BTJMgcoBfYsa%2FiCj%2FFXNY0ztAIRaWTQkJLUjvDVtimMKKrOLDVRb670VQTB90JZCoI4W3Bu7uzKCLJzhjtLfKrysFOVajE0FR%2FbV4gR%2FeWOUOfKyyusegbVv%2Bz5oY0Cwt0BPFRcOvuYAJreFHl9mRdZtzGl4qr80oFPVVr%2F%2BM1enFYk%2Fi0AmjzItC4su%2B9Mx2n8IMojK3QFmWdHUQUtu2Fze%2FjkXzR0Z%2FGmTCViZYtbakdUD7WWVL9owwq6fyvgY6pgFJdRWjZXNl5kfN06KSS5UBs11Dxu8QA%2BY6014ewGao8bM0deooTwnyfMojzgB5t%2F0nPFBgXCsGueZyPj%2BychKgixFutyocs4xn8SB8qyzgaZIEFawlWvczKLS1mBu1IFribP8dUcmKqgDY3INq8XnhV%2BFdB770XgzHmydfhPwxSj2JBq5RS3qRpnwrVUbxX8ZrK3Ivw301MvZk0hqL6jFImwpKmTCt&X-Amz-Signature=3c1383375687d31ddfb3d8a5eff5cbdd55193f62d64378f4bb651f7f54786221&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OARN3RF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIC7CvAatM3bgbgl9nP97MvfsjXS3BiA7kqMt4n30Um9QAiBjjBSUc92al8YuHsqGvoH1QM4mw50H6jQNd2Ybv0H1myqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyfnBKrZ2TWXjga0OKtwDLS%2FXzyb2leYqyP7OyTG10RbEtkxQGnIm6Z9cKZxQ7DhEnbeHKug3pN3Te5NofbMa6jy5q2G3xx7RX9dzw6fehUUhaOFNSnj5MGTKE81Ypd4ZCIqFVxHXZfwKHs69mCsnY5pgpeWwwamAb5midmc64q3yL%2F6axmZFhQ2zSAxWQwd54Tb8W43U5PvxfSuuE8wpFXZw7MTyy5aw%2F%2F70d%2FYVlpL8IiBYVJNJxhfU6QIo6R7SNtJ8HQUQvF%2BDek2AwcvxGKstdBf2odMuEA66ApimquaQ9kBdErHZnvMY4fnNzAzHhFH7Z9MzF8xmRr1yEt3dIh3Sl7VoYCbBx1VjAX%2Fh2E3EwiRyzbS0mw1Rm%2BGuT2mjpB74Bf5v%2F2y3svpLlowqk96%2BTJMgcoBfYsa%2FiCj%2FFXNY0ztAIRaWTQkJLUjvDVtimMKKrOLDVRb670VQTB90JZCoI4W3Bu7uzKCLJzhjtLfKrysFOVajE0FR%2FbV4gR%2FeWOUOfKyyusegbVv%2Bz5oY0Cwt0BPFRcOvuYAJreFHl9mRdZtzGl4qr80oFPVVr%2F%2BM1enFYk%2Fi0AmjzItC4su%2B9Mx2n8IMojK3QFmWdHUQUtu2Fze%2FjkXzR0Z%2FGmTCViZYtbakdUD7WWVL9owwq6fyvgY6pgFJdRWjZXNl5kfN06KSS5UBs11Dxu8QA%2BY6014ewGao8bM0deooTwnyfMojzgB5t%2F0nPFBgXCsGueZyPj%2BychKgixFutyocs4xn8SB8qyzgaZIEFawlWvczKLS1mBu1IFribP8dUcmKqgDY3INq8XnhV%2BFdB770XgzHmydfhPwxSj2JBq5RS3qRpnwrVUbxX8ZrK3Ivw301MvZk0hqL6jFImwpKmTCt&X-Amz-Signature=fec70357d4a2852d6150ce08a3086bea735f6cd696632ad77c92d7ae0920967b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OARN3RF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIC7CvAatM3bgbgl9nP97MvfsjXS3BiA7kqMt4n30Um9QAiBjjBSUc92al8YuHsqGvoH1QM4mw50H6jQNd2Ybv0H1myqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyfnBKrZ2TWXjga0OKtwDLS%2FXzyb2leYqyP7OyTG10RbEtkxQGnIm6Z9cKZxQ7DhEnbeHKug3pN3Te5NofbMa6jy5q2G3xx7RX9dzw6fehUUhaOFNSnj5MGTKE81Ypd4ZCIqFVxHXZfwKHs69mCsnY5pgpeWwwamAb5midmc64q3yL%2F6axmZFhQ2zSAxWQwd54Tb8W43U5PvxfSuuE8wpFXZw7MTyy5aw%2F%2F70d%2FYVlpL8IiBYVJNJxhfU6QIo6R7SNtJ8HQUQvF%2BDek2AwcvxGKstdBf2odMuEA66ApimquaQ9kBdErHZnvMY4fnNzAzHhFH7Z9MzF8xmRr1yEt3dIh3Sl7VoYCbBx1VjAX%2Fh2E3EwiRyzbS0mw1Rm%2BGuT2mjpB74Bf5v%2F2y3svpLlowqk96%2BTJMgcoBfYsa%2FiCj%2FFXNY0ztAIRaWTQkJLUjvDVtimMKKrOLDVRb670VQTB90JZCoI4W3Bu7uzKCLJzhjtLfKrysFOVajE0FR%2FbV4gR%2FeWOUOfKyyusegbVv%2Bz5oY0Cwt0BPFRcOvuYAJreFHl9mRdZtzGl4qr80oFPVVr%2F%2BM1enFYk%2Fi0AmjzItC4su%2B9Mx2n8IMojK3QFmWdHUQUtu2Fze%2FjkXzR0Z%2FGmTCViZYtbakdUD7WWVL9owwq6fyvgY6pgFJdRWjZXNl5kfN06KSS5UBs11Dxu8QA%2BY6014ewGao8bM0deooTwnyfMojzgB5t%2F0nPFBgXCsGueZyPj%2BychKgixFutyocs4xn8SB8qyzgaZIEFawlWvczKLS1mBu1IFribP8dUcmKqgDY3INq8XnhV%2BFdB770XgzHmydfhPwxSj2JBq5RS3qRpnwrVUbxX8ZrK3Ivw301MvZk0hqL6jFImwpKmTCt&X-Amz-Signature=828e4ef210a197fb4fe0e051f3884f0a7bc7a98d8eb59d6e8e8a001ae01612e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
