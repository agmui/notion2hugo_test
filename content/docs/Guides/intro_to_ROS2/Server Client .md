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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3M7YBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCusMwKvpAKfN2U1frTTn0ozUAJ5fLXzbEVB64NcS1%2BkQIgbDR%2FHhpivRkP4MDF1WR46QvOBoWbhUG%2FpiDeiE6LMckqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdEhGUsZ12Wb5PoNircA3a1cW2SnxEg%2BQZVeri4rBexAl1XCA3ATvpA%2B7UaOM4IqmdNW1E%2FeZ3vCZ7mHaqUh8CXVTjHtnJJ3z3tHnGd8wOwyUFJUzrJTgk4X0vecIcUN95CQWkhaoUEOH0ion5jTpLku5pnXsUYP4zi4PQVCarGzrGPPJsaREvl9hr5ObyMX8GV1TVfnz7%2BlwI7kHG02oAthZ3mtypCreRoR6zEMGvyDmzwGjzgHQ%2Fkq%2FuzY2Xkoskdc00VkMf3Vz2P4nU2GLb%2FSkadFAkKpOanodVEjHa3ncGK6KclzSJb14hYYSHZMTp8y3rF1PJJGEhaOa4U5y1pm9RlSadYXy%2F511jxBOyOwPFJTjuX1vhaYe83lW%2FEua5%2FgTSICuh00GJhCXgtqe%2F0xab6RvqfZnc3ZFcHVQn%2BYaXt8lr%2Btw46kY7MqXWUDRvETrwEwz8%2FWNZQDW4Fo5teP7lJajT8EmA5WPIQ0tJ9%2F93pz4Hn1LHkRUQklTCTpFUfjtrYFPfQdZenpWCOYUTDafmDZFfXMjZox%2Fd%2FQV1TR8VCq7DAPsupcVf2pEWDY4%2FMW4XOn3Np8b2FP%2F5CtjguSlpQqOO0c28UXEMzlh00krnMQl%2B6IN0qu2xbJ9cyu8pcoK37y%2BduorSRMKnKscMGOqUBxnMhYK5qHrxTVl11iejSigqdjjXowX73ZttI%2B%2B9w1EegXYNg2F0sg7KfK1MSXWUCl8W4sI%2BCVYxq0ggnOKW4KWUqIYM0H%2Bw5bv2bRvs5%2B3ZBFoR5E0BGaVmig3lnuVIEu6aVZj8PQPOTJM0mbQs5%2F87oUlFpaAmxhDRFSmJtELURehoEBHn90mouve2Dof2kHWMTTIo3%2F2nmMqW943Nh7dvP45Vj&X-Amz-Signature=0ce1af5fa569d2210eba370ed78eeff039664ce267529382a9e413807972e216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3M7YBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCusMwKvpAKfN2U1frTTn0ozUAJ5fLXzbEVB64NcS1%2BkQIgbDR%2FHhpivRkP4MDF1WR46QvOBoWbhUG%2FpiDeiE6LMckqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdEhGUsZ12Wb5PoNircA3a1cW2SnxEg%2BQZVeri4rBexAl1XCA3ATvpA%2B7UaOM4IqmdNW1E%2FeZ3vCZ7mHaqUh8CXVTjHtnJJ3z3tHnGd8wOwyUFJUzrJTgk4X0vecIcUN95CQWkhaoUEOH0ion5jTpLku5pnXsUYP4zi4PQVCarGzrGPPJsaREvl9hr5ObyMX8GV1TVfnz7%2BlwI7kHG02oAthZ3mtypCreRoR6zEMGvyDmzwGjzgHQ%2Fkq%2FuzY2Xkoskdc00VkMf3Vz2P4nU2GLb%2FSkadFAkKpOanodVEjHa3ncGK6KclzSJb14hYYSHZMTp8y3rF1PJJGEhaOa4U5y1pm9RlSadYXy%2F511jxBOyOwPFJTjuX1vhaYe83lW%2FEua5%2FgTSICuh00GJhCXgtqe%2F0xab6RvqfZnc3ZFcHVQn%2BYaXt8lr%2Btw46kY7MqXWUDRvETrwEwz8%2FWNZQDW4Fo5teP7lJajT8EmA5WPIQ0tJ9%2F93pz4Hn1LHkRUQklTCTpFUfjtrYFPfQdZenpWCOYUTDafmDZFfXMjZox%2Fd%2FQV1TR8VCq7DAPsupcVf2pEWDY4%2FMW4XOn3Np8b2FP%2F5CtjguSlpQqOO0c28UXEMzlh00krnMQl%2B6IN0qu2xbJ9cyu8pcoK37y%2BduorSRMKnKscMGOqUBxnMhYK5qHrxTVl11iejSigqdjjXowX73ZttI%2B%2B9w1EegXYNg2F0sg7KfK1MSXWUCl8W4sI%2BCVYxq0ggnOKW4KWUqIYM0H%2Bw5bv2bRvs5%2B3ZBFoR5E0BGaVmig3lnuVIEu6aVZj8PQPOTJM0mbQs5%2F87oUlFpaAmxhDRFSmJtELURehoEBHn90mouve2Dof2kHWMTTIo3%2F2nmMqW943Nh7dvP45Vj&X-Amz-Signature=81f8c3b4f95b2a0b4e845a9c6348367ab938d8887b248fae94cd56fb126e2815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3M7YBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCusMwKvpAKfN2U1frTTn0ozUAJ5fLXzbEVB64NcS1%2BkQIgbDR%2FHhpivRkP4MDF1WR46QvOBoWbhUG%2FpiDeiE6LMckqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdEhGUsZ12Wb5PoNircA3a1cW2SnxEg%2BQZVeri4rBexAl1XCA3ATvpA%2B7UaOM4IqmdNW1E%2FeZ3vCZ7mHaqUh8CXVTjHtnJJ3z3tHnGd8wOwyUFJUzrJTgk4X0vecIcUN95CQWkhaoUEOH0ion5jTpLku5pnXsUYP4zi4PQVCarGzrGPPJsaREvl9hr5ObyMX8GV1TVfnz7%2BlwI7kHG02oAthZ3mtypCreRoR6zEMGvyDmzwGjzgHQ%2Fkq%2FuzY2Xkoskdc00VkMf3Vz2P4nU2GLb%2FSkadFAkKpOanodVEjHa3ncGK6KclzSJb14hYYSHZMTp8y3rF1PJJGEhaOa4U5y1pm9RlSadYXy%2F511jxBOyOwPFJTjuX1vhaYe83lW%2FEua5%2FgTSICuh00GJhCXgtqe%2F0xab6RvqfZnc3ZFcHVQn%2BYaXt8lr%2Btw46kY7MqXWUDRvETrwEwz8%2FWNZQDW4Fo5teP7lJajT8EmA5WPIQ0tJ9%2F93pz4Hn1LHkRUQklTCTpFUfjtrYFPfQdZenpWCOYUTDafmDZFfXMjZox%2Fd%2FQV1TR8VCq7DAPsupcVf2pEWDY4%2FMW4XOn3Np8b2FP%2F5CtjguSlpQqOO0c28UXEMzlh00krnMQl%2B6IN0qu2xbJ9cyu8pcoK37y%2BduorSRMKnKscMGOqUBxnMhYK5qHrxTVl11iejSigqdjjXowX73ZttI%2B%2B9w1EegXYNg2F0sg7KfK1MSXWUCl8W4sI%2BCVYxq0ggnOKW4KWUqIYM0H%2Bw5bv2bRvs5%2B3ZBFoR5E0BGaVmig3lnuVIEu6aVZj8PQPOTJM0mbQs5%2F87oUlFpaAmxhDRFSmJtELURehoEBHn90mouve2Dof2kHWMTTIo3%2F2nmMqW943Nh7dvP45Vj&X-Amz-Signature=7be28c0580206c4aacd1b1cac0a08e62c3aafbf2575289e99e2e6f9281f70b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3M7YBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCusMwKvpAKfN2U1frTTn0ozUAJ5fLXzbEVB64NcS1%2BkQIgbDR%2FHhpivRkP4MDF1WR46QvOBoWbhUG%2FpiDeiE6LMckqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdEhGUsZ12Wb5PoNircA3a1cW2SnxEg%2BQZVeri4rBexAl1XCA3ATvpA%2B7UaOM4IqmdNW1E%2FeZ3vCZ7mHaqUh8CXVTjHtnJJ3z3tHnGd8wOwyUFJUzrJTgk4X0vecIcUN95CQWkhaoUEOH0ion5jTpLku5pnXsUYP4zi4PQVCarGzrGPPJsaREvl9hr5ObyMX8GV1TVfnz7%2BlwI7kHG02oAthZ3mtypCreRoR6zEMGvyDmzwGjzgHQ%2Fkq%2FuzY2Xkoskdc00VkMf3Vz2P4nU2GLb%2FSkadFAkKpOanodVEjHa3ncGK6KclzSJb14hYYSHZMTp8y3rF1PJJGEhaOa4U5y1pm9RlSadYXy%2F511jxBOyOwPFJTjuX1vhaYe83lW%2FEua5%2FgTSICuh00GJhCXgtqe%2F0xab6RvqfZnc3ZFcHVQn%2BYaXt8lr%2Btw46kY7MqXWUDRvETrwEwz8%2FWNZQDW4Fo5teP7lJajT8EmA5WPIQ0tJ9%2F93pz4Hn1LHkRUQklTCTpFUfjtrYFPfQdZenpWCOYUTDafmDZFfXMjZox%2Fd%2FQV1TR8VCq7DAPsupcVf2pEWDY4%2FMW4XOn3Np8b2FP%2F5CtjguSlpQqOO0c28UXEMzlh00krnMQl%2B6IN0qu2xbJ9cyu8pcoK37y%2BduorSRMKnKscMGOqUBxnMhYK5qHrxTVl11iejSigqdjjXowX73ZttI%2B%2B9w1EegXYNg2F0sg7KfK1MSXWUCl8W4sI%2BCVYxq0ggnOKW4KWUqIYM0H%2Bw5bv2bRvs5%2B3ZBFoR5E0BGaVmig3lnuVIEu6aVZj8PQPOTJM0mbQs5%2F87oUlFpaAmxhDRFSmJtELURehoEBHn90mouve2Dof2kHWMTTIo3%2F2nmMqW943Nh7dvP45Vj&X-Amz-Signature=c0c1e79f5bd28da81be0586ab91b40883aebb7ab7ec3e7abe8343963801948bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3M7YBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCusMwKvpAKfN2U1frTTn0ozUAJ5fLXzbEVB64NcS1%2BkQIgbDR%2FHhpivRkP4MDF1WR46QvOBoWbhUG%2FpiDeiE6LMckqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdEhGUsZ12Wb5PoNircA3a1cW2SnxEg%2BQZVeri4rBexAl1XCA3ATvpA%2B7UaOM4IqmdNW1E%2FeZ3vCZ7mHaqUh8CXVTjHtnJJ3z3tHnGd8wOwyUFJUzrJTgk4X0vecIcUN95CQWkhaoUEOH0ion5jTpLku5pnXsUYP4zi4PQVCarGzrGPPJsaREvl9hr5ObyMX8GV1TVfnz7%2BlwI7kHG02oAthZ3mtypCreRoR6zEMGvyDmzwGjzgHQ%2Fkq%2FuzY2Xkoskdc00VkMf3Vz2P4nU2GLb%2FSkadFAkKpOanodVEjHa3ncGK6KclzSJb14hYYSHZMTp8y3rF1PJJGEhaOa4U5y1pm9RlSadYXy%2F511jxBOyOwPFJTjuX1vhaYe83lW%2FEua5%2FgTSICuh00GJhCXgtqe%2F0xab6RvqfZnc3ZFcHVQn%2BYaXt8lr%2Btw46kY7MqXWUDRvETrwEwz8%2FWNZQDW4Fo5teP7lJajT8EmA5WPIQ0tJ9%2F93pz4Hn1LHkRUQklTCTpFUfjtrYFPfQdZenpWCOYUTDafmDZFfXMjZox%2Fd%2FQV1TR8VCq7DAPsupcVf2pEWDY4%2FMW4XOn3Np8b2FP%2F5CtjguSlpQqOO0c28UXEMzlh00krnMQl%2B6IN0qu2xbJ9cyu8pcoK37y%2BduorSRMKnKscMGOqUBxnMhYK5qHrxTVl11iejSigqdjjXowX73ZttI%2B%2B9w1EegXYNg2F0sg7KfK1MSXWUCl8W4sI%2BCVYxq0ggnOKW4KWUqIYM0H%2Bw5bv2bRvs5%2B3ZBFoR5E0BGaVmig3lnuVIEu6aVZj8PQPOTJM0mbQs5%2F87oUlFpaAmxhDRFSmJtELURehoEBHn90mouve2Dof2kHWMTTIo3%2F2nmMqW943Nh7dvP45Vj&X-Amz-Signature=f0d9189d48f4dcb44a512a5d80b1140ae3be1e34db65baf712a95310affbfdf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
