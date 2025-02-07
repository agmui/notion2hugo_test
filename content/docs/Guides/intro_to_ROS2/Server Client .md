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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BHAEL6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCOJvMVeLtOj3uFT9oqOZplqcSrzMa5TzhX2ySCXhPErQIgaWSCKxFsGHgIUlUJAkHxuXQSxKNXEZqn94VOQN%2B%2FWzEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEJtOZZZwv7iD5XE1CrcA3h10Cp4t4Q%2FsVbQnL%2BL7%2ByQJirpg0FR7aY5fI2wslLLv93snxpekNVOF4wXHmW2guvQgkG%2FYgbzEVRSp8EfVsWY9y8O1lfbtRld43cQGpFD1D3bYVhM79x0PXEH4YzPb4%2BgQbhnykjy98umLWQIQGUCRdpEG7ob7XOb5%2BYs6u4TujNjJCII5rihtipgQNLBgRMPTt5Z0vNvkMOQjT%2FbnCiar%2FWqhQzCWl1Vi%2BJlY%2Fb1F3QlyTNYoRj7CFaM1XS35%2F6rO3WAHjvVNsoW6jCRVkFEmGcFSpO90Il4BILd3KzAFoEZrbCTU1otWLVo15uDvsG9j6TSnn5y7AaBrUhuRNc%2BeIL4UPkaS76JM8HOX%2FG%2F5A4VKsqE4HBERwXaZKxtzLWbzPlyyWzCQGFQ3Qvm37%2Bl2oqbrx%2BwyPM%2BYA6kB3OLPkdrAkbpdEmqkbXgLHPYyVfQpajdyGXT1XrvfWvsHhTl5I9tEZ%2BF9HNtLcrr3D%2BtNyKtw0BOm25OIpdXSzWkKgKEgMItf3T0P17hn7n1nxESY059iZM19hSMuMqvaWUKtl2cC9GHy%2Bec92NWYCTBOFr52hg7%2F47WElS29BNrM3RIBiYkDxz2Kcarh768lO18kieIqJmnZS82Et%2F9MNH7lr0GOqUBomIwEWrqeFJSVhhKjpR0dzxDstyF3PJPml9lK0P%2Bl2eD%2F125voekm9onWgD1EnCKn6oCM8MGvsG4rfSeXDMwVHXei%2F5DNZWASGthFXiuD6GauFrOlQXTJ62NCQ3vwVDoYU3frTD%2FI0uoil4KuPHd69HAIuFLg3HBw157HE%2F%2FbGrk3rJs7fQ%2Bk9CK5hiO1DNEi7oJYfqtQJ448qKj%2FjL6OxHVoNP%2B&X-Amz-Signature=6080eb1e46e38b3af74919558b898b942b8a0f6e2100345b9c0272f015acc9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BHAEL6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCOJvMVeLtOj3uFT9oqOZplqcSrzMa5TzhX2ySCXhPErQIgaWSCKxFsGHgIUlUJAkHxuXQSxKNXEZqn94VOQN%2B%2FWzEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEJtOZZZwv7iD5XE1CrcA3h10Cp4t4Q%2FsVbQnL%2BL7%2ByQJirpg0FR7aY5fI2wslLLv93snxpekNVOF4wXHmW2guvQgkG%2FYgbzEVRSp8EfVsWY9y8O1lfbtRld43cQGpFD1D3bYVhM79x0PXEH4YzPb4%2BgQbhnykjy98umLWQIQGUCRdpEG7ob7XOb5%2BYs6u4TujNjJCII5rihtipgQNLBgRMPTt5Z0vNvkMOQjT%2FbnCiar%2FWqhQzCWl1Vi%2BJlY%2Fb1F3QlyTNYoRj7CFaM1XS35%2F6rO3WAHjvVNsoW6jCRVkFEmGcFSpO90Il4BILd3KzAFoEZrbCTU1otWLVo15uDvsG9j6TSnn5y7AaBrUhuRNc%2BeIL4UPkaS76JM8HOX%2FG%2F5A4VKsqE4HBERwXaZKxtzLWbzPlyyWzCQGFQ3Qvm37%2Bl2oqbrx%2BwyPM%2BYA6kB3OLPkdrAkbpdEmqkbXgLHPYyVfQpajdyGXT1XrvfWvsHhTl5I9tEZ%2BF9HNtLcrr3D%2BtNyKtw0BOm25OIpdXSzWkKgKEgMItf3T0P17hn7n1nxESY059iZM19hSMuMqvaWUKtl2cC9GHy%2Bec92NWYCTBOFr52hg7%2F47WElS29BNrM3RIBiYkDxz2Kcarh768lO18kieIqJmnZS82Et%2F9MNH7lr0GOqUBomIwEWrqeFJSVhhKjpR0dzxDstyF3PJPml9lK0P%2Bl2eD%2F125voekm9onWgD1EnCKn6oCM8MGvsG4rfSeXDMwVHXei%2F5DNZWASGthFXiuD6GauFrOlQXTJ62NCQ3vwVDoYU3frTD%2FI0uoil4KuPHd69HAIuFLg3HBw157HE%2F%2FbGrk3rJs7fQ%2Bk9CK5hiO1DNEi7oJYfqtQJ448qKj%2FjL6OxHVoNP%2B&X-Amz-Signature=d8f45d8938e8e96ff7c597a3209514b4f166413b255178ff97f0fe5ad98033ff&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BHAEL6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCOJvMVeLtOj3uFT9oqOZplqcSrzMa5TzhX2ySCXhPErQIgaWSCKxFsGHgIUlUJAkHxuXQSxKNXEZqn94VOQN%2B%2FWzEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEJtOZZZwv7iD5XE1CrcA3h10Cp4t4Q%2FsVbQnL%2BL7%2ByQJirpg0FR7aY5fI2wslLLv93snxpekNVOF4wXHmW2guvQgkG%2FYgbzEVRSp8EfVsWY9y8O1lfbtRld43cQGpFD1D3bYVhM79x0PXEH4YzPb4%2BgQbhnykjy98umLWQIQGUCRdpEG7ob7XOb5%2BYs6u4TujNjJCII5rihtipgQNLBgRMPTt5Z0vNvkMOQjT%2FbnCiar%2FWqhQzCWl1Vi%2BJlY%2Fb1F3QlyTNYoRj7CFaM1XS35%2F6rO3WAHjvVNsoW6jCRVkFEmGcFSpO90Il4BILd3KzAFoEZrbCTU1otWLVo15uDvsG9j6TSnn5y7AaBrUhuRNc%2BeIL4UPkaS76JM8HOX%2FG%2F5A4VKsqE4HBERwXaZKxtzLWbzPlyyWzCQGFQ3Qvm37%2Bl2oqbrx%2BwyPM%2BYA6kB3OLPkdrAkbpdEmqkbXgLHPYyVfQpajdyGXT1XrvfWvsHhTl5I9tEZ%2BF9HNtLcrr3D%2BtNyKtw0BOm25OIpdXSzWkKgKEgMItf3T0P17hn7n1nxESY059iZM19hSMuMqvaWUKtl2cC9GHy%2Bec92NWYCTBOFr52hg7%2F47WElS29BNrM3RIBiYkDxz2Kcarh768lO18kieIqJmnZS82Et%2F9MNH7lr0GOqUBomIwEWrqeFJSVhhKjpR0dzxDstyF3PJPml9lK0P%2Bl2eD%2F125voekm9onWgD1EnCKn6oCM8MGvsG4rfSeXDMwVHXei%2F5DNZWASGthFXiuD6GauFrOlQXTJ62NCQ3vwVDoYU3frTD%2FI0uoil4KuPHd69HAIuFLg3HBw157HE%2F%2FbGrk3rJs7fQ%2Bk9CK5hiO1DNEi7oJYfqtQJ448qKj%2FjL6OxHVoNP%2B&X-Amz-Signature=436643b9b7c03f22d23307047fa81e653e993b4182319dfa566f5aa9c0ca6af8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BHAEL6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCOJvMVeLtOj3uFT9oqOZplqcSrzMa5TzhX2ySCXhPErQIgaWSCKxFsGHgIUlUJAkHxuXQSxKNXEZqn94VOQN%2B%2FWzEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEJtOZZZwv7iD5XE1CrcA3h10Cp4t4Q%2FsVbQnL%2BL7%2ByQJirpg0FR7aY5fI2wslLLv93snxpekNVOF4wXHmW2guvQgkG%2FYgbzEVRSp8EfVsWY9y8O1lfbtRld43cQGpFD1D3bYVhM79x0PXEH4YzPb4%2BgQbhnykjy98umLWQIQGUCRdpEG7ob7XOb5%2BYs6u4TujNjJCII5rihtipgQNLBgRMPTt5Z0vNvkMOQjT%2FbnCiar%2FWqhQzCWl1Vi%2BJlY%2Fb1F3QlyTNYoRj7CFaM1XS35%2F6rO3WAHjvVNsoW6jCRVkFEmGcFSpO90Il4BILd3KzAFoEZrbCTU1otWLVo15uDvsG9j6TSnn5y7AaBrUhuRNc%2BeIL4UPkaS76JM8HOX%2FG%2F5A4VKsqE4HBERwXaZKxtzLWbzPlyyWzCQGFQ3Qvm37%2Bl2oqbrx%2BwyPM%2BYA6kB3OLPkdrAkbpdEmqkbXgLHPYyVfQpajdyGXT1XrvfWvsHhTl5I9tEZ%2BF9HNtLcrr3D%2BtNyKtw0BOm25OIpdXSzWkKgKEgMItf3T0P17hn7n1nxESY059iZM19hSMuMqvaWUKtl2cC9GHy%2Bec92NWYCTBOFr52hg7%2F47WElS29BNrM3RIBiYkDxz2Kcarh768lO18kieIqJmnZS82Et%2F9MNH7lr0GOqUBomIwEWrqeFJSVhhKjpR0dzxDstyF3PJPml9lK0P%2Bl2eD%2F125voekm9onWgD1EnCKn6oCM8MGvsG4rfSeXDMwVHXei%2F5DNZWASGthFXiuD6GauFrOlQXTJ62NCQ3vwVDoYU3frTD%2FI0uoil4KuPHd69HAIuFLg3HBw157HE%2F%2FbGrk3rJs7fQ%2Bk9CK5hiO1DNEi7oJYfqtQJ448qKj%2FjL6OxHVoNP%2B&X-Amz-Signature=614d19b72eca8a1d4f1af47dffa94f1c8440437bf3a88a3c6eccc356a30dd09d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BHAEL6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCOJvMVeLtOj3uFT9oqOZplqcSrzMa5TzhX2ySCXhPErQIgaWSCKxFsGHgIUlUJAkHxuXQSxKNXEZqn94VOQN%2B%2FWzEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEJtOZZZwv7iD5XE1CrcA3h10Cp4t4Q%2FsVbQnL%2BL7%2ByQJirpg0FR7aY5fI2wslLLv93snxpekNVOF4wXHmW2guvQgkG%2FYgbzEVRSp8EfVsWY9y8O1lfbtRld43cQGpFD1D3bYVhM79x0PXEH4YzPb4%2BgQbhnykjy98umLWQIQGUCRdpEG7ob7XOb5%2BYs6u4TujNjJCII5rihtipgQNLBgRMPTt5Z0vNvkMOQjT%2FbnCiar%2FWqhQzCWl1Vi%2BJlY%2Fb1F3QlyTNYoRj7CFaM1XS35%2F6rO3WAHjvVNsoW6jCRVkFEmGcFSpO90Il4BILd3KzAFoEZrbCTU1otWLVo15uDvsG9j6TSnn5y7AaBrUhuRNc%2BeIL4UPkaS76JM8HOX%2FG%2F5A4VKsqE4HBERwXaZKxtzLWbzPlyyWzCQGFQ3Qvm37%2Bl2oqbrx%2BwyPM%2BYA6kB3OLPkdrAkbpdEmqkbXgLHPYyVfQpajdyGXT1XrvfWvsHhTl5I9tEZ%2BF9HNtLcrr3D%2BtNyKtw0BOm25OIpdXSzWkKgKEgMItf3T0P17hn7n1nxESY059iZM19hSMuMqvaWUKtl2cC9GHy%2Bec92NWYCTBOFr52hg7%2F47WElS29BNrM3RIBiYkDxz2Kcarh768lO18kieIqJmnZS82Et%2F9MNH7lr0GOqUBomIwEWrqeFJSVhhKjpR0dzxDstyF3PJPml9lK0P%2Bl2eD%2F125voekm9onWgD1EnCKn6oCM8MGvsG4rfSeXDMwVHXei%2F5DNZWASGthFXiuD6GauFrOlQXTJ62NCQ3vwVDoYU3frTD%2FI0uoil4KuPHd69HAIuFLg3HBw157HE%2F%2FbGrk3rJs7fQ%2Bk9CK5hiO1DNEi7oJYfqtQJ448qKj%2FjL6OxHVoNP%2B&X-Amz-Signature=a42f90d66b6082788ac9e6115887f004a50188ab207e52f969c728319d967503&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
