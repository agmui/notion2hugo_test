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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STJWUKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRagalF5zGvWCmIOxAwTdCJadQ5rObd0tpty84aANSAIhANKKmRXaQ7AUp3OVUR2V4RRxPH%2FJSp01PB8DT7NEPqj6Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyI4QRrZIDs%2FRCQ%2F%2F0q3APCVdVO0cZ0rUMuxUhfHPsVrccccUY2PMKd%2Bc%2FIcz3oJ%2FET1OCCDrRboa7Nvf7%2FXpWdmtRJRT5hLy3mzSYeFsMj4R9IdeW8X5sYAEQUNNEatqaZadqa7trUmGDTXXShpSy60lxQYprNt1uswQewZAew%2BR00oWtieOu07VUBn%2B1TsX1iVIMFWBO0LG4CBSrhtGnFCdoq6Rtcu2CuhnK%2BUDafVzOY%2Bl9ar1SBpOJKx6YVFV2FGciEZ0nm64z6w42fC03Y4ndg82BHwDTM%2BNANT35XfW9RRdGhxIkhxz5DemMP1%2F8d%2FvNfeSzillof%2FPr%2FJ1jsQNBe%2FFtczqJUiIQKG16mH8HDIyCyFYe3LY8MOlq33ottEXmSN1q5pbpuLjFI17Nud%2BKWXNlGaV23NGUPdx0tswBbLq%2FjGvcugebno2OGn9ChPAh3hk%2Fm6KynsJwweYZHoChC%2B2N6XlcPA2OTVQbLA2mO%2FpsbODsvRIJirypqM%2BYhnpS%2Fh%2BGeuts9riQGdRXQy9SB64VnBEjp%2F%2FBEvReIX4ozVmaDkAh2D5ecFPR2GGwLl6JN6RKMIVrfsDRSxQfx01WrCrE3J1UFSRNm1M3DRTp9mO%2FJqx6I0uQHHFP9DkQdytCyzbhjQMULPzDEyILABjqkAfEK6ZZimJH5Vb5zhtzaH0J%2FDnjUFW0vu5Fl6PnK01wkb8ah4AHAtdulOaNFYHcPHI%2BkYXVxwTrcTbOW7Gxg4Kpxct6yH4r%2FtziFi2qyoXsjpuVoYJlQbpbKq850zC9y84v%2Bmu85vA3Wm5POU3l8SnHMsR2N4upB8DKL%2FvsdfXow0a%2F7qVCB00eSLUIystWRKxf0pPShOY%2FK%2Fue9lDeSzIQPzE9R&X-Amz-Signature=1d0508d01ae7ea3140601d1fbc931434b89cce4d49f7fa3164973c464cc82156&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STJWUKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRagalF5zGvWCmIOxAwTdCJadQ5rObd0tpty84aANSAIhANKKmRXaQ7AUp3OVUR2V4RRxPH%2FJSp01PB8DT7NEPqj6Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyI4QRrZIDs%2FRCQ%2F%2F0q3APCVdVO0cZ0rUMuxUhfHPsVrccccUY2PMKd%2Bc%2FIcz3oJ%2FET1OCCDrRboa7Nvf7%2FXpWdmtRJRT5hLy3mzSYeFsMj4R9IdeW8X5sYAEQUNNEatqaZadqa7trUmGDTXXShpSy60lxQYprNt1uswQewZAew%2BR00oWtieOu07VUBn%2B1TsX1iVIMFWBO0LG4CBSrhtGnFCdoq6Rtcu2CuhnK%2BUDafVzOY%2Bl9ar1SBpOJKx6YVFV2FGciEZ0nm64z6w42fC03Y4ndg82BHwDTM%2BNANT35XfW9RRdGhxIkhxz5DemMP1%2F8d%2FvNfeSzillof%2FPr%2FJ1jsQNBe%2FFtczqJUiIQKG16mH8HDIyCyFYe3LY8MOlq33ottEXmSN1q5pbpuLjFI17Nud%2BKWXNlGaV23NGUPdx0tswBbLq%2FjGvcugebno2OGn9ChPAh3hk%2Fm6KynsJwweYZHoChC%2B2N6XlcPA2OTVQbLA2mO%2FpsbODsvRIJirypqM%2BYhnpS%2Fh%2BGeuts9riQGdRXQy9SB64VnBEjp%2F%2FBEvReIX4ozVmaDkAh2D5ecFPR2GGwLl6JN6RKMIVrfsDRSxQfx01WrCrE3J1UFSRNm1M3DRTp9mO%2FJqx6I0uQHHFP9DkQdytCyzbhjQMULPzDEyILABjqkAfEK6ZZimJH5Vb5zhtzaH0J%2FDnjUFW0vu5Fl6PnK01wkb8ah4AHAtdulOaNFYHcPHI%2BkYXVxwTrcTbOW7Gxg4Kpxct6yH4r%2FtziFi2qyoXsjpuVoYJlQbpbKq850zC9y84v%2Bmu85vA3Wm5POU3l8SnHMsR2N4upB8DKL%2FvsdfXow0a%2F7qVCB00eSLUIystWRKxf0pPShOY%2FK%2Fue9lDeSzIQPzE9R&X-Amz-Signature=9c4f1aaa36fe1e4c352d8ae30a1c427d85f80ab0e4424a7250e48cc3f065cdd3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STJWUKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRagalF5zGvWCmIOxAwTdCJadQ5rObd0tpty84aANSAIhANKKmRXaQ7AUp3OVUR2V4RRxPH%2FJSp01PB8DT7NEPqj6Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyI4QRrZIDs%2FRCQ%2F%2F0q3APCVdVO0cZ0rUMuxUhfHPsVrccccUY2PMKd%2Bc%2FIcz3oJ%2FET1OCCDrRboa7Nvf7%2FXpWdmtRJRT5hLy3mzSYeFsMj4R9IdeW8X5sYAEQUNNEatqaZadqa7trUmGDTXXShpSy60lxQYprNt1uswQewZAew%2BR00oWtieOu07VUBn%2B1TsX1iVIMFWBO0LG4CBSrhtGnFCdoq6Rtcu2CuhnK%2BUDafVzOY%2Bl9ar1SBpOJKx6YVFV2FGciEZ0nm64z6w42fC03Y4ndg82BHwDTM%2BNANT35XfW9RRdGhxIkhxz5DemMP1%2F8d%2FvNfeSzillof%2FPr%2FJ1jsQNBe%2FFtczqJUiIQKG16mH8HDIyCyFYe3LY8MOlq33ottEXmSN1q5pbpuLjFI17Nud%2BKWXNlGaV23NGUPdx0tswBbLq%2FjGvcugebno2OGn9ChPAh3hk%2Fm6KynsJwweYZHoChC%2B2N6XlcPA2OTVQbLA2mO%2FpsbODsvRIJirypqM%2BYhnpS%2Fh%2BGeuts9riQGdRXQy9SB64VnBEjp%2F%2FBEvReIX4ozVmaDkAh2D5ecFPR2GGwLl6JN6RKMIVrfsDRSxQfx01WrCrE3J1UFSRNm1M3DRTp9mO%2FJqx6I0uQHHFP9DkQdytCyzbhjQMULPzDEyILABjqkAfEK6ZZimJH5Vb5zhtzaH0J%2FDnjUFW0vu5Fl6PnK01wkb8ah4AHAtdulOaNFYHcPHI%2BkYXVxwTrcTbOW7Gxg4Kpxct6yH4r%2FtziFi2qyoXsjpuVoYJlQbpbKq850zC9y84v%2Bmu85vA3Wm5POU3l8SnHMsR2N4upB8DKL%2FvsdfXow0a%2F7qVCB00eSLUIystWRKxf0pPShOY%2FK%2Fue9lDeSzIQPzE9R&X-Amz-Signature=944c8f0bde13b7ff22d674a969c02125023c11557bc6ca13d12df598ceccb553&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STJWUKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRagalF5zGvWCmIOxAwTdCJadQ5rObd0tpty84aANSAIhANKKmRXaQ7AUp3OVUR2V4RRxPH%2FJSp01PB8DT7NEPqj6Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyI4QRrZIDs%2FRCQ%2F%2F0q3APCVdVO0cZ0rUMuxUhfHPsVrccccUY2PMKd%2Bc%2FIcz3oJ%2FET1OCCDrRboa7Nvf7%2FXpWdmtRJRT5hLy3mzSYeFsMj4R9IdeW8X5sYAEQUNNEatqaZadqa7trUmGDTXXShpSy60lxQYprNt1uswQewZAew%2BR00oWtieOu07VUBn%2B1TsX1iVIMFWBO0LG4CBSrhtGnFCdoq6Rtcu2CuhnK%2BUDafVzOY%2Bl9ar1SBpOJKx6YVFV2FGciEZ0nm64z6w42fC03Y4ndg82BHwDTM%2BNANT35XfW9RRdGhxIkhxz5DemMP1%2F8d%2FvNfeSzillof%2FPr%2FJ1jsQNBe%2FFtczqJUiIQKG16mH8HDIyCyFYe3LY8MOlq33ottEXmSN1q5pbpuLjFI17Nud%2BKWXNlGaV23NGUPdx0tswBbLq%2FjGvcugebno2OGn9ChPAh3hk%2Fm6KynsJwweYZHoChC%2B2N6XlcPA2OTVQbLA2mO%2FpsbODsvRIJirypqM%2BYhnpS%2Fh%2BGeuts9riQGdRXQy9SB64VnBEjp%2F%2FBEvReIX4ozVmaDkAh2D5ecFPR2GGwLl6JN6RKMIVrfsDRSxQfx01WrCrE3J1UFSRNm1M3DRTp9mO%2FJqx6I0uQHHFP9DkQdytCyzbhjQMULPzDEyILABjqkAfEK6ZZimJH5Vb5zhtzaH0J%2FDnjUFW0vu5Fl6PnK01wkb8ah4AHAtdulOaNFYHcPHI%2BkYXVxwTrcTbOW7Gxg4Kpxct6yH4r%2FtziFi2qyoXsjpuVoYJlQbpbKq850zC9y84v%2Bmu85vA3Wm5POU3l8SnHMsR2N4upB8DKL%2FvsdfXow0a%2F7qVCB00eSLUIystWRKxf0pPShOY%2FK%2Fue9lDeSzIQPzE9R&X-Amz-Signature=dbe2d3094f93296f42a79aff6aebda6430fa0d4a9fa0f1e6e026141e98a8766d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STJWUKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRagalF5zGvWCmIOxAwTdCJadQ5rObd0tpty84aANSAIhANKKmRXaQ7AUp3OVUR2V4RRxPH%2FJSp01PB8DT7NEPqj6Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyI4QRrZIDs%2FRCQ%2F%2F0q3APCVdVO0cZ0rUMuxUhfHPsVrccccUY2PMKd%2Bc%2FIcz3oJ%2FET1OCCDrRboa7Nvf7%2FXpWdmtRJRT5hLy3mzSYeFsMj4R9IdeW8X5sYAEQUNNEatqaZadqa7trUmGDTXXShpSy60lxQYprNt1uswQewZAew%2BR00oWtieOu07VUBn%2B1TsX1iVIMFWBO0LG4CBSrhtGnFCdoq6Rtcu2CuhnK%2BUDafVzOY%2Bl9ar1SBpOJKx6YVFV2FGciEZ0nm64z6w42fC03Y4ndg82BHwDTM%2BNANT35XfW9RRdGhxIkhxz5DemMP1%2F8d%2FvNfeSzillof%2FPr%2FJ1jsQNBe%2FFtczqJUiIQKG16mH8HDIyCyFYe3LY8MOlq33ottEXmSN1q5pbpuLjFI17Nud%2BKWXNlGaV23NGUPdx0tswBbLq%2FjGvcugebno2OGn9ChPAh3hk%2Fm6KynsJwweYZHoChC%2B2N6XlcPA2OTVQbLA2mO%2FpsbODsvRIJirypqM%2BYhnpS%2Fh%2BGeuts9riQGdRXQy9SB64VnBEjp%2F%2FBEvReIX4ozVmaDkAh2D5ecFPR2GGwLl6JN6RKMIVrfsDRSxQfx01WrCrE3J1UFSRNm1M3DRTp9mO%2FJqx6I0uQHHFP9DkQdytCyzbhjQMULPzDEyILABjqkAfEK6ZZimJH5Vb5zhtzaH0J%2FDnjUFW0vu5Fl6PnK01wkb8ah4AHAtdulOaNFYHcPHI%2BkYXVxwTrcTbOW7Gxg4Kpxct6yH4r%2FtziFi2qyoXsjpuVoYJlQbpbKq850zC9y84v%2Bmu85vA3Wm5POU3l8SnHMsR2N4upB8DKL%2FvsdfXow0a%2F7qVCB00eSLUIystWRKxf0pPShOY%2FK%2Fue9lDeSzIQPzE9R&X-Amz-Signature=1942f70cac89d6ef5dcfac15c7c4ccdb4bcc13e0d5481eba409580ce26b2ad0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
