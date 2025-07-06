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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNTZ6RJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDkpuHkOpuH5%2Fs%2Bgrf9CC%2FF4Gk3kCVA83iMFqcdslTNzQIhALFfzwZYcAt1MGuj367SC69p162XTWm5D6qYpyEhkxtVKv8DCFUQABoMNjM3NDIzMTgzODA1IgxZZz5PEy%2BxIgA2dyUq3AOn3PiP2fZM38YHVqG%2Brs5p%2F%2F%2F2XwAQ8JC6mg6A1EJFr2ty%2FmoeQV2CG9f0Yp3k5xGSNxuNsmg9IEs7%2BXKKUYKrU1W5jjV3ZzMVxnVqfJNoeLklMdDF5KBBg5vPehG7QeA3EcnmjAdu%2B09%2B4Trt%2FFx4sSBj%2BOcLAhfiHaHcCsvh%2F0pEmQzTD0AGede9kv0g%2FcRtrL449jVwHNV%2FhHgUVXSg5ZSWTicyxj%2Bbw1ETyupDVHrP0iJh6j6fgpQ7rNUx3uqKfRLCPt1BRyYzpwZipFnbJnKMdBmAoYp8fd0aWWByPeVAWXuTxoMb3xRxlbIioi62dRh%2F2Pnk9rww%2FlpLMjv5331u1Nf0qPwgtwI5AQ3Ypig0bMEBYQo%2Bam5TTwbDwr1oVWTja5Y19Rj0pBe1b7jdLaFhU8u%2FQ8Fck6sp8GR4qNvHDuM2z92zX3dmY8g6QDHMa7qwtxr%2FxsNkOlbQph3zQd14uT%2B%2FI%2BGXgBA4GzrM86aZdZDLzxWyrOOTMo0bE4ywDI6miDB6n%2FT%2B8OzS76OuGqlc1FjgerDK1UL73wLbsKeSQFdujyQGNGs%2Fw8xMMEHG0qPSerU9FlLg9I6daXlYiBD%2Bf3MoxWvnf55YvXUPxe4ZoSYZdCL%2BFcL5ejCI6qfDBjqkAfUy2temw%2Fr%2BGc7x8EjeBDRVJ%2FBAl97LdRl80J7yQbqzQB9Agi4ANT0zkboSHjSnJzvZuM9JcWe3LbSeZw2mFCoYbZmdy1FWbivhplxLBJnNwI3K7T%2Fb%2FSCcWaDPpRzN%2FMlasVoGXu1cXdQ69kxzbO3GeUO8gNR7Q%2BIwsLTl2yqVVpEznbE%2FPcUxT4XbdvraUuaWJybCM8epX4IYSP%2Bit2zwq9Jd&X-Amz-Signature=ad5bfd80ec31bfb1ebd6a7b2f7eded844fa89baaa8d770c7dfb7defb88a6e587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNTZ6RJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDkpuHkOpuH5%2Fs%2Bgrf9CC%2FF4Gk3kCVA83iMFqcdslTNzQIhALFfzwZYcAt1MGuj367SC69p162XTWm5D6qYpyEhkxtVKv8DCFUQABoMNjM3NDIzMTgzODA1IgxZZz5PEy%2BxIgA2dyUq3AOn3PiP2fZM38YHVqG%2Brs5p%2F%2F%2F2XwAQ8JC6mg6A1EJFr2ty%2FmoeQV2CG9f0Yp3k5xGSNxuNsmg9IEs7%2BXKKUYKrU1W5jjV3ZzMVxnVqfJNoeLklMdDF5KBBg5vPehG7QeA3EcnmjAdu%2B09%2B4Trt%2FFx4sSBj%2BOcLAhfiHaHcCsvh%2F0pEmQzTD0AGede9kv0g%2FcRtrL449jVwHNV%2FhHgUVXSg5ZSWTicyxj%2Bbw1ETyupDVHrP0iJh6j6fgpQ7rNUx3uqKfRLCPt1BRyYzpwZipFnbJnKMdBmAoYp8fd0aWWByPeVAWXuTxoMb3xRxlbIioi62dRh%2F2Pnk9rww%2FlpLMjv5331u1Nf0qPwgtwI5AQ3Ypig0bMEBYQo%2Bam5TTwbDwr1oVWTja5Y19Rj0pBe1b7jdLaFhU8u%2FQ8Fck6sp8GR4qNvHDuM2z92zX3dmY8g6QDHMa7qwtxr%2FxsNkOlbQph3zQd14uT%2B%2FI%2BGXgBA4GzrM86aZdZDLzxWyrOOTMo0bE4ywDI6miDB6n%2FT%2B8OzS76OuGqlc1FjgerDK1UL73wLbsKeSQFdujyQGNGs%2Fw8xMMEHG0qPSerU9FlLg9I6daXlYiBD%2Bf3MoxWvnf55YvXUPxe4ZoSYZdCL%2BFcL5ejCI6qfDBjqkAfUy2temw%2Fr%2BGc7x8EjeBDRVJ%2FBAl97LdRl80J7yQbqzQB9Agi4ANT0zkboSHjSnJzvZuM9JcWe3LbSeZw2mFCoYbZmdy1FWbivhplxLBJnNwI3K7T%2Fb%2FSCcWaDPpRzN%2FMlasVoGXu1cXdQ69kxzbO3GeUO8gNR7Q%2BIwsLTl2yqVVpEznbE%2FPcUxT4XbdvraUuaWJybCM8epX4IYSP%2Bit2zwq9Jd&X-Amz-Signature=25785121f5366dc580a0e8a9e0ac421fca987ab835314a06933672698c95c929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNTZ6RJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDkpuHkOpuH5%2Fs%2Bgrf9CC%2FF4Gk3kCVA83iMFqcdslTNzQIhALFfzwZYcAt1MGuj367SC69p162XTWm5D6qYpyEhkxtVKv8DCFUQABoMNjM3NDIzMTgzODA1IgxZZz5PEy%2BxIgA2dyUq3AOn3PiP2fZM38YHVqG%2Brs5p%2F%2F%2F2XwAQ8JC6mg6A1EJFr2ty%2FmoeQV2CG9f0Yp3k5xGSNxuNsmg9IEs7%2BXKKUYKrU1W5jjV3ZzMVxnVqfJNoeLklMdDF5KBBg5vPehG7QeA3EcnmjAdu%2B09%2B4Trt%2FFx4sSBj%2BOcLAhfiHaHcCsvh%2F0pEmQzTD0AGede9kv0g%2FcRtrL449jVwHNV%2FhHgUVXSg5ZSWTicyxj%2Bbw1ETyupDVHrP0iJh6j6fgpQ7rNUx3uqKfRLCPt1BRyYzpwZipFnbJnKMdBmAoYp8fd0aWWByPeVAWXuTxoMb3xRxlbIioi62dRh%2F2Pnk9rww%2FlpLMjv5331u1Nf0qPwgtwI5AQ3Ypig0bMEBYQo%2Bam5TTwbDwr1oVWTja5Y19Rj0pBe1b7jdLaFhU8u%2FQ8Fck6sp8GR4qNvHDuM2z92zX3dmY8g6QDHMa7qwtxr%2FxsNkOlbQph3zQd14uT%2B%2FI%2BGXgBA4GzrM86aZdZDLzxWyrOOTMo0bE4ywDI6miDB6n%2FT%2B8OzS76OuGqlc1FjgerDK1UL73wLbsKeSQFdujyQGNGs%2Fw8xMMEHG0qPSerU9FlLg9I6daXlYiBD%2Bf3MoxWvnf55YvXUPxe4ZoSYZdCL%2BFcL5ejCI6qfDBjqkAfUy2temw%2Fr%2BGc7x8EjeBDRVJ%2FBAl97LdRl80J7yQbqzQB9Agi4ANT0zkboSHjSnJzvZuM9JcWe3LbSeZw2mFCoYbZmdy1FWbivhplxLBJnNwI3K7T%2Fb%2FSCcWaDPpRzN%2FMlasVoGXu1cXdQ69kxzbO3GeUO8gNR7Q%2BIwsLTl2yqVVpEznbE%2FPcUxT4XbdvraUuaWJybCM8epX4IYSP%2Bit2zwq9Jd&X-Amz-Signature=ec768aca8dc3345f6cf48af5ee4ba3cfaf43c013cc330338b4f61e3943a0c28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNTZ6RJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDkpuHkOpuH5%2Fs%2Bgrf9CC%2FF4Gk3kCVA83iMFqcdslTNzQIhALFfzwZYcAt1MGuj367SC69p162XTWm5D6qYpyEhkxtVKv8DCFUQABoMNjM3NDIzMTgzODA1IgxZZz5PEy%2BxIgA2dyUq3AOn3PiP2fZM38YHVqG%2Brs5p%2F%2F%2F2XwAQ8JC6mg6A1EJFr2ty%2FmoeQV2CG9f0Yp3k5xGSNxuNsmg9IEs7%2BXKKUYKrU1W5jjV3ZzMVxnVqfJNoeLklMdDF5KBBg5vPehG7QeA3EcnmjAdu%2B09%2B4Trt%2FFx4sSBj%2BOcLAhfiHaHcCsvh%2F0pEmQzTD0AGede9kv0g%2FcRtrL449jVwHNV%2FhHgUVXSg5ZSWTicyxj%2Bbw1ETyupDVHrP0iJh6j6fgpQ7rNUx3uqKfRLCPt1BRyYzpwZipFnbJnKMdBmAoYp8fd0aWWByPeVAWXuTxoMb3xRxlbIioi62dRh%2F2Pnk9rww%2FlpLMjv5331u1Nf0qPwgtwI5AQ3Ypig0bMEBYQo%2Bam5TTwbDwr1oVWTja5Y19Rj0pBe1b7jdLaFhU8u%2FQ8Fck6sp8GR4qNvHDuM2z92zX3dmY8g6QDHMa7qwtxr%2FxsNkOlbQph3zQd14uT%2B%2FI%2BGXgBA4GzrM86aZdZDLzxWyrOOTMo0bE4ywDI6miDB6n%2FT%2B8OzS76OuGqlc1FjgerDK1UL73wLbsKeSQFdujyQGNGs%2Fw8xMMEHG0qPSerU9FlLg9I6daXlYiBD%2Bf3MoxWvnf55YvXUPxe4ZoSYZdCL%2BFcL5ejCI6qfDBjqkAfUy2temw%2Fr%2BGc7x8EjeBDRVJ%2FBAl97LdRl80J7yQbqzQB9Agi4ANT0zkboSHjSnJzvZuM9JcWe3LbSeZw2mFCoYbZmdy1FWbivhplxLBJnNwI3K7T%2Fb%2FSCcWaDPpRzN%2FMlasVoGXu1cXdQ69kxzbO3GeUO8gNR7Q%2BIwsLTl2yqVVpEznbE%2FPcUxT4XbdvraUuaWJybCM8epX4IYSP%2Bit2zwq9Jd&X-Amz-Signature=07645236421e84d85aa3dd66b54905fc180e99ea046b6d8ca7ef83ab1ee3294d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNTZ6RJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDkpuHkOpuH5%2Fs%2Bgrf9CC%2FF4Gk3kCVA83iMFqcdslTNzQIhALFfzwZYcAt1MGuj367SC69p162XTWm5D6qYpyEhkxtVKv8DCFUQABoMNjM3NDIzMTgzODA1IgxZZz5PEy%2BxIgA2dyUq3AOn3PiP2fZM38YHVqG%2Brs5p%2F%2F%2F2XwAQ8JC6mg6A1EJFr2ty%2FmoeQV2CG9f0Yp3k5xGSNxuNsmg9IEs7%2BXKKUYKrU1W5jjV3ZzMVxnVqfJNoeLklMdDF5KBBg5vPehG7QeA3EcnmjAdu%2B09%2B4Trt%2FFx4sSBj%2BOcLAhfiHaHcCsvh%2F0pEmQzTD0AGede9kv0g%2FcRtrL449jVwHNV%2FhHgUVXSg5ZSWTicyxj%2Bbw1ETyupDVHrP0iJh6j6fgpQ7rNUx3uqKfRLCPt1BRyYzpwZipFnbJnKMdBmAoYp8fd0aWWByPeVAWXuTxoMb3xRxlbIioi62dRh%2F2Pnk9rww%2FlpLMjv5331u1Nf0qPwgtwI5AQ3Ypig0bMEBYQo%2Bam5TTwbDwr1oVWTja5Y19Rj0pBe1b7jdLaFhU8u%2FQ8Fck6sp8GR4qNvHDuM2z92zX3dmY8g6QDHMa7qwtxr%2FxsNkOlbQph3zQd14uT%2B%2FI%2BGXgBA4GzrM86aZdZDLzxWyrOOTMo0bE4ywDI6miDB6n%2FT%2B8OzS76OuGqlc1FjgerDK1UL73wLbsKeSQFdujyQGNGs%2Fw8xMMEHG0qPSerU9FlLg9I6daXlYiBD%2Bf3MoxWvnf55YvXUPxe4ZoSYZdCL%2BFcL5ejCI6qfDBjqkAfUy2temw%2Fr%2BGc7x8EjeBDRVJ%2FBAl97LdRl80J7yQbqzQB9Agi4ANT0zkboSHjSnJzvZuM9JcWe3LbSeZw2mFCoYbZmdy1FWbivhplxLBJnNwI3K7T%2Fb%2FSCcWaDPpRzN%2FMlasVoGXu1cXdQ69kxzbO3GeUO8gNR7Q%2BIwsLTl2yqVVpEznbE%2FPcUxT4XbdvraUuaWJybCM8epX4IYSP%2Bit2zwq9Jd&X-Amz-Signature=d5bd46b4f0184f5448b16fa1b7fd65f9785fd308ca4d05296dcc86e8801f70db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
