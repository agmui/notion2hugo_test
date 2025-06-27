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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RLV34E%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFm%2FbveDqxZj0WywX60ovC61v0%2FL5W5ZOXWSvxNP%2FUpkAiEAo%2BAytDai5Q%2Bv98uF2NsZI1bHD1%2BK7CdmrItH4%2BLOvOwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM9zuTLE1igXjcDBRCrcA%2F7Pr3CDQ22TVQ%2BznXhTA1N9Qf1nqM55gYqbCkA8v%2Fc3N06jRlfCvi7gF380ouAHW9xwDCwhiApLTLE%2BP7%2FsoQTCVPjYcnwCXQajKELP1JyB%2BAjpjFr1qTVjCJ0UF2NrX9wyGvcjZ9%2FfUAGzi9QMkt9KYbBG5k2v0T%2BSOdPnUu9zXO72xK9KV2CKf%2BG6wOeuW39ZzGDXf%2BVvQ7l6ylBaexZe15806zd2YMpJ3VbImnk%2BBMv6dNkv%2FzJ%2BIoo%2BDUXFSXebuzXH3q954px07BvB89FEDHsv6cgi0n6fXtb0VjQQUqLfQ5%2FVTOBrL7nQQBpFG2ozZWAcHN9Pn8swhcVXxryoyMWTCBTbLLrGMSMWvBz2mhz7yyu77qOoHDBwVkLPnwpwcPFWKtF2lTQDI6X3a2Pvi6ReiwkHyL7J8JsEUbduFTOTUiVMNGxMEcRRSMu0KGXlslV3ojBbWYlj%2Fsxl%2B8lPQztT90chWCQTT%2FUOfpiwnnnrUrsskflJBL4KIKrty7mJdw2YfVvALCn7A8IjckE9uRZj1Vy7GhVlQZXbnwV9vJxB8Zfw6nrGyT2HPCzzCrEckMOuQBypJcQf%2Btxgy2Zzm4qxDotcag8W06PfTE6mqo27PP4L6siTGq3OMODM%2BsIGOqUBqf6MQjzhO5N20M%2F9ZKD7EtSreeBtWShloxGGSrCXKxZeNLjf%2BSjE0WC%2B%2BOctp%2B6Ooteh3qwQUgvKwNIUBxX0mi%2Fpv%2FRRcSEoXFiwpD32YUOuJRJD1T1Mg2SvE5FoHeJPJ0iBjshfmrkEhr3E5FJdt27%2BKUm3UC%2FZKy%2BdEcOaBkshC%2BFmOGL0QDibLCTY0AagELJ50vQHEZRhwPpwcOSbR6hAhRiO&X-Amz-Signature=23eba5a72f0e2a89b6fddb0095f9bc85fcad247ca0e011c36ab8eeb6ef9c1c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RLV34E%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFm%2FbveDqxZj0WywX60ovC61v0%2FL5W5ZOXWSvxNP%2FUpkAiEAo%2BAytDai5Q%2Bv98uF2NsZI1bHD1%2BK7CdmrItH4%2BLOvOwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM9zuTLE1igXjcDBRCrcA%2F7Pr3CDQ22TVQ%2BznXhTA1N9Qf1nqM55gYqbCkA8v%2Fc3N06jRlfCvi7gF380ouAHW9xwDCwhiApLTLE%2BP7%2FsoQTCVPjYcnwCXQajKELP1JyB%2BAjpjFr1qTVjCJ0UF2NrX9wyGvcjZ9%2FfUAGzi9QMkt9KYbBG5k2v0T%2BSOdPnUu9zXO72xK9KV2CKf%2BG6wOeuW39ZzGDXf%2BVvQ7l6ylBaexZe15806zd2YMpJ3VbImnk%2BBMv6dNkv%2FzJ%2BIoo%2BDUXFSXebuzXH3q954px07BvB89FEDHsv6cgi0n6fXtb0VjQQUqLfQ5%2FVTOBrL7nQQBpFG2ozZWAcHN9Pn8swhcVXxryoyMWTCBTbLLrGMSMWvBz2mhz7yyu77qOoHDBwVkLPnwpwcPFWKtF2lTQDI6X3a2Pvi6ReiwkHyL7J8JsEUbduFTOTUiVMNGxMEcRRSMu0KGXlslV3ojBbWYlj%2Fsxl%2B8lPQztT90chWCQTT%2FUOfpiwnnnrUrsskflJBL4KIKrty7mJdw2YfVvALCn7A8IjckE9uRZj1Vy7GhVlQZXbnwV9vJxB8Zfw6nrGyT2HPCzzCrEckMOuQBypJcQf%2Btxgy2Zzm4qxDotcag8W06PfTE6mqo27PP4L6siTGq3OMODM%2BsIGOqUBqf6MQjzhO5N20M%2F9ZKD7EtSreeBtWShloxGGSrCXKxZeNLjf%2BSjE0WC%2B%2BOctp%2B6Ooteh3qwQUgvKwNIUBxX0mi%2Fpv%2FRRcSEoXFiwpD32YUOuJRJD1T1Mg2SvE5FoHeJPJ0iBjshfmrkEhr3E5FJdt27%2BKUm3UC%2FZKy%2BdEcOaBkshC%2BFmOGL0QDibLCTY0AagELJ50vQHEZRhwPpwcOSbR6hAhRiO&X-Amz-Signature=214a27a3780d1b00162b1585559bc2fcfbf5556f932ee95c380a0eda927fca2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RLV34E%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFm%2FbveDqxZj0WywX60ovC61v0%2FL5W5ZOXWSvxNP%2FUpkAiEAo%2BAytDai5Q%2Bv98uF2NsZI1bHD1%2BK7CdmrItH4%2BLOvOwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM9zuTLE1igXjcDBRCrcA%2F7Pr3CDQ22TVQ%2BznXhTA1N9Qf1nqM55gYqbCkA8v%2Fc3N06jRlfCvi7gF380ouAHW9xwDCwhiApLTLE%2BP7%2FsoQTCVPjYcnwCXQajKELP1JyB%2BAjpjFr1qTVjCJ0UF2NrX9wyGvcjZ9%2FfUAGzi9QMkt9KYbBG5k2v0T%2BSOdPnUu9zXO72xK9KV2CKf%2BG6wOeuW39ZzGDXf%2BVvQ7l6ylBaexZe15806zd2YMpJ3VbImnk%2BBMv6dNkv%2FzJ%2BIoo%2BDUXFSXebuzXH3q954px07BvB89FEDHsv6cgi0n6fXtb0VjQQUqLfQ5%2FVTOBrL7nQQBpFG2ozZWAcHN9Pn8swhcVXxryoyMWTCBTbLLrGMSMWvBz2mhz7yyu77qOoHDBwVkLPnwpwcPFWKtF2lTQDI6X3a2Pvi6ReiwkHyL7J8JsEUbduFTOTUiVMNGxMEcRRSMu0KGXlslV3ojBbWYlj%2Fsxl%2B8lPQztT90chWCQTT%2FUOfpiwnnnrUrsskflJBL4KIKrty7mJdw2YfVvALCn7A8IjckE9uRZj1Vy7GhVlQZXbnwV9vJxB8Zfw6nrGyT2HPCzzCrEckMOuQBypJcQf%2Btxgy2Zzm4qxDotcag8W06PfTE6mqo27PP4L6siTGq3OMODM%2BsIGOqUBqf6MQjzhO5N20M%2F9ZKD7EtSreeBtWShloxGGSrCXKxZeNLjf%2BSjE0WC%2B%2BOctp%2B6Ooteh3qwQUgvKwNIUBxX0mi%2Fpv%2FRRcSEoXFiwpD32YUOuJRJD1T1Mg2SvE5FoHeJPJ0iBjshfmrkEhr3E5FJdt27%2BKUm3UC%2FZKy%2BdEcOaBkshC%2BFmOGL0QDibLCTY0AagELJ50vQHEZRhwPpwcOSbR6hAhRiO&X-Amz-Signature=0b943b51d6c51c127af76934c3d38a7ee48e017be03604ce7d777aed55068b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RLV34E%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFm%2FbveDqxZj0WywX60ovC61v0%2FL5W5ZOXWSvxNP%2FUpkAiEAo%2BAytDai5Q%2Bv98uF2NsZI1bHD1%2BK7CdmrItH4%2BLOvOwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM9zuTLE1igXjcDBRCrcA%2F7Pr3CDQ22TVQ%2BznXhTA1N9Qf1nqM55gYqbCkA8v%2Fc3N06jRlfCvi7gF380ouAHW9xwDCwhiApLTLE%2BP7%2FsoQTCVPjYcnwCXQajKELP1JyB%2BAjpjFr1qTVjCJ0UF2NrX9wyGvcjZ9%2FfUAGzi9QMkt9KYbBG5k2v0T%2BSOdPnUu9zXO72xK9KV2CKf%2BG6wOeuW39ZzGDXf%2BVvQ7l6ylBaexZe15806zd2YMpJ3VbImnk%2BBMv6dNkv%2FzJ%2BIoo%2BDUXFSXebuzXH3q954px07BvB89FEDHsv6cgi0n6fXtb0VjQQUqLfQ5%2FVTOBrL7nQQBpFG2ozZWAcHN9Pn8swhcVXxryoyMWTCBTbLLrGMSMWvBz2mhz7yyu77qOoHDBwVkLPnwpwcPFWKtF2lTQDI6X3a2Pvi6ReiwkHyL7J8JsEUbduFTOTUiVMNGxMEcRRSMu0KGXlslV3ojBbWYlj%2Fsxl%2B8lPQztT90chWCQTT%2FUOfpiwnnnrUrsskflJBL4KIKrty7mJdw2YfVvALCn7A8IjckE9uRZj1Vy7GhVlQZXbnwV9vJxB8Zfw6nrGyT2HPCzzCrEckMOuQBypJcQf%2Btxgy2Zzm4qxDotcag8W06PfTE6mqo27PP4L6siTGq3OMODM%2BsIGOqUBqf6MQjzhO5N20M%2F9ZKD7EtSreeBtWShloxGGSrCXKxZeNLjf%2BSjE0WC%2B%2BOctp%2B6Ooteh3qwQUgvKwNIUBxX0mi%2Fpv%2FRRcSEoXFiwpD32YUOuJRJD1T1Mg2SvE5FoHeJPJ0iBjshfmrkEhr3E5FJdt27%2BKUm3UC%2FZKy%2BdEcOaBkshC%2BFmOGL0QDibLCTY0AagELJ50vQHEZRhwPpwcOSbR6hAhRiO&X-Amz-Signature=ad147134504ee03508942930cada9f9a9c3fe60f995652dc127c1378d067695d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RLV34E%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFm%2FbveDqxZj0WywX60ovC61v0%2FL5W5ZOXWSvxNP%2FUpkAiEAo%2BAytDai5Q%2Bv98uF2NsZI1bHD1%2BK7CdmrItH4%2BLOvOwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM9zuTLE1igXjcDBRCrcA%2F7Pr3CDQ22TVQ%2BznXhTA1N9Qf1nqM55gYqbCkA8v%2Fc3N06jRlfCvi7gF380ouAHW9xwDCwhiApLTLE%2BP7%2FsoQTCVPjYcnwCXQajKELP1JyB%2BAjpjFr1qTVjCJ0UF2NrX9wyGvcjZ9%2FfUAGzi9QMkt9KYbBG5k2v0T%2BSOdPnUu9zXO72xK9KV2CKf%2BG6wOeuW39ZzGDXf%2BVvQ7l6ylBaexZe15806zd2YMpJ3VbImnk%2BBMv6dNkv%2FzJ%2BIoo%2BDUXFSXebuzXH3q954px07BvB89FEDHsv6cgi0n6fXtb0VjQQUqLfQ5%2FVTOBrL7nQQBpFG2ozZWAcHN9Pn8swhcVXxryoyMWTCBTbLLrGMSMWvBz2mhz7yyu77qOoHDBwVkLPnwpwcPFWKtF2lTQDI6X3a2Pvi6ReiwkHyL7J8JsEUbduFTOTUiVMNGxMEcRRSMu0KGXlslV3ojBbWYlj%2Fsxl%2B8lPQztT90chWCQTT%2FUOfpiwnnnrUrsskflJBL4KIKrty7mJdw2YfVvALCn7A8IjckE9uRZj1Vy7GhVlQZXbnwV9vJxB8Zfw6nrGyT2HPCzzCrEckMOuQBypJcQf%2Btxgy2Zzm4qxDotcag8W06PfTE6mqo27PP4L6siTGq3OMODM%2BsIGOqUBqf6MQjzhO5N20M%2F9ZKD7EtSreeBtWShloxGGSrCXKxZeNLjf%2BSjE0WC%2B%2BOctp%2B6Ooteh3qwQUgvKwNIUBxX0mi%2Fpv%2FRRcSEoXFiwpD32YUOuJRJD1T1Mg2SvE5FoHeJPJ0iBjshfmrkEhr3E5FJdt27%2BKUm3UC%2FZKy%2BdEcOaBkshC%2BFmOGL0QDibLCTY0AagELJ50vQHEZRhwPpwcOSbR6hAhRiO&X-Amz-Signature=6ab6ffd78c972059a8d38af3765512818c255574a0f33c9a6df49728f8cb1ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
