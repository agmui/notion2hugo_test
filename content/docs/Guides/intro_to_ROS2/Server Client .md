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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAMGGPS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEXnSy%2BZXL6P7YlEhsTUnGgDHz43tLmwNOBWf%2FeoctBKAiBsckA4KBdIe3YxmDUsFw5QvxvGYl26pLTuggrWsx6kkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B26AAiP7Fsu7Gf01KtwDk9b4knhgBD7p9t3WT9xEhIrZ6cT280ugg8rNxyukWGtPiQTh%2FBHNnrxar8DpqhX5jq84l64Kg%2FY3jffpy7vKo3f0USZ79zcQy1tun1O%2BBJRmyhz68AfL%2B0faQ0W8trt19CW1ABgz%2BjfshQtxexx4mzqlJ0NqVE59EmcCfNfUhOP8iSPUgihslh%2Bm%2FFVKCR%2FlRJV%2BD%2F1IFRecNghUn7AEaV%2BnYO7ccjUhY%2F39h4hPtC7XIxtVibWnR%2FBXQhAPbdTOhm3P3HhnaOpmPRrE6Divfzg5SH8XMeFVOUfpTAQzqiiwu2kruCUYYKOXKGcUqUh0jNHHaZ9EICqRfdpF4Vz2KkgGqyQhzcrdAWmyAUPrC36Isd%2Fl5ZvqPRKQoEi7hX3ldkgPZn0MiTw4TolxsbTlrsoRLHCEu58kjVXOfvy5TWLdGauH83TQoUfBJHx%2FkG73hov4Re1BTMQGpds1D8%2B4tkrw%2B6jc8ajzZn6NY4O9jeLPzIDSRlvi25ULzofkVmD1ux6htB%2FE%2Fi3PNr2jYG9FCKtvMoMQUXEEGg%2B%2FQj0EmF5vRo6RY55eYRiqsRVI2roVWW0UXp6ql%2FTvEpgL71sbyXUxSWwizjzle0%2B8CsBmixqr7R7Y%2Fn1%2BHP1jH%2FMwoIXnvwY6pgHITVZ92OXarZRbtmdlQlX1pkhIWcUJdkEf7Gt6ByDIHGzONS6JXZGW0jKQYIdgJtLlz058EPdh%2Fsq1kKnoIflfUmCCV2tPKSCv6fdG2R62cMjjA6I%2BSnFWSk4FvkDpeNO%2FkpZ7jI5gqfkRDdzcGBZDXOJY3yTgAbk%2FtLBlWbvGvSdCwj%2FzhijQO98B7Kvti9ouRCWEcvlsR99mpXbbrNXObZgXL2C%2B&X-Amz-Signature=e2e4baec44473c4dac7f156a1c3652d4b46304fd91fd179cb212c279602d622a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAMGGPS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEXnSy%2BZXL6P7YlEhsTUnGgDHz43tLmwNOBWf%2FeoctBKAiBsckA4KBdIe3YxmDUsFw5QvxvGYl26pLTuggrWsx6kkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B26AAiP7Fsu7Gf01KtwDk9b4knhgBD7p9t3WT9xEhIrZ6cT280ugg8rNxyukWGtPiQTh%2FBHNnrxar8DpqhX5jq84l64Kg%2FY3jffpy7vKo3f0USZ79zcQy1tun1O%2BBJRmyhz68AfL%2B0faQ0W8trt19CW1ABgz%2BjfshQtxexx4mzqlJ0NqVE59EmcCfNfUhOP8iSPUgihslh%2Bm%2FFVKCR%2FlRJV%2BD%2F1IFRecNghUn7AEaV%2BnYO7ccjUhY%2F39h4hPtC7XIxtVibWnR%2FBXQhAPbdTOhm3P3HhnaOpmPRrE6Divfzg5SH8XMeFVOUfpTAQzqiiwu2kruCUYYKOXKGcUqUh0jNHHaZ9EICqRfdpF4Vz2KkgGqyQhzcrdAWmyAUPrC36Isd%2Fl5ZvqPRKQoEi7hX3ldkgPZn0MiTw4TolxsbTlrsoRLHCEu58kjVXOfvy5TWLdGauH83TQoUfBJHx%2FkG73hov4Re1BTMQGpds1D8%2B4tkrw%2B6jc8ajzZn6NY4O9jeLPzIDSRlvi25ULzofkVmD1ux6htB%2FE%2Fi3PNr2jYG9FCKtvMoMQUXEEGg%2B%2FQj0EmF5vRo6RY55eYRiqsRVI2roVWW0UXp6ql%2FTvEpgL71sbyXUxSWwizjzle0%2B8CsBmixqr7R7Y%2Fn1%2BHP1jH%2FMwoIXnvwY6pgHITVZ92OXarZRbtmdlQlX1pkhIWcUJdkEf7Gt6ByDIHGzONS6JXZGW0jKQYIdgJtLlz058EPdh%2Fsq1kKnoIflfUmCCV2tPKSCv6fdG2R62cMjjA6I%2BSnFWSk4FvkDpeNO%2FkpZ7jI5gqfkRDdzcGBZDXOJY3yTgAbk%2FtLBlWbvGvSdCwj%2FzhijQO98B7Kvti9ouRCWEcvlsR99mpXbbrNXObZgXL2C%2B&X-Amz-Signature=7182d8985246986238dbe8775c22dfb61fab452419aebba7fb00cd6d0e306b56&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAMGGPS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEXnSy%2BZXL6P7YlEhsTUnGgDHz43tLmwNOBWf%2FeoctBKAiBsckA4KBdIe3YxmDUsFw5QvxvGYl26pLTuggrWsx6kkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B26AAiP7Fsu7Gf01KtwDk9b4knhgBD7p9t3WT9xEhIrZ6cT280ugg8rNxyukWGtPiQTh%2FBHNnrxar8DpqhX5jq84l64Kg%2FY3jffpy7vKo3f0USZ79zcQy1tun1O%2BBJRmyhz68AfL%2B0faQ0W8trt19CW1ABgz%2BjfshQtxexx4mzqlJ0NqVE59EmcCfNfUhOP8iSPUgihslh%2Bm%2FFVKCR%2FlRJV%2BD%2F1IFRecNghUn7AEaV%2BnYO7ccjUhY%2F39h4hPtC7XIxtVibWnR%2FBXQhAPbdTOhm3P3HhnaOpmPRrE6Divfzg5SH8XMeFVOUfpTAQzqiiwu2kruCUYYKOXKGcUqUh0jNHHaZ9EICqRfdpF4Vz2KkgGqyQhzcrdAWmyAUPrC36Isd%2Fl5ZvqPRKQoEi7hX3ldkgPZn0MiTw4TolxsbTlrsoRLHCEu58kjVXOfvy5TWLdGauH83TQoUfBJHx%2FkG73hov4Re1BTMQGpds1D8%2B4tkrw%2B6jc8ajzZn6NY4O9jeLPzIDSRlvi25ULzofkVmD1ux6htB%2FE%2Fi3PNr2jYG9FCKtvMoMQUXEEGg%2B%2FQj0EmF5vRo6RY55eYRiqsRVI2roVWW0UXp6ql%2FTvEpgL71sbyXUxSWwizjzle0%2B8CsBmixqr7R7Y%2Fn1%2BHP1jH%2FMwoIXnvwY6pgHITVZ92OXarZRbtmdlQlX1pkhIWcUJdkEf7Gt6ByDIHGzONS6JXZGW0jKQYIdgJtLlz058EPdh%2Fsq1kKnoIflfUmCCV2tPKSCv6fdG2R62cMjjA6I%2BSnFWSk4FvkDpeNO%2FkpZ7jI5gqfkRDdzcGBZDXOJY3yTgAbk%2FtLBlWbvGvSdCwj%2FzhijQO98B7Kvti9ouRCWEcvlsR99mpXbbrNXObZgXL2C%2B&X-Amz-Signature=8ff0996195cc15bd3f2a57ce07bdc0510b84dc3d7e6f09f7757a52dc3b77cc92&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAMGGPS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEXnSy%2BZXL6P7YlEhsTUnGgDHz43tLmwNOBWf%2FeoctBKAiBsckA4KBdIe3YxmDUsFw5QvxvGYl26pLTuggrWsx6kkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B26AAiP7Fsu7Gf01KtwDk9b4knhgBD7p9t3WT9xEhIrZ6cT280ugg8rNxyukWGtPiQTh%2FBHNnrxar8DpqhX5jq84l64Kg%2FY3jffpy7vKo3f0USZ79zcQy1tun1O%2BBJRmyhz68AfL%2B0faQ0W8trt19CW1ABgz%2BjfshQtxexx4mzqlJ0NqVE59EmcCfNfUhOP8iSPUgihslh%2Bm%2FFVKCR%2FlRJV%2BD%2F1IFRecNghUn7AEaV%2BnYO7ccjUhY%2F39h4hPtC7XIxtVibWnR%2FBXQhAPbdTOhm3P3HhnaOpmPRrE6Divfzg5SH8XMeFVOUfpTAQzqiiwu2kruCUYYKOXKGcUqUh0jNHHaZ9EICqRfdpF4Vz2KkgGqyQhzcrdAWmyAUPrC36Isd%2Fl5ZvqPRKQoEi7hX3ldkgPZn0MiTw4TolxsbTlrsoRLHCEu58kjVXOfvy5TWLdGauH83TQoUfBJHx%2FkG73hov4Re1BTMQGpds1D8%2B4tkrw%2B6jc8ajzZn6NY4O9jeLPzIDSRlvi25ULzofkVmD1ux6htB%2FE%2Fi3PNr2jYG9FCKtvMoMQUXEEGg%2B%2FQj0EmF5vRo6RY55eYRiqsRVI2roVWW0UXp6ql%2FTvEpgL71sbyXUxSWwizjzle0%2B8CsBmixqr7R7Y%2Fn1%2BHP1jH%2FMwoIXnvwY6pgHITVZ92OXarZRbtmdlQlX1pkhIWcUJdkEf7Gt6ByDIHGzONS6JXZGW0jKQYIdgJtLlz058EPdh%2Fsq1kKnoIflfUmCCV2tPKSCv6fdG2R62cMjjA6I%2BSnFWSk4FvkDpeNO%2FkpZ7jI5gqfkRDdzcGBZDXOJY3yTgAbk%2FtLBlWbvGvSdCwj%2FzhijQO98B7Kvti9ouRCWEcvlsR99mpXbbrNXObZgXL2C%2B&X-Amz-Signature=43e4b1e5397c7ebc836efdeede636f8d53347721493ebe90410547c7882c6245&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAMGGPS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEXnSy%2BZXL6P7YlEhsTUnGgDHz43tLmwNOBWf%2FeoctBKAiBsckA4KBdIe3YxmDUsFw5QvxvGYl26pLTuggrWsx6kkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B26AAiP7Fsu7Gf01KtwDk9b4knhgBD7p9t3WT9xEhIrZ6cT280ugg8rNxyukWGtPiQTh%2FBHNnrxar8DpqhX5jq84l64Kg%2FY3jffpy7vKo3f0USZ79zcQy1tun1O%2BBJRmyhz68AfL%2B0faQ0W8trt19CW1ABgz%2BjfshQtxexx4mzqlJ0NqVE59EmcCfNfUhOP8iSPUgihslh%2Bm%2FFVKCR%2FlRJV%2BD%2F1IFRecNghUn7AEaV%2BnYO7ccjUhY%2F39h4hPtC7XIxtVibWnR%2FBXQhAPbdTOhm3P3HhnaOpmPRrE6Divfzg5SH8XMeFVOUfpTAQzqiiwu2kruCUYYKOXKGcUqUh0jNHHaZ9EICqRfdpF4Vz2KkgGqyQhzcrdAWmyAUPrC36Isd%2Fl5ZvqPRKQoEi7hX3ldkgPZn0MiTw4TolxsbTlrsoRLHCEu58kjVXOfvy5TWLdGauH83TQoUfBJHx%2FkG73hov4Re1BTMQGpds1D8%2B4tkrw%2B6jc8ajzZn6NY4O9jeLPzIDSRlvi25ULzofkVmD1ux6htB%2FE%2Fi3PNr2jYG9FCKtvMoMQUXEEGg%2B%2FQj0EmF5vRo6RY55eYRiqsRVI2roVWW0UXp6ql%2FTvEpgL71sbyXUxSWwizjzle0%2B8CsBmixqr7R7Y%2Fn1%2BHP1jH%2FMwoIXnvwY6pgHITVZ92OXarZRbtmdlQlX1pkhIWcUJdkEf7Gt6ByDIHGzONS6JXZGW0jKQYIdgJtLlz058EPdh%2Fsq1kKnoIflfUmCCV2tPKSCv6fdG2R62cMjjA6I%2BSnFWSk4FvkDpeNO%2FkpZ7jI5gqfkRDdzcGBZDXOJY3yTgAbk%2FtLBlWbvGvSdCwj%2FzhijQO98B7Kvti9ouRCWEcvlsR99mpXbbrNXObZgXL2C%2B&X-Amz-Signature=5ba340f52283c805f9161fcb6e8681512bc8bc504853da1a3df2af964efb8ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
