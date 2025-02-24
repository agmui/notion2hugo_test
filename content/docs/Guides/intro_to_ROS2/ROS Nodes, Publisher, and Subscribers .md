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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3H35IF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV4cw%2Fn9KbB10B0enw3njsWvuzJpPHa3mBFArN9Rcs%2FAiAGfLq5ddt0SRqhIV7x2PEr6pVrmKk8s%2Ba%2BcHgerk5%2BKir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM92AOz2NOhhPbnOOsKtwDdWiCEC6U0Niol9sTOq4MpoyJrW4jLCmNWL3hGftebeOq2lSyFnN%2FqGYTrqjUNWwsGw6ME8jHF2O24O8eM43eFLgb0F93%2Fn8tC88KiYkMye%2FTsnBCLIxEt%2FbUNMIeXXWAEGjIRrm9YxW98fFrLwyIfU4QgTIF8kK3GLSyDTLHVwjXlj5v%2Fu1%2B3M%2B%2FoowE8rPoB6JBW1BG1L4qhWI7f%2BqsSiSOCeB8o2ugtav%2FODFjFEwF9Hdy6dIRwY%2BcUI4j29pa8RmEa5sYDdcpPYaw9IaVvSxr3PhtPG3DysAAeNWFBZ3YsM5BRGRZNkgq0C2SeGy8zeeU7n1b12m%2Bi9nCTwOgaO1LASgeHxQSCzi9qXZMypfTRnoajx0rJlhrCRgor0u2Yy%2B66qnJXG1MZiYK3%2BDzdADUiacNnSXyBPTFU5OI453zs4Es6rbSpqQS8Csfb3FnBS2ZViyCxG1ZUYmMmndfam%2BufvIKf0z%2FciEVqWh8Y0q3s3PpzipOzZh5nutKTqoxpwnMs%2BWjh5nzNffP608ZixvdgrpUM0S%2FSzbcVEOl7ZMyfUr3ysXhQP%2Bl%2BPIyAFagJqY8TtqmtetcMRCPUNDuAkqbl%2FtrAO7ersoAJ2QKeYdogmI8zCkXZZIcWKsw273yvQY6pgG3nQOYYPrh61jJF6iR5bT5d9qdwTixbrS4NSiuBbwyZauFpqGlbPu%2F%2Bh9d7%2FmBsHP3HTdM5o9gY%2BYnaEAkRl9A9u%2BxzUxfCfA%2Fzj%2FmjMHDFJjSlyuGnyGbj4dWoJywcUIohA0DwXXeTMKu1iOJy0Kp1nZl9oy7OvckPq3mjayMj6lkrl20BASyK58KWtxSG%2FFJgXojkg9nKJXwwY7mrUCrycevl4ri&X-Amz-Signature=40c87460a58898c28225ab316877ccd47b56fc65c315de856bad493e7fa72278&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3H35IF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV4cw%2Fn9KbB10B0enw3njsWvuzJpPHa3mBFArN9Rcs%2FAiAGfLq5ddt0SRqhIV7x2PEr6pVrmKk8s%2Ba%2BcHgerk5%2BKir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM92AOz2NOhhPbnOOsKtwDdWiCEC6U0Niol9sTOq4MpoyJrW4jLCmNWL3hGftebeOq2lSyFnN%2FqGYTrqjUNWwsGw6ME8jHF2O24O8eM43eFLgb0F93%2Fn8tC88KiYkMye%2FTsnBCLIxEt%2FbUNMIeXXWAEGjIRrm9YxW98fFrLwyIfU4QgTIF8kK3GLSyDTLHVwjXlj5v%2Fu1%2B3M%2B%2FoowE8rPoB6JBW1BG1L4qhWI7f%2BqsSiSOCeB8o2ugtav%2FODFjFEwF9Hdy6dIRwY%2BcUI4j29pa8RmEa5sYDdcpPYaw9IaVvSxr3PhtPG3DysAAeNWFBZ3YsM5BRGRZNkgq0C2SeGy8zeeU7n1b12m%2Bi9nCTwOgaO1LASgeHxQSCzi9qXZMypfTRnoajx0rJlhrCRgor0u2Yy%2B66qnJXG1MZiYK3%2BDzdADUiacNnSXyBPTFU5OI453zs4Es6rbSpqQS8Csfb3FnBS2ZViyCxG1ZUYmMmndfam%2BufvIKf0z%2FciEVqWh8Y0q3s3PpzipOzZh5nutKTqoxpwnMs%2BWjh5nzNffP608ZixvdgrpUM0S%2FSzbcVEOl7ZMyfUr3ysXhQP%2Bl%2BPIyAFagJqY8TtqmtetcMRCPUNDuAkqbl%2FtrAO7ersoAJ2QKeYdogmI8zCkXZZIcWKsw273yvQY6pgG3nQOYYPrh61jJF6iR5bT5d9qdwTixbrS4NSiuBbwyZauFpqGlbPu%2F%2Bh9d7%2FmBsHP3HTdM5o9gY%2BYnaEAkRl9A9u%2BxzUxfCfA%2Fzj%2FmjMHDFJjSlyuGnyGbj4dWoJywcUIohA0DwXXeTMKu1iOJy0Kp1nZl9oy7OvckPq3mjayMj6lkrl20BASyK58KWtxSG%2FFJgXojkg9nKJXwwY7mrUCrycevl4ri&X-Amz-Signature=fc3ae370b166d1cbd092451d61c4d1aec7e55e1cf519995a856a01ecd7d0715b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3H35IF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV4cw%2Fn9KbB10B0enw3njsWvuzJpPHa3mBFArN9Rcs%2FAiAGfLq5ddt0SRqhIV7x2PEr6pVrmKk8s%2Ba%2BcHgerk5%2BKir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM92AOz2NOhhPbnOOsKtwDdWiCEC6U0Niol9sTOq4MpoyJrW4jLCmNWL3hGftebeOq2lSyFnN%2FqGYTrqjUNWwsGw6ME8jHF2O24O8eM43eFLgb0F93%2Fn8tC88KiYkMye%2FTsnBCLIxEt%2FbUNMIeXXWAEGjIRrm9YxW98fFrLwyIfU4QgTIF8kK3GLSyDTLHVwjXlj5v%2Fu1%2B3M%2B%2FoowE8rPoB6JBW1BG1L4qhWI7f%2BqsSiSOCeB8o2ugtav%2FODFjFEwF9Hdy6dIRwY%2BcUI4j29pa8RmEa5sYDdcpPYaw9IaVvSxr3PhtPG3DysAAeNWFBZ3YsM5BRGRZNkgq0C2SeGy8zeeU7n1b12m%2Bi9nCTwOgaO1LASgeHxQSCzi9qXZMypfTRnoajx0rJlhrCRgor0u2Yy%2B66qnJXG1MZiYK3%2BDzdADUiacNnSXyBPTFU5OI453zs4Es6rbSpqQS8Csfb3FnBS2ZViyCxG1ZUYmMmndfam%2BufvIKf0z%2FciEVqWh8Y0q3s3PpzipOzZh5nutKTqoxpwnMs%2BWjh5nzNffP608ZixvdgrpUM0S%2FSzbcVEOl7ZMyfUr3ysXhQP%2Bl%2BPIyAFagJqY8TtqmtetcMRCPUNDuAkqbl%2FtrAO7ersoAJ2QKeYdogmI8zCkXZZIcWKsw273yvQY6pgG3nQOYYPrh61jJF6iR5bT5d9qdwTixbrS4NSiuBbwyZauFpqGlbPu%2F%2Bh9d7%2FmBsHP3HTdM5o9gY%2BYnaEAkRl9A9u%2BxzUxfCfA%2Fzj%2FmjMHDFJjSlyuGnyGbj4dWoJywcUIohA0DwXXeTMKu1iOJy0Kp1nZl9oy7OvckPq3mjayMj6lkrl20BASyK58KWtxSG%2FFJgXojkg9nKJXwwY7mrUCrycevl4ri&X-Amz-Signature=a2fe70d3ea51146381efd80d12408b92a8b98c785145d4427ef4bd507fa5fbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3H35IF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV4cw%2Fn9KbB10B0enw3njsWvuzJpPHa3mBFArN9Rcs%2FAiAGfLq5ddt0SRqhIV7x2PEr6pVrmKk8s%2Ba%2BcHgerk5%2BKir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM92AOz2NOhhPbnOOsKtwDdWiCEC6U0Niol9sTOq4MpoyJrW4jLCmNWL3hGftebeOq2lSyFnN%2FqGYTrqjUNWwsGw6ME8jHF2O24O8eM43eFLgb0F93%2Fn8tC88KiYkMye%2FTsnBCLIxEt%2FbUNMIeXXWAEGjIRrm9YxW98fFrLwyIfU4QgTIF8kK3GLSyDTLHVwjXlj5v%2Fu1%2B3M%2B%2FoowE8rPoB6JBW1BG1L4qhWI7f%2BqsSiSOCeB8o2ugtav%2FODFjFEwF9Hdy6dIRwY%2BcUI4j29pa8RmEa5sYDdcpPYaw9IaVvSxr3PhtPG3DysAAeNWFBZ3YsM5BRGRZNkgq0C2SeGy8zeeU7n1b12m%2Bi9nCTwOgaO1LASgeHxQSCzi9qXZMypfTRnoajx0rJlhrCRgor0u2Yy%2B66qnJXG1MZiYK3%2BDzdADUiacNnSXyBPTFU5OI453zs4Es6rbSpqQS8Csfb3FnBS2ZViyCxG1ZUYmMmndfam%2BufvIKf0z%2FciEVqWh8Y0q3s3PpzipOzZh5nutKTqoxpwnMs%2BWjh5nzNffP608ZixvdgrpUM0S%2FSzbcVEOl7ZMyfUr3ysXhQP%2Bl%2BPIyAFagJqY8TtqmtetcMRCPUNDuAkqbl%2FtrAO7ersoAJ2QKeYdogmI8zCkXZZIcWKsw273yvQY6pgG3nQOYYPrh61jJF6iR5bT5d9qdwTixbrS4NSiuBbwyZauFpqGlbPu%2F%2Bh9d7%2FmBsHP3HTdM5o9gY%2BYnaEAkRl9A9u%2BxzUxfCfA%2Fzj%2FmjMHDFJjSlyuGnyGbj4dWoJywcUIohA0DwXXeTMKu1iOJy0Kp1nZl9oy7OvckPq3mjayMj6lkrl20BASyK58KWtxSG%2FFJgXojkg9nKJXwwY7mrUCrycevl4ri&X-Amz-Signature=9a0c1f797961a27073b9065b07f7624f72956bcfd7009ff9d5392fe0eeda3975&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3H35IF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV4cw%2Fn9KbB10B0enw3njsWvuzJpPHa3mBFArN9Rcs%2FAiAGfLq5ddt0SRqhIV7x2PEr6pVrmKk8s%2Ba%2BcHgerk5%2BKir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM92AOz2NOhhPbnOOsKtwDdWiCEC6U0Niol9sTOq4MpoyJrW4jLCmNWL3hGftebeOq2lSyFnN%2FqGYTrqjUNWwsGw6ME8jHF2O24O8eM43eFLgb0F93%2Fn8tC88KiYkMye%2FTsnBCLIxEt%2FbUNMIeXXWAEGjIRrm9YxW98fFrLwyIfU4QgTIF8kK3GLSyDTLHVwjXlj5v%2Fu1%2B3M%2B%2FoowE8rPoB6JBW1BG1L4qhWI7f%2BqsSiSOCeB8o2ugtav%2FODFjFEwF9Hdy6dIRwY%2BcUI4j29pa8RmEa5sYDdcpPYaw9IaVvSxr3PhtPG3DysAAeNWFBZ3YsM5BRGRZNkgq0C2SeGy8zeeU7n1b12m%2Bi9nCTwOgaO1LASgeHxQSCzi9qXZMypfTRnoajx0rJlhrCRgor0u2Yy%2B66qnJXG1MZiYK3%2BDzdADUiacNnSXyBPTFU5OI453zs4Es6rbSpqQS8Csfb3FnBS2ZViyCxG1ZUYmMmndfam%2BufvIKf0z%2FciEVqWh8Y0q3s3PpzipOzZh5nutKTqoxpwnMs%2BWjh5nzNffP608ZixvdgrpUM0S%2FSzbcVEOl7ZMyfUr3ysXhQP%2Bl%2BPIyAFagJqY8TtqmtetcMRCPUNDuAkqbl%2FtrAO7ersoAJ2QKeYdogmI8zCkXZZIcWKsw273yvQY6pgG3nQOYYPrh61jJF6iR5bT5d9qdwTixbrS4NSiuBbwyZauFpqGlbPu%2F%2Bh9d7%2FmBsHP3HTdM5o9gY%2BYnaEAkRl9A9u%2BxzUxfCfA%2Fzj%2FmjMHDFJjSlyuGnyGbj4dWoJywcUIohA0DwXXeTMKu1iOJy0Kp1nZl9oy7OvckPq3mjayMj6lkrl20BASyK58KWtxSG%2FFJgXojkg9nKJXwwY7mrUCrycevl4ri&X-Amz-Signature=aa1f96d9c641fb9b52aa4a479b09826827cfe2db40dda05480e862d1bc104c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3H35IF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV4cw%2Fn9KbB10B0enw3njsWvuzJpPHa3mBFArN9Rcs%2FAiAGfLq5ddt0SRqhIV7x2PEr6pVrmKk8s%2Ba%2BcHgerk5%2BKir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM92AOz2NOhhPbnOOsKtwDdWiCEC6U0Niol9sTOq4MpoyJrW4jLCmNWL3hGftebeOq2lSyFnN%2FqGYTrqjUNWwsGw6ME8jHF2O24O8eM43eFLgb0F93%2Fn8tC88KiYkMye%2FTsnBCLIxEt%2FbUNMIeXXWAEGjIRrm9YxW98fFrLwyIfU4QgTIF8kK3GLSyDTLHVwjXlj5v%2Fu1%2B3M%2B%2FoowE8rPoB6JBW1BG1L4qhWI7f%2BqsSiSOCeB8o2ugtav%2FODFjFEwF9Hdy6dIRwY%2BcUI4j29pa8RmEa5sYDdcpPYaw9IaVvSxr3PhtPG3DysAAeNWFBZ3YsM5BRGRZNkgq0C2SeGy8zeeU7n1b12m%2Bi9nCTwOgaO1LASgeHxQSCzi9qXZMypfTRnoajx0rJlhrCRgor0u2Yy%2B66qnJXG1MZiYK3%2BDzdADUiacNnSXyBPTFU5OI453zs4Es6rbSpqQS8Csfb3FnBS2ZViyCxG1ZUYmMmndfam%2BufvIKf0z%2FciEVqWh8Y0q3s3PpzipOzZh5nutKTqoxpwnMs%2BWjh5nzNffP608ZixvdgrpUM0S%2FSzbcVEOl7ZMyfUr3ysXhQP%2Bl%2BPIyAFagJqY8TtqmtetcMRCPUNDuAkqbl%2FtrAO7ersoAJ2QKeYdogmI8zCkXZZIcWKsw273yvQY6pgG3nQOYYPrh61jJF6iR5bT5d9qdwTixbrS4NSiuBbwyZauFpqGlbPu%2F%2Bh9d7%2FmBsHP3HTdM5o9gY%2BYnaEAkRl9A9u%2BxzUxfCfA%2Fzj%2FmjMHDFJjSlyuGnyGbj4dWoJywcUIohA0DwXXeTMKu1iOJy0Kp1nZl9oy7OvckPq3mjayMj6lkrl20BASyK58KWtxSG%2FFJgXojkg9nKJXwwY7mrUCrycevl4ri&X-Amz-Signature=e7e00d7e79443be1f95cddc74e6b5998c45548efafee3a149c93171fd0040c96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3H35IF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV4cw%2Fn9KbB10B0enw3njsWvuzJpPHa3mBFArN9Rcs%2FAiAGfLq5ddt0SRqhIV7x2PEr6pVrmKk8s%2Ba%2BcHgerk5%2BKir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM92AOz2NOhhPbnOOsKtwDdWiCEC6U0Niol9sTOq4MpoyJrW4jLCmNWL3hGftebeOq2lSyFnN%2FqGYTrqjUNWwsGw6ME8jHF2O24O8eM43eFLgb0F93%2Fn8tC88KiYkMye%2FTsnBCLIxEt%2FbUNMIeXXWAEGjIRrm9YxW98fFrLwyIfU4QgTIF8kK3GLSyDTLHVwjXlj5v%2Fu1%2B3M%2B%2FoowE8rPoB6JBW1BG1L4qhWI7f%2BqsSiSOCeB8o2ugtav%2FODFjFEwF9Hdy6dIRwY%2BcUI4j29pa8RmEa5sYDdcpPYaw9IaVvSxr3PhtPG3DysAAeNWFBZ3YsM5BRGRZNkgq0C2SeGy8zeeU7n1b12m%2Bi9nCTwOgaO1LASgeHxQSCzi9qXZMypfTRnoajx0rJlhrCRgor0u2Yy%2B66qnJXG1MZiYK3%2BDzdADUiacNnSXyBPTFU5OI453zs4Es6rbSpqQS8Csfb3FnBS2ZViyCxG1ZUYmMmndfam%2BufvIKf0z%2FciEVqWh8Y0q3s3PpzipOzZh5nutKTqoxpwnMs%2BWjh5nzNffP608ZixvdgrpUM0S%2FSzbcVEOl7ZMyfUr3ysXhQP%2Bl%2BPIyAFagJqY8TtqmtetcMRCPUNDuAkqbl%2FtrAO7ersoAJ2QKeYdogmI8zCkXZZIcWKsw273yvQY6pgG3nQOYYPrh61jJF6iR5bT5d9qdwTixbrS4NSiuBbwyZauFpqGlbPu%2F%2Bh9d7%2FmBsHP3HTdM5o9gY%2BYnaEAkRl9A9u%2BxzUxfCfA%2Fzj%2FmjMHDFJjSlyuGnyGbj4dWoJywcUIohA0DwXXeTMKu1iOJy0Kp1nZl9oy7OvckPq3mjayMj6lkrl20BASyK58KWtxSG%2FFJgXojkg9nKJXwwY7mrUCrycevl4ri&X-Amz-Signature=bc3feb6c446dd3e2c80744d44d7dbec2d93b5baab5f2f44a4c3ea806bede17ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3H35IF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV4cw%2Fn9KbB10B0enw3njsWvuzJpPHa3mBFArN9Rcs%2FAiAGfLq5ddt0SRqhIV7x2PEr6pVrmKk8s%2Ba%2BcHgerk5%2BKir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM92AOz2NOhhPbnOOsKtwDdWiCEC6U0Niol9sTOq4MpoyJrW4jLCmNWL3hGftebeOq2lSyFnN%2FqGYTrqjUNWwsGw6ME8jHF2O24O8eM43eFLgb0F93%2Fn8tC88KiYkMye%2FTsnBCLIxEt%2FbUNMIeXXWAEGjIRrm9YxW98fFrLwyIfU4QgTIF8kK3GLSyDTLHVwjXlj5v%2Fu1%2B3M%2B%2FoowE8rPoB6JBW1BG1L4qhWI7f%2BqsSiSOCeB8o2ugtav%2FODFjFEwF9Hdy6dIRwY%2BcUI4j29pa8RmEa5sYDdcpPYaw9IaVvSxr3PhtPG3DysAAeNWFBZ3YsM5BRGRZNkgq0C2SeGy8zeeU7n1b12m%2Bi9nCTwOgaO1LASgeHxQSCzi9qXZMypfTRnoajx0rJlhrCRgor0u2Yy%2B66qnJXG1MZiYK3%2BDzdADUiacNnSXyBPTFU5OI453zs4Es6rbSpqQS8Csfb3FnBS2ZViyCxG1ZUYmMmndfam%2BufvIKf0z%2FciEVqWh8Y0q3s3PpzipOzZh5nutKTqoxpwnMs%2BWjh5nzNffP608ZixvdgrpUM0S%2FSzbcVEOl7ZMyfUr3ysXhQP%2Bl%2BPIyAFagJqY8TtqmtetcMRCPUNDuAkqbl%2FtrAO7ersoAJ2QKeYdogmI8zCkXZZIcWKsw273yvQY6pgG3nQOYYPrh61jJF6iR5bT5d9qdwTixbrS4NSiuBbwyZauFpqGlbPu%2F%2Bh9d7%2FmBsHP3HTdM5o9gY%2BYnaEAkRl9A9u%2BxzUxfCfA%2Fzj%2FmjMHDFJjSlyuGnyGbj4dWoJywcUIohA0DwXXeTMKu1iOJy0Kp1nZl9oy7OvckPq3mjayMj6lkrl20BASyK58KWtxSG%2FFJgXojkg9nKJXwwY7mrUCrycevl4ri&X-Amz-Signature=bdec30c419531ac3577db73e20b1e8c204ef1cdb5b1c25a85f5af0ffce574177&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
