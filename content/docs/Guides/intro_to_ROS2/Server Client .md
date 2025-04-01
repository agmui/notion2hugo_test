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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEOPZAD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDMBk0W%2BayALeiuGtWkq%2BHRLeGH03dcYBekMlHMM5%2BfhgIgU19hoP5YFgvMsle3RP86ihkaJ%2FcVIYwok9YiF71BHYkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl0KCP%2FKTOAmQfb9CrcA6Mm01qxrZ%2BoX32UhqcIZUKf1s42bP905rGDzxnj0M7C4%2F90fx68bIysLnRLshe%2Fy7GunAo7nnpolAX9L3%2FHEgRo6pg1ZwqRwAK4zGLw0B8DeBnySgorZpi6MG6iA7kyHhN%2BKO%2FBMQHn5T42TyIaBv5cvB7ygeG94DnPr5rPbwMSZQvowjrtf2%2BYiyWmCKVO7kFpaeAxLvPFsVSvomS1lWRxW%2FC8%2BYGMsGLlIgPUfkqcLsts%2B%2FCgGP5YcEKfy6zzKjGA5DGinbmipjvquqhSsuIuyXRwOPBkwVy4SwDzHeANkDCAO133tGmYX6rIiKskXzLxkf2THKxKT8b%2FB%2FmXaUoxO3AjT9hPkYfnoKsVN3tyJiUH3yQ60nrwVtgiQJ2vq0KNWw%2BtBoFL7tpQdinXuYm3N3OpoEAcVi1sd2l3ZEMuGq8fopxPneUK%2BdFpoEC7C7qO1bGW1YJc1My2A2AhgFOn5%2FqtsPkEYIccZ4fyEFsMHlEnAJ5lIjIm6wB3FD13kSCHyfxZhbKfEQGVN2c%2FKvv2L%2FYuHEKfn4%2B2YLrCE3kRLw7B3av7bycjVqcTaEZQkAQfw6ntH9G1U0hwzy38qgSjE%2BqCDzT%2F5N%2BhFGMNGVHrl3mURLy0dkFiKJ%2B3MIO3r78GOqUBeOhTU4RXqC8%2FXBmH0EWsK8gOFF9xPPlySidEytERWNqqYlV5k0MC%2B6dToe1j0UZqa%2BHINGVJ1sVe7ayxD5Ma5eDA0BZJJBOUdz4DRz3303fBE2DJChMLm33CwegZI7Nr%2BfLonZyLQUPyvY7seySmJNy2Tulk%2FFdad48d4HLUX2DX9GvywuGSp7HMep2Qss0IInDglu8AstHf8Q8ls44ZGmboDbTc&X-Amz-Signature=30a2418c4f5b3adf203175092669a523c49a377839739e58200b0abcf3f52c37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEOPZAD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDMBk0W%2BayALeiuGtWkq%2BHRLeGH03dcYBekMlHMM5%2BfhgIgU19hoP5YFgvMsle3RP86ihkaJ%2FcVIYwok9YiF71BHYkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl0KCP%2FKTOAmQfb9CrcA6Mm01qxrZ%2BoX32UhqcIZUKf1s42bP905rGDzxnj0M7C4%2F90fx68bIysLnRLshe%2Fy7GunAo7nnpolAX9L3%2FHEgRo6pg1ZwqRwAK4zGLw0B8DeBnySgorZpi6MG6iA7kyHhN%2BKO%2FBMQHn5T42TyIaBv5cvB7ygeG94DnPr5rPbwMSZQvowjrtf2%2BYiyWmCKVO7kFpaeAxLvPFsVSvomS1lWRxW%2FC8%2BYGMsGLlIgPUfkqcLsts%2B%2FCgGP5YcEKfy6zzKjGA5DGinbmipjvquqhSsuIuyXRwOPBkwVy4SwDzHeANkDCAO133tGmYX6rIiKskXzLxkf2THKxKT8b%2FB%2FmXaUoxO3AjT9hPkYfnoKsVN3tyJiUH3yQ60nrwVtgiQJ2vq0KNWw%2BtBoFL7tpQdinXuYm3N3OpoEAcVi1sd2l3ZEMuGq8fopxPneUK%2BdFpoEC7C7qO1bGW1YJc1My2A2AhgFOn5%2FqtsPkEYIccZ4fyEFsMHlEnAJ5lIjIm6wB3FD13kSCHyfxZhbKfEQGVN2c%2FKvv2L%2FYuHEKfn4%2B2YLrCE3kRLw7B3av7bycjVqcTaEZQkAQfw6ntH9G1U0hwzy38qgSjE%2BqCDzT%2F5N%2BhFGMNGVHrl3mURLy0dkFiKJ%2B3MIO3r78GOqUBeOhTU4RXqC8%2FXBmH0EWsK8gOFF9xPPlySidEytERWNqqYlV5k0MC%2B6dToe1j0UZqa%2BHINGVJ1sVe7ayxD5Ma5eDA0BZJJBOUdz4DRz3303fBE2DJChMLm33CwegZI7Nr%2BfLonZyLQUPyvY7seySmJNy2Tulk%2FFdad48d4HLUX2DX9GvywuGSp7HMep2Qss0IInDglu8AstHf8Q8ls44ZGmboDbTc&X-Amz-Signature=81f5c7e369580b4a1759402671d183db632a3c385a1f68271248db602bd9b7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEOPZAD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDMBk0W%2BayALeiuGtWkq%2BHRLeGH03dcYBekMlHMM5%2BfhgIgU19hoP5YFgvMsle3RP86ihkaJ%2FcVIYwok9YiF71BHYkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl0KCP%2FKTOAmQfb9CrcA6Mm01qxrZ%2BoX32UhqcIZUKf1s42bP905rGDzxnj0M7C4%2F90fx68bIysLnRLshe%2Fy7GunAo7nnpolAX9L3%2FHEgRo6pg1ZwqRwAK4zGLw0B8DeBnySgorZpi6MG6iA7kyHhN%2BKO%2FBMQHn5T42TyIaBv5cvB7ygeG94DnPr5rPbwMSZQvowjrtf2%2BYiyWmCKVO7kFpaeAxLvPFsVSvomS1lWRxW%2FC8%2BYGMsGLlIgPUfkqcLsts%2B%2FCgGP5YcEKfy6zzKjGA5DGinbmipjvquqhSsuIuyXRwOPBkwVy4SwDzHeANkDCAO133tGmYX6rIiKskXzLxkf2THKxKT8b%2FB%2FmXaUoxO3AjT9hPkYfnoKsVN3tyJiUH3yQ60nrwVtgiQJ2vq0KNWw%2BtBoFL7tpQdinXuYm3N3OpoEAcVi1sd2l3ZEMuGq8fopxPneUK%2BdFpoEC7C7qO1bGW1YJc1My2A2AhgFOn5%2FqtsPkEYIccZ4fyEFsMHlEnAJ5lIjIm6wB3FD13kSCHyfxZhbKfEQGVN2c%2FKvv2L%2FYuHEKfn4%2B2YLrCE3kRLw7B3av7bycjVqcTaEZQkAQfw6ntH9G1U0hwzy38qgSjE%2BqCDzT%2F5N%2BhFGMNGVHrl3mURLy0dkFiKJ%2B3MIO3r78GOqUBeOhTU4RXqC8%2FXBmH0EWsK8gOFF9xPPlySidEytERWNqqYlV5k0MC%2B6dToe1j0UZqa%2BHINGVJ1sVe7ayxD5Ma5eDA0BZJJBOUdz4DRz3303fBE2DJChMLm33CwegZI7Nr%2BfLonZyLQUPyvY7seySmJNy2Tulk%2FFdad48d4HLUX2DX9GvywuGSp7HMep2Qss0IInDglu8AstHf8Q8ls44ZGmboDbTc&X-Amz-Signature=81eee9608925130b2b4fdbee39757e920dbee4e31f55020f778fdff40aa46158&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEOPZAD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDMBk0W%2BayALeiuGtWkq%2BHRLeGH03dcYBekMlHMM5%2BfhgIgU19hoP5YFgvMsle3RP86ihkaJ%2FcVIYwok9YiF71BHYkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl0KCP%2FKTOAmQfb9CrcA6Mm01qxrZ%2BoX32UhqcIZUKf1s42bP905rGDzxnj0M7C4%2F90fx68bIysLnRLshe%2Fy7GunAo7nnpolAX9L3%2FHEgRo6pg1ZwqRwAK4zGLw0B8DeBnySgorZpi6MG6iA7kyHhN%2BKO%2FBMQHn5T42TyIaBv5cvB7ygeG94DnPr5rPbwMSZQvowjrtf2%2BYiyWmCKVO7kFpaeAxLvPFsVSvomS1lWRxW%2FC8%2BYGMsGLlIgPUfkqcLsts%2B%2FCgGP5YcEKfy6zzKjGA5DGinbmipjvquqhSsuIuyXRwOPBkwVy4SwDzHeANkDCAO133tGmYX6rIiKskXzLxkf2THKxKT8b%2FB%2FmXaUoxO3AjT9hPkYfnoKsVN3tyJiUH3yQ60nrwVtgiQJ2vq0KNWw%2BtBoFL7tpQdinXuYm3N3OpoEAcVi1sd2l3ZEMuGq8fopxPneUK%2BdFpoEC7C7qO1bGW1YJc1My2A2AhgFOn5%2FqtsPkEYIccZ4fyEFsMHlEnAJ5lIjIm6wB3FD13kSCHyfxZhbKfEQGVN2c%2FKvv2L%2FYuHEKfn4%2B2YLrCE3kRLw7B3av7bycjVqcTaEZQkAQfw6ntH9G1U0hwzy38qgSjE%2BqCDzT%2F5N%2BhFGMNGVHrl3mURLy0dkFiKJ%2B3MIO3r78GOqUBeOhTU4RXqC8%2FXBmH0EWsK8gOFF9xPPlySidEytERWNqqYlV5k0MC%2B6dToe1j0UZqa%2BHINGVJ1sVe7ayxD5Ma5eDA0BZJJBOUdz4DRz3303fBE2DJChMLm33CwegZI7Nr%2BfLonZyLQUPyvY7seySmJNy2Tulk%2FFdad48d4HLUX2DX9GvywuGSp7HMep2Qss0IInDglu8AstHf8Q8ls44ZGmboDbTc&X-Amz-Signature=0651bec62903df454b47c62e2d117e68912b411b0b3f5b2b285f88c472b52542&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEOPZAD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDMBk0W%2BayALeiuGtWkq%2BHRLeGH03dcYBekMlHMM5%2BfhgIgU19hoP5YFgvMsle3RP86ihkaJ%2FcVIYwok9YiF71BHYkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl0KCP%2FKTOAmQfb9CrcA6Mm01qxrZ%2BoX32UhqcIZUKf1s42bP905rGDzxnj0M7C4%2F90fx68bIysLnRLshe%2Fy7GunAo7nnpolAX9L3%2FHEgRo6pg1ZwqRwAK4zGLw0B8DeBnySgorZpi6MG6iA7kyHhN%2BKO%2FBMQHn5T42TyIaBv5cvB7ygeG94DnPr5rPbwMSZQvowjrtf2%2BYiyWmCKVO7kFpaeAxLvPFsVSvomS1lWRxW%2FC8%2BYGMsGLlIgPUfkqcLsts%2B%2FCgGP5YcEKfy6zzKjGA5DGinbmipjvquqhSsuIuyXRwOPBkwVy4SwDzHeANkDCAO133tGmYX6rIiKskXzLxkf2THKxKT8b%2FB%2FmXaUoxO3AjT9hPkYfnoKsVN3tyJiUH3yQ60nrwVtgiQJ2vq0KNWw%2BtBoFL7tpQdinXuYm3N3OpoEAcVi1sd2l3ZEMuGq8fopxPneUK%2BdFpoEC7C7qO1bGW1YJc1My2A2AhgFOn5%2FqtsPkEYIccZ4fyEFsMHlEnAJ5lIjIm6wB3FD13kSCHyfxZhbKfEQGVN2c%2FKvv2L%2FYuHEKfn4%2B2YLrCE3kRLw7B3av7bycjVqcTaEZQkAQfw6ntH9G1U0hwzy38qgSjE%2BqCDzT%2F5N%2BhFGMNGVHrl3mURLy0dkFiKJ%2B3MIO3r78GOqUBeOhTU4RXqC8%2FXBmH0EWsK8gOFF9xPPlySidEytERWNqqYlV5k0MC%2B6dToe1j0UZqa%2BHINGVJ1sVe7ayxD5Ma5eDA0BZJJBOUdz4DRz3303fBE2DJChMLm33CwegZI7Nr%2BfLonZyLQUPyvY7seySmJNy2Tulk%2FFdad48d4HLUX2DX9GvywuGSp7HMep2Qss0IInDglu8AstHf8Q8ls44ZGmboDbTc&X-Amz-Signature=8f081a4d7a020cfe2edebc99610fe87944ff201640f8f76b3eca27f9b8d44de3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
