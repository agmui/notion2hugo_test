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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPWR3AP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDaNIA%2FsdUemk%2BHj33sPaTB4FIy5kGFVP9QjPuIeOLUxwIhALPJTor%2FSTcnNdFZ7mu78RxyzsCBS2wDw%2F8H9SaiXNzmKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsfZQmzWODiwEEhsq3AMOJV3bdosNKmFadjwX6bJLI8%2FOsFosQch%2FueUSCEzcStVqzfEns6BWsBVMvzupb1hMk%2FxWp0iZSU91qE5ezmCQSa5AKfDW5rpcDWHEd72y8IOMPvg9vxEU%2FiCNq8Ue%2BYLgSWUaKI4D6aFMlabIOV7z4E69LY4ZZR%2FpR2x%2BRWVTwXK69KQXpxL%2B5121p2VWoGLoIidAgD2mx0fMbyAtDEvFp0ViOH90PM7rfX2yZl5wgHuKsPU42AKOwwKQXcHU%2FzCNZeIzEXomX%2By7OLv22ObaCI675qQN2pTrX6cBinUSIUtJxAVtoBKU0E0i4%2FiqS53z2bB386bSGI9YukybxgKoLkdKooU9MkWLuFrdSqLn%2F4pqPIfCFnq8%2BdHASr4Wg8EXLUQ%2F%2ByuawrLWZasxZrc3304qsfmy3fSP3VrGAdMcq4BBXid%2FoYbP3RJPMbFJZKVVAFd8Z3HMgpXKFKLfmmh50GIsY8qVJXbVzgSQFJPl%2BDjjfWOhDvvczi9hQR%2BiMl6n75t3eirJGRr5JmsmonNr66Pb60eIcxEhyWB7yCHBKcT9s8UP1ZCcc%2B3l2vMZIMMqYn83kklDqR6sFbv6dWAJl4tjnN0dFCdabI68ai6iketjRYaz70TqbitM0DD2%2BdfABjqkAQGCEU2YoRchGySFkCntZ%2BT9Hnz7cqVfJav4%2F5TdAqfIoMYBnvjrJthyGIdqIxcaTmE0XqgO4ck%2BfVBI3t2KFj%2FyqR1E7iLOIhEUC9hAEwWsmVtfmILK2093cvGMNAamLdAnQrBfYqQm1ZrISlKEd5H694gSVjwMZRKZNWWMw%2FjIs4Oz8yyoVuYy6q5eoIHK5t5YWIwxikGdWJjBi5Db4Zp1NS1U&X-Amz-Signature=89a1ca327265e14b71ce12b4bc7ee19c5facfa5b202c4b4b2a95934125ffa1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPWR3AP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDaNIA%2FsdUemk%2BHj33sPaTB4FIy5kGFVP9QjPuIeOLUxwIhALPJTor%2FSTcnNdFZ7mu78RxyzsCBS2wDw%2F8H9SaiXNzmKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsfZQmzWODiwEEhsq3AMOJV3bdosNKmFadjwX6bJLI8%2FOsFosQch%2FueUSCEzcStVqzfEns6BWsBVMvzupb1hMk%2FxWp0iZSU91qE5ezmCQSa5AKfDW5rpcDWHEd72y8IOMPvg9vxEU%2FiCNq8Ue%2BYLgSWUaKI4D6aFMlabIOV7z4E69LY4ZZR%2FpR2x%2BRWVTwXK69KQXpxL%2B5121p2VWoGLoIidAgD2mx0fMbyAtDEvFp0ViOH90PM7rfX2yZl5wgHuKsPU42AKOwwKQXcHU%2FzCNZeIzEXomX%2By7OLv22ObaCI675qQN2pTrX6cBinUSIUtJxAVtoBKU0E0i4%2FiqS53z2bB386bSGI9YukybxgKoLkdKooU9MkWLuFrdSqLn%2F4pqPIfCFnq8%2BdHASr4Wg8EXLUQ%2F%2ByuawrLWZasxZrc3304qsfmy3fSP3VrGAdMcq4BBXid%2FoYbP3RJPMbFJZKVVAFd8Z3HMgpXKFKLfmmh50GIsY8qVJXbVzgSQFJPl%2BDjjfWOhDvvczi9hQR%2BiMl6n75t3eirJGRr5JmsmonNr66Pb60eIcxEhyWB7yCHBKcT9s8UP1ZCcc%2B3l2vMZIMMqYn83kklDqR6sFbv6dWAJl4tjnN0dFCdabI68ai6iketjRYaz70TqbitM0DD2%2BdfABjqkAQGCEU2YoRchGySFkCntZ%2BT9Hnz7cqVfJav4%2F5TdAqfIoMYBnvjrJthyGIdqIxcaTmE0XqgO4ck%2BfVBI3t2KFj%2FyqR1E7iLOIhEUC9hAEwWsmVtfmILK2093cvGMNAamLdAnQrBfYqQm1ZrISlKEd5H694gSVjwMZRKZNWWMw%2FjIs4Oz8yyoVuYy6q5eoIHK5t5YWIwxikGdWJjBi5Db4Zp1NS1U&X-Amz-Signature=6d3d500b9727cda1bae82d8749157294d91bf5174525f00776d39ac2009b9045&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPWR3AP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDaNIA%2FsdUemk%2BHj33sPaTB4FIy5kGFVP9QjPuIeOLUxwIhALPJTor%2FSTcnNdFZ7mu78RxyzsCBS2wDw%2F8H9SaiXNzmKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsfZQmzWODiwEEhsq3AMOJV3bdosNKmFadjwX6bJLI8%2FOsFosQch%2FueUSCEzcStVqzfEns6BWsBVMvzupb1hMk%2FxWp0iZSU91qE5ezmCQSa5AKfDW5rpcDWHEd72y8IOMPvg9vxEU%2FiCNq8Ue%2BYLgSWUaKI4D6aFMlabIOV7z4E69LY4ZZR%2FpR2x%2BRWVTwXK69KQXpxL%2B5121p2VWoGLoIidAgD2mx0fMbyAtDEvFp0ViOH90PM7rfX2yZl5wgHuKsPU42AKOwwKQXcHU%2FzCNZeIzEXomX%2By7OLv22ObaCI675qQN2pTrX6cBinUSIUtJxAVtoBKU0E0i4%2FiqS53z2bB386bSGI9YukybxgKoLkdKooU9MkWLuFrdSqLn%2F4pqPIfCFnq8%2BdHASr4Wg8EXLUQ%2F%2ByuawrLWZasxZrc3304qsfmy3fSP3VrGAdMcq4BBXid%2FoYbP3RJPMbFJZKVVAFd8Z3HMgpXKFKLfmmh50GIsY8qVJXbVzgSQFJPl%2BDjjfWOhDvvczi9hQR%2BiMl6n75t3eirJGRr5JmsmonNr66Pb60eIcxEhyWB7yCHBKcT9s8UP1ZCcc%2B3l2vMZIMMqYn83kklDqR6sFbv6dWAJl4tjnN0dFCdabI68ai6iketjRYaz70TqbitM0DD2%2BdfABjqkAQGCEU2YoRchGySFkCntZ%2BT9Hnz7cqVfJav4%2F5TdAqfIoMYBnvjrJthyGIdqIxcaTmE0XqgO4ck%2BfVBI3t2KFj%2FyqR1E7iLOIhEUC9hAEwWsmVtfmILK2093cvGMNAamLdAnQrBfYqQm1ZrISlKEd5H694gSVjwMZRKZNWWMw%2FjIs4Oz8yyoVuYy6q5eoIHK5t5YWIwxikGdWJjBi5Db4Zp1NS1U&X-Amz-Signature=04bf6e5ebf0adf7ffd8e754bf52da75d5ae88f3894fa6e827f13c9233ff3f048&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPWR3AP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDaNIA%2FsdUemk%2BHj33sPaTB4FIy5kGFVP9QjPuIeOLUxwIhALPJTor%2FSTcnNdFZ7mu78RxyzsCBS2wDw%2F8H9SaiXNzmKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsfZQmzWODiwEEhsq3AMOJV3bdosNKmFadjwX6bJLI8%2FOsFosQch%2FueUSCEzcStVqzfEns6BWsBVMvzupb1hMk%2FxWp0iZSU91qE5ezmCQSa5AKfDW5rpcDWHEd72y8IOMPvg9vxEU%2FiCNq8Ue%2BYLgSWUaKI4D6aFMlabIOV7z4E69LY4ZZR%2FpR2x%2BRWVTwXK69KQXpxL%2B5121p2VWoGLoIidAgD2mx0fMbyAtDEvFp0ViOH90PM7rfX2yZl5wgHuKsPU42AKOwwKQXcHU%2FzCNZeIzEXomX%2By7OLv22ObaCI675qQN2pTrX6cBinUSIUtJxAVtoBKU0E0i4%2FiqS53z2bB386bSGI9YukybxgKoLkdKooU9MkWLuFrdSqLn%2F4pqPIfCFnq8%2BdHASr4Wg8EXLUQ%2F%2ByuawrLWZasxZrc3304qsfmy3fSP3VrGAdMcq4BBXid%2FoYbP3RJPMbFJZKVVAFd8Z3HMgpXKFKLfmmh50GIsY8qVJXbVzgSQFJPl%2BDjjfWOhDvvczi9hQR%2BiMl6n75t3eirJGRr5JmsmonNr66Pb60eIcxEhyWB7yCHBKcT9s8UP1ZCcc%2B3l2vMZIMMqYn83kklDqR6sFbv6dWAJl4tjnN0dFCdabI68ai6iketjRYaz70TqbitM0DD2%2BdfABjqkAQGCEU2YoRchGySFkCntZ%2BT9Hnz7cqVfJav4%2F5TdAqfIoMYBnvjrJthyGIdqIxcaTmE0XqgO4ck%2BfVBI3t2KFj%2FyqR1E7iLOIhEUC9hAEwWsmVtfmILK2093cvGMNAamLdAnQrBfYqQm1ZrISlKEd5H694gSVjwMZRKZNWWMw%2FjIs4Oz8yyoVuYy6q5eoIHK5t5YWIwxikGdWJjBi5Db4Zp1NS1U&X-Amz-Signature=fef964f581efbc931b642dfd2f3eb61b64df1ff07929b26f56aaa1d74a316a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPWR3AP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDaNIA%2FsdUemk%2BHj33sPaTB4FIy5kGFVP9QjPuIeOLUxwIhALPJTor%2FSTcnNdFZ7mu78RxyzsCBS2wDw%2F8H9SaiXNzmKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsfZQmzWODiwEEhsq3AMOJV3bdosNKmFadjwX6bJLI8%2FOsFosQch%2FueUSCEzcStVqzfEns6BWsBVMvzupb1hMk%2FxWp0iZSU91qE5ezmCQSa5AKfDW5rpcDWHEd72y8IOMPvg9vxEU%2FiCNq8Ue%2BYLgSWUaKI4D6aFMlabIOV7z4E69LY4ZZR%2FpR2x%2BRWVTwXK69KQXpxL%2B5121p2VWoGLoIidAgD2mx0fMbyAtDEvFp0ViOH90PM7rfX2yZl5wgHuKsPU42AKOwwKQXcHU%2FzCNZeIzEXomX%2By7OLv22ObaCI675qQN2pTrX6cBinUSIUtJxAVtoBKU0E0i4%2FiqS53z2bB386bSGI9YukybxgKoLkdKooU9MkWLuFrdSqLn%2F4pqPIfCFnq8%2BdHASr4Wg8EXLUQ%2F%2ByuawrLWZasxZrc3304qsfmy3fSP3VrGAdMcq4BBXid%2FoYbP3RJPMbFJZKVVAFd8Z3HMgpXKFKLfmmh50GIsY8qVJXbVzgSQFJPl%2BDjjfWOhDvvczi9hQR%2BiMl6n75t3eirJGRr5JmsmonNr66Pb60eIcxEhyWB7yCHBKcT9s8UP1ZCcc%2B3l2vMZIMMqYn83kklDqR6sFbv6dWAJl4tjnN0dFCdabI68ai6iketjRYaz70TqbitM0DD2%2BdfABjqkAQGCEU2YoRchGySFkCntZ%2BT9Hnz7cqVfJav4%2F5TdAqfIoMYBnvjrJthyGIdqIxcaTmE0XqgO4ck%2BfVBI3t2KFj%2FyqR1E7iLOIhEUC9hAEwWsmVtfmILK2093cvGMNAamLdAnQrBfYqQm1ZrISlKEd5H694gSVjwMZRKZNWWMw%2FjIs4Oz8yyoVuYy6q5eoIHK5t5YWIwxikGdWJjBi5Db4Zp1NS1U&X-Amz-Signature=5ad8958b4bcaad6643c0632abae72634de051aca553a576afee3b3ad98acaf86&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
