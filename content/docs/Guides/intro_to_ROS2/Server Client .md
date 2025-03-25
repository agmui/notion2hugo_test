---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSP6PW3N%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPuMWkC3vAVxI9lQry%2FKEg5ubUywz7zUkPeyu6uHcN1wIgYuBD0AJmjh2draY1Cqp1r0204nMVuASNM57XgCI%2BfYYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGSPbwPXeeOkUNytqyrcA6T69As4jsUnWscOSKI1fH4RY%2Fmz3lruJGST3981YTnJlkNuGuTqq1gGdR5PGToRQtDXROwAVt8N%2BtIIX%2FR98iE1Txa8N2C1vw8n%2FwvlNnAJpHyxt8DoZcst4HFnvrAqDSzpCxtLYSu2pppubiaaQMuH1%2FttkhakKI4afuZu6hHo6EW2tp5le5ZYy4%2B00ZwoJQvS4OodfByHUaMwH7oGaFN4dHVtrGTggszAOCG1NzmuDAX6hIJ5yAV7FOarZJHDewHxxQG7BQbZTLeWiNMf%2BgoQ85QjgOQUfrv4ZR0JTjA0hU5RRgZorSXfn5dr8DlTLjBk%2B9psCQ%2BcQjk%2FSt6h%2BiliOIUmbcI8OKi0%2BBrxn179emSoHBGns%2BBHxZzv5CxOeOlYJWo7Uf%2FcKhfEpP4A3VriZEyasCCLPONAUsn8EUmqZm8fA7nekIZpE9gRyryfqmDHQFHBCOAM56SIjNNUY4OWDZ%2FZxeANi46Cju7%2FnpMMt0SP6fOiLQdp%2F%2BMBkPPCSzuUZwKgE4dXtrT4G%2FTCu32qjtAFV6kmH6BUKxuF1M3TIhFODF20Y92j0aNPkVa9cju7gASlSti%2FjQNQfuOoNoJPvGo1%2FN7TQcSIsFsLUn2ldvVj4bnayTDhrxOpMLbGir8GOqUBjHJJ2PwNFyPgNvwSNXFFYfsgRs3pCy90JEKDBtmq3y4rPAHWbCQ4q7jvRJLf3xHtmnyagoeNRHqVTrUjByfZMmVhp1FrUkLqYNhQwZzNVHkvqZpGCyRL386hqwz1Cmhd4UgfmGB%2FbHdpbUsKdAcy%2FootfHS8Fa8I3hJ82qv5R0jR9CPy7OMXJ0bquRrBLVubxTDJplitaxHkd%2FxzyST06W2Bxr7m&X-Amz-Signature=4a31e68eb161fa147239f6e9b64b2fdb721120b7390014c7c30908e7e0db30d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSP6PW3N%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPuMWkC3vAVxI9lQry%2FKEg5ubUywz7zUkPeyu6uHcN1wIgYuBD0AJmjh2draY1Cqp1r0204nMVuASNM57XgCI%2BfYYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGSPbwPXeeOkUNytqyrcA6T69As4jsUnWscOSKI1fH4RY%2Fmz3lruJGST3981YTnJlkNuGuTqq1gGdR5PGToRQtDXROwAVt8N%2BtIIX%2FR98iE1Txa8N2C1vw8n%2FwvlNnAJpHyxt8DoZcst4HFnvrAqDSzpCxtLYSu2pppubiaaQMuH1%2FttkhakKI4afuZu6hHo6EW2tp5le5ZYy4%2B00ZwoJQvS4OodfByHUaMwH7oGaFN4dHVtrGTggszAOCG1NzmuDAX6hIJ5yAV7FOarZJHDewHxxQG7BQbZTLeWiNMf%2BgoQ85QjgOQUfrv4ZR0JTjA0hU5RRgZorSXfn5dr8DlTLjBk%2B9psCQ%2BcQjk%2FSt6h%2BiliOIUmbcI8OKi0%2BBrxn179emSoHBGns%2BBHxZzv5CxOeOlYJWo7Uf%2FcKhfEpP4A3VriZEyasCCLPONAUsn8EUmqZm8fA7nekIZpE9gRyryfqmDHQFHBCOAM56SIjNNUY4OWDZ%2FZxeANi46Cju7%2FnpMMt0SP6fOiLQdp%2F%2BMBkPPCSzuUZwKgE4dXtrT4G%2FTCu32qjtAFV6kmH6BUKxuF1M3TIhFODF20Y92j0aNPkVa9cju7gASlSti%2FjQNQfuOoNoJPvGo1%2FN7TQcSIsFsLUn2ldvVj4bnayTDhrxOpMLbGir8GOqUBjHJJ2PwNFyPgNvwSNXFFYfsgRs3pCy90JEKDBtmq3y4rPAHWbCQ4q7jvRJLf3xHtmnyagoeNRHqVTrUjByfZMmVhp1FrUkLqYNhQwZzNVHkvqZpGCyRL386hqwz1Cmhd4UgfmGB%2FbHdpbUsKdAcy%2FootfHS8Fa8I3hJ82qv5R0jR9CPy7OMXJ0bquRrBLVubxTDJplitaxHkd%2FxzyST06W2Bxr7m&X-Amz-Signature=fcf6fc53bb30a858efb343604cda84ead2fca27659d0594265694ad3df6e0539&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSP6PW3N%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPuMWkC3vAVxI9lQry%2FKEg5ubUywz7zUkPeyu6uHcN1wIgYuBD0AJmjh2draY1Cqp1r0204nMVuASNM57XgCI%2BfYYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGSPbwPXeeOkUNytqyrcA6T69As4jsUnWscOSKI1fH4RY%2Fmz3lruJGST3981YTnJlkNuGuTqq1gGdR5PGToRQtDXROwAVt8N%2BtIIX%2FR98iE1Txa8N2C1vw8n%2FwvlNnAJpHyxt8DoZcst4HFnvrAqDSzpCxtLYSu2pppubiaaQMuH1%2FttkhakKI4afuZu6hHo6EW2tp5le5ZYy4%2B00ZwoJQvS4OodfByHUaMwH7oGaFN4dHVtrGTggszAOCG1NzmuDAX6hIJ5yAV7FOarZJHDewHxxQG7BQbZTLeWiNMf%2BgoQ85QjgOQUfrv4ZR0JTjA0hU5RRgZorSXfn5dr8DlTLjBk%2B9psCQ%2BcQjk%2FSt6h%2BiliOIUmbcI8OKi0%2BBrxn179emSoHBGns%2BBHxZzv5CxOeOlYJWo7Uf%2FcKhfEpP4A3VriZEyasCCLPONAUsn8EUmqZm8fA7nekIZpE9gRyryfqmDHQFHBCOAM56SIjNNUY4OWDZ%2FZxeANi46Cju7%2FnpMMt0SP6fOiLQdp%2F%2BMBkPPCSzuUZwKgE4dXtrT4G%2FTCu32qjtAFV6kmH6BUKxuF1M3TIhFODF20Y92j0aNPkVa9cju7gASlSti%2FjQNQfuOoNoJPvGo1%2FN7TQcSIsFsLUn2ldvVj4bnayTDhrxOpMLbGir8GOqUBjHJJ2PwNFyPgNvwSNXFFYfsgRs3pCy90JEKDBtmq3y4rPAHWbCQ4q7jvRJLf3xHtmnyagoeNRHqVTrUjByfZMmVhp1FrUkLqYNhQwZzNVHkvqZpGCyRL386hqwz1Cmhd4UgfmGB%2FbHdpbUsKdAcy%2FootfHS8Fa8I3hJ82qv5R0jR9CPy7OMXJ0bquRrBLVubxTDJplitaxHkd%2FxzyST06W2Bxr7m&X-Amz-Signature=7afecddd6ee0b4ace4810a8c731179d465767273c119695e106e8272f76a4c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSP6PW3N%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPuMWkC3vAVxI9lQry%2FKEg5ubUywz7zUkPeyu6uHcN1wIgYuBD0AJmjh2draY1Cqp1r0204nMVuASNM57XgCI%2BfYYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGSPbwPXeeOkUNytqyrcA6T69As4jsUnWscOSKI1fH4RY%2Fmz3lruJGST3981YTnJlkNuGuTqq1gGdR5PGToRQtDXROwAVt8N%2BtIIX%2FR98iE1Txa8N2C1vw8n%2FwvlNnAJpHyxt8DoZcst4HFnvrAqDSzpCxtLYSu2pppubiaaQMuH1%2FttkhakKI4afuZu6hHo6EW2tp5le5ZYy4%2B00ZwoJQvS4OodfByHUaMwH7oGaFN4dHVtrGTggszAOCG1NzmuDAX6hIJ5yAV7FOarZJHDewHxxQG7BQbZTLeWiNMf%2BgoQ85QjgOQUfrv4ZR0JTjA0hU5RRgZorSXfn5dr8DlTLjBk%2B9psCQ%2BcQjk%2FSt6h%2BiliOIUmbcI8OKi0%2BBrxn179emSoHBGns%2BBHxZzv5CxOeOlYJWo7Uf%2FcKhfEpP4A3VriZEyasCCLPONAUsn8EUmqZm8fA7nekIZpE9gRyryfqmDHQFHBCOAM56SIjNNUY4OWDZ%2FZxeANi46Cju7%2FnpMMt0SP6fOiLQdp%2F%2BMBkPPCSzuUZwKgE4dXtrT4G%2FTCu32qjtAFV6kmH6BUKxuF1M3TIhFODF20Y92j0aNPkVa9cju7gASlSti%2FjQNQfuOoNoJPvGo1%2FN7TQcSIsFsLUn2ldvVj4bnayTDhrxOpMLbGir8GOqUBjHJJ2PwNFyPgNvwSNXFFYfsgRs3pCy90JEKDBtmq3y4rPAHWbCQ4q7jvRJLf3xHtmnyagoeNRHqVTrUjByfZMmVhp1FrUkLqYNhQwZzNVHkvqZpGCyRL386hqwz1Cmhd4UgfmGB%2FbHdpbUsKdAcy%2FootfHS8Fa8I3hJ82qv5R0jR9CPy7OMXJ0bquRrBLVubxTDJplitaxHkd%2FxzyST06W2Bxr7m&X-Amz-Signature=a3af5c0b34d9231c0aa5a9d67b4c6175053a4b682318384eb1d6b5b4acf351d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSP6PW3N%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPuMWkC3vAVxI9lQry%2FKEg5ubUywz7zUkPeyu6uHcN1wIgYuBD0AJmjh2draY1Cqp1r0204nMVuASNM57XgCI%2BfYYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGSPbwPXeeOkUNytqyrcA6T69As4jsUnWscOSKI1fH4RY%2Fmz3lruJGST3981YTnJlkNuGuTqq1gGdR5PGToRQtDXROwAVt8N%2BtIIX%2FR98iE1Txa8N2C1vw8n%2FwvlNnAJpHyxt8DoZcst4HFnvrAqDSzpCxtLYSu2pppubiaaQMuH1%2FttkhakKI4afuZu6hHo6EW2tp5le5ZYy4%2B00ZwoJQvS4OodfByHUaMwH7oGaFN4dHVtrGTggszAOCG1NzmuDAX6hIJ5yAV7FOarZJHDewHxxQG7BQbZTLeWiNMf%2BgoQ85QjgOQUfrv4ZR0JTjA0hU5RRgZorSXfn5dr8DlTLjBk%2B9psCQ%2BcQjk%2FSt6h%2BiliOIUmbcI8OKi0%2BBrxn179emSoHBGns%2BBHxZzv5CxOeOlYJWo7Uf%2FcKhfEpP4A3VriZEyasCCLPONAUsn8EUmqZm8fA7nekIZpE9gRyryfqmDHQFHBCOAM56SIjNNUY4OWDZ%2FZxeANi46Cju7%2FnpMMt0SP6fOiLQdp%2F%2BMBkPPCSzuUZwKgE4dXtrT4G%2FTCu32qjtAFV6kmH6BUKxuF1M3TIhFODF20Y92j0aNPkVa9cju7gASlSti%2FjQNQfuOoNoJPvGo1%2FN7TQcSIsFsLUn2ldvVj4bnayTDhrxOpMLbGir8GOqUBjHJJ2PwNFyPgNvwSNXFFYfsgRs3pCy90JEKDBtmq3y4rPAHWbCQ4q7jvRJLf3xHtmnyagoeNRHqVTrUjByfZMmVhp1FrUkLqYNhQwZzNVHkvqZpGCyRL386hqwz1Cmhd4UgfmGB%2FbHdpbUsKdAcy%2FootfHS8Fa8I3hJ82qv5R0jR9CPy7OMXJ0bquRrBLVubxTDJplitaxHkd%2FxzyST06W2Bxr7m&X-Amz-Signature=e3a11af81b7460def7c9f48a17d11255a31c9f3c7c8d3e8b2f86b51c281e8a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
