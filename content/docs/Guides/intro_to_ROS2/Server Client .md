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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPDK5TH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpZceGsl70J7VE5KMo0APbb%2BXKTvgrUZuZDRIfBl%2B9QIgO7Kch9GciOJLrvN1OsmOcAIVMDrAhuH6tygKgTnubKAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOEJO35EhN2TqGni8ircA4%2FwXu1vfUBifUnbQLYHRQ%2Fzbv4%2BqmLk6xLlItN9vT6yxO0wuehGuLaR63z8OaxKCjLNB6q%2BhRzOlfwl0N1t5Rl8zipntXiOkiGjd%2Fodo%2BqljwWEp8ZgKuKs60eNDDJZzB%2Bi253fACDs5Y7t8QIhVOp2cY%2BxTS%2ByGHGAV7u7El33cySJUj9I4jFk81Z1E5rcz5BT2I3Ne5S%2BHBbNBZX9PnU87igZUNQyBy%2BW%2FcfQZklvkz%2Fn13u7gD4KFzsL2I1EEyONE3GN79ZemfqBKVz70pb5zyAHnaZkyXKvwoXv3gCOe%2Fgky8btTRdkCH7fHFBCEg2pVZ9Qhp%2Bv5WOoz2Pt5QUN8QUbHDPfZG%2FR70YtspD97ZzQW2tdOYGDDLdW4MIIrT4nW9Obfj7PzZ%2Fg1m%2BKNC65l4U26OyFQx6ec1Ue5faw9RHLmfVRJjAorN4lGK3SXCK3Pr%2F02crZyvtEkYOvW01mBAdTB36nTrHjTH6jOfithN9vGKkh2QUBIFY%2BvtTvrWcTmLr%2BjiWwjn6D1J08vQqoebOUO5hpwLa8QRZltpguEStzptwUEmcSNPOzy2yPX%2FCvjmIIIpOta1pLRcdJip7WQVqw3R0og%2FnJeSWhtPQO%2B%2FUFXnYbJdg9PQfmMIeLir8GOqUBuJxG5fyqiB2z5o3UUumMYf%2B6B3DhPbaDHnwfce5hwb6EbGUaM0QWsuSyMVIcmNUCKJKk%2BVzPjOHsHqG7DObigoKIrEvqe%2Bpv7qmSTuWH6crLGHYEnIqX71iVipWOkCaXUu8TMurZY3WxMbFTptwN9udjJFephcxuasY4gLf%2B%2Fhq43F8qOtcW8n4q77v0YNTBkw%2FpTSfG0T7cocYSEAqPPWdaBiwt&X-Amz-Signature=34b56f5b2dbcd2f9c1c28a22c321cef39002cd3467b90f67b6cdad2b6acb5b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPDK5TH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpZceGsl70J7VE5KMo0APbb%2BXKTvgrUZuZDRIfBl%2B9QIgO7Kch9GciOJLrvN1OsmOcAIVMDrAhuH6tygKgTnubKAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOEJO35EhN2TqGni8ircA4%2FwXu1vfUBifUnbQLYHRQ%2Fzbv4%2BqmLk6xLlItN9vT6yxO0wuehGuLaR63z8OaxKCjLNB6q%2BhRzOlfwl0N1t5Rl8zipntXiOkiGjd%2Fodo%2BqljwWEp8ZgKuKs60eNDDJZzB%2Bi253fACDs5Y7t8QIhVOp2cY%2BxTS%2ByGHGAV7u7El33cySJUj9I4jFk81Z1E5rcz5BT2I3Ne5S%2BHBbNBZX9PnU87igZUNQyBy%2BW%2FcfQZklvkz%2Fn13u7gD4KFzsL2I1EEyONE3GN79ZemfqBKVz70pb5zyAHnaZkyXKvwoXv3gCOe%2Fgky8btTRdkCH7fHFBCEg2pVZ9Qhp%2Bv5WOoz2Pt5QUN8QUbHDPfZG%2FR70YtspD97ZzQW2tdOYGDDLdW4MIIrT4nW9Obfj7PzZ%2Fg1m%2BKNC65l4U26OyFQx6ec1Ue5faw9RHLmfVRJjAorN4lGK3SXCK3Pr%2F02crZyvtEkYOvW01mBAdTB36nTrHjTH6jOfithN9vGKkh2QUBIFY%2BvtTvrWcTmLr%2BjiWwjn6D1J08vQqoebOUO5hpwLa8QRZltpguEStzptwUEmcSNPOzy2yPX%2FCvjmIIIpOta1pLRcdJip7WQVqw3R0og%2FnJeSWhtPQO%2B%2FUFXnYbJdg9PQfmMIeLir8GOqUBuJxG5fyqiB2z5o3UUumMYf%2B6B3DhPbaDHnwfce5hwb6EbGUaM0QWsuSyMVIcmNUCKJKk%2BVzPjOHsHqG7DObigoKIrEvqe%2Bpv7qmSTuWH6crLGHYEnIqX71iVipWOkCaXUu8TMurZY3WxMbFTptwN9udjJFephcxuasY4gLf%2B%2Fhq43F8qOtcW8n4q77v0YNTBkw%2FpTSfG0T7cocYSEAqPPWdaBiwt&X-Amz-Signature=5bcb5c53a7844fdf1387be9edb7bd99f25667e77ca14f7d1995e74ece83bc20b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPDK5TH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpZceGsl70J7VE5KMo0APbb%2BXKTvgrUZuZDRIfBl%2B9QIgO7Kch9GciOJLrvN1OsmOcAIVMDrAhuH6tygKgTnubKAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOEJO35EhN2TqGni8ircA4%2FwXu1vfUBifUnbQLYHRQ%2Fzbv4%2BqmLk6xLlItN9vT6yxO0wuehGuLaR63z8OaxKCjLNB6q%2BhRzOlfwl0N1t5Rl8zipntXiOkiGjd%2Fodo%2BqljwWEp8ZgKuKs60eNDDJZzB%2Bi253fACDs5Y7t8QIhVOp2cY%2BxTS%2ByGHGAV7u7El33cySJUj9I4jFk81Z1E5rcz5BT2I3Ne5S%2BHBbNBZX9PnU87igZUNQyBy%2BW%2FcfQZklvkz%2Fn13u7gD4KFzsL2I1EEyONE3GN79ZemfqBKVz70pb5zyAHnaZkyXKvwoXv3gCOe%2Fgky8btTRdkCH7fHFBCEg2pVZ9Qhp%2Bv5WOoz2Pt5QUN8QUbHDPfZG%2FR70YtspD97ZzQW2tdOYGDDLdW4MIIrT4nW9Obfj7PzZ%2Fg1m%2BKNC65l4U26OyFQx6ec1Ue5faw9RHLmfVRJjAorN4lGK3SXCK3Pr%2F02crZyvtEkYOvW01mBAdTB36nTrHjTH6jOfithN9vGKkh2QUBIFY%2BvtTvrWcTmLr%2BjiWwjn6D1J08vQqoebOUO5hpwLa8QRZltpguEStzptwUEmcSNPOzy2yPX%2FCvjmIIIpOta1pLRcdJip7WQVqw3R0og%2FnJeSWhtPQO%2B%2FUFXnYbJdg9PQfmMIeLir8GOqUBuJxG5fyqiB2z5o3UUumMYf%2B6B3DhPbaDHnwfce5hwb6EbGUaM0QWsuSyMVIcmNUCKJKk%2BVzPjOHsHqG7DObigoKIrEvqe%2Bpv7qmSTuWH6crLGHYEnIqX71iVipWOkCaXUu8TMurZY3WxMbFTptwN9udjJFephcxuasY4gLf%2B%2Fhq43F8qOtcW8n4q77v0YNTBkw%2FpTSfG0T7cocYSEAqPPWdaBiwt&X-Amz-Signature=9468df35c330585bd9953235b0425d1b0e52e60c1688739931c8c537ccf7b4b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPDK5TH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpZceGsl70J7VE5KMo0APbb%2BXKTvgrUZuZDRIfBl%2B9QIgO7Kch9GciOJLrvN1OsmOcAIVMDrAhuH6tygKgTnubKAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOEJO35EhN2TqGni8ircA4%2FwXu1vfUBifUnbQLYHRQ%2Fzbv4%2BqmLk6xLlItN9vT6yxO0wuehGuLaR63z8OaxKCjLNB6q%2BhRzOlfwl0N1t5Rl8zipntXiOkiGjd%2Fodo%2BqljwWEp8ZgKuKs60eNDDJZzB%2Bi253fACDs5Y7t8QIhVOp2cY%2BxTS%2ByGHGAV7u7El33cySJUj9I4jFk81Z1E5rcz5BT2I3Ne5S%2BHBbNBZX9PnU87igZUNQyBy%2BW%2FcfQZklvkz%2Fn13u7gD4KFzsL2I1EEyONE3GN79ZemfqBKVz70pb5zyAHnaZkyXKvwoXv3gCOe%2Fgky8btTRdkCH7fHFBCEg2pVZ9Qhp%2Bv5WOoz2Pt5QUN8QUbHDPfZG%2FR70YtspD97ZzQW2tdOYGDDLdW4MIIrT4nW9Obfj7PzZ%2Fg1m%2BKNC65l4U26OyFQx6ec1Ue5faw9RHLmfVRJjAorN4lGK3SXCK3Pr%2F02crZyvtEkYOvW01mBAdTB36nTrHjTH6jOfithN9vGKkh2QUBIFY%2BvtTvrWcTmLr%2BjiWwjn6D1J08vQqoebOUO5hpwLa8QRZltpguEStzptwUEmcSNPOzy2yPX%2FCvjmIIIpOta1pLRcdJip7WQVqw3R0og%2FnJeSWhtPQO%2B%2FUFXnYbJdg9PQfmMIeLir8GOqUBuJxG5fyqiB2z5o3UUumMYf%2B6B3DhPbaDHnwfce5hwb6EbGUaM0QWsuSyMVIcmNUCKJKk%2BVzPjOHsHqG7DObigoKIrEvqe%2Bpv7qmSTuWH6crLGHYEnIqX71iVipWOkCaXUu8TMurZY3WxMbFTptwN9udjJFephcxuasY4gLf%2B%2Fhq43F8qOtcW8n4q77v0YNTBkw%2FpTSfG0T7cocYSEAqPPWdaBiwt&X-Amz-Signature=202a1b4a70b0f9c348eaf809881e096e792e6758cda6a2d86b002d6a1bd48ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPDK5TH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpZceGsl70J7VE5KMo0APbb%2BXKTvgrUZuZDRIfBl%2B9QIgO7Kch9GciOJLrvN1OsmOcAIVMDrAhuH6tygKgTnubKAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOEJO35EhN2TqGni8ircA4%2FwXu1vfUBifUnbQLYHRQ%2Fzbv4%2BqmLk6xLlItN9vT6yxO0wuehGuLaR63z8OaxKCjLNB6q%2BhRzOlfwl0N1t5Rl8zipntXiOkiGjd%2Fodo%2BqljwWEp8ZgKuKs60eNDDJZzB%2Bi253fACDs5Y7t8QIhVOp2cY%2BxTS%2ByGHGAV7u7El33cySJUj9I4jFk81Z1E5rcz5BT2I3Ne5S%2BHBbNBZX9PnU87igZUNQyBy%2BW%2FcfQZklvkz%2Fn13u7gD4KFzsL2I1EEyONE3GN79ZemfqBKVz70pb5zyAHnaZkyXKvwoXv3gCOe%2Fgky8btTRdkCH7fHFBCEg2pVZ9Qhp%2Bv5WOoz2Pt5QUN8QUbHDPfZG%2FR70YtspD97ZzQW2tdOYGDDLdW4MIIrT4nW9Obfj7PzZ%2Fg1m%2BKNC65l4U26OyFQx6ec1Ue5faw9RHLmfVRJjAorN4lGK3SXCK3Pr%2F02crZyvtEkYOvW01mBAdTB36nTrHjTH6jOfithN9vGKkh2QUBIFY%2BvtTvrWcTmLr%2BjiWwjn6D1J08vQqoebOUO5hpwLa8QRZltpguEStzptwUEmcSNPOzy2yPX%2FCvjmIIIpOta1pLRcdJip7WQVqw3R0og%2FnJeSWhtPQO%2B%2FUFXnYbJdg9PQfmMIeLir8GOqUBuJxG5fyqiB2z5o3UUumMYf%2B6B3DhPbaDHnwfce5hwb6EbGUaM0QWsuSyMVIcmNUCKJKk%2BVzPjOHsHqG7DObigoKIrEvqe%2Bpv7qmSTuWH6crLGHYEnIqX71iVipWOkCaXUu8TMurZY3WxMbFTptwN9udjJFephcxuasY4gLf%2B%2Fhq43F8qOtcW8n4q77v0YNTBkw%2FpTSfG0T7cocYSEAqPPWdaBiwt&X-Amz-Signature=32ceea02037d478b480d0870c4ae5e20fa2cdab078c5691af49c44bf3dca7463&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
