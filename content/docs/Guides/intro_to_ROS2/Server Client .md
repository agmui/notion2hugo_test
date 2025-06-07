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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIYOXA6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx00AI51zxKbXMimO0MYP%2FIhJzz4uZ6Vn%2Bq6C7EzqlUQIgNNVUPxGDf9qUJm%2BuonDKP1kQNo%2BLNM5E%2FrhivK6wprQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHuVn%2B112sHRuYZmmircAxBhjyKcd572D%2BEM1fqW%2By0KklIxhahwk5gW5l2U9bE424cRC8RyLHtXIpnYtb9TLFZHG3tUi2pmvoxAsqiHVDyGDnxiv0em3vXc14KEy1jQghcF7apIh11F5UE9qUSNJjD77%2FWfq4rUjRVU7PE%2FkoA38kVNpsEDralj4uWAPcLS4xfSexJvNTgJ4b2BimM3LtYT3BpzfckXkVtbgjLv1%2BGRKjIvG%2BZRdGgiStz5%2BN9EfoDW7yPulNPzFC7djgc2dN5RMTd1UXv7CJJflbDxRQPiv9tXJM6emDA9ufTgd%2BO96dqhdq83jW8GnFFSAYuAghw4XTO00nLadmq9mz5kBG%2B1Bu3coLKmvqUCLhsniaEp%2F%2FxB%2B9RFJjnoK7gJeZlDuPfpoRkhpniOQzZPmb8a9QS%2F%2FS65TDBtNp2pb4qsiNOc%2FxPEGH9svUjSU8P9WJaeHh8DMBdz9B79ja3psxNmNgpKrSsUBEpJVb5Yuo%2FkuXYnUF79bNwmyOqA6Y%2FWU0qbpeqsRsJFzYlLtAXLgROEY6TtPz3nfHpEA%2FEYTD4G%2BAyQVYBHrK%2BXIPbpNsaJtNfkspPkuSdF1Qr0hhxysxrhbM2eU18LsnzW9oe4AVsJQZlBREcr%2BE6Zm0wm24QCMJ2BkcIGOqUB1Br1EEA6r6GGtTH8olltqACP7%2Bal1PfjEyRhgFEAD5X05no%2FoIm5yAdbEO3i%2FQjHusApEINeFZMXNkGHAL0%2FH7D%2B6hcK%2Bus6hbuhBbXOP5pRlFA0T6d9qDbAa5KYAjNrxmes5iNs3ifd%2FN4%2By8ZnsHO9Ix3SrN4vNaZFwH%2F8UrAm42aTn%2Bl6gN03RCYjLKGFGBV8UxLM3mZdugJDnqYDMjT1Ojej&X-Amz-Signature=803b41f6c58b08116a1091000f5ca3b9b62d29d6e79de472509a602d59f0c474&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIYOXA6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx00AI51zxKbXMimO0MYP%2FIhJzz4uZ6Vn%2Bq6C7EzqlUQIgNNVUPxGDf9qUJm%2BuonDKP1kQNo%2BLNM5E%2FrhivK6wprQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHuVn%2B112sHRuYZmmircAxBhjyKcd572D%2BEM1fqW%2By0KklIxhahwk5gW5l2U9bE424cRC8RyLHtXIpnYtb9TLFZHG3tUi2pmvoxAsqiHVDyGDnxiv0em3vXc14KEy1jQghcF7apIh11F5UE9qUSNJjD77%2FWfq4rUjRVU7PE%2FkoA38kVNpsEDralj4uWAPcLS4xfSexJvNTgJ4b2BimM3LtYT3BpzfckXkVtbgjLv1%2BGRKjIvG%2BZRdGgiStz5%2BN9EfoDW7yPulNPzFC7djgc2dN5RMTd1UXv7CJJflbDxRQPiv9tXJM6emDA9ufTgd%2BO96dqhdq83jW8GnFFSAYuAghw4XTO00nLadmq9mz5kBG%2B1Bu3coLKmvqUCLhsniaEp%2F%2FxB%2B9RFJjnoK7gJeZlDuPfpoRkhpniOQzZPmb8a9QS%2F%2FS65TDBtNp2pb4qsiNOc%2FxPEGH9svUjSU8P9WJaeHh8DMBdz9B79ja3psxNmNgpKrSsUBEpJVb5Yuo%2FkuXYnUF79bNwmyOqA6Y%2FWU0qbpeqsRsJFzYlLtAXLgROEY6TtPz3nfHpEA%2FEYTD4G%2BAyQVYBHrK%2BXIPbpNsaJtNfkspPkuSdF1Qr0hhxysxrhbM2eU18LsnzW9oe4AVsJQZlBREcr%2BE6Zm0wm24QCMJ2BkcIGOqUB1Br1EEA6r6GGtTH8olltqACP7%2Bal1PfjEyRhgFEAD5X05no%2FoIm5yAdbEO3i%2FQjHusApEINeFZMXNkGHAL0%2FH7D%2B6hcK%2Bus6hbuhBbXOP5pRlFA0T6d9qDbAa5KYAjNrxmes5iNs3ifd%2FN4%2By8ZnsHO9Ix3SrN4vNaZFwH%2F8UrAm42aTn%2Bl6gN03RCYjLKGFGBV8UxLM3mZdugJDnqYDMjT1Ojej&X-Amz-Signature=6f3aff8cf36672e615a3ef70ef46a2bc60475ee9b64bf3cc1f4da9e8c935703d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIYOXA6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx00AI51zxKbXMimO0MYP%2FIhJzz4uZ6Vn%2Bq6C7EzqlUQIgNNVUPxGDf9qUJm%2BuonDKP1kQNo%2BLNM5E%2FrhivK6wprQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHuVn%2B112sHRuYZmmircAxBhjyKcd572D%2BEM1fqW%2By0KklIxhahwk5gW5l2U9bE424cRC8RyLHtXIpnYtb9TLFZHG3tUi2pmvoxAsqiHVDyGDnxiv0em3vXc14KEy1jQghcF7apIh11F5UE9qUSNJjD77%2FWfq4rUjRVU7PE%2FkoA38kVNpsEDralj4uWAPcLS4xfSexJvNTgJ4b2BimM3LtYT3BpzfckXkVtbgjLv1%2BGRKjIvG%2BZRdGgiStz5%2BN9EfoDW7yPulNPzFC7djgc2dN5RMTd1UXv7CJJflbDxRQPiv9tXJM6emDA9ufTgd%2BO96dqhdq83jW8GnFFSAYuAghw4XTO00nLadmq9mz5kBG%2B1Bu3coLKmvqUCLhsniaEp%2F%2FxB%2B9RFJjnoK7gJeZlDuPfpoRkhpniOQzZPmb8a9QS%2F%2FS65TDBtNp2pb4qsiNOc%2FxPEGH9svUjSU8P9WJaeHh8DMBdz9B79ja3psxNmNgpKrSsUBEpJVb5Yuo%2FkuXYnUF79bNwmyOqA6Y%2FWU0qbpeqsRsJFzYlLtAXLgROEY6TtPz3nfHpEA%2FEYTD4G%2BAyQVYBHrK%2BXIPbpNsaJtNfkspPkuSdF1Qr0hhxysxrhbM2eU18LsnzW9oe4AVsJQZlBREcr%2BE6Zm0wm24QCMJ2BkcIGOqUB1Br1EEA6r6GGtTH8olltqACP7%2Bal1PfjEyRhgFEAD5X05no%2FoIm5yAdbEO3i%2FQjHusApEINeFZMXNkGHAL0%2FH7D%2B6hcK%2Bus6hbuhBbXOP5pRlFA0T6d9qDbAa5KYAjNrxmes5iNs3ifd%2FN4%2By8ZnsHO9Ix3SrN4vNaZFwH%2F8UrAm42aTn%2Bl6gN03RCYjLKGFGBV8UxLM3mZdugJDnqYDMjT1Ojej&X-Amz-Signature=9898a08166b45a3a5d365363c3c8a3187ce978e3d676e20ea860fe06f231c1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIYOXA6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx00AI51zxKbXMimO0MYP%2FIhJzz4uZ6Vn%2Bq6C7EzqlUQIgNNVUPxGDf9qUJm%2BuonDKP1kQNo%2BLNM5E%2FrhivK6wprQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHuVn%2B112sHRuYZmmircAxBhjyKcd572D%2BEM1fqW%2By0KklIxhahwk5gW5l2U9bE424cRC8RyLHtXIpnYtb9TLFZHG3tUi2pmvoxAsqiHVDyGDnxiv0em3vXc14KEy1jQghcF7apIh11F5UE9qUSNJjD77%2FWfq4rUjRVU7PE%2FkoA38kVNpsEDralj4uWAPcLS4xfSexJvNTgJ4b2BimM3LtYT3BpzfckXkVtbgjLv1%2BGRKjIvG%2BZRdGgiStz5%2BN9EfoDW7yPulNPzFC7djgc2dN5RMTd1UXv7CJJflbDxRQPiv9tXJM6emDA9ufTgd%2BO96dqhdq83jW8GnFFSAYuAghw4XTO00nLadmq9mz5kBG%2B1Bu3coLKmvqUCLhsniaEp%2F%2FxB%2B9RFJjnoK7gJeZlDuPfpoRkhpniOQzZPmb8a9QS%2F%2FS65TDBtNp2pb4qsiNOc%2FxPEGH9svUjSU8P9WJaeHh8DMBdz9B79ja3psxNmNgpKrSsUBEpJVb5Yuo%2FkuXYnUF79bNwmyOqA6Y%2FWU0qbpeqsRsJFzYlLtAXLgROEY6TtPz3nfHpEA%2FEYTD4G%2BAyQVYBHrK%2BXIPbpNsaJtNfkspPkuSdF1Qr0hhxysxrhbM2eU18LsnzW9oe4AVsJQZlBREcr%2BE6Zm0wm24QCMJ2BkcIGOqUB1Br1EEA6r6GGtTH8olltqACP7%2Bal1PfjEyRhgFEAD5X05no%2FoIm5yAdbEO3i%2FQjHusApEINeFZMXNkGHAL0%2FH7D%2B6hcK%2Bus6hbuhBbXOP5pRlFA0T6d9qDbAa5KYAjNrxmes5iNs3ifd%2FN4%2By8ZnsHO9Ix3SrN4vNaZFwH%2F8UrAm42aTn%2Bl6gN03RCYjLKGFGBV8UxLM3mZdugJDnqYDMjT1Ojej&X-Amz-Signature=0dc31acecbedd38f4bc4b97b7e806491684a4007200e39a601f8c814199cf618&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIYOXA6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx00AI51zxKbXMimO0MYP%2FIhJzz4uZ6Vn%2Bq6C7EzqlUQIgNNVUPxGDf9qUJm%2BuonDKP1kQNo%2BLNM5E%2FrhivK6wprQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHuVn%2B112sHRuYZmmircAxBhjyKcd572D%2BEM1fqW%2By0KklIxhahwk5gW5l2U9bE424cRC8RyLHtXIpnYtb9TLFZHG3tUi2pmvoxAsqiHVDyGDnxiv0em3vXc14KEy1jQghcF7apIh11F5UE9qUSNJjD77%2FWfq4rUjRVU7PE%2FkoA38kVNpsEDralj4uWAPcLS4xfSexJvNTgJ4b2BimM3LtYT3BpzfckXkVtbgjLv1%2BGRKjIvG%2BZRdGgiStz5%2BN9EfoDW7yPulNPzFC7djgc2dN5RMTd1UXv7CJJflbDxRQPiv9tXJM6emDA9ufTgd%2BO96dqhdq83jW8GnFFSAYuAghw4XTO00nLadmq9mz5kBG%2B1Bu3coLKmvqUCLhsniaEp%2F%2FxB%2B9RFJjnoK7gJeZlDuPfpoRkhpniOQzZPmb8a9QS%2F%2FS65TDBtNp2pb4qsiNOc%2FxPEGH9svUjSU8P9WJaeHh8DMBdz9B79ja3psxNmNgpKrSsUBEpJVb5Yuo%2FkuXYnUF79bNwmyOqA6Y%2FWU0qbpeqsRsJFzYlLtAXLgROEY6TtPz3nfHpEA%2FEYTD4G%2BAyQVYBHrK%2BXIPbpNsaJtNfkspPkuSdF1Qr0hhxysxrhbM2eU18LsnzW9oe4AVsJQZlBREcr%2BE6Zm0wm24QCMJ2BkcIGOqUB1Br1EEA6r6GGtTH8olltqACP7%2Bal1PfjEyRhgFEAD5X05no%2FoIm5yAdbEO3i%2FQjHusApEINeFZMXNkGHAL0%2FH7D%2B6hcK%2Bus6hbuhBbXOP5pRlFA0T6d9qDbAa5KYAjNrxmes5iNs3ifd%2FN4%2By8ZnsHO9Ix3SrN4vNaZFwH%2F8UrAm42aTn%2Bl6gN03RCYjLKGFGBV8UxLM3mZdugJDnqYDMjT1Ojej&X-Amz-Signature=3df6126431767deeca2713b89dbc5432c788ad0930af422132a0807c2982a9a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
