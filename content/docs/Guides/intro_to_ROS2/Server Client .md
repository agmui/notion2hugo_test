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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WBJ4SMM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8fVYlwEu0NPGsAap%2BD7x5y2wEq6PWhY89A1IYiwaAvAiAr3M7M3c7SFTVPJSuHzCIR2t7pwx6RpS35OliXiJVrnyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMg6NKyDWBqz6KNWKtwD8CYbfu4t03M0sOaNk1%2Bn5xomGoS%2FlrQSfRCCEzfXSOUhB7nJorpaNk%2Bc8upi9H0DbHiYuuFPexia%2FI16AaddVVOHcVPsQgUlNCbw2gMfx4RzKARSON%2BFc%2FKk7ee319LXDV25uoLCEIsnxBoV1dLC7f7HJPDYe0gRYM4tRpUTx2AZBkv9VaHIM%2FSN9Qqooo9I3sIWlaIYN2GU70DtQAEFseTLEocPRaCl%2BioMgdLxugA%2FZJsPjNkSakkY%2FjdeAEicRu%2FFV3KmcIeGl46er429KrfKlp1Mzude7yTk5B4ZIx%2FWmSHxGavxXZqU1NZVtfHOXrVf7hcy3YACYmwnXO7%2Fv2u6eauX77oFa3ytL5o7tTHdIIB1Eg69DVy53j6klpXk%2FdXcvni3fr8HbR67GhCSOmj4MwSQNjL6wvPEZvmGdwOZwAWkkLaXKLNj18NzniOpSlOZTH%2Fje4v70zzOOXdqrfdiqfaf1uz1qA%2F0Ub%2FZfOAXJvqcD2LK%2FHUpbauRnEcil7DtEtF6Syjr3fi7ZlyDJiYkqLqxEBGKbMceRa5Jan3cgQH0VFUPtAu8c8gPy1A1oOkjBKokaNreCWI6yPIqkq2WeghqyD6%2BTpPCiT66UeP2aaOZpjqqKOyvGsgw8o%2F%2FwgY6pgEFhdkUrdG0WK1%2BNKIrvoFU9nvALEyZbxSEwXFu2UZ09JDoxg9Etd%2BULgHAP3BBaeWgoHk4aNuMe3YXUA%2BMwNhke4cxILhZ9rrzJ5eWi9noT3P%2BabddPgQflsAEbAmeQOzS6ovSWvmf6bxLrUXK%2B6SNLIdlEsEzHL2OYZmEzNBnbKLuMcaw4OCbTPp6N9dcBlIXctE9qQodoVlCZ1RuyRvCn5sb%2Fo2d&X-Amz-Signature=ef4c6f8a4ba3cf86ff97ce2f2526766204688ad24c2b8b6c89bb605b68266ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WBJ4SMM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8fVYlwEu0NPGsAap%2BD7x5y2wEq6PWhY89A1IYiwaAvAiAr3M7M3c7SFTVPJSuHzCIR2t7pwx6RpS35OliXiJVrnyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMg6NKyDWBqz6KNWKtwD8CYbfu4t03M0sOaNk1%2Bn5xomGoS%2FlrQSfRCCEzfXSOUhB7nJorpaNk%2Bc8upi9H0DbHiYuuFPexia%2FI16AaddVVOHcVPsQgUlNCbw2gMfx4RzKARSON%2BFc%2FKk7ee319LXDV25uoLCEIsnxBoV1dLC7f7HJPDYe0gRYM4tRpUTx2AZBkv9VaHIM%2FSN9Qqooo9I3sIWlaIYN2GU70DtQAEFseTLEocPRaCl%2BioMgdLxugA%2FZJsPjNkSakkY%2FjdeAEicRu%2FFV3KmcIeGl46er429KrfKlp1Mzude7yTk5B4ZIx%2FWmSHxGavxXZqU1NZVtfHOXrVf7hcy3YACYmwnXO7%2Fv2u6eauX77oFa3ytL5o7tTHdIIB1Eg69DVy53j6klpXk%2FdXcvni3fr8HbR67GhCSOmj4MwSQNjL6wvPEZvmGdwOZwAWkkLaXKLNj18NzniOpSlOZTH%2Fje4v70zzOOXdqrfdiqfaf1uz1qA%2F0Ub%2FZfOAXJvqcD2LK%2FHUpbauRnEcil7DtEtF6Syjr3fi7ZlyDJiYkqLqxEBGKbMceRa5Jan3cgQH0VFUPtAu8c8gPy1A1oOkjBKokaNreCWI6yPIqkq2WeghqyD6%2BTpPCiT66UeP2aaOZpjqqKOyvGsgw8o%2F%2FwgY6pgEFhdkUrdG0WK1%2BNKIrvoFU9nvALEyZbxSEwXFu2UZ09JDoxg9Etd%2BULgHAP3BBaeWgoHk4aNuMe3YXUA%2BMwNhke4cxILhZ9rrzJ5eWi9noT3P%2BabddPgQflsAEbAmeQOzS6ovSWvmf6bxLrUXK%2B6SNLIdlEsEzHL2OYZmEzNBnbKLuMcaw4OCbTPp6N9dcBlIXctE9qQodoVlCZ1RuyRvCn5sb%2Fo2d&X-Amz-Signature=fe65d51602b7f0086d9696eb0ff71b14844e234b1354781ec5b49278c8b09986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WBJ4SMM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8fVYlwEu0NPGsAap%2BD7x5y2wEq6PWhY89A1IYiwaAvAiAr3M7M3c7SFTVPJSuHzCIR2t7pwx6RpS35OliXiJVrnyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMg6NKyDWBqz6KNWKtwD8CYbfu4t03M0sOaNk1%2Bn5xomGoS%2FlrQSfRCCEzfXSOUhB7nJorpaNk%2Bc8upi9H0DbHiYuuFPexia%2FI16AaddVVOHcVPsQgUlNCbw2gMfx4RzKARSON%2BFc%2FKk7ee319LXDV25uoLCEIsnxBoV1dLC7f7HJPDYe0gRYM4tRpUTx2AZBkv9VaHIM%2FSN9Qqooo9I3sIWlaIYN2GU70DtQAEFseTLEocPRaCl%2BioMgdLxugA%2FZJsPjNkSakkY%2FjdeAEicRu%2FFV3KmcIeGl46er429KrfKlp1Mzude7yTk5B4ZIx%2FWmSHxGavxXZqU1NZVtfHOXrVf7hcy3YACYmwnXO7%2Fv2u6eauX77oFa3ytL5o7tTHdIIB1Eg69DVy53j6klpXk%2FdXcvni3fr8HbR67GhCSOmj4MwSQNjL6wvPEZvmGdwOZwAWkkLaXKLNj18NzniOpSlOZTH%2Fje4v70zzOOXdqrfdiqfaf1uz1qA%2F0Ub%2FZfOAXJvqcD2LK%2FHUpbauRnEcil7DtEtF6Syjr3fi7ZlyDJiYkqLqxEBGKbMceRa5Jan3cgQH0VFUPtAu8c8gPy1A1oOkjBKokaNreCWI6yPIqkq2WeghqyD6%2BTpPCiT66UeP2aaOZpjqqKOyvGsgw8o%2F%2FwgY6pgEFhdkUrdG0WK1%2BNKIrvoFU9nvALEyZbxSEwXFu2UZ09JDoxg9Etd%2BULgHAP3BBaeWgoHk4aNuMe3YXUA%2BMwNhke4cxILhZ9rrzJ5eWi9noT3P%2BabddPgQflsAEbAmeQOzS6ovSWvmf6bxLrUXK%2B6SNLIdlEsEzHL2OYZmEzNBnbKLuMcaw4OCbTPp6N9dcBlIXctE9qQodoVlCZ1RuyRvCn5sb%2Fo2d&X-Amz-Signature=48e028967c5ed554c1cec864f788161f7e054b5470a0263b1bb845e98cafae0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WBJ4SMM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8fVYlwEu0NPGsAap%2BD7x5y2wEq6PWhY89A1IYiwaAvAiAr3M7M3c7SFTVPJSuHzCIR2t7pwx6RpS35OliXiJVrnyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMg6NKyDWBqz6KNWKtwD8CYbfu4t03M0sOaNk1%2Bn5xomGoS%2FlrQSfRCCEzfXSOUhB7nJorpaNk%2Bc8upi9H0DbHiYuuFPexia%2FI16AaddVVOHcVPsQgUlNCbw2gMfx4RzKARSON%2BFc%2FKk7ee319LXDV25uoLCEIsnxBoV1dLC7f7HJPDYe0gRYM4tRpUTx2AZBkv9VaHIM%2FSN9Qqooo9I3sIWlaIYN2GU70DtQAEFseTLEocPRaCl%2BioMgdLxugA%2FZJsPjNkSakkY%2FjdeAEicRu%2FFV3KmcIeGl46er429KrfKlp1Mzude7yTk5B4ZIx%2FWmSHxGavxXZqU1NZVtfHOXrVf7hcy3YACYmwnXO7%2Fv2u6eauX77oFa3ytL5o7tTHdIIB1Eg69DVy53j6klpXk%2FdXcvni3fr8HbR67GhCSOmj4MwSQNjL6wvPEZvmGdwOZwAWkkLaXKLNj18NzniOpSlOZTH%2Fje4v70zzOOXdqrfdiqfaf1uz1qA%2F0Ub%2FZfOAXJvqcD2LK%2FHUpbauRnEcil7DtEtF6Syjr3fi7ZlyDJiYkqLqxEBGKbMceRa5Jan3cgQH0VFUPtAu8c8gPy1A1oOkjBKokaNreCWI6yPIqkq2WeghqyD6%2BTpPCiT66UeP2aaOZpjqqKOyvGsgw8o%2F%2FwgY6pgEFhdkUrdG0WK1%2BNKIrvoFU9nvALEyZbxSEwXFu2UZ09JDoxg9Etd%2BULgHAP3BBaeWgoHk4aNuMe3YXUA%2BMwNhke4cxILhZ9rrzJ5eWi9noT3P%2BabddPgQflsAEbAmeQOzS6ovSWvmf6bxLrUXK%2B6SNLIdlEsEzHL2OYZmEzNBnbKLuMcaw4OCbTPp6N9dcBlIXctE9qQodoVlCZ1RuyRvCn5sb%2Fo2d&X-Amz-Signature=3fc87a4933f82c56fc274a5c007744937f4a2c27fd43caad5747a7680afa713b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WBJ4SMM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8fVYlwEu0NPGsAap%2BD7x5y2wEq6PWhY89A1IYiwaAvAiAr3M7M3c7SFTVPJSuHzCIR2t7pwx6RpS35OliXiJVrnyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMg6NKyDWBqz6KNWKtwD8CYbfu4t03M0sOaNk1%2Bn5xomGoS%2FlrQSfRCCEzfXSOUhB7nJorpaNk%2Bc8upi9H0DbHiYuuFPexia%2FI16AaddVVOHcVPsQgUlNCbw2gMfx4RzKARSON%2BFc%2FKk7ee319LXDV25uoLCEIsnxBoV1dLC7f7HJPDYe0gRYM4tRpUTx2AZBkv9VaHIM%2FSN9Qqooo9I3sIWlaIYN2GU70DtQAEFseTLEocPRaCl%2BioMgdLxugA%2FZJsPjNkSakkY%2FjdeAEicRu%2FFV3KmcIeGl46er429KrfKlp1Mzude7yTk5B4ZIx%2FWmSHxGavxXZqU1NZVtfHOXrVf7hcy3YACYmwnXO7%2Fv2u6eauX77oFa3ytL5o7tTHdIIB1Eg69DVy53j6klpXk%2FdXcvni3fr8HbR67GhCSOmj4MwSQNjL6wvPEZvmGdwOZwAWkkLaXKLNj18NzniOpSlOZTH%2Fje4v70zzOOXdqrfdiqfaf1uz1qA%2F0Ub%2FZfOAXJvqcD2LK%2FHUpbauRnEcil7DtEtF6Syjr3fi7ZlyDJiYkqLqxEBGKbMceRa5Jan3cgQH0VFUPtAu8c8gPy1A1oOkjBKokaNreCWI6yPIqkq2WeghqyD6%2BTpPCiT66UeP2aaOZpjqqKOyvGsgw8o%2F%2FwgY6pgEFhdkUrdG0WK1%2BNKIrvoFU9nvALEyZbxSEwXFu2UZ09JDoxg9Etd%2BULgHAP3BBaeWgoHk4aNuMe3YXUA%2BMwNhke4cxILhZ9rrzJ5eWi9noT3P%2BabddPgQflsAEbAmeQOzS6ovSWvmf6bxLrUXK%2B6SNLIdlEsEzHL2OYZmEzNBnbKLuMcaw4OCbTPp6N9dcBlIXctE9qQodoVlCZ1RuyRvCn5sb%2Fo2d&X-Amz-Signature=65a0c4eb041600bdf0db41a86cd673c021d35e7721d00ddf7b2adc28d7715534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
