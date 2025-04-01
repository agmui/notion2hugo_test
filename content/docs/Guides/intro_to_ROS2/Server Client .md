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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G3HP4N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIE6ReZTPTQkC6%2F%2Bj%2BQQN5O41akP5u7DCtTOWR%2FKqpwYJAiEA6Tsw9nEIbbz2F%2BbwYarm2tW9cUjCoLDHQsj1JEw21WkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnOynqwKJ2iLvmajSrcAzlDpoNlQt1kGZZvh%2BNH%2FdPjzA8kTf4V74OdiAqTAg5r53cJEfUpkf806ZDIORCIvqtzxp1hU%2F9aiI7icNZhLj5DZxnGsMF4JCNe2FwKgo6NH4fr6DKCuRHWlzIdeFY87fp2V4SGLAduOHyEF9ijkqLbqIAg4RXTe%2BxR4qHiwJBqGFtk40aKeDURffDaGNq6Pck1adHG37Lh0ytAkQXL61P2xnIq7l5a3ImrL5ekkigx%2B9jpxKpSLKmAixhDb8sizYj24K%2FNB6DJ43T47mWDIVurP8hlR8WP3QiBQKKt6dyiddf0c%2FiJQiFoBpVhh83lxIf2i7NXO1TYn23qSOtt2Cp81IJqfDShRvUwGu6tKKbrqKJe6mbXQIKQvh78BlfMPyqRsHCBZBNW9sn4adcCU%2Bry8AX2ymMWW9Qr1tP2x7lHK0yyB2vGmqTsuxF2n%2BJAU%2Fq0YJ3N53NrTU1I60o0BPM5WScs01gyNy%2FEptQ%2F0xGK2%2F0mOhGlM8%2BSdyMd0G%2FGAVl9Zc3XMbzqLqScbmYVhy8jDo068R%2Fi4E3yNMy%2FXBVH7OGJt3OE8B1zznQNF48lumvBz25Qatf%2F0nK7c7aW6UUTX3HqMscc%2FeAS41S758fUOOaOFWTSnLy9q7rPMPrLrr8GOqUBHTu71aXE5koCAOWMXArSeCg57cgXAd3cTDHwxBH%2FL8dk6euuZtIGR1Sqjv00IaMAdp63pgWaqISdSZArCbuKsrmUyIsFEZybjyf0Fd0jv9J51%2BSIAN44TXPMRb5iGJpK%2Bwnl9JhfRATq0L0Uf2dqmE%2BPzuGNFBiX17r5Rb2BTPzUKU8zwKgAay1MGL2igllwIswC%2FGCOoXe91730ii2lxLqT6Itd&X-Amz-Signature=7bc196e5afcce8ab868b754a7254f5c1f2bc5a637ba500c82c35c293990f51c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G3HP4N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIE6ReZTPTQkC6%2F%2Bj%2BQQN5O41akP5u7DCtTOWR%2FKqpwYJAiEA6Tsw9nEIbbz2F%2BbwYarm2tW9cUjCoLDHQsj1JEw21WkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnOynqwKJ2iLvmajSrcAzlDpoNlQt1kGZZvh%2BNH%2FdPjzA8kTf4V74OdiAqTAg5r53cJEfUpkf806ZDIORCIvqtzxp1hU%2F9aiI7icNZhLj5DZxnGsMF4JCNe2FwKgo6NH4fr6DKCuRHWlzIdeFY87fp2V4SGLAduOHyEF9ijkqLbqIAg4RXTe%2BxR4qHiwJBqGFtk40aKeDURffDaGNq6Pck1adHG37Lh0ytAkQXL61P2xnIq7l5a3ImrL5ekkigx%2B9jpxKpSLKmAixhDb8sizYj24K%2FNB6DJ43T47mWDIVurP8hlR8WP3QiBQKKt6dyiddf0c%2FiJQiFoBpVhh83lxIf2i7NXO1TYn23qSOtt2Cp81IJqfDShRvUwGu6tKKbrqKJe6mbXQIKQvh78BlfMPyqRsHCBZBNW9sn4adcCU%2Bry8AX2ymMWW9Qr1tP2x7lHK0yyB2vGmqTsuxF2n%2BJAU%2Fq0YJ3N53NrTU1I60o0BPM5WScs01gyNy%2FEptQ%2F0xGK2%2F0mOhGlM8%2BSdyMd0G%2FGAVl9Zc3XMbzqLqScbmYVhy8jDo068R%2Fi4E3yNMy%2FXBVH7OGJt3OE8B1zznQNF48lumvBz25Qatf%2F0nK7c7aW6UUTX3HqMscc%2FeAS41S758fUOOaOFWTSnLy9q7rPMPrLrr8GOqUBHTu71aXE5koCAOWMXArSeCg57cgXAd3cTDHwxBH%2FL8dk6euuZtIGR1Sqjv00IaMAdp63pgWaqISdSZArCbuKsrmUyIsFEZybjyf0Fd0jv9J51%2BSIAN44TXPMRb5iGJpK%2Bwnl9JhfRATq0L0Uf2dqmE%2BPzuGNFBiX17r5Rb2BTPzUKU8zwKgAay1MGL2igllwIswC%2FGCOoXe91730ii2lxLqT6Itd&X-Amz-Signature=69f660fb7335f1f7eb25f3b01714cb270fb8d70ebd2a5cf4716e98f0f509ba35&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G3HP4N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIE6ReZTPTQkC6%2F%2Bj%2BQQN5O41akP5u7DCtTOWR%2FKqpwYJAiEA6Tsw9nEIbbz2F%2BbwYarm2tW9cUjCoLDHQsj1JEw21WkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnOynqwKJ2iLvmajSrcAzlDpoNlQt1kGZZvh%2BNH%2FdPjzA8kTf4V74OdiAqTAg5r53cJEfUpkf806ZDIORCIvqtzxp1hU%2F9aiI7icNZhLj5DZxnGsMF4JCNe2FwKgo6NH4fr6DKCuRHWlzIdeFY87fp2V4SGLAduOHyEF9ijkqLbqIAg4RXTe%2BxR4qHiwJBqGFtk40aKeDURffDaGNq6Pck1adHG37Lh0ytAkQXL61P2xnIq7l5a3ImrL5ekkigx%2B9jpxKpSLKmAixhDb8sizYj24K%2FNB6DJ43T47mWDIVurP8hlR8WP3QiBQKKt6dyiddf0c%2FiJQiFoBpVhh83lxIf2i7NXO1TYn23qSOtt2Cp81IJqfDShRvUwGu6tKKbrqKJe6mbXQIKQvh78BlfMPyqRsHCBZBNW9sn4adcCU%2Bry8AX2ymMWW9Qr1tP2x7lHK0yyB2vGmqTsuxF2n%2BJAU%2Fq0YJ3N53NrTU1I60o0BPM5WScs01gyNy%2FEptQ%2F0xGK2%2F0mOhGlM8%2BSdyMd0G%2FGAVl9Zc3XMbzqLqScbmYVhy8jDo068R%2Fi4E3yNMy%2FXBVH7OGJt3OE8B1zznQNF48lumvBz25Qatf%2F0nK7c7aW6UUTX3HqMscc%2FeAS41S758fUOOaOFWTSnLy9q7rPMPrLrr8GOqUBHTu71aXE5koCAOWMXArSeCg57cgXAd3cTDHwxBH%2FL8dk6euuZtIGR1Sqjv00IaMAdp63pgWaqISdSZArCbuKsrmUyIsFEZybjyf0Fd0jv9J51%2BSIAN44TXPMRb5iGJpK%2Bwnl9JhfRATq0L0Uf2dqmE%2BPzuGNFBiX17r5Rb2BTPzUKU8zwKgAay1MGL2igllwIswC%2FGCOoXe91730ii2lxLqT6Itd&X-Amz-Signature=44f1253388157cee53661c5bec01a4bd58dd42c083e38144614ceb7f4e0ddcf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G3HP4N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIE6ReZTPTQkC6%2F%2Bj%2BQQN5O41akP5u7DCtTOWR%2FKqpwYJAiEA6Tsw9nEIbbz2F%2BbwYarm2tW9cUjCoLDHQsj1JEw21WkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnOynqwKJ2iLvmajSrcAzlDpoNlQt1kGZZvh%2BNH%2FdPjzA8kTf4V74OdiAqTAg5r53cJEfUpkf806ZDIORCIvqtzxp1hU%2F9aiI7icNZhLj5DZxnGsMF4JCNe2FwKgo6NH4fr6DKCuRHWlzIdeFY87fp2V4SGLAduOHyEF9ijkqLbqIAg4RXTe%2BxR4qHiwJBqGFtk40aKeDURffDaGNq6Pck1adHG37Lh0ytAkQXL61P2xnIq7l5a3ImrL5ekkigx%2B9jpxKpSLKmAixhDb8sizYj24K%2FNB6DJ43T47mWDIVurP8hlR8WP3QiBQKKt6dyiddf0c%2FiJQiFoBpVhh83lxIf2i7NXO1TYn23qSOtt2Cp81IJqfDShRvUwGu6tKKbrqKJe6mbXQIKQvh78BlfMPyqRsHCBZBNW9sn4adcCU%2Bry8AX2ymMWW9Qr1tP2x7lHK0yyB2vGmqTsuxF2n%2BJAU%2Fq0YJ3N53NrTU1I60o0BPM5WScs01gyNy%2FEptQ%2F0xGK2%2F0mOhGlM8%2BSdyMd0G%2FGAVl9Zc3XMbzqLqScbmYVhy8jDo068R%2Fi4E3yNMy%2FXBVH7OGJt3OE8B1zznQNF48lumvBz25Qatf%2F0nK7c7aW6UUTX3HqMscc%2FeAS41S758fUOOaOFWTSnLy9q7rPMPrLrr8GOqUBHTu71aXE5koCAOWMXArSeCg57cgXAd3cTDHwxBH%2FL8dk6euuZtIGR1Sqjv00IaMAdp63pgWaqISdSZArCbuKsrmUyIsFEZybjyf0Fd0jv9J51%2BSIAN44TXPMRb5iGJpK%2Bwnl9JhfRATq0L0Uf2dqmE%2BPzuGNFBiX17r5Rb2BTPzUKU8zwKgAay1MGL2igllwIswC%2FGCOoXe91730ii2lxLqT6Itd&X-Amz-Signature=c67694242c243f363ad895ebd8b7fe632fe4a9334a9bcd0d6b77c8767c7ca00b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G3HP4N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIE6ReZTPTQkC6%2F%2Bj%2BQQN5O41akP5u7DCtTOWR%2FKqpwYJAiEA6Tsw9nEIbbz2F%2BbwYarm2tW9cUjCoLDHQsj1JEw21WkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnOynqwKJ2iLvmajSrcAzlDpoNlQt1kGZZvh%2BNH%2FdPjzA8kTf4V74OdiAqTAg5r53cJEfUpkf806ZDIORCIvqtzxp1hU%2F9aiI7icNZhLj5DZxnGsMF4JCNe2FwKgo6NH4fr6DKCuRHWlzIdeFY87fp2V4SGLAduOHyEF9ijkqLbqIAg4RXTe%2BxR4qHiwJBqGFtk40aKeDURffDaGNq6Pck1adHG37Lh0ytAkQXL61P2xnIq7l5a3ImrL5ekkigx%2B9jpxKpSLKmAixhDb8sizYj24K%2FNB6DJ43T47mWDIVurP8hlR8WP3QiBQKKt6dyiddf0c%2FiJQiFoBpVhh83lxIf2i7NXO1TYn23qSOtt2Cp81IJqfDShRvUwGu6tKKbrqKJe6mbXQIKQvh78BlfMPyqRsHCBZBNW9sn4adcCU%2Bry8AX2ymMWW9Qr1tP2x7lHK0yyB2vGmqTsuxF2n%2BJAU%2Fq0YJ3N53NrTU1I60o0BPM5WScs01gyNy%2FEptQ%2F0xGK2%2F0mOhGlM8%2BSdyMd0G%2FGAVl9Zc3XMbzqLqScbmYVhy8jDo068R%2Fi4E3yNMy%2FXBVH7OGJt3OE8B1zznQNF48lumvBz25Qatf%2F0nK7c7aW6UUTX3HqMscc%2FeAS41S758fUOOaOFWTSnLy9q7rPMPrLrr8GOqUBHTu71aXE5koCAOWMXArSeCg57cgXAd3cTDHwxBH%2FL8dk6euuZtIGR1Sqjv00IaMAdp63pgWaqISdSZArCbuKsrmUyIsFEZybjyf0Fd0jv9J51%2BSIAN44TXPMRb5iGJpK%2Bwnl9JhfRATq0L0Uf2dqmE%2BPzuGNFBiX17r5Rb2BTPzUKU8zwKgAay1MGL2igllwIswC%2FGCOoXe91730ii2lxLqT6Itd&X-Amz-Signature=04074e59e9cc65645536399286b168a36e816d0e53f55099dd8e829cb9b458d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
