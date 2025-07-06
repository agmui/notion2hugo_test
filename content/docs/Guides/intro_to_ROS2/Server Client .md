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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZW32ZBF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEASa0PmMjZJox7tVNTFlYURKMuzHEqvKsmxQm1k1NeDAiEAtaCkSFcVwSBhZJQfqnaBVRsijbjWCdpYDY0sKL2WIcEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGBEfxyEfTwxU%2BXhhyrcA2DQG5TKfOo6%2FbjwOplXWhFLSwCIYJ8Zt1HwGcCY3SMK%2B%2BrcuDaJKMfVOtaEZdW%2BnUWAHNvfptPpuTrB3tyg5N%2F%2BaRECC35M9CZxA47s%2FUBnQ2L5w8eW5CvutTvXbCIMOmAD4K01kll4jP5KmcAOsn5GolW1e3eSdtnVWrKMbD6r4BRF3JuZ55iuUT%2Fulah0N31loGnSCR2EiD0sgoWIKOXA4h%2B2NDBXh%2FUDrV8oo%2FkLChk2doiC1LoeotRm3hFxTAEXyeI%2BuvqLs63zeVU3Ur2YuYZ3%2BuNxlGIguP7IUpR12YML86iMA3peATdJyT%2BeFll3JMYc2%2FlemUcaYfekNkohDUezADPnGKl5KXLm9MXMfDvtTAOg0E9%2FTgKradyzxErraYfO2GuDPbLAVAMmb1%2BWmrv7GWaNJEz23Cmcu0T22SeZjc9XBlQ6VMpYyrfirHEN2HAGzAhTB5SG7XyLfxP2WqHQoenpxHvzk7v35JLcdl111yv5tW2%2BJkVdWRnv45xiV4%2BwYHxIEgU37laxI4nuKz8j7thbM9b0c0UfY9ichE%2Fgnec7ohZlJk5aCB5OMzH1q9YhNvVk9GATRMkhckDmlLEgPYZrIVFfmpAerFbQ%2BPNDd3Rb48l28cgeMJyHp8MGOqUByYUpo8%2Fz%2B4Vkr0bKX08QmVHZygV5AVXl2r6O0dRRKkkUdXmnfBXg3D7htz694m2QSGVBvPDn8JXWTr42smS%2BbAykGC%2F5VxWVWtwYUF5KojegHJ4fXAFD%2Fnv8X4vB0afK59fzVlm%2Fu9n9v22TIAN34yr4dC39XQfNhVgx9yk0Ket5Go7e1sNYbQFPekjUv2GCk2ymfIJBq7dad3M62drPveDbjcPh&X-Amz-Signature=9d16607b9d9e55e1d3ba8618f508452093fbc482551b5351a09d8e2f1d3b4dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZW32ZBF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEASa0PmMjZJox7tVNTFlYURKMuzHEqvKsmxQm1k1NeDAiEAtaCkSFcVwSBhZJQfqnaBVRsijbjWCdpYDY0sKL2WIcEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGBEfxyEfTwxU%2BXhhyrcA2DQG5TKfOo6%2FbjwOplXWhFLSwCIYJ8Zt1HwGcCY3SMK%2B%2BrcuDaJKMfVOtaEZdW%2BnUWAHNvfptPpuTrB3tyg5N%2F%2BaRECC35M9CZxA47s%2FUBnQ2L5w8eW5CvutTvXbCIMOmAD4K01kll4jP5KmcAOsn5GolW1e3eSdtnVWrKMbD6r4BRF3JuZ55iuUT%2Fulah0N31loGnSCR2EiD0sgoWIKOXA4h%2B2NDBXh%2FUDrV8oo%2FkLChk2doiC1LoeotRm3hFxTAEXyeI%2BuvqLs63zeVU3Ur2YuYZ3%2BuNxlGIguP7IUpR12YML86iMA3peATdJyT%2BeFll3JMYc2%2FlemUcaYfekNkohDUezADPnGKl5KXLm9MXMfDvtTAOg0E9%2FTgKradyzxErraYfO2GuDPbLAVAMmb1%2BWmrv7GWaNJEz23Cmcu0T22SeZjc9XBlQ6VMpYyrfirHEN2HAGzAhTB5SG7XyLfxP2WqHQoenpxHvzk7v35JLcdl111yv5tW2%2BJkVdWRnv45xiV4%2BwYHxIEgU37laxI4nuKz8j7thbM9b0c0UfY9ichE%2Fgnec7ohZlJk5aCB5OMzH1q9YhNvVk9GATRMkhckDmlLEgPYZrIVFfmpAerFbQ%2BPNDd3Rb48l28cgeMJyHp8MGOqUByYUpo8%2Fz%2B4Vkr0bKX08QmVHZygV5AVXl2r6O0dRRKkkUdXmnfBXg3D7htz694m2QSGVBvPDn8JXWTr42smS%2BbAykGC%2F5VxWVWtwYUF5KojegHJ4fXAFD%2Fnv8X4vB0afK59fzVlm%2Fu9n9v22TIAN34yr4dC39XQfNhVgx9yk0Ket5Go7e1sNYbQFPekjUv2GCk2ymfIJBq7dad3M62drPveDbjcPh&X-Amz-Signature=243740242afe803db0a47e3cce32e37e8a2844fab47ce9f5b7480838f55603c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZW32ZBF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEASa0PmMjZJox7tVNTFlYURKMuzHEqvKsmxQm1k1NeDAiEAtaCkSFcVwSBhZJQfqnaBVRsijbjWCdpYDY0sKL2WIcEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGBEfxyEfTwxU%2BXhhyrcA2DQG5TKfOo6%2FbjwOplXWhFLSwCIYJ8Zt1HwGcCY3SMK%2B%2BrcuDaJKMfVOtaEZdW%2BnUWAHNvfptPpuTrB3tyg5N%2F%2BaRECC35M9CZxA47s%2FUBnQ2L5w8eW5CvutTvXbCIMOmAD4K01kll4jP5KmcAOsn5GolW1e3eSdtnVWrKMbD6r4BRF3JuZ55iuUT%2Fulah0N31loGnSCR2EiD0sgoWIKOXA4h%2B2NDBXh%2FUDrV8oo%2FkLChk2doiC1LoeotRm3hFxTAEXyeI%2BuvqLs63zeVU3Ur2YuYZ3%2BuNxlGIguP7IUpR12YML86iMA3peATdJyT%2BeFll3JMYc2%2FlemUcaYfekNkohDUezADPnGKl5KXLm9MXMfDvtTAOg0E9%2FTgKradyzxErraYfO2GuDPbLAVAMmb1%2BWmrv7GWaNJEz23Cmcu0T22SeZjc9XBlQ6VMpYyrfirHEN2HAGzAhTB5SG7XyLfxP2WqHQoenpxHvzk7v35JLcdl111yv5tW2%2BJkVdWRnv45xiV4%2BwYHxIEgU37laxI4nuKz8j7thbM9b0c0UfY9ichE%2Fgnec7ohZlJk5aCB5OMzH1q9YhNvVk9GATRMkhckDmlLEgPYZrIVFfmpAerFbQ%2BPNDd3Rb48l28cgeMJyHp8MGOqUByYUpo8%2Fz%2B4Vkr0bKX08QmVHZygV5AVXl2r6O0dRRKkkUdXmnfBXg3D7htz694m2QSGVBvPDn8JXWTr42smS%2BbAykGC%2F5VxWVWtwYUF5KojegHJ4fXAFD%2Fnv8X4vB0afK59fzVlm%2Fu9n9v22TIAN34yr4dC39XQfNhVgx9yk0Ket5Go7e1sNYbQFPekjUv2GCk2ymfIJBq7dad3M62drPveDbjcPh&X-Amz-Signature=9ffe16da3951c2ba1083ef9ba949dae69f3280e5450399c19a594d5682e61010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZW32ZBF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEASa0PmMjZJox7tVNTFlYURKMuzHEqvKsmxQm1k1NeDAiEAtaCkSFcVwSBhZJQfqnaBVRsijbjWCdpYDY0sKL2WIcEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGBEfxyEfTwxU%2BXhhyrcA2DQG5TKfOo6%2FbjwOplXWhFLSwCIYJ8Zt1HwGcCY3SMK%2B%2BrcuDaJKMfVOtaEZdW%2BnUWAHNvfptPpuTrB3tyg5N%2F%2BaRECC35M9CZxA47s%2FUBnQ2L5w8eW5CvutTvXbCIMOmAD4K01kll4jP5KmcAOsn5GolW1e3eSdtnVWrKMbD6r4BRF3JuZ55iuUT%2Fulah0N31loGnSCR2EiD0sgoWIKOXA4h%2B2NDBXh%2FUDrV8oo%2FkLChk2doiC1LoeotRm3hFxTAEXyeI%2BuvqLs63zeVU3Ur2YuYZ3%2BuNxlGIguP7IUpR12YML86iMA3peATdJyT%2BeFll3JMYc2%2FlemUcaYfekNkohDUezADPnGKl5KXLm9MXMfDvtTAOg0E9%2FTgKradyzxErraYfO2GuDPbLAVAMmb1%2BWmrv7GWaNJEz23Cmcu0T22SeZjc9XBlQ6VMpYyrfirHEN2HAGzAhTB5SG7XyLfxP2WqHQoenpxHvzk7v35JLcdl111yv5tW2%2BJkVdWRnv45xiV4%2BwYHxIEgU37laxI4nuKz8j7thbM9b0c0UfY9ichE%2Fgnec7ohZlJk5aCB5OMzH1q9YhNvVk9GATRMkhckDmlLEgPYZrIVFfmpAerFbQ%2BPNDd3Rb48l28cgeMJyHp8MGOqUByYUpo8%2Fz%2B4Vkr0bKX08QmVHZygV5AVXl2r6O0dRRKkkUdXmnfBXg3D7htz694m2QSGVBvPDn8JXWTr42smS%2BbAykGC%2F5VxWVWtwYUF5KojegHJ4fXAFD%2Fnv8X4vB0afK59fzVlm%2Fu9n9v22TIAN34yr4dC39XQfNhVgx9yk0Ket5Go7e1sNYbQFPekjUv2GCk2ymfIJBq7dad3M62drPveDbjcPh&X-Amz-Signature=57a2ad39c125d00b444d3d0cc209f8c62166d7807acfc6aa1d87439b4a52d444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZW32ZBF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEASa0PmMjZJox7tVNTFlYURKMuzHEqvKsmxQm1k1NeDAiEAtaCkSFcVwSBhZJQfqnaBVRsijbjWCdpYDY0sKL2WIcEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGBEfxyEfTwxU%2BXhhyrcA2DQG5TKfOo6%2FbjwOplXWhFLSwCIYJ8Zt1HwGcCY3SMK%2B%2BrcuDaJKMfVOtaEZdW%2BnUWAHNvfptPpuTrB3tyg5N%2F%2BaRECC35M9CZxA47s%2FUBnQ2L5w8eW5CvutTvXbCIMOmAD4K01kll4jP5KmcAOsn5GolW1e3eSdtnVWrKMbD6r4BRF3JuZ55iuUT%2Fulah0N31loGnSCR2EiD0sgoWIKOXA4h%2B2NDBXh%2FUDrV8oo%2FkLChk2doiC1LoeotRm3hFxTAEXyeI%2BuvqLs63zeVU3Ur2YuYZ3%2BuNxlGIguP7IUpR12YML86iMA3peATdJyT%2BeFll3JMYc2%2FlemUcaYfekNkohDUezADPnGKl5KXLm9MXMfDvtTAOg0E9%2FTgKradyzxErraYfO2GuDPbLAVAMmb1%2BWmrv7GWaNJEz23Cmcu0T22SeZjc9XBlQ6VMpYyrfirHEN2HAGzAhTB5SG7XyLfxP2WqHQoenpxHvzk7v35JLcdl111yv5tW2%2BJkVdWRnv45xiV4%2BwYHxIEgU37laxI4nuKz8j7thbM9b0c0UfY9ichE%2Fgnec7ohZlJk5aCB5OMzH1q9YhNvVk9GATRMkhckDmlLEgPYZrIVFfmpAerFbQ%2BPNDd3Rb48l28cgeMJyHp8MGOqUByYUpo8%2Fz%2B4Vkr0bKX08QmVHZygV5AVXl2r6O0dRRKkkUdXmnfBXg3D7htz694m2QSGVBvPDn8JXWTr42smS%2BbAykGC%2F5VxWVWtwYUF5KojegHJ4fXAFD%2Fnv8X4vB0afK59fzVlm%2Fu9n9v22TIAN34yr4dC39XQfNhVgx9yk0Ket5Go7e1sNYbQFPekjUv2GCk2ymfIJBq7dad3M62drPveDbjcPh&X-Amz-Signature=a67dffc1ff223ee2380393af45edf250c07bff093370b024e62a3f3e8ea5f68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
