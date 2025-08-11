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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPSRBHC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqNcDxNKiJkdjue9U1dCyKFn54BT3WlLzehaH1jAmkyAiAToqh0Zlqej6wYKVrOfMfIOjvBKCGeBUZ7BBphGLDRlCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtm%2BM%2FO%2Fyo6MWEa%2FiKtwDls6wncG8UckbD28NqhTuRknC%2FiwpjyTSK%2Fk%2FDnTv5VXn8kC4kjVGXW8LLp98WwQpCdjqS8wC%2FAw8uxWId2rMdab0k7KG9uaNlcJMVS3sTIxY%2F4UYsHD3kwqYLy5mbcdOTIsr3QgoSx3CgWr%2F02dun4rsfFryrRaGR8gEiFttzUH%2FSZml%2B%2F8BQgOvJzME3le8DIsW%2B4fQVfd9hGoko56prBUUhEY01v8AZtkw16OBMl1be%2FgOsNorEcfVaD3CCvn68Ic5v6yDF4a0xX9evYnIiiroQNJQkm9XcHOJkeWtKMXlalM8YOmTeKxQDmKk81QqbWQS6Im8XW%2FUSo2pelwWpPRJxpTl6%2BLuVHs95BQK%2BR4GVYtAHR1zvlJ90YPbJ6Ep%2FSaxryXyjanzvV8pVgyR15LMMHmIferMoZV7%2F8OsYrx4P8oHoMCh%2BbLvHZLUqeM9fzY4ug6721afbV%2BljlWgHlYVtprKaTLSxpC4OGXkrIybCn%2Bfyag4rY9JOehuVTze00vVGIVojeyfp3jVaLHus9WWVx2zJg8sxxNhc%2FQn%2F3DT5UOqeihd6AhFkzhNBrWWH40EsqPEf%2FqC0iamr%2B%2Bp7rZMvv1%2B9krC5GMC%2Fuk0sK8D%2Bk3u1TiRHycp48swy53lxAY6pgHkh2ctNcptwJ6TwDnVPkzbeuXDH52KqdbUsS6GAvIcW1pc7SA0TMndPcf4rYEdr2bar6nr2pBPyuh4uuSQdFxM1xi7uLIHCv1JK%2BOu%2FM9xvpcwmOn1zH%2FN1WaXTKJsVbaf5sXDxfx0zPVgTc0TjYTvPyxIsH0bRjfQ9rzVLSz0zetXUbSqbSsIWYmenjNJCzn%2BYEVyu9ReOEDb6u2nGOHW7lNZOlqG&X-Amz-Signature=504e67755347eaab7c21f63ee577ead8b9f5c923e5785e0639294e04832ad567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPSRBHC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqNcDxNKiJkdjue9U1dCyKFn54BT3WlLzehaH1jAmkyAiAToqh0Zlqej6wYKVrOfMfIOjvBKCGeBUZ7BBphGLDRlCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtm%2BM%2FO%2Fyo6MWEa%2FiKtwDls6wncG8UckbD28NqhTuRknC%2FiwpjyTSK%2Fk%2FDnTv5VXn8kC4kjVGXW8LLp98WwQpCdjqS8wC%2FAw8uxWId2rMdab0k7KG9uaNlcJMVS3sTIxY%2F4UYsHD3kwqYLy5mbcdOTIsr3QgoSx3CgWr%2F02dun4rsfFryrRaGR8gEiFttzUH%2FSZml%2B%2F8BQgOvJzME3le8DIsW%2B4fQVfd9hGoko56prBUUhEY01v8AZtkw16OBMl1be%2FgOsNorEcfVaD3CCvn68Ic5v6yDF4a0xX9evYnIiiroQNJQkm9XcHOJkeWtKMXlalM8YOmTeKxQDmKk81QqbWQS6Im8XW%2FUSo2pelwWpPRJxpTl6%2BLuVHs95BQK%2BR4GVYtAHR1zvlJ90YPbJ6Ep%2FSaxryXyjanzvV8pVgyR15LMMHmIferMoZV7%2F8OsYrx4P8oHoMCh%2BbLvHZLUqeM9fzY4ug6721afbV%2BljlWgHlYVtprKaTLSxpC4OGXkrIybCn%2Bfyag4rY9JOehuVTze00vVGIVojeyfp3jVaLHus9WWVx2zJg8sxxNhc%2FQn%2F3DT5UOqeihd6AhFkzhNBrWWH40EsqPEf%2FqC0iamr%2B%2Bp7rZMvv1%2B9krC5GMC%2Fuk0sK8D%2Bk3u1TiRHycp48swy53lxAY6pgHkh2ctNcptwJ6TwDnVPkzbeuXDH52KqdbUsS6GAvIcW1pc7SA0TMndPcf4rYEdr2bar6nr2pBPyuh4uuSQdFxM1xi7uLIHCv1JK%2BOu%2FM9xvpcwmOn1zH%2FN1WaXTKJsVbaf5sXDxfx0zPVgTc0TjYTvPyxIsH0bRjfQ9rzVLSz0zetXUbSqbSsIWYmenjNJCzn%2BYEVyu9ReOEDb6u2nGOHW7lNZOlqG&X-Amz-Signature=b22d65c1ce41cab90b512875b4631b7a4fb379acb11de52a086f0a028cc3c4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPSRBHC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqNcDxNKiJkdjue9U1dCyKFn54BT3WlLzehaH1jAmkyAiAToqh0Zlqej6wYKVrOfMfIOjvBKCGeBUZ7BBphGLDRlCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtm%2BM%2FO%2Fyo6MWEa%2FiKtwDls6wncG8UckbD28NqhTuRknC%2FiwpjyTSK%2Fk%2FDnTv5VXn8kC4kjVGXW8LLp98WwQpCdjqS8wC%2FAw8uxWId2rMdab0k7KG9uaNlcJMVS3sTIxY%2F4UYsHD3kwqYLy5mbcdOTIsr3QgoSx3CgWr%2F02dun4rsfFryrRaGR8gEiFttzUH%2FSZml%2B%2F8BQgOvJzME3le8DIsW%2B4fQVfd9hGoko56prBUUhEY01v8AZtkw16OBMl1be%2FgOsNorEcfVaD3CCvn68Ic5v6yDF4a0xX9evYnIiiroQNJQkm9XcHOJkeWtKMXlalM8YOmTeKxQDmKk81QqbWQS6Im8XW%2FUSo2pelwWpPRJxpTl6%2BLuVHs95BQK%2BR4GVYtAHR1zvlJ90YPbJ6Ep%2FSaxryXyjanzvV8pVgyR15LMMHmIferMoZV7%2F8OsYrx4P8oHoMCh%2BbLvHZLUqeM9fzY4ug6721afbV%2BljlWgHlYVtprKaTLSxpC4OGXkrIybCn%2Bfyag4rY9JOehuVTze00vVGIVojeyfp3jVaLHus9WWVx2zJg8sxxNhc%2FQn%2F3DT5UOqeihd6AhFkzhNBrWWH40EsqPEf%2FqC0iamr%2B%2Bp7rZMvv1%2B9krC5GMC%2Fuk0sK8D%2Bk3u1TiRHycp48swy53lxAY6pgHkh2ctNcptwJ6TwDnVPkzbeuXDH52KqdbUsS6GAvIcW1pc7SA0TMndPcf4rYEdr2bar6nr2pBPyuh4uuSQdFxM1xi7uLIHCv1JK%2BOu%2FM9xvpcwmOn1zH%2FN1WaXTKJsVbaf5sXDxfx0zPVgTc0TjYTvPyxIsH0bRjfQ9rzVLSz0zetXUbSqbSsIWYmenjNJCzn%2BYEVyu9ReOEDb6u2nGOHW7lNZOlqG&X-Amz-Signature=1df6998b15d26b7d1f19b87d2d1f55c2c640be541a814b3b19924736847edd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPSRBHC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqNcDxNKiJkdjue9U1dCyKFn54BT3WlLzehaH1jAmkyAiAToqh0Zlqej6wYKVrOfMfIOjvBKCGeBUZ7BBphGLDRlCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtm%2BM%2FO%2Fyo6MWEa%2FiKtwDls6wncG8UckbD28NqhTuRknC%2FiwpjyTSK%2Fk%2FDnTv5VXn8kC4kjVGXW8LLp98WwQpCdjqS8wC%2FAw8uxWId2rMdab0k7KG9uaNlcJMVS3sTIxY%2F4UYsHD3kwqYLy5mbcdOTIsr3QgoSx3CgWr%2F02dun4rsfFryrRaGR8gEiFttzUH%2FSZml%2B%2F8BQgOvJzME3le8DIsW%2B4fQVfd9hGoko56prBUUhEY01v8AZtkw16OBMl1be%2FgOsNorEcfVaD3CCvn68Ic5v6yDF4a0xX9evYnIiiroQNJQkm9XcHOJkeWtKMXlalM8YOmTeKxQDmKk81QqbWQS6Im8XW%2FUSo2pelwWpPRJxpTl6%2BLuVHs95BQK%2BR4GVYtAHR1zvlJ90YPbJ6Ep%2FSaxryXyjanzvV8pVgyR15LMMHmIferMoZV7%2F8OsYrx4P8oHoMCh%2BbLvHZLUqeM9fzY4ug6721afbV%2BljlWgHlYVtprKaTLSxpC4OGXkrIybCn%2Bfyag4rY9JOehuVTze00vVGIVojeyfp3jVaLHus9WWVx2zJg8sxxNhc%2FQn%2F3DT5UOqeihd6AhFkzhNBrWWH40EsqPEf%2FqC0iamr%2B%2Bp7rZMvv1%2B9krC5GMC%2Fuk0sK8D%2Bk3u1TiRHycp48swy53lxAY6pgHkh2ctNcptwJ6TwDnVPkzbeuXDH52KqdbUsS6GAvIcW1pc7SA0TMndPcf4rYEdr2bar6nr2pBPyuh4uuSQdFxM1xi7uLIHCv1JK%2BOu%2FM9xvpcwmOn1zH%2FN1WaXTKJsVbaf5sXDxfx0zPVgTc0TjYTvPyxIsH0bRjfQ9rzVLSz0zetXUbSqbSsIWYmenjNJCzn%2BYEVyu9ReOEDb6u2nGOHW7lNZOlqG&X-Amz-Signature=8e94458e91cfcd417bd4d092ba703c09a0102c7ef4d0e94a2e1c23bb0f6c61ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPSRBHC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqNcDxNKiJkdjue9U1dCyKFn54BT3WlLzehaH1jAmkyAiAToqh0Zlqej6wYKVrOfMfIOjvBKCGeBUZ7BBphGLDRlCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtm%2BM%2FO%2Fyo6MWEa%2FiKtwDls6wncG8UckbD28NqhTuRknC%2FiwpjyTSK%2Fk%2FDnTv5VXn8kC4kjVGXW8LLp98WwQpCdjqS8wC%2FAw8uxWId2rMdab0k7KG9uaNlcJMVS3sTIxY%2F4UYsHD3kwqYLy5mbcdOTIsr3QgoSx3CgWr%2F02dun4rsfFryrRaGR8gEiFttzUH%2FSZml%2B%2F8BQgOvJzME3le8DIsW%2B4fQVfd9hGoko56prBUUhEY01v8AZtkw16OBMl1be%2FgOsNorEcfVaD3CCvn68Ic5v6yDF4a0xX9evYnIiiroQNJQkm9XcHOJkeWtKMXlalM8YOmTeKxQDmKk81QqbWQS6Im8XW%2FUSo2pelwWpPRJxpTl6%2BLuVHs95BQK%2BR4GVYtAHR1zvlJ90YPbJ6Ep%2FSaxryXyjanzvV8pVgyR15LMMHmIferMoZV7%2F8OsYrx4P8oHoMCh%2BbLvHZLUqeM9fzY4ug6721afbV%2BljlWgHlYVtprKaTLSxpC4OGXkrIybCn%2Bfyag4rY9JOehuVTze00vVGIVojeyfp3jVaLHus9WWVx2zJg8sxxNhc%2FQn%2F3DT5UOqeihd6AhFkzhNBrWWH40EsqPEf%2FqC0iamr%2B%2Bp7rZMvv1%2B9krC5GMC%2Fuk0sK8D%2Bk3u1TiRHycp48swy53lxAY6pgHkh2ctNcptwJ6TwDnVPkzbeuXDH52KqdbUsS6GAvIcW1pc7SA0TMndPcf4rYEdr2bar6nr2pBPyuh4uuSQdFxM1xi7uLIHCv1JK%2BOu%2FM9xvpcwmOn1zH%2FN1WaXTKJsVbaf5sXDxfx0zPVgTc0TjYTvPyxIsH0bRjfQ9rzVLSz0zetXUbSqbSsIWYmenjNJCzn%2BYEVyu9ReOEDb6u2nGOHW7lNZOlqG&X-Amz-Signature=8392a172bf4f83f21128df2ec1e7380d7fcd8f3ea3b05abb83d99b732f1edb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
