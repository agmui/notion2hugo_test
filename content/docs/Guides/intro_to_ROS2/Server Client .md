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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHBGEQX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWi%2B1UTiyF4d0ebx%2BBst8BLEHPj%2BM5zLqsvtg%2BoP73YwIgVL4GuxGTzHWogmkGRR3OrxyjtlwQb1fDMFuSe4JR9GMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnQr9R2vXidDLCinyrcA92%2BbARj630M9v3xp6I7oeXgsTQhbrp2rS9YzfZigz%2BOiC116r5aBhn4DtOviXbrDQ0se176t0uupgld264J7OJM%2BWA4QOTSH%2B%2BaaNuk8F1BpWLI05L54pkaZfIkEvUuoKEwxeJd9taPc49bDt3Z4INnrQFB8I8f0UbClGoE2ZCHdPRdOD3co4Kz5oK8LOMA90fi84MtDiO98SKWmkahQ5ihnrdocC8xqgwhxxKnFghbDIDEeIF8W66c1P9zJIs5k4c3P9YBK5TQ0DH15GFi5VKZUGjNpSbMjeL%2FrR%2BLEZISnKBOwDNBDQew36%2FFI0t5D6eWAsQLLrWN94tEi4Ia6l%2FrU4LPk5xi87LrdqVQvpRVjETKL8jeC3n5N0DMD32w7WuWikegeph9Hv0Fk3noUIQZzXfZRGKB%2BXRetIxtH%2BUbs3qPJPsyeInV4XRsmu523Z9hTermyCUkEzYm06V%2Bx94f6hJLvg6QdbUWQOqecR0bT5JcQofP%2FYgpFOBP%2B%2BMIspDqP7LVeDZ3a8XBuP4MFJqb8AXuYRwO2C9DOw%2Bq6gNxeZHp0ox8g5ffO9EsN0HNZmSc5p1qGp%2BRWktaoL0OgoxbTNnQ9NiIZGPTjGyjsScqEAEw8I%2BeY5mXEoCOMJTJrr0GOqUBgtpxFLJHct2%2BDaxekpXgVmyXGjSlrOWDxcx6nkIjTJx7JfxSXRyHNHT5uSeOySdyS6iNvV8vZ51mhukQ9d1BURpJ8eN3HaOMa5E1oM9zB%2FVNRMZSf%2FqiBZnW6roWvSpN4epfAL0hzz95arZ1hlT%2FcL7JOJjnwiMoUiZhEUOHf%2FD2y1erVHYuZ2SYlERztpDB5y1eVyIcRSrBc2sBjeW8Rk6ORIpU&X-Amz-Signature=54aef185fe1a1b7d09363227005d8084bb1e7e43b5277ff051cac114db4433d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHBGEQX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWi%2B1UTiyF4d0ebx%2BBst8BLEHPj%2BM5zLqsvtg%2BoP73YwIgVL4GuxGTzHWogmkGRR3OrxyjtlwQb1fDMFuSe4JR9GMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnQr9R2vXidDLCinyrcA92%2BbARj630M9v3xp6I7oeXgsTQhbrp2rS9YzfZigz%2BOiC116r5aBhn4DtOviXbrDQ0se176t0uupgld264J7OJM%2BWA4QOTSH%2B%2BaaNuk8F1BpWLI05L54pkaZfIkEvUuoKEwxeJd9taPc49bDt3Z4INnrQFB8I8f0UbClGoE2ZCHdPRdOD3co4Kz5oK8LOMA90fi84MtDiO98SKWmkahQ5ihnrdocC8xqgwhxxKnFghbDIDEeIF8W66c1P9zJIs5k4c3P9YBK5TQ0DH15GFi5VKZUGjNpSbMjeL%2FrR%2BLEZISnKBOwDNBDQew36%2FFI0t5D6eWAsQLLrWN94tEi4Ia6l%2FrU4LPk5xi87LrdqVQvpRVjETKL8jeC3n5N0DMD32w7WuWikegeph9Hv0Fk3noUIQZzXfZRGKB%2BXRetIxtH%2BUbs3qPJPsyeInV4XRsmu523Z9hTermyCUkEzYm06V%2Bx94f6hJLvg6QdbUWQOqecR0bT5JcQofP%2FYgpFOBP%2B%2BMIspDqP7LVeDZ3a8XBuP4MFJqb8AXuYRwO2C9DOw%2Bq6gNxeZHp0ox8g5ffO9EsN0HNZmSc5p1qGp%2BRWktaoL0OgoxbTNnQ9NiIZGPTjGyjsScqEAEw8I%2BeY5mXEoCOMJTJrr0GOqUBgtpxFLJHct2%2BDaxekpXgVmyXGjSlrOWDxcx6nkIjTJx7JfxSXRyHNHT5uSeOySdyS6iNvV8vZ51mhukQ9d1BURpJ8eN3HaOMa5E1oM9zB%2FVNRMZSf%2FqiBZnW6roWvSpN4epfAL0hzz95arZ1hlT%2FcL7JOJjnwiMoUiZhEUOHf%2FD2y1erVHYuZ2SYlERztpDB5y1eVyIcRSrBc2sBjeW8Rk6ORIpU&X-Amz-Signature=bdbc55c52fe609cb88ca94f532de783ddaae5332c7345add68b10091aab52e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHBGEQX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWi%2B1UTiyF4d0ebx%2BBst8BLEHPj%2BM5zLqsvtg%2BoP73YwIgVL4GuxGTzHWogmkGRR3OrxyjtlwQb1fDMFuSe4JR9GMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnQr9R2vXidDLCinyrcA92%2BbARj630M9v3xp6I7oeXgsTQhbrp2rS9YzfZigz%2BOiC116r5aBhn4DtOviXbrDQ0se176t0uupgld264J7OJM%2BWA4QOTSH%2B%2BaaNuk8F1BpWLI05L54pkaZfIkEvUuoKEwxeJd9taPc49bDt3Z4INnrQFB8I8f0UbClGoE2ZCHdPRdOD3co4Kz5oK8LOMA90fi84MtDiO98SKWmkahQ5ihnrdocC8xqgwhxxKnFghbDIDEeIF8W66c1P9zJIs5k4c3P9YBK5TQ0DH15GFi5VKZUGjNpSbMjeL%2FrR%2BLEZISnKBOwDNBDQew36%2FFI0t5D6eWAsQLLrWN94tEi4Ia6l%2FrU4LPk5xi87LrdqVQvpRVjETKL8jeC3n5N0DMD32w7WuWikegeph9Hv0Fk3noUIQZzXfZRGKB%2BXRetIxtH%2BUbs3qPJPsyeInV4XRsmu523Z9hTermyCUkEzYm06V%2Bx94f6hJLvg6QdbUWQOqecR0bT5JcQofP%2FYgpFOBP%2B%2BMIspDqP7LVeDZ3a8XBuP4MFJqb8AXuYRwO2C9DOw%2Bq6gNxeZHp0ox8g5ffO9EsN0HNZmSc5p1qGp%2BRWktaoL0OgoxbTNnQ9NiIZGPTjGyjsScqEAEw8I%2BeY5mXEoCOMJTJrr0GOqUBgtpxFLJHct2%2BDaxekpXgVmyXGjSlrOWDxcx6nkIjTJx7JfxSXRyHNHT5uSeOySdyS6iNvV8vZ51mhukQ9d1BURpJ8eN3HaOMa5E1oM9zB%2FVNRMZSf%2FqiBZnW6roWvSpN4epfAL0hzz95arZ1hlT%2FcL7JOJjnwiMoUiZhEUOHf%2FD2y1erVHYuZ2SYlERztpDB5y1eVyIcRSrBc2sBjeW8Rk6ORIpU&X-Amz-Signature=4b667f06b5d45aa45c3084e5713b1e37ef35e089fd2568afa7bbec7afe6655c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHBGEQX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWi%2B1UTiyF4d0ebx%2BBst8BLEHPj%2BM5zLqsvtg%2BoP73YwIgVL4GuxGTzHWogmkGRR3OrxyjtlwQb1fDMFuSe4JR9GMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnQr9R2vXidDLCinyrcA92%2BbARj630M9v3xp6I7oeXgsTQhbrp2rS9YzfZigz%2BOiC116r5aBhn4DtOviXbrDQ0se176t0uupgld264J7OJM%2BWA4QOTSH%2B%2BaaNuk8F1BpWLI05L54pkaZfIkEvUuoKEwxeJd9taPc49bDt3Z4INnrQFB8I8f0UbClGoE2ZCHdPRdOD3co4Kz5oK8LOMA90fi84MtDiO98SKWmkahQ5ihnrdocC8xqgwhxxKnFghbDIDEeIF8W66c1P9zJIs5k4c3P9YBK5TQ0DH15GFi5VKZUGjNpSbMjeL%2FrR%2BLEZISnKBOwDNBDQew36%2FFI0t5D6eWAsQLLrWN94tEi4Ia6l%2FrU4LPk5xi87LrdqVQvpRVjETKL8jeC3n5N0DMD32w7WuWikegeph9Hv0Fk3noUIQZzXfZRGKB%2BXRetIxtH%2BUbs3qPJPsyeInV4XRsmu523Z9hTermyCUkEzYm06V%2Bx94f6hJLvg6QdbUWQOqecR0bT5JcQofP%2FYgpFOBP%2B%2BMIspDqP7LVeDZ3a8XBuP4MFJqb8AXuYRwO2C9DOw%2Bq6gNxeZHp0ox8g5ffO9EsN0HNZmSc5p1qGp%2BRWktaoL0OgoxbTNnQ9NiIZGPTjGyjsScqEAEw8I%2BeY5mXEoCOMJTJrr0GOqUBgtpxFLJHct2%2BDaxekpXgVmyXGjSlrOWDxcx6nkIjTJx7JfxSXRyHNHT5uSeOySdyS6iNvV8vZ51mhukQ9d1BURpJ8eN3HaOMa5E1oM9zB%2FVNRMZSf%2FqiBZnW6roWvSpN4epfAL0hzz95arZ1hlT%2FcL7JOJjnwiMoUiZhEUOHf%2FD2y1erVHYuZ2SYlERztpDB5y1eVyIcRSrBc2sBjeW8Rk6ORIpU&X-Amz-Signature=6062a1f8fb0aebace29d2f8f3e9c899d1fc8ebf6346e057ec0a3b1de74e7ba89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHBGEQX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWi%2B1UTiyF4d0ebx%2BBst8BLEHPj%2BM5zLqsvtg%2BoP73YwIgVL4GuxGTzHWogmkGRR3OrxyjtlwQb1fDMFuSe4JR9GMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnQr9R2vXidDLCinyrcA92%2BbARj630M9v3xp6I7oeXgsTQhbrp2rS9YzfZigz%2BOiC116r5aBhn4DtOviXbrDQ0se176t0uupgld264J7OJM%2BWA4QOTSH%2B%2BaaNuk8F1BpWLI05L54pkaZfIkEvUuoKEwxeJd9taPc49bDt3Z4INnrQFB8I8f0UbClGoE2ZCHdPRdOD3co4Kz5oK8LOMA90fi84MtDiO98SKWmkahQ5ihnrdocC8xqgwhxxKnFghbDIDEeIF8W66c1P9zJIs5k4c3P9YBK5TQ0DH15GFi5VKZUGjNpSbMjeL%2FrR%2BLEZISnKBOwDNBDQew36%2FFI0t5D6eWAsQLLrWN94tEi4Ia6l%2FrU4LPk5xi87LrdqVQvpRVjETKL8jeC3n5N0DMD32w7WuWikegeph9Hv0Fk3noUIQZzXfZRGKB%2BXRetIxtH%2BUbs3qPJPsyeInV4XRsmu523Z9hTermyCUkEzYm06V%2Bx94f6hJLvg6QdbUWQOqecR0bT5JcQofP%2FYgpFOBP%2B%2BMIspDqP7LVeDZ3a8XBuP4MFJqb8AXuYRwO2C9DOw%2Bq6gNxeZHp0ox8g5ffO9EsN0HNZmSc5p1qGp%2BRWktaoL0OgoxbTNnQ9NiIZGPTjGyjsScqEAEw8I%2BeY5mXEoCOMJTJrr0GOqUBgtpxFLJHct2%2BDaxekpXgVmyXGjSlrOWDxcx6nkIjTJx7JfxSXRyHNHT5uSeOySdyS6iNvV8vZ51mhukQ9d1BURpJ8eN3HaOMa5E1oM9zB%2FVNRMZSf%2FqiBZnW6roWvSpN4epfAL0hzz95arZ1hlT%2FcL7JOJjnwiMoUiZhEUOHf%2FD2y1erVHYuZ2SYlERztpDB5y1eVyIcRSrBc2sBjeW8Rk6ORIpU&X-Amz-Signature=0f2b53777e61af41f1c6ef40f57d97e2e758ad71e3a69bf07c6bfd6dfd013a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
