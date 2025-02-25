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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRIH2K2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC5GahDgUW14PweIV6YAcHcxmiSGaIIlgUFft7q%2Bzq%2FQAiEAy%2BThm97BoDepga7e%2B8PV9T6StQ20PiI1e9xhfU0ewGIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBo%2BZ33OPQDbFkxePSrcA%2BspVuAyBfVr%2BvRxwx8FWIEPaYR3N8hAQCRcOdk%2FmaYXT9RIUFVnmzT%2BHTOv2GYfYsicRsfQcCUMEWuXjIgpxfgRcRp9Rv7%2BBUhkycLw5HGa9ERqBPdLIM1VvwiuIBTJuAQKWY%2Fl8FCPQvo7hGGmvCbSfNw0At90Lf4QIeBoJk6djLpRycTglkx3Z3Ab44Qo2jEMHfGQkZEakdI5gny9iH3dlMLfNGZbFFaya%2FtqZKWhNvjOBEXeCF1O%2F9Bv5KjFp9uFoGzba%2FaRO%2BD%2BsWCRRDbXohaOexufskv0vHcIWz4RO1lxo03aX3NIifA99XQ1lrnzHACFAqxHP7UBLPX1KE0595lrwmUc9KiFXQqUkN47as6mc8JPh0098tDkMRejHHxv3dG8%2BRHk0lzHzzs0dWfugcYGTADohMOsAesV%2FiUkFz0SKwU75q0%2F%2BhJU6F2%2BpEi%2BzeoMB%2FxnWhq4YlBociDluAbzQO19YsNiKfNE2dB6tJZclyprAyDeHCuJGsCB5tDYJXkOJjvB6otaPb%2F%2BwAghwDI28SixS471oP4AVjfLbFXNdCy36u75a9JfPhT59JSs8gOU%2B1ZObGnNUkKjUeBtoRIXfvl84eYvdvu8J3om0gbRO9tTmjevUe%2FhMI2C%2Bb0GOqUBVak2U5CHj27%2FHNDAqH%2BQzbMv%2FGrw0S26nQnM6OjxnHYZ%2FP%2FouA9ITw4RgF%2F8bcjteoetI6qfOuQM5f06T66doFSDbt2o44KbJjPq4BiJ6JndyIEc2RBKUUr8D%2FeH3Uoen%2BOloh%2FgUchGYQKykgGru72ARu5PDv9zZhiXOjezJoSL4hIxHu%2BJY74dXp6v99nEVOdHRaYAusCXE%2Bxmjm3Uhw6b1w9u&X-Amz-Signature=5bbb2dbf1efe037d977aa31a3ba2c44a1cf05450f37ca5e8b8f0effd4a373207&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRIH2K2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC5GahDgUW14PweIV6YAcHcxmiSGaIIlgUFft7q%2Bzq%2FQAiEAy%2BThm97BoDepga7e%2B8PV9T6StQ20PiI1e9xhfU0ewGIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBo%2BZ33OPQDbFkxePSrcA%2BspVuAyBfVr%2BvRxwx8FWIEPaYR3N8hAQCRcOdk%2FmaYXT9RIUFVnmzT%2BHTOv2GYfYsicRsfQcCUMEWuXjIgpxfgRcRp9Rv7%2BBUhkycLw5HGa9ERqBPdLIM1VvwiuIBTJuAQKWY%2Fl8FCPQvo7hGGmvCbSfNw0At90Lf4QIeBoJk6djLpRycTglkx3Z3Ab44Qo2jEMHfGQkZEakdI5gny9iH3dlMLfNGZbFFaya%2FtqZKWhNvjOBEXeCF1O%2F9Bv5KjFp9uFoGzba%2FaRO%2BD%2BsWCRRDbXohaOexufskv0vHcIWz4RO1lxo03aX3NIifA99XQ1lrnzHACFAqxHP7UBLPX1KE0595lrwmUc9KiFXQqUkN47as6mc8JPh0098tDkMRejHHxv3dG8%2BRHk0lzHzzs0dWfugcYGTADohMOsAesV%2FiUkFz0SKwU75q0%2F%2BhJU6F2%2BpEi%2BzeoMB%2FxnWhq4YlBociDluAbzQO19YsNiKfNE2dB6tJZclyprAyDeHCuJGsCB5tDYJXkOJjvB6otaPb%2F%2BwAghwDI28SixS471oP4AVjfLbFXNdCy36u75a9JfPhT59JSs8gOU%2B1ZObGnNUkKjUeBtoRIXfvl84eYvdvu8J3om0gbRO9tTmjevUe%2FhMI2C%2Bb0GOqUBVak2U5CHj27%2FHNDAqH%2BQzbMv%2FGrw0S26nQnM6OjxnHYZ%2FP%2FouA9ITw4RgF%2F8bcjteoetI6qfOuQM5f06T66doFSDbt2o44KbJjPq4BiJ6JndyIEc2RBKUUr8D%2FeH3Uoen%2BOloh%2FgUchGYQKykgGru72ARu5PDv9zZhiXOjezJoSL4hIxHu%2BJY74dXp6v99nEVOdHRaYAusCXE%2Bxmjm3Uhw6b1w9u&X-Amz-Signature=d35423d7455c8bc0145eadef4f66731c4d1a6812f822beefac238ba6fb338d73&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRIH2K2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC5GahDgUW14PweIV6YAcHcxmiSGaIIlgUFft7q%2Bzq%2FQAiEAy%2BThm97BoDepga7e%2B8PV9T6StQ20PiI1e9xhfU0ewGIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBo%2BZ33OPQDbFkxePSrcA%2BspVuAyBfVr%2BvRxwx8FWIEPaYR3N8hAQCRcOdk%2FmaYXT9RIUFVnmzT%2BHTOv2GYfYsicRsfQcCUMEWuXjIgpxfgRcRp9Rv7%2BBUhkycLw5HGa9ERqBPdLIM1VvwiuIBTJuAQKWY%2Fl8FCPQvo7hGGmvCbSfNw0At90Lf4QIeBoJk6djLpRycTglkx3Z3Ab44Qo2jEMHfGQkZEakdI5gny9iH3dlMLfNGZbFFaya%2FtqZKWhNvjOBEXeCF1O%2F9Bv5KjFp9uFoGzba%2FaRO%2BD%2BsWCRRDbXohaOexufskv0vHcIWz4RO1lxo03aX3NIifA99XQ1lrnzHACFAqxHP7UBLPX1KE0595lrwmUc9KiFXQqUkN47as6mc8JPh0098tDkMRejHHxv3dG8%2BRHk0lzHzzs0dWfugcYGTADohMOsAesV%2FiUkFz0SKwU75q0%2F%2BhJU6F2%2BpEi%2BzeoMB%2FxnWhq4YlBociDluAbzQO19YsNiKfNE2dB6tJZclyprAyDeHCuJGsCB5tDYJXkOJjvB6otaPb%2F%2BwAghwDI28SixS471oP4AVjfLbFXNdCy36u75a9JfPhT59JSs8gOU%2B1ZObGnNUkKjUeBtoRIXfvl84eYvdvu8J3om0gbRO9tTmjevUe%2FhMI2C%2Bb0GOqUBVak2U5CHj27%2FHNDAqH%2BQzbMv%2FGrw0S26nQnM6OjxnHYZ%2FP%2FouA9ITw4RgF%2F8bcjteoetI6qfOuQM5f06T66doFSDbt2o44KbJjPq4BiJ6JndyIEc2RBKUUr8D%2FeH3Uoen%2BOloh%2FgUchGYQKykgGru72ARu5PDv9zZhiXOjezJoSL4hIxHu%2BJY74dXp6v99nEVOdHRaYAusCXE%2Bxmjm3Uhw6b1w9u&X-Amz-Signature=d036cc00d467e3ff9554efac7db11b82f079f29ee1a7a63387c50916e32a36a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRIH2K2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC5GahDgUW14PweIV6YAcHcxmiSGaIIlgUFft7q%2Bzq%2FQAiEAy%2BThm97BoDepga7e%2B8PV9T6StQ20PiI1e9xhfU0ewGIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBo%2BZ33OPQDbFkxePSrcA%2BspVuAyBfVr%2BvRxwx8FWIEPaYR3N8hAQCRcOdk%2FmaYXT9RIUFVnmzT%2BHTOv2GYfYsicRsfQcCUMEWuXjIgpxfgRcRp9Rv7%2BBUhkycLw5HGa9ERqBPdLIM1VvwiuIBTJuAQKWY%2Fl8FCPQvo7hGGmvCbSfNw0At90Lf4QIeBoJk6djLpRycTglkx3Z3Ab44Qo2jEMHfGQkZEakdI5gny9iH3dlMLfNGZbFFaya%2FtqZKWhNvjOBEXeCF1O%2F9Bv5KjFp9uFoGzba%2FaRO%2BD%2BsWCRRDbXohaOexufskv0vHcIWz4RO1lxo03aX3NIifA99XQ1lrnzHACFAqxHP7UBLPX1KE0595lrwmUc9KiFXQqUkN47as6mc8JPh0098tDkMRejHHxv3dG8%2BRHk0lzHzzs0dWfugcYGTADohMOsAesV%2FiUkFz0SKwU75q0%2F%2BhJU6F2%2BpEi%2BzeoMB%2FxnWhq4YlBociDluAbzQO19YsNiKfNE2dB6tJZclyprAyDeHCuJGsCB5tDYJXkOJjvB6otaPb%2F%2BwAghwDI28SixS471oP4AVjfLbFXNdCy36u75a9JfPhT59JSs8gOU%2B1ZObGnNUkKjUeBtoRIXfvl84eYvdvu8J3om0gbRO9tTmjevUe%2FhMI2C%2Bb0GOqUBVak2U5CHj27%2FHNDAqH%2BQzbMv%2FGrw0S26nQnM6OjxnHYZ%2FP%2FouA9ITw4RgF%2F8bcjteoetI6qfOuQM5f06T66doFSDbt2o44KbJjPq4BiJ6JndyIEc2RBKUUr8D%2FeH3Uoen%2BOloh%2FgUchGYQKykgGru72ARu5PDv9zZhiXOjezJoSL4hIxHu%2BJY74dXp6v99nEVOdHRaYAusCXE%2Bxmjm3Uhw6b1w9u&X-Amz-Signature=7562a2adaf1c3fbd626ae5b250ace2f20958c6c6bb6f5e305cce071638f20a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRIH2K2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC5GahDgUW14PweIV6YAcHcxmiSGaIIlgUFft7q%2Bzq%2FQAiEAy%2BThm97BoDepga7e%2B8PV9T6StQ20PiI1e9xhfU0ewGIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBo%2BZ33OPQDbFkxePSrcA%2BspVuAyBfVr%2BvRxwx8FWIEPaYR3N8hAQCRcOdk%2FmaYXT9RIUFVnmzT%2BHTOv2GYfYsicRsfQcCUMEWuXjIgpxfgRcRp9Rv7%2BBUhkycLw5HGa9ERqBPdLIM1VvwiuIBTJuAQKWY%2Fl8FCPQvo7hGGmvCbSfNw0At90Lf4QIeBoJk6djLpRycTglkx3Z3Ab44Qo2jEMHfGQkZEakdI5gny9iH3dlMLfNGZbFFaya%2FtqZKWhNvjOBEXeCF1O%2F9Bv5KjFp9uFoGzba%2FaRO%2BD%2BsWCRRDbXohaOexufskv0vHcIWz4RO1lxo03aX3NIifA99XQ1lrnzHACFAqxHP7UBLPX1KE0595lrwmUc9KiFXQqUkN47as6mc8JPh0098tDkMRejHHxv3dG8%2BRHk0lzHzzs0dWfugcYGTADohMOsAesV%2FiUkFz0SKwU75q0%2F%2BhJU6F2%2BpEi%2BzeoMB%2FxnWhq4YlBociDluAbzQO19YsNiKfNE2dB6tJZclyprAyDeHCuJGsCB5tDYJXkOJjvB6otaPb%2F%2BwAghwDI28SixS471oP4AVjfLbFXNdCy36u75a9JfPhT59JSs8gOU%2B1ZObGnNUkKjUeBtoRIXfvl84eYvdvu8J3om0gbRO9tTmjevUe%2FhMI2C%2Bb0GOqUBVak2U5CHj27%2FHNDAqH%2BQzbMv%2FGrw0S26nQnM6OjxnHYZ%2FP%2FouA9ITw4RgF%2F8bcjteoetI6qfOuQM5f06T66doFSDbt2o44KbJjPq4BiJ6JndyIEc2RBKUUr8D%2FeH3Uoen%2BOloh%2FgUchGYQKykgGru72ARu5PDv9zZhiXOjezJoSL4hIxHu%2BJY74dXp6v99nEVOdHRaYAusCXE%2Bxmjm3Uhw6b1w9u&X-Amz-Signature=042aa18a016a017fd4733f69ad951d0adea5a2536a49c98133c4c005c2ab41d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
