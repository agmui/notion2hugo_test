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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6WIDKP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH1UAF0v6w%2FD04Yj7ltzp7Xnqy4pZBRC3fcGkwFLtMnxAiEA%2FbiSZJZ8mRiv0XxctdmAN3%2BMlbHhIYCPb%2BbQVhwhXNcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGnnCmeDhu3t9ERCSircA4sbNhjwnYAV3w4M3eS6ZCeezpSQMZmoxyxKCJtt2ZIloYzI9adbzWHJF5KhdlaVUBi6i9EDbtrNHowCOfsB21hkzdPoz3el38vQCmk8fQz%2FxBVgdgdA8RAGmiFuqytctdd20c9BRNRiL%2BxiS4EANDIupD7sCDFgSYSaTj%2FsTStmRQ8ImbDXqIcv0atUiBIduRrkApVm97P96TDTdc4FxVODaj%2FaVkGtnpkhywYeAS05eAAItcnIybnj7TvJV4wCgJx47iDDd4sUnUUs2ulx0h9hzznhyLbO%2FlzdnqEhL3C4jElc0V0thXs2tu6skTdBnMHdUwOQguWI39ExvvfDRpK7BuaDqfbJcgwtCQo%2BzBQPUISSpY5hAu%2FhyuXYBdcKHOiBIAJHkNL6hYHyhhHq3NbmCiiOdG7RTXb9kWmPoorjJufYD%2FFwerFz%2FWprUAWGNGufu1pz48WXwRlVD%2B1upGgYckcT03Y1iE8U4AN4R8oMpFrmQC7Oz8rF%2FQPZEKZa9UBHqcM8G8jiQin8zveBCo8YaVPAf6KTiMqyMfxfurcAh6UQwQdzDc232C2MIYDInfwHwN5iSXzEX1hIlT2Vs6Tq%2BXIz52oPbQgowzZWgUtGsgDg2szAuPxV0p0RMPCa4cAGOqUBlIhJqn2MwRvHF6huZcKk%2F4Ssk70R2xqEhMvDNTH2TJ8whfzb1h6R%2FwCr2jDw42nfuA%2BP2Hoh0ZSqHrH%2Farz5MJNOaK2HcyLa5z1BlpNJjPMhrtu1d8KcC6HGFYk3WehQ2gH3llg9T3PnyZ5DaEikm6OkD9fywUp5u9cj02aOKMGiyZkzmXrv%2FBCNH%2F2qa39Qc2dn3aGhVE3F43ppiB80xFa27Loi&X-Amz-Signature=86bb456037985f884f2caa5eca2792f0a17738035b33e0066f38b97a64e4318b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6WIDKP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH1UAF0v6w%2FD04Yj7ltzp7Xnqy4pZBRC3fcGkwFLtMnxAiEA%2FbiSZJZ8mRiv0XxctdmAN3%2BMlbHhIYCPb%2BbQVhwhXNcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGnnCmeDhu3t9ERCSircA4sbNhjwnYAV3w4M3eS6ZCeezpSQMZmoxyxKCJtt2ZIloYzI9adbzWHJF5KhdlaVUBi6i9EDbtrNHowCOfsB21hkzdPoz3el38vQCmk8fQz%2FxBVgdgdA8RAGmiFuqytctdd20c9BRNRiL%2BxiS4EANDIupD7sCDFgSYSaTj%2FsTStmRQ8ImbDXqIcv0atUiBIduRrkApVm97P96TDTdc4FxVODaj%2FaVkGtnpkhywYeAS05eAAItcnIybnj7TvJV4wCgJx47iDDd4sUnUUs2ulx0h9hzznhyLbO%2FlzdnqEhL3C4jElc0V0thXs2tu6skTdBnMHdUwOQguWI39ExvvfDRpK7BuaDqfbJcgwtCQo%2BzBQPUISSpY5hAu%2FhyuXYBdcKHOiBIAJHkNL6hYHyhhHq3NbmCiiOdG7RTXb9kWmPoorjJufYD%2FFwerFz%2FWprUAWGNGufu1pz48WXwRlVD%2B1upGgYckcT03Y1iE8U4AN4R8oMpFrmQC7Oz8rF%2FQPZEKZa9UBHqcM8G8jiQin8zveBCo8YaVPAf6KTiMqyMfxfurcAh6UQwQdzDc232C2MIYDInfwHwN5iSXzEX1hIlT2Vs6Tq%2BXIz52oPbQgowzZWgUtGsgDg2szAuPxV0p0RMPCa4cAGOqUBlIhJqn2MwRvHF6huZcKk%2F4Ssk70R2xqEhMvDNTH2TJ8whfzb1h6R%2FwCr2jDw42nfuA%2BP2Hoh0ZSqHrH%2Farz5MJNOaK2HcyLa5z1BlpNJjPMhrtu1d8KcC6HGFYk3WehQ2gH3llg9T3PnyZ5DaEikm6OkD9fywUp5u9cj02aOKMGiyZkzmXrv%2FBCNH%2F2qa39Qc2dn3aGhVE3F43ppiB80xFa27Loi&X-Amz-Signature=b0dfbffd8f7875b48af3153c8e8588050e019f6065d819a03d144ffe20373011&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6WIDKP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH1UAF0v6w%2FD04Yj7ltzp7Xnqy4pZBRC3fcGkwFLtMnxAiEA%2FbiSZJZ8mRiv0XxctdmAN3%2BMlbHhIYCPb%2BbQVhwhXNcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGnnCmeDhu3t9ERCSircA4sbNhjwnYAV3w4M3eS6ZCeezpSQMZmoxyxKCJtt2ZIloYzI9adbzWHJF5KhdlaVUBi6i9EDbtrNHowCOfsB21hkzdPoz3el38vQCmk8fQz%2FxBVgdgdA8RAGmiFuqytctdd20c9BRNRiL%2BxiS4EANDIupD7sCDFgSYSaTj%2FsTStmRQ8ImbDXqIcv0atUiBIduRrkApVm97P96TDTdc4FxVODaj%2FaVkGtnpkhywYeAS05eAAItcnIybnj7TvJV4wCgJx47iDDd4sUnUUs2ulx0h9hzznhyLbO%2FlzdnqEhL3C4jElc0V0thXs2tu6skTdBnMHdUwOQguWI39ExvvfDRpK7BuaDqfbJcgwtCQo%2BzBQPUISSpY5hAu%2FhyuXYBdcKHOiBIAJHkNL6hYHyhhHq3NbmCiiOdG7RTXb9kWmPoorjJufYD%2FFwerFz%2FWprUAWGNGufu1pz48WXwRlVD%2B1upGgYckcT03Y1iE8U4AN4R8oMpFrmQC7Oz8rF%2FQPZEKZa9UBHqcM8G8jiQin8zveBCo8YaVPAf6KTiMqyMfxfurcAh6UQwQdzDc232C2MIYDInfwHwN5iSXzEX1hIlT2Vs6Tq%2BXIz52oPbQgowzZWgUtGsgDg2szAuPxV0p0RMPCa4cAGOqUBlIhJqn2MwRvHF6huZcKk%2F4Ssk70R2xqEhMvDNTH2TJ8whfzb1h6R%2FwCr2jDw42nfuA%2BP2Hoh0ZSqHrH%2Farz5MJNOaK2HcyLa5z1BlpNJjPMhrtu1d8KcC6HGFYk3WehQ2gH3llg9T3PnyZ5DaEikm6OkD9fywUp5u9cj02aOKMGiyZkzmXrv%2FBCNH%2F2qa39Qc2dn3aGhVE3F43ppiB80xFa27Loi&X-Amz-Signature=ba7cb38c33bd32ab3a738805006f70a3c7b1e2dda27c88b1e25f03070c45978e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6WIDKP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH1UAF0v6w%2FD04Yj7ltzp7Xnqy4pZBRC3fcGkwFLtMnxAiEA%2FbiSZJZ8mRiv0XxctdmAN3%2BMlbHhIYCPb%2BbQVhwhXNcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGnnCmeDhu3t9ERCSircA4sbNhjwnYAV3w4M3eS6ZCeezpSQMZmoxyxKCJtt2ZIloYzI9adbzWHJF5KhdlaVUBi6i9EDbtrNHowCOfsB21hkzdPoz3el38vQCmk8fQz%2FxBVgdgdA8RAGmiFuqytctdd20c9BRNRiL%2BxiS4EANDIupD7sCDFgSYSaTj%2FsTStmRQ8ImbDXqIcv0atUiBIduRrkApVm97P96TDTdc4FxVODaj%2FaVkGtnpkhywYeAS05eAAItcnIybnj7TvJV4wCgJx47iDDd4sUnUUs2ulx0h9hzznhyLbO%2FlzdnqEhL3C4jElc0V0thXs2tu6skTdBnMHdUwOQguWI39ExvvfDRpK7BuaDqfbJcgwtCQo%2BzBQPUISSpY5hAu%2FhyuXYBdcKHOiBIAJHkNL6hYHyhhHq3NbmCiiOdG7RTXb9kWmPoorjJufYD%2FFwerFz%2FWprUAWGNGufu1pz48WXwRlVD%2B1upGgYckcT03Y1iE8U4AN4R8oMpFrmQC7Oz8rF%2FQPZEKZa9UBHqcM8G8jiQin8zveBCo8YaVPAf6KTiMqyMfxfurcAh6UQwQdzDc232C2MIYDInfwHwN5iSXzEX1hIlT2Vs6Tq%2BXIz52oPbQgowzZWgUtGsgDg2szAuPxV0p0RMPCa4cAGOqUBlIhJqn2MwRvHF6huZcKk%2F4Ssk70R2xqEhMvDNTH2TJ8whfzb1h6R%2FwCr2jDw42nfuA%2BP2Hoh0ZSqHrH%2Farz5MJNOaK2HcyLa5z1BlpNJjPMhrtu1d8KcC6HGFYk3WehQ2gH3llg9T3PnyZ5DaEikm6OkD9fywUp5u9cj02aOKMGiyZkzmXrv%2FBCNH%2F2qa39Qc2dn3aGhVE3F43ppiB80xFa27Loi&X-Amz-Signature=cbc2c8d687088277710533d9fccae0fe6857cc2ea45995654501726e0ec86b94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6WIDKP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH1UAF0v6w%2FD04Yj7ltzp7Xnqy4pZBRC3fcGkwFLtMnxAiEA%2FbiSZJZ8mRiv0XxctdmAN3%2BMlbHhIYCPb%2BbQVhwhXNcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGnnCmeDhu3t9ERCSircA4sbNhjwnYAV3w4M3eS6ZCeezpSQMZmoxyxKCJtt2ZIloYzI9adbzWHJF5KhdlaVUBi6i9EDbtrNHowCOfsB21hkzdPoz3el38vQCmk8fQz%2FxBVgdgdA8RAGmiFuqytctdd20c9BRNRiL%2BxiS4EANDIupD7sCDFgSYSaTj%2FsTStmRQ8ImbDXqIcv0atUiBIduRrkApVm97P96TDTdc4FxVODaj%2FaVkGtnpkhywYeAS05eAAItcnIybnj7TvJV4wCgJx47iDDd4sUnUUs2ulx0h9hzznhyLbO%2FlzdnqEhL3C4jElc0V0thXs2tu6skTdBnMHdUwOQguWI39ExvvfDRpK7BuaDqfbJcgwtCQo%2BzBQPUISSpY5hAu%2FhyuXYBdcKHOiBIAJHkNL6hYHyhhHq3NbmCiiOdG7RTXb9kWmPoorjJufYD%2FFwerFz%2FWprUAWGNGufu1pz48WXwRlVD%2B1upGgYckcT03Y1iE8U4AN4R8oMpFrmQC7Oz8rF%2FQPZEKZa9UBHqcM8G8jiQin8zveBCo8YaVPAf6KTiMqyMfxfurcAh6UQwQdzDc232C2MIYDInfwHwN5iSXzEX1hIlT2Vs6Tq%2BXIz52oPbQgowzZWgUtGsgDg2szAuPxV0p0RMPCa4cAGOqUBlIhJqn2MwRvHF6huZcKk%2F4Ssk70R2xqEhMvDNTH2TJ8whfzb1h6R%2FwCr2jDw42nfuA%2BP2Hoh0ZSqHrH%2Farz5MJNOaK2HcyLa5z1BlpNJjPMhrtu1d8KcC6HGFYk3WehQ2gH3llg9T3PnyZ5DaEikm6OkD9fywUp5u9cj02aOKMGiyZkzmXrv%2FBCNH%2F2qa39Qc2dn3aGhVE3F43ppiB80xFa27Loi&X-Amz-Signature=ac4965e33cdaa352da9d5c6ad055c7b430e91f4849d5d7aadcd29a8cfce73c43&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
