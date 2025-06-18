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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVDDH2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcEz3PVO03rgP4Mo38tuYfOaWSR%2BZcsDDUOpjm81QF1AiEA2GM59B5V0CKnaMy6pDoWhQJ8mGd5Z%2BDZDG%2F11qiN4wgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlvb9PpbvDcP0lnuSrcA3T%2BWDiSpSs4zx71W%2FmKkWzO1KnOqhWcFS%2BG6TGGXel2mrRWEjU6Tq3Hp7V7yKaCbyk1VztnvFEOSOJovmGFsxos8pfVupCOCI1EoSYfc1%2FEme5CjelH3MqheMQtYdzisX4yjYazYgj5VShj4NUXklcAeXS2oasLdGKjRdSjcygNbkx6%2FMvkCADWDW8UfAUzA%2FVJjJaV5NLW%2B6nAP6sOUrPzDihCOQoSM5AaYhvrPAROfTrjFyTgFR%2FxzKon0ogLPHzb2aYj7GG7F%2Fv4qy%2FS1VyI5zGBv6sL%2FCi%2Fhstj7L9T7tlxwvFE93WjYciAUB7BjTc3%2FTdWlOICrwiEx2TxnWTbr8esyELFY3GGN%2BYmIObZ1%2B1%2BjbrCOTpjSqG89GN4RpkVCD5nw%2BPQprDazxFf48lRUgIkTDaWk7bTWXxzLWD82YyylbBGb7eyDOik87dKxILrqhBUchMk8etYfm3y1VseWlb1IZZ4m20f47lNna2Wlw7yTxfehdN8Q%2FGTQGmyigkfkCgz3wzAqcnN4eET6BUa4RM%2BIZL9GfOcMGeu5ERoZYcumXGI2mlwOZU%2BfHsEfEk5Lt2c2TxnzNO7OQthB4UGQVLQ0B9D6g%2BMfwju86cYjocC5gT8KsN4nFluMI73zMIGOqUBQfYCJUC6%2BbU2rEqd1v%2BnHfEc7vJOv8in4pspGifWwAEPwsApFQRjMc2b146HHThuVzO57b%2F94EatqJRVNw%2BpVOkbMYGi1OWfqvXMrTosSs9fthEfgJUJPCoXcNv%2BqOrdG3bBUyrK%2BOol39t2lIsKRDUP9h%2Fk91ecgzM%2BPX7f0EtQbyJIm2mq5UR1Wm6WTpBJT5M1rZirphed4U8qWVjuxgkFYfcw&X-Amz-Signature=91125a62a486901010365a53519081b188632471f326ca3382b0f28332698524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVDDH2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcEz3PVO03rgP4Mo38tuYfOaWSR%2BZcsDDUOpjm81QF1AiEA2GM59B5V0CKnaMy6pDoWhQJ8mGd5Z%2BDZDG%2F11qiN4wgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlvb9PpbvDcP0lnuSrcA3T%2BWDiSpSs4zx71W%2FmKkWzO1KnOqhWcFS%2BG6TGGXel2mrRWEjU6Tq3Hp7V7yKaCbyk1VztnvFEOSOJovmGFsxos8pfVupCOCI1EoSYfc1%2FEme5CjelH3MqheMQtYdzisX4yjYazYgj5VShj4NUXklcAeXS2oasLdGKjRdSjcygNbkx6%2FMvkCADWDW8UfAUzA%2FVJjJaV5NLW%2B6nAP6sOUrPzDihCOQoSM5AaYhvrPAROfTrjFyTgFR%2FxzKon0ogLPHzb2aYj7GG7F%2Fv4qy%2FS1VyI5zGBv6sL%2FCi%2Fhstj7L9T7tlxwvFE93WjYciAUB7BjTc3%2FTdWlOICrwiEx2TxnWTbr8esyELFY3GGN%2BYmIObZ1%2B1%2BjbrCOTpjSqG89GN4RpkVCD5nw%2BPQprDazxFf48lRUgIkTDaWk7bTWXxzLWD82YyylbBGb7eyDOik87dKxILrqhBUchMk8etYfm3y1VseWlb1IZZ4m20f47lNna2Wlw7yTxfehdN8Q%2FGTQGmyigkfkCgz3wzAqcnN4eET6BUa4RM%2BIZL9GfOcMGeu5ERoZYcumXGI2mlwOZU%2BfHsEfEk5Lt2c2TxnzNO7OQthB4UGQVLQ0B9D6g%2BMfwju86cYjocC5gT8KsN4nFluMI73zMIGOqUBQfYCJUC6%2BbU2rEqd1v%2BnHfEc7vJOv8in4pspGifWwAEPwsApFQRjMc2b146HHThuVzO57b%2F94EatqJRVNw%2BpVOkbMYGi1OWfqvXMrTosSs9fthEfgJUJPCoXcNv%2BqOrdG3bBUyrK%2BOol39t2lIsKRDUP9h%2Fk91ecgzM%2BPX7f0EtQbyJIm2mq5UR1Wm6WTpBJT5M1rZirphed4U8qWVjuxgkFYfcw&X-Amz-Signature=fe2e3894daa061c80dcfb8d095169c1ccbe67456978882460659caac11c4f1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVDDH2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcEz3PVO03rgP4Mo38tuYfOaWSR%2BZcsDDUOpjm81QF1AiEA2GM59B5V0CKnaMy6pDoWhQJ8mGd5Z%2BDZDG%2F11qiN4wgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlvb9PpbvDcP0lnuSrcA3T%2BWDiSpSs4zx71W%2FmKkWzO1KnOqhWcFS%2BG6TGGXel2mrRWEjU6Tq3Hp7V7yKaCbyk1VztnvFEOSOJovmGFsxos8pfVupCOCI1EoSYfc1%2FEme5CjelH3MqheMQtYdzisX4yjYazYgj5VShj4NUXklcAeXS2oasLdGKjRdSjcygNbkx6%2FMvkCADWDW8UfAUzA%2FVJjJaV5NLW%2B6nAP6sOUrPzDihCOQoSM5AaYhvrPAROfTrjFyTgFR%2FxzKon0ogLPHzb2aYj7GG7F%2Fv4qy%2FS1VyI5zGBv6sL%2FCi%2Fhstj7L9T7tlxwvFE93WjYciAUB7BjTc3%2FTdWlOICrwiEx2TxnWTbr8esyELFY3GGN%2BYmIObZ1%2B1%2BjbrCOTpjSqG89GN4RpkVCD5nw%2BPQprDazxFf48lRUgIkTDaWk7bTWXxzLWD82YyylbBGb7eyDOik87dKxILrqhBUchMk8etYfm3y1VseWlb1IZZ4m20f47lNna2Wlw7yTxfehdN8Q%2FGTQGmyigkfkCgz3wzAqcnN4eET6BUa4RM%2BIZL9GfOcMGeu5ERoZYcumXGI2mlwOZU%2BfHsEfEk5Lt2c2TxnzNO7OQthB4UGQVLQ0B9D6g%2BMfwju86cYjocC5gT8KsN4nFluMI73zMIGOqUBQfYCJUC6%2BbU2rEqd1v%2BnHfEc7vJOv8in4pspGifWwAEPwsApFQRjMc2b146HHThuVzO57b%2F94EatqJRVNw%2BpVOkbMYGi1OWfqvXMrTosSs9fthEfgJUJPCoXcNv%2BqOrdG3bBUyrK%2BOol39t2lIsKRDUP9h%2Fk91ecgzM%2BPX7f0EtQbyJIm2mq5UR1Wm6WTpBJT5M1rZirphed4U8qWVjuxgkFYfcw&X-Amz-Signature=d51c5bedbf3662ed29bed37dec5d9ee6c921178c18ab1eb2e7acfb2358c88020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVDDH2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcEz3PVO03rgP4Mo38tuYfOaWSR%2BZcsDDUOpjm81QF1AiEA2GM59B5V0CKnaMy6pDoWhQJ8mGd5Z%2BDZDG%2F11qiN4wgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlvb9PpbvDcP0lnuSrcA3T%2BWDiSpSs4zx71W%2FmKkWzO1KnOqhWcFS%2BG6TGGXel2mrRWEjU6Tq3Hp7V7yKaCbyk1VztnvFEOSOJovmGFsxos8pfVupCOCI1EoSYfc1%2FEme5CjelH3MqheMQtYdzisX4yjYazYgj5VShj4NUXklcAeXS2oasLdGKjRdSjcygNbkx6%2FMvkCADWDW8UfAUzA%2FVJjJaV5NLW%2B6nAP6sOUrPzDihCOQoSM5AaYhvrPAROfTrjFyTgFR%2FxzKon0ogLPHzb2aYj7GG7F%2Fv4qy%2FS1VyI5zGBv6sL%2FCi%2Fhstj7L9T7tlxwvFE93WjYciAUB7BjTc3%2FTdWlOICrwiEx2TxnWTbr8esyELFY3GGN%2BYmIObZ1%2B1%2BjbrCOTpjSqG89GN4RpkVCD5nw%2BPQprDazxFf48lRUgIkTDaWk7bTWXxzLWD82YyylbBGb7eyDOik87dKxILrqhBUchMk8etYfm3y1VseWlb1IZZ4m20f47lNna2Wlw7yTxfehdN8Q%2FGTQGmyigkfkCgz3wzAqcnN4eET6BUa4RM%2BIZL9GfOcMGeu5ERoZYcumXGI2mlwOZU%2BfHsEfEk5Lt2c2TxnzNO7OQthB4UGQVLQ0B9D6g%2BMfwju86cYjocC5gT8KsN4nFluMI73zMIGOqUBQfYCJUC6%2BbU2rEqd1v%2BnHfEc7vJOv8in4pspGifWwAEPwsApFQRjMc2b146HHThuVzO57b%2F94EatqJRVNw%2BpVOkbMYGi1OWfqvXMrTosSs9fthEfgJUJPCoXcNv%2BqOrdG3bBUyrK%2BOol39t2lIsKRDUP9h%2Fk91ecgzM%2BPX7f0EtQbyJIm2mq5UR1Wm6WTpBJT5M1rZirphed4U8qWVjuxgkFYfcw&X-Amz-Signature=b14275faa2dc763a8586adea4abf7f4f8bc3bb1739fcfae56bf506bf9c4df688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVDDH2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcEz3PVO03rgP4Mo38tuYfOaWSR%2BZcsDDUOpjm81QF1AiEA2GM59B5V0CKnaMy6pDoWhQJ8mGd5Z%2BDZDG%2F11qiN4wgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlvb9PpbvDcP0lnuSrcA3T%2BWDiSpSs4zx71W%2FmKkWzO1KnOqhWcFS%2BG6TGGXel2mrRWEjU6Tq3Hp7V7yKaCbyk1VztnvFEOSOJovmGFsxos8pfVupCOCI1EoSYfc1%2FEme5CjelH3MqheMQtYdzisX4yjYazYgj5VShj4NUXklcAeXS2oasLdGKjRdSjcygNbkx6%2FMvkCADWDW8UfAUzA%2FVJjJaV5NLW%2B6nAP6sOUrPzDihCOQoSM5AaYhvrPAROfTrjFyTgFR%2FxzKon0ogLPHzb2aYj7GG7F%2Fv4qy%2FS1VyI5zGBv6sL%2FCi%2Fhstj7L9T7tlxwvFE93WjYciAUB7BjTc3%2FTdWlOICrwiEx2TxnWTbr8esyELFY3GGN%2BYmIObZ1%2B1%2BjbrCOTpjSqG89GN4RpkVCD5nw%2BPQprDazxFf48lRUgIkTDaWk7bTWXxzLWD82YyylbBGb7eyDOik87dKxILrqhBUchMk8etYfm3y1VseWlb1IZZ4m20f47lNna2Wlw7yTxfehdN8Q%2FGTQGmyigkfkCgz3wzAqcnN4eET6BUa4RM%2BIZL9GfOcMGeu5ERoZYcumXGI2mlwOZU%2BfHsEfEk5Lt2c2TxnzNO7OQthB4UGQVLQ0B9D6g%2BMfwju86cYjocC5gT8KsN4nFluMI73zMIGOqUBQfYCJUC6%2BbU2rEqd1v%2BnHfEc7vJOv8in4pspGifWwAEPwsApFQRjMc2b146HHThuVzO57b%2F94EatqJRVNw%2BpVOkbMYGi1OWfqvXMrTosSs9fthEfgJUJPCoXcNv%2BqOrdG3bBUyrK%2BOol39t2lIsKRDUP9h%2Fk91ecgzM%2BPX7f0EtQbyJIm2mq5UR1Wm6WTpBJT5M1rZirphed4U8qWVjuxgkFYfcw&X-Amz-Signature=f7e8efd35ea32a663e1c05a4bb33af00322a4bfe02a4c54106a77b7967a01441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
