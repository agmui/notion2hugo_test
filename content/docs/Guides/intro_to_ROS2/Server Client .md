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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUIATYI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkbjX986z27HzxUC7Yy2jmsX1fY27HHodHMWLW%2BeJ9uAiBqMoIef8UmLZYUQTLP76VsktYX7jQfOknKWe%2Bkbig8NSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMdgVRvhSmorAfQ3frKtwDl3bJOQAdvySrESLl%2FY4eixFxIcvJyTxvh6mrSiGbeHSPahnbsGS8vwbs2xa%2B%2FtcQmgUYbTBnCu981KQDs9cla4alQV7iAAgmx%2FDz1fS73HQt%2B8eBnH1h8%2BjIvLmVULJ7SmGBxsDN55ubbn2pWyx6Tf7wBeW%2FYmK9ozUpNMNqUHwSbGQLi8VKMZdRCu9iSNkUD4URkKUb0ngoiNbv3%2BLaP3yuVM0oG43JjBtEODDQbibaxDMHA49i4Z3bedIX2wA4EHLZqGcgXC5HiYIKYOgs9BsV6HKsHubHaA4xmKVAx88Au6OYWBk7UWMGmMxApTqPF0n31cRAQbcX0OSP1Ia8bEgoTnwaRRNfPkvBg%2B9c9rPAeBoHB6e3o8sWYXeLnp%2BTZi0giNiQNqfAE%2F8%2FR%2BKv82%2BBqbNnuLNVWD6bXw3YL%2BbCjD7oQgig5XtOrnt8CPojNPhgynXvxVtZU53RTIzdphNY9%2B%2B%2F6HH1IFQBOdzDjOrhkiJg%2F8KgqasjrEpPffwRT2NnVWoDi1PFzzvuMtUexrQF8jdPHnXqYgIUIsgxYqP8YfhArV%2FOegDaAR74tXDZOnugYXHOup0G2ASjmNi4rfZowPrgbsNSZPsKoXLfx3vs5%2BjEUhW%2FeXfMX7Awkuv1vwY6pgFOq1lMrscxVymJPrKy%2FoK2csc9QuaJNBYZx9o5kjz9Ku88CvqGXExtSwG9hJNYOWfAuT62LnkqPExTKD16qfD6ENCjgFuq9OJBLfc1CxpDZv2WqCdtYlUj43bKdE2y0ODWxWIBUD%2FmjOELNkNCywavXAGfb4%2BWVET01%2BwZ9L7RLEqUioSY4Ofq%2FWwOPYGyqoJbnp1b%2BcaREv9ZZ8TvwvSQTulDdTU%2B&X-Amz-Signature=a4e1758858e59e2ebc294d3aaa5095b66be9ef5309cd5f5e721a245a4f8a04ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUIATYI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkbjX986z27HzxUC7Yy2jmsX1fY27HHodHMWLW%2BeJ9uAiBqMoIef8UmLZYUQTLP76VsktYX7jQfOknKWe%2Bkbig8NSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMdgVRvhSmorAfQ3frKtwDl3bJOQAdvySrESLl%2FY4eixFxIcvJyTxvh6mrSiGbeHSPahnbsGS8vwbs2xa%2B%2FtcQmgUYbTBnCu981KQDs9cla4alQV7iAAgmx%2FDz1fS73HQt%2B8eBnH1h8%2BjIvLmVULJ7SmGBxsDN55ubbn2pWyx6Tf7wBeW%2FYmK9ozUpNMNqUHwSbGQLi8VKMZdRCu9iSNkUD4URkKUb0ngoiNbv3%2BLaP3yuVM0oG43JjBtEODDQbibaxDMHA49i4Z3bedIX2wA4EHLZqGcgXC5HiYIKYOgs9BsV6HKsHubHaA4xmKVAx88Au6OYWBk7UWMGmMxApTqPF0n31cRAQbcX0OSP1Ia8bEgoTnwaRRNfPkvBg%2B9c9rPAeBoHB6e3o8sWYXeLnp%2BTZi0giNiQNqfAE%2F8%2FR%2BKv82%2BBqbNnuLNVWD6bXw3YL%2BbCjD7oQgig5XtOrnt8CPojNPhgynXvxVtZU53RTIzdphNY9%2B%2B%2F6HH1IFQBOdzDjOrhkiJg%2F8KgqasjrEpPffwRT2NnVWoDi1PFzzvuMtUexrQF8jdPHnXqYgIUIsgxYqP8YfhArV%2FOegDaAR74tXDZOnugYXHOup0G2ASjmNi4rfZowPrgbsNSZPsKoXLfx3vs5%2BjEUhW%2FeXfMX7Awkuv1vwY6pgFOq1lMrscxVymJPrKy%2FoK2csc9QuaJNBYZx9o5kjz9Ku88CvqGXExtSwG9hJNYOWfAuT62LnkqPExTKD16qfD6ENCjgFuq9OJBLfc1CxpDZv2WqCdtYlUj43bKdE2y0ODWxWIBUD%2FmjOELNkNCywavXAGfb4%2BWVET01%2BwZ9L7RLEqUioSY4Ofq%2FWwOPYGyqoJbnp1b%2BcaREv9ZZ8TvwvSQTulDdTU%2B&X-Amz-Signature=ac55a2bd058d7b3cbc3bd6207bf06feadf77b028471ec8bf2d2dc9828ba9a201&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUIATYI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkbjX986z27HzxUC7Yy2jmsX1fY27HHodHMWLW%2BeJ9uAiBqMoIef8UmLZYUQTLP76VsktYX7jQfOknKWe%2Bkbig8NSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMdgVRvhSmorAfQ3frKtwDl3bJOQAdvySrESLl%2FY4eixFxIcvJyTxvh6mrSiGbeHSPahnbsGS8vwbs2xa%2B%2FtcQmgUYbTBnCu981KQDs9cla4alQV7iAAgmx%2FDz1fS73HQt%2B8eBnH1h8%2BjIvLmVULJ7SmGBxsDN55ubbn2pWyx6Tf7wBeW%2FYmK9ozUpNMNqUHwSbGQLi8VKMZdRCu9iSNkUD4URkKUb0ngoiNbv3%2BLaP3yuVM0oG43JjBtEODDQbibaxDMHA49i4Z3bedIX2wA4EHLZqGcgXC5HiYIKYOgs9BsV6HKsHubHaA4xmKVAx88Au6OYWBk7UWMGmMxApTqPF0n31cRAQbcX0OSP1Ia8bEgoTnwaRRNfPkvBg%2B9c9rPAeBoHB6e3o8sWYXeLnp%2BTZi0giNiQNqfAE%2F8%2FR%2BKv82%2BBqbNnuLNVWD6bXw3YL%2BbCjD7oQgig5XtOrnt8CPojNPhgynXvxVtZU53RTIzdphNY9%2B%2B%2F6HH1IFQBOdzDjOrhkiJg%2F8KgqasjrEpPffwRT2NnVWoDi1PFzzvuMtUexrQF8jdPHnXqYgIUIsgxYqP8YfhArV%2FOegDaAR74tXDZOnugYXHOup0G2ASjmNi4rfZowPrgbsNSZPsKoXLfx3vs5%2BjEUhW%2FeXfMX7Awkuv1vwY6pgFOq1lMrscxVymJPrKy%2FoK2csc9QuaJNBYZx9o5kjz9Ku88CvqGXExtSwG9hJNYOWfAuT62LnkqPExTKD16qfD6ENCjgFuq9OJBLfc1CxpDZv2WqCdtYlUj43bKdE2y0ODWxWIBUD%2FmjOELNkNCywavXAGfb4%2BWVET01%2BwZ9L7RLEqUioSY4Ofq%2FWwOPYGyqoJbnp1b%2BcaREv9ZZ8TvwvSQTulDdTU%2B&X-Amz-Signature=80e3ad0a8894f406a90908fd8da92e8bac8ec4d42af259c41ea68272b010d589&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUIATYI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkbjX986z27HzxUC7Yy2jmsX1fY27HHodHMWLW%2BeJ9uAiBqMoIef8UmLZYUQTLP76VsktYX7jQfOknKWe%2Bkbig8NSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMdgVRvhSmorAfQ3frKtwDl3bJOQAdvySrESLl%2FY4eixFxIcvJyTxvh6mrSiGbeHSPahnbsGS8vwbs2xa%2B%2FtcQmgUYbTBnCu981KQDs9cla4alQV7iAAgmx%2FDz1fS73HQt%2B8eBnH1h8%2BjIvLmVULJ7SmGBxsDN55ubbn2pWyx6Tf7wBeW%2FYmK9ozUpNMNqUHwSbGQLi8VKMZdRCu9iSNkUD4URkKUb0ngoiNbv3%2BLaP3yuVM0oG43JjBtEODDQbibaxDMHA49i4Z3bedIX2wA4EHLZqGcgXC5HiYIKYOgs9BsV6HKsHubHaA4xmKVAx88Au6OYWBk7UWMGmMxApTqPF0n31cRAQbcX0OSP1Ia8bEgoTnwaRRNfPkvBg%2B9c9rPAeBoHB6e3o8sWYXeLnp%2BTZi0giNiQNqfAE%2F8%2FR%2BKv82%2BBqbNnuLNVWD6bXw3YL%2BbCjD7oQgig5XtOrnt8CPojNPhgynXvxVtZU53RTIzdphNY9%2B%2B%2F6HH1IFQBOdzDjOrhkiJg%2F8KgqasjrEpPffwRT2NnVWoDi1PFzzvuMtUexrQF8jdPHnXqYgIUIsgxYqP8YfhArV%2FOegDaAR74tXDZOnugYXHOup0G2ASjmNi4rfZowPrgbsNSZPsKoXLfx3vs5%2BjEUhW%2FeXfMX7Awkuv1vwY6pgFOq1lMrscxVymJPrKy%2FoK2csc9QuaJNBYZx9o5kjz9Ku88CvqGXExtSwG9hJNYOWfAuT62LnkqPExTKD16qfD6ENCjgFuq9OJBLfc1CxpDZv2WqCdtYlUj43bKdE2y0ODWxWIBUD%2FmjOELNkNCywavXAGfb4%2BWVET01%2BwZ9L7RLEqUioSY4Ofq%2FWwOPYGyqoJbnp1b%2BcaREv9ZZ8TvwvSQTulDdTU%2B&X-Amz-Signature=da99faa7ddbc8b17e220f0764a45db6ee0a32df98721db8133113f95e24c43b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUIATYI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkbjX986z27HzxUC7Yy2jmsX1fY27HHodHMWLW%2BeJ9uAiBqMoIef8UmLZYUQTLP76VsktYX7jQfOknKWe%2Bkbig8NSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMdgVRvhSmorAfQ3frKtwDl3bJOQAdvySrESLl%2FY4eixFxIcvJyTxvh6mrSiGbeHSPahnbsGS8vwbs2xa%2B%2FtcQmgUYbTBnCu981KQDs9cla4alQV7iAAgmx%2FDz1fS73HQt%2B8eBnH1h8%2BjIvLmVULJ7SmGBxsDN55ubbn2pWyx6Tf7wBeW%2FYmK9ozUpNMNqUHwSbGQLi8VKMZdRCu9iSNkUD4URkKUb0ngoiNbv3%2BLaP3yuVM0oG43JjBtEODDQbibaxDMHA49i4Z3bedIX2wA4EHLZqGcgXC5HiYIKYOgs9BsV6HKsHubHaA4xmKVAx88Au6OYWBk7UWMGmMxApTqPF0n31cRAQbcX0OSP1Ia8bEgoTnwaRRNfPkvBg%2B9c9rPAeBoHB6e3o8sWYXeLnp%2BTZi0giNiQNqfAE%2F8%2FR%2BKv82%2BBqbNnuLNVWD6bXw3YL%2BbCjD7oQgig5XtOrnt8CPojNPhgynXvxVtZU53RTIzdphNY9%2B%2B%2F6HH1IFQBOdzDjOrhkiJg%2F8KgqasjrEpPffwRT2NnVWoDi1PFzzvuMtUexrQF8jdPHnXqYgIUIsgxYqP8YfhArV%2FOegDaAR74tXDZOnugYXHOup0G2ASjmNi4rfZowPrgbsNSZPsKoXLfx3vs5%2BjEUhW%2FeXfMX7Awkuv1vwY6pgFOq1lMrscxVymJPrKy%2FoK2csc9QuaJNBYZx9o5kjz9Ku88CvqGXExtSwG9hJNYOWfAuT62LnkqPExTKD16qfD6ENCjgFuq9OJBLfc1CxpDZv2WqCdtYlUj43bKdE2y0ODWxWIBUD%2FmjOELNkNCywavXAGfb4%2BWVET01%2BwZ9L7RLEqUioSY4Ofq%2FWwOPYGyqoJbnp1b%2BcaREv9ZZ8TvwvSQTulDdTU%2B&X-Amz-Signature=098ae3553789e688e5bb02fda7a4c4427d5afe04221d6cbadbf9e73139bf6605&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
