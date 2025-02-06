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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQZOLXQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCVu2Gl%2BpdVn5zbPBRLT0mutO8tIcLtXfRkQHzMn9jKPAIhALLcRk7J8mRYl3w%2FdLtqDw%2F64rPuEf40Q5Ek%2BRoYqwi3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgyyqJqaPUKw4j46tcMq3AMXQm1HPfrAuWeGsWTGxPg9CLT0JBM4AsgNXYgTyp1ZTfMSswO25%2BAs3Zz9uwMl2ZVDBSkLMUWVIzg7PL0uA3S%2B2cOn9KiJZ69RQiN9isZ%2FVozQIZHvUsfwoN9cJyQHgPUKyQ9%2BBO9dbwReZs%2FzBTumedlLG0YmhnaoP3EXHKU2gQcPLTiR1XFkFsT1Z7l3xNA6nrGT76NwNkgM6WCjUnDs%2B5%2FvIqS5DVtRvvyulq85gAUuEovPOE4iLhjR8KnDRozgpGcmoMI2QqTfuFdfc2vy3aK2RZbWt7NkmXUxw5qfPOoi4K7uUSz256oo9AmxseuZvDnhObDmmVE3G5N81VGoSA4fQgUfUKgAeBRNkhcIADqDurHtuXVRr5150Fm6Kq%2BvW7ha5JvxdzsLrW%2F51SCtEqXLW3g1l295W6yaDDPURm7oRbIxaKvWlyyEyTSecMIHKJnd6%2B3NcNvxvNnxjFmyzkaA6Qh3qzNwfRrnk243vN1uoWGrahV3%2BQMg%2Fuw2pZ9VuKj%2BxlEjQSvVqsXpz0%2BDUhKgiM9GG%2BYAgg8q%2Bm204NzfG4fXZN%2BFXXJOinZdquvILNWdvO06pLzvXMwNKZi93612ri%2FLIxueSXL5dQW6ZnMfEa2mNUSeaA7N0TCk05O9BjqkATqy2Ra%2BNDiSZyh%2FUmjXlNYjkbDFDsW2IFEjF8ThKbM2HpsuFovtFo%2F69%2BJmM1EvOLSQOtyeu7oU9rk%2F%2BHLEBQXJxjixKxklQDfS5lVmm98FSd3PhsKE4PRDTyDIwwVCo8nE6pHQWhxBdv1%2Fwe5JdqfIFKJLns5Xf%2FzLRebTjihfQSDg%2Fgko1gcVipgmfqYHap7Vz6mcreWJ4JEOH6NL3VMIukJM&X-Amz-Signature=9729053e163ca09318e37c1443b090ae0d0f3a24cd51d121d649a09194919e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQZOLXQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCVu2Gl%2BpdVn5zbPBRLT0mutO8tIcLtXfRkQHzMn9jKPAIhALLcRk7J8mRYl3w%2FdLtqDw%2F64rPuEf40Q5Ek%2BRoYqwi3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgyyqJqaPUKw4j46tcMq3AMXQm1HPfrAuWeGsWTGxPg9CLT0JBM4AsgNXYgTyp1ZTfMSswO25%2BAs3Zz9uwMl2ZVDBSkLMUWVIzg7PL0uA3S%2B2cOn9KiJZ69RQiN9isZ%2FVozQIZHvUsfwoN9cJyQHgPUKyQ9%2BBO9dbwReZs%2FzBTumedlLG0YmhnaoP3EXHKU2gQcPLTiR1XFkFsT1Z7l3xNA6nrGT76NwNkgM6WCjUnDs%2B5%2FvIqS5DVtRvvyulq85gAUuEovPOE4iLhjR8KnDRozgpGcmoMI2QqTfuFdfc2vy3aK2RZbWt7NkmXUxw5qfPOoi4K7uUSz256oo9AmxseuZvDnhObDmmVE3G5N81VGoSA4fQgUfUKgAeBRNkhcIADqDurHtuXVRr5150Fm6Kq%2BvW7ha5JvxdzsLrW%2F51SCtEqXLW3g1l295W6yaDDPURm7oRbIxaKvWlyyEyTSecMIHKJnd6%2B3NcNvxvNnxjFmyzkaA6Qh3qzNwfRrnk243vN1uoWGrahV3%2BQMg%2Fuw2pZ9VuKj%2BxlEjQSvVqsXpz0%2BDUhKgiM9GG%2BYAgg8q%2Bm204NzfG4fXZN%2BFXXJOinZdquvILNWdvO06pLzvXMwNKZi93612ri%2FLIxueSXL5dQW6ZnMfEa2mNUSeaA7N0TCk05O9BjqkATqy2Ra%2BNDiSZyh%2FUmjXlNYjkbDFDsW2IFEjF8ThKbM2HpsuFovtFo%2F69%2BJmM1EvOLSQOtyeu7oU9rk%2F%2BHLEBQXJxjixKxklQDfS5lVmm98FSd3PhsKE4PRDTyDIwwVCo8nE6pHQWhxBdv1%2Fwe5JdqfIFKJLns5Xf%2FzLRebTjihfQSDg%2Fgko1gcVipgmfqYHap7Vz6mcreWJ4JEOH6NL3VMIukJM&X-Amz-Signature=9904d6f597188f7554903f106302aaa0b2abb3600359cc93fdfe5ee92a846f29&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQZOLXQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCVu2Gl%2BpdVn5zbPBRLT0mutO8tIcLtXfRkQHzMn9jKPAIhALLcRk7J8mRYl3w%2FdLtqDw%2F64rPuEf40Q5Ek%2BRoYqwi3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgyyqJqaPUKw4j46tcMq3AMXQm1HPfrAuWeGsWTGxPg9CLT0JBM4AsgNXYgTyp1ZTfMSswO25%2BAs3Zz9uwMl2ZVDBSkLMUWVIzg7PL0uA3S%2B2cOn9KiJZ69RQiN9isZ%2FVozQIZHvUsfwoN9cJyQHgPUKyQ9%2BBO9dbwReZs%2FzBTumedlLG0YmhnaoP3EXHKU2gQcPLTiR1XFkFsT1Z7l3xNA6nrGT76NwNkgM6WCjUnDs%2B5%2FvIqS5DVtRvvyulq85gAUuEovPOE4iLhjR8KnDRozgpGcmoMI2QqTfuFdfc2vy3aK2RZbWt7NkmXUxw5qfPOoi4K7uUSz256oo9AmxseuZvDnhObDmmVE3G5N81VGoSA4fQgUfUKgAeBRNkhcIADqDurHtuXVRr5150Fm6Kq%2BvW7ha5JvxdzsLrW%2F51SCtEqXLW3g1l295W6yaDDPURm7oRbIxaKvWlyyEyTSecMIHKJnd6%2B3NcNvxvNnxjFmyzkaA6Qh3qzNwfRrnk243vN1uoWGrahV3%2BQMg%2Fuw2pZ9VuKj%2BxlEjQSvVqsXpz0%2BDUhKgiM9GG%2BYAgg8q%2Bm204NzfG4fXZN%2BFXXJOinZdquvILNWdvO06pLzvXMwNKZi93612ri%2FLIxueSXL5dQW6ZnMfEa2mNUSeaA7N0TCk05O9BjqkATqy2Ra%2BNDiSZyh%2FUmjXlNYjkbDFDsW2IFEjF8ThKbM2HpsuFovtFo%2F69%2BJmM1EvOLSQOtyeu7oU9rk%2F%2BHLEBQXJxjixKxklQDfS5lVmm98FSd3PhsKE4PRDTyDIwwVCo8nE6pHQWhxBdv1%2Fwe5JdqfIFKJLns5Xf%2FzLRebTjihfQSDg%2Fgko1gcVipgmfqYHap7Vz6mcreWJ4JEOH6NL3VMIukJM&X-Amz-Signature=50b0a150d2a0279695e5016ce0c018437a00dfe399048d6574a60fbce8a1001c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQZOLXQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCVu2Gl%2BpdVn5zbPBRLT0mutO8tIcLtXfRkQHzMn9jKPAIhALLcRk7J8mRYl3w%2FdLtqDw%2F64rPuEf40Q5Ek%2BRoYqwi3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgyyqJqaPUKw4j46tcMq3AMXQm1HPfrAuWeGsWTGxPg9CLT0JBM4AsgNXYgTyp1ZTfMSswO25%2BAs3Zz9uwMl2ZVDBSkLMUWVIzg7PL0uA3S%2B2cOn9KiJZ69RQiN9isZ%2FVozQIZHvUsfwoN9cJyQHgPUKyQ9%2BBO9dbwReZs%2FzBTumedlLG0YmhnaoP3EXHKU2gQcPLTiR1XFkFsT1Z7l3xNA6nrGT76NwNkgM6WCjUnDs%2B5%2FvIqS5DVtRvvyulq85gAUuEovPOE4iLhjR8KnDRozgpGcmoMI2QqTfuFdfc2vy3aK2RZbWt7NkmXUxw5qfPOoi4K7uUSz256oo9AmxseuZvDnhObDmmVE3G5N81VGoSA4fQgUfUKgAeBRNkhcIADqDurHtuXVRr5150Fm6Kq%2BvW7ha5JvxdzsLrW%2F51SCtEqXLW3g1l295W6yaDDPURm7oRbIxaKvWlyyEyTSecMIHKJnd6%2B3NcNvxvNnxjFmyzkaA6Qh3qzNwfRrnk243vN1uoWGrahV3%2BQMg%2Fuw2pZ9VuKj%2BxlEjQSvVqsXpz0%2BDUhKgiM9GG%2BYAgg8q%2Bm204NzfG4fXZN%2BFXXJOinZdquvILNWdvO06pLzvXMwNKZi93612ri%2FLIxueSXL5dQW6ZnMfEa2mNUSeaA7N0TCk05O9BjqkATqy2Ra%2BNDiSZyh%2FUmjXlNYjkbDFDsW2IFEjF8ThKbM2HpsuFovtFo%2F69%2BJmM1EvOLSQOtyeu7oU9rk%2F%2BHLEBQXJxjixKxklQDfS5lVmm98FSd3PhsKE4PRDTyDIwwVCo8nE6pHQWhxBdv1%2Fwe5JdqfIFKJLns5Xf%2FzLRebTjihfQSDg%2Fgko1gcVipgmfqYHap7Vz6mcreWJ4JEOH6NL3VMIukJM&X-Amz-Signature=fbdda60507aa714701a3fed6798f2212d7fd854ed8227744a3e7a6bc3c79ca6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQZOLXQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCVu2Gl%2BpdVn5zbPBRLT0mutO8tIcLtXfRkQHzMn9jKPAIhALLcRk7J8mRYl3w%2FdLtqDw%2F64rPuEf40Q5Ek%2BRoYqwi3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgyyqJqaPUKw4j46tcMq3AMXQm1HPfrAuWeGsWTGxPg9CLT0JBM4AsgNXYgTyp1ZTfMSswO25%2BAs3Zz9uwMl2ZVDBSkLMUWVIzg7PL0uA3S%2B2cOn9KiJZ69RQiN9isZ%2FVozQIZHvUsfwoN9cJyQHgPUKyQ9%2BBO9dbwReZs%2FzBTumedlLG0YmhnaoP3EXHKU2gQcPLTiR1XFkFsT1Z7l3xNA6nrGT76NwNkgM6WCjUnDs%2B5%2FvIqS5DVtRvvyulq85gAUuEovPOE4iLhjR8KnDRozgpGcmoMI2QqTfuFdfc2vy3aK2RZbWt7NkmXUxw5qfPOoi4K7uUSz256oo9AmxseuZvDnhObDmmVE3G5N81VGoSA4fQgUfUKgAeBRNkhcIADqDurHtuXVRr5150Fm6Kq%2BvW7ha5JvxdzsLrW%2F51SCtEqXLW3g1l295W6yaDDPURm7oRbIxaKvWlyyEyTSecMIHKJnd6%2B3NcNvxvNnxjFmyzkaA6Qh3qzNwfRrnk243vN1uoWGrahV3%2BQMg%2Fuw2pZ9VuKj%2BxlEjQSvVqsXpz0%2BDUhKgiM9GG%2BYAgg8q%2Bm204NzfG4fXZN%2BFXXJOinZdquvILNWdvO06pLzvXMwNKZi93612ri%2FLIxueSXL5dQW6ZnMfEa2mNUSeaA7N0TCk05O9BjqkATqy2Ra%2BNDiSZyh%2FUmjXlNYjkbDFDsW2IFEjF8ThKbM2HpsuFovtFo%2F69%2BJmM1EvOLSQOtyeu7oU9rk%2F%2BHLEBQXJxjixKxklQDfS5lVmm98FSd3PhsKE4PRDTyDIwwVCo8nE6pHQWhxBdv1%2Fwe5JdqfIFKJLns5Xf%2FzLRebTjihfQSDg%2Fgko1gcVipgmfqYHap7Vz6mcreWJ4JEOH6NL3VMIukJM&X-Amz-Signature=661c5e1fb18341b89beac2e3c7c6d1c5b5c7784e3848c858b0c860725cbf48f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
