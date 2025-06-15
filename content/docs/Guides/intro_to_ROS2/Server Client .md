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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VC7CT3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDkyaRyEcAcGX205EqW8QEpqaRqMl%2BJpVHu9rPwKfo1AwIhAMNi5QfGS6cRHnbWyqJQcc0ZHlY%2FSXhqCy425wAtl%2B1rKv8DCFAQABoMNjM3NDIzMTgzODA1Igw1Chi0Vv7TA5BABuwq3AOM8JTN9WplF8RI%2BuXN0OAGNlaIeRKQ8Pb2imQoR3otZ6CIka6BSezsm58uz%2F32uNAHp3ZkaPHkCFO7Qe5LGPf%2FOgzIUZTpj6ycgg0rf7k3rkgcNVIUmMmvYUT%2FoKDiYhovXyeDtN%2Bdv%2FAxpCThAi0LfEHA50rNfdWWaBpxl5Ds3H0uGgoLLkHQcTop0BICBkdLMRDpqzoh8cHp1SEJ%2FfJupIZQPlLKjrVaHZrACdtLMTAPK2IZ5XOPKcvrD%2B3WY6FmLe%2FSw9wYoRc490PNgmyItSch8VWTVATautvh0jrQrOilXLqMIjJ6XwAG7QdxF4fwrd3tM%2F2T1KoHW2n%2BWL5Xm86uSt4MP9L7MWm6azs0xSbrAm6WrWzyy%2Fmb6cDYTV12Yz%2BOQ%2BrfW89ygSfKCqzAlrFmAinUaafAffK5Y56BXyxCv5RoMQaN4TuDYcYSk1C3tKoFfxcw7Nr9oEFWtk5L40WOrqlEG0jizLrExr11RAn6NyB%2BJmfXpLz4lJ9IwRCXSnrVTMgmg4aR1RLNJHwSEktLTGXb3Z%2B1uthQ8aKLE25C1yCGKAWM9zaNrfi8WOUXMHNd7j9npkVwsx9aDyw0aDvHoUtM8dAHu91Ya1YZ4WASKHORW5xE57%2BkUDCkmr3CBjqkAQ8yuV1Yzgl0zLcH687SLVDkLJ3AMNNvee6ATIYKcqm4t2V7%2Fz78VZ7CBXeuIAzCUcr0Y3IM7Fhvr2sg9vFSjRnm3z3KzXOxTM1rawjmJp8BVEiVoLyQqxcQ0BRd4SmZqRdiy%2BGD4jZD6WX%2FSnUU665mua%2FgrSzm63A8yEwca5oNp3OjY3Fj2UUW9FNp%2Fzcz9QOb4jxIWOG40nDo%2FgO0QuvYXeyQ&X-Amz-Signature=d2f1b49dc53501a906222e58a139c18c41b2b5c3183d4ba23a5b806c98156124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VC7CT3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDkyaRyEcAcGX205EqW8QEpqaRqMl%2BJpVHu9rPwKfo1AwIhAMNi5QfGS6cRHnbWyqJQcc0ZHlY%2FSXhqCy425wAtl%2B1rKv8DCFAQABoMNjM3NDIzMTgzODA1Igw1Chi0Vv7TA5BABuwq3AOM8JTN9WplF8RI%2BuXN0OAGNlaIeRKQ8Pb2imQoR3otZ6CIka6BSezsm58uz%2F32uNAHp3ZkaPHkCFO7Qe5LGPf%2FOgzIUZTpj6ycgg0rf7k3rkgcNVIUmMmvYUT%2FoKDiYhovXyeDtN%2Bdv%2FAxpCThAi0LfEHA50rNfdWWaBpxl5Ds3H0uGgoLLkHQcTop0BICBkdLMRDpqzoh8cHp1SEJ%2FfJupIZQPlLKjrVaHZrACdtLMTAPK2IZ5XOPKcvrD%2B3WY6FmLe%2FSw9wYoRc490PNgmyItSch8VWTVATautvh0jrQrOilXLqMIjJ6XwAG7QdxF4fwrd3tM%2F2T1KoHW2n%2BWL5Xm86uSt4MP9L7MWm6azs0xSbrAm6WrWzyy%2Fmb6cDYTV12Yz%2BOQ%2BrfW89ygSfKCqzAlrFmAinUaafAffK5Y56BXyxCv5RoMQaN4TuDYcYSk1C3tKoFfxcw7Nr9oEFWtk5L40WOrqlEG0jizLrExr11RAn6NyB%2BJmfXpLz4lJ9IwRCXSnrVTMgmg4aR1RLNJHwSEktLTGXb3Z%2B1uthQ8aKLE25C1yCGKAWM9zaNrfi8WOUXMHNd7j9npkVwsx9aDyw0aDvHoUtM8dAHu91Ya1YZ4WASKHORW5xE57%2BkUDCkmr3CBjqkAQ8yuV1Yzgl0zLcH687SLVDkLJ3AMNNvee6ATIYKcqm4t2V7%2Fz78VZ7CBXeuIAzCUcr0Y3IM7Fhvr2sg9vFSjRnm3z3KzXOxTM1rawjmJp8BVEiVoLyQqxcQ0BRd4SmZqRdiy%2BGD4jZD6WX%2FSnUU665mua%2FgrSzm63A8yEwca5oNp3OjY3Fj2UUW9FNp%2Fzcz9QOb4jxIWOG40nDo%2FgO0QuvYXeyQ&X-Amz-Signature=2f8eae90adfaa2075231ff0fb431e9cb2f3a28b8025160b080c02881c21e5d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VC7CT3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDkyaRyEcAcGX205EqW8QEpqaRqMl%2BJpVHu9rPwKfo1AwIhAMNi5QfGS6cRHnbWyqJQcc0ZHlY%2FSXhqCy425wAtl%2B1rKv8DCFAQABoMNjM3NDIzMTgzODA1Igw1Chi0Vv7TA5BABuwq3AOM8JTN9WplF8RI%2BuXN0OAGNlaIeRKQ8Pb2imQoR3otZ6CIka6BSezsm58uz%2F32uNAHp3ZkaPHkCFO7Qe5LGPf%2FOgzIUZTpj6ycgg0rf7k3rkgcNVIUmMmvYUT%2FoKDiYhovXyeDtN%2Bdv%2FAxpCThAi0LfEHA50rNfdWWaBpxl5Ds3H0uGgoLLkHQcTop0BICBkdLMRDpqzoh8cHp1SEJ%2FfJupIZQPlLKjrVaHZrACdtLMTAPK2IZ5XOPKcvrD%2B3WY6FmLe%2FSw9wYoRc490PNgmyItSch8VWTVATautvh0jrQrOilXLqMIjJ6XwAG7QdxF4fwrd3tM%2F2T1KoHW2n%2BWL5Xm86uSt4MP9L7MWm6azs0xSbrAm6WrWzyy%2Fmb6cDYTV12Yz%2BOQ%2BrfW89ygSfKCqzAlrFmAinUaafAffK5Y56BXyxCv5RoMQaN4TuDYcYSk1C3tKoFfxcw7Nr9oEFWtk5L40WOrqlEG0jizLrExr11RAn6NyB%2BJmfXpLz4lJ9IwRCXSnrVTMgmg4aR1RLNJHwSEktLTGXb3Z%2B1uthQ8aKLE25C1yCGKAWM9zaNrfi8WOUXMHNd7j9npkVwsx9aDyw0aDvHoUtM8dAHu91Ya1YZ4WASKHORW5xE57%2BkUDCkmr3CBjqkAQ8yuV1Yzgl0zLcH687SLVDkLJ3AMNNvee6ATIYKcqm4t2V7%2Fz78VZ7CBXeuIAzCUcr0Y3IM7Fhvr2sg9vFSjRnm3z3KzXOxTM1rawjmJp8BVEiVoLyQqxcQ0BRd4SmZqRdiy%2BGD4jZD6WX%2FSnUU665mua%2FgrSzm63A8yEwca5oNp3OjY3Fj2UUW9FNp%2Fzcz9QOb4jxIWOG40nDo%2FgO0QuvYXeyQ&X-Amz-Signature=a40af1a3ccf89b0621272631e385378e09f68bc30adb959ff266d16afdc3fc7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VC7CT3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDkyaRyEcAcGX205EqW8QEpqaRqMl%2BJpVHu9rPwKfo1AwIhAMNi5QfGS6cRHnbWyqJQcc0ZHlY%2FSXhqCy425wAtl%2B1rKv8DCFAQABoMNjM3NDIzMTgzODA1Igw1Chi0Vv7TA5BABuwq3AOM8JTN9WplF8RI%2BuXN0OAGNlaIeRKQ8Pb2imQoR3otZ6CIka6BSezsm58uz%2F32uNAHp3ZkaPHkCFO7Qe5LGPf%2FOgzIUZTpj6ycgg0rf7k3rkgcNVIUmMmvYUT%2FoKDiYhovXyeDtN%2Bdv%2FAxpCThAi0LfEHA50rNfdWWaBpxl5Ds3H0uGgoLLkHQcTop0BICBkdLMRDpqzoh8cHp1SEJ%2FfJupIZQPlLKjrVaHZrACdtLMTAPK2IZ5XOPKcvrD%2B3WY6FmLe%2FSw9wYoRc490PNgmyItSch8VWTVATautvh0jrQrOilXLqMIjJ6XwAG7QdxF4fwrd3tM%2F2T1KoHW2n%2BWL5Xm86uSt4MP9L7MWm6azs0xSbrAm6WrWzyy%2Fmb6cDYTV12Yz%2BOQ%2BrfW89ygSfKCqzAlrFmAinUaafAffK5Y56BXyxCv5RoMQaN4TuDYcYSk1C3tKoFfxcw7Nr9oEFWtk5L40WOrqlEG0jizLrExr11RAn6NyB%2BJmfXpLz4lJ9IwRCXSnrVTMgmg4aR1RLNJHwSEktLTGXb3Z%2B1uthQ8aKLE25C1yCGKAWM9zaNrfi8WOUXMHNd7j9npkVwsx9aDyw0aDvHoUtM8dAHu91Ya1YZ4WASKHORW5xE57%2BkUDCkmr3CBjqkAQ8yuV1Yzgl0zLcH687SLVDkLJ3AMNNvee6ATIYKcqm4t2V7%2Fz78VZ7CBXeuIAzCUcr0Y3IM7Fhvr2sg9vFSjRnm3z3KzXOxTM1rawjmJp8BVEiVoLyQqxcQ0BRd4SmZqRdiy%2BGD4jZD6WX%2FSnUU665mua%2FgrSzm63A8yEwca5oNp3OjY3Fj2UUW9FNp%2Fzcz9QOb4jxIWOG40nDo%2FgO0QuvYXeyQ&X-Amz-Signature=f3ff6017da94357b7afebd40f0d9a892b74796aca1df52f6b74f54f8b97f97ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VC7CT3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDkyaRyEcAcGX205EqW8QEpqaRqMl%2BJpVHu9rPwKfo1AwIhAMNi5QfGS6cRHnbWyqJQcc0ZHlY%2FSXhqCy425wAtl%2B1rKv8DCFAQABoMNjM3NDIzMTgzODA1Igw1Chi0Vv7TA5BABuwq3AOM8JTN9WplF8RI%2BuXN0OAGNlaIeRKQ8Pb2imQoR3otZ6CIka6BSezsm58uz%2F32uNAHp3ZkaPHkCFO7Qe5LGPf%2FOgzIUZTpj6ycgg0rf7k3rkgcNVIUmMmvYUT%2FoKDiYhovXyeDtN%2Bdv%2FAxpCThAi0LfEHA50rNfdWWaBpxl5Ds3H0uGgoLLkHQcTop0BICBkdLMRDpqzoh8cHp1SEJ%2FfJupIZQPlLKjrVaHZrACdtLMTAPK2IZ5XOPKcvrD%2B3WY6FmLe%2FSw9wYoRc490PNgmyItSch8VWTVATautvh0jrQrOilXLqMIjJ6XwAG7QdxF4fwrd3tM%2F2T1KoHW2n%2BWL5Xm86uSt4MP9L7MWm6azs0xSbrAm6WrWzyy%2Fmb6cDYTV12Yz%2BOQ%2BrfW89ygSfKCqzAlrFmAinUaafAffK5Y56BXyxCv5RoMQaN4TuDYcYSk1C3tKoFfxcw7Nr9oEFWtk5L40WOrqlEG0jizLrExr11RAn6NyB%2BJmfXpLz4lJ9IwRCXSnrVTMgmg4aR1RLNJHwSEktLTGXb3Z%2B1uthQ8aKLE25C1yCGKAWM9zaNrfi8WOUXMHNd7j9npkVwsx9aDyw0aDvHoUtM8dAHu91Ya1YZ4WASKHORW5xE57%2BkUDCkmr3CBjqkAQ8yuV1Yzgl0zLcH687SLVDkLJ3AMNNvee6ATIYKcqm4t2V7%2Fz78VZ7CBXeuIAzCUcr0Y3IM7Fhvr2sg9vFSjRnm3z3KzXOxTM1rawjmJp8BVEiVoLyQqxcQ0BRd4SmZqRdiy%2BGD4jZD6WX%2FSnUU665mua%2FgrSzm63A8yEwca5oNp3OjY3Fj2UUW9FNp%2Fzcz9QOb4jxIWOG40nDo%2FgO0QuvYXeyQ&X-Amz-Signature=6c016e60ce028198e41934eb91ece757054b088211fa1e5239c6706cb96723d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
