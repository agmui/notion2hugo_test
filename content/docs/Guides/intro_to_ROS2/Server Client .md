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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VERMGNC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCGhvVuu5%2BqOcpJsFzvblxgzbn2El0FlAW27yQz%2BO%2BaFwIhAIp8E%2BKZEfWdtL5AHlsk040nH7HSUQ1LRm8gHtA3%2BzfgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzwQBih6ybK0uGXwaEq3AOfX5oo%2Bcpt3QXnwPkeHyCjuolYjZCJFnivjqEYCbsvovzpBytS6MLJQ%2BiR04GskL%2B%2Bn7kUQh1VrNyRKMS6nOI94gDUzZMuwN9bHhA3%2Fx64REq9RaxI7spV5M2xGSEOk6W2N3xH2DG88foaWNz1v%2FSVUY%2Fi6Oh4qEjwSGx25vgiN9VbmNGXj8GZByaj4fs1nT3vgkF8xQmpfZknBq52PnSufPKmybM%2B%2BiFbb%2FKvDedr3MNLRnn6Wte2dfD%2BOSJhP%2B6%2FT1FnW5dWy0INiW5SPDzKcAvuRQGuQ4shoqxjxmK%2FHIz7WUcoB5KlJrTQ3b5%2BCspHH3Rr0%2FbgtHuuNv1dXd%2Bq3H%2F1THqCj0wG2V11pFK56kde0xSDtocbxo%2F5JW%2B1HHDm7VPW6z0kOKy%2Fg1fusv0jQbFeCohhjRbbL6637l2jn%2B2fEXXaRJMGPl3G%2BcN6AFMh%2FOyXO4bGwqCBkGMY2fw%2B1%2FotBXBbrZO%2Bv1jAefXI9cNf5wTASMwXVDF8idgp5WfXT8XQ2XqR9ABpWPqL%2B48sWEzjMCsjS%2BxTSR4GR02uPOSI7jqJ%2FntRI%2Fsrbhm%2Fu%2F4gz1BQK%2BlFz%2Bqumn7j%2Fxwcumb7y5716m84sS89f8aogFbJo6uNMgYb9%2BEs3DCYtOfCBjqkAVck%2FATDxLurZl9j0JUxqvVTkhQfH67o8cbHinHlLHmFAS7VjhYQdGeEUjffjwWHtK%2FzbjyS0I28w7a8lLd3FK3I1ygDl4hhInWuty56kKthpe1g0oPNITX2trv1NsOhj97G94%2FcAfqJqXHxfLCo%2BSBi9BEN6SUHkFmjhm5RZ0QEEg0cQ9%2BdPPDejQbm727Smioh2cuskUyhDUR2KBsjJApta97m&X-Amz-Signature=5f3359ac9272ef16e9c30070404726ae6e4cf99ee4945600f7f7ab061c6afdb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VERMGNC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCGhvVuu5%2BqOcpJsFzvblxgzbn2El0FlAW27yQz%2BO%2BaFwIhAIp8E%2BKZEfWdtL5AHlsk040nH7HSUQ1LRm8gHtA3%2BzfgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzwQBih6ybK0uGXwaEq3AOfX5oo%2Bcpt3QXnwPkeHyCjuolYjZCJFnivjqEYCbsvovzpBytS6MLJQ%2BiR04GskL%2B%2Bn7kUQh1VrNyRKMS6nOI94gDUzZMuwN9bHhA3%2Fx64REq9RaxI7spV5M2xGSEOk6W2N3xH2DG88foaWNz1v%2FSVUY%2Fi6Oh4qEjwSGx25vgiN9VbmNGXj8GZByaj4fs1nT3vgkF8xQmpfZknBq52PnSufPKmybM%2B%2BiFbb%2FKvDedr3MNLRnn6Wte2dfD%2BOSJhP%2B6%2FT1FnW5dWy0INiW5SPDzKcAvuRQGuQ4shoqxjxmK%2FHIz7WUcoB5KlJrTQ3b5%2BCspHH3Rr0%2FbgtHuuNv1dXd%2Bq3H%2F1THqCj0wG2V11pFK56kde0xSDtocbxo%2F5JW%2B1HHDm7VPW6z0kOKy%2Fg1fusv0jQbFeCohhjRbbL6637l2jn%2B2fEXXaRJMGPl3G%2BcN6AFMh%2FOyXO4bGwqCBkGMY2fw%2B1%2FotBXBbrZO%2Bv1jAefXI9cNf5wTASMwXVDF8idgp5WfXT8XQ2XqR9ABpWPqL%2B48sWEzjMCsjS%2BxTSR4GR02uPOSI7jqJ%2FntRI%2Fsrbhm%2Fu%2F4gz1BQK%2BlFz%2Bqumn7j%2Fxwcumb7y5716m84sS89f8aogFbJo6uNMgYb9%2BEs3DCYtOfCBjqkAVck%2FATDxLurZl9j0JUxqvVTkhQfH67o8cbHinHlLHmFAS7VjhYQdGeEUjffjwWHtK%2FzbjyS0I28w7a8lLd3FK3I1ygDl4hhInWuty56kKthpe1g0oPNITX2trv1NsOhj97G94%2FcAfqJqXHxfLCo%2BSBi9BEN6SUHkFmjhm5RZ0QEEg0cQ9%2BdPPDejQbm727Smioh2cuskUyhDUR2KBsjJApta97m&X-Amz-Signature=cab74c11a18526ad1d507da4765ca4f2b20c738c26b06c9283fab82921f38eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VERMGNC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCGhvVuu5%2BqOcpJsFzvblxgzbn2El0FlAW27yQz%2BO%2BaFwIhAIp8E%2BKZEfWdtL5AHlsk040nH7HSUQ1LRm8gHtA3%2BzfgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzwQBih6ybK0uGXwaEq3AOfX5oo%2Bcpt3QXnwPkeHyCjuolYjZCJFnivjqEYCbsvovzpBytS6MLJQ%2BiR04GskL%2B%2Bn7kUQh1VrNyRKMS6nOI94gDUzZMuwN9bHhA3%2Fx64REq9RaxI7spV5M2xGSEOk6W2N3xH2DG88foaWNz1v%2FSVUY%2Fi6Oh4qEjwSGx25vgiN9VbmNGXj8GZByaj4fs1nT3vgkF8xQmpfZknBq52PnSufPKmybM%2B%2BiFbb%2FKvDedr3MNLRnn6Wte2dfD%2BOSJhP%2B6%2FT1FnW5dWy0INiW5SPDzKcAvuRQGuQ4shoqxjxmK%2FHIz7WUcoB5KlJrTQ3b5%2BCspHH3Rr0%2FbgtHuuNv1dXd%2Bq3H%2F1THqCj0wG2V11pFK56kde0xSDtocbxo%2F5JW%2B1HHDm7VPW6z0kOKy%2Fg1fusv0jQbFeCohhjRbbL6637l2jn%2B2fEXXaRJMGPl3G%2BcN6AFMh%2FOyXO4bGwqCBkGMY2fw%2B1%2FotBXBbrZO%2Bv1jAefXI9cNf5wTASMwXVDF8idgp5WfXT8XQ2XqR9ABpWPqL%2B48sWEzjMCsjS%2BxTSR4GR02uPOSI7jqJ%2FntRI%2Fsrbhm%2Fu%2F4gz1BQK%2BlFz%2Bqumn7j%2Fxwcumb7y5716m84sS89f8aogFbJo6uNMgYb9%2BEs3DCYtOfCBjqkAVck%2FATDxLurZl9j0JUxqvVTkhQfH67o8cbHinHlLHmFAS7VjhYQdGeEUjffjwWHtK%2FzbjyS0I28w7a8lLd3FK3I1ygDl4hhInWuty56kKthpe1g0oPNITX2trv1NsOhj97G94%2FcAfqJqXHxfLCo%2BSBi9BEN6SUHkFmjhm5RZ0QEEg0cQ9%2BdPPDejQbm727Smioh2cuskUyhDUR2KBsjJApta97m&X-Amz-Signature=8b1be93dd859ce2acec5151ba03152f48d92c21f1aac04ff0f5f0aa45eb8dc9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VERMGNC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCGhvVuu5%2BqOcpJsFzvblxgzbn2El0FlAW27yQz%2BO%2BaFwIhAIp8E%2BKZEfWdtL5AHlsk040nH7HSUQ1LRm8gHtA3%2BzfgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzwQBih6ybK0uGXwaEq3AOfX5oo%2Bcpt3QXnwPkeHyCjuolYjZCJFnivjqEYCbsvovzpBytS6MLJQ%2BiR04GskL%2B%2Bn7kUQh1VrNyRKMS6nOI94gDUzZMuwN9bHhA3%2Fx64REq9RaxI7spV5M2xGSEOk6W2N3xH2DG88foaWNz1v%2FSVUY%2Fi6Oh4qEjwSGx25vgiN9VbmNGXj8GZByaj4fs1nT3vgkF8xQmpfZknBq52PnSufPKmybM%2B%2BiFbb%2FKvDedr3MNLRnn6Wte2dfD%2BOSJhP%2B6%2FT1FnW5dWy0INiW5SPDzKcAvuRQGuQ4shoqxjxmK%2FHIz7WUcoB5KlJrTQ3b5%2BCspHH3Rr0%2FbgtHuuNv1dXd%2Bq3H%2F1THqCj0wG2V11pFK56kde0xSDtocbxo%2F5JW%2B1HHDm7VPW6z0kOKy%2Fg1fusv0jQbFeCohhjRbbL6637l2jn%2B2fEXXaRJMGPl3G%2BcN6AFMh%2FOyXO4bGwqCBkGMY2fw%2B1%2FotBXBbrZO%2Bv1jAefXI9cNf5wTASMwXVDF8idgp5WfXT8XQ2XqR9ABpWPqL%2B48sWEzjMCsjS%2BxTSR4GR02uPOSI7jqJ%2FntRI%2Fsrbhm%2Fu%2F4gz1BQK%2BlFz%2Bqumn7j%2Fxwcumb7y5716m84sS89f8aogFbJo6uNMgYb9%2BEs3DCYtOfCBjqkAVck%2FATDxLurZl9j0JUxqvVTkhQfH67o8cbHinHlLHmFAS7VjhYQdGeEUjffjwWHtK%2FzbjyS0I28w7a8lLd3FK3I1ygDl4hhInWuty56kKthpe1g0oPNITX2trv1NsOhj97G94%2FcAfqJqXHxfLCo%2BSBi9BEN6SUHkFmjhm5RZ0QEEg0cQ9%2BdPPDejQbm727Smioh2cuskUyhDUR2KBsjJApta97m&X-Amz-Signature=b712f85bd509433e3abf69127b2457675e50812949daac23f6e441719d963066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VERMGNC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCGhvVuu5%2BqOcpJsFzvblxgzbn2El0FlAW27yQz%2BO%2BaFwIhAIp8E%2BKZEfWdtL5AHlsk040nH7HSUQ1LRm8gHtA3%2BzfgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzwQBih6ybK0uGXwaEq3AOfX5oo%2Bcpt3QXnwPkeHyCjuolYjZCJFnivjqEYCbsvovzpBytS6MLJQ%2BiR04GskL%2B%2Bn7kUQh1VrNyRKMS6nOI94gDUzZMuwN9bHhA3%2Fx64REq9RaxI7spV5M2xGSEOk6W2N3xH2DG88foaWNz1v%2FSVUY%2Fi6Oh4qEjwSGx25vgiN9VbmNGXj8GZByaj4fs1nT3vgkF8xQmpfZknBq52PnSufPKmybM%2B%2BiFbb%2FKvDedr3MNLRnn6Wte2dfD%2BOSJhP%2B6%2FT1FnW5dWy0INiW5SPDzKcAvuRQGuQ4shoqxjxmK%2FHIz7WUcoB5KlJrTQ3b5%2BCspHH3Rr0%2FbgtHuuNv1dXd%2Bq3H%2F1THqCj0wG2V11pFK56kde0xSDtocbxo%2F5JW%2B1HHDm7VPW6z0kOKy%2Fg1fusv0jQbFeCohhjRbbL6637l2jn%2B2fEXXaRJMGPl3G%2BcN6AFMh%2FOyXO4bGwqCBkGMY2fw%2B1%2FotBXBbrZO%2Bv1jAefXI9cNf5wTASMwXVDF8idgp5WfXT8XQ2XqR9ABpWPqL%2B48sWEzjMCsjS%2BxTSR4GR02uPOSI7jqJ%2FntRI%2Fsrbhm%2Fu%2F4gz1BQK%2BlFz%2Bqumn7j%2Fxwcumb7y5716m84sS89f8aogFbJo6uNMgYb9%2BEs3DCYtOfCBjqkAVck%2FATDxLurZl9j0JUxqvVTkhQfH67o8cbHinHlLHmFAS7VjhYQdGeEUjffjwWHtK%2FzbjyS0I28w7a8lLd3FK3I1ygDl4hhInWuty56kKthpe1g0oPNITX2trv1NsOhj97G94%2FcAfqJqXHxfLCo%2BSBi9BEN6SUHkFmjhm5RZ0QEEg0cQ9%2BdPPDejQbm727Smioh2cuskUyhDUR2KBsjJApta97m&X-Amz-Signature=fde5574ad7b9706070d062dbadf1204aae193bdb3679bc611e1a05484810beae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
