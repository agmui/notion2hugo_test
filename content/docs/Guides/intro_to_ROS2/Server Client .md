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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWZ5HSR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtEm9uKI17ajn9xVFTk5gUNN35IYmNRth4voUEEJkCdQIgKEXB7G83wO6Fuk46KVGb%2FLVZjkgjL5%2BYHWKrc19BafwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEPVtGuE%2FaVlKU17ircA9XDORYPgc%2BiJgf%2FLllYRnGURDv7qCe8Z4ZV89JJJ1zZMdfs1Fs0dZEwqdBTENzqqmv4HKylNiNcp9oV0xJaE2qhskoWi3WVRozWwEbp05y815RJh9pAkywuqDoGdbNG7SjKPh%2BrYETBrc8mRVIiaXBL7KPeq9BIlqFt7t3x12vN%2BXFSskYiEiWNoDiC6D3Ns8si5xt8w0ar2bh5UC63jhoY4YiweVWvZJ293h3FGfoYy61AeDqi0pLvrO9B0cH4b0d2IZXtuAeX32EgGbWDpJeSNOF5kVPMgC7htllk%2F6OFOyLU3gvT5dpCso52ahIizhJ3xfGj0KRGUz6KLQGJglli1trX2s66nWuGbFTvtXbVNeXwXyxkxGdOrc6NZCChcxwaqUD7jssG66lBcRntmFMWiFtSky28kPfEg%2FwBhTVseUPDRhjPobECw0yB1dpwlpcCmwOC4qc4%2BEUWhjWkcoGKm2N5QC6kRtWopE%2BqW8vBwhD8KOeXDe2NDhPYWWBIZfpaq%2B2Doh2%2FO05bMWLP6ixnJzCNYbS6G69ghi9667MDpYEkNuQB8b3TnECIa7FuiBDm7AHBLXUtqJqls%2BFSzfQb6eZ4JWAsTryS2oDv38MjCI1%2BjIqpeDqj6ABFMKKi0sIGOqUBfhDZBx%2Br9%2BfLP2PUz%2BdFPd%2FaA6F6%2BU90OM6dW4osxg8rYetW52GyU0IwOQpWV6jD8jEPtWoqagFEOu%2FMgEvYpO5aerb7KS2pe5PvSAJ2U5P6%2FHlNnqMx0U0gJOxP%2FztntvvqVlSjs8LyCKgn%2BCBP5gVpPXjGzni5TK0af%2F2kLgUhT4vjhQhSgsArpOxpl5bOsyxwwNMwxvfiBh6Y%2BG1sUMqe%2BPgb&X-Amz-Signature=4f2751a356ab21d6e156273f7024fcd5fcc4365a87ec1b1af2212656df6efcb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWZ5HSR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtEm9uKI17ajn9xVFTk5gUNN35IYmNRth4voUEEJkCdQIgKEXB7G83wO6Fuk46KVGb%2FLVZjkgjL5%2BYHWKrc19BafwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEPVtGuE%2FaVlKU17ircA9XDORYPgc%2BiJgf%2FLllYRnGURDv7qCe8Z4ZV89JJJ1zZMdfs1Fs0dZEwqdBTENzqqmv4HKylNiNcp9oV0xJaE2qhskoWi3WVRozWwEbp05y815RJh9pAkywuqDoGdbNG7SjKPh%2BrYETBrc8mRVIiaXBL7KPeq9BIlqFt7t3x12vN%2BXFSskYiEiWNoDiC6D3Ns8si5xt8w0ar2bh5UC63jhoY4YiweVWvZJ293h3FGfoYy61AeDqi0pLvrO9B0cH4b0d2IZXtuAeX32EgGbWDpJeSNOF5kVPMgC7htllk%2F6OFOyLU3gvT5dpCso52ahIizhJ3xfGj0KRGUz6KLQGJglli1trX2s66nWuGbFTvtXbVNeXwXyxkxGdOrc6NZCChcxwaqUD7jssG66lBcRntmFMWiFtSky28kPfEg%2FwBhTVseUPDRhjPobECw0yB1dpwlpcCmwOC4qc4%2BEUWhjWkcoGKm2N5QC6kRtWopE%2BqW8vBwhD8KOeXDe2NDhPYWWBIZfpaq%2B2Doh2%2FO05bMWLP6ixnJzCNYbS6G69ghi9667MDpYEkNuQB8b3TnECIa7FuiBDm7AHBLXUtqJqls%2BFSzfQb6eZ4JWAsTryS2oDv38MjCI1%2BjIqpeDqj6ABFMKKi0sIGOqUBfhDZBx%2Br9%2BfLP2PUz%2BdFPd%2FaA6F6%2BU90OM6dW4osxg8rYetW52GyU0IwOQpWV6jD8jEPtWoqagFEOu%2FMgEvYpO5aerb7KS2pe5PvSAJ2U5P6%2FHlNnqMx0U0gJOxP%2FztntvvqVlSjs8LyCKgn%2BCBP5gVpPXjGzni5TK0af%2F2kLgUhT4vjhQhSgsArpOxpl5bOsyxwwNMwxvfiBh6Y%2BG1sUMqe%2BPgb&X-Amz-Signature=5670237dc3f7a83f848f74307d933082b979ac1905499ed0e5a6d3b500d5df38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWZ5HSR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtEm9uKI17ajn9xVFTk5gUNN35IYmNRth4voUEEJkCdQIgKEXB7G83wO6Fuk46KVGb%2FLVZjkgjL5%2BYHWKrc19BafwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEPVtGuE%2FaVlKU17ircA9XDORYPgc%2BiJgf%2FLllYRnGURDv7qCe8Z4ZV89JJJ1zZMdfs1Fs0dZEwqdBTENzqqmv4HKylNiNcp9oV0xJaE2qhskoWi3WVRozWwEbp05y815RJh9pAkywuqDoGdbNG7SjKPh%2BrYETBrc8mRVIiaXBL7KPeq9BIlqFt7t3x12vN%2BXFSskYiEiWNoDiC6D3Ns8si5xt8w0ar2bh5UC63jhoY4YiweVWvZJ293h3FGfoYy61AeDqi0pLvrO9B0cH4b0d2IZXtuAeX32EgGbWDpJeSNOF5kVPMgC7htllk%2F6OFOyLU3gvT5dpCso52ahIizhJ3xfGj0KRGUz6KLQGJglli1trX2s66nWuGbFTvtXbVNeXwXyxkxGdOrc6NZCChcxwaqUD7jssG66lBcRntmFMWiFtSky28kPfEg%2FwBhTVseUPDRhjPobECw0yB1dpwlpcCmwOC4qc4%2BEUWhjWkcoGKm2N5QC6kRtWopE%2BqW8vBwhD8KOeXDe2NDhPYWWBIZfpaq%2B2Doh2%2FO05bMWLP6ixnJzCNYbS6G69ghi9667MDpYEkNuQB8b3TnECIa7FuiBDm7AHBLXUtqJqls%2BFSzfQb6eZ4JWAsTryS2oDv38MjCI1%2BjIqpeDqj6ABFMKKi0sIGOqUBfhDZBx%2Br9%2BfLP2PUz%2BdFPd%2FaA6F6%2BU90OM6dW4osxg8rYetW52GyU0IwOQpWV6jD8jEPtWoqagFEOu%2FMgEvYpO5aerb7KS2pe5PvSAJ2U5P6%2FHlNnqMx0U0gJOxP%2FztntvvqVlSjs8LyCKgn%2BCBP5gVpPXjGzni5TK0af%2F2kLgUhT4vjhQhSgsArpOxpl5bOsyxwwNMwxvfiBh6Y%2BG1sUMqe%2BPgb&X-Amz-Signature=454d8d9c48333409426131de2e1c6f41bdf95f28b8086723390312abb9c00d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWZ5HSR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtEm9uKI17ajn9xVFTk5gUNN35IYmNRth4voUEEJkCdQIgKEXB7G83wO6Fuk46KVGb%2FLVZjkgjL5%2BYHWKrc19BafwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEPVtGuE%2FaVlKU17ircA9XDORYPgc%2BiJgf%2FLllYRnGURDv7qCe8Z4ZV89JJJ1zZMdfs1Fs0dZEwqdBTENzqqmv4HKylNiNcp9oV0xJaE2qhskoWi3WVRozWwEbp05y815RJh9pAkywuqDoGdbNG7SjKPh%2BrYETBrc8mRVIiaXBL7KPeq9BIlqFt7t3x12vN%2BXFSskYiEiWNoDiC6D3Ns8si5xt8w0ar2bh5UC63jhoY4YiweVWvZJ293h3FGfoYy61AeDqi0pLvrO9B0cH4b0d2IZXtuAeX32EgGbWDpJeSNOF5kVPMgC7htllk%2F6OFOyLU3gvT5dpCso52ahIizhJ3xfGj0KRGUz6KLQGJglli1trX2s66nWuGbFTvtXbVNeXwXyxkxGdOrc6NZCChcxwaqUD7jssG66lBcRntmFMWiFtSky28kPfEg%2FwBhTVseUPDRhjPobECw0yB1dpwlpcCmwOC4qc4%2BEUWhjWkcoGKm2N5QC6kRtWopE%2BqW8vBwhD8KOeXDe2NDhPYWWBIZfpaq%2B2Doh2%2FO05bMWLP6ixnJzCNYbS6G69ghi9667MDpYEkNuQB8b3TnECIa7FuiBDm7AHBLXUtqJqls%2BFSzfQb6eZ4JWAsTryS2oDv38MjCI1%2BjIqpeDqj6ABFMKKi0sIGOqUBfhDZBx%2Br9%2BfLP2PUz%2BdFPd%2FaA6F6%2BU90OM6dW4osxg8rYetW52GyU0IwOQpWV6jD8jEPtWoqagFEOu%2FMgEvYpO5aerb7KS2pe5PvSAJ2U5P6%2FHlNnqMx0U0gJOxP%2FztntvvqVlSjs8LyCKgn%2BCBP5gVpPXjGzni5TK0af%2F2kLgUhT4vjhQhSgsArpOxpl5bOsyxwwNMwxvfiBh6Y%2BG1sUMqe%2BPgb&X-Amz-Signature=14ed457dab1ae5cb575240df9a4dd9ec760a8957b4aa929e91118b409be70a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWZ5HSR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtEm9uKI17ajn9xVFTk5gUNN35IYmNRth4voUEEJkCdQIgKEXB7G83wO6Fuk46KVGb%2FLVZjkgjL5%2BYHWKrc19BafwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEPVtGuE%2FaVlKU17ircA9XDORYPgc%2BiJgf%2FLllYRnGURDv7qCe8Z4ZV89JJJ1zZMdfs1Fs0dZEwqdBTENzqqmv4HKylNiNcp9oV0xJaE2qhskoWi3WVRozWwEbp05y815RJh9pAkywuqDoGdbNG7SjKPh%2BrYETBrc8mRVIiaXBL7KPeq9BIlqFt7t3x12vN%2BXFSskYiEiWNoDiC6D3Ns8si5xt8w0ar2bh5UC63jhoY4YiweVWvZJ293h3FGfoYy61AeDqi0pLvrO9B0cH4b0d2IZXtuAeX32EgGbWDpJeSNOF5kVPMgC7htllk%2F6OFOyLU3gvT5dpCso52ahIizhJ3xfGj0KRGUz6KLQGJglli1trX2s66nWuGbFTvtXbVNeXwXyxkxGdOrc6NZCChcxwaqUD7jssG66lBcRntmFMWiFtSky28kPfEg%2FwBhTVseUPDRhjPobECw0yB1dpwlpcCmwOC4qc4%2BEUWhjWkcoGKm2N5QC6kRtWopE%2BqW8vBwhD8KOeXDe2NDhPYWWBIZfpaq%2B2Doh2%2FO05bMWLP6ixnJzCNYbS6G69ghi9667MDpYEkNuQB8b3TnECIa7FuiBDm7AHBLXUtqJqls%2BFSzfQb6eZ4JWAsTryS2oDv38MjCI1%2BjIqpeDqj6ABFMKKi0sIGOqUBfhDZBx%2Br9%2BfLP2PUz%2BdFPd%2FaA6F6%2BU90OM6dW4osxg8rYetW52GyU0IwOQpWV6jD8jEPtWoqagFEOu%2FMgEvYpO5aerb7KS2pe5PvSAJ2U5P6%2FHlNnqMx0U0gJOxP%2FztntvvqVlSjs8LyCKgn%2BCBP5gVpPXjGzni5TK0af%2F2kLgUhT4vjhQhSgsArpOxpl5bOsyxwwNMwxvfiBh6Y%2BG1sUMqe%2BPgb&X-Amz-Signature=e6f7213abbc16c54c178196122add69651a411244f5c662c471c6abb450ef78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
