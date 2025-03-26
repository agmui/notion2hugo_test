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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIUU7IWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGHnd%2B5Wpaiq1rgRlSYe%2FSmN%2Ba27spc5t%2B6f359d8UQgIhAPAJ28hIDcE3yDnNYbQEo3FBKNn5am19fEN%2FTUWtgH4HKv8DCCkQABoMNjM3NDIzMTgzODA1IgxXMqtPrKNw7SuILDIq3AOTG9hM0PFb7FRLZ9a6B%2Fy7pZmkezrxRBackKaCxFlniDayA3scJvFLDcqwgSTp4od%2FSrTZzthdpecMECvTsu6OwhHnTDep8hY9eEpvYTDCeU5RsayFcEkaxUKFCW0DIDMdgamOeZOldYplmUg16UMNrFS9s9%2FGUjuWlBR5%2B1eJlkd4pDs4fr2Rtv4Nvh2qmoec7M%2FlGQaW0E9mc9ZXh8wqSYpAq3CrkwpL9ecfutDk8uhbtkJx%2F3sdp7%2B%2FOfBF%2FF73umv7z7K%2Fx6GGawvGrODc4p95AIf9FCNwvO6uepwlksWTidFEBDXpQwvW0SCLKkBh02RmEbkqAbvhxV0%2BDKyD88LREEwgZW3bLzKzjL0A7TTjTASFiWbK%2BiIKtGybUqR5CLOT%2FytnpZaeM%2Fbzrb1PbdPtlZbmHCpXU60OIMvXF7iDyTGqaJ6gA1FUfyBtBP0qXJU7G5dvODRhNkcnh18AAF4CEIdJpEBXXHriq0Xtt54jBRz2p5w6jPFMj6rdSTQWCXv7w1b56EkC9iWwxgYWc3b1pAvGiN48WKJjIMCn0aZiN1lOrjkCYLG2scmjbN62%2BNzCckg6yQ%2BLWPGj17Q3amfRq7BcrMHLQueHJc8wh%2B%2FcZ0TR3LC3QmTUUjCa7I6%2FBjqkAbpqAea%2BEg3G8vRuuBuD4e9UMwwCYYSWbF3%2B1xffO%2B4nwtdi1GrVc5%2FPXRITQYUmKIGi%2FVSYVNRwNw7d4sLLT1Ztud7O%2BA1fsEFZ7GtmOXHw23AmkqgRrHnYAvCqfTzLUMsQnCyUEQp2naabDDK83u5%2F3MgtJzWSdWIgC4SZA4VY%2B6VHkLBO4yrlH61P98lnU%2Fy%2FE8liPqVQuMdAtpbSDk%2FyYG9h&X-Amz-Signature=f7d3d034973492a6590d213b873d0b379cdafe8a2c428b5e47c8bbbd4847bc98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIUU7IWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGHnd%2B5Wpaiq1rgRlSYe%2FSmN%2Ba27spc5t%2B6f359d8UQgIhAPAJ28hIDcE3yDnNYbQEo3FBKNn5am19fEN%2FTUWtgH4HKv8DCCkQABoMNjM3NDIzMTgzODA1IgxXMqtPrKNw7SuILDIq3AOTG9hM0PFb7FRLZ9a6B%2Fy7pZmkezrxRBackKaCxFlniDayA3scJvFLDcqwgSTp4od%2FSrTZzthdpecMECvTsu6OwhHnTDep8hY9eEpvYTDCeU5RsayFcEkaxUKFCW0DIDMdgamOeZOldYplmUg16UMNrFS9s9%2FGUjuWlBR5%2B1eJlkd4pDs4fr2Rtv4Nvh2qmoec7M%2FlGQaW0E9mc9ZXh8wqSYpAq3CrkwpL9ecfutDk8uhbtkJx%2F3sdp7%2B%2FOfBF%2FF73umv7z7K%2Fx6GGawvGrODc4p95AIf9FCNwvO6uepwlksWTidFEBDXpQwvW0SCLKkBh02RmEbkqAbvhxV0%2BDKyD88LREEwgZW3bLzKzjL0A7TTjTASFiWbK%2BiIKtGybUqR5CLOT%2FytnpZaeM%2Fbzrb1PbdPtlZbmHCpXU60OIMvXF7iDyTGqaJ6gA1FUfyBtBP0qXJU7G5dvODRhNkcnh18AAF4CEIdJpEBXXHriq0Xtt54jBRz2p5w6jPFMj6rdSTQWCXv7w1b56EkC9iWwxgYWc3b1pAvGiN48WKJjIMCn0aZiN1lOrjkCYLG2scmjbN62%2BNzCckg6yQ%2BLWPGj17Q3amfRq7BcrMHLQueHJc8wh%2B%2FcZ0TR3LC3QmTUUjCa7I6%2FBjqkAbpqAea%2BEg3G8vRuuBuD4e9UMwwCYYSWbF3%2B1xffO%2B4nwtdi1GrVc5%2FPXRITQYUmKIGi%2FVSYVNRwNw7d4sLLT1Ztud7O%2BA1fsEFZ7GtmOXHw23AmkqgRrHnYAvCqfTzLUMsQnCyUEQp2naabDDK83u5%2F3MgtJzWSdWIgC4SZA4VY%2B6VHkLBO4yrlH61P98lnU%2Fy%2FE8liPqVQuMdAtpbSDk%2FyYG9h&X-Amz-Signature=245fdc467242eb6b2786bf5e0e8a4b40361b9da9bf173c4713304b6d143e4582&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIUU7IWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGHnd%2B5Wpaiq1rgRlSYe%2FSmN%2Ba27spc5t%2B6f359d8UQgIhAPAJ28hIDcE3yDnNYbQEo3FBKNn5am19fEN%2FTUWtgH4HKv8DCCkQABoMNjM3NDIzMTgzODA1IgxXMqtPrKNw7SuILDIq3AOTG9hM0PFb7FRLZ9a6B%2Fy7pZmkezrxRBackKaCxFlniDayA3scJvFLDcqwgSTp4od%2FSrTZzthdpecMECvTsu6OwhHnTDep8hY9eEpvYTDCeU5RsayFcEkaxUKFCW0DIDMdgamOeZOldYplmUg16UMNrFS9s9%2FGUjuWlBR5%2B1eJlkd4pDs4fr2Rtv4Nvh2qmoec7M%2FlGQaW0E9mc9ZXh8wqSYpAq3CrkwpL9ecfutDk8uhbtkJx%2F3sdp7%2B%2FOfBF%2FF73umv7z7K%2Fx6GGawvGrODc4p95AIf9FCNwvO6uepwlksWTidFEBDXpQwvW0SCLKkBh02RmEbkqAbvhxV0%2BDKyD88LREEwgZW3bLzKzjL0A7TTjTASFiWbK%2BiIKtGybUqR5CLOT%2FytnpZaeM%2Fbzrb1PbdPtlZbmHCpXU60OIMvXF7iDyTGqaJ6gA1FUfyBtBP0qXJU7G5dvODRhNkcnh18AAF4CEIdJpEBXXHriq0Xtt54jBRz2p5w6jPFMj6rdSTQWCXv7w1b56EkC9iWwxgYWc3b1pAvGiN48WKJjIMCn0aZiN1lOrjkCYLG2scmjbN62%2BNzCckg6yQ%2BLWPGj17Q3amfRq7BcrMHLQueHJc8wh%2B%2FcZ0TR3LC3QmTUUjCa7I6%2FBjqkAbpqAea%2BEg3G8vRuuBuD4e9UMwwCYYSWbF3%2B1xffO%2B4nwtdi1GrVc5%2FPXRITQYUmKIGi%2FVSYVNRwNw7d4sLLT1Ztud7O%2BA1fsEFZ7GtmOXHw23AmkqgRrHnYAvCqfTzLUMsQnCyUEQp2naabDDK83u5%2F3MgtJzWSdWIgC4SZA4VY%2B6VHkLBO4yrlH61P98lnU%2Fy%2FE8liPqVQuMdAtpbSDk%2FyYG9h&X-Amz-Signature=080ef9b3ca6a42b563a45fa4911716537e00d07042311ceabad59272933950fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIUU7IWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGHnd%2B5Wpaiq1rgRlSYe%2FSmN%2Ba27spc5t%2B6f359d8UQgIhAPAJ28hIDcE3yDnNYbQEo3FBKNn5am19fEN%2FTUWtgH4HKv8DCCkQABoMNjM3NDIzMTgzODA1IgxXMqtPrKNw7SuILDIq3AOTG9hM0PFb7FRLZ9a6B%2Fy7pZmkezrxRBackKaCxFlniDayA3scJvFLDcqwgSTp4od%2FSrTZzthdpecMECvTsu6OwhHnTDep8hY9eEpvYTDCeU5RsayFcEkaxUKFCW0DIDMdgamOeZOldYplmUg16UMNrFS9s9%2FGUjuWlBR5%2B1eJlkd4pDs4fr2Rtv4Nvh2qmoec7M%2FlGQaW0E9mc9ZXh8wqSYpAq3CrkwpL9ecfutDk8uhbtkJx%2F3sdp7%2B%2FOfBF%2FF73umv7z7K%2Fx6GGawvGrODc4p95AIf9FCNwvO6uepwlksWTidFEBDXpQwvW0SCLKkBh02RmEbkqAbvhxV0%2BDKyD88LREEwgZW3bLzKzjL0A7TTjTASFiWbK%2BiIKtGybUqR5CLOT%2FytnpZaeM%2Fbzrb1PbdPtlZbmHCpXU60OIMvXF7iDyTGqaJ6gA1FUfyBtBP0qXJU7G5dvODRhNkcnh18AAF4CEIdJpEBXXHriq0Xtt54jBRz2p5w6jPFMj6rdSTQWCXv7w1b56EkC9iWwxgYWc3b1pAvGiN48WKJjIMCn0aZiN1lOrjkCYLG2scmjbN62%2BNzCckg6yQ%2BLWPGj17Q3amfRq7BcrMHLQueHJc8wh%2B%2FcZ0TR3LC3QmTUUjCa7I6%2FBjqkAbpqAea%2BEg3G8vRuuBuD4e9UMwwCYYSWbF3%2B1xffO%2B4nwtdi1GrVc5%2FPXRITQYUmKIGi%2FVSYVNRwNw7d4sLLT1Ztud7O%2BA1fsEFZ7GtmOXHw23AmkqgRrHnYAvCqfTzLUMsQnCyUEQp2naabDDK83u5%2F3MgtJzWSdWIgC4SZA4VY%2B6VHkLBO4yrlH61P98lnU%2Fy%2FE8liPqVQuMdAtpbSDk%2FyYG9h&X-Amz-Signature=14945553596a1870001e5fda995c4839e8dfbf4592a6b1ec02850202005f1985&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIUU7IWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGHnd%2B5Wpaiq1rgRlSYe%2FSmN%2Ba27spc5t%2B6f359d8UQgIhAPAJ28hIDcE3yDnNYbQEo3FBKNn5am19fEN%2FTUWtgH4HKv8DCCkQABoMNjM3NDIzMTgzODA1IgxXMqtPrKNw7SuILDIq3AOTG9hM0PFb7FRLZ9a6B%2Fy7pZmkezrxRBackKaCxFlniDayA3scJvFLDcqwgSTp4od%2FSrTZzthdpecMECvTsu6OwhHnTDep8hY9eEpvYTDCeU5RsayFcEkaxUKFCW0DIDMdgamOeZOldYplmUg16UMNrFS9s9%2FGUjuWlBR5%2B1eJlkd4pDs4fr2Rtv4Nvh2qmoec7M%2FlGQaW0E9mc9ZXh8wqSYpAq3CrkwpL9ecfutDk8uhbtkJx%2F3sdp7%2B%2FOfBF%2FF73umv7z7K%2Fx6GGawvGrODc4p95AIf9FCNwvO6uepwlksWTidFEBDXpQwvW0SCLKkBh02RmEbkqAbvhxV0%2BDKyD88LREEwgZW3bLzKzjL0A7TTjTASFiWbK%2BiIKtGybUqR5CLOT%2FytnpZaeM%2Fbzrb1PbdPtlZbmHCpXU60OIMvXF7iDyTGqaJ6gA1FUfyBtBP0qXJU7G5dvODRhNkcnh18AAF4CEIdJpEBXXHriq0Xtt54jBRz2p5w6jPFMj6rdSTQWCXv7w1b56EkC9iWwxgYWc3b1pAvGiN48WKJjIMCn0aZiN1lOrjkCYLG2scmjbN62%2BNzCckg6yQ%2BLWPGj17Q3amfRq7BcrMHLQueHJc8wh%2B%2FcZ0TR3LC3QmTUUjCa7I6%2FBjqkAbpqAea%2BEg3G8vRuuBuD4e9UMwwCYYSWbF3%2B1xffO%2B4nwtdi1GrVc5%2FPXRITQYUmKIGi%2FVSYVNRwNw7d4sLLT1Ztud7O%2BA1fsEFZ7GtmOXHw23AmkqgRrHnYAvCqfTzLUMsQnCyUEQp2naabDDK83u5%2F3MgtJzWSdWIgC4SZA4VY%2B6VHkLBO4yrlH61P98lnU%2Fy%2FE8liPqVQuMdAtpbSDk%2FyYG9h&X-Amz-Signature=43561f0da914a447fc1b8d097c54d67028619e5c2dd855a9df3246adc86040c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
