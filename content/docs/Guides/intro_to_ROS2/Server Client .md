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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7XRKY6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6OmKrkTHXiGWFhTZSAUkv2DTn8AicNADl%2Bc0qQxjWSAiEA2VectrvnbIM1AS2dDKrAwEre5HDNIb3Gpixao1i3EAAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCUB55TT9rwJPxLh%2FyrcAx3lrgQO5gloNCF%2Be%2BWngk8RAeiHnUBN2CCVa9f8Vt9HCkdtktrzhI1%2B5Pia6tjSv%2FetHBjYb9SV94DyFchkpYjyJVNeoJb2RBq7wvKrLGQeWrtXTButViwliVAOC%2FiL%2BTLOVzRZVVjWodNd1zFiC%2BhBRGgpze7TMc8wXZk7OCi%2FV48k9BVtNAWhDOADr8O1%2B%2B5QxXpo4oC72RNlWK2D%2B73F7RAriuLd4rE0rdlrCCx5ZgbMikZqHyOz6yHPoWFxUwEzXNwbC%2BCixzMN6qsBbzlJMW%2F6K0Dpl4JdqB5fEFleeBhOo1fwhePd6aPnhD6mtuUjZbOz2Rk10opdYR1wD%2FJRUkqk83eoR0iYyh1739bY%2B%2BE2ekfMNZmA3aWY5HPLiTuCBpDiD8oeHvPbtmrlTOGEaZ6505m4yE8lbLyuWEBs%2BtXm5EWhTd5zYkRB4R8jryRqi2LawIO4noxAV0ZMD1IfUH2DovA50I5xZjsIfuDMryzBLdnCtMSVIKp8itQAqMMznM%2FfaLfq4DW8vdQkeFaXtueEdkY7Xc%2FDWvcLjz%2BC2tsz1h1moZm0ZCdepBB3Qv1RYD0VlpXr2JZY%2BOLAL5T6E7s72PbD0Fu3pM20tStGWfZgRj8qgxTaINKuMLPhoMEGOqUBw0JuUR7VK%2B6gmRAd5WjXueTt6KhCgwfp%2FHP4whQRMVtEjZJStytZziN8M9M%2Bz64YOuOgDFkvbWV0ouTOUSserA75dfsDm7qVs36vUVKb91Kx5R54TUb8Izhh6118nitvXXSxmuMr3g1roOuK7m5pEIdH7hMSwErofiNGucKLHy3IXogM%2BAL8X0pP%2B8rlg%2B8u2JN7fgRsiQhf3SrpEcOsrnf%2ByeXj&X-Amz-Signature=f540ddb26743ee31a03fab5253623a222b00ce31ece9734cd2009c1c4047f8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7XRKY6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6OmKrkTHXiGWFhTZSAUkv2DTn8AicNADl%2Bc0qQxjWSAiEA2VectrvnbIM1AS2dDKrAwEre5HDNIb3Gpixao1i3EAAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCUB55TT9rwJPxLh%2FyrcAx3lrgQO5gloNCF%2Be%2BWngk8RAeiHnUBN2CCVa9f8Vt9HCkdtktrzhI1%2B5Pia6tjSv%2FetHBjYb9SV94DyFchkpYjyJVNeoJb2RBq7wvKrLGQeWrtXTButViwliVAOC%2FiL%2BTLOVzRZVVjWodNd1zFiC%2BhBRGgpze7TMc8wXZk7OCi%2FV48k9BVtNAWhDOADr8O1%2B%2B5QxXpo4oC72RNlWK2D%2B73F7RAriuLd4rE0rdlrCCx5ZgbMikZqHyOz6yHPoWFxUwEzXNwbC%2BCixzMN6qsBbzlJMW%2F6K0Dpl4JdqB5fEFleeBhOo1fwhePd6aPnhD6mtuUjZbOz2Rk10opdYR1wD%2FJRUkqk83eoR0iYyh1739bY%2B%2BE2ekfMNZmA3aWY5HPLiTuCBpDiD8oeHvPbtmrlTOGEaZ6505m4yE8lbLyuWEBs%2BtXm5EWhTd5zYkRB4R8jryRqi2LawIO4noxAV0ZMD1IfUH2DovA50I5xZjsIfuDMryzBLdnCtMSVIKp8itQAqMMznM%2FfaLfq4DW8vdQkeFaXtueEdkY7Xc%2FDWvcLjz%2BC2tsz1h1moZm0ZCdepBB3Qv1RYD0VlpXr2JZY%2BOLAL5T6E7s72PbD0Fu3pM20tStGWfZgRj8qgxTaINKuMLPhoMEGOqUBw0JuUR7VK%2B6gmRAd5WjXueTt6KhCgwfp%2FHP4whQRMVtEjZJStytZziN8M9M%2Bz64YOuOgDFkvbWV0ouTOUSserA75dfsDm7qVs36vUVKb91Kx5R54TUb8Izhh6118nitvXXSxmuMr3g1roOuK7m5pEIdH7hMSwErofiNGucKLHy3IXogM%2BAL8X0pP%2B8rlg%2B8u2JN7fgRsiQhf3SrpEcOsrnf%2ByeXj&X-Amz-Signature=07824f7e6523dcc287d28ef264533b2e30fdc3f9887e1128a67958cafa3b1093&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7XRKY6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6OmKrkTHXiGWFhTZSAUkv2DTn8AicNADl%2Bc0qQxjWSAiEA2VectrvnbIM1AS2dDKrAwEre5HDNIb3Gpixao1i3EAAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCUB55TT9rwJPxLh%2FyrcAx3lrgQO5gloNCF%2Be%2BWngk8RAeiHnUBN2CCVa9f8Vt9HCkdtktrzhI1%2B5Pia6tjSv%2FetHBjYb9SV94DyFchkpYjyJVNeoJb2RBq7wvKrLGQeWrtXTButViwliVAOC%2FiL%2BTLOVzRZVVjWodNd1zFiC%2BhBRGgpze7TMc8wXZk7OCi%2FV48k9BVtNAWhDOADr8O1%2B%2B5QxXpo4oC72RNlWK2D%2B73F7RAriuLd4rE0rdlrCCx5ZgbMikZqHyOz6yHPoWFxUwEzXNwbC%2BCixzMN6qsBbzlJMW%2F6K0Dpl4JdqB5fEFleeBhOo1fwhePd6aPnhD6mtuUjZbOz2Rk10opdYR1wD%2FJRUkqk83eoR0iYyh1739bY%2B%2BE2ekfMNZmA3aWY5HPLiTuCBpDiD8oeHvPbtmrlTOGEaZ6505m4yE8lbLyuWEBs%2BtXm5EWhTd5zYkRB4R8jryRqi2LawIO4noxAV0ZMD1IfUH2DovA50I5xZjsIfuDMryzBLdnCtMSVIKp8itQAqMMznM%2FfaLfq4DW8vdQkeFaXtueEdkY7Xc%2FDWvcLjz%2BC2tsz1h1moZm0ZCdepBB3Qv1RYD0VlpXr2JZY%2BOLAL5T6E7s72PbD0Fu3pM20tStGWfZgRj8qgxTaINKuMLPhoMEGOqUBw0JuUR7VK%2B6gmRAd5WjXueTt6KhCgwfp%2FHP4whQRMVtEjZJStytZziN8M9M%2Bz64YOuOgDFkvbWV0ouTOUSserA75dfsDm7qVs36vUVKb91Kx5R54TUb8Izhh6118nitvXXSxmuMr3g1roOuK7m5pEIdH7hMSwErofiNGucKLHy3IXogM%2BAL8X0pP%2B8rlg%2B8u2JN7fgRsiQhf3SrpEcOsrnf%2ByeXj&X-Amz-Signature=e4d8c80cabae02f58de49e33d27478172a86c0515fe4e94a4576f911ff3b7799&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7XRKY6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6OmKrkTHXiGWFhTZSAUkv2DTn8AicNADl%2Bc0qQxjWSAiEA2VectrvnbIM1AS2dDKrAwEre5HDNIb3Gpixao1i3EAAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCUB55TT9rwJPxLh%2FyrcAx3lrgQO5gloNCF%2Be%2BWngk8RAeiHnUBN2CCVa9f8Vt9HCkdtktrzhI1%2B5Pia6tjSv%2FetHBjYb9SV94DyFchkpYjyJVNeoJb2RBq7wvKrLGQeWrtXTButViwliVAOC%2FiL%2BTLOVzRZVVjWodNd1zFiC%2BhBRGgpze7TMc8wXZk7OCi%2FV48k9BVtNAWhDOADr8O1%2B%2B5QxXpo4oC72RNlWK2D%2B73F7RAriuLd4rE0rdlrCCx5ZgbMikZqHyOz6yHPoWFxUwEzXNwbC%2BCixzMN6qsBbzlJMW%2F6K0Dpl4JdqB5fEFleeBhOo1fwhePd6aPnhD6mtuUjZbOz2Rk10opdYR1wD%2FJRUkqk83eoR0iYyh1739bY%2B%2BE2ekfMNZmA3aWY5HPLiTuCBpDiD8oeHvPbtmrlTOGEaZ6505m4yE8lbLyuWEBs%2BtXm5EWhTd5zYkRB4R8jryRqi2LawIO4noxAV0ZMD1IfUH2DovA50I5xZjsIfuDMryzBLdnCtMSVIKp8itQAqMMznM%2FfaLfq4DW8vdQkeFaXtueEdkY7Xc%2FDWvcLjz%2BC2tsz1h1moZm0ZCdepBB3Qv1RYD0VlpXr2JZY%2BOLAL5T6E7s72PbD0Fu3pM20tStGWfZgRj8qgxTaINKuMLPhoMEGOqUBw0JuUR7VK%2B6gmRAd5WjXueTt6KhCgwfp%2FHP4whQRMVtEjZJStytZziN8M9M%2Bz64YOuOgDFkvbWV0ouTOUSserA75dfsDm7qVs36vUVKb91Kx5R54TUb8Izhh6118nitvXXSxmuMr3g1roOuK7m5pEIdH7hMSwErofiNGucKLHy3IXogM%2BAL8X0pP%2B8rlg%2B8u2JN7fgRsiQhf3SrpEcOsrnf%2ByeXj&X-Amz-Signature=8769e780a8cc427c7ad28fff33535ea999d18df1cc4a451abecb6bd1b988eec9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7XRKY6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6OmKrkTHXiGWFhTZSAUkv2DTn8AicNADl%2Bc0qQxjWSAiEA2VectrvnbIM1AS2dDKrAwEre5HDNIb3Gpixao1i3EAAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCUB55TT9rwJPxLh%2FyrcAx3lrgQO5gloNCF%2Be%2BWngk8RAeiHnUBN2CCVa9f8Vt9HCkdtktrzhI1%2B5Pia6tjSv%2FetHBjYb9SV94DyFchkpYjyJVNeoJb2RBq7wvKrLGQeWrtXTButViwliVAOC%2FiL%2BTLOVzRZVVjWodNd1zFiC%2BhBRGgpze7TMc8wXZk7OCi%2FV48k9BVtNAWhDOADr8O1%2B%2B5QxXpo4oC72RNlWK2D%2B73F7RAriuLd4rE0rdlrCCx5ZgbMikZqHyOz6yHPoWFxUwEzXNwbC%2BCixzMN6qsBbzlJMW%2F6K0Dpl4JdqB5fEFleeBhOo1fwhePd6aPnhD6mtuUjZbOz2Rk10opdYR1wD%2FJRUkqk83eoR0iYyh1739bY%2B%2BE2ekfMNZmA3aWY5HPLiTuCBpDiD8oeHvPbtmrlTOGEaZ6505m4yE8lbLyuWEBs%2BtXm5EWhTd5zYkRB4R8jryRqi2LawIO4noxAV0ZMD1IfUH2DovA50I5xZjsIfuDMryzBLdnCtMSVIKp8itQAqMMznM%2FfaLfq4DW8vdQkeFaXtueEdkY7Xc%2FDWvcLjz%2BC2tsz1h1moZm0ZCdepBB3Qv1RYD0VlpXr2JZY%2BOLAL5T6E7s72PbD0Fu3pM20tStGWfZgRj8qgxTaINKuMLPhoMEGOqUBw0JuUR7VK%2B6gmRAd5WjXueTt6KhCgwfp%2FHP4whQRMVtEjZJStytZziN8M9M%2Bz64YOuOgDFkvbWV0ouTOUSserA75dfsDm7qVs36vUVKb91Kx5R54TUb8Izhh6118nitvXXSxmuMr3g1roOuK7m5pEIdH7hMSwErofiNGucKLHy3IXogM%2BAL8X0pP%2B8rlg%2B8u2JN7fgRsiQhf3SrpEcOsrnf%2ByeXj&X-Amz-Signature=ec46a2515e8c70c3422ae0495393c8f57573120ee421267e5d417a25174bf218&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
