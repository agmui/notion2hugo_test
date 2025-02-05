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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHIOJG5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCCISejJJ1V6TXVBnl6OLCYsIOqmuz4SyrZYb3p5DZVLwIhAJtzTxfdDIo3YUWCgmSPehOq0PK6Z3jzYcFd%2FVaf%2FKrVKv8DCEQQABoMNjM3NDIzMTgzODA1IgxIkhuowJMLyEN3%2Fj4q3ANpniH3ZVNs3OnV0SWzfWReLSBOw%2Be2P7qUAB3g0%2FskBjbq8S88dkGFLFrAuiSgZWgpN%2B6LwZlOsdaWy5%2FGNHYZkQz6gR%2FuvzR1AnG2bridakOG7ih%2B%2Fqt48o9fEMZOe3JLlE12fBvpzsS1XRfRVG38fmh7MsCBlx6Rws1g6j0oLG1dE2Cba4qiDFe7PzK4BhuPvl%2FJ4sFTeuCD8EIESbTxW6mNhkOvvTnKROoZIMh7fEuQW%2FzSflTDHBW8U3eTfID%2BUOIF1Hnc6KVoLnRddRUBULBoDqfW%2FNzkNDA%2Bhbt5q64nEwp23uMluXsemz75yYKuhc6gcu1c0uE2%2F1ripPUGTopZ%2Bu6Ce7Ll14YiekQMp5MxT%2FFkTgXo9QEpfB0JWM3s6F1ohvhqMxfhnMtkC%2BaUCIjDlUUxUZAlK%2Fjn388ks3jzxCVf12Xdnp3cDIAXdHaZ5%2Ff3xGYBPEIdo7sZAJ1Rkw54HJ%2BrMw8yMaTmmKS%2BXBHA81LDLm3GAg%2BZKgNtalf32oXIqtNWdMjRSx8yCJH1osW44qcIhNDyEQW1Y1IQN6kGooXL52EXMKKKam736qnH454eRmMvZ7rdfYWKXHSOAD97%2B5gLC%2FX56rM07l5hV4WjmAtSgyLPB9WnVzDUjI29BjqkAcaKFlMGFkz4KWsBh%2FVNGe6AExGRlvxzyZzQX8Ozq5mlUxu6TXhOFKC%2BXbJLD%2BBlBaFXrJhz5XXMVPLSAjJ7FBu7QDroo0YQ0VXS8oKzdAXripcofL1YAdEDckyMVjeeqQQ9j%2BYm%2B0oIC%2F5R23CrIDmnZ2VDpKEMxc%2Fb3lzzZ%2BCIJ7hKGAquHFFOrRIVPRL3bJn5C%2FGW5LVd%2BO2hyM%2F2jtjo9Omg&X-Amz-Signature=6d184d684d26ba005883049c1d56b0a92f84875b27394646df75676275063ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHIOJG5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCCISejJJ1V6TXVBnl6OLCYsIOqmuz4SyrZYb3p5DZVLwIhAJtzTxfdDIo3YUWCgmSPehOq0PK6Z3jzYcFd%2FVaf%2FKrVKv8DCEQQABoMNjM3NDIzMTgzODA1IgxIkhuowJMLyEN3%2Fj4q3ANpniH3ZVNs3OnV0SWzfWReLSBOw%2Be2P7qUAB3g0%2FskBjbq8S88dkGFLFrAuiSgZWgpN%2B6LwZlOsdaWy5%2FGNHYZkQz6gR%2FuvzR1AnG2bridakOG7ih%2B%2Fqt48o9fEMZOe3JLlE12fBvpzsS1XRfRVG38fmh7MsCBlx6Rws1g6j0oLG1dE2Cba4qiDFe7PzK4BhuPvl%2FJ4sFTeuCD8EIESbTxW6mNhkOvvTnKROoZIMh7fEuQW%2FzSflTDHBW8U3eTfID%2BUOIF1Hnc6KVoLnRddRUBULBoDqfW%2FNzkNDA%2Bhbt5q64nEwp23uMluXsemz75yYKuhc6gcu1c0uE2%2F1ripPUGTopZ%2Bu6Ce7Ll14YiekQMp5MxT%2FFkTgXo9QEpfB0JWM3s6F1ohvhqMxfhnMtkC%2BaUCIjDlUUxUZAlK%2Fjn388ks3jzxCVf12Xdnp3cDIAXdHaZ5%2Ff3xGYBPEIdo7sZAJ1Rkw54HJ%2BrMw8yMaTmmKS%2BXBHA81LDLm3GAg%2BZKgNtalf32oXIqtNWdMjRSx8yCJH1osW44qcIhNDyEQW1Y1IQN6kGooXL52EXMKKKam736qnH454eRmMvZ7rdfYWKXHSOAD97%2B5gLC%2FX56rM07l5hV4WjmAtSgyLPB9WnVzDUjI29BjqkAcaKFlMGFkz4KWsBh%2FVNGe6AExGRlvxzyZzQX8Ozq5mlUxu6TXhOFKC%2BXbJLD%2BBlBaFXrJhz5XXMVPLSAjJ7FBu7QDroo0YQ0VXS8oKzdAXripcofL1YAdEDckyMVjeeqQQ9j%2BYm%2B0oIC%2F5R23CrIDmnZ2VDpKEMxc%2Fb3lzzZ%2BCIJ7hKGAquHFFOrRIVPRL3bJn5C%2FGW5LVd%2BO2hyM%2F2jtjo9Omg&X-Amz-Signature=7a3b8d7fa558efcde1d5b1d3b123517a26e74e0f3d97f75da4353a562a34e723&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHIOJG5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCCISejJJ1V6TXVBnl6OLCYsIOqmuz4SyrZYb3p5DZVLwIhAJtzTxfdDIo3YUWCgmSPehOq0PK6Z3jzYcFd%2FVaf%2FKrVKv8DCEQQABoMNjM3NDIzMTgzODA1IgxIkhuowJMLyEN3%2Fj4q3ANpniH3ZVNs3OnV0SWzfWReLSBOw%2Be2P7qUAB3g0%2FskBjbq8S88dkGFLFrAuiSgZWgpN%2B6LwZlOsdaWy5%2FGNHYZkQz6gR%2FuvzR1AnG2bridakOG7ih%2B%2Fqt48o9fEMZOe3JLlE12fBvpzsS1XRfRVG38fmh7MsCBlx6Rws1g6j0oLG1dE2Cba4qiDFe7PzK4BhuPvl%2FJ4sFTeuCD8EIESbTxW6mNhkOvvTnKROoZIMh7fEuQW%2FzSflTDHBW8U3eTfID%2BUOIF1Hnc6KVoLnRddRUBULBoDqfW%2FNzkNDA%2Bhbt5q64nEwp23uMluXsemz75yYKuhc6gcu1c0uE2%2F1ripPUGTopZ%2Bu6Ce7Ll14YiekQMp5MxT%2FFkTgXo9QEpfB0JWM3s6F1ohvhqMxfhnMtkC%2BaUCIjDlUUxUZAlK%2Fjn388ks3jzxCVf12Xdnp3cDIAXdHaZ5%2Ff3xGYBPEIdo7sZAJ1Rkw54HJ%2BrMw8yMaTmmKS%2BXBHA81LDLm3GAg%2BZKgNtalf32oXIqtNWdMjRSx8yCJH1osW44qcIhNDyEQW1Y1IQN6kGooXL52EXMKKKam736qnH454eRmMvZ7rdfYWKXHSOAD97%2B5gLC%2FX56rM07l5hV4WjmAtSgyLPB9WnVzDUjI29BjqkAcaKFlMGFkz4KWsBh%2FVNGe6AExGRlvxzyZzQX8Ozq5mlUxu6TXhOFKC%2BXbJLD%2BBlBaFXrJhz5XXMVPLSAjJ7FBu7QDroo0YQ0VXS8oKzdAXripcofL1YAdEDckyMVjeeqQQ9j%2BYm%2B0oIC%2F5R23CrIDmnZ2VDpKEMxc%2Fb3lzzZ%2BCIJ7hKGAquHFFOrRIVPRL3bJn5C%2FGW5LVd%2BO2hyM%2F2jtjo9Omg&X-Amz-Signature=e4ae550e76fb54738dbc507abe598c2126205746c01def8339aa1954ff674c43&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHIOJG5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCCISejJJ1V6TXVBnl6OLCYsIOqmuz4SyrZYb3p5DZVLwIhAJtzTxfdDIo3YUWCgmSPehOq0PK6Z3jzYcFd%2FVaf%2FKrVKv8DCEQQABoMNjM3NDIzMTgzODA1IgxIkhuowJMLyEN3%2Fj4q3ANpniH3ZVNs3OnV0SWzfWReLSBOw%2Be2P7qUAB3g0%2FskBjbq8S88dkGFLFrAuiSgZWgpN%2B6LwZlOsdaWy5%2FGNHYZkQz6gR%2FuvzR1AnG2bridakOG7ih%2B%2Fqt48o9fEMZOe3JLlE12fBvpzsS1XRfRVG38fmh7MsCBlx6Rws1g6j0oLG1dE2Cba4qiDFe7PzK4BhuPvl%2FJ4sFTeuCD8EIESbTxW6mNhkOvvTnKROoZIMh7fEuQW%2FzSflTDHBW8U3eTfID%2BUOIF1Hnc6KVoLnRddRUBULBoDqfW%2FNzkNDA%2Bhbt5q64nEwp23uMluXsemz75yYKuhc6gcu1c0uE2%2F1ripPUGTopZ%2Bu6Ce7Ll14YiekQMp5MxT%2FFkTgXo9QEpfB0JWM3s6F1ohvhqMxfhnMtkC%2BaUCIjDlUUxUZAlK%2Fjn388ks3jzxCVf12Xdnp3cDIAXdHaZ5%2Ff3xGYBPEIdo7sZAJ1Rkw54HJ%2BrMw8yMaTmmKS%2BXBHA81LDLm3GAg%2BZKgNtalf32oXIqtNWdMjRSx8yCJH1osW44qcIhNDyEQW1Y1IQN6kGooXL52EXMKKKam736qnH454eRmMvZ7rdfYWKXHSOAD97%2B5gLC%2FX56rM07l5hV4WjmAtSgyLPB9WnVzDUjI29BjqkAcaKFlMGFkz4KWsBh%2FVNGe6AExGRlvxzyZzQX8Ozq5mlUxu6TXhOFKC%2BXbJLD%2BBlBaFXrJhz5XXMVPLSAjJ7FBu7QDroo0YQ0VXS8oKzdAXripcofL1YAdEDckyMVjeeqQQ9j%2BYm%2B0oIC%2F5R23CrIDmnZ2VDpKEMxc%2Fb3lzzZ%2BCIJ7hKGAquHFFOrRIVPRL3bJn5C%2FGW5LVd%2BO2hyM%2F2jtjo9Omg&X-Amz-Signature=2b581338d3521f60fed3048659a1e92f8b64451845605c166f8c479f797d8e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHIOJG5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCCISejJJ1V6TXVBnl6OLCYsIOqmuz4SyrZYb3p5DZVLwIhAJtzTxfdDIo3YUWCgmSPehOq0PK6Z3jzYcFd%2FVaf%2FKrVKv8DCEQQABoMNjM3NDIzMTgzODA1IgxIkhuowJMLyEN3%2Fj4q3ANpniH3ZVNs3OnV0SWzfWReLSBOw%2Be2P7qUAB3g0%2FskBjbq8S88dkGFLFrAuiSgZWgpN%2B6LwZlOsdaWy5%2FGNHYZkQz6gR%2FuvzR1AnG2bridakOG7ih%2B%2Fqt48o9fEMZOe3JLlE12fBvpzsS1XRfRVG38fmh7MsCBlx6Rws1g6j0oLG1dE2Cba4qiDFe7PzK4BhuPvl%2FJ4sFTeuCD8EIESbTxW6mNhkOvvTnKROoZIMh7fEuQW%2FzSflTDHBW8U3eTfID%2BUOIF1Hnc6KVoLnRddRUBULBoDqfW%2FNzkNDA%2Bhbt5q64nEwp23uMluXsemz75yYKuhc6gcu1c0uE2%2F1ripPUGTopZ%2Bu6Ce7Ll14YiekQMp5MxT%2FFkTgXo9QEpfB0JWM3s6F1ohvhqMxfhnMtkC%2BaUCIjDlUUxUZAlK%2Fjn388ks3jzxCVf12Xdnp3cDIAXdHaZ5%2Ff3xGYBPEIdo7sZAJ1Rkw54HJ%2BrMw8yMaTmmKS%2BXBHA81LDLm3GAg%2BZKgNtalf32oXIqtNWdMjRSx8yCJH1osW44qcIhNDyEQW1Y1IQN6kGooXL52EXMKKKam736qnH454eRmMvZ7rdfYWKXHSOAD97%2B5gLC%2FX56rM07l5hV4WjmAtSgyLPB9WnVzDUjI29BjqkAcaKFlMGFkz4KWsBh%2FVNGe6AExGRlvxzyZzQX8Ozq5mlUxu6TXhOFKC%2BXbJLD%2BBlBaFXrJhz5XXMVPLSAjJ7FBu7QDroo0YQ0VXS8oKzdAXripcofL1YAdEDckyMVjeeqQQ9j%2BYm%2B0oIC%2F5R23CrIDmnZ2VDpKEMxc%2Fb3lzzZ%2BCIJ7hKGAquHFFOrRIVPRL3bJn5C%2FGW5LVd%2BO2hyM%2F2jtjo9Omg&X-Amz-Signature=95c16a62a612446194bbc0eca3304abd8acca23050a2bee85b9346636e1ac2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
