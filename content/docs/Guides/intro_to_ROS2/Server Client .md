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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NW3DGDX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3aAiRfz4xJMkE6R7GcU2YH7g2BwHVISlOTmhS6t%2BKZAiEA3GJeDiest7a7NjQrCrt8QDDTirhCbVBRThGt9LSAU6wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB7FCWh9I%2FSVMTsHvyrcA75wsKYXzFiJro9fhkLN4D0UMfVcYAw79VXZczDa4Rkrxuuk9E%2BhqO39Shoef2ECV%2Fc7%2BMWfpIkVh%2F4qFcggg4AcF8kQZA3KiQr84iWnjO0qyI2vzG8Rd1Qq5omNkuK7uCki2rmDcZK9AfMuW%2FtD66emoo1vYnCOtY3CaLFUjlj8stt00BzP4PvyTt9se8bfAkVD6dXvpLI%2BJaOQLfAxCoC5r%2FGoYhE6iSJLpnn0edamxaROcmDsnR%2FIiysBR6VAYmOpd7zE1I5LMPmi1MHSZqhr74je0%2FVouK0UsL4%2FJIwjHdKH4%2BAgtjjCoEUBHu6XhhhmsYfAkT2vRuPGp3d%2FZ9m0zdR5xAQW4e%2FvkWS3sOmOVS722pAev1KZGRkK7%2BSMREjEplrB9lMAfo3bWJeWMc5CC8tq0FQ%2F64u3AUfAvQuTcr56HQT9fj50w6iAWSIAiqREqNEsg%2Flcs0EbaobvQ5eXt0EzOMpo%2Bk7padnzC3MBf1QdyD3h3KOnMFF%2BQzWR57BjYj5ZGluLwucP3ehQmjUqhNpW2qr4D1zXwf4E7pG%2FUB6laIZ8udOd0%2FhqnbOtD0gFSljIFeQjyePf2fcCoNaOfjBCZB8QdB9q8F7sTPB96CU5LJBLDWyQ%2FExiMOqNicAGOqUBIejFkuMM1z%2B5lba%2Bk6VDdqdCcfYnWnH7xM3kBOfMFFw4u26wAY294qf2Pb5L2witgdHyhve5pUvmPCSJbh9p%2BpOrsWme8t08taKqolp5l5BWjaKtP2Px8sUnk8AEzq4%2Bz72TBiDGk1sdW1emtkG14VAyuguE%2B3UL3gFsLumEMIX5Ov55hV5R825sE50C9LpuHAffhGYZF%2FhGLSjkloi06tuo6s2c&X-Amz-Signature=9d522a993847ac927059439dc5fa8a509d426f51b176ded454bf5e636d8e300f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NW3DGDX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3aAiRfz4xJMkE6R7GcU2YH7g2BwHVISlOTmhS6t%2BKZAiEA3GJeDiest7a7NjQrCrt8QDDTirhCbVBRThGt9LSAU6wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB7FCWh9I%2FSVMTsHvyrcA75wsKYXzFiJro9fhkLN4D0UMfVcYAw79VXZczDa4Rkrxuuk9E%2BhqO39Shoef2ECV%2Fc7%2BMWfpIkVh%2F4qFcggg4AcF8kQZA3KiQr84iWnjO0qyI2vzG8Rd1Qq5omNkuK7uCki2rmDcZK9AfMuW%2FtD66emoo1vYnCOtY3CaLFUjlj8stt00BzP4PvyTt9se8bfAkVD6dXvpLI%2BJaOQLfAxCoC5r%2FGoYhE6iSJLpnn0edamxaROcmDsnR%2FIiysBR6VAYmOpd7zE1I5LMPmi1MHSZqhr74je0%2FVouK0UsL4%2FJIwjHdKH4%2BAgtjjCoEUBHu6XhhhmsYfAkT2vRuPGp3d%2FZ9m0zdR5xAQW4e%2FvkWS3sOmOVS722pAev1KZGRkK7%2BSMREjEplrB9lMAfo3bWJeWMc5CC8tq0FQ%2F64u3AUfAvQuTcr56HQT9fj50w6iAWSIAiqREqNEsg%2Flcs0EbaobvQ5eXt0EzOMpo%2Bk7padnzC3MBf1QdyD3h3KOnMFF%2BQzWR57BjYj5ZGluLwucP3ehQmjUqhNpW2qr4D1zXwf4E7pG%2FUB6laIZ8udOd0%2FhqnbOtD0gFSljIFeQjyePf2fcCoNaOfjBCZB8QdB9q8F7sTPB96CU5LJBLDWyQ%2FExiMOqNicAGOqUBIejFkuMM1z%2B5lba%2Bk6VDdqdCcfYnWnH7xM3kBOfMFFw4u26wAY294qf2Pb5L2witgdHyhve5pUvmPCSJbh9p%2BpOrsWme8t08taKqolp5l5BWjaKtP2Px8sUnk8AEzq4%2Bz72TBiDGk1sdW1emtkG14VAyuguE%2B3UL3gFsLumEMIX5Ov55hV5R825sE50C9LpuHAffhGYZF%2FhGLSjkloi06tuo6s2c&X-Amz-Signature=ce100ee59f4557be6994c4babdc48db571973e5222932a9299251dac7099d141&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NW3DGDX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3aAiRfz4xJMkE6R7GcU2YH7g2BwHVISlOTmhS6t%2BKZAiEA3GJeDiest7a7NjQrCrt8QDDTirhCbVBRThGt9LSAU6wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB7FCWh9I%2FSVMTsHvyrcA75wsKYXzFiJro9fhkLN4D0UMfVcYAw79VXZczDa4Rkrxuuk9E%2BhqO39Shoef2ECV%2Fc7%2BMWfpIkVh%2F4qFcggg4AcF8kQZA3KiQr84iWnjO0qyI2vzG8Rd1Qq5omNkuK7uCki2rmDcZK9AfMuW%2FtD66emoo1vYnCOtY3CaLFUjlj8stt00BzP4PvyTt9se8bfAkVD6dXvpLI%2BJaOQLfAxCoC5r%2FGoYhE6iSJLpnn0edamxaROcmDsnR%2FIiysBR6VAYmOpd7zE1I5LMPmi1MHSZqhr74je0%2FVouK0UsL4%2FJIwjHdKH4%2BAgtjjCoEUBHu6XhhhmsYfAkT2vRuPGp3d%2FZ9m0zdR5xAQW4e%2FvkWS3sOmOVS722pAev1KZGRkK7%2BSMREjEplrB9lMAfo3bWJeWMc5CC8tq0FQ%2F64u3AUfAvQuTcr56HQT9fj50w6iAWSIAiqREqNEsg%2Flcs0EbaobvQ5eXt0EzOMpo%2Bk7padnzC3MBf1QdyD3h3KOnMFF%2BQzWR57BjYj5ZGluLwucP3ehQmjUqhNpW2qr4D1zXwf4E7pG%2FUB6laIZ8udOd0%2FhqnbOtD0gFSljIFeQjyePf2fcCoNaOfjBCZB8QdB9q8F7sTPB96CU5LJBLDWyQ%2FExiMOqNicAGOqUBIejFkuMM1z%2B5lba%2Bk6VDdqdCcfYnWnH7xM3kBOfMFFw4u26wAY294qf2Pb5L2witgdHyhve5pUvmPCSJbh9p%2BpOrsWme8t08taKqolp5l5BWjaKtP2Px8sUnk8AEzq4%2Bz72TBiDGk1sdW1emtkG14VAyuguE%2B3UL3gFsLumEMIX5Ov55hV5R825sE50C9LpuHAffhGYZF%2FhGLSjkloi06tuo6s2c&X-Amz-Signature=d1073690396d1666c66d05d839b15804703100beb5d2ec2095c9e56cf67c5805&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NW3DGDX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3aAiRfz4xJMkE6R7GcU2YH7g2BwHVISlOTmhS6t%2BKZAiEA3GJeDiest7a7NjQrCrt8QDDTirhCbVBRThGt9LSAU6wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB7FCWh9I%2FSVMTsHvyrcA75wsKYXzFiJro9fhkLN4D0UMfVcYAw79VXZczDa4Rkrxuuk9E%2BhqO39Shoef2ECV%2Fc7%2BMWfpIkVh%2F4qFcggg4AcF8kQZA3KiQr84iWnjO0qyI2vzG8Rd1Qq5omNkuK7uCki2rmDcZK9AfMuW%2FtD66emoo1vYnCOtY3CaLFUjlj8stt00BzP4PvyTt9se8bfAkVD6dXvpLI%2BJaOQLfAxCoC5r%2FGoYhE6iSJLpnn0edamxaROcmDsnR%2FIiysBR6VAYmOpd7zE1I5LMPmi1MHSZqhr74je0%2FVouK0UsL4%2FJIwjHdKH4%2BAgtjjCoEUBHu6XhhhmsYfAkT2vRuPGp3d%2FZ9m0zdR5xAQW4e%2FvkWS3sOmOVS722pAev1KZGRkK7%2BSMREjEplrB9lMAfo3bWJeWMc5CC8tq0FQ%2F64u3AUfAvQuTcr56HQT9fj50w6iAWSIAiqREqNEsg%2Flcs0EbaobvQ5eXt0EzOMpo%2Bk7padnzC3MBf1QdyD3h3KOnMFF%2BQzWR57BjYj5ZGluLwucP3ehQmjUqhNpW2qr4D1zXwf4E7pG%2FUB6laIZ8udOd0%2FhqnbOtD0gFSljIFeQjyePf2fcCoNaOfjBCZB8QdB9q8F7sTPB96CU5LJBLDWyQ%2FExiMOqNicAGOqUBIejFkuMM1z%2B5lba%2Bk6VDdqdCcfYnWnH7xM3kBOfMFFw4u26wAY294qf2Pb5L2witgdHyhve5pUvmPCSJbh9p%2BpOrsWme8t08taKqolp5l5BWjaKtP2Px8sUnk8AEzq4%2Bz72TBiDGk1sdW1emtkG14VAyuguE%2B3UL3gFsLumEMIX5Ov55hV5R825sE50C9LpuHAffhGYZF%2FhGLSjkloi06tuo6s2c&X-Amz-Signature=79c247a2f8b80e47f1cb5657fa205ac5e70518231d32630e649eb98992c47130&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NW3DGDX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3aAiRfz4xJMkE6R7GcU2YH7g2BwHVISlOTmhS6t%2BKZAiEA3GJeDiest7a7NjQrCrt8QDDTirhCbVBRThGt9LSAU6wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB7FCWh9I%2FSVMTsHvyrcA75wsKYXzFiJro9fhkLN4D0UMfVcYAw79VXZczDa4Rkrxuuk9E%2BhqO39Shoef2ECV%2Fc7%2BMWfpIkVh%2F4qFcggg4AcF8kQZA3KiQr84iWnjO0qyI2vzG8Rd1Qq5omNkuK7uCki2rmDcZK9AfMuW%2FtD66emoo1vYnCOtY3CaLFUjlj8stt00BzP4PvyTt9se8bfAkVD6dXvpLI%2BJaOQLfAxCoC5r%2FGoYhE6iSJLpnn0edamxaROcmDsnR%2FIiysBR6VAYmOpd7zE1I5LMPmi1MHSZqhr74je0%2FVouK0UsL4%2FJIwjHdKH4%2BAgtjjCoEUBHu6XhhhmsYfAkT2vRuPGp3d%2FZ9m0zdR5xAQW4e%2FvkWS3sOmOVS722pAev1KZGRkK7%2BSMREjEplrB9lMAfo3bWJeWMc5CC8tq0FQ%2F64u3AUfAvQuTcr56HQT9fj50w6iAWSIAiqREqNEsg%2Flcs0EbaobvQ5eXt0EzOMpo%2Bk7padnzC3MBf1QdyD3h3KOnMFF%2BQzWR57BjYj5ZGluLwucP3ehQmjUqhNpW2qr4D1zXwf4E7pG%2FUB6laIZ8udOd0%2FhqnbOtD0gFSljIFeQjyePf2fcCoNaOfjBCZB8QdB9q8F7sTPB96CU5LJBLDWyQ%2FExiMOqNicAGOqUBIejFkuMM1z%2B5lba%2Bk6VDdqdCcfYnWnH7xM3kBOfMFFw4u26wAY294qf2Pb5L2witgdHyhve5pUvmPCSJbh9p%2BpOrsWme8t08taKqolp5l5BWjaKtP2Px8sUnk8AEzq4%2Bz72TBiDGk1sdW1emtkG14VAyuguE%2B3UL3gFsLumEMIX5Ov55hV5R825sE50C9LpuHAffhGYZF%2FhGLSjkloi06tuo6s2c&X-Amz-Signature=372fe1ee34530ed50c8a0c4ac65da5b7c36206ec01462163afa2c3f0de586792&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
