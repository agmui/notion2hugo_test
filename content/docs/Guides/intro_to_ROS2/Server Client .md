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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILLWQW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCfTuPOOJGysUdHpKuhvrdCXFDUc%2Ftbv57WCl1B7DBbLgIhAMcUWkzvm8QRbUKFgg%2BJGSEbEbW0OHWvYrLfmjANXKKeKv8DCHIQABoMNjM3NDIzMTgzODA1IgzfR1KXIlSAMUL1bcQq3ANwG92zAoI%2BdsAciq3EafEu%2FV7SpqVZju92hwSOQDWVjrc%2FMfRExuYRGK5nCRj9JyWVNvkV4QZjdlQtQcgaV34B5JijlwJUHHVs9iAcZRyLUJlmgrsBIZ70m1RtJBBZOq%2Bi24rdtsuy2vsY5UwWsLm9nrK5txr4mq6S%2F5v8bQcp8M71shaP3uc4Luo37vpdce9R2gS%2FCx0J7beGyYoZUhbyJ9asSuHkPN67Rc1R26WXs0NCpuTCPBRw1zN55i6WVkF93yk5ay1XWwpndtTt%2FfUT0ZtUtMmJn%2BwCvusQ8pCNRVzTbzjW8Il1%2FuYfnHUcdID4%2FTnQVk92SSaZAxdW2ZUsKq090IirjtJ%2BLJsgqQRMAQ3top3s8VFk0dw8bdEkMFrMcr3b3bAMyTGFuKAKvNeEzJZ9eiOHCKEEUwMqVRyL4Lvw3DBG6is2q%2Fxm30e8X3QKhNQkaVTQWtpFuZjGI%2FLbsh92jMvMG1MUbCCsIvuMemVJ6HMH9%2Bjwg06itrz5Dhh8AZqFWuSu6Lca3Xv9qIj5KhEwLn4H3ucWcJ7iBIZ9v2%2FM9pIpsfdjld8i%2B9T8Fwzu7xlp%2BFAT2cL6U%2BeVbzoNN9iK%2BqR0A1BB5n4Hk2GLygGV9TZwQMVA0K2m6zCr6su9BjqkAWmiZZ35Lo1xklZ3fYaqF56Bf4yAMJ9skRDCYsbIdb6qU%2BuXRJ1R6xKAIXAJcXFNeAbXqmjpP%2BpAeySAiyI2YZzCVNZ5RE6FUu%2Ft6FCf4ybnJwAzblFNwtV1lRRUPc4EmEFuahmlJhAlklraIbox0QnbxU2aPKNYX9jTgpRVhk6mFvYXOEhfshY9TqiRPXuirEuqZTgTAIWmCdYJeXbNEfrzBBaG&X-Amz-Signature=3540c375a5911f9bb6713672103b2a2db4bcc61faf05f3bc63cbc322c96aa17f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILLWQW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCfTuPOOJGysUdHpKuhvrdCXFDUc%2Ftbv57WCl1B7DBbLgIhAMcUWkzvm8QRbUKFgg%2BJGSEbEbW0OHWvYrLfmjANXKKeKv8DCHIQABoMNjM3NDIzMTgzODA1IgzfR1KXIlSAMUL1bcQq3ANwG92zAoI%2BdsAciq3EafEu%2FV7SpqVZju92hwSOQDWVjrc%2FMfRExuYRGK5nCRj9JyWVNvkV4QZjdlQtQcgaV34B5JijlwJUHHVs9iAcZRyLUJlmgrsBIZ70m1RtJBBZOq%2Bi24rdtsuy2vsY5UwWsLm9nrK5txr4mq6S%2F5v8bQcp8M71shaP3uc4Luo37vpdce9R2gS%2FCx0J7beGyYoZUhbyJ9asSuHkPN67Rc1R26WXs0NCpuTCPBRw1zN55i6WVkF93yk5ay1XWwpndtTt%2FfUT0ZtUtMmJn%2BwCvusQ8pCNRVzTbzjW8Il1%2FuYfnHUcdID4%2FTnQVk92SSaZAxdW2ZUsKq090IirjtJ%2BLJsgqQRMAQ3top3s8VFk0dw8bdEkMFrMcr3b3bAMyTGFuKAKvNeEzJZ9eiOHCKEEUwMqVRyL4Lvw3DBG6is2q%2Fxm30e8X3QKhNQkaVTQWtpFuZjGI%2FLbsh92jMvMG1MUbCCsIvuMemVJ6HMH9%2Bjwg06itrz5Dhh8AZqFWuSu6Lca3Xv9qIj5KhEwLn4H3ucWcJ7iBIZ9v2%2FM9pIpsfdjld8i%2B9T8Fwzu7xlp%2BFAT2cL6U%2BeVbzoNN9iK%2BqR0A1BB5n4Hk2GLygGV9TZwQMVA0K2m6zCr6su9BjqkAWmiZZ35Lo1xklZ3fYaqF56Bf4yAMJ9skRDCYsbIdb6qU%2BuXRJ1R6xKAIXAJcXFNeAbXqmjpP%2BpAeySAiyI2YZzCVNZ5RE6FUu%2Ft6FCf4ybnJwAzblFNwtV1lRRUPc4EmEFuahmlJhAlklraIbox0QnbxU2aPKNYX9jTgpRVhk6mFvYXOEhfshY9TqiRPXuirEuqZTgTAIWmCdYJeXbNEfrzBBaG&X-Amz-Signature=29b6a1edf980dfd6d85db70ba3adafd82789625fb0fd938c88b7bae45d50f109&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILLWQW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCfTuPOOJGysUdHpKuhvrdCXFDUc%2Ftbv57WCl1B7DBbLgIhAMcUWkzvm8QRbUKFgg%2BJGSEbEbW0OHWvYrLfmjANXKKeKv8DCHIQABoMNjM3NDIzMTgzODA1IgzfR1KXIlSAMUL1bcQq3ANwG92zAoI%2BdsAciq3EafEu%2FV7SpqVZju92hwSOQDWVjrc%2FMfRExuYRGK5nCRj9JyWVNvkV4QZjdlQtQcgaV34B5JijlwJUHHVs9iAcZRyLUJlmgrsBIZ70m1RtJBBZOq%2Bi24rdtsuy2vsY5UwWsLm9nrK5txr4mq6S%2F5v8bQcp8M71shaP3uc4Luo37vpdce9R2gS%2FCx0J7beGyYoZUhbyJ9asSuHkPN67Rc1R26WXs0NCpuTCPBRw1zN55i6WVkF93yk5ay1XWwpndtTt%2FfUT0ZtUtMmJn%2BwCvusQ8pCNRVzTbzjW8Il1%2FuYfnHUcdID4%2FTnQVk92SSaZAxdW2ZUsKq090IirjtJ%2BLJsgqQRMAQ3top3s8VFk0dw8bdEkMFrMcr3b3bAMyTGFuKAKvNeEzJZ9eiOHCKEEUwMqVRyL4Lvw3DBG6is2q%2Fxm30e8X3QKhNQkaVTQWtpFuZjGI%2FLbsh92jMvMG1MUbCCsIvuMemVJ6HMH9%2Bjwg06itrz5Dhh8AZqFWuSu6Lca3Xv9qIj5KhEwLn4H3ucWcJ7iBIZ9v2%2FM9pIpsfdjld8i%2B9T8Fwzu7xlp%2BFAT2cL6U%2BeVbzoNN9iK%2BqR0A1BB5n4Hk2GLygGV9TZwQMVA0K2m6zCr6su9BjqkAWmiZZ35Lo1xklZ3fYaqF56Bf4yAMJ9skRDCYsbIdb6qU%2BuXRJ1R6xKAIXAJcXFNeAbXqmjpP%2BpAeySAiyI2YZzCVNZ5RE6FUu%2Ft6FCf4ybnJwAzblFNwtV1lRRUPc4EmEFuahmlJhAlklraIbox0QnbxU2aPKNYX9jTgpRVhk6mFvYXOEhfshY9TqiRPXuirEuqZTgTAIWmCdYJeXbNEfrzBBaG&X-Amz-Signature=fab958281d8265b996dda39d40a764f698c6a96f1570689a2c42ea869fac77d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILLWQW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCfTuPOOJGysUdHpKuhvrdCXFDUc%2Ftbv57WCl1B7DBbLgIhAMcUWkzvm8QRbUKFgg%2BJGSEbEbW0OHWvYrLfmjANXKKeKv8DCHIQABoMNjM3NDIzMTgzODA1IgzfR1KXIlSAMUL1bcQq3ANwG92zAoI%2BdsAciq3EafEu%2FV7SpqVZju92hwSOQDWVjrc%2FMfRExuYRGK5nCRj9JyWVNvkV4QZjdlQtQcgaV34B5JijlwJUHHVs9iAcZRyLUJlmgrsBIZ70m1RtJBBZOq%2Bi24rdtsuy2vsY5UwWsLm9nrK5txr4mq6S%2F5v8bQcp8M71shaP3uc4Luo37vpdce9R2gS%2FCx0J7beGyYoZUhbyJ9asSuHkPN67Rc1R26WXs0NCpuTCPBRw1zN55i6WVkF93yk5ay1XWwpndtTt%2FfUT0ZtUtMmJn%2BwCvusQ8pCNRVzTbzjW8Il1%2FuYfnHUcdID4%2FTnQVk92SSaZAxdW2ZUsKq090IirjtJ%2BLJsgqQRMAQ3top3s8VFk0dw8bdEkMFrMcr3b3bAMyTGFuKAKvNeEzJZ9eiOHCKEEUwMqVRyL4Lvw3DBG6is2q%2Fxm30e8X3QKhNQkaVTQWtpFuZjGI%2FLbsh92jMvMG1MUbCCsIvuMemVJ6HMH9%2Bjwg06itrz5Dhh8AZqFWuSu6Lca3Xv9qIj5KhEwLn4H3ucWcJ7iBIZ9v2%2FM9pIpsfdjld8i%2B9T8Fwzu7xlp%2BFAT2cL6U%2BeVbzoNN9iK%2BqR0A1BB5n4Hk2GLygGV9TZwQMVA0K2m6zCr6su9BjqkAWmiZZ35Lo1xklZ3fYaqF56Bf4yAMJ9skRDCYsbIdb6qU%2BuXRJ1R6xKAIXAJcXFNeAbXqmjpP%2BpAeySAiyI2YZzCVNZ5RE6FUu%2Ft6FCf4ybnJwAzblFNwtV1lRRUPc4EmEFuahmlJhAlklraIbox0QnbxU2aPKNYX9jTgpRVhk6mFvYXOEhfshY9TqiRPXuirEuqZTgTAIWmCdYJeXbNEfrzBBaG&X-Amz-Signature=a104fc7a490164aca21e1b52a28513de1f9c621d1daacfa89eaf50b7d429d106&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILLWQW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCfTuPOOJGysUdHpKuhvrdCXFDUc%2Ftbv57WCl1B7DBbLgIhAMcUWkzvm8QRbUKFgg%2BJGSEbEbW0OHWvYrLfmjANXKKeKv8DCHIQABoMNjM3NDIzMTgzODA1IgzfR1KXIlSAMUL1bcQq3ANwG92zAoI%2BdsAciq3EafEu%2FV7SpqVZju92hwSOQDWVjrc%2FMfRExuYRGK5nCRj9JyWVNvkV4QZjdlQtQcgaV34B5JijlwJUHHVs9iAcZRyLUJlmgrsBIZ70m1RtJBBZOq%2Bi24rdtsuy2vsY5UwWsLm9nrK5txr4mq6S%2F5v8bQcp8M71shaP3uc4Luo37vpdce9R2gS%2FCx0J7beGyYoZUhbyJ9asSuHkPN67Rc1R26WXs0NCpuTCPBRw1zN55i6WVkF93yk5ay1XWwpndtTt%2FfUT0ZtUtMmJn%2BwCvusQ8pCNRVzTbzjW8Il1%2FuYfnHUcdID4%2FTnQVk92SSaZAxdW2ZUsKq090IirjtJ%2BLJsgqQRMAQ3top3s8VFk0dw8bdEkMFrMcr3b3bAMyTGFuKAKvNeEzJZ9eiOHCKEEUwMqVRyL4Lvw3DBG6is2q%2Fxm30e8X3QKhNQkaVTQWtpFuZjGI%2FLbsh92jMvMG1MUbCCsIvuMemVJ6HMH9%2Bjwg06itrz5Dhh8AZqFWuSu6Lca3Xv9qIj5KhEwLn4H3ucWcJ7iBIZ9v2%2FM9pIpsfdjld8i%2B9T8Fwzu7xlp%2BFAT2cL6U%2BeVbzoNN9iK%2BqR0A1BB5n4Hk2GLygGV9TZwQMVA0K2m6zCr6su9BjqkAWmiZZ35Lo1xklZ3fYaqF56Bf4yAMJ9skRDCYsbIdb6qU%2BuXRJ1R6xKAIXAJcXFNeAbXqmjpP%2BpAeySAiyI2YZzCVNZ5RE6FUu%2Ft6FCf4ybnJwAzblFNwtV1lRRUPc4EmEFuahmlJhAlklraIbox0QnbxU2aPKNYX9jTgpRVhk6mFvYXOEhfshY9TqiRPXuirEuqZTgTAIWmCdYJeXbNEfrzBBaG&X-Amz-Signature=9b50aa81652fde70ba41949625f233189beafe500a5f5976198e3b1aa1d4b23a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
