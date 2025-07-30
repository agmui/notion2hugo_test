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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJCMPHP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Invb9l3Yjb6wFDLFgUnKoPeUpFQGEJmHHQZsxM02%2FQIhANfyX0UQ1N%2FH%2FrOODhVoe31x6QTvxmz%2BiSCmCK5UBXGRKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvoqS40vb6UMQ3HEYq3AMyylBEr7xaZf%2BzDwyZB%2F8IVJA6rpSEi%2FejUdkvicaHIO8bcHLFHK3XvtrOpC9ZHq8nK2NwEdpWSRKmtDMqIKT6j0K6c0UoSk9NVPMrXTJudMKU%2FbWhueJZeeRmJjCJP16URsMrRG2MJUotlvx8Mk6MJBoiapU5wekbDdpFPIAROXBAFxObwXccGITkGtmX%2FZ5NWoNKDQhxiGsLw7zjwSwtREUx7p7e9dSToMQSUhI0qvAfycgGCyzMkRAlHXxuGw2PSFoVFQqeHWr07TF5Ln380lZWBpgrQz1X7MqZaW%2B3wCM%2BQPn%2FR0rZWpf8PM35qe9T5PNiE8kStxKi4uAft%2FORC02Avevg2S10aMemT31lLAkFnzIH3gdUJZlTacjkHo1fq4xNZSma%2FYCqmqytFP2%2BOBAzVNheEe79kQL5YLGSrv%2BhMsUyzoau78wLzLLhDrmjnU4N%2BdefDo%2BWc9oKPLgeMQcNU6wXj0V5bq3hajNIbaVV3nQMTOlbBBjslMRYBjzdUu91ZASbANfY0XdmrcFWg3BzIBa4R3GTOo7OZPxac%2FRt9UKsdmTgLXVEmmcN%2FhfVBweZBpDjpZ7TxhG5K3bRwm%2B2kJ7fGZeE1qyV5N0tcqC%2F7GM7x8Bd89OHmjC7uKXEBjqkAVqzjpoYdMxUEmc0zja3PNkPqmsHhHsz%2FKVPBfzxR7Ka4ZQRHryf9zX0FDpC5awFobVR7TSulwqv7KIxcw%2BNKHGaw6f4%2F2sFquzKG96B2TKmjU4LK1I%2B%2FpQKXe6gAAXo6BqzPMzbjLkX7lI8YmzF8%2FBGwR1lAFO3%2BT%2Bll%2BPHb3RhPqKKy%2Bznb9uhsf%2FHuKNut6ujmEC29GmAXFPxq%2FRwhtPR9DMp&X-Amz-Signature=9abf75f6d4cd57af274cb7b399e03095847e8ce7cf870582b4c1f521afd445cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJCMPHP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Invb9l3Yjb6wFDLFgUnKoPeUpFQGEJmHHQZsxM02%2FQIhANfyX0UQ1N%2FH%2FrOODhVoe31x6QTvxmz%2BiSCmCK5UBXGRKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvoqS40vb6UMQ3HEYq3AMyylBEr7xaZf%2BzDwyZB%2F8IVJA6rpSEi%2FejUdkvicaHIO8bcHLFHK3XvtrOpC9ZHq8nK2NwEdpWSRKmtDMqIKT6j0K6c0UoSk9NVPMrXTJudMKU%2FbWhueJZeeRmJjCJP16URsMrRG2MJUotlvx8Mk6MJBoiapU5wekbDdpFPIAROXBAFxObwXccGITkGtmX%2FZ5NWoNKDQhxiGsLw7zjwSwtREUx7p7e9dSToMQSUhI0qvAfycgGCyzMkRAlHXxuGw2PSFoVFQqeHWr07TF5Ln380lZWBpgrQz1X7MqZaW%2B3wCM%2BQPn%2FR0rZWpf8PM35qe9T5PNiE8kStxKi4uAft%2FORC02Avevg2S10aMemT31lLAkFnzIH3gdUJZlTacjkHo1fq4xNZSma%2FYCqmqytFP2%2BOBAzVNheEe79kQL5YLGSrv%2BhMsUyzoau78wLzLLhDrmjnU4N%2BdefDo%2BWc9oKPLgeMQcNU6wXj0V5bq3hajNIbaVV3nQMTOlbBBjslMRYBjzdUu91ZASbANfY0XdmrcFWg3BzIBa4R3GTOo7OZPxac%2FRt9UKsdmTgLXVEmmcN%2FhfVBweZBpDjpZ7TxhG5K3bRwm%2B2kJ7fGZeE1qyV5N0tcqC%2F7GM7x8Bd89OHmjC7uKXEBjqkAVqzjpoYdMxUEmc0zja3PNkPqmsHhHsz%2FKVPBfzxR7Ka4ZQRHryf9zX0FDpC5awFobVR7TSulwqv7KIxcw%2BNKHGaw6f4%2F2sFquzKG96B2TKmjU4LK1I%2B%2FpQKXe6gAAXo6BqzPMzbjLkX7lI8YmzF8%2FBGwR1lAFO3%2BT%2Bll%2BPHb3RhPqKKy%2Bznb9uhsf%2FHuKNut6ujmEC29GmAXFPxq%2FRwhtPR9DMp&X-Amz-Signature=aa5c5882e017853533782507bfd64151d7c4f6104859b99fd5e0f48d52b61d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJCMPHP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Invb9l3Yjb6wFDLFgUnKoPeUpFQGEJmHHQZsxM02%2FQIhANfyX0UQ1N%2FH%2FrOODhVoe31x6QTvxmz%2BiSCmCK5UBXGRKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvoqS40vb6UMQ3HEYq3AMyylBEr7xaZf%2BzDwyZB%2F8IVJA6rpSEi%2FejUdkvicaHIO8bcHLFHK3XvtrOpC9ZHq8nK2NwEdpWSRKmtDMqIKT6j0K6c0UoSk9NVPMrXTJudMKU%2FbWhueJZeeRmJjCJP16URsMrRG2MJUotlvx8Mk6MJBoiapU5wekbDdpFPIAROXBAFxObwXccGITkGtmX%2FZ5NWoNKDQhxiGsLw7zjwSwtREUx7p7e9dSToMQSUhI0qvAfycgGCyzMkRAlHXxuGw2PSFoVFQqeHWr07TF5Ln380lZWBpgrQz1X7MqZaW%2B3wCM%2BQPn%2FR0rZWpf8PM35qe9T5PNiE8kStxKi4uAft%2FORC02Avevg2S10aMemT31lLAkFnzIH3gdUJZlTacjkHo1fq4xNZSma%2FYCqmqytFP2%2BOBAzVNheEe79kQL5YLGSrv%2BhMsUyzoau78wLzLLhDrmjnU4N%2BdefDo%2BWc9oKPLgeMQcNU6wXj0V5bq3hajNIbaVV3nQMTOlbBBjslMRYBjzdUu91ZASbANfY0XdmrcFWg3BzIBa4R3GTOo7OZPxac%2FRt9UKsdmTgLXVEmmcN%2FhfVBweZBpDjpZ7TxhG5K3bRwm%2B2kJ7fGZeE1qyV5N0tcqC%2F7GM7x8Bd89OHmjC7uKXEBjqkAVqzjpoYdMxUEmc0zja3PNkPqmsHhHsz%2FKVPBfzxR7Ka4ZQRHryf9zX0FDpC5awFobVR7TSulwqv7KIxcw%2BNKHGaw6f4%2F2sFquzKG96B2TKmjU4LK1I%2B%2FpQKXe6gAAXo6BqzPMzbjLkX7lI8YmzF8%2FBGwR1lAFO3%2BT%2Bll%2BPHb3RhPqKKy%2Bznb9uhsf%2FHuKNut6ujmEC29GmAXFPxq%2FRwhtPR9DMp&X-Amz-Signature=9333f041811ff42e3772412423b2536eeb19a8ed34aba8d435d6b12574d25403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJCMPHP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Invb9l3Yjb6wFDLFgUnKoPeUpFQGEJmHHQZsxM02%2FQIhANfyX0UQ1N%2FH%2FrOODhVoe31x6QTvxmz%2BiSCmCK5UBXGRKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvoqS40vb6UMQ3HEYq3AMyylBEr7xaZf%2BzDwyZB%2F8IVJA6rpSEi%2FejUdkvicaHIO8bcHLFHK3XvtrOpC9ZHq8nK2NwEdpWSRKmtDMqIKT6j0K6c0UoSk9NVPMrXTJudMKU%2FbWhueJZeeRmJjCJP16URsMrRG2MJUotlvx8Mk6MJBoiapU5wekbDdpFPIAROXBAFxObwXccGITkGtmX%2FZ5NWoNKDQhxiGsLw7zjwSwtREUx7p7e9dSToMQSUhI0qvAfycgGCyzMkRAlHXxuGw2PSFoVFQqeHWr07TF5Ln380lZWBpgrQz1X7MqZaW%2B3wCM%2BQPn%2FR0rZWpf8PM35qe9T5PNiE8kStxKi4uAft%2FORC02Avevg2S10aMemT31lLAkFnzIH3gdUJZlTacjkHo1fq4xNZSma%2FYCqmqytFP2%2BOBAzVNheEe79kQL5YLGSrv%2BhMsUyzoau78wLzLLhDrmjnU4N%2BdefDo%2BWc9oKPLgeMQcNU6wXj0V5bq3hajNIbaVV3nQMTOlbBBjslMRYBjzdUu91ZASbANfY0XdmrcFWg3BzIBa4R3GTOo7OZPxac%2FRt9UKsdmTgLXVEmmcN%2FhfVBweZBpDjpZ7TxhG5K3bRwm%2B2kJ7fGZeE1qyV5N0tcqC%2F7GM7x8Bd89OHmjC7uKXEBjqkAVqzjpoYdMxUEmc0zja3PNkPqmsHhHsz%2FKVPBfzxR7Ka4ZQRHryf9zX0FDpC5awFobVR7TSulwqv7KIxcw%2BNKHGaw6f4%2F2sFquzKG96B2TKmjU4LK1I%2B%2FpQKXe6gAAXo6BqzPMzbjLkX7lI8YmzF8%2FBGwR1lAFO3%2BT%2Bll%2BPHb3RhPqKKy%2Bznb9uhsf%2FHuKNut6ujmEC29GmAXFPxq%2FRwhtPR9DMp&X-Amz-Signature=a1d7454d1ef1c073690734516b4f098555cb88211f2fb813740f13a0684ca739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJCMPHP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Invb9l3Yjb6wFDLFgUnKoPeUpFQGEJmHHQZsxM02%2FQIhANfyX0UQ1N%2FH%2FrOODhVoe31x6QTvxmz%2BiSCmCK5UBXGRKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvoqS40vb6UMQ3HEYq3AMyylBEr7xaZf%2BzDwyZB%2F8IVJA6rpSEi%2FejUdkvicaHIO8bcHLFHK3XvtrOpC9ZHq8nK2NwEdpWSRKmtDMqIKT6j0K6c0UoSk9NVPMrXTJudMKU%2FbWhueJZeeRmJjCJP16URsMrRG2MJUotlvx8Mk6MJBoiapU5wekbDdpFPIAROXBAFxObwXccGITkGtmX%2FZ5NWoNKDQhxiGsLw7zjwSwtREUx7p7e9dSToMQSUhI0qvAfycgGCyzMkRAlHXxuGw2PSFoVFQqeHWr07TF5Ln380lZWBpgrQz1X7MqZaW%2B3wCM%2BQPn%2FR0rZWpf8PM35qe9T5PNiE8kStxKi4uAft%2FORC02Avevg2S10aMemT31lLAkFnzIH3gdUJZlTacjkHo1fq4xNZSma%2FYCqmqytFP2%2BOBAzVNheEe79kQL5YLGSrv%2BhMsUyzoau78wLzLLhDrmjnU4N%2BdefDo%2BWc9oKPLgeMQcNU6wXj0V5bq3hajNIbaVV3nQMTOlbBBjslMRYBjzdUu91ZASbANfY0XdmrcFWg3BzIBa4R3GTOo7OZPxac%2FRt9UKsdmTgLXVEmmcN%2FhfVBweZBpDjpZ7TxhG5K3bRwm%2B2kJ7fGZeE1qyV5N0tcqC%2F7GM7x8Bd89OHmjC7uKXEBjqkAVqzjpoYdMxUEmc0zja3PNkPqmsHhHsz%2FKVPBfzxR7Ka4ZQRHryf9zX0FDpC5awFobVR7TSulwqv7KIxcw%2BNKHGaw6f4%2F2sFquzKG96B2TKmjU4LK1I%2B%2FpQKXe6gAAXo6BqzPMzbjLkX7lI8YmzF8%2FBGwR1lAFO3%2BT%2Bll%2BPHb3RhPqKKy%2Bznb9uhsf%2FHuKNut6ujmEC29GmAXFPxq%2FRwhtPR9DMp&X-Amz-Signature=1a4bfdeb5cf9668d43ba2d95edfee08b4a71e81bdefff8814000be5ed48cfc18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
