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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6VJLFB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD9cU7YO1De3f6K8EMOEOLaviUyz%2FUquCjpCSjv9OqACQIgSAQXsWmfrQ3hGtE8DQ9%2FCjwoszf1mMKPrql0nEPRRz0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGOqIX1rzjaNpZobnircA7ct8dA%2BS0FCyjYFbY0zSXhf9E3CG7oSb85KbldYyNt7UOPdnIelv143sr7MV7aX0XgaRJyYN8jRG44EEPNNlzFNqkZ%2FrEcn4NxpkVyW8HCcEEaToBK%2FsqqGhVsr9suAnRWeBwq1uCWSfi1TV3s3%2BriGWZN1AdjyWp1PM8pQUwKM3JSBEXtg7rulogoRRbW1gnWqjd6n%2Bkcy5qHZsL1FZ1c3fsSus45yWyzw3xPpZ5B2xxBcRRCQvJkIgd3okZOA0v0epR1vh%2BEOJlTKkNFrSgtKY9O%2BGNIuyx7EMtWfaYlXA8ECgxIiacEOW%2BuxdZf8OGojLZIjbRqq5VrX4H50QcbblrYAl7nKsvApk9l371c6ylbPuKbycaIQKk4jLKOrEv6%2F2Pkq86Ym1LYeZWl7fzqPQpX%2Bz1Ffh2%2FWpns8rt9KA5O2McaC8Cla%2BKSjLzyMYBMrXmqvrpGCASc3oK9W%2B2nK1WD2J5aIuNivUrvCAb38F%2Fepe8AygCOeTvSPe3BYU1avZw7a4rdxvFBBNt0SYRg4KK2WwYUArkDAyCsXAI5GFZGxmqfAuDURZTlp67YnJHC5mmjwqxDiRum9MeWcJHmSQNee2CTgU2EC3Ld0vuJPOHOgPe6uwGPZRFF%2FMLeJ88IGOqUBBlDE%2Bh4Y%2Fj6c0axfLOMCkRv0EMF%2FWAEt%2Bzkga%2FkNW%2FOotQoM2KlZ4eULjfUw4TMfHzQdotSfjod9ya1saB1duTUxIL3h%2BcPRqctrLZDvKks0iKBSNzVB6czFa2iK1LiRlNBM27WKNxVzWQErY9VV9bOqsQ17%2BJ93wPD8ZmpIp1M6X4p0PWoliTSWiGwWnlIAfm25DHdDcBeJqgxsJg5gfAawNorN&X-Amz-Signature=b6d9ff9a8ab39d8d9aa86a27d2674261765b6bfb6486ef2c41dbabc90a744d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6VJLFB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD9cU7YO1De3f6K8EMOEOLaviUyz%2FUquCjpCSjv9OqACQIgSAQXsWmfrQ3hGtE8DQ9%2FCjwoszf1mMKPrql0nEPRRz0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGOqIX1rzjaNpZobnircA7ct8dA%2BS0FCyjYFbY0zSXhf9E3CG7oSb85KbldYyNt7UOPdnIelv143sr7MV7aX0XgaRJyYN8jRG44EEPNNlzFNqkZ%2FrEcn4NxpkVyW8HCcEEaToBK%2FsqqGhVsr9suAnRWeBwq1uCWSfi1TV3s3%2BriGWZN1AdjyWp1PM8pQUwKM3JSBEXtg7rulogoRRbW1gnWqjd6n%2Bkcy5qHZsL1FZ1c3fsSus45yWyzw3xPpZ5B2xxBcRRCQvJkIgd3okZOA0v0epR1vh%2BEOJlTKkNFrSgtKY9O%2BGNIuyx7EMtWfaYlXA8ECgxIiacEOW%2BuxdZf8OGojLZIjbRqq5VrX4H50QcbblrYAl7nKsvApk9l371c6ylbPuKbycaIQKk4jLKOrEv6%2F2Pkq86Ym1LYeZWl7fzqPQpX%2Bz1Ffh2%2FWpns8rt9KA5O2McaC8Cla%2BKSjLzyMYBMrXmqvrpGCASc3oK9W%2B2nK1WD2J5aIuNivUrvCAb38F%2Fepe8AygCOeTvSPe3BYU1avZw7a4rdxvFBBNt0SYRg4KK2WwYUArkDAyCsXAI5GFZGxmqfAuDURZTlp67YnJHC5mmjwqxDiRum9MeWcJHmSQNee2CTgU2EC3Ld0vuJPOHOgPe6uwGPZRFF%2FMLeJ88IGOqUBBlDE%2Bh4Y%2Fj6c0axfLOMCkRv0EMF%2FWAEt%2Bzkga%2FkNW%2FOotQoM2KlZ4eULjfUw4TMfHzQdotSfjod9ya1saB1duTUxIL3h%2BcPRqctrLZDvKks0iKBSNzVB6czFa2iK1LiRlNBM27WKNxVzWQErY9VV9bOqsQ17%2BJ93wPD8ZmpIp1M6X4p0PWoliTSWiGwWnlIAfm25DHdDcBeJqgxsJg5gfAawNorN&X-Amz-Signature=e35cb5a225335237d45b2af179dee7ccc27801bd4da3e65d317c96a852b5ed6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6VJLFB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD9cU7YO1De3f6K8EMOEOLaviUyz%2FUquCjpCSjv9OqACQIgSAQXsWmfrQ3hGtE8DQ9%2FCjwoszf1mMKPrql0nEPRRz0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGOqIX1rzjaNpZobnircA7ct8dA%2BS0FCyjYFbY0zSXhf9E3CG7oSb85KbldYyNt7UOPdnIelv143sr7MV7aX0XgaRJyYN8jRG44EEPNNlzFNqkZ%2FrEcn4NxpkVyW8HCcEEaToBK%2FsqqGhVsr9suAnRWeBwq1uCWSfi1TV3s3%2BriGWZN1AdjyWp1PM8pQUwKM3JSBEXtg7rulogoRRbW1gnWqjd6n%2Bkcy5qHZsL1FZ1c3fsSus45yWyzw3xPpZ5B2xxBcRRCQvJkIgd3okZOA0v0epR1vh%2BEOJlTKkNFrSgtKY9O%2BGNIuyx7EMtWfaYlXA8ECgxIiacEOW%2BuxdZf8OGojLZIjbRqq5VrX4H50QcbblrYAl7nKsvApk9l371c6ylbPuKbycaIQKk4jLKOrEv6%2F2Pkq86Ym1LYeZWl7fzqPQpX%2Bz1Ffh2%2FWpns8rt9KA5O2McaC8Cla%2BKSjLzyMYBMrXmqvrpGCASc3oK9W%2B2nK1WD2J5aIuNivUrvCAb38F%2Fepe8AygCOeTvSPe3BYU1avZw7a4rdxvFBBNt0SYRg4KK2WwYUArkDAyCsXAI5GFZGxmqfAuDURZTlp67YnJHC5mmjwqxDiRum9MeWcJHmSQNee2CTgU2EC3Ld0vuJPOHOgPe6uwGPZRFF%2FMLeJ88IGOqUBBlDE%2Bh4Y%2Fj6c0axfLOMCkRv0EMF%2FWAEt%2Bzkga%2FkNW%2FOotQoM2KlZ4eULjfUw4TMfHzQdotSfjod9ya1saB1duTUxIL3h%2BcPRqctrLZDvKks0iKBSNzVB6czFa2iK1LiRlNBM27WKNxVzWQErY9VV9bOqsQ17%2BJ93wPD8ZmpIp1M6X4p0PWoliTSWiGwWnlIAfm25DHdDcBeJqgxsJg5gfAawNorN&X-Amz-Signature=42540fe6db9dc63084d02d774ce82a2c198ca9b94ef9054a0d4d7266ac7c8fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6VJLFB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD9cU7YO1De3f6K8EMOEOLaviUyz%2FUquCjpCSjv9OqACQIgSAQXsWmfrQ3hGtE8DQ9%2FCjwoszf1mMKPrql0nEPRRz0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGOqIX1rzjaNpZobnircA7ct8dA%2BS0FCyjYFbY0zSXhf9E3CG7oSb85KbldYyNt7UOPdnIelv143sr7MV7aX0XgaRJyYN8jRG44EEPNNlzFNqkZ%2FrEcn4NxpkVyW8HCcEEaToBK%2FsqqGhVsr9suAnRWeBwq1uCWSfi1TV3s3%2BriGWZN1AdjyWp1PM8pQUwKM3JSBEXtg7rulogoRRbW1gnWqjd6n%2Bkcy5qHZsL1FZ1c3fsSus45yWyzw3xPpZ5B2xxBcRRCQvJkIgd3okZOA0v0epR1vh%2BEOJlTKkNFrSgtKY9O%2BGNIuyx7EMtWfaYlXA8ECgxIiacEOW%2BuxdZf8OGojLZIjbRqq5VrX4H50QcbblrYAl7nKsvApk9l371c6ylbPuKbycaIQKk4jLKOrEv6%2F2Pkq86Ym1LYeZWl7fzqPQpX%2Bz1Ffh2%2FWpns8rt9KA5O2McaC8Cla%2BKSjLzyMYBMrXmqvrpGCASc3oK9W%2B2nK1WD2J5aIuNivUrvCAb38F%2Fepe8AygCOeTvSPe3BYU1avZw7a4rdxvFBBNt0SYRg4KK2WwYUArkDAyCsXAI5GFZGxmqfAuDURZTlp67YnJHC5mmjwqxDiRum9MeWcJHmSQNee2CTgU2EC3Ld0vuJPOHOgPe6uwGPZRFF%2FMLeJ88IGOqUBBlDE%2Bh4Y%2Fj6c0axfLOMCkRv0EMF%2FWAEt%2Bzkga%2FkNW%2FOotQoM2KlZ4eULjfUw4TMfHzQdotSfjod9ya1saB1duTUxIL3h%2BcPRqctrLZDvKks0iKBSNzVB6czFa2iK1LiRlNBM27WKNxVzWQErY9VV9bOqsQ17%2BJ93wPD8ZmpIp1M6X4p0PWoliTSWiGwWnlIAfm25DHdDcBeJqgxsJg5gfAawNorN&X-Amz-Signature=7d4f77c80d32f35d97653e361d1d008f8bdcfabbce3212defc579d6b356b8572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6VJLFB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD9cU7YO1De3f6K8EMOEOLaviUyz%2FUquCjpCSjv9OqACQIgSAQXsWmfrQ3hGtE8DQ9%2FCjwoszf1mMKPrql0nEPRRz0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGOqIX1rzjaNpZobnircA7ct8dA%2BS0FCyjYFbY0zSXhf9E3CG7oSb85KbldYyNt7UOPdnIelv143sr7MV7aX0XgaRJyYN8jRG44EEPNNlzFNqkZ%2FrEcn4NxpkVyW8HCcEEaToBK%2FsqqGhVsr9suAnRWeBwq1uCWSfi1TV3s3%2BriGWZN1AdjyWp1PM8pQUwKM3JSBEXtg7rulogoRRbW1gnWqjd6n%2Bkcy5qHZsL1FZ1c3fsSus45yWyzw3xPpZ5B2xxBcRRCQvJkIgd3okZOA0v0epR1vh%2BEOJlTKkNFrSgtKY9O%2BGNIuyx7EMtWfaYlXA8ECgxIiacEOW%2BuxdZf8OGojLZIjbRqq5VrX4H50QcbblrYAl7nKsvApk9l371c6ylbPuKbycaIQKk4jLKOrEv6%2F2Pkq86Ym1LYeZWl7fzqPQpX%2Bz1Ffh2%2FWpns8rt9KA5O2McaC8Cla%2BKSjLzyMYBMrXmqvrpGCASc3oK9W%2B2nK1WD2J5aIuNivUrvCAb38F%2Fepe8AygCOeTvSPe3BYU1avZw7a4rdxvFBBNt0SYRg4KK2WwYUArkDAyCsXAI5GFZGxmqfAuDURZTlp67YnJHC5mmjwqxDiRum9MeWcJHmSQNee2CTgU2EC3Ld0vuJPOHOgPe6uwGPZRFF%2FMLeJ88IGOqUBBlDE%2Bh4Y%2Fj6c0axfLOMCkRv0EMF%2FWAEt%2Bzkga%2FkNW%2FOotQoM2KlZ4eULjfUw4TMfHzQdotSfjod9ya1saB1duTUxIL3h%2BcPRqctrLZDvKks0iKBSNzVB6czFa2iK1LiRlNBM27WKNxVzWQErY9VV9bOqsQ17%2BJ93wPD8ZmpIp1M6X4p0PWoliTSWiGwWnlIAfm25DHdDcBeJqgxsJg5gfAawNorN&X-Amz-Signature=297533f3b21a6922fa8c55434f2333dbcad97415db2f97bb1ad4ae0e348b859c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
