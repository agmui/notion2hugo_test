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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDA4EWTK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCU5%2FX9TcZox1uDHHDBcahemy4QZfQ8CwHLGIEnjtnxmgIgHdyAsYiowgt4oV5E%2F8D3xg0rzzh0hqJqNtYoLvDY0dgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLTMILDwsOI087FgfSrcA32WU1GCcXl4SQtQBLRkp0ddQkzxsEMETMN4D%2FaKpbitgnYQFmb8mu9ACKSj55qYRnPNlpnoR1oxMrJVslFwzDfDe3FPRQ0cM5RcQe5DBIVyvYQWha9dSE2nHOLh45MpLD41s2I4gTAVCz3EDSdzqm4hlXQsXcX082Bzj%2FZ98db%2BpAYCmtppJx7cFhEpAgMlGz11C84mfZVwuKBivR7IdgHF3Avs6PdDCCUtzPj6wlyq9XXEblMaAYfmt5cejku1F2V32J3CoCBqAh9ui2W0QW4xUP0QC37b4Q1bSVqTjBxfpXxZR7mQ1yP2Yc59RUr2lFh46rVFGbtoXKMJCjQRs3Akq2jNvJ02zLKrOYYFll1j%2FhhoMcvDDtG4wN22xLfNZk%2FqLlkIiReyYD8lkHnBML2FUHqZFDGQU3nLDZSr30g3yvgeHQ4vMo0g427dYQpO%2BfMrrTPubk%2Bxs0qA9FCSoITqhbHn1U17D%2FpyK2gt8XbhBTWbbiIAbjYpzUzQifjoAqoF4T4sQNHzN2CNqMUuZMT3Z07JvTPQkY%2Bg3WfqHnurtk43e0PDXYVBUyv8YccrcqNfNyzl2POsXKJrWjcAPxAgSFa9e3yUmiDidGolICXBDdtvZkpm45W3I23LML3z5MIGOqUBTEMm8uci7x5dglidO2fR9Kf0im82tJHZz8O6AjvanKymXqbcans%2B5toBifjzXCot3yrcCbQ%2B3dRX5T5l66%2BU5mPWGwWV%2BCk%2BlSyKr2LHOi%2FNJXOZja4qVcvy1WKHSEO%2F3oEfg3%2BpvPje3SdUKCvi3i%2B3hl4h5sM5kgGM4YrCfSzSSNvpVMMiPiP3p6HpZ1IwkrzV3JC5ut628q%2B7JKOYIfJpPvYd&X-Amz-Signature=6c8a2965eab580f66c776ffe8ca4029ab11ad295d2e4553f754268098b5cba88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDA4EWTK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCU5%2FX9TcZox1uDHHDBcahemy4QZfQ8CwHLGIEnjtnxmgIgHdyAsYiowgt4oV5E%2F8D3xg0rzzh0hqJqNtYoLvDY0dgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLTMILDwsOI087FgfSrcA32WU1GCcXl4SQtQBLRkp0ddQkzxsEMETMN4D%2FaKpbitgnYQFmb8mu9ACKSj55qYRnPNlpnoR1oxMrJVslFwzDfDe3FPRQ0cM5RcQe5DBIVyvYQWha9dSE2nHOLh45MpLD41s2I4gTAVCz3EDSdzqm4hlXQsXcX082Bzj%2FZ98db%2BpAYCmtppJx7cFhEpAgMlGz11C84mfZVwuKBivR7IdgHF3Avs6PdDCCUtzPj6wlyq9XXEblMaAYfmt5cejku1F2V32J3CoCBqAh9ui2W0QW4xUP0QC37b4Q1bSVqTjBxfpXxZR7mQ1yP2Yc59RUr2lFh46rVFGbtoXKMJCjQRs3Akq2jNvJ02zLKrOYYFll1j%2FhhoMcvDDtG4wN22xLfNZk%2FqLlkIiReyYD8lkHnBML2FUHqZFDGQU3nLDZSr30g3yvgeHQ4vMo0g427dYQpO%2BfMrrTPubk%2Bxs0qA9FCSoITqhbHn1U17D%2FpyK2gt8XbhBTWbbiIAbjYpzUzQifjoAqoF4T4sQNHzN2CNqMUuZMT3Z07JvTPQkY%2Bg3WfqHnurtk43e0PDXYVBUyv8YccrcqNfNyzl2POsXKJrWjcAPxAgSFa9e3yUmiDidGolICXBDdtvZkpm45W3I23LML3z5MIGOqUBTEMm8uci7x5dglidO2fR9Kf0im82tJHZz8O6AjvanKymXqbcans%2B5toBifjzXCot3yrcCbQ%2B3dRX5T5l66%2BU5mPWGwWV%2BCk%2BlSyKr2LHOi%2FNJXOZja4qVcvy1WKHSEO%2F3oEfg3%2BpvPje3SdUKCvi3i%2B3hl4h5sM5kgGM4YrCfSzSSNvpVMMiPiP3p6HpZ1IwkrzV3JC5ut628q%2B7JKOYIfJpPvYd&X-Amz-Signature=a0b7e68824e63edd7e92bedf792fdef9b4611f705712a71f9c9f494cf736bce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDA4EWTK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCU5%2FX9TcZox1uDHHDBcahemy4QZfQ8CwHLGIEnjtnxmgIgHdyAsYiowgt4oV5E%2F8D3xg0rzzh0hqJqNtYoLvDY0dgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLTMILDwsOI087FgfSrcA32WU1GCcXl4SQtQBLRkp0ddQkzxsEMETMN4D%2FaKpbitgnYQFmb8mu9ACKSj55qYRnPNlpnoR1oxMrJVslFwzDfDe3FPRQ0cM5RcQe5DBIVyvYQWha9dSE2nHOLh45MpLD41s2I4gTAVCz3EDSdzqm4hlXQsXcX082Bzj%2FZ98db%2BpAYCmtppJx7cFhEpAgMlGz11C84mfZVwuKBivR7IdgHF3Avs6PdDCCUtzPj6wlyq9XXEblMaAYfmt5cejku1F2V32J3CoCBqAh9ui2W0QW4xUP0QC37b4Q1bSVqTjBxfpXxZR7mQ1yP2Yc59RUr2lFh46rVFGbtoXKMJCjQRs3Akq2jNvJ02zLKrOYYFll1j%2FhhoMcvDDtG4wN22xLfNZk%2FqLlkIiReyYD8lkHnBML2FUHqZFDGQU3nLDZSr30g3yvgeHQ4vMo0g427dYQpO%2BfMrrTPubk%2Bxs0qA9FCSoITqhbHn1U17D%2FpyK2gt8XbhBTWbbiIAbjYpzUzQifjoAqoF4T4sQNHzN2CNqMUuZMT3Z07JvTPQkY%2Bg3WfqHnurtk43e0PDXYVBUyv8YccrcqNfNyzl2POsXKJrWjcAPxAgSFa9e3yUmiDidGolICXBDdtvZkpm45W3I23LML3z5MIGOqUBTEMm8uci7x5dglidO2fR9Kf0im82tJHZz8O6AjvanKymXqbcans%2B5toBifjzXCot3yrcCbQ%2B3dRX5T5l66%2BU5mPWGwWV%2BCk%2BlSyKr2LHOi%2FNJXOZja4qVcvy1WKHSEO%2F3oEfg3%2BpvPje3SdUKCvi3i%2B3hl4h5sM5kgGM4YrCfSzSSNvpVMMiPiP3p6HpZ1IwkrzV3JC5ut628q%2B7JKOYIfJpPvYd&X-Amz-Signature=3d94601f59f31e3599bbdf0ca41dc86d1532c0e0c212f9548f5b8069ee3b6515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDA4EWTK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCU5%2FX9TcZox1uDHHDBcahemy4QZfQ8CwHLGIEnjtnxmgIgHdyAsYiowgt4oV5E%2F8D3xg0rzzh0hqJqNtYoLvDY0dgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLTMILDwsOI087FgfSrcA32WU1GCcXl4SQtQBLRkp0ddQkzxsEMETMN4D%2FaKpbitgnYQFmb8mu9ACKSj55qYRnPNlpnoR1oxMrJVslFwzDfDe3FPRQ0cM5RcQe5DBIVyvYQWha9dSE2nHOLh45MpLD41s2I4gTAVCz3EDSdzqm4hlXQsXcX082Bzj%2FZ98db%2BpAYCmtppJx7cFhEpAgMlGz11C84mfZVwuKBivR7IdgHF3Avs6PdDCCUtzPj6wlyq9XXEblMaAYfmt5cejku1F2V32J3CoCBqAh9ui2W0QW4xUP0QC37b4Q1bSVqTjBxfpXxZR7mQ1yP2Yc59RUr2lFh46rVFGbtoXKMJCjQRs3Akq2jNvJ02zLKrOYYFll1j%2FhhoMcvDDtG4wN22xLfNZk%2FqLlkIiReyYD8lkHnBML2FUHqZFDGQU3nLDZSr30g3yvgeHQ4vMo0g427dYQpO%2BfMrrTPubk%2Bxs0qA9FCSoITqhbHn1U17D%2FpyK2gt8XbhBTWbbiIAbjYpzUzQifjoAqoF4T4sQNHzN2CNqMUuZMT3Z07JvTPQkY%2Bg3WfqHnurtk43e0PDXYVBUyv8YccrcqNfNyzl2POsXKJrWjcAPxAgSFa9e3yUmiDidGolICXBDdtvZkpm45W3I23LML3z5MIGOqUBTEMm8uci7x5dglidO2fR9Kf0im82tJHZz8O6AjvanKymXqbcans%2B5toBifjzXCot3yrcCbQ%2B3dRX5T5l66%2BU5mPWGwWV%2BCk%2BlSyKr2LHOi%2FNJXOZja4qVcvy1WKHSEO%2F3oEfg3%2BpvPje3SdUKCvi3i%2B3hl4h5sM5kgGM4YrCfSzSSNvpVMMiPiP3p6HpZ1IwkrzV3JC5ut628q%2B7JKOYIfJpPvYd&X-Amz-Signature=92f37c764b7546b0cc4431cc332255a79950602b0b4d7402c7016ba1b33bb2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDA4EWTK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCU5%2FX9TcZox1uDHHDBcahemy4QZfQ8CwHLGIEnjtnxmgIgHdyAsYiowgt4oV5E%2F8D3xg0rzzh0hqJqNtYoLvDY0dgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLTMILDwsOI087FgfSrcA32WU1GCcXl4SQtQBLRkp0ddQkzxsEMETMN4D%2FaKpbitgnYQFmb8mu9ACKSj55qYRnPNlpnoR1oxMrJVslFwzDfDe3FPRQ0cM5RcQe5DBIVyvYQWha9dSE2nHOLh45MpLD41s2I4gTAVCz3EDSdzqm4hlXQsXcX082Bzj%2FZ98db%2BpAYCmtppJx7cFhEpAgMlGz11C84mfZVwuKBivR7IdgHF3Avs6PdDCCUtzPj6wlyq9XXEblMaAYfmt5cejku1F2V32J3CoCBqAh9ui2W0QW4xUP0QC37b4Q1bSVqTjBxfpXxZR7mQ1yP2Yc59RUr2lFh46rVFGbtoXKMJCjQRs3Akq2jNvJ02zLKrOYYFll1j%2FhhoMcvDDtG4wN22xLfNZk%2FqLlkIiReyYD8lkHnBML2FUHqZFDGQU3nLDZSr30g3yvgeHQ4vMo0g427dYQpO%2BfMrrTPubk%2Bxs0qA9FCSoITqhbHn1U17D%2FpyK2gt8XbhBTWbbiIAbjYpzUzQifjoAqoF4T4sQNHzN2CNqMUuZMT3Z07JvTPQkY%2Bg3WfqHnurtk43e0PDXYVBUyv8YccrcqNfNyzl2POsXKJrWjcAPxAgSFa9e3yUmiDidGolICXBDdtvZkpm45W3I23LML3z5MIGOqUBTEMm8uci7x5dglidO2fR9Kf0im82tJHZz8O6AjvanKymXqbcans%2B5toBifjzXCot3yrcCbQ%2B3dRX5T5l66%2BU5mPWGwWV%2BCk%2BlSyKr2LHOi%2FNJXOZja4qVcvy1WKHSEO%2F3oEfg3%2BpvPje3SdUKCvi3i%2B3hl4h5sM5kgGM4YrCfSzSSNvpVMMiPiP3p6HpZ1IwkrzV3JC5ut628q%2B7JKOYIfJpPvYd&X-Amz-Signature=a6de8a896468b430676e5757aaeea97b6f9489e5b2dd662d197aa41950c867d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
