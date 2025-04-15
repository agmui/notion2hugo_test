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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEV5ZKYV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG3PY71HbO3p2sYTpRmchtQI8EHllXUi3GGG9YVCJoyAiEAxYdVjNpoSRO6wDHNkEp5yEQjHkv8pn9Nhfo4e9%2F4Wowq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKOv%2FZXaPZPZmvXVkSrcA%2BkBbUe2djc9KGHS6z%2FKjM0fPXY1Z6Va7PYl%2BN6UHNDRLbUEth5AduShHn1uK3k3WIoFwJp7I4qHes0tUqV8nGJ2POS4P5jGOs%2BUC9EU7qGMnygdzt%2B7H3KRAhq%2B9X%2Fdcxi4UItz71GAVG95p7qjSXZ1M9hQJxc%2FU7ks54PEzZglVWpHlg%2BlmMUFCETmsA1U291oKlS3wE7D3xAkwD8OguFDFIWopd2S1eLqzeGH%2BQdF9%2FeyCkbI2z5PjcCczTdFlkV8fWsWgJDrdFcP172MuzAN8Za53jznitB6AqoBtZxHKITQH7%2FkdktyQ5D3147xvUjBlf0d744QPScahfz8GDMOO3g8IGTh1%2BH1BHWEvNROef5dENvvVDk6IvGDzS8P7EK6bOh8Uh4jb4r49B5B9Ex6rNtsrln00dyrl7Zbys2CxKz1EeFVnAACPtfg1UiS%2FSzblZUIYH9pgoynH0q5eTDLKCzKz5zPaSJvxTDiYRrx%2BRpasm49oafqRMMNYUqSLGplYC5buC7HsDjTas%2B5pqIsx6JLFhjqdcDV5zBiaxkzriXoeHD2rNJ6DFV%2FcDliwKdXdn6gXVZa7QMN8R%2FaxYcpb2blbeKOidgrEoNzTqN9uq4i5Ii%2BYoYvSYheMI%2FS9r8GOqUBPsdnWI74UevRr9b9Xdj3nduv5S5dMs756X3dq959%2B3xwDogTODwSMkaq927WRsTWtrbvhe%2FRuFhIGxsud0kJ8EU12welmf%2FXgV03Ly%2FRfstpSbdW%2FFQdrrPpSKG7gmssiVWRMLbV1AUrzosMldLNuSDb8qJZH12oSNYAAXR4%2FH6uz8%2FW%2BTaNmmt2rVnBv0IBc95OlvigU2uDgxizWHI3qpshmXuL&X-Amz-Signature=84aa915b7615a78808432fbd2725bbafb3be8e96b1ef429b970dcd0b7f489db7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEV5ZKYV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG3PY71HbO3p2sYTpRmchtQI8EHllXUi3GGG9YVCJoyAiEAxYdVjNpoSRO6wDHNkEp5yEQjHkv8pn9Nhfo4e9%2F4Wowq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKOv%2FZXaPZPZmvXVkSrcA%2BkBbUe2djc9KGHS6z%2FKjM0fPXY1Z6Va7PYl%2BN6UHNDRLbUEth5AduShHn1uK3k3WIoFwJp7I4qHes0tUqV8nGJ2POS4P5jGOs%2BUC9EU7qGMnygdzt%2B7H3KRAhq%2B9X%2Fdcxi4UItz71GAVG95p7qjSXZ1M9hQJxc%2FU7ks54PEzZglVWpHlg%2BlmMUFCETmsA1U291oKlS3wE7D3xAkwD8OguFDFIWopd2S1eLqzeGH%2BQdF9%2FeyCkbI2z5PjcCczTdFlkV8fWsWgJDrdFcP172MuzAN8Za53jznitB6AqoBtZxHKITQH7%2FkdktyQ5D3147xvUjBlf0d744QPScahfz8GDMOO3g8IGTh1%2BH1BHWEvNROef5dENvvVDk6IvGDzS8P7EK6bOh8Uh4jb4r49B5B9Ex6rNtsrln00dyrl7Zbys2CxKz1EeFVnAACPtfg1UiS%2FSzblZUIYH9pgoynH0q5eTDLKCzKz5zPaSJvxTDiYRrx%2BRpasm49oafqRMMNYUqSLGplYC5buC7HsDjTas%2B5pqIsx6JLFhjqdcDV5zBiaxkzriXoeHD2rNJ6DFV%2FcDliwKdXdn6gXVZa7QMN8R%2FaxYcpb2blbeKOidgrEoNzTqN9uq4i5Ii%2BYoYvSYheMI%2FS9r8GOqUBPsdnWI74UevRr9b9Xdj3nduv5S5dMs756X3dq959%2B3xwDogTODwSMkaq927WRsTWtrbvhe%2FRuFhIGxsud0kJ8EU12welmf%2FXgV03Ly%2FRfstpSbdW%2FFQdrrPpSKG7gmssiVWRMLbV1AUrzosMldLNuSDb8qJZH12oSNYAAXR4%2FH6uz8%2FW%2BTaNmmt2rVnBv0IBc95OlvigU2uDgxizWHI3qpshmXuL&X-Amz-Signature=488e8f638bb6b244bd5d4ac87f0296a69b44ed7da70ac568d808ac2e9d1004ed&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEV5ZKYV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG3PY71HbO3p2sYTpRmchtQI8EHllXUi3GGG9YVCJoyAiEAxYdVjNpoSRO6wDHNkEp5yEQjHkv8pn9Nhfo4e9%2F4Wowq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKOv%2FZXaPZPZmvXVkSrcA%2BkBbUe2djc9KGHS6z%2FKjM0fPXY1Z6Va7PYl%2BN6UHNDRLbUEth5AduShHn1uK3k3WIoFwJp7I4qHes0tUqV8nGJ2POS4P5jGOs%2BUC9EU7qGMnygdzt%2B7H3KRAhq%2B9X%2Fdcxi4UItz71GAVG95p7qjSXZ1M9hQJxc%2FU7ks54PEzZglVWpHlg%2BlmMUFCETmsA1U291oKlS3wE7D3xAkwD8OguFDFIWopd2S1eLqzeGH%2BQdF9%2FeyCkbI2z5PjcCczTdFlkV8fWsWgJDrdFcP172MuzAN8Za53jznitB6AqoBtZxHKITQH7%2FkdktyQ5D3147xvUjBlf0d744QPScahfz8GDMOO3g8IGTh1%2BH1BHWEvNROef5dENvvVDk6IvGDzS8P7EK6bOh8Uh4jb4r49B5B9Ex6rNtsrln00dyrl7Zbys2CxKz1EeFVnAACPtfg1UiS%2FSzblZUIYH9pgoynH0q5eTDLKCzKz5zPaSJvxTDiYRrx%2BRpasm49oafqRMMNYUqSLGplYC5buC7HsDjTas%2B5pqIsx6JLFhjqdcDV5zBiaxkzriXoeHD2rNJ6DFV%2FcDliwKdXdn6gXVZa7QMN8R%2FaxYcpb2blbeKOidgrEoNzTqN9uq4i5Ii%2BYoYvSYheMI%2FS9r8GOqUBPsdnWI74UevRr9b9Xdj3nduv5S5dMs756X3dq959%2B3xwDogTODwSMkaq927WRsTWtrbvhe%2FRuFhIGxsud0kJ8EU12welmf%2FXgV03Ly%2FRfstpSbdW%2FFQdrrPpSKG7gmssiVWRMLbV1AUrzosMldLNuSDb8qJZH12oSNYAAXR4%2FH6uz8%2FW%2BTaNmmt2rVnBv0IBc95OlvigU2uDgxizWHI3qpshmXuL&X-Amz-Signature=836e959659e552f2b8f2ffccd9ff62e5b63d53053fe680caae5fee2f2afe145d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEV5ZKYV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG3PY71HbO3p2sYTpRmchtQI8EHllXUi3GGG9YVCJoyAiEAxYdVjNpoSRO6wDHNkEp5yEQjHkv8pn9Nhfo4e9%2F4Wowq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKOv%2FZXaPZPZmvXVkSrcA%2BkBbUe2djc9KGHS6z%2FKjM0fPXY1Z6Va7PYl%2BN6UHNDRLbUEth5AduShHn1uK3k3WIoFwJp7I4qHes0tUqV8nGJ2POS4P5jGOs%2BUC9EU7qGMnygdzt%2B7H3KRAhq%2B9X%2Fdcxi4UItz71GAVG95p7qjSXZ1M9hQJxc%2FU7ks54PEzZglVWpHlg%2BlmMUFCETmsA1U291oKlS3wE7D3xAkwD8OguFDFIWopd2S1eLqzeGH%2BQdF9%2FeyCkbI2z5PjcCczTdFlkV8fWsWgJDrdFcP172MuzAN8Za53jznitB6AqoBtZxHKITQH7%2FkdktyQ5D3147xvUjBlf0d744QPScahfz8GDMOO3g8IGTh1%2BH1BHWEvNROef5dENvvVDk6IvGDzS8P7EK6bOh8Uh4jb4r49B5B9Ex6rNtsrln00dyrl7Zbys2CxKz1EeFVnAACPtfg1UiS%2FSzblZUIYH9pgoynH0q5eTDLKCzKz5zPaSJvxTDiYRrx%2BRpasm49oafqRMMNYUqSLGplYC5buC7HsDjTas%2B5pqIsx6JLFhjqdcDV5zBiaxkzriXoeHD2rNJ6DFV%2FcDliwKdXdn6gXVZa7QMN8R%2FaxYcpb2blbeKOidgrEoNzTqN9uq4i5Ii%2BYoYvSYheMI%2FS9r8GOqUBPsdnWI74UevRr9b9Xdj3nduv5S5dMs756X3dq959%2B3xwDogTODwSMkaq927WRsTWtrbvhe%2FRuFhIGxsud0kJ8EU12welmf%2FXgV03Ly%2FRfstpSbdW%2FFQdrrPpSKG7gmssiVWRMLbV1AUrzosMldLNuSDb8qJZH12oSNYAAXR4%2FH6uz8%2FW%2BTaNmmt2rVnBv0IBc95OlvigU2uDgxizWHI3qpshmXuL&X-Amz-Signature=9e90ab87ee7550d294e3ee121ee9229d5d676f5472a5aa9745e66a2d03faf8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEV5ZKYV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG3PY71HbO3p2sYTpRmchtQI8EHllXUi3GGG9YVCJoyAiEAxYdVjNpoSRO6wDHNkEp5yEQjHkv8pn9Nhfo4e9%2F4Wowq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKOv%2FZXaPZPZmvXVkSrcA%2BkBbUe2djc9KGHS6z%2FKjM0fPXY1Z6Va7PYl%2BN6UHNDRLbUEth5AduShHn1uK3k3WIoFwJp7I4qHes0tUqV8nGJ2POS4P5jGOs%2BUC9EU7qGMnygdzt%2B7H3KRAhq%2B9X%2Fdcxi4UItz71GAVG95p7qjSXZ1M9hQJxc%2FU7ks54PEzZglVWpHlg%2BlmMUFCETmsA1U291oKlS3wE7D3xAkwD8OguFDFIWopd2S1eLqzeGH%2BQdF9%2FeyCkbI2z5PjcCczTdFlkV8fWsWgJDrdFcP172MuzAN8Za53jznitB6AqoBtZxHKITQH7%2FkdktyQ5D3147xvUjBlf0d744QPScahfz8GDMOO3g8IGTh1%2BH1BHWEvNROef5dENvvVDk6IvGDzS8P7EK6bOh8Uh4jb4r49B5B9Ex6rNtsrln00dyrl7Zbys2CxKz1EeFVnAACPtfg1UiS%2FSzblZUIYH9pgoynH0q5eTDLKCzKz5zPaSJvxTDiYRrx%2BRpasm49oafqRMMNYUqSLGplYC5buC7HsDjTas%2B5pqIsx6JLFhjqdcDV5zBiaxkzriXoeHD2rNJ6DFV%2FcDliwKdXdn6gXVZa7QMN8R%2FaxYcpb2blbeKOidgrEoNzTqN9uq4i5Ii%2BYoYvSYheMI%2FS9r8GOqUBPsdnWI74UevRr9b9Xdj3nduv5S5dMs756X3dq959%2B3xwDogTODwSMkaq927WRsTWtrbvhe%2FRuFhIGxsud0kJ8EU12welmf%2FXgV03Ly%2FRfstpSbdW%2FFQdrrPpSKG7gmssiVWRMLbV1AUrzosMldLNuSDb8qJZH12oSNYAAXR4%2FH6uz8%2FW%2BTaNmmt2rVnBv0IBc95OlvigU2uDgxizWHI3qpshmXuL&X-Amz-Signature=73678b86fd8eeb5d68130368c8d634ba408c2c63806bddc6ce67adf781960099&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
