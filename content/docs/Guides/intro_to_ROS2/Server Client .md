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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SOWKPW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCeUqXMmwAR8SAeEZ2QliDdh%2B8axyafJrPutuqJRTDHnwIhAN0pLzRNeM1yuLnivQ7lVOvDFDJ4t5ZAPrBllT6Sa7L8Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy15mLCV43w6hM1olEq3AP2dG6AfJOKff1TSv539mfFwhiHDAz6Exv1UVRAaTLbnLve9swd11uV%2FwRLyUZQ9TD%2BXnFRf7YzfQ0EOlxHIU2mApKfj1kuFp9aQjDV47FKE8Pb%2Bpe6nvLa4VjmGilWimDo4IfVrlrg6XD28IcQ4qLaAIoFiv3JjcuqIKbf%2F2PIK43RpwRZlqZHLAuI%2Fr%2Bnyk238Uv%2Fr8yLaKjztAUrXivFPVX%2BcEO423SGeitNRIGCK9YcT%2BwLtQsRkjhVEew9LNoS%2Fq%2BOiDSiekQkYvZ4SzELGngoqazl7UxsETTSOf3TpBitLK0fxukRNkaJZb%2FjQ8H0%2FrPdq%2FfJbXP0%2F11hqowmQpAyzjpatONhRujfC3ejjxi1ZQfe1w3XtBHt9van3x4wNXg6R5ceO1Y9GnPC1e39W4J1%2FLKKLBCIHAUJlETGolGIjsy6gA0syn9mxtEwKX9kQS9TaJAID%2Fhxx9Le9GjzBdiwEcG7b6r21rNtZKNdsTXpIZUwqYaVwVSivxmHG7JilQaUiWCPUjjPPOwJIPF0xJFipH4qUxyR86R5umUR56pDiNzJFuULxenS7y5wPSgGa%2BDhUs9EmqSL1Rt9jeFj6B5BgKkbPFndlx%2Bt1NOuqAS1QLu35mpMEklBdzCI4uPDBjqkAc7A0alHxI%2FnZj2IgL5F2cvKkDuLCR%2BJwU0DaQZn5lxsao%2FEJn8N8aFW%2BZgDubMjj4c63dXfWz2vNB7FBR1vNSqzAYZds7Hul3mpLBZ%2B3k5fTBHjJjdtywPCZJh7ORPuMYrulZ96QlVHF5dcg9gJeYl57bgYF0HsxvHGY6CyDuwrwpuwDFjMJyL%2BNK%2FXlDl8RqH3Cmi%2FdKxfOOGx4ERljlVotEL6&X-Amz-Signature=49cc689150f3d2b73f70ed3386118620ad3f40412441b6195d5f7fdbd919fad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SOWKPW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCeUqXMmwAR8SAeEZ2QliDdh%2B8axyafJrPutuqJRTDHnwIhAN0pLzRNeM1yuLnivQ7lVOvDFDJ4t5ZAPrBllT6Sa7L8Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy15mLCV43w6hM1olEq3AP2dG6AfJOKff1TSv539mfFwhiHDAz6Exv1UVRAaTLbnLve9swd11uV%2FwRLyUZQ9TD%2BXnFRf7YzfQ0EOlxHIU2mApKfj1kuFp9aQjDV47FKE8Pb%2Bpe6nvLa4VjmGilWimDo4IfVrlrg6XD28IcQ4qLaAIoFiv3JjcuqIKbf%2F2PIK43RpwRZlqZHLAuI%2Fr%2Bnyk238Uv%2Fr8yLaKjztAUrXivFPVX%2BcEO423SGeitNRIGCK9YcT%2BwLtQsRkjhVEew9LNoS%2Fq%2BOiDSiekQkYvZ4SzELGngoqazl7UxsETTSOf3TpBitLK0fxukRNkaJZb%2FjQ8H0%2FrPdq%2FfJbXP0%2F11hqowmQpAyzjpatONhRujfC3ejjxi1ZQfe1w3XtBHt9van3x4wNXg6R5ceO1Y9GnPC1e39W4J1%2FLKKLBCIHAUJlETGolGIjsy6gA0syn9mxtEwKX9kQS9TaJAID%2Fhxx9Le9GjzBdiwEcG7b6r21rNtZKNdsTXpIZUwqYaVwVSivxmHG7JilQaUiWCPUjjPPOwJIPF0xJFipH4qUxyR86R5umUR56pDiNzJFuULxenS7y5wPSgGa%2BDhUs9EmqSL1Rt9jeFj6B5BgKkbPFndlx%2Bt1NOuqAS1QLu35mpMEklBdzCI4uPDBjqkAc7A0alHxI%2FnZj2IgL5F2cvKkDuLCR%2BJwU0DaQZn5lxsao%2FEJn8N8aFW%2BZgDubMjj4c63dXfWz2vNB7FBR1vNSqzAYZds7Hul3mpLBZ%2B3k5fTBHjJjdtywPCZJh7ORPuMYrulZ96QlVHF5dcg9gJeYl57bgYF0HsxvHGY6CyDuwrwpuwDFjMJyL%2BNK%2FXlDl8RqH3Cmi%2FdKxfOOGx4ERljlVotEL6&X-Amz-Signature=82425687c6a5995ddd4c13da503b0f7826c87699ca8bad1a202c50324f47d70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SOWKPW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCeUqXMmwAR8SAeEZ2QliDdh%2B8axyafJrPutuqJRTDHnwIhAN0pLzRNeM1yuLnivQ7lVOvDFDJ4t5ZAPrBllT6Sa7L8Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy15mLCV43w6hM1olEq3AP2dG6AfJOKff1TSv539mfFwhiHDAz6Exv1UVRAaTLbnLve9swd11uV%2FwRLyUZQ9TD%2BXnFRf7YzfQ0EOlxHIU2mApKfj1kuFp9aQjDV47FKE8Pb%2Bpe6nvLa4VjmGilWimDo4IfVrlrg6XD28IcQ4qLaAIoFiv3JjcuqIKbf%2F2PIK43RpwRZlqZHLAuI%2Fr%2Bnyk238Uv%2Fr8yLaKjztAUrXivFPVX%2BcEO423SGeitNRIGCK9YcT%2BwLtQsRkjhVEew9LNoS%2Fq%2BOiDSiekQkYvZ4SzELGngoqazl7UxsETTSOf3TpBitLK0fxukRNkaJZb%2FjQ8H0%2FrPdq%2FfJbXP0%2F11hqowmQpAyzjpatONhRujfC3ejjxi1ZQfe1w3XtBHt9van3x4wNXg6R5ceO1Y9GnPC1e39W4J1%2FLKKLBCIHAUJlETGolGIjsy6gA0syn9mxtEwKX9kQS9TaJAID%2Fhxx9Le9GjzBdiwEcG7b6r21rNtZKNdsTXpIZUwqYaVwVSivxmHG7JilQaUiWCPUjjPPOwJIPF0xJFipH4qUxyR86R5umUR56pDiNzJFuULxenS7y5wPSgGa%2BDhUs9EmqSL1Rt9jeFj6B5BgKkbPFndlx%2Bt1NOuqAS1QLu35mpMEklBdzCI4uPDBjqkAc7A0alHxI%2FnZj2IgL5F2cvKkDuLCR%2BJwU0DaQZn5lxsao%2FEJn8N8aFW%2BZgDubMjj4c63dXfWz2vNB7FBR1vNSqzAYZds7Hul3mpLBZ%2B3k5fTBHjJjdtywPCZJh7ORPuMYrulZ96QlVHF5dcg9gJeYl57bgYF0HsxvHGY6CyDuwrwpuwDFjMJyL%2BNK%2FXlDl8RqH3Cmi%2FdKxfOOGx4ERljlVotEL6&X-Amz-Signature=3f691005bca6895ed89bb877ab78dea07ac136ca2be9441bde4d79e07dfa6274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SOWKPW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCeUqXMmwAR8SAeEZ2QliDdh%2B8axyafJrPutuqJRTDHnwIhAN0pLzRNeM1yuLnivQ7lVOvDFDJ4t5ZAPrBllT6Sa7L8Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy15mLCV43w6hM1olEq3AP2dG6AfJOKff1TSv539mfFwhiHDAz6Exv1UVRAaTLbnLve9swd11uV%2FwRLyUZQ9TD%2BXnFRf7YzfQ0EOlxHIU2mApKfj1kuFp9aQjDV47FKE8Pb%2Bpe6nvLa4VjmGilWimDo4IfVrlrg6XD28IcQ4qLaAIoFiv3JjcuqIKbf%2F2PIK43RpwRZlqZHLAuI%2Fr%2Bnyk238Uv%2Fr8yLaKjztAUrXivFPVX%2BcEO423SGeitNRIGCK9YcT%2BwLtQsRkjhVEew9LNoS%2Fq%2BOiDSiekQkYvZ4SzELGngoqazl7UxsETTSOf3TpBitLK0fxukRNkaJZb%2FjQ8H0%2FrPdq%2FfJbXP0%2F11hqowmQpAyzjpatONhRujfC3ejjxi1ZQfe1w3XtBHt9van3x4wNXg6R5ceO1Y9GnPC1e39W4J1%2FLKKLBCIHAUJlETGolGIjsy6gA0syn9mxtEwKX9kQS9TaJAID%2Fhxx9Le9GjzBdiwEcG7b6r21rNtZKNdsTXpIZUwqYaVwVSivxmHG7JilQaUiWCPUjjPPOwJIPF0xJFipH4qUxyR86R5umUR56pDiNzJFuULxenS7y5wPSgGa%2BDhUs9EmqSL1Rt9jeFj6B5BgKkbPFndlx%2Bt1NOuqAS1QLu35mpMEklBdzCI4uPDBjqkAc7A0alHxI%2FnZj2IgL5F2cvKkDuLCR%2BJwU0DaQZn5lxsao%2FEJn8N8aFW%2BZgDubMjj4c63dXfWz2vNB7FBR1vNSqzAYZds7Hul3mpLBZ%2B3k5fTBHjJjdtywPCZJh7ORPuMYrulZ96QlVHF5dcg9gJeYl57bgYF0HsxvHGY6CyDuwrwpuwDFjMJyL%2BNK%2FXlDl8RqH3Cmi%2FdKxfOOGx4ERljlVotEL6&X-Amz-Signature=a4ccc9c18ab0c25013d6ff7f6591d2b24f6e9502c78ebe3a0071fbdd175ea1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SOWKPW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCeUqXMmwAR8SAeEZ2QliDdh%2B8axyafJrPutuqJRTDHnwIhAN0pLzRNeM1yuLnivQ7lVOvDFDJ4t5ZAPrBllT6Sa7L8Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy15mLCV43w6hM1olEq3AP2dG6AfJOKff1TSv539mfFwhiHDAz6Exv1UVRAaTLbnLve9swd11uV%2FwRLyUZQ9TD%2BXnFRf7YzfQ0EOlxHIU2mApKfj1kuFp9aQjDV47FKE8Pb%2Bpe6nvLa4VjmGilWimDo4IfVrlrg6XD28IcQ4qLaAIoFiv3JjcuqIKbf%2F2PIK43RpwRZlqZHLAuI%2Fr%2Bnyk238Uv%2Fr8yLaKjztAUrXivFPVX%2BcEO423SGeitNRIGCK9YcT%2BwLtQsRkjhVEew9LNoS%2Fq%2BOiDSiekQkYvZ4SzELGngoqazl7UxsETTSOf3TpBitLK0fxukRNkaJZb%2FjQ8H0%2FrPdq%2FfJbXP0%2F11hqowmQpAyzjpatONhRujfC3ejjxi1ZQfe1w3XtBHt9van3x4wNXg6R5ceO1Y9GnPC1e39W4J1%2FLKKLBCIHAUJlETGolGIjsy6gA0syn9mxtEwKX9kQS9TaJAID%2Fhxx9Le9GjzBdiwEcG7b6r21rNtZKNdsTXpIZUwqYaVwVSivxmHG7JilQaUiWCPUjjPPOwJIPF0xJFipH4qUxyR86R5umUR56pDiNzJFuULxenS7y5wPSgGa%2BDhUs9EmqSL1Rt9jeFj6B5BgKkbPFndlx%2Bt1NOuqAS1QLu35mpMEklBdzCI4uPDBjqkAc7A0alHxI%2FnZj2IgL5F2cvKkDuLCR%2BJwU0DaQZn5lxsao%2FEJn8N8aFW%2BZgDubMjj4c63dXfWz2vNB7FBR1vNSqzAYZds7Hul3mpLBZ%2B3k5fTBHjJjdtywPCZJh7ORPuMYrulZ96QlVHF5dcg9gJeYl57bgYF0HsxvHGY6CyDuwrwpuwDFjMJyL%2BNK%2FXlDl8RqH3Cmi%2FdKxfOOGx4ERljlVotEL6&X-Amz-Signature=2ef1e25eca63d5c6f81b849fdacc843b60c51eaebdf95b3e6ebd91bd0ee67ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
