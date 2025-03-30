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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOXXFFA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC4Sraa2iQ0CGRHm9q9%2BFUT38edBcucmkPZ%2Bndwhtu2jAiEA68%2FKT8uwHNoAFZbQFf45FA8EkhXFqwhfON3kYPDTID8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC10DbOI6ij2V2rFircA5EddwveMOWGneBzXhglGo%2Bugg%2B%2F8iJizaL1PValYbmwZruI3ZLUvu%2BDigH58gfg38pmKwZ1yGpeZTFWQw%2FMXZo2hKAE5k341xQCVYxCrycgvcB4aV2JNEGV9fLxjFTDxGf3zUdcaXjs10nWaHKhViIueGk6RofuPx%2FYkfBP6ldq%2BeN%2FHWAi2qKnlZVE44m3smj3AlGMZUWjtCNx0nHtB%2FmmLTRnduQS%2FQP5FggQ0ov94GXEXVKWUbsWscl4UAZHIk8MmdADm%2B9JOrKJDOfw9m9iCwCnWEe1UuDAd9xjtWj4NB1x77i11iJaYDeKS%2BY%2FzVIdui1aEYugvCeQIodwdBO1uGsS5nu2vVIBECg2BX796FSc1HwjRGFozlJ31cPGlla7O5Q95GNT%2B85mAriNnm%2FMLfZSw99dP3crypzgKZ1PtqEud7%2BOnksVw%2B68kpYiB7ty%2BJPF%2F%2Fe0v2GKK37YgamrWbxNd7xlcecGrcbLNxIHj9TrT1pGNO%2BVZfCLIzYqXfnGSmalGKNecS1B36CEZ%2FFonscq2hGgQYo%2FXRRVs0GZSWerz0coFPX8RA1tIEc5cDARWKAPYf8CMJk6ov4Mp3fkmmtBqnL2fU7KCXd3xLs3nL6JGtD%2BFJrrhMvfMJTYpr8GOqUBv0SAAlxxT14AcPfMGdwrEZnoZP9oeQCWd2QLH4QFy1Na8Rns0vBivGk3xt332tI3%2BpyNJ5fXlmNrm0efe%2FZqn7mNDjhMPZEoyv5gjS261ct%2BIojxSc%2FPKYL3CTaajeXTrLzzqiHjy8MPO9Ovo6N30a7eABtoZPOi6Z2yJJ1kyLXPUyQG3Jb6VKQWj0tU3w87TT%2BtwZmnulgIOFU7bPvbSfmvl9tV&X-Amz-Signature=2d4488db519c4c31fc4096a1103a19109cef0e6ef7331bf91528ca0152cef7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOXXFFA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC4Sraa2iQ0CGRHm9q9%2BFUT38edBcucmkPZ%2Bndwhtu2jAiEA68%2FKT8uwHNoAFZbQFf45FA8EkhXFqwhfON3kYPDTID8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC10DbOI6ij2V2rFircA5EddwveMOWGneBzXhglGo%2Bugg%2B%2F8iJizaL1PValYbmwZruI3ZLUvu%2BDigH58gfg38pmKwZ1yGpeZTFWQw%2FMXZo2hKAE5k341xQCVYxCrycgvcB4aV2JNEGV9fLxjFTDxGf3zUdcaXjs10nWaHKhViIueGk6RofuPx%2FYkfBP6ldq%2BeN%2FHWAi2qKnlZVE44m3smj3AlGMZUWjtCNx0nHtB%2FmmLTRnduQS%2FQP5FggQ0ov94GXEXVKWUbsWscl4UAZHIk8MmdADm%2B9JOrKJDOfw9m9iCwCnWEe1UuDAd9xjtWj4NB1x77i11iJaYDeKS%2BY%2FzVIdui1aEYugvCeQIodwdBO1uGsS5nu2vVIBECg2BX796FSc1HwjRGFozlJ31cPGlla7O5Q95GNT%2B85mAriNnm%2FMLfZSw99dP3crypzgKZ1PtqEud7%2BOnksVw%2B68kpYiB7ty%2BJPF%2F%2Fe0v2GKK37YgamrWbxNd7xlcecGrcbLNxIHj9TrT1pGNO%2BVZfCLIzYqXfnGSmalGKNecS1B36CEZ%2FFonscq2hGgQYo%2FXRRVs0GZSWerz0coFPX8RA1tIEc5cDARWKAPYf8CMJk6ov4Mp3fkmmtBqnL2fU7KCXd3xLs3nL6JGtD%2BFJrrhMvfMJTYpr8GOqUBv0SAAlxxT14AcPfMGdwrEZnoZP9oeQCWd2QLH4QFy1Na8Rns0vBivGk3xt332tI3%2BpyNJ5fXlmNrm0efe%2FZqn7mNDjhMPZEoyv5gjS261ct%2BIojxSc%2FPKYL3CTaajeXTrLzzqiHjy8MPO9Ovo6N30a7eABtoZPOi6Z2yJJ1kyLXPUyQG3Jb6VKQWj0tU3w87TT%2BtwZmnulgIOFU7bPvbSfmvl9tV&X-Amz-Signature=2f04b39ef5c289fb245a7091876cf73a913980c1ff804be66c4b08b8cc251656&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOXXFFA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC4Sraa2iQ0CGRHm9q9%2BFUT38edBcucmkPZ%2Bndwhtu2jAiEA68%2FKT8uwHNoAFZbQFf45FA8EkhXFqwhfON3kYPDTID8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC10DbOI6ij2V2rFircA5EddwveMOWGneBzXhglGo%2Bugg%2B%2F8iJizaL1PValYbmwZruI3ZLUvu%2BDigH58gfg38pmKwZ1yGpeZTFWQw%2FMXZo2hKAE5k341xQCVYxCrycgvcB4aV2JNEGV9fLxjFTDxGf3zUdcaXjs10nWaHKhViIueGk6RofuPx%2FYkfBP6ldq%2BeN%2FHWAi2qKnlZVE44m3smj3AlGMZUWjtCNx0nHtB%2FmmLTRnduQS%2FQP5FggQ0ov94GXEXVKWUbsWscl4UAZHIk8MmdADm%2B9JOrKJDOfw9m9iCwCnWEe1UuDAd9xjtWj4NB1x77i11iJaYDeKS%2BY%2FzVIdui1aEYugvCeQIodwdBO1uGsS5nu2vVIBECg2BX796FSc1HwjRGFozlJ31cPGlla7O5Q95GNT%2B85mAriNnm%2FMLfZSw99dP3crypzgKZ1PtqEud7%2BOnksVw%2B68kpYiB7ty%2BJPF%2F%2Fe0v2GKK37YgamrWbxNd7xlcecGrcbLNxIHj9TrT1pGNO%2BVZfCLIzYqXfnGSmalGKNecS1B36CEZ%2FFonscq2hGgQYo%2FXRRVs0GZSWerz0coFPX8RA1tIEc5cDARWKAPYf8CMJk6ov4Mp3fkmmtBqnL2fU7KCXd3xLs3nL6JGtD%2BFJrrhMvfMJTYpr8GOqUBv0SAAlxxT14AcPfMGdwrEZnoZP9oeQCWd2QLH4QFy1Na8Rns0vBivGk3xt332tI3%2BpyNJ5fXlmNrm0efe%2FZqn7mNDjhMPZEoyv5gjS261ct%2BIojxSc%2FPKYL3CTaajeXTrLzzqiHjy8MPO9Ovo6N30a7eABtoZPOi6Z2yJJ1kyLXPUyQG3Jb6VKQWj0tU3w87TT%2BtwZmnulgIOFU7bPvbSfmvl9tV&X-Amz-Signature=a2c006deeb122e44f5637f4bc66394c38909956f1957fb3c51370b9e34608340&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOXXFFA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC4Sraa2iQ0CGRHm9q9%2BFUT38edBcucmkPZ%2Bndwhtu2jAiEA68%2FKT8uwHNoAFZbQFf45FA8EkhXFqwhfON3kYPDTID8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC10DbOI6ij2V2rFircA5EddwveMOWGneBzXhglGo%2Bugg%2B%2F8iJizaL1PValYbmwZruI3ZLUvu%2BDigH58gfg38pmKwZ1yGpeZTFWQw%2FMXZo2hKAE5k341xQCVYxCrycgvcB4aV2JNEGV9fLxjFTDxGf3zUdcaXjs10nWaHKhViIueGk6RofuPx%2FYkfBP6ldq%2BeN%2FHWAi2qKnlZVE44m3smj3AlGMZUWjtCNx0nHtB%2FmmLTRnduQS%2FQP5FggQ0ov94GXEXVKWUbsWscl4UAZHIk8MmdADm%2B9JOrKJDOfw9m9iCwCnWEe1UuDAd9xjtWj4NB1x77i11iJaYDeKS%2BY%2FzVIdui1aEYugvCeQIodwdBO1uGsS5nu2vVIBECg2BX796FSc1HwjRGFozlJ31cPGlla7O5Q95GNT%2B85mAriNnm%2FMLfZSw99dP3crypzgKZ1PtqEud7%2BOnksVw%2B68kpYiB7ty%2BJPF%2F%2Fe0v2GKK37YgamrWbxNd7xlcecGrcbLNxIHj9TrT1pGNO%2BVZfCLIzYqXfnGSmalGKNecS1B36CEZ%2FFonscq2hGgQYo%2FXRRVs0GZSWerz0coFPX8RA1tIEc5cDARWKAPYf8CMJk6ov4Mp3fkmmtBqnL2fU7KCXd3xLs3nL6JGtD%2BFJrrhMvfMJTYpr8GOqUBv0SAAlxxT14AcPfMGdwrEZnoZP9oeQCWd2QLH4QFy1Na8Rns0vBivGk3xt332tI3%2BpyNJ5fXlmNrm0efe%2FZqn7mNDjhMPZEoyv5gjS261ct%2BIojxSc%2FPKYL3CTaajeXTrLzzqiHjy8MPO9Ovo6N30a7eABtoZPOi6Z2yJJ1kyLXPUyQG3Jb6VKQWj0tU3w87TT%2BtwZmnulgIOFU7bPvbSfmvl9tV&X-Amz-Signature=52b01a25f31ee8a2f08f451e00b9764587ea7f4d89172c928fd74cd970e935b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOXXFFA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC4Sraa2iQ0CGRHm9q9%2BFUT38edBcucmkPZ%2Bndwhtu2jAiEA68%2FKT8uwHNoAFZbQFf45FA8EkhXFqwhfON3kYPDTID8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC10DbOI6ij2V2rFircA5EddwveMOWGneBzXhglGo%2Bugg%2B%2F8iJizaL1PValYbmwZruI3ZLUvu%2BDigH58gfg38pmKwZ1yGpeZTFWQw%2FMXZo2hKAE5k341xQCVYxCrycgvcB4aV2JNEGV9fLxjFTDxGf3zUdcaXjs10nWaHKhViIueGk6RofuPx%2FYkfBP6ldq%2BeN%2FHWAi2qKnlZVE44m3smj3AlGMZUWjtCNx0nHtB%2FmmLTRnduQS%2FQP5FggQ0ov94GXEXVKWUbsWscl4UAZHIk8MmdADm%2B9JOrKJDOfw9m9iCwCnWEe1UuDAd9xjtWj4NB1x77i11iJaYDeKS%2BY%2FzVIdui1aEYugvCeQIodwdBO1uGsS5nu2vVIBECg2BX796FSc1HwjRGFozlJ31cPGlla7O5Q95GNT%2B85mAriNnm%2FMLfZSw99dP3crypzgKZ1PtqEud7%2BOnksVw%2B68kpYiB7ty%2BJPF%2F%2Fe0v2GKK37YgamrWbxNd7xlcecGrcbLNxIHj9TrT1pGNO%2BVZfCLIzYqXfnGSmalGKNecS1B36CEZ%2FFonscq2hGgQYo%2FXRRVs0GZSWerz0coFPX8RA1tIEc5cDARWKAPYf8CMJk6ov4Mp3fkmmtBqnL2fU7KCXd3xLs3nL6JGtD%2BFJrrhMvfMJTYpr8GOqUBv0SAAlxxT14AcPfMGdwrEZnoZP9oeQCWd2QLH4QFy1Na8Rns0vBivGk3xt332tI3%2BpyNJ5fXlmNrm0efe%2FZqn7mNDjhMPZEoyv5gjS261ct%2BIojxSc%2FPKYL3CTaajeXTrLzzqiHjy8MPO9Ovo6N30a7eABtoZPOi6Z2yJJ1kyLXPUyQG3Jb6VKQWj0tU3w87TT%2BtwZmnulgIOFU7bPvbSfmvl9tV&X-Amz-Signature=9ec81e8f4de18d3962cc533cc7c2adfe59833c8991cfdb968efc1066858ce0ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
