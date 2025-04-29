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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTEY7IU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc5OdW16i9uDJdTb2oEjNlAgSxLnx400wLLEkLesrScAiBjkEhM4fSmxll24fwXbR%2Fv1nehsRuf5%2Bw6g7k3I3oP9SqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdSXyHPUdW6o%2Bu6zEKtwD4Qv0jNVXeoc2%2B23yXV09zW%2BDVGeaCBxaNvjElXW1YY9BdpL41UeVMJTqubiiTbl148gCYJ5qFlmFTA%2Bz0iPcTQw%2Bv8FmigHV4exxE5SZ99pqIPAAMkAMmmGAkU6j3qeatzsjM%2FNLAyr1brdEpXlA8emBxG%2FOaboJVCtNrBAIuOxl0THerFUK%2FFaomuEJvO5amT0ZEe3Ee1Iqtcux0cdGC7ftt1CMBFZq4sisJVo63Oi9vXh6OHrTHdEl4mHntvqs%2FpFvbeeclVDOSEFD6vT9VkkaCmP3fIXcG1bSL7oWzxVZHMOt3R%2F%2F5oLAfbHRdVfLPOTepAYQu%2F%2F2VqhRUmRx2BYX15InlTa8hYZpjz7EI5wy61fXDpsYxK9doJkUiznIa7n7pm7yjLWv53T4UZfy8eYPz6GmnpLUXAmrMZwSg5pu88aqoq%2BDITIqPvvr%2Bq6ajDfyvPho5TESj4ulXZKQN%2F4QPtF%2B1yu3y3ICr1ZOjyWzwU8zfgKQYRB6MeGaLmGO%2Fv4o%2F2Mu09SKvZHtZ3aWtYxyzA3KCaJMzSXoWmXfP22jG3jgAUEWjCJ0gB%2FgNpyiveagf44Hyl8tnZaGzYfA7QCrfxnMxACrauJbiIVYx2g3JzwoCaexEOZisYAw06TDwAY6pgE9Se0nV7cIPaiAFr%2BuKwZaKRXuz6lUkg14qBtewrY7OBd5vLos23gI47plVrOxH%2FX0BlDXl%2BrUfDxcROSmhrFaBnFGobivETCMdj4aa8LDLcB%2B1yeR6NT6oyQLz%2FsQ3Juk1vKmb%2BO8m9TlEvOl7MUYnNvuqVvlBa5ZK2fyQxm4JoQuIQFmOamoj42MJMTqmHD3W7r74Fzbdb4evC%2FUwcFnOpHon8%2FQ&X-Amz-Signature=2ba1066b544f9be747ae95a9c14971ab73cf8d5ac9931cf35c6860e0c5db6597&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTEY7IU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc5OdW16i9uDJdTb2oEjNlAgSxLnx400wLLEkLesrScAiBjkEhM4fSmxll24fwXbR%2Fv1nehsRuf5%2Bw6g7k3I3oP9SqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdSXyHPUdW6o%2Bu6zEKtwD4Qv0jNVXeoc2%2B23yXV09zW%2BDVGeaCBxaNvjElXW1YY9BdpL41UeVMJTqubiiTbl148gCYJ5qFlmFTA%2Bz0iPcTQw%2Bv8FmigHV4exxE5SZ99pqIPAAMkAMmmGAkU6j3qeatzsjM%2FNLAyr1brdEpXlA8emBxG%2FOaboJVCtNrBAIuOxl0THerFUK%2FFaomuEJvO5amT0ZEe3Ee1Iqtcux0cdGC7ftt1CMBFZq4sisJVo63Oi9vXh6OHrTHdEl4mHntvqs%2FpFvbeeclVDOSEFD6vT9VkkaCmP3fIXcG1bSL7oWzxVZHMOt3R%2F%2F5oLAfbHRdVfLPOTepAYQu%2F%2F2VqhRUmRx2BYX15InlTa8hYZpjz7EI5wy61fXDpsYxK9doJkUiznIa7n7pm7yjLWv53T4UZfy8eYPz6GmnpLUXAmrMZwSg5pu88aqoq%2BDITIqPvvr%2Bq6ajDfyvPho5TESj4ulXZKQN%2F4QPtF%2B1yu3y3ICr1ZOjyWzwU8zfgKQYRB6MeGaLmGO%2Fv4o%2F2Mu09SKvZHtZ3aWtYxyzA3KCaJMzSXoWmXfP22jG3jgAUEWjCJ0gB%2FgNpyiveagf44Hyl8tnZaGzYfA7QCrfxnMxACrauJbiIVYx2g3JzwoCaexEOZisYAw06TDwAY6pgE9Se0nV7cIPaiAFr%2BuKwZaKRXuz6lUkg14qBtewrY7OBd5vLos23gI47plVrOxH%2FX0BlDXl%2BrUfDxcROSmhrFaBnFGobivETCMdj4aa8LDLcB%2B1yeR6NT6oyQLz%2FsQ3Juk1vKmb%2BO8m9TlEvOl7MUYnNvuqVvlBa5ZK2fyQxm4JoQuIQFmOamoj42MJMTqmHD3W7r74Fzbdb4evC%2FUwcFnOpHon8%2FQ&X-Amz-Signature=1db8b7d34304a6c66532da9400c4492368d4c17d338dfadd0eb911490ad4ce12&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTEY7IU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc5OdW16i9uDJdTb2oEjNlAgSxLnx400wLLEkLesrScAiBjkEhM4fSmxll24fwXbR%2Fv1nehsRuf5%2Bw6g7k3I3oP9SqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdSXyHPUdW6o%2Bu6zEKtwD4Qv0jNVXeoc2%2B23yXV09zW%2BDVGeaCBxaNvjElXW1YY9BdpL41UeVMJTqubiiTbl148gCYJ5qFlmFTA%2Bz0iPcTQw%2Bv8FmigHV4exxE5SZ99pqIPAAMkAMmmGAkU6j3qeatzsjM%2FNLAyr1brdEpXlA8emBxG%2FOaboJVCtNrBAIuOxl0THerFUK%2FFaomuEJvO5amT0ZEe3Ee1Iqtcux0cdGC7ftt1CMBFZq4sisJVo63Oi9vXh6OHrTHdEl4mHntvqs%2FpFvbeeclVDOSEFD6vT9VkkaCmP3fIXcG1bSL7oWzxVZHMOt3R%2F%2F5oLAfbHRdVfLPOTepAYQu%2F%2F2VqhRUmRx2BYX15InlTa8hYZpjz7EI5wy61fXDpsYxK9doJkUiznIa7n7pm7yjLWv53T4UZfy8eYPz6GmnpLUXAmrMZwSg5pu88aqoq%2BDITIqPvvr%2Bq6ajDfyvPho5TESj4ulXZKQN%2F4QPtF%2B1yu3y3ICr1ZOjyWzwU8zfgKQYRB6MeGaLmGO%2Fv4o%2F2Mu09SKvZHtZ3aWtYxyzA3KCaJMzSXoWmXfP22jG3jgAUEWjCJ0gB%2FgNpyiveagf44Hyl8tnZaGzYfA7QCrfxnMxACrauJbiIVYx2g3JzwoCaexEOZisYAw06TDwAY6pgE9Se0nV7cIPaiAFr%2BuKwZaKRXuz6lUkg14qBtewrY7OBd5vLos23gI47plVrOxH%2FX0BlDXl%2BrUfDxcROSmhrFaBnFGobivETCMdj4aa8LDLcB%2B1yeR6NT6oyQLz%2FsQ3Juk1vKmb%2BO8m9TlEvOl7MUYnNvuqVvlBa5ZK2fyQxm4JoQuIQFmOamoj42MJMTqmHD3W7r74Fzbdb4evC%2FUwcFnOpHon8%2FQ&X-Amz-Signature=fa88f5fafb294e35add30a49ef34af68b3cd92c05071adcd5b96d883dedbef01&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTEY7IU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc5OdW16i9uDJdTb2oEjNlAgSxLnx400wLLEkLesrScAiBjkEhM4fSmxll24fwXbR%2Fv1nehsRuf5%2Bw6g7k3I3oP9SqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdSXyHPUdW6o%2Bu6zEKtwD4Qv0jNVXeoc2%2B23yXV09zW%2BDVGeaCBxaNvjElXW1YY9BdpL41UeVMJTqubiiTbl148gCYJ5qFlmFTA%2Bz0iPcTQw%2Bv8FmigHV4exxE5SZ99pqIPAAMkAMmmGAkU6j3qeatzsjM%2FNLAyr1brdEpXlA8emBxG%2FOaboJVCtNrBAIuOxl0THerFUK%2FFaomuEJvO5amT0ZEe3Ee1Iqtcux0cdGC7ftt1CMBFZq4sisJVo63Oi9vXh6OHrTHdEl4mHntvqs%2FpFvbeeclVDOSEFD6vT9VkkaCmP3fIXcG1bSL7oWzxVZHMOt3R%2F%2F5oLAfbHRdVfLPOTepAYQu%2F%2F2VqhRUmRx2BYX15InlTa8hYZpjz7EI5wy61fXDpsYxK9doJkUiznIa7n7pm7yjLWv53T4UZfy8eYPz6GmnpLUXAmrMZwSg5pu88aqoq%2BDITIqPvvr%2Bq6ajDfyvPho5TESj4ulXZKQN%2F4QPtF%2B1yu3y3ICr1ZOjyWzwU8zfgKQYRB6MeGaLmGO%2Fv4o%2F2Mu09SKvZHtZ3aWtYxyzA3KCaJMzSXoWmXfP22jG3jgAUEWjCJ0gB%2FgNpyiveagf44Hyl8tnZaGzYfA7QCrfxnMxACrauJbiIVYx2g3JzwoCaexEOZisYAw06TDwAY6pgE9Se0nV7cIPaiAFr%2BuKwZaKRXuz6lUkg14qBtewrY7OBd5vLos23gI47plVrOxH%2FX0BlDXl%2BrUfDxcROSmhrFaBnFGobivETCMdj4aa8LDLcB%2B1yeR6NT6oyQLz%2FsQ3Juk1vKmb%2BO8m9TlEvOl7MUYnNvuqVvlBa5ZK2fyQxm4JoQuIQFmOamoj42MJMTqmHD3W7r74Fzbdb4evC%2FUwcFnOpHon8%2FQ&X-Amz-Signature=5a896143c4f799bd9bfb3d222b00aca95ff7c0a02ed8f626e51f02cfd7fd9dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTEY7IU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc5OdW16i9uDJdTb2oEjNlAgSxLnx400wLLEkLesrScAiBjkEhM4fSmxll24fwXbR%2Fv1nehsRuf5%2Bw6g7k3I3oP9SqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdSXyHPUdW6o%2Bu6zEKtwD4Qv0jNVXeoc2%2B23yXV09zW%2BDVGeaCBxaNvjElXW1YY9BdpL41UeVMJTqubiiTbl148gCYJ5qFlmFTA%2Bz0iPcTQw%2Bv8FmigHV4exxE5SZ99pqIPAAMkAMmmGAkU6j3qeatzsjM%2FNLAyr1brdEpXlA8emBxG%2FOaboJVCtNrBAIuOxl0THerFUK%2FFaomuEJvO5amT0ZEe3Ee1Iqtcux0cdGC7ftt1CMBFZq4sisJVo63Oi9vXh6OHrTHdEl4mHntvqs%2FpFvbeeclVDOSEFD6vT9VkkaCmP3fIXcG1bSL7oWzxVZHMOt3R%2F%2F5oLAfbHRdVfLPOTepAYQu%2F%2F2VqhRUmRx2BYX15InlTa8hYZpjz7EI5wy61fXDpsYxK9doJkUiznIa7n7pm7yjLWv53T4UZfy8eYPz6GmnpLUXAmrMZwSg5pu88aqoq%2BDITIqPvvr%2Bq6ajDfyvPho5TESj4ulXZKQN%2F4QPtF%2B1yu3y3ICr1ZOjyWzwU8zfgKQYRB6MeGaLmGO%2Fv4o%2F2Mu09SKvZHtZ3aWtYxyzA3KCaJMzSXoWmXfP22jG3jgAUEWjCJ0gB%2FgNpyiveagf44Hyl8tnZaGzYfA7QCrfxnMxACrauJbiIVYx2g3JzwoCaexEOZisYAw06TDwAY6pgE9Se0nV7cIPaiAFr%2BuKwZaKRXuz6lUkg14qBtewrY7OBd5vLos23gI47plVrOxH%2FX0BlDXl%2BrUfDxcROSmhrFaBnFGobivETCMdj4aa8LDLcB%2B1yeR6NT6oyQLz%2FsQ3Juk1vKmb%2BO8m9TlEvOl7MUYnNvuqVvlBa5ZK2fyQxm4JoQuIQFmOamoj42MJMTqmHD3W7r74Fzbdb4evC%2FUwcFnOpHon8%2FQ&X-Amz-Signature=f0b949fb577c3f5e6a456342cf66e59d781e881d01b07e5012c4ec0ebfc89a03&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
