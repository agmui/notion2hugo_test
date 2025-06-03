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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHSSLXV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBSNO78hZvbE8pl7s%2B55MSQM9AfgiLtmXYIVCYJ3lS0tAiAoXbODUXLaBRT2TbpMyYlFHiTXRPm5pND96ewSDiJmKCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0P8IOUHikuNqLCJKKtwDMR54ty3Dvkh1duSduFjg4A3BCJ1Tm6ZlyYPjOdo%2FGTWIzoENeJKXkUKlaSZATG58oelsDrexTFG%2BQAJXqQtoq3Tz8U0HhsPUgsF8lG5ihr4D8jUAZ28MIkrr5LjRclBVgXU2KlMMifWFNwiRNetc0n1iRvGGVCNN4ih3CLvWYLN778JxfB37%2BNbjQccjbct3BSHhzIq5r2SlQS1Jxy5Wzp9%2FoEqBfoUo3vuLiL821czeN8VLbAAf5BJMIptcYPSB6RwT%2BMj7NJfNy2pU0LI3in6i9Q6xLGbQIjNIJcZWjDRGs9Ea81Dqz31yyhHRpqbM3mfG%2BYzvy%2FoDFgvpg2xryh3nYvbe%2BO3CMwh2jcrfEqVntZr2gxGS4TfhNKJukjZB4bp2KMedG%2BnajfkfVv4ZXLiV3sDhuxK0VMb6gyZuyzRSXcUwMdxEyCyZooIcxs44%2FR5Pj3W4BB9D0iRul9Tdg9SVKtnko%2B4s7MdwHzwMMMU1LQuXC7hTTcAvQJqt4%2FwVbxxRr%2Be8iCji4ml%2FThcqfVpMQz63ErW3lN7hNNd2misszhTAmlZbR6%2F226aN1WCC%2B7ZUdfuImgEWJMNqu%2F09k0bC6eGNFpj%2BLe8yiqHqbpnrxtkfSdsV0R3oNZ4wkoz5wQY6pgH92ya6evVZ0TP9y79MKgCF5TQAdG2fPRrTxChDtDAIJtuGV4J0kwfv%2BbTUhVTBzz3xK184amckgOqUyy4zod%2Fe7%2FRaaIQYU9rTKE%2FgES0BxrGxOOFeSZhOL1jnYtFhyTqDWOwIHcMCzTXNFqqKOLIUu%2FKHUzKp2oxTmWMfNMZItgIWOL3QkMvusBlicZgnpT%2FS1Z%2BrvhLPC%2FyZTd9iYTUdJOKOa%2BEH&X-Amz-Signature=0b07f35025eed7908814bfb3fb383010330ae9ecbe5e2b83966411f7cbe4ee74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHSSLXV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBSNO78hZvbE8pl7s%2B55MSQM9AfgiLtmXYIVCYJ3lS0tAiAoXbODUXLaBRT2TbpMyYlFHiTXRPm5pND96ewSDiJmKCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0P8IOUHikuNqLCJKKtwDMR54ty3Dvkh1duSduFjg4A3BCJ1Tm6ZlyYPjOdo%2FGTWIzoENeJKXkUKlaSZATG58oelsDrexTFG%2BQAJXqQtoq3Tz8U0HhsPUgsF8lG5ihr4D8jUAZ28MIkrr5LjRclBVgXU2KlMMifWFNwiRNetc0n1iRvGGVCNN4ih3CLvWYLN778JxfB37%2BNbjQccjbct3BSHhzIq5r2SlQS1Jxy5Wzp9%2FoEqBfoUo3vuLiL821czeN8VLbAAf5BJMIptcYPSB6RwT%2BMj7NJfNy2pU0LI3in6i9Q6xLGbQIjNIJcZWjDRGs9Ea81Dqz31yyhHRpqbM3mfG%2BYzvy%2FoDFgvpg2xryh3nYvbe%2BO3CMwh2jcrfEqVntZr2gxGS4TfhNKJukjZB4bp2KMedG%2BnajfkfVv4ZXLiV3sDhuxK0VMb6gyZuyzRSXcUwMdxEyCyZooIcxs44%2FR5Pj3W4BB9D0iRul9Tdg9SVKtnko%2B4s7MdwHzwMMMU1LQuXC7hTTcAvQJqt4%2FwVbxxRr%2Be8iCji4ml%2FThcqfVpMQz63ErW3lN7hNNd2misszhTAmlZbR6%2F226aN1WCC%2B7ZUdfuImgEWJMNqu%2F09k0bC6eGNFpj%2BLe8yiqHqbpnrxtkfSdsV0R3oNZ4wkoz5wQY6pgH92ya6evVZ0TP9y79MKgCF5TQAdG2fPRrTxChDtDAIJtuGV4J0kwfv%2BbTUhVTBzz3xK184amckgOqUyy4zod%2Fe7%2FRaaIQYU9rTKE%2FgES0BxrGxOOFeSZhOL1jnYtFhyTqDWOwIHcMCzTXNFqqKOLIUu%2FKHUzKp2oxTmWMfNMZItgIWOL3QkMvusBlicZgnpT%2FS1Z%2BrvhLPC%2FyZTd9iYTUdJOKOa%2BEH&X-Amz-Signature=cb456bd2d312e49280da679852b54ae2af8f89808c4060a8f51d7f2cd1d661da&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHSSLXV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBSNO78hZvbE8pl7s%2B55MSQM9AfgiLtmXYIVCYJ3lS0tAiAoXbODUXLaBRT2TbpMyYlFHiTXRPm5pND96ewSDiJmKCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0P8IOUHikuNqLCJKKtwDMR54ty3Dvkh1duSduFjg4A3BCJ1Tm6ZlyYPjOdo%2FGTWIzoENeJKXkUKlaSZATG58oelsDrexTFG%2BQAJXqQtoq3Tz8U0HhsPUgsF8lG5ihr4D8jUAZ28MIkrr5LjRclBVgXU2KlMMifWFNwiRNetc0n1iRvGGVCNN4ih3CLvWYLN778JxfB37%2BNbjQccjbct3BSHhzIq5r2SlQS1Jxy5Wzp9%2FoEqBfoUo3vuLiL821czeN8VLbAAf5BJMIptcYPSB6RwT%2BMj7NJfNy2pU0LI3in6i9Q6xLGbQIjNIJcZWjDRGs9Ea81Dqz31yyhHRpqbM3mfG%2BYzvy%2FoDFgvpg2xryh3nYvbe%2BO3CMwh2jcrfEqVntZr2gxGS4TfhNKJukjZB4bp2KMedG%2BnajfkfVv4ZXLiV3sDhuxK0VMb6gyZuyzRSXcUwMdxEyCyZooIcxs44%2FR5Pj3W4BB9D0iRul9Tdg9SVKtnko%2B4s7MdwHzwMMMU1LQuXC7hTTcAvQJqt4%2FwVbxxRr%2Be8iCji4ml%2FThcqfVpMQz63ErW3lN7hNNd2misszhTAmlZbR6%2F226aN1WCC%2B7ZUdfuImgEWJMNqu%2F09k0bC6eGNFpj%2BLe8yiqHqbpnrxtkfSdsV0R3oNZ4wkoz5wQY6pgH92ya6evVZ0TP9y79MKgCF5TQAdG2fPRrTxChDtDAIJtuGV4J0kwfv%2BbTUhVTBzz3xK184amckgOqUyy4zod%2Fe7%2FRaaIQYU9rTKE%2FgES0BxrGxOOFeSZhOL1jnYtFhyTqDWOwIHcMCzTXNFqqKOLIUu%2FKHUzKp2oxTmWMfNMZItgIWOL3QkMvusBlicZgnpT%2FS1Z%2BrvhLPC%2FyZTd9iYTUdJOKOa%2BEH&X-Amz-Signature=7b729901cc37440856ce4b880eee268a4f4d140970f57ab6c12d5e3edd9990b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHSSLXV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBSNO78hZvbE8pl7s%2B55MSQM9AfgiLtmXYIVCYJ3lS0tAiAoXbODUXLaBRT2TbpMyYlFHiTXRPm5pND96ewSDiJmKCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0P8IOUHikuNqLCJKKtwDMR54ty3Dvkh1duSduFjg4A3BCJ1Tm6ZlyYPjOdo%2FGTWIzoENeJKXkUKlaSZATG58oelsDrexTFG%2BQAJXqQtoq3Tz8U0HhsPUgsF8lG5ihr4D8jUAZ28MIkrr5LjRclBVgXU2KlMMifWFNwiRNetc0n1iRvGGVCNN4ih3CLvWYLN778JxfB37%2BNbjQccjbct3BSHhzIq5r2SlQS1Jxy5Wzp9%2FoEqBfoUo3vuLiL821czeN8VLbAAf5BJMIptcYPSB6RwT%2BMj7NJfNy2pU0LI3in6i9Q6xLGbQIjNIJcZWjDRGs9Ea81Dqz31yyhHRpqbM3mfG%2BYzvy%2FoDFgvpg2xryh3nYvbe%2BO3CMwh2jcrfEqVntZr2gxGS4TfhNKJukjZB4bp2KMedG%2BnajfkfVv4ZXLiV3sDhuxK0VMb6gyZuyzRSXcUwMdxEyCyZooIcxs44%2FR5Pj3W4BB9D0iRul9Tdg9SVKtnko%2B4s7MdwHzwMMMU1LQuXC7hTTcAvQJqt4%2FwVbxxRr%2Be8iCji4ml%2FThcqfVpMQz63ErW3lN7hNNd2misszhTAmlZbR6%2F226aN1WCC%2B7ZUdfuImgEWJMNqu%2F09k0bC6eGNFpj%2BLe8yiqHqbpnrxtkfSdsV0R3oNZ4wkoz5wQY6pgH92ya6evVZ0TP9y79MKgCF5TQAdG2fPRrTxChDtDAIJtuGV4J0kwfv%2BbTUhVTBzz3xK184amckgOqUyy4zod%2Fe7%2FRaaIQYU9rTKE%2FgES0BxrGxOOFeSZhOL1jnYtFhyTqDWOwIHcMCzTXNFqqKOLIUu%2FKHUzKp2oxTmWMfNMZItgIWOL3QkMvusBlicZgnpT%2FS1Z%2BrvhLPC%2FyZTd9iYTUdJOKOa%2BEH&X-Amz-Signature=8bf76f9832182964a7f07cd27b7dfdf082cbb994d0e6faf265ef061594635c31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHSSLXV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBSNO78hZvbE8pl7s%2B55MSQM9AfgiLtmXYIVCYJ3lS0tAiAoXbODUXLaBRT2TbpMyYlFHiTXRPm5pND96ewSDiJmKCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0P8IOUHikuNqLCJKKtwDMR54ty3Dvkh1duSduFjg4A3BCJ1Tm6ZlyYPjOdo%2FGTWIzoENeJKXkUKlaSZATG58oelsDrexTFG%2BQAJXqQtoq3Tz8U0HhsPUgsF8lG5ihr4D8jUAZ28MIkrr5LjRclBVgXU2KlMMifWFNwiRNetc0n1iRvGGVCNN4ih3CLvWYLN778JxfB37%2BNbjQccjbct3BSHhzIq5r2SlQS1Jxy5Wzp9%2FoEqBfoUo3vuLiL821czeN8VLbAAf5BJMIptcYPSB6RwT%2BMj7NJfNy2pU0LI3in6i9Q6xLGbQIjNIJcZWjDRGs9Ea81Dqz31yyhHRpqbM3mfG%2BYzvy%2FoDFgvpg2xryh3nYvbe%2BO3CMwh2jcrfEqVntZr2gxGS4TfhNKJukjZB4bp2KMedG%2BnajfkfVv4ZXLiV3sDhuxK0VMb6gyZuyzRSXcUwMdxEyCyZooIcxs44%2FR5Pj3W4BB9D0iRul9Tdg9SVKtnko%2B4s7MdwHzwMMMU1LQuXC7hTTcAvQJqt4%2FwVbxxRr%2Be8iCji4ml%2FThcqfVpMQz63ErW3lN7hNNd2misszhTAmlZbR6%2F226aN1WCC%2B7ZUdfuImgEWJMNqu%2F09k0bC6eGNFpj%2BLe8yiqHqbpnrxtkfSdsV0R3oNZ4wkoz5wQY6pgH92ya6evVZ0TP9y79MKgCF5TQAdG2fPRrTxChDtDAIJtuGV4J0kwfv%2BbTUhVTBzz3xK184amckgOqUyy4zod%2Fe7%2FRaaIQYU9rTKE%2FgES0BxrGxOOFeSZhOL1jnYtFhyTqDWOwIHcMCzTXNFqqKOLIUu%2FKHUzKp2oxTmWMfNMZItgIWOL3QkMvusBlicZgnpT%2FS1Z%2BrvhLPC%2FyZTd9iYTUdJOKOa%2BEH&X-Amz-Signature=631e1476a60440a73acd80875ef68a4f3585865a075a289f226f89805ab1c82a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
