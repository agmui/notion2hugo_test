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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2GCGKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1w8YI2hTE%2B%2FuZBbxtVqeK2FsWo0772cFCLxqCCJ5o1AiEA4FHjPK0D%2BAmVF19Hkl4cyjPmzCQwSx4XFcaZzB6rqnkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMNKVvvCdFvziGSUgCrcA0RtlQbyXLxsc6912VEq5pLVQRnZpLOvvJ6h%2FZq3SMmSZnORAN0nLkhumYnI8krzO8FA6N1jqmYLbzYGV5NA4ZcSMZ7Ya6D5Tg%2FB6gUFHVCS4LR6taWWtraI1kulPqT5NEKUP5VO3qsQXA63nygWIo9j2l6XKj5jcPF%2FmAcPpVsc6LuvW3JXqskulAmS46TtenDz5F1wgrbUuHqpMb%2FD%2F3CiAhPO4b4snIVUz4%2F7IgGVqqE8b6Zi1aTuMowP3pvBameqGiT8l083toXhaJTD6nTLGJQkA45xEVuell2K79Ha5spO2ayeuADyJ3HWQfC4ot48gpOPsM2YIhRGQ3aqsQjsIXPckYavjz6eUvBurwGZK3aKP4OpV3whQpM50H04d9SGDf163YqE0r6v7wzY4%2B61tt9b5YTny8Xz1ElzaZ9IEqp0CvkJOYmFuy41qr%2BXwBj9JDUQEqh95rIctoxmLVZdm%2BRmH0w%2BmrCniOSIkVIlkZxrPzJ6bXxURFfYf6tTy5Ai%2BFAZLeC%2BXt2do3X4yqLivQlidkhPxZZvluS5Oq53hK1bKYLVmk55saLmZfWj%2FmSFGpWOi8HPfyKD99PwzYqfS486BYSAsHw65RB3EHzC7i0I%2B5wzEdW9A5Y3MJHJqL4GOqUBBw%2FDm1gnKoDQnApCOgp1x83dBmnISjLm6q5IyteDhJtifJZtp5vNlGmSKzpw%2BDzlog5ghAdbPF9%2FzdLP0RiT8VTzuc674tGzvarqOFXGBh4wYsR%2BiyMIVW9BxnwDpdgUI5%2FX16MjW%2FMlpr8He17F4XOafNvOfevzLAl3GEOmHR7yCcAejuxqug1LimKiRj10AHHfIFp1BEDNEXvddnu2Nrb%2FMEIo&X-Amz-Signature=1bd5028132124bcf27b36f818e45e3c512f4d8709a313696e1100d2a42a164dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2GCGKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1w8YI2hTE%2B%2FuZBbxtVqeK2FsWo0772cFCLxqCCJ5o1AiEA4FHjPK0D%2BAmVF19Hkl4cyjPmzCQwSx4XFcaZzB6rqnkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMNKVvvCdFvziGSUgCrcA0RtlQbyXLxsc6912VEq5pLVQRnZpLOvvJ6h%2FZq3SMmSZnORAN0nLkhumYnI8krzO8FA6N1jqmYLbzYGV5NA4ZcSMZ7Ya6D5Tg%2FB6gUFHVCS4LR6taWWtraI1kulPqT5NEKUP5VO3qsQXA63nygWIo9j2l6XKj5jcPF%2FmAcPpVsc6LuvW3JXqskulAmS46TtenDz5F1wgrbUuHqpMb%2FD%2F3CiAhPO4b4snIVUz4%2F7IgGVqqE8b6Zi1aTuMowP3pvBameqGiT8l083toXhaJTD6nTLGJQkA45xEVuell2K79Ha5spO2ayeuADyJ3HWQfC4ot48gpOPsM2YIhRGQ3aqsQjsIXPckYavjz6eUvBurwGZK3aKP4OpV3whQpM50H04d9SGDf163YqE0r6v7wzY4%2B61tt9b5YTny8Xz1ElzaZ9IEqp0CvkJOYmFuy41qr%2BXwBj9JDUQEqh95rIctoxmLVZdm%2BRmH0w%2BmrCniOSIkVIlkZxrPzJ6bXxURFfYf6tTy5Ai%2BFAZLeC%2BXt2do3X4yqLivQlidkhPxZZvluS5Oq53hK1bKYLVmk55saLmZfWj%2FmSFGpWOi8HPfyKD99PwzYqfS486BYSAsHw65RB3EHzC7i0I%2B5wzEdW9A5Y3MJHJqL4GOqUBBw%2FDm1gnKoDQnApCOgp1x83dBmnISjLm6q5IyteDhJtifJZtp5vNlGmSKzpw%2BDzlog5ghAdbPF9%2FzdLP0RiT8VTzuc674tGzvarqOFXGBh4wYsR%2BiyMIVW9BxnwDpdgUI5%2FX16MjW%2FMlpr8He17F4XOafNvOfevzLAl3GEOmHR7yCcAejuxqug1LimKiRj10AHHfIFp1BEDNEXvddnu2Nrb%2FMEIo&X-Amz-Signature=9765817d5222c191dc40f6fe20bdeae27d2f54793a077a14c2ad125971c5a98c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2GCGKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1w8YI2hTE%2B%2FuZBbxtVqeK2FsWo0772cFCLxqCCJ5o1AiEA4FHjPK0D%2BAmVF19Hkl4cyjPmzCQwSx4XFcaZzB6rqnkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMNKVvvCdFvziGSUgCrcA0RtlQbyXLxsc6912VEq5pLVQRnZpLOvvJ6h%2FZq3SMmSZnORAN0nLkhumYnI8krzO8FA6N1jqmYLbzYGV5NA4ZcSMZ7Ya6D5Tg%2FB6gUFHVCS4LR6taWWtraI1kulPqT5NEKUP5VO3qsQXA63nygWIo9j2l6XKj5jcPF%2FmAcPpVsc6LuvW3JXqskulAmS46TtenDz5F1wgrbUuHqpMb%2FD%2F3CiAhPO4b4snIVUz4%2F7IgGVqqE8b6Zi1aTuMowP3pvBameqGiT8l083toXhaJTD6nTLGJQkA45xEVuell2K79Ha5spO2ayeuADyJ3HWQfC4ot48gpOPsM2YIhRGQ3aqsQjsIXPckYavjz6eUvBurwGZK3aKP4OpV3whQpM50H04d9SGDf163YqE0r6v7wzY4%2B61tt9b5YTny8Xz1ElzaZ9IEqp0CvkJOYmFuy41qr%2BXwBj9JDUQEqh95rIctoxmLVZdm%2BRmH0w%2BmrCniOSIkVIlkZxrPzJ6bXxURFfYf6tTy5Ai%2BFAZLeC%2BXt2do3X4yqLivQlidkhPxZZvluS5Oq53hK1bKYLVmk55saLmZfWj%2FmSFGpWOi8HPfyKD99PwzYqfS486BYSAsHw65RB3EHzC7i0I%2B5wzEdW9A5Y3MJHJqL4GOqUBBw%2FDm1gnKoDQnApCOgp1x83dBmnISjLm6q5IyteDhJtifJZtp5vNlGmSKzpw%2BDzlog5ghAdbPF9%2FzdLP0RiT8VTzuc674tGzvarqOFXGBh4wYsR%2BiyMIVW9BxnwDpdgUI5%2FX16MjW%2FMlpr8He17F4XOafNvOfevzLAl3GEOmHR7yCcAejuxqug1LimKiRj10AHHfIFp1BEDNEXvddnu2Nrb%2FMEIo&X-Amz-Signature=1d66278083b6e7418051705bacb9c17eac6568e1cd236d17459e44111c5523f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2GCGKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1w8YI2hTE%2B%2FuZBbxtVqeK2FsWo0772cFCLxqCCJ5o1AiEA4FHjPK0D%2BAmVF19Hkl4cyjPmzCQwSx4XFcaZzB6rqnkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMNKVvvCdFvziGSUgCrcA0RtlQbyXLxsc6912VEq5pLVQRnZpLOvvJ6h%2FZq3SMmSZnORAN0nLkhumYnI8krzO8FA6N1jqmYLbzYGV5NA4ZcSMZ7Ya6D5Tg%2FB6gUFHVCS4LR6taWWtraI1kulPqT5NEKUP5VO3qsQXA63nygWIo9j2l6XKj5jcPF%2FmAcPpVsc6LuvW3JXqskulAmS46TtenDz5F1wgrbUuHqpMb%2FD%2F3CiAhPO4b4snIVUz4%2F7IgGVqqE8b6Zi1aTuMowP3pvBameqGiT8l083toXhaJTD6nTLGJQkA45xEVuell2K79Ha5spO2ayeuADyJ3HWQfC4ot48gpOPsM2YIhRGQ3aqsQjsIXPckYavjz6eUvBurwGZK3aKP4OpV3whQpM50H04d9SGDf163YqE0r6v7wzY4%2B61tt9b5YTny8Xz1ElzaZ9IEqp0CvkJOYmFuy41qr%2BXwBj9JDUQEqh95rIctoxmLVZdm%2BRmH0w%2BmrCniOSIkVIlkZxrPzJ6bXxURFfYf6tTy5Ai%2BFAZLeC%2BXt2do3X4yqLivQlidkhPxZZvluS5Oq53hK1bKYLVmk55saLmZfWj%2FmSFGpWOi8HPfyKD99PwzYqfS486BYSAsHw65RB3EHzC7i0I%2B5wzEdW9A5Y3MJHJqL4GOqUBBw%2FDm1gnKoDQnApCOgp1x83dBmnISjLm6q5IyteDhJtifJZtp5vNlGmSKzpw%2BDzlog5ghAdbPF9%2FzdLP0RiT8VTzuc674tGzvarqOFXGBh4wYsR%2BiyMIVW9BxnwDpdgUI5%2FX16MjW%2FMlpr8He17F4XOafNvOfevzLAl3GEOmHR7yCcAejuxqug1LimKiRj10AHHfIFp1BEDNEXvddnu2Nrb%2FMEIo&X-Amz-Signature=697c9c2b4b0d15f963f46bf3f3c6125797456903cb02b57f16f4af260078c356&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2GCGKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1w8YI2hTE%2B%2FuZBbxtVqeK2FsWo0772cFCLxqCCJ5o1AiEA4FHjPK0D%2BAmVF19Hkl4cyjPmzCQwSx4XFcaZzB6rqnkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMNKVvvCdFvziGSUgCrcA0RtlQbyXLxsc6912VEq5pLVQRnZpLOvvJ6h%2FZq3SMmSZnORAN0nLkhumYnI8krzO8FA6N1jqmYLbzYGV5NA4ZcSMZ7Ya6D5Tg%2FB6gUFHVCS4LR6taWWtraI1kulPqT5NEKUP5VO3qsQXA63nygWIo9j2l6XKj5jcPF%2FmAcPpVsc6LuvW3JXqskulAmS46TtenDz5F1wgrbUuHqpMb%2FD%2F3CiAhPO4b4snIVUz4%2F7IgGVqqE8b6Zi1aTuMowP3pvBameqGiT8l083toXhaJTD6nTLGJQkA45xEVuell2K79Ha5spO2ayeuADyJ3HWQfC4ot48gpOPsM2YIhRGQ3aqsQjsIXPckYavjz6eUvBurwGZK3aKP4OpV3whQpM50H04d9SGDf163YqE0r6v7wzY4%2B61tt9b5YTny8Xz1ElzaZ9IEqp0CvkJOYmFuy41qr%2BXwBj9JDUQEqh95rIctoxmLVZdm%2BRmH0w%2BmrCniOSIkVIlkZxrPzJ6bXxURFfYf6tTy5Ai%2BFAZLeC%2BXt2do3X4yqLivQlidkhPxZZvluS5Oq53hK1bKYLVmk55saLmZfWj%2FmSFGpWOi8HPfyKD99PwzYqfS486BYSAsHw65RB3EHzC7i0I%2B5wzEdW9A5Y3MJHJqL4GOqUBBw%2FDm1gnKoDQnApCOgp1x83dBmnISjLm6q5IyteDhJtifJZtp5vNlGmSKzpw%2BDzlog5ghAdbPF9%2FzdLP0RiT8VTzuc674tGzvarqOFXGBh4wYsR%2BiyMIVW9BxnwDpdgUI5%2FX16MjW%2FMlpr8He17F4XOafNvOfevzLAl3GEOmHR7yCcAejuxqug1LimKiRj10AHHfIFp1BEDNEXvddnu2Nrb%2FMEIo&X-Amz-Signature=89a737aba10d57a3c7cac9292568e2ba5122dad5e6803828988fbcab787d9ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
