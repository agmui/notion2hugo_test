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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MOK6X2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdwkEqoncVmLFFi6Kg99v4CflwmClX4ei625qAclkErAIgf0HSN1f5NvMZIW6nLQsJEi1ttNZJukLCS11ORU7PrV0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7fkEkp7UE3qcySPyrcA3m3TV77BbiUbKHN9srGtOxVcnYF3Gk0nNt2m6hYCbgt1AVj3Dk3ixKgXdmnz3PTjhfDxNb79GL9tdwtumq4QO70QWbl9HllUyGtHfA6mbwdXtHJs7G%2FXROf%2F4TFcKkdd5%2FYqbs6pyJ8cRw4Ah2sHfqaTzmfJFtDZmFiH0uWHBOX%2Bp6pDBzoMgAEoowVpU2p4oHaRdWcb2KvdVE54wkntS%2F3Ae5yVeJn5DMgwBP224wzx3h%2FtZX4DXsdWnQLQAL%2ByjI3j3dXA6A1mdkXdZAVstQEXEU1dGCp0J5xO%2FBqbxfjML3evLo6x%2F6KDUD20ffWIx0jmMpI%2BYEgXpBB7MFzdUQupoTOXxeLJKWY5XX4tRpWFWS8vRJp7EhsDajctymJIQplBZwadRWYsxgOLutr9lXsbaNpgWuBRKeLWSRGessanB6PVuzHOMceiTKqknl9u8PxoIoWLUsdoMsOI0qk4BJHW20klaUtBSgDPvvghAib3ahhO5z7e5LGABwhTZHCTbn%2FkNi4yWlxk0HImR6GsRXXHKX8%2BKrmSE1kcNp3g%2FxW%2Fz8u5OL9g2%2BSfY35WBLfH9r2cJQaW75xsk0RhY8g0JeL%2Fl6MirVdaB7909K0KEH%2BWsCjDw1%2BHcMBxNcHMPrV8NIGOqUB89lVfEPiQoLMKE9tGOhvTCZv7XLgR%2B0JHcwMTemmf%2FEvoPlnmLvV9CqqgXca6SfvisxolDwIm0pInHlg5dqGKlQ7UdQSEHrHItxatD74CfKrecuQmcodFuhvpG2R5OotLPa6ufb%2FM4s5vJtGX7QghIR7RENqYxuehvQ4fKYfjbzFtbvoaGgDt8PBfnMPVzS08gOkEzLa4qRFw2c2wsDLk6UrHGxF&X-Amz-Signature=fd7115350e1541d40bd20c379b72b632a326c7a69f307ada3007ce77f5a0a6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MOK6X2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdwkEqoncVmLFFi6Kg99v4CflwmClX4ei625qAclkErAIgf0HSN1f5NvMZIW6nLQsJEi1ttNZJukLCS11ORU7PrV0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7fkEkp7UE3qcySPyrcA3m3TV77BbiUbKHN9srGtOxVcnYF3Gk0nNt2m6hYCbgt1AVj3Dk3ixKgXdmnz3PTjhfDxNb79GL9tdwtumq4QO70QWbl9HllUyGtHfA6mbwdXtHJs7G%2FXROf%2F4TFcKkdd5%2FYqbs6pyJ8cRw4Ah2sHfqaTzmfJFtDZmFiH0uWHBOX%2Bp6pDBzoMgAEoowVpU2p4oHaRdWcb2KvdVE54wkntS%2F3Ae5yVeJn5DMgwBP224wzx3h%2FtZX4DXsdWnQLQAL%2ByjI3j3dXA6A1mdkXdZAVstQEXEU1dGCp0J5xO%2FBqbxfjML3evLo6x%2F6KDUD20ffWIx0jmMpI%2BYEgXpBB7MFzdUQupoTOXxeLJKWY5XX4tRpWFWS8vRJp7EhsDajctymJIQplBZwadRWYsxgOLutr9lXsbaNpgWuBRKeLWSRGessanB6PVuzHOMceiTKqknl9u8PxoIoWLUsdoMsOI0qk4BJHW20klaUtBSgDPvvghAib3ahhO5z7e5LGABwhTZHCTbn%2FkNi4yWlxk0HImR6GsRXXHKX8%2BKrmSE1kcNp3g%2FxW%2Fz8u5OL9g2%2BSfY35WBLfH9r2cJQaW75xsk0RhY8g0JeL%2Fl6MirVdaB7909K0KEH%2BWsCjDw1%2BHcMBxNcHMPrV8NIGOqUB89lVfEPiQoLMKE9tGOhvTCZv7XLgR%2B0JHcwMTemmf%2FEvoPlnmLvV9CqqgXca6SfvisxolDwIm0pInHlg5dqGKlQ7UdQSEHrHItxatD74CfKrecuQmcodFuhvpG2R5OotLPa6ufb%2FM4s5vJtGX7QghIR7RENqYxuehvQ4fKYfjbzFtbvoaGgDt8PBfnMPVzS08gOkEzLa4qRFw2c2wsDLk6UrHGxF&X-Amz-Signature=0719b80eabc90165b50669c3fa2b5e1d14a5460db35de0dc437d2d310a2d44aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MOK6X2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdwkEqoncVmLFFi6Kg99v4CflwmClX4ei625qAclkErAIgf0HSN1f5NvMZIW6nLQsJEi1ttNZJukLCS11ORU7PrV0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7fkEkp7UE3qcySPyrcA3m3TV77BbiUbKHN9srGtOxVcnYF3Gk0nNt2m6hYCbgt1AVj3Dk3ixKgXdmnz3PTjhfDxNb79GL9tdwtumq4QO70QWbl9HllUyGtHfA6mbwdXtHJs7G%2FXROf%2F4TFcKkdd5%2FYqbs6pyJ8cRw4Ah2sHfqaTzmfJFtDZmFiH0uWHBOX%2Bp6pDBzoMgAEoowVpU2p4oHaRdWcb2KvdVE54wkntS%2F3Ae5yVeJn5DMgwBP224wzx3h%2FtZX4DXsdWnQLQAL%2ByjI3j3dXA6A1mdkXdZAVstQEXEU1dGCp0J5xO%2FBqbxfjML3evLo6x%2F6KDUD20ffWIx0jmMpI%2BYEgXpBB7MFzdUQupoTOXxeLJKWY5XX4tRpWFWS8vRJp7EhsDajctymJIQplBZwadRWYsxgOLutr9lXsbaNpgWuBRKeLWSRGessanB6PVuzHOMceiTKqknl9u8PxoIoWLUsdoMsOI0qk4BJHW20klaUtBSgDPvvghAib3ahhO5z7e5LGABwhTZHCTbn%2FkNi4yWlxk0HImR6GsRXXHKX8%2BKrmSE1kcNp3g%2FxW%2Fz8u5OL9g2%2BSfY35WBLfH9r2cJQaW75xsk0RhY8g0JeL%2Fl6MirVdaB7909K0KEH%2BWsCjDw1%2BHcMBxNcHMPrV8NIGOqUB89lVfEPiQoLMKE9tGOhvTCZv7XLgR%2B0JHcwMTemmf%2FEvoPlnmLvV9CqqgXca6SfvisxolDwIm0pInHlg5dqGKlQ7UdQSEHrHItxatD74CfKrecuQmcodFuhvpG2R5OotLPa6ufb%2FM4s5vJtGX7QghIR7RENqYxuehvQ4fKYfjbzFtbvoaGgDt8PBfnMPVzS08gOkEzLa4qRFw2c2wsDLk6UrHGxF&X-Amz-Signature=e822d1ae2f964b3c7ead5230bb383be3a1d82c29b8b84bcb0b82d329ac021984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MOK6X2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdwkEqoncVmLFFi6Kg99v4CflwmClX4ei625qAclkErAIgf0HSN1f5NvMZIW6nLQsJEi1ttNZJukLCS11ORU7PrV0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7fkEkp7UE3qcySPyrcA3m3TV77BbiUbKHN9srGtOxVcnYF3Gk0nNt2m6hYCbgt1AVj3Dk3ixKgXdmnz3PTjhfDxNb79GL9tdwtumq4QO70QWbl9HllUyGtHfA6mbwdXtHJs7G%2FXROf%2F4TFcKkdd5%2FYqbs6pyJ8cRw4Ah2sHfqaTzmfJFtDZmFiH0uWHBOX%2Bp6pDBzoMgAEoowVpU2p4oHaRdWcb2KvdVE54wkntS%2F3Ae5yVeJn5DMgwBP224wzx3h%2FtZX4DXsdWnQLQAL%2ByjI3j3dXA6A1mdkXdZAVstQEXEU1dGCp0J5xO%2FBqbxfjML3evLo6x%2F6KDUD20ffWIx0jmMpI%2BYEgXpBB7MFzdUQupoTOXxeLJKWY5XX4tRpWFWS8vRJp7EhsDajctymJIQplBZwadRWYsxgOLutr9lXsbaNpgWuBRKeLWSRGessanB6PVuzHOMceiTKqknl9u8PxoIoWLUsdoMsOI0qk4BJHW20klaUtBSgDPvvghAib3ahhO5z7e5LGABwhTZHCTbn%2FkNi4yWlxk0HImR6GsRXXHKX8%2BKrmSE1kcNp3g%2FxW%2Fz8u5OL9g2%2BSfY35WBLfH9r2cJQaW75xsk0RhY8g0JeL%2Fl6MirVdaB7909K0KEH%2BWsCjDw1%2BHcMBxNcHMPrV8NIGOqUB89lVfEPiQoLMKE9tGOhvTCZv7XLgR%2B0JHcwMTemmf%2FEvoPlnmLvV9CqqgXca6SfvisxolDwIm0pInHlg5dqGKlQ7UdQSEHrHItxatD74CfKrecuQmcodFuhvpG2R5OotLPa6ufb%2FM4s5vJtGX7QghIR7RENqYxuehvQ4fKYfjbzFtbvoaGgDt8PBfnMPVzS08gOkEzLa4qRFw2c2wsDLk6UrHGxF&X-Amz-Signature=b4e3ad1adff87af3846caba4108c291c3ec8ff57348079778e019d968814d0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MOK6X2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdwkEqoncVmLFFi6Kg99v4CflwmClX4ei625qAclkErAIgf0HSN1f5NvMZIW6nLQsJEi1ttNZJukLCS11ORU7PrV0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7fkEkp7UE3qcySPyrcA3m3TV77BbiUbKHN9srGtOxVcnYF3Gk0nNt2m6hYCbgt1AVj3Dk3ixKgXdmnz3PTjhfDxNb79GL9tdwtumq4QO70QWbl9HllUyGtHfA6mbwdXtHJs7G%2FXROf%2F4TFcKkdd5%2FYqbs6pyJ8cRw4Ah2sHfqaTzmfJFtDZmFiH0uWHBOX%2Bp6pDBzoMgAEoowVpU2p4oHaRdWcb2KvdVE54wkntS%2F3Ae5yVeJn5DMgwBP224wzx3h%2FtZX4DXsdWnQLQAL%2ByjI3j3dXA6A1mdkXdZAVstQEXEU1dGCp0J5xO%2FBqbxfjML3evLo6x%2F6KDUD20ffWIx0jmMpI%2BYEgXpBB7MFzdUQupoTOXxeLJKWY5XX4tRpWFWS8vRJp7EhsDajctymJIQplBZwadRWYsxgOLutr9lXsbaNpgWuBRKeLWSRGessanB6PVuzHOMceiTKqknl9u8PxoIoWLUsdoMsOI0qk4BJHW20klaUtBSgDPvvghAib3ahhO5z7e5LGABwhTZHCTbn%2FkNi4yWlxk0HImR6GsRXXHKX8%2BKrmSE1kcNp3g%2FxW%2Fz8u5OL9g2%2BSfY35WBLfH9r2cJQaW75xsk0RhY8g0JeL%2Fl6MirVdaB7909K0KEH%2BWsCjDw1%2BHcMBxNcHMPrV8NIGOqUB89lVfEPiQoLMKE9tGOhvTCZv7XLgR%2B0JHcwMTemmf%2FEvoPlnmLvV9CqqgXca6SfvisxolDwIm0pInHlg5dqGKlQ7UdQSEHrHItxatD74CfKrecuQmcodFuhvpG2R5OotLPa6ufb%2FM4s5vJtGX7QghIR7RENqYxuehvQ4fKYfjbzFtbvoaGgDt8PBfnMPVzS08gOkEzLa4qRFw2c2wsDLk6UrHGxF&X-Amz-Signature=25f258947e75134f967ecd5007adeec0725fa6421dd2dfa9d53a29644e9df1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
