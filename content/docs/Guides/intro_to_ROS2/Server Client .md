---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J5AU7C%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICNHSOg8qM3b5tG%2FRMMB7KwXFXPt6Os4JYlaBRKcb4KKAiEAn%2FyJWo9iot17KobhhixzQsFbmI4Atc8n8jCmpXUP514q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDA4P5wS6q7JCH%2BfuKCrcA5Olk4CizkY4vpGlNlIepWukv26qbTsQkhcF7cN0m%2BEezkd66pv6a4RNDrHEZAS5CGHZT8qC1wieQUGo4HhzFEuES1RWqZn3y7f34EkYEPgNbYr6ZLvRqmk5tGYep1CVc7Qczoc9NQkRgUeonZuPBFpPq7ZTXoRj7d%2FpQPNMQQ6w95YsjMuiqg2zJzx1ES93FSGV9RzadN6jYxUSwMMj16k0ziRpUkQasbSofxedK0YcvWjiYfsnddWxPANjZGPElBwfRx9cxQ%2BeNExiG%2Benueisgu1qNd9HbMCeFZGsgbEC2dllJQeDnnCzFgmctEQYjWdV3QNJrvwJFRRWz1t229QGPjMKfF5v2HpxI705OpcbRyl%2B%2BZaak9F3Cw3az5FgoNfAF7%2Fyu6tnNVap6%2BOWsgqkdSZE7iu3CHQi%2BQdGYxaSDz6WxWSczrlp9LSEmsuBP%2FIY5vTTsLud8FwktRUnsx5oZ2h5S1bG3zmWXaq4m8hUIThqLVrj2h80Y9%2Fs1PX3GQDRcjhiQBm2J3%2B0Hm%2BlPrEy36CGI9MicE%2BxKx8WRqGRvAWX3AFq6WZZ1ZjWPgoGuuG7Vqq4a8V%2Fj6SOAntZU%2B6Pt611cqA9XVbocEGoIL0oH9Afp3Xxp1cBMybYMPT8%2BcQGOqUBtMSDDylzNwwTuMVspBi2mgoBuLsjnp%2Bk4CKao6im2C7T%2FfACjy6Zl4p1yeZDB9ImhG6XQc5V6ohFrcpKqSGS12ewGqjGB%2BU6AdIJ0xQTIIFD0IiTW6C39Ru2vxUv0CqwQOq8%2Fcw0zt%2FkklYgycwKGONq3k2yTMsMHgEoAIpzXhsQvbXAwWZ8x7ApIOZVp4tFexqhXmWpLZ7p53UZfYepLgamMW1D&X-Amz-Signature=5ab2314a6286ded4d26e71cae0264b749a228cb5425068e69cac07ada780b409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J5AU7C%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICNHSOg8qM3b5tG%2FRMMB7KwXFXPt6Os4JYlaBRKcb4KKAiEAn%2FyJWo9iot17KobhhixzQsFbmI4Atc8n8jCmpXUP514q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDA4P5wS6q7JCH%2BfuKCrcA5Olk4CizkY4vpGlNlIepWukv26qbTsQkhcF7cN0m%2BEezkd66pv6a4RNDrHEZAS5CGHZT8qC1wieQUGo4HhzFEuES1RWqZn3y7f34EkYEPgNbYr6ZLvRqmk5tGYep1CVc7Qczoc9NQkRgUeonZuPBFpPq7ZTXoRj7d%2FpQPNMQQ6w95YsjMuiqg2zJzx1ES93FSGV9RzadN6jYxUSwMMj16k0ziRpUkQasbSofxedK0YcvWjiYfsnddWxPANjZGPElBwfRx9cxQ%2BeNExiG%2Benueisgu1qNd9HbMCeFZGsgbEC2dllJQeDnnCzFgmctEQYjWdV3QNJrvwJFRRWz1t229QGPjMKfF5v2HpxI705OpcbRyl%2B%2BZaak9F3Cw3az5FgoNfAF7%2Fyu6tnNVap6%2BOWsgqkdSZE7iu3CHQi%2BQdGYxaSDz6WxWSczrlp9LSEmsuBP%2FIY5vTTsLud8FwktRUnsx5oZ2h5S1bG3zmWXaq4m8hUIThqLVrj2h80Y9%2Fs1PX3GQDRcjhiQBm2J3%2B0Hm%2BlPrEy36CGI9MicE%2BxKx8WRqGRvAWX3AFq6WZZ1ZjWPgoGuuG7Vqq4a8V%2Fj6SOAntZU%2B6Pt611cqA9XVbocEGoIL0oH9Afp3Xxp1cBMybYMPT8%2BcQGOqUBtMSDDylzNwwTuMVspBi2mgoBuLsjnp%2Bk4CKao6im2C7T%2FfACjy6Zl4p1yeZDB9ImhG6XQc5V6ohFrcpKqSGS12ewGqjGB%2BU6AdIJ0xQTIIFD0IiTW6C39Ru2vxUv0CqwQOq8%2Fcw0zt%2FkklYgycwKGONq3k2yTMsMHgEoAIpzXhsQvbXAwWZ8x7ApIOZVp4tFexqhXmWpLZ7p53UZfYepLgamMW1D&X-Amz-Signature=b21b6e6a3280d97650e5782fae5987edda6f7b386b2f6962e53ed23007fa388b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J5AU7C%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICNHSOg8qM3b5tG%2FRMMB7KwXFXPt6Os4JYlaBRKcb4KKAiEAn%2FyJWo9iot17KobhhixzQsFbmI4Atc8n8jCmpXUP514q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDA4P5wS6q7JCH%2BfuKCrcA5Olk4CizkY4vpGlNlIepWukv26qbTsQkhcF7cN0m%2BEezkd66pv6a4RNDrHEZAS5CGHZT8qC1wieQUGo4HhzFEuES1RWqZn3y7f34EkYEPgNbYr6ZLvRqmk5tGYep1CVc7Qczoc9NQkRgUeonZuPBFpPq7ZTXoRj7d%2FpQPNMQQ6w95YsjMuiqg2zJzx1ES93FSGV9RzadN6jYxUSwMMj16k0ziRpUkQasbSofxedK0YcvWjiYfsnddWxPANjZGPElBwfRx9cxQ%2BeNExiG%2Benueisgu1qNd9HbMCeFZGsgbEC2dllJQeDnnCzFgmctEQYjWdV3QNJrvwJFRRWz1t229QGPjMKfF5v2HpxI705OpcbRyl%2B%2BZaak9F3Cw3az5FgoNfAF7%2Fyu6tnNVap6%2BOWsgqkdSZE7iu3CHQi%2BQdGYxaSDz6WxWSczrlp9LSEmsuBP%2FIY5vTTsLud8FwktRUnsx5oZ2h5S1bG3zmWXaq4m8hUIThqLVrj2h80Y9%2Fs1PX3GQDRcjhiQBm2J3%2B0Hm%2BlPrEy36CGI9MicE%2BxKx8WRqGRvAWX3AFq6WZZ1ZjWPgoGuuG7Vqq4a8V%2Fj6SOAntZU%2B6Pt611cqA9XVbocEGoIL0oH9Afp3Xxp1cBMybYMPT8%2BcQGOqUBtMSDDylzNwwTuMVspBi2mgoBuLsjnp%2Bk4CKao6im2C7T%2FfACjy6Zl4p1yeZDB9ImhG6XQc5V6ohFrcpKqSGS12ewGqjGB%2BU6AdIJ0xQTIIFD0IiTW6C39Ru2vxUv0CqwQOq8%2Fcw0zt%2FkklYgycwKGONq3k2yTMsMHgEoAIpzXhsQvbXAwWZ8x7ApIOZVp4tFexqhXmWpLZ7p53UZfYepLgamMW1D&X-Amz-Signature=999722bb4d22f75d90b02a2fa049b3a5c873c153e1b533adde68fddbc84d7ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J5AU7C%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICNHSOg8qM3b5tG%2FRMMB7KwXFXPt6Os4JYlaBRKcb4KKAiEAn%2FyJWo9iot17KobhhixzQsFbmI4Atc8n8jCmpXUP514q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDA4P5wS6q7JCH%2BfuKCrcA5Olk4CizkY4vpGlNlIepWukv26qbTsQkhcF7cN0m%2BEezkd66pv6a4RNDrHEZAS5CGHZT8qC1wieQUGo4HhzFEuES1RWqZn3y7f34EkYEPgNbYr6ZLvRqmk5tGYep1CVc7Qczoc9NQkRgUeonZuPBFpPq7ZTXoRj7d%2FpQPNMQQ6w95YsjMuiqg2zJzx1ES93FSGV9RzadN6jYxUSwMMj16k0ziRpUkQasbSofxedK0YcvWjiYfsnddWxPANjZGPElBwfRx9cxQ%2BeNExiG%2Benueisgu1qNd9HbMCeFZGsgbEC2dllJQeDnnCzFgmctEQYjWdV3QNJrvwJFRRWz1t229QGPjMKfF5v2HpxI705OpcbRyl%2B%2BZaak9F3Cw3az5FgoNfAF7%2Fyu6tnNVap6%2BOWsgqkdSZE7iu3CHQi%2BQdGYxaSDz6WxWSczrlp9LSEmsuBP%2FIY5vTTsLud8FwktRUnsx5oZ2h5S1bG3zmWXaq4m8hUIThqLVrj2h80Y9%2Fs1PX3GQDRcjhiQBm2J3%2B0Hm%2BlPrEy36CGI9MicE%2BxKx8WRqGRvAWX3AFq6WZZ1ZjWPgoGuuG7Vqq4a8V%2Fj6SOAntZU%2B6Pt611cqA9XVbocEGoIL0oH9Afp3Xxp1cBMybYMPT8%2BcQGOqUBtMSDDylzNwwTuMVspBi2mgoBuLsjnp%2Bk4CKao6im2C7T%2FfACjy6Zl4p1yeZDB9ImhG6XQc5V6ohFrcpKqSGS12ewGqjGB%2BU6AdIJ0xQTIIFD0IiTW6C39Ru2vxUv0CqwQOq8%2Fcw0zt%2FkklYgycwKGONq3k2yTMsMHgEoAIpzXhsQvbXAwWZ8x7ApIOZVp4tFexqhXmWpLZ7p53UZfYepLgamMW1D&X-Amz-Signature=a29d3f188144576f301b57b851d2c9dcc010c326fa7771d6a8e0487d3fa171b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J5AU7C%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICNHSOg8qM3b5tG%2FRMMB7KwXFXPt6Os4JYlaBRKcb4KKAiEAn%2FyJWo9iot17KobhhixzQsFbmI4Atc8n8jCmpXUP514q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDA4P5wS6q7JCH%2BfuKCrcA5Olk4CizkY4vpGlNlIepWukv26qbTsQkhcF7cN0m%2BEezkd66pv6a4RNDrHEZAS5CGHZT8qC1wieQUGo4HhzFEuES1RWqZn3y7f34EkYEPgNbYr6ZLvRqmk5tGYep1CVc7Qczoc9NQkRgUeonZuPBFpPq7ZTXoRj7d%2FpQPNMQQ6w95YsjMuiqg2zJzx1ES93FSGV9RzadN6jYxUSwMMj16k0ziRpUkQasbSofxedK0YcvWjiYfsnddWxPANjZGPElBwfRx9cxQ%2BeNExiG%2Benueisgu1qNd9HbMCeFZGsgbEC2dllJQeDnnCzFgmctEQYjWdV3QNJrvwJFRRWz1t229QGPjMKfF5v2HpxI705OpcbRyl%2B%2BZaak9F3Cw3az5FgoNfAF7%2Fyu6tnNVap6%2BOWsgqkdSZE7iu3CHQi%2BQdGYxaSDz6WxWSczrlp9LSEmsuBP%2FIY5vTTsLud8FwktRUnsx5oZ2h5S1bG3zmWXaq4m8hUIThqLVrj2h80Y9%2Fs1PX3GQDRcjhiQBm2J3%2B0Hm%2BlPrEy36CGI9MicE%2BxKx8WRqGRvAWX3AFq6WZZ1ZjWPgoGuuG7Vqq4a8V%2Fj6SOAntZU%2B6Pt611cqA9XVbocEGoIL0oH9Afp3Xxp1cBMybYMPT8%2BcQGOqUBtMSDDylzNwwTuMVspBi2mgoBuLsjnp%2Bk4CKao6im2C7T%2FfACjy6Zl4p1yeZDB9ImhG6XQc5V6ohFrcpKqSGS12ewGqjGB%2BU6AdIJ0xQTIIFD0IiTW6C39Ru2vxUv0CqwQOq8%2Fcw0zt%2FkklYgycwKGONq3k2yTMsMHgEoAIpzXhsQvbXAwWZ8x7ApIOZVp4tFexqhXmWpLZ7p53UZfYepLgamMW1D&X-Amz-Signature=cd8fae567797f2d3ffd938e512fc1309294a83fc63cfd41ef981dc127754b7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
