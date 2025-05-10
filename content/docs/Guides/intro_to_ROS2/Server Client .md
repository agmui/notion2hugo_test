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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKWXSGR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC0Epe7apvSS1g6yQX5K2hUkBlpHE5%2BDsjjiHfhZwl5vAIgd%2B3NAomM1oMvYflEkWW%2FVYl7R2k56jdhrbPIKppQe14qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNE3dyhDaZu0RWIhSrcA9zDjt0wohkTSOx%2FwYWKLbg1PAq0JapBZr9ghMijS6RwyQmCLOSx9WflTxVMklsP1laR0FB1HvHtv03Ng%2Ba5Ptxvv2tp0uUQQ2HU9MS9LT1ODW4nZnbC%2BGTeSFviRF1bPK6ATGaM9spSol54Zsn9LE7SmnS%2FV%2FyANVHj1%2BmgYsPCx8tYP07LWyD%2BJiVHV%2FX3NTCvT8nV96ufnjw9aARCDLpxGERiv5ag4phWH8iR6TGdseC2XyDOEsdwWMmVDhDUmZ9X%2Fg5%2FXNOWBctbYKZAUupnmimLX%2B1Qj5KsJ3kVS3orl29VI24EYwCGi6KneR3AeW3g6TS7HWmVE0dRn3L1YE%2BhpBNWm%2FVFrUfhXfxNQVBOzL2ZmJxHy4RmhKiq9jE3BihHZnhzAV3O1N4DG8qljeQvMYhUSeS1MNZGBKo2VxpO4cPJ1I2Um0VKesnuia4v1B%2BZgCxMu4HLF2oi4V%2Fmi8itng13mOaAO3mCB85MG4C%2FBVv%2FFVi2Q2MEwLKcaO7CMWlVNxHclAYJ8NX2Kg5rRpRPRMtDCaOagj3LUQcUTOx8qCL8CRjRNSW32nB13kuw6xRnuIx%2Bw%2F40mOEvQF3F0IQ2WC3JqB5EWElXeakDnbzB%2Fj4A3HoOxSPY1PcRMLuK%2F8AGOqUBv6tqCKCKkQmno9fKYv8KbCxJauXqPsY1Q4PTS3QWgoKMEJ3sn0wtf7aOHwqRRYIPT1ZHfmZGfLQDOM4nukAjdX4lbk771KLDCFlk6i6HExmp8Cq2uIh3VXRHxKrvhOlpttZ%2BRWAgbY%2FCLe8Bplmo%2FKuFiX35SehcuYYOfwQ6NPTKEk30GkTrvPNeIOAEjP8bnidxruug4tL%2FG1DbEjScKcbKo02G&X-Amz-Signature=62b35cf0c89667da30ffc09476fd91d55ff7de0c40102a7e10fafa48dce1583e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKWXSGR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC0Epe7apvSS1g6yQX5K2hUkBlpHE5%2BDsjjiHfhZwl5vAIgd%2B3NAomM1oMvYflEkWW%2FVYl7R2k56jdhrbPIKppQe14qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNE3dyhDaZu0RWIhSrcA9zDjt0wohkTSOx%2FwYWKLbg1PAq0JapBZr9ghMijS6RwyQmCLOSx9WflTxVMklsP1laR0FB1HvHtv03Ng%2Ba5Ptxvv2tp0uUQQ2HU9MS9LT1ODW4nZnbC%2BGTeSFviRF1bPK6ATGaM9spSol54Zsn9LE7SmnS%2FV%2FyANVHj1%2BmgYsPCx8tYP07LWyD%2BJiVHV%2FX3NTCvT8nV96ufnjw9aARCDLpxGERiv5ag4phWH8iR6TGdseC2XyDOEsdwWMmVDhDUmZ9X%2Fg5%2FXNOWBctbYKZAUupnmimLX%2B1Qj5KsJ3kVS3orl29VI24EYwCGi6KneR3AeW3g6TS7HWmVE0dRn3L1YE%2BhpBNWm%2FVFrUfhXfxNQVBOzL2ZmJxHy4RmhKiq9jE3BihHZnhzAV3O1N4DG8qljeQvMYhUSeS1MNZGBKo2VxpO4cPJ1I2Um0VKesnuia4v1B%2BZgCxMu4HLF2oi4V%2Fmi8itng13mOaAO3mCB85MG4C%2FBVv%2FFVi2Q2MEwLKcaO7CMWlVNxHclAYJ8NX2Kg5rRpRPRMtDCaOagj3LUQcUTOx8qCL8CRjRNSW32nB13kuw6xRnuIx%2Bw%2F40mOEvQF3F0IQ2WC3JqB5EWElXeakDnbzB%2Fj4A3HoOxSPY1PcRMLuK%2F8AGOqUBv6tqCKCKkQmno9fKYv8KbCxJauXqPsY1Q4PTS3QWgoKMEJ3sn0wtf7aOHwqRRYIPT1ZHfmZGfLQDOM4nukAjdX4lbk771KLDCFlk6i6HExmp8Cq2uIh3VXRHxKrvhOlpttZ%2BRWAgbY%2FCLe8Bplmo%2FKuFiX35SehcuYYOfwQ6NPTKEk30GkTrvPNeIOAEjP8bnidxruug4tL%2FG1DbEjScKcbKo02G&X-Amz-Signature=7b961dddb9f6ef3e227187f4231165ef776b14e1869d791551f8428a282aa875&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKWXSGR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC0Epe7apvSS1g6yQX5K2hUkBlpHE5%2BDsjjiHfhZwl5vAIgd%2B3NAomM1oMvYflEkWW%2FVYl7R2k56jdhrbPIKppQe14qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNE3dyhDaZu0RWIhSrcA9zDjt0wohkTSOx%2FwYWKLbg1PAq0JapBZr9ghMijS6RwyQmCLOSx9WflTxVMklsP1laR0FB1HvHtv03Ng%2Ba5Ptxvv2tp0uUQQ2HU9MS9LT1ODW4nZnbC%2BGTeSFviRF1bPK6ATGaM9spSol54Zsn9LE7SmnS%2FV%2FyANVHj1%2BmgYsPCx8tYP07LWyD%2BJiVHV%2FX3NTCvT8nV96ufnjw9aARCDLpxGERiv5ag4phWH8iR6TGdseC2XyDOEsdwWMmVDhDUmZ9X%2Fg5%2FXNOWBctbYKZAUupnmimLX%2B1Qj5KsJ3kVS3orl29VI24EYwCGi6KneR3AeW3g6TS7HWmVE0dRn3L1YE%2BhpBNWm%2FVFrUfhXfxNQVBOzL2ZmJxHy4RmhKiq9jE3BihHZnhzAV3O1N4DG8qljeQvMYhUSeS1MNZGBKo2VxpO4cPJ1I2Um0VKesnuia4v1B%2BZgCxMu4HLF2oi4V%2Fmi8itng13mOaAO3mCB85MG4C%2FBVv%2FFVi2Q2MEwLKcaO7CMWlVNxHclAYJ8NX2Kg5rRpRPRMtDCaOagj3LUQcUTOx8qCL8CRjRNSW32nB13kuw6xRnuIx%2Bw%2F40mOEvQF3F0IQ2WC3JqB5EWElXeakDnbzB%2Fj4A3HoOxSPY1PcRMLuK%2F8AGOqUBv6tqCKCKkQmno9fKYv8KbCxJauXqPsY1Q4PTS3QWgoKMEJ3sn0wtf7aOHwqRRYIPT1ZHfmZGfLQDOM4nukAjdX4lbk771KLDCFlk6i6HExmp8Cq2uIh3VXRHxKrvhOlpttZ%2BRWAgbY%2FCLe8Bplmo%2FKuFiX35SehcuYYOfwQ6NPTKEk30GkTrvPNeIOAEjP8bnidxruug4tL%2FG1DbEjScKcbKo02G&X-Amz-Signature=5dc8abf0d89cce38afb307b43eec9d8fb4738d7b65197e118c03445cfc72aa8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKWXSGR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC0Epe7apvSS1g6yQX5K2hUkBlpHE5%2BDsjjiHfhZwl5vAIgd%2B3NAomM1oMvYflEkWW%2FVYl7R2k56jdhrbPIKppQe14qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNE3dyhDaZu0RWIhSrcA9zDjt0wohkTSOx%2FwYWKLbg1PAq0JapBZr9ghMijS6RwyQmCLOSx9WflTxVMklsP1laR0FB1HvHtv03Ng%2Ba5Ptxvv2tp0uUQQ2HU9MS9LT1ODW4nZnbC%2BGTeSFviRF1bPK6ATGaM9spSol54Zsn9LE7SmnS%2FV%2FyANVHj1%2BmgYsPCx8tYP07LWyD%2BJiVHV%2FX3NTCvT8nV96ufnjw9aARCDLpxGERiv5ag4phWH8iR6TGdseC2XyDOEsdwWMmVDhDUmZ9X%2Fg5%2FXNOWBctbYKZAUupnmimLX%2B1Qj5KsJ3kVS3orl29VI24EYwCGi6KneR3AeW3g6TS7HWmVE0dRn3L1YE%2BhpBNWm%2FVFrUfhXfxNQVBOzL2ZmJxHy4RmhKiq9jE3BihHZnhzAV3O1N4DG8qljeQvMYhUSeS1MNZGBKo2VxpO4cPJ1I2Um0VKesnuia4v1B%2BZgCxMu4HLF2oi4V%2Fmi8itng13mOaAO3mCB85MG4C%2FBVv%2FFVi2Q2MEwLKcaO7CMWlVNxHclAYJ8NX2Kg5rRpRPRMtDCaOagj3LUQcUTOx8qCL8CRjRNSW32nB13kuw6xRnuIx%2Bw%2F40mOEvQF3F0IQ2WC3JqB5EWElXeakDnbzB%2Fj4A3HoOxSPY1PcRMLuK%2F8AGOqUBv6tqCKCKkQmno9fKYv8KbCxJauXqPsY1Q4PTS3QWgoKMEJ3sn0wtf7aOHwqRRYIPT1ZHfmZGfLQDOM4nukAjdX4lbk771KLDCFlk6i6HExmp8Cq2uIh3VXRHxKrvhOlpttZ%2BRWAgbY%2FCLe8Bplmo%2FKuFiX35SehcuYYOfwQ6NPTKEk30GkTrvPNeIOAEjP8bnidxruug4tL%2FG1DbEjScKcbKo02G&X-Amz-Signature=c40b6cf8ffee6ee2476557cfd972713e33449b289612af565cee464289c6b2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKWXSGR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC0Epe7apvSS1g6yQX5K2hUkBlpHE5%2BDsjjiHfhZwl5vAIgd%2B3NAomM1oMvYflEkWW%2FVYl7R2k56jdhrbPIKppQe14qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNE3dyhDaZu0RWIhSrcA9zDjt0wohkTSOx%2FwYWKLbg1PAq0JapBZr9ghMijS6RwyQmCLOSx9WflTxVMklsP1laR0FB1HvHtv03Ng%2Ba5Ptxvv2tp0uUQQ2HU9MS9LT1ODW4nZnbC%2BGTeSFviRF1bPK6ATGaM9spSol54Zsn9LE7SmnS%2FV%2FyANVHj1%2BmgYsPCx8tYP07LWyD%2BJiVHV%2FX3NTCvT8nV96ufnjw9aARCDLpxGERiv5ag4phWH8iR6TGdseC2XyDOEsdwWMmVDhDUmZ9X%2Fg5%2FXNOWBctbYKZAUupnmimLX%2B1Qj5KsJ3kVS3orl29VI24EYwCGi6KneR3AeW3g6TS7HWmVE0dRn3L1YE%2BhpBNWm%2FVFrUfhXfxNQVBOzL2ZmJxHy4RmhKiq9jE3BihHZnhzAV3O1N4DG8qljeQvMYhUSeS1MNZGBKo2VxpO4cPJ1I2Um0VKesnuia4v1B%2BZgCxMu4HLF2oi4V%2Fmi8itng13mOaAO3mCB85MG4C%2FBVv%2FFVi2Q2MEwLKcaO7CMWlVNxHclAYJ8NX2Kg5rRpRPRMtDCaOagj3LUQcUTOx8qCL8CRjRNSW32nB13kuw6xRnuIx%2Bw%2F40mOEvQF3F0IQ2WC3JqB5EWElXeakDnbzB%2Fj4A3HoOxSPY1PcRMLuK%2F8AGOqUBv6tqCKCKkQmno9fKYv8KbCxJauXqPsY1Q4PTS3QWgoKMEJ3sn0wtf7aOHwqRRYIPT1ZHfmZGfLQDOM4nukAjdX4lbk771KLDCFlk6i6HExmp8Cq2uIh3VXRHxKrvhOlpttZ%2BRWAgbY%2FCLe8Bplmo%2FKuFiX35SehcuYYOfwQ6NPTKEk30GkTrvPNeIOAEjP8bnidxruug4tL%2FG1DbEjScKcbKo02G&X-Amz-Signature=9d76647520f0993c5a303af30229d1bf9669d3cfb72de408d330e4a3659c899b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
