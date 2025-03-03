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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUV7BDA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdNRo8T6iGNPzl150QWAZYKtMCqc9S%2BFptIRAipFlEdAiBbb%2Bksk3iNW3k%2FXrb4oUeatMh9JO%2Fu9VQbWctgiLhWNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQs%2BAtHQthmMSotVKtwDEMvNRyrPWEwDR%2BEppRgYamJRNtNjlhCK9FsK9MWciU0ruCk59uOlfOi%2FnFJkTtqMk%2FT25kilMCu8swNYonPWv2N0g3FNodsODOgyPRKIfk9yiFbXj%2B2%2BwHjU4QToM9zcEk9IUIfKDyEgqXtTylomMqq4wCs8ddxAxGxjeVVge%2BKTLAickyCmAQFBcm21QqZ3mDb92U7wQc77BbJgbEGdUJZhKJuprkAXSV074zpBmafY9R1593gwUfoErC9nN4i66Wytza%2F4L9fF7fUu8xb070bV8sl9%2BMRoKG%2FXaWEl5YOrpVmMjZx1VKK7rgRPa9cM2oFFWa%2FknadbDJIXoQDj6YoRc2Q8Lb2bHxYmcv4AXr6PA%2FIvTTJ3Cmgse9jWJaWjN03%2BzzZA55ihjS1xDNjYwVkrQ01mZPuy2gt6vE5KxbVpQeyJZ8DwMyTs8n81TSAUBhYc8qWjSDvJnYu9hC8KlCxMPv0Luy1RRQRR7KVW2qJz4h968kJiek9NAMtPFUbJRpQ9RyWv75S6uiivDbYYnxgy36uduIPTgwSo96jLST2ErSn4dBtv%2BDGCB32i3OfTAqmekiMbMLnNReGKDvBEwuOcHZPfcf4UveC3wH1EPbIs96CPo2BP4W45Vrwwms6VvgY6pgHhYSPw2dz51z9yMNFDgi5OovD%2BSsuy%2FVjo59tzR3EhqmkFXoLR3wNsahAA5UfBueLg4GlIUtbScvo2lZDPW%2FUUNQxlebvxKyW3Mvp0Fv6fRz6bFIS3Zj5k5E3sFRPzvs6%2Bfu9mMDHbAn%2BMR7NnXh30Jk5zGgiyOph284BymYSgdGdsCSM9zKcfKOkV%2Bfa%2FNQBtq1DiC3LYRi26pAE7Z7TZZPRCzumI&X-Amz-Signature=1e7da4beba37e24a842c9c8165005be69a1d10bdd1ee6d09a50542d47d0fab8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUV7BDA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdNRo8T6iGNPzl150QWAZYKtMCqc9S%2BFptIRAipFlEdAiBbb%2Bksk3iNW3k%2FXrb4oUeatMh9JO%2Fu9VQbWctgiLhWNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQs%2BAtHQthmMSotVKtwDEMvNRyrPWEwDR%2BEppRgYamJRNtNjlhCK9FsK9MWciU0ruCk59uOlfOi%2FnFJkTtqMk%2FT25kilMCu8swNYonPWv2N0g3FNodsODOgyPRKIfk9yiFbXj%2B2%2BwHjU4QToM9zcEk9IUIfKDyEgqXtTylomMqq4wCs8ddxAxGxjeVVge%2BKTLAickyCmAQFBcm21QqZ3mDb92U7wQc77BbJgbEGdUJZhKJuprkAXSV074zpBmafY9R1593gwUfoErC9nN4i66Wytza%2F4L9fF7fUu8xb070bV8sl9%2BMRoKG%2FXaWEl5YOrpVmMjZx1VKK7rgRPa9cM2oFFWa%2FknadbDJIXoQDj6YoRc2Q8Lb2bHxYmcv4AXr6PA%2FIvTTJ3Cmgse9jWJaWjN03%2BzzZA55ihjS1xDNjYwVkrQ01mZPuy2gt6vE5KxbVpQeyJZ8DwMyTs8n81TSAUBhYc8qWjSDvJnYu9hC8KlCxMPv0Luy1RRQRR7KVW2qJz4h968kJiek9NAMtPFUbJRpQ9RyWv75S6uiivDbYYnxgy36uduIPTgwSo96jLST2ErSn4dBtv%2BDGCB32i3OfTAqmekiMbMLnNReGKDvBEwuOcHZPfcf4UveC3wH1EPbIs96CPo2BP4W45Vrwwms6VvgY6pgHhYSPw2dz51z9yMNFDgi5OovD%2BSsuy%2FVjo59tzR3EhqmkFXoLR3wNsahAA5UfBueLg4GlIUtbScvo2lZDPW%2FUUNQxlebvxKyW3Mvp0Fv6fRz6bFIS3Zj5k5E3sFRPzvs6%2Bfu9mMDHbAn%2BMR7NnXh30Jk5zGgiyOph284BymYSgdGdsCSM9zKcfKOkV%2Bfa%2FNQBtq1DiC3LYRi26pAE7Z7TZZPRCzumI&X-Amz-Signature=4eff1cf5a69effb92b4a39015358f7c3fb748d225aebcd2486869eef07ef5a04&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUV7BDA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdNRo8T6iGNPzl150QWAZYKtMCqc9S%2BFptIRAipFlEdAiBbb%2Bksk3iNW3k%2FXrb4oUeatMh9JO%2Fu9VQbWctgiLhWNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQs%2BAtHQthmMSotVKtwDEMvNRyrPWEwDR%2BEppRgYamJRNtNjlhCK9FsK9MWciU0ruCk59uOlfOi%2FnFJkTtqMk%2FT25kilMCu8swNYonPWv2N0g3FNodsODOgyPRKIfk9yiFbXj%2B2%2BwHjU4QToM9zcEk9IUIfKDyEgqXtTylomMqq4wCs8ddxAxGxjeVVge%2BKTLAickyCmAQFBcm21QqZ3mDb92U7wQc77BbJgbEGdUJZhKJuprkAXSV074zpBmafY9R1593gwUfoErC9nN4i66Wytza%2F4L9fF7fUu8xb070bV8sl9%2BMRoKG%2FXaWEl5YOrpVmMjZx1VKK7rgRPa9cM2oFFWa%2FknadbDJIXoQDj6YoRc2Q8Lb2bHxYmcv4AXr6PA%2FIvTTJ3Cmgse9jWJaWjN03%2BzzZA55ihjS1xDNjYwVkrQ01mZPuy2gt6vE5KxbVpQeyJZ8DwMyTs8n81TSAUBhYc8qWjSDvJnYu9hC8KlCxMPv0Luy1RRQRR7KVW2qJz4h968kJiek9NAMtPFUbJRpQ9RyWv75S6uiivDbYYnxgy36uduIPTgwSo96jLST2ErSn4dBtv%2BDGCB32i3OfTAqmekiMbMLnNReGKDvBEwuOcHZPfcf4UveC3wH1EPbIs96CPo2BP4W45Vrwwms6VvgY6pgHhYSPw2dz51z9yMNFDgi5OovD%2BSsuy%2FVjo59tzR3EhqmkFXoLR3wNsahAA5UfBueLg4GlIUtbScvo2lZDPW%2FUUNQxlebvxKyW3Mvp0Fv6fRz6bFIS3Zj5k5E3sFRPzvs6%2Bfu9mMDHbAn%2BMR7NnXh30Jk5zGgiyOph284BymYSgdGdsCSM9zKcfKOkV%2Bfa%2FNQBtq1DiC3LYRi26pAE7Z7TZZPRCzumI&X-Amz-Signature=b28ff55438a57b36d7f6d540ceb889d71f333d462d17b605d480c513111eef1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUV7BDA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdNRo8T6iGNPzl150QWAZYKtMCqc9S%2BFptIRAipFlEdAiBbb%2Bksk3iNW3k%2FXrb4oUeatMh9JO%2Fu9VQbWctgiLhWNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQs%2BAtHQthmMSotVKtwDEMvNRyrPWEwDR%2BEppRgYamJRNtNjlhCK9FsK9MWciU0ruCk59uOlfOi%2FnFJkTtqMk%2FT25kilMCu8swNYonPWv2N0g3FNodsODOgyPRKIfk9yiFbXj%2B2%2BwHjU4QToM9zcEk9IUIfKDyEgqXtTylomMqq4wCs8ddxAxGxjeVVge%2BKTLAickyCmAQFBcm21QqZ3mDb92U7wQc77BbJgbEGdUJZhKJuprkAXSV074zpBmafY9R1593gwUfoErC9nN4i66Wytza%2F4L9fF7fUu8xb070bV8sl9%2BMRoKG%2FXaWEl5YOrpVmMjZx1VKK7rgRPa9cM2oFFWa%2FknadbDJIXoQDj6YoRc2Q8Lb2bHxYmcv4AXr6PA%2FIvTTJ3Cmgse9jWJaWjN03%2BzzZA55ihjS1xDNjYwVkrQ01mZPuy2gt6vE5KxbVpQeyJZ8DwMyTs8n81TSAUBhYc8qWjSDvJnYu9hC8KlCxMPv0Luy1RRQRR7KVW2qJz4h968kJiek9NAMtPFUbJRpQ9RyWv75S6uiivDbYYnxgy36uduIPTgwSo96jLST2ErSn4dBtv%2BDGCB32i3OfTAqmekiMbMLnNReGKDvBEwuOcHZPfcf4UveC3wH1EPbIs96CPo2BP4W45Vrwwms6VvgY6pgHhYSPw2dz51z9yMNFDgi5OovD%2BSsuy%2FVjo59tzR3EhqmkFXoLR3wNsahAA5UfBueLg4GlIUtbScvo2lZDPW%2FUUNQxlebvxKyW3Mvp0Fv6fRz6bFIS3Zj5k5E3sFRPzvs6%2Bfu9mMDHbAn%2BMR7NnXh30Jk5zGgiyOph284BymYSgdGdsCSM9zKcfKOkV%2Bfa%2FNQBtq1DiC3LYRi26pAE7Z7TZZPRCzumI&X-Amz-Signature=95fb7e6a89d4437ae4baa0bd6ba0577c94b1a0554f5bea6151448b9bbaaf2743&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUV7BDA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdNRo8T6iGNPzl150QWAZYKtMCqc9S%2BFptIRAipFlEdAiBbb%2Bksk3iNW3k%2FXrb4oUeatMh9JO%2Fu9VQbWctgiLhWNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQs%2BAtHQthmMSotVKtwDEMvNRyrPWEwDR%2BEppRgYamJRNtNjlhCK9FsK9MWciU0ruCk59uOlfOi%2FnFJkTtqMk%2FT25kilMCu8swNYonPWv2N0g3FNodsODOgyPRKIfk9yiFbXj%2B2%2BwHjU4QToM9zcEk9IUIfKDyEgqXtTylomMqq4wCs8ddxAxGxjeVVge%2BKTLAickyCmAQFBcm21QqZ3mDb92U7wQc77BbJgbEGdUJZhKJuprkAXSV074zpBmafY9R1593gwUfoErC9nN4i66Wytza%2F4L9fF7fUu8xb070bV8sl9%2BMRoKG%2FXaWEl5YOrpVmMjZx1VKK7rgRPa9cM2oFFWa%2FknadbDJIXoQDj6YoRc2Q8Lb2bHxYmcv4AXr6PA%2FIvTTJ3Cmgse9jWJaWjN03%2BzzZA55ihjS1xDNjYwVkrQ01mZPuy2gt6vE5KxbVpQeyJZ8DwMyTs8n81TSAUBhYc8qWjSDvJnYu9hC8KlCxMPv0Luy1RRQRR7KVW2qJz4h968kJiek9NAMtPFUbJRpQ9RyWv75S6uiivDbYYnxgy36uduIPTgwSo96jLST2ErSn4dBtv%2BDGCB32i3OfTAqmekiMbMLnNReGKDvBEwuOcHZPfcf4UveC3wH1EPbIs96CPo2BP4W45Vrwwms6VvgY6pgHhYSPw2dz51z9yMNFDgi5OovD%2BSsuy%2FVjo59tzR3EhqmkFXoLR3wNsahAA5UfBueLg4GlIUtbScvo2lZDPW%2FUUNQxlebvxKyW3Mvp0Fv6fRz6bFIS3Zj5k5E3sFRPzvs6%2Bfu9mMDHbAn%2BMR7NnXh30Jk5zGgiyOph284BymYSgdGdsCSM9zKcfKOkV%2Bfa%2FNQBtq1DiC3LYRi26pAE7Z7TZZPRCzumI&X-Amz-Signature=7eddb864e4d265e4678f020652d2bc15b6362b5074d307f98b695c4654fda658&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
