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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DCPDTR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBu1PWb9QQfJu7%2BmYxvFNpeW%2FsgbYhOgaD9lQ3sNA74gAiAbwK0Gk6uFL102R4jV%2BKUDASaB7dyshTR%2BlcaTfsj72yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgdVJ0oZnrv5TYHpVKtwDvgDALH0ZglWhMXDM5FT7bI4An1fQ32b7xqPkllx2ElJt6LJ8ASM%2BLnN3FG8rMfMDi0SQ9bMhyfy3v%2F5%2BfSAFuNjzmnYMbrwprhrwqhJTx63pQW0qYKPLAQf4lCmFGt6P%2FZdmZI%2FKGuy2PrRaPyOBH4ICIzTgwdiOvLmpuHaSg0pmZh1wQ%2BPz%2FU%2Bx4j%2BqYY0curQgK6z0SUyxxtiI3tF0sXPsVp0hyJTZKa9KiBSkiIH60BxFPukOVKepnj69WjD6%2FGKK%2B1L7Kcw1kQkdPrVo9kbtyukjF9FWGGtTLjYdeEd3OdVHj6WUYtYoN70USyi1fpZgiCIQJaszp3ayY9pEj61ezKK1LQjED41ECgVihpBTHhhauEIdFk8coYa6kJJd3m30e9fq9BGr91VOZHCNQH4BLVk6TJlrPKOnmI9IL3LXj9KNjiF7sW2FgUQNUl9YXDgC44EsURtTKJPGxRWq2mB0cutgLD8gVb60gX8fT%2BFKOBuL%2Fz6sSt%2BUYOi74aM0PtcUAFXujYEq74YlnBEzvWww84P9666RRDOkTr5XXF5yY9F7%2FYYpR9Qr62729l0BJIR5tGjCyhq9fu4gwvZyE5n8fOwzhNuY1X17b9c2rcUQYvxAHnpjvGpIpfAw94iqwgY6pgFRfNj31s8ZsDzZ8p7ImXEWpF3Wj52ENIykn7OZgeZ7oib9YDshI0EFWud0%2FQpuGhu9l4dL4d0ke8ZyafhI1TQZiy0hAq%2BuinOwkALYJdVByIpc8NiLNWrKcNztsK006g5qRT%2BA2uh%2Bw%2B5fLOuKvVW3tMtFSO6AS278Ctogi9g4pN8R3g6rJVaTkoqL8HI4Ve4wcikSxyJfPzRi6GXf17729lSQY10S&X-Amz-Signature=812aac9f7aabc4ee19a65597e72662b875406316c35a0b434ca429faf405d1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DCPDTR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBu1PWb9QQfJu7%2BmYxvFNpeW%2FsgbYhOgaD9lQ3sNA74gAiAbwK0Gk6uFL102R4jV%2BKUDASaB7dyshTR%2BlcaTfsj72yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgdVJ0oZnrv5TYHpVKtwDvgDALH0ZglWhMXDM5FT7bI4An1fQ32b7xqPkllx2ElJt6LJ8ASM%2BLnN3FG8rMfMDi0SQ9bMhyfy3v%2F5%2BfSAFuNjzmnYMbrwprhrwqhJTx63pQW0qYKPLAQf4lCmFGt6P%2FZdmZI%2FKGuy2PrRaPyOBH4ICIzTgwdiOvLmpuHaSg0pmZh1wQ%2BPz%2FU%2Bx4j%2BqYY0curQgK6z0SUyxxtiI3tF0sXPsVp0hyJTZKa9KiBSkiIH60BxFPukOVKepnj69WjD6%2FGKK%2B1L7Kcw1kQkdPrVo9kbtyukjF9FWGGtTLjYdeEd3OdVHj6WUYtYoN70USyi1fpZgiCIQJaszp3ayY9pEj61ezKK1LQjED41ECgVihpBTHhhauEIdFk8coYa6kJJd3m30e9fq9BGr91VOZHCNQH4BLVk6TJlrPKOnmI9IL3LXj9KNjiF7sW2FgUQNUl9YXDgC44EsURtTKJPGxRWq2mB0cutgLD8gVb60gX8fT%2BFKOBuL%2Fz6sSt%2BUYOi74aM0PtcUAFXujYEq74YlnBEzvWww84P9666RRDOkTr5XXF5yY9F7%2FYYpR9Qr62729l0BJIR5tGjCyhq9fu4gwvZyE5n8fOwzhNuY1X17b9c2rcUQYvxAHnpjvGpIpfAw94iqwgY6pgFRfNj31s8ZsDzZ8p7ImXEWpF3Wj52ENIykn7OZgeZ7oib9YDshI0EFWud0%2FQpuGhu9l4dL4d0ke8ZyafhI1TQZiy0hAq%2BuinOwkALYJdVByIpc8NiLNWrKcNztsK006g5qRT%2BA2uh%2Bw%2B5fLOuKvVW3tMtFSO6AS278Ctogi9g4pN8R3g6rJVaTkoqL8HI4Ve4wcikSxyJfPzRi6GXf17729lSQY10S&X-Amz-Signature=52aa7403cabcc11960346757285dfea2b9f666a3868e98364229e43adcff5746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DCPDTR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBu1PWb9QQfJu7%2BmYxvFNpeW%2FsgbYhOgaD9lQ3sNA74gAiAbwK0Gk6uFL102R4jV%2BKUDASaB7dyshTR%2BlcaTfsj72yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgdVJ0oZnrv5TYHpVKtwDvgDALH0ZglWhMXDM5FT7bI4An1fQ32b7xqPkllx2ElJt6LJ8ASM%2BLnN3FG8rMfMDi0SQ9bMhyfy3v%2F5%2BfSAFuNjzmnYMbrwprhrwqhJTx63pQW0qYKPLAQf4lCmFGt6P%2FZdmZI%2FKGuy2PrRaPyOBH4ICIzTgwdiOvLmpuHaSg0pmZh1wQ%2BPz%2FU%2Bx4j%2BqYY0curQgK6z0SUyxxtiI3tF0sXPsVp0hyJTZKa9KiBSkiIH60BxFPukOVKepnj69WjD6%2FGKK%2B1L7Kcw1kQkdPrVo9kbtyukjF9FWGGtTLjYdeEd3OdVHj6WUYtYoN70USyi1fpZgiCIQJaszp3ayY9pEj61ezKK1LQjED41ECgVihpBTHhhauEIdFk8coYa6kJJd3m30e9fq9BGr91VOZHCNQH4BLVk6TJlrPKOnmI9IL3LXj9KNjiF7sW2FgUQNUl9YXDgC44EsURtTKJPGxRWq2mB0cutgLD8gVb60gX8fT%2BFKOBuL%2Fz6sSt%2BUYOi74aM0PtcUAFXujYEq74YlnBEzvWww84P9666RRDOkTr5XXF5yY9F7%2FYYpR9Qr62729l0BJIR5tGjCyhq9fu4gwvZyE5n8fOwzhNuY1X17b9c2rcUQYvxAHnpjvGpIpfAw94iqwgY6pgFRfNj31s8ZsDzZ8p7ImXEWpF3Wj52ENIykn7OZgeZ7oib9YDshI0EFWud0%2FQpuGhu9l4dL4d0ke8ZyafhI1TQZiy0hAq%2BuinOwkALYJdVByIpc8NiLNWrKcNztsK006g5qRT%2BA2uh%2Bw%2B5fLOuKvVW3tMtFSO6AS278Ctogi9g4pN8R3g6rJVaTkoqL8HI4Ve4wcikSxyJfPzRi6GXf17729lSQY10S&X-Amz-Signature=93aa96195b23973ccbbd850b5c64a780c473ed814c439626d663c91a809864fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DCPDTR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBu1PWb9QQfJu7%2BmYxvFNpeW%2FsgbYhOgaD9lQ3sNA74gAiAbwK0Gk6uFL102R4jV%2BKUDASaB7dyshTR%2BlcaTfsj72yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgdVJ0oZnrv5TYHpVKtwDvgDALH0ZglWhMXDM5FT7bI4An1fQ32b7xqPkllx2ElJt6LJ8ASM%2BLnN3FG8rMfMDi0SQ9bMhyfy3v%2F5%2BfSAFuNjzmnYMbrwprhrwqhJTx63pQW0qYKPLAQf4lCmFGt6P%2FZdmZI%2FKGuy2PrRaPyOBH4ICIzTgwdiOvLmpuHaSg0pmZh1wQ%2BPz%2FU%2Bx4j%2BqYY0curQgK6z0SUyxxtiI3tF0sXPsVp0hyJTZKa9KiBSkiIH60BxFPukOVKepnj69WjD6%2FGKK%2B1L7Kcw1kQkdPrVo9kbtyukjF9FWGGtTLjYdeEd3OdVHj6WUYtYoN70USyi1fpZgiCIQJaszp3ayY9pEj61ezKK1LQjED41ECgVihpBTHhhauEIdFk8coYa6kJJd3m30e9fq9BGr91VOZHCNQH4BLVk6TJlrPKOnmI9IL3LXj9KNjiF7sW2FgUQNUl9YXDgC44EsURtTKJPGxRWq2mB0cutgLD8gVb60gX8fT%2BFKOBuL%2Fz6sSt%2BUYOi74aM0PtcUAFXujYEq74YlnBEzvWww84P9666RRDOkTr5XXF5yY9F7%2FYYpR9Qr62729l0BJIR5tGjCyhq9fu4gwvZyE5n8fOwzhNuY1X17b9c2rcUQYvxAHnpjvGpIpfAw94iqwgY6pgFRfNj31s8ZsDzZ8p7ImXEWpF3Wj52ENIykn7OZgeZ7oib9YDshI0EFWud0%2FQpuGhu9l4dL4d0ke8ZyafhI1TQZiy0hAq%2BuinOwkALYJdVByIpc8NiLNWrKcNztsK006g5qRT%2BA2uh%2Bw%2B5fLOuKvVW3tMtFSO6AS278Ctogi9g4pN8R3g6rJVaTkoqL8HI4Ve4wcikSxyJfPzRi6GXf17729lSQY10S&X-Amz-Signature=ef462c514ac698d1cc79a622de921655527a411c11cce63e4b75f25784490dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DCPDTR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBu1PWb9QQfJu7%2BmYxvFNpeW%2FsgbYhOgaD9lQ3sNA74gAiAbwK0Gk6uFL102R4jV%2BKUDASaB7dyshTR%2BlcaTfsj72yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgdVJ0oZnrv5TYHpVKtwDvgDALH0ZglWhMXDM5FT7bI4An1fQ32b7xqPkllx2ElJt6LJ8ASM%2BLnN3FG8rMfMDi0SQ9bMhyfy3v%2F5%2BfSAFuNjzmnYMbrwprhrwqhJTx63pQW0qYKPLAQf4lCmFGt6P%2FZdmZI%2FKGuy2PrRaPyOBH4ICIzTgwdiOvLmpuHaSg0pmZh1wQ%2BPz%2FU%2Bx4j%2BqYY0curQgK6z0SUyxxtiI3tF0sXPsVp0hyJTZKa9KiBSkiIH60BxFPukOVKepnj69WjD6%2FGKK%2B1L7Kcw1kQkdPrVo9kbtyukjF9FWGGtTLjYdeEd3OdVHj6WUYtYoN70USyi1fpZgiCIQJaszp3ayY9pEj61ezKK1LQjED41ECgVihpBTHhhauEIdFk8coYa6kJJd3m30e9fq9BGr91VOZHCNQH4BLVk6TJlrPKOnmI9IL3LXj9KNjiF7sW2FgUQNUl9YXDgC44EsURtTKJPGxRWq2mB0cutgLD8gVb60gX8fT%2BFKOBuL%2Fz6sSt%2BUYOi74aM0PtcUAFXujYEq74YlnBEzvWww84P9666RRDOkTr5XXF5yY9F7%2FYYpR9Qr62729l0BJIR5tGjCyhq9fu4gwvZyE5n8fOwzhNuY1X17b9c2rcUQYvxAHnpjvGpIpfAw94iqwgY6pgFRfNj31s8ZsDzZ8p7ImXEWpF3Wj52ENIykn7OZgeZ7oib9YDshI0EFWud0%2FQpuGhu9l4dL4d0ke8ZyafhI1TQZiy0hAq%2BuinOwkALYJdVByIpc8NiLNWrKcNztsK006g5qRT%2BA2uh%2Bw%2B5fLOuKvVW3tMtFSO6AS278Ctogi9g4pN8R3g6rJVaTkoqL8HI4Ve4wcikSxyJfPzRi6GXf17729lSQY10S&X-Amz-Signature=b1996006f4e15514add1ad377a9a0b2f4224ea3283e95783866111e384d3febf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
