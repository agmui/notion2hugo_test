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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEMA6RE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6tRgHQ2ZHZPvKbGuCRcr6oHJSPRhnpxjSqqcXnVLn%2FAIhAIQXYEAthM9iRqTox11aHsSLHQAyFDxuOTm0wZ0nVaUUKv8DCGoQABoMNjM3NDIzMTgzODA1Igwm2R82RAPNqACmTnEq3AN5Yt0upjFyAarAp%2B7sMto2i1WXZdRNfE%2FsG2Yz05XnDYB%2B1S8YQZld7%2B6hCRg5oGxKzAq2%2FtDzMmS4jsnN9Agyky1xpQKOcg2mZLd3Ifh5hSuvvMAEXDnOvBiLJlf7e87SzI68BmfAoCY3Og0KWn8BLhU4ECkipSc9GYhgVjr%2Fl%2FOCHk7q0kGlc6qJhGP3EBY2kAIsi42vZ25LP%2BZyGYhQcK%2FmZ5BlyphgejaDoyfwFNd7kIcWQCeHEkQpX%2BgqUdL4Nomn719WdR13HEy28Chxz9X7Xl22mVkYLhCWtDCCSmnE%2BVm8AGxlk8DzdKOi5Ny7ZOvcn%2BWGj%2FquJAeoPcLb727oEjYFePZryWbnBpVS5KBgiRnf1OHxMQyFSNoTSl7ybdPBcDRdokEWvbT7UZ60UuJoG4LABeJ0KxncvMwj1ZsH%2BJSv7AK6IubwbxczJ48qHVVd%2FsMAsl%2BpvpBINyRgvJ%2BYQ4V4DUXby2eaEoIask%2BvKhEjMukMg8mUaeJA5gX7bprHT5h9oB8z1P2vd0YKvLJ0tMBUPAplqF%2BZu4E5KJbRX5CsxQEMTx28TskCCxB0t5l3X2M4b4SiHCOeqc622m6SMpVlcCqaxzaRI5qttXCbFkaNoP2MGiIi4DC%2FobvABjqkAXWCJagPR3JZCeE%2BwYCYvqgrd2mi5N7%2FxHTQT8Z4C2Z1g17mTNM%2FfwUk3lWEU11YaLkwDIfuR220sPEfT2YWFHhj46vZOGqJw6Fh975cLsUCfmbHb3tJ09aWBfflmKjeYBWvvLjJ7koZbewa7xZIwQMd%2FCyzxY2ziHP%2BN8G%2BuySR%2Bo6DTBCiDgKq7SbEFHWRlDscbGRrevNh4mPo0AW2GW%2BruOJz&X-Amz-Signature=077f6f6c10494b45e80dee323ed1ba8855b1a45026cdd5f0cb97c0c0bba15c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEMA6RE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6tRgHQ2ZHZPvKbGuCRcr6oHJSPRhnpxjSqqcXnVLn%2FAIhAIQXYEAthM9iRqTox11aHsSLHQAyFDxuOTm0wZ0nVaUUKv8DCGoQABoMNjM3NDIzMTgzODA1Igwm2R82RAPNqACmTnEq3AN5Yt0upjFyAarAp%2B7sMto2i1WXZdRNfE%2FsG2Yz05XnDYB%2B1S8YQZld7%2B6hCRg5oGxKzAq2%2FtDzMmS4jsnN9Agyky1xpQKOcg2mZLd3Ifh5hSuvvMAEXDnOvBiLJlf7e87SzI68BmfAoCY3Og0KWn8BLhU4ECkipSc9GYhgVjr%2Fl%2FOCHk7q0kGlc6qJhGP3EBY2kAIsi42vZ25LP%2BZyGYhQcK%2FmZ5BlyphgejaDoyfwFNd7kIcWQCeHEkQpX%2BgqUdL4Nomn719WdR13HEy28Chxz9X7Xl22mVkYLhCWtDCCSmnE%2BVm8AGxlk8DzdKOi5Ny7ZOvcn%2BWGj%2FquJAeoPcLb727oEjYFePZryWbnBpVS5KBgiRnf1OHxMQyFSNoTSl7ybdPBcDRdokEWvbT7UZ60UuJoG4LABeJ0KxncvMwj1ZsH%2BJSv7AK6IubwbxczJ48qHVVd%2FsMAsl%2BpvpBINyRgvJ%2BYQ4V4DUXby2eaEoIask%2BvKhEjMukMg8mUaeJA5gX7bprHT5h9oB8z1P2vd0YKvLJ0tMBUPAplqF%2BZu4E5KJbRX5CsxQEMTx28TskCCxB0t5l3X2M4b4SiHCOeqc622m6SMpVlcCqaxzaRI5qttXCbFkaNoP2MGiIi4DC%2FobvABjqkAXWCJagPR3JZCeE%2BwYCYvqgrd2mi5N7%2FxHTQT8Z4C2Z1g17mTNM%2FfwUk3lWEU11YaLkwDIfuR220sPEfT2YWFHhj46vZOGqJw6Fh975cLsUCfmbHb3tJ09aWBfflmKjeYBWvvLjJ7koZbewa7xZIwQMd%2FCyzxY2ziHP%2BN8G%2BuySR%2Bo6DTBCiDgKq7SbEFHWRlDscbGRrevNh4mPo0AW2GW%2BruOJz&X-Amz-Signature=bfdb3b9229d8ee6ecdef3e03e94e048430456f6900fd8a27f77ad3becc94dd88&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEMA6RE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6tRgHQ2ZHZPvKbGuCRcr6oHJSPRhnpxjSqqcXnVLn%2FAIhAIQXYEAthM9iRqTox11aHsSLHQAyFDxuOTm0wZ0nVaUUKv8DCGoQABoMNjM3NDIzMTgzODA1Igwm2R82RAPNqACmTnEq3AN5Yt0upjFyAarAp%2B7sMto2i1WXZdRNfE%2FsG2Yz05XnDYB%2B1S8YQZld7%2B6hCRg5oGxKzAq2%2FtDzMmS4jsnN9Agyky1xpQKOcg2mZLd3Ifh5hSuvvMAEXDnOvBiLJlf7e87SzI68BmfAoCY3Og0KWn8BLhU4ECkipSc9GYhgVjr%2Fl%2FOCHk7q0kGlc6qJhGP3EBY2kAIsi42vZ25LP%2BZyGYhQcK%2FmZ5BlyphgejaDoyfwFNd7kIcWQCeHEkQpX%2BgqUdL4Nomn719WdR13HEy28Chxz9X7Xl22mVkYLhCWtDCCSmnE%2BVm8AGxlk8DzdKOi5Ny7ZOvcn%2BWGj%2FquJAeoPcLb727oEjYFePZryWbnBpVS5KBgiRnf1OHxMQyFSNoTSl7ybdPBcDRdokEWvbT7UZ60UuJoG4LABeJ0KxncvMwj1ZsH%2BJSv7AK6IubwbxczJ48qHVVd%2FsMAsl%2BpvpBINyRgvJ%2BYQ4V4DUXby2eaEoIask%2BvKhEjMukMg8mUaeJA5gX7bprHT5h9oB8z1P2vd0YKvLJ0tMBUPAplqF%2BZu4E5KJbRX5CsxQEMTx28TskCCxB0t5l3X2M4b4SiHCOeqc622m6SMpVlcCqaxzaRI5qttXCbFkaNoP2MGiIi4DC%2FobvABjqkAXWCJagPR3JZCeE%2BwYCYvqgrd2mi5N7%2FxHTQT8Z4C2Z1g17mTNM%2FfwUk3lWEU11YaLkwDIfuR220sPEfT2YWFHhj46vZOGqJw6Fh975cLsUCfmbHb3tJ09aWBfflmKjeYBWvvLjJ7koZbewa7xZIwQMd%2FCyzxY2ziHP%2BN8G%2BuySR%2Bo6DTBCiDgKq7SbEFHWRlDscbGRrevNh4mPo0AW2GW%2BruOJz&X-Amz-Signature=c96e6e740100819cb4f0d0638072cb4c374f273888288018158ed7da835d7049&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEMA6RE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6tRgHQ2ZHZPvKbGuCRcr6oHJSPRhnpxjSqqcXnVLn%2FAIhAIQXYEAthM9iRqTox11aHsSLHQAyFDxuOTm0wZ0nVaUUKv8DCGoQABoMNjM3NDIzMTgzODA1Igwm2R82RAPNqACmTnEq3AN5Yt0upjFyAarAp%2B7sMto2i1WXZdRNfE%2FsG2Yz05XnDYB%2B1S8YQZld7%2B6hCRg5oGxKzAq2%2FtDzMmS4jsnN9Agyky1xpQKOcg2mZLd3Ifh5hSuvvMAEXDnOvBiLJlf7e87SzI68BmfAoCY3Og0KWn8BLhU4ECkipSc9GYhgVjr%2Fl%2FOCHk7q0kGlc6qJhGP3EBY2kAIsi42vZ25LP%2BZyGYhQcK%2FmZ5BlyphgejaDoyfwFNd7kIcWQCeHEkQpX%2BgqUdL4Nomn719WdR13HEy28Chxz9X7Xl22mVkYLhCWtDCCSmnE%2BVm8AGxlk8DzdKOi5Ny7ZOvcn%2BWGj%2FquJAeoPcLb727oEjYFePZryWbnBpVS5KBgiRnf1OHxMQyFSNoTSl7ybdPBcDRdokEWvbT7UZ60UuJoG4LABeJ0KxncvMwj1ZsH%2BJSv7AK6IubwbxczJ48qHVVd%2FsMAsl%2BpvpBINyRgvJ%2BYQ4V4DUXby2eaEoIask%2BvKhEjMukMg8mUaeJA5gX7bprHT5h9oB8z1P2vd0YKvLJ0tMBUPAplqF%2BZu4E5KJbRX5CsxQEMTx28TskCCxB0t5l3X2M4b4SiHCOeqc622m6SMpVlcCqaxzaRI5qttXCbFkaNoP2MGiIi4DC%2FobvABjqkAXWCJagPR3JZCeE%2BwYCYvqgrd2mi5N7%2FxHTQT8Z4C2Z1g17mTNM%2FfwUk3lWEU11YaLkwDIfuR220sPEfT2YWFHhj46vZOGqJw6Fh975cLsUCfmbHb3tJ09aWBfflmKjeYBWvvLjJ7koZbewa7xZIwQMd%2FCyzxY2ziHP%2BN8G%2BuySR%2Bo6DTBCiDgKq7SbEFHWRlDscbGRrevNh4mPo0AW2GW%2BruOJz&X-Amz-Signature=53a448969c85cd7123a7fbd48fd7d232fe717c4d74742f1612ab21f51070749c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEMA6RE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6tRgHQ2ZHZPvKbGuCRcr6oHJSPRhnpxjSqqcXnVLn%2FAIhAIQXYEAthM9iRqTox11aHsSLHQAyFDxuOTm0wZ0nVaUUKv8DCGoQABoMNjM3NDIzMTgzODA1Igwm2R82RAPNqACmTnEq3AN5Yt0upjFyAarAp%2B7sMto2i1WXZdRNfE%2FsG2Yz05XnDYB%2B1S8YQZld7%2B6hCRg5oGxKzAq2%2FtDzMmS4jsnN9Agyky1xpQKOcg2mZLd3Ifh5hSuvvMAEXDnOvBiLJlf7e87SzI68BmfAoCY3Og0KWn8BLhU4ECkipSc9GYhgVjr%2Fl%2FOCHk7q0kGlc6qJhGP3EBY2kAIsi42vZ25LP%2BZyGYhQcK%2FmZ5BlyphgejaDoyfwFNd7kIcWQCeHEkQpX%2BgqUdL4Nomn719WdR13HEy28Chxz9X7Xl22mVkYLhCWtDCCSmnE%2BVm8AGxlk8DzdKOi5Ny7ZOvcn%2BWGj%2FquJAeoPcLb727oEjYFePZryWbnBpVS5KBgiRnf1OHxMQyFSNoTSl7ybdPBcDRdokEWvbT7UZ60UuJoG4LABeJ0KxncvMwj1ZsH%2BJSv7AK6IubwbxczJ48qHVVd%2FsMAsl%2BpvpBINyRgvJ%2BYQ4V4DUXby2eaEoIask%2BvKhEjMukMg8mUaeJA5gX7bprHT5h9oB8z1P2vd0YKvLJ0tMBUPAplqF%2BZu4E5KJbRX5CsxQEMTx28TskCCxB0t5l3X2M4b4SiHCOeqc622m6SMpVlcCqaxzaRI5qttXCbFkaNoP2MGiIi4DC%2FobvABjqkAXWCJagPR3JZCeE%2BwYCYvqgrd2mi5N7%2FxHTQT8Z4C2Z1g17mTNM%2FfwUk3lWEU11YaLkwDIfuR220sPEfT2YWFHhj46vZOGqJw6Fh975cLsUCfmbHb3tJ09aWBfflmKjeYBWvvLjJ7koZbewa7xZIwQMd%2FCyzxY2ziHP%2BN8G%2BuySR%2Bo6DTBCiDgKq7SbEFHWRlDscbGRrevNh4mPo0AW2GW%2BruOJz&X-Amz-Signature=2ce538aa7708ab3aef233efac06a27e070bc8e9cd7c4529e6e0a755c52379b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
