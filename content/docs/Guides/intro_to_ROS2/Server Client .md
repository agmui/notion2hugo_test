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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZMFOS5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAcQfyTMBx3%2FdtfTFmVVIVvZ3At4E6Hippp454pL%2BFFeAiAF4vE5yAm2HdWFJPhfoRRkfhM0xxrchOlDDh6qJVo5KSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtYko0Q4GJl0xiKnKtwDHRkhhFdFVZHbbJjkJ4OAoN%2BYtpr8pxHcBWS%2Fxa4xqvaFK5arBZtEkvbGASdtjPX4ogBeRUUC0cRVzVi5zAK59Gm8l7i5hNjP6iRDT0ZWPJ9HSk2Y21m4NNjaQun28ynFZuHXJksBwV8UHPe8ATL7RfhnIDyLnnE2QUVy0QhcPPWZKvqgbyAOp%2Fp6OMAXqkqPT5a0lxezsNdufgrS2tQdDRCk5jemyCyn2G%2Fan%2FHvG5rfVEbGSv5d3Sm%2BDtMYy2gb%2BZzzWJ5hKuPFvw6spKzaZUekwCNXqP1y7QYcsSK%2BhhwxM%2B%2F9on6TjI6Zc6Kx7PxtbFCC6nlc0VCt%2B7DUaNlJTfFLC%2FnPBpT37ATY%2FsKcY5AyBgA8%2FaiKFqR3%2BkXRbFdc1wdaLc4MLpzy2nCv0QL5RjtsqX1qwYGCr32Jv3RMX1DzdTuRnQbYE1KGxxlHfy5bjCtliZd7QwMZtG%2Fv0C%2FQg2HGPpPN15WE8lJ0IHw%2BtB%2BXNxw8I%2FEmcJy5RGjlCaAZbGP2LaqXfKUD3RyWqvd3urVkOs0y1LlevVuxH3dwwl99Wal%2BxtBpClwTVXcXi3Y70Z8g41rv4OGbfFmxwG2B2Tpb4STMYqv4TeeSxsoo158u1YIMlOSC34aLgmYw7MfQvQY6pgGUMKpBnpNr3eD0BCSlHPDoJ2qyoitMaMayW29OXl00sxYGRIG8k%2BtBm%2BOPxaU%2BbcaBY7WCwnyG99X0g35p3VlAmTxfpQghOSqHxGs%2FpohQRj5nKk9xkd4t4Cw08i2uEU5550BrO%2B2IYlLEacaxD0p%2FcuIlFGyqP84H5E7vzfTF%2BZaF4OnLLaJrltSYQp7JCTPhC0CL2GrjdSG2vgEuaoHjUQXgmb9M&X-Amz-Signature=b94eb8a4a914d19970abe9cc77dad9ac394c630c3d0294009060fb04a838f6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZMFOS5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAcQfyTMBx3%2FdtfTFmVVIVvZ3At4E6Hippp454pL%2BFFeAiAF4vE5yAm2HdWFJPhfoRRkfhM0xxrchOlDDh6qJVo5KSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtYko0Q4GJl0xiKnKtwDHRkhhFdFVZHbbJjkJ4OAoN%2BYtpr8pxHcBWS%2Fxa4xqvaFK5arBZtEkvbGASdtjPX4ogBeRUUC0cRVzVi5zAK59Gm8l7i5hNjP6iRDT0ZWPJ9HSk2Y21m4NNjaQun28ynFZuHXJksBwV8UHPe8ATL7RfhnIDyLnnE2QUVy0QhcPPWZKvqgbyAOp%2Fp6OMAXqkqPT5a0lxezsNdufgrS2tQdDRCk5jemyCyn2G%2Fan%2FHvG5rfVEbGSv5d3Sm%2BDtMYy2gb%2BZzzWJ5hKuPFvw6spKzaZUekwCNXqP1y7QYcsSK%2BhhwxM%2B%2F9on6TjI6Zc6Kx7PxtbFCC6nlc0VCt%2B7DUaNlJTfFLC%2FnPBpT37ATY%2FsKcY5AyBgA8%2FaiKFqR3%2BkXRbFdc1wdaLc4MLpzy2nCv0QL5RjtsqX1qwYGCr32Jv3RMX1DzdTuRnQbYE1KGxxlHfy5bjCtliZd7QwMZtG%2Fv0C%2FQg2HGPpPN15WE8lJ0IHw%2BtB%2BXNxw8I%2FEmcJy5RGjlCaAZbGP2LaqXfKUD3RyWqvd3urVkOs0y1LlevVuxH3dwwl99Wal%2BxtBpClwTVXcXi3Y70Z8g41rv4OGbfFmxwG2B2Tpb4STMYqv4TeeSxsoo158u1YIMlOSC34aLgmYw7MfQvQY6pgGUMKpBnpNr3eD0BCSlHPDoJ2qyoitMaMayW29OXl00sxYGRIG8k%2BtBm%2BOPxaU%2BbcaBY7WCwnyG99X0g35p3VlAmTxfpQghOSqHxGs%2FpohQRj5nKk9xkd4t4Cw08i2uEU5550BrO%2B2IYlLEacaxD0p%2FcuIlFGyqP84H5E7vzfTF%2BZaF4OnLLaJrltSYQp7JCTPhC0CL2GrjdSG2vgEuaoHjUQXgmb9M&X-Amz-Signature=dbd462a9012ad9d6ab6ab909c289e0b1a50e2cc416fa4c0697358d606d4aa0af&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZMFOS5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAcQfyTMBx3%2FdtfTFmVVIVvZ3At4E6Hippp454pL%2BFFeAiAF4vE5yAm2HdWFJPhfoRRkfhM0xxrchOlDDh6qJVo5KSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtYko0Q4GJl0xiKnKtwDHRkhhFdFVZHbbJjkJ4OAoN%2BYtpr8pxHcBWS%2Fxa4xqvaFK5arBZtEkvbGASdtjPX4ogBeRUUC0cRVzVi5zAK59Gm8l7i5hNjP6iRDT0ZWPJ9HSk2Y21m4NNjaQun28ynFZuHXJksBwV8UHPe8ATL7RfhnIDyLnnE2QUVy0QhcPPWZKvqgbyAOp%2Fp6OMAXqkqPT5a0lxezsNdufgrS2tQdDRCk5jemyCyn2G%2Fan%2FHvG5rfVEbGSv5d3Sm%2BDtMYy2gb%2BZzzWJ5hKuPFvw6spKzaZUekwCNXqP1y7QYcsSK%2BhhwxM%2B%2F9on6TjI6Zc6Kx7PxtbFCC6nlc0VCt%2B7DUaNlJTfFLC%2FnPBpT37ATY%2FsKcY5AyBgA8%2FaiKFqR3%2BkXRbFdc1wdaLc4MLpzy2nCv0QL5RjtsqX1qwYGCr32Jv3RMX1DzdTuRnQbYE1KGxxlHfy5bjCtliZd7QwMZtG%2Fv0C%2FQg2HGPpPN15WE8lJ0IHw%2BtB%2BXNxw8I%2FEmcJy5RGjlCaAZbGP2LaqXfKUD3RyWqvd3urVkOs0y1LlevVuxH3dwwl99Wal%2BxtBpClwTVXcXi3Y70Z8g41rv4OGbfFmxwG2B2Tpb4STMYqv4TeeSxsoo158u1YIMlOSC34aLgmYw7MfQvQY6pgGUMKpBnpNr3eD0BCSlHPDoJ2qyoitMaMayW29OXl00sxYGRIG8k%2BtBm%2BOPxaU%2BbcaBY7WCwnyG99X0g35p3VlAmTxfpQghOSqHxGs%2FpohQRj5nKk9xkd4t4Cw08i2uEU5550BrO%2B2IYlLEacaxD0p%2FcuIlFGyqP84H5E7vzfTF%2BZaF4OnLLaJrltSYQp7JCTPhC0CL2GrjdSG2vgEuaoHjUQXgmb9M&X-Amz-Signature=bc815984ed0bfea66f7c1f782344e51ba03101c18a7c7b8786ba7c89a07bd906&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZMFOS5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAcQfyTMBx3%2FdtfTFmVVIVvZ3At4E6Hippp454pL%2BFFeAiAF4vE5yAm2HdWFJPhfoRRkfhM0xxrchOlDDh6qJVo5KSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtYko0Q4GJl0xiKnKtwDHRkhhFdFVZHbbJjkJ4OAoN%2BYtpr8pxHcBWS%2Fxa4xqvaFK5arBZtEkvbGASdtjPX4ogBeRUUC0cRVzVi5zAK59Gm8l7i5hNjP6iRDT0ZWPJ9HSk2Y21m4NNjaQun28ynFZuHXJksBwV8UHPe8ATL7RfhnIDyLnnE2QUVy0QhcPPWZKvqgbyAOp%2Fp6OMAXqkqPT5a0lxezsNdufgrS2tQdDRCk5jemyCyn2G%2Fan%2FHvG5rfVEbGSv5d3Sm%2BDtMYy2gb%2BZzzWJ5hKuPFvw6spKzaZUekwCNXqP1y7QYcsSK%2BhhwxM%2B%2F9on6TjI6Zc6Kx7PxtbFCC6nlc0VCt%2B7DUaNlJTfFLC%2FnPBpT37ATY%2FsKcY5AyBgA8%2FaiKFqR3%2BkXRbFdc1wdaLc4MLpzy2nCv0QL5RjtsqX1qwYGCr32Jv3RMX1DzdTuRnQbYE1KGxxlHfy5bjCtliZd7QwMZtG%2Fv0C%2FQg2HGPpPN15WE8lJ0IHw%2BtB%2BXNxw8I%2FEmcJy5RGjlCaAZbGP2LaqXfKUD3RyWqvd3urVkOs0y1LlevVuxH3dwwl99Wal%2BxtBpClwTVXcXi3Y70Z8g41rv4OGbfFmxwG2B2Tpb4STMYqv4TeeSxsoo158u1YIMlOSC34aLgmYw7MfQvQY6pgGUMKpBnpNr3eD0BCSlHPDoJ2qyoitMaMayW29OXl00sxYGRIG8k%2BtBm%2BOPxaU%2BbcaBY7WCwnyG99X0g35p3VlAmTxfpQghOSqHxGs%2FpohQRj5nKk9xkd4t4Cw08i2uEU5550BrO%2B2IYlLEacaxD0p%2FcuIlFGyqP84H5E7vzfTF%2BZaF4OnLLaJrltSYQp7JCTPhC0CL2GrjdSG2vgEuaoHjUQXgmb9M&X-Amz-Signature=1d17bd17b297e075ac343408f7d780660ee58ae4aeed53495166347cf9ef80de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZMFOS5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAcQfyTMBx3%2FdtfTFmVVIVvZ3At4E6Hippp454pL%2BFFeAiAF4vE5yAm2HdWFJPhfoRRkfhM0xxrchOlDDh6qJVo5KSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtYko0Q4GJl0xiKnKtwDHRkhhFdFVZHbbJjkJ4OAoN%2BYtpr8pxHcBWS%2Fxa4xqvaFK5arBZtEkvbGASdtjPX4ogBeRUUC0cRVzVi5zAK59Gm8l7i5hNjP6iRDT0ZWPJ9HSk2Y21m4NNjaQun28ynFZuHXJksBwV8UHPe8ATL7RfhnIDyLnnE2QUVy0QhcPPWZKvqgbyAOp%2Fp6OMAXqkqPT5a0lxezsNdufgrS2tQdDRCk5jemyCyn2G%2Fan%2FHvG5rfVEbGSv5d3Sm%2BDtMYy2gb%2BZzzWJ5hKuPFvw6spKzaZUekwCNXqP1y7QYcsSK%2BhhwxM%2B%2F9on6TjI6Zc6Kx7PxtbFCC6nlc0VCt%2B7DUaNlJTfFLC%2FnPBpT37ATY%2FsKcY5AyBgA8%2FaiKFqR3%2BkXRbFdc1wdaLc4MLpzy2nCv0QL5RjtsqX1qwYGCr32Jv3RMX1DzdTuRnQbYE1KGxxlHfy5bjCtliZd7QwMZtG%2Fv0C%2FQg2HGPpPN15WE8lJ0IHw%2BtB%2BXNxw8I%2FEmcJy5RGjlCaAZbGP2LaqXfKUD3RyWqvd3urVkOs0y1LlevVuxH3dwwl99Wal%2BxtBpClwTVXcXi3Y70Z8g41rv4OGbfFmxwG2B2Tpb4STMYqv4TeeSxsoo158u1YIMlOSC34aLgmYw7MfQvQY6pgGUMKpBnpNr3eD0BCSlHPDoJ2qyoitMaMayW29OXl00sxYGRIG8k%2BtBm%2BOPxaU%2BbcaBY7WCwnyG99X0g35p3VlAmTxfpQghOSqHxGs%2FpohQRj5nKk9xkd4t4Cw08i2uEU5550BrO%2B2IYlLEacaxD0p%2FcuIlFGyqP84H5E7vzfTF%2BZaF4OnLLaJrltSYQp7JCTPhC0CL2GrjdSG2vgEuaoHjUQXgmb9M&X-Amz-Signature=773f99bb488a83c70ef57da412e1417761b0f9c2ce98ba1259e251d79c3746c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
