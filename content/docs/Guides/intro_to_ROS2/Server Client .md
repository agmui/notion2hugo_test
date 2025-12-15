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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSLV3BO%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCyXHxWSV5rAn7ISRzT1iIiORMFgpIg9vV%2B%2BaVeYqij4AIgZPO3eRbAZD3Lv9%2Bh8bkIo4F%2FXx8TI2L3A%2Ff9HMu%2FPE0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPHQ62%2FiT1cX98Kf4CrcAzLMelQb51Bne3Z2JGNAj7uNPom4tI4okGP53plqF%2FBtVwoTjssJ%2B86y97SRF%2BUgsZzObGCvp8jgmS0uhEacBljDhlxQzK1k86xpJUTFoxIb6alIlQARRg83vxcWGR0uYBzRt%2BO%2BzY2XWwlImUGS0ZT3smNQlldDGpKdlxFSGVKBC%2F88kQiYvJFy4JoONezq9U3lBaliQLXFu7PxxSvkhLgOLNsNDf717Q3gOohW4PkDI5WpqxJPxK8qmDYXqaYcpsn92%2FFmXfrenBrVYIJa1MOusDM1K7Z2AqWPUOvFMYEGsos1m6Onjx1miy6sN%2BJ8qYPcyS2Gh2%2BJ0Oo2ikfJcPJAlkcR%2BuoMDlNZmChykqsPNBq3l7xc12W7FcJ7kxS44wgVHCp5%2FLBTy947SfmcKr8MFC1upRUcmSBKe2zTWPIJMeRp117NmAVJcF7DOZhcqCp2SC%2BWOtGHSDOdCV6y8vXjwKymUZs92VwtSBtPQNNBGw%2BemIdo%2F5TJ50VuwUVAzkkzuVym4jkbTmkrwdTainGRIU0hDpbugCvNqaJnhJbjVQIwValWMWPiy1GUz9qtt%2F3991I1ce6CpKqLSgc6bMIkoZqx42v2WhAy%2BiBQWPDqjoS2wc5am9ORUaEBMOLa%2FMkGOqUBSY4wUXXVus4VxzsDXPuy4zaWMna1HiKGwRO6o8zyCDhOHdJomhrsLYe1MiNrm0DEEUWRmS3nKpXR69YzM8fKs4Z1GQMoHQD3NAFwZ362selmd7qyGNcr0hn1El95bDL6ssKComQp5E%2BFNMasHiJqtXkMgIJ%2BE8MAgbSeNuaynOtdjPW1OGsz%2BHYr4S1Jp%2Bi7CUqw2hLv9YcgPQ3UIttNEsfxHg14&X-Amz-Signature=7f7ca08d6c00d77d205355ef2bbf7bbea364d43f6eaff0ee2be4267272f6ddd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSLV3BO%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCyXHxWSV5rAn7ISRzT1iIiORMFgpIg9vV%2B%2BaVeYqij4AIgZPO3eRbAZD3Lv9%2Bh8bkIo4F%2FXx8TI2L3A%2Ff9HMu%2FPE0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPHQ62%2FiT1cX98Kf4CrcAzLMelQb51Bne3Z2JGNAj7uNPom4tI4okGP53plqF%2FBtVwoTjssJ%2B86y97SRF%2BUgsZzObGCvp8jgmS0uhEacBljDhlxQzK1k86xpJUTFoxIb6alIlQARRg83vxcWGR0uYBzRt%2BO%2BzY2XWwlImUGS0ZT3smNQlldDGpKdlxFSGVKBC%2F88kQiYvJFy4JoONezq9U3lBaliQLXFu7PxxSvkhLgOLNsNDf717Q3gOohW4PkDI5WpqxJPxK8qmDYXqaYcpsn92%2FFmXfrenBrVYIJa1MOusDM1K7Z2AqWPUOvFMYEGsos1m6Onjx1miy6sN%2BJ8qYPcyS2Gh2%2BJ0Oo2ikfJcPJAlkcR%2BuoMDlNZmChykqsPNBq3l7xc12W7FcJ7kxS44wgVHCp5%2FLBTy947SfmcKr8MFC1upRUcmSBKe2zTWPIJMeRp117NmAVJcF7DOZhcqCp2SC%2BWOtGHSDOdCV6y8vXjwKymUZs92VwtSBtPQNNBGw%2BemIdo%2F5TJ50VuwUVAzkkzuVym4jkbTmkrwdTainGRIU0hDpbugCvNqaJnhJbjVQIwValWMWPiy1GUz9qtt%2F3991I1ce6CpKqLSgc6bMIkoZqx42v2WhAy%2BiBQWPDqjoS2wc5am9ORUaEBMOLa%2FMkGOqUBSY4wUXXVus4VxzsDXPuy4zaWMna1HiKGwRO6o8zyCDhOHdJomhrsLYe1MiNrm0DEEUWRmS3nKpXR69YzM8fKs4Z1GQMoHQD3NAFwZ362selmd7qyGNcr0hn1El95bDL6ssKComQp5E%2BFNMasHiJqtXkMgIJ%2BE8MAgbSeNuaynOtdjPW1OGsz%2BHYr4S1Jp%2Bi7CUqw2hLv9YcgPQ3UIttNEsfxHg14&X-Amz-Signature=112e7fccb5a2b94b382301328c6ef63b20ac7bbd1413d0ab2b736ad6b10a0187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSLV3BO%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCyXHxWSV5rAn7ISRzT1iIiORMFgpIg9vV%2B%2BaVeYqij4AIgZPO3eRbAZD3Lv9%2Bh8bkIo4F%2FXx8TI2L3A%2Ff9HMu%2FPE0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPHQ62%2FiT1cX98Kf4CrcAzLMelQb51Bne3Z2JGNAj7uNPom4tI4okGP53plqF%2FBtVwoTjssJ%2B86y97SRF%2BUgsZzObGCvp8jgmS0uhEacBljDhlxQzK1k86xpJUTFoxIb6alIlQARRg83vxcWGR0uYBzRt%2BO%2BzY2XWwlImUGS0ZT3smNQlldDGpKdlxFSGVKBC%2F88kQiYvJFy4JoONezq9U3lBaliQLXFu7PxxSvkhLgOLNsNDf717Q3gOohW4PkDI5WpqxJPxK8qmDYXqaYcpsn92%2FFmXfrenBrVYIJa1MOusDM1K7Z2AqWPUOvFMYEGsos1m6Onjx1miy6sN%2BJ8qYPcyS2Gh2%2BJ0Oo2ikfJcPJAlkcR%2BuoMDlNZmChykqsPNBq3l7xc12W7FcJ7kxS44wgVHCp5%2FLBTy947SfmcKr8MFC1upRUcmSBKe2zTWPIJMeRp117NmAVJcF7DOZhcqCp2SC%2BWOtGHSDOdCV6y8vXjwKymUZs92VwtSBtPQNNBGw%2BemIdo%2F5TJ50VuwUVAzkkzuVym4jkbTmkrwdTainGRIU0hDpbugCvNqaJnhJbjVQIwValWMWPiy1GUz9qtt%2F3991I1ce6CpKqLSgc6bMIkoZqx42v2WhAy%2BiBQWPDqjoS2wc5am9ORUaEBMOLa%2FMkGOqUBSY4wUXXVus4VxzsDXPuy4zaWMna1HiKGwRO6o8zyCDhOHdJomhrsLYe1MiNrm0DEEUWRmS3nKpXR69YzM8fKs4Z1GQMoHQD3NAFwZ362selmd7qyGNcr0hn1El95bDL6ssKComQp5E%2BFNMasHiJqtXkMgIJ%2BE8MAgbSeNuaynOtdjPW1OGsz%2BHYr4S1Jp%2Bi7CUqw2hLv9YcgPQ3UIttNEsfxHg14&X-Amz-Signature=8cc328f0ba70f7fd660c0151e859a21b18f491288e1564bc63c64c63be168339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSLV3BO%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCyXHxWSV5rAn7ISRzT1iIiORMFgpIg9vV%2B%2BaVeYqij4AIgZPO3eRbAZD3Lv9%2Bh8bkIo4F%2FXx8TI2L3A%2Ff9HMu%2FPE0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPHQ62%2FiT1cX98Kf4CrcAzLMelQb51Bne3Z2JGNAj7uNPom4tI4okGP53plqF%2FBtVwoTjssJ%2B86y97SRF%2BUgsZzObGCvp8jgmS0uhEacBljDhlxQzK1k86xpJUTFoxIb6alIlQARRg83vxcWGR0uYBzRt%2BO%2BzY2XWwlImUGS0ZT3smNQlldDGpKdlxFSGVKBC%2F88kQiYvJFy4JoONezq9U3lBaliQLXFu7PxxSvkhLgOLNsNDf717Q3gOohW4PkDI5WpqxJPxK8qmDYXqaYcpsn92%2FFmXfrenBrVYIJa1MOusDM1K7Z2AqWPUOvFMYEGsos1m6Onjx1miy6sN%2BJ8qYPcyS2Gh2%2BJ0Oo2ikfJcPJAlkcR%2BuoMDlNZmChykqsPNBq3l7xc12W7FcJ7kxS44wgVHCp5%2FLBTy947SfmcKr8MFC1upRUcmSBKe2zTWPIJMeRp117NmAVJcF7DOZhcqCp2SC%2BWOtGHSDOdCV6y8vXjwKymUZs92VwtSBtPQNNBGw%2BemIdo%2F5TJ50VuwUVAzkkzuVym4jkbTmkrwdTainGRIU0hDpbugCvNqaJnhJbjVQIwValWMWPiy1GUz9qtt%2F3991I1ce6CpKqLSgc6bMIkoZqx42v2WhAy%2BiBQWPDqjoS2wc5am9ORUaEBMOLa%2FMkGOqUBSY4wUXXVus4VxzsDXPuy4zaWMna1HiKGwRO6o8zyCDhOHdJomhrsLYe1MiNrm0DEEUWRmS3nKpXR69YzM8fKs4Z1GQMoHQD3NAFwZ362selmd7qyGNcr0hn1El95bDL6ssKComQp5E%2BFNMasHiJqtXkMgIJ%2BE8MAgbSeNuaynOtdjPW1OGsz%2BHYr4S1Jp%2Bi7CUqw2hLv9YcgPQ3UIttNEsfxHg14&X-Amz-Signature=cb15bb2119d6edd1bf55f7bc4481ab2d81c6de0b8efc0f8972a67ced651d2259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSLV3BO%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCyXHxWSV5rAn7ISRzT1iIiORMFgpIg9vV%2B%2BaVeYqij4AIgZPO3eRbAZD3Lv9%2Bh8bkIo4F%2FXx8TI2L3A%2Ff9HMu%2FPE0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPHQ62%2FiT1cX98Kf4CrcAzLMelQb51Bne3Z2JGNAj7uNPom4tI4okGP53plqF%2FBtVwoTjssJ%2B86y97SRF%2BUgsZzObGCvp8jgmS0uhEacBljDhlxQzK1k86xpJUTFoxIb6alIlQARRg83vxcWGR0uYBzRt%2BO%2BzY2XWwlImUGS0ZT3smNQlldDGpKdlxFSGVKBC%2F88kQiYvJFy4JoONezq9U3lBaliQLXFu7PxxSvkhLgOLNsNDf717Q3gOohW4PkDI5WpqxJPxK8qmDYXqaYcpsn92%2FFmXfrenBrVYIJa1MOusDM1K7Z2AqWPUOvFMYEGsos1m6Onjx1miy6sN%2BJ8qYPcyS2Gh2%2BJ0Oo2ikfJcPJAlkcR%2BuoMDlNZmChykqsPNBq3l7xc12W7FcJ7kxS44wgVHCp5%2FLBTy947SfmcKr8MFC1upRUcmSBKe2zTWPIJMeRp117NmAVJcF7DOZhcqCp2SC%2BWOtGHSDOdCV6y8vXjwKymUZs92VwtSBtPQNNBGw%2BemIdo%2F5TJ50VuwUVAzkkzuVym4jkbTmkrwdTainGRIU0hDpbugCvNqaJnhJbjVQIwValWMWPiy1GUz9qtt%2F3991I1ce6CpKqLSgc6bMIkoZqx42v2WhAy%2BiBQWPDqjoS2wc5am9ORUaEBMOLa%2FMkGOqUBSY4wUXXVus4VxzsDXPuy4zaWMna1HiKGwRO6o8zyCDhOHdJomhrsLYe1MiNrm0DEEUWRmS3nKpXR69YzM8fKs4Z1GQMoHQD3NAFwZ362selmd7qyGNcr0hn1El95bDL6ssKComQp5E%2BFNMasHiJqtXkMgIJ%2BE8MAgbSeNuaynOtdjPW1OGsz%2BHYr4S1Jp%2Bi7CUqw2hLv9YcgPQ3UIttNEsfxHg14&X-Amz-Signature=cbf1dd21bf40ea7d01dd260496e5d3b94b9b8023e9c6c4dcf0e81a9a65c5377b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
