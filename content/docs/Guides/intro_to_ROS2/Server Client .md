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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=f995233eb6d4768a94019897a7b3a8353a08c362e57c25d0fed67675b10eb4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=49b690928c25dce91aea728166a8a1141904b57efa4255896d645dca9dc1d419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=0245afaf58f13b52d2f09603143ca5b891b31b69097b1db98e62fe8023f411fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=afc834d69097f7caf93ab745b552854bf8658c1d7ee9fbe76f79772c4a7b0430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=cc6ac378e022ec85779cbaa7d3c4852bacb238da0915ba00aa494ebdbcc449f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
