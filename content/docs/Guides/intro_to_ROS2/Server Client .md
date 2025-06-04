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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IOSY2IZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQD8UTrbXSsvJ6T3OD8A7c%2FfYsnSa58wHmnxN8ODupfHxQIhAJ%2FcQkeqPjbq9X%2FBHnfj%2F4uMja77SS3UavKv%2BMT%2BW9BkKv8DCC8QABoMNjM3NDIzMTgzODA1IgwtxKwiu16QRMoj%2Fn0q3AN%2F1Q%2BcP8f0Yw%2FQ1tZeHbrngO0sUbULbHaIixi%2FnZjPuGWgeImgVFwRArBn%2FUC%2B9i%2B3XWXzZ8LZ1dP20vkUhD%2FJdqcmfFNMESIm6EMv3XE1SK0MQGYZeO%2F67%2FUZxOMRxwKhAasyh0De5cDH4urGCyay9tt8fbc7u%2B925DfYL8n0SST%2BNgVaTrO6FOT1QZ5ElfJbkAn2YKpycF0OSvWx6rlKolWQFhpUrFT1ilRN7MTWbKMOJLW1P9dOx4aWn%2F4N8FfRbV%2F8bldNkZ7wZqjmuyt59yjjNtwsKfcRfzkOo8HWHAzXfx3zS1DkF9kPscaR8a2wOaXVrQ7lmwwlzJ%2Fe6p6jFbG1%2FuCN95UVhexkOmOcRj0JyT4HmohPvhnJOPdnB4mdY89TZIHgAHycZXCPZATzD4Or6Q0e%2FVPQoeAlAbi3kl7QWxtLq2Fhw5fMdCrl9jzbk%2B4ehSbX%2BZXhKGfNTYwqTGjkCFePDWC6AJiNnSU5GW4Ob%2BTfgPbrIsSmpiMhSCHW4zjwXIrzOL354av0eN7CucEpOknsT%2BCScHaiRI2fgARt5BCdD7QAe8aoqrmTutH7YyOz639pdtUwnLX4hTqVAwffLGCQ3BXDQSoax%2FHutjYVnq3SNzae4A8SbDDWqYHCBjqkASOA8C4Yl5lgXgLA%2FWw9tP9L9Iog5gWYCKNwYbFaq%2FI5uE5NOuUy4cIUB8M2TAVaJr2c1ZbBLhAJXwoDMy5TIvUNtJp2yVWCINIZrnkSf0CUBsuWqOvzfWNkH5LZjmbEnHclJE4nIR%2BTCmQ8nDJycqMiT3BW7IAql1%2FDCmDWOK8W8eReJONDC4OwhNfMvpRZf2KFt0Yh%2FRX5yt3dZPcIoikv83pk&X-Amz-Signature=9188fa070e372e388b60b21f0b39a9f4a7ba6e92511d1856e5ea0deee74fdebd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IOSY2IZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQD8UTrbXSsvJ6T3OD8A7c%2FfYsnSa58wHmnxN8ODupfHxQIhAJ%2FcQkeqPjbq9X%2FBHnfj%2F4uMja77SS3UavKv%2BMT%2BW9BkKv8DCC8QABoMNjM3NDIzMTgzODA1IgwtxKwiu16QRMoj%2Fn0q3AN%2F1Q%2BcP8f0Yw%2FQ1tZeHbrngO0sUbULbHaIixi%2FnZjPuGWgeImgVFwRArBn%2FUC%2B9i%2B3XWXzZ8LZ1dP20vkUhD%2FJdqcmfFNMESIm6EMv3XE1SK0MQGYZeO%2F67%2FUZxOMRxwKhAasyh0De5cDH4urGCyay9tt8fbc7u%2B925DfYL8n0SST%2BNgVaTrO6FOT1QZ5ElfJbkAn2YKpycF0OSvWx6rlKolWQFhpUrFT1ilRN7MTWbKMOJLW1P9dOx4aWn%2F4N8FfRbV%2F8bldNkZ7wZqjmuyt59yjjNtwsKfcRfzkOo8HWHAzXfx3zS1DkF9kPscaR8a2wOaXVrQ7lmwwlzJ%2Fe6p6jFbG1%2FuCN95UVhexkOmOcRj0JyT4HmohPvhnJOPdnB4mdY89TZIHgAHycZXCPZATzD4Or6Q0e%2FVPQoeAlAbi3kl7QWxtLq2Fhw5fMdCrl9jzbk%2B4ehSbX%2BZXhKGfNTYwqTGjkCFePDWC6AJiNnSU5GW4Ob%2BTfgPbrIsSmpiMhSCHW4zjwXIrzOL354av0eN7CucEpOknsT%2BCScHaiRI2fgARt5BCdD7QAe8aoqrmTutH7YyOz639pdtUwnLX4hTqVAwffLGCQ3BXDQSoax%2FHutjYVnq3SNzae4A8SbDDWqYHCBjqkASOA8C4Yl5lgXgLA%2FWw9tP9L9Iog5gWYCKNwYbFaq%2FI5uE5NOuUy4cIUB8M2TAVaJr2c1ZbBLhAJXwoDMy5TIvUNtJp2yVWCINIZrnkSf0CUBsuWqOvzfWNkH5LZjmbEnHclJE4nIR%2BTCmQ8nDJycqMiT3BW7IAql1%2FDCmDWOK8W8eReJONDC4OwhNfMvpRZf2KFt0Yh%2FRX5yt3dZPcIoikv83pk&X-Amz-Signature=00c43ed20c9cdc74cb31fb00932568517c0b9b2b45829a799ceff40a34984f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IOSY2IZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQD8UTrbXSsvJ6T3OD8A7c%2FfYsnSa58wHmnxN8ODupfHxQIhAJ%2FcQkeqPjbq9X%2FBHnfj%2F4uMja77SS3UavKv%2BMT%2BW9BkKv8DCC8QABoMNjM3NDIzMTgzODA1IgwtxKwiu16QRMoj%2Fn0q3AN%2F1Q%2BcP8f0Yw%2FQ1tZeHbrngO0sUbULbHaIixi%2FnZjPuGWgeImgVFwRArBn%2FUC%2B9i%2B3XWXzZ8LZ1dP20vkUhD%2FJdqcmfFNMESIm6EMv3XE1SK0MQGYZeO%2F67%2FUZxOMRxwKhAasyh0De5cDH4urGCyay9tt8fbc7u%2B925DfYL8n0SST%2BNgVaTrO6FOT1QZ5ElfJbkAn2YKpycF0OSvWx6rlKolWQFhpUrFT1ilRN7MTWbKMOJLW1P9dOx4aWn%2F4N8FfRbV%2F8bldNkZ7wZqjmuyt59yjjNtwsKfcRfzkOo8HWHAzXfx3zS1DkF9kPscaR8a2wOaXVrQ7lmwwlzJ%2Fe6p6jFbG1%2FuCN95UVhexkOmOcRj0JyT4HmohPvhnJOPdnB4mdY89TZIHgAHycZXCPZATzD4Or6Q0e%2FVPQoeAlAbi3kl7QWxtLq2Fhw5fMdCrl9jzbk%2B4ehSbX%2BZXhKGfNTYwqTGjkCFePDWC6AJiNnSU5GW4Ob%2BTfgPbrIsSmpiMhSCHW4zjwXIrzOL354av0eN7CucEpOknsT%2BCScHaiRI2fgARt5BCdD7QAe8aoqrmTutH7YyOz639pdtUwnLX4hTqVAwffLGCQ3BXDQSoax%2FHutjYVnq3SNzae4A8SbDDWqYHCBjqkASOA8C4Yl5lgXgLA%2FWw9tP9L9Iog5gWYCKNwYbFaq%2FI5uE5NOuUy4cIUB8M2TAVaJr2c1ZbBLhAJXwoDMy5TIvUNtJp2yVWCINIZrnkSf0CUBsuWqOvzfWNkH5LZjmbEnHclJE4nIR%2BTCmQ8nDJycqMiT3BW7IAql1%2FDCmDWOK8W8eReJONDC4OwhNfMvpRZf2KFt0Yh%2FRX5yt3dZPcIoikv83pk&X-Amz-Signature=b4369ddcc9db14e640eb58ab8c14402830941892ee6df8d6af00a251f4fcf683&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IOSY2IZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQD8UTrbXSsvJ6T3OD8A7c%2FfYsnSa58wHmnxN8ODupfHxQIhAJ%2FcQkeqPjbq9X%2FBHnfj%2F4uMja77SS3UavKv%2BMT%2BW9BkKv8DCC8QABoMNjM3NDIzMTgzODA1IgwtxKwiu16QRMoj%2Fn0q3AN%2F1Q%2BcP8f0Yw%2FQ1tZeHbrngO0sUbULbHaIixi%2FnZjPuGWgeImgVFwRArBn%2FUC%2B9i%2B3XWXzZ8LZ1dP20vkUhD%2FJdqcmfFNMESIm6EMv3XE1SK0MQGYZeO%2F67%2FUZxOMRxwKhAasyh0De5cDH4urGCyay9tt8fbc7u%2B925DfYL8n0SST%2BNgVaTrO6FOT1QZ5ElfJbkAn2YKpycF0OSvWx6rlKolWQFhpUrFT1ilRN7MTWbKMOJLW1P9dOx4aWn%2F4N8FfRbV%2F8bldNkZ7wZqjmuyt59yjjNtwsKfcRfzkOo8HWHAzXfx3zS1DkF9kPscaR8a2wOaXVrQ7lmwwlzJ%2Fe6p6jFbG1%2FuCN95UVhexkOmOcRj0JyT4HmohPvhnJOPdnB4mdY89TZIHgAHycZXCPZATzD4Or6Q0e%2FVPQoeAlAbi3kl7QWxtLq2Fhw5fMdCrl9jzbk%2B4ehSbX%2BZXhKGfNTYwqTGjkCFePDWC6AJiNnSU5GW4Ob%2BTfgPbrIsSmpiMhSCHW4zjwXIrzOL354av0eN7CucEpOknsT%2BCScHaiRI2fgARt5BCdD7QAe8aoqrmTutH7YyOz639pdtUwnLX4hTqVAwffLGCQ3BXDQSoax%2FHutjYVnq3SNzae4A8SbDDWqYHCBjqkASOA8C4Yl5lgXgLA%2FWw9tP9L9Iog5gWYCKNwYbFaq%2FI5uE5NOuUy4cIUB8M2TAVaJr2c1ZbBLhAJXwoDMy5TIvUNtJp2yVWCINIZrnkSf0CUBsuWqOvzfWNkH5LZjmbEnHclJE4nIR%2BTCmQ8nDJycqMiT3BW7IAql1%2FDCmDWOK8W8eReJONDC4OwhNfMvpRZf2KFt0Yh%2FRX5yt3dZPcIoikv83pk&X-Amz-Signature=04aba081dc2ae864f4260c85ff13c3dd103159a0bc5a62c43068f83caec74120&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IOSY2IZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQD8UTrbXSsvJ6T3OD8A7c%2FfYsnSa58wHmnxN8ODupfHxQIhAJ%2FcQkeqPjbq9X%2FBHnfj%2F4uMja77SS3UavKv%2BMT%2BW9BkKv8DCC8QABoMNjM3NDIzMTgzODA1IgwtxKwiu16QRMoj%2Fn0q3AN%2F1Q%2BcP8f0Yw%2FQ1tZeHbrngO0sUbULbHaIixi%2FnZjPuGWgeImgVFwRArBn%2FUC%2B9i%2B3XWXzZ8LZ1dP20vkUhD%2FJdqcmfFNMESIm6EMv3XE1SK0MQGYZeO%2F67%2FUZxOMRxwKhAasyh0De5cDH4urGCyay9tt8fbc7u%2B925DfYL8n0SST%2BNgVaTrO6FOT1QZ5ElfJbkAn2YKpycF0OSvWx6rlKolWQFhpUrFT1ilRN7MTWbKMOJLW1P9dOx4aWn%2F4N8FfRbV%2F8bldNkZ7wZqjmuyt59yjjNtwsKfcRfzkOo8HWHAzXfx3zS1DkF9kPscaR8a2wOaXVrQ7lmwwlzJ%2Fe6p6jFbG1%2FuCN95UVhexkOmOcRj0JyT4HmohPvhnJOPdnB4mdY89TZIHgAHycZXCPZATzD4Or6Q0e%2FVPQoeAlAbi3kl7QWxtLq2Fhw5fMdCrl9jzbk%2B4ehSbX%2BZXhKGfNTYwqTGjkCFePDWC6AJiNnSU5GW4Ob%2BTfgPbrIsSmpiMhSCHW4zjwXIrzOL354av0eN7CucEpOknsT%2BCScHaiRI2fgARt5BCdD7QAe8aoqrmTutH7YyOz639pdtUwnLX4hTqVAwffLGCQ3BXDQSoax%2FHutjYVnq3SNzae4A8SbDDWqYHCBjqkASOA8C4Yl5lgXgLA%2FWw9tP9L9Iog5gWYCKNwYbFaq%2FI5uE5NOuUy4cIUB8M2TAVaJr2c1ZbBLhAJXwoDMy5TIvUNtJp2yVWCINIZrnkSf0CUBsuWqOvzfWNkH5LZjmbEnHclJE4nIR%2BTCmQ8nDJycqMiT3BW7IAql1%2FDCmDWOK8W8eReJONDC4OwhNfMvpRZf2KFt0Yh%2FRX5yt3dZPcIoikv83pk&X-Amz-Signature=6d1d748d1c61e8488abe3663c3a058e26891fd7430082ecdff8a8f5180cd5dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
