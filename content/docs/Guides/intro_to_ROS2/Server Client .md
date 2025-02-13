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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIGTS77%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWCu99DNU0obhSK%2Bzh1lTH4dix8zgSujYQYG6vfx6cKAiEA2FfXG%2FK2TXg%2FQWWmUft0PSR86rVwqXamMGmQZkq%2BVgwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBBZekfy5PWPaAqAeircA51n5bRUHpvu4H37h1LCgYGYfHMVNtQcbUkv5zm%2F5K65aLL5NFiX%2BYRe1ADbfauqSLSHSxlC5S5fOyuwp1f7cMr32Tq0o0iajf20Qg%2FFfjQvRtDD9fGI8dq6RZne4Gj8vKrMX%2BU9XsX5VKPwcE1FnH6KYIwMqEJxvKp84RTX70fqrgQrEI64TPNhdBePkQN1GWAA5rXkvHFW1TB5Fzm1F%2FWfuDDog4oglLl6CpuUWSyhiHtXOvBOijWqlEUwP%2FfhqgEhFhA%2B5Azss47RwaJdnP%2Ba4iTjsalEp0Bqd9DVd%2Fz96kPIEGQlwFSMllJCcGSnZ1Ej4s9gAhbSuPVP9N%2B2tCvWh%2FtEyw1YKEugTh8knvG12CxHmOfmt%2FPj7PEDC%2FJXGYE0PHwPlAPHRImksi9RXlmDeB6MMrbAr%2B3lns9levEk4b%2F5ndLtIAaJ1XnMdNvN3UETSbWo%2BbU%2FuMhtsxXYYjJtmZ7O1pHbHGHVcYeQpy2kYHUM1MEdx%2BncdEOffubl8QsUUgRP1Me9QNgs5wtEgD5xtii79HaXQodNaLOt4B%2BCfHgaXUTVj6FhGPhKw86j2NEGQ%2FEpmmgDtTrbNR5%2BYgvAWEdRYq1Kduna7%2BsIknGTnPik5p2JFmIExC3VMMLdt70GOqUBG%2BGOD48g5bQjx1sG7Ya%2BQHOxURUvginKHTAn8fW9eZR0wME2a4VfgbiaMvSCvsfiSxp2D6Kb%2Bp7KraEMCjk%2BMCGVveV5qAOc0S9htayGLiFb5C7Pu5WRoCPkkptRn%2BbUX5q6VwLDqGREfl6NGfjEe5Tynt2P5Sqf1He7gXOqEtE%2Bj1w0Kr%2BEpjQS9FwZpBbRTc5Na9r3AACSPGpUo9mqaH0QiWZB&X-Amz-Signature=1027d16a06122b153d9afe1efe48c819d8df6c39a73c594302dd67a353f37c31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIGTS77%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWCu99DNU0obhSK%2Bzh1lTH4dix8zgSujYQYG6vfx6cKAiEA2FfXG%2FK2TXg%2FQWWmUft0PSR86rVwqXamMGmQZkq%2BVgwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBBZekfy5PWPaAqAeircA51n5bRUHpvu4H37h1LCgYGYfHMVNtQcbUkv5zm%2F5K65aLL5NFiX%2BYRe1ADbfauqSLSHSxlC5S5fOyuwp1f7cMr32Tq0o0iajf20Qg%2FFfjQvRtDD9fGI8dq6RZne4Gj8vKrMX%2BU9XsX5VKPwcE1FnH6KYIwMqEJxvKp84RTX70fqrgQrEI64TPNhdBePkQN1GWAA5rXkvHFW1TB5Fzm1F%2FWfuDDog4oglLl6CpuUWSyhiHtXOvBOijWqlEUwP%2FfhqgEhFhA%2B5Azss47RwaJdnP%2Ba4iTjsalEp0Bqd9DVd%2Fz96kPIEGQlwFSMllJCcGSnZ1Ej4s9gAhbSuPVP9N%2B2tCvWh%2FtEyw1YKEugTh8knvG12CxHmOfmt%2FPj7PEDC%2FJXGYE0PHwPlAPHRImksi9RXlmDeB6MMrbAr%2B3lns9levEk4b%2F5ndLtIAaJ1XnMdNvN3UETSbWo%2BbU%2FuMhtsxXYYjJtmZ7O1pHbHGHVcYeQpy2kYHUM1MEdx%2BncdEOffubl8QsUUgRP1Me9QNgs5wtEgD5xtii79HaXQodNaLOt4B%2BCfHgaXUTVj6FhGPhKw86j2NEGQ%2FEpmmgDtTrbNR5%2BYgvAWEdRYq1Kduna7%2BsIknGTnPik5p2JFmIExC3VMMLdt70GOqUBG%2BGOD48g5bQjx1sG7Ya%2BQHOxURUvginKHTAn8fW9eZR0wME2a4VfgbiaMvSCvsfiSxp2D6Kb%2Bp7KraEMCjk%2BMCGVveV5qAOc0S9htayGLiFb5C7Pu5WRoCPkkptRn%2BbUX5q6VwLDqGREfl6NGfjEe5Tynt2P5Sqf1He7gXOqEtE%2Bj1w0Kr%2BEpjQS9FwZpBbRTc5Na9r3AACSPGpUo9mqaH0QiWZB&X-Amz-Signature=f2167d6170d65b5ac0d5cd1cbb458d6260837f313f7094e5bbf984b94538d0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIGTS77%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWCu99DNU0obhSK%2Bzh1lTH4dix8zgSujYQYG6vfx6cKAiEA2FfXG%2FK2TXg%2FQWWmUft0PSR86rVwqXamMGmQZkq%2BVgwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBBZekfy5PWPaAqAeircA51n5bRUHpvu4H37h1LCgYGYfHMVNtQcbUkv5zm%2F5K65aLL5NFiX%2BYRe1ADbfauqSLSHSxlC5S5fOyuwp1f7cMr32Tq0o0iajf20Qg%2FFfjQvRtDD9fGI8dq6RZne4Gj8vKrMX%2BU9XsX5VKPwcE1FnH6KYIwMqEJxvKp84RTX70fqrgQrEI64TPNhdBePkQN1GWAA5rXkvHFW1TB5Fzm1F%2FWfuDDog4oglLl6CpuUWSyhiHtXOvBOijWqlEUwP%2FfhqgEhFhA%2B5Azss47RwaJdnP%2Ba4iTjsalEp0Bqd9DVd%2Fz96kPIEGQlwFSMllJCcGSnZ1Ej4s9gAhbSuPVP9N%2B2tCvWh%2FtEyw1YKEugTh8knvG12CxHmOfmt%2FPj7PEDC%2FJXGYE0PHwPlAPHRImksi9RXlmDeB6MMrbAr%2B3lns9levEk4b%2F5ndLtIAaJ1XnMdNvN3UETSbWo%2BbU%2FuMhtsxXYYjJtmZ7O1pHbHGHVcYeQpy2kYHUM1MEdx%2BncdEOffubl8QsUUgRP1Me9QNgs5wtEgD5xtii79HaXQodNaLOt4B%2BCfHgaXUTVj6FhGPhKw86j2NEGQ%2FEpmmgDtTrbNR5%2BYgvAWEdRYq1Kduna7%2BsIknGTnPik5p2JFmIExC3VMMLdt70GOqUBG%2BGOD48g5bQjx1sG7Ya%2BQHOxURUvginKHTAn8fW9eZR0wME2a4VfgbiaMvSCvsfiSxp2D6Kb%2Bp7KraEMCjk%2BMCGVveV5qAOc0S9htayGLiFb5C7Pu5WRoCPkkptRn%2BbUX5q6VwLDqGREfl6NGfjEe5Tynt2P5Sqf1He7gXOqEtE%2Bj1w0Kr%2BEpjQS9FwZpBbRTc5Na9r3AACSPGpUo9mqaH0QiWZB&X-Amz-Signature=5e38eaebec81f8485ac5705586a1b009c75e33b2e4352c23a526e2e362b344cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIGTS77%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWCu99DNU0obhSK%2Bzh1lTH4dix8zgSujYQYG6vfx6cKAiEA2FfXG%2FK2TXg%2FQWWmUft0PSR86rVwqXamMGmQZkq%2BVgwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBBZekfy5PWPaAqAeircA51n5bRUHpvu4H37h1LCgYGYfHMVNtQcbUkv5zm%2F5K65aLL5NFiX%2BYRe1ADbfauqSLSHSxlC5S5fOyuwp1f7cMr32Tq0o0iajf20Qg%2FFfjQvRtDD9fGI8dq6RZne4Gj8vKrMX%2BU9XsX5VKPwcE1FnH6KYIwMqEJxvKp84RTX70fqrgQrEI64TPNhdBePkQN1GWAA5rXkvHFW1TB5Fzm1F%2FWfuDDog4oglLl6CpuUWSyhiHtXOvBOijWqlEUwP%2FfhqgEhFhA%2B5Azss47RwaJdnP%2Ba4iTjsalEp0Bqd9DVd%2Fz96kPIEGQlwFSMllJCcGSnZ1Ej4s9gAhbSuPVP9N%2B2tCvWh%2FtEyw1YKEugTh8knvG12CxHmOfmt%2FPj7PEDC%2FJXGYE0PHwPlAPHRImksi9RXlmDeB6MMrbAr%2B3lns9levEk4b%2F5ndLtIAaJ1XnMdNvN3UETSbWo%2BbU%2FuMhtsxXYYjJtmZ7O1pHbHGHVcYeQpy2kYHUM1MEdx%2BncdEOffubl8QsUUgRP1Me9QNgs5wtEgD5xtii79HaXQodNaLOt4B%2BCfHgaXUTVj6FhGPhKw86j2NEGQ%2FEpmmgDtTrbNR5%2BYgvAWEdRYq1Kduna7%2BsIknGTnPik5p2JFmIExC3VMMLdt70GOqUBG%2BGOD48g5bQjx1sG7Ya%2BQHOxURUvginKHTAn8fW9eZR0wME2a4VfgbiaMvSCvsfiSxp2D6Kb%2Bp7KraEMCjk%2BMCGVveV5qAOc0S9htayGLiFb5C7Pu5WRoCPkkptRn%2BbUX5q6VwLDqGREfl6NGfjEe5Tynt2P5Sqf1He7gXOqEtE%2Bj1w0Kr%2BEpjQS9FwZpBbRTc5Na9r3AACSPGpUo9mqaH0QiWZB&X-Amz-Signature=e8803ffab7f63891ad518539ff75b4d3ff30c1645a588345c02573399f805e93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIGTS77%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWCu99DNU0obhSK%2Bzh1lTH4dix8zgSujYQYG6vfx6cKAiEA2FfXG%2FK2TXg%2FQWWmUft0PSR86rVwqXamMGmQZkq%2BVgwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBBZekfy5PWPaAqAeircA51n5bRUHpvu4H37h1LCgYGYfHMVNtQcbUkv5zm%2F5K65aLL5NFiX%2BYRe1ADbfauqSLSHSxlC5S5fOyuwp1f7cMr32Tq0o0iajf20Qg%2FFfjQvRtDD9fGI8dq6RZne4Gj8vKrMX%2BU9XsX5VKPwcE1FnH6KYIwMqEJxvKp84RTX70fqrgQrEI64TPNhdBePkQN1GWAA5rXkvHFW1TB5Fzm1F%2FWfuDDog4oglLl6CpuUWSyhiHtXOvBOijWqlEUwP%2FfhqgEhFhA%2B5Azss47RwaJdnP%2Ba4iTjsalEp0Bqd9DVd%2Fz96kPIEGQlwFSMllJCcGSnZ1Ej4s9gAhbSuPVP9N%2B2tCvWh%2FtEyw1YKEugTh8knvG12CxHmOfmt%2FPj7PEDC%2FJXGYE0PHwPlAPHRImksi9RXlmDeB6MMrbAr%2B3lns9levEk4b%2F5ndLtIAaJ1XnMdNvN3UETSbWo%2BbU%2FuMhtsxXYYjJtmZ7O1pHbHGHVcYeQpy2kYHUM1MEdx%2BncdEOffubl8QsUUgRP1Me9QNgs5wtEgD5xtii79HaXQodNaLOt4B%2BCfHgaXUTVj6FhGPhKw86j2NEGQ%2FEpmmgDtTrbNR5%2BYgvAWEdRYq1Kduna7%2BsIknGTnPik5p2JFmIExC3VMMLdt70GOqUBG%2BGOD48g5bQjx1sG7Ya%2BQHOxURUvginKHTAn8fW9eZR0wME2a4VfgbiaMvSCvsfiSxp2D6Kb%2Bp7KraEMCjk%2BMCGVveV5qAOc0S9htayGLiFb5C7Pu5WRoCPkkptRn%2BbUX5q6VwLDqGREfl6NGfjEe5Tynt2P5Sqf1He7gXOqEtE%2Bj1w0Kr%2BEpjQS9FwZpBbRTc5Na9r3AACSPGpUo9mqaH0QiWZB&X-Amz-Signature=23137588f8cae792504f742411c01d07d3537cf801458dacdf8b99cbef68b11b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
