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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWC3EP6E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeMslu8PGhh%2FfD2JlutbqxECrHLBMh0Ha9PJJG5VXpKAiEA7I2lH%2BYoW4PimgP5qc34Pfs%2FZVypvKfnunSeczHfHu8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPHGu19nnGLZPMWsNSrcA3JvVYCN6WSo0M1BBLRYTIGIPG2i%2FXKq3uC6evh8%2FISDMeXn%2FHN5G%2BWbg6NBSGaE3zCW196laqKauNFE3o1hJHTgjoMwd8Cvg9nBAzmvmKkUfzgaWucQf4H%2FFvy48FQNffDjuJz4hQJ7l3bOctqCGSG308aC%2Fq9GrTFrAiaqZq%2FMZj5E3POIFKthtehE06urPu68zgsJ3hhHU7kYo%2FN2uxkz%2Bk2IZps36LKC6y6gOQPkHeOmWBseAGAXus4Ow%2FtzLqBuTbY4RCsSD%2Ft6%2B450VbSvLOkheVIAQIyN1k4O%2BOXhaXtzw4%2Fipx%2BUeFifyUXuYbbTJdAFC4sCElnkFYzY%2BaOY0HBR1skSHWgJvMWJvfj4lhtnrCfhzVHsikV%2F4%2BdPPp6RPIPzKjDxI42DFq0D4tXYPubch7eCzXAbjApj%2B9q6gwjdZeLVVPocX7K9PpQjYPsu4duicxXZZaFthSJku6AhBzxrwpd%2FYmTDuinL%2BXsWW%2BTmTR5KvLoEcQE%2FoGcXDMTV2GKOi4HaPTRVe7sahMfFY6jdd6p2NFSXye1jfR%2Bwz2N0y0VQgi1cwOkBnQJD8UTRUYtiXgWOom0IsdeHBy00c%2B072IinOX2vQMAyjPqlTjojzvumhsRx1kAOMJLp4L4GOqUB16IP2d52CtX2DpvrCkg7W8NegXxKdSH5nKTyCqAt7q9N1%2FT8LzANYwGO86QGWP0XcU7f0wnXx3qdLh5bBiSj7qn7xNzysYc7sk3vuOUDZk7YjHnAguBpKOpFHld%2B2kZk2Jfq2tUz%2FH6wv6oOYh4K7379%2BfOUKpmdenW4NCVMScZ1Bk0FMdb57nqmTV6YHKez3141OQHYZTT9ESmsxGxWKNM9t%2B7o&X-Amz-Signature=d76bf76d8c413eaffd4eec442d5abef36288d11d90155b1240114c472ed870c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWC3EP6E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeMslu8PGhh%2FfD2JlutbqxECrHLBMh0Ha9PJJG5VXpKAiEA7I2lH%2BYoW4PimgP5qc34Pfs%2FZVypvKfnunSeczHfHu8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPHGu19nnGLZPMWsNSrcA3JvVYCN6WSo0M1BBLRYTIGIPG2i%2FXKq3uC6evh8%2FISDMeXn%2FHN5G%2BWbg6NBSGaE3zCW196laqKauNFE3o1hJHTgjoMwd8Cvg9nBAzmvmKkUfzgaWucQf4H%2FFvy48FQNffDjuJz4hQJ7l3bOctqCGSG308aC%2Fq9GrTFrAiaqZq%2FMZj5E3POIFKthtehE06urPu68zgsJ3hhHU7kYo%2FN2uxkz%2Bk2IZps36LKC6y6gOQPkHeOmWBseAGAXus4Ow%2FtzLqBuTbY4RCsSD%2Ft6%2B450VbSvLOkheVIAQIyN1k4O%2BOXhaXtzw4%2Fipx%2BUeFifyUXuYbbTJdAFC4sCElnkFYzY%2BaOY0HBR1skSHWgJvMWJvfj4lhtnrCfhzVHsikV%2F4%2BdPPp6RPIPzKjDxI42DFq0D4tXYPubch7eCzXAbjApj%2B9q6gwjdZeLVVPocX7K9PpQjYPsu4duicxXZZaFthSJku6AhBzxrwpd%2FYmTDuinL%2BXsWW%2BTmTR5KvLoEcQE%2FoGcXDMTV2GKOi4HaPTRVe7sahMfFY6jdd6p2NFSXye1jfR%2Bwz2N0y0VQgi1cwOkBnQJD8UTRUYtiXgWOom0IsdeHBy00c%2B072IinOX2vQMAyjPqlTjojzvumhsRx1kAOMJLp4L4GOqUB16IP2d52CtX2DpvrCkg7W8NegXxKdSH5nKTyCqAt7q9N1%2FT8LzANYwGO86QGWP0XcU7f0wnXx3qdLh5bBiSj7qn7xNzysYc7sk3vuOUDZk7YjHnAguBpKOpFHld%2B2kZk2Jfq2tUz%2FH6wv6oOYh4K7379%2BfOUKpmdenW4NCVMScZ1Bk0FMdb57nqmTV6YHKez3141OQHYZTT9ESmsxGxWKNM9t%2B7o&X-Amz-Signature=c71a351dc4da01b9d0b626e5065009f1d4342a61444a48ccf8e16affeb2c86a3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWC3EP6E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeMslu8PGhh%2FfD2JlutbqxECrHLBMh0Ha9PJJG5VXpKAiEA7I2lH%2BYoW4PimgP5qc34Pfs%2FZVypvKfnunSeczHfHu8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPHGu19nnGLZPMWsNSrcA3JvVYCN6WSo0M1BBLRYTIGIPG2i%2FXKq3uC6evh8%2FISDMeXn%2FHN5G%2BWbg6NBSGaE3zCW196laqKauNFE3o1hJHTgjoMwd8Cvg9nBAzmvmKkUfzgaWucQf4H%2FFvy48FQNffDjuJz4hQJ7l3bOctqCGSG308aC%2Fq9GrTFrAiaqZq%2FMZj5E3POIFKthtehE06urPu68zgsJ3hhHU7kYo%2FN2uxkz%2Bk2IZps36LKC6y6gOQPkHeOmWBseAGAXus4Ow%2FtzLqBuTbY4RCsSD%2Ft6%2B450VbSvLOkheVIAQIyN1k4O%2BOXhaXtzw4%2Fipx%2BUeFifyUXuYbbTJdAFC4sCElnkFYzY%2BaOY0HBR1skSHWgJvMWJvfj4lhtnrCfhzVHsikV%2F4%2BdPPp6RPIPzKjDxI42DFq0D4tXYPubch7eCzXAbjApj%2B9q6gwjdZeLVVPocX7K9PpQjYPsu4duicxXZZaFthSJku6AhBzxrwpd%2FYmTDuinL%2BXsWW%2BTmTR5KvLoEcQE%2FoGcXDMTV2GKOi4HaPTRVe7sahMfFY6jdd6p2NFSXye1jfR%2Bwz2N0y0VQgi1cwOkBnQJD8UTRUYtiXgWOom0IsdeHBy00c%2B072IinOX2vQMAyjPqlTjojzvumhsRx1kAOMJLp4L4GOqUB16IP2d52CtX2DpvrCkg7W8NegXxKdSH5nKTyCqAt7q9N1%2FT8LzANYwGO86QGWP0XcU7f0wnXx3qdLh5bBiSj7qn7xNzysYc7sk3vuOUDZk7YjHnAguBpKOpFHld%2B2kZk2Jfq2tUz%2FH6wv6oOYh4K7379%2BfOUKpmdenW4NCVMScZ1Bk0FMdb57nqmTV6YHKez3141OQHYZTT9ESmsxGxWKNM9t%2B7o&X-Amz-Signature=be3002edeb67bcdc3bb69ef699e37db40d8ff60d20a0b3aac726d3218605eb50&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWC3EP6E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeMslu8PGhh%2FfD2JlutbqxECrHLBMh0Ha9PJJG5VXpKAiEA7I2lH%2BYoW4PimgP5qc34Pfs%2FZVypvKfnunSeczHfHu8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPHGu19nnGLZPMWsNSrcA3JvVYCN6WSo0M1BBLRYTIGIPG2i%2FXKq3uC6evh8%2FISDMeXn%2FHN5G%2BWbg6NBSGaE3zCW196laqKauNFE3o1hJHTgjoMwd8Cvg9nBAzmvmKkUfzgaWucQf4H%2FFvy48FQNffDjuJz4hQJ7l3bOctqCGSG308aC%2Fq9GrTFrAiaqZq%2FMZj5E3POIFKthtehE06urPu68zgsJ3hhHU7kYo%2FN2uxkz%2Bk2IZps36LKC6y6gOQPkHeOmWBseAGAXus4Ow%2FtzLqBuTbY4RCsSD%2Ft6%2B450VbSvLOkheVIAQIyN1k4O%2BOXhaXtzw4%2Fipx%2BUeFifyUXuYbbTJdAFC4sCElnkFYzY%2BaOY0HBR1skSHWgJvMWJvfj4lhtnrCfhzVHsikV%2F4%2BdPPp6RPIPzKjDxI42DFq0D4tXYPubch7eCzXAbjApj%2B9q6gwjdZeLVVPocX7K9PpQjYPsu4duicxXZZaFthSJku6AhBzxrwpd%2FYmTDuinL%2BXsWW%2BTmTR5KvLoEcQE%2FoGcXDMTV2GKOi4HaPTRVe7sahMfFY6jdd6p2NFSXye1jfR%2Bwz2N0y0VQgi1cwOkBnQJD8UTRUYtiXgWOom0IsdeHBy00c%2B072IinOX2vQMAyjPqlTjojzvumhsRx1kAOMJLp4L4GOqUB16IP2d52CtX2DpvrCkg7W8NegXxKdSH5nKTyCqAt7q9N1%2FT8LzANYwGO86QGWP0XcU7f0wnXx3qdLh5bBiSj7qn7xNzysYc7sk3vuOUDZk7YjHnAguBpKOpFHld%2B2kZk2Jfq2tUz%2FH6wv6oOYh4K7379%2BfOUKpmdenW4NCVMScZ1Bk0FMdb57nqmTV6YHKez3141OQHYZTT9ESmsxGxWKNM9t%2B7o&X-Amz-Signature=03fd2c297d3e68ac175735a52615ded40f71f0188cda0110dfd0a8d42ece21c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWC3EP6E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeMslu8PGhh%2FfD2JlutbqxECrHLBMh0Ha9PJJG5VXpKAiEA7I2lH%2BYoW4PimgP5qc34Pfs%2FZVypvKfnunSeczHfHu8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPHGu19nnGLZPMWsNSrcA3JvVYCN6WSo0M1BBLRYTIGIPG2i%2FXKq3uC6evh8%2FISDMeXn%2FHN5G%2BWbg6NBSGaE3zCW196laqKauNFE3o1hJHTgjoMwd8Cvg9nBAzmvmKkUfzgaWucQf4H%2FFvy48FQNffDjuJz4hQJ7l3bOctqCGSG308aC%2Fq9GrTFrAiaqZq%2FMZj5E3POIFKthtehE06urPu68zgsJ3hhHU7kYo%2FN2uxkz%2Bk2IZps36LKC6y6gOQPkHeOmWBseAGAXus4Ow%2FtzLqBuTbY4RCsSD%2Ft6%2B450VbSvLOkheVIAQIyN1k4O%2BOXhaXtzw4%2Fipx%2BUeFifyUXuYbbTJdAFC4sCElnkFYzY%2BaOY0HBR1skSHWgJvMWJvfj4lhtnrCfhzVHsikV%2F4%2BdPPp6RPIPzKjDxI42DFq0D4tXYPubch7eCzXAbjApj%2B9q6gwjdZeLVVPocX7K9PpQjYPsu4duicxXZZaFthSJku6AhBzxrwpd%2FYmTDuinL%2BXsWW%2BTmTR5KvLoEcQE%2FoGcXDMTV2GKOi4HaPTRVe7sahMfFY6jdd6p2NFSXye1jfR%2Bwz2N0y0VQgi1cwOkBnQJD8UTRUYtiXgWOom0IsdeHBy00c%2B072IinOX2vQMAyjPqlTjojzvumhsRx1kAOMJLp4L4GOqUB16IP2d52CtX2DpvrCkg7W8NegXxKdSH5nKTyCqAt7q9N1%2FT8LzANYwGO86QGWP0XcU7f0wnXx3qdLh5bBiSj7qn7xNzysYc7sk3vuOUDZk7YjHnAguBpKOpFHld%2B2kZk2Jfq2tUz%2FH6wv6oOYh4K7379%2BfOUKpmdenW4NCVMScZ1Bk0FMdb57nqmTV6YHKez3141OQHYZTT9ESmsxGxWKNM9t%2B7o&X-Amz-Signature=5185397ca0a6166b2571f59880cd6f5213fda98bc982ec03d3eae0bb52998df8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
