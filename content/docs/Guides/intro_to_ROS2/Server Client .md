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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQU6AYI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfH%2BWg6SzICKJ%2B1zeg%2BOA%2FfLpx57FLV4gdQzKQsZ%2FM4AiBl6YlRPJzzqgzM7SFll63lAJZyQTHtFkepjUg2s2Bs5Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMlPRpj2Yd76VxcKdxKtwDsgd8B0dfkILRib955lJNR1%2FF3f6IFxMLJ44p15lyNenImauasgsYQ1uYmOvMLKdCrfN7rQZL%2BpgDk31wro4%2FWuZjYBOOOpVDdrZ3DZ%2BhNUy2qpRFUEstP2WPaGuKJPJ01tjpO2kkHVe6sUyxF%2FqUptFM7sUKhRLLvlB9SXU96mF0eYMzuQJB7KihrKyAiXsBWG1fmpv4NpnMeH0maPmFo2S6ngTfCKb1r9pua2ug0Qwct%2BG1%2F2d5FgUaYJBVvpXMBpXajdqXzzGzArm5mGdF1OomxZ4SF3qqOPxGGce%2BXi6%2F4RCNhGUnEHMm899Lq1LmOf521K9oYYxPNZI9rex6CKKm%2Bf%2BjnmkYvTtDwKsdGpL531lGtv9jG9U%2F1sQIj%2BwX7FsYKGcPc%2FuXjR1m33iVurRMvgW%2BktHRW%2FV0cMx8uim%2FApcCUG5a2DkgS2jJBe%2BtxDNVRgrOoTI2x7WPtV2lyleLyMpua1xwtexKeTOjpXLELwAOEQIXOixnBurMrF2DvpjzoYrCXbZrUnx8%2B2DyqVIdJ7EYfQg5qbR8twcVRRQ5ieiWyobBg3s%2BZfJHyOt2noa%2FLmLsOgIHCvXXjWhfxtmIN30FPNenQQelqS0OqMqu71%2BOd5GUBOIynFUw8p%2BtvgY6pgH%2Fsgda7JtI1SVWBbNxIpEFyXCrHeZJ4RCuz5VqN%2FZglQODN%2FRYw6EJ%2FQgD8Z3nPUclSoPuiLIUS2ks782TdNC9AOgmC7BtuUwMiCvEu6u7o4oVv3Ua%2BKeXwB9tuS23FLYdT%2BEINQAh8N2Zm6m5cTjkQiEFZU4nrdA5imEldBROnaF1ikoIeEpubd25OX%2Fx7twG2EobZ2SBfhgIFeYfN%2BU%2B7NtR82C0&X-Amz-Signature=a2592d7dec92d349f3937f6e8db449514b568f5f5d8391fd8550387ab9d38f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQU6AYI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfH%2BWg6SzICKJ%2B1zeg%2BOA%2FfLpx57FLV4gdQzKQsZ%2FM4AiBl6YlRPJzzqgzM7SFll63lAJZyQTHtFkepjUg2s2Bs5Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMlPRpj2Yd76VxcKdxKtwDsgd8B0dfkILRib955lJNR1%2FF3f6IFxMLJ44p15lyNenImauasgsYQ1uYmOvMLKdCrfN7rQZL%2BpgDk31wro4%2FWuZjYBOOOpVDdrZ3DZ%2BhNUy2qpRFUEstP2WPaGuKJPJ01tjpO2kkHVe6sUyxF%2FqUptFM7sUKhRLLvlB9SXU96mF0eYMzuQJB7KihrKyAiXsBWG1fmpv4NpnMeH0maPmFo2S6ngTfCKb1r9pua2ug0Qwct%2BG1%2F2d5FgUaYJBVvpXMBpXajdqXzzGzArm5mGdF1OomxZ4SF3qqOPxGGce%2BXi6%2F4RCNhGUnEHMm899Lq1LmOf521K9oYYxPNZI9rex6CKKm%2Bf%2BjnmkYvTtDwKsdGpL531lGtv9jG9U%2F1sQIj%2BwX7FsYKGcPc%2FuXjR1m33iVurRMvgW%2BktHRW%2FV0cMx8uim%2FApcCUG5a2DkgS2jJBe%2BtxDNVRgrOoTI2x7WPtV2lyleLyMpua1xwtexKeTOjpXLELwAOEQIXOixnBurMrF2DvpjzoYrCXbZrUnx8%2B2DyqVIdJ7EYfQg5qbR8twcVRRQ5ieiWyobBg3s%2BZfJHyOt2noa%2FLmLsOgIHCvXXjWhfxtmIN30FPNenQQelqS0OqMqu71%2BOd5GUBOIynFUw8p%2BtvgY6pgH%2Fsgda7JtI1SVWBbNxIpEFyXCrHeZJ4RCuz5VqN%2FZglQODN%2FRYw6EJ%2FQgD8Z3nPUclSoPuiLIUS2ks782TdNC9AOgmC7BtuUwMiCvEu6u7o4oVv3Ua%2BKeXwB9tuS23FLYdT%2BEINQAh8N2Zm6m5cTjkQiEFZU4nrdA5imEldBROnaF1ikoIeEpubd25OX%2Fx7twG2EobZ2SBfhgIFeYfN%2BU%2B7NtR82C0&X-Amz-Signature=9f60a5578069ffd206c9812256cdec7c26a98c4423ccd65b349556e60308575f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQU6AYI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfH%2BWg6SzICKJ%2B1zeg%2BOA%2FfLpx57FLV4gdQzKQsZ%2FM4AiBl6YlRPJzzqgzM7SFll63lAJZyQTHtFkepjUg2s2Bs5Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMlPRpj2Yd76VxcKdxKtwDsgd8B0dfkILRib955lJNR1%2FF3f6IFxMLJ44p15lyNenImauasgsYQ1uYmOvMLKdCrfN7rQZL%2BpgDk31wro4%2FWuZjYBOOOpVDdrZ3DZ%2BhNUy2qpRFUEstP2WPaGuKJPJ01tjpO2kkHVe6sUyxF%2FqUptFM7sUKhRLLvlB9SXU96mF0eYMzuQJB7KihrKyAiXsBWG1fmpv4NpnMeH0maPmFo2S6ngTfCKb1r9pua2ug0Qwct%2BG1%2F2d5FgUaYJBVvpXMBpXajdqXzzGzArm5mGdF1OomxZ4SF3qqOPxGGce%2BXi6%2F4RCNhGUnEHMm899Lq1LmOf521K9oYYxPNZI9rex6CKKm%2Bf%2BjnmkYvTtDwKsdGpL531lGtv9jG9U%2F1sQIj%2BwX7FsYKGcPc%2FuXjR1m33iVurRMvgW%2BktHRW%2FV0cMx8uim%2FApcCUG5a2DkgS2jJBe%2BtxDNVRgrOoTI2x7WPtV2lyleLyMpua1xwtexKeTOjpXLELwAOEQIXOixnBurMrF2DvpjzoYrCXbZrUnx8%2B2DyqVIdJ7EYfQg5qbR8twcVRRQ5ieiWyobBg3s%2BZfJHyOt2noa%2FLmLsOgIHCvXXjWhfxtmIN30FPNenQQelqS0OqMqu71%2BOd5GUBOIynFUw8p%2BtvgY6pgH%2Fsgda7JtI1SVWBbNxIpEFyXCrHeZJ4RCuz5VqN%2FZglQODN%2FRYw6EJ%2FQgD8Z3nPUclSoPuiLIUS2ks782TdNC9AOgmC7BtuUwMiCvEu6u7o4oVv3Ua%2BKeXwB9tuS23FLYdT%2BEINQAh8N2Zm6m5cTjkQiEFZU4nrdA5imEldBROnaF1ikoIeEpubd25OX%2Fx7twG2EobZ2SBfhgIFeYfN%2BU%2B7NtR82C0&X-Amz-Signature=a3ac681e77120ce1d710d57a1f6ec268088d12e422c9afa0eae09bbf642b348e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQU6AYI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfH%2BWg6SzICKJ%2B1zeg%2BOA%2FfLpx57FLV4gdQzKQsZ%2FM4AiBl6YlRPJzzqgzM7SFll63lAJZyQTHtFkepjUg2s2Bs5Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMlPRpj2Yd76VxcKdxKtwDsgd8B0dfkILRib955lJNR1%2FF3f6IFxMLJ44p15lyNenImauasgsYQ1uYmOvMLKdCrfN7rQZL%2BpgDk31wro4%2FWuZjYBOOOpVDdrZ3DZ%2BhNUy2qpRFUEstP2WPaGuKJPJ01tjpO2kkHVe6sUyxF%2FqUptFM7sUKhRLLvlB9SXU96mF0eYMzuQJB7KihrKyAiXsBWG1fmpv4NpnMeH0maPmFo2S6ngTfCKb1r9pua2ug0Qwct%2BG1%2F2d5FgUaYJBVvpXMBpXajdqXzzGzArm5mGdF1OomxZ4SF3qqOPxGGce%2BXi6%2F4RCNhGUnEHMm899Lq1LmOf521K9oYYxPNZI9rex6CKKm%2Bf%2BjnmkYvTtDwKsdGpL531lGtv9jG9U%2F1sQIj%2BwX7FsYKGcPc%2FuXjR1m33iVurRMvgW%2BktHRW%2FV0cMx8uim%2FApcCUG5a2DkgS2jJBe%2BtxDNVRgrOoTI2x7WPtV2lyleLyMpua1xwtexKeTOjpXLELwAOEQIXOixnBurMrF2DvpjzoYrCXbZrUnx8%2B2DyqVIdJ7EYfQg5qbR8twcVRRQ5ieiWyobBg3s%2BZfJHyOt2noa%2FLmLsOgIHCvXXjWhfxtmIN30FPNenQQelqS0OqMqu71%2BOd5GUBOIynFUw8p%2BtvgY6pgH%2Fsgda7JtI1SVWBbNxIpEFyXCrHeZJ4RCuz5VqN%2FZglQODN%2FRYw6EJ%2FQgD8Z3nPUclSoPuiLIUS2ks782TdNC9AOgmC7BtuUwMiCvEu6u7o4oVv3Ua%2BKeXwB9tuS23FLYdT%2BEINQAh8N2Zm6m5cTjkQiEFZU4nrdA5imEldBROnaF1ikoIeEpubd25OX%2Fx7twG2EobZ2SBfhgIFeYfN%2BU%2B7NtR82C0&X-Amz-Signature=a49e3c5cd61362be1fcc5c2acf33ca482e6771cded17d8f8eeb477ad50656721&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQU6AYI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBfH%2BWg6SzICKJ%2B1zeg%2BOA%2FfLpx57FLV4gdQzKQsZ%2FM4AiBl6YlRPJzzqgzM7SFll63lAJZyQTHtFkepjUg2s2Bs5Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMlPRpj2Yd76VxcKdxKtwDsgd8B0dfkILRib955lJNR1%2FF3f6IFxMLJ44p15lyNenImauasgsYQ1uYmOvMLKdCrfN7rQZL%2BpgDk31wro4%2FWuZjYBOOOpVDdrZ3DZ%2BhNUy2qpRFUEstP2WPaGuKJPJ01tjpO2kkHVe6sUyxF%2FqUptFM7sUKhRLLvlB9SXU96mF0eYMzuQJB7KihrKyAiXsBWG1fmpv4NpnMeH0maPmFo2S6ngTfCKb1r9pua2ug0Qwct%2BG1%2F2d5FgUaYJBVvpXMBpXajdqXzzGzArm5mGdF1OomxZ4SF3qqOPxGGce%2BXi6%2F4RCNhGUnEHMm899Lq1LmOf521K9oYYxPNZI9rex6CKKm%2Bf%2BjnmkYvTtDwKsdGpL531lGtv9jG9U%2F1sQIj%2BwX7FsYKGcPc%2FuXjR1m33iVurRMvgW%2BktHRW%2FV0cMx8uim%2FApcCUG5a2DkgS2jJBe%2BtxDNVRgrOoTI2x7WPtV2lyleLyMpua1xwtexKeTOjpXLELwAOEQIXOixnBurMrF2DvpjzoYrCXbZrUnx8%2B2DyqVIdJ7EYfQg5qbR8twcVRRQ5ieiWyobBg3s%2BZfJHyOt2noa%2FLmLsOgIHCvXXjWhfxtmIN30FPNenQQelqS0OqMqu71%2BOd5GUBOIynFUw8p%2BtvgY6pgH%2Fsgda7JtI1SVWBbNxIpEFyXCrHeZJ4RCuz5VqN%2FZglQODN%2FRYw6EJ%2FQgD8Z3nPUclSoPuiLIUS2ks782TdNC9AOgmC7BtuUwMiCvEu6u7o4oVv3Ua%2BKeXwB9tuS23FLYdT%2BEINQAh8N2Zm6m5cTjkQiEFZU4nrdA5imEldBROnaF1ikoIeEpubd25OX%2Fx7twG2EobZ2SBfhgIFeYfN%2BU%2B7NtR82C0&X-Amz-Signature=3f05b6b1aa2888e9fd26b16163fdaae889133fb40175b4df5761693bc4b1c7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
