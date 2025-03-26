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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDK4WKI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQxsRhfO055DYeohIPHdUEgAp8eyBYpu9JcgqSST6%2FxAiEA6z%2FPESVTTG0aYogn5vjuvXqRotOufq0JRWebMO7%2B7bAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAnStzFDFIM%2BnYhyaCrcA7l4BacDsDY6WUUnSKGRdooiZLxcJWbFGVp8Ml1OTYmKRcMJjAGng5cKFsJdeT%2FqFeHA6n7qmqSJpSJYjhjZMzD6C6rn5DkaAqfZUJLJ0SZO8SSzhCtoNkJsqn68Wm%2F1QUOVhiQVZJL1CWXZoeivTSIaknaz38MQ98lY2otb2oymT4TbcUWXGgF5xTQYJLa9u5el%2BBDzP0VmpTl6EXuFxBuOpP2cRa%2FumhhMGMuuiKYpo4DZ5CRTNcm7%2FkWt%2Bv0%2Frsy7Dhmo5Qb9Utfn9%2FjCozIVSai%2BWMAfRt8ua0rxeOQuf4fT5sz6f49eBSf6idzo3MpdEc6HBnXkC1DTZeAaGjJfTUQ6OECv%2F9ub%2FF9JiPv6czyV6tRFjqm%2BCo2gmHLC9T2OQ%2BC8FVIdHepwzhm6m5yY5HDLLeyb8%2BwGOZqGc6PeoYyJd%2BTScHG00y3ZWnY2%2FDLuJ%2F2socjm%2FSvqT0rFbDAB%2FBVdWQus0xWgML4c%2BCbKE39wfAPfuahYAnHjlbP41YfTOKQvBkL0NWj29K7Fxu3sPyIggarA7qQdWRCQRHxXs7u%2FwFXbOPoOV%2F%2ByWH6uQgGVw1hSrRIz6bT6VixDoWp2jeE8INESUrUo7uyliMo%2BONnIqrXPSJpxylheMKL8j78GOqUB51eG2g1AYSTFc7lEyQ47hQOZ9yFUf3crnYnVo3lUoudOI%2FexCdFoYw3a8CnulZTX3V2zz%2FmOOB8bnVOwpdR5QHFB3KXAA6E9w3%2FjdVWmjWxicvHZFHiXjgrezcdQYDTaEY1n74DWbgdKsp9ElEosBnG2ThviBtCLDLqNqW0rgxuJ4KkyTies%2BEyq6jgWm1tO9xL9nxSf1HHqLBt%2Bg0y%2B%2Fi04pHoG&X-Amz-Signature=7258f42a6dc64d93f9414ed75ab1eb1a637d3d605e12ed2b9ace4e7802476105&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDK4WKI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQxsRhfO055DYeohIPHdUEgAp8eyBYpu9JcgqSST6%2FxAiEA6z%2FPESVTTG0aYogn5vjuvXqRotOufq0JRWebMO7%2B7bAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAnStzFDFIM%2BnYhyaCrcA7l4BacDsDY6WUUnSKGRdooiZLxcJWbFGVp8Ml1OTYmKRcMJjAGng5cKFsJdeT%2FqFeHA6n7qmqSJpSJYjhjZMzD6C6rn5DkaAqfZUJLJ0SZO8SSzhCtoNkJsqn68Wm%2F1QUOVhiQVZJL1CWXZoeivTSIaknaz38MQ98lY2otb2oymT4TbcUWXGgF5xTQYJLa9u5el%2BBDzP0VmpTl6EXuFxBuOpP2cRa%2FumhhMGMuuiKYpo4DZ5CRTNcm7%2FkWt%2Bv0%2Frsy7Dhmo5Qb9Utfn9%2FjCozIVSai%2BWMAfRt8ua0rxeOQuf4fT5sz6f49eBSf6idzo3MpdEc6HBnXkC1DTZeAaGjJfTUQ6OECv%2F9ub%2FF9JiPv6czyV6tRFjqm%2BCo2gmHLC9T2OQ%2BC8FVIdHepwzhm6m5yY5HDLLeyb8%2BwGOZqGc6PeoYyJd%2BTScHG00y3ZWnY2%2FDLuJ%2F2socjm%2FSvqT0rFbDAB%2FBVdWQus0xWgML4c%2BCbKE39wfAPfuahYAnHjlbP41YfTOKQvBkL0NWj29K7Fxu3sPyIggarA7qQdWRCQRHxXs7u%2FwFXbOPoOV%2F%2ByWH6uQgGVw1hSrRIz6bT6VixDoWp2jeE8INESUrUo7uyliMo%2BONnIqrXPSJpxylheMKL8j78GOqUB51eG2g1AYSTFc7lEyQ47hQOZ9yFUf3crnYnVo3lUoudOI%2FexCdFoYw3a8CnulZTX3V2zz%2FmOOB8bnVOwpdR5QHFB3KXAA6E9w3%2FjdVWmjWxicvHZFHiXjgrezcdQYDTaEY1n74DWbgdKsp9ElEosBnG2ThviBtCLDLqNqW0rgxuJ4KkyTies%2BEyq6jgWm1tO9xL9nxSf1HHqLBt%2Bg0y%2B%2Fi04pHoG&X-Amz-Signature=adb22abded7020bff4a25a0db2326426f12cb5e94eb495efd4756cc9734953d4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDK4WKI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQxsRhfO055DYeohIPHdUEgAp8eyBYpu9JcgqSST6%2FxAiEA6z%2FPESVTTG0aYogn5vjuvXqRotOufq0JRWebMO7%2B7bAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAnStzFDFIM%2BnYhyaCrcA7l4BacDsDY6WUUnSKGRdooiZLxcJWbFGVp8Ml1OTYmKRcMJjAGng5cKFsJdeT%2FqFeHA6n7qmqSJpSJYjhjZMzD6C6rn5DkaAqfZUJLJ0SZO8SSzhCtoNkJsqn68Wm%2F1QUOVhiQVZJL1CWXZoeivTSIaknaz38MQ98lY2otb2oymT4TbcUWXGgF5xTQYJLa9u5el%2BBDzP0VmpTl6EXuFxBuOpP2cRa%2FumhhMGMuuiKYpo4DZ5CRTNcm7%2FkWt%2Bv0%2Frsy7Dhmo5Qb9Utfn9%2FjCozIVSai%2BWMAfRt8ua0rxeOQuf4fT5sz6f49eBSf6idzo3MpdEc6HBnXkC1DTZeAaGjJfTUQ6OECv%2F9ub%2FF9JiPv6czyV6tRFjqm%2BCo2gmHLC9T2OQ%2BC8FVIdHepwzhm6m5yY5HDLLeyb8%2BwGOZqGc6PeoYyJd%2BTScHG00y3ZWnY2%2FDLuJ%2F2socjm%2FSvqT0rFbDAB%2FBVdWQus0xWgML4c%2BCbKE39wfAPfuahYAnHjlbP41YfTOKQvBkL0NWj29K7Fxu3sPyIggarA7qQdWRCQRHxXs7u%2FwFXbOPoOV%2F%2ByWH6uQgGVw1hSrRIz6bT6VixDoWp2jeE8INESUrUo7uyliMo%2BONnIqrXPSJpxylheMKL8j78GOqUB51eG2g1AYSTFc7lEyQ47hQOZ9yFUf3crnYnVo3lUoudOI%2FexCdFoYw3a8CnulZTX3V2zz%2FmOOB8bnVOwpdR5QHFB3KXAA6E9w3%2FjdVWmjWxicvHZFHiXjgrezcdQYDTaEY1n74DWbgdKsp9ElEosBnG2ThviBtCLDLqNqW0rgxuJ4KkyTies%2BEyq6jgWm1tO9xL9nxSf1HHqLBt%2Bg0y%2B%2Fi04pHoG&X-Amz-Signature=dbca1fe9463fdd864ecb2769c5d7b53e4d38d5b45b249887f12b23245f7acaff&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDK4WKI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQxsRhfO055DYeohIPHdUEgAp8eyBYpu9JcgqSST6%2FxAiEA6z%2FPESVTTG0aYogn5vjuvXqRotOufq0JRWebMO7%2B7bAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAnStzFDFIM%2BnYhyaCrcA7l4BacDsDY6WUUnSKGRdooiZLxcJWbFGVp8Ml1OTYmKRcMJjAGng5cKFsJdeT%2FqFeHA6n7qmqSJpSJYjhjZMzD6C6rn5DkaAqfZUJLJ0SZO8SSzhCtoNkJsqn68Wm%2F1QUOVhiQVZJL1CWXZoeivTSIaknaz38MQ98lY2otb2oymT4TbcUWXGgF5xTQYJLa9u5el%2BBDzP0VmpTl6EXuFxBuOpP2cRa%2FumhhMGMuuiKYpo4DZ5CRTNcm7%2FkWt%2Bv0%2Frsy7Dhmo5Qb9Utfn9%2FjCozIVSai%2BWMAfRt8ua0rxeOQuf4fT5sz6f49eBSf6idzo3MpdEc6HBnXkC1DTZeAaGjJfTUQ6OECv%2F9ub%2FF9JiPv6czyV6tRFjqm%2BCo2gmHLC9T2OQ%2BC8FVIdHepwzhm6m5yY5HDLLeyb8%2BwGOZqGc6PeoYyJd%2BTScHG00y3ZWnY2%2FDLuJ%2F2socjm%2FSvqT0rFbDAB%2FBVdWQus0xWgML4c%2BCbKE39wfAPfuahYAnHjlbP41YfTOKQvBkL0NWj29K7Fxu3sPyIggarA7qQdWRCQRHxXs7u%2FwFXbOPoOV%2F%2ByWH6uQgGVw1hSrRIz6bT6VixDoWp2jeE8INESUrUo7uyliMo%2BONnIqrXPSJpxylheMKL8j78GOqUB51eG2g1AYSTFc7lEyQ47hQOZ9yFUf3crnYnVo3lUoudOI%2FexCdFoYw3a8CnulZTX3V2zz%2FmOOB8bnVOwpdR5QHFB3KXAA6E9w3%2FjdVWmjWxicvHZFHiXjgrezcdQYDTaEY1n74DWbgdKsp9ElEosBnG2ThviBtCLDLqNqW0rgxuJ4KkyTies%2BEyq6jgWm1tO9xL9nxSf1HHqLBt%2Bg0y%2B%2Fi04pHoG&X-Amz-Signature=d0e56c3ec7ed7bb0fba7e6a33174d56d2d1c26aa1eed13d6019e705bf987f1f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDK4WKI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQxsRhfO055DYeohIPHdUEgAp8eyBYpu9JcgqSST6%2FxAiEA6z%2FPESVTTG0aYogn5vjuvXqRotOufq0JRWebMO7%2B7bAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAnStzFDFIM%2BnYhyaCrcA7l4BacDsDY6WUUnSKGRdooiZLxcJWbFGVp8Ml1OTYmKRcMJjAGng5cKFsJdeT%2FqFeHA6n7qmqSJpSJYjhjZMzD6C6rn5DkaAqfZUJLJ0SZO8SSzhCtoNkJsqn68Wm%2F1QUOVhiQVZJL1CWXZoeivTSIaknaz38MQ98lY2otb2oymT4TbcUWXGgF5xTQYJLa9u5el%2BBDzP0VmpTl6EXuFxBuOpP2cRa%2FumhhMGMuuiKYpo4DZ5CRTNcm7%2FkWt%2Bv0%2Frsy7Dhmo5Qb9Utfn9%2FjCozIVSai%2BWMAfRt8ua0rxeOQuf4fT5sz6f49eBSf6idzo3MpdEc6HBnXkC1DTZeAaGjJfTUQ6OECv%2F9ub%2FF9JiPv6czyV6tRFjqm%2BCo2gmHLC9T2OQ%2BC8FVIdHepwzhm6m5yY5HDLLeyb8%2BwGOZqGc6PeoYyJd%2BTScHG00y3ZWnY2%2FDLuJ%2F2socjm%2FSvqT0rFbDAB%2FBVdWQus0xWgML4c%2BCbKE39wfAPfuahYAnHjlbP41YfTOKQvBkL0NWj29K7Fxu3sPyIggarA7qQdWRCQRHxXs7u%2FwFXbOPoOV%2F%2ByWH6uQgGVw1hSrRIz6bT6VixDoWp2jeE8INESUrUo7uyliMo%2BONnIqrXPSJpxylheMKL8j78GOqUB51eG2g1AYSTFc7lEyQ47hQOZ9yFUf3crnYnVo3lUoudOI%2FexCdFoYw3a8CnulZTX3V2zz%2FmOOB8bnVOwpdR5QHFB3KXAA6E9w3%2FjdVWmjWxicvHZFHiXjgrezcdQYDTaEY1n74DWbgdKsp9ElEosBnG2ThviBtCLDLqNqW0rgxuJ4KkyTies%2BEyq6jgWm1tO9xL9nxSf1HHqLBt%2Bg0y%2B%2Fi04pHoG&X-Amz-Signature=ec71d77dfcafa031701e3fcb937a0f7ad0fd90524999d1473f2bad5fed712588&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
