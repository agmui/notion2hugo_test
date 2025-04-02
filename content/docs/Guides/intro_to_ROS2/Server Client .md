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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TGLMH6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpnCpfYgxTERp9biFXRSLmqpajlgbA0%2FLRaiGE9l9IHAiAVEaUrWH0KfhQ6GdiwApreVIgoy5BS%2FiUf4aL8ZK1l%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh0SNgrHtadpqKC9KtwDuspWBtDXh4L6cXkNpVfKvd713yc3zwv3mVbwBKe%2B78EOslgcB6u9rdJAjxYp%2FNNbU4rVnpY5pGnVtyfDN79PX7rq5GVxD0numnGjdcvXDwvpmVZJA2VXMSNJBC689PbIX6LkqFJeRKQz%2Fu%2F7exv4ovTjXw5NBQ1eK5q6YRleDhZFNDFWJpLcsw%2Bm5WeeJW9LVCz4noIplS%2BKX93ZkpV4opFxpVtz%2FgfjVMs8hrI3u3U6tcbeeJHFlOtBqJ6qP5D21ARmTcj5JMlMlV6YNftLIBws4oWtWrwhn8WHitksasAG1WWdZw7%2FL7a%2BUxwdeqrCJGEyLi85J10L1skvYkrGU4h1Xi%2BFA8oSpcJYaxIKw4oz5hD7%2FtcyosVFMEov3%2BPt1pclHMyS7%2FDS%2BL0w0%2BRQDEAn76rUn%2FBFTDHIj%2FHekLaNLfflxZAmrmtn7Ivuh2IJEz6dtLAu10qMdtsSGga6Uw%2BL943aNgplyMjLUFAKP2h5ceq2u6lIx5Y606DG6%2Fu%2F3N7c9CaEFMPh8x9m2X1if3%2F6K6R6cD4B8cfLYBqfugGwjjRYg%2B39M%2BBTdpO6NrRc7NtDLOfS1dXKmHFnI7UBaXyo5oKBb%2BOG47NdhF2bXauVUA0MHg8UD6v2pCcwsriyvwY6pgEsSEKr1HByw86cMmWewNW8YYeGp0RHiEMdOWgrL%2BWa5vOHxwVLMRAaG%2FNVPaFh56M7%2BG31LDAR0XgYR3JBSGmvy4MFQF3g%2BALyzioQldGCTz3EBQlIzHqPcy68dPE6N3jfGPMNDR4%2FSj7PlojmxfiWWFt%2Fcnie9jvzIdU8lAHkM%2FGikRG85LyKEckGDdx%2FMZHcw1xYogO5cgYawkFR7kmNkDoJrm0X&X-Amz-Signature=9708aa163626f3d85f2d5431f873b4603248e30c452991e70d2f024d0bc755cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TGLMH6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpnCpfYgxTERp9biFXRSLmqpajlgbA0%2FLRaiGE9l9IHAiAVEaUrWH0KfhQ6GdiwApreVIgoy5BS%2FiUf4aL8ZK1l%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh0SNgrHtadpqKC9KtwDuspWBtDXh4L6cXkNpVfKvd713yc3zwv3mVbwBKe%2B78EOslgcB6u9rdJAjxYp%2FNNbU4rVnpY5pGnVtyfDN79PX7rq5GVxD0numnGjdcvXDwvpmVZJA2VXMSNJBC689PbIX6LkqFJeRKQz%2Fu%2F7exv4ovTjXw5NBQ1eK5q6YRleDhZFNDFWJpLcsw%2Bm5WeeJW9LVCz4noIplS%2BKX93ZkpV4opFxpVtz%2FgfjVMs8hrI3u3U6tcbeeJHFlOtBqJ6qP5D21ARmTcj5JMlMlV6YNftLIBws4oWtWrwhn8WHitksasAG1WWdZw7%2FL7a%2BUxwdeqrCJGEyLi85J10L1skvYkrGU4h1Xi%2BFA8oSpcJYaxIKw4oz5hD7%2FtcyosVFMEov3%2BPt1pclHMyS7%2FDS%2BL0w0%2BRQDEAn76rUn%2FBFTDHIj%2FHekLaNLfflxZAmrmtn7Ivuh2IJEz6dtLAu10qMdtsSGga6Uw%2BL943aNgplyMjLUFAKP2h5ceq2u6lIx5Y606DG6%2Fu%2F3N7c9CaEFMPh8x9m2X1if3%2F6K6R6cD4B8cfLYBqfugGwjjRYg%2B39M%2BBTdpO6NrRc7NtDLOfS1dXKmHFnI7UBaXyo5oKBb%2BOG47NdhF2bXauVUA0MHg8UD6v2pCcwsriyvwY6pgEsSEKr1HByw86cMmWewNW8YYeGp0RHiEMdOWgrL%2BWa5vOHxwVLMRAaG%2FNVPaFh56M7%2BG31LDAR0XgYR3JBSGmvy4MFQF3g%2BALyzioQldGCTz3EBQlIzHqPcy68dPE6N3jfGPMNDR4%2FSj7PlojmxfiWWFt%2Fcnie9jvzIdU8lAHkM%2FGikRG85LyKEckGDdx%2FMZHcw1xYogO5cgYawkFR7kmNkDoJrm0X&X-Amz-Signature=3233642fee49ed0714585baf9bab2fd5a0ec295a8b6207477bcc4733a6fd6051&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TGLMH6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpnCpfYgxTERp9biFXRSLmqpajlgbA0%2FLRaiGE9l9IHAiAVEaUrWH0KfhQ6GdiwApreVIgoy5BS%2FiUf4aL8ZK1l%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh0SNgrHtadpqKC9KtwDuspWBtDXh4L6cXkNpVfKvd713yc3zwv3mVbwBKe%2B78EOslgcB6u9rdJAjxYp%2FNNbU4rVnpY5pGnVtyfDN79PX7rq5GVxD0numnGjdcvXDwvpmVZJA2VXMSNJBC689PbIX6LkqFJeRKQz%2Fu%2F7exv4ovTjXw5NBQ1eK5q6YRleDhZFNDFWJpLcsw%2Bm5WeeJW9LVCz4noIplS%2BKX93ZkpV4opFxpVtz%2FgfjVMs8hrI3u3U6tcbeeJHFlOtBqJ6qP5D21ARmTcj5JMlMlV6YNftLIBws4oWtWrwhn8WHitksasAG1WWdZw7%2FL7a%2BUxwdeqrCJGEyLi85J10L1skvYkrGU4h1Xi%2BFA8oSpcJYaxIKw4oz5hD7%2FtcyosVFMEov3%2BPt1pclHMyS7%2FDS%2BL0w0%2BRQDEAn76rUn%2FBFTDHIj%2FHekLaNLfflxZAmrmtn7Ivuh2IJEz6dtLAu10qMdtsSGga6Uw%2BL943aNgplyMjLUFAKP2h5ceq2u6lIx5Y606DG6%2Fu%2F3N7c9CaEFMPh8x9m2X1if3%2F6K6R6cD4B8cfLYBqfugGwjjRYg%2B39M%2BBTdpO6NrRc7NtDLOfS1dXKmHFnI7UBaXyo5oKBb%2BOG47NdhF2bXauVUA0MHg8UD6v2pCcwsriyvwY6pgEsSEKr1HByw86cMmWewNW8YYeGp0RHiEMdOWgrL%2BWa5vOHxwVLMRAaG%2FNVPaFh56M7%2BG31LDAR0XgYR3JBSGmvy4MFQF3g%2BALyzioQldGCTz3EBQlIzHqPcy68dPE6N3jfGPMNDR4%2FSj7PlojmxfiWWFt%2Fcnie9jvzIdU8lAHkM%2FGikRG85LyKEckGDdx%2FMZHcw1xYogO5cgYawkFR7kmNkDoJrm0X&X-Amz-Signature=bfaed57352630fc8a16fba0a7b8bc47f3adb9ad04b30c0282caa543399d6c1c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TGLMH6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpnCpfYgxTERp9biFXRSLmqpajlgbA0%2FLRaiGE9l9IHAiAVEaUrWH0KfhQ6GdiwApreVIgoy5BS%2FiUf4aL8ZK1l%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh0SNgrHtadpqKC9KtwDuspWBtDXh4L6cXkNpVfKvd713yc3zwv3mVbwBKe%2B78EOslgcB6u9rdJAjxYp%2FNNbU4rVnpY5pGnVtyfDN79PX7rq5GVxD0numnGjdcvXDwvpmVZJA2VXMSNJBC689PbIX6LkqFJeRKQz%2Fu%2F7exv4ovTjXw5NBQ1eK5q6YRleDhZFNDFWJpLcsw%2Bm5WeeJW9LVCz4noIplS%2BKX93ZkpV4opFxpVtz%2FgfjVMs8hrI3u3U6tcbeeJHFlOtBqJ6qP5D21ARmTcj5JMlMlV6YNftLIBws4oWtWrwhn8WHitksasAG1WWdZw7%2FL7a%2BUxwdeqrCJGEyLi85J10L1skvYkrGU4h1Xi%2BFA8oSpcJYaxIKw4oz5hD7%2FtcyosVFMEov3%2BPt1pclHMyS7%2FDS%2BL0w0%2BRQDEAn76rUn%2FBFTDHIj%2FHekLaNLfflxZAmrmtn7Ivuh2IJEz6dtLAu10qMdtsSGga6Uw%2BL943aNgplyMjLUFAKP2h5ceq2u6lIx5Y606DG6%2Fu%2F3N7c9CaEFMPh8x9m2X1if3%2F6K6R6cD4B8cfLYBqfugGwjjRYg%2B39M%2BBTdpO6NrRc7NtDLOfS1dXKmHFnI7UBaXyo5oKBb%2BOG47NdhF2bXauVUA0MHg8UD6v2pCcwsriyvwY6pgEsSEKr1HByw86cMmWewNW8YYeGp0RHiEMdOWgrL%2BWa5vOHxwVLMRAaG%2FNVPaFh56M7%2BG31LDAR0XgYR3JBSGmvy4MFQF3g%2BALyzioQldGCTz3EBQlIzHqPcy68dPE6N3jfGPMNDR4%2FSj7PlojmxfiWWFt%2Fcnie9jvzIdU8lAHkM%2FGikRG85LyKEckGDdx%2FMZHcw1xYogO5cgYawkFR7kmNkDoJrm0X&X-Amz-Signature=d9db3607730e35faa5a0b0b7028b4193bd3cbb87130b2cfb45f6a73ec749e89d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TGLMH6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpnCpfYgxTERp9biFXRSLmqpajlgbA0%2FLRaiGE9l9IHAiAVEaUrWH0KfhQ6GdiwApreVIgoy5BS%2FiUf4aL8ZK1l%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh0SNgrHtadpqKC9KtwDuspWBtDXh4L6cXkNpVfKvd713yc3zwv3mVbwBKe%2B78EOslgcB6u9rdJAjxYp%2FNNbU4rVnpY5pGnVtyfDN79PX7rq5GVxD0numnGjdcvXDwvpmVZJA2VXMSNJBC689PbIX6LkqFJeRKQz%2Fu%2F7exv4ovTjXw5NBQ1eK5q6YRleDhZFNDFWJpLcsw%2Bm5WeeJW9LVCz4noIplS%2BKX93ZkpV4opFxpVtz%2FgfjVMs8hrI3u3U6tcbeeJHFlOtBqJ6qP5D21ARmTcj5JMlMlV6YNftLIBws4oWtWrwhn8WHitksasAG1WWdZw7%2FL7a%2BUxwdeqrCJGEyLi85J10L1skvYkrGU4h1Xi%2BFA8oSpcJYaxIKw4oz5hD7%2FtcyosVFMEov3%2BPt1pclHMyS7%2FDS%2BL0w0%2BRQDEAn76rUn%2FBFTDHIj%2FHekLaNLfflxZAmrmtn7Ivuh2IJEz6dtLAu10qMdtsSGga6Uw%2BL943aNgplyMjLUFAKP2h5ceq2u6lIx5Y606DG6%2Fu%2F3N7c9CaEFMPh8x9m2X1if3%2F6K6R6cD4B8cfLYBqfugGwjjRYg%2B39M%2BBTdpO6NrRc7NtDLOfS1dXKmHFnI7UBaXyo5oKBb%2BOG47NdhF2bXauVUA0MHg8UD6v2pCcwsriyvwY6pgEsSEKr1HByw86cMmWewNW8YYeGp0RHiEMdOWgrL%2BWa5vOHxwVLMRAaG%2FNVPaFh56M7%2BG31LDAR0XgYR3JBSGmvy4MFQF3g%2BALyzioQldGCTz3EBQlIzHqPcy68dPE6N3jfGPMNDR4%2FSj7PlojmxfiWWFt%2Fcnie9jvzIdU8lAHkM%2FGikRG85LyKEckGDdx%2FMZHcw1xYogO5cgYawkFR7kmNkDoJrm0X&X-Amz-Signature=0fa0ad526dfbef5ca05b4ac1fbbe7fecc55cac7b7b35299754e0fe1165132072&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
