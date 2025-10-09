---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ2XHNH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCZ%2F%2BdLVte7UFOaUp3I4AREVWwLUwb2h3tlr7%2FVaFN7bwIhAKVmidALau2RaoBK4kjQstE7dC%2Fz3vSaa2Ja1taaas6CKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq3PPiXJrPB5wkh5oq3AP6awmKJDcsSNw658A9asy9p1hyZ8O90ohNzAjonGUWgmiP1yAycG5AyLwZVRpFvcjVueVegydY%2FANMrKB7vSAGZT7XzeFrAgzLrnnyByjQuBN%2BfRdX5rFqikkORUrgmOfzR22v%2FUI291yTnI6QKmu8Gb%2FsMcWEan3%2BH9n2Rz%2BEu8NQCzt9h7x2pjKH0cxd2E52fNUGxOXhQX1wmGuW%2BaohXIOwbOACRIku4Y8KwRilolBD271hEsXUM17ZK4%2BJGmfyXghfcCiUS%2FwvzE0awUbMYklZRrvMokCQZz2oHwofkYf%2FRQJabMlY2VI0Jpoj5D1LObY8Cyc5aGzFGBPoBfu72jjzMyjM1p4ZCg77hREs2MU3gbr0mUbuptHVEo6NgQGBinoCAsPRjWgpVREn0oPLIHuo6dV%2BJIppsKyPocZDaEqeRMPJYTBzRLuGqNKZSzTgBiOgAxOr%2BM25435aiqJ19c6W0Ie2Vp6sMnuvQWbreNYwb8HGtQdGtvRUpcUtNmY4RmPtDrTF8CtFCA2wvDpM5t8Cqf3ve6APuPSNY12e8FwAgKnUW4wmMoTGZ1vPL%2B7TQTAUTxvdnxMGrR1lkCC%2B4mHVIroBcyIFzp93q13Qjxll4vj9MKoUG%2B5XQjCh%2BpvHBjqkATrp2nuv8nFvXBfJWiDrJhDzgu2oZFkKm%2BRH1HCMq3014pcMGs18VbbFODnWfiboIKDoCSNMfO4GAa8xVT%2BlKE1dCBpzypdf1dJNug%2FC0vHFuwZKQVCm4u6BMq8EEbXo7K8r3TTC5wBmdMqujXmUzX3jJUjsrcMngH%2FRBY3rkbOZZ9DyED0Nz0HDi1xFswytTL8hxpr3vQzpkyJ8vrgm7Bcu%2FKdK&X-Amz-Signature=6d74ddefe5f311b01615fa922c1cba2c6726f9720ffd5e72bf1c3d95de8a9aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ2XHNH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCZ%2F%2BdLVte7UFOaUp3I4AREVWwLUwb2h3tlr7%2FVaFN7bwIhAKVmidALau2RaoBK4kjQstE7dC%2Fz3vSaa2Ja1taaas6CKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq3PPiXJrPB5wkh5oq3AP6awmKJDcsSNw658A9asy9p1hyZ8O90ohNzAjonGUWgmiP1yAycG5AyLwZVRpFvcjVueVegydY%2FANMrKB7vSAGZT7XzeFrAgzLrnnyByjQuBN%2BfRdX5rFqikkORUrgmOfzR22v%2FUI291yTnI6QKmu8Gb%2FsMcWEan3%2BH9n2Rz%2BEu8NQCzt9h7x2pjKH0cxd2E52fNUGxOXhQX1wmGuW%2BaohXIOwbOACRIku4Y8KwRilolBD271hEsXUM17ZK4%2BJGmfyXghfcCiUS%2FwvzE0awUbMYklZRrvMokCQZz2oHwofkYf%2FRQJabMlY2VI0Jpoj5D1LObY8Cyc5aGzFGBPoBfu72jjzMyjM1p4ZCg77hREs2MU3gbr0mUbuptHVEo6NgQGBinoCAsPRjWgpVREn0oPLIHuo6dV%2BJIppsKyPocZDaEqeRMPJYTBzRLuGqNKZSzTgBiOgAxOr%2BM25435aiqJ19c6W0Ie2Vp6sMnuvQWbreNYwb8HGtQdGtvRUpcUtNmY4RmPtDrTF8CtFCA2wvDpM5t8Cqf3ve6APuPSNY12e8FwAgKnUW4wmMoTGZ1vPL%2B7TQTAUTxvdnxMGrR1lkCC%2B4mHVIroBcyIFzp93q13Qjxll4vj9MKoUG%2B5XQjCh%2BpvHBjqkATrp2nuv8nFvXBfJWiDrJhDzgu2oZFkKm%2BRH1HCMq3014pcMGs18VbbFODnWfiboIKDoCSNMfO4GAa8xVT%2BlKE1dCBpzypdf1dJNug%2FC0vHFuwZKQVCm4u6BMq8EEbXo7K8r3TTC5wBmdMqujXmUzX3jJUjsrcMngH%2FRBY3rkbOZZ9DyED0Nz0HDi1xFswytTL8hxpr3vQzpkyJ8vrgm7Bcu%2FKdK&X-Amz-Signature=9d2981fd6352ac17f4072c9427894d7b4189d2944ed5467234460596959f43fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ2XHNH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCZ%2F%2BdLVte7UFOaUp3I4AREVWwLUwb2h3tlr7%2FVaFN7bwIhAKVmidALau2RaoBK4kjQstE7dC%2Fz3vSaa2Ja1taaas6CKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq3PPiXJrPB5wkh5oq3AP6awmKJDcsSNw658A9asy9p1hyZ8O90ohNzAjonGUWgmiP1yAycG5AyLwZVRpFvcjVueVegydY%2FANMrKB7vSAGZT7XzeFrAgzLrnnyByjQuBN%2BfRdX5rFqikkORUrgmOfzR22v%2FUI291yTnI6QKmu8Gb%2FsMcWEan3%2BH9n2Rz%2BEu8NQCzt9h7x2pjKH0cxd2E52fNUGxOXhQX1wmGuW%2BaohXIOwbOACRIku4Y8KwRilolBD271hEsXUM17ZK4%2BJGmfyXghfcCiUS%2FwvzE0awUbMYklZRrvMokCQZz2oHwofkYf%2FRQJabMlY2VI0Jpoj5D1LObY8Cyc5aGzFGBPoBfu72jjzMyjM1p4ZCg77hREs2MU3gbr0mUbuptHVEo6NgQGBinoCAsPRjWgpVREn0oPLIHuo6dV%2BJIppsKyPocZDaEqeRMPJYTBzRLuGqNKZSzTgBiOgAxOr%2BM25435aiqJ19c6W0Ie2Vp6sMnuvQWbreNYwb8HGtQdGtvRUpcUtNmY4RmPtDrTF8CtFCA2wvDpM5t8Cqf3ve6APuPSNY12e8FwAgKnUW4wmMoTGZ1vPL%2B7TQTAUTxvdnxMGrR1lkCC%2B4mHVIroBcyIFzp93q13Qjxll4vj9MKoUG%2B5XQjCh%2BpvHBjqkATrp2nuv8nFvXBfJWiDrJhDzgu2oZFkKm%2BRH1HCMq3014pcMGs18VbbFODnWfiboIKDoCSNMfO4GAa8xVT%2BlKE1dCBpzypdf1dJNug%2FC0vHFuwZKQVCm4u6BMq8EEbXo7K8r3TTC5wBmdMqujXmUzX3jJUjsrcMngH%2FRBY3rkbOZZ9DyED0Nz0HDi1xFswytTL8hxpr3vQzpkyJ8vrgm7Bcu%2FKdK&X-Amz-Signature=90328086dcf96d9610673d78a306fc67198899a928baf3625164ce79d4ae65d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ2XHNH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCZ%2F%2BdLVte7UFOaUp3I4AREVWwLUwb2h3tlr7%2FVaFN7bwIhAKVmidALau2RaoBK4kjQstE7dC%2Fz3vSaa2Ja1taaas6CKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq3PPiXJrPB5wkh5oq3AP6awmKJDcsSNw658A9asy9p1hyZ8O90ohNzAjonGUWgmiP1yAycG5AyLwZVRpFvcjVueVegydY%2FANMrKB7vSAGZT7XzeFrAgzLrnnyByjQuBN%2BfRdX5rFqikkORUrgmOfzR22v%2FUI291yTnI6QKmu8Gb%2FsMcWEan3%2BH9n2Rz%2BEu8NQCzt9h7x2pjKH0cxd2E52fNUGxOXhQX1wmGuW%2BaohXIOwbOACRIku4Y8KwRilolBD271hEsXUM17ZK4%2BJGmfyXghfcCiUS%2FwvzE0awUbMYklZRrvMokCQZz2oHwofkYf%2FRQJabMlY2VI0Jpoj5D1LObY8Cyc5aGzFGBPoBfu72jjzMyjM1p4ZCg77hREs2MU3gbr0mUbuptHVEo6NgQGBinoCAsPRjWgpVREn0oPLIHuo6dV%2BJIppsKyPocZDaEqeRMPJYTBzRLuGqNKZSzTgBiOgAxOr%2BM25435aiqJ19c6W0Ie2Vp6sMnuvQWbreNYwb8HGtQdGtvRUpcUtNmY4RmPtDrTF8CtFCA2wvDpM5t8Cqf3ve6APuPSNY12e8FwAgKnUW4wmMoTGZ1vPL%2B7TQTAUTxvdnxMGrR1lkCC%2B4mHVIroBcyIFzp93q13Qjxll4vj9MKoUG%2B5XQjCh%2BpvHBjqkATrp2nuv8nFvXBfJWiDrJhDzgu2oZFkKm%2BRH1HCMq3014pcMGs18VbbFODnWfiboIKDoCSNMfO4GAa8xVT%2BlKE1dCBpzypdf1dJNug%2FC0vHFuwZKQVCm4u6BMq8EEbXo7K8r3TTC5wBmdMqujXmUzX3jJUjsrcMngH%2FRBY3rkbOZZ9DyED0Nz0HDi1xFswytTL8hxpr3vQzpkyJ8vrgm7Bcu%2FKdK&X-Amz-Signature=fd15297daa49b2c9bb7dc6a1daedfe4276b124e2a35daa5c11310ce12d7c6f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ2XHNH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCZ%2F%2BdLVte7UFOaUp3I4AREVWwLUwb2h3tlr7%2FVaFN7bwIhAKVmidALau2RaoBK4kjQstE7dC%2Fz3vSaa2Ja1taaas6CKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq3PPiXJrPB5wkh5oq3AP6awmKJDcsSNw658A9asy9p1hyZ8O90ohNzAjonGUWgmiP1yAycG5AyLwZVRpFvcjVueVegydY%2FANMrKB7vSAGZT7XzeFrAgzLrnnyByjQuBN%2BfRdX5rFqikkORUrgmOfzR22v%2FUI291yTnI6QKmu8Gb%2FsMcWEan3%2BH9n2Rz%2BEu8NQCzt9h7x2pjKH0cxd2E52fNUGxOXhQX1wmGuW%2BaohXIOwbOACRIku4Y8KwRilolBD271hEsXUM17ZK4%2BJGmfyXghfcCiUS%2FwvzE0awUbMYklZRrvMokCQZz2oHwofkYf%2FRQJabMlY2VI0Jpoj5D1LObY8Cyc5aGzFGBPoBfu72jjzMyjM1p4ZCg77hREs2MU3gbr0mUbuptHVEo6NgQGBinoCAsPRjWgpVREn0oPLIHuo6dV%2BJIppsKyPocZDaEqeRMPJYTBzRLuGqNKZSzTgBiOgAxOr%2BM25435aiqJ19c6W0Ie2Vp6sMnuvQWbreNYwb8HGtQdGtvRUpcUtNmY4RmPtDrTF8CtFCA2wvDpM5t8Cqf3ve6APuPSNY12e8FwAgKnUW4wmMoTGZ1vPL%2B7TQTAUTxvdnxMGrR1lkCC%2B4mHVIroBcyIFzp93q13Qjxll4vj9MKoUG%2B5XQjCh%2BpvHBjqkATrp2nuv8nFvXBfJWiDrJhDzgu2oZFkKm%2BRH1HCMq3014pcMGs18VbbFODnWfiboIKDoCSNMfO4GAa8xVT%2BlKE1dCBpzypdf1dJNug%2FC0vHFuwZKQVCm4u6BMq8EEbXo7K8r3TTC5wBmdMqujXmUzX3jJUjsrcMngH%2FRBY3rkbOZZ9DyED0Nz0HDi1xFswytTL8hxpr3vQzpkyJ8vrgm7Bcu%2FKdK&X-Amz-Signature=618ec216262b7d41c3c260788bcaa95bc54d33720848ff309a113ca8d9fd7e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
