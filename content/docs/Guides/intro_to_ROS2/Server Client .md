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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKOBZ6N%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDKmuY9zd3kAdtHGRrwpRHcqneqhz2A%2FBunTk7tszpGgIhAOjQDvzWMTdGI4v15vIxFDMgYKKI6ej%2F152CoBlAO4yOKv8DCGEQABoMNjM3NDIzMTgzODA1IgwZTYOcSBW2%2Fr1KknUq3APVyRN6BQRmFyVm0E7TJU2mRoaCREiFmaCf%2BcECtpiE4OjM2V0I4xgPHff1ZZbT0o%2BEg5EN%2FJaEo89dBv3kDw7hkKS07C4Ehhob6sIww%2BMZ1%2BGI1UGm1L%2BuUniRxIf%2F%2BjBI40jHC1gE67fjag9kuTWhc7uA5%2BbiLLGWkQt3eidABda90rnHImYkedfmXt6u9VmJnDWxxV0li1o2NSfgamEvtzE4RUTm0nstKRoIkwjbzlZuIiDOta5SoBrQYBCr3HlqaeBKYTcOdXR4qGM4TxjuSHzHZ6hYUN18WMly5C6KhMe2BZd6C0gfJ7NvbUAjUec0RSiNfSndFVVS3I91KYT%2BcKGuHjpLde96Fm4PW%2BUDVt8ysXeqL0QRrs5WUcNJr0Yj6ZWdgOdLR8NL3wlR%2FzGn5LIQCbRnKTCAacFmIxfplI%2FTgBEsbf8g6xNN64nc473FkGnh%2F458KJjQGOI6n5puc8mDRr%2B1AttdkKhUJv4hRrun50oGRUWq9IFer3C0bMrJbiQ%2FX3wz9ZgT2c1NSihIzWUILUabbTDG120tgZmrNi3kl%2Fx8JaiAzex1Qxi3cF8omWnSnwEy79z9bdfqRd%2BO0t3%2B7pai%2BioFMl6LXdPgohj5JTWA6zps1uBM6jCBg%2B7ABjqkAdigM%2FjM4y2aj%2BEjdsEMQSzNC3bbSRLjWhyQSofdh%2Fgnbk4R6BEIkY6PG%2F0uhGbwFtM5opW1yiKcJ%2BXcbzOfQcImQU20BitXKVskHRq80CwrFtgzc59tJDuCCZTd%2FET0h4Qw9O3%2FY%2BE%2FhdylS6wqG7BcLQDatTXXca%2BD%2BApP%2BsIcdzv9D%2BJH0H0gpIlDJvM5syklI6%2Fh7ZuJnX0RI%2FA3LJ9oEZNm&X-Amz-Signature=dba622d6766df8c8ed231b2163135e7e9d645a3136a4382a5a49a77afe52b6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKOBZ6N%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDKmuY9zd3kAdtHGRrwpRHcqneqhz2A%2FBunTk7tszpGgIhAOjQDvzWMTdGI4v15vIxFDMgYKKI6ej%2F152CoBlAO4yOKv8DCGEQABoMNjM3NDIzMTgzODA1IgwZTYOcSBW2%2Fr1KknUq3APVyRN6BQRmFyVm0E7TJU2mRoaCREiFmaCf%2BcECtpiE4OjM2V0I4xgPHff1ZZbT0o%2BEg5EN%2FJaEo89dBv3kDw7hkKS07C4Ehhob6sIww%2BMZ1%2BGI1UGm1L%2BuUniRxIf%2F%2BjBI40jHC1gE67fjag9kuTWhc7uA5%2BbiLLGWkQt3eidABda90rnHImYkedfmXt6u9VmJnDWxxV0li1o2NSfgamEvtzE4RUTm0nstKRoIkwjbzlZuIiDOta5SoBrQYBCr3HlqaeBKYTcOdXR4qGM4TxjuSHzHZ6hYUN18WMly5C6KhMe2BZd6C0gfJ7NvbUAjUec0RSiNfSndFVVS3I91KYT%2BcKGuHjpLde96Fm4PW%2BUDVt8ysXeqL0QRrs5WUcNJr0Yj6ZWdgOdLR8NL3wlR%2FzGn5LIQCbRnKTCAacFmIxfplI%2FTgBEsbf8g6xNN64nc473FkGnh%2F458KJjQGOI6n5puc8mDRr%2B1AttdkKhUJv4hRrun50oGRUWq9IFer3C0bMrJbiQ%2FX3wz9ZgT2c1NSihIzWUILUabbTDG120tgZmrNi3kl%2Fx8JaiAzex1Qxi3cF8omWnSnwEy79z9bdfqRd%2BO0t3%2B7pai%2BioFMl6LXdPgohj5JTWA6zps1uBM6jCBg%2B7ABjqkAdigM%2FjM4y2aj%2BEjdsEMQSzNC3bbSRLjWhyQSofdh%2Fgnbk4R6BEIkY6PG%2F0uhGbwFtM5opW1yiKcJ%2BXcbzOfQcImQU20BitXKVskHRq80CwrFtgzc59tJDuCCZTd%2FET0h4Qw9O3%2FY%2BE%2FhdylS6wqG7BcLQDatTXXca%2BD%2BApP%2BsIcdzv9D%2BJH0H0gpIlDJvM5syklI6%2Fh7ZuJnX0RI%2FA3LJ9oEZNm&X-Amz-Signature=d555379fe073ddec90077bbe3a18d9b059092e50b039f4989749043c7b1a2812&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKOBZ6N%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDKmuY9zd3kAdtHGRrwpRHcqneqhz2A%2FBunTk7tszpGgIhAOjQDvzWMTdGI4v15vIxFDMgYKKI6ej%2F152CoBlAO4yOKv8DCGEQABoMNjM3NDIzMTgzODA1IgwZTYOcSBW2%2Fr1KknUq3APVyRN6BQRmFyVm0E7TJU2mRoaCREiFmaCf%2BcECtpiE4OjM2V0I4xgPHff1ZZbT0o%2BEg5EN%2FJaEo89dBv3kDw7hkKS07C4Ehhob6sIww%2BMZ1%2BGI1UGm1L%2BuUniRxIf%2F%2BjBI40jHC1gE67fjag9kuTWhc7uA5%2BbiLLGWkQt3eidABda90rnHImYkedfmXt6u9VmJnDWxxV0li1o2NSfgamEvtzE4RUTm0nstKRoIkwjbzlZuIiDOta5SoBrQYBCr3HlqaeBKYTcOdXR4qGM4TxjuSHzHZ6hYUN18WMly5C6KhMe2BZd6C0gfJ7NvbUAjUec0RSiNfSndFVVS3I91KYT%2BcKGuHjpLde96Fm4PW%2BUDVt8ysXeqL0QRrs5WUcNJr0Yj6ZWdgOdLR8NL3wlR%2FzGn5LIQCbRnKTCAacFmIxfplI%2FTgBEsbf8g6xNN64nc473FkGnh%2F458KJjQGOI6n5puc8mDRr%2B1AttdkKhUJv4hRrun50oGRUWq9IFer3C0bMrJbiQ%2FX3wz9ZgT2c1NSihIzWUILUabbTDG120tgZmrNi3kl%2Fx8JaiAzex1Qxi3cF8omWnSnwEy79z9bdfqRd%2BO0t3%2B7pai%2BioFMl6LXdPgohj5JTWA6zps1uBM6jCBg%2B7ABjqkAdigM%2FjM4y2aj%2BEjdsEMQSzNC3bbSRLjWhyQSofdh%2Fgnbk4R6BEIkY6PG%2F0uhGbwFtM5opW1yiKcJ%2BXcbzOfQcImQU20BitXKVskHRq80CwrFtgzc59tJDuCCZTd%2FET0h4Qw9O3%2FY%2BE%2FhdylS6wqG7BcLQDatTXXca%2BD%2BApP%2BsIcdzv9D%2BJH0H0gpIlDJvM5syklI6%2Fh7ZuJnX0RI%2FA3LJ9oEZNm&X-Amz-Signature=292d7e589750ec3aa94d8d5ccd8b85b89cf8cbd87644c62cb1fd820acd7cc0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKOBZ6N%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDKmuY9zd3kAdtHGRrwpRHcqneqhz2A%2FBunTk7tszpGgIhAOjQDvzWMTdGI4v15vIxFDMgYKKI6ej%2F152CoBlAO4yOKv8DCGEQABoMNjM3NDIzMTgzODA1IgwZTYOcSBW2%2Fr1KknUq3APVyRN6BQRmFyVm0E7TJU2mRoaCREiFmaCf%2BcECtpiE4OjM2V0I4xgPHff1ZZbT0o%2BEg5EN%2FJaEo89dBv3kDw7hkKS07C4Ehhob6sIww%2BMZ1%2BGI1UGm1L%2BuUniRxIf%2F%2BjBI40jHC1gE67fjag9kuTWhc7uA5%2BbiLLGWkQt3eidABda90rnHImYkedfmXt6u9VmJnDWxxV0li1o2NSfgamEvtzE4RUTm0nstKRoIkwjbzlZuIiDOta5SoBrQYBCr3HlqaeBKYTcOdXR4qGM4TxjuSHzHZ6hYUN18WMly5C6KhMe2BZd6C0gfJ7NvbUAjUec0RSiNfSndFVVS3I91KYT%2BcKGuHjpLde96Fm4PW%2BUDVt8ysXeqL0QRrs5WUcNJr0Yj6ZWdgOdLR8NL3wlR%2FzGn5LIQCbRnKTCAacFmIxfplI%2FTgBEsbf8g6xNN64nc473FkGnh%2F458KJjQGOI6n5puc8mDRr%2B1AttdkKhUJv4hRrun50oGRUWq9IFer3C0bMrJbiQ%2FX3wz9ZgT2c1NSihIzWUILUabbTDG120tgZmrNi3kl%2Fx8JaiAzex1Qxi3cF8omWnSnwEy79z9bdfqRd%2BO0t3%2B7pai%2BioFMl6LXdPgohj5JTWA6zps1uBM6jCBg%2B7ABjqkAdigM%2FjM4y2aj%2BEjdsEMQSzNC3bbSRLjWhyQSofdh%2Fgnbk4R6BEIkY6PG%2F0uhGbwFtM5opW1yiKcJ%2BXcbzOfQcImQU20BitXKVskHRq80CwrFtgzc59tJDuCCZTd%2FET0h4Qw9O3%2FY%2BE%2FhdylS6wqG7BcLQDatTXXca%2BD%2BApP%2BsIcdzv9D%2BJH0H0gpIlDJvM5syklI6%2Fh7ZuJnX0RI%2FA3LJ9oEZNm&X-Amz-Signature=f56a106bfe5837bdb27719c606ed7d7a1107a44a37c70db377e525881571903b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKOBZ6N%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDKmuY9zd3kAdtHGRrwpRHcqneqhz2A%2FBunTk7tszpGgIhAOjQDvzWMTdGI4v15vIxFDMgYKKI6ej%2F152CoBlAO4yOKv8DCGEQABoMNjM3NDIzMTgzODA1IgwZTYOcSBW2%2Fr1KknUq3APVyRN6BQRmFyVm0E7TJU2mRoaCREiFmaCf%2BcECtpiE4OjM2V0I4xgPHff1ZZbT0o%2BEg5EN%2FJaEo89dBv3kDw7hkKS07C4Ehhob6sIww%2BMZ1%2BGI1UGm1L%2BuUniRxIf%2F%2BjBI40jHC1gE67fjag9kuTWhc7uA5%2BbiLLGWkQt3eidABda90rnHImYkedfmXt6u9VmJnDWxxV0li1o2NSfgamEvtzE4RUTm0nstKRoIkwjbzlZuIiDOta5SoBrQYBCr3HlqaeBKYTcOdXR4qGM4TxjuSHzHZ6hYUN18WMly5C6KhMe2BZd6C0gfJ7NvbUAjUec0RSiNfSndFVVS3I91KYT%2BcKGuHjpLde96Fm4PW%2BUDVt8ysXeqL0QRrs5WUcNJr0Yj6ZWdgOdLR8NL3wlR%2FzGn5LIQCbRnKTCAacFmIxfplI%2FTgBEsbf8g6xNN64nc473FkGnh%2F458KJjQGOI6n5puc8mDRr%2B1AttdkKhUJv4hRrun50oGRUWq9IFer3C0bMrJbiQ%2FX3wz9ZgT2c1NSihIzWUILUabbTDG120tgZmrNi3kl%2Fx8JaiAzex1Qxi3cF8omWnSnwEy79z9bdfqRd%2BO0t3%2B7pai%2BioFMl6LXdPgohj5JTWA6zps1uBM6jCBg%2B7ABjqkAdigM%2FjM4y2aj%2BEjdsEMQSzNC3bbSRLjWhyQSofdh%2Fgnbk4R6BEIkY6PG%2F0uhGbwFtM5opW1yiKcJ%2BXcbzOfQcImQU20BitXKVskHRq80CwrFtgzc59tJDuCCZTd%2FET0h4Qw9O3%2FY%2BE%2FhdylS6wqG7BcLQDatTXXca%2BD%2BApP%2BsIcdzv9D%2BJH0H0gpIlDJvM5syklI6%2Fh7ZuJnX0RI%2FA3LJ9oEZNm&X-Amz-Signature=e2b545f33614b1c1649a55fc3e0aad9e45f7eb375cd1beb8efe5b8fdd099d2ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
