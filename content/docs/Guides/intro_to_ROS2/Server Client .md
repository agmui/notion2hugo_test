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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62LWSGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDD%2B%2BpIyLQ50SmMfL5ucrJoMEv2LL0QOSWAQy1mAQnBcQIhANBXCRLQ7iJQwCyOa%2FzNlVABF2bqse%2FGgUOUeg%2BqGnDZKv8DCF0QABoMNjM3NDIzMTgzODA1IgxXzERHnJ7VPK8K2QEq3AOXxgwb9hZardjTOThWvO9ZeNcc37xxJZB9vzK3oxfhqW4ZMwklI%2BmfEyJU0KzSyhsr87C92alJQ%2BpPKJb%2Bxvy4RpkhrVDWi4F4TnEPlbq2XoUmtpM0wuVb2E5mG9EpE88rt%2BhVD3bBcXoy6%2BQjw2NLh59l6ZQZQmRbHZakcr%2BsdGNaSeOKMPeYNdF%2BNvrgEwFPVT87hbCuNizi2nONCeeQItYVLaAbto%2BX%2Bi3RDh7inAVn86SvFsSC84ED%2BNtrgKNGHo8B7st9PFbNF8PlXuEwt%2BGLnH6cR0x78rChQeFtIYWNSwWZ02TiECDk2H%2Fxs872NNIiafQ90DS2WWyDAwhaqTWhWTYLyqQstrfgKVZ3vA%2FzBCSVa6nhaGHoYYK%2Fnm9XHNtbAVPT%2BUDue1rR9VlmihnY2PkHgynml4Vv1PVFRFHzgALbsv8OFTRZpvuN8xiaQbV6CGUnFUzq%2Bkg3IddrI7WWpuZn2O42U9IZDL5UrBxAYD00u7USPXkkGldyRhz3wOFT%2FOka%2FAQOYS6HDkMgdPI1K9HTWpAWwovGNFftsS%2FT%2BMKSshp2blqEbLZxZFtfTFtWmabB0Au7oLsjWRzLkia1E6wZEmnEOFADnMKkEzZ153yoDY%2BToccizzDrt%2FzEBjqkAdB35YsFBECsNm5ePdoSU4dMtgI1iofpFA7C1sAetYSamk%2F1%2FetTKIsnPM9cgYqdIoBY60ulo0MuFc%2FDtEmy69FSJepMVe8AcykO8PVprDLX2%2FQyyTovpK%2BvCUIqThjYK2thYaDvLNSneyxpYA2T8Mwp3FDWLuC2i8SCtnLkDI%2BSkFBycpDfngJngWiT3HMad385%2Fm7wPTTGkWKKSpL37xLO2n09&X-Amz-Signature=bea2879b28252210da47c87c062d6edf5df29d9c752d3e5d76a037cc6d171d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62LWSGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDD%2B%2BpIyLQ50SmMfL5ucrJoMEv2LL0QOSWAQy1mAQnBcQIhANBXCRLQ7iJQwCyOa%2FzNlVABF2bqse%2FGgUOUeg%2BqGnDZKv8DCF0QABoMNjM3NDIzMTgzODA1IgxXzERHnJ7VPK8K2QEq3AOXxgwb9hZardjTOThWvO9ZeNcc37xxJZB9vzK3oxfhqW4ZMwklI%2BmfEyJU0KzSyhsr87C92alJQ%2BpPKJb%2Bxvy4RpkhrVDWi4F4TnEPlbq2XoUmtpM0wuVb2E5mG9EpE88rt%2BhVD3bBcXoy6%2BQjw2NLh59l6ZQZQmRbHZakcr%2BsdGNaSeOKMPeYNdF%2BNvrgEwFPVT87hbCuNizi2nONCeeQItYVLaAbto%2BX%2Bi3RDh7inAVn86SvFsSC84ED%2BNtrgKNGHo8B7st9PFbNF8PlXuEwt%2BGLnH6cR0x78rChQeFtIYWNSwWZ02TiECDk2H%2Fxs872NNIiafQ90DS2WWyDAwhaqTWhWTYLyqQstrfgKVZ3vA%2FzBCSVa6nhaGHoYYK%2Fnm9XHNtbAVPT%2BUDue1rR9VlmihnY2PkHgynml4Vv1PVFRFHzgALbsv8OFTRZpvuN8xiaQbV6CGUnFUzq%2Bkg3IddrI7WWpuZn2O42U9IZDL5UrBxAYD00u7USPXkkGldyRhz3wOFT%2FOka%2FAQOYS6HDkMgdPI1K9HTWpAWwovGNFftsS%2FT%2BMKSshp2blqEbLZxZFtfTFtWmabB0Au7oLsjWRzLkia1E6wZEmnEOFADnMKkEzZ153yoDY%2BToccizzDrt%2FzEBjqkAdB35YsFBECsNm5ePdoSU4dMtgI1iofpFA7C1sAetYSamk%2F1%2FetTKIsnPM9cgYqdIoBY60ulo0MuFc%2FDtEmy69FSJepMVe8AcykO8PVprDLX2%2FQyyTovpK%2BvCUIqThjYK2thYaDvLNSneyxpYA2T8Mwp3FDWLuC2i8SCtnLkDI%2BSkFBycpDfngJngWiT3HMad385%2Fm7wPTTGkWKKSpL37xLO2n09&X-Amz-Signature=80e3a6cbd67dc013d7faa0ffef9a653601c74c4c7085614d2a9f31247c154ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62LWSGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDD%2B%2BpIyLQ50SmMfL5ucrJoMEv2LL0QOSWAQy1mAQnBcQIhANBXCRLQ7iJQwCyOa%2FzNlVABF2bqse%2FGgUOUeg%2BqGnDZKv8DCF0QABoMNjM3NDIzMTgzODA1IgxXzERHnJ7VPK8K2QEq3AOXxgwb9hZardjTOThWvO9ZeNcc37xxJZB9vzK3oxfhqW4ZMwklI%2BmfEyJU0KzSyhsr87C92alJQ%2BpPKJb%2Bxvy4RpkhrVDWi4F4TnEPlbq2XoUmtpM0wuVb2E5mG9EpE88rt%2BhVD3bBcXoy6%2BQjw2NLh59l6ZQZQmRbHZakcr%2BsdGNaSeOKMPeYNdF%2BNvrgEwFPVT87hbCuNizi2nONCeeQItYVLaAbto%2BX%2Bi3RDh7inAVn86SvFsSC84ED%2BNtrgKNGHo8B7st9PFbNF8PlXuEwt%2BGLnH6cR0x78rChQeFtIYWNSwWZ02TiECDk2H%2Fxs872NNIiafQ90DS2WWyDAwhaqTWhWTYLyqQstrfgKVZ3vA%2FzBCSVa6nhaGHoYYK%2Fnm9XHNtbAVPT%2BUDue1rR9VlmihnY2PkHgynml4Vv1PVFRFHzgALbsv8OFTRZpvuN8xiaQbV6CGUnFUzq%2Bkg3IddrI7WWpuZn2O42U9IZDL5UrBxAYD00u7USPXkkGldyRhz3wOFT%2FOka%2FAQOYS6HDkMgdPI1K9HTWpAWwovGNFftsS%2FT%2BMKSshp2blqEbLZxZFtfTFtWmabB0Au7oLsjWRzLkia1E6wZEmnEOFADnMKkEzZ153yoDY%2BToccizzDrt%2FzEBjqkAdB35YsFBECsNm5ePdoSU4dMtgI1iofpFA7C1sAetYSamk%2F1%2FetTKIsnPM9cgYqdIoBY60ulo0MuFc%2FDtEmy69FSJepMVe8AcykO8PVprDLX2%2FQyyTovpK%2BvCUIqThjYK2thYaDvLNSneyxpYA2T8Mwp3FDWLuC2i8SCtnLkDI%2BSkFBycpDfngJngWiT3HMad385%2Fm7wPTTGkWKKSpL37xLO2n09&X-Amz-Signature=bb2d131507af71cdc32ff48bda5dc2e9ab224cd1b8617023d9f377050dfc1b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62LWSGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDD%2B%2BpIyLQ50SmMfL5ucrJoMEv2LL0QOSWAQy1mAQnBcQIhANBXCRLQ7iJQwCyOa%2FzNlVABF2bqse%2FGgUOUeg%2BqGnDZKv8DCF0QABoMNjM3NDIzMTgzODA1IgxXzERHnJ7VPK8K2QEq3AOXxgwb9hZardjTOThWvO9ZeNcc37xxJZB9vzK3oxfhqW4ZMwklI%2BmfEyJU0KzSyhsr87C92alJQ%2BpPKJb%2Bxvy4RpkhrVDWi4F4TnEPlbq2XoUmtpM0wuVb2E5mG9EpE88rt%2BhVD3bBcXoy6%2BQjw2NLh59l6ZQZQmRbHZakcr%2BsdGNaSeOKMPeYNdF%2BNvrgEwFPVT87hbCuNizi2nONCeeQItYVLaAbto%2BX%2Bi3RDh7inAVn86SvFsSC84ED%2BNtrgKNGHo8B7st9PFbNF8PlXuEwt%2BGLnH6cR0x78rChQeFtIYWNSwWZ02TiECDk2H%2Fxs872NNIiafQ90DS2WWyDAwhaqTWhWTYLyqQstrfgKVZ3vA%2FzBCSVa6nhaGHoYYK%2Fnm9XHNtbAVPT%2BUDue1rR9VlmihnY2PkHgynml4Vv1PVFRFHzgALbsv8OFTRZpvuN8xiaQbV6CGUnFUzq%2Bkg3IddrI7WWpuZn2O42U9IZDL5UrBxAYD00u7USPXkkGldyRhz3wOFT%2FOka%2FAQOYS6HDkMgdPI1K9HTWpAWwovGNFftsS%2FT%2BMKSshp2blqEbLZxZFtfTFtWmabB0Au7oLsjWRzLkia1E6wZEmnEOFADnMKkEzZ153yoDY%2BToccizzDrt%2FzEBjqkAdB35YsFBECsNm5ePdoSU4dMtgI1iofpFA7C1sAetYSamk%2F1%2FetTKIsnPM9cgYqdIoBY60ulo0MuFc%2FDtEmy69FSJepMVe8AcykO8PVprDLX2%2FQyyTovpK%2BvCUIqThjYK2thYaDvLNSneyxpYA2T8Mwp3FDWLuC2i8SCtnLkDI%2BSkFBycpDfngJngWiT3HMad385%2Fm7wPTTGkWKKSpL37xLO2n09&X-Amz-Signature=ef32b09107355ff6b39dba0df0cffb0bf3655a97d0aa6d40045101ff8125cf70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62LWSGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDD%2B%2BpIyLQ50SmMfL5ucrJoMEv2LL0QOSWAQy1mAQnBcQIhANBXCRLQ7iJQwCyOa%2FzNlVABF2bqse%2FGgUOUeg%2BqGnDZKv8DCF0QABoMNjM3NDIzMTgzODA1IgxXzERHnJ7VPK8K2QEq3AOXxgwb9hZardjTOThWvO9ZeNcc37xxJZB9vzK3oxfhqW4ZMwklI%2BmfEyJU0KzSyhsr87C92alJQ%2BpPKJb%2Bxvy4RpkhrVDWi4F4TnEPlbq2XoUmtpM0wuVb2E5mG9EpE88rt%2BhVD3bBcXoy6%2BQjw2NLh59l6ZQZQmRbHZakcr%2BsdGNaSeOKMPeYNdF%2BNvrgEwFPVT87hbCuNizi2nONCeeQItYVLaAbto%2BX%2Bi3RDh7inAVn86SvFsSC84ED%2BNtrgKNGHo8B7st9PFbNF8PlXuEwt%2BGLnH6cR0x78rChQeFtIYWNSwWZ02TiECDk2H%2Fxs872NNIiafQ90DS2WWyDAwhaqTWhWTYLyqQstrfgKVZ3vA%2FzBCSVa6nhaGHoYYK%2Fnm9XHNtbAVPT%2BUDue1rR9VlmihnY2PkHgynml4Vv1PVFRFHzgALbsv8OFTRZpvuN8xiaQbV6CGUnFUzq%2Bkg3IddrI7WWpuZn2O42U9IZDL5UrBxAYD00u7USPXkkGldyRhz3wOFT%2FOka%2FAQOYS6HDkMgdPI1K9HTWpAWwovGNFftsS%2FT%2BMKSshp2blqEbLZxZFtfTFtWmabB0Au7oLsjWRzLkia1E6wZEmnEOFADnMKkEzZ153yoDY%2BToccizzDrt%2FzEBjqkAdB35YsFBECsNm5ePdoSU4dMtgI1iofpFA7C1sAetYSamk%2F1%2FetTKIsnPM9cgYqdIoBY60ulo0MuFc%2FDtEmy69FSJepMVe8AcykO8PVprDLX2%2FQyyTovpK%2BvCUIqThjYK2thYaDvLNSneyxpYA2T8Mwp3FDWLuC2i8SCtnLkDI%2BSkFBycpDfngJngWiT3HMad385%2Fm7wPTTGkWKKSpL37xLO2n09&X-Amz-Signature=4aeff84968ad8822b0b2fc77085498c5ac1ea9e578311a4192365d78022393ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
