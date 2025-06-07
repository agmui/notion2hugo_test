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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TV3ZJXX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAO2cXyR5WMsUNu5LGDFHiwWlogDEclUuOFEeFqRgPgIgLLsHCbpvnO8y8t%2FuvmPP%2BkbKnm1LJleR5lvLJteemdUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDApLxyWnW8hSibMACyrcAyTSZScYy7Dc8JgtLYsZ8zAsmVJ%2BT4SFzZ8kM5aqJuxvT9SZe8hvt79SEqkseMqPHNm1sI8g6vAT8jlZGii8izUighJSpvjc8AwR%2B4UgpOVKlEnqMo213bi13MUYgWnoVU7QxoxBusH70fY2wYDl3BtQVeB36HMOoADxo2mENVUDVVaP0IdR4OC4AqU1f6WB8f98ZMQ7BhLBIf5BEACGBMn%2B0%2FhLFoZsVjGXRsDiYcal3mzY%2BJt8CO9sgaqvoHVBtvqAOYzjeQyFgYMyP0atJHm%2FY1O2me0V4x9d0tDIivGPnnVQEPmRO%2BIFu3UYLoJNfnx%2BPMShavMpfz%2Fn%2FxbvkCdqGMlOxnaPoRs5B%2BSHmDqb83Y9U1PYoqYn7Fcm5zk1%2F6bZ7zWitEKJHm1AP004KxcLK851j5Dvqj%2Ftf4fwN49RDpMy43cyXp0rcIqt5shaZKNjb2k4KAkisrkixQGUtbJrrnpLGVReSvQE87BjnQwDss8wS2gJ64iIHAd%2BaMH4kzsADV7q8XgccUoxeOklX0H9VU%2F7FGjYNvWDYgZ4AMD06TQJkVEyp7YZ%2BnC2J%2FbfgY4Ny%2FR2bcG%2B1QwJMe8P1nTFBXKaRbwSRxYnphFFDpZ0eoCHOKMPNXIrhDGcMNLmkcIGOqUBe3XoqEWkQEYEX5B9faBnZZ3U4Lkp%2BeiGe1VZAL11nN9ZZAO%2FuLVXEL%2FCkWSXmSOJ50XHopZDZOw7XsFu%2Fjh%2FlXdnyI%2BFwsPAEIU2x1S2I6MbsUjxg7O5xeiNPPvo%2BjlENXutS1ow2oetZfI%2F0Iu9dZwu6vMcD%2B4ylMHiYHEFrZ%2B6QScYfeUKEBHFPtfiC1qsaBrY%2BZN%2FMvuK3cnk7DLS8V3ny0Z5&X-Amz-Signature=a2936a24cce6d7afd038ec85c26fff972caa50767f10dcbc126e17038dfcc4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TV3ZJXX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAO2cXyR5WMsUNu5LGDFHiwWlogDEclUuOFEeFqRgPgIgLLsHCbpvnO8y8t%2FuvmPP%2BkbKnm1LJleR5lvLJteemdUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDApLxyWnW8hSibMACyrcAyTSZScYy7Dc8JgtLYsZ8zAsmVJ%2BT4SFzZ8kM5aqJuxvT9SZe8hvt79SEqkseMqPHNm1sI8g6vAT8jlZGii8izUighJSpvjc8AwR%2B4UgpOVKlEnqMo213bi13MUYgWnoVU7QxoxBusH70fY2wYDl3BtQVeB36HMOoADxo2mENVUDVVaP0IdR4OC4AqU1f6WB8f98ZMQ7BhLBIf5BEACGBMn%2B0%2FhLFoZsVjGXRsDiYcal3mzY%2BJt8CO9sgaqvoHVBtvqAOYzjeQyFgYMyP0atJHm%2FY1O2me0V4x9d0tDIivGPnnVQEPmRO%2BIFu3UYLoJNfnx%2BPMShavMpfz%2Fn%2FxbvkCdqGMlOxnaPoRs5B%2BSHmDqb83Y9U1PYoqYn7Fcm5zk1%2F6bZ7zWitEKJHm1AP004KxcLK851j5Dvqj%2Ftf4fwN49RDpMy43cyXp0rcIqt5shaZKNjb2k4KAkisrkixQGUtbJrrnpLGVReSvQE87BjnQwDss8wS2gJ64iIHAd%2BaMH4kzsADV7q8XgccUoxeOklX0H9VU%2F7FGjYNvWDYgZ4AMD06TQJkVEyp7YZ%2BnC2J%2FbfgY4Ny%2FR2bcG%2B1QwJMe8P1nTFBXKaRbwSRxYnphFFDpZ0eoCHOKMPNXIrhDGcMNLmkcIGOqUBe3XoqEWkQEYEX5B9faBnZZ3U4Lkp%2BeiGe1VZAL11nN9ZZAO%2FuLVXEL%2FCkWSXmSOJ50XHopZDZOw7XsFu%2Fjh%2FlXdnyI%2BFwsPAEIU2x1S2I6MbsUjxg7O5xeiNPPvo%2BjlENXutS1ow2oetZfI%2F0Iu9dZwu6vMcD%2B4ylMHiYHEFrZ%2B6QScYfeUKEBHFPtfiC1qsaBrY%2BZN%2FMvuK3cnk7DLS8V3ny0Z5&X-Amz-Signature=8bb7cefda72d829a6eec407d17859ab1b192782b11382fa22c4682e33e346629&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TV3ZJXX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAO2cXyR5WMsUNu5LGDFHiwWlogDEclUuOFEeFqRgPgIgLLsHCbpvnO8y8t%2FuvmPP%2BkbKnm1LJleR5lvLJteemdUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDApLxyWnW8hSibMACyrcAyTSZScYy7Dc8JgtLYsZ8zAsmVJ%2BT4SFzZ8kM5aqJuxvT9SZe8hvt79SEqkseMqPHNm1sI8g6vAT8jlZGii8izUighJSpvjc8AwR%2B4UgpOVKlEnqMo213bi13MUYgWnoVU7QxoxBusH70fY2wYDl3BtQVeB36HMOoADxo2mENVUDVVaP0IdR4OC4AqU1f6WB8f98ZMQ7BhLBIf5BEACGBMn%2B0%2FhLFoZsVjGXRsDiYcal3mzY%2BJt8CO9sgaqvoHVBtvqAOYzjeQyFgYMyP0atJHm%2FY1O2me0V4x9d0tDIivGPnnVQEPmRO%2BIFu3UYLoJNfnx%2BPMShavMpfz%2Fn%2FxbvkCdqGMlOxnaPoRs5B%2BSHmDqb83Y9U1PYoqYn7Fcm5zk1%2F6bZ7zWitEKJHm1AP004KxcLK851j5Dvqj%2Ftf4fwN49RDpMy43cyXp0rcIqt5shaZKNjb2k4KAkisrkixQGUtbJrrnpLGVReSvQE87BjnQwDss8wS2gJ64iIHAd%2BaMH4kzsADV7q8XgccUoxeOklX0H9VU%2F7FGjYNvWDYgZ4AMD06TQJkVEyp7YZ%2BnC2J%2FbfgY4Ny%2FR2bcG%2B1QwJMe8P1nTFBXKaRbwSRxYnphFFDpZ0eoCHOKMPNXIrhDGcMNLmkcIGOqUBe3XoqEWkQEYEX5B9faBnZZ3U4Lkp%2BeiGe1VZAL11nN9ZZAO%2FuLVXEL%2FCkWSXmSOJ50XHopZDZOw7XsFu%2Fjh%2FlXdnyI%2BFwsPAEIU2x1S2I6MbsUjxg7O5xeiNPPvo%2BjlENXutS1ow2oetZfI%2F0Iu9dZwu6vMcD%2B4ylMHiYHEFrZ%2B6QScYfeUKEBHFPtfiC1qsaBrY%2BZN%2FMvuK3cnk7DLS8V3ny0Z5&X-Amz-Signature=c0ae722a4fc0209c708e1d25791c6ed655bb1ae65c128c6e98fdace515ec7bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TV3ZJXX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAO2cXyR5WMsUNu5LGDFHiwWlogDEclUuOFEeFqRgPgIgLLsHCbpvnO8y8t%2FuvmPP%2BkbKnm1LJleR5lvLJteemdUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDApLxyWnW8hSibMACyrcAyTSZScYy7Dc8JgtLYsZ8zAsmVJ%2BT4SFzZ8kM5aqJuxvT9SZe8hvt79SEqkseMqPHNm1sI8g6vAT8jlZGii8izUighJSpvjc8AwR%2B4UgpOVKlEnqMo213bi13MUYgWnoVU7QxoxBusH70fY2wYDl3BtQVeB36HMOoADxo2mENVUDVVaP0IdR4OC4AqU1f6WB8f98ZMQ7BhLBIf5BEACGBMn%2B0%2FhLFoZsVjGXRsDiYcal3mzY%2BJt8CO9sgaqvoHVBtvqAOYzjeQyFgYMyP0atJHm%2FY1O2me0V4x9d0tDIivGPnnVQEPmRO%2BIFu3UYLoJNfnx%2BPMShavMpfz%2Fn%2FxbvkCdqGMlOxnaPoRs5B%2BSHmDqb83Y9U1PYoqYn7Fcm5zk1%2F6bZ7zWitEKJHm1AP004KxcLK851j5Dvqj%2Ftf4fwN49RDpMy43cyXp0rcIqt5shaZKNjb2k4KAkisrkixQGUtbJrrnpLGVReSvQE87BjnQwDss8wS2gJ64iIHAd%2BaMH4kzsADV7q8XgccUoxeOklX0H9VU%2F7FGjYNvWDYgZ4AMD06TQJkVEyp7YZ%2BnC2J%2FbfgY4Ny%2FR2bcG%2B1QwJMe8P1nTFBXKaRbwSRxYnphFFDpZ0eoCHOKMPNXIrhDGcMNLmkcIGOqUBe3XoqEWkQEYEX5B9faBnZZ3U4Lkp%2BeiGe1VZAL11nN9ZZAO%2FuLVXEL%2FCkWSXmSOJ50XHopZDZOw7XsFu%2Fjh%2FlXdnyI%2BFwsPAEIU2x1S2I6MbsUjxg7O5xeiNPPvo%2BjlENXutS1ow2oetZfI%2F0Iu9dZwu6vMcD%2B4ylMHiYHEFrZ%2B6QScYfeUKEBHFPtfiC1qsaBrY%2BZN%2FMvuK3cnk7DLS8V3ny0Z5&X-Amz-Signature=6a61de9000e6c3bca49ccfd5cb7ac1f6160242d6c76b8feacb61dc8c06415a11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TV3ZJXX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAO2cXyR5WMsUNu5LGDFHiwWlogDEclUuOFEeFqRgPgIgLLsHCbpvnO8y8t%2FuvmPP%2BkbKnm1LJleR5lvLJteemdUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDApLxyWnW8hSibMACyrcAyTSZScYy7Dc8JgtLYsZ8zAsmVJ%2BT4SFzZ8kM5aqJuxvT9SZe8hvt79SEqkseMqPHNm1sI8g6vAT8jlZGii8izUighJSpvjc8AwR%2B4UgpOVKlEnqMo213bi13MUYgWnoVU7QxoxBusH70fY2wYDl3BtQVeB36HMOoADxo2mENVUDVVaP0IdR4OC4AqU1f6WB8f98ZMQ7BhLBIf5BEACGBMn%2B0%2FhLFoZsVjGXRsDiYcal3mzY%2BJt8CO9sgaqvoHVBtvqAOYzjeQyFgYMyP0atJHm%2FY1O2me0V4x9d0tDIivGPnnVQEPmRO%2BIFu3UYLoJNfnx%2BPMShavMpfz%2Fn%2FxbvkCdqGMlOxnaPoRs5B%2BSHmDqb83Y9U1PYoqYn7Fcm5zk1%2F6bZ7zWitEKJHm1AP004KxcLK851j5Dvqj%2Ftf4fwN49RDpMy43cyXp0rcIqt5shaZKNjb2k4KAkisrkixQGUtbJrrnpLGVReSvQE87BjnQwDss8wS2gJ64iIHAd%2BaMH4kzsADV7q8XgccUoxeOklX0H9VU%2F7FGjYNvWDYgZ4AMD06TQJkVEyp7YZ%2BnC2J%2FbfgY4Ny%2FR2bcG%2B1QwJMe8P1nTFBXKaRbwSRxYnphFFDpZ0eoCHOKMPNXIrhDGcMNLmkcIGOqUBe3XoqEWkQEYEX5B9faBnZZ3U4Lkp%2BeiGe1VZAL11nN9ZZAO%2FuLVXEL%2FCkWSXmSOJ50XHopZDZOw7XsFu%2Fjh%2FlXdnyI%2BFwsPAEIU2x1S2I6MbsUjxg7O5xeiNPPvo%2BjlENXutS1ow2oetZfI%2F0Iu9dZwu6vMcD%2B4ylMHiYHEFrZ%2B6QScYfeUKEBHFPtfiC1qsaBrY%2BZN%2FMvuK3cnk7DLS8V3ny0Z5&X-Amz-Signature=48837a4e4751019d9383505611d17cf4f581b9e948086be37947c40793b3b728&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
