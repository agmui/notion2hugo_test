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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U43RV5I%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCaQnPdxTAqgIstJc4YMQ7u9AZCdmeI4JrKNsajuaHyFAIgAyZ6aVrcniHk7Ikc4z06rSs2gRdXQtpDgBn%2BMXS53T0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT6CroUxvDnBP%2FLJircA0tlzvJol9%2BjFVTDfLu4VC%2F%2B40kTir0bZmp%2BKeoQk1Q7HMVo%2BW0sK1l7rMUu8g6m%2BEK1Mw9Y9q%2FGpebnGyfK6KNo9jlcnndPI1tI9NdpAWxzHaMiai73z5gOqCKq%2BPwFruueXB7dIifU22zIYhuRSeSBCcLoLnnVyV3NbNrPQglMnYb32iy6298nRr9vw5nUBTHHTEDk8k7wklUA2QMyrqPHZh5bclv%2FXgQMfHEqiwyivJvI3A9rklNsgVphrP%2Bxvp12HCjOeUmTNCLiUltTmSGL8TtBdF9qG7VTaFTmnx59f1%2BK%2FwoNY%2FbsthAzGE7C0riP9Cu0lv%2BhK7rdxfkw6V%2FbQ3rSbwfeVnGDTKaVtZSU0%2Byk2BglfTqzXrpmGgRNR%2B8%2BXRZVV7rUCoGrjLtHamDMchSJ0l%2F%2BcM8YLi2pwmixp5%2BTqb521SU9Sl%2F5eBywazlLwQ7YM%2BCfTM%2B47wtoK%2FqD3oCj0Q236spJYG7gIe79%2Fj502rLClOulHBa8Eiiu8nSmnSGynXg7eg5LUjz3t%2BUs0Q3osdAmCaW79ByAnznD9Q%2B%2Bn0QHdM35vOv3fKmQSGprZHh%2FhdIQ7cjvu%2B7r01aqFPZMSyOST31%2BEnZL4g%2F8eFE87f2EgkFxsvKbMMyHxsAGOqUBpRDD5Bzh%2BO2I4U47PAktpreFTpqqXORJt7Psxj9wMkBiTEJTl%2Bv5AMmIa6klJB3rMK0OPUlY%2FOXEqauZIXxk0MmYoXKagMGIRlbPT%2FoK9LmprJRSeqv%2B3dzl9wtTuoQCAPhOS3hwiZagy47QN7kqBhHmCW5rDFLww%2BDXBhz4M41ATewdsPe8BwYZBHez6df6oQAYPxOVhi2tvc%2Fa0lER3vcAY8kO&X-Amz-Signature=bf641ce63c9ae952f279fc15dd757720743404b5c3cf50a80e79e39546578c78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U43RV5I%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCaQnPdxTAqgIstJc4YMQ7u9AZCdmeI4JrKNsajuaHyFAIgAyZ6aVrcniHk7Ikc4z06rSs2gRdXQtpDgBn%2BMXS53T0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT6CroUxvDnBP%2FLJircA0tlzvJol9%2BjFVTDfLu4VC%2F%2B40kTir0bZmp%2BKeoQk1Q7HMVo%2BW0sK1l7rMUu8g6m%2BEK1Mw9Y9q%2FGpebnGyfK6KNo9jlcnndPI1tI9NdpAWxzHaMiai73z5gOqCKq%2BPwFruueXB7dIifU22zIYhuRSeSBCcLoLnnVyV3NbNrPQglMnYb32iy6298nRr9vw5nUBTHHTEDk8k7wklUA2QMyrqPHZh5bclv%2FXgQMfHEqiwyivJvI3A9rklNsgVphrP%2Bxvp12HCjOeUmTNCLiUltTmSGL8TtBdF9qG7VTaFTmnx59f1%2BK%2FwoNY%2FbsthAzGE7C0riP9Cu0lv%2BhK7rdxfkw6V%2FbQ3rSbwfeVnGDTKaVtZSU0%2Byk2BglfTqzXrpmGgRNR%2B8%2BXRZVV7rUCoGrjLtHamDMchSJ0l%2F%2BcM8YLi2pwmixp5%2BTqb521SU9Sl%2F5eBywazlLwQ7YM%2BCfTM%2B47wtoK%2FqD3oCj0Q236spJYG7gIe79%2Fj502rLClOulHBa8Eiiu8nSmnSGynXg7eg5LUjz3t%2BUs0Q3osdAmCaW79ByAnznD9Q%2B%2Bn0QHdM35vOv3fKmQSGprZHh%2FhdIQ7cjvu%2B7r01aqFPZMSyOST31%2BEnZL4g%2F8eFE87f2EgkFxsvKbMMyHxsAGOqUBpRDD5Bzh%2BO2I4U47PAktpreFTpqqXORJt7Psxj9wMkBiTEJTl%2Bv5AMmIa6klJB3rMK0OPUlY%2FOXEqauZIXxk0MmYoXKagMGIRlbPT%2FoK9LmprJRSeqv%2B3dzl9wtTuoQCAPhOS3hwiZagy47QN7kqBhHmCW5rDFLww%2BDXBhz4M41ATewdsPe8BwYZBHez6df6oQAYPxOVhi2tvc%2Fa0lER3vcAY8kO&X-Amz-Signature=83ab1d238250f8730c55e5aeec5ff7cff79121e6de2a5586ddcd8f041e07a6ec&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U43RV5I%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCaQnPdxTAqgIstJc4YMQ7u9AZCdmeI4JrKNsajuaHyFAIgAyZ6aVrcniHk7Ikc4z06rSs2gRdXQtpDgBn%2BMXS53T0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT6CroUxvDnBP%2FLJircA0tlzvJol9%2BjFVTDfLu4VC%2F%2B40kTir0bZmp%2BKeoQk1Q7HMVo%2BW0sK1l7rMUu8g6m%2BEK1Mw9Y9q%2FGpebnGyfK6KNo9jlcnndPI1tI9NdpAWxzHaMiai73z5gOqCKq%2BPwFruueXB7dIifU22zIYhuRSeSBCcLoLnnVyV3NbNrPQglMnYb32iy6298nRr9vw5nUBTHHTEDk8k7wklUA2QMyrqPHZh5bclv%2FXgQMfHEqiwyivJvI3A9rklNsgVphrP%2Bxvp12HCjOeUmTNCLiUltTmSGL8TtBdF9qG7VTaFTmnx59f1%2BK%2FwoNY%2FbsthAzGE7C0riP9Cu0lv%2BhK7rdxfkw6V%2FbQ3rSbwfeVnGDTKaVtZSU0%2Byk2BglfTqzXrpmGgRNR%2B8%2BXRZVV7rUCoGrjLtHamDMchSJ0l%2F%2BcM8YLi2pwmixp5%2BTqb521SU9Sl%2F5eBywazlLwQ7YM%2BCfTM%2B47wtoK%2FqD3oCj0Q236spJYG7gIe79%2Fj502rLClOulHBa8Eiiu8nSmnSGynXg7eg5LUjz3t%2BUs0Q3osdAmCaW79ByAnznD9Q%2B%2Bn0QHdM35vOv3fKmQSGprZHh%2FhdIQ7cjvu%2B7r01aqFPZMSyOST31%2BEnZL4g%2F8eFE87f2EgkFxsvKbMMyHxsAGOqUBpRDD5Bzh%2BO2I4U47PAktpreFTpqqXORJt7Psxj9wMkBiTEJTl%2Bv5AMmIa6klJB3rMK0OPUlY%2FOXEqauZIXxk0MmYoXKagMGIRlbPT%2FoK9LmprJRSeqv%2B3dzl9wtTuoQCAPhOS3hwiZagy47QN7kqBhHmCW5rDFLww%2BDXBhz4M41ATewdsPe8BwYZBHez6df6oQAYPxOVhi2tvc%2Fa0lER3vcAY8kO&X-Amz-Signature=dd295e25b650319639fba032117d6787ce6865aac82d75b963f8703e9e38404d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U43RV5I%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCaQnPdxTAqgIstJc4YMQ7u9AZCdmeI4JrKNsajuaHyFAIgAyZ6aVrcniHk7Ikc4z06rSs2gRdXQtpDgBn%2BMXS53T0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT6CroUxvDnBP%2FLJircA0tlzvJol9%2BjFVTDfLu4VC%2F%2B40kTir0bZmp%2BKeoQk1Q7HMVo%2BW0sK1l7rMUu8g6m%2BEK1Mw9Y9q%2FGpebnGyfK6KNo9jlcnndPI1tI9NdpAWxzHaMiai73z5gOqCKq%2BPwFruueXB7dIifU22zIYhuRSeSBCcLoLnnVyV3NbNrPQglMnYb32iy6298nRr9vw5nUBTHHTEDk8k7wklUA2QMyrqPHZh5bclv%2FXgQMfHEqiwyivJvI3A9rklNsgVphrP%2Bxvp12HCjOeUmTNCLiUltTmSGL8TtBdF9qG7VTaFTmnx59f1%2BK%2FwoNY%2FbsthAzGE7C0riP9Cu0lv%2BhK7rdxfkw6V%2FbQ3rSbwfeVnGDTKaVtZSU0%2Byk2BglfTqzXrpmGgRNR%2B8%2BXRZVV7rUCoGrjLtHamDMchSJ0l%2F%2BcM8YLi2pwmixp5%2BTqb521SU9Sl%2F5eBywazlLwQ7YM%2BCfTM%2B47wtoK%2FqD3oCj0Q236spJYG7gIe79%2Fj502rLClOulHBa8Eiiu8nSmnSGynXg7eg5LUjz3t%2BUs0Q3osdAmCaW79ByAnznD9Q%2B%2Bn0QHdM35vOv3fKmQSGprZHh%2FhdIQ7cjvu%2B7r01aqFPZMSyOST31%2BEnZL4g%2F8eFE87f2EgkFxsvKbMMyHxsAGOqUBpRDD5Bzh%2BO2I4U47PAktpreFTpqqXORJt7Psxj9wMkBiTEJTl%2Bv5AMmIa6klJB3rMK0OPUlY%2FOXEqauZIXxk0MmYoXKagMGIRlbPT%2FoK9LmprJRSeqv%2B3dzl9wtTuoQCAPhOS3hwiZagy47QN7kqBhHmCW5rDFLww%2BDXBhz4M41ATewdsPe8BwYZBHez6df6oQAYPxOVhi2tvc%2Fa0lER3vcAY8kO&X-Amz-Signature=a0171fb73c051146384f2f147cad142b831b2e74614d5b81e981fe5f7f78c3af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U43RV5I%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCaQnPdxTAqgIstJc4YMQ7u9AZCdmeI4JrKNsajuaHyFAIgAyZ6aVrcniHk7Ikc4z06rSs2gRdXQtpDgBn%2BMXS53T0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT6CroUxvDnBP%2FLJircA0tlzvJol9%2BjFVTDfLu4VC%2F%2B40kTir0bZmp%2BKeoQk1Q7HMVo%2BW0sK1l7rMUu8g6m%2BEK1Mw9Y9q%2FGpebnGyfK6KNo9jlcnndPI1tI9NdpAWxzHaMiai73z5gOqCKq%2BPwFruueXB7dIifU22zIYhuRSeSBCcLoLnnVyV3NbNrPQglMnYb32iy6298nRr9vw5nUBTHHTEDk8k7wklUA2QMyrqPHZh5bclv%2FXgQMfHEqiwyivJvI3A9rklNsgVphrP%2Bxvp12HCjOeUmTNCLiUltTmSGL8TtBdF9qG7VTaFTmnx59f1%2BK%2FwoNY%2FbsthAzGE7C0riP9Cu0lv%2BhK7rdxfkw6V%2FbQ3rSbwfeVnGDTKaVtZSU0%2Byk2BglfTqzXrpmGgRNR%2B8%2BXRZVV7rUCoGrjLtHamDMchSJ0l%2F%2BcM8YLi2pwmixp5%2BTqb521SU9Sl%2F5eBywazlLwQ7YM%2BCfTM%2B47wtoK%2FqD3oCj0Q236spJYG7gIe79%2Fj502rLClOulHBa8Eiiu8nSmnSGynXg7eg5LUjz3t%2BUs0Q3osdAmCaW79ByAnznD9Q%2B%2Bn0QHdM35vOv3fKmQSGprZHh%2FhdIQ7cjvu%2B7r01aqFPZMSyOST31%2BEnZL4g%2F8eFE87f2EgkFxsvKbMMyHxsAGOqUBpRDD5Bzh%2BO2I4U47PAktpreFTpqqXORJt7Psxj9wMkBiTEJTl%2Bv5AMmIa6klJB3rMK0OPUlY%2FOXEqauZIXxk0MmYoXKagMGIRlbPT%2FoK9LmprJRSeqv%2B3dzl9wtTuoQCAPhOS3hwiZagy47QN7kqBhHmCW5rDFLww%2BDXBhz4M41ATewdsPe8BwYZBHez6df6oQAYPxOVhi2tvc%2Fa0lER3vcAY8kO&X-Amz-Signature=19ee9abeaacebbf37cd6d77efffde62779ff062668e999e12d4beb32a10c1a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
