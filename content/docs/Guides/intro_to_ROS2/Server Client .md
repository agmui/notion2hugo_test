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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBQEVVG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH704aS8PkFwUQBi0B9S6IbtH80G%2BQ52lzRJikb16APBAiAfRCjehWJ4IaqrZQYJLls2srKlOtML%2FHOvdNG%2FFylpyCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsf8IHEeHsYrxktmZKtwDHlw5itH2tq7X3wYsW7ekyY1NEAFivFdPxoerSgvzh8zTxkrj51GP9wDa3xnscqRm2YIFWzcPsrpSWEi9JBU3PrjExfivqzD%2Br0t3KYJL8BF%2B5WMSjiVfaMZ61LusuwdMFfYru1bnBjlWTDe9OxBN3nUss%2BjIQeL%2FlEXC65hbR9wmQ3TgFG%2FjscubDeVgF03gBTHBbDTbhMe3nR3rhTmmGo8QucRCj2mJ29bC0vFlSjJAVfj%2F5wOGD7oKJS4TNWpL7mBNTVt6a%2BTbGR3pZWJAfoCO60fUVfyclguyXQPXbKr1tF8qhk6WjVt4h8A8taCy5XDHcDpY5A2conroishXxloNmNJ%2F2Dr9ycjgvbdQrcyuPlt8UrgYyW2SwAsEwhVa6X9yQSJ%2FcGsBotY19VjPvVZyZg%2BWnb%2FXhka%2BFFrvWbtgNAr%2Bc2zY%2FyRC1FL9lo7BwwYXRaQekhA45d%2B4LtYCBoLWKWnCSUb%2BSS6oNQ1EP1tFrqUgIOZcVZNZAsCeM1M2e4GrRz100MeQdddNZTl1cDA%2BCCFJTUjx1ljRCKzfGgfTmT1j2xsQMNnQRIgV3HJ0yANWpYdvRFRTS3VwI0wiRKqUflI3OxR6u50XplHQacNwu5zpCqZf%2F9qQ028w%2Bvr0vgY6pgFWzaMTi6y5UKw%2BdUsr8dg6GWK9pF9AZmoCFYMlkUbmLJkmMb6gdCeYuZW1Cd%2FUpf1qiPngfLjhYvTE2kPlHYuR%2Fw45XxiL3osq8AdKZU%2BKlyGFFPYIJbAtmxkO1SrMCXdXhF7BXBivRcQVfBkPd6D2SjzP62%2FLPzFS0HH9TqA04YT5HR3VuxuTCnJWC2VzUNNCZhdS1ZLCyOXVGus9EbfoNdlZI49i&X-Amz-Signature=fb410d9648ab4287a66631fd925c47d4d1baf78744c67359b3bd75de64d012c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBQEVVG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH704aS8PkFwUQBi0B9S6IbtH80G%2BQ52lzRJikb16APBAiAfRCjehWJ4IaqrZQYJLls2srKlOtML%2FHOvdNG%2FFylpyCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsf8IHEeHsYrxktmZKtwDHlw5itH2tq7X3wYsW7ekyY1NEAFivFdPxoerSgvzh8zTxkrj51GP9wDa3xnscqRm2YIFWzcPsrpSWEi9JBU3PrjExfivqzD%2Br0t3KYJL8BF%2B5WMSjiVfaMZ61LusuwdMFfYru1bnBjlWTDe9OxBN3nUss%2BjIQeL%2FlEXC65hbR9wmQ3TgFG%2FjscubDeVgF03gBTHBbDTbhMe3nR3rhTmmGo8QucRCj2mJ29bC0vFlSjJAVfj%2F5wOGD7oKJS4TNWpL7mBNTVt6a%2BTbGR3pZWJAfoCO60fUVfyclguyXQPXbKr1tF8qhk6WjVt4h8A8taCy5XDHcDpY5A2conroishXxloNmNJ%2F2Dr9ycjgvbdQrcyuPlt8UrgYyW2SwAsEwhVa6X9yQSJ%2FcGsBotY19VjPvVZyZg%2BWnb%2FXhka%2BFFrvWbtgNAr%2Bc2zY%2FyRC1FL9lo7BwwYXRaQekhA45d%2B4LtYCBoLWKWnCSUb%2BSS6oNQ1EP1tFrqUgIOZcVZNZAsCeM1M2e4GrRz100MeQdddNZTl1cDA%2BCCFJTUjx1ljRCKzfGgfTmT1j2xsQMNnQRIgV3HJ0yANWpYdvRFRTS3VwI0wiRKqUflI3OxR6u50XplHQacNwu5zpCqZf%2F9qQ028w%2Bvr0vgY6pgFWzaMTi6y5UKw%2BdUsr8dg6GWK9pF9AZmoCFYMlkUbmLJkmMb6gdCeYuZW1Cd%2FUpf1qiPngfLjhYvTE2kPlHYuR%2Fw45XxiL3osq8AdKZU%2BKlyGFFPYIJbAtmxkO1SrMCXdXhF7BXBivRcQVfBkPd6D2SjzP62%2FLPzFS0HH9TqA04YT5HR3VuxuTCnJWC2VzUNNCZhdS1ZLCyOXVGus9EbfoNdlZI49i&X-Amz-Signature=f0721d12159f62f103e8957396d88f8fcc4f16de809f8928791be254c13db079&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBQEVVG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH704aS8PkFwUQBi0B9S6IbtH80G%2BQ52lzRJikb16APBAiAfRCjehWJ4IaqrZQYJLls2srKlOtML%2FHOvdNG%2FFylpyCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsf8IHEeHsYrxktmZKtwDHlw5itH2tq7X3wYsW7ekyY1NEAFivFdPxoerSgvzh8zTxkrj51GP9wDa3xnscqRm2YIFWzcPsrpSWEi9JBU3PrjExfivqzD%2Br0t3KYJL8BF%2B5WMSjiVfaMZ61LusuwdMFfYru1bnBjlWTDe9OxBN3nUss%2BjIQeL%2FlEXC65hbR9wmQ3TgFG%2FjscubDeVgF03gBTHBbDTbhMe3nR3rhTmmGo8QucRCj2mJ29bC0vFlSjJAVfj%2F5wOGD7oKJS4TNWpL7mBNTVt6a%2BTbGR3pZWJAfoCO60fUVfyclguyXQPXbKr1tF8qhk6WjVt4h8A8taCy5XDHcDpY5A2conroishXxloNmNJ%2F2Dr9ycjgvbdQrcyuPlt8UrgYyW2SwAsEwhVa6X9yQSJ%2FcGsBotY19VjPvVZyZg%2BWnb%2FXhka%2BFFrvWbtgNAr%2Bc2zY%2FyRC1FL9lo7BwwYXRaQekhA45d%2B4LtYCBoLWKWnCSUb%2BSS6oNQ1EP1tFrqUgIOZcVZNZAsCeM1M2e4GrRz100MeQdddNZTl1cDA%2BCCFJTUjx1ljRCKzfGgfTmT1j2xsQMNnQRIgV3HJ0yANWpYdvRFRTS3VwI0wiRKqUflI3OxR6u50XplHQacNwu5zpCqZf%2F9qQ028w%2Bvr0vgY6pgFWzaMTi6y5UKw%2BdUsr8dg6GWK9pF9AZmoCFYMlkUbmLJkmMb6gdCeYuZW1Cd%2FUpf1qiPngfLjhYvTE2kPlHYuR%2Fw45XxiL3osq8AdKZU%2BKlyGFFPYIJbAtmxkO1SrMCXdXhF7BXBivRcQVfBkPd6D2SjzP62%2FLPzFS0HH9TqA04YT5HR3VuxuTCnJWC2VzUNNCZhdS1ZLCyOXVGus9EbfoNdlZI49i&X-Amz-Signature=b2248e85c356ad2373d6b318a468fc857988f355227e114e20d243f00e944a32&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBQEVVG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH704aS8PkFwUQBi0B9S6IbtH80G%2BQ52lzRJikb16APBAiAfRCjehWJ4IaqrZQYJLls2srKlOtML%2FHOvdNG%2FFylpyCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsf8IHEeHsYrxktmZKtwDHlw5itH2tq7X3wYsW7ekyY1NEAFivFdPxoerSgvzh8zTxkrj51GP9wDa3xnscqRm2YIFWzcPsrpSWEi9JBU3PrjExfivqzD%2Br0t3KYJL8BF%2B5WMSjiVfaMZ61LusuwdMFfYru1bnBjlWTDe9OxBN3nUss%2BjIQeL%2FlEXC65hbR9wmQ3TgFG%2FjscubDeVgF03gBTHBbDTbhMe3nR3rhTmmGo8QucRCj2mJ29bC0vFlSjJAVfj%2F5wOGD7oKJS4TNWpL7mBNTVt6a%2BTbGR3pZWJAfoCO60fUVfyclguyXQPXbKr1tF8qhk6WjVt4h8A8taCy5XDHcDpY5A2conroishXxloNmNJ%2F2Dr9ycjgvbdQrcyuPlt8UrgYyW2SwAsEwhVa6X9yQSJ%2FcGsBotY19VjPvVZyZg%2BWnb%2FXhka%2BFFrvWbtgNAr%2Bc2zY%2FyRC1FL9lo7BwwYXRaQekhA45d%2B4LtYCBoLWKWnCSUb%2BSS6oNQ1EP1tFrqUgIOZcVZNZAsCeM1M2e4GrRz100MeQdddNZTl1cDA%2BCCFJTUjx1ljRCKzfGgfTmT1j2xsQMNnQRIgV3HJ0yANWpYdvRFRTS3VwI0wiRKqUflI3OxR6u50XplHQacNwu5zpCqZf%2F9qQ028w%2Bvr0vgY6pgFWzaMTi6y5UKw%2BdUsr8dg6GWK9pF9AZmoCFYMlkUbmLJkmMb6gdCeYuZW1Cd%2FUpf1qiPngfLjhYvTE2kPlHYuR%2Fw45XxiL3osq8AdKZU%2BKlyGFFPYIJbAtmxkO1SrMCXdXhF7BXBivRcQVfBkPd6D2SjzP62%2FLPzFS0HH9TqA04YT5HR3VuxuTCnJWC2VzUNNCZhdS1ZLCyOXVGus9EbfoNdlZI49i&X-Amz-Signature=6660a6860e76b68e42da6e720eddc813aca116d04b765854b72ab079dcde38b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBQEVVG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH704aS8PkFwUQBi0B9S6IbtH80G%2BQ52lzRJikb16APBAiAfRCjehWJ4IaqrZQYJLls2srKlOtML%2FHOvdNG%2FFylpyCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsf8IHEeHsYrxktmZKtwDHlw5itH2tq7X3wYsW7ekyY1NEAFivFdPxoerSgvzh8zTxkrj51GP9wDa3xnscqRm2YIFWzcPsrpSWEi9JBU3PrjExfivqzD%2Br0t3KYJL8BF%2B5WMSjiVfaMZ61LusuwdMFfYru1bnBjlWTDe9OxBN3nUss%2BjIQeL%2FlEXC65hbR9wmQ3TgFG%2FjscubDeVgF03gBTHBbDTbhMe3nR3rhTmmGo8QucRCj2mJ29bC0vFlSjJAVfj%2F5wOGD7oKJS4TNWpL7mBNTVt6a%2BTbGR3pZWJAfoCO60fUVfyclguyXQPXbKr1tF8qhk6WjVt4h8A8taCy5XDHcDpY5A2conroishXxloNmNJ%2F2Dr9ycjgvbdQrcyuPlt8UrgYyW2SwAsEwhVa6X9yQSJ%2FcGsBotY19VjPvVZyZg%2BWnb%2FXhka%2BFFrvWbtgNAr%2Bc2zY%2FyRC1FL9lo7BwwYXRaQekhA45d%2B4LtYCBoLWKWnCSUb%2BSS6oNQ1EP1tFrqUgIOZcVZNZAsCeM1M2e4GrRz100MeQdddNZTl1cDA%2BCCFJTUjx1ljRCKzfGgfTmT1j2xsQMNnQRIgV3HJ0yANWpYdvRFRTS3VwI0wiRKqUflI3OxR6u50XplHQacNwu5zpCqZf%2F9qQ028w%2Bvr0vgY6pgFWzaMTi6y5UKw%2BdUsr8dg6GWK9pF9AZmoCFYMlkUbmLJkmMb6gdCeYuZW1Cd%2FUpf1qiPngfLjhYvTE2kPlHYuR%2Fw45XxiL3osq8AdKZU%2BKlyGFFPYIJbAtmxkO1SrMCXdXhF7BXBivRcQVfBkPd6D2SjzP62%2FLPzFS0HH9TqA04YT5HR3VuxuTCnJWC2VzUNNCZhdS1ZLCyOXVGus9EbfoNdlZI49i&X-Amz-Signature=c3312bc513aca83777435d41df366c7fecca2169ff1ceca8825489dedbe74e05&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
