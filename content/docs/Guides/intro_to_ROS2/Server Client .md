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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVZU6PS%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCIKkvC5Xw7wisvFRq%2FCd86Kw5QTT1WiCIqoQG3erH9mAIgVFY1AiJX9dSi3TB6D3O6SJ8XknocxNffQP%2Fwy%2B%2BLWd0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHrRqpnkNCe1QoKGCrcA0Z0ppG%2FZN2l5wH%2B18UCXTNvpMYtTDbzTBUCd7eCZc3jisKcz7JDb8nM2aaJcyCzwLqRDcRxx9k%2FZocTy2OwMX00LHLW3t1xAH5DtTHLjXYt5BjrpIYZTL6Oof%2FFtVh33WwbykV6wwbwbY6NerVppVGSaJtGjgaTauVDJpE8fTFSbbWNlq3GpX2l2KLI5CjuYsl57c64306mQTHBsjHmVG1egIEeZzMBvnom1FzkczfqpQ75vEIKcSVwWx8neijLwajbe37nW62AQOoCr0i4rvd2k4pqkoFAcT1k4xRMlHaqWRHtK0K6XS4bEjcWkpEb8hlIsMEl2mLZTtydvN3zBXEh4kdBwChWRD4i9i2dx7RsDqYIqw8f8uZPMzCABeypDJmD6eMHszYagVBEaFTwM2jjy%2B04eNGOZ42%2Fp1O58M1K%2FcfY9hOzi%2BCELUPet%2FRQz7cymP5uHQGJbDfnCSALGhFS1e5BlMAvlofE81YqQOZCczUaBOFxjFaRQbZ8RHATv1yOmqjLeX5wckhW6QUaUZJs23a3TZhH7o2MpQG2C1x6asFHRv7M3AU0IdQ%2Fxd%2B7p0nVBsh%2BeZGsc9zQIlwMz7NuhryDqMKArVi9YOt6ryfzHBjOVj5AZScRu2l8MN%2Bt28cGOqUB1IJucvmxq2FQ3IQ9Ftq6obDi6OnqIeHPbKPG4zNbtVACb1weaYcvJkGtfJUnW%2BNsDwtmMF7JEbFUi5THdMnOlYhO6Kt6VyI1TLp%2F7eFED0ye5XwMTlRejtpJAsjfQPzmzyC%2FC1I5FPuc7Q78YEd0GT83MFM8iP2iC465LofecltXELEdbJC0P34SQwsKkyrtLi1MCzG8htjL5no1sOgmYyVInd5h&X-Amz-Signature=031e6c979fd23de8e227527b1b104fba712865e1d1e881be2744b4ce302ccfc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVZU6PS%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCIKkvC5Xw7wisvFRq%2FCd86Kw5QTT1WiCIqoQG3erH9mAIgVFY1AiJX9dSi3TB6D3O6SJ8XknocxNffQP%2Fwy%2B%2BLWd0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHrRqpnkNCe1QoKGCrcA0Z0ppG%2FZN2l5wH%2B18UCXTNvpMYtTDbzTBUCd7eCZc3jisKcz7JDb8nM2aaJcyCzwLqRDcRxx9k%2FZocTy2OwMX00LHLW3t1xAH5DtTHLjXYt5BjrpIYZTL6Oof%2FFtVh33WwbykV6wwbwbY6NerVppVGSaJtGjgaTauVDJpE8fTFSbbWNlq3GpX2l2KLI5CjuYsl57c64306mQTHBsjHmVG1egIEeZzMBvnom1FzkczfqpQ75vEIKcSVwWx8neijLwajbe37nW62AQOoCr0i4rvd2k4pqkoFAcT1k4xRMlHaqWRHtK0K6XS4bEjcWkpEb8hlIsMEl2mLZTtydvN3zBXEh4kdBwChWRD4i9i2dx7RsDqYIqw8f8uZPMzCABeypDJmD6eMHszYagVBEaFTwM2jjy%2B04eNGOZ42%2Fp1O58M1K%2FcfY9hOzi%2BCELUPet%2FRQz7cymP5uHQGJbDfnCSALGhFS1e5BlMAvlofE81YqQOZCczUaBOFxjFaRQbZ8RHATv1yOmqjLeX5wckhW6QUaUZJs23a3TZhH7o2MpQG2C1x6asFHRv7M3AU0IdQ%2Fxd%2B7p0nVBsh%2BeZGsc9zQIlwMz7NuhryDqMKArVi9YOt6ryfzHBjOVj5AZScRu2l8MN%2Bt28cGOqUB1IJucvmxq2FQ3IQ9Ftq6obDi6OnqIeHPbKPG4zNbtVACb1weaYcvJkGtfJUnW%2BNsDwtmMF7JEbFUi5THdMnOlYhO6Kt6VyI1TLp%2F7eFED0ye5XwMTlRejtpJAsjfQPzmzyC%2FC1I5FPuc7Q78YEd0GT83MFM8iP2iC465LofecltXELEdbJC0P34SQwsKkyrtLi1MCzG8htjL5no1sOgmYyVInd5h&X-Amz-Signature=7fc693abfdfc4ee2602eaca4f56f15521757e51db9179b6e4bac518e4bb2704e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVZU6PS%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCIKkvC5Xw7wisvFRq%2FCd86Kw5QTT1WiCIqoQG3erH9mAIgVFY1AiJX9dSi3TB6D3O6SJ8XknocxNffQP%2Fwy%2B%2BLWd0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHrRqpnkNCe1QoKGCrcA0Z0ppG%2FZN2l5wH%2B18UCXTNvpMYtTDbzTBUCd7eCZc3jisKcz7JDb8nM2aaJcyCzwLqRDcRxx9k%2FZocTy2OwMX00LHLW3t1xAH5DtTHLjXYt5BjrpIYZTL6Oof%2FFtVh33WwbykV6wwbwbY6NerVppVGSaJtGjgaTauVDJpE8fTFSbbWNlq3GpX2l2KLI5CjuYsl57c64306mQTHBsjHmVG1egIEeZzMBvnom1FzkczfqpQ75vEIKcSVwWx8neijLwajbe37nW62AQOoCr0i4rvd2k4pqkoFAcT1k4xRMlHaqWRHtK0K6XS4bEjcWkpEb8hlIsMEl2mLZTtydvN3zBXEh4kdBwChWRD4i9i2dx7RsDqYIqw8f8uZPMzCABeypDJmD6eMHszYagVBEaFTwM2jjy%2B04eNGOZ42%2Fp1O58M1K%2FcfY9hOzi%2BCELUPet%2FRQz7cymP5uHQGJbDfnCSALGhFS1e5BlMAvlofE81YqQOZCczUaBOFxjFaRQbZ8RHATv1yOmqjLeX5wckhW6QUaUZJs23a3TZhH7o2MpQG2C1x6asFHRv7M3AU0IdQ%2Fxd%2B7p0nVBsh%2BeZGsc9zQIlwMz7NuhryDqMKArVi9YOt6ryfzHBjOVj5AZScRu2l8MN%2Bt28cGOqUB1IJucvmxq2FQ3IQ9Ftq6obDi6OnqIeHPbKPG4zNbtVACb1weaYcvJkGtfJUnW%2BNsDwtmMF7JEbFUi5THdMnOlYhO6Kt6VyI1TLp%2F7eFED0ye5XwMTlRejtpJAsjfQPzmzyC%2FC1I5FPuc7Q78YEd0GT83MFM8iP2iC465LofecltXELEdbJC0P34SQwsKkyrtLi1MCzG8htjL5no1sOgmYyVInd5h&X-Amz-Signature=510dd7e85fe5beeaa7e9c37b80d0ad3d69839d0f8afe6b661abbca2a1c1dfda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVZU6PS%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCIKkvC5Xw7wisvFRq%2FCd86Kw5QTT1WiCIqoQG3erH9mAIgVFY1AiJX9dSi3TB6D3O6SJ8XknocxNffQP%2Fwy%2B%2BLWd0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHrRqpnkNCe1QoKGCrcA0Z0ppG%2FZN2l5wH%2B18UCXTNvpMYtTDbzTBUCd7eCZc3jisKcz7JDb8nM2aaJcyCzwLqRDcRxx9k%2FZocTy2OwMX00LHLW3t1xAH5DtTHLjXYt5BjrpIYZTL6Oof%2FFtVh33WwbykV6wwbwbY6NerVppVGSaJtGjgaTauVDJpE8fTFSbbWNlq3GpX2l2KLI5CjuYsl57c64306mQTHBsjHmVG1egIEeZzMBvnom1FzkczfqpQ75vEIKcSVwWx8neijLwajbe37nW62AQOoCr0i4rvd2k4pqkoFAcT1k4xRMlHaqWRHtK0K6XS4bEjcWkpEb8hlIsMEl2mLZTtydvN3zBXEh4kdBwChWRD4i9i2dx7RsDqYIqw8f8uZPMzCABeypDJmD6eMHszYagVBEaFTwM2jjy%2B04eNGOZ42%2Fp1O58M1K%2FcfY9hOzi%2BCELUPet%2FRQz7cymP5uHQGJbDfnCSALGhFS1e5BlMAvlofE81YqQOZCczUaBOFxjFaRQbZ8RHATv1yOmqjLeX5wckhW6QUaUZJs23a3TZhH7o2MpQG2C1x6asFHRv7M3AU0IdQ%2Fxd%2B7p0nVBsh%2BeZGsc9zQIlwMz7NuhryDqMKArVi9YOt6ryfzHBjOVj5AZScRu2l8MN%2Bt28cGOqUB1IJucvmxq2FQ3IQ9Ftq6obDi6OnqIeHPbKPG4zNbtVACb1weaYcvJkGtfJUnW%2BNsDwtmMF7JEbFUi5THdMnOlYhO6Kt6VyI1TLp%2F7eFED0ye5XwMTlRejtpJAsjfQPzmzyC%2FC1I5FPuc7Q78YEd0GT83MFM8iP2iC465LofecltXELEdbJC0P34SQwsKkyrtLi1MCzG8htjL5no1sOgmYyVInd5h&X-Amz-Signature=cbe8eb89aa7fdd964f38d3acbf5819f7e6dbf4d4215aec0d5c80ca6d1abb9be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVZU6PS%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCIKkvC5Xw7wisvFRq%2FCd86Kw5QTT1WiCIqoQG3erH9mAIgVFY1AiJX9dSi3TB6D3O6SJ8XknocxNffQP%2Fwy%2B%2BLWd0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHrRqpnkNCe1QoKGCrcA0Z0ppG%2FZN2l5wH%2B18UCXTNvpMYtTDbzTBUCd7eCZc3jisKcz7JDb8nM2aaJcyCzwLqRDcRxx9k%2FZocTy2OwMX00LHLW3t1xAH5DtTHLjXYt5BjrpIYZTL6Oof%2FFtVh33WwbykV6wwbwbY6NerVppVGSaJtGjgaTauVDJpE8fTFSbbWNlq3GpX2l2KLI5CjuYsl57c64306mQTHBsjHmVG1egIEeZzMBvnom1FzkczfqpQ75vEIKcSVwWx8neijLwajbe37nW62AQOoCr0i4rvd2k4pqkoFAcT1k4xRMlHaqWRHtK0K6XS4bEjcWkpEb8hlIsMEl2mLZTtydvN3zBXEh4kdBwChWRD4i9i2dx7RsDqYIqw8f8uZPMzCABeypDJmD6eMHszYagVBEaFTwM2jjy%2B04eNGOZ42%2Fp1O58M1K%2FcfY9hOzi%2BCELUPet%2FRQz7cymP5uHQGJbDfnCSALGhFS1e5BlMAvlofE81YqQOZCczUaBOFxjFaRQbZ8RHATv1yOmqjLeX5wckhW6QUaUZJs23a3TZhH7o2MpQG2C1x6asFHRv7M3AU0IdQ%2Fxd%2B7p0nVBsh%2BeZGsc9zQIlwMz7NuhryDqMKArVi9YOt6ryfzHBjOVj5AZScRu2l8MN%2Bt28cGOqUB1IJucvmxq2FQ3IQ9Ftq6obDi6OnqIeHPbKPG4zNbtVACb1weaYcvJkGtfJUnW%2BNsDwtmMF7JEbFUi5THdMnOlYhO6Kt6VyI1TLp%2F7eFED0ye5XwMTlRejtpJAsjfQPzmzyC%2FC1I5FPuc7Q78YEd0GT83MFM8iP2iC465LofecltXELEdbJC0P34SQwsKkyrtLi1MCzG8htjL5no1sOgmYyVInd5h&X-Amz-Signature=6a0745f55dc1b8f0f4d78ca3770ca8081b8f515bf50dc6371f32a2b615111c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
