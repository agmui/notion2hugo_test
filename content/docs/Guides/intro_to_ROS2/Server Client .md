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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNQWV5NU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC28wO3d5JTLVYYup2M6jWNrgnuB9bzd2LLGDKEtoBAuQIhAM1gisNnBagYH3ZS8iqVM%2FaURAkDQLg2s791pWvXllMtKv8DCCAQABoMNjM3NDIzMTgzODA1IgwwmRq%2BPsRcc7Wfeb0q3ANbk7LdHJb0bM%2BMz0GwGO1KDSDh1wvkE%2BWSuwpQ3d7bVVEsZNkJ9bURL4i9XMZQA5eHeHK4PtAv8GfyqjXsSXfZcPkMJiUhj3f%2FCEnETIcElhwR5UcymCbi0ulgoKcnj6oqXOvdWf2oMzEjQXW98bmr40HiuYoD9EsMbQwL5sfDaO92uiH5N5QjQ1vXFo5WVbCFjDfFL4LkCF56BFzJ67Sst7Hia9ii61hVaqujTSvVN8FFFZ1kD2NBDYiIGskO7bx4DcuDOigXDVR2DVmVFKcheRqt6D7cLzQDgKkYQDFH2tJICa9gfe2AKh5v%2BOQCZbx%2Fmoj%2BWOQ9asYVRKAbCYu%2BsMXLMk5a%2B0ryEAVjYHsvdQxVdO%2F8kxcNrdTukgIJOX%2BKv24AnQ31Iz0m3TszijKUYi2%2BoWC6Wod8IZ%2F6ZnWiO6tea%2B7rVDVlXg8SLy00HBr8yjqOTjk3fuY99fXQUNxnoaWzw8lIvFlQ35OpXEycXvWaCYhWK%2BBQlZi%2Bcm7a%2BJoKvnJqhfH7IyMbYP2VaZjZqpCvM7NCshHnz4NJsCdMc0OQN%2FmszMN1E7kpS61uiEluelu6PFI6t1fY9%2Bg43ApyjbZ1GgYI1JrBIaCxbvjHZPJlhy38ecF2dQqidzDq9%2F3BBjqkAR5sBr228%2FQRitS6E9NuHCDoiaxt2GXhecosL7NXd2NSngoirPNycyoVEbtayHhFl77Z3uIeQTKs5wmkf8NkQe1dVI2dcmZ7jmLexvLVa6CwiZ7bVcBVHx1X7t2lnjp8o2sn8JqsZWcEubBZisH2OoW9qKI%2FPwpv8dNmasy1ZcdACXqnDOzngj27KvylWvB2C2em%2B4CDVfdnIUWwbPhh1KmlVLND&X-Amz-Signature=cae737a08f3b628e36fed7a85e6863f760b2767a2163e9e0368b0f26adefbdf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNQWV5NU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC28wO3d5JTLVYYup2M6jWNrgnuB9bzd2LLGDKEtoBAuQIhAM1gisNnBagYH3ZS8iqVM%2FaURAkDQLg2s791pWvXllMtKv8DCCAQABoMNjM3NDIzMTgzODA1IgwwmRq%2BPsRcc7Wfeb0q3ANbk7LdHJb0bM%2BMz0GwGO1KDSDh1wvkE%2BWSuwpQ3d7bVVEsZNkJ9bURL4i9XMZQA5eHeHK4PtAv8GfyqjXsSXfZcPkMJiUhj3f%2FCEnETIcElhwR5UcymCbi0ulgoKcnj6oqXOvdWf2oMzEjQXW98bmr40HiuYoD9EsMbQwL5sfDaO92uiH5N5QjQ1vXFo5WVbCFjDfFL4LkCF56BFzJ67Sst7Hia9ii61hVaqujTSvVN8FFFZ1kD2NBDYiIGskO7bx4DcuDOigXDVR2DVmVFKcheRqt6D7cLzQDgKkYQDFH2tJICa9gfe2AKh5v%2BOQCZbx%2Fmoj%2BWOQ9asYVRKAbCYu%2BsMXLMk5a%2B0ryEAVjYHsvdQxVdO%2F8kxcNrdTukgIJOX%2BKv24AnQ31Iz0m3TszijKUYi2%2BoWC6Wod8IZ%2F6ZnWiO6tea%2B7rVDVlXg8SLy00HBr8yjqOTjk3fuY99fXQUNxnoaWzw8lIvFlQ35OpXEycXvWaCYhWK%2BBQlZi%2Bcm7a%2BJoKvnJqhfH7IyMbYP2VaZjZqpCvM7NCshHnz4NJsCdMc0OQN%2FmszMN1E7kpS61uiEluelu6PFI6t1fY9%2Bg43ApyjbZ1GgYI1JrBIaCxbvjHZPJlhy38ecF2dQqidzDq9%2F3BBjqkAR5sBr228%2FQRitS6E9NuHCDoiaxt2GXhecosL7NXd2NSngoirPNycyoVEbtayHhFl77Z3uIeQTKs5wmkf8NkQe1dVI2dcmZ7jmLexvLVa6CwiZ7bVcBVHx1X7t2lnjp8o2sn8JqsZWcEubBZisH2OoW9qKI%2FPwpv8dNmasy1ZcdACXqnDOzngj27KvylWvB2C2em%2B4CDVfdnIUWwbPhh1KmlVLND&X-Amz-Signature=b3fee6282a42b4b7cdd05178f6dc30998fa99d3114447a00abbccd7b23ee4113&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNQWV5NU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC28wO3d5JTLVYYup2M6jWNrgnuB9bzd2LLGDKEtoBAuQIhAM1gisNnBagYH3ZS8iqVM%2FaURAkDQLg2s791pWvXllMtKv8DCCAQABoMNjM3NDIzMTgzODA1IgwwmRq%2BPsRcc7Wfeb0q3ANbk7LdHJb0bM%2BMz0GwGO1KDSDh1wvkE%2BWSuwpQ3d7bVVEsZNkJ9bURL4i9XMZQA5eHeHK4PtAv8GfyqjXsSXfZcPkMJiUhj3f%2FCEnETIcElhwR5UcymCbi0ulgoKcnj6oqXOvdWf2oMzEjQXW98bmr40HiuYoD9EsMbQwL5sfDaO92uiH5N5QjQ1vXFo5WVbCFjDfFL4LkCF56BFzJ67Sst7Hia9ii61hVaqujTSvVN8FFFZ1kD2NBDYiIGskO7bx4DcuDOigXDVR2DVmVFKcheRqt6D7cLzQDgKkYQDFH2tJICa9gfe2AKh5v%2BOQCZbx%2Fmoj%2BWOQ9asYVRKAbCYu%2BsMXLMk5a%2B0ryEAVjYHsvdQxVdO%2F8kxcNrdTukgIJOX%2BKv24AnQ31Iz0m3TszijKUYi2%2BoWC6Wod8IZ%2F6ZnWiO6tea%2B7rVDVlXg8SLy00HBr8yjqOTjk3fuY99fXQUNxnoaWzw8lIvFlQ35OpXEycXvWaCYhWK%2BBQlZi%2Bcm7a%2BJoKvnJqhfH7IyMbYP2VaZjZqpCvM7NCshHnz4NJsCdMc0OQN%2FmszMN1E7kpS61uiEluelu6PFI6t1fY9%2Bg43ApyjbZ1GgYI1JrBIaCxbvjHZPJlhy38ecF2dQqidzDq9%2F3BBjqkAR5sBr228%2FQRitS6E9NuHCDoiaxt2GXhecosL7NXd2NSngoirPNycyoVEbtayHhFl77Z3uIeQTKs5wmkf8NkQe1dVI2dcmZ7jmLexvLVa6CwiZ7bVcBVHx1X7t2lnjp8o2sn8JqsZWcEubBZisH2OoW9qKI%2FPwpv8dNmasy1ZcdACXqnDOzngj27KvylWvB2C2em%2B4CDVfdnIUWwbPhh1KmlVLND&X-Amz-Signature=93ced7e4de7f0b7476000c4448e47fd514007787d684693f0989aaecd073ad31&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNQWV5NU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC28wO3d5JTLVYYup2M6jWNrgnuB9bzd2LLGDKEtoBAuQIhAM1gisNnBagYH3ZS8iqVM%2FaURAkDQLg2s791pWvXllMtKv8DCCAQABoMNjM3NDIzMTgzODA1IgwwmRq%2BPsRcc7Wfeb0q3ANbk7LdHJb0bM%2BMz0GwGO1KDSDh1wvkE%2BWSuwpQ3d7bVVEsZNkJ9bURL4i9XMZQA5eHeHK4PtAv8GfyqjXsSXfZcPkMJiUhj3f%2FCEnETIcElhwR5UcymCbi0ulgoKcnj6oqXOvdWf2oMzEjQXW98bmr40HiuYoD9EsMbQwL5sfDaO92uiH5N5QjQ1vXFo5WVbCFjDfFL4LkCF56BFzJ67Sst7Hia9ii61hVaqujTSvVN8FFFZ1kD2NBDYiIGskO7bx4DcuDOigXDVR2DVmVFKcheRqt6D7cLzQDgKkYQDFH2tJICa9gfe2AKh5v%2BOQCZbx%2Fmoj%2BWOQ9asYVRKAbCYu%2BsMXLMk5a%2B0ryEAVjYHsvdQxVdO%2F8kxcNrdTukgIJOX%2BKv24AnQ31Iz0m3TszijKUYi2%2BoWC6Wod8IZ%2F6ZnWiO6tea%2B7rVDVlXg8SLy00HBr8yjqOTjk3fuY99fXQUNxnoaWzw8lIvFlQ35OpXEycXvWaCYhWK%2BBQlZi%2Bcm7a%2BJoKvnJqhfH7IyMbYP2VaZjZqpCvM7NCshHnz4NJsCdMc0OQN%2FmszMN1E7kpS61uiEluelu6PFI6t1fY9%2Bg43ApyjbZ1GgYI1JrBIaCxbvjHZPJlhy38ecF2dQqidzDq9%2F3BBjqkAR5sBr228%2FQRitS6E9NuHCDoiaxt2GXhecosL7NXd2NSngoirPNycyoVEbtayHhFl77Z3uIeQTKs5wmkf8NkQe1dVI2dcmZ7jmLexvLVa6CwiZ7bVcBVHx1X7t2lnjp8o2sn8JqsZWcEubBZisH2OoW9qKI%2FPwpv8dNmasy1ZcdACXqnDOzngj27KvylWvB2C2em%2B4CDVfdnIUWwbPhh1KmlVLND&X-Amz-Signature=933fd8b3dda2e8b617d7bac1fbbd88a745446260bf65c9759870fd3196466a77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNQWV5NU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC28wO3d5JTLVYYup2M6jWNrgnuB9bzd2LLGDKEtoBAuQIhAM1gisNnBagYH3ZS8iqVM%2FaURAkDQLg2s791pWvXllMtKv8DCCAQABoMNjM3NDIzMTgzODA1IgwwmRq%2BPsRcc7Wfeb0q3ANbk7LdHJb0bM%2BMz0GwGO1KDSDh1wvkE%2BWSuwpQ3d7bVVEsZNkJ9bURL4i9XMZQA5eHeHK4PtAv8GfyqjXsSXfZcPkMJiUhj3f%2FCEnETIcElhwR5UcymCbi0ulgoKcnj6oqXOvdWf2oMzEjQXW98bmr40HiuYoD9EsMbQwL5sfDaO92uiH5N5QjQ1vXFo5WVbCFjDfFL4LkCF56BFzJ67Sst7Hia9ii61hVaqujTSvVN8FFFZ1kD2NBDYiIGskO7bx4DcuDOigXDVR2DVmVFKcheRqt6D7cLzQDgKkYQDFH2tJICa9gfe2AKh5v%2BOQCZbx%2Fmoj%2BWOQ9asYVRKAbCYu%2BsMXLMk5a%2B0ryEAVjYHsvdQxVdO%2F8kxcNrdTukgIJOX%2BKv24AnQ31Iz0m3TszijKUYi2%2BoWC6Wod8IZ%2F6ZnWiO6tea%2B7rVDVlXg8SLy00HBr8yjqOTjk3fuY99fXQUNxnoaWzw8lIvFlQ35OpXEycXvWaCYhWK%2BBQlZi%2Bcm7a%2BJoKvnJqhfH7IyMbYP2VaZjZqpCvM7NCshHnz4NJsCdMc0OQN%2FmszMN1E7kpS61uiEluelu6PFI6t1fY9%2Bg43ApyjbZ1GgYI1JrBIaCxbvjHZPJlhy38ecF2dQqidzDq9%2F3BBjqkAR5sBr228%2FQRitS6E9NuHCDoiaxt2GXhecosL7NXd2NSngoirPNycyoVEbtayHhFl77Z3uIeQTKs5wmkf8NkQe1dVI2dcmZ7jmLexvLVa6CwiZ7bVcBVHx1X7t2lnjp8o2sn8JqsZWcEubBZisH2OoW9qKI%2FPwpv8dNmasy1ZcdACXqnDOzngj27KvylWvB2C2em%2B4CDVfdnIUWwbPhh1KmlVLND&X-Amz-Signature=f6383e62ff37c5df948a45ad30addc4b98f9c6c08d8fa4ef9000305c0d1b862e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
