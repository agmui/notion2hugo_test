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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPJ3HMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfuH7wiKRgkduKz6l%2FTfyPFLSMXkOJ8sy7%2B6hVCa9yywIhAM9cy%2BtUFQ6nSUiEMf3NqqKmXntutgItS6d0P9KulrTPKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQfWAUW3D7sxZgFgMq3AOulWxe1mElY2JB9d3bAbihn4wxsrzzBsFM5GO%2B2W%2B3YfnDnqO40X8OMOhT9MgYOrGA%2FfElcuyn%2FeKCGbXkrkAkq5OayZClEQxjsTt3Ao4%2FbLsmM8YevqdBAOPMerT5a6kPLqKWZAItC%2BLEfoneQMfNkmrqrwsDQg53qfMdaGGKDTv65UwVWUouCFzzHq%2B0%2BNuB55B74tQgpocOY%2BcMUWemkpAASAX0t18ekSnuKve34%2BH3RFR9%2Bo72%2Ff0wrV1vz%2FWRDtUoYuE6f4eUAc9epjmxxExqXEqupkOMhFNHdvumdE2JV3vXEV6LWu8ec3nqT%2FwZma%2BYimneqDVkhZYOA%2FKGGHpz49zZuUigM2lK%2BMV3DWQb751oh2iLPW%2FBFwIsTF812UUfkVHqqmtwX8PoqdOhyd7pe5F2cp8JPW4HkDbv7vErmVIzQDfmBAu3rNcICilUxllPonw3qvDFf0sjaCc2VRj3exMwSjZniBq5g4%2BFOSNCY4JfhH6amPf86HtLG706mYOJ7jLiOJ94LnyLhKFQbGUV7UoXBpvVc7wBcH%2BFPk0wr3EAkcFa78G9X1oyq99AHHOhZApQftKPzTkfCv%2F4HAPTNTCuxtH9m58Qhn6PXcii%2BP2JbJVTzVML4jCg25XABjqkAYOQ%2B6WY6I35%2Fbyc3cu7Kh4RljKmzcr3URkVYq2o10VLQpihFXFGZz16DIUYfumRACBQaTjvL4K1DshfLYz0gVrR0zpU4L7opLMgANyRmJtazJUsqu%2BwoIn9EhRsoHS07enp5pGOIKARRDac0HtMyYkaIrp8SUY1Bk70r4t6cBvL5vDcAScLsUPN%2BhZrHDUhb92wP2AoBMVKUz%2FwcMyHdXVHdQf0&X-Amz-Signature=e24771d01eb9cda812caa800ae722325b854a1228be085e29c58a4ca6c59b5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPJ3HMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfuH7wiKRgkduKz6l%2FTfyPFLSMXkOJ8sy7%2B6hVCa9yywIhAM9cy%2BtUFQ6nSUiEMf3NqqKmXntutgItS6d0P9KulrTPKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQfWAUW3D7sxZgFgMq3AOulWxe1mElY2JB9d3bAbihn4wxsrzzBsFM5GO%2B2W%2B3YfnDnqO40X8OMOhT9MgYOrGA%2FfElcuyn%2FeKCGbXkrkAkq5OayZClEQxjsTt3Ao4%2FbLsmM8YevqdBAOPMerT5a6kPLqKWZAItC%2BLEfoneQMfNkmrqrwsDQg53qfMdaGGKDTv65UwVWUouCFzzHq%2B0%2BNuB55B74tQgpocOY%2BcMUWemkpAASAX0t18ekSnuKve34%2BH3RFR9%2Bo72%2Ff0wrV1vz%2FWRDtUoYuE6f4eUAc9epjmxxExqXEqupkOMhFNHdvumdE2JV3vXEV6LWu8ec3nqT%2FwZma%2BYimneqDVkhZYOA%2FKGGHpz49zZuUigM2lK%2BMV3DWQb751oh2iLPW%2FBFwIsTF812UUfkVHqqmtwX8PoqdOhyd7pe5F2cp8JPW4HkDbv7vErmVIzQDfmBAu3rNcICilUxllPonw3qvDFf0sjaCc2VRj3exMwSjZniBq5g4%2BFOSNCY4JfhH6amPf86HtLG706mYOJ7jLiOJ94LnyLhKFQbGUV7UoXBpvVc7wBcH%2BFPk0wr3EAkcFa78G9X1oyq99AHHOhZApQftKPzTkfCv%2F4HAPTNTCuxtH9m58Qhn6PXcii%2BP2JbJVTzVML4jCg25XABjqkAYOQ%2B6WY6I35%2Fbyc3cu7Kh4RljKmzcr3URkVYq2o10VLQpihFXFGZz16DIUYfumRACBQaTjvL4K1DshfLYz0gVrR0zpU4L7opLMgANyRmJtazJUsqu%2BwoIn9EhRsoHS07enp5pGOIKARRDac0HtMyYkaIrp8SUY1Bk70r4t6cBvL5vDcAScLsUPN%2BhZrHDUhb92wP2AoBMVKUz%2FwcMyHdXVHdQf0&X-Amz-Signature=58561cf47d232108515e18357a77f8e606509da8dee94e2f9aad5eb89dd01cab&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPJ3HMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfuH7wiKRgkduKz6l%2FTfyPFLSMXkOJ8sy7%2B6hVCa9yywIhAM9cy%2BtUFQ6nSUiEMf3NqqKmXntutgItS6d0P9KulrTPKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQfWAUW3D7sxZgFgMq3AOulWxe1mElY2JB9d3bAbihn4wxsrzzBsFM5GO%2B2W%2B3YfnDnqO40X8OMOhT9MgYOrGA%2FfElcuyn%2FeKCGbXkrkAkq5OayZClEQxjsTt3Ao4%2FbLsmM8YevqdBAOPMerT5a6kPLqKWZAItC%2BLEfoneQMfNkmrqrwsDQg53qfMdaGGKDTv65UwVWUouCFzzHq%2B0%2BNuB55B74tQgpocOY%2BcMUWemkpAASAX0t18ekSnuKve34%2BH3RFR9%2Bo72%2Ff0wrV1vz%2FWRDtUoYuE6f4eUAc9epjmxxExqXEqupkOMhFNHdvumdE2JV3vXEV6LWu8ec3nqT%2FwZma%2BYimneqDVkhZYOA%2FKGGHpz49zZuUigM2lK%2BMV3DWQb751oh2iLPW%2FBFwIsTF812UUfkVHqqmtwX8PoqdOhyd7pe5F2cp8JPW4HkDbv7vErmVIzQDfmBAu3rNcICilUxllPonw3qvDFf0sjaCc2VRj3exMwSjZniBq5g4%2BFOSNCY4JfhH6amPf86HtLG706mYOJ7jLiOJ94LnyLhKFQbGUV7UoXBpvVc7wBcH%2BFPk0wr3EAkcFa78G9X1oyq99AHHOhZApQftKPzTkfCv%2F4HAPTNTCuxtH9m58Qhn6PXcii%2BP2JbJVTzVML4jCg25XABjqkAYOQ%2B6WY6I35%2Fbyc3cu7Kh4RljKmzcr3URkVYq2o10VLQpihFXFGZz16DIUYfumRACBQaTjvL4K1DshfLYz0gVrR0zpU4L7opLMgANyRmJtazJUsqu%2BwoIn9EhRsoHS07enp5pGOIKARRDac0HtMyYkaIrp8SUY1Bk70r4t6cBvL5vDcAScLsUPN%2BhZrHDUhb92wP2AoBMVKUz%2FwcMyHdXVHdQf0&X-Amz-Signature=e1f7a4177ba1e640e25fcdca114b13bfcccb26b88bf046a1ae6c14fb7a92d442&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPJ3HMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfuH7wiKRgkduKz6l%2FTfyPFLSMXkOJ8sy7%2B6hVCa9yywIhAM9cy%2BtUFQ6nSUiEMf3NqqKmXntutgItS6d0P9KulrTPKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQfWAUW3D7sxZgFgMq3AOulWxe1mElY2JB9d3bAbihn4wxsrzzBsFM5GO%2B2W%2B3YfnDnqO40X8OMOhT9MgYOrGA%2FfElcuyn%2FeKCGbXkrkAkq5OayZClEQxjsTt3Ao4%2FbLsmM8YevqdBAOPMerT5a6kPLqKWZAItC%2BLEfoneQMfNkmrqrwsDQg53qfMdaGGKDTv65UwVWUouCFzzHq%2B0%2BNuB55B74tQgpocOY%2BcMUWemkpAASAX0t18ekSnuKve34%2BH3RFR9%2Bo72%2Ff0wrV1vz%2FWRDtUoYuE6f4eUAc9epjmxxExqXEqupkOMhFNHdvumdE2JV3vXEV6LWu8ec3nqT%2FwZma%2BYimneqDVkhZYOA%2FKGGHpz49zZuUigM2lK%2BMV3DWQb751oh2iLPW%2FBFwIsTF812UUfkVHqqmtwX8PoqdOhyd7pe5F2cp8JPW4HkDbv7vErmVIzQDfmBAu3rNcICilUxllPonw3qvDFf0sjaCc2VRj3exMwSjZniBq5g4%2BFOSNCY4JfhH6amPf86HtLG706mYOJ7jLiOJ94LnyLhKFQbGUV7UoXBpvVc7wBcH%2BFPk0wr3EAkcFa78G9X1oyq99AHHOhZApQftKPzTkfCv%2F4HAPTNTCuxtH9m58Qhn6PXcii%2BP2JbJVTzVML4jCg25XABjqkAYOQ%2B6WY6I35%2Fbyc3cu7Kh4RljKmzcr3URkVYq2o10VLQpihFXFGZz16DIUYfumRACBQaTjvL4K1DshfLYz0gVrR0zpU4L7opLMgANyRmJtazJUsqu%2BwoIn9EhRsoHS07enp5pGOIKARRDac0HtMyYkaIrp8SUY1Bk70r4t6cBvL5vDcAScLsUPN%2BhZrHDUhb92wP2AoBMVKUz%2FwcMyHdXVHdQf0&X-Amz-Signature=83b412e10f8fd1408d34c52d2712cbc02c6a8985f15a212f75d6e9d54257edb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPJ3HMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfuH7wiKRgkduKz6l%2FTfyPFLSMXkOJ8sy7%2B6hVCa9yywIhAM9cy%2BtUFQ6nSUiEMf3NqqKmXntutgItS6d0P9KulrTPKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQfWAUW3D7sxZgFgMq3AOulWxe1mElY2JB9d3bAbihn4wxsrzzBsFM5GO%2B2W%2B3YfnDnqO40X8OMOhT9MgYOrGA%2FfElcuyn%2FeKCGbXkrkAkq5OayZClEQxjsTt3Ao4%2FbLsmM8YevqdBAOPMerT5a6kPLqKWZAItC%2BLEfoneQMfNkmrqrwsDQg53qfMdaGGKDTv65UwVWUouCFzzHq%2B0%2BNuB55B74tQgpocOY%2BcMUWemkpAASAX0t18ekSnuKve34%2BH3RFR9%2Bo72%2Ff0wrV1vz%2FWRDtUoYuE6f4eUAc9epjmxxExqXEqupkOMhFNHdvumdE2JV3vXEV6LWu8ec3nqT%2FwZma%2BYimneqDVkhZYOA%2FKGGHpz49zZuUigM2lK%2BMV3DWQb751oh2iLPW%2FBFwIsTF812UUfkVHqqmtwX8PoqdOhyd7pe5F2cp8JPW4HkDbv7vErmVIzQDfmBAu3rNcICilUxllPonw3qvDFf0sjaCc2VRj3exMwSjZniBq5g4%2BFOSNCY4JfhH6amPf86HtLG706mYOJ7jLiOJ94LnyLhKFQbGUV7UoXBpvVc7wBcH%2BFPk0wr3EAkcFa78G9X1oyq99AHHOhZApQftKPzTkfCv%2F4HAPTNTCuxtH9m58Qhn6PXcii%2BP2JbJVTzVML4jCg25XABjqkAYOQ%2B6WY6I35%2Fbyc3cu7Kh4RljKmzcr3URkVYq2o10VLQpihFXFGZz16DIUYfumRACBQaTjvL4K1DshfLYz0gVrR0zpU4L7opLMgANyRmJtazJUsqu%2BwoIn9EhRsoHS07enp5pGOIKARRDac0HtMyYkaIrp8SUY1Bk70r4t6cBvL5vDcAScLsUPN%2BhZrHDUhb92wP2AoBMVKUz%2FwcMyHdXVHdQf0&X-Amz-Signature=770df1b34e13b94b03a9d350f41f1b4ecf0a7b12154bf94160296f71daa85bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
