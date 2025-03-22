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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ELNHGW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDvwJYkEJ6XIS5AvL5U55R3Fkc7xp0r6eMevyHZb7bOUwIgK3TNuFKp5VGR9gjJbQ8d7GyssKz4ezIffiSmsUURY20qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLccb7EvSdcXCJGE7SrcAzGbeVHvNL2NflAzUKtZjE20k%2FfghJZgHjF5eHsDjmohOzeYfZx2TobC4jTFfwzqEsPu3hMvxMTPAh4r%2FoebjW5Tso4KIMjaiDHbvJZRwcIOq1J1%2B3W7Gq2WiOlEZ94wrHLBELn1DXdpQi1orNGo%2FiFdcI9DDCFAhuNAGJw0dCQhQ2kRSMjW8GvlROaMaOAOvKZSBf9qGmAmYIlx0mEjWixmfkI6I1FvlexIfP105%2Fp49dgqyU5Dw5h0FESKu%2B3PAJAu7OCmw8PeIgIeBV2azNF0FUiAiXDphf74yJ%2By2M6hAhMqGysOchPvxTiXb7CSZYltDNzijO4gD3BC0hJcWoeuDWa1%2F4W3ECIpIii4Ddpok2UEDTXpmv1OKZ7%2BZz3RZZXFYGJ5FU8uhTwJAjDzs0m0VJGn92AVwe4ORbwdGFkPFDJyawnPXSbghavqI1Rwb23TDt3zWAS3bhQpy5KJ1%2B4wVE5xDUNhjGTh8DMrpUMSzKp32lQPkZBR8AmtuhxgPRKHT3%2F43Z7jbW%2B7m2h9tpi3PkawYSf9OnhKeX2HgYiS5QdG%2Be8nWYbX%2BmlzSxLWp2EqBXEcBya%2B56JusV%2Bq4uj5zPAB5CMVYJlkTlfqyDsDkYKlbbuirjiMnZULMNLr%2Bb4GOqUBoFNAJcGZEdJBP3CL%2B3%2BFLCmkLfcwoNZQ269vurJuB9991zPY%2FzA7b9Fp3XgJfu94ojgUcdgvOlq0naoH6JrJZ7U8ObEvwjAXNhNdWa6Qf40k%2BDGN2QqPOprYcd%2BaTVachsD6UNk54cH%2BcOvdJ%2B%2Fg2qt%2FDf0SzaeTqNIsbN1hlchYMajbOXL46TPVxJAChAldBtcRgc9T%2FogCM2iMdLzLZ68z5XZG&X-Amz-Signature=6be0dd7e5534cb38e2714e7470fa0e646d49d633e72a62228ec51b414321977c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ELNHGW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDvwJYkEJ6XIS5AvL5U55R3Fkc7xp0r6eMevyHZb7bOUwIgK3TNuFKp5VGR9gjJbQ8d7GyssKz4ezIffiSmsUURY20qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLccb7EvSdcXCJGE7SrcAzGbeVHvNL2NflAzUKtZjE20k%2FfghJZgHjF5eHsDjmohOzeYfZx2TobC4jTFfwzqEsPu3hMvxMTPAh4r%2FoebjW5Tso4KIMjaiDHbvJZRwcIOq1J1%2B3W7Gq2WiOlEZ94wrHLBELn1DXdpQi1orNGo%2FiFdcI9DDCFAhuNAGJw0dCQhQ2kRSMjW8GvlROaMaOAOvKZSBf9qGmAmYIlx0mEjWixmfkI6I1FvlexIfP105%2Fp49dgqyU5Dw5h0FESKu%2B3PAJAu7OCmw8PeIgIeBV2azNF0FUiAiXDphf74yJ%2By2M6hAhMqGysOchPvxTiXb7CSZYltDNzijO4gD3BC0hJcWoeuDWa1%2F4W3ECIpIii4Ddpok2UEDTXpmv1OKZ7%2BZz3RZZXFYGJ5FU8uhTwJAjDzs0m0VJGn92AVwe4ORbwdGFkPFDJyawnPXSbghavqI1Rwb23TDt3zWAS3bhQpy5KJ1%2B4wVE5xDUNhjGTh8DMrpUMSzKp32lQPkZBR8AmtuhxgPRKHT3%2F43Z7jbW%2B7m2h9tpi3PkawYSf9OnhKeX2HgYiS5QdG%2Be8nWYbX%2BmlzSxLWp2EqBXEcBya%2B56JusV%2Bq4uj5zPAB5CMVYJlkTlfqyDsDkYKlbbuirjiMnZULMNLr%2Bb4GOqUBoFNAJcGZEdJBP3CL%2B3%2BFLCmkLfcwoNZQ269vurJuB9991zPY%2FzA7b9Fp3XgJfu94ojgUcdgvOlq0naoH6JrJZ7U8ObEvwjAXNhNdWa6Qf40k%2BDGN2QqPOprYcd%2BaTVachsD6UNk54cH%2BcOvdJ%2B%2Fg2qt%2FDf0SzaeTqNIsbN1hlchYMajbOXL46TPVxJAChAldBtcRgc9T%2FogCM2iMdLzLZ68z5XZG&X-Amz-Signature=98fa0c57af341d8f0edcc7d9cb18f9ad2df6469e090a0fc643d99c22b726590f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ELNHGW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDvwJYkEJ6XIS5AvL5U55R3Fkc7xp0r6eMevyHZb7bOUwIgK3TNuFKp5VGR9gjJbQ8d7GyssKz4ezIffiSmsUURY20qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLccb7EvSdcXCJGE7SrcAzGbeVHvNL2NflAzUKtZjE20k%2FfghJZgHjF5eHsDjmohOzeYfZx2TobC4jTFfwzqEsPu3hMvxMTPAh4r%2FoebjW5Tso4KIMjaiDHbvJZRwcIOq1J1%2B3W7Gq2WiOlEZ94wrHLBELn1DXdpQi1orNGo%2FiFdcI9DDCFAhuNAGJw0dCQhQ2kRSMjW8GvlROaMaOAOvKZSBf9qGmAmYIlx0mEjWixmfkI6I1FvlexIfP105%2Fp49dgqyU5Dw5h0FESKu%2B3PAJAu7OCmw8PeIgIeBV2azNF0FUiAiXDphf74yJ%2By2M6hAhMqGysOchPvxTiXb7CSZYltDNzijO4gD3BC0hJcWoeuDWa1%2F4W3ECIpIii4Ddpok2UEDTXpmv1OKZ7%2BZz3RZZXFYGJ5FU8uhTwJAjDzs0m0VJGn92AVwe4ORbwdGFkPFDJyawnPXSbghavqI1Rwb23TDt3zWAS3bhQpy5KJ1%2B4wVE5xDUNhjGTh8DMrpUMSzKp32lQPkZBR8AmtuhxgPRKHT3%2F43Z7jbW%2B7m2h9tpi3PkawYSf9OnhKeX2HgYiS5QdG%2Be8nWYbX%2BmlzSxLWp2EqBXEcBya%2B56JusV%2Bq4uj5zPAB5CMVYJlkTlfqyDsDkYKlbbuirjiMnZULMNLr%2Bb4GOqUBoFNAJcGZEdJBP3CL%2B3%2BFLCmkLfcwoNZQ269vurJuB9991zPY%2FzA7b9Fp3XgJfu94ojgUcdgvOlq0naoH6JrJZ7U8ObEvwjAXNhNdWa6Qf40k%2BDGN2QqPOprYcd%2BaTVachsD6UNk54cH%2BcOvdJ%2B%2Fg2qt%2FDf0SzaeTqNIsbN1hlchYMajbOXL46TPVxJAChAldBtcRgc9T%2FogCM2iMdLzLZ68z5XZG&X-Amz-Signature=4ad1da4ea56816dd6cc3dbcb4304c472ae5983158953bd33f0a9125b12c5a5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ELNHGW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDvwJYkEJ6XIS5AvL5U55R3Fkc7xp0r6eMevyHZb7bOUwIgK3TNuFKp5VGR9gjJbQ8d7GyssKz4ezIffiSmsUURY20qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLccb7EvSdcXCJGE7SrcAzGbeVHvNL2NflAzUKtZjE20k%2FfghJZgHjF5eHsDjmohOzeYfZx2TobC4jTFfwzqEsPu3hMvxMTPAh4r%2FoebjW5Tso4KIMjaiDHbvJZRwcIOq1J1%2B3W7Gq2WiOlEZ94wrHLBELn1DXdpQi1orNGo%2FiFdcI9DDCFAhuNAGJw0dCQhQ2kRSMjW8GvlROaMaOAOvKZSBf9qGmAmYIlx0mEjWixmfkI6I1FvlexIfP105%2Fp49dgqyU5Dw5h0FESKu%2B3PAJAu7OCmw8PeIgIeBV2azNF0FUiAiXDphf74yJ%2By2M6hAhMqGysOchPvxTiXb7CSZYltDNzijO4gD3BC0hJcWoeuDWa1%2F4W3ECIpIii4Ddpok2UEDTXpmv1OKZ7%2BZz3RZZXFYGJ5FU8uhTwJAjDzs0m0VJGn92AVwe4ORbwdGFkPFDJyawnPXSbghavqI1Rwb23TDt3zWAS3bhQpy5KJ1%2B4wVE5xDUNhjGTh8DMrpUMSzKp32lQPkZBR8AmtuhxgPRKHT3%2F43Z7jbW%2B7m2h9tpi3PkawYSf9OnhKeX2HgYiS5QdG%2Be8nWYbX%2BmlzSxLWp2EqBXEcBya%2B56JusV%2Bq4uj5zPAB5CMVYJlkTlfqyDsDkYKlbbuirjiMnZULMNLr%2Bb4GOqUBoFNAJcGZEdJBP3CL%2B3%2BFLCmkLfcwoNZQ269vurJuB9991zPY%2FzA7b9Fp3XgJfu94ojgUcdgvOlq0naoH6JrJZ7U8ObEvwjAXNhNdWa6Qf40k%2BDGN2QqPOprYcd%2BaTVachsD6UNk54cH%2BcOvdJ%2B%2Fg2qt%2FDf0SzaeTqNIsbN1hlchYMajbOXL46TPVxJAChAldBtcRgc9T%2FogCM2iMdLzLZ68z5XZG&X-Amz-Signature=e7a12c262e6a8e1bdebde9b19ac1c429b6363d5ee74bc06f76f99ed8a937ebe8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ELNHGW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDvwJYkEJ6XIS5AvL5U55R3Fkc7xp0r6eMevyHZb7bOUwIgK3TNuFKp5VGR9gjJbQ8d7GyssKz4ezIffiSmsUURY20qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLccb7EvSdcXCJGE7SrcAzGbeVHvNL2NflAzUKtZjE20k%2FfghJZgHjF5eHsDjmohOzeYfZx2TobC4jTFfwzqEsPu3hMvxMTPAh4r%2FoebjW5Tso4KIMjaiDHbvJZRwcIOq1J1%2B3W7Gq2WiOlEZ94wrHLBELn1DXdpQi1orNGo%2FiFdcI9DDCFAhuNAGJw0dCQhQ2kRSMjW8GvlROaMaOAOvKZSBf9qGmAmYIlx0mEjWixmfkI6I1FvlexIfP105%2Fp49dgqyU5Dw5h0FESKu%2B3PAJAu7OCmw8PeIgIeBV2azNF0FUiAiXDphf74yJ%2By2M6hAhMqGysOchPvxTiXb7CSZYltDNzijO4gD3BC0hJcWoeuDWa1%2F4W3ECIpIii4Ddpok2UEDTXpmv1OKZ7%2BZz3RZZXFYGJ5FU8uhTwJAjDzs0m0VJGn92AVwe4ORbwdGFkPFDJyawnPXSbghavqI1Rwb23TDt3zWAS3bhQpy5KJ1%2B4wVE5xDUNhjGTh8DMrpUMSzKp32lQPkZBR8AmtuhxgPRKHT3%2F43Z7jbW%2B7m2h9tpi3PkawYSf9OnhKeX2HgYiS5QdG%2Be8nWYbX%2BmlzSxLWp2EqBXEcBya%2B56JusV%2Bq4uj5zPAB5CMVYJlkTlfqyDsDkYKlbbuirjiMnZULMNLr%2Bb4GOqUBoFNAJcGZEdJBP3CL%2B3%2BFLCmkLfcwoNZQ269vurJuB9991zPY%2FzA7b9Fp3XgJfu94ojgUcdgvOlq0naoH6JrJZ7U8ObEvwjAXNhNdWa6Qf40k%2BDGN2QqPOprYcd%2BaTVachsD6UNk54cH%2BcOvdJ%2B%2Fg2qt%2FDf0SzaeTqNIsbN1hlchYMajbOXL46TPVxJAChAldBtcRgc9T%2FogCM2iMdLzLZ68z5XZG&X-Amz-Signature=6a062094665848e18849705bf469ea08daf41f289a431339c70b614e72b345f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
