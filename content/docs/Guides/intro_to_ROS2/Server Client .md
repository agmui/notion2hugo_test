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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAWEVTY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN80h1x2eSauyXYzDdO0JgbSdUFbLNV0cL0YqlVKbTwAiEA4gxwk4aPBQ10aozECdYk%2FYzBoFZj8LKLRmLCpFc8aNYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcrrImSzVZQiJiucSrcA9q5PsQyYcDszuXDfLxXqEy%2BrM61jEE2IYDWkJtaueqdXaNzDCh3KlnS62AIwGnsBFjlgxQwu5%2BAKkOxahLOPrdn1jMNciGEJ4VsWpETnpp1qiWcjLaZxnX3fdhS%2BsXG79Gzm1wKJu3G01KMeYqjrl7hxPlnEuliW08QvZPiqKB7letXL9RBJwtD6OCLPrV4jjV1VWeL5mKzlOpIwIpAOvqwZagcmE%2FKMnRA6IcR0PyYaGPnyZwRa45pXejzt4JKr6LoaJrrvIL2wkuIIRxdOCpLrp%2BknHIqMKeV8XX16A2A6SqBXTICW7WKyeEj5qAiKMxc1Md%2BWpgu%2F7VSDNiELcoowhFKbcw1ddd9nzwMREO6tAxkMuk8Qo4t33Xt9XzW1zU%2FrBN9mWqjQfqXIF3pmYOigrRGDagbMvuVX5AyUtbIriM4QX25CyDmzHuVvrlWFhV1sUwoBfPBsKHDR2Wbt47%2FBJiAUmK%2BMp0sTRNcgbBHFnsTJj2kh1zt3qig%2FqNgKLIYftYiODHYNCW2wpxkcu7sfJzsu%2FyJh2J53H4uP%2BvH1fURx29YxlOcrE9%2B%2BhNBcTuA7Q8WawthTSOzq8SvdEuYQC314k2K%2FbSSfI%2B8nMhOv%2Fzqx4vHwuCtN3vIMPDf7bwGOqUBdCZAwQ9ZPYP0N%2F10DqU2GTDABwEosznppvjlS6h%2FF3zVk2kDGFu%2BsSsYwW3kE0MKfEmzrAFRF7gXSAzTG5rfjD6TtxB5%2Fr4i%2BZ0HIL8LcD1SLMThksURFtdEG1meqwsK%2B3mgLOxxPc6pN6oGg7St7KHJpnZz%2BwP65bFKDkObGG6TXEnmmrbEyWPhHSZ2MwqRs9pScx3iNc0MZ6e7yRO9PMtbpO5D&X-Amz-Signature=d8abc84387305712e0a223f3c79607d2ea8c90289e298a641e9f6310ae6b169e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAWEVTY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN80h1x2eSauyXYzDdO0JgbSdUFbLNV0cL0YqlVKbTwAiEA4gxwk4aPBQ10aozECdYk%2FYzBoFZj8LKLRmLCpFc8aNYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcrrImSzVZQiJiucSrcA9q5PsQyYcDszuXDfLxXqEy%2BrM61jEE2IYDWkJtaueqdXaNzDCh3KlnS62AIwGnsBFjlgxQwu5%2BAKkOxahLOPrdn1jMNciGEJ4VsWpETnpp1qiWcjLaZxnX3fdhS%2BsXG79Gzm1wKJu3G01KMeYqjrl7hxPlnEuliW08QvZPiqKB7letXL9RBJwtD6OCLPrV4jjV1VWeL5mKzlOpIwIpAOvqwZagcmE%2FKMnRA6IcR0PyYaGPnyZwRa45pXejzt4JKr6LoaJrrvIL2wkuIIRxdOCpLrp%2BknHIqMKeV8XX16A2A6SqBXTICW7WKyeEj5qAiKMxc1Md%2BWpgu%2F7VSDNiELcoowhFKbcw1ddd9nzwMREO6tAxkMuk8Qo4t33Xt9XzW1zU%2FrBN9mWqjQfqXIF3pmYOigrRGDagbMvuVX5AyUtbIriM4QX25CyDmzHuVvrlWFhV1sUwoBfPBsKHDR2Wbt47%2FBJiAUmK%2BMp0sTRNcgbBHFnsTJj2kh1zt3qig%2FqNgKLIYftYiODHYNCW2wpxkcu7sfJzsu%2FyJh2J53H4uP%2BvH1fURx29YxlOcrE9%2B%2BhNBcTuA7Q8WawthTSOzq8SvdEuYQC314k2K%2FbSSfI%2B8nMhOv%2Fzqx4vHwuCtN3vIMPDf7bwGOqUBdCZAwQ9ZPYP0N%2F10DqU2GTDABwEosznppvjlS6h%2FF3zVk2kDGFu%2BsSsYwW3kE0MKfEmzrAFRF7gXSAzTG5rfjD6TtxB5%2Fr4i%2BZ0HIL8LcD1SLMThksURFtdEG1meqwsK%2B3mgLOxxPc6pN6oGg7St7KHJpnZz%2BwP65bFKDkObGG6TXEnmmrbEyWPhHSZ2MwqRs9pScx3iNc0MZ6e7yRO9PMtbpO5D&X-Amz-Signature=940804d56fd4402c8535018e520de82d91664de49f05e7e536dba12c02e4193c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAWEVTY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN80h1x2eSauyXYzDdO0JgbSdUFbLNV0cL0YqlVKbTwAiEA4gxwk4aPBQ10aozECdYk%2FYzBoFZj8LKLRmLCpFc8aNYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcrrImSzVZQiJiucSrcA9q5PsQyYcDszuXDfLxXqEy%2BrM61jEE2IYDWkJtaueqdXaNzDCh3KlnS62AIwGnsBFjlgxQwu5%2BAKkOxahLOPrdn1jMNciGEJ4VsWpETnpp1qiWcjLaZxnX3fdhS%2BsXG79Gzm1wKJu3G01KMeYqjrl7hxPlnEuliW08QvZPiqKB7letXL9RBJwtD6OCLPrV4jjV1VWeL5mKzlOpIwIpAOvqwZagcmE%2FKMnRA6IcR0PyYaGPnyZwRa45pXejzt4JKr6LoaJrrvIL2wkuIIRxdOCpLrp%2BknHIqMKeV8XX16A2A6SqBXTICW7WKyeEj5qAiKMxc1Md%2BWpgu%2F7VSDNiELcoowhFKbcw1ddd9nzwMREO6tAxkMuk8Qo4t33Xt9XzW1zU%2FrBN9mWqjQfqXIF3pmYOigrRGDagbMvuVX5AyUtbIriM4QX25CyDmzHuVvrlWFhV1sUwoBfPBsKHDR2Wbt47%2FBJiAUmK%2BMp0sTRNcgbBHFnsTJj2kh1zt3qig%2FqNgKLIYftYiODHYNCW2wpxkcu7sfJzsu%2FyJh2J53H4uP%2BvH1fURx29YxlOcrE9%2B%2BhNBcTuA7Q8WawthTSOzq8SvdEuYQC314k2K%2FbSSfI%2B8nMhOv%2Fzqx4vHwuCtN3vIMPDf7bwGOqUBdCZAwQ9ZPYP0N%2F10DqU2GTDABwEosznppvjlS6h%2FF3zVk2kDGFu%2BsSsYwW3kE0MKfEmzrAFRF7gXSAzTG5rfjD6TtxB5%2Fr4i%2BZ0HIL8LcD1SLMThksURFtdEG1meqwsK%2B3mgLOxxPc6pN6oGg7St7KHJpnZz%2BwP65bFKDkObGG6TXEnmmrbEyWPhHSZ2MwqRs9pScx3iNc0MZ6e7yRO9PMtbpO5D&X-Amz-Signature=c60b00e90f6b0860863faab2b98837413c38241fefaac7fe9fb35f9680f045dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAWEVTY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN80h1x2eSauyXYzDdO0JgbSdUFbLNV0cL0YqlVKbTwAiEA4gxwk4aPBQ10aozECdYk%2FYzBoFZj8LKLRmLCpFc8aNYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcrrImSzVZQiJiucSrcA9q5PsQyYcDszuXDfLxXqEy%2BrM61jEE2IYDWkJtaueqdXaNzDCh3KlnS62AIwGnsBFjlgxQwu5%2BAKkOxahLOPrdn1jMNciGEJ4VsWpETnpp1qiWcjLaZxnX3fdhS%2BsXG79Gzm1wKJu3G01KMeYqjrl7hxPlnEuliW08QvZPiqKB7letXL9RBJwtD6OCLPrV4jjV1VWeL5mKzlOpIwIpAOvqwZagcmE%2FKMnRA6IcR0PyYaGPnyZwRa45pXejzt4JKr6LoaJrrvIL2wkuIIRxdOCpLrp%2BknHIqMKeV8XX16A2A6SqBXTICW7WKyeEj5qAiKMxc1Md%2BWpgu%2F7VSDNiELcoowhFKbcw1ddd9nzwMREO6tAxkMuk8Qo4t33Xt9XzW1zU%2FrBN9mWqjQfqXIF3pmYOigrRGDagbMvuVX5AyUtbIriM4QX25CyDmzHuVvrlWFhV1sUwoBfPBsKHDR2Wbt47%2FBJiAUmK%2BMp0sTRNcgbBHFnsTJj2kh1zt3qig%2FqNgKLIYftYiODHYNCW2wpxkcu7sfJzsu%2FyJh2J53H4uP%2BvH1fURx29YxlOcrE9%2B%2BhNBcTuA7Q8WawthTSOzq8SvdEuYQC314k2K%2FbSSfI%2B8nMhOv%2Fzqx4vHwuCtN3vIMPDf7bwGOqUBdCZAwQ9ZPYP0N%2F10DqU2GTDABwEosznppvjlS6h%2FF3zVk2kDGFu%2BsSsYwW3kE0MKfEmzrAFRF7gXSAzTG5rfjD6TtxB5%2Fr4i%2BZ0HIL8LcD1SLMThksURFtdEG1meqwsK%2B3mgLOxxPc6pN6oGg7St7KHJpnZz%2BwP65bFKDkObGG6TXEnmmrbEyWPhHSZ2MwqRs9pScx3iNc0MZ6e7yRO9PMtbpO5D&X-Amz-Signature=3f1ae2d0e8d6d35a9324b8c15f07ad16cfa4d9c9db3a369b8ce005e77dd53d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAWEVTY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN80h1x2eSauyXYzDdO0JgbSdUFbLNV0cL0YqlVKbTwAiEA4gxwk4aPBQ10aozECdYk%2FYzBoFZj8LKLRmLCpFc8aNYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcrrImSzVZQiJiucSrcA9q5PsQyYcDszuXDfLxXqEy%2BrM61jEE2IYDWkJtaueqdXaNzDCh3KlnS62AIwGnsBFjlgxQwu5%2BAKkOxahLOPrdn1jMNciGEJ4VsWpETnpp1qiWcjLaZxnX3fdhS%2BsXG79Gzm1wKJu3G01KMeYqjrl7hxPlnEuliW08QvZPiqKB7letXL9RBJwtD6OCLPrV4jjV1VWeL5mKzlOpIwIpAOvqwZagcmE%2FKMnRA6IcR0PyYaGPnyZwRa45pXejzt4JKr6LoaJrrvIL2wkuIIRxdOCpLrp%2BknHIqMKeV8XX16A2A6SqBXTICW7WKyeEj5qAiKMxc1Md%2BWpgu%2F7VSDNiELcoowhFKbcw1ddd9nzwMREO6tAxkMuk8Qo4t33Xt9XzW1zU%2FrBN9mWqjQfqXIF3pmYOigrRGDagbMvuVX5AyUtbIriM4QX25CyDmzHuVvrlWFhV1sUwoBfPBsKHDR2Wbt47%2FBJiAUmK%2BMp0sTRNcgbBHFnsTJj2kh1zt3qig%2FqNgKLIYftYiODHYNCW2wpxkcu7sfJzsu%2FyJh2J53H4uP%2BvH1fURx29YxlOcrE9%2B%2BhNBcTuA7Q8WawthTSOzq8SvdEuYQC314k2K%2FbSSfI%2B8nMhOv%2Fzqx4vHwuCtN3vIMPDf7bwGOqUBdCZAwQ9ZPYP0N%2F10DqU2GTDABwEosznppvjlS6h%2FF3zVk2kDGFu%2BsSsYwW3kE0MKfEmzrAFRF7gXSAzTG5rfjD6TtxB5%2Fr4i%2BZ0HIL8LcD1SLMThksURFtdEG1meqwsK%2B3mgLOxxPc6pN6oGg7St7KHJpnZz%2BwP65bFKDkObGG6TXEnmmrbEyWPhHSZ2MwqRs9pScx3iNc0MZ6e7yRO9PMtbpO5D&X-Amz-Signature=32a414d88cd995b532b6b4702a3e251c723be3c0b108274380cc3e3df400c615&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
