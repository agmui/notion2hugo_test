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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGUZ2DIX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA%2B0CQRZnC5zLjaFd%2BG8uYqIiUbhpsMpotvQX4I4PAfdAiEAjY5B4GgO6%2BH4VU1leyOkZsX2heUqxz2tLk%2FjDlu8PHsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJhOn1EOSQenQ3t6ircAwLd%2ByJRmgQ%2Bi4UBu7rz4g9qXpQRJrqwN9EyShxFw%2BbuBCbMzne3m5TVDrIXfHqyB7WTSYeiQ4EVyDtBBWDGADyduii14Q4yUKHOag4FfNou05UHV5gBu79caWtcEz79B2BHnDois7By1ln0TGM%2BgalMTB6vDHJrbYckf%2Bz5zRzEvLf2HggNmXhnA0vOhjO0b9BDlr%2FpR0BE143h4ins3B6%2FDzfh5QlyQEPWLVbouHdrU%2B8eusuvtPMynn%2Br5zctWPyEG9o1TjMjaNLLFL%2FuW%2FsoTMP0S94s5WUbDdGgGdko3vrirRD5w6d4nrdd50Kxae4W8%2BKAwga%2BA%2BpxlmWSzOeH9JQHGVwNukjnvoVBOIz6u2Et8V3oWXpX9wB1jCWmOjwaWcpQ8mb%2BSFRFcS95u7v4XK9eJHG%2FYRPI22HbBXqiNuE7Qa%2F1WcsNE6OEBq7P7sqjSODPDHX9RXHeJM2s62f%2FhRUDwVl30s2EqJC0UoscS48ysHttFxTSOzQtPUf%2BYz94fiheSsQLcHbzzC6lKK%2Fg4kN6xbK2IKHvDg8S5n%2BI%2B9QMN%2BZRyfTGBB7XDGSyFrSBMUWIGk1Qjvzk5iS%2FGMpzqK8mO%2B%2FUueq%2FzuP%2FuxJ4awIUxSjpPpixowR%2FMKnM%2F74GOqUBrv6Pi%2BGs9ELi7APLTjDacLWmNTRIMcTawSrE3P06cmO6sntdTvHE5nI6pgi2mb4vOcMrr7kHhW9GwAwJrcVuNkTZmXt2b6%2Br1JItHMzGzhY9Rbd3HTG3a9hYU90o%2B4Zu710hPzGklkuPf7TMGsGcIOUB29ITDjOWhUBklpQyq59wo3qwn%2BzORSqkVJTGJhyo2xwFWeKMeqL7G7WRxFk3S2UaY1Jf&X-Amz-Signature=0bec8eb6f3c9c61828a4ddae0911ea39299fa80a74f82895d63d761acf0f5413&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGUZ2DIX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA%2B0CQRZnC5zLjaFd%2BG8uYqIiUbhpsMpotvQX4I4PAfdAiEAjY5B4GgO6%2BH4VU1leyOkZsX2heUqxz2tLk%2FjDlu8PHsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJhOn1EOSQenQ3t6ircAwLd%2ByJRmgQ%2Bi4UBu7rz4g9qXpQRJrqwN9EyShxFw%2BbuBCbMzne3m5TVDrIXfHqyB7WTSYeiQ4EVyDtBBWDGADyduii14Q4yUKHOag4FfNou05UHV5gBu79caWtcEz79B2BHnDois7By1ln0TGM%2BgalMTB6vDHJrbYckf%2Bz5zRzEvLf2HggNmXhnA0vOhjO0b9BDlr%2FpR0BE143h4ins3B6%2FDzfh5QlyQEPWLVbouHdrU%2B8eusuvtPMynn%2Br5zctWPyEG9o1TjMjaNLLFL%2FuW%2FsoTMP0S94s5WUbDdGgGdko3vrirRD5w6d4nrdd50Kxae4W8%2BKAwga%2BA%2BpxlmWSzOeH9JQHGVwNukjnvoVBOIz6u2Et8V3oWXpX9wB1jCWmOjwaWcpQ8mb%2BSFRFcS95u7v4XK9eJHG%2FYRPI22HbBXqiNuE7Qa%2F1WcsNE6OEBq7P7sqjSODPDHX9RXHeJM2s62f%2FhRUDwVl30s2EqJC0UoscS48ysHttFxTSOzQtPUf%2BYz94fiheSsQLcHbzzC6lKK%2Fg4kN6xbK2IKHvDg8S5n%2BI%2B9QMN%2BZRyfTGBB7XDGSyFrSBMUWIGk1Qjvzk5iS%2FGMpzqK8mO%2B%2FUueq%2FzuP%2FuxJ4awIUxSjpPpixowR%2FMKnM%2F74GOqUBrv6Pi%2BGs9ELi7APLTjDacLWmNTRIMcTawSrE3P06cmO6sntdTvHE5nI6pgi2mb4vOcMrr7kHhW9GwAwJrcVuNkTZmXt2b6%2Br1JItHMzGzhY9Rbd3HTG3a9hYU90o%2B4Zu710hPzGklkuPf7TMGsGcIOUB29ITDjOWhUBklpQyq59wo3qwn%2BzORSqkVJTGJhyo2xwFWeKMeqL7G7WRxFk3S2UaY1Jf&X-Amz-Signature=f509a7119906cd3abb9b4aa834ca851b58a2cb1e4a9f0ad532ef64e82424cb35&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGUZ2DIX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA%2B0CQRZnC5zLjaFd%2BG8uYqIiUbhpsMpotvQX4I4PAfdAiEAjY5B4GgO6%2BH4VU1leyOkZsX2heUqxz2tLk%2FjDlu8PHsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJhOn1EOSQenQ3t6ircAwLd%2ByJRmgQ%2Bi4UBu7rz4g9qXpQRJrqwN9EyShxFw%2BbuBCbMzne3m5TVDrIXfHqyB7WTSYeiQ4EVyDtBBWDGADyduii14Q4yUKHOag4FfNou05UHV5gBu79caWtcEz79B2BHnDois7By1ln0TGM%2BgalMTB6vDHJrbYckf%2Bz5zRzEvLf2HggNmXhnA0vOhjO0b9BDlr%2FpR0BE143h4ins3B6%2FDzfh5QlyQEPWLVbouHdrU%2B8eusuvtPMynn%2Br5zctWPyEG9o1TjMjaNLLFL%2FuW%2FsoTMP0S94s5WUbDdGgGdko3vrirRD5w6d4nrdd50Kxae4W8%2BKAwga%2BA%2BpxlmWSzOeH9JQHGVwNukjnvoVBOIz6u2Et8V3oWXpX9wB1jCWmOjwaWcpQ8mb%2BSFRFcS95u7v4XK9eJHG%2FYRPI22HbBXqiNuE7Qa%2F1WcsNE6OEBq7P7sqjSODPDHX9RXHeJM2s62f%2FhRUDwVl30s2EqJC0UoscS48ysHttFxTSOzQtPUf%2BYz94fiheSsQLcHbzzC6lKK%2Fg4kN6xbK2IKHvDg8S5n%2BI%2B9QMN%2BZRyfTGBB7XDGSyFrSBMUWIGk1Qjvzk5iS%2FGMpzqK8mO%2B%2FUueq%2FzuP%2FuxJ4awIUxSjpPpixowR%2FMKnM%2F74GOqUBrv6Pi%2BGs9ELi7APLTjDacLWmNTRIMcTawSrE3P06cmO6sntdTvHE5nI6pgi2mb4vOcMrr7kHhW9GwAwJrcVuNkTZmXt2b6%2Br1JItHMzGzhY9Rbd3HTG3a9hYU90o%2B4Zu710hPzGklkuPf7TMGsGcIOUB29ITDjOWhUBklpQyq59wo3qwn%2BzORSqkVJTGJhyo2xwFWeKMeqL7G7WRxFk3S2UaY1Jf&X-Amz-Signature=ce88efbfbbc243d90a3315dd5145f0822625dbfab8be3e2cf546c07473d778f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGUZ2DIX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA%2B0CQRZnC5zLjaFd%2BG8uYqIiUbhpsMpotvQX4I4PAfdAiEAjY5B4GgO6%2BH4VU1leyOkZsX2heUqxz2tLk%2FjDlu8PHsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJhOn1EOSQenQ3t6ircAwLd%2ByJRmgQ%2Bi4UBu7rz4g9qXpQRJrqwN9EyShxFw%2BbuBCbMzne3m5TVDrIXfHqyB7WTSYeiQ4EVyDtBBWDGADyduii14Q4yUKHOag4FfNou05UHV5gBu79caWtcEz79B2BHnDois7By1ln0TGM%2BgalMTB6vDHJrbYckf%2Bz5zRzEvLf2HggNmXhnA0vOhjO0b9BDlr%2FpR0BE143h4ins3B6%2FDzfh5QlyQEPWLVbouHdrU%2B8eusuvtPMynn%2Br5zctWPyEG9o1TjMjaNLLFL%2FuW%2FsoTMP0S94s5WUbDdGgGdko3vrirRD5w6d4nrdd50Kxae4W8%2BKAwga%2BA%2BpxlmWSzOeH9JQHGVwNukjnvoVBOIz6u2Et8V3oWXpX9wB1jCWmOjwaWcpQ8mb%2BSFRFcS95u7v4XK9eJHG%2FYRPI22HbBXqiNuE7Qa%2F1WcsNE6OEBq7P7sqjSODPDHX9RXHeJM2s62f%2FhRUDwVl30s2EqJC0UoscS48ysHttFxTSOzQtPUf%2BYz94fiheSsQLcHbzzC6lKK%2Fg4kN6xbK2IKHvDg8S5n%2BI%2B9QMN%2BZRyfTGBB7XDGSyFrSBMUWIGk1Qjvzk5iS%2FGMpzqK8mO%2B%2FUueq%2FzuP%2FuxJ4awIUxSjpPpixowR%2FMKnM%2F74GOqUBrv6Pi%2BGs9ELi7APLTjDacLWmNTRIMcTawSrE3P06cmO6sntdTvHE5nI6pgi2mb4vOcMrr7kHhW9GwAwJrcVuNkTZmXt2b6%2Br1JItHMzGzhY9Rbd3HTG3a9hYU90o%2B4Zu710hPzGklkuPf7TMGsGcIOUB29ITDjOWhUBklpQyq59wo3qwn%2BzORSqkVJTGJhyo2xwFWeKMeqL7G7WRxFk3S2UaY1Jf&X-Amz-Signature=d3f4e14ef4bfbb1aac88bce4f214d98f495e9f0be15b671e4855a1b962a3f36a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGUZ2DIX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA%2B0CQRZnC5zLjaFd%2BG8uYqIiUbhpsMpotvQX4I4PAfdAiEAjY5B4GgO6%2BH4VU1leyOkZsX2heUqxz2tLk%2FjDlu8PHsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJhOn1EOSQenQ3t6ircAwLd%2ByJRmgQ%2Bi4UBu7rz4g9qXpQRJrqwN9EyShxFw%2BbuBCbMzne3m5TVDrIXfHqyB7WTSYeiQ4EVyDtBBWDGADyduii14Q4yUKHOag4FfNou05UHV5gBu79caWtcEz79B2BHnDois7By1ln0TGM%2BgalMTB6vDHJrbYckf%2Bz5zRzEvLf2HggNmXhnA0vOhjO0b9BDlr%2FpR0BE143h4ins3B6%2FDzfh5QlyQEPWLVbouHdrU%2B8eusuvtPMynn%2Br5zctWPyEG9o1TjMjaNLLFL%2FuW%2FsoTMP0S94s5WUbDdGgGdko3vrirRD5w6d4nrdd50Kxae4W8%2BKAwga%2BA%2BpxlmWSzOeH9JQHGVwNukjnvoVBOIz6u2Et8V3oWXpX9wB1jCWmOjwaWcpQ8mb%2BSFRFcS95u7v4XK9eJHG%2FYRPI22HbBXqiNuE7Qa%2F1WcsNE6OEBq7P7sqjSODPDHX9RXHeJM2s62f%2FhRUDwVl30s2EqJC0UoscS48ysHttFxTSOzQtPUf%2BYz94fiheSsQLcHbzzC6lKK%2Fg4kN6xbK2IKHvDg8S5n%2BI%2B9QMN%2BZRyfTGBB7XDGSyFrSBMUWIGk1Qjvzk5iS%2FGMpzqK8mO%2B%2FUueq%2FzuP%2FuxJ4awIUxSjpPpixowR%2FMKnM%2F74GOqUBrv6Pi%2BGs9ELi7APLTjDacLWmNTRIMcTawSrE3P06cmO6sntdTvHE5nI6pgi2mb4vOcMrr7kHhW9GwAwJrcVuNkTZmXt2b6%2Br1JItHMzGzhY9Rbd3HTG3a9hYU90o%2B4Zu710hPzGklkuPf7TMGsGcIOUB29ITDjOWhUBklpQyq59wo3qwn%2BzORSqkVJTGJhyo2xwFWeKMeqL7G7WRxFk3S2UaY1Jf&X-Amz-Signature=ad8bb848157ba78dbad0f30472aa4a918094b9cb3fd3738dee89da6f5b8fc8c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
