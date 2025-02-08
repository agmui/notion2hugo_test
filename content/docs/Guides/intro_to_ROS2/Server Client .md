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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZB3HLTM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDJqtMI971bztmo2XFeobfZNGwLkeQk9HH8cdHVQjCchAIgHziZTT%2FiGcPiv%2BuQFwc%2FOGMEsZHekFZxUXDwYcq1zJwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW90xQH5Uw5iPIoXircA%2Fk5tGkDen65bu17kOxYGIw8CIUgt0KSJslKizZJLIChsL3175cvu%2FLvmds7oNlPz8QD5lp%2F27L17dqsO2v3ttglvzl04E8JzKvs2ezaJ1zh%2FzDDIyFAygkB5NX29pKUifa1wWgrhZi%2BdG6c1Q%2BM%2BUHw3t4joTmE7SuK1XSFjvhAbtxTJg2CvoBstA3Gr4mi0SuXbmGD0AuDcnaP%2BgfF9I5IGbGxKxEYc0soRDWLX8hyJ6BaPCVgOVusn0k3HU5ugCuRKiX4eTeuql%2B2%2BxyPNBsKt9hKR%2FUmZw4XcHAKQaXMZ989%2Fl1TzYOI0seSodV7OqTSppiZyUT6SYIp6koCokM0TYk6XmIORVCjNhgnsuXjZT%2FBZYy%2FZ%2Fbib%2BgvYyyjgd0ksdhe27%2FmgyJFRlLI1ogP1dOFHmsUUXuZn9DR7KnZLUi1NMMYrveXK7rL9KlJTAU56nw8WIZ9a7fREBQr6ekidPpjaue3i2yCfoO2es%2BeW%2Bdj0LQ3IHT5%2Bwx%2BkTLA%2FlD6tzH3zsctLNNmXBgiBux5uzmN%2B3zRzZFYvLO8JU%2FxiT0Hqz%2BSz5A3hT%2FOUlYc8wd%2F65AL4cHqoPY2o4mWQFk%2BDwMI%2BP%2FaLjrir7muUi%2FXsBeCH2JMCi0%2BYgSmMPKPnL0GOqUBc8ftvZD%2F4XF1sKS7z1KSjZ9rtXPO1Pk63J73yB%2Bcd6uWh5xz51VzyJ2ZYmxf41IcNK7mqNN%2BCFDur0OD4AkLCj1HQq59KjhQuHypWZ4Fk89dLp8AqR0FJcYhh2c3q%2BZrwS832kkpGyrm3G8W%2FAbrojztZF%2FrWIIwuRiPz%2FofIqsb4%2Bn%2FYwXJ2IgQ9ee2GA4ngj62VgItdMxYyjIrfuWVTXs8DVrG&X-Amz-Signature=4cf87d6796b5b0f568761c0788c5d405797d68e450e537a6558558bd35a9660e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZB3HLTM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDJqtMI971bztmo2XFeobfZNGwLkeQk9HH8cdHVQjCchAIgHziZTT%2FiGcPiv%2BuQFwc%2FOGMEsZHekFZxUXDwYcq1zJwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW90xQH5Uw5iPIoXircA%2Fk5tGkDen65bu17kOxYGIw8CIUgt0KSJslKizZJLIChsL3175cvu%2FLvmds7oNlPz8QD5lp%2F27L17dqsO2v3ttglvzl04E8JzKvs2ezaJ1zh%2FzDDIyFAygkB5NX29pKUifa1wWgrhZi%2BdG6c1Q%2BM%2BUHw3t4joTmE7SuK1XSFjvhAbtxTJg2CvoBstA3Gr4mi0SuXbmGD0AuDcnaP%2BgfF9I5IGbGxKxEYc0soRDWLX8hyJ6BaPCVgOVusn0k3HU5ugCuRKiX4eTeuql%2B2%2BxyPNBsKt9hKR%2FUmZw4XcHAKQaXMZ989%2Fl1TzYOI0seSodV7OqTSppiZyUT6SYIp6koCokM0TYk6XmIORVCjNhgnsuXjZT%2FBZYy%2FZ%2Fbib%2BgvYyyjgd0ksdhe27%2FmgyJFRlLI1ogP1dOFHmsUUXuZn9DR7KnZLUi1NMMYrveXK7rL9KlJTAU56nw8WIZ9a7fREBQr6ekidPpjaue3i2yCfoO2es%2BeW%2Bdj0LQ3IHT5%2Bwx%2BkTLA%2FlD6tzH3zsctLNNmXBgiBux5uzmN%2B3zRzZFYvLO8JU%2FxiT0Hqz%2BSz5A3hT%2FOUlYc8wd%2F65AL4cHqoPY2o4mWQFk%2BDwMI%2BP%2FaLjrir7muUi%2FXsBeCH2JMCi0%2BYgSmMPKPnL0GOqUBc8ftvZD%2F4XF1sKS7z1KSjZ9rtXPO1Pk63J73yB%2Bcd6uWh5xz51VzyJ2ZYmxf41IcNK7mqNN%2BCFDur0OD4AkLCj1HQq59KjhQuHypWZ4Fk89dLp8AqR0FJcYhh2c3q%2BZrwS832kkpGyrm3G8W%2FAbrojztZF%2FrWIIwuRiPz%2FofIqsb4%2Bn%2FYwXJ2IgQ9ee2GA4ngj62VgItdMxYyjIrfuWVTXs8DVrG&X-Amz-Signature=5d3e4d8988683314c36f3bca4ceb75eb1a5a74ead28534fa510c5da5804128f9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZB3HLTM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDJqtMI971bztmo2XFeobfZNGwLkeQk9HH8cdHVQjCchAIgHziZTT%2FiGcPiv%2BuQFwc%2FOGMEsZHekFZxUXDwYcq1zJwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW90xQH5Uw5iPIoXircA%2Fk5tGkDen65bu17kOxYGIw8CIUgt0KSJslKizZJLIChsL3175cvu%2FLvmds7oNlPz8QD5lp%2F27L17dqsO2v3ttglvzl04E8JzKvs2ezaJ1zh%2FzDDIyFAygkB5NX29pKUifa1wWgrhZi%2BdG6c1Q%2BM%2BUHw3t4joTmE7SuK1XSFjvhAbtxTJg2CvoBstA3Gr4mi0SuXbmGD0AuDcnaP%2BgfF9I5IGbGxKxEYc0soRDWLX8hyJ6BaPCVgOVusn0k3HU5ugCuRKiX4eTeuql%2B2%2BxyPNBsKt9hKR%2FUmZw4XcHAKQaXMZ989%2Fl1TzYOI0seSodV7OqTSppiZyUT6SYIp6koCokM0TYk6XmIORVCjNhgnsuXjZT%2FBZYy%2FZ%2Fbib%2BgvYyyjgd0ksdhe27%2FmgyJFRlLI1ogP1dOFHmsUUXuZn9DR7KnZLUi1NMMYrveXK7rL9KlJTAU56nw8WIZ9a7fREBQr6ekidPpjaue3i2yCfoO2es%2BeW%2Bdj0LQ3IHT5%2Bwx%2BkTLA%2FlD6tzH3zsctLNNmXBgiBux5uzmN%2B3zRzZFYvLO8JU%2FxiT0Hqz%2BSz5A3hT%2FOUlYc8wd%2F65AL4cHqoPY2o4mWQFk%2BDwMI%2BP%2FaLjrir7muUi%2FXsBeCH2JMCi0%2BYgSmMPKPnL0GOqUBc8ftvZD%2F4XF1sKS7z1KSjZ9rtXPO1Pk63J73yB%2Bcd6uWh5xz51VzyJ2ZYmxf41IcNK7mqNN%2BCFDur0OD4AkLCj1HQq59KjhQuHypWZ4Fk89dLp8AqR0FJcYhh2c3q%2BZrwS832kkpGyrm3G8W%2FAbrojztZF%2FrWIIwuRiPz%2FofIqsb4%2Bn%2FYwXJ2IgQ9ee2GA4ngj62VgItdMxYyjIrfuWVTXs8DVrG&X-Amz-Signature=374698fef68f3bff97f916710747f49d77eb5bdc281696ac039ebb8227b3dae5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZB3HLTM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDJqtMI971bztmo2XFeobfZNGwLkeQk9HH8cdHVQjCchAIgHziZTT%2FiGcPiv%2BuQFwc%2FOGMEsZHekFZxUXDwYcq1zJwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW90xQH5Uw5iPIoXircA%2Fk5tGkDen65bu17kOxYGIw8CIUgt0KSJslKizZJLIChsL3175cvu%2FLvmds7oNlPz8QD5lp%2F27L17dqsO2v3ttglvzl04E8JzKvs2ezaJ1zh%2FzDDIyFAygkB5NX29pKUifa1wWgrhZi%2BdG6c1Q%2BM%2BUHw3t4joTmE7SuK1XSFjvhAbtxTJg2CvoBstA3Gr4mi0SuXbmGD0AuDcnaP%2BgfF9I5IGbGxKxEYc0soRDWLX8hyJ6BaPCVgOVusn0k3HU5ugCuRKiX4eTeuql%2B2%2BxyPNBsKt9hKR%2FUmZw4XcHAKQaXMZ989%2Fl1TzYOI0seSodV7OqTSppiZyUT6SYIp6koCokM0TYk6XmIORVCjNhgnsuXjZT%2FBZYy%2FZ%2Fbib%2BgvYyyjgd0ksdhe27%2FmgyJFRlLI1ogP1dOFHmsUUXuZn9DR7KnZLUi1NMMYrveXK7rL9KlJTAU56nw8WIZ9a7fREBQr6ekidPpjaue3i2yCfoO2es%2BeW%2Bdj0LQ3IHT5%2Bwx%2BkTLA%2FlD6tzH3zsctLNNmXBgiBux5uzmN%2B3zRzZFYvLO8JU%2FxiT0Hqz%2BSz5A3hT%2FOUlYc8wd%2F65AL4cHqoPY2o4mWQFk%2BDwMI%2BP%2FaLjrir7muUi%2FXsBeCH2JMCi0%2BYgSmMPKPnL0GOqUBc8ftvZD%2F4XF1sKS7z1KSjZ9rtXPO1Pk63J73yB%2Bcd6uWh5xz51VzyJ2ZYmxf41IcNK7mqNN%2BCFDur0OD4AkLCj1HQq59KjhQuHypWZ4Fk89dLp8AqR0FJcYhh2c3q%2BZrwS832kkpGyrm3G8W%2FAbrojztZF%2FrWIIwuRiPz%2FofIqsb4%2Bn%2FYwXJ2IgQ9ee2GA4ngj62VgItdMxYyjIrfuWVTXs8DVrG&X-Amz-Signature=f112a32662ffb41dfff22a6402c765c4a11cbe95aaf50b7f67b23963a8741031&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZB3HLTM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDJqtMI971bztmo2XFeobfZNGwLkeQk9HH8cdHVQjCchAIgHziZTT%2FiGcPiv%2BuQFwc%2FOGMEsZHekFZxUXDwYcq1zJwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW90xQH5Uw5iPIoXircA%2Fk5tGkDen65bu17kOxYGIw8CIUgt0KSJslKizZJLIChsL3175cvu%2FLvmds7oNlPz8QD5lp%2F27L17dqsO2v3ttglvzl04E8JzKvs2ezaJ1zh%2FzDDIyFAygkB5NX29pKUifa1wWgrhZi%2BdG6c1Q%2BM%2BUHw3t4joTmE7SuK1XSFjvhAbtxTJg2CvoBstA3Gr4mi0SuXbmGD0AuDcnaP%2BgfF9I5IGbGxKxEYc0soRDWLX8hyJ6BaPCVgOVusn0k3HU5ugCuRKiX4eTeuql%2B2%2BxyPNBsKt9hKR%2FUmZw4XcHAKQaXMZ989%2Fl1TzYOI0seSodV7OqTSppiZyUT6SYIp6koCokM0TYk6XmIORVCjNhgnsuXjZT%2FBZYy%2FZ%2Fbib%2BgvYyyjgd0ksdhe27%2FmgyJFRlLI1ogP1dOFHmsUUXuZn9DR7KnZLUi1NMMYrveXK7rL9KlJTAU56nw8WIZ9a7fREBQr6ekidPpjaue3i2yCfoO2es%2BeW%2Bdj0LQ3IHT5%2Bwx%2BkTLA%2FlD6tzH3zsctLNNmXBgiBux5uzmN%2B3zRzZFYvLO8JU%2FxiT0Hqz%2BSz5A3hT%2FOUlYc8wd%2F65AL4cHqoPY2o4mWQFk%2BDwMI%2BP%2FaLjrir7muUi%2FXsBeCH2JMCi0%2BYgSmMPKPnL0GOqUBc8ftvZD%2F4XF1sKS7z1KSjZ9rtXPO1Pk63J73yB%2Bcd6uWh5xz51VzyJ2ZYmxf41IcNK7mqNN%2BCFDur0OD4AkLCj1HQq59KjhQuHypWZ4Fk89dLp8AqR0FJcYhh2c3q%2BZrwS832kkpGyrm3G8W%2FAbrojztZF%2FrWIIwuRiPz%2FofIqsb4%2Bn%2FYwXJ2IgQ9ee2GA4ngj62VgItdMxYyjIrfuWVTXs8DVrG&X-Amz-Signature=641270b774c741c706997f6261be78212e7283b1786f28cbcc4371521f93e8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
