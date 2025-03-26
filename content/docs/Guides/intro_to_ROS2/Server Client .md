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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6ZRMM5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgZOxK7mp9t5e0y4odo9JTRus73SBDrSUUrDRWKMJ88AiEAljp7mh5Dc2iMDuQPn3x5ZX8GvDC%2FgkTaw3h939vByDwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIdJfDPufHT%2FGtq%2BkCrcA5FMrVw5aCNHV5MIM66ZOjVbL2h79ghg8guvazOq7H0B5SjeUGwFqooF%2BZfFkvpoxe%2FJe1d9xyu4mHg9N%2FXoPAjUqWhar1vy%2Bhox%2Bn1vKhCMoUsqW75ZHRYDVoouVz15aQUGMRsGQTBhChSxIBxcf8jyfAjCRu1YJrRZV9J12RR6f0Gdv4Upk%2FSwRwHXMsy4cHHhL0hJlfIlNEx5H8aQF8iXg3PxHXlOxVvwLES5lgVc38oW9%2B0pwPK%2B95GBLsbbIsHN3tMG2u1fTcUVpzrkO5CedmcPfH18MY8F5F1Vdpg1Y5YwmuTZu35sKK6ZsiQKRr336NH0yo5QYgfeOJndbNVEKAJJl64%2BA6HOQsTnFb%2F38DgJXGal%2B1u8IW%2FrJqDadpLkjVLRZ4GHV1Uvw1dAGybBh8pKruuHzHI7xPYH0eTM%2BKSvWxlf0HcmZugl6MV9OkcC6PzoumUVuW%2BPhmijdiwabXZJVUA%2BfxwiXHen0DNXkjvdH2Bg2ZO9GhjnUcR1%2FN96X3TqDIPRZMGl%2BhBmKe1%2BBdfwjvDWcwx7gosIxzXfzk2Yew%2Bh3NnvGrgznLNQit4A5Lv1uRgNV%2BhQ9waQHVxt9ffSTiJHNtvJX2CqxRS1A1Pf6Cu6WEjvaZT9MKPLjb8GOqUBnyF95YDFieA2LIKShgp02fFtPJ4W1bVa7zPdbwDP0B4aTpGcW%2F9saUG%2BSBgQyEAxRMIagx6rcQ2zLfozFHQerQavkRy6TQ5pwuvFUmEoZAOqK3f9lztZpyHXW8gD0LCN1ildLNcjrE8pfqP%2BYnP5ZcbFaS8qzX5GiwdgjxlYNa9rFzwF6SivS5kMxslb1diLHmsbG%2BNsTBLCq8VJI0GNY61MvtGR&X-Amz-Signature=c70033313353bdd57a5a7da4847f7cee209ee479f9c98783377897fa4e9666b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6ZRMM5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgZOxK7mp9t5e0y4odo9JTRus73SBDrSUUrDRWKMJ88AiEAljp7mh5Dc2iMDuQPn3x5ZX8GvDC%2FgkTaw3h939vByDwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIdJfDPufHT%2FGtq%2BkCrcA5FMrVw5aCNHV5MIM66ZOjVbL2h79ghg8guvazOq7H0B5SjeUGwFqooF%2BZfFkvpoxe%2FJe1d9xyu4mHg9N%2FXoPAjUqWhar1vy%2Bhox%2Bn1vKhCMoUsqW75ZHRYDVoouVz15aQUGMRsGQTBhChSxIBxcf8jyfAjCRu1YJrRZV9J12RR6f0Gdv4Upk%2FSwRwHXMsy4cHHhL0hJlfIlNEx5H8aQF8iXg3PxHXlOxVvwLES5lgVc38oW9%2B0pwPK%2B95GBLsbbIsHN3tMG2u1fTcUVpzrkO5CedmcPfH18MY8F5F1Vdpg1Y5YwmuTZu35sKK6ZsiQKRr336NH0yo5QYgfeOJndbNVEKAJJl64%2BA6HOQsTnFb%2F38DgJXGal%2B1u8IW%2FrJqDadpLkjVLRZ4GHV1Uvw1dAGybBh8pKruuHzHI7xPYH0eTM%2BKSvWxlf0HcmZugl6MV9OkcC6PzoumUVuW%2BPhmijdiwabXZJVUA%2BfxwiXHen0DNXkjvdH2Bg2ZO9GhjnUcR1%2FN96X3TqDIPRZMGl%2BhBmKe1%2BBdfwjvDWcwx7gosIxzXfzk2Yew%2Bh3NnvGrgznLNQit4A5Lv1uRgNV%2BhQ9waQHVxt9ffSTiJHNtvJX2CqxRS1A1Pf6Cu6WEjvaZT9MKPLjb8GOqUBnyF95YDFieA2LIKShgp02fFtPJ4W1bVa7zPdbwDP0B4aTpGcW%2F9saUG%2BSBgQyEAxRMIagx6rcQ2zLfozFHQerQavkRy6TQ5pwuvFUmEoZAOqK3f9lztZpyHXW8gD0LCN1ildLNcjrE8pfqP%2BYnP5ZcbFaS8qzX5GiwdgjxlYNa9rFzwF6SivS5kMxslb1diLHmsbG%2BNsTBLCq8VJI0GNY61MvtGR&X-Amz-Signature=267e256ae238de722f1cf9cd93a50a8f79d85d8ba9865f34600822126267fff8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6ZRMM5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgZOxK7mp9t5e0y4odo9JTRus73SBDrSUUrDRWKMJ88AiEAljp7mh5Dc2iMDuQPn3x5ZX8GvDC%2FgkTaw3h939vByDwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIdJfDPufHT%2FGtq%2BkCrcA5FMrVw5aCNHV5MIM66ZOjVbL2h79ghg8guvazOq7H0B5SjeUGwFqooF%2BZfFkvpoxe%2FJe1d9xyu4mHg9N%2FXoPAjUqWhar1vy%2Bhox%2Bn1vKhCMoUsqW75ZHRYDVoouVz15aQUGMRsGQTBhChSxIBxcf8jyfAjCRu1YJrRZV9J12RR6f0Gdv4Upk%2FSwRwHXMsy4cHHhL0hJlfIlNEx5H8aQF8iXg3PxHXlOxVvwLES5lgVc38oW9%2B0pwPK%2B95GBLsbbIsHN3tMG2u1fTcUVpzrkO5CedmcPfH18MY8F5F1Vdpg1Y5YwmuTZu35sKK6ZsiQKRr336NH0yo5QYgfeOJndbNVEKAJJl64%2BA6HOQsTnFb%2F38DgJXGal%2B1u8IW%2FrJqDadpLkjVLRZ4GHV1Uvw1dAGybBh8pKruuHzHI7xPYH0eTM%2BKSvWxlf0HcmZugl6MV9OkcC6PzoumUVuW%2BPhmijdiwabXZJVUA%2BfxwiXHen0DNXkjvdH2Bg2ZO9GhjnUcR1%2FN96X3TqDIPRZMGl%2BhBmKe1%2BBdfwjvDWcwx7gosIxzXfzk2Yew%2Bh3NnvGrgznLNQit4A5Lv1uRgNV%2BhQ9waQHVxt9ffSTiJHNtvJX2CqxRS1A1Pf6Cu6WEjvaZT9MKPLjb8GOqUBnyF95YDFieA2LIKShgp02fFtPJ4W1bVa7zPdbwDP0B4aTpGcW%2F9saUG%2BSBgQyEAxRMIagx6rcQ2zLfozFHQerQavkRy6TQ5pwuvFUmEoZAOqK3f9lztZpyHXW8gD0LCN1ildLNcjrE8pfqP%2BYnP5ZcbFaS8qzX5GiwdgjxlYNa9rFzwF6SivS5kMxslb1diLHmsbG%2BNsTBLCq8VJI0GNY61MvtGR&X-Amz-Signature=1316258c19500ae9d6015274c612363030b72364e71c8c0e000bead0318a7d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6ZRMM5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgZOxK7mp9t5e0y4odo9JTRus73SBDrSUUrDRWKMJ88AiEAljp7mh5Dc2iMDuQPn3x5ZX8GvDC%2FgkTaw3h939vByDwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIdJfDPufHT%2FGtq%2BkCrcA5FMrVw5aCNHV5MIM66ZOjVbL2h79ghg8guvazOq7H0B5SjeUGwFqooF%2BZfFkvpoxe%2FJe1d9xyu4mHg9N%2FXoPAjUqWhar1vy%2Bhox%2Bn1vKhCMoUsqW75ZHRYDVoouVz15aQUGMRsGQTBhChSxIBxcf8jyfAjCRu1YJrRZV9J12RR6f0Gdv4Upk%2FSwRwHXMsy4cHHhL0hJlfIlNEx5H8aQF8iXg3PxHXlOxVvwLES5lgVc38oW9%2B0pwPK%2B95GBLsbbIsHN3tMG2u1fTcUVpzrkO5CedmcPfH18MY8F5F1Vdpg1Y5YwmuTZu35sKK6ZsiQKRr336NH0yo5QYgfeOJndbNVEKAJJl64%2BA6HOQsTnFb%2F38DgJXGal%2B1u8IW%2FrJqDadpLkjVLRZ4GHV1Uvw1dAGybBh8pKruuHzHI7xPYH0eTM%2BKSvWxlf0HcmZugl6MV9OkcC6PzoumUVuW%2BPhmijdiwabXZJVUA%2BfxwiXHen0DNXkjvdH2Bg2ZO9GhjnUcR1%2FN96X3TqDIPRZMGl%2BhBmKe1%2BBdfwjvDWcwx7gosIxzXfzk2Yew%2Bh3NnvGrgznLNQit4A5Lv1uRgNV%2BhQ9waQHVxt9ffSTiJHNtvJX2CqxRS1A1Pf6Cu6WEjvaZT9MKPLjb8GOqUBnyF95YDFieA2LIKShgp02fFtPJ4W1bVa7zPdbwDP0B4aTpGcW%2F9saUG%2BSBgQyEAxRMIagx6rcQ2zLfozFHQerQavkRy6TQ5pwuvFUmEoZAOqK3f9lztZpyHXW8gD0LCN1ildLNcjrE8pfqP%2BYnP5ZcbFaS8qzX5GiwdgjxlYNa9rFzwF6SivS5kMxslb1diLHmsbG%2BNsTBLCq8VJI0GNY61MvtGR&X-Amz-Signature=b7317add84fff1a3d9c65ff177f4d208aee6e69ceba81a629255094455cc7917&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6ZRMM5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgZOxK7mp9t5e0y4odo9JTRus73SBDrSUUrDRWKMJ88AiEAljp7mh5Dc2iMDuQPn3x5ZX8GvDC%2FgkTaw3h939vByDwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIdJfDPufHT%2FGtq%2BkCrcA5FMrVw5aCNHV5MIM66ZOjVbL2h79ghg8guvazOq7H0B5SjeUGwFqooF%2BZfFkvpoxe%2FJe1d9xyu4mHg9N%2FXoPAjUqWhar1vy%2Bhox%2Bn1vKhCMoUsqW75ZHRYDVoouVz15aQUGMRsGQTBhChSxIBxcf8jyfAjCRu1YJrRZV9J12RR6f0Gdv4Upk%2FSwRwHXMsy4cHHhL0hJlfIlNEx5H8aQF8iXg3PxHXlOxVvwLES5lgVc38oW9%2B0pwPK%2B95GBLsbbIsHN3tMG2u1fTcUVpzrkO5CedmcPfH18MY8F5F1Vdpg1Y5YwmuTZu35sKK6ZsiQKRr336NH0yo5QYgfeOJndbNVEKAJJl64%2BA6HOQsTnFb%2F38DgJXGal%2B1u8IW%2FrJqDadpLkjVLRZ4GHV1Uvw1dAGybBh8pKruuHzHI7xPYH0eTM%2BKSvWxlf0HcmZugl6MV9OkcC6PzoumUVuW%2BPhmijdiwabXZJVUA%2BfxwiXHen0DNXkjvdH2Bg2ZO9GhjnUcR1%2FN96X3TqDIPRZMGl%2BhBmKe1%2BBdfwjvDWcwx7gosIxzXfzk2Yew%2Bh3NnvGrgznLNQit4A5Lv1uRgNV%2BhQ9waQHVxt9ffSTiJHNtvJX2CqxRS1A1Pf6Cu6WEjvaZT9MKPLjb8GOqUBnyF95YDFieA2LIKShgp02fFtPJ4W1bVa7zPdbwDP0B4aTpGcW%2F9saUG%2BSBgQyEAxRMIagx6rcQ2zLfozFHQerQavkRy6TQ5pwuvFUmEoZAOqK3f9lztZpyHXW8gD0LCN1ildLNcjrE8pfqP%2BYnP5ZcbFaS8qzX5GiwdgjxlYNa9rFzwF6SivS5kMxslb1diLHmsbG%2BNsTBLCq8VJI0GNY61MvtGR&X-Amz-Signature=3fd9d5d5c33e3f5859e50d65f979667af109aa5120ce14de5db9760b552ad34f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
