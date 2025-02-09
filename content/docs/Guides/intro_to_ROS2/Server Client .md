---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLT2PYF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3UCkFCQiW2XQ9HXUpoPIjiuFIbeWRn92g0HBc1ovVGAiEA0JstfDh1V2gBzgM%2FMx1Lgc5A7bLjkDh%2FENv5jGXpsXoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7jtsde0uTgPNUWgCrcA6m1T4ZRQhzaZLgOba%2BTgpdKCXJB6KDr9IlY1bxRYvV9Ascg9EE8VsMXe7TKKjDWD4dwiqls0hIqVLBAUGww28BMrrRo78IsU0vsXYC4ejcOfXWXAEACwZTVr1Hnh88oyXR9Koy%2Fmzc2G8rd%2Fw1zjaOyrnX1ciTBROyuS4Mzl5dtMgwEhqfu0mPVRlcGSK4pTJUxAEXa%2B9XSJo1IJHpeH9jyb9zRT4WGPywMG5K3AUIIeL5wyB1zuFfbljhAIzrGs%2BziG3imlT5knxqH2HnEhWwG7Ven7e4GRI9iN4mR2k4OfoYF6HCbP6O00FXJ1WYNjSO5MQZTSJdWx81gKeFIhz8boBn8DRXtgwUm1uRS3Fo31dhIdrgG4%2BQqgM4BTy2pOeZhKRaBtJZw7QD2LuKBOtRfVExQB6Iadj7gVlpQhU5gynf%2FELa6jIbAZxuxTHrKmX7szhF1ivW3IKsa9f3Q6wL0emcReexjcNaOvrwZkhVaL8jwbLJ0i%2BvXWxCZ%2Bx3ONJtsKJwd%2BdoFDsKtNFUdV7Wc%2FozHDVT4zrrn8VOTeu%2B0uNzyLd%2BOMZWz7u0134PTahwX74M5oXNNDPxmL%2FuwcH6nf5Es06oy56vopYgvkP1d7wZLrZp%2FwUf501goMOGQpL0GOqUB%2BbjiNwVc7SwJbVKpDHBoQzYF5cyaMgDd5lhwPJFw9zHC6rAP8BXT%2FLKqtr644HrIqt6ZNOuyzE2VeWEFzrj%2FwNCcdbpuht%2BIOQOcR7ikC9BppqdlYewNQnHthSQONhVdqE6Vr594PpQOiXDR8ic6fVsLjRzVT77FEtPmsJB1RQuohs%2Fw9XqgDS3WJeIxRrMit6j6hV8LoD9b3s26wD%2FSMne%2F43V6&X-Amz-Signature=5282c0f9914120b2e19e214cea97de6752609b033b0e794c0ddc5fce5f9d1c04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLT2PYF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3UCkFCQiW2XQ9HXUpoPIjiuFIbeWRn92g0HBc1ovVGAiEA0JstfDh1V2gBzgM%2FMx1Lgc5A7bLjkDh%2FENv5jGXpsXoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7jtsde0uTgPNUWgCrcA6m1T4ZRQhzaZLgOba%2BTgpdKCXJB6KDr9IlY1bxRYvV9Ascg9EE8VsMXe7TKKjDWD4dwiqls0hIqVLBAUGww28BMrrRo78IsU0vsXYC4ejcOfXWXAEACwZTVr1Hnh88oyXR9Koy%2Fmzc2G8rd%2Fw1zjaOyrnX1ciTBROyuS4Mzl5dtMgwEhqfu0mPVRlcGSK4pTJUxAEXa%2B9XSJo1IJHpeH9jyb9zRT4WGPywMG5K3AUIIeL5wyB1zuFfbljhAIzrGs%2BziG3imlT5knxqH2HnEhWwG7Ven7e4GRI9iN4mR2k4OfoYF6HCbP6O00FXJ1WYNjSO5MQZTSJdWx81gKeFIhz8boBn8DRXtgwUm1uRS3Fo31dhIdrgG4%2BQqgM4BTy2pOeZhKRaBtJZw7QD2LuKBOtRfVExQB6Iadj7gVlpQhU5gynf%2FELa6jIbAZxuxTHrKmX7szhF1ivW3IKsa9f3Q6wL0emcReexjcNaOvrwZkhVaL8jwbLJ0i%2BvXWxCZ%2Bx3ONJtsKJwd%2BdoFDsKtNFUdV7Wc%2FozHDVT4zrrn8VOTeu%2B0uNzyLd%2BOMZWz7u0134PTahwX74M5oXNNDPxmL%2FuwcH6nf5Es06oy56vopYgvkP1d7wZLrZp%2FwUf501goMOGQpL0GOqUB%2BbjiNwVc7SwJbVKpDHBoQzYF5cyaMgDd5lhwPJFw9zHC6rAP8BXT%2FLKqtr644HrIqt6ZNOuyzE2VeWEFzrj%2FwNCcdbpuht%2BIOQOcR7ikC9BppqdlYewNQnHthSQONhVdqE6Vr594PpQOiXDR8ic6fVsLjRzVT77FEtPmsJB1RQuohs%2Fw9XqgDS3WJeIxRrMit6j6hV8LoD9b3s26wD%2FSMne%2F43V6&X-Amz-Signature=092bf6b48568446b38423245341e8213b7858ad548ddfdc1136026acac867e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLT2PYF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3UCkFCQiW2XQ9HXUpoPIjiuFIbeWRn92g0HBc1ovVGAiEA0JstfDh1V2gBzgM%2FMx1Lgc5A7bLjkDh%2FENv5jGXpsXoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7jtsde0uTgPNUWgCrcA6m1T4ZRQhzaZLgOba%2BTgpdKCXJB6KDr9IlY1bxRYvV9Ascg9EE8VsMXe7TKKjDWD4dwiqls0hIqVLBAUGww28BMrrRo78IsU0vsXYC4ejcOfXWXAEACwZTVr1Hnh88oyXR9Koy%2Fmzc2G8rd%2Fw1zjaOyrnX1ciTBROyuS4Mzl5dtMgwEhqfu0mPVRlcGSK4pTJUxAEXa%2B9XSJo1IJHpeH9jyb9zRT4WGPywMG5K3AUIIeL5wyB1zuFfbljhAIzrGs%2BziG3imlT5knxqH2HnEhWwG7Ven7e4GRI9iN4mR2k4OfoYF6HCbP6O00FXJ1WYNjSO5MQZTSJdWx81gKeFIhz8boBn8DRXtgwUm1uRS3Fo31dhIdrgG4%2BQqgM4BTy2pOeZhKRaBtJZw7QD2LuKBOtRfVExQB6Iadj7gVlpQhU5gynf%2FELa6jIbAZxuxTHrKmX7szhF1ivW3IKsa9f3Q6wL0emcReexjcNaOvrwZkhVaL8jwbLJ0i%2BvXWxCZ%2Bx3ONJtsKJwd%2BdoFDsKtNFUdV7Wc%2FozHDVT4zrrn8VOTeu%2B0uNzyLd%2BOMZWz7u0134PTahwX74M5oXNNDPxmL%2FuwcH6nf5Es06oy56vopYgvkP1d7wZLrZp%2FwUf501goMOGQpL0GOqUB%2BbjiNwVc7SwJbVKpDHBoQzYF5cyaMgDd5lhwPJFw9zHC6rAP8BXT%2FLKqtr644HrIqt6ZNOuyzE2VeWEFzrj%2FwNCcdbpuht%2BIOQOcR7ikC9BppqdlYewNQnHthSQONhVdqE6Vr594PpQOiXDR8ic6fVsLjRzVT77FEtPmsJB1RQuohs%2Fw9XqgDS3WJeIxRrMit6j6hV8LoD9b3s26wD%2FSMne%2F43V6&X-Amz-Signature=4478ecb454cdd937669d67b6e711b37c9905b032c34a4411a816e5c72c73e2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLT2PYF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3UCkFCQiW2XQ9HXUpoPIjiuFIbeWRn92g0HBc1ovVGAiEA0JstfDh1V2gBzgM%2FMx1Lgc5A7bLjkDh%2FENv5jGXpsXoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7jtsde0uTgPNUWgCrcA6m1T4ZRQhzaZLgOba%2BTgpdKCXJB6KDr9IlY1bxRYvV9Ascg9EE8VsMXe7TKKjDWD4dwiqls0hIqVLBAUGww28BMrrRo78IsU0vsXYC4ejcOfXWXAEACwZTVr1Hnh88oyXR9Koy%2Fmzc2G8rd%2Fw1zjaOyrnX1ciTBROyuS4Mzl5dtMgwEhqfu0mPVRlcGSK4pTJUxAEXa%2B9XSJo1IJHpeH9jyb9zRT4WGPywMG5K3AUIIeL5wyB1zuFfbljhAIzrGs%2BziG3imlT5knxqH2HnEhWwG7Ven7e4GRI9iN4mR2k4OfoYF6HCbP6O00FXJ1WYNjSO5MQZTSJdWx81gKeFIhz8boBn8DRXtgwUm1uRS3Fo31dhIdrgG4%2BQqgM4BTy2pOeZhKRaBtJZw7QD2LuKBOtRfVExQB6Iadj7gVlpQhU5gynf%2FELa6jIbAZxuxTHrKmX7szhF1ivW3IKsa9f3Q6wL0emcReexjcNaOvrwZkhVaL8jwbLJ0i%2BvXWxCZ%2Bx3ONJtsKJwd%2BdoFDsKtNFUdV7Wc%2FozHDVT4zrrn8VOTeu%2B0uNzyLd%2BOMZWz7u0134PTahwX74M5oXNNDPxmL%2FuwcH6nf5Es06oy56vopYgvkP1d7wZLrZp%2FwUf501goMOGQpL0GOqUB%2BbjiNwVc7SwJbVKpDHBoQzYF5cyaMgDd5lhwPJFw9zHC6rAP8BXT%2FLKqtr644HrIqt6ZNOuyzE2VeWEFzrj%2FwNCcdbpuht%2BIOQOcR7ikC9BppqdlYewNQnHthSQONhVdqE6Vr594PpQOiXDR8ic6fVsLjRzVT77FEtPmsJB1RQuohs%2Fw9XqgDS3WJeIxRrMit6j6hV8LoD9b3s26wD%2FSMne%2F43V6&X-Amz-Signature=6829d87824d4092b1df1caa79bdccf598ad388f80ceac4304ffbc683a05729ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLT2PYF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3UCkFCQiW2XQ9HXUpoPIjiuFIbeWRn92g0HBc1ovVGAiEA0JstfDh1V2gBzgM%2FMx1Lgc5A7bLjkDh%2FENv5jGXpsXoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7jtsde0uTgPNUWgCrcA6m1T4ZRQhzaZLgOba%2BTgpdKCXJB6KDr9IlY1bxRYvV9Ascg9EE8VsMXe7TKKjDWD4dwiqls0hIqVLBAUGww28BMrrRo78IsU0vsXYC4ejcOfXWXAEACwZTVr1Hnh88oyXR9Koy%2Fmzc2G8rd%2Fw1zjaOyrnX1ciTBROyuS4Mzl5dtMgwEhqfu0mPVRlcGSK4pTJUxAEXa%2B9XSJo1IJHpeH9jyb9zRT4WGPywMG5K3AUIIeL5wyB1zuFfbljhAIzrGs%2BziG3imlT5knxqH2HnEhWwG7Ven7e4GRI9iN4mR2k4OfoYF6HCbP6O00FXJ1WYNjSO5MQZTSJdWx81gKeFIhz8boBn8DRXtgwUm1uRS3Fo31dhIdrgG4%2BQqgM4BTy2pOeZhKRaBtJZw7QD2LuKBOtRfVExQB6Iadj7gVlpQhU5gynf%2FELa6jIbAZxuxTHrKmX7szhF1ivW3IKsa9f3Q6wL0emcReexjcNaOvrwZkhVaL8jwbLJ0i%2BvXWxCZ%2Bx3ONJtsKJwd%2BdoFDsKtNFUdV7Wc%2FozHDVT4zrrn8VOTeu%2B0uNzyLd%2BOMZWz7u0134PTahwX74M5oXNNDPxmL%2FuwcH6nf5Es06oy56vopYgvkP1d7wZLrZp%2FwUf501goMOGQpL0GOqUB%2BbjiNwVc7SwJbVKpDHBoQzYF5cyaMgDd5lhwPJFw9zHC6rAP8BXT%2FLKqtr644HrIqt6ZNOuyzE2VeWEFzrj%2FwNCcdbpuht%2BIOQOcR7ikC9BppqdlYewNQnHthSQONhVdqE6Vr594PpQOiXDR8ic6fVsLjRzVT77FEtPmsJB1RQuohs%2Fw9XqgDS3WJeIxRrMit6j6hV8LoD9b3s26wD%2FSMne%2F43V6&X-Amz-Signature=a4ba75d0acede9f6bf6aec3118db78c88a86a4218be1cc641baa33b671c9f8ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
