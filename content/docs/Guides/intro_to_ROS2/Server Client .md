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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROVDISG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzJtFLKyO75L6BtnslNTX%2FlYPgIAolt9%2FCk0VRSw130gIgSR5eRqhksPdMg0xTKs3LcDYX4xN3DWSEpH7KRiidD8Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHPO0FZqN6%2FEXAg8vircA0InzWz00dvEDbAdI3AIp%2B8nGfceNupMz%2FVbrKfNZylQXKUe7xWqfIoMnN%2BIqjwzRMRQ3dOfAVXwaoKSMBoCalz7bh6YNR8Pv462LxQUjyPcDC6O5GICc02yR0v9vqfhiIOjxMn6ZvwL3L%2FAdH9vPIxa2A6gD0H%2F1mDhIforDts4u%2F57I47Fs3k3UtH0YXkVqrQfW%2BbjwQiaBeCrjRXRSV4p0BquFRUhzgxn7y6aG0HT4ve7tchf1r%2BQ6WSUhHpdaFbtrONcxojGD%2BI5TN6PpuBSjheuc4tTfF4xl0tj9OpZAen6SAv2dkr73v3M5LspSg2z47Q%2FiPZLB2vey8Dltea%2FKgwszOpmmzduVLnej4r88F2prj0BxzlUCbgThQ%2FpQX72WoH%2F5%2BZCW18uvCORXncBV8gA%2FWlLjovBd3D%2BLdsvw%2BMYpWl%2FnG5OWCji27SQxXSQVQJyPNcy%2FNO%2BnMn16zu7SJiDTykZRwI0ouyDaZ%2BHw1dI548rLbkqxb0j11qn9VT7Z0ASU1Ufo573tlQdyifisDt8XsCq4f3hVp9oG%2FDF9Sca%2BXS%2BR4sBX5xKTkNRNAAPwPRMqij0hsA7jiHbmMsAgWHUyWHNKERXfOkHpzJwz%2FkpoFQ3lssYogaZMPKSxr8GOqUBSWZ2H4kgMZhKHK0bf2awxb3M%2FQJeNE%2BiWXyqDCF5JPS79mVV6KkhbL2x1w%2Ftx%2F97EvsSm9BWOTW7lKA18Iz3jvlQkYRkSwG6554J%2FpTqSi%2FENE30BD6DlFHibFbznmp7StVWw2V9tQ0G8xlpENdxLqjHJj%2BVNiOLxQCwtOW9Hm0KcU91ntr0lb6mS4VN4qfZvISbSFyn0DPVSYILsOKNa1SJ3z%2BL&X-Amz-Signature=d820523012f2b2b524063f6e7f160340747b0f3ebf4a147edfdc8057d31b9a06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROVDISG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzJtFLKyO75L6BtnslNTX%2FlYPgIAolt9%2FCk0VRSw130gIgSR5eRqhksPdMg0xTKs3LcDYX4xN3DWSEpH7KRiidD8Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHPO0FZqN6%2FEXAg8vircA0InzWz00dvEDbAdI3AIp%2B8nGfceNupMz%2FVbrKfNZylQXKUe7xWqfIoMnN%2BIqjwzRMRQ3dOfAVXwaoKSMBoCalz7bh6YNR8Pv462LxQUjyPcDC6O5GICc02yR0v9vqfhiIOjxMn6ZvwL3L%2FAdH9vPIxa2A6gD0H%2F1mDhIforDts4u%2F57I47Fs3k3UtH0YXkVqrQfW%2BbjwQiaBeCrjRXRSV4p0BquFRUhzgxn7y6aG0HT4ve7tchf1r%2BQ6WSUhHpdaFbtrONcxojGD%2BI5TN6PpuBSjheuc4tTfF4xl0tj9OpZAen6SAv2dkr73v3M5LspSg2z47Q%2FiPZLB2vey8Dltea%2FKgwszOpmmzduVLnej4r88F2prj0BxzlUCbgThQ%2FpQX72WoH%2F5%2BZCW18uvCORXncBV8gA%2FWlLjovBd3D%2BLdsvw%2BMYpWl%2FnG5OWCji27SQxXSQVQJyPNcy%2FNO%2BnMn16zu7SJiDTykZRwI0ouyDaZ%2BHw1dI548rLbkqxb0j11qn9VT7Z0ASU1Ufo573tlQdyifisDt8XsCq4f3hVp9oG%2FDF9Sca%2BXS%2BR4sBX5xKTkNRNAAPwPRMqij0hsA7jiHbmMsAgWHUyWHNKERXfOkHpzJwz%2FkpoFQ3lssYogaZMPKSxr8GOqUBSWZ2H4kgMZhKHK0bf2awxb3M%2FQJeNE%2BiWXyqDCF5JPS79mVV6KkhbL2x1w%2Ftx%2F97EvsSm9BWOTW7lKA18Iz3jvlQkYRkSwG6554J%2FpTqSi%2FENE30BD6DlFHibFbznmp7StVWw2V9tQ0G8xlpENdxLqjHJj%2BVNiOLxQCwtOW9Hm0KcU91ntr0lb6mS4VN4qfZvISbSFyn0DPVSYILsOKNa1SJ3z%2BL&X-Amz-Signature=0d24854a230858bc9623b61fc26c3f6a685975ae474d8721ad9fc2e5c3b696e9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROVDISG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzJtFLKyO75L6BtnslNTX%2FlYPgIAolt9%2FCk0VRSw130gIgSR5eRqhksPdMg0xTKs3LcDYX4xN3DWSEpH7KRiidD8Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHPO0FZqN6%2FEXAg8vircA0InzWz00dvEDbAdI3AIp%2B8nGfceNupMz%2FVbrKfNZylQXKUe7xWqfIoMnN%2BIqjwzRMRQ3dOfAVXwaoKSMBoCalz7bh6YNR8Pv462LxQUjyPcDC6O5GICc02yR0v9vqfhiIOjxMn6ZvwL3L%2FAdH9vPIxa2A6gD0H%2F1mDhIforDts4u%2F57I47Fs3k3UtH0YXkVqrQfW%2BbjwQiaBeCrjRXRSV4p0BquFRUhzgxn7y6aG0HT4ve7tchf1r%2BQ6WSUhHpdaFbtrONcxojGD%2BI5TN6PpuBSjheuc4tTfF4xl0tj9OpZAen6SAv2dkr73v3M5LspSg2z47Q%2FiPZLB2vey8Dltea%2FKgwszOpmmzduVLnej4r88F2prj0BxzlUCbgThQ%2FpQX72WoH%2F5%2BZCW18uvCORXncBV8gA%2FWlLjovBd3D%2BLdsvw%2BMYpWl%2FnG5OWCji27SQxXSQVQJyPNcy%2FNO%2BnMn16zu7SJiDTykZRwI0ouyDaZ%2BHw1dI548rLbkqxb0j11qn9VT7Z0ASU1Ufo573tlQdyifisDt8XsCq4f3hVp9oG%2FDF9Sca%2BXS%2BR4sBX5xKTkNRNAAPwPRMqij0hsA7jiHbmMsAgWHUyWHNKERXfOkHpzJwz%2FkpoFQ3lssYogaZMPKSxr8GOqUBSWZ2H4kgMZhKHK0bf2awxb3M%2FQJeNE%2BiWXyqDCF5JPS79mVV6KkhbL2x1w%2Ftx%2F97EvsSm9BWOTW7lKA18Iz3jvlQkYRkSwG6554J%2FpTqSi%2FENE30BD6DlFHibFbznmp7StVWw2V9tQ0G8xlpENdxLqjHJj%2BVNiOLxQCwtOW9Hm0KcU91ntr0lb6mS4VN4qfZvISbSFyn0DPVSYILsOKNa1SJ3z%2BL&X-Amz-Signature=61b90dfe3c05be27b709f7b5531586095689c38e19089ac57442db75373d462c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROVDISG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzJtFLKyO75L6BtnslNTX%2FlYPgIAolt9%2FCk0VRSw130gIgSR5eRqhksPdMg0xTKs3LcDYX4xN3DWSEpH7KRiidD8Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHPO0FZqN6%2FEXAg8vircA0InzWz00dvEDbAdI3AIp%2B8nGfceNupMz%2FVbrKfNZylQXKUe7xWqfIoMnN%2BIqjwzRMRQ3dOfAVXwaoKSMBoCalz7bh6YNR8Pv462LxQUjyPcDC6O5GICc02yR0v9vqfhiIOjxMn6ZvwL3L%2FAdH9vPIxa2A6gD0H%2F1mDhIforDts4u%2F57I47Fs3k3UtH0YXkVqrQfW%2BbjwQiaBeCrjRXRSV4p0BquFRUhzgxn7y6aG0HT4ve7tchf1r%2BQ6WSUhHpdaFbtrONcxojGD%2BI5TN6PpuBSjheuc4tTfF4xl0tj9OpZAen6SAv2dkr73v3M5LspSg2z47Q%2FiPZLB2vey8Dltea%2FKgwszOpmmzduVLnej4r88F2prj0BxzlUCbgThQ%2FpQX72WoH%2F5%2BZCW18uvCORXncBV8gA%2FWlLjovBd3D%2BLdsvw%2BMYpWl%2FnG5OWCji27SQxXSQVQJyPNcy%2FNO%2BnMn16zu7SJiDTykZRwI0ouyDaZ%2BHw1dI548rLbkqxb0j11qn9VT7Z0ASU1Ufo573tlQdyifisDt8XsCq4f3hVp9oG%2FDF9Sca%2BXS%2BR4sBX5xKTkNRNAAPwPRMqij0hsA7jiHbmMsAgWHUyWHNKERXfOkHpzJwz%2FkpoFQ3lssYogaZMPKSxr8GOqUBSWZ2H4kgMZhKHK0bf2awxb3M%2FQJeNE%2BiWXyqDCF5JPS79mVV6KkhbL2x1w%2Ftx%2F97EvsSm9BWOTW7lKA18Iz3jvlQkYRkSwG6554J%2FpTqSi%2FENE30BD6DlFHibFbznmp7StVWw2V9tQ0G8xlpENdxLqjHJj%2BVNiOLxQCwtOW9Hm0KcU91ntr0lb6mS4VN4qfZvISbSFyn0DPVSYILsOKNa1SJ3z%2BL&X-Amz-Signature=af6fad14f18d996861ef24f7e45c4e0141bea24fef9adeb5aeeefd85ef36ac9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROVDISG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzJtFLKyO75L6BtnslNTX%2FlYPgIAolt9%2FCk0VRSw130gIgSR5eRqhksPdMg0xTKs3LcDYX4xN3DWSEpH7KRiidD8Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHPO0FZqN6%2FEXAg8vircA0InzWz00dvEDbAdI3AIp%2B8nGfceNupMz%2FVbrKfNZylQXKUe7xWqfIoMnN%2BIqjwzRMRQ3dOfAVXwaoKSMBoCalz7bh6YNR8Pv462LxQUjyPcDC6O5GICc02yR0v9vqfhiIOjxMn6ZvwL3L%2FAdH9vPIxa2A6gD0H%2F1mDhIforDts4u%2F57I47Fs3k3UtH0YXkVqrQfW%2BbjwQiaBeCrjRXRSV4p0BquFRUhzgxn7y6aG0HT4ve7tchf1r%2BQ6WSUhHpdaFbtrONcxojGD%2BI5TN6PpuBSjheuc4tTfF4xl0tj9OpZAen6SAv2dkr73v3M5LspSg2z47Q%2FiPZLB2vey8Dltea%2FKgwszOpmmzduVLnej4r88F2prj0BxzlUCbgThQ%2FpQX72WoH%2F5%2BZCW18uvCORXncBV8gA%2FWlLjovBd3D%2BLdsvw%2BMYpWl%2FnG5OWCji27SQxXSQVQJyPNcy%2FNO%2BnMn16zu7SJiDTykZRwI0ouyDaZ%2BHw1dI548rLbkqxb0j11qn9VT7Z0ASU1Ufo573tlQdyifisDt8XsCq4f3hVp9oG%2FDF9Sca%2BXS%2BR4sBX5xKTkNRNAAPwPRMqij0hsA7jiHbmMsAgWHUyWHNKERXfOkHpzJwz%2FkpoFQ3lssYogaZMPKSxr8GOqUBSWZ2H4kgMZhKHK0bf2awxb3M%2FQJeNE%2BiWXyqDCF5JPS79mVV6KkhbL2x1w%2Ftx%2F97EvsSm9BWOTW7lKA18Iz3jvlQkYRkSwG6554J%2FpTqSi%2FENE30BD6DlFHibFbznmp7StVWw2V9tQ0G8xlpENdxLqjHJj%2BVNiOLxQCwtOW9Hm0KcU91ntr0lb6mS4VN4qfZvISbSFyn0DPVSYILsOKNa1SJ3z%2BL&X-Amz-Signature=3ce2dc822c178ae569dc4051c583856e1e5e2b32c106b5072e7f5f9a78a045d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
