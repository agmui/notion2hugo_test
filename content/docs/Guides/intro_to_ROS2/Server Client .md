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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2TOXE2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFw2XSWU2IQGMmyD1ByDKlvx0qmmDsoW1K8ev2AcyyHWAiAfdv6bNv1de%2FsrAytmX6ulLYeGt48kzlxPJ4H3MAOBjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMft%2F7AhZXvggWJY1VKtwDGOuMl3KgeiE2S1m3dhKEk3ZjdCBwH6mImt5hjIJQmNr5LD7uSdc4X73pwNfFS7l%2B%2FqA0USudS%2BKmeMjzdu7DLWMx%2BEtuooTvdo0NTppWTJb%2Bmh%2FiL8enGsWozXks3ubWGfc%2FOZbx1s0QlNSF%2FOXgn%2FiBv3Vdc6S4wdtUbDixX7ojMddPJLLBPHZcJyyDFOW6V1m1k6KAlUQNXXsgsUStZTc53iwf1mXNm432jkNVSnKjy6BCMa%2FZhAftM2DWDmeu6%2F%2Fw02o0iRfQSgftadpARaEfsHl5%2FEAXJy%2Fk2xkdm39MXQGPIW4tQnbDSE1SH0GJVeohdYPfWUvh5yAHUuPGFiPesqlX5YcPKLnM93xqJ0CKPDKrjY0FLOUKUAe93akEu8wpCBkF9POmxNi7I8qShxAj4wUDrEWeGr3E8kswdzeLd7ZqZoNPBX5awlimAP5t1Wv2%2FJq0E5yRW06Tee90gGurIgzwlJdPx11xoCQ%2F87fRphFqXFvfJCUHEOQp%2FPhSo4oxhnfCoBxrZn3TqC6QgjiUmKPzNuuM%2Fwl6tlrdM1H5bw6IgTmitukMlSv%2FUTzlIdXX2nnvcdoLOsP0pEh9KNXEX2Xz2o2FJq27n1%2F9uA0N2s6UGvI7WXpRt7Ew1IjfwQY6pgFwkcTMS%2FqaSt4PdR5f5XsmYnb1bKcNag2jtoc3ZkLPraAIP8T%2Bu2dQIyjiNqzaYMhiXtDxnx16DnI9CqOl3CR71WgA9%2BVuCjZhxQqnu9o71TQ0aHLpHb2BvnTG8CMrk8nmjJMtLjycrYvHLDt9c6WoUeMgeWjmCJ2jS0bMuS0FYel7ota47gSRhhXCfqAwE32R29tGMzgBI79nnsRcFi%2Ff1iXMZULz&X-Amz-Signature=2b704d3deac06172552c766b4eed8ab48e34362fcacc9db6f97a01cb2caf43d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2TOXE2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFw2XSWU2IQGMmyD1ByDKlvx0qmmDsoW1K8ev2AcyyHWAiAfdv6bNv1de%2FsrAytmX6ulLYeGt48kzlxPJ4H3MAOBjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMft%2F7AhZXvggWJY1VKtwDGOuMl3KgeiE2S1m3dhKEk3ZjdCBwH6mImt5hjIJQmNr5LD7uSdc4X73pwNfFS7l%2B%2FqA0USudS%2BKmeMjzdu7DLWMx%2BEtuooTvdo0NTppWTJb%2Bmh%2FiL8enGsWozXks3ubWGfc%2FOZbx1s0QlNSF%2FOXgn%2FiBv3Vdc6S4wdtUbDixX7ojMddPJLLBPHZcJyyDFOW6V1m1k6KAlUQNXXsgsUStZTc53iwf1mXNm432jkNVSnKjy6BCMa%2FZhAftM2DWDmeu6%2F%2Fw02o0iRfQSgftadpARaEfsHl5%2FEAXJy%2Fk2xkdm39MXQGPIW4tQnbDSE1SH0GJVeohdYPfWUvh5yAHUuPGFiPesqlX5YcPKLnM93xqJ0CKPDKrjY0FLOUKUAe93akEu8wpCBkF9POmxNi7I8qShxAj4wUDrEWeGr3E8kswdzeLd7ZqZoNPBX5awlimAP5t1Wv2%2FJq0E5yRW06Tee90gGurIgzwlJdPx11xoCQ%2F87fRphFqXFvfJCUHEOQp%2FPhSo4oxhnfCoBxrZn3TqC6QgjiUmKPzNuuM%2Fwl6tlrdM1H5bw6IgTmitukMlSv%2FUTzlIdXX2nnvcdoLOsP0pEh9KNXEX2Xz2o2FJq27n1%2F9uA0N2s6UGvI7WXpRt7Ew1IjfwQY6pgFwkcTMS%2FqaSt4PdR5f5XsmYnb1bKcNag2jtoc3ZkLPraAIP8T%2Bu2dQIyjiNqzaYMhiXtDxnx16DnI9CqOl3CR71WgA9%2BVuCjZhxQqnu9o71TQ0aHLpHb2BvnTG8CMrk8nmjJMtLjycrYvHLDt9c6WoUeMgeWjmCJ2jS0bMuS0FYel7ota47gSRhhXCfqAwE32R29tGMzgBI79nnsRcFi%2Ff1iXMZULz&X-Amz-Signature=5db4bff52c860d2f35ac776eba11e3b1785a610a3ee137160512f8165e1e7a10&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2TOXE2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFw2XSWU2IQGMmyD1ByDKlvx0qmmDsoW1K8ev2AcyyHWAiAfdv6bNv1de%2FsrAytmX6ulLYeGt48kzlxPJ4H3MAOBjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMft%2F7AhZXvggWJY1VKtwDGOuMl3KgeiE2S1m3dhKEk3ZjdCBwH6mImt5hjIJQmNr5LD7uSdc4X73pwNfFS7l%2B%2FqA0USudS%2BKmeMjzdu7DLWMx%2BEtuooTvdo0NTppWTJb%2Bmh%2FiL8enGsWozXks3ubWGfc%2FOZbx1s0QlNSF%2FOXgn%2FiBv3Vdc6S4wdtUbDixX7ojMddPJLLBPHZcJyyDFOW6V1m1k6KAlUQNXXsgsUStZTc53iwf1mXNm432jkNVSnKjy6BCMa%2FZhAftM2DWDmeu6%2F%2Fw02o0iRfQSgftadpARaEfsHl5%2FEAXJy%2Fk2xkdm39MXQGPIW4tQnbDSE1SH0GJVeohdYPfWUvh5yAHUuPGFiPesqlX5YcPKLnM93xqJ0CKPDKrjY0FLOUKUAe93akEu8wpCBkF9POmxNi7I8qShxAj4wUDrEWeGr3E8kswdzeLd7ZqZoNPBX5awlimAP5t1Wv2%2FJq0E5yRW06Tee90gGurIgzwlJdPx11xoCQ%2F87fRphFqXFvfJCUHEOQp%2FPhSo4oxhnfCoBxrZn3TqC6QgjiUmKPzNuuM%2Fwl6tlrdM1H5bw6IgTmitukMlSv%2FUTzlIdXX2nnvcdoLOsP0pEh9KNXEX2Xz2o2FJq27n1%2F9uA0N2s6UGvI7WXpRt7Ew1IjfwQY6pgFwkcTMS%2FqaSt4PdR5f5XsmYnb1bKcNag2jtoc3ZkLPraAIP8T%2Bu2dQIyjiNqzaYMhiXtDxnx16DnI9CqOl3CR71WgA9%2BVuCjZhxQqnu9o71TQ0aHLpHb2BvnTG8CMrk8nmjJMtLjycrYvHLDt9c6WoUeMgeWjmCJ2jS0bMuS0FYel7ota47gSRhhXCfqAwE32R29tGMzgBI79nnsRcFi%2Ff1iXMZULz&X-Amz-Signature=3e581b3768504cd8dac2a77406ee34d77710c3b27b135734e4431fe7535ed8a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2TOXE2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFw2XSWU2IQGMmyD1ByDKlvx0qmmDsoW1K8ev2AcyyHWAiAfdv6bNv1de%2FsrAytmX6ulLYeGt48kzlxPJ4H3MAOBjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMft%2F7AhZXvggWJY1VKtwDGOuMl3KgeiE2S1m3dhKEk3ZjdCBwH6mImt5hjIJQmNr5LD7uSdc4X73pwNfFS7l%2B%2FqA0USudS%2BKmeMjzdu7DLWMx%2BEtuooTvdo0NTppWTJb%2Bmh%2FiL8enGsWozXks3ubWGfc%2FOZbx1s0QlNSF%2FOXgn%2FiBv3Vdc6S4wdtUbDixX7ojMddPJLLBPHZcJyyDFOW6V1m1k6KAlUQNXXsgsUStZTc53iwf1mXNm432jkNVSnKjy6BCMa%2FZhAftM2DWDmeu6%2F%2Fw02o0iRfQSgftadpARaEfsHl5%2FEAXJy%2Fk2xkdm39MXQGPIW4tQnbDSE1SH0GJVeohdYPfWUvh5yAHUuPGFiPesqlX5YcPKLnM93xqJ0CKPDKrjY0FLOUKUAe93akEu8wpCBkF9POmxNi7I8qShxAj4wUDrEWeGr3E8kswdzeLd7ZqZoNPBX5awlimAP5t1Wv2%2FJq0E5yRW06Tee90gGurIgzwlJdPx11xoCQ%2F87fRphFqXFvfJCUHEOQp%2FPhSo4oxhnfCoBxrZn3TqC6QgjiUmKPzNuuM%2Fwl6tlrdM1H5bw6IgTmitukMlSv%2FUTzlIdXX2nnvcdoLOsP0pEh9KNXEX2Xz2o2FJq27n1%2F9uA0N2s6UGvI7WXpRt7Ew1IjfwQY6pgFwkcTMS%2FqaSt4PdR5f5XsmYnb1bKcNag2jtoc3ZkLPraAIP8T%2Bu2dQIyjiNqzaYMhiXtDxnx16DnI9CqOl3CR71WgA9%2BVuCjZhxQqnu9o71TQ0aHLpHb2BvnTG8CMrk8nmjJMtLjycrYvHLDt9c6WoUeMgeWjmCJ2jS0bMuS0FYel7ota47gSRhhXCfqAwE32R29tGMzgBI79nnsRcFi%2Ff1iXMZULz&X-Amz-Signature=82420da4d3658c5ff3b0cd971bb8947d218ef23076f6e14f6fdb47cfcfc56947&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2TOXE2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFw2XSWU2IQGMmyD1ByDKlvx0qmmDsoW1K8ev2AcyyHWAiAfdv6bNv1de%2FsrAytmX6ulLYeGt48kzlxPJ4H3MAOBjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMft%2F7AhZXvggWJY1VKtwDGOuMl3KgeiE2S1m3dhKEk3ZjdCBwH6mImt5hjIJQmNr5LD7uSdc4X73pwNfFS7l%2B%2FqA0USudS%2BKmeMjzdu7DLWMx%2BEtuooTvdo0NTppWTJb%2Bmh%2FiL8enGsWozXks3ubWGfc%2FOZbx1s0QlNSF%2FOXgn%2FiBv3Vdc6S4wdtUbDixX7ojMddPJLLBPHZcJyyDFOW6V1m1k6KAlUQNXXsgsUStZTc53iwf1mXNm432jkNVSnKjy6BCMa%2FZhAftM2DWDmeu6%2F%2Fw02o0iRfQSgftadpARaEfsHl5%2FEAXJy%2Fk2xkdm39MXQGPIW4tQnbDSE1SH0GJVeohdYPfWUvh5yAHUuPGFiPesqlX5YcPKLnM93xqJ0CKPDKrjY0FLOUKUAe93akEu8wpCBkF9POmxNi7I8qShxAj4wUDrEWeGr3E8kswdzeLd7ZqZoNPBX5awlimAP5t1Wv2%2FJq0E5yRW06Tee90gGurIgzwlJdPx11xoCQ%2F87fRphFqXFvfJCUHEOQp%2FPhSo4oxhnfCoBxrZn3TqC6QgjiUmKPzNuuM%2Fwl6tlrdM1H5bw6IgTmitukMlSv%2FUTzlIdXX2nnvcdoLOsP0pEh9KNXEX2Xz2o2FJq27n1%2F9uA0N2s6UGvI7WXpRt7Ew1IjfwQY6pgFwkcTMS%2FqaSt4PdR5f5XsmYnb1bKcNag2jtoc3ZkLPraAIP8T%2Bu2dQIyjiNqzaYMhiXtDxnx16DnI9CqOl3CR71WgA9%2BVuCjZhxQqnu9o71TQ0aHLpHb2BvnTG8CMrk8nmjJMtLjycrYvHLDt9c6WoUeMgeWjmCJ2jS0bMuS0FYel7ota47gSRhhXCfqAwE32R29tGMzgBI79nnsRcFi%2Ff1iXMZULz&X-Amz-Signature=f5c49735aae79498e248821f8573a309b2d2d3d0c952f102ba31e0110afddadf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
