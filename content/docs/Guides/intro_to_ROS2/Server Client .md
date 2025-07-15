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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAATRKE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDAepKWdcn9kA5SFLagYlImhKDRVN0498vv8FitLMA7PQIgNWpN5GUQBHS%2FmtPhOtjI1nunFyvk5MqmWqdG5bBmiTcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOzC7plF%2F5UnWx27kyrcA70XQB93f5HX%2FXRDQpUmfcIPwmcWYgo942w35ZLR5gctEmVquF5Jdkl17UI3QXVG%2BdtWQCWJYYzTy%2F3W4IN3oEG1eDgpjNPBfRVoZOBcMrj8h6OtPCqSArHRVs%2BH%2B0KCRHvOk8Yxvboj2XAwnpKHdDpo5OMWc26H3mPdSaHY1PPs9Wk0KFRiSai%2BhysoFlezOHjP7hB1q5px8xy%2FKwAQ6P%2BFBGC7EepMtMQi2divYUAoVezNpJxutxLCypLba4HKldSV2u6NhQIWY96QqoRE146FHi2DZFWyTS%2FMaJ43m0DuzfSzP8FTTkH84PayWVmP8x3JKNppK4GUR9qoCfbBSGlNemVJNEBP2H%2FI7jmrr8BsZnpvxjn4AEvuUX4XB%2FxhZRMUBY3ScTh9SC0Mkq9Jk1m4gQ%2FBn9Fce844TdR6CBEj%2F%2FsD%2B173wDbZbj4bgxP6yXbxekfqu3T1j4h8LiFJbp8HCtN1QRfwvtuYHLMzYqAHcH%2BfGtUrgHXY5aoAeeZW4gHIvxU4oFeN8J7%2BLjzauM3hJRIkxjTFdPF5l4P3i%2FSQV11YZ%2BXZ7ETdjwKYw%2BndLiq7XnVpIh9UmTXXbQUY9BV77OoPbrsFD%2BLopX1tD4%2BvRcU7fNQ1K0F4br2bMLKD2cMGOqUBu%2FHSMMWlr57msnSUW4aueDxnzsZr4%2F1HP0Mr35N3GVxm7lxPw8pvoAmAUUPg%2F%2FXMFxN4jkyYcsUpzKXnGiiYlaa9eOHi06df4J95ZboQ8KVEX%2FU%2FNrp2%2BCdl7xLtycQcvPFZkSOEknjiVcVDunsRYWTwaWPscrsWo09EM1asowa2inW8KaKM7de9z9BXNw%2BCK2Ala1hWJQttcSIFqsOrC1OPXUWM&X-Amz-Signature=83018e0470eb9ce056d3442708610e5d77b7901d721d45dc104cd14f9e9ea55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAATRKE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDAepKWdcn9kA5SFLagYlImhKDRVN0498vv8FitLMA7PQIgNWpN5GUQBHS%2FmtPhOtjI1nunFyvk5MqmWqdG5bBmiTcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOzC7plF%2F5UnWx27kyrcA70XQB93f5HX%2FXRDQpUmfcIPwmcWYgo942w35ZLR5gctEmVquF5Jdkl17UI3QXVG%2BdtWQCWJYYzTy%2F3W4IN3oEG1eDgpjNPBfRVoZOBcMrj8h6OtPCqSArHRVs%2BH%2B0KCRHvOk8Yxvboj2XAwnpKHdDpo5OMWc26H3mPdSaHY1PPs9Wk0KFRiSai%2BhysoFlezOHjP7hB1q5px8xy%2FKwAQ6P%2BFBGC7EepMtMQi2divYUAoVezNpJxutxLCypLba4HKldSV2u6NhQIWY96QqoRE146FHi2DZFWyTS%2FMaJ43m0DuzfSzP8FTTkH84PayWVmP8x3JKNppK4GUR9qoCfbBSGlNemVJNEBP2H%2FI7jmrr8BsZnpvxjn4AEvuUX4XB%2FxhZRMUBY3ScTh9SC0Mkq9Jk1m4gQ%2FBn9Fce844TdR6CBEj%2F%2FsD%2B173wDbZbj4bgxP6yXbxekfqu3T1j4h8LiFJbp8HCtN1QRfwvtuYHLMzYqAHcH%2BfGtUrgHXY5aoAeeZW4gHIvxU4oFeN8J7%2BLjzauM3hJRIkxjTFdPF5l4P3i%2FSQV11YZ%2BXZ7ETdjwKYw%2BndLiq7XnVpIh9UmTXXbQUY9BV77OoPbrsFD%2BLopX1tD4%2BvRcU7fNQ1K0F4br2bMLKD2cMGOqUBu%2FHSMMWlr57msnSUW4aueDxnzsZr4%2F1HP0Mr35N3GVxm7lxPw8pvoAmAUUPg%2F%2FXMFxN4jkyYcsUpzKXnGiiYlaa9eOHi06df4J95ZboQ8KVEX%2FU%2FNrp2%2BCdl7xLtycQcvPFZkSOEknjiVcVDunsRYWTwaWPscrsWo09EM1asowa2inW8KaKM7de9z9BXNw%2BCK2Ala1hWJQttcSIFqsOrC1OPXUWM&X-Amz-Signature=e8a0842252331540ade8b8da5af1abee3d7e1b1c3f8d0fd05e3b4eea9556c1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAATRKE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDAepKWdcn9kA5SFLagYlImhKDRVN0498vv8FitLMA7PQIgNWpN5GUQBHS%2FmtPhOtjI1nunFyvk5MqmWqdG5bBmiTcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOzC7plF%2F5UnWx27kyrcA70XQB93f5HX%2FXRDQpUmfcIPwmcWYgo942w35ZLR5gctEmVquF5Jdkl17UI3QXVG%2BdtWQCWJYYzTy%2F3W4IN3oEG1eDgpjNPBfRVoZOBcMrj8h6OtPCqSArHRVs%2BH%2B0KCRHvOk8Yxvboj2XAwnpKHdDpo5OMWc26H3mPdSaHY1PPs9Wk0KFRiSai%2BhysoFlezOHjP7hB1q5px8xy%2FKwAQ6P%2BFBGC7EepMtMQi2divYUAoVezNpJxutxLCypLba4HKldSV2u6NhQIWY96QqoRE146FHi2DZFWyTS%2FMaJ43m0DuzfSzP8FTTkH84PayWVmP8x3JKNppK4GUR9qoCfbBSGlNemVJNEBP2H%2FI7jmrr8BsZnpvxjn4AEvuUX4XB%2FxhZRMUBY3ScTh9SC0Mkq9Jk1m4gQ%2FBn9Fce844TdR6CBEj%2F%2FsD%2B173wDbZbj4bgxP6yXbxekfqu3T1j4h8LiFJbp8HCtN1QRfwvtuYHLMzYqAHcH%2BfGtUrgHXY5aoAeeZW4gHIvxU4oFeN8J7%2BLjzauM3hJRIkxjTFdPF5l4P3i%2FSQV11YZ%2BXZ7ETdjwKYw%2BndLiq7XnVpIh9UmTXXbQUY9BV77OoPbrsFD%2BLopX1tD4%2BvRcU7fNQ1K0F4br2bMLKD2cMGOqUBu%2FHSMMWlr57msnSUW4aueDxnzsZr4%2F1HP0Mr35N3GVxm7lxPw8pvoAmAUUPg%2F%2FXMFxN4jkyYcsUpzKXnGiiYlaa9eOHi06df4J95ZboQ8KVEX%2FU%2FNrp2%2BCdl7xLtycQcvPFZkSOEknjiVcVDunsRYWTwaWPscrsWo09EM1asowa2inW8KaKM7de9z9BXNw%2BCK2Ala1hWJQttcSIFqsOrC1OPXUWM&X-Amz-Signature=22a2af0b73cf35e02d80964ebc49dd7d10650674bb71a75d38a55978cf8f0756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAATRKE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDAepKWdcn9kA5SFLagYlImhKDRVN0498vv8FitLMA7PQIgNWpN5GUQBHS%2FmtPhOtjI1nunFyvk5MqmWqdG5bBmiTcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOzC7plF%2F5UnWx27kyrcA70XQB93f5HX%2FXRDQpUmfcIPwmcWYgo942w35ZLR5gctEmVquF5Jdkl17UI3QXVG%2BdtWQCWJYYzTy%2F3W4IN3oEG1eDgpjNPBfRVoZOBcMrj8h6OtPCqSArHRVs%2BH%2B0KCRHvOk8Yxvboj2XAwnpKHdDpo5OMWc26H3mPdSaHY1PPs9Wk0KFRiSai%2BhysoFlezOHjP7hB1q5px8xy%2FKwAQ6P%2BFBGC7EepMtMQi2divYUAoVezNpJxutxLCypLba4HKldSV2u6NhQIWY96QqoRE146FHi2DZFWyTS%2FMaJ43m0DuzfSzP8FTTkH84PayWVmP8x3JKNppK4GUR9qoCfbBSGlNemVJNEBP2H%2FI7jmrr8BsZnpvxjn4AEvuUX4XB%2FxhZRMUBY3ScTh9SC0Mkq9Jk1m4gQ%2FBn9Fce844TdR6CBEj%2F%2FsD%2B173wDbZbj4bgxP6yXbxekfqu3T1j4h8LiFJbp8HCtN1QRfwvtuYHLMzYqAHcH%2BfGtUrgHXY5aoAeeZW4gHIvxU4oFeN8J7%2BLjzauM3hJRIkxjTFdPF5l4P3i%2FSQV11YZ%2BXZ7ETdjwKYw%2BndLiq7XnVpIh9UmTXXbQUY9BV77OoPbrsFD%2BLopX1tD4%2BvRcU7fNQ1K0F4br2bMLKD2cMGOqUBu%2FHSMMWlr57msnSUW4aueDxnzsZr4%2F1HP0Mr35N3GVxm7lxPw8pvoAmAUUPg%2F%2FXMFxN4jkyYcsUpzKXnGiiYlaa9eOHi06df4J95ZboQ8KVEX%2FU%2FNrp2%2BCdl7xLtycQcvPFZkSOEknjiVcVDunsRYWTwaWPscrsWo09EM1asowa2inW8KaKM7de9z9BXNw%2BCK2Ala1hWJQttcSIFqsOrC1OPXUWM&X-Amz-Signature=97c815f3a8062f3d969f6376f60a87d4ec3f333a157ac603aa3749ac692649f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAATRKE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDAepKWdcn9kA5SFLagYlImhKDRVN0498vv8FitLMA7PQIgNWpN5GUQBHS%2FmtPhOtjI1nunFyvk5MqmWqdG5bBmiTcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOzC7plF%2F5UnWx27kyrcA70XQB93f5HX%2FXRDQpUmfcIPwmcWYgo942w35ZLR5gctEmVquF5Jdkl17UI3QXVG%2BdtWQCWJYYzTy%2F3W4IN3oEG1eDgpjNPBfRVoZOBcMrj8h6OtPCqSArHRVs%2BH%2B0KCRHvOk8Yxvboj2XAwnpKHdDpo5OMWc26H3mPdSaHY1PPs9Wk0KFRiSai%2BhysoFlezOHjP7hB1q5px8xy%2FKwAQ6P%2BFBGC7EepMtMQi2divYUAoVezNpJxutxLCypLba4HKldSV2u6NhQIWY96QqoRE146FHi2DZFWyTS%2FMaJ43m0DuzfSzP8FTTkH84PayWVmP8x3JKNppK4GUR9qoCfbBSGlNemVJNEBP2H%2FI7jmrr8BsZnpvxjn4AEvuUX4XB%2FxhZRMUBY3ScTh9SC0Mkq9Jk1m4gQ%2FBn9Fce844TdR6CBEj%2F%2FsD%2B173wDbZbj4bgxP6yXbxekfqu3T1j4h8LiFJbp8HCtN1QRfwvtuYHLMzYqAHcH%2BfGtUrgHXY5aoAeeZW4gHIvxU4oFeN8J7%2BLjzauM3hJRIkxjTFdPF5l4P3i%2FSQV11YZ%2BXZ7ETdjwKYw%2BndLiq7XnVpIh9UmTXXbQUY9BV77OoPbrsFD%2BLopX1tD4%2BvRcU7fNQ1K0F4br2bMLKD2cMGOqUBu%2FHSMMWlr57msnSUW4aueDxnzsZr4%2F1HP0Mr35N3GVxm7lxPw8pvoAmAUUPg%2F%2FXMFxN4jkyYcsUpzKXnGiiYlaa9eOHi06df4J95ZboQ8KVEX%2FU%2FNrp2%2BCdl7xLtycQcvPFZkSOEknjiVcVDunsRYWTwaWPscrsWo09EM1asowa2inW8KaKM7de9z9BXNw%2BCK2Ala1hWJQttcSIFqsOrC1OPXUWM&X-Amz-Signature=118f1bc18aedeea5f053d2ca59c4d8cbb604ba9ebae3a57302a9ce020dfddaac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
