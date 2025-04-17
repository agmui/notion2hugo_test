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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAURK5B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEccdd9z4PUjz9l9ViW4FV8Wsa8vjx3BDmVxnZHDpJhGAiEA7yZd7GF%2Bq%2FLbfxQVilmUCW5Bao3h%2F82%2Bdjlp654Lop8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFlftOXDm5%2FKYOESzCrcA8d43bz67J3wltVxAhk6KHH4SGEu46nHUTU48yg0uxp5Y1ZbVhg3uVoFYcLJpEbvv%2BXDDZE57QqYvnprk9JJy6wCaweRlashCzQqCfKGK9%2B20Cn1noxx1CA9LNwAgnpqCyyVGYF3zc0iZzX5LR0lyAqpsw3ZymB1rCJzbk2PiNDcDql1EqrWMwa2D9vnE1geoZU3nl8y4lUTLXbL3kQNxnuQn%2Fbj0S%2Bw1jLm%2B4eyxQueu3lQTuRS8cB9%2B7Nk0Q%2FsiQSn2Zza2HdVZ%2BtVR4NMqOaPkLl%2FNybTgmja7N0ySg%2FrN8He8QskjSULP53lktNbKegiFQpRQIYmoRFMrMckOdiwyBnDZSQy%2FB8jN97KLvxzmzympN4IpSvWlmii2mz3xOkQe1FBqDlKjIoGwU5Ii6Q5g510PX8fVpRnqfRQGXYHwHMhMOk4%2BbKBE3Bnv9iCmANA40ZZk56RBDCX3iSc%2FeTDDYm%2FyRC%2BawhQzcvbUj9bB74wmXmUoOANWI7PDA%2FqH%2FJ9j1kjMV0acCrTrMbPkhyuvR5Hhmbf96%2FfvLbPK%2BxGU8qc0BWytJIgXp4ABVszCbibYxxWwk2b4bVbHkxqAEqWEITphtRG87qoRhmdtPH2VPJxWVYAwH0A%2B4bpMJn7gsAGOqUBcloV23d4Yi8b4Sv17isb5TceCqc7KIU%2BRs5D6ItWzWUnDl04w1DSSlO8NkJ0k1ePP9BnqWdaOKoMTXV3mxo%2BRgLRXO4Yuf6zzwbjnF3QmWx3BJjlpyNSlLsERO%2BU%2FhSsfJLPC27WoffEC5T%2FGl6VzUPJbR%2BEKxTMm0nrkHCXv6e5W1t9Uh5AjRn9pgTpZc9gy5tbrehOMQXNmmiddqy3lDjsYuo6&X-Amz-Signature=29f906d66adf2733c4248dcaf32711129cb7461dad1d5a46759c592909f15bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAURK5B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEccdd9z4PUjz9l9ViW4FV8Wsa8vjx3BDmVxnZHDpJhGAiEA7yZd7GF%2Bq%2FLbfxQVilmUCW5Bao3h%2F82%2Bdjlp654Lop8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFlftOXDm5%2FKYOESzCrcA8d43bz67J3wltVxAhk6KHH4SGEu46nHUTU48yg0uxp5Y1ZbVhg3uVoFYcLJpEbvv%2BXDDZE57QqYvnprk9JJy6wCaweRlashCzQqCfKGK9%2B20Cn1noxx1CA9LNwAgnpqCyyVGYF3zc0iZzX5LR0lyAqpsw3ZymB1rCJzbk2PiNDcDql1EqrWMwa2D9vnE1geoZU3nl8y4lUTLXbL3kQNxnuQn%2Fbj0S%2Bw1jLm%2B4eyxQueu3lQTuRS8cB9%2B7Nk0Q%2FsiQSn2Zza2HdVZ%2BtVR4NMqOaPkLl%2FNybTgmja7N0ySg%2FrN8He8QskjSULP53lktNbKegiFQpRQIYmoRFMrMckOdiwyBnDZSQy%2FB8jN97KLvxzmzympN4IpSvWlmii2mz3xOkQe1FBqDlKjIoGwU5Ii6Q5g510PX8fVpRnqfRQGXYHwHMhMOk4%2BbKBE3Bnv9iCmANA40ZZk56RBDCX3iSc%2FeTDDYm%2FyRC%2BawhQzcvbUj9bB74wmXmUoOANWI7PDA%2FqH%2FJ9j1kjMV0acCrTrMbPkhyuvR5Hhmbf96%2FfvLbPK%2BxGU8qc0BWytJIgXp4ABVszCbibYxxWwk2b4bVbHkxqAEqWEITphtRG87qoRhmdtPH2VPJxWVYAwH0A%2B4bpMJn7gsAGOqUBcloV23d4Yi8b4Sv17isb5TceCqc7KIU%2BRs5D6ItWzWUnDl04w1DSSlO8NkJ0k1ePP9BnqWdaOKoMTXV3mxo%2BRgLRXO4Yuf6zzwbjnF3QmWx3BJjlpyNSlLsERO%2BU%2FhSsfJLPC27WoffEC5T%2FGl6VzUPJbR%2BEKxTMm0nrkHCXv6e5W1t9Uh5AjRn9pgTpZc9gy5tbrehOMQXNmmiddqy3lDjsYuo6&X-Amz-Signature=813420a590e621e5451220ad1b3ef72ef2a42ca34b5f797e68d9bd0fb4c75b64&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAURK5B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEccdd9z4PUjz9l9ViW4FV8Wsa8vjx3BDmVxnZHDpJhGAiEA7yZd7GF%2Bq%2FLbfxQVilmUCW5Bao3h%2F82%2Bdjlp654Lop8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFlftOXDm5%2FKYOESzCrcA8d43bz67J3wltVxAhk6KHH4SGEu46nHUTU48yg0uxp5Y1ZbVhg3uVoFYcLJpEbvv%2BXDDZE57QqYvnprk9JJy6wCaweRlashCzQqCfKGK9%2B20Cn1noxx1CA9LNwAgnpqCyyVGYF3zc0iZzX5LR0lyAqpsw3ZymB1rCJzbk2PiNDcDql1EqrWMwa2D9vnE1geoZU3nl8y4lUTLXbL3kQNxnuQn%2Fbj0S%2Bw1jLm%2B4eyxQueu3lQTuRS8cB9%2B7Nk0Q%2FsiQSn2Zza2HdVZ%2BtVR4NMqOaPkLl%2FNybTgmja7N0ySg%2FrN8He8QskjSULP53lktNbKegiFQpRQIYmoRFMrMckOdiwyBnDZSQy%2FB8jN97KLvxzmzympN4IpSvWlmii2mz3xOkQe1FBqDlKjIoGwU5Ii6Q5g510PX8fVpRnqfRQGXYHwHMhMOk4%2BbKBE3Bnv9iCmANA40ZZk56RBDCX3iSc%2FeTDDYm%2FyRC%2BawhQzcvbUj9bB74wmXmUoOANWI7PDA%2FqH%2FJ9j1kjMV0acCrTrMbPkhyuvR5Hhmbf96%2FfvLbPK%2BxGU8qc0BWytJIgXp4ABVszCbibYxxWwk2b4bVbHkxqAEqWEITphtRG87qoRhmdtPH2VPJxWVYAwH0A%2B4bpMJn7gsAGOqUBcloV23d4Yi8b4Sv17isb5TceCqc7KIU%2BRs5D6ItWzWUnDl04w1DSSlO8NkJ0k1ePP9BnqWdaOKoMTXV3mxo%2BRgLRXO4Yuf6zzwbjnF3QmWx3BJjlpyNSlLsERO%2BU%2FhSsfJLPC27WoffEC5T%2FGl6VzUPJbR%2BEKxTMm0nrkHCXv6e5W1t9Uh5AjRn9pgTpZc9gy5tbrehOMQXNmmiddqy3lDjsYuo6&X-Amz-Signature=2abedae473c26d4a1381988d4d5a7fd1ebc091ad938ea7c2950e357f7edd1568&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAURK5B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEccdd9z4PUjz9l9ViW4FV8Wsa8vjx3BDmVxnZHDpJhGAiEA7yZd7GF%2Bq%2FLbfxQVilmUCW5Bao3h%2F82%2Bdjlp654Lop8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFlftOXDm5%2FKYOESzCrcA8d43bz67J3wltVxAhk6KHH4SGEu46nHUTU48yg0uxp5Y1ZbVhg3uVoFYcLJpEbvv%2BXDDZE57QqYvnprk9JJy6wCaweRlashCzQqCfKGK9%2B20Cn1noxx1CA9LNwAgnpqCyyVGYF3zc0iZzX5LR0lyAqpsw3ZymB1rCJzbk2PiNDcDql1EqrWMwa2D9vnE1geoZU3nl8y4lUTLXbL3kQNxnuQn%2Fbj0S%2Bw1jLm%2B4eyxQueu3lQTuRS8cB9%2B7Nk0Q%2FsiQSn2Zza2HdVZ%2BtVR4NMqOaPkLl%2FNybTgmja7N0ySg%2FrN8He8QskjSULP53lktNbKegiFQpRQIYmoRFMrMckOdiwyBnDZSQy%2FB8jN97KLvxzmzympN4IpSvWlmii2mz3xOkQe1FBqDlKjIoGwU5Ii6Q5g510PX8fVpRnqfRQGXYHwHMhMOk4%2BbKBE3Bnv9iCmANA40ZZk56RBDCX3iSc%2FeTDDYm%2FyRC%2BawhQzcvbUj9bB74wmXmUoOANWI7PDA%2FqH%2FJ9j1kjMV0acCrTrMbPkhyuvR5Hhmbf96%2FfvLbPK%2BxGU8qc0BWytJIgXp4ABVszCbibYxxWwk2b4bVbHkxqAEqWEITphtRG87qoRhmdtPH2VPJxWVYAwH0A%2B4bpMJn7gsAGOqUBcloV23d4Yi8b4Sv17isb5TceCqc7KIU%2BRs5D6ItWzWUnDl04w1DSSlO8NkJ0k1ePP9BnqWdaOKoMTXV3mxo%2BRgLRXO4Yuf6zzwbjnF3QmWx3BJjlpyNSlLsERO%2BU%2FhSsfJLPC27WoffEC5T%2FGl6VzUPJbR%2BEKxTMm0nrkHCXv6e5W1t9Uh5AjRn9pgTpZc9gy5tbrehOMQXNmmiddqy3lDjsYuo6&X-Amz-Signature=562e7c1b6bc71845b62a2f676d4ce7263e4740bd44beb391e7ff561162435491&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAURK5B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEccdd9z4PUjz9l9ViW4FV8Wsa8vjx3BDmVxnZHDpJhGAiEA7yZd7GF%2Bq%2FLbfxQVilmUCW5Bao3h%2F82%2Bdjlp654Lop8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFlftOXDm5%2FKYOESzCrcA8d43bz67J3wltVxAhk6KHH4SGEu46nHUTU48yg0uxp5Y1ZbVhg3uVoFYcLJpEbvv%2BXDDZE57QqYvnprk9JJy6wCaweRlashCzQqCfKGK9%2B20Cn1noxx1CA9LNwAgnpqCyyVGYF3zc0iZzX5LR0lyAqpsw3ZymB1rCJzbk2PiNDcDql1EqrWMwa2D9vnE1geoZU3nl8y4lUTLXbL3kQNxnuQn%2Fbj0S%2Bw1jLm%2B4eyxQueu3lQTuRS8cB9%2B7Nk0Q%2FsiQSn2Zza2HdVZ%2BtVR4NMqOaPkLl%2FNybTgmja7N0ySg%2FrN8He8QskjSULP53lktNbKegiFQpRQIYmoRFMrMckOdiwyBnDZSQy%2FB8jN97KLvxzmzympN4IpSvWlmii2mz3xOkQe1FBqDlKjIoGwU5Ii6Q5g510PX8fVpRnqfRQGXYHwHMhMOk4%2BbKBE3Bnv9iCmANA40ZZk56RBDCX3iSc%2FeTDDYm%2FyRC%2BawhQzcvbUj9bB74wmXmUoOANWI7PDA%2FqH%2FJ9j1kjMV0acCrTrMbPkhyuvR5Hhmbf96%2FfvLbPK%2BxGU8qc0BWytJIgXp4ABVszCbibYxxWwk2b4bVbHkxqAEqWEITphtRG87qoRhmdtPH2VPJxWVYAwH0A%2B4bpMJn7gsAGOqUBcloV23d4Yi8b4Sv17isb5TceCqc7KIU%2BRs5D6ItWzWUnDl04w1DSSlO8NkJ0k1ePP9BnqWdaOKoMTXV3mxo%2BRgLRXO4Yuf6zzwbjnF3QmWx3BJjlpyNSlLsERO%2BU%2FhSsfJLPC27WoffEC5T%2FGl6VzUPJbR%2BEKxTMm0nrkHCXv6e5W1t9Uh5AjRn9pgTpZc9gy5tbrehOMQXNmmiddqy3lDjsYuo6&X-Amz-Signature=33a986b551f91cd787d5353637914890d332e456a8ce7121a1242f4ec118e113&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
