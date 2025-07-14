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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7BR6FE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIF7GJpFsT3ftRA5pPdQ4pliGRLpkYEyCc5xkTndNvhyCAiAd2QKU%2B2FoxSz8K%2B6wrjo%2FbLqBHTdu2vwSnJrEhh6sJyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMuVA4nfPHr1gTXrKLKtwDzxG4Xcpeg7OADlvlj%2FYFosWcHhBCDTXirniCH52YWn7z2TKuxWyTOPJmOxWuvRstA4KQi12kszXeqpoj5miGzlUbhZdPatF6QPHt1V65oWwtclqb9iAmst0dD246XwIrPu427UfFIJuq3QmGGwQX%2FK0viyy0ISRnaNu%2BADlF7WMitRY4Ypjl%2BFM78Vq7bSssefGpyLEjcq2mx2I5jCRVcGwmO1uba9tfhlisiRbeiG3%2Bi6ti4H1%2FEJbs7K1qWuNafg32V5ofAHsJ46hLA5jq%2B0gFig%2FeEIPmuftx0goCoPV8%2FYW0N2WpUk8iLm9bgflyGWVdgT8ZRGZQvpaIl%2FX8cSAuNf19obMsD5d9MrRe7WKDwz%2BgZWgDCiqJunfdaJt5q2IOKmYFwmfTw3QrmU3zazMQaUvLoLPvSb%2BJrI57RP57XZyszHal4lWljVGt%2FT3WUXxDWc15j1sjgmeh%2F4OQ9ZS5UfQkoxAjDSmJO225CvnRopgNX9BMdC4UduQi4EseuKKXZf2Frz%2FppzM9ekA%2FSupfRsmHWt8ANExAVih6VIuyTkIGEmflHgGsyOufXQ3S0oD7XkVCaaTtR7C%2F%2FrbSDMVI8%2FZARm7zgMsHRzAFt%2FkqHINtu9pjOUpfXvYwt9vSwwY6pgGJMjSn52qGwjJYT5YAF4Ai190cduKTE7l%2Bg8dKQEvieMjB%2BrEgyG%2FIsAWxr1HzV6MCfaZKMI9rl5kb%2Fv7gMQUyVjyoRfvUQki%2Banhz0vV75MwJAj%2BBDtkdCCugQ4SQ%2B3ZooBOH5RFhyLxVNE18kQwOYG%2B9j1RXXspUxbSDsirRiXrsno4kmXgwzflpVTJ2F3%2FCAeafvZPx7hvQCgxPMzltRT8%2F9ZMn&X-Amz-Signature=14dc4c496bba0554d0397bbb059d396c2deb4d4c757639444479c1887c64cbf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7BR6FE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIF7GJpFsT3ftRA5pPdQ4pliGRLpkYEyCc5xkTndNvhyCAiAd2QKU%2B2FoxSz8K%2B6wrjo%2FbLqBHTdu2vwSnJrEhh6sJyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMuVA4nfPHr1gTXrKLKtwDzxG4Xcpeg7OADlvlj%2FYFosWcHhBCDTXirniCH52YWn7z2TKuxWyTOPJmOxWuvRstA4KQi12kszXeqpoj5miGzlUbhZdPatF6QPHt1V65oWwtclqb9iAmst0dD246XwIrPu427UfFIJuq3QmGGwQX%2FK0viyy0ISRnaNu%2BADlF7WMitRY4Ypjl%2BFM78Vq7bSssefGpyLEjcq2mx2I5jCRVcGwmO1uba9tfhlisiRbeiG3%2Bi6ti4H1%2FEJbs7K1qWuNafg32V5ofAHsJ46hLA5jq%2B0gFig%2FeEIPmuftx0goCoPV8%2FYW0N2WpUk8iLm9bgflyGWVdgT8ZRGZQvpaIl%2FX8cSAuNf19obMsD5d9MrRe7WKDwz%2BgZWgDCiqJunfdaJt5q2IOKmYFwmfTw3QrmU3zazMQaUvLoLPvSb%2BJrI57RP57XZyszHal4lWljVGt%2FT3WUXxDWc15j1sjgmeh%2F4OQ9ZS5UfQkoxAjDSmJO225CvnRopgNX9BMdC4UduQi4EseuKKXZf2Frz%2FppzM9ekA%2FSupfRsmHWt8ANExAVih6VIuyTkIGEmflHgGsyOufXQ3S0oD7XkVCaaTtR7C%2F%2FrbSDMVI8%2FZARm7zgMsHRzAFt%2FkqHINtu9pjOUpfXvYwt9vSwwY6pgGJMjSn52qGwjJYT5YAF4Ai190cduKTE7l%2Bg8dKQEvieMjB%2BrEgyG%2FIsAWxr1HzV6MCfaZKMI9rl5kb%2Fv7gMQUyVjyoRfvUQki%2Banhz0vV75MwJAj%2BBDtkdCCugQ4SQ%2B3ZooBOH5RFhyLxVNE18kQwOYG%2B9j1RXXspUxbSDsirRiXrsno4kmXgwzflpVTJ2F3%2FCAeafvZPx7hvQCgxPMzltRT8%2F9ZMn&X-Amz-Signature=42be71d88b85a0d9100307d3a621802e7602b21db02450c3d79d36700598ce30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7BR6FE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIF7GJpFsT3ftRA5pPdQ4pliGRLpkYEyCc5xkTndNvhyCAiAd2QKU%2B2FoxSz8K%2B6wrjo%2FbLqBHTdu2vwSnJrEhh6sJyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMuVA4nfPHr1gTXrKLKtwDzxG4Xcpeg7OADlvlj%2FYFosWcHhBCDTXirniCH52YWn7z2TKuxWyTOPJmOxWuvRstA4KQi12kszXeqpoj5miGzlUbhZdPatF6QPHt1V65oWwtclqb9iAmst0dD246XwIrPu427UfFIJuq3QmGGwQX%2FK0viyy0ISRnaNu%2BADlF7WMitRY4Ypjl%2BFM78Vq7bSssefGpyLEjcq2mx2I5jCRVcGwmO1uba9tfhlisiRbeiG3%2Bi6ti4H1%2FEJbs7K1qWuNafg32V5ofAHsJ46hLA5jq%2B0gFig%2FeEIPmuftx0goCoPV8%2FYW0N2WpUk8iLm9bgflyGWVdgT8ZRGZQvpaIl%2FX8cSAuNf19obMsD5d9MrRe7WKDwz%2BgZWgDCiqJunfdaJt5q2IOKmYFwmfTw3QrmU3zazMQaUvLoLPvSb%2BJrI57RP57XZyszHal4lWljVGt%2FT3WUXxDWc15j1sjgmeh%2F4OQ9ZS5UfQkoxAjDSmJO225CvnRopgNX9BMdC4UduQi4EseuKKXZf2Frz%2FppzM9ekA%2FSupfRsmHWt8ANExAVih6VIuyTkIGEmflHgGsyOufXQ3S0oD7XkVCaaTtR7C%2F%2FrbSDMVI8%2FZARm7zgMsHRzAFt%2FkqHINtu9pjOUpfXvYwt9vSwwY6pgGJMjSn52qGwjJYT5YAF4Ai190cduKTE7l%2Bg8dKQEvieMjB%2BrEgyG%2FIsAWxr1HzV6MCfaZKMI9rl5kb%2Fv7gMQUyVjyoRfvUQki%2Banhz0vV75MwJAj%2BBDtkdCCugQ4SQ%2B3ZooBOH5RFhyLxVNE18kQwOYG%2B9j1RXXspUxbSDsirRiXrsno4kmXgwzflpVTJ2F3%2FCAeafvZPx7hvQCgxPMzltRT8%2F9ZMn&X-Amz-Signature=56714b225a302d6209afc6f7144defa8655d01fd39f582b6b66adae00cbf2ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7BR6FE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIF7GJpFsT3ftRA5pPdQ4pliGRLpkYEyCc5xkTndNvhyCAiAd2QKU%2B2FoxSz8K%2B6wrjo%2FbLqBHTdu2vwSnJrEhh6sJyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMuVA4nfPHr1gTXrKLKtwDzxG4Xcpeg7OADlvlj%2FYFosWcHhBCDTXirniCH52YWn7z2TKuxWyTOPJmOxWuvRstA4KQi12kszXeqpoj5miGzlUbhZdPatF6QPHt1V65oWwtclqb9iAmst0dD246XwIrPu427UfFIJuq3QmGGwQX%2FK0viyy0ISRnaNu%2BADlF7WMitRY4Ypjl%2BFM78Vq7bSssefGpyLEjcq2mx2I5jCRVcGwmO1uba9tfhlisiRbeiG3%2Bi6ti4H1%2FEJbs7K1qWuNafg32V5ofAHsJ46hLA5jq%2B0gFig%2FeEIPmuftx0goCoPV8%2FYW0N2WpUk8iLm9bgflyGWVdgT8ZRGZQvpaIl%2FX8cSAuNf19obMsD5d9MrRe7WKDwz%2BgZWgDCiqJunfdaJt5q2IOKmYFwmfTw3QrmU3zazMQaUvLoLPvSb%2BJrI57RP57XZyszHal4lWljVGt%2FT3WUXxDWc15j1sjgmeh%2F4OQ9ZS5UfQkoxAjDSmJO225CvnRopgNX9BMdC4UduQi4EseuKKXZf2Frz%2FppzM9ekA%2FSupfRsmHWt8ANExAVih6VIuyTkIGEmflHgGsyOufXQ3S0oD7XkVCaaTtR7C%2F%2FrbSDMVI8%2FZARm7zgMsHRzAFt%2FkqHINtu9pjOUpfXvYwt9vSwwY6pgGJMjSn52qGwjJYT5YAF4Ai190cduKTE7l%2Bg8dKQEvieMjB%2BrEgyG%2FIsAWxr1HzV6MCfaZKMI9rl5kb%2Fv7gMQUyVjyoRfvUQki%2Banhz0vV75MwJAj%2BBDtkdCCugQ4SQ%2B3ZooBOH5RFhyLxVNE18kQwOYG%2B9j1RXXspUxbSDsirRiXrsno4kmXgwzflpVTJ2F3%2FCAeafvZPx7hvQCgxPMzltRT8%2F9ZMn&X-Amz-Signature=47392347cb93d1fc9a0df4309773740708aee82ba1a1dc022f8c9f906d8c8c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7BR6FE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIF7GJpFsT3ftRA5pPdQ4pliGRLpkYEyCc5xkTndNvhyCAiAd2QKU%2B2FoxSz8K%2B6wrjo%2FbLqBHTdu2vwSnJrEhh6sJyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMuVA4nfPHr1gTXrKLKtwDzxG4Xcpeg7OADlvlj%2FYFosWcHhBCDTXirniCH52YWn7z2TKuxWyTOPJmOxWuvRstA4KQi12kszXeqpoj5miGzlUbhZdPatF6QPHt1V65oWwtclqb9iAmst0dD246XwIrPu427UfFIJuq3QmGGwQX%2FK0viyy0ISRnaNu%2BADlF7WMitRY4Ypjl%2BFM78Vq7bSssefGpyLEjcq2mx2I5jCRVcGwmO1uba9tfhlisiRbeiG3%2Bi6ti4H1%2FEJbs7K1qWuNafg32V5ofAHsJ46hLA5jq%2B0gFig%2FeEIPmuftx0goCoPV8%2FYW0N2WpUk8iLm9bgflyGWVdgT8ZRGZQvpaIl%2FX8cSAuNf19obMsD5d9MrRe7WKDwz%2BgZWgDCiqJunfdaJt5q2IOKmYFwmfTw3QrmU3zazMQaUvLoLPvSb%2BJrI57RP57XZyszHal4lWljVGt%2FT3WUXxDWc15j1sjgmeh%2F4OQ9ZS5UfQkoxAjDSmJO225CvnRopgNX9BMdC4UduQi4EseuKKXZf2Frz%2FppzM9ekA%2FSupfRsmHWt8ANExAVih6VIuyTkIGEmflHgGsyOufXQ3S0oD7XkVCaaTtR7C%2F%2FrbSDMVI8%2FZARm7zgMsHRzAFt%2FkqHINtu9pjOUpfXvYwt9vSwwY6pgGJMjSn52qGwjJYT5YAF4Ai190cduKTE7l%2Bg8dKQEvieMjB%2BrEgyG%2FIsAWxr1HzV6MCfaZKMI9rl5kb%2Fv7gMQUyVjyoRfvUQki%2Banhz0vV75MwJAj%2BBDtkdCCugQ4SQ%2B3ZooBOH5RFhyLxVNE18kQwOYG%2B9j1RXXspUxbSDsirRiXrsno4kmXgwzflpVTJ2F3%2FCAeafvZPx7hvQCgxPMzltRT8%2F9ZMn&X-Amz-Signature=2681c5660b5719c35450ad141dc70c3d62a5bbaeae43da891af48037d6f49d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
