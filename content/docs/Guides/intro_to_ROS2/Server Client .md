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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMOS4NP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBdk4wT0kill3Ydsnu9pX7wcaO2ObkGwtvnxm3qhkv2OAiEAt4Txa3TEdayXsAuNqgWExtsPYKepLpQLcy8Kf0epwIgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHTAtAOC5sWsowInuSrcA0dCQehFt4gzYSMkiQcdV1Ih5XaNdCjhhPWNbZwRN3Y4htH2zda5tB1d%2F%2BHWrW5yj338QRKtj1M01vbKfBj71R%2Bv6WRL3kK4bmkOq5qnSMY4OPyKeaJEIRE%2FWST55T58sRBTaWCw3ONjovfZIO4TsHek09fBigZAgCx0%2BG%2Bur69bPY%2F9oZwxprf01frDWMSeRtVoQ%2BbDuL0MkTLUDXFK%2FIMaxjkIXE%2FSprtpocvPT8BwdlDaFY0oyDd4qmlbsZTRDo%2FN13lWlxEtYLAcGuzOAn7EIE1TdIawLkZ5GD0mtRQmuhZM23%2B%2FQvvLyNvD1kXkfOdwMmeqXhOKkBWmgoR%2Fk%2BlJMjeXNJ8j7njhg0cLXqwUT8%2BdnKqAMB9xwpukK5UW8dP2TIg%2B6YwVwXMYn3ftMWVuImidV7Yl06MRpuRpuA%2FRrRzZhtQbaoEHYXKqBbKzikEODkKGo0gQthc5PkTB6n0evGFDWT7j78tVeQeORv9WC29TwEu6xYSzmR5ja07Tof6tGMHXKYcTjnwAfOPoWVUiCuLVQQdrVaC9M2Kdnz4Ix15AQwXzZCyIH4vZFquU7AkGp7pyKraTEjVhI%2FKrvdMqQ9c4fCJ%2Bzj%2F0g4RrSjx4XgMtcEGM8wrUemNmMKfQgMIGOqUBgi%2Foiu%2FqV7eyrHCPou5z27HBwEpEm0sSLSgBSIzuHvh2pzGhTk5bnztN7v7bx52go4HjpearTrgQ4FB%2B67V%2FbqcueYhuJkOuCQGT55%2FehYnsSpGrBVcwnVLrW8vg79uJJPJ8TbS1pbD8lyQTZo3lTQi3BLocRNlI0WNXHM4mKnXbQi8giYDCeWuN5TsAuI%2Bb4tygU329mIVxv9T%2FMJEkYPnEf3Tu&X-Amz-Signature=8b14befcad59abfe310c04d10d4be634756d8f921f9b3ab9fc4608c6ebb108c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMOS4NP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBdk4wT0kill3Ydsnu9pX7wcaO2ObkGwtvnxm3qhkv2OAiEAt4Txa3TEdayXsAuNqgWExtsPYKepLpQLcy8Kf0epwIgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHTAtAOC5sWsowInuSrcA0dCQehFt4gzYSMkiQcdV1Ih5XaNdCjhhPWNbZwRN3Y4htH2zda5tB1d%2F%2BHWrW5yj338QRKtj1M01vbKfBj71R%2Bv6WRL3kK4bmkOq5qnSMY4OPyKeaJEIRE%2FWST55T58sRBTaWCw3ONjovfZIO4TsHek09fBigZAgCx0%2BG%2Bur69bPY%2F9oZwxprf01frDWMSeRtVoQ%2BbDuL0MkTLUDXFK%2FIMaxjkIXE%2FSprtpocvPT8BwdlDaFY0oyDd4qmlbsZTRDo%2FN13lWlxEtYLAcGuzOAn7EIE1TdIawLkZ5GD0mtRQmuhZM23%2B%2FQvvLyNvD1kXkfOdwMmeqXhOKkBWmgoR%2Fk%2BlJMjeXNJ8j7njhg0cLXqwUT8%2BdnKqAMB9xwpukK5UW8dP2TIg%2B6YwVwXMYn3ftMWVuImidV7Yl06MRpuRpuA%2FRrRzZhtQbaoEHYXKqBbKzikEODkKGo0gQthc5PkTB6n0evGFDWT7j78tVeQeORv9WC29TwEu6xYSzmR5ja07Tof6tGMHXKYcTjnwAfOPoWVUiCuLVQQdrVaC9M2Kdnz4Ix15AQwXzZCyIH4vZFquU7AkGp7pyKraTEjVhI%2FKrvdMqQ9c4fCJ%2Bzj%2F0g4RrSjx4XgMtcEGM8wrUemNmMKfQgMIGOqUBgi%2Foiu%2FqV7eyrHCPou5z27HBwEpEm0sSLSgBSIzuHvh2pzGhTk5bnztN7v7bx52go4HjpearTrgQ4FB%2B67V%2FbqcueYhuJkOuCQGT55%2FehYnsSpGrBVcwnVLrW8vg79uJJPJ8TbS1pbD8lyQTZo3lTQi3BLocRNlI0WNXHM4mKnXbQi8giYDCeWuN5TsAuI%2Bb4tygU329mIVxv9T%2FMJEkYPnEf3Tu&X-Amz-Signature=0e6bc182bc9ff63739addd1dbf9612a54d16613ea7c615eaf5ff39d7e991f1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMOS4NP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBdk4wT0kill3Ydsnu9pX7wcaO2ObkGwtvnxm3qhkv2OAiEAt4Txa3TEdayXsAuNqgWExtsPYKepLpQLcy8Kf0epwIgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHTAtAOC5sWsowInuSrcA0dCQehFt4gzYSMkiQcdV1Ih5XaNdCjhhPWNbZwRN3Y4htH2zda5tB1d%2F%2BHWrW5yj338QRKtj1M01vbKfBj71R%2Bv6WRL3kK4bmkOq5qnSMY4OPyKeaJEIRE%2FWST55T58sRBTaWCw3ONjovfZIO4TsHek09fBigZAgCx0%2BG%2Bur69bPY%2F9oZwxprf01frDWMSeRtVoQ%2BbDuL0MkTLUDXFK%2FIMaxjkIXE%2FSprtpocvPT8BwdlDaFY0oyDd4qmlbsZTRDo%2FN13lWlxEtYLAcGuzOAn7EIE1TdIawLkZ5GD0mtRQmuhZM23%2B%2FQvvLyNvD1kXkfOdwMmeqXhOKkBWmgoR%2Fk%2BlJMjeXNJ8j7njhg0cLXqwUT8%2BdnKqAMB9xwpukK5UW8dP2TIg%2B6YwVwXMYn3ftMWVuImidV7Yl06MRpuRpuA%2FRrRzZhtQbaoEHYXKqBbKzikEODkKGo0gQthc5PkTB6n0evGFDWT7j78tVeQeORv9WC29TwEu6xYSzmR5ja07Tof6tGMHXKYcTjnwAfOPoWVUiCuLVQQdrVaC9M2Kdnz4Ix15AQwXzZCyIH4vZFquU7AkGp7pyKraTEjVhI%2FKrvdMqQ9c4fCJ%2Bzj%2F0g4RrSjx4XgMtcEGM8wrUemNmMKfQgMIGOqUBgi%2Foiu%2FqV7eyrHCPou5z27HBwEpEm0sSLSgBSIzuHvh2pzGhTk5bnztN7v7bx52go4HjpearTrgQ4FB%2B67V%2FbqcueYhuJkOuCQGT55%2FehYnsSpGrBVcwnVLrW8vg79uJJPJ8TbS1pbD8lyQTZo3lTQi3BLocRNlI0WNXHM4mKnXbQi8giYDCeWuN5TsAuI%2Bb4tygU329mIVxv9T%2FMJEkYPnEf3Tu&X-Amz-Signature=8c986d40bf4d2db7efd8bfc514b8e4f0a9f2a9b58ae05926baaed9d2e81c6d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMOS4NP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBdk4wT0kill3Ydsnu9pX7wcaO2ObkGwtvnxm3qhkv2OAiEAt4Txa3TEdayXsAuNqgWExtsPYKepLpQLcy8Kf0epwIgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHTAtAOC5sWsowInuSrcA0dCQehFt4gzYSMkiQcdV1Ih5XaNdCjhhPWNbZwRN3Y4htH2zda5tB1d%2F%2BHWrW5yj338QRKtj1M01vbKfBj71R%2Bv6WRL3kK4bmkOq5qnSMY4OPyKeaJEIRE%2FWST55T58sRBTaWCw3ONjovfZIO4TsHek09fBigZAgCx0%2BG%2Bur69bPY%2F9oZwxprf01frDWMSeRtVoQ%2BbDuL0MkTLUDXFK%2FIMaxjkIXE%2FSprtpocvPT8BwdlDaFY0oyDd4qmlbsZTRDo%2FN13lWlxEtYLAcGuzOAn7EIE1TdIawLkZ5GD0mtRQmuhZM23%2B%2FQvvLyNvD1kXkfOdwMmeqXhOKkBWmgoR%2Fk%2BlJMjeXNJ8j7njhg0cLXqwUT8%2BdnKqAMB9xwpukK5UW8dP2TIg%2B6YwVwXMYn3ftMWVuImidV7Yl06MRpuRpuA%2FRrRzZhtQbaoEHYXKqBbKzikEODkKGo0gQthc5PkTB6n0evGFDWT7j78tVeQeORv9WC29TwEu6xYSzmR5ja07Tof6tGMHXKYcTjnwAfOPoWVUiCuLVQQdrVaC9M2Kdnz4Ix15AQwXzZCyIH4vZFquU7AkGp7pyKraTEjVhI%2FKrvdMqQ9c4fCJ%2Bzj%2F0g4RrSjx4XgMtcEGM8wrUemNmMKfQgMIGOqUBgi%2Foiu%2FqV7eyrHCPou5z27HBwEpEm0sSLSgBSIzuHvh2pzGhTk5bnztN7v7bx52go4HjpearTrgQ4FB%2B67V%2FbqcueYhuJkOuCQGT55%2FehYnsSpGrBVcwnVLrW8vg79uJJPJ8TbS1pbD8lyQTZo3lTQi3BLocRNlI0WNXHM4mKnXbQi8giYDCeWuN5TsAuI%2Bb4tygU329mIVxv9T%2FMJEkYPnEf3Tu&X-Amz-Signature=f022f633e36b2e9bc48f91feee07fbc939369fa567a0cc656468d0963e31155b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMOS4NP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBdk4wT0kill3Ydsnu9pX7wcaO2ObkGwtvnxm3qhkv2OAiEAt4Txa3TEdayXsAuNqgWExtsPYKepLpQLcy8Kf0epwIgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHTAtAOC5sWsowInuSrcA0dCQehFt4gzYSMkiQcdV1Ih5XaNdCjhhPWNbZwRN3Y4htH2zda5tB1d%2F%2BHWrW5yj338QRKtj1M01vbKfBj71R%2Bv6WRL3kK4bmkOq5qnSMY4OPyKeaJEIRE%2FWST55T58sRBTaWCw3ONjovfZIO4TsHek09fBigZAgCx0%2BG%2Bur69bPY%2F9oZwxprf01frDWMSeRtVoQ%2BbDuL0MkTLUDXFK%2FIMaxjkIXE%2FSprtpocvPT8BwdlDaFY0oyDd4qmlbsZTRDo%2FN13lWlxEtYLAcGuzOAn7EIE1TdIawLkZ5GD0mtRQmuhZM23%2B%2FQvvLyNvD1kXkfOdwMmeqXhOKkBWmgoR%2Fk%2BlJMjeXNJ8j7njhg0cLXqwUT8%2BdnKqAMB9xwpukK5UW8dP2TIg%2B6YwVwXMYn3ftMWVuImidV7Yl06MRpuRpuA%2FRrRzZhtQbaoEHYXKqBbKzikEODkKGo0gQthc5PkTB6n0evGFDWT7j78tVeQeORv9WC29TwEu6xYSzmR5ja07Tof6tGMHXKYcTjnwAfOPoWVUiCuLVQQdrVaC9M2Kdnz4Ix15AQwXzZCyIH4vZFquU7AkGp7pyKraTEjVhI%2FKrvdMqQ9c4fCJ%2Bzj%2F0g4RrSjx4XgMtcEGM8wrUemNmMKfQgMIGOqUBgi%2Foiu%2FqV7eyrHCPou5z27HBwEpEm0sSLSgBSIzuHvh2pzGhTk5bnztN7v7bx52go4HjpearTrgQ4FB%2B67V%2FbqcueYhuJkOuCQGT55%2FehYnsSpGrBVcwnVLrW8vg79uJJPJ8TbS1pbD8lyQTZo3lTQi3BLocRNlI0WNXHM4mKnXbQi8giYDCeWuN5TsAuI%2Bb4tygU329mIVxv9T%2FMJEkYPnEf3Tu&X-Amz-Signature=b2e52e49ca0dcaf85d68d037b112bcfd2ef6a2e0ccfd747329527d591646fdbf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
