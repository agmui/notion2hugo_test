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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHMNYBT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDNueZgH3V8wpg8cVMPYVb7fYB16jrGY6UKXrf8w5EruAiBoxWXD4Z5SIPXkrOIHJkoaIWAHJ8AMHMlA65Kq1VLIUiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqiZWkR%2BBUh8yPi5KtwD4FJjxEkYk6UF1AEWkcqsSwg92j22dJ9W%2Fyh%2F%2F0eHe7N%2B%2BC4jwBe3tXzmEE%2BmiYwd6BwI%2FYfKcf0Z3a6QI8vwCyoJOqtrZNshyPjxoEAM53xnOo2iQumRc9sgN9JZpxJ%2Bf%2B6On4L4sKgPgaejYVd%2BV9i0RbucS29KUftjtT3sS7%2F104rGrNMzMRpxfLa%2F%2BGoY7%2BSS1bbKtE8Jnq6tt9HmGaVyqmj6BX%2FibcssY9SWo2nRtLsKqPRA1Bw%2FwUASkyST1k4Kxmx%2B190Gruo%2Fb54hJMMAsL7EemXiaAi9ZYq%2BbTWPRqylTKhpiwJdJSvFbPvgXstR7GYbyfIpGCXfDwCvpRABLKM1%2Bsg4vbVaRCPACV1JM87ZUlkbbknv6EVDjiyyBLFRgxkpx6LhBUpMrJCh3wFnchaPawYFq4Zban38KZwLtmHnUBvKhc3aL3uCh%2BdysQqiL7NaaZJW%2FXVVak6tXsJjUXoC7zDaIgqA3XSC%2B%2BkCgtpwMJIz7t6geXW65apXnQ%2F3lZSarFQ3ln76b4StPKtLNjH7rzh0t9j0BcvHTbx%2B%2BZmOUwnoNnky34bAHX%2Fn7AXqJC8V51VHC43hVarbbo6eMvylOVta7jfNp731PkiDGOqmaWh422wQUhww9Lb8vgY6pgEgfgjcV920zgmGF4MWL53tGKe99Cmt4LFQ9g7s%2F77Gj%2BQ1u8WgdbymIGmuzDb%2BHVkgxF9vCMR1ur6AWv8H%2B7sk3dDVCc53H0odknptwWjKS0D5GSGcNBgOjBko2WiTs0fGy8hhQ8wRWg5YWV3QKWNGWDQvjaTZVpiV2cXMx4yigMBFFVcFbO9ggundyd2c%2B%2Fo0I9dEzZ4%2FYsUvKXhNBWw3M5wiqH%2F1&X-Amz-Signature=0afcec208c6a6a5703b6da2454e826f2179fc7d1c8bae77c6567afe0fff8f88a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHMNYBT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDNueZgH3V8wpg8cVMPYVb7fYB16jrGY6UKXrf8w5EruAiBoxWXD4Z5SIPXkrOIHJkoaIWAHJ8AMHMlA65Kq1VLIUiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqiZWkR%2BBUh8yPi5KtwD4FJjxEkYk6UF1AEWkcqsSwg92j22dJ9W%2Fyh%2F%2F0eHe7N%2B%2BC4jwBe3tXzmEE%2BmiYwd6BwI%2FYfKcf0Z3a6QI8vwCyoJOqtrZNshyPjxoEAM53xnOo2iQumRc9sgN9JZpxJ%2Bf%2B6On4L4sKgPgaejYVd%2BV9i0RbucS29KUftjtT3sS7%2F104rGrNMzMRpxfLa%2F%2BGoY7%2BSS1bbKtE8Jnq6tt9HmGaVyqmj6BX%2FibcssY9SWo2nRtLsKqPRA1Bw%2FwUASkyST1k4Kxmx%2B190Gruo%2Fb54hJMMAsL7EemXiaAi9ZYq%2BbTWPRqylTKhpiwJdJSvFbPvgXstR7GYbyfIpGCXfDwCvpRABLKM1%2Bsg4vbVaRCPACV1JM87ZUlkbbknv6EVDjiyyBLFRgxkpx6LhBUpMrJCh3wFnchaPawYFq4Zban38KZwLtmHnUBvKhc3aL3uCh%2BdysQqiL7NaaZJW%2FXVVak6tXsJjUXoC7zDaIgqA3XSC%2B%2BkCgtpwMJIz7t6geXW65apXnQ%2F3lZSarFQ3ln76b4StPKtLNjH7rzh0t9j0BcvHTbx%2B%2BZmOUwnoNnky34bAHX%2Fn7AXqJC8V51VHC43hVarbbo6eMvylOVta7jfNp731PkiDGOqmaWh422wQUhww9Lb8vgY6pgEgfgjcV920zgmGF4MWL53tGKe99Cmt4LFQ9g7s%2F77Gj%2BQ1u8WgdbymIGmuzDb%2BHVkgxF9vCMR1ur6AWv8H%2B7sk3dDVCc53H0odknptwWjKS0D5GSGcNBgOjBko2WiTs0fGy8hhQ8wRWg5YWV3QKWNGWDQvjaTZVpiV2cXMx4yigMBFFVcFbO9ggundyd2c%2B%2Fo0I9dEzZ4%2FYsUvKXhNBWw3M5wiqH%2F1&X-Amz-Signature=754d4b8486301e3f4e9eba627be73773d9a5b4cc8e8e99d8b859c020f5f78694&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHMNYBT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDNueZgH3V8wpg8cVMPYVb7fYB16jrGY6UKXrf8w5EruAiBoxWXD4Z5SIPXkrOIHJkoaIWAHJ8AMHMlA65Kq1VLIUiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqiZWkR%2BBUh8yPi5KtwD4FJjxEkYk6UF1AEWkcqsSwg92j22dJ9W%2Fyh%2F%2F0eHe7N%2B%2BC4jwBe3tXzmEE%2BmiYwd6BwI%2FYfKcf0Z3a6QI8vwCyoJOqtrZNshyPjxoEAM53xnOo2iQumRc9sgN9JZpxJ%2Bf%2B6On4L4sKgPgaejYVd%2BV9i0RbucS29KUftjtT3sS7%2F104rGrNMzMRpxfLa%2F%2BGoY7%2BSS1bbKtE8Jnq6tt9HmGaVyqmj6BX%2FibcssY9SWo2nRtLsKqPRA1Bw%2FwUASkyST1k4Kxmx%2B190Gruo%2Fb54hJMMAsL7EemXiaAi9ZYq%2BbTWPRqylTKhpiwJdJSvFbPvgXstR7GYbyfIpGCXfDwCvpRABLKM1%2Bsg4vbVaRCPACV1JM87ZUlkbbknv6EVDjiyyBLFRgxkpx6LhBUpMrJCh3wFnchaPawYFq4Zban38KZwLtmHnUBvKhc3aL3uCh%2BdysQqiL7NaaZJW%2FXVVak6tXsJjUXoC7zDaIgqA3XSC%2B%2BkCgtpwMJIz7t6geXW65apXnQ%2F3lZSarFQ3ln76b4StPKtLNjH7rzh0t9j0BcvHTbx%2B%2BZmOUwnoNnky34bAHX%2Fn7AXqJC8V51VHC43hVarbbo6eMvylOVta7jfNp731PkiDGOqmaWh422wQUhww9Lb8vgY6pgEgfgjcV920zgmGF4MWL53tGKe99Cmt4LFQ9g7s%2F77Gj%2BQ1u8WgdbymIGmuzDb%2BHVkgxF9vCMR1ur6AWv8H%2B7sk3dDVCc53H0odknptwWjKS0D5GSGcNBgOjBko2WiTs0fGy8hhQ8wRWg5YWV3QKWNGWDQvjaTZVpiV2cXMx4yigMBFFVcFbO9ggundyd2c%2B%2Fo0I9dEzZ4%2FYsUvKXhNBWw3M5wiqH%2F1&X-Amz-Signature=0369ca21bc789f89a04a39a46603bc7eaba2a6c936fdf81b7928a7878d30f48c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHMNYBT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDNueZgH3V8wpg8cVMPYVb7fYB16jrGY6UKXrf8w5EruAiBoxWXD4Z5SIPXkrOIHJkoaIWAHJ8AMHMlA65Kq1VLIUiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqiZWkR%2BBUh8yPi5KtwD4FJjxEkYk6UF1AEWkcqsSwg92j22dJ9W%2Fyh%2F%2F0eHe7N%2B%2BC4jwBe3tXzmEE%2BmiYwd6BwI%2FYfKcf0Z3a6QI8vwCyoJOqtrZNshyPjxoEAM53xnOo2iQumRc9sgN9JZpxJ%2Bf%2B6On4L4sKgPgaejYVd%2BV9i0RbucS29KUftjtT3sS7%2F104rGrNMzMRpxfLa%2F%2BGoY7%2BSS1bbKtE8Jnq6tt9HmGaVyqmj6BX%2FibcssY9SWo2nRtLsKqPRA1Bw%2FwUASkyST1k4Kxmx%2B190Gruo%2Fb54hJMMAsL7EemXiaAi9ZYq%2BbTWPRqylTKhpiwJdJSvFbPvgXstR7GYbyfIpGCXfDwCvpRABLKM1%2Bsg4vbVaRCPACV1JM87ZUlkbbknv6EVDjiyyBLFRgxkpx6LhBUpMrJCh3wFnchaPawYFq4Zban38KZwLtmHnUBvKhc3aL3uCh%2BdysQqiL7NaaZJW%2FXVVak6tXsJjUXoC7zDaIgqA3XSC%2B%2BkCgtpwMJIz7t6geXW65apXnQ%2F3lZSarFQ3ln76b4StPKtLNjH7rzh0t9j0BcvHTbx%2B%2BZmOUwnoNnky34bAHX%2Fn7AXqJC8V51VHC43hVarbbo6eMvylOVta7jfNp731PkiDGOqmaWh422wQUhww9Lb8vgY6pgEgfgjcV920zgmGF4MWL53tGKe99Cmt4LFQ9g7s%2F77Gj%2BQ1u8WgdbymIGmuzDb%2BHVkgxF9vCMR1ur6AWv8H%2B7sk3dDVCc53H0odknptwWjKS0D5GSGcNBgOjBko2WiTs0fGy8hhQ8wRWg5YWV3QKWNGWDQvjaTZVpiV2cXMx4yigMBFFVcFbO9ggundyd2c%2B%2Fo0I9dEzZ4%2FYsUvKXhNBWw3M5wiqH%2F1&X-Amz-Signature=f5e9f08816aa8b6397e5fded041427c609ed09f7726723b1067679d87929a53b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHMNYBT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDNueZgH3V8wpg8cVMPYVb7fYB16jrGY6UKXrf8w5EruAiBoxWXD4Z5SIPXkrOIHJkoaIWAHJ8AMHMlA65Kq1VLIUiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqiZWkR%2BBUh8yPi5KtwD4FJjxEkYk6UF1AEWkcqsSwg92j22dJ9W%2Fyh%2F%2F0eHe7N%2B%2BC4jwBe3tXzmEE%2BmiYwd6BwI%2FYfKcf0Z3a6QI8vwCyoJOqtrZNshyPjxoEAM53xnOo2iQumRc9sgN9JZpxJ%2Bf%2B6On4L4sKgPgaejYVd%2BV9i0RbucS29KUftjtT3sS7%2F104rGrNMzMRpxfLa%2F%2BGoY7%2BSS1bbKtE8Jnq6tt9HmGaVyqmj6BX%2FibcssY9SWo2nRtLsKqPRA1Bw%2FwUASkyST1k4Kxmx%2B190Gruo%2Fb54hJMMAsL7EemXiaAi9ZYq%2BbTWPRqylTKhpiwJdJSvFbPvgXstR7GYbyfIpGCXfDwCvpRABLKM1%2Bsg4vbVaRCPACV1JM87ZUlkbbknv6EVDjiyyBLFRgxkpx6LhBUpMrJCh3wFnchaPawYFq4Zban38KZwLtmHnUBvKhc3aL3uCh%2BdysQqiL7NaaZJW%2FXVVak6tXsJjUXoC7zDaIgqA3XSC%2B%2BkCgtpwMJIz7t6geXW65apXnQ%2F3lZSarFQ3ln76b4StPKtLNjH7rzh0t9j0BcvHTbx%2B%2BZmOUwnoNnky34bAHX%2Fn7AXqJC8V51VHC43hVarbbo6eMvylOVta7jfNp731PkiDGOqmaWh422wQUhww9Lb8vgY6pgEgfgjcV920zgmGF4MWL53tGKe99Cmt4LFQ9g7s%2F77Gj%2BQ1u8WgdbymIGmuzDb%2BHVkgxF9vCMR1ur6AWv8H%2B7sk3dDVCc53H0odknptwWjKS0D5GSGcNBgOjBko2WiTs0fGy8hhQ8wRWg5YWV3QKWNGWDQvjaTZVpiV2cXMx4yigMBFFVcFbO9ggundyd2c%2B%2Fo0I9dEzZ4%2FYsUvKXhNBWw3M5wiqH%2F1&X-Amz-Signature=2a924de39ad77d1ecc44703e548eb8083ffce89c2bfae55a3ee39deedd39a9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
