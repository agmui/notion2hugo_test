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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3GJWEX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBhjmhWakKlIuK95EZoY8FqDN1t9UceW%2B6QRLNVHZQEKAiBv1GaO0kJnuGEj68t3uJ3HicNvw94fNSWUgoqbS%2FEK0Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMOtnuymUiCU7aQ6kHKtwDMoToeCOhX4ZwownwtItPMsrbvwfZn1xXs%2BulLcns64xT%2FkK3H7xE4ZuoMs0pXRwlUHcY1bSS9h7hdqCZdVLOZCH498ctWJxZ%2B7pbPx57HXXW4hNyxJZEyUPgajVMIOATYf1w7Ts3wlhLZrtr9Gf%2Fivo%2FqJVjv%2BbHHrHK%2FJEjkuLDe6SeLhOGR6HnHkH5WO16AKtM5Pw4G6w67rZbH7xCGoHe2oWA5L7sMC%2FU9Q6SuDTdapNPHF8Hv%2FChHgnFuYSFSQLRtnaJraMc25SJ9QBNraKUG9UFbfhYtXZePE9EXEOxNBcsW%2Fs%2FC09bZ6yIpLpeHX3vlCpCuLbW9usyEWBfc8xaxDyRNWsa6JqhBBhVlZOKx7rMbL4p84FRoDF%2FCEMUgVDElqaUvrCvEuzrJG3RutB3NfqFgu7TbVMUB43x9VjaqrBZr1ko%2BGNFoNvJJzSY7wMouhTeYdl7y%2BtLM065cdJy75Qo8qhDyYfvuJ%2By39DBYFeCY%2FIoaT%2FgqLvx7eZhMUgyH%2FmxSuith5iU9ZPCZ4yLMNUMtCKtiqAITm9WHGxjj6HjvDJn3D10hsT5QjjrkYLPqdwn7XQVQ75Qq%2FQt%2BjomwBGyQaDGXErW%2Fu1noXK99Vkxdy84XVF66f0wsoiTwQY6pgE04khbqMlJf8ZDbJdq%2B6PxBkq4NeI9kLqREcOD%2BggKN53h77OvN2KQ8bgY4LxzTcyp2i0pDOeYoC%2F%2Bxd8cXLcH3%2BPiFmt0gv8nuJI7Pdq7VgO%2BMZugqgZHcwt4ZgYUcuUwHdE5YwfbEY5zV4Ib8mjYb4a4ysEzKdupWbwLPx5D%2FBkku31zQ8JuTmdZyoOm2rN4ergI5JsG1zfmMQoUJ4eqwCRuDUqH&X-Amz-Signature=7bba0790bef37def14d8f686486f368519d58a53dbcec2ceaaac04a6c554c6be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3GJWEX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBhjmhWakKlIuK95EZoY8FqDN1t9UceW%2B6QRLNVHZQEKAiBv1GaO0kJnuGEj68t3uJ3HicNvw94fNSWUgoqbS%2FEK0Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMOtnuymUiCU7aQ6kHKtwDMoToeCOhX4ZwownwtItPMsrbvwfZn1xXs%2BulLcns64xT%2FkK3H7xE4ZuoMs0pXRwlUHcY1bSS9h7hdqCZdVLOZCH498ctWJxZ%2B7pbPx57HXXW4hNyxJZEyUPgajVMIOATYf1w7Ts3wlhLZrtr9Gf%2Fivo%2FqJVjv%2BbHHrHK%2FJEjkuLDe6SeLhOGR6HnHkH5WO16AKtM5Pw4G6w67rZbH7xCGoHe2oWA5L7sMC%2FU9Q6SuDTdapNPHF8Hv%2FChHgnFuYSFSQLRtnaJraMc25SJ9QBNraKUG9UFbfhYtXZePE9EXEOxNBcsW%2Fs%2FC09bZ6yIpLpeHX3vlCpCuLbW9usyEWBfc8xaxDyRNWsa6JqhBBhVlZOKx7rMbL4p84FRoDF%2FCEMUgVDElqaUvrCvEuzrJG3RutB3NfqFgu7TbVMUB43x9VjaqrBZr1ko%2BGNFoNvJJzSY7wMouhTeYdl7y%2BtLM065cdJy75Qo8qhDyYfvuJ%2By39DBYFeCY%2FIoaT%2FgqLvx7eZhMUgyH%2FmxSuith5iU9ZPCZ4yLMNUMtCKtiqAITm9WHGxjj6HjvDJn3D10hsT5QjjrkYLPqdwn7XQVQ75Qq%2FQt%2BjomwBGyQaDGXErW%2Fu1noXK99Vkxdy84XVF66f0wsoiTwQY6pgE04khbqMlJf8ZDbJdq%2B6PxBkq4NeI9kLqREcOD%2BggKN53h77OvN2KQ8bgY4LxzTcyp2i0pDOeYoC%2F%2Bxd8cXLcH3%2BPiFmt0gv8nuJI7Pdq7VgO%2BMZugqgZHcwt4ZgYUcuUwHdE5YwfbEY5zV4Ib8mjYb4a4ysEzKdupWbwLPx5D%2FBkku31zQ8JuTmdZyoOm2rN4ergI5JsG1zfmMQoUJ4eqwCRuDUqH&X-Amz-Signature=5f8fa68ec5e94b48a741cb0d6e32474e6152c41b2ce2433a11cdc3a3652c8492&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3GJWEX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBhjmhWakKlIuK95EZoY8FqDN1t9UceW%2B6QRLNVHZQEKAiBv1GaO0kJnuGEj68t3uJ3HicNvw94fNSWUgoqbS%2FEK0Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMOtnuymUiCU7aQ6kHKtwDMoToeCOhX4ZwownwtItPMsrbvwfZn1xXs%2BulLcns64xT%2FkK3H7xE4ZuoMs0pXRwlUHcY1bSS9h7hdqCZdVLOZCH498ctWJxZ%2B7pbPx57HXXW4hNyxJZEyUPgajVMIOATYf1w7Ts3wlhLZrtr9Gf%2Fivo%2FqJVjv%2BbHHrHK%2FJEjkuLDe6SeLhOGR6HnHkH5WO16AKtM5Pw4G6w67rZbH7xCGoHe2oWA5L7sMC%2FU9Q6SuDTdapNPHF8Hv%2FChHgnFuYSFSQLRtnaJraMc25SJ9QBNraKUG9UFbfhYtXZePE9EXEOxNBcsW%2Fs%2FC09bZ6yIpLpeHX3vlCpCuLbW9usyEWBfc8xaxDyRNWsa6JqhBBhVlZOKx7rMbL4p84FRoDF%2FCEMUgVDElqaUvrCvEuzrJG3RutB3NfqFgu7TbVMUB43x9VjaqrBZr1ko%2BGNFoNvJJzSY7wMouhTeYdl7y%2BtLM065cdJy75Qo8qhDyYfvuJ%2By39DBYFeCY%2FIoaT%2FgqLvx7eZhMUgyH%2FmxSuith5iU9ZPCZ4yLMNUMtCKtiqAITm9WHGxjj6HjvDJn3D10hsT5QjjrkYLPqdwn7XQVQ75Qq%2FQt%2BjomwBGyQaDGXErW%2Fu1noXK99Vkxdy84XVF66f0wsoiTwQY6pgE04khbqMlJf8ZDbJdq%2B6PxBkq4NeI9kLqREcOD%2BggKN53h77OvN2KQ8bgY4LxzTcyp2i0pDOeYoC%2F%2Bxd8cXLcH3%2BPiFmt0gv8nuJI7Pdq7VgO%2BMZugqgZHcwt4ZgYUcuUwHdE5YwfbEY5zV4Ib8mjYb4a4ysEzKdupWbwLPx5D%2FBkku31zQ8JuTmdZyoOm2rN4ergI5JsG1zfmMQoUJ4eqwCRuDUqH&X-Amz-Signature=5bc01fbfaee4ae6ec07f731ee79e7abdfce660af2d3f034ed626e62bb4030936&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3GJWEX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBhjmhWakKlIuK95EZoY8FqDN1t9UceW%2B6QRLNVHZQEKAiBv1GaO0kJnuGEj68t3uJ3HicNvw94fNSWUgoqbS%2FEK0Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMOtnuymUiCU7aQ6kHKtwDMoToeCOhX4ZwownwtItPMsrbvwfZn1xXs%2BulLcns64xT%2FkK3H7xE4ZuoMs0pXRwlUHcY1bSS9h7hdqCZdVLOZCH498ctWJxZ%2B7pbPx57HXXW4hNyxJZEyUPgajVMIOATYf1w7Ts3wlhLZrtr9Gf%2Fivo%2FqJVjv%2BbHHrHK%2FJEjkuLDe6SeLhOGR6HnHkH5WO16AKtM5Pw4G6w67rZbH7xCGoHe2oWA5L7sMC%2FU9Q6SuDTdapNPHF8Hv%2FChHgnFuYSFSQLRtnaJraMc25SJ9QBNraKUG9UFbfhYtXZePE9EXEOxNBcsW%2Fs%2FC09bZ6yIpLpeHX3vlCpCuLbW9usyEWBfc8xaxDyRNWsa6JqhBBhVlZOKx7rMbL4p84FRoDF%2FCEMUgVDElqaUvrCvEuzrJG3RutB3NfqFgu7TbVMUB43x9VjaqrBZr1ko%2BGNFoNvJJzSY7wMouhTeYdl7y%2BtLM065cdJy75Qo8qhDyYfvuJ%2By39DBYFeCY%2FIoaT%2FgqLvx7eZhMUgyH%2FmxSuith5iU9ZPCZ4yLMNUMtCKtiqAITm9WHGxjj6HjvDJn3D10hsT5QjjrkYLPqdwn7XQVQ75Qq%2FQt%2BjomwBGyQaDGXErW%2Fu1noXK99Vkxdy84XVF66f0wsoiTwQY6pgE04khbqMlJf8ZDbJdq%2B6PxBkq4NeI9kLqREcOD%2BggKN53h77OvN2KQ8bgY4LxzTcyp2i0pDOeYoC%2F%2Bxd8cXLcH3%2BPiFmt0gv8nuJI7Pdq7VgO%2BMZugqgZHcwt4ZgYUcuUwHdE5YwfbEY5zV4Ib8mjYb4a4ysEzKdupWbwLPx5D%2FBkku31zQ8JuTmdZyoOm2rN4ergI5JsG1zfmMQoUJ4eqwCRuDUqH&X-Amz-Signature=4e16c12487ded1d2928f7907d79eb42de9e0675da4338a31f4fb623d1685bce5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3GJWEX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBhjmhWakKlIuK95EZoY8FqDN1t9UceW%2B6QRLNVHZQEKAiBv1GaO0kJnuGEj68t3uJ3HicNvw94fNSWUgoqbS%2FEK0Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMOtnuymUiCU7aQ6kHKtwDMoToeCOhX4ZwownwtItPMsrbvwfZn1xXs%2BulLcns64xT%2FkK3H7xE4ZuoMs0pXRwlUHcY1bSS9h7hdqCZdVLOZCH498ctWJxZ%2B7pbPx57HXXW4hNyxJZEyUPgajVMIOATYf1w7Ts3wlhLZrtr9Gf%2Fivo%2FqJVjv%2BbHHrHK%2FJEjkuLDe6SeLhOGR6HnHkH5WO16AKtM5Pw4G6w67rZbH7xCGoHe2oWA5L7sMC%2FU9Q6SuDTdapNPHF8Hv%2FChHgnFuYSFSQLRtnaJraMc25SJ9QBNraKUG9UFbfhYtXZePE9EXEOxNBcsW%2Fs%2FC09bZ6yIpLpeHX3vlCpCuLbW9usyEWBfc8xaxDyRNWsa6JqhBBhVlZOKx7rMbL4p84FRoDF%2FCEMUgVDElqaUvrCvEuzrJG3RutB3NfqFgu7TbVMUB43x9VjaqrBZr1ko%2BGNFoNvJJzSY7wMouhTeYdl7y%2BtLM065cdJy75Qo8qhDyYfvuJ%2By39DBYFeCY%2FIoaT%2FgqLvx7eZhMUgyH%2FmxSuith5iU9ZPCZ4yLMNUMtCKtiqAITm9WHGxjj6HjvDJn3D10hsT5QjjrkYLPqdwn7XQVQ75Qq%2FQt%2BjomwBGyQaDGXErW%2Fu1noXK99Vkxdy84XVF66f0wsoiTwQY6pgE04khbqMlJf8ZDbJdq%2B6PxBkq4NeI9kLqREcOD%2BggKN53h77OvN2KQ8bgY4LxzTcyp2i0pDOeYoC%2F%2Bxd8cXLcH3%2BPiFmt0gv8nuJI7Pdq7VgO%2BMZugqgZHcwt4ZgYUcuUwHdE5YwfbEY5zV4Ib8mjYb4a4ysEzKdupWbwLPx5D%2FBkku31zQ8JuTmdZyoOm2rN4ergI5JsG1zfmMQoUJ4eqwCRuDUqH&X-Amz-Signature=19d02a939197881910e6c5500dd6fb68a8d10b4ce4c9f581801f00df323df3db&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
