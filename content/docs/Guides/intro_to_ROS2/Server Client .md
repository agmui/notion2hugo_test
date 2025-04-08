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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WESR2PY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Qml3wXyX%2Bb6PlMfhTxy03EX57EO%2FW8z3Mp0O9y%2B1pAIhAL44wB6aE%2Fr5%2FylIAz6oEqPaylrNu1KPeyDdloPxJEdNKv8DCHIQABoMNjM3NDIzMTgzODA1Igyr6jFgOKB%2Ba1E%2FSDIq3ANC4yllc35IoCgxrqMcp48ihNL88z0hoXw8zGgambaUrwuC2D%2FQ%2FaYhMdLYFIDU1sezUW5%2FojH3ODdDsTF0B7MNVBQFBKKc6VCaYTxXQib1H4jyfosAbxqGU0y2jumIkzJMZGcmtA%2FWyfokOOSiegDGlSsYcR%2B92rco18XHu5vLZqXTjrYmx%2FINeG56OjOLJuh2f4R%2B0VtSQfmThTP9Nft1%2B4VBhljnHrwpkCWHp5Yb%2FUF7Mhf3wTLDp8pBkrF7QKt7ZD3IxEueowiQf%2FlIVGmQwa3xCZj3NaombUNlQdYF4GSYkJ%2FBaKcR23eBqtcyDFAZl9m%2FlNcjCdOReQQfJJA6DYYTgrdeI9ed2RgyWrTsdnRMQEAK2v0kvF%2BqzjI%2FT1ORczJOqAJJk0l48xNVg75kb0a4zmmmuslxnLf3XyH9YJ5xMgk%2FlJptKehcpLJ0vtoDTbkA%2B%2BwHIJg3hTzA0jmUKzq%2FKjTMoVdmlSiVliSP1K%2Fqirwi5m6q8wrH0gWM8VmNkHiJnMYwzFJP%2Fe6%2BS7nzWAID9WrpVaGOfSbzYbjmnj6YyMjWXnnAAmLqJKUJHIPTCjcflrEYcPvIQl6WOnDf4EMyph3jovfEa6q6GFIogZRQIk8%2FEGkgKj0AsTDcu9O%2FBjqkAS%2FDLDuxR25S2GFipNNPSpHZPwh%2Bm80qANhEXmnrLxQE9hJY0Na0q4BP400lhLjAZ4vqoKCiUNhm58r5edZJYoiMj9frBL9bGFpwUutof%2B5KVD9Rb%2FTYWfHTsL%2BBGJ3AbJ7Fx7e5S10lWmH%2Fq7b99iV4XvwSMjachK%2BtKA2WcV0sNJ6EIWO5MLcSrtoMeleROdU9RVznyDqeu3fDeUvNBuNw6NlW&X-Amz-Signature=154414e142721915801f222f4d61b22cfcec06c27c865bee5dbe0a0e673a2867&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WESR2PY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Qml3wXyX%2Bb6PlMfhTxy03EX57EO%2FW8z3Mp0O9y%2B1pAIhAL44wB6aE%2Fr5%2FylIAz6oEqPaylrNu1KPeyDdloPxJEdNKv8DCHIQABoMNjM3NDIzMTgzODA1Igyr6jFgOKB%2Ba1E%2FSDIq3ANC4yllc35IoCgxrqMcp48ihNL88z0hoXw8zGgambaUrwuC2D%2FQ%2FaYhMdLYFIDU1sezUW5%2FojH3ODdDsTF0B7MNVBQFBKKc6VCaYTxXQib1H4jyfosAbxqGU0y2jumIkzJMZGcmtA%2FWyfokOOSiegDGlSsYcR%2B92rco18XHu5vLZqXTjrYmx%2FINeG56OjOLJuh2f4R%2B0VtSQfmThTP9Nft1%2B4VBhljnHrwpkCWHp5Yb%2FUF7Mhf3wTLDp8pBkrF7QKt7ZD3IxEueowiQf%2FlIVGmQwa3xCZj3NaombUNlQdYF4GSYkJ%2FBaKcR23eBqtcyDFAZl9m%2FlNcjCdOReQQfJJA6DYYTgrdeI9ed2RgyWrTsdnRMQEAK2v0kvF%2BqzjI%2FT1ORczJOqAJJk0l48xNVg75kb0a4zmmmuslxnLf3XyH9YJ5xMgk%2FlJptKehcpLJ0vtoDTbkA%2B%2BwHIJg3hTzA0jmUKzq%2FKjTMoVdmlSiVliSP1K%2Fqirwi5m6q8wrH0gWM8VmNkHiJnMYwzFJP%2Fe6%2BS7nzWAID9WrpVaGOfSbzYbjmnj6YyMjWXnnAAmLqJKUJHIPTCjcflrEYcPvIQl6WOnDf4EMyph3jovfEa6q6GFIogZRQIk8%2FEGkgKj0AsTDcu9O%2FBjqkAS%2FDLDuxR25S2GFipNNPSpHZPwh%2Bm80qANhEXmnrLxQE9hJY0Na0q4BP400lhLjAZ4vqoKCiUNhm58r5edZJYoiMj9frBL9bGFpwUutof%2B5KVD9Rb%2FTYWfHTsL%2BBGJ3AbJ7Fx7e5S10lWmH%2Fq7b99iV4XvwSMjachK%2BtKA2WcV0sNJ6EIWO5MLcSrtoMeleROdU9RVznyDqeu3fDeUvNBuNw6NlW&X-Amz-Signature=f2f6632d29fd820fab1c0c63c96f4d68fdf9efa3d4129ab659dabc496f4dfd9a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WESR2PY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Qml3wXyX%2Bb6PlMfhTxy03EX57EO%2FW8z3Mp0O9y%2B1pAIhAL44wB6aE%2Fr5%2FylIAz6oEqPaylrNu1KPeyDdloPxJEdNKv8DCHIQABoMNjM3NDIzMTgzODA1Igyr6jFgOKB%2Ba1E%2FSDIq3ANC4yllc35IoCgxrqMcp48ihNL88z0hoXw8zGgambaUrwuC2D%2FQ%2FaYhMdLYFIDU1sezUW5%2FojH3ODdDsTF0B7MNVBQFBKKc6VCaYTxXQib1H4jyfosAbxqGU0y2jumIkzJMZGcmtA%2FWyfokOOSiegDGlSsYcR%2B92rco18XHu5vLZqXTjrYmx%2FINeG56OjOLJuh2f4R%2B0VtSQfmThTP9Nft1%2B4VBhljnHrwpkCWHp5Yb%2FUF7Mhf3wTLDp8pBkrF7QKt7ZD3IxEueowiQf%2FlIVGmQwa3xCZj3NaombUNlQdYF4GSYkJ%2FBaKcR23eBqtcyDFAZl9m%2FlNcjCdOReQQfJJA6DYYTgrdeI9ed2RgyWrTsdnRMQEAK2v0kvF%2BqzjI%2FT1ORczJOqAJJk0l48xNVg75kb0a4zmmmuslxnLf3XyH9YJ5xMgk%2FlJptKehcpLJ0vtoDTbkA%2B%2BwHIJg3hTzA0jmUKzq%2FKjTMoVdmlSiVliSP1K%2Fqirwi5m6q8wrH0gWM8VmNkHiJnMYwzFJP%2Fe6%2BS7nzWAID9WrpVaGOfSbzYbjmnj6YyMjWXnnAAmLqJKUJHIPTCjcflrEYcPvIQl6WOnDf4EMyph3jovfEa6q6GFIogZRQIk8%2FEGkgKj0AsTDcu9O%2FBjqkAS%2FDLDuxR25S2GFipNNPSpHZPwh%2Bm80qANhEXmnrLxQE9hJY0Na0q4BP400lhLjAZ4vqoKCiUNhm58r5edZJYoiMj9frBL9bGFpwUutof%2B5KVD9Rb%2FTYWfHTsL%2BBGJ3AbJ7Fx7e5S10lWmH%2Fq7b99iV4XvwSMjachK%2BtKA2WcV0sNJ6EIWO5MLcSrtoMeleROdU9RVznyDqeu3fDeUvNBuNw6NlW&X-Amz-Signature=49ab8b20fc6b50159525aec85ffd36c6b3022d911733e4efa3271fdc97f3778a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WESR2PY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Qml3wXyX%2Bb6PlMfhTxy03EX57EO%2FW8z3Mp0O9y%2B1pAIhAL44wB6aE%2Fr5%2FylIAz6oEqPaylrNu1KPeyDdloPxJEdNKv8DCHIQABoMNjM3NDIzMTgzODA1Igyr6jFgOKB%2Ba1E%2FSDIq3ANC4yllc35IoCgxrqMcp48ihNL88z0hoXw8zGgambaUrwuC2D%2FQ%2FaYhMdLYFIDU1sezUW5%2FojH3ODdDsTF0B7MNVBQFBKKc6VCaYTxXQib1H4jyfosAbxqGU0y2jumIkzJMZGcmtA%2FWyfokOOSiegDGlSsYcR%2B92rco18XHu5vLZqXTjrYmx%2FINeG56OjOLJuh2f4R%2B0VtSQfmThTP9Nft1%2B4VBhljnHrwpkCWHp5Yb%2FUF7Mhf3wTLDp8pBkrF7QKt7ZD3IxEueowiQf%2FlIVGmQwa3xCZj3NaombUNlQdYF4GSYkJ%2FBaKcR23eBqtcyDFAZl9m%2FlNcjCdOReQQfJJA6DYYTgrdeI9ed2RgyWrTsdnRMQEAK2v0kvF%2BqzjI%2FT1ORczJOqAJJk0l48xNVg75kb0a4zmmmuslxnLf3XyH9YJ5xMgk%2FlJptKehcpLJ0vtoDTbkA%2B%2BwHIJg3hTzA0jmUKzq%2FKjTMoVdmlSiVliSP1K%2Fqirwi5m6q8wrH0gWM8VmNkHiJnMYwzFJP%2Fe6%2BS7nzWAID9WrpVaGOfSbzYbjmnj6YyMjWXnnAAmLqJKUJHIPTCjcflrEYcPvIQl6WOnDf4EMyph3jovfEa6q6GFIogZRQIk8%2FEGkgKj0AsTDcu9O%2FBjqkAS%2FDLDuxR25S2GFipNNPSpHZPwh%2Bm80qANhEXmnrLxQE9hJY0Na0q4BP400lhLjAZ4vqoKCiUNhm58r5edZJYoiMj9frBL9bGFpwUutof%2B5KVD9Rb%2FTYWfHTsL%2BBGJ3AbJ7Fx7e5S10lWmH%2Fq7b99iV4XvwSMjachK%2BtKA2WcV0sNJ6EIWO5MLcSrtoMeleROdU9RVznyDqeu3fDeUvNBuNw6NlW&X-Amz-Signature=6ba30f7ca1997b23dbc945ca923ede50ef7488709470a1d1a33e29b680fbc0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WESR2PY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Qml3wXyX%2Bb6PlMfhTxy03EX57EO%2FW8z3Mp0O9y%2B1pAIhAL44wB6aE%2Fr5%2FylIAz6oEqPaylrNu1KPeyDdloPxJEdNKv8DCHIQABoMNjM3NDIzMTgzODA1Igyr6jFgOKB%2Ba1E%2FSDIq3ANC4yllc35IoCgxrqMcp48ihNL88z0hoXw8zGgambaUrwuC2D%2FQ%2FaYhMdLYFIDU1sezUW5%2FojH3ODdDsTF0B7MNVBQFBKKc6VCaYTxXQib1H4jyfosAbxqGU0y2jumIkzJMZGcmtA%2FWyfokOOSiegDGlSsYcR%2B92rco18XHu5vLZqXTjrYmx%2FINeG56OjOLJuh2f4R%2B0VtSQfmThTP9Nft1%2B4VBhljnHrwpkCWHp5Yb%2FUF7Mhf3wTLDp8pBkrF7QKt7ZD3IxEueowiQf%2FlIVGmQwa3xCZj3NaombUNlQdYF4GSYkJ%2FBaKcR23eBqtcyDFAZl9m%2FlNcjCdOReQQfJJA6DYYTgrdeI9ed2RgyWrTsdnRMQEAK2v0kvF%2BqzjI%2FT1ORczJOqAJJk0l48xNVg75kb0a4zmmmuslxnLf3XyH9YJ5xMgk%2FlJptKehcpLJ0vtoDTbkA%2B%2BwHIJg3hTzA0jmUKzq%2FKjTMoVdmlSiVliSP1K%2Fqirwi5m6q8wrH0gWM8VmNkHiJnMYwzFJP%2Fe6%2BS7nzWAID9WrpVaGOfSbzYbjmnj6YyMjWXnnAAmLqJKUJHIPTCjcflrEYcPvIQl6WOnDf4EMyph3jovfEa6q6GFIogZRQIk8%2FEGkgKj0AsTDcu9O%2FBjqkAS%2FDLDuxR25S2GFipNNPSpHZPwh%2Bm80qANhEXmnrLxQE9hJY0Na0q4BP400lhLjAZ4vqoKCiUNhm58r5edZJYoiMj9frBL9bGFpwUutof%2B5KVD9Rb%2FTYWfHTsL%2BBGJ3AbJ7Fx7e5S10lWmH%2Fq7b99iV4XvwSMjachK%2BtKA2WcV0sNJ6EIWO5MLcSrtoMeleROdU9RVznyDqeu3fDeUvNBuNw6NlW&X-Amz-Signature=8efd926f18baf7090dfb8482f9676fee603e962bb60b25b253697a5904afd75a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
