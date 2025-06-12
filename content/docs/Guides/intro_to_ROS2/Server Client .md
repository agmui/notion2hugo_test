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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CNFXOU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD4Gc4Yhkuz1n10n9c5F4uwgnzi2tHDnlPH5zHjWGZ3TAIgdNlaGQmuBtRGl4hRsWzMycdN3QC9N%2BTwOYaFHc1JHa4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGsBn1v8oPM8XTnUCrcAx0UqdRVCfZiJ7uX234tNm2CEnz1SlkDy4iX2XlXGhHvvLDXg%2FzgqudsoRereRJ4UBWWAugPrjvszXHOWJSFSOYrA6ohG3nUJbAHK5WnxkVi8fRhR%2B7%2BC2dklDOK4mxcV0oxJGSwrPS9ymccRo3%2B05dIV6fAhAPzhbOUHprfo%2BjS568ZjEjjV7z%2BJMB50R2S0BKd%2Bq2ITIzYy5RWPn8S4UNGa0vxdFnkADnO%2Flr1P%2Ba%2F8vPXQ4oEnN92740T3v0T%2Bze25AM2vNL4QGg9rfhR29HGMenFQ2WbryeF92gJifcazueHueDnZfGbkkc9eurIMcZoQTbLQ0qNLMs2TAz%2BcpD6szCQaSyBZh3ZGdSkeN0U4V%2BLP67x%2Fhv9ICxc6f6nNeWI9QnK%2BaT5yDtKRRPoFs1707EhS1iRNK71FsV9Cj7%2B2QlDoVEPWD%2BM9%2BLypvSOO0nBrMhQ1U1fUO2o78l1KoH90EwDDyqjHCWWOB%2FeAdOgDTa4GyWWWGKxxNU7JdrPR%2BHiGeyVRF1bu9ou3jrndtsNu1s51ETwQAzT5%2B4QkqZz2oNGRT4hyY%2FdC5HJ6om%2B6KElEsfrsYWGGEP7H2mUMd%2Fs6Fk%2Flpa96bGVjCiMCBLaUQfpfpCmIII8IzsEMLeIqsIGOqUBl3oYyRJZ7DlOY3pBHU3Sv5OHCAFaKWLX6rGHsuwbm2WqPNSZRYUQq8yoObjgmCzoJHcVg1oDJsBnTH%2BcLwqA1F%2FfgDbivQbfZF5n%2F45Zp%2FgDV%2FgJB78RfqlKZwQN1zxfR7C0oDvupcWgPgw9JDee0xvGhpM2ApiXZOAb3pXbw8%2FB%2Feftsff04qojJiIb6DUrkcnejbX7tMjB6OhOXigPZ8Z%2F5iXv&X-Amz-Signature=63933a8e80284a5c9954df44762a3011ba56cbebc7cbf05b21f2334a740ac574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CNFXOU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD4Gc4Yhkuz1n10n9c5F4uwgnzi2tHDnlPH5zHjWGZ3TAIgdNlaGQmuBtRGl4hRsWzMycdN3QC9N%2BTwOYaFHc1JHa4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGsBn1v8oPM8XTnUCrcAx0UqdRVCfZiJ7uX234tNm2CEnz1SlkDy4iX2XlXGhHvvLDXg%2FzgqudsoRereRJ4UBWWAugPrjvszXHOWJSFSOYrA6ohG3nUJbAHK5WnxkVi8fRhR%2B7%2BC2dklDOK4mxcV0oxJGSwrPS9ymccRo3%2B05dIV6fAhAPzhbOUHprfo%2BjS568ZjEjjV7z%2BJMB50R2S0BKd%2Bq2ITIzYy5RWPn8S4UNGa0vxdFnkADnO%2Flr1P%2Ba%2F8vPXQ4oEnN92740T3v0T%2Bze25AM2vNL4QGg9rfhR29HGMenFQ2WbryeF92gJifcazueHueDnZfGbkkc9eurIMcZoQTbLQ0qNLMs2TAz%2BcpD6szCQaSyBZh3ZGdSkeN0U4V%2BLP67x%2Fhv9ICxc6f6nNeWI9QnK%2BaT5yDtKRRPoFs1707EhS1iRNK71FsV9Cj7%2B2QlDoVEPWD%2BM9%2BLypvSOO0nBrMhQ1U1fUO2o78l1KoH90EwDDyqjHCWWOB%2FeAdOgDTa4GyWWWGKxxNU7JdrPR%2BHiGeyVRF1bu9ou3jrndtsNu1s51ETwQAzT5%2B4QkqZz2oNGRT4hyY%2FdC5HJ6om%2B6KElEsfrsYWGGEP7H2mUMd%2Fs6Fk%2Flpa96bGVjCiMCBLaUQfpfpCmIII8IzsEMLeIqsIGOqUBl3oYyRJZ7DlOY3pBHU3Sv5OHCAFaKWLX6rGHsuwbm2WqPNSZRYUQq8yoObjgmCzoJHcVg1oDJsBnTH%2BcLwqA1F%2FfgDbivQbfZF5n%2F45Zp%2FgDV%2FgJB78RfqlKZwQN1zxfR7C0oDvupcWgPgw9JDee0xvGhpM2ApiXZOAb3pXbw8%2FB%2Feftsff04qojJiIb6DUrkcnejbX7tMjB6OhOXigPZ8Z%2F5iXv&X-Amz-Signature=d0d87f377373d5d2ec2e49fabc0b5f3c1a195fa9db71d71d53ef56bf01bf89b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CNFXOU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD4Gc4Yhkuz1n10n9c5F4uwgnzi2tHDnlPH5zHjWGZ3TAIgdNlaGQmuBtRGl4hRsWzMycdN3QC9N%2BTwOYaFHc1JHa4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGsBn1v8oPM8XTnUCrcAx0UqdRVCfZiJ7uX234tNm2CEnz1SlkDy4iX2XlXGhHvvLDXg%2FzgqudsoRereRJ4UBWWAugPrjvszXHOWJSFSOYrA6ohG3nUJbAHK5WnxkVi8fRhR%2B7%2BC2dklDOK4mxcV0oxJGSwrPS9ymccRo3%2B05dIV6fAhAPzhbOUHprfo%2BjS568ZjEjjV7z%2BJMB50R2S0BKd%2Bq2ITIzYy5RWPn8S4UNGa0vxdFnkADnO%2Flr1P%2Ba%2F8vPXQ4oEnN92740T3v0T%2Bze25AM2vNL4QGg9rfhR29HGMenFQ2WbryeF92gJifcazueHueDnZfGbkkc9eurIMcZoQTbLQ0qNLMs2TAz%2BcpD6szCQaSyBZh3ZGdSkeN0U4V%2BLP67x%2Fhv9ICxc6f6nNeWI9QnK%2BaT5yDtKRRPoFs1707EhS1iRNK71FsV9Cj7%2B2QlDoVEPWD%2BM9%2BLypvSOO0nBrMhQ1U1fUO2o78l1KoH90EwDDyqjHCWWOB%2FeAdOgDTa4GyWWWGKxxNU7JdrPR%2BHiGeyVRF1bu9ou3jrndtsNu1s51ETwQAzT5%2B4QkqZz2oNGRT4hyY%2FdC5HJ6om%2B6KElEsfrsYWGGEP7H2mUMd%2Fs6Fk%2Flpa96bGVjCiMCBLaUQfpfpCmIII8IzsEMLeIqsIGOqUBl3oYyRJZ7DlOY3pBHU3Sv5OHCAFaKWLX6rGHsuwbm2WqPNSZRYUQq8yoObjgmCzoJHcVg1oDJsBnTH%2BcLwqA1F%2FfgDbivQbfZF5n%2F45Zp%2FgDV%2FgJB78RfqlKZwQN1zxfR7C0oDvupcWgPgw9JDee0xvGhpM2ApiXZOAb3pXbw8%2FB%2Feftsff04qojJiIb6DUrkcnejbX7tMjB6OhOXigPZ8Z%2F5iXv&X-Amz-Signature=40454e8a848c3825e6a0a130b0bf308c0d6ac18217a758800ec3609e47eb723a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CNFXOU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD4Gc4Yhkuz1n10n9c5F4uwgnzi2tHDnlPH5zHjWGZ3TAIgdNlaGQmuBtRGl4hRsWzMycdN3QC9N%2BTwOYaFHc1JHa4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGsBn1v8oPM8XTnUCrcAx0UqdRVCfZiJ7uX234tNm2CEnz1SlkDy4iX2XlXGhHvvLDXg%2FzgqudsoRereRJ4UBWWAugPrjvszXHOWJSFSOYrA6ohG3nUJbAHK5WnxkVi8fRhR%2B7%2BC2dklDOK4mxcV0oxJGSwrPS9ymccRo3%2B05dIV6fAhAPzhbOUHprfo%2BjS568ZjEjjV7z%2BJMB50R2S0BKd%2Bq2ITIzYy5RWPn8S4UNGa0vxdFnkADnO%2Flr1P%2Ba%2F8vPXQ4oEnN92740T3v0T%2Bze25AM2vNL4QGg9rfhR29HGMenFQ2WbryeF92gJifcazueHueDnZfGbkkc9eurIMcZoQTbLQ0qNLMs2TAz%2BcpD6szCQaSyBZh3ZGdSkeN0U4V%2BLP67x%2Fhv9ICxc6f6nNeWI9QnK%2BaT5yDtKRRPoFs1707EhS1iRNK71FsV9Cj7%2B2QlDoVEPWD%2BM9%2BLypvSOO0nBrMhQ1U1fUO2o78l1KoH90EwDDyqjHCWWOB%2FeAdOgDTa4GyWWWGKxxNU7JdrPR%2BHiGeyVRF1bu9ou3jrndtsNu1s51ETwQAzT5%2B4QkqZz2oNGRT4hyY%2FdC5HJ6om%2B6KElEsfrsYWGGEP7H2mUMd%2Fs6Fk%2Flpa96bGVjCiMCBLaUQfpfpCmIII8IzsEMLeIqsIGOqUBl3oYyRJZ7DlOY3pBHU3Sv5OHCAFaKWLX6rGHsuwbm2WqPNSZRYUQq8yoObjgmCzoJHcVg1oDJsBnTH%2BcLwqA1F%2FfgDbivQbfZF5n%2F45Zp%2FgDV%2FgJB78RfqlKZwQN1zxfR7C0oDvupcWgPgw9JDee0xvGhpM2ApiXZOAb3pXbw8%2FB%2Feftsff04qojJiIb6DUrkcnejbX7tMjB6OhOXigPZ8Z%2F5iXv&X-Amz-Signature=ec4e39ba8d0ffb972dfb3a5114396372e1f4f4a50181aa3de719e12c5a256eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CNFXOU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD4Gc4Yhkuz1n10n9c5F4uwgnzi2tHDnlPH5zHjWGZ3TAIgdNlaGQmuBtRGl4hRsWzMycdN3QC9N%2BTwOYaFHc1JHa4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGsBn1v8oPM8XTnUCrcAx0UqdRVCfZiJ7uX234tNm2CEnz1SlkDy4iX2XlXGhHvvLDXg%2FzgqudsoRereRJ4UBWWAugPrjvszXHOWJSFSOYrA6ohG3nUJbAHK5WnxkVi8fRhR%2B7%2BC2dklDOK4mxcV0oxJGSwrPS9ymccRo3%2B05dIV6fAhAPzhbOUHprfo%2BjS568ZjEjjV7z%2BJMB50R2S0BKd%2Bq2ITIzYy5RWPn8S4UNGa0vxdFnkADnO%2Flr1P%2Ba%2F8vPXQ4oEnN92740T3v0T%2Bze25AM2vNL4QGg9rfhR29HGMenFQ2WbryeF92gJifcazueHueDnZfGbkkc9eurIMcZoQTbLQ0qNLMs2TAz%2BcpD6szCQaSyBZh3ZGdSkeN0U4V%2BLP67x%2Fhv9ICxc6f6nNeWI9QnK%2BaT5yDtKRRPoFs1707EhS1iRNK71FsV9Cj7%2B2QlDoVEPWD%2BM9%2BLypvSOO0nBrMhQ1U1fUO2o78l1KoH90EwDDyqjHCWWOB%2FeAdOgDTa4GyWWWGKxxNU7JdrPR%2BHiGeyVRF1bu9ou3jrndtsNu1s51ETwQAzT5%2B4QkqZz2oNGRT4hyY%2FdC5HJ6om%2B6KElEsfrsYWGGEP7H2mUMd%2Fs6Fk%2Flpa96bGVjCiMCBLaUQfpfpCmIII8IzsEMLeIqsIGOqUBl3oYyRJZ7DlOY3pBHU3Sv5OHCAFaKWLX6rGHsuwbm2WqPNSZRYUQq8yoObjgmCzoJHcVg1oDJsBnTH%2BcLwqA1F%2FfgDbivQbfZF5n%2F45Zp%2FgDV%2FgJB78RfqlKZwQN1zxfR7C0oDvupcWgPgw9JDee0xvGhpM2ApiXZOAb3pXbw8%2FB%2Feftsff04qojJiIb6DUrkcnejbX7tMjB6OhOXigPZ8Z%2F5iXv&X-Amz-Signature=288305c072fcd8c610173e8637aa1b3dd62e0a700a85ef69401450187f182372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
