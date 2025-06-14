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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEDLSI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDwOSx4EJBYMuaSi7xMIRc5QnfTNKkbESOXv%2Bj%2FaaPqEgIhAPAtfm7c9KCGA6z3issfamV1qICLEGGYI8NCyOFjJAauKv8DCDMQABoMNjM3NDIzMTgzODA1IgyQ3MBQGQFjDtkrWtsq3AN5SyTfFtWDSRyxpiZjfQPSjllpGkUGRcQqOjIsWLCrZnriyKwREt%2Fnj75h74IxwNfbIWVxuZIZ2p9PsMUvR6JRrB0zma%2B2TMqYw2HTGhv5bS7U4lmZskd5rEZ%2B7isPFLtkyVFGEnn3%2FHHVPC7ZQ4RdsnrRFVlP9lDwDW0bGos2Q5mZlYt0dl6%2BUe1zK1Y9itwwuweJwSN6JnF%2FWbia0au0502N7%2B3BULBX53GH%2B1TuBh599%2FNZZwYe8QFSANIDbJgqBIKBgE7y4mOzm%2FuWPj5P86K%2B510nMjvQ%2Ft0GZ2cGk6OFbULgbMNCOA5YN9IKIQ9oCQdTCCgn5pGYaI3Fg7U%2Fqz6D%2FncUxh74llhE%2FKRP0ogK1h96xAJWkOn0E720aN0DGqUhrItmFAu1WzBwdG%2BTb3ax1Et%2FLSGUnHbMuyCADeNUCoCV6JBDby5S5IDYfhEzPSigoDlhV%2BAG8uK8cW8E0asWAldmGKNDpoDndybZ4maAgXRQsxkU%2FpbOf%2BHWVu2y4gfbgMp7LM0ddS4781tto5LR%2FtwGsOGNEbSjWP1K7Wfw4OIjc3ZQXDj95KVXe1Tv%2Bt5X417pET5amSuBuY5mFJar%2BeseW6sxeERm%2FRzoeenjUEnPTjU07K756TDL%2BrbCBjqkAXPMZNvVl2KFL%2FyCscmoghY4Zxbrr8NPbK5B6BljzBinEENxVqe7zxOyPbls716%2FvQwqaXThUykMkCn92Xt524UC1hfYEfv7OguVaMXh8a%2Bs5Nlh8o1yFa6ZSgcQKUvIBToMWmVC3AvGxpkVfX8wrZ2abNb%2FFqwf7Cu5dWRe%2BdnbDHGUrS4rErT9rPJv7MlqrElCmi1856MyPd7t1IJff2NOr7hh&X-Amz-Signature=6476efdb22f847ce99558c1baf301cd00475b9448dfae29fa6ca201d988cdd20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEDLSI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDwOSx4EJBYMuaSi7xMIRc5QnfTNKkbESOXv%2Bj%2FaaPqEgIhAPAtfm7c9KCGA6z3issfamV1qICLEGGYI8NCyOFjJAauKv8DCDMQABoMNjM3NDIzMTgzODA1IgyQ3MBQGQFjDtkrWtsq3AN5SyTfFtWDSRyxpiZjfQPSjllpGkUGRcQqOjIsWLCrZnriyKwREt%2Fnj75h74IxwNfbIWVxuZIZ2p9PsMUvR6JRrB0zma%2B2TMqYw2HTGhv5bS7U4lmZskd5rEZ%2B7isPFLtkyVFGEnn3%2FHHVPC7ZQ4RdsnrRFVlP9lDwDW0bGos2Q5mZlYt0dl6%2BUe1zK1Y9itwwuweJwSN6JnF%2FWbia0au0502N7%2B3BULBX53GH%2B1TuBh599%2FNZZwYe8QFSANIDbJgqBIKBgE7y4mOzm%2FuWPj5P86K%2B510nMjvQ%2Ft0GZ2cGk6OFbULgbMNCOA5YN9IKIQ9oCQdTCCgn5pGYaI3Fg7U%2Fqz6D%2FncUxh74llhE%2FKRP0ogK1h96xAJWkOn0E720aN0DGqUhrItmFAu1WzBwdG%2BTb3ax1Et%2FLSGUnHbMuyCADeNUCoCV6JBDby5S5IDYfhEzPSigoDlhV%2BAG8uK8cW8E0asWAldmGKNDpoDndybZ4maAgXRQsxkU%2FpbOf%2BHWVu2y4gfbgMp7LM0ddS4781tto5LR%2FtwGsOGNEbSjWP1K7Wfw4OIjc3ZQXDj95KVXe1Tv%2Bt5X417pET5amSuBuY5mFJar%2BeseW6sxeERm%2FRzoeenjUEnPTjU07K756TDL%2BrbCBjqkAXPMZNvVl2KFL%2FyCscmoghY4Zxbrr8NPbK5B6BljzBinEENxVqe7zxOyPbls716%2FvQwqaXThUykMkCn92Xt524UC1hfYEfv7OguVaMXh8a%2Bs5Nlh8o1yFa6ZSgcQKUvIBToMWmVC3AvGxpkVfX8wrZ2abNb%2FFqwf7Cu5dWRe%2BdnbDHGUrS4rErT9rPJv7MlqrElCmi1856MyPd7t1IJff2NOr7hh&X-Amz-Signature=6ffcf36d059e51b29d5cd4bad45820049277c6ce02c8a04ea378e0d9939850f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEDLSI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDwOSx4EJBYMuaSi7xMIRc5QnfTNKkbESOXv%2Bj%2FaaPqEgIhAPAtfm7c9KCGA6z3issfamV1qICLEGGYI8NCyOFjJAauKv8DCDMQABoMNjM3NDIzMTgzODA1IgyQ3MBQGQFjDtkrWtsq3AN5SyTfFtWDSRyxpiZjfQPSjllpGkUGRcQqOjIsWLCrZnriyKwREt%2Fnj75h74IxwNfbIWVxuZIZ2p9PsMUvR6JRrB0zma%2B2TMqYw2HTGhv5bS7U4lmZskd5rEZ%2B7isPFLtkyVFGEnn3%2FHHVPC7ZQ4RdsnrRFVlP9lDwDW0bGos2Q5mZlYt0dl6%2BUe1zK1Y9itwwuweJwSN6JnF%2FWbia0au0502N7%2B3BULBX53GH%2B1TuBh599%2FNZZwYe8QFSANIDbJgqBIKBgE7y4mOzm%2FuWPj5P86K%2B510nMjvQ%2Ft0GZ2cGk6OFbULgbMNCOA5YN9IKIQ9oCQdTCCgn5pGYaI3Fg7U%2Fqz6D%2FncUxh74llhE%2FKRP0ogK1h96xAJWkOn0E720aN0DGqUhrItmFAu1WzBwdG%2BTb3ax1Et%2FLSGUnHbMuyCADeNUCoCV6JBDby5S5IDYfhEzPSigoDlhV%2BAG8uK8cW8E0asWAldmGKNDpoDndybZ4maAgXRQsxkU%2FpbOf%2BHWVu2y4gfbgMp7LM0ddS4781tto5LR%2FtwGsOGNEbSjWP1K7Wfw4OIjc3ZQXDj95KVXe1Tv%2Bt5X417pET5amSuBuY5mFJar%2BeseW6sxeERm%2FRzoeenjUEnPTjU07K756TDL%2BrbCBjqkAXPMZNvVl2KFL%2FyCscmoghY4Zxbrr8NPbK5B6BljzBinEENxVqe7zxOyPbls716%2FvQwqaXThUykMkCn92Xt524UC1hfYEfv7OguVaMXh8a%2Bs5Nlh8o1yFa6ZSgcQKUvIBToMWmVC3AvGxpkVfX8wrZ2abNb%2FFqwf7Cu5dWRe%2BdnbDHGUrS4rErT9rPJv7MlqrElCmi1856MyPd7t1IJff2NOr7hh&X-Amz-Signature=057b80765a02c30819a7145822c810433d4c16abcc64d0d9244d3e598e3ee889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEDLSI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDwOSx4EJBYMuaSi7xMIRc5QnfTNKkbESOXv%2Bj%2FaaPqEgIhAPAtfm7c9KCGA6z3issfamV1qICLEGGYI8NCyOFjJAauKv8DCDMQABoMNjM3NDIzMTgzODA1IgyQ3MBQGQFjDtkrWtsq3AN5SyTfFtWDSRyxpiZjfQPSjllpGkUGRcQqOjIsWLCrZnriyKwREt%2Fnj75h74IxwNfbIWVxuZIZ2p9PsMUvR6JRrB0zma%2B2TMqYw2HTGhv5bS7U4lmZskd5rEZ%2B7isPFLtkyVFGEnn3%2FHHVPC7ZQ4RdsnrRFVlP9lDwDW0bGos2Q5mZlYt0dl6%2BUe1zK1Y9itwwuweJwSN6JnF%2FWbia0au0502N7%2B3BULBX53GH%2B1TuBh599%2FNZZwYe8QFSANIDbJgqBIKBgE7y4mOzm%2FuWPj5P86K%2B510nMjvQ%2Ft0GZ2cGk6OFbULgbMNCOA5YN9IKIQ9oCQdTCCgn5pGYaI3Fg7U%2Fqz6D%2FncUxh74llhE%2FKRP0ogK1h96xAJWkOn0E720aN0DGqUhrItmFAu1WzBwdG%2BTb3ax1Et%2FLSGUnHbMuyCADeNUCoCV6JBDby5S5IDYfhEzPSigoDlhV%2BAG8uK8cW8E0asWAldmGKNDpoDndybZ4maAgXRQsxkU%2FpbOf%2BHWVu2y4gfbgMp7LM0ddS4781tto5LR%2FtwGsOGNEbSjWP1K7Wfw4OIjc3ZQXDj95KVXe1Tv%2Bt5X417pET5amSuBuY5mFJar%2BeseW6sxeERm%2FRzoeenjUEnPTjU07K756TDL%2BrbCBjqkAXPMZNvVl2KFL%2FyCscmoghY4Zxbrr8NPbK5B6BljzBinEENxVqe7zxOyPbls716%2FvQwqaXThUykMkCn92Xt524UC1hfYEfv7OguVaMXh8a%2Bs5Nlh8o1yFa6ZSgcQKUvIBToMWmVC3AvGxpkVfX8wrZ2abNb%2FFqwf7Cu5dWRe%2BdnbDHGUrS4rErT9rPJv7MlqrElCmi1856MyPd7t1IJff2NOr7hh&X-Amz-Signature=6665b8f9a4e887c75fafb841906dc500279020102801f86a1fcf787dde4236c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEDLSI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDwOSx4EJBYMuaSi7xMIRc5QnfTNKkbESOXv%2Bj%2FaaPqEgIhAPAtfm7c9KCGA6z3issfamV1qICLEGGYI8NCyOFjJAauKv8DCDMQABoMNjM3NDIzMTgzODA1IgyQ3MBQGQFjDtkrWtsq3AN5SyTfFtWDSRyxpiZjfQPSjllpGkUGRcQqOjIsWLCrZnriyKwREt%2Fnj75h74IxwNfbIWVxuZIZ2p9PsMUvR6JRrB0zma%2B2TMqYw2HTGhv5bS7U4lmZskd5rEZ%2B7isPFLtkyVFGEnn3%2FHHVPC7ZQ4RdsnrRFVlP9lDwDW0bGos2Q5mZlYt0dl6%2BUe1zK1Y9itwwuweJwSN6JnF%2FWbia0au0502N7%2B3BULBX53GH%2B1TuBh599%2FNZZwYe8QFSANIDbJgqBIKBgE7y4mOzm%2FuWPj5P86K%2B510nMjvQ%2Ft0GZ2cGk6OFbULgbMNCOA5YN9IKIQ9oCQdTCCgn5pGYaI3Fg7U%2Fqz6D%2FncUxh74llhE%2FKRP0ogK1h96xAJWkOn0E720aN0DGqUhrItmFAu1WzBwdG%2BTb3ax1Et%2FLSGUnHbMuyCADeNUCoCV6JBDby5S5IDYfhEzPSigoDlhV%2BAG8uK8cW8E0asWAldmGKNDpoDndybZ4maAgXRQsxkU%2FpbOf%2BHWVu2y4gfbgMp7LM0ddS4781tto5LR%2FtwGsOGNEbSjWP1K7Wfw4OIjc3ZQXDj95KVXe1Tv%2Bt5X417pET5amSuBuY5mFJar%2BeseW6sxeERm%2FRzoeenjUEnPTjU07K756TDL%2BrbCBjqkAXPMZNvVl2KFL%2FyCscmoghY4Zxbrr8NPbK5B6BljzBinEENxVqe7zxOyPbls716%2FvQwqaXThUykMkCn92Xt524UC1hfYEfv7OguVaMXh8a%2Bs5Nlh8o1yFa6ZSgcQKUvIBToMWmVC3AvGxpkVfX8wrZ2abNb%2FFqwf7Cu5dWRe%2BdnbDHGUrS4rErT9rPJv7MlqrElCmi1856MyPd7t1IJff2NOr7hh&X-Amz-Signature=99717c775009d6fed15330d5cb702fe0b90b1879f56d757b5225a9647963448f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
