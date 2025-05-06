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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RN7HSDF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIXxkAPIPoavuqwB1ZYNhhO%2B1zyVu296y7IWDhufOLXAiEAkolsms6XapQGdnOyE%2FN%2F4%2BYeWnK%2FWvxlYYFhsZzt4ksq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDghdvsLGNkRqVED7SrcA%2BfMJekWMn%2B%2FoE354Q1nf8h3Uh9KJXYq%2F47kTT1oem7ex9gR2A2vaAkakMfSY2GES0KClLAqqKOR0E%2ByNkKYMUkyWnpiLlGDYsrMXGCIZAWDDs7eMp0NNsD0ixgMmTFn8TU6DORUiCNNaJQZuA83bf172maMuRaOW0KKoi1XIJvYx0G%2BMVtoR7oj0pap%2F1bsfw8%2FH12tSwtZek0MYRo6dkI7RIlFXYoSSnUP1CMy6hFJ%2FOnqifi7%2FLRvoWrTGMOHtSsIVFPhD5vayoSo06w3o9l%2Bg163CmI1CvUfwHsLpd%2BChL5zW75ZaIHjLwakH0XZej4ELvXHgYqz2KLeyOKzkuF8R4pSlF6JKvpgbUABOm9EMe%2BsYDk7oU63Cnu8Ux0poQVjI2rxUi%2FHK30bsrxOIwWcNQajqnVOUoT2xSu385OU%2F8zXStYkQsbHni%2FdUjoUbbysgYDpuB1IX5Df2n9wv2llMmxpX%2F8kXvMrJe11MTZUMbpTzUjJcj0PkJQXiwt3%2B0kyYfImFsggblAiy6CCTdS7Ft1XvvPFl4CCiqPD2EwCkK88Yg9sjR2QLdYj5Wt7g29CGFQASdnr%2F5KJv3IjpskmRmLSFORWPQAwL7tMrX7K2rqyagYKNKWfv8GqMIux5cAGOqUBxcaluvo%2B7ztkEf%2Bo9Fb31TvXmARpfVsMlu2sAeQwbc%2B6RyCd3kS5m6C0GaastY0qD5W7%2BmenBYM5opbG9EKeEHew5ZoLLuw9Za66Ny5ofqIAb%2FjZop0kQRJxSR4AAv8oieDotP%2BRp6AEN6v2j6H%2Fhi%2FfOLJnNb8HicrGI68R4WI2tHmXsmSPK65sdvFPvhNkodSc6Y60%2BEJcQsdCZ9ru6cnMgPFS&X-Amz-Signature=025276feb09371b819b4ba4cd186402a66cd8c61579fed741dc775de9ee33316&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RN7HSDF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIXxkAPIPoavuqwB1ZYNhhO%2B1zyVu296y7IWDhufOLXAiEAkolsms6XapQGdnOyE%2FN%2F4%2BYeWnK%2FWvxlYYFhsZzt4ksq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDghdvsLGNkRqVED7SrcA%2BfMJekWMn%2B%2FoE354Q1nf8h3Uh9KJXYq%2F47kTT1oem7ex9gR2A2vaAkakMfSY2GES0KClLAqqKOR0E%2ByNkKYMUkyWnpiLlGDYsrMXGCIZAWDDs7eMp0NNsD0ixgMmTFn8TU6DORUiCNNaJQZuA83bf172maMuRaOW0KKoi1XIJvYx0G%2BMVtoR7oj0pap%2F1bsfw8%2FH12tSwtZek0MYRo6dkI7RIlFXYoSSnUP1CMy6hFJ%2FOnqifi7%2FLRvoWrTGMOHtSsIVFPhD5vayoSo06w3o9l%2Bg163CmI1CvUfwHsLpd%2BChL5zW75ZaIHjLwakH0XZej4ELvXHgYqz2KLeyOKzkuF8R4pSlF6JKvpgbUABOm9EMe%2BsYDk7oU63Cnu8Ux0poQVjI2rxUi%2FHK30bsrxOIwWcNQajqnVOUoT2xSu385OU%2F8zXStYkQsbHni%2FdUjoUbbysgYDpuB1IX5Df2n9wv2llMmxpX%2F8kXvMrJe11MTZUMbpTzUjJcj0PkJQXiwt3%2B0kyYfImFsggblAiy6CCTdS7Ft1XvvPFl4CCiqPD2EwCkK88Yg9sjR2QLdYj5Wt7g29CGFQASdnr%2F5KJv3IjpskmRmLSFORWPQAwL7tMrX7K2rqyagYKNKWfv8GqMIux5cAGOqUBxcaluvo%2B7ztkEf%2Bo9Fb31TvXmARpfVsMlu2sAeQwbc%2B6RyCd3kS5m6C0GaastY0qD5W7%2BmenBYM5opbG9EKeEHew5ZoLLuw9Za66Ny5ofqIAb%2FjZop0kQRJxSR4AAv8oieDotP%2BRp6AEN6v2j6H%2Fhi%2FfOLJnNb8HicrGI68R4WI2tHmXsmSPK65sdvFPvhNkodSc6Y60%2BEJcQsdCZ9ru6cnMgPFS&X-Amz-Signature=42cba3c6d3238916d7bbfc8a390a056ae605825e71a3d9aea5ed6b7ab870a3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RN7HSDF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIXxkAPIPoavuqwB1ZYNhhO%2B1zyVu296y7IWDhufOLXAiEAkolsms6XapQGdnOyE%2FN%2F4%2BYeWnK%2FWvxlYYFhsZzt4ksq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDghdvsLGNkRqVED7SrcA%2BfMJekWMn%2B%2FoE354Q1nf8h3Uh9KJXYq%2F47kTT1oem7ex9gR2A2vaAkakMfSY2GES0KClLAqqKOR0E%2ByNkKYMUkyWnpiLlGDYsrMXGCIZAWDDs7eMp0NNsD0ixgMmTFn8TU6DORUiCNNaJQZuA83bf172maMuRaOW0KKoi1XIJvYx0G%2BMVtoR7oj0pap%2F1bsfw8%2FH12tSwtZek0MYRo6dkI7RIlFXYoSSnUP1CMy6hFJ%2FOnqifi7%2FLRvoWrTGMOHtSsIVFPhD5vayoSo06w3o9l%2Bg163CmI1CvUfwHsLpd%2BChL5zW75ZaIHjLwakH0XZej4ELvXHgYqz2KLeyOKzkuF8R4pSlF6JKvpgbUABOm9EMe%2BsYDk7oU63Cnu8Ux0poQVjI2rxUi%2FHK30bsrxOIwWcNQajqnVOUoT2xSu385OU%2F8zXStYkQsbHni%2FdUjoUbbysgYDpuB1IX5Df2n9wv2llMmxpX%2F8kXvMrJe11MTZUMbpTzUjJcj0PkJQXiwt3%2B0kyYfImFsggblAiy6CCTdS7Ft1XvvPFl4CCiqPD2EwCkK88Yg9sjR2QLdYj5Wt7g29CGFQASdnr%2F5KJv3IjpskmRmLSFORWPQAwL7tMrX7K2rqyagYKNKWfv8GqMIux5cAGOqUBxcaluvo%2B7ztkEf%2Bo9Fb31TvXmARpfVsMlu2sAeQwbc%2B6RyCd3kS5m6C0GaastY0qD5W7%2BmenBYM5opbG9EKeEHew5ZoLLuw9Za66Ny5ofqIAb%2FjZop0kQRJxSR4AAv8oieDotP%2BRp6AEN6v2j6H%2Fhi%2FfOLJnNb8HicrGI68R4WI2tHmXsmSPK65sdvFPvhNkodSc6Y60%2BEJcQsdCZ9ru6cnMgPFS&X-Amz-Signature=4811be4208dbe2516ddf0fb47c840db13dba95f728e05a19b39b981e2528f70c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RN7HSDF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIXxkAPIPoavuqwB1ZYNhhO%2B1zyVu296y7IWDhufOLXAiEAkolsms6XapQGdnOyE%2FN%2F4%2BYeWnK%2FWvxlYYFhsZzt4ksq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDghdvsLGNkRqVED7SrcA%2BfMJekWMn%2B%2FoE354Q1nf8h3Uh9KJXYq%2F47kTT1oem7ex9gR2A2vaAkakMfSY2GES0KClLAqqKOR0E%2ByNkKYMUkyWnpiLlGDYsrMXGCIZAWDDs7eMp0NNsD0ixgMmTFn8TU6DORUiCNNaJQZuA83bf172maMuRaOW0KKoi1XIJvYx0G%2BMVtoR7oj0pap%2F1bsfw8%2FH12tSwtZek0MYRo6dkI7RIlFXYoSSnUP1CMy6hFJ%2FOnqifi7%2FLRvoWrTGMOHtSsIVFPhD5vayoSo06w3o9l%2Bg163CmI1CvUfwHsLpd%2BChL5zW75ZaIHjLwakH0XZej4ELvXHgYqz2KLeyOKzkuF8R4pSlF6JKvpgbUABOm9EMe%2BsYDk7oU63Cnu8Ux0poQVjI2rxUi%2FHK30bsrxOIwWcNQajqnVOUoT2xSu385OU%2F8zXStYkQsbHni%2FdUjoUbbysgYDpuB1IX5Df2n9wv2llMmxpX%2F8kXvMrJe11MTZUMbpTzUjJcj0PkJQXiwt3%2B0kyYfImFsggblAiy6CCTdS7Ft1XvvPFl4CCiqPD2EwCkK88Yg9sjR2QLdYj5Wt7g29CGFQASdnr%2F5KJv3IjpskmRmLSFORWPQAwL7tMrX7K2rqyagYKNKWfv8GqMIux5cAGOqUBxcaluvo%2B7ztkEf%2Bo9Fb31TvXmARpfVsMlu2sAeQwbc%2B6RyCd3kS5m6C0GaastY0qD5W7%2BmenBYM5opbG9EKeEHew5ZoLLuw9Za66Ny5ofqIAb%2FjZop0kQRJxSR4AAv8oieDotP%2BRp6AEN6v2j6H%2Fhi%2FfOLJnNb8HicrGI68R4WI2tHmXsmSPK65sdvFPvhNkodSc6Y60%2BEJcQsdCZ9ru6cnMgPFS&X-Amz-Signature=6ac73f8259efdd010868c1808dc35a6940ccacf39a0f0fd701bf8fc66e0fb709&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RN7HSDF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIXxkAPIPoavuqwB1ZYNhhO%2B1zyVu296y7IWDhufOLXAiEAkolsms6XapQGdnOyE%2FN%2F4%2BYeWnK%2FWvxlYYFhsZzt4ksq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDghdvsLGNkRqVED7SrcA%2BfMJekWMn%2B%2FoE354Q1nf8h3Uh9KJXYq%2F47kTT1oem7ex9gR2A2vaAkakMfSY2GES0KClLAqqKOR0E%2ByNkKYMUkyWnpiLlGDYsrMXGCIZAWDDs7eMp0NNsD0ixgMmTFn8TU6DORUiCNNaJQZuA83bf172maMuRaOW0KKoi1XIJvYx0G%2BMVtoR7oj0pap%2F1bsfw8%2FH12tSwtZek0MYRo6dkI7RIlFXYoSSnUP1CMy6hFJ%2FOnqifi7%2FLRvoWrTGMOHtSsIVFPhD5vayoSo06w3o9l%2Bg163CmI1CvUfwHsLpd%2BChL5zW75ZaIHjLwakH0XZej4ELvXHgYqz2KLeyOKzkuF8R4pSlF6JKvpgbUABOm9EMe%2BsYDk7oU63Cnu8Ux0poQVjI2rxUi%2FHK30bsrxOIwWcNQajqnVOUoT2xSu385OU%2F8zXStYkQsbHni%2FdUjoUbbysgYDpuB1IX5Df2n9wv2llMmxpX%2F8kXvMrJe11MTZUMbpTzUjJcj0PkJQXiwt3%2B0kyYfImFsggblAiy6CCTdS7Ft1XvvPFl4CCiqPD2EwCkK88Yg9sjR2QLdYj5Wt7g29CGFQASdnr%2F5KJv3IjpskmRmLSFORWPQAwL7tMrX7K2rqyagYKNKWfv8GqMIux5cAGOqUBxcaluvo%2B7ztkEf%2Bo9Fb31TvXmARpfVsMlu2sAeQwbc%2B6RyCd3kS5m6C0GaastY0qD5W7%2BmenBYM5opbG9EKeEHew5ZoLLuw9Za66Ny5ofqIAb%2FjZop0kQRJxSR4AAv8oieDotP%2BRp6AEN6v2j6H%2Fhi%2FfOLJnNb8HicrGI68R4WI2tHmXsmSPK65sdvFPvhNkodSc6Y60%2BEJcQsdCZ9ru6cnMgPFS&X-Amz-Signature=f245aae7b4fb0b599496b0c192dd76972b323d2b88e982b4bfd7c91a062f5dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
