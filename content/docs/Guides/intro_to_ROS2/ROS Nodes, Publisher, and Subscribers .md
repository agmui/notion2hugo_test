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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4U5LQY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPZX%2FYfBhk05sU%2FMqZMHpHZ7si39eXLVPwU9Z4VFeGbAiEA1IoOL0f40x%2BhJieQohaO9CeHwjLG0ynvj%2Bh4xIpseZQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaNYN4i68hFKeWXWircA0JEdIY3p%2B0qT1WFoR5s3zyHhwGZUVM%2BQQ82%2F6K3rLLID%2F5ZCi4jOXa1wQfwUsOn6uQMwpFfVh1fKdNm2Kkcp7D%2FQMTlBz%2BVhsA69%2FhYzsQVPUIyF58dpO%2F4l6VDQxRxQSHKvevYOQA8Fn1qWxE%2FspngjqjhSRUdM7n0RkB17LWzfN%2BaudfBTymBTNG0ld58bAq8V9t3mL8TrskI5WsPBAEAMWnF97cd3aSFo%2BGa8QjeS9mhf1qNA34hcJZfFCTGLGF2beIOppydLL2NsEnd2J9g9mQE2iT%2BEub2n60y7pbqVPsz%2FuzQleH%2FE0dbewRTweMMYmCNEFSIcpwfmMveqSYpZ2cwhfjuXZ82%2Bk71%2BZZzz6KszT7nXxpishPMSKun6AqEMKlz2CerSlKd3qj9w4nt65jHjREOnEn0ypPN6jqq%2BZ9RTj8ifCZx604Kp6mcvt6zsfhreCfIJsJB2ffQVxRdtk5V7fwQKjkZZhV%2FQzP8qq8lP%2F06XloVlZpKa5x64B1y7XXh7qUnhnlqoWtjyEng0WxsoqE8fzsiQIF00UoEngALeyNh55RwCClaJKynh72JD%2BWUyCEKe%2B7ut10SlLVU4qxsJRmmLyKF%2BgniPrsU3hmvct00RyZ%2BjPa5MK3f88MGOqUB%2B777QwI1jzo0GnTpgKr26cPSGa%2BDpgu5cSrkivwbcg%2BFeE%2F2bM5aCQ2VWBXL0C85o5Z80s6pvY8hxUagSUgh%2B4T85yfeADhxnJoPM8ALODIuMcNbFJA7MoAtsXXRpSz2S7uEUodfdt9G36tXyETMHjSOUrgIO7INjviWPa1XQfM3iZHKZmGmLLge3KEP9%2BOGOQjj2OKgI63HXjJxNaJGrbemmZXI&X-Amz-Signature=805ba9a96a9d2e134c37db953db22d4f19b0dc858b089f119812c0237466dac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4U5LQY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPZX%2FYfBhk05sU%2FMqZMHpHZ7si39eXLVPwU9Z4VFeGbAiEA1IoOL0f40x%2BhJieQohaO9CeHwjLG0ynvj%2Bh4xIpseZQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaNYN4i68hFKeWXWircA0JEdIY3p%2B0qT1WFoR5s3zyHhwGZUVM%2BQQ82%2F6K3rLLID%2F5ZCi4jOXa1wQfwUsOn6uQMwpFfVh1fKdNm2Kkcp7D%2FQMTlBz%2BVhsA69%2FhYzsQVPUIyF58dpO%2F4l6VDQxRxQSHKvevYOQA8Fn1qWxE%2FspngjqjhSRUdM7n0RkB17LWzfN%2BaudfBTymBTNG0ld58bAq8V9t3mL8TrskI5WsPBAEAMWnF97cd3aSFo%2BGa8QjeS9mhf1qNA34hcJZfFCTGLGF2beIOppydLL2NsEnd2J9g9mQE2iT%2BEub2n60y7pbqVPsz%2FuzQleH%2FE0dbewRTweMMYmCNEFSIcpwfmMveqSYpZ2cwhfjuXZ82%2Bk71%2BZZzz6KszT7nXxpishPMSKun6AqEMKlz2CerSlKd3qj9w4nt65jHjREOnEn0ypPN6jqq%2BZ9RTj8ifCZx604Kp6mcvt6zsfhreCfIJsJB2ffQVxRdtk5V7fwQKjkZZhV%2FQzP8qq8lP%2F06XloVlZpKa5x64B1y7XXh7qUnhnlqoWtjyEng0WxsoqE8fzsiQIF00UoEngALeyNh55RwCClaJKynh72JD%2BWUyCEKe%2B7ut10SlLVU4qxsJRmmLyKF%2BgniPrsU3hmvct00RyZ%2BjPa5MK3f88MGOqUB%2B777QwI1jzo0GnTpgKr26cPSGa%2BDpgu5cSrkivwbcg%2BFeE%2F2bM5aCQ2VWBXL0C85o5Z80s6pvY8hxUagSUgh%2B4T85yfeADhxnJoPM8ALODIuMcNbFJA7MoAtsXXRpSz2S7uEUodfdt9G36tXyETMHjSOUrgIO7INjviWPa1XQfM3iZHKZmGmLLge3KEP9%2BOGOQjj2OKgI63HXjJxNaJGrbemmZXI&X-Amz-Signature=7d9b2dbc39a07bda70507c613acc9180d1b4412009ff457ef8915ba1a25b6045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4U5LQY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPZX%2FYfBhk05sU%2FMqZMHpHZ7si39eXLVPwU9Z4VFeGbAiEA1IoOL0f40x%2BhJieQohaO9CeHwjLG0ynvj%2Bh4xIpseZQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaNYN4i68hFKeWXWircA0JEdIY3p%2B0qT1WFoR5s3zyHhwGZUVM%2BQQ82%2F6K3rLLID%2F5ZCi4jOXa1wQfwUsOn6uQMwpFfVh1fKdNm2Kkcp7D%2FQMTlBz%2BVhsA69%2FhYzsQVPUIyF58dpO%2F4l6VDQxRxQSHKvevYOQA8Fn1qWxE%2FspngjqjhSRUdM7n0RkB17LWzfN%2BaudfBTymBTNG0ld58bAq8V9t3mL8TrskI5WsPBAEAMWnF97cd3aSFo%2BGa8QjeS9mhf1qNA34hcJZfFCTGLGF2beIOppydLL2NsEnd2J9g9mQE2iT%2BEub2n60y7pbqVPsz%2FuzQleH%2FE0dbewRTweMMYmCNEFSIcpwfmMveqSYpZ2cwhfjuXZ82%2Bk71%2BZZzz6KszT7nXxpishPMSKun6AqEMKlz2CerSlKd3qj9w4nt65jHjREOnEn0ypPN6jqq%2BZ9RTj8ifCZx604Kp6mcvt6zsfhreCfIJsJB2ffQVxRdtk5V7fwQKjkZZhV%2FQzP8qq8lP%2F06XloVlZpKa5x64B1y7XXh7qUnhnlqoWtjyEng0WxsoqE8fzsiQIF00UoEngALeyNh55RwCClaJKynh72JD%2BWUyCEKe%2B7ut10SlLVU4qxsJRmmLyKF%2BgniPrsU3hmvct00RyZ%2BjPa5MK3f88MGOqUB%2B777QwI1jzo0GnTpgKr26cPSGa%2BDpgu5cSrkivwbcg%2BFeE%2F2bM5aCQ2VWBXL0C85o5Z80s6pvY8hxUagSUgh%2B4T85yfeADhxnJoPM8ALODIuMcNbFJA7MoAtsXXRpSz2S7uEUodfdt9G36tXyETMHjSOUrgIO7INjviWPa1XQfM3iZHKZmGmLLge3KEP9%2BOGOQjj2OKgI63HXjJxNaJGrbemmZXI&X-Amz-Signature=857dbd10527dc0404266a88ddf4cb521453d926ce47d19f404381a5a87f7fdb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4U5LQY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPZX%2FYfBhk05sU%2FMqZMHpHZ7si39eXLVPwU9Z4VFeGbAiEA1IoOL0f40x%2BhJieQohaO9CeHwjLG0ynvj%2Bh4xIpseZQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaNYN4i68hFKeWXWircA0JEdIY3p%2B0qT1WFoR5s3zyHhwGZUVM%2BQQ82%2F6K3rLLID%2F5ZCi4jOXa1wQfwUsOn6uQMwpFfVh1fKdNm2Kkcp7D%2FQMTlBz%2BVhsA69%2FhYzsQVPUIyF58dpO%2F4l6VDQxRxQSHKvevYOQA8Fn1qWxE%2FspngjqjhSRUdM7n0RkB17LWzfN%2BaudfBTymBTNG0ld58bAq8V9t3mL8TrskI5WsPBAEAMWnF97cd3aSFo%2BGa8QjeS9mhf1qNA34hcJZfFCTGLGF2beIOppydLL2NsEnd2J9g9mQE2iT%2BEub2n60y7pbqVPsz%2FuzQleH%2FE0dbewRTweMMYmCNEFSIcpwfmMveqSYpZ2cwhfjuXZ82%2Bk71%2BZZzz6KszT7nXxpishPMSKun6AqEMKlz2CerSlKd3qj9w4nt65jHjREOnEn0ypPN6jqq%2BZ9RTj8ifCZx604Kp6mcvt6zsfhreCfIJsJB2ffQVxRdtk5V7fwQKjkZZhV%2FQzP8qq8lP%2F06XloVlZpKa5x64B1y7XXh7qUnhnlqoWtjyEng0WxsoqE8fzsiQIF00UoEngALeyNh55RwCClaJKynh72JD%2BWUyCEKe%2B7ut10SlLVU4qxsJRmmLyKF%2BgniPrsU3hmvct00RyZ%2BjPa5MK3f88MGOqUB%2B777QwI1jzo0GnTpgKr26cPSGa%2BDpgu5cSrkivwbcg%2BFeE%2F2bM5aCQ2VWBXL0C85o5Z80s6pvY8hxUagSUgh%2B4T85yfeADhxnJoPM8ALODIuMcNbFJA7MoAtsXXRpSz2S7uEUodfdt9G36tXyETMHjSOUrgIO7INjviWPa1XQfM3iZHKZmGmLLge3KEP9%2BOGOQjj2OKgI63HXjJxNaJGrbemmZXI&X-Amz-Signature=91a43c96c18ce93544281dbeea005983d0a6dd84e31ccee6457f9675867ad18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4U5LQY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPZX%2FYfBhk05sU%2FMqZMHpHZ7si39eXLVPwU9Z4VFeGbAiEA1IoOL0f40x%2BhJieQohaO9CeHwjLG0ynvj%2Bh4xIpseZQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaNYN4i68hFKeWXWircA0JEdIY3p%2B0qT1WFoR5s3zyHhwGZUVM%2BQQ82%2F6K3rLLID%2F5ZCi4jOXa1wQfwUsOn6uQMwpFfVh1fKdNm2Kkcp7D%2FQMTlBz%2BVhsA69%2FhYzsQVPUIyF58dpO%2F4l6VDQxRxQSHKvevYOQA8Fn1qWxE%2FspngjqjhSRUdM7n0RkB17LWzfN%2BaudfBTymBTNG0ld58bAq8V9t3mL8TrskI5WsPBAEAMWnF97cd3aSFo%2BGa8QjeS9mhf1qNA34hcJZfFCTGLGF2beIOppydLL2NsEnd2J9g9mQE2iT%2BEub2n60y7pbqVPsz%2FuzQleH%2FE0dbewRTweMMYmCNEFSIcpwfmMveqSYpZ2cwhfjuXZ82%2Bk71%2BZZzz6KszT7nXxpishPMSKun6AqEMKlz2CerSlKd3qj9w4nt65jHjREOnEn0ypPN6jqq%2BZ9RTj8ifCZx604Kp6mcvt6zsfhreCfIJsJB2ffQVxRdtk5V7fwQKjkZZhV%2FQzP8qq8lP%2F06XloVlZpKa5x64B1y7XXh7qUnhnlqoWtjyEng0WxsoqE8fzsiQIF00UoEngALeyNh55RwCClaJKynh72JD%2BWUyCEKe%2B7ut10SlLVU4qxsJRmmLyKF%2BgniPrsU3hmvct00RyZ%2BjPa5MK3f88MGOqUB%2B777QwI1jzo0GnTpgKr26cPSGa%2BDpgu5cSrkivwbcg%2BFeE%2F2bM5aCQ2VWBXL0C85o5Z80s6pvY8hxUagSUgh%2B4T85yfeADhxnJoPM8ALODIuMcNbFJA7MoAtsXXRpSz2S7uEUodfdt9G36tXyETMHjSOUrgIO7INjviWPa1XQfM3iZHKZmGmLLge3KEP9%2BOGOQjj2OKgI63HXjJxNaJGrbemmZXI&X-Amz-Signature=2af7db38190fe224e1b5e6486de695138ef4e32789cda0528579cab12bb98789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4U5LQY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPZX%2FYfBhk05sU%2FMqZMHpHZ7si39eXLVPwU9Z4VFeGbAiEA1IoOL0f40x%2BhJieQohaO9CeHwjLG0ynvj%2Bh4xIpseZQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaNYN4i68hFKeWXWircA0JEdIY3p%2B0qT1WFoR5s3zyHhwGZUVM%2BQQ82%2F6K3rLLID%2F5ZCi4jOXa1wQfwUsOn6uQMwpFfVh1fKdNm2Kkcp7D%2FQMTlBz%2BVhsA69%2FhYzsQVPUIyF58dpO%2F4l6VDQxRxQSHKvevYOQA8Fn1qWxE%2FspngjqjhSRUdM7n0RkB17LWzfN%2BaudfBTymBTNG0ld58bAq8V9t3mL8TrskI5WsPBAEAMWnF97cd3aSFo%2BGa8QjeS9mhf1qNA34hcJZfFCTGLGF2beIOppydLL2NsEnd2J9g9mQE2iT%2BEub2n60y7pbqVPsz%2FuzQleH%2FE0dbewRTweMMYmCNEFSIcpwfmMveqSYpZ2cwhfjuXZ82%2Bk71%2BZZzz6KszT7nXxpishPMSKun6AqEMKlz2CerSlKd3qj9w4nt65jHjREOnEn0ypPN6jqq%2BZ9RTj8ifCZx604Kp6mcvt6zsfhreCfIJsJB2ffQVxRdtk5V7fwQKjkZZhV%2FQzP8qq8lP%2F06XloVlZpKa5x64B1y7XXh7qUnhnlqoWtjyEng0WxsoqE8fzsiQIF00UoEngALeyNh55RwCClaJKynh72JD%2BWUyCEKe%2B7ut10SlLVU4qxsJRmmLyKF%2BgniPrsU3hmvct00RyZ%2BjPa5MK3f88MGOqUB%2B777QwI1jzo0GnTpgKr26cPSGa%2BDpgu5cSrkivwbcg%2BFeE%2F2bM5aCQ2VWBXL0C85o5Z80s6pvY8hxUagSUgh%2B4T85yfeADhxnJoPM8ALODIuMcNbFJA7MoAtsXXRpSz2S7uEUodfdt9G36tXyETMHjSOUrgIO7INjviWPa1XQfM3iZHKZmGmLLge3KEP9%2BOGOQjj2OKgI63HXjJxNaJGrbemmZXI&X-Amz-Signature=8110eea866124b9999c9114b1d08239a3484224971b073677b6ee8abdcf8ffb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4U5LQY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPZX%2FYfBhk05sU%2FMqZMHpHZ7si39eXLVPwU9Z4VFeGbAiEA1IoOL0f40x%2BhJieQohaO9CeHwjLG0ynvj%2Bh4xIpseZQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaNYN4i68hFKeWXWircA0JEdIY3p%2B0qT1WFoR5s3zyHhwGZUVM%2BQQ82%2F6K3rLLID%2F5ZCi4jOXa1wQfwUsOn6uQMwpFfVh1fKdNm2Kkcp7D%2FQMTlBz%2BVhsA69%2FhYzsQVPUIyF58dpO%2F4l6VDQxRxQSHKvevYOQA8Fn1qWxE%2FspngjqjhSRUdM7n0RkB17LWzfN%2BaudfBTymBTNG0ld58bAq8V9t3mL8TrskI5WsPBAEAMWnF97cd3aSFo%2BGa8QjeS9mhf1qNA34hcJZfFCTGLGF2beIOppydLL2NsEnd2J9g9mQE2iT%2BEub2n60y7pbqVPsz%2FuzQleH%2FE0dbewRTweMMYmCNEFSIcpwfmMveqSYpZ2cwhfjuXZ82%2Bk71%2BZZzz6KszT7nXxpishPMSKun6AqEMKlz2CerSlKd3qj9w4nt65jHjREOnEn0ypPN6jqq%2BZ9RTj8ifCZx604Kp6mcvt6zsfhreCfIJsJB2ffQVxRdtk5V7fwQKjkZZhV%2FQzP8qq8lP%2F06XloVlZpKa5x64B1y7XXh7qUnhnlqoWtjyEng0WxsoqE8fzsiQIF00UoEngALeyNh55RwCClaJKynh72JD%2BWUyCEKe%2B7ut10SlLVU4qxsJRmmLyKF%2BgniPrsU3hmvct00RyZ%2BjPa5MK3f88MGOqUB%2B777QwI1jzo0GnTpgKr26cPSGa%2BDpgu5cSrkivwbcg%2BFeE%2F2bM5aCQ2VWBXL0C85o5Z80s6pvY8hxUagSUgh%2B4T85yfeADhxnJoPM8ALODIuMcNbFJA7MoAtsXXRpSz2S7uEUodfdt9G36tXyETMHjSOUrgIO7INjviWPa1XQfM3iZHKZmGmLLge3KEP9%2BOGOQjj2OKgI63HXjJxNaJGrbemmZXI&X-Amz-Signature=476e74912147ac790fea750b913eb3ba80cc3271d86a342b4eecd5072f899d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4U5LQY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPZX%2FYfBhk05sU%2FMqZMHpHZ7si39eXLVPwU9Z4VFeGbAiEA1IoOL0f40x%2BhJieQohaO9CeHwjLG0ynvj%2Bh4xIpseZQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaNYN4i68hFKeWXWircA0JEdIY3p%2B0qT1WFoR5s3zyHhwGZUVM%2BQQ82%2F6K3rLLID%2F5ZCi4jOXa1wQfwUsOn6uQMwpFfVh1fKdNm2Kkcp7D%2FQMTlBz%2BVhsA69%2FhYzsQVPUIyF58dpO%2F4l6VDQxRxQSHKvevYOQA8Fn1qWxE%2FspngjqjhSRUdM7n0RkB17LWzfN%2BaudfBTymBTNG0ld58bAq8V9t3mL8TrskI5WsPBAEAMWnF97cd3aSFo%2BGa8QjeS9mhf1qNA34hcJZfFCTGLGF2beIOppydLL2NsEnd2J9g9mQE2iT%2BEub2n60y7pbqVPsz%2FuzQleH%2FE0dbewRTweMMYmCNEFSIcpwfmMveqSYpZ2cwhfjuXZ82%2Bk71%2BZZzz6KszT7nXxpishPMSKun6AqEMKlz2CerSlKd3qj9w4nt65jHjREOnEn0ypPN6jqq%2BZ9RTj8ifCZx604Kp6mcvt6zsfhreCfIJsJB2ffQVxRdtk5V7fwQKjkZZhV%2FQzP8qq8lP%2F06XloVlZpKa5x64B1y7XXh7qUnhnlqoWtjyEng0WxsoqE8fzsiQIF00UoEngALeyNh55RwCClaJKynh72JD%2BWUyCEKe%2B7ut10SlLVU4qxsJRmmLyKF%2BgniPrsU3hmvct00RyZ%2BjPa5MK3f88MGOqUB%2B777QwI1jzo0GnTpgKr26cPSGa%2BDpgu5cSrkivwbcg%2BFeE%2F2bM5aCQ2VWBXL0C85o5Z80s6pvY8hxUagSUgh%2B4T85yfeADhxnJoPM8ALODIuMcNbFJA7MoAtsXXRpSz2S7uEUodfdt9G36tXyETMHjSOUrgIO7INjviWPa1XQfM3iZHKZmGmLLge3KEP9%2BOGOQjj2OKgI63HXjJxNaJGrbemmZXI&X-Amz-Signature=8ffe3f99683eaa917ee0ebf0fc990434706c5432526aff0794e398d465ffccaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
