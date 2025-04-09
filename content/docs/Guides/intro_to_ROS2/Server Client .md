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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXCKRQ2Y%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGeCfwwBepQ86FvEa2d6WPYWTF8fDBfHnIV2OKvt3JYiAiEAyNxsqmchh%2FOROh1sDQ4ld3FDQGB3SSarbMWxbqJzp%2F4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaEgDDkWRuSi2h79yrcAxVy3R4puVwBHW4k29CvvMf2AU6hzYhOftAuFZRgHEtnqYQ4Xu6IJ5UU%2BTsrErn881fZUJcqwR6hy%2B4bXCQUjyW6S0d84qFPx939HHm8En5lVE4N82Dw6teKKlmYMs40djSN0NjloFhxWcMAk58AhamPsIdfA3qUrTDj3sZALXKqhs647B1DVsw47pBrxT9WWWIOLaejGWVD%2Fm9EctQLVRlo9jvSy0TjntfioPUBGc5Gr%2BJG1RPEGAzFXFX9FkgIUCjLMFu4cxgEA%2BXfJ2piBpvpnJgstmt08239MQp%2BjGptR2XTcfFbwu1ORth9%2BAnIftKGV%2F%2FeRjTnn6aSKh%2F64MqffA%2BFn4S%2FTpmQ0%2BGwOcHK9S6U86Ay6E9njUL02%2B1D23gFq55tEBH%2FWsfSQuRQM%2FHh%2FT8QahvP%2BtCe71X2jJEnpL2qPAiX6Z0oyf4fQkBQJjBqdJ2A4FTMifNAtNC4rtAOXk%2Bzk4HY%2FFsds928OWZplJw7C7h7UjzQgInvfM9TmEBjs3pfEsJmd6WujrVjQJCf1I0SCJPkFRC9ItNkInC9SksFPWexkIgfFTuYrVcv2%2FPvJS5HltiXSKhmmfjctv18iPdJUFeJWPb8jmBdcHwIjmH8fUg1ZFIvNaRNMMrJ2r8GOqUBwTZINn5L9yxGdMD0dZGDr%2BVqMc0Aq5F8vY3ADhFN%2FWEL5CXR1rhuer0RB2BTpNN85DbnEjzw7VIoaqqyvyeL3Y2JDJJoUZaenitpNhdW2ejSXJrY0LWcPEXud%2B2Pz5mG89vW4YhsNIQ%2Bhv%2BC3egLpCJAu5MUY0fw%2BbBrdG92yNb4a9zOsxYd8aTdF2Er6uKYU0s8bNf7YuP8zxn4OcJiPqinrAnh&X-Amz-Signature=85c94651b3276e630a26d2864334107b394ce8d7ffa72df536ecfa339e0f568a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXCKRQ2Y%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGeCfwwBepQ86FvEa2d6WPYWTF8fDBfHnIV2OKvt3JYiAiEAyNxsqmchh%2FOROh1sDQ4ld3FDQGB3SSarbMWxbqJzp%2F4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaEgDDkWRuSi2h79yrcAxVy3R4puVwBHW4k29CvvMf2AU6hzYhOftAuFZRgHEtnqYQ4Xu6IJ5UU%2BTsrErn881fZUJcqwR6hy%2B4bXCQUjyW6S0d84qFPx939HHm8En5lVE4N82Dw6teKKlmYMs40djSN0NjloFhxWcMAk58AhamPsIdfA3qUrTDj3sZALXKqhs647B1DVsw47pBrxT9WWWIOLaejGWVD%2Fm9EctQLVRlo9jvSy0TjntfioPUBGc5Gr%2BJG1RPEGAzFXFX9FkgIUCjLMFu4cxgEA%2BXfJ2piBpvpnJgstmt08239MQp%2BjGptR2XTcfFbwu1ORth9%2BAnIftKGV%2F%2FeRjTnn6aSKh%2F64MqffA%2BFn4S%2FTpmQ0%2BGwOcHK9S6U86Ay6E9njUL02%2B1D23gFq55tEBH%2FWsfSQuRQM%2FHh%2FT8QahvP%2BtCe71X2jJEnpL2qPAiX6Z0oyf4fQkBQJjBqdJ2A4FTMifNAtNC4rtAOXk%2Bzk4HY%2FFsds928OWZplJw7C7h7UjzQgInvfM9TmEBjs3pfEsJmd6WujrVjQJCf1I0SCJPkFRC9ItNkInC9SksFPWexkIgfFTuYrVcv2%2FPvJS5HltiXSKhmmfjctv18iPdJUFeJWPb8jmBdcHwIjmH8fUg1ZFIvNaRNMMrJ2r8GOqUBwTZINn5L9yxGdMD0dZGDr%2BVqMc0Aq5F8vY3ADhFN%2FWEL5CXR1rhuer0RB2BTpNN85DbnEjzw7VIoaqqyvyeL3Y2JDJJoUZaenitpNhdW2ejSXJrY0LWcPEXud%2B2Pz5mG89vW4YhsNIQ%2Bhv%2BC3egLpCJAu5MUY0fw%2BbBrdG92yNb4a9zOsxYd8aTdF2Er6uKYU0s8bNf7YuP8zxn4OcJiPqinrAnh&X-Amz-Signature=5a178ca45b3f599e5d1c5260f89d12a2e8cb9b1f60113fd8ab49a49787f79357&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXCKRQ2Y%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGeCfwwBepQ86FvEa2d6WPYWTF8fDBfHnIV2OKvt3JYiAiEAyNxsqmchh%2FOROh1sDQ4ld3FDQGB3SSarbMWxbqJzp%2F4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaEgDDkWRuSi2h79yrcAxVy3R4puVwBHW4k29CvvMf2AU6hzYhOftAuFZRgHEtnqYQ4Xu6IJ5UU%2BTsrErn881fZUJcqwR6hy%2B4bXCQUjyW6S0d84qFPx939HHm8En5lVE4N82Dw6teKKlmYMs40djSN0NjloFhxWcMAk58AhamPsIdfA3qUrTDj3sZALXKqhs647B1DVsw47pBrxT9WWWIOLaejGWVD%2Fm9EctQLVRlo9jvSy0TjntfioPUBGc5Gr%2BJG1RPEGAzFXFX9FkgIUCjLMFu4cxgEA%2BXfJ2piBpvpnJgstmt08239MQp%2BjGptR2XTcfFbwu1ORth9%2BAnIftKGV%2F%2FeRjTnn6aSKh%2F64MqffA%2BFn4S%2FTpmQ0%2BGwOcHK9S6U86Ay6E9njUL02%2B1D23gFq55tEBH%2FWsfSQuRQM%2FHh%2FT8QahvP%2BtCe71X2jJEnpL2qPAiX6Z0oyf4fQkBQJjBqdJ2A4FTMifNAtNC4rtAOXk%2Bzk4HY%2FFsds928OWZplJw7C7h7UjzQgInvfM9TmEBjs3pfEsJmd6WujrVjQJCf1I0SCJPkFRC9ItNkInC9SksFPWexkIgfFTuYrVcv2%2FPvJS5HltiXSKhmmfjctv18iPdJUFeJWPb8jmBdcHwIjmH8fUg1ZFIvNaRNMMrJ2r8GOqUBwTZINn5L9yxGdMD0dZGDr%2BVqMc0Aq5F8vY3ADhFN%2FWEL5CXR1rhuer0RB2BTpNN85DbnEjzw7VIoaqqyvyeL3Y2JDJJoUZaenitpNhdW2ejSXJrY0LWcPEXud%2B2Pz5mG89vW4YhsNIQ%2Bhv%2BC3egLpCJAu5MUY0fw%2BbBrdG92yNb4a9zOsxYd8aTdF2Er6uKYU0s8bNf7YuP8zxn4OcJiPqinrAnh&X-Amz-Signature=e88f6b3a3d2dcd9a9eaad72e1d42f297a50a766b8adcaa20a4ca235b60bca09b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXCKRQ2Y%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGeCfwwBepQ86FvEa2d6WPYWTF8fDBfHnIV2OKvt3JYiAiEAyNxsqmchh%2FOROh1sDQ4ld3FDQGB3SSarbMWxbqJzp%2F4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaEgDDkWRuSi2h79yrcAxVy3R4puVwBHW4k29CvvMf2AU6hzYhOftAuFZRgHEtnqYQ4Xu6IJ5UU%2BTsrErn881fZUJcqwR6hy%2B4bXCQUjyW6S0d84qFPx939HHm8En5lVE4N82Dw6teKKlmYMs40djSN0NjloFhxWcMAk58AhamPsIdfA3qUrTDj3sZALXKqhs647B1DVsw47pBrxT9WWWIOLaejGWVD%2Fm9EctQLVRlo9jvSy0TjntfioPUBGc5Gr%2BJG1RPEGAzFXFX9FkgIUCjLMFu4cxgEA%2BXfJ2piBpvpnJgstmt08239MQp%2BjGptR2XTcfFbwu1ORth9%2BAnIftKGV%2F%2FeRjTnn6aSKh%2F64MqffA%2BFn4S%2FTpmQ0%2BGwOcHK9S6U86Ay6E9njUL02%2B1D23gFq55tEBH%2FWsfSQuRQM%2FHh%2FT8QahvP%2BtCe71X2jJEnpL2qPAiX6Z0oyf4fQkBQJjBqdJ2A4FTMifNAtNC4rtAOXk%2Bzk4HY%2FFsds928OWZplJw7C7h7UjzQgInvfM9TmEBjs3pfEsJmd6WujrVjQJCf1I0SCJPkFRC9ItNkInC9SksFPWexkIgfFTuYrVcv2%2FPvJS5HltiXSKhmmfjctv18iPdJUFeJWPb8jmBdcHwIjmH8fUg1ZFIvNaRNMMrJ2r8GOqUBwTZINn5L9yxGdMD0dZGDr%2BVqMc0Aq5F8vY3ADhFN%2FWEL5CXR1rhuer0RB2BTpNN85DbnEjzw7VIoaqqyvyeL3Y2JDJJoUZaenitpNhdW2ejSXJrY0LWcPEXud%2B2Pz5mG89vW4YhsNIQ%2Bhv%2BC3egLpCJAu5MUY0fw%2BbBrdG92yNb4a9zOsxYd8aTdF2Er6uKYU0s8bNf7YuP8zxn4OcJiPqinrAnh&X-Amz-Signature=b40f070a2fe872776fb9764e9ce115ffd0c0c3ebd12bb0662a329758b80a2cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXCKRQ2Y%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGeCfwwBepQ86FvEa2d6WPYWTF8fDBfHnIV2OKvt3JYiAiEAyNxsqmchh%2FOROh1sDQ4ld3FDQGB3SSarbMWxbqJzp%2F4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaEgDDkWRuSi2h79yrcAxVy3R4puVwBHW4k29CvvMf2AU6hzYhOftAuFZRgHEtnqYQ4Xu6IJ5UU%2BTsrErn881fZUJcqwR6hy%2B4bXCQUjyW6S0d84qFPx939HHm8En5lVE4N82Dw6teKKlmYMs40djSN0NjloFhxWcMAk58AhamPsIdfA3qUrTDj3sZALXKqhs647B1DVsw47pBrxT9WWWIOLaejGWVD%2Fm9EctQLVRlo9jvSy0TjntfioPUBGc5Gr%2BJG1RPEGAzFXFX9FkgIUCjLMFu4cxgEA%2BXfJ2piBpvpnJgstmt08239MQp%2BjGptR2XTcfFbwu1ORth9%2BAnIftKGV%2F%2FeRjTnn6aSKh%2F64MqffA%2BFn4S%2FTpmQ0%2BGwOcHK9S6U86Ay6E9njUL02%2B1D23gFq55tEBH%2FWsfSQuRQM%2FHh%2FT8QahvP%2BtCe71X2jJEnpL2qPAiX6Z0oyf4fQkBQJjBqdJ2A4FTMifNAtNC4rtAOXk%2Bzk4HY%2FFsds928OWZplJw7C7h7UjzQgInvfM9TmEBjs3pfEsJmd6WujrVjQJCf1I0SCJPkFRC9ItNkInC9SksFPWexkIgfFTuYrVcv2%2FPvJS5HltiXSKhmmfjctv18iPdJUFeJWPb8jmBdcHwIjmH8fUg1ZFIvNaRNMMrJ2r8GOqUBwTZINn5L9yxGdMD0dZGDr%2BVqMc0Aq5F8vY3ADhFN%2FWEL5CXR1rhuer0RB2BTpNN85DbnEjzw7VIoaqqyvyeL3Y2JDJJoUZaenitpNhdW2ejSXJrY0LWcPEXud%2B2Pz5mG89vW4YhsNIQ%2Bhv%2BC3egLpCJAu5MUY0fw%2BbBrdG92yNb4a9zOsxYd8aTdF2Er6uKYU0s8bNf7YuP8zxn4OcJiPqinrAnh&X-Amz-Signature=50a96535b1191cb118113aa9dd45bfd13e734763548b266a2dfa5b18109534ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
