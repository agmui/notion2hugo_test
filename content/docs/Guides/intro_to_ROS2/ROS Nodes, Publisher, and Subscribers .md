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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVVQLJB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGJRSdxx7BLGzMMDvwkCpVr44I%2B499t5LxWEwL75kZX7AiAiNiaCSSueiS8rfeQqW1tBVLdKWNj0PG0FIlGneoG5%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMl8jgmnzMzoVWd0K5KtwDWG6jpAK91TN9%2Bi5ehbPJgL3Geck91WKZ8ceMYrkYxfd%2FTeZ7x9gg6Gcm3gbYO6umihUSHd8i1EM6p7bthbqYBiknHuT45GELTWaQbyYCHUOWubdjUJcJYUadi5h1K%2Bvb5HozGrWp%2B27ptwvyg66Y4FxMQmXH1x1PHVAZ93RPkHbnFfHPtqkLdRt9vCzKUZZAFhC%2BkdCiD8vRebcXE0xgjl9NCS0HJPx5pB8nsPaUZSp6cbhCCYzGt763sOg3AiHT0lW%2BFZwuH51MY1J7JCEsIVSpMXqmCaTSP4Z5lnZJ8c4eZLhIDyvlkAOYTp6p9nM1%2BpSu7b8Gh%2F5XsnC1hgwOOl4vnQCDJRfz1qPJOzUCeR0%2F7zPk30hTw%2BcCllmqk5y%2B1KpbLQ2pcH6bZJ7CtvoqHTMX9smDf1km%2FWyuW0rZdJUJ6LEx%2B1AWytdTjgCWfQ7xu0XIJI0SL2dwf6IPOp6Ssrch4IQ8wYr%2Fxi2QBAffQQ5YtfPB1zTpXOObUvk3d4ZrM%2B8BJyRSm6s1vJ%2BLgbHAHp7%2Bg94dgCUsl%2Fk9IoTDIWdYVG8K1dQNg7L13%2BKl1Gmun4KzKrKSBujRc7R2Mr1HQhlajmVkRRCTtbHQeJU%2B1esk3LRLM5RZ%2Fz%2F1B%2FUwtdjLwQY6pgFczCM9xWi6B5G%2FAbDkzB1EO0%2FbtzZUD7bCp2opFfx%2FHHlRw4Qh%2Bn55MzOUIYQ104v%2Bs0%2F5jAzVEvL0XxHMLi24uflhdWL2EeyhHBsFC8INC7bIrduUqzIst79Urs2XXknksZxH%2FOq6T4XPwnCbKZ%2BbnzM3ii67VNhLRWseZq9c2ucyQq8Vpjjus0u9g8v6dpHNhCAsA5JUEk7owe9IrVJ3L8wgH6UJ&X-Amz-Signature=c9ca97bac64e673608b2a1a848be4efae6709f7d52f2e69cc39a8f2e1435b22f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVVQLJB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGJRSdxx7BLGzMMDvwkCpVr44I%2B499t5LxWEwL75kZX7AiAiNiaCSSueiS8rfeQqW1tBVLdKWNj0PG0FIlGneoG5%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMl8jgmnzMzoVWd0K5KtwDWG6jpAK91TN9%2Bi5ehbPJgL3Geck91WKZ8ceMYrkYxfd%2FTeZ7x9gg6Gcm3gbYO6umihUSHd8i1EM6p7bthbqYBiknHuT45GELTWaQbyYCHUOWubdjUJcJYUadi5h1K%2Bvb5HozGrWp%2B27ptwvyg66Y4FxMQmXH1x1PHVAZ93RPkHbnFfHPtqkLdRt9vCzKUZZAFhC%2BkdCiD8vRebcXE0xgjl9NCS0HJPx5pB8nsPaUZSp6cbhCCYzGt763sOg3AiHT0lW%2BFZwuH51MY1J7JCEsIVSpMXqmCaTSP4Z5lnZJ8c4eZLhIDyvlkAOYTp6p9nM1%2BpSu7b8Gh%2F5XsnC1hgwOOl4vnQCDJRfz1qPJOzUCeR0%2F7zPk30hTw%2BcCllmqk5y%2B1KpbLQ2pcH6bZJ7CtvoqHTMX9smDf1km%2FWyuW0rZdJUJ6LEx%2B1AWytdTjgCWfQ7xu0XIJI0SL2dwf6IPOp6Ssrch4IQ8wYr%2Fxi2QBAffQQ5YtfPB1zTpXOObUvk3d4ZrM%2B8BJyRSm6s1vJ%2BLgbHAHp7%2Bg94dgCUsl%2Fk9IoTDIWdYVG8K1dQNg7L13%2BKl1Gmun4KzKrKSBujRc7R2Mr1HQhlajmVkRRCTtbHQeJU%2B1esk3LRLM5RZ%2Fz%2F1B%2FUwtdjLwQY6pgFczCM9xWi6B5G%2FAbDkzB1EO0%2FbtzZUD7bCp2opFfx%2FHHlRw4Qh%2Bn55MzOUIYQ104v%2Bs0%2F5jAzVEvL0XxHMLi24uflhdWL2EeyhHBsFC8INC7bIrduUqzIst79Urs2XXknksZxH%2FOq6T4XPwnCbKZ%2BbnzM3ii67VNhLRWseZq9c2ucyQq8Vpjjus0u9g8v6dpHNhCAsA5JUEk7owe9IrVJ3L8wgH6UJ&X-Amz-Signature=8e500e9e3875c2606b4460323aa58729949db9777ecd0a69c10191ffc4ffdcb6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVVQLJB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGJRSdxx7BLGzMMDvwkCpVr44I%2B499t5LxWEwL75kZX7AiAiNiaCSSueiS8rfeQqW1tBVLdKWNj0PG0FIlGneoG5%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMl8jgmnzMzoVWd0K5KtwDWG6jpAK91TN9%2Bi5ehbPJgL3Geck91WKZ8ceMYrkYxfd%2FTeZ7x9gg6Gcm3gbYO6umihUSHd8i1EM6p7bthbqYBiknHuT45GELTWaQbyYCHUOWubdjUJcJYUadi5h1K%2Bvb5HozGrWp%2B27ptwvyg66Y4FxMQmXH1x1PHVAZ93RPkHbnFfHPtqkLdRt9vCzKUZZAFhC%2BkdCiD8vRebcXE0xgjl9NCS0HJPx5pB8nsPaUZSp6cbhCCYzGt763sOg3AiHT0lW%2BFZwuH51MY1J7JCEsIVSpMXqmCaTSP4Z5lnZJ8c4eZLhIDyvlkAOYTp6p9nM1%2BpSu7b8Gh%2F5XsnC1hgwOOl4vnQCDJRfz1qPJOzUCeR0%2F7zPk30hTw%2BcCllmqk5y%2B1KpbLQ2pcH6bZJ7CtvoqHTMX9smDf1km%2FWyuW0rZdJUJ6LEx%2B1AWytdTjgCWfQ7xu0XIJI0SL2dwf6IPOp6Ssrch4IQ8wYr%2Fxi2QBAffQQ5YtfPB1zTpXOObUvk3d4ZrM%2B8BJyRSm6s1vJ%2BLgbHAHp7%2Bg94dgCUsl%2Fk9IoTDIWdYVG8K1dQNg7L13%2BKl1Gmun4KzKrKSBujRc7R2Mr1HQhlajmVkRRCTtbHQeJU%2B1esk3LRLM5RZ%2Fz%2F1B%2FUwtdjLwQY6pgFczCM9xWi6B5G%2FAbDkzB1EO0%2FbtzZUD7bCp2opFfx%2FHHlRw4Qh%2Bn55MzOUIYQ104v%2Bs0%2F5jAzVEvL0XxHMLi24uflhdWL2EeyhHBsFC8INC7bIrduUqzIst79Urs2XXknksZxH%2FOq6T4XPwnCbKZ%2BbnzM3ii67VNhLRWseZq9c2ucyQq8Vpjjus0u9g8v6dpHNhCAsA5JUEk7owe9IrVJ3L8wgH6UJ&X-Amz-Signature=6581fe23db2a3226eaf3ce5a6ec3fe06c26f0f576ddb4cd7d73cb1e5263fc0da&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVVQLJB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGJRSdxx7BLGzMMDvwkCpVr44I%2B499t5LxWEwL75kZX7AiAiNiaCSSueiS8rfeQqW1tBVLdKWNj0PG0FIlGneoG5%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMl8jgmnzMzoVWd0K5KtwDWG6jpAK91TN9%2Bi5ehbPJgL3Geck91WKZ8ceMYrkYxfd%2FTeZ7x9gg6Gcm3gbYO6umihUSHd8i1EM6p7bthbqYBiknHuT45GELTWaQbyYCHUOWubdjUJcJYUadi5h1K%2Bvb5HozGrWp%2B27ptwvyg66Y4FxMQmXH1x1PHVAZ93RPkHbnFfHPtqkLdRt9vCzKUZZAFhC%2BkdCiD8vRebcXE0xgjl9NCS0HJPx5pB8nsPaUZSp6cbhCCYzGt763sOg3AiHT0lW%2BFZwuH51MY1J7JCEsIVSpMXqmCaTSP4Z5lnZJ8c4eZLhIDyvlkAOYTp6p9nM1%2BpSu7b8Gh%2F5XsnC1hgwOOl4vnQCDJRfz1qPJOzUCeR0%2F7zPk30hTw%2BcCllmqk5y%2B1KpbLQ2pcH6bZJ7CtvoqHTMX9smDf1km%2FWyuW0rZdJUJ6LEx%2B1AWytdTjgCWfQ7xu0XIJI0SL2dwf6IPOp6Ssrch4IQ8wYr%2Fxi2QBAffQQ5YtfPB1zTpXOObUvk3d4ZrM%2B8BJyRSm6s1vJ%2BLgbHAHp7%2Bg94dgCUsl%2Fk9IoTDIWdYVG8K1dQNg7L13%2BKl1Gmun4KzKrKSBujRc7R2Mr1HQhlajmVkRRCTtbHQeJU%2B1esk3LRLM5RZ%2Fz%2F1B%2FUwtdjLwQY6pgFczCM9xWi6B5G%2FAbDkzB1EO0%2FbtzZUD7bCp2opFfx%2FHHlRw4Qh%2Bn55MzOUIYQ104v%2Bs0%2F5jAzVEvL0XxHMLi24uflhdWL2EeyhHBsFC8INC7bIrduUqzIst79Urs2XXknksZxH%2FOq6T4XPwnCbKZ%2BbnzM3ii67VNhLRWseZq9c2ucyQq8Vpjjus0u9g8v6dpHNhCAsA5JUEk7owe9IrVJ3L8wgH6UJ&X-Amz-Signature=6e55c269e2b397e669b1abb0d108985aa77a1d0f12a76c43df274bf0d69ded0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVVQLJB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGJRSdxx7BLGzMMDvwkCpVr44I%2B499t5LxWEwL75kZX7AiAiNiaCSSueiS8rfeQqW1tBVLdKWNj0PG0FIlGneoG5%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMl8jgmnzMzoVWd0K5KtwDWG6jpAK91TN9%2Bi5ehbPJgL3Geck91WKZ8ceMYrkYxfd%2FTeZ7x9gg6Gcm3gbYO6umihUSHd8i1EM6p7bthbqYBiknHuT45GELTWaQbyYCHUOWubdjUJcJYUadi5h1K%2Bvb5HozGrWp%2B27ptwvyg66Y4FxMQmXH1x1PHVAZ93RPkHbnFfHPtqkLdRt9vCzKUZZAFhC%2BkdCiD8vRebcXE0xgjl9NCS0HJPx5pB8nsPaUZSp6cbhCCYzGt763sOg3AiHT0lW%2BFZwuH51MY1J7JCEsIVSpMXqmCaTSP4Z5lnZJ8c4eZLhIDyvlkAOYTp6p9nM1%2BpSu7b8Gh%2F5XsnC1hgwOOl4vnQCDJRfz1qPJOzUCeR0%2F7zPk30hTw%2BcCllmqk5y%2B1KpbLQ2pcH6bZJ7CtvoqHTMX9smDf1km%2FWyuW0rZdJUJ6LEx%2B1AWytdTjgCWfQ7xu0XIJI0SL2dwf6IPOp6Ssrch4IQ8wYr%2Fxi2QBAffQQ5YtfPB1zTpXOObUvk3d4ZrM%2B8BJyRSm6s1vJ%2BLgbHAHp7%2Bg94dgCUsl%2Fk9IoTDIWdYVG8K1dQNg7L13%2BKl1Gmun4KzKrKSBujRc7R2Mr1HQhlajmVkRRCTtbHQeJU%2B1esk3LRLM5RZ%2Fz%2F1B%2FUwtdjLwQY6pgFczCM9xWi6B5G%2FAbDkzB1EO0%2FbtzZUD7bCp2opFfx%2FHHlRw4Qh%2Bn55MzOUIYQ104v%2Bs0%2F5jAzVEvL0XxHMLi24uflhdWL2EeyhHBsFC8INC7bIrduUqzIst79Urs2XXknksZxH%2FOq6T4XPwnCbKZ%2BbnzM3ii67VNhLRWseZq9c2ucyQq8Vpjjus0u9g8v6dpHNhCAsA5JUEk7owe9IrVJ3L8wgH6UJ&X-Amz-Signature=f372277c21ded4176fc2d6fec6c1976f4383300e1727b12380fb08ef0dc25e70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVVQLJB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGJRSdxx7BLGzMMDvwkCpVr44I%2B499t5LxWEwL75kZX7AiAiNiaCSSueiS8rfeQqW1tBVLdKWNj0PG0FIlGneoG5%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMl8jgmnzMzoVWd0K5KtwDWG6jpAK91TN9%2Bi5ehbPJgL3Geck91WKZ8ceMYrkYxfd%2FTeZ7x9gg6Gcm3gbYO6umihUSHd8i1EM6p7bthbqYBiknHuT45GELTWaQbyYCHUOWubdjUJcJYUadi5h1K%2Bvb5HozGrWp%2B27ptwvyg66Y4FxMQmXH1x1PHVAZ93RPkHbnFfHPtqkLdRt9vCzKUZZAFhC%2BkdCiD8vRebcXE0xgjl9NCS0HJPx5pB8nsPaUZSp6cbhCCYzGt763sOg3AiHT0lW%2BFZwuH51MY1J7JCEsIVSpMXqmCaTSP4Z5lnZJ8c4eZLhIDyvlkAOYTp6p9nM1%2BpSu7b8Gh%2F5XsnC1hgwOOl4vnQCDJRfz1qPJOzUCeR0%2F7zPk30hTw%2BcCllmqk5y%2B1KpbLQ2pcH6bZJ7CtvoqHTMX9smDf1km%2FWyuW0rZdJUJ6LEx%2B1AWytdTjgCWfQ7xu0XIJI0SL2dwf6IPOp6Ssrch4IQ8wYr%2Fxi2QBAffQQ5YtfPB1zTpXOObUvk3d4ZrM%2B8BJyRSm6s1vJ%2BLgbHAHp7%2Bg94dgCUsl%2Fk9IoTDIWdYVG8K1dQNg7L13%2BKl1Gmun4KzKrKSBujRc7R2Mr1HQhlajmVkRRCTtbHQeJU%2B1esk3LRLM5RZ%2Fz%2F1B%2FUwtdjLwQY6pgFczCM9xWi6B5G%2FAbDkzB1EO0%2FbtzZUD7bCp2opFfx%2FHHlRw4Qh%2Bn55MzOUIYQ104v%2Bs0%2F5jAzVEvL0XxHMLi24uflhdWL2EeyhHBsFC8INC7bIrduUqzIst79Urs2XXknksZxH%2FOq6T4XPwnCbKZ%2BbnzM3ii67VNhLRWseZq9c2ucyQq8Vpjjus0u9g8v6dpHNhCAsA5JUEk7owe9IrVJ3L8wgH6UJ&X-Amz-Signature=3981dfd59294a0ba325e7c123f25f44a9587d3cfcdf35aac6f2e66b28781fed7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVVQLJB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGJRSdxx7BLGzMMDvwkCpVr44I%2B499t5LxWEwL75kZX7AiAiNiaCSSueiS8rfeQqW1tBVLdKWNj0PG0FIlGneoG5%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMl8jgmnzMzoVWd0K5KtwDWG6jpAK91TN9%2Bi5ehbPJgL3Geck91WKZ8ceMYrkYxfd%2FTeZ7x9gg6Gcm3gbYO6umihUSHd8i1EM6p7bthbqYBiknHuT45GELTWaQbyYCHUOWubdjUJcJYUadi5h1K%2Bvb5HozGrWp%2B27ptwvyg66Y4FxMQmXH1x1PHVAZ93RPkHbnFfHPtqkLdRt9vCzKUZZAFhC%2BkdCiD8vRebcXE0xgjl9NCS0HJPx5pB8nsPaUZSp6cbhCCYzGt763sOg3AiHT0lW%2BFZwuH51MY1J7JCEsIVSpMXqmCaTSP4Z5lnZJ8c4eZLhIDyvlkAOYTp6p9nM1%2BpSu7b8Gh%2F5XsnC1hgwOOl4vnQCDJRfz1qPJOzUCeR0%2F7zPk30hTw%2BcCllmqk5y%2B1KpbLQ2pcH6bZJ7CtvoqHTMX9smDf1km%2FWyuW0rZdJUJ6LEx%2B1AWytdTjgCWfQ7xu0XIJI0SL2dwf6IPOp6Ssrch4IQ8wYr%2Fxi2QBAffQQ5YtfPB1zTpXOObUvk3d4ZrM%2B8BJyRSm6s1vJ%2BLgbHAHp7%2Bg94dgCUsl%2Fk9IoTDIWdYVG8K1dQNg7L13%2BKl1Gmun4KzKrKSBujRc7R2Mr1HQhlajmVkRRCTtbHQeJU%2B1esk3LRLM5RZ%2Fz%2F1B%2FUwtdjLwQY6pgFczCM9xWi6B5G%2FAbDkzB1EO0%2FbtzZUD7bCp2opFfx%2FHHlRw4Qh%2Bn55MzOUIYQ104v%2Bs0%2F5jAzVEvL0XxHMLi24uflhdWL2EeyhHBsFC8INC7bIrduUqzIst79Urs2XXknksZxH%2FOq6T4XPwnCbKZ%2BbnzM3ii67VNhLRWseZq9c2ucyQq8Vpjjus0u9g8v6dpHNhCAsA5JUEk7owe9IrVJ3L8wgH6UJ&X-Amz-Signature=30ba2374f8471f6103a12ed14ac6b6021c3bb2940f795dcac1376c48e04fe8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVVQLJB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGJRSdxx7BLGzMMDvwkCpVr44I%2B499t5LxWEwL75kZX7AiAiNiaCSSueiS8rfeQqW1tBVLdKWNj0PG0FIlGneoG5%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMl8jgmnzMzoVWd0K5KtwDWG6jpAK91TN9%2Bi5ehbPJgL3Geck91WKZ8ceMYrkYxfd%2FTeZ7x9gg6Gcm3gbYO6umihUSHd8i1EM6p7bthbqYBiknHuT45GELTWaQbyYCHUOWubdjUJcJYUadi5h1K%2Bvb5HozGrWp%2B27ptwvyg66Y4FxMQmXH1x1PHVAZ93RPkHbnFfHPtqkLdRt9vCzKUZZAFhC%2BkdCiD8vRebcXE0xgjl9NCS0HJPx5pB8nsPaUZSp6cbhCCYzGt763sOg3AiHT0lW%2BFZwuH51MY1J7JCEsIVSpMXqmCaTSP4Z5lnZJ8c4eZLhIDyvlkAOYTp6p9nM1%2BpSu7b8Gh%2F5XsnC1hgwOOl4vnQCDJRfz1qPJOzUCeR0%2F7zPk30hTw%2BcCllmqk5y%2B1KpbLQ2pcH6bZJ7CtvoqHTMX9smDf1km%2FWyuW0rZdJUJ6LEx%2B1AWytdTjgCWfQ7xu0XIJI0SL2dwf6IPOp6Ssrch4IQ8wYr%2Fxi2QBAffQQ5YtfPB1zTpXOObUvk3d4ZrM%2B8BJyRSm6s1vJ%2BLgbHAHp7%2Bg94dgCUsl%2Fk9IoTDIWdYVG8K1dQNg7L13%2BKl1Gmun4KzKrKSBujRc7R2Mr1HQhlajmVkRRCTtbHQeJU%2B1esk3LRLM5RZ%2Fz%2F1B%2FUwtdjLwQY6pgFczCM9xWi6B5G%2FAbDkzB1EO0%2FbtzZUD7bCp2opFfx%2FHHlRw4Qh%2Bn55MzOUIYQ104v%2Bs0%2F5jAzVEvL0XxHMLi24uflhdWL2EeyhHBsFC8INC7bIrduUqzIst79Urs2XXknksZxH%2FOq6T4XPwnCbKZ%2BbnzM3ii67VNhLRWseZq9c2ucyQq8Vpjjus0u9g8v6dpHNhCAsA5JUEk7owe9IrVJ3L8wgH6UJ&X-Amz-Signature=2f626c802d66f3e43f046595bd25ecb52cbf17e080388dfe4a9b40a88dc158dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
