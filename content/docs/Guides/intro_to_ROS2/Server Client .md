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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTX4TAD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDagEOMQEAlT9zd7grBorgaFHFsFjxq71oYe6t2GPqVkgIhAIHPuVy6OOTJKtTdUMxBkuDXq2lioXjaYfLJl4IOY%2FGyKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLogtx4nQDCFGVAxIq3AMTKWq7MfO%2BxcZjNZja3q7KhIfUEbRSYt9Vywquw9rqT9Cvt9Ka3H8ztd6G2rwGkgrisNHapG27I%2BJKMVRr7iJViONrT0AlEjGnL%2BGSovRaxCUWUkX2A6o4S1yTcy3Jj7V1g7qhvjTo8wJIhBXha6HsnJh86Ti262UJ2KZoi82g8DrH4Eb2Sdj0MWSxqTQD3IkE9Aq2UvqNYZr35mLgOHZCehIwFCeM%2BF%2BnJ9q%2BnPBEYEuNwW4VGW0di9JFMSiFWFzFj3e29BTKTbCZpZwuwznH9oQBrUT%2FDqh5L8uThfE%2BmahLnKc3v%2FdeqbYUwW8n8pz%2BGyBcmglOmVDbQIlvWR5y0Q3aV1CANQQ%2BAFPzI2gAnQomKHAdVxcqP0fn5xCYxx1VQFMco2AqsZVuGK1w5eHsEMxZAwr1NWBDDHRJQX5b5%2BgS7fRqr5n3plpELbe6MgJaJgKduL7gLSu0MnfGdXZqmZznJ9ThXkKX5%2BWxe7Raad090NaVeij6ugukR1QBKDvpI6vf0qvWGZdaAcvYqaVO03O4VyMF4Xxqc3HtZbKAkrQ1CS1BbykoT3UxMtcT0lh1qghwjbF5msgMc%2B%2FKxI6vup9LGKamsrQI%2Bew48VSFoENzz2gaRWMsU80T6jD76%2FrABjqkAYwWBXOwmiTJ9A39RII59QB4iS5ShIfmvAXRWAUZhYT0M9EEkdAN0HczzPMq578UT3U%2F4JbyD%2FnHz47sZDUK6KQyfek6SvqEOiSNqnX2CV0JAUs7fwG%2FxACbKy7HtafWNdGq0Uv1dzyhFb1BudHR9FgB9Gxtk7ErTPM3rbAT%2BaZUPk6CWQaiqOjx%2F5%2F%2BfEN27lGzV3AiN%2F90wFlIYPDCXSqmo9s5&X-Amz-Signature=87e44e3b529beb9e19fc1c06c8fc32c4a04ae69db845f7ef8bd6709da7981b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTX4TAD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDagEOMQEAlT9zd7grBorgaFHFsFjxq71oYe6t2GPqVkgIhAIHPuVy6OOTJKtTdUMxBkuDXq2lioXjaYfLJl4IOY%2FGyKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLogtx4nQDCFGVAxIq3AMTKWq7MfO%2BxcZjNZja3q7KhIfUEbRSYt9Vywquw9rqT9Cvt9Ka3H8ztd6G2rwGkgrisNHapG27I%2BJKMVRr7iJViONrT0AlEjGnL%2BGSovRaxCUWUkX2A6o4S1yTcy3Jj7V1g7qhvjTo8wJIhBXha6HsnJh86Ti262UJ2KZoi82g8DrH4Eb2Sdj0MWSxqTQD3IkE9Aq2UvqNYZr35mLgOHZCehIwFCeM%2BF%2BnJ9q%2BnPBEYEuNwW4VGW0di9JFMSiFWFzFj3e29BTKTbCZpZwuwznH9oQBrUT%2FDqh5L8uThfE%2BmahLnKc3v%2FdeqbYUwW8n8pz%2BGyBcmglOmVDbQIlvWR5y0Q3aV1CANQQ%2BAFPzI2gAnQomKHAdVxcqP0fn5xCYxx1VQFMco2AqsZVuGK1w5eHsEMxZAwr1NWBDDHRJQX5b5%2BgS7fRqr5n3plpELbe6MgJaJgKduL7gLSu0MnfGdXZqmZznJ9ThXkKX5%2BWxe7Raad090NaVeij6ugukR1QBKDvpI6vf0qvWGZdaAcvYqaVO03O4VyMF4Xxqc3HtZbKAkrQ1CS1BbykoT3UxMtcT0lh1qghwjbF5msgMc%2B%2FKxI6vup9LGKamsrQI%2Bew48VSFoENzz2gaRWMsU80T6jD76%2FrABjqkAYwWBXOwmiTJ9A39RII59QB4iS5ShIfmvAXRWAUZhYT0M9EEkdAN0HczzPMq578UT3U%2F4JbyD%2FnHz47sZDUK6KQyfek6SvqEOiSNqnX2CV0JAUs7fwG%2FxACbKy7HtafWNdGq0Uv1dzyhFb1BudHR9FgB9Gxtk7ErTPM3rbAT%2BaZUPk6CWQaiqOjx%2F5%2F%2BfEN27lGzV3AiN%2F90wFlIYPDCXSqmo9s5&X-Amz-Signature=3f27aee9c9bb0def17f0be442ebde353d374046c0de72885f3725889960d6c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTX4TAD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDagEOMQEAlT9zd7grBorgaFHFsFjxq71oYe6t2GPqVkgIhAIHPuVy6OOTJKtTdUMxBkuDXq2lioXjaYfLJl4IOY%2FGyKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLogtx4nQDCFGVAxIq3AMTKWq7MfO%2BxcZjNZja3q7KhIfUEbRSYt9Vywquw9rqT9Cvt9Ka3H8ztd6G2rwGkgrisNHapG27I%2BJKMVRr7iJViONrT0AlEjGnL%2BGSovRaxCUWUkX2A6o4S1yTcy3Jj7V1g7qhvjTo8wJIhBXha6HsnJh86Ti262UJ2KZoi82g8DrH4Eb2Sdj0MWSxqTQD3IkE9Aq2UvqNYZr35mLgOHZCehIwFCeM%2BF%2BnJ9q%2BnPBEYEuNwW4VGW0di9JFMSiFWFzFj3e29BTKTbCZpZwuwznH9oQBrUT%2FDqh5L8uThfE%2BmahLnKc3v%2FdeqbYUwW8n8pz%2BGyBcmglOmVDbQIlvWR5y0Q3aV1CANQQ%2BAFPzI2gAnQomKHAdVxcqP0fn5xCYxx1VQFMco2AqsZVuGK1w5eHsEMxZAwr1NWBDDHRJQX5b5%2BgS7fRqr5n3plpELbe6MgJaJgKduL7gLSu0MnfGdXZqmZznJ9ThXkKX5%2BWxe7Raad090NaVeij6ugukR1QBKDvpI6vf0qvWGZdaAcvYqaVO03O4VyMF4Xxqc3HtZbKAkrQ1CS1BbykoT3UxMtcT0lh1qghwjbF5msgMc%2B%2FKxI6vup9LGKamsrQI%2Bew48VSFoENzz2gaRWMsU80T6jD76%2FrABjqkAYwWBXOwmiTJ9A39RII59QB4iS5ShIfmvAXRWAUZhYT0M9EEkdAN0HczzPMq578UT3U%2F4JbyD%2FnHz47sZDUK6KQyfek6SvqEOiSNqnX2CV0JAUs7fwG%2FxACbKy7HtafWNdGq0Uv1dzyhFb1BudHR9FgB9Gxtk7ErTPM3rbAT%2BaZUPk6CWQaiqOjx%2F5%2F%2BfEN27lGzV3AiN%2F90wFlIYPDCXSqmo9s5&X-Amz-Signature=890b476d11413d11ccd5c3397e50cc8f64f411058b5a6ab833d6c244339d15bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTX4TAD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDagEOMQEAlT9zd7grBorgaFHFsFjxq71oYe6t2GPqVkgIhAIHPuVy6OOTJKtTdUMxBkuDXq2lioXjaYfLJl4IOY%2FGyKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLogtx4nQDCFGVAxIq3AMTKWq7MfO%2BxcZjNZja3q7KhIfUEbRSYt9Vywquw9rqT9Cvt9Ka3H8ztd6G2rwGkgrisNHapG27I%2BJKMVRr7iJViONrT0AlEjGnL%2BGSovRaxCUWUkX2A6o4S1yTcy3Jj7V1g7qhvjTo8wJIhBXha6HsnJh86Ti262UJ2KZoi82g8DrH4Eb2Sdj0MWSxqTQD3IkE9Aq2UvqNYZr35mLgOHZCehIwFCeM%2BF%2BnJ9q%2BnPBEYEuNwW4VGW0di9JFMSiFWFzFj3e29BTKTbCZpZwuwznH9oQBrUT%2FDqh5L8uThfE%2BmahLnKc3v%2FdeqbYUwW8n8pz%2BGyBcmglOmVDbQIlvWR5y0Q3aV1CANQQ%2BAFPzI2gAnQomKHAdVxcqP0fn5xCYxx1VQFMco2AqsZVuGK1w5eHsEMxZAwr1NWBDDHRJQX5b5%2BgS7fRqr5n3plpELbe6MgJaJgKduL7gLSu0MnfGdXZqmZznJ9ThXkKX5%2BWxe7Raad090NaVeij6ugukR1QBKDvpI6vf0qvWGZdaAcvYqaVO03O4VyMF4Xxqc3HtZbKAkrQ1CS1BbykoT3UxMtcT0lh1qghwjbF5msgMc%2B%2FKxI6vup9LGKamsrQI%2Bew48VSFoENzz2gaRWMsU80T6jD76%2FrABjqkAYwWBXOwmiTJ9A39RII59QB4iS5ShIfmvAXRWAUZhYT0M9EEkdAN0HczzPMq578UT3U%2F4JbyD%2FnHz47sZDUK6KQyfek6SvqEOiSNqnX2CV0JAUs7fwG%2FxACbKy7HtafWNdGq0Uv1dzyhFb1BudHR9FgB9Gxtk7ErTPM3rbAT%2BaZUPk6CWQaiqOjx%2F5%2F%2BfEN27lGzV3AiN%2F90wFlIYPDCXSqmo9s5&X-Amz-Signature=b6308aaabc18c1f9616c350646e5d830b600124d6782da5c73da5ea418c02d54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTX4TAD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDagEOMQEAlT9zd7grBorgaFHFsFjxq71oYe6t2GPqVkgIhAIHPuVy6OOTJKtTdUMxBkuDXq2lioXjaYfLJl4IOY%2FGyKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLogtx4nQDCFGVAxIq3AMTKWq7MfO%2BxcZjNZja3q7KhIfUEbRSYt9Vywquw9rqT9Cvt9Ka3H8ztd6G2rwGkgrisNHapG27I%2BJKMVRr7iJViONrT0AlEjGnL%2BGSovRaxCUWUkX2A6o4S1yTcy3Jj7V1g7qhvjTo8wJIhBXha6HsnJh86Ti262UJ2KZoi82g8DrH4Eb2Sdj0MWSxqTQD3IkE9Aq2UvqNYZr35mLgOHZCehIwFCeM%2BF%2BnJ9q%2BnPBEYEuNwW4VGW0di9JFMSiFWFzFj3e29BTKTbCZpZwuwznH9oQBrUT%2FDqh5L8uThfE%2BmahLnKc3v%2FdeqbYUwW8n8pz%2BGyBcmglOmVDbQIlvWR5y0Q3aV1CANQQ%2BAFPzI2gAnQomKHAdVxcqP0fn5xCYxx1VQFMco2AqsZVuGK1w5eHsEMxZAwr1NWBDDHRJQX5b5%2BgS7fRqr5n3plpELbe6MgJaJgKduL7gLSu0MnfGdXZqmZznJ9ThXkKX5%2BWxe7Raad090NaVeij6ugukR1QBKDvpI6vf0qvWGZdaAcvYqaVO03O4VyMF4Xxqc3HtZbKAkrQ1CS1BbykoT3UxMtcT0lh1qghwjbF5msgMc%2B%2FKxI6vup9LGKamsrQI%2Bew48VSFoENzz2gaRWMsU80T6jD76%2FrABjqkAYwWBXOwmiTJ9A39RII59QB4iS5ShIfmvAXRWAUZhYT0M9EEkdAN0HczzPMq578UT3U%2F4JbyD%2FnHz47sZDUK6KQyfek6SvqEOiSNqnX2CV0JAUs7fwG%2FxACbKy7HtafWNdGq0Uv1dzyhFb1BudHR9FgB9Gxtk7ErTPM3rbAT%2BaZUPk6CWQaiqOjx%2F5%2F%2BfEN27lGzV3AiN%2F90wFlIYPDCXSqmo9s5&X-Amz-Signature=5cc7d6c298fe2fcd4ca1a55dd313110c593544ab6cc0f09e94065a9e3d3a1547&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
