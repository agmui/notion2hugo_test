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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKWCJON%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIC%2F5x6EuKXjccluAOUmiiWKBLqKTofiwoOhCdLhF718tAiEAueawturPvgM7DwXzmua%2FVGzJo3bf%2FwesphZiQkKhNeYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdA5Ic4Wo4w2Rs%2B4SrcA9%2BnLaQ7NNsWZJLOR1eKoNbu%2FU3dkZ3g5Yyv7KeXFB9hpQD4kiVQWoSiqeLax%2FDJ5kWcPlnfVjOO4eRIJTwjHPgZ%2FMojobBW%2BkHdgvlvsO0W1jBHgCXwJzKsSav%2FEENEfJ%2FlHoxAmX%2BJdEoKwaStVIyXrHxNvxhT7W6ojP7ZgIHOZylnnTc%2FQXKmW2RA0tu%2FXPp5Vj2G29lfHj1LpKLgM7bxWy0XAMhQ2l3XJqzAs72XsBmy6I6zW2gTLpSwYWmW0xqfFf00VFbKxj7h57Aifm4ZqJC319Pow5JzWSRUOoSG11YY%2F5Z7tLvo%2FwE8%2F2%2FGsVXJEeZzUutA7OVfr86nmvk7z9HqcaR7JWprdJJ%2FYM%2BpC7i8SrL%2FQNheP6ssFPwrZ%2Fj%2Fc6qk3xIwerzj3bpxi2joQE1fZEILjREt7wUhtN7tZ23YqreHSUYN4LPk1cqclKK3n0lnhGOReiyE0cGaNiqSeYGUMyR7YkKozVFm0o0A4pIbBaJ%2BMc%2BJ1XSdfmOXOzWa25orb5bAieG4Me1GUmmQ9LqE8VcSqc5fiJrZb0CqC44U5lO12ync6JvF3os09kaTtaI6K00dBtnjlb%2F%2Fjzly8v89NeZJN8zdeSqiJBklMuCa27YJKUfU4p38MOD6874GOqUBhErQykvXL1tbVFwOOol7L6JEOy6wQB0e7rKAL50SYf143VaawZqjPQI7%2BBVWcATWGkWAUPDdZmpjRWjQ2Ag1qdoA0NmXGUU3vhMU8kuCz6FT32GYMbNaqgHfk898tePYBQvbsSNXYq9Jth%2Br%2FSbUkL24ktvM1a3oM%2BngyuDbrGgWYB0ACgyh6nlG3AMQ8EE%2Fcs4Qnx3pg1wFFZd4Zqf1rW9UCk%2Fc&X-Amz-Signature=ebe9d396c271b746b7364d5d0cf6e795648c30714e6ff80b917d994fc998a381&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKWCJON%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIC%2F5x6EuKXjccluAOUmiiWKBLqKTofiwoOhCdLhF718tAiEAueawturPvgM7DwXzmua%2FVGzJo3bf%2FwesphZiQkKhNeYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdA5Ic4Wo4w2Rs%2B4SrcA9%2BnLaQ7NNsWZJLOR1eKoNbu%2FU3dkZ3g5Yyv7KeXFB9hpQD4kiVQWoSiqeLax%2FDJ5kWcPlnfVjOO4eRIJTwjHPgZ%2FMojobBW%2BkHdgvlvsO0W1jBHgCXwJzKsSav%2FEENEfJ%2FlHoxAmX%2BJdEoKwaStVIyXrHxNvxhT7W6ojP7ZgIHOZylnnTc%2FQXKmW2RA0tu%2FXPp5Vj2G29lfHj1LpKLgM7bxWy0XAMhQ2l3XJqzAs72XsBmy6I6zW2gTLpSwYWmW0xqfFf00VFbKxj7h57Aifm4ZqJC319Pow5JzWSRUOoSG11YY%2F5Z7tLvo%2FwE8%2F2%2FGsVXJEeZzUutA7OVfr86nmvk7z9HqcaR7JWprdJJ%2FYM%2BpC7i8SrL%2FQNheP6ssFPwrZ%2Fj%2Fc6qk3xIwerzj3bpxi2joQE1fZEILjREt7wUhtN7tZ23YqreHSUYN4LPk1cqclKK3n0lnhGOReiyE0cGaNiqSeYGUMyR7YkKozVFm0o0A4pIbBaJ%2BMc%2BJ1XSdfmOXOzWa25orb5bAieG4Me1GUmmQ9LqE8VcSqc5fiJrZb0CqC44U5lO12ync6JvF3os09kaTtaI6K00dBtnjlb%2F%2Fjzly8v89NeZJN8zdeSqiJBklMuCa27YJKUfU4p38MOD6874GOqUBhErQykvXL1tbVFwOOol7L6JEOy6wQB0e7rKAL50SYf143VaawZqjPQI7%2BBVWcATWGkWAUPDdZmpjRWjQ2Ag1qdoA0NmXGUU3vhMU8kuCz6FT32GYMbNaqgHfk898tePYBQvbsSNXYq9Jth%2Br%2FSbUkL24ktvM1a3oM%2BngyuDbrGgWYB0ACgyh6nlG3AMQ8EE%2Fcs4Qnx3pg1wFFZd4Zqf1rW9UCk%2Fc&X-Amz-Signature=470f0e4971d3f37e2a9d341f9b6f5e8d334f0ea27ac350f65e056ba0bdb41e81&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKWCJON%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIC%2F5x6EuKXjccluAOUmiiWKBLqKTofiwoOhCdLhF718tAiEAueawturPvgM7DwXzmua%2FVGzJo3bf%2FwesphZiQkKhNeYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdA5Ic4Wo4w2Rs%2B4SrcA9%2BnLaQ7NNsWZJLOR1eKoNbu%2FU3dkZ3g5Yyv7KeXFB9hpQD4kiVQWoSiqeLax%2FDJ5kWcPlnfVjOO4eRIJTwjHPgZ%2FMojobBW%2BkHdgvlvsO0W1jBHgCXwJzKsSav%2FEENEfJ%2FlHoxAmX%2BJdEoKwaStVIyXrHxNvxhT7W6ojP7ZgIHOZylnnTc%2FQXKmW2RA0tu%2FXPp5Vj2G29lfHj1LpKLgM7bxWy0XAMhQ2l3XJqzAs72XsBmy6I6zW2gTLpSwYWmW0xqfFf00VFbKxj7h57Aifm4ZqJC319Pow5JzWSRUOoSG11YY%2F5Z7tLvo%2FwE8%2F2%2FGsVXJEeZzUutA7OVfr86nmvk7z9HqcaR7JWprdJJ%2FYM%2BpC7i8SrL%2FQNheP6ssFPwrZ%2Fj%2Fc6qk3xIwerzj3bpxi2joQE1fZEILjREt7wUhtN7tZ23YqreHSUYN4LPk1cqclKK3n0lnhGOReiyE0cGaNiqSeYGUMyR7YkKozVFm0o0A4pIbBaJ%2BMc%2BJ1XSdfmOXOzWa25orb5bAieG4Me1GUmmQ9LqE8VcSqc5fiJrZb0CqC44U5lO12ync6JvF3os09kaTtaI6K00dBtnjlb%2F%2Fjzly8v89NeZJN8zdeSqiJBklMuCa27YJKUfU4p38MOD6874GOqUBhErQykvXL1tbVFwOOol7L6JEOy6wQB0e7rKAL50SYf143VaawZqjPQI7%2BBVWcATWGkWAUPDdZmpjRWjQ2Ag1qdoA0NmXGUU3vhMU8kuCz6FT32GYMbNaqgHfk898tePYBQvbsSNXYq9Jth%2Br%2FSbUkL24ktvM1a3oM%2BngyuDbrGgWYB0ACgyh6nlG3AMQ8EE%2Fcs4Qnx3pg1wFFZd4Zqf1rW9UCk%2Fc&X-Amz-Signature=6f3722f5ad27c92c371fdb0d20700e72d847a719bfa8a76c9e122e7847d53058&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKWCJON%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIC%2F5x6EuKXjccluAOUmiiWKBLqKTofiwoOhCdLhF718tAiEAueawturPvgM7DwXzmua%2FVGzJo3bf%2FwesphZiQkKhNeYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdA5Ic4Wo4w2Rs%2B4SrcA9%2BnLaQ7NNsWZJLOR1eKoNbu%2FU3dkZ3g5Yyv7KeXFB9hpQD4kiVQWoSiqeLax%2FDJ5kWcPlnfVjOO4eRIJTwjHPgZ%2FMojobBW%2BkHdgvlvsO0W1jBHgCXwJzKsSav%2FEENEfJ%2FlHoxAmX%2BJdEoKwaStVIyXrHxNvxhT7W6ojP7ZgIHOZylnnTc%2FQXKmW2RA0tu%2FXPp5Vj2G29lfHj1LpKLgM7bxWy0XAMhQ2l3XJqzAs72XsBmy6I6zW2gTLpSwYWmW0xqfFf00VFbKxj7h57Aifm4ZqJC319Pow5JzWSRUOoSG11YY%2F5Z7tLvo%2FwE8%2F2%2FGsVXJEeZzUutA7OVfr86nmvk7z9HqcaR7JWprdJJ%2FYM%2BpC7i8SrL%2FQNheP6ssFPwrZ%2Fj%2Fc6qk3xIwerzj3bpxi2joQE1fZEILjREt7wUhtN7tZ23YqreHSUYN4LPk1cqclKK3n0lnhGOReiyE0cGaNiqSeYGUMyR7YkKozVFm0o0A4pIbBaJ%2BMc%2BJ1XSdfmOXOzWa25orb5bAieG4Me1GUmmQ9LqE8VcSqc5fiJrZb0CqC44U5lO12ync6JvF3os09kaTtaI6K00dBtnjlb%2F%2Fjzly8v89NeZJN8zdeSqiJBklMuCa27YJKUfU4p38MOD6874GOqUBhErQykvXL1tbVFwOOol7L6JEOy6wQB0e7rKAL50SYf143VaawZqjPQI7%2BBVWcATWGkWAUPDdZmpjRWjQ2Ag1qdoA0NmXGUU3vhMU8kuCz6FT32GYMbNaqgHfk898tePYBQvbsSNXYq9Jth%2Br%2FSbUkL24ktvM1a3oM%2BngyuDbrGgWYB0ACgyh6nlG3AMQ8EE%2Fcs4Qnx3pg1wFFZd4Zqf1rW9UCk%2Fc&X-Amz-Signature=086196b92fbaed37f8a845ea0b20700c46ad70e778dceb7e082b63b19231f9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKWCJON%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIC%2F5x6EuKXjccluAOUmiiWKBLqKTofiwoOhCdLhF718tAiEAueawturPvgM7DwXzmua%2FVGzJo3bf%2FwesphZiQkKhNeYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdA5Ic4Wo4w2Rs%2B4SrcA9%2BnLaQ7NNsWZJLOR1eKoNbu%2FU3dkZ3g5Yyv7KeXFB9hpQD4kiVQWoSiqeLax%2FDJ5kWcPlnfVjOO4eRIJTwjHPgZ%2FMojobBW%2BkHdgvlvsO0W1jBHgCXwJzKsSav%2FEENEfJ%2FlHoxAmX%2BJdEoKwaStVIyXrHxNvxhT7W6ojP7ZgIHOZylnnTc%2FQXKmW2RA0tu%2FXPp5Vj2G29lfHj1LpKLgM7bxWy0XAMhQ2l3XJqzAs72XsBmy6I6zW2gTLpSwYWmW0xqfFf00VFbKxj7h57Aifm4ZqJC319Pow5JzWSRUOoSG11YY%2F5Z7tLvo%2FwE8%2F2%2FGsVXJEeZzUutA7OVfr86nmvk7z9HqcaR7JWprdJJ%2FYM%2BpC7i8SrL%2FQNheP6ssFPwrZ%2Fj%2Fc6qk3xIwerzj3bpxi2joQE1fZEILjREt7wUhtN7tZ23YqreHSUYN4LPk1cqclKK3n0lnhGOReiyE0cGaNiqSeYGUMyR7YkKozVFm0o0A4pIbBaJ%2BMc%2BJ1XSdfmOXOzWa25orb5bAieG4Me1GUmmQ9LqE8VcSqc5fiJrZb0CqC44U5lO12ync6JvF3os09kaTtaI6K00dBtnjlb%2F%2Fjzly8v89NeZJN8zdeSqiJBklMuCa27YJKUfU4p38MOD6874GOqUBhErQykvXL1tbVFwOOol7L6JEOy6wQB0e7rKAL50SYf143VaawZqjPQI7%2BBVWcATWGkWAUPDdZmpjRWjQ2Ag1qdoA0NmXGUU3vhMU8kuCz6FT32GYMbNaqgHfk898tePYBQvbsSNXYq9Jth%2Br%2FSbUkL24ktvM1a3oM%2BngyuDbrGgWYB0ACgyh6nlG3AMQ8EE%2Fcs4Qnx3pg1wFFZd4Zqf1rW9UCk%2Fc&X-Amz-Signature=e51bc844168387321b93878cc2acf9af4f0c1ebade8ded6b365514d7cb71778f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
