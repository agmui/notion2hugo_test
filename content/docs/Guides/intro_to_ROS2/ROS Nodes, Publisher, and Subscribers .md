---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MXRZUL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH8ILhJveDealKM94iRJFh4mHMcLmFBF6YZFEOQ9YV8FAiACz%2FT3OgzFquaWNWORiEl%2F0q%2BLTyaERCNr8HuA1E%2Blzyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMbG0lvzDHE0kxCpdrKtwDKHs5KboJl5sXlRG%2BoOR%2FQBDwROoTfXWvRzRH7P2XB7zqf6F34uX80LDo8dDLBAuH91621V%2FtkZg4nRLgP0txUqOPZBRF%2Fts3Rcq3YNm2M2e%2BG%2FwF%2BrxQw95O1p%2Feesx5Sc%2FMnF7U13ji4dlBRktfMftDh1slu69bVE5yPKQvqQhRo9rF1OkQ3c15WAUt9EVzyYx1qOQAOMVrRM6S%2FJhq5Ruw4cgw5qj4r6A4ZVRH%2FEnphAuCXXXPQ%2BTOZ3mGkVV9tZn5iwyVqQV1ooSYQLurAHEkuiGJQuvEpD7R4N%2F0h1BVJC7ZoEEnvzwLGh3QtEeYIooWMRSpU%2By6WsTcJOoxGU5CiPCqXQjDlnu7wvyGmYRKTrPTPpKMLeRfdKjCro8pcxXQBbhs6qX%2BZdBDhDke%2BeHCXYKxXWAIqS2dYRbB6EORj4wwcRW3Ux%2BiZWZqZQn71bk4fVXxRVuaeZY9ZoLnbbXiYqT7Uz%2BadZyl%2FeG8%2FdpAFvAfwzJlcXxVNDh2YioZeULJrQg9HamquyBgSBjUMaJ5EhOyeaPo%2BdVu8RqsHvW8KvM9Q5wLMoe5XHA0wgqlY5EsjY%2B72572V0s5sz5FNgfmDqDwSb4UGeQonXCCAD%2FlTI4OgJWpXFxjYzcwj%2BHfwwY6pgE7Cl9Bsj2LbBew0zB43c0PPwIeE61nF8KajG%2BVi1dgJRwCvcaWBaVHpmo3f1FCMzj0%2F8ZkhqFwntaQjWIUYpxQb%2Bq40xhJn1I%2B2BfGWqpL4GRUY2gmG8vNlwduBnSE5RbAT7b0EDwVKhOXFHFi0h3wr%2Fd9GYJqYPfi2ZEj7NHbNmFkI3w6s%2F%2BQJK%2By139NRGUf%2BTul41UrLhNsq2VWLLVNScxpeqTU&X-Amz-Signature=117524a9a55a4b00029fde33bcdac03c8c13d2c8fbeb8df37a2bb63f5d32b0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MXRZUL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH8ILhJveDealKM94iRJFh4mHMcLmFBF6YZFEOQ9YV8FAiACz%2FT3OgzFquaWNWORiEl%2F0q%2BLTyaERCNr8HuA1E%2Blzyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMbG0lvzDHE0kxCpdrKtwDKHs5KboJl5sXlRG%2BoOR%2FQBDwROoTfXWvRzRH7P2XB7zqf6F34uX80LDo8dDLBAuH91621V%2FtkZg4nRLgP0txUqOPZBRF%2Fts3Rcq3YNm2M2e%2BG%2FwF%2BrxQw95O1p%2Feesx5Sc%2FMnF7U13ji4dlBRktfMftDh1slu69bVE5yPKQvqQhRo9rF1OkQ3c15WAUt9EVzyYx1qOQAOMVrRM6S%2FJhq5Ruw4cgw5qj4r6A4ZVRH%2FEnphAuCXXXPQ%2BTOZ3mGkVV9tZn5iwyVqQV1ooSYQLurAHEkuiGJQuvEpD7R4N%2F0h1BVJC7ZoEEnvzwLGh3QtEeYIooWMRSpU%2By6WsTcJOoxGU5CiPCqXQjDlnu7wvyGmYRKTrPTPpKMLeRfdKjCro8pcxXQBbhs6qX%2BZdBDhDke%2BeHCXYKxXWAIqS2dYRbB6EORj4wwcRW3Ux%2BiZWZqZQn71bk4fVXxRVuaeZY9ZoLnbbXiYqT7Uz%2BadZyl%2FeG8%2FdpAFvAfwzJlcXxVNDh2YioZeULJrQg9HamquyBgSBjUMaJ5EhOyeaPo%2BdVu8RqsHvW8KvM9Q5wLMoe5XHA0wgqlY5EsjY%2B72572V0s5sz5FNgfmDqDwSb4UGeQonXCCAD%2FlTI4OgJWpXFxjYzcwj%2BHfwwY6pgE7Cl9Bsj2LbBew0zB43c0PPwIeE61nF8KajG%2BVi1dgJRwCvcaWBaVHpmo3f1FCMzj0%2F8ZkhqFwntaQjWIUYpxQb%2Bq40xhJn1I%2B2BfGWqpL4GRUY2gmG8vNlwduBnSE5RbAT7b0EDwVKhOXFHFi0h3wr%2Fd9GYJqYPfi2ZEj7NHbNmFkI3w6s%2F%2BQJK%2By139NRGUf%2BTul41UrLhNsq2VWLLVNScxpeqTU&X-Amz-Signature=82d02d0aa9c67f2a0c99e3afb82a4cd56c6e2a95263c38717c76766a5d1b4659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MXRZUL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH8ILhJveDealKM94iRJFh4mHMcLmFBF6YZFEOQ9YV8FAiACz%2FT3OgzFquaWNWORiEl%2F0q%2BLTyaERCNr8HuA1E%2Blzyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMbG0lvzDHE0kxCpdrKtwDKHs5KboJl5sXlRG%2BoOR%2FQBDwROoTfXWvRzRH7P2XB7zqf6F34uX80LDo8dDLBAuH91621V%2FtkZg4nRLgP0txUqOPZBRF%2Fts3Rcq3YNm2M2e%2BG%2FwF%2BrxQw95O1p%2Feesx5Sc%2FMnF7U13ji4dlBRktfMftDh1slu69bVE5yPKQvqQhRo9rF1OkQ3c15WAUt9EVzyYx1qOQAOMVrRM6S%2FJhq5Ruw4cgw5qj4r6A4ZVRH%2FEnphAuCXXXPQ%2BTOZ3mGkVV9tZn5iwyVqQV1ooSYQLurAHEkuiGJQuvEpD7R4N%2F0h1BVJC7ZoEEnvzwLGh3QtEeYIooWMRSpU%2By6WsTcJOoxGU5CiPCqXQjDlnu7wvyGmYRKTrPTPpKMLeRfdKjCro8pcxXQBbhs6qX%2BZdBDhDke%2BeHCXYKxXWAIqS2dYRbB6EORj4wwcRW3Ux%2BiZWZqZQn71bk4fVXxRVuaeZY9ZoLnbbXiYqT7Uz%2BadZyl%2FeG8%2FdpAFvAfwzJlcXxVNDh2YioZeULJrQg9HamquyBgSBjUMaJ5EhOyeaPo%2BdVu8RqsHvW8KvM9Q5wLMoe5XHA0wgqlY5EsjY%2B72572V0s5sz5FNgfmDqDwSb4UGeQonXCCAD%2FlTI4OgJWpXFxjYzcwj%2BHfwwY6pgE7Cl9Bsj2LbBew0zB43c0PPwIeE61nF8KajG%2BVi1dgJRwCvcaWBaVHpmo3f1FCMzj0%2F8ZkhqFwntaQjWIUYpxQb%2Bq40xhJn1I%2B2BfGWqpL4GRUY2gmG8vNlwduBnSE5RbAT7b0EDwVKhOXFHFi0h3wr%2Fd9GYJqYPfi2ZEj7NHbNmFkI3w6s%2F%2BQJK%2By139NRGUf%2BTul41UrLhNsq2VWLLVNScxpeqTU&X-Amz-Signature=6b38518d05db5806604f2c9ea2c7b3a4e0caea34dfa32a5a9fbeeb805800f28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MXRZUL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH8ILhJveDealKM94iRJFh4mHMcLmFBF6YZFEOQ9YV8FAiACz%2FT3OgzFquaWNWORiEl%2F0q%2BLTyaERCNr8HuA1E%2Blzyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMbG0lvzDHE0kxCpdrKtwDKHs5KboJl5sXlRG%2BoOR%2FQBDwROoTfXWvRzRH7P2XB7zqf6F34uX80LDo8dDLBAuH91621V%2FtkZg4nRLgP0txUqOPZBRF%2Fts3Rcq3YNm2M2e%2BG%2FwF%2BrxQw95O1p%2Feesx5Sc%2FMnF7U13ji4dlBRktfMftDh1slu69bVE5yPKQvqQhRo9rF1OkQ3c15WAUt9EVzyYx1qOQAOMVrRM6S%2FJhq5Ruw4cgw5qj4r6A4ZVRH%2FEnphAuCXXXPQ%2BTOZ3mGkVV9tZn5iwyVqQV1ooSYQLurAHEkuiGJQuvEpD7R4N%2F0h1BVJC7ZoEEnvzwLGh3QtEeYIooWMRSpU%2By6WsTcJOoxGU5CiPCqXQjDlnu7wvyGmYRKTrPTPpKMLeRfdKjCro8pcxXQBbhs6qX%2BZdBDhDke%2BeHCXYKxXWAIqS2dYRbB6EORj4wwcRW3Ux%2BiZWZqZQn71bk4fVXxRVuaeZY9ZoLnbbXiYqT7Uz%2BadZyl%2FeG8%2FdpAFvAfwzJlcXxVNDh2YioZeULJrQg9HamquyBgSBjUMaJ5EhOyeaPo%2BdVu8RqsHvW8KvM9Q5wLMoe5XHA0wgqlY5EsjY%2B72572V0s5sz5FNgfmDqDwSb4UGeQonXCCAD%2FlTI4OgJWpXFxjYzcwj%2BHfwwY6pgE7Cl9Bsj2LbBew0zB43c0PPwIeE61nF8KajG%2BVi1dgJRwCvcaWBaVHpmo3f1FCMzj0%2F8ZkhqFwntaQjWIUYpxQb%2Bq40xhJn1I%2B2BfGWqpL4GRUY2gmG8vNlwduBnSE5RbAT7b0EDwVKhOXFHFi0h3wr%2Fd9GYJqYPfi2ZEj7NHbNmFkI3w6s%2F%2BQJK%2By139NRGUf%2BTul41UrLhNsq2VWLLVNScxpeqTU&X-Amz-Signature=5ebf55c02db899b821822136e4e4fb4269b5d3d3f4aa1c86c86e2fed04e6d19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MXRZUL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH8ILhJveDealKM94iRJFh4mHMcLmFBF6YZFEOQ9YV8FAiACz%2FT3OgzFquaWNWORiEl%2F0q%2BLTyaERCNr8HuA1E%2Blzyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMbG0lvzDHE0kxCpdrKtwDKHs5KboJl5sXlRG%2BoOR%2FQBDwROoTfXWvRzRH7P2XB7zqf6F34uX80LDo8dDLBAuH91621V%2FtkZg4nRLgP0txUqOPZBRF%2Fts3Rcq3YNm2M2e%2BG%2FwF%2BrxQw95O1p%2Feesx5Sc%2FMnF7U13ji4dlBRktfMftDh1slu69bVE5yPKQvqQhRo9rF1OkQ3c15WAUt9EVzyYx1qOQAOMVrRM6S%2FJhq5Ruw4cgw5qj4r6A4ZVRH%2FEnphAuCXXXPQ%2BTOZ3mGkVV9tZn5iwyVqQV1ooSYQLurAHEkuiGJQuvEpD7R4N%2F0h1BVJC7ZoEEnvzwLGh3QtEeYIooWMRSpU%2By6WsTcJOoxGU5CiPCqXQjDlnu7wvyGmYRKTrPTPpKMLeRfdKjCro8pcxXQBbhs6qX%2BZdBDhDke%2BeHCXYKxXWAIqS2dYRbB6EORj4wwcRW3Ux%2BiZWZqZQn71bk4fVXxRVuaeZY9ZoLnbbXiYqT7Uz%2BadZyl%2FeG8%2FdpAFvAfwzJlcXxVNDh2YioZeULJrQg9HamquyBgSBjUMaJ5EhOyeaPo%2BdVu8RqsHvW8KvM9Q5wLMoe5XHA0wgqlY5EsjY%2B72572V0s5sz5FNgfmDqDwSb4UGeQonXCCAD%2FlTI4OgJWpXFxjYzcwj%2BHfwwY6pgE7Cl9Bsj2LbBew0zB43c0PPwIeE61nF8KajG%2BVi1dgJRwCvcaWBaVHpmo3f1FCMzj0%2F8ZkhqFwntaQjWIUYpxQb%2Bq40xhJn1I%2B2BfGWqpL4GRUY2gmG8vNlwduBnSE5RbAT7b0EDwVKhOXFHFi0h3wr%2Fd9GYJqYPfi2ZEj7NHbNmFkI3w6s%2F%2BQJK%2By139NRGUf%2BTul41UrLhNsq2VWLLVNScxpeqTU&X-Amz-Signature=f580c41264e0f99a4d0326e6e49fdcddf9c0ec25957929f7484b7199bd3ded78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MXRZUL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH8ILhJveDealKM94iRJFh4mHMcLmFBF6YZFEOQ9YV8FAiACz%2FT3OgzFquaWNWORiEl%2F0q%2BLTyaERCNr8HuA1E%2Blzyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMbG0lvzDHE0kxCpdrKtwDKHs5KboJl5sXlRG%2BoOR%2FQBDwROoTfXWvRzRH7P2XB7zqf6F34uX80LDo8dDLBAuH91621V%2FtkZg4nRLgP0txUqOPZBRF%2Fts3Rcq3YNm2M2e%2BG%2FwF%2BrxQw95O1p%2Feesx5Sc%2FMnF7U13ji4dlBRktfMftDh1slu69bVE5yPKQvqQhRo9rF1OkQ3c15WAUt9EVzyYx1qOQAOMVrRM6S%2FJhq5Ruw4cgw5qj4r6A4ZVRH%2FEnphAuCXXXPQ%2BTOZ3mGkVV9tZn5iwyVqQV1ooSYQLurAHEkuiGJQuvEpD7R4N%2F0h1BVJC7ZoEEnvzwLGh3QtEeYIooWMRSpU%2By6WsTcJOoxGU5CiPCqXQjDlnu7wvyGmYRKTrPTPpKMLeRfdKjCro8pcxXQBbhs6qX%2BZdBDhDke%2BeHCXYKxXWAIqS2dYRbB6EORj4wwcRW3Ux%2BiZWZqZQn71bk4fVXxRVuaeZY9ZoLnbbXiYqT7Uz%2BadZyl%2FeG8%2FdpAFvAfwzJlcXxVNDh2YioZeULJrQg9HamquyBgSBjUMaJ5EhOyeaPo%2BdVu8RqsHvW8KvM9Q5wLMoe5XHA0wgqlY5EsjY%2B72572V0s5sz5FNgfmDqDwSb4UGeQonXCCAD%2FlTI4OgJWpXFxjYzcwj%2BHfwwY6pgE7Cl9Bsj2LbBew0zB43c0PPwIeE61nF8KajG%2BVi1dgJRwCvcaWBaVHpmo3f1FCMzj0%2F8ZkhqFwntaQjWIUYpxQb%2Bq40xhJn1I%2B2BfGWqpL4GRUY2gmG8vNlwduBnSE5RbAT7b0EDwVKhOXFHFi0h3wr%2Fd9GYJqYPfi2ZEj7NHbNmFkI3w6s%2F%2BQJK%2By139NRGUf%2BTul41UrLhNsq2VWLLVNScxpeqTU&X-Amz-Signature=77ea08abe783f9cae5a21738c72e5c28b88598b6f53419c1b7726430b152d964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MXRZUL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH8ILhJveDealKM94iRJFh4mHMcLmFBF6YZFEOQ9YV8FAiACz%2FT3OgzFquaWNWORiEl%2F0q%2BLTyaERCNr8HuA1E%2Blzyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMbG0lvzDHE0kxCpdrKtwDKHs5KboJl5sXlRG%2BoOR%2FQBDwROoTfXWvRzRH7P2XB7zqf6F34uX80LDo8dDLBAuH91621V%2FtkZg4nRLgP0txUqOPZBRF%2Fts3Rcq3YNm2M2e%2BG%2FwF%2BrxQw95O1p%2Feesx5Sc%2FMnF7U13ji4dlBRktfMftDh1slu69bVE5yPKQvqQhRo9rF1OkQ3c15WAUt9EVzyYx1qOQAOMVrRM6S%2FJhq5Ruw4cgw5qj4r6A4ZVRH%2FEnphAuCXXXPQ%2BTOZ3mGkVV9tZn5iwyVqQV1ooSYQLurAHEkuiGJQuvEpD7R4N%2F0h1BVJC7ZoEEnvzwLGh3QtEeYIooWMRSpU%2By6WsTcJOoxGU5CiPCqXQjDlnu7wvyGmYRKTrPTPpKMLeRfdKjCro8pcxXQBbhs6qX%2BZdBDhDke%2BeHCXYKxXWAIqS2dYRbB6EORj4wwcRW3Ux%2BiZWZqZQn71bk4fVXxRVuaeZY9ZoLnbbXiYqT7Uz%2BadZyl%2FeG8%2FdpAFvAfwzJlcXxVNDh2YioZeULJrQg9HamquyBgSBjUMaJ5EhOyeaPo%2BdVu8RqsHvW8KvM9Q5wLMoe5XHA0wgqlY5EsjY%2B72572V0s5sz5FNgfmDqDwSb4UGeQonXCCAD%2FlTI4OgJWpXFxjYzcwj%2BHfwwY6pgE7Cl9Bsj2LbBew0zB43c0PPwIeE61nF8KajG%2BVi1dgJRwCvcaWBaVHpmo3f1FCMzj0%2F8ZkhqFwntaQjWIUYpxQb%2Bq40xhJn1I%2B2BfGWqpL4GRUY2gmG8vNlwduBnSE5RbAT7b0EDwVKhOXFHFi0h3wr%2Fd9GYJqYPfi2ZEj7NHbNmFkI3w6s%2F%2BQJK%2By139NRGUf%2BTul41UrLhNsq2VWLLVNScxpeqTU&X-Amz-Signature=d7dbcf6ead2ba9fdc28a062a02fb8d758be5ed9fed8672c02785dd3ade72d471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MXRZUL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH8ILhJveDealKM94iRJFh4mHMcLmFBF6YZFEOQ9YV8FAiACz%2FT3OgzFquaWNWORiEl%2F0q%2BLTyaERCNr8HuA1E%2Blzyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMbG0lvzDHE0kxCpdrKtwDKHs5KboJl5sXlRG%2BoOR%2FQBDwROoTfXWvRzRH7P2XB7zqf6F34uX80LDo8dDLBAuH91621V%2FtkZg4nRLgP0txUqOPZBRF%2Fts3Rcq3YNm2M2e%2BG%2FwF%2BrxQw95O1p%2Feesx5Sc%2FMnF7U13ji4dlBRktfMftDh1slu69bVE5yPKQvqQhRo9rF1OkQ3c15WAUt9EVzyYx1qOQAOMVrRM6S%2FJhq5Ruw4cgw5qj4r6A4ZVRH%2FEnphAuCXXXPQ%2BTOZ3mGkVV9tZn5iwyVqQV1ooSYQLurAHEkuiGJQuvEpD7R4N%2F0h1BVJC7ZoEEnvzwLGh3QtEeYIooWMRSpU%2By6WsTcJOoxGU5CiPCqXQjDlnu7wvyGmYRKTrPTPpKMLeRfdKjCro8pcxXQBbhs6qX%2BZdBDhDke%2BeHCXYKxXWAIqS2dYRbB6EORj4wwcRW3Ux%2BiZWZqZQn71bk4fVXxRVuaeZY9ZoLnbbXiYqT7Uz%2BadZyl%2FeG8%2FdpAFvAfwzJlcXxVNDh2YioZeULJrQg9HamquyBgSBjUMaJ5EhOyeaPo%2BdVu8RqsHvW8KvM9Q5wLMoe5XHA0wgqlY5EsjY%2B72572V0s5sz5FNgfmDqDwSb4UGeQonXCCAD%2FlTI4OgJWpXFxjYzcwj%2BHfwwY6pgE7Cl9Bsj2LbBew0zB43c0PPwIeE61nF8KajG%2BVi1dgJRwCvcaWBaVHpmo3f1FCMzj0%2F8ZkhqFwntaQjWIUYpxQb%2Bq40xhJn1I%2B2BfGWqpL4GRUY2gmG8vNlwduBnSE5RbAT7b0EDwVKhOXFHFi0h3wr%2Fd9GYJqYPfi2ZEj7NHbNmFkI3w6s%2F%2BQJK%2By139NRGUf%2BTul41UrLhNsq2VWLLVNScxpeqTU&X-Amz-Signature=3b8ce4bbdd787cd0aa50dc02993a9e2100908381a2132f8805ec7c661bff7ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
