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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCSN54L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDymn1IqJ3OrfuAiBxcdmfQtS%2BFz3%2BSQFI%2BVhaSep8zkAIhANsPXYBGZ2OuJN28j7hD7NPgaCdLUyng5wGWYtuRzJiyKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxDculQhqPAciPZzsq3AP4L8UZS6Hft5ZY7vuO3iicV0%2FZlRIBzOHy7XfwcBYqngMD1b2sSvOanv5Owx7z85lEUn1XXdxvvPuo%2FDcEsj0TqqJJe9HPe9OuTOBbV9aCgDiD2wtBXM7QOW4umjdMlHVOpuy0a5ZHWuezA4vPW4mPIdw92pgQTeUfyqUoRPzOQfpKLJGHDvJCm7rrbaQ1Vz86Ou6BNUqqfR%2FELF8Af%2By13%2Bsq1Yl4RIXwUU8rxRTUj%2BJNI%2B%2Bpk%2FNloH7HL0wTXDTGZ7H8N7lRfKc%2BNb3S2vI0SIj5wm0do3IfyXyM%2FKuFS%2BlTISUmjuwm4EnB2NJ%2FQFtBFcIk5DBDXPwGon8gRGMMjoAi3nFLHxnebtydMCWsPvPbdy2HpImSSFkX%2FUUh0XE2S%2FVKplDV1LPa%2B5h4GLgiqvzB66sRZ%2FHulRrmRI09c3PEg9SpysUZ%2FOoRg40KuTJxgDeKKYEJJqPGcKEKg%2Fl5bY%2FurTxLdniZPKO5r9lCzVDQzlC4%2B9hTwxGS41ZoiuX42ulQ%2FhIyD4H56EN7PvZzubqQExLI%2FafHThAqx7kggDklkEvZl6f2EO4Glij49dpUhEC19l2ES4icBjetNdCpOz8zX4cuNF5s%2BINpxnieDKH8XAQ3Q6mrJPRXMzDpu5jABjqkAbFT46ffLCEF0RlQHXY6nyl0EaNUFksx1GZhPdZZc7ESdsgJbJFCYaAOWVmW7s5PXYJMXNqmsK%2Bok9ubHdqYVVethPz3wCkFwl2Q4JyCvlpCsAlC6e%2BLDJwgGAULRA94gJGJEpMmwK3l3krSg0ntvBFQ7r79a%2Frf8mgIyYYVywT5AO3BgZYy1CSQSQTRSVb43oMhRrSFzqO2OtGSd13uuX7FyjCK&X-Amz-Signature=afc154bd1faa956d3816b5998f5cdb436b517834692357079489db1f9b7132f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCSN54L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDymn1IqJ3OrfuAiBxcdmfQtS%2BFz3%2BSQFI%2BVhaSep8zkAIhANsPXYBGZ2OuJN28j7hD7NPgaCdLUyng5wGWYtuRzJiyKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxDculQhqPAciPZzsq3AP4L8UZS6Hft5ZY7vuO3iicV0%2FZlRIBzOHy7XfwcBYqngMD1b2sSvOanv5Owx7z85lEUn1XXdxvvPuo%2FDcEsj0TqqJJe9HPe9OuTOBbV9aCgDiD2wtBXM7QOW4umjdMlHVOpuy0a5ZHWuezA4vPW4mPIdw92pgQTeUfyqUoRPzOQfpKLJGHDvJCm7rrbaQ1Vz86Ou6BNUqqfR%2FELF8Af%2By13%2Bsq1Yl4RIXwUU8rxRTUj%2BJNI%2B%2Bpk%2FNloH7HL0wTXDTGZ7H8N7lRfKc%2BNb3S2vI0SIj5wm0do3IfyXyM%2FKuFS%2BlTISUmjuwm4EnB2NJ%2FQFtBFcIk5DBDXPwGon8gRGMMjoAi3nFLHxnebtydMCWsPvPbdy2HpImSSFkX%2FUUh0XE2S%2FVKplDV1LPa%2B5h4GLgiqvzB66sRZ%2FHulRrmRI09c3PEg9SpysUZ%2FOoRg40KuTJxgDeKKYEJJqPGcKEKg%2Fl5bY%2FurTxLdniZPKO5r9lCzVDQzlC4%2B9hTwxGS41ZoiuX42ulQ%2FhIyD4H56EN7PvZzubqQExLI%2FafHThAqx7kggDklkEvZl6f2EO4Glij49dpUhEC19l2ES4icBjetNdCpOz8zX4cuNF5s%2BINpxnieDKH8XAQ3Q6mrJPRXMzDpu5jABjqkAbFT46ffLCEF0RlQHXY6nyl0EaNUFksx1GZhPdZZc7ESdsgJbJFCYaAOWVmW7s5PXYJMXNqmsK%2Bok9ubHdqYVVethPz3wCkFwl2Q4JyCvlpCsAlC6e%2BLDJwgGAULRA94gJGJEpMmwK3l3krSg0ntvBFQ7r79a%2Frf8mgIyYYVywT5AO3BgZYy1CSQSQTRSVb43oMhRrSFzqO2OtGSd13uuX7FyjCK&X-Amz-Signature=59e68df8e5466603f5eb8bdbf9eba1812df57c10f46d75222c99e82fe2629bad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCSN54L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDymn1IqJ3OrfuAiBxcdmfQtS%2BFz3%2BSQFI%2BVhaSep8zkAIhANsPXYBGZ2OuJN28j7hD7NPgaCdLUyng5wGWYtuRzJiyKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxDculQhqPAciPZzsq3AP4L8UZS6Hft5ZY7vuO3iicV0%2FZlRIBzOHy7XfwcBYqngMD1b2sSvOanv5Owx7z85lEUn1XXdxvvPuo%2FDcEsj0TqqJJe9HPe9OuTOBbV9aCgDiD2wtBXM7QOW4umjdMlHVOpuy0a5ZHWuezA4vPW4mPIdw92pgQTeUfyqUoRPzOQfpKLJGHDvJCm7rrbaQ1Vz86Ou6BNUqqfR%2FELF8Af%2By13%2Bsq1Yl4RIXwUU8rxRTUj%2BJNI%2B%2Bpk%2FNloH7HL0wTXDTGZ7H8N7lRfKc%2BNb3S2vI0SIj5wm0do3IfyXyM%2FKuFS%2BlTISUmjuwm4EnB2NJ%2FQFtBFcIk5DBDXPwGon8gRGMMjoAi3nFLHxnebtydMCWsPvPbdy2HpImSSFkX%2FUUh0XE2S%2FVKplDV1LPa%2B5h4GLgiqvzB66sRZ%2FHulRrmRI09c3PEg9SpysUZ%2FOoRg40KuTJxgDeKKYEJJqPGcKEKg%2Fl5bY%2FurTxLdniZPKO5r9lCzVDQzlC4%2B9hTwxGS41ZoiuX42ulQ%2FhIyD4H56EN7PvZzubqQExLI%2FafHThAqx7kggDklkEvZl6f2EO4Glij49dpUhEC19l2ES4icBjetNdCpOz8zX4cuNF5s%2BINpxnieDKH8XAQ3Q6mrJPRXMzDpu5jABjqkAbFT46ffLCEF0RlQHXY6nyl0EaNUFksx1GZhPdZZc7ESdsgJbJFCYaAOWVmW7s5PXYJMXNqmsK%2Bok9ubHdqYVVethPz3wCkFwl2Q4JyCvlpCsAlC6e%2BLDJwgGAULRA94gJGJEpMmwK3l3krSg0ntvBFQ7r79a%2Frf8mgIyYYVywT5AO3BgZYy1CSQSQTRSVb43oMhRrSFzqO2OtGSd13uuX7FyjCK&X-Amz-Signature=3795b4931bb9d6e0ae40fc65099dcd53ae32efabe3a0e417fbac8a98bbf79829&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCSN54L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDymn1IqJ3OrfuAiBxcdmfQtS%2BFz3%2BSQFI%2BVhaSep8zkAIhANsPXYBGZ2OuJN28j7hD7NPgaCdLUyng5wGWYtuRzJiyKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxDculQhqPAciPZzsq3AP4L8UZS6Hft5ZY7vuO3iicV0%2FZlRIBzOHy7XfwcBYqngMD1b2sSvOanv5Owx7z85lEUn1XXdxvvPuo%2FDcEsj0TqqJJe9HPe9OuTOBbV9aCgDiD2wtBXM7QOW4umjdMlHVOpuy0a5ZHWuezA4vPW4mPIdw92pgQTeUfyqUoRPzOQfpKLJGHDvJCm7rrbaQ1Vz86Ou6BNUqqfR%2FELF8Af%2By13%2Bsq1Yl4RIXwUU8rxRTUj%2BJNI%2B%2Bpk%2FNloH7HL0wTXDTGZ7H8N7lRfKc%2BNb3S2vI0SIj5wm0do3IfyXyM%2FKuFS%2BlTISUmjuwm4EnB2NJ%2FQFtBFcIk5DBDXPwGon8gRGMMjoAi3nFLHxnebtydMCWsPvPbdy2HpImSSFkX%2FUUh0XE2S%2FVKplDV1LPa%2B5h4GLgiqvzB66sRZ%2FHulRrmRI09c3PEg9SpysUZ%2FOoRg40KuTJxgDeKKYEJJqPGcKEKg%2Fl5bY%2FurTxLdniZPKO5r9lCzVDQzlC4%2B9hTwxGS41ZoiuX42ulQ%2FhIyD4H56EN7PvZzubqQExLI%2FafHThAqx7kggDklkEvZl6f2EO4Glij49dpUhEC19l2ES4icBjetNdCpOz8zX4cuNF5s%2BINpxnieDKH8XAQ3Q6mrJPRXMzDpu5jABjqkAbFT46ffLCEF0RlQHXY6nyl0EaNUFksx1GZhPdZZc7ESdsgJbJFCYaAOWVmW7s5PXYJMXNqmsK%2Bok9ubHdqYVVethPz3wCkFwl2Q4JyCvlpCsAlC6e%2BLDJwgGAULRA94gJGJEpMmwK3l3krSg0ntvBFQ7r79a%2Frf8mgIyYYVywT5AO3BgZYy1CSQSQTRSVb43oMhRrSFzqO2OtGSd13uuX7FyjCK&X-Amz-Signature=83e4ebe12d9354e5a3e6ea96cafc10a9047c58882f95cdd72a1595b9d23ad05b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCSN54L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDymn1IqJ3OrfuAiBxcdmfQtS%2BFz3%2BSQFI%2BVhaSep8zkAIhANsPXYBGZ2OuJN28j7hD7NPgaCdLUyng5wGWYtuRzJiyKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxDculQhqPAciPZzsq3AP4L8UZS6Hft5ZY7vuO3iicV0%2FZlRIBzOHy7XfwcBYqngMD1b2sSvOanv5Owx7z85lEUn1XXdxvvPuo%2FDcEsj0TqqJJe9HPe9OuTOBbV9aCgDiD2wtBXM7QOW4umjdMlHVOpuy0a5ZHWuezA4vPW4mPIdw92pgQTeUfyqUoRPzOQfpKLJGHDvJCm7rrbaQ1Vz86Ou6BNUqqfR%2FELF8Af%2By13%2Bsq1Yl4RIXwUU8rxRTUj%2BJNI%2B%2Bpk%2FNloH7HL0wTXDTGZ7H8N7lRfKc%2BNb3S2vI0SIj5wm0do3IfyXyM%2FKuFS%2BlTISUmjuwm4EnB2NJ%2FQFtBFcIk5DBDXPwGon8gRGMMjoAi3nFLHxnebtydMCWsPvPbdy2HpImSSFkX%2FUUh0XE2S%2FVKplDV1LPa%2B5h4GLgiqvzB66sRZ%2FHulRrmRI09c3PEg9SpysUZ%2FOoRg40KuTJxgDeKKYEJJqPGcKEKg%2Fl5bY%2FurTxLdniZPKO5r9lCzVDQzlC4%2B9hTwxGS41ZoiuX42ulQ%2FhIyD4H56EN7PvZzubqQExLI%2FafHThAqx7kggDklkEvZl6f2EO4Glij49dpUhEC19l2ES4icBjetNdCpOz8zX4cuNF5s%2BINpxnieDKH8XAQ3Q6mrJPRXMzDpu5jABjqkAbFT46ffLCEF0RlQHXY6nyl0EaNUFksx1GZhPdZZc7ESdsgJbJFCYaAOWVmW7s5PXYJMXNqmsK%2Bok9ubHdqYVVethPz3wCkFwl2Q4JyCvlpCsAlC6e%2BLDJwgGAULRA94gJGJEpMmwK3l3krSg0ntvBFQ7r79a%2Frf8mgIyYYVywT5AO3BgZYy1CSQSQTRSVb43oMhRrSFzqO2OtGSd13uuX7FyjCK&X-Amz-Signature=1ad3399d3deb5411f441b49aeb7ee4c17fbcea5b2534035dca9833be4e57b7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
