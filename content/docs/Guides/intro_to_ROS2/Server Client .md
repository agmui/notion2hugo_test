---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WH4KO3C%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplQ2V4XkiqLo3NFlEr4Es5oNN9da%2B5bRENTSr%2F4KCIAIgERogN31gQxm8LvrXU8sIZLjryVrYjijlBgW%2Bhyiycr4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKZd2UsL6ad9mU3X5ircA2DvACWp3h4L%2FOBDj3%2BKFGmPROu6H0NVgFWd9vvgy6X%2FG2%2Fv0bSqI3h%2FnCbAlByRmDA05G9OTrJB8CVnYAILm6tdV40RPQUOYMU39y6uZzANUaVEPfrSbRwfSB1weEK8mbAsabFMCwOfGoDn6nyaxiBZkQ8uIrBrHMtaJbt3Q7du3KT%2Brxlt6oHCo9B3V2Ji7nacrcOu5KAgdIPN%2BT9%2Fu223YwVR1HduiGOvwamEVIFJhkETG6EVz7ZRV1iAOUjz5PZfVjKxqK0z93ZY%2FG6W4CsiCkklaDgfNWFIAW39Z3%2BPVjHcu4%2FCOrcXZf%2FMJKHX9b6jXhrn7fh6KGMcyRkZtNbNPu%2BJqvlbSvDWQaotadiXRjdXaD1whuhHUasxDNxXf7q1vvCOAXf4Aclr35OMtTaHTSV%2Fn%2FAYoV%2FFNIHvXRyrriYhlgT8fJm94a01hMma7vH2LHZRtn0cRtA%2FcVHVDbXvxKV5BE%2Ft8v6RfQ9H0O6GmM3q0xdIHy5TjxQXpKb7jgoa8oMVZgODHNdFY0rITMwgWRaKYydmhbHTnXRIkpEx4crTXlk%2B4bjcd2NpOgZ8vl1E6mgaglOvusven%2BiH9i3lzhYATHTDVBX%2FfUAB6qn8gPbAa8CcD2aSI%2F2BMKLw5ccGOqUBoBR8IGIJYmd%2FMqU8tPJz%2FVbxcqJFk%2F%2BOVVVw%2BSjiGBIsG5MEwc7GMOdYPdoBhMxXXzYEx5ZBEop%2F1%2FTOoNw0Ga8Dw8PwOYknBc1S5hSbY15wk%2BocIxU72JDR8N8LyRP%2BlzaQld17AoTv1FRO67gYLWTefbssgTNQysmJr286K%2FkfrwVLvK5ZFwdDViaSRXCwQT3COVU5NHWTQBa1Kzonql6ZSZVF&X-Amz-Signature=4fb0a5074751b86be236f5381bee81f39582974210baf03653950cd2aa9effcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WH4KO3C%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplQ2V4XkiqLo3NFlEr4Es5oNN9da%2B5bRENTSr%2F4KCIAIgERogN31gQxm8LvrXU8sIZLjryVrYjijlBgW%2Bhyiycr4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKZd2UsL6ad9mU3X5ircA2DvACWp3h4L%2FOBDj3%2BKFGmPROu6H0NVgFWd9vvgy6X%2FG2%2Fv0bSqI3h%2FnCbAlByRmDA05G9OTrJB8CVnYAILm6tdV40RPQUOYMU39y6uZzANUaVEPfrSbRwfSB1weEK8mbAsabFMCwOfGoDn6nyaxiBZkQ8uIrBrHMtaJbt3Q7du3KT%2Brxlt6oHCo9B3V2Ji7nacrcOu5KAgdIPN%2BT9%2Fu223YwVR1HduiGOvwamEVIFJhkETG6EVz7ZRV1iAOUjz5PZfVjKxqK0z93ZY%2FG6W4CsiCkklaDgfNWFIAW39Z3%2BPVjHcu4%2FCOrcXZf%2FMJKHX9b6jXhrn7fh6KGMcyRkZtNbNPu%2BJqvlbSvDWQaotadiXRjdXaD1whuhHUasxDNxXf7q1vvCOAXf4Aclr35OMtTaHTSV%2Fn%2FAYoV%2FFNIHvXRyrriYhlgT8fJm94a01hMma7vH2LHZRtn0cRtA%2FcVHVDbXvxKV5BE%2Ft8v6RfQ9H0O6GmM3q0xdIHy5TjxQXpKb7jgoa8oMVZgODHNdFY0rITMwgWRaKYydmhbHTnXRIkpEx4crTXlk%2B4bjcd2NpOgZ8vl1E6mgaglOvusven%2BiH9i3lzhYATHTDVBX%2FfUAB6qn8gPbAa8CcD2aSI%2F2BMKLw5ccGOqUBoBR8IGIJYmd%2FMqU8tPJz%2FVbxcqJFk%2F%2BOVVVw%2BSjiGBIsG5MEwc7GMOdYPdoBhMxXXzYEx5ZBEop%2F1%2FTOoNw0Ga8Dw8PwOYknBc1S5hSbY15wk%2BocIxU72JDR8N8LyRP%2BlzaQld17AoTv1FRO67gYLWTefbssgTNQysmJr286K%2FkfrwVLvK5ZFwdDViaSRXCwQT3COVU5NHWTQBa1Kzonql6ZSZVF&X-Amz-Signature=598270fc5968d9dcddc1009b2f8e2fecc841c24f35d20302de36aabb95a2d326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WH4KO3C%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplQ2V4XkiqLo3NFlEr4Es5oNN9da%2B5bRENTSr%2F4KCIAIgERogN31gQxm8LvrXU8sIZLjryVrYjijlBgW%2Bhyiycr4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKZd2UsL6ad9mU3X5ircA2DvACWp3h4L%2FOBDj3%2BKFGmPROu6H0NVgFWd9vvgy6X%2FG2%2Fv0bSqI3h%2FnCbAlByRmDA05G9OTrJB8CVnYAILm6tdV40RPQUOYMU39y6uZzANUaVEPfrSbRwfSB1weEK8mbAsabFMCwOfGoDn6nyaxiBZkQ8uIrBrHMtaJbt3Q7du3KT%2Brxlt6oHCo9B3V2Ji7nacrcOu5KAgdIPN%2BT9%2Fu223YwVR1HduiGOvwamEVIFJhkETG6EVz7ZRV1iAOUjz5PZfVjKxqK0z93ZY%2FG6W4CsiCkklaDgfNWFIAW39Z3%2BPVjHcu4%2FCOrcXZf%2FMJKHX9b6jXhrn7fh6KGMcyRkZtNbNPu%2BJqvlbSvDWQaotadiXRjdXaD1whuhHUasxDNxXf7q1vvCOAXf4Aclr35OMtTaHTSV%2Fn%2FAYoV%2FFNIHvXRyrriYhlgT8fJm94a01hMma7vH2LHZRtn0cRtA%2FcVHVDbXvxKV5BE%2Ft8v6RfQ9H0O6GmM3q0xdIHy5TjxQXpKb7jgoa8oMVZgODHNdFY0rITMwgWRaKYydmhbHTnXRIkpEx4crTXlk%2B4bjcd2NpOgZ8vl1E6mgaglOvusven%2BiH9i3lzhYATHTDVBX%2FfUAB6qn8gPbAa8CcD2aSI%2F2BMKLw5ccGOqUBoBR8IGIJYmd%2FMqU8tPJz%2FVbxcqJFk%2F%2BOVVVw%2BSjiGBIsG5MEwc7GMOdYPdoBhMxXXzYEx5ZBEop%2F1%2FTOoNw0Ga8Dw8PwOYknBc1S5hSbY15wk%2BocIxU72JDR8N8LyRP%2BlzaQld17AoTv1FRO67gYLWTefbssgTNQysmJr286K%2FkfrwVLvK5ZFwdDViaSRXCwQT3COVU5NHWTQBa1Kzonql6ZSZVF&X-Amz-Signature=fa6cd7eed50a79f90f5710267b92d32637dc7f2b76e18046f73e85acb42901ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WH4KO3C%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplQ2V4XkiqLo3NFlEr4Es5oNN9da%2B5bRENTSr%2F4KCIAIgERogN31gQxm8LvrXU8sIZLjryVrYjijlBgW%2Bhyiycr4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKZd2UsL6ad9mU3X5ircA2DvACWp3h4L%2FOBDj3%2BKFGmPROu6H0NVgFWd9vvgy6X%2FG2%2Fv0bSqI3h%2FnCbAlByRmDA05G9OTrJB8CVnYAILm6tdV40RPQUOYMU39y6uZzANUaVEPfrSbRwfSB1weEK8mbAsabFMCwOfGoDn6nyaxiBZkQ8uIrBrHMtaJbt3Q7du3KT%2Brxlt6oHCo9B3V2Ji7nacrcOu5KAgdIPN%2BT9%2Fu223YwVR1HduiGOvwamEVIFJhkETG6EVz7ZRV1iAOUjz5PZfVjKxqK0z93ZY%2FG6W4CsiCkklaDgfNWFIAW39Z3%2BPVjHcu4%2FCOrcXZf%2FMJKHX9b6jXhrn7fh6KGMcyRkZtNbNPu%2BJqvlbSvDWQaotadiXRjdXaD1whuhHUasxDNxXf7q1vvCOAXf4Aclr35OMtTaHTSV%2Fn%2FAYoV%2FFNIHvXRyrriYhlgT8fJm94a01hMma7vH2LHZRtn0cRtA%2FcVHVDbXvxKV5BE%2Ft8v6RfQ9H0O6GmM3q0xdIHy5TjxQXpKb7jgoa8oMVZgODHNdFY0rITMwgWRaKYydmhbHTnXRIkpEx4crTXlk%2B4bjcd2NpOgZ8vl1E6mgaglOvusven%2BiH9i3lzhYATHTDVBX%2FfUAB6qn8gPbAa8CcD2aSI%2F2BMKLw5ccGOqUBoBR8IGIJYmd%2FMqU8tPJz%2FVbxcqJFk%2F%2BOVVVw%2BSjiGBIsG5MEwc7GMOdYPdoBhMxXXzYEx5ZBEop%2F1%2FTOoNw0Ga8Dw8PwOYknBc1S5hSbY15wk%2BocIxU72JDR8N8LyRP%2BlzaQld17AoTv1FRO67gYLWTefbssgTNQysmJr286K%2FkfrwVLvK5ZFwdDViaSRXCwQT3COVU5NHWTQBa1Kzonql6ZSZVF&X-Amz-Signature=0924ae8822c9167bd68b720dd4245d955819d524ccdfca8c4f88925b5f97e791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WH4KO3C%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplQ2V4XkiqLo3NFlEr4Es5oNN9da%2B5bRENTSr%2F4KCIAIgERogN31gQxm8LvrXU8sIZLjryVrYjijlBgW%2Bhyiycr4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKZd2UsL6ad9mU3X5ircA2DvACWp3h4L%2FOBDj3%2BKFGmPROu6H0NVgFWd9vvgy6X%2FG2%2Fv0bSqI3h%2FnCbAlByRmDA05G9OTrJB8CVnYAILm6tdV40RPQUOYMU39y6uZzANUaVEPfrSbRwfSB1weEK8mbAsabFMCwOfGoDn6nyaxiBZkQ8uIrBrHMtaJbt3Q7du3KT%2Brxlt6oHCo9B3V2Ji7nacrcOu5KAgdIPN%2BT9%2Fu223YwVR1HduiGOvwamEVIFJhkETG6EVz7ZRV1iAOUjz5PZfVjKxqK0z93ZY%2FG6W4CsiCkklaDgfNWFIAW39Z3%2BPVjHcu4%2FCOrcXZf%2FMJKHX9b6jXhrn7fh6KGMcyRkZtNbNPu%2BJqvlbSvDWQaotadiXRjdXaD1whuhHUasxDNxXf7q1vvCOAXf4Aclr35OMtTaHTSV%2Fn%2FAYoV%2FFNIHvXRyrriYhlgT8fJm94a01hMma7vH2LHZRtn0cRtA%2FcVHVDbXvxKV5BE%2Ft8v6RfQ9H0O6GmM3q0xdIHy5TjxQXpKb7jgoa8oMVZgODHNdFY0rITMwgWRaKYydmhbHTnXRIkpEx4crTXlk%2B4bjcd2NpOgZ8vl1E6mgaglOvusven%2BiH9i3lzhYATHTDVBX%2FfUAB6qn8gPbAa8CcD2aSI%2F2BMKLw5ccGOqUBoBR8IGIJYmd%2FMqU8tPJz%2FVbxcqJFk%2F%2BOVVVw%2BSjiGBIsG5MEwc7GMOdYPdoBhMxXXzYEx5ZBEop%2F1%2FTOoNw0Ga8Dw8PwOYknBc1S5hSbY15wk%2BocIxU72JDR8N8LyRP%2BlzaQld17AoTv1FRO67gYLWTefbssgTNQysmJr286K%2FkfrwVLvK5ZFwdDViaSRXCwQT3COVU5NHWTQBa1Kzonql6ZSZVF&X-Amz-Signature=b878f4a36455b51db72b2bd9f7fdb4cc029459b96a6590adabd79468e57344c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
