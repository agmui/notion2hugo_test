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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KXQGHU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZPwqYgH8YYqVSZ0yo8SO1ZJV3KBHb7Nh55LloROhfcQIgBWv%2FqN6TYCrifRDGfp7%2BI6vYZVHaegQilF5Y0JIIBroqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSk6E1eH2994IDiKSrcA7%2FHAlKb7A418fbEqClmn4Cfv6hpTGEJxKn2vUj5wtpcd1uhtkV2PyG9poDHEpjYapZM%2Bi49IjzgjZFozEB1bW2gKLh7%2BDKTFhXGNWkgvgeD4wV2WDfz7HPe%2B%2FPAmwEhvM3YS6IhMnuWiezSwyyYTv7EmkB9KkIEqk8Aun%2Bom8amErKrJLy%2FEBcsQ%2B%2FFWPa2dh5Hj0PoYvPdZr2SRNynRz7z1nnGC4niVFh1YwCMroQCj9Emf91h%2FqOASSzg26%2B0vVzs0KUYhI%2BjrjTi%2B%2Bq%2FEUgueicalu6ewwTu%2BL7VX6%2FWEmID9nMZRaP7V2fwRcevBygGN2CHgwtfbi%2BBvRCD5LTYO7DHi4%2BY5GZwcCj0m4q3%2F7HzDYAQhWL3IOse%2FQ9%2F2NyNAjPD5vART6EaMQB7587OUgUphZkD7hOGlqvNYa4CDkzkIFSqEM%2Fm37Y5ikkSlE5xnNKHWTIS6CpXnE6DYbMSAW5YQNqK2JijXCEB7V817RJBwnuaiVZ%2Fp%2BMgv9cLqbzOfgdjUyDQceQ3qExG0eDnfUdeO6Uh1nMpywyuHz0%2B%2FP9wIghLtne3gE7eE51acJhWsbrg6NA9fhPHD8jirhx3nzIQKzhkmzu%2Fg7fOK0IzrwzhwJ4PuSWo5E6%2FMLPfwsAGOqUBvvJ9GctC4lgaXNdBDOaw7vJQqy29oku9vTKXGgNnl0ahx1YcfXlZzyzwMndAJX3nFwl5mgII8iQvvLbOCB%2Ftl4KHqYpIInS6Y3KehjxkBpwwzF8X83at757dAE7%2BBvCPvmRgyaVXZStYhpBD2hdbYw2SVBurx8dpWsjr7vklc9z%2FmjasywFyHxvVgtzKmkNNG8XZP0nghS8gg%2BBDRg3tVLxt2SAs&X-Amz-Signature=e07e3d621d4b0a94ad5e7a5fadb2e8c3e1ce6425f190984a6eacbc16dd6b2e53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KXQGHU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZPwqYgH8YYqVSZ0yo8SO1ZJV3KBHb7Nh55LloROhfcQIgBWv%2FqN6TYCrifRDGfp7%2BI6vYZVHaegQilF5Y0JIIBroqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSk6E1eH2994IDiKSrcA7%2FHAlKb7A418fbEqClmn4Cfv6hpTGEJxKn2vUj5wtpcd1uhtkV2PyG9poDHEpjYapZM%2Bi49IjzgjZFozEB1bW2gKLh7%2BDKTFhXGNWkgvgeD4wV2WDfz7HPe%2B%2FPAmwEhvM3YS6IhMnuWiezSwyyYTv7EmkB9KkIEqk8Aun%2Bom8amErKrJLy%2FEBcsQ%2B%2FFWPa2dh5Hj0PoYvPdZr2SRNynRz7z1nnGC4niVFh1YwCMroQCj9Emf91h%2FqOASSzg26%2B0vVzs0KUYhI%2BjrjTi%2B%2Bq%2FEUgueicalu6ewwTu%2BL7VX6%2FWEmID9nMZRaP7V2fwRcevBygGN2CHgwtfbi%2BBvRCD5LTYO7DHi4%2BY5GZwcCj0m4q3%2F7HzDYAQhWL3IOse%2FQ9%2F2NyNAjPD5vART6EaMQB7587OUgUphZkD7hOGlqvNYa4CDkzkIFSqEM%2Fm37Y5ikkSlE5xnNKHWTIS6CpXnE6DYbMSAW5YQNqK2JijXCEB7V817RJBwnuaiVZ%2Fp%2BMgv9cLqbzOfgdjUyDQceQ3qExG0eDnfUdeO6Uh1nMpywyuHz0%2B%2FP9wIghLtne3gE7eE51acJhWsbrg6NA9fhPHD8jirhx3nzIQKzhkmzu%2Fg7fOK0IzrwzhwJ4PuSWo5E6%2FMLPfwsAGOqUBvvJ9GctC4lgaXNdBDOaw7vJQqy29oku9vTKXGgNnl0ahx1YcfXlZzyzwMndAJX3nFwl5mgII8iQvvLbOCB%2Ftl4KHqYpIInS6Y3KehjxkBpwwzF8X83at757dAE7%2BBvCPvmRgyaVXZStYhpBD2hdbYw2SVBurx8dpWsjr7vklc9z%2FmjasywFyHxvVgtzKmkNNG8XZP0nghS8gg%2BBDRg3tVLxt2SAs&X-Amz-Signature=504a949b65f0436771a8aea2d410409e2164a5fedc5bf2943285f3f6353080b1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KXQGHU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZPwqYgH8YYqVSZ0yo8SO1ZJV3KBHb7Nh55LloROhfcQIgBWv%2FqN6TYCrifRDGfp7%2BI6vYZVHaegQilF5Y0JIIBroqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSk6E1eH2994IDiKSrcA7%2FHAlKb7A418fbEqClmn4Cfv6hpTGEJxKn2vUj5wtpcd1uhtkV2PyG9poDHEpjYapZM%2Bi49IjzgjZFozEB1bW2gKLh7%2BDKTFhXGNWkgvgeD4wV2WDfz7HPe%2B%2FPAmwEhvM3YS6IhMnuWiezSwyyYTv7EmkB9KkIEqk8Aun%2Bom8amErKrJLy%2FEBcsQ%2B%2FFWPa2dh5Hj0PoYvPdZr2SRNynRz7z1nnGC4niVFh1YwCMroQCj9Emf91h%2FqOASSzg26%2B0vVzs0KUYhI%2BjrjTi%2B%2Bq%2FEUgueicalu6ewwTu%2BL7VX6%2FWEmID9nMZRaP7V2fwRcevBygGN2CHgwtfbi%2BBvRCD5LTYO7DHi4%2BY5GZwcCj0m4q3%2F7HzDYAQhWL3IOse%2FQ9%2F2NyNAjPD5vART6EaMQB7587OUgUphZkD7hOGlqvNYa4CDkzkIFSqEM%2Fm37Y5ikkSlE5xnNKHWTIS6CpXnE6DYbMSAW5YQNqK2JijXCEB7V817RJBwnuaiVZ%2Fp%2BMgv9cLqbzOfgdjUyDQceQ3qExG0eDnfUdeO6Uh1nMpywyuHz0%2B%2FP9wIghLtne3gE7eE51acJhWsbrg6NA9fhPHD8jirhx3nzIQKzhkmzu%2Fg7fOK0IzrwzhwJ4PuSWo5E6%2FMLPfwsAGOqUBvvJ9GctC4lgaXNdBDOaw7vJQqy29oku9vTKXGgNnl0ahx1YcfXlZzyzwMndAJX3nFwl5mgII8iQvvLbOCB%2Ftl4KHqYpIInS6Y3KehjxkBpwwzF8X83at757dAE7%2BBvCPvmRgyaVXZStYhpBD2hdbYw2SVBurx8dpWsjr7vklc9z%2FmjasywFyHxvVgtzKmkNNG8XZP0nghS8gg%2BBDRg3tVLxt2SAs&X-Amz-Signature=54f34f07c043cc21f193fe43687b2f3ac9b9ed44d57cfe86e7d40e326c85b24e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KXQGHU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZPwqYgH8YYqVSZ0yo8SO1ZJV3KBHb7Nh55LloROhfcQIgBWv%2FqN6TYCrifRDGfp7%2BI6vYZVHaegQilF5Y0JIIBroqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSk6E1eH2994IDiKSrcA7%2FHAlKb7A418fbEqClmn4Cfv6hpTGEJxKn2vUj5wtpcd1uhtkV2PyG9poDHEpjYapZM%2Bi49IjzgjZFozEB1bW2gKLh7%2BDKTFhXGNWkgvgeD4wV2WDfz7HPe%2B%2FPAmwEhvM3YS6IhMnuWiezSwyyYTv7EmkB9KkIEqk8Aun%2Bom8amErKrJLy%2FEBcsQ%2B%2FFWPa2dh5Hj0PoYvPdZr2SRNynRz7z1nnGC4niVFh1YwCMroQCj9Emf91h%2FqOASSzg26%2B0vVzs0KUYhI%2BjrjTi%2B%2Bq%2FEUgueicalu6ewwTu%2BL7VX6%2FWEmID9nMZRaP7V2fwRcevBygGN2CHgwtfbi%2BBvRCD5LTYO7DHi4%2BY5GZwcCj0m4q3%2F7HzDYAQhWL3IOse%2FQ9%2F2NyNAjPD5vART6EaMQB7587OUgUphZkD7hOGlqvNYa4CDkzkIFSqEM%2Fm37Y5ikkSlE5xnNKHWTIS6CpXnE6DYbMSAW5YQNqK2JijXCEB7V817RJBwnuaiVZ%2Fp%2BMgv9cLqbzOfgdjUyDQceQ3qExG0eDnfUdeO6Uh1nMpywyuHz0%2B%2FP9wIghLtne3gE7eE51acJhWsbrg6NA9fhPHD8jirhx3nzIQKzhkmzu%2Fg7fOK0IzrwzhwJ4PuSWo5E6%2FMLPfwsAGOqUBvvJ9GctC4lgaXNdBDOaw7vJQqy29oku9vTKXGgNnl0ahx1YcfXlZzyzwMndAJX3nFwl5mgII8iQvvLbOCB%2Ftl4KHqYpIInS6Y3KehjxkBpwwzF8X83at757dAE7%2BBvCPvmRgyaVXZStYhpBD2hdbYw2SVBurx8dpWsjr7vklc9z%2FmjasywFyHxvVgtzKmkNNG8XZP0nghS8gg%2BBDRg3tVLxt2SAs&X-Amz-Signature=f215994911455c8e84c855df3f4588b8f69ad027f4b48f751b1f9340675df544&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KXQGHU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZPwqYgH8YYqVSZ0yo8SO1ZJV3KBHb7Nh55LloROhfcQIgBWv%2FqN6TYCrifRDGfp7%2BI6vYZVHaegQilF5Y0JIIBroqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSk6E1eH2994IDiKSrcA7%2FHAlKb7A418fbEqClmn4Cfv6hpTGEJxKn2vUj5wtpcd1uhtkV2PyG9poDHEpjYapZM%2Bi49IjzgjZFozEB1bW2gKLh7%2BDKTFhXGNWkgvgeD4wV2WDfz7HPe%2B%2FPAmwEhvM3YS6IhMnuWiezSwyyYTv7EmkB9KkIEqk8Aun%2Bom8amErKrJLy%2FEBcsQ%2B%2FFWPa2dh5Hj0PoYvPdZr2SRNynRz7z1nnGC4niVFh1YwCMroQCj9Emf91h%2FqOASSzg26%2B0vVzs0KUYhI%2BjrjTi%2B%2Bq%2FEUgueicalu6ewwTu%2BL7VX6%2FWEmID9nMZRaP7V2fwRcevBygGN2CHgwtfbi%2BBvRCD5LTYO7DHi4%2BY5GZwcCj0m4q3%2F7HzDYAQhWL3IOse%2FQ9%2F2NyNAjPD5vART6EaMQB7587OUgUphZkD7hOGlqvNYa4CDkzkIFSqEM%2Fm37Y5ikkSlE5xnNKHWTIS6CpXnE6DYbMSAW5YQNqK2JijXCEB7V817RJBwnuaiVZ%2Fp%2BMgv9cLqbzOfgdjUyDQceQ3qExG0eDnfUdeO6Uh1nMpywyuHz0%2B%2FP9wIghLtne3gE7eE51acJhWsbrg6NA9fhPHD8jirhx3nzIQKzhkmzu%2Fg7fOK0IzrwzhwJ4PuSWo5E6%2FMLPfwsAGOqUBvvJ9GctC4lgaXNdBDOaw7vJQqy29oku9vTKXGgNnl0ahx1YcfXlZzyzwMndAJX3nFwl5mgII8iQvvLbOCB%2Ftl4KHqYpIInS6Y3KehjxkBpwwzF8X83at757dAE7%2BBvCPvmRgyaVXZStYhpBD2hdbYw2SVBurx8dpWsjr7vklc9z%2FmjasywFyHxvVgtzKmkNNG8XZP0nghS8gg%2BBDRg3tVLxt2SAs&X-Amz-Signature=5aad645c53cba78b9becccbdfcfa5a5f6e7f4d866c5442c6870068aad94ab87c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
