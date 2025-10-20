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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L723IIE%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD%2F3rAx9YG6iV%2FxjzYonB%2FBvoV8SyDLQkd2ja2WNFD%2BuwIhAL%2B%2Fo0AHDhRdltCHopMTRV98CzB55X%2Fs94GI3n7Plvc6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFZacVVE2LiNppTMUq3APsp%2B1kIsVHMtFVoC1BtUGcb9TV5FXSyLsgf7mRd4qRTv3gObV6j6wcS%2FIkE%2BR6jikDD8xYBj5gtSkiwFamdlV8rM391Bl9kXY%2B3wjXXpmof7aigr4ps4uQPoss4Ro4pO8rR5MPTPYTDSr2JmLEKOA1fEFHElnYaste8Hn677cEy1ZKifJn5KFcPbQuHO5EabrmDvxp9ncjynmB85Gywkt3oi%2BEKTmqYIhtvRUZ4Q%2Fu1LfSpNFYYy5LhrvZ8vdyH6RDSvRr4mQP2Vd%2B1ZaLKl9Mg1QQ5AuTi%2BbmIZXLpxtIBY7hvTDgvNfOsf03C%2FguivSRI%2BQOVs7rCeWGo5Ih4mVoLoBQTd6yrAVnrfpWH2G7aAahh72PIis2Ou%2BIPtHfSxXJJFhR1VTjReY%2Fz0ULy%2FM8tQ7h4DVdwlwnnL58VhpoS9xT%2BBTchdTDABHwlKP1EPQ1C%2Ba1AmS8YPbPAEuVlkbanMLDF9CC9QcMywXap1iOI%2Fgakp%2BplD9St2XSidhn8Ut2tjtCGzebeP0PoSEu3olml63I3daY1I1B8i7TkRC6N5PLlDWZWF4j5Pm5pydpY%2F1863uDzOzpkT7X%2BIrmhaddhemIxoF3LVZomxijIQT4RuO7wJdjroZMHpD0yDDYi9bHBjqkAVVjacpUpvUPO%2BIFrl520KlliM%2FFdfs2b31vBCYftJOYRmDe5kzX9a85dUS9b7pcCzcG9%2F1gaJtlp4h9YLlPQThGCKIa1Z4BmXqKJBCb0r1tOx63xw6ACYONijtJD3ukkYIF6MOE7rkZLej2mk59OXjn7aSLzDnlyC5MydAkHkl%2F7mrSYu8u8SgmzZVJSYX3sTOnSO8IjuxhShbx5a8YuPJYN3r%2B&X-Amz-Signature=5fb8183784b27e3f656a13dfdecbf026476d210339961dd62a99c8bd9c18bd9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L723IIE%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD%2F3rAx9YG6iV%2FxjzYonB%2FBvoV8SyDLQkd2ja2WNFD%2BuwIhAL%2B%2Fo0AHDhRdltCHopMTRV98CzB55X%2Fs94GI3n7Plvc6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFZacVVE2LiNppTMUq3APsp%2B1kIsVHMtFVoC1BtUGcb9TV5FXSyLsgf7mRd4qRTv3gObV6j6wcS%2FIkE%2BR6jikDD8xYBj5gtSkiwFamdlV8rM391Bl9kXY%2B3wjXXpmof7aigr4ps4uQPoss4Ro4pO8rR5MPTPYTDSr2JmLEKOA1fEFHElnYaste8Hn677cEy1ZKifJn5KFcPbQuHO5EabrmDvxp9ncjynmB85Gywkt3oi%2BEKTmqYIhtvRUZ4Q%2Fu1LfSpNFYYy5LhrvZ8vdyH6RDSvRr4mQP2Vd%2B1ZaLKl9Mg1QQ5AuTi%2BbmIZXLpxtIBY7hvTDgvNfOsf03C%2FguivSRI%2BQOVs7rCeWGo5Ih4mVoLoBQTd6yrAVnrfpWH2G7aAahh72PIis2Ou%2BIPtHfSxXJJFhR1VTjReY%2Fz0ULy%2FM8tQ7h4DVdwlwnnL58VhpoS9xT%2BBTchdTDABHwlKP1EPQ1C%2Ba1AmS8YPbPAEuVlkbanMLDF9CC9QcMywXap1iOI%2Fgakp%2BplD9St2XSidhn8Ut2tjtCGzebeP0PoSEu3olml63I3daY1I1B8i7TkRC6N5PLlDWZWF4j5Pm5pydpY%2F1863uDzOzpkT7X%2BIrmhaddhemIxoF3LVZomxijIQT4RuO7wJdjroZMHpD0yDDYi9bHBjqkAVVjacpUpvUPO%2BIFrl520KlliM%2FFdfs2b31vBCYftJOYRmDe5kzX9a85dUS9b7pcCzcG9%2F1gaJtlp4h9YLlPQThGCKIa1Z4BmXqKJBCb0r1tOx63xw6ACYONijtJD3ukkYIF6MOE7rkZLej2mk59OXjn7aSLzDnlyC5MydAkHkl%2F7mrSYu8u8SgmzZVJSYX3sTOnSO8IjuxhShbx5a8YuPJYN3r%2B&X-Amz-Signature=de6276405af047c2d97ae77dfa01188080d547965c352233633bc3bf38ef2eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L723IIE%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD%2F3rAx9YG6iV%2FxjzYonB%2FBvoV8SyDLQkd2ja2WNFD%2BuwIhAL%2B%2Fo0AHDhRdltCHopMTRV98CzB55X%2Fs94GI3n7Plvc6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFZacVVE2LiNppTMUq3APsp%2B1kIsVHMtFVoC1BtUGcb9TV5FXSyLsgf7mRd4qRTv3gObV6j6wcS%2FIkE%2BR6jikDD8xYBj5gtSkiwFamdlV8rM391Bl9kXY%2B3wjXXpmof7aigr4ps4uQPoss4Ro4pO8rR5MPTPYTDSr2JmLEKOA1fEFHElnYaste8Hn677cEy1ZKifJn5KFcPbQuHO5EabrmDvxp9ncjynmB85Gywkt3oi%2BEKTmqYIhtvRUZ4Q%2Fu1LfSpNFYYy5LhrvZ8vdyH6RDSvRr4mQP2Vd%2B1ZaLKl9Mg1QQ5AuTi%2BbmIZXLpxtIBY7hvTDgvNfOsf03C%2FguivSRI%2BQOVs7rCeWGo5Ih4mVoLoBQTd6yrAVnrfpWH2G7aAahh72PIis2Ou%2BIPtHfSxXJJFhR1VTjReY%2Fz0ULy%2FM8tQ7h4DVdwlwnnL58VhpoS9xT%2BBTchdTDABHwlKP1EPQ1C%2Ba1AmS8YPbPAEuVlkbanMLDF9CC9QcMywXap1iOI%2Fgakp%2BplD9St2XSidhn8Ut2tjtCGzebeP0PoSEu3olml63I3daY1I1B8i7TkRC6N5PLlDWZWF4j5Pm5pydpY%2F1863uDzOzpkT7X%2BIrmhaddhemIxoF3LVZomxijIQT4RuO7wJdjroZMHpD0yDDYi9bHBjqkAVVjacpUpvUPO%2BIFrl520KlliM%2FFdfs2b31vBCYftJOYRmDe5kzX9a85dUS9b7pcCzcG9%2F1gaJtlp4h9YLlPQThGCKIa1Z4BmXqKJBCb0r1tOx63xw6ACYONijtJD3ukkYIF6MOE7rkZLej2mk59OXjn7aSLzDnlyC5MydAkHkl%2F7mrSYu8u8SgmzZVJSYX3sTOnSO8IjuxhShbx5a8YuPJYN3r%2B&X-Amz-Signature=71bad96de1dc838c49933d17628d9edac74c0d82c9436fb4c79bda7a61280e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L723IIE%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD%2F3rAx9YG6iV%2FxjzYonB%2FBvoV8SyDLQkd2ja2WNFD%2BuwIhAL%2B%2Fo0AHDhRdltCHopMTRV98CzB55X%2Fs94GI3n7Plvc6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFZacVVE2LiNppTMUq3APsp%2B1kIsVHMtFVoC1BtUGcb9TV5FXSyLsgf7mRd4qRTv3gObV6j6wcS%2FIkE%2BR6jikDD8xYBj5gtSkiwFamdlV8rM391Bl9kXY%2B3wjXXpmof7aigr4ps4uQPoss4Ro4pO8rR5MPTPYTDSr2JmLEKOA1fEFHElnYaste8Hn677cEy1ZKifJn5KFcPbQuHO5EabrmDvxp9ncjynmB85Gywkt3oi%2BEKTmqYIhtvRUZ4Q%2Fu1LfSpNFYYy5LhrvZ8vdyH6RDSvRr4mQP2Vd%2B1ZaLKl9Mg1QQ5AuTi%2BbmIZXLpxtIBY7hvTDgvNfOsf03C%2FguivSRI%2BQOVs7rCeWGo5Ih4mVoLoBQTd6yrAVnrfpWH2G7aAahh72PIis2Ou%2BIPtHfSxXJJFhR1VTjReY%2Fz0ULy%2FM8tQ7h4DVdwlwnnL58VhpoS9xT%2BBTchdTDABHwlKP1EPQ1C%2Ba1AmS8YPbPAEuVlkbanMLDF9CC9QcMywXap1iOI%2Fgakp%2BplD9St2XSidhn8Ut2tjtCGzebeP0PoSEu3olml63I3daY1I1B8i7TkRC6N5PLlDWZWF4j5Pm5pydpY%2F1863uDzOzpkT7X%2BIrmhaddhemIxoF3LVZomxijIQT4RuO7wJdjroZMHpD0yDDYi9bHBjqkAVVjacpUpvUPO%2BIFrl520KlliM%2FFdfs2b31vBCYftJOYRmDe5kzX9a85dUS9b7pcCzcG9%2F1gaJtlp4h9YLlPQThGCKIa1Z4BmXqKJBCb0r1tOx63xw6ACYONijtJD3ukkYIF6MOE7rkZLej2mk59OXjn7aSLzDnlyC5MydAkHkl%2F7mrSYu8u8SgmzZVJSYX3sTOnSO8IjuxhShbx5a8YuPJYN3r%2B&X-Amz-Signature=1bffdafd21ca36e4505d115e6345e6c19a6e2fd360e0898a00d4d38554ae4a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L723IIE%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD%2F3rAx9YG6iV%2FxjzYonB%2FBvoV8SyDLQkd2ja2WNFD%2BuwIhAL%2B%2Fo0AHDhRdltCHopMTRV98CzB55X%2Fs94GI3n7Plvc6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFZacVVE2LiNppTMUq3APsp%2B1kIsVHMtFVoC1BtUGcb9TV5FXSyLsgf7mRd4qRTv3gObV6j6wcS%2FIkE%2BR6jikDD8xYBj5gtSkiwFamdlV8rM391Bl9kXY%2B3wjXXpmof7aigr4ps4uQPoss4Ro4pO8rR5MPTPYTDSr2JmLEKOA1fEFHElnYaste8Hn677cEy1ZKifJn5KFcPbQuHO5EabrmDvxp9ncjynmB85Gywkt3oi%2BEKTmqYIhtvRUZ4Q%2Fu1LfSpNFYYy5LhrvZ8vdyH6RDSvRr4mQP2Vd%2B1ZaLKl9Mg1QQ5AuTi%2BbmIZXLpxtIBY7hvTDgvNfOsf03C%2FguivSRI%2BQOVs7rCeWGo5Ih4mVoLoBQTd6yrAVnrfpWH2G7aAahh72PIis2Ou%2BIPtHfSxXJJFhR1VTjReY%2Fz0ULy%2FM8tQ7h4DVdwlwnnL58VhpoS9xT%2BBTchdTDABHwlKP1EPQ1C%2Ba1AmS8YPbPAEuVlkbanMLDF9CC9QcMywXap1iOI%2Fgakp%2BplD9St2XSidhn8Ut2tjtCGzebeP0PoSEu3olml63I3daY1I1B8i7TkRC6N5PLlDWZWF4j5Pm5pydpY%2F1863uDzOzpkT7X%2BIrmhaddhemIxoF3LVZomxijIQT4RuO7wJdjroZMHpD0yDDYi9bHBjqkAVVjacpUpvUPO%2BIFrl520KlliM%2FFdfs2b31vBCYftJOYRmDe5kzX9a85dUS9b7pcCzcG9%2F1gaJtlp4h9YLlPQThGCKIa1Z4BmXqKJBCb0r1tOx63xw6ACYONijtJD3ukkYIF6MOE7rkZLej2mk59OXjn7aSLzDnlyC5MydAkHkl%2F7mrSYu8u8SgmzZVJSYX3sTOnSO8IjuxhShbx5a8YuPJYN3r%2B&X-Amz-Signature=02c8da2430cc6113a809d7823f51c6fca9c7ba5b8496ddc4b602fea2d02bf3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
