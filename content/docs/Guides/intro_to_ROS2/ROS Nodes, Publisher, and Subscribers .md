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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YF3PU3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTtKsNBJ0pnfpkfkxV5IFyKRhCMjyK64rvmCVGnAlWAiEAgfnTK3frxuxlKR007UJ9QPi0Km99x4XBPo28t7kmq98qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDhhJ1UUvNDwFErcCrcA2a5jmzuqozxPMYasf%2FuSfbN%2FyMOsg4Wohl8h4cs9YR7Mo2zFGgBvPTyOybho%2B8OT3Zr1GftrOAXk7ociAFoTAq0EWkhw9rdTtTzSqvgLAF6BvHAmRvIxhzP1MJ9k%2BC%2FcSFMw2GrpRo%2B5INYKZOdVUl6hVN%2Fy%2BfAusJdugKxTqjF5tIGIc0jfKnIEq%2FoO%2F2gW0VaYg%2B2boZOZsh9NSbV1MxEVVH%2BK4SfIXqE7CJlfRhpQ148HANJtdkOu6wR72rYMVWahf2rScesd3KSHcq%2BIQO%2FE2nh4C7CxPabAWBfT4Douc%2BLK1L9fGfbdbX303AgSzh9g6vQBwT7HvdSU3TiHk1S6oK3SH%2BehQ7sYFlxvk78DisybAEz%2BambKcPLKATwbeqE%2BEWgIH9A9xsM9hA%2FSFjuDZy4Zm0vwPvojjUaISZhh%2B9tDxIt%2FuWMQ9TFE8iSQihy%2BTbSLFkI2p7ekqYzBzle%2FHFXSE9B2KJX%2FSmC4GhmyupOmWpcXH%2FVNRc5sRLdyujrKlcTrkx0iIsQZNGZJFrAyZpmuuQFLLcF63bZn2GfbhvCup47a1jJHESl0ZaTHlYeWmCUoLaZ5nmOpqhy7E%2F9Li0newvIV%2FZlLyN3%2Fwz1Y76uCtILK%2FWPOC%2BKMOTIrr0GOqUBIc%2FgNxcm3uD5sZLDU%2FqW8aIY8PH2HSjIpgDYWc2WBamYcjNxPry1O8%2BKnFUzcaCUDAuJcBrm1n6qumMBhm2Dg3yyvLgVTAG3eVI%2FaDJ2xndU6FmFUV6iYgkc8Dhfvzh4AiA03DMbKhVaeiyv7NXHx%2BJD5kJ07IW7PmfBM7SjUzgv7hJwzs0ent11ek5TGkcFSlDpiZWBLprjsnsmSqaaoCWSzTbl&X-Amz-Signature=bec9ac71cc24db2791ac6b3a3272a4595074dd60ba2d2db16ac56d082960d224&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YF3PU3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTtKsNBJ0pnfpkfkxV5IFyKRhCMjyK64rvmCVGnAlWAiEAgfnTK3frxuxlKR007UJ9QPi0Km99x4XBPo28t7kmq98qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDhhJ1UUvNDwFErcCrcA2a5jmzuqozxPMYasf%2FuSfbN%2FyMOsg4Wohl8h4cs9YR7Mo2zFGgBvPTyOybho%2B8OT3Zr1GftrOAXk7ociAFoTAq0EWkhw9rdTtTzSqvgLAF6BvHAmRvIxhzP1MJ9k%2BC%2FcSFMw2GrpRo%2B5INYKZOdVUl6hVN%2Fy%2BfAusJdugKxTqjF5tIGIc0jfKnIEq%2FoO%2F2gW0VaYg%2B2boZOZsh9NSbV1MxEVVH%2BK4SfIXqE7CJlfRhpQ148HANJtdkOu6wR72rYMVWahf2rScesd3KSHcq%2BIQO%2FE2nh4C7CxPabAWBfT4Douc%2BLK1L9fGfbdbX303AgSzh9g6vQBwT7HvdSU3TiHk1S6oK3SH%2BehQ7sYFlxvk78DisybAEz%2BambKcPLKATwbeqE%2BEWgIH9A9xsM9hA%2FSFjuDZy4Zm0vwPvojjUaISZhh%2B9tDxIt%2FuWMQ9TFE8iSQihy%2BTbSLFkI2p7ekqYzBzle%2FHFXSE9B2KJX%2FSmC4GhmyupOmWpcXH%2FVNRc5sRLdyujrKlcTrkx0iIsQZNGZJFrAyZpmuuQFLLcF63bZn2GfbhvCup47a1jJHESl0ZaTHlYeWmCUoLaZ5nmOpqhy7E%2F9Li0newvIV%2FZlLyN3%2Fwz1Y76uCtILK%2FWPOC%2BKMOTIrr0GOqUBIc%2FgNxcm3uD5sZLDU%2FqW8aIY8PH2HSjIpgDYWc2WBamYcjNxPry1O8%2BKnFUzcaCUDAuJcBrm1n6qumMBhm2Dg3yyvLgVTAG3eVI%2FaDJ2xndU6FmFUV6iYgkc8Dhfvzh4AiA03DMbKhVaeiyv7NXHx%2BJD5kJ07IW7PmfBM7SjUzgv7hJwzs0ent11ek5TGkcFSlDpiZWBLprjsnsmSqaaoCWSzTbl&X-Amz-Signature=2890f4eb9e6f503b58d0604632827854f2ebbd33bda0ed6537dcb293431c4399&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YF3PU3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTtKsNBJ0pnfpkfkxV5IFyKRhCMjyK64rvmCVGnAlWAiEAgfnTK3frxuxlKR007UJ9QPi0Km99x4XBPo28t7kmq98qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDhhJ1UUvNDwFErcCrcA2a5jmzuqozxPMYasf%2FuSfbN%2FyMOsg4Wohl8h4cs9YR7Mo2zFGgBvPTyOybho%2B8OT3Zr1GftrOAXk7ociAFoTAq0EWkhw9rdTtTzSqvgLAF6BvHAmRvIxhzP1MJ9k%2BC%2FcSFMw2GrpRo%2B5INYKZOdVUl6hVN%2Fy%2BfAusJdugKxTqjF5tIGIc0jfKnIEq%2FoO%2F2gW0VaYg%2B2boZOZsh9NSbV1MxEVVH%2BK4SfIXqE7CJlfRhpQ148HANJtdkOu6wR72rYMVWahf2rScesd3KSHcq%2BIQO%2FE2nh4C7CxPabAWBfT4Douc%2BLK1L9fGfbdbX303AgSzh9g6vQBwT7HvdSU3TiHk1S6oK3SH%2BehQ7sYFlxvk78DisybAEz%2BambKcPLKATwbeqE%2BEWgIH9A9xsM9hA%2FSFjuDZy4Zm0vwPvojjUaISZhh%2B9tDxIt%2FuWMQ9TFE8iSQihy%2BTbSLFkI2p7ekqYzBzle%2FHFXSE9B2KJX%2FSmC4GhmyupOmWpcXH%2FVNRc5sRLdyujrKlcTrkx0iIsQZNGZJFrAyZpmuuQFLLcF63bZn2GfbhvCup47a1jJHESl0ZaTHlYeWmCUoLaZ5nmOpqhy7E%2F9Li0newvIV%2FZlLyN3%2Fwz1Y76uCtILK%2FWPOC%2BKMOTIrr0GOqUBIc%2FgNxcm3uD5sZLDU%2FqW8aIY8PH2HSjIpgDYWc2WBamYcjNxPry1O8%2BKnFUzcaCUDAuJcBrm1n6qumMBhm2Dg3yyvLgVTAG3eVI%2FaDJ2xndU6FmFUV6iYgkc8Dhfvzh4AiA03DMbKhVaeiyv7NXHx%2BJD5kJ07IW7PmfBM7SjUzgv7hJwzs0ent11ek5TGkcFSlDpiZWBLprjsnsmSqaaoCWSzTbl&X-Amz-Signature=ede3ceb39e2af91de288ff5c53762f6a58928e9243cc765f0bbcd4baef33653d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YF3PU3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTtKsNBJ0pnfpkfkxV5IFyKRhCMjyK64rvmCVGnAlWAiEAgfnTK3frxuxlKR007UJ9QPi0Km99x4XBPo28t7kmq98qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDhhJ1UUvNDwFErcCrcA2a5jmzuqozxPMYasf%2FuSfbN%2FyMOsg4Wohl8h4cs9YR7Mo2zFGgBvPTyOybho%2B8OT3Zr1GftrOAXk7ociAFoTAq0EWkhw9rdTtTzSqvgLAF6BvHAmRvIxhzP1MJ9k%2BC%2FcSFMw2GrpRo%2B5INYKZOdVUl6hVN%2Fy%2BfAusJdugKxTqjF5tIGIc0jfKnIEq%2FoO%2F2gW0VaYg%2B2boZOZsh9NSbV1MxEVVH%2BK4SfIXqE7CJlfRhpQ148HANJtdkOu6wR72rYMVWahf2rScesd3KSHcq%2BIQO%2FE2nh4C7CxPabAWBfT4Douc%2BLK1L9fGfbdbX303AgSzh9g6vQBwT7HvdSU3TiHk1S6oK3SH%2BehQ7sYFlxvk78DisybAEz%2BambKcPLKATwbeqE%2BEWgIH9A9xsM9hA%2FSFjuDZy4Zm0vwPvojjUaISZhh%2B9tDxIt%2FuWMQ9TFE8iSQihy%2BTbSLFkI2p7ekqYzBzle%2FHFXSE9B2KJX%2FSmC4GhmyupOmWpcXH%2FVNRc5sRLdyujrKlcTrkx0iIsQZNGZJFrAyZpmuuQFLLcF63bZn2GfbhvCup47a1jJHESl0ZaTHlYeWmCUoLaZ5nmOpqhy7E%2F9Li0newvIV%2FZlLyN3%2Fwz1Y76uCtILK%2FWPOC%2BKMOTIrr0GOqUBIc%2FgNxcm3uD5sZLDU%2FqW8aIY8PH2HSjIpgDYWc2WBamYcjNxPry1O8%2BKnFUzcaCUDAuJcBrm1n6qumMBhm2Dg3yyvLgVTAG3eVI%2FaDJ2xndU6FmFUV6iYgkc8Dhfvzh4AiA03DMbKhVaeiyv7NXHx%2BJD5kJ07IW7PmfBM7SjUzgv7hJwzs0ent11ek5TGkcFSlDpiZWBLprjsnsmSqaaoCWSzTbl&X-Amz-Signature=e179ffcc93f75bc82b58eb78fd2694808bb1d6859a34294db1853739c703613f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YF3PU3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTtKsNBJ0pnfpkfkxV5IFyKRhCMjyK64rvmCVGnAlWAiEAgfnTK3frxuxlKR007UJ9QPi0Km99x4XBPo28t7kmq98qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDhhJ1UUvNDwFErcCrcA2a5jmzuqozxPMYasf%2FuSfbN%2FyMOsg4Wohl8h4cs9YR7Mo2zFGgBvPTyOybho%2B8OT3Zr1GftrOAXk7ociAFoTAq0EWkhw9rdTtTzSqvgLAF6BvHAmRvIxhzP1MJ9k%2BC%2FcSFMw2GrpRo%2B5INYKZOdVUl6hVN%2Fy%2BfAusJdugKxTqjF5tIGIc0jfKnIEq%2FoO%2F2gW0VaYg%2B2boZOZsh9NSbV1MxEVVH%2BK4SfIXqE7CJlfRhpQ148HANJtdkOu6wR72rYMVWahf2rScesd3KSHcq%2BIQO%2FE2nh4C7CxPabAWBfT4Douc%2BLK1L9fGfbdbX303AgSzh9g6vQBwT7HvdSU3TiHk1S6oK3SH%2BehQ7sYFlxvk78DisybAEz%2BambKcPLKATwbeqE%2BEWgIH9A9xsM9hA%2FSFjuDZy4Zm0vwPvojjUaISZhh%2B9tDxIt%2FuWMQ9TFE8iSQihy%2BTbSLFkI2p7ekqYzBzle%2FHFXSE9B2KJX%2FSmC4GhmyupOmWpcXH%2FVNRc5sRLdyujrKlcTrkx0iIsQZNGZJFrAyZpmuuQFLLcF63bZn2GfbhvCup47a1jJHESl0ZaTHlYeWmCUoLaZ5nmOpqhy7E%2F9Li0newvIV%2FZlLyN3%2Fwz1Y76uCtILK%2FWPOC%2BKMOTIrr0GOqUBIc%2FgNxcm3uD5sZLDU%2FqW8aIY8PH2HSjIpgDYWc2WBamYcjNxPry1O8%2BKnFUzcaCUDAuJcBrm1n6qumMBhm2Dg3yyvLgVTAG3eVI%2FaDJ2xndU6FmFUV6iYgkc8Dhfvzh4AiA03DMbKhVaeiyv7NXHx%2BJD5kJ07IW7PmfBM7SjUzgv7hJwzs0ent11ek5TGkcFSlDpiZWBLprjsnsmSqaaoCWSzTbl&X-Amz-Signature=f1e7a786228ecfc86ccabbecfddc537c05935b034c4a4d752e8de9c5c73863e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YF3PU3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTtKsNBJ0pnfpkfkxV5IFyKRhCMjyK64rvmCVGnAlWAiEAgfnTK3frxuxlKR007UJ9QPi0Km99x4XBPo28t7kmq98qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDhhJ1UUvNDwFErcCrcA2a5jmzuqozxPMYasf%2FuSfbN%2FyMOsg4Wohl8h4cs9YR7Mo2zFGgBvPTyOybho%2B8OT3Zr1GftrOAXk7ociAFoTAq0EWkhw9rdTtTzSqvgLAF6BvHAmRvIxhzP1MJ9k%2BC%2FcSFMw2GrpRo%2B5INYKZOdVUl6hVN%2Fy%2BfAusJdugKxTqjF5tIGIc0jfKnIEq%2FoO%2F2gW0VaYg%2B2boZOZsh9NSbV1MxEVVH%2BK4SfIXqE7CJlfRhpQ148HANJtdkOu6wR72rYMVWahf2rScesd3KSHcq%2BIQO%2FE2nh4C7CxPabAWBfT4Douc%2BLK1L9fGfbdbX303AgSzh9g6vQBwT7HvdSU3TiHk1S6oK3SH%2BehQ7sYFlxvk78DisybAEz%2BambKcPLKATwbeqE%2BEWgIH9A9xsM9hA%2FSFjuDZy4Zm0vwPvojjUaISZhh%2B9tDxIt%2FuWMQ9TFE8iSQihy%2BTbSLFkI2p7ekqYzBzle%2FHFXSE9B2KJX%2FSmC4GhmyupOmWpcXH%2FVNRc5sRLdyujrKlcTrkx0iIsQZNGZJFrAyZpmuuQFLLcF63bZn2GfbhvCup47a1jJHESl0ZaTHlYeWmCUoLaZ5nmOpqhy7E%2F9Li0newvIV%2FZlLyN3%2Fwz1Y76uCtILK%2FWPOC%2BKMOTIrr0GOqUBIc%2FgNxcm3uD5sZLDU%2FqW8aIY8PH2HSjIpgDYWc2WBamYcjNxPry1O8%2BKnFUzcaCUDAuJcBrm1n6qumMBhm2Dg3yyvLgVTAG3eVI%2FaDJ2xndU6FmFUV6iYgkc8Dhfvzh4AiA03DMbKhVaeiyv7NXHx%2BJD5kJ07IW7PmfBM7SjUzgv7hJwzs0ent11ek5TGkcFSlDpiZWBLprjsnsmSqaaoCWSzTbl&X-Amz-Signature=085c31cf25f7d44376e01f2ffb70927ae078eb858c1f66544b229a8e75ee9eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YF3PU3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTtKsNBJ0pnfpkfkxV5IFyKRhCMjyK64rvmCVGnAlWAiEAgfnTK3frxuxlKR007UJ9QPi0Km99x4XBPo28t7kmq98qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDhhJ1UUvNDwFErcCrcA2a5jmzuqozxPMYasf%2FuSfbN%2FyMOsg4Wohl8h4cs9YR7Mo2zFGgBvPTyOybho%2B8OT3Zr1GftrOAXk7ociAFoTAq0EWkhw9rdTtTzSqvgLAF6BvHAmRvIxhzP1MJ9k%2BC%2FcSFMw2GrpRo%2B5INYKZOdVUl6hVN%2Fy%2BfAusJdugKxTqjF5tIGIc0jfKnIEq%2FoO%2F2gW0VaYg%2B2boZOZsh9NSbV1MxEVVH%2BK4SfIXqE7CJlfRhpQ148HANJtdkOu6wR72rYMVWahf2rScesd3KSHcq%2BIQO%2FE2nh4C7CxPabAWBfT4Douc%2BLK1L9fGfbdbX303AgSzh9g6vQBwT7HvdSU3TiHk1S6oK3SH%2BehQ7sYFlxvk78DisybAEz%2BambKcPLKATwbeqE%2BEWgIH9A9xsM9hA%2FSFjuDZy4Zm0vwPvojjUaISZhh%2B9tDxIt%2FuWMQ9TFE8iSQihy%2BTbSLFkI2p7ekqYzBzle%2FHFXSE9B2KJX%2FSmC4GhmyupOmWpcXH%2FVNRc5sRLdyujrKlcTrkx0iIsQZNGZJFrAyZpmuuQFLLcF63bZn2GfbhvCup47a1jJHESl0ZaTHlYeWmCUoLaZ5nmOpqhy7E%2F9Li0newvIV%2FZlLyN3%2Fwz1Y76uCtILK%2FWPOC%2BKMOTIrr0GOqUBIc%2FgNxcm3uD5sZLDU%2FqW8aIY8PH2HSjIpgDYWc2WBamYcjNxPry1O8%2BKnFUzcaCUDAuJcBrm1n6qumMBhm2Dg3yyvLgVTAG3eVI%2FaDJ2xndU6FmFUV6iYgkc8Dhfvzh4AiA03DMbKhVaeiyv7NXHx%2BJD5kJ07IW7PmfBM7SjUzgv7hJwzs0ent11ek5TGkcFSlDpiZWBLprjsnsmSqaaoCWSzTbl&X-Amz-Signature=25a4ea1459c0da099aec2ecf3fbd82c36ac3f412de8d896cb0965bbcd9e59f92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YF3PU3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTtKsNBJ0pnfpkfkxV5IFyKRhCMjyK64rvmCVGnAlWAiEAgfnTK3frxuxlKR007UJ9QPi0Km99x4XBPo28t7kmq98qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDhhJ1UUvNDwFErcCrcA2a5jmzuqozxPMYasf%2FuSfbN%2FyMOsg4Wohl8h4cs9YR7Mo2zFGgBvPTyOybho%2B8OT3Zr1GftrOAXk7ociAFoTAq0EWkhw9rdTtTzSqvgLAF6BvHAmRvIxhzP1MJ9k%2BC%2FcSFMw2GrpRo%2B5INYKZOdVUl6hVN%2Fy%2BfAusJdugKxTqjF5tIGIc0jfKnIEq%2FoO%2F2gW0VaYg%2B2boZOZsh9NSbV1MxEVVH%2BK4SfIXqE7CJlfRhpQ148HANJtdkOu6wR72rYMVWahf2rScesd3KSHcq%2BIQO%2FE2nh4C7CxPabAWBfT4Douc%2BLK1L9fGfbdbX303AgSzh9g6vQBwT7HvdSU3TiHk1S6oK3SH%2BehQ7sYFlxvk78DisybAEz%2BambKcPLKATwbeqE%2BEWgIH9A9xsM9hA%2FSFjuDZy4Zm0vwPvojjUaISZhh%2B9tDxIt%2FuWMQ9TFE8iSQihy%2BTbSLFkI2p7ekqYzBzle%2FHFXSE9B2KJX%2FSmC4GhmyupOmWpcXH%2FVNRc5sRLdyujrKlcTrkx0iIsQZNGZJFrAyZpmuuQFLLcF63bZn2GfbhvCup47a1jJHESl0ZaTHlYeWmCUoLaZ5nmOpqhy7E%2F9Li0newvIV%2FZlLyN3%2Fwz1Y76uCtILK%2FWPOC%2BKMOTIrr0GOqUBIc%2FgNxcm3uD5sZLDU%2FqW8aIY8PH2HSjIpgDYWc2WBamYcjNxPry1O8%2BKnFUzcaCUDAuJcBrm1n6qumMBhm2Dg3yyvLgVTAG3eVI%2FaDJ2xndU6FmFUV6iYgkc8Dhfvzh4AiA03DMbKhVaeiyv7NXHx%2BJD5kJ07IW7PmfBM7SjUzgv7hJwzs0ent11ek5TGkcFSlDpiZWBLprjsnsmSqaaoCWSzTbl&X-Amz-Signature=5ecb6891e42b4f266612c1a46abcbe49313cc68ded3628105784218a3cb505e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
