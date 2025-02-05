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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VHILLI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCy%2BVmlh3G6qHAnXYaEe%2FwE7zmaSjTjQY8jpnnWQT2j6wIgRues1Ch9XOVu6F%2FW%2F8h0mny4ZpZgeC9NXcHRHkTffSgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLcVsTgHvA2cIQ3H7SrcAz3WZh5zc%2BcKy6d17c2RQPUyfI%2B1dwt5Vb%2F%2BqjQ0aD7KSs3Ey3J%2FJn15eRMyLdi7pEkZUns80jaHcL97zdzWIgxz3I5%2FtkaQhx1Qg0CrALO6xx4i%2FC1kiq9Xe3WhJwR0PClTr2vA4ZJrHROlV4DmBoFY9dHeOZgu5wfTU47X1OKHrdOlBEcWAJo2Ef0AsYi46R5b0Cc28ZfjQZeb9%2FKvIksqq4ue50Jnqgg6ISjOLehvfyBndmjJD6qKYEsr3AzA8cU%2Bm7Lzc49iRqKU3PbAHT%2FX4%2BfvKCgQ0BJyfUcfPIGqElrUevxpbVOhkd%2FmPaAthcEe8OTEvd%2FIstdNdQxlNqspQ%2FuVbcXhs%2Bk6mcMP5L2i2qWPu7vjzYXmX43GDfR6C49D1SL1Y3h%2BGdhaZOLf43wbimZE9bxVBps5A3Vhe3KTEGjDzh0ahy9vWQTviHM%2F4Xx2xGK0552pJl6uzd%2B6E2pEra%2FGXRLT7dsqZRr2%2BPB6wyme6rNUsf%2B%2FgYHLdfbGWE30yv34dKWf31nr7JMuS6Av6r9pGBplGBFqcxEwK9a4WH7Dp8JZQBzwnOBYfQ5MdeOOQVjWaKr2noGs3fE2Z63o0ezULb%2BhADXGeShw7uO8s3cYSsRQX2plp45TMIiNjb0GOqUBx9e6beLrjdJR6nhhJoPEk47KibbG7ktE%2BO%2Bhz7bhrja4BCp3vYjmO6ZlN1Ix8DiqJ7CcRnzlfOFp9xDUTkwj0eywjHYOx98Y3m47cyHbhcAO2AKd95TNr5RkZOnWZF1efIKZodfIbRkqCn3FOj29X5r4pdjLvRPthUxjw5V0WWq1hrxsCieQHdB8azYcC3leQoKQaw5e0%2FW2f3T5X%2FjsI4K5UMR5&X-Amz-Signature=88001b6bcee3737d656a2090ed71411534e3b27cf2941038e7f4ead83a7a6835&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VHILLI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCy%2BVmlh3G6qHAnXYaEe%2FwE7zmaSjTjQY8jpnnWQT2j6wIgRues1Ch9XOVu6F%2FW%2F8h0mny4ZpZgeC9NXcHRHkTffSgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLcVsTgHvA2cIQ3H7SrcAz3WZh5zc%2BcKy6d17c2RQPUyfI%2B1dwt5Vb%2F%2BqjQ0aD7KSs3Ey3J%2FJn15eRMyLdi7pEkZUns80jaHcL97zdzWIgxz3I5%2FtkaQhx1Qg0CrALO6xx4i%2FC1kiq9Xe3WhJwR0PClTr2vA4ZJrHROlV4DmBoFY9dHeOZgu5wfTU47X1OKHrdOlBEcWAJo2Ef0AsYi46R5b0Cc28ZfjQZeb9%2FKvIksqq4ue50Jnqgg6ISjOLehvfyBndmjJD6qKYEsr3AzA8cU%2Bm7Lzc49iRqKU3PbAHT%2FX4%2BfvKCgQ0BJyfUcfPIGqElrUevxpbVOhkd%2FmPaAthcEe8OTEvd%2FIstdNdQxlNqspQ%2FuVbcXhs%2Bk6mcMP5L2i2qWPu7vjzYXmX43GDfR6C49D1SL1Y3h%2BGdhaZOLf43wbimZE9bxVBps5A3Vhe3KTEGjDzh0ahy9vWQTviHM%2F4Xx2xGK0552pJl6uzd%2B6E2pEra%2FGXRLT7dsqZRr2%2BPB6wyme6rNUsf%2B%2FgYHLdfbGWE30yv34dKWf31nr7JMuS6Av6r9pGBplGBFqcxEwK9a4WH7Dp8JZQBzwnOBYfQ5MdeOOQVjWaKr2noGs3fE2Z63o0ezULb%2BhADXGeShw7uO8s3cYSsRQX2plp45TMIiNjb0GOqUBx9e6beLrjdJR6nhhJoPEk47KibbG7ktE%2BO%2Bhz7bhrja4BCp3vYjmO6ZlN1Ix8DiqJ7CcRnzlfOFp9xDUTkwj0eywjHYOx98Y3m47cyHbhcAO2AKd95TNr5RkZOnWZF1efIKZodfIbRkqCn3FOj29X5r4pdjLvRPthUxjw5V0WWq1hrxsCieQHdB8azYcC3leQoKQaw5e0%2FW2f3T5X%2FjsI4K5UMR5&X-Amz-Signature=c34b905b856d49207d18ce9edfe5897d5c58e84d2a15701b882232d4e0043fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VHILLI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCy%2BVmlh3G6qHAnXYaEe%2FwE7zmaSjTjQY8jpnnWQT2j6wIgRues1Ch9XOVu6F%2FW%2F8h0mny4ZpZgeC9NXcHRHkTffSgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLcVsTgHvA2cIQ3H7SrcAz3WZh5zc%2BcKy6d17c2RQPUyfI%2B1dwt5Vb%2F%2BqjQ0aD7KSs3Ey3J%2FJn15eRMyLdi7pEkZUns80jaHcL97zdzWIgxz3I5%2FtkaQhx1Qg0CrALO6xx4i%2FC1kiq9Xe3WhJwR0PClTr2vA4ZJrHROlV4DmBoFY9dHeOZgu5wfTU47X1OKHrdOlBEcWAJo2Ef0AsYi46R5b0Cc28ZfjQZeb9%2FKvIksqq4ue50Jnqgg6ISjOLehvfyBndmjJD6qKYEsr3AzA8cU%2Bm7Lzc49iRqKU3PbAHT%2FX4%2BfvKCgQ0BJyfUcfPIGqElrUevxpbVOhkd%2FmPaAthcEe8OTEvd%2FIstdNdQxlNqspQ%2FuVbcXhs%2Bk6mcMP5L2i2qWPu7vjzYXmX43GDfR6C49D1SL1Y3h%2BGdhaZOLf43wbimZE9bxVBps5A3Vhe3KTEGjDzh0ahy9vWQTviHM%2F4Xx2xGK0552pJl6uzd%2B6E2pEra%2FGXRLT7dsqZRr2%2BPB6wyme6rNUsf%2B%2FgYHLdfbGWE30yv34dKWf31nr7JMuS6Av6r9pGBplGBFqcxEwK9a4WH7Dp8JZQBzwnOBYfQ5MdeOOQVjWaKr2noGs3fE2Z63o0ezULb%2BhADXGeShw7uO8s3cYSsRQX2plp45TMIiNjb0GOqUBx9e6beLrjdJR6nhhJoPEk47KibbG7ktE%2BO%2Bhz7bhrja4BCp3vYjmO6ZlN1Ix8DiqJ7CcRnzlfOFp9xDUTkwj0eywjHYOx98Y3m47cyHbhcAO2AKd95TNr5RkZOnWZF1efIKZodfIbRkqCn3FOj29X5r4pdjLvRPthUxjw5V0WWq1hrxsCieQHdB8azYcC3leQoKQaw5e0%2FW2f3T5X%2FjsI4K5UMR5&X-Amz-Signature=fc5e18769f647267fbb68c0a884183dd759f51f20b00bdd96252ed4cf5cf69ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VHILLI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCy%2BVmlh3G6qHAnXYaEe%2FwE7zmaSjTjQY8jpnnWQT2j6wIgRues1Ch9XOVu6F%2FW%2F8h0mny4ZpZgeC9NXcHRHkTffSgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLcVsTgHvA2cIQ3H7SrcAz3WZh5zc%2BcKy6d17c2RQPUyfI%2B1dwt5Vb%2F%2BqjQ0aD7KSs3Ey3J%2FJn15eRMyLdi7pEkZUns80jaHcL97zdzWIgxz3I5%2FtkaQhx1Qg0CrALO6xx4i%2FC1kiq9Xe3WhJwR0PClTr2vA4ZJrHROlV4DmBoFY9dHeOZgu5wfTU47X1OKHrdOlBEcWAJo2Ef0AsYi46R5b0Cc28ZfjQZeb9%2FKvIksqq4ue50Jnqgg6ISjOLehvfyBndmjJD6qKYEsr3AzA8cU%2Bm7Lzc49iRqKU3PbAHT%2FX4%2BfvKCgQ0BJyfUcfPIGqElrUevxpbVOhkd%2FmPaAthcEe8OTEvd%2FIstdNdQxlNqspQ%2FuVbcXhs%2Bk6mcMP5L2i2qWPu7vjzYXmX43GDfR6C49D1SL1Y3h%2BGdhaZOLf43wbimZE9bxVBps5A3Vhe3KTEGjDzh0ahy9vWQTviHM%2F4Xx2xGK0552pJl6uzd%2B6E2pEra%2FGXRLT7dsqZRr2%2BPB6wyme6rNUsf%2B%2FgYHLdfbGWE30yv34dKWf31nr7JMuS6Av6r9pGBplGBFqcxEwK9a4WH7Dp8JZQBzwnOBYfQ5MdeOOQVjWaKr2noGs3fE2Z63o0ezULb%2BhADXGeShw7uO8s3cYSsRQX2plp45TMIiNjb0GOqUBx9e6beLrjdJR6nhhJoPEk47KibbG7ktE%2BO%2Bhz7bhrja4BCp3vYjmO6ZlN1Ix8DiqJ7CcRnzlfOFp9xDUTkwj0eywjHYOx98Y3m47cyHbhcAO2AKd95TNr5RkZOnWZF1efIKZodfIbRkqCn3FOj29X5r4pdjLvRPthUxjw5V0WWq1hrxsCieQHdB8azYcC3leQoKQaw5e0%2FW2f3T5X%2FjsI4K5UMR5&X-Amz-Signature=e9223a5e25d106db8c27ba6246b7b7f020dc07554b103741009ffbe07a873f96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VHILLI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCy%2BVmlh3G6qHAnXYaEe%2FwE7zmaSjTjQY8jpnnWQT2j6wIgRues1Ch9XOVu6F%2FW%2F8h0mny4ZpZgeC9NXcHRHkTffSgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLcVsTgHvA2cIQ3H7SrcAz3WZh5zc%2BcKy6d17c2RQPUyfI%2B1dwt5Vb%2F%2BqjQ0aD7KSs3Ey3J%2FJn15eRMyLdi7pEkZUns80jaHcL97zdzWIgxz3I5%2FtkaQhx1Qg0CrALO6xx4i%2FC1kiq9Xe3WhJwR0PClTr2vA4ZJrHROlV4DmBoFY9dHeOZgu5wfTU47X1OKHrdOlBEcWAJo2Ef0AsYi46R5b0Cc28ZfjQZeb9%2FKvIksqq4ue50Jnqgg6ISjOLehvfyBndmjJD6qKYEsr3AzA8cU%2Bm7Lzc49iRqKU3PbAHT%2FX4%2BfvKCgQ0BJyfUcfPIGqElrUevxpbVOhkd%2FmPaAthcEe8OTEvd%2FIstdNdQxlNqspQ%2FuVbcXhs%2Bk6mcMP5L2i2qWPu7vjzYXmX43GDfR6C49D1SL1Y3h%2BGdhaZOLf43wbimZE9bxVBps5A3Vhe3KTEGjDzh0ahy9vWQTviHM%2F4Xx2xGK0552pJl6uzd%2B6E2pEra%2FGXRLT7dsqZRr2%2BPB6wyme6rNUsf%2B%2FgYHLdfbGWE30yv34dKWf31nr7JMuS6Av6r9pGBplGBFqcxEwK9a4WH7Dp8JZQBzwnOBYfQ5MdeOOQVjWaKr2noGs3fE2Z63o0ezULb%2BhADXGeShw7uO8s3cYSsRQX2plp45TMIiNjb0GOqUBx9e6beLrjdJR6nhhJoPEk47KibbG7ktE%2BO%2Bhz7bhrja4BCp3vYjmO6ZlN1Ix8DiqJ7CcRnzlfOFp9xDUTkwj0eywjHYOx98Y3m47cyHbhcAO2AKd95TNr5RkZOnWZF1efIKZodfIbRkqCn3FOj29X5r4pdjLvRPthUxjw5V0WWq1hrxsCieQHdB8azYcC3leQoKQaw5e0%2FW2f3T5X%2FjsI4K5UMR5&X-Amz-Signature=a5ca0a5c11c39446929c60afa15dceb41a6167b7149a18c626bb9ab67feb26d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
