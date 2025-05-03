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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDLG6RA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC9IDDba8Zlu8tJGd93vBdlBJnPYRU%2FwL8FcA3xpHVkVAiEAi%2B4dfY287X5H0icO7DdBK4cRLAz33ygEHeg7r6tPI%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV4dK2jVC1ScVKqsyrcA3T02Dh%2Bpoo8gJab%2FuUFRoTAHbwxTV1pELZ3R4u8v5m0LTRo6Q%2FxUr1%2BvH%2FQBy7LYmLc0bGPQOs3TLdf5JAGW5NopfcFf0j1hv9L5VLodCcyS%2F6hpdqQaxB%2FvfYbP5C8BZ%2BWMIYKJ153byrTT2AE9Z2lxrvkiFn%2F7C2t5iiIiS2S3sGG4eGw53pGFrDRKrp8v%2FB4Tww0zU5icC%2B8lMWxHlxiq9SaCbOdjlwPsv4enUjIb3fzZRu2YenFU1SuPfYf8icEPZaxS5%2FoDIYdFew2lAqq2mAupg%2B0xwQkt2Vvr1ye2Rf3N3NNIIcgMJu%2FaIZeednX8NCNWbvdMNZeTLeMa6A52RPA%2FN5%2FsiqYUzEBUezR3%2BL5Zw7DwUxgVgaTmMq8Q2546bHsxTrHApKcWsJX8%2FExnSCyVHj2%2B4Nib83LcmMTSGKBSBEpdCuuEARJOPyIswq3S0hvwEF6tHg1beKEtj8GSY8Zw4lMNvOR5p6XveEHNHIEA4zHUz3wGSS62hskjshxmC4oNs5CWoqskvGZ5uvbShX%2BigqOS1BQjTwspXNdfT%2B88fee80fOMLWG4WlMWAJLogi8pgbFw0bMyHzAfO2YSCeqSWMhELkvMyHp0mD3kP4aLrMQ4r8GrKGnMPDe18AGOqUBCP0RQAdG54PbMO5NZSFBUuUZdXEVd%2F8G1QpW7xwbXq%2B1oPHuUgG00JOl9MEr7Ij0mIQLerjukYZ%2BDBj8BTynKPCcXUr5Quojv1xnm5ftRmqtMeU6C5scw8dPYtmoWw7KbYwhJut1pH3GzKmhfds%2BmUD3kgbsy%2BlBYpSxnJk1llnY3jP8pQbCfemhQ%2FefzuxbRsl1SQ2yPhAUg1Dis1NzXtd23nhj&X-Amz-Signature=9c34d6ecf2f447746fcf2930f1a809d8cecd7c875b537bcdd6127699ed7bebf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDLG6RA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC9IDDba8Zlu8tJGd93vBdlBJnPYRU%2FwL8FcA3xpHVkVAiEAi%2B4dfY287X5H0icO7DdBK4cRLAz33ygEHeg7r6tPI%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV4dK2jVC1ScVKqsyrcA3T02Dh%2Bpoo8gJab%2FuUFRoTAHbwxTV1pELZ3R4u8v5m0LTRo6Q%2FxUr1%2BvH%2FQBy7LYmLc0bGPQOs3TLdf5JAGW5NopfcFf0j1hv9L5VLodCcyS%2F6hpdqQaxB%2FvfYbP5C8BZ%2BWMIYKJ153byrTT2AE9Z2lxrvkiFn%2F7C2t5iiIiS2S3sGG4eGw53pGFrDRKrp8v%2FB4Tww0zU5icC%2B8lMWxHlxiq9SaCbOdjlwPsv4enUjIb3fzZRu2YenFU1SuPfYf8icEPZaxS5%2FoDIYdFew2lAqq2mAupg%2B0xwQkt2Vvr1ye2Rf3N3NNIIcgMJu%2FaIZeednX8NCNWbvdMNZeTLeMa6A52RPA%2FN5%2FsiqYUzEBUezR3%2BL5Zw7DwUxgVgaTmMq8Q2546bHsxTrHApKcWsJX8%2FExnSCyVHj2%2B4Nib83LcmMTSGKBSBEpdCuuEARJOPyIswq3S0hvwEF6tHg1beKEtj8GSY8Zw4lMNvOR5p6XveEHNHIEA4zHUz3wGSS62hskjshxmC4oNs5CWoqskvGZ5uvbShX%2BigqOS1BQjTwspXNdfT%2B88fee80fOMLWG4WlMWAJLogi8pgbFw0bMyHzAfO2YSCeqSWMhELkvMyHp0mD3kP4aLrMQ4r8GrKGnMPDe18AGOqUBCP0RQAdG54PbMO5NZSFBUuUZdXEVd%2F8G1QpW7xwbXq%2B1oPHuUgG00JOl9MEr7Ij0mIQLerjukYZ%2BDBj8BTynKPCcXUr5Quojv1xnm5ftRmqtMeU6C5scw8dPYtmoWw7KbYwhJut1pH3GzKmhfds%2BmUD3kgbsy%2BlBYpSxnJk1llnY3jP8pQbCfemhQ%2FefzuxbRsl1SQ2yPhAUg1Dis1NzXtd23nhj&X-Amz-Signature=da612f03479481cd6baf6eceb3737cea9489c232e9baf94284d8722a0e7f54fa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDLG6RA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC9IDDba8Zlu8tJGd93vBdlBJnPYRU%2FwL8FcA3xpHVkVAiEAi%2B4dfY287X5H0icO7DdBK4cRLAz33ygEHeg7r6tPI%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV4dK2jVC1ScVKqsyrcA3T02Dh%2Bpoo8gJab%2FuUFRoTAHbwxTV1pELZ3R4u8v5m0LTRo6Q%2FxUr1%2BvH%2FQBy7LYmLc0bGPQOs3TLdf5JAGW5NopfcFf0j1hv9L5VLodCcyS%2F6hpdqQaxB%2FvfYbP5C8BZ%2BWMIYKJ153byrTT2AE9Z2lxrvkiFn%2F7C2t5iiIiS2S3sGG4eGw53pGFrDRKrp8v%2FB4Tww0zU5icC%2B8lMWxHlxiq9SaCbOdjlwPsv4enUjIb3fzZRu2YenFU1SuPfYf8icEPZaxS5%2FoDIYdFew2lAqq2mAupg%2B0xwQkt2Vvr1ye2Rf3N3NNIIcgMJu%2FaIZeednX8NCNWbvdMNZeTLeMa6A52RPA%2FN5%2FsiqYUzEBUezR3%2BL5Zw7DwUxgVgaTmMq8Q2546bHsxTrHApKcWsJX8%2FExnSCyVHj2%2B4Nib83LcmMTSGKBSBEpdCuuEARJOPyIswq3S0hvwEF6tHg1beKEtj8GSY8Zw4lMNvOR5p6XveEHNHIEA4zHUz3wGSS62hskjshxmC4oNs5CWoqskvGZ5uvbShX%2BigqOS1BQjTwspXNdfT%2B88fee80fOMLWG4WlMWAJLogi8pgbFw0bMyHzAfO2YSCeqSWMhELkvMyHp0mD3kP4aLrMQ4r8GrKGnMPDe18AGOqUBCP0RQAdG54PbMO5NZSFBUuUZdXEVd%2F8G1QpW7xwbXq%2B1oPHuUgG00JOl9MEr7Ij0mIQLerjukYZ%2BDBj8BTynKPCcXUr5Quojv1xnm5ftRmqtMeU6C5scw8dPYtmoWw7KbYwhJut1pH3GzKmhfds%2BmUD3kgbsy%2BlBYpSxnJk1llnY3jP8pQbCfemhQ%2FefzuxbRsl1SQ2yPhAUg1Dis1NzXtd23nhj&X-Amz-Signature=fc8fd3a592566e2fc6622d4ba443f11eb073ee67e817bb2f1bc11795ddb0fe37&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDLG6RA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC9IDDba8Zlu8tJGd93vBdlBJnPYRU%2FwL8FcA3xpHVkVAiEAi%2B4dfY287X5H0icO7DdBK4cRLAz33ygEHeg7r6tPI%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV4dK2jVC1ScVKqsyrcA3T02Dh%2Bpoo8gJab%2FuUFRoTAHbwxTV1pELZ3R4u8v5m0LTRo6Q%2FxUr1%2BvH%2FQBy7LYmLc0bGPQOs3TLdf5JAGW5NopfcFf0j1hv9L5VLodCcyS%2F6hpdqQaxB%2FvfYbP5C8BZ%2BWMIYKJ153byrTT2AE9Z2lxrvkiFn%2F7C2t5iiIiS2S3sGG4eGw53pGFrDRKrp8v%2FB4Tww0zU5icC%2B8lMWxHlxiq9SaCbOdjlwPsv4enUjIb3fzZRu2YenFU1SuPfYf8icEPZaxS5%2FoDIYdFew2lAqq2mAupg%2B0xwQkt2Vvr1ye2Rf3N3NNIIcgMJu%2FaIZeednX8NCNWbvdMNZeTLeMa6A52RPA%2FN5%2FsiqYUzEBUezR3%2BL5Zw7DwUxgVgaTmMq8Q2546bHsxTrHApKcWsJX8%2FExnSCyVHj2%2B4Nib83LcmMTSGKBSBEpdCuuEARJOPyIswq3S0hvwEF6tHg1beKEtj8GSY8Zw4lMNvOR5p6XveEHNHIEA4zHUz3wGSS62hskjshxmC4oNs5CWoqskvGZ5uvbShX%2BigqOS1BQjTwspXNdfT%2B88fee80fOMLWG4WlMWAJLogi8pgbFw0bMyHzAfO2YSCeqSWMhELkvMyHp0mD3kP4aLrMQ4r8GrKGnMPDe18AGOqUBCP0RQAdG54PbMO5NZSFBUuUZdXEVd%2F8G1QpW7xwbXq%2B1oPHuUgG00JOl9MEr7Ij0mIQLerjukYZ%2BDBj8BTynKPCcXUr5Quojv1xnm5ftRmqtMeU6C5scw8dPYtmoWw7KbYwhJut1pH3GzKmhfds%2BmUD3kgbsy%2BlBYpSxnJk1llnY3jP8pQbCfemhQ%2FefzuxbRsl1SQ2yPhAUg1Dis1NzXtd23nhj&X-Amz-Signature=0e673d14b12a7ffa42c60c5724de1678012f23d959a3e95cd6577ab9039873ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDLG6RA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC9IDDba8Zlu8tJGd93vBdlBJnPYRU%2FwL8FcA3xpHVkVAiEAi%2B4dfY287X5H0icO7DdBK4cRLAz33ygEHeg7r6tPI%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV4dK2jVC1ScVKqsyrcA3T02Dh%2Bpoo8gJab%2FuUFRoTAHbwxTV1pELZ3R4u8v5m0LTRo6Q%2FxUr1%2BvH%2FQBy7LYmLc0bGPQOs3TLdf5JAGW5NopfcFf0j1hv9L5VLodCcyS%2F6hpdqQaxB%2FvfYbP5C8BZ%2BWMIYKJ153byrTT2AE9Z2lxrvkiFn%2F7C2t5iiIiS2S3sGG4eGw53pGFrDRKrp8v%2FB4Tww0zU5icC%2B8lMWxHlxiq9SaCbOdjlwPsv4enUjIb3fzZRu2YenFU1SuPfYf8icEPZaxS5%2FoDIYdFew2lAqq2mAupg%2B0xwQkt2Vvr1ye2Rf3N3NNIIcgMJu%2FaIZeednX8NCNWbvdMNZeTLeMa6A52RPA%2FN5%2FsiqYUzEBUezR3%2BL5Zw7DwUxgVgaTmMq8Q2546bHsxTrHApKcWsJX8%2FExnSCyVHj2%2B4Nib83LcmMTSGKBSBEpdCuuEARJOPyIswq3S0hvwEF6tHg1beKEtj8GSY8Zw4lMNvOR5p6XveEHNHIEA4zHUz3wGSS62hskjshxmC4oNs5CWoqskvGZ5uvbShX%2BigqOS1BQjTwspXNdfT%2B88fee80fOMLWG4WlMWAJLogi8pgbFw0bMyHzAfO2YSCeqSWMhELkvMyHp0mD3kP4aLrMQ4r8GrKGnMPDe18AGOqUBCP0RQAdG54PbMO5NZSFBUuUZdXEVd%2F8G1QpW7xwbXq%2B1oPHuUgG00JOl9MEr7Ij0mIQLerjukYZ%2BDBj8BTynKPCcXUr5Quojv1xnm5ftRmqtMeU6C5scw8dPYtmoWw7KbYwhJut1pH3GzKmhfds%2BmUD3kgbsy%2BlBYpSxnJk1llnY3jP8pQbCfemhQ%2FefzuxbRsl1SQ2yPhAUg1Dis1NzXtd23nhj&X-Amz-Signature=23f88715a311b55ce229868e441837bdc98c0da7d9d44d7499c853d5529d02c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
