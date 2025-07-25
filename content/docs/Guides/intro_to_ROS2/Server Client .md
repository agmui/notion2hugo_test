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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3F6XQA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDwdqaix4UPF%2Bo7BFjPWmjH%2B1l6eXAHRpUihMIpKYisBQIgBsiuvVibqzRSGx5SVtoUF59Uf39%2BHlxRE0kKRj12M8oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDM0SIo5vqKmHRSsrXCrcA5a2xfoJo2BV1sWnZe1L3j1sq5q7yc1%2FdCh1JRrrd%2FFaKwGnrGAGezeKKxRd6FCx5zZstVI8fgbktlJeaFTrWNgqg7vfPoC%2Fzye8O5u43azCA5Qby5EM%2FQTUXF8AzDCzQVvlc2ytXdV4Bgj81ioOsWzhFNv2GqNFj0Eu6%2BsYGLguMyeAYs9REP2OHcbeidFy0fIIo%2FbsZsrSZDy69dxPpw33UcxcZ6LS2rLyUY3Nh%2FcnDBHa8U1ME9Sqjvgg6WNyPRW5Z8241vumRx99nBligUP0uzZXHMYwAoIJkiTiGghhqoKLahCX7UH406Gl66LVvFWdvDGiNJlUp69KNDL00%2BmkC1KZxKZtx4euWwc0IC6yBiCN8wq0iZqhVVs%2BQT4tbH74rZeu%2FNYrHT2kGhd5nDoVcqXB2%2FN7WLEiZ8vVXYypQZid3%2By1r2W%2FLmdIz8kmOvhirN6YP6b8RAXiQ34uulpOUp4gyfh39pm71ZtCvPI96EijyfWOcFxfLF65UuhELgJEmEHdUcTWmboAn%2FwH5k8%2FAxYV9N4GJhs5fYMsG2LThQS1qR2Hg80x1bR6bSxulZaT2bfMJyQ25vmU6RH0v6hWPHD41NCogklRpPboRclFrcVb3CyurcQlJNU1MJ6NjcQGOqUBDDBjbPYwsm9JAj9K5gBfPIFohZFsTYRFT5777J451HDaLEeZeGMLm8gKHwTsyWAvw46RGU%2FxMam1YEJey%2FuIq4LV4PviRTVkTbgpCoUHhXwfFbfeZDQ8L%2ByjMyJChk2zLc%2BIGit0Akg9xk%2BXMNauoCk3EX%2BAZsy3c0vTxye6Em5MBKR70OXBG3xES4zBxaNjJSti%2BARRdcbFYDkI4aGsUOObWr2Y&X-Amz-Signature=864e6aae096ad83efb70f98875ea85434fdc5b5dd2cdf152ee81279b3d1eb97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3F6XQA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDwdqaix4UPF%2Bo7BFjPWmjH%2B1l6eXAHRpUihMIpKYisBQIgBsiuvVibqzRSGx5SVtoUF59Uf39%2BHlxRE0kKRj12M8oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDM0SIo5vqKmHRSsrXCrcA5a2xfoJo2BV1sWnZe1L3j1sq5q7yc1%2FdCh1JRrrd%2FFaKwGnrGAGezeKKxRd6FCx5zZstVI8fgbktlJeaFTrWNgqg7vfPoC%2Fzye8O5u43azCA5Qby5EM%2FQTUXF8AzDCzQVvlc2ytXdV4Bgj81ioOsWzhFNv2GqNFj0Eu6%2BsYGLguMyeAYs9REP2OHcbeidFy0fIIo%2FbsZsrSZDy69dxPpw33UcxcZ6LS2rLyUY3Nh%2FcnDBHa8U1ME9Sqjvgg6WNyPRW5Z8241vumRx99nBligUP0uzZXHMYwAoIJkiTiGghhqoKLahCX7UH406Gl66LVvFWdvDGiNJlUp69KNDL00%2BmkC1KZxKZtx4euWwc0IC6yBiCN8wq0iZqhVVs%2BQT4tbH74rZeu%2FNYrHT2kGhd5nDoVcqXB2%2FN7WLEiZ8vVXYypQZid3%2By1r2W%2FLmdIz8kmOvhirN6YP6b8RAXiQ34uulpOUp4gyfh39pm71ZtCvPI96EijyfWOcFxfLF65UuhELgJEmEHdUcTWmboAn%2FwH5k8%2FAxYV9N4GJhs5fYMsG2LThQS1qR2Hg80x1bR6bSxulZaT2bfMJyQ25vmU6RH0v6hWPHD41NCogklRpPboRclFrcVb3CyurcQlJNU1MJ6NjcQGOqUBDDBjbPYwsm9JAj9K5gBfPIFohZFsTYRFT5777J451HDaLEeZeGMLm8gKHwTsyWAvw46RGU%2FxMam1YEJey%2FuIq4LV4PviRTVkTbgpCoUHhXwfFbfeZDQ8L%2ByjMyJChk2zLc%2BIGit0Akg9xk%2BXMNauoCk3EX%2BAZsy3c0vTxye6Em5MBKR70OXBG3xES4zBxaNjJSti%2BARRdcbFYDkI4aGsUOObWr2Y&X-Amz-Signature=7986846a5e5ef29d1b2f4e7a326847bede56fb67c7c694ea047cbe2307f21203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3F6XQA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDwdqaix4UPF%2Bo7BFjPWmjH%2B1l6eXAHRpUihMIpKYisBQIgBsiuvVibqzRSGx5SVtoUF59Uf39%2BHlxRE0kKRj12M8oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDM0SIo5vqKmHRSsrXCrcA5a2xfoJo2BV1sWnZe1L3j1sq5q7yc1%2FdCh1JRrrd%2FFaKwGnrGAGezeKKxRd6FCx5zZstVI8fgbktlJeaFTrWNgqg7vfPoC%2Fzye8O5u43azCA5Qby5EM%2FQTUXF8AzDCzQVvlc2ytXdV4Bgj81ioOsWzhFNv2GqNFj0Eu6%2BsYGLguMyeAYs9REP2OHcbeidFy0fIIo%2FbsZsrSZDy69dxPpw33UcxcZ6LS2rLyUY3Nh%2FcnDBHa8U1ME9Sqjvgg6WNyPRW5Z8241vumRx99nBligUP0uzZXHMYwAoIJkiTiGghhqoKLahCX7UH406Gl66LVvFWdvDGiNJlUp69KNDL00%2BmkC1KZxKZtx4euWwc0IC6yBiCN8wq0iZqhVVs%2BQT4tbH74rZeu%2FNYrHT2kGhd5nDoVcqXB2%2FN7WLEiZ8vVXYypQZid3%2By1r2W%2FLmdIz8kmOvhirN6YP6b8RAXiQ34uulpOUp4gyfh39pm71ZtCvPI96EijyfWOcFxfLF65UuhELgJEmEHdUcTWmboAn%2FwH5k8%2FAxYV9N4GJhs5fYMsG2LThQS1qR2Hg80x1bR6bSxulZaT2bfMJyQ25vmU6RH0v6hWPHD41NCogklRpPboRclFrcVb3CyurcQlJNU1MJ6NjcQGOqUBDDBjbPYwsm9JAj9K5gBfPIFohZFsTYRFT5777J451HDaLEeZeGMLm8gKHwTsyWAvw46RGU%2FxMam1YEJey%2FuIq4LV4PviRTVkTbgpCoUHhXwfFbfeZDQ8L%2ByjMyJChk2zLc%2BIGit0Akg9xk%2BXMNauoCk3EX%2BAZsy3c0vTxye6Em5MBKR70OXBG3xES4zBxaNjJSti%2BARRdcbFYDkI4aGsUOObWr2Y&X-Amz-Signature=5ab6e16ec39a90b84984b7856d15c9ac669c9d365fc8c21a134555c22b864ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3F6XQA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDwdqaix4UPF%2Bo7BFjPWmjH%2B1l6eXAHRpUihMIpKYisBQIgBsiuvVibqzRSGx5SVtoUF59Uf39%2BHlxRE0kKRj12M8oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDM0SIo5vqKmHRSsrXCrcA5a2xfoJo2BV1sWnZe1L3j1sq5q7yc1%2FdCh1JRrrd%2FFaKwGnrGAGezeKKxRd6FCx5zZstVI8fgbktlJeaFTrWNgqg7vfPoC%2Fzye8O5u43azCA5Qby5EM%2FQTUXF8AzDCzQVvlc2ytXdV4Bgj81ioOsWzhFNv2GqNFj0Eu6%2BsYGLguMyeAYs9REP2OHcbeidFy0fIIo%2FbsZsrSZDy69dxPpw33UcxcZ6LS2rLyUY3Nh%2FcnDBHa8U1ME9Sqjvgg6WNyPRW5Z8241vumRx99nBligUP0uzZXHMYwAoIJkiTiGghhqoKLahCX7UH406Gl66LVvFWdvDGiNJlUp69KNDL00%2BmkC1KZxKZtx4euWwc0IC6yBiCN8wq0iZqhVVs%2BQT4tbH74rZeu%2FNYrHT2kGhd5nDoVcqXB2%2FN7WLEiZ8vVXYypQZid3%2By1r2W%2FLmdIz8kmOvhirN6YP6b8RAXiQ34uulpOUp4gyfh39pm71ZtCvPI96EijyfWOcFxfLF65UuhELgJEmEHdUcTWmboAn%2FwH5k8%2FAxYV9N4GJhs5fYMsG2LThQS1qR2Hg80x1bR6bSxulZaT2bfMJyQ25vmU6RH0v6hWPHD41NCogklRpPboRclFrcVb3CyurcQlJNU1MJ6NjcQGOqUBDDBjbPYwsm9JAj9K5gBfPIFohZFsTYRFT5777J451HDaLEeZeGMLm8gKHwTsyWAvw46RGU%2FxMam1YEJey%2FuIq4LV4PviRTVkTbgpCoUHhXwfFbfeZDQ8L%2ByjMyJChk2zLc%2BIGit0Akg9xk%2BXMNauoCk3EX%2BAZsy3c0vTxye6Em5MBKR70OXBG3xES4zBxaNjJSti%2BARRdcbFYDkI4aGsUOObWr2Y&X-Amz-Signature=2584d4ac75c49d6547010e3231b7ad5bb624bc1b1ba80d35abb527eb41f35180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3F6XQA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDwdqaix4UPF%2Bo7BFjPWmjH%2B1l6eXAHRpUihMIpKYisBQIgBsiuvVibqzRSGx5SVtoUF59Uf39%2BHlxRE0kKRj12M8oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDM0SIo5vqKmHRSsrXCrcA5a2xfoJo2BV1sWnZe1L3j1sq5q7yc1%2FdCh1JRrrd%2FFaKwGnrGAGezeKKxRd6FCx5zZstVI8fgbktlJeaFTrWNgqg7vfPoC%2Fzye8O5u43azCA5Qby5EM%2FQTUXF8AzDCzQVvlc2ytXdV4Bgj81ioOsWzhFNv2GqNFj0Eu6%2BsYGLguMyeAYs9REP2OHcbeidFy0fIIo%2FbsZsrSZDy69dxPpw33UcxcZ6LS2rLyUY3Nh%2FcnDBHa8U1ME9Sqjvgg6WNyPRW5Z8241vumRx99nBligUP0uzZXHMYwAoIJkiTiGghhqoKLahCX7UH406Gl66LVvFWdvDGiNJlUp69KNDL00%2BmkC1KZxKZtx4euWwc0IC6yBiCN8wq0iZqhVVs%2BQT4tbH74rZeu%2FNYrHT2kGhd5nDoVcqXB2%2FN7WLEiZ8vVXYypQZid3%2By1r2W%2FLmdIz8kmOvhirN6YP6b8RAXiQ34uulpOUp4gyfh39pm71ZtCvPI96EijyfWOcFxfLF65UuhELgJEmEHdUcTWmboAn%2FwH5k8%2FAxYV9N4GJhs5fYMsG2LThQS1qR2Hg80x1bR6bSxulZaT2bfMJyQ25vmU6RH0v6hWPHD41NCogklRpPboRclFrcVb3CyurcQlJNU1MJ6NjcQGOqUBDDBjbPYwsm9JAj9K5gBfPIFohZFsTYRFT5777J451HDaLEeZeGMLm8gKHwTsyWAvw46RGU%2FxMam1YEJey%2FuIq4LV4PviRTVkTbgpCoUHhXwfFbfeZDQ8L%2ByjMyJChk2zLc%2BIGit0Akg9xk%2BXMNauoCk3EX%2BAZsy3c0vTxye6Em5MBKR70OXBG3xES4zBxaNjJSti%2BARRdcbFYDkI4aGsUOObWr2Y&X-Amz-Signature=1f7369934937f1e016c2f1653f6bbd1b69c92b5a32894ff1ad0e95be10a49e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
