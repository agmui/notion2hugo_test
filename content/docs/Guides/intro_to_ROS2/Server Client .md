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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESVKHIZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIA13Q2OQwxJLmGawO9ibuY%2FwCQZnyJwPrg1pJYTAMq7cAiBTx2twy43SauvWrX4XhyAyXWUalAA%2B1qmO%2BET8FMqgLir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMb3gZnYJ5e3tJX2LYKtwDuOmW9w7%2Buq85Z%2Fbrg1npn4LlK71hB2q2x0kv2Og5QOgmQtimbTZZ8sWTn8IrXHoz5ARKgMXe8ztwfLmHsPVNcPXL1YF1KI4JcTRl5ph7ui2wxjczP82JL3446IFqL9HmyI9oGcfJ%2FgiqpqaTq%2B3cz5r%2Bk8v%2FG4KaEoliZrm95xPdSFeE5B79mcvTqpWqDgrmbdW5cc8XTwu4e8WHUTOqbeGJh0CvLnfrNXmGfrL6VTFu4olIEGPoIN%2FkjdKvfAfT1fnm8w2474Q6o%2B1LxHdtvwNc5W6ZrejXLAkIpbh8FNEMHvsj8Uh8WhJBfoKwJrAGFw9SN0ULDlgqfBVsYRMdREDGfcSG2%2FPqgWURvYGIFieNqmsXNFhoyJ4UAVzqNngmfTq6sPRllOfzKkTlbHZHmrdkpf7yxI0xUZtK5jZsKsfp6htvjapRKimrIrWpec4xwXgvQQ%2BzEQsDSZpdIqUlDhyY1%2BUceqjgR3aIwCGJzb%2FW%2BKLNNdfOn7XWC0pik%2BoJDyH80G%2BJicnda%2FwB8lzaRvuzRrrGqTSWKCLMKWZd5jpl%2F6FKwfHSXlyM26HDFcwnMMYGyakvQ80zjGpBpj8NwU%2FLdekQQ5atxVlyGCKey%2BvPSLgSKhPOdt0PjqYw3%2B3hwwY6pgH001X8B2bnsQMBy%2B8ylICXzyoFzQR7IoRNobvaC%2BkMVNiXxuh01v7DnlHUNAax7YDzPoIJpMz4io7gmwPMCiD79NabsXOUVgVC2vede7R908Eb6cyvKvrb%2FKqzEq4q%2BMGrg5eMZsBi4FzW%2BF36NLho8kAWZD8CGLQE6FzJeTbNcuiiUTHQj0Cq8fSKLnQT2osgs7jBZlH5NgIPzyt2UwYL3kMzd8bP&X-Amz-Signature=7535ed84d704132321500bad6f60b6aefc66343f6e1f102020dd356114237716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESVKHIZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIA13Q2OQwxJLmGawO9ibuY%2FwCQZnyJwPrg1pJYTAMq7cAiBTx2twy43SauvWrX4XhyAyXWUalAA%2B1qmO%2BET8FMqgLir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMb3gZnYJ5e3tJX2LYKtwDuOmW9w7%2Buq85Z%2Fbrg1npn4LlK71hB2q2x0kv2Og5QOgmQtimbTZZ8sWTn8IrXHoz5ARKgMXe8ztwfLmHsPVNcPXL1YF1KI4JcTRl5ph7ui2wxjczP82JL3446IFqL9HmyI9oGcfJ%2FgiqpqaTq%2B3cz5r%2Bk8v%2FG4KaEoliZrm95xPdSFeE5B79mcvTqpWqDgrmbdW5cc8XTwu4e8WHUTOqbeGJh0CvLnfrNXmGfrL6VTFu4olIEGPoIN%2FkjdKvfAfT1fnm8w2474Q6o%2B1LxHdtvwNc5W6ZrejXLAkIpbh8FNEMHvsj8Uh8WhJBfoKwJrAGFw9SN0ULDlgqfBVsYRMdREDGfcSG2%2FPqgWURvYGIFieNqmsXNFhoyJ4UAVzqNngmfTq6sPRllOfzKkTlbHZHmrdkpf7yxI0xUZtK5jZsKsfp6htvjapRKimrIrWpec4xwXgvQQ%2BzEQsDSZpdIqUlDhyY1%2BUceqjgR3aIwCGJzb%2FW%2BKLNNdfOn7XWC0pik%2BoJDyH80G%2BJicnda%2FwB8lzaRvuzRrrGqTSWKCLMKWZd5jpl%2F6FKwfHSXlyM26HDFcwnMMYGyakvQ80zjGpBpj8NwU%2FLdekQQ5atxVlyGCKey%2BvPSLgSKhPOdt0PjqYw3%2B3hwwY6pgH001X8B2bnsQMBy%2B8ylICXzyoFzQR7IoRNobvaC%2BkMVNiXxuh01v7DnlHUNAax7YDzPoIJpMz4io7gmwPMCiD79NabsXOUVgVC2vede7R908Eb6cyvKvrb%2FKqzEq4q%2BMGrg5eMZsBi4FzW%2BF36NLho8kAWZD8CGLQE6FzJeTbNcuiiUTHQj0Cq8fSKLnQT2osgs7jBZlH5NgIPzyt2UwYL3kMzd8bP&X-Amz-Signature=92ebff8e2fefd823b3b19ff9548e5cef5d510dff81b3b074b6909af296f25131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESVKHIZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIA13Q2OQwxJLmGawO9ibuY%2FwCQZnyJwPrg1pJYTAMq7cAiBTx2twy43SauvWrX4XhyAyXWUalAA%2B1qmO%2BET8FMqgLir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMb3gZnYJ5e3tJX2LYKtwDuOmW9w7%2Buq85Z%2Fbrg1npn4LlK71hB2q2x0kv2Og5QOgmQtimbTZZ8sWTn8IrXHoz5ARKgMXe8ztwfLmHsPVNcPXL1YF1KI4JcTRl5ph7ui2wxjczP82JL3446IFqL9HmyI9oGcfJ%2FgiqpqaTq%2B3cz5r%2Bk8v%2FG4KaEoliZrm95xPdSFeE5B79mcvTqpWqDgrmbdW5cc8XTwu4e8WHUTOqbeGJh0CvLnfrNXmGfrL6VTFu4olIEGPoIN%2FkjdKvfAfT1fnm8w2474Q6o%2B1LxHdtvwNc5W6ZrejXLAkIpbh8FNEMHvsj8Uh8WhJBfoKwJrAGFw9SN0ULDlgqfBVsYRMdREDGfcSG2%2FPqgWURvYGIFieNqmsXNFhoyJ4UAVzqNngmfTq6sPRllOfzKkTlbHZHmrdkpf7yxI0xUZtK5jZsKsfp6htvjapRKimrIrWpec4xwXgvQQ%2BzEQsDSZpdIqUlDhyY1%2BUceqjgR3aIwCGJzb%2FW%2BKLNNdfOn7XWC0pik%2BoJDyH80G%2BJicnda%2FwB8lzaRvuzRrrGqTSWKCLMKWZd5jpl%2F6FKwfHSXlyM26HDFcwnMMYGyakvQ80zjGpBpj8NwU%2FLdekQQ5atxVlyGCKey%2BvPSLgSKhPOdt0PjqYw3%2B3hwwY6pgH001X8B2bnsQMBy%2B8ylICXzyoFzQR7IoRNobvaC%2BkMVNiXxuh01v7DnlHUNAax7YDzPoIJpMz4io7gmwPMCiD79NabsXOUVgVC2vede7R908Eb6cyvKvrb%2FKqzEq4q%2BMGrg5eMZsBi4FzW%2BF36NLho8kAWZD8CGLQE6FzJeTbNcuiiUTHQj0Cq8fSKLnQT2osgs7jBZlH5NgIPzyt2UwYL3kMzd8bP&X-Amz-Signature=487a82c71977f022e33ab198c5dbb2a627cf608cbbfb35ee20ff29e29a1b3e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESVKHIZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIA13Q2OQwxJLmGawO9ibuY%2FwCQZnyJwPrg1pJYTAMq7cAiBTx2twy43SauvWrX4XhyAyXWUalAA%2B1qmO%2BET8FMqgLir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMb3gZnYJ5e3tJX2LYKtwDuOmW9w7%2Buq85Z%2Fbrg1npn4LlK71hB2q2x0kv2Og5QOgmQtimbTZZ8sWTn8IrXHoz5ARKgMXe8ztwfLmHsPVNcPXL1YF1KI4JcTRl5ph7ui2wxjczP82JL3446IFqL9HmyI9oGcfJ%2FgiqpqaTq%2B3cz5r%2Bk8v%2FG4KaEoliZrm95xPdSFeE5B79mcvTqpWqDgrmbdW5cc8XTwu4e8WHUTOqbeGJh0CvLnfrNXmGfrL6VTFu4olIEGPoIN%2FkjdKvfAfT1fnm8w2474Q6o%2B1LxHdtvwNc5W6ZrejXLAkIpbh8FNEMHvsj8Uh8WhJBfoKwJrAGFw9SN0ULDlgqfBVsYRMdREDGfcSG2%2FPqgWURvYGIFieNqmsXNFhoyJ4UAVzqNngmfTq6sPRllOfzKkTlbHZHmrdkpf7yxI0xUZtK5jZsKsfp6htvjapRKimrIrWpec4xwXgvQQ%2BzEQsDSZpdIqUlDhyY1%2BUceqjgR3aIwCGJzb%2FW%2BKLNNdfOn7XWC0pik%2BoJDyH80G%2BJicnda%2FwB8lzaRvuzRrrGqTSWKCLMKWZd5jpl%2F6FKwfHSXlyM26HDFcwnMMYGyakvQ80zjGpBpj8NwU%2FLdekQQ5atxVlyGCKey%2BvPSLgSKhPOdt0PjqYw3%2B3hwwY6pgH001X8B2bnsQMBy%2B8ylICXzyoFzQR7IoRNobvaC%2BkMVNiXxuh01v7DnlHUNAax7YDzPoIJpMz4io7gmwPMCiD79NabsXOUVgVC2vede7R908Eb6cyvKvrb%2FKqzEq4q%2BMGrg5eMZsBi4FzW%2BF36NLho8kAWZD8CGLQE6FzJeTbNcuiiUTHQj0Cq8fSKLnQT2osgs7jBZlH5NgIPzyt2UwYL3kMzd8bP&X-Amz-Signature=2de77f1fe8c1dc72330157ed80349714cd4e068b8398cb3fa43650b348153d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESVKHIZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIA13Q2OQwxJLmGawO9ibuY%2FwCQZnyJwPrg1pJYTAMq7cAiBTx2twy43SauvWrX4XhyAyXWUalAA%2B1qmO%2BET8FMqgLir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMb3gZnYJ5e3tJX2LYKtwDuOmW9w7%2Buq85Z%2Fbrg1npn4LlK71hB2q2x0kv2Og5QOgmQtimbTZZ8sWTn8IrXHoz5ARKgMXe8ztwfLmHsPVNcPXL1YF1KI4JcTRl5ph7ui2wxjczP82JL3446IFqL9HmyI9oGcfJ%2FgiqpqaTq%2B3cz5r%2Bk8v%2FG4KaEoliZrm95xPdSFeE5B79mcvTqpWqDgrmbdW5cc8XTwu4e8WHUTOqbeGJh0CvLnfrNXmGfrL6VTFu4olIEGPoIN%2FkjdKvfAfT1fnm8w2474Q6o%2B1LxHdtvwNc5W6ZrejXLAkIpbh8FNEMHvsj8Uh8WhJBfoKwJrAGFw9SN0ULDlgqfBVsYRMdREDGfcSG2%2FPqgWURvYGIFieNqmsXNFhoyJ4UAVzqNngmfTq6sPRllOfzKkTlbHZHmrdkpf7yxI0xUZtK5jZsKsfp6htvjapRKimrIrWpec4xwXgvQQ%2BzEQsDSZpdIqUlDhyY1%2BUceqjgR3aIwCGJzb%2FW%2BKLNNdfOn7XWC0pik%2BoJDyH80G%2BJicnda%2FwB8lzaRvuzRrrGqTSWKCLMKWZd5jpl%2F6FKwfHSXlyM26HDFcwnMMYGyakvQ80zjGpBpj8NwU%2FLdekQQ5atxVlyGCKey%2BvPSLgSKhPOdt0PjqYw3%2B3hwwY6pgH001X8B2bnsQMBy%2B8ylICXzyoFzQR7IoRNobvaC%2BkMVNiXxuh01v7DnlHUNAax7YDzPoIJpMz4io7gmwPMCiD79NabsXOUVgVC2vede7R908Eb6cyvKvrb%2FKqzEq4q%2BMGrg5eMZsBi4FzW%2BF36NLho8kAWZD8CGLQE6FzJeTbNcuiiUTHQj0Cq8fSKLnQT2osgs7jBZlH5NgIPzyt2UwYL3kMzd8bP&X-Amz-Signature=215bdbfd7d85a63739f47729615d80195b71aa62adac8b4d697b625e538b131e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
