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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMBVXTG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCqKUUAbIfmGRmTK%2B29ZGEyNYNMPIl8I%2BBWpCP7txIu5gIgVATWrIz2TYv6lOMSl1IWx3cZDEMqcra%2F36VjnmJ%2F9pYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABwGmkWYZ0r8%2BEspircA8uhQwgEH9H1ITWPHSSvw%2BO9RiBwmmPyAnJ1muuijmTSLnRuAF6IRzgnBsCQOcrcbAEoPtUBnadKOK7Gi7nNoiNMwh%2FN2iv2C49opyta9H5iJYOZfUA7qAaRTxD6pkkIX64SntksDcs5m2Ql%2BLD9Rfb3znf%2FkON8KSp8SvHllui%2BfJwgQvK%2BIksXJNJKsKTVVzVZz7BU1tuwd9SWtxQjQZXI91UW37yfBwrWrmrumGFL6SiAC8eLb1MG94DNHqLFkvA8xlY4UaOIUGdKfLoGZ9rc1OLamrSNnjnAgi66DZ6oSgYXoTZv%2B2aW2ItuLB62GreCGy7Ka1gyCjW1S62XGhMKkj%2FEzjp6Wg5gDu%2Fsyz8%2BZfRZLP8Ul9dVDF6AyMHqLEBXJ42pIjkROl630hZ68gBqEbOK%2FFWQNBmja7elV1p0Zn0Coxn6rcXe%2FbeiVeLKeP9bx0Spiy8%2FRuc%2FYuOrQh%2FDKUOcEz59sWAbl24%2FDDIr%2FLfBveR7qjil10dVek8xg51UB5%2BhrP2e5fhqssr55Wt9F63ebNgvyoxYF%2FnaHk%2BaryRvLyKlnAMYvjkn199Q5N5qTViLfPrXySKAaBf4rkIabUNG4Gcce4M1iWp44KCdQJ44hSAGYy5%2B26%2BvMKfskMEGOqUBeE0EGbo1VgwbuoTdRJAJO55CT2UHZe2fhhleMzRj05E9PLUyhShG7v0BR2kJErPVdgM8ogW0lx90xRVyWtStxf2THp14skVEzg2IbSFrFoeFVMP%2BF24IZBtRRWQFEGF9zzjdxudWTYPqQgm1ilEB56liaFineJmv2HgVY%2BzhM4w%2FHwCC%2B%2FYRozzbbYX2dB6LiY2ByTmuFjamQIn9u4MWXbOVZyXM&X-Amz-Signature=b11b2132a6bf0a4ec8e00c3ef90b5bc82c3355c82db2d518d07532214ecab8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMBVXTG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCqKUUAbIfmGRmTK%2B29ZGEyNYNMPIl8I%2BBWpCP7txIu5gIgVATWrIz2TYv6lOMSl1IWx3cZDEMqcra%2F36VjnmJ%2F9pYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABwGmkWYZ0r8%2BEspircA8uhQwgEH9H1ITWPHSSvw%2BO9RiBwmmPyAnJ1muuijmTSLnRuAF6IRzgnBsCQOcrcbAEoPtUBnadKOK7Gi7nNoiNMwh%2FN2iv2C49opyta9H5iJYOZfUA7qAaRTxD6pkkIX64SntksDcs5m2Ql%2BLD9Rfb3znf%2FkON8KSp8SvHllui%2BfJwgQvK%2BIksXJNJKsKTVVzVZz7BU1tuwd9SWtxQjQZXI91UW37yfBwrWrmrumGFL6SiAC8eLb1MG94DNHqLFkvA8xlY4UaOIUGdKfLoGZ9rc1OLamrSNnjnAgi66DZ6oSgYXoTZv%2B2aW2ItuLB62GreCGy7Ka1gyCjW1S62XGhMKkj%2FEzjp6Wg5gDu%2Fsyz8%2BZfRZLP8Ul9dVDF6AyMHqLEBXJ42pIjkROl630hZ68gBqEbOK%2FFWQNBmja7elV1p0Zn0Coxn6rcXe%2FbeiVeLKeP9bx0Spiy8%2FRuc%2FYuOrQh%2FDKUOcEz59sWAbl24%2FDDIr%2FLfBveR7qjil10dVek8xg51UB5%2BhrP2e5fhqssr55Wt9F63ebNgvyoxYF%2FnaHk%2BaryRvLyKlnAMYvjkn199Q5N5qTViLfPrXySKAaBf4rkIabUNG4Gcce4M1iWp44KCdQJ44hSAGYy5%2B26%2BvMKfskMEGOqUBeE0EGbo1VgwbuoTdRJAJO55CT2UHZe2fhhleMzRj05E9PLUyhShG7v0BR2kJErPVdgM8ogW0lx90xRVyWtStxf2THp14skVEzg2IbSFrFoeFVMP%2BF24IZBtRRWQFEGF9zzjdxudWTYPqQgm1ilEB56liaFineJmv2HgVY%2BzhM4w%2FHwCC%2B%2FYRozzbbYX2dB6LiY2ByTmuFjamQIn9u4MWXbOVZyXM&X-Amz-Signature=daa1ee509f702aa2be13dbc60dac5485fb27ef399bab87599cdbcd39757f0a11&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMBVXTG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCqKUUAbIfmGRmTK%2B29ZGEyNYNMPIl8I%2BBWpCP7txIu5gIgVATWrIz2TYv6lOMSl1IWx3cZDEMqcra%2F36VjnmJ%2F9pYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABwGmkWYZ0r8%2BEspircA8uhQwgEH9H1ITWPHSSvw%2BO9RiBwmmPyAnJ1muuijmTSLnRuAF6IRzgnBsCQOcrcbAEoPtUBnadKOK7Gi7nNoiNMwh%2FN2iv2C49opyta9H5iJYOZfUA7qAaRTxD6pkkIX64SntksDcs5m2Ql%2BLD9Rfb3znf%2FkON8KSp8SvHllui%2BfJwgQvK%2BIksXJNJKsKTVVzVZz7BU1tuwd9SWtxQjQZXI91UW37yfBwrWrmrumGFL6SiAC8eLb1MG94DNHqLFkvA8xlY4UaOIUGdKfLoGZ9rc1OLamrSNnjnAgi66DZ6oSgYXoTZv%2B2aW2ItuLB62GreCGy7Ka1gyCjW1S62XGhMKkj%2FEzjp6Wg5gDu%2Fsyz8%2BZfRZLP8Ul9dVDF6AyMHqLEBXJ42pIjkROl630hZ68gBqEbOK%2FFWQNBmja7elV1p0Zn0Coxn6rcXe%2FbeiVeLKeP9bx0Spiy8%2FRuc%2FYuOrQh%2FDKUOcEz59sWAbl24%2FDDIr%2FLfBveR7qjil10dVek8xg51UB5%2BhrP2e5fhqssr55Wt9F63ebNgvyoxYF%2FnaHk%2BaryRvLyKlnAMYvjkn199Q5N5qTViLfPrXySKAaBf4rkIabUNG4Gcce4M1iWp44KCdQJ44hSAGYy5%2B26%2BvMKfskMEGOqUBeE0EGbo1VgwbuoTdRJAJO55CT2UHZe2fhhleMzRj05E9PLUyhShG7v0BR2kJErPVdgM8ogW0lx90xRVyWtStxf2THp14skVEzg2IbSFrFoeFVMP%2BF24IZBtRRWQFEGF9zzjdxudWTYPqQgm1ilEB56liaFineJmv2HgVY%2BzhM4w%2FHwCC%2B%2FYRozzbbYX2dB6LiY2ByTmuFjamQIn9u4MWXbOVZyXM&X-Amz-Signature=6bfa3a86ef556f4a9589f3a1cf3395ebe6ec1500561301a629113a505016f674&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMBVXTG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCqKUUAbIfmGRmTK%2B29ZGEyNYNMPIl8I%2BBWpCP7txIu5gIgVATWrIz2TYv6lOMSl1IWx3cZDEMqcra%2F36VjnmJ%2F9pYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABwGmkWYZ0r8%2BEspircA8uhQwgEH9H1ITWPHSSvw%2BO9RiBwmmPyAnJ1muuijmTSLnRuAF6IRzgnBsCQOcrcbAEoPtUBnadKOK7Gi7nNoiNMwh%2FN2iv2C49opyta9H5iJYOZfUA7qAaRTxD6pkkIX64SntksDcs5m2Ql%2BLD9Rfb3znf%2FkON8KSp8SvHllui%2BfJwgQvK%2BIksXJNJKsKTVVzVZz7BU1tuwd9SWtxQjQZXI91UW37yfBwrWrmrumGFL6SiAC8eLb1MG94DNHqLFkvA8xlY4UaOIUGdKfLoGZ9rc1OLamrSNnjnAgi66DZ6oSgYXoTZv%2B2aW2ItuLB62GreCGy7Ka1gyCjW1S62XGhMKkj%2FEzjp6Wg5gDu%2Fsyz8%2BZfRZLP8Ul9dVDF6AyMHqLEBXJ42pIjkROl630hZ68gBqEbOK%2FFWQNBmja7elV1p0Zn0Coxn6rcXe%2FbeiVeLKeP9bx0Spiy8%2FRuc%2FYuOrQh%2FDKUOcEz59sWAbl24%2FDDIr%2FLfBveR7qjil10dVek8xg51UB5%2BhrP2e5fhqssr55Wt9F63ebNgvyoxYF%2FnaHk%2BaryRvLyKlnAMYvjkn199Q5N5qTViLfPrXySKAaBf4rkIabUNG4Gcce4M1iWp44KCdQJ44hSAGYy5%2B26%2BvMKfskMEGOqUBeE0EGbo1VgwbuoTdRJAJO55CT2UHZe2fhhleMzRj05E9PLUyhShG7v0BR2kJErPVdgM8ogW0lx90xRVyWtStxf2THp14skVEzg2IbSFrFoeFVMP%2BF24IZBtRRWQFEGF9zzjdxudWTYPqQgm1ilEB56liaFineJmv2HgVY%2BzhM4w%2FHwCC%2B%2FYRozzbbYX2dB6LiY2ByTmuFjamQIn9u4MWXbOVZyXM&X-Amz-Signature=b9f02457bdccb48b5ca7b6b89debf18d76d0fbc2f4a639a5be72efdfd2ff046f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMBVXTG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCqKUUAbIfmGRmTK%2B29ZGEyNYNMPIl8I%2BBWpCP7txIu5gIgVATWrIz2TYv6lOMSl1IWx3cZDEMqcra%2F36VjnmJ%2F9pYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABwGmkWYZ0r8%2BEspircA8uhQwgEH9H1ITWPHSSvw%2BO9RiBwmmPyAnJ1muuijmTSLnRuAF6IRzgnBsCQOcrcbAEoPtUBnadKOK7Gi7nNoiNMwh%2FN2iv2C49opyta9H5iJYOZfUA7qAaRTxD6pkkIX64SntksDcs5m2Ql%2BLD9Rfb3znf%2FkON8KSp8SvHllui%2BfJwgQvK%2BIksXJNJKsKTVVzVZz7BU1tuwd9SWtxQjQZXI91UW37yfBwrWrmrumGFL6SiAC8eLb1MG94DNHqLFkvA8xlY4UaOIUGdKfLoGZ9rc1OLamrSNnjnAgi66DZ6oSgYXoTZv%2B2aW2ItuLB62GreCGy7Ka1gyCjW1S62XGhMKkj%2FEzjp6Wg5gDu%2Fsyz8%2BZfRZLP8Ul9dVDF6AyMHqLEBXJ42pIjkROl630hZ68gBqEbOK%2FFWQNBmja7elV1p0Zn0Coxn6rcXe%2FbeiVeLKeP9bx0Spiy8%2FRuc%2FYuOrQh%2FDKUOcEz59sWAbl24%2FDDIr%2FLfBveR7qjil10dVek8xg51UB5%2BhrP2e5fhqssr55Wt9F63ebNgvyoxYF%2FnaHk%2BaryRvLyKlnAMYvjkn199Q5N5qTViLfPrXySKAaBf4rkIabUNG4Gcce4M1iWp44KCdQJ44hSAGYy5%2B26%2BvMKfskMEGOqUBeE0EGbo1VgwbuoTdRJAJO55CT2UHZe2fhhleMzRj05E9PLUyhShG7v0BR2kJErPVdgM8ogW0lx90xRVyWtStxf2THp14skVEzg2IbSFrFoeFVMP%2BF24IZBtRRWQFEGF9zzjdxudWTYPqQgm1ilEB56liaFineJmv2HgVY%2BzhM4w%2FHwCC%2B%2FYRozzbbYX2dB6LiY2ByTmuFjamQIn9u4MWXbOVZyXM&X-Amz-Signature=def2c26b7d971c1d7667c1c937a8720bd5b07e88c36c0ecdbfd1df5b5c73bf3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
