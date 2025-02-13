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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXUU3FZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyObz6KUdyw9gsE%2FQ4Uk1TSLLbWTUNP33Lmj%2BNxwDhcAIgEd34813jGDOSuMoF7znI%2BwN1bnHXYK3p8KvstAwjIYIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG9PhSK2e7wgPofNHyrcA7XRmk02inYlV7DEe6NColbyMSTHfFbsp2jGlKbKiioO%2FbbHOvNXjFllz71MbTuYq5%2FUF3Dec2mAVXf8Wg5gIXqK6LIgeHNf0AlWn8LPVzMlWD0fg%2BfLo9iU9uiSlOjZcwFTfk4jZjS648v7SWXsMsD3Yjus0wMnnGPKxHirGtry1cY9jgjp6zzw8lRusnCI4NCKATWWEUHqPEoi8h9JiuPQwbiGJhCwFrjHGSQNhg%2FsWe1TioPXr%2FY2sH8oxc8T8dmK63m%2F%2F20Q%2FyWs5GsCsFiC6pLL3nvKWp2p4yvQ1VFSPUhaDhd04F5T0fy%2FNMrY24cqOozWUfCRuzVzTdk3I%2FmxOB75KrJA5n%2FBGTcJvsdybSu6l4oUZuumKlsqBDuYAQ6N8L8ruTz0QV%2BJRn%2BnvsBNn6A7ebXfIGcSTZyhiPWF9bSRtrgf3RlE6b5F5XOyNH6wlr5k3CbOw0AoKsYh7eDh0ZSQy8X45oUGHr8CIdju%2BZBbyLegSuH095UP2QMKQJ0Ye6nBEfIuAJBBj8lF0klpaLtYutOjJaEQ83OGZg%2FQMkAYne72EkJJG03%2Fl8BQ4pczZ%2BFFee4wcWl%2F0CxDMrV%2Bx9YIcsrd3r8jAcSrHUCMbmP7yfnAW4d0zcQyMPy%2BuL0GOqUBEYGVfQUzxJLH4gcUxEra%2BBzE8oPTG6ueq6LHPkKeNBubFDlldVE8EMEWnTG8shHVxAalIGOWgqgxDdqBSvaiHUgcWuHpozCrxuJpxfvQ6Il7%2Bp2kWNhZ5Z7j0KxRvRRZ5p9l6CmRv9ZKDEZJ%2B9BnDTx7u9H5UYn6lR1R8R1Xlq9nQC0WB7ILkQWVB7gfzUsP5C54uTBY8DpgGEpuJ47Hsijm6H0r&X-Amz-Signature=e0b7cc325fdc6d46cfdc0e30922b93b22e10985c61fa13a73eeeba12d520404c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXUU3FZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyObz6KUdyw9gsE%2FQ4Uk1TSLLbWTUNP33Lmj%2BNxwDhcAIgEd34813jGDOSuMoF7znI%2BwN1bnHXYK3p8KvstAwjIYIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG9PhSK2e7wgPofNHyrcA7XRmk02inYlV7DEe6NColbyMSTHfFbsp2jGlKbKiioO%2FbbHOvNXjFllz71MbTuYq5%2FUF3Dec2mAVXf8Wg5gIXqK6LIgeHNf0AlWn8LPVzMlWD0fg%2BfLo9iU9uiSlOjZcwFTfk4jZjS648v7SWXsMsD3Yjus0wMnnGPKxHirGtry1cY9jgjp6zzw8lRusnCI4NCKATWWEUHqPEoi8h9JiuPQwbiGJhCwFrjHGSQNhg%2FsWe1TioPXr%2FY2sH8oxc8T8dmK63m%2F%2F20Q%2FyWs5GsCsFiC6pLL3nvKWp2p4yvQ1VFSPUhaDhd04F5T0fy%2FNMrY24cqOozWUfCRuzVzTdk3I%2FmxOB75KrJA5n%2FBGTcJvsdybSu6l4oUZuumKlsqBDuYAQ6N8L8ruTz0QV%2BJRn%2BnvsBNn6A7ebXfIGcSTZyhiPWF9bSRtrgf3RlE6b5F5XOyNH6wlr5k3CbOw0AoKsYh7eDh0ZSQy8X45oUGHr8CIdju%2BZBbyLegSuH095UP2QMKQJ0Ye6nBEfIuAJBBj8lF0klpaLtYutOjJaEQ83OGZg%2FQMkAYne72EkJJG03%2Fl8BQ4pczZ%2BFFee4wcWl%2F0CxDMrV%2Bx9YIcsrd3r8jAcSrHUCMbmP7yfnAW4d0zcQyMPy%2BuL0GOqUBEYGVfQUzxJLH4gcUxEra%2BBzE8oPTG6ueq6LHPkKeNBubFDlldVE8EMEWnTG8shHVxAalIGOWgqgxDdqBSvaiHUgcWuHpozCrxuJpxfvQ6Il7%2Bp2kWNhZ5Z7j0KxRvRRZ5p9l6CmRv9ZKDEZJ%2B9BnDTx7u9H5UYn6lR1R8R1Xlq9nQC0WB7ILkQWVB7gfzUsP5C54uTBY8DpgGEpuJ47Hsijm6H0r&X-Amz-Signature=1ac1ea3204606384e320a7afedde880142607217dba0895ab8ab88c968d186dd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXUU3FZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyObz6KUdyw9gsE%2FQ4Uk1TSLLbWTUNP33Lmj%2BNxwDhcAIgEd34813jGDOSuMoF7znI%2BwN1bnHXYK3p8KvstAwjIYIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG9PhSK2e7wgPofNHyrcA7XRmk02inYlV7DEe6NColbyMSTHfFbsp2jGlKbKiioO%2FbbHOvNXjFllz71MbTuYq5%2FUF3Dec2mAVXf8Wg5gIXqK6LIgeHNf0AlWn8LPVzMlWD0fg%2BfLo9iU9uiSlOjZcwFTfk4jZjS648v7SWXsMsD3Yjus0wMnnGPKxHirGtry1cY9jgjp6zzw8lRusnCI4NCKATWWEUHqPEoi8h9JiuPQwbiGJhCwFrjHGSQNhg%2FsWe1TioPXr%2FY2sH8oxc8T8dmK63m%2F%2F20Q%2FyWs5GsCsFiC6pLL3nvKWp2p4yvQ1VFSPUhaDhd04F5T0fy%2FNMrY24cqOozWUfCRuzVzTdk3I%2FmxOB75KrJA5n%2FBGTcJvsdybSu6l4oUZuumKlsqBDuYAQ6N8L8ruTz0QV%2BJRn%2BnvsBNn6A7ebXfIGcSTZyhiPWF9bSRtrgf3RlE6b5F5XOyNH6wlr5k3CbOw0AoKsYh7eDh0ZSQy8X45oUGHr8CIdju%2BZBbyLegSuH095UP2QMKQJ0Ye6nBEfIuAJBBj8lF0klpaLtYutOjJaEQ83OGZg%2FQMkAYne72EkJJG03%2Fl8BQ4pczZ%2BFFee4wcWl%2F0CxDMrV%2Bx9YIcsrd3r8jAcSrHUCMbmP7yfnAW4d0zcQyMPy%2BuL0GOqUBEYGVfQUzxJLH4gcUxEra%2BBzE8oPTG6ueq6LHPkKeNBubFDlldVE8EMEWnTG8shHVxAalIGOWgqgxDdqBSvaiHUgcWuHpozCrxuJpxfvQ6Il7%2Bp2kWNhZ5Z7j0KxRvRRZ5p9l6CmRv9ZKDEZJ%2B9BnDTx7u9H5UYn6lR1R8R1Xlq9nQC0WB7ILkQWVB7gfzUsP5C54uTBY8DpgGEpuJ47Hsijm6H0r&X-Amz-Signature=10f10afa88c5c79b21f2db60f33fd1380aa9c5d28d4f62b1f7a16961273676ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXUU3FZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyObz6KUdyw9gsE%2FQ4Uk1TSLLbWTUNP33Lmj%2BNxwDhcAIgEd34813jGDOSuMoF7znI%2BwN1bnHXYK3p8KvstAwjIYIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG9PhSK2e7wgPofNHyrcA7XRmk02inYlV7DEe6NColbyMSTHfFbsp2jGlKbKiioO%2FbbHOvNXjFllz71MbTuYq5%2FUF3Dec2mAVXf8Wg5gIXqK6LIgeHNf0AlWn8LPVzMlWD0fg%2BfLo9iU9uiSlOjZcwFTfk4jZjS648v7SWXsMsD3Yjus0wMnnGPKxHirGtry1cY9jgjp6zzw8lRusnCI4NCKATWWEUHqPEoi8h9JiuPQwbiGJhCwFrjHGSQNhg%2FsWe1TioPXr%2FY2sH8oxc8T8dmK63m%2F%2F20Q%2FyWs5GsCsFiC6pLL3nvKWp2p4yvQ1VFSPUhaDhd04F5T0fy%2FNMrY24cqOozWUfCRuzVzTdk3I%2FmxOB75KrJA5n%2FBGTcJvsdybSu6l4oUZuumKlsqBDuYAQ6N8L8ruTz0QV%2BJRn%2BnvsBNn6A7ebXfIGcSTZyhiPWF9bSRtrgf3RlE6b5F5XOyNH6wlr5k3CbOw0AoKsYh7eDh0ZSQy8X45oUGHr8CIdju%2BZBbyLegSuH095UP2QMKQJ0Ye6nBEfIuAJBBj8lF0klpaLtYutOjJaEQ83OGZg%2FQMkAYne72EkJJG03%2Fl8BQ4pczZ%2BFFee4wcWl%2F0CxDMrV%2Bx9YIcsrd3r8jAcSrHUCMbmP7yfnAW4d0zcQyMPy%2BuL0GOqUBEYGVfQUzxJLH4gcUxEra%2BBzE8oPTG6ueq6LHPkKeNBubFDlldVE8EMEWnTG8shHVxAalIGOWgqgxDdqBSvaiHUgcWuHpozCrxuJpxfvQ6Il7%2Bp2kWNhZ5Z7j0KxRvRRZ5p9l6CmRv9ZKDEZJ%2B9BnDTx7u9H5UYn6lR1R8R1Xlq9nQC0WB7ILkQWVB7gfzUsP5C54uTBY8DpgGEpuJ47Hsijm6H0r&X-Amz-Signature=b5bd6ea8884a190c0c8f291a423295fcf8c4c5a55135f410eaa422a9a3ca89c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXUU3FZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyObz6KUdyw9gsE%2FQ4Uk1TSLLbWTUNP33Lmj%2BNxwDhcAIgEd34813jGDOSuMoF7znI%2BwN1bnHXYK3p8KvstAwjIYIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG9PhSK2e7wgPofNHyrcA7XRmk02inYlV7DEe6NColbyMSTHfFbsp2jGlKbKiioO%2FbbHOvNXjFllz71MbTuYq5%2FUF3Dec2mAVXf8Wg5gIXqK6LIgeHNf0AlWn8LPVzMlWD0fg%2BfLo9iU9uiSlOjZcwFTfk4jZjS648v7SWXsMsD3Yjus0wMnnGPKxHirGtry1cY9jgjp6zzw8lRusnCI4NCKATWWEUHqPEoi8h9JiuPQwbiGJhCwFrjHGSQNhg%2FsWe1TioPXr%2FY2sH8oxc8T8dmK63m%2F%2F20Q%2FyWs5GsCsFiC6pLL3nvKWp2p4yvQ1VFSPUhaDhd04F5T0fy%2FNMrY24cqOozWUfCRuzVzTdk3I%2FmxOB75KrJA5n%2FBGTcJvsdybSu6l4oUZuumKlsqBDuYAQ6N8L8ruTz0QV%2BJRn%2BnvsBNn6A7ebXfIGcSTZyhiPWF9bSRtrgf3RlE6b5F5XOyNH6wlr5k3CbOw0AoKsYh7eDh0ZSQy8X45oUGHr8CIdju%2BZBbyLegSuH095UP2QMKQJ0Ye6nBEfIuAJBBj8lF0klpaLtYutOjJaEQ83OGZg%2FQMkAYne72EkJJG03%2Fl8BQ4pczZ%2BFFee4wcWl%2F0CxDMrV%2Bx9YIcsrd3r8jAcSrHUCMbmP7yfnAW4d0zcQyMPy%2BuL0GOqUBEYGVfQUzxJLH4gcUxEra%2BBzE8oPTG6ueq6LHPkKeNBubFDlldVE8EMEWnTG8shHVxAalIGOWgqgxDdqBSvaiHUgcWuHpozCrxuJpxfvQ6Il7%2Bp2kWNhZ5Z7j0KxRvRRZ5p9l6CmRv9ZKDEZJ%2B9BnDTx7u9H5UYn6lR1R8R1Xlq9nQC0WB7ILkQWVB7gfzUsP5C54uTBY8DpgGEpuJ47Hsijm6H0r&X-Amz-Signature=cd481ea731f5d9cbc050bb685aff1150396027be55e51e0987ca005398bedc43&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
