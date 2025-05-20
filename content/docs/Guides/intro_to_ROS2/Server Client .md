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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYXN3SZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4yiytW6jDyjaRVJL6AMbjRmzaev4UEraeH1Fon%2BfsZAiEAjpkasmlnGyAYxE%2FwvNk0ve4i7SRPbDV4PNSp%2BxAk%2BDUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9d3wHbrk1FWcSR%2FircA%2BjX6vcRZ9EaTwbQKh9CrzSKnSWHUDMrFqoY3%2FHEGD9UiTWPZaG9MJmDEr%2B5Jl3OEWJ5zSKFwxBS4%2BQQovvqvW4mjkZ0DvA7mRuiYYFb82yk3iQG%2BEMk3fBhMKgXz8%2BUkkxvd1e6zPdT5xVS7b5xV016TZHvMlf7WvLY4nr8ymLHP36F8IsnCPIBnkytkjTV8VFOc34wQKaHjiX6qn4qw1BuxKcxDyUr98Eq4xnWmnQF0HTgCqFWSHChAEy%2FBwb%2BoBbJ1DEVsf3LV5AqsvHXG2pW3llYVP585rZrmHMu2rspqJihYPFNebsqLHfRb2AP9qROELOLbcX9hNeuylNGR9sgNw07PBTdR6U8fMMePKeaFtNjzrrYRPPsw2ZtNrn1XTa62my6xj7RJaYX2n0wi2Ynbi2yeDE%2BmOPlMV%2BIHO%2BtRP0qdMMkcQ%2BFQmt33l%2FzopctMqfBMILE3CV7beQ2x8px5sf3S1YLtn3%2BdMKKeEf4clxZUTXix7xGZQpnYZXz%2Bm%2FLLJw5LXwgkGiPqBybyuZt9NnTf%2Bp8Ba9sTZB4Zfut9VQPBpJ1KIrhUjxcvCf7dfd2DDGBBBmQInV0dZ4gS1KVPcMtJU0QESMcgX1KU3OdlA%2B3aIZjTn3bPpTXMKGTscEGOqUB7KjsqF79t%2BMYYmGG7wrNKFTWT%2BpkF2Yt%2FWzo9%2BheYD2Es%2BqEcX8YvnIl41k7W3LvDNxBAjiWz56%2FqD2skmcKKlTjltRYX7sXpkbe58dCELomto4o%2BPS%2Bcu5%2BCyP57pfn2SMpVucBLIcCJcRj229tt1qM5puGSwPW5tmpvTwGfK6eFTTL5lJhDty4pVFl4EOAvL%2BbOALYR3%2FVnTMe3qhJ15%2BACUUv&X-Amz-Signature=20b58b3ba5f222b31f684c4a54b64a7a84550b69f05ebc754b89637f74f8e44b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYXN3SZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4yiytW6jDyjaRVJL6AMbjRmzaev4UEraeH1Fon%2BfsZAiEAjpkasmlnGyAYxE%2FwvNk0ve4i7SRPbDV4PNSp%2BxAk%2BDUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9d3wHbrk1FWcSR%2FircA%2BjX6vcRZ9EaTwbQKh9CrzSKnSWHUDMrFqoY3%2FHEGD9UiTWPZaG9MJmDEr%2B5Jl3OEWJ5zSKFwxBS4%2BQQovvqvW4mjkZ0DvA7mRuiYYFb82yk3iQG%2BEMk3fBhMKgXz8%2BUkkxvd1e6zPdT5xVS7b5xV016TZHvMlf7WvLY4nr8ymLHP36F8IsnCPIBnkytkjTV8VFOc34wQKaHjiX6qn4qw1BuxKcxDyUr98Eq4xnWmnQF0HTgCqFWSHChAEy%2FBwb%2BoBbJ1DEVsf3LV5AqsvHXG2pW3llYVP585rZrmHMu2rspqJihYPFNebsqLHfRb2AP9qROELOLbcX9hNeuylNGR9sgNw07PBTdR6U8fMMePKeaFtNjzrrYRPPsw2ZtNrn1XTa62my6xj7RJaYX2n0wi2Ynbi2yeDE%2BmOPlMV%2BIHO%2BtRP0qdMMkcQ%2BFQmt33l%2FzopctMqfBMILE3CV7beQ2x8px5sf3S1YLtn3%2BdMKKeEf4clxZUTXix7xGZQpnYZXz%2Bm%2FLLJw5LXwgkGiPqBybyuZt9NnTf%2Bp8Ba9sTZB4Zfut9VQPBpJ1KIrhUjxcvCf7dfd2DDGBBBmQInV0dZ4gS1KVPcMtJU0QESMcgX1KU3OdlA%2B3aIZjTn3bPpTXMKGTscEGOqUB7KjsqF79t%2BMYYmGG7wrNKFTWT%2BpkF2Yt%2FWzo9%2BheYD2Es%2BqEcX8YvnIl41k7W3LvDNxBAjiWz56%2FqD2skmcKKlTjltRYX7sXpkbe58dCELomto4o%2BPS%2Bcu5%2BCyP57pfn2SMpVucBLIcCJcRj229tt1qM5puGSwPW5tmpvTwGfK6eFTTL5lJhDty4pVFl4EOAvL%2BbOALYR3%2FVnTMe3qhJ15%2BACUUv&X-Amz-Signature=e19aa44541d91ec3cd98f287c38ababb06f2b78db43ed820afe9815a951e98b5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYXN3SZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4yiytW6jDyjaRVJL6AMbjRmzaev4UEraeH1Fon%2BfsZAiEAjpkasmlnGyAYxE%2FwvNk0ve4i7SRPbDV4PNSp%2BxAk%2BDUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9d3wHbrk1FWcSR%2FircA%2BjX6vcRZ9EaTwbQKh9CrzSKnSWHUDMrFqoY3%2FHEGD9UiTWPZaG9MJmDEr%2B5Jl3OEWJ5zSKFwxBS4%2BQQovvqvW4mjkZ0DvA7mRuiYYFb82yk3iQG%2BEMk3fBhMKgXz8%2BUkkxvd1e6zPdT5xVS7b5xV016TZHvMlf7WvLY4nr8ymLHP36F8IsnCPIBnkytkjTV8VFOc34wQKaHjiX6qn4qw1BuxKcxDyUr98Eq4xnWmnQF0HTgCqFWSHChAEy%2FBwb%2BoBbJ1DEVsf3LV5AqsvHXG2pW3llYVP585rZrmHMu2rspqJihYPFNebsqLHfRb2AP9qROELOLbcX9hNeuylNGR9sgNw07PBTdR6U8fMMePKeaFtNjzrrYRPPsw2ZtNrn1XTa62my6xj7RJaYX2n0wi2Ynbi2yeDE%2BmOPlMV%2BIHO%2BtRP0qdMMkcQ%2BFQmt33l%2FzopctMqfBMILE3CV7beQ2x8px5sf3S1YLtn3%2BdMKKeEf4clxZUTXix7xGZQpnYZXz%2Bm%2FLLJw5LXwgkGiPqBybyuZt9NnTf%2Bp8Ba9sTZB4Zfut9VQPBpJ1KIrhUjxcvCf7dfd2DDGBBBmQInV0dZ4gS1KVPcMtJU0QESMcgX1KU3OdlA%2B3aIZjTn3bPpTXMKGTscEGOqUB7KjsqF79t%2BMYYmGG7wrNKFTWT%2BpkF2Yt%2FWzo9%2BheYD2Es%2BqEcX8YvnIl41k7W3LvDNxBAjiWz56%2FqD2skmcKKlTjltRYX7sXpkbe58dCELomto4o%2BPS%2Bcu5%2BCyP57pfn2SMpVucBLIcCJcRj229tt1qM5puGSwPW5tmpvTwGfK6eFTTL5lJhDty4pVFl4EOAvL%2BbOALYR3%2FVnTMe3qhJ15%2BACUUv&X-Amz-Signature=078309341cf0db112812a343bc8e2f0a40234ba24e8d78eeeb115abed4619275&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYXN3SZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4yiytW6jDyjaRVJL6AMbjRmzaev4UEraeH1Fon%2BfsZAiEAjpkasmlnGyAYxE%2FwvNk0ve4i7SRPbDV4PNSp%2BxAk%2BDUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9d3wHbrk1FWcSR%2FircA%2BjX6vcRZ9EaTwbQKh9CrzSKnSWHUDMrFqoY3%2FHEGD9UiTWPZaG9MJmDEr%2B5Jl3OEWJ5zSKFwxBS4%2BQQovvqvW4mjkZ0DvA7mRuiYYFb82yk3iQG%2BEMk3fBhMKgXz8%2BUkkxvd1e6zPdT5xVS7b5xV016TZHvMlf7WvLY4nr8ymLHP36F8IsnCPIBnkytkjTV8VFOc34wQKaHjiX6qn4qw1BuxKcxDyUr98Eq4xnWmnQF0HTgCqFWSHChAEy%2FBwb%2BoBbJ1DEVsf3LV5AqsvHXG2pW3llYVP585rZrmHMu2rspqJihYPFNebsqLHfRb2AP9qROELOLbcX9hNeuylNGR9sgNw07PBTdR6U8fMMePKeaFtNjzrrYRPPsw2ZtNrn1XTa62my6xj7RJaYX2n0wi2Ynbi2yeDE%2BmOPlMV%2BIHO%2BtRP0qdMMkcQ%2BFQmt33l%2FzopctMqfBMILE3CV7beQ2x8px5sf3S1YLtn3%2BdMKKeEf4clxZUTXix7xGZQpnYZXz%2Bm%2FLLJw5LXwgkGiPqBybyuZt9NnTf%2Bp8Ba9sTZB4Zfut9VQPBpJ1KIrhUjxcvCf7dfd2DDGBBBmQInV0dZ4gS1KVPcMtJU0QESMcgX1KU3OdlA%2B3aIZjTn3bPpTXMKGTscEGOqUB7KjsqF79t%2BMYYmGG7wrNKFTWT%2BpkF2Yt%2FWzo9%2BheYD2Es%2BqEcX8YvnIl41k7W3LvDNxBAjiWz56%2FqD2skmcKKlTjltRYX7sXpkbe58dCELomto4o%2BPS%2Bcu5%2BCyP57pfn2SMpVucBLIcCJcRj229tt1qM5puGSwPW5tmpvTwGfK6eFTTL5lJhDty4pVFl4EOAvL%2BbOALYR3%2FVnTMe3qhJ15%2BACUUv&X-Amz-Signature=710c05e55c730bd0affd19b7bbc9f0cb6b41229e20e82ad1fdf4aa03203cc162&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYXN3SZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4yiytW6jDyjaRVJL6AMbjRmzaev4UEraeH1Fon%2BfsZAiEAjpkasmlnGyAYxE%2FwvNk0ve4i7SRPbDV4PNSp%2BxAk%2BDUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9d3wHbrk1FWcSR%2FircA%2BjX6vcRZ9EaTwbQKh9CrzSKnSWHUDMrFqoY3%2FHEGD9UiTWPZaG9MJmDEr%2B5Jl3OEWJ5zSKFwxBS4%2BQQovvqvW4mjkZ0DvA7mRuiYYFb82yk3iQG%2BEMk3fBhMKgXz8%2BUkkxvd1e6zPdT5xVS7b5xV016TZHvMlf7WvLY4nr8ymLHP36F8IsnCPIBnkytkjTV8VFOc34wQKaHjiX6qn4qw1BuxKcxDyUr98Eq4xnWmnQF0HTgCqFWSHChAEy%2FBwb%2BoBbJ1DEVsf3LV5AqsvHXG2pW3llYVP585rZrmHMu2rspqJihYPFNebsqLHfRb2AP9qROELOLbcX9hNeuylNGR9sgNw07PBTdR6U8fMMePKeaFtNjzrrYRPPsw2ZtNrn1XTa62my6xj7RJaYX2n0wi2Ynbi2yeDE%2BmOPlMV%2BIHO%2BtRP0qdMMkcQ%2BFQmt33l%2FzopctMqfBMILE3CV7beQ2x8px5sf3S1YLtn3%2BdMKKeEf4clxZUTXix7xGZQpnYZXz%2Bm%2FLLJw5LXwgkGiPqBybyuZt9NnTf%2Bp8Ba9sTZB4Zfut9VQPBpJ1KIrhUjxcvCf7dfd2DDGBBBmQInV0dZ4gS1KVPcMtJU0QESMcgX1KU3OdlA%2B3aIZjTn3bPpTXMKGTscEGOqUB7KjsqF79t%2BMYYmGG7wrNKFTWT%2BpkF2Yt%2FWzo9%2BheYD2Es%2BqEcX8YvnIl41k7W3LvDNxBAjiWz56%2FqD2skmcKKlTjltRYX7sXpkbe58dCELomto4o%2BPS%2Bcu5%2BCyP57pfn2SMpVucBLIcCJcRj229tt1qM5puGSwPW5tmpvTwGfK6eFTTL5lJhDty4pVFl4EOAvL%2BbOALYR3%2FVnTMe3qhJ15%2BACUUv&X-Amz-Signature=b9a97290aa398122efdb32bde6c71d9675ef15e04e53cb2e01b09c472ab47a19&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
