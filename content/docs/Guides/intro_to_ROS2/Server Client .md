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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNN4PFM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCwmEJhOVExaGBL%2FBNIPecUfMP02ZulBUxuQtpgEsB23gIgOVPoPFlurmfIiYVw9oWiHjx0B5vwrUkQFStTu6YR3PMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIn6PPub075JlBW3qCrcA0RE%2FmDHaeX%2FQRv3Kz91KRBdMUOhToLTnjBeQhHh6%2B8axcb46I5UJCEOq7%2FksOEcomSjeuuGZcz8bYQMwlgwf4RjjCppWByJKlgXQoYLGAKK39QAodmefdqLHx4PZzJzxfYAuP1vCxdMXhTM9tlDVJxG4Iocsojt5M5DHy0LmLCGFNaYFvRXVDTPpNXM%2BKLk55z1Gt%2FR1MYYz1A7lLaszIduC%2FTTnmrExGmPzLgeUnjGoJtgQz3YK8tr7FaichFKxlSFIsOaFOyyd%2BHazwpuKkO1bUztSCHbI85c3tg7zWjkjaOtdwb37dSw27xXtCokgt5zQeT5Wzo7%2FdDLha9%2FyerJSbKjvdEtIWgBvBcbyxAY5YMjW5sQ4vUgUeRW%2B1Fo7lCdB6f7o%2BT4RFUxpIVZWb%2BlQbkh9gPfkGNe%2FZyy3w0mTUBSwiEKNI6ewF%2BtMBajAyft35NJkgk5OdNm1lsTnQoD%2B45OMC52vZ%2BQx%2FzNAoLDDKtdXIBZHjhnIQYpzOk6T3cogiQZMt%2Fb0Y8cLqqzMwaKlePu62ET2in%2FlEOZALBDTi%2FaUTEk68MKX14LP7QHDdJIJAmm3l2t1hiu3ycyn8h9%2FXpvzfADWgjS8JeBSO7O4vN6NVtofiWYTIL%2FMMHX5L4GOqUBwBvbUSUSW63NXCkMGUJqDi%2FZVoGdIAq63VSDBXEto5ajE9ZvSKluQbHyZG%2BBZkJ1SEIF08ROHnjY88%2BhiSsa8U9YGeIDf0%2FWa%2FdEhSp9bUe6%2BRpFxEoxshw9lc9L%2FyNuKfKj9r2b4zL5dorn2qiF%2BGSzdg%2BExiMIkHAEBnHT4JN2QsOr9l7kp6t%2FMrT4%2F1M%2ByKqT1w%2FEqldUPXTcEKhdld7fkPDK&X-Amz-Signature=3917549685f70825122af936b853b3c29a6c0f7823cbb83c6255aa70ec788bce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNN4PFM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCwmEJhOVExaGBL%2FBNIPecUfMP02ZulBUxuQtpgEsB23gIgOVPoPFlurmfIiYVw9oWiHjx0B5vwrUkQFStTu6YR3PMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIn6PPub075JlBW3qCrcA0RE%2FmDHaeX%2FQRv3Kz91KRBdMUOhToLTnjBeQhHh6%2B8axcb46I5UJCEOq7%2FksOEcomSjeuuGZcz8bYQMwlgwf4RjjCppWByJKlgXQoYLGAKK39QAodmefdqLHx4PZzJzxfYAuP1vCxdMXhTM9tlDVJxG4Iocsojt5M5DHy0LmLCGFNaYFvRXVDTPpNXM%2BKLk55z1Gt%2FR1MYYz1A7lLaszIduC%2FTTnmrExGmPzLgeUnjGoJtgQz3YK8tr7FaichFKxlSFIsOaFOyyd%2BHazwpuKkO1bUztSCHbI85c3tg7zWjkjaOtdwb37dSw27xXtCokgt5zQeT5Wzo7%2FdDLha9%2FyerJSbKjvdEtIWgBvBcbyxAY5YMjW5sQ4vUgUeRW%2B1Fo7lCdB6f7o%2BT4RFUxpIVZWb%2BlQbkh9gPfkGNe%2FZyy3w0mTUBSwiEKNI6ewF%2BtMBajAyft35NJkgk5OdNm1lsTnQoD%2B45OMC52vZ%2BQx%2FzNAoLDDKtdXIBZHjhnIQYpzOk6T3cogiQZMt%2Fb0Y8cLqqzMwaKlePu62ET2in%2FlEOZALBDTi%2FaUTEk68MKX14LP7QHDdJIJAmm3l2t1hiu3ycyn8h9%2FXpvzfADWgjS8JeBSO7O4vN6NVtofiWYTIL%2FMMHX5L4GOqUBwBvbUSUSW63NXCkMGUJqDi%2FZVoGdIAq63VSDBXEto5ajE9ZvSKluQbHyZG%2BBZkJ1SEIF08ROHnjY88%2BhiSsa8U9YGeIDf0%2FWa%2FdEhSp9bUe6%2BRpFxEoxshw9lc9L%2FyNuKfKj9r2b4zL5dorn2qiF%2BGSzdg%2BExiMIkHAEBnHT4JN2QsOr9l7kp6t%2FMrT4%2F1M%2ByKqT1w%2FEqldUPXTcEKhdld7fkPDK&X-Amz-Signature=3ff156622c6b2c0500e347a2bf6e110d484af695e23d718cadc59fffa82c1557&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNN4PFM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCwmEJhOVExaGBL%2FBNIPecUfMP02ZulBUxuQtpgEsB23gIgOVPoPFlurmfIiYVw9oWiHjx0B5vwrUkQFStTu6YR3PMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIn6PPub075JlBW3qCrcA0RE%2FmDHaeX%2FQRv3Kz91KRBdMUOhToLTnjBeQhHh6%2B8axcb46I5UJCEOq7%2FksOEcomSjeuuGZcz8bYQMwlgwf4RjjCppWByJKlgXQoYLGAKK39QAodmefdqLHx4PZzJzxfYAuP1vCxdMXhTM9tlDVJxG4Iocsojt5M5DHy0LmLCGFNaYFvRXVDTPpNXM%2BKLk55z1Gt%2FR1MYYz1A7lLaszIduC%2FTTnmrExGmPzLgeUnjGoJtgQz3YK8tr7FaichFKxlSFIsOaFOyyd%2BHazwpuKkO1bUztSCHbI85c3tg7zWjkjaOtdwb37dSw27xXtCokgt5zQeT5Wzo7%2FdDLha9%2FyerJSbKjvdEtIWgBvBcbyxAY5YMjW5sQ4vUgUeRW%2B1Fo7lCdB6f7o%2BT4RFUxpIVZWb%2BlQbkh9gPfkGNe%2FZyy3w0mTUBSwiEKNI6ewF%2BtMBajAyft35NJkgk5OdNm1lsTnQoD%2B45OMC52vZ%2BQx%2FzNAoLDDKtdXIBZHjhnIQYpzOk6T3cogiQZMt%2Fb0Y8cLqqzMwaKlePu62ET2in%2FlEOZALBDTi%2FaUTEk68MKX14LP7QHDdJIJAmm3l2t1hiu3ycyn8h9%2FXpvzfADWgjS8JeBSO7O4vN6NVtofiWYTIL%2FMMHX5L4GOqUBwBvbUSUSW63NXCkMGUJqDi%2FZVoGdIAq63VSDBXEto5ajE9ZvSKluQbHyZG%2BBZkJ1SEIF08ROHnjY88%2BhiSsa8U9YGeIDf0%2FWa%2FdEhSp9bUe6%2BRpFxEoxshw9lc9L%2FyNuKfKj9r2b4zL5dorn2qiF%2BGSzdg%2BExiMIkHAEBnHT4JN2QsOr9l7kp6t%2FMrT4%2F1M%2ByKqT1w%2FEqldUPXTcEKhdld7fkPDK&X-Amz-Signature=466bc7940a3924080836c2a4338e74214012c5310d17fe82be825689f50eed0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNN4PFM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCwmEJhOVExaGBL%2FBNIPecUfMP02ZulBUxuQtpgEsB23gIgOVPoPFlurmfIiYVw9oWiHjx0B5vwrUkQFStTu6YR3PMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIn6PPub075JlBW3qCrcA0RE%2FmDHaeX%2FQRv3Kz91KRBdMUOhToLTnjBeQhHh6%2B8axcb46I5UJCEOq7%2FksOEcomSjeuuGZcz8bYQMwlgwf4RjjCppWByJKlgXQoYLGAKK39QAodmefdqLHx4PZzJzxfYAuP1vCxdMXhTM9tlDVJxG4Iocsojt5M5DHy0LmLCGFNaYFvRXVDTPpNXM%2BKLk55z1Gt%2FR1MYYz1A7lLaszIduC%2FTTnmrExGmPzLgeUnjGoJtgQz3YK8tr7FaichFKxlSFIsOaFOyyd%2BHazwpuKkO1bUztSCHbI85c3tg7zWjkjaOtdwb37dSw27xXtCokgt5zQeT5Wzo7%2FdDLha9%2FyerJSbKjvdEtIWgBvBcbyxAY5YMjW5sQ4vUgUeRW%2B1Fo7lCdB6f7o%2BT4RFUxpIVZWb%2BlQbkh9gPfkGNe%2FZyy3w0mTUBSwiEKNI6ewF%2BtMBajAyft35NJkgk5OdNm1lsTnQoD%2B45OMC52vZ%2BQx%2FzNAoLDDKtdXIBZHjhnIQYpzOk6T3cogiQZMt%2Fb0Y8cLqqzMwaKlePu62ET2in%2FlEOZALBDTi%2FaUTEk68MKX14LP7QHDdJIJAmm3l2t1hiu3ycyn8h9%2FXpvzfADWgjS8JeBSO7O4vN6NVtofiWYTIL%2FMMHX5L4GOqUBwBvbUSUSW63NXCkMGUJqDi%2FZVoGdIAq63VSDBXEto5ajE9ZvSKluQbHyZG%2BBZkJ1SEIF08ROHnjY88%2BhiSsa8U9YGeIDf0%2FWa%2FdEhSp9bUe6%2BRpFxEoxshw9lc9L%2FyNuKfKj9r2b4zL5dorn2qiF%2BGSzdg%2BExiMIkHAEBnHT4JN2QsOr9l7kp6t%2FMrT4%2F1M%2ByKqT1w%2FEqldUPXTcEKhdld7fkPDK&X-Amz-Signature=56c72123189e8538d4d9b2f8676da1707b2d03e9b414ba0a733e18c9648d798e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNN4PFM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCwmEJhOVExaGBL%2FBNIPecUfMP02ZulBUxuQtpgEsB23gIgOVPoPFlurmfIiYVw9oWiHjx0B5vwrUkQFStTu6YR3PMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIn6PPub075JlBW3qCrcA0RE%2FmDHaeX%2FQRv3Kz91KRBdMUOhToLTnjBeQhHh6%2B8axcb46I5UJCEOq7%2FksOEcomSjeuuGZcz8bYQMwlgwf4RjjCppWByJKlgXQoYLGAKK39QAodmefdqLHx4PZzJzxfYAuP1vCxdMXhTM9tlDVJxG4Iocsojt5M5DHy0LmLCGFNaYFvRXVDTPpNXM%2BKLk55z1Gt%2FR1MYYz1A7lLaszIduC%2FTTnmrExGmPzLgeUnjGoJtgQz3YK8tr7FaichFKxlSFIsOaFOyyd%2BHazwpuKkO1bUztSCHbI85c3tg7zWjkjaOtdwb37dSw27xXtCokgt5zQeT5Wzo7%2FdDLha9%2FyerJSbKjvdEtIWgBvBcbyxAY5YMjW5sQ4vUgUeRW%2B1Fo7lCdB6f7o%2BT4RFUxpIVZWb%2BlQbkh9gPfkGNe%2FZyy3w0mTUBSwiEKNI6ewF%2BtMBajAyft35NJkgk5OdNm1lsTnQoD%2B45OMC52vZ%2BQx%2FzNAoLDDKtdXIBZHjhnIQYpzOk6T3cogiQZMt%2Fb0Y8cLqqzMwaKlePu62ET2in%2FlEOZALBDTi%2FaUTEk68MKX14LP7QHDdJIJAmm3l2t1hiu3ycyn8h9%2FXpvzfADWgjS8JeBSO7O4vN6NVtofiWYTIL%2FMMHX5L4GOqUBwBvbUSUSW63NXCkMGUJqDi%2FZVoGdIAq63VSDBXEto5ajE9ZvSKluQbHyZG%2BBZkJ1SEIF08ROHnjY88%2BhiSsa8U9YGeIDf0%2FWa%2FdEhSp9bUe6%2BRpFxEoxshw9lc9L%2FyNuKfKj9r2b4zL5dorn2qiF%2BGSzdg%2BExiMIkHAEBnHT4JN2QsOr9l7kp6t%2FMrT4%2F1M%2ByKqT1w%2FEqldUPXTcEKhdld7fkPDK&X-Amz-Signature=3214d4a9fa1b6e14e90a2f4d39cdc25fbc89a606f80d6de57d1b9298aafd68b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
