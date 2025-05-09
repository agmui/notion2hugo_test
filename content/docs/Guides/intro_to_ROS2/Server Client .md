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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FWNVG2T%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLCybySA0zqAvHRoV7YEh5a3ebaXjfMlFgaJVurQr59QIgAhx378S4LZXpY00skgHj2c46xHaR%2FPAfZohVUcrUk0gqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuxxiFVhvSPP2B2NCrcAyd%2B4ViHFRfVKJnyaL0vgnS0MHyDRXUCW16uFxt2DKboZcIhgvLrKj6iwtiNRG4XghbRR9URVI97wSsw6YuHCDz525w%2FkBLZsQtADkO9PG%2BfouFBAGni4VqvzZzOqJd6wBcz66rPL0ss7UEHu2907FlSNHFdJnRYYUaWG1EuhF%2BfI206QX01C78qqKNTnS6R1saWVMoVa%2FiVc2d9CwFDNlO9EDJ%2FQToJDHkuEDWE7gvGnz6SISg%2B6007ZZ7CzS0LrF0P4AksSE4iZTT4tMETCrJ1uqoq9K%2Bo%2BEjxmzz5OPqT6IlkL%2F54LIsqMjctGmN%2BOUZ61DCr%2B%2FRJLptK7CZlaZjo9imDO7DeXGzXCqN5tPuPQdsqyJPJLlZrEVl91Vits0LOOyu%2ByzYCPf%2FTgRO8gkxGM1EdRmNEoukPQrF%2F2Si70f9KnTb%2BH1ogZOdMX8g9UVuCj3XFwaBK%2Fsq9s9y9FUUijf2WqmxXGttbqOCpCnmdxN2ncr7XsSelEeFQ%2B59l%2F8p8K%2BarfVdK%2F8PeZq%2BnqUdaohOnlvxvZoloZRyO5P7tkKJELwMmGuIGzhllDA%2FqqoGVO%2BzdL%2FvOLp3vUNTUZHMv%2FXv9eCQFZmKm%2FsUIW0m41%2FKMxeEAv5k6rOtNMJPw%2BMAGOqUBKlG12lT5vJsKUVelK%2F3nysvhaKCtAvgfYG%2BRTk0Rq6td7tvNT4KndCOC5yluUkC%2Fyqe0U1q%2FUQi9pCkbqAhNmmINFrgFO0KMXYHH4Hp%2BAEeSboKqUX%2F%2FzoNMVW1Tt9wI8hAPr%2BTLuFhxtxpuj8GYCM%2BL2WAx%2B6EyG3n5V7%2FWfjM29REGhexKd6E0B0VKwfmcWqJXRRH9eQCyHN8g9%2BE5WZAQCMAz&X-Amz-Signature=b42ed7c5cbb395b3d0d35146c74b93cf24e6f166f91610f4bcbcade9cb4556ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FWNVG2T%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLCybySA0zqAvHRoV7YEh5a3ebaXjfMlFgaJVurQr59QIgAhx378S4LZXpY00skgHj2c46xHaR%2FPAfZohVUcrUk0gqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuxxiFVhvSPP2B2NCrcAyd%2B4ViHFRfVKJnyaL0vgnS0MHyDRXUCW16uFxt2DKboZcIhgvLrKj6iwtiNRG4XghbRR9URVI97wSsw6YuHCDz525w%2FkBLZsQtADkO9PG%2BfouFBAGni4VqvzZzOqJd6wBcz66rPL0ss7UEHu2907FlSNHFdJnRYYUaWG1EuhF%2BfI206QX01C78qqKNTnS6R1saWVMoVa%2FiVc2d9CwFDNlO9EDJ%2FQToJDHkuEDWE7gvGnz6SISg%2B6007ZZ7CzS0LrF0P4AksSE4iZTT4tMETCrJ1uqoq9K%2Bo%2BEjxmzz5OPqT6IlkL%2F54LIsqMjctGmN%2BOUZ61DCr%2B%2FRJLptK7CZlaZjo9imDO7DeXGzXCqN5tPuPQdsqyJPJLlZrEVl91Vits0LOOyu%2ByzYCPf%2FTgRO8gkxGM1EdRmNEoukPQrF%2F2Si70f9KnTb%2BH1ogZOdMX8g9UVuCj3XFwaBK%2Fsq9s9y9FUUijf2WqmxXGttbqOCpCnmdxN2ncr7XsSelEeFQ%2B59l%2F8p8K%2BarfVdK%2F8PeZq%2BnqUdaohOnlvxvZoloZRyO5P7tkKJELwMmGuIGzhllDA%2FqqoGVO%2BzdL%2FvOLp3vUNTUZHMv%2FXv9eCQFZmKm%2FsUIW0m41%2FKMxeEAv5k6rOtNMJPw%2BMAGOqUBKlG12lT5vJsKUVelK%2F3nysvhaKCtAvgfYG%2BRTk0Rq6td7tvNT4KndCOC5yluUkC%2Fyqe0U1q%2FUQi9pCkbqAhNmmINFrgFO0KMXYHH4Hp%2BAEeSboKqUX%2F%2FzoNMVW1Tt9wI8hAPr%2BTLuFhxtxpuj8GYCM%2BL2WAx%2B6EyG3n5V7%2FWfjM29REGhexKd6E0B0VKwfmcWqJXRRH9eQCyHN8g9%2BE5WZAQCMAz&X-Amz-Signature=5d6b705dd32cc59af87c2294622bf1381a893c991d503bc8dcf083f785847f82&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FWNVG2T%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLCybySA0zqAvHRoV7YEh5a3ebaXjfMlFgaJVurQr59QIgAhx378S4LZXpY00skgHj2c46xHaR%2FPAfZohVUcrUk0gqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuxxiFVhvSPP2B2NCrcAyd%2B4ViHFRfVKJnyaL0vgnS0MHyDRXUCW16uFxt2DKboZcIhgvLrKj6iwtiNRG4XghbRR9URVI97wSsw6YuHCDz525w%2FkBLZsQtADkO9PG%2BfouFBAGni4VqvzZzOqJd6wBcz66rPL0ss7UEHu2907FlSNHFdJnRYYUaWG1EuhF%2BfI206QX01C78qqKNTnS6R1saWVMoVa%2FiVc2d9CwFDNlO9EDJ%2FQToJDHkuEDWE7gvGnz6SISg%2B6007ZZ7CzS0LrF0P4AksSE4iZTT4tMETCrJ1uqoq9K%2Bo%2BEjxmzz5OPqT6IlkL%2F54LIsqMjctGmN%2BOUZ61DCr%2B%2FRJLptK7CZlaZjo9imDO7DeXGzXCqN5tPuPQdsqyJPJLlZrEVl91Vits0LOOyu%2ByzYCPf%2FTgRO8gkxGM1EdRmNEoukPQrF%2F2Si70f9KnTb%2BH1ogZOdMX8g9UVuCj3XFwaBK%2Fsq9s9y9FUUijf2WqmxXGttbqOCpCnmdxN2ncr7XsSelEeFQ%2B59l%2F8p8K%2BarfVdK%2F8PeZq%2BnqUdaohOnlvxvZoloZRyO5P7tkKJELwMmGuIGzhllDA%2FqqoGVO%2BzdL%2FvOLp3vUNTUZHMv%2FXv9eCQFZmKm%2FsUIW0m41%2FKMxeEAv5k6rOtNMJPw%2BMAGOqUBKlG12lT5vJsKUVelK%2F3nysvhaKCtAvgfYG%2BRTk0Rq6td7tvNT4KndCOC5yluUkC%2Fyqe0U1q%2FUQi9pCkbqAhNmmINFrgFO0KMXYHH4Hp%2BAEeSboKqUX%2F%2FzoNMVW1Tt9wI8hAPr%2BTLuFhxtxpuj8GYCM%2BL2WAx%2B6EyG3n5V7%2FWfjM29REGhexKd6E0B0VKwfmcWqJXRRH9eQCyHN8g9%2BE5WZAQCMAz&X-Amz-Signature=9e2ccd85f00ee175285dbe7688186b953d34b592da920071ce58680d4d333d88&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FWNVG2T%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLCybySA0zqAvHRoV7YEh5a3ebaXjfMlFgaJVurQr59QIgAhx378S4LZXpY00skgHj2c46xHaR%2FPAfZohVUcrUk0gqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuxxiFVhvSPP2B2NCrcAyd%2B4ViHFRfVKJnyaL0vgnS0MHyDRXUCW16uFxt2DKboZcIhgvLrKj6iwtiNRG4XghbRR9URVI97wSsw6YuHCDz525w%2FkBLZsQtADkO9PG%2BfouFBAGni4VqvzZzOqJd6wBcz66rPL0ss7UEHu2907FlSNHFdJnRYYUaWG1EuhF%2BfI206QX01C78qqKNTnS6R1saWVMoVa%2FiVc2d9CwFDNlO9EDJ%2FQToJDHkuEDWE7gvGnz6SISg%2B6007ZZ7CzS0LrF0P4AksSE4iZTT4tMETCrJ1uqoq9K%2Bo%2BEjxmzz5OPqT6IlkL%2F54LIsqMjctGmN%2BOUZ61DCr%2B%2FRJLptK7CZlaZjo9imDO7DeXGzXCqN5tPuPQdsqyJPJLlZrEVl91Vits0LOOyu%2ByzYCPf%2FTgRO8gkxGM1EdRmNEoukPQrF%2F2Si70f9KnTb%2BH1ogZOdMX8g9UVuCj3XFwaBK%2Fsq9s9y9FUUijf2WqmxXGttbqOCpCnmdxN2ncr7XsSelEeFQ%2B59l%2F8p8K%2BarfVdK%2F8PeZq%2BnqUdaohOnlvxvZoloZRyO5P7tkKJELwMmGuIGzhllDA%2FqqoGVO%2BzdL%2FvOLp3vUNTUZHMv%2FXv9eCQFZmKm%2FsUIW0m41%2FKMxeEAv5k6rOtNMJPw%2BMAGOqUBKlG12lT5vJsKUVelK%2F3nysvhaKCtAvgfYG%2BRTk0Rq6td7tvNT4KndCOC5yluUkC%2Fyqe0U1q%2FUQi9pCkbqAhNmmINFrgFO0KMXYHH4Hp%2BAEeSboKqUX%2F%2FzoNMVW1Tt9wI8hAPr%2BTLuFhxtxpuj8GYCM%2BL2WAx%2B6EyG3n5V7%2FWfjM29REGhexKd6E0B0VKwfmcWqJXRRH9eQCyHN8g9%2BE5WZAQCMAz&X-Amz-Signature=306199f148c9b6669a249c57ee5403b824903d6e4abd8f61c856e495d30d81ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FWNVG2T%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLCybySA0zqAvHRoV7YEh5a3ebaXjfMlFgaJVurQr59QIgAhx378S4LZXpY00skgHj2c46xHaR%2FPAfZohVUcrUk0gqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuxxiFVhvSPP2B2NCrcAyd%2B4ViHFRfVKJnyaL0vgnS0MHyDRXUCW16uFxt2DKboZcIhgvLrKj6iwtiNRG4XghbRR9URVI97wSsw6YuHCDz525w%2FkBLZsQtADkO9PG%2BfouFBAGni4VqvzZzOqJd6wBcz66rPL0ss7UEHu2907FlSNHFdJnRYYUaWG1EuhF%2BfI206QX01C78qqKNTnS6R1saWVMoVa%2FiVc2d9CwFDNlO9EDJ%2FQToJDHkuEDWE7gvGnz6SISg%2B6007ZZ7CzS0LrF0P4AksSE4iZTT4tMETCrJ1uqoq9K%2Bo%2BEjxmzz5OPqT6IlkL%2F54LIsqMjctGmN%2BOUZ61DCr%2B%2FRJLptK7CZlaZjo9imDO7DeXGzXCqN5tPuPQdsqyJPJLlZrEVl91Vits0LOOyu%2ByzYCPf%2FTgRO8gkxGM1EdRmNEoukPQrF%2F2Si70f9KnTb%2BH1ogZOdMX8g9UVuCj3XFwaBK%2Fsq9s9y9FUUijf2WqmxXGttbqOCpCnmdxN2ncr7XsSelEeFQ%2B59l%2F8p8K%2BarfVdK%2F8PeZq%2BnqUdaohOnlvxvZoloZRyO5P7tkKJELwMmGuIGzhllDA%2FqqoGVO%2BzdL%2FvOLp3vUNTUZHMv%2FXv9eCQFZmKm%2FsUIW0m41%2FKMxeEAv5k6rOtNMJPw%2BMAGOqUBKlG12lT5vJsKUVelK%2F3nysvhaKCtAvgfYG%2BRTk0Rq6td7tvNT4KndCOC5yluUkC%2Fyqe0U1q%2FUQi9pCkbqAhNmmINFrgFO0KMXYHH4Hp%2BAEeSboKqUX%2F%2FzoNMVW1Tt9wI8hAPr%2BTLuFhxtxpuj8GYCM%2BL2WAx%2B6EyG3n5V7%2FWfjM29REGhexKd6E0B0VKwfmcWqJXRRH9eQCyHN8g9%2BE5WZAQCMAz&X-Amz-Signature=a83dbfaf75fae324d886f39f590aa052b786143a97a9875becfe38fe653e8810&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
