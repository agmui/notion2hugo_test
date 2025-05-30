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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PSS4RJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEZGiL9pht4lKFmivsWFyp0VBHBATI%2Fk%2BDdveR3akMjwIhALXPnymRodKa%2BSEFFaZOiT1ShiASQLrLZcTCzaT8%2FfQRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya5KxNrTvzgWnrk6Yq3APsVjgpXjScGHkQO8A6pvixRzKyKJ8L2x0rocrBarVGbO15v5NWSxVvV7ffT4AtW2WdETbksK7UcTBFIt%2FntoIut52KJoGU99Ui%2BTf7gog7aFq5eW8TKQ8QYPFh9JCB5m1gv0Oy8XBzvNEVv91ZeupPJXr6wjILjjp%2BbgVsDhrZvHTo29D2xAkjKYXCuR2Dc8%2F%2FnBwLMZVKNynX4erpJdFbLgrREr%2FBqLA5YdLLH93XZk9XelSL%2Bte3Bq4yw7eoq0uISZx2ZrzJJis4V2GjrKgOspHwCdYx%2Fwaf1efyeci6UkdSrzhIraHsV1aRhS0NFkGhhUXSGkvjbdzlUV4KMZYHyELuXxqhvKWgvXKiKlj8YHHR4C7HfKKWQ8Fn%2FjvPHtRLAcKQh%2FFxub0QryjyGNKbBMz3xTt4X7kgk02TRmzdotgZl8zYgj9j3S2V4bNPvauDZPXky0%2Fv3%2BxyocB%2FIGVSio%2B2SZA4QeFBbfwUMITonHpnGj3KghzH2mZKOwn3EZLshhXGLeNzeZUDxavYSG6c41eNmGocS0Aq4VXJtoGGONtUwjCACRWkBICz%2BUhCaobczT3fgm2LAOJ%2Bi88N18ww8yuqOU86Fhazw%2BljcI01E7VSUNNffNBc0AiELzD43OXBBjqkAVTvZ3C3IMieWX0rQYtxy2o7Isuy45ebmkYXbDV1pFgs5PHndTHUr6AEmXj0KuCV%2Bx6Ig8eRoDQCpHVJMXXEBttgxkCuq52MNm7asH%2FF8dycha03X%2B13H1EhA2EZyZGeKnn4k5wbe7ppUx1H7XyA%2FGIla5iUCfwvshvtjDhMEPGqWNj%2FpQ1mM%2FlGLoTk1dnRVJdTeohJL%2FujNCkF9864L2q7Q1CU&X-Amz-Signature=be009eeb673ec919829627273b48484f2f89d2dc61c02dc9fc9c6b11b1d391f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PSS4RJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEZGiL9pht4lKFmivsWFyp0VBHBATI%2Fk%2BDdveR3akMjwIhALXPnymRodKa%2BSEFFaZOiT1ShiASQLrLZcTCzaT8%2FfQRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya5KxNrTvzgWnrk6Yq3APsVjgpXjScGHkQO8A6pvixRzKyKJ8L2x0rocrBarVGbO15v5NWSxVvV7ffT4AtW2WdETbksK7UcTBFIt%2FntoIut52KJoGU99Ui%2BTf7gog7aFq5eW8TKQ8QYPFh9JCB5m1gv0Oy8XBzvNEVv91ZeupPJXr6wjILjjp%2BbgVsDhrZvHTo29D2xAkjKYXCuR2Dc8%2F%2FnBwLMZVKNynX4erpJdFbLgrREr%2FBqLA5YdLLH93XZk9XelSL%2Bte3Bq4yw7eoq0uISZx2ZrzJJis4V2GjrKgOspHwCdYx%2Fwaf1efyeci6UkdSrzhIraHsV1aRhS0NFkGhhUXSGkvjbdzlUV4KMZYHyELuXxqhvKWgvXKiKlj8YHHR4C7HfKKWQ8Fn%2FjvPHtRLAcKQh%2FFxub0QryjyGNKbBMz3xTt4X7kgk02TRmzdotgZl8zYgj9j3S2V4bNPvauDZPXky0%2Fv3%2BxyocB%2FIGVSio%2B2SZA4QeFBbfwUMITonHpnGj3KghzH2mZKOwn3EZLshhXGLeNzeZUDxavYSG6c41eNmGocS0Aq4VXJtoGGONtUwjCACRWkBICz%2BUhCaobczT3fgm2LAOJ%2Bi88N18ww8yuqOU86Fhazw%2BljcI01E7VSUNNffNBc0AiELzD43OXBBjqkAVTvZ3C3IMieWX0rQYtxy2o7Isuy45ebmkYXbDV1pFgs5PHndTHUr6AEmXj0KuCV%2Bx6Ig8eRoDQCpHVJMXXEBttgxkCuq52MNm7asH%2FF8dycha03X%2B13H1EhA2EZyZGeKnn4k5wbe7ppUx1H7XyA%2FGIla5iUCfwvshvtjDhMEPGqWNj%2FpQ1mM%2FlGLoTk1dnRVJdTeohJL%2FujNCkF9864L2q7Q1CU&X-Amz-Signature=80bf621fbe9a5e2801f0f606b4f45b139d33cea28fb9f120b7979b13a318d228&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PSS4RJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEZGiL9pht4lKFmivsWFyp0VBHBATI%2Fk%2BDdveR3akMjwIhALXPnymRodKa%2BSEFFaZOiT1ShiASQLrLZcTCzaT8%2FfQRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya5KxNrTvzgWnrk6Yq3APsVjgpXjScGHkQO8A6pvixRzKyKJ8L2x0rocrBarVGbO15v5NWSxVvV7ffT4AtW2WdETbksK7UcTBFIt%2FntoIut52KJoGU99Ui%2BTf7gog7aFq5eW8TKQ8QYPFh9JCB5m1gv0Oy8XBzvNEVv91ZeupPJXr6wjILjjp%2BbgVsDhrZvHTo29D2xAkjKYXCuR2Dc8%2F%2FnBwLMZVKNynX4erpJdFbLgrREr%2FBqLA5YdLLH93XZk9XelSL%2Bte3Bq4yw7eoq0uISZx2ZrzJJis4V2GjrKgOspHwCdYx%2Fwaf1efyeci6UkdSrzhIraHsV1aRhS0NFkGhhUXSGkvjbdzlUV4KMZYHyELuXxqhvKWgvXKiKlj8YHHR4C7HfKKWQ8Fn%2FjvPHtRLAcKQh%2FFxub0QryjyGNKbBMz3xTt4X7kgk02TRmzdotgZl8zYgj9j3S2V4bNPvauDZPXky0%2Fv3%2BxyocB%2FIGVSio%2B2SZA4QeFBbfwUMITonHpnGj3KghzH2mZKOwn3EZLshhXGLeNzeZUDxavYSG6c41eNmGocS0Aq4VXJtoGGONtUwjCACRWkBICz%2BUhCaobczT3fgm2LAOJ%2Bi88N18ww8yuqOU86Fhazw%2BljcI01E7VSUNNffNBc0AiELzD43OXBBjqkAVTvZ3C3IMieWX0rQYtxy2o7Isuy45ebmkYXbDV1pFgs5PHndTHUr6AEmXj0KuCV%2Bx6Ig8eRoDQCpHVJMXXEBttgxkCuq52MNm7asH%2FF8dycha03X%2B13H1EhA2EZyZGeKnn4k5wbe7ppUx1H7XyA%2FGIla5iUCfwvshvtjDhMEPGqWNj%2FpQ1mM%2FlGLoTk1dnRVJdTeohJL%2FujNCkF9864L2q7Q1CU&X-Amz-Signature=57cb9fb01fd3ffaa923174619f221eab0bcab50d92880acb0e2dfc979fb59cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PSS4RJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEZGiL9pht4lKFmivsWFyp0VBHBATI%2Fk%2BDdveR3akMjwIhALXPnymRodKa%2BSEFFaZOiT1ShiASQLrLZcTCzaT8%2FfQRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya5KxNrTvzgWnrk6Yq3APsVjgpXjScGHkQO8A6pvixRzKyKJ8L2x0rocrBarVGbO15v5NWSxVvV7ffT4AtW2WdETbksK7UcTBFIt%2FntoIut52KJoGU99Ui%2BTf7gog7aFq5eW8TKQ8QYPFh9JCB5m1gv0Oy8XBzvNEVv91ZeupPJXr6wjILjjp%2BbgVsDhrZvHTo29D2xAkjKYXCuR2Dc8%2F%2FnBwLMZVKNynX4erpJdFbLgrREr%2FBqLA5YdLLH93XZk9XelSL%2Bte3Bq4yw7eoq0uISZx2ZrzJJis4V2GjrKgOspHwCdYx%2Fwaf1efyeci6UkdSrzhIraHsV1aRhS0NFkGhhUXSGkvjbdzlUV4KMZYHyELuXxqhvKWgvXKiKlj8YHHR4C7HfKKWQ8Fn%2FjvPHtRLAcKQh%2FFxub0QryjyGNKbBMz3xTt4X7kgk02TRmzdotgZl8zYgj9j3S2V4bNPvauDZPXky0%2Fv3%2BxyocB%2FIGVSio%2B2SZA4QeFBbfwUMITonHpnGj3KghzH2mZKOwn3EZLshhXGLeNzeZUDxavYSG6c41eNmGocS0Aq4VXJtoGGONtUwjCACRWkBICz%2BUhCaobczT3fgm2LAOJ%2Bi88N18ww8yuqOU86Fhazw%2BljcI01E7VSUNNffNBc0AiELzD43OXBBjqkAVTvZ3C3IMieWX0rQYtxy2o7Isuy45ebmkYXbDV1pFgs5PHndTHUr6AEmXj0KuCV%2Bx6Ig8eRoDQCpHVJMXXEBttgxkCuq52MNm7asH%2FF8dycha03X%2B13H1EhA2EZyZGeKnn4k5wbe7ppUx1H7XyA%2FGIla5iUCfwvshvtjDhMEPGqWNj%2FpQ1mM%2FlGLoTk1dnRVJdTeohJL%2FujNCkF9864L2q7Q1CU&X-Amz-Signature=618a79f1dabc46bebef7c42e06251a0d55a64edc7cba5fc17bab7c70c4f6e706&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PSS4RJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEZGiL9pht4lKFmivsWFyp0VBHBATI%2Fk%2BDdveR3akMjwIhALXPnymRodKa%2BSEFFaZOiT1ShiASQLrLZcTCzaT8%2FfQRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya5KxNrTvzgWnrk6Yq3APsVjgpXjScGHkQO8A6pvixRzKyKJ8L2x0rocrBarVGbO15v5NWSxVvV7ffT4AtW2WdETbksK7UcTBFIt%2FntoIut52KJoGU99Ui%2BTf7gog7aFq5eW8TKQ8QYPFh9JCB5m1gv0Oy8XBzvNEVv91ZeupPJXr6wjILjjp%2BbgVsDhrZvHTo29D2xAkjKYXCuR2Dc8%2F%2FnBwLMZVKNynX4erpJdFbLgrREr%2FBqLA5YdLLH93XZk9XelSL%2Bte3Bq4yw7eoq0uISZx2ZrzJJis4V2GjrKgOspHwCdYx%2Fwaf1efyeci6UkdSrzhIraHsV1aRhS0NFkGhhUXSGkvjbdzlUV4KMZYHyELuXxqhvKWgvXKiKlj8YHHR4C7HfKKWQ8Fn%2FjvPHtRLAcKQh%2FFxub0QryjyGNKbBMz3xTt4X7kgk02TRmzdotgZl8zYgj9j3S2V4bNPvauDZPXky0%2Fv3%2BxyocB%2FIGVSio%2B2SZA4QeFBbfwUMITonHpnGj3KghzH2mZKOwn3EZLshhXGLeNzeZUDxavYSG6c41eNmGocS0Aq4VXJtoGGONtUwjCACRWkBICz%2BUhCaobczT3fgm2LAOJ%2Bi88N18ww8yuqOU86Fhazw%2BljcI01E7VSUNNffNBc0AiELzD43OXBBjqkAVTvZ3C3IMieWX0rQYtxy2o7Isuy45ebmkYXbDV1pFgs5PHndTHUr6AEmXj0KuCV%2Bx6Ig8eRoDQCpHVJMXXEBttgxkCuq52MNm7asH%2FF8dycha03X%2B13H1EhA2EZyZGeKnn4k5wbe7ppUx1H7XyA%2FGIla5iUCfwvshvtjDhMEPGqWNj%2FpQ1mM%2FlGLoTk1dnRVJdTeohJL%2FujNCkF9864L2q7Q1CU&X-Amz-Signature=8b6ee265f5582fe784d8de9eca3148ce0e33fc2e20ade79ccb6dd847b9c91a85&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
