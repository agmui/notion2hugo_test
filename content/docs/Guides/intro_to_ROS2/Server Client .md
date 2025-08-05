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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H3FZ2SZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5pPCUIJx1%2BTREgtWF86ChoXBOO9PpiY1g4LMJm5S2eAiEAqNJFwQ%2FT8U8sKXXF4QnxKg7iPB7tJFg785KsXlaxnj4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMnwhU8aWyBlGWA4WSrcA8oN29gAhARfHhhHX%2FCIO%2Bgt7Zrjhj%2BGXvBNImjKzzZIIUieDid1yTEi0hf21u1%2BspgHCTcN%2B82Pj6IQNyZAa8whJmQ%2B4hYUt%2BwWo%2Bugb5xXIjLTjgKXE24xco5t77Q7vXDic9YM7DAXWvv40mKZixhXkA5a1hz58e%2Fj%2FmkDhqWMbKCtaryxnxYaq3wntr1W70kk%2FPAWNlilLSeQ4RjQWL6phz8Zl36KLuc0Y8yNh0yxwLjt4TJ96%2BS9gPCIuRFq0nugHpbj449bCUXtU3GibGvhzwsqryIVhxqxKJLn2SGjybdftUSZMSF%2Fk2eceGXQ1tOdVRdV7orYfAiCJwRzdNKRb%2B94Oz6ieeZmQuGEnBuoIXZLDP4HPedPGje4FTF1%2FGo58WP5d60Cu315MR7aNsRMGsQ3fXw6ipM3BRmjV80jaavYypDaMGypdCTC6yWqeQcb3zckpAZYYNyVqPS93BMU8%2FfLKs1L1o5bnrhP72mPw1fgWCMrSYqTIskvMk86QVfddTd2KRXhsC9Pgu%2FaCX8%2B2o4qpg5%2FApQjkBLNNVZc%2BEQc%2FYPRr1DJAiU2r4g3ZXWIg1cf5xnYVDJnvAOcBMfzMQNWpCAqGuDK1H2mgJ4%2BwLQsZdsqBVBCJQuLMNXhycQGOqUBhvlC3A4y7sW1L2O%2FRmTNF4m9EHzzIngBpodt9kzmz34YBAJE2wb4IupyOWG4jAeEOXvOc31wf0bAfp3NpmawO%2BKzklKwU77PBvo6yk4e%2FWcry3G1EZiIhXqDXfJXuaZ8XYx5LnN3zRW0BQJNGECdWLLv%2BPoXz3ScH37tKbb5fTdalwtZxeCp%2FzW%2FB5Orpqj%2FYmTtvyAEFCnoWfajaRKlcbXi%2FMVt&X-Amz-Signature=cafb1ff3a2d0ba75d700539d427b1480b26decab0d67308d04dfd881480bdb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H3FZ2SZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5pPCUIJx1%2BTREgtWF86ChoXBOO9PpiY1g4LMJm5S2eAiEAqNJFwQ%2FT8U8sKXXF4QnxKg7iPB7tJFg785KsXlaxnj4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMnwhU8aWyBlGWA4WSrcA8oN29gAhARfHhhHX%2FCIO%2Bgt7Zrjhj%2BGXvBNImjKzzZIIUieDid1yTEi0hf21u1%2BspgHCTcN%2B82Pj6IQNyZAa8whJmQ%2B4hYUt%2BwWo%2Bugb5xXIjLTjgKXE24xco5t77Q7vXDic9YM7DAXWvv40mKZixhXkA5a1hz58e%2Fj%2FmkDhqWMbKCtaryxnxYaq3wntr1W70kk%2FPAWNlilLSeQ4RjQWL6phz8Zl36KLuc0Y8yNh0yxwLjt4TJ96%2BS9gPCIuRFq0nugHpbj449bCUXtU3GibGvhzwsqryIVhxqxKJLn2SGjybdftUSZMSF%2Fk2eceGXQ1tOdVRdV7orYfAiCJwRzdNKRb%2B94Oz6ieeZmQuGEnBuoIXZLDP4HPedPGje4FTF1%2FGo58WP5d60Cu315MR7aNsRMGsQ3fXw6ipM3BRmjV80jaavYypDaMGypdCTC6yWqeQcb3zckpAZYYNyVqPS93BMU8%2FfLKs1L1o5bnrhP72mPw1fgWCMrSYqTIskvMk86QVfddTd2KRXhsC9Pgu%2FaCX8%2B2o4qpg5%2FApQjkBLNNVZc%2BEQc%2FYPRr1DJAiU2r4g3ZXWIg1cf5xnYVDJnvAOcBMfzMQNWpCAqGuDK1H2mgJ4%2BwLQsZdsqBVBCJQuLMNXhycQGOqUBhvlC3A4y7sW1L2O%2FRmTNF4m9EHzzIngBpodt9kzmz34YBAJE2wb4IupyOWG4jAeEOXvOc31wf0bAfp3NpmawO%2BKzklKwU77PBvo6yk4e%2FWcry3G1EZiIhXqDXfJXuaZ8XYx5LnN3zRW0BQJNGECdWLLv%2BPoXz3ScH37tKbb5fTdalwtZxeCp%2FzW%2FB5Orpqj%2FYmTtvyAEFCnoWfajaRKlcbXi%2FMVt&X-Amz-Signature=28a3d18b3650ccb4c1379261ecc1444666eec75623328fdd526a7de0f99ce853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H3FZ2SZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5pPCUIJx1%2BTREgtWF86ChoXBOO9PpiY1g4LMJm5S2eAiEAqNJFwQ%2FT8U8sKXXF4QnxKg7iPB7tJFg785KsXlaxnj4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMnwhU8aWyBlGWA4WSrcA8oN29gAhARfHhhHX%2FCIO%2Bgt7Zrjhj%2BGXvBNImjKzzZIIUieDid1yTEi0hf21u1%2BspgHCTcN%2B82Pj6IQNyZAa8whJmQ%2B4hYUt%2BwWo%2Bugb5xXIjLTjgKXE24xco5t77Q7vXDic9YM7DAXWvv40mKZixhXkA5a1hz58e%2Fj%2FmkDhqWMbKCtaryxnxYaq3wntr1W70kk%2FPAWNlilLSeQ4RjQWL6phz8Zl36KLuc0Y8yNh0yxwLjt4TJ96%2BS9gPCIuRFq0nugHpbj449bCUXtU3GibGvhzwsqryIVhxqxKJLn2SGjybdftUSZMSF%2Fk2eceGXQ1tOdVRdV7orYfAiCJwRzdNKRb%2B94Oz6ieeZmQuGEnBuoIXZLDP4HPedPGje4FTF1%2FGo58WP5d60Cu315MR7aNsRMGsQ3fXw6ipM3BRmjV80jaavYypDaMGypdCTC6yWqeQcb3zckpAZYYNyVqPS93BMU8%2FfLKs1L1o5bnrhP72mPw1fgWCMrSYqTIskvMk86QVfddTd2KRXhsC9Pgu%2FaCX8%2B2o4qpg5%2FApQjkBLNNVZc%2BEQc%2FYPRr1DJAiU2r4g3ZXWIg1cf5xnYVDJnvAOcBMfzMQNWpCAqGuDK1H2mgJ4%2BwLQsZdsqBVBCJQuLMNXhycQGOqUBhvlC3A4y7sW1L2O%2FRmTNF4m9EHzzIngBpodt9kzmz34YBAJE2wb4IupyOWG4jAeEOXvOc31wf0bAfp3NpmawO%2BKzklKwU77PBvo6yk4e%2FWcry3G1EZiIhXqDXfJXuaZ8XYx5LnN3zRW0BQJNGECdWLLv%2BPoXz3ScH37tKbb5fTdalwtZxeCp%2FzW%2FB5Orpqj%2FYmTtvyAEFCnoWfajaRKlcbXi%2FMVt&X-Amz-Signature=a49855ccfa80a914929deb09bfaf32c811ea9e441b0fa683cfd55dc43f1950c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H3FZ2SZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5pPCUIJx1%2BTREgtWF86ChoXBOO9PpiY1g4LMJm5S2eAiEAqNJFwQ%2FT8U8sKXXF4QnxKg7iPB7tJFg785KsXlaxnj4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMnwhU8aWyBlGWA4WSrcA8oN29gAhARfHhhHX%2FCIO%2Bgt7Zrjhj%2BGXvBNImjKzzZIIUieDid1yTEi0hf21u1%2BspgHCTcN%2B82Pj6IQNyZAa8whJmQ%2B4hYUt%2BwWo%2Bugb5xXIjLTjgKXE24xco5t77Q7vXDic9YM7DAXWvv40mKZixhXkA5a1hz58e%2Fj%2FmkDhqWMbKCtaryxnxYaq3wntr1W70kk%2FPAWNlilLSeQ4RjQWL6phz8Zl36KLuc0Y8yNh0yxwLjt4TJ96%2BS9gPCIuRFq0nugHpbj449bCUXtU3GibGvhzwsqryIVhxqxKJLn2SGjybdftUSZMSF%2Fk2eceGXQ1tOdVRdV7orYfAiCJwRzdNKRb%2B94Oz6ieeZmQuGEnBuoIXZLDP4HPedPGje4FTF1%2FGo58WP5d60Cu315MR7aNsRMGsQ3fXw6ipM3BRmjV80jaavYypDaMGypdCTC6yWqeQcb3zckpAZYYNyVqPS93BMU8%2FfLKs1L1o5bnrhP72mPw1fgWCMrSYqTIskvMk86QVfddTd2KRXhsC9Pgu%2FaCX8%2B2o4qpg5%2FApQjkBLNNVZc%2BEQc%2FYPRr1DJAiU2r4g3ZXWIg1cf5xnYVDJnvAOcBMfzMQNWpCAqGuDK1H2mgJ4%2BwLQsZdsqBVBCJQuLMNXhycQGOqUBhvlC3A4y7sW1L2O%2FRmTNF4m9EHzzIngBpodt9kzmz34YBAJE2wb4IupyOWG4jAeEOXvOc31wf0bAfp3NpmawO%2BKzklKwU77PBvo6yk4e%2FWcry3G1EZiIhXqDXfJXuaZ8XYx5LnN3zRW0BQJNGECdWLLv%2BPoXz3ScH37tKbb5fTdalwtZxeCp%2FzW%2FB5Orpqj%2FYmTtvyAEFCnoWfajaRKlcbXi%2FMVt&X-Amz-Signature=8ba491b465d17ad090d6a6ec407eeb624cbc7662d559d82c6105e371ac14c778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H3FZ2SZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH5pPCUIJx1%2BTREgtWF86ChoXBOO9PpiY1g4LMJm5S2eAiEAqNJFwQ%2FT8U8sKXXF4QnxKg7iPB7tJFg785KsXlaxnj4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMnwhU8aWyBlGWA4WSrcA8oN29gAhARfHhhHX%2FCIO%2Bgt7Zrjhj%2BGXvBNImjKzzZIIUieDid1yTEi0hf21u1%2BspgHCTcN%2B82Pj6IQNyZAa8whJmQ%2B4hYUt%2BwWo%2Bugb5xXIjLTjgKXE24xco5t77Q7vXDic9YM7DAXWvv40mKZixhXkA5a1hz58e%2Fj%2FmkDhqWMbKCtaryxnxYaq3wntr1W70kk%2FPAWNlilLSeQ4RjQWL6phz8Zl36KLuc0Y8yNh0yxwLjt4TJ96%2BS9gPCIuRFq0nugHpbj449bCUXtU3GibGvhzwsqryIVhxqxKJLn2SGjybdftUSZMSF%2Fk2eceGXQ1tOdVRdV7orYfAiCJwRzdNKRb%2B94Oz6ieeZmQuGEnBuoIXZLDP4HPedPGje4FTF1%2FGo58WP5d60Cu315MR7aNsRMGsQ3fXw6ipM3BRmjV80jaavYypDaMGypdCTC6yWqeQcb3zckpAZYYNyVqPS93BMU8%2FfLKs1L1o5bnrhP72mPw1fgWCMrSYqTIskvMk86QVfddTd2KRXhsC9Pgu%2FaCX8%2B2o4qpg5%2FApQjkBLNNVZc%2BEQc%2FYPRr1DJAiU2r4g3ZXWIg1cf5xnYVDJnvAOcBMfzMQNWpCAqGuDK1H2mgJ4%2BwLQsZdsqBVBCJQuLMNXhycQGOqUBhvlC3A4y7sW1L2O%2FRmTNF4m9EHzzIngBpodt9kzmz34YBAJE2wb4IupyOWG4jAeEOXvOc31wf0bAfp3NpmawO%2BKzklKwU77PBvo6yk4e%2FWcry3G1EZiIhXqDXfJXuaZ8XYx5LnN3zRW0BQJNGECdWLLv%2BPoXz3ScH37tKbb5fTdalwtZxeCp%2FzW%2FB5Orpqj%2FYmTtvyAEFCnoWfajaRKlcbXi%2FMVt&X-Amz-Signature=4bcf19952350ac86e8c36c5bab631939efea00df58064635281356ab2b41bf6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
