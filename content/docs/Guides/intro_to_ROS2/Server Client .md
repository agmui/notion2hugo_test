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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQJ2ALJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHvEsc3RZrCMsfUEWt5Y0rIrMrO8syBkQX2tstZZSQJHAiAqVjbVf08YtMZz3u4zzFe9p8oVN3beaXftr4e7r3wSYyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhegI40PLt8Ej9DrdKtwDT%2FOh06etTwj2Rrd7j3u7rkfd68atVveb5x5sRsZ0X%2B6%2BJB3iZbeJYxqKFwMaSfmIxQ5Ujci5xaexWrum3Gqfc9JboO371pA90%2BnmUgGbfFDcOFIHinXAKrV96a2MWvhtz8H2s2UPSZAq8S1ScojAIHlFPaeDnQFmRmdgQ63uRlaMnz1NNRz4adlYJ9lhFYo7oDW5mqcIGD4KAhjA9HBqOMUdpyeZdl0oPF7hnBcfzExNPeuJz9UxZlV%2Fyt0bJTwpKt4fP4GEz96cdrSrzkETjL%2Fg5d%2FP2T8TylM5Yfr70WZW9bWy37zRo%2FteBn45%2FYHG1Izmykl0rCFX5bOXNVWDvFOMnkzTbSMiMs6pC5ZGCrEwNXGPxPwAlGCQUI24Kt5NNf8yAyLWnNZOUjk2UrBG%2BEie99eR7K8%2FHSRrRz6QPTGFoNf3HQEqdH9esxfdQ12qEayh4koKoSTyeg7RASLHLqe%2BrpjZVKeZFXiyJeHs6QAmrRVcU5qizWWxsV0sgkKeeFyq%2BmjgXBE%2BzX9v4FbMpGj6AeNpxeuyc8q1AZWZR330j4poBfDiTfMTg8MLTou21LFII5Qrdy4JeMm2QXBpIxI2B6RlLwOvFFgfWfZRiy7f%2BwUstmbY5MY4Rdkw0%2Fu0vwY6pgGYl%2FgTeWh6WGC630zqDXIqWE5RSCxmpVlFD%2BUP1vDZkRiRJOjoLMqK%2B%2FV4nxn%2FlAHxN3IsdI4uKSjw%2FTm6a4OuM841UyQhjVbnOkNf0gWplSyKICFPtoDJBAJ3eGFv%2Bw7HJssN60YLUEkXARCVEBfgFj2syQ%2B20aEdXLSyuIGGxUhsaLC8LYs%2F05d2mYwn5ihGurUTnhVr6Relp2A7gH8GTX1Ig%2BLM&X-Amz-Signature=022cf4994e6b2b996ce9f7decf4790526489c1d19d1b12172a1d6459b5f576de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQJ2ALJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHvEsc3RZrCMsfUEWt5Y0rIrMrO8syBkQX2tstZZSQJHAiAqVjbVf08YtMZz3u4zzFe9p8oVN3beaXftr4e7r3wSYyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhegI40PLt8Ej9DrdKtwDT%2FOh06etTwj2Rrd7j3u7rkfd68atVveb5x5sRsZ0X%2B6%2BJB3iZbeJYxqKFwMaSfmIxQ5Ujci5xaexWrum3Gqfc9JboO371pA90%2BnmUgGbfFDcOFIHinXAKrV96a2MWvhtz8H2s2UPSZAq8S1ScojAIHlFPaeDnQFmRmdgQ63uRlaMnz1NNRz4adlYJ9lhFYo7oDW5mqcIGD4KAhjA9HBqOMUdpyeZdl0oPF7hnBcfzExNPeuJz9UxZlV%2Fyt0bJTwpKt4fP4GEz96cdrSrzkETjL%2Fg5d%2FP2T8TylM5Yfr70WZW9bWy37zRo%2FteBn45%2FYHG1Izmykl0rCFX5bOXNVWDvFOMnkzTbSMiMs6pC5ZGCrEwNXGPxPwAlGCQUI24Kt5NNf8yAyLWnNZOUjk2UrBG%2BEie99eR7K8%2FHSRrRz6QPTGFoNf3HQEqdH9esxfdQ12qEayh4koKoSTyeg7RASLHLqe%2BrpjZVKeZFXiyJeHs6QAmrRVcU5qizWWxsV0sgkKeeFyq%2BmjgXBE%2BzX9v4FbMpGj6AeNpxeuyc8q1AZWZR330j4poBfDiTfMTg8MLTou21LFII5Qrdy4JeMm2QXBpIxI2B6RlLwOvFFgfWfZRiy7f%2BwUstmbY5MY4Rdkw0%2Fu0vwY6pgGYl%2FgTeWh6WGC630zqDXIqWE5RSCxmpVlFD%2BUP1vDZkRiRJOjoLMqK%2B%2FV4nxn%2FlAHxN3IsdI4uKSjw%2FTm6a4OuM841UyQhjVbnOkNf0gWplSyKICFPtoDJBAJ3eGFv%2Bw7HJssN60YLUEkXARCVEBfgFj2syQ%2B20aEdXLSyuIGGxUhsaLC8LYs%2F05d2mYwn5ihGurUTnhVr6Relp2A7gH8GTX1Ig%2BLM&X-Amz-Signature=53551d9be6f09c7c182d1b3d40263c92120cdba8342f53d5cc4866a6868a3039&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQJ2ALJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHvEsc3RZrCMsfUEWt5Y0rIrMrO8syBkQX2tstZZSQJHAiAqVjbVf08YtMZz3u4zzFe9p8oVN3beaXftr4e7r3wSYyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhegI40PLt8Ej9DrdKtwDT%2FOh06etTwj2Rrd7j3u7rkfd68atVveb5x5sRsZ0X%2B6%2BJB3iZbeJYxqKFwMaSfmIxQ5Ujci5xaexWrum3Gqfc9JboO371pA90%2BnmUgGbfFDcOFIHinXAKrV96a2MWvhtz8H2s2UPSZAq8S1ScojAIHlFPaeDnQFmRmdgQ63uRlaMnz1NNRz4adlYJ9lhFYo7oDW5mqcIGD4KAhjA9HBqOMUdpyeZdl0oPF7hnBcfzExNPeuJz9UxZlV%2Fyt0bJTwpKt4fP4GEz96cdrSrzkETjL%2Fg5d%2FP2T8TylM5Yfr70WZW9bWy37zRo%2FteBn45%2FYHG1Izmykl0rCFX5bOXNVWDvFOMnkzTbSMiMs6pC5ZGCrEwNXGPxPwAlGCQUI24Kt5NNf8yAyLWnNZOUjk2UrBG%2BEie99eR7K8%2FHSRrRz6QPTGFoNf3HQEqdH9esxfdQ12qEayh4koKoSTyeg7RASLHLqe%2BrpjZVKeZFXiyJeHs6QAmrRVcU5qizWWxsV0sgkKeeFyq%2BmjgXBE%2BzX9v4FbMpGj6AeNpxeuyc8q1AZWZR330j4poBfDiTfMTg8MLTou21LFII5Qrdy4JeMm2QXBpIxI2B6RlLwOvFFgfWfZRiy7f%2BwUstmbY5MY4Rdkw0%2Fu0vwY6pgGYl%2FgTeWh6WGC630zqDXIqWE5RSCxmpVlFD%2BUP1vDZkRiRJOjoLMqK%2B%2FV4nxn%2FlAHxN3IsdI4uKSjw%2FTm6a4OuM841UyQhjVbnOkNf0gWplSyKICFPtoDJBAJ3eGFv%2Bw7HJssN60YLUEkXARCVEBfgFj2syQ%2B20aEdXLSyuIGGxUhsaLC8LYs%2F05d2mYwn5ihGurUTnhVr6Relp2A7gH8GTX1Ig%2BLM&X-Amz-Signature=df1939e419ca5c3af21db01c51d63b21a1a7860ae37ebbdd277b0142e07cb0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQJ2ALJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHvEsc3RZrCMsfUEWt5Y0rIrMrO8syBkQX2tstZZSQJHAiAqVjbVf08YtMZz3u4zzFe9p8oVN3beaXftr4e7r3wSYyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhegI40PLt8Ej9DrdKtwDT%2FOh06etTwj2Rrd7j3u7rkfd68atVveb5x5sRsZ0X%2B6%2BJB3iZbeJYxqKFwMaSfmIxQ5Ujci5xaexWrum3Gqfc9JboO371pA90%2BnmUgGbfFDcOFIHinXAKrV96a2MWvhtz8H2s2UPSZAq8S1ScojAIHlFPaeDnQFmRmdgQ63uRlaMnz1NNRz4adlYJ9lhFYo7oDW5mqcIGD4KAhjA9HBqOMUdpyeZdl0oPF7hnBcfzExNPeuJz9UxZlV%2Fyt0bJTwpKt4fP4GEz96cdrSrzkETjL%2Fg5d%2FP2T8TylM5Yfr70WZW9bWy37zRo%2FteBn45%2FYHG1Izmykl0rCFX5bOXNVWDvFOMnkzTbSMiMs6pC5ZGCrEwNXGPxPwAlGCQUI24Kt5NNf8yAyLWnNZOUjk2UrBG%2BEie99eR7K8%2FHSRrRz6QPTGFoNf3HQEqdH9esxfdQ12qEayh4koKoSTyeg7RASLHLqe%2BrpjZVKeZFXiyJeHs6QAmrRVcU5qizWWxsV0sgkKeeFyq%2BmjgXBE%2BzX9v4FbMpGj6AeNpxeuyc8q1AZWZR330j4poBfDiTfMTg8MLTou21LFII5Qrdy4JeMm2QXBpIxI2B6RlLwOvFFgfWfZRiy7f%2BwUstmbY5MY4Rdkw0%2Fu0vwY6pgGYl%2FgTeWh6WGC630zqDXIqWE5RSCxmpVlFD%2BUP1vDZkRiRJOjoLMqK%2B%2FV4nxn%2FlAHxN3IsdI4uKSjw%2FTm6a4OuM841UyQhjVbnOkNf0gWplSyKICFPtoDJBAJ3eGFv%2Bw7HJssN60YLUEkXARCVEBfgFj2syQ%2B20aEdXLSyuIGGxUhsaLC8LYs%2F05d2mYwn5ihGurUTnhVr6Relp2A7gH8GTX1Ig%2BLM&X-Amz-Signature=e2966592d5e8353e644336a39ab456125bf22616822c13f33f2d6bb73efdbd04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQJ2ALJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHvEsc3RZrCMsfUEWt5Y0rIrMrO8syBkQX2tstZZSQJHAiAqVjbVf08YtMZz3u4zzFe9p8oVN3beaXftr4e7r3wSYyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhegI40PLt8Ej9DrdKtwDT%2FOh06etTwj2Rrd7j3u7rkfd68atVveb5x5sRsZ0X%2B6%2BJB3iZbeJYxqKFwMaSfmIxQ5Ujci5xaexWrum3Gqfc9JboO371pA90%2BnmUgGbfFDcOFIHinXAKrV96a2MWvhtz8H2s2UPSZAq8S1ScojAIHlFPaeDnQFmRmdgQ63uRlaMnz1NNRz4adlYJ9lhFYo7oDW5mqcIGD4KAhjA9HBqOMUdpyeZdl0oPF7hnBcfzExNPeuJz9UxZlV%2Fyt0bJTwpKt4fP4GEz96cdrSrzkETjL%2Fg5d%2FP2T8TylM5Yfr70WZW9bWy37zRo%2FteBn45%2FYHG1Izmykl0rCFX5bOXNVWDvFOMnkzTbSMiMs6pC5ZGCrEwNXGPxPwAlGCQUI24Kt5NNf8yAyLWnNZOUjk2UrBG%2BEie99eR7K8%2FHSRrRz6QPTGFoNf3HQEqdH9esxfdQ12qEayh4koKoSTyeg7RASLHLqe%2BrpjZVKeZFXiyJeHs6QAmrRVcU5qizWWxsV0sgkKeeFyq%2BmjgXBE%2BzX9v4FbMpGj6AeNpxeuyc8q1AZWZR330j4poBfDiTfMTg8MLTou21LFII5Qrdy4JeMm2QXBpIxI2B6RlLwOvFFgfWfZRiy7f%2BwUstmbY5MY4Rdkw0%2Fu0vwY6pgGYl%2FgTeWh6WGC630zqDXIqWE5RSCxmpVlFD%2BUP1vDZkRiRJOjoLMqK%2B%2FV4nxn%2FlAHxN3IsdI4uKSjw%2FTm6a4OuM841UyQhjVbnOkNf0gWplSyKICFPtoDJBAJ3eGFv%2Bw7HJssN60YLUEkXARCVEBfgFj2syQ%2B20aEdXLSyuIGGxUhsaLC8LYs%2F05d2mYwn5ihGurUTnhVr6Relp2A7gH8GTX1Ig%2BLM&X-Amz-Signature=d8ecd4cb2ef2da68fc08c958301afda4eb2de13e24afa4d58d5a36f89ad930e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
