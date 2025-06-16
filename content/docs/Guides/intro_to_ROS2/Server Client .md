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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MT5Z2RU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDkSHJF7tw7qYUhf%2FJSc75GR6rBa6xTs0CaNqKNoEo%2FLgIhAKjkxI7OrwUNJrXjD7wmsJgsY6fHBYKj9Yq%2BwgGa8zJ3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzLYnta0%2BCFRPYoqAIq3APBeI3mSohzH1HqWERgC5%2BHQpx4%2BVktYi9%2FqcBXNgXSPuLsgt0yPtz4ETSNWmV1YCp4kDqU6rCKJRlHg7DJjPrC81tapN15vZuS5we1yNfNwScMwG20uFZjGPxgPqTigBGT%2BXaW84X3bPK1gW3BPFO%2FvpR09oDYR6kcsE4t0VQ3jmMW%2F4RuElYZsoqYTzRp9677PCbcxnrNMZqPS5V%2FR%2BohDJXEQo2LXG%2FiFgYkyiq0kKJW0aF%2B7y9kyLWUK1W7XozAEeSo6UcWkqISzmsOBvTE9pjjn%2Besv463SbTIq0YngztrDy4Sc7%2FHemgAMpY8kWoQlZee%2BOm75DoxRCh3N6wZSu5iVplH3GYYQH1LvRYd5nsiKOCqOkFZyUdJF8aZebmmlap0gPFXetReRqKZLu8YR46w9oL3WOovmYn1%2FrcDwrCYHa2qrdNzbdJePnpCuY%2FQn73rL0gnyKVcmFkPzTPCfDrPvdZa2os2UAM5WMGKaLTr3ywOMVPHcbhKwqT3nlUVlYd3GqYmTzmbUgZkvQj8C6T0cVEv%2FEygL%2Ft%2FxPBbdniUbpGcBPlGNUgBHMrch3leTf0YV27GZivRQOR0wD%2FBTxs1UASNNPQ1tT06ucJ1An1%2BHDxJ2Z2opPMgMDC4tL%2FCBjqkAVCLA9RoW5bzgAJ4AOlWW0zWwW13x99QdJXPMHr0e1Q3wMswwtjtKlDpj6y984a%2BGYdsggsrbc%2FPO%2B%2BnTUocxm%2FDr5vJwF3MD4mhmW7Zq01Jqe4Yetb%2FPeTUFC30EfdGKPPAWGOGZO6llsgXLf5tq2FcerXuETuov4GfL59ZareCVMr49%2BK9kTqVujlWz9hgC1dF%2FLq%2FBeV209bYJ8pMJTzCz9S9&X-Amz-Signature=ffb4092878edb1c2d55430d811ddd1e7c27f6fb1ad2a3cde6fd95678479acff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MT5Z2RU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDkSHJF7tw7qYUhf%2FJSc75GR6rBa6xTs0CaNqKNoEo%2FLgIhAKjkxI7OrwUNJrXjD7wmsJgsY6fHBYKj9Yq%2BwgGa8zJ3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzLYnta0%2BCFRPYoqAIq3APBeI3mSohzH1HqWERgC5%2BHQpx4%2BVktYi9%2FqcBXNgXSPuLsgt0yPtz4ETSNWmV1YCp4kDqU6rCKJRlHg7DJjPrC81tapN15vZuS5we1yNfNwScMwG20uFZjGPxgPqTigBGT%2BXaW84X3bPK1gW3BPFO%2FvpR09oDYR6kcsE4t0VQ3jmMW%2F4RuElYZsoqYTzRp9677PCbcxnrNMZqPS5V%2FR%2BohDJXEQo2LXG%2FiFgYkyiq0kKJW0aF%2B7y9kyLWUK1W7XozAEeSo6UcWkqISzmsOBvTE9pjjn%2Besv463SbTIq0YngztrDy4Sc7%2FHemgAMpY8kWoQlZee%2BOm75DoxRCh3N6wZSu5iVplH3GYYQH1LvRYd5nsiKOCqOkFZyUdJF8aZebmmlap0gPFXetReRqKZLu8YR46w9oL3WOovmYn1%2FrcDwrCYHa2qrdNzbdJePnpCuY%2FQn73rL0gnyKVcmFkPzTPCfDrPvdZa2os2UAM5WMGKaLTr3ywOMVPHcbhKwqT3nlUVlYd3GqYmTzmbUgZkvQj8C6T0cVEv%2FEygL%2Ft%2FxPBbdniUbpGcBPlGNUgBHMrch3leTf0YV27GZivRQOR0wD%2FBTxs1UASNNPQ1tT06ucJ1An1%2BHDxJ2Z2opPMgMDC4tL%2FCBjqkAVCLA9RoW5bzgAJ4AOlWW0zWwW13x99QdJXPMHr0e1Q3wMswwtjtKlDpj6y984a%2BGYdsggsrbc%2FPO%2B%2BnTUocxm%2FDr5vJwF3MD4mhmW7Zq01Jqe4Yetb%2FPeTUFC30EfdGKPPAWGOGZO6llsgXLf5tq2FcerXuETuov4GfL59ZareCVMr49%2BK9kTqVujlWz9hgC1dF%2FLq%2FBeV209bYJ8pMJTzCz9S9&X-Amz-Signature=5201bea5f2f663cb99e0cd01e1aceeb9637544b376bea1e2b6078e88f55270f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MT5Z2RU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDkSHJF7tw7qYUhf%2FJSc75GR6rBa6xTs0CaNqKNoEo%2FLgIhAKjkxI7OrwUNJrXjD7wmsJgsY6fHBYKj9Yq%2BwgGa8zJ3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzLYnta0%2BCFRPYoqAIq3APBeI3mSohzH1HqWERgC5%2BHQpx4%2BVktYi9%2FqcBXNgXSPuLsgt0yPtz4ETSNWmV1YCp4kDqU6rCKJRlHg7DJjPrC81tapN15vZuS5we1yNfNwScMwG20uFZjGPxgPqTigBGT%2BXaW84X3bPK1gW3BPFO%2FvpR09oDYR6kcsE4t0VQ3jmMW%2F4RuElYZsoqYTzRp9677PCbcxnrNMZqPS5V%2FR%2BohDJXEQo2LXG%2FiFgYkyiq0kKJW0aF%2B7y9kyLWUK1W7XozAEeSo6UcWkqISzmsOBvTE9pjjn%2Besv463SbTIq0YngztrDy4Sc7%2FHemgAMpY8kWoQlZee%2BOm75DoxRCh3N6wZSu5iVplH3GYYQH1LvRYd5nsiKOCqOkFZyUdJF8aZebmmlap0gPFXetReRqKZLu8YR46w9oL3WOovmYn1%2FrcDwrCYHa2qrdNzbdJePnpCuY%2FQn73rL0gnyKVcmFkPzTPCfDrPvdZa2os2UAM5WMGKaLTr3ywOMVPHcbhKwqT3nlUVlYd3GqYmTzmbUgZkvQj8C6T0cVEv%2FEygL%2Ft%2FxPBbdniUbpGcBPlGNUgBHMrch3leTf0YV27GZivRQOR0wD%2FBTxs1UASNNPQ1tT06ucJ1An1%2BHDxJ2Z2opPMgMDC4tL%2FCBjqkAVCLA9RoW5bzgAJ4AOlWW0zWwW13x99QdJXPMHr0e1Q3wMswwtjtKlDpj6y984a%2BGYdsggsrbc%2FPO%2B%2BnTUocxm%2FDr5vJwF3MD4mhmW7Zq01Jqe4Yetb%2FPeTUFC30EfdGKPPAWGOGZO6llsgXLf5tq2FcerXuETuov4GfL59ZareCVMr49%2BK9kTqVujlWz9hgC1dF%2FLq%2FBeV209bYJ8pMJTzCz9S9&X-Amz-Signature=27d653125796df922beadcd6e7fc2a161425cc3af51809a7007fb93ce79add4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MT5Z2RU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDkSHJF7tw7qYUhf%2FJSc75GR6rBa6xTs0CaNqKNoEo%2FLgIhAKjkxI7OrwUNJrXjD7wmsJgsY6fHBYKj9Yq%2BwgGa8zJ3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzLYnta0%2BCFRPYoqAIq3APBeI3mSohzH1HqWERgC5%2BHQpx4%2BVktYi9%2FqcBXNgXSPuLsgt0yPtz4ETSNWmV1YCp4kDqU6rCKJRlHg7DJjPrC81tapN15vZuS5we1yNfNwScMwG20uFZjGPxgPqTigBGT%2BXaW84X3bPK1gW3BPFO%2FvpR09oDYR6kcsE4t0VQ3jmMW%2F4RuElYZsoqYTzRp9677PCbcxnrNMZqPS5V%2FR%2BohDJXEQo2LXG%2FiFgYkyiq0kKJW0aF%2B7y9kyLWUK1W7XozAEeSo6UcWkqISzmsOBvTE9pjjn%2Besv463SbTIq0YngztrDy4Sc7%2FHemgAMpY8kWoQlZee%2BOm75DoxRCh3N6wZSu5iVplH3GYYQH1LvRYd5nsiKOCqOkFZyUdJF8aZebmmlap0gPFXetReRqKZLu8YR46w9oL3WOovmYn1%2FrcDwrCYHa2qrdNzbdJePnpCuY%2FQn73rL0gnyKVcmFkPzTPCfDrPvdZa2os2UAM5WMGKaLTr3ywOMVPHcbhKwqT3nlUVlYd3GqYmTzmbUgZkvQj8C6T0cVEv%2FEygL%2Ft%2FxPBbdniUbpGcBPlGNUgBHMrch3leTf0YV27GZivRQOR0wD%2FBTxs1UASNNPQ1tT06ucJ1An1%2BHDxJ2Z2opPMgMDC4tL%2FCBjqkAVCLA9RoW5bzgAJ4AOlWW0zWwW13x99QdJXPMHr0e1Q3wMswwtjtKlDpj6y984a%2BGYdsggsrbc%2FPO%2B%2BnTUocxm%2FDr5vJwF3MD4mhmW7Zq01Jqe4Yetb%2FPeTUFC30EfdGKPPAWGOGZO6llsgXLf5tq2FcerXuETuov4GfL59ZareCVMr49%2BK9kTqVujlWz9hgC1dF%2FLq%2FBeV209bYJ8pMJTzCz9S9&X-Amz-Signature=59908d719e32cd458e10f677cf80e07987fb3fbd9b88f16640ceea8ea7e47c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MT5Z2RU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDkSHJF7tw7qYUhf%2FJSc75GR6rBa6xTs0CaNqKNoEo%2FLgIhAKjkxI7OrwUNJrXjD7wmsJgsY6fHBYKj9Yq%2BwgGa8zJ3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzLYnta0%2BCFRPYoqAIq3APBeI3mSohzH1HqWERgC5%2BHQpx4%2BVktYi9%2FqcBXNgXSPuLsgt0yPtz4ETSNWmV1YCp4kDqU6rCKJRlHg7DJjPrC81tapN15vZuS5we1yNfNwScMwG20uFZjGPxgPqTigBGT%2BXaW84X3bPK1gW3BPFO%2FvpR09oDYR6kcsE4t0VQ3jmMW%2F4RuElYZsoqYTzRp9677PCbcxnrNMZqPS5V%2FR%2BohDJXEQo2LXG%2FiFgYkyiq0kKJW0aF%2B7y9kyLWUK1W7XozAEeSo6UcWkqISzmsOBvTE9pjjn%2Besv463SbTIq0YngztrDy4Sc7%2FHemgAMpY8kWoQlZee%2BOm75DoxRCh3N6wZSu5iVplH3GYYQH1LvRYd5nsiKOCqOkFZyUdJF8aZebmmlap0gPFXetReRqKZLu8YR46w9oL3WOovmYn1%2FrcDwrCYHa2qrdNzbdJePnpCuY%2FQn73rL0gnyKVcmFkPzTPCfDrPvdZa2os2UAM5WMGKaLTr3ywOMVPHcbhKwqT3nlUVlYd3GqYmTzmbUgZkvQj8C6T0cVEv%2FEygL%2Ft%2FxPBbdniUbpGcBPlGNUgBHMrch3leTf0YV27GZivRQOR0wD%2FBTxs1UASNNPQ1tT06ucJ1An1%2BHDxJ2Z2opPMgMDC4tL%2FCBjqkAVCLA9RoW5bzgAJ4AOlWW0zWwW13x99QdJXPMHr0e1Q3wMswwtjtKlDpj6y984a%2BGYdsggsrbc%2FPO%2B%2BnTUocxm%2FDr5vJwF3MD4mhmW7Zq01Jqe4Yetb%2FPeTUFC30EfdGKPPAWGOGZO6llsgXLf5tq2FcerXuETuov4GfL59ZareCVMr49%2BK9kTqVujlWz9hgC1dF%2FLq%2FBeV209bYJ8pMJTzCz9S9&X-Amz-Signature=fe090d47d2e3a013f9d9f855e0b70b8220a85b122d031a3771d5a36b4f6f6cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
