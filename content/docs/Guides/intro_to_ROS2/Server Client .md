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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDO6Z7YP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB%2FcODLTMVq125LTDaNx597adbjuR%2FlVLvpnN5iDxacuAiEA%2BDoZoIilNuXI3K0BTHvL3fzKS7rv63IZSSncuJhyitQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkK%2FN2IhHrKf%2Br0kircA%2B8v8TmHR%2F43uQT3lj4Z18VUk2k4%2F4M6qtqSZaYS7%2FxtxMfD3OjMxlS3nR%2F31mhA5Q%2B%2BSZHXRgqOwqWQcXZrsAz2sT5CMhNGcAEGwBXnSgc46kXD%2FeYyou827jMXi99jNL7qCq54Dm6W0pgvC2PbhBfgF99kPGE2YmwU%2BbKGwKB0tolnGvrCEVGI%2Fhg3wS95GTOuRdLjwvhuTKNtrDCvDhetdqLgv2vBPlaVZIth2HPvc5JYbyw0Ei03epmlctlt1P3eRedq153Iq2dvGk08BtUErrZuQdZPeHxbj5W9eM1eq6GZhfUq3SLxPYrWzUVE9yyd%2BBA4QGUJo9YwW%2BgcSqBshlPmSIw4LMt8uVDwzP1ZROa1tyxU%2BZdbAsqo01ameUXNLGYUZCbgtpxm9uesSevcrvviezy3ZDSxZ9ixszEbVdNNBIcPY%2FYP4A6gqlYUKkJasOQp1jGCrPDofjzCS63uC4oFUX8cU0fHbE%2Bxle0KJoVi%2FX3oVbRbBDlnpN%2FbHTaA6ULQ1UO%2B0yZOFLkF6yil1h4AqjaHMYFx46hJCUb1vesl0fY7M0bYy8SLeLIThn0ZHRbGX%2FIZhS57rrnyydfgkG1So1C5kHfI%2FvZucxKFd5Tmr4gJ4wyrMcQ2MIeHnb0GOqUBeV1CmFNxQa107iPMZsPMZ27dXDigp%2BOO844lwrUBQTS7QXaO8n%2F2MQPVeEEEfBkPtb4j4B5fOxPGoVVP30xjZUCQtBxdXlxShSx2bX59uaABFQ1AvHteJ%2B1jeYgQBpp3hyA6K8ZT2n2oJ6ZgtI9780%2Fxmkhqpx4f99OaVUFHAh2rMGK1n5zoV7cFAFEkaGGI9vZlTMWJ9KvDFwj7WkPDocnr2gZG&X-Amz-Signature=2ef19bcc529f57b2a2963fdc11fb3bfd8e83b86b6446ec15a89daa9bc7f8b096&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDO6Z7YP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB%2FcODLTMVq125LTDaNx597adbjuR%2FlVLvpnN5iDxacuAiEA%2BDoZoIilNuXI3K0BTHvL3fzKS7rv63IZSSncuJhyitQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkK%2FN2IhHrKf%2Br0kircA%2B8v8TmHR%2F43uQT3lj4Z18VUk2k4%2F4M6qtqSZaYS7%2FxtxMfD3OjMxlS3nR%2F31mhA5Q%2B%2BSZHXRgqOwqWQcXZrsAz2sT5CMhNGcAEGwBXnSgc46kXD%2FeYyou827jMXi99jNL7qCq54Dm6W0pgvC2PbhBfgF99kPGE2YmwU%2BbKGwKB0tolnGvrCEVGI%2Fhg3wS95GTOuRdLjwvhuTKNtrDCvDhetdqLgv2vBPlaVZIth2HPvc5JYbyw0Ei03epmlctlt1P3eRedq153Iq2dvGk08BtUErrZuQdZPeHxbj5W9eM1eq6GZhfUq3SLxPYrWzUVE9yyd%2BBA4QGUJo9YwW%2BgcSqBshlPmSIw4LMt8uVDwzP1ZROa1tyxU%2BZdbAsqo01ameUXNLGYUZCbgtpxm9uesSevcrvviezy3ZDSxZ9ixszEbVdNNBIcPY%2FYP4A6gqlYUKkJasOQp1jGCrPDofjzCS63uC4oFUX8cU0fHbE%2Bxle0KJoVi%2FX3oVbRbBDlnpN%2FbHTaA6ULQ1UO%2B0yZOFLkF6yil1h4AqjaHMYFx46hJCUb1vesl0fY7M0bYy8SLeLIThn0ZHRbGX%2FIZhS57rrnyydfgkG1So1C5kHfI%2FvZucxKFd5Tmr4gJ4wyrMcQ2MIeHnb0GOqUBeV1CmFNxQa107iPMZsPMZ27dXDigp%2BOO844lwrUBQTS7QXaO8n%2F2MQPVeEEEfBkPtb4j4B5fOxPGoVVP30xjZUCQtBxdXlxShSx2bX59uaABFQ1AvHteJ%2B1jeYgQBpp3hyA6K8ZT2n2oJ6ZgtI9780%2Fxmkhqpx4f99OaVUFHAh2rMGK1n5zoV7cFAFEkaGGI9vZlTMWJ9KvDFwj7WkPDocnr2gZG&X-Amz-Signature=2e9aaf1eb3821dac90671cc45d9ac1d45369469efa450bd5d1d4ec5c7a7b5ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDO6Z7YP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB%2FcODLTMVq125LTDaNx597adbjuR%2FlVLvpnN5iDxacuAiEA%2BDoZoIilNuXI3K0BTHvL3fzKS7rv63IZSSncuJhyitQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkK%2FN2IhHrKf%2Br0kircA%2B8v8TmHR%2F43uQT3lj4Z18VUk2k4%2F4M6qtqSZaYS7%2FxtxMfD3OjMxlS3nR%2F31mhA5Q%2B%2BSZHXRgqOwqWQcXZrsAz2sT5CMhNGcAEGwBXnSgc46kXD%2FeYyou827jMXi99jNL7qCq54Dm6W0pgvC2PbhBfgF99kPGE2YmwU%2BbKGwKB0tolnGvrCEVGI%2Fhg3wS95GTOuRdLjwvhuTKNtrDCvDhetdqLgv2vBPlaVZIth2HPvc5JYbyw0Ei03epmlctlt1P3eRedq153Iq2dvGk08BtUErrZuQdZPeHxbj5W9eM1eq6GZhfUq3SLxPYrWzUVE9yyd%2BBA4QGUJo9YwW%2BgcSqBshlPmSIw4LMt8uVDwzP1ZROa1tyxU%2BZdbAsqo01ameUXNLGYUZCbgtpxm9uesSevcrvviezy3ZDSxZ9ixszEbVdNNBIcPY%2FYP4A6gqlYUKkJasOQp1jGCrPDofjzCS63uC4oFUX8cU0fHbE%2Bxle0KJoVi%2FX3oVbRbBDlnpN%2FbHTaA6ULQ1UO%2B0yZOFLkF6yil1h4AqjaHMYFx46hJCUb1vesl0fY7M0bYy8SLeLIThn0ZHRbGX%2FIZhS57rrnyydfgkG1So1C5kHfI%2FvZucxKFd5Tmr4gJ4wyrMcQ2MIeHnb0GOqUBeV1CmFNxQa107iPMZsPMZ27dXDigp%2BOO844lwrUBQTS7QXaO8n%2F2MQPVeEEEfBkPtb4j4B5fOxPGoVVP30xjZUCQtBxdXlxShSx2bX59uaABFQ1AvHteJ%2B1jeYgQBpp3hyA6K8ZT2n2oJ6ZgtI9780%2Fxmkhqpx4f99OaVUFHAh2rMGK1n5zoV7cFAFEkaGGI9vZlTMWJ9KvDFwj7WkPDocnr2gZG&X-Amz-Signature=ca9559143bdbab70e43a50a209fa6da0ab42300b687d8d33f41ad4463f34b701&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDO6Z7YP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB%2FcODLTMVq125LTDaNx597adbjuR%2FlVLvpnN5iDxacuAiEA%2BDoZoIilNuXI3K0BTHvL3fzKS7rv63IZSSncuJhyitQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkK%2FN2IhHrKf%2Br0kircA%2B8v8TmHR%2F43uQT3lj4Z18VUk2k4%2F4M6qtqSZaYS7%2FxtxMfD3OjMxlS3nR%2F31mhA5Q%2B%2BSZHXRgqOwqWQcXZrsAz2sT5CMhNGcAEGwBXnSgc46kXD%2FeYyou827jMXi99jNL7qCq54Dm6W0pgvC2PbhBfgF99kPGE2YmwU%2BbKGwKB0tolnGvrCEVGI%2Fhg3wS95GTOuRdLjwvhuTKNtrDCvDhetdqLgv2vBPlaVZIth2HPvc5JYbyw0Ei03epmlctlt1P3eRedq153Iq2dvGk08BtUErrZuQdZPeHxbj5W9eM1eq6GZhfUq3SLxPYrWzUVE9yyd%2BBA4QGUJo9YwW%2BgcSqBshlPmSIw4LMt8uVDwzP1ZROa1tyxU%2BZdbAsqo01ameUXNLGYUZCbgtpxm9uesSevcrvviezy3ZDSxZ9ixszEbVdNNBIcPY%2FYP4A6gqlYUKkJasOQp1jGCrPDofjzCS63uC4oFUX8cU0fHbE%2Bxle0KJoVi%2FX3oVbRbBDlnpN%2FbHTaA6ULQ1UO%2B0yZOFLkF6yil1h4AqjaHMYFx46hJCUb1vesl0fY7M0bYy8SLeLIThn0ZHRbGX%2FIZhS57rrnyydfgkG1So1C5kHfI%2FvZucxKFd5Tmr4gJ4wyrMcQ2MIeHnb0GOqUBeV1CmFNxQa107iPMZsPMZ27dXDigp%2BOO844lwrUBQTS7QXaO8n%2F2MQPVeEEEfBkPtb4j4B5fOxPGoVVP30xjZUCQtBxdXlxShSx2bX59uaABFQ1AvHteJ%2B1jeYgQBpp3hyA6K8ZT2n2oJ6ZgtI9780%2Fxmkhqpx4f99OaVUFHAh2rMGK1n5zoV7cFAFEkaGGI9vZlTMWJ9KvDFwj7WkPDocnr2gZG&X-Amz-Signature=72dc696f21e5486dac5ee5b87b2737031b9c37f56320e514267493fa1b6c9f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDO6Z7YP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB%2FcODLTMVq125LTDaNx597adbjuR%2FlVLvpnN5iDxacuAiEA%2BDoZoIilNuXI3K0BTHvL3fzKS7rv63IZSSncuJhyitQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkK%2FN2IhHrKf%2Br0kircA%2B8v8TmHR%2F43uQT3lj4Z18VUk2k4%2F4M6qtqSZaYS7%2FxtxMfD3OjMxlS3nR%2F31mhA5Q%2B%2BSZHXRgqOwqWQcXZrsAz2sT5CMhNGcAEGwBXnSgc46kXD%2FeYyou827jMXi99jNL7qCq54Dm6W0pgvC2PbhBfgF99kPGE2YmwU%2BbKGwKB0tolnGvrCEVGI%2Fhg3wS95GTOuRdLjwvhuTKNtrDCvDhetdqLgv2vBPlaVZIth2HPvc5JYbyw0Ei03epmlctlt1P3eRedq153Iq2dvGk08BtUErrZuQdZPeHxbj5W9eM1eq6GZhfUq3SLxPYrWzUVE9yyd%2BBA4QGUJo9YwW%2BgcSqBshlPmSIw4LMt8uVDwzP1ZROa1tyxU%2BZdbAsqo01ameUXNLGYUZCbgtpxm9uesSevcrvviezy3ZDSxZ9ixszEbVdNNBIcPY%2FYP4A6gqlYUKkJasOQp1jGCrPDofjzCS63uC4oFUX8cU0fHbE%2Bxle0KJoVi%2FX3oVbRbBDlnpN%2FbHTaA6ULQ1UO%2B0yZOFLkF6yil1h4AqjaHMYFx46hJCUb1vesl0fY7M0bYy8SLeLIThn0ZHRbGX%2FIZhS57rrnyydfgkG1So1C5kHfI%2FvZucxKFd5Tmr4gJ4wyrMcQ2MIeHnb0GOqUBeV1CmFNxQa107iPMZsPMZ27dXDigp%2BOO844lwrUBQTS7QXaO8n%2F2MQPVeEEEfBkPtb4j4B5fOxPGoVVP30xjZUCQtBxdXlxShSx2bX59uaABFQ1AvHteJ%2B1jeYgQBpp3hyA6K8ZT2n2oJ6ZgtI9780%2Fxmkhqpx4f99OaVUFHAh2rMGK1n5zoV7cFAFEkaGGI9vZlTMWJ9KvDFwj7WkPDocnr2gZG&X-Amz-Signature=3e71bd584ed946adb3d35cf853e3ab626f74176adacb26c1b3ce01d1e14cec41&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
