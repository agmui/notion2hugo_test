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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBP5SYW7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICCDA40xPLqHCe4IwW3oZS4%2B2a8DXiuDnDiEk2HonmSOAiEAhz67dNaC380zPMwlv5aNOCbv3YbTVle%2FPe3fERQajWQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFz%2Bn%2Fc9o54sl04UiSrcA75th82pDBq6HeWr75qhPqDg9zKgZaZBUup9ktgOOhr%2BchmzpVJDrMJIhJCeydCmvDmwiG2m%2BWHPhPAplEs6z5OaM4aycGZiEb%2BfqBUdt%2BQF%2FSZ5nFPLWk7CWKhPeQ2U3wX4tZQl6lDBOdQ7rp4JBXX5IaS2IlyXlgZK%2FNAx4vHIZ1ajrnEEQek%2BTfxiiIx23mVSKxcwZEVfat4SgsQ6RpMFfV896pB4zgPm5H8LbpTHBLtiU0aSYz0BMYllJvTxmGPvQKZg12LTLTZ2Ch%2BfXkNBnmB6CeDcCAX6WqpHT54cZxMqqtZCrsXMTIU3El69xnfQlbWeJ4NeuJ%2FR%2FfhS%2Brn8Yi9otih1xUb%2Fd5%2FUypTDiJi352dy1twVZdpzv2%2BAefiovqKWJt4iozPS7cdwUrCrGHbCGVJleMeTPgoCdLaQftV2A0jl%2BUIr8N87Oxwi4KVKAPv2EASsFsojC%2BulcaLH89cP9qqwoNOuBdfdmj9%2BScq2V7T%2Bp1V%2BQg5fCwD6vFOCCucvl%2F%2FCqj%2BoSUcN3844NfnNS6%2FwsHB7FXdpGy%2F3PCYcHQldqWE%2B1xpN0GmrO2g5WJqZO87171isLKAk3x9ptQy6RoJVmK0ABobAlQ7r5s7iLdo37yI5TdJLMO%2Bdz8EGOqUB30Dr3BBVd5JqqBEF29z%2BeIuspO%2FgQmu22WYdibqwOc3w3H10TFqPgh%2BOmAAq9cdwOsZxPxkKuDf%2BFckzSmBYtXQaz0%2FgiYTaZcra%2Fj7sFupVWfqQ5S5J%2BEJtn0ULxzQ0GuchcnTX4BuPpziUBTCaKze8IFvk57ofUywkkStsNPhRY4VR3QnOWglsCXpOXAIyNys18mrfX9e3XL3X%2B8taQZE5hxJe&X-Amz-Signature=aaff05ea6f5467622435d8414b800bb0a63bbf5f4e088201a47ef0f839781b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBP5SYW7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICCDA40xPLqHCe4IwW3oZS4%2B2a8DXiuDnDiEk2HonmSOAiEAhz67dNaC380zPMwlv5aNOCbv3YbTVle%2FPe3fERQajWQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFz%2Bn%2Fc9o54sl04UiSrcA75th82pDBq6HeWr75qhPqDg9zKgZaZBUup9ktgOOhr%2BchmzpVJDrMJIhJCeydCmvDmwiG2m%2BWHPhPAplEs6z5OaM4aycGZiEb%2BfqBUdt%2BQF%2FSZ5nFPLWk7CWKhPeQ2U3wX4tZQl6lDBOdQ7rp4JBXX5IaS2IlyXlgZK%2FNAx4vHIZ1ajrnEEQek%2BTfxiiIx23mVSKxcwZEVfat4SgsQ6RpMFfV896pB4zgPm5H8LbpTHBLtiU0aSYz0BMYllJvTxmGPvQKZg12LTLTZ2Ch%2BfXkNBnmB6CeDcCAX6WqpHT54cZxMqqtZCrsXMTIU3El69xnfQlbWeJ4NeuJ%2FR%2FfhS%2Brn8Yi9otih1xUb%2Fd5%2FUypTDiJi352dy1twVZdpzv2%2BAefiovqKWJt4iozPS7cdwUrCrGHbCGVJleMeTPgoCdLaQftV2A0jl%2BUIr8N87Oxwi4KVKAPv2EASsFsojC%2BulcaLH89cP9qqwoNOuBdfdmj9%2BScq2V7T%2Bp1V%2BQg5fCwD6vFOCCucvl%2F%2FCqj%2BoSUcN3844NfnNS6%2FwsHB7FXdpGy%2F3PCYcHQldqWE%2B1xpN0GmrO2g5WJqZO87171isLKAk3x9ptQy6RoJVmK0ABobAlQ7r5s7iLdo37yI5TdJLMO%2Bdz8EGOqUB30Dr3BBVd5JqqBEF29z%2BeIuspO%2FgQmu22WYdibqwOc3w3H10TFqPgh%2BOmAAq9cdwOsZxPxkKuDf%2BFckzSmBYtXQaz0%2FgiYTaZcra%2Fj7sFupVWfqQ5S5J%2BEJtn0ULxzQ0GuchcnTX4BuPpziUBTCaKze8IFvk57ofUywkkStsNPhRY4VR3QnOWglsCXpOXAIyNys18mrfX9e3XL3X%2B8taQZE5hxJe&X-Amz-Signature=c4a67b09ad89f80b0649224ba5e5ab53e2f330a7e164b7c2f24fa7fdcf59fe52&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBP5SYW7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICCDA40xPLqHCe4IwW3oZS4%2B2a8DXiuDnDiEk2HonmSOAiEAhz67dNaC380zPMwlv5aNOCbv3YbTVle%2FPe3fERQajWQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFz%2Bn%2Fc9o54sl04UiSrcA75th82pDBq6HeWr75qhPqDg9zKgZaZBUup9ktgOOhr%2BchmzpVJDrMJIhJCeydCmvDmwiG2m%2BWHPhPAplEs6z5OaM4aycGZiEb%2BfqBUdt%2BQF%2FSZ5nFPLWk7CWKhPeQ2U3wX4tZQl6lDBOdQ7rp4JBXX5IaS2IlyXlgZK%2FNAx4vHIZ1ajrnEEQek%2BTfxiiIx23mVSKxcwZEVfat4SgsQ6RpMFfV896pB4zgPm5H8LbpTHBLtiU0aSYz0BMYllJvTxmGPvQKZg12LTLTZ2Ch%2BfXkNBnmB6CeDcCAX6WqpHT54cZxMqqtZCrsXMTIU3El69xnfQlbWeJ4NeuJ%2FR%2FfhS%2Brn8Yi9otih1xUb%2Fd5%2FUypTDiJi352dy1twVZdpzv2%2BAefiovqKWJt4iozPS7cdwUrCrGHbCGVJleMeTPgoCdLaQftV2A0jl%2BUIr8N87Oxwi4KVKAPv2EASsFsojC%2BulcaLH89cP9qqwoNOuBdfdmj9%2BScq2V7T%2Bp1V%2BQg5fCwD6vFOCCucvl%2F%2FCqj%2BoSUcN3844NfnNS6%2FwsHB7FXdpGy%2F3PCYcHQldqWE%2B1xpN0GmrO2g5WJqZO87171isLKAk3x9ptQy6RoJVmK0ABobAlQ7r5s7iLdo37yI5TdJLMO%2Bdz8EGOqUB30Dr3BBVd5JqqBEF29z%2BeIuspO%2FgQmu22WYdibqwOc3w3H10TFqPgh%2BOmAAq9cdwOsZxPxkKuDf%2BFckzSmBYtXQaz0%2FgiYTaZcra%2Fj7sFupVWfqQ5S5J%2BEJtn0ULxzQ0GuchcnTX4BuPpziUBTCaKze8IFvk57ofUywkkStsNPhRY4VR3QnOWglsCXpOXAIyNys18mrfX9e3XL3X%2B8taQZE5hxJe&X-Amz-Signature=6bee3a28a3a80a5c9addc5ab5908c665608af0adfa4c0852b120f104d182ea8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBP5SYW7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICCDA40xPLqHCe4IwW3oZS4%2B2a8DXiuDnDiEk2HonmSOAiEAhz67dNaC380zPMwlv5aNOCbv3YbTVle%2FPe3fERQajWQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFz%2Bn%2Fc9o54sl04UiSrcA75th82pDBq6HeWr75qhPqDg9zKgZaZBUup9ktgOOhr%2BchmzpVJDrMJIhJCeydCmvDmwiG2m%2BWHPhPAplEs6z5OaM4aycGZiEb%2BfqBUdt%2BQF%2FSZ5nFPLWk7CWKhPeQ2U3wX4tZQl6lDBOdQ7rp4JBXX5IaS2IlyXlgZK%2FNAx4vHIZ1ajrnEEQek%2BTfxiiIx23mVSKxcwZEVfat4SgsQ6RpMFfV896pB4zgPm5H8LbpTHBLtiU0aSYz0BMYllJvTxmGPvQKZg12LTLTZ2Ch%2BfXkNBnmB6CeDcCAX6WqpHT54cZxMqqtZCrsXMTIU3El69xnfQlbWeJ4NeuJ%2FR%2FfhS%2Brn8Yi9otih1xUb%2Fd5%2FUypTDiJi352dy1twVZdpzv2%2BAefiovqKWJt4iozPS7cdwUrCrGHbCGVJleMeTPgoCdLaQftV2A0jl%2BUIr8N87Oxwi4KVKAPv2EASsFsojC%2BulcaLH89cP9qqwoNOuBdfdmj9%2BScq2V7T%2Bp1V%2BQg5fCwD6vFOCCucvl%2F%2FCqj%2BoSUcN3844NfnNS6%2FwsHB7FXdpGy%2F3PCYcHQldqWE%2B1xpN0GmrO2g5WJqZO87171isLKAk3x9ptQy6RoJVmK0ABobAlQ7r5s7iLdo37yI5TdJLMO%2Bdz8EGOqUB30Dr3BBVd5JqqBEF29z%2BeIuspO%2FgQmu22WYdibqwOc3w3H10TFqPgh%2BOmAAq9cdwOsZxPxkKuDf%2BFckzSmBYtXQaz0%2FgiYTaZcra%2Fj7sFupVWfqQ5S5J%2BEJtn0ULxzQ0GuchcnTX4BuPpziUBTCaKze8IFvk57ofUywkkStsNPhRY4VR3QnOWglsCXpOXAIyNys18mrfX9e3XL3X%2B8taQZE5hxJe&X-Amz-Signature=f9fd1591252dceac2e1c5f22ae127093af7ef356a508382798c39a5be92aa08f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBP5SYW7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICCDA40xPLqHCe4IwW3oZS4%2B2a8DXiuDnDiEk2HonmSOAiEAhz67dNaC380zPMwlv5aNOCbv3YbTVle%2FPe3fERQajWQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFz%2Bn%2Fc9o54sl04UiSrcA75th82pDBq6HeWr75qhPqDg9zKgZaZBUup9ktgOOhr%2BchmzpVJDrMJIhJCeydCmvDmwiG2m%2BWHPhPAplEs6z5OaM4aycGZiEb%2BfqBUdt%2BQF%2FSZ5nFPLWk7CWKhPeQ2U3wX4tZQl6lDBOdQ7rp4JBXX5IaS2IlyXlgZK%2FNAx4vHIZ1ajrnEEQek%2BTfxiiIx23mVSKxcwZEVfat4SgsQ6RpMFfV896pB4zgPm5H8LbpTHBLtiU0aSYz0BMYllJvTxmGPvQKZg12LTLTZ2Ch%2BfXkNBnmB6CeDcCAX6WqpHT54cZxMqqtZCrsXMTIU3El69xnfQlbWeJ4NeuJ%2FR%2FfhS%2Brn8Yi9otih1xUb%2Fd5%2FUypTDiJi352dy1twVZdpzv2%2BAefiovqKWJt4iozPS7cdwUrCrGHbCGVJleMeTPgoCdLaQftV2A0jl%2BUIr8N87Oxwi4KVKAPv2EASsFsojC%2BulcaLH89cP9qqwoNOuBdfdmj9%2BScq2V7T%2Bp1V%2BQg5fCwD6vFOCCucvl%2F%2FCqj%2BoSUcN3844NfnNS6%2FwsHB7FXdpGy%2F3PCYcHQldqWE%2B1xpN0GmrO2g5WJqZO87171isLKAk3x9ptQy6RoJVmK0ABobAlQ7r5s7iLdo37yI5TdJLMO%2Bdz8EGOqUB30Dr3BBVd5JqqBEF29z%2BeIuspO%2FgQmu22WYdibqwOc3w3H10TFqPgh%2BOmAAq9cdwOsZxPxkKuDf%2BFckzSmBYtXQaz0%2FgiYTaZcra%2Fj7sFupVWfqQ5S5J%2BEJtn0ULxzQ0GuchcnTX4BuPpziUBTCaKze8IFvk57ofUywkkStsNPhRY4VR3QnOWglsCXpOXAIyNys18mrfX9e3XL3X%2B8taQZE5hxJe&X-Amz-Signature=9a9c89d92b2ae20c2da0c07371d5a651e0a1352a7618f07fc54b9cd1dbc94df5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
