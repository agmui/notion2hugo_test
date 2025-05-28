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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42OEHZW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVXW%2FjM3ZnsgQqOmDrg3RsU4PEg%2BNOTbYm2nKX0yEt%2BAIhAJXSQPAOAX3tK1MchSsZ7GnrC9kqljAteZ8WIupxERtXKv8DCHoQABoMNjM3NDIzMTgzODA1Igwyke1VaLYNNyqMf24q3APcrlRljTRGICX7tUyWsqf%2FqbEPc67tj%2FSYvz5S1VwVdbfu3kGvpnT0MkFFVxRwLn%2FX6GSXfchZBn0cBgaql6v5CygO32lQqQztRKWZ9q6sslXBHqhMv2iG9TAw4%2FBeec0IX3zJ1Lw%2BjzerNBMuiZD50tPKCasZp6pj9rFUWYaTVZ9BJCnMpygJdiMlRxli3FY6%2F7vVlOQCjHWCHf3fi9dPTKodtxCpQAhr9i8bLLkJqe2H0W%2ByELgpsQHgdy605HBBI5ZsNypad1JyjNt6kHWM2k9LofuBX3Gzu2ACBt3oV%2BjaUyrB1ZE0TESvVCOGTphfSBqDpyDeR9G6yidmmPaYoA0k4uh%2BKoLviLX1wdSEXn4cURWGrV%2BD98J3SB9cnoHB70WXlR7SAkJMvo%2BnXCEC3JZrQk6TCy6M516LqT1QNmACLzRJs22r6f2mEicUdLo8YyDti7RC06vQHSASH1uRA4mjR7m7haogG%2BnUH6Ci%2FxJbAjhVV1wWkqrT5qBC6O2TtYBGvwqNxP37WzvCgeDI4jCJA46KVGRx9AmNv8cUi5QGA1IxYh%2F1m9V2oSIEkQ1AINrkr7JZdm4wiE3fnqQpBgyYdTOUJmhwJCYBN9%2FJhzY1ckz%2FVSqwMVLAjDCj%2BNzBBjqkAYtudnZqXU%2BltrfrZNs08SQ17gBZ0MlmIOcs%2FaS8yVvCE0uOb04N7Ii69C0JbNXhB49VvwNPD2xQsZcDv2r6VYRyNH9OEpyg7M8zQiVPY77zd9cMIz43xRjmGZrNFi4cNAuHMv%2B37F3C58suoRWEWORw8W9AYhzrRfn3%2BnFXVvQzKGeW6%2Bm8Cw%2BmHUPge%2BZYNbhnxtuYq4B08X6TDU8NWgKwyD53&X-Amz-Signature=178a9fc8d2dea9c452a57bcedbd14548682106484a41eafbcadad4bd50a2273e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42OEHZW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVXW%2FjM3ZnsgQqOmDrg3RsU4PEg%2BNOTbYm2nKX0yEt%2BAIhAJXSQPAOAX3tK1MchSsZ7GnrC9kqljAteZ8WIupxERtXKv8DCHoQABoMNjM3NDIzMTgzODA1Igwyke1VaLYNNyqMf24q3APcrlRljTRGICX7tUyWsqf%2FqbEPc67tj%2FSYvz5S1VwVdbfu3kGvpnT0MkFFVxRwLn%2FX6GSXfchZBn0cBgaql6v5CygO32lQqQztRKWZ9q6sslXBHqhMv2iG9TAw4%2FBeec0IX3zJ1Lw%2BjzerNBMuiZD50tPKCasZp6pj9rFUWYaTVZ9BJCnMpygJdiMlRxli3FY6%2F7vVlOQCjHWCHf3fi9dPTKodtxCpQAhr9i8bLLkJqe2H0W%2ByELgpsQHgdy605HBBI5ZsNypad1JyjNt6kHWM2k9LofuBX3Gzu2ACBt3oV%2BjaUyrB1ZE0TESvVCOGTphfSBqDpyDeR9G6yidmmPaYoA0k4uh%2BKoLviLX1wdSEXn4cURWGrV%2BD98J3SB9cnoHB70WXlR7SAkJMvo%2BnXCEC3JZrQk6TCy6M516LqT1QNmACLzRJs22r6f2mEicUdLo8YyDti7RC06vQHSASH1uRA4mjR7m7haogG%2BnUH6Ci%2FxJbAjhVV1wWkqrT5qBC6O2TtYBGvwqNxP37WzvCgeDI4jCJA46KVGRx9AmNv8cUi5QGA1IxYh%2F1m9V2oSIEkQ1AINrkr7JZdm4wiE3fnqQpBgyYdTOUJmhwJCYBN9%2FJhzY1ckz%2FVSqwMVLAjDCj%2BNzBBjqkAYtudnZqXU%2BltrfrZNs08SQ17gBZ0MlmIOcs%2FaS8yVvCE0uOb04N7Ii69C0JbNXhB49VvwNPD2xQsZcDv2r6VYRyNH9OEpyg7M8zQiVPY77zd9cMIz43xRjmGZrNFi4cNAuHMv%2B37F3C58suoRWEWORw8W9AYhzrRfn3%2BnFXVvQzKGeW6%2Bm8Cw%2BmHUPge%2BZYNbhnxtuYq4B08X6TDU8NWgKwyD53&X-Amz-Signature=b8e54212a849cf07a1f5cc84b6861fa027bf9b162543cb09af5ded2e416ab5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42OEHZW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVXW%2FjM3ZnsgQqOmDrg3RsU4PEg%2BNOTbYm2nKX0yEt%2BAIhAJXSQPAOAX3tK1MchSsZ7GnrC9kqljAteZ8WIupxERtXKv8DCHoQABoMNjM3NDIzMTgzODA1Igwyke1VaLYNNyqMf24q3APcrlRljTRGICX7tUyWsqf%2FqbEPc67tj%2FSYvz5S1VwVdbfu3kGvpnT0MkFFVxRwLn%2FX6GSXfchZBn0cBgaql6v5CygO32lQqQztRKWZ9q6sslXBHqhMv2iG9TAw4%2FBeec0IX3zJ1Lw%2BjzerNBMuiZD50tPKCasZp6pj9rFUWYaTVZ9BJCnMpygJdiMlRxli3FY6%2F7vVlOQCjHWCHf3fi9dPTKodtxCpQAhr9i8bLLkJqe2H0W%2ByELgpsQHgdy605HBBI5ZsNypad1JyjNt6kHWM2k9LofuBX3Gzu2ACBt3oV%2BjaUyrB1ZE0TESvVCOGTphfSBqDpyDeR9G6yidmmPaYoA0k4uh%2BKoLviLX1wdSEXn4cURWGrV%2BD98J3SB9cnoHB70WXlR7SAkJMvo%2BnXCEC3JZrQk6TCy6M516LqT1QNmACLzRJs22r6f2mEicUdLo8YyDti7RC06vQHSASH1uRA4mjR7m7haogG%2BnUH6Ci%2FxJbAjhVV1wWkqrT5qBC6O2TtYBGvwqNxP37WzvCgeDI4jCJA46KVGRx9AmNv8cUi5QGA1IxYh%2F1m9V2oSIEkQ1AINrkr7JZdm4wiE3fnqQpBgyYdTOUJmhwJCYBN9%2FJhzY1ckz%2FVSqwMVLAjDCj%2BNzBBjqkAYtudnZqXU%2BltrfrZNs08SQ17gBZ0MlmIOcs%2FaS8yVvCE0uOb04N7Ii69C0JbNXhB49VvwNPD2xQsZcDv2r6VYRyNH9OEpyg7M8zQiVPY77zd9cMIz43xRjmGZrNFi4cNAuHMv%2B37F3C58suoRWEWORw8W9AYhzrRfn3%2BnFXVvQzKGeW6%2Bm8Cw%2BmHUPge%2BZYNbhnxtuYq4B08X6TDU8NWgKwyD53&X-Amz-Signature=ab604c19f110285d1fdcd7f8342026f85e52430b5164760cda4756b89590e703&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42OEHZW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVXW%2FjM3ZnsgQqOmDrg3RsU4PEg%2BNOTbYm2nKX0yEt%2BAIhAJXSQPAOAX3tK1MchSsZ7GnrC9kqljAteZ8WIupxERtXKv8DCHoQABoMNjM3NDIzMTgzODA1Igwyke1VaLYNNyqMf24q3APcrlRljTRGICX7tUyWsqf%2FqbEPc67tj%2FSYvz5S1VwVdbfu3kGvpnT0MkFFVxRwLn%2FX6GSXfchZBn0cBgaql6v5CygO32lQqQztRKWZ9q6sslXBHqhMv2iG9TAw4%2FBeec0IX3zJ1Lw%2BjzerNBMuiZD50tPKCasZp6pj9rFUWYaTVZ9BJCnMpygJdiMlRxli3FY6%2F7vVlOQCjHWCHf3fi9dPTKodtxCpQAhr9i8bLLkJqe2H0W%2ByELgpsQHgdy605HBBI5ZsNypad1JyjNt6kHWM2k9LofuBX3Gzu2ACBt3oV%2BjaUyrB1ZE0TESvVCOGTphfSBqDpyDeR9G6yidmmPaYoA0k4uh%2BKoLviLX1wdSEXn4cURWGrV%2BD98J3SB9cnoHB70WXlR7SAkJMvo%2BnXCEC3JZrQk6TCy6M516LqT1QNmACLzRJs22r6f2mEicUdLo8YyDti7RC06vQHSASH1uRA4mjR7m7haogG%2BnUH6Ci%2FxJbAjhVV1wWkqrT5qBC6O2TtYBGvwqNxP37WzvCgeDI4jCJA46KVGRx9AmNv8cUi5QGA1IxYh%2F1m9V2oSIEkQ1AINrkr7JZdm4wiE3fnqQpBgyYdTOUJmhwJCYBN9%2FJhzY1ckz%2FVSqwMVLAjDCj%2BNzBBjqkAYtudnZqXU%2BltrfrZNs08SQ17gBZ0MlmIOcs%2FaS8yVvCE0uOb04N7Ii69C0JbNXhB49VvwNPD2xQsZcDv2r6VYRyNH9OEpyg7M8zQiVPY77zd9cMIz43xRjmGZrNFi4cNAuHMv%2B37F3C58suoRWEWORw8W9AYhzrRfn3%2BnFXVvQzKGeW6%2Bm8Cw%2BmHUPge%2BZYNbhnxtuYq4B08X6TDU8NWgKwyD53&X-Amz-Signature=d2da539a61f768eeaa2656d5d164ecbf4c3db691a5beb03b9a0c4e04acf3ecb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42OEHZW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVXW%2FjM3ZnsgQqOmDrg3RsU4PEg%2BNOTbYm2nKX0yEt%2BAIhAJXSQPAOAX3tK1MchSsZ7GnrC9kqljAteZ8WIupxERtXKv8DCHoQABoMNjM3NDIzMTgzODA1Igwyke1VaLYNNyqMf24q3APcrlRljTRGICX7tUyWsqf%2FqbEPc67tj%2FSYvz5S1VwVdbfu3kGvpnT0MkFFVxRwLn%2FX6GSXfchZBn0cBgaql6v5CygO32lQqQztRKWZ9q6sslXBHqhMv2iG9TAw4%2FBeec0IX3zJ1Lw%2BjzerNBMuiZD50tPKCasZp6pj9rFUWYaTVZ9BJCnMpygJdiMlRxli3FY6%2F7vVlOQCjHWCHf3fi9dPTKodtxCpQAhr9i8bLLkJqe2H0W%2ByELgpsQHgdy605HBBI5ZsNypad1JyjNt6kHWM2k9LofuBX3Gzu2ACBt3oV%2BjaUyrB1ZE0TESvVCOGTphfSBqDpyDeR9G6yidmmPaYoA0k4uh%2BKoLviLX1wdSEXn4cURWGrV%2BD98J3SB9cnoHB70WXlR7SAkJMvo%2BnXCEC3JZrQk6TCy6M516LqT1QNmACLzRJs22r6f2mEicUdLo8YyDti7RC06vQHSASH1uRA4mjR7m7haogG%2BnUH6Ci%2FxJbAjhVV1wWkqrT5qBC6O2TtYBGvwqNxP37WzvCgeDI4jCJA46KVGRx9AmNv8cUi5QGA1IxYh%2F1m9V2oSIEkQ1AINrkr7JZdm4wiE3fnqQpBgyYdTOUJmhwJCYBN9%2FJhzY1ckz%2FVSqwMVLAjDCj%2BNzBBjqkAYtudnZqXU%2BltrfrZNs08SQ17gBZ0MlmIOcs%2FaS8yVvCE0uOb04N7Ii69C0JbNXhB49VvwNPD2xQsZcDv2r6VYRyNH9OEpyg7M8zQiVPY77zd9cMIz43xRjmGZrNFi4cNAuHMv%2B37F3C58suoRWEWORw8W9AYhzrRfn3%2BnFXVvQzKGeW6%2Bm8Cw%2BmHUPge%2BZYNbhnxtuYq4B08X6TDU8NWgKwyD53&X-Amz-Signature=c9c7de656c2ee5d29eafcc9e1eea4ec8deccb864b5cdaccbe56e12d086b99f69&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
