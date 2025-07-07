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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBQWL4P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXg%2B6Ftl8snTFtuMWFWDPLL%2FG80b%2Bc2wmbByp7HH14SwIgENLlweLD4jnMsAihVjCXbMY%2FKZCVvMhTeNeRlxN68bwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2BABiuf2841UH7AtyrcA864Nrqdovel7ta5EYLVusE0jZ9BqMJGL5TM58mrveIj3KeRaBtyvNo4xVuQKqNn0LI6%2BZyjIKMIB7%2FHhz%2BVg%2BEEhu0hhZVXg4d0DAMrJuJX%2FVqH5oIASAzEOL52gDOAC8BSe%2B6qgogjR1WdGWLwP5JGHwEHqJv355nVyNGz4sRnG9chi9ku8u7YvTqZ6O78OLtHZyqTblFQJ98xdhGB87RHCob1sa%2FV8tZtaEX%2FNt6r%2FDgDHJWEWtrSkqMvsHu0V4HCeURVLvA6Y%2FJF0W6hgow6twG5QLsiV1Q9As3B0p2LwnsXgw2Sj17fzu3YRCt9aPIY%2BPDurmoEcr6c6ZG7VQJgZdMxbdhCO3KFJvJoVpjsaeHzZm1nn7eD0lirIdKrUxLb6aU08IH%2FLr4aGjWEbDeCq4cDIH4u%2Ffj%2FDjWsFfzCtmYULZB3DlOW2%2BT%2BM7rvF21sKIC0Dj3khrFEdmXH1ZH%2BgyLmYFodp7WHzPbt2zlvfQxTIjz4hNpprYqUsT3IP3p2wGv6qpaL1ySE%2B%2F8k6Fc2OGBhRruaZHyBU5Od38Lcu9DRo1DifXBkhHM3maAkPK46vTen4NvNosxJVYZ2dIrR1TqNcyXyL8ulmdjfnwKc6JOJs2zQcS4hXHWCMIiWsMMGOqUBAJ1N9jbgSmIs9v%2FJLLSFz%2F%2BRUe%2BNTeFhXltzb%2BAFoPen0%2FV2%2B%2FFjnkgIA%2BoFLA0fI5YIIFytRPH0MpWZrlLr1Oy1IZ9xUnsKlmO4tNI9F5S1gA1qkV7tZwjaAu0Ockqh3C19374Wh%2BlniZxj0F%2Bz0bwZecB%2B5SlCvlpG5Lh1Yp75hDY2aiYtwL62Z4oZ7gJiHuhEwV66%2FNU71PLuyfPMa8EWqbwl&X-Amz-Signature=f68cd32e66a9f4f32c65441d58b91251698bf010582bc022f1740c483cc28697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBQWL4P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXg%2B6Ftl8snTFtuMWFWDPLL%2FG80b%2Bc2wmbByp7HH14SwIgENLlweLD4jnMsAihVjCXbMY%2FKZCVvMhTeNeRlxN68bwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2BABiuf2841UH7AtyrcA864Nrqdovel7ta5EYLVusE0jZ9BqMJGL5TM58mrveIj3KeRaBtyvNo4xVuQKqNn0LI6%2BZyjIKMIB7%2FHhz%2BVg%2BEEhu0hhZVXg4d0DAMrJuJX%2FVqH5oIASAzEOL52gDOAC8BSe%2B6qgogjR1WdGWLwP5JGHwEHqJv355nVyNGz4sRnG9chi9ku8u7YvTqZ6O78OLtHZyqTblFQJ98xdhGB87RHCob1sa%2FV8tZtaEX%2FNt6r%2FDgDHJWEWtrSkqMvsHu0V4HCeURVLvA6Y%2FJF0W6hgow6twG5QLsiV1Q9As3B0p2LwnsXgw2Sj17fzu3YRCt9aPIY%2BPDurmoEcr6c6ZG7VQJgZdMxbdhCO3KFJvJoVpjsaeHzZm1nn7eD0lirIdKrUxLb6aU08IH%2FLr4aGjWEbDeCq4cDIH4u%2Ffj%2FDjWsFfzCtmYULZB3DlOW2%2BT%2BM7rvF21sKIC0Dj3khrFEdmXH1ZH%2BgyLmYFodp7WHzPbt2zlvfQxTIjz4hNpprYqUsT3IP3p2wGv6qpaL1ySE%2B%2F8k6Fc2OGBhRruaZHyBU5Od38Lcu9DRo1DifXBkhHM3maAkPK46vTen4NvNosxJVYZ2dIrR1TqNcyXyL8ulmdjfnwKc6JOJs2zQcS4hXHWCMIiWsMMGOqUBAJ1N9jbgSmIs9v%2FJLLSFz%2F%2BRUe%2BNTeFhXltzb%2BAFoPen0%2FV2%2B%2FFjnkgIA%2BoFLA0fI5YIIFytRPH0MpWZrlLr1Oy1IZ9xUnsKlmO4tNI9F5S1gA1qkV7tZwjaAu0Ockqh3C19374Wh%2BlniZxj0F%2Bz0bwZecB%2B5SlCvlpG5Lh1Yp75hDY2aiYtwL62Z4oZ7gJiHuhEwV66%2FNU71PLuyfPMa8EWqbwl&X-Amz-Signature=23a3b205bdf9494c562c01f49e66eb94005e6e13316f4c07f0b6b08103550c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBQWL4P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXg%2B6Ftl8snTFtuMWFWDPLL%2FG80b%2Bc2wmbByp7HH14SwIgENLlweLD4jnMsAihVjCXbMY%2FKZCVvMhTeNeRlxN68bwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2BABiuf2841UH7AtyrcA864Nrqdovel7ta5EYLVusE0jZ9BqMJGL5TM58mrveIj3KeRaBtyvNo4xVuQKqNn0LI6%2BZyjIKMIB7%2FHhz%2BVg%2BEEhu0hhZVXg4d0DAMrJuJX%2FVqH5oIASAzEOL52gDOAC8BSe%2B6qgogjR1WdGWLwP5JGHwEHqJv355nVyNGz4sRnG9chi9ku8u7YvTqZ6O78OLtHZyqTblFQJ98xdhGB87RHCob1sa%2FV8tZtaEX%2FNt6r%2FDgDHJWEWtrSkqMvsHu0V4HCeURVLvA6Y%2FJF0W6hgow6twG5QLsiV1Q9As3B0p2LwnsXgw2Sj17fzu3YRCt9aPIY%2BPDurmoEcr6c6ZG7VQJgZdMxbdhCO3KFJvJoVpjsaeHzZm1nn7eD0lirIdKrUxLb6aU08IH%2FLr4aGjWEbDeCq4cDIH4u%2Ffj%2FDjWsFfzCtmYULZB3DlOW2%2BT%2BM7rvF21sKIC0Dj3khrFEdmXH1ZH%2BgyLmYFodp7WHzPbt2zlvfQxTIjz4hNpprYqUsT3IP3p2wGv6qpaL1ySE%2B%2F8k6Fc2OGBhRruaZHyBU5Od38Lcu9DRo1DifXBkhHM3maAkPK46vTen4NvNosxJVYZ2dIrR1TqNcyXyL8ulmdjfnwKc6JOJs2zQcS4hXHWCMIiWsMMGOqUBAJ1N9jbgSmIs9v%2FJLLSFz%2F%2BRUe%2BNTeFhXltzb%2BAFoPen0%2FV2%2B%2FFjnkgIA%2BoFLA0fI5YIIFytRPH0MpWZrlLr1Oy1IZ9xUnsKlmO4tNI9F5S1gA1qkV7tZwjaAu0Ockqh3C19374Wh%2BlniZxj0F%2Bz0bwZecB%2B5SlCvlpG5Lh1Yp75hDY2aiYtwL62Z4oZ7gJiHuhEwV66%2FNU71PLuyfPMa8EWqbwl&X-Amz-Signature=977b7b48156106161a39f7f7f23675bba0ce9c1a4202ec9fe850a29ec79620a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBQWL4P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXg%2B6Ftl8snTFtuMWFWDPLL%2FG80b%2Bc2wmbByp7HH14SwIgENLlweLD4jnMsAihVjCXbMY%2FKZCVvMhTeNeRlxN68bwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2BABiuf2841UH7AtyrcA864Nrqdovel7ta5EYLVusE0jZ9BqMJGL5TM58mrveIj3KeRaBtyvNo4xVuQKqNn0LI6%2BZyjIKMIB7%2FHhz%2BVg%2BEEhu0hhZVXg4d0DAMrJuJX%2FVqH5oIASAzEOL52gDOAC8BSe%2B6qgogjR1WdGWLwP5JGHwEHqJv355nVyNGz4sRnG9chi9ku8u7YvTqZ6O78OLtHZyqTblFQJ98xdhGB87RHCob1sa%2FV8tZtaEX%2FNt6r%2FDgDHJWEWtrSkqMvsHu0V4HCeURVLvA6Y%2FJF0W6hgow6twG5QLsiV1Q9As3B0p2LwnsXgw2Sj17fzu3YRCt9aPIY%2BPDurmoEcr6c6ZG7VQJgZdMxbdhCO3KFJvJoVpjsaeHzZm1nn7eD0lirIdKrUxLb6aU08IH%2FLr4aGjWEbDeCq4cDIH4u%2Ffj%2FDjWsFfzCtmYULZB3DlOW2%2BT%2BM7rvF21sKIC0Dj3khrFEdmXH1ZH%2BgyLmYFodp7WHzPbt2zlvfQxTIjz4hNpprYqUsT3IP3p2wGv6qpaL1ySE%2B%2F8k6Fc2OGBhRruaZHyBU5Od38Lcu9DRo1DifXBkhHM3maAkPK46vTen4NvNosxJVYZ2dIrR1TqNcyXyL8ulmdjfnwKc6JOJs2zQcS4hXHWCMIiWsMMGOqUBAJ1N9jbgSmIs9v%2FJLLSFz%2F%2BRUe%2BNTeFhXltzb%2BAFoPen0%2FV2%2B%2FFjnkgIA%2BoFLA0fI5YIIFytRPH0MpWZrlLr1Oy1IZ9xUnsKlmO4tNI9F5S1gA1qkV7tZwjaAu0Ockqh3C19374Wh%2BlniZxj0F%2Bz0bwZecB%2B5SlCvlpG5Lh1Yp75hDY2aiYtwL62Z4oZ7gJiHuhEwV66%2FNU71PLuyfPMa8EWqbwl&X-Amz-Signature=748f1194613778a57f25da174b7968dcafd06d378f9b1788131c39c0f61f822a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBQWL4P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXg%2B6Ftl8snTFtuMWFWDPLL%2FG80b%2Bc2wmbByp7HH14SwIgENLlweLD4jnMsAihVjCXbMY%2FKZCVvMhTeNeRlxN68bwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2BABiuf2841UH7AtyrcA864Nrqdovel7ta5EYLVusE0jZ9BqMJGL5TM58mrveIj3KeRaBtyvNo4xVuQKqNn0LI6%2BZyjIKMIB7%2FHhz%2BVg%2BEEhu0hhZVXg4d0DAMrJuJX%2FVqH5oIASAzEOL52gDOAC8BSe%2B6qgogjR1WdGWLwP5JGHwEHqJv355nVyNGz4sRnG9chi9ku8u7YvTqZ6O78OLtHZyqTblFQJ98xdhGB87RHCob1sa%2FV8tZtaEX%2FNt6r%2FDgDHJWEWtrSkqMvsHu0V4HCeURVLvA6Y%2FJF0W6hgow6twG5QLsiV1Q9As3B0p2LwnsXgw2Sj17fzu3YRCt9aPIY%2BPDurmoEcr6c6ZG7VQJgZdMxbdhCO3KFJvJoVpjsaeHzZm1nn7eD0lirIdKrUxLb6aU08IH%2FLr4aGjWEbDeCq4cDIH4u%2Ffj%2FDjWsFfzCtmYULZB3DlOW2%2BT%2BM7rvF21sKIC0Dj3khrFEdmXH1ZH%2BgyLmYFodp7WHzPbt2zlvfQxTIjz4hNpprYqUsT3IP3p2wGv6qpaL1ySE%2B%2F8k6Fc2OGBhRruaZHyBU5Od38Lcu9DRo1DifXBkhHM3maAkPK46vTen4NvNosxJVYZ2dIrR1TqNcyXyL8ulmdjfnwKc6JOJs2zQcS4hXHWCMIiWsMMGOqUBAJ1N9jbgSmIs9v%2FJLLSFz%2F%2BRUe%2BNTeFhXltzb%2BAFoPen0%2FV2%2B%2FFjnkgIA%2BoFLA0fI5YIIFytRPH0MpWZrlLr1Oy1IZ9xUnsKlmO4tNI9F5S1gA1qkV7tZwjaAu0Ockqh3C19374Wh%2BlniZxj0F%2Bz0bwZecB%2B5SlCvlpG5Lh1Yp75hDY2aiYtwL62Z4oZ7gJiHuhEwV66%2FNU71PLuyfPMa8EWqbwl&X-Amz-Signature=749a389f3284ebe42e48cb95faf2a380a51648b8e204dc701628db1768828dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBQWL4P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXg%2B6Ftl8snTFtuMWFWDPLL%2FG80b%2Bc2wmbByp7HH14SwIgENLlweLD4jnMsAihVjCXbMY%2FKZCVvMhTeNeRlxN68bwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2BABiuf2841UH7AtyrcA864Nrqdovel7ta5EYLVusE0jZ9BqMJGL5TM58mrveIj3KeRaBtyvNo4xVuQKqNn0LI6%2BZyjIKMIB7%2FHhz%2BVg%2BEEhu0hhZVXg4d0DAMrJuJX%2FVqH5oIASAzEOL52gDOAC8BSe%2B6qgogjR1WdGWLwP5JGHwEHqJv355nVyNGz4sRnG9chi9ku8u7YvTqZ6O78OLtHZyqTblFQJ98xdhGB87RHCob1sa%2FV8tZtaEX%2FNt6r%2FDgDHJWEWtrSkqMvsHu0V4HCeURVLvA6Y%2FJF0W6hgow6twG5QLsiV1Q9As3B0p2LwnsXgw2Sj17fzu3YRCt9aPIY%2BPDurmoEcr6c6ZG7VQJgZdMxbdhCO3KFJvJoVpjsaeHzZm1nn7eD0lirIdKrUxLb6aU08IH%2FLr4aGjWEbDeCq4cDIH4u%2Ffj%2FDjWsFfzCtmYULZB3DlOW2%2BT%2BM7rvF21sKIC0Dj3khrFEdmXH1ZH%2BgyLmYFodp7WHzPbt2zlvfQxTIjz4hNpprYqUsT3IP3p2wGv6qpaL1ySE%2B%2F8k6Fc2OGBhRruaZHyBU5Od38Lcu9DRo1DifXBkhHM3maAkPK46vTen4NvNosxJVYZ2dIrR1TqNcyXyL8ulmdjfnwKc6JOJs2zQcS4hXHWCMIiWsMMGOqUBAJ1N9jbgSmIs9v%2FJLLSFz%2F%2BRUe%2BNTeFhXltzb%2BAFoPen0%2FV2%2B%2FFjnkgIA%2BoFLA0fI5YIIFytRPH0MpWZrlLr1Oy1IZ9xUnsKlmO4tNI9F5S1gA1qkV7tZwjaAu0Ockqh3C19374Wh%2BlniZxj0F%2Bz0bwZecB%2B5SlCvlpG5Lh1Yp75hDY2aiYtwL62Z4oZ7gJiHuhEwV66%2FNU71PLuyfPMa8EWqbwl&X-Amz-Signature=41d79564eafc485cf686e58be6a34644e0fd3ee414fd17dd56b205fd1eb46c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBQWL4P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXg%2B6Ftl8snTFtuMWFWDPLL%2FG80b%2Bc2wmbByp7HH14SwIgENLlweLD4jnMsAihVjCXbMY%2FKZCVvMhTeNeRlxN68bwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2BABiuf2841UH7AtyrcA864Nrqdovel7ta5EYLVusE0jZ9BqMJGL5TM58mrveIj3KeRaBtyvNo4xVuQKqNn0LI6%2BZyjIKMIB7%2FHhz%2BVg%2BEEhu0hhZVXg4d0DAMrJuJX%2FVqH5oIASAzEOL52gDOAC8BSe%2B6qgogjR1WdGWLwP5JGHwEHqJv355nVyNGz4sRnG9chi9ku8u7YvTqZ6O78OLtHZyqTblFQJ98xdhGB87RHCob1sa%2FV8tZtaEX%2FNt6r%2FDgDHJWEWtrSkqMvsHu0V4HCeURVLvA6Y%2FJF0W6hgow6twG5QLsiV1Q9As3B0p2LwnsXgw2Sj17fzu3YRCt9aPIY%2BPDurmoEcr6c6ZG7VQJgZdMxbdhCO3KFJvJoVpjsaeHzZm1nn7eD0lirIdKrUxLb6aU08IH%2FLr4aGjWEbDeCq4cDIH4u%2Ffj%2FDjWsFfzCtmYULZB3DlOW2%2BT%2BM7rvF21sKIC0Dj3khrFEdmXH1ZH%2BgyLmYFodp7WHzPbt2zlvfQxTIjz4hNpprYqUsT3IP3p2wGv6qpaL1ySE%2B%2F8k6Fc2OGBhRruaZHyBU5Od38Lcu9DRo1DifXBkhHM3maAkPK46vTen4NvNosxJVYZ2dIrR1TqNcyXyL8ulmdjfnwKc6JOJs2zQcS4hXHWCMIiWsMMGOqUBAJ1N9jbgSmIs9v%2FJLLSFz%2F%2BRUe%2BNTeFhXltzb%2BAFoPen0%2FV2%2B%2FFjnkgIA%2BoFLA0fI5YIIFytRPH0MpWZrlLr1Oy1IZ9xUnsKlmO4tNI9F5S1gA1qkV7tZwjaAu0Ockqh3C19374Wh%2BlniZxj0F%2Bz0bwZecB%2B5SlCvlpG5Lh1Yp75hDY2aiYtwL62Z4oZ7gJiHuhEwV66%2FNU71PLuyfPMa8EWqbwl&X-Amz-Signature=94618dace2397da8bb953c908c4d22d28bee02106e9d14ee900121048a224720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBQWL4P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXg%2B6Ftl8snTFtuMWFWDPLL%2FG80b%2Bc2wmbByp7HH14SwIgENLlweLD4jnMsAihVjCXbMY%2FKZCVvMhTeNeRlxN68bwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2BABiuf2841UH7AtyrcA864Nrqdovel7ta5EYLVusE0jZ9BqMJGL5TM58mrveIj3KeRaBtyvNo4xVuQKqNn0LI6%2BZyjIKMIB7%2FHhz%2BVg%2BEEhu0hhZVXg4d0DAMrJuJX%2FVqH5oIASAzEOL52gDOAC8BSe%2B6qgogjR1WdGWLwP5JGHwEHqJv355nVyNGz4sRnG9chi9ku8u7YvTqZ6O78OLtHZyqTblFQJ98xdhGB87RHCob1sa%2FV8tZtaEX%2FNt6r%2FDgDHJWEWtrSkqMvsHu0V4HCeURVLvA6Y%2FJF0W6hgow6twG5QLsiV1Q9As3B0p2LwnsXgw2Sj17fzu3YRCt9aPIY%2BPDurmoEcr6c6ZG7VQJgZdMxbdhCO3KFJvJoVpjsaeHzZm1nn7eD0lirIdKrUxLb6aU08IH%2FLr4aGjWEbDeCq4cDIH4u%2Ffj%2FDjWsFfzCtmYULZB3DlOW2%2BT%2BM7rvF21sKIC0Dj3khrFEdmXH1ZH%2BgyLmYFodp7WHzPbt2zlvfQxTIjz4hNpprYqUsT3IP3p2wGv6qpaL1ySE%2B%2F8k6Fc2OGBhRruaZHyBU5Od38Lcu9DRo1DifXBkhHM3maAkPK46vTen4NvNosxJVYZ2dIrR1TqNcyXyL8ulmdjfnwKc6JOJs2zQcS4hXHWCMIiWsMMGOqUBAJ1N9jbgSmIs9v%2FJLLSFz%2F%2BRUe%2BNTeFhXltzb%2BAFoPen0%2FV2%2B%2FFjnkgIA%2BoFLA0fI5YIIFytRPH0MpWZrlLr1Oy1IZ9xUnsKlmO4tNI9F5S1gA1qkV7tZwjaAu0Ockqh3C19374Wh%2BlniZxj0F%2Bz0bwZecB%2B5SlCvlpG5Lh1Yp75hDY2aiYtwL62Z4oZ7gJiHuhEwV66%2FNU71PLuyfPMa8EWqbwl&X-Amz-Signature=f8a2e77a80a73b3636ad8c85ad46bbed92038edea1ef43f40c02cdd5318f45fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
