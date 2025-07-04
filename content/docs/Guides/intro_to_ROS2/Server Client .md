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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV6VHUAV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF79irHNRnEqMN1Fp9jTfluDUqSfBOVxzy9CcrrHMNRjAiEA8fsNpev59gd0adImoAtqNanwsUvQreH4Dy41%2FgyQLsUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJkeP17dD1U%2FxQrKhircA7vM367y64jHeyGCe0KTg3Rl3Um6AevS%2BckXwGBuZkZNV%2FCsCYNEufdR4czApFtyK3cahSsKVo09AkV7n3OuawgZEMyBFwQYjkai0wuGLOwfstf%2BcdVLSM64PJDsm4ABEGiWYCED%2BFJvuZJYvAPzQUnseHZn4pdhLwJEMOMRVM7QJgYAJnyM2qOxEGynkiMdKYdkKH8w6O%2Bu%2F94AFHndUYRFJ2IpPk1X%2Bx0IquyNsGjWNItw5gro3gRG0f%2BIdRiU909Nun1OJyMM89O9xNaow%2FGbh6vv%2B%2FwYxj3%2Bty9S7vOqP%2FPIxDkUg6MetIqVGJ7hkBxMgy%2FAoKy7JI1uHmJsViF4ultC3fNzS0e%2FHbz7jebk29FJ3WhCcHbxRWsG0d%2F%2BJ%2Bk0oa0hmjsvfYDm8raSYPKvZ6H0ifa2sHSzZTXZLVA8SssQUIG%2BoxDWnDxu91sN7Clrn81vgwHaiuWiyyRCdODJNt7N1SDSEWW9q2VOex4ef4sQ%2B1RO9RVlR25dMmxdfWHvNKoSJmxfoCNMq%2Ft8YVvobaO7%2F8C2C3fMmwNEYNwtPP3Sgz2ZlMhqYt0nQ2qTYT5hr7%2Fg7Wp4zCbpXQ%2BKLQRNdiVFQu9pGmkmGCApYRHcpeK88X%2FosrbdoMrbMNSMnsMGOqUBKkadXGAv1ygZKvreKGtyweaxK7sYAW0QTZFxR5lKQHV5UscwxDGNhiYnhAfWKtZeDlPWqJy%2BxFAIn8wHT1mSynHUgDcX%2FUb0A1%2FMQqxWWVEbU9bvrqhK6X91486b0q5EpRg7bz6bHWHwFtxnbDG%2BWYjYrCt1KxQB4c9zSGsLxFoSM8WMpPt0T35sUGo8ZK4f6izWDolaiXlYcldBmWt4PbvYAFXH&X-Amz-Signature=9681b18de6b205b19d94a2dbfadd9b4e9f9667e175ce3cc7465f41c869adb258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV6VHUAV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF79irHNRnEqMN1Fp9jTfluDUqSfBOVxzy9CcrrHMNRjAiEA8fsNpev59gd0adImoAtqNanwsUvQreH4Dy41%2FgyQLsUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJkeP17dD1U%2FxQrKhircA7vM367y64jHeyGCe0KTg3Rl3Um6AevS%2BckXwGBuZkZNV%2FCsCYNEufdR4czApFtyK3cahSsKVo09AkV7n3OuawgZEMyBFwQYjkai0wuGLOwfstf%2BcdVLSM64PJDsm4ABEGiWYCED%2BFJvuZJYvAPzQUnseHZn4pdhLwJEMOMRVM7QJgYAJnyM2qOxEGynkiMdKYdkKH8w6O%2Bu%2F94AFHndUYRFJ2IpPk1X%2Bx0IquyNsGjWNItw5gro3gRG0f%2BIdRiU909Nun1OJyMM89O9xNaow%2FGbh6vv%2B%2FwYxj3%2Bty9S7vOqP%2FPIxDkUg6MetIqVGJ7hkBxMgy%2FAoKy7JI1uHmJsViF4ultC3fNzS0e%2FHbz7jebk29FJ3WhCcHbxRWsG0d%2F%2BJ%2Bk0oa0hmjsvfYDm8raSYPKvZ6H0ifa2sHSzZTXZLVA8SssQUIG%2BoxDWnDxu91sN7Clrn81vgwHaiuWiyyRCdODJNt7N1SDSEWW9q2VOex4ef4sQ%2B1RO9RVlR25dMmxdfWHvNKoSJmxfoCNMq%2Ft8YVvobaO7%2F8C2C3fMmwNEYNwtPP3Sgz2ZlMhqYt0nQ2qTYT5hr7%2Fg7Wp4zCbpXQ%2BKLQRNdiVFQu9pGmkmGCApYRHcpeK88X%2FosrbdoMrbMNSMnsMGOqUBKkadXGAv1ygZKvreKGtyweaxK7sYAW0QTZFxR5lKQHV5UscwxDGNhiYnhAfWKtZeDlPWqJy%2BxFAIn8wHT1mSynHUgDcX%2FUb0A1%2FMQqxWWVEbU9bvrqhK6X91486b0q5EpRg7bz6bHWHwFtxnbDG%2BWYjYrCt1KxQB4c9zSGsLxFoSM8WMpPt0T35sUGo8ZK4f6izWDolaiXlYcldBmWt4PbvYAFXH&X-Amz-Signature=d9b4efcfde0ba1d8d1b173d57b1fd8c3b54f0e8d686110af3e8de70a6c61a319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV6VHUAV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF79irHNRnEqMN1Fp9jTfluDUqSfBOVxzy9CcrrHMNRjAiEA8fsNpev59gd0adImoAtqNanwsUvQreH4Dy41%2FgyQLsUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJkeP17dD1U%2FxQrKhircA7vM367y64jHeyGCe0KTg3Rl3Um6AevS%2BckXwGBuZkZNV%2FCsCYNEufdR4czApFtyK3cahSsKVo09AkV7n3OuawgZEMyBFwQYjkai0wuGLOwfstf%2BcdVLSM64PJDsm4ABEGiWYCED%2BFJvuZJYvAPzQUnseHZn4pdhLwJEMOMRVM7QJgYAJnyM2qOxEGynkiMdKYdkKH8w6O%2Bu%2F94AFHndUYRFJ2IpPk1X%2Bx0IquyNsGjWNItw5gro3gRG0f%2BIdRiU909Nun1OJyMM89O9xNaow%2FGbh6vv%2B%2FwYxj3%2Bty9S7vOqP%2FPIxDkUg6MetIqVGJ7hkBxMgy%2FAoKy7JI1uHmJsViF4ultC3fNzS0e%2FHbz7jebk29FJ3WhCcHbxRWsG0d%2F%2BJ%2Bk0oa0hmjsvfYDm8raSYPKvZ6H0ifa2sHSzZTXZLVA8SssQUIG%2BoxDWnDxu91sN7Clrn81vgwHaiuWiyyRCdODJNt7N1SDSEWW9q2VOex4ef4sQ%2B1RO9RVlR25dMmxdfWHvNKoSJmxfoCNMq%2Ft8YVvobaO7%2F8C2C3fMmwNEYNwtPP3Sgz2ZlMhqYt0nQ2qTYT5hr7%2Fg7Wp4zCbpXQ%2BKLQRNdiVFQu9pGmkmGCApYRHcpeK88X%2FosrbdoMrbMNSMnsMGOqUBKkadXGAv1ygZKvreKGtyweaxK7sYAW0QTZFxR5lKQHV5UscwxDGNhiYnhAfWKtZeDlPWqJy%2BxFAIn8wHT1mSynHUgDcX%2FUb0A1%2FMQqxWWVEbU9bvrqhK6X91486b0q5EpRg7bz6bHWHwFtxnbDG%2BWYjYrCt1KxQB4c9zSGsLxFoSM8WMpPt0T35sUGo8ZK4f6izWDolaiXlYcldBmWt4PbvYAFXH&X-Amz-Signature=2006420c646b75159b0b3e5cae262be299990b92cd65d764f29eb3392e0b62c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV6VHUAV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF79irHNRnEqMN1Fp9jTfluDUqSfBOVxzy9CcrrHMNRjAiEA8fsNpev59gd0adImoAtqNanwsUvQreH4Dy41%2FgyQLsUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJkeP17dD1U%2FxQrKhircA7vM367y64jHeyGCe0KTg3Rl3Um6AevS%2BckXwGBuZkZNV%2FCsCYNEufdR4czApFtyK3cahSsKVo09AkV7n3OuawgZEMyBFwQYjkai0wuGLOwfstf%2BcdVLSM64PJDsm4ABEGiWYCED%2BFJvuZJYvAPzQUnseHZn4pdhLwJEMOMRVM7QJgYAJnyM2qOxEGynkiMdKYdkKH8w6O%2Bu%2F94AFHndUYRFJ2IpPk1X%2Bx0IquyNsGjWNItw5gro3gRG0f%2BIdRiU909Nun1OJyMM89O9xNaow%2FGbh6vv%2B%2FwYxj3%2Bty9S7vOqP%2FPIxDkUg6MetIqVGJ7hkBxMgy%2FAoKy7JI1uHmJsViF4ultC3fNzS0e%2FHbz7jebk29FJ3WhCcHbxRWsG0d%2F%2BJ%2Bk0oa0hmjsvfYDm8raSYPKvZ6H0ifa2sHSzZTXZLVA8SssQUIG%2BoxDWnDxu91sN7Clrn81vgwHaiuWiyyRCdODJNt7N1SDSEWW9q2VOex4ef4sQ%2B1RO9RVlR25dMmxdfWHvNKoSJmxfoCNMq%2Ft8YVvobaO7%2F8C2C3fMmwNEYNwtPP3Sgz2ZlMhqYt0nQ2qTYT5hr7%2Fg7Wp4zCbpXQ%2BKLQRNdiVFQu9pGmkmGCApYRHcpeK88X%2FosrbdoMrbMNSMnsMGOqUBKkadXGAv1ygZKvreKGtyweaxK7sYAW0QTZFxR5lKQHV5UscwxDGNhiYnhAfWKtZeDlPWqJy%2BxFAIn8wHT1mSynHUgDcX%2FUb0A1%2FMQqxWWVEbU9bvrqhK6X91486b0q5EpRg7bz6bHWHwFtxnbDG%2BWYjYrCt1KxQB4c9zSGsLxFoSM8WMpPt0T35sUGo8ZK4f6izWDolaiXlYcldBmWt4PbvYAFXH&X-Amz-Signature=1ab2bb7c18929812f221ccf8f6dc88adb8f25a8dd393fcc92e4ec96783808ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV6VHUAV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF79irHNRnEqMN1Fp9jTfluDUqSfBOVxzy9CcrrHMNRjAiEA8fsNpev59gd0adImoAtqNanwsUvQreH4Dy41%2FgyQLsUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJkeP17dD1U%2FxQrKhircA7vM367y64jHeyGCe0KTg3Rl3Um6AevS%2BckXwGBuZkZNV%2FCsCYNEufdR4czApFtyK3cahSsKVo09AkV7n3OuawgZEMyBFwQYjkai0wuGLOwfstf%2BcdVLSM64PJDsm4ABEGiWYCED%2BFJvuZJYvAPzQUnseHZn4pdhLwJEMOMRVM7QJgYAJnyM2qOxEGynkiMdKYdkKH8w6O%2Bu%2F94AFHndUYRFJ2IpPk1X%2Bx0IquyNsGjWNItw5gro3gRG0f%2BIdRiU909Nun1OJyMM89O9xNaow%2FGbh6vv%2B%2FwYxj3%2Bty9S7vOqP%2FPIxDkUg6MetIqVGJ7hkBxMgy%2FAoKy7JI1uHmJsViF4ultC3fNzS0e%2FHbz7jebk29FJ3WhCcHbxRWsG0d%2F%2BJ%2Bk0oa0hmjsvfYDm8raSYPKvZ6H0ifa2sHSzZTXZLVA8SssQUIG%2BoxDWnDxu91sN7Clrn81vgwHaiuWiyyRCdODJNt7N1SDSEWW9q2VOex4ef4sQ%2B1RO9RVlR25dMmxdfWHvNKoSJmxfoCNMq%2Ft8YVvobaO7%2F8C2C3fMmwNEYNwtPP3Sgz2ZlMhqYt0nQ2qTYT5hr7%2Fg7Wp4zCbpXQ%2BKLQRNdiVFQu9pGmkmGCApYRHcpeK88X%2FosrbdoMrbMNSMnsMGOqUBKkadXGAv1ygZKvreKGtyweaxK7sYAW0QTZFxR5lKQHV5UscwxDGNhiYnhAfWKtZeDlPWqJy%2BxFAIn8wHT1mSynHUgDcX%2FUb0A1%2FMQqxWWVEbU9bvrqhK6X91486b0q5EpRg7bz6bHWHwFtxnbDG%2BWYjYrCt1KxQB4c9zSGsLxFoSM8WMpPt0T35sUGo8ZK4f6izWDolaiXlYcldBmWt4PbvYAFXH&X-Amz-Signature=3b8af0d14ee19f1292ef3e87162d0aba5181d7e9837ea53554818344003094c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
