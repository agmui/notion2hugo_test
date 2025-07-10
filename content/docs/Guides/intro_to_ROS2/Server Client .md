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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ5OT6MT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3eR%2BmE5cckWIbV7TzNO2eYhJ%2B7UDbsJ9vNm%2Beh74juAIgDC5pyp8Kgkiqi5PziTVofa40oY2OcPQYA8wvm%2B2OoC4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaei2h3FY%2BA2uvVLircA%2BmgWrVhqi%2BJTx3v28PGYnitbtQQxtQUSpUkC3tp5aFUgf01EjawkoV%2FFaXrRy8jt5t7C3VRXg7bAXNoSg%2FwS555fB39uAwN1MuKs9elZy6juXfjX8E3LlGiS8%2FFDtgsttZbCS%2BpUjjjrDGzLj4Z9bVHSyfvV70LaXwpRAERCG8AsYEY%2BMv3nxhA1lTuU7g0XZO2OqCEJ24qkZzUcpVfMNc%2FQYFJK%2FaskIzfSlP7K5AWCi4PtLGnXA%2FFJ7x4ANKFUN9UCVlDFbHhRtgqfEs1fOeT2elD9YgVg4S19seZKSDtM5dLjKSCVERcgtqdz6Pu1uOGT%2FnCX%2BnPRHZ49js6NSZgUXrvcVdagnbwa5a%2FG%2B%2BtRAIqXO06JAn87yCapp0C91fljTIx%2B3Ne4LUDwTzrh1RVVXWuLottxZO%2B1f3o8NYQzPiACBb%2F7XEI%2BbAtZPW0wqrxl2FTWWMVA8GWcWkV%2B39U0I1UBWoIOg5gFsyY%2B39CT4n4xe8MOE3s1XA1%2B6u9vUJA93VUqAN8AhTwax4PJXZSOjaq5%2BCOSHgyV22565AmHrjsQEq0HQa2oLOTJiRlmkZ5pIKvKyj9fiyvZgHRCApUZ2NBtKDa5ZDf1txtnCrKYaDWQTxfHcv6qTpYMKCjwMMGOqUBGCKdXybpzNMNt7%2BzN16DcJ005QFPpnGOFeEXOH1FrSM56IgCVJ%2FDPOoM1aSxEr45tAsVV6nXKbMZkcTiQCy7yzwHdU1dw%2BkvcnUJ4ePkPRnFXnMNvNSwIOl9c3GD%2BUZxAn8YNfNNkyfZNlpz5QBBk8j8eiq2eIR591WlJJgcrdnoi19umflL6lVIN%2BQBdlJVYwSoMFU%2BIqCfRAuNH4WAB%2FZPjwak&X-Amz-Signature=29ffa23deae0b804ce81acc8a937add7935e1681606f02c6d112c8381fb39d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ5OT6MT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3eR%2BmE5cckWIbV7TzNO2eYhJ%2B7UDbsJ9vNm%2Beh74juAIgDC5pyp8Kgkiqi5PziTVofa40oY2OcPQYA8wvm%2B2OoC4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaei2h3FY%2BA2uvVLircA%2BmgWrVhqi%2BJTx3v28PGYnitbtQQxtQUSpUkC3tp5aFUgf01EjawkoV%2FFaXrRy8jt5t7C3VRXg7bAXNoSg%2FwS555fB39uAwN1MuKs9elZy6juXfjX8E3LlGiS8%2FFDtgsttZbCS%2BpUjjjrDGzLj4Z9bVHSyfvV70LaXwpRAERCG8AsYEY%2BMv3nxhA1lTuU7g0XZO2OqCEJ24qkZzUcpVfMNc%2FQYFJK%2FaskIzfSlP7K5AWCi4PtLGnXA%2FFJ7x4ANKFUN9UCVlDFbHhRtgqfEs1fOeT2elD9YgVg4S19seZKSDtM5dLjKSCVERcgtqdz6Pu1uOGT%2FnCX%2BnPRHZ49js6NSZgUXrvcVdagnbwa5a%2FG%2B%2BtRAIqXO06JAn87yCapp0C91fljTIx%2B3Ne4LUDwTzrh1RVVXWuLottxZO%2B1f3o8NYQzPiACBb%2F7XEI%2BbAtZPW0wqrxl2FTWWMVA8GWcWkV%2B39U0I1UBWoIOg5gFsyY%2B39CT4n4xe8MOE3s1XA1%2B6u9vUJA93VUqAN8AhTwax4PJXZSOjaq5%2BCOSHgyV22565AmHrjsQEq0HQa2oLOTJiRlmkZ5pIKvKyj9fiyvZgHRCApUZ2NBtKDa5ZDf1txtnCrKYaDWQTxfHcv6qTpYMKCjwMMGOqUBGCKdXybpzNMNt7%2BzN16DcJ005QFPpnGOFeEXOH1FrSM56IgCVJ%2FDPOoM1aSxEr45tAsVV6nXKbMZkcTiQCy7yzwHdU1dw%2BkvcnUJ4ePkPRnFXnMNvNSwIOl9c3GD%2BUZxAn8YNfNNkyfZNlpz5QBBk8j8eiq2eIR591WlJJgcrdnoi19umflL6lVIN%2BQBdlJVYwSoMFU%2BIqCfRAuNH4WAB%2FZPjwak&X-Amz-Signature=40ef8484c764fc7c1002a693c5368ff6065bb0dcc3e47a8d4779a9f147f9076b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ5OT6MT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3eR%2BmE5cckWIbV7TzNO2eYhJ%2B7UDbsJ9vNm%2Beh74juAIgDC5pyp8Kgkiqi5PziTVofa40oY2OcPQYA8wvm%2B2OoC4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaei2h3FY%2BA2uvVLircA%2BmgWrVhqi%2BJTx3v28PGYnitbtQQxtQUSpUkC3tp5aFUgf01EjawkoV%2FFaXrRy8jt5t7C3VRXg7bAXNoSg%2FwS555fB39uAwN1MuKs9elZy6juXfjX8E3LlGiS8%2FFDtgsttZbCS%2BpUjjjrDGzLj4Z9bVHSyfvV70LaXwpRAERCG8AsYEY%2BMv3nxhA1lTuU7g0XZO2OqCEJ24qkZzUcpVfMNc%2FQYFJK%2FaskIzfSlP7K5AWCi4PtLGnXA%2FFJ7x4ANKFUN9UCVlDFbHhRtgqfEs1fOeT2elD9YgVg4S19seZKSDtM5dLjKSCVERcgtqdz6Pu1uOGT%2FnCX%2BnPRHZ49js6NSZgUXrvcVdagnbwa5a%2FG%2B%2BtRAIqXO06JAn87yCapp0C91fljTIx%2B3Ne4LUDwTzrh1RVVXWuLottxZO%2B1f3o8NYQzPiACBb%2F7XEI%2BbAtZPW0wqrxl2FTWWMVA8GWcWkV%2B39U0I1UBWoIOg5gFsyY%2B39CT4n4xe8MOE3s1XA1%2B6u9vUJA93VUqAN8AhTwax4PJXZSOjaq5%2BCOSHgyV22565AmHrjsQEq0HQa2oLOTJiRlmkZ5pIKvKyj9fiyvZgHRCApUZ2NBtKDa5ZDf1txtnCrKYaDWQTxfHcv6qTpYMKCjwMMGOqUBGCKdXybpzNMNt7%2BzN16DcJ005QFPpnGOFeEXOH1FrSM56IgCVJ%2FDPOoM1aSxEr45tAsVV6nXKbMZkcTiQCy7yzwHdU1dw%2BkvcnUJ4ePkPRnFXnMNvNSwIOl9c3GD%2BUZxAn8YNfNNkyfZNlpz5QBBk8j8eiq2eIR591WlJJgcrdnoi19umflL6lVIN%2BQBdlJVYwSoMFU%2BIqCfRAuNH4WAB%2FZPjwak&X-Amz-Signature=a40056c8cf6a66ba4d74ced9130dcf66ae3e6dbdbb9bc05e09861e422e347875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ5OT6MT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3eR%2BmE5cckWIbV7TzNO2eYhJ%2B7UDbsJ9vNm%2Beh74juAIgDC5pyp8Kgkiqi5PziTVofa40oY2OcPQYA8wvm%2B2OoC4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaei2h3FY%2BA2uvVLircA%2BmgWrVhqi%2BJTx3v28PGYnitbtQQxtQUSpUkC3tp5aFUgf01EjawkoV%2FFaXrRy8jt5t7C3VRXg7bAXNoSg%2FwS555fB39uAwN1MuKs9elZy6juXfjX8E3LlGiS8%2FFDtgsttZbCS%2BpUjjjrDGzLj4Z9bVHSyfvV70LaXwpRAERCG8AsYEY%2BMv3nxhA1lTuU7g0XZO2OqCEJ24qkZzUcpVfMNc%2FQYFJK%2FaskIzfSlP7K5AWCi4PtLGnXA%2FFJ7x4ANKFUN9UCVlDFbHhRtgqfEs1fOeT2elD9YgVg4S19seZKSDtM5dLjKSCVERcgtqdz6Pu1uOGT%2FnCX%2BnPRHZ49js6NSZgUXrvcVdagnbwa5a%2FG%2B%2BtRAIqXO06JAn87yCapp0C91fljTIx%2B3Ne4LUDwTzrh1RVVXWuLottxZO%2B1f3o8NYQzPiACBb%2F7XEI%2BbAtZPW0wqrxl2FTWWMVA8GWcWkV%2B39U0I1UBWoIOg5gFsyY%2B39CT4n4xe8MOE3s1XA1%2B6u9vUJA93VUqAN8AhTwax4PJXZSOjaq5%2BCOSHgyV22565AmHrjsQEq0HQa2oLOTJiRlmkZ5pIKvKyj9fiyvZgHRCApUZ2NBtKDa5ZDf1txtnCrKYaDWQTxfHcv6qTpYMKCjwMMGOqUBGCKdXybpzNMNt7%2BzN16DcJ005QFPpnGOFeEXOH1FrSM56IgCVJ%2FDPOoM1aSxEr45tAsVV6nXKbMZkcTiQCy7yzwHdU1dw%2BkvcnUJ4ePkPRnFXnMNvNSwIOl9c3GD%2BUZxAn8YNfNNkyfZNlpz5QBBk8j8eiq2eIR591WlJJgcrdnoi19umflL6lVIN%2BQBdlJVYwSoMFU%2BIqCfRAuNH4WAB%2FZPjwak&X-Amz-Signature=11c47e3119dcd984ec4aff11df0e10b0fcd448bbca76b686379dc8bcedabb0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ5OT6MT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3eR%2BmE5cckWIbV7TzNO2eYhJ%2B7UDbsJ9vNm%2Beh74juAIgDC5pyp8Kgkiqi5PziTVofa40oY2OcPQYA8wvm%2B2OoC4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaei2h3FY%2BA2uvVLircA%2BmgWrVhqi%2BJTx3v28PGYnitbtQQxtQUSpUkC3tp5aFUgf01EjawkoV%2FFaXrRy8jt5t7C3VRXg7bAXNoSg%2FwS555fB39uAwN1MuKs9elZy6juXfjX8E3LlGiS8%2FFDtgsttZbCS%2BpUjjjrDGzLj4Z9bVHSyfvV70LaXwpRAERCG8AsYEY%2BMv3nxhA1lTuU7g0XZO2OqCEJ24qkZzUcpVfMNc%2FQYFJK%2FaskIzfSlP7K5AWCi4PtLGnXA%2FFJ7x4ANKFUN9UCVlDFbHhRtgqfEs1fOeT2elD9YgVg4S19seZKSDtM5dLjKSCVERcgtqdz6Pu1uOGT%2FnCX%2BnPRHZ49js6NSZgUXrvcVdagnbwa5a%2FG%2B%2BtRAIqXO06JAn87yCapp0C91fljTIx%2B3Ne4LUDwTzrh1RVVXWuLottxZO%2B1f3o8NYQzPiACBb%2F7XEI%2BbAtZPW0wqrxl2FTWWMVA8GWcWkV%2B39U0I1UBWoIOg5gFsyY%2B39CT4n4xe8MOE3s1XA1%2B6u9vUJA93VUqAN8AhTwax4PJXZSOjaq5%2BCOSHgyV22565AmHrjsQEq0HQa2oLOTJiRlmkZ5pIKvKyj9fiyvZgHRCApUZ2NBtKDa5ZDf1txtnCrKYaDWQTxfHcv6qTpYMKCjwMMGOqUBGCKdXybpzNMNt7%2BzN16DcJ005QFPpnGOFeEXOH1FrSM56IgCVJ%2FDPOoM1aSxEr45tAsVV6nXKbMZkcTiQCy7yzwHdU1dw%2BkvcnUJ4ePkPRnFXnMNvNSwIOl9c3GD%2BUZxAn8YNfNNkyfZNlpz5QBBk8j8eiq2eIR591WlJJgcrdnoi19umflL6lVIN%2BQBdlJVYwSoMFU%2BIqCfRAuNH4WAB%2FZPjwak&X-Amz-Signature=b050b3315fe0fe96c1c629cd39ff8ac6499d83b9cbe20afecf2ae2674b6d34f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
