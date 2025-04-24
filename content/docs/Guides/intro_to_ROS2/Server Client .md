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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3N6MDJP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMCC%2B8EtZttkHp51NZmlYWHZ59c31PgFJCm8DbsQtdwIgYheqmmK2hOC%2FJTTi8NMMoQoM2eBFG0xm0aflMchzJ3cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJXASC7zAxUEs%2FBi1ircA4sbHz%2Br5JEB3uG6uEWp6oqnvKNFXAWPNs35VG516K8888SDqjXrnA1Se1Crf4NtbNHDHM%2FTplqvVKbmgpgX7zgnTjBMYmPUKfoL7SxXx8Je0Mnp46HuNdldtOzGYobyUuOsUK0BdSY%2BWBtBHSo2s6yNBAxm6nsstQ%2BpRKPcgBis7XjMXzAi1R%2B3AzdgLR%2FhkbgME%2FxCygZzkpcov2T0sI7YTfbIiZZE2BoQ83Nl2MHp2t00ZXvoHuNQEuk%2FY2mImYK6wrMom9JE1z2BFMy7TnoGTcuk4eCOGt0%2BWs8O%2B2qEgiUX6wN%2Fx8cLMByjcEfslZLeHn68d0ut6JrP62TNEcppAd9S2iRlFY1G5qjbb6ryL0clthtAk1XMLpR08Up6fm4fXxiShqc3So7zwui5%2BSVGEk8nnj%2FkOPkbbEquFKxnh9p7NNlQdbM0D7ZkY3hkimPtszkjAmJdOTP7vKrOIPxsjB12yqEV9xH3Fs6xqv2mSjTpdmSUlMuFVPJJF22mwPBIQRzxJhS%2BdvkEBnyNr3MsZlKpH%2F0XUQoDJPO74vodXy68pLrndtH%2BFvglfed8kFCuvIVjad8ZrEl4TsGKtTfIIblrOPwflNWwuM06WWpGOLtKl%2FCL3Wxl9aBUMKr0qsAGOqUBJEmsFa5JPevp%2FSSv2Ge4YWMh6t3nuHvfnaYBWy0WEi8JBAqOdzgEMfbdaS29GBTmBPE1DQBgjH6SpaY5fMaIC9IA0pgrPTBZmQDGhleJJWa%2Bvhko5rpYqw%2B4cnlpWoPg6Pm2orYsHTEC%2BifDtPDyITqj7YFzSyDgecTgV%2BLu7pLv11LtyVE9CHYLEXM1YdUOmJOHNG6nyGoL8l%2FdtHU%2Fp3rfS4V2&X-Amz-Signature=cb6bf780864609e9e34c797fc4dc24ba437d40a9ed1a17815ad3978f75ccb497&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3N6MDJP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMCC%2B8EtZttkHp51NZmlYWHZ59c31PgFJCm8DbsQtdwIgYheqmmK2hOC%2FJTTi8NMMoQoM2eBFG0xm0aflMchzJ3cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJXASC7zAxUEs%2FBi1ircA4sbHz%2Br5JEB3uG6uEWp6oqnvKNFXAWPNs35VG516K8888SDqjXrnA1Se1Crf4NtbNHDHM%2FTplqvVKbmgpgX7zgnTjBMYmPUKfoL7SxXx8Je0Mnp46HuNdldtOzGYobyUuOsUK0BdSY%2BWBtBHSo2s6yNBAxm6nsstQ%2BpRKPcgBis7XjMXzAi1R%2B3AzdgLR%2FhkbgME%2FxCygZzkpcov2T0sI7YTfbIiZZE2BoQ83Nl2MHp2t00ZXvoHuNQEuk%2FY2mImYK6wrMom9JE1z2BFMy7TnoGTcuk4eCOGt0%2BWs8O%2B2qEgiUX6wN%2Fx8cLMByjcEfslZLeHn68d0ut6JrP62TNEcppAd9S2iRlFY1G5qjbb6ryL0clthtAk1XMLpR08Up6fm4fXxiShqc3So7zwui5%2BSVGEk8nnj%2FkOPkbbEquFKxnh9p7NNlQdbM0D7ZkY3hkimPtszkjAmJdOTP7vKrOIPxsjB12yqEV9xH3Fs6xqv2mSjTpdmSUlMuFVPJJF22mwPBIQRzxJhS%2BdvkEBnyNr3MsZlKpH%2F0XUQoDJPO74vodXy68pLrndtH%2BFvglfed8kFCuvIVjad8ZrEl4TsGKtTfIIblrOPwflNWwuM06WWpGOLtKl%2FCL3Wxl9aBUMKr0qsAGOqUBJEmsFa5JPevp%2FSSv2Ge4YWMh6t3nuHvfnaYBWy0WEi8JBAqOdzgEMfbdaS29GBTmBPE1DQBgjH6SpaY5fMaIC9IA0pgrPTBZmQDGhleJJWa%2Bvhko5rpYqw%2B4cnlpWoPg6Pm2orYsHTEC%2BifDtPDyITqj7YFzSyDgecTgV%2BLu7pLv11LtyVE9CHYLEXM1YdUOmJOHNG6nyGoL8l%2FdtHU%2Fp3rfS4V2&X-Amz-Signature=7fa40b2cb82c81bc2e16a9168014cd94ba182dd1733e4fba283f0642b5209768&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3N6MDJP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMCC%2B8EtZttkHp51NZmlYWHZ59c31PgFJCm8DbsQtdwIgYheqmmK2hOC%2FJTTi8NMMoQoM2eBFG0xm0aflMchzJ3cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJXASC7zAxUEs%2FBi1ircA4sbHz%2Br5JEB3uG6uEWp6oqnvKNFXAWPNs35VG516K8888SDqjXrnA1Se1Crf4NtbNHDHM%2FTplqvVKbmgpgX7zgnTjBMYmPUKfoL7SxXx8Je0Mnp46HuNdldtOzGYobyUuOsUK0BdSY%2BWBtBHSo2s6yNBAxm6nsstQ%2BpRKPcgBis7XjMXzAi1R%2B3AzdgLR%2FhkbgME%2FxCygZzkpcov2T0sI7YTfbIiZZE2BoQ83Nl2MHp2t00ZXvoHuNQEuk%2FY2mImYK6wrMom9JE1z2BFMy7TnoGTcuk4eCOGt0%2BWs8O%2B2qEgiUX6wN%2Fx8cLMByjcEfslZLeHn68d0ut6JrP62TNEcppAd9S2iRlFY1G5qjbb6ryL0clthtAk1XMLpR08Up6fm4fXxiShqc3So7zwui5%2BSVGEk8nnj%2FkOPkbbEquFKxnh9p7NNlQdbM0D7ZkY3hkimPtszkjAmJdOTP7vKrOIPxsjB12yqEV9xH3Fs6xqv2mSjTpdmSUlMuFVPJJF22mwPBIQRzxJhS%2BdvkEBnyNr3MsZlKpH%2F0XUQoDJPO74vodXy68pLrndtH%2BFvglfed8kFCuvIVjad8ZrEl4TsGKtTfIIblrOPwflNWwuM06WWpGOLtKl%2FCL3Wxl9aBUMKr0qsAGOqUBJEmsFa5JPevp%2FSSv2Ge4YWMh6t3nuHvfnaYBWy0WEi8JBAqOdzgEMfbdaS29GBTmBPE1DQBgjH6SpaY5fMaIC9IA0pgrPTBZmQDGhleJJWa%2Bvhko5rpYqw%2B4cnlpWoPg6Pm2orYsHTEC%2BifDtPDyITqj7YFzSyDgecTgV%2BLu7pLv11LtyVE9CHYLEXM1YdUOmJOHNG6nyGoL8l%2FdtHU%2Fp3rfS4V2&X-Amz-Signature=a3a3eada1138e1faa00c3d31bbdef8df977c5264a669350abdb753de8fa4c7c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3N6MDJP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMCC%2B8EtZttkHp51NZmlYWHZ59c31PgFJCm8DbsQtdwIgYheqmmK2hOC%2FJTTi8NMMoQoM2eBFG0xm0aflMchzJ3cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJXASC7zAxUEs%2FBi1ircA4sbHz%2Br5JEB3uG6uEWp6oqnvKNFXAWPNs35VG516K8888SDqjXrnA1Se1Crf4NtbNHDHM%2FTplqvVKbmgpgX7zgnTjBMYmPUKfoL7SxXx8Je0Mnp46HuNdldtOzGYobyUuOsUK0BdSY%2BWBtBHSo2s6yNBAxm6nsstQ%2BpRKPcgBis7XjMXzAi1R%2B3AzdgLR%2FhkbgME%2FxCygZzkpcov2T0sI7YTfbIiZZE2BoQ83Nl2MHp2t00ZXvoHuNQEuk%2FY2mImYK6wrMom9JE1z2BFMy7TnoGTcuk4eCOGt0%2BWs8O%2B2qEgiUX6wN%2Fx8cLMByjcEfslZLeHn68d0ut6JrP62TNEcppAd9S2iRlFY1G5qjbb6ryL0clthtAk1XMLpR08Up6fm4fXxiShqc3So7zwui5%2BSVGEk8nnj%2FkOPkbbEquFKxnh9p7NNlQdbM0D7ZkY3hkimPtszkjAmJdOTP7vKrOIPxsjB12yqEV9xH3Fs6xqv2mSjTpdmSUlMuFVPJJF22mwPBIQRzxJhS%2BdvkEBnyNr3MsZlKpH%2F0XUQoDJPO74vodXy68pLrndtH%2BFvglfed8kFCuvIVjad8ZrEl4TsGKtTfIIblrOPwflNWwuM06WWpGOLtKl%2FCL3Wxl9aBUMKr0qsAGOqUBJEmsFa5JPevp%2FSSv2Ge4YWMh6t3nuHvfnaYBWy0WEi8JBAqOdzgEMfbdaS29GBTmBPE1DQBgjH6SpaY5fMaIC9IA0pgrPTBZmQDGhleJJWa%2Bvhko5rpYqw%2B4cnlpWoPg6Pm2orYsHTEC%2BifDtPDyITqj7YFzSyDgecTgV%2BLu7pLv11LtyVE9CHYLEXM1YdUOmJOHNG6nyGoL8l%2FdtHU%2Fp3rfS4V2&X-Amz-Signature=a924d0f51e17d98b45e1af9ae78e535ff22ab7f1bc57b4d4299182ff73c1fc0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3N6MDJP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMCC%2B8EtZttkHp51NZmlYWHZ59c31PgFJCm8DbsQtdwIgYheqmmK2hOC%2FJTTi8NMMoQoM2eBFG0xm0aflMchzJ3cq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJXASC7zAxUEs%2FBi1ircA4sbHz%2Br5JEB3uG6uEWp6oqnvKNFXAWPNs35VG516K8888SDqjXrnA1Se1Crf4NtbNHDHM%2FTplqvVKbmgpgX7zgnTjBMYmPUKfoL7SxXx8Je0Mnp46HuNdldtOzGYobyUuOsUK0BdSY%2BWBtBHSo2s6yNBAxm6nsstQ%2BpRKPcgBis7XjMXzAi1R%2B3AzdgLR%2FhkbgME%2FxCygZzkpcov2T0sI7YTfbIiZZE2BoQ83Nl2MHp2t00ZXvoHuNQEuk%2FY2mImYK6wrMom9JE1z2BFMy7TnoGTcuk4eCOGt0%2BWs8O%2B2qEgiUX6wN%2Fx8cLMByjcEfslZLeHn68d0ut6JrP62TNEcppAd9S2iRlFY1G5qjbb6ryL0clthtAk1XMLpR08Up6fm4fXxiShqc3So7zwui5%2BSVGEk8nnj%2FkOPkbbEquFKxnh9p7NNlQdbM0D7ZkY3hkimPtszkjAmJdOTP7vKrOIPxsjB12yqEV9xH3Fs6xqv2mSjTpdmSUlMuFVPJJF22mwPBIQRzxJhS%2BdvkEBnyNr3MsZlKpH%2F0XUQoDJPO74vodXy68pLrndtH%2BFvglfed8kFCuvIVjad8ZrEl4TsGKtTfIIblrOPwflNWwuM06WWpGOLtKl%2FCL3Wxl9aBUMKr0qsAGOqUBJEmsFa5JPevp%2FSSv2Ge4YWMh6t3nuHvfnaYBWy0WEi8JBAqOdzgEMfbdaS29GBTmBPE1DQBgjH6SpaY5fMaIC9IA0pgrPTBZmQDGhleJJWa%2Bvhko5rpYqw%2B4cnlpWoPg6Pm2orYsHTEC%2BifDtPDyITqj7YFzSyDgecTgV%2BLu7pLv11LtyVE9CHYLEXM1YdUOmJOHNG6nyGoL8l%2FdtHU%2Fp3rfS4V2&X-Amz-Signature=32f1ccff5becaa771f16d0df3fc21e440afeab910d9a9331d92abbf03826c18f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
