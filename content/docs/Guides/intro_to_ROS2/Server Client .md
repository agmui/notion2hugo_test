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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3S7MVNS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE0YD7OUg6oJDLstAZA6povzBNSsMXIglUQsrQMZNZMxAiEAndnSL8vuiFiIx%2BO0%2FW6L1RRdHg0Vm7%2BhwSU5IaUU1KIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDBBbqAM4OBZsYD3AircAwi6jPwp96%2FYMDvbR7sWdfhWMyx9WbNEYNqNbCtvic5hv6eXyIIhVFDvjUcMW0MnCW%2B3L3OMxe5vIhWL%2FOw7JLCI2wWmOrNG3%2FJj7rlYZv8Dv%2FX8YyC5TI2bMi0FDt5rlqJi%2Fv0UX6mNGZhkha8n5Bc%2FXGvP9uBP%2BvpPFkdkocQfkCmBF9gmT5bMmUqMc1p9TY7rxeaj3qFFCm%2BAIasSP8qIbIdhChaC7Nrq8xZpDJEJsORa5eOf1Z82CWuQNRlLg%2FFtxij%2FPIULmAHVpR3BYcLyJ0gb0yAxFiLTlL5DgZ%2FsnkRzRh6TE2T7Q4wdvPoEzZlZqjGvhGnuV%2FArF3x%2FPVr6Y2jFEiRHOh3%2FSmcrbARQT40r6gjDJSuV7Acrx86TH3JV86pAXHfX8NYF7DFcOWHszoEmy88d%2BfdGhbC0UfUgB4EesniFjA%2FHVe%2FirB%2FKVjKhljtBd4Z1RAIDvkU3t7%2FYeMHFLcGkUd%2Bu%2FTQvGRzl7Z9kITdMhvsPqBb4Iw7CJjj8QOCiwUII8%2BW8gD2fhoo8AsO5sIrh0pi0pEMCBf3cLWf8qPOrj3cqLFQ5qljeN2Qvz6dDZuyadcfJp5ac8BidaGo389yaRKZLIEPtHBGruErYw3wEqFpH83lVMK3T%2BcIGOqUBI8DIVrXQ7oUTX2pccr7IB3F1N5YDozu%2FXgCilTpjEotLUUrb0zKKVXldljpToeruq%2BOid2zzFtgfuuAQtJt5W21ch8EYnDPwSrm%2BQFQDBSZoXA%2Fi1TZcke5q0N608IEiuKLNTnswj4yOTgPrW9mc4CIg%2FlFbvSKFimXfLrT8dojK8fSP7SEZkWHi9i2ZJLKidVyVTzLoAR%2BOheZRBDPT7jbRv72P&X-Amz-Signature=7f7b9846575cb6703211a699d7d37d54a2e87209b453a3d319ef81b81487dc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3S7MVNS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE0YD7OUg6oJDLstAZA6povzBNSsMXIglUQsrQMZNZMxAiEAndnSL8vuiFiIx%2BO0%2FW6L1RRdHg0Vm7%2BhwSU5IaUU1KIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDBBbqAM4OBZsYD3AircAwi6jPwp96%2FYMDvbR7sWdfhWMyx9WbNEYNqNbCtvic5hv6eXyIIhVFDvjUcMW0MnCW%2B3L3OMxe5vIhWL%2FOw7JLCI2wWmOrNG3%2FJj7rlYZv8Dv%2FX8YyC5TI2bMi0FDt5rlqJi%2Fv0UX6mNGZhkha8n5Bc%2FXGvP9uBP%2BvpPFkdkocQfkCmBF9gmT5bMmUqMc1p9TY7rxeaj3qFFCm%2BAIasSP8qIbIdhChaC7Nrq8xZpDJEJsORa5eOf1Z82CWuQNRlLg%2FFtxij%2FPIULmAHVpR3BYcLyJ0gb0yAxFiLTlL5DgZ%2FsnkRzRh6TE2T7Q4wdvPoEzZlZqjGvhGnuV%2FArF3x%2FPVr6Y2jFEiRHOh3%2FSmcrbARQT40r6gjDJSuV7Acrx86TH3JV86pAXHfX8NYF7DFcOWHszoEmy88d%2BfdGhbC0UfUgB4EesniFjA%2FHVe%2FirB%2FKVjKhljtBd4Z1RAIDvkU3t7%2FYeMHFLcGkUd%2Bu%2FTQvGRzl7Z9kITdMhvsPqBb4Iw7CJjj8QOCiwUII8%2BW8gD2fhoo8AsO5sIrh0pi0pEMCBf3cLWf8qPOrj3cqLFQ5qljeN2Qvz6dDZuyadcfJp5ac8BidaGo389yaRKZLIEPtHBGruErYw3wEqFpH83lVMK3T%2BcIGOqUBI8DIVrXQ7oUTX2pccr7IB3F1N5YDozu%2FXgCilTpjEotLUUrb0zKKVXldljpToeruq%2BOid2zzFtgfuuAQtJt5W21ch8EYnDPwSrm%2BQFQDBSZoXA%2Fi1TZcke5q0N608IEiuKLNTnswj4yOTgPrW9mc4CIg%2FlFbvSKFimXfLrT8dojK8fSP7SEZkWHi9i2ZJLKidVyVTzLoAR%2BOheZRBDPT7jbRv72P&X-Amz-Signature=dd05f1dba877ba6e69eab0d0e5d072011ef216169f429525d491a4b3fb6dfdf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3S7MVNS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE0YD7OUg6oJDLstAZA6povzBNSsMXIglUQsrQMZNZMxAiEAndnSL8vuiFiIx%2BO0%2FW6L1RRdHg0Vm7%2BhwSU5IaUU1KIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDBBbqAM4OBZsYD3AircAwi6jPwp96%2FYMDvbR7sWdfhWMyx9WbNEYNqNbCtvic5hv6eXyIIhVFDvjUcMW0MnCW%2B3L3OMxe5vIhWL%2FOw7JLCI2wWmOrNG3%2FJj7rlYZv8Dv%2FX8YyC5TI2bMi0FDt5rlqJi%2Fv0UX6mNGZhkha8n5Bc%2FXGvP9uBP%2BvpPFkdkocQfkCmBF9gmT5bMmUqMc1p9TY7rxeaj3qFFCm%2BAIasSP8qIbIdhChaC7Nrq8xZpDJEJsORa5eOf1Z82CWuQNRlLg%2FFtxij%2FPIULmAHVpR3BYcLyJ0gb0yAxFiLTlL5DgZ%2FsnkRzRh6TE2T7Q4wdvPoEzZlZqjGvhGnuV%2FArF3x%2FPVr6Y2jFEiRHOh3%2FSmcrbARQT40r6gjDJSuV7Acrx86TH3JV86pAXHfX8NYF7DFcOWHszoEmy88d%2BfdGhbC0UfUgB4EesniFjA%2FHVe%2FirB%2FKVjKhljtBd4Z1RAIDvkU3t7%2FYeMHFLcGkUd%2Bu%2FTQvGRzl7Z9kITdMhvsPqBb4Iw7CJjj8QOCiwUII8%2BW8gD2fhoo8AsO5sIrh0pi0pEMCBf3cLWf8qPOrj3cqLFQ5qljeN2Qvz6dDZuyadcfJp5ac8BidaGo389yaRKZLIEPtHBGruErYw3wEqFpH83lVMK3T%2BcIGOqUBI8DIVrXQ7oUTX2pccr7IB3F1N5YDozu%2FXgCilTpjEotLUUrb0zKKVXldljpToeruq%2BOid2zzFtgfuuAQtJt5W21ch8EYnDPwSrm%2BQFQDBSZoXA%2Fi1TZcke5q0N608IEiuKLNTnswj4yOTgPrW9mc4CIg%2FlFbvSKFimXfLrT8dojK8fSP7SEZkWHi9i2ZJLKidVyVTzLoAR%2BOheZRBDPT7jbRv72P&X-Amz-Signature=f093e8c8e7e024fbc1ede88954226c8f63c614894624862607edc1fc4d30b97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3S7MVNS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE0YD7OUg6oJDLstAZA6povzBNSsMXIglUQsrQMZNZMxAiEAndnSL8vuiFiIx%2BO0%2FW6L1RRdHg0Vm7%2BhwSU5IaUU1KIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDBBbqAM4OBZsYD3AircAwi6jPwp96%2FYMDvbR7sWdfhWMyx9WbNEYNqNbCtvic5hv6eXyIIhVFDvjUcMW0MnCW%2B3L3OMxe5vIhWL%2FOw7JLCI2wWmOrNG3%2FJj7rlYZv8Dv%2FX8YyC5TI2bMi0FDt5rlqJi%2Fv0UX6mNGZhkha8n5Bc%2FXGvP9uBP%2BvpPFkdkocQfkCmBF9gmT5bMmUqMc1p9TY7rxeaj3qFFCm%2BAIasSP8qIbIdhChaC7Nrq8xZpDJEJsORa5eOf1Z82CWuQNRlLg%2FFtxij%2FPIULmAHVpR3BYcLyJ0gb0yAxFiLTlL5DgZ%2FsnkRzRh6TE2T7Q4wdvPoEzZlZqjGvhGnuV%2FArF3x%2FPVr6Y2jFEiRHOh3%2FSmcrbARQT40r6gjDJSuV7Acrx86TH3JV86pAXHfX8NYF7DFcOWHszoEmy88d%2BfdGhbC0UfUgB4EesniFjA%2FHVe%2FirB%2FKVjKhljtBd4Z1RAIDvkU3t7%2FYeMHFLcGkUd%2Bu%2FTQvGRzl7Z9kITdMhvsPqBb4Iw7CJjj8QOCiwUII8%2BW8gD2fhoo8AsO5sIrh0pi0pEMCBf3cLWf8qPOrj3cqLFQ5qljeN2Qvz6dDZuyadcfJp5ac8BidaGo389yaRKZLIEPtHBGruErYw3wEqFpH83lVMK3T%2BcIGOqUBI8DIVrXQ7oUTX2pccr7IB3F1N5YDozu%2FXgCilTpjEotLUUrb0zKKVXldljpToeruq%2BOid2zzFtgfuuAQtJt5W21ch8EYnDPwSrm%2BQFQDBSZoXA%2Fi1TZcke5q0N608IEiuKLNTnswj4yOTgPrW9mc4CIg%2FlFbvSKFimXfLrT8dojK8fSP7SEZkWHi9i2ZJLKidVyVTzLoAR%2BOheZRBDPT7jbRv72P&X-Amz-Signature=5a4731b2f66bb85dd02bb7b9f5abc4fd36c8e45ad6287b2fe11b452199195460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3S7MVNS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE0YD7OUg6oJDLstAZA6povzBNSsMXIglUQsrQMZNZMxAiEAndnSL8vuiFiIx%2BO0%2FW6L1RRdHg0Vm7%2BhwSU5IaUU1KIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDBBbqAM4OBZsYD3AircAwi6jPwp96%2FYMDvbR7sWdfhWMyx9WbNEYNqNbCtvic5hv6eXyIIhVFDvjUcMW0MnCW%2B3L3OMxe5vIhWL%2FOw7JLCI2wWmOrNG3%2FJj7rlYZv8Dv%2FX8YyC5TI2bMi0FDt5rlqJi%2Fv0UX6mNGZhkha8n5Bc%2FXGvP9uBP%2BvpPFkdkocQfkCmBF9gmT5bMmUqMc1p9TY7rxeaj3qFFCm%2BAIasSP8qIbIdhChaC7Nrq8xZpDJEJsORa5eOf1Z82CWuQNRlLg%2FFtxij%2FPIULmAHVpR3BYcLyJ0gb0yAxFiLTlL5DgZ%2FsnkRzRh6TE2T7Q4wdvPoEzZlZqjGvhGnuV%2FArF3x%2FPVr6Y2jFEiRHOh3%2FSmcrbARQT40r6gjDJSuV7Acrx86TH3JV86pAXHfX8NYF7DFcOWHszoEmy88d%2BfdGhbC0UfUgB4EesniFjA%2FHVe%2FirB%2FKVjKhljtBd4Z1RAIDvkU3t7%2FYeMHFLcGkUd%2Bu%2FTQvGRzl7Z9kITdMhvsPqBb4Iw7CJjj8QOCiwUII8%2BW8gD2fhoo8AsO5sIrh0pi0pEMCBf3cLWf8qPOrj3cqLFQ5qljeN2Qvz6dDZuyadcfJp5ac8BidaGo389yaRKZLIEPtHBGruErYw3wEqFpH83lVMK3T%2BcIGOqUBI8DIVrXQ7oUTX2pccr7IB3F1N5YDozu%2FXgCilTpjEotLUUrb0zKKVXldljpToeruq%2BOid2zzFtgfuuAQtJt5W21ch8EYnDPwSrm%2BQFQDBSZoXA%2Fi1TZcke5q0N608IEiuKLNTnswj4yOTgPrW9mc4CIg%2FlFbvSKFimXfLrT8dojK8fSP7SEZkWHi9i2ZJLKidVyVTzLoAR%2BOheZRBDPT7jbRv72P&X-Amz-Signature=f94dbc9dbd9835f0b72e553332ce9e3d292f539750e77b52207cf1ca033cccd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
