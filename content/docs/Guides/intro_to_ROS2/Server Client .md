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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHG3WCFC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxkBne4kGUoBVFFkEcUsPpOJSEI7u%2F9EPSpDNMduQq2AiAgKNG478bbnUTGaSWjX1uDTZF2tUmX25PkIfuzFcHSfCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM%2FHivk%2BgmYtlS8LX2KtwDriGbU2ubggAzlj1km7tY6TANj460ZOnlKQkvzEK%2B4XnwPZLQID%2BP1OG1AM14seQTXSmmBrbgrt0dl3zHVBkPk9cwui%2Fy8WJDAdQVQdAhBCJEXiGh6%2BQaHa1U1RHUmToapoU9Y%2Fl%2Bw%2BP7a9tzt8y73XphfdCq3bMUp5H9XD%2F8rEjmMBc1igOyH1sovyrUhpvtsjkcfLTo5s3z64DNaLPffeOQpZ%2BPa5wNbatLKPl39xT%2BSsbhK3w1xkcUxi917wW%2BAMe3qmSnw59xeA5lfgDtJbd1iHt%2BZUsOgJr7x5IZ1%2BbMGZu8I0COoPMTj3t4b2Lma1YT3%2BHlP3e8E8JquPv0pPxbcaTR1k44KcH%2FbM972zNAHjLECC5frlKv%2ByX%2FV4zgdn41cRDo%2FvMY0a5UK400FECFFxzC1j4iHEbX6nNW5%2BkjFZ6OGi5pzOH33lmNC3FXvRcZZKjyfAL9n9M3o15e65UZlOIl14EWVe2NN3cLBF0o%2FV5LFvzjN%2BhEj9%2BqM0zt%2Fay5P9Z9iJeDKUIVA1syKr5biSnq14wNX68CN8vlOpxq81C86ucyjEO5RG7YCVG56UCyMVtEZnY37Gi70gdCL0j24qU1TaQfYjeOrHgU2Nz%2FwjQ9y3bY4gvgncwwl5bYwQY6pgHBj8IweV9HXj0DPEkOSPcOyMdSZ62mEuvNFfaCZxBndJu7skBWK4ZmwK7aGjGA8%2B5KlB7ys9KG%2F9ecHS9N90oUh1Ikv3oCne7FxCqnOeyvBFSw0OOlpE%2FoA7XHflrXcOihJVwcz8kH8aP6SoBCZmu0UFJe2JIK15ZVOLTNf2%2BYFPWSUkvVnyTsEWOiorrFw4kg2EeWwn21zjcFG23CLzxGLjCFw21O&X-Amz-Signature=007d9c59694a07dc2db90e377f97da7308de9c6656026de7b1f72fb968e17f75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHG3WCFC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxkBne4kGUoBVFFkEcUsPpOJSEI7u%2F9EPSpDNMduQq2AiAgKNG478bbnUTGaSWjX1uDTZF2tUmX25PkIfuzFcHSfCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM%2FHivk%2BgmYtlS8LX2KtwDriGbU2ubggAzlj1km7tY6TANj460ZOnlKQkvzEK%2B4XnwPZLQID%2BP1OG1AM14seQTXSmmBrbgrt0dl3zHVBkPk9cwui%2Fy8WJDAdQVQdAhBCJEXiGh6%2BQaHa1U1RHUmToapoU9Y%2Fl%2Bw%2BP7a9tzt8y73XphfdCq3bMUp5H9XD%2F8rEjmMBc1igOyH1sovyrUhpvtsjkcfLTo5s3z64DNaLPffeOQpZ%2BPa5wNbatLKPl39xT%2BSsbhK3w1xkcUxi917wW%2BAMe3qmSnw59xeA5lfgDtJbd1iHt%2BZUsOgJr7x5IZ1%2BbMGZu8I0COoPMTj3t4b2Lma1YT3%2BHlP3e8E8JquPv0pPxbcaTR1k44KcH%2FbM972zNAHjLECC5frlKv%2ByX%2FV4zgdn41cRDo%2FvMY0a5UK400FECFFxzC1j4iHEbX6nNW5%2BkjFZ6OGi5pzOH33lmNC3FXvRcZZKjyfAL9n9M3o15e65UZlOIl14EWVe2NN3cLBF0o%2FV5LFvzjN%2BhEj9%2BqM0zt%2Fay5P9Z9iJeDKUIVA1syKr5biSnq14wNX68CN8vlOpxq81C86ucyjEO5RG7YCVG56UCyMVtEZnY37Gi70gdCL0j24qU1TaQfYjeOrHgU2Nz%2FwjQ9y3bY4gvgncwwl5bYwQY6pgHBj8IweV9HXj0DPEkOSPcOyMdSZ62mEuvNFfaCZxBndJu7skBWK4ZmwK7aGjGA8%2B5KlB7ys9KG%2F9ecHS9N90oUh1Ikv3oCne7FxCqnOeyvBFSw0OOlpE%2FoA7XHflrXcOihJVwcz8kH8aP6SoBCZmu0UFJe2JIK15ZVOLTNf2%2BYFPWSUkvVnyTsEWOiorrFw4kg2EeWwn21zjcFG23CLzxGLjCFw21O&X-Amz-Signature=7726c470bc309542c0a61ff907497cf0da074af55cfaad94a90ef94dd4139c22&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHG3WCFC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxkBne4kGUoBVFFkEcUsPpOJSEI7u%2F9EPSpDNMduQq2AiAgKNG478bbnUTGaSWjX1uDTZF2tUmX25PkIfuzFcHSfCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM%2FHivk%2BgmYtlS8LX2KtwDriGbU2ubggAzlj1km7tY6TANj460ZOnlKQkvzEK%2B4XnwPZLQID%2BP1OG1AM14seQTXSmmBrbgrt0dl3zHVBkPk9cwui%2Fy8WJDAdQVQdAhBCJEXiGh6%2BQaHa1U1RHUmToapoU9Y%2Fl%2Bw%2BP7a9tzt8y73XphfdCq3bMUp5H9XD%2F8rEjmMBc1igOyH1sovyrUhpvtsjkcfLTo5s3z64DNaLPffeOQpZ%2BPa5wNbatLKPl39xT%2BSsbhK3w1xkcUxi917wW%2BAMe3qmSnw59xeA5lfgDtJbd1iHt%2BZUsOgJr7x5IZ1%2BbMGZu8I0COoPMTj3t4b2Lma1YT3%2BHlP3e8E8JquPv0pPxbcaTR1k44KcH%2FbM972zNAHjLECC5frlKv%2ByX%2FV4zgdn41cRDo%2FvMY0a5UK400FECFFxzC1j4iHEbX6nNW5%2BkjFZ6OGi5pzOH33lmNC3FXvRcZZKjyfAL9n9M3o15e65UZlOIl14EWVe2NN3cLBF0o%2FV5LFvzjN%2BhEj9%2BqM0zt%2Fay5P9Z9iJeDKUIVA1syKr5biSnq14wNX68CN8vlOpxq81C86ucyjEO5RG7YCVG56UCyMVtEZnY37Gi70gdCL0j24qU1TaQfYjeOrHgU2Nz%2FwjQ9y3bY4gvgncwwl5bYwQY6pgHBj8IweV9HXj0DPEkOSPcOyMdSZ62mEuvNFfaCZxBndJu7skBWK4ZmwK7aGjGA8%2B5KlB7ys9KG%2F9ecHS9N90oUh1Ikv3oCne7FxCqnOeyvBFSw0OOlpE%2FoA7XHflrXcOihJVwcz8kH8aP6SoBCZmu0UFJe2JIK15ZVOLTNf2%2BYFPWSUkvVnyTsEWOiorrFw4kg2EeWwn21zjcFG23CLzxGLjCFw21O&X-Amz-Signature=a6badcb7d40c845231bf00edc3cf666a516e3ac338dff43364e9779ab34d2840&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHG3WCFC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxkBne4kGUoBVFFkEcUsPpOJSEI7u%2F9EPSpDNMduQq2AiAgKNG478bbnUTGaSWjX1uDTZF2tUmX25PkIfuzFcHSfCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM%2FHivk%2BgmYtlS8LX2KtwDriGbU2ubggAzlj1km7tY6TANj460ZOnlKQkvzEK%2B4XnwPZLQID%2BP1OG1AM14seQTXSmmBrbgrt0dl3zHVBkPk9cwui%2Fy8WJDAdQVQdAhBCJEXiGh6%2BQaHa1U1RHUmToapoU9Y%2Fl%2Bw%2BP7a9tzt8y73XphfdCq3bMUp5H9XD%2F8rEjmMBc1igOyH1sovyrUhpvtsjkcfLTo5s3z64DNaLPffeOQpZ%2BPa5wNbatLKPl39xT%2BSsbhK3w1xkcUxi917wW%2BAMe3qmSnw59xeA5lfgDtJbd1iHt%2BZUsOgJr7x5IZ1%2BbMGZu8I0COoPMTj3t4b2Lma1YT3%2BHlP3e8E8JquPv0pPxbcaTR1k44KcH%2FbM972zNAHjLECC5frlKv%2ByX%2FV4zgdn41cRDo%2FvMY0a5UK400FECFFxzC1j4iHEbX6nNW5%2BkjFZ6OGi5pzOH33lmNC3FXvRcZZKjyfAL9n9M3o15e65UZlOIl14EWVe2NN3cLBF0o%2FV5LFvzjN%2BhEj9%2BqM0zt%2Fay5P9Z9iJeDKUIVA1syKr5biSnq14wNX68CN8vlOpxq81C86ucyjEO5RG7YCVG56UCyMVtEZnY37Gi70gdCL0j24qU1TaQfYjeOrHgU2Nz%2FwjQ9y3bY4gvgncwwl5bYwQY6pgHBj8IweV9HXj0DPEkOSPcOyMdSZ62mEuvNFfaCZxBndJu7skBWK4ZmwK7aGjGA8%2B5KlB7ys9KG%2F9ecHS9N90oUh1Ikv3oCne7FxCqnOeyvBFSw0OOlpE%2FoA7XHflrXcOihJVwcz8kH8aP6SoBCZmu0UFJe2JIK15ZVOLTNf2%2BYFPWSUkvVnyTsEWOiorrFw4kg2EeWwn21zjcFG23CLzxGLjCFw21O&X-Amz-Signature=9cf04f8d5d317919448fcc0d7bd1477d026ca5a3b7059663752f10b37879960c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHG3WCFC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxkBne4kGUoBVFFkEcUsPpOJSEI7u%2F9EPSpDNMduQq2AiAgKNG478bbnUTGaSWjX1uDTZF2tUmX25PkIfuzFcHSfCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM%2FHivk%2BgmYtlS8LX2KtwDriGbU2ubggAzlj1km7tY6TANj460ZOnlKQkvzEK%2B4XnwPZLQID%2BP1OG1AM14seQTXSmmBrbgrt0dl3zHVBkPk9cwui%2Fy8WJDAdQVQdAhBCJEXiGh6%2BQaHa1U1RHUmToapoU9Y%2Fl%2Bw%2BP7a9tzt8y73XphfdCq3bMUp5H9XD%2F8rEjmMBc1igOyH1sovyrUhpvtsjkcfLTo5s3z64DNaLPffeOQpZ%2BPa5wNbatLKPl39xT%2BSsbhK3w1xkcUxi917wW%2BAMe3qmSnw59xeA5lfgDtJbd1iHt%2BZUsOgJr7x5IZ1%2BbMGZu8I0COoPMTj3t4b2Lma1YT3%2BHlP3e8E8JquPv0pPxbcaTR1k44KcH%2FbM972zNAHjLECC5frlKv%2ByX%2FV4zgdn41cRDo%2FvMY0a5UK400FECFFxzC1j4iHEbX6nNW5%2BkjFZ6OGi5pzOH33lmNC3FXvRcZZKjyfAL9n9M3o15e65UZlOIl14EWVe2NN3cLBF0o%2FV5LFvzjN%2BhEj9%2BqM0zt%2Fay5P9Z9iJeDKUIVA1syKr5biSnq14wNX68CN8vlOpxq81C86ucyjEO5RG7YCVG56UCyMVtEZnY37Gi70gdCL0j24qU1TaQfYjeOrHgU2Nz%2FwjQ9y3bY4gvgncwwl5bYwQY6pgHBj8IweV9HXj0DPEkOSPcOyMdSZ62mEuvNFfaCZxBndJu7skBWK4ZmwK7aGjGA8%2B5KlB7ys9KG%2F9ecHS9N90oUh1Ikv3oCne7FxCqnOeyvBFSw0OOlpE%2FoA7XHflrXcOihJVwcz8kH8aP6SoBCZmu0UFJe2JIK15ZVOLTNf2%2BYFPWSUkvVnyTsEWOiorrFw4kg2EeWwn21zjcFG23CLzxGLjCFw21O&X-Amz-Signature=a95e6dc7cd68ed5506205ab7f83f5e48e210392f360a565ce4fcde526649ca24&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
