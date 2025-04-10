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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXVQLVW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCU1oL653q5vaFwdjGnWOSecepvMQp8t7xdI1te6uMd0AIgZy14a2pq4PXXXY04WWlgqlYz5d7NTBbE8m1uaHoZfEAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0F9eAWGbfZeT2mZircA8uH6SYwNzSm63PA4DVjqYYhEScoxqXoa1jCgH0GQa7UOusuYoyA2vTcT9GlykIVZqaaeL4TZTS0mhezp9orjxm6F5ezxQyVeC7FBkYTYbMJOZS%2Fbjl8fuKK1ElKei6Z68B%2FJXb%2BoZj0CuiFJ1dbL%2FDfv6gM3LoPxwCWnLqzJ8FIV6b%2BYQNJlMuylHpahsHbnCDUvka5GONG6M2B2yNkEO6YX8wXAQWhflIF02mQES3gWQRCr4nvkvlOQWgztR%2FiEWmSQrsP4VIQxddzLatgEQC%2BCwyz9p86P87PRNUSHEOw635jbt87%2B96UBABJrbi8%2FkhOdriRDkfSfgiL7LzS6GRB%2BCSLKl9gLSSspUpYv65aHar%2Bynm0KHlG22tTCoe3v%2BB7vPYZk9wYmt31KjvRvewSHLfqaT1SY9UPMrOJS1yhn9RekJs27TU3k%2BhWfnNK1vakuZ%2F9sCOFXjs00I%2B%2BuxvqnpLa3X4fBgU%2B2yzBENN8j4X8dc0VvwTV6d1loHMQPB%2FSnDxRczy493upyy8JCg7x7oi0DCN7n4pORq%2BfbbQjtz1SjQemfnCjc1CjoOqwtKUzqtiH1TmghCOJuuR9S9okC8NkqueB2NTZ8Vum1SkzvOBODrATDGh%2FtClGMKiz4L8GOqUB1kjY2un6dDEhjQC0aJC9mQjPXYP5WiuZu2VotETuIY7XSpHrAxi0Lo8EsYQpvTZNjX7kOjjQeIkSTmt4w7Tz8NX1EQfB9%2Fceo%2BGer%2B00C2qNdCluYNHTPRtemwUloffxYVNql6zMsRJfa13DL3dwgNWmoDxFUyb4BEygBLNQvDIZkZbX50jGe3vjBwUPrTYz%2FbUjnJbI9zg6VwHr4Ief77lXHtLc&X-Amz-Signature=13a2b8dc7021686b8f3ead877a285c5cf397212fe11d23637de15e2ecc2f7d41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXVQLVW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCU1oL653q5vaFwdjGnWOSecepvMQp8t7xdI1te6uMd0AIgZy14a2pq4PXXXY04WWlgqlYz5d7NTBbE8m1uaHoZfEAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0F9eAWGbfZeT2mZircA8uH6SYwNzSm63PA4DVjqYYhEScoxqXoa1jCgH0GQa7UOusuYoyA2vTcT9GlykIVZqaaeL4TZTS0mhezp9orjxm6F5ezxQyVeC7FBkYTYbMJOZS%2Fbjl8fuKK1ElKei6Z68B%2FJXb%2BoZj0CuiFJ1dbL%2FDfv6gM3LoPxwCWnLqzJ8FIV6b%2BYQNJlMuylHpahsHbnCDUvka5GONG6M2B2yNkEO6YX8wXAQWhflIF02mQES3gWQRCr4nvkvlOQWgztR%2FiEWmSQrsP4VIQxddzLatgEQC%2BCwyz9p86P87PRNUSHEOw635jbt87%2B96UBABJrbi8%2FkhOdriRDkfSfgiL7LzS6GRB%2BCSLKl9gLSSspUpYv65aHar%2Bynm0KHlG22tTCoe3v%2BB7vPYZk9wYmt31KjvRvewSHLfqaT1SY9UPMrOJS1yhn9RekJs27TU3k%2BhWfnNK1vakuZ%2F9sCOFXjs00I%2B%2BuxvqnpLa3X4fBgU%2B2yzBENN8j4X8dc0VvwTV6d1loHMQPB%2FSnDxRczy493upyy8JCg7x7oi0DCN7n4pORq%2BfbbQjtz1SjQemfnCjc1CjoOqwtKUzqtiH1TmghCOJuuR9S9okC8NkqueB2NTZ8Vum1SkzvOBODrATDGh%2FtClGMKiz4L8GOqUB1kjY2un6dDEhjQC0aJC9mQjPXYP5WiuZu2VotETuIY7XSpHrAxi0Lo8EsYQpvTZNjX7kOjjQeIkSTmt4w7Tz8NX1EQfB9%2Fceo%2BGer%2B00C2qNdCluYNHTPRtemwUloffxYVNql6zMsRJfa13DL3dwgNWmoDxFUyb4BEygBLNQvDIZkZbX50jGe3vjBwUPrTYz%2FbUjnJbI9zg6VwHr4Ief77lXHtLc&X-Amz-Signature=a95080a0b0b49b5bf722d5d75db45dc1fb46416484cc986a10b1575272f0763b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXVQLVW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCU1oL653q5vaFwdjGnWOSecepvMQp8t7xdI1te6uMd0AIgZy14a2pq4PXXXY04WWlgqlYz5d7NTBbE8m1uaHoZfEAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0F9eAWGbfZeT2mZircA8uH6SYwNzSm63PA4DVjqYYhEScoxqXoa1jCgH0GQa7UOusuYoyA2vTcT9GlykIVZqaaeL4TZTS0mhezp9orjxm6F5ezxQyVeC7FBkYTYbMJOZS%2Fbjl8fuKK1ElKei6Z68B%2FJXb%2BoZj0CuiFJ1dbL%2FDfv6gM3LoPxwCWnLqzJ8FIV6b%2BYQNJlMuylHpahsHbnCDUvka5GONG6M2B2yNkEO6YX8wXAQWhflIF02mQES3gWQRCr4nvkvlOQWgztR%2FiEWmSQrsP4VIQxddzLatgEQC%2BCwyz9p86P87PRNUSHEOw635jbt87%2B96UBABJrbi8%2FkhOdriRDkfSfgiL7LzS6GRB%2BCSLKl9gLSSspUpYv65aHar%2Bynm0KHlG22tTCoe3v%2BB7vPYZk9wYmt31KjvRvewSHLfqaT1SY9UPMrOJS1yhn9RekJs27TU3k%2BhWfnNK1vakuZ%2F9sCOFXjs00I%2B%2BuxvqnpLa3X4fBgU%2B2yzBENN8j4X8dc0VvwTV6d1loHMQPB%2FSnDxRczy493upyy8JCg7x7oi0DCN7n4pORq%2BfbbQjtz1SjQemfnCjc1CjoOqwtKUzqtiH1TmghCOJuuR9S9okC8NkqueB2NTZ8Vum1SkzvOBODrATDGh%2FtClGMKiz4L8GOqUB1kjY2un6dDEhjQC0aJC9mQjPXYP5WiuZu2VotETuIY7XSpHrAxi0Lo8EsYQpvTZNjX7kOjjQeIkSTmt4w7Tz8NX1EQfB9%2Fceo%2BGer%2B00C2qNdCluYNHTPRtemwUloffxYVNql6zMsRJfa13DL3dwgNWmoDxFUyb4BEygBLNQvDIZkZbX50jGe3vjBwUPrTYz%2FbUjnJbI9zg6VwHr4Ief77lXHtLc&X-Amz-Signature=8f8aba74cc132420b81bcb7ec0d89d78f284161311d4093add7f0996d7e843fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXVQLVW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCU1oL653q5vaFwdjGnWOSecepvMQp8t7xdI1te6uMd0AIgZy14a2pq4PXXXY04WWlgqlYz5d7NTBbE8m1uaHoZfEAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0F9eAWGbfZeT2mZircA8uH6SYwNzSm63PA4DVjqYYhEScoxqXoa1jCgH0GQa7UOusuYoyA2vTcT9GlykIVZqaaeL4TZTS0mhezp9orjxm6F5ezxQyVeC7FBkYTYbMJOZS%2Fbjl8fuKK1ElKei6Z68B%2FJXb%2BoZj0CuiFJ1dbL%2FDfv6gM3LoPxwCWnLqzJ8FIV6b%2BYQNJlMuylHpahsHbnCDUvka5GONG6M2B2yNkEO6YX8wXAQWhflIF02mQES3gWQRCr4nvkvlOQWgztR%2FiEWmSQrsP4VIQxddzLatgEQC%2BCwyz9p86P87PRNUSHEOw635jbt87%2B96UBABJrbi8%2FkhOdriRDkfSfgiL7LzS6GRB%2BCSLKl9gLSSspUpYv65aHar%2Bynm0KHlG22tTCoe3v%2BB7vPYZk9wYmt31KjvRvewSHLfqaT1SY9UPMrOJS1yhn9RekJs27TU3k%2BhWfnNK1vakuZ%2F9sCOFXjs00I%2B%2BuxvqnpLa3X4fBgU%2B2yzBENN8j4X8dc0VvwTV6d1loHMQPB%2FSnDxRczy493upyy8JCg7x7oi0DCN7n4pORq%2BfbbQjtz1SjQemfnCjc1CjoOqwtKUzqtiH1TmghCOJuuR9S9okC8NkqueB2NTZ8Vum1SkzvOBODrATDGh%2FtClGMKiz4L8GOqUB1kjY2un6dDEhjQC0aJC9mQjPXYP5WiuZu2VotETuIY7XSpHrAxi0Lo8EsYQpvTZNjX7kOjjQeIkSTmt4w7Tz8NX1EQfB9%2Fceo%2BGer%2B00C2qNdCluYNHTPRtemwUloffxYVNql6zMsRJfa13DL3dwgNWmoDxFUyb4BEygBLNQvDIZkZbX50jGe3vjBwUPrTYz%2FbUjnJbI9zg6VwHr4Ief77lXHtLc&X-Amz-Signature=219d0e5f2fc4f377b0addc578f15295bdc6e9fa2e302b7da292cf41b629dac36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXVQLVW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCU1oL653q5vaFwdjGnWOSecepvMQp8t7xdI1te6uMd0AIgZy14a2pq4PXXXY04WWlgqlYz5d7NTBbE8m1uaHoZfEAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0F9eAWGbfZeT2mZircA8uH6SYwNzSm63PA4DVjqYYhEScoxqXoa1jCgH0GQa7UOusuYoyA2vTcT9GlykIVZqaaeL4TZTS0mhezp9orjxm6F5ezxQyVeC7FBkYTYbMJOZS%2Fbjl8fuKK1ElKei6Z68B%2FJXb%2BoZj0CuiFJ1dbL%2FDfv6gM3LoPxwCWnLqzJ8FIV6b%2BYQNJlMuylHpahsHbnCDUvka5GONG6M2B2yNkEO6YX8wXAQWhflIF02mQES3gWQRCr4nvkvlOQWgztR%2FiEWmSQrsP4VIQxddzLatgEQC%2BCwyz9p86P87PRNUSHEOw635jbt87%2B96UBABJrbi8%2FkhOdriRDkfSfgiL7LzS6GRB%2BCSLKl9gLSSspUpYv65aHar%2Bynm0KHlG22tTCoe3v%2BB7vPYZk9wYmt31KjvRvewSHLfqaT1SY9UPMrOJS1yhn9RekJs27TU3k%2BhWfnNK1vakuZ%2F9sCOFXjs00I%2B%2BuxvqnpLa3X4fBgU%2B2yzBENN8j4X8dc0VvwTV6d1loHMQPB%2FSnDxRczy493upyy8JCg7x7oi0DCN7n4pORq%2BfbbQjtz1SjQemfnCjc1CjoOqwtKUzqtiH1TmghCOJuuR9S9okC8NkqueB2NTZ8Vum1SkzvOBODrATDGh%2FtClGMKiz4L8GOqUB1kjY2un6dDEhjQC0aJC9mQjPXYP5WiuZu2VotETuIY7XSpHrAxi0Lo8EsYQpvTZNjX7kOjjQeIkSTmt4w7Tz8NX1EQfB9%2Fceo%2BGer%2B00C2qNdCluYNHTPRtemwUloffxYVNql6zMsRJfa13DL3dwgNWmoDxFUyb4BEygBLNQvDIZkZbX50jGe3vjBwUPrTYz%2FbUjnJbI9zg6VwHr4Ief77lXHtLc&X-Amz-Signature=4711455cb28462f8820b2ec170ef23b500757d5c05bd7f3ff3f7864203c0c90b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
