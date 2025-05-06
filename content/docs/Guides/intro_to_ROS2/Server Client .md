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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT3OI72%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRrLNpbZ0O470a%2BHrK8J3DHLVOD0NhWIljJzI7DvTJLAiA0Jl0jBG1iEZZcF%2FUFfTMs4Z6JyakJhAKr%2F3UMtTXMASr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2F5OjORpI3IGzZEgOKtwDdxcUg4m6ddH3hjE4zprt5W6V68LcuPcnYmmqea%2BZjnbI2F2X87J2CiH53lKpXPNB02XYkHXal4s%2B4%2Bw8I9V01DJhJjEf34cxnGNaPDyJfKMV5tzRky%2FLlZekXg7%2BjXND8KOSdbKCUmPQjzKxiIQzY9H7eNXSQ0bznzSBqbtLIA04N3egFciluYyxcn9kYO1YZ6nYSNlW72FkuQgm6S8HH3R4daUPw6NXmK4GqMjO9XhMwfPYv%2BFagh97KuuNmB2SgBv6HFyxonbah3ZsYh5IpzUjSsRVjPGjhaDYJGi7qF9xnMjFTX85OGmetGIlLHH8H%2F8cEt9i6ZEshnbrO3kUoEjIstkXHtrmMeuKfAqAKSyjBpF4yDHiH9mNXTpZnS4AzYyc4MfNlQaIkwgQ2hXVmA3JTqV%2FCdG%2BFNZ0%2BNvwGc8iLK0LQPBbUxrJkvxKw42HNlbLoKlB%2B00hl1rBONyrzIp7g0KV5qo4qOsjclnnIHGw%2FTcmV5bo8w7ljaeTLM2aAY9C7JQiHMOuDEceE%2FFf5RdMYkCzhFUCeCLWBOedCACRBF2d6IUedrrI5cyPH9JXavUpre2lc8aCepD6y%2FvZsL%2BaD7ug5ynURelGS1fDq8IIjg%2FO2oKOPJQ1MKYwwtXmwAY6pgEy1heBM7x%2FLiiYON1gYGXfiJ9a%2BAWcLFtswKm5WkgKwzj%2BljhigN4JJKBeIkH4HMbbqK0DbzOgfXWTx5ngaLMqzz8Yux3bGkIttNfta2hbEFjjJw3mrC9juP3rQues1J%2F1lEDY6oyrqaakT8XqsK%2BcEsgA0ZK4zTyT284ZehQLJbOvHAqd2xugf7l10a9UUrAhjAKM76dvN3z0us6rMn8hwe9Q4SSH&X-Amz-Signature=bab16c368047e4be11a24cbd4627c30e4e794eab99cfdd06d6df1e265e4b5727&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT3OI72%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRrLNpbZ0O470a%2BHrK8J3DHLVOD0NhWIljJzI7DvTJLAiA0Jl0jBG1iEZZcF%2FUFfTMs4Z6JyakJhAKr%2F3UMtTXMASr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2F5OjORpI3IGzZEgOKtwDdxcUg4m6ddH3hjE4zprt5W6V68LcuPcnYmmqea%2BZjnbI2F2X87J2CiH53lKpXPNB02XYkHXal4s%2B4%2Bw8I9V01DJhJjEf34cxnGNaPDyJfKMV5tzRky%2FLlZekXg7%2BjXND8KOSdbKCUmPQjzKxiIQzY9H7eNXSQ0bznzSBqbtLIA04N3egFciluYyxcn9kYO1YZ6nYSNlW72FkuQgm6S8HH3R4daUPw6NXmK4GqMjO9XhMwfPYv%2BFagh97KuuNmB2SgBv6HFyxonbah3ZsYh5IpzUjSsRVjPGjhaDYJGi7qF9xnMjFTX85OGmetGIlLHH8H%2F8cEt9i6ZEshnbrO3kUoEjIstkXHtrmMeuKfAqAKSyjBpF4yDHiH9mNXTpZnS4AzYyc4MfNlQaIkwgQ2hXVmA3JTqV%2FCdG%2BFNZ0%2BNvwGc8iLK0LQPBbUxrJkvxKw42HNlbLoKlB%2B00hl1rBONyrzIp7g0KV5qo4qOsjclnnIHGw%2FTcmV5bo8w7ljaeTLM2aAY9C7JQiHMOuDEceE%2FFf5RdMYkCzhFUCeCLWBOedCACRBF2d6IUedrrI5cyPH9JXavUpre2lc8aCepD6y%2FvZsL%2BaD7ug5ynURelGS1fDq8IIjg%2FO2oKOPJQ1MKYwwtXmwAY6pgEy1heBM7x%2FLiiYON1gYGXfiJ9a%2BAWcLFtswKm5WkgKwzj%2BljhigN4JJKBeIkH4HMbbqK0DbzOgfXWTx5ngaLMqzz8Yux3bGkIttNfta2hbEFjjJw3mrC9juP3rQues1J%2F1lEDY6oyrqaakT8XqsK%2BcEsgA0ZK4zTyT284ZehQLJbOvHAqd2xugf7l10a9UUrAhjAKM76dvN3z0us6rMn8hwe9Q4SSH&X-Amz-Signature=81b3108b6757e57af4ec372cf66d497928b7cd18a790fd3336ae75328178079f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT3OI72%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRrLNpbZ0O470a%2BHrK8J3DHLVOD0NhWIljJzI7DvTJLAiA0Jl0jBG1iEZZcF%2FUFfTMs4Z6JyakJhAKr%2F3UMtTXMASr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2F5OjORpI3IGzZEgOKtwDdxcUg4m6ddH3hjE4zprt5W6V68LcuPcnYmmqea%2BZjnbI2F2X87J2CiH53lKpXPNB02XYkHXal4s%2B4%2Bw8I9V01DJhJjEf34cxnGNaPDyJfKMV5tzRky%2FLlZekXg7%2BjXND8KOSdbKCUmPQjzKxiIQzY9H7eNXSQ0bznzSBqbtLIA04N3egFciluYyxcn9kYO1YZ6nYSNlW72FkuQgm6S8HH3R4daUPw6NXmK4GqMjO9XhMwfPYv%2BFagh97KuuNmB2SgBv6HFyxonbah3ZsYh5IpzUjSsRVjPGjhaDYJGi7qF9xnMjFTX85OGmetGIlLHH8H%2F8cEt9i6ZEshnbrO3kUoEjIstkXHtrmMeuKfAqAKSyjBpF4yDHiH9mNXTpZnS4AzYyc4MfNlQaIkwgQ2hXVmA3JTqV%2FCdG%2BFNZ0%2BNvwGc8iLK0LQPBbUxrJkvxKw42HNlbLoKlB%2B00hl1rBONyrzIp7g0KV5qo4qOsjclnnIHGw%2FTcmV5bo8w7ljaeTLM2aAY9C7JQiHMOuDEceE%2FFf5RdMYkCzhFUCeCLWBOedCACRBF2d6IUedrrI5cyPH9JXavUpre2lc8aCepD6y%2FvZsL%2BaD7ug5ynURelGS1fDq8IIjg%2FO2oKOPJQ1MKYwwtXmwAY6pgEy1heBM7x%2FLiiYON1gYGXfiJ9a%2BAWcLFtswKm5WkgKwzj%2BljhigN4JJKBeIkH4HMbbqK0DbzOgfXWTx5ngaLMqzz8Yux3bGkIttNfta2hbEFjjJw3mrC9juP3rQues1J%2F1lEDY6oyrqaakT8XqsK%2BcEsgA0ZK4zTyT284ZehQLJbOvHAqd2xugf7l10a9UUrAhjAKM76dvN3z0us6rMn8hwe9Q4SSH&X-Amz-Signature=169e78ef048b1dd1e88064e0d03325a682c0c1216e7a6d51e280049af9832dee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT3OI72%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRrLNpbZ0O470a%2BHrK8J3DHLVOD0NhWIljJzI7DvTJLAiA0Jl0jBG1iEZZcF%2FUFfTMs4Z6JyakJhAKr%2F3UMtTXMASr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2F5OjORpI3IGzZEgOKtwDdxcUg4m6ddH3hjE4zprt5W6V68LcuPcnYmmqea%2BZjnbI2F2X87J2CiH53lKpXPNB02XYkHXal4s%2B4%2Bw8I9V01DJhJjEf34cxnGNaPDyJfKMV5tzRky%2FLlZekXg7%2BjXND8KOSdbKCUmPQjzKxiIQzY9H7eNXSQ0bznzSBqbtLIA04N3egFciluYyxcn9kYO1YZ6nYSNlW72FkuQgm6S8HH3R4daUPw6NXmK4GqMjO9XhMwfPYv%2BFagh97KuuNmB2SgBv6HFyxonbah3ZsYh5IpzUjSsRVjPGjhaDYJGi7qF9xnMjFTX85OGmetGIlLHH8H%2F8cEt9i6ZEshnbrO3kUoEjIstkXHtrmMeuKfAqAKSyjBpF4yDHiH9mNXTpZnS4AzYyc4MfNlQaIkwgQ2hXVmA3JTqV%2FCdG%2BFNZ0%2BNvwGc8iLK0LQPBbUxrJkvxKw42HNlbLoKlB%2B00hl1rBONyrzIp7g0KV5qo4qOsjclnnIHGw%2FTcmV5bo8w7ljaeTLM2aAY9C7JQiHMOuDEceE%2FFf5RdMYkCzhFUCeCLWBOedCACRBF2d6IUedrrI5cyPH9JXavUpre2lc8aCepD6y%2FvZsL%2BaD7ug5ynURelGS1fDq8IIjg%2FO2oKOPJQ1MKYwwtXmwAY6pgEy1heBM7x%2FLiiYON1gYGXfiJ9a%2BAWcLFtswKm5WkgKwzj%2BljhigN4JJKBeIkH4HMbbqK0DbzOgfXWTx5ngaLMqzz8Yux3bGkIttNfta2hbEFjjJw3mrC9juP3rQues1J%2F1lEDY6oyrqaakT8XqsK%2BcEsgA0ZK4zTyT284ZehQLJbOvHAqd2xugf7l10a9UUrAhjAKM76dvN3z0us6rMn8hwe9Q4SSH&X-Amz-Signature=e72929008012322092b307fed88d9c80c433efd1b42c6376aee3e0da9fcdcc3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT3OI72%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRrLNpbZ0O470a%2BHrK8J3DHLVOD0NhWIljJzI7DvTJLAiA0Jl0jBG1iEZZcF%2FUFfTMs4Z6JyakJhAKr%2F3UMtTXMASr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2F5OjORpI3IGzZEgOKtwDdxcUg4m6ddH3hjE4zprt5W6V68LcuPcnYmmqea%2BZjnbI2F2X87J2CiH53lKpXPNB02XYkHXal4s%2B4%2Bw8I9V01DJhJjEf34cxnGNaPDyJfKMV5tzRky%2FLlZekXg7%2BjXND8KOSdbKCUmPQjzKxiIQzY9H7eNXSQ0bznzSBqbtLIA04N3egFciluYyxcn9kYO1YZ6nYSNlW72FkuQgm6S8HH3R4daUPw6NXmK4GqMjO9XhMwfPYv%2BFagh97KuuNmB2SgBv6HFyxonbah3ZsYh5IpzUjSsRVjPGjhaDYJGi7qF9xnMjFTX85OGmetGIlLHH8H%2F8cEt9i6ZEshnbrO3kUoEjIstkXHtrmMeuKfAqAKSyjBpF4yDHiH9mNXTpZnS4AzYyc4MfNlQaIkwgQ2hXVmA3JTqV%2FCdG%2BFNZ0%2BNvwGc8iLK0LQPBbUxrJkvxKw42HNlbLoKlB%2B00hl1rBONyrzIp7g0KV5qo4qOsjclnnIHGw%2FTcmV5bo8w7ljaeTLM2aAY9C7JQiHMOuDEceE%2FFf5RdMYkCzhFUCeCLWBOedCACRBF2d6IUedrrI5cyPH9JXavUpre2lc8aCepD6y%2FvZsL%2BaD7ug5ynURelGS1fDq8IIjg%2FO2oKOPJQ1MKYwwtXmwAY6pgEy1heBM7x%2FLiiYON1gYGXfiJ9a%2BAWcLFtswKm5WkgKwzj%2BljhigN4JJKBeIkH4HMbbqK0DbzOgfXWTx5ngaLMqzz8Yux3bGkIttNfta2hbEFjjJw3mrC9juP3rQues1J%2F1lEDY6oyrqaakT8XqsK%2BcEsgA0ZK4zTyT284ZehQLJbOvHAqd2xugf7l10a9UUrAhjAKM76dvN3z0us6rMn8hwe9Q4SSH&X-Amz-Signature=aef868a0cab906f1b1ab6a623607647de8191db30df6b090f6c112d318ed2bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
