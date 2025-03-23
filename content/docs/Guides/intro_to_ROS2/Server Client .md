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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRCRPMQD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFEuK6NravgcNXsaROfU18VKAGN3MSIuPoosLLzXGzf7AiEA%2BbP0QkLmVpb40y%2BRdm9JynmcqGdmAJPkqCXMR5y5afIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCR3h4SM85rfZkTiSrcAxxLl2Rx5aumueIkRubNtmD3ztGB6miZymFQe%2Fc8yUyH%2F%2BOiBYtCXsjl65S43X7SJ50I8Dvgfqenc8OMQM%2FWV%2FPo1ZAO6ju8KgmSILgdzqoEiQG2zrxHgoJXkiU9z80VI6XvZj73DusrK5V0Rl2OwYOSNnba40ORwNAoMxUujJmfbZgKzE7QlZdpdeEBt8nXRZ%2BQ8EXnGpvj17c6MgJq7LOEiZG3bJwbEILyOu8%2Bwhrj6Yix8z7e4EClp3a42TQsdyqoYEFwaJHf50l0cV9qZUrQBe0MaebCxfO%2FmxJf%2F6AVH%2BGCt3rdFcULvyXklSHEkCvtCRjJvWVDjxQ2V7wVV9%2B%2F4wxUF9TCMbNZN%2FobUuWTEMecTSKPtSGHPKSGbSLzm%2Bn%2FIso5D93HXik3Nv3SS97pg0zNDVBuTyMx07UfkI03wJHyDwrY5%2B6LG%2F2plIT2mkYsmnpaKv49iAcRiffozZR8FzG1ezcNdxe%2FH%2BZpTclpsTFzTU4vrDZ9ene0mw6mHgeH0ws1wFm12DfC%2B%2FXw9tHdBlR6HC4%2BLRs0nEfWxy1OZ3vSv7a1Qy9zL%2Fet0VsTAimnk2oELlUgXSGhVqOMLbHJ%2B%2FSZvhCU4XV%2BCAMhShMH8Fpp2%2Fkx1x5tS3%2BRMJ3N%2F74GOqUB3iRh3yHzXkzYIPdCycvxD4Dl%2F9Oh6UGCSgW%2B4pjTXeN5TUHxN8LhqSNCY%2BXm5y5Qp99lHhpbWQBC8UsREpMGau2dYqWVpfVBlWCuDvYvGZdO3p1RD5yyvQI9Hk3jFhI4M1skBgMxvqJT7LpIu%2FYfADPlIIW3mKGA%2BU%2FDFIAP81r6uv%2By1HEAUHqaPkWAiyejcC61K0jqjP84570fwaIxdn%2Foy9LO&X-Amz-Signature=b8535e415d293b6d9b48e12f7a8e9eaf56394f460c5198e4e5c0086c96bce1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRCRPMQD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFEuK6NravgcNXsaROfU18VKAGN3MSIuPoosLLzXGzf7AiEA%2BbP0QkLmVpb40y%2BRdm9JynmcqGdmAJPkqCXMR5y5afIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCR3h4SM85rfZkTiSrcAxxLl2Rx5aumueIkRubNtmD3ztGB6miZymFQe%2Fc8yUyH%2F%2BOiBYtCXsjl65S43X7SJ50I8Dvgfqenc8OMQM%2FWV%2FPo1ZAO6ju8KgmSILgdzqoEiQG2zrxHgoJXkiU9z80VI6XvZj73DusrK5V0Rl2OwYOSNnba40ORwNAoMxUujJmfbZgKzE7QlZdpdeEBt8nXRZ%2BQ8EXnGpvj17c6MgJq7LOEiZG3bJwbEILyOu8%2Bwhrj6Yix8z7e4EClp3a42TQsdyqoYEFwaJHf50l0cV9qZUrQBe0MaebCxfO%2FmxJf%2F6AVH%2BGCt3rdFcULvyXklSHEkCvtCRjJvWVDjxQ2V7wVV9%2B%2F4wxUF9TCMbNZN%2FobUuWTEMecTSKPtSGHPKSGbSLzm%2Bn%2FIso5D93HXik3Nv3SS97pg0zNDVBuTyMx07UfkI03wJHyDwrY5%2B6LG%2F2plIT2mkYsmnpaKv49iAcRiffozZR8FzG1ezcNdxe%2FH%2BZpTclpsTFzTU4vrDZ9ene0mw6mHgeH0ws1wFm12DfC%2B%2FXw9tHdBlR6HC4%2BLRs0nEfWxy1OZ3vSv7a1Qy9zL%2Fet0VsTAimnk2oELlUgXSGhVqOMLbHJ%2B%2FSZvhCU4XV%2BCAMhShMH8Fpp2%2Fkx1x5tS3%2BRMJ3N%2F74GOqUB3iRh3yHzXkzYIPdCycvxD4Dl%2F9Oh6UGCSgW%2B4pjTXeN5TUHxN8LhqSNCY%2BXm5y5Qp99lHhpbWQBC8UsREpMGau2dYqWVpfVBlWCuDvYvGZdO3p1RD5yyvQI9Hk3jFhI4M1skBgMxvqJT7LpIu%2FYfADPlIIW3mKGA%2BU%2FDFIAP81r6uv%2By1HEAUHqaPkWAiyejcC61K0jqjP84570fwaIxdn%2Foy9LO&X-Amz-Signature=43df89851e6cf1a5ae7051094c8400e74251ce25def4e72945d1abc170d2313b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRCRPMQD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFEuK6NravgcNXsaROfU18VKAGN3MSIuPoosLLzXGzf7AiEA%2BbP0QkLmVpb40y%2BRdm9JynmcqGdmAJPkqCXMR5y5afIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCR3h4SM85rfZkTiSrcAxxLl2Rx5aumueIkRubNtmD3ztGB6miZymFQe%2Fc8yUyH%2F%2BOiBYtCXsjl65S43X7SJ50I8Dvgfqenc8OMQM%2FWV%2FPo1ZAO6ju8KgmSILgdzqoEiQG2zrxHgoJXkiU9z80VI6XvZj73DusrK5V0Rl2OwYOSNnba40ORwNAoMxUujJmfbZgKzE7QlZdpdeEBt8nXRZ%2BQ8EXnGpvj17c6MgJq7LOEiZG3bJwbEILyOu8%2Bwhrj6Yix8z7e4EClp3a42TQsdyqoYEFwaJHf50l0cV9qZUrQBe0MaebCxfO%2FmxJf%2F6AVH%2BGCt3rdFcULvyXklSHEkCvtCRjJvWVDjxQ2V7wVV9%2B%2F4wxUF9TCMbNZN%2FobUuWTEMecTSKPtSGHPKSGbSLzm%2Bn%2FIso5D93HXik3Nv3SS97pg0zNDVBuTyMx07UfkI03wJHyDwrY5%2B6LG%2F2plIT2mkYsmnpaKv49iAcRiffozZR8FzG1ezcNdxe%2FH%2BZpTclpsTFzTU4vrDZ9ene0mw6mHgeH0ws1wFm12DfC%2B%2FXw9tHdBlR6HC4%2BLRs0nEfWxy1OZ3vSv7a1Qy9zL%2Fet0VsTAimnk2oELlUgXSGhVqOMLbHJ%2B%2FSZvhCU4XV%2BCAMhShMH8Fpp2%2Fkx1x5tS3%2BRMJ3N%2F74GOqUB3iRh3yHzXkzYIPdCycvxD4Dl%2F9Oh6UGCSgW%2B4pjTXeN5TUHxN8LhqSNCY%2BXm5y5Qp99lHhpbWQBC8UsREpMGau2dYqWVpfVBlWCuDvYvGZdO3p1RD5yyvQI9Hk3jFhI4M1skBgMxvqJT7LpIu%2FYfADPlIIW3mKGA%2BU%2FDFIAP81r6uv%2By1HEAUHqaPkWAiyejcC61K0jqjP84570fwaIxdn%2Foy9LO&X-Amz-Signature=c8a375edecd71f637cd102a7b2391bf4ae3b90682e84b7cbc30e01ddd822f399&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRCRPMQD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFEuK6NravgcNXsaROfU18VKAGN3MSIuPoosLLzXGzf7AiEA%2BbP0QkLmVpb40y%2BRdm9JynmcqGdmAJPkqCXMR5y5afIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCR3h4SM85rfZkTiSrcAxxLl2Rx5aumueIkRubNtmD3ztGB6miZymFQe%2Fc8yUyH%2F%2BOiBYtCXsjl65S43X7SJ50I8Dvgfqenc8OMQM%2FWV%2FPo1ZAO6ju8KgmSILgdzqoEiQG2zrxHgoJXkiU9z80VI6XvZj73DusrK5V0Rl2OwYOSNnba40ORwNAoMxUujJmfbZgKzE7QlZdpdeEBt8nXRZ%2BQ8EXnGpvj17c6MgJq7LOEiZG3bJwbEILyOu8%2Bwhrj6Yix8z7e4EClp3a42TQsdyqoYEFwaJHf50l0cV9qZUrQBe0MaebCxfO%2FmxJf%2F6AVH%2BGCt3rdFcULvyXklSHEkCvtCRjJvWVDjxQ2V7wVV9%2B%2F4wxUF9TCMbNZN%2FobUuWTEMecTSKPtSGHPKSGbSLzm%2Bn%2FIso5D93HXik3Nv3SS97pg0zNDVBuTyMx07UfkI03wJHyDwrY5%2B6LG%2F2plIT2mkYsmnpaKv49iAcRiffozZR8FzG1ezcNdxe%2FH%2BZpTclpsTFzTU4vrDZ9ene0mw6mHgeH0ws1wFm12DfC%2B%2FXw9tHdBlR6HC4%2BLRs0nEfWxy1OZ3vSv7a1Qy9zL%2Fet0VsTAimnk2oELlUgXSGhVqOMLbHJ%2B%2FSZvhCU4XV%2BCAMhShMH8Fpp2%2Fkx1x5tS3%2BRMJ3N%2F74GOqUB3iRh3yHzXkzYIPdCycvxD4Dl%2F9Oh6UGCSgW%2B4pjTXeN5TUHxN8LhqSNCY%2BXm5y5Qp99lHhpbWQBC8UsREpMGau2dYqWVpfVBlWCuDvYvGZdO3p1RD5yyvQI9Hk3jFhI4M1skBgMxvqJT7LpIu%2FYfADPlIIW3mKGA%2BU%2FDFIAP81r6uv%2By1HEAUHqaPkWAiyejcC61K0jqjP84570fwaIxdn%2Foy9LO&X-Amz-Signature=40b81fa89c1121b1ee1b4fd1fc35fd7a59e7eed799b4c5dffc6fe7abbcdb436c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRCRPMQD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFEuK6NravgcNXsaROfU18VKAGN3MSIuPoosLLzXGzf7AiEA%2BbP0QkLmVpb40y%2BRdm9JynmcqGdmAJPkqCXMR5y5afIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCR3h4SM85rfZkTiSrcAxxLl2Rx5aumueIkRubNtmD3ztGB6miZymFQe%2Fc8yUyH%2F%2BOiBYtCXsjl65S43X7SJ50I8Dvgfqenc8OMQM%2FWV%2FPo1ZAO6ju8KgmSILgdzqoEiQG2zrxHgoJXkiU9z80VI6XvZj73DusrK5V0Rl2OwYOSNnba40ORwNAoMxUujJmfbZgKzE7QlZdpdeEBt8nXRZ%2BQ8EXnGpvj17c6MgJq7LOEiZG3bJwbEILyOu8%2Bwhrj6Yix8z7e4EClp3a42TQsdyqoYEFwaJHf50l0cV9qZUrQBe0MaebCxfO%2FmxJf%2F6AVH%2BGCt3rdFcULvyXklSHEkCvtCRjJvWVDjxQ2V7wVV9%2B%2F4wxUF9TCMbNZN%2FobUuWTEMecTSKPtSGHPKSGbSLzm%2Bn%2FIso5D93HXik3Nv3SS97pg0zNDVBuTyMx07UfkI03wJHyDwrY5%2B6LG%2F2plIT2mkYsmnpaKv49iAcRiffozZR8FzG1ezcNdxe%2FH%2BZpTclpsTFzTU4vrDZ9ene0mw6mHgeH0ws1wFm12DfC%2B%2FXw9tHdBlR6HC4%2BLRs0nEfWxy1OZ3vSv7a1Qy9zL%2Fet0VsTAimnk2oELlUgXSGhVqOMLbHJ%2B%2FSZvhCU4XV%2BCAMhShMH8Fpp2%2Fkx1x5tS3%2BRMJ3N%2F74GOqUB3iRh3yHzXkzYIPdCycvxD4Dl%2F9Oh6UGCSgW%2B4pjTXeN5TUHxN8LhqSNCY%2BXm5y5Qp99lHhpbWQBC8UsREpMGau2dYqWVpfVBlWCuDvYvGZdO3p1RD5yyvQI9Hk3jFhI4M1skBgMxvqJT7LpIu%2FYfADPlIIW3mKGA%2BU%2FDFIAP81r6uv%2By1HEAUHqaPkWAiyejcC61K0jqjP84570fwaIxdn%2Foy9LO&X-Amz-Signature=76e47bdd127f16614194730a49e466d3b1c0bb3c5af28791970eb756ee1f9daa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
