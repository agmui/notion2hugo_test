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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWNXWRR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9awk%2BEih2NOK8hc4XpiQP4NXdz4yKxVvq8D4rvBaVxQIgH0FGIh8%2FyX0Z7FQpA%2BmVbsqn9D09CzicusVIZa0ARckqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdtcrw0ugRcTfY%2BxCrcA4%2Fp6Eu4k5JE2kJKcsRcvnCjsrxevoQ99XwXg%2BETo5mvBX0qnbQ90zavTHIVFyc3tKtoi5WTlxD4Io5QqSeCDyQ6xLJ1aIVPo2Phop%2BO9GVChtHAnWWdj2m6fIsmnE%2FY%2BD60RLA0l%2Fa8%2Fro7zvu09Gz1M2V54295vuKQvVXNJ47KRyJIUUHie4XbMW7HEMAxh1pKo0iw5%2BPcwd%2FKdBG7O0xuNC2%2B1gBi3SPLou%2Br5Nu72tbepPIdh%2FhbcIPmIw2caEugI5uo06ixyihDMSWqqclbJ8P8IwndST33ftxTjoDmR2sexOz53VibETP%2B1nwF57tAiVOAr0Nr6qTkicpN8Qbpc9Jcb8gnNcgH%2BQRiBd8saY8MimDloNZL5EXG9JnVz4J9nNzhFsdOeBtFsmXcKbwmfC6NoWLeOs3swnVuz3%2B3qA5K%2BSJ0Np8XpeTElV6UwPOpgHRuXGI%2FqVaCLgNFuYn820Uic8lBzjyqVfgM6Q5OjFXvVCp1%2BxgyJ27g0LFU63LJpUkYYojoUdO29sa2mfwZRuSWjVNN4OpCFygP43rY7qABlUTPrk8w81F5X2smh2WBc3d1sR0e6HGe15v%2BlrjrOr%2Bysed68YjYNLLUNI2E7XAkLtekWNH%2FzSZ%2FMPmjyr4GOqUBXEre4qWhNcxAauyIzrWyUIRzbgqRX8YWdFi%2F6dVBE593P89%2BjxjeTkjeRP6miJ8FTjCfU30CX8IEWbylkQv6csNu0qA7o6OsQQvAdqCMXooTx%2F4qAv5ZCaAkK5KLiR5gBucKkKoR%2FTocbN6x%2F1nCT7P84KfUJcATYNvFElpjyJRO4dVOunlvGKOK8loeqRtEaiEKljndqNXXSmseXy6JTZyK6P1O&X-Amz-Signature=f5332125503347ef91ae1cfa714769016d628ec00314231b6b0a1c1bad20eadf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWNXWRR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9awk%2BEih2NOK8hc4XpiQP4NXdz4yKxVvq8D4rvBaVxQIgH0FGIh8%2FyX0Z7FQpA%2BmVbsqn9D09CzicusVIZa0ARckqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdtcrw0ugRcTfY%2BxCrcA4%2Fp6Eu4k5JE2kJKcsRcvnCjsrxevoQ99XwXg%2BETo5mvBX0qnbQ90zavTHIVFyc3tKtoi5WTlxD4Io5QqSeCDyQ6xLJ1aIVPo2Phop%2BO9GVChtHAnWWdj2m6fIsmnE%2FY%2BD60RLA0l%2Fa8%2Fro7zvu09Gz1M2V54295vuKQvVXNJ47KRyJIUUHie4XbMW7HEMAxh1pKo0iw5%2BPcwd%2FKdBG7O0xuNC2%2B1gBi3SPLou%2Br5Nu72tbepPIdh%2FhbcIPmIw2caEugI5uo06ixyihDMSWqqclbJ8P8IwndST33ftxTjoDmR2sexOz53VibETP%2B1nwF57tAiVOAr0Nr6qTkicpN8Qbpc9Jcb8gnNcgH%2BQRiBd8saY8MimDloNZL5EXG9JnVz4J9nNzhFsdOeBtFsmXcKbwmfC6NoWLeOs3swnVuz3%2B3qA5K%2BSJ0Np8XpeTElV6UwPOpgHRuXGI%2FqVaCLgNFuYn820Uic8lBzjyqVfgM6Q5OjFXvVCp1%2BxgyJ27g0LFU63LJpUkYYojoUdO29sa2mfwZRuSWjVNN4OpCFygP43rY7qABlUTPrk8w81F5X2smh2WBc3d1sR0e6HGe15v%2BlrjrOr%2Bysed68YjYNLLUNI2E7XAkLtekWNH%2FzSZ%2FMPmjyr4GOqUBXEre4qWhNcxAauyIzrWyUIRzbgqRX8YWdFi%2F6dVBE593P89%2BjxjeTkjeRP6miJ8FTjCfU30CX8IEWbylkQv6csNu0qA7o6OsQQvAdqCMXooTx%2F4qAv5ZCaAkK5KLiR5gBucKkKoR%2FTocbN6x%2F1nCT7P84KfUJcATYNvFElpjyJRO4dVOunlvGKOK8loeqRtEaiEKljndqNXXSmseXy6JTZyK6P1O&X-Amz-Signature=a4eb32f6e25cb9ae83530375e1704484f32129f7c7aef4b41d4c2890e89b5995&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWNXWRR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9awk%2BEih2NOK8hc4XpiQP4NXdz4yKxVvq8D4rvBaVxQIgH0FGIh8%2FyX0Z7FQpA%2BmVbsqn9D09CzicusVIZa0ARckqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdtcrw0ugRcTfY%2BxCrcA4%2Fp6Eu4k5JE2kJKcsRcvnCjsrxevoQ99XwXg%2BETo5mvBX0qnbQ90zavTHIVFyc3tKtoi5WTlxD4Io5QqSeCDyQ6xLJ1aIVPo2Phop%2BO9GVChtHAnWWdj2m6fIsmnE%2FY%2BD60RLA0l%2Fa8%2Fro7zvu09Gz1M2V54295vuKQvVXNJ47KRyJIUUHie4XbMW7HEMAxh1pKo0iw5%2BPcwd%2FKdBG7O0xuNC2%2B1gBi3SPLou%2Br5Nu72tbepPIdh%2FhbcIPmIw2caEugI5uo06ixyihDMSWqqclbJ8P8IwndST33ftxTjoDmR2sexOz53VibETP%2B1nwF57tAiVOAr0Nr6qTkicpN8Qbpc9Jcb8gnNcgH%2BQRiBd8saY8MimDloNZL5EXG9JnVz4J9nNzhFsdOeBtFsmXcKbwmfC6NoWLeOs3swnVuz3%2B3qA5K%2BSJ0Np8XpeTElV6UwPOpgHRuXGI%2FqVaCLgNFuYn820Uic8lBzjyqVfgM6Q5OjFXvVCp1%2BxgyJ27g0LFU63LJpUkYYojoUdO29sa2mfwZRuSWjVNN4OpCFygP43rY7qABlUTPrk8w81F5X2smh2WBc3d1sR0e6HGe15v%2BlrjrOr%2Bysed68YjYNLLUNI2E7XAkLtekWNH%2FzSZ%2FMPmjyr4GOqUBXEre4qWhNcxAauyIzrWyUIRzbgqRX8YWdFi%2F6dVBE593P89%2BjxjeTkjeRP6miJ8FTjCfU30CX8IEWbylkQv6csNu0qA7o6OsQQvAdqCMXooTx%2F4qAv5ZCaAkK5KLiR5gBucKkKoR%2FTocbN6x%2F1nCT7P84KfUJcATYNvFElpjyJRO4dVOunlvGKOK8loeqRtEaiEKljndqNXXSmseXy6JTZyK6P1O&X-Amz-Signature=64ac31718cc71ddfeba3d554216c971fbff0ca7548cf205eea41a4d2ec945f66&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWNXWRR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9awk%2BEih2NOK8hc4XpiQP4NXdz4yKxVvq8D4rvBaVxQIgH0FGIh8%2FyX0Z7FQpA%2BmVbsqn9D09CzicusVIZa0ARckqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdtcrw0ugRcTfY%2BxCrcA4%2Fp6Eu4k5JE2kJKcsRcvnCjsrxevoQ99XwXg%2BETo5mvBX0qnbQ90zavTHIVFyc3tKtoi5WTlxD4Io5QqSeCDyQ6xLJ1aIVPo2Phop%2BO9GVChtHAnWWdj2m6fIsmnE%2FY%2BD60RLA0l%2Fa8%2Fro7zvu09Gz1M2V54295vuKQvVXNJ47KRyJIUUHie4XbMW7HEMAxh1pKo0iw5%2BPcwd%2FKdBG7O0xuNC2%2B1gBi3SPLou%2Br5Nu72tbepPIdh%2FhbcIPmIw2caEugI5uo06ixyihDMSWqqclbJ8P8IwndST33ftxTjoDmR2sexOz53VibETP%2B1nwF57tAiVOAr0Nr6qTkicpN8Qbpc9Jcb8gnNcgH%2BQRiBd8saY8MimDloNZL5EXG9JnVz4J9nNzhFsdOeBtFsmXcKbwmfC6NoWLeOs3swnVuz3%2B3qA5K%2BSJ0Np8XpeTElV6UwPOpgHRuXGI%2FqVaCLgNFuYn820Uic8lBzjyqVfgM6Q5OjFXvVCp1%2BxgyJ27g0LFU63LJpUkYYojoUdO29sa2mfwZRuSWjVNN4OpCFygP43rY7qABlUTPrk8w81F5X2smh2WBc3d1sR0e6HGe15v%2BlrjrOr%2Bysed68YjYNLLUNI2E7XAkLtekWNH%2FzSZ%2FMPmjyr4GOqUBXEre4qWhNcxAauyIzrWyUIRzbgqRX8YWdFi%2F6dVBE593P89%2BjxjeTkjeRP6miJ8FTjCfU30CX8IEWbylkQv6csNu0qA7o6OsQQvAdqCMXooTx%2F4qAv5ZCaAkK5KLiR5gBucKkKoR%2FTocbN6x%2F1nCT7P84KfUJcATYNvFElpjyJRO4dVOunlvGKOK8loeqRtEaiEKljndqNXXSmseXy6JTZyK6P1O&X-Amz-Signature=8c08d90f1d1ccec019298f823fbdfc9a2f98a4ed28bf436fccd29817d0d0b07b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWNXWRR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9awk%2BEih2NOK8hc4XpiQP4NXdz4yKxVvq8D4rvBaVxQIgH0FGIh8%2FyX0Z7FQpA%2BmVbsqn9D09CzicusVIZa0ARckqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdtcrw0ugRcTfY%2BxCrcA4%2Fp6Eu4k5JE2kJKcsRcvnCjsrxevoQ99XwXg%2BETo5mvBX0qnbQ90zavTHIVFyc3tKtoi5WTlxD4Io5QqSeCDyQ6xLJ1aIVPo2Phop%2BO9GVChtHAnWWdj2m6fIsmnE%2FY%2BD60RLA0l%2Fa8%2Fro7zvu09Gz1M2V54295vuKQvVXNJ47KRyJIUUHie4XbMW7HEMAxh1pKo0iw5%2BPcwd%2FKdBG7O0xuNC2%2B1gBi3SPLou%2Br5Nu72tbepPIdh%2FhbcIPmIw2caEugI5uo06ixyihDMSWqqclbJ8P8IwndST33ftxTjoDmR2sexOz53VibETP%2B1nwF57tAiVOAr0Nr6qTkicpN8Qbpc9Jcb8gnNcgH%2BQRiBd8saY8MimDloNZL5EXG9JnVz4J9nNzhFsdOeBtFsmXcKbwmfC6NoWLeOs3swnVuz3%2B3qA5K%2BSJ0Np8XpeTElV6UwPOpgHRuXGI%2FqVaCLgNFuYn820Uic8lBzjyqVfgM6Q5OjFXvVCp1%2BxgyJ27g0LFU63LJpUkYYojoUdO29sa2mfwZRuSWjVNN4OpCFygP43rY7qABlUTPrk8w81F5X2smh2WBc3d1sR0e6HGe15v%2BlrjrOr%2Bysed68YjYNLLUNI2E7XAkLtekWNH%2FzSZ%2FMPmjyr4GOqUBXEre4qWhNcxAauyIzrWyUIRzbgqRX8YWdFi%2F6dVBE593P89%2BjxjeTkjeRP6miJ8FTjCfU30CX8IEWbylkQv6csNu0qA7o6OsQQvAdqCMXooTx%2F4qAv5ZCaAkK5KLiR5gBucKkKoR%2FTocbN6x%2F1nCT7P84KfUJcATYNvFElpjyJRO4dVOunlvGKOK8loeqRtEaiEKljndqNXXSmseXy6JTZyK6P1O&X-Amz-Signature=f5de0f9bb79dca4ee38e1d75736c67e28b369a46b646de08c603c95da53afa40&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
