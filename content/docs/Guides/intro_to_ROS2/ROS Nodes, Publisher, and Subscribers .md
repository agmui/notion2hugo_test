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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CYNEJR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyCp1txia4DsPWcaxSp3vUkmtK5VUCNJ2NziN%2BhLrqbAiAg%2FUgy%2BAYF99Z9638rXVXtGnAAaTd1CD80NKxgXYVrSyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekHrasMCyxcJqfNfKtwD9Y3XpUmTj%2BHJcsPxA31EPt3jlDOfQRB27BRp%2B8sXVAkoqsg1QG4dHumKSj6Z%2FY77LMpS5To0Z6lrQ3x06YHLx6puHLKMuZtLGi7a9A9EZjztBQS7RvaOd3WMQhhL31dWzVzCaxdDINyg4FuFkNuAW6PTRntBserrMHPv2%2Fc%2FfdCJc9TKyBq5f8jSvVHjjAbkBiQZoxcwkWRgZHBKaktvQbguQzw%2BoMdQ4BLRSjFQQ12X41SzUo4BEbjBwzG9sj27S%2F%2FWlZLNAjtNp8MrJBxWCezGFy%2FEh1y9cz060rrIMr0Cfm2rS5L5QeRoQD1%2BuUTfB4tlUsXSH5E%2BgDhZstfh34MFKGXwAr0oB0KPkEYS0IJ%2BeKswP6eTtyteu13lZ993t0E7zj6mL5OPhKBQjZbWB7zTGeI3KiYROm%2BW83qx5G6U7Q%2BfKc1qdyHN7tQxvDY7m%2FHXVdVE%2FINRwLYFyUhivtTq8AMwL9ha8oyCHj8pIKmLWUC%2F5tMMoDFEKl%2Fr4q5%2BZ8BvGveDsJv6UzuHOxQUVK0e%2FpNVUcK4ULKUuu8yKgQ5VlvKKO1UpdTCB%2F5JcJ7%2FfzHGUl6ksi%2BMTKTxPLsPU3k1Z%2BVPZ4MPiuKptLy30GjcF1mCcojarX6jRVMwh8z%2FvgY6pgGXva5jVAx2Yku7vkMQFP%2Fvu%2FpNi1wyWnkaE0obpEoPq7df4TuAfKF2Q%2BE%2FY0uRtEqJE9Qwb5%2BC8IzAYcCaJIfPj2WwR4OGS0HQE5%2FkXRgZUdEB5WxcfQpvsCOWjbrWgLGhAfheru426BaJ1zK2WxNwutPyWfqMsLk4N3cBJygoBbAgO840EPLODr%2Fy1P7pSKs6NLA%2FWsXWRQNsrU4V9Et7S2RURlgq&X-Amz-Signature=3f77b85f48fb71dc30c37680fbbe37f050de9f5f467225892622a4593eedaa7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CYNEJR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyCp1txia4DsPWcaxSp3vUkmtK5VUCNJ2NziN%2BhLrqbAiAg%2FUgy%2BAYF99Z9638rXVXtGnAAaTd1CD80NKxgXYVrSyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekHrasMCyxcJqfNfKtwD9Y3XpUmTj%2BHJcsPxA31EPt3jlDOfQRB27BRp%2B8sXVAkoqsg1QG4dHumKSj6Z%2FY77LMpS5To0Z6lrQ3x06YHLx6puHLKMuZtLGi7a9A9EZjztBQS7RvaOd3WMQhhL31dWzVzCaxdDINyg4FuFkNuAW6PTRntBserrMHPv2%2Fc%2FfdCJc9TKyBq5f8jSvVHjjAbkBiQZoxcwkWRgZHBKaktvQbguQzw%2BoMdQ4BLRSjFQQ12X41SzUo4BEbjBwzG9sj27S%2F%2FWlZLNAjtNp8MrJBxWCezGFy%2FEh1y9cz060rrIMr0Cfm2rS5L5QeRoQD1%2BuUTfB4tlUsXSH5E%2BgDhZstfh34MFKGXwAr0oB0KPkEYS0IJ%2BeKswP6eTtyteu13lZ993t0E7zj6mL5OPhKBQjZbWB7zTGeI3KiYROm%2BW83qx5G6U7Q%2BfKc1qdyHN7tQxvDY7m%2FHXVdVE%2FINRwLYFyUhivtTq8AMwL9ha8oyCHj8pIKmLWUC%2F5tMMoDFEKl%2Fr4q5%2BZ8BvGveDsJv6UzuHOxQUVK0e%2FpNVUcK4ULKUuu8yKgQ5VlvKKO1UpdTCB%2F5JcJ7%2FfzHGUl6ksi%2BMTKTxPLsPU3k1Z%2BVPZ4MPiuKptLy30GjcF1mCcojarX6jRVMwh8z%2FvgY6pgGXva5jVAx2Yku7vkMQFP%2Fvu%2FpNi1wyWnkaE0obpEoPq7df4TuAfKF2Q%2BE%2FY0uRtEqJE9Qwb5%2BC8IzAYcCaJIfPj2WwR4OGS0HQE5%2FkXRgZUdEB5WxcfQpvsCOWjbrWgLGhAfheru426BaJ1zK2WxNwutPyWfqMsLk4N3cBJygoBbAgO840EPLODr%2Fy1P7pSKs6NLA%2FWsXWRQNsrU4V9Et7S2RURlgq&X-Amz-Signature=33cead49fd17538b57d2dd58ad7f60a8dc0092eb0cfc7b63d54ba62da2828338&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CYNEJR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyCp1txia4DsPWcaxSp3vUkmtK5VUCNJ2NziN%2BhLrqbAiAg%2FUgy%2BAYF99Z9638rXVXtGnAAaTd1CD80NKxgXYVrSyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekHrasMCyxcJqfNfKtwD9Y3XpUmTj%2BHJcsPxA31EPt3jlDOfQRB27BRp%2B8sXVAkoqsg1QG4dHumKSj6Z%2FY77LMpS5To0Z6lrQ3x06YHLx6puHLKMuZtLGi7a9A9EZjztBQS7RvaOd3WMQhhL31dWzVzCaxdDINyg4FuFkNuAW6PTRntBserrMHPv2%2Fc%2FfdCJc9TKyBq5f8jSvVHjjAbkBiQZoxcwkWRgZHBKaktvQbguQzw%2BoMdQ4BLRSjFQQ12X41SzUo4BEbjBwzG9sj27S%2F%2FWlZLNAjtNp8MrJBxWCezGFy%2FEh1y9cz060rrIMr0Cfm2rS5L5QeRoQD1%2BuUTfB4tlUsXSH5E%2BgDhZstfh34MFKGXwAr0oB0KPkEYS0IJ%2BeKswP6eTtyteu13lZ993t0E7zj6mL5OPhKBQjZbWB7zTGeI3KiYROm%2BW83qx5G6U7Q%2BfKc1qdyHN7tQxvDY7m%2FHXVdVE%2FINRwLYFyUhivtTq8AMwL9ha8oyCHj8pIKmLWUC%2F5tMMoDFEKl%2Fr4q5%2BZ8BvGveDsJv6UzuHOxQUVK0e%2FpNVUcK4ULKUuu8yKgQ5VlvKKO1UpdTCB%2F5JcJ7%2FfzHGUl6ksi%2BMTKTxPLsPU3k1Z%2BVPZ4MPiuKptLy30GjcF1mCcojarX6jRVMwh8z%2FvgY6pgGXva5jVAx2Yku7vkMQFP%2Fvu%2FpNi1wyWnkaE0obpEoPq7df4TuAfKF2Q%2BE%2FY0uRtEqJE9Qwb5%2BC8IzAYcCaJIfPj2WwR4OGS0HQE5%2FkXRgZUdEB5WxcfQpvsCOWjbrWgLGhAfheru426BaJ1zK2WxNwutPyWfqMsLk4N3cBJygoBbAgO840EPLODr%2Fy1P7pSKs6NLA%2FWsXWRQNsrU4V9Et7S2RURlgq&X-Amz-Signature=f1a5e89fbec74a3eb0a70ad5d21e061587281bc944fba4b356e2bed1abc6d343&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CYNEJR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyCp1txia4DsPWcaxSp3vUkmtK5VUCNJ2NziN%2BhLrqbAiAg%2FUgy%2BAYF99Z9638rXVXtGnAAaTd1CD80NKxgXYVrSyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekHrasMCyxcJqfNfKtwD9Y3XpUmTj%2BHJcsPxA31EPt3jlDOfQRB27BRp%2B8sXVAkoqsg1QG4dHumKSj6Z%2FY77LMpS5To0Z6lrQ3x06YHLx6puHLKMuZtLGi7a9A9EZjztBQS7RvaOd3WMQhhL31dWzVzCaxdDINyg4FuFkNuAW6PTRntBserrMHPv2%2Fc%2FfdCJc9TKyBq5f8jSvVHjjAbkBiQZoxcwkWRgZHBKaktvQbguQzw%2BoMdQ4BLRSjFQQ12X41SzUo4BEbjBwzG9sj27S%2F%2FWlZLNAjtNp8MrJBxWCezGFy%2FEh1y9cz060rrIMr0Cfm2rS5L5QeRoQD1%2BuUTfB4tlUsXSH5E%2BgDhZstfh34MFKGXwAr0oB0KPkEYS0IJ%2BeKswP6eTtyteu13lZ993t0E7zj6mL5OPhKBQjZbWB7zTGeI3KiYROm%2BW83qx5G6U7Q%2BfKc1qdyHN7tQxvDY7m%2FHXVdVE%2FINRwLYFyUhivtTq8AMwL9ha8oyCHj8pIKmLWUC%2F5tMMoDFEKl%2Fr4q5%2BZ8BvGveDsJv6UzuHOxQUVK0e%2FpNVUcK4ULKUuu8yKgQ5VlvKKO1UpdTCB%2F5JcJ7%2FfzHGUl6ksi%2BMTKTxPLsPU3k1Z%2BVPZ4MPiuKptLy30GjcF1mCcojarX6jRVMwh8z%2FvgY6pgGXva5jVAx2Yku7vkMQFP%2Fvu%2FpNi1wyWnkaE0obpEoPq7df4TuAfKF2Q%2BE%2FY0uRtEqJE9Qwb5%2BC8IzAYcCaJIfPj2WwR4OGS0HQE5%2FkXRgZUdEB5WxcfQpvsCOWjbrWgLGhAfheru426BaJ1zK2WxNwutPyWfqMsLk4N3cBJygoBbAgO840EPLODr%2Fy1P7pSKs6NLA%2FWsXWRQNsrU4V9Et7S2RURlgq&X-Amz-Signature=67b97e6c660a8bb58fadc5c17443dab13806898f0b853640475af811de12ee2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CYNEJR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyCp1txia4DsPWcaxSp3vUkmtK5VUCNJ2NziN%2BhLrqbAiAg%2FUgy%2BAYF99Z9638rXVXtGnAAaTd1CD80NKxgXYVrSyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekHrasMCyxcJqfNfKtwD9Y3XpUmTj%2BHJcsPxA31EPt3jlDOfQRB27BRp%2B8sXVAkoqsg1QG4dHumKSj6Z%2FY77LMpS5To0Z6lrQ3x06YHLx6puHLKMuZtLGi7a9A9EZjztBQS7RvaOd3WMQhhL31dWzVzCaxdDINyg4FuFkNuAW6PTRntBserrMHPv2%2Fc%2FfdCJc9TKyBq5f8jSvVHjjAbkBiQZoxcwkWRgZHBKaktvQbguQzw%2BoMdQ4BLRSjFQQ12X41SzUo4BEbjBwzG9sj27S%2F%2FWlZLNAjtNp8MrJBxWCezGFy%2FEh1y9cz060rrIMr0Cfm2rS5L5QeRoQD1%2BuUTfB4tlUsXSH5E%2BgDhZstfh34MFKGXwAr0oB0KPkEYS0IJ%2BeKswP6eTtyteu13lZ993t0E7zj6mL5OPhKBQjZbWB7zTGeI3KiYROm%2BW83qx5G6U7Q%2BfKc1qdyHN7tQxvDY7m%2FHXVdVE%2FINRwLYFyUhivtTq8AMwL9ha8oyCHj8pIKmLWUC%2F5tMMoDFEKl%2Fr4q5%2BZ8BvGveDsJv6UzuHOxQUVK0e%2FpNVUcK4ULKUuu8yKgQ5VlvKKO1UpdTCB%2F5JcJ7%2FfzHGUl6ksi%2BMTKTxPLsPU3k1Z%2BVPZ4MPiuKptLy30GjcF1mCcojarX6jRVMwh8z%2FvgY6pgGXva5jVAx2Yku7vkMQFP%2Fvu%2FpNi1wyWnkaE0obpEoPq7df4TuAfKF2Q%2BE%2FY0uRtEqJE9Qwb5%2BC8IzAYcCaJIfPj2WwR4OGS0HQE5%2FkXRgZUdEB5WxcfQpvsCOWjbrWgLGhAfheru426BaJ1zK2WxNwutPyWfqMsLk4N3cBJygoBbAgO840EPLODr%2Fy1P7pSKs6NLA%2FWsXWRQNsrU4V9Et7S2RURlgq&X-Amz-Signature=4708057ea211ba9d6e37e11372b332d0c7b42a1c1f2cccc66469b90efd6bdd47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CYNEJR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyCp1txia4DsPWcaxSp3vUkmtK5VUCNJ2NziN%2BhLrqbAiAg%2FUgy%2BAYF99Z9638rXVXtGnAAaTd1CD80NKxgXYVrSyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekHrasMCyxcJqfNfKtwD9Y3XpUmTj%2BHJcsPxA31EPt3jlDOfQRB27BRp%2B8sXVAkoqsg1QG4dHumKSj6Z%2FY77LMpS5To0Z6lrQ3x06YHLx6puHLKMuZtLGi7a9A9EZjztBQS7RvaOd3WMQhhL31dWzVzCaxdDINyg4FuFkNuAW6PTRntBserrMHPv2%2Fc%2FfdCJc9TKyBq5f8jSvVHjjAbkBiQZoxcwkWRgZHBKaktvQbguQzw%2BoMdQ4BLRSjFQQ12X41SzUo4BEbjBwzG9sj27S%2F%2FWlZLNAjtNp8MrJBxWCezGFy%2FEh1y9cz060rrIMr0Cfm2rS5L5QeRoQD1%2BuUTfB4tlUsXSH5E%2BgDhZstfh34MFKGXwAr0oB0KPkEYS0IJ%2BeKswP6eTtyteu13lZ993t0E7zj6mL5OPhKBQjZbWB7zTGeI3KiYROm%2BW83qx5G6U7Q%2BfKc1qdyHN7tQxvDY7m%2FHXVdVE%2FINRwLYFyUhivtTq8AMwL9ha8oyCHj8pIKmLWUC%2F5tMMoDFEKl%2Fr4q5%2BZ8BvGveDsJv6UzuHOxQUVK0e%2FpNVUcK4ULKUuu8yKgQ5VlvKKO1UpdTCB%2F5JcJ7%2FfzHGUl6ksi%2BMTKTxPLsPU3k1Z%2BVPZ4MPiuKptLy30GjcF1mCcojarX6jRVMwh8z%2FvgY6pgGXva5jVAx2Yku7vkMQFP%2Fvu%2FpNi1wyWnkaE0obpEoPq7df4TuAfKF2Q%2BE%2FY0uRtEqJE9Qwb5%2BC8IzAYcCaJIfPj2WwR4OGS0HQE5%2FkXRgZUdEB5WxcfQpvsCOWjbrWgLGhAfheru426BaJ1zK2WxNwutPyWfqMsLk4N3cBJygoBbAgO840EPLODr%2Fy1P7pSKs6NLA%2FWsXWRQNsrU4V9Et7S2RURlgq&X-Amz-Signature=b91ac858ca39f45ad7620ec616bbe80e84e9949ca17617792542c186253b6b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CYNEJR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyCp1txia4DsPWcaxSp3vUkmtK5VUCNJ2NziN%2BhLrqbAiAg%2FUgy%2BAYF99Z9638rXVXtGnAAaTd1CD80NKxgXYVrSyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekHrasMCyxcJqfNfKtwD9Y3XpUmTj%2BHJcsPxA31EPt3jlDOfQRB27BRp%2B8sXVAkoqsg1QG4dHumKSj6Z%2FY77LMpS5To0Z6lrQ3x06YHLx6puHLKMuZtLGi7a9A9EZjztBQS7RvaOd3WMQhhL31dWzVzCaxdDINyg4FuFkNuAW6PTRntBserrMHPv2%2Fc%2FfdCJc9TKyBq5f8jSvVHjjAbkBiQZoxcwkWRgZHBKaktvQbguQzw%2BoMdQ4BLRSjFQQ12X41SzUo4BEbjBwzG9sj27S%2F%2FWlZLNAjtNp8MrJBxWCezGFy%2FEh1y9cz060rrIMr0Cfm2rS5L5QeRoQD1%2BuUTfB4tlUsXSH5E%2BgDhZstfh34MFKGXwAr0oB0KPkEYS0IJ%2BeKswP6eTtyteu13lZ993t0E7zj6mL5OPhKBQjZbWB7zTGeI3KiYROm%2BW83qx5G6U7Q%2BfKc1qdyHN7tQxvDY7m%2FHXVdVE%2FINRwLYFyUhivtTq8AMwL9ha8oyCHj8pIKmLWUC%2F5tMMoDFEKl%2Fr4q5%2BZ8BvGveDsJv6UzuHOxQUVK0e%2FpNVUcK4ULKUuu8yKgQ5VlvKKO1UpdTCB%2F5JcJ7%2FfzHGUl6ksi%2BMTKTxPLsPU3k1Z%2BVPZ4MPiuKptLy30GjcF1mCcojarX6jRVMwh8z%2FvgY6pgGXva5jVAx2Yku7vkMQFP%2Fvu%2FpNi1wyWnkaE0obpEoPq7df4TuAfKF2Q%2BE%2FY0uRtEqJE9Qwb5%2BC8IzAYcCaJIfPj2WwR4OGS0HQE5%2FkXRgZUdEB5WxcfQpvsCOWjbrWgLGhAfheru426BaJ1zK2WxNwutPyWfqMsLk4N3cBJygoBbAgO840EPLODr%2Fy1P7pSKs6NLA%2FWsXWRQNsrU4V9Et7S2RURlgq&X-Amz-Signature=1e0e01a1e01400b61c96b9d1cf2c23e0ddc593215139990582307348134d16f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CYNEJR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyCp1txia4DsPWcaxSp3vUkmtK5VUCNJ2NziN%2BhLrqbAiAg%2FUgy%2BAYF99Z9638rXVXtGnAAaTd1CD80NKxgXYVrSyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekHrasMCyxcJqfNfKtwD9Y3XpUmTj%2BHJcsPxA31EPt3jlDOfQRB27BRp%2B8sXVAkoqsg1QG4dHumKSj6Z%2FY77LMpS5To0Z6lrQ3x06YHLx6puHLKMuZtLGi7a9A9EZjztBQS7RvaOd3WMQhhL31dWzVzCaxdDINyg4FuFkNuAW6PTRntBserrMHPv2%2Fc%2FfdCJc9TKyBq5f8jSvVHjjAbkBiQZoxcwkWRgZHBKaktvQbguQzw%2BoMdQ4BLRSjFQQ12X41SzUo4BEbjBwzG9sj27S%2F%2FWlZLNAjtNp8MrJBxWCezGFy%2FEh1y9cz060rrIMr0Cfm2rS5L5QeRoQD1%2BuUTfB4tlUsXSH5E%2BgDhZstfh34MFKGXwAr0oB0KPkEYS0IJ%2BeKswP6eTtyteu13lZ993t0E7zj6mL5OPhKBQjZbWB7zTGeI3KiYROm%2BW83qx5G6U7Q%2BfKc1qdyHN7tQxvDY7m%2FHXVdVE%2FINRwLYFyUhivtTq8AMwL9ha8oyCHj8pIKmLWUC%2F5tMMoDFEKl%2Fr4q5%2BZ8BvGveDsJv6UzuHOxQUVK0e%2FpNVUcK4ULKUuu8yKgQ5VlvKKO1UpdTCB%2F5JcJ7%2FfzHGUl6ksi%2BMTKTxPLsPU3k1Z%2BVPZ4MPiuKptLy30GjcF1mCcojarX6jRVMwh8z%2FvgY6pgGXva5jVAx2Yku7vkMQFP%2Fvu%2FpNi1wyWnkaE0obpEoPq7df4TuAfKF2Q%2BE%2FY0uRtEqJE9Qwb5%2BC8IzAYcCaJIfPj2WwR4OGS0HQE5%2FkXRgZUdEB5WxcfQpvsCOWjbrWgLGhAfheru426BaJ1zK2WxNwutPyWfqMsLk4N3cBJygoBbAgO840EPLODr%2Fy1P7pSKs6NLA%2FWsXWRQNsrU4V9Et7S2RURlgq&X-Amz-Signature=f1d00bda8c4e5d8f202686425d78742375a521daba2f4d273488c4031c88baa5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
