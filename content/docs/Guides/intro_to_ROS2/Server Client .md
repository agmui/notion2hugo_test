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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HPIEHF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHhp%2BqhDUejM7GTvcQzifldhZO1PlohYtaghZEupj0tXAiB1xmcoDvNfuzgIvS6tWRBPAo%2FL%2FgbdaL6DzYqdCuReAyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPAYQNQZIOUNKu%2F4vKtwDLkEGSr%2F6DQ7MlCeo5bkmWmoAei6W6dohLe9W%2Fyn0Zaq7DggebKCF8QZnA2um6DoHY5aNSEclRuitCS79H2DgOQ68XLMKYlUhqK02tW8WkBR4Xxy3vjafX8k7fYkJIENk0LuYUEGaC0IL%2B7%2BqbTfShF%2B%2F%2FbW7mN8oY2naWEWYrVgLu4%2BUxy%2BoP5oaKul2OVXWrfGhHob62ByyNoN1mJ%2BIv2%2FKmmhCu54yIKLlCvKtU4KNHURXKwTKxWFSsY7GrF6tYww94SIFdGy0GtD6lZsPkCKYfT05FFL73%2B6xA2jEgxjtATI8aqEp5H5WFrI9rBbW7K8pBCYXAvi3rsVwTvYIdR%2FCAsyb71Nmrd2PErM%2BKEd07tFwbhgbdEunCxJOZ9b0vk%2FzPxTjqnOzdTkb2Un%2BPqQMgEBoYy6Urs6OMmhYy0AITBlnzD5BHYElgWGUf79TIbcJqIBrM%2BxeLTmZgl2CQAqE6nndM%2BXnQfaBZbC1Abt9RmaL68ixSHJDb6B0o41pfTp2arWXoUWnbZ8Pu%2FyJRtHQydSsCxGTGWRaLhiOcRMBCRVi%2FzXh90PJLfDa6Qx8Cb7tWYYm6sVyWpS4JpFvfj%2FFQwqhB%2Bd3CY9fdSo1mocFTqHJBPcGTeUjo0ww25%2F4wgY6pgEp2eHMdx6bdvNHaI%2F6VgJYGm6qwG8J%2Fs4Z9wIKtf6ZfLlg7p0kp3xPUVDCDl%2BY434cNNkKvaO%2BsVVD%2B7%2BlByGguubnzySBnPDdtIedmxwxIwYfZ4KjMj0KeM3QZyNYJ80Ou2UfH9Le015tfhsyg6KpaVYw2h7BzDWKpxaEJFucd6ZO0b%2B9YYwjkxjT%2FNn2f0H%2FmE53QFi%2FXFKAvxWni67OM063Xyrv&X-Amz-Signature=352532a8ad229306c60642410337688e2751f1ef258217c8284b07da5fbcc0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HPIEHF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHhp%2BqhDUejM7GTvcQzifldhZO1PlohYtaghZEupj0tXAiB1xmcoDvNfuzgIvS6tWRBPAo%2FL%2FgbdaL6DzYqdCuReAyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPAYQNQZIOUNKu%2F4vKtwDLkEGSr%2F6DQ7MlCeo5bkmWmoAei6W6dohLe9W%2Fyn0Zaq7DggebKCF8QZnA2um6DoHY5aNSEclRuitCS79H2DgOQ68XLMKYlUhqK02tW8WkBR4Xxy3vjafX8k7fYkJIENk0LuYUEGaC0IL%2B7%2BqbTfShF%2B%2F%2FbW7mN8oY2naWEWYrVgLu4%2BUxy%2BoP5oaKul2OVXWrfGhHob62ByyNoN1mJ%2BIv2%2FKmmhCu54yIKLlCvKtU4KNHURXKwTKxWFSsY7GrF6tYww94SIFdGy0GtD6lZsPkCKYfT05FFL73%2B6xA2jEgxjtATI8aqEp5H5WFrI9rBbW7K8pBCYXAvi3rsVwTvYIdR%2FCAsyb71Nmrd2PErM%2BKEd07tFwbhgbdEunCxJOZ9b0vk%2FzPxTjqnOzdTkb2Un%2BPqQMgEBoYy6Urs6OMmhYy0AITBlnzD5BHYElgWGUf79TIbcJqIBrM%2BxeLTmZgl2CQAqE6nndM%2BXnQfaBZbC1Abt9RmaL68ixSHJDb6B0o41pfTp2arWXoUWnbZ8Pu%2FyJRtHQydSsCxGTGWRaLhiOcRMBCRVi%2FzXh90PJLfDa6Qx8Cb7tWYYm6sVyWpS4JpFvfj%2FFQwqhB%2Bd3CY9fdSo1mocFTqHJBPcGTeUjo0ww25%2F4wgY6pgEp2eHMdx6bdvNHaI%2F6VgJYGm6qwG8J%2Fs4Z9wIKtf6ZfLlg7p0kp3xPUVDCDl%2BY434cNNkKvaO%2BsVVD%2B7%2BlByGguubnzySBnPDdtIedmxwxIwYfZ4KjMj0KeM3QZyNYJ80Ou2UfH9Le015tfhsyg6KpaVYw2h7BzDWKpxaEJFucd6ZO0b%2B9YYwjkxjT%2FNn2f0H%2FmE53QFi%2FXFKAvxWni67OM063Xyrv&X-Amz-Signature=15cdb4b7cbee81b16b7793d8eaf35e1147d7f8743815cca2ea8ff2512f4a6055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HPIEHF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHhp%2BqhDUejM7GTvcQzifldhZO1PlohYtaghZEupj0tXAiB1xmcoDvNfuzgIvS6tWRBPAo%2FL%2FgbdaL6DzYqdCuReAyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPAYQNQZIOUNKu%2F4vKtwDLkEGSr%2F6DQ7MlCeo5bkmWmoAei6W6dohLe9W%2Fyn0Zaq7DggebKCF8QZnA2um6DoHY5aNSEclRuitCS79H2DgOQ68XLMKYlUhqK02tW8WkBR4Xxy3vjafX8k7fYkJIENk0LuYUEGaC0IL%2B7%2BqbTfShF%2B%2F%2FbW7mN8oY2naWEWYrVgLu4%2BUxy%2BoP5oaKul2OVXWrfGhHob62ByyNoN1mJ%2BIv2%2FKmmhCu54yIKLlCvKtU4KNHURXKwTKxWFSsY7GrF6tYww94SIFdGy0GtD6lZsPkCKYfT05FFL73%2B6xA2jEgxjtATI8aqEp5H5WFrI9rBbW7K8pBCYXAvi3rsVwTvYIdR%2FCAsyb71Nmrd2PErM%2BKEd07tFwbhgbdEunCxJOZ9b0vk%2FzPxTjqnOzdTkb2Un%2BPqQMgEBoYy6Urs6OMmhYy0AITBlnzD5BHYElgWGUf79TIbcJqIBrM%2BxeLTmZgl2CQAqE6nndM%2BXnQfaBZbC1Abt9RmaL68ixSHJDb6B0o41pfTp2arWXoUWnbZ8Pu%2FyJRtHQydSsCxGTGWRaLhiOcRMBCRVi%2FzXh90PJLfDa6Qx8Cb7tWYYm6sVyWpS4JpFvfj%2FFQwqhB%2Bd3CY9fdSo1mocFTqHJBPcGTeUjo0ww25%2F4wgY6pgEp2eHMdx6bdvNHaI%2F6VgJYGm6qwG8J%2Fs4Z9wIKtf6ZfLlg7p0kp3xPUVDCDl%2BY434cNNkKvaO%2BsVVD%2B7%2BlByGguubnzySBnPDdtIedmxwxIwYfZ4KjMj0KeM3QZyNYJ80Ou2UfH9Le015tfhsyg6KpaVYw2h7BzDWKpxaEJFucd6ZO0b%2B9YYwjkxjT%2FNn2f0H%2FmE53QFi%2FXFKAvxWni67OM063Xyrv&X-Amz-Signature=475ff7fd7890a33ae5484ed134ef97ba4c8ed9a40e13f2e9be6bfa376a178e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HPIEHF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHhp%2BqhDUejM7GTvcQzifldhZO1PlohYtaghZEupj0tXAiB1xmcoDvNfuzgIvS6tWRBPAo%2FL%2FgbdaL6DzYqdCuReAyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPAYQNQZIOUNKu%2F4vKtwDLkEGSr%2F6DQ7MlCeo5bkmWmoAei6W6dohLe9W%2Fyn0Zaq7DggebKCF8QZnA2um6DoHY5aNSEclRuitCS79H2DgOQ68XLMKYlUhqK02tW8WkBR4Xxy3vjafX8k7fYkJIENk0LuYUEGaC0IL%2B7%2BqbTfShF%2B%2F%2FbW7mN8oY2naWEWYrVgLu4%2BUxy%2BoP5oaKul2OVXWrfGhHob62ByyNoN1mJ%2BIv2%2FKmmhCu54yIKLlCvKtU4KNHURXKwTKxWFSsY7GrF6tYww94SIFdGy0GtD6lZsPkCKYfT05FFL73%2B6xA2jEgxjtATI8aqEp5H5WFrI9rBbW7K8pBCYXAvi3rsVwTvYIdR%2FCAsyb71Nmrd2PErM%2BKEd07tFwbhgbdEunCxJOZ9b0vk%2FzPxTjqnOzdTkb2Un%2BPqQMgEBoYy6Urs6OMmhYy0AITBlnzD5BHYElgWGUf79TIbcJqIBrM%2BxeLTmZgl2CQAqE6nndM%2BXnQfaBZbC1Abt9RmaL68ixSHJDb6B0o41pfTp2arWXoUWnbZ8Pu%2FyJRtHQydSsCxGTGWRaLhiOcRMBCRVi%2FzXh90PJLfDa6Qx8Cb7tWYYm6sVyWpS4JpFvfj%2FFQwqhB%2Bd3CY9fdSo1mocFTqHJBPcGTeUjo0ww25%2F4wgY6pgEp2eHMdx6bdvNHaI%2F6VgJYGm6qwG8J%2Fs4Z9wIKtf6ZfLlg7p0kp3xPUVDCDl%2BY434cNNkKvaO%2BsVVD%2B7%2BlByGguubnzySBnPDdtIedmxwxIwYfZ4KjMj0KeM3QZyNYJ80Ou2UfH9Le015tfhsyg6KpaVYw2h7BzDWKpxaEJFucd6ZO0b%2B9YYwjkxjT%2FNn2f0H%2FmE53QFi%2FXFKAvxWni67OM063Xyrv&X-Amz-Signature=f25bba3a781ec856a9f350d04ac17a1e4efc5c51a6c6454a99fbde15e781b5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HPIEHF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHhp%2BqhDUejM7GTvcQzifldhZO1PlohYtaghZEupj0tXAiB1xmcoDvNfuzgIvS6tWRBPAo%2FL%2FgbdaL6DzYqdCuReAyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPAYQNQZIOUNKu%2F4vKtwDLkEGSr%2F6DQ7MlCeo5bkmWmoAei6W6dohLe9W%2Fyn0Zaq7DggebKCF8QZnA2um6DoHY5aNSEclRuitCS79H2DgOQ68XLMKYlUhqK02tW8WkBR4Xxy3vjafX8k7fYkJIENk0LuYUEGaC0IL%2B7%2BqbTfShF%2B%2F%2FbW7mN8oY2naWEWYrVgLu4%2BUxy%2BoP5oaKul2OVXWrfGhHob62ByyNoN1mJ%2BIv2%2FKmmhCu54yIKLlCvKtU4KNHURXKwTKxWFSsY7GrF6tYww94SIFdGy0GtD6lZsPkCKYfT05FFL73%2B6xA2jEgxjtATI8aqEp5H5WFrI9rBbW7K8pBCYXAvi3rsVwTvYIdR%2FCAsyb71Nmrd2PErM%2BKEd07tFwbhgbdEunCxJOZ9b0vk%2FzPxTjqnOzdTkb2Un%2BPqQMgEBoYy6Urs6OMmhYy0AITBlnzD5BHYElgWGUf79TIbcJqIBrM%2BxeLTmZgl2CQAqE6nndM%2BXnQfaBZbC1Abt9RmaL68ixSHJDb6B0o41pfTp2arWXoUWnbZ8Pu%2FyJRtHQydSsCxGTGWRaLhiOcRMBCRVi%2FzXh90PJLfDa6Qx8Cb7tWYYm6sVyWpS4JpFvfj%2FFQwqhB%2Bd3CY9fdSo1mocFTqHJBPcGTeUjo0ww25%2F4wgY6pgEp2eHMdx6bdvNHaI%2F6VgJYGm6qwG8J%2Fs4Z9wIKtf6ZfLlg7p0kp3xPUVDCDl%2BY434cNNkKvaO%2BsVVD%2B7%2BlByGguubnzySBnPDdtIedmxwxIwYfZ4KjMj0KeM3QZyNYJ80Ou2UfH9Le015tfhsyg6KpaVYw2h7BzDWKpxaEJFucd6ZO0b%2B9YYwjkxjT%2FNn2f0H%2FmE53QFi%2FXFKAvxWni67OM063Xyrv&X-Amz-Signature=b236e70703265d23e73763792a59f269fb4778d3816c7375ec243750e6a83df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
