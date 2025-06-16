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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QXHYDA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCxOb5GRppaflpcizzu6LsWA6xHCrEOE6a2%2FsC5dddHPgIgHNQvKieGFTKu3%2BtgfRkycw35cPc%2FchFFoQid4O4n2%2B4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCZiK54NJKVMBMHDjircA0I5g0OYe6SU7qJuJjtJyyRTfZHpQlLwgGE%2FkTTaDe84qgx6s0LYTOifVD5X%2B1j0dabuvW3BvZtKGJcXddyGF7eoHM2GGD1PHjzNQahlwmEAj1UWyrU9asoT7PImzsLj%2B94MwYksq1Uk8m%2FJB3KJrkN%2BtLDPuTdpA4rPnCwEYbnEL81dheI%2FnDUHZwe8Yrx8seOLBPg3aJN4VzI02nsmICLrNSpMFiWajkJqvTO25WlFSPoRtqdjWr1mTevKF6Ruh5ZfD1KhXyZUs9OD%2FjyHbVU5Tg1%2F1kmq9ZpYlxW0saeZXr39mE9eYa%2FhQOsjT5p7kEINn0dzRNbvQber7yVWGjFxhw64I00jl3JP1aor%2FdICLrcsRe5SR1D9QE0FPrIAyN4kSY6Iey0s6kQprS7CvNJLILZSe%2Fw8JpVock2OkSet%2BeV0EHFVB7jeKjhMCZJiFxzxH2gystdXfbpAgI6LkCp3JE9tjXEOK2T7esouc%2FiDPZv%2FM%2BaizvTwq2sw5K8J8p388qCFFVDhY%2F6CpMJfcskHcWpiLqqmxrDe0rbYabnIw3I5D9qKvjdKsMrs2yuuhYfROqLmL1NJ1meVBhNLP%2B3FDh%2BaG47tDarhQv81VL5weUbTqMwR3BJLRgj3ML%2F%2BvcIGOqUBVPr47bw8NhLr63dhDRL8ORG9wIJ7c1h4QdPfK1kvuoBzOoTAda0Wz7uuvPU2QvwElCFInW8bbisi%2Bta22NLLykShEVU9VG%2BE5sm5yP%2BJXkPxWlV5a%2FANZAC41Fq4i%2FMyTxJYbD6pqweHFbMDWc%2F1CXyXZffxcOphTVKblVTcuQjlxCzHU0M3%2FAxA4fDxRQ4yscOAZzmbhkmKu06zyPSDbKjZZLMH&X-Amz-Signature=ddc8bbf5e63be26c7beffd771f776c3b81b3562a2ab32cd5f71d660810d8f7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QXHYDA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCxOb5GRppaflpcizzu6LsWA6xHCrEOE6a2%2FsC5dddHPgIgHNQvKieGFTKu3%2BtgfRkycw35cPc%2FchFFoQid4O4n2%2B4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCZiK54NJKVMBMHDjircA0I5g0OYe6SU7qJuJjtJyyRTfZHpQlLwgGE%2FkTTaDe84qgx6s0LYTOifVD5X%2B1j0dabuvW3BvZtKGJcXddyGF7eoHM2GGD1PHjzNQahlwmEAj1UWyrU9asoT7PImzsLj%2B94MwYksq1Uk8m%2FJB3KJrkN%2BtLDPuTdpA4rPnCwEYbnEL81dheI%2FnDUHZwe8Yrx8seOLBPg3aJN4VzI02nsmICLrNSpMFiWajkJqvTO25WlFSPoRtqdjWr1mTevKF6Ruh5ZfD1KhXyZUs9OD%2FjyHbVU5Tg1%2F1kmq9ZpYlxW0saeZXr39mE9eYa%2FhQOsjT5p7kEINn0dzRNbvQber7yVWGjFxhw64I00jl3JP1aor%2FdICLrcsRe5SR1D9QE0FPrIAyN4kSY6Iey0s6kQprS7CvNJLILZSe%2Fw8JpVock2OkSet%2BeV0EHFVB7jeKjhMCZJiFxzxH2gystdXfbpAgI6LkCp3JE9tjXEOK2T7esouc%2FiDPZv%2FM%2BaizvTwq2sw5K8J8p388qCFFVDhY%2F6CpMJfcskHcWpiLqqmxrDe0rbYabnIw3I5D9qKvjdKsMrs2yuuhYfROqLmL1NJ1meVBhNLP%2B3FDh%2BaG47tDarhQv81VL5weUbTqMwR3BJLRgj3ML%2F%2BvcIGOqUBVPr47bw8NhLr63dhDRL8ORG9wIJ7c1h4QdPfK1kvuoBzOoTAda0Wz7uuvPU2QvwElCFInW8bbisi%2Bta22NLLykShEVU9VG%2BE5sm5yP%2BJXkPxWlV5a%2FANZAC41Fq4i%2FMyTxJYbD6pqweHFbMDWc%2F1CXyXZffxcOphTVKblVTcuQjlxCzHU0M3%2FAxA4fDxRQ4yscOAZzmbhkmKu06zyPSDbKjZZLMH&X-Amz-Signature=1da0c541b4356ab15e361dd4fc19197382e72165c97dcefc1ec74bd69f054201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QXHYDA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCxOb5GRppaflpcizzu6LsWA6xHCrEOE6a2%2FsC5dddHPgIgHNQvKieGFTKu3%2BtgfRkycw35cPc%2FchFFoQid4O4n2%2B4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCZiK54NJKVMBMHDjircA0I5g0OYe6SU7qJuJjtJyyRTfZHpQlLwgGE%2FkTTaDe84qgx6s0LYTOifVD5X%2B1j0dabuvW3BvZtKGJcXddyGF7eoHM2GGD1PHjzNQahlwmEAj1UWyrU9asoT7PImzsLj%2B94MwYksq1Uk8m%2FJB3KJrkN%2BtLDPuTdpA4rPnCwEYbnEL81dheI%2FnDUHZwe8Yrx8seOLBPg3aJN4VzI02nsmICLrNSpMFiWajkJqvTO25WlFSPoRtqdjWr1mTevKF6Ruh5ZfD1KhXyZUs9OD%2FjyHbVU5Tg1%2F1kmq9ZpYlxW0saeZXr39mE9eYa%2FhQOsjT5p7kEINn0dzRNbvQber7yVWGjFxhw64I00jl3JP1aor%2FdICLrcsRe5SR1D9QE0FPrIAyN4kSY6Iey0s6kQprS7CvNJLILZSe%2Fw8JpVock2OkSet%2BeV0EHFVB7jeKjhMCZJiFxzxH2gystdXfbpAgI6LkCp3JE9tjXEOK2T7esouc%2FiDPZv%2FM%2BaizvTwq2sw5K8J8p388qCFFVDhY%2F6CpMJfcskHcWpiLqqmxrDe0rbYabnIw3I5D9qKvjdKsMrs2yuuhYfROqLmL1NJ1meVBhNLP%2B3FDh%2BaG47tDarhQv81VL5weUbTqMwR3BJLRgj3ML%2F%2BvcIGOqUBVPr47bw8NhLr63dhDRL8ORG9wIJ7c1h4QdPfK1kvuoBzOoTAda0Wz7uuvPU2QvwElCFInW8bbisi%2Bta22NLLykShEVU9VG%2BE5sm5yP%2BJXkPxWlV5a%2FANZAC41Fq4i%2FMyTxJYbD6pqweHFbMDWc%2F1CXyXZffxcOphTVKblVTcuQjlxCzHU0M3%2FAxA4fDxRQ4yscOAZzmbhkmKu06zyPSDbKjZZLMH&X-Amz-Signature=c9258b37c212ebd0476fb56cbec6937b462576abf13c02d59eed6af4d85a6c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QXHYDA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCxOb5GRppaflpcizzu6LsWA6xHCrEOE6a2%2FsC5dddHPgIgHNQvKieGFTKu3%2BtgfRkycw35cPc%2FchFFoQid4O4n2%2B4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCZiK54NJKVMBMHDjircA0I5g0OYe6SU7qJuJjtJyyRTfZHpQlLwgGE%2FkTTaDe84qgx6s0LYTOifVD5X%2B1j0dabuvW3BvZtKGJcXddyGF7eoHM2GGD1PHjzNQahlwmEAj1UWyrU9asoT7PImzsLj%2B94MwYksq1Uk8m%2FJB3KJrkN%2BtLDPuTdpA4rPnCwEYbnEL81dheI%2FnDUHZwe8Yrx8seOLBPg3aJN4VzI02nsmICLrNSpMFiWajkJqvTO25WlFSPoRtqdjWr1mTevKF6Ruh5ZfD1KhXyZUs9OD%2FjyHbVU5Tg1%2F1kmq9ZpYlxW0saeZXr39mE9eYa%2FhQOsjT5p7kEINn0dzRNbvQber7yVWGjFxhw64I00jl3JP1aor%2FdICLrcsRe5SR1D9QE0FPrIAyN4kSY6Iey0s6kQprS7CvNJLILZSe%2Fw8JpVock2OkSet%2BeV0EHFVB7jeKjhMCZJiFxzxH2gystdXfbpAgI6LkCp3JE9tjXEOK2T7esouc%2FiDPZv%2FM%2BaizvTwq2sw5K8J8p388qCFFVDhY%2F6CpMJfcskHcWpiLqqmxrDe0rbYabnIw3I5D9qKvjdKsMrs2yuuhYfROqLmL1NJ1meVBhNLP%2B3FDh%2BaG47tDarhQv81VL5weUbTqMwR3BJLRgj3ML%2F%2BvcIGOqUBVPr47bw8NhLr63dhDRL8ORG9wIJ7c1h4QdPfK1kvuoBzOoTAda0Wz7uuvPU2QvwElCFInW8bbisi%2Bta22NLLykShEVU9VG%2BE5sm5yP%2BJXkPxWlV5a%2FANZAC41Fq4i%2FMyTxJYbD6pqweHFbMDWc%2F1CXyXZffxcOphTVKblVTcuQjlxCzHU0M3%2FAxA4fDxRQ4yscOAZzmbhkmKu06zyPSDbKjZZLMH&X-Amz-Signature=8ce73e45200462537c5f5019481df5db89d91994909a6b492697a2c0e67504fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QXHYDA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCxOb5GRppaflpcizzu6LsWA6xHCrEOE6a2%2FsC5dddHPgIgHNQvKieGFTKu3%2BtgfRkycw35cPc%2FchFFoQid4O4n2%2B4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCZiK54NJKVMBMHDjircA0I5g0OYe6SU7qJuJjtJyyRTfZHpQlLwgGE%2FkTTaDe84qgx6s0LYTOifVD5X%2B1j0dabuvW3BvZtKGJcXddyGF7eoHM2GGD1PHjzNQahlwmEAj1UWyrU9asoT7PImzsLj%2B94MwYksq1Uk8m%2FJB3KJrkN%2BtLDPuTdpA4rPnCwEYbnEL81dheI%2FnDUHZwe8Yrx8seOLBPg3aJN4VzI02nsmICLrNSpMFiWajkJqvTO25WlFSPoRtqdjWr1mTevKF6Ruh5ZfD1KhXyZUs9OD%2FjyHbVU5Tg1%2F1kmq9ZpYlxW0saeZXr39mE9eYa%2FhQOsjT5p7kEINn0dzRNbvQber7yVWGjFxhw64I00jl3JP1aor%2FdICLrcsRe5SR1D9QE0FPrIAyN4kSY6Iey0s6kQprS7CvNJLILZSe%2Fw8JpVock2OkSet%2BeV0EHFVB7jeKjhMCZJiFxzxH2gystdXfbpAgI6LkCp3JE9tjXEOK2T7esouc%2FiDPZv%2FM%2BaizvTwq2sw5K8J8p388qCFFVDhY%2F6CpMJfcskHcWpiLqqmxrDe0rbYabnIw3I5D9qKvjdKsMrs2yuuhYfROqLmL1NJ1meVBhNLP%2B3FDh%2BaG47tDarhQv81VL5weUbTqMwR3BJLRgj3ML%2F%2BvcIGOqUBVPr47bw8NhLr63dhDRL8ORG9wIJ7c1h4QdPfK1kvuoBzOoTAda0Wz7uuvPU2QvwElCFInW8bbisi%2Bta22NLLykShEVU9VG%2BE5sm5yP%2BJXkPxWlV5a%2FANZAC41Fq4i%2FMyTxJYbD6pqweHFbMDWc%2F1CXyXZffxcOphTVKblVTcuQjlxCzHU0M3%2FAxA4fDxRQ4yscOAZzmbhkmKu06zyPSDbKjZZLMH&X-Amz-Signature=8df465f021b7ea35d251af2d7e8ec0945c9f158bc41a56a7975f5a79e9ddd301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
