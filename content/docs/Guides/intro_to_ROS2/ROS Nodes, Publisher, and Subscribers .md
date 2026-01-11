---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBSR6XH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAmpbz3UcXTwul69GHSe6WZl6AH3yS%2FdCBDxP%2BbujoiVAiBgGAR2%2FqtJIxXlo76r4FZgb%2FWkvg9wJEWMXKLMWlkDZyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMoHXSoV3mdc0CgxKtwD02h7R9E%2Buk1g7d5bD8mnRvTJkRkWxzk7iFYrSNA9VPUN%2FopR%2BGoS8swE28gsEIdY1UMH08i46Ibyly8%2Fg3X8RUmNY019C4r%2FRBw6450jSmb3YWjWdS5f0PV6ooxZFGUxggo6Y29vHbQyMbYA4WZto0XuCHw9%2BggNRdqqm0M82TBgL0CD9LSvdck6whNHkpEj94Nea%2FqR1xF54kMTNFBmVDn%2Fyva%2BwEBRWQt2uGldOXSfRH9wS2mxkWy3MqBQWJ6xPIw0YqgDY6yIG%2BY0S8dJTrvicq8qEVJ82c9CP6jqpsuW%2FqUVjgnOF3rXOtygywhaoxWFC3A%2FzCXHBdscf0ymcDOlBntt3PYREwz%2BBYnIlFb%2FE%2BeN1drkARGGQdfWVsq21cZWcL3KAHSW7h0ac230NJe41oFJ1Z1OWShJv4gw6EfWGQYjsrA%2BMwZrFZQask9Ng%2BMD4XvG8WwkPFrcrLyxUW3EqaLpNsqx5GXcKRNsqzX2ucwPCIXhSe2MjMpzkki8Hs0Er63iedy%2BPtM0MiGfKoSR%2FKV5HVOe4Pf%2BMHI6s7B5GARbGfmXLUvAmw1so%2FFHKUySjO2p7Z%2F9KBeRsxbsFM2qrHSFkLz2DEGncWOc1o92z0fO13K628yzgOcw0v2LywY6pgFqMl%2F4LRn0ffGAEPFWU8XpVpxtPTPpzgO8jm8nhPG0P5HHHldmxmQ6s7LC%2BTQ8Hbe1EyuzLqaeoc8FJGkuoj252JdbycqQGePoh0%2FBkaflkGkWkNyIouwipIpdob7ULb8p6fu4crP1I6fr9RpDZY6ter9xeXIUy1CCrjHiOnWIR3cgDCJqPr0BHkvsUB3DW0v9i1QXYszz4sVejRD59vNcEtFKMu7%2B&X-Amz-Signature=524a8cb26410541577e4311735161e07ff0a58cf8e816ec3a30b942e0d30f719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBSR6XH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAmpbz3UcXTwul69GHSe6WZl6AH3yS%2FdCBDxP%2BbujoiVAiBgGAR2%2FqtJIxXlo76r4FZgb%2FWkvg9wJEWMXKLMWlkDZyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMoHXSoV3mdc0CgxKtwD02h7R9E%2Buk1g7d5bD8mnRvTJkRkWxzk7iFYrSNA9VPUN%2FopR%2BGoS8swE28gsEIdY1UMH08i46Ibyly8%2Fg3X8RUmNY019C4r%2FRBw6450jSmb3YWjWdS5f0PV6ooxZFGUxggo6Y29vHbQyMbYA4WZto0XuCHw9%2BggNRdqqm0M82TBgL0CD9LSvdck6whNHkpEj94Nea%2FqR1xF54kMTNFBmVDn%2Fyva%2BwEBRWQt2uGldOXSfRH9wS2mxkWy3MqBQWJ6xPIw0YqgDY6yIG%2BY0S8dJTrvicq8qEVJ82c9CP6jqpsuW%2FqUVjgnOF3rXOtygywhaoxWFC3A%2FzCXHBdscf0ymcDOlBntt3PYREwz%2BBYnIlFb%2FE%2BeN1drkARGGQdfWVsq21cZWcL3KAHSW7h0ac230NJe41oFJ1Z1OWShJv4gw6EfWGQYjsrA%2BMwZrFZQask9Ng%2BMD4XvG8WwkPFrcrLyxUW3EqaLpNsqx5GXcKRNsqzX2ucwPCIXhSe2MjMpzkki8Hs0Er63iedy%2BPtM0MiGfKoSR%2FKV5HVOe4Pf%2BMHI6s7B5GARbGfmXLUvAmw1so%2FFHKUySjO2p7Z%2F9KBeRsxbsFM2qrHSFkLz2DEGncWOc1o92z0fO13K628yzgOcw0v2LywY6pgFqMl%2F4LRn0ffGAEPFWU8XpVpxtPTPpzgO8jm8nhPG0P5HHHldmxmQ6s7LC%2BTQ8Hbe1EyuzLqaeoc8FJGkuoj252JdbycqQGePoh0%2FBkaflkGkWkNyIouwipIpdob7ULb8p6fu4crP1I6fr9RpDZY6ter9xeXIUy1CCrjHiOnWIR3cgDCJqPr0BHkvsUB3DW0v9i1QXYszz4sVejRD59vNcEtFKMu7%2B&X-Amz-Signature=e1f6da2b961039ece636cda30bb583db7a2ec2c86672bafb01a95f49d8da12e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBSR6XH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAmpbz3UcXTwul69GHSe6WZl6AH3yS%2FdCBDxP%2BbujoiVAiBgGAR2%2FqtJIxXlo76r4FZgb%2FWkvg9wJEWMXKLMWlkDZyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMoHXSoV3mdc0CgxKtwD02h7R9E%2Buk1g7d5bD8mnRvTJkRkWxzk7iFYrSNA9VPUN%2FopR%2BGoS8swE28gsEIdY1UMH08i46Ibyly8%2Fg3X8RUmNY019C4r%2FRBw6450jSmb3YWjWdS5f0PV6ooxZFGUxggo6Y29vHbQyMbYA4WZto0XuCHw9%2BggNRdqqm0M82TBgL0CD9LSvdck6whNHkpEj94Nea%2FqR1xF54kMTNFBmVDn%2Fyva%2BwEBRWQt2uGldOXSfRH9wS2mxkWy3MqBQWJ6xPIw0YqgDY6yIG%2BY0S8dJTrvicq8qEVJ82c9CP6jqpsuW%2FqUVjgnOF3rXOtygywhaoxWFC3A%2FzCXHBdscf0ymcDOlBntt3PYREwz%2BBYnIlFb%2FE%2BeN1drkARGGQdfWVsq21cZWcL3KAHSW7h0ac230NJe41oFJ1Z1OWShJv4gw6EfWGQYjsrA%2BMwZrFZQask9Ng%2BMD4XvG8WwkPFrcrLyxUW3EqaLpNsqx5GXcKRNsqzX2ucwPCIXhSe2MjMpzkki8Hs0Er63iedy%2BPtM0MiGfKoSR%2FKV5HVOe4Pf%2BMHI6s7B5GARbGfmXLUvAmw1so%2FFHKUySjO2p7Z%2F9KBeRsxbsFM2qrHSFkLz2DEGncWOc1o92z0fO13K628yzgOcw0v2LywY6pgFqMl%2F4LRn0ffGAEPFWU8XpVpxtPTPpzgO8jm8nhPG0P5HHHldmxmQ6s7LC%2BTQ8Hbe1EyuzLqaeoc8FJGkuoj252JdbycqQGePoh0%2FBkaflkGkWkNyIouwipIpdob7ULb8p6fu4crP1I6fr9RpDZY6ter9xeXIUy1CCrjHiOnWIR3cgDCJqPr0BHkvsUB3DW0v9i1QXYszz4sVejRD59vNcEtFKMu7%2B&X-Amz-Signature=9d7e7f4c48aed488ee33cd847f8f53c6d18521ff82ea20a3063b0920e73c9e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBSR6XH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAmpbz3UcXTwul69GHSe6WZl6AH3yS%2FdCBDxP%2BbujoiVAiBgGAR2%2FqtJIxXlo76r4FZgb%2FWkvg9wJEWMXKLMWlkDZyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMoHXSoV3mdc0CgxKtwD02h7R9E%2Buk1g7d5bD8mnRvTJkRkWxzk7iFYrSNA9VPUN%2FopR%2BGoS8swE28gsEIdY1UMH08i46Ibyly8%2Fg3X8RUmNY019C4r%2FRBw6450jSmb3YWjWdS5f0PV6ooxZFGUxggo6Y29vHbQyMbYA4WZto0XuCHw9%2BggNRdqqm0M82TBgL0CD9LSvdck6whNHkpEj94Nea%2FqR1xF54kMTNFBmVDn%2Fyva%2BwEBRWQt2uGldOXSfRH9wS2mxkWy3MqBQWJ6xPIw0YqgDY6yIG%2BY0S8dJTrvicq8qEVJ82c9CP6jqpsuW%2FqUVjgnOF3rXOtygywhaoxWFC3A%2FzCXHBdscf0ymcDOlBntt3PYREwz%2BBYnIlFb%2FE%2BeN1drkARGGQdfWVsq21cZWcL3KAHSW7h0ac230NJe41oFJ1Z1OWShJv4gw6EfWGQYjsrA%2BMwZrFZQask9Ng%2BMD4XvG8WwkPFrcrLyxUW3EqaLpNsqx5GXcKRNsqzX2ucwPCIXhSe2MjMpzkki8Hs0Er63iedy%2BPtM0MiGfKoSR%2FKV5HVOe4Pf%2BMHI6s7B5GARbGfmXLUvAmw1so%2FFHKUySjO2p7Z%2F9KBeRsxbsFM2qrHSFkLz2DEGncWOc1o92z0fO13K628yzgOcw0v2LywY6pgFqMl%2F4LRn0ffGAEPFWU8XpVpxtPTPpzgO8jm8nhPG0P5HHHldmxmQ6s7LC%2BTQ8Hbe1EyuzLqaeoc8FJGkuoj252JdbycqQGePoh0%2FBkaflkGkWkNyIouwipIpdob7ULb8p6fu4crP1I6fr9RpDZY6ter9xeXIUy1CCrjHiOnWIR3cgDCJqPr0BHkvsUB3DW0v9i1QXYszz4sVejRD59vNcEtFKMu7%2B&X-Amz-Signature=247268f750d2046f48dad3c7c468f54faebf155af54992900552f9b068299f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBSR6XH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAmpbz3UcXTwul69GHSe6WZl6AH3yS%2FdCBDxP%2BbujoiVAiBgGAR2%2FqtJIxXlo76r4FZgb%2FWkvg9wJEWMXKLMWlkDZyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMoHXSoV3mdc0CgxKtwD02h7R9E%2Buk1g7d5bD8mnRvTJkRkWxzk7iFYrSNA9VPUN%2FopR%2BGoS8swE28gsEIdY1UMH08i46Ibyly8%2Fg3X8RUmNY019C4r%2FRBw6450jSmb3YWjWdS5f0PV6ooxZFGUxggo6Y29vHbQyMbYA4WZto0XuCHw9%2BggNRdqqm0M82TBgL0CD9LSvdck6whNHkpEj94Nea%2FqR1xF54kMTNFBmVDn%2Fyva%2BwEBRWQt2uGldOXSfRH9wS2mxkWy3MqBQWJ6xPIw0YqgDY6yIG%2BY0S8dJTrvicq8qEVJ82c9CP6jqpsuW%2FqUVjgnOF3rXOtygywhaoxWFC3A%2FzCXHBdscf0ymcDOlBntt3PYREwz%2BBYnIlFb%2FE%2BeN1drkARGGQdfWVsq21cZWcL3KAHSW7h0ac230NJe41oFJ1Z1OWShJv4gw6EfWGQYjsrA%2BMwZrFZQask9Ng%2BMD4XvG8WwkPFrcrLyxUW3EqaLpNsqx5GXcKRNsqzX2ucwPCIXhSe2MjMpzkki8Hs0Er63iedy%2BPtM0MiGfKoSR%2FKV5HVOe4Pf%2BMHI6s7B5GARbGfmXLUvAmw1so%2FFHKUySjO2p7Z%2F9KBeRsxbsFM2qrHSFkLz2DEGncWOc1o92z0fO13K628yzgOcw0v2LywY6pgFqMl%2F4LRn0ffGAEPFWU8XpVpxtPTPpzgO8jm8nhPG0P5HHHldmxmQ6s7LC%2BTQ8Hbe1EyuzLqaeoc8FJGkuoj252JdbycqQGePoh0%2FBkaflkGkWkNyIouwipIpdob7ULb8p6fu4crP1I6fr9RpDZY6ter9xeXIUy1CCrjHiOnWIR3cgDCJqPr0BHkvsUB3DW0v9i1QXYszz4sVejRD59vNcEtFKMu7%2B&X-Amz-Signature=b5dce01e5d8a56d3ef6ccfce95e8bca4cff294526c698c802421848285025783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBSR6XH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAmpbz3UcXTwul69GHSe6WZl6AH3yS%2FdCBDxP%2BbujoiVAiBgGAR2%2FqtJIxXlo76r4FZgb%2FWkvg9wJEWMXKLMWlkDZyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMoHXSoV3mdc0CgxKtwD02h7R9E%2Buk1g7d5bD8mnRvTJkRkWxzk7iFYrSNA9VPUN%2FopR%2BGoS8swE28gsEIdY1UMH08i46Ibyly8%2Fg3X8RUmNY019C4r%2FRBw6450jSmb3YWjWdS5f0PV6ooxZFGUxggo6Y29vHbQyMbYA4WZto0XuCHw9%2BggNRdqqm0M82TBgL0CD9LSvdck6whNHkpEj94Nea%2FqR1xF54kMTNFBmVDn%2Fyva%2BwEBRWQt2uGldOXSfRH9wS2mxkWy3MqBQWJ6xPIw0YqgDY6yIG%2BY0S8dJTrvicq8qEVJ82c9CP6jqpsuW%2FqUVjgnOF3rXOtygywhaoxWFC3A%2FzCXHBdscf0ymcDOlBntt3PYREwz%2BBYnIlFb%2FE%2BeN1drkARGGQdfWVsq21cZWcL3KAHSW7h0ac230NJe41oFJ1Z1OWShJv4gw6EfWGQYjsrA%2BMwZrFZQask9Ng%2BMD4XvG8WwkPFrcrLyxUW3EqaLpNsqx5GXcKRNsqzX2ucwPCIXhSe2MjMpzkki8Hs0Er63iedy%2BPtM0MiGfKoSR%2FKV5HVOe4Pf%2BMHI6s7B5GARbGfmXLUvAmw1so%2FFHKUySjO2p7Z%2F9KBeRsxbsFM2qrHSFkLz2DEGncWOc1o92z0fO13K628yzgOcw0v2LywY6pgFqMl%2F4LRn0ffGAEPFWU8XpVpxtPTPpzgO8jm8nhPG0P5HHHldmxmQ6s7LC%2BTQ8Hbe1EyuzLqaeoc8FJGkuoj252JdbycqQGePoh0%2FBkaflkGkWkNyIouwipIpdob7ULb8p6fu4crP1I6fr9RpDZY6ter9xeXIUy1CCrjHiOnWIR3cgDCJqPr0BHkvsUB3DW0v9i1QXYszz4sVejRD59vNcEtFKMu7%2B&X-Amz-Signature=6491a00f53d68a91299489694d743b601ee43d38091d4754c16e314593a0c6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBSR6XH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAmpbz3UcXTwul69GHSe6WZl6AH3yS%2FdCBDxP%2BbujoiVAiBgGAR2%2FqtJIxXlo76r4FZgb%2FWkvg9wJEWMXKLMWlkDZyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMoHXSoV3mdc0CgxKtwD02h7R9E%2Buk1g7d5bD8mnRvTJkRkWxzk7iFYrSNA9VPUN%2FopR%2BGoS8swE28gsEIdY1UMH08i46Ibyly8%2Fg3X8RUmNY019C4r%2FRBw6450jSmb3YWjWdS5f0PV6ooxZFGUxggo6Y29vHbQyMbYA4WZto0XuCHw9%2BggNRdqqm0M82TBgL0CD9LSvdck6whNHkpEj94Nea%2FqR1xF54kMTNFBmVDn%2Fyva%2BwEBRWQt2uGldOXSfRH9wS2mxkWy3MqBQWJ6xPIw0YqgDY6yIG%2BY0S8dJTrvicq8qEVJ82c9CP6jqpsuW%2FqUVjgnOF3rXOtygywhaoxWFC3A%2FzCXHBdscf0ymcDOlBntt3PYREwz%2BBYnIlFb%2FE%2BeN1drkARGGQdfWVsq21cZWcL3KAHSW7h0ac230NJe41oFJ1Z1OWShJv4gw6EfWGQYjsrA%2BMwZrFZQask9Ng%2BMD4XvG8WwkPFrcrLyxUW3EqaLpNsqx5GXcKRNsqzX2ucwPCIXhSe2MjMpzkki8Hs0Er63iedy%2BPtM0MiGfKoSR%2FKV5HVOe4Pf%2BMHI6s7B5GARbGfmXLUvAmw1so%2FFHKUySjO2p7Z%2F9KBeRsxbsFM2qrHSFkLz2DEGncWOc1o92z0fO13K628yzgOcw0v2LywY6pgFqMl%2F4LRn0ffGAEPFWU8XpVpxtPTPpzgO8jm8nhPG0P5HHHldmxmQ6s7LC%2BTQ8Hbe1EyuzLqaeoc8FJGkuoj252JdbycqQGePoh0%2FBkaflkGkWkNyIouwipIpdob7ULb8p6fu4crP1I6fr9RpDZY6ter9xeXIUy1CCrjHiOnWIR3cgDCJqPr0BHkvsUB3DW0v9i1QXYszz4sVejRD59vNcEtFKMu7%2B&X-Amz-Signature=2b52c0131b273e0b603e1e9b2d40448ddc7e4ebc84292baab5a7e991157e1f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBSR6XH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAmpbz3UcXTwul69GHSe6WZl6AH3yS%2FdCBDxP%2BbujoiVAiBgGAR2%2FqtJIxXlo76r4FZgb%2FWkvg9wJEWMXKLMWlkDZyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMoHXSoV3mdc0CgxKtwD02h7R9E%2Buk1g7d5bD8mnRvTJkRkWxzk7iFYrSNA9VPUN%2FopR%2BGoS8swE28gsEIdY1UMH08i46Ibyly8%2Fg3X8RUmNY019C4r%2FRBw6450jSmb3YWjWdS5f0PV6ooxZFGUxggo6Y29vHbQyMbYA4WZto0XuCHw9%2BggNRdqqm0M82TBgL0CD9LSvdck6whNHkpEj94Nea%2FqR1xF54kMTNFBmVDn%2Fyva%2BwEBRWQt2uGldOXSfRH9wS2mxkWy3MqBQWJ6xPIw0YqgDY6yIG%2BY0S8dJTrvicq8qEVJ82c9CP6jqpsuW%2FqUVjgnOF3rXOtygywhaoxWFC3A%2FzCXHBdscf0ymcDOlBntt3PYREwz%2BBYnIlFb%2FE%2BeN1drkARGGQdfWVsq21cZWcL3KAHSW7h0ac230NJe41oFJ1Z1OWShJv4gw6EfWGQYjsrA%2BMwZrFZQask9Ng%2BMD4XvG8WwkPFrcrLyxUW3EqaLpNsqx5GXcKRNsqzX2ucwPCIXhSe2MjMpzkki8Hs0Er63iedy%2BPtM0MiGfKoSR%2FKV5HVOe4Pf%2BMHI6s7B5GARbGfmXLUvAmw1so%2FFHKUySjO2p7Z%2F9KBeRsxbsFM2qrHSFkLz2DEGncWOc1o92z0fO13K628yzgOcw0v2LywY6pgFqMl%2F4LRn0ffGAEPFWU8XpVpxtPTPpzgO8jm8nhPG0P5HHHldmxmQ6s7LC%2BTQ8Hbe1EyuzLqaeoc8FJGkuoj252JdbycqQGePoh0%2FBkaflkGkWkNyIouwipIpdob7ULb8p6fu4crP1I6fr9RpDZY6ter9xeXIUy1CCrjHiOnWIR3cgDCJqPr0BHkvsUB3DW0v9i1QXYszz4sVejRD59vNcEtFKMu7%2B&X-Amz-Signature=262f0c7a420fb87ba8b1622d6f007a765b7504abff265da085a29ee8b60162f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
