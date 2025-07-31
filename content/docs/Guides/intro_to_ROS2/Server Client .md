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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ZVP6SD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVPdPml21nLNqvx6hbN4mj4jPuUl2NIjQv7ylG3J%2BBowIgaI6Z%2FUF1T7WSjjH2wWwCxBbSDQBtWkhU6Zshuqc9Z4kqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6ol77lg6Hm0cg5PCrcAwO%2BzsB71DHV4FCrxnGtwCwNjwH06Cj8hX8sUVo9jBfGVUMyAacI%2FfiHA2RGQQWhP4gm%2FCXWO3biggHfCEPh5FbgfrbQRMe7KFX1k1AosJ7czvgJkO4mdhmgjzkSOm0BH4UbIUFVYsFMnnnlnxJ3KY%2FjfzRq2SX%2FGJ%2BjhzeFXf5Q%2BcbYKDQJNW%2Bt%2FWIohdLYx6eel9j72G2yeN99tnDqlmHKAF4mMLNu6mUqKbptFnppDx%2B9MLGawM1WYkh%2F5tQkzqKjegXwMtGAlOe3636RSrOsi7T6D%2BdEOnXlwGgHtHcNR%2FM1Zlzlzgt63rW4C%2BNdhRdRa8VFEjtBs7V%2BKA93zvmTg%2FQtHJEk5ovQbnD0Wxqy47BkI5v9O7oxos%2FV6hY3lBicebxeim7S6b6dTrcBb%2BLg95A%2BWdELk%2FtIYaCdmHQXrePVEY8MSpUb03bFhobFUTRbUSZwofXPkGD4EOmqSJt80TlL3Ck6hq8ewN1%2BTkT6Trp7S9QoCf2XhAHUYYTecal6yMkEn3QN0g2r1jp6daNYvWN5MseDpTtERcQYnMRg0mWOAHs6hFFyyFCnrVMyqS45Ww5J5a9JK5nHlJJvtSWz7W6r1hA9z%2FuWpnSpBRPgF2M6lYMPqOAGOU8FMN3brsQGOqUBM4DFWOTNo5Z3sB9D5uWcooP1zXmMddflO%2BUsIDEKRDzVhtvRxTiTvzdCnMLP8IZj3FsU5eQP%2FguxmuLhempBTeFsj9buof44FFH%2FgUwKl9VZWeNqim5I319%2BUqSEpBZaejJxyGUxmE%2Fh4w3SC7LP%2BQlC%2FE5nL4dqyNSZVwCMQ1URQWJFhvQ8cOgTmllSiKv0zyMxxRi3PVVXWenw5XRNm%2BCj8HDx&X-Amz-Signature=687ea4023a6614e61cc3df2d4ff101b586917a0081d5312bac4c36f1c2d9d50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ZVP6SD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVPdPml21nLNqvx6hbN4mj4jPuUl2NIjQv7ylG3J%2BBowIgaI6Z%2FUF1T7WSjjH2wWwCxBbSDQBtWkhU6Zshuqc9Z4kqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6ol77lg6Hm0cg5PCrcAwO%2BzsB71DHV4FCrxnGtwCwNjwH06Cj8hX8sUVo9jBfGVUMyAacI%2FfiHA2RGQQWhP4gm%2FCXWO3biggHfCEPh5FbgfrbQRMe7KFX1k1AosJ7czvgJkO4mdhmgjzkSOm0BH4UbIUFVYsFMnnnlnxJ3KY%2FjfzRq2SX%2FGJ%2BjhzeFXf5Q%2BcbYKDQJNW%2Bt%2FWIohdLYx6eel9j72G2yeN99tnDqlmHKAF4mMLNu6mUqKbptFnppDx%2B9MLGawM1WYkh%2F5tQkzqKjegXwMtGAlOe3636RSrOsi7T6D%2BdEOnXlwGgHtHcNR%2FM1Zlzlzgt63rW4C%2BNdhRdRa8VFEjtBs7V%2BKA93zvmTg%2FQtHJEk5ovQbnD0Wxqy47BkI5v9O7oxos%2FV6hY3lBicebxeim7S6b6dTrcBb%2BLg95A%2BWdELk%2FtIYaCdmHQXrePVEY8MSpUb03bFhobFUTRbUSZwofXPkGD4EOmqSJt80TlL3Ck6hq8ewN1%2BTkT6Trp7S9QoCf2XhAHUYYTecal6yMkEn3QN0g2r1jp6daNYvWN5MseDpTtERcQYnMRg0mWOAHs6hFFyyFCnrVMyqS45Ww5J5a9JK5nHlJJvtSWz7W6r1hA9z%2FuWpnSpBRPgF2M6lYMPqOAGOU8FMN3brsQGOqUBM4DFWOTNo5Z3sB9D5uWcooP1zXmMddflO%2BUsIDEKRDzVhtvRxTiTvzdCnMLP8IZj3FsU5eQP%2FguxmuLhempBTeFsj9buof44FFH%2FgUwKl9VZWeNqim5I319%2BUqSEpBZaejJxyGUxmE%2Fh4w3SC7LP%2BQlC%2FE5nL4dqyNSZVwCMQ1URQWJFhvQ8cOgTmllSiKv0zyMxxRi3PVVXWenw5XRNm%2BCj8HDx&X-Amz-Signature=5ec2f08b626b335734550c5a6803d1ef1bc7131102a3fa0fe43587eaf1e4e32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ZVP6SD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVPdPml21nLNqvx6hbN4mj4jPuUl2NIjQv7ylG3J%2BBowIgaI6Z%2FUF1T7WSjjH2wWwCxBbSDQBtWkhU6Zshuqc9Z4kqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6ol77lg6Hm0cg5PCrcAwO%2BzsB71DHV4FCrxnGtwCwNjwH06Cj8hX8sUVo9jBfGVUMyAacI%2FfiHA2RGQQWhP4gm%2FCXWO3biggHfCEPh5FbgfrbQRMe7KFX1k1AosJ7czvgJkO4mdhmgjzkSOm0BH4UbIUFVYsFMnnnlnxJ3KY%2FjfzRq2SX%2FGJ%2BjhzeFXf5Q%2BcbYKDQJNW%2Bt%2FWIohdLYx6eel9j72G2yeN99tnDqlmHKAF4mMLNu6mUqKbptFnppDx%2B9MLGawM1WYkh%2F5tQkzqKjegXwMtGAlOe3636RSrOsi7T6D%2BdEOnXlwGgHtHcNR%2FM1Zlzlzgt63rW4C%2BNdhRdRa8VFEjtBs7V%2BKA93zvmTg%2FQtHJEk5ovQbnD0Wxqy47BkI5v9O7oxos%2FV6hY3lBicebxeim7S6b6dTrcBb%2BLg95A%2BWdELk%2FtIYaCdmHQXrePVEY8MSpUb03bFhobFUTRbUSZwofXPkGD4EOmqSJt80TlL3Ck6hq8ewN1%2BTkT6Trp7S9QoCf2XhAHUYYTecal6yMkEn3QN0g2r1jp6daNYvWN5MseDpTtERcQYnMRg0mWOAHs6hFFyyFCnrVMyqS45Ww5J5a9JK5nHlJJvtSWz7W6r1hA9z%2FuWpnSpBRPgF2M6lYMPqOAGOU8FMN3brsQGOqUBM4DFWOTNo5Z3sB9D5uWcooP1zXmMddflO%2BUsIDEKRDzVhtvRxTiTvzdCnMLP8IZj3FsU5eQP%2FguxmuLhempBTeFsj9buof44FFH%2FgUwKl9VZWeNqim5I319%2BUqSEpBZaejJxyGUxmE%2Fh4w3SC7LP%2BQlC%2FE5nL4dqyNSZVwCMQ1URQWJFhvQ8cOgTmllSiKv0zyMxxRi3PVVXWenw5XRNm%2BCj8HDx&X-Amz-Signature=e869e7c3582bbfb27797825b52ae2bfa5212dbb3cbcfec33730f32de1d0cf456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ZVP6SD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVPdPml21nLNqvx6hbN4mj4jPuUl2NIjQv7ylG3J%2BBowIgaI6Z%2FUF1T7WSjjH2wWwCxBbSDQBtWkhU6Zshuqc9Z4kqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6ol77lg6Hm0cg5PCrcAwO%2BzsB71DHV4FCrxnGtwCwNjwH06Cj8hX8sUVo9jBfGVUMyAacI%2FfiHA2RGQQWhP4gm%2FCXWO3biggHfCEPh5FbgfrbQRMe7KFX1k1AosJ7czvgJkO4mdhmgjzkSOm0BH4UbIUFVYsFMnnnlnxJ3KY%2FjfzRq2SX%2FGJ%2BjhzeFXf5Q%2BcbYKDQJNW%2Bt%2FWIohdLYx6eel9j72G2yeN99tnDqlmHKAF4mMLNu6mUqKbptFnppDx%2B9MLGawM1WYkh%2F5tQkzqKjegXwMtGAlOe3636RSrOsi7T6D%2BdEOnXlwGgHtHcNR%2FM1Zlzlzgt63rW4C%2BNdhRdRa8VFEjtBs7V%2BKA93zvmTg%2FQtHJEk5ovQbnD0Wxqy47BkI5v9O7oxos%2FV6hY3lBicebxeim7S6b6dTrcBb%2BLg95A%2BWdELk%2FtIYaCdmHQXrePVEY8MSpUb03bFhobFUTRbUSZwofXPkGD4EOmqSJt80TlL3Ck6hq8ewN1%2BTkT6Trp7S9QoCf2XhAHUYYTecal6yMkEn3QN0g2r1jp6daNYvWN5MseDpTtERcQYnMRg0mWOAHs6hFFyyFCnrVMyqS45Ww5J5a9JK5nHlJJvtSWz7W6r1hA9z%2FuWpnSpBRPgF2M6lYMPqOAGOU8FMN3brsQGOqUBM4DFWOTNo5Z3sB9D5uWcooP1zXmMddflO%2BUsIDEKRDzVhtvRxTiTvzdCnMLP8IZj3FsU5eQP%2FguxmuLhempBTeFsj9buof44FFH%2FgUwKl9VZWeNqim5I319%2BUqSEpBZaejJxyGUxmE%2Fh4w3SC7LP%2BQlC%2FE5nL4dqyNSZVwCMQ1URQWJFhvQ8cOgTmllSiKv0zyMxxRi3PVVXWenw5XRNm%2BCj8HDx&X-Amz-Signature=ce557c909b292686f82ea6fa4f308bc9569ae20eebcca2bd87f4ebd09481fecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ZVP6SD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVPdPml21nLNqvx6hbN4mj4jPuUl2NIjQv7ylG3J%2BBowIgaI6Z%2FUF1T7WSjjH2wWwCxBbSDQBtWkhU6Zshuqc9Z4kqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6ol77lg6Hm0cg5PCrcAwO%2BzsB71DHV4FCrxnGtwCwNjwH06Cj8hX8sUVo9jBfGVUMyAacI%2FfiHA2RGQQWhP4gm%2FCXWO3biggHfCEPh5FbgfrbQRMe7KFX1k1AosJ7czvgJkO4mdhmgjzkSOm0BH4UbIUFVYsFMnnnlnxJ3KY%2FjfzRq2SX%2FGJ%2BjhzeFXf5Q%2BcbYKDQJNW%2Bt%2FWIohdLYx6eel9j72G2yeN99tnDqlmHKAF4mMLNu6mUqKbptFnppDx%2B9MLGawM1WYkh%2F5tQkzqKjegXwMtGAlOe3636RSrOsi7T6D%2BdEOnXlwGgHtHcNR%2FM1Zlzlzgt63rW4C%2BNdhRdRa8VFEjtBs7V%2BKA93zvmTg%2FQtHJEk5ovQbnD0Wxqy47BkI5v9O7oxos%2FV6hY3lBicebxeim7S6b6dTrcBb%2BLg95A%2BWdELk%2FtIYaCdmHQXrePVEY8MSpUb03bFhobFUTRbUSZwofXPkGD4EOmqSJt80TlL3Ck6hq8ewN1%2BTkT6Trp7S9QoCf2XhAHUYYTecal6yMkEn3QN0g2r1jp6daNYvWN5MseDpTtERcQYnMRg0mWOAHs6hFFyyFCnrVMyqS45Ww5J5a9JK5nHlJJvtSWz7W6r1hA9z%2FuWpnSpBRPgF2M6lYMPqOAGOU8FMN3brsQGOqUBM4DFWOTNo5Z3sB9D5uWcooP1zXmMddflO%2BUsIDEKRDzVhtvRxTiTvzdCnMLP8IZj3FsU5eQP%2FguxmuLhempBTeFsj9buof44FFH%2FgUwKl9VZWeNqim5I319%2BUqSEpBZaejJxyGUxmE%2Fh4w3SC7LP%2BQlC%2FE5nL4dqyNSZVwCMQ1URQWJFhvQ8cOgTmllSiKv0zyMxxRi3PVVXWenw5XRNm%2BCj8HDx&X-Amz-Signature=993b86fc625dd417935089be9b7c3c6bc4e0b796bfdaf1edfdb3a5c18b965ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
