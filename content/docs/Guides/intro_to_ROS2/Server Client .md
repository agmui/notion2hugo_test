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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKDZSOU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFXF0OijsZz%2FQ80fqXFgGVZBz6ep7IIPQyFeC2hPoH%2FnAiEAki84E%2BBSegVNZ5Jgfx24%2FK4UKPYpZluu4cMoqvqn5wAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNmqRXCFqIYva%2BX9ircA%2Fmwn6nZP98EKFlEPwQGnA2V%2FYpoQJBh45suCheGGJ%2BjqU5EMbLhC%2FL%2Bpvu%2FxZQsiifx%2F625oRdIYBpIGK9WzIeVENBHcbt8UBOduZvvA4gos7criwZZ6PLajl86SiHxNiwh%2F4gZ9YfuQDXgAq3bDOexDkFjqG015sDBBOkinCHa8LeId3pWJ%2Ba6ewmMFfa05CR3LTRu%2BFKIm8WQ6zQSbDFHdNgN2zROwsxMVmtUy%2BIjD%2Bo%2BB1oU7M8LeqEQAE14q9EJbNnr7iHv7EyY4Jz%2FC%2BnQ891zajfLCsBJquHc5kg41gONp7cnDA6x80PMh3%2B2q5N%2BLYQKVCZ9FXk%2FgZ4%2FhcNWfPqoEswPArYioUy%2FVaLUiL6lns8x5zb9zybzEF3kx1E54U5H6MO4jHNQss%2F%2FgDvyjZbPpXfR%2FJN0vjdHr5IPgSh1ZLUqJ9HK40Yt%2BUQHguFN9ikk6G0MHbUznFpclp%2BmZQ%2Ff5RN%2B7ekCzjDgMKgPz1r55ESTVI2OC646xZGcd%2Fc9soNt7QCThpWs%2F9IUDKB53u%2BmTaKB869%2BO6MupKdTw5NKvwvlZC53DyjdJquLQ1wmU7kVBOAxu13xsHHo%2B0sDhLkEs2iKvQgyZRKKNndYgwUvYM3xknmzDz%2BVMID50sQGOqUB9XhHez7PR3QTuhDJE%2FwWftfUQckqIHSocl2T6ZTVYuOLNwAmCQoGHzCVCVGQIpCftTRG%2ByXIMn4oNFAwDiIovzt3QmbUQPBxGhDry6%2B4FR%2FGyYZQpxg3qeo5osxgkZln926KjEKhUdiRvxBIiwm%2B0LIQv4SGV8t2jACcP4cdbuX1iajVDK9ip13e3GsXH2C9%2FX0PzwAGUrA4kShDNBabeYzttVYv&X-Amz-Signature=16655626a67856a736a3224dc2bbd5d247a7a5862e56e81a66cca8b5e25d3698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKDZSOU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFXF0OijsZz%2FQ80fqXFgGVZBz6ep7IIPQyFeC2hPoH%2FnAiEAki84E%2BBSegVNZ5Jgfx24%2FK4UKPYpZluu4cMoqvqn5wAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNmqRXCFqIYva%2BX9ircA%2Fmwn6nZP98EKFlEPwQGnA2V%2FYpoQJBh45suCheGGJ%2BjqU5EMbLhC%2FL%2Bpvu%2FxZQsiifx%2F625oRdIYBpIGK9WzIeVENBHcbt8UBOduZvvA4gos7criwZZ6PLajl86SiHxNiwh%2F4gZ9YfuQDXgAq3bDOexDkFjqG015sDBBOkinCHa8LeId3pWJ%2Ba6ewmMFfa05CR3LTRu%2BFKIm8WQ6zQSbDFHdNgN2zROwsxMVmtUy%2BIjD%2Bo%2BB1oU7M8LeqEQAE14q9EJbNnr7iHv7EyY4Jz%2FC%2BnQ891zajfLCsBJquHc5kg41gONp7cnDA6x80PMh3%2B2q5N%2BLYQKVCZ9FXk%2FgZ4%2FhcNWfPqoEswPArYioUy%2FVaLUiL6lns8x5zb9zybzEF3kx1E54U5H6MO4jHNQss%2F%2FgDvyjZbPpXfR%2FJN0vjdHr5IPgSh1ZLUqJ9HK40Yt%2BUQHguFN9ikk6G0MHbUznFpclp%2BmZQ%2Ff5RN%2B7ekCzjDgMKgPz1r55ESTVI2OC646xZGcd%2Fc9soNt7QCThpWs%2F9IUDKB53u%2BmTaKB869%2BO6MupKdTw5NKvwvlZC53DyjdJquLQ1wmU7kVBOAxu13xsHHo%2B0sDhLkEs2iKvQgyZRKKNndYgwUvYM3xknmzDz%2BVMID50sQGOqUB9XhHez7PR3QTuhDJE%2FwWftfUQckqIHSocl2T6ZTVYuOLNwAmCQoGHzCVCVGQIpCftTRG%2ByXIMn4oNFAwDiIovzt3QmbUQPBxGhDry6%2B4FR%2FGyYZQpxg3qeo5osxgkZln926KjEKhUdiRvxBIiwm%2B0LIQv4SGV8t2jACcP4cdbuX1iajVDK9ip13e3GsXH2C9%2FX0PzwAGUrA4kShDNBabeYzttVYv&X-Amz-Signature=c87b59f8cbca7ba7e5e33b0897ba5e2b09753766dee0faaea03adccdd452e475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKDZSOU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFXF0OijsZz%2FQ80fqXFgGVZBz6ep7IIPQyFeC2hPoH%2FnAiEAki84E%2BBSegVNZ5Jgfx24%2FK4UKPYpZluu4cMoqvqn5wAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNmqRXCFqIYva%2BX9ircA%2Fmwn6nZP98EKFlEPwQGnA2V%2FYpoQJBh45suCheGGJ%2BjqU5EMbLhC%2FL%2Bpvu%2FxZQsiifx%2F625oRdIYBpIGK9WzIeVENBHcbt8UBOduZvvA4gos7criwZZ6PLajl86SiHxNiwh%2F4gZ9YfuQDXgAq3bDOexDkFjqG015sDBBOkinCHa8LeId3pWJ%2Ba6ewmMFfa05CR3LTRu%2BFKIm8WQ6zQSbDFHdNgN2zROwsxMVmtUy%2BIjD%2Bo%2BB1oU7M8LeqEQAE14q9EJbNnr7iHv7EyY4Jz%2FC%2BnQ891zajfLCsBJquHc5kg41gONp7cnDA6x80PMh3%2B2q5N%2BLYQKVCZ9FXk%2FgZ4%2FhcNWfPqoEswPArYioUy%2FVaLUiL6lns8x5zb9zybzEF3kx1E54U5H6MO4jHNQss%2F%2FgDvyjZbPpXfR%2FJN0vjdHr5IPgSh1ZLUqJ9HK40Yt%2BUQHguFN9ikk6G0MHbUznFpclp%2BmZQ%2Ff5RN%2B7ekCzjDgMKgPz1r55ESTVI2OC646xZGcd%2Fc9soNt7QCThpWs%2F9IUDKB53u%2BmTaKB869%2BO6MupKdTw5NKvwvlZC53DyjdJquLQ1wmU7kVBOAxu13xsHHo%2B0sDhLkEs2iKvQgyZRKKNndYgwUvYM3xknmzDz%2BVMID50sQGOqUB9XhHez7PR3QTuhDJE%2FwWftfUQckqIHSocl2T6ZTVYuOLNwAmCQoGHzCVCVGQIpCftTRG%2ByXIMn4oNFAwDiIovzt3QmbUQPBxGhDry6%2B4FR%2FGyYZQpxg3qeo5osxgkZln926KjEKhUdiRvxBIiwm%2B0LIQv4SGV8t2jACcP4cdbuX1iajVDK9ip13e3GsXH2C9%2FX0PzwAGUrA4kShDNBabeYzttVYv&X-Amz-Signature=cb099a2c06affd6bd6e3b142b1069ddb696b56ede384a396439dde65117f885f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKDZSOU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFXF0OijsZz%2FQ80fqXFgGVZBz6ep7IIPQyFeC2hPoH%2FnAiEAki84E%2BBSegVNZ5Jgfx24%2FK4UKPYpZluu4cMoqvqn5wAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNmqRXCFqIYva%2BX9ircA%2Fmwn6nZP98EKFlEPwQGnA2V%2FYpoQJBh45suCheGGJ%2BjqU5EMbLhC%2FL%2Bpvu%2FxZQsiifx%2F625oRdIYBpIGK9WzIeVENBHcbt8UBOduZvvA4gos7criwZZ6PLajl86SiHxNiwh%2F4gZ9YfuQDXgAq3bDOexDkFjqG015sDBBOkinCHa8LeId3pWJ%2Ba6ewmMFfa05CR3LTRu%2BFKIm8WQ6zQSbDFHdNgN2zROwsxMVmtUy%2BIjD%2Bo%2BB1oU7M8LeqEQAE14q9EJbNnr7iHv7EyY4Jz%2FC%2BnQ891zajfLCsBJquHc5kg41gONp7cnDA6x80PMh3%2B2q5N%2BLYQKVCZ9FXk%2FgZ4%2FhcNWfPqoEswPArYioUy%2FVaLUiL6lns8x5zb9zybzEF3kx1E54U5H6MO4jHNQss%2F%2FgDvyjZbPpXfR%2FJN0vjdHr5IPgSh1ZLUqJ9HK40Yt%2BUQHguFN9ikk6G0MHbUznFpclp%2BmZQ%2Ff5RN%2B7ekCzjDgMKgPz1r55ESTVI2OC646xZGcd%2Fc9soNt7QCThpWs%2F9IUDKB53u%2BmTaKB869%2BO6MupKdTw5NKvwvlZC53DyjdJquLQ1wmU7kVBOAxu13xsHHo%2B0sDhLkEs2iKvQgyZRKKNndYgwUvYM3xknmzDz%2BVMID50sQGOqUB9XhHez7PR3QTuhDJE%2FwWftfUQckqIHSocl2T6ZTVYuOLNwAmCQoGHzCVCVGQIpCftTRG%2ByXIMn4oNFAwDiIovzt3QmbUQPBxGhDry6%2B4FR%2FGyYZQpxg3qeo5osxgkZln926KjEKhUdiRvxBIiwm%2B0LIQv4SGV8t2jACcP4cdbuX1iajVDK9ip13e3GsXH2C9%2FX0PzwAGUrA4kShDNBabeYzttVYv&X-Amz-Signature=01e9ff3fc5dbe1eb45f4ff20f7be95d754a44147c7c362937b87231d624651eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKDZSOU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFXF0OijsZz%2FQ80fqXFgGVZBz6ep7IIPQyFeC2hPoH%2FnAiEAki84E%2BBSegVNZ5Jgfx24%2FK4UKPYpZluu4cMoqvqn5wAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNmqRXCFqIYva%2BX9ircA%2Fmwn6nZP98EKFlEPwQGnA2V%2FYpoQJBh45suCheGGJ%2BjqU5EMbLhC%2FL%2Bpvu%2FxZQsiifx%2F625oRdIYBpIGK9WzIeVENBHcbt8UBOduZvvA4gos7criwZZ6PLajl86SiHxNiwh%2F4gZ9YfuQDXgAq3bDOexDkFjqG015sDBBOkinCHa8LeId3pWJ%2Ba6ewmMFfa05CR3LTRu%2BFKIm8WQ6zQSbDFHdNgN2zROwsxMVmtUy%2BIjD%2Bo%2BB1oU7M8LeqEQAE14q9EJbNnr7iHv7EyY4Jz%2FC%2BnQ891zajfLCsBJquHc5kg41gONp7cnDA6x80PMh3%2B2q5N%2BLYQKVCZ9FXk%2FgZ4%2FhcNWfPqoEswPArYioUy%2FVaLUiL6lns8x5zb9zybzEF3kx1E54U5H6MO4jHNQss%2F%2FgDvyjZbPpXfR%2FJN0vjdHr5IPgSh1ZLUqJ9HK40Yt%2BUQHguFN9ikk6G0MHbUznFpclp%2BmZQ%2Ff5RN%2B7ekCzjDgMKgPz1r55ESTVI2OC646xZGcd%2Fc9soNt7QCThpWs%2F9IUDKB53u%2BmTaKB869%2BO6MupKdTw5NKvwvlZC53DyjdJquLQ1wmU7kVBOAxu13xsHHo%2B0sDhLkEs2iKvQgyZRKKNndYgwUvYM3xknmzDz%2BVMID50sQGOqUB9XhHez7PR3QTuhDJE%2FwWftfUQckqIHSocl2T6ZTVYuOLNwAmCQoGHzCVCVGQIpCftTRG%2ByXIMn4oNFAwDiIovzt3QmbUQPBxGhDry6%2B4FR%2FGyYZQpxg3qeo5osxgkZln926KjEKhUdiRvxBIiwm%2B0LIQv4SGV8t2jACcP4cdbuX1iajVDK9ip13e3GsXH2C9%2FX0PzwAGUrA4kShDNBabeYzttVYv&X-Amz-Signature=a5a79951a07df8d0eb10b39ce70f4fe598cfb91be8ba4f2f88a07617ba9cb4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
