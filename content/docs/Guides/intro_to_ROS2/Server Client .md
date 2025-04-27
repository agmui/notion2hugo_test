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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6NK3SC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLkSbpUY%2BTCcRmUM98hNiTT%2BQBXDildsjeqECfH7VLUgIhAK%2B%2F0MMcnHV6kjTlC8%2FcfiBuPTH%2F%2B2LzeT72OGNkb9ooKv8DCGEQABoMNjM3NDIzMTgzODA1IgzERGvz6gZDVRH0ilQq3ANPIL8QFd9sgT4uSKsi6KaU7WOBkqmgkycJSACvofJhN5cCdZw9Vd4IWGvJJVG4Hl0fntl2xJXxpBTL2Td7rKjt7qqytxhmpVWAY2RdF1CyMn%2Fpm9vzS8nzgZ0J3naZOs2A7aG6fSYJGUSDkq3SIFv6GzIA%2F8JsJYMplTBbOuXrgGdrxAa3mZ4DAd5v9kZ80zw%2FTAfixCGEWb9V0oiI6HnCPOlCgRotRFb5e2bt1dhtCJ3DlGlyUcLquXyRDRfCglrK0GyEQjcwwdaFNI77vCFylBOfOdnD4bj%2FNORY81kNPjOoq7qw%2BDw3gIbIiRh44P8%2Bvo0ZRcmsd%2FcTCfTN%2FQMP7fSEv13Ov3TaFF2MKo7%2FsvVEwAFzcwj%2BOiU8dUTGEFxiqyq0OHWtwt7QWlnDVgbLB9He9nsuNuM1eENW2v1IJr2r%2BR3mrHGD2UMm0qXUgoTwp%2B7XgHpv7jl%2BQYCWz0m80iCflzVhU3DviqxuLR69MpkG1AsHnUOkWZiEvVs4ph0xBJ%2B5Gg2t3JZOXhSDmrx4KcmDLHRvcwMhZ0xscIKrBYAKkpTVntNnHA2ZR5QH1ValGE%2BXDuoAmsnFS%2Bz7zBp17%2F3EKr3kvrKd%2FpNOQ6ty9H2DN4cVqy1wMX3KNjCIr7nABjqkAScS91GkGAK3k1mmOQYp5nU%2FFeIJx6yrjYQaW9K%2FEdJJYbe0Mq%2FFm1c2he633ALkVfZw2STHZq%2FhQHk%2BCWPBr2gNeUGiu%2FFgNq4qNQe%2B%2B1lOckg3SHE1YyVHIfGIDBRqImL828RrRONlUKYyw1xTIEJmQWhVlCf2xD2fP0VueRdrz6D4vB62iUMRZ8WnaF1PeH%2B2OdNObFX7pXYB2UNleg9CvlYj&X-Amz-Signature=c0dcbb4cf99f079b8a95d9bf765730b97c63c1a1b83307f3f05f08bedce3910d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6NK3SC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLkSbpUY%2BTCcRmUM98hNiTT%2BQBXDildsjeqECfH7VLUgIhAK%2B%2F0MMcnHV6kjTlC8%2FcfiBuPTH%2F%2B2LzeT72OGNkb9ooKv8DCGEQABoMNjM3NDIzMTgzODA1IgzERGvz6gZDVRH0ilQq3ANPIL8QFd9sgT4uSKsi6KaU7WOBkqmgkycJSACvofJhN5cCdZw9Vd4IWGvJJVG4Hl0fntl2xJXxpBTL2Td7rKjt7qqytxhmpVWAY2RdF1CyMn%2Fpm9vzS8nzgZ0J3naZOs2A7aG6fSYJGUSDkq3SIFv6GzIA%2F8JsJYMplTBbOuXrgGdrxAa3mZ4DAd5v9kZ80zw%2FTAfixCGEWb9V0oiI6HnCPOlCgRotRFb5e2bt1dhtCJ3DlGlyUcLquXyRDRfCglrK0GyEQjcwwdaFNI77vCFylBOfOdnD4bj%2FNORY81kNPjOoq7qw%2BDw3gIbIiRh44P8%2Bvo0ZRcmsd%2FcTCfTN%2FQMP7fSEv13Ov3TaFF2MKo7%2FsvVEwAFzcwj%2BOiU8dUTGEFxiqyq0OHWtwt7QWlnDVgbLB9He9nsuNuM1eENW2v1IJr2r%2BR3mrHGD2UMm0qXUgoTwp%2B7XgHpv7jl%2BQYCWz0m80iCflzVhU3DviqxuLR69MpkG1AsHnUOkWZiEvVs4ph0xBJ%2B5Gg2t3JZOXhSDmrx4KcmDLHRvcwMhZ0xscIKrBYAKkpTVntNnHA2ZR5QH1ValGE%2BXDuoAmsnFS%2Bz7zBp17%2F3EKr3kvrKd%2FpNOQ6ty9H2DN4cVqy1wMX3KNjCIr7nABjqkAScS91GkGAK3k1mmOQYp5nU%2FFeIJx6yrjYQaW9K%2FEdJJYbe0Mq%2FFm1c2he633ALkVfZw2STHZq%2FhQHk%2BCWPBr2gNeUGiu%2FFgNq4qNQe%2B%2B1lOckg3SHE1YyVHIfGIDBRqImL828RrRONlUKYyw1xTIEJmQWhVlCf2xD2fP0VueRdrz6D4vB62iUMRZ8WnaF1PeH%2B2OdNObFX7pXYB2UNleg9CvlYj&X-Amz-Signature=dd80c78caf4bdbcafc9c9027fb69d0fb21e88faa9121e120f2c9e31b20f15f68&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6NK3SC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLkSbpUY%2BTCcRmUM98hNiTT%2BQBXDildsjeqECfH7VLUgIhAK%2B%2F0MMcnHV6kjTlC8%2FcfiBuPTH%2F%2B2LzeT72OGNkb9ooKv8DCGEQABoMNjM3NDIzMTgzODA1IgzERGvz6gZDVRH0ilQq3ANPIL8QFd9sgT4uSKsi6KaU7WOBkqmgkycJSACvofJhN5cCdZw9Vd4IWGvJJVG4Hl0fntl2xJXxpBTL2Td7rKjt7qqytxhmpVWAY2RdF1CyMn%2Fpm9vzS8nzgZ0J3naZOs2A7aG6fSYJGUSDkq3SIFv6GzIA%2F8JsJYMplTBbOuXrgGdrxAa3mZ4DAd5v9kZ80zw%2FTAfixCGEWb9V0oiI6HnCPOlCgRotRFb5e2bt1dhtCJ3DlGlyUcLquXyRDRfCglrK0GyEQjcwwdaFNI77vCFylBOfOdnD4bj%2FNORY81kNPjOoq7qw%2BDw3gIbIiRh44P8%2Bvo0ZRcmsd%2FcTCfTN%2FQMP7fSEv13Ov3TaFF2MKo7%2FsvVEwAFzcwj%2BOiU8dUTGEFxiqyq0OHWtwt7QWlnDVgbLB9He9nsuNuM1eENW2v1IJr2r%2BR3mrHGD2UMm0qXUgoTwp%2B7XgHpv7jl%2BQYCWz0m80iCflzVhU3DviqxuLR69MpkG1AsHnUOkWZiEvVs4ph0xBJ%2B5Gg2t3JZOXhSDmrx4KcmDLHRvcwMhZ0xscIKrBYAKkpTVntNnHA2ZR5QH1ValGE%2BXDuoAmsnFS%2Bz7zBp17%2F3EKr3kvrKd%2FpNOQ6ty9H2DN4cVqy1wMX3KNjCIr7nABjqkAScS91GkGAK3k1mmOQYp5nU%2FFeIJx6yrjYQaW9K%2FEdJJYbe0Mq%2FFm1c2he633ALkVfZw2STHZq%2FhQHk%2BCWPBr2gNeUGiu%2FFgNq4qNQe%2B%2B1lOckg3SHE1YyVHIfGIDBRqImL828RrRONlUKYyw1xTIEJmQWhVlCf2xD2fP0VueRdrz6D4vB62iUMRZ8WnaF1PeH%2B2OdNObFX7pXYB2UNleg9CvlYj&X-Amz-Signature=05c41c40d048135121c2805a82b6ffa53d5184cd8dade38dde165f9550cfac22&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6NK3SC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLkSbpUY%2BTCcRmUM98hNiTT%2BQBXDildsjeqECfH7VLUgIhAK%2B%2F0MMcnHV6kjTlC8%2FcfiBuPTH%2F%2B2LzeT72OGNkb9ooKv8DCGEQABoMNjM3NDIzMTgzODA1IgzERGvz6gZDVRH0ilQq3ANPIL8QFd9sgT4uSKsi6KaU7WOBkqmgkycJSACvofJhN5cCdZw9Vd4IWGvJJVG4Hl0fntl2xJXxpBTL2Td7rKjt7qqytxhmpVWAY2RdF1CyMn%2Fpm9vzS8nzgZ0J3naZOs2A7aG6fSYJGUSDkq3SIFv6GzIA%2F8JsJYMplTBbOuXrgGdrxAa3mZ4DAd5v9kZ80zw%2FTAfixCGEWb9V0oiI6HnCPOlCgRotRFb5e2bt1dhtCJ3DlGlyUcLquXyRDRfCglrK0GyEQjcwwdaFNI77vCFylBOfOdnD4bj%2FNORY81kNPjOoq7qw%2BDw3gIbIiRh44P8%2Bvo0ZRcmsd%2FcTCfTN%2FQMP7fSEv13Ov3TaFF2MKo7%2FsvVEwAFzcwj%2BOiU8dUTGEFxiqyq0OHWtwt7QWlnDVgbLB9He9nsuNuM1eENW2v1IJr2r%2BR3mrHGD2UMm0qXUgoTwp%2B7XgHpv7jl%2BQYCWz0m80iCflzVhU3DviqxuLR69MpkG1AsHnUOkWZiEvVs4ph0xBJ%2B5Gg2t3JZOXhSDmrx4KcmDLHRvcwMhZ0xscIKrBYAKkpTVntNnHA2ZR5QH1ValGE%2BXDuoAmsnFS%2Bz7zBp17%2F3EKr3kvrKd%2FpNOQ6ty9H2DN4cVqy1wMX3KNjCIr7nABjqkAScS91GkGAK3k1mmOQYp5nU%2FFeIJx6yrjYQaW9K%2FEdJJYbe0Mq%2FFm1c2he633ALkVfZw2STHZq%2FhQHk%2BCWPBr2gNeUGiu%2FFgNq4qNQe%2B%2B1lOckg3SHE1YyVHIfGIDBRqImL828RrRONlUKYyw1xTIEJmQWhVlCf2xD2fP0VueRdrz6D4vB62iUMRZ8WnaF1PeH%2B2OdNObFX7pXYB2UNleg9CvlYj&X-Amz-Signature=703c81571777a8753f743b2305362e3bd00915a72eb0f6cc8ab3ea503cf74057&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6NK3SC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLkSbpUY%2BTCcRmUM98hNiTT%2BQBXDildsjeqECfH7VLUgIhAK%2B%2F0MMcnHV6kjTlC8%2FcfiBuPTH%2F%2B2LzeT72OGNkb9ooKv8DCGEQABoMNjM3NDIzMTgzODA1IgzERGvz6gZDVRH0ilQq3ANPIL8QFd9sgT4uSKsi6KaU7WOBkqmgkycJSACvofJhN5cCdZw9Vd4IWGvJJVG4Hl0fntl2xJXxpBTL2Td7rKjt7qqytxhmpVWAY2RdF1CyMn%2Fpm9vzS8nzgZ0J3naZOs2A7aG6fSYJGUSDkq3SIFv6GzIA%2F8JsJYMplTBbOuXrgGdrxAa3mZ4DAd5v9kZ80zw%2FTAfixCGEWb9V0oiI6HnCPOlCgRotRFb5e2bt1dhtCJ3DlGlyUcLquXyRDRfCglrK0GyEQjcwwdaFNI77vCFylBOfOdnD4bj%2FNORY81kNPjOoq7qw%2BDw3gIbIiRh44P8%2Bvo0ZRcmsd%2FcTCfTN%2FQMP7fSEv13Ov3TaFF2MKo7%2FsvVEwAFzcwj%2BOiU8dUTGEFxiqyq0OHWtwt7QWlnDVgbLB9He9nsuNuM1eENW2v1IJr2r%2BR3mrHGD2UMm0qXUgoTwp%2B7XgHpv7jl%2BQYCWz0m80iCflzVhU3DviqxuLR69MpkG1AsHnUOkWZiEvVs4ph0xBJ%2B5Gg2t3JZOXhSDmrx4KcmDLHRvcwMhZ0xscIKrBYAKkpTVntNnHA2ZR5QH1ValGE%2BXDuoAmsnFS%2Bz7zBp17%2F3EKr3kvrKd%2FpNOQ6ty9H2DN4cVqy1wMX3KNjCIr7nABjqkAScS91GkGAK3k1mmOQYp5nU%2FFeIJx6yrjYQaW9K%2FEdJJYbe0Mq%2FFm1c2he633ALkVfZw2STHZq%2FhQHk%2BCWPBr2gNeUGiu%2FFgNq4qNQe%2B%2B1lOckg3SHE1YyVHIfGIDBRqImL828RrRONlUKYyw1xTIEJmQWhVlCf2xD2fP0VueRdrz6D4vB62iUMRZ8WnaF1PeH%2B2OdNObFX7pXYB2UNleg9CvlYj&X-Amz-Signature=783aeb35164bb277e94a12b4c3fa3a7f5047383a0d17d51941705183f3f74d64&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
