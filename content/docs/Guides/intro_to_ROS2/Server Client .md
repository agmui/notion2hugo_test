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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5VPYY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCdtGXXBE3K1CLuT1VxEnnit9o8syN6IHr62TJ%2Bw5kjuQIgefnaC3cvvYFRM7HwR4azLcFlFvdJDvlEgjU2QnaDm%2Bkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPk9dGRhfkMI9V7ZLSrcA1bIJ%2BZSnuJTI30qD0t%2BtMyDc9MCg0ZUXqDEqK1uGsgdKYB%2B73xuRcLKKLF1hzyf%2BBTUJtXN1P9Me%2FnTCeyRQ6QE8pZu%2FjB%2FkI4UM7wX%2FD4SLpDN2gEqZ8oK%2FfykQpe2wN8pYSGRikv86t0ann7aM%2FYpP4P0gjFZ6rxQmjucUylqXSPxfBaZxtKIIdrGeXaYx%2BxEtu17%2Bm80JYg1pM78WvogYhuee9IAETcouFUuGEO4NpCD0gXaQVBnTEjX8QHkdfLYo3K3IFDnQJVbo%2BpMNz%2FHsN1mtRUF%2Bn%2BrQLIBcFQ01s7VaOuLOhT9BerEDsSWTezglLeYm5aINm7FqrymUVgfuS7OTbMFHAUVX1d2dTbFbew%2BEN%2Bj11SYTkwJ5kPH40Mym3P9JSV0ovsTU0083RvSXmlEYlfmY8IF3ekC8pPPyr0VKLG8nf2sklPqgC11mN0Bmq6vVl0Zwb2pUU0fY%2B1Q%2BeaU8%2B5jv%2BcU9qPcqkZMqAvmf9ps6KpEizaxmJiW9Mv7V%2BZ%2B2bz%2F1yQBABKexlodZun5UgY28sPw8t1bIEcyC1MHPCtgdM%2FDPSUgAqnXG5DUcXSVS%2BWtFmij4vlMk%2BS90kgHzK5AX%2Bw8msZCTwDGDTbFvEspOraVtUSqMOSQtr4GOqUBRPw5XSrJzyGKaA9rJhvVJX0XW5Anroz1c9zxsUQUUHh7L92r%2FgS%2FaMu5EhoZTN2cXbewsX2jOr32WDfgtxTd35PR9W3Wsoh2qJ7CnfCIWRE7Olqa%2FycQJvydLX0vIjlqNFxizDxzTKRyZe1uvKPnNCLZrDMMoyMqFxN%2B8q%2BqWqpA%2FpjLBaTn1Meptc6jPFZbZGvHvSFml4S4%2F413ZxLtimDe32MK&X-Amz-Signature=cecfe72a22dac0fa56d554a9cf5181d43cb280e55635d4a13ef96ed96044158b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5VPYY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCdtGXXBE3K1CLuT1VxEnnit9o8syN6IHr62TJ%2Bw5kjuQIgefnaC3cvvYFRM7HwR4azLcFlFvdJDvlEgjU2QnaDm%2Bkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPk9dGRhfkMI9V7ZLSrcA1bIJ%2BZSnuJTI30qD0t%2BtMyDc9MCg0ZUXqDEqK1uGsgdKYB%2B73xuRcLKKLF1hzyf%2BBTUJtXN1P9Me%2FnTCeyRQ6QE8pZu%2FjB%2FkI4UM7wX%2FD4SLpDN2gEqZ8oK%2FfykQpe2wN8pYSGRikv86t0ann7aM%2FYpP4P0gjFZ6rxQmjucUylqXSPxfBaZxtKIIdrGeXaYx%2BxEtu17%2Bm80JYg1pM78WvogYhuee9IAETcouFUuGEO4NpCD0gXaQVBnTEjX8QHkdfLYo3K3IFDnQJVbo%2BpMNz%2FHsN1mtRUF%2Bn%2BrQLIBcFQ01s7VaOuLOhT9BerEDsSWTezglLeYm5aINm7FqrymUVgfuS7OTbMFHAUVX1d2dTbFbew%2BEN%2Bj11SYTkwJ5kPH40Mym3P9JSV0ovsTU0083RvSXmlEYlfmY8IF3ekC8pPPyr0VKLG8nf2sklPqgC11mN0Bmq6vVl0Zwb2pUU0fY%2B1Q%2BeaU8%2B5jv%2BcU9qPcqkZMqAvmf9ps6KpEizaxmJiW9Mv7V%2BZ%2B2bz%2F1yQBABKexlodZun5UgY28sPw8t1bIEcyC1MHPCtgdM%2FDPSUgAqnXG5DUcXSVS%2BWtFmij4vlMk%2BS90kgHzK5AX%2Bw8msZCTwDGDTbFvEspOraVtUSqMOSQtr4GOqUBRPw5XSrJzyGKaA9rJhvVJX0XW5Anroz1c9zxsUQUUHh7L92r%2FgS%2FaMu5EhoZTN2cXbewsX2jOr32WDfgtxTd35PR9W3Wsoh2qJ7CnfCIWRE7Olqa%2FycQJvydLX0vIjlqNFxizDxzTKRyZe1uvKPnNCLZrDMMoyMqFxN%2B8q%2BqWqpA%2FpjLBaTn1Meptc6jPFZbZGvHvSFml4S4%2F413ZxLtimDe32MK&X-Amz-Signature=385e1106ff5761c55e328663f1fd59d7f8c5224f0f169c50cc6abe59b7b9e9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5VPYY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCdtGXXBE3K1CLuT1VxEnnit9o8syN6IHr62TJ%2Bw5kjuQIgefnaC3cvvYFRM7HwR4azLcFlFvdJDvlEgjU2QnaDm%2Bkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPk9dGRhfkMI9V7ZLSrcA1bIJ%2BZSnuJTI30qD0t%2BtMyDc9MCg0ZUXqDEqK1uGsgdKYB%2B73xuRcLKKLF1hzyf%2BBTUJtXN1P9Me%2FnTCeyRQ6QE8pZu%2FjB%2FkI4UM7wX%2FD4SLpDN2gEqZ8oK%2FfykQpe2wN8pYSGRikv86t0ann7aM%2FYpP4P0gjFZ6rxQmjucUylqXSPxfBaZxtKIIdrGeXaYx%2BxEtu17%2Bm80JYg1pM78WvogYhuee9IAETcouFUuGEO4NpCD0gXaQVBnTEjX8QHkdfLYo3K3IFDnQJVbo%2BpMNz%2FHsN1mtRUF%2Bn%2BrQLIBcFQ01s7VaOuLOhT9BerEDsSWTezglLeYm5aINm7FqrymUVgfuS7OTbMFHAUVX1d2dTbFbew%2BEN%2Bj11SYTkwJ5kPH40Mym3P9JSV0ovsTU0083RvSXmlEYlfmY8IF3ekC8pPPyr0VKLG8nf2sklPqgC11mN0Bmq6vVl0Zwb2pUU0fY%2B1Q%2BeaU8%2B5jv%2BcU9qPcqkZMqAvmf9ps6KpEizaxmJiW9Mv7V%2BZ%2B2bz%2F1yQBABKexlodZun5UgY28sPw8t1bIEcyC1MHPCtgdM%2FDPSUgAqnXG5DUcXSVS%2BWtFmij4vlMk%2BS90kgHzK5AX%2Bw8msZCTwDGDTbFvEspOraVtUSqMOSQtr4GOqUBRPw5XSrJzyGKaA9rJhvVJX0XW5Anroz1c9zxsUQUUHh7L92r%2FgS%2FaMu5EhoZTN2cXbewsX2jOr32WDfgtxTd35PR9W3Wsoh2qJ7CnfCIWRE7Olqa%2FycQJvydLX0vIjlqNFxizDxzTKRyZe1uvKPnNCLZrDMMoyMqFxN%2B8q%2BqWqpA%2FpjLBaTn1Meptc6jPFZbZGvHvSFml4S4%2F413ZxLtimDe32MK&X-Amz-Signature=d319d575380436198c770abfa5f7a5af114252bfe9e614d07a891deabfdd7795&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5VPYY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCdtGXXBE3K1CLuT1VxEnnit9o8syN6IHr62TJ%2Bw5kjuQIgefnaC3cvvYFRM7HwR4azLcFlFvdJDvlEgjU2QnaDm%2Bkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPk9dGRhfkMI9V7ZLSrcA1bIJ%2BZSnuJTI30qD0t%2BtMyDc9MCg0ZUXqDEqK1uGsgdKYB%2B73xuRcLKKLF1hzyf%2BBTUJtXN1P9Me%2FnTCeyRQ6QE8pZu%2FjB%2FkI4UM7wX%2FD4SLpDN2gEqZ8oK%2FfykQpe2wN8pYSGRikv86t0ann7aM%2FYpP4P0gjFZ6rxQmjucUylqXSPxfBaZxtKIIdrGeXaYx%2BxEtu17%2Bm80JYg1pM78WvogYhuee9IAETcouFUuGEO4NpCD0gXaQVBnTEjX8QHkdfLYo3K3IFDnQJVbo%2BpMNz%2FHsN1mtRUF%2Bn%2BrQLIBcFQ01s7VaOuLOhT9BerEDsSWTezglLeYm5aINm7FqrymUVgfuS7OTbMFHAUVX1d2dTbFbew%2BEN%2Bj11SYTkwJ5kPH40Mym3P9JSV0ovsTU0083RvSXmlEYlfmY8IF3ekC8pPPyr0VKLG8nf2sklPqgC11mN0Bmq6vVl0Zwb2pUU0fY%2B1Q%2BeaU8%2B5jv%2BcU9qPcqkZMqAvmf9ps6KpEizaxmJiW9Mv7V%2BZ%2B2bz%2F1yQBABKexlodZun5UgY28sPw8t1bIEcyC1MHPCtgdM%2FDPSUgAqnXG5DUcXSVS%2BWtFmij4vlMk%2BS90kgHzK5AX%2Bw8msZCTwDGDTbFvEspOraVtUSqMOSQtr4GOqUBRPw5XSrJzyGKaA9rJhvVJX0XW5Anroz1c9zxsUQUUHh7L92r%2FgS%2FaMu5EhoZTN2cXbewsX2jOr32WDfgtxTd35PR9W3Wsoh2qJ7CnfCIWRE7Olqa%2FycQJvydLX0vIjlqNFxizDxzTKRyZe1uvKPnNCLZrDMMoyMqFxN%2B8q%2BqWqpA%2FpjLBaTn1Meptc6jPFZbZGvHvSFml4S4%2F413ZxLtimDe32MK&X-Amz-Signature=ad4d4a7c8db1c4ff8e733d3f89eb99bf8d37c76fdd8058623b796f68f5405bad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5VPYY4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCdtGXXBE3K1CLuT1VxEnnit9o8syN6IHr62TJ%2Bw5kjuQIgefnaC3cvvYFRM7HwR4azLcFlFvdJDvlEgjU2QnaDm%2Bkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPk9dGRhfkMI9V7ZLSrcA1bIJ%2BZSnuJTI30qD0t%2BtMyDc9MCg0ZUXqDEqK1uGsgdKYB%2B73xuRcLKKLF1hzyf%2BBTUJtXN1P9Me%2FnTCeyRQ6QE8pZu%2FjB%2FkI4UM7wX%2FD4SLpDN2gEqZ8oK%2FfykQpe2wN8pYSGRikv86t0ann7aM%2FYpP4P0gjFZ6rxQmjucUylqXSPxfBaZxtKIIdrGeXaYx%2BxEtu17%2Bm80JYg1pM78WvogYhuee9IAETcouFUuGEO4NpCD0gXaQVBnTEjX8QHkdfLYo3K3IFDnQJVbo%2BpMNz%2FHsN1mtRUF%2Bn%2BrQLIBcFQ01s7VaOuLOhT9BerEDsSWTezglLeYm5aINm7FqrymUVgfuS7OTbMFHAUVX1d2dTbFbew%2BEN%2Bj11SYTkwJ5kPH40Mym3P9JSV0ovsTU0083RvSXmlEYlfmY8IF3ekC8pPPyr0VKLG8nf2sklPqgC11mN0Bmq6vVl0Zwb2pUU0fY%2B1Q%2BeaU8%2B5jv%2BcU9qPcqkZMqAvmf9ps6KpEizaxmJiW9Mv7V%2BZ%2B2bz%2F1yQBABKexlodZun5UgY28sPw8t1bIEcyC1MHPCtgdM%2FDPSUgAqnXG5DUcXSVS%2BWtFmij4vlMk%2BS90kgHzK5AX%2Bw8msZCTwDGDTbFvEspOraVtUSqMOSQtr4GOqUBRPw5XSrJzyGKaA9rJhvVJX0XW5Anroz1c9zxsUQUUHh7L92r%2FgS%2FaMu5EhoZTN2cXbewsX2jOr32WDfgtxTd35PR9W3Wsoh2qJ7CnfCIWRE7Olqa%2FycQJvydLX0vIjlqNFxizDxzTKRyZe1uvKPnNCLZrDMMoyMqFxN%2B8q%2BqWqpA%2FpjLBaTn1Meptc6jPFZbZGvHvSFml4S4%2F413ZxLtimDe32MK&X-Amz-Signature=ebd7805b22f36bc06eb9c2575b6952de3d9e4668d283ebd9ee70e2d49e003433&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
