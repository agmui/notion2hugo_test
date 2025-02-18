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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXU3IL3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDKXVhGdnW24zhKNbBvIT25oJljfBk4aI3XvIXh77Cf1gIgNerXVWuxfBvYbrcMIB%2BoF8KRQ%2BIajLnt7Pm2ndXgtVEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMahXu76GcBYdsmdRSrcA%2F3PYtLLKedIlYR8v2aNhSbMoogNKhohwVlpsUgXkdy2k%2FqPVAhbs7uqGKrKK9oI5FlasMpD6WPtfd91VTbgHTJO%2BNkL68tUjbfSfmahhW%2FGqdnQEayRch4zbOln63QiZoBOhEdOoRiK20nIop6fSj8qZdvsTWD7j%2FDzzT1bNzFF5G5l7HmYz9c2XJ5HycLPFLEtYLlYC%2FDn7WYAUdviLPoZ%2Bj8y2Kp88LqUjnwMn9hVrso6F2WIrPCsoLj6ykC2n%2FrJlV%2B2zFR7eEnIJF6YHwnaGFsfJw2xW8cdJEKyULKDzrAwp80yF6CK%2B2f74iSw1xa3H9Dm6yMkVlqoW60Yk%2BpRMPu0q9LcTXOXQD2UlYhHMqbP%2Fu0XWdKEyxqNu4%2BA%2B2vvEfs92rG%2BDkmU68eRijBqJYQWskt4m8Hr5pzlaZ9B7wiXgi24z5IKNs14gBL3W1%2BZ96BzRGOrsgLwfgE%2FHYALb489JBk%2FSV7ncoXDuWPE349eqm%2BorR0xOQ2aMcKsE8xa2qfrJdeQx4po1y4SByqlC0kfR194vRlh3LYbzYQIR3R3q%2FQAnurHzub%2FAv3%2BjwkSyvyOumzASB3wQH%2F%2BulPNAivoCCEigEMXYhYMABvIRlOuBUSH9qwBb5ShMJqU0r0GOqUBaHsG7Lcg7vJpt8DzuXO%2BCYMKyVVSPfKAMh249dSzy%2BSCrGUOvGnhCquL2YEvCOqN0Suz%2BnJrFbHbcD%2Fw6LdsXpjlYrb4xe9s2x8QWHDG3RXgXlg8UeV1BXNfFpqcAJdcdVYOJMXNsh0zspk9eQImy4Ei1UvVzUylpHic%2FT5OUqwyIidXRTY%2FF%2FLy46VXFb883QfVzbE86ADmSQ%2BiWFdtaAmzIetr&X-Amz-Signature=9471e9becc4e3bbc10470a8522c1111cb7917ede4d47336648233df78443da6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXU3IL3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDKXVhGdnW24zhKNbBvIT25oJljfBk4aI3XvIXh77Cf1gIgNerXVWuxfBvYbrcMIB%2BoF8KRQ%2BIajLnt7Pm2ndXgtVEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMahXu76GcBYdsmdRSrcA%2F3PYtLLKedIlYR8v2aNhSbMoogNKhohwVlpsUgXkdy2k%2FqPVAhbs7uqGKrKK9oI5FlasMpD6WPtfd91VTbgHTJO%2BNkL68tUjbfSfmahhW%2FGqdnQEayRch4zbOln63QiZoBOhEdOoRiK20nIop6fSj8qZdvsTWD7j%2FDzzT1bNzFF5G5l7HmYz9c2XJ5HycLPFLEtYLlYC%2FDn7WYAUdviLPoZ%2Bj8y2Kp88LqUjnwMn9hVrso6F2WIrPCsoLj6ykC2n%2FrJlV%2B2zFR7eEnIJF6YHwnaGFsfJw2xW8cdJEKyULKDzrAwp80yF6CK%2B2f74iSw1xa3H9Dm6yMkVlqoW60Yk%2BpRMPu0q9LcTXOXQD2UlYhHMqbP%2Fu0XWdKEyxqNu4%2BA%2B2vvEfs92rG%2BDkmU68eRijBqJYQWskt4m8Hr5pzlaZ9B7wiXgi24z5IKNs14gBL3W1%2BZ96BzRGOrsgLwfgE%2FHYALb489JBk%2FSV7ncoXDuWPE349eqm%2BorR0xOQ2aMcKsE8xa2qfrJdeQx4po1y4SByqlC0kfR194vRlh3LYbzYQIR3R3q%2FQAnurHzub%2FAv3%2BjwkSyvyOumzASB3wQH%2F%2BulPNAivoCCEigEMXYhYMABvIRlOuBUSH9qwBb5ShMJqU0r0GOqUBaHsG7Lcg7vJpt8DzuXO%2BCYMKyVVSPfKAMh249dSzy%2BSCrGUOvGnhCquL2YEvCOqN0Suz%2BnJrFbHbcD%2Fw6LdsXpjlYrb4xe9s2x8QWHDG3RXgXlg8UeV1BXNfFpqcAJdcdVYOJMXNsh0zspk9eQImy4Ei1UvVzUylpHic%2FT5OUqwyIidXRTY%2FF%2FLy46VXFb883QfVzbE86ADmSQ%2BiWFdtaAmzIetr&X-Amz-Signature=b0841376bffebd4e8a3bb56734ed768218e469bc1b5d6d4570e860ddaa6464b7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXU3IL3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDKXVhGdnW24zhKNbBvIT25oJljfBk4aI3XvIXh77Cf1gIgNerXVWuxfBvYbrcMIB%2BoF8KRQ%2BIajLnt7Pm2ndXgtVEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMahXu76GcBYdsmdRSrcA%2F3PYtLLKedIlYR8v2aNhSbMoogNKhohwVlpsUgXkdy2k%2FqPVAhbs7uqGKrKK9oI5FlasMpD6WPtfd91VTbgHTJO%2BNkL68tUjbfSfmahhW%2FGqdnQEayRch4zbOln63QiZoBOhEdOoRiK20nIop6fSj8qZdvsTWD7j%2FDzzT1bNzFF5G5l7HmYz9c2XJ5HycLPFLEtYLlYC%2FDn7WYAUdviLPoZ%2Bj8y2Kp88LqUjnwMn9hVrso6F2WIrPCsoLj6ykC2n%2FrJlV%2B2zFR7eEnIJF6YHwnaGFsfJw2xW8cdJEKyULKDzrAwp80yF6CK%2B2f74iSw1xa3H9Dm6yMkVlqoW60Yk%2BpRMPu0q9LcTXOXQD2UlYhHMqbP%2Fu0XWdKEyxqNu4%2BA%2B2vvEfs92rG%2BDkmU68eRijBqJYQWskt4m8Hr5pzlaZ9B7wiXgi24z5IKNs14gBL3W1%2BZ96BzRGOrsgLwfgE%2FHYALb489JBk%2FSV7ncoXDuWPE349eqm%2BorR0xOQ2aMcKsE8xa2qfrJdeQx4po1y4SByqlC0kfR194vRlh3LYbzYQIR3R3q%2FQAnurHzub%2FAv3%2BjwkSyvyOumzASB3wQH%2F%2BulPNAivoCCEigEMXYhYMABvIRlOuBUSH9qwBb5ShMJqU0r0GOqUBaHsG7Lcg7vJpt8DzuXO%2BCYMKyVVSPfKAMh249dSzy%2BSCrGUOvGnhCquL2YEvCOqN0Suz%2BnJrFbHbcD%2Fw6LdsXpjlYrb4xe9s2x8QWHDG3RXgXlg8UeV1BXNfFpqcAJdcdVYOJMXNsh0zspk9eQImy4Ei1UvVzUylpHic%2FT5OUqwyIidXRTY%2FF%2FLy46VXFb883QfVzbE86ADmSQ%2BiWFdtaAmzIetr&X-Amz-Signature=44a0106d9dcfed78f8f9932e5d6f216fb2ba6254ee2ab05c701cff8f02047539&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXU3IL3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDKXVhGdnW24zhKNbBvIT25oJljfBk4aI3XvIXh77Cf1gIgNerXVWuxfBvYbrcMIB%2BoF8KRQ%2BIajLnt7Pm2ndXgtVEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMahXu76GcBYdsmdRSrcA%2F3PYtLLKedIlYR8v2aNhSbMoogNKhohwVlpsUgXkdy2k%2FqPVAhbs7uqGKrKK9oI5FlasMpD6WPtfd91VTbgHTJO%2BNkL68tUjbfSfmahhW%2FGqdnQEayRch4zbOln63QiZoBOhEdOoRiK20nIop6fSj8qZdvsTWD7j%2FDzzT1bNzFF5G5l7HmYz9c2XJ5HycLPFLEtYLlYC%2FDn7WYAUdviLPoZ%2Bj8y2Kp88LqUjnwMn9hVrso6F2WIrPCsoLj6ykC2n%2FrJlV%2B2zFR7eEnIJF6YHwnaGFsfJw2xW8cdJEKyULKDzrAwp80yF6CK%2B2f74iSw1xa3H9Dm6yMkVlqoW60Yk%2BpRMPu0q9LcTXOXQD2UlYhHMqbP%2Fu0XWdKEyxqNu4%2BA%2B2vvEfs92rG%2BDkmU68eRijBqJYQWskt4m8Hr5pzlaZ9B7wiXgi24z5IKNs14gBL3W1%2BZ96BzRGOrsgLwfgE%2FHYALb489JBk%2FSV7ncoXDuWPE349eqm%2BorR0xOQ2aMcKsE8xa2qfrJdeQx4po1y4SByqlC0kfR194vRlh3LYbzYQIR3R3q%2FQAnurHzub%2FAv3%2BjwkSyvyOumzASB3wQH%2F%2BulPNAivoCCEigEMXYhYMABvIRlOuBUSH9qwBb5ShMJqU0r0GOqUBaHsG7Lcg7vJpt8DzuXO%2BCYMKyVVSPfKAMh249dSzy%2BSCrGUOvGnhCquL2YEvCOqN0Suz%2BnJrFbHbcD%2Fw6LdsXpjlYrb4xe9s2x8QWHDG3RXgXlg8UeV1BXNfFpqcAJdcdVYOJMXNsh0zspk9eQImy4Ei1UvVzUylpHic%2FT5OUqwyIidXRTY%2FF%2FLy46VXFb883QfVzbE86ADmSQ%2BiWFdtaAmzIetr&X-Amz-Signature=1a0e8520935efeb605c63d2b059256a50330848bb5d215d835c1d588e3476193&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXU3IL3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDKXVhGdnW24zhKNbBvIT25oJljfBk4aI3XvIXh77Cf1gIgNerXVWuxfBvYbrcMIB%2BoF8KRQ%2BIajLnt7Pm2ndXgtVEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMahXu76GcBYdsmdRSrcA%2F3PYtLLKedIlYR8v2aNhSbMoogNKhohwVlpsUgXkdy2k%2FqPVAhbs7uqGKrKK9oI5FlasMpD6WPtfd91VTbgHTJO%2BNkL68tUjbfSfmahhW%2FGqdnQEayRch4zbOln63QiZoBOhEdOoRiK20nIop6fSj8qZdvsTWD7j%2FDzzT1bNzFF5G5l7HmYz9c2XJ5HycLPFLEtYLlYC%2FDn7WYAUdviLPoZ%2Bj8y2Kp88LqUjnwMn9hVrso6F2WIrPCsoLj6ykC2n%2FrJlV%2B2zFR7eEnIJF6YHwnaGFsfJw2xW8cdJEKyULKDzrAwp80yF6CK%2B2f74iSw1xa3H9Dm6yMkVlqoW60Yk%2BpRMPu0q9LcTXOXQD2UlYhHMqbP%2Fu0XWdKEyxqNu4%2BA%2B2vvEfs92rG%2BDkmU68eRijBqJYQWskt4m8Hr5pzlaZ9B7wiXgi24z5IKNs14gBL3W1%2BZ96BzRGOrsgLwfgE%2FHYALb489JBk%2FSV7ncoXDuWPE349eqm%2BorR0xOQ2aMcKsE8xa2qfrJdeQx4po1y4SByqlC0kfR194vRlh3LYbzYQIR3R3q%2FQAnurHzub%2FAv3%2BjwkSyvyOumzASB3wQH%2F%2BulPNAivoCCEigEMXYhYMABvIRlOuBUSH9qwBb5ShMJqU0r0GOqUBaHsG7Lcg7vJpt8DzuXO%2BCYMKyVVSPfKAMh249dSzy%2BSCrGUOvGnhCquL2YEvCOqN0Suz%2BnJrFbHbcD%2Fw6LdsXpjlYrb4xe9s2x8QWHDG3RXgXlg8UeV1BXNfFpqcAJdcdVYOJMXNsh0zspk9eQImy4Ei1UvVzUylpHic%2FT5OUqwyIidXRTY%2FF%2FLy46VXFb883QfVzbE86ADmSQ%2BiWFdtaAmzIetr&X-Amz-Signature=1d1c00329ee85550fd26b6dfd26c5ca0afee64a6fe2b9bf5cfe2d29840bffd30&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
