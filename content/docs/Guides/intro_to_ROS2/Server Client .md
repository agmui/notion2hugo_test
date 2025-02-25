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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYB2QS5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIH7K2fR6fp15wyCv823Z8Xc2H7aDV8sEC3rSZ7%2Fhkml%2FAiB6Dga6dJVvt136nQsSTQdPowV3UUfXM2LlwH56ZpFRayr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMbVfikFRbvZRZmJy3KtwDcSGk8RU2BIvDYYo%2B6236bE87%2F3Fi31GqDh0bwk1AXDKe6pSf5eWNDZYFNKu9XkIxkk6hHsh%2FJuKHKNTrVIv9pKA00XY1hkrbgpUIGzlyxjFyW4GR6doLmfL%2ByZKvSdRKWrZFUi92%2FgMP8kSRU7AkAndvcY1BlwFpKYO6Fd48PuDxy0YvtDO1ZCBsdcyQfztKaagYYP5qD6WYrQ8Gc0HbUEhoXQMTuqyOW%2B5gH9VGtdSzZx1vsc2lxHiceoISwZqVsRCBp2%2B8TQnSQnD25xDXOPo5cH%2BuYwCxSLEMd02jQNGgyHJUDBkoCymkmXisSBqtBDZ1EeEDM5WMYSHe1zhO52w7uzUFaMpZP8TfDKVFihJgs5Ad5Kuz95fG1Ya8TGcXDlMpTUrLPUL9%2BlGTaIpFll8ogRctSWxIeznu1k6HkOXRp3Y5V9CQ9F6wo98yH2V%2FsUbZyc65H6isshP9RLr5ins9P%2FixWI%2BdYm6GtrNz%2F3DurqFkhcXYaryqAlDmnxBCfIbMeE%2B98p8iPfpkcHkGNG8MYKATocMeYlZNJD0ICTK3eXIta0SdB%2F5Gkg%2FmsYA%2F0SI9PNMmhv6l5piYd%2Fus5O%2Bg%2B3qzU2XjhNoR6v9czS%2FLN6vhusli7dULYaww%2Boz4vQY6pgFEDBKKknGxChU9AcUXmaDiK6sSI%2F1Emh278L8V5atR7vGjoDxjsENTJQC3UOVzPQRjrTuwgghvqRifLLJIhJdBxXba0okYs0do%2BxFmNDyq5tQoxe9dq2E6mIBJqvQ5%2FXpRyWu%2BWvFMPZYTK6yOvjCeRpIcrEUKabVPN6yn%2Fy542umohyhhe7le4lUQfcUW1qkItREw%2BfrgMfDJ9XJUoWl5Rk7itYP5&X-Amz-Signature=a79d88c21b09b3ad89c7b9fcdb44d29ae443ceda9b29a791c5bce2b8fd98198a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYB2QS5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIH7K2fR6fp15wyCv823Z8Xc2H7aDV8sEC3rSZ7%2Fhkml%2FAiB6Dga6dJVvt136nQsSTQdPowV3UUfXM2LlwH56ZpFRayr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMbVfikFRbvZRZmJy3KtwDcSGk8RU2BIvDYYo%2B6236bE87%2F3Fi31GqDh0bwk1AXDKe6pSf5eWNDZYFNKu9XkIxkk6hHsh%2FJuKHKNTrVIv9pKA00XY1hkrbgpUIGzlyxjFyW4GR6doLmfL%2ByZKvSdRKWrZFUi92%2FgMP8kSRU7AkAndvcY1BlwFpKYO6Fd48PuDxy0YvtDO1ZCBsdcyQfztKaagYYP5qD6WYrQ8Gc0HbUEhoXQMTuqyOW%2B5gH9VGtdSzZx1vsc2lxHiceoISwZqVsRCBp2%2B8TQnSQnD25xDXOPo5cH%2BuYwCxSLEMd02jQNGgyHJUDBkoCymkmXisSBqtBDZ1EeEDM5WMYSHe1zhO52w7uzUFaMpZP8TfDKVFihJgs5Ad5Kuz95fG1Ya8TGcXDlMpTUrLPUL9%2BlGTaIpFll8ogRctSWxIeznu1k6HkOXRp3Y5V9CQ9F6wo98yH2V%2FsUbZyc65H6isshP9RLr5ins9P%2FixWI%2BdYm6GtrNz%2F3DurqFkhcXYaryqAlDmnxBCfIbMeE%2B98p8iPfpkcHkGNG8MYKATocMeYlZNJD0ICTK3eXIta0SdB%2F5Gkg%2FmsYA%2F0SI9PNMmhv6l5piYd%2Fus5O%2Bg%2B3qzU2XjhNoR6v9czS%2FLN6vhusli7dULYaww%2Boz4vQY6pgFEDBKKknGxChU9AcUXmaDiK6sSI%2F1Emh278L8V5atR7vGjoDxjsENTJQC3UOVzPQRjrTuwgghvqRifLLJIhJdBxXba0okYs0do%2BxFmNDyq5tQoxe9dq2E6mIBJqvQ5%2FXpRyWu%2BWvFMPZYTK6yOvjCeRpIcrEUKabVPN6yn%2Fy542umohyhhe7le4lUQfcUW1qkItREw%2BfrgMfDJ9XJUoWl5Rk7itYP5&X-Amz-Signature=6ef333b2949202690943871c6937a8f651437761bcdd78160f46be6f79bc925f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYB2QS5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIH7K2fR6fp15wyCv823Z8Xc2H7aDV8sEC3rSZ7%2Fhkml%2FAiB6Dga6dJVvt136nQsSTQdPowV3UUfXM2LlwH56ZpFRayr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMbVfikFRbvZRZmJy3KtwDcSGk8RU2BIvDYYo%2B6236bE87%2F3Fi31GqDh0bwk1AXDKe6pSf5eWNDZYFNKu9XkIxkk6hHsh%2FJuKHKNTrVIv9pKA00XY1hkrbgpUIGzlyxjFyW4GR6doLmfL%2ByZKvSdRKWrZFUi92%2FgMP8kSRU7AkAndvcY1BlwFpKYO6Fd48PuDxy0YvtDO1ZCBsdcyQfztKaagYYP5qD6WYrQ8Gc0HbUEhoXQMTuqyOW%2B5gH9VGtdSzZx1vsc2lxHiceoISwZqVsRCBp2%2B8TQnSQnD25xDXOPo5cH%2BuYwCxSLEMd02jQNGgyHJUDBkoCymkmXisSBqtBDZ1EeEDM5WMYSHe1zhO52w7uzUFaMpZP8TfDKVFihJgs5Ad5Kuz95fG1Ya8TGcXDlMpTUrLPUL9%2BlGTaIpFll8ogRctSWxIeznu1k6HkOXRp3Y5V9CQ9F6wo98yH2V%2FsUbZyc65H6isshP9RLr5ins9P%2FixWI%2BdYm6GtrNz%2F3DurqFkhcXYaryqAlDmnxBCfIbMeE%2B98p8iPfpkcHkGNG8MYKATocMeYlZNJD0ICTK3eXIta0SdB%2F5Gkg%2FmsYA%2F0SI9PNMmhv6l5piYd%2Fus5O%2Bg%2B3qzU2XjhNoR6v9czS%2FLN6vhusli7dULYaww%2Boz4vQY6pgFEDBKKknGxChU9AcUXmaDiK6sSI%2F1Emh278L8V5atR7vGjoDxjsENTJQC3UOVzPQRjrTuwgghvqRifLLJIhJdBxXba0okYs0do%2BxFmNDyq5tQoxe9dq2E6mIBJqvQ5%2FXpRyWu%2BWvFMPZYTK6yOvjCeRpIcrEUKabVPN6yn%2Fy542umohyhhe7le4lUQfcUW1qkItREw%2BfrgMfDJ9XJUoWl5Rk7itYP5&X-Amz-Signature=738408a6db1f177a1db3df6401bac140c7daa1b70cdeabd4cc73fdcb58743018&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYB2QS5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIH7K2fR6fp15wyCv823Z8Xc2H7aDV8sEC3rSZ7%2Fhkml%2FAiB6Dga6dJVvt136nQsSTQdPowV3UUfXM2LlwH56ZpFRayr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMbVfikFRbvZRZmJy3KtwDcSGk8RU2BIvDYYo%2B6236bE87%2F3Fi31GqDh0bwk1AXDKe6pSf5eWNDZYFNKu9XkIxkk6hHsh%2FJuKHKNTrVIv9pKA00XY1hkrbgpUIGzlyxjFyW4GR6doLmfL%2ByZKvSdRKWrZFUi92%2FgMP8kSRU7AkAndvcY1BlwFpKYO6Fd48PuDxy0YvtDO1ZCBsdcyQfztKaagYYP5qD6WYrQ8Gc0HbUEhoXQMTuqyOW%2B5gH9VGtdSzZx1vsc2lxHiceoISwZqVsRCBp2%2B8TQnSQnD25xDXOPo5cH%2BuYwCxSLEMd02jQNGgyHJUDBkoCymkmXisSBqtBDZ1EeEDM5WMYSHe1zhO52w7uzUFaMpZP8TfDKVFihJgs5Ad5Kuz95fG1Ya8TGcXDlMpTUrLPUL9%2BlGTaIpFll8ogRctSWxIeznu1k6HkOXRp3Y5V9CQ9F6wo98yH2V%2FsUbZyc65H6isshP9RLr5ins9P%2FixWI%2BdYm6GtrNz%2F3DurqFkhcXYaryqAlDmnxBCfIbMeE%2B98p8iPfpkcHkGNG8MYKATocMeYlZNJD0ICTK3eXIta0SdB%2F5Gkg%2FmsYA%2F0SI9PNMmhv6l5piYd%2Fus5O%2Bg%2B3qzU2XjhNoR6v9czS%2FLN6vhusli7dULYaww%2Boz4vQY6pgFEDBKKknGxChU9AcUXmaDiK6sSI%2F1Emh278L8V5atR7vGjoDxjsENTJQC3UOVzPQRjrTuwgghvqRifLLJIhJdBxXba0okYs0do%2BxFmNDyq5tQoxe9dq2E6mIBJqvQ5%2FXpRyWu%2BWvFMPZYTK6yOvjCeRpIcrEUKabVPN6yn%2Fy542umohyhhe7le4lUQfcUW1qkItREw%2BfrgMfDJ9XJUoWl5Rk7itYP5&X-Amz-Signature=2bfae880dbac05a0acca2591e66fc501602e04c3e3c8c7f7d84f3101a98fd6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYB2QS5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIH7K2fR6fp15wyCv823Z8Xc2H7aDV8sEC3rSZ7%2Fhkml%2FAiB6Dga6dJVvt136nQsSTQdPowV3UUfXM2LlwH56ZpFRayr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMbVfikFRbvZRZmJy3KtwDcSGk8RU2BIvDYYo%2B6236bE87%2F3Fi31GqDh0bwk1AXDKe6pSf5eWNDZYFNKu9XkIxkk6hHsh%2FJuKHKNTrVIv9pKA00XY1hkrbgpUIGzlyxjFyW4GR6doLmfL%2ByZKvSdRKWrZFUi92%2FgMP8kSRU7AkAndvcY1BlwFpKYO6Fd48PuDxy0YvtDO1ZCBsdcyQfztKaagYYP5qD6WYrQ8Gc0HbUEhoXQMTuqyOW%2B5gH9VGtdSzZx1vsc2lxHiceoISwZqVsRCBp2%2B8TQnSQnD25xDXOPo5cH%2BuYwCxSLEMd02jQNGgyHJUDBkoCymkmXisSBqtBDZ1EeEDM5WMYSHe1zhO52w7uzUFaMpZP8TfDKVFihJgs5Ad5Kuz95fG1Ya8TGcXDlMpTUrLPUL9%2BlGTaIpFll8ogRctSWxIeznu1k6HkOXRp3Y5V9CQ9F6wo98yH2V%2FsUbZyc65H6isshP9RLr5ins9P%2FixWI%2BdYm6GtrNz%2F3DurqFkhcXYaryqAlDmnxBCfIbMeE%2B98p8iPfpkcHkGNG8MYKATocMeYlZNJD0ICTK3eXIta0SdB%2F5Gkg%2FmsYA%2F0SI9PNMmhv6l5piYd%2Fus5O%2Bg%2B3qzU2XjhNoR6v9czS%2FLN6vhusli7dULYaww%2Boz4vQY6pgFEDBKKknGxChU9AcUXmaDiK6sSI%2F1Emh278L8V5atR7vGjoDxjsENTJQC3UOVzPQRjrTuwgghvqRifLLJIhJdBxXba0okYs0do%2BxFmNDyq5tQoxe9dq2E6mIBJqvQ5%2FXpRyWu%2BWvFMPZYTK6yOvjCeRpIcrEUKabVPN6yn%2Fy542umohyhhe7le4lUQfcUW1qkItREw%2BfrgMfDJ9XJUoWl5Rk7itYP5&X-Amz-Signature=f25da37741f2e2e409452a335cd101b6955dae71b3917aa414b64e12088244b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
