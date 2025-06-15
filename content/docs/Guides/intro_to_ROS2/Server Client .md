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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQHXSAP2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAvkcpB6oUpsyl7Tzxvz2TxDkcVJGZIPhohoUTrxrVMAAiEAwu3xi7bzhXqsefs9G46LEABc2cT2ZUPH9AtwFpcvs%2BQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCMBg%2FRe2GdMlOngxircA2Jv23W%2B9powPNLzJ2paBTbKR0QToZY%2FGTQ8nNrpLSAkZOH3HOxjcSTiXJPqVRF4I4zQ3BFoK%2FXnPdL0P0Ef%2Fr8Fh6VvBPYBWmKRAwDngIi4M%2FybUh%2BK6T%2F4NuiCLpwSW2jMBdlI5U%2BBgiRrv6EA9cNU%2Bmafsmz7qX28m%2BWuG%2FdLIiyGMDtCW%2Byu5cN3DFozHAp67%2F8meDRnD8QY38WTW4ViGUOro423xbc6ah4sYzda%2Bj9F81tNmedWiEZF7OVTJIH7Rhm7LilD7f%2BDgO5f5Ii1PUsZaKs9TvCuCB1E6d8IMVxv5YO9dTdhEKkObsU8jpGmLa4HRPxAuL3siq10cnjFVBgcxQOv8mglHQ%2B11S7DaPjdVf3OF%2B3KraVtJx8t1SRsc3GQ5%2BF9ZDtkq6FhlCQfz%2BFq21dIWUBQTB0swv16iTPcMFwQTCOCtoxnK7yFo81fW0YuJzmf8JsxznWwWwJTfcllJn37j7jrTVVr%2B53T1FrWCGczzOMBFRm0qExupZFW6sfXfBNXtYAgseCvEDAdv1cVAHjDFo4DGjKAzvuUw2jQYYYjungwz1sh8IPcJQNMz0d2%2BL62dc2RPlIbENIESqnBg7BzYiBp6Vik9LRH%2B5F%2B1szyyxcj8RcXMIL%2FuMIGOqUBXP6XaJDaccW1Hxf24RwUjgG%2BFHIT02Hl3gz0c2CWgof9i%2FdLeosNusNbpn692GgXl%2FwgEIkRW2Fxzx9NXhGUAepIGwoEM6z3C1M2Nsg7BqTyhIPWI%2FLk6Ezu4rVa1%2BihVtE7nls6jbeQ0nSkq0JGroAVw%2FiyCQ0augx5gKODcIyfRrHAupVgLIjMw91aesbaG7FoGdW54tswHycOudVvpspQeSun&X-Amz-Signature=cfb34bae48d3ff0d487e7929f3e482f5d6538d0597c416d90c9bb638c164afbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQHXSAP2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAvkcpB6oUpsyl7Tzxvz2TxDkcVJGZIPhohoUTrxrVMAAiEAwu3xi7bzhXqsefs9G46LEABc2cT2ZUPH9AtwFpcvs%2BQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCMBg%2FRe2GdMlOngxircA2Jv23W%2B9powPNLzJ2paBTbKR0QToZY%2FGTQ8nNrpLSAkZOH3HOxjcSTiXJPqVRF4I4zQ3BFoK%2FXnPdL0P0Ef%2Fr8Fh6VvBPYBWmKRAwDngIi4M%2FybUh%2BK6T%2F4NuiCLpwSW2jMBdlI5U%2BBgiRrv6EA9cNU%2Bmafsmz7qX28m%2BWuG%2FdLIiyGMDtCW%2Byu5cN3DFozHAp67%2F8meDRnD8QY38WTW4ViGUOro423xbc6ah4sYzda%2Bj9F81tNmedWiEZF7OVTJIH7Rhm7LilD7f%2BDgO5f5Ii1PUsZaKs9TvCuCB1E6d8IMVxv5YO9dTdhEKkObsU8jpGmLa4HRPxAuL3siq10cnjFVBgcxQOv8mglHQ%2B11S7DaPjdVf3OF%2B3KraVtJx8t1SRsc3GQ5%2BF9ZDtkq6FhlCQfz%2BFq21dIWUBQTB0swv16iTPcMFwQTCOCtoxnK7yFo81fW0YuJzmf8JsxznWwWwJTfcllJn37j7jrTVVr%2B53T1FrWCGczzOMBFRm0qExupZFW6sfXfBNXtYAgseCvEDAdv1cVAHjDFo4DGjKAzvuUw2jQYYYjungwz1sh8IPcJQNMz0d2%2BL62dc2RPlIbENIESqnBg7BzYiBp6Vik9LRH%2B5F%2B1szyyxcj8RcXMIL%2FuMIGOqUBXP6XaJDaccW1Hxf24RwUjgG%2BFHIT02Hl3gz0c2CWgof9i%2FdLeosNusNbpn692GgXl%2FwgEIkRW2Fxzx9NXhGUAepIGwoEM6z3C1M2Nsg7BqTyhIPWI%2FLk6Ezu4rVa1%2BihVtE7nls6jbeQ0nSkq0JGroAVw%2FiyCQ0augx5gKODcIyfRrHAupVgLIjMw91aesbaG7FoGdW54tswHycOudVvpspQeSun&X-Amz-Signature=c8015dd227af4ced0645317d73f3f147f949d964a42f6ddd1af15e1cc5bd96ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQHXSAP2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAvkcpB6oUpsyl7Tzxvz2TxDkcVJGZIPhohoUTrxrVMAAiEAwu3xi7bzhXqsefs9G46LEABc2cT2ZUPH9AtwFpcvs%2BQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCMBg%2FRe2GdMlOngxircA2Jv23W%2B9powPNLzJ2paBTbKR0QToZY%2FGTQ8nNrpLSAkZOH3HOxjcSTiXJPqVRF4I4zQ3BFoK%2FXnPdL0P0Ef%2Fr8Fh6VvBPYBWmKRAwDngIi4M%2FybUh%2BK6T%2F4NuiCLpwSW2jMBdlI5U%2BBgiRrv6EA9cNU%2Bmafsmz7qX28m%2BWuG%2FdLIiyGMDtCW%2Byu5cN3DFozHAp67%2F8meDRnD8QY38WTW4ViGUOro423xbc6ah4sYzda%2Bj9F81tNmedWiEZF7OVTJIH7Rhm7LilD7f%2BDgO5f5Ii1PUsZaKs9TvCuCB1E6d8IMVxv5YO9dTdhEKkObsU8jpGmLa4HRPxAuL3siq10cnjFVBgcxQOv8mglHQ%2B11S7DaPjdVf3OF%2B3KraVtJx8t1SRsc3GQ5%2BF9ZDtkq6FhlCQfz%2BFq21dIWUBQTB0swv16iTPcMFwQTCOCtoxnK7yFo81fW0YuJzmf8JsxznWwWwJTfcllJn37j7jrTVVr%2B53T1FrWCGczzOMBFRm0qExupZFW6sfXfBNXtYAgseCvEDAdv1cVAHjDFo4DGjKAzvuUw2jQYYYjungwz1sh8IPcJQNMz0d2%2BL62dc2RPlIbENIESqnBg7BzYiBp6Vik9LRH%2B5F%2B1szyyxcj8RcXMIL%2FuMIGOqUBXP6XaJDaccW1Hxf24RwUjgG%2BFHIT02Hl3gz0c2CWgof9i%2FdLeosNusNbpn692GgXl%2FwgEIkRW2Fxzx9NXhGUAepIGwoEM6z3C1M2Nsg7BqTyhIPWI%2FLk6Ezu4rVa1%2BihVtE7nls6jbeQ0nSkq0JGroAVw%2FiyCQ0augx5gKODcIyfRrHAupVgLIjMw91aesbaG7FoGdW54tswHycOudVvpspQeSun&X-Amz-Signature=8f72e6e909dde7726e491f79150306483d17142b7a4382d7e7f0bf0662c11a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQHXSAP2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAvkcpB6oUpsyl7Tzxvz2TxDkcVJGZIPhohoUTrxrVMAAiEAwu3xi7bzhXqsefs9G46LEABc2cT2ZUPH9AtwFpcvs%2BQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCMBg%2FRe2GdMlOngxircA2Jv23W%2B9powPNLzJ2paBTbKR0QToZY%2FGTQ8nNrpLSAkZOH3HOxjcSTiXJPqVRF4I4zQ3BFoK%2FXnPdL0P0Ef%2Fr8Fh6VvBPYBWmKRAwDngIi4M%2FybUh%2BK6T%2F4NuiCLpwSW2jMBdlI5U%2BBgiRrv6EA9cNU%2Bmafsmz7qX28m%2BWuG%2FdLIiyGMDtCW%2Byu5cN3DFozHAp67%2F8meDRnD8QY38WTW4ViGUOro423xbc6ah4sYzda%2Bj9F81tNmedWiEZF7OVTJIH7Rhm7LilD7f%2BDgO5f5Ii1PUsZaKs9TvCuCB1E6d8IMVxv5YO9dTdhEKkObsU8jpGmLa4HRPxAuL3siq10cnjFVBgcxQOv8mglHQ%2B11S7DaPjdVf3OF%2B3KraVtJx8t1SRsc3GQ5%2BF9ZDtkq6FhlCQfz%2BFq21dIWUBQTB0swv16iTPcMFwQTCOCtoxnK7yFo81fW0YuJzmf8JsxznWwWwJTfcllJn37j7jrTVVr%2B53T1FrWCGczzOMBFRm0qExupZFW6sfXfBNXtYAgseCvEDAdv1cVAHjDFo4DGjKAzvuUw2jQYYYjungwz1sh8IPcJQNMz0d2%2BL62dc2RPlIbENIESqnBg7BzYiBp6Vik9LRH%2B5F%2B1szyyxcj8RcXMIL%2FuMIGOqUBXP6XaJDaccW1Hxf24RwUjgG%2BFHIT02Hl3gz0c2CWgof9i%2FdLeosNusNbpn692GgXl%2FwgEIkRW2Fxzx9NXhGUAepIGwoEM6z3C1M2Nsg7BqTyhIPWI%2FLk6Ezu4rVa1%2BihVtE7nls6jbeQ0nSkq0JGroAVw%2FiyCQ0augx5gKODcIyfRrHAupVgLIjMw91aesbaG7FoGdW54tswHycOudVvpspQeSun&X-Amz-Signature=8f69009142ffd766a4a53b7354a36530930f68b537acb102521b89e77a85afe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQHXSAP2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAvkcpB6oUpsyl7Tzxvz2TxDkcVJGZIPhohoUTrxrVMAAiEAwu3xi7bzhXqsefs9G46LEABc2cT2ZUPH9AtwFpcvs%2BQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCMBg%2FRe2GdMlOngxircA2Jv23W%2B9powPNLzJ2paBTbKR0QToZY%2FGTQ8nNrpLSAkZOH3HOxjcSTiXJPqVRF4I4zQ3BFoK%2FXnPdL0P0Ef%2Fr8Fh6VvBPYBWmKRAwDngIi4M%2FybUh%2BK6T%2F4NuiCLpwSW2jMBdlI5U%2BBgiRrv6EA9cNU%2Bmafsmz7qX28m%2BWuG%2FdLIiyGMDtCW%2Byu5cN3DFozHAp67%2F8meDRnD8QY38WTW4ViGUOro423xbc6ah4sYzda%2Bj9F81tNmedWiEZF7OVTJIH7Rhm7LilD7f%2BDgO5f5Ii1PUsZaKs9TvCuCB1E6d8IMVxv5YO9dTdhEKkObsU8jpGmLa4HRPxAuL3siq10cnjFVBgcxQOv8mglHQ%2B11S7DaPjdVf3OF%2B3KraVtJx8t1SRsc3GQ5%2BF9ZDtkq6FhlCQfz%2BFq21dIWUBQTB0swv16iTPcMFwQTCOCtoxnK7yFo81fW0YuJzmf8JsxznWwWwJTfcllJn37j7jrTVVr%2B53T1FrWCGczzOMBFRm0qExupZFW6sfXfBNXtYAgseCvEDAdv1cVAHjDFo4DGjKAzvuUw2jQYYYjungwz1sh8IPcJQNMz0d2%2BL62dc2RPlIbENIESqnBg7BzYiBp6Vik9LRH%2B5F%2B1szyyxcj8RcXMIL%2FuMIGOqUBXP6XaJDaccW1Hxf24RwUjgG%2BFHIT02Hl3gz0c2CWgof9i%2FdLeosNusNbpn692GgXl%2FwgEIkRW2Fxzx9NXhGUAepIGwoEM6z3C1M2Nsg7BqTyhIPWI%2FLk6Ezu4rVa1%2BihVtE7nls6jbeQ0nSkq0JGroAVw%2FiyCQ0augx5gKODcIyfRrHAupVgLIjMw91aesbaG7FoGdW54tswHycOudVvpspQeSun&X-Amz-Signature=3bdc40623a500a5ae5670b24319722f2378ea480eb943f3b2d55004e1f17c841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
