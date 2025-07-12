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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6OLH3R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIQaz39a1uyuP4VtAR656QiwzzueiBowGIyGAsgHp7%2BAiEAnrBKpYRYVjM4PQWqh2lDgM%2FITv0jBJE9U9qvlABHnCMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI%2Fd9JcqQGvEO7ySrcA7DXO847EtRYqDjD0vEFTysNiKbecfghqSpNuktFGsq2uwMGmvPb9JaNcVTuJbuVmhZmkR55V7kEnUXXtOMdklHOGcwKjkJsHzFt9KLZRkdniPsZxGw83fXOFptIJv62G683W04Y0K78lvx6GEggv5CjJWbpBEH8%2BgaRZq0J8fYAnk9J6SIIvaDZ5faTsUXgc36nbp8yT9GZfgzzTPl5ADSNykeH07tJqcNSWupry3ZDsHGe9yZrs2EjAyBuhiOzhONDo0RrCd0eAvMoVRBBLbmwGghOvRjhjrqAOHMguKbu%2Bjevzh9Qw9L%2FwqSfIQ0XT79uSsoM1%2FS3z1mvRUjbEkf6MgwZ7L%2BBX8XclSIxMHLFRJMxziVH15wj1fn1NUVZtI2jRldfBx8q2kvX7Uabp%2FMbv%2FrQYiRvgcjgucmjYE1St5m7VPAMOWg%2Bs71JTHz3e%2FREnqya8%2F1Vlabk69QchRHySHj8wSRzNv%2BB96YnrPxPIzsETgiW1gJsIBepibScKPlJ%2B2jFz6bnfVC1c3NBbyWmwNITEBDkOmDC1KwdreDOVDP5aoZ3VHV80NdiWs9rCrY2tkv%2BO2LqN%2Bj3BFnE3fE8RTYGB5dF7xY370XTxBuGomLIGuCs0VPOF4UFMPH8yMMGOqUBW%2FM1mj1ky7wZSjHKkv7PoNSXTZnUDuqiOmAGBpKUqmPGj7BlRBRS0pQMGsRK3MePOnw5uhUYf7jiU8RK6j7f%2BKjCYfCKM0Oh2JULMl5KeA9QGrI5VKAsMs8V%2F8DK3oxnCEuRnzGng2GypsaAyrNjQqg6Cc%2FKdz1D54gCT82Sukx737QLUigczl2ZTBDdb7U10%2FrAgmFPJ0CLV5h0S0nNs0Bw1VE6&X-Amz-Signature=92eab5e261a1014d09ecfcd4d997ce81cebf5803700b0c22ec83a88e1dbad0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6OLH3R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIQaz39a1uyuP4VtAR656QiwzzueiBowGIyGAsgHp7%2BAiEAnrBKpYRYVjM4PQWqh2lDgM%2FITv0jBJE9U9qvlABHnCMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI%2Fd9JcqQGvEO7ySrcA7DXO847EtRYqDjD0vEFTysNiKbecfghqSpNuktFGsq2uwMGmvPb9JaNcVTuJbuVmhZmkR55V7kEnUXXtOMdklHOGcwKjkJsHzFt9KLZRkdniPsZxGw83fXOFptIJv62G683W04Y0K78lvx6GEggv5CjJWbpBEH8%2BgaRZq0J8fYAnk9J6SIIvaDZ5faTsUXgc36nbp8yT9GZfgzzTPl5ADSNykeH07tJqcNSWupry3ZDsHGe9yZrs2EjAyBuhiOzhONDo0RrCd0eAvMoVRBBLbmwGghOvRjhjrqAOHMguKbu%2Bjevzh9Qw9L%2FwqSfIQ0XT79uSsoM1%2FS3z1mvRUjbEkf6MgwZ7L%2BBX8XclSIxMHLFRJMxziVH15wj1fn1NUVZtI2jRldfBx8q2kvX7Uabp%2FMbv%2FrQYiRvgcjgucmjYE1St5m7VPAMOWg%2Bs71JTHz3e%2FREnqya8%2F1Vlabk69QchRHySHj8wSRzNv%2BB96YnrPxPIzsETgiW1gJsIBepibScKPlJ%2B2jFz6bnfVC1c3NBbyWmwNITEBDkOmDC1KwdreDOVDP5aoZ3VHV80NdiWs9rCrY2tkv%2BO2LqN%2Bj3BFnE3fE8RTYGB5dF7xY370XTxBuGomLIGuCs0VPOF4UFMPH8yMMGOqUBW%2FM1mj1ky7wZSjHKkv7PoNSXTZnUDuqiOmAGBpKUqmPGj7BlRBRS0pQMGsRK3MePOnw5uhUYf7jiU8RK6j7f%2BKjCYfCKM0Oh2JULMl5KeA9QGrI5VKAsMs8V%2F8DK3oxnCEuRnzGng2GypsaAyrNjQqg6Cc%2FKdz1D54gCT82Sukx737QLUigczl2ZTBDdb7U10%2FrAgmFPJ0CLV5h0S0nNs0Bw1VE6&X-Amz-Signature=63b8ac59111a2f010e3ea7c728ae49551e5a41df344e1276d362fbe0b873ba43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6OLH3R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIQaz39a1uyuP4VtAR656QiwzzueiBowGIyGAsgHp7%2BAiEAnrBKpYRYVjM4PQWqh2lDgM%2FITv0jBJE9U9qvlABHnCMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI%2Fd9JcqQGvEO7ySrcA7DXO847EtRYqDjD0vEFTysNiKbecfghqSpNuktFGsq2uwMGmvPb9JaNcVTuJbuVmhZmkR55V7kEnUXXtOMdklHOGcwKjkJsHzFt9KLZRkdniPsZxGw83fXOFptIJv62G683W04Y0K78lvx6GEggv5CjJWbpBEH8%2BgaRZq0J8fYAnk9J6SIIvaDZ5faTsUXgc36nbp8yT9GZfgzzTPl5ADSNykeH07tJqcNSWupry3ZDsHGe9yZrs2EjAyBuhiOzhONDo0RrCd0eAvMoVRBBLbmwGghOvRjhjrqAOHMguKbu%2Bjevzh9Qw9L%2FwqSfIQ0XT79uSsoM1%2FS3z1mvRUjbEkf6MgwZ7L%2BBX8XclSIxMHLFRJMxziVH15wj1fn1NUVZtI2jRldfBx8q2kvX7Uabp%2FMbv%2FrQYiRvgcjgucmjYE1St5m7VPAMOWg%2Bs71JTHz3e%2FREnqya8%2F1Vlabk69QchRHySHj8wSRzNv%2BB96YnrPxPIzsETgiW1gJsIBepibScKPlJ%2B2jFz6bnfVC1c3NBbyWmwNITEBDkOmDC1KwdreDOVDP5aoZ3VHV80NdiWs9rCrY2tkv%2BO2LqN%2Bj3BFnE3fE8RTYGB5dF7xY370XTxBuGomLIGuCs0VPOF4UFMPH8yMMGOqUBW%2FM1mj1ky7wZSjHKkv7PoNSXTZnUDuqiOmAGBpKUqmPGj7BlRBRS0pQMGsRK3MePOnw5uhUYf7jiU8RK6j7f%2BKjCYfCKM0Oh2JULMl5KeA9QGrI5VKAsMs8V%2F8DK3oxnCEuRnzGng2GypsaAyrNjQqg6Cc%2FKdz1D54gCT82Sukx737QLUigczl2ZTBDdb7U10%2FrAgmFPJ0CLV5h0S0nNs0Bw1VE6&X-Amz-Signature=2f9b983fd004c3bf55cd6ce1619153967b3239c623922dacc26b95012abb2928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6OLH3R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIQaz39a1uyuP4VtAR656QiwzzueiBowGIyGAsgHp7%2BAiEAnrBKpYRYVjM4PQWqh2lDgM%2FITv0jBJE9U9qvlABHnCMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI%2Fd9JcqQGvEO7ySrcA7DXO847EtRYqDjD0vEFTysNiKbecfghqSpNuktFGsq2uwMGmvPb9JaNcVTuJbuVmhZmkR55V7kEnUXXtOMdklHOGcwKjkJsHzFt9KLZRkdniPsZxGw83fXOFptIJv62G683W04Y0K78lvx6GEggv5CjJWbpBEH8%2BgaRZq0J8fYAnk9J6SIIvaDZ5faTsUXgc36nbp8yT9GZfgzzTPl5ADSNykeH07tJqcNSWupry3ZDsHGe9yZrs2EjAyBuhiOzhONDo0RrCd0eAvMoVRBBLbmwGghOvRjhjrqAOHMguKbu%2Bjevzh9Qw9L%2FwqSfIQ0XT79uSsoM1%2FS3z1mvRUjbEkf6MgwZ7L%2BBX8XclSIxMHLFRJMxziVH15wj1fn1NUVZtI2jRldfBx8q2kvX7Uabp%2FMbv%2FrQYiRvgcjgucmjYE1St5m7VPAMOWg%2Bs71JTHz3e%2FREnqya8%2F1Vlabk69QchRHySHj8wSRzNv%2BB96YnrPxPIzsETgiW1gJsIBepibScKPlJ%2B2jFz6bnfVC1c3NBbyWmwNITEBDkOmDC1KwdreDOVDP5aoZ3VHV80NdiWs9rCrY2tkv%2BO2LqN%2Bj3BFnE3fE8RTYGB5dF7xY370XTxBuGomLIGuCs0VPOF4UFMPH8yMMGOqUBW%2FM1mj1ky7wZSjHKkv7PoNSXTZnUDuqiOmAGBpKUqmPGj7BlRBRS0pQMGsRK3MePOnw5uhUYf7jiU8RK6j7f%2BKjCYfCKM0Oh2JULMl5KeA9QGrI5VKAsMs8V%2F8DK3oxnCEuRnzGng2GypsaAyrNjQqg6Cc%2FKdz1D54gCT82Sukx737QLUigczl2ZTBDdb7U10%2FrAgmFPJ0CLV5h0S0nNs0Bw1VE6&X-Amz-Signature=85d704a2bca7f8742669d155f252598b3a1b537b07c43d51536ae6b0e7536116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6OLH3R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIQaz39a1uyuP4VtAR656QiwzzueiBowGIyGAsgHp7%2BAiEAnrBKpYRYVjM4PQWqh2lDgM%2FITv0jBJE9U9qvlABHnCMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDI%2Fd9JcqQGvEO7ySrcA7DXO847EtRYqDjD0vEFTysNiKbecfghqSpNuktFGsq2uwMGmvPb9JaNcVTuJbuVmhZmkR55V7kEnUXXtOMdklHOGcwKjkJsHzFt9KLZRkdniPsZxGw83fXOFptIJv62G683W04Y0K78lvx6GEggv5CjJWbpBEH8%2BgaRZq0J8fYAnk9J6SIIvaDZ5faTsUXgc36nbp8yT9GZfgzzTPl5ADSNykeH07tJqcNSWupry3ZDsHGe9yZrs2EjAyBuhiOzhONDo0RrCd0eAvMoVRBBLbmwGghOvRjhjrqAOHMguKbu%2Bjevzh9Qw9L%2FwqSfIQ0XT79uSsoM1%2FS3z1mvRUjbEkf6MgwZ7L%2BBX8XclSIxMHLFRJMxziVH15wj1fn1NUVZtI2jRldfBx8q2kvX7Uabp%2FMbv%2FrQYiRvgcjgucmjYE1St5m7VPAMOWg%2Bs71JTHz3e%2FREnqya8%2F1Vlabk69QchRHySHj8wSRzNv%2BB96YnrPxPIzsETgiW1gJsIBepibScKPlJ%2B2jFz6bnfVC1c3NBbyWmwNITEBDkOmDC1KwdreDOVDP5aoZ3VHV80NdiWs9rCrY2tkv%2BO2LqN%2Bj3BFnE3fE8RTYGB5dF7xY370XTxBuGomLIGuCs0VPOF4UFMPH8yMMGOqUBW%2FM1mj1ky7wZSjHKkv7PoNSXTZnUDuqiOmAGBpKUqmPGj7BlRBRS0pQMGsRK3MePOnw5uhUYf7jiU8RK6j7f%2BKjCYfCKM0Oh2JULMl5KeA9QGrI5VKAsMs8V%2F8DK3oxnCEuRnzGng2GypsaAyrNjQqg6Cc%2FKdz1D54gCT82Sukx737QLUigczl2ZTBDdb7U10%2FrAgmFPJ0CLV5h0S0nNs0Bw1VE6&X-Amz-Signature=5f6abc81e4425c3a17674dbd4312cdbe3b2e4a2dfc56c5b8bea9331362951738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
