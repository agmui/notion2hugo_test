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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDD7EVY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDMOTv64pqE7x9mVFys3pQvEWW6qEQGl9NyFoaG%2BuF%2FVQIgRr3fexLLw%2BAmApUSZmdiEjwJ%2FKieqCpnNhFooUPwIJsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHj9SXvpiTJfZeFiCyrcA6b2WrWfSLjm7A4uuhdUDA%2FhY1Be1oxvIjbpVsRnxV9WdIYKWnkyt2u62EJhzGz395%2ByXMIB%2FSTJTJVuNFqpm2%2Fi398%2FUmoyPvrZ7dBYNKEw8Jr3eomuqc9KWe03tUKTsi5Cr36l9lAhNZVLSOaOq9vWTYIaPoZWl%2FawKNkFufOZB9fxL%2BwXLL2bhHdRwMcm%2F4R3FFGn0bmCLgfxP60%2FAlAGC2JwkreUqaQQaPpf8VrmwZ%2BH76Tt8mudUPKrfsRwfRMksModW1iWatBWPR1gBc0cQFCj%2FhX68XFCCHo6d9NvP0LkaeuNb7Cy15rEphn51o8%2BPJKBe6LipExFamiTXlZ4W5oScJJSdUiVA1zgHs7f%2BnPoiAJq70K6ZrfPeWZwe8fI1LQ1HEUolrznPBgrvHQ%2B1uy9sjp8J%2FLgOORFzltxULy2c21NTNta3um4l%2Bl%2FwEwRYa%2FTHGrhEc6cHq0knJQ4CAU%2BuS9fKxEUXmIMelaBigDGg18C2HMpFw%2F56rxwfLSrVhuBJanJh%2FOU8N9kz1GtzSUP7P4iVQsU6YUPNHNNUHEkLIjjIT8Yhkslk9iSELv%2BJ2eMbB4BakmgSljpFhB92LbPTEkqR6IAehiluZ7Lmd2okHfowgqJBd8BMOHZiMQGOqUBYo3F07Kmham9oz6yKQrwGatZpbshDbx2Yz9%2FPh%2FRzj11tU%2Bb%2F6rsCeQ%2BhhAH%2BGta%2FZbcN0lDe%2F%2B9u%2B1X1sTH3A3ol9zKnnodpnyB0VtanDdu%2FLRqJLQuMZW0dBIDweTMulcdqUQ%2FO%2FBDJ2mQBLcky6Y71leNTARSODjqpvED8bHgMlUym4rYj66PXQ%2BhZqWMJbZupiQdalKKbATmTZlus7hbrD2B&X-Amz-Signature=585c23974f3ea07f5bafded8dd275e981001a289c11f40e00dcaefac4b191ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDD7EVY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDMOTv64pqE7x9mVFys3pQvEWW6qEQGl9NyFoaG%2BuF%2FVQIgRr3fexLLw%2BAmApUSZmdiEjwJ%2FKieqCpnNhFooUPwIJsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHj9SXvpiTJfZeFiCyrcA6b2WrWfSLjm7A4uuhdUDA%2FhY1Be1oxvIjbpVsRnxV9WdIYKWnkyt2u62EJhzGz395%2ByXMIB%2FSTJTJVuNFqpm2%2Fi398%2FUmoyPvrZ7dBYNKEw8Jr3eomuqc9KWe03tUKTsi5Cr36l9lAhNZVLSOaOq9vWTYIaPoZWl%2FawKNkFufOZB9fxL%2BwXLL2bhHdRwMcm%2F4R3FFGn0bmCLgfxP60%2FAlAGC2JwkreUqaQQaPpf8VrmwZ%2BH76Tt8mudUPKrfsRwfRMksModW1iWatBWPR1gBc0cQFCj%2FhX68XFCCHo6d9NvP0LkaeuNb7Cy15rEphn51o8%2BPJKBe6LipExFamiTXlZ4W5oScJJSdUiVA1zgHs7f%2BnPoiAJq70K6ZrfPeWZwe8fI1LQ1HEUolrznPBgrvHQ%2B1uy9sjp8J%2FLgOORFzltxULy2c21NTNta3um4l%2Bl%2FwEwRYa%2FTHGrhEc6cHq0knJQ4CAU%2BuS9fKxEUXmIMelaBigDGg18C2HMpFw%2F56rxwfLSrVhuBJanJh%2FOU8N9kz1GtzSUP7P4iVQsU6YUPNHNNUHEkLIjjIT8Yhkslk9iSELv%2BJ2eMbB4BakmgSljpFhB92LbPTEkqR6IAehiluZ7Lmd2okHfowgqJBd8BMOHZiMQGOqUBYo3F07Kmham9oz6yKQrwGatZpbshDbx2Yz9%2FPh%2FRzj11tU%2Bb%2F6rsCeQ%2BhhAH%2BGta%2FZbcN0lDe%2F%2B9u%2B1X1sTH3A3ol9zKnnodpnyB0VtanDdu%2FLRqJLQuMZW0dBIDweTMulcdqUQ%2FO%2FBDJ2mQBLcky6Y71leNTARSODjqpvED8bHgMlUym4rYj66PXQ%2BhZqWMJbZupiQdalKKbATmTZlus7hbrD2B&X-Amz-Signature=fe4b65e798006fb30f028fb61ab0db6bd6700d7f9faa9e32394ec01276a4fc83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDD7EVY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDMOTv64pqE7x9mVFys3pQvEWW6qEQGl9NyFoaG%2BuF%2FVQIgRr3fexLLw%2BAmApUSZmdiEjwJ%2FKieqCpnNhFooUPwIJsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHj9SXvpiTJfZeFiCyrcA6b2WrWfSLjm7A4uuhdUDA%2FhY1Be1oxvIjbpVsRnxV9WdIYKWnkyt2u62EJhzGz395%2ByXMIB%2FSTJTJVuNFqpm2%2Fi398%2FUmoyPvrZ7dBYNKEw8Jr3eomuqc9KWe03tUKTsi5Cr36l9lAhNZVLSOaOq9vWTYIaPoZWl%2FawKNkFufOZB9fxL%2BwXLL2bhHdRwMcm%2F4R3FFGn0bmCLgfxP60%2FAlAGC2JwkreUqaQQaPpf8VrmwZ%2BH76Tt8mudUPKrfsRwfRMksModW1iWatBWPR1gBc0cQFCj%2FhX68XFCCHo6d9NvP0LkaeuNb7Cy15rEphn51o8%2BPJKBe6LipExFamiTXlZ4W5oScJJSdUiVA1zgHs7f%2BnPoiAJq70K6ZrfPeWZwe8fI1LQ1HEUolrznPBgrvHQ%2B1uy9sjp8J%2FLgOORFzltxULy2c21NTNta3um4l%2Bl%2FwEwRYa%2FTHGrhEc6cHq0knJQ4CAU%2BuS9fKxEUXmIMelaBigDGg18C2HMpFw%2F56rxwfLSrVhuBJanJh%2FOU8N9kz1GtzSUP7P4iVQsU6YUPNHNNUHEkLIjjIT8Yhkslk9iSELv%2BJ2eMbB4BakmgSljpFhB92LbPTEkqR6IAehiluZ7Lmd2okHfowgqJBd8BMOHZiMQGOqUBYo3F07Kmham9oz6yKQrwGatZpbshDbx2Yz9%2FPh%2FRzj11tU%2Bb%2F6rsCeQ%2BhhAH%2BGta%2FZbcN0lDe%2F%2B9u%2B1X1sTH3A3ol9zKnnodpnyB0VtanDdu%2FLRqJLQuMZW0dBIDweTMulcdqUQ%2FO%2FBDJ2mQBLcky6Y71leNTARSODjqpvED8bHgMlUym4rYj66PXQ%2BhZqWMJbZupiQdalKKbATmTZlus7hbrD2B&X-Amz-Signature=9ffc3eeaaa856ced3ee783dfd524c5f8de83d2edcef9989ab1aaaef641c668ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDD7EVY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDMOTv64pqE7x9mVFys3pQvEWW6qEQGl9NyFoaG%2BuF%2FVQIgRr3fexLLw%2BAmApUSZmdiEjwJ%2FKieqCpnNhFooUPwIJsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHj9SXvpiTJfZeFiCyrcA6b2WrWfSLjm7A4uuhdUDA%2FhY1Be1oxvIjbpVsRnxV9WdIYKWnkyt2u62EJhzGz395%2ByXMIB%2FSTJTJVuNFqpm2%2Fi398%2FUmoyPvrZ7dBYNKEw8Jr3eomuqc9KWe03tUKTsi5Cr36l9lAhNZVLSOaOq9vWTYIaPoZWl%2FawKNkFufOZB9fxL%2BwXLL2bhHdRwMcm%2F4R3FFGn0bmCLgfxP60%2FAlAGC2JwkreUqaQQaPpf8VrmwZ%2BH76Tt8mudUPKrfsRwfRMksModW1iWatBWPR1gBc0cQFCj%2FhX68XFCCHo6d9NvP0LkaeuNb7Cy15rEphn51o8%2BPJKBe6LipExFamiTXlZ4W5oScJJSdUiVA1zgHs7f%2BnPoiAJq70K6ZrfPeWZwe8fI1LQ1HEUolrznPBgrvHQ%2B1uy9sjp8J%2FLgOORFzltxULy2c21NTNta3um4l%2Bl%2FwEwRYa%2FTHGrhEc6cHq0knJQ4CAU%2BuS9fKxEUXmIMelaBigDGg18C2HMpFw%2F56rxwfLSrVhuBJanJh%2FOU8N9kz1GtzSUP7P4iVQsU6YUPNHNNUHEkLIjjIT8Yhkslk9iSELv%2BJ2eMbB4BakmgSljpFhB92LbPTEkqR6IAehiluZ7Lmd2okHfowgqJBd8BMOHZiMQGOqUBYo3F07Kmham9oz6yKQrwGatZpbshDbx2Yz9%2FPh%2FRzj11tU%2Bb%2F6rsCeQ%2BhhAH%2BGta%2FZbcN0lDe%2F%2B9u%2B1X1sTH3A3ol9zKnnodpnyB0VtanDdu%2FLRqJLQuMZW0dBIDweTMulcdqUQ%2FO%2FBDJ2mQBLcky6Y71leNTARSODjqpvED8bHgMlUym4rYj66PXQ%2BhZqWMJbZupiQdalKKbATmTZlus7hbrD2B&X-Amz-Signature=6400a3991d78def85ff5d3930c3ab5d6cc6a5545baaf692b6656cac7061a26a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDD7EVY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDMOTv64pqE7x9mVFys3pQvEWW6qEQGl9NyFoaG%2BuF%2FVQIgRr3fexLLw%2BAmApUSZmdiEjwJ%2FKieqCpnNhFooUPwIJsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHj9SXvpiTJfZeFiCyrcA6b2WrWfSLjm7A4uuhdUDA%2FhY1Be1oxvIjbpVsRnxV9WdIYKWnkyt2u62EJhzGz395%2ByXMIB%2FSTJTJVuNFqpm2%2Fi398%2FUmoyPvrZ7dBYNKEw8Jr3eomuqc9KWe03tUKTsi5Cr36l9lAhNZVLSOaOq9vWTYIaPoZWl%2FawKNkFufOZB9fxL%2BwXLL2bhHdRwMcm%2F4R3FFGn0bmCLgfxP60%2FAlAGC2JwkreUqaQQaPpf8VrmwZ%2BH76Tt8mudUPKrfsRwfRMksModW1iWatBWPR1gBc0cQFCj%2FhX68XFCCHo6d9NvP0LkaeuNb7Cy15rEphn51o8%2BPJKBe6LipExFamiTXlZ4W5oScJJSdUiVA1zgHs7f%2BnPoiAJq70K6ZrfPeWZwe8fI1LQ1HEUolrznPBgrvHQ%2B1uy9sjp8J%2FLgOORFzltxULy2c21NTNta3um4l%2Bl%2FwEwRYa%2FTHGrhEc6cHq0knJQ4CAU%2BuS9fKxEUXmIMelaBigDGg18C2HMpFw%2F56rxwfLSrVhuBJanJh%2FOU8N9kz1GtzSUP7P4iVQsU6YUPNHNNUHEkLIjjIT8Yhkslk9iSELv%2BJ2eMbB4BakmgSljpFhB92LbPTEkqR6IAehiluZ7Lmd2okHfowgqJBd8BMOHZiMQGOqUBYo3F07Kmham9oz6yKQrwGatZpbshDbx2Yz9%2FPh%2FRzj11tU%2Bb%2F6rsCeQ%2BhhAH%2BGta%2FZbcN0lDe%2F%2B9u%2B1X1sTH3A3ol9zKnnodpnyB0VtanDdu%2FLRqJLQuMZW0dBIDweTMulcdqUQ%2FO%2FBDJ2mQBLcky6Y71leNTARSODjqpvED8bHgMlUym4rYj66PXQ%2BhZqWMJbZupiQdalKKbATmTZlus7hbrD2B&X-Amz-Signature=fb987831c117a54dd676fc90b6fea4eb5b372127c74c216096d9683c1224ceef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
