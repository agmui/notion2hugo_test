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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62PXQ4K%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCTAX30uIzPoj4g28iTYXb6nUyG9tjbC0hVUrf%2FrEfemgIhALerCTfpG1ZVlYgvOiPHXaA0dqeLtqTgdh2uaoODzvEDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoKH3NhFiXqUUY4rcq3AOzP5%2FmXzCWIuAFD49NC0UxtY8rPCJ4ci%2BnYJCGJFo0XznNaHSQulLOs3nJmG1y8hcm1X1EwYy1SKMshBdmfYvwzcdu2Q6MOlPPk4UqqVjaKVvkpXuWgCLiyTMsaZJeOMmyrWqG45%2FKtNGJPRrFk6p8HdAfDgVr2MPZ9YnW5wHn%2BpBfRx02tzLEEWNj7vWxl4Z0rzNOSFDiKrgJQh3MURMdjAt5SIMHsCqSThxOf5lHKFXrhs0Af59lel8bse80VcEsLcXyPmNeCV3CkZF5Oc2p1z%2FUuumGNW1ewieTsIWT0BRErBmWi3Pa11teBN5YizKNBgnVxh24RO1DjoD9e3GFK7oRVnzC%2F2vinrQ94mJdQ9la92k7He356HpKewg5hmsQp0mvixIndW53orShs4o1%2F0qGzKmuRPNrI8VOfiYO2WocYVYyWbKhBBa2Eh7LdZQeaw3vUsCYQ%2BW9H8TOkxvRDuV3eVj4D5BrVaOlkfXR0beOQzLRPY2KqfYFUbxcumt3JlTcNvtjCTG1N6Mo%2FFq8a2XjiLy%2F3zP5R8IVCcE60T77w7aNKSSxAZClQkuK3E3EVLmFoKhI9BaaKArfx20pQLjFTFdTMF%2FCjPuOaIrlo%2FWL0neYbOKr5H8x6TDX2P7EBjqkAX0puApCTS7VX96lImycUPeQ%2FrlJ%2B8I6kczTfrAajo%2FCdMYyMuL8P9YpHj6BmX7zUAZbrAxU5aVFo9R6GvmJS%2F8QPtkAXwDYEEFeX6EF2Z9nCgLIpcuYRE%2BUNaAXj2XlfFZUE%2F3wzLL6XKXAzjhvqqzgHYV8gyOxoKYXRilNmTQ4aTtBpF%2FTZ2L26YkZrWzeb%2FuB55QdaUjZuofBVL%2BLw4AQ0sDI&X-Amz-Signature=2fc3be27322cea2694ea46c6ba91b553fa3f8ac95fe3fc965e26e08d090929a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62PXQ4K%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCTAX30uIzPoj4g28iTYXb6nUyG9tjbC0hVUrf%2FrEfemgIhALerCTfpG1ZVlYgvOiPHXaA0dqeLtqTgdh2uaoODzvEDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoKH3NhFiXqUUY4rcq3AOzP5%2FmXzCWIuAFD49NC0UxtY8rPCJ4ci%2BnYJCGJFo0XznNaHSQulLOs3nJmG1y8hcm1X1EwYy1SKMshBdmfYvwzcdu2Q6MOlPPk4UqqVjaKVvkpXuWgCLiyTMsaZJeOMmyrWqG45%2FKtNGJPRrFk6p8HdAfDgVr2MPZ9YnW5wHn%2BpBfRx02tzLEEWNj7vWxl4Z0rzNOSFDiKrgJQh3MURMdjAt5SIMHsCqSThxOf5lHKFXrhs0Af59lel8bse80VcEsLcXyPmNeCV3CkZF5Oc2p1z%2FUuumGNW1ewieTsIWT0BRErBmWi3Pa11teBN5YizKNBgnVxh24RO1DjoD9e3GFK7oRVnzC%2F2vinrQ94mJdQ9la92k7He356HpKewg5hmsQp0mvixIndW53orShs4o1%2F0qGzKmuRPNrI8VOfiYO2WocYVYyWbKhBBa2Eh7LdZQeaw3vUsCYQ%2BW9H8TOkxvRDuV3eVj4D5BrVaOlkfXR0beOQzLRPY2KqfYFUbxcumt3JlTcNvtjCTG1N6Mo%2FFq8a2XjiLy%2F3zP5R8IVCcE60T77w7aNKSSxAZClQkuK3E3EVLmFoKhI9BaaKArfx20pQLjFTFdTMF%2FCjPuOaIrlo%2FWL0neYbOKr5H8x6TDX2P7EBjqkAX0puApCTS7VX96lImycUPeQ%2FrlJ%2B8I6kczTfrAajo%2FCdMYyMuL8P9YpHj6BmX7zUAZbrAxU5aVFo9R6GvmJS%2F8QPtkAXwDYEEFeX6EF2Z9nCgLIpcuYRE%2BUNaAXj2XlfFZUE%2F3wzLL6XKXAzjhvqqzgHYV8gyOxoKYXRilNmTQ4aTtBpF%2FTZ2L26YkZrWzeb%2FuB55QdaUjZuofBVL%2BLw4AQ0sDI&X-Amz-Signature=0e33b1a90cf275a577ed5e75be5dc127b4f4cc35280ed7b50b0697877a9d209e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62PXQ4K%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCTAX30uIzPoj4g28iTYXb6nUyG9tjbC0hVUrf%2FrEfemgIhALerCTfpG1ZVlYgvOiPHXaA0dqeLtqTgdh2uaoODzvEDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoKH3NhFiXqUUY4rcq3AOzP5%2FmXzCWIuAFD49NC0UxtY8rPCJ4ci%2BnYJCGJFo0XznNaHSQulLOs3nJmG1y8hcm1X1EwYy1SKMshBdmfYvwzcdu2Q6MOlPPk4UqqVjaKVvkpXuWgCLiyTMsaZJeOMmyrWqG45%2FKtNGJPRrFk6p8HdAfDgVr2MPZ9YnW5wHn%2BpBfRx02tzLEEWNj7vWxl4Z0rzNOSFDiKrgJQh3MURMdjAt5SIMHsCqSThxOf5lHKFXrhs0Af59lel8bse80VcEsLcXyPmNeCV3CkZF5Oc2p1z%2FUuumGNW1ewieTsIWT0BRErBmWi3Pa11teBN5YizKNBgnVxh24RO1DjoD9e3GFK7oRVnzC%2F2vinrQ94mJdQ9la92k7He356HpKewg5hmsQp0mvixIndW53orShs4o1%2F0qGzKmuRPNrI8VOfiYO2WocYVYyWbKhBBa2Eh7LdZQeaw3vUsCYQ%2BW9H8TOkxvRDuV3eVj4D5BrVaOlkfXR0beOQzLRPY2KqfYFUbxcumt3JlTcNvtjCTG1N6Mo%2FFq8a2XjiLy%2F3zP5R8IVCcE60T77w7aNKSSxAZClQkuK3E3EVLmFoKhI9BaaKArfx20pQLjFTFdTMF%2FCjPuOaIrlo%2FWL0neYbOKr5H8x6TDX2P7EBjqkAX0puApCTS7VX96lImycUPeQ%2FrlJ%2B8I6kczTfrAajo%2FCdMYyMuL8P9YpHj6BmX7zUAZbrAxU5aVFo9R6GvmJS%2F8QPtkAXwDYEEFeX6EF2Z9nCgLIpcuYRE%2BUNaAXj2XlfFZUE%2F3wzLL6XKXAzjhvqqzgHYV8gyOxoKYXRilNmTQ4aTtBpF%2FTZ2L26YkZrWzeb%2FuB55QdaUjZuofBVL%2BLw4AQ0sDI&X-Amz-Signature=ebde67e7857e799887d7aed524d5191a8ded0cf7b049b1223fd1548495fdefdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62PXQ4K%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCTAX30uIzPoj4g28iTYXb6nUyG9tjbC0hVUrf%2FrEfemgIhALerCTfpG1ZVlYgvOiPHXaA0dqeLtqTgdh2uaoODzvEDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoKH3NhFiXqUUY4rcq3AOzP5%2FmXzCWIuAFD49NC0UxtY8rPCJ4ci%2BnYJCGJFo0XznNaHSQulLOs3nJmG1y8hcm1X1EwYy1SKMshBdmfYvwzcdu2Q6MOlPPk4UqqVjaKVvkpXuWgCLiyTMsaZJeOMmyrWqG45%2FKtNGJPRrFk6p8HdAfDgVr2MPZ9YnW5wHn%2BpBfRx02tzLEEWNj7vWxl4Z0rzNOSFDiKrgJQh3MURMdjAt5SIMHsCqSThxOf5lHKFXrhs0Af59lel8bse80VcEsLcXyPmNeCV3CkZF5Oc2p1z%2FUuumGNW1ewieTsIWT0BRErBmWi3Pa11teBN5YizKNBgnVxh24RO1DjoD9e3GFK7oRVnzC%2F2vinrQ94mJdQ9la92k7He356HpKewg5hmsQp0mvixIndW53orShs4o1%2F0qGzKmuRPNrI8VOfiYO2WocYVYyWbKhBBa2Eh7LdZQeaw3vUsCYQ%2BW9H8TOkxvRDuV3eVj4D5BrVaOlkfXR0beOQzLRPY2KqfYFUbxcumt3JlTcNvtjCTG1N6Mo%2FFq8a2XjiLy%2F3zP5R8IVCcE60T77w7aNKSSxAZClQkuK3E3EVLmFoKhI9BaaKArfx20pQLjFTFdTMF%2FCjPuOaIrlo%2FWL0neYbOKr5H8x6TDX2P7EBjqkAX0puApCTS7VX96lImycUPeQ%2FrlJ%2B8I6kczTfrAajo%2FCdMYyMuL8P9YpHj6BmX7zUAZbrAxU5aVFo9R6GvmJS%2F8QPtkAXwDYEEFeX6EF2Z9nCgLIpcuYRE%2BUNaAXj2XlfFZUE%2F3wzLL6XKXAzjhvqqzgHYV8gyOxoKYXRilNmTQ4aTtBpF%2FTZ2L26YkZrWzeb%2FuB55QdaUjZuofBVL%2BLw4AQ0sDI&X-Amz-Signature=b21ebb4a4655978ea03065b753dda2927a9f483174e49411d6c7a37ebee9cb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62PXQ4K%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCTAX30uIzPoj4g28iTYXb6nUyG9tjbC0hVUrf%2FrEfemgIhALerCTfpG1ZVlYgvOiPHXaA0dqeLtqTgdh2uaoODzvEDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoKH3NhFiXqUUY4rcq3AOzP5%2FmXzCWIuAFD49NC0UxtY8rPCJ4ci%2BnYJCGJFo0XznNaHSQulLOs3nJmG1y8hcm1X1EwYy1SKMshBdmfYvwzcdu2Q6MOlPPk4UqqVjaKVvkpXuWgCLiyTMsaZJeOMmyrWqG45%2FKtNGJPRrFk6p8HdAfDgVr2MPZ9YnW5wHn%2BpBfRx02tzLEEWNj7vWxl4Z0rzNOSFDiKrgJQh3MURMdjAt5SIMHsCqSThxOf5lHKFXrhs0Af59lel8bse80VcEsLcXyPmNeCV3CkZF5Oc2p1z%2FUuumGNW1ewieTsIWT0BRErBmWi3Pa11teBN5YizKNBgnVxh24RO1DjoD9e3GFK7oRVnzC%2F2vinrQ94mJdQ9la92k7He356HpKewg5hmsQp0mvixIndW53orShs4o1%2F0qGzKmuRPNrI8VOfiYO2WocYVYyWbKhBBa2Eh7LdZQeaw3vUsCYQ%2BW9H8TOkxvRDuV3eVj4D5BrVaOlkfXR0beOQzLRPY2KqfYFUbxcumt3JlTcNvtjCTG1N6Mo%2FFq8a2XjiLy%2F3zP5R8IVCcE60T77w7aNKSSxAZClQkuK3E3EVLmFoKhI9BaaKArfx20pQLjFTFdTMF%2FCjPuOaIrlo%2FWL0neYbOKr5H8x6TDX2P7EBjqkAX0puApCTS7VX96lImycUPeQ%2FrlJ%2B8I6kczTfrAajo%2FCdMYyMuL8P9YpHj6BmX7zUAZbrAxU5aVFo9R6GvmJS%2F8QPtkAXwDYEEFeX6EF2Z9nCgLIpcuYRE%2BUNaAXj2XlfFZUE%2F3wzLL6XKXAzjhvqqzgHYV8gyOxoKYXRilNmTQ4aTtBpF%2FTZ2L26YkZrWzeb%2FuB55QdaUjZuofBVL%2BLw4AQ0sDI&X-Amz-Signature=84b3e263cdb39abbc93c63ffdae8d9450bf122049c9550fc04bbce3f8473e74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
