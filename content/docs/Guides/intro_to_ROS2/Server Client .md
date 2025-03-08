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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNKLYJEL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCpC%2BTEI9hg%2BgLBn0aiisu1dmp9woXwzrgXY47KliZuCQIhAJKCc7kCiJYKX55dcBl9VDeemk2ZMXPTDF0%2F%2Fbpwt4P3Kv8DCGcQABoMNjM3NDIzMTgzODA1Igx1bM9uhxeHsVbKBVgq3ANRtdfEFbcwbB%2FNbS6IyDfhdQWq8PxSze%2BvrmLvCn00ZdT97usUCtjv26YoXexKwtPWzkd4BHNPBcCWXzYLKxan80rhRCNB6Cl73Nra8gVqlah78uqvFkqZy6RLZPjapU3aUjxi0lwah2Q5RVG1A1ohDdnVDXyml3nH7JqGTjdaI7htD1GckKpPPxlUObUeuHVa6iqzW1mtzdx9WHxklXnV%2BK8FLV3XnhZ6aBk4dQ1pzrWt8nwWGmhUib6lsklHNRALqUvi3ebNIrtOKIikXrW3My%2FxBuRwlm86C0wBwvDYyC%2FLfUsUCsn6QIcy1Vovre3k9KhoUHD0hHFZqvUzE%2FifqjPOSuu56kWBgoOt4f2VZKxahdfV%2FiWbb%2B4anB4v4vDe%2BFfXq%2FkdMY2f%2BnCAgYm8DlIAclwO9TKWAeeVryhgdL%2F4ktgs0RgPFxPcdYgHoox9WfiXYDECIrnRe%2BhzK9fIvRJogMXz8l%2BF2WIri6IJtEJobQnGYP5Cy8EQwki4KBI9QnLi9JHeL2ZHnxQB0D%2B6Sck58v%2FsKlamh251xgPoYAntXM3goAcCjERSF%2FY1KvLCM8d1jGzvuBvCysem2FowFdwOyo57%2FS1Yn5iepXIOINNiwQDfXkBqsxJ0KzDQ8rK%2BBjqkASBkHMAwo%2FwVpSJxfhBK3fx8z1dgwNPVf6ebNGtSCcrIr8sTIb6fr0X%2F7E8y917hadwBMdu2I2CN7nOhALN2WL0b%2FVjklgKiLoZz%2B6nBHIWDQmqdVWFjPTHZ9GH3ykWXA4vDSh1St7TLl6xsZJpKKtIIF2%2BNAPLu0JkjkeVIZTngfvui471bZbYHS%2Fe%2FQl9HGqoeDfmvg7xbQaVxYavrY8tptbOF&X-Amz-Signature=7506c8b4149853620e83313e3d18d3ae587431c8ec565ef4f81e6d37d2247d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNKLYJEL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCpC%2BTEI9hg%2BgLBn0aiisu1dmp9woXwzrgXY47KliZuCQIhAJKCc7kCiJYKX55dcBl9VDeemk2ZMXPTDF0%2F%2Fbpwt4P3Kv8DCGcQABoMNjM3NDIzMTgzODA1Igx1bM9uhxeHsVbKBVgq3ANRtdfEFbcwbB%2FNbS6IyDfhdQWq8PxSze%2BvrmLvCn00ZdT97usUCtjv26YoXexKwtPWzkd4BHNPBcCWXzYLKxan80rhRCNB6Cl73Nra8gVqlah78uqvFkqZy6RLZPjapU3aUjxi0lwah2Q5RVG1A1ohDdnVDXyml3nH7JqGTjdaI7htD1GckKpPPxlUObUeuHVa6iqzW1mtzdx9WHxklXnV%2BK8FLV3XnhZ6aBk4dQ1pzrWt8nwWGmhUib6lsklHNRALqUvi3ebNIrtOKIikXrW3My%2FxBuRwlm86C0wBwvDYyC%2FLfUsUCsn6QIcy1Vovre3k9KhoUHD0hHFZqvUzE%2FifqjPOSuu56kWBgoOt4f2VZKxahdfV%2FiWbb%2B4anB4v4vDe%2BFfXq%2FkdMY2f%2BnCAgYm8DlIAclwO9TKWAeeVryhgdL%2F4ktgs0RgPFxPcdYgHoox9WfiXYDECIrnRe%2BhzK9fIvRJogMXz8l%2BF2WIri6IJtEJobQnGYP5Cy8EQwki4KBI9QnLi9JHeL2ZHnxQB0D%2B6Sck58v%2FsKlamh251xgPoYAntXM3goAcCjERSF%2FY1KvLCM8d1jGzvuBvCysem2FowFdwOyo57%2FS1Yn5iepXIOINNiwQDfXkBqsxJ0KzDQ8rK%2BBjqkASBkHMAwo%2FwVpSJxfhBK3fx8z1dgwNPVf6ebNGtSCcrIr8sTIb6fr0X%2F7E8y917hadwBMdu2I2CN7nOhALN2WL0b%2FVjklgKiLoZz%2B6nBHIWDQmqdVWFjPTHZ9GH3ykWXA4vDSh1St7TLl6xsZJpKKtIIF2%2BNAPLu0JkjkeVIZTngfvui471bZbYHS%2Fe%2FQl9HGqoeDfmvg7xbQaVxYavrY8tptbOF&X-Amz-Signature=aa72e35d0f70d109298a329808aa799e00a4d3de90fb885d23c9b01507b1bfbb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNKLYJEL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCpC%2BTEI9hg%2BgLBn0aiisu1dmp9woXwzrgXY47KliZuCQIhAJKCc7kCiJYKX55dcBl9VDeemk2ZMXPTDF0%2F%2Fbpwt4P3Kv8DCGcQABoMNjM3NDIzMTgzODA1Igx1bM9uhxeHsVbKBVgq3ANRtdfEFbcwbB%2FNbS6IyDfhdQWq8PxSze%2BvrmLvCn00ZdT97usUCtjv26YoXexKwtPWzkd4BHNPBcCWXzYLKxan80rhRCNB6Cl73Nra8gVqlah78uqvFkqZy6RLZPjapU3aUjxi0lwah2Q5RVG1A1ohDdnVDXyml3nH7JqGTjdaI7htD1GckKpPPxlUObUeuHVa6iqzW1mtzdx9WHxklXnV%2BK8FLV3XnhZ6aBk4dQ1pzrWt8nwWGmhUib6lsklHNRALqUvi3ebNIrtOKIikXrW3My%2FxBuRwlm86C0wBwvDYyC%2FLfUsUCsn6QIcy1Vovre3k9KhoUHD0hHFZqvUzE%2FifqjPOSuu56kWBgoOt4f2VZKxahdfV%2FiWbb%2B4anB4v4vDe%2BFfXq%2FkdMY2f%2BnCAgYm8DlIAclwO9TKWAeeVryhgdL%2F4ktgs0RgPFxPcdYgHoox9WfiXYDECIrnRe%2BhzK9fIvRJogMXz8l%2BF2WIri6IJtEJobQnGYP5Cy8EQwki4KBI9QnLi9JHeL2ZHnxQB0D%2B6Sck58v%2FsKlamh251xgPoYAntXM3goAcCjERSF%2FY1KvLCM8d1jGzvuBvCysem2FowFdwOyo57%2FS1Yn5iepXIOINNiwQDfXkBqsxJ0KzDQ8rK%2BBjqkASBkHMAwo%2FwVpSJxfhBK3fx8z1dgwNPVf6ebNGtSCcrIr8sTIb6fr0X%2F7E8y917hadwBMdu2I2CN7nOhALN2WL0b%2FVjklgKiLoZz%2B6nBHIWDQmqdVWFjPTHZ9GH3ykWXA4vDSh1St7TLl6xsZJpKKtIIF2%2BNAPLu0JkjkeVIZTngfvui471bZbYHS%2Fe%2FQl9HGqoeDfmvg7xbQaVxYavrY8tptbOF&X-Amz-Signature=681c2e830ed6d9c51f9b726d299aa5cc922ba5a0b4f4b4f3cf41e0e86583fa9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNKLYJEL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCpC%2BTEI9hg%2BgLBn0aiisu1dmp9woXwzrgXY47KliZuCQIhAJKCc7kCiJYKX55dcBl9VDeemk2ZMXPTDF0%2F%2Fbpwt4P3Kv8DCGcQABoMNjM3NDIzMTgzODA1Igx1bM9uhxeHsVbKBVgq3ANRtdfEFbcwbB%2FNbS6IyDfhdQWq8PxSze%2BvrmLvCn00ZdT97usUCtjv26YoXexKwtPWzkd4BHNPBcCWXzYLKxan80rhRCNB6Cl73Nra8gVqlah78uqvFkqZy6RLZPjapU3aUjxi0lwah2Q5RVG1A1ohDdnVDXyml3nH7JqGTjdaI7htD1GckKpPPxlUObUeuHVa6iqzW1mtzdx9WHxklXnV%2BK8FLV3XnhZ6aBk4dQ1pzrWt8nwWGmhUib6lsklHNRALqUvi3ebNIrtOKIikXrW3My%2FxBuRwlm86C0wBwvDYyC%2FLfUsUCsn6QIcy1Vovre3k9KhoUHD0hHFZqvUzE%2FifqjPOSuu56kWBgoOt4f2VZKxahdfV%2FiWbb%2B4anB4v4vDe%2BFfXq%2FkdMY2f%2BnCAgYm8DlIAclwO9TKWAeeVryhgdL%2F4ktgs0RgPFxPcdYgHoox9WfiXYDECIrnRe%2BhzK9fIvRJogMXz8l%2BF2WIri6IJtEJobQnGYP5Cy8EQwki4KBI9QnLi9JHeL2ZHnxQB0D%2B6Sck58v%2FsKlamh251xgPoYAntXM3goAcCjERSF%2FY1KvLCM8d1jGzvuBvCysem2FowFdwOyo57%2FS1Yn5iepXIOINNiwQDfXkBqsxJ0KzDQ8rK%2BBjqkASBkHMAwo%2FwVpSJxfhBK3fx8z1dgwNPVf6ebNGtSCcrIr8sTIb6fr0X%2F7E8y917hadwBMdu2I2CN7nOhALN2WL0b%2FVjklgKiLoZz%2B6nBHIWDQmqdVWFjPTHZ9GH3ykWXA4vDSh1St7TLl6xsZJpKKtIIF2%2BNAPLu0JkjkeVIZTngfvui471bZbYHS%2Fe%2FQl9HGqoeDfmvg7xbQaVxYavrY8tptbOF&X-Amz-Signature=07b55fb4969eef27a7c488f54185a2891ecab581bc7e63362f4536e1481e7030&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNKLYJEL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCpC%2BTEI9hg%2BgLBn0aiisu1dmp9woXwzrgXY47KliZuCQIhAJKCc7kCiJYKX55dcBl9VDeemk2ZMXPTDF0%2F%2Fbpwt4P3Kv8DCGcQABoMNjM3NDIzMTgzODA1Igx1bM9uhxeHsVbKBVgq3ANRtdfEFbcwbB%2FNbS6IyDfhdQWq8PxSze%2BvrmLvCn00ZdT97usUCtjv26YoXexKwtPWzkd4BHNPBcCWXzYLKxan80rhRCNB6Cl73Nra8gVqlah78uqvFkqZy6RLZPjapU3aUjxi0lwah2Q5RVG1A1ohDdnVDXyml3nH7JqGTjdaI7htD1GckKpPPxlUObUeuHVa6iqzW1mtzdx9WHxklXnV%2BK8FLV3XnhZ6aBk4dQ1pzrWt8nwWGmhUib6lsklHNRALqUvi3ebNIrtOKIikXrW3My%2FxBuRwlm86C0wBwvDYyC%2FLfUsUCsn6QIcy1Vovre3k9KhoUHD0hHFZqvUzE%2FifqjPOSuu56kWBgoOt4f2VZKxahdfV%2FiWbb%2B4anB4v4vDe%2BFfXq%2FkdMY2f%2BnCAgYm8DlIAclwO9TKWAeeVryhgdL%2F4ktgs0RgPFxPcdYgHoox9WfiXYDECIrnRe%2BhzK9fIvRJogMXz8l%2BF2WIri6IJtEJobQnGYP5Cy8EQwki4KBI9QnLi9JHeL2ZHnxQB0D%2B6Sck58v%2FsKlamh251xgPoYAntXM3goAcCjERSF%2FY1KvLCM8d1jGzvuBvCysem2FowFdwOyo57%2FS1Yn5iepXIOINNiwQDfXkBqsxJ0KzDQ8rK%2BBjqkASBkHMAwo%2FwVpSJxfhBK3fx8z1dgwNPVf6ebNGtSCcrIr8sTIb6fr0X%2F7E8y917hadwBMdu2I2CN7nOhALN2WL0b%2FVjklgKiLoZz%2B6nBHIWDQmqdVWFjPTHZ9GH3ykWXA4vDSh1St7TLl6xsZJpKKtIIF2%2BNAPLu0JkjkeVIZTngfvui471bZbYHS%2Fe%2FQl9HGqoeDfmvg7xbQaVxYavrY8tptbOF&X-Amz-Signature=01b600827c19f44026e12b6f3955ae73279052b8d37f9f6e4a1c5f0002bf5c14&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
