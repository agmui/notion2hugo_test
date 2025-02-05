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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAU3FW6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICbLdM%2BKJbi2XpOHDB5qhZbYYJ9tUGbZsvPjqjLHipQYAiEAnTo7cjsjbBm2rr8W%2Bfh3aGXFuIAWMsX%2Fntyw0inuZ8sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDA%2FQqJMplpAjeQKeLyrcA7LOsbJrKi2bBe9paOYCfAlXMSKxxTT4pW2BJEeMzN9vBcoD6uz64wKahVRhx%2BDUdi33F4BcU80riPRnS7Fpy%2FrugZZFVdy%2FYsoB%2FTRo945MyPhzZDLNCLDw4LN3YffAuiD3VG1GnSzVPcrhP3nhw8Nh1uXOFPdCdPizReFA38EwDAXoJMBlHNgiM0EcOKQd8b4dSEitPjdM8V%2FwqGvtmB7gFr9xpkxTHc%2BCKO7lhUDeJ1TIhgXgnffsSnKCXioOZuvn%2FQp%2FSD4JXA1QTnsNX%2FEMd6imuUA24y3l2Clyk21UAVWF4jp%2BFw2jS3IeG56EGNnN0tdBGcKOWh8Jery0Sl%2Fa2I98IWrF1YOHJpj8LsxvIsIfQNlFJCqPn9NigIXNVnkmRhErzghWhlbXh5K45fQJgrdi%2B1uDvvbGCdq%2Bk8LvZaz0HXosits%2FTQ41nJhdNUd5NGc2wVLKTqBI2hAWLkDYXsxvyqBwWhMdiuTxDx%2Fd2ou0xMHXsj0lkP8yKceSf9rvCVEYf27hi5s0PKDXHKliC69DgxHxuVD1EF4K%2FxTKs292Ym8TeoSvEpC5gCiPyXM%2Fcyt9Jp6C%2FcLECdo%2B%2Fnpb3vAY2kFjFePTrH2MaWVsgPCjIi1uQRjsv3SZMMe7jr0GOqUBhnRk59CA4H8uRqZ7L2QzdSRK4%2FqpojlKj8QHn2E%2BThTzg5lgzK6SqU2PMEtNlG45Ao%2FOZOtWT%2FBY7jJTLqstW%2BYpHWzqnvrUEB22ZKq5cq5TcCqOEEDSk5IcURGZOSjCLOfXmlVANQK5ejPLY9KTIsmL0W1c%2FgXNxExL7LZl4aZk3e8JibM3uG1rppv%2BiOqz6VvDCNBO8FlwkCh%2BEptKZ6tl8b1T&X-Amz-Signature=c6cb821135534c9703026cca3e1c570a9f845d84b9341d12242eacf27409c1f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAU3FW6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICbLdM%2BKJbi2XpOHDB5qhZbYYJ9tUGbZsvPjqjLHipQYAiEAnTo7cjsjbBm2rr8W%2Bfh3aGXFuIAWMsX%2Fntyw0inuZ8sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDA%2FQqJMplpAjeQKeLyrcA7LOsbJrKi2bBe9paOYCfAlXMSKxxTT4pW2BJEeMzN9vBcoD6uz64wKahVRhx%2BDUdi33F4BcU80riPRnS7Fpy%2FrugZZFVdy%2FYsoB%2FTRo945MyPhzZDLNCLDw4LN3YffAuiD3VG1GnSzVPcrhP3nhw8Nh1uXOFPdCdPizReFA38EwDAXoJMBlHNgiM0EcOKQd8b4dSEitPjdM8V%2FwqGvtmB7gFr9xpkxTHc%2BCKO7lhUDeJ1TIhgXgnffsSnKCXioOZuvn%2FQp%2FSD4JXA1QTnsNX%2FEMd6imuUA24y3l2Clyk21UAVWF4jp%2BFw2jS3IeG56EGNnN0tdBGcKOWh8Jery0Sl%2Fa2I98IWrF1YOHJpj8LsxvIsIfQNlFJCqPn9NigIXNVnkmRhErzghWhlbXh5K45fQJgrdi%2B1uDvvbGCdq%2Bk8LvZaz0HXosits%2FTQ41nJhdNUd5NGc2wVLKTqBI2hAWLkDYXsxvyqBwWhMdiuTxDx%2Fd2ou0xMHXsj0lkP8yKceSf9rvCVEYf27hi5s0PKDXHKliC69DgxHxuVD1EF4K%2FxTKs292Ym8TeoSvEpC5gCiPyXM%2Fcyt9Jp6C%2FcLECdo%2B%2Fnpb3vAY2kFjFePTrH2MaWVsgPCjIi1uQRjsv3SZMMe7jr0GOqUBhnRk59CA4H8uRqZ7L2QzdSRK4%2FqpojlKj8QHn2E%2BThTzg5lgzK6SqU2PMEtNlG45Ao%2FOZOtWT%2FBY7jJTLqstW%2BYpHWzqnvrUEB22ZKq5cq5TcCqOEEDSk5IcURGZOSjCLOfXmlVANQK5ejPLY9KTIsmL0W1c%2FgXNxExL7LZl4aZk3e8JibM3uG1rppv%2BiOqz6VvDCNBO8FlwkCh%2BEptKZ6tl8b1T&X-Amz-Signature=55f78dffd0e237e741f4966b9a0fc008b4cd1701de45d9dc15909bb0fd2f7d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAU3FW6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICbLdM%2BKJbi2XpOHDB5qhZbYYJ9tUGbZsvPjqjLHipQYAiEAnTo7cjsjbBm2rr8W%2Bfh3aGXFuIAWMsX%2Fntyw0inuZ8sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDA%2FQqJMplpAjeQKeLyrcA7LOsbJrKi2bBe9paOYCfAlXMSKxxTT4pW2BJEeMzN9vBcoD6uz64wKahVRhx%2BDUdi33F4BcU80riPRnS7Fpy%2FrugZZFVdy%2FYsoB%2FTRo945MyPhzZDLNCLDw4LN3YffAuiD3VG1GnSzVPcrhP3nhw8Nh1uXOFPdCdPizReFA38EwDAXoJMBlHNgiM0EcOKQd8b4dSEitPjdM8V%2FwqGvtmB7gFr9xpkxTHc%2BCKO7lhUDeJ1TIhgXgnffsSnKCXioOZuvn%2FQp%2FSD4JXA1QTnsNX%2FEMd6imuUA24y3l2Clyk21UAVWF4jp%2BFw2jS3IeG56EGNnN0tdBGcKOWh8Jery0Sl%2Fa2I98IWrF1YOHJpj8LsxvIsIfQNlFJCqPn9NigIXNVnkmRhErzghWhlbXh5K45fQJgrdi%2B1uDvvbGCdq%2Bk8LvZaz0HXosits%2FTQ41nJhdNUd5NGc2wVLKTqBI2hAWLkDYXsxvyqBwWhMdiuTxDx%2Fd2ou0xMHXsj0lkP8yKceSf9rvCVEYf27hi5s0PKDXHKliC69DgxHxuVD1EF4K%2FxTKs292Ym8TeoSvEpC5gCiPyXM%2Fcyt9Jp6C%2FcLECdo%2B%2Fnpb3vAY2kFjFePTrH2MaWVsgPCjIi1uQRjsv3SZMMe7jr0GOqUBhnRk59CA4H8uRqZ7L2QzdSRK4%2FqpojlKj8QHn2E%2BThTzg5lgzK6SqU2PMEtNlG45Ao%2FOZOtWT%2FBY7jJTLqstW%2BYpHWzqnvrUEB22ZKq5cq5TcCqOEEDSk5IcURGZOSjCLOfXmlVANQK5ejPLY9KTIsmL0W1c%2FgXNxExL7LZl4aZk3e8JibM3uG1rppv%2BiOqz6VvDCNBO8FlwkCh%2BEptKZ6tl8b1T&X-Amz-Signature=1f9b9b540c04096330edad15c77974df60fa72c4c9f5a10718b223c05e2a2802&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAU3FW6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICbLdM%2BKJbi2XpOHDB5qhZbYYJ9tUGbZsvPjqjLHipQYAiEAnTo7cjsjbBm2rr8W%2Bfh3aGXFuIAWMsX%2Fntyw0inuZ8sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDA%2FQqJMplpAjeQKeLyrcA7LOsbJrKi2bBe9paOYCfAlXMSKxxTT4pW2BJEeMzN9vBcoD6uz64wKahVRhx%2BDUdi33F4BcU80riPRnS7Fpy%2FrugZZFVdy%2FYsoB%2FTRo945MyPhzZDLNCLDw4LN3YffAuiD3VG1GnSzVPcrhP3nhw8Nh1uXOFPdCdPizReFA38EwDAXoJMBlHNgiM0EcOKQd8b4dSEitPjdM8V%2FwqGvtmB7gFr9xpkxTHc%2BCKO7lhUDeJ1TIhgXgnffsSnKCXioOZuvn%2FQp%2FSD4JXA1QTnsNX%2FEMd6imuUA24y3l2Clyk21UAVWF4jp%2BFw2jS3IeG56EGNnN0tdBGcKOWh8Jery0Sl%2Fa2I98IWrF1YOHJpj8LsxvIsIfQNlFJCqPn9NigIXNVnkmRhErzghWhlbXh5K45fQJgrdi%2B1uDvvbGCdq%2Bk8LvZaz0HXosits%2FTQ41nJhdNUd5NGc2wVLKTqBI2hAWLkDYXsxvyqBwWhMdiuTxDx%2Fd2ou0xMHXsj0lkP8yKceSf9rvCVEYf27hi5s0PKDXHKliC69DgxHxuVD1EF4K%2FxTKs292Ym8TeoSvEpC5gCiPyXM%2Fcyt9Jp6C%2FcLECdo%2B%2Fnpb3vAY2kFjFePTrH2MaWVsgPCjIi1uQRjsv3SZMMe7jr0GOqUBhnRk59CA4H8uRqZ7L2QzdSRK4%2FqpojlKj8QHn2E%2BThTzg5lgzK6SqU2PMEtNlG45Ao%2FOZOtWT%2FBY7jJTLqstW%2BYpHWzqnvrUEB22ZKq5cq5TcCqOEEDSk5IcURGZOSjCLOfXmlVANQK5ejPLY9KTIsmL0W1c%2FgXNxExL7LZl4aZk3e8JibM3uG1rppv%2BiOqz6VvDCNBO8FlwkCh%2BEptKZ6tl8b1T&X-Amz-Signature=e2fa94afef9fa88a4f86eec364705bfb3cc4e003382ce7901684f1f36ffd16de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAU3FW6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICbLdM%2BKJbi2XpOHDB5qhZbYYJ9tUGbZsvPjqjLHipQYAiEAnTo7cjsjbBm2rr8W%2Bfh3aGXFuIAWMsX%2Fntyw0inuZ8sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDA%2FQqJMplpAjeQKeLyrcA7LOsbJrKi2bBe9paOYCfAlXMSKxxTT4pW2BJEeMzN9vBcoD6uz64wKahVRhx%2BDUdi33F4BcU80riPRnS7Fpy%2FrugZZFVdy%2FYsoB%2FTRo945MyPhzZDLNCLDw4LN3YffAuiD3VG1GnSzVPcrhP3nhw8Nh1uXOFPdCdPizReFA38EwDAXoJMBlHNgiM0EcOKQd8b4dSEitPjdM8V%2FwqGvtmB7gFr9xpkxTHc%2BCKO7lhUDeJ1TIhgXgnffsSnKCXioOZuvn%2FQp%2FSD4JXA1QTnsNX%2FEMd6imuUA24y3l2Clyk21UAVWF4jp%2BFw2jS3IeG56EGNnN0tdBGcKOWh8Jery0Sl%2Fa2I98IWrF1YOHJpj8LsxvIsIfQNlFJCqPn9NigIXNVnkmRhErzghWhlbXh5K45fQJgrdi%2B1uDvvbGCdq%2Bk8LvZaz0HXosits%2FTQ41nJhdNUd5NGc2wVLKTqBI2hAWLkDYXsxvyqBwWhMdiuTxDx%2Fd2ou0xMHXsj0lkP8yKceSf9rvCVEYf27hi5s0PKDXHKliC69DgxHxuVD1EF4K%2FxTKs292Ym8TeoSvEpC5gCiPyXM%2Fcyt9Jp6C%2FcLECdo%2B%2Fnpb3vAY2kFjFePTrH2MaWVsgPCjIi1uQRjsv3SZMMe7jr0GOqUBhnRk59CA4H8uRqZ7L2QzdSRK4%2FqpojlKj8QHn2E%2BThTzg5lgzK6SqU2PMEtNlG45Ao%2FOZOtWT%2FBY7jJTLqstW%2BYpHWzqnvrUEB22ZKq5cq5TcCqOEEDSk5IcURGZOSjCLOfXmlVANQK5ejPLY9KTIsmL0W1c%2FgXNxExL7LZl4aZk3e8JibM3uG1rppv%2BiOqz6VvDCNBO8FlwkCh%2BEptKZ6tl8b1T&X-Amz-Signature=ca9b4c106c83c75eea7727a71eea3593a8e14b6bbf268e409f2a7d61fb692678&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
