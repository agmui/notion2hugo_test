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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQO3DZMS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDPLnAvDJkGPE7aQPUfQEJxYfYxslE%2B7iiG%2Fv33xX4r2AIgZ2HHJrP9gAzHZ5mcpEA%2BOX4LJFO%2F7799uLnG%2FIv22pkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJWVvpD4ZUUrEocUCrcA78hgnTThHTmZGEhS8RAlhHZ3vRNZ6%2FU3i%2FfoOmdo8Keuhachc3s3rIQr3nn1ZJJQc0FyLnxfRyQxGj9MFHAT41BUGjwOO69V4%2BWLQph%2BR%2FReOHlpn3FhG9OIcTYvOD4FIvMROhnxdVQC4EyNw6YX%2F9VjwvYu%2B%2BAOQyNvICHOnplRdzvJoQxjyq03ZwLKezn9f1xmSn7PACOGhUVMyWTfcbyDf919%2BzkQcdeX0Q0qec4clwQ0xm4LLxgRCBnjRpUicSqJ%2BFCneUm6X4B69oy0ae90Mc%2BgnLI9YeU%2BXc9OOQiIGgPr001Vk41f3E5I4izlC2HvgJptVPP4E5ocIWw9rWM0hYWsXVsIny3D6FheaN9MluUY7NYUgUtUMFc6GpD2F7OKlq3SIm%2FREt72%2FzY9vfg3Wlp71vrTHnEow%2BuzlNpstBTfTfj4m0I5OppnNninQidnLc%2BYVyZ2KD69LFgqlJ8BueDL4CodgggGTL32bGV7ht424K9VQcug1P6i%2FylqA5lc2O9OnMtc02UKaHEpLz1blNyhichDJoz2SYzFXlpLbnbqnJSxVjQwwqG%2FUpEU9qSKdzDHBq4JbioyIfZCUe0SHRb7vHwE9bU%2FRisCUttel3Vhnw7z3pGdA6zMICNjcEGOqUBWj9XSb1R1oFZVZEmqbzILaJ6yzYtof2zUJdm%2FimoebqxSilfZewUra4pg1xeOqYuAy5BJHxRxnwgtW5s339jzhtFM8dMY3%2FJ6SxQiyJdoI6FpI%2BYGI3CyrEPiBx2a01Y0BvaJtFlWfWSNf0iPOUpxfqZbSmAXFsZfABkYeYENOPSbNovj%2Byxh%2FrBpUwhRXwPBGcrfgcXjPdEXNfe51uxaHYHRUtf&X-Amz-Signature=334be6a03ec069de6bf6f6b75281394502bdc21c85e652ff5e4ace246464d2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQO3DZMS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDPLnAvDJkGPE7aQPUfQEJxYfYxslE%2B7iiG%2Fv33xX4r2AIgZ2HHJrP9gAzHZ5mcpEA%2BOX4LJFO%2F7799uLnG%2FIv22pkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJWVvpD4ZUUrEocUCrcA78hgnTThHTmZGEhS8RAlhHZ3vRNZ6%2FU3i%2FfoOmdo8Keuhachc3s3rIQr3nn1ZJJQc0FyLnxfRyQxGj9MFHAT41BUGjwOO69V4%2BWLQph%2BR%2FReOHlpn3FhG9OIcTYvOD4FIvMROhnxdVQC4EyNw6YX%2F9VjwvYu%2B%2BAOQyNvICHOnplRdzvJoQxjyq03ZwLKezn9f1xmSn7PACOGhUVMyWTfcbyDf919%2BzkQcdeX0Q0qec4clwQ0xm4LLxgRCBnjRpUicSqJ%2BFCneUm6X4B69oy0ae90Mc%2BgnLI9YeU%2BXc9OOQiIGgPr001Vk41f3E5I4izlC2HvgJptVPP4E5ocIWw9rWM0hYWsXVsIny3D6FheaN9MluUY7NYUgUtUMFc6GpD2F7OKlq3SIm%2FREt72%2FzY9vfg3Wlp71vrTHnEow%2BuzlNpstBTfTfj4m0I5OppnNninQidnLc%2BYVyZ2KD69LFgqlJ8BueDL4CodgggGTL32bGV7ht424K9VQcug1P6i%2FylqA5lc2O9OnMtc02UKaHEpLz1blNyhichDJoz2SYzFXlpLbnbqnJSxVjQwwqG%2FUpEU9qSKdzDHBq4JbioyIfZCUe0SHRb7vHwE9bU%2FRisCUttel3Vhnw7z3pGdA6zMICNjcEGOqUBWj9XSb1R1oFZVZEmqbzILaJ6yzYtof2zUJdm%2FimoebqxSilfZewUra4pg1xeOqYuAy5BJHxRxnwgtW5s339jzhtFM8dMY3%2FJ6SxQiyJdoI6FpI%2BYGI3CyrEPiBx2a01Y0BvaJtFlWfWSNf0iPOUpxfqZbSmAXFsZfABkYeYENOPSbNovj%2Byxh%2FrBpUwhRXwPBGcrfgcXjPdEXNfe51uxaHYHRUtf&X-Amz-Signature=60df7f55bbfdb8718e62515d03e45639029a925a25e4c2c70a84b8aaba89070f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQO3DZMS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDPLnAvDJkGPE7aQPUfQEJxYfYxslE%2B7iiG%2Fv33xX4r2AIgZ2HHJrP9gAzHZ5mcpEA%2BOX4LJFO%2F7799uLnG%2FIv22pkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJWVvpD4ZUUrEocUCrcA78hgnTThHTmZGEhS8RAlhHZ3vRNZ6%2FU3i%2FfoOmdo8Keuhachc3s3rIQr3nn1ZJJQc0FyLnxfRyQxGj9MFHAT41BUGjwOO69V4%2BWLQph%2BR%2FReOHlpn3FhG9OIcTYvOD4FIvMROhnxdVQC4EyNw6YX%2F9VjwvYu%2B%2BAOQyNvICHOnplRdzvJoQxjyq03ZwLKezn9f1xmSn7PACOGhUVMyWTfcbyDf919%2BzkQcdeX0Q0qec4clwQ0xm4LLxgRCBnjRpUicSqJ%2BFCneUm6X4B69oy0ae90Mc%2BgnLI9YeU%2BXc9OOQiIGgPr001Vk41f3E5I4izlC2HvgJptVPP4E5ocIWw9rWM0hYWsXVsIny3D6FheaN9MluUY7NYUgUtUMFc6GpD2F7OKlq3SIm%2FREt72%2FzY9vfg3Wlp71vrTHnEow%2BuzlNpstBTfTfj4m0I5OppnNninQidnLc%2BYVyZ2KD69LFgqlJ8BueDL4CodgggGTL32bGV7ht424K9VQcug1P6i%2FylqA5lc2O9OnMtc02UKaHEpLz1blNyhichDJoz2SYzFXlpLbnbqnJSxVjQwwqG%2FUpEU9qSKdzDHBq4JbioyIfZCUe0SHRb7vHwE9bU%2FRisCUttel3Vhnw7z3pGdA6zMICNjcEGOqUBWj9XSb1R1oFZVZEmqbzILaJ6yzYtof2zUJdm%2FimoebqxSilfZewUra4pg1xeOqYuAy5BJHxRxnwgtW5s339jzhtFM8dMY3%2FJ6SxQiyJdoI6FpI%2BYGI3CyrEPiBx2a01Y0BvaJtFlWfWSNf0iPOUpxfqZbSmAXFsZfABkYeYENOPSbNovj%2Byxh%2FrBpUwhRXwPBGcrfgcXjPdEXNfe51uxaHYHRUtf&X-Amz-Signature=fde6b2ab843bbeb74dc145af53ae11160da3bae4854d8705fc984fd6f230e4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQO3DZMS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDPLnAvDJkGPE7aQPUfQEJxYfYxslE%2B7iiG%2Fv33xX4r2AIgZ2HHJrP9gAzHZ5mcpEA%2BOX4LJFO%2F7799uLnG%2FIv22pkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJWVvpD4ZUUrEocUCrcA78hgnTThHTmZGEhS8RAlhHZ3vRNZ6%2FU3i%2FfoOmdo8Keuhachc3s3rIQr3nn1ZJJQc0FyLnxfRyQxGj9MFHAT41BUGjwOO69V4%2BWLQph%2BR%2FReOHlpn3FhG9OIcTYvOD4FIvMROhnxdVQC4EyNw6YX%2F9VjwvYu%2B%2BAOQyNvICHOnplRdzvJoQxjyq03ZwLKezn9f1xmSn7PACOGhUVMyWTfcbyDf919%2BzkQcdeX0Q0qec4clwQ0xm4LLxgRCBnjRpUicSqJ%2BFCneUm6X4B69oy0ae90Mc%2BgnLI9YeU%2BXc9OOQiIGgPr001Vk41f3E5I4izlC2HvgJptVPP4E5ocIWw9rWM0hYWsXVsIny3D6FheaN9MluUY7NYUgUtUMFc6GpD2F7OKlq3SIm%2FREt72%2FzY9vfg3Wlp71vrTHnEow%2BuzlNpstBTfTfj4m0I5OppnNninQidnLc%2BYVyZ2KD69LFgqlJ8BueDL4CodgggGTL32bGV7ht424K9VQcug1P6i%2FylqA5lc2O9OnMtc02UKaHEpLz1blNyhichDJoz2SYzFXlpLbnbqnJSxVjQwwqG%2FUpEU9qSKdzDHBq4JbioyIfZCUe0SHRb7vHwE9bU%2FRisCUttel3Vhnw7z3pGdA6zMICNjcEGOqUBWj9XSb1R1oFZVZEmqbzILaJ6yzYtof2zUJdm%2FimoebqxSilfZewUra4pg1xeOqYuAy5BJHxRxnwgtW5s339jzhtFM8dMY3%2FJ6SxQiyJdoI6FpI%2BYGI3CyrEPiBx2a01Y0BvaJtFlWfWSNf0iPOUpxfqZbSmAXFsZfABkYeYENOPSbNovj%2Byxh%2FrBpUwhRXwPBGcrfgcXjPdEXNfe51uxaHYHRUtf&X-Amz-Signature=8691f086546c140a1dea5a488c9eabc316aed0d35dc5a9ecd8b8c696d5f92ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQO3DZMS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDPLnAvDJkGPE7aQPUfQEJxYfYxslE%2B7iiG%2Fv33xX4r2AIgZ2HHJrP9gAzHZ5mcpEA%2BOX4LJFO%2F7799uLnG%2FIv22pkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJWVvpD4ZUUrEocUCrcA78hgnTThHTmZGEhS8RAlhHZ3vRNZ6%2FU3i%2FfoOmdo8Keuhachc3s3rIQr3nn1ZJJQc0FyLnxfRyQxGj9MFHAT41BUGjwOO69V4%2BWLQph%2BR%2FReOHlpn3FhG9OIcTYvOD4FIvMROhnxdVQC4EyNw6YX%2F9VjwvYu%2B%2BAOQyNvICHOnplRdzvJoQxjyq03ZwLKezn9f1xmSn7PACOGhUVMyWTfcbyDf919%2BzkQcdeX0Q0qec4clwQ0xm4LLxgRCBnjRpUicSqJ%2BFCneUm6X4B69oy0ae90Mc%2BgnLI9YeU%2BXc9OOQiIGgPr001Vk41f3E5I4izlC2HvgJptVPP4E5ocIWw9rWM0hYWsXVsIny3D6FheaN9MluUY7NYUgUtUMFc6GpD2F7OKlq3SIm%2FREt72%2FzY9vfg3Wlp71vrTHnEow%2BuzlNpstBTfTfj4m0I5OppnNninQidnLc%2BYVyZ2KD69LFgqlJ8BueDL4CodgggGTL32bGV7ht424K9VQcug1P6i%2FylqA5lc2O9OnMtc02UKaHEpLz1blNyhichDJoz2SYzFXlpLbnbqnJSxVjQwwqG%2FUpEU9qSKdzDHBq4JbioyIfZCUe0SHRb7vHwE9bU%2FRisCUttel3Vhnw7z3pGdA6zMICNjcEGOqUBWj9XSb1R1oFZVZEmqbzILaJ6yzYtof2zUJdm%2FimoebqxSilfZewUra4pg1xeOqYuAy5BJHxRxnwgtW5s339jzhtFM8dMY3%2FJ6SxQiyJdoI6FpI%2BYGI3CyrEPiBx2a01Y0BvaJtFlWfWSNf0iPOUpxfqZbSmAXFsZfABkYeYENOPSbNovj%2Byxh%2FrBpUwhRXwPBGcrfgcXjPdEXNfe51uxaHYHRUtf&X-Amz-Signature=7df73a4910cffd6ad555d5e535987fdfe7f17295b53e234a549538ca0b820e24&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
