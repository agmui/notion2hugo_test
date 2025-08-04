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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU4ROZY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICaRUmxCZ2tbGPcNvEQxE4OnUPtoqMaLZ4ohYRQrgWeYAiEAo7HlLEI9o%2F2n0QrnAXILMOEtgCiMxT0es6Pg6ad9Zu0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHSNLiAJMlHMJ9KE%2FSrcAzDxCTSK%2FbD6rl4xOq72jGT6gVDM2ur3KG48SJxW9e8MFjAquJCwzgLFNtuTqGxOJuj1EE%2BiRR8WhcGfOUc8mYvbSRvRI05IPXWIpl8%2BWhPs%2Fj5Tn5fBZXnHA6hPgI40l45WRNlcqWA%2BK3zE2Dhr05CdK%2BHohnxYufauGpKWsipoi%2BN23XpUd7O6RJ%2Fa7xFjcyOZDefK7tChtACveB%2FJ1W1WyP%2BiqlePIA4gFG9MyKVK3Y%2FBl4AlAx2TK%2FssaVYtiD3yQm8lCY4VDouAPjog1C155dA8rnTYzoMmMqPIPCFbIOaeDnhQo3HJp9udfsUJYThADV9XNkB7OiOnfxE1PL%2Fqnj9pSC%2FnLwq%2FTmzXX6j%2BphM3xbw%2Be1dEcRXROMNcHfA6Tnb%2FCeDiXuWXc9pPNvvXBq%2BhqUtO4QVyShmTvwfjP79dy7of9VGnKMAofmZSTVP12JeRaLnP3lDFWRh1EkOHJpAUeCZ1ePDVWbyfwruLIQuJ6syoYjpbvwQfFqIjoX1Hd%2B%2BCKXSzdamLP3rhGQMkmt6%2F243QB0tku9vf%2FthOM0j7Dmw1YXQk92yVwTijRvkEjrgAdn5hM5IUQvUYnQghMKgCUWToA8rzQrWnl6W0dhTQk6rWPvTgJ3FnMPimwsQGOqUBmnFCHb6IWBxRDDRTjSaIyJkPjjoIG1mXVPDKkF1glQbKp%2FzNPInDcV0jUo%2F3boKl66Ls9aiFh0CmlQXGNBY72QEtkCAXgiFYwjzsdeDxx2xpN5gOXAOxZ6snhXPUs9%2BazDl7fasYcNOhturixZYCxwlND3L5hB4ErpX029Kq%2BtorsIRhGjtWCNKqtp%2BjUMmHukejPt1i6P4NFmoOmTJaFh6iqn6F&X-Amz-Signature=ae9a705f872d28cecf3588c36b2ae9a64a19bf67e2978e615aa158884d37dde4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU4ROZY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICaRUmxCZ2tbGPcNvEQxE4OnUPtoqMaLZ4ohYRQrgWeYAiEAo7HlLEI9o%2F2n0QrnAXILMOEtgCiMxT0es6Pg6ad9Zu0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHSNLiAJMlHMJ9KE%2FSrcAzDxCTSK%2FbD6rl4xOq72jGT6gVDM2ur3KG48SJxW9e8MFjAquJCwzgLFNtuTqGxOJuj1EE%2BiRR8WhcGfOUc8mYvbSRvRI05IPXWIpl8%2BWhPs%2Fj5Tn5fBZXnHA6hPgI40l45WRNlcqWA%2BK3zE2Dhr05CdK%2BHohnxYufauGpKWsipoi%2BN23XpUd7O6RJ%2Fa7xFjcyOZDefK7tChtACveB%2FJ1W1WyP%2BiqlePIA4gFG9MyKVK3Y%2FBl4AlAx2TK%2FssaVYtiD3yQm8lCY4VDouAPjog1C155dA8rnTYzoMmMqPIPCFbIOaeDnhQo3HJp9udfsUJYThADV9XNkB7OiOnfxE1PL%2Fqnj9pSC%2FnLwq%2FTmzXX6j%2BphM3xbw%2Be1dEcRXROMNcHfA6Tnb%2FCeDiXuWXc9pPNvvXBq%2BhqUtO4QVyShmTvwfjP79dy7of9VGnKMAofmZSTVP12JeRaLnP3lDFWRh1EkOHJpAUeCZ1ePDVWbyfwruLIQuJ6syoYjpbvwQfFqIjoX1Hd%2B%2BCKXSzdamLP3rhGQMkmt6%2F243QB0tku9vf%2FthOM0j7Dmw1YXQk92yVwTijRvkEjrgAdn5hM5IUQvUYnQghMKgCUWToA8rzQrWnl6W0dhTQk6rWPvTgJ3FnMPimwsQGOqUBmnFCHb6IWBxRDDRTjSaIyJkPjjoIG1mXVPDKkF1glQbKp%2FzNPInDcV0jUo%2F3boKl66Ls9aiFh0CmlQXGNBY72QEtkCAXgiFYwjzsdeDxx2xpN5gOXAOxZ6snhXPUs9%2BazDl7fasYcNOhturixZYCxwlND3L5hB4ErpX029Kq%2BtorsIRhGjtWCNKqtp%2BjUMmHukejPt1i6P4NFmoOmTJaFh6iqn6F&X-Amz-Signature=bd5ffee2c684ccc0ff30f97c97e4f1c9ea6c5c237af2fbe6ac814728f654bc99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU4ROZY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICaRUmxCZ2tbGPcNvEQxE4OnUPtoqMaLZ4ohYRQrgWeYAiEAo7HlLEI9o%2F2n0QrnAXILMOEtgCiMxT0es6Pg6ad9Zu0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHSNLiAJMlHMJ9KE%2FSrcAzDxCTSK%2FbD6rl4xOq72jGT6gVDM2ur3KG48SJxW9e8MFjAquJCwzgLFNtuTqGxOJuj1EE%2BiRR8WhcGfOUc8mYvbSRvRI05IPXWIpl8%2BWhPs%2Fj5Tn5fBZXnHA6hPgI40l45WRNlcqWA%2BK3zE2Dhr05CdK%2BHohnxYufauGpKWsipoi%2BN23XpUd7O6RJ%2Fa7xFjcyOZDefK7tChtACveB%2FJ1W1WyP%2BiqlePIA4gFG9MyKVK3Y%2FBl4AlAx2TK%2FssaVYtiD3yQm8lCY4VDouAPjog1C155dA8rnTYzoMmMqPIPCFbIOaeDnhQo3HJp9udfsUJYThADV9XNkB7OiOnfxE1PL%2Fqnj9pSC%2FnLwq%2FTmzXX6j%2BphM3xbw%2Be1dEcRXROMNcHfA6Tnb%2FCeDiXuWXc9pPNvvXBq%2BhqUtO4QVyShmTvwfjP79dy7of9VGnKMAofmZSTVP12JeRaLnP3lDFWRh1EkOHJpAUeCZ1ePDVWbyfwruLIQuJ6syoYjpbvwQfFqIjoX1Hd%2B%2BCKXSzdamLP3rhGQMkmt6%2F243QB0tku9vf%2FthOM0j7Dmw1YXQk92yVwTijRvkEjrgAdn5hM5IUQvUYnQghMKgCUWToA8rzQrWnl6W0dhTQk6rWPvTgJ3FnMPimwsQGOqUBmnFCHb6IWBxRDDRTjSaIyJkPjjoIG1mXVPDKkF1glQbKp%2FzNPInDcV0jUo%2F3boKl66Ls9aiFh0CmlQXGNBY72QEtkCAXgiFYwjzsdeDxx2xpN5gOXAOxZ6snhXPUs9%2BazDl7fasYcNOhturixZYCxwlND3L5hB4ErpX029Kq%2BtorsIRhGjtWCNKqtp%2BjUMmHukejPt1i6P4NFmoOmTJaFh6iqn6F&X-Amz-Signature=a85835855d2426997cb5cf977f72c72c3b2b989d24624d57f8f609f0ee7ab585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU4ROZY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICaRUmxCZ2tbGPcNvEQxE4OnUPtoqMaLZ4ohYRQrgWeYAiEAo7HlLEI9o%2F2n0QrnAXILMOEtgCiMxT0es6Pg6ad9Zu0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHSNLiAJMlHMJ9KE%2FSrcAzDxCTSK%2FbD6rl4xOq72jGT6gVDM2ur3KG48SJxW9e8MFjAquJCwzgLFNtuTqGxOJuj1EE%2BiRR8WhcGfOUc8mYvbSRvRI05IPXWIpl8%2BWhPs%2Fj5Tn5fBZXnHA6hPgI40l45WRNlcqWA%2BK3zE2Dhr05CdK%2BHohnxYufauGpKWsipoi%2BN23XpUd7O6RJ%2Fa7xFjcyOZDefK7tChtACveB%2FJ1W1WyP%2BiqlePIA4gFG9MyKVK3Y%2FBl4AlAx2TK%2FssaVYtiD3yQm8lCY4VDouAPjog1C155dA8rnTYzoMmMqPIPCFbIOaeDnhQo3HJp9udfsUJYThADV9XNkB7OiOnfxE1PL%2Fqnj9pSC%2FnLwq%2FTmzXX6j%2BphM3xbw%2Be1dEcRXROMNcHfA6Tnb%2FCeDiXuWXc9pPNvvXBq%2BhqUtO4QVyShmTvwfjP79dy7of9VGnKMAofmZSTVP12JeRaLnP3lDFWRh1EkOHJpAUeCZ1ePDVWbyfwruLIQuJ6syoYjpbvwQfFqIjoX1Hd%2B%2BCKXSzdamLP3rhGQMkmt6%2F243QB0tku9vf%2FthOM0j7Dmw1YXQk92yVwTijRvkEjrgAdn5hM5IUQvUYnQghMKgCUWToA8rzQrWnl6W0dhTQk6rWPvTgJ3FnMPimwsQGOqUBmnFCHb6IWBxRDDRTjSaIyJkPjjoIG1mXVPDKkF1glQbKp%2FzNPInDcV0jUo%2F3boKl66Ls9aiFh0CmlQXGNBY72QEtkCAXgiFYwjzsdeDxx2xpN5gOXAOxZ6snhXPUs9%2BazDl7fasYcNOhturixZYCxwlND3L5hB4ErpX029Kq%2BtorsIRhGjtWCNKqtp%2BjUMmHukejPt1i6P4NFmoOmTJaFh6iqn6F&X-Amz-Signature=a48d1d717f887e15376392ed13e11892131bf0ff733fc9be579fde4ccdd6e9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU4ROZY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICaRUmxCZ2tbGPcNvEQxE4OnUPtoqMaLZ4ohYRQrgWeYAiEAo7HlLEI9o%2F2n0QrnAXILMOEtgCiMxT0es6Pg6ad9Zu0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHSNLiAJMlHMJ9KE%2FSrcAzDxCTSK%2FbD6rl4xOq72jGT6gVDM2ur3KG48SJxW9e8MFjAquJCwzgLFNtuTqGxOJuj1EE%2BiRR8WhcGfOUc8mYvbSRvRI05IPXWIpl8%2BWhPs%2Fj5Tn5fBZXnHA6hPgI40l45WRNlcqWA%2BK3zE2Dhr05CdK%2BHohnxYufauGpKWsipoi%2BN23XpUd7O6RJ%2Fa7xFjcyOZDefK7tChtACveB%2FJ1W1WyP%2BiqlePIA4gFG9MyKVK3Y%2FBl4AlAx2TK%2FssaVYtiD3yQm8lCY4VDouAPjog1C155dA8rnTYzoMmMqPIPCFbIOaeDnhQo3HJp9udfsUJYThADV9XNkB7OiOnfxE1PL%2Fqnj9pSC%2FnLwq%2FTmzXX6j%2BphM3xbw%2Be1dEcRXROMNcHfA6Tnb%2FCeDiXuWXc9pPNvvXBq%2BhqUtO4QVyShmTvwfjP79dy7of9VGnKMAofmZSTVP12JeRaLnP3lDFWRh1EkOHJpAUeCZ1ePDVWbyfwruLIQuJ6syoYjpbvwQfFqIjoX1Hd%2B%2BCKXSzdamLP3rhGQMkmt6%2F243QB0tku9vf%2FthOM0j7Dmw1YXQk92yVwTijRvkEjrgAdn5hM5IUQvUYnQghMKgCUWToA8rzQrWnl6W0dhTQk6rWPvTgJ3FnMPimwsQGOqUBmnFCHb6IWBxRDDRTjSaIyJkPjjoIG1mXVPDKkF1glQbKp%2FzNPInDcV0jUo%2F3boKl66Ls9aiFh0CmlQXGNBY72QEtkCAXgiFYwjzsdeDxx2xpN5gOXAOxZ6snhXPUs9%2BazDl7fasYcNOhturixZYCxwlND3L5hB4ErpX029Kq%2BtorsIRhGjtWCNKqtp%2BjUMmHukejPt1i6P4NFmoOmTJaFh6iqn6F&X-Amz-Signature=b69e83c728361fb6aa7489aa653142d10afa02a7c4c49a7f78ae63f79a452c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
