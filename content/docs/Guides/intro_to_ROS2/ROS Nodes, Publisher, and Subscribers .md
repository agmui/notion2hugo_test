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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DIGVCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCJ3dippTYaZabzeGAu9eJTTmmNkKKROYv%2BPDd7DysrJgIhANTli2uX6mC8IUb9swaa90HQVQpjkfn4V%2BdoDTcHClgYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUsLLmbm6b8YGqWMq3AMjmdXjI6e%2BLuZiIjam%2F%2BFsNGwxoqEFupwE7PmonkvBBIuEjVNbtfr08JgPD2P9bJM%2BHG28KcYk%2FobltQIlo%2BxnodC3axcq3%2BVtRFEK%2BZbWQNugts9eGQBzib8opFu0OdQMie8bTnu8U9ISroWOVdLUzs2EupSAquN1o517Biga9Zgph5t4sVW6vHImzw%2FLsbyNgEk%2Fn6zrVz0TTo4a56l5IvE3x3Zts8rwe9ZY3fDWUA%2FBnlTR8jh7rpipDdd5NAzKY3aUK6CfXKgGnusdlgeHKbQLqWAatZkTYe2K6Xbz0EFNYO0D6wMLAXR1Yms%2F0O%2BkEPBsOqIMIRkXail%2FcKqjK2dvrZXegckg8GlgRAPO11US5fAIG4e6atpaP6zW69m76W8WJy0PypJIvcGkwu8tnRSZeHAoSz3Pup8NBcD61bMre11J%2BqS%2FeVDfwcbgLuNic%2B629xuD2A0vXoy8jyIHSZC9KPWyAO2uJL4ZqgRKS3qXd3HllNjNAi8r7uN1AHnAWtpyZSZEXRxMksYoTTY3T%2FiYNGqM2mhKF6YeWgAFcBKMVgnlGXwIBp0DGgzmAp5EVQW3BvwYyxw40VvlqsvR9Ih7GdAr3Y7e2demdJxOrhi0HYsF5rnk%2FmmZyTDW7aW%2FBjqkASEKJmCyYpAiz4Yi7Yj6JRnf0h7uwiteew7LJnixZQfTW8GzL8Kv12blJX%2F7HcxvYE3dktH3JFWd52unJbWncSuSdmFss8Pw%2BSWiGXCgKjbETGlzhbs%2BUIQVz%2FTavVrgvSd8iQrcfDNjC553lXb%2FqolcKPVXrIKhFcAcB0QhShGD764OvfQQHygMqFwY8V76E1tgvttRzEsmJiaNiNTY%2FX%2FKve1N&X-Amz-Signature=57c94c60fc06fe2edbdac7a4413a61ff2dc28e9c67edae755b98c5727ef97dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DIGVCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCJ3dippTYaZabzeGAu9eJTTmmNkKKROYv%2BPDd7DysrJgIhANTli2uX6mC8IUb9swaa90HQVQpjkfn4V%2BdoDTcHClgYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUsLLmbm6b8YGqWMq3AMjmdXjI6e%2BLuZiIjam%2F%2BFsNGwxoqEFupwE7PmonkvBBIuEjVNbtfr08JgPD2P9bJM%2BHG28KcYk%2FobltQIlo%2BxnodC3axcq3%2BVtRFEK%2BZbWQNugts9eGQBzib8opFu0OdQMie8bTnu8U9ISroWOVdLUzs2EupSAquN1o517Biga9Zgph5t4sVW6vHImzw%2FLsbyNgEk%2Fn6zrVz0TTo4a56l5IvE3x3Zts8rwe9ZY3fDWUA%2FBnlTR8jh7rpipDdd5NAzKY3aUK6CfXKgGnusdlgeHKbQLqWAatZkTYe2K6Xbz0EFNYO0D6wMLAXR1Yms%2F0O%2BkEPBsOqIMIRkXail%2FcKqjK2dvrZXegckg8GlgRAPO11US5fAIG4e6atpaP6zW69m76W8WJy0PypJIvcGkwu8tnRSZeHAoSz3Pup8NBcD61bMre11J%2BqS%2FeVDfwcbgLuNic%2B629xuD2A0vXoy8jyIHSZC9KPWyAO2uJL4ZqgRKS3qXd3HllNjNAi8r7uN1AHnAWtpyZSZEXRxMksYoTTY3T%2FiYNGqM2mhKF6YeWgAFcBKMVgnlGXwIBp0DGgzmAp5EVQW3BvwYyxw40VvlqsvR9Ih7GdAr3Y7e2demdJxOrhi0HYsF5rnk%2FmmZyTDW7aW%2FBjqkASEKJmCyYpAiz4Yi7Yj6JRnf0h7uwiteew7LJnixZQfTW8GzL8Kv12blJX%2F7HcxvYE3dktH3JFWd52unJbWncSuSdmFss8Pw%2BSWiGXCgKjbETGlzhbs%2BUIQVz%2FTavVrgvSd8iQrcfDNjC553lXb%2FqolcKPVXrIKhFcAcB0QhShGD764OvfQQHygMqFwY8V76E1tgvttRzEsmJiaNiNTY%2FX%2FKve1N&X-Amz-Signature=19e8c1d4ffb1e7677bb2daf059ed709ace1a05d2e13c8faed19ec6164e5bb934&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DIGVCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCJ3dippTYaZabzeGAu9eJTTmmNkKKROYv%2BPDd7DysrJgIhANTli2uX6mC8IUb9swaa90HQVQpjkfn4V%2BdoDTcHClgYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUsLLmbm6b8YGqWMq3AMjmdXjI6e%2BLuZiIjam%2F%2BFsNGwxoqEFupwE7PmonkvBBIuEjVNbtfr08JgPD2P9bJM%2BHG28KcYk%2FobltQIlo%2BxnodC3axcq3%2BVtRFEK%2BZbWQNugts9eGQBzib8opFu0OdQMie8bTnu8U9ISroWOVdLUzs2EupSAquN1o517Biga9Zgph5t4sVW6vHImzw%2FLsbyNgEk%2Fn6zrVz0TTo4a56l5IvE3x3Zts8rwe9ZY3fDWUA%2FBnlTR8jh7rpipDdd5NAzKY3aUK6CfXKgGnusdlgeHKbQLqWAatZkTYe2K6Xbz0EFNYO0D6wMLAXR1Yms%2F0O%2BkEPBsOqIMIRkXail%2FcKqjK2dvrZXegckg8GlgRAPO11US5fAIG4e6atpaP6zW69m76W8WJy0PypJIvcGkwu8tnRSZeHAoSz3Pup8NBcD61bMre11J%2BqS%2FeVDfwcbgLuNic%2B629xuD2A0vXoy8jyIHSZC9KPWyAO2uJL4ZqgRKS3qXd3HllNjNAi8r7uN1AHnAWtpyZSZEXRxMksYoTTY3T%2FiYNGqM2mhKF6YeWgAFcBKMVgnlGXwIBp0DGgzmAp5EVQW3BvwYyxw40VvlqsvR9Ih7GdAr3Y7e2demdJxOrhi0HYsF5rnk%2FmmZyTDW7aW%2FBjqkASEKJmCyYpAiz4Yi7Yj6JRnf0h7uwiteew7LJnixZQfTW8GzL8Kv12blJX%2F7HcxvYE3dktH3JFWd52unJbWncSuSdmFss8Pw%2BSWiGXCgKjbETGlzhbs%2BUIQVz%2FTavVrgvSd8iQrcfDNjC553lXb%2FqolcKPVXrIKhFcAcB0QhShGD764OvfQQHygMqFwY8V76E1tgvttRzEsmJiaNiNTY%2FX%2FKve1N&X-Amz-Signature=b9f19df8bf2ba0041547f0829c1e5bbde87a9079b6d1bee4b991017109c2f264&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DIGVCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCJ3dippTYaZabzeGAu9eJTTmmNkKKROYv%2BPDd7DysrJgIhANTli2uX6mC8IUb9swaa90HQVQpjkfn4V%2BdoDTcHClgYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUsLLmbm6b8YGqWMq3AMjmdXjI6e%2BLuZiIjam%2F%2BFsNGwxoqEFupwE7PmonkvBBIuEjVNbtfr08JgPD2P9bJM%2BHG28KcYk%2FobltQIlo%2BxnodC3axcq3%2BVtRFEK%2BZbWQNugts9eGQBzib8opFu0OdQMie8bTnu8U9ISroWOVdLUzs2EupSAquN1o517Biga9Zgph5t4sVW6vHImzw%2FLsbyNgEk%2Fn6zrVz0TTo4a56l5IvE3x3Zts8rwe9ZY3fDWUA%2FBnlTR8jh7rpipDdd5NAzKY3aUK6CfXKgGnusdlgeHKbQLqWAatZkTYe2K6Xbz0EFNYO0D6wMLAXR1Yms%2F0O%2BkEPBsOqIMIRkXail%2FcKqjK2dvrZXegckg8GlgRAPO11US5fAIG4e6atpaP6zW69m76W8WJy0PypJIvcGkwu8tnRSZeHAoSz3Pup8NBcD61bMre11J%2BqS%2FeVDfwcbgLuNic%2B629xuD2A0vXoy8jyIHSZC9KPWyAO2uJL4ZqgRKS3qXd3HllNjNAi8r7uN1AHnAWtpyZSZEXRxMksYoTTY3T%2FiYNGqM2mhKF6YeWgAFcBKMVgnlGXwIBp0DGgzmAp5EVQW3BvwYyxw40VvlqsvR9Ih7GdAr3Y7e2demdJxOrhi0HYsF5rnk%2FmmZyTDW7aW%2FBjqkASEKJmCyYpAiz4Yi7Yj6JRnf0h7uwiteew7LJnixZQfTW8GzL8Kv12blJX%2F7HcxvYE3dktH3JFWd52unJbWncSuSdmFss8Pw%2BSWiGXCgKjbETGlzhbs%2BUIQVz%2FTavVrgvSd8iQrcfDNjC553lXb%2FqolcKPVXrIKhFcAcB0QhShGD764OvfQQHygMqFwY8V76E1tgvttRzEsmJiaNiNTY%2FX%2FKve1N&X-Amz-Signature=516c447ca6ffa288f80afad5ad12d073a3380041e092fccdfe6987f8fa029a07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DIGVCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCJ3dippTYaZabzeGAu9eJTTmmNkKKROYv%2BPDd7DysrJgIhANTli2uX6mC8IUb9swaa90HQVQpjkfn4V%2BdoDTcHClgYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUsLLmbm6b8YGqWMq3AMjmdXjI6e%2BLuZiIjam%2F%2BFsNGwxoqEFupwE7PmonkvBBIuEjVNbtfr08JgPD2P9bJM%2BHG28KcYk%2FobltQIlo%2BxnodC3axcq3%2BVtRFEK%2BZbWQNugts9eGQBzib8opFu0OdQMie8bTnu8U9ISroWOVdLUzs2EupSAquN1o517Biga9Zgph5t4sVW6vHImzw%2FLsbyNgEk%2Fn6zrVz0TTo4a56l5IvE3x3Zts8rwe9ZY3fDWUA%2FBnlTR8jh7rpipDdd5NAzKY3aUK6CfXKgGnusdlgeHKbQLqWAatZkTYe2K6Xbz0EFNYO0D6wMLAXR1Yms%2F0O%2BkEPBsOqIMIRkXail%2FcKqjK2dvrZXegckg8GlgRAPO11US5fAIG4e6atpaP6zW69m76W8WJy0PypJIvcGkwu8tnRSZeHAoSz3Pup8NBcD61bMre11J%2BqS%2FeVDfwcbgLuNic%2B629xuD2A0vXoy8jyIHSZC9KPWyAO2uJL4ZqgRKS3qXd3HllNjNAi8r7uN1AHnAWtpyZSZEXRxMksYoTTY3T%2FiYNGqM2mhKF6YeWgAFcBKMVgnlGXwIBp0DGgzmAp5EVQW3BvwYyxw40VvlqsvR9Ih7GdAr3Y7e2demdJxOrhi0HYsF5rnk%2FmmZyTDW7aW%2FBjqkASEKJmCyYpAiz4Yi7Yj6JRnf0h7uwiteew7LJnixZQfTW8GzL8Kv12blJX%2F7HcxvYE3dktH3JFWd52unJbWncSuSdmFss8Pw%2BSWiGXCgKjbETGlzhbs%2BUIQVz%2FTavVrgvSd8iQrcfDNjC553lXb%2FqolcKPVXrIKhFcAcB0QhShGD764OvfQQHygMqFwY8V76E1tgvttRzEsmJiaNiNTY%2FX%2FKve1N&X-Amz-Signature=ae322e6187d1149d75bfeada8020824602d67f21dd7a5475091bbad27449d54a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DIGVCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCJ3dippTYaZabzeGAu9eJTTmmNkKKROYv%2BPDd7DysrJgIhANTli2uX6mC8IUb9swaa90HQVQpjkfn4V%2BdoDTcHClgYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUsLLmbm6b8YGqWMq3AMjmdXjI6e%2BLuZiIjam%2F%2BFsNGwxoqEFupwE7PmonkvBBIuEjVNbtfr08JgPD2P9bJM%2BHG28KcYk%2FobltQIlo%2BxnodC3axcq3%2BVtRFEK%2BZbWQNugts9eGQBzib8opFu0OdQMie8bTnu8U9ISroWOVdLUzs2EupSAquN1o517Biga9Zgph5t4sVW6vHImzw%2FLsbyNgEk%2Fn6zrVz0TTo4a56l5IvE3x3Zts8rwe9ZY3fDWUA%2FBnlTR8jh7rpipDdd5NAzKY3aUK6CfXKgGnusdlgeHKbQLqWAatZkTYe2K6Xbz0EFNYO0D6wMLAXR1Yms%2F0O%2BkEPBsOqIMIRkXail%2FcKqjK2dvrZXegckg8GlgRAPO11US5fAIG4e6atpaP6zW69m76W8WJy0PypJIvcGkwu8tnRSZeHAoSz3Pup8NBcD61bMre11J%2BqS%2FeVDfwcbgLuNic%2B629xuD2A0vXoy8jyIHSZC9KPWyAO2uJL4ZqgRKS3qXd3HllNjNAi8r7uN1AHnAWtpyZSZEXRxMksYoTTY3T%2FiYNGqM2mhKF6YeWgAFcBKMVgnlGXwIBp0DGgzmAp5EVQW3BvwYyxw40VvlqsvR9Ih7GdAr3Y7e2demdJxOrhi0HYsF5rnk%2FmmZyTDW7aW%2FBjqkASEKJmCyYpAiz4Yi7Yj6JRnf0h7uwiteew7LJnixZQfTW8GzL8Kv12blJX%2F7HcxvYE3dktH3JFWd52unJbWncSuSdmFss8Pw%2BSWiGXCgKjbETGlzhbs%2BUIQVz%2FTavVrgvSd8iQrcfDNjC553lXb%2FqolcKPVXrIKhFcAcB0QhShGD764OvfQQHygMqFwY8V76E1tgvttRzEsmJiaNiNTY%2FX%2FKve1N&X-Amz-Signature=421368f8fbc2a2d52b526ab874575c3b3c6c4a6728640e072a9adae04b8609d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DIGVCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCJ3dippTYaZabzeGAu9eJTTmmNkKKROYv%2BPDd7DysrJgIhANTli2uX6mC8IUb9swaa90HQVQpjkfn4V%2BdoDTcHClgYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUsLLmbm6b8YGqWMq3AMjmdXjI6e%2BLuZiIjam%2F%2BFsNGwxoqEFupwE7PmonkvBBIuEjVNbtfr08JgPD2P9bJM%2BHG28KcYk%2FobltQIlo%2BxnodC3axcq3%2BVtRFEK%2BZbWQNugts9eGQBzib8opFu0OdQMie8bTnu8U9ISroWOVdLUzs2EupSAquN1o517Biga9Zgph5t4sVW6vHImzw%2FLsbyNgEk%2Fn6zrVz0TTo4a56l5IvE3x3Zts8rwe9ZY3fDWUA%2FBnlTR8jh7rpipDdd5NAzKY3aUK6CfXKgGnusdlgeHKbQLqWAatZkTYe2K6Xbz0EFNYO0D6wMLAXR1Yms%2F0O%2BkEPBsOqIMIRkXail%2FcKqjK2dvrZXegckg8GlgRAPO11US5fAIG4e6atpaP6zW69m76W8WJy0PypJIvcGkwu8tnRSZeHAoSz3Pup8NBcD61bMre11J%2BqS%2FeVDfwcbgLuNic%2B629xuD2A0vXoy8jyIHSZC9KPWyAO2uJL4ZqgRKS3qXd3HllNjNAi8r7uN1AHnAWtpyZSZEXRxMksYoTTY3T%2FiYNGqM2mhKF6YeWgAFcBKMVgnlGXwIBp0DGgzmAp5EVQW3BvwYyxw40VvlqsvR9Ih7GdAr3Y7e2demdJxOrhi0HYsF5rnk%2FmmZyTDW7aW%2FBjqkASEKJmCyYpAiz4Yi7Yj6JRnf0h7uwiteew7LJnixZQfTW8GzL8Kv12blJX%2F7HcxvYE3dktH3JFWd52unJbWncSuSdmFss8Pw%2BSWiGXCgKjbETGlzhbs%2BUIQVz%2FTavVrgvSd8iQrcfDNjC553lXb%2FqolcKPVXrIKhFcAcB0QhShGD764OvfQQHygMqFwY8V76E1tgvttRzEsmJiaNiNTY%2FX%2FKve1N&X-Amz-Signature=e331b2193c239a36b6930ff7cda18b57c5a3922fb2cce12a9896c0d3b5d012e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DIGVCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCJ3dippTYaZabzeGAu9eJTTmmNkKKROYv%2BPDd7DysrJgIhANTli2uX6mC8IUb9swaa90HQVQpjkfn4V%2BdoDTcHClgYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUsLLmbm6b8YGqWMq3AMjmdXjI6e%2BLuZiIjam%2F%2BFsNGwxoqEFupwE7PmonkvBBIuEjVNbtfr08JgPD2P9bJM%2BHG28KcYk%2FobltQIlo%2BxnodC3axcq3%2BVtRFEK%2BZbWQNugts9eGQBzib8opFu0OdQMie8bTnu8U9ISroWOVdLUzs2EupSAquN1o517Biga9Zgph5t4sVW6vHImzw%2FLsbyNgEk%2Fn6zrVz0TTo4a56l5IvE3x3Zts8rwe9ZY3fDWUA%2FBnlTR8jh7rpipDdd5NAzKY3aUK6CfXKgGnusdlgeHKbQLqWAatZkTYe2K6Xbz0EFNYO0D6wMLAXR1Yms%2F0O%2BkEPBsOqIMIRkXail%2FcKqjK2dvrZXegckg8GlgRAPO11US5fAIG4e6atpaP6zW69m76W8WJy0PypJIvcGkwu8tnRSZeHAoSz3Pup8NBcD61bMre11J%2BqS%2FeVDfwcbgLuNic%2B629xuD2A0vXoy8jyIHSZC9KPWyAO2uJL4ZqgRKS3qXd3HllNjNAi8r7uN1AHnAWtpyZSZEXRxMksYoTTY3T%2FiYNGqM2mhKF6YeWgAFcBKMVgnlGXwIBp0DGgzmAp5EVQW3BvwYyxw40VvlqsvR9Ih7GdAr3Y7e2demdJxOrhi0HYsF5rnk%2FmmZyTDW7aW%2FBjqkASEKJmCyYpAiz4Yi7Yj6JRnf0h7uwiteew7LJnixZQfTW8GzL8Kv12blJX%2F7HcxvYE3dktH3JFWd52unJbWncSuSdmFss8Pw%2BSWiGXCgKjbETGlzhbs%2BUIQVz%2FTavVrgvSd8iQrcfDNjC553lXb%2FqolcKPVXrIKhFcAcB0QhShGD764OvfQQHygMqFwY8V76E1tgvttRzEsmJiaNiNTY%2FX%2FKve1N&X-Amz-Signature=998f3041baf31ffa66855345a8220404faca7611ac54c05241fa5f18b0ed7ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
