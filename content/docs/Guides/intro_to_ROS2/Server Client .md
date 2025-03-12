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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ALAOW2W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE3rKF8JKsjsx%2BnPgDa1xyhKig7ciRaT50AxaePFQ%2BSCAiAu%2B18oh%2Bw8oX2t3dWH%2BBeci6TxznsQjWK2GJYeV94PziqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DL232JOrGI9WYQrKtwDOQ0OB4%2FfGnbMg4WoXx4eqAuBU%2FwLiIqta93ew46Q0VYi4iMHq2GeZ7nQmqy8Ut1Z%2BiTOv20Tdz7CkCh27WUzRx3h3p%2FzFld9jHuCA7Bk1I%2BbQOcp1pWPO0JWcrKmrB1ahIJW9m1E2lJzlgQRtaWrj7GBZswnTmMhsbfhJmwT1AvlF6GGv1%2Bab%2BKkLf9YPGOtQbBNTZJ8zCo0NyOmUlrfiTlElHai2PiJnekiPGMUJ20wLLaStTqscD9fcmBRQytEuAz619oWUBVGp%2BavbOIaPosTz8%2BX35Mfq20LZ%2FC6BzKEt4HknUk7aVMsWVDbo%2B47Uqi%2BoSvdrsSeFycv2wqp3WvjjZL1qwheNgv%2FOxprJ3wXFg2X22UQsT7jCEnxDGNQZtO2Tkp3aCh7xq%2B1JtwZyPMvUs5xFtO7sn5N8SxcvgD%2BSGyl6xI4Q5HFscfbM74ODNvtJp%2BY7nseUqWuRhqJMdXRcljxXkNouF2J5kIiTly%2B%2BVVoMJnVwl95JQn1K3eagdcZp09arbEaK6ZBoWShbHtxlO%2Bej01y7vF8jDAYg%2FHdTxnPPjXZviKgZ2XxDvVCyRubeq6H3MxuKihtz9sVJ7mpFlmystvrkfhYmCfpGGGf5ejxU5X9h%2Fx8cKAwsp%2FGvgY6pgHJgiGTuU0z32Oe%2FL5ik1f7DxzzCECLGpsRUoP%2Bkv%2BN1RCuWCycYidH7RpGiJvakWJV13NQYb4%2FFZF%2B8ttTLY%2Br1QwHB14JPA3YAQvuycEsMq45U2UghiWDxelmlLfslRca5IDJrj1FriSw%2Fw1yHTds14CPQy8hYc5moaj73wr5%2F2MrpJn2Xr403LQZCXA6fgduhuu%2FISXdBZJGYkh%2FSHOpD9oE3Vy8&X-Amz-Signature=3586c9b8d0002a2d8851a20126a31b2148e533d6ac489374996c5c9638998ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ALAOW2W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE3rKF8JKsjsx%2BnPgDa1xyhKig7ciRaT50AxaePFQ%2BSCAiAu%2B18oh%2Bw8oX2t3dWH%2BBeci6TxznsQjWK2GJYeV94PziqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DL232JOrGI9WYQrKtwDOQ0OB4%2FfGnbMg4WoXx4eqAuBU%2FwLiIqta93ew46Q0VYi4iMHq2GeZ7nQmqy8Ut1Z%2BiTOv20Tdz7CkCh27WUzRx3h3p%2FzFld9jHuCA7Bk1I%2BbQOcp1pWPO0JWcrKmrB1ahIJW9m1E2lJzlgQRtaWrj7GBZswnTmMhsbfhJmwT1AvlF6GGv1%2Bab%2BKkLf9YPGOtQbBNTZJ8zCo0NyOmUlrfiTlElHai2PiJnekiPGMUJ20wLLaStTqscD9fcmBRQytEuAz619oWUBVGp%2BavbOIaPosTz8%2BX35Mfq20LZ%2FC6BzKEt4HknUk7aVMsWVDbo%2B47Uqi%2BoSvdrsSeFycv2wqp3WvjjZL1qwheNgv%2FOxprJ3wXFg2X22UQsT7jCEnxDGNQZtO2Tkp3aCh7xq%2B1JtwZyPMvUs5xFtO7sn5N8SxcvgD%2BSGyl6xI4Q5HFscfbM74ODNvtJp%2BY7nseUqWuRhqJMdXRcljxXkNouF2J5kIiTly%2B%2BVVoMJnVwl95JQn1K3eagdcZp09arbEaK6ZBoWShbHtxlO%2Bej01y7vF8jDAYg%2FHdTxnPPjXZviKgZ2XxDvVCyRubeq6H3MxuKihtz9sVJ7mpFlmystvrkfhYmCfpGGGf5ejxU5X9h%2Fx8cKAwsp%2FGvgY6pgHJgiGTuU0z32Oe%2FL5ik1f7DxzzCECLGpsRUoP%2Bkv%2BN1RCuWCycYidH7RpGiJvakWJV13NQYb4%2FFZF%2B8ttTLY%2Br1QwHB14JPA3YAQvuycEsMq45U2UghiWDxelmlLfslRca5IDJrj1FriSw%2Fw1yHTds14CPQy8hYc5moaj73wr5%2F2MrpJn2Xr403LQZCXA6fgduhuu%2FISXdBZJGYkh%2FSHOpD9oE3Vy8&X-Amz-Signature=8c1914337026a220e592745d281236dbcf1fededdcf8e4b0ed5d164b6523d4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ALAOW2W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE3rKF8JKsjsx%2BnPgDa1xyhKig7ciRaT50AxaePFQ%2BSCAiAu%2B18oh%2Bw8oX2t3dWH%2BBeci6TxznsQjWK2GJYeV94PziqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DL232JOrGI9WYQrKtwDOQ0OB4%2FfGnbMg4WoXx4eqAuBU%2FwLiIqta93ew46Q0VYi4iMHq2GeZ7nQmqy8Ut1Z%2BiTOv20Tdz7CkCh27WUzRx3h3p%2FzFld9jHuCA7Bk1I%2BbQOcp1pWPO0JWcrKmrB1ahIJW9m1E2lJzlgQRtaWrj7GBZswnTmMhsbfhJmwT1AvlF6GGv1%2Bab%2BKkLf9YPGOtQbBNTZJ8zCo0NyOmUlrfiTlElHai2PiJnekiPGMUJ20wLLaStTqscD9fcmBRQytEuAz619oWUBVGp%2BavbOIaPosTz8%2BX35Mfq20LZ%2FC6BzKEt4HknUk7aVMsWVDbo%2B47Uqi%2BoSvdrsSeFycv2wqp3WvjjZL1qwheNgv%2FOxprJ3wXFg2X22UQsT7jCEnxDGNQZtO2Tkp3aCh7xq%2B1JtwZyPMvUs5xFtO7sn5N8SxcvgD%2BSGyl6xI4Q5HFscfbM74ODNvtJp%2BY7nseUqWuRhqJMdXRcljxXkNouF2J5kIiTly%2B%2BVVoMJnVwl95JQn1K3eagdcZp09arbEaK6ZBoWShbHtxlO%2Bej01y7vF8jDAYg%2FHdTxnPPjXZviKgZ2XxDvVCyRubeq6H3MxuKihtz9sVJ7mpFlmystvrkfhYmCfpGGGf5ejxU5X9h%2Fx8cKAwsp%2FGvgY6pgHJgiGTuU0z32Oe%2FL5ik1f7DxzzCECLGpsRUoP%2Bkv%2BN1RCuWCycYidH7RpGiJvakWJV13NQYb4%2FFZF%2B8ttTLY%2Br1QwHB14JPA3YAQvuycEsMq45U2UghiWDxelmlLfslRca5IDJrj1FriSw%2Fw1yHTds14CPQy8hYc5moaj73wr5%2F2MrpJn2Xr403LQZCXA6fgduhuu%2FISXdBZJGYkh%2FSHOpD9oE3Vy8&X-Amz-Signature=70e744715337fe26a75d89e56d7d553bf03ebbb29da701f1ae2e3355f9426b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ALAOW2W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE3rKF8JKsjsx%2BnPgDa1xyhKig7ciRaT50AxaePFQ%2BSCAiAu%2B18oh%2Bw8oX2t3dWH%2BBeci6TxznsQjWK2GJYeV94PziqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DL232JOrGI9WYQrKtwDOQ0OB4%2FfGnbMg4WoXx4eqAuBU%2FwLiIqta93ew46Q0VYi4iMHq2GeZ7nQmqy8Ut1Z%2BiTOv20Tdz7CkCh27WUzRx3h3p%2FzFld9jHuCA7Bk1I%2BbQOcp1pWPO0JWcrKmrB1ahIJW9m1E2lJzlgQRtaWrj7GBZswnTmMhsbfhJmwT1AvlF6GGv1%2Bab%2BKkLf9YPGOtQbBNTZJ8zCo0NyOmUlrfiTlElHai2PiJnekiPGMUJ20wLLaStTqscD9fcmBRQytEuAz619oWUBVGp%2BavbOIaPosTz8%2BX35Mfq20LZ%2FC6BzKEt4HknUk7aVMsWVDbo%2B47Uqi%2BoSvdrsSeFycv2wqp3WvjjZL1qwheNgv%2FOxprJ3wXFg2X22UQsT7jCEnxDGNQZtO2Tkp3aCh7xq%2B1JtwZyPMvUs5xFtO7sn5N8SxcvgD%2BSGyl6xI4Q5HFscfbM74ODNvtJp%2BY7nseUqWuRhqJMdXRcljxXkNouF2J5kIiTly%2B%2BVVoMJnVwl95JQn1K3eagdcZp09arbEaK6ZBoWShbHtxlO%2Bej01y7vF8jDAYg%2FHdTxnPPjXZviKgZ2XxDvVCyRubeq6H3MxuKihtz9sVJ7mpFlmystvrkfhYmCfpGGGf5ejxU5X9h%2Fx8cKAwsp%2FGvgY6pgHJgiGTuU0z32Oe%2FL5ik1f7DxzzCECLGpsRUoP%2Bkv%2BN1RCuWCycYidH7RpGiJvakWJV13NQYb4%2FFZF%2B8ttTLY%2Br1QwHB14JPA3YAQvuycEsMq45U2UghiWDxelmlLfslRca5IDJrj1FriSw%2Fw1yHTds14CPQy8hYc5moaj73wr5%2F2MrpJn2Xr403LQZCXA6fgduhuu%2FISXdBZJGYkh%2FSHOpD9oE3Vy8&X-Amz-Signature=a507e161ad583d29ffb973609b01fec07699c3c6f097469ba7db17394b7d69ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ALAOW2W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE3rKF8JKsjsx%2BnPgDa1xyhKig7ciRaT50AxaePFQ%2BSCAiAu%2B18oh%2Bw8oX2t3dWH%2BBeci6TxznsQjWK2GJYeV94PziqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DL232JOrGI9WYQrKtwDOQ0OB4%2FfGnbMg4WoXx4eqAuBU%2FwLiIqta93ew46Q0VYi4iMHq2GeZ7nQmqy8Ut1Z%2BiTOv20Tdz7CkCh27WUzRx3h3p%2FzFld9jHuCA7Bk1I%2BbQOcp1pWPO0JWcrKmrB1ahIJW9m1E2lJzlgQRtaWrj7GBZswnTmMhsbfhJmwT1AvlF6GGv1%2Bab%2BKkLf9YPGOtQbBNTZJ8zCo0NyOmUlrfiTlElHai2PiJnekiPGMUJ20wLLaStTqscD9fcmBRQytEuAz619oWUBVGp%2BavbOIaPosTz8%2BX35Mfq20LZ%2FC6BzKEt4HknUk7aVMsWVDbo%2B47Uqi%2BoSvdrsSeFycv2wqp3WvjjZL1qwheNgv%2FOxprJ3wXFg2X22UQsT7jCEnxDGNQZtO2Tkp3aCh7xq%2B1JtwZyPMvUs5xFtO7sn5N8SxcvgD%2BSGyl6xI4Q5HFscfbM74ODNvtJp%2BY7nseUqWuRhqJMdXRcljxXkNouF2J5kIiTly%2B%2BVVoMJnVwl95JQn1K3eagdcZp09arbEaK6ZBoWShbHtxlO%2Bej01y7vF8jDAYg%2FHdTxnPPjXZviKgZ2XxDvVCyRubeq6H3MxuKihtz9sVJ7mpFlmystvrkfhYmCfpGGGf5ejxU5X9h%2Fx8cKAwsp%2FGvgY6pgHJgiGTuU0z32Oe%2FL5ik1f7DxzzCECLGpsRUoP%2Bkv%2BN1RCuWCycYidH7RpGiJvakWJV13NQYb4%2FFZF%2B8ttTLY%2Br1QwHB14JPA3YAQvuycEsMq45U2UghiWDxelmlLfslRca5IDJrj1FriSw%2Fw1yHTds14CPQy8hYc5moaj73wr5%2F2MrpJn2Xr403LQZCXA6fgduhuu%2FISXdBZJGYkh%2FSHOpD9oE3Vy8&X-Amz-Signature=331d4ccdff9e2fed877bbf371300eec9816c3aad05f64f9a95286c99fc19c7c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
