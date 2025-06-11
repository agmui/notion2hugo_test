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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7SA3MG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjn5S8X%2F%2B8ayl6U1memMq45vv%2F7t1pU135y%2BUXTEae7gIhAKmjJZyUJjQ8Gam%2BLHULn5s3%2F0840%2B5aVdDY4TguZLkTKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPKF5f2zQ3p18uBRkq3AN0vhJE1Utv6%2Fc5iUCRMxl8zojQPlXQGK7lkrQRHsucMXT8fdGvGCxT%2Fow5qo%2BUrXgAT8D0oHsHfbdXh4tuFpU50s4wPTuCjYysuWrxwWFon1kHY%2F507p8zc4nTtluU97SmD4JA%2FyaIakPw0AtAB%2F1tFLck3Po%2BwSVXeVFTsdpdXSeVGZRGcpjYWZcmfwx244lFdGsh9b5b8Ck7iKEUlfWcOiOBV09GGpRlEoW4iOnubZnAOmMYQnRBqU6xW5wv2jaF07xHpiz%2F0d7gcojyh6rqh0bE6scOa%2BDppjr6%2F7diuvQC0FKaFtCT50LHAvdZkeoTQ6xYyoopzI6n9XQrLUSAfeu8nR%2BHOJHBG45eOX8o7WWbSLRrnsqsx73yYmShlqv%2Fj3vVlb%2BYk4xjuQ3lR45ymY5DK7F0vzs4%2F0GrpPxyvPrVomBu0MKUzByd9wvE4JCfwO%2BfFE6DcHBJeVhSsUT4GEfjSpSGABJ12p4hEWxZNmUZ0EbybVOXKFOIJUCwyY8V3yYlsQmb3S4fTmdrZGgfiJcg%2FR25Z57pfVmyH43b9dQAU35FOErv4ok4hgZ1A2BFRtIqi2aP8qp8qiRfYKMhxyaralGyE%2Bc%2B0uUlVEeYCUWuCYMsBXmLq1AkqDCF5aLCBjqkAcpXaSg%2BB%2BvVRm2YY%2BXQOxfuSKOC%2Fj2DgCxe3Ky5UtZ23jF9Xi7ubikNO2t9TrWxAl4W2kvwcnsJ0aiK4jxCWY47QyTZtDMdMZeh9VCWgHSX%2FduLMudTOH0YrJ26KkYUt2VRK2fZ%2FnPEAn%2FPG0tm%2B0oZllsy6tbFXShuSOURirBYyXmnpYnLg%2F381XpboKtJ7wKCs6uRa3C13GKByglkum1iEod6&X-Amz-Signature=02d1b6e5f83dc1235ba90c67e922759f17afe2525f9c6bc9ae699e715bcbde66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7SA3MG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjn5S8X%2F%2B8ayl6U1memMq45vv%2F7t1pU135y%2BUXTEae7gIhAKmjJZyUJjQ8Gam%2BLHULn5s3%2F0840%2B5aVdDY4TguZLkTKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPKF5f2zQ3p18uBRkq3AN0vhJE1Utv6%2Fc5iUCRMxl8zojQPlXQGK7lkrQRHsucMXT8fdGvGCxT%2Fow5qo%2BUrXgAT8D0oHsHfbdXh4tuFpU50s4wPTuCjYysuWrxwWFon1kHY%2F507p8zc4nTtluU97SmD4JA%2FyaIakPw0AtAB%2F1tFLck3Po%2BwSVXeVFTsdpdXSeVGZRGcpjYWZcmfwx244lFdGsh9b5b8Ck7iKEUlfWcOiOBV09GGpRlEoW4iOnubZnAOmMYQnRBqU6xW5wv2jaF07xHpiz%2F0d7gcojyh6rqh0bE6scOa%2BDppjr6%2F7diuvQC0FKaFtCT50LHAvdZkeoTQ6xYyoopzI6n9XQrLUSAfeu8nR%2BHOJHBG45eOX8o7WWbSLRrnsqsx73yYmShlqv%2Fj3vVlb%2BYk4xjuQ3lR45ymY5DK7F0vzs4%2F0GrpPxyvPrVomBu0MKUzByd9wvE4JCfwO%2BfFE6DcHBJeVhSsUT4GEfjSpSGABJ12p4hEWxZNmUZ0EbybVOXKFOIJUCwyY8V3yYlsQmb3S4fTmdrZGgfiJcg%2FR25Z57pfVmyH43b9dQAU35FOErv4ok4hgZ1A2BFRtIqi2aP8qp8qiRfYKMhxyaralGyE%2Bc%2B0uUlVEeYCUWuCYMsBXmLq1AkqDCF5aLCBjqkAcpXaSg%2BB%2BvVRm2YY%2BXQOxfuSKOC%2Fj2DgCxe3Ky5UtZ23jF9Xi7ubikNO2t9TrWxAl4W2kvwcnsJ0aiK4jxCWY47QyTZtDMdMZeh9VCWgHSX%2FduLMudTOH0YrJ26KkYUt2VRK2fZ%2FnPEAn%2FPG0tm%2B0oZllsy6tbFXShuSOURirBYyXmnpYnLg%2F381XpboKtJ7wKCs6uRa3C13GKByglkum1iEod6&X-Amz-Signature=21ca8d2a68384528b12be01aaebd3e4235cc97ffe9010b7b3d7190b23f5e61d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7SA3MG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjn5S8X%2F%2B8ayl6U1memMq45vv%2F7t1pU135y%2BUXTEae7gIhAKmjJZyUJjQ8Gam%2BLHULn5s3%2F0840%2B5aVdDY4TguZLkTKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPKF5f2zQ3p18uBRkq3AN0vhJE1Utv6%2Fc5iUCRMxl8zojQPlXQGK7lkrQRHsucMXT8fdGvGCxT%2Fow5qo%2BUrXgAT8D0oHsHfbdXh4tuFpU50s4wPTuCjYysuWrxwWFon1kHY%2F507p8zc4nTtluU97SmD4JA%2FyaIakPw0AtAB%2F1tFLck3Po%2BwSVXeVFTsdpdXSeVGZRGcpjYWZcmfwx244lFdGsh9b5b8Ck7iKEUlfWcOiOBV09GGpRlEoW4iOnubZnAOmMYQnRBqU6xW5wv2jaF07xHpiz%2F0d7gcojyh6rqh0bE6scOa%2BDppjr6%2F7diuvQC0FKaFtCT50LHAvdZkeoTQ6xYyoopzI6n9XQrLUSAfeu8nR%2BHOJHBG45eOX8o7WWbSLRrnsqsx73yYmShlqv%2Fj3vVlb%2BYk4xjuQ3lR45ymY5DK7F0vzs4%2F0GrpPxyvPrVomBu0MKUzByd9wvE4JCfwO%2BfFE6DcHBJeVhSsUT4GEfjSpSGABJ12p4hEWxZNmUZ0EbybVOXKFOIJUCwyY8V3yYlsQmb3S4fTmdrZGgfiJcg%2FR25Z57pfVmyH43b9dQAU35FOErv4ok4hgZ1A2BFRtIqi2aP8qp8qiRfYKMhxyaralGyE%2Bc%2B0uUlVEeYCUWuCYMsBXmLq1AkqDCF5aLCBjqkAcpXaSg%2BB%2BvVRm2YY%2BXQOxfuSKOC%2Fj2DgCxe3Ky5UtZ23jF9Xi7ubikNO2t9TrWxAl4W2kvwcnsJ0aiK4jxCWY47QyTZtDMdMZeh9VCWgHSX%2FduLMudTOH0YrJ26KkYUt2VRK2fZ%2FnPEAn%2FPG0tm%2B0oZllsy6tbFXShuSOURirBYyXmnpYnLg%2F381XpboKtJ7wKCs6uRa3C13GKByglkum1iEod6&X-Amz-Signature=f5fd936896625b3027f071145addf845f3c1ae297b08b54ec7b3572de36f6449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7SA3MG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjn5S8X%2F%2B8ayl6U1memMq45vv%2F7t1pU135y%2BUXTEae7gIhAKmjJZyUJjQ8Gam%2BLHULn5s3%2F0840%2B5aVdDY4TguZLkTKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPKF5f2zQ3p18uBRkq3AN0vhJE1Utv6%2Fc5iUCRMxl8zojQPlXQGK7lkrQRHsucMXT8fdGvGCxT%2Fow5qo%2BUrXgAT8D0oHsHfbdXh4tuFpU50s4wPTuCjYysuWrxwWFon1kHY%2F507p8zc4nTtluU97SmD4JA%2FyaIakPw0AtAB%2F1tFLck3Po%2BwSVXeVFTsdpdXSeVGZRGcpjYWZcmfwx244lFdGsh9b5b8Ck7iKEUlfWcOiOBV09GGpRlEoW4iOnubZnAOmMYQnRBqU6xW5wv2jaF07xHpiz%2F0d7gcojyh6rqh0bE6scOa%2BDppjr6%2F7diuvQC0FKaFtCT50LHAvdZkeoTQ6xYyoopzI6n9XQrLUSAfeu8nR%2BHOJHBG45eOX8o7WWbSLRrnsqsx73yYmShlqv%2Fj3vVlb%2BYk4xjuQ3lR45ymY5DK7F0vzs4%2F0GrpPxyvPrVomBu0MKUzByd9wvE4JCfwO%2BfFE6DcHBJeVhSsUT4GEfjSpSGABJ12p4hEWxZNmUZ0EbybVOXKFOIJUCwyY8V3yYlsQmb3S4fTmdrZGgfiJcg%2FR25Z57pfVmyH43b9dQAU35FOErv4ok4hgZ1A2BFRtIqi2aP8qp8qiRfYKMhxyaralGyE%2Bc%2B0uUlVEeYCUWuCYMsBXmLq1AkqDCF5aLCBjqkAcpXaSg%2BB%2BvVRm2YY%2BXQOxfuSKOC%2Fj2DgCxe3Ky5UtZ23jF9Xi7ubikNO2t9TrWxAl4W2kvwcnsJ0aiK4jxCWY47QyTZtDMdMZeh9VCWgHSX%2FduLMudTOH0YrJ26KkYUt2VRK2fZ%2FnPEAn%2FPG0tm%2B0oZllsy6tbFXShuSOURirBYyXmnpYnLg%2F381XpboKtJ7wKCs6uRa3C13GKByglkum1iEod6&X-Amz-Signature=28b6e3538edab808089454dac9cdffcecff0df0996bf78378feba78af85f7f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7SA3MG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjn5S8X%2F%2B8ayl6U1memMq45vv%2F7t1pU135y%2BUXTEae7gIhAKmjJZyUJjQ8Gam%2BLHULn5s3%2F0840%2B5aVdDY4TguZLkTKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPKF5f2zQ3p18uBRkq3AN0vhJE1Utv6%2Fc5iUCRMxl8zojQPlXQGK7lkrQRHsucMXT8fdGvGCxT%2Fow5qo%2BUrXgAT8D0oHsHfbdXh4tuFpU50s4wPTuCjYysuWrxwWFon1kHY%2F507p8zc4nTtluU97SmD4JA%2FyaIakPw0AtAB%2F1tFLck3Po%2BwSVXeVFTsdpdXSeVGZRGcpjYWZcmfwx244lFdGsh9b5b8Ck7iKEUlfWcOiOBV09GGpRlEoW4iOnubZnAOmMYQnRBqU6xW5wv2jaF07xHpiz%2F0d7gcojyh6rqh0bE6scOa%2BDppjr6%2F7diuvQC0FKaFtCT50LHAvdZkeoTQ6xYyoopzI6n9XQrLUSAfeu8nR%2BHOJHBG45eOX8o7WWbSLRrnsqsx73yYmShlqv%2Fj3vVlb%2BYk4xjuQ3lR45ymY5DK7F0vzs4%2F0GrpPxyvPrVomBu0MKUzByd9wvE4JCfwO%2BfFE6DcHBJeVhSsUT4GEfjSpSGABJ12p4hEWxZNmUZ0EbybVOXKFOIJUCwyY8V3yYlsQmb3S4fTmdrZGgfiJcg%2FR25Z57pfVmyH43b9dQAU35FOErv4ok4hgZ1A2BFRtIqi2aP8qp8qiRfYKMhxyaralGyE%2Bc%2B0uUlVEeYCUWuCYMsBXmLq1AkqDCF5aLCBjqkAcpXaSg%2BB%2BvVRm2YY%2BXQOxfuSKOC%2Fj2DgCxe3Ky5UtZ23jF9Xi7ubikNO2t9TrWxAl4W2kvwcnsJ0aiK4jxCWY47QyTZtDMdMZeh9VCWgHSX%2FduLMudTOH0YrJ26KkYUt2VRK2fZ%2FnPEAn%2FPG0tm%2B0oZllsy6tbFXShuSOURirBYyXmnpYnLg%2F381XpboKtJ7wKCs6uRa3C13GKByglkum1iEod6&X-Amz-Signature=36e46800e5c0c6e67a028fef503f52159c1de3005f66f2838bf6e0c98b3a3593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
