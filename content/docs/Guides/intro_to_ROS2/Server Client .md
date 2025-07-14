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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623X7XSCF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCAt7qtZvhi%2Fgoq7uhId%2B%2B438h4r%2Bw1iwFc7cFtA8eJ%2BQIhALCfwS%2F3HFqeUzDpAWqBJn2r451W%2F4TK4zriT2qTxbhWKv8DCCcQABoMNjM3NDIzMTgzODA1IgwsZhhEDezqvHlvtpQq3AM1GxMnbFe54u5cOvHMCucRTIe8SQIhH7K1F%2BfECAgsyBTsW5lI7wX5m546p0tAOSKwa6n2BCUk44z4Mq63EoKU5ZIM%2BCGEBE0vuK4ShOrSFY2a1EWtIpO143WhEyJdJmaFzafXP4zHrG1fBgYBVouCphpNCyJgSn2nFuVVBRygESYnySHsQhWwRT1ggn%2BwqtU%2Bx5OEA35al7pmOHdBF08y0wPWwlo0AuwL2sjN5c9R3cBM6%2Fm0tE%2Fc5i4oIwGl6s2x3uzjZ6Do6aQjiCfv9q9gGyqqQVytLn5RVuxRttP%2FOGiiTtdrPVCVZ%2B2y7fbZQKTO3%2FXncRQGcwsK%2B7xq0Z%2FGbUCpcCINwEmWBmeSlqGclTyHpM%2FKCXCqmoIQSMbJM3B1kIFdc8OF%2FoMSl07K25nQxeEWmbLKHUrygBHIk%2BxaHtre85s2ePq3zSQYbh17A8LuxD%2FUreLUKCG7herrwMSX7VnEr7PG7zG64Yx3mnTwSSnUP1MULxjvBxGOWs6zfQnGMvzrtN%2BRoUM%2FmpQsGERuxKzEVQMI%2F%2FR0fJCARXv%2FsDy0gHX66mja00MZ6s%2FWdGZxzI2VWWDrJKI4cue%2BOv8Shw4kQmtM%2Beee0yslCTvlGjFTsW%2B7%2BB4UpGtXNjDwsNLDBjqkAX35F5nBipyjH2Plrijzm5AIsyVpMC60XGcL%2BaYbPJ3Tb9nkYqTHMFaCqGzBeMkivfQ7nk4fmxQG3JNIX0IJUCgrbAj8hyQgeHOjBQz4iMycrxhwVzXFjHXVePnqn%2F2zlZr%2FHPbvT6E5he0ODsG8XWaPcp%2BIM%2FPtwW2DSO4%2Fsetr%2FW4hQyGvIvd%2FI4q6dcOYFCN8Ss0OjOJkO5tSKmYOIrCIhFTK&X-Amz-Signature=e8d9f0816844c8ef9592d001de443edd7e92e627c04ced6b7ffa80af63af53fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623X7XSCF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCAt7qtZvhi%2Fgoq7uhId%2B%2B438h4r%2Bw1iwFc7cFtA8eJ%2BQIhALCfwS%2F3HFqeUzDpAWqBJn2r451W%2F4TK4zriT2qTxbhWKv8DCCcQABoMNjM3NDIzMTgzODA1IgwsZhhEDezqvHlvtpQq3AM1GxMnbFe54u5cOvHMCucRTIe8SQIhH7K1F%2BfECAgsyBTsW5lI7wX5m546p0tAOSKwa6n2BCUk44z4Mq63EoKU5ZIM%2BCGEBE0vuK4ShOrSFY2a1EWtIpO143WhEyJdJmaFzafXP4zHrG1fBgYBVouCphpNCyJgSn2nFuVVBRygESYnySHsQhWwRT1ggn%2BwqtU%2Bx5OEA35al7pmOHdBF08y0wPWwlo0AuwL2sjN5c9R3cBM6%2Fm0tE%2Fc5i4oIwGl6s2x3uzjZ6Do6aQjiCfv9q9gGyqqQVytLn5RVuxRttP%2FOGiiTtdrPVCVZ%2B2y7fbZQKTO3%2FXncRQGcwsK%2B7xq0Z%2FGbUCpcCINwEmWBmeSlqGclTyHpM%2FKCXCqmoIQSMbJM3B1kIFdc8OF%2FoMSl07K25nQxeEWmbLKHUrygBHIk%2BxaHtre85s2ePq3zSQYbh17A8LuxD%2FUreLUKCG7herrwMSX7VnEr7PG7zG64Yx3mnTwSSnUP1MULxjvBxGOWs6zfQnGMvzrtN%2BRoUM%2FmpQsGERuxKzEVQMI%2F%2FR0fJCARXv%2FsDy0gHX66mja00MZ6s%2FWdGZxzI2VWWDrJKI4cue%2BOv8Shw4kQmtM%2Beee0yslCTvlGjFTsW%2B7%2BB4UpGtXNjDwsNLDBjqkAX35F5nBipyjH2Plrijzm5AIsyVpMC60XGcL%2BaYbPJ3Tb9nkYqTHMFaCqGzBeMkivfQ7nk4fmxQG3JNIX0IJUCgrbAj8hyQgeHOjBQz4iMycrxhwVzXFjHXVePnqn%2F2zlZr%2FHPbvT6E5he0ODsG8XWaPcp%2BIM%2FPtwW2DSO4%2Fsetr%2FW4hQyGvIvd%2FI4q6dcOYFCN8Ss0OjOJkO5tSKmYOIrCIhFTK&X-Amz-Signature=97b4cddc88624ac894f0e44468fa68956ffb363601bab094e5bda3c9a15d6b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623X7XSCF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCAt7qtZvhi%2Fgoq7uhId%2B%2B438h4r%2Bw1iwFc7cFtA8eJ%2BQIhALCfwS%2F3HFqeUzDpAWqBJn2r451W%2F4TK4zriT2qTxbhWKv8DCCcQABoMNjM3NDIzMTgzODA1IgwsZhhEDezqvHlvtpQq3AM1GxMnbFe54u5cOvHMCucRTIe8SQIhH7K1F%2BfECAgsyBTsW5lI7wX5m546p0tAOSKwa6n2BCUk44z4Mq63EoKU5ZIM%2BCGEBE0vuK4ShOrSFY2a1EWtIpO143WhEyJdJmaFzafXP4zHrG1fBgYBVouCphpNCyJgSn2nFuVVBRygESYnySHsQhWwRT1ggn%2BwqtU%2Bx5OEA35al7pmOHdBF08y0wPWwlo0AuwL2sjN5c9R3cBM6%2Fm0tE%2Fc5i4oIwGl6s2x3uzjZ6Do6aQjiCfv9q9gGyqqQVytLn5RVuxRttP%2FOGiiTtdrPVCVZ%2B2y7fbZQKTO3%2FXncRQGcwsK%2B7xq0Z%2FGbUCpcCINwEmWBmeSlqGclTyHpM%2FKCXCqmoIQSMbJM3B1kIFdc8OF%2FoMSl07K25nQxeEWmbLKHUrygBHIk%2BxaHtre85s2ePq3zSQYbh17A8LuxD%2FUreLUKCG7herrwMSX7VnEr7PG7zG64Yx3mnTwSSnUP1MULxjvBxGOWs6zfQnGMvzrtN%2BRoUM%2FmpQsGERuxKzEVQMI%2F%2FR0fJCARXv%2FsDy0gHX66mja00MZ6s%2FWdGZxzI2VWWDrJKI4cue%2BOv8Shw4kQmtM%2Beee0yslCTvlGjFTsW%2B7%2BB4UpGtXNjDwsNLDBjqkAX35F5nBipyjH2Plrijzm5AIsyVpMC60XGcL%2BaYbPJ3Tb9nkYqTHMFaCqGzBeMkivfQ7nk4fmxQG3JNIX0IJUCgrbAj8hyQgeHOjBQz4iMycrxhwVzXFjHXVePnqn%2F2zlZr%2FHPbvT6E5he0ODsG8XWaPcp%2BIM%2FPtwW2DSO4%2Fsetr%2FW4hQyGvIvd%2FI4q6dcOYFCN8Ss0OjOJkO5tSKmYOIrCIhFTK&X-Amz-Signature=86c08f892e02ef01a3521e78feabd35bbd98284b3ca5b6f0e577c0e48831f771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623X7XSCF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCAt7qtZvhi%2Fgoq7uhId%2B%2B438h4r%2Bw1iwFc7cFtA8eJ%2BQIhALCfwS%2F3HFqeUzDpAWqBJn2r451W%2F4TK4zriT2qTxbhWKv8DCCcQABoMNjM3NDIzMTgzODA1IgwsZhhEDezqvHlvtpQq3AM1GxMnbFe54u5cOvHMCucRTIe8SQIhH7K1F%2BfECAgsyBTsW5lI7wX5m546p0tAOSKwa6n2BCUk44z4Mq63EoKU5ZIM%2BCGEBE0vuK4ShOrSFY2a1EWtIpO143WhEyJdJmaFzafXP4zHrG1fBgYBVouCphpNCyJgSn2nFuVVBRygESYnySHsQhWwRT1ggn%2BwqtU%2Bx5OEA35al7pmOHdBF08y0wPWwlo0AuwL2sjN5c9R3cBM6%2Fm0tE%2Fc5i4oIwGl6s2x3uzjZ6Do6aQjiCfv9q9gGyqqQVytLn5RVuxRttP%2FOGiiTtdrPVCVZ%2B2y7fbZQKTO3%2FXncRQGcwsK%2B7xq0Z%2FGbUCpcCINwEmWBmeSlqGclTyHpM%2FKCXCqmoIQSMbJM3B1kIFdc8OF%2FoMSl07K25nQxeEWmbLKHUrygBHIk%2BxaHtre85s2ePq3zSQYbh17A8LuxD%2FUreLUKCG7herrwMSX7VnEr7PG7zG64Yx3mnTwSSnUP1MULxjvBxGOWs6zfQnGMvzrtN%2BRoUM%2FmpQsGERuxKzEVQMI%2F%2FR0fJCARXv%2FsDy0gHX66mja00MZ6s%2FWdGZxzI2VWWDrJKI4cue%2BOv8Shw4kQmtM%2Beee0yslCTvlGjFTsW%2B7%2BB4UpGtXNjDwsNLDBjqkAX35F5nBipyjH2Plrijzm5AIsyVpMC60XGcL%2BaYbPJ3Tb9nkYqTHMFaCqGzBeMkivfQ7nk4fmxQG3JNIX0IJUCgrbAj8hyQgeHOjBQz4iMycrxhwVzXFjHXVePnqn%2F2zlZr%2FHPbvT6E5he0ODsG8XWaPcp%2BIM%2FPtwW2DSO4%2Fsetr%2FW4hQyGvIvd%2FI4q6dcOYFCN8Ss0OjOJkO5tSKmYOIrCIhFTK&X-Amz-Signature=b32fb46518e04a0d575c4be50ec6f2a15e21232451237f79e6a02f43eb8adb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623X7XSCF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCAt7qtZvhi%2Fgoq7uhId%2B%2B438h4r%2Bw1iwFc7cFtA8eJ%2BQIhALCfwS%2F3HFqeUzDpAWqBJn2r451W%2F4TK4zriT2qTxbhWKv8DCCcQABoMNjM3NDIzMTgzODA1IgwsZhhEDezqvHlvtpQq3AM1GxMnbFe54u5cOvHMCucRTIe8SQIhH7K1F%2BfECAgsyBTsW5lI7wX5m546p0tAOSKwa6n2BCUk44z4Mq63EoKU5ZIM%2BCGEBE0vuK4ShOrSFY2a1EWtIpO143WhEyJdJmaFzafXP4zHrG1fBgYBVouCphpNCyJgSn2nFuVVBRygESYnySHsQhWwRT1ggn%2BwqtU%2Bx5OEA35al7pmOHdBF08y0wPWwlo0AuwL2sjN5c9R3cBM6%2Fm0tE%2Fc5i4oIwGl6s2x3uzjZ6Do6aQjiCfv9q9gGyqqQVytLn5RVuxRttP%2FOGiiTtdrPVCVZ%2B2y7fbZQKTO3%2FXncRQGcwsK%2B7xq0Z%2FGbUCpcCINwEmWBmeSlqGclTyHpM%2FKCXCqmoIQSMbJM3B1kIFdc8OF%2FoMSl07K25nQxeEWmbLKHUrygBHIk%2BxaHtre85s2ePq3zSQYbh17A8LuxD%2FUreLUKCG7herrwMSX7VnEr7PG7zG64Yx3mnTwSSnUP1MULxjvBxGOWs6zfQnGMvzrtN%2BRoUM%2FmpQsGERuxKzEVQMI%2F%2FR0fJCARXv%2FsDy0gHX66mja00MZ6s%2FWdGZxzI2VWWDrJKI4cue%2BOv8Shw4kQmtM%2Beee0yslCTvlGjFTsW%2B7%2BB4UpGtXNjDwsNLDBjqkAX35F5nBipyjH2Plrijzm5AIsyVpMC60XGcL%2BaYbPJ3Tb9nkYqTHMFaCqGzBeMkivfQ7nk4fmxQG3JNIX0IJUCgrbAj8hyQgeHOjBQz4iMycrxhwVzXFjHXVePnqn%2F2zlZr%2FHPbvT6E5he0ODsG8XWaPcp%2BIM%2FPtwW2DSO4%2Fsetr%2FW4hQyGvIvd%2FI4q6dcOYFCN8Ss0OjOJkO5tSKmYOIrCIhFTK&X-Amz-Signature=80ac48a1b5ec162c1bcbfe291d6d991880803623cebcef8ac8938e5d4bf24dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
