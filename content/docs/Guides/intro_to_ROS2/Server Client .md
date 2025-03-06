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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPATBYLR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdrGypOZXU%2B2K4endDBiqAmjA4owgOb6B%2BC6o42RVPeAiEA9XHoP0UQbWxyQtL0Gi62cNKToa7AFi857rc7D8xe6Awq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKnOOKXveaF88cfogSrcA%2BeFxZ%2BRAgCtUC%2BaPAsMrec%2BXLmS7vjha%2BQSg%2BiJ2iM1%2F%2FoPZG%2FgwL1Xg9AyptnlWL%2F%2FghZpGlXEZm64LAV%2BsMwMQxaNcpjvpdIaiUruH1fBGzpO0GDo0CvU4%2F4DxnueK0hswIp2HKNlCUMIddVby2hq%2BEuhpPZPmfJSHxRBI56NHsSS2roR5C%2BlR18%2FIOo%2Fo9KeIlCDOSVbr9klKxs0SN1ToY6hWPTWUZkJHPz4Ykg8a%2BEUhqaXpbyCaKEbN0JVwh7WjaQdB6%2B53tiMU8VTduPgt46FQ0f6IwCYk60Gd9naLWu2BbdkmZ9bxQ93bI5XzCFWWW%2FlNBQYFB69vZfLSvQoqAkJGTYGAwM%2BcTpvnSNoscxdYQgbfIeRqlXKpbo%2Bc%2F7cnApwkmhr3vQf7zhcTLt4F3Gw674zBwVT%2FNMgDVLaXmNY1N7MT9K4kE32ItF%2FDmlT6yKEKk9Nhzj20N3rp5HjY1EV5fjupdPk7Ghie4Xz0XvUvMRExd25F4yqJJAq1sPxPWft2%2BBuTvvr40G3T2o%2BPsU%2BvGnFxLahWb4IPflskAOEiL0WElVesCbkRW9gKxhjoOjqy3t6X1MTJX2YBr63vIGvUp4dwVAHnVkyoSWNpv03DuRpr7YgEALTMNSwpr4GOqUBondv5AFQXIVVyRlWryq2KuP03McufDhE99uzwnSpSddt449Ia9HwT4y0kUVh%2Bn82jZrBZmkeUwV7ZASprvYIMBzxB%2Fqwrn6eR4AhO%2FvNt1Bbm4UYPdfbumJzFesQJLYCx1Jekmkt5p1sLoYdICSRRarBz3Jf6souYEpnsEbI4WSQdfnLT4eOfLAiLksEFiO33tpa3RURIOPrLFEh4eccHvV4G9%2FV&X-Amz-Signature=adba20584215530734219a063dcf382bd8437fb834b69dd160ad8f5a8f6af742&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPATBYLR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdrGypOZXU%2B2K4endDBiqAmjA4owgOb6B%2BC6o42RVPeAiEA9XHoP0UQbWxyQtL0Gi62cNKToa7AFi857rc7D8xe6Awq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKnOOKXveaF88cfogSrcA%2BeFxZ%2BRAgCtUC%2BaPAsMrec%2BXLmS7vjha%2BQSg%2BiJ2iM1%2F%2FoPZG%2FgwL1Xg9AyptnlWL%2F%2FghZpGlXEZm64LAV%2BsMwMQxaNcpjvpdIaiUruH1fBGzpO0GDo0CvU4%2F4DxnueK0hswIp2HKNlCUMIddVby2hq%2BEuhpPZPmfJSHxRBI56NHsSS2roR5C%2BlR18%2FIOo%2Fo9KeIlCDOSVbr9klKxs0SN1ToY6hWPTWUZkJHPz4Ykg8a%2BEUhqaXpbyCaKEbN0JVwh7WjaQdB6%2B53tiMU8VTduPgt46FQ0f6IwCYk60Gd9naLWu2BbdkmZ9bxQ93bI5XzCFWWW%2FlNBQYFB69vZfLSvQoqAkJGTYGAwM%2BcTpvnSNoscxdYQgbfIeRqlXKpbo%2Bc%2F7cnApwkmhr3vQf7zhcTLt4F3Gw674zBwVT%2FNMgDVLaXmNY1N7MT9K4kE32ItF%2FDmlT6yKEKk9Nhzj20N3rp5HjY1EV5fjupdPk7Ghie4Xz0XvUvMRExd25F4yqJJAq1sPxPWft2%2BBuTvvr40G3T2o%2BPsU%2BvGnFxLahWb4IPflskAOEiL0WElVesCbkRW9gKxhjoOjqy3t6X1MTJX2YBr63vIGvUp4dwVAHnVkyoSWNpv03DuRpr7YgEALTMNSwpr4GOqUBondv5AFQXIVVyRlWryq2KuP03McufDhE99uzwnSpSddt449Ia9HwT4y0kUVh%2Bn82jZrBZmkeUwV7ZASprvYIMBzxB%2Fqwrn6eR4AhO%2FvNt1Bbm4UYPdfbumJzFesQJLYCx1Jekmkt5p1sLoYdICSRRarBz3Jf6souYEpnsEbI4WSQdfnLT4eOfLAiLksEFiO33tpa3RURIOPrLFEh4eccHvV4G9%2FV&X-Amz-Signature=afccb4396b728942519e1488ea5bfd376293a7d122f6b58c0fb32435510b2238&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPATBYLR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdrGypOZXU%2B2K4endDBiqAmjA4owgOb6B%2BC6o42RVPeAiEA9XHoP0UQbWxyQtL0Gi62cNKToa7AFi857rc7D8xe6Awq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKnOOKXveaF88cfogSrcA%2BeFxZ%2BRAgCtUC%2BaPAsMrec%2BXLmS7vjha%2BQSg%2BiJ2iM1%2F%2FoPZG%2FgwL1Xg9AyptnlWL%2F%2FghZpGlXEZm64LAV%2BsMwMQxaNcpjvpdIaiUruH1fBGzpO0GDo0CvU4%2F4DxnueK0hswIp2HKNlCUMIddVby2hq%2BEuhpPZPmfJSHxRBI56NHsSS2roR5C%2BlR18%2FIOo%2Fo9KeIlCDOSVbr9klKxs0SN1ToY6hWPTWUZkJHPz4Ykg8a%2BEUhqaXpbyCaKEbN0JVwh7WjaQdB6%2B53tiMU8VTduPgt46FQ0f6IwCYk60Gd9naLWu2BbdkmZ9bxQ93bI5XzCFWWW%2FlNBQYFB69vZfLSvQoqAkJGTYGAwM%2BcTpvnSNoscxdYQgbfIeRqlXKpbo%2Bc%2F7cnApwkmhr3vQf7zhcTLt4F3Gw674zBwVT%2FNMgDVLaXmNY1N7MT9K4kE32ItF%2FDmlT6yKEKk9Nhzj20N3rp5HjY1EV5fjupdPk7Ghie4Xz0XvUvMRExd25F4yqJJAq1sPxPWft2%2BBuTvvr40G3T2o%2BPsU%2BvGnFxLahWb4IPflskAOEiL0WElVesCbkRW9gKxhjoOjqy3t6X1MTJX2YBr63vIGvUp4dwVAHnVkyoSWNpv03DuRpr7YgEALTMNSwpr4GOqUBondv5AFQXIVVyRlWryq2KuP03McufDhE99uzwnSpSddt449Ia9HwT4y0kUVh%2Bn82jZrBZmkeUwV7ZASprvYIMBzxB%2Fqwrn6eR4AhO%2FvNt1Bbm4UYPdfbumJzFesQJLYCx1Jekmkt5p1sLoYdICSRRarBz3Jf6souYEpnsEbI4WSQdfnLT4eOfLAiLksEFiO33tpa3RURIOPrLFEh4eccHvV4G9%2FV&X-Amz-Signature=394e1782844153d589478b2d2b165857a7ad58969224a4f60652d14998086e07&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPATBYLR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdrGypOZXU%2B2K4endDBiqAmjA4owgOb6B%2BC6o42RVPeAiEA9XHoP0UQbWxyQtL0Gi62cNKToa7AFi857rc7D8xe6Awq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKnOOKXveaF88cfogSrcA%2BeFxZ%2BRAgCtUC%2BaPAsMrec%2BXLmS7vjha%2BQSg%2BiJ2iM1%2F%2FoPZG%2FgwL1Xg9AyptnlWL%2F%2FghZpGlXEZm64LAV%2BsMwMQxaNcpjvpdIaiUruH1fBGzpO0GDo0CvU4%2F4DxnueK0hswIp2HKNlCUMIddVby2hq%2BEuhpPZPmfJSHxRBI56NHsSS2roR5C%2BlR18%2FIOo%2Fo9KeIlCDOSVbr9klKxs0SN1ToY6hWPTWUZkJHPz4Ykg8a%2BEUhqaXpbyCaKEbN0JVwh7WjaQdB6%2B53tiMU8VTduPgt46FQ0f6IwCYk60Gd9naLWu2BbdkmZ9bxQ93bI5XzCFWWW%2FlNBQYFB69vZfLSvQoqAkJGTYGAwM%2BcTpvnSNoscxdYQgbfIeRqlXKpbo%2Bc%2F7cnApwkmhr3vQf7zhcTLt4F3Gw674zBwVT%2FNMgDVLaXmNY1N7MT9K4kE32ItF%2FDmlT6yKEKk9Nhzj20N3rp5HjY1EV5fjupdPk7Ghie4Xz0XvUvMRExd25F4yqJJAq1sPxPWft2%2BBuTvvr40G3T2o%2BPsU%2BvGnFxLahWb4IPflskAOEiL0WElVesCbkRW9gKxhjoOjqy3t6X1MTJX2YBr63vIGvUp4dwVAHnVkyoSWNpv03DuRpr7YgEALTMNSwpr4GOqUBondv5AFQXIVVyRlWryq2KuP03McufDhE99uzwnSpSddt449Ia9HwT4y0kUVh%2Bn82jZrBZmkeUwV7ZASprvYIMBzxB%2Fqwrn6eR4AhO%2FvNt1Bbm4UYPdfbumJzFesQJLYCx1Jekmkt5p1sLoYdICSRRarBz3Jf6souYEpnsEbI4WSQdfnLT4eOfLAiLksEFiO33tpa3RURIOPrLFEh4eccHvV4G9%2FV&X-Amz-Signature=0c1f713857a3d09028a85d1479e3b039e4e0cdd81ca64d90a02b54fdba692f29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPATBYLR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdrGypOZXU%2B2K4endDBiqAmjA4owgOb6B%2BC6o42RVPeAiEA9XHoP0UQbWxyQtL0Gi62cNKToa7AFi857rc7D8xe6Awq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKnOOKXveaF88cfogSrcA%2BeFxZ%2BRAgCtUC%2BaPAsMrec%2BXLmS7vjha%2BQSg%2BiJ2iM1%2F%2FoPZG%2FgwL1Xg9AyptnlWL%2F%2FghZpGlXEZm64LAV%2BsMwMQxaNcpjvpdIaiUruH1fBGzpO0GDo0CvU4%2F4DxnueK0hswIp2HKNlCUMIddVby2hq%2BEuhpPZPmfJSHxRBI56NHsSS2roR5C%2BlR18%2FIOo%2Fo9KeIlCDOSVbr9klKxs0SN1ToY6hWPTWUZkJHPz4Ykg8a%2BEUhqaXpbyCaKEbN0JVwh7WjaQdB6%2B53tiMU8VTduPgt46FQ0f6IwCYk60Gd9naLWu2BbdkmZ9bxQ93bI5XzCFWWW%2FlNBQYFB69vZfLSvQoqAkJGTYGAwM%2BcTpvnSNoscxdYQgbfIeRqlXKpbo%2Bc%2F7cnApwkmhr3vQf7zhcTLt4F3Gw674zBwVT%2FNMgDVLaXmNY1N7MT9K4kE32ItF%2FDmlT6yKEKk9Nhzj20N3rp5HjY1EV5fjupdPk7Ghie4Xz0XvUvMRExd25F4yqJJAq1sPxPWft2%2BBuTvvr40G3T2o%2BPsU%2BvGnFxLahWb4IPflskAOEiL0WElVesCbkRW9gKxhjoOjqy3t6X1MTJX2YBr63vIGvUp4dwVAHnVkyoSWNpv03DuRpr7YgEALTMNSwpr4GOqUBondv5AFQXIVVyRlWryq2KuP03McufDhE99uzwnSpSddt449Ia9HwT4y0kUVh%2Bn82jZrBZmkeUwV7ZASprvYIMBzxB%2Fqwrn6eR4AhO%2FvNt1Bbm4UYPdfbumJzFesQJLYCx1Jekmkt5p1sLoYdICSRRarBz3Jf6souYEpnsEbI4WSQdfnLT4eOfLAiLksEFiO33tpa3RURIOPrLFEh4eccHvV4G9%2FV&X-Amz-Signature=f37c07c35eb898ca00bd8b28db97cc7b9faeb3293eae0118d9b2f7e406fc570e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
