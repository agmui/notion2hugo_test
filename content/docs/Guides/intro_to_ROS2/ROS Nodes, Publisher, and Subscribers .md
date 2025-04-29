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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBEPTE6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7%2ByqPCJ3k26bssrRGhUWGOjJpwCPEBO7qc8X1H5ZqgIgXfJdCmkVvPq1Bk1g6lEWi4gpD5MmRXkW3P0exqsv7SUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKslcegawnIBBvf%2BpircAzdIh%2FGBPFCRxi9j2yxbteBbl%2BJlB7eovBfsz8EE7KinsvSHnxpzWHMamMcNunnXYaGsShYRdwM1%2Bs8hmbNW56gAuqeYTIw77JDFs%2BmPkw3IWyXi1HvoT0vNN5CBL0UTxUoKOaYpRGF6O4gK4N%2Bbfx%2FvNYV3JOIAGd83MCi5KHeIvTESsIhYyFWMOImo5Q5xWM73rR3hUTt64fFxycV9r%2BO8rQ%2F0dvztUSzoYDKrEZmmigX7KbQmhi8gn5H9XP39tWicHVHDpKW%2BLp4rWTWhGpK4sxjfTJGTsz0jJ%2B36fyYPsVwqS27LzY9Ps4MtsByQsE5YeXcm5tI8h8e6X87hljScue9igXmOjVZcgjZV9dJLkNU05V7AoEaPghfkbkTq9BTCICESNpwJIhAjoWGxoh4U9rsr6kLM7I2qlI8nc%2F%2BWLShV45Q9Gc6t6hEYGZXEUP9g0UoIf4K0%2BG1Mn5%2FF0I9BZHHZ25vDZ3PwE2LVz%2FD%2F403oy5jt4O5agIqLdLUMnagw6SNn5sgmpmvPT1fowkK4CW17js%2F8ll7hpk80zXU4AsNCcksRfKuMhJRCiHSKep2h9l1CQF%2F7A6Zfv7iyM6r0NMWpjkJKjQ5qFTrxGbMvvDSlbxpzHNXbM3f9MICuxMAGOqUB0Holyk%2BA97%2BWAK60AbI3TtBfuLRI9xK%2FgSnoUCC8Jr%2BCG6ZpLLhzikdVeeoptkyvEsRM39OMcbx1hqMneTwDP6SUiB54URLUz0B%2BNipwpTVb8QHXxa2CmaeeuTPUxUA7AbYt4lKzIZWE5Ncld3MvNcH9cLNRxWjXseHaRg6y2RJ6DMJu%2BD%2BqGgVJu8Wv%2FvsigY9NcM2C9pZq3RNShKCiyXT4Pvxa&X-Amz-Signature=8c8e4697b2318623aa027bec752314348991c99375b810e322092f4073397ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBEPTE6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7%2ByqPCJ3k26bssrRGhUWGOjJpwCPEBO7qc8X1H5ZqgIgXfJdCmkVvPq1Bk1g6lEWi4gpD5MmRXkW3P0exqsv7SUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKslcegawnIBBvf%2BpircAzdIh%2FGBPFCRxi9j2yxbteBbl%2BJlB7eovBfsz8EE7KinsvSHnxpzWHMamMcNunnXYaGsShYRdwM1%2Bs8hmbNW56gAuqeYTIw77JDFs%2BmPkw3IWyXi1HvoT0vNN5CBL0UTxUoKOaYpRGF6O4gK4N%2Bbfx%2FvNYV3JOIAGd83MCi5KHeIvTESsIhYyFWMOImo5Q5xWM73rR3hUTt64fFxycV9r%2BO8rQ%2F0dvztUSzoYDKrEZmmigX7KbQmhi8gn5H9XP39tWicHVHDpKW%2BLp4rWTWhGpK4sxjfTJGTsz0jJ%2B36fyYPsVwqS27LzY9Ps4MtsByQsE5YeXcm5tI8h8e6X87hljScue9igXmOjVZcgjZV9dJLkNU05V7AoEaPghfkbkTq9BTCICESNpwJIhAjoWGxoh4U9rsr6kLM7I2qlI8nc%2F%2BWLShV45Q9Gc6t6hEYGZXEUP9g0UoIf4K0%2BG1Mn5%2FF0I9BZHHZ25vDZ3PwE2LVz%2FD%2F403oy5jt4O5agIqLdLUMnagw6SNn5sgmpmvPT1fowkK4CW17js%2F8ll7hpk80zXU4AsNCcksRfKuMhJRCiHSKep2h9l1CQF%2F7A6Zfv7iyM6r0NMWpjkJKjQ5qFTrxGbMvvDSlbxpzHNXbM3f9MICuxMAGOqUB0Holyk%2BA97%2BWAK60AbI3TtBfuLRI9xK%2FgSnoUCC8Jr%2BCG6ZpLLhzikdVeeoptkyvEsRM39OMcbx1hqMneTwDP6SUiB54URLUz0B%2BNipwpTVb8QHXxa2CmaeeuTPUxUA7AbYt4lKzIZWE5Ncld3MvNcH9cLNRxWjXseHaRg6y2RJ6DMJu%2BD%2BqGgVJu8Wv%2FvsigY9NcM2C9pZq3RNShKCiyXT4Pvxa&X-Amz-Signature=af276f71083f1a590035f2ed48612d0fc7ac98c6e366317fe52c002fa4722f71&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBEPTE6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7%2ByqPCJ3k26bssrRGhUWGOjJpwCPEBO7qc8X1H5ZqgIgXfJdCmkVvPq1Bk1g6lEWi4gpD5MmRXkW3P0exqsv7SUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKslcegawnIBBvf%2BpircAzdIh%2FGBPFCRxi9j2yxbteBbl%2BJlB7eovBfsz8EE7KinsvSHnxpzWHMamMcNunnXYaGsShYRdwM1%2Bs8hmbNW56gAuqeYTIw77JDFs%2BmPkw3IWyXi1HvoT0vNN5CBL0UTxUoKOaYpRGF6O4gK4N%2Bbfx%2FvNYV3JOIAGd83MCi5KHeIvTESsIhYyFWMOImo5Q5xWM73rR3hUTt64fFxycV9r%2BO8rQ%2F0dvztUSzoYDKrEZmmigX7KbQmhi8gn5H9XP39tWicHVHDpKW%2BLp4rWTWhGpK4sxjfTJGTsz0jJ%2B36fyYPsVwqS27LzY9Ps4MtsByQsE5YeXcm5tI8h8e6X87hljScue9igXmOjVZcgjZV9dJLkNU05V7AoEaPghfkbkTq9BTCICESNpwJIhAjoWGxoh4U9rsr6kLM7I2qlI8nc%2F%2BWLShV45Q9Gc6t6hEYGZXEUP9g0UoIf4K0%2BG1Mn5%2FF0I9BZHHZ25vDZ3PwE2LVz%2FD%2F403oy5jt4O5agIqLdLUMnagw6SNn5sgmpmvPT1fowkK4CW17js%2F8ll7hpk80zXU4AsNCcksRfKuMhJRCiHSKep2h9l1CQF%2F7A6Zfv7iyM6r0NMWpjkJKjQ5qFTrxGbMvvDSlbxpzHNXbM3f9MICuxMAGOqUB0Holyk%2BA97%2BWAK60AbI3TtBfuLRI9xK%2FgSnoUCC8Jr%2BCG6ZpLLhzikdVeeoptkyvEsRM39OMcbx1hqMneTwDP6SUiB54URLUz0B%2BNipwpTVb8QHXxa2CmaeeuTPUxUA7AbYt4lKzIZWE5Ncld3MvNcH9cLNRxWjXseHaRg6y2RJ6DMJu%2BD%2BqGgVJu8Wv%2FvsigY9NcM2C9pZq3RNShKCiyXT4Pvxa&X-Amz-Signature=8fcc6c19ec9ed49cd530f331ac2ec1234e0a487fe1d0a7810431ecd90432445b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBEPTE6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7%2ByqPCJ3k26bssrRGhUWGOjJpwCPEBO7qc8X1H5ZqgIgXfJdCmkVvPq1Bk1g6lEWi4gpD5MmRXkW3P0exqsv7SUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKslcegawnIBBvf%2BpircAzdIh%2FGBPFCRxi9j2yxbteBbl%2BJlB7eovBfsz8EE7KinsvSHnxpzWHMamMcNunnXYaGsShYRdwM1%2Bs8hmbNW56gAuqeYTIw77JDFs%2BmPkw3IWyXi1HvoT0vNN5CBL0UTxUoKOaYpRGF6O4gK4N%2Bbfx%2FvNYV3JOIAGd83MCi5KHeIvTESsIhYyFWMOImo5Q5xWM73rR3hUTt64fFxycV9r%2BO8rQ%2F0dvztUSzoYDKrEZmmigX7KbQmhi8gn5H9XP39tWicHVHDpKW%2BLp4rWTWhGpK4sxjfTJGTsz0jJ%2B36fyYPsVwqS27LzY9Ps4MtsByQsE5YeXcm5tI8h8e6X87hljScue9igXmOjVZcgjZV9dJLkNU05V7AoEaPghfkbkTq9BTCICESNpwJIhAjoWGxoh4U9rsr6kLM7I2qlI8nc%2F%2BWLShV45Q9Gc6t6hEYGZXEUP9g0UoIf4K0%2BG1Mn5%2FF0I9BZHHZ25vDZ3PwE2LVz%2FD%2F403oy5jt4O5agIqLdLUMnagw6SNn5sgmpmvPT1fowkK4CW17js%2F8ll7hpk80zXU4AsNCcksRfKuMhJRCiHSKep2h9l1CQF%2F7A6Zfv7iyM6r0NMWpjkJKjQ5qFTrxGbMvvDSlbxpzHNXbM3f9MICuxMAGOqUB0Holyk%2BA97%2BWAK60AbI3TtBfuLRI9xK%2FgSnoUCC8Jr%2BCG6ZpLLhzikdVeeoptkyvEsRM39OMcbx1hqMneTwDP6SUiB54URLUz0B%2BNipwpTVb8QHXxa2CmaeeuTPUxUA7AbYt4lKzIZWE5Ncld3MvNcH9cLNRxWjXseHaRg6y2RJ6DMJu%2BD%2BqGgVJu8Wv%2FvsigY9NcM2C9pZq3RNShKCiyXT4Pvxa&X-Amz-Signature=301e0c870661d299d5245acce0268145374135abe36fc9f1222d15b76ca922a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBEPTE6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7%2ByqPCJ3k26bssrRGhUWGOjJpwCPEBO7qc8X1H5ZqgIgXfJdCmkVvPq1Bk1g6lEWi4gpD5MmRXkW3P0exqsv7SUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKslcegawnIBBvf%2BpircAzdIh%2FGBPFCRxi9j2yxbteBbl%2BJlB7eovBfsz8EE7KinsvSHnxpzWHMamMcNunnXYaGsShYRdwM1%2Bs8hmbNW56gAuqeYTIw77JDFs%2BmPkw3IWyXi1HvoT0vNN5CBL0UTxUoKOaYpRGF6O4gK4N%2Bbfx%2FvNYV3JOIAGd83MCi5KHeIvTESsIhYyFWMOImo5Q5xWM73rR3hUTt64fFxycV9r%2BO8rQ%2F0dvztUSzoYDKrEZmmigX7KbQmhi8gn5H9XP39tWicHVHDpKW%2BLp4rWTWhGpK4sxjfTJGTsz0jJ%2B36fyYPsVwqS27LzY9Ps4MtsByQsE5YeXcm5tI8h8e6X87hljScue9igXmOjVZcgjZV9dJLkNU05V7AoEaPghfkbkTq9BTCICESNpwJIhAjoWGxoh4U9rsr6kLM7I2qlI8nc%2F%2BWLShV45Q9Gc6t6hEYGZXEUP9g0UoIf4K0%2BG1Mn5%2FF0I9BZHHZ25vDZ3PwE2LVz%2FD%2F403oy5jt4O5agIqLdLUMnagw6SNn5sgmpmvPT1fowkK4CW17js%2F8ll7hpk80zXU4AsNCcksRfKuMhJRCiHSKep2h9l1CQF%2F7A6Zfv7iyM6r0NMWpjkJKjQ5qFTrxGbMvvDSlbxpzHNXbM3f9MICuxMAGOqUB0Holyk%2BA97%2BWAK60AbI3TtBfuLRI9xK%2FgSnoUCC8Jr%2BCG6ZpLLhzikdVeeoptkyvEsRM39OMcbx1hqMneTwDP6SUiB54URLUz0B%2BNipwpTVb8QHXxa2CmaeeuTPUxUA7AbYt4lKzIZWE5Ncld3MvNcH9cLNRxWjXseHaRg6y2RJ6DMJu%2BD%2BqGgVJu8Wv%2FvsigY9NcM2C9pZq3RNShKCiyXT4Pvxa&X-Amz-Signature=4ddbe5474ae3520c2d84335648a1090c2eb02cf44f73ea786adfcc23ce739547&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBEPTE6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7%2ByqPCJ3k26bssrRGhUWGOjJpwCPEBO7qc8X1H5ZqgIgXfJdCmkVvPq1Bk1g6lEWi4gpD5MmRXkW3P0exqsv7SUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKslcegawnIBBvf%2BpircAzdIh%2FGBPFCRxi9j2yxbteBbl%2BJlB7eovBfsz8EE7KinsvSHnxpzWHMamMcNunnXYaGsShYRdwM1%2Bs8hmbNW56gAuqeYTIw77JDFs%2BmPkw3IWyXi1HvoT0vNN5CBL0UTxUoKOaYpRGF6O4gK4N%2Bbfx%2FvNYV3JOIAGd83MCi5KHeIvTESsIhYyFWMOImo5Q5xWM73rR3hUTt64fFxycV9r%2BO8rQ%2F0dvztUSzoYDKrEZmmigX7KbQmhi8gn5H9XP39tWicHVHDpKW%2BLp4rWTWhGpK4sxjfTJGTsz0jJ%2B36fyYPsVwqS27LzY9Ps4MtsByQsE5YeXcm5tI8h8e6X87hljScue9igXmOjVZcgjZV9dJLkNU05V7AoEaPghfkbkTq9BTCICESNpwJIhAjoWGxoh4U9rsr6kLM7I2qlI8nc%2F%2BWLShV45Q9Gc6t6hEYGZXEUP9g0UoIf4K0%2BG1Mn5%2FF0I9BZHHZ25vDZ3PwE2LVz%2FD%2F403oy5jt4O5agIqLdLUMnagw6SNn5sgmpmvPT1fowkK4CW17js%2F8ll7hpk80zXU4AsNCcksRfKuMhJRCiHSKep2h9l1CQF%2F7A6Zfv7iyM6r0NMWpjkJKjQ5qFTrxGbMvvDSlbxpzHNXbM3f9MICuxMAGOqUB0Holyk%2BA97%2BWAK60AbI3TtBfuLRI9xK%2FgSnoUCC8Jr%2BCG6ZpLLhzikdVeeoptkyvEsRM39OMcbx1hqMneTwDP6SUiB54URLUz0B%2BNipwpTVb8QHXxa2CmaeeuTPUxUA7AbYt4lKzIZWE5Ncld3MvNcH9cLNRxWjXseHaRg6y2RJ6DMJu%2BD%2BqGgVJu8Wv%2FvsigY9NcM2C9pZq3RNShKCiyXT4Pvxa&X-Amz-Signature=4bbd90747c5e9cdc947c2a30299c5432cb256eadd71990abc433529e0daca3e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBEPTE6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7%2ByqPCJ3k26bssrRGhUWGOjJpwCPEBO7qc8X1H5ZqgIgXfJdCmkVvPq1Bk1g6lEWi4gpD5MmRXkW3P0exqsv7SUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKslcegawnIBBvf%2BpircAzdIh%2FGBPFCRxi9j2yxbteBbl%2BJlB7eovBfsz8EE7KinsvSHnxpzWHMamMcNunnXYaGsShYRdwM1%2Bs8hmbNW56gAuqeYTIw77JDFs%2BmPkw3IWyXi1HvoT0vNN5CBL0UTxUoKOaYpRGF6O4gK4N%2Bbfx%2FvNYV3JOIAGd83MCi5KHeIvTESsIhYyFWMOImo5Q5xWM73rR3hUTt64fFxycV9r%2BO8rQ%2F0dvztUSzoYDKrEZmmigX7KbQmhi8gn5H9XP39tWicHVHDpKW%2BLp4rWTWhGpK4sxjfTJGTsz0jJ%2B36fyYPsVwqS27LzY9Ps4MtsByQsE5YeXcm5tI8h8e6X87hljScue9igXmOjVZcgjZV9dJLkNU05V7AoEaPghfkbkTq9BTCICESNpwJIhAjoWGxoh4U9rsr6kLM7I2qlI8nc%2F%2BWLShV45Q9Gc6t6hEYGZXEUP9g0UoIf4K0%2BG1Mn5%2FF0I9BZHHZ25vDZ3PwE2LVz%2FD%2F403oy5jt4O5agIqLdLUMnagw6SNn5sgmpmvPT1fowkK4CW17js%2F8ll7hpk80zXU4AsNCcksRfKuMhJRCiHSKep2h9l1CQF%2F7A6Zfv7iyM6r0NMWpjkJKjQ5qFTrxGbMvvDSlbxpzHNXbM3f9MICuxMAGOqUB0Holyk%2BA97%2BWAK60AbI3TtBfuLRI9xK%2FgSnoUCC8Jr%2BCG6ZpLLhzikdVeeoptkyvEsRM39OMcbx1hqMneTwDP6SUiB54URLUz0B%2BNipwpTVb8QHXxa2CmaeeuTPUxUA7AbYt4lKzIZWE5Ncld3MvNcH9cLNRxWjXseHaRg6y2RJ6DMJu%2BD%2BqGgVJu8Wv%2FvsigY9NcM2C9pZq3RNShKCiyXT4Pvxa&X-Amz-Signature=0f61500ffc250118865b10f59ec81ca6dc2c2d82eff7b4af5ee68b2ec28a713a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBEPTE6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7%2ByqPCJ3k26bssrRGhUWGOjJpwCPEBO7qc8X1H5ZqgIgXfJdCmkVvPq1Bk1g6lEWi4gpD5MmRXkW3P0exqsv7SUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKslcegawnIBBvf%2BpircAzdIh%2FGBPFCRxi9j2yxbteBbl%2BJlB7eovBfsz8EE7KinsvSHnxpzWHMamMcNunnXYaGsShYRdwM1%2Bs8hmbNW56gAuqeYTIw77JDFs%2BmPkw3IWyXi1HvoT0vNN5CBL0UTxUoKOaYpRGF6O4gK4N%2Bbfx%2FvNYV3JOIAGd83MCi5KHeIvTESsIhYyFWMOImo5Q5xWM73rR3hUTt64fFxycV9r%2BO8rQ%2F0dvztUSzoYDKrEZmmigX7KbQmhi8gn5H9XP39tWicHVHDpKW%2BLp4rWTWhGpK4sxjfTJGTsz0jJ%2B36fyYPsVwqS27LzY9Ps4MtsByQsE5YeXcm5tI8h8e6X87hljScue9igXmOjVZcgjZV9dJLkNU05V7AoEaPghfkbkTq9BTCICESNpwJIhAjoWGxoh4U9rsr6kLM7I2qlI8nc%2F%2BWLShV45Q9Gc6t6hEYGZXEUP9g0UoIf4K0%2BG1Mn5%2FF0I9BZHHZ25vDZ3PwE2LVz%2FD%2F403oy5jt4O5agIqLdLUMnagw6SNn5sgmpmvPT1fowkK4CW17js%2F8ll7hpk80zXU4AsNCcksRfKuMhJRCiHSKep2h9l1CQF%2F7A6Zfv7iyM6r0NMWpjkJKjQ5qFTrxGbMvvDSlbxpzHNXbM3f9MICuxMAGOqUB0Holyk%2BA97%2BWAK60AbI3TtBfuLRI9xK%2FgSnoUCC8Jr%2BCG6ZpLLhzikdVeeoptkyvEsRM39OMcbx1hqMneTwDP6SUiB54URLUz0B%2BNipwpTVb8QHXxa2CmaeeuTPUxUA7AbYt4lKzIZWE5Ncld3MvNcH9cLNRxWjXseHaRg6y2RJ6DMJu%2BD%2BqGgVJu8Wv%2FvsigY9NcM2C9pZq3RNShKCiyXT4Pvxa&X-Amz-Signature=2242e5c454c296c69168e94b45666520050cdfd1c347224b4428cfc586cc627d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
