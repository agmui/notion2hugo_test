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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDHU2FV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mXiixMnAJ%2FuM7s08Q31c%2FLpWZKiYaINCXQ4yLS1ZFAiBmFoqnGPZiCoF%2Fm3HxlAozHIDLSnbMkX5EO70eMcnKgCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMLPYxEDf71vEGl2USKtwD1SPaXpo%2BSqRwytMnVooUbYogkRRGQ0XEG0a1PyoK1fBbyQGdeDJmWVFxOIlwg37uRmswa9ZvkNiFByMTBSwQKvl0ZbBRmJtcAGcDHg6Jp%2F54BLi7lMpFAvysre5LcYcj37vDL%2B0I1Fe7W5hbOhQhL2VehzGyBxZqm9WQ6Nj22O55dGjBHYoLA5SN7sP3AO0e5wUuLl44x7X6YjRDqeCp0xKMGG0yBlCb%2FwoGBdfRRWPswYcomrbJVKbjWIqwHl5Kuc7NXdsYTDdxrwiAkUKV%2Ff7k65xPEfksFfG9uLfIWEHOZIKiYgJzHrEb%2BU54r1LJzV2RluRbXKex0LGZLe1IDKJKvWdKkQnEVIFLGM3OrSbSEfr7jjP1fKSrkZEEFpTH7X38tyJ6sdkccdOdyXt8XZuY0O9Sdu%2BPNFPZucSnLcxZ1K7MipbL8BzOrGe%2Bgo2%2B9Oop3G%2FfQD2qh3kG9yRL7q5ZUG3%2BITEr89opuLNPQ6KWmjdK1Pn1Uh3uyjysjaUET2wVRLY8Oy%2FH2TjrHV8Y7Sa7md3t%2B8vYFPjKZTdMo63yseawZXzILRNLYqG%2B%2B1X%2Bb6Li6HaOtI4yTQh0Ylf1ijdeGel3%2Fxpl5fcKULdSM8QNkh%2FQjFiU9615ghowi62IwAY6pgF%2F%2Fl9o%2BzNome763v%2Blmu7qY%2Bqn%2FxIOtmzwhGTdiXDCyLjU7MSQWDWmElh6ra%2ByEoUoeDVwh1W60Nm1jhgCgJltORUgK0akP%2BQbuOVOmCdMWF81DFakl7eiABdbANL4BT4%2FbGrrinflffE09UeOUmjWshsRQEerXEToOCWCjisgv%2BSVlyL9ioOvexQybIItUN2gPxv0m2uvHtkoo%2FBeegRHoMqRLvWp&X-Amz-Signature=e5c6ca93d4c239dcd349fe3899b506957276811ad6d25f4197799a4c496a406d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDHU2FV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mXiixMnAJ%2FuM7s08Q31c%2FLpWZKiYaINCXQ4yLS1ZFAiBmFoqnGPZiCoF%2Fm3HxlAozHIDLSnbMkX5EO70eMcnKgCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMLPYxEDf71vEGl2USKtwD1SPaXpo%2BSqRwytMnVooUbYogkRRGQ0XEG0a1PyoK1fBbyQGdeDJmWVFxOIlwg37uRmswa9ZvkNiFByMTBSwQKvl0ZbBRmJtcAGcDHg6Jp%2F54BLi7lMpFAvysre5LcYcj37vDL%2B0I1Fe7W5hbOhQhL2VehzGyBxZqm9WQ6Nj22O55dGjBHYoLA5SN7sP3AO0e5wUuLl44x7X6YjRDqeCp0xKMGG0yBlCb%2FwoGBdfRRWPswYcomrbJVKbjWIqwHl5Kuc7NXdsYTDdxrwiAkUKV%2Ff7k65xPEfksFfG9uLfIWEHOZIKiYgJzHrEb%2BU54r1LJzV2RluRbXKex0LGZLe1IDKJKvWdKkQnEVIFLGM3OrSbSEfr7jjP1fKSrkZEEFpTH7X38tyJ6sdkccdOdyXt8XZuY0O9Sdu%2BPNFPZucSnLcxZ1K7MipbL8BzOrGe%2Bgo2%2B9Oop3G%2FfQD2qh3kG9yRL7q5ZUG3%2BITEr89opuLNPQ6KWmjdK1Pn1Uh3uyjysjaUET2wVRLY8Oy%2FH2TjrHV8Y7Sa7md3t%2B8vYFPjKZTdMo63yseawZXzILRNLYqG%2B%2B1X%2Bb6Li6HaOtI4yTQh0Ylf1ijdeGel3%2Fxpl5fcKULdSM8QNkh%2FQjFiU9615ghowi62IwAY6pgF%2F%2Fl9o%2BzNome763v%2Blmu7qY%2Bqn%2FxIOtmzwhGTdiXDCyLjU7MSQWDWmElh6ra%2ByEoUoeDVwh1W60Nm1jhgCgJltORUgK0akP%2BQbuOVOmCdMWF81DFakl7eiABdbANL4BT4%2FbGrrinflffE09UeOUmjWshsRQEerXEToOCWCjisgv%2BSVlyL9ioOvexQybIItUN2gPxv0m2uvHtkoo%2FBeegRHoMqRLvWp&X-Amz-Signature=4629d1e8695c990c179fbbaba21b7e2ed707c3e495bd9b2782f23527a4180383&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDHU2FV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mXiixMnAJ%2FuM7s08Q31c%2FLpWZKiYaINCXQ4yLS1ZFAiBmFoqnGPZiCoF%2Fm3HxlAozHIDLSnbMkX5EO70eMcnKgCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMLPYxEDf71vEGl2USKtwD1SPaXpo%2BSqRwytMnVooUbYogkRRGQ0XEG0a1PyoK1fBbyQGdeDJmWVFxOIlwg37uRmswa9ZvkNiFByMTBSwQKvl0ZbBRmJtcAGcDHg6Jp%2F54BLi7lMpFAvysre5LcYcj37vDL%2B0I1Fe7W5hbOhQhL2VehzGyBxZqm9WQ6Nj22O55dGjBHYoLA5SN7sP3AO0e5wUuLl44x7X6YjRDqeCp0xKMGG0yBlCb%2FwoGBdfRRWPswYcomrbJVKbjWIqwHl5Kuc7NXdsYTDdxrwiAkUKV%2Ff7k65xPEfksFfG9uLfIWEHOZIKiYgJzHrEb%2BU54r1LJzV2RluRbXKex0LGZLe1IDKJKvWdKkQnEVIFLGM3OrSbSEfr7jjP1fKSrkZEEFpTH7X38tyJ6sdkccdOdyXt8XZuY0O9Sdu%2BPNFPZucSnLcxZ1K7MipbL8BzOrGe%2Bgo2%2B9Oop3G%2FfQD2qh3kG9yRL7q5ZUG3%2BITEr89opuLNPQ6KWmjdK1Pn1Uh3uyjysjaUET2wVRLY8Oy%2FH2TjrHV8Y7Sa7md3t%2B8vYFPjKZTdMo63yseawZXzILRNLYqG%2B%2B1X%2Bb6Li6HaOtI4yTQh0Ylf1ijdeGel3%2Fxpl5fcKULdSM8QNkh%2FQjFiU9615ghowi62IwAY6pgF%2F%2Fl9o%2BzNome763v%2Blmu7qY%2Bqn%2FxIOtmzwhGTdiXDCyLjU7MSQWDWmElh6ra%2ByEoUoeDVwh1W60Nm1jhgCgJltORUgK0akP%2BQbuOVOmCdMWF81DFakl7eiABdbANL4BT4%2FbGrrinflffE09UeOUmjWshsRQEerXEToOCWCjisgv%2BSVlyL9ioOvexQybIItUN2gPxv0m2uvHtkoo%2FBeegRHoMqRLvWp&X-Amz-Signature=4c77212bf2561330ddec350a1029b4f4427b474b0629fc01cb02f48874a59287&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDHU2FV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mXiixMnAJ%2FuM7s08Q31c%2FLpWZKiYaINCXQ4yLS1ZFAiBmFoqnGPZiCoF%2Fm3HxlAozHIDLSnbMkX5EO70eMcnKgCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMLPYxEDf71vEGl2USKtwD1SPaXpo%2BSqRwytMnVooUbYogkRRGQ0XEG0a1PyoK1fBbyQGdeDJmWVFxOIlwg37uRmswa9ZvkNiFByMTBSwQKvl0ZbBRmJtcAGcDHg6Jp%2F54BLi7lMpFAvysre5LcYcj37vDL%2B0I1Fe7W5hbOhQhL2VehzGyBxZqm9WQ6Nj22O55dGjBHYoLA5SN7sP3AO0e5wUuLl44x7X6YjRDqeCp0xKMGG0yBlCb%2FwoGBdfRRWPswYcomrbJVKbjWIqwHl5Kuc7NXdsYTDdxrwiAkUKV%2Ff7k65xPEfksFfG9uLfIWEHOZIKiYgJzHrEb%2BU54r1LJzV2RluRbXKex0LGZLe1IDKJKvWdKkQnEVIFLGM3OrSbSEfr7jjP1fKSrkZEEFpTH7X38tyJ6sdkccdOdyXt8XZuY0O9Sdu%2BPNFPZucSnLcxZ1K7MipbL8BzOrGe%2Bgo2%2B9Oop3G%2FfQD2qh3kG9yRL7q5ZUG3%2BITEr89opuLNPQ6KWmjdK1Pn1Uh3uyjysjaUET2wVRLY8Oy%2FH2TjrHV8Y7Sa7md3t%2B8vYFPjKZTdMo63yseawZXzILRNLYqG%2B%2B1X%2Bb6Li6HaOtI4yTQh0Ylf1ijdeGel3%2Fxpl5fcKULdSM8QNkh%2FQjFiU9615ghowi62IwAY6pgF%2F%2Fl9o%2BzNome763v%2Blmu7qY%2Bqn%2FxIOtmzwhGTdiXDCyLjU7MSQWDWmElh6ra%2ByEoUoeDVwh1W60Nm1jhgCgJltORUgK0akP%2BQbuOVOmCdMWF81DFakl7eiABdbANL4BT4%2FbGrrinflffE09UeOUmjWshsRQEerXEToOCWCjisgv%2BSVlyL9ioOvexQybIItUN2gPxv0m2uvHtkoo%2FBeegRHoMqRLvWp&X-Amz-Signature=3d51a6d207cc605adff9ec83e199548d7e4c955e9bafdc16dcab3b85dc9c892c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDHU2FV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mXiixMnAJ%2FuM7s08Q31c%2FLpWZKiYaINCXQ4yLS1ZFAiBmFoqnGPZiCoF%2Fm3HxlAozHIDLSnbMkX5EO70eMcnKgCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMLPYxEDf71vEGl2USKtwD1SPaXpo%2BSqRwytMnVooUbYogkRRGQ0XEG0a1PyoK1fBbyQGdeDJmWVFxOIlwg37uRmswa9ZvkNiFByMTBSwQKvl0ZbBRmJtcAGcDHg6Jp%2F54BLi7lMpFAvysre5LcYcj37vDL%2B0I1Fe7W5hbOhQhL2VehzGyBxZqm9WQ6Nj22O55dGjBHYoLA5SN7sP3AO0e5wUuLl44x7X6YjRDqeCp0xKMGG0yBlCb%2FwoGBdfRRWPswYcomrbJVKbjWIqwHl5Kuc7NXdsYTDdxrwiAkUKV%2Ff7k65xPEfksFfG9uLfIWEHOZIKiYgJzHrEb%2BU54r1LJzV2RluRbXKex0LGZLe1IDKJKvWdKkQnEVIFLGM3OrSbSEfr7jjP1fKSrkZEEFpTH7X38tyJ6sdkccdOdyXt8XZuY0O9Sdu%2BPNFPZucSnLcxZ1K7MipbL8BzOrGe%2Bgo2%2B9Oop3G%2FfQD2qh3kG9yRL7q5ZUG3%2BITEr89opuLNPQ6KWmjdK1Pn1Uh3uyjysjaUET2wVRLY8Oy%2FH2TjrHV8Y7Sa7md3t%2B8vYFPjKZTdMo63yseawZXzILRNLYqG%2B%2B1X%2Bb6Li6HaOtI4yTQh0Ylf1ijdeGel3%2Fxpl5fcKULdSM8QNkh%2FQjFiU9615ghowi62IwAY6pgF%2F%2Fl9o%2BzNome763v%2Blmu7qY%2Bqn%2FxIOtmzwhGTdiXDCyLjU7MSQWDWmElh6ra%2ByEoUoeDVwh1W60Nm1jhgCgJltORUgK0akP%2BQbuOVOmCdMWF81DFakl7eiABdbANL4BT4%2FbGrrinflffE09UeOUmjWshsRQEerXEToOCWCjisgv%2BSVlyL9ioOvexQybIItUN2gPxv0m2uvHtkoo%2FBeegRHoMqRLvWp&X-Amz-Signature=80411e4f3a707c195995020c4ec33c50618a3b3aefad302cd875478a260b3065&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
