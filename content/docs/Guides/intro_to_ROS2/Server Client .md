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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXMOOX5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCYFR%2Fs11xQZdBiBQCh52SdvSZPTgSIxpXZAoQC1JMaYAIhAOkqGJb%2BjuoZ4IkN%2F%2FMTDZ75uT7O5kOiGK7KwePQplyYKv8DCB0QABoMNjM3NDIzMTgzODA1Igzhpcmbt%2FSUGcoR1isq3AMVTuhD%2Ffqs1TupzhSxqvwg2F%2B%2FzA8eprgf9uxBkGGryHlqEX18mPvD85oiMwW3fyklyyc0yXii51Pm57nMwiRRWhfJTplEE59xUtMidFcVA8nNI1ds6ZuxgZapOeXPdTZVhbAv8MoHJ06qDcqAe470mK7z9e1TNN%2FEZ2Tpvx6qSkcZ6O8507tmqfhWWdPrhVV7xD1xLNSew1KU9vDI06e5FhaOrtxGNp3zoFcJGxt0Z71TJzB75rselkwCCekp6UV3LOUfq%2BXjetRTAh7id80GvxswPFrzvjHEHqCoFn6%2Bm6t6mDKVsy57Ymze8WDHIjD4RTioqOYsz485c0IjiYFjsOlndEC8vZGwyfO0A0znuwtZ30H0ob0gD%2F8%2F1q2YIDJuo5qXebCVJTq36ZOEIOo4st2rHu%2FJ04m6KI%2BQAkBLU8%2FpUOtfU8aPvM5Dfygi%2FAd8ej8Kr%2FFxU4pHuopcWBq0fcw7%2BxOBM%2B8kkrArxdU6Waxu9EEuNHRYAdI17PAw9Ich3edzY8pOVvtRn3ZSv%2FC1Yg7W9jZV5I4k5MlSWMO4km8uwNcWWYtodSxBq5NKYCZ36VnsXsa3UMB%2FlaMZW2sgfrRruJdtYH1I%2FFRLLiavWP0ZjHpT3xnK1wFH1TCEvMjBBjqkAQKNBYhdKlU4TMG7E56fyBOscm%2FEP%2FsFhZjz72WMFrBkVYDwTRUJhb2Wk%2FoVLErDTaRQWQOrh2nZOOnELroVdbWnvQakpBVfTDjDPHgKvPS%2Bei6sszNUyW82dvXOjTL1hmQOn9TVUdrT9OyUU%2BPvMNbNzytGQQRPuMUaWhK0Wb4B36b83jj2SDzjd0UO8N%2BbZq6SSZPgADl1OxkPR4X340PCKpYi&X-Amz-Signature=103fa73a181102321fb0c7a59c6ce1b2370c0e354f47b85694ec9a4864ba6c73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXMOOX5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCYFR%2Fs11xQZdBiBQCh52SdvSZPTgSIxpXZAoQC1JMaYAIhAOkqGJb%2BjuoZ4IkN%2F%2FMTDZ75uT7O5kOiGK7KwePQplyYKv8DCB0QABoMNjM3NDIzMTgzODA1Igzhpcmbt%2FSUGcoR1isq3AMVTuhD%2Ffqs1TupzhSxqvwg2F%2B%2FzA8eprgf9uxBkGGryHlqEX18mPvD85oiMwW3fyklyyc0yXii51Pm57nMwiRRWhfJTplEE59xUtMidFcVA8nNI1ds6ZuxgZapOeXPdTZVhbAv8MoHJ06qDcqAe470mK7z9e1TNN%2FEZ2Tpvx6qSkcZ6O8507tmqfhWWdPrhVV7xD1xLNSew1KU9vDI06e5FhaOrtxGNp3zoFcJGxt0Z71TJzB75rselkwCCekp6UV3LOUfq%2BXjetRTAh7id80GvxswPFrzvjHEHqCoFn6%2Bm6t6mDKVsy57Ymze8WDHIjD4RTioqOYsz485c0IjiYFjsOlndEC8vZGwyfO0A0znuwtZ30H0ob0gD%2F8%2F1q2YIDJuo5qXebCVJTq36ZOEIOo4st2rHu%2FJ04m6KI%2BQAkBLU8%2FpUOtfU8aPvM5Dfygi%2FAd8ej8Kr%2FFxU4pHuopcWBq0fcw7%2BxOBM%2B8kkrArxdU6Waxu9EEuNHRYAdI17PAw9Ich3edzY8pOVvtRn3ZSv%2FC1Yg7W9jZV5I4k5MlSWMO4km8uwNcWWYtodSxBq5NKYCZ36VnsXsa3UMB%2FlaMZW2sgfrRruJdtYH1I%2FFRLLiavWP0ZjHpT3xnK1wFH1TCEvMjBBjqkAQKNBYhdKlU4TMG7E56fyBOscm%2FEP%2FsFhZjz72WMFrBkVYDwTRUJhb2Wk%2FoVLErDTaRQWQOrh2nZOOnELroVdbWnvQakpBVfTDjDPHgKvPS%2Bei6sszNUyW82dvXOjTL1hmQOn9TVUdrT9OyUU%2BPvMNbNzytGQQRPuMUaWhK0Wb4B36b83jj2SDzjd0UO8N%2BbZq6SSZPgADl1OxkPR4X340PCKpYi&X-Amz-Signature=661d4d3b114bbc81ce5ba0e06c49d6a7f3568360195dc12258bd231867134e27&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXMOOX5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCYFR%2Fs11xQZdBiBQCh52SdvSZPTgSIxpXZAoQC1JMaYAIhAOkqGJb%2BjuoZ4IkN%2F%2FMTDZ75uT7O5kOiGK7KwePQplyYKv8DCB0QABoMNjM3NDIzMTgzODA1Igzhpcmbt%2FSUGcoR1isq3AMVTuhD%2Ffqs1TupzhSxqvwg2F%2B%2FzA8eprgf9uxBkGGryHlqEX18mPvD85oiMwW3fyklyyc0yXii51Pm57nMwiRRWhfJTplEE59xUtMidFcVA8nNI1ds6ZuxgZapOeXPdTZVhbAv8MoHJ06qDcqAe470mK7z9e1TNN%2FEZ2Tpvx6qSkcZ6O8507tmqfhWWdPrhVV7xD1xLNSew1KU9vDI06e5FhaOrtxGNp3zoFcJGxt0Z71TJzB75rselkwCCekp6UV3LOUfq%2BXjetRTAh7id80GvxswPFrzvjHEHqCoFn6%2Bm6t6mDKVsy57Ymze8WDHIjD4RTioqOYsz485c0IjiYFjsOlndEC8vZGwyfO0A0znuwtZ30H0ob0gD%2F8%2F1q2YIDJuo5qXebCVJTq36ZOEIOo4st2rHu%2FJ04m6KI%2BQAkBLU8%2FpUOtfU8aPvM5Dfygi%2FAd8ej8Kr%2FFxU4pHuopcWBq0fcw7%2BxOBM%2B8kkrArxdU6Waxu9EEuNHRYAdI17PAw9Ich3edzY8pOVvtRn3ZSv%2FC1Yg7W9jZV5I4k5MlSWMO4km8uwNcWWYtodSxBq5NKYCZ36VnsXsa3UMB%2FlaMZW2sgfrRruJdtYH1I%2FFRLLiavWP0ZjHpT3xnK1wFH1TCEvMjBBjqkAQKNBYhdKlU4TMG7E56fyBOscm%2FEP%2FsFhZjz72WMFrBkVYDwTRUJhb2Wk%2FoVLErDTaRQWQOrh2nZOOnELroVdbWnvQakpBVfTDjDPHgKvPS%2Bei6sszNUyW82dvXOjTL1hmQOn9TVUdrT9OyUU%2BPvMNbNzytGQQRPuMUaWhK0Wb4B36b83jj2SDzjd0UO8N%2BbZq6SSZPgADl1OxkPR4X340PCKpYi&X-Amz-Signature=d13bef3aa0c41ac558f1fcb6dd8454786f02097d67f298741fac3faee69f2f51&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXMOOX5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCYFR%2Fs11xQZdBiBQCh52SdvSZPTgSIxpXZAoQC1JMaYAIhAOkqGJb%2BjuoZ4IkN%2F%2FMTDZ75uT7O5kOiGK7KwePQplyYKv8DCB0QABoMNjM3NDIzMTgzODA1Igzhpcmbt%2FSUGcoR1isq3AMVTuhD%2Ffqs1TupzhSxqvwg2F%2B%2FzA8eprgf9uxBkGGryHlqEX18mPvD85oiMwW3fyklyyc0yXii51Pm57nMwiRRWhfJTplEE59xUtMidFcVA8nNI1ds6ZuxgZapOeXPdTZVhbAv8MoHJ06qDcqAe470mK7z9e1TNN%2FEZ2Tpvx6qSkcZ6O8507tmqfhWWdPrhVV7xD1xLNSew1KU9vDI06e5FhaOrtxGNp3zoFcJGxt0Z71TJzB75rselkwCCekp6UV3LOUfq%2BXjetRTAh7id80GvxswPFrzvjHEHqCoFn6%2Bm6t6mDKVsy57Ymze8WDHIjD4RTioqOYsz485c0IjiYFjsOlndEC8vZGwyfO0A0znuwtZ30H0ob0gD%2F8%2F1q2YIDJuo5qXebCVJTq36ZOEIOo4st2rHu%2FJ04m6KI%2BQAkBLU8%2FpUOtfU8aPvM5Dfygi%2FAd8ej8Kr%2FFxU4pHuopcWBq0fcw7%2BxOBM%2B8kkrArxdU6Waxu9EEuNHRYAdI17PAw9Ich3edzY8pOVvtRn3ZSv%2FC1Yg7W9jZV5I4k5MlSWMO4km8uwNcWWYtodSxBq5NKYCZ36VnsXsa3UMB%2FlaMZW2sgfrRruJdtYH1I%2FFRLLiavWP0ZjHpT3xnK1wFH1TCEvMjBBjqkAQKNBYhdKlU4TMG7E56fyBOscm%2FEP%2FsFhZjz72WMFrBkVYDwTRUJhb2Wk%2FoVLErDTaRQWQOrh2nZOOnELroVdbWnvQakpBVfTDjDPHgKvPS%2Bei6sszNUyW82dvXOjTL1hmQOn9TVUdrT9OyUU%2BPvMNbNzytGQQRPuMUaWhK0Wb4B36b83jj2SDzjd0UO8N%2BbZq6SSZPgADl1OxkPR4X340PCKpYi&X-Amz-Signature=ed731f98ff6c084e0d9175673a78d8f61e69cbff366c634aae142454bc6cc385&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXMOOX5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCYFR%2Fs11xQZdBiBQCh52SdvSZPTgSIxpXZAoQC1JMaYAIhAOkqGJb%2BjuoZ4IkN%2F%2FMTDZ75uT7O5kOiGK7KwePQplyYKv8DCB0QABoMNjM3NDIzMTgzODA1Igzhpcmbt%2FSUGcoR1isq3AMVTuhD%2Ffqs1TupzhSxqvwg2F%2B%2FzA8eprgf9uxBkGGryHlqEX18mPvD85oiMwW3fyklyyc0yXii51Pm57nMwiRRWhfJTplEE59xUtMidFcVA8nNI1ds6ZuxgZapOeXPdTZVhbAv8MoHJ06qDcqAe470mK7z9e1TNN%2FEZ2Tpvx6qSkcZ6O8507tmqfhWWdPrhVV7xD1xLNSew1KU9vDI06e5FhaOrtxGNp3zoFcJGxt0Z71TJzB75rselkwCCekp6UV3LOUfq%2BXjetRTAh7id80GvxswPFrzvjHEHqCoFn6%2Bm6t6mDKVsy57Ymze8WDHIjD4RTioqOYsz485c0IjiYFjsOlndEC8vZGwyfO0A0znuwtZ30H0ob0gD%2F8%2F1q2YIDJuo5qXebCVJTq36ZOEIOo4st2rHu%2FJ04m6KI%2BQAkBLU8%2FpUOtfU8aPvM5Dfygi%2FAd8ej8Kr%2FFxU4pHuopcWBq0fcw7%2BxOBM%2B8kkrArxdU6Waxu9EEuNHRYAdI17PAw9Ich3edzY8pOVvtRn3ZSv%2FC1Yg7W9jZV5I4k5MlSWMO4km8uwNcWWYtodSxBq5NKYCZ36VnsXsa3UMB%2FlaMZW2sgfrRruJdtYH1I%2FFRLLiavWP0ZjHpT3xnK1wFH1TCEvMjBBjqkAQKNBYhdKlU4TMG7E56fyBOscm%2FEP%2FsFhZjz72WMFrBkVYDwTRUJhb2Wk%2FoVLErDTaRQWQOrh2nZOOnELroVdbWnvQakpBVfTDjDPHgKvPS%2Bei6sszNUyW82dvXOjTL1hmQOn9TVUdrT9OyUU%2BPvMNbNzytGQQRPuMUaWhK0Wb4B36b83jj2SDzjd0UO8N%2BbZq6SSZPgADl1OxkPR4X340PCKpYi&X-Amz-Signature=1c72704dfa54fa22bb2a8b044e9b01c7375d390a008129577358d392a7c04047&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
