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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=cc7d2e1f2b4a1af57413a94442504b80b14918cb4ce5804554a443a7163a74b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=649efbb26aa2f70d84fae2431316e0a906fcb23d6ce05aa60f1f6129041dedf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=172d20444556b2ac52541358861e5c6703fb566f382f3b5980d4c8d4e69b9428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=c49c7f09f047c9dcce31a1c58f4f45aecb12f565558be0d30fcc8b54a382c16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=096f88f3a72f705b0dd9fc20e835e1674868064b0b916c7eb99c1af0eb471338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=8930844c16988643ae9e5edca8459ab0b96531dfeee1da814e7fe703183f355a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=4ea67466d7227707c0bf42ffcfb2671e8e3bb1f31084239c1dca7c65a2883711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DVXMGQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAGnORTHywMRBA3GCpGT17YmQyrvMGon%2BxUQx44wDGznAiEA8tDB2VOCnco7p2JO%2FqjTWjqXE1MCdaqcsDzg5ZiFEhgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR1XiTBYL3%2F2cdzkyrcA7evmXyjwa428COBtZO1uMAIlUdFRsMWuujSPCIhdEq0LYnM4BVUn2jB63ZFdpXUSZYi61QrOrGHP67fTLzHevVnY2atr9zxDw9W0DbDEgCmwxPDMFjgB1pf7r%2Fme0lqfHA3n6MJBGohaDMaV%2BSNm4FB1ZtitVm8SfKPIAjTvrCx57%2FPCx%2FxIA%2BwwMsGroClS%2F51BxRGcv8i%2FzWLgoNXl5hfm6b7zjxf%2BlSazEIIzhIGwewFXZRb7qNnbSqko%2FyfXvTqlsHGJVPWXCO5zuWtmvKncd%2FJoP2%2FGJSbFT%2BBflBE9FXBFIlE1Yogmhat8sxmZQvAbYebltjJ%2FRRGobngTRHLEV%2FV99QIrghLtAFaaAoWOGeXHidF5RQ7QZshsEhh9SZE15cxU%2BRUL1H22GAZuQHKipKrbTkf58022mhbLUSILaqg2XNH2gwiV0LR4elcQodmOMaXm9bfDWj9%2BbwGRZ%2B3Dm1vcTsEjKkUEFAwmR7u0nEAYeTg7Mld5pBQ%2FRjvleUJXwUnD6zvvRPOUdP%2BJaD%2BA0N0qHHjmzOKDPYQU4lEhWEPsl2ZHuJlJ0chtV6TQc7oik%2B0CW%2BZpMuTQxEtJrw4SlpSCWrbstD3pl5662HNVMDC4bkXvkSqpvmaMJe1o8MGOqUBYw0zMNfl4t5sgahMCyF9R1Hlk%2B7rEBcsSBJWz%2Fu63veAG5k2jUxQ4HNAc%2B5BpDi%2Fap0XBy93LX5z0tnsVirgvqHnsX2lf%2FTOy%2BhWDCoMUBJYw%2FTAredUIUmDot%2FiXY%2B7KBa%2FnX5hqjuj7MRaRBgr70KdtwO3%2BsR8%2BATC8wLYfqH%2BoL4%2FjRrd1XNGChcqj43veC1T5HeDn%2FGGBmwCychfhmuGjUya&X-Amz-Signature=6984bc4d574e84e7ee44a0a29da70fe4a22dcb2f9cbc3600dcd53c321281f828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
