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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKYBCNB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARooPzDHg3ZnA3tZEc4jpzrY6uys1jYsp2d3kQfLYyfAiEA2aZ7FBjax4u1H9szlSiQR0jv8wjN%2FhsR%2BpAoqLGxSSAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYAhGBOAKwuSH4U7SrcA6odYOJjBzyjM8VY9SNdG%2B20w2z%2BtjMhLsvVcj0RCMxs4YiENiRkXhvHdNwQDxOpqwz%2F2x6xX1Q2%2FPISJig837lIqi7jVDn7QmJDSB7xCJUHCgEuoxBrNaWK7TtP13vL73%2FFDdzAo9KPjU4qcNvbGppN3r0v83JbWXqcwzEZGG2wFzVzrBbS4IujviO70FHa%2FbsBoyfdWmTSV0PmHsFlxmc8OiS%2F9Qq23XrkSacHaBxzjWgB60izbxKY8e1vcam%2Fb%2BOW6OKGHxlitSFFNP%2F7bk2oh48TjWVeqie6Fl8X%2BcNY8I4Q0m0Gi4lRPfqIAcBf7t7NBPt%2BXRlxJQ6nCHR%2F7sbGvfWnB4gPH%2B6nxVrmVd8On%2BoMkakznKEKxbZkYcr0OZjHri1NE25VID99tqPvF5O5FAs63FBKo4z4HrXKMxoblQ6T9jknw9tnwISU8fmvALniss7B9jRIxdDCN5RS9lq9trXijgx9BWz%2BVeOclbqQidxJM%2FwIcPkiLa6q6BMvNtMME%2FdDPjpjEpsnVPNW3Wi%2BNnHF8Ztooe9gOI1YIzzGYo%2FiUeEFxPM40Pzc7Dju5j%2BZj7kh4oXcWqrqTyJCj2BceP987qBjvzNkusDqjyGIBxVfqI8%2F5LvxOz%2B5MJGKwMAGOqUByqKLUPYJ5NXgsrElPUpN6KXlyG30t%2FLotMaBXLvUzjnRQWldl3PajZfVU4VjLpEHCxl5k%2BVCnFRYr1raZhA9oPMUOIiCacR7oN5NT0SeSNSRXOEaQ5xJEK3iUsyxdKYzayJylUWaoXE8AFfp6L0AY48tg6BHhjvFc8bST7m%2FHwb3clT8eCrB%2Bf4utgUmetPBQbxAJp95OaoqmvKq4OAgFmNxgoEO&X-Amz-Signature=0c22476d5921fc3bc2c4b18b1b252390b5e3ae26d059d853de4daff61485f7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKYBCNB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARooPzDHg3ZnA3tZEc4jpzrY6uys1jYsp2d3kQfLYyfAiEA2aZ7FBjax4u1H9szlSiQR0jv8wjN%2FhsR%2BpAoqLGxSSAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYAhGBOAKwuSH4U7SrcA6odYOJjBzyjM8VY9SNdG%2B20w2z%2BtjMhLsvVcj0RCMxs4YiENiRkXhvHdNwQDxOpqwz%2F2x6xX1Q2%2FPISJig837lIqi7jVDn7QmJDSB7xCJUHCgEuoxBrNaWK7TtP13vL73%2FFDdzAo9KPjU4qcNvbGppN3r0v83JbWXqcwzEZGG2wFzVzrBbS4IujviO70FHa%2FbsBoyfdWmTSV0PmHsFlxmc8OiS%2F9Qq23XrkSacHaBxzjWgB60izbxKY8e1vcam%2Fb%2BOW6OKGHxlitSFFNP%2F7bk2oh48TjWVeqie6Fl8X%2BcNY8I4Q0m0Gi4lRPfqIAcBf7t7NBPt%2BXRlxJQ6nCHR%2F7sbGvfWnB4gPH%2B6nxVrmVd8On%2BoMkakznKEKxbZkYcr0OZjHri1NE25VID99tqPvF5O5FAs63FBKo4z4HrXKMxoblQ6T9jknw9tnwISU8fmvALniss7B9jRIxdDCN5RS9lq9trXijgx9BWz%2BVeOclbqQidxJM%2FwIcPkiLa6q6BMvNtMME%2FdDPjpjEpsnVPNW3Wi%2BNnHF8Ztooe9gOI1YIzzGYo%2FiUeEFxPM40Pzc7Dju5j%2BZj7kh4oXcWqrqTyJCj2BceP987qBjvzNkusDqjyGIBxVfqI8%2F5LvxOz%2B5MJGKwMAGOqUByqKLUPYJ5NXgsrElPUpN6KXlyG30t%2FLotMaBXLvUzjnRQWldl3PajZfVU4VjLpEHCxl5k%2BVCnFRYr1raZhA9oPMUOIiCacR7oN5NT0SeSNSRXOEaQ5xJEK3iUsyxdKYzayJylUWaoXE8AFfp6L0AY48tg6BHhjvFc8bST7m%2FHwb3clT8eCrB%2Bf4utgUmetPBQbxAJp95OaoqmvKq4OAgFmNxgoEO&X-Amz-Signature=11f4374ab4ed3275620b8f82e0e35a6692a4e1c7a28db6290ec3dc2886e20f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKYBCNB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARooPzDHg3ZnA3tZEc4jpzrY6uys1jYsp2d3kQfLYyfAiEA2aZ7FBjax4u1H9szlSiQR0jv8wjN%2FhsR%2BpAoqLGxSSAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYAhGBOAKwuSH4U7SrcA6odYOJjBzyjM8VY9SNdG%2B20w2z%2BtjMhLsvVcj0RCMxs4YiENiRkXhvHdNwQDxOpqwz%2F2x6xX1Q2%2FPISJig837lIqi7jVDn7QmJDSB7xCJUHCgEuoxBrNaWK7TtP13vL73%2FFDdzAo9KPjU4qcNvbGppN3r0v83JbWXqcwzEZGG2wFzVzrBbS4IujviO70FHa%2FbsBoyfdWmTSV0PmHsFlxmc8OiS%2F9Qq23XrkSacHaBxzjWgB60izbxKY8e1vcam%2Fb%2BOW6OKGHxlitSFFNP%2F7bk2oh48TjWVeqie6Fl8X%2BcNY8I4Q0m0Gi4lRPfqIAcBf7t7NBPt%2BXRlxJQ6nCHR%2F7sbGvfWnB4gPH%2B6nxVrmVd8On%2BoMkakznKEKxbZkYcr0OZjHri1NE25VID99tqPvF5O5FAs63FBKo4z4HrXKMxoblQ6T9jknw9tnwISU8fmvALniss7B9jRIxdDCN5RS9lq9trXijgx9BWz%2BVeOclbqQidxJM%2FwIcPkiLa6q6BMvNtMME%2FdDPjpjEpsnVPNW3Wi%2BNnHF8Ztooe9gOI1YIzzGYo%2FiUeEFxPM40Pzc7Dju5j%2BZj7kh4oXcWqrqTyJCj2BceP987qBjvzNkusDqjyGIBxVfqI8%2F5LvxOz%2B5MJGKwMAGOqUByqKLUPYJ5NXgsrElPUpN6KXlyG30t%2FLotMaBXLvUzjnRQWldl3PajZfVU4VjLpEHCxl5k%2BVCnFRYr1raZhA9oPMUOIiCacR7oN5NT0SeSNSRXOEaQ5xJEK3iUsyxdKYzayJylUWaoXE8AFfp6L0AY48tg6BHhjvFc8bST7m%2FHwb3clT8eCrB%2Bf4utgUmetPBQbxAJp95OaoqmvKq4OAgFmNxgoEO&X-Amz-Signature=281c8cf07cb089fcfe75c267f3700f8e3216a8f27c459573881947004b4b10ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKYBCNB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARooPzDHg3ZnA3tZEc4jpzrY6uys1jYsp2d3kQfLYyfAiEA2aZ7FBjax4u1H9szlSiQR0jv8wjN%2FhsR%2BpAoqLGxSSAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYAhGBOAKwuSH4U7SrcA6odYOJjBzyjM8VY9SNdG%2B20w2z%2BtjMhLsvVcj0RCMxs4YiENiRkXhvHdNwQDxOpqwz%2F2x6xX1Q2%2FPISJig837lIqi7jVDn7QmJDSB7xCJUHCgEuoxBrNaWK7TtP13vL73%2FFDdzAo9KPjU4qcNvbGppN3r0v83JbWXqcwzEZGG2wFzVzrBbS4IujviO70FHa%2FbsBoyfdWmTSV0PmHsFlxmc8OiS%2F9Qq23XrkSacHaBxzjWgB60izbxKY8e1vcam%2Fb%2BOW6OKGHxlitSFFNP%2F7bk2oh48TjWVeqie6Fl8X%2BcNY8I4Q0m0Gi4lRPfqIAcBf7t7NBPt%2BXRlxJQ6nCHR%2F7sbGvfWnB4gPH%2B6nxVrmVd8On%2BoMkakznKEKxbZkYcr0OZjHri1NE25VID99tqPvF5O5FAs63FBKo4z4HrXKMxoblQ6T9jknw9tnwISU8fmvALniss7B9jRIxdDCN5RS9lq9trXijgx9BWz%2BVeOclbqQidxJM%2FwIcPkiLa6q6BMvNtMME%2FdDPjpjEpsnVPNW3Wi%2BNnHF8Ztooe9gOI1YIzzGYo%2FiUeEFxPM40Pzc7Dju5j%2BZj7kh4oXcWqrqTyJCj2BceP987qBjvzNkusDqjyGIBxVfqI8%2F5LvxOz%2B5MJGKwMAGOqUByqKLUPYJ5NXgsrElPUpN6KXlyG30t%2FLotMaBXLvUzjnRQWldl3PajZfVU4VjLpEHCxl5k%2BVCnFRYr1raZhA9oPMUOIiCacR7oN5NT0SeSNSRXOEaQ5xJEK3iUsyxdKYzayJylUWaoXE8AFfp6L0AY48tg6BHhjvFc8bST7m%2FHwb3clT8eCrB%2Bf4utgUmetPBQbxAJp95OaoqmvKq4OAgFmNxgoEO&X-Amz-Signature=b2a7c607a3d258200d6db48b3356fb106c3b0718449f9284022e4a9c76afd502&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKYBCNB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARooPzDHg3ZnA3tZEc4jpzrY6uys1jYsp2d3kQfLYyfAiEA2aZ7FBjax4u1H9szlSiQR0jv8wjN%2FhsR%2BpAoqLGxSSAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYAhGBOAKwuSH4U7SrcA6odYOJjBzyjM8VY9SNdG%2B20w2z%2BtjMhLsvVcj0RCMxs4YiENiRkXhvHdNwQDxOpqwz%2F2x6xX1Q2%2FPISJig837lIqi7jVDn7QmJDSB7xCJUHCgEuoxBrNaWK7TtP13vL73%2FFDdzAo9KPjU4qcNvbGppN3r0v83JbWXqcwzEZGG2wFzVzrBbS4IujviO70FHa%2FbsBoyfdWmTSV0PmHsFlxmc8OiS%2F9Qq23XrkSacHaBxzjWgB60izbxKY8e1vcam%2Fb%2BOW6OKGHxlitSFFNP%2F7bk2oh48TjWVeqie6Fl8X%2BcNY8I4Q0m0Gi4lRPfqIAcBf7t7NBPt%2BXRlxJQ6nCHR%2F7sbGvfWnB4gPH%2B6nxVrmVd8On%2BoMkakznKEKxbZkYcr0OZjHri1NE25VID99tqPvF5O5FAs63FBKo4z4HrXKMxoblQ6T9jknw9tnwISU8fmvALniss7B9jRIxdDCN5RS9lq9trXijgx9BWz%2BVeOclbqQidxJM%2FwIcPkiLa6q6BMvNtMME%2FdDPjpjEpsnVPNW3Wi%2BNnHF8Ztooe9gOI1YIzzGYo%2FiUeEFxPM40Pzc7Dju5j%2BZj7kh4oXcWqrqTyJCj2BceP987qBjvzNkusDqjyGIBxVfqI8%2F5LvxOz%2B5MJGKwMAGOqUByqKLUPYJ5NXgsrElPUpN6KXlyG30t%2FLotMaBXLvUzjnRQWldl3PajZfVU4VjLpEHCxl5k%2BVCnFRYr1raZhA9oPMUOIiCacR7oN5NT0SeSNSRXOEaQ5xJEK3iUsyxdKYzayJylUWaoXE8AFfp6L0AY48tg6BHhjvFc8bST7m%2FHwb3clT8eCrB%2Bf4utgUmetPBQbxAJp95OaoqmvKq4OAgFmNxgoEO&X-Amz-Signature=acaaadc574960f7f8b2566004c3f48a4a24681a8948f082b711e6c6344299176&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
