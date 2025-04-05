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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLYNREN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEqq%2FtsMf%2F4BJm9E9PHvzKDBnMMn7ZPAx1QNVwda1iAAiA6lGlCGadCSCo4Ut798N6tC6MxMxyjdBRFodn8oFvlOir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMlf03RfodYzCMU3NDKtwDlEORF8RRk6j8OvAaLeednJSuuTLBsAYjyrBIwMGiYX6ck1i24YL4uwJAEalw0WkeJ6mmpYT5VmJgnFmBAiHVfEnwbQwB9h8skKQcu9wmGrcRjg9bp8yZytZlelGMa1GDgWcTTysV51dtE%2BWijGNiMx%2F8ExDKSPxOo5C52E%2F7V6djm7yS9JnmowEMmPwNdgSglovaYcV0ROc%2FXZ3UIx2nAihCFrdOA1eReKMXuwHPVrSniT0%2B0rA5P3tWoeXZeBFW20s3XZxma%2F83DLkO14tqZz%2BbkTmDo54PgIht4euveedfOFbon3Bl8S7TNVTrSeIb5YmWCjPqx030LyFIYXTMfv%2F3B6czGiwRH59W3VEdV8L2kxvXBlsxcPNKviZej8mLeQi%2Fh%2BSqu5QDNwPHwhcIMdl0jCZbh9wNcTnxPLhCW0G347hxO9H9enAfRnK3Kb04erZLbgchIekUTucUtTXzTCQTR4MHhXltAndqpjn%2F5SJC%2Fava3Rma5btqsnCmn3XZK5w%2B1WSWanDM%2F3E4WeuDSQyoZhHV1VmTsCsmajKAKKNEd8Pv5%2BdnL2HNy8eBikq1xeB5kWH9ogAQidKaNq1qLj6cbK0x01PbljjD8XhYkEwVc6yiqDoIW95nQDQwgfDCvwY6pgGC7MsnFLobt6OG4p7TJdAIJraYyYYj8u3jqAN3es9kUS7o3XbKOFnTtzT%2BrWX6hxx9a89Y%2BIQWOUZk03dopHra3UYW%2FC4dzY%2FdxekKj%2Ft7qpFEcz8u9CT9KWf9juesQHf8VHoqt%2BtQdsqYDOS9xeiWRg9nBOIJ1w99QA2lTVWCYttBBek%2FtNnw9lAc4s%2FdC7gpUYSfNlDV1TxtI5RZP5FOm1TAfJnD&X-Amz-Signature=6b9a7c6d6c49f64a01e8d5706dc0dae6a19e090177ea6104217e69d66ffa9141&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLYNREN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEqq%2FtsMf%2F4BJm9E9PHvzKDBnMMn7ZPAx1QNVwda1iAAiA6lGlCGadCSCo4Ut798N6tC6MxMxyjdBRFodn8oFvlOir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMlf03RfodYzCMU3NDKtwDlEORF8RRk6j8OvAaLeednJSuuTLBsAYjyrBIwMGiYX6ck1i24YL4uwJAEalw0WkeJ6mmpYT5VmJgnFmBAiHVfEnwbQwB9h8skKQcu9wmGrcRjg9bp8yZytZlelGMa1GDgWcTTysV51dtE%2BWijGNiMx%2F8ExDKSPxOo5C52E%2F7V6djm7yS9JnmowEMmPwNdgSglovaYcV0ROc%2FXZ3UIx2nAihCFrdOA1eReKMXuwHPVrSniT0%2B0rA5P3tWoeXZeBFW20s3XZxma%2F83DLkO14tqZz%2BbkTmDo54PgIht4euveedfOFbon3Bl8S7TNVTrSeIb5YmWCjPqx030LyFIYXTMfv%2F3B6czGiwRH59W3VEdV8L2kxvXBlsxcPNKviZej8mLeQi%2Fh%2BSqu5QDNwPHwhcIMdl0jCZbh9wNcTnxPLhCW0G347hxO9H9enAfRnK3Kb04erZLbgchIekUTucUtTXzTCQTR4MHhXltAndqpjn%2F5SJC%2Fava3Rma5btqsnCmn3XZK5w%2B1WSWanDM%2F3E4WeuDSQyoZhHV1VmTsCsmajKAKKNEd8Pv5%2BdnL2HNy8eBikq1xeB5kWH9ogAQidKaNq1qLj6cbK0x01PbljjD8XhYkEwVc6yiqDoIW95nQDQwgfDCvwY6pgGC7MsnFLobt6OG4p7TJdAIJraYyYYj8u3jqAN3es9kUS7o3XbKOFnTtzT%2BrWX6hxx9a89Y%2BIQWOUZk03dopHra3UYW%2FC4dzY%2FdxekKj%2Ft7qpFEcz8u9CT9KWf9juesQHf8VHoqt%2BtQdsqYDOS9xeiWRg9nBOIJ1w99QA2lTVWCYttBBek%2FtNnw9lAc4s%2FdC7gpUYSfNlDV1TxtI5RZP5FOm1TAfJnD&X-Amz-Signature=b1500dd11b76f48e934a86c46aff291562f1e991f980bce8876afae1fb9e14d7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLYNREN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEqq%2FtsMf%2F4BJm9E9PHvzKDBnMMn7ZPAx1QNVwda1iAAiA6lGlCGadCSCo4Ut798N6tC6MxMxyjdBRFodn8oFvlOir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMlf03RfodYzCMU3NDKtwDlEORF8RRk6j8OvAaLeednJSuuTLBsAYjyrBIwMGiYX6ck1i24YL4uwJAEalw0WkeJ6mmpYT5VmJgnFmBAiHVfEnwbQwB9h8skKQcu9wmGrcRjg9bp8yZytZlelGMa1GDgWcTTysV51dtE%2BWijGNiMx%2F8ExDKSPxOo5C52E%2F7V6djm7yS9JnmowEMmPwNdgSglovaYcV0ROc%2FXZ3UIx2nAihCFrdOA1eReKMXuwHPVrSniT0%2B0rA5P3tWoeXZeBFW20s3XZxma%2F83DLkO14tqZz%2BbkTmDo54PgIht4euveedfOFbon3Bl8S7TNVTrSeIb5YmWCjPqx030LyFIYXTMfv%2F3B6czGiwRH59W3VEdV8L2kxvXBlsxcPNKviZej8mLeQi%2Fh%2BSqu5QDNwPHwhcIMdl0jCZbh9wNcTnxPLhCW0G347hxO9H9enAfRnK3Kb04erZLbgchIekUTucUtTXzTCQTR4MHhXltAndqpjn%2F5SJC%2Fava3Rma5btqsnCmn3XZK5w%2B1WSWanDM%2F3E4WeuDSQyoZhHV1VmTsCsmajKAKKNEd8Pv5%2BdnL2HNy8eBikq1xeB5kWH9ogAQidKaNq1qLj6cbK0x01PbljjD8XhYkEwVc6yiqDoIW95nQDQwgfDCvwY6pgGC7MsnFLobt6OG4p7TJdAIJraYyYYj8u3jqAN3es9kUS7o3XbKOFnTtzT%2BrWX6hxx9a89Y%2BIQWOUZk03dopHra3UYW%2FC4dzY%2FdxekKj%2Ft7qpFEcz8u9CT9KWf9juesQHf8VHoqt%2BtQdsqYDOS9xeiWRg9nBOIJ1w99QA2lTVWCYttBBek%2FtNnw9lAc4s%2FdC7gpUYSfNlDV1TxtI5RZP5FOm1TAfJnD&X-Amz-Signature=af180b2eab69e69b43799ef54fa9ddf4cde90586d24c1367bdda4b036869c7e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLYNREN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEqq%2FtsMf%2F4BJm9E9PHvzKDBnMMn7ZPAx1QNVwda1iAAiA6lGlCGadCSCo4Ut798N6tC6MxMxyjdBRFodn8oFvlOir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMlf03RfodYzCMU3NDKtwDlEORF8RRk6j8OvAaLeednJSuuTLBsAYjyrBIwMGiYX6ck1i24YL4uwJAEalw0WkeJ6mmpYT5VmJgnFmBAiHVfEnwbQwB9h8skKQcu9wmGrcRjg9bp8yZytZlelGMa1GDgWcTTysV51dtE%2BWijGNiMx%2F8ExDKSPxOo5C52E%2F7V6djm7yS9JnmowEMmPwNdgSglovaYcV0ROc%2FXZ3UIx2nAihCFrdOA1eReKMXuwHPVrSniT0%2B0rA5P3tWoeXZeBFW20s3XZxma%2F83DLkO14tqZz%2BbkTmDo54PgIht4euveedfOFbon3Bl8S7TNVTrSeIb5YmWCjPqx030LyFIYXTMfv%2F3B6czGiwRH59W3VEdV8L2kxvXBlsxcPNKviZej8mLeQi%2Fh%2BSqu5QDNwPHwhcIMdl0jCZbh9wNcTnxPLhCW0G347hxO9H9enAfRnK3Kb04erZLbgchIekUTucUtTXzTCQTR4MHhXltAndqpjn%2F5SJC%2Fava3Rma5btqsnCmn3XZK5w%2B1WSWanDM%2F3E4WeuDSQyoZhHV1VmTsCsmajKAKKNEd8Pv5%2BdnL2HNy8eBikq1xeB5kWH9ogAQidKaNq1qLj6cbK0x01PbljjD8XhYkEwVc6yiqDoIW95nQDQwgfDCvwY6pgGC7MsnFLobt6OG4p7TJdAIJraYyYYj8u3jqAN3es9kUS7o3XbKOFnTtzT%2BrWX6hxx9a89Y%2BIQWOUZk03dopHra3UYW%2FC4dzY%2FdxekKj%2Ft7qpFEcz8u9CT9KWf9juesQHf8VHoqt%2BtQdsqYDOS9xeiWRg9nBOIJ1w99QA2lTVWCYttBBek%2FtNnw9lAc4s%2FdC7gpUYSfNlDV1TxtI5RZP5FOm1TAfJnD&X-Amz-Signature=6aeefb694de512f711ee5b3c36521fa32f1484a0bfece58f6d33ac542e635389&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLYNREN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEqq%2FtsMf%2F4BJm9E9PHvzKDBnMMn7ZPAx1QNVwda1iAAiA6lGlCGadCSCo4Ut798N6tC6MxMxyjdBRFodn8oFvlOir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMlf03RfodYzCMU3NDKtwDlEORF8RRk6j8OvAaLeednJSuuTLBsAYjyrBIwMGiYX6ck1i24YL4uwJAEalw0WkeJ6mmpYT5VmJgnFmBAiHVfEnwbQwB9h8skKQcu9wmGrcRjg9bp8yZytZlelGMa1GDgWcTTysV51dtE%2BWijGNiMx%2F8ExDKSPxOo5C52E%2F7V6djm7yS9JnmowEMmPwNdgSglovaYcV0ROc%2FXZ3UIx2nAihCFrdOA1eReKMXuwHPVrSniT0%2B0rA5P3tWoeXZeBFW20s3XZxma%2F83DLkO14tqZz%2BbkTmDo54PgIht4euveedfOFbon3Bl8S7TNVTrSeIb5YmWCjPqx030LyFIYXTMfv%2F3B6czGiwRH59W3VEdV8L2kxvXBlsxcPNKviZej8mLeQi%2Fh%2BSqu5QDNwPHwhcIMdl0jCZbh9wNcTnxPLhCW0G347hxO9H9enAfRnK3Kb04erZLbgchIekUTucUtTXzTCQTR4MHhXltAndqpjn%2F5SJC%2Fava3Rma5btqsnCmn3XZK5w%2B1WSWanDM%2F3E4WeuDSQyoZhHV1VmTsCsmajKAKKNEd8Pv5%2BdnL2HNy8eBikq1xeB5kWH9ogAQidKaNq1qLj6cbK0x01PbljjD8XhYkEwVc6yiqDoIW95nQDQwgfDCvwY6pgGC7MsnFLobt6OG4p7TJdAIJraYyYYj8u3jqAN3es9kUS7o3XbKOFnTtzT%2BrWX6hxx9a89Y%2BIQWOUZk03dopHra3UYW%2FC4dzY%2FdxekKj%2Ft7qpFEcz8u9CT9KWf9juesQHf8VHoqt%2BtQdsqYDOS9xeiWRg9nBOIJ1w99QA2lTVWCYttBBek%2FtNnw9lAc4s%2FdC7gpUYSfNlDV1TxtI5RZP5FOm1TAfJnD&X-Amz-Signature=7688c1a16c44a8ddc4ffc2201da52b880568b343d6d21bdee97c7cfb68b686c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
