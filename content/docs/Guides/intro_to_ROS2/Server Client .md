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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227UKQBD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6XemIuHzKGVgFRss7lFhBy5PUDXNM9F3RNDG%2BlULKAiEAxsGjaoVUc26QxWIsyooHHFC9k%2BnsYH5U5e4JejfaUcAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrdzocnyAp1%2BGrDqircA4wEvGVDhr47F2sZupwFWaU3x4gsZxwumc%2Bar%2BI2isIT%2ForB4iESDuYGqL%2FkFSn4wObkyPBH8o6uaREf18rqZRjsJjjA%2F8IZzKD9%2BP%2F7lpP7zD6P3eJD%2B948Mn%2B66WeEeX6BbPOXZ3BffPC7FAQF4qeOuPImW%2FKi5tdNQBJ9TE8nanhUAH0iGErmulPAaXV26GF5iIJERgfXs3CPTmOMtMz%2BYWpwoLV5DJ%2B9mUntlxdKjfYV5A63B7r3%2BpUMPYemZhRxmSrBgOwi%2FRnEQCGugPNlbo5QBycNG38%2Bbz10BVxQPBYDgPlx64is2Zlxs6SdS1%2BQQ1DyB7m3T68%2BG0%2FsE5NGGKhSK9%2FBc9vm5FKy9Wp3hyhbJzQKD07pA4ECpuubj2ypMoA5gnw96Arlkh%2FqnThSWnkMFSVnaw7K94t2UAWkxRt1tYzzPQxSefPdCrXu%2B79oMSRYA8DCVr8dKpgNl35yK0cM%2FbkUjodGH9LmNrWaitMih3kLm%2Bdr%2FlnKChBIQpcXTtrpGmeEFODfEK3yr7yeTj%2FUrDFiN%2B4ZhtNa20zD2thmhEdOZvDP2n4oCC3NKsKpxPnJ11tsgk17wC3vlJ7EGeBJTjLgKJQh5h3Zv3HK9bWk7kPWLY2qP6UUMN7ik8MGOqUBcJpAVq45tLTV6JtEb%2B2ly%2Br%2BeKnHZB1B%2BXIe9t9EE5hV88AcrEZZsnBrRTKYtuXzB2Q3B0J28A%2BZDglN%2Fo20PV4WKKw8Gr8rGV97SeKVyqD3Rx4hujm%2FATV%2FmRZA2Ipb7PWCA8mueRik3h%2Fk82QBOolPMKop4gh9zvr54z%2BxwJNH3%2B4zDHGYVEAjRedaH%2FtS%2BvWpMev42dHpH98tiSosdMBSotVq&X-Amz-Signature=bba218f1f54bb3faa26f4cedf85417ab2b3d9a505c25c41c8e5f2527219a3100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227UKQBD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6XemIuHzKGVgFRss7lFhBy5PUDXNM9F3RNDG%2BlULKAiEAxsGjaoVUc26QxWIsyooHHFC9k%2BnsYH5U5e4JejfaUcAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrdzocnyAp1%2BGrDqircA4wEvGVDhr47F2sZupwFWaU3x4gsZxwumc%2Bar%2BI2isIT%2ForB4iESDuYGqL%2FkFSn4wObkyPBH8o6uaREf18rqZRjsJjjA%2F8IZzKD9%2BP%2F7lpP7zD6P3eJD%2B948Mn%2B66WeEeX6BbPOXZ3BffPC7FAQF4qeOuPImW%2FKi5tdNQBJ9TE8nanhUAH0iGErmulPAaXV26GF5iIJERgfXs3CPTmOMtMz%2BYWpwoLV5DJ%2B9mUntlxdKjfYV5A63B7r3%2BpUMPYemZhRxmSrBgOwi%2FRnEQCGugPNlbo5QBycNG38%2Bbz10BVxQPBYDgPlx64is2Zlxs6SdS1%2BQQ1DyB7m3T68%2BG0%2FsE5NGGKhSK9%2FBc9vm5FKy9Wp3hyhbJzQKD07pA4ECpuubj2ypMoA5gnw96Arlkh%2FqnThSWnkMFSVnaw7K94t2UAWkxRt1tYzzPQxSefPdCrXu%2B79oMSRYA8DCVr8dKpgNl35yK0cM%2FbkUjodGH9LmNrWaitMih3kLm%2Bdr%2FlnKChBIQpcXTtrpGmeEFODfEK3yr7yeTj%2FUrDFiN%2B4ZhtNa20zD2thmhEdOZvDP2n4oCC3NKsKpxPnJ11tsgk17wC3vlJ7EGeBJTjLgKJQh5h3Zv3HK9bWk7kPWLY2qP6UUMN7ik8MGOqUBcJpAVq45tLTV6JtEb%2B2ly%2Br%2BeKnHZB1B%2BXIe9t9EE5hV88AcrEZZsnBrRTKYtuXzB2Q3B0J28A%2BZDglN%2Fo20PV4WKKw8Gr8rGV97SeKVyqD3Rx4hujm%2FATV%2FmRZA2Ipb7PWCA8mueRik3h%2Fk82QBOolPMKop4gh9zvr54z%2BxwJNH3%2B4zDHGYVEAjRedaH%2FtS%2BvWpMev42dHpH98tiSosdMBSotVq&X-Amz-Signature=22b48553b5948d4b8c89961493e199e9a14defc1e261097926b8695814cbbf1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227UKQBD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6XemIuHzKGVgFRss7lFhBy5PUDXNM9F3RNDG%2BlULKAiEAxsGjaoVUc26QxWIsyooHHFC9k%2BnsYH5U5e4JejfaUcAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrdzocnyAp1%2BGrDqircA4wEvGVDhr47F2sZupwFWaU3x4gsZxwumc%2Bar%2BI2isIT%2ForB4iESDuYGqL%2FkFSn4wObkyPBH8o6uaREf18rqZRjsJjjA%2F8IZzKD9%2BP%2F7lpP7zD6P3eJD%2B948Mn%2B66WeEeX6BbPOXZ3BffPC7FAQF4qeOuPImW%2FKi5tdNQBJ9TE8nanhUAH0iGErmulPAaXV26GF5iIJERgfXs3CPTmOMtMz%2BYWpwoLV5DJ%2B9mUntlxdKjfYV5A63B7r3%2BpUMPYemZhRxmSrBgOwi%2FRnEQCGugPNlbo5QBycNG38%2Bbz10BVxQPBYDgPlx64is2Zlxs6SdS1%2BQQ1DyB7m3T68%2BG0%2FsE5NGGKhSK9%2FBc9vm5FKy9Wp3hyhbJzQKD07pA4ECpuubj2ypMoA5gnw96Arlkh%2FqnThSWnkMFSVnaw7K94t2UAWkxRt1tYzzPQxSefPdCrXu%2B79oMSRYA8DCVr8dKpgNl35yK0cM%2FbkUjodGH9LmNrWaitMih3kLm%2Bdr%2FlnKChBIQpcXTtrpGmeEFODfEK3yr7yeTj%2FUrDFiN%2B4ZhtNa20zD2thmhEdOZvDP2n4oCC3NKsKpxPnJ11tsgk17wC3vlJ7EGeBJTjLgKJQh5h3Zv3HK9bWk7kPWLY2qP6UUMN7ik8MGOqUBcJpAVq45tLTV6JtEb%2B2ly%2Br%2BeKnHZB1B%2BXIe9t9EE5hV88AcrEZZsnBrRTKYtuXzB2Q3B0J28A%2BZDglN%2Fo20PV4WKKw8Gr8rGV97SeKVyqD3Rx4hujm%2FATV%2FmRZA2Ipb7PWCA8mueRik3h%2Fk82QBOolPMKop4gh9zvr54z%2BxwJNH3%2B4zDHGYVEAjRedaH%2FtS%2BvWpMev42dHpH98tiSosdMBSotVq&X-Amz-Signature=6b748ce62b0ab66a343dc47ac4fd202a867ed59c0ceca394bb3618de1c353c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227UKQBD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6XemIuHzKGVgFRss7lFhBy5PUDXNM9F3RNDG%2BlULKAiEAxsGjaoVUc26QxWIsyooHHFC9k%2BnsYH5U5e4JejfaUcAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrdzocnyAp1%2BGrDqircA4wEvGVDhr47F2sZupwFWaU3x4gsZxwumc%2Bar%2BI2isIT%2ForB4iESDuYGqL%2FkFSn4wObkyPBH8o6uaREf18rqZRjsJjjA%2F8IZzKD9%2BP%2F7lpP7zD6P3eJD%2B948Mn%2B66WeEeX6BbPOXZ3BffPC7FAQF4qeOuPImW%2FKi5tdNQBJ9TE8nanhUAH0iGErmulPAaXV26GF5iIJERgfXs3CPTmOMtMz%2BYWpwoLV5DJ%2B9mUntlxdKjfYV5A63B7r3%2BpUMPYemZhRxmSrBgOwi%2FRnEQCGugPNlbo5QBycNG38%2Bbz10BVxQPBYDgPlx64is2Zlxs6SdS1%2BQQ1DyB7m3T68%2BG0%2FsE5NGGKhSK9%2FBc9vm5FKy9Wp3hyhbJzQKD07pA4ECpuubj2ypMoA5gnw96Arlkh%2FqnThSWnkMFSVnaw7K94t2UAWkxRt1tYzzPQxSefPdCrXu%2B79oMSRYA8DCVr8dKpgNl35yK0cM%2FbkUjodGH9LmNrWaitMih3kLm%2Bdr%2FlnKChBIQpcXTtrpGmeEFODfEK3yr7yeTj%2FUrDFiN%2B4ZhtNa20zD2thmhEdOZvDP2n4oCC3NKsKpxPnJ11tsgk17wC3vlJ7EGeBJTjLgKJQh5h3Zv3HK9bWk7kPWLY2qP6UUMN7ik8MGOqUBcJpAVq45tLTV6JtEb%2B2ly%2Br%2BeKnHZB1B%2BXIe9t9EE5hV88AcrEZZsnBrRTKYtuXzB2Q3B0J28A%2BZDglN%2Fo20PV4WKKw8Gr8rGV97SeKVyqD3Rx4hujm%2FATV%2FmRZA2Ipb7PWCA8mueRik3h%2Fk82QBOolPMKop4gh9zvr54z%2BxwJNH3%2B4zDHGYVEAjRedaH%2FtS%2BvWpMev42dHpH98tiSosdMBSotVq&X-Amz-Signature=7a262e392d9b6cf46559c394c6d7336b6ce7f218166c3dd8b5ea279656cd3560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227UKQBD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6XemIuHzKGVgFRss7lFhBy5PUDXNM9F3RNDG%2BlULKAiEAxsGjaoVUc26QxWIsyooHHFC9k%2BnsYH5U5e4JejfaUcAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrdzocnyAp1%2BGrDqircA4wEvGVDhr47F2sZupwFWaU3x4gsZxwumc%2Bar%2BI2isIT%2ForB4iESDuYGqL%2FkFSn4wObkyPBH8o6uaREf18rqZRjsJjjA%2F8IZzKD9%2BP%2F7lpP7zD6P3eJD%2B948Mn%2B66WeEeX6BbPOXZ3BffPC7FAQF4qeOuPImW%2FKi5tdNQBJ9TE8nanhUAH0iGErmulPAaXV26GF5iIJERgfXs3CPTmOMtMz%2BYWpwoLV5DJ%2B9mUntlxdKjfYV5A63B7r3%2BpUMPYemZhRxmSrBgOwi%2FRnEQCGugPNlbo5QBycNG38%2Bbz10BVxQPBYDgPlx64is2Zlxs6SdS1%2BQQ1DyB7m3T68%2BG0%2FsE5NGGKhSK9%2FBc9vm5FKy9Wp3hyhbJzQKD07pA4ECpuubj2ypMoA5gnw96Arlkh%2FqnThSWnkMFSVnaw7K94t2UAWkxRt1tYzzPQxSefPdCrXu%2B79oMSRYA8DCVr8dKpgNl35yK0cM%2FbkUjodGH9LmNrWaitMih3kLm%2Bdr%2FlnKChBIQpcXTtrpGmeEFODfEK3yr7yeTj%2FUrDFiN%2B4ZhtNa20zD2thmhEdOZvDP2n4oCC3NKsKpxPnJ11tsgk17wC3vlJ7EGeBJTjLgKJQh5h3Zv3HK9bWk7kPWLY2qP6UUMN7ik8MGOqUBcJpAVq45tLTV6JtEb%2B2ly%2Br%2BeKnHZB1B%2BXIe9t9EE5hV88AcrEZZsnBrRTKYtuXzB2Q3B0J28A%2BZDglN%2Fo20PV4WKKw8Gr8rGV97SeKVyqD3Rx4hujm%2FATV%2FmRZA2Ipb7PWCA8mueRik3h%2Fk82QBOolPMKop4gh9zvr54z%2BxwJNH3%2B4zDHGYVEAjRedaH%2FtS%2BvWpMev42dHpH98tiSosdMBSotVq&X-Amz-Signature=21aaf9e01d5d08cd1849f7f484d097f112f27257ee01b0d9f8578e1bd2655c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
