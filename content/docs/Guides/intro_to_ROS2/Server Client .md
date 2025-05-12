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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NKASF4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCGdDGXl5lG9lMhNRYTb6rwK05%2Fwj%2B8HIpbH09HvWOrPAIhAMnsgI%2FxlAMjfNPsR8azyzyuBOqcIqf7TBbvBsRE6sASKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz35COs0rs0wk3%2BYPoq3AOGPs6b3lc5oXnx%2BOP1tyL9FBAgV1v3pulFHm7jLVeaK7GqTnME5myngwmYTgvFr8FT4y201lUFaJa%2FTE%2F4g%2FV71%2BNdE13mPUgl9idK9NAOyTjHoDtm4OtcaSgdY606SKz37i07n%2BxTLmKnGdNzMK1mfaOXQE7VUCDW9xTXcpth6prn0sdRyt6SaRIZqo2sz1D8kqZCOYT8Lp%2B38vzeFQzn5rIs4OkyQDqbgivEnQM54sWa8ra282Yk4v%2F4HikiwIGzRdbF8kVAv9XYNigJ%2B7j8aQqDrmJo8PxC4sld0a%2FtI0vZiF69VbVmE15j3VHxzG2o3ZbdqZQSjK5e2m08%2B1jSlgcLpprWPjGWN6okWwundyKuG5KdE9541QP6imNINa1k3OIbVTvYy7D6nS3lKoA0AY8jHna9Xfb9Gqtvvr73IPGpJrjryVwIHfkDJrGoqmk1AYbEBaEd3NKiZCoHtXy%2BAXFsEWEezUs2mOR5HlAJF8Q0OEwUFUVhS7XOXCFk9fW1A4Ky0z11mdOhIc1leVWIAFMQ7YjFdQe1HjeBcCZP%2BK%2Fl%2BmCwuk%2BVUoZ1w81J1C4mBPZqhOiKqpB1%2Bz9lE2CMHXsJbuX3T9c5R5TGz3NI9Ih1YGSCO6Kn8yk0iTDyhYXBBjqkASwoU336vwRABDZALIkyJkXRV%2B8WN3NDABKN2AbrefG0rnLOELSTY9xTO24BHKWtuK1P6%2Bpay86eaLxd8W%2FMrFObkZ11QHGUvo83iE5mDhlw%2BpGyq3CPDiUHeTc5OKIQ%2BkaoOPXeVkowl%2FaUf76%2Fa1dM6ThCFRFwpOrM7fWAOmIReZAb5uz%2BiMia6QyCzehdDPQGDWTAmQhebv60EJag7ZVETkoP&X-Amz-Signature=e2997f9d87b2480709d12e1a430b76e1f0f42349ba2b6e80bddacc7c824b748b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NKASF4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCGdDGXl5lG9lMhNRYTb6rwK05%2Fwj%2B8HIpbH09HvWOrPAIhAMnsgI%2FxlAMjfNPsR8azyzyuBOqcIqf7TBbvBsRE6sASKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz35COs0rs0wk3%2BYPoq3AOGPs6b3lc5oXnx%2BOP1tyL9FBAgV1v3pulFHm7jLVeaK7GqTnME5myngwmYTgvFr8FT4y201lUFaJa%2FTE%2F4g%2FV71%2BNdE13mPUgl9idK9NAOyTjHoDtm4OtcaSgdY606SKz37i07n%2BxTLmKnGdNzMK1mfaOXQE7VUCDW9xTXcpth6prn0sdRyt6SaRIZqo2sz1D8kqZCOYT8Lp%2B38vzeFQzn5rIs4OkyQDqbgivEnQM54sWa8ra282Yk4v%2F4HikiwIGzRdbF8kVAv9XYNigJ%2B7j8aQqDrmJo8PxC4sld0a%2FtI0vZiF69VbVmE15j3VHxzG2o3ZbdqZQSjK5e2m08%2B1jSlgcLpprWPjGWN6okWwundyKuG5KdE9541QP6imNINa1k3OIbVTvYy7D6nS3lKoA0AY8jHna9Xfb9Gqtvvr73IPGpJrjryVwIHfkDJrGoqmk1AYbEBaEd3NKiZCoHtXy%2BAXFsEWEezUs2mOR5HlAJF8Q0OEwUFUVhS7XOXCFk9fW1A4Ky0z11mdOhIc1leVWIAFMQ7YjFdQe1HjeBcCZP%2BK%2Fl%2BmCwuk%2BVUoZ1w81J1C4mBPZqhOiKqpB1%2Bz9lE2CMHXsJbuX3T9c5R5TGz3NI9Ih1YGSCO6Kn8yk0iTDyhYXBBjqkASwoU336vwRABDZALIkyJkXRV%2B8WN3NDABKN2AbrefG0rnLOELSTY9xTO24BHKWtuK1P6%2Bpay86eaLxd8W%2FMrFObkZ11QHGUvo83iE5mDhlw%2BpGyq3CPDiUHeTc5OKIQ%2BkaoOPXeVkowl%2FaUf76%2Fa1dM6ThCFRFwpOrM7fWAOmIReZAb5uz%2BiMia6QyCzehdDPQGDWTAmQhebv60EJag7ZVETkoP&X-Amz-Signature=721604092484a0acd54c74e9dfb199db42ead33d3d27ec0143a827cb2606b202&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NKASF4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCGdDGXl5lG9lMhNRYTb6rwK05%2Fwj%2B8HIpbH09HvWOrPAIhAMnsgI%2FxlAMjfNPsR8azyzyuBOqcIqf7TBbvBsRE6sASKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz35COs0rs0wk3%2BYPoq3AOGPs6b3lc5oXnx%2BOP1tyL9FBAgV1v3pulFHm7jLVeaK7GqTnME5myngwmYTgvFr8FT4y201lUFaJa%2FTE%2F4g%2FV71%2BNdE13mPUgl9idK9NAOyTjHoDtm4OtcaSgdY606SKz37i07n%2BxTLmKnGdNzMK1mfaOXQE7VUCDW9xTXcpth6prn0sdRyt6SaRIZqo2sz1D8kqZCOYT8Lp%2B38vzeFQzn5rIs4OkyQDqbgivEnQM54sWa8ra282Yk4v%2F4HikiwIGzRdbF8kVAv9XYNigJ%2B7j8aQqDrmJo8PxC4sld0a%2FtI0vZiF69VbVmE15j3VHxzG2o3ZbdqZQSjK5e2m08%2B1jSlgcLpprWPjGWN6okWwundyKuG5KdE9541QP6imNINa1k3OIbVTvYy7D6nS3lKoA0AY8jHna9Xfb9Gqtvvr73IPGpJrjryVwIHfkDJrGoqmk1AYbEBaEd3NKiZCoHtXy%2BAXFsEWEezUs2mOR5HlAJF8Q0OEwUFUVhS7XOXCFk9fW1A4Ky0z11mdOhIc1leVWIAFMQ7YjFdQe1HjeBcCZP%2BK%2Fl%2BmCwuk%2BVUoZ1w81J1C4mBPZqhOiKqpB1%2Bz9lE2CMHXsJbuX3T9c5R5TGz3NI9Ih1YGSCO6Kn8yk0iTDyhYXBBjqkASwoU336vwRABDZALIkyJkXRV%2B8WN3NDABKN2AbrefG0rnLOELSTY9xTO24BHKWtuK1P6%2Bpay86eaLxd8W%2FMrFObkZ11QHGUvo83iE5mDhlw%2BpGyq3CPDiUHeTc5OKIQ%2BkaoOPXeVkowl%2FaUf76%2Fa1dM6ThCFRFwpOrM7fWAOmIReZAb5uz%2BiMia6QyCzehdDPQGDWTAmQhebv60EJag7ZVETkoP&X-Amz-Signature=9083c4ecce63e0ee7cfe531a2dd6d2bc37a8c51a7010b0d5f65951d200454d27&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NKASF4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCGdDGXl5lG9lMhNRYTb6rwK05%2Fwj%2B8HIpbH09HvWOrPAIhAMnsgI%2FxlAMjfNPsR8azyzyuBOqcIqf7TBbvBsRE6sASKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz35COs0rs0wk3%2BYPoq3AOGPs6b3lc5oXnx%2BOP1tyL9FBAgV1v3pulFHm7jLVeaK7GqTnME5myngwmYTgvFr8FT4y201lUFaJa%2FTE%2F4g%2FV71%2BNdE13mPUgl9idK9NAOyTjHoDtm4OtcaSgdY606SKz37i07n%2BxTLmKnGdNzMK1mfaOXQE7VUCDW9xTXcpth6prn0sdRyt6SaRIZqo2sz1D8kqZCOYT8Lp%2B38vzeFQzn5rIs4OkyQDqbgivEnQM54sWa8ra282Yk4v%2F4HikiwIGzRdbF8kVAv9XYNigJ%2B7j8aQqDrmJo8PxC4sld0a%2FtI0vZiF69VbVmE15j3VHxzG2o3ZbdqZQSjK5e2m08%2B1jSlgcLpprWPjGWN6okWwundyKuG5KdE9541QP6imNINa1k3OIbVTvYy7D6nS3lKoA0AY8jHna9Xfb9Gqtvvr73IPGpJrjryVwIHfkDJrGoqmk1AYbEBaEd3NKiZCoHtXy%2BAXFsEWEezUs2mOR5HlAJF8Q0OEwUFUVhS7XOXCFk9fW1A4Ky0z11mdOhIc1leVWIAFMQ7YjFdQe1HjeBcCZP%2BK%2Fl%2BmCwuk%2BVUoZ1w81J1C4mBPZqhOiKqpB1%2Bz9lE2CMHXsJbuX3T9c5R5TGz3NI9Ih1YGSCO6Kn8yk0iTDyhYXBBjqkASwoU336vwRABDZALIkyJkXRV%2B8WN3NDABKN2AbrefG0rnLOELSTY9xTO24BHKWtuK1P6%2Bpay86eaLxd8W%2FMrFObkZ11QHGUvo83iE5mDhlw%2BpGyq3CPDiUHeTc5OKIQ%2BkaoOPXeVkowl%2FaUf76%2Fa1dM6ThCFRFwpOrM7fWAOmIReZAb5uz%2BiMia6QyCzehdDPQGDWTAmQhebv60EJag7ZVETkoP&X-Amz-Signature=1400380b3e92f97db153d008d903c0c8a918d46685e4ef1aafb1e2198279b725&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NKASF4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCGdDGXl5lG9lMhNRYTb6rwK05%2Fwj%2B8HIpbH09HvWOrPAIhAMnsgI%2FxlAMjfNPsR8azyzyuBOqcIqf7TBbvBsRE6sASKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz35COs0rs0wk3%2BYPoq3AOGPs6b3lc5oXnx%2BOP1tyL9FBAgV1v3pulFHm7jLVeaK7GqTnME5myngwmYTgvFr8FT4y201lUFaJa%2FTE%2F4g%2FV71%2BNdE13mPUgl9idK9NAOyTjHoDtm4OtcaSgdY606SKz37i07n%2BxTLmKnGdNzMK1mfaOXQE7VUCDW9xTXcpth6prn0sdRyt6SaRIZqo2sz1D8kqZCOYT8Lp%2B38vzeFQzn5rIs4OkyQDqbgivEnQM54sWa8ra282Yk4v%2F4HikiwIGzRdbF8kVAv9XYNigJ%2B7j8aQqDrmJo8PxC4sld0a%2FtI0vZiF69VbVmE15j3VHxzG2o3ZbdqZQSjK5e2m08%2B1jSlgcLpprWPjGWN6okWwundyKuG5KdE9541QP6imNINa1k3OIbVTvYy7D6nS3lKoA0AY8jHna9Xfb9Gqtvvr73IPGpJrjryVwIHfkDJrGoqmk1AYbEBaEd3NKiZCoHtXy%2BAXFsEWEezUs2mOR5HlAJF8Q0OEwUFUVhS7XOXCFk9fW1A4Ky0z11mdOhIc1leVWIAFMQ7YjFdQe1HjeBcCZP%2BK%2Fl%2BmCwuk%2BVUoZ1w81J1C4mBPZqhOiKqpB1%2Bz9lE2CMHXsJbuX3T9c5R5TGz3NI9Ih1YGSCO6Kn8yk0iTDyhYXBBjqkASwoU336vwRABDZALIkyJkXRV%2B8WN3NDABKN2AbrefG0rnLOELSTY9xTO24BHKWtuK1P6%2Bpay86eaLxd8W%2FMrFObkZ11QHGUvo83iE5mDhlw%2BpGyq3CPDiUHeTc5OKIQ%2BkaoOPXeVkowl%2FaUf76%2Fa1dM6ThCFRFwpOrM7fWAOmIReZAb5uz%2BiMia6QyCzehdDPQGDWTAmQhebv60EJag7ZVETkoP&X-Amz-Signature=430c9b7028eda260bd1f7b163ba43f69ed057e46beeb12a17397ef93fa5274ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
