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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FYD6JN4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFLipustZnWwvDT6R8mHs0h%2FE9sVoSNDEndLuA3yPfRdAiBXJLYSIoSpcbTH9W8C5e9Oh6Aodj8bf6OGTFRlAwUGoyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIcJO0OH5qtRsDFDKtwD%2BGvJmEZdwU6IGPIki10mD67LweZHTjuVD%2BM05jManeGYCnpU4FRBp2hs%2BOiQ5bcooo8YIdz3GTw8JmkLLsOofQ0R1RyTQXHGe4%2BfzH%2BDSzY9b8yoEU3nvgTFKKuXaKgCawFS9aFYDP3jHA2CCjFeMPbA0vPeThD5vdob9FrQyD%2BBedQFupT0hgcn51qGyLCW83gi1rf9MPF7CFst9o9ugJkI%2FkW2bmcjQkmPJP1TDnXM8kxH8MQRT%2BcI2j702v98Sw1%2F6NHVa6khmBYqGLM7FH63l7ut7XH3usNNvs5A19ro3oqCFYvbkAR%2FsRIlqyqQuKsZ0ivsZs894HgAj9MncBDTmMYFheNQ6tXC7A0BMep3dhDGSVLFIiBBMThDGPbJ1B6eW6CoTWPZfz29oPGI41%2BnwTeb5j9MtWWgkKfXysFpztllJBfTX%2FQiXR1HCAnoyunR1tSn9IXjOPvyj%2FsqOlQftc3CvanaZ8iJaYSI1oim%2BuFFm4rVR0C1eJ9%2Bs4aRhsLYiAJilJM82uo8vSZhGgSIQzrRT3ZZzP52i6CIGUGprRlIzLskIF5BfIznDtxyJFdLK3%2BvvnaoeW%2Br55q5oFHIe2ISM1VAAZie9qeAjdUYVWZ%2FKQjP4CbeW%2BYw9JnYvwY6pgE7AcEj6lmp%2BntgdjQRA%2F%2Flf%2BFuJPkpwyLUI07i6E%2B8QyWXbeoqxXKiED3gexekQWj%2BJsI6Z1FiUxnjgKHhX%2FFYBbcMTz5S%2Bw9pz1KkUPAaKp3OleCGKbzrBUS344VO7Bb6VUri55CMnJQO4FuX8wd%2B%2F2xZTZbL4V8WT1LQ5ZWfznJHIHIez%2BbWI%2FMCUTMU73ByqKJDP98xe6PcwBg1fSPjamwlzfqQ&X-Amz-Signature=810d759c9fca4bd65866109853a2540960b0f633c6e2808f2fec8028c8897ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FYD6JN4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFLipustZnWwvDT6R8mHs0h%2FE9sVoSNDEndLuA3yPfRdAiBXJLYSIoSpcbTH9W8C5e9Oh6Aodj8bf6OGTFRlAwUGoyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIcJO0OH5qtRsDFDKtwD%2BGvJmEZdwU6IGPIki10mD67LweZHTjuVD%2BM05jManeGYCnpU4FRBp2hs%2BOiQ5bcooo8YIdz3GTw8JmkLLsOofQ0R1RyTQXHGe4%2BfzH%2BDSzY9b8yoEU3nvgTFKKuXaKgCawFS9aFYDP3jHA2CCjFeMPbA0vPeThD5vdob9FrQyD%2BBedQFupT0hgcn51qGyLCW83gi1rf9MPF7CFst9o9ugJkI%2FkW2bmcjQkmPJP1TDnXM8kxH8MQRT%2BcI2j702v98Sw1%2F6NHVa6khmBYqGLM7FH63l7ut7XH3usNNvs5A19ro3oqCFYvbkAR%2FsRIlqyqQuKsZ0ivsZs894HgAj9MncBDTmMYFheNQ6tXC7A0BMep3dhDGSVLFIiBBMThDGPbJ1B6eW6CoTWPZfz29oPGI41%2BnwTeb5j9MtWWgkKfXysFpztllJBfTX%2FQiXR1HCAnoyunR1tSn9IXjOPvyj%2FsqOlQftc3CvanaZ8iJaYSI1oim%2BuFFm4rVR0C1eJ9%2Bs4aRhsLYiAJilJM82uo8vSZhGgSIQzrRT3ZZzP52i6CIGUGprRlIzLskIF5BfIznDtxyJFdLK3%2BvvnaoeW%2Br55q5oFHIe2ISM1VAAZie9qeAjdUYVWZ%2FKQjP4CbeW%2BYw9JnYvwY6pgE7AcEj6lmp%2BntgdjQRA%2F%2Flf%2BFuJPkpwyLUI07i6E%2B8QyWXbeoqxXKiED3gexekQWj%2BJsI6Z1FiUxnjgKHhX%2FFYBbcMTz5S%2Bw9pz1KkUPAaKp3OleCGKbzrBUS344VO7Bb6VUri55CMnJQO4FuX8wd%2B%2F2xZTZbL4V8WT1LQ5ZWfznJHIHIez%2BbWI%2FMCUTMU73ByqKJDP98xe6PcwBg1fSPjamwlzfqQ&X-Amz-Signature=acfa4c5bd4e81c288dffd6de02fe9072474bcb49639c4f398569e75cce45f4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FYD6JN4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFLipustZnWwvDT6R8mHs0h%2FE9sVoSNDEndLuA3yPfRdAiBXJLYSIoSpcbTH9W8C5e9Oh6Aodj8bf6OGTFRlAwUGoyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIcJO0OH5qtRsDFDKtwD%2BGvJmEZdwU6IGPIki10mD67LweZHTjuVD%2BM05jManeGYCnpU4FRBp2hs%2BOiQ5bcooo8YIdz3GTw8JmkLLsOofQ0R1RyTQXHGe4%2BfzH%2BDSzY9b8yoEU3nvgTFKKuXaKgCawFS9aFYDP3jHA2CCjFeMPbA0vPeThD5vdob9FrQyD%2BBedQFupT0hgcn51qGyLCW83gi1rf9MPF7CFst9o9ugJkI%2FkW2bmcjQkmPJP1TDnXM8kxH8MQRT%2BcI2j702v98Sw1%2F6NHVa6khmBYqGLM7FH63l7ut7XH3usNNvs5A19ro3oqCFYvbkAR%2FsRIlqyqQuKsZ0ivsZs894HgAj9MncBDTmMYFheNQ6tXC7A0BMep3dhDGSVLFIiBBMThDGPbJ1B6eW6CoTWPZfz29oPGI41%2BnwTeb5j9MtWWgkKfXysFpztllJBfTX%2FQiXR1HCAnoyunR1tSn9IXjOPvyj%2FsqOlQftc3CvanaZ8iJaYSI1oim%2BuFFm4rVR0C1eJ9%2Bs4aRhsLYiAJilJM82uo8vSZhGgSIQzrRT3ZZzP52i6CIGUGprRlIzLskIF5BfIznDtxyJFdLK3%2BvvnaoeW%2Br55q5oFHIe2ISM1VAAZie9qeAjdUYVWZ%2FKQjP4CbeW%2BYw9JnYvwY6pgE7AcEj6lmp%2BntgdjQRA%2F%2Flf%2BFuJPkpwyLUI07i6E%2B8QyWXbeoqxXKiED3gexekQWj%2BJsI6Z1FiUxnjgKHhX%2FFYBbcMTz5S%2Bw9pz1KkUPAaKp3OleCGKbzrBUS344VO7Bb6VUri55CMnJQO4FuX8wd%2B%2F2xZTZbL4V8WT1LQ5ZWfznJHIHIez%2BbWI%2FMCUTMU73ByqKJDP98xe6PcwBg1fSPjamwlzfqQ&X-Amz-Signature=2ad8ffc419da54145386c7da420d5e03335a58a50fdcc819b4533a98f04334bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FYD6JN4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFLipustZnWwvDT6R8mHs0h%2FE9sVoSNDEndLuA3yPfRdAiBXJLYSIoSpcbTH9W8C5e9Oh6Aodj8bf6OGTFRlAwUGoyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIcJO0OH5qtRsDFDKtwD%2BGvJmEZdwU6IGPIki10mD67LweZHTjuVD%2BM05jManeGYCnpU4FRBp2hs%2BOiQ5bcooo8YIdz3GTw8JmkLLsOofQ0R1RyTQXHGe4%2BfzH%2BDSzY9b8yoEU3nvgTFKKuXaKgCawFS9aFYDP3jHA2CCjFeMPbA0vPeThD5vdob9FrQyD%2BBedQFupT0hgcn51qGyLCW83gi1rf9MPF7CFst9o9ugJkI%2FkW2bmcjQkmPJP1TDnXM8kxH8MQRT%2BcI2j702v98Sw1%2F6NHVa6khmBYqGLM7FH63l7ut7XH3usNNvs5A19ro3oqCFYvbkAR%2FsRIlqyqQuKsZ0ivsZs894HgAj9MncBDTmMYFheNQ6tXC7A0BMep3dhDGSVLFIiBBMThDGPbJ1B6eW6CoTWPZfz29oPGI41%2BnwTeb5j9MtWWgkKfXysFpztllJBfTX%2FQiXR1HCAnoyunR1tSn9IXjOPvyj%2FsqOlQftc3CvanaZ8iJaYSI1oim%2BuFFm4rVR0C1eJ9%2Bs4aRhsLYiAJilJM82uo8vSZhGgSIQzrRT3ZZzP52i6CIGUGprRlIzLskIF5BfIznDtxyJFdLK3%2BvvnaoeW%2Br55q5oFHIe2ISM1VAAZie9qeAjdUYVWZ%2FKQjP4CbeW%2BYw9JnYvwY6pgE7AcEj6lmp%2BntgdjQRA%2F%2Flf%2BFuJPkpwyLUI07i6E%2B8QyWXbeoqxXKiED3gexekQWj%2BJsI6Z1FiUxnjgKHhX%2FFYBbcMTz5S%2Bw9pz1KkUPAaKp3OleCGKbzrBUS344VO7Bb6VUri55CMnJQO4FuX8wd%2B%2F2xZTZbL4V8WT1LQ5ZWfznJHIHIez%2BbWI%2FMCUTMU73ByqKJDP98xe6PcwBg1fSPjamwlzfqQ&X-Amz-Signature=9592900490b036b34d7f3d3056bcde5f6f48ad1c07564d8b28fd09042826a60c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FYD6JN4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFLipustZnWwvDT6R8mHs0h%2FE9sVoSNDEndLuA3yPfRdAiBXJLYSIoSpcbTH9W8C5e9Oh6Aodj8bf6OGTFRlAwUGoyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIcJO0OH5qtRsDFDKtwD%2BGvJmEZdwU6IGPIki10mD67LweZHTjuVD%2BM05jManeGYCnpU4FRBp2hs%2BOiQ5bcooo8YIdz3GTw8JmkLLsOofQ0R1RyTQXHGe4%2BfzH%2BDSzY9b8yoEU3nvgTFKKuXaKgCawFS9aFYDP3jHA2CCjFeMPbA0vPeThD5vdob9FrQyD%2BBedQFupT0hgcn51qGyLCW83gi1rf9MPF7CFst9o9ugJkI%2FkW2bmcjQkmPJP1TDnXM8kxH8MQRT%2BcI2j702v98Sw1%2F6NHVa6khmBYqGLM7FH63l7ut7XH3usNNvs5A19ro3oqCFYvbkAR%2FsRIlqyqQuKsZ0ivsZs894HgAj9MncBDTmMYFheNQ6tXC7A0BMep3dhDGSVLFIiBBMThDGPbJ1B6eW6CoTWPZfz29oPGI41%2BnwTeb5j9MtWWgkKfXysFpztllJBfTX%2FQiXR1HCAnoyunR1tSn9IXjOPvyj%2FsqOlQftc3CvanaZ8iJaYSI1oim%2BuFFm4rVR0C1eJ9%2Bs4aRhsLYiAJilJM82uo8vSZhGgSIQzrRT3ZZzP52i6CIGUGprRlIzLskIF5BfIznDtxyJFdLK3%2BvvnaoeW%2Br55q5oFHIe2ISM1VAAZie9qeAjdUYVWZ%2FKQjP4CbeW%2BYw9JnYvwY6pgE7AcEj6lmp%2BntgdjQRA%2F%2Flf%2BFuJPkpwyLUI07i6E%2B8QyWXbeoqxXKiED3gexekQWj%2BJsI6Z1FiUxnjgKHhX%2FFYBbcMTz5S%2Bw9pz1KkUPAaKp3OleCGKbzrBUS344VO7Bb6VUri55CMnJQO4FuX8wd%2B%2F2xZTZbL4V8WT1LQ5ZWfznJHIHIez%2BbWI%2FMCUTMU73ByqKJDP98xe6PcwBg1fSPjamwlzfqQ&X-Amz-Signature=22f6eea63b5a834f63e39c911359eb7609d18508e5159b0034818ea308a03e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
