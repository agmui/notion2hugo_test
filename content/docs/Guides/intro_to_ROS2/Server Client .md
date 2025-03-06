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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFM4MMC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF80ybNl3ZmzZ6vZuFbwwOcVJwQ8IGXYpR1FsXl%2FWxxUAiEA6N%2BWAvIAQ7F566xmaY66Hc4nmT7RLszMtSFs%2BztdNZIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFO0dMOyRDG6c%2FjXuyrcA4HodetHkC770m3byEz%2B5D67LF%2BIcRXjEoo2QMMQj%2B4ewPByFKQJESfPEOEHwlxQaJZLVlnlLXVPUrH%2BXYX31xfm2jc9zWU1y8DgcDcecoWxTs1iN0i5Iic7QC25rSamq%2Bxb%2FgczGo86%2BYuJWBuRiBafq97vqwKuAZKTxFdE6LrnSkPk4ymcYyX0DhOqGs96cn2Yd1zU0d4gkPPEWQnAnvjhrOLQzKQcSGvO%2Ftd9POiEFF8s%2FzF3pm2tIgPAZsdwUm%2Bh5BoaBdbbdVORQjFwTv9%2BqY5Dt8KVGLqmGIqIATcCa2vqydr4kJcLJ%2FoutJQjRsMhJQKMhjFCpL5nuYJ7IPw4I1x%2BOenj7epBvJ6p3TZyLH%2FGek2xUnzhbMaaQXgwFYSgYc2%2FppZPXbICeCDzhuh3sJWo7NNufeDV1L%2FBVugFV2X%2BChaUW1YtPPRu9%2FBi9a8Idz9moHoDoQaFua%2Br5%2BPN%2BvZUiNYW4q7dP0rRb%2FOuqA%2BLAY9Et8aXmhzPMPZCWIHCBC8eR7Xoyf9rIjdlOzcy%2BaPous1yxB4grpqhxILqD52GjTK2%2FNYIFPWZu5OaKWVpXlNhkQrU1O2stsgy0MLOtIPa9II7eeIdeDnmyJF%2BZczoPxuIsiMwlSm6MIH3pL4GOqUBI7mvTTOZL%2FZCyzL6N9FBX9qEEcReTBC0dH%2FXthlxbEg7%2Bz86E4nhyJXjWLaDu5NTfYEv6xAxZXnUQpCdgEf6f11SnGbG8jz%2FAC11IQRbWyFnSDKSGhp0VeJU%2BIl42ey8F15LsZkyaZ13nwk17PqK3nf0UI43sEOUL2P6jXewOqFUSq1Edvr1dqs9pycU91rQyng6QbrRiZjcMnikBB4a8ZNIKMgy&X-Amz-Signature=a49d9d55ea578b90d371dc790d8ec70a32154f37540cc5bab95bb66d9f80e9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFM4MMC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF80ybNl3ZmzZ6vZuFbwwOcVJwQ8IGXYpR1FsXl%2FWxxUAiEA6N%2BWAvIAQ7F566xmaY66Hc4nmT7RLszMtSFs%2BztdNZIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFO0dMOyRDG6c%2FjXuyrcA4HodetHkC770m3byEz%2B5D67LF%2BIcRXjEoo2QMMQj%2B4ewPByFKQJESfPEOEHwlxQaJZLVlnlLXVPUrH%2BXYX31xfm2jc9zWU1y8DgcDcecoWxTs1iN0i5Iic7QC25rSamq%2Bxb%2FgczGo86%2BYuJWBuRiBafq97vqwKuAZKTxFdE6LrnSkPk4ymcYyX0DhOqGs96cn2Yd1zU0d4gkPPEWQnAnvjhrOLQzKQcSGvO%2Ftd9POiEFF8s%2FzF3pm2tIgPAZsdwUm%2Bh5BoaBdbbdVORQjFwTv9%2BqY5Dt8KVGLqmGIqIATcCa2vqydr4kJcLJ%2FoutJQjRsMhJQKMhjFCpL5nuYJ7IPw4I1x%2BOenj7epBvJ6p3TZyLH%2FGek2xUnzhbMaaQXgwFYSgYc2%2FppZPXbICeCDzhuh3sJWo7NNufeDV1L%2FBVugFV2X%2BChaUW1YtPPRu9%2FBi9a8Idz9moHoDoQaFua%2Br5%2BPN%2BvZUiNYW4q7dP0rRb%2FOuqA%2BLAY9Et8aXmhzPMPZCWIHCBC8eR7Xoyf9rIjdlOzcy%2BaPous1yxB4grpqhxILqD52GjTK2%2FNYIFPWZu5OaKWVpXlNhkQrU1O2stsgy0MLOtIPa9II7eeIdeDnmyJF%2BZczoPxuIsiMwlSm6MIH3pL4GOqUBI7mvTTOZL%2FZCyzL6N9FBX9qEEcReTBC0dH%2FXthlxbEg7%2Bz86E4nhyJXjWLaDu5NTfYEv6xAxZXnUQpCdgEf6f11SnGbG8jz%2FAC11IQRbWyFnSDKSGhp0VeJU%2BIl42ey8F15LsZkyaZ13nwk17PqK3nf0UI43sEOUL2P6jXewOqFUSq1Edvr1dqs9pycU91rQyng6QbrRiZjcMnikBB4a8ZNIKMgy&X-Amz-Signature=84776e8ce825a2ee9f8c1180ba201a4fae42a0c649e318b2c38c659224be8e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFM4MMC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF80ybNl3ZmzZ6vZuFbwwOcVJwQ8IGXYpR1FsXl%2FWxxUAiEA6N%2BWAvIAQ7F566xmaY66Hc4nmT7RLszMtSFs%2BztdNZIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFO0dMOyRDG6c%2FjXuyrcA4HodetHkC770m3byEz%2B5D67LF%2BIcRXjEoo2QMMQj%2B4ewPByFKQJESfPEOEHwlxQaJZLVlnlLXVPUrH%2BXYX31xfm2jc9zWU1y8DgcDcecoWxTs1iN0i5Iic7QC25rSamq%2Bxb%2FgczGo86%2BYuJWBuRiBafq97vqwKuAZKTxFdE6LrnSkPk4ymcYyX0DhOqGs96cn2Yd1zU0d4gkPPEWQnAnvjhrOLQzKQcSGvO%2Ftd9POiEFF8s%2FzF3pm2tIgPAZsdwUm%2Bh5BoaBdbbdVORQjFwTv9%2BqY5Dt8KVGLqmGIqIATcCa2vqydr4kJcLJ%2FoutJQjRsMhJQKMhjFCpL5nuYJ7IPw4I1x%2BOenj7epBvJ6p3TZyLH%2FGek2xUnzhbMaaQXgwFYSgYc2%2FppZPXbICeCDzhuh3sJWo7NNufeDV1L%2FBVugFV2X%2BChaUW1YtPPRu9%2FBi9a8Idz9moHoDoQaFua%2Br5%2BPN%2BvZUiNYW4q7dP0rRb%2FOuqA%2BLAY9Et8aXmhzPMPZCWIHCBC8eR7Xoyf9rIjdlOzcy%2BaPous1yxB4grpqhxILqD52GjTK2%2FNYIFPWZu5OaKWVpXlNhkQrU1O2stsgy0MLOtIPa9II7eeIdeDnmyJF%2BZczoPxuIsiMwlSm6MIH3pL4GOqUBI7mvTTOZL%2FZCyzL6N9FBX9qEEcReTBC0dH%2FXthlxbEg7%2Bz86E4nhyJXjWLaDu5NTfYEv6xAxZXnUQpCdgEf6f11SnGbG8jz%2FAC11IQRbWyFnSDKSGhp0VeJU%2BIl42ey8F15LsZkyaZ13nwk17PqK3nf0UI43sEOUL2P6jXewOqFUSq1Edvr1dqs9pycU91rQyng6QbrRiZjcMnikBB4a8ZNIKMgy&X-Amz-Signature=a24dc6fc0ccf70dfc08be76a2d53f55aa652d379573afab0c6a5f2b1ee6291e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFM4MMC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF80ybNl3ZmzZ6vZuFbwwOcVJwQ8IGXYpR1FsXl%2FWxxUAiEA6N%2BWAvIAQ7F566xmaY66Hc4nmT7RLszMtSFs%2BztdNZIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFO0dMOyRDG6c%2FjXuyrcA4HodetHkC770m3byEz%2B5D67LF%2BIcRXjEoo2QMMQj%2B4ewPByFKQJESfPEOEHwlxQaJZLVlnlLXVPUrH%2BXYX31xfm2jc9zWU1y8DgcDcecoWxTs1iN0i5Iic7QC25rSamq%2Bxb%2FgczGo86%2BYuJWBuRiBafq97vqwKuAZKTxFdE6LrnSkPk4ymcYyX0DhOqGs96cn2Yd1zU0d4gkPPEWQnAnvjhrOLQzKQcSGvO%2Ftd9POiEFF8s%2FzF3pm2tIgPAZsdwUm%2Bh5BoaBdbbdVORQjFwTv9%2BqY5Dt8KVGLqmGIqIATcCa2vqydr4kJcLJ%2FoutJQjRsMhJQKMhjFCpL5nuYJ7IPw4I1x%2BOenj7epBvJ6p3TZyLH%2FGek2xUnzhbMaaQXgwFYSgYc2%2FppZPXbICeCDzhuh3sJWo7NNufeDV1L%2FBVugFV2X%2BChaUW1YtPPRu9%2FBi9a8Idz9moHoDoQaFua%2Br5%2BPN%2BvZUiNYW4q7dP0rRb%2FOuqA%2BLAY9Et8aXmhzPMPZCWIHCBC8eR7Xoyf9rIjdlOzcy%2BaPous1yxB4grpqhxILqD52GjTK2%2FNYIFPWZu5OaKWVpXlNhkQrU1O2stsgy0MLOtIPa9II7eeIdeDnmyJF%2BZczoPxuIsiMwlSm6MIH3pL4GOqUBI7mvTTOZL%2FZCyzL6N9FBX9qEEcReTBC0dH%2FXthlxbEg7%2Bz86E4nhyJXjWLaDu5NTfYEv6xAxZXnUQpCdgEf6f11SnGbG8jz%2FAC11IQRbWyFnSDKSGhp0VeJU%2BIl42ey8F15LsZkyaZ13nwk17PqK3nf0UI43sEOUL2P6jXewOqFUSq1Edvr1dqs9pycU91rQyng6QbrRiZjcMnikBB4a8ZNIKMgy&X-Amz-Signature=a6da9b56f74ccfa3e8610966da36c29771529df894ba6e43b05ab88dc9b03d68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFM4MMC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF80ybNl3ZmzZ6vZuFbwwOcVJwQ8IGXYpR1FsXl%2FWxxUAiEA6N%2BWAvIAQ7F566xmaY66Hc4nmT7RLszMtSFs%2BztdNZIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFO0dMOyRDG6c%2FjXuyrcA4HodetHkC770m3byEz%2B5D67LF%2BIcRXjEoo2QMMQj%2B4ewPByFKQJESfPEOEHwlxQaJZLVlnlLXVPUrH%2BXYX31xfm2jc9zWU1y8DgcDcecoWxTs1iN0i5Iic7QC25rSamq%2Bxb%2FgczGo86%2BYuJWBuRiBafq97vqwKuAZKTxFdE6LrnSkPk4ymcYyX0DhOqGs96cn2Yd1zU0d4gkPPEWQnAnvjhrOLQzKQcSGvO%2Ftd9POiEFF8s%2FzF3pm2tIgPAZsdwUm%2Bh5BoaBdbbdVORQjFwTv9%2BqY5Dt8KVGLqmGIqIATcCa2vqydr4kJcLJ%2FoutJQjRsMhJQKMhjFCpL5nuYJ7IPw4I1x%2BOenj7epBvJ6p3TZyLH%2FGek2xUnzhbMaaQXgwFYSgYc2%2FppZPXbICeCDzhuh3sJWo7NNufeDV1L%2FBVugFV2X%2BChaUW1YtPPRu9%2FBi9a8Idz9moHoDoQaFua%2Br5%2BPN%2BvZUiNYW4q7dP0rRb%2FOuqA%2BLAY9Et8aXmhzPMPZCWIHCBC8eR7Xoyf9rIjdlOzcy%2BaPous1yxB4grpqhxILqD52GjTK2%2FNYIFPWZu5OaKWVpXlNhkQrU1O2stsgy0MLOtIPa9II7eeIdeDnmyJF%2BZczoPxuIsiMwlSm6MIH3pL4GOqUBI7mvTTOZL%2FZCyzL6N9FBX9qEEcReTBC0dH%2FXthlxbEg7%2Bz86E4nhyJXjWLaDu5NTfYEv6xAxZXnUQpCdgEf6f11SnGbG8jz%2FAC11IQRbWyFnSDKSGhp0VeJU%2BIl42ey8F15LsZkyaZ13nwk17PqK3nf0UI43sEOUL2P6jXewOqFUSq1Edvr1dqs9pycU91rQyng6QbrRiZjcMnikBB4a8ZNIKMgy&X-Amz-Signature=0dd9b8a3941a35986f20acb993c1f9f19f1ec09fc0c09cd9e4b68e8f7a23fdef&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
