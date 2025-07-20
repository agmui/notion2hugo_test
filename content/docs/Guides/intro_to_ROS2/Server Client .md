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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624VPPNA4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiKAWhrEUlu%2BbXti50d4CQu4I%2FPHuhDJSeAwKE1NjZbAiEAryDdwggc7RfaRcIV8bjmZPrH%2FD0a7%2FVPdd95BAh2uHkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5jzm04LgDJ8VcCyrcA1CKgmcM5yWjvk%2FFZs4AYxEfnVsVaqW7mJ7FES2CXNfNRVzvComPwhJcN3i0VUc49ippAe0Fj1eZq9%2BNeqjXrX7%2FpY%2FbQTYhOQt%2B6utIAZvdJE66lXePGk%2Bdmd9pw%2BfVD%2Ff%2B7Ok3hwOHdTZy%2BkSZLXlNOr82iQ5D5mSUXPvLkWSIW8ce7aCpNgUqRSOwkc1ab2hNcAXYUae4ZTWXdr6xz6C6LvoM12jwnuoe2BzzPQATxbZv0tW%2BHRZjrL%2FAUXgUvSq7cYGWQ2RiMqXA9QD%2FdC02ZGWSLSw7AovUsxb7G6H0w3xaPfM%2BM0eQUlusQo83G0TtUFJPnf%2Fx8Xlb1DAH0X5m%2B42Fdb9ywk9Y5f9%2BrUsobYyms4q7U%2For022IdtlI7t2F%2BYxc7qdXBegy6VVNAZVkmnz6RxXwqkUeENY%2FSJ6tpdS9Rd1HQFC90oteSTAixOF%2Bs2zgumH4OVZY6eqQExFd%2BHegnnDh0UWty4Ccc1oWqncXTdrtNthY09EaPf6X5HpCtMzPCCo4wMhF6NdEXgvKvLm7CV9rYADEXfiSI1H%2B8CCTgnGkCUxlGoi3%2FodELEFUsOrdgWzJGMOA6m30QQ1Y1XAwcYEkNaNEZ3DxsWpYLK5crVLPx9oQ%2BJvwMKP49MMGOqUBFmficFSRawANf4VNTHac%2BexVJ4%2FLX5qxONne84wlpVkBaV2WdcNIHSdJDGGTXU%2BwiwYqhzGx8JL%2BnUnFsGpPMn7LAJwofWv0Y590pCt3Ofetn1XJ%2BWDkR054uCDBdqwwAi%2FgKz3v23fhFJuynk7L%2B%2BRHrQ%2FXRSsOZ37PjN0ny6d%2FHmccKaSSeCJvtu0ufy3N61IpfLDQPB85TyZzxwJJF6TZZIvt&X-Amz-Signature=310b84b848e837a292bfad98328b113319a7b5eecad5056bda78e247a15c35cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624VPPNA4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiKAWhrEUlu%2BbXti50d4CQu4I%2FPHuhDJSeAwKE1NjZbAiEAryDdwggc7RfaRcIV8bjmZPrH%2FD0a7%2FVPdd95BAh2uHkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5jzm04LgDJ8VcCyrcA1CKgmcM5yWjvk%2FFZs4AYxEfnVsVaqW7mJ7FES2CXNfNRVzvComPwhJcN3i0VUc49ippAe0Fj1eZq9%2BNeqjXrX7%2FpY%2FbQTYhOQt%2B6utIAZvdJE66lXePGk%2Bdmd9pw%2BfVD%2Ff%2B7Ok3hwOHdTZy%2BkSZLXlNOr82iQ5D5mSUXPvLkWSIW8ce7aCpNgUqRSOwkc1ab2hNcAXYUae4ZTWXdr6xz6C6LvoM12jwnuoe2BzzPQATxbZv0tW%2BHRZjrL%2FAUXgUvSq7cYGWQ2RiMqXA9QD%2FdC02ZGWSLSw7AovUsxb7G6H0w3xaPfM%2BM0eQUlusQo83G0TtUFJPnf%2Fx8Xlb1DAH0X5m%2B42Fdb9ywk9Y5f9%2BrUsobYyms4q7U%2For022IdtlI7t2F%2BYxc7qdXBegy6VVNAZVkmnz6RxXwqkUeENY%2FSJ6tpdS9Rd1HQFC90oteSTAixOF%2Bs2zgumH4OVZY6eqQExFd%2BHegnnDh0UWty4Ccc1oWqncXTdrtNthY09EaPf6X5HpCtMzPCCo4wMhF6NdEXgvKvLm7CV9rYADEXfiSI1H%2B8CCTgnGkCUxlGoi3%2FodELEFUsOrdgWzJGMOA6m30QQ1Y1XAwcYEkNaNEZ3DxsWpYLK5crVLPx9oQ%2BJvwMKP49MMGOqUBFmficFSRawANf4VNTHac%2BexVJ4%2FLX5qxONne84wlpVkBaV2WdcNIHSdJDGGTXU%2BwiwYqhzGx8JL%2BnUnFsGpPMn7LAJwofWv0Y590pCt3Ofetn1XJ%2BWDkR054uCDBdqwwAi%2FgKz3v23fhFJuynk7L%2B%2BRHrQ%2FXRSsOZ37PjN0ny6d%2FHmccKaSSeCJvtu0ufy3N61IpfLDQPB85TyZzxwJJF6TZZIvt&X-Amz-Signature=387dfed54274d6fe44a509434d5862a1063c7844d320675c6a2d85dbec96c579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624VPPNA4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiKAWhrEUlu%2BbXti50d4CQu4I%2FPHuhDJSeAwKE1NjZbAiEAryDdwggc7RfaRcIV8bjmZPrH%2FD0a7%2FVPdd95BAh2uHkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5jzm04LgDJ8VcCyrcA1CKgmcM5yWjvk%2FFZs4AYxEfnVsVaqW7mJ7FES2CXNfNRVzvComPwhJcN3i0VUc49ippAe0Fj1eZq9%2BNeqjXrX7%2FpY%2FbQTYhOQt%2B6utIAZvdJE66lXePGk%2Bdmd9pw%2BfVD%2Ff%2B7Ok3hwOHdTZy%2BkSZLXlNOr82iQ5D5mSUXPvLkWSIW8ce7aCpNgUqRSOwkc1ab2hNcAXYUae4ZTWXdr6xz6C6LvoM12jwnuoe2BzzPQATxbZv0tW%2BHRZjrL%2FAUXgUvSq7cYGWQ2RiMqXA9QD%2FdC02ZGWSLSw7AovUsxb7G6H0w3xaPfM%2BM0eQUlusQo83G0TtUFJPnf%2Fx8Xlb1DAH0X5m%2B42Fdb9ywk9Y5f9%2BrUsobYyms4q7U%2For022IdtlI7t2F%2BYxc7qdXBegy6VVNAZVkmnz6RxXwqkUeENY%2FSJ6tpdS9Rd1HQFC90oteSTAixOF%2Bs2zgumH4OVZY6eqQExFd%2BHegnnDh0UWty4Ccc1oWqncXTdrtNthY09EaPf6X5HpCtMzPCCo4wMhF6NdEXgvKvLm7CV9rYADEXfiSI1H%2B8CCTgnGkCUxlGoi3%2FodELEFUsOrdgWzJGMOA6m30QQ1Y1XAwcYEkNaNEZ3DxsWpYLK5crVLPx9oQ%2BJvwMKP49MMGOqUBFmficFSRawANf4VNTHac%2BexVJ4%2FLX5qxONne84wlpVkBaV2WdcNIHSdJDGGTXU%2BwiwYqhzGx8JL%2BnUnFsGpPMn7LAJwofWv0Y590pCt3Ofetn1XJ%2BWDkR054uCDBdqwwAi%2FgKz3v23fhFJuynk7L%2B%2BRHrQ%2FXRSsOZ37PjN0ny6d%2FHmccKaSSeCJvtu0ufy3N61IpfLDQPB85TyZzxwJJF6TZZIvt&X-Amz-Signature=a2e6c64e18ed98f217db9bf88b98a1fe487b84eb9b768b26b4d076d0905a8cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624VPPNA4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiKAWhrEUlu%2BbXti50d4CQu4I%2FPHuhDJSeAwKE1NjZbAiEAryDdwggc7RfaRcIV8bjmZPrH%2FD0a7%2FVPdd95BAh2uHkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5jzm04LgDJ8VcCyrcA1CKgmcM5yWjvk%2FFZs4AYxEfnVsVaqW7mJ7FES2CXNfNRVzvComPwhJcN3i0VUc49ippAe0Fj1eZq9%2BNeqjXrX7%2FpY%2FbQTYhOQt%2B6utIAZvdJE66lXePGk%2Bdmd9pw%2BfVD%2Ff%2B7Ok3hwOHdTZy%2BkSZLXlNOr82iQ5D5mSUXPvLkWSIW8ce7aCpNgUqRSOwkc1ab2hNcAXYUae4ZTWXdr6xz6C6LvoM12jwnuoe2BzzPQATxbZv0tW%2BHRZjrL%2FAUXgUvSq7cYGWQ2RiMqXA9QD%2FdC02ZGWSLSw7AovUsxb7G6H0w3xaPfM%2BM0eQUlusQo83G0TtUFJPnf%2Fx8Xlb1DAH0X5m%2B42Fdb9ywk9Y5f9%2BrUsobYyms4q7U%2For022IdtlI7t2F%2BYxc7qdXBegy6VVNAZVkmnz6RxXwqkUeENY%2FSJ6tpdS9Rd1HQFC90oteSTAixOF%2Bs2zgumH4OVZY6eqQExFd%2BHegnnDh0UWty4Ccc1oWqncXTdrtNthY09EaPf6X5HpCtMzPCCo4wMhF6NdEXgvKvLm7CV9rYADEXfiSI1H%2B8CCTgnGkCUxlGoi3%2FodELEFUsOrdgWzJGMOA6m30QQ1Y1XAwcYEkNaNEZ3DxsWpYLK5crVLPx9oQ%2BJvwMKP49MMGOqUBFmficFSRawANf4VNTHac%2BexVJ4%2FLX5qxONne84wlpVkBaV2WdcNIHSdJDGGTXU%2BwiwYqhzGx8JL%2BnUnFsGpPMn7LAJwofWv0Y590pCt3Ofetn1XJ%2BWDkR054uCDBdqwwAi%2FgKz3v23fhFJuynk7L%2B%2BRHrQ%2FXRSsOZ37PjN0ny6d%2FHmccKaSSeCJvtu0ufy3N61IpfLDQPB85TyZzxwJJF6TZZIvt&X-Amz-Signature=d9bdbb9e257424ab4c7e87cd865fcdf3713850e53f4538af89509e4e18be7230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624VPPNA4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiKAWhrEUlu%2BbXti50d4CQu4I%2FPHuhDJSeAwKE1NjZbAiEAryDdwggc7RfaRcIV8bjmZPrH%2FD0a7%2FVPdd95BAh2uHkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5jzm04LgDJ8VcCyrcA1CKgmcM5yWjvk%2FFZs4AYxEfnVsVaqW7mJ7FES2CXNfNRVzvComPwhJcN3i0VUc49ippAe0Fj1eZq9%2BNeqjXrX7%2FpY%2FbQTYhOQt%2B6utIAZvdJE66lXePGk%2Bdmd9pw%2BfVD%2Ff%2B7Ok3hwOHdTZy%2BkSZLXlNOr82iQ5D5mSUXPvLkWSIW8ce7aCpNgUqRSOwkc1ab2hNcAXYUae4ZTWXdr6xz6C6LvoM12jwnuoe2BzzPQATxbZv0tW%2BHRZjrL%2FAUXgUvSq7cYGWQ2RiMqXA9QD%2FdC02ZGWSLSw7AovUsxb7G6H0w3xaPfM%2BM0eQUlusQo83G0TtUFJPnf%2Fx8Xlb1DAH0X5m%2B42Fdb9ywk9Y5f9%2BrUsobYyms4q7U%2For022IdtlI7t2F%2BYxc7qdXBegy6VVNAZVkmnz6RxXwqkUeENY%2FSJ6tpdS9Rd1HQFC90oteSTAixOF%2Bs2zgumH4OVZY6eqQExFd%2BHegnnDh0UWty4Ccc1oWqncXTdrtNthY09EaPf6X5HpCtMzPCCo4wMhF6NdEXgvKvLm7CV9rYADEXfiSI1H%2B8CCTgnGkCUxlGoi3%2FodELEFUsOrdgWzJGMOA6m30QQ1Y1XAwcYEkNaNEZ3DxsWpYLK5crVLPx9oQ%2BJvwMKP49MMGOqUBFmficFSRawANf4VNTHac%2BexVJ4%2FLX5qxONne84wlpVkBaV2WdcNIHSdJDGGTXU%2BwiwYqhzGx8JL%2BnUnFsGpPMn7LAJwofWv0Y590pCt3Ofetn1XJ%2BWDkR054uCDBdqwwAi%2FgKz3v23fhFJuynk7L%2B%2BRHrQ%2FXRSsOZ37PjN0ny6d%2FHmccKaSSeCJvtu0ufy3N61IpfLDQPB85TyZzxwJJF6TZZIvt&X-Amz-Signature=372db37abda71a03c028cd4a74d66d94032d256cb500986a6c1b62e8f7ba838e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
