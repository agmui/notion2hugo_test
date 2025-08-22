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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=3b58d2d97ac1a6377afa15396deccf3bf8d5130fe492d5d9070efe19a0aae155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=ef3fcfdcf3432df3f4365061a5d7ee23de622adad9573d437ecc7fd2fee367cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=9e6f98e7b5657ac957f120d067782e2c0bcff7314c56e99fbc71098b7d4f1ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=dd9a04da649713117a8fb12c21b7c190c0c237bbca15efa3fa2cd117960d0f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=d0c01563d5e09abe5a91d43d2e13b020d04c0c1f64609668e52fc5aa570c8330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
