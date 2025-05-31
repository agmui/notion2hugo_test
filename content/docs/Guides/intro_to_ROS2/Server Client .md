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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IU5PAA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsfSLKH3eV7qoT%2BusYOfoM3QfhQZVizeCyWfkhWt9bQIgcUsnK0nxWOx6c7IWfmPaol5G8MYJiiFwHgXdGuIqUv0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkf%2B%2BsBZRiWbyKeZCrcA1XITmU5aqOTYJEF40XgQ%2B%2BAWchVSh3l32Z%2BVn%2B2%2Fse1HJEarC6dCBRBwy4suyOfOII8mvwPzffuQpbXkSjOmVOz1c8OABdrFRQVlVmrlgLZZvthiXZDbZtoKRP2NdrEETlCDhTfWQlVvtgDpQ77ao6iQsG9Jtl%2BSnoBJVoM05g3Dr8fcWY9S972Geeh835jct%2BXlAyDMICouAvJxEWM%2FfLfwgxnnHM0O5rZfsbd42uZohJuYDjN6yosGCpj9OUgt9BxJKcUjp0KPykpmVbmYwS0f5enPJBzX5TFAGqeVB%2BcKE5oMJyNJOpmmoZfaXzLWq0Sn2VIk0zXpv8cvFDplgkJSGZGL%2FS1rdV3A%2Bby3DB2pQtZemZu5By5YSeP%2BoShUYZFhO77tKjzm%2Ff83qetvDNAOung1cuXxzPwn9JsfCPLKfSL1pmdNA2OVDhpp4ImGlI%2FAamsMo9KRKgFWmV9vDtA%2B6y5kNczet%2BGvu%2F7zYwfvfuMpzG%2Bmmatw19TzxAEvFteWRypUVSgW8iNAhdRiKdK%2BGF6QPbrWMEbKwz94qyqxkYXnT9APTWhIiNVCa%2B2xtVJH5evI3AqEnrycLbDHyedetDFhZ92ATFjELKpU647w3OjKmTN3rjYKcFVMIKE68EGOqUBeRQ1z0CPqGBDf%2FWGMP%2BX35Fomof%2Bjp7RAkuXnkabVuVSCANQNxE%2BEWbNLirV6x%2FlZ%2BA3s4ou1d%2BkZPzOprfT1zSySd%2B%2F%2BRWuHg3sxaUnOa7PCbDGH7Dv2LMgl%2F1FLPdrHCyp1CM96z%2B4eMlNNLOdVtr%2FFv5PcZ3I%2Fc5kb54L2tVaHWFK%2BODVAA2nAqLHs%2Bf17SWzjjjIPFlJfeXl5RQgBfrjNSaQ&X-Amz-Signature=effb065739496a10c9225a30888599c185ae530b6ecc406d6bf2368eb504f079&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IU5PAA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsfSLKH3eV7qoT%2BusYOfoM3QfhQZVizeCyWfkhWt9bQIgcUsnK0nxWOx6c7IWfmPaol5G8MYJiiFwHgXdGuIqUv0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkf%2B%2BsBZRiWbyKeZCrcA1XITmU5aqOTYJEF40XgQ%2B%2BAWchVSh3l32Z%2BVn%2B2%2Fse1HJEarC6dCBRBwy4suyOfOII8mvwPzffuQpbXkSjOmVOz1c8OABdrFRQVlVmrlgLZZvthiXZDbZtoKRP2NdrEETlCDhTfWQlVvtgDpQ77ao6iQsG9Jtl%2BSnoBJVoM05g3Dr8fcWY9S972Geeh835jct%2BXlAyDMICouAvJxEWM%2FfLfwgxnnHM0O5rZfsbd42uZohJuYDjN6yosGCpj9OUgt9BxJKcUjp0KPykpmVbmYwS0f5enPJBzX5TFAGqeVB%2BcKE5oMJyNJOpmmoZfaXzLWq0Sn2VIk0zXpv8cvFDplgkJSGZGL%2FS1rdV3A%2Bby3DB2pQtZemZu5By5YSeP%2BoShUYZFhO77tKjzm%2Ff83qetvDNAOung1cuXxzPwn9JsfCPLKfSL1pmdNA2OVDhpp4ImGlI%2FAamsMo9KRKgFWmV9vDtA%2B6y5kNczet%2BGvu%2F7zYwfvfuMpzG%2Bmmatw19TzxAEvFteWRypUVSgW8iNAhdRiKdK%2BGF6QPbrWMEbKwz94qyqxkYXnT9APTWhIiNVCa%2B2xtVJH5evI3AqEnrycLbDHyedetDFhZ92ATFjELKpU647w3OjKmTN3rjYKcFVMIKE68EGOqUBeRQ1z0CPqGBDf%2FWGMP%2BX35Fomof%2Bjp7RAkuXnkabVuVSCANQNxE%2BEWbNLirV6x%2FlZ%2BA3s4ou1d%2BkZPzOprfT1zSySd%2B%2F%2BRWuHg3sxaUnOa7PCbDGH7Dv2LMgl%2F1FLPdrHCyp1CM96z%2B4eMlNNLOdVtr%2FFv5PcZ3I%2Fc5kb54L2tVaHWFK%2BODVAA2nAqLHs%2Bf17SWzjjjIPFlJfeXl5RQgBfrjNSaQ&X-Amz-Signature=0b4827e181c84f04c129e525f1c6c9a2bb5b93c2aa58d92e6d6fd5f90f7231c4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IU5PAA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsfSLKH3eV7qoT%2BusYOfoM3QfhQZVizeCyWfkhWt9bQIgcUsnK0nxWOx6c7IWfmPaol5G8MYJiiFwHgXdGuIqUv0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkf%2B%2BsBZRiWbyKeZCrcA1XITmU5aqOTYJEF40XgQ%2B%2BAWchVSh3l32Z%2BVn%2B2%2Fse1HJEarC6dCBRBwy4suyOfOII8mvwPzffuQpbXkSjOmVOz1c8OABdrFRQVlVmrlgLZZvthiXZDbZtoKRP2NdrEETlCDhTfWQlVvtgDpQ77ao6iQsG9Jtl%2BSnoBJVoM05g3Dr8fcWY9S972Geeh835jct%2BXlAyDMICouAvJxEWM%2FfLfwgxnnHM0O5rZfsbd42uZohJuYDjN6yosGCpj9OUgt9BxJKcUjp0KPykpmVbmYwS0f5enPJBzX5TFAGqeVB%2BcKE5oMJyNJOpmmoZfaXzLWq0Sn2VIk0zXpv8cvFDplgkJSGZGL%2FS1rdV3A%2Bby3DB2pQtZemZu5By5YSeP%2BoShUYZFhO77tKjzm%2Ff83qetvDNAOung1cuXxzPwn9JsfCPLKfSL1pmdNA2OVDhpp4ImGlI%2FAamsMo9KRKgFWmV9vDtA%2B6y5kNczet%2BGvu%2F7zYwfvfuMpzG%2Bmmatw19TzxAEvFteWRypUVSgW8iNAhdRiKdK%2BGF6QPbrWMEbKwz94qyqxkYXnT9APTWhIiNVCa%2B2xtVJH5evI3AqEnrycLbDHyedetDFhZ92ATFjELKpU647w3OjKmTN3rjYKcFVMIKE68EGOqUBeRQ1z0CPqGBDf%2FWGMP%2BX35Fomof%2Bjp7RAkuXnkabVuVSCANQNxE%2BEWbNLirV6x%2FlZ%2BA3s4ou1d%2BkZPzOprfT1zSySd%2B%2F%2BRWuHg3sxaUnOa7PCbDGH7Dv2LMgl%2F1FLPdrHCyp1CM96z%2B4eMlNNLOdVtr%2FFv5PcZ3I%2Fc5kb54L2tVaHWFK%2BODVAA2nAqLHs%2Bf17SWzjjjIPFlJfeXl5RQgBfrjNSaQ&X-Amz-Signature=177921e0f3d2fb23aa95d504d2ce9adde1a6e97b2712d7c45db41e9b5f08f75d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IU5PAA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsfSLKH3eV7qoT%2BusYOfoM3QfhQZVizeCyWfkhWt9bQIgcUsnK0nxWOx6c7IWfmPaol5G8MYJiiFwHgXdGuIqUv0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkf%2B%2BsBZRiWbyKeZCrcA1XITmU5aqOTYJEF40XgQ%2B%2BAWchVSh3l32Z%2BVn%2B2%2Fse1HJEarC6dCBRBwy4suyOfOII8mvwPzffuQpbXkSjOmVOz1c8OABdrFRQVlVmrlgLZZvthiXZDbZtoKRP2NdrEETlCDhTfWQlVvtgDpQ77ao6iQsG9Jtl%2BSnoBJVoM05g3Dr8fcWY9S972Geeh835jct%2BXlAyDMICouAvJxEWM%2FfLfwgxnnHM0O5rZfsbd42uZohJuYDjN6yosGCpj9OUgt9BxJKcUjp0KPykpmVbmYwS0f5enPJBzX5TFAGqeVB%2BcKE5oMJyNJOpmmoZfaXzLWq0Sn2VIk0zXpv8cvFDplgkJSGZGL%2FS1rdV3A%2Bby3DB2pQtZemZu5By5YSeP%2BoShUYZFhO77tKjzm%2Ff83qetvDNAOung1cuXxzPwn9JsfCPLKfSL1pmdNA2OVDhpp4ImGlI%2FAamsMo9KRKgFWmV9vDtA%2B6y5kNczet%2BGvu%2F7zYwfvfuMpzG%2Bmmatw19TzxAEvFteWRypUVSgW8iNAhdRiKdK%2BGF6QPbrWMEbKwz94qyqxkYXnT9APTWhIiNVCa%2B2xtVJH5evI3AqEnrycLbDHyedetDFhZ92ATFjELKpU647w3OjKmTN3rjYKcFVMIKE68EGOqUBeRQ1z0CPqGBDf%2FWGMP%2BX35Fomof%2Bjp7RAkuXnkabVuVSCANQNxE%2BEWbNLirV6x%2FlZ%2BA3s4ou1d%2BkZPzOprfT1zSySd%2B%2F%2BRWuHg3sxaUnOa7PCbDGH7Dv2LMgl%2F1FLPdrHCyp1CM96z%2B4eMlNNLOdVtr%2FFv5PcZ3I%2Fc5kb54L2tVaHWFK%2BODVAA2nAqLHs%2Bf17SWzjjjIPFlJfeXl5RQgBfrjNSaQ&X-Amz-Signature=ca84e767ab9c1238c9f6541334ed099660a74400bd743af34410cbcaea2ac208&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IU5PAA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsfSLKH3eV7qoT%2BusYOfoM3QfhQZVizeCyWfkhWt9bQIgcUsnK0nxWOx6c7IWfmPaol5G8MYJiiFwHgXdGuIqUv0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkf%2B%2BsBZRiWbyKeZCrcA1XITmU5aqOTYJEF40XgQ%2B%2BAWchVSh3l32Z%2BVn%2B2%2Fse1HJEarC6dCBRBwy4suyOfOII8mvwPzffuQpbXkSjOmVOz1c8OABdrFRQVlVmrlgLZZvthiXZDbZtoKRP2NdrEETlCDhTfWQlVvtgDpQ77ao6iQsG9Jtl%2BSnoBJVoM05g3Dr8fcWY9S972Geeh835jct%2BXlAyDMICouAvJxEWM%2FfLfwgxnnHM0O5rZfsbd42uZohJuYDjN6yosGCpj9OUgt9BxJKcUjp0KPykpmVbmYwS0f5enPJBzX5TFAGqeVB%2BcKE5oMJyNJOpmmoZfaXzLWq0Sn2VIk0zXpv8cvFDplgkJSGZGL%2FS1rdV3A%2Bby3DB2pQtZemZu5By5YSeP%2BoShUYZFhO77tKjzm%2Ff83qetvDNAOung1cuXxzPwn9JsfCPLKfSL1pmdNA2OVDhpp4ImGlI%2FAamsMo9KRKgFWmV9vDtA%2B6y5kNczet%2BGvu%2F7zYwfvfuMpzG%2Bmmatw19TzxAEvFteWRypUVSgW8iNAhdRiKdK%2BGF6QPbrWMEbKwz94qyqxkYXnT9APTWhIiNVCa%2B2xtVJH5evI3AqEnrycLbDHyedetDFhZ92ATFjELKpU647w3OjKmTN3rjYKcFVMIKE68EGOqUBeRQ1z0CPqGBDf%2FWGMP%2BX35Fomof%2Bjp7RAkuXnkabVuVSCANQNxE%2BEWbNLirV6x%2FlZ%2BA3s4ou1d%2BkZPzOprfT1zSySd%2B%2F%2BRWuHg3sxaUnOa7PCbDGH7Dv2LMgl%2F1FLPdrHCyp1CM96z%2B4eMlNNLOdVtr%2FFv5PcZ3I%2Fc5kb54L2tVaHWFK%2BODVAA2nAqLHs%2Bf17SWzjjjIPFlJfeXl5RQgBfrjNSaQ&X-Amz-Signature=1544f72f79bfe9e37538f8fd53728843ce0ac5733486caa2ab2d35547512ba5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
