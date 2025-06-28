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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZADS6NJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiBKkWspXAOuiwJfxn%2BDvvgLQJcilwAdpK%2BD3uSkYCmQIgQmN6V3t2oEydDvZrrrQmVSxOKVdsADCs%2FORRakeLQ6AqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUFTCOv8wuFA9YVEyrcA3%2FV7huG6Bc%2Ban7Neo9uyS0QEy1W3yMvU3ietnxJ8S%2FFzjTznXqV%2F2WYodm7gY1HRTPSCQVvaNe1c2zwL1CTpx4RlvG6ScGa8w2MyOajLG7qg5iR09ORnBQ5HZA%2BywBvwEq6zw6RR%2FxWpTSF97WXBS1n9VQHmWurcFEqj7ZWZcAifBeNeDd2Nxa75Uj0aeGDK%2Fcz7tMSJzHFZVIiVAWEezIM3GCQk99kbFYJ%2Fzo1XmyQLFd%2FS6LueEJ79U5gWVPzrup7QALs8IFdEvF3yhTeLkykPPMbsO2pFe6%2F0gptYIFgov4X%2FZKBMnAT4Iva%2BIIG4FmXX%2BjeOj85bZVPi0AbPallOuWkZ1uz8EeFq%2FukwlJRSM8sEjZWHxm7K4IC85yPR4IlUEKZwRTjqKuPP0XGyyC5Mw%2BRKK5l2ElPcIGQQM%2Fk2me1PvedfwJmAC0WtKS6JRsl6AInU8txt2Ic34ALPCIxukgK%2FpoOhaLuL3AJcxWHhetDAXDZwZrAmahC1SI42SJL%2BllFFQvxca8km0VOlsFI70wQt6IK3nB3cmZhbgW8UKAb5BJ2lckidNhnJy79dmF%2FJTs%2FyxJ0KLwpNjfZpUnqUdslJLE6ibK7RcEYD8hNJUqQt%2BNajKPeeZqkMP6g%2FsIGOqUBRqP4kgmqPwvORBWQyCcYxUm4c8XItcELWHexSR%2BbvC0MP9zrrppXmWZ5NZbIlK4ymyhIrXqjN19%2BJ3kVODVt2DohXmrxy%2F7wuq1OGSxVBgMoPbRfMP1lCY7vUonS1Qe%2BeFmLkdsvs7qbzr9tqHAPqD%2FnXV6zFCfcfN%2BDnyaA4edJAaHNJBcSj3YJr%2F%2FX6ii7lRezjJkcWKh%2B2VRbdwNgh1ui4R%2FX&X-Amz-Signature=ebd6217ec47512f99ff80a2ec4f200b7839d08b91283680a0bd837ec62cbb293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZADS6NJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiBKkWspXAOuiwJfxn%2BDvvgLQJcilwAdpK%2BD3uSkYCmQIgQmN6V3t2oEydDvZrrrQmVSxOKVdsADCs%2FORRakeLQ6AqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUFTCOv8wuFA9YVEyrcA3%2FV7huG6Bc%2Ban7Neo9uyS0QEy1W3yMvU3ietnxJ8S%2FFzjTznXqV%2F2WYodm7gY1HRTPSCQVvaNe1c2zwL1CTpx4RlvG6ScGa8w2MyOajLG7qg5iR09ORnBQ5HZA%2BywBvwEq6zw6RR%2FxWpTSF97WXBS1n9VQHmWurcFEqj7ZWZcAifBeNeDd2Nxa75Uj0aeGDK%2Fcz7tMSJzHFZVIiVAWEezIM3GCQk99kbFYJ%2Fzo1XmyQLFd%2FS6LueEJ79U5gWVPzrup7QALs8IFdEvF3yhTeLkykPPMbsO2pFe6%2F0gptYIFgov4X%2FZKBMnAT4Iva%2BIIG4FmXX%2BjeOj85bZVPi0AbPallOuWkZ1uz8EeFq%2FukwlJRSM8sEjZWHxm7K4IC85yPR4IlUEKZwRTjqKuPP0XGyyC5Mw%2BRKK5l2ElPcIGQQM%2Fk2me1PvedfwJmAC0WtKS6JRsl6AInU8txt2Ic34ALPCIxukgK%2FpoOhaLuL3AJcxWHhetDAXDZwZrAmahC1SI42SJL%2BllFFQvxca8km0VOlsFI70wQt6IK3nB3cmZhbgW8UKAb5BJ2lckidNhnJy79dmF%2FJTs%2FyxJ0KLwpNjfZpUnqUdslJLE6ibK7RcEYD8hNJUqQt%2BNajKPeeZqkMP6g%2FsIGOqUBRqP4kgmqPwvORBWQyCcYxUm4c8XItcELWHexSR%2BbvC0MP9zrrppXmWZ5NZbIlK4ymyhIrXqjN19%2BJ3kVODVt2DohXmrxy%2F7wuq1OGSxVBgMoPbRfMP1lCY7vUonS1Qe%2BeFmLkdsvs7qbzr9tqHAPqD%2FnXV6zFCfcfN%2BDnyaA4edJAaHNJBcSj3YJr%2F%2FX6ii7lRezjJkcWKh%2B2VRbdwNgh1ui4R%2FX&X-Amz-Signature=b52540473cb0272735d766dae743e6117040c914f035f7d743ba44f7d5ca9002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZADS6NJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiBKkWspXAOuiwJfxn%2BDvvgLQJcilwAdpK%2BD3uSkYCmQIgQmN6V3t2oEydDvZrrrQmVSxOKVdsADCs%2FORRakeLQ6AqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUFTCOv8wuFA9YVEyrcA3%2FV7huG6Bc%2Ban7Neo9uyS0QEy1W3yMvU3ietnxJ8S%2FFzjTznXqV%2F2WYodm7gY1HRTPSCQVvaNe1c2zwL1CTpx4RlvG6ScGa8w2MyOajLG7qg5iR09ORnBQ5HZA%2BywBvwEq6zw6RR%2FxWpTSF97WXBS1n9VQHmWurcFEqj7ZWZcAifBeNeDd2Nxa75Uj0aeGDK%2Fcz7tMSJzHFZVIiVAWEezIM3GCQk99kbFYJ%2Fzo1XmyQLFd%2FS6LueEJ79U5gWVPzrup7QALs8IFdEvF3yhTeLkykPPMbsO2pFe6%2F0gptYIFgov4X%2FZKBMnAT4Iva%2BIIG4FmXX%2BjeOj85bZVPi0AbPallOuWkZ1uz8EeFq%2FukwlJRSM8sEjZWHxm7K4IC85yPR4IlUEKZwRTjqKuPP0XGyyC5Mw%2BRKK5l2ElPcIGQQM%2Fk2me1PvedfwJmAC0WtKS6JRsl6AInU8txt2Ic34ALPCIxukgK%2FpoOhaLuL3AJcxWHhetDAXDZwZrAmahC1SI42SJL%2BllFFQvxca8km0VOlsFI70wQt6IK3nB3cmZhbgW8UKAb5BJ2lckidNhnJy79dmF%2FJTs%2FyxJ0KLwpNjfZpUnqUdslJLE6ibK7RcEYD8hNJUqQt%2BNajKPeeZqkMP6g%2FsIGOqUBRqP4kgmqPwvORBWQyCcYxUm4c8XItcELWHexSR%2BbvC0MP9zrrppXmWZ5NZbIlK4ymyhIrXqjN19%2BJ3kVODVt2DohXmrxy%2F7wuq1OGSxVBgMoPbRfMP1lCY7vUonS1Qe%2BeFmLkdsvs7qbzr9tqHAPqD%2FnXV6zFCfcfN%2BDnyaA4edJAaHNJBcSj3YJr%2F%2FX6ii7lRezjJkcWKh%2B2VRbdwNgh1ui4R%2FX&X-Amz-Signature=3330ac6ef83ebd12b42fda27820d59c5b6c57a28571fff4a4730f82f40011332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZADS6NJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiBKkWspXAOuiwJfxn%2BDvvgLQJcilwAdpK%2BD3uSkYCmQIgQmN6V3t2oEydDvZrrrQmVSxOKVdsADCs%2FORRakeLQ6AqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUFTCOv8wuFA9YVEyrcA3%2FV7huG6Bc%2Ban7Neo9uyS0QEy1W3yMvU3ietnxJ8S%2FFzjTznXqV%2F2WYodm7gY1HRTPSCQVvaNe1c2zwL1CTpx4RlvG6ScGa8w2MyOajLG7qg5iR09ORnBQ5HZA%2BywBvwEq6zw6RR%2FxWpTSF97WXBS1n9VQHmWurcFEqj7ZWZcAifBeNeDd2Nxa75Uj0aeGDK%2Fcz7tMSJzHFZVIiVAWEezIM3GCQk99kbFYJ%2Fzo1XmyQLFd%2FS6LueEJ79U5gWVPzrup7QALs8IFdEvF3yhTeLkykPPMbsO2pFe6%2F0gptYIFgov4X%2FZKBMnAT4Iva%2BIIG4FmXX%2BjeOj85bZVPi0AbPallOuWkZ1uz8EeFq%2FukwlJRSM8sEjZWHxm7K4IC85yPR4IlUEKZwRTjqKuPP0XGyyC5Mw%2BRKK5l2ElPcIGQQM%2Fk2me1PvedfwJmAC0WtKS6JRsl6AInU8txt2Ic34ALPCIxukgK%2FpoOhaLuL3AJcxWHhetDAXDZwZrAmahC1SI42SJL%2BllFFQvxca8km0VOlsFI70wQt6IK3nB3cmZhbgW8UKAb5BJ2lckidNhnJy79dmF%2FJTs%2FyxJ0KLwpNjfZpUnqUdslJLE6ibK7RcEYD8hNJUqQt%2BNajKPeeZqkMP6g%2FsIGOqUBRqP4kgmqPwvORBWQyCcYxUm4c8XItcELWHexSR%2BbvC0MP9zrrppXmWZ5NZbIlK4ymyhIrXqjN19%2BJ3kVODVt2DohXmrxy%2F7wuq1OGSxVBgMoPbRfMP1lCY7vUonS1Qe%2BeFmLkdsvs7qbzr9tqHAPqD%2FnXV6zFCfcfN%2BDnyaA4edJAaHNJBcSj3YJr%2F%2FX6ii7lRezjJkcWKh%2B2VRbdwNgh1ui4R%2FX&X-Amz-Signature=3a46f8ea273455a928066ac63469327711da0be1bf80de04de7929e2c1b37a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZADS6NJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiBKkWspXAOuiwJfxn%2BDvvgLQJcilwAdpK%2BD3uSkYCmQIgQmN6V3t2oEydDvZrrrQmVSxOKVdsADCs%2FORRakeLQ6AqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUFTCOv8wuFA9YVEyrcA3%2FV7huG6Bc%2Ban7Neo9uyS0QEy1W3yMvU3ietnxJ8S%2FFzjTznXqV%2F2WYodm7gY1HRTPSCQVvaNe1c2zwL1CTpx4RlvG6ScGa8w2MyOajLG7qg5iR09ORnBQ5HZA%2BywBvwEq6zw6RR%2FxWpTSF97WXBS1n9VQHmWurcFEqj7ZWZcAifBeNeDd2Nxa75Uj0aeGDK%2Fcz7tMSJzHFZVIiVAWEezIM3GCQk99kbFYJ%2Fzo1XmyQLFd%2FS6LueEJ79U5gWVPzrup7QALs8IFdEvF3yhTeLkykPPMbsO2pFe6%2F0gptYIFgov4X%2FZKBMnAT4Iva%2BIIG4FmXX%2BjeOj85bZVPi0AbPallOuWkZ1uz8EeFq%2FukwlJRSM8sEjZWHxm7K4IC85yPR4IlUEKZwRTjqKuPP0XGyyC5Mw%2BRKK5l2ElPcIGQQM%2Fk2me1PvedfwJmAC0WtKS6JRsl6AInU8txt2Ic34ALPCIxukgK%2FpoOhaLuL3AJcxWHhetDAXDZwZrAmahC1SI42SJL%2BllFFQvxca8km0VOlsFI70wQt6IK3nB3cmZhbgW8UKAb5BJ2lckidNhnJy79dmF%2FJTs%2FyxJ0KLwpNjfZpUnqUdslJLE6ibK7RcEYD8hNJUqQt%2BNajKPeeZqkMP6g%2FsIGOqUBRqP4kgmqPwvORBWQyCcYxUm4c8XItcELWHexSR%2BbvC0MP9zrrppXmWZ5NZbIlK4ymyhIrXqjN19%2BJ3kVODVt2DohXmrxy%2F7wuq1OGSxVBgMoPbRfMP1lCY7vUonS1Qe%2BeFmLkdsvs7qbzr9tqHAPqD%2FnXV6zFCfcfN%2BDnyaA4edJAaHNJBcSj3YJr%2F%2FX6ii7lRezjJkcWKh%2B2VRbdwNgh1ui4R%2FX&X-Amz-Signature=08dca8f5780c69f554bce570eaab4fc154e11b7d6604916eed4351cdfccf3dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
