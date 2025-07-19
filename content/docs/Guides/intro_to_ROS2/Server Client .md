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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X2RAIBK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClCLQRiItIPhkhSJirBhXx5kzLeq0eOvxqryWb7sHmfgIgEbxGOaLaxnLFYpx92u7lZg0SMWpgg%2FoYXH72VCRbmwAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmx50v%2Bw6BcVJNSuircAxIktUhph%2Fv8yRpMVaDiUpbbRSRQ7OM%2FpxHfx%2Foi%2BfIL1AhkY%2FHYbMHn%2FZaVQkxRor%2BX9OZQpY6u0Nu2vDqRxXhj14R1eVppA52dBPsXrMXmcdF%2Fw%2BKP%2FJaSD5jl95SrDOSs%2FtMEqCEIq72YYNE4bgXYkz24QJ%2B6IzZmVAmr8NzA1Au4wJ2SsAfYqHVtjArSU56bCl%2F5PNSuE66MOrOoKHfOsDp%2BgSbmWpen2uz7V6lwr3oBL3nka5DLa5ukng4Hntxc5BNwiWiqClbkz%2FBgYWYEZ2PEtKlp%2BeD0cF8wBdTKo0X4zC9mdSQFZgMlct42K2bQ1uXm0VuNiSiQkC%2FyFAY%2FWeq2R31zPzbf2YdCUDq14PbEStyinJE4OfgL5y663%2FEC1Tyw20r%2F1cBu8%2Fr%2FY4ideD68WNWcDouOmPeX4ZcQwH4ognRKSUw9S%2Be5UNFxWmWbRHB4yujJMTSC25CGfsroqEfIZLmoxsfT9389ZYzxFa7JLpZf7ByAj239J4jqPaS3ND4mu096BNp9SlZ98SlFzoMFDMYqS1KsQ8q2tPGtWoLhgqBGst73kdfoSaLfO4ThvVd92Aww1BUZ8JoP55mKFXbMzL0Uqdz4JVHqJ%2F7huE5SBrGt2fOjrXgFMPfE7MMGOqUBVdnkz%2BhCt2stXFXG04dKsLLmcwoALAU3klwo9lc5vPfLaNP26KN4PgMbNnrF7FslvCGTu8moKu7JnrG9yvt91HcM77h8Q%2BKgexXv%2BdDWNPCLo9HuHxRHKMF5hg7kr%2BgGUN06iwcZR9Z5xi%2Fquu0YxVnwXpL4qTfR40%2FcxSs2E2LnJErAKQOiBdeNJ%2BQ4AYrlCmfpyOiooAG2HqtrJjM%2B%2B%2FD3C27e&X-Amz-Signature=669f4fa7c2a9c1e448c8e030331a6af63a6367f99dcc0fe55152de8b34017792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X2RAIBK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClCLQRiItIPhkhSJirBhXx5kzLeq0eOvxqryWb7sHmfgIgEbxGOaLaxnLFYpx92u7lZg0SMWpgg%2FoYXH72VCRbmwAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmx50v%2Bw6BcVJNSuircAxIktUhph%2Fv8yRpMVaDiUpbbRSRQ7OM%2FpxHfx%2Foi%2BfIL1AhkY%2FHYbMHn%2FZaVQkxRor%2BX9OZQpY6u0Nu2vDqRxXhj14R1eVppA52dBPsXrMXmcdF%2Fw%2BKP%2FJaSD5jl95SrDOSs%2FtMEqCEIq72YYNE4bgXYkz24QJ%2B6IzZmVAmr8NzA1Au4wJ2SsAfYqHVtjArSU56bCl%2F5PNSuE66MOrOoKHfOsDp%2BgSbmWpen2uz7V6lwr3oBL3nka5DLa5ukng4Hntxc5BNwiWiqClbkz%2FBgYWYEZ2PEtKlp%2BeD0cF8wBdTKo0X4zC9mdSQFZgMlct42K2bQ1uXm0VuNiSiQkC%2FyFAY%2FWeq2R31zPzbf2YdCUDq14PbEStyinJE4OfgL5y663%2FEC1Tyw20r%2F1cBu8%2Fr%2FY4ideD68WNWcDouOmPeX4ZcQwH4ognRKSUw9S%2Be5UNFxWmWbRHB4yujJMTSC25CGfsroqEfIZLmoxsfT9389ZYzxFa7JLpZf7ByAj239J4jqPaS3ND4mu096BNp9SlZ98SlFzoMFDMYqS1KsQ8q2tPGtWoLhgqBGst73kdfoSaLfO4ThvVd92Aww1BUZ8JoP55mKFXbMzL0Uqdz4JVHqJ%2F7huE5SBrGt2fOjrXgFMPfE7MMGOqUBVdnkz%2BhCt2stXFXG04dKsLLmcwoALAU3klwo9lc5vPfLaNP26KN4PgMbNnrF7FslvCGTu8moKu7JnrG9yvt91HcM77h8Q%2BKgexXv%2BdDWNPCLo9HuHxRHKMF5hg7kr%2BgGUN06iwcZR9Z5xi%2Fquu0YxVnwXpL4qTfR40%2FcxSs2E2LnJErAKQOiBdeNJ%2BQ4AYrlCmfpyOiooAG2HqtrJjM%2B%2B%2FD3C27e&X-Amz-Signature=5a7e1bd0409f62b5a6317e1048deccc96fc76d01aab84caec5aa8d2d16f04528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X2RAIBK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClCLQRiItIPhkhSJirBhXx5kzLeq0eOvxqryWb7sHmfgIgEbxGOaLaxnLFYpx92u7lZg0SMWpgg%2FoYXH72VCRbmwAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmx50v%2Bw6BcVJNSuircAxIktUhph%2Fv8yRpMVaDiUpbbRSRQ7OM%2FpxHfx%2Foi%2BfIL1AhkY%2FHYbMHn%2FZaVQkxRor%2BX9OZQpY6u0Nu2vDqRxXhj14R1eVppA52dBPsXrMXmcdF%2Fw%2BKP%2FJaSD5jl95SrDOSs%2FtMEqCEIq72YYNE4bgXYkz24QJ%2B6IzZmVAmr8NzA1Au4wJ2SsAfYqHVtjArSU56bCl%2F5PNSuE66MOrOoKHfOsDp%2BgSbmWpen2uz7V6lwr3oBL3nka5DLa5ukng4Hntxc5BNwiWiqClbkz%2FBgYWYEZ2PEtKlp%2BeD0cF8wBdTKo0X4zC9mdSQFZgMlct42K2bQ1uXm0VuNiSiQkC%2FyFAY%2FWeq2R31zPzbf2YdCUDq14PbEStyinJE4OfgL5y663%2FEC1Tyw20r%2F1cBu8%2Fr%2FY4ideD68WNWcDouOmPeX4ZcQwH4ognRKSUw9S%2Be5UNFxWmWbRHB4yujJMTSC25CGfsroqEfIZLmoxsfT9389ZYzxFa7JLpZf7ByAj239J4jqPaS3ND4mu096BNp9SlZ98SlFzoMFDMYqS1KsQ8q2tPGtWoLhgqBGst73kdfoSaLfO4ThvVd92Aww1BUZ8JoP55mKFXbMzL0Uqdz4JVHqJ%2F7huE5SBrGt2fOjrXgFMPfE7MMGOqUBVdnkz%2BhCt2stXFXG04dKsLLmcwoALAU3klwo9lc5vPfLaNP26KN4PgMbNnrF7FslvCGTu8moKu7JnrG9yvt91HcM77h8Q%2BKgexXv%2BdDWNPCLo9HuHxRHKMF5hg7kr%2BgGUN06iwcZR9Z5xi%2Fquu0YxVnwXpL4qTfR40%2FcxSs2E2LnJErAKQOiBdeNJ%2BQ4AYrlCmfpyOiooAG2HqtrJjM%2B%2B%2FD3C27e&X-Amz-Signature=e2bd0c5c1e890f81be08a021da207fbabcfdf6ba60abd75f8e972144e694c20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X2RAIBK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClCLQRiItIPhkhSJirBhXx5kzLeq0eOvxqryWb7sHmfgIgEbxGOaLaxnLFYpx92u7lZg0SMWpgg%2FoYXH72VCRbmwAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmx50v%2Bw6BcVJNSuircAxIktUhph%2Fv8yRpMVaDiUpbbRSRQ7OM%2FpxHfx%2Foi%2BfIL1AhkY%2FHYbMHn%2FZaVQkxRor%2BX9OZQpY6u0Nu2vDqRxXhj14R1eVppA52dBPsXrMXmcdF%2Fw%2BKP%2FJaSD5jl95SrDOSs%2FtMEqCEIq72YYNE4bgXYkz24QJ%2B6IzZmVAmr8NzA1Au4wJ2SsAfYqHVtjArSU56bCl%2F5PNSuE66MOrOoKHfOsDp%2BgSbmWpen2uz7V6lwr3oBL3nka5DLa5ukng4Hntxc5BNwiWiqClbkz%2FBgYWYEZ2PEtKlp%2BeD0cF8wBdTKo0X4zC9mdSQFZgMlct42K2bQ1uXm0VuNiSiQkC%2FyFAY%2FWeq2R31zPzbf2YdCUDq14PbEStyinJE4OfgL5y663%2FEC1Tyw20r%2F1cBu8%2Fr%2FY4ideD68WNWcDouOmPeX4ZcQwH4ognRKSUw9S%2Be5UNFxWmWbRHB4yujJMTSC25CGfsroqEfIZLmoxsfT9389ZYzxFa7JLpZf7ByAj239J4jqPaS3ND4mu096BNp9SlZ98SlFzoMFDMYqS1KsQ8q2tPGtWoLhgqBGst73kdfoSaLfO4ThvVd92Aww1BUZ8JoP55mKFXbMzL0Uqdz4JVHqJ%2F7huE5SBrGt2fOjrXgFMPfE7MMGOqUBVdnkz%2BhCt2stXFXG04dKsLLmcwoALAU3klwo9lc5vPfLaNP26KN4PgMbNnrF7FslvCGTu8moKu7JnrG9yvt91HcM77h8Q%2BKgexXv%2BdDWNPCLo9HuHxRHKMF5hg7kr%2BgGUN06iwcZR9Z5xi%2Fquu0YxVnwXpL4qTfR40%2FcxSs2E2LnJErAKQOiBdeNJ%2BQ4AYrlCmfpyOiooAG2HqtrJjM%2B%2B%2FD3C27e&X-Amz-Signature=f157fe8333a4c6319044906a611c76fb448c46d5ef1336d094b249a5c300a8d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X2RAIBK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClCLQRiItIPhkhSJirBhXx5kzLeq0eOvxqryWb7sHmfgIgEbxGOaLaxnLFYpx92u7lZg0SMWpgg%2FoYXH72VCRbmwAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmx50v%2Bw6BcVJNSuircAxIktUhph%2Fv8yRpMVaDiUpbbRSRQ7OM%2FpxHfx%2Foi%2BfIL1AhkY%2FHYbMHn%2FZaVQkxRor%2BX9OZQpY6u0Nu2vDqRxXhj14R1eVppA52dBPsXrMXmcdF%2Fw%2BKP%2FJaSD5jl95SrDOSs%2FtMEqCEIq72YYNE4bgXYkz24QJ%2B6IzZmVAmr8NzA1Au4wJ2SsAfYqHVtjArSU56bCl%2F5PNSuE66MOrOoKHfOsDp%2BgSbmWpen2uz7V6lwr3oBL3nka5DLa5ukng4Hntxc5BNwiWiqClbkz%2FBgYWYEZ2PEtKlp%2BeD0cF8wBdTKo0X4zC9mdSQFZgMlct42K2bQ1uXm0VuNiSiQkC%2FyFAY%2FWeq2R31zPzbf2YdCUDq14PbEStyinJE4OfgL5y663%2FEC1Tyw20r%2F1cBu8%2Fr%2FY4ideD68WNWcDouOmPeX4ZcQwH4ognRKSUw9S%2Be5UNFxWmWbRHB4yujJMTSC25CGfsroqEfIZLmoxsfT9389ZYzxFa7JLpZf7ByAj239J4jqPaS3ND4mu096BNp9SlZ98SlFzoMFDMYqS1KsQ8q2tPGtWoLhgqBGst73kdfoSaLfO4ThvVd92Aww1BUZ8JoP55mKFXbMzL0Uqdz4JVHqJ%2F7huE5SBrGt2fOjrXgFMPfE7MMGOqUBVdnkz%2BhCt2stXFXG04dKsLLmcwoALAU3klwo9lc5vPfLaNP26KN4PgMbNnrF7FslvCGTu8moKu7JnrG9yvt91HcM77h8Q%2BKgexXv%2BdDWNPCLo9HuHxRHKMF5hg7kr%2BgGUN06iwcZR9Z5xi%2Fquu0YxVnwXpL4qTfR40%2FcxSs2E2LnJErAKQOiBdeNJ%2BQ4AYrlCmfpyOiooAG2HqtrJjM%2B%2B%2FD3C27e&X-Amz-Signature=eeb62b85083352594e4520c7b94027ac5aef733793dc532ba168b2aa9551e1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
