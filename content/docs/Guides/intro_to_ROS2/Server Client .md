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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQAAJMM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAGaez2Gj532LMuUzIiUWx8p%2Btcna%2F9a4e%2F5HUmNPwbAiEAl5KjPskbvLAomxr%2FB9rHLzeDqWnjE8dihcfDcdFsTWAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmrY6rdTNYDOSldGCrcAzNJHkziYXJyH%2F2ZwXon9AN%2B3VgRCWONOCq8oaIm%2FRScQx%2BnN9C6Ymfxy2IyBsRarQ9IGdtMIewE2JNdIh9zEHyCXx%2F8ardzvaPCnn4aN%2FFaMW4g7j3zLW%2Fe00HoISAexEUia1wQgM6UXzBgRuRBJrfnFXagChHxawR4FECjK7rOuBYDlDuja0ejDJs3yO%2FAUwgGSo0bGxpXfHOvXoO%2FSeCjkeakvsK5FnMtsTYkF8lZd4pHzhI8fwXZ4jjgCNgdQvt%2BZk62gkF9gehFZnAHRFFR3ZQ338GNtZWdvlAeBUwXk4jEnbb3iJ%2FfnLV1O06CtmhwryWapBvQNYR0%2Bfz2P0ydbCYh4%2FAT9caaLvsaOOrEhDSYA1QPLkHAZms%2F7TsxuCdcCZW7DBlGc%2BpYhbqM857GijP%2BMpiBkxogIrJcGgUEOzEa4icqstAPLzGuaNsHyjeU6CZHP1kGsA%2FobEjhMRMn0b%2FF2lCiJWTMq5lD3%2BETpXF%2F%2BwYH%2BjcwCoCLQbiOBwghXLVawmgjnYVF%2FqtLIa5CELJlWs9VSzZ0fb8MMLuF8ZMxzN4BMw9ZMxre4jx54CLbdsfjmuqe8bPAzhYOtCINrP%2F834cIq7NTdxffiu1X5DIcBWU2D95PFt6zMMbBgL0GOqUBBseYpK%2FC2D1chw6GON0fv%2BxX4fsESK1DUQBxrvWRufddzoq%2BGDQSvzU1E163vp8q5PpdgQDR7e3nA95CtRS8jvbcWbFOJqiE98c1FErxMTGY2k1ZHlhJ2HXskT1bHyjVHi9M3nNk5iANaNN7jqpNJUA%2BWhoPgtHM2Z%2Fz1wnYE58rio717ok%2BGaDWfbOcNcfFea3XjoK2qOU1FoEPnOtZCL6ynHpl&X-Amz-Signature=19af2785b99085cf2d7ca3a84380953b0c1ce303129da2469dfaed85ac1bfaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQAAJMM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAGaez2Gj532LMuUzIiUWx8p%2Btcna%2F9a4e%2F5HUmNPwbAiEAl5KjPskbvLAomxr%2FB9rHLzeDqWnjE8dihcfDcdFsTWAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmrY6rdTNYDOSldGCrcAzNJHkziYXJyH%2F2ZwXon9AN%2B3VgRCWONOCq8oaIm%2FRScQx%2BnN9C6Ymfxy2IyBsRarQ9IGdtMIewE2JNdIh9zEHyCXx%2F8ardzvaPCnn4aN%2FFaMW4g7j3zLW%2Fe00HoISAexEUia1wQgM6UXzBgRuRBJrfnFXagChHxawR4FECjK7rOuBYDlDuja0ejDJs3yO%2FAUwgGSo0bGxpXfHOvXoO%2FSeCjkeakvsK5FnMtsTYkF8lZd4pHzhI8fwXZ4jjgCNgdQvt%2BZk62gkF9gehFZnAHRFFR3ZQ338GNtZWdvlAeBUwXk4jEnbb3iJ%2FfnLV1O06CtmhwryWapBvQNYR0%2Bfz2P0ydbCYh4%2FAT9caaLvsaOOrEhDSYA1QPLkHAZms%2F7TsxuCdcCZW7DBlGc%2BpYhbqM857GijP%2BMpiBkxogIrJcGgUEOzEa4icqstAPLzGuaNsHyjeU6CZHP1kGsA%2FobEjhMRMn0b%2FF2lCiJWTMq5lD3%2BETpXF%2F%2BwYH%2BjcwCoCLQbiOBwghXLVawmgjnYVF%2FqtLIa5CELJlWs9VSzZ0fb8MMLuF8ZMxzN4BMw9ZMxre4jx54CLbdsfjmuqe8bPAzhYOtCINrP%2F834cIq7NTdxffiu1X5DIcBWU2D95PFt6zMMbBgL0GOqUBBseYpK%2FC2D1chw6GON0fv%2BxX4fsESK1DUQBxrvWRufddzoq%2BGDQSvzU1E163vp8q5PpdgQDR7e3nA95CtRS8jvbcWbFOJqiE98c1FErxMTGY2k1ZHlhJ2HXskT1bHyjVHi9M3nNk5iANaNN7jqpNJUA%2BWhoPgtHM2Z%2Fz1wnYE58rio717ok%2BGaDWfbOcNcfFea3XjoK2qOU1FoEPnOtZCL6ynHpl&X-Amz-Signature=bd7dc77a7bf3e17afd4ef56f458a6cf356b4abb7060d23cf29a7f9570a867b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQAAJMM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAGaez2Gj532LMuUzIiUWx8p%2Btcna%2F9a4e%2F5HUmNPwbAiEAl5KjPskbvLAomxr%2FB9rHLzeDqWnjE8dihcfDcdFsTWAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmrY6rdTNYDOSldGCrcAzNJHkziYXJyH%2F2ZwXon9AN%2B3VgRCWONOCq8oaIm%2FRScQx%2BnN9C6Ymfxy2IyBsRarQ9IGdtMIewE2JNdIh9zEHyCXx%2F8ardzvaPCnn4aN%2FFaMW4g7j3zLW%2Fe00HoISAexEUia1wQgM6UXzBgRuRBJrfnFXagChHxawR4FECjK7rOuBYDlDuja0ejDJs3yO%2FAUwgGSo0bGxpXfHOvXoO%2FSeCjkeakvsK5FnMtsTYkF8lZd4pHzhI8fwXZ4jjgCNgdQvt%2BZk62gkF9gehFZnAHRFFR3ZQ338GNtZWdvlAeBUwXk4jEnbb3iJ%2FfnLV1O06CtmhwryWapBvQNYR0%2Bfz2P0ydbCYh4%2FAT9caaLvsaOOrEhDSYA1QPLkHAZms%2F7TsxuCdcCZW7DBlGc%2BpYhbqM857GijP%2BMpiBkxogIrJcGgUEOzEa4icqstAPLzGuaNsHyjeU6CZHP1kGsA%2FobEjhMRMn0b%2FF2lCiJWTMq5lD3%2BETpXF%2F%2BwYH%2BjcwCoCLQbiOBwghXLVawmgjnYVF%2FqtLIa5CELJlWs9VSzZ0fb8MMLuF8ZMxzN4BMw9ZMxre4jx54CLbdsfjmuqe8bPAzhYOtCINrP%2F834cIq7NTdxffiu1X5DIcBWU2D95PFt6zMMbBgL0GOqUBBseYpK%2FC2D1chw6GON0fv%2BxX4fsESK1DUQBxrvWRufddzoq%2BGDQSvzU1E163vp8q5PpdgQDR7e3nA95CtRS8jvbcWbFOJqiE98c1FErxMTGY2k1ZHlhJ2HXskT1bHyjVHi9M3nNk5iANaNN7jqpNJUA%2BWhoPgtHM2Z%2Fz1wnYE58rio717ok%2BGaDWfbOcNcfFea3XjoK2qOU1FoEPnOtZCL6ynHpl&X-Amz-Signature=4893e717c59ab1272211f4fb996f521487a3c7f36b845c500c12ed175755e4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQAAJMM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAGaez2Gj532LMuUzIiUWx8p%2Btcna%2F9a4e%2F5HUmNPwbAiEAl5KjPskbvLAomxr%2FB9rHLzeDqWnjE8dihcfDcdFsTWAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmrY6rdTNYDOSldGCrcAzNJHkziYXJyH%2F2ZwXon9AN%2B3VgRCWONOCq8oaIm%2FRScQx%2BnN9C6Ymfxy2IyBsRarQ9IGdtMIewE2JNdIh9zEHyCXx%2F8ardzvaPCnn4aN%2FFaMW4g7j3zLW%2Fe00HoISAexEUia1wQgM6UXzBgRuRBJrfnFXagChHxawR4FECjK7rOuBYDlDuja0ejDJs3yO%2FAUwgGSo0bGxpXfHOvXoO%2FSeCjkeakvsK5FnMtsTYkF8lZd4pHzhI8fwXZ4jjgCNgdQvt%2BZk62gkF9gehFZnAHRFFR3ZQ338GNtZWdvlAeBUwXk4jEnbb3iJ%2FfnLV1O06CtmhwryWapBvQNYR0%2Bfz2P0ydbCYh4%2FAT9caaLvsaOOrEhDSYA1QPLkHAZms%2F7TsxuCdcCZW7DBlGc%2BpYhbqM857GijP%2BMpiBkxogIrJcGgUEOzEa4icqstAPLzGuaNsHyjeU6CZHP1kGsA%2FobEjhMRMn0b%2FF2lCiJWTMq5lD3%2BETpXF%2F%2BwYH%2BjcwCoCLQbiOBwghXLVawmgjnYVF%2FqtLIa5CELJlWs9VSzZ0fb8MMLuF8ZMxzN4BMw9ZMxre4jx54CLbdsfjmuqe8bPAzhYOtCINrP%2F834cIq7NTdxffiu1X5DIcBWU2D95PFt6zMMbBgL0GOqUBBseYpK%2FC2D1chw6GON0fv%2BxX4fsESK1DUQBxrvWRufddzoq%2BGDQSvzU1E163vp8q5PpdgQDR7e3nA95CtRS8jvbcWbFOJqiE98c1FErxMTGY2k1ZHlhJ2HXskT1bHyjVHi9M3nNk5iANaNN7jqpNJUA%2BWhoPgtHM2Z%2Fz1wnYE58rio717ok%2BGaDWfbOcNcfFea3XjoK2qOU1FoEPnOtZCL6ynHpl&X-Amz-Signature=5d007ac244db2d07892491ecc5003ff101400dd9754d571bde9afe5f25bd1a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQAAJMM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAGaez2Gj532LMuUzIiUWx8p%2Btcna%2F9a4e%2F5HUmNPwbAiEAl5KjPskbvLAomxr%2FB9rHLzeDqWnjE8dihcfDcdFsTWAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmrY6rdTNYDOSldGCrcAzNJHkziYXJyH%2F2ZwXon9AN%2B3VgRCWONOCq8oaIm%2FRScQx%2BnN9C6Ymfxy2IyBsRarQ9IGdtMIewE2JNdIh9zEHyCXx%2F8ardzvaPCnn4aN%2FFaMW4g7j3zLW%2Fe00HoISAexEUia1wQgM6UXzBgRuRBJrfnFXagChHxawR4FECjK7rOuBYDlDuja0ejDJs3yO%2FAUwgGSo0bGxpXfHOvXoO%2FSeCjkeakvsK5FnMtsTYkF8lZd4pHzhI8fwXZ4jjgCNgdQvt%2BZk62gkF9gehFZnAHRFFR3ZQ338GNtZWdvlAeBUwXk4jEnbb3iJ%2FfnLV1O06CtmhwryWapBvQNYR0%2Bfz2P0ydbCYh4%2FAT9caaLvsaOOrEhDSYA1QPLkHAZms%2F7TsxuCdcCZW7DBlGc%2BpYhbqM857GijP%2BMpiBkxogIrJcGgUEOzEa4icqstAPLzGuaNsHyjeU6CZHP1kGsA%2FobEjhMRMn0b%2FF2lCiJWTMq5lD3%2BETpXF%2F%2BwYH%2BjcwCoCLQbiOBwghXLVawmgjnYVF%2FqtLIa5CELJlWs9VSzZ0fb8MMLuF8ZMxzN4BMw9ZMxre4jx54CLbdsfjmuqe8bPAzhYOtCINrP%2F834cIq7NTdxffiu1X5DIcBWU2D95PFt6zMMbBgL0GOqUBBseYpK%2FC2D1chw6GON0fv%2BxX4fsESK1DUQBxrvWRufddzoq%2BGDQSvzU1E163vp8q5PpdgQDR7e3nA95CtRS8jvbcWbFOJqiE98c1FErxMTGY2k1ZHlhJ2HXskT1bHyjVHi9M3nNk5iANaNN7jqpNJUA%2BWhoPgtHM2Z%2Fz1wnYE58rio717ok%2BGaDWfbOcNcfFea3XjoK2qOU1FoEPnOtZCL6ynHpl&X-Amz-Signature=91f7c3d9c108d65d6a42d2ec337536e4020a5ad7ee7597510839d247c197192b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
