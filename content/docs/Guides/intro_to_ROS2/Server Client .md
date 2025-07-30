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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVQUV73%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO39pvL4FNUjQnA6I%2B6BP4yfx4%2F4HEhrF2ZaN5Y%2B6hgAiEA1hduFyYFv9abX1waBuoFt9mWiT487teSAIsVdrYyG1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQrwKojZuFf55ueNyrcA7yLYNwCkyPi2Q2I1y15b9aPQIjgdYTGnzLsRqOxMEFtRUJ6pthz36vtnHZ1Juc5UDLic3YvSmehFN2Czp80ace5egOyNcmj4S56kiFtcAtOITELPrMhoghOx5FC%2Fk48Ohv5AfGASRBxzBkMPym1o5agHzkbcQmdfxVJvSgdXMfXwBkl2SzCFtwUiSWMFTIv2tZpb4TfHTe%2BseI%2FjxjTn3I0fl%2BlJ2Vt1aZd2Muq7rrXq0GGPqQv%2Bfzld%2FOf3FQnVrMIUcaIcHp1ecdzlJSBYmOGb7WX9OecetcZa5xX4viTH4itZdf49rY5k6d1OVN3D9w6X8snGE3OKd9GTU90rlvKsLVvGewB4kX9rIzHhcDDMPE1OMR4lDEl%2B7Dpnf3vEaiNAE0UDObdHU2y7KwRF3Zp3zNLUeclNomMP93tgfjG5ByZGtdPf%2BVdNEs7k1jlAiafG7%2B5ADKLgjH%2F%2B7lojRWjG1cglq14lIXh5uPtcLMWMeLjWrK%2Bz9OyMh%2FTZ8BPF8dd41VqEuQWFM30VCv95kSQ651kLOwLIrDr9giyCEE8tdpx6amjlZnxZC739rxWlgfntIj42Hcn7NgGmzOjirQL7GoVC2wCPep%2BJSnKGDvap8i8hxCNm%2Bt%2BRLivMPahqMQGOqUBU7ZysrQDBZ5bkYgLPbJbDpwEmRkftXE0VUZWQWaZhBsriPZrTGC8urqHBNdd3Y2aKFdo%2F1fnnodPJPQRgD7Pi%2FUy2m8nyph39J8eKjtxZT5vghZySTdalCRQhnIPmK6O18D%2B7pAiGhMVTVythNXS5HRXBOXXKn0mVrAwlAIncf9WoG3Hqp3xTai4mb%2BR7jaUH5AbTqIfZZUY74KLgsSSdJqU3DEs&X-Amz-Signature=81af681c7dc3836e81b5ba1f31e6a8609c0e0827bcc1d6b7851a303cd1c2fee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVQUV73%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO39pvL4FNUjQnA6I%2B6BP4yfx4%2F4HEhrF2ZaN5Y%2B6hgAiEA1hduFyYFv9abX1waBuoFt9mWiT487teSAIsVdrYyG1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQrwKojZuFf55ueNyrcA7yLYNwCkyPi2Q2I1y15b9aPQIjgdYTGnzLsRqOxMEFtRUJ6pthz36vtnHZ1Juc5UDLic3YvSmehFN2Czp80ace5egOyNcmj4S56kiFtcAtOITELPrMhoghOx5FC%2Fk48Ohv5AfGASRBxzBkMPym1o5agHzkbcQmdfxVJvSgdXMfXwBkl2SzCFtwUiSWMFTIv2tZpb4TfHTe%2BseI%2FjxjTn3I0fl%2BlJ2Vt1aZd2Muq7rrXq0GGPqQv%2Bfzld%2FOf3FQnVrMIUcaIcHp1ecdzlJSBYmOGb7WX9OecetcZa5xX4viTH4itZdf49rY5k6d1OVN3D9w6X8snGE3OKd9GTU90rlvKsLVvGewB4kX9rIzHhcDDMPE1OMR4lDEl%2B7Dpnf3vEaiNAE0UDObdHU2y7KwRF3Zp3zNLUeclNomMP93tgfjG5ByZGtdPf%2BVdNEs7k1jlAiafG7%2B5ADKLgjH%2F%2B7lojRWjG1cglq14lIXh5uPtcLMWMeLjWrK%2Bz9OyMh%2FTZ8BPF8dd41VqEuQWFM30VCv95kSQ651kLOwLIrDr9giyCEE8tdpx6amjlZnxZC739rxWlgfntIj42Hcn7NgGmzOjirQL7GoVC2wCPep%2BJSnKGDvap8i8hxCNm%2Bt%2BRLivMPahqMQGOqUBU7ZysrQDBZ5bkYgLPbJbDpwEmRkftXE0VUZWQWaZhBsriPZrTGC8urqHBNdd3Y2aKFdo%2F1fnnodPJPQRgD7Pi%2FUy2m8nyph39J8eKjtxZT5vghZySTdalCRQhnIPmK6O18D%2B7pAiGhMVTVythNXS5HRXBOXXKn0mVrAwlAIncf9WoG3Hqp3xTai4mb%2BR7jaUH5AbTqIfZZUY74KLgsSSdJqU3DEs&X-Amz-Signature=953d3086180683992f134d8b301467dac9b5078a606078946ca66c96e42d080f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVQUV73%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO39pvL4FNUjQnA6I%2B6BP4yfx4%2F4HEhrF2ZaN5Y%2B6hgAiEA1hduFyYFv9abX1waBuoFt9mWiT487teSAIsVdrYyG1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQrwKojZuFf55ueNyrcA7yLYNwCkyPi2Q2I1y15b9aPQIjgdYTGnzLsRqOxMEFtRUJ6pthz36vtnHZ1Juc5UDLic3YvSmehFN2Czp80ace5egOyNcmj4S56kiFtcAtOITELPrMhoghOx5FC%2Fk48Ohv5AfGASRBxzBkMPym1o5agHzkbcQmdfxVJvSgdXMfXwBkl2SzCFtwUiSWMFTIv2tZpb4TfHTe%2BseI%2FjxjTn3I0fl%2BlJ2Vt1aZd2Muq7rrXq0GGPqQv%2Bfzld%2FOf3FQnVrMIUcaIcHp1ecdzlJSBYmOGb7WX9OecetcZa5xX4viTH4itZdf49rY5k6d1OVN3D9w6X8snGE3OKd9GTU90rlvKsLVvGewB4kX9rIzHhcDDMPE1OMR4lDEl%2B7Dpnf3vEaiNAE0UDObdHU2y7KwRF3Zp3zNLUeclNomMP93tgfjG5ByZGtdPf%2BVdNEs7k1jlAiafG7%2B5ADKLgjH%2F%2B7lojRWjG1cglq14lIXh5uPtcLMWMeLjWrK%2Bz9OyMh%2FTZ8BPF8dd41VqEuQWFM30VCv95kSQ651kLOwLIrDr9giyCEE8tdpx6amjlZnxZC739rxWlgfntIj42Hcn7NgGmzOjirQL7GoVC2wCPep%2BJSnKGDvap8i8hxCNm%2Bt%2BRLivMPahqMQGOqUBU7ZysrQDBZ5bkYgLPbJbDpwEmRkftXE0VUZWQWaZhBsriPZrTGC8urqHBNdd3Y2aKFdo%2F1fnnodPJPQRgD7Pi%2FUy2m8nyph39J8eKjtxZT5vghZySTdalCRQhnIPmK6O18D%2B7pAiGhMVTVythNXS5HRXBOXXKn0mVrAwlAIncf9WoG3Hqp3xTai4mb%2BR7jaUH5AbTqIfZZUY74KLgsSSdJqU3DEs&X-Amz-Signature=9172bb02b248cf68a0556ac4bb842066578bb136c15ac161da54b5b97443c7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVQUV73%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO39pvL4FNUjQnA6I%2B6BP4yfx4%2F4HEhrF2ZaN5Y%2B6hgAiEA1hduFyYFv9abX1waBuoFt9mWiT487teSAIsVdrYyG1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQrwKojZuFf55ueNyrcA7yLYNwCkyPi2Q2I1y15b9aPQIjgdYTGnzLsRqOxMEFtRUJ6pthz36vtnHZ1Juc5UDLic3YvSmehFN2Czp80ace5egOyNcmj4S56kiFtcAtOITELPrMhoghOx5FC%2Fk48Ohv5AfGASRBxzBkMPym1o5agHzkbcQmdfxVJvSgdXMfXwBkl2SzCFtwUiSWMFTIv2tZpb4TfHTe%2BseI%2FjxjTn3I0fl%2BlJ2Vt1aZd2Muq7rrXq0GGPqQv%2Bfzld%2FOf3FQnVrMIUcaIcHp1ecdzlJSBYmOGb7WX9OecetcZa5xX4viTH4itZdf49rY5k6d1OVN3D9w6X8snGE3OKd9GTU90rlvKsLVvGewB4kX9rIzHhcDDMPE1OMR4lDEl%2B7Dpnf3vEaiNAE0UDObdHU2y7KwRF3Zp3zNLUeclNomMP93tgfjG5ByZGtdPf%2BVdNEs7k1jlAiafG7%2B5ADKLgjH%2F%2B7lojRWjG1cglq14lIXh5uPtcLMWMeLjWrK%2Bz9OyMh%2FTZ8BPF8dd41VqEuQWFM30VCv95kSQ651kLOwLIrDr9giyCEE8tdpx6amjlZnxZC739rxWlgfntIj42Hcn7NgGmzOjirQL7GoVC2wCPep%2BJSnKGDvap8i8hxCNm%2Bt%2BRLivMPahqMQGOqUBU7ZysrQDBZ5bkYgLPbJbDpwEmRkftXE0VUZWQWaZhBsriPZrTGC8urqHBNdd3Y2aKFdo%2F1fnnodPJPQRgD7Pi%2FUy2m8nyph39J8eKjtxZT5vghZySTdalCRQhnIPmK6O18D%2B7pAiGhMVTVythNXS5HRXBOXXKn0mVrAwlAIncf9WoG3Hqp3xTai4mb%2BR7jaUH5AbTqIfZZUY74KLgsSSdJqU3DEs&X-Amz-Signature=c4c28105612ec0933e7ec2e995ebf10094f041df9f3c946d2501eef06208b4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVQUV73%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO39pvL4FNUjQnA6I%2B6BP4yfx4%2F4HEhrF2ZaN5Y%2B6hgAiEA1hduFyYFv9abX1waBuoFt9mWiT487teSAIsVdrYyG1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQrwKojZuFf55ueNyrcA7yLYNwCkyPi2Q2I1y15b9aPQIjgdYTGnzLsRqOxMEFtRUJ6pthz36vtnHZ1Juc5UDLic3YvSmehFN2Czp80ace5egOyNcmj4S56kiFtcAtOITELPrMhoghOx5FC%2Fk48Ohv5AfGASRBxzBkMPym1o5agHzkbcQmdfxVJvSgdXMfXwBkl2SzCFtwUiSWMFTIv2tZpb4TfHTe%2BseI%2FjxjTn3I0fl%2BlJ2Vt1aZd2Muq7rrXq0GGPqQv%2Bfzld%2FOf3FQnVrMIUcaIcHp1ecdzlJSBYmOGb7WX9OecetcZa5xX4viTH4itZdf49rY5k6d1OVN3D9w6X8snGE3OKd9GTU90rlvKsLVvGewB4kX9rIzHhcDDMPE1OMR4lDEl%2B7Dpnf3vEaiNAE0UDObdHU2y7KwRF3Zp3zNLUeclNomMP93tgfjG5ByZGtdPf%2BVdNEs7k1jlAiafG7%2B5ADKLgjH%2F%2B7lojRWjG1cglq14lIXh5uPtcLMWMeLjWrK%2Bz9OyMh%2FTZ8BPF8dd41VqEuQWFM30VCv95kSQ651kLOwLIrDr9giyCEE8tdpx6amjlZnxZC739rxWlgfntIj42Hcn7NgGmzOjirQL7GoVC2wCPep%2BJSnKGDvap8i8hxCNm%2Bt%2BRLivMPahqMQGOqUBU7ZysrQDBZ5bkYgLPbJbDpwEmRkftXE0VUZWQWaZhBsriPZrTGC8urqHBNdd3Y2aKFdo%2F1fnnodPJPQRgD7Pi%2FUy2m8nyph39J8eKjtxZT5vghZySTdalCRQhnIPmK6O18D%2B7pAiGhMVTVythNXS5HRXBOXXKn0mVrAwlAIncf9WoG3Hqp3xTai4mb%2BR7jaUH5AbTqIfZZUY74KLgsSSdJqU3DEs&X-Amz-Signature=4261a54b3cf47077f5fc191d65a74d7fd4b6852ed54e59e4dabfe52521ab5f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
