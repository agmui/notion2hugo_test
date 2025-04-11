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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDSQIF5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDEKmKX79a7GU2lt2joBz8ZV7EOJGahOG1s6yVsgSfTpAIhAPW23m7eqhy2aWnJgqc9zI0O%2Fa0zwjIJTP0Dd%2Bj%2BKbjIKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkQLZG0X8Ne35Em0sq3ANnS%2Bh3g5MTzn2OcjiFNH670klr5clBuqpV%2FgVIxsTBkoReQ1yimZpxaCPLzd%2BAopJ7IyshTNzyPL4yMsoBNrBNqVeX6bhTdtrBe4PTIDsCH0x5gGmPCDde1KCfv2K1H9mr9ixGlonmnnC3WDsw87a9ZGnG6WY0d3SeKmwrgyUdYWm3SU7AWLERxJKfwt45K5YW%2FNnPbhBS93qaD%2F21lMhU6zv4XqRRzMBFZ2dAnCqvf0Eks4X1Ha4c7yQq6tI8flORsPk4OslOgW73cFZzMvFHNCwQDxfjVW2fniJszAYrXtCxF5uTppvM2fsykZ04ywDUYQbYC83lTRyosaO7%2Fo4QpoQTUC%2BhVpF%2B0dv4%2Br2pLJ12sG91Kab45fGdj3XKrhZhJF1TIgo2yD3forJLZSRK5rZL4ePRIRhU%2BU3nfX7V8CcS3gFA%2BYSyIO9Tvy1vSMiPgvxFW8kYW77fK%2BOarc7feDbsQ5y%2BRjnAJZ60oOFRn4zWacPEAQwqJcb0vk3YkLwv0i%2Bq1ojRQRmn1tiCtxLyjCVj7qeq86jWhCiHwG7KSbN2FTpG0r28PU7gvYTrHvI%2FPSITW95HhRjxEGGu5EkGJU14TL3wz%2BVebwA7p%2Fp0LVVlooUG%2B%2BmwgypYdDCKvOa%2FBjqkAeZhW6vvEc5IWI96RHWOhfu28LXYmC25%2BQSn17OV2z2hbnAIcpGaEQMsdB0joUKHlDqxjnII%2BiZ8F6gmiJe3qlp%2FTZDi9n202w%2FYFG3dFfMcEUwgkVR8qrA5UdNakEcwQRh5bnpt544in%2F1GVx4go97z53JiOZyuAyF%2F1g4CINPSXOnrFIYIj02hkThGb0ioFc2Yguzz4464c4kjBK2UYhaPOVkR&X-Amz-Signature=6465099870049ad03b6924deec8cebe4bb3f28ce9049366fb01855eaa1c60620&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDSQIF5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDEKmKX79a7GU2lt2joBz8ZV7EOJGahOG1s6yVsgSfTpAIhAPW23m7eqhy2aWnJgqc9zI0O%2Fa0zwjIJTP0Dd%2Bj%2BKbjIKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkQLZG0X8Ne35Em0sq3ANnS%2Bh3g5MTzn2OcjiFNH670klr5clBuqpV%2FgVIxsTBkoReQ1yimZpxaCPLzd%2BAopJ7IyshTNzyPL4yMsoBNrBNqVeX6bhTdtrBe4PTIDsCH0x5gGmPCDde1KCfv2K1H9mr9ixGlonmnnC3WDsw87a9ZGnG6WY0d3SeKmwrgyUdYWm3SU7AWLERxJKfwt45K5YW%2FNnPbhBS93qaD%2F21lMhU6zv4XqRRzMBFZ2dAnCqvf0Eks4X1Ha4c7yQq6tI8flORsPk4OslOgW73cFZzMvFHNCwQDxfjVW2fniJszAYrXtCxF5uTppvM2fsykZ04ywDUYQbYC83lTRyosaO7%2Fo4QpoQTUC%2BhVpF%2B0dv4%2Br2pLJ12sG91Kab45fGdj3XKrhZhJF1TIgo2yD3forJLZSRK5rZL4ePRIRhU%2BU3nfX7V8CcS3gFA%2BYSyIO9Tvy1vSMiPgvxFW8kYW77fK%2BOarc7feDbsQ5y%2BRjnAJZ60oOFRn4zWacPEAQwqJcb0vk3YkLwv0i%2Bq1ojRQRmn1tiCtxLyjCVj7qeq86jWhCiHwG7KSbN2FTpG0r28PU7gvYTrHvI%2FPSITW95HhRjxEGGu5EkGJU14TL3wz%2BVebwA7p%2Fp0LVVlooUG%2B%2BmwgypYdDCKvOa%2FBjqkAeZhW6vvEc5IWI96RHWOhfu28LXYmC25%2BQSn17OV2z2hbnAIcpGaEQMsdB0joUKHlDqxjnII%2BiZ8F6gmiJe3qlp%2FTZDi9n202w%2FYFG3dFfMcEUwgkVR8qrA5UdNakEcwQRh5bnpt544in%2F1GVx4go97z53JiOZyuAyF%2F1g4CINPSXOnrFIYIj02hkThGb0ioFc2Yguzz4464c4kjBK2UYhaPOVkR&X-Amz-Signature=b8c24ae6b7091173ebef8b4b9904d0a4f07245ee90119e9c2af253ea57562339&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDSQIF5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDEKmKX79a7GU2lt2joBz8ZV7EOJGahOG1s6yVsgSfTpAIhAPW23m7eqhy2aWnJgqc9zI0O%2Fa0zwjIJTP0Dd%2Bj%2BKbjIKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkQLZG0X8Ne35Em0sq3ANnS%2Bh3g5MTzn2OcjiFNH670klr5clBuqpV%2FgVIxsTBkoReQ1yimZpxaCPLzd%2BAopJ7IyshTNzyPL4yMsoBNrBNqVeX6bhTdtrBe4PTIDsCH0x5gGmPCDde1KCfv2K1H9mr9ixGlonmnnC3WDsw87a9ZGnG6WY0d3SeKmwrgyUdYWm3SU7AWLERxJKfwt45K5YW%2FNnPbhBS93qaD%2F21lMhU6zv4XqRRzMBFZ2dAnCqvf0Eks4X1Ha4c7yQq6tI8flORsPk4OslOgW73cFZzMvFHNCwQDxfjVW2fniJszAYrXtCxF5uTppvM2fsykZ04ywDUYQbYC83lTRyosaO7%2Fo4QpoQTUC%2BhVpF%2B0dv4%2Br2pLJ12sG91Kab45fGdj3XKrhZhJF1TIgo2yD3forJLZSRK5rZL4ePRIRhU%2BU3nfX7V8CcS3gFA%2BYSyIO9Tvy1vSMiPgvxFW8kYW77fK%2BOarc7feDbsQ5y%2BRjnAJZ60oOFRn4zWacPEAQwqJcb0vk3YkLwv0i%2Bq1ojRQRmn1tiCtxLyjCVj7qeq86jWhCiHwG7KSbN2FTpG0r28PU7gvYTrHvI%2FPSITW95HhRjxEGGu5EkGJU14TL3wz%2BVebwA7p%2Fp0LVVlooUG%2B%2BmwgypYdDCKvOa%2FBjqkAeZhW6vvEc5IWI96RHWOhfu28LXYmC25%2BQSn17OV2z2hbnAIcpGaEQMsdB0joUKHlDqxjnII%2BiZ8F6gmiJe3qlp%2FTZDi9n202w%2FYFG3dFfMcEUwgkVR8qrA5UdNakEcwQRh5bnpt544in%2F1GVx4go97z53JiOZyuAyF%2F1g4CINPSXOnrFIYIj02hkThGb0ioFc2Yguzz4464c4kjBK2UYhaPOVkR&X-Amz-Signature=11310391760d85671b42172d8e27a8d82af52f82f277fe0ca2f540806fb97f50&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDSQIF5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDEKmKX79a7GU2lt2joBz8ZV7EOJGahOG1s6yVsgSfTpAIhAPW23m7eqhy2aWnJgqc9zI0O%2Fa0zwjIJTP0Dd%2Bj%2BKbjIKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkQLZG0X8Ne35Em0sq3ANnS%2Bh3g5MTzn2OcjiFNH670klr5clBuqpV%2FgVIxsTBkoReQ1yimZpxaCPLzd%2BAopJ7IyshTNzyPL4yMsoBNrBNqVeX6bhTdtrBe4PTIDsCH0x5gGmPCDde1KCfv2K1H9mr9ixGlonmnnC3WDsw87a9ZGnG6WY0d3SeKmwrgyUdYWm3SU7AWLERxJKfwt45K5YW%2FNnPbhBS93qaD%2F21lMhU6zv4XqRRzMBFZ2dAnCqvf0Eks4X1Ha4c7yQq6tI8flORsPk4OslOgW73cFZzMvFHNCwQDxfjVW2fniJszAYrXtCxF5uTppvM2fsykZ04ywDUYQbYC83lTRyosaO7%2Fo4QpoQTUC%2BhVpF%2B0dv4%2Br2pLJ12sG91Kab45fGdj3XKrhZhJF1TIgo2yD3forJLZSRK5rZL4ePRIRhU%2BU3nfX7V8CcS3gFA%2BYSyIO9Tvy1vSMiPgvxFW8kYW77fK%2BOarc7feDbsQ5y%2BRjnAJZ60oOFRn4zWacPEAQwqJcb0vk3YkLwv0i%2Bq1ojRQRmn1tiCtxLyjCVj7qeq86jWhCiHwG7KSbN2FTpG0r28PU7gvYTrHvI%2FPSITW95HhRjxEGGu5EkGJU14TL3wz%2BVebwA7p%2Fp0LVVlooUG%2B%2BmwgypYdDCKvOa%2FBjqkAeZhW6vvEc5IWI96RHWOhfu28LXYmC25%2BQSn17OV2z2hbnAIcpGaEQMsdB0joUKHlDqxjnII%2BiZ8F6gmiJe3qlp%2FTZDi9n202w%2FYFG3dFfMcEUwgkVR8qrA5UdNakEcwQRh5bnpt544in%2F1GVx4go97z53JiOZyuAyF%2F1g4CINPSXOnrFIYIj02hkThGb0ioFc2Yguzz4464c4kjBK2UYhaPOVkR&X-Amz-Signature=3e23b3f7747604d41163f0b24aaec4a34d0b15240e480332d26d213898b3d53f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDSQIF5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDEKmKX79a7GU2lt2joBz8ZV7EOJGahOG1s6yVsgSfTpAIhAPW23m7eqhy2aWnJgqc9zI0O%2Fa0zwjIJTP0Dd%2Bj%2BKbjIKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkQLZG0X8Ne35Em0sq3ANnS%2Bh3g5MTzn2OcjiFNH670klr5clBuqpV%2FgVIxsTBkoReQ1yimZpxaCPLzd%2BAopJ7IyshTNzyPL4yMsoBNrBNqVeX6bhTdtrBe4PTIDsCH0x5gGmPCDde1KCfv2K1H9mr9ixGlonmnnC3WDsw87a9ZGnG6WY0d3SeKmwrgyUdYWm3SU7AWLERxJKfwt45K5YW%2FNnPbhBS93qaD%2F21lMhU6zv4XqRRzMBFZ2dAnCqvf0Eks4X1Ha4c7yQq6tI8flORsPk4OslOgW73cFZzMvFHNCwQDxfjVW2fniJszAYrXtCxF5uTppvM2fsykZ04ywDUYQbYC83lTRyosaO7%2Fo4QpoQTUC%2BhVpF%2B0dv4%2Br2pLJ12sG91Kab45fGdj3XKrhZhJF1TIgo2yD3forJLZSRK5rZL4ePRIRhU%2BU3nfX7V8CcS3gFA%2BYSyIO9Tvy1vSMiPgvxFW8kYW77fK%2BOarc7feDbsQ5y%2BRjnAJZ60oOFRn4zWacPEAQwqJcb0vk3YkLwv0i%2Bq1ojRQRmn1tiCtxLyjCVj7qeq86jWhCiHwG7KSbN2FTpG0r28PU7gvYTrHvI%2FPSITW95HhRjxEGGu5EkGJU14TL3wz%2BVebwA7p%2Fp0LVVlooUG%2B%2BmwgypYdDCKvOa%2FBjqkAeZhW6vvEc5IWI96RHWOhfu28LXYmC25%2BQSn17OV2z2hbnAIcpGaEQMsdB0joUKHlDqxjnII%2BiZ8F6gmiJe3qlp%2FTZDi9n202w%2FYFG3dFfMcEUwgkVR8qrA5UdNakEcwQRh5bnpt544in%2F1GVx4go97z53JiOZyuAyF%2F1g4CINPSXOnrFIYIj02hkThGb0ioFc2Yguzz4464c4kjBK2UYhaPOVkR&X-Amz-Signature=f226e3937a4ae986da90ab1c0aecc75d091e680b200ad1f0f10ed864c535dd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
