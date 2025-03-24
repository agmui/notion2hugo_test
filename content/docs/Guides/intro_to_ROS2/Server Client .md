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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SZJDJ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETivqi%2B08sxQWHAN%2BI80jTJe3%2FS4Xcc3Nto0w2dbVjAAiAwWwCfDAOkfzt1MNAeFzApFbMc4bIbYAmyrvjJ3tNYciqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2BqII514UtPlSEgPKtwDDfnndHJcp93Oi0TbGoGmr%2FKHtNJoKvWsbM4jAJHNZ66DqtoCoecX3ImFoJ%2BrTtiipFRgu1IHonL5ydxvvsF%2BW08Qi2mOeq5J9U9mXlyG3sgd2wD%2B9Dz8ibeTi5Rgku1WefuZJ%2BgOHQg0HD6%2Fuz9Ne8fPKz57imXsyKFCboujTx4jCuWhYWf0rldlh9SdnXzD3VM7SQYVYbgM1tP7Hv6zlqaXALmy%2BHFKXks89y8hejy3KIBRAX5oMtMq%2FzplBEpRy%2BRGoEtTyz5tyGqfPjUff1pnXrCwBI3Qz12YXLKGOAc5aSd4FcmabZgOJceLrw86a5FmEQtooYZPrc%2BPIqv880GXizVl21SMoD0YaYz8Kuc6l4mJphUliYPcOOFOxqp5c82nNovyioFfTucRlPMeGU2Jp7k1P0nkmrky%2BDi8yaG%2BurqLbLqFcgl8YKSKjdqtcDxjAoF4o8GKWniXyqhyCSWVQS%2BvMGiALHvqn0URyFM7K6FyUR4LASv00M%2B9YakzdSpOdhi2Xq%2FVOa6IcMulDM5ZOUQES8tvrA1jdwKU8FJpfYZD1sa%2BgallydqNXZ0SJjHDPdO52moPeEvxrK7oM0G0eA9vHEj17sXArJMatgNd9drjVtlbCy9iyaswvb%2BFvwY6pgFk1HKINluB2PcxhSLK2jqBrnCZDDsVQ5ZwTYV0qwAtD0Jg5sOJW3XYcJP7XC3wBx6bqHMCnCz5KjGKeXWrstEa4z4wNSSCcJ95IjHA6nDbgnXEcHDA3gLbrE6ZRFNybt%2Fxkb8Q5YirCmBtgTS8gG8jGe80rmWcSyPWkfc9b%2FzY5Gf8kXr2r7jdgVKqtvukJ7sV19pf2%2FCBttNw76f%2FIVTfi94%2ByEIv&X-Amz-Signature=1380ea87df34095b25aa9d91e7923c9e23ff0c698e06ddeb95876b3d401d8550&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SZJDJ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETivqi%2B08sxQWHAN%2BI80jTJe3%2FS4Xcc3Nto0w2dbVjAAiAwWwCfDAOkfzt1MNAeFzApFbMc4bIbYAmyrvjJ3tNYciqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2BqII514UtPlSEgPKtwDDfnndHJcp93Oi0TbGoGmr%2FKHtNJoKvWsbM4jAJHNZ66DqtoCoecX3ImFoJ%2BrTtiipFRgu1IHonL5ydxvvsF%2BW08Qi2mOeq5J9U9mXlyG3sgd2wD%2B9Dz8ibeTi5Rgku1WefuZJ%2BgOHQg0HD6%2Fuz9Ne8fPKz57imXsyKFCboujTx4jCuWhYWf0rldlh9SdnXzD3VM7SQYVYbgM1tP7Hv6zlqaXALmy%2BHFKXks89y8hejy3KIBRAX5oMtMq%2FzplBEpRy%2BRGoEtTyz5tyGqfPjUff1pnXrCwBI3Qz12YXLKGOAc5aSd4FcmabZgOJceLrw86a5FmEQtooYZPrc%2BPIqv880GXizVl21SMoD0YaYz8Kuc6l4mJphUliYPcOOFOxqp5c82nNovyioFfTucRlPMeGU2Jp7k1P0nkmrky%2BDi8yaG%2BurqLbLqFcgl8YKSKjdqtcDxjAoF4o8GKWniXyqhyCSWVQS%2BvMGiALHvqn0URyFM7K6FyUR4LASv00M%2B9YakzdSpOdhi2Xq%2FVOa6IcMulDM5ZOUQES8tvrA1jdwKU8FJpfYZD1sa%2BgallydqNXZ0SJjHDPdO52moPeEvxrK7oM0G0eA9vHEj17sXArJMatgNd9drjVtlbCy9iyaswvb%2BFvwY6pgFk1HKINluB2PcxhSLK2jqBrnCZDDsVQ5ZwTYV0qwAtD0Jg5sOJW3XYcJP7XC3wBx6bqHMCnCz5KjGKeXWrstEa4z4wNSSCcJ95IjHA6nDbgnXEcHDA3gLbrE6ZRFNybt%2Fxkb8Q5YirCmBtgTS8gG8jGe80rmWcSyPWkfc9b%2FzY5Gf8kXr2r7jdgVKqtvukJ7sV19pf2%2FCBttNw76f%2FIVTfi94%2ByEIv&X-Amz-Signature=5b872d249ef5b8d37ad0d05c88908d00c2121a7729054e605dbd800adf05a314&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SZJDJ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETivqi%2B08sxQWHAN%2BI80jTJe3%2FS4Xcc3Nto0w2dbVjAAiAwWwCfDAOkfzt1MNAeFzApFbMc4bIbYAmyrvjJ3tNYciqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2BqII514UtPlSEgPKtwDDfnndHJcp93Oi0TbGoGmr%2FKHtNJoKvWsbM4jAJHNZ66DqtoCoecX3ImFoJ%2BrTtiipFRgu1IHonL5ydxvvsF%2BW08Qi2mOeq5J9U9mXlyG3sgd2wD%2B9Dz8ibeTi5Rgku1WefuZJ%2BgOHQg0HD6%2Fuz9Ne8fPKz57imXsyKFCboujTx4jCuWhYWf0rldlh9SdnXzD3VM7SQYVYbgM1tP7Hv6zlqaXALmy%2BHFKXks89y8hejy3KIBRAX5oMtMq%2FzplBEpRy%2BRGoEtTyz5tyGqfPjUff1pnXrCwBI3Qz12YXLKGOAc5aSd4FcmabZgOJceLrw86a5FmEQtooYZPrc%2BPIqv880GXizVl21SMoD0YaYz8Kuc6l4mJphUliYPcOOFOxqp5c82nNovyioFfTucRlPMeGU2Jp7k1P0nkmrky%2BDi8yaG%2BurqLbLqFcgl8YKSKjdqtcDxjAoF4o8GKWniXyqhyCSWVQS%2BvMGiALHvqn0URyFM7K6FyUR4LASv00M%2B9YakzdSpOdhi2Xq%2FVOa6IcMulDM5ZOUQES8tvrA1jdwKU8FJpfYZD1sa%2BgallydqNXZ0SJjHDPdO52moPeEvxrK7oM0G0eA9vHEj17sXArJMatgNd9drjVtlbCy9iyaswvb%2BFvwY6pgFk1HKINluB2PcxhSLK2jqBrnCZDDsVQ5ZwTYV0qwAtD0Jg5sOJW3XYcJP7XC3wBx6bqHMCnCz5KjGKeXWrstEa4z4wNSSCcJ95IjHA6nDbgnXEcHDA3gLbrE6ZRFNybt%2Fxkb8Q5YirCmBtgTS8gG8jGe80rmWcSyPWkfc9b%2FzY5Gf8kXr2r7jdgVKqtvukJ7sV19pf2%2FCBttNw76f%2FIVTfi94%2ByEIv&X-Amz-Signature=5bed4b64208298f61792d1667ace9bd2796141cb34ebcbe01e7ad5149b8bd181&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SZJDJ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETivqi%2B08sxQWHAN%2BI80jTJe3%2FS4Xcc3Nto0w2dbVjAAiAwWwCfDAOkfzt1MNAeFzApFbMc4bIbYAmyrvjJ3tNYciqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2BqII514UtPlSEgPKtwDDfnndHJcp93Oi0TbGoGmr%2FKHtNJoKvWsbM4jAJHNZ66DqtoCoecX3ImFoJ%2BrTtiipFRgu1IHonL5ydxvvsF%2BW08Qi2mOeq5J9U9mXlyG3sgd2wD%2B9Dz8ibeTi5Rgku1WefuZJ%2BgOHQg0HD6%2Fuz9Ne8fPKz57imXsyKFCboujTx4jCuWhYWf0rldlh9SdnXzD3VM7SQYVYbgM1tP7Hv6zlqaXALmy%2BHFKXks89y8hejy3KIBRAX5oMtMq%2FzplBEpRy%2BRGoEtTyz5tyGqfPjUff1pnXrCwBI3Qz12YXLKGOAc5aSd4FcmabZgOJceLrw86a5FmEQtooYZPrc%2BPIqv880GXizVl21SMoD0YaYz8Kuc6l4mJphUliYPcOOFOxqp5c82nNovyioFfTucRlPMeGU2Jp7k1P0nkmrky%2BDi8yaG%2BurqLbLqFcgl8YKSKjdqtcDxjAoF4o8GKWniXyqhyCSWVQS%2BvMGiALHvqn0URyFM7K6FyUR4LASv00M%2B9YakzdSpOdhi2Xq%2FVOa6IcMulDM5ZOUQES8tvrA1jdwKU8FJpfYZD1sa%2BgallydqNXZ0SJjHDPdO52moPeEvxrK7oM0G0eA9vHEj17sXArJMatgNd9drjVtlbCy9iyaswvb%2BFvwY6pgFk1HKINluB2PcxhSLK2jqBrnCZDDsVQ5ZwTYV0qwAtD0Jg5sOJW3XYcJP7XC3wBx6bqHMCnCz5KjGKeXWrstEa4z4wNSSCcJ95IjHA6nDbgnXEcHDA3gLbrE6ZRFNybt%2Fxkb8Q5YirCmBtgTS8gG8jGe80rmWcSyPWkfc9b%2FzY5Gf8kXr2r7jdgVKqtvukJ7sV19pf2%2FCBttNw76f%2FIVTfi94%2ByEIv&X-Amz-Signature=d723573f36b182c25a414c792f21f282cf2a3ff7215b2d1731585dbae60f82d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SZJDJ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETivqi%2B08sxQWHAN%2BI80jTJe3%2FS4Xcc3Nto0w2dbVjAAiAwWwCfDAOkfzt1MNAeFzApFbMc4bIbYAmyrvjJ3tNYciqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2BqII514UtPlSEgPKtwDDfnndHJcp93Oi0TbGoGmr%2FKHtNJoKvWsbM4jAJHNZ66DqtoCoecX3ImFoJ%2BrTtiipFRgu1IHonL5ydxvvsF%2BW08Qi2mOeq5J9U9mXlyG3sgd2wD%2B9Dz8ibeTi5Rgku1WefuZJ%2BgOHQg0HD6%2Fuz9Ne8fPKz57imXsyKFCboujTx4jCuWhYWf0rldlh9SdnXzD3VM7SQYVYbgM1tP7Hv6zlqaXALmy%2BHFKXks89y8hejy3KIBRAX5oMtMq%2FzplBEpRy%2BRGoEtTyz5tyGqfPjUff1pnXrCwBI3Qz12YXLKGOAc5aSd4FcmabZgOJceLrw86a5FmEQtooYZPrc%2BPIqv880GXizVl21SMoD0YaYz8Kuc6l4mJphUliYPcOOFOxqp5c82nNovyioFfTucRlPMeGU2Jp7k1P0nkmrky%2BDi8yaG%2BurqLbLqFcgl8YKSKjdqtcDxjAoF4o8GKWniXyqhyCSWVQS%2BvMGiALHvqn0URyFM7K6FyUR4LASv00M%2B9YakzdSpOdhi2Xq%2FVOa6IcMulDM5ZOUQES8tvrA1jdwKU8FJpfYZD1sa%2BgallydqNXZ0SJjHDPdO52moPeEvxrK7oM0G0eA9vHEj17sXArJMatgNd9drjVtlbCy9iyaswvb%2BFvwY6pgFk1HKINluB2PcxhSLK2jqBrnCZDDsVQ5ZwTYV0qwAtD0Jg5sOJW3XYcJP7XC3wBx6bqHMCnCz5KjGKeXWrstEa4z4wNSSCcJ95IjHA6nDbgnXEcHDA3gLbrE6ZRFNybt%2Fxkb8Q5YirCmBtgTS8gG8jGe80rmWcSyPWkfc9b%2FzY5Gf8kXr2r7jdgVKqtvukJ7sV19pf2%2FCBttNw76f%2FIVTfi94%2ByEIv&X-Amz-Signature=a2418186144ec6dd4568d424318a8a2266be55d538b1cee04b1ccd71b4669205&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
