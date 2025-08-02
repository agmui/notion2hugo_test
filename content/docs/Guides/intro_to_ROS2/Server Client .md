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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YKN5W3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRp1Kavqm1oL2CnPsE8xl9Nt19RNvCQHV7xfqOi1AbOgIhALOxbOUxr1Q%2FjbThBhd2yPkKg8pXichgNpimfO16CR1OKv8DCBYQABoMNjM3NDIzMTgzODA1IgxafDntmONseB%2B7TcYq3AOGGuZscDFOXZUGR08M0FyiE7idsJspLNhbezhoiUc8Y5nZQX%2FazL9DUNMUKCQFV7LJMQCPdWh4jkSVADYGMCy0qUUC6J35QU5ozbEsIXJGb7CfET0A0H%2BP2wUIf4wzFFRIjq5KRX2WWM9B2iEbWZ8d4aWLipNT3RS%2BjB3IiJrjHfgFwY2%2BJWar737hyp2cAgiTwW6vHMByHqL6ikMNPbKR0zJ0eaNyfbxECtpkqhwJxPu4XGizRtH%2Bh2%2BJ5T1mQSZQLnYk9aUWBM0SK7f5AcZQSX4N5tw%2FS1cJs5%2F6DC8DVUqYAJMuOZQ9aeiyjBMUG2tZupR%2B6hvbdfxiYI5rDiI9%2B2ZRZKuFXfXINGeWqQr4zvrs1Xh4ihDQD3KftRj99%2FniTrOXiE2Lcly87o8eLeW7O1cuXEihfJ05iD3CNx%2FqVHkaXEIcP4nYtPYZ%2FEu8TgRHjZHA2vH81HyFRH91Qd7XRPCzdB%2BKujWuMauKIO7sITwyYJ6Q4UanqXCSNIDC%2FY9O4pbF61v8AuNA9K%2F7lnX3fhBHz6V9uml%2BzvhQoQdsQMaIJrWf2YCWnYyZ3wPNLm0rwoqxoeknO7jCdOz8DYN4%2B0uOj4zRh00PsIvGgIE%2BgySKykPPc9pKWGBXuTDZi7jEBjqkAUBSmnrk8avBnsuXxhch6XmYHMnxNF%2Bdg2mUEMn2wsG18O0wOUGpL13sEKz4s%2BICVok9WAxeb8ucuVahLA%2FYMg895qfnBcQkcS74U8qxB4COnjX2vfua3W9YFFDiwwP8ZW0QkhTU5ELWZXE41rXhL56DStMqde2iRgFZVKpYjTenH%2BG57oX%2BjEcGl47kRwgyoa6ilA6i15hGtHQ5MHvRekvY77ly&X-Amz-Signature=172d2900d249db7120bfa394670394244863bcf24172a003403c5fe677c2119d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YKN5W3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRp1Kavqm1oL2CnPsE8xl9Nt19RNvCQHV7xfqOi1AbOgIhALOxbOUxr1Q%2FjbThBhd2yPkKg8pXichgNpimfO16CR1OKv8DCBYQABoMNjM3NDIzMTgzODA1IgxafDntmONseB%2B7TcYq3AOGGuZscDFOXZUGR08M0FyiE7idsJspLNhbezhoiUc8Y5nZQX%2FazL9DUNMUKCQFV7LJMQCPdWh4jkSVADYGMCy0qUUC6J35QU5ozbEsIXJGb7CfET0A0H%2BP2wUIf4wzFFRIjq5KRX2WWM9B2iEbWZ8d4aWLipNT3RS%2BjB3IiJrjHfgFwY2%2BJWar737hyp2cAgiTwW6vHMByHqL6ikMNPbKR0zJ0eaNyfbxECtpkqhwJxPu4XGizRtH%2Bh2%2BJ5T1mQSZQLnYk9aUWBM0SK7f5AcZQSX4N5tw%2FS1cJs5%2F6DC8DVUqYAJMuOZQ9aeiyjBMUG2tZupR%2B6hvbdfxiYI5rDiI9%2B2ZRZKuFXfXINGeWqQr4zvrs1Xh4ihDQD3KftRj99%2FniTrOXiE2Lcly87o8eLeW7O1cuXEihfJ05iD3CNx%2FqVHkaXEIcP4nYtPYZ%2FEu8TgRHjZHA2vH81HyFRH91Qd7XRPCzdB%2BKujWuMauKIO7sITwyYJ6Q4UanqXCSNIDC%2FY9O4pbF61v8AuNA9K%2F7lnX3fhBHz6V9uml%2BzvhQoQdsQMaIJrWf2YCWnYyZ3wPNLm0rwoqxoeknO7jCdOz8DYN4%2B0uOj4zRh00PsIvGgIE%2BgySKykPPc9pKWGBXuTDZi7jEBjqkAUBSmnrk8avBnsuXxhch6XmYHMnxNF%2Bdg2mUEMn2wsG18O0wOUGpL13sEKz4s%2BICVok9WAxeb8ucuVahLA%2FYMg895qfnBcQkcS74U8qxB4COnjX2vfua3W9YFFDiwwP8ZW0QkhTU5ELWZXE41rXhL56DStMqde2iRgFZVKpYjTenH%2BG57oX%2BjEcGl47kRwgyoa6ilA6i15hGtHQ5MHvRekvY77ly&X-Amz-Signature=93d001eddf028bf8339a1cc4aece3cf1e3ed8a7292d533dc8e91695f1a411524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YKN5W3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRp1Kavqm1oL2CnPsE8xl9Nt19RNvCQHV7xfqOi1AbOgIhALOxbOUxr1Q%2FjbThBhd2yPkKg8pXichgNpimfO16CR1OKv8DCBYQABoMNjM3NDIzMTgzODA1IgxafDntmONseB%2B7TcYq3AOGGuZscDFOXZUGR08M0FyiE7idsJspLNhbezhoiUc8Y5nZQX%2FazL9DUNMUKCQFV7LJMQCPdWh4jkSVADYGMCy0qUUC6J35QU5ozbEsIXJGb7CfET0A0H%2BP2wUIf4wzFFRIjq5KRX2WWM9B2iEbWZ8d4aWLipNT3RS%2BjB3IiJrjHfgFwY2%2BJWar737hyp2cAgiTwW6vHMByHqL6ikMNPbKR0zJ0eaNyfbxECtpkqhwJxPu4XGizRtH%2Bh2%2BJ5T1mQSZQLnYk9aUWBM0SK7f5AcZQSX4N5tw%2FS1cJs5%2F6DC8DVUqYAJMuOZQ9aeiyjBMUG2tZupR%2B6hvbdfxiYI5rDiI9%2B2ZRZKuFXfXINGeWqQr4zvrs1Xh4ihDQD3KftRj99%2FniTrOXiE2Lcly87o8eLeW7O1cuXEihfJ05iD3CNx%2FqVHkaXEIcP4nYtPYZ%2FEu8TgRHjZHA2vH81HyFRH91Qd7XRPCzdB%2BKujWuMauKIO7sITwyYJ6Q4UanqXCSNIDC%2FY9O4pbF61v8AuNA9K%2F7lnX3fhBHz6V9uml%2BzvhQoQdsQMaIJrWf2YCWnYyZ3wPNLm0rwoqxoeknO7jCdOz8DYN4%2B0uOj4zRh00PsIvGgIE%2BgySKykPPc9pKWGBXuTDZi7jEBjqkAUBSmnrk8avBnsuXxhch6XmYHMnxNF%2Bdg2mUEMn2wsG18O0wOUGpL13sEKz4s%2BICVok9WAxeb8ucuVahLA%2FYMg895qfnBcQkcS74U8qxB4COnjX2vfua3W9YFFDiwwP8ZW0QkhTU5ELWZXE41rXhL56DStMqde2iRgFZVKpYjTenH%2BG57oX%2BjEcGl47kRwgyoa6ilA6i15hGtHQ5MHvRekvY77ly&X-Amz-Signature=4a978c98304f31dc85337ea21e7f340e37d6b8f8264b2b732d6ce7b7996fb85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YKN5W3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRp1Kavqm1oL2CnPsE8xl9Nt19RNvCQHV7xfqOi1AbOgIhALOxbOUxr1Q%2FjbThBhd2yPkKg8pXichgNpimfO16CR1OKv8DCBYQABoMNjM3NDIzMTgzODA1IgxafDntmONseB%2B7TcYq3AOGGuZscDFOXZUGR08M0FyiE7idsJspLNhbezhoiUc8Y5nZQX%2FazL9DUNMUKCQFV7LJMQCPdWh4jkSVADYGMCy0qUUC6J35QU5ozbEsIXJGb7CfET0A0H%2BP2wUIf4wzFFRIjq5KRX2WWM9B2iEbWZ8d4aWLipNT3RS%2BjB3IiJrjHfgFwY2%2BJWar737hyp2cAgiTwW6vHMByHqL6ikMNPbKR0zJ0eaNyfbxECtpkqhwJxPu4XGizRtH%2Bh2%2BJ5T1mQSZQLnYk9aUWBM0SK7f5AcZQSX4N5tw%2FS1cJs5%2F6DC8DVUqYAJMuOZQ9aeiyjBMUG2tZupR%2B6hvbdfxiYI5rDiI9%2B2ZRZKuFXfXINGeWqQr4zvrs1Xh4ihDQD3KftRj99%2FniTrOXiE2Lcly87o8eLeW7O1cuXEihfJ05iD3CNx%2FqVHkaXEIcP4nYtPYZ%2FEu8TgRHjZHA2vH81HyFRH91Qd7XRPCzdB%2BKujWuMauKIO7sITwyYJ6Q4UanqXCSNIDC%2FY9O4pbF61v8AuNA9K%2F7lnX3fhBHz6V9uml%2BzvhQoQdsQMaIJrWf2YCWnYyZ3wPNLm0rwoqxoeknO7jCdOz8DYN4%2B0uOj4zRh00PsIvGgIE%2BgySKykPPc9pKWGBXuTDZi7jEBjqkAUBSmnrk8avBnsuXxhch6XmYHMnxNF%2Bdg2mUEMn2wsG18O0wOUGpL13sEKz4s%2BICVok9WAxeb8ucuVahLA%2FYMg895qfnBcQkcS74U8qxB4COnjX2vfua3W9YFFDiwwP8ZW0QkhTU5ELWZXE41rXhL56DStMqde2iRgFZVKpYjTenH%2BG57oX%2BjEcGl47kRwgyoa6ilA6i15hGtHQ5MHvRekvY77ly&X-Amz-Signature=e7ad283f854c07cc7ed43bfcf421f58ffdda8c13fc775c2cfd96f503ed232ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YKN5W3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRp1Kavqm1oL2CnPsE8xl9Nt19RNvCQHV7xfqOi1AbOgIhALOxbOUxr1Q%2FjbThBhd2yPkKg8pXichgNpimfO16CR1OKv8DCBYQABoMNjM3NDIzMTgzODA1IgxafDntmONseB%2B7TcYq3AOGGuZscDFOXZUGR08M0FyiE7idsJspLNhbezhoiUc8Y5nZQX%2FazL9DUNMUKCQFV7LJMQCPdWh4jkSVADYGMCy0qUUC6J35QU5ozbEsIXJGb7CfET0A0H%2BP2wUIf4wzFFRIjq5KRX2WWM9B2iEbWZ8d4aWLipNT3RS%2BjB3IiJrjHfgFwY2%2BJWar737hyp2cAgiTwW6vHMByHqL6ikMNPbKR0zJ0eaNyfbxECtpkqhwJxPu4XGizRtH%2Bh2%2BJ5T1mQSZQLnYk9aUWBM0SK7f5AcZQSX4N5tw%2FS1cJs5%2F6DC8DVUqYAJMuOZQ9aeiyjBMUG2tZupR%2B6hvbdfxiYI5rDiI9%2B2ZRZKuFXfXINGeWqQr4zvrs1Xh4ihDQD3KftRj99%2FniTrOXiE2Lcly87o8eLeW7O1cuXEihfJ05iD3CNx%2FqVHkaXEIcP4nYtPYZ%2FEu8TgRHjZHA2vH81HyFRH91Qd7XRPCzdB%2BKujWuMauKIO7sITwyYJ6Q4UanqXCSNIDC%2FY9O4pbF61v8AuNA9K%2F7lnX3fhBHz6V9uml%2BzvhQoQdsQMaIJrWf2YCWnYyZ3wPNLm0rwoqxoeknO7jCdOz8DYN4%2B0uOj4zRh00PsIvGgIE%2BgySKykPPc9pKWGBXuTDZi7jEBjqkAUBSmnrk8avBnsuXxhch6XmYHMnxNF%2Bdg2mUEMn2wsG18O0wOUGpL13sEKz4s%2BICVok9WAxeb8ucuVahLA%2FYMg895qfnBcQkcS74U8qxB4COnjX2vfua3W9YFFDiwwP8ZW0QkhTU5ELWZXE41rXhL56DStMqde2iRgFZVKpYjTenH%2BG57oX%2BjEcGl47kRwgyoa6ilA6i15hGtHQ5MHvRekvY77ly&X-Amz-Signature=ea924d5ec53a0b53a45b0a34bb9803a04a3286ba224ae0e1cf8563377c518eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
