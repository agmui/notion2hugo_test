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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWUN4AW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjIUgsqtNadOAsNZt%2Ftp2Rn5Dd0BlRYWyU1lYFr%2FkBnAiEAg3Fq%2F2P0Whw9LENEMmOu2allet2JClndMnTezlQ%2BfjIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6orM%2F7YQHpzX4OBCrcA4NAaVT73ALeZukFxIpg27QrwksjkKw2TXEOiPWyj61NX2pjnMsoYS11o2pnnl6zo2N6LGoVrNnj%2FQF6OYXTXCYkXc3ktjq4vSn%2FHURG9IwMUrgXNIMJdFw03Ntkf5tkb2tcach1sHQ8nfDeGQRErA%2FeUVW9gyFXa7UJJsEssRbHNnNT68Vdr4gFVr3susjmESpaEIezQUnMgDrcn8JB%2B2BfCq6cjl%2F0uJmW58R%2BoWrFs4knPzaqIB2zRO46bjTVSEjK5jVfs07d48pa6QRFE9aRvhNr4ct0Ia0qTPZVW3OGsx%2BxhUwstIz7NXJZbl6bqIk9QxbuPiL5bjjDMsmiBTxTwGKxYe6i8wsQJO9HN1dB6Tyk1Gg9DhqDZSgJYIvm69BOhNqLNLKUwHIHskYc79fbhV6%2Ba5ZKWOM1cTNgm63tWixZbsNnXTTlDCQLrirrHgaF%2BCtlxWRN6ifTuhTO8Vjv4HTsWE5nQCS59PkL8WEr2H7VADIuqQ6xCDP1GhQpCosucpvO78keebD%2F%2FOqtbL%2B5oNvCPvQ%2BH3B%2BnQ3yxoyLxLCBG%2BOrnVrZ0XWtpoliwvLerDAcGQqpoPqstYHajwshiME%2F3rcUP3MESxMQ%2FxAgNZ%2FQfbcWxGtfMeoDMK7Jrr0GOqUBu4fBz4MGRTfGOylZH%2BKxLogzUmbkBlSqhQFThEEMlUclikU9Xk%2F9MYcxkm16qsv3ZLaTJvrt%2BY9FaeJ42wOYlr04xjiR7Nc%2B8mMBdOyKQvJJ7i%2FfUhcT%2F31YCKSatAjjgHmFSym1eFhj4%2Bh%2BaAbCghQgOMZVl28yNdecZTKP9mCArl59iLU1s%2Fbo%2By%2BxZvzHyJ1t%2BvALelkoQkrB4g%2FbIZr0GeXv&X-Amz-Signature=e877772894e8b3c1fcd30503329f26f5a27578dccaa23df00b1d6f0b02dab1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWUN4AW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjIUgsqtNadOAsNZt%2Ftp2Rn5Dd0BlRYWyU1lYFr%2FkBnAiEAg3Fq%2F2P0Whw9LENEMmOu2allet2JClndMnTezlQ%2BfjIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6orM%2F7YQHpzX4OBCrcA4NAaVT73ALeZukFxIpg27QrwksjkKw2TXEOiPWyj61NX2pjnMsoYS11o2pnnl6zo2N6LGoVrNnj%2FQF6OYXTXCYkXc3ktjq4vSn%2FHURG9IwMUrgXNIMJdFw03Ntkf5tkb2tcach1sHQ8nfDeGQRErA%2FeUVW9gyFXa7UJJsEssRbHNnNT68Vdr4gFVr3susjmESpaEIezQUnMgDrcn8JB%2B2BfCq6cjl%2F0uJmW58R%2BoWrFs4knPzaqIB2zRO46bjTVSEjK5jVfs07d48pa6QRFE9aRvhNr4ct0Ia0qTPZVW3OGsx%2BxhUwstIz7NXJZbl6bqIk9QxbuPiL5bjjDMsmiBTxTwGKxYe6i8wsQJO9HN1dB6Tyk1Gg9DhqDZSgJYIvm69BOhNqLNLKUwHIHskYc79fbhV6%2Ba5ZKWOM1cTNgm63tWixZbsNnXTTlDCQLrirrHgaF%2BCtlxWRN6ifTuhTO8Vjv4HTsWE5nQCS59PkL8WEr2H7VADIuqQ6xCDP1GhQpCosucpvO78keebD%2F%2FOqtbL%2B5oNvCPvQ%2BH3B%2BnQ3yxoyLxLCBG%2BOrnVrZ0XWtpoliwvLerDAcGQqpoPqstYHajwshiME%2F3rcUP3MESxMQ%2FxAgNZ%2FQfbcWxGtfMeoDMK7Jrr0GOqUBu4fBz4MGRTfGOylZH%2BKxLogzUmbkBlSqhQFThEEMlUclikU9Xk%2F9MYcxkm16qsv3ZLaTJvrt%2BY9FaeJ42wOYlr04xjiR7Nc%2B8mMBdOyKQvJJ7i%2FfUhcT%2F31YCKSatAjjgHmFSym1eFhj4%2Bh%2BaAbCghQgOMZVl28yNdecZTKP9mCArl59iLU1s%2Fbo%2By%2BxZvzHyJ1t%2BvALelkoQkrB4g%2FbIZr0GeXv&X-Amz-Signature=169c424466870d83148663f9f2489f3600fdea08220b019b00f8d30ea9ec0324&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWUN4AW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjIUgsqtNadOAsNZt%2Ftp2Rn5Dd0BlRYWyU1lYFr%2FkBnAiEAg3Fq%2F2P0Whw9LENEMmOu2allet2JClndMnTezlQ%2BfjIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6orM%2F7YQHpzX4OBCrcA4NAaVT73ALeZukFxIpg27QrwksjkKw2TXEOiPWyj61NX2pjnMsoYS11o2pnnl6zo2N6LGoVrNnj%2FQF6OYXTXCYkXc3ktjq4vSn%2FHURG9IwMUrgXNIMJdFw03Ntkf5tkb2tcach1sHQ8nfDeGQRErA%2FeUVW9gyFXa7UJJsEssRbHNnNT68Vdr4gFVr3susjmESpaEIezQUnMgDrcn8JB%2B2BfCq6cjl%2F0uJmW58R%2BoWrFs4knPzaqIB2zRO46bjTVSEjK5jVfs07d48pa6QRFE9aRvhNr4ct0Ia0qTPZVW3OGsx%2BxhUwstIz7NXJZbl6bqIk9QxbuPiL5bjjDMsmiBTxTwGKxYe6i8wsQJO9HN1dB6Tyk1Gg9DhqDZSgJYIvm69BOhNqLNLKUwHIHskYc79fbhV6%2Ba5ZKWOM1cTNgm63tWixZbsNnXTTlDCQLrirrHgaF%2BCtlxWRN6ifTuhTO8Vjv4HTsWE5nQCS59PkL8WEr2H7VADIuqQ6xCDP1GhQpCosucpvO78keebD%2F%2FOqtbL%2B5oNvCPvQ%2BH3B%2BnQ3yxoyLxLCBG%2BOrnVrZ0XWtpoliwvLerDAcGQqpoPqstYHajwshiME%2F3rcUP3MESxMQ%2FxAgNZ%2FQfbcWxGtfMeoDMK7Jrr0GOqUBu4fBz4MGRTfGOylZH%2BKxLogzUmbkBlSqhQFThEEMlUclikU9Xk%2F9MYcxkm16qsv3ZLaTJvrt%2BY9FaeJ42wOYlr04xjiR7Nc%2B8mMBdOyKQvJJ7i%2FfUhcT%2F31YCKSatAjjgHmFSym1eFhj4%2Bh%2BaAbCghQgOMZVl28yNdecZTKP9mCArl59iLU1s%2Fbo%2By%2BxZvzHyJ1t%2BvALelkoQkrB4g%2FbIZr0GeXv&X-Amz-Signature=6e3dcaa036327f4df841a7de233c323f56f569d312a97a96ff0e67ffaa018ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWUN4AW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjIUgsqtNadOAsNZt%2Ftp2Rn5Dd0BlRYWyU1lYFr%2FkBnAiEAg3Fq%2F2P0Whw9LENEMmOu2allet2JClndMnTezlQ%2BfjIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6orM%2F7YQHpzX4OBCrcA4NAaVT73ALeZukFxIpg27QrwksjkKw2TXEOiPWyj61NX2pjnMsoYS11o2pnnl6zo2N6LGoVrNnj%2FQF6OYXTXCYkXc3ktjq4vSn%2FHURG9IwMUrgXNIMJdFw03Ntkf5tkb2tcach1sHQ8nfDeGQRErA%2FeUVW9gyFXa7UJJsEssRbHNnNT68Vdr4gFVr3susjmESpaEIezQUnMgDrcn8JB%2B2BfCq6cjl%2F0uJmW58R%2BoWrFs4knPzaqIB2zRO46bjTVSEjK5jVfs07d48pa6QRFE9aRvhNr4ct0Ia0qTPZVW3OGsx%2BxhUwstIz7NXJZbl6bqIk9QxbuPiL5bjjDMsmiBTxTwGKxYe6i8wsQJO9HN1dB6Tyk1Gg9DhqDZSgJYIvm69BOhNqLNLKUwHIHskYc79fbhV6%2Ba5ZKWOM1cTNgm63tWixZbsNnXTTlDCQLrirrHgaF%2BCtlxWRN6ifTuhTO8Vjv4HTsWE5nQCS59PkL8WEr2H7VADIuqQ6xCDP1GhQpCosucpvO78keebD%2F%2FOqtbL%2B5oNvCPvQ%2BH3B%2BnQ3yxoyLxLCBG%2BOrnVrZ0XWtpoliwvLerDAcGQqpoPqstYHajwshiME%2F3rcUP3MESxMQ%2FxAgNZ%2FQfbcWxGtfMeoDMK7Jrr0GOqUBu4fBz4MGRTfGOylZH%2BKxLogzUmbkBlSqhQFThEEMlUclikU9Xk%2F9MYcxkm16qsv3ZLaTJvrt%2BY9FaeJ42wOYlr04xjiR7Nc%2B8mMBdOyKQvJJ7i%2FfUhcT%2F31YCKSatAjjgHmFSym1eFhj4%2Bh%2BaAbCghQgOMZVl28yNdecZTKP9mCArl59iLU1s%2Fbo%2By%2BxZvzHyJ1t%2BvALelkoQkrB4g%2FbIZr0GeXv&X-Amz-Signature=00b9cd186ed76221a4b0c7ad2ad3b9e12850334d857dfbbb57be91da65c60c79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWUN4AW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjIUgsqtNadOAsNZt%2Ftp2Rn5Dd0BlRYWyU1lYFr%2FkBnAiEAg3Fq%2F2P0Whw9LENEMmOu2allet2JClndMnTezlQ%2BfjIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6orM%2F7YQHpzX4OBCrcA4NAaVT73ALeZukFxIpg27QrwksjkKw2TXEOiPWyj61NX2pjnMsoYS11o2pnnl6zo2N6LGoVrNnj%2FQF6OYXTXCYkXc3ktjq4vSn%2FHURG9IwMUrgXNIMJdFw03Ntkf5tkb2tcach1sHQ8nfDeGQRErA%2FeUVW9gyFXa7UJJsEssRbHNnNT68Vdr4gFVr3susjmESpaEIezQUnMgDrcn8JB%2B2BfCq6cjl%2F0uJmW58R%2BoWrFs4knPzaqIB2zRO46bjTVSEjK5jVfs07d48pa6QRFE9aRvhNr4ct0Ia0qTPZVW3OGsx%2BxhUwstIz7NXJZbl6bqIk9QxbuPiL5bjjDMsmiBTxTwGKxYe6i8wsQJO9HN1dB6Tyk1Gg9DhqDZSgJYIvm69BOhNqLNLKUwHIHskYc79fbhV6%2Ba5ZKWOM1cTNgm63tWixZbsNnXTTlDCQLrirrHgaF%2BCtlxWRN6ifTuhTO8Vjv4HTsWE5nQCS59PkL8WEr2H7VADIuqQ6xCDP1GhQpCosucpvO78keebD%2F%2FOqtbL%2B5oNvCPvQ%2BH3B%2BnQ3yxoyLxLCBG%2BOrnVrZ0XWtpoliwvLerDAcGQqpoPqstYHajwshiME%2F3rcUP3MESxMQ%2FxAgNZ%2FQfbcWxGtfMeoDMK7Jrr0GOqUBu4fBz4MGRTfGOylZH%2BKxLogzUmbkBlSqhQFThEEMlUclikU9Xk%2F9MYcxkm16qsv3ZLaTJvrt%2BY9FaeJ42wOYlr04xjiR7Nc%2B8mMBdOyKQvJJ7i%2FfUhcT%2F31YCKSatAjjgHmFSym1eFhj4%2Bh%2BaAbCghQgOMZVl28yNdecZTKP9mCArl59iLU1s%2Fbo%2By%2BxZvzHyJ1t%2BvALelkoQkrB4g%2FbIZr0GeXv&X-Amz-Signature=1112ea5455d8b6b120dddd31631f1ac6b3395b5b08f89b564990b56dab23c7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
