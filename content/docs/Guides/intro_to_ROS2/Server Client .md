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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WVMCYI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxZeoxgZzg%2FKPMBEYJ3ZXImyCQLJPSgTsqy1L2CZa4uAiEAqFDvP0D0ES04Y%2FL8GSIKgodJYuwdprhsmYeUN45KO0Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGzmjFvDoOKMpjfPqCrcA7zFtLpYhqE2Q3aVRJhnwcPdwLc3DM9q8NfXov6G2EGoI0bhybb7ipB9ZsMbkX6IFMx84kfEa5sJuF6Q%2FC2C%2FzpAg6o5pw6b19aH27taD5J%2BTFXzeTv76Wk%2F%2Fi7jka9tOU1CiLvbLM7HyKU0WK79eB3mE9Qk%2FR3DvHV5nLDFK3co4f8Gx6e4i6fliPAl4kBtxzUj9dmiJuq3oMUr6XkgrkMjAFpeDo9ifK%2FeogNEIlUq9PgyTbzlyr%2BkFsIcGtV1KtsGv7LDKJXwPlpkmWdugfBFsT1ZWTs7%2FtwEzA18QNQBVL%2F1cNa4egBSnjXAPjuD8Qby7%2FnnfL1RvgGujKALCaE3Tz2qni73ZDoeaCixKola%2BYthUwK4pb64r3zBSjzaFhB%2BdnFnQ4r2ktXYbXd2jEejXtCj0NdumvPGQZ6y5DwfriMyhsBzMcY%2F6yG0s4jppKxM84IFCG85bssAo%2Fpb6dZaiutO62odIVYPIcScTAqdWKHy3AmE8dfJY%2Bgsio4A0yvS3xyKLCiEX0s5OvjA95E1Rqd3PWqfKPsdOJtsjRFoiTF9nwWmo1ZMNmvi8RbyHRlVAUHs6myMPVgOtWMJeS3ENFOko4%2FZVmjEBraUgeXKXxb9lVdJEGLdJ33wMOf%2FyL8GOqUBv2FFH%2Bo6NIXDUQF7cRIYaowjN2e32OvLqxy1lB7YbdyTfS%2FGC9VRytrnOmBefzSI%2B4dPhFQQhN4fRDoRmwMccnyPXkYvkz8SqVS1iRQ7WqXEihkGMzN9yOumoo%2F1Bs3e6g2F1128HLx1MGOZZa39I%2FFkaK4eNUx4ENqtQ4fK8%2B7gwxPe2fTAfP1KNbcGzvfJalgQsdMpwfoWPA8ic0mDWN0rRvwo&X-Amz-Signature=9a9cd809262f524b4c6832e258c8e4c6fec99a2ae06c18020b4633bfb59fb05e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WVMCYI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxZeoxgZzg%2FKPMBEYJ3ZXImyCQLJPSgTsqy1L2CZa4uAiEAqFDvP0D0ES04Y%2FL8GSIKgodJYuwdprhsmYeUN45KO0Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGzmjFvDoOKMpjfPqCrcA7zFtLpYhqE2Q3aVRJhnwcPdwLc3DM9q8NfXov6G2EGoI0bhybb7ipB9ZsMbkX6IFMx84kfEa5sJuF6Q%2FC2C%2FzpAg6o5pw6b19aH27taD5J%2BTFXzeTv76Wk%2F%2Fi7jka9tOU1CiLvbLM7HyKU0WK79eB3mE9Qk%2FR3DvHV5nLDFK3co4f8Gx6e4i6fliPAl4kBtxzUj9dmiJuq3oMUr6XkgrkMjAFpeDo9ifK%2FeogNEIlUq9PgyTbzlyr%2BkFsIcGtV1KtsGv7LDKJXwPlpkmWdugfBFsT1ZWTs7%2FtwEzA18QNQBVL%2F1cNa4egBSnjXAPjuD8Qby7%2FnnfL1RvgGujKALCaE3Tz2qni73ZDoeaCixKola%2BYthUwK4pb64r3zBSjzaFhB%2BdnFnQ4r2ktXYbXd2jEejXtCj0NdumvPGQZ6y5DwfriMyhsBzMcY%2F6yG0s4jppKxM84IFCG85bssAo%2Fpb6dZaiutO62odIVYPIcScTAqdWKHy3AmE8dfJY%2Bgsio4A0yvS3xyKLCiEX0s5OvjA95E1Rqd3PWqfKPsdOJtsjRFoiTF9nwWmo1ZMNmvi8RbyHRlVAUHs6myMPVgOtWMJeS3ENFOko4%2FZVmjEBraUgeXKXxb9lVdJEGLdJ33wMOf%2FyL8GOqUBv2FFH%2Bo6NIXDUQF7cRIYaowjN2e32OvLqxy1lB7YbdyTfS%2FGC9VRytrnOmBefzSI%2B4dPhFQQhN4fRDoRmwMccnyPXkYvkz8SqVS1iRQ7WqXEihkGMzN9yOumoo%2F1Bs3e6g2F1128HLx1MGOZZa39I%2FFkaK4eNUx4ENqtQ4fK8%2B7gwxPe2fTAfP1KNbcGzvfJalgQsdMpwfoWPA8ic0mDWN0rRvwo&X-Amz-Signature=2fadb2c9e368eab0576e80b1a6ba45af59a8263a0e10c8be0530da682a3f388f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WVMCYI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxZeoxgZzg%2FKPMBEYJ3ZXImyCQLJPSgTsqy1L2CZa4uAiEAqFDvP0D0ES04Y%2FL8GSIKgodJYuwdprhsmYeUN45KO0Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGzmjFvDoOKMpjfPqCrcA7zFtLpYhqE2Q3aVRJhnwcPdwLc3DM9q8NfXov6G2EGoI0bhybb7ipB9ZsMbkX6IFMx84kfEa5sJuF6Q%2FC2C%2FzpAg6o5pw6b19aH27taD5J%2BTFXzeTv76Wk%2F%2Fi7jka9tOU1CiLvbLM7HyKU0WK79eB3mE9Qk%2FR3DvHV5nLDFK3co4f8Gx6e4i6fliPAl4kBtxzUj9dmiJuq3oMUr6XkgrkMjAFpeDo9ifK%2FeogNEIlUq9PgyTbzlyr%2BkFsIcGtV1KtsGv7LDKJXwPlpkmWdugfBFsT1ZWTs7%2FtwEzA18QNQBVL%2F1cNa4egBSnjXAPjuD8Qby7%2FnnfL1RvgGujKALCaE3Tz2qni73ZDoeaCixKola%2BYthUwK4pb64r3zBSjzaFhB%2BdnFnQ4r2ktXYbXd2jEejXtCj0NdumvPGQZ6y5DwfriMyhsBzMcY%2F6yG0s4jppKxM84IFCG85bssAo%2Fpb6dZaiutO62odIVYPIcScTAqdWKHy3AmE8dfJY%2Bgsio4A0yvS3xyKLCiEX0s5OvjA95E1Rqd3PWqfKPsdOJtsjRFoiTF9nwWmo1ZMNmvi8RbyHRlVAUHs6myMPVgOtWMJeS3ENFOko4%2FZVmjEBraUgeXKXxb9lVdJEGLdJ33wMOf%2FyL8GOqUBv2FFH%2Bo6NIXDUQF7cRIYaowjN2e32OvLqxy1lB7YbdyTfS%2FGC9VRytrnOmBefzSI%2B4dPhFQQhN4fRDoRmwMccnyPXkYvkz8SqVS1iRQ7WqXEihkGMzN9yOumoo%2F1Bs3e6g2F1128HLx1MGOZZa39I%2FFkaK4eNUx4ENqtQ4fK8%2B7gwxPe2fTAfP1KNbcGzvfJalgQsdMpwfoWPA8ic0mDWN0rRvwo&X-Amz-Signature=7dfd7ae0415defb095acafeadb597b66a72746d7951c3a27f81f3cbb3f64e7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WVMCYI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxZeoxgZzg%2FKPMBEYJ3ZXImyCQLJPSgTsqy1L2CZa4uAiEAqFDvP0D0ES04Y%2FL8GSIKgodJYuwdprhsmYeUN45KO0Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGzmjFvDoOKMpjfPqCrcA7zFtLpYhqE2Q3aVRJhnwcPdwLc3DM9q8NfXov6G2EGoI0bhybb7ipB9ZsMbkX6IFMx84kfEa5sJuF6Q%2FC2C%2FzpAg6o5pw6b19aH27taD5J%2BTFXzeTv76Wk%2F%2Fi7jka9tOU1CiLvbLM7HyKU0WK79eB3mE9Qk%2FR3DvHV5nLDFK3co4f8Gx6e4i6fliPAl4kBtxzUj9dmiJuq3oMUr6XkgrkMjAFpeDo9ifK%2FeogNEIlUq9PgyTbzlyr%2BkFsIcGtV1KtsGv7LDKJXwPlpkmWdugfBFsT1ZWTs7%2FtwEzA18QNQBVL%2F1cNa4egBSnjXAPjuD8Qby7%2FnnfL1RvgGujKALCaE3Tz2qni73ZDoeaCixKola%2BYthUwK4pb64r3zBSjzaFhB%2BdnFnQ4r2ktXYbXd2jEejXtCj0NdumvPGQZ6y5DwfriMyhsBzMcY%2F6yG0s4jppKxM84IFCG85bssAo%2Fpb6dZaiutO62odIVYPIcScTAqdWKHy3AmE8dfJY%2Bgsio4A0yvS3xyKLCiEX0s5OvjA95E1Rqd3PWqfKPsdOJtsjRFoiTF9nwWmo1ZMNmvi8RbyHRlVAUHs6myMPVgOtWMJeS3ENFOko4%2FZVmjEBraUgeXKXxb9lVdJEGLdJ33wMOf%2FyL8GOqUBv2FFH%2Bo6NIXDUQF7cRIYaowjN2e32OvLqxy1lB7YbdyTfS%2FGC9VRytrnOmBefzSI%2B4dPhFQQhN4fRDoRmwMccnyPXkYvkz8SqVS1iRQ7WqXEihkGMzN9yOumoo%2F1Bs3e6g2F1128HLx1MGOZZa39I%2FFkaK4eNUx4ENqtQ4fK8%2B7gwxPe2fTAfP1KNbcGzvfJalgQsdMpwfoWPA8ic0mDWN0rRvwo&X-Amz-Signature=f1ffa938f8fbdfba10b3f3701c10fe1e0e59b7ed9739189af2f29b4af330b773&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WVMCYI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxZeoxgZzg%2FKPMBEYJ3ZXImyCQLJPSgTsqy1L2CZa4uAiEAqFDvP0D0ES04Y%2FL8GSIKgodJYuwdprhsmYeUN45KO0Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGzmjFvDoOKMpjfPqCrcA7zFtLpYhqE2Q3aVRJhnwcPdwLc3DM9q8NfXov6G2EGoI0bhybb7ipB9ZsMbkX6IFMx84kfEa5sJuF6Q%2FC2C%2FzpAg6o5pw6b19aH27taD5J%2BTFXzeTv76Wk%2F%2Fi7jka9tOU1CiLvbLM7HyKU0WK79eB3mE9Qk%2FR3DvHV5nLDFK3co4f8Gx6e4i6fliPAl4kBtxzUj9dmiJuq3oMUr6XkgrkMjAFpeDo9ifK%2FeogNEIlUq9PgyTbzlyr%2BkFsIcGtV1KtsGv7LDKJXwPlpkmWdugfBFsT1ZWTs7%2FtwEzA18QNQBVL%2F1cNa4egBSnjXAPjuD8Qby7%2FnnfL1RvgGujKALCaE3Tz2qni73ZDoeaCixKola%2BYthUwK4pb64r3zBSjzaFhB%2BdnFnQ4r2ktXYbXd2jEejXtCj0NdumvPGQZ6y5DwfriMyhsBzMcY%2F6yG0s4jppKxM84IFCG85bssAo%2Fpb6dZaiutO62odIVYPIcScTAqdWKHy3AmE8dfJY%2Bgsio4A0yvS3xyKLCiEX0s5OvjA95E1Rqd3PWqfKPsdOJtsjRFoiTF9nwWmo1ZMNmvi8RbyHRlVAUHs6myMPVgOtWMJeS3ENFOko4%2FZVmjEBraUgeXKXxb9lVdJEGLdJ33wMOf%2FyL8GOqUBv2FFH%2Bo6NIXDUQF7cRIYaowjN2e32OvLqxy1lB7YbdyTfS%2FGC9VRytrnOmBefzSI%2B4dPhFQQhN4fRDoRmwMccnyPXkYvkz8SqVS1iRQ7WqXEihkGMzN9yOumoo%2F1Bs3e6g2F1128HLx1MGOZZa39I%2FFkaK4eNUx4ENqtQ4fK8%2B7gwxPe2fTAfP1KNbcGzvfJalgQsdMpwfoWPA8ic0mDWN0rRvwo&X-Amz-Signature=0ba689ee05f9f0f442610d6ba0c5489db27d5e2679eeb453c19fdd4139f84be5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
