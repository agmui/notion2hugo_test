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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5G5ZHR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgGzRdIKJzpPfN5xMpVa25YqeWItNzvWaIVpPr8bb%2BSwIgHJVWQ5sdKSv%2BVoDSWaaIPj%2BzWCs6miTEidpIAJ0HZTcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4M20kkFzi1YFK2gSrcAy5%2FUGLqT9MfeIoqvczFSAXe1YpIQ2DjOxE8S%2BIN2gfmg3D59LPNe21cA%2B1nydr%2Fyy%2BqEFESmwvMEHSMF3fUA4%2FOnS5hE25o7GZ5WoAIZwHmCja2AFJY36PBKfjQ2wkUalJK%2FJwBzFxBfV9TDAXnGTcBfgQxGEQjl4iOxENUZ1ySJD%2FJpUizdiv2EnxemEjG4cbdTC8VdD7XJWx7XO6l%2FirR9m6%2Fd13ARcm34wWkIRmSHpghyo4SNdD6BstQyzkINKs3LrpLr9T%2BA5XQbR5%2B37pVDWx1qRNi6I6CO8oaJP5vyWGt8Fkt7rSSk7AJZiFJOJCDMm6dQ6vsqtRCcnJ7UElZ6D4OhWNZEZFELQb5USsgAzHpwFv5VmWtGwZOzqmRFgVrTYxwgrZz8hAM66n2%2B56AHTs2%2BQ8ahbdDGuDcD3Qohxf%2F4jqYEZqTTe4MMssW2Z7B6oXh9KpF3hV%2BiOPeQWxQd8nHW8%2FKj%2BxRHCrGs5x%2FidADH9oAmt3ne1BQsSbZLAIRmbHwEukiihOcO03oHrwCVn97rjF%2BKideteLQhRe%2BCPXLi%2F7wgVKTomntygAnHe8fJbk0Vct6brvkSqZcXrtJ7A2%2FlRvcUfyYgbA8%2BpsDBBNZ5g%2FzQjbdfkwYMKXO9bwGOqUBP0MaPKuVMuUW4VPbKEJYBLnR1TUMzmzd8E%2B0nWtCoj%2F%2FLJFfsob6qtZnk5FdAElwcVJZ%2FCaOZlYXB4VuLtdvtMroOBi7L6WcOcJRBbhvHYt5mpWuOE%2FbzhGZNsbYMplQgbyf956A2N%2FBGT2dC4GUmVlIQ1QE%2BR2w%2Fmn2k0Alpub6Xl7J87joyDgRpzwnNlqrSSLJwnRay8OBHMeQEdvlI0yDyuqO&X-Amz-Signature=b4f72f5f51471cda6b635d80133f03acd783bc32463cffb5fb01b0a075ebede0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5G5ZHR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgGzRdIKJzpPfN5xMpVa25YqeWItNzvWaIVpPr8bb%2BSwIgHJVWQ5sdKSv%2BVoDSWaaIPj%2BzWCs6miTEidpIAJ0HZTcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4M20kkFzi1YFK2gSrcAy5%2FUGLqT9MfeIoqvczFSAXe1YpIQ2DjOxE8S%2BIN2gfmg3D59LPNe21cA%2B1nydr%2Fyy%2BqEFESmwvMEHSMF3fUA4%2FOnS5hE25o7GZ5WoAIZwHmCja2AFJY36PBKfjQ2wkUalJK%2FJwBzFxBfV9TDAXnGTcBfgQxGEQjl4iOxENUZ1ySJD%2FJpUizdiv2EnxemEjG4cbdTC8VdD7XJWx7XO6l%2FirR9m6%2Fd13ARcm34wWkIRmSHpghyo4SNdD6BstQyzkINKs3LrpLr9T%2BA5XQbR5%2B37pVDWx1qRNi6I6CO8oaJP5vyWGt8Fkt7rSSk7AJZiFJOJCDMm6dQ6vsqtRCcnJ7UElZ6D4OhWNZEZFELQb5USsgAzHpwFv5VmWtGwZOzqmRFgVrTYxwgrZz8hAM66n2%2B56AHTs2%2BQ8ahbdDGuDcD3Qohxf%2F4jqYEZqTTe4MMssW2Z7B6oXh9KpF3hV%2BiOPeQWxQd8nHW8%2FKj%2BxRHCrGs5x%2FidADH9oAmt3ne1BQsSbZLAIRmbHwEukiihOcO03oHrwCVn97rjF%2BKideteLQhRe%2BCPXLi%2F7wgVKTomntygAnHe8fJbk0Vct6brvkSqZcXrtJ7A2%2FlRvcUfyYgbA8%2BpsDBBNZ5g%2FzQjbdfkwYMKXO9bwGOqUBP0MaPKuVMuUW4VPbKEJYBLnR1TUMzmzd8E%2B0nWtCoj%2F%2FLJFfsob6qtZnk5FdAElwcVJZ%2FCaOZlYXB4VuLtdvtMroOBi7L6WcOcJRBbhvHYt5mpWuOE%2FbzhGZNsbYMplQgbyf956A2N%2FBGT2dC4GUmVlIQ1QE%2BR2w%2Fmn2k0Alpub6Xl7J87joyDgRpzwnNlqrSSLJwnRay8OBHMeQEdvlI0yDyuqO&X-Amz-Signature=66f90d18d064e32f28607bd595cb5dd0596a7ae2c2c3dc3d89a533ec16c5c96c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5G5ZHR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgGzRdIKJzpPfN5xMpVa25YqeWItNzvWaIVpPr8bb%2BSwIgHJVWQ5sdKSv%2BVoDSWaaIPj%2BzWCs6miTEidpIAJ0HZTcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4M20kkFzi1YFK2gSrcAy5%2FUGLqT9MfeIoqvczFSAXe1YpIQ2DjOxE8S%2BIN2gfmg3D59LPNe21cA%2B1nydr%2Fyy%2BqEFESmwvMEHSMF3fUA4%2FOnS5hE25o7GZ5WoAIZwHmCja2AFJY36PBKfjQ2wkUalJK%2FJwBzFxBfV9TDAXnGTcBfgQxGEQjl4iOxENUZ1ySJD%2FJpUizdiv2EnxemEjG4cbdTC8VdD7XJWx7XO6l%2FirR9m6%2Fd13ARcm34wWkIRmSHpghyo4SNdD6BstQyzkINKs3LrpLr9T%2BA5XQbR5%2B37pVDWx1qRNi6I6CO8oaJP5vyWGt8Fkt7rSSk7AJZiFJOJCDMm6dQ6vsqtRCcnJ7UElZ6D4OhWNZEZFELQb5USsgAzHpwFv5VmWtGwZOzqmRFgVrTYxwgrZz8hAM66n2%2B56AHTs2%2BQ8ahbdDGuDcD3Qohxf%2F4jqYEZqTTe4MMssW2Z7B6oXh9KpF3hV%2BiOPeQWxQd8nHW8%2FKj%2BxRHCrGs5x%2FidADH9oAmt3ne1BQsSbZLAIRmbHwEukiihOcO03oHrwCVn97rjF%2BKideteLQhRe%2BCPXLi%2F7wgVKTomntygAnHe8fJbk0Vct6brvkSqZcXrtJ7A2%2FlRvcUfyYgbA8%2BpsDBBNZ5g%2FzQjbdfkwYMKXO9bwGOqUBP0MaPKuVMuUW4VPbKEJYBLnR1TUMzmzd8E%2B0nWtCoj%2F%2FLJFfsob6qtZnk5FdAElwcVJZ%2FCaOZlYXB4VuLtdvtMroOBi7L6WcOcJRBbhvHYt5mpWuOE%2FbzhGZNsbYMplQgbyf956A2N%2FBGT2dC4GUmVlIQ1QE%2BR2w%2Fmn2k0Alpub6Xl7J87joyDgRpzwnNlqrSSLJwnRay8OBHMeQEdvlI0yDyuqO&X-Amz-Signature=5bad9c96eb6f1b0dc0e4e86a5c4f844c050cf0c16aa213959788dfbdaff9df65&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5G5ZHR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgGzRdIKJzpPfN5xMpVa25YqeWItNzvWaIVpPr8bb%2BSwIgHJVWQ5sdKSv%2BVoDSWaaIPj%2BzWCs6miTEidpIAJ0HZTcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4M20kkFzi1YFK2gSrcAy5%2FUGLqT9MfeIoqvczFSAXe1YpIQ2DjOxE8S%2BIN2gfmg3D59LPNe21cA%2B1nydr%2Fyy%2BqEFESmwvMEHSMF3fUA4%2FOnS5hE25o7GZ5WoAIZwHmCja2AFJY36PBKfjQ2wkUalJK%2FJwBzFxBfV9TDAXnGTcBfgQxGEQjl4iOxENUZ1ySJD%2FJpUizdiv2EnxemEjG4cbdTC8VdD7XJWx7XO6l%2FirR9m6%2Fd13ARcm34wWkIRmSHpghyo4SNdD6BstQyzkINKs3LrpLr9T%2BA5XQbR5%2B37pVDWx1qRNi6I6CO8oaJP5vyWGt8Fkt7rSSk7AJZiFJOJCDMm6dQ6vsqtRCcnJ7UElZ6D4OhWNZEZFELQb5USsgAzHpwFv5VmWtGwZOzqmRFgVrTYxwgrZz8hAM66n2%2B56AHTs2%2BQ8ahbdDGuDcD3Qohxf%2F4jqYEZqTTe4MMssW2Z7B6oXh9KpF3hV%2BiOPeQWxQd8nHW8%2FKj%2BxRHCrGs5x%2FidADH9oAmt3ne1BQsSbZLAIRmbHwEukiihOcO03oHrwCVn97rjF%2BKideteLQhRe%2BCPXLi%2F7wgVKTomntygAnHe8fJbk0Vct6brvkSqZcXrtJ7A2%2FlRvcUfyYgbA8%2BpsDBBNZ5g%2FzQjbdfkwYMKXO9bwGOqUBP0MaPKuVMuUW4VPbKEJYBLnR1TUMzmzd8E%2B0nWtCoj%2F%2FLJFfsob6qtZnk5FdAElwcVJZ%2FCaOZlYXB4VuLtdvtMroOBi7L6WcOcJRBbhvHYt5mpWuOE%2FbzhGZNsbYMplQgbyf956A2N%2FBGT2dC4GUmVlIQ1QE%2BR2w%2Fmn2k0Alpub6Xl7J87joyDgRpzwnNlqrSSLJwnRay8OBHMeQEdvlI0yDyuqO&X-Amz-Signature=377bebaaa0b8bc634b5a802d74cb6186c9b2309ddbe06a9922e32bc9f33f1ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5G5ZHR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgGzRdIKJzpPfN5xMpVa25YqeWItNzvWaIVpPr8bb%2BSwIgHJVWQ5sdKSv%2BVoDSWaaIPj%2BzWCs6miTEidpIAJ0HZTcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4M20kkFzi1YFK2gSrcAy5%2FUGLqT9MfeIoqvczFSAXe1YpIQ2DjOxE8S%2BIN2gfmg3D59LPNe21cA%2B1nydr%2Fyy%2BqEFESmwvMEHSMF3fUA4%2FOnS5hE25o7GZ5WoAIZwHmCja2AFJY36PBKfjQ2wkUalJK%2FJwBzFxBfV9TDAXnGTcBfgQxGEQjl4iOxENUZ1ySJD%2FJpUizdiv2EnxemEjG4cbdTC8VdD7XJWx7XO6l%2FirR9m6%2Fd13ARcm34wWkIRmSHpghyo4SNdD6BstQyzkINKs3LrpLr9T%2BA5XQbR5%2B37pVDWx1qRNi6I6CO8oaJP5vyWGt8Fkt7rSSk7AJZiFJOJCDMm6dQ6vsqtRCcnJ7UElZ6D4OhWNZEZFELQb5USsgAzHpwFv5VmWtGwZOzqmRFgVrTYxwgrZz8hAM66n2%2B56AHTs2%2BQ8ahbdDGuDcD3Qohxf%2F4jqYEZqTTe4MMssW2Z7B6oXh9KpF3hV%2BiOPeQWxQd8nHW8%2FKj%2BxRHCrGs5x%2FidADH9oAmt3ne1BQsSbZLAIRmbHwEukiihOcO03oHrwCVn97rjF%2BKideteLQhRe%2BCPXLi%2F7wgVKTomntygAnHe8fJbk0Vct6brvkSqZcXrtJ7A2%2FlRvcUfyYgbA8%2BpsDBBNZ5g%2FzQjbdfkwYMKXO9bwGOqUBP0MaPKuVMuUW4VPbKEJYBLnR1TUMzmzd8E%2B0nWtCoj%2F%2FLJFfsob6qtZnk5FdAElwcVJZ%2FCaOZlYXB4VuLtdvtMroOBi7L6WcOcJRBbhvHYt5mpWuOE%2FbzhGZNsbYMplQgbyf956A2N%2FBGT2dC4GUmVlIQ1QE%2BR2w%2Fmn2k0Alpub6Xl7J87joyDgRpzwnNlqrSSLJwnRay8OBHMeQEdvlI0yDyuqO&X-Amz-Signature=847a4ee49026b20d71a4bf7c43f2e868d3ba6ff87f59014cd4338f076a1d58ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5G5ZHR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgGzRdIKJzpPfN5xMpVa25YqeWItNzvWaIVpPr8bb%2BSwIgHJVWQ5sdKSv%2BVoDSWaaIPj%2BzWCs6miTEidpIAJ0HZTcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4M20kkFzi1YFK2gSrcAy5%2FUGLqT9MfeIoqvczFSAXe1YpIQ2DjOxE8S%2BIN2gfmg3D59LPNe21cA%2B1nydr%2Fyy%2BqEFESmwvMEHSMF3fUA4%2FOnS5hE25o7GZ5WoAIZwHmCja2AFJY36PBKfjQ2wkUalJK%2FJwBzFxBfV9TDAXnGTcBfgQxGEQjl4iOxENUZ1ySJD%2FJpUizdiv2EnxemEjG4cbdTC8VdD7XJWx7XO6l%2FirR9m6%2Fd13ARcm34wWkIRmSHpghyo4SNdD6BstQyzkINKs3LrpLr9T%2BA5XQbR5%2B37pVDWx1qRNi6I6CO8oaJP5vyWGt8Fkt7rSSk7AJZiFJOJCDMm6dQ6vsqtRCcnJ7UElZ6D4OhWNZEZFELQb5USsgAzHpwFv5VmWtGwZOzqmRFgVrTYxwgrZz8hAM66n2%2B56AHTs2%2BQ8ahbdDGuDcD3Qohxf%2F4jqYEZqTTe4MMssW2Z7B6oXh9KpF3hV%2BiOPeQWxQd8nHW8%2FKj%2BxRHCrGs5x%2FidADH9oAmt3ne1BQsSbZLAIRmbHwEukiihOcO03oHrwCVn97rjF%2BKideteLQhRe%2BCPXLi%2F7wgVKTomntygAnHe8fJbk0Vct6brvkSqZcXrtJ7A2%2FlRvcUfyYgbA8%2BpsDBBNZ5g%2FzQjbdfkwYMKXO9bwGOqUBP0MaPKuVMuUW4VPbKEJYBLnR1TUMzmzd8E%2B0nWtCoj%2F%2FLJFfsob6qtZnk5FdAElwcVJZ%2FCaOZlYXB4VuLtdvtMroOBi7L6WcOcJRBbhvHYt5mpWuOE%2FbzhGZNsbYMplQgbyf956A2N%2FBGT2dC4GUmVlIQ1QE%2BR2w%2Fmn2k0Alpub6Xl7J87joyDgRpzwnNlqrSSLJwnRay8OBHMeQEdvlI0yDyuqO&X-Amz-Signature=99260d3940085797631d159c48663008431c46aed42511fa2abf593f45bb4e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5G5ZHR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgGzRdIKJzpPfN5xMpVa25YqeWItNzvWaIVpPr8bb%2BSwIgHJVWQ5sdKSv%2BVoDSWaaIPj%2BzWCs6miTEidpIAJ0HZTcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4M20kkFzi1YFK2gSrcAy5%2FUGLqT9MfeIoqvczFSAXe1YpIQ2DjOxE8S%2BIN2gfmg3D59LPNe21cA%2B1nydr%2Fyy%2BqEFESmwvMEHSMF3fUA4%2FOnS5hE25o7GZ5WoAIZwHmCja2AFJY36PBKfjQ2wkUalJK%2FJwBzFxBfV9TDAXnGTcBfgQxGEQjl4iOxENUZ1ySJD%2FJpUizdiv2EnxemEjG4cbdTC8VdD7XJWx7XO6l%2FirR9m6%2Fd13ARcm34wWkIRmSHpghyo4SNdD6BstQyzkINKs3LrpLr9T%2BA5XQbR5%2B37pVDWx1qRNi6I6CO8oaJP5vyWGt8Fkt7rSSk7AJZiFJOJCDMm6dQ6vsqtRCcnJ7UElZ6D4OhWNZEZFELQb5USsgAzHpwFv5VmWtGwZOzqmRFgVrTYxwgrZz8hAM66n2%2B56AHTs2%2BQ8ahbdDGuDcD3Qohxf%2F4jqYEZqTTe4MMssW2Z7B6oXh9KpF3hV%2BiOPeQWxQd8nHW8%2FKj%2BxRHCrGs5x%2FidADH9oAmt3ne1BQsSbZLAIRmbHwEukiihOcO03oHrwCVn97rjF%2BKideteLQhRe%2BCPXLi%2F7wgVKTomntygAnHe8fJbk0Vct6brvkSqZcXrtJ7A2%2FlRvcUfyYgbA8%2BpsDBBNZ5g%2FzQjbdfkwYMKXO9bwGOqUBP0MaPKuVMuUW4VPbKEJYBLnR1TUMzmzd8E%2B0nWtCoj%2F%2FLJFfsob6qtZnk5FdAElwcVJZ%2FCaOZlYXB4VuLtdvtMroOBi7L6WcOcJRBbhvHYt5mpWuOE%2FbzhGZNsbYMplQgbyf956A2N%2FBGT2dC4GUmVlIQ1QE%2BR2w%2Fmn2k0Alpub6Xl7J87joyDgRpzwnNlqrSSLJwnRay8OBHMeQEdvlI0yDyuqO&X-Amz-Signature=9d6e51097b502aa98da0efa1863698dce92f0385d8e6a58ef175fa83e7c18e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5G5ZHR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgGzRdIKJzpPfN5xMpVa25YqeWItNzvWaIVpPr8bb%2BSwIgHJVWQ5sdKSv%2BVoDSWaaIPj%2BzWCs6miTEidpIAJ0HZTcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4M20kkFzi1YFK2gSrcAy5%2FUGLqT9MfeIoqvczFSAXe1YpIQ2DjOxE8S%2BIN2gfmg3D59LPNe21cA%2B1nydr%2Fyy%2BqEFESmwvMEHSMF3fUA4%2FOnS5hE25o7GZ5WoAIZwHmCja2AFJY36PBKfjQ2wkUalJK%2FJwBzFxBfV9TDAXnGTcBfgQxGEQjl4iOxENUZ1ySJD%2FJpUizdiv2EnxemEjG4cbdTC8VdD7XJWx7XO6l%2FirR9m6%2Fd13ARcm34wWkIRmSHpghyo4SNdD6BstQyzkINKs3LrpLr9T%2BA5XQbR5%2B37pVDWx1qRNi6I6CO8oaJP5vyWGt8Fkt7rSSk7AJZiFJOJCDMm6dQ6vsqtRCcnJ7UElZ6D4OhWNZEZFELQb5USsgAzHpwFv5VmWtGwZOzqmRFgVrTYxwgrZz8hAM66n2%2B56AHTs2%2BQ8ahbdDGuDcD3Qohxf%2F4jqYEZqTTe4MMssW2Z7B6oXh9KpF3hV%2BiOPeQWxQd8nHW8%2FKj%2BxRHCrGs5x%2FidADH9oAmt3ne1BQsSbZLAIRmbHwEukiihOcO03oHrwCVn97rjF%2BKideteLQhRe%2BCPXLi%2F7wgVKTomntygAnHe8fJbk0Vct6brvkSqZcXrtJ7A2%2FlRvcUfyYgbA8%2BpsDBBNZ5g%2FzQjbdfkwYMKXO9bwGOqUBP0MaPKuVMuUW4VPbKEJYBLnR1TUMzmzd8E%2B0nWtCoj%2F%2FLJFfsob6qtZnk5FdAElwcVJZ%2FCaOZlYXB4VuLtdvtMroOBi7L6WcOcJRBbhvHYt5mpWuOE%2FbzhGZNsbYMplQgbyf956A2N%2FBGT2dC4GUmVlIQ1QE%2BR2w%2Fmn2k0Alpub6Xl7J87joyDgRpzwnNlqrSSLJwnRay8OBHMeQEdvlI0yDyuqO&X-Amz-Signature=af3554e957938812fdb1a04e773f48bcd1a6306e2c78dcede4eed4e0c113b9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
