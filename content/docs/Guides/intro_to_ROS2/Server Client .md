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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXKCLBDC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl4tSXZNW9vtBNxJ60TFHmsMV25K5uIYPj%2Bi3FwEEanAiEAq9rDamtTHNkwZhQGhW9%2FofXBErL61CAIjY9wvZchA%2FkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO697f8Ul%2FSquUmNwSrcAyCPMSxwf%2FlTWEbLC5jlASF%2FrneQELSNOYfj2KtVUP0B%2FY5v%2FAOtT0TT9Ap9ivZdUEfRFDLaauY4iS4K6BhkfdjEnP0EexEjk9novyAdweGqVCPmcR5yVJcrYn166tIRC6QLvL7G2an1gQ5yqiibHH%2B2SRYegSNxwS8p36%2BfX1imHipVFPpQUiEwG6A0hYnxuzYGwadtrZpuNK%2BzTTwWc8rBSQEDixWjjwFwLdoMwwEr%2BIlr5NYLNlXEP392EaD8TzgTXiTiv5443B0xFXSdSrNPYOZrhpgyWGzFaeUnxzKAnQMNo5Zqn4Z%2FDcgdh52W%2F5%2BFp8blEt8xOBRWV74Z%2BmPkdmxV4r6Zt%2BkBAJYlag3m1yIWeUXqZeVhbvSEVWUi1ODhHx5qJTqZ1PRbPvtW31RBRJd7l1iYh6uRQUTg6dRlHJXqe1uNLM5mbKZ%2FAJT%2BOaVzh5SA2G%2Fdd2DGT%2F3t919DTufckmUWzAtXK2wnpbLErvyKEmiMlAf0oj1jNG4dlKc%2F%2F60iB%2BwN5fhRnlh75rE7j4Jsjd%2BYNND21E%2Fg2D8UesxUfcZ%2FSBIxn1pg%2FnpmeCvpdWTnhDtl0ltusFd%2ByXl7xp5aFTBprm5yC3t8cRSgTYzq2dD%2BBYoOwYkPMNf4lcUGOqUBkE%2FamuazWNOwSglJqLoi1LOlcTQhQeHZ8PDwKuylqUeL%2B8jzgVJo4YBetM7MDLNAZtPFAI4koxtYFZOALW6n0pK%2B2ZZ4SaJpobImBKyMiH4j%2BSn%2By29TlMAcPPBpQga22lWQVkf8q%2B1TobW9ZJrEfLkxLtgSv66jo%2FmHx1KK5qLSMCiSGBMHK1csOzHbdbEsM8w%2B90sy9jXgPCOE9uvuYwd0z%2FpG&X-Amz-Signature=daf8c72c03633cb35099d325871eb38ac44f58af663056ce7e0bd1e8bcb1d80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXKCLBDC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl4tSXZNW9vtBNxJ60TFHmsMV25K5uIYPj%2Bi3FwEEanAiEAq9rDamtTHNkwZhQGhW9%2FofXBErL61CAIjY9wvZchA%2FkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO697f8Ul%2FSquUmNwSrcAyCPMSxwf%2FlTWEbLC5jlASF%2FrneQELSNOYfj2KtVUP0B%2FY5v%2FAOtT0TT9Ap9ivZdUEfRFDLaauY4iS4K6BhkfdjEnP0EexEjk9novyAdweGqVCPmcR5yVJcrYn166tIRC6QLvL7G2an1gQ5yqiibHH%2B2SRYegSNxwS8p36%2BfX1imHipVFPpQUiEwG6A0hYnxuzYGwadtrZpuNK%2BzTTwWc8rBSQEDixWjjwFwLdoMwwEr%2BIlr5NYLNlXEP392EaD8TzgTXiTiv5443B0xFXSdSrNPYOZrhpgyWGzFaeUnxzKAnQMNo5Zqn4Z%2FDcgdh52W%2F5%2BFp8blEt8xOBRWV74Z%2BmPkdmxV4r6Zt%2BkBAJYlag3m1yIWeUXqZeVhbvSEVWUi1ODhHx5qJTqZ1PRbPvtW31RBRJd7l1iYh6uRQUTg6dRlHJXqe1uNLM5mbKZ%2FAJT%2BOaVzh5SA2G%2Fdd2DGT%2F3t919DTufckmUWzAtXK2wnpbLErvyKEmiMlAf0oj1jNG4dlKc%2F%2F60iB%2BwN5fhRnlh75rE7j4Jsjd%2BYNND21E%2Fg2D8UesxUfcZ%2FSBIxn1pg%2FnpmeCvpdWTnhDtl0ltusFd%2ByXl7xp5aFTBprm5yC3t8cRSgTYzq2dD%2BBYoOwYkPMNf4lcUGOqUBkE%2FamuazWNOwSglJqLoi1LOlcTQhQeHZ8PDwKuylqUeL%2B8jzgVJo4YBetM7MDLNAZtPFAI4koxtYFZOALW6n0pK%2B2ZZ4SaJpobImBKyMiH4j%2BSn%2By29TlMAcPPBpQga22lWQVkf8q%2B1TobW9ZJrEfLkxLtgSv66jo%2FmHx1KK5qLSMCiSGBMHK1csOzHbdbEsM8w%2B90sy9jXgPCOE9uvuYwd0z%2FpG&X-Amz-Signature=fe335a7dde292c2ec9eb6b37820fa52e64c9066e3aa1ffe1327ee4f9301690b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXKCLBDC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl4tSXZNW9vtBNxJ60TFHmsMV25K5uIYPj%2Bi3FwEEanAiEAq9rDamtTHNkwZhQGhW9%2FofXBErL61CAIjY9wvZchA%2FkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO697f8Ul%2FSquUmNwSrcAyCPMSxwf%2FlTWEbLC5jlASF%2FrneQELSNOYfj2KtVUP0B%2FY5v%2FAOtT0TT9Ap9ivZdUEfRFDLaauY4iS4K6BhkfdjEnP0EexEjk9novyAdweGqVCPmcR5yVJcrYn166tIRC6QLvL7G2an1gQ5yqiibHH%2B2SRYegSNxwS8p36%2BfX1imHipVFPpQUiEwG6A0hYnxuzYGwadtrZpuNK%2BzTTwWc8rBSQEDixWjjwFwLdoMwwEr%2BIlr5NYLNlXEP392EaD8TzgTXiTiv5443B0xFXSdSrNPYOZrhpgyWGzFaeUnxzKAnQMNo5Zqn4Z%2FDcgdh52W%2F5%2BFp8blEt8xOBRWV74Z%2BmPkdmxV4r6Zt%2BkBAJYlag3m1yIWeUXqZeVhbvSEVWUi1ODhHx5qJTqZ1PRbPvtW31RBRJd7l1iYh6uRQUTg6dRlHJXqe1uNLM5mbKZ%2FAJT%2BOaVzh5SA2G%2Fdd2DGT%2F3t919DTufckmUWzAtXK2wnpbLErvyKEmiMlAf0oj1jNG4dlKc%2F%2F60iB%2BwN5fhRnlh75rE7j4Jsjd%2BYNND21E%2Fg2D8UesxUfcZ%2FSBIxn1pg%2FnpmeCvpdWTnhDtl0ltusFd%2ByXl7xp5aFTBprm5yC3t8cRSgTYzq2dD%2BBYoOwYkPMNf4lcUGOqUBkE%2FamuazWNOwSglJqLoi1LOlcTQhQeHZ8PDwKuylqUeL%2B8jzgVJo4YBetM7MDLNAZtPFAI4koxtYFZOALW6n0pK%2B2ZZ4SaJpobImBKyMiH4j%2BSn%2By29TlMAcPPBpQga22lWQVkf8q%2B1TobW9ZJrEfLkxLtgSv66jo%2FmHx1KK5qLSMCiSGBMHK1csOzHbdbEsM8w%2B90sy9jXgPCOE9uvuYwd0z%2FpG&X-Amz-Signature=5e8602e3ba353aa6facd1851b92aa65f67adbd45b89a0efcfdc2b43302df8864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXKCLBDC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl4tSXZNW9vtBNxJ60TFHmsMV25K5uIYPj%2Bi3FwEEanAiEAq9rDamtTHNkwZhQGhW9%2FofXBErL61CAIjY9wvZchA%2FkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO697f8Ul%2FSquUmNwSrcAyCPMSxwf%2FlTWEbLC5jlASF%2FrneQELSNOYfj2KtVUP0B%2FY5v%2FAOtT0TT9Ap9ivZdUEfRFDLaauY4iS4K6BhkfdjEnP0EexEjk9novyAdweGqVCPmcR5yVJcrYn166tIRC6QLvL7G2an1gQ5yqiibHH%2B2SRYegSNxwS8p36%2BfX1imHipVFPpQUiEwG6A0hYnxuzYGwadtrZpuNK%2BzTTwWc8rBSQEDixWjjwFwLdoMwwEr%2BIlr5NYLNlXEP392EaD8TzgTXiTiv5443B0xFXSdSrNPYOZrhpgyWGzFaeUnxzKAnQMNo5Zqn4Z%2FDcgdh52W%2F5%2BFp8blEt8xOBRWV74Z%2BmPkdmxV4r6Zt%2BkBAJYlag3m1yIWeUXqZeVhbvSEVWUi1ODhHx5qJTqZ1PRbPvtW31RBRJd7l1iYh6uRQUTg6dRlHJXqe1uNLM5mbKZ%2FAJT%2BOaVzh5SA2G%2Fdd2DGT%2F3t919DTufckmUWzAtXK2wnpbLErvyKEmiMlAf0oj1jNG4dlKc%2F%2F60iB%2BwN5fhRnlh75rE7j4Jsjd%2BYNND21E%2Fg2D8UesxUfcZ%2FSBIxn1pg%2FnpmeCvpdWTnhDtl0ltusFd%2ByXl7xp5aFTBprm5yC3t8cRSgTYzq2dD%2BBYoOwYkPMNf4lcUGOqUBkE%2FamuazWNOwSglJqLoi1LOlcTQhQeHZ8PDwKuylqUeL%2B8jzgVJo4YBetM7MDLNAZtPFAI4koxtYFZOALW6n0pK%2B2ZZ4SaJpobImBKyMiH4j%2BSn%2By29TlMAcPPBpQga22lWQVkf8q%2B1TobW9ZJrEfLkxLtgSv66jo%2FmHx1KK5qLSMCiSGBMHK1csOzHbdbEsM8w%2B90sy9jXgPCOE9uvuYwd0z%2FpG&X-Amz-Signature=e245f5999132616e544e3e0df9f5a4e5079c817c9f35eb6fc703444e2e992f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXKCLBDC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl4tSXZNW9vtBNxJ60TFHmsMV25K5uIYPj%2Bi3FwEEanAiEAq9rDamtTHNkwZhQGhW9%2FofXBErL61CAIjY9wvZchA%2FkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO697f8Ul%2FSquUmNwSrcAyCPMSxwf%2FlTWEbLC5jlASF%2FrneQELSNOYfj2KtVUP0B%2FY5v%2FAOtT0TT9Ap9ivZdUEfRFDLaauY4iS4K6BhkfdjEnP0EexEjk9novyAdweGqVCPmcR5yVJcrYn166tIRC6QLvL7G2an1gQ5yqiibHH%2B2SRYegSNxwS8p36%2BfX1imHipVFPpQUiEwG6A0hYnxuzYGwadtrZpuNK%2BzTTwWc8rBSQEDixWjjwFwLdoMwwEr%2BIlr5NYLNlXEP392EaD8TzgTXiTiv5443B0xFXSdSrNPYOZrhpgyWGzFaeUnxzKAnQMNo5Zqn4Z%2FDcgdh52W%2F5%2BFp8blEt8xOBRWV74Z%2BmPkdmxV4r6Zt%2BkBAJYlag3m1yIWeUXqZeVhbvSEVWUi1ODhHx5qJTqZ1PRbPvtW31RBRJd7l1iYh6uRQUTg6dRlHJXqe1uNLM5mbKZ%2FAJT%2BOaVzh5SA2G%2Fdd2DGT%2F3t919DTufckmUWzAtXK2wnpbLErvyKEmiMlAf0oj1jNG4dlKc%2F%2F60iB%2BwN5fhRnlh75rE7j4Jsjd%2BYNND21E%2Fg2D8UesxUfcZ%2FSBIxn1pg%2FnpmeCvpdWTnhDtl0ltusFd%2ByXl7xp5aFTBprm5yC3t8cRSgTYzq2dD%2BBYoOwYkPMNf4lcUGOqUBkE%2FamuazWNOwSglJqLoi1LOlcTQhQeHZ8PDwKuylqUeL%2B8jzgVJo4YBetM7MDLNAZtPFAI4koxtYFZOALW6n0pK%2B2ZZ4SaJpobImBKyMiH4j%2BSn%2By29TlMAcPPBpQga22lWQVkf8q%2B1TobW9ZJrEfLkxLtgSv66jo%2FmHx1KK5qLSMCiSGBMHK1csOzHbdbEsM8w%2B90sy9jXgPCOE9uvuYwd0z%2FpG&X-Amz-Signature=b345e15cce9d72d5afd6e9341f74a887e2fea4cd408e9c66157f0a33e226fae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
