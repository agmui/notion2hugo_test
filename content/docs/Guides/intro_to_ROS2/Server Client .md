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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CJWTVW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRBDQJkPVckJEoXp%2BaUS6AsNiHIoAtD7%2FG6EOGZ431nwIhAIcMWnBXavpQXHsbh5OdlZ1S4RYIMY4w6Qv8Y2ubc66TKv8DCBEQABoMNjM3NDIzMTgzODA1IgxnIqjDjrGDFjGmgeUq3AML71wD2OjZ8dWIlA19QbMgrXiRR%2Bj2XnVXh9m8lZUa00%2FIMBntu68opSiSgoK62R55SgsrkTGhaRoG7tpSHQ2yLwCa49o7An%2F7PCeSEI0HgAtlhNvOaznvQH1UT9h%2B1o6gHPF%2FLmCqIMmcWqRaoGfLsHSy5%2BRiBoJ11b%2FNNuU17q5N7V3hb%2F5dnnTzEF2WUQrNdjLLo0QUDG%2FZAzua27jY3xCidcEwbvGyfV2T6Pq5BtNejiS5%2FmTLG2G4C%2BRGUzD8hiutxGUSGaFos19kOpYHqiTLc2XVEGI2sqvWtvuxoWQobmmmbLsz2wUtdI28ShbulWzJ9bAVrvFw%2FUIaFwnTjjMmB9oRfGjgoWCxGBzYLx7jBqc97A%2FBOApyezdMJKWOtH67%2FtXl%2FmhJUckRPR66Y%2B4cPVHCeL0JQTN9b6NmGA4iuTld019xGJd%2F5REUcJk9bYLemDhm5TiqCe%2B8TruWzzL3c%2F4ZazbQ1Sp077ISDpy976YgpTtuKPTBeIMy5ODLw%2FUsTymOk4qreZXawyq%2FVRME24m%2FvIEkSaCK%2BzRJXBZ50XzSfNZ6dfW2uDN9WWOTzx4Il%2FHmvaUxpDDP8CeCufF6cwPXuVa4Eqzm5UaYLsiueE4pHcBepNFCOTCSpeu9BjqkAU9hyT1f4meuUoSjMAiJkeCFSOO7I7nbkURwgQBJM5E6B4CpNqaFziKYAM7nHdKLaSAOFOPzUqTXdQipXWaqProIgkWGAoAG3v2eDPj9ypV6LMr6s7QK%2F1VXRkkW%2FkZ5w36sXN%2FF822mkpvktbVNmTnWv5lJ8EQYnalvSfauoEmQsDKtda1a7OWICK%2Bes26G26omGjaJzX0AGmckrZGXa3UH6YQE&X-Amz-Signature=93c02e7b4b863eb15eb620d118db4eba13b0c3601bd2ebb709a262d0db415694&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CJWTVW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRBDQJkPVckJEoXp%2BaUS6AsNiHIoAtD7%2FG6EOGZ431nwIhAIcMWnBXavpQXHsbh5OdlZ1S4RYIMY4w6Qv8Y2ubc66TKv8DCBEQABoMNjM3NDIzMTgzODA1IgxnIqjDjrGDFjGmgeUq3AML71wD2OjZ8dWIlA19QbMgrXiRR%2Bj2XnVXh9m8lZUa00%2FIMBntu68opSiSgoK62R55SgsrkTGhaRoG7tpSHQ2yLwCa49o7An%2F7PCeSEI0HgAtlhNvOaznvQH1UT9h%2B1o6gHPF%2FLmCqIMmcWqRaoGfLsHSy5%2BRiBoJ11b%2FNNuU17q5N7V3hb%2F5dnnTzEF2WUQrNdjLLo0QUDG%2FZAzua27jY3xCidcEwbvGyfV2T6Pq5BtNejiS5%2FmTLG2G4C%2BRGUzD8hiutxGUSGaFos19kOpYHqiTLc2XVEGI2sqvWtvuxoWQobmmmbLsz2wUtdI28ShbulWzJ9bAVrvFw%2FUIaFwnTjjMmB9oRfGjgoWCxGBzYLx7jBqc97A%2FBOApyezdMJKWOtH67%2FtXl%2FmhJUckRPR66Y%2B4cPVHCeL0JQTN9b6NmGA4iuTld019xGJd%2F5REUcJk9bYLemDhm5TiqCe%2B8TruWzzL3c%2F4ZazbQ1Sp077ISDpy976YgpTtuKPTBeIMy5ODLw%2FUsTymOk4qreZXawyq%2FVRME24m%2FvIEkSaCK%2BzRJXBZ50XzSfNZ6dfW2uDN9WWOTzx4Il%2FHmvaUxpDDP8CeCufF6cwPXuVa4Eqzm5UaYLsiueE4pHcBepNFCOTCSpeu9BjqkAU9hyT1f4meuUoSjMAiJkeCFSOO7I7nbkURwgQBJM5E6B4CpNqaFziKYAM7nHdKLaSAOFOPzUqTXdQipXWaqProIgkWGAoAG3v2eDPj9ypV6LMr6s7QK%2F1VXRkkW%2FkZ5w36sXN%2FF822mkpvktbVNmTnWv5lJ8EQYnalvSfauoEmQsDKtda1a7OWICK%2Bes26G26omGjaJzX0AGmckrZGXa3UH6YQE&X-Amz-Signature=3bcb7b702aa14a5dbd901ab9cda18c7bbaa63e1c52b1711b7a29d5eae4832b94&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CJWTVW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRBDQJkPVckJEoXp%2BaUS6AsNiHIoAtD7%2FG6EOGZ431nwIhAIcMWnBXavpQXHsbh5OdlZ1S4RYIMY4w6Qv8Y2ubc66TKv8DCBEQABoMNjM3NDIzMTgzODA1IgxnIqjDjrGDFjGmgeUq3AML71wD2OjZ8dWIlA19QbMgrXiRR%2Bj2XnVXh9m8lZUa00%2FIMBntu68opSiSgoK62R55SgsrkTGhaRoG7tpSHQ2yLwCa49o7An%2F7PCeSEI0HgAtlhNvOaznvQH1UT9h%2B1o6gHPF%2FLmCqIMmcWqRaoGfLsHSy5%2BRiBoJ11b%2FNNuU17q5N7V3hb%2F5dnnTzEF2WUQrNdjLLo0QUDG%2FZAzua27jY3xCidcEwbvGyfV2T6Pq5BtNejiS5%2FmTLG2G4C%2BRGUzD8hiutxGUSGaFos19kOpYHqiTLc2XVEGI2sqvWtvuxoWQobmmmbLsz2wUtdI28ShbulWzJ9bAVrvFw%2FUIaFwnTjjMmB9oRfGjgoWCxGBzYLx7jBqc97A%2FBOApyezdMJKWOtH67%2FtXl%2FmhJUckRPR66Y%2B4cPVHCeL0JQTN9b6NmGA4iuTld019xGJd%2F5REUcJk9bYLemDhm5TiqCe%2B8TruWzzL3c%2F4ZazbQ1Sp077ISDpy976YgpTtuKPTBeIMy5ODLw%2FUsTymOk4qreZXawyq%2FVRME24m%2FvIEkSaCK%2BzRJXBZ50XzSfNZ6dfW2uDN9WWOTzx4Il%2FHmvaUxpDDP8CeCufF6cwPXuVa4Eqzm5UaYLsiueE4pHcBepNFCOTCSpeu9BjqkAU9hyT1f4meuUoSjMAiJkeCFSOO7I7nbkURwgQBJM5E6B4CpNqaFziKYAM7nHdKLaSAOFOPzUqTXdQipXWaqProIgkWGAoAG3v2eDPj9ypV6LMr6s7QK%2F1VXRkkW%2FkZ5w36sXN%2FF822mkpvktbVNmTnWv5lJ8EQYnalvSfauoEmQsDKtda1a7OWICK%2Bes26G26omGjaJzX0AGmckrZGXa3UH6YQE&X-Amz-Signature=4df18c57bd98bb655f1b1ce6a1de22d663eccdfe10789935e310eacaaf91147b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CJWTVW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRBDQJkPVckJEoXp%2BaUS6AsNiHIoAtD7%2FG6EOGZ431nwIhAIcMWnBXavpQXHsbh5OdlZ1S4RYIMY4w6Qv8Y2ubc66TKv8DCBEQABoMNjM3NDIzMTgzODA1IgxnIqjDjrGDFjGmgeUq3AML71wD2OjZ8dWIlA19QbMgrXiRR%2Bj2XnVXh9m8lZUa00%2FIMBntu68opSiSgoK62R55SgsrkTGhaRoG7tpSHQ2yLwCa49o7An%2F7PCeSEI0HgAtlhNvOaznvQH1UT9h%2B1o6gHPF%2FLmCqIMmcWqRaoGfLsHSy5%2BRiBoJ11b%2FNNuU17q5N7V3hb%2F5dnnTzEF2WUQrNdjLLo0QUDG%2FZAzua27jY3xCidcEwbvGyfV2T6Pq5BtNejiS5%2FmTLG2G4C%2BRGUzD8hiutxGUSGaFos19kOpYHqiTLc2XVEGI2sqvWtvuxoWQobmmmbLsz2wUtdI28ShbulWzJ9bAVrvFw%2FUIaFwnTjjMmB9oRfGjgoWCxGBzYLx7jBqc97A%2FBOApyezdMJKWOtH67%2FtXl%2FmhJUckRPR66Y%2B4cPVHCeL0JQTN9b6NmGA4iuTld019xGJd%2F5REUcJk9bYLemDhm5TiqCe%2B8TruWzzL3c%2F4ZazbQ1Sp077ISDpy976YgpTtuKPTBeIMy5ODLw%2FUsTymOk4qreZXawyq%2FVRME24m%2FvIEkSaCK%2BzRJXBZ50XzSfNZ6dfW2uDN9WWOTzx4Il%2FHmvaUxpDDP8CeCufF6cwPXuVa4Eqzm5UaYLsiueE4pHcBepNFCOTCSpeu9BjqkAU9hyT1f4meuUoSjMAiJkeCFSOO7I7nbkURwgQBJM5E6B4CpNqaFziKYAM7nHdKLaSAOFOPzUqTXdQipXWaqProIgkWGAoAG3v2eDPj9ypV6LMr6s7QK%2F1VXRkkW%2FkZ5w36sXN%2FF822mkpvktbVNmTnWv5lJ8EQYnalvSfauoEmQsDKtda1a7OWICK%2Bes26G26omGjaJzX0AGmckrZGXa3UH6YQE&X-Amz-Signature=d1f4b681f5f92baec174327e3e139c36972bca91005fa4c9e8400191172d607e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CJWTVW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRBDQJkPVckJEoXp%2BaUS6AsNiHIoAtD7%2FG6EOGZ431nwIhAIcMWnBXavpQXHsbh5OdlZ1S4RYIMY4w6Qv8Y2ubc66TKv8DCBEQABoMNjM3NDIzMTgzODA1IgxnIqjDjrGDFjGmgeUq3AML71wD2OjZ8dWIlA19QbMgrXiRR%2Bj2XnVXh9m8lZUa00%2FIMBntu68opSiSgoK62R55SgsrkTGhaRoG7tpSHQ2yLwCa49o7An%2F7PCeSEI0HgAtlhNvOaznvQH1UT9h%2B1o6gHPF%2FLmCqIMmcWqRaoGfLsHSy5%2BRiBoJ11b%2FNNuU17q5N7V3hb%2F5dnnTzEF2WUQrNdjLLo0QUDG%2FZAzua27jY3xCidcEwbvGyfV2T6Pq5BtNejiS5%2FmTLG2G4C%2BRGUzD8hiutxGUSGaFos19kOpYHqiTLc2XVEGI2sqvWtvuxoWQobmmmbLsz2wUtdI28ShbulWzJ9bAVrvFw%2FUIaFwnTjjMmB9oRfGjgoWCxGBzYLx7jBqc97A%2FBOApyezdMJKWOtH67%2FtXl%2FmhJUckRPR66Y%2B4cPVHCeL0JQTN9b6NmGA4iuTld019xGJd%2F5REUcJk9bYLemDhm5TiqCe%2B8TruWzzL3c%2F4ZazbQ1Sp077ISDpy976YgpTtuKPTBeIMy5ODLw%2FUsTymOk4qreZXawyq%2FVRME24m%2FvIEkSaCK%2BzRJXBZ50XzSfNZ6dfW2uDN9WWOTzx4Il%2FHmvaUxpDDP8CeCufF6cwPXuVa4Eqzm5UaYLsiueE4pHcBepNFCOTCSpeu9BjqkAU9hyT1f4meuUoSjMAiJkeCFSOO7I7nbkURwgQBJM5E6B4CpNqaFziKYAM7nHdKLaSAOFOPzUqTXdQipXWaqProIgkWGAoAG3v2eDPj9ypV6LMr6s7QK%2F1VXRkkW%2FkZ5w36sXN%2FF822mkpvktbVNmTnWv5lJ8EQYnalvSfauoEmQsDKtda1a7OWICK%2Bes26G26omGjaJzX0AGmckrZGXa3UH6YQE&X-Amz-Signature=2d3348a941fb495d6389b2c9ebb4720ae4af4f9cd0607729314259937f7fb9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
