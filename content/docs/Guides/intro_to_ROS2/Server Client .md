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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAZE4XR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF52uXP4dOrifwwUrQM5EkdFQjusxtz2zlA8U4L1jArYAiEAz%2Bb6%2BxanYhwZtivtPGy3q4HVrtwY4qgswILR40j0Tssq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2IssSupB7gSuTBWCrcA9%2BakLO3Mmi02ArYI2b6sne7xqLfl%2F4mByrEgQOPeqMKz40qd7Pn9Dx46Qt4CNbU8UqD8NeAkqoiHmDTHw222TLekGv4dpCejRfVFRPJE3Zn7zJHpsTnyr3LBGeHcQMT6VPmLgN3LerbjuhBLQ0Uz20%2FdoBeQqNVAsCkSp06crcRYqKGLX%2BvMvTJMWwlLLmUk5CAUdgFT%2Flt%2BxgdUY6V%2Fw5nkSSXAgAlle%2FON0VvF2dRlF3bpj9CY1YulHLiT3dk1mC9zpDkCSqbhAzf3QJs1ZveeqlqagkSYmuFo%2BFsWMn3rT3CrKw6MKfK2DSJNzQkNZApwikMB7cge6SAZ3alINFQZiubOG%2FQ5ZFHtUuywkjNsqju22avIcMaF5X7WFPWkD6LTrZJGcoxC7nmLdr%2BO1UcIqnZyQtrpOu%2Bu0srV44sMhiD9NrFXot2Y9%2Fty3CdFmp2oipfF40c2XzRPNyckgDTC5gH5Olosoisc0Ra8h%2FPRNqWUV8bc4svBLEh%2BI4%2F1fnUfinlyPl6dfoxbBNdECe1jm5Ch0kepoJEJ8BKMFUx79YvgdQa0zXT5bGFtPtpyGeGzV%2BmBsaOJJ3AWCuFtoOpofgdCh7Pgsh4Ro2WRXr4Nt446IELTGCQInPmMO7Kyr0GOqUBfuS1MGQ1ohXxMcMJkzTwpeyP4hb3TlZQXSBlpEUrqujn9mY8uJWlfgPhWH34IxeZKNFUhfNpSiOwav%2FmlZcy0J4DPg0Z1XsSm4%2BoDfjcSyeR5AtH6iKp9Xp1Ubag3EsiyuHW67GzDaLHC%2BpXrzyWKw7acelLahc0sJIkteqS2wr56mB0kgsiB5uqyYM%2FJXQiOlhx3F4x%2FTyMceNuV746DQCQj19P&X-Amz-Signature=95a971fc6b33c786c01b59abcce545162a5129d49e20a5fad47477002f72f3d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAZE4XR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF52uXP4dOrifwwUrQM5EkdFQjusxtz2zlA8U4L1jArYAiEAz%2Bb6%2BxanYhwZtivtPGy3q4HVrtwY4qgswILR40j0Tssq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2IssSupB7gSuTBWCrcA9%2BakLO3Mmi02ArYI2b6sne7xqLfl%2F4mByrEgQOPeqMKz40qd7Pn9Dx46Qt4CNbU8UqD8NeAkqoiHmDTHw222TLekGv4dpCejRfVFRPJE3Zn7zJHpsTnyr3LBGeHcQMT6VPmLgN3LerbjuhBLQ0Uz20%2FdoBeQqNVAsCkSp06crcRYqKGLX%2BvMvTJMWwlLLmUk5CAUdgFT%2Flt%2BxgdUY6V%2Fw5nkSSXAgAlle%2FON0VvF2dRlF3bpj9CY1YulHLiT3dk1mC9zpDkCSqbhAzf3QJs1ZveeqlqagkSYmuFo%2BFsWMn3rT3CrKw6MKfK2DSJNzQkNZApwikMB7cge6SAZ3alINFQZiubOG%2FQ5ZFHtUuywkjNsqju22avIcMaF5X7WFPWkD6LTrZJGcoxC7nmLdr%2BO1UcIqnZyQtrpOu%2Bu0srV44sMhiD9NrFXot2Y9%2Fty3CdFmp2oipfF40c2XzRPNyckgDTC5gH5Olosoisc0Ra8h%2FPRNqWUV8bc4svBLEh%2BI4%2F1fnUfinlyPl6dfoxbBNdECe1jm5Ch0kepoJEJ8BKMFUx79YvgdQa0zXT5bGFtPtpyGeGzV%2BmBsaOJJ3AWCuFtoOpofgdCh7Pgsh4Ro2WRXr4Nt446IELTGCQInPmMO7Kyr0GOqUBfuS1MGQ1ohXxMcMJkzTwpeyP4hb3TlZQXSBlpEUrqujn9mY8uJWlfgPhWH34IxeZKNFUhfNpSiOwav%2FmlZcy0J4DPg0Z1XsSm4%2BoDfjcSyeR5AtH6iKp9Xp1Ubag3EsiyuHW67GzDaLHC%2BpXrzyWKw7acelLahc0sJIkteqS2wr56mB0kgsiB5uqyYM%2FJXQiOlhx3F4x%2FTyMceNuV746DQCQj19P&X-Amz-Signature=17c4c39a9f81df89f4f55969b9b2b22d2e3eb8ae6a18814ffe33e6d7cedac7f6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAZE4XR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF52uXP4dOrifwwUrQM5EkdFQjusxtz2zlA8U4L1jArYAiEAz%2Bb6%2BxanYhwZtivtPGy3q4HVrtwY4qgswILR40j0Tssq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2IssSupB7gSuTBWCrcA9%2BakLO3Mmi02ArYI2b6sne7xqLfl%2F4mByrEgQOPeqMKz40qd7Pn9Dx46Qt4CNbU8UqD8NeAkqoiHmDTHw222TLekGv4dpCejRfVFRPJE3Zn7zJHpsTnyr3LBGeHcQMT6VPmLgN3LerbjuhBLQ0Uz20%2FdoBeQqNVAsCkSp06crcRYqKGLX%2BvMvTJMWwlLLmUk5CAUdgFT%2Flt%2BxgdUY6V%2Fw5nkSSXAgAlle%2FON0VvF2dRlF3bpj9CY1YulHLiT3dk1mC9zpDkCSqbhAzf3QJs1ZveeqlqagkSYmuFo%2BFsWMn3rT3CrKw6MKfK2DSJNzQkNZApwikMB7cge6SAZ3alINFQZiubOG%2FQ5ZFHtUuywkjNsqju22avIcMaF5X7WFPWkD6LTrZJGcoxC7nmLdr%2BO1UcIqnZyQtrpOu%2Bu0srV44sMhiD9NrFXot2Y9%2Fty3CdFmp2oipfF40c2XzRPNyckgDTC5gH5Olosoisc0Ra8h%2FPRNqWUV8bc4svBLEh%2BI4%2F1fnUfinlyPl6dfoxbBNdECe1jm5Ch0kepoJEJ8BKMFUx79YvgdQa0zXT5bGFtPtpyGeGzV%2BmBsaOJJ3AWCuFtoOpofgdCh7Pgsh4Ro2WRXr4Nt446IELTGCQInPmMO7Kyr0GOqUBfuS1MGQ1ohXxMcMJkzTwpeyP4hb3TlZQXSBlpEUrqujn9mY8uJWlfgPhWH34IxeZKNFUhfNpSiOwav%2FmlZcy0J4DPg0Z1XsSm4%2BoDfjcSyeR5AtH6iKp9Xp1Ubag3EsiyuHW67GzDaLHC%2BpXrzyWKw7acelLahc0sJIkteqS2wr56mB0kgsiB5uqyYM%2FJXQiOlhx3F4x%2FTyMceNuV746DQCQj19P&X-Amz-Signature=b16ad9043922894df2c856d7db3609bb1551b9acf9fb356f0877e1b8874bba49&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAZE4XR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF52uXP4dOrifwwUrQM5EkdFQjusxtz2zlA8U4L1jArYAiEAz%2Bb6%2BxanYhwZtivtPGy3q4HVrtwY4qgswILR40j0Tssq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2IssSupB7gSuTBWCrcA9%2BakLO3Mmi02ArYI2b6sne7xqLfl%2F4mByrEgQOPeqMKz40qd7Pn9Dx46Qt4CNbU8UqD8NeAkqoiHmDTHw222TLekGv4dpCejRfVFRPJE3Zn7zJHpsTnyr3LBGeHcQMT6VPmLgN3LerbjuhBLQ0Uz20%2FdoBeQqNVAsCkSp06crcRYqKGLX%2BvMvTJMWwlLLmUk5CAUdgFT%2Flt%2BxgdUY6V%2Fw5nkSSXAgAlle%2FON0VvF2dRlF3bpj9CY1YulHLiT3dk1mC9zpDkCSqbhAzf3QJs1ZveeqlqagkSYmuFo%2BFsWMn3rT3CrKw6MKfK2DSJNzQkNZApwikMB7cge6SAZ3alINFQZiubOG%2FQ5ZFHtUuywkjNsqju22avIcMaF5X7WFPWkD6LTrZJGcoxC7nmLdr%2BO1UcIqnZyQtrpOu%2Bu0srV44sMhiD9NrFXot2Y9%2Fty3CdFmp2oipfF40c2XzRPNyckgDTC5gH5Olosoisc0Ra8h%2FPRNqWUV8bc4svBLEh%2BI4%2F1fnUfinlyPl6dfoxbBNdECe1jm5Ch0kepoJEJ8BKMFUx79YvgdQa0zXT5bGFtPtpyGeGzV%2BmBsaOJJ3AWCuFtoOpofgdCh7Pgsh4Ro2WRXr4Nt446IELTGCQInPmMO7Kyr0GOqUBfuS1MGQ1ohXxMcMJkzTwpeyP4hb3TlZQXSBlpEUrqujn9mY8uJWlfgPhWH34IxeZKNFUhfNpSiOwav%2FmlZcy0J4DPg0Z1XsSm4%2BoDfjcSyeR5AtH6iKp9Xp1Ubag3EsiyuHW67GzDaLHC%2BpXrzyWKw7acelLahc0sJIkteqS2wr56mB0kgsiB5uqyYM%2FJXQiOlhx3F4x%2FTyMceNuV746DQCQj19P&X-Amz-Signature=014f21543b080173b82324c9ae84a7612fbc86f9010e5240d612f01914232f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAZE4XR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF52uXP4dOrifwwUrQM5EkdFQjusxtz2zlA8U4L1jArYAiEAz%2Bb6%2BxanYhwZtivtPGy3q4HVrtwY4qgswILR40j0Tssq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2IssSupB7gSuTBWCrcA9%2BakLO3Mmi02ArYI2b6sne7xqLfl%2F4mByrEgQOPeqMKz40qd7Pn9Dx46Qt4CNbU8UqD8NeAkqoiHmDTHw222TLekGv4dpCejRfVFRPJE3Zn7zJHpsTnyr3LBGeHcQMT6VPmLgN3LerbjuhBLQ0Uz20%2FdoBeQqNVAsCkSp06crcRYqKGLX%2BvMvTJMWwlLLmUk5CAUdgFT%2Flt%2BxgdUY6V%2Fw5nkSSXAgAlle%2FON0VvF2dRlF3bpj9CY1YulHLiT3dk1mC9zpDkCSqbhAzf3QJs1ZveeqlqagkSYmuFo%2BFsWMn3rT3CrKw6MKfK2DSJNzQkNZApwikMB7cge6SAZ3alINFQZiubOG%2FQ5ZFHtUuywkjNsqju22avIcMaF5X7WFPWkD6LTrZJGcoxC7nmLdr%2BO1UcIqnZyQtrpOu%2Bu0srV44sMhiD9NrFXot2Y9%2Fty3CdFmp2oipfF40c2XzRPNyckgDTC5gH5Olosoisc0Ra8h%2FPRNqWUV8bc4svBLEh%2BI4%2F1fnUfinlyPl6dfoxbBNdECe1jm5Ch0kepoJEJ8BKMFUx79YvgdQa0zXT5bGFtPtpyGeGzV%2BmBsaOJJ3AWCuFtoOpofgdCh7Pgsh4Ro2WRXr4Nt446IELTGCQInPmMO7Kyr0GOqUBfuS1MGQ1ohXxMcMJkzTwpeyP4hb3TlZQXSBlpEUrqujn9mY8uJWlfgPhWH34IxeZKNFUhfNpSiOwav%2FmlZcy0J4DPg0Z1XsSm4%2BoDfjcSyeR5AtH6iKp9Xp1Ubag3EsiyuHW67GzDaLHC%2BpXrzyWKw7acelLahc0sJIkteqS2wr56mB0kgsiB5uqyYM%2FJXQiOlhx3F4x%2FTyMceNuV746DQCQj19P&X-Amz-Signature=469095bada9eeaf64730401b96217dd821240a63b5e1cdbcceb08afdeb0a541d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
