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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGZPNTE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAsY9kHQ2fRwNA6wR6i1nVAPGKCIXXSflN5cscIb5KzAiEAq4AEs5OkfZi0klZ5wgctvtPmWCr2EBipTUUpjLtrBA8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNZ4rtUOYNR5XFTLjyrcAyVVHnOENPi9e0dEH%2F7qsZR3d4S1Wi68vGhPJXKBD2ss02QPsr1Lqd401J4s1ooVPoDwUxiXdP2Yb6hXdRM0jF2oPnO3R7LvzV%2BGK2HpG2nG7ptPcQe9LrAmzQLQXmJUJx%2FIEji2OD%2FwKv3RPNa%2BxBgFcJUEYK4gzBRBE4Opg2%2BPCB2Fy1axZtXSxCknXkMpq6KRh%2BF%2Bncwyhm%2FQhXpTt2fyb%2BWWhYQwwa6QdONb%2Fkmh6tQnIa5KZcIJofsRf7FgmLgKqutzUNKJlSFa84zB3hxgxGzm4NRELNQvbZKJbROu74wcWTFSDEVDDzrkdcdfuZvtBSXs1jZTNSvvyktu%2FkaRFI9eqXGm6QotEzvubzKh2%2BJP9%2FuFOwXBkSfZ5KZEyZ771h2VTwYUv5%2FryZ%2BNGnWAfP2SmyEyr3zkGoyoku%2BUacpWgnXVmOReW38dSL5nE%2BTkje%2FFQKA49ChxXT1MXl1%2Fo3q3UmmZoVRAiCp12j4sexuRe8R5ki%2BaUISSjTJJFO7NNU2TJCp52Nvz5qyJiWpZtJ8MSTJhjs%2FgukcLH6sDS2JZi7CQh5Iul%2FrjCNby%2FUAZu%2B8%2BQvbj5UfjTehS5KcVAQBXpN7kpj8G2oxpFrwy2Fo4Aw2UxwhNRe4JMNqR7b0GOqUBnXKpXPHlCEVrK8EpNtq0g1A1LjuaGgKIRKoao4RFWGQcsXJhwDk15P3FTAVwxFlEGKa1vEvimcI246ToCSZdkWgb3PsMAvJzOGkE52STRL6J%2Br%2Bf34VfUKz6jqvCAarRTZnZr%2FPQj1Nbv3bazLeMh8z63YyaNiS0G3k%2FW8wNJWzKINccuL5kjWXS635uDfipwriYK1h6P%2BoyDyRYaK1EAc4ezZFW&X-Amz-Signature=c69e6028b9f11c525146e0053492d631a2435963e91bc92a6ce7879a0e99ad50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGZPNTE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAsY9kHQ2fRwNA6wR6i1nVAPGKCIXXSflN5cscIb5KzAiEAq4AEs5OkfZi0klZ5wgctvtPmWCr2EBipTUUpjLtrBA8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNZ4rtUOYNR5XFTLjyrcAyVVHnOENPi9e0dEH%2F7qsZR3d4S1Wi68vGhPJXKBD2ss02QPsr1Lqd401J4s1ooVPoDwUxiXdP2Yb6hXdRM0jF2oPnO3R7LvzV%2BGK2HpG2nG7ptPcQe9LrAmzQLQXmJUJx%2FIEji2OD%2FwKv3RPNa%2BxBgFcJUEYK4gzBRBE4Opg2%2BPCB2Fy1axZtXSxCknXkMpq6KRh%2BF%2Bncwyhm%2FQhXpTt2fyb%2BWWhYQwwa6QdONb%2Fkmh6tQnIa5KZcIJofsRf7FgmLgKqutzUNKJlSFa84zB3hxgxGzm4NRELNQvbZKJbROu74wcWTFSDEVDDzrkdcdfuZvtBSXs1jZTNSvvyktu%2FkaRFI9eqXGm6QotEzvubzKh2%2BJP9%2FuFOwXBkSfZ5KZEyZ771h2VTwYUv5%2FryZ%2BNGnWAfP2SmyEyr3zkGoyoku%2BUacpWgnXVmOReW38dSL5nE%2BTkje%2FFQKA49ChxXT1MXl1%2Fo3q3UmmZoVRAiCp12j4sexuRe8R5ki%2BaUISSjTJJFO7NNU2TJCp52Nvz5qyJiWpZtJ8MSTJhjs%2FgukcLH6sDS2JZi7CQh5Iul%2FrjCNby%2FUAZu%2B8%2BQvbj5UfjTehS5KcVAQBXpN7kpj8G2oxpFrwy2Fo4Aw2UxwhNRe4JMNqR7b0GOqUBnXKpXPHlCEVrK8EpNtq0g1A1LjuaGgKIRKoao4RFWGQcsXJhwDk15P3FTAVwxFlEGKa1vEvimcI246ToCSZdkWgb3PsMAvJzOGkE52STRL6J%2Br%2Bf34VfUKz6jqvCAarRTZnZr%2FPQj1Nbv3bazLeMh8z63YyaNiS0G3k%2FW8wNJWzKINccuL5kjWXS635uDfipwriYK1h6P%2BoyDyRYaK1EAc4ezZFW&X-Amz-Signature=bd6898580cc99bcde1baac8563bb752e3ceef3f610edeb6b92ea54534e6b7ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGZPNTE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAsY9kHQ2fRwNA6wR6i1nVAPGKCIXXSflN5cscIb5KzAiEAq4AEs5OkfZi0klZ5wgctvtPmWCr2EBipTUUpjLtrBA8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNZ4rtUOYNR5XFTLjyrcAyVVHnOENPi9e0dEH%2F7qsZR3d4S1Wi68vGhPJXKBD2ss02QPsr1Lqd401J4s1ooVPoDwUxiXdP2Yb6hXdRM0jF2oPnO3R7LvzV%2BGK2HpG2nG7ptPcQe9LrAmzQLQXmJUJx%2FIEji2OD%2FwKv3RPNa%2BxBgFcJUEYK4gzBRBE4Opg2%2BPCB2Fy1axZtXSxCknXkMpq6KRh%2BF%2Bncwyhm%2FQhXpTt2fyb%2BWWhYQwwa6QdONb%2Fkmh6tQnIa5KZcIJofsRf7FgmLgKqutzUNKJlSFa84zB3hxgxGzm4NRELNQvbZKJbROu74wcWTFSDEVDDzrkdcdfuZvtBSXs1jZTNSvvyktu%2FkaRFI9eqXGm6QotEzvubzKh2%2BJP9%2FuFOwXBkSfZ5KZEyZ771h2VTwYUv5%2FryZ%2BNGnWAfP2SmyEyr3zkGoyoku%2BUacpWgnXVmOReW38dSL5nE%2BTkje%2FFQKA49ChxXT1MXl1%2Fo3q3UmmZoVRAiCp12j4sexuRe8R5ki%2BaUISSjTJJFO7NNU2TJCp52Nvz5qyJiWpZtJ8MSTJhjs%2FgukcLH6sDS2JZi7CQh5Iul%2FrjCNby%2FUAZu%2B8%2BQvbj5UfjTehS5KcVAQBXpN7kpj8G2oxpFrwy2Fo4Aw2UxwhNRe4JMNqR7b0GOqUBnXKpXPHlCEVrK8EpNtq0g1A1LjuaGgKIRKoao4RFWGQcsXJhwDk15P3FTAVwxFlEGKa1vEvimcI246ToCSZdkWgb3PsMAvJzOGkE52STRL6J%2Br%2Bf34VfUKz6jqvCAarRTZnZr%2FPQj1Nbv3bazLeMh8z63YyaNiS0G3k%2FW8wNJWzKINccuL5kjWXS635uDfipwriYK1h6P%2BoyDyRYaK1EAc4ezZFW&X-Amz-Signature=e1841db50f32d8747d12b40098cd879ec689c463231ab5022d53c4f321e24565&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGZPNTE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAsY9kHQ2fRwNA6wR6i1nVAPGKCIXXSflN5cscIb5KzAiEAq4AEs5OkfZi0klZ5wgctvtPmWCr2EBipTUUpjLtrBA8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNZ4rtUOYNR5XFTLjyrcAyVVHnOENPi9e0dEH%2F7qsZR3d4S1Wi68vGhPJXKBD2ss02QPsr1Lqd401J4s1ooVPoDwUxiXdP2Yb6hXdRM0jF2oPnO3R7LvzV%2BGK2HpG2nG7ptPcQe9LrAmzQLQXmJUJx%2FIEji2OD%2FwKv3RPNa%2BxBgFcJUEYK4gzBRBE4Opg2%2BPCB2Fy1axZtXSxCknXkMpq6KRh%2BF%2Bncwyhm%2FQhXpTt2fyb%2BWWhYQwwa6QdONb%2Fkmh6tQnIa5KZcIJofsRf7FgmLgKqutzUNKJlSFa84zB3hxgxGzm4NRELNQvbZKJbROu74wcWTFSDEVDDzrkdcdfuZvtBSXs1jZTNSvvyktu%2FkaRFI9eqXGm6QotEzvubzKh2%2BJP9%2FuFOwXBkSfZ5KZEyZ771h2VTwYUv5%2FryZ%2BNGnWAfP2SmyEyr3zkGoyoku%2BUacpWgnXVmOReW38dSL5nE%2BTkje%2FFQKA49ChxXT1MXl1%2Fo3q3UmmZoVRAiCp12j4sexuRe8R5ki%2BaUISSjTJJFO7NNU2TJCp52Nvz5qyJiWpZtJ8MSTJhjs%2FgukcLH6sDS2JZi7CQh5Iul%2FrjCNby%2FUAZu%2B8%2BQvbj5UfjTehS5KcVAQBXpN7kpj8G2oxpFrwy2Fo4Aw2UxwhNRe4JMNqR7b0GOqUBnXKpXPHlCEVrK8EpNtq0g1A1LjuaGgKIRKoao4RFWGQcsXJhwDk15P3FTAVwxFlEGKa1vEvimcI246ToCSZdkWgb3PsMAvJzOGkE52STRL6J%2Br%2Bf34VfUKz6jqvCAarRTZnZr%2FPQj1Nbv3bazLeMh8z63YyaNiS0G3k%2FW8wNJWzKINccuL5kjWXS635uDfipwriYK1h6P%2BoyDyRYaK1EAc4ezZFW&X-Amz-Signature=673f3a5c21a4ac0ff68e935bb2a3a368b71902919e8e1f87c4e66f98e307e17f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGZPNTE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAsY9kHQ2fRwNA6wR6i1nVAPGKCIXXSflN5cscIb5KzAiEAq4AEs5OkfZi0klZ5wgctvtPmWCr2EBipTUUpjLtrBA8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNZ4rtUOYNR5XFTLjyrcAyVVHnOENPi9e0dEH%2F7qsZR3d4S1Wi68vGhPJXKBD2ss02QPsr1Lqd401J4s1ooVPoDwUxiXdP2Yb6hXdRM0jF2oPnO3R7LvzV%2BGK2HpG2nG7ptPcQe9LrAmzQLQXmJUJx%2FIEji2OD%2FwKv3RPNa%2BxBgFcJUEYK4gzBRBE4Opg2%2BPCB2Fy1axZtXSxCknXkMpq6KRh%2BF%2Bncwyhm%2FQhXpTt2fyb%2BWWhYQwwa6QdONb%2Fkmh6tQnIa5KZcIJofsRf7FgmLgKqutzUNKJlSFa84zB3hxgxGzm4NRELNQvbZKJbROu74wcWTFSDEVDDzrkdcdfuZvtBSXs1jZTNSvvyktu%2FkaRFI9eqXGm6QotEzvubzKh2%2BJP9%2FuFOwXBkSfZ5KZEyZ771h2VTwYUv5%2FryZ%2BNGnWAfP2SmyEyr3zkGoyoku%2BUacpWgnXVmOReW38dSL5nE%2BTkje%2FFQKA49ChxXT1MXl1%2Fo3q3UmmZoVRAiCp12j4sexuRe8R5ki%2BaUISSjTJJFO7NNU2TJCp52Nvz5qyJiWpZtJ8MSTJhjs%2FgukcLH6sDS2JZi7CQh5Iul%2FrjCNby%2FUAZu%2B8%2BQvbj5UfjTehS5KcVAQBXpN7kpj8G2oxpFrwy2Fo4Aw2UxwhNRe4JMNqR7b0GOqUBnXKpXPHlCEVrK8EpNtq0g1A1LjuaGgKIRKoao4RFWGQcsXJhwDk15P3FTAVwxFlEGKa1vEvimcI246ToCSZdkWgb3PsMAvJzOGkE52STRL6J%2Br%2Bf34VfUKz6jqvCAarRTZnZr%2FPQj1Nbv3bazLeMh8z63YyaNiS0G3k%2FW8wNJWzKINccuL5kjWXS635uDfipwriYK1h6P%2BoyDyRYaK1EAc4ezZFW&X-Amz-Signature=840be7bdc5c6f940c48b868b6221bcaf815be8192c0830cc9c293028a24c8c88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGZPNTE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAsY9kHQ2fRwNA6wR6i1nVAPGKCIXXSflN5cscIb5KzAiEAq4AEs5OkfZi0klZ5wgctvtPmWCr2EBipTUUpjLtrBA8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNZ4rtUOYNR5XFTLjyrcAyVVHnOENPi9e0dEH%2F7qsZR3d4S1Wi68vGhPJXKBD2ss02QPsr1Lqd401J4s1ooVPoDwUxiXdP2Yb6hXdRM0jF2oPnO3R7LvzV%2BGK2HpG2nG7ptPcQe9LrAmzQLQXmJUJx%2FIEji2OD%2FwKv3RPNa%2BxBgFcJUEYK4gzBRBE4Opg2%2BPCB2Fy1axZtXSxCknXkMpq6KRh%2BF%2Bncwyhm%2FQhXpTt2fyb%2BWWhYQwwa6QdONb%2Fkmh6tQnIa5KZcIJofsRf7FgmLgKqutzUNKJlSFa84zB3hxgxGzm4NRELNQvbZKJbROu74wcWTFSDEVDDzrkdcdfuZvtBSXs1jZTNSvvyktu%2FkaRFI9eqXGm6QotEzvubzKh2%2BJP9%2FuFOwXBkSfZ5KZEyZ771h2VTwYUv5%2FryZ%2BNGnWAfP2SmyEyr3zkGoyoku%2BUacpWgnXVmOReW38dSL5nE%2BTkje%2FFQKA49ChxXT1MXl1%2Fo3q3UmmZoVRAiCp12j4sexuRe8R5ki%2BaUISSjTJJFO7NNU2TJCp52Nvz5qyJiWpZtJ8MSTJhjs%2FgukcLH6sDS2JZi7CQh5Iul%2FrjCNby%2FUAZu%2B8%2BQvbj5UfjTehS5KcVAQBXpN7kpj8G2oxpFrwy2Fo4Aw2UxwhNRe4JMNqR7b0GOqUBnXKpXPHlCEVrK8EpNtq0g1A1LjuaGgKIRKoao4RFWGQcsXJhwDk15P3FTAVwxFlEGKa1vEvimcI246ToCSZdkWgb3PsMAvJzOGkE52STRL6J%2Br%2Bf34VfUKz6jqvCAarRTZnZr%2FPQj1Nbv3bazLeMh8z63YyaNiS0G3k%2FW8wNJWzKINccuL5kjWXS635uDfipwriYK1h6P%2BoyDyRYaK1EAc4ezZFW&X-Amz-Signature=eaa972b1681627d592c4efbcc31b761bda0dcc469f844bd55816450ae53cab47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGZPNTE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAsY9kHQ2fRwNA6wR6i1nVAPGKCIXXSflN5cscIb5KzAiEAq4AEs5OkfZi0klZ5wgctvtPmWCr2EBipTUUpjLtrBA8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNZ4rtUOYNR5XFTLjyrcAyVVHnOENPi9e0dEH%2F7qsZR3d4S1Wi68vGhPJXKBD2ss02QPsr1Lqd401J4s1ooVPoDwUxiXdP2Yb6hXdRM0jF2oPnO3R7LvzV%2BGK2HpG2nG7ptPcQe9LrAmzQLQXmJUJx%2FIEji2OD%2FwKv3RPNa%2BxBgFcJUEYK4gzBRBE4Opg2%2BPCB2Fy1axZtXSxCknXkMpq6KRh%2BF%2Bncwyhm%2FQhXpTt2fyb%2BWWhYQwwa6QdONb%2Fkmh6tQnIa5KZcIJofsRf7FgmLgKqutzUNKJlSFa84zB3hxgxGzm4NRELNQvbZKJbROu74wcWTFSDEVDDzrkdcdfuZvtBSXs1jZTNSvvyktu%2FkaRFI9eqXGm6QotEzvubzKh2%2BJP9%2FuFOwXBkSfZ5KZEyZ771h2VTwYUv5%2FryZ%2BNGnWAfP2SmyEyr3zkGoyoku%2BUacpWgnXVmOReW38dSL5nE%2BTkje%2FFQKA49ChxXT1MXl1%2Fo3q3UmmZoVRAiCp12j4sexuRe8R5ki%2BaUISSjTJJFO7NNU2TJCp52Nvz5qyJiWpZtJ8MSTJhjs%2FgukcLH6sDS2JZi7CQh5Iul%2FrjCNby%2FUAZu%2B8%2BQvbj5UfjTehS5KcVAQBXpN7kpj8G2oxpFrwy2Fo4Aw2UxwhNRe4JMNqR7b0GOqUBnXKpXPHlCEVrK8EpNtq0g1A1LjuaGgKIRKoao4RFWGQcsXJhwDk15P3FTAVwxFlEGKa1vEvimcI246ToCSZdkWgb3PsMAvJzOGkE52STRL6J%2Br%2Bf34VfUKz6jqvCAarRTZnZr%2FPQj1Nbv3bazLeMh8z63YyaNiS0G3k%2FW8wNJWzKINccuL5kjWXS635uDfipwriYK1h6P%2BoyDyRYaK1EAc4ezZFW&X-Amz-Signature=21a34f675a59715343c76f70bc94df471a6cd3e14ad5f265356827054b22217c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGZPNTE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAsY9kHQ2fRwNA6wR6i1nVAPGKCIXXSflN5cscIb5KzAiEAq4AEs5OkfZi0klZ5wgctvtPmWCr2EBipTUUpjLtrBA8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNZ4rtUOYNR5XFTLjyrcAyVVHnOENPi9e0dEH%2F7qsZR3d4S1Wi68vGhPJXKBD2ss02QPsr1Lqd401J4s1ooVPoDwUxiXdP2Yb6hXdRM0jF2oPnO3R7LvzV%2BGK2HpG2nG7ptPcQe9LrAmzQLQXmJUJx%2FIEji2OD%2FwKv3RPNa%2BxBgFcJUEYK4gzBRBE4Opg2%2BPCB2Fy1axZtXSxCknXkMpq6KRh%2BF%2Bncwyhm%2FQhXpTt2fyb%2BWWhYQwwa6QdONb%2Fkmh6tQnIa5KZcIJofsRf7FgmLgKqutzUNKJlSFa84zB3hxgxGzm4NRELNQvbZKJbROu74wcWTFSDEVDDzrkdcdfuZvtBSXs1jZTNSvvyktu%2FkaRFI9eqXGm6QotEzvubzKh2%2BJP9%2FuFOwXBkSfZ5KZEyZ771h2VTwYUv5%2FryZ%2BNGnWAfP2SmyEyr3zkGoyoku%2BUacpWgnXVmOReW38dSL5nE%2BTkje%2FFQKA49ChxXT1MXl1%2Fo3q3UmmZoVRAiCp12j4sexuRe8R5ki%2BaUISSjTJJFO7NNU2TJCp52Nvz5qyJiWpZtJ8MSTJhjs%2FgukcLH6sDS2JZi7CQh5Iul%2FrjCNby%2FUAZu%2B8%2BQvbj5UfjTehS5KcVAQBXpN7kpj8G2oxpFrwy2Fo4Aw2UxwhNRe4JMNqR7b0GOqUBnXKpXPHlCEVrK8EpNtq0g1A1LjuaGgKIRKoao4RFWGQcsXJhwDk15P3FTAVwxFlEGKa1vEvimcI246ToCSZdkWgb3PsMAvJzOGkE52STRL6J%2Br%2Bf34VfUKz6jqvCAarRTZnZr%2FPQj1Nbv3bazLeMh8z63YyaNiS0G3k%2FW8wNJWzKINccuL5kjWXS635uDfipwriYK1h6P%2BoyDyRYaK1EAc4ezZFW&X-Amz-Signature=7f2fd994ccc0344a73b3bd5ef6db3bf806a2cbace4c58a31eff9d50e5b818559&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
