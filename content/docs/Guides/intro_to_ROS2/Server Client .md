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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGTUSYQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeHQBMaim47DwKg%2FOgZVnHvv7hge9m17IDbWWvtcZ94AiEAnlZqiP5EKz6q4nVcBt0F%2Fz1J%2BSSs8fk8yM1wwLydT%2FQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMDMKBszl8RqZ1ODtircAzgoSK6BXsi5MsTbdUvUBdPKbPJxfv65euRdAwyNq58su1QsX2fxXUwsq1aGaL10wHZmnhf7WRNS9YQTt52wXqNIPmgg%2FUWgjT3na62z84DdolcDdfI6ElGM2M%2FV5FujmmvP%2BdCpdxBlEOWKEA2M05bFKDcXb1pqjN01nTDwjRfrURb5tfpdRsSlwzA9hkbE%2FVZJJlFB0GSOtx6lIRANniQQjPxy8fKdTfQ3RbwY%2BlYjH7NuqJM7T3%2FggQbihs3KOy0Yde7kREtJxE136sf5mA7lmM9gHcGcKU%2FbHSiXdMWydt14RS%2BP8nUJKmHypmWXPD4J4JWIyEwKDs03ZtFn7BebPEgtr3wbXPwhGgtsURbDzqrA7f%2Fnhucapc%2FPqJEe31IDe3hGQUEuyE1tVbw3Pf%2Fc734uoMpid%2ByyNnMIUf5wju6TftIQlZXDoORqP8xdkeXCrg457ORymC4UIwkwX%2FhtnGAB4B5cSAvrNDHk3Kp8buFwQuv2kLYDhtKGNQ1%2BvZzpLlKg693YhT49wtNUwPS%2Fq1BDM8sGCIBxzptM9emj3VWLkjbKhCQNTqEGp7Vqr%2Fe1it2xBtT30vt0PQSSoOXN%2F40B6V1gF4EPk9z78sUENudyNlBvVtuUngFcMN6%2Flr8GOqUBQ%2Bk2KevYtdiYnWGXRig0i19JScOlQ%2Bq8x%2FgpXu%2BTuFROm24197nqzEvfKJfwMVc6TjgjuXBQq3%2BL0tFa%2Fou50hN1qP9kyQNlIa307amLzGsn95wW005P31wVh75XRkvufCpQYK1rug9qQEzT3PiAaH7w%2Fc1spYAJpjySmtO%2FFP%2FG8voLJbd8g2M0VbWwdtwqdl8ACXCEJGH1fe2ln%2BildXT8cFWp&X-Amz-Signature=400226896213078dc31e0f3a25e1900309cf58057c6ca2a85e6b6e9e490dd57e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGTUSYQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeHQBMaim47DwKg%2FOgZVnHvv7hge9m17IDbWWvtcZ94AiEAnlZqiP5EKz6q4nVcBt0F%2Fz1J%2BSSs8fk8yM1wwLydT%2FQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMDMKBszl8RqZ1ODtircAzgoSK6BXsi5MsTbdUvUBdPKbPJxfv65euRdAwyNq58su1QsX2fxXUwsq1aGaL10wHZmnhf7WRNS9YQTt52wXqNIPmgg%2FUWgjT3na62z84DdolcDdfI6ElGM2M%2FV5FujmmvP%2BdCpdxBlEOWKEA2M05bFKDcXb1pqjN01nTDwjRfrURb5tfpdRsSlwzA9hkbE%2FVZJJlFB0GSOtx6lIRANniQQjPxy8fKdTfQ3RbwY%2BlYjH7NuqJM7T3%2FggQbihs3KOy0Yde7kREtJxE136sf5mA7lmM9gHcGcKU%2FbHSiXdMWydt14RS%2BP8nUJKmHypmWXPD4J4JWIyEwKDs03ZtFn7BebPEgtr3wbXPwhGgtsURbDzqrA7f%2Fnhucapc%2FPqJEe31IDe3hGQUEuyE1tVbw3Pf%2Fc734uoMpid%2ByyNnMIUf5wju6TftIQlZXDoORqP8xdkeXCrg457ORymC4UIwkwX%2FhtnGAB4B5cSAvrNDHk3Kp8buFwQuv2kLYDhtKGNQ1%2BvZzpLlKg693YhT49wtNUwPS%2Fq1BDM8sGCIBxzptM9emj3VWLkjbKhCQNTqEGp7Vqr%2Fe1it2xBtT30vt0PQSSoOXN%2F40B6V1gF4EPk9z78sUENudyNlBvVtuUngFcMN6%2Flr8GOqUBQ%2Bk2KevYtdiYnWGXRig0i19JScOlQ%2Bq8x%2FgpXu%2BTuFROm24197nqzEvfKJfwMVc6TjgjuXBQq3%2BL0tFa%2Fou50hN1qP9kyQNlIa307amLzGsn95wW005P31wVh75XRkvufCpQYK1rug9qQEzT3PiAaH7w%2Fc1spYAJpjySmtO%2FFP%2FG8voLJbd8g2M0VbWwdtwqdl8ACXCEJGH1fe2ln%2BildXT8cFWp&X-Amz-Signature=602e4bbf132869b0903c82dd4479c3d3d89bc322d74a5d5bbb7aa1a339dde5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGTUSYQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeHQBMaim47DwKg%2FOgZVnHvv7hge9m17IDbWWvtcZ94AiEAnlZqiP5EKz6q4nVcBt0F%2Fz1J%2BSSs8fk8yM1wwLydT%2FQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMDMKBszl8RqZ1ODtircAzgoSK6BXsi5MsTbdUvUBdPKbPJxfv65euRdAwyNq58su1QsX2fxXUwsq1aGaL10wHZmnhf7WRNS9YQTt52wXqNIPmgg%2FUWgjT3na62z84DdolcDdfI6ElGM2M%2FV5FujmmvP%2BdCpdxBlEOWKEA2M05bFKDcXb1pqjN01nTDwjRfrURb5tfpdRsSlwzA9hkbE%2FVZJJlFB0GSOtx6lIRANniQQjPxy8fKdTfQ3RbwY%2BlYjH7NuqJM7T3%2FggQbihs3KOy0Yde7kREtJxE136sf5mA7lmM9gHcGcKU%2FbHSiXdMWydt14RS%2BP8nUJKmHypmWXPD4J4JWIyEwKDs03ZtFn7BebPEgtr3wbXPwhGgtsURbDzqrA7f%2Fnhucapc%2FPqJEe31IDe3hGQUEuyE1tVbw3Pf%2Fc734uoMpid%2ByyNnMIUf5wju6TftIQlZXDoORqP8xdkeXCrg457ORymC4UIwkwX%2FhtnGAB4B5cSAvrNDHk3Kp8buFwQuv2kLYDhtKGNQ1%2BvZzpLlKg693YhT49wtNUwPS%2Fq1BDM8sGCIBxzptM9emj3VWLkjbKhCQNTqEGp7Vqr%2Fe1it2xBtT30vt0PQSSoOXN%2F40B6V1gF4EPk9z78sUENudyNlBvVtuUngFcMN6%2Flr8GOqUBQ%2Bk2KevYtdiYnWGXRig0i19JScOlQ%2Bq8x%2FgpXu%2BTuFROm24197nqzEvfKJfwMVc6TjgjuXBQq3%2BL0tFa%2Fou50hN1qP9kyQNlIa307amLzGsn95wW005P31wVh75XRkvufCpQYK1rug9qQEzT3PiAaH7w%2Fc1spYAJpjySmtO%2FFP%2FG8voLJbd8g2M0VbWwdtwqdl8ACXCEJGH1fe2ln%2BildXT8cFWp&X-Amz-Signature=6efc5cda0a2d5e38f086f089289b2c1c6436855dd1ecbf7fd86cb6b708c183a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGTUSYQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeHQBMaim47DwKg%2FOgZVnHvv7hge9m17IDbWWvtcZ94AiEAnlZqiP5EKz6q4nVcBt0F%2Fz1J%2BSSs8fk8yM1wwLydT%2FQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMDMKBszl8RqZ1ODtircAzgoSK6BXsi5MsTbdUvUBdPKbPJxfv65euRdAwyNq58su1QsX2fxXUwsq1aGaL10wHZmnhf7WRNS9YQTt52wXqNIPmgg%2FUWgjT3na62z84DdolcDdfI6ElGM2M%2FV5FujmmvP%2BdCpdxBlEOWKEA2M05bFKDcXb1pqjN01nTDwjRfrURb5tfpdRsSlwzA9hkbE%2FVZJJlFB0GSOtx6lIRANniQQjPxy8fKdTfQ3RbwY%2BlYjH7NuqJM7T3%2FggQbihs3KOy0Yde7kREtJxE136sf5mA7lmM9gHcGcKU%2FbHSiXdMWydt14RS%2BP8nUJKmHypmWXPD4J4JWIyEwKDs03ZtFn7BebPEgtr3wbXPwhGgtsURbDzqrA7f%2Fnhucapc%2FPqJEe31IDe3hGQUEuyE1tVbw3Pf%2Fc734uoMpid%2ByyNnMIUf5wju6TftIQlZXDoORqP8xdkeXCrg457ORymC4UIwkwX%2FhtnGAB4B5cSAvrNDHk3Kp8buFwQuv2kLYDhtKGNQ1%2BvZzpLlKg693YhT49wtNUwPS%2Fq1BDM8sGCIBxzptM9emj3VWLkjbKhCQNTqEGp7Vqr%2Fe1it2xBtT30vt0PQSSoOXN%2F40B6V1gF4EPk9z78sUENudyNlBvVtuUngFcMN6%2Flr8GOqUBQ%2Bk2KevYtdiYnWGXRig0i19JScOlQ%2Bq8x%2FgpXu%2BTuFROm24197nqzEvfKJfwMVc6TjgjuXBQq3%2BL0tFa%2Fou50hN1qP9kyQNlIa307amLzGsn95wW005P31wVh75XRkvufCpQYK1rug9qQEzT3PiAaH7w%2Fc1spYAJpjySmtO%2FFP%2FG8voLJbd8g2M0VbWwdtwqdl8ACXCEJGH1fe2ln%2BildXT8cFWp&X-Amz-Signature=31c207638c82d83b302bcd786c665d57a7f78b713d8d6fd9da7cf295f5502635&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGTUSYQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeHQBMaim47DwKg%2FOgZVnHvv7hge9m17IDbWWvtcZ94AiEAnlZqiP5EKz6q4nVcBt0F%2Fz1J%2BSSs8fk8yM1wwLydT%2FQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMDMKBszl8RqZ1ODtircAzgoSK6BXsi5MsTbdUvUBdPKbPJxfv65euRdAwyNq58su1QsX2fxXUwsq1aGaL10wHZmnhf7WRNS9YQTt52wXqNIPmgg%2FUWgjT3na62z84DdolcDdfI6ElGM2M%2FV5FujmmvP%2BdCpdxBlEOWKEA2M05bFKDcXb1pqjN01nTDwjRfrURb5tfpdRsSlwzA9hkbE%2FVZJJlFB0GSOtx6lIRANniQQjPxy8fKdTfQ3RbwY%2BlYjH7NuqJM7T3%2FggQbihs3KOy0Yde7kREtJxE136sf5mA7lmM9gHcGcKU%2FbHSiXdMWydt14RS%2BP8nUJKmHypmWXPD4J4JWIyEwKDs03ZtFn7BebPEgtr3wbXPwhGgtsURbDzqrA7f%2Fnhucapc%2FPqJEe31IDe3hGQUEuyE1tVbw3Pf%2Fc734uoMpid%2ByyNnMIUf5wju6TftIQlZXDoORqP8xdkeXCrg457ORymC4UIwkwX%2FhtnGAB4B5cSAvrNDHk3Kp8buFwQuv2kLYDhtKGNQ1%2BvZzpLlKg693YhT49wtNUwPS%2Fq1BDM8sGCIBxzptM9emj3VWLkjbKhCQNTqEGp7Vqr%2Fe1it2xBtT30vt0PQSSoOXN%2F40B6V1gF4EPk9z78sUENudyNlBvVtuUngFcMN6%2Flr8GOqUBQ%2Bk2KevYtdiYnWGXRig0i19JScOlQ%2Bq8x%2FgpXu%2BTuFROm24197nqzEvfKJfwMVc6TjgjuXBQq3%2BL0tFa%2Fou50hN1qP9kyQNlIa307amLzGsn95wW005P31wVh75XRkvufCpQYK1rug9qQEzT3PiAaH7w%2Fc1spYAJpjySmtO%2FFP%2FG8voLJbd8g2M0VbWwdtwqdl8ACXCEJGH1fe2ln%2BildXT8cFWp&X-Amz-Signature=7364a1029b6c2e178fa2f4c65dd5955a14bdad94b520ad3c95e511af0c88d47a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
