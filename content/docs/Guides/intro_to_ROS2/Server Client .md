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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QABUGOMB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4uQFiQeFY8JcCAuRboiM9aUaWaCiV128tfUpBb0Oo8AiB1eqhbZNdHU94nS0exMNZjbDC0s44zt4yRHT%2B5I%2F8w4Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMfMM2swwoh6OGtSF3KtwD%2BosX9sxftuKU59ARUb7UGz33iKHxw40niRu8khhMIdF3BUmMA2wApFsbJJ%2B8ZSwOxAkdM9xiNW6mRlFWON7XBjsqYUsk71q%2B1LREWDZvKuGPGd6KTXrZI%2BBf2WYtdMxRIfowM40MHDBMpzv9DMFVf%2F7gZo4J%2Bu8JekZ2%2FzWEPFBRs5o1n4JCOtXIxRYbmTR5wqXCClFzzEErcKez4Q9h4AvQlG49rllYmqdphCwiu6yQWDfusQqbVxtcN5X%2BB0Cf0sD7flOFaA2%2B7ZYs8pPvcL7coAreC6oY%2BKZcghS7xydQxWoDq7EL3w1NhtMNevPIZe7Jph%2Bo7MJDAYraOxpBR9EWyJgDWckek0AiAODWLm%2BXIMGdQRXVLmEtn3c7NFCoOx5kbWLrKlTuEceir9I%2FR6sU%2B%2FDSnJLTX%2FRqHUsx1o6wBIl6FfqkEkxIYoEdikn%2BEysX2enzL%2FftnH%2BvAjmZMrGVSyuZCVLKaqy4f4BN%2FWx2jLEjE8CZFpvfKp896otTLdBuVUrMz6krO%2BCQQJqm9wvLl3thXFS0r7v0FLHnozM5%2FLA%2FYYdbZLR8bjQcoTNtmVyRCuE5%2Fdp06nppkEkIMyU10sV8ylE2M%2B20C8HrLjOCxhbyY%2BEaBrDFr3gwsPqBwAY6pgHnTyi664iO3sgn8NUiAWnURPaOyABgL0MdO%2BbCPWstyVNcfU%2BQ1w12MY1YFskI9QVNBfjuYvY8FWEjX44UUFbb42R55VUj6Go4V5x5O%2BdZg1CrJ4ilgQtZiHaitLYHUqALjRkagqpf09SD4TZycpoTR6NdOKn88oqXTt6gigVBJ7dn8C1PsO1WWkYrOX%2F7F7AwgQlDT8ZkjONDUGuMNgBeIx0jPByJ&X-Amz-Signature=e741be028111d69e29a774227e94b70c9c4af123a222b29a1fddc661ea32ae0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QABUGOMB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4uQFiQeFY8JcCAuRboiM9aUaWaCiV128tfUpBb0Oo8AiB1eqhbZNdHU94nS0exMNZjbDC0s44zt4yRHT%2B5I%2F8w4Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMfMM2swwoh6OGtSF3KtwD%2BosX9sxftuKU59ARUb7UGz33iKHxw40niRu8khhMIdF3BUmMA2wApFsbJJ%2B8ZSwOxAkdM9xiNW6mRlFWON7XBjsqYUsk71q%2B1LREWDZvKuGPGd6KTXrZI%2BBf2WYtdMxRIfowM40MHDBMpzv9DMFVf%2F7gZo4J%2Bu8JekZ2%2FzWEPFBRs5o1n4JCOtXIxRYbmTR5wqXCClFzzEErcKez4Q9h4AvQlG49rllYmqdphCwiu6yQWDfusQqbVxtcN5X%2BB0Cf0sD7flOFaA2%2B7ZYs8pPvcL7coAreC6oY%2BKZcghS7xydQxWoDq7EL3w1NhtMNevPIZe7Jph%2Bo7MJDAYraOxpBR9EWyJgDWckek0AiAODWLm%2BXIMGdQRXVLmEtn3c7NFCoOx5kbWLrKlTuEceir9I%2FR6sU%2B%2FDSnJLTX%2FRqHUsx1o6wBIl6FfqkEkxIYoEdikn%2BEysX2enzL%2FftnH%2BvAjmZMrGVSyuZCVLKaqy4f4BN%2FWx2jLEjE8CZFpvfKp896otTLdBuVUrMz6krO%2BCQQJqm9wvLl3thXFS0r7v0FLHnozM5%2FLA%2FYYdbZLR8bjQcoTNtmVyRCuE5%2Fdp06nppkEkIMyU10sV8ylE2M%2B20C8HrLjOCxhbyY%2BEaBrDFr3gwsPqBwAY6pgHnTyi664iO3sgn8NUiAWnURPaOyABgL0MdO%2BbCPWstyVNcfU%2BQ1w12MY1YFskI9QVNBfjuYvY8FWEjX44UUFbb42R55VUj6Go4V5x5O%2BdZg1CrJ4ilgQtZiHaitLYHUqALjRkagqpf09SD4TZycpoTR6NdOKn88oqXTt6gigVBJ7dn8C1PsO1WWkYrOX%2F7F7AwgQlDT8ZkjONDUGuMNgBeIx0jPByJ&X-Amz-Signature=642cff65503aadbcd1970d94ee3bf2f91584e205e81debce74fc5fdd34769856&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QABUGOMB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4uQFiQeFY8JcCAuRboiM9aUaWaCiV128tfUpBb0Oo8AiB1eqhbZNdHU94nS0exMNZjbDC0s44zt4yRHT%2B5I%2F8w4Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMfMM2swwoh6OGtSF3KtwD%2BosX9sxftuKU59ARUb7UGz33iKHxw40niRu8khhMIdF3BUmMA2wApFsbJJ%2B8ZSwOxAkdM9xiNW6mRlFWON7XBjsqYUsk71q%2B1LREWDZvKuGPGd6KTXrZI%2BBf2WYtdMxRIfowM40MHDBMpzv9DMFVf%2F7gZo4J%2Bu8JekZ2%2FzWEPFBRs5o1n4JCOtXIxRYbmTR5wqXCClFzzEErcKez4Q9h4AvQlG49rllYmqdphCwiu6yQWDfusQqbVxtcN5X%2BB0Cf0sD7flOFaA2%2B7ZYs8pPvcL7coAreC6oY%2BKZcghS7xydQxWoDq7EL3w1NhtMNevPIZe7Jph%2Bo7MJDAYraOxpBR9EWyJgDWckek0AiAODWLm%2BXIMGdQRXVLmEtn3c7NFCoOx5kbWLrKlTuEceir9I%2FR6sU%2B%2FDSnJLTX%2FRqHUsx1o6wBIl6FfqkEkxIYoEdikn%2BEysX2enzL%2FftnH%2BvAjmZMrGVSyuZCVLKaqy4f4BN%2FWx2jLEjE8CZFpvfKp896otTLdBuVUrMz6krO%2BCQQJqm9wvLl3thXFS0r7v0FLHnozM5%2FLA%2FYYdbZLR8bjQcoTNtmVyRCuE5%2Fdp06nppkEkIMyU10sV8ylE2M%2B20C8HrLjOCxhbyY%2BEaBrDFr3gwsPqBwAY6pgHnTyi664iO3sgn8NUiAWnURPaOyABgL0MdO%2BbCPWstyVNcfU%2BQ1w12MY1YFskI9QVNBfjuYvY8FWEjX44UUFbb42R55VUj6Go4V5x5O%2BdZg1CrJ4ilgQtZiHaitLYHUqALjRkagqpf09SD4TZycpoTR6NdOKn88oqXTt6gigVBJ7dn8C1PsO1WWkYrOX%2F7F7AwgQlDT8ZkjONDUGuMNgBeIx0jPByJ&X-Amz-Signature=d20def26ed3a53f477a52995c73da1e7af72be0dc55793060c14972f932f35fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QABUGOMB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4uQFiQeFY8JcCAuRboiM9aUaWaCiV128tfUpBb0Oo8AiB1eqhbZNdHU94nS0exMNZjbDC0s44zt4yRHT%2B5I%2F8w4Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMfMM2swwoh6OGtSF3KtwD%2BosX9sxftuKU59ARUb7UGz33iKHxw40niRu8khhMIdF3BUmMA2wApFsbJJ%2B8ZSwOxAkdM9xiNW6mRlFWON7XBjsqYUsk71q%2B1LREWDZvKuGPGd6KTXrZI%2BBf2WYtdMxRIfowM40MHDBMpzv9DMFVf%2F7gZo4J%2Bu8JekZ2%2FzWEPFBRs5o1n4JCOtXIxRYbmTR5wqXCClFzzEErcKez4Q9h4AvQlG49rllYmqdphCwiu6yQWDfusQqbVxtcN5X%2BB0Cf0sD7flOFaA2%2B7ZYs8pPvcL7coAreC6oY%2BKZcghS7xydQxWoDq7EL3w1NhtMNevPIZe7Jph%2Bo7MJDAYraOxpBR9EWyJgDWckek0AiAODWLm%2BXIMGdQRXVLmEtn3c7NFCoOx5kbWLrKlTuEceir9I%2FR6sU%2B%2FDSnJLTX%2FRqHUsx1o6wBIl6FfqkEkxIYoEdikn%2BEysX2enzL%2FftnH%2BvAjmZMrGVSyuZCVLKaqy4f4BN%2FWx2jLEjE8CZFpvfKp896otTLdBuVUrMz6krO%2BCQQJqm9wvLl3thXFS0r7v0FLHnozM5%2FLA%2FYYdbZLR8bjQcoTNtmVyRCuE5%2Fdp06nppkEkIMyU10sV8ylE2M%2B20C8HrLjOCxhbyY%2BEaBrDFr3gwsPqBwAY6pgHnTyi664iO3sgn8NUiAWnURPaOyABgL0MdO%2BbCPWstyVNcfU%2BQ1w12MY1YFskI9QVNBfjuYvY8FWEjX44UUFbb42R55VUj6Go4V5x5O%2BdZg1CrJ4ilgQtZiHaitLYHUqALjRkagqpf09SD4TZycpoTR6NdOKn88oqXTt6gigVBJ7dn8C1PsO1WWkYrOX%2F7F7AwgQlDT8ZkjONDUGuMNgBeIx0jPByJ&X-Amz-Signature=64869d1ca4b3e1bf4a0a1c7bf43d2463ce8089df46db55370f879f9a1c3df9db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QABUGOMB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4uQFiQeFY8JcCAuRboiM9aUaWaCiV128tfUpBb0Oo8AiB1eqhbZNdHU94nS0exMNZjbDC0s44zt4yRHT%2B5I%2F8w4Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMfMM2swwoh6OGtSF3KtwD%2BosX9sxftuKU59ARUb7UGz33iKHxw40niRu8khhMIdF3BUmMA2wApFsbJJ%2B8ZSwOxAkdM9xiNW6mRlFWON7XBjsqYUsk71q%2B1LREWDZvKuGPGd6KTXrZI%2BBf2WYtdMxRIfowM40MHDBMpzv9DMFVf%2F7gZo4J%2Bu8JekZ2%2FzWEPFBRs5o1n4JCOtXIxRYbmTR5wqXCClFzzEErcKez4Q9h4AvQlG49rllYmqdphCwiu6yQWDfusQqbVxtcN5X%2BB0Cf0sD7flOFaA2%2B7ZYs8pPvcL7coAreC6oY%2BKZcghS7xydQxWoDq7EL3w1NhtMNevPIZe7Jph%2Bo7MJDAYraOxpBR9EWyJgDWckek0AiAODWLm%2BXIMGdQRXVLmEtn3c7NFCoOx5kbWLrKlTuEceir9I%2FR6sU%2B%2FDSnJLTX%2FRqHUsx1o6wBIl6FfqkEkxIYoEdikn%2BEysX2enzL%2FftnH%2BvAjmZMrGVSyuZCVLKaqy4f4BN%2FWx2jLEjE8CZFpvfKp896otTLdBuVUrMz6krO%2BCQQJqm9wvLl3thXFS0r7v0FLHnozM5%2FLA%2FYYdbZLR8bjQcoTNtmVyRCuE5%2Fdp06nppkEkIMyU10sV8ylE2M%2B20C8HrLjOCxhbyY%2BEaBrDFr3gwsPqBwAY6pgHnTyi664iO3sgn8NUiAWnURPaOyABgL0MdO%2BbCPWstyVNcfU%2BQ1w12MY1YFskI9QVNBfjuYvY8FWEjX44UUFbb42R55VUj6Go4V5x5O%2BdZg1CrJ4ilgQtZiHaitLYHUqALjRkagqpf09SD4TZycpoTR6NdOKn88oqXTt6gigVBJ7dn8C1PsO1WWkYrOX%2F7F7AwgQlDT8ZkjONDUGuMNgBeIx0jPByJ&X-Amz-Signature=824acd93bcd9fbd446e2f5dde6024dc73c3893f1f367bcd4dc11dc63866e43ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
