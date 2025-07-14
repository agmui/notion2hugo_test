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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43PG7AP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEMLZusKTQvR9sBto%2FDRlDCLyjBTkD2QrHf2YTkHX%2Fb5AiEA4FxBwF3WxM7RktS02W2W5fLLhyY8ZwfgbrXBRaO3gmwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDH5k5hvPf4HpN28obSrcAwNLNq5tfFebZvfj20SORNkGT1jChWYhSk76CBeCv2pniEqz19VKcNHtjl0g5NV7s%2F2WeOH%2B5g%2FH4ZLb5sxESPRDpiatwA4csaHG64yNGK2jas9ZC7oS6U%2BlTNH9FVsWKl4JBN%2BqnAUI6s3MENRLnvuAji6Sa4g%2FVt%2FNyedfNnrpLM7y0KUs0RkRG%2F85E5wZv0tNnsIGaGGudphOuLX2hMJqmk6bxRLZMflVl%2F3BfTTP9DKrGZKBT85%2BhT7Lk3k%2FPs7xcYpwaG19nODrApWKjHEXwuZU%2BjlqBZCCNl50wRAge4Yma2A5Nc%2Bc%2BsMtGuUENYQ8gpVOoxwpmqGlIoHGn8cr4aTBoQL13p0VGcKvs4M4bdjrucrcw%2BLqXHIPNxjz12ZUhnF2McR0joX8kRa0GvRCEIOBhKW5Gb8q9XHCBkr8gmFsCFB9jvcID4%2FOHazhGJelncapJkUoRo7pgMoLjlg19SlHAxvz5XWNXNWSAWCyB%2Fe4TOlh6yoIAuHfeI7R%2F3ER1Ja3mhizhfeKSMGaSemsb3qIM6Pg0Htc%2Bn4aJRT%2Bc4En0%2BK3I5rfp9pp%2BUpmpZgCmStLY8kSZQueDxKIQRXXdOjKutOJjhbErmnbTKFU1lek6DMeYBqUN28zMKeI08MGOqUB9U%2B9S3O1GfgM37%2F8J6Nj2ZFYmX5CrplMjjCcgZOuocpNnNgZLR7JmkNvxSvGS2rjQr%2FB7lTZHpzhEhhOWh5cTDrJ8TTTGTyua6EBcXZ9WTuHN62VUpMMiWvAJ8fcv%2Bxa27O5LktOvXBM0Pj2sAdAJdQ9oObBhoMTT2RXPj7iGllV72h6OR1mIQ5%2FgDJqVakDzg%2BBQW%2B1%2BTzWofr4xEslISrypapb&X-Amz-Signature=0e4b4f0df8f64f8da9b2b029252f621c0a8e11d3f4b609a6af8704a3c1530891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43PG7AP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEMLZusKTQvR9sBto%2FDRlDCLyjBTkD2QrHf2YTkHX%2Fb5AiEA4FxBwF3WxM7RktS02W2W5fLLhyY8ZwfgbrXBRaO3gmwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDH5k5hvPf4HpN28obSrcAwNLNq5tfFebZvfj20SORNkGT1jChWYhSk76CBeCv2pniEqz19VKcNHtjl0g5NV7s%2F2WeOH%2B5g%2FH4ZLb5sxESPRDpiatwA4csaHG64yNGK2jas9ZC7oS6U%2BlTNH9FVsWKl4JBN%2BqnAUI6s3MENRLnvuAji6Sa4g%2FVt%2FNyedfNnrpLM7y0KUs0RkRG%2F85E5wZv0tNnsIGaGGudphOuLX2hMJqmk6bxRLZMflVl%2F3BfTTP9DKrGZKBT85%2BhT7Lk3k%2FPs7xcYpwaG19nODrApWKjHEXwuZU%2BjlqBZCCNl50wRAge4Yma2A5Nc%2Bc%2BsMtGuUENYQ8gpVOoxwpmqGlIoHGn8cr4aTBoQL13p0VGcKvs4M4bdjrucrcw%2BLqXHIPNxjz12ZUhnF2McR0joX8kRa0GvRCEIOBhKW5Gb8q9XHCBkr8gmFsCFB9jvcID4%2FOHazhGJelncapJkUoRo7pgMoLjlg19SlHAxvz5XWNXNWSAWCyB%2Fe4TOlh6yoIAuHfeI7R%2F3ER1Ja3mhizhfeKSMGaSemsb3qIM6Pg0Htc%2Bn4aJRT%2Bc4En0%2BK3I5rfp9pp%2BUpmpZgCmStLY8kSZQueDxKIQRXXdOjKutOJjhbErmnbTKFU1lek6DMeYBqUN28zMKeI08MGOqUB9U%2B9S3O1GfgM37%2F8J6Nj2ZFYmX5CrplMjjCcgZOuocpNnNgZLR7JmkNvxSvGS2rjQr%2FB7lTZHpzhEhhOWh5cTDrJ8TTTGTyua6EBcXZ9WTuHN62VUpMMiWvAJ8fcv%2Bxa27O5LktOvXBM0Pj2sAdAJdQ9oObBhoMTT2RXPj7iGllV72h6OR1mIQ5%2FgDJqVakDzg%2BBQW%2B1%2BTzWofr4xEslISrypapb&X-Amz-Signature=0396caf62d2f2a27c98be9195f23384a42e744eab909b1f28a963debb8d7ad89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43PG7AP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEMLZusKTQvR9sBto%2FDRlDCLyjBTkD2QrHf2YTkHX%2Fb5AiEA4FxBwF3WxM7RktS02W2W5fLLhyY8ZwfgbrXBRaO3gmwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDH5k5hvPf4HpN28obSrcAwNLNq5tfFebZvfj20SORNkGT1jChWYhSk76CBeCv2pniEqz19VKcNHtjl0g5NV7s%2F2WeOH%2B5g%2FH4ZLb5sxESPRDpiatwA4csaHG64yNGK2jas9ZC7oS6U%2BlTNH9FVsWKl4JBN%2BqnAUI6s3MENRLnvuAji6Sa4g%2FVt%2FNyedfNnrpLM7y0KUs0RkRG%2F85E5wZv0tNnsIGaGGudphOuLX2hMJqmk6bxRLZMflVl%2F3BfTTP9DKrGZKBT85%2BhT7Lk3k%2FPs7xcYpwaG19nODrApWKjHEXwuZU%2BjlqBZCCNl50wRAge4Yma2A5Nc%2Bc%2BsMtGuUENYQ8gpVOoxwpmqGlIoHGn8cr4aTBoQL13p0VGcKvs4M4bdjrucrcw%2BLqXHIPNxjz12ZUhnF2McR0joX8kRa0GvRCEIOBhKW5Gb8q9XHCBkr8gmFsCFB9jvcID4%2FOHazhGJelncapJkUoRo7pgMoLjlg19SlHAxvz5XWNXNWSAWCyB%2Fe4TOlh6yoIAuHfeI7R%2F3ER1Ja3mhizhfeKSMGaSemsb3qIM6Pg0Htc%2Bn4aJRT%2Bc4En0%2BK3I5rfp9pp%2BUpmpZgCmStLY8kSZQueDxKIQRXXdOjKutOJjhbErmnbTKFU1lek6DMeYBqUN28zMKeI08MGOqUB9U%2B9S3O1GfgM37%2F8J6Nj2ZFYmX5CrplMjjCcgZOuocpNnNgZLR7JmkNvxSvGS2rjQr%2FB7lTZHpzhEhhOWh5cTDrJ8TTTGTyua6EBcXZ9WTuHN62VUpMMiWvAJ8fcv%2Bxa27O5LktOvXBM0Pj2sAdAJdQ9oObBhoMTT2RXPj7iGllV72h6OR1mIQ5%2FgDJqVakDzg%2BBQW%2B1%2BTzWofr4xEslISrypapb&X-Amz-Signature=6eab310d1e26ba6fac6de42dcafb9d833fc002cc4d04a633b168e9b9afd2f2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43PG7AP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEMLZusKTQvR9sBto%2FDRlDCLyjBTkD2QrHf2YTkHX%2Fb5AiEA4FxBwF3WxM7RktS02W2W5fLLhyY8ZwfgbrXBRaO3gmwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDH5k5hvPf4HpN28obSrcAwNLNq5tfFebZvfj20SORNkGT1jChWYhSk76CBeCv2pniEqz19VKcNHtjl0g5NV7s%2F2WeOH%2B5g%2FH4ZLb5sxESPRDpiatwA4csaHG64yNGK2jas9ZC7oS6U%2BlTNH9FVsWKl4JBN%2BqnAUI6s3MENRLnvuAji6Sa4g%2FVt%2FNyedfNnrpLM7y0KUs0RkRG%2F85E5wZv0tNnsIGaGGudphOuLX2hMJqmk6bxRLZMflVl%2F3BfTTP9DKrGZKBT85%2BhT7Lk3k%2FPs7xcYpwaG19nODrApWKjHEXwuZU%2BjlqBZCCNl50wRAge4Yma2A5Nc%2Bc%2BsMtGuUENYQ8gpVOoxwpmqGlIoHGn8cr4aTBoQL13p0VGcKvs4M4bdjrucrcw%2BLqXHIPNxjz12ZUhnF2McR0joX8kRa0GvRCEIOBhKW5Gb8q9XHCBkr8gmFsCFB9jvcID4%2FOHazhGJelncapJkUoRo7pgMoLjlg19SlHAxvz5XWNXNWSAWCyB%2Fe4TOlh6yoIAuHfeI7R%2F3ER1Ja3mhizhfeKSMGaSemsb3qIM6Pg0Htc%2Bn4aJRT%2Bc4En0%2BK3I5rfp9pp%2BUpmpZgCmStLY8kSZQueDxKIQRXXdOjKutOJjhbErmnbTKFU1lek6DMeYBqUN28zMKeI08MGOqUB9U%2B9S3O1GfgM37%2F8J6Nj2ZFYmX5CrplMjjCcgZOuocpNnNgZLR7JmkNvxSvGS2rjQr%2FB7lTZHpzhEhhOWh5cTDrJ8TTTGTyua6EBcXZ9WTuHN62VUpMMiWvAJ8fcv%2Bxa27O5LktOvXBM0Pj2sAdAJdQ9oObBhoMTT2RXPj7iGllV72h6OR1mIQ5%2FgDJqVakDzg%2BBQW%2B1%2BTzWofr4xEslISrypapb&X-Amz-Signature=cdce5d01be31d71ec4986db2fd30a01571c7efcd711ece44c290f571401609be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43PG7AP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEMLZusKTQvR9sBto%2FDRlDCLyjBTkD2QrHf2YTkHX%2Fb5AiEA4FxBwF3WxM7RktS02W2W5fLLhyY8ZwfgbrXBRaO3gmwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDH5k5hvPf4HpN28obSrcAwNLNq5tfFebZvfj20SORNkGT1jChWYhSk76CBeCv2pniEqz19VKcNHtjl0g5NV7s%2F2WeOH%2B5g%2FH4ZLb5sxESPRDpiatwA4csaHG64yNGK2jas9ZC7oS6U%2BlTNH9FVsWKl4JBN%2BqnAUI6s3MENRLnvuAji6Sa4g%2FVt%2FNyedfNnrpLM7y0KUs0RkRG%2F85E5wZv0tNnsIGaGGudphOuLX2hMJqmk6bxRLZMflVl%2F3BfTTP9DKrGZKBT85%2BhT7Lk3k%2FPs7xcYpwaG19nODrApWKjHEXwuZU%2BjlqBZCCNl50wRAge4Yma2A5Nc%2Bc%2BsMtGuUENYQ8gpVOoxwpmqGlIoHGn8cr4aTBoQL13p0VGcKvs4M4bdjrucrcw%2BLqXHIPNxjz12ZUhnF2McR0joX8kRa0GvRCEIOBhKW5Gb8q9XHCBkr8gmFsCFB9jvcID4%2FOHazhGJelncapJkUoRo7pgMoLjlg19SlHAxvz5XWNXNWSAWCyB%2Fe4TOlh6yoIAuHfeI7R%2F3ER1Ja3mhizhfeKSMGaSemsb3qIM6Pg0Htc%2Bn4aJRT%2Bc4En0%2BK3I5rfp9pp%2BUpmpZgCmStLY8kSZQueDxKIQRXXdOjKutOJjhbErmnbTKFU1lek6DMeYBqUN28zMKeI08MGOqUB9U%2B9S3O1GfgM37%2F8J6Nj2ZFYmX5CrplMjjCcgZOuocpNnNgZLR7JmkNvxSvGS2rjQr%2FB7lTZHpzhEhhOWh5cTDrJ8TTTGTyua6EBcXZ9WTuHN62VUpMMiWvAJ8fcv%2Bxa27O5LktOvXBM0Pj2sAdAJdQ9oObBhoMTT2RXPj7iGllV72h6OR1mIQ5%2FgDJqVakDzg%2BBQW%2B1%2BTzWofr4xEslISrypapb&X-Amz-Signature=86b53ec2dd46aca897e70558edd1443c4a5c22fbc187f4af8a5e91ef9f2618ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
