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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY36G7X7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCF9UrP5aKPGt%2F7jkB1eOF5aQr6ziuZPwegY4Z6PLFAgwIgFS9lxECVb462mI47VNHk7sgN9VfJgkmIBfCbTUDDzgoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHxqxzfEnusR4O11sCrcA%2F38DVIbhY8gCoWI%2BdCzcW4U68YpHplsK84E3PvjYW7fu2JvCn65mVH5%2Fm4V8if8%2BIRGXJIIeNvRiOdfraq18gfJ7nNE1%2BY95rq6ScJHYqRE9VnXLAbOdWCs99irKBGfBXcFwGpsPDqcpTigndsiaIc9s1FaNDJa2PsSWCcB016gofcmpBBsr4EtYWP%2F2lcQsHcHUwgVfWBn8PaAYfpIfowRdeO8ZryEIoSkJ0Y%2BnTWU9GrpS2efgoEpC1hLZb%2BSnY3Aavawlz51OMY%2BOukcSRSiZUfIWwfmfah9%2FWq0UuCeRkLUVDaqH3CwP3tiloFpeoQcflthjdcps6TFdnYALQ4R%2FbZQAw9%2B7QptRq%2FLnbLWuxDhuPKNU%2BZJgIpRZwkU05o%2FudAjYP00TpbzJFzC42L5SK8YIWtaueyY5aDk6hESCqVj87GXJizPIr9tJAdrpdyc9QceHCvHJGBUBEptYgU6fe7wn%2FCp3HEUmsVuZfzIf9cwk0krtTBG4M1HRFnwFqYh8aDahgdm1S6hTvz4c7kf%2Bt4EB9XCGZWVatkkFN1gT%2FMGf4t1gp%2Fzj%2FV0dV%2BpiZB3Zxp5Izv2Ft%2FY5b328CoSOefmw5wq6Wi%2BVg8C%2FPWba8ydVjji9jiYcBGNMLj3%2FcEGOqUBirem3gdEjrFDVvzZ2j3yc9WC9AEKMaNBwHu6fVYsdTxH%2FqjvSaRcmTay2uuO2XYdc6bKIJMH2BAYL7XYiTbQiQ9KkzRzqV9Vq2rVXAb8jlAM2E1fO5fZf28LqO%2F8WCa2vIomPTiRgr4CEQpfeqpvw%2BD6c4WDtsxKh1h1yfUIc4jkhq39NWA04Sjxix1nHUZ0p419cJYQ488nryTC3iX%2BU%2B%2B6d%2BPq&X-Amz-Signature=bd85cc67b1480d08b15240bb054b353b087b285d862d8bfa003673bf45cb57dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY36G7X7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCF9UrP5aKPGt%2F7jkB1eOF5aQr6ziuZPwegY4Z6PLFAgwIgFS9lxECVb462mI47VNHk7sgN9VfJgkmIBfCbTUDDzgoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHxqxzfEnusR4O11sCrcA%2F38DVIbhY8gCoWI%2BdCzcW4U68YpHplsK84E3PvjYW7fu2JvCn65mVH5%2Fm4V8if8%2BIRGXJIIeNvRiOdfraq18gfJ7nNE1%2BY95rq6ScJHYqRE9VnXLAbOdWCs99irKBGfBXcFwGpsPDqcpTigndsiaIc9s1FaNDJa2PsSWCcB016gofcmpBBsr4EtYWP%2F2lcQsHcHUwgVfWBn8PaAYfpIfowRdeO8ZryEIoSkJ0Y%2BnTWU9GrpS2efgoEpC1hLZb%2BSnY3Aavawlz51OMY%2BOukcSRSiZUfIWwfmfah9%2FWq0UuCeRkLUVDaqH3CwP3tiloFpeoQcflthjdcps6TFdnYALQ4R%2FbZQAw9%2B7QptRq%2FLnbLWuxDhuPKNU%2BZJgIpRZwkU05o%2FudAjYP00TpbzJFzC42L5SK8YIWtaueyY5aDk6hESCqVj87GXJizPIr9tJAdrpdyc9QceHCvHJGBUBEptYgU6fe7wn%2FCp3HEUmsVuZfzIf9cwk0krtTBG4M1HRFnwFqYh8aDahgdm1S6hTvz4c7kf%2Bt4EB9XCGZWVatkkFN1gT%2FMGf4t1gp%2Fzj%2FV0dV%2BpiZB3Zxp5Izv2Ft%2FY5b328CoSOefmw5wq6Wi%2BVg8C%2FPWba8ydVjji9jiYcBGNMLj3%2FcEGOqUBirem3gdEjrFDVvzZ2j3yc9WC9AEKMaNBwHu6fVYsdTxH%2FqjvSaRcmTay2uuO2XYdc6bKIJMH2BAYL7XYiTbQiQ9KkzRzqV9Vq2rVXAb8jlAM2E1fO5fZf28LqO%2F8WCa2vIomPTiRgr4CEQpfeqpvw%2BD6c4WDtsxKh1h1yfUIc4jkhq39NWA04Sjxix1nHUZ0p419cJYQ488nryTC3iX%2BU%2B%2B6d%2BPq&X-Amz-Signature=e66b4bede90d349eed1b1076489610aa2d81bcb2d9da8834d0582e3e313b9c58&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY36G7X7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCF9UrP5aKPGt%2F7jkB1eOF5aQr6ziuZPwegY4Z6PLFAgwIgFS9lxECVb462mI47VNHk7sgN9VfJgkmIBfCbTUDDzgoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHxqxzfEnusR4O11sCrcA%2F38DVIbhY8gCoWI%2BdCzcW4U68YpHplsK84E3PvjYW7fu2JvCn65mVH5%2Fm4V8if8%2BIRGXJIIeNvRiOdfraq18gfJ7nNE1%2BY95rq6ScJHYqRE9VnXLAbOdWCs99irKBGfBXcFwGpsPDqcpTigndsiaIc9s1FaNDJa2PsSWCcB016gofcmpBBsr4EtYWP%2F2lcQsHcHUwgVfWBn8PaAYfpIfowRdeO8ZryEIoSkJ0Y%2BnTWU9GrpS2efgoEpC1hLZb%2BSnY3Aavawlz51OMY%2BOukcSRSiZUfIWwfmfah9%2FWq0UuCeRkLUVDaqH3CwP3tiloFpeoQcflthjdcps6TFdnYALQ4R%2FbZQAw9%2B7QptRq%2FLnbLWuxDhuPKNU%2BZJgIpRZwkU05o%2FudAjYP00TpbzJFzC42L5SK8YIWtaueyY5aDk6hESCqVj87GXJizPIr9tJAdrpdyc9QceHCvHJGBUBEptYgU6fe7wn%2FCp3HEUmsVuZfzIf9cwk0krtTBG4M1HRFnwFqYh8aDahgdm1S6hTvz4c7kf%2Bt4EB9XCGZWVatkkFN1gT%2FMGf4t1gp%2Fzj%2FV0dV%2BpiZB3Zxp5Izv2Ft%2FY5b328CoSOefmw5wq6Wi%2BVg8C%2FPWba8ydVjji9jiYcBGNMLj3%2FcEGOqUBirem3gdEjrFDVvzZ2j3yc9WC9AEKMaNBwHu6fVYsdTxH%2FqjvSaRcmTay2uuO2XYdc6bKIJMH2BAYL7XYiTbQiQ9KkzRzqV9Vq2rVXAb8jlAM2E1fO5fZf28LqO%2F8WCa2vIomPTiRgr4CEQpfeqpvw%2BD6c4WDtsxKh1h1yfUIc4jkhq39NWA04Sjxix1nHUZ0p419cJYQ488nryTC3iX%2BU%2B%2B6d%2BPq&X-Amz-Signature=4871a2e30eca65a672c5e286a0b2230d7443d8c4193f05249cb6673266d72588&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY36G7X7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCF9UrP5aKPGt%2F7jkB1eOF5aQr6ziuZPwegY4Z6PLFAgwIgFS9lxECVb462mI47VNHk7sgN9VfJgkmIBfCbTUDDzgoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHxqxzfEnusR4O11sCrcA%2F38DVIbhY8gCoWI%2BdCzcW4U68YpHplsK84E3PvjYW7fu2JvCn65mVH5%2Fm4V8if8%2BIRGXJIIeNvRiOdfraq18gfJ7nNE1%2BY95rq6ScJHYqRE9VnXLAbOdWCs99irKBGfBXcFwGpsPDqcpTigndsiaIc9s1FaNDJa2PsSWCcB016gofcmpBBsr4EtYWP%2F2lcQsHcHUwgVfWBn8PaAYfpIfowRdeO8ZryEIoSkJ0Y%2BnTWU9GrpS2efgoEpC1hLZb%2BSnY3Aavawlz51OMY%2BOukcSRSiZUfIWwfmfah9%2FWq0UuCeRkLUVDaqH3CwP3tiloFpeoQcflthjdcps6TFdnYALQ4R%2FbZQAw9%2B7QptRq%2FLnbLWuxDhuPKNU%2BZJgIpRZwkU05o%2FudAjYP00TpbzJFzC42L5SK8YIWtaueyY5aDk6hESCqVj87GXJizPIr9tJAdrpdyc9QceHCvHJGBUBEptYgU6fe7wn%2FCp3HEUmsVuZfzIf9cwk0krtTBG4M1HRFnwFqYh8aDahgdm1S6hTvz4c7kf%2Bt4EB9XCGZWVatkkFN1gT%2FMGf4t1gp%2Fzj%2FV0dV%2BpiZB3Zxp5Izv2Ft%2FY5b328CoSOefmw5wq6Wi%2BVg8C%2FPWba8ydVjji9jiYcBGNMLj3%2FcEGOqUBirem3gdEjrFDVvzZ2j3yc9WC9AEKMaNBwHu6fVYsdTxH%2FqjvSaRcmTay2uuO2XYdc6bKIJMH2BAYL7XYiTbQiQ9KkzRzqV9Vq2rVXAb8jlAM2E1fO5fZf28LqO%2F8WCa2vIomPTiRgr4CEQpfeqpvw%2BD6c4WDtsxKh1h1yfUIc4jkhq39NWA04Sjxix1nHUZ0p419cJYQ488nryTC3iX%2BU%2B%2B6d%2BPq&X-Amz-Signature=0a1f8ea3872dbce1b97e437ee1f641452c0689827685bdd1df4451f9db1e5693&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY36G7X7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCF9UrP5aKPGt%2F7jkB1eOF5aQr6ziuZPwegY4Z6PLFAgwIgFS9lxECVb462mI47VNHk7sgN9VfJgkmIBfCbTUDDzgoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHxqxzfEnusR4O11sCrcA%2F38DVIbhY8gCoWI%2BdCzcW4U68YpHplsK84E3PvjYW7fu2JvCn65mVH5%2Fm4V8if8%2BIRGXJIIeNvRiOdfraq18gfJ7nNE1%2BY95rq6ScJHYqRE9VnXLAbOdWCs99irKBGfBXcFwGpsPDqcpTigndsiaIc9s1FaNDJa2PsSWCcB016gofcmpBBsr4EtYWP%2F2lcQsHcHUwgVfWBn8PaAYfpIfowRdeO8ZryEIoSkJ0Y%2BnTWU9GrpS2efgoEpC1hLZb%2BSnY3Aavawlz51OMY%2BOukcSRSiZUfIWwfmfah9%2FWq0UuCeRkLUVDaqH3CwP3tiloFpeoQcflthjdcps6TFdnYALQ4R%2FbZQAw9%2B7QptRq%2FLnbLWuxDhuPKNU%2BZJgIpRZwkU05o%2FudAjYP00TpbzJFzC42L5SK8YIWtaueyY5aDk6hESCqVj87GXJizPIr9tJAdrpdyc9QceHCvHJGBUBEptYgU6fe7wn%2FCp3HEUmsVuZfzIf9cwk0krtTBG4M1HRFnwFqYh8aDahgdm1S6hTvz4c7kf%2Bt4EB9XCGZWVatkkFN1gT%2FMGf4t1gp%2Fzj%2FV0dV%2BpiZB3Zxp5Izv2Ft%2FY5b328CoSOefmw5wq6Wi%2BVg8C%2FPWba8ydVjji9jiYcBGNMLj3%2FcEGOqUBirem3gdEjrFDVvzZ2j3yc9WC9AEKMaNBwHu6fVYsdTxH%2FqjvSaRcmTay2uuO2XYdc6bKIJMH2BAYL7XYiTbQiQ9KkzRzqV9Vq2rVXAb8jlAM2E1fO5fZf28LqO%2F8WCa2vIomPTiRgr4CEQpfeqpvw%2BD6c4WDtsxKh1h1yfUIc4jkhq39NWA04Sjxix1nHUZ0p419cJYQ488nryTC3iX%2BU%2B%2B6d%2BPq&X-Amz-Signature=7b14181927fc75708483bb2abe75269b02cc9a8db0708fe523d990e996f800e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
