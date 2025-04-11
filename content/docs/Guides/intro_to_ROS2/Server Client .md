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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BXYZFX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDOnql%2Badf4%2F7C1VVi7R3CYI1EB9RlWWF2zclDMdXvFsQIhAOQXpuhkiQIYQ7f61fssO9EIDjRqIKDlYkQEM8AQSLFIKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg15k%2BqXvz92WK8qQq3ANoFD6Rc5Gh6U8%2BPd99c1IAh0ikwUxXmaRPGI7W19f37mclUmuwSsj7eZAtTOxu6H4AnZ9laq5CE6R9JzKjhdeeAlKvCbgVgogxPBE4kVh9g1UJgragWcItQT1rpTR24GE5nenZcKJdKIqRjWBKZ7%2BnRzcTPQXTHEzoff3%2BuyNn4eLDR9uiJFcLCkunbJWt3xhvOLKVMsUJ7mU784HaGNlTL8DFAEAhAr9hm%2BoKwNKyuQwQ9izYGNlVIETf4O7GEsNZfcWxnT3UPE0ivtqrLjxfxe6qfmLbteRTUhm5gffBtBMVzuN5%2BvhgFjMZmDtQnZfKeCqmPWbkALnt8k3kwN2kbriRhRQ%2BUTv5mzLzb%2Fr2G%2BnnZ%2B%2FZNSag1Blo5%2BGKLOORVTH9hmy%2ByPKCpwpTDg9PpMnBHyJRmkPedV8%2BTaevYvYExwJi10fVbEkGzVd9klWs537HGke5v67iAf%2ByO2VrjUhY1vErmH1ilR8KEWAcbYEdqfjTTMLgkhMmjFBePWajdi2Wk9g3lv5Ui4j1XQOyOkjEYnn2lnlTpwqw4Zz8jVHXM6VTrF9QYv5gobpvkfdQab6ZujuNAaQhgy1lDt4aph4rpiLKryW%2F8zZLXEIgrCwvFwL4nEL43cqu8zDHkuK%2FBjqkAXZ16TSVCSFCtFyv5lu2dNYj9RMase5XUVZ1c6cU0kLXClkfrtC7F9XgAFHxwPRfc12XCtDt%2BQ3UCQYhxvF9qYArryhTsrTlgyM0sICD6sAGwm8lQg6i3QFy5316px66FpndLajCzUKUviQOmJwXYcY7TXOx%2FOt0Lejj%2F1%2BkSS4aStna9PLU5bZeyOGXAMtguyMwsonxLuyfzjkFrcHpqcklmReh&X-Amz-Signature=1e56e0dc3c98fc4e97a40160d743e1c491ca49f5dac5dde2ce57f0399d65a30d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BXYZFX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDOnql%2Badf4%2F7C1VVi7R3CYI1EB9RlWWF2zclDMdXvFsQIhAOQXpuhkiQIYQ7f61fssO9EIDjRqIKDlYkQEM8AQSLFIKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg15k%2BqXvz92WK8qQq3ANoFD6Rc5Gh6U8%2BPd99c1IAh0ikwUxXmaRPGI7W19f37mclUmuwSsj7eZAtTOxu6H4AnZ9laq5CE6R9JzKjhdeeAlKvCbgVgogxPBE4kVh9g1UJgragWcItQT1rpTR24GE5nenZcKJdKIqRjWBKZ7%2BnRzcTPQXTHEzoff3%2BuyNn4eLDR9uiJFcLCkunbJWt3xhvOLKVMsUJ7mU784HaGNlTL8DFAEAhAr9hm%2BoKwNKyuQwQ9izYGNlVIETf4O7GEsNZfcWxnT3UPE0ivtqrLjxfxe6qfmLbteRTUhm5gffBtBMVzuN5%2BvhgFjMZmDtQnZfKeCqmPWbkALnt8k3kwN2kbriRhRQ%2BUTv5mzLzb%2Fr2G%2BnnZ%2B%2FZNSag1Blo5%2BGKLOORVTH9hmy%2ByPKCpwpTDg9PpMnBHyJRmkPedV8%2BTaevYvYExwJi10fVbEkGzVd9klWs537HGke5v67iAf%2ByO2VrjUhY1vErmH1ilR8KEWAcbYEdqfjTTMLgkhMmjFBePWajdi2Wk9g3lv5Ui4j1XQOyOkjEYnn2lnlTpwqw4Zz8jVHXM6VTrF9QYv5gobpvkfdQab6ZujuNAaQhgy1lDt4aph4rpiLKryW%2F8zZLXEIgrCwvFwL4nEL43cqu8zDHkuK%2FBjqkAXZ16TSVCSFCtFyv5lu2dNYj9RMase5XUVZ1c6cU0kLXClkfrtC7F9XgAFHxwPRfc12XCtDt%2BQ3UCQYhxvF9qYArryhTsrTlgyM0sICD6sAGwm8lQg6i3QFy5316px66FpndLajCzUKUviQOmJwXYcY7TXOx%2FOt0Lejj%2F1%2BkSS4aStna9PLU5bZeyOGXAMtguyMwsonxLuyfzjkFrcHpqcklmReh&X-Amz-Signature=a8171e2a92e9c6b55a62b15a6be46b159df641c0f9ddf9b92fe005c7b677a2af&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BXYZFX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDOnql%2Badf4%2F7C1VVi7R3CYI1EB9RlWWF2zclDMdXvFsQIhAOQXpuhkiQIYQ7f61fssO9EIDjRqIKDlYkQEM8AQSLFIKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg15k%2BqXvz92WK8qQq3ANoFD6Rc5Gh6U8%2BPd99c1IAh0ikwUxXmaRPGI7W19f37mclUmuwSsj7eZAtTOxu6H4AnZ9laq5CE6R9JzKjhdeeAlKvCbgVgogxPBE4kVh9g1UJgragWcItQT1rpTR24GE5nenZcKJdKIqRjWBKZ7%2BnRzcTPQXTHEzoff3%2BuyNn4eLDR9uiJFcLCkunbJWt3xhvOLKVMsUJ7mU784HaGNlTL8DFAEAhAr9hm%2BoKwNKyuQwQ9izYGNlVIETf4O7GEsNZfcWxnT3UPE0ivtqrLjxfxe6qfmLbteRTUhm5gffBtBMVzuN5%2BvhgFjMZmDtQnZfKeCqmPWbkALnt8k3kwN2kbriRhRQ%2BUTv5mzLzb%2Fr2G%2BnnZ%2B%2FZNSag1Blo5%2BGKLOORVTH9hmy%2ByPKCpwpTDg9PpMnBHyJRmkPedV8%2BTaevYvYExwJi10fVbEkGzVd9klWs537HGke5v67iAf%2ByO2VrjUhY1vErmH1ilR8KEWAcbYEdqfjTTMLgkhMmjFBePWajdi2Wk9g3lv5Ui4j1XQOyOkjEYnn2lnlTpwqw4Zz8jVHXM6VTrF9QYv5gobpvkfdQab6ZujuNAaQhgy1lDt4aph4rpiLKryW%2F8zZLXEIgrCwvFwL4nEL43cqu8zDHkuK%2FBjqkAXZ16TSVCSFCtFyv5lu2dNYj9RMase5XUVZ1c6cU0kLXClkfrtC7F9XgAFHxwPRfc12XCtDt%2BQ3UCQYhxvF9qYArryhTsrTlgyM0sICD6sAGwm8lQg6i3QFy5316px66FpndLajCzUKUviQOmJwXYcY7TXOx%2FOt0Lejj%2F1%2BkSS4aStna9PLU5bZeyOGXAMtguyMwsonxLuyfzjkFrcHpqcklmReh&X-Amz-Signature=9621194b30e562bbda4e1cc96713e8dcbad7e14b1bbbc9317ea3578f6fd94a42&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BXYZFX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDOnql%2Badf4%2F7C1VVi7R3CYI1EB9RlWWF2zclDMdXvFsQIhAOQXpuhkiQIYQ7f61fssO9EIDjRqIKDlYkQEM8AQSLFIKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg15k%2BqXvz92WK8qQq3ANoFD6Rc5Gh6U8%2BPd99c1IAh0ikwUxXmaRPGI7W19f37mclUmuwSsj7eZAtTOxu6H4AnZ9laq5CE6R9JzKjhdeeAlKvCbgVgogxPBE4kVh9g1UJgragWcItQT1rpTR24GE5nenZcKJdKIqRjWBKZ7%2BnRzcTPQXTHEzoff3%2BuyNn4eLDR9uiJFcLCkunbJWt3xhvOLKVMsUJ7mU784HaGNlTL8DFAEAhAr9hm%2BoKwNKyuQwQ9izYGNlVIETf4O7GEsNZfcWxnT3UPE0ivtqrLjxfxe6qfmLbteRTUhm5gffBtBMVzuN5%2BvhgFjMZmDtQnZfKeCqmPWbkALnt8k3kwN2kbriRhRQ%2BUTv5mzLzb%2Fr2G%2BnnZ%2B%2FZNSag1Blo5%2BGKLOORVTH9hmy%2ByPKCpwpTDg9PpMnBHyJRmkPedV8%2BTaevYvYExwJi10fVbEkGzVd9klWs537HGke5v67iAf%2ByO2VrjUhY1vErmH1ilR8KEWAcbYEdqfjTTMLgkhMmjFBePWajdi2Wk9g3lv5Ui4j1XQOyOkjEYnn2lnlTpwqw4Zz8jVHXM6VTrF9QYv5gobpvkfdQab6ZujuNAaQhgy1lDt4aph4rpiLKryW%2F8zZLXEIgrCwvFwL4nEL43cqu8zDHkuK%2FBjqkAXZ16TSVCSFCtFyv5lu2dNYj9RMase5XUVZ1c6cU0kLXClkfrtC7F9XgAFHxwPRfc12XCtDt%2BQ3UCQYhxvF9qYArryhTsrTlgyM0sICD6sAGwm8lQg6i3QFy5316px66FpndLajCzUKUviQOmJwXYcY7TXOx%2FOt0Lejj%2F1%2BkSS4aStna9PLU5bZeyOGXAMtguyMwsonxLuyfzjkFrcHpqcklmReh&X-Amz-Signature=78ce69477a92d2716da476233f9b5cf9a1f8d8005dc2589b47cc2ed542fdc876&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BXYZFX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDOnql%2Badf4%2F7C1VVi7R3CYI1EB9RlWWF2zclDMdXvFsQIhAOQXpuhkiQIYQ7f61fssO9EIDjRqIKDlYkQEM8AQSLFIKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg15k%2BqXvz92WK8qQq3ANoFD6Rc5Gh6U8%2BPd99c1IAh0ikwUxXmaRPGI7W19f37mclUmuwSsj7eZAtTOxu6H4AnZ9laq5CE6R9JzKjhdeeAlKvCbgVgogxPBE4kVh9g1UJgragWcItQT1rpTR24GE5nenZcKJdKIqRjWBKZ7%2BnRzcTPQXTHEzoff3%2BuyNn4eLDR9uiJFcLCkunbJWt3xhvOLKVMsUJ7mU784HaGNlTL8DFAEAhAr9hm%2BoKwNKyuQwQ9izYGNlVIETf4O7GEsNZfcWxnT3UPE0ivtqrLjxfxe6qfmLbteRTUhm5gffBtBMVzuN5%2BvhgFjMZmDtQnZfKeCqmPWbkALnt8k3kwN2kbriRhRQ%2BUTv5mzLzb%2Fr2G%2BnnZ%2B%2FZNSag1Blo5%2BGKLOORVTH9hmy%2ByPKCpwpTDg9PpMnBHyJRmkPedV8%2BTaevYvYExwJi10fVbEkGzVd9klWs537HGke5v67iAf%2ByO2VrjUhY1vErmH1ilR8KEWAcbYEdqfjTTMLgkhMmjFBePWajdi2Wk9g3lv5Ui4j1XQOyOkjEYnn2lnlTpwqw4Zz8jVHXM6VTrF9QYv5gobpvkfdQab6ZujuNAaQhgy1lDt4aph4rpiLKryW%2F8zZLXEIgrCwvFwL4nEL43cqu8zDHkuK%2FBjqkAXZ16TSVCSFCtFyv5lu2dNYj9RMase5XUVZ1c6cU0kLXClkfrtC7F9XgAFHxwPRfc12XCtDt%2BQ3UCQYhxvF9qYArryhTsrTlgyM0sICD6sAGwm8lQg6i3QFy5316px66FpndLajCzUKUviQOmJwXYcY7TXOx%2FOt0Lejj%2F1%2BkSS4aStna9PLU5bZeyOGXAMtguyMwsonxLuyfzjkFrcHpqcklmReh&X-Amz-Signature=347e6bf86cc4cfc5f6ac773fc6f0fed3c7c474c6200f7596a2f9401d9e813b15&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
