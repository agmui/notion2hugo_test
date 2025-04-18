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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6S2FW4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRY9hUzg%2FQcmp2jglmZj6s8D%2FQuziHVJim%2BjaTHNO3pAIgIlIDGl%2BQ95lW4cp5HIHmKM7G4nKoEKe2q1MKlO9DwZEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMa5a%2F4V9ZSlBYfGdCrcAzIiEznFeCulZbZuF8awteJRoabrY9jpA6Yfm4OB7TbsvhVfD0EccKaag1f%2Bk7u3eIaQR%2BsXqp6ApczcKBNDhf2NM3oJQaOSeheMbgrPvqeJ3pMvW0yDOhc0V1%2FOY3SYSBKxBI8NADufRApTiKg7%2B3C9EDzfOeMgQeTudjWdA4NQOZ66EJCU3%2F0Z4wg%2BH%2BkYGXy%2BzexPGXnQ9e7OTBeNvmYynwJ21rqfuChvoxIqHav%2FXo1Qn2uF%2BpJlMmF1z%2BUdSmJI%2FpK5mn3uZE8CEgKuT%2BS0ATv46itxLx2vZXm%2BFOns7g7L8FDzCkemTqIZruU2kcZsWKIUVPNrwUEWgNwXbmL57oqhmmj%2F%2F%2BeMPXI2gXb604ZkzCFleVCvyDQP3qgQjl%2BtNRRHK9BK%2BzZJUk%2F9MIXrfo8siUcgu%2FuNl8ylwR6%2FaotnEZAFjEuyngtOt0YFAJ1oxkFUzwxsUVhH5sMrPH%2B1nYTWSOXOM2olkrwwAbu1v2ncLE%2BS7UlBtdFWXAdEN2wFaPXetLKvwos8yiZDRmfNHBCMWdx5dM0MAikVAgDM0omay6mIecUZJpjz8RR2JVeYzU83KG3C7Z%2BE5qxXtCFt%2BkBkTBNCggMoZ7EYd3sRL3IIswS4UvuGK1r3MKrjiMAGOqUB%2FOraMz2OBlUgpblktujJmdfa9VrtrFjdkIFnpiis8jcRswPdarjZlzuAQdUO7o3Kk%2BUMbq06CqvnWHNuvddILuxdMClSn3KQ0fWhS3V4UZsnbc06hK12xnW2Cea2zXfMUAMNHBtnIpQvU9kAg410gtUJxldZmiZoT6Rzs94EN8KRPaas8v50qlcJ6iteah%2FnTCzPKKpGzJ%2FTMviDu1vE4o8D1xeK&X-Amz-Signature=c95fd4db4d6e88e2d8474dcb1de2624aad5ca0f6da59b2c4617fff249f3576f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6S2FW4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRY9hUzg%2FQcmp2jglmZj6s8D%2FQuziHVJim%2BjaTHNO3pAIgIlIDGl%2BQ95lW4cp5HIHmKM7G4nKoEKe2q1MKlO9DwZEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMa5a%2F4V9ZSlBYfGdCrcAzIiEznFeCulZbZuF8awteJRoabrY9jpA6Yfm4OB7TbsvhVfD0EccKaag1f%2Bk7u3eIaQR%2BsXqp6ApczcKBNDhf2NM3oJQaOSeheMbgrPvqeJ3pMvW0yDOhc0V1%2FOY3SYSBKxBI8NADufRApTiKg7%2B3C9EDzfOeMgQeTudjWdA4NQOZ66EJCU3%2F0Z4wg%2BH%2BkYGXy%2BzexPGXnQ9e7OTBeNvmYynwJ21rqfuChvoxIqHav%2FXo1Qn2uF%2BpJlMmF1z%2BUdSmJI%2FpK5mn3uZE8CEgKuT%2BS0ATv46itxLx2vZXm%2BFOns7g7L8FDzCkemTqIZruU2kcZsWKIUVPNrwUEWgNwXbmL57oqhmmj%2F%2F%2BeMPXI2gXb604ZkzCFleVCvyDQP3qgQjl%2BtNRRHK9BK%2BzZJUk%2F9MIXrfo8siUcgu%2FuNl8ylwR6%2FaotnEZAFjEuyngtOt0YFAJ1oxkFUzwxsUVhH5sMrPH%2B1nYTWSOXOM2olkrwwAbu1v2ncLE%2BS7UlBtdFWXAdEN2wFaPXetLKvwos8yiZDRmfNHBCMWdx5dM0MAikVAgDM0omay6mIecUZJpjz8RR2JVeYzU83KG3C7Z%2BE5qxXtCFt%2BkBkTBNCggMoZ7EYd3sRL3IIswS4UvuGK1r3MKrjiMAGOqUB%2FOraMz2OBlUgpblktujJmdfa9VrtrFjdkIFnpiis8jcRswPdarjZlzuAQdUO7o3Kk%2BUMbq06CqvnWHNuvddILuxdMClSn3KQ0fWhS3V4UZsnbc06hK12xnW2Cea2zXfMUAMNHBtnIpQvU9kAg410gtUJxldZmiZoT6Rzs94EN8KRPaas8v50qlcJ6iteah%2FnTCzPKKpGzJ%2FTMviDu1vE4o8D1xeK&X-Amz-Signature=08ce8556747082ecaa9bde8156e4cc54a9dbcf5930877368318d6235b58062a3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6S2FW4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRY9hUzg%2FQcmp2jglmZj6s8D%2FQuziHVJim%2BjaTHNO3pAIgIlIDGl%2BQ95lW4cp5HIHmKM7G4nKoEKe2q1MKlO9DwZEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMa5a%2F4V9ZSlBYfGdCrcAzIiEznFeCulZbZuF8awteJRoabrY9jpA6Yfm4OB7TbsvhVfD0EccKaag1f%2Bk7u3eIaQR%2BsXqp6ApczcKBNDhf2NM3oJQaOSeheMbgrPvqeJ3pMvW0yDOhc0V1%2FOY3SYSBKxBI8NADufRApTiKg7%2B3C9EDzfOeMgQeTudjWdA4NQOZ66EJCU3%2F0Z4wg%2BH%2BkYGXy%2BzexPGXnQ9e7OTBeNvmYynwJ21rqfuChvoxIqHav%2FXo1Qn2uF%2BpJlMmF1z%2BUdSmJI%2FpK5mn3uZE8CEgKuT%2BS0ATv46itxLx2vZXm%2BFOns7g7L8FDzCkemTqIZruU2kcZsWKIUVPNrwUEWgNwXbmL57oqhmmj%2F%2F%2BeMPXI2gXb604ZkzCFleVCvyDQP3qgQjl%2BtNRRHK9BK%2BzZJUk%2F9MIXrfo8siUcgu%2FuNl8ylwR6%2FaotnEZAFjEuyngtOt0YFAJ1oxkFUzwxsUVhH5sMrPH%2B1nYTWSOXOM2olkrwwAbu1v2ncLE%2BS7UlBtdFWXAdEN2wFaPXetLKvwos8yiZDRmfNHBCMWdx5dM0MAikVAgDM0omay6mIecUZJpjz8RR2JVeYzU83KG3C7Z%2BE5qxXtCFt%2BkBkTBNCggMoZ7EYd3sRL3IIswS4UvuGK1r3MKrjiMAGOqUB%2FOraMz2OBlUgpblktujJmdfa9VrtrFjdkIFnpiis8jcRswPdarjZlzuAQdUO7o3Kk%2BUMbq06CqvnWHNuvddILuxdMClSn3KQ0fWhS3V4UZsnbc06hK12xnW2Cea2zXfMUAMNHBtnIpQvU9kAg410gtUJxldZmiZoT6Rzs94EN8KRPaas8v50qlcJ6iteah%2FnTCzPKKpGzJ%2FTMviDu1vE4o8D1xeK&X-Amz-Signature=38ce03e75acdc94b54468737b9d283d3c2803d133f39748ac78b1a2c3d440f35&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6S2FW4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRY9hUzg%2FQcmp2jglmZj6s8D%2FQuziHVJim%2BjaTHNO3pAIgIlIDGl%2BQ95lW4cp5HIHmKM7G4nKoEKe2q1MKlO9DwZEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMa5a%2F4V9ZSlBYfGdCrcAzIiEznFeCulZbZuF8awteJRoabrY9jpA6Yfm4OB7TbsvhVfD0EccKaag1f%2Bk7u3eIaQR%2BsXqp6ApczcKBNDhf2NM3oJQaOSeheMbgrPvqeJ3pMvW0yDOhc0V1%2FOY3SYSBKxBI8NADufRApTiKg7%2B3C9EDzfOeMgQeTudjWdA4NQOZ66EJCU3%2F0Z4wg%2BH%2BkYGXy%2BzexPGXnQ9e7OTBeNvmYynwJ21rqfuChvoxIqHav%2FXo1Qn2uF%2BpJlMmF1z%2BUdSmJI%2FpK5mn3uZE8CEgKuT%2BS0ATv46itxLx2vZXm%2BFOns7g7L8FDzCkemTqIZruU2kcZsWKIUVPNrwUEWgNwXbmL57oqhmmj%2F%2F%2BeMPXI2gXb604ZkzCFleVCvyDQP3qgQjl%2BtNRRHK9BK%2BzZJUk%2F9MIXrfo8siUcgu%2FuNl8ylwR6%2FaotnEZAFjEuyngtOt0YFAJ1oxkFUzwxsUVhH5sMrPH%2B1nYTWSOXOM2olkrwwAbu1v2ncLE%2BS7UlBtdFWXAdEN2wFaPXetLKvwos8yiZDRmfNHBCMWdx5dM0MAikVAgDM0omay6mIecUZJpjz8RR2JVeYzU83KG3C7Z%2BE5qxXtCFt%2BkBkTBNCggMoZ7EYd3sRL3IIswS4UvuGK1r3MKrjiMAGOqUB%2FOraMz2OBlUgpblktujJmdfa9VrtrFjdkIFnpiis8jcRswPdarjZlzuAQdUO7o3Kk%2BUMbq06CqvnWHNuvddILuxdMClSn3KQ0fWhS3V4UZsnbc06hK12xnW2Cea2zXfMUAMNHBtnIpQvU9kAg410gtUJxldZmiZoT6Rzs94EN8KRPaas8v50qlcJ6iteah%2FnTCzPKKpGzJ%2FTMviDu1vE4o8D1xeK&X-Amz-Signature=39ba3cd6469862afb0dd50ebf0651c32c810212b3eea0125c53ba078ae3805b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6S2FW4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRY9hUzg%2FQcmp2jglmZj6s8D%2FQuziHVJim%2BjaTHNO3pAIgIlIDGl%2BQ95lW4cp5HIHmKM7G4nKoEKe2q1MKlO9DwZEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMa5a%2F4V9ZSlBYfGdCrcAzIiEznFeCulZbZuF8awteJRoabrY9jpA6Yfm4OB7TbsvhVfD0EccKaag1f%2Bk7u3eIaQR%2BsXqp6ApczcKBNDhf2NM3oJQaOSeheMbgrPvqeJ3pMvW0yDOhc0V1%2FOY3SYSBKxBI8NADufRApTiKg7%2B3C9EDzfOeMgQeTudjWdA4NQOZ66EJCU3%2F0Z4wg%2BH%2BkYGXy%2BzexPGXnQ9e7OTBeNvmYynwJ21rqfuChvoxIqHav%2FXo1Qn2uF%2BpJlMmF1z%2BUdSmJI%2FpK5mn3uZE8CEgKuT%2BS0ATv46itxLx2vZXm%2BFOns7g7L8FDzCkemTqIZruU2kcZsWKIUVPNrwUEWgNwXbmL57oqhmmj%2F%2F%2BeMPXI2gXb604ZkzCFleVCvyDQP3qgQjl%2BtNRRHK9BK%2BzZJUk%2F9MIXrfo8siUcgu%2FuNl8ylwR6%2FaotnEZAFjEuyngtOt0YFAJ1oxkFUzwxsUVhH5sMrPH%2B1nYTWSOXOM2olkrwwAbu1v2ncLE%2BS7UlBtdFWXAdEN2wFaPXetLKvwos8yiZDRmfNHBCMWdx5dM0MAikVAgDM0omay6mIecUZJpjz8RR2JVeYzU83KG3C7Z%2BE5qxXtCFt%2BkBkTBNCggMoZ7EYd3sRL3IIswS4UvuGK1r3MKrjiMAGOqUB%2FOraMz2OBlUgpblktujJmdfa9VrtrFjdkIFnpiis8jcRswPdarjZlzuAQdUO7o3Kk%2BUMbq06CqvnWHNuvddILuxdMClSn3KQ0fWhS3V4UZsnbc06hK12xnW2Cea2zXfMUAMNHBtnIpQvU9kAg410gtUJxldZmiZoT6Rzs94EN8KRPaas8v50qlcJ6iteah%2FnTCzPKKpGzJ%2FTMviDu1vE4o8D1xeK&X-Amz-Signature=e0e9a0c10900f0c6ddf55f4f1c3e9e66f672de2e6a6fbf85811c9a924cd92342&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
