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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPZ4MIN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHPjB6bdYuKIpMBVYwpWeXp4lt5sQ4fx%2FgXm%2B6ZtqODwIgYw3mUcc%2F4G4nF%2BYILRj74h%2F2vz3l5Nxd8XhriQ3pH4Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLbjAllIZzav5jNNcSrcA7dEgKQ1XhGUtnVzExwvBuwqW0%2FeY6x6YrW0%2FJpBZp1vogz9XvGG8pAU%2FDf8Id%2BhmwSYPl2Cy%2FXH4GZNCoYv%2Blhs5Acz8nBDPWAAwI0JLtmiEhStb3240dMyOU1a4SroZ8DT60QeRIHo4HVSsRKoepLwzxMooID2zEjILhZxO44Q8sPhd72c%2FmnQkA0rebNiKFi%2BDlBGMXvczxTynjYwDYArsf8Z5oGWd6ZhCRG0tb6eed9Jc4HnUEc4eDrI2ogDvw1a%2F62BW6aKexKPzcX6XyoxjAq%2ByYqFPEdspJiBxrvcjNz7T5eBwoxpoTTocnP9NsdPeWOkxPs0s%2BwvfVT%2BaDcv5n9q2MRO7EgjsWgSFlxCK5kO2lp83PJXUVdtl6S7IUP%2FaGON1tNU8%2FONFEJ8I%2BMaOZxVNxWKwtd60ZSJEMyJgKt18OZkNIEMjG12poFUam0txvkbbCHW4oTv8Ed3N9U8WC02dHc4Stmz58k9rUYcMVz5oSnknYdU25K9oICgDNtIw4Smr5fNl9BPHLyy7UmPNPXfqjzZD7hCJz6IXMO%2BjEyaWRMnkmz9P8M0oFIwWK9ZFFfQ%2B5301h9fx4GbJ0gC2bpgX%2BljNX2XTMBcHbhvdIGPounYGAAiHpKGMPKqo8MGOqUBca%2Fl9xZgNc3ljQlXun3wEU3gQTFn%2B7NLLFd2L8lrUVNEFtMQxuOf9Z9BNw1vJZsM3uy9XElgCFoNjeVcAPr8sypd5Bk%2BrqfSkzaitObPGnZzJbnBM%2FnB%2BAt9mLr%2FtT7H8yYjEz4Vvl8ztW7F8iQQaeSKP3IaXYK6v%2FSvhPHqxYT5wuLq4yI5AiRVWdxzVWtYvR2ToU2Qw9nL3UOl4QHU4X3jfbBQ&X-Amz-Signature=13cb009c34473e3e0f618497c940c7d9a322a68c1e6700d1d1aa9169abefb23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPZ4MIN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHPjB6bdYuKIpMBVYwpWeXp4lt5sQ4fx%2FgXm%2B6ZtqODwIgYw3mUcc%2F4G4nF%2BYILRj74h%2F2vz3l5Nxd8XhriQ3pH4Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLbjAllIZzav5jNNcSrcA7dEgKQ1XhGUtnVzExwvBuwqW0%2FeY6x6YrW0%2FJpBZp1vogz9XvGG8pAU%2FDf8Id%2BhmwSYPl2Cy%2FXH4GZNCoYv%2Blhs5Acz8nBDPWAAwI0JLtmiEhStb3240dMyOU1a4SroZ8DT60QeRIHo4HVSsRKoepLwzxMooID2zEjILhZxO44Q8sPhd72c%2FmnQkA0rebNiKFi%2BDlBGMXvczxTynjYwDYArsf8Z5oGWd6ZhCRG0tb6eed9Jc4HnUEc4eDrI2ogDvw1a%2F62BW6aKexKPzcX6XyoxjAq%2ByYqFPEdspJiBxrvcjNz7T5eBwoxpoTTocnP9NsdPeWOkxPs0s%2BwvfVT%2BaDcv5n9q2MRO7EgjsWgSFlxCK5kO2lp83PJXUVdtl6S7IUP%2FaGON1tNU8%2FONFEJ8I%2BMaOZxVNxWKwtd60ZSJEMyJgKt18OZkNIEMjG12poFUam0txvkbbCHW4oTv8Ed3N9U8WC02dHc4Stmz58k9rUYcMVz5oSnknYdU25K9oICgDNtIw4Smr5fNl9BPHLyy7UmPNPXfqjzZD7hCJz6IXMO%2BjEyaWRMnkmz9P8M0oFIwWK9ZFFfQ%2B5301h9fx4GbJ0gC2bpgX%2BljNX2XTMBcHbhvdIGPounYGAAiHpKGMPKqo8MGOqUBca%2Fl9xZgNc3ljQlXun3wEU3gQTFn%2B7NLLFd2L8lrUVNEFtMQxuOf9Z9BNw1vJZsM3uy9XElgCFoNjeVcAPr8sypd5Bk%2BrqfSkzaitObPGnZzJbnBM%2FnB%2BAt9mLr%2FtT7H8yYjEz4Vvl8ztW7F8iQQaeSKP3IaXYK6v%2FSvhPHqxYT5wuLq4yI5AiRVWdxzVWtYvR2ToU2Qw9nL3UOl4QHU4X3jfbBQ&X-Amz-Signature=bebb6525fc3168d8a99c79e78108a597f93c26581b67248e69937a508d5cd838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPZ4MIN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHPjB6bdYuKIpMBVYwpWeXp4lt5sQ4fx%2FgXm%2B6ZtqODwIgYw3mUcc%2F4G4nF%2BYILRj74h%2F2vz3l5Nxd8XhriQ3pH4Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLbjAllIZzav5jNNcSrcA7dEgKQ1XhGUtnVzExwvBuwqW0%2FeY6x6YrW0%2FJpBZp1vogz9XvGG8pAU%2FDf8Id%2BhmwSYPl2Cy%2FXH4GZNCoYv%2Blhs5Acz8nBDPWAAwI0JLtmiEhStb3240dMyOU1a4SroZ8DT60QeRIHo4HVSsRKoepLwzxMooID2zEjILhZxO44Q8sPhd72c%2FmnQkA0rebNiKFi%2BDlBGMXvczxTynjYwDYArsf8Z5oGWd6ZhCRG0tb6eed9Jc4HnUEc4eDrI2ogDvw1a%2F62BW6aKexKPzcX6XyoxjAq%2ByYqFPEdspJiBxrvcjNz7T5eBwoxpoTTocnP9NsdPeWOkxPs0s%2BwvfVT%2BaDcv5n9q2MRO7EgjsWgSFlxCK5kO2lp83PJXUVdtl6S7IUP%2FaGON1tNU8%2FONFEJ8I%2BMaOZxVNxWKwtd60ZSJEMyJgKt18OZkNIEMjG12poFUam0txvkbbCHW4oTv8Ed3N9U8WC02dHc4Stmz58k9rUYcMVz5oSnknYdU25K9oICgDNtIw4Smr5fNl9BPHLyy7UmPNPXfqjzZD7hCJz6IXMO%2BjEyaWRMnkmz9P8M0oFIwWK9ZFFfQ%2B5301h9fx4GbJ0gC2bpgX%2BljNX2XTMBcHbhvdIGPounYGAAiHpKGMPKqo8MGOqUBca%2Fl9xZgNc3ljQlXun3wEU3gQTFn%2B7NLLFd2L8lrUVNEFtMQxuOf9Z9BNw1vJZsM3uy9XElgCFoNjeVcAPr8sypd5Bk%2BrqfSkzaitObPGnZzJbnBM%2FnB%2BAt9mLr%2FtT7H8yYjEz4Vvl8ztW7F8iQQaeSKP3IaXYK6v%2FSvhPHqxYT5wuLq4yI5AiRVWdxzVWtYvR2ToU2Qw9nL3UOl4QHU4X3jfbBQ&X-Amz-Signature=c18405f9b9ffc3350954ede2651a5c6159dcee6192b6c2baa54d7b7c3f3ecf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPZ4MIN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHPjB6bdYuKIpMBVYwpWeXp4lt5sQ4fx%2FgXm%2B6ZtqODwIgYw3mUcc%2F4G4nF%2BYILRj74h%2F2vz3l5Nxd8XhriQ3pH4Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLbjAllIZzav5jNNcSrcA7dEgKQ1XhGUtnVzExwvBuwqW0%2FeY6x6YrW0%2FJpBZp1vogz9XvGG8pAU%2FDf8Id%2BhmwSYPl2Cy%2FXH4GZNCoYv%2Blhs5Acz8nBDPWAAwI0JLtmiEhStb3240dMyOU1a4SroZ8DT60QeRIHo4HVSsRKoepLwzxMooID2zEjILhZxO44Q8sPhd72c%2FmnQkA0rebNiKFi%2BDlBGMXvczxTynjYwDYArsf8Z5oGWd6ZhCRG0tb6eed9Jc4HnUEc4eDrI2ogDvw1a%2F62BW6aKexKPzcX6XyoxjAq%2ByYqFPEdspJiBxrvcjNz7T5eBwoxpoTTocnP9NsdPeWOkxPs0s%2BwvfVT%2BaDcv5n9q2MRO7EgjsWgSFlxCK5kO2lp83PJXUVdtl6S7IUP%2FaGON1tNU8%2FONFEJ8I%2BMaOZxVNxWKwtd60ZSJEMyJgKt18OZkNIEMjG12poFUam0txvkbbCHW4oTv8Ed3N9U8WC02dHc4Stmz58k9rUYcMVz5oSnknYdU25K9oICgDNtIw4Smr5fNl9BPHLyy7UmPNPXfqjzZD7hCJz6IXMO%2BjEyaWRMnkmz9P8M0oFIwWK9ZFFfQ%2B5301h9fx4GbJ0gC2bpgX%2BljNX2XTMBcHbhvdIGPounYGAAiHpKGMPKqo8MGOqUBca%2Fl9xZgNc3ljQlXun3wEU3gQTFn%2B7NLLFd2L8lrUVNEFtMQxuOf9Z9BNw1vJZsM3uy9XElgCFoNjeVcAPr8sypd5Bk%2BrqfSkzaitObPGnZzJbnBM%2FnB%2BAt9mLr%2FtT7H8yYjEz4Vvl8ztW7F8iQQaeSKP3IaXYK6v%2FSvhPHqxYT5wuLq4yI5AiRVWdxzVWtYvR2ToU2Qw9nL3UOl4QHU4X3jfbBQ&X-Amz-Signature=680d33f54da40100513602b9a65b3a8235a5ca3461864e3f084ddd14ef6173fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPZ4MIN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHPjB6bdYuKIpMBVYwpWeXp4lt5sQ4fx%2FgXm%2B6ZtqODwIgYw3mUcc%2F4G4nF%2BYILRj74h%2F2vz3l5Nxd8XhriQ3pH4Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLbjAllIZzav5jNNcSrcA7dEgKQ1XhGUtnVzExwvBuwqW0%2FeY6x6YrW0%2FJpBZp1vogz9XvGG8pAU%2FDf8Id%2BhmwSYPl2Cy%2FXH4GZNCoYv%2Blhs5Acz8nBDPWAAwI0JLtmiEhStb3240dMyOU1a4SroZ8DT60QeRIHo4HVSsRKoepLwzxMooID2zEjILhZxO44Q8sPhd72c%2FmnQkA0rebNiKFi%2BDlBGMXvczxTynjYwDYArsf8Z5oGWd6ZhCRG0tb6eed9Jc4HnUEc4eDrI2ogDvw1a%2F62BW6aKexKPzcX6XyoxjAq%2ByYqFPEdspJiBxrvcjNz7T5eBwoxpoTTocnP9NsdPeWOkxPs0s%2BwvfVT%2BaDcv5n9q2MRO7EgjsWgSFlxCK5kO2lp83PJXUVdtl6S7IUP%2FaGON1tNU8%2FONFEJ8I%2BMaOZxVNxWKwtd60ZSJEMyJgKt18OZkNIEMjG12poFUam0txvkbbCHW4oTv8Ed3N9U8WC02dHc4Stmz58k9rUYcMVz5oSnknYdU25K9oICgDNtIw4Smr5fNl9BPHLyy7UmPNPXfqjzZD7hCJz6IXMO%2BjEyaWRMnkmz9P8M0oFIwWK9ZFFfQ%2B5301h9fx4GbJ0gC2bpgX%2BljNX2XTMBcHbhvdIGPounYGAAiHpKGMPKqo8MGOqUBca%2Fl9xZgNc3ljQlXun3wEU3gQTFn%2B7NLLFd2L8lrUVNEFtMQxuOf9Z9BNw1vJZsM3uy9XElgCFoNjeVcAPr8sypd5Bk%2BrqfSkzaitObPGnZzJbnBM%2FnB%2BAt9mLr%2FtT7H8yYjEz4Vvl8ztW7F8iQQaeSKP3IaXYK6v%2FSvhPHqxYT5wuLq4yI5AiRVWdxzVWtYvR2ToU2Qw9nL3UOl4QHU4X3jfbBQ&X-Amz-Signature=cf06ac7d7899d7ded3c5c4eb356c22b1ed8d4b0c3e97c1726d478121fddecfde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
