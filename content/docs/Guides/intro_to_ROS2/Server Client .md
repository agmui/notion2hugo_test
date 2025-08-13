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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDUU3AE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiYioQGeanqRSICaROoG4XxDgYL9ewtoeHKcy1oOcFLAIhANIKHH%2FWbJiNz0otPiA3q%2Bes1uUjYQlW00ue52HEAsnWKv8DCCQQABoMNjM3NDIzMTgzODA1IgxxMaq4P68zvKeH5Scq3AOzV3bJ4N2%2B9RZOkfsoK4LmO13QkGY31qGj6kEUJMzFiUQueNTmvOuD2ivyKNhVk9j%2F1%2FmoTzyxNl3f4iHXT0LmVHYmOiCRZxe%2B16BfNnodpNYcymbH8fzKwYgWA9IAPCXgBmFrO9bBTWe53aoOblU8hNVx572ANzmIDVdC0CTrdMjGIdt0dx1MWAXb%2FJri0O1xm8SkqDU0YUjZgYowjkd8oQ6PQd%2B6M%2FKHH454tjO9YcdhciT0HCN%2BprUYJy0mQichIbX0B5EJz%2B3CBWw5nFUereJSgw1gA%2F6r4CIYUwu%2BgEE7npyBRtl8G8bxno6yhrqSFo9JZHxG7S7Kl%2B1o3tOKtOD4oEfHplJZO%2FAxqncvk7cpHEw0xSNFMMMB6FQowZgzURjPTs%2F0OE79Sborf245a7rqUSLObzL55Wv3lCttfsCEuMyLyt1cwGEtFYocsodr69Ekk7Z9Eji0reizOwMgkWC%2F%2FQpoiEFM6RwzALldBtJjoQKJ2gikmJ87p53tkOASdoDK2siwcEslblFenQPDF9XUU5aHuVJSWLn2xgeLqgkOfd3ls6CsbyQH4QIKETBTdI3zduAkOliF0KvI4VUVZ6Nj0Ksy1678z%2Felkimma6AXKpHJluDD0h0LdzDRhfDEBjqkAcHX6NYq4K%2B%2B2Zev%2BWnxazFO7Xa7znzelt7HXvQ4YX9ykvT4HnrAae7WppDRBXVaQpB70gOmMNTEwKB3TZMQTuRtGgjYjNDYwS0yB4gtvY0OXhPDph49c3OaAwaVgTOpvUjF1jwz19ohZJ33loNqnT9So5P8OeHc5af8rbU7%2BvQhnMPm63HWZHDIG%2FgY7ulTKsbxblryGWCdG%2Bz2h0KHZ6nqmqKX&X-Amz-Signature=e03c941b73b19eb86c9d9e371d99d681edb451e5c4a0af9436af60e909366551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDUU3AE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiYioQGeanqRSICaROoG4XxDgYL9ewtoeHKcy1oOcFLAIhANIKHH%2FWbJiNz0otPiA3q%2Bes1uUjYQlW00ue52HEAsnWKv8DCCQQABoMNjM3NDIzMTgzODA1IgxxMaq4P68zvKeH5Scq3AOzV3bJ4N2%2B9RZOkfsoK4LmO13QkGY31qGj6kEUJMzFiUQueNTmvOuD2ivyKNhVk9j%2F1%2FmoTzyxNl3f4iHXT0LmVHYmOiCRZxe%2B16BfNnodpNYcymbH8fzKwYgWA9IAPCXgBmFrO9bBTWe53aoOblU8hNVx572ANzmIDVdC0CTrdMjGIdt0dx1MWAXb%2FJri0O1xm8SkqDU0YUjZgYowjkd8oQ6PQd%2B6M%2FKHH454tjO9YcdhciT0HCN%2BprUYJy0mQichIbX0B5EJz%2B3CBWw5nFUereJSgw1gA%2F6r4CIYUwu%2BgEE7npyBRtl8G8bxno6yhrqSFo9JZHxG7S7Kl%2B1o3tOKtOD4oEfHplJZO%2FAxqncvk7cpHEw0xSNFMMMB6FQowZgzURjPTs%2F0OE79Sborf245a7rqUSLObzL55Wv3lCttfsCEuMyLyt1cwGEtFYocsodr69Ekk7Z9Eji0reizOwMgkWC%2F%2FQpoiEFM6RwzALldBtJjoQKJ2gikmJ87p53tkOASdoDK2siwcEslblFenQPDF9XUU5aHuVJSWLn2xgeLqgkOfd3ls6CsbyQH4QIKETBTdI3zduAkOliF0KvI4VUVZ6Nj0Ksy1678z%2Felkimma6AXKpHJluDD0h0LdzDRhfDEBjqkAcHX6NYq4K%2B%2B2Zev%2BWnxazFO7Xa7znzelt7HXvQ4YX9ykvT4HnrAae7WppDRBXVaQpB70gOmMNTEwKB3TZMQTuRtGgjYjNDYwS0yB4gtvY0OXhPDph49c3OaAwaVgTOpvUjF1jwz19ohZJ33loNqnT9So5P8OeHc5af8rbU7%2BvQhnMPm63HWZHDIG%2FgY7ulTKsbxblryGWCdG%2Bz2h0KHZ6nqmqKX&X-Amz-Signature=b4cca261221cfa4084d1470c5913a3dc79c2d26b6bca2911e90f833454e68c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDUU3AE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiYioQGeanqRSICaROoG4XxDgYL9ewtoeHKcy1oOcFLAIhANIKHH%2FWbJiNz0otPiA3q%2Bes1uUjYQlW00ue52HEAsnWKv8DCCQQABoMNjM3NDIzMTgzODA1IgxxMaq4P68zvKeH5Scq3AOzV3bJ4N2%2B9RZOkfsoK4LmO13QkGY31qGj6kEUJMzFiUQueNTmvOuD2ivyKNhVk9j%2F1%2FmoTzyxNl3f4iHXT0LmVHYmOiCRZxe%2B16BfNnodpNYcymbH8fzKwYgWA9IAPCXgBmFrO9bBTWe53aoOblU8hNVx572ANzmIDVdC0CTrdMjGIdt0dx1MWAXb%2FJri0O1xm8SkqDU0YUjZgYowjkd8oQ6PQd%2B6M%2FKHH454tjO9YcdhciT0HCN%2BprUYJy0mQichIbX0B5EJz%2B3CBWw5nFUereJSgw1gA%2F6r4CIYUwu%2BgEE7npyBRtl8G8bxno6yhrqSFo9JZHxG7S7Kl%2B1o3tOKtOD4oEfHplJZO%2FAxqncvk7cpHEw0xSNFMMMB6FQowZgzURjPTs%2F0OE79Sborf245a7rqUSLObzL55Wv3lCttfsCEuMyLyt1cwGEtFYocsodr69Ekk7Z9Eji0reizOwMgkWC%2F%2FQpoiEFM6RwzALldBtJjoQKJ2gikmJ87p53tkOASdoDK2siwcEslblFenQPDF9XUU5aHuVJSWLn2xgeLqgkOfd3ls6CsbyQH4QIKETBTdI3zduAkOliF0KvI4VUVZ6Nj0Ksy1678z%2Felkimma6AXKpHJluDD0h0LdzDRhfDEBjqkAcHX6NYq4K%2B%2B2Zev%2BWnxazFO7Xa7znzelt7HXvQ4YX9ykvT4HnrAae7WppDRBXVaQpB70gOmMNTEwKB3TZMQTuRtGgjYjNDYwS0yB4gtvY0OXhPDph49c3OaAwaVgTOpvUjF1jwz19ohZJ33loNqnT9So5P8OeHc5af8rbU7%2BvQhnMPm63HWZHDIG%2FgY7ulTKsbxblryGWCdG%2Bz2h0KHZ6nqmqKX&X-Amz-Signature=6bfc4a8f8417933884be5895a854301ac41ed9ddc2b73e109766a11f5e953ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDUU3AE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiYioQGeanqRSICaROoG4XxDgYL9ewtoeHKcy1oOcFLAIhANIKHH%2FWbJiNz0otPiA3q%2Bes1uUjYQlW00ue52HEAsnWKv8DCCQQABoMNjM3NDIzMTgzODA1IgxxMaq4P68zvKeH5Scq3AOzV3bJ4N2%2B9RZOkfsoK4LmO13QkGY31qGj6kEUJMzFiUQueNTmvOuD2ivyKNhVk9j%2F1%2FmoTzyxNl3f4iHXT0LmVHYmOiCRZxe%2B16BfNnodpNYcymbH8fzKwYgWA9IAPCXgBmFrO9bBTWe53aoOblU8hNVx572ANzmIDVdC0CTrdMjGIdt0dx1MWAXb%2FJri0O1xm8SkqDU0YUjZgYowjkd8oQ6PQd%2B6M%2FKHH454tjO9YcdhciT0HCN%2BprUYJy0mQichIbX0B5EJz%2B3CBWw5nFUereJSgw1gA%2F6r4CIYUwu%2BgEE7npyBRtl8G8bxno6yhrqSFo9JZHxG7S7Kl%2B1o3tOKtOD4oEfHplJZO%2FAxqncvk7cpHEw0xSNFMMMB6FQowZgzURjPTs%2F0OE79Sborf245a7rqUSLObzL55Wv3lCttfsCEuMyLyt1cwGEtFYocsodr69Ekk7Z9Eji0reizOwMgkWC%2F%2FQpoiEFM6RwzALldBtJjoQKJ2gikmJ87p53tkOASdoDK2siwcEslblFenQPDF9XUU5aHuVJSWLn2xgeLqgkOfd3ls6CsbyQH4QIKETBTdI3zduAkOliF0KvI4VUVZ6Nj0Ksy1678z%2Felkimma6AXKpHJluDD0h0LdzDRhfDEBjqkAcHX6NYq4K%2B%2B2Zev%2BWnxazFO7Xa7znzelt7HXvQ4YX9ykvT4HnrAae7WppDRBXVaQpB70gOmMNTEwKB3TZMQTuRtGgjYjNDYwS0yB4gtvY0OXhPDph49c3OaAwaVgTOpvUjF1jwz19ohZJ33loNqnT9So5P8OeHc5af8rbU7%2BvQhnMPm63HWZHDIG%2FgY7ulTKsbxblryGWCdG%2Bz2h0KHZ6nqmqKX&X-Amz-Signature=4d068fd3ad0e439aacecc8ad5335ba4a622c90309b7a73124ce31e37aec73499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDUU3AE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiYioQGeanqRSICaROoG4XxDgYL9ewtoeHKcy1oOcFLAIhANIKHH%2FWbJiNz0otPiA3q%2Bes1uUjYQlW00ue52HEAsnWKv8DCCQQABoMNjM3NDIzMTgzODA1IgxxMaq4P68zvKeH5Scq3AOzV3bJ4N2%2B9RZOkfsoK4LmO13QkGY31qGj6kEUJMzFiUQueNTmvOuD2ivyKNhVk9j%2F1%2FmoTzyxNl3f4iHXT0LmVHYmOiCRZxe%2B16BfNnodpNYcymbH8fzKwYgWA9IAPCXgBmFrO9bBTWe53aoOblU8hNVx572ANzmIDVdC0CTrdMjGIdt0dx1MWAXb%2FJri0O1xm8SkqDU0YUjZgYowjkd8oQ6PQd%2B6M%2FKHH454tjO9YcdhciT0HCN%2BprUYJy0mQichIbX0B5EJz%2B3CBWw5nFUereJSgw1gA%2F6r4CIYUwu%2BgEE7npyBRtl8G8bxno6yhrqSFo9JZHxG7S7Kl%2B1o3tOKtOD4oEfHplJZO%2FAxqncvk7cpHEw0xSNFMMMB6FQowZgzURjPTs%2F0OE79Sborf245a7rqUSLObzL55Wv3lCttfsCEuMyLyt1cwGEtFYocsodr69Ekk7Z9Eji0reizOwMgkWC%2F%2FQpoiEFM6RwzALldBtJjoQKJ2gikmJ87p53tkOASdoDK2siwcEslblFenQPDF9XUU5aHuVJSWLn2xgeLqgkOfd3ls6CsbyQH4QIKETBTdI3zduAkOliF0KvI4VUVZ6Nj0Ksy1678z%2Felkimma6AXKpHJluDD0h0LdzDRhfDEBjqkAcHX6NYq4K%2B%2B2Zev%2BWnxazFO7Xa7znzelt7HXvQ4YX9ykvT4HnrAae7WppDRBXVaQpB70gOmMNTEwKB3TZMQTuRtGgjYjNDYwS0yB4gtvY0OXhPDph49c3OaAwaVgTOpvUjF1jwz19ohZJ33loNqnT9So5P8OeHc5af8rbU7%2BvQhnMPm63HWZHDIG%2FgY7ulTKsbxblryGWCdG%2Bz2h0KHZ6nqmqKX&X-Amz-Signature=f7417514dd7c33f22ffb4f62326c5b3535d689614a5b9db9b8d13de8f94ecf70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
