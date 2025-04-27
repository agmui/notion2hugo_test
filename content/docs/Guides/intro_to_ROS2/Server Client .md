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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LYZXN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASUFIEs1ymHqVLYP6%2BFRAYsnfV1B7lHtLLR7j7qCWsGAiBdlcmPy9xk65PBm%2ByahZAnVcl0FnhPkHdV8cScFWhGTir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMaBT0DGsP2j3kaLP2KtwDOZ0SVEKUGiJlEvi8oSepvmbuLtRf03TCBq9%2B1Zax%2FkVLW%2BcJNic6PrS%2FBPecE0I9XhgTGFWjBzOGZPvYfXIMunMj36n1Ztspc%2FxMx6nYshIh2nMfDi6dJHt1XlCPyH4RArOmROWZrX7uTBRd12PPV7QW2MRrmsTWHvaFmbCBqQ3cdF4a24%2BiSfjYPO5NFLVUOVd6kjyFs%2FTFgKAcFy80TJ3TKnXePrFTLVIlIUN%2BYtYMF%2FN2LCWOJx7hc%2BmIAojxwZeS1fnwM%2BBSLgcx0hjLVlpdKopkD0GYifhWRnl69o3FJqazrKXgJkXAd03kA9vngjCNPtKGt%2BFm6fuddwjV1myRfZ0IZRM9Pbq2zkGtni7%2BX%2BrwH%2FjCC52p0zTqgvlscSDmJoeMSZCvJByZiR0l9mTuQwEpTbt5sJp9%2BqT4MD%2B3v0EoNBr5m2NIELTK0EpHLEm4De%2BQ%2B52WERO%2BEyBavBfAucnK4p9CO3vLhva5rf8Uki6XqG5aH%2FXnWoGZVjJy2H0giP8bUFWoewPwxx8S0R78K%2FSX166H65YeC297gZ2BzfRrovUkXRgFZZtVbEjPCw5fAPcRhU6rlzZhPk34B5x7EgdkrUth5vxpPFI80rRFTmqWuxb5l57tzZ4wt9O2wAY6pgG2k7mMOzjOa71EReiikH1l3dUnzfmpla7d2%2FpbNEzJcNn%2F3hBi0tCHuJMvpULoM1WFas22ZJvGrpMVVfAgJozy6rBFFhlYUIe6bvhNcHOKPAF9W3PJs4GvAShyC2ms2Lu%2F21pzvIEkQtNTLgqa2bjJh3i1axBc9bLSjdpp2L2HikrGwWYBk%2BkmbkWHig5o868Qm9V2dpHNp7Sh2SZ%2BJwnLRsfkymgg&X-Amz-Signature=1015d9fefea61ccda9deb669900ab7441fc3c0fbe7e1e9ca6230c01b7eb8bcb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LYZXN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASUFIEs1ymHqVLYP6%2BFRAYsnfV1B7lHtLLR7j7qCWsGAiBdlcmPy9xk65PBm%2ByahZAnVcl0FnhPkHdV8cScFWhGTir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMaBT0DGsP2j3kaLP2KtwDOZ0SVEKUGiJlEvi8oSepvmbuLtRf03TCBq9%2B1Zax%2FkVLW%2BcJNic6PrS%2FBPecE0I9XhgTGFWjBzOGZPvYfXIMunMj36n1Ztspc%2FxMx6nYshIh2nMfDi6dJHt1XlCPyH4RArOmROWZrX7uTBRd12PPV7QW2MRrmsTWHvaFmbCBqQ3cdF4a24%2BiSfjYPO5NFLVUOVd6kjyFs%2FTFgKAcFy80TJ3TKnXePrFTLVIlIUN%2BYtYMF%2FN2LCWOJx7hc%2BmIAojxwZeS1fnwM%2BBSLgcx0hjLVlpdKopkD0GYifhWRnl69o3FJqazrKXgJkXAd03kA9vngjCNPtKGt%2BFm6fuddwjV1myRfZ0IZRM9Pbq2zkGtni7%2BX%2BrwH%2FjCC52p0zTqgvlscSDmJoeMSZCvJByZiR0l9mTuQwEpTbt5sJp9%2BqT4MD%2B3v0EoNBr5m2NIELTK0EpHLEm4De%2BQ%2B52WERO%2BEyBavBfAucnK4p9CO3vLhva5rf8Uki6XqG5aH%2FXnWoGZVjJy2H0giP8bUFWoewPwxx8S0R78K%2FSX166H65YeC297gZ2BzfRrovUkXRgFZZtVbEjPCw5fAPcRhU6rlzZhPk34B5x7EgdkrUth5vxpPFI80rRFTmqWuxb5l57tzZ4wt9O2wAY6pgG2k7mMOzjOa71EReiikH1l3dUnzfmpla7d2%2FpbNEzJcNn%2F3hBi0tCHuJMvpULoM1WFas22ZJvGrpMVVfAgJozy6rBFFhlYUIe6bvhNcHOKPAF9W3PJs4GvAShyC2ms2Lu%2F21pzvIEkQtNTLgqa2bjJh3i1axBc9bLSjdpp2L2HikrGwWYBk%2BkmbkWHig5o868Qm9V2dpHNp7Sh2SZ%2BJwnLRsfkymgg&X-Amz-Signature=e86b2c0c39dc4f3b3ccc3205d831704e5b795658bb6358585df46fa159782012&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LYZXN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASUFIEs1ymHqVLYP6%2BFRAYsnfV1B7lHtLLR7j7qCWsGAiBdlcmPy9xk65PBm%2ByahZAnVcl0FnhPkHdV8cScFWhGTir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMaBT0DGsP2j3kaLP2KtwDOZ0SVEKUGiJlEvi8oSepvmbuLtRf03TCBq9%2B1Zax%2FkVLW%2BcJNic6PrS%2FBPecE0I9XhgTGFWjBzOGZPvYfXIMunMj36n1Ztspc%2FxMx6nYshIh2nMfDi6dJHt1XlCPyH4RArOmROWZrX7uTBRd12PPV7QW2MRrmsTWHvaFmbCBqQ3cdF4a24%2BiSfjYPO5NFLVUOVd6kjyFs%2FTFgKAcFy80TJ3TKnXePrFTLVIlIUN%2BYtYMF%2FN2LCWOJx7hc%2BmIAojxwZeS1fnwM%2BBSLgcx0hjLVlpdKopkD0GYifhWRnl69o3FJqazrKXgJkXAd03kA9vngjCNPtKGt%2BFm6fuddwjV1myRfZ0IZRM9Pbq2zkGtni7%2BX%2BrwH%2FjCC52p0zTqgvlscSDmJoeMSZCvJByZiR0l9mTuQwEpTbt5sJp9%2BqT4MD%2B3v0EoNBr5m2NIELTK0EpHLEm4De%2BQ%2B52WERO%2BEyBavBfAucnK4p9CO3vLhva5rf8Uki6XqG5aH%2FXnWoGZVjJy2H0giP8bUFWoewPwxx8S0R78K%2FSX166H65YeC297gZ2BzfRrovUkXRgFZZtVbEjPCw5fAPcRhU6rlzZhPk34B5x7EgdkrUth5vxpPFI80rRFTmqWuxb5l57tzZ4wt9O2wAY6pgG2k7mMOzjOa71EReiikH1l3dUnzfmpla7d2%2FpbNEzJcNn%2F3hBi0tCHuJMvpULoM1WFas22ZJvGrpMVVfAgJozy6rBFFhlYUIe6bvhNcHOKPAF9W3PJs4GvAShyC2ms2Lu%2F21pzvIEkQtNTLgqa2bjJh3i1axBc9bLSjdpp2L2HikrGwWYBk%2BkmbkWHig5o868Qm9V2dpHNp7Sh2SZ%2BJwnLRsfkymgg&X-Amz-Signature=714679c28debedd615d7d422363ad3daf7711f19560d7ed22ba65699464473eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LYZXN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASUFIEs1ymHqVLYP6%2BFRAYsnfV1B7lHtLLR7j7qCWsGAiBdlcmPy9xk65PBm%2ByahZAnVcl0FnhPkHdV8cScFWhGTir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMaBT0DGsP2j3kaLP2KtwDOZ0SVEKUGiJlEvi8oSepvmbuLtRf03TCBq9%2B1Zax%2FkVLW%2BcJNic6PrS%2FBPecE0I9XhgTGFWjBzOGZPvYfXIMunMj36n1Ztspc%2FxMx6nYshIh2nMfDi6dJHt1XlCPyH4RArOmROWZrX7uTBRd12PPV7QW2MRrmsTWHvaFmbCBqQ3cdF4a24%2BiSfjYPO5NFLVUOVd6kjyFs%2FTFgKAcFy80TJ3TKnXePrFTLVIlIUN%2BYtYMF%2FN2LCWOJx7hc%2BmIAojxwZeS1fnwM%2BBSLgcx0hjLVlpdKopkD0GYifhWRnl69o3FJqazrKXgJkXAd03kA9vngjCNPtKGt%2BFm6fuddwjV1myRfZ0IZRM9Pbq2zkGtni7%2BX%2BrwH%2FjCC52p0zTqgvlscSDmJoeMSZCvJByZiR0l9mTuQwEpTbt5sJp9%2BqT4MD%2B3v0EoNBr5m2NIELTK0EpHLEm4De%2BQ%2B52WERO%2BEyBavBfAucnK4p9CO3vLhva5rf8Uki6XqG5aH%2FXnWoGZVjJy2H0giP8bUFWoewPwxx8S0R78K%2FSX166H65YeC297gZ2BzfRrovUkXRgFZZtVbEjPCw5fAPcRhU6rlzZhPk34B5x7EgdkrUth5vxpPFI80rRFTmqWuxb5l57tzZ4wt9O2wAY6pgG2k7mMOzjOa71EReiikH1l3dUnzfmpla7d2%2FpbNEzJcNn%2F3hBi0tCHuJMvpULoM1WFas22ZJvGrpMVVfAgJozy6rBFFhlYUIe6bvhNcHOKPAF9W3PJs4GvAShyC2ms2Lu%2F21pzvIEkQtNTLgqa2bjJh3i1axBc9bLSjdpp2L2HikrGwWYBk%2BkmbkWHig5o868Qm9V2dpHNp7Sh2SZ%2BJwnLRsfkymgg&X-Amz-Signature=667b304eafbcd06d58d5f56eed702902ae849e5658ef7a3a82cbb77e856d3bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LYZXN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASUFIEs1ymHqVLYP6%2BFRAYsnfV1B7lHtLLR7j7qCWsGAiBdlcmPy9xk65PBm%2ByahZAnVcl0FnhPkHdV8cScFWhGTir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMaBT0DGsP2j3kaLP2KtwDOZ0SVEKUGiJlEvi8oSepvmbuLtRf03TCBq9%2B1Zax%2FkVLW%2BcJNic6PrS%2FBPecE0I9XhgTGFWjBzOGZPvYfXIMunMj36n1Ztspc%2FxMx6nYshIh2nMfDi6dJHt1XlCPyH4RArOmROWZrX7uTBRd12PPV7QW2MRrmsTWHvaFmbCBqQ3cdF4a24%2BiSfjYPO5NFLVUOVd6kjyFs%2FTFgKAcFy80TJ3TKnXePrFTLVIlIUN%2BYtYMF%2FN2LCWOJx7hc%2BmIAojxwZeS1fnwM%2BBSLgcx0hjLVlpdKopkD0GYifhWRnl69o3FJqazrKXgJkXAd03kA9vngjCNPtKGt%2BFm6fuddwjV1myRfZ0IZRM9Pbq2zkGtni7%2BX%2BrwH%2FjCC52p0zTqgvlscSDmJoeMSZCvJByZiR0l9mTuQwEpTbt5sJp9%2BqT4MD%2B3v0EoNBr5m2NIELTK0EpHLEm4De%2BQ%2B52WERO%2BEyBavBfAucnK4p9CO3vLhva5rf8Uki6XqG5aH%2FXnWoGZVjJy2H0giP8bUFWoewPwxx8S0R78K%2FSX166H65YeC297gZ2BzfRrovUkXRgFZZtVbEjPCw5fAPcRhU6rlzZhPk34B5x7EgdkrUth5vxpPFI80rRFTmqWuxb5l57tzZ4wt9O2wAY6pgG2k7mMOzjOa71EReiikH1l3dUnzfmpla7d2%2FpbNEzJcNn%2F3hBi0tCHuJMvpULoM1WFas22ZJvGrpMVVfAgJozy6rBFFhlYUIe6bvhNcHOKPAF9W3PJs4GvAShyC2ms2Lu%2F21pzvIEkQtNTLgqa2bjJh3i1axBc9bLSjdpp2L2HikrGwWYBk%2BkmbkWHig5o868Qm9V2dpHNp7Sh2SZ%2BJwnLRsfkymgg&X-Amz-Signature=028921c41334eb335692a8acb1639d55459c66e0ea79864827934ee1f89e8317&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
