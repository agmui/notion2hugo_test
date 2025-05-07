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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62KBRFP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQo69k9EnVBy3r%2FgC3pZCO2ld%2FGL1dlXbBUWGvVq6sgIhAN85n%2BuaILncq1gJaU%2F3dm2L%2BB3nvnY6r1g555fGIdFLKv8DCFAQABoMNjM3NDIzMTgzODA1IgwqktabwiJV6nkThOYq3ANURgZFJ8COgx71T02tGcMcWyRnyPQRKoCN757RLOqUl0MIAKHHVX6ol%2BN3e7W8RsMgKPdUAUJ9DNSxwPfqeMIR4%2FLv7gv8baeBbhp3ZxzI8uPw40oaGyDIg2s6cX56q80oim1INawpPB3YU%2F%2FfMoYtvEMJHFwGxSpWcz9MUv%2BlBpPZ5izBcLJ452Bv4ZnDh2aTpgy2tC5pyOf4o0pZhBu9K7rqIVqymEzHr8DoTlx8uLxaIIbad4%2FMDTAwTZwX2Co3L%2F58FiJykPEAokfr%2FUJ35q%2BZMikh09fEeFx9mr7IyUie2GUoys9ps423ecrf63Vw8HQlbRGZ0dlbXqmi1%2FZnWUXg2%2BQhtiP6%2BTmYrxYWb0DCPxRBERGPTACF7AziKFTlXHApLsesQe%2F2XkWowwP2%2B5Ch6AZABYmmGwtqeN7GfAkHTA5NcjWyBPNwS%2FotqiSoPVRWQBXyhKBKUDTUvIWDbVHI6%2B5%2BZPlUPPXQytiRPZ5mTxIBoVRm38uF3NIbsVd44Qpld2M%2F1XQ0AkMFL7xalKXD8TDYVf0ZuX%2FOw3qdoRlOL3dH4UF34UOtv9bjnfcZPUOn3Nq46qVrFP3BNQSbx548GtRvjWTV8fntmbD6YdJFKw46LMgWE7LUdDDwrurABjqkAfUbDAWZHb2gTb76io4oVjhTdhoSfMy97Y4n5j%2Bt2JJb0IzKQytxMIwGJyOUbP%2B%2FIzAMAW6Yhr7N32QFo2VmGD%2Ft91GEgIeWYhGBkKoju%2F%2Fgs8XB%2BAvIAawkzOEkbbyDIOyRJTo74mtcCMRiloWELLr60Bp4ug6Vio4n%2BxUgoWYD%2FkfuebmKYCWk5Vkl%2BZt7YephLdYN%2Fh3yrzE3CEGcmoxu8SIB&X-Amz-Signature=e0e30b5ea0dbe228545a91c21f19d8ec45907bc64ba9de1c2ccf97f784bee6c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62KBRFP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQo69k9EnVBy3r%2FgC3pZCO2ld%2FGL1dlXbBUWGvVq6sgIhAN85n%2BuaILncq1gJaU%2F3dm2L%2BB3nvnY6r1g555fGIdFLKv8DCFAQABoMNjM3NDIzMTgzODA1IgwqktabwiJV6nkThOYq3ANURgZFJ8COgx71T02tGcMcWyRnyPQRKoCN757RLOqUl0MIAKHHVX6ol%2BN3e7W8RsMgKPdUAUJ9DNSxwPfqeMIR4%2FLv7gv8baeBbhp3ZxzI8uPw40oaGyDIg2s6cX56q80oim1INawpPB3YU%2F%2FfMoYtvEMJHFwGxSpWcz9MUv%2BlBpPZ5izBcLJ452Bv4ZnDh2aTpgy2tC5pyOf4o0pZhBu9K7rqIVqymEzHr8DoTlx8uLxaIIbad4%2FMDTAwTZwX2Co3L%2F58FiJykPEAokfr%2FUJ35q%2BZMikh09fEeFx9mr7IyUie2GUoys9ps423ecrf63Vw8HQlbRGZ0dlbXqmi1%2FZnWUXg2%2BQhtiP6%2BTmYrxYWb0DCPxRBERGPTACF7AziKFTlXHApLsesQe%2F2XkWowwP2%2B5Ch6AZABYmmGwtqeN7GfAkHTA5NcjWyBPNwS%2FotqiSoPVRWQBXyhKBKUDTUvIWDbVHI6%2B5%2BZPlUPPXQytiRPZ5mTxIBoVRm38uF3NIbsVd44Qpld2M%2F1XQ0AkMFL7xalKXD8TDYVf0ZuX%2FOw3qdoRlOL3dH4UF34UOtv9bjnfcZPUOn3Nq46qVrFP3BNQSbx548GtRvjWTV8fntmbD6YdJFKw46LMgWE7LUdDDwrurABjqkAfUbDAWZHb2gTb76io4oVjhTdhoSfMy97Y4n5j%2Bt2JJb0IzKQytxMIwGJyOUbP%2B%2FIzAMAW6Yhr7N32QFo2VmGD%2Ft91GEgIeWYhGBkKoju%2F%2Fgs8XB%2BAvIAawkzOEkbbyDIOyRJTo74mtcCMRiloWELLr60Bp4ug6Vio4n%2BxUgoWYD%2FkfuebmKYCWk5Vkl%2BZt7YephLdYN%2Fh3yrzE3CEGcmoxu8SIB&X-Amz-Signature=a7ea5b018a8b48d2a5a7e76608c7730c06b3fe7d5a3ff8f5f72f143310873925&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62KBRFP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQo69k9EnVBy3r%2FgC3pZCO2ld%2FGL1dlXbBUWGvVq6sgIhAN85n%2BuaILncq1gJaU%2F3dm2L%2BB3nvnY6r1g555fGIdFLKv8DCFAQABoMNjM3NDIzMTgzODA1IgwqktabwiJV6nkThOYq3ANURgZFJ8COgx71T02tGcMcWyRnyPQRKoCN757RLOqUl0MIAKHHVX6ol%2BN3e7W8RsMgKPdUAUJ9DNSxwPfqeMIR4%2FLv7gv8baeBbhp3ZxzI8uPw40oaGyDIg2s6cX56q80oim1INawpPB3YU%2F%2FfMoYtvEMJHFwGxSpWcz9MUv%2BlBpPZ5izBcLJ452Bv4ZnDh2aTpgy2tC5pyOf4o0pZhBu9K7rqIVqymEzHr8DoTlx8uLxaIIbad4%2FMDTAwTZwX2Co3L%2F58FiJykPEAokfr%2FUJ35q%2BZMikh09fEeFx9mr7IyUie2GUoys9ps423ecrf63Vw8HQlbRGZ0dlbXqmi1%2FZnWUXg2%2BQhtiP6%2BTmYrxYWb0DCPxRBERGPTACF7AziKFTlXHApLsesQe%2F2XkWowwP2%2B5Ch6AZABYmmGwtqeN7GfAkHTA5NcjWyBPNwS%2FotqiSoPVRWQBXyhKBKUDTUvIWDbVHI6%2B5%2BZPlUPPXQytiRPZ5mTxIBoVRm38uF3NIbsVd44Qpld2M%2F1XQ0AkMFL7xalKXD8TDYVf0ZuX%2FOw3qdoRlOL3dH4UF34UOtv9bjnfcZPUOn3Nq46qVrFP3BNQSbx548GtRvjWTV8fntmbD6YdJFKw46LMgWE7LUdDDwrurABjqkAfUbDAWZHb2gTb76io4oVjhTdhoSfMy97Y4n5j%2Bt2JJb0IzKQytxMIwGJyOUbP%2B%2FIzAMAW6Yhr7N32QFo2VmGD%2Ft91GEgIeWYhGBkKoju%2F%2Fgs8XB%2BAvIAawkzOEkbbyDIOyRJTo74mtcCMRiloWELLr60Bp4ug6Vio4n%2BxUgoWYD%2FkfuebmKYCWk5Vkl%2BZt7YephLdYN%2Fh3yrzE3CEGcmoxu8SIB&X-Amz-Signature=ff28f3a69f5d184a7c453108acce40557f29bc08cc4d27c91af8bc45c25254cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62KBRFP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQo69k9EnVBy3r%2FgC3pZCO2ld%2FGL1dlXbBUWGvVq6sgIhAN85n%2BuaILncq1gJaU%2F3dm2L%2BB3nvnY6r1g555fGIdFLKv8DCFAQABoMNjM3NDIzMTgzODA1IgwqktabwiJV6nkThOYq3ANURgZFJ8COgx71T02tGcMcWyRnyPQRKoCN757RLOqUl0MIAKHHVX6ol%2BN3e7W8RsMgKPdUAUJ9DNSxwPfqeMIR4%2FLv7gv8baeBbhp3ZxzI8uPw40oaGyDIg2s6cX56q80oim1INawpPB3YU%2F%2FfMoYtvEMJHFwGxSpWcz9MUv%2BlBpPZ5izBcLJ452Bv4ZnDh2aTpgy2tC5pyOf4o0pZhBu9K7rqIVqymEzHr8DoTlx8uLxaIIbad4%2FMDTAwTZwX2Co3L%2F58FiJykPEAokfr%2FUJ35q%2BZMikh09fEeFx9mr7IyUie2GUoys9ps423ecrf63Vw8HQlbRGZ0dlbXqmi1%2FZnWUXg2%2BQhtiP6%2BTmYrxYWb0DCPxRBERGPTACF7AziKFTlXHApLsesQe%2F2XkWowwP2%2B5Ch6AZABYmmGwtqeN7GfAkHTA5NcjWyBPNwS%2FotqiSoPVRWQBXyhKBKUDTUvIWDbVHI6%2B5%2BZPlUPPXQytiRPZ5mTxIBoVRm38uF3NIbsVd44Qpld2M%2F1XQ0AkMFL7xalKXD8TDYVf0ZuX%2FOw3qdoRlOL3dH4UF34UOtv9bjnfcZPUOn3Nq46qVrFP3BNQSbx548GtRvjWTV8fntmbD6YdJFKw46LMgWE7LUdDDwrurABjqkAfUbDAWZHb2gTb76io4oVjhTdhoSfMy97Y4n5j%2Bt2JJb0IzKQytxMIwGJyOUbP%2B%2FIzAMAW6Yhr7N32QFo2VmGD%2Ft91GEgIeWYhGBkKoju%2F%2Fgs8XB%2BAvIAawkzOEkbbyDIOyRJTo74mtcCMRiloWELLr60Bp4ug6Vio4n%2BxUgoWYD%2FkfuebmKYCWk5Vkl%2BZt7YephLdYN%2Fh3yrzE3CEGcmoxu8SIB&X-Amz-Signature=0264c8a363e746ab62a3047d919e61f240f9a0f0880bfeb6e558279e9f737d06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62KBRFP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQo69k9EnVBy3r%2FgC3pZCO2ld%2FGL1dlXbBUWGvVq6sgIhAN85n%2BuaILncq1gJaU%2F3dm2L%2BB3nvnY6r1g555fGIdFLKv8DCFAQABoMNjM3NDIzMTgzODA1IgwqktabwiJV6nkThOYq3ANURgZFJ8COgx71T02tGcMcWyRnyPQRKoCN757RLOqUl0MIAKHHVX6ol%2BN3e7W8RsMgKPdUAUJ9DNSxwPfqeMIR4%2FLv7gv8baeBbhp3ZxzI8uPw40oaGyDIg2s6cX56q80oim1INawpPB3YU%2F%2FfMoYtvEMJHFwGxSpWcz9MUv%2BlBpPZ5izBcLJ452Bv4ZnDh2aTpgy2tC5pyOf4o0pZhBu9K7rqIVqymEzHr8DoTlx8uLxaIIbad4%2FMDTAwTZwX2Co3L%2F58FiJykPEAokfr%2FUJ35q%2BZMikh09fEeFx9mr7IyUie2GUoys9ps423ecrf63Vw8HQlbRGZ0dlbXqmi1%2FZnWUXg2%2BQhtiP6%2BTmYrxYWb0DCPxRBERGPTACF7AziKFTlXHApLsesQe%2F2XkWowwP2%2B5Ch6AZABYmmGwtqeN7GfAkHTA5NcjWyBPNwS%2FotqiSoPVRWQBXyhKBKUDTUvIWDbVHI6%2B5%2BZPlUPPXQytiRPZ5mTxIBoVRm38uF3NIbsVd44Qpld2M%2F1XQ0AkMFL7xalKXD8TDYVf0ZuX%2FOw3qdoRlOL3dH4UF34UOtv9bjnfcZPUOn3Nq46qVrFP3BNQSbx548GtRvjWTV8fntmbD6YdJFKw46LMgWE7LUdDDwrurABjqkAfUbDAWZHb2gTb76io4oVjhTdhoSfMy97Y4n5j%2Bt2JJb0IzKQytxMIwGJyOUbP%2B%2FIzAMAW6Yhr7N32QFo2VmGD%2Ft91GEgIeWYhGBkKoju%2F%2Fgs8XB%2BAvIAawkzOEkbbyDIOyRJTo74mtcCMRiloWELLr60Bp4ug6Vio4n%2BxUgoWYD%2FkfuebmKYCWk5Vkl%2BZt7YephLdYN%2Fh3yrzE3CEGcmoxu8SIB&X-Amz-Signature=8aea67ea02d6c41124d0d3431ea650819b04bfd551b585abc3320f0c734e8d88&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
