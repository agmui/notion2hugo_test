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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LJVWG6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC58MNlwEb%2FK7NuOnxrl20YEi2AvPJv9753fattM%2B26RQIhAJT78qtC1fvAOcP3J0LrLaP4uLXBtpbAIoUrsAdyCCozKv8DCDAQABoMNjM3NDIzMTgzODA1IgxypX6Nlp7xfT6qqqAq3APH2m7o0WDo9bM0ayKUlV1twbAHm%2FA3PhB8Zt2zHonQzLdEvaJRG7ARAdrEKJvi8904hqzCUYPnTip81UZaGX74plWr4Dsf9%2FSoj7832nOFaETeKO8yn%2BYVFY%2F6ZNLhXYiN2ltTKnuVI%2BgzYg30Y6PHUtSzxkwdtoiFyXBxYFJsGBD2dqv5qMdEMPejK3fQ2nA6hyUWswYYFx%2BR%2BO%2Bqy9cKVc71JbXoDZo1yIQGv2HQt3LIDtlOCm7PAKFMdSZS6lFRWy20JH%2BeHD3sr%2FFdEXW2czkbqd4cPluMqhRklWNt63S5cXoLaT66vba3ruCk8i9%2BfRbj9%2BR7uNMHCtxjCY0GjB4SVdF9%2Bd2nWAcyGKSSg%2BqW4D98zlkZh1cwFYm%2B%2BFQrytbDgve7h6l%2B1fbcH9dksu5QO1QrDbc%2FxJ8IA2qgYADLAX8vSlypG7CZPQP4tnw%2FFcpRayYYrppe8TzDxr2llU5%2FhlFo58z%2FtcZaKnXCxfKKHP6Oc1%2Bdh6l%2F373d9%2BwLJcJ5MJWj1Z%2BpeA9FMzfsoIJdtvG3jo74%2FO8zKvLrLgtX54BaxslkPeOK0xQle5a7wXr9iItbYO7F6k3f9SwHzzIDtEgHIBjp3Oe1RIhpbQITUm95xObGqrZj3zDn3szBBjqkAdI8b4npINwp2Vj%2FEEguZZ6SfZHg2VC0KOMWSVRQyT%2FM2epr%2Bsu1bEZStSk6WrkoL0joR3Sa%2B4oKVCbVuo1FQZyz8oDI7dYlShlCdSoxoMRSQ%2BsubzU1J9Hc6G%2BQMAa2j6OT95NCJ0NTdQrGexgXd2rjrCZaClRUbHRcbtBjLtozDMil%2B3bWyswPhJNtSUMGalBggVN%2FQLCVih4A49tpcyyhyCrf&X-Amz-Signature=39a9067dd95b95e6494e83a078b10312147b53bcdbb329a8cfd1c2727075b837&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LJVWG6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC58MNlwEb%2FK7NuOnxrl20YEi2AvPJv9753fattM%2B26RQIhAJT78qtC1fvAOcP3J0LrLaP4uLXBtpbAIoUrsAdyCCozKv8DCDAQABoMNjM3NDIzMTgzODA1IgxypX6Nlp7xfT6qqqAq3APH2m7o0WDo9bM0ayKUlV1twbAHm%2FA3PhB8Zt2zHonQzLdEvaJRG7ARAdrEKJvi8904hqzCUYPnTip81UZaGX74plWr4Dsf9%2FSoj7832nOFaETeKO8yn%2BYVFY%2F6ZNLhXYiN2ltTKnuVI%2BgzYg30Y6PHUtSzxkwdtoiFyXBxYFJsGBD2dqv5qMdEMPejK3fQ2nA6hyUWswYYFx%2BR%2BO%2Bqy9cKVc71JbXoDZo1yIQGv2HQt3LIDtlOCm7PAKFMdSZS6lFRWy20JH%2BeHD3sr%2FFdEXW2czkbqd4cPluMqhRklWNt63S5cXoLaT66vba3ruCk8i9%2BfRbj9%2BR7uNMHCtxjCY0GjB4SVdF9%2Bd2nWAcyGKSSg%2BqW4D98zlkZh1cwFYm%2B%2BFQrytbDgve7h6l%2B1fbcH9dksu5QO1QrDbc%2FxJ8IA2qgYADLAX8vSlypG7CZPQP4tnw%2FFcpRayYYrppe8TzDxr2llU5%2FhlFo58z%2FtcZaKnXCxfKKHP6Oc1%2Bdh6l%2F373d9%2BwLJcJ5MJWj1Z%2BpeA9FMzfsoIJdtvG3jo74%2FO8zKvLrLgtX54BaxslkPeOK0xQle5a7wXr9iItbYO7F6k3f9SwHzzIDtEgHIBjp3Oe1RIhpbQITUm95xObGqrZj3zDn3szBBjqkAdI8b4npINwp2Vj%2FEEguZZ6SfZHg2VC0KOMWSVRQyT%2FM2epr%2Bsu1bEZStSk6WrkoL0joR3Sa%2B4oKVCbVuo1FQZyz8oDI7dYlShlCdSoxoMRSQ%2BsubzU1J9Hc6G%2BQMAa2j6OT95NCJ0NTdQrGexgXd2rjrCZaClRUbHRcbtBjLtozDMil%2B3bWyswPhJNtSUMGalBggVN%2FQLCVih4A49tpcyyhyCrf&X-Amz-Signature=14b38b9439077af2ad16d22c99c43445a3ca78e71832c48cf09698b6024ea229&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LJVWG6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC58MNlwEb%2FK7NuOnxrl20YEi2AvPJv9753fattM%2B26RQIhAJT78qtC1fvAOcP3J0LrLaP4uLXBtpbAIoUrsAdyCCozKv8DCDAQABoMNjM3NDIzMTgzODA1IgxypX6Nlp7xfT6qqqAq3APH2m7o0WDo9bM0ayKUlV1twbAHm%2FA3PhB8Zt2zHonQzLdEvaJRG7ARAdrEKJvi8904hqzCUYPnTip81UZaGX74plWr4Dsf9%2FSoj7832nOFaETeKO8yn%2BYVFY%2F6ZNLhXYiN2ltTKnuVI%2BgzYg30Y6PHUtSzxkwdtoiFyXBxYFJsGBD2dqv5qMdEMPejK3fQ2nA6hyUWswYYFx%2BR%2BO%2Bqy9cKVc71JbXoDZo1yIQGv2HQt3LIDtlOCm7PAKFMdSZS6lFRWy20JH%2BeHD3sr%2FFdEXW2czkbqd4cPluMqhRklWNt63S5cXoLaT66vba3ruCk8i9%2BfRbj9%2BR7uNMHCtxjCY0GjB4SVdF9%2Bd2nWAcyGKSSg%2BqW4D98zlkZh1cwFYm%2B%2BFQrytbDgve7h6l%2B1fbcH9dksu5QO1QrDbc%2FxJ8IA2qgYADLAX8vSlypG7CZPQP4tnw%2FFcpRayYYrppe8TzDxr2llU5%2FhlFo58z%2FtcZaKnXCxfKKHP6Oc1%2Bdh6l%2F373d9%2BwLJcJ5MJWj1Z%2BpeA9FMzfsoIJdtvG3jo74%2FO8zKvLrLgtX54BaxslkPeOK0xQle5a7wXr9iItbYO7F6k3f9SwHzzIDtEgHIBjp3Oe1RIhpbQITUm95xObGqrZj3zDn3szBBjqkAdI8b4npINwp2Vj%2FEEguZZ6SfZHg2VC0KOMWSVRQyT%2FM2epr%2Bsu1bEZStSk6WrkoL0joR3Sa%2B4oKVCbVuo1FQZyz8oDI7dYlShlCdSoxoMRSQ%2BsubzU1J9Hc6G%2BQMAa2j6OT95NCJ0NTdQrGexgXd2rjrCZaClRUbHRcbtBjLtozDMil%2B3bWyswPhJNtSUMGalBggVN%2FQLCVih4A49tpcyyhyCrf&X-Amz-Signature=f6c745e3ad699e90b7a7e1ad4d2ee54ca8c204067ad7cef744d6d8e24973d24d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LJVWG6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC58MNlwEb%2FK7NuOnxrl20YEi2AvPJv9753fattM%2B26RQIhAJT78qtC1fvAOcP3J0LrLaP4uLXBtpbAIoUrsAdyCCozKv8DCDAQABoMNjM3NDIzMTgzODA1IgxypX6Nlp7xfT6qqqAq3APH2m7o0WDo9bM0ayKUlV1twbAHm%2FA3PhB8Zt2zHonQzLdEvaJRG7ARAdrEKJvi8904hqzCUYPnTip81UZaGX74plWr4Dsf9%2FSoj7832nOFaETeKO8yn%2BYVFY%2F6ZNLhXYiN2ltTKnuVI%2BgzYg30Y6PHUtSzxkwdtoiFyXBxYFJsGBD2dqv5qMdEMPejK3fQ2nA6hyUWswYYFx%2BR%2BO%2Bqy9cKVc71JbXoDZo1yIQGv2HQt3LIDtlOCm7PAKFMdSZS6lFRWy20JH%2BeHD3sr%2FFdEXW2czkbqd4cPluMqhRklWNt63S5cXoLaT66vba3ruCk8i9%2BfRbj9%2BR7uNMHCtxjCY0GjB4SVdF9%2Bd2nWAcyGKSSg%2BqW4D98zlkZh1cwFYm%2B%2BFQrytbDgve7h6l%2B1fbcH9dksu5QO1QrDbc%2FxJ8IA2qgYADLAX8vSlypG7CZPQP4tnw%2FFcpRayYYrppe8TzDxr2llU5%2FhlFo58z%2FtcZaKnXCxfKKHP6Oc1%2Bdh6l%2F373d9%2BwLJcJ5MJWj1Z%2BpeA9FMzfsoIJdtvG3jo74%2FO8zKvLrLgtX54BaxslkPeOK0xQle5a7wXr9iItbYO7F6k3f9SwHzzIDtEgHIBjp3Oe1RIhpbQITUm95xObGqrZj3zDn3szBBjqkAdI8b4npINwp2Vj%2FEEguZZ6SfZHg2VC0KOMWSVRQyT%2FM2epr%2Bsu1bEZStSk6WrkoL0joR3Sa%2B4oKVCbVuo1FQZyz8oDI7dYlShlCdSoxoMRSQ%2BsubzU1J9Hc6G%2BQMAa2j6OT95NCJ0NTdQrGexgXd2rjrCZaClRUbHRcbtBjLtozDMil%2B3bWyswPhJNtSUMGalBggVN%2FQLCVih4A49tpcyyhyCrf&X-Amz-Signature=844355406a18ff86b0c54b7671ee42796a421764748d7bf57d4bf39958cf1c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LJVWG6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC58MNlwEb%2FK7NuOnxrl20YEi2AvPJv9753fattM%2B26RQIhAJT78qtC1fvAOcP3J0LrLaP4uLXBtpbAIoUrsAdyCCozKv8DCDAQABoMNjM3NDIzMTgzODA1IgxypX6Nlp7xfT6qqqAq3APH2m7o0WDo9bM0ayKUlV1twbAHm%2FA3PhB8Zt2zHonQzLdEvaJRG7ARAdrEKJvi8904hqzCUYPnTip81UZaGX74plWr4Dsf9%2FSoj7832nOFaETeKO8yn%2BYVFY%2F6ZNLhXYiN2ltTKnuVI%2BgzYg30Y6PHUtSzxkwdtoiFyXBxYFJsGBD2dqv5qMdEMPejK3fQ2nA6hyUWswYYFx%2BR%2BO%2Bqy9cKVc71JbXoDZo1yIQGv2HQt3LIDtlOCm7PAKFMdSZS6lFRWy20JH%2BeHD3sr%2FFdEXW2czkbqd4cPluMqhRklWNt63S5cXoLaT66vba3ruCk8i9%2BfRbj9%2BR7uNMHCtxjCY0GjB4SVdF9%2Bd2nWAcyGKSSg%2BqW4D98zlkZh1cwFYm%2B%2BFQrytbDgve7h6l%2B1fbcH9dksu5QO1QrDbc%2FxJ8IA2qgYADLAX8vSlypG7CZPQP4tnw%2FFcpRayYYrppe8TzDxr2llU5%2FhlFo58z%2FtcZaKnXCxfKKHP6Oc1%2Bdh6l%2F373d9%2BwLJcJ5MJWj1Z%2BpeA9FMzfsoIJdtvG3jo74%2FO8zKvLrLgtX54BaxslkPeOK0xQle5a7wXr9iItbYO7F6k3f9SwHzzIDtEgHIBjp3Oe1RIhpbQITUm95xObGqrZj3zDn3szBBjqkAdI8b4npINwp2Vj%2FEEguZZ6SfZHg2VC0KOMWSVRQyT%2FM2epr%2Bsu1bEZStSk6WrkoL0joR3Sa%2B4oKVCbVuo1FQZyz8oDI7dYlShlCdSoxoMRSQ%2BsubzU1J9Hc6G%2BQMAa2j6OT95NCJ0NTdQrGexgXd2rjrCZaClRUbHRcbtBjLtozDMil%2B3bWyswPhJNtSUMGalBggVN%2FQLCVih4A49tpcyyhyCrf&X-Amz-Signature=8c85c9a22d5cbd8dbda9b989cc3796171c2a884224304ec387c15c8b2f014dda&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
