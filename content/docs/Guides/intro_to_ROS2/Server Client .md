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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AS4HQ3B%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICDXYiw0BKJp5OkljHqiIEsTbSUyog6qja0lu16clMOvAiBNaDNCJ75%2BWrcwshbcDE97YxrFIAGueStbCZyUm2XftyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYp%2BGw5k%2BhmeahZOKtwDCzUbkUKelJTOe10ERZPx28UxMn8R2adL4LM4Mrym6nccSMi70IQkreRiNXyHCPluqWuQAgFIsewSml2VS5Y9qnhvMnRCVWKHFiyiXP8XqbvGaa38qDgtH8FYZhYKk8S6MVlQpqPblEC3rQ09QIQ1rXEtgZMYwHOh5veo%2Bz7cdYSQICsDbXlrE4ye05EZyLZZDfPSlkwxKWxvG5pbjzRH%2BFaYc5qg%2BbDUMNbk2W5NL5%2FNv14DRdpbRettUSstL66llkshYb2kaJ8z27N%2FwZ6Y%2BG4sz2BEpdqwA8FHGhJxUgAi%2F5ChFIdaRcak%2FrftDDEcrCTdEXcoISIRSWoWJ4p5i475RgWd5SdIWuUjHctrDbP1tOWhHmy%2B7phZIHr5OHuYBmCJRRtILY1unXpYq%2FmvcsQssKifRNH%2BGRW%2BYbosKHtEzIChRVsFD85E953KRsI%2F7yaJ78GIGjliYHuyC6rGnxVtDm1ILKYQ3SmmC3%2FS4PfOk8KmgU6gKqF49mrjliLrwdwQY%2FcNgxWTBdQ0k5jDdXe%2BAexznuyVKTpMBN3GLBYXecX4Jy7q%2BHyUhogJxcuNDBL9PvsGhZipCumZQt4hwo7C2vDvYd4MZZCzmWH7f9Sr9XeRUqm9ceO%2BxYswutCGvgY6pgHSG0bfmECrZpMw2cjzA06tESzTl%2F2BKpFAAPXIBa%2BLymoXM9EvAvEjxTnnW%2BC%2BAqsr9DvUIhwPzMaOjF3%2FDkg4H7VESCaBviBequIzCKEnJofCSOgCokbJb%2BfQlt0jgTJoiD3h1CUKWdjZc8Y5RQP9HRvpCZeDYeqw3PNKdm%2F3eZIkUBVcRERfctv4K3ir7ubBTbdLDnsIjgkJuUkn6CYZvq7AP4%2FH&X-Amz-Signature=82613fbaa5d14f205926cbf4a0cce3b24ddd15d3eb563011a429ed0892076047&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AS4HQ3B%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICDXYiw0BKJp5OkljHqiIEsTbSUyog6qja0lu16clMOvAiBNaDNCJ75%2BWrcwshbcDE97YxrFIAGueStbCZyUm2XftyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYp%2BGw5k%2BhmeahZOKtwDCzUbkUKelJTOe10ERZPx28UxMn8R2adL4LM4Mrym6nccSMi70IQkreRiNXyHCPluqWuQAgFIsewSml2VS5Y9qnhvMnRCVWKHFiyiXP8XqbvGaa38qDgtH8FYZhYKk8S6MVlQpqPblEC3rQ09QIQ1rXEtgZMYwHOh5veo%2Bz7cdYSQICsDbXlrE4ye05EZyLZZDfPSlkwxKWxvG5pbjzRH%2BFaYc5qg%2BbDUMNbk2W5NL5%2FNv14DRdpbRettUSstL66llkshYb2kaJ8z27N%2FwZ6Y%2BG4sz2BEpdqwA8FHGhJxUgAi%2F5ChFIdaRcak%2FrftDDEcrCTdEXcoISIRSWoWJ4p5i475RgWd5SdIWuUjHctrDbP1tOWhHmy%2B7phZIHr5OHuYBmCJRRtILY1unXpYq%2FmvcsQssKifRNH%2BGRW%2BYbosKHtEzIChRVsFD85E953KRsI%2F7yaJ78GIGjliYHuyC6rGnxVtDm1ILKYQ3SmmC3%2FS4PfOk8KmgU6gKqF49mrjliLrwdwQY%2FcNgxWTBdQ0k5jDdXe%2BAexznuyVKTpMBN3GLBYXecX4Jy7q%2BHyUhogJxcuNDBL9PvsGhZipCumZQt4hwo7C2vDvYd4MZZCzmWH7f9Sr9XeRUqm9ceO%2BxYswutCGvgY6pgHSG0bfmECrZpMw2cjzA06tESzTl%2F2BKpFAAPXIBa%2BLymoXM9EvAvEjxTnnW%2BC%2BAqsr9DvUIhwPzMaOjF3%2FDkg4H7VESCaBviBequIzCKEnJofCSOgCokbJb%2BfQlt0jgTJoiD3h1CUKWdjZc8Y5RQP9HRvpCZeDYeqw3PNKdm%2F3eZIkUBVcRERfctv4K3ir7ubBTbdLDnsIjgkJuUkn6CYZvq7AP4%2FH&X-Amz-Signature=039bb291236d41e5a758db4ab389ded6048f4b753eff88bd1880b289aa3eea54&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AS4HQ3B%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICDXYiw0BKJp5OkljHqiIEsTbSUyog6qja0lu16clMOvAiBNaDNCJ75%2BWrcwshbcDE97YxrFIAGueStbCZyUm2XftyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYp%2BGw5k%2BhmeahZOKtwDCzUbkUKelJTOe10ERZPx28UxMn8R2adL4LM4Mrym6nccSMi70IQkreRiNXyHCPluqWuQAgFIsewSml2VS5Y9qnhvMnRCVWKHFiyiXP8XqbvGaa38qDgtH8FYZhYKk8S6MVlQpqPblEC3rQ09QIQ1rXEtgZMYwHOh5veo%2Bz7cdYSQICsDbXlrE4ye05EZyLZZDfPSlkwxKWxvG5pbjzRH%2BFaYc5qg%2BbDUMNbk2W5NL5%2FNv14DRdpbRettUSstL66llkshYb2kaJ8z27N%2FwZ6Y%2BG4sz2BEpdqwA8FHGhJxUgAi%2F5ChFIdaRcak%2FrftDDEcrCTdEXcoISIRSWoWJ4p5i475RgWd5SdIWuUjHctrDbP1tOWhHmy%2B7phZIHr5OHuYBmCJRRtILY1unXpYq%2FmvcsQssKifRNH%2BGRW%2BYbosKHtEzIChRVsFD85E953KRsI%2F7yaJ78GIGjliYHuyC6rGnxVtDm1ILKYQ3SmmC3%2FS4PfOk8KmgU6gKqF49mrjliLrwdwQY%2FcNgxWTBdQ0k5jDdXe%2BAexznuyVKTpMBN3GLBYXecX4Jy7q%2BHyUhogJxcuNDBL9PvsGhZipCumZQt4hwo7C2vDvYd4MZZCzmWH7f9Sr9XeRUqm9ceO%2BxYswutCGvgY6pgHSG0bfmECrZpMw2cjzA06tESzTl%2F2BKpFAAPXIBa%2BLymoXM9EvAvEjxTnnW%2BC%2BAqsr9DvUIhwPzMaOjF3%2FDkg4H7VESCaBviBequIzCKEnJofCSOgCokbJb%2BfQlt0jgTJoiD3h1CUKWdjZc8Y5RQP9HRvpCZeDYeqw3PNKdm%2F3eZIkUBVcRERfctv4K3ir7ubBTbdLDnsIjgkJuUkn6CYZvq7AP4%2FH&X-Amz-Signature=dd8332250224f6cd6c576abf8e8938107dcfc9ec2691303d6c9fcbcc970df30f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AS4HQ3B%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICDXYiw0BKJp5OkljHqiIEsTbSUyog6qja0lu16clMOvAiBNaDNCJ75%2BWrcwshbcDE97YxrFIAGueStbCZyUm2XftyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYp%2BGw5k%2BhmeahZOKtwDCzUbkUKelJTOe10ERZPx28UxMn8R2adL4LM4Mrym6nccSMi70IQkreRiNXyHCPluqWuQAgFIsewSml2VS5Y9qnhvMnRCVWKHFiyiXP8XqbvGaa38qDgtH8FYZhYKk8S6MVlQpqPblEC3rQ09QIQ1rXEtgZMYwHOh5veo%2Bz7cdYSQICsDbXlrE4ye05EZyLZZDfPSlkwxKWxvG5pbjzRH%2BFaYc5qg%2BbDUMNbk2W5NL5%2FNv14DRdpbRettUSstL66llkshYb2kaJ8z27N%2FwZ6Y%2BG4sz2BEpdqwA8FHGhJxUgAi%2F5ChFIdaRcak%2FrftDDEcrCTdEXcoISIRSWoWJ4p5i475RgWd5SdIWuUjHctrDbP1tOWhHmy%2B7phZIHr5OHuYBmCJRRtILY1unXpYq%2FmvcsQssKifRNH%2BGRW%2BYbosKHtEzIChRVsFD85E953KRsI%2F7yaJ78GIGjliYHuyC6rGnxVtDm1ILKYQ3SmmC3%2FS4PfOk8KmgU6gKqF49mrjliLrwdwQY%2FcNgxWTBdQ0k5jDdXe%2BAexznuyVKTpMBN3GLBYXecX4Jy7q%2BHyUhogJxcuNDBL9PvsGhZipCumZQt4hwo7C2vDvYd4MZZCzmWH7f9Sr9XeRUqm9ceO%2BxYswutCGvgY6pgHSG0bfmECrZpMw2cjzA06tESzTl%2F2BKpFAAPXIBa%2BLymoXM9EvAvEjxTnnW%2BC%2BAqsr9DvUIhwPzMaOjF3%2FDkg4H7VESCaBviBequIzCKEnJofCSOgCokbJb%2BfQlt0jgTJoiD3h1CUKWdjZc8Y5RQP9HRvpCZeDYeqw3PNKdm%2F3eZIkUBVcRERfctv4K3ir7ubBTbdLDnsIjgkJuUkn6CYZvq7AP4%2FH&X-Amz-Signature=e89388444c4586744a0e7faf3c9151b94ae8dcebe5a75f330b44d7827b7c8a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AS4HQ3B%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICDXYiw0BKJp5OkljHqiIEsTbSUyog6qja0lu16clMOvAiBNaDNCJ75%2BWrcwshbcDE97YxrFIAGueStbCZyUm2XftyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYp%2BGw5k%2BhmeahZOKtwDCzUbkUKelJTOe10ERZPx28UxMn8R2adL4LM4Mrym6nccSMi70IQkreRiNXyHCPluqWuQAgFIsewSml2VS5Y9qnhvMnRCVWKHFiyiXP8XqbvGaa38qDgtH8FYZhYKk8S6MVlQpqPblEC3rQ09QIQ1rXEtgZMYwHOh5veo%2Bz7cdYSQICsDbXlrE4ye05EZyLZZDfPSlkwxKWxvG5pbjzRH%2BFaYc5qg%2BbDUMNbk2W5NL5%2FNv14DRdpbRettUSstL66llkshYb2kaJ8z27N%2FwZ6Y%2BG4sz2BEpdqwA8FHGhJxUgAi%2F5ChFIdaRcak%2FrftDDEcrCTdEXcoISIRSWoWJ4p5i475RgWd5SdIWuUjHctrDbP1tOWhHmy%2B7phZIHr5OHuYBmCJRRtILY1unXpYq%2FmvcsQssKifRNH%2BGRW%2BYbosKHtEzIChRVsFD85E953KRsI%2F7yaJ78GIGjliYHuyC6rGnxVtDm1ILKYQ3SmmC3%2FS4PfOk8KmgU6gKqF49mrjliLrwdwQY%2FcNgxWTBdQ0k5jDdXe%2BAexznuyVKTpMBN3GLBYXecX4Jy7q%2BHyUhogJxcuNDBL9PvsGhZipCumZQt4hwo7C2vDvYd4MZZCzmWH7f9Sr9XeRUqm9ceO%2BxYswutCGvgY6pgHSG0bfmECrZpMw2cjzA06tESzTl%2F2BKpFAAPXIBa%2BLymoXM9EvAvEjxTnnW%2BC%2BAqsr9DvUIhwPzMaOjF3%2FDkg4H7VESCaBviBequIzCKEnJofCSOgCokbJb%2BfQlt0jgTJoiD3h1CUKWdjZc8Y5RQP9HRvpCZeDYeqw3PNKdm%2F3eZIkUBVcRERfctv4K3ir7ubBTbdLDnsIjgkJuUkn6CYZvq7AP4%2FH&X-Amz-Signature=ea63f6cf0978aacf3d1fe55a6df5c50f86dc9bed95a9f81c6e2ec72e58117db5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
