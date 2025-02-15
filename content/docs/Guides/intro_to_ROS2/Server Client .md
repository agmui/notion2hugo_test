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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUK4NWB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDLIhLi%2FoPPKdnuMiXo1IVfrsQtOhxkqljPMqWmztkXQgIhALSpXpjKLxdx0dIx%2FAcjDWTSSUqjcJZXpngHtC9kLecUKv8DCEoQABoMNjM3NDIzMTgzODA1IgwGFIZ2e3immt3n1gIq3AN%2FFmaRATQrL1ncIHo792UyDw3WJqESYAR8D9wfuNYiFk8YjTJ17IMVP0uWYbur4yZexy9a7GjS44EgY4NXv7cBgS3BShJuCTKeI8PLPYPwyEtyVXHpIihrY6ASnkQg7XUK01GNfn8%2B32hdaoxhnoD3ST1DtKDPZVr4HESOPm0VQzg%2BQn%2FAEi58HLPvVWr61r6Mc2NigycovVu9WGq0v2rrwMzQX%2FWiM3lk6C0okjRk7CI0H%2BSBZ5nqtuL3OMu5H0j%2BlMwW08SBHAt7jnOWAAdXhLeRwL6peOYl6tMGpUOH1bvIEoON2%2B%2FCH%2FeeYCLECn%2B8OSLwo3RWvkm7bZ1E2g021BBYVmcMAx7HuMYUKjpd1ywyvlyMt1V1CiPm7GKvahCQslCcgILA%2FLzR7LNnkyvG2%2F5IWkQpALqxnG9LtqtWSB0XLO8ce6VZEMTCIknarJ0rAoxrOqE8jn%2BY3HBYIuACnBFGemiY6xX2IYI%2BB4j%2FCAgTBKSsY6QXHLUwGCyGrUlYHPSiCosZgTiDDyk%2BL1%2BcQPvx%2BzTnDPj4CzP79474TOk6wLY%2FaMLLzPZuxvMye0ROX2wXZ03xFCN7zeoEBF9re%2B4BteXz5XmtAYEIE%2Bz47PJL1G7wvZaYtR78ujC%2Fm8O9BjqkAUMUVv6bybgOIEk6GKR%2FcVQhmVmcLOlO05wJp7PrdT1a0cyyPZOI507i105qUCJdkPEq3wnkbKXjFokNVl1MAaPMAR0l8qfGBuMGwkYaEAhfjYIRnWFh2kRuvpNB3RdqOH%2Fh%2FGSQXC3uxaJhzaJKql1C4lbHStZcDflS2OQu4NoOddzajfwCJIo693i%2B0x1inJfC89160n7d%2B90Y42Ohx7nyJ8D0&X-Amz-Signature=1fe1c49fd03a8d44f4e5923cbb6be12b16bf71c024e59057091ed637a9798cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUK4NWB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDLIhLi%2FoPPKdnuMiXo1IVfrsQtOhxkqljPMqWmztkXQgIhALSpXpjKLxdx0dIx%2FAcjDWTSSUqjcJZXpngHtC9kLecUKv8DCEoQABoMNjM3NDIzMTgzODA1IgwGFIZ2e3immt3n1gIq3AN%2FFmaRATQrL1ncIHo792UyDw3WJqESYAR8D9wfuNYiFk8YjTJ17IMVP0uWYbur4yZexy9a7GjS44EgY4NXv7cBgS3BShJuCTKeI8PLPYPwyEtyVXHpIihrY6ASnkQg7XUK01GNfn8%2B32hdaoxhnoD3ST1DtKDPZVr4HESOPm0VQzg%2BQn%2FAEi58HLPvVWr61r6Mc2NigycovVu9WGq0v2rrwMzQX%2FWiM3lk6C0okjRk7CI0H%2BSBZ5nqtuL3OMu5H0j%2BlMwW08SBHAt7jnOWAAdXhLeRwL6peOYl6tMGpUOH1bvIEoON2%2B%2FCH%2FeeYCLECn%2B8OSLwo3RWvkm7bZ1E2g021BBYVmcMAx7HuMYUKjpd1ywyvlyMt1V1CiPm7GKvahCQslCcgILA%2FLzR7LNnkyvG2%2F5IWkQpALqxnG9LtqtWSB0XLO8ce6VZEMTCIknarJ0rAoxrOqE8jn%2BY3HBYIuACnBFGemiY6xX2IYI%2BB4j%2FCAgTBKSsY6QXHLUwGCyGrUlYHPSiCosZgTiDDyk%2BL1%2BcQPvx%2BzTnDPj4CzP79474TOk6wLY%2FaMLLzPZuxvMye0ROX2wXZ03xFCN7zeoEBF9re%2B4BteXz5XmtAYEIE%2Bz47PJL1G7wvZaYtR78ujC%2Fm8O9BjqkAUMUVv6bybgOIEk6GKR%2FcVQhmVmcLOlO05wJp7PrdT1a0cyyPZOI507i105qUCJdkPEq3wnkbKXjFokNVl1MAaPMAR0l8qfGBuMGwkYaEAhfjYIRnWFh2kRuvpNB3RdqOH%2Fh%2FGSQXC3uxaJhzaJKql1C4lbHStZcDflS2OQu4NoOddzajfwCJIo693i%2B0x1inJfC89160n7d%2B90Y42Ohx7nyJ8D0&X-Amz-Signature=4de81c72220fff2f555b8160301fb1d8b57d1c8efd5ec78b08ee6fddadc6eae6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUK4NWB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDLIhLi%2FoPPKdnuMiXo1IVfrsQtOhxkqljPMqWmztkXQgIhALSpXpjKLxdx0dIx%2FAcjDWTSSUqjcJZXpngHtC9kLecUKv8DCEoQABoMNjM3NDIzMTgzODA1IgwGFIZ2e3immt3n1gIq3AN%2FFmaRATQrL1ncIHo792UyDw3WJqESYAR8D9wfuNYiFk8YjTJ17IMVP0uWYbur4yZexy9a7GjS44EgY4NXv7cBgS3BShJuCTKeI8PLPYPwyEtyVXHpIihrY6ASnkQg7XUK01GNfn8%2B32hdaoxhnoD3ST1DtKDPZVr4HESOPm0VQzg%2BQn%2FAEi58HLPvVWr61r6Mc2NigycovVu9WGq0v2rrwMzQX%2FWiM3lk6C0okjRk7CI0H%2BSBZ5nqtuL3OMu5H0j%2BlMwW08SBHAt7jnOWAAdXhLeRwL6peOYl6tMGpUOH1bvIEoON2%2B%2FCH%2FeeYCLECn%2B8OSLwo3RWvkm7bZ1E2g021BBYVmcMAx7HuMYUKjpd1ywyvlyMt1V1CiPm7GKvahCQslCcgILA%2FLzR7LNnkyvG2%2F5IWkQpALqxnG9LtqtWSB0XLO8ce6VZEMTCIknarJ0rAoxrOqE8jn%2BY3HBYIuACnBFGemiY6xX2IYI%2BB4j%2FCAgTBKSsY6QXHLUwGCyGrUlYHPSiCosZgTiDDyk%2BL1%2BcQPvx%2BzTnDPj4CzP79474TOk6wLY%2FaMLLzPZuxvMye0ROX2wXZ03xFCN7zeoEBF9re%2B4BteXz5XmtAYEIE%2Bz47PJL1G7wvZaYtR78ujC%2Fm8O9BjqkAUMUVv6bybgOIEk6GKR%2FcVQhmVmcLOlO05wJp7PrdT1a0cyyPZOI507i105qUCJdkPEq3wnkbKXjFokNVl1MAaPMAR0l8qfGBuMGwkYaEAhfjYIRnWFh2kRuvpNB3RdqOH%2Fh%2FGSQXC3uxaJhzaJKql1C4lbHStZcDflS2OQu4NoOddzajfwCJIo693i%2B0x1inJfC89160n7d%2B90Y42Ohx7nyJ8D0&X-Amz-Signature=214a6df8da5adddadcfa3cca4df4025a97bed85242a6ed3a64fc2e8a51b2d0f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUK4NWB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDLIhLi%2FoPPKdnuMiXo1IVfrsQtOhxkqljPMqWmztkXQgIhALSpXpjKLxdx0dIx%2FAcjDWTSSUqjcJZXpngHtC9kLecUKv8DCEoQABoMNjM3NDIzMTgzODA1IgwGFIZ2e3immt3n1gIq3AN%2FFmaRATQrL1ncIHo792UyDw3WJqESYAR8D9wfuNYiFk8YjTJ17IMVP0uWYbur4yZexy9a7GjS44EgY4NXv7cBgS3BShJuCTKeI8PLPYPwyEtyVXHpIihrY6ASnkQg7XUK01GNfn8%2B32hdaoxhnoD3ST1DtKDPZVr4HESOPm0VQzg%2BQn%2FAEi58HLPvVWr61r6Mc2NigycovVu9WGq0v2rrwMzQX%2FWiM3lk6C0okjRk7CI0H%2BSBZ5nqtuL3OMu5H0j%2BlMwW08SBHAt7jnOWAAdXhLeRwL6peOYl6tMGpUOH1bvIEoON2%2B%2FCH%2FeeYCLECn%2B8OSLwo3RWvkm7bZ1E2g021BBYVmcMAx7HuMYUKjpd1ywyvlyMt1V1CiPm7GKvahCQslCcgILA%2FLzR7LNnkyvG2%2F5IWkQpALqxnG9LtqtWSB0XLO8ce6VZEMTCIknarJ0rAoxrOqE8jn%2BY3HBYIuACnBFGemiY6xX2IYI%2BB4j%2FCAgTBKSsY6QXHLUwGCyGrUlYHPSiCosZgTiDDyk%2BL1%2BcQPvx%2BzTnDPj4CzP79474TOk6wLY%2FaMLLzPZuxvMye0ROX2wXZ03xFCN7zeoEBF9re%2B4BteXz5XmtAYEIE%2Bz47PJL1G7wvZaYtR78ujC%2Fm8O9BjqkAUMUVv6bybgOIEk6GKR%2FcVQhmVmcLOlO05wJp7PrdT1a0cyyPZOI507i105qUCJdkPEq3wnkbKXjFokNVl1MAaPMAR0l8qfGBuMGwkYaEAhfjYIRnWFh2kRuvpNB3RdqOH%2Fh%2FGSQXC3uxaJhzaJKql1C4lbHStZcDflS2OQu4NoOddzajfwCJIo693i%2B0x1inJfC89160n7d%2B90Y42Ohx7nyJ8D0&X-Amz-Signature=f33760dbbe01590a5397ccda69ae21cf63504d8be0b56597bbd8849c4ac333c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUK4NWB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDLIhLi%2FoPPKdnuMiXo1IVfrsQtOhxkqljPMqWmztkXQgIhALSpXpjKLxdx0dIx%2FAcjDWTSSUqjcJZXpngHtC9kLecUKv8DCEoQABoMNjM3NDIzMTgzODA1IgwGFIZ2e3immt3n1gIq3AN%2FFmaRATQrL1ncIHo792UyDw3WJqESYAR8D9wfuNYiFk8YjTJ17IMVP0uWYbur4yZexy9a7GjS44EgY4NXv7cBgS3BShJuCTKeI8PLPYPwyEtyVXHpIihrY6ASnkQg7XUK01GNfn8%2B32hdaoxhnoD3ST1DtKDPZVr4HESOPm0VQzg%2BQn%2FAEi58HLPvVWr61r6Mc2NigycovVu9WGq0v2rrwMzQX%2FWiM3lk6C0okjRk7CI0H%2BSBZ5nqtuL3OMu5H0j%2BlMwW08SBHAt7jnOWAAdXhLeRwL6peOYl6tMGpUOH1bvIEoON2%2B%2FCH%2FeeYCLECn%2B8OSLwo3RWvkm7bZ1E2g021BBYVmcMAx7HuMYUKjpd1ywyvlyMt1V1CiPm7GKvahCQslCcgILA%2FLzR7LNnkyvG2%2F5IWkQpALqxnG9LtqtWSB0XLO8ce6VZEMTCIknarJ0rAoxrOqE8jn%2BY3HBYIuACnBFGemiY6xX2IYI%2BB4j%2FCAgTBKSsY6QXHLUwGCyGrUlYHPSiCosZgTiDDyk%2BL1%2BcQPvx%2BzTnDPj4CzP79474TOk6wLY%2FaMLLzPZuxvMye0ROX2wXZ03xFCN7zeoEBF9re%2B4BteXz5XmtAYEIE%2Bz47PJL1G7wvZaYtR78ujC%2Fm8O9BjqkAUMUVv6bybgOIEk6GKR%2FcVQhmVmcLOlO05wJp7PrdT1a0cyyPZOI507i105qUCJdkPEq3wnkbKXjFokNVl1MAaPMAR0l8qfGBuMGwkYaEAhfjYIRnWFh2kRuvpNB3RdqOH%2Fh%2FGSQXC3uxaJhzaJKql1C4lbHStZcDflS2OQu4NoOddzajfwCJIo693i%2B0x1inJfC89160n7d%2B90Y42Ohx7nyJ8D0&X-Amz-Signature=dd081c0a904f6cddd1ee68708b6be04dbf9fa8e2ebf2368fc7f2f873c7a19912&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
