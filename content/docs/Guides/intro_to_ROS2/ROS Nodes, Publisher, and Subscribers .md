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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6H3DWB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgm7L0u%2BaQ23%2BeFOTF2ljnFiBh%2Fgvg4dJVGuN1YCDCUAiEA%2BbgT1AE2%2Bd2Crchnhsu1WbL1nwrjfcaYVTErkP0XPTEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3Kvj1WKTaPolMxCrcA6t669pz0E%2FsKfADbArjHkcUqC%2FlZB4HqAQ4Wh1oaWytEqwhHOh6V6mxcYc3AQOkCVDE1js%2F2DVFWgfQCYbzeDIvD61%2BWTWammKVPuPaARdl3Fkwth5T%2BIQIO%2FZYoPTW%2B2d4QrG4Px2%2FcCvH6LKI%2FP44xYtF2en2O6u6y%2FPVxAB%2BKVf8EpTMySnCUYXIzwzEjx3oSxsvgJdwr%2BPV7SFuvrMSqMT6K8beBKGVpicSNlbphvTtNEocn7ywtMD%2BGgUdK9FDS05CmZCBomXywORgF5xk54SrPa%2Bs4VvMIN%2F1k%2BBeVM6P9SmeadGQtgBmpIom5nTqMpAVne2BYu4%2Bh4niFFsV%2Ffra%2F4nw%2Fk3l2g8YlBFlfYJH1YgRDIR97N1F4Km2zGonMz08G1Pv3OlSvCC3Pn3UoCNF3Bj%2BF3s5IpEVgLhJdZpnWYP8Ry%2BBJe7p1zbp2Wd50eparhpDpMNvXtkxxVlnG7qENMa4oDXWSr6%2BEjI8%2BlXk6ouDdgWMGiHP1GENiqePuF2z6QrMCnTKiAnlon9O9g5%2BMlEbOECTIe4kY%2F2T169StGziB%2BOfW9u3eaBVuUZ2ldoQZ%2FEbd8E8xa0Haxf7feCpS%2BDAMTj5p4Alcc27gcKqAlDS%2FOk%2FY8RoMMTNqb0GOqUB3tHO6UV2hYOXNYppfUbjjUVFU0nnGmexdV6NfVKrzGbRNvSxQimrdwAX6wyuNIcsgkCpsF9EzqvDgdvvMKf1ZUJCPLmGDHLM%2FDtoV6JT7Cw1gQCXnYuQ9yrn5D49Uci%2FMltel3XEBC%2BLzharZcWDP0AyRd5DvYlASw9H5OBXcQLd7meF4EQ0uKpH1n1SDpG38bPgfeOxRvTjN4cW6vxclDg7%2Bozw&X-Amz-Signature=f1762fb11b7431add19e3f010b9f13aab5542876008ff3ad968eedfa1a76de68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6H3DWB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgm7L0u%2BaQ23%2BeFOTF2ljnFiBh%2Fgvg4dJVGuN1YCDCUAiEA%2BbgT1AE2%2Bd2Crchnhsu1WbL1nwrjfcaYVTErkP0XPTEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3Kvj1WKTaPolMxCrcA6t669pz0E%2FsKfADbArjHkcUqC%2FlZB4HqAQ4Wh1oaWytEqwhHOh6V6mxcYc3AQOkCVDE1js%2F2DVFWgfQCYbzeDIvD61%2BWTWammKVPuPaARdl3Fkwth5T%2BIQIO%2FZYoPTW%2B2d4QrG4Px2%2FcCvH6LKI%2FP44xYtF2en2O6u6y%2FPVxAB%2BKVf8EpTMySnCUYXIzwzEjx3oSxsvgJdwr%2BPV7SFuvrMSqMT6K8beBKGVpicSNlbphvTtNEocn7ywtMD%2BGgUdK9FDS05CmZCBomXywORgF5xk54SrPa%2Bs4VvMIN%2F1k%2BBeVM6P9SmeadGQtgBmpIom5nTqMpAVne2BYu4%2Bh4niFFsV%2Ffra%2F4nw%2Fk3l2g8YlBFlfYJH1YgRDIR97N1F4Km2zGonMz08G1Pv3OlSvCC3Pn3UoCNF3Bj%2BF3s5IpEVgLhJdZpnWYP8Ry%2BBJe7p1zbp2Wd50eparhpDpMNvXtkxxVlnG7qENMa4oDXWSr6%2BEjI8%2BlXk6ouDdgWMGiHP1GENiqePuF2z6QrMCnTKiAnlon9O9g5%2BMlEbOECTIe4kY%2F2T169StGziB%2BOfW9u3eaBVuUZ2ldoQZ%2FEbd8E8xa0Haxf7feCpS%2BDAMTj5p4Alcc27gcKqAlDS%2FOk%2FY8RoMMTNqb0GOqUB3tHO6UV2hYOXNYppfUbjjUVFU0nnGmexdV6NfVKrzGbRNvSxQimrdwAX6wyuNIcsgkCpsF9EzqvDgdvvMKf1ZUJCPLmGDHLM%2FDtoV6JT7Cw1gQCXnYuQ9yrn5D49Uci%2FMltel3XEBC%2BLzharZcWDP0AyRd5DvYlASw9H5OBXcQLd7meF4EQ0uKpH1n1SDpG38bPgfeOxRvTjN4cW6vxclDg7%2Bozw&X-Amz-Signature=ebbf51208cb525f6b2ed0ccebcd1782ad49a4cc3be7b12eb8d955ea20bc1f6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6H3DWB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgm7L0u%2BaQ23%2BeFOTF2ljnFiBh%2Fgvg4dJVGuN1YCDCUAiEA%2BbgT1AE2%2Bd2Crchnhsu1WbL1nwrjfcaYVTErkP0XPTEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3Kvj1WKTaPolMxCrcA6t669pz0E%2FsKfADbArjHkcUqC%2FlZB4HqAQ4Wh1oaWytEqwhHOh6V6mxcYc3AQOkCVDE1js%2F2DVFWgfQCYbzeDIvD61%2BWTWammKVPuPaARdl3Fkwth5T%2BIQIO%2FZYoPTW%2B2d4QrG4Px2%2FcCvH6LKI%2FP44xYtF2en2O6u6y%2FPVxAB%2BKVf8EpTMySnCUYXIzwzEjx3oSxsvgJdwr%2BPV7SFuvrMSqMT6K8beBKGVpicSNlbphvTtNEocn7ywtMD%2BGgUdK9FDS05CmZCBomXywORgF5xk54SrPa%2Bs4VvMIN%2F1k%2BBeVM6P9SmeadGQtgBmpIom5nTqMpAVne2BYu4%2Bh4niFFsV%2Ffra%2F4nw%2Fk3l2g8YlBFlfYJH1YgRDIR97N1F4Km2zGonMz08G1Pv3OlSvCC3Pn3UoCNF3Bj%2BF3s5IpEVgLhJdZpnWYP8Ry%2BBJe7p1zbp2Wd50eparhpDpMNvXtkxxVlnG7qENMa4oDXWSr6%2BEjI8%2BlXk6ouDdgWMGiHP1GENiqePuF2z6QrMCnTKiAnlon9O9g5%2BMlEbOECTIe4kY%2F2T169StGziB%2BOfW9u3eaBVuUZ2ldoQZ%2FEbd8E8xa0Haxf7feCpS%2BDAMTj5p4Alcc27gcKqAlDS%2FOk%2FY8RoMMTNqb0GOqUB3tHO6UV2hYOXNYppfUbjjUVFU0nnGmexdV6NfVKrzGbRNvSxQimrdwAX6wyuNIcsgkCpsF9EzqvDgdvvMKf1ZUJCPLmGDHLM%2FDtoV6JT7Cw1gQCXnYuQ9yrn5D49Uci%2FMltel3XEBC%2BLzharZcWDP0AyRd5DvYlASw9H5OBXcQLd7meF4EQ0uKpH1n1SDpG38bPgfeOxRvTjN4cW6vxclDg7%2Bozw&X-Amz-Signature=169336bcf9a91e8ca9b39aec4ffbfe7ddc40be0cfbc763a9cc90d8bb2d0f134c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6H3DWB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgm7L0u%2BaQ23%2BeFOTF2ljnFiBh%2Fgvg4dJVGuN1YCDCUAiEA%2BbgT1AE2%2Bd2Crchnhsu1WbL1nwrjfcaYVTErkP0XPTEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3Kvj1WKTaPolMxCrcA6t669pz0E%2FsKfADbArjHkcUqC%2FlZB4HqAQ4Wh1oaWytEqwhHOh6V6mxcYc3AQOkCVDE1js%2F2DVFWgfQCYbzeDIvD61%2BWTWammKVPuPaARdl3Fkwth5T%2BIQIO%2FZYoPTW%2B2d4QrG4Px2%2FcCvH6LKI%2FP44xYtF2en2O6u6y%2FPVxAB%2BKVf8EpTMySnCUYXIzwzEjx3oSxsvgJdwr%2BPV7SFuvrMSqMT6K8beBKGVpicSNlbphvTtNEocn7ywtMD%2BGgUdK9FDS05CmZCBomXywORgF5xk54SrPa%2Bs4VvMIN%2F1k%2BBeVM6P9SmeadGQtgBmpIom5nTqMpAVne2BYu4%2Bh4niFFsV%2Ffra%2F4nw%2Fk3l2g8YlBFlfYJH1YgRDIR97N1F4Km2zGonMz08G1Pv3OlSvCC3Pn3UoCNF3Bj%2BF3s5IpEVgLhJdZpnWYP8Ry%2BBJe7p1zbp2Wd50eparhpDpMNvXtkxxVlnG7qENMa4oDXWSr6%2BEjI8%2BlXk6ouDdgWMGiHP1GENiqePuF2z6QrMCnTKiAnlon9O9g5%2BMlEbOECTIe4kY%2F2T169StGziB%2BOfW9u3eaBVuUZ2ldoQZ%2FEbd8E8xa0Haxf7feCpS%2BDAMTj5p4Alcc27gcKqAlDS%2FOk%2FY8RoMMTNqb0GOqUB3tHO6UV2hYOXNYppfUbjjUVFU0nnGmexdV6NfVKrzGbRNvSxQimrdwAX6wyuNIcsgkCpsF9EzqvDgdvvMKf1ZUJCPLmGDHLM%2FDtoV6JT7Cw1gQCXnYuQ9yrn5D49Uci%2FMltel3XEBC%2BLzharZcWDP0AyRd5DvYlASw9H5OBXcQLd7meF4EQ0uKpH1n1SDpG38bPgfeOxRvTjN4cW6vxclDg7%2Bozw&X-Amz-Signature=84410b7abd7dfe2e301fbcc8e6e059189a36b9e76ef45e981b9fba004e728490&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6H3DWB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgm7L0u%2BaQ23%2BeFOTF2ljnFiBh%2Fgvg4dJVGuN1YCDCUAiEA%2BbgT1AE2%2Bd2Crchnhsu1WbL1nwrjfcaYVTErkP0XPTEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3Kvj1WKTaPolMxCrcA6t669pz0E%2FsKfADbArjHkcUqC%2FlZB4HqAQ4Wh1oaWytEqwhHOh6V6mxcYc3AQOkCVDE1js%2F2DVFWgfQCYbzeDIvD61%2BWTWammKVPuPaARdl3Fkwth5T%2BIQIO%2FZYoPTW%2B2d4QrG4Px2%2FcCvH6LKI%2FP44xYtF2en2O6u6y%2FPVxAB%2BKVf8EpTMySnCUYXIzwzEjx3oSxsvgJdwr%2BPV7SFuvrMSqMT6K8beBKGVpicSNlbphvTtNEocn7ywtMD%2BGgUdK9FDS05CmZCBomXywORgF5xk54SrPa%2Bs4VvMIN%2F1k%2BBeVM6P9SmeadGQtgBmpIom5nTqMpAVne2BYu4%2Bh4niFFsV%2Ffra%2F4nw%2Fk3l2g8YlBFlfYJH1YgRDIR97N1F4Km2zGonMz08G1Pv3OlSvCC3Pn3UoCNF3Bj%2BF3s5IpEVgLhJdZpnWYP8Ry%2BBJe7p1zbp2Wd50eparhpDpMNvXtkxxVlnG7qENMa4oDXWSr6%2BEjI8%2BlXk6ouDdgWMGiHP1GENiqePuF2z6QrMCnTKiAnlon9O9g5%2BMlEbOECTIe4kY%2F2T169StGziB%2BOfW9u3eaBVuUZ2ldoQZ%2FEbd8E8xa0Haxf7feCpS%2BDAMTj5p4Alcc27gcKqAlDS%2FOk%2FY8RoMMTNqb0GOqUB3tHO6UV2hYOXNYppfUbjjUVFU0nnGmexdV6NfVKrzGbRNvSxQimrdwAX6wyuNIcsgkCpsF9EzqvDgdvvMKf1ZUJCPLmGDHLM%2FDtoV6JT7Cw1gQCXnYuQ9yrn5D49Uci%2FMltel3XEBC%2BLzharZcWDP0AyRd5DvYlASw9H5OBXcQLd7meF4EQ0uKpH1n1SDpG38bPgfeOxRvTjN4cW6vxclDg7%2Bozw&X-Amz-Signature=671e273a315559279af7f121535c610f2f81ffac2b2256adc952f569c9b85d22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6H3DWB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgm7L0u%2BaQ23%2BeFOTF2ljnFiBh%2Fgvg4dJVGuN1YCDCUAiEA%2BbgT1AE2%2Bd2Crchnhsu1WbL1nwrjfcaYVTErkP0XPTEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3Kvj1WKTaPolMxCrcA6t669pz0E%2FsKfADbArjHkcUqC%2FlZB4HqAQ4Wh1oaWytEqwhHOh6V6mxcYc3AQOkCVDE1js%2F2DVFWgfQCYbzeDIvD61%2BWTWammKVPuPaARdl3Fkwth5T%2BIQIO%2FZYoPTW%2B2d4QrG4Px2%2FcCvH6LKI%2FP44xYtF2en2O6u6y%2FPVxAB%2BKVf8EpTMySnCUYXIzwzEjx3oSxsvgJdwr%2BPV7SFuvrMSqMT6K8beBKGVpicSNlbphvTtNEocn7ywtMD%2BGgUdK9FDS05CmZCBomXywORgF5xk54SrPa%2Bs4VvMIN%2F1k%2BBeVM6P9SmeadGQtgBmpIom5nTqMpAVne2BYu4%2Bh4niFFsV%2Ffra%2F4nw%2Fk3l2g8YlBFlfYJH1YgRDIR97N1F4Km2zGonMz08G1Pv3OlSvCC3Pn3UoCNF3Bj%2BF3s5IpEVgLhJdZpnWYP8Ry%2BBJe7p1zbp2Wd50eparhpDpMNvXtkxxVlnG7qENMa4oDXWSr6%2BEjI8%2BlXk6ouDdgWMGiHP1GENiqePuF2z6QrMCnTKiAnlon9O9g5%2BMlEbOECTIe4kY%2F2T169StGziB%2BOfW9u3eaBVuUZ2ldoQZ%2FEbd8E8xa0Haxf7feCpS%2BDAMTj5p4Alcc27gcKqAlDS%2FOk%2FY8RoMMTNqb0GOqUB3tHO6UV2hYOXNYppfUbjjUVFU0nnGmexdV6NfVKrzGbRNvSxQimrdwAX6wyuNIcsgkCpsF9EzqvDgdvvMKf1ZUJCPLmGDHLM%2FDtoV6JT7Cw1gQCXnYuQ9yrn5D49Uci%2FMltel3XEBC%2BLzharZcWDP0AyRd5DvYlASw9H5OBXcQLd7meF4EQ0uKpH1n1SDpG38bPgfeOxRvTjN4cW6vxclDg7%2Bozw&X-Amz-Signature=c17622e649024eec899c5d0ef315da98253fe19083ca22f8a1b8d8239bf7d2db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6H3DWB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgm7L0u%2BaQ23%2BeFOTF2ljnFiBh%2Fgvg4dJVGuN1YCDCUAiEA%2BbgT1AE2%2Bd2Crchnhsu1WbL1nwrjfcaYVTErkP0XPTEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3Kvj1WKTaPolMxCrcA6t669pz0E%2FsKfADbArjHkcUqC%2FlZB4HqAQ4Wh1oaWytEqwhHOh6V6mxcYc3AQOkCVDE1js%2F2DVFWgfQCYbzeDIvD61%2BWTWammKVPuPaARdl3Fkwth5T%2BIQIO%2FZYoPTW%2B2d4QrG4Px2%2FcCvH6LKI%2FP44xYtF2en2O6u6y%2FPVxAB%2BKVf8EpTMySnCUYXIzwzEjx3oSxsvgJdwr%2BPV7SFuvrMSqMT6K8beBKGVpicSNlbphvTtNEocn7ywtMD%2BGgUdK9FDS05CmZCBomXywORgF5xk54SrPa%2Bs4VvMIN%2F1k%2BBeVM6P9SmeadGQtgBmpIom5nTqMpAVne2BYu4%2Bh4niFFsV%2Ffra%2F4nw%2Fk3l2g8YlBFlfYJH1YgRDIR97N1F4Km2zGonMz08G1Pv3OlSvCC3Pn3UoCNF3Bj%2BF3s5IpEVgLhJdZpnWYP8Ry%2BBJe7p1zbp2Wd50eparhpDpMNvXtkxxVlnG7qENMa4oDXWSr6%2BEjI8%2BlXk6ouDdgWMGiHP1GENiqePuF2z6QrMCnTKiAnlon9O9g5%2BMlEbOECTIe4kY%2F2T169StGziB%2BOfW9u3eaBVuUZ2ldoQZ%2FEbd8E8xa0Haxf7feCpS%2BDAMTj5p4Alcc27gcKqAlDS%2FOk%2FY8RoMMTNqb0GOqUB3tHO6UV2hYOXNYppfUbjjUVFU0nnGmexdV6NfVKrzGbRNvSxQimrdwAX6wyuNIcsgkCpsF9EzqvDgdvvMKf1ZUJCPLmGDHLM%2FDtoV6JT7Cw1gQCXnYuQ9yrn5D49Uci%2FMltel3XEBC%2BLzharZcWDP0AyRd5DvYlASw9H5OBXcQLd7meF4EQ0uKpH1n1SDpG38bPgfeOxRvTjN4cW6vxclDg7%2Bozw&X-Amz-Signature=4d12e20fb406a028d0a3677811477e9eaf6cd958bce9eb7506aa65b4de1b8dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6H3DWB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgm7L0u%2BaQ23%2BeFOTF2ljnFiBh%2Fgvg4dJVGuN1YCDCUAiEA%2BbgT1AE2%2Bd2Crchnhsu1WbL1nwrjfcaYVTErkP0XPTEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3Kvj1WKTaPolMxCrcA6t669pz0E%2FsKfADbArjHkcUqC%2FlZB4HqAQ4Wh1oaWytEqwhHOh6V6mxcYc3AQOkCVDE1js%2F2DVFWgfQCYbzeDIvD61%2BWTWammKVPuPaARdl3Fkwth5T%2BIQIO%2FZYoPTW%2B2d4QrG4Px2%2FcCvH6LKI%2FP44xYtF2en2O6u6y%2FPVxAB%2BKVf8EpTMySnCUYXIzwzEjx3oSxsvgJdwr%2BPV7SFuvrMSqMT6K8beBKGVpicSNlbphvTtNEocn7ywtMD%2BGgUdK9FDS05CmZCBomXywORgF5xk54SrPa%2Bs4VvMIN%2F1k%2BBeVM6P9SmeadGQtgBmpIom5nTqMpAVne2BYu4%2Bh4niFFsV%2Ffra%2F4nw%2Fk3l2g8YlBFlfYJH1YgRDIR97N1F4Km2zGonMz08G1Pv3OlSvCC3Pn3UoCNF3Bj%2BF3s5IpEVgLhJdZpnWYP8Ry%2BBJe7p1zbp2Wd50eparhpDpMNvXtkxxVlnG7qENMa4oDXWSr6%2BEjI8%2BlXk6ouDdgWMGiHP1GENiqePuF2z6QrMCnTKiAnlon9O9g5%2BMlEbOECTIe4kY%2F2T169StGziB%2BOfW9u3eaBVuUZ2ldoQZ%2FEbd8E8xa0Haxf7feCpS%2BDAMTj5p4Alcc27gcKqAlDS%2FOk%2FY8RoMMTNqb0GOqUB3tHO6UV2hYOXNYppfUbjjUVFU0nnGmexdV6NfVKrzGbRNvSxQimrdwAX6wyuNIcsgkCpsF9EzqvDgdvvMKf1ZUJCPLmGDHLM%2FDtoV6JT7Cw1gQCXnYuQ9yrn5D49Uci%2FMltel3XEBC%2BLzharZcWDP0AyRd5DvYlASw9H5OBXcQLd7meF4EQ0uKpH1n1SDpG38bPgfeOxRvTjN4cW6vxclDg7%2Bozw&X-Amz-Signature=33668506d498cbb735af5cbd7d6471ab00cff6631b2018f53b822fa42392d448&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
