---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVELNGA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGAC4Rn3R1oDKXbeYCl7CC3qJv0olBeBdx3vBCbabPRwIgMDiMehzfyLoRAmp%2BDOX3NyMpsFGuTeA%2Fw75QbGS0v30qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiY%2FO0oPT8egcRcVSrcA3439lh%2FwX8%2Fk2uxIUVmBLAV%2FtUPnqUPPa5cHXG4bu%2FH0k6e1a2z2MxEgm0LbRKSwyYWu98H9GDfjvH1TfYzjGACQsHbHTMQskJ2Pa7vRBjBPDFhE0DnuISx7Z48GWPy%2FYcJLq2IyKIh4IHpAodiBUTCK6R76e1cME5H2Lq0mEI5M5wHVBtA6qvlZiEHLKNiSuOofgE70DIQOfF4%2B2j1n0ie4oMZ3hHPPDRgs7pGLF4PX82nsDTlijDh2929PPw1Kw%2FTdw0eZ0WuX1otdU7RSY083hoKnouw4zBHWWRKeELKYlUrL8gp%2BtQSZ%2FEY1xXFtqzfiJKYzFf8Hge9TVGtaaRycz12bOxMqsFmSAyirRlgaFS4pwLnaq38dJXAkFiWimbPumJHvh5MQBplUmAyLb4s5ujumDKWTN2oOKXgQ0HShqrB0r6PAaj5i9udgblcQauJacfSNcJ6Q2IbBopNQgOhhhrV%2BK4EaAjB1q6tYFqa7RtwS%2FkzJdkXW1exnKDj50hHrR3WdQmVpfeNHoe6H9fY5t%2FdPFLVkzMeVgbgJlA1vOImyoHRWfmdFHZqEJ7mR%2BBbqZ27cvWw1uaNYbQr9clunvvucSGlxlPnfotgjPsFirv34loBrk3IpHJ7ML2C2MQGOqUBQ6OOXB3Q7JLhgFf6ID%2FhcT0VEHgewOEH5PyLoA4IOR2f8Fs8497tcO08B1Zb9az%2B%2FFnWev5LTCQTT4vczO77MBt%2BPUhHMEG%2By3U7OyTxIZYOtfc%2BKuouXjms68%2FtIzKKT8ZykoujDHwAkvtLfE4iHUNvsf6gQGSjMi0f2UPMuwZcczRL%2B7zIM7hTzMSC%2F7rq%2BoUNfXYFVjTAACjGtxCtJZ6HCZ%2Fm&X-Amz-Signature=bf4dfefdc8baa925f3c1f9f26eb6f637efde3163411096aec7bfb99d18f044c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVELNGA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGAC4Rn3R1oDKXbeYCl7CC3qJv0olBeBdx3vBCbabPRwIgMDiMehzfyLoRAmp%2BDOX3NyMpsFGuTeA%2Fw75QbGS0v30qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiY%2FO0oPT8egcRcVSrcA3439lh%2FwX8%2Fk2uxIUVmBLAV%2FtUPnqUPPa5cHXG4bu%2FH0k6e1a2z2MxEgm0LbRKSwyYWu98H9GDfjvH1TfYzjGACQsHbHTMQskJ2Pa7vRBjBPDFhE0DnuISx7Z48GWPy%2FYcJLq2IyKIh4IHpAodiBUTCK6R76e1cME5H2Lq0mEI5M5wHVBtA6qvlZiEHLKNiSuOofgE70DIQOfF4%2B2j1n0ie4oMZ3hHPPDRgs7pGLF4PX82nsDTlijDh2929PPw1Kw%2FTdw0eZ0WuX1otdU7RSY083hoKnouw4zBHWWRKeELKYlUrL8gp%2BtQSZ%2FEY1xXFtqzfiJKYzFf8Hge9TVGtaaRycz12bOxMqsFmSAyirRlgaFS4pwLnaq38dJXAkFiWimbPumJHvh5MQBplUmAyLb4s5ujumDKWTN2oOKXgQ0HShqrB0r6PAaj5i9udgblcQauJacfSNcJ6Q2IbBopNQgOhhhrV%2BK4EaAjB1q6tYFqa7RtwS%2FkzJdkXW1exnKDj50hHrR3WdQmVpfeNHoe6H9fY5t%2FdPFLVkzMeVgbgJlA1vOImyoHRWfmdFHZqEJ7mR%2BBbqZ27cvWw1uaNYbQr9clunvvucSGlxlPnfotgjPsFirv34loBrk3IpHJ7ML2C2MQGOqUBQ6OOXB3Q7JLhgFf6ID%2FhcT0VEHgewOEH5PyLoA4IOR2f8Fs8497tcO08B1Zb9az%2B%2FFnWev5LTCQTT4vczO77MBt%2BPUhHMEG%2By3U7OyTxIZYOtfc%2BKuouXjms68%2FtIzKKT8ZykoujDHwAkvtLfE4iHUNvsf6gQGSjMi0f2UPMuwZcczRL%2B7zIM7hTzMSC%2F7rq%2BoUNfXYFVjTAACjGtxCtJZ6HCZ%2Fm&X-Amz-Signature=51b454a0f1b53203716358322df11cb5ffe1732f7877079226e33cc621d141ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVELNGA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGAC4Rn3R1oDKXbeYCl7CC3qJv0olBeBdx3vBCbabPRwIgMDiMehzfyLoRAmp%2BDOX3NyMpsFGuTeA%2Fw75QbGS0v30qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiY%2FO0oPT8egcRcVSrcA3439lh%2FwX8%2Fk2uxIUVmBLAV%2FtUPnqUPPa5cHXG4bu%2FH0k6e1a2z2MxEgm0LbRKSwyYWu98H9GDfjvH1TfYzjGACQsHbHTMQskJ2Pa7vRBjBPDFhE0DnuISx7Z48GWPy%2FYcJLq2IyKIh4IHpAodiBUTCK6R76e1cME5H2Lq0mEI5M5wHVBtA6qvlZiEHLKNiSuOofgE70DIQOfF4%2B2j1n0ie4oMZ3hHPPDRgs7pGLF4PX82nsDTlijDh2929PPw1Kw%2FTdw0eZ0WuX1otdU7RSY083hoKnouw4zBHWWRKeELKYlUrL8gp%2BtQSZ%2FEY1xXFtqzfiJKYzFf8Hge9TVGtaaRycz12bOxMqsFmSAyirRlgaFS4pwLnaq38dJXAkFiWimbPumJHvh5MQBplUmAyLb4s5ujumDKWTN2oOKXgQ0HShqrB0r6PAaj5i9udgblcQauJacfSNcJ6Q2IbBopNQgOhhhrV%2BK4EaAjB1q6tYFqa7RtwS%2FkzJdkXW1exnKDj50hHrR3WdQmVpfeNHoe6H9fY5t%2FdPFLVkzMeVgbgJlA1vOImyoHRWfmdFHZqEJ7mR%2BBbqZ27cvWw1uaNYbQr9clunvvucSGlxlPnfotgjPsFirv34loBrk3IpHJ7ML2C2MQGOqUBQ6OOXB3Q7JLhgFf6ID%2FhcT0VEHgewOEH5PyLoA4IOR2f8Fs8497tcO08B1Zb9az%2B%2FFnWev5LTCQTT4vczO77MBt%2BPUhHMEG%2By3U7OyTxIZYOtfc%2BKuouXjms68%2FtIzKKT8ZykoujDHwAkvtLfE4iHUNvsf6gQGSjMi0f2UPMuwZcczRL%2B7zIM7hTzMSC%2F7rq%2BoUNfXYFVjTAACjGtxCtJZ6HCZ%2Fm&X-Amz-Signature=20f84e3eae98521595edf3e4f09e1218f107bcf9952ea7be7935b31bc62a9d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVELNGA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGAC4Rn3R1oDKXbeYCl7CC3qJv0olBeBdx3vBCbabPRwIgMDiMehzfyLoRAmp%2BDOX3NyMpsFGuTeA%2Fw75QbGS0v30qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiY%2FO0oPT8egcRcVSrcA3439lh%2FwX8%2Fk2uxIUVmBLAV%2FtUPnqUPPa5cHXG4bu%2FH0k6e1a2z2MxEgm0LbRKSwyYWu98H9GDfjvH1TfYzjGACQsHbHTMQskJ2Pa7vRBjBPDFhE0DnuISx7Z48GWPy%2FYcJLq2IyKIh4IHpAodiBUTCK6R76e1cME5H2Lq0mEI5M5wHVBtA6qvlZiEHLKNiSuOofgE70DIQOfF4%2B2j1n0ie4oMZ3hHPPDRgs7pGLF4PX82nsDTlijDh2929PPw1Kw%2FTdw0eZ0WuX1otdU7RSY083hoKnouw4zBHWWRKeELKYlUrL8gp%2BtQSZ%2FEY1xXFtqzfiJKYzFf8Hge9TVGtaaRycz12bOxMqsFmSAyirRlgaFS4pwLnaq38dJXAkFiWimbPumJHvh5MQBplUmAyLb4s5ujumDKWTN2oOKXgQ0HShqrB0r6PAaj5i9udgblcQauJacfSNcJ6Q2IbBopNQgOhhhrV%2BK4EaAjB1q6tYFqa7RtwS%2FkzJdkXW1exnKDj50hHrR3WdQmVpfeNHoe6H9fY5t%2FdPFLVkzMeVgbgJlA1vOImyoHRWfmdFHZqEJ7mR%2BBbqZ27cvWw1uaNYbQr9clunvvucSGlxlPnfotgjPsFirv34loBrk3IpHJ7ML2C2MQGOqUBQ6OOXB3Q7JLhgFf6ID%2FhcT0VEHgewOEH5PyLoA4IOR2f8Fs8497tcO08B1Zb9az%2B%2FFnWev5LTCQTT4vczO77MBt%2BPUhHMEG%2By3U7OyTxIZYOtfc%2BKuouXjms68%2FtIzKKT8ZykoujDHwAkvtLfE4iHUNvsf6gQGSjMi0f2UPMuwZcczRL%2B7zIM7hTzMSC%2F7rq%2BoUNfXYFVjTAACjGtxCtJZ6HCZ%2Fm&X-Amz-Signature=5391fede9f975067c8a52978c34ea2846f1ba0e363b5d68cc26405ee3b8d80fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVELNGA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGAC4Rn3R1oDKXbeYCl7CC3qJv0olBeBdx3vBCbabPRwIgMDiMehzfyLoRAmp%2BDOX3NyMpsFGuTeA%2Fw75QbGS0v30qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiY%2FO0oPT8egcRcVSrcA3439lh%2FwX8%2Fk2uxIUVmBLAV%2FtUPnqUPPa5cHXG4bu%2FH0k6e1a2z2MxEgm0LbRKSwyYWu98H9GDfjvH1TfYzjGACQsHbHTMQskJ2Pa7vRBjBPDFhE0DnuISx7Z48GWPy%2FYcJLq2IyKIh4IHpAodiBUTCK6R76e1cME5H2Lq0mEI5M5wHVBtA6qvlZiEHLKNiSuOofgE70DIQOfF4%2B2j1n0ie4oMZ3hHPPDRgs7pGLF4PX82nsDTlijDh2929PPw1Kw%2FTdw0eZ0WuX1otdU7RSY083hoKnouw4zBHWWRKeELKYlUrL8gp%2BtQSZ%2FEY1xXFtqzfiJKYzFf8Hge9TVGtaaRycz12bOxMqsFmSAyirRlgaFS4pwLnaq38dJXAkFiWimbPumJHvh5MQBplUmAyLb4s5ujumDKWTN2oOKXgQ0HShqrB0r6PAaj5i9udgblcQauJacfSNcJ6Q2IbBopNQgOhhhrV%2BK4EaAjB1q6tYFqa7RtwS%2FkzJdkXW1exnKDj50hHrR3WdQmVpfeNHoe6H9fY5t%2FdPFLVkzMeVgbgJlA1vOImyoHRWfmdFHZqEJ7mR%2BBbqZ27cvWw1uaNYbQr9clunvvucSGlxlPnfotgjPsFirv34loBrk3IpHJ7ML2C2MQGOqUBQ6OOXB3Q7JLhgFf6ID%2FhcT0VEHgewOEH5PyLoA4IOR2f8Fs8497tcO08B1Zb9az%2B%2FFnWev5LTCQTT4vczO77MBt%2BPUhHMEG%2By3U7OyTxIZYOtfc%2BKuouXjms68%2FtIzKKT8ZykoujDHwAkvtLfE4iHUNvsf6gQGSjMi0f2UPMuwZcczRL%2B7zIM7hTzMSC%2F7rq%2BoUNfXYFVjTAACjGtxCtJZ6HCZ%2Fm&X-Amz-Signature=e040bf3d97b01e65bc89fe79ae866b53978da0be71397a26c2f11e0ef1000043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
