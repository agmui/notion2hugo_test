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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLAHD3J%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC2Tu3jbI0bUZQc0qi9ihAc0hAwMMntlVVt3UyB22zCcwIgYSMjkCzuFAKD3AvNUKVzHYltPVnS2Gt0c1h%2Brb1%2FsoMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0hLk5Em4UcFFP%2FNSrcAxGs0SxRtL1Ro7Lo23Lc9w7havrkhljsL6gExrGimpXgSL1yNSV4oZeXp8ur6V5detYRihaqPFuYcaFrzbkDKjFdjejmNTCQ7MhPcIqExrEHG5HVD%2FTZI1Nc61L88odaiezipzvKNEtpJEAgygg8taGElFwF%2FKzae39%2B7wRXJHItrtwS311ep5C8NXQKnfZuN7pDMbNrhA7MPqtD%2F8ypJRk04LNsqypPeB6URTPBSwqodhiUwThYlWH8NBUxEzxHbxAee2g9SJvdshiirMeikot2wG7y1T8kcZ%2FLKNEQBh06o5Jz0AF%2FmKs8HhKHTUCBIbG%2Fs40qCYOtSMDtSq6g2IBMR3UJy7Aj6MHreiRTLHQX4Jwo1ObiAymaF49d7itpQjdIboZ%2BU5R5ut1UVpQtQp7smhtyVmdYBdqjNl%2FNMGdftSne3q5PFf7fqHCy4GG%2B1fVJjgVOaq4Gu4aNsY9OKJW0P0GfcHFSBZCeeMPn%2Baqut9t0ayc83hyddiPMLbBCw2wEtdehILB076LD%2Bo05QzlYfe3Q6tvuh063vYQOhP4T5WRapHnFf%2FeJ%2FBaHNObSGb9b7FrEdfE9ta68MKV%2BLeet3i%2FIC78bzlrAhK3VP3gE3EccnmiAtXyjOghBMIqc5L8GOqUBWDbKwx0chqn2nm0K0XZYBNjDsZsC9wU4y8dSHTE6tyrQMMAmIJxmvKvUm2P31G%2BNgvpJ9ogwSJEj1k59NtE0nblTZMKU4Um8Nm1GPYObMSJjCQ4HY8%2FMnLYsv7wIsd%2FT65A4HPnfbV7NZUCj%2Fw%2FlaMkci9oGtHNyG50iF4b92rHcuwZZ2G1892yCrVP0ggE1Kaz9vRPQllPs6RWl5pw20Jts4R3Y&X-Amz-Signature=55eb0749c5cfcdbc5f68b14cd03080bcde0f0453618e3b873f71887d761f8aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLAHD3J%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC2Tu3jbI0bUZQc0qi9ihAc0hAwMMntlVVt3UyB22zCcwIgYSMjkCzuFAKD3AvNUKVzHYltPVnS2Gt0c1h%2Brb1%2FsoMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0hLk5Em4UcFFP%2FNSrcAxGs0SxRtL1Ro7Lo23Lc9w7havrkhljsL6gExrGimpXgSL1yNSV4oZeXp8ur6V5detYRihaqPFuYcaFrzbkDKjFdjejmNTCQ7MhPcIqExrEHG5HVD%2FTZI1Nc61L88odaiezipzvKNEtpJEAgygg8taGElFwF%2FKzae39%2B7wRXJHItrtwS311ep5C8NXQKnfZuN7pDMbNrhA7MPqtD%2F8ypJRk04LNsqypPeB6URTPBSwqodhiUwThYlWH8NBUxEzxHbxAee2g9SJvdshiirMeikot2wG7y1T8kcZ%2FLKNEQBh06o5Jz0AF%2FmKs8HhKHTUCBIbG%2Fs40qCYOtSMDtSq6g2IBMR3UJy7Aj6MHreiRTLHQX4Jwo1ObiAymaF49d7itpQjdIboZ%2BU5R5ut1UVpQtQp7smhtyVmdYBdqjNl%2FNMGdftSne3q5PFf7fqHCy4GG%2B1fVJjgVOaq4Gu4aNsY9OKJW0P0GfcHFSBZCeeMPn%2Baqut9t0ayc83hyddiPMLbBCw2wEtdehILB076LD%2Bo05QzlYfe3Q6tvuh063vYQOhP4T5WRapHnFf%2FeJ%2FBaHNObSGb9b7FrEdfE9ta68MKV%2BLeet3i%2FIC78bzlrAhK3VP3gE3EccnmiAtXyjOghBMIqc5L8GOqUBWDbKwx0chqn2nm0K0XZYBNjDsZsC9wU4y8dSHTE6tyrQMMAmIJxmvKvUm2P31G%2BNgvpJ9ogwSJEj1k59NtE0nblTZMKU4Um8Nm1GPYObMSJjCQ4HY8%2FMnLYsv7wIsd%2FT65A4HPnfbV7NZUCj%2Fw%2FlaMkci9oGtHNyG50iF4b92rHcuwZZ2G1892yCrVP0ggE1Kaz9vRPQllPs6RWl5pw20Jts4R3Y&X-Amz-Signature=9865f4abab22b99041f424bbd9a6e34bb2c13a93b5848e3f7878b00ce9114d83&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLAHD3J%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC2Tu3jbI0bUZQc0qi9ihAc0hAwMMntlVVt3UyB22zCcwIgYSMjkCzuFAKD3AvNUKVzHYltPVnS2Gt0c1h%2Brb1%2FsoMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0hLk5Em4UcFFP%2FNSrcAxGs0SxRtL1Ro7Lo23Lc9w7havrkhljsL6gExrGimpXgSL1yNSV4oZeXp8ur6V5detYRihaqPFuYcaFrzbkDKjFdjejmNTCQ7MhPcIqExrEHG5HVD%2FTZI1Nc61L88odaiezipzvKNEtpJEAgygg8taGElFwF%2FKzae39%2B7wRXJHItrtwS311ep5C8NXQKnfZuN7pDMbNrhA7MPqtD%2F8ypJRk04LNsqypPeB6URTPBSwqodhiUwThYlWH8NBUxEzxHbxAee2g9SJvdshiirMeikot2wG7y1T8kcZ%2FLKNEQBh06o5Jz0AF%2FmKs8HhKHTUCBIbG%2Fs40qCYOtSMDtSq6g2IBMR3UJy7Aj6MHreiRTLHQX4Jwo1ObiAymaF49d7itpQjdIboZ%2BU5R5ut1UVpQtQp7smhtyVmdYBdqjNl%2FNMGdftSne3q5PFf7fqHCy4GG%2B1fVJjgVOaq4Gu4aNsY9OKJW0P0GfcHFSBZCeeMPn%2Baqut9t0ayc83hyddiPMLbBCw2wEtdehILB076LD%2Bo05QzlYfe3Q6tvuh063vYQOhP4T5WRapHnFf%2FeJ%2FBaHNObSGb9b7FrEdfE9ta68MKV%2BLeet3i%2FIC78bzlrAhK3VP3gE3EccnmiAtXyjOghBMIqc5L8GOqUBWDbKwx0chqn2nm0K0XZYBNjDsZsC9wU4y8dSHTE6tyrQMMAmIJxmvKvUm2P31G%2BNgvpJ9ogwSJEj1k59NtE0nblTZMKU4Um8Nm1GPYObMSJjCQ4HY8%2FMnLYsv7wIsd%2FT65A4HPnfbV7NZUCj%2Fw%2FlaMkci9oGtHNyG50iF4b92rHcuwZZ2G1892yCrVP0ggE1Kaz9vRPQllPs6RWl5pw20Jts4R3Y&X-Amz-Signature=278c10497351427e62708d3fa80ffe9c35f7ec6f9014ee93e1daf5ceb8d6648b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLAHD3J%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC2Tu3jbI0bUZQc0qi9ihAc0hAwMMntlVVt3UyB22zCcwIgYSMjkCzuFAKD3AvNUKVzHYltPVnS2Gt0c1h%2Brb1%2FsoMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0hLk5Em4UcFFP%2FNSrcAxGs0SxRtL1Ro7Lo23Lc9w7havrkhljsL6gExrGimpXgSL1yNSV4oZeXp8ur6V5detYRihaqPFuYcaFrzbkDKjFdjejmNTCQ7MhPcIqExrEHG5HVD%2FTZI1Nc61L88odaiezipzvKNEtpJEAgygg8taGElFwF%2FKzae39%2B7wRXJHItrtwS311ep5C8NXQKnfZuN7pDMbNrhA7MPqtD%2F8ypJRk04LNsqypPeB6URTPBSwqodhiUwThYlWH8NBUxEzxHbxAee2g9SJvdshiirMeikot2wG7y1T8kcZ%2FLKNEQBh06o5Jz0AF%2FmKs8HhKHTUCBIbG%2Fs40qCYOtSMDtSq6g2IBMR3UJy7Aj6MHreiRTLHQX4Jwo1ObiAymaF49d7itpQjdIboZ%2BU5R5ut1UVpQtQp7smhtyVmdYBdqjNl%2FNMGdftSne3q5PFf7fqHCy4GG%2B1fVJjgVOaq4Gu4aNsY9OKJW0P0GfcHFSBZCeeMPn%2Baqut9t0ayc83hyddiPMLbBCw2wEtdehILB076LD%2Bo05QzlYfe3Q6tvuh063vYQOhP4T5WRapHnFf%2FeJ%2FBaHNObSGb9b7FrEdfE9ta68MKV%2BLeet3i%2FIC78bzlrAhK3VP3gE3EccnmiAtXyjOghBMIqc5L8GOqUBWDbKwx0chqn2nm0K0XZYBNjDsZsC9wU4y8dSHTE6tyrQMMAmIJxmvKvUm2P31G%2BNgvpJ9ogwSJEj1k59NtE0nblTZMKU4Um8Nm1GPYObMSJjCQ4HY8%2FMnLYsv7wIsd%2FT65A4HPnfbV7NZUCj%2Fw%2FlaMkci9oGtHNyG50iF4b92rHcuwZZ2G1892yCrVP0ggE1Kaz9vRPQllPs6RWl5pw20Jts4R3Y&X-Amz-Signature=3fbff0b4a5861cdc9d4a761c615934510281c65b36b41a69093c52afa7c1280b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLAHD3J%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC2Tu3jbI0bUZQc0qi9ihAc0hAwMMntlVVt3UyB22zCcwIgYSMjkCzuFAKD3AvNUKVzHYltPVnS2Gt0c1h%2Brb1%2FsoMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0hLk5Em4UcFFP%2FNSrcAxGs0SxRtL1Ro7Lo23Lc9w7havrkhljsL6gExrGimpXgSL1yNSV4oZeXp8ur6V5detYRihaqPFuYcaFrzbkDKjFdjejmNTCQ7MhPcIqExrEHG5HVD%2FTZI1Nc61L88odaiezipzvKNEtpJEAgygg8taGElFwF%2FKzae39%2B7wRXJHItrtwS311ep5C8NXQKnfZuN7pDMbNrhA7MPqtD%2F8ypJRk04LNsqypPeB6URTPBSwqodhiUwThYlWH8NBUxEzxHbxAee2g9SJvdshiirMeikot2wG7y1T8kcZ%2FLKNEQBh06o5Jz0AF%2FmKs8HhKHTUCBIbG%2Fs40qCYOtSMDtSq6g2IBMR3UJy7Aj6MHreiRTLHQX4Jwo1ObiAymaF49d7itpQjdIboZ%2BU5R5ut1UVpQtQp7smhtyVmdYBdqjNl%2FNMGdftSne3q5PFf7fqHCy4GG%2B1fVJjgVOaq4Gu4aNsY9OKJW0P0GfcHFSBZCeeMPn%2Baqut9t0ayc83hyddiPMLbBCw2wEtdehILB076LD%2Bo05QzlYfe3Q6tvuh063vYQOhP4T5WRapHnFf%2FeJ%2FBaHNObSGb9b7FrEdfE9ta68MKV%2BLeet3i%2FIC78bzlrAhK3VP3gE3EccnmiAtXyjOghBMIqc5L8GOqUBWDbKwx0chqn2nm0K0XZYBNjDsZsC9wU4y8dSHTE6tyrQMMAmIJxmvKvUm2P31G%2BNgvpJ9ogwSJEj1k59NtE0nblTZMKU4Um8Nm1GPYObMSJjCQ4HY8%2FMnLYsv7wIsd%2FT65A4HPnfbV7NZUCj%2Fw%2FlaMkci9oGtHNyG50iF4b92rHcuwZZ2G1892yCrVP0ggE1Kaz9vRPQllPs6RWl5pw20Jts4R3Y&X-Amz-Signature=4f428773bdee6bcb013f9d21893f6f8fbe1806a13ecae727a0ec2ae146180fca&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
