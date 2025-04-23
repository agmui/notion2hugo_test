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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQ4AGQN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCpuLf29OcyRwnxIN9M62aqt2SpXKyP3NU4cUssHz3u%2FgIgFWMp25i5EsIiJ8yFTYJZfTGKrJ8LjEVdqq66EXp2joEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUxwQBoc1YlSEHjsSrcA1dsklGw12uo1DKkujCKAI1X7ylA4vza8KnXMpUYUo9msj9X84a%2FMQ%2BoCFXdYWeneyni70xJwJRImbeGlO5dz3%2F%2FwqRhOIOPPWPF41m8ED8epeR1EyBTz3Y%2BKmf%2FRenYDcQdzuqYn%2B9GZG6SfscsRehZ2etpUcDfL7MwLTBHhY58TLHtDiQ0bVN6cJ0goaY06qqqNF6Ckd2cg5f7b%2FwIu9Irgb7tehRJgm%2BMtPenOSSlo7b42mVZ76wCDGB%2F8qIYw5hTY93mb6ZyHTmJ7obLXFFnmI8AAGUwCKSBnXJIsJ888KoDEXMQ3F935JN%2F7PrSi81mMK254OSNiMaC59jRx8S81vKmw3NaAGnQuefXfnmRXBmsCU466ezsFgpnMmUNO9%2BDHniKDMqqHOCWNzfmFQRIqhqe2Zj%2FVGJ3N1280AGZN31MNgWZj2yL6JPHno1QfFukO4tQQgE7QIJSMaBHUDiQEPHC0bikUT1qmQyZnYnVBl7waJhm1OcHNaIpuGKhMYvDQwSjZuzyRvYP64qXwK64hx%2B8%2F85E4aFcmbxWp736xOiyWEZEOp2mfOju1FENIOqdHZ40MZGbMfoaWUGCjLbQ0aYEchEZxlaS4XTrVtvayAXSCG9OsN76X32hMLrIpcAGOqUBRON5hHA5m%2B2I4wsSxtkMasAfsWTLInsbYpaWcv10zRRo02rMx8B%2BPMzymHqB2pqXBjjuw%2F1pCRqKbxHyL%2F5uAPsGGWqGzLaRA0bhl8jsDCJUEl%2FSlH6PmAfU1eaJtW5nS4oqvyx5c0DQkCVQuPDWFvhCndRhdUOyTqeEA%2FGnXxCYXAdmYipL8n6vHRJWzlHgRevQ32fRyFQ3JQuiDWzZcjnVYOC0&X-Amz-Signature=eebdf8525bde890a8a5e7aaee4f90fb92be829cef83c60271355c2df6eb13414&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQ4AGQN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCpuLf29OcyRwnxIN9M62aqt2SpXKyP3NU4cUssHz3u%2FgIgFWMp25i5EsIiJ8yFTYJZfTGKrJ8LjEVdqq66EXp2joEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUxwQBoc1YlSEHjsSrcA1dsklGw12uo1DKkujCKAI1X7ylA4vza8KnXMpUYUo9msj9X84a%2FMQ%2BoCFXdYWeneyni70xJwJRImbeGlO5dz3%2F%2FwqRhOIOPPWPF41m8ED8epeR1EyBTz3Y%2BKmf%2FRenYDcQdzuqYn%2B9GZG6SfscsRehZ2etpUcDfL7MwLTBHhY58TLHtDiQ0bVN6cJ0goaY06qqqNF6Ckd2cg5f7b%2FwIu9Irgb7tehRJgm%2BMtPenOSSlo7b42mVZ76wCDGB%2F8qIYw5hTY93mb6ZyHTmJ7obLXFFnmI8AAGUwCKSBnXJIsJ888KoDEXMQ3F935JN%2F7PrSi81mMK254OSNiMaC59jRx8S81vKmw3NaAGnQuefXfnmRXBmsCU466ezsFgpnMmUNO9%2BDHniKDMqqHOCWNzfmFQRIqhqe2Zj%2FVGJ3N1280AGZN31MNgWZj2yL6JPHno1QfFukO4tQQgE7QIJSMaBHUDiQEPHC0bikUT1qmQyZnYnVBl7waJhm1OcHNaIpuGKhMYvDQwSjZuzyRvYP64qXwK64hx%2B8%2F85E4aFcmbxWp736xOiyWEZEOp2mfOju1FENIOqdHZ40MZGbMfoaWUGCjLbQ0aYEchEZxlaS4XTrVtvayAXSCG9OsN76X32hMLrIpcAGOqUBRON5hHA5m%2B2I4wsSxtkMasAfsWTLInsbYpaWcv10zRRo02rMx8B%2BPMzymHqB2pqXBjjuw%2F1pCRqKbxHyL%2F5uAPsGGWqGzLaRA0bhl8jsDCJUEl%2FSlH6PmAfU1eaJtW5nS4oqvyx5c0DQkCVQuPDWFvhCndRhdUOyTqeEA%2FGnXxCYXAdmYipL8n6vHRJWzlHgRevQ32fRyFQ3JQuiDWzZcjnVYOC0&X-Amz-Signature=52e9ab911a252fb5de422030fe085a0cce7551526db61ad30ac29a3aad78de11&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQ4AGQN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCpuLf29OcyRwnxIN9M62aqt2SpXKyP3NU4cUssHz3u%2FgIgFWMp25i5EsIiJ8yFTYJZfTGKrJ8LjEVdqq66EXp2joEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUxwQBoc1YlSEHjsSrcA1dsklGw12uo1DKkujCKAI1X7ylA4vza8KnXMpUYUo9msj9X84a%2FMQ%2BoCFXdYWeneyni70xJwJRImbeGlO5dz3%2F%2FwqRhOIOPPWPF41m8ED8epeR1EyBTz3Y%2BKmf%2FRenYDcQdzuqYn%2B9GZG6SfscsRehZ2etpUcDfL7MwLTBHhY58TLHtDiQ0bVN6cJ0goaY06qqqNF6Ckd2cg5f7b%2FwIu9Irgb7tehRJgm%2BMtPenOSSlo7b42mVZ76wCDGB%2F8qIYw5hTY93mb6ZyHTmJ7obLXFFnmI8AAGUwCKSBnXJIsJ888KoDEXMQ3F935JN%2F7PrSi81mMK254OSNiMaC59jRx8S81vKmw3NaAGnQuefXfnmRXBmsCU466ezsFgpnMmUNO9%2BDHniKDMqqHOCWNzfmFQRIqhqe2Zj%2FVGJ3N1280AGZN31MNgWZj2yL6JPHno1QfFukO4tQQgE7QIJSMaBHUDiQEPHC0bikUT1qmQyZnYnVBl7waJhm1OcHNaIpuGKhMYvDQwSjZuzyRvYP64qXwK64hx%2B8%2F85E4aFcmbxWp736xOiyWEZEOp2mfOju1FENIOqdHZ40MZGbMfoaWUGCjLbQ0aYEchEZxlaS4XTrVtvayAXSCG9OsN76X32hMLrIpcAGOqUBRON5hHA5m%2B2I4wsSxtkMasAfsWTLInsbYpaWcv10zRRo02rMx8B%2BPMzymHqB2pqXBjjuw%2F1pCRqKbxHyL%2F5uAPsGGWqGzLaRA0bhl8jsDCJUEl%2FSlH6PmAfU1eaJtW5nS4oqvyx5c0DQkCVQuPDWFvhCndRhdUOyTqeEA%2FGnXxCYXAdmYipL8n6vHRJWzlHgRevQ32fRyFQ3JQuiDWzZcjnVYOC0&X-Amz-Signature=f67706ee66afdded4c1f6b51941b34f16ecf234dcb8c6dfdd83aeb1c71906522&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQ4AGQN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCpuLf29OcyRwnxIN9M62aqt2SpXKyP3NU4cUssHz3u%2FgIgFWMp25i5EsIiJ8yFTYJZfTGKrJ8LjEVdqq66EXp2joEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUxwQBoc1YlSEHjsSrcA1dsklGw12uo1DKkujCKAI1X7ylA4vza8KnXMpUYUo9msj9X84a%2FMQ%2BoCFXdYWeneyni70xJwJRImbeGlO5dz3%2F%2FwqRhOIOPPWPF41m8ED8epeR1EyBTz3Y%2BKmf%2FRenYDcQdzuqYn%2B9GZG6SfscsRehZ2etpUcDfL7MwLTBHhY58TLHtDiQ0bVN6cJ0goaY06qqqNF6Ckd2cg5f7b%2FwIu9Irgb7tehRJgm%2BMtPenOSSlo7b42mVZ76wCDGB%2F8qIYw5hTY93mb6ZyHTmJ7obLXFFnmI8AAGUwCKSBnXJIsJ888KoDEXMQ3F935JN%2F7PrSi81mMK254OSNiMaC59jRx8S81vKmw3NaAGnQuefXfnmRXBmsCU466ezsFgpnMmUNO9%2BDHniKDMqqHOCWNzfmFQRIqhqe2Zj%2FVGJ3N1280AGZN31MNgWZj2yL6JPHno1QfFukO4tQQgE7QIJSMaBHUDiQEPHC0bikUT1qmQyZnYnVBl7waJhm1OcHNaIpuGKhMYvDQwSjZuzyRvYP64qXwK64hx%2B8%2F85E4aFcmbxWp736xOiyWEZEOp2mfOju1FENIOqdHZ40MZGbMfoaWUGCjLbQ0aYEchEZxlaS4XTrVtvayAXSCG9OsN76X32hMLrIpcAGOqUBRON5hHA5m%2B2I4wsSxtkMasAfsWTLInsbYpaWcv10zRRo02rMx8B%2BPMzymHqB2pqXBjjuw%2F1pCRqKbxHyL%2F5uAPsGGWqGzLaRA0bhl8jsDCJUEl%2FSlH6PmAfU1eaJtW5nS4oqvyx5c0DQkCVQuPDWFvhCndRhdUOyTqeEA%2FGnXxCYXAdmYipL8n6vHRJWzlHgRevQ32fRyFQ3JQuiDWzZcjnVYOC0&X-Amz-Signature=e7afad17e3566e5470f0cd954927c2254ec8563fecbbbc43dbd57292d451b1f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQ4AGQN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCpuLf29OcyRwnxIN9M62aqt2SpXKyP3NU4cUssHz3u%2FgIgFWMp25i5EsIiJ8yFTYJZfTGKrJ8LjEVdqq66EXp2joEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUxwQBoc1YlSEHjsSrcA1dsklGw12uo1DKkujCKAI1X7ylA4vza8KnXMpUYUo9msj9X84a%2FMQ%2BoCFXdYWeneyni70xJwJRImbeGlO5dz3%2F%2FwqRhOIOPPWPF41m8ED8epeR1EyBTz3Y%2BKmf%2FRenYDcQdzuqYn%2B9GZG6SfscsRehZ2etpUcDfL7MwLTBHhY58TLHtDiQ0bVN6cJ0goaY06qqqNF6Ckd2cg5f7b%2FwIu9Irgb7tehRJgm%2BMtPenOSSlo7b42mVZ76wCDGB%2F8qIYw5hTY93mb6ZyHTmJ7obLXFFnmI8AAGUwCKSBnXJIsJ888KoDEXMQ3F935JN%2F7PrSi81mMK254OSNiMaC59jRx8S81vKmw3NaAGnQuefXfnmRXBmsCU466ezsFgpnMmUNO9%2BDHniKDMqqHOCWNzfmFQRIqhqe2Zj%2FVGJ3N1280AGZN31MNgWZj2yL6JPHno1QfFukO4tQQgE7QIJSMaBHUDiQEPHC0bikUT1qmQyZnYnVBl7waJhm1OcHNaIpuGKhMYvDQwSjZuzyRvYP64qXwK64hx%2B8%2F85E4aFcmbxWp736xOiyWEZEOp2mfOju1FENIOqdHZ40MZGbMfoaWUGCjLbQ0aYEchEZxlaS4XTrVtvayAXSCG9OsN76X32hMLrIpcAGOqUBRON5hHA5m%2B2I4wsSxtkMasAfsWTLInsbYpaWcv10zRRo02rMx8B%2BPMzymHqB2pqXBjjuw%2F1pCRqKbxHyL%2F5uAPsGGWqGzLaRA0bhl8jsDCJUEl%2FSlH6PmAfU1eaJtW5nS4oqvyx5c0DQkCVQuPDWFvhCndRhdUOyTqeEA%2FGnXxCYXAdmYipL8n6vHRJWzlHgRevQ32fRyFQ3JQuiDWzZcjnVYOC0&X-Amz-Signature=c43207a941adb7e1a75b3cb3823c33d6655140d9f8f9f3f1bca68a4e39473c2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
