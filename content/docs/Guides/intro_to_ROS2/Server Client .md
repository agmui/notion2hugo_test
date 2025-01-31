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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNYZRRW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcztg5IKxOii8qZh6WhnVVSQRtoaSVaHinq578ew0gUAiBWDN0EyMHLxDotEOp53IXtK24F3oZ4CClKJuOHuVysuCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdOIVW2SPD9fJZkORKtwD0ShrpkY0xUUcFtXlaItwX2BlfI7kBXRMdS2G3UJw4YnruthJjtCb77Z1T46ivVrzaT9nibnNwS%2BJYhlPub8%2BvO3K%2Bk3SvaPvIk45J5J7NYaWunj0HRDhOUorb50SuOvLr%2FHhXYs%2FxPbdCCPsCpj5mvvmi2o6nme6Pk8e%2Fq%2FJpJOHlcOV04mzOv3%2BexpehNavzvqvc5Nb7tZQtnHAESerDAwK0ayD4UycTkRb9BUhU9pPj3LRj8XwMkjN%2FVoDl7ecdm1hlpw5pCrlHsbpYcDYjPoenxQ7aaQnvwt7kM9fgYCP9eRpz5PPMDGtEu8x1c%2FXZKb6GDi3REQ%2FPl78WMscO9b8belRre%2FIAGDrPJCYnzYTolDEEdTrS%2BIFHdsQPxg3cXuksenSVp97uvwOd6wYxYJcMDxqdLpHwF9nTA9r7QqU0jFJxRoj0AwJsm3OkW0dyLxFSFeC0%2FZwRLba76ZycUy51vWcvmjsqdr8agAyOcnRkFpGnQB5zQFRjuZ2%2B%2BAXUEiVieO00DRTLJDEPjNs0Xi2AjMumlEvQfgnzAZlGcX%2BlbSfn5zC67uW7qnf7Sx9FPszCeNhvMCV0hefw3N8uaolut7376NV63V4x80XDaA5iH4Dh%2Fpdb5HxypUw0dHwvAY6pgEONV9MiCB2RYtXo1BUfQT555D%2FMJoSWg0oJyQg0GkvaT3Te6wh%2BGiQD7UHDbWyenF7rCV3CPk8aHAuMylbM%2BLinZrenIxr0ky%2BKfs5Zsp3RUxv4S5WaU2cw2jtUh6O8FG6xm0hi%2FIF2FISLGCxDGqmuUyhMd84JPQ1CpyziNCYcH%2BRvlQXuHYeagiqSX2BREN2Zstlqw%2BUzNK5%2F9T0V%2BkuwjUEsxYy&X-Amz-Signature=5f24df17959b6b7a097bbb4b2faee759ba9bf5668eab9c6178542decd5746f75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNYZRRW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcztg5IKxOii8qZh6WhnVVSQRtoaSVaHinq578ew0gUAiBWDN0EyMHLxDotEOp53IXtK24F3oZ4CClKJuOHuVysuCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdOIVW2SPD9fJZkORKtwD0ShrpkY0xUUcFtXlaItwX2BlfI7kBXRMdS2G3UJw4YnruthJjtCb77Z1T46ivVrzaT9nibnNwS%2BJYhlPub8%2BvO3K%2Bk3SvaPvIk45J5J7NYaWunj0HRDhOUorb50SuOvLr%2FHhXYs%2FxPbdCCPsCpj5mvvmi2o6nme6Pk8e%2Fq%2FJpJOHlcOV04mzOv3%2BexpehNavzvqvc5Nb7tZQtnHAESerDAwK0ayD4UycTkRb9BUhU9pPj3LRj8XwMkjN%2FVoDl7ecdm1hlpw5pCrlHsbpYcDYjPoenxQ7aaQnvwt7kM9fgYCP9eRpz5PPMDGtEu8x1c%2FXZKb6GDi3REQ%2FPl78WMscO9b8belRre%2FIAGDrPJCYnzYTolDEEdTrS%2BIFHdsQPxg3cXuksenSVp97uvwOd6wYxYJcMDxqdLpHwF9nTA9r7QqU0jFJxRoj0AwJsm3OkW0dyLxFSFeC0%2FZwRLba76ZycUy51vWcvmjsqdr8agAyOcnRkFpGnQB5zQFRjuZ2%2B%2BAXUEiVieO00DRTLJDEPjNs0Xi2AjMumlEvQfgnzAZlGcX%2BlbSfn5zC67uW7qnf7Sx9FPszCeNhvMCV0hefw3N8uaolut7376NV63V4x80XDaA5iH4Dh%2Fpdb5HxypUw0dHwvAY6pgEONV9MiCB2RYtXo1BUfQT555D%2FMJoSWg0oJyQg0GkvaT3Te6wh%2BGiQD7UHDbWyenF7rCV3CPk8aHAuMylbM%2BLinZrenIxr0ky%2BKfs5Zsp3RUxv4S5WaU2cw2jtUh6O8FG6xm0hi%2FIF2FISLGCxDGqmuUyhMd84JPQ1CpyziNCYcH%2BRvlQXuHYeagiqSX2BREN2Zstlqw%2BUzNK5%2F9T0V%2BkuwjUEsxYy&X-Amz-Signature=7b44c2779284bacdce2887af7a210edbe485de8d65c43a6fca07c31597b698d4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNYZRRW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcztg5IKxOii8qZh6WhnVVSQRtoaSVaHinq578ew0gUAiBWDN0EyMHLxDotEOp53IXtK24F3oZ4CClKJuOHuVysuCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdOIVW2SPD9fJZkORKtwD0ShrpkY0xUUcFtXlaItwX2BlfI7kBXRMdS2G3UJw4YnruthJjtCb77Z1T46ivVrzaT9nibnNwS%2BJYhlPub8%2BvO3K%2Bk3SvaPvIk45J5J7NYaWunj0HRDhOUorb50SuOvLr%2FHhXYs%2FxPbdCCPsCpj5mvvmi2o6nme6Pk8e%2Fq%2FJpJOHlcOV04mzOv3%2BexpehNavzvqvc5Nb7tZQtnHAESerDAwK0ayD4UycTkRb9BUhU9pPj3LRj8XwMkjN%2FVoDl7ecdm1hlpw5pCrlHsbpYcDYjPoenxQ7aaQnvwt7kM9fgYCP9eRpz5PPMDGtEu8x1c%2FXZKb6GDi3REQ%2FPl78WMscO9b8belRre%2FIAGDrPJCYnzYTolDEEdTrS%2BIFHdsQPxg3cXuksenSVp97uvwOd6wYxYJcMDxqdLpHwF9nTA9r7QqU0jFJxRoj0AwJsm3OkW0dyLxFSFeC0%2FZwRLba76ZycUy51vWcvmjsqdr8agAyOcnRkFpGnQB5zQFRjuZ2%2B%2BAXUEiVieO00DRTLJDEPjNs0Xi2AjMumlEvQfgnzAZlGcX%2BlbSfn5zC67uW7qnf7Sx9FPszCeNhvMCV0hefw3N8uaolut7376NV63V4x80XDaA5iH4Dh%2Fpdb5HxypUw0dHwvAY6pgEONV9MiCB2RYtXo1BUfQT555D%2FMJoSWg0oJyQg0GkvaT3Te6wh%2BGiQD7UHDbWyenF7rCV3CPk8aHAuMylbM%2BLinZrenIxr0ky%2BKfs5Zsp3RUxv4S5WaU2cw2jtUh6O8FG6xm0hi%2FIF2FISLGCxDGqmuUyhMd84JPQ1CpyziNCYcH%2BRvlQXuHYeagiqSX2BREN2Zstlqw%2BUzNK5%2F9T0V%2BkuwjUEsxYy&X-Amz-Signature=e4f2f6e91fa71c621e1f920a1bde6bbcb5857c067db129dff69eb047a5621852&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNYZRRW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcztg5IKxOii8qZh6WhnVVSQRtoaSVaHinq578ew0gUAiBWDN0EyMHLxDotEOp53IXtK24F3oZ4CClKJuOHuVysuCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdOIVW2SPD9fJZkORKtwD0ShrpkY0xUUcFtXlaItwX2BlfI7kBXRMdS2G3UJw4YnruthJjtCb77Z1T46ivVrzaT9nibnNwS%2BJYhlPub8%2BvO3K%2Bk3SvaPvIk45J5J7NYaWunj0HRDhOUorb50SuOvLr%2FHhXYs%2FxPbdCCPsCpj5mvvmi2o6nme6Pk8e%2Fq%2FJpJOHlcOV04mzOv3%2BexpehNavzvqvc5Nb7tZQtnHAESerDAwK0ayD4UycTkRb9BUhU9pPj3LRj8XwMkjN%2FVoDl7ecdm1hlpw5pCrlHsbpYcDYjPoenxQ7aaQnvwt7kM9fgYCP9eRpz5PPMDGtEu8x1c%2FXZKb6GDi3REQ%2FPl78WMscO9b8belRre%2FIAGDrPJCYnzYTolDEEdTrS%2BIFHdsQPxg3cXuksenSVp97uvwOd6wYxYJcMDxqdLpHwF9nTA9r7QqU0jFJxRoj0AwJsm3OkW0dyLxFSFeC0%2FZwRLba76ZycUy51vWcvmjsqdr8agAyOcnRkFpGnQB5zQFRjuZ2%2B%2BAXUEiVieO00DRTLJDEPjNs0Xi2AjMumlEvQfgnzAZlGcX%2BlbSfn5zC67uW7qnf7Sx9FPszCeNhvMCV0hefw3N8uaolut7376NV63V4x80XDaA5iH4Dh%2Fpdb5HxypUw0dHwvAY6pgEONV9MiCB2RYtXo1BUfQT555D%2FMJoSWg0oJyQg0GkvaT3Te6wh%2BGiQD7UHDbWyenF7rCV3CPk8aHAuMylbM%2BLinZrenIxr0ky%2BKfs5Zsp3RUxv4S5WaU2cw2jtUh6O8FG6xm0hi%2FIF2FISLGCxDGqmuUyhMd84JPQ1CpyziNCYcH%2BRvlQXuHYeagiqSX2BREN2Zstlqw%2BUzNK5%2F9T0V%2BkuwjUEsxYy&X-Amz-Signature=b233fd57ced4d4a6bc165e32464a2ceeeba70fe3ec53eced29e769c5f5763a84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNYZRRW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcztg5IKxOii8qZh6WhnVVSQRtoaSVaHinq578ew0gUAiBWDN0EyMHLxDotEOp53IXtK24F3oZ4CClKJuOHuVysuCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdOIVW2SPD9fJZkORKtwD0ShrpkY0xUUcFtXlaItwX2BlfI7kBXRMdS2G3UJw4YnruthJjtCb77Z1T46ivVrzaT9nibnNwS%2BJYhlPub8%2BvO3K%2Bk3SvaPvIk45J5J7NYaWunj0HRDhOUorb50SuOvLr%2FHhXYs%2FxPbdCCPsCpj5mvvmi2o6nme6Pk8e%2Fq%2FJpJOHlcOV04mzOv3%2BexpehNavzvqvc5Nb7tZQtnHAESerDAwK0ayD4UycTkRb9BUhU9pPj3LRj8XwMkjN%2FVoDl7ecdm1hlpw5pCrlHsbpYcDYjPoenxQ7aaQnvwt7kM9fgYCP9eRpz5PPMDGtEu8x1c%2FXZKb6GDi3REQ%2FPl78WMscO9b8belRre%2FIAGDrPJCYnzYTolDEEdTrS%2BIFHdsQPxg3cXuksenSVp97uvwOd6wYxYJcMDxqdLpHwF9nTA9r7QqU0jFJxRoj0AwJsm3OkW0dyLxFSFeC0%2FZwRLba76ZycUy51vWcvmjsqdr8agAyOcnRkFpGnQB5zQFRjuZ2%2B%2BAXUEiVieO00DRTLJDEPjNs0Xi2AjMumlEvQfgnzAZlGcX%2BlbSfn5zC67uW7qnf7Sx9FPszCeNhvMCV0hefw3N8uaolut7376NV63V4x80XDaA5iH4Dh%2Fpdb5HxypUw0dHwvAY6pgEONV9MiCB2RYtXo1BUfQT555D%2FMJoSWg0oJyQg0GkvaT3Te6wh%2BGiQD7UHDbWyenF7rCV3CPk8aHAuMylbM%2BLinZrenIxr0ky%2BKfs5Zsp3RUxv4S5WaU2cw2jtUh6O8FG6xm0hi%2FIF2FISLGCxDGqmuUyhMd84JPQ1CpyziNCYcH%2BRvlQXuHYeagiqSX2BREN2Zstlqw%2BUzNK5%2F9T0V%2BkuwjUEsxYy&X-Amz-Signature=89571b9d92c52ce81f7aa8623aa0cbcbd4c46e4000ede3e8ed9661fbef0f524e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
