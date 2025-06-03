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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HNOHGL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDa9EPF%2Fw%2BTL1L2lcdt5RQDXEWPzux6vL%2BmkSge%2BZ5QZQIhAMuq4CjPfvd6j48DyTLS33SSok%2BekQ4BaBZes675bHJVKv8DCBwQABoMNjM3NDIzMTgzODA1Igz1FY4CALVdSNVgIKYq3AOkwVMUOhXIFYTJzTYsOCGTJm7KbO%2BKRIQK%2FO4USOe2v6rUJfJyFkKmmSkrayPaQPDiE6dsiWIuvnPYEgwK4HtSj3Lo2y%2BiuHuivUca%2FhV6Y%2F1Z6RRefUlaq2kZ04VvlYOtNU44waNDjo%2FdrET7rofzoGx1BujSbrXewOvNd20eFCrzQY2ZAtn3cOmvrfYzIygtJna2wMDi3WphcKlACt9xY2VTMHOBmm5abJuslbsjjoX8DQ2CoL4JNQPIhll85t0GwnGeux%2BDaXHvWTZnxlk6zsRDkHD5St7HjjrcZybw7fDGrCl0jJJOZ%2BRK7Mwcu2TQHxXtxbdFwrj%2BJmBvHCv89I%2FINMysGtHmXuKMQVxx3a889iJaGoj9q4YH7nyGgb2okG77BdoJUANIVuWBpH274ticOMpHTAG7%2FOj%2BG%2FYpBo2qG2nDA5qHtq1VQf1453hqQG%2F%2Bi1YnIgmc8Ck11hSEhhHNaxGd7StpPF5U5V%2BYnSAmBq8ka6VvnOx1KBL5QTGOC1qHyXSd2LXbRwCo5ksQR3LA7GKRSQ30FXX35zP1xvsk1XP1H%2B%2BBNoZGykh8oH3lWTE%2FkUhEVz80KsJ3RIgOpvYJ%2FsS6rIUsgJXcfuCkfRTr1PQlU9Q1v6P04jDBhf3BBjqkAYcb4YMFZVyz61TnENno%2FFrPR3SiIaxb2pnvkV5xDTvVUtX%2FXYyKrrR4FI7nMQY9x%2B3%2Bx9KwvbCenntLkQ01XxxZvMSKe3HHvut%2BnN6hVPWe9RrOHPb2lRw1jKLc4Z2hzfMaBJm%2FHaLJXbfiPfI3PeTjxE%2FlEcv2NaYwi29XiW29CIj8aCnFjPdQUr2Anfipe1Q3JpVE%2FGDdInzUhf%2FCycljVZyq&X-Amz-Signature=47e64edf7d15dd407b9afd79035f1a4d23196cd2edc81067da7eecc0f3402f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HNOHGL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDa9EPF%2Fw%2BTL1L2lcdt5RQDXEWPzux6vL%2BmkSge%2BZ5QZQIhAMuq4CjPfvd6j48DyTLS33SSok%2BekQ4BaBZes675bHJVKv8DCBwQABoMNjM3NDIzMTgzODA1Igz1FY4CALVdSNVgIKYq3AOkwVMUOhXIFYTJzTYsOCGTJm7KbO%2BKRIQK%2FO4USOe2v6rUJfJyFkKmmSkrayPaQPDiE6dsiWIuvnPYEgwK4HtSj3Lo2y%2BiuHuivUca%2FhV6Y%2F1Z6RRefUlaq2kZ04VvlYOtNU44waNDjo%2FdrET7rofzoGx1BujSbrXewOvNd20eFCrzQY2ZAtn3cOmvrfYzIygtJna2wMDi3WphcKlACt9xY2VTMHOBmm5abJuslbsjjoX8DQ2CoL4JNQPIhll85t0GwnGeux%2BDaXHvWTZnxlk6zsRDkHD5St7HjjrcZybw7fDGrCl0jJJOZ%2BRK7Mwcu2TQHxXtxbdFwrj%2BJmBvHCv89I%2FINMysGtHmXuKMQVxx3a889iJaGoj9q4YH7nyGgb2okG77BdoJUANIVuWBpH274ticOMpHTAG7%2FOj%2BG%2FYpBo2qG2nDA5qHtq1VQf1453hqQG%2F%2Bi1YnIgmc8Ck11hSEhhHNaxGd7StpPF5U5V%2BYnSAmBq8ka6VvnOx1KBL5QTGOC1qHyXSd2LXbRwCo5ksQR3LA7GKRSQ30FXX35zP1xvsk1XP1H%2B%2BBNoZGykh8oH3lWTE%2FkUhEVz80KsJ3RIgOpvYJ%2FsS6rIUsgJXcfuCkfRTr1PQlU9Q1v6P04jDBhf3BBjqkAYcb4YMFZVyz61TnENno%2FFrPR3SiIaxb2pnvkV5xDTvVUtX%2FXYyKrrR4FI7nMQY9x%2B3%2Bx9KwvbCenntLkQ01XxxZvMSKe3HHvut%2BnN6hVPWe9RrOHPb2lRw1jKLc4Z2hzfMaBJm%2FHaLJXbfiPfI3PeTjxE%2FlEcv2NaYwi29XiW29CIj8aCnFjPdQUr2Anfipe1Q3JpVE%2FGDdInzUhf%2FCycljVZyq&X-Amz-Signature=41615185b9eeb0ca9183e871689a8a0602266d9fbec925fc1dea2ec485a7295e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HNOHGL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDa9EPF%2Fw%2BTL1L2lcdt5RQDXEWPzux6vL%2BmkSge%2BZ5QZQIhAMuq4CjPfvd6j48DyTLS33SSok%2BekQ4BaBZes675bHJVKv8DCBwQABoMNjM3NDIzMTgzODA1Igz1FY4CALVdSNVgIKYq3AOkwVMUOhXIFYTJzTYsOCGTJm7KbO%2BKRIQK%2FO4USOe2v6rUJfJyFkKmmSkrayPaQPDiE6dsiWIuvnPYEgwK4HtSj3Lo2y%2BiuHuivUca%2FhV6Y%2F1Z6RRefUlaq2kZ04VvlYOtNU44waNDjo%2FdrET7rofzoGx1BujSbrXewOvNd20eFCrzQY2ZAtn3cOmvrfYzIygtJna2wMDi3WphcKlACt9xY2VTMHOBmm5abJuslbsjjoX8DQ2CoL4JNQPIhll85t0GwnGeux%2BDaXHvWTZnxlk6zsRDkHD5St7HjjrcZybw7fDGrCl0jJJOZ%2BRK7Mwcu2TQHxXtxbdFwrj%2BJmBvHCv89I%2FINMysGtHmXuKMQVxx3a889iJaGoj9q4YH7nyGgb2okG77BdoJUANIVuWBpH274ticOMpHTAG7%2FOj%2BG%2FYpBo2qG2nDA5qHtq1VQf1453hqQG%2F%2Bi1YnIgmc8Ck11hSEhhHNaxGd7StpPF5U5V%2BYnSAmBq8ka6VvnOx1KBL5QTGOC1qHyXSd2LXbRwCo5ksQR3LA7GKRSQ30FXX35zP1xvsk1XP1H%2B%2BBNoZGykh8oH3lWTE%2FkUhEVz80KsJ3RIgOpvYJ%2FsS6rIUsgJXcfuCkfRTr1PQlU9Q1v6P04jDBhf3BBjqkAYcb4YMFZVyz61TnENno%2FFrPR3SiIaxb2pnvkV5xDTvVUtX%2FXYyKrrR4FI7nMQY9x%2B3%2Bx9KwvbCenntLkQ01XxxZvMSKe3HHvut%2BnN6hVPWe9RrOHPb2lRw1jKLc4Z2hzfMaBJm%2FHaLJXbfiPfI3PeTjxE%2FlEcv2NaYwi29XiW29CIj8aCnFjPdQUr2Anfipe1Q3JpVE%2FGDdInzUhf%2FCycljVZyq&X-Amz-Signature=cfa1509e0a928b341f671990af5e2d339b5a16ddbd612cdcaebe7dcc6655c394&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HNOHGL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDa9EPF%2Fw%2BTL1L2lcdt5RQDXEWPzux6vL%2BmkSge%2BZ5QZQIhAMuq4CjPfvd6j48DyTLS33SSok%2BekQ4BaBZes675bHJVKv8DCBwQABoMNjM3NDIzMTgzODA1Igz1FY4CALVdSNVgIKYq3AOkwVMUOhXIFYTJzTYsOCGTJm7KbO%2BKRIQK%2FO4USOe2v6rUJfJyFkKmmSkrayPaQPDiE6dsiWIuvnPYEgwK4HtSj3Lo2y%2BiuHuivUca%2FhV6Y%2F1Z6RRefUlaq2kZ04VvlYOtNU44waNDjo%2FdrET7rofzoGx1BujSbrXewOvNd20eFCrzQY2ZAtn3cOmvrfYzIygtJna2wMDi3WphcKlACt9xY2VTMHOBmm5abJuslbsjjoX8DQ2CoL4JNQPIhll85t0GwnGeux%2BDaXHvWTZnxlk6zsRDkHD5St7HjjrcZybw7fDGrCl0jJJOZ%2BRK7Mwcu2TQHxXtxbdFwrj%2BJmBvHCv89I%2FINMysGtHmXuKMQVxx3a889iJaGoj9q4YH7nyGgb2okG77BdoJUANIVuWBpH274ticOMpHTAG7%2FOj%2BG%2FYpBo2qG2nDA5qHtq1VQf1453hqQG%2F%2Bi1YnIgmc8Ck11hSEhhHNaxGd7StpPF5U5V%2BYnSAmBq8ka6VvnOx1KBL5QTGOC1qHyXSd2LXbRwCo5ksQR3LA7GKRSQ30FXX35zP1xvsk1XP1H%2B%2BBNoZGykh8oH3lWTE%2FkUhEVz80KsJ3RIgOpvYJ%2FsS6rIUsgJXcfuCkfRTr1PQlU9Q1v6P04jDBhf3BBjqkAYcb4YMFZVyz61TnENno%2FFrPR3SiIaxb2pnvkV5xDTvVUtX%2FXYyKrrR4FI7nMQY9x%2B3%2Bx9KwvbCenntLkQ01XxxZvMSKe3HHvut%2BnN6hVPWe9RrOHPb2lRw1jKLc4Z2hzfMaBJm%2FHaLJXbfiPfI3PeTjxE%2FlEcv2NaYwi29XiW29CIj8aCnFjPdQUr2Anfipe1Q3JpVE%2FGDdInzUhf%2FCycljVZyq&X-Amz-Signature=59fde55148d06fe5657f34aff81352f9064cb3b1853fd15b8ca5716e3580c6d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HNOHGL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDa9EPF%2Fw%2BTL1L2lcdt5RQDXEWPzux6vL%2BmkSge%2BZ5QZQIhAMuq4CjPfvd6j48DyTLS33SSok%2BekQ4BaBZes675bHJVKv8DCBwQABoMNjM3NDIzMTgzODA1Igz1FY4CALVdSNVgIKYq3AOkwVMUOhXIFYTJzTYsOCGTJm7KbO%2BKRIQK%2FO4USOe2v6rUJfJyFkKmmSkrayPaQPDiE6dsiWIuvnPYEgwK4HtSj3Lo2y%2BiuHuivUca%2FhV6Y%2F1Z6RRefUlaq2kZ04VvlYOtNU44waNDjo%2FdrET7rofzoGx1BujSbrXewOvNd20eFCrzQY2ZAtn3cOmvrfYzIygtJna2wMDi3WphcKlACt9xY2VTMHOBmm5abJuslbsjjoX8DQ2CoL4JNQPIhll85t0GwnGeux%2BDaXHvWTZnxlk6zsRDkHD5St7HjjrcZybw7fDGrCl0jJJOZ%2BRK7Mwcu2TQHxXtxbdFwrj%2BJmBvHCv89I%2FINMysGtHmXuKMQVxx3a889iJaGoj9q4YH7nyGgb2okG77BdoJUANIVuWBpH274ticOMpHTAG7%2FOj%2BG%2FYpBo2qG2nDA5qHtq1VQf1453hqQG%2F%2Bi1YnIgmc8Ck11hSEhhHNaxGd7StpPF5U5V%2BYnSAmBq8ka6VvnOx1KBL5QTGOC1qHyXSd2LXbRwCo5ksQR3LA7GKRSQ30FXX35zP1xvsk1XP1H%2B%2BBNoZGykh8oH3lWTE%2FkUhEVz80KsJ3RIgOpvYJ%2FsS6rIUsgJXcfuCkfRTr1PQlU9Q1v6P04jDBhf3BBjqkAYcb4YMFZVyz61TnENno%2FFrPR3SiIaxb2pnvkV5xDTvVUtX%2FXYyKrrR4FI7nMQY9x%2B3%2Bx9KwvbCenntLkQ01XxxZvMSKe3HHvut%2BnN6hVPWe9RrOHPb2lRw1jKLc4Z2hzfMaBJm%2FHaLJXbfiPfI3PeTjxE%2FlEcv2NaYwi29XiW29CIj8aCnFjPdQUr2Anfipe1Q3JpVE%2FGDdInzUhf%2FCycljVZyq&X-Amz-Signature=1f71194665ae6d20b8666c48d4ba78cebd687a7a027f9536d464b30554778af5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
