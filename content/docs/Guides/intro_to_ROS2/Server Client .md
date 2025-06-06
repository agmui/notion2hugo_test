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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NX44LT2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCKFrK1rwbB%2BLSms9yas1c34UwEnxyPTFyo%2BqU0tocJegIhAJ4y8S5uHTcNXsV3YxImKPbGO09PeMhA%2BhmUWs6NSfYCKv8DCFIQABoMNjM3NDIzMTgzODA1IgyUJWJKUTSkRGi0u84q3AOQBpzb7jrMfYii8%2BitA1WTuceYn%2FKOyMUhs0wAwEdzjYmQ%2Fx1XG4NcyLDAnn5cKsP5a7GJFQmkr09liuqeCI9ZnoUJegWAFG6DnuFyvqkd6QGK2PEdcpQRM%2B3DXAXUoB734sfFBo98eufF5s5laCcsBPSAH9P3rhAjSQhS2PK2Nc%2BReQnkFIVhLSwz0do2%2FMwCL7ZfFolAXJzqj%2FVInhvZKiO%2BKoLjM3k%2FtRQaQKNCsqfquIYrvNUN2BT7kvJaF%2Fk5liy59cRAFMxxFy6WVQ8BPKtGZpYXgJ4EmUXpJi6%2FVx98oyXXBRCUt0RGGoGOtW42foXYyEwKTt%2BnYsWFN34Qbp%2B87HU%2FBnFYGAAEAuq2LPz6gvUg5V9y5kHf5RSdV5pb7U1dTe0s5LZlpUZK6Q1EJYV3hciQrYwtUfE%2FxvMvj7ZJPjqLUZWKpgbh%2FFyO0Hu9iv9rTomVQJfaPVFioeh%2BeFK%2Fh%2BPvO1woA3DDWjUNg3IObw9WHF6bLqzuI9FdIKSlTDa%2BhC%2FhF6HtEUNu%2BFarlum1SNX35IxCXrsCWJOQBnrF7R0aoLDg5GzD0Bxzn7HE2ZqkIv%2FWaAS3UaLM6bddoBR5Gs51tX%2FcZSxuviWK%2F9wbAeWupxSIzUOEaTCC94jCBjqkARSyHG8F5rYGsuErbWJqUXl9eBeoBOn9R%2F08aCMQNE0LlL08tI4UjMroDnt6b%2BHOXHAiMVLoPpr3l6kuWNURbQBMXx5n8Hql4SjW%2FWT42X4UVbV67GdpOWX05CPWxA0jbtl%2Bu%2FODuahrBhKsnkCDWWhS8fiTFrCCuAYW6Q9L2bnbx43XTgeiV0myHQiGzpmAir50Iib%2FuyD3%2F09shZuwGsOdyAV6&X-Amz-Signature=7601a14976b2d429ad6412d4f7bb550596cee1791667f45a2e0881b85fb20801&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NX44LT2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCKFrK1rwbB%2BLSms9yas1c34UwEnxyPTFyo%2BqU0tocJegIhAJ4y8S5uHTcNXsV3YxImKPbGO09PeMhA%2BhmUWs6NSfYCKv8DCFIQABoMNjM3NDIzMTgzODA1IgyUJWJKUTSkRGi0u84q3AOQBpzb7jrMfYii8%2BitA1WTuceYn%2FKOyMUhs0wAwEdzjYmQ%2Fx1XG4NcyLDAnn5cKsP5a7GJFQmkr09liuqeCI9ZnoUJegWAFG6DnuFyvqkd6QGK2PEdcpQRM%2B3DXAXUoB734sfFBo98eufF5s5laCcsBPSAH9P3rhAjSQhS2PK2Nc%2BReQnkFIVhLSwz0do2%2FMwCL7ZfFolAXJzqj%2FVInhvZKiO%2BKoLjM3k%2FtRQaQKNCsqfquIYrvNUN2BT7kvJaF%2Fk5liy59cRAFMxxFy6WVQ8BPKtGZpYXgJ4EmUXpJi6%2FVx98oyXXBRCUt0RGGoGOtW42foXYyEwKTt%2BnYsWFN34Qbp%2B87HU%2FBnFYGAAEAuq2LPz6gvUg5V9y5kHf5RSdV5pb7U1dTe0s5LZlpUZK6Q1EJYV3hciQrYwtUfE%2FxvMvj7ZJPjqLUZWKpgbh%2FFyO0Hu9iv9rTomVQJfaPVFioeh%2BeFK%2Fh%2BPvO1woA3DDWjUNg3IObw9WHF6bLqzuI9FdIKSlTDa%2BhC%2FhF6HtEUNu%2BFarlum1SNX35IxCXrsCWJOQBnrF7R0aoLDg5GzD0Bxzn7HE2ZqkIv%2FWaAS3UaLM6bddoBR5Gs51tX%2FcZSxuviWK%2F9wbAeWupxSIzUOEaTCC94jCBjqkARSyHG8F5rYGsuErbWJqUXl9eBeoBOn9R%2F08aCMQNE0LlL08tI4UjMroDnt6b%2BHOXHAiMVLoPpr3l6kuWNURbQBMXx5n8Hql4SjW%2FWT42X4UVbV67GdpOWX05CPWxA0jbtl%2Bu%2FODuahrBhKsnkCDWWhS8fiTFrCCuAYW6Q9L2bnbx43XTgeiV0myHQiGzpmAir50Iib%2FuyD3%2F09shZuwGsOdyAV6&X-Amz-Signature=47f165fa15790151be5a8a8e027855fcb1e79b6039a485c655fec6d6d8987a52&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NX44LT2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCKFrK1rwbB%2BLSms9yas1c34UwEnxyPTFyo%2BqU0tocJegIhAJ4y8S5uHTcNXsV3YxImKPbGO09PeMhA%2BhmUWs6NSfYCKv8DCFIQABoMNjM3NDIzMTgzODA1IgyUJWJKUTSkRGi0u84q3AOQBpzb7jrMfYii8%2BitA1WTuceYn%2FKOyMUhs0wAwEdzjYmQ%2Fx1XG4NcyLDAnn5cKsP5a7GJFQmkr09liuqeCI9ZnoUJegWAFG6DnuFyvqkd6QGK2PEdcpQRM%2B3DXAXUoB734sfFBo98eufF5s5laCcsBPSAH9P3rhAjSQhS2PK2Nc%2BReQnkFIVhLSwz0do2%2FMwCL7ZfFolAXJzqj%2FVInhvZKiO%2BKoLjM3k%2FtRQaQKNCsqfquIYrvNUN2BT7kvJaF%2Fk5liy59cRAFMxxFy6WVQ8BPKtGZpYXgJ4EmUXpJi6%2FVx98oyXXBRCUt0RGGoGOtW42foXYyEwKTt%2BnYsWFN34Qbp%2B87HU%2FBnFYGAAEAuq2LPz6gvUg5V9y5kHf5RSdV5pb7U1dTe0s5LZlpUZK6Q1EJYV3hciQrYwtUfE%2FxvMvj7ZJPjqLUZWKpgbh%2FFyO0Hu9iv9rTomVQJfaPVFioeh%2BeFK%2Fh%2BPvO1woA3DDWjUNg3IObw9WHF6bLqzuI9FdIKSlTDa%2BhC%2FhF6HtEUNu%2BFarlum1SNX35IxCXrsCWJOQBnrF7R0aoLDg5GzD0Bxzn7HE2ZqkIv%2FWaAS3UaLM6bddoBR5Gs51tX%2FcZSxuviWK%2F9wbAeWupxSIzUOEaTCC94jCBjqkARSyHG8F5rYGsuErbWJqUXl9eBeoBOn9R%2F08aCMQNE0LlL08tI4UjMroDnt6b%2BHOXHAiMVLoPpr3l6kuWNURbQBMXx5n8Hql4SjW%2FWT42X4UVbV67GdpOWX05CPWxA0jbtl%2Bu%2FODuahrBhKsnkCDWWhS8fiTFrCCuAYW6Q9L2bnbx43XTgeiV0myHQiGzpmAir50Iib%2FuyD3%2F09shZuwGsOdyAV6&X-Amz-Signature=d752a6b567dfec93be89c139ffff19c9b355483b39e213b68253495c0d547f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NX44LT2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCKFrK1rwbB%2BLSms9yas1c34UwEnxyPTFyo%2BqU0tocJegIhAJ4y8S5uHTcNXsV3YxImKPbGO09PeMhA%2BhmUWs6NSfYCKv8DCFIQABoMNjM3NDIzMTgzODA1IgyUJWJKUTSkRGi0u84q3AOQBpzb7jrMfYii8%2BitA1WTuceYn%2FKOyMUhs0wAwEdzjYmQ%2Fx1XG4NcyLDAnn5cKsP5a7GJFQmkr09liuqeCI9ZnoUJegWAFG6DnuFyvqkd6QGK2PEdcpQRM%2B3DXAXUoB734sfFBo98eufF5s5laCcsBPSAH9P3rhAjSQhS2PK2Nc%2BReQnkFIVhLSwz0do2%2FMwCL7ZfFolAXJzqj%2FVInhvZKiO%2BKoLjM3k%2FtRQaQKNCsqfquIYrvNUN2BT7kvJaF%2Fk5liy59cRAFMxxFy6WVQ8BPKtGZpYXgJ4EmUXpJi6%2FVx98oyXXBRCUt0RGGoGOtW42foXYyEwKTt%2BnYsWFN34Qbp%2B87HU%2FBnFYGAAEAuq2LPz6gvUg5V9y5kHf5RSdV5pb7U1dTe0s5LZlpUZK6Q1EJYV3hciQrYwtUfE%2FxvMvj7ZJPjqLUZWKpgbh%2FFyO0Hu9iv9rTomVQJfaPVFioeh%2BeFK%2Fh%2BPvO1woA3DDWjUNg3IObw9WHF6bLqzuI9FdIKSlTDa%2BhC%2FhF6HtEUNu%2BFarlum1SNX35IxCXrsCWJOQBnrF7R0aoLDg5GzD0Bxzn7HE2ZqkIv%2FWaAS3UaLM6bddoBR5Gs51tX%2FcZSxuviWK%2F9wbAeWupxSIzUOEaTCC94jCBjqkARSyHG8F5rYGsuErbWJqUXl9eBeoBOn9R%2F08aCMQNE0LlL08tI4UjMroDnt6b%2BHOXHAiMVLoPpr3l6kuWNURbQBMXx5n8Hql4SjW%2FWT42X4UVbV67GdpOWX05CPWxA0jbtl%2Bu%2FODuahrBhKsnkCDWWhS8fiTFrCCuAYW6Q9L2bnbx43XTgeiV0myHQiGzpmAir50Iib%2FuyD3%2F09shZuwGsOdyAV6&X-Amz-Signature=804d6c3c7d109d066b81bd9d130681abb13cb9b476500cd653c7ed33f853cb36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NX44LT2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCKFrK1rwbB%2BLSms9yas1c34UwEnxyPTFyo%2BqU0tocJegIhAJ4y8S5uHTcNXsV3YxImKPbGO09PeMhA%2BhmUWs6NSfYCKv8DCFIQABoMNjM3NDIzMTgzODA1IgyUJWJKUTSkRGi0u84q3AOQBpzb7jrMfYii8%2BitA1WTuceYn%2FKOyMUhs0wAwEdzjYmQ%2Fx1XG4NcyLDAnn5cKsP5a7GJFQmkr09liuqeCI9ZnoUJegWAFG6DnuFyvqkd6QGK2PEdcpQRM%2B3DXAXUoB734sfFBo98eufF5s5laCcsBPSAH9P3rhAjSQhS2PK2Nc%2BReQnkFIVhLSwz0do2%2FMwCL7ZfFolAXJzqj%2FVInhvZKiO%2BKoLjM3k%2FtRQaQKNCsqfquIYrvNUN2BT7kvJaF%2Fk5liy59cRAFMxxFy6WVQ8BPKtGZpYXgJ4EmUXpJi6%2FVx98oyXXBRCUt0RGGoGOtW42foXYyEwKTt%2BnYsWFN34Qbp%2B87HU%2FBnFYGAAEAuq2LPz6gvUg5V9y5kHf5RSdV5pb7U1dTe0s5LZlpUZK6Q1EJYV3hciQrYwtUfE%2FxvMvj7ZJPjqLUZWKpgbh%2FFyO0Hu9iv9rTomVQJfaPVFioeh%2BeFK%2Fh%2BPvO1woA3DDWjUNg3IObw9WHF6bLqzuI9FdIKSlTDa%2BhC%2FhF6HtEUNu%2BFarlum1SNX35IxCXrsCWJOQBnrF7R0aoLDg5GzD0Bxzn7HE2ZqkIv%2FWaAS3UaLM6bddoBR5Gs51tX%2FcZSxuviWK%2F9wbAeWupxSIzUOEaTCC94jCBjqkARSyHG8F5rYGsuErbWJqUXl9eBeoBOn9R%2F08aCMQNE0LlL08tI4UjMroDnt6b%2BHOXHAiMVLoPpr3l6kuWNURbQBMXx5n8Hql4SjW%2FWT42X4UVbV67GdpOWX05CPWxA0jbtl%2Bu%2FODuahrBhKsnkCDWWhS8fiTFrCCuAYW6Q9L2bnbx43XTgeiV0myHQiGzpmAir50Iib%2FuyD3%2F09shZuwGsOdyAV6&X-Amz-Signature=bfda7e568e606d94a636648fdac0bf85d4b710e88f536e2102ebf3d0845f2b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
