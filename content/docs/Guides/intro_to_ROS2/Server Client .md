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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQGETFH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCcxw0MGWTbrTDJJ2sugQ5BydKqOTiserL1LdzCry9OOgIgaJzsF8MPlE0GcsZeky13JB%2BnyO9C7ybPzVo%2BZycWl9kqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfTrTAwTKiH4Xj3cyrcAwOAqfhrqi%2F1y%2BrHI95QxnUpmCaheIPYS0U87lCweTpRgu0c86gREzgwX7smDDb3%2Fa%2FLf2rjvKGYOMnN6gCezDv%2FCIl5S5Ti87TQZnt27tWnpu43%2Bx%2FsJtArWtqr9AaiZeDPWgv2Cw2Gt5D8jAavJp8sQIrAXMkbegLF%2F8RfszJ0hZ3YG1gXk7ChxmXEe7Gg0JUj2wvl0YtCciMaBV0qzNSZ141TB3Ae8C7SpHGrE14SczX018ZMTYJqHUjgFXlNsqX%2BIOIKRRmK%2B%2BQIVpWYZoY9FNwpUTcSiYBjN0kH5MUgPAx%2FNp3Kg0OnyI9SOn6I9nwntDWuwbGTshFzhhBoLD00xJefQr0ice%2FAifWQgVmtuffi5waRJHDyqKOtVhKJcyV5pGxP5pQshivVt4kcigRaZsd8X6jHVhZh6hr3B4z%2BouzMPKp2lQJC3mTghbVi7TBaLc7IZ5RG2meb1M6V76ziQmY3rZY6QXkkJnauadVSknzi8gCjHgg75q%2FLw6HC2r%2FATqtERa3q8GPVC97KM4Y5TP7ib79MJk5hjfKeFK3PgrArGB9aRVuF0Uniyhk1xBZJzuUztAJAJBJOFn49fyAHkJrzCORHpZ2XCPGEK0P05vppGd0PfJgf1GBmMKChucEGOqUBHrm0cQ8E0QDZv%2FjAsxw2eMo92VcqJi2UTBiXq%2BOmxtAdRMtDTenIg8K73PJBMNrr16n5cqHRcR4sZUXYW1yfH%2FZeOPHONV29VuZhqwidORUIYK1syou6iHB6aALp3RM3501S7iPDgZFvdiHZunijgwX3BmGIOy7YtiLcBkVAM4%2Fq80%2FsT2LrTHbSY8oAcL5kKjrEQZC%2Fpq%2B%2FNw31POsw24uvMOYK&X-Amz-Signature=55139970a96dc6a2b7ca8746bfd61801f060a7ef43e3eee2b8feb889f551b170&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQGETFH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCcxw0MGWTbrTDJJ2sugQ5BydKqOTiserL1LdzCry9OOgIgaJzsF8MPlE0GcsZeky13JB%2BnyO9C7ybPzVo%2BZycWl9kqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfTrTAwTKiH4Xj3cyrcAwOAqfhrqi%2F1y%2BrHI95QxnUpmCaheIPYS0U87lCweTpRgu0c86gREzgwX7smDDb3%2Fa%2FLf2rjvKGYOMnN6gCezDv%2FCIl5S5Ti87TQZnt27tWnpu43%2Bx%2FsJtArWtqr9AaiZeDPWgv2Cw2Gt5D8jAavJp8sQIrAXMkbegLF%2F8RfszJ0hZ3YG1gXk7ChxmXEe7Gg0JUj2wvl0YtCciMaBV0qzNSZ141TB3Ae8C7SpHGrE14SczX018ZMTYJqHUjgFXlNsqX%2BIOIKRRmK%2B%2BQIVpWYZoY9FNwpUTcSiYBjN0kH5MUgPAx%2FNp3Kg0OnyI9SOn6I9nwntDWuwbGTshFzhhBoLD00xJefQr0ice%2FAifWQgVmtuffi5waRJHDyqKOtVhKJcyV5pGxP5pQshivVt4kcigRaZsd8X6jHVhZh6hr3B4z%2BouzMPKp2lQJC3mTghbVi7TBaLc7IZ5RG2meb1M6V76ziQmY3rZY6QXkkJnauadVSknzi8gCjHgg75q%2FLw6HC2r%2FATqtERa3q8GPVC97KM4Y5TP7ib79MJk5hjfKeFK3PgrArGB9aRVuF0Uniyhk1xBZJzuUztAJAJBJOFn49fyAHkJrzCORHpZ2XCPGEK0P05vppGd0PfJgf1GBmMKChucEGOqUBHrm0cQ8E0QDZv%2FjAsxw2eMo92VcqJi2UTBiXq%2BOmxtAdRMtDTenIg8K73PJBMNrr16n5cqHRcR4sZUXYW1yfH%2FZeOPHONV29VuZhqwidORUIYK1syou6iHB6aALp3RM3501S7iPDgZFvdiHZunijgwX3BmGIOy7YtiLcBkVAM4%2Fq80%2FsT2LrTHbSY8oAcL5kKjrEQZC%2Fpq%2B%2FNw31POsw24uvMOYK&X-Amz-Signature=981603c2de1a5a18ea61dd0272701414b71c4b7c588238550130925f156964c5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQGETFH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCcxw0MGWTbrTDJJ2sugQ5BydKqOTiserL1LdzCry9OOgIgaJzsF8MPlE0GcsZeky13JB%2BnyO9C7ybPzVo%2BZycWl9kqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfTrTAwTKiH4Xj3cyrcAwOAqfhrqi%2F1y%2BrHI95QxnUpmCaheIPYS0U87lCweTpRgu0c86gREzgwX7smDDb3%2Fa%2FLf2rjvKGYOMnN6gCezDv%2FCIl5S5Ti87TQZnt27tWnpu43%2Bx%2FsJtArWtqr9AaiZeDPWgv2Cw2Gt5D8jAavJp8sQIrAXMkbegLF%2F8RfszJ0hZ3YG1gXk7ChxmXEe7Gg0JUj2wvl0YtCciMaBV0qzNSZ141TB3Ae8C7SpHGrE14SczX018ZMTYJqHUjgFXlNsqX%2BIOIKRRmK%2B%2BQIVpWYZoY9FNwpUTcSiYBjN0kH5MUgPAx%2FNp3Kg0OnyI9SOn6I9nwntDWuwbGTshFzhhBoLD00xJefQr0ice%2FAifWQgVmtuffi5waRJHDyqKOtVhKJcyV5pGxP5pQshivVt4kcigRaZsd8X6jHVhZh6hr3B4z%2BouzMPKp2lQJC3mTghbVi7TBaLc7IZ5RG2meb1M6V76ziQmY3rZY6QXkkJnauadVSknzi8gCjHgg75q%2FLw6HC2r%2FATqtERa3q8GPVC97KM4Y5TP7ib79MJk5hjfKeFK3PgrArGB9aRVuF0Uniyhk1xBZJzuUztAJAJBJOFn49fyAHkJrzCORHpZ2XCPGEK0P05vppGd0PfJgf1GBmMKChucEGOqUBHrm0cQ8E0QDZv%2FjAsxw2eMo92VcqJi2UTBiXq%2BOmxtAdRMtDTenIg8K73PJBMNrr16n5cqHRcR4sZUXYW1yfH%2FZeOPHONV29VuZhqwidORUIYK1syou6iHB6aALp3RM3501S7iPDgZFvdiHZunijgwX3BmGIOy7YtiLcBkVAM4%2Fq80%2FsT2LrTHbSY8oAcL5kKjrEQZC%2Fpq%2B%2FNw31POsw24uvMOYK&X-Amz-Signature=c11701df4cd648d09e4cfe2c99005c7d28e9554ba1c048c0441c0d260f6a3e01&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQGETFH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCcxw0MGWTbrTDJJ2sugQ5BydKqOTiserL1LdzCry9OOgIgaJzsF8MPlE0GcsZeky13JB%2BnyO9C7ybPzVo%2BZycWl9kqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfTrTAwTKiH4Xj3cyrcAwOAqfhrqi%2F1y%2BrHI95QxnUpmCaheIPYS0U87lCweTpRgu0c86gREzgwX7smDDb3%2Fa%2FLf2rjvKGYOMnN6gCezDv%2FCIl5S5Ti87TQZnt27tWnpu43%2Bx%2FsJtArWtqr9AaiZeDPWgv2Cw2Gt5D8jAavJp8sQIrAXMkbegLF%2F8RfszJ0hZ3YG1gXk7ChxmXEe7Gg0JUj2wvl0YtCciMaBV0qzNSZ141TB3Ae8C7SpHGrE14SczX018ZMTYJqHUjgFXlNsqX%2BIOIKRRmK%2B%2BQIVpWYZoY9FNwpUTcSiYBjN0kH5MUgPAx%2FNp3Kg0OnyI9SOn6I9nwntDWuwbGTshFzhhBoLD00xJefQr0ice%2FAifWQgVmtuffi5waRJHDyqKOtVhKJcyV5pGxP5pQshivVt4kcigRaZsd8X6jHVhZh6hr3B4z%2BouzMPKp2lQJC3mTghbVi7TBaLc7IZ5RG2meb1M6V76ziQmY3rZY6QXkkJnauadVSknzi8gCjHgg75q%2FLw6HC2r%2FATqtERa3q8GPVC97KM4Y5TP7ib79MJk5hjfKeFK3PgrArGB9aRVuF0Uniyhk1xBZJzuUztAJAJBJOFn49fyAHkJrzCORHpZ2XCPGEK0P05vppGd0PfJgf1GBmMKChucEGOqUBHrm0cQ8E0QDZv%2FjAsxw2eMo92VcqJi2UTBiXq%2BOmxtAdRMtDTenIg8K73PJBMNrr16n5cqHRcR4sZUXYW1yfH%2FZeOPHONV29VuZhqwidORUIYK1syou6iHB6aALp3RM3501S7iPDgZFvdiHZunijgwX3BmGIOy7YtiLcBkVAM4%2Fq80%2FsT2LrTHbSY8oAcL5kKjrEQZC%2Fpq%2B%2FNw31POsw24uvMOYK&X-Amz-Signature=19ee2c5b53f77f00f75acb6b4934096188e9608327dc96bc3949d4c4d18bdf5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQGETFH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCcxw0MGWTbrTDJJ2sugQ5BydKqOTiserL1LdzCry9OOgIgaJzsF8MPlE0GcsZeky13JB%2BnyO9C7ybPzVo%2BZycWl9kqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfTrTAwTKiH4Xj3cyrcAwOAqfhrqi%2F1y%2BrHI95QxnUpmCaheIPYS0U87lCweTpRgu0c86gREzgwX7smDDb3%2Fa%2FLf2rjvKGYOMnN6gCezDv%2FCIl5S5Ti87TQZnt27tWnpu43%2Bx%2FsJtArWtqr9AaiZeDPWgv2Cw2Gt5D8jAavJp8sQIrAXMkbegLF%2F8RfszJ0hZ3YG1gXk7ChxmXEe7Gg0JUj2wvl0YtCciMaBV0qzNSZ141TB3Ae8C7SpHGrE14SczX018ZMTYJqHUjgFXlNsqX%2BIOIKRRmK%2B%2BQIVpWYZoY9FNwpUTcSiYBjN0kH5MUgPAx%2FNp3Kg0OnyI9SOn6I9nwntDWuwbGTshFzhhBoLD00xJefQr0ice%2FAifWQgVmtuffi5waRJHDyqKOtVhKJcyV5pGxP5pQshivVt4kcigRaZsd8X6jHVhZh6hr3B4z%2BouzMPKp2lQJC3mTghbVi7TBaLc7IZ5RG2meb1M6V76ziQmY3rZY6QXkkJnauadVSknzi8gCjHgg75q%2FLw6HC2r%2FATqtERa3q8GPVC97KM4Y5TP7ib79MJk5hjfKeFK3PgrArGB9aRVuF0Uniyhk1xBZJzuUztAJAJBJOFn49fyAHkJrzCORHpZ2XCPGEK0P05vppGd0PfJgf1GBmMKChucEGOqUBHrm0cQ8E0QDZv%2FjAsxw2eMo92VcqJi2UTBiXq%2BOmxtAdRMtDTenIg8K73PJBMNrr16n5cqHRcR4sZUXYW1yfH%2FZeOPHONV29VuZhqwidORUIYK1syou6iHB6aALp3RM3501S7iPDgZFvdiHZunijgwX3BmGIOy7YtiLcBkVAM4%2Fq80%2FsT2LrTHbSY8oAcL5kKjrEQZC%2Fpq%2B%2FNw31POsw24uvMOYK&X-Amz-Signature=21beca5d572ffca3c9dfa67df6286cb9f9711a5394413d86d8e4f5139b8dc2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
