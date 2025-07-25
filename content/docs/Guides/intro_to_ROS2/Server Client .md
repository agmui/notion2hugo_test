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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666764GBJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC8DwoLKy%2FW9Ha26kgOHLB0aRImLAB%2Bgy7gOsrkiC6whwIgZiRjDWAS2WqwS3owKfvX3cUd%2BKDxdQKaLW7ezJcLytsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKSxedSvKRL2g0sJzSrcA37QNv9N%2FeATAoi5E9%2BljqVtAbttaXiyffTfY6yQNC1tqLoPLkqC9TP%2F%2FOaUn3nxV12JrqQkxEE5Hvuv5vpMnmfs%2BdW9c3R6ZyjCU38ajt6WbGVg1yEWSPMDMq%2BWllnofJbYtAOFUfTDkBxW1OCEnx0KKPd3%2B66pRRVWe136G2j9%2BqWKpbAEDSyvXS2Hrj%2BQaIBP5rvrWfuzAKmi%2B5E1HNt4%2FZQNXuRB2j5C7C3rrF2HmikMeHQddQ0EeP28kHBx0a6CP2xTXmzl%2FgKbK5q4fwDObA%2BF7WbFC4A7c8tFU%2FakzXpMKhqeVe1Qc%2FW0lvQtjXmWiTcxrU2NqFRZ955u%2FJr58lmjMc57nSlzftm6zhco4Zl9Orchlq8O%2F0c9gc4dlP1srXP3FVrlSXzjSmOTuT50EpjtiQUAVOyFnFLCB47mEOa851odD8ZWeKvo7IcRDdFw%2Br9SKwO3B3lDP7SI7bjX1r2aciAe3OuOuK2u9k4LHMfXCT1v9su2YNDlLws%2BYPkgZAextWmg%2FvEzaqo40YUy5ERWZCSR0vdac3tQiePin025zlznO%2BOL2xx%2FiSqNsT%2BgJwBqcnCGHJqcbsenO2ydVyngu74%2Ffi1oaxUGFbjvYtiXBwZytYYjIT5IMJe8jsQGOqUBXksLnLv%2BrrM3a8ipadl4MaNBx4zv7EJPAXjkbAMEwZHCQvqgc6NrSD4frQDPLQq7Wpjd6%2BFlXPy%2FYA%2B6ZHCFMeYB3K6cSipGoR89VfD%2BXz10f%2BSggcJ9HSWlHhtU7N%2FOT0tHiQ9ZMrbRaAbVdGZ%2Frh3fJOpba%2F9m%2FBSDAOXeP0dPie6kS4r9VgNS7E2eWNFAT7teoiih%2BaJy1Q7WKU1pgj97G%2B2w&X-Amz-Signature=0a1bd1cde939140e0f6a13735b8619ed34e34e8f6ea065f10d2ecc8f75175302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666764GBJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC8DwoLKy%2FW9Ha26kgOHLB0aRImLAB%2Bgy7gOsrkiC6whwIgZiRjDWAS2WqwS3owKfvX3cUd%2BKDxdQKaLW7ezJcLytsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKSxedSvKRL2g0sJzSrcA37QNv9N%2FeATAoi5E9%2BljqVtAbttaXiyffTfY6yQNC1tqLoPLkqC9TP%2F%2FOaUn3nxV12JrqQkxEE5Hvuv5vpMnmfs%2BdW9c3R6ZyjCU38ajt6WbGVg1yEWSPMDMq%2BWllnofJbYtAOFUfTDkBxW1OCEnx0KKPd3%2B66pRRVWe136G2j9%2BqWKpbAEDSyvXS2Hrj%2BQaIBP5rvrWfuzAKmi%2B5E1HNt4%2FZQNXuRB2j5C7C3rrF2HmikMeHQddQ0EeP28kHBx0a6CP2xTXmzl%2FgKbK5q4fwDObA%2BF7WbFC4A7c8tFU%2FakzXpMKhqeVe1Qc%2FW0lvQtjXmWiTcxrU2NqFRZ955u%2FJr58lmjMc57nSlzftm6zhco4Zl9Orchlq8O%2F0c9gc4dlP1srXP3FVrlSXzjSmOTuT50EpjtiQUAVOyFnFLCB47mEOa851odD8ZWeKvo7IcRDdFw%2Br9SKwO3B3lDP7SI7bjX1r2aciAe3OuOuK2u9k4LHMfXCT1v9su2YNDlLws%2BYPkgZAextWmg%2FvEzaqo40YUy5ERWZCSR0vdac3tQiePin025zlznO%2BOL2xx%2FiSqNsT%2BgJwBqcnCGHJqcbsenO2ydVyngu74%2Ffi1oaxUGFbjvYtiXBwZytYYjIT5IMJe8jsQGOqUBXksLnLv%2BrrM3a8ipadl4MaNBx4zv7EJPAXjkbAMEwZHCQvqgc6NrSD4frQDPLQq7Wpjd6%2BFlXPy%2FYA%2B6ZHCFMeYB3K6cSipGoR89VfD%2BXz10f%2BSggcJ9HSWlHhtU7N%2FOT0tHiQ9ZMrbRaAbVdGZ%2Frh3fJOpba%2F9m%2FBSDAOXeP0dPie6kS4r9VgNS7E2eWNFAT7teoiih%2BaJy1Q7WKU1pgj97G%2B2w&X-Amz-Signature=b501c336952b9bc443a5a8953b067e5c86773b6eccaca0d8a441160c0778e192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666764GBJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC8DwoLKy%2FW9Ha26kgOHLB0aRImLAB%2Bgy7gOsrkiC6whwIgZiRjDWAS2WqwS3owKfvX3cUd%2BKDxdQKaLW7ezJcLytsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKSxedSvKRL2g0sJzSrcA37QNv9N%2FeATAoi5E9%2BljqVtAbttaXiyffTfY6yQNC1tqLoPLkqC9TP%2F%2FOaUn3nxV12JrqQkxEE5Hvuv5vpMnmfs%2BdW9c3R6ZyjCU38ajt6WbGVg1yEWSPMDMq%2BWllnofJbYtAOFUfTDkBxW1OCEnx0KKPd3%2B66pRRVWe136G2j9%2BqWKpbAEDSyvXS2Hrj%2BQaIBP5rvrWfuzAKmi%2B5E1HNt4%2FZQNXuRB2j5C7C3rrF2HmikMeHQddQ0EeP28kHBx0a6CP2xTXmzl%2FgKbK5q4fwDObA%2BF7WbFC4A7c8tFU%2FakzXpMKhqeVe1Qc%2FW0lvQtjXmWiTcxrU2NqFRZ955u%2FJr58lmjMc57nSlzftm6zhco4Zl9Orchlq8O%2F0c9gc4dlP1srXP3FVrlSXzjSmOTuT50EpjtiQUAVOyFnFLCB47mEOa851odD8ZWeKvo7IcRDdFw%2Br9SKwO3B3lDP7SI7bjX1r2aciAe3OuOuK2u9k4LHMfXCT1v9su2YNDlLws%2BYPkgZAextWmg%2FvEzaqo40YUy5ERWZCSR0vdac3tQiePin025zlznO%2BOL2xx%2FiSqNsT%2BgJwBqcnCGHJqcbsenO2ydVyngu74%2Ffi1oaxUGFbjvYtiXBwZytYYjIT5IMJe8jsQGOqUBXksLnLv%2BrrM3a8ipadl4MaNBx4zv7EJPAXjkbAMEwZHCQvqgc6NrSD4frQDPLQq7Wpjd6%2BFlXPy%2FYA%2B6ZHCFMeYB3K6cSipGoR89VfD%2BXz10f%2BSggcJ9HSWlHhtU7N%2FOT0tHiQ9ZMrbRaAbVdGZ%2Frh3fJOpba%2F9m%2FBSDAOXeP0dPie6kS4r9VgNS7E2eWNFAT7teoiih%2BaJy1Q7WKU1pgj97G%2B2w&X-Amz-Signature=7b6c48a63ef71011bb077304ac4f98e92bd586bc9a3b0a524430dd4a72f09815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666764GBJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC8DwoLKy%2FW9Ha26kgOHLB0aRImLAB%2Bgy7gOsrkiC6whwIgZiRjDWAS2WqwS3owKfvX3cUd%2BKDxdQKaLW7ezJcLytsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKSxedSvKRL2g0sJzSrcA37QNv9N%2FeATAoi5E9%2BljqVtAbttaXiyffTfY6yQNC1tqLoPLkqC9TP%2F%2FOaUn3nxV12JrqQkxEE5Hvuv5vpMnmfs%2BdW9c3R6ZyjCU38ajt6WbGVg1yEWSPMDMq%2BWllnofJbYtAOFUfTDkBxW1OCEnx0KKPd3%2B66pRRVWe136G2j9%2BqWKpbAEDSyvXS2Hrj%2BQaIBP5rvrWfuzAKmi%2B5E1HNt4%2FZQNXuRB2j5C7C3rrF2HmikMeHQddQ0EeP28kHBx0a6CP2xTXmzl%2FgKbK5q4fwDObA%2BF7WbFC4A7c8tFU%2FakzXpMKhqeVe1Qc%2FW0lvQtjXmWiTcxrU2NqFRZ955u%2FJr58lmjMc57nSlzftm6zhco4Zl9Orchlq8O%2F0c9gc4dlP1srXP3FVrlSXzjSmOTuT50EpjtiQUAVOyFnFLCB47mEOa851odD8ZWeKvo7IcRDdFw%2Br9SKwO3B3lDP7SI7bjX1r2aciAe3OuOuK2u9k4LHMfXCT1v9su2YNDlLws%2BYPkgZAextWmg%2FvEzaqo40YUy5ERWZCSR0vdac3tQiePin025zlznO%2BOL2xx%2FiSqNsT%2BgJwBqcnCGHJqcbsenO2ydVyngu74%2Ffi1oaxUGFbjvYtiXBwZytYYjIT5IMJe8jsQGOqUBXksLnLv%2BrrM3a8ipadl4MaNBx4zv7EJPAXjkbAMEwZHCQvqgc6NrSD4frQDPLQq7Wpjd6%2BFlXPy%2FYA%2B6ZHCFMeYB3K6cSipGoR89VfD%2BXz10f%2BSggcJ9HSWlHhtU7N%2FOT0tHiQ9ZMrbRaAbVdGZ%2Frh3fJOpba%2F9m%2FBSDAOXeP0dPie6kS4r9VgNS7E2eWNFAT7teoiih%2BaJy1Q7WKU1pgj97G%2B2w&X-Amz-Signature=ad68c656ddf1bba4e719f445ddb00633615ad2d5f4daa953ce18e5e04e74feee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666764GBJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC8DwoLKy%2FW9Ha26kgOHLB0aRImLAB%2Bgy7gOsrkiC6whwIgZiRjDWAS2WqwS3owKfvX3cUd%2BKDxdQKaLW7ezJcLytsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKSxedSvKRL2g0sJzSrcA37QNv9N%2FeATAoi5E9%2BljqVtAbttaXiyffTfY6yQNC1tqLoPLkqC9TP%2F%2FOaUn3nxV12JrqQkxEE5Hvuv5vpMnmfs%2BdW9c3R6ZyjCU38ajt6WbGVg1yEWSPMDMq%2BWllnofJbYtAOFUfTDkBxW1OCEnx0KKPd3%2B66pRRVWe136G2j9%2BqWKpbAEDSyvXS2Hrj%2BQaIBP5rvrWfuzAKmi%2B5E1HNt4%2FZQNXuRB2j5C7C3rrF2HmikMeHQddQ0EeP28kHBx0a6CP2xTXmzl%2FgKbK5q4fwDObA%2BF7WbFC4A7c8tFU%2FakzXpMKhqeVe1Qc%2FW0lvQtjXmWiTcxrU2NqFRZ955u%2FJr58lmjMc57nSlzftm6zhco4Zl9Orchlq8O%2F0c9gc4dlP1srXP3FVrlSXzjSmOTuT50EpjtiQUAVOyFnFLCB47mEOa851odD8ZWeKvo7IcRDdFw%2Br9SKwO3B3lDP7SI7bjX1r2aciAe3OuOuK2u9k4LHMfXCT1v9su2YNDlLws%2BYPkgZAextWmg%2FvEzaqo40YUy5ERWZCSR0vdac3tQiePin025zlznO%2BOL2xx%2FiSqNsT%2BgJwBqcnCGHJqcbsenO2ydVyngu74%2Ffi1oaxUGFbjvYtiXBwZytYYjIT5IMJe8jsQGOqUBXksLnLv%2BrrM3a8ipadl4MaNBx4zv7EJPAXjkbAMEwZHCQvqgc6NrSD4frQDPLQq7Wpjd6%2BFlXPy%2FYA%2B6ZHCFMeYB3K6cSipGoR89VfD%2BXz10f%2BSggcJ9HSWlHhtU7N%2FOT0tHiQ9ZMrbRaAbVdGZ%2Frh3fJOpba%2F9m%2FBSDAOXeP0dPie6kS4r9VgNS7E2eWNFAT7teoiih%2BaJy1Q7WKU1pgj97G%2B2w&X-Amz-Signature=6944e752fe44676669b540de5955b59d63a5418b3ab5d227538a5b425684cde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
