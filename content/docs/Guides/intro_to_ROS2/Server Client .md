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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX77SGA2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD0H52nEicg2IlDf0fnzj%2BcHIS06iDNucwj0kTeczpjgwIhANExlCbKK3khSEavbsB3c93FeW4xL5gKGosl4JxMNrxnKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTP5RXzn%2FSLMb6upoq3AMu0wpcAxx2McmCbJKEkED95hQdjq6znrFi2%2FDcghYTs0YnObAsuXDVaYqgsd81bCPLtHc6rFpbkwtr7SXK3hWtbQ0vMc%2Fs%2B0hb9F9VneEB8fQXO7TmTtEz0swRVweX4ECjA2yvEPGQohnFxS9YqXAig%2FNQ3UX50KzWxiBDAIuGUWLh0bB9XP6TyiB4SZvWxN7dFOmzA6GArw0d3rLs9m9sJukbgJkJ68s4AOvoE%2BVC1TCUX0gS8EMsRnIO2099EpZExSNGrqo6wpUabTLr16l0n5iYc0Cyo8mbTTXC3QbaE18u1kSw3RV7I5O6AwOTqiWmF23d1Cnkdc3bFyDcTa5QByMuw2mSQUUFEMQHY8VbQ2rq6wEPsF8TkBQZUu9pVaxn0Zhog26OmA6R1Mh7%2FmDWGSOgv%2F%2Bsy%2BibHqqq%2BnfG6qogbrXH4AvkGUfUHR3sasifdtw%2BWTXOS5N38j3GbXa8zABnB6oNKyGvCxd%2FXgDXv06obmELcoP%2FhLre28nB6tI03eXVAwf7tZGxwxdD8dvsVpYk0ejSUmN3HKErKOhq%2Ftl%2FIjKYXIVF9ZIeg8OIc0yaoj0O8otIN%2BZh1ALlHdbzD8cZtNI2881zo5GMVZa1cyjVRF%2Bgn2msEcUWqDCrxJPABjqkAZw8qhTVgxriHjoeo9RIL6mMLUewh7V3bLmMyHJKJX5oSPX4%2BpvG1oPTVl4waUnDR%2By26GrDB6HZ1EUtDDZ%2BKYVa%2FvbnlmG9jDJEYkiVFrH3xUyt%2FTA3ZRkoN0A7Q7duPdxda7x0iYR58RduoKyme0xPJaF4zMKkUgid5utz3dBHNrZHyUis%2FWgNvHM8CG5C62Mah44DnlBTyuvuI%2BgzMx0YXhje&X-Amz-Signature=a4813d619bd0a10254bb8c15bb731a5c5e511ceb17728a011869880e2a9efaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX77SGA2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD0H52nEicg2IlDf0fnzj%2BcHIS06iDNucwj0kTeczpjgwIhANExlCbKK3khSEavbsB3c93FeW4xL5gKGosl4JxMNrxnKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTP5RXzn%2FSLMb6upoq3AMu0wpcAxx2McmCbJKEkED95hQdjq6znrFi2%2FDcghYTs0YnObAsuXDVaYqgsd81bCPLtHc6rFpbkwtr7SXK3hWtbQ0vMc%2Fs%2B0hb9F9VneEB8fQXO7TmTtEz0swRVweX4ECjA2yvEPGQohnFxS9YqXAig%2FNQ3UX50KzWxiBDAIuGUWLh0bB9XP6TyiB4SZvWxN7dFOmzA6GArw0d3rLs9m9sJukbgJkJ68s4AOvoE%2BVC1TCUX0gS8EMsRnIO2099EpZExSNGrqo6wpUabTLr16l0n5iYc0Cyo8mbTTXC3QbaE18u1kSw3RV7I5O6AwOTqiWmF23d1Cnkdc3bFyDcTa5QByMuw2mSQUUFEMQHY8VbQ2rq6wEPsF8TkBQZUu9pVaxn0Zhog26OmA6R1Mh7%2FmDWGSOgv%2F%2Bsy%2BibHqqq%2BnfG6qogbrXH4AvkGUfUHR3sasifdtw%2BWTXOS5N38j3GbXa8zABnB6oNKyGvCxd%2FXgDXv06obmELcoP%2FhLre28nB6tI03eXVAwf7tZGxwxdD8dvsVpYk0ejSUmN3HKErKOhq%2Ftl%2FIjKYXIVF9ZIeg8OIc0yaoj0O8otIN%2BZh1ALlHdbzD8cZtNI2881zo5GMVZa1cyjVRF%2Bgn2msEcUWqDCrxJPABjqkAZw8qhTVgxriHjoeo9RIL6mMLUewh7V3bLmMyHJKJX5oSPX4%2BpvG1oPTVl4waUnDR%2By26GrDB6HZ1EUtDDZ%2BKYVa%2FvbnlmG9jDJEYkiVFrH3xUyt%2FTA3ZRkoN0A7Q7duPdxda7x0iYR58RduoKyme0xPJaF4zMKkUgid5utz3dBHNrZHyUis%2FWgNvHM8CG5C62Mah44DnlBTyuvuI%2BgzMx0YXhje&X-Amz-Signature=a84faaceaca1355931eb6c2c0db176d78775b43698b2f5c9491c756ab57741c1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX77SGA2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD0H52nEicg2IlDf0fnzj%2BcHIS06iDNucwj0kTeczpjgwIhANExlCbKK3khSEavbsB3c93FeW4xL5gKGosl4JxMNrxnKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTP5RXzn%2FSLMb6upoq3AMu0wpcAxx2McmCbJKEkED95hQdjq6znrFi2%2FDcghYTs0YnObAsuXDVaYqgsd81bCPLtHc6rFpbkwtr7SXK3hWtbQ0vMc%2Fs%2B0hb9F9VneEB8fQXO7TmTtEz0swRVweX4ECjA2yvEPGQohnFxS9YqXAig%2FNQ3UX50KzWxiBDAIuGUWLh0bB9XP6TyiB4SZvWxN7dFOmzA6GArw0d3rLs9m9sJukbgJkJ68s4AOvoE%2BVC1TCUX0gS8EMsRnIO2099EpZExSNGrqo6wpUabTLr16l0n5iYc0Cyo8mbTTXC3QbaE18u1kSw3RV7I5O6AwOTqiWmF23d1Cnkdc3bFyDcTa5QByMuw2mSQUUFEMQHY8VbQ2rq6wEPsF8TkBQZUu9pVaxn0Zhog26OmA6R1Mh7%2FmDWGSOgv%2F%2Bsy%2BibHqqq%2BnfG6qogbrXH4AvkGUfUHR3sasifdtw%2BWTXOS5N38j3GbXa8zABnB6oNKyGvCxd%2FXgDXv06obmELcoP%2FhLre28nB6tI03eXVAwf7tZGxwxdD8dvsVpYk0ejSUmN3HKErKOhq%2Ftl%2FIjKYXIVF9ZIeg8OIc0yaoj0O8otIN%2BZh1ALlHdbzD8cZtNI2881zo5GMVZa1cyjVRF%2Bgn2msEcUWqDCrxJPABjqkAZw8qhTVgxriHjoeo9RIL6mMLUewh7V3bLmMyHJKJX5oSPX4%2BpvG1oPTVl4waUnDR%2By26GrDB6HZ1EUtDDZ%2BKYVa%2FvbnlmG9jDJEYkiVFrH3xUyt%2FTA3ZRkoN0A7Q7duPdxda7x0iYR58RduoKyme0xPJaF4zMKkUgid5utz3dBHNrZHyUis%2FWgNvHM8CG5C62Mah44DnlBTyuvuI%2BgzMx0YXhje&X-Amz-Signature=ff52872ba4535120a84523a1a2c8f1214f2d4354d1381a13a356a38544772f76&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX77SGA2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD0H52nEicg2IlDf0fnzj%2BcHIS06iDNucwj0kTeczpjgwIhANExlCbKK3khSEavbsB3c93FeW4xL5gKGosl4JxMNrxnKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTP5RXzn%2FSLMb6upoq3AMu0wpcAxx2McmCbJKEkED95hQdjq6znrFi2%2FDcghYTs0YnObAsuXDVaYqgsd81bCPLtHc6rFpbkwtr7SXK3hWtbQ0vMc%2Fs%2B0hb9F9VneEB8fQXO7TmTtEz0swRVweX4ECjA2yvEPGQohnFxS9YqXAig%2FNQ3UX50KzWxiBDAIuGUWLh0bB9XP6TyiB4SZvWxN7dFOmzA6GArw0d3rLs9m9sJukbgJkJ68s4AOvoE%2BVC1TCUX0gS8EMsRnIO2099EpZExSNGrqo6wpUabTLr16l0n5iYc0Cyo8mbTTXC3QbaE18u1kSw3RV7I5O6AwOTqiWmF23d1Cnkdc3bFyDcTa5QByMuw2mSQUUFEMQHY8VbQ2rq6wEPsF8TkBQZUu9pVaxn0Zhog26OmA6R1Mh7%2FmDWGSOgv%2F%2Bsy%2BibHqqq%2BnfG6qogbrXH4AvkGUfUHR3sasifdtw%2BWTXOS5N38j3GbXa8zABnB6oNKyGvCxd%2FXgDXv06obmELcoP%2FhLre28nB6tI03eXVAwf7tZGxwxdD8dvsVpYk0ejSUmN3HKErKOhq%2Ftl%2FIjKYXIVF9ZIeg8OIc0yaoj0O8otIN%2BZh1ALlHdbzD8cZtNI2881zo5GMVZa1cyjVRF%2Bgn2msEcUWqDCrxJPABjqkAZw8qhTVgxriHjoeo9RIL6mMLUewh7V3bLmMyHJKJX5oSPX4%2BpvG1oPTVl4waUnDR%2By26GrDB6HZ1EUtDDZ%2BKYVa%2FvbnlmG9jDJEYkiVFrH3xUyt%2FTA3ZRkoN0A7Q7duPdxda7x0iYR58RduoKyme0xPJaF4zMKkUgid5utz3dBHNrZHyUis%2FWgNvHM8CG5C62Mah44DnlBTyuvuI%2BgzMx0YXhje&X-Amz-Signature=1d9de574c27f54c699eab5add4e76f498aedf814a132278a8d1f15d92de3f2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX77SGA2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD0H52nEicg2IlDf0fnzj%2BcHIS06iDNucwj0kTeczpjgwIhANExlCbKK3khSEavbsB3c93FeW4xL5gKGosl4JxMNrxnKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTP5RXzn%2FSLMb6upoq3AMu0wpcAxx2McmCbJKEkED95hQdjq6znrFi2%2FDcghYTs0YnObAsuXDVaYqgsd81bCPLtHc6rFpbkwtr7SXK3hWtbQ0vMc%2Fs%2B0hb9F9VneEB8fQXO7TmTtEz0swRVweX4ECjA2yvEPGQohnFxS9YqXAig%2FNQ3UX50KzWxiBDAIuGUWLh0bB9XP6TyiB4SZvWxN7dFOmzA6GArw0d3rLs9m9sJukbgJkJ68s4AOvoE%2BVC1TCUX0gS8EMsRnIO2099EpZExSNGrqo6wpUabTLr16l0n5iYc0Cyo8mbTTXC3QbaE18u1kSw3RV7I5O6AwOTqiWmF23d1Cnkdc3bFyDcTa5QByMuw2mSQUUFEMQHY8VbQ2rq6wEPsF8TkBQZUu9pVaxn0Zhog26OmA6R1Mh7%2FmDWGSOgv%2F%2Bsy%2BibHqqq%2BnfG6qogbrXH4AvkGUfUHR3sasifdtw%2BWTXOS5N38j3GbXa8zABnB6oNKyGvCxd%2FXgDXv06obmELcoP%2FhLre28nB6tI03eXVAwf7tZGxwxdD8dvsVpYk0ejSUmN3HKErKOhq%2Ftl%2FIjKYXIVF9ZIeg8OIc0yaoj0O8otIN%2BZh1ALlHdbzD8cZtNI2881zo5GMVZa1cyjVRF%2Bgn2msEcUWqDCrxJPABjqkAZw8qhTVgxriHjoeo9RIL6mMLUewh7V3bLmMyHJKJX5oSPX4%2BpvG1oPTVl4waUnDR%2By26GrDB6HZ1EUtDDZ%2BKYVa%2FvbnlmG9jDJEYkiVFrH3xUyt%2FTA3ZRkoN0A7Q7duPdxda7x0iYR58RduoKyme0xPJaF4zMKkUgid5utz3dBHNrZHyUis%2FWgNvHM8CG5C62Mah44DnlBTyuvuI%2BgzMx0YXhje&X-Amz-Signature=fb673b9c1c978f476e4710e65deefea263d528c35ae7bb64963c840584d117f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
