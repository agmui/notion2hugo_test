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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4M6XIR%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMYRE2II1LD%2BT3E63tDibF6fAJ2YI3WWwUgyMvrxrrtAiEAji6%2F8MstkCEXWwcAcY%2FB2%2FBrrnQMcCt98DnzUBj1jqQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3Lt38xnrvb5KU9yrcAyuImFN4DFKZnrYqMkyDQy5F%2FvMglbbLOLg%2F0zw3o6yfzWSCAVV%2BIApIcM7XBExQ%2FWybtGN2M92VBjA%2B8iSaqU%2F%2BDrcRd9sXymNJtMFLpiD%2BeQTnNlvS6D0fSHQyvW98X9ez1k6nKVnK1299H0ddIMHpGN9rW5use%2BDW%2BzAjVgDUXn7%2BsuLpNs1FYyPsr65rVKO%2BTsFnmnJEF%2FtnB4Ce%2BHNQF3iRAWzSmGhTmt5SM0uqyJK1JGC8KKXMIJyL5jFLrywsagZFuYLPsRMvqW1%2BOwqeo4rKcCX40DvW%2BTi%2BDpw%2F2QHXciaBIO4oty4KoJ1YR%2BW8XF5NluANAKhz9b1VUdDdAg5Y2HUFFkm9ZhkQoGZZZMHAe3Bv37IdHedt2h6My6pTTWLuZmQKRTzy5IrGl2WrV%2F49OXPYhbaiR868%2F5q%2BW3Ri8t%2BXzGjFhZW3B3tc93zeNlKOo0%2FUh4WuYUIRKrfdAPQs9Gw2XU9D9FZmDhb7u1RrMswUJER6V6R4YOVmLVJ8jukMHYMEZSBJd6FU6X1TeszWL7lwFWoFUpV5QbiquNXqLBSDuPViUGEaqTMtrZl%2FJQPHVm9pEF39BnspvigDi%2FOawDj%2FVddCxuLrVCeE6mdV2YJYsuSqdGEaMKqo18YGOqUB0HVj6HauLZ42dxl%2Fs1NZp9x%2BaY9y8bSZkU2zXpe42ibhRFgOyJi64kWSNbwHsqwLflxx58OL6Fd%2BY9fxnO2oEr%2FTu29wcF64KLKs6jtz%2BgXhdmNpncBXcqlqNehAsjfUh6a3CFfCgcUa6M5WkSP1ZSP4LijjoObz%2FfYOec42S4Kc41UqfbnGeL2yRBZs%2BECSLldRyPf99FKqa6%2BIhqO9DsnnbWlq&X-Amz-Signature=bae1d237d8fdcfae0082848ab3692e03a8e94815fac0fbbc0a49b0bffa121eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4M6XIR%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMYRE2II1LD%2BT3E63tDibF6fAJ2YI3WWwUgyMvrxrrtAiEAji6%2F8MstkCEXWwcAcY%2FB2%2FBrrnQMcCt98DnzUBj1jqQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3Lt38xnrvb5KU9yrcAyuImFN4DFKZnrYqMkyDQy5F%2FvMglbbLOLg%2F0zw3o6yfzWSCAVV%2BIApIcM7XBExQ%2FWybtGN2M92VBjA%2B8iSaqU%2F%2BDrcRd9sXymNJtMFLpiD%2BeQTnNlvS6D0fSHQyvW98X9ez1k6nKVnK1299H0ddIMHpGN9rW5use%2BDW%2BzAjVgDUXn7%2BsuLpNs1FYyPsr65rVKO%2BTsFnmnJEF%2FtnB4Ce%2BHNQF3iRAWzSmGhTmt5SM0uqyJK1JGC8KKXMIJyL5jFLrywsagZFuYLPsRMvqW1%2BOwqeo4rKcCX40DvW%2BTi%2BDpw%2F2QHXciaBIO4oty4KoJ1YR%2BW8XF5NluANAKhz9b1VUdDdAg5Y2HUFFkm9ZhkQoGZZZMHAe3Bv37IdHedt2h6My6pTTWLuZmQKRTzy5IrGl2WrV%2F49OXPYhbaiR868%2F5q%2BW3Ri8t%2BXzGjFhZW3B3tc93zeNlKOo0%2FUh4WuYUIRKrfdAPQs9Gw2XU9D9FZmDhb7u1RrMswUJER6V6R4YOVmLVJ8jukMHYMEZSBJd6FU6X1TeszWL7lwFWoFUpV5QbiquNXqLBSDuPViUGEaqTMtrZl%2FJQPHVm9pEF39BnspvigDi%2FOawDj%2FVddCxuLrVCeE6mdV2YJYsuSqdGEaMKqo18YGOqUB0HVj6HauLZ42dxl%2Fs1NZp9x%2BaY9y8bSZkU2zXpe42ibhRFgOyJi64kWSNbwHsqwLflxx58OL6Fd%2BY9fxnO2oEr%2FTu29wcF64KLKs6jtz%2BgXhdmNpncBXcqlqNehAsjfUh6a3CFfCgcUa6M5WkSP1ZSP4LijjoObz%2FfYOec42S4Kc41UqfbnGeL2yRBZs%2BECSLldRyPf99FKqa6%2BIhqO9DsnnbWlq&X-Amz-Signature=706c8dedb19d2bb2ae02e17547cfe034585cc360f84267ca967711319d11f1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4M6XIR%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMYRE2II1LD%2BT3E63tDibF6fAJ2YI3WWwUgyMvrxrrtAiEAji6%2F8MstkCEXWwcAcY%2FB2%2FBrrnQMcCt98DnzUBj1jqQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3Lt38xnrvb5KU9yrcAyuImFN4DFKZnrYqMkyDQy5F%2FvMglbbLOLg%2F0zw3o6yfzWSCAVV%2BIApIcM7XBExQ%2FWybtGN2M92VBjA%2B8iSaqU%2F%2BDrcRd9sXymNJtMFLpiD%2BeQTnNlvS6D0fSHQyvW98X9ez1k6nKVnK1299H0ddIMHpGN9rW5use%2BDW%2BzAjVgDUXn7%2BsuLpNs1FYyPsr65rVKO%2BTsFnmnJEF%2FtnB4Ce%2BHNQF3iRAWzSmGhTmt5SM0uqyJK1JGC8KKXMIJyL5jFLrywsagZFuYLPsRMvqW1%2BOwqeo4rKcCX40DvW%2BTi%2BDpw%2F2QHXciaBIO4oty4KoJ1YR%2BW8XF5NluANAKhz9b1VUdDdAg5Y2HUFFkm9ZhkQoGZZZMHAe3Bv37IdHedt2h6My6pTTWLuZmQKRTzy5IrGl2WrV%2F49OXPYhbaiR868%2F5q%2BW3Ri8t%2BXzGjFhZW3B3tc93zeNlKOo0%2FUh4WuYUIRKrfdAPQs9Gw2XU9D9FZmDhb7u1RrMswUJER6V6R4YOVmLVJ8jukMHYMEZSBJd6FU6X1TeszWL7lwFWoFUpV5QbiquNXqLBSDuPViUGEaqTMtrZl%2FJQPHVm9pEF39BnspvigDi%2FOawDj%2FVddCxuLrVCeE6mdV2YJYsuSqdGEaMKqo18YGOqUB0HVj6HauLZ42dxl%2Fs1NZp9x%2BaY9y8bSZkU2zXpe42ibhRFgOyJi64kWSNbwHsqwLflxx58OL6Fd%2BY9fxnO2oEr%2FTu29wcF64KLKs6jtz%2BgXhdmNpncBXcqlqNehAsjfUh6a3CFfCgcUa6M5WkSP1ZSP4LijjoObz%2FfYOec42S4Kc41UqfbnGeL2yRBZs%2BECSLldRyPf99FKqa6%2BIhqO9DsnnbWlq&X-Amz-Signature=032fa567191125252c75e45088f4223398d12089932b5977496a51b63c673844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4M6XIR%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMYRE2II1LD%2BT3E63tDibF6fAJ2YI3WWwUgyMvrxrrtAiEAji6%2F8MstkCEXWwcAcY%2FB2%2FBrrnQMcCt98DnzUBj1jqQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3Lt38xnrvb5KU9yrcAyuImFN4DFKZnrYqMkyDQy5F%2FvMglbbLOLg%2F0zw3o6yfzWSCAVV%2BIApIcM7XBExQ%2FWybtGN2M92VBjA%2B8iSaqU%2F%2BDrcRd9sXymNJtMFLpiD%2BeQTnNlvS6D0fSHQyvW98X9ez1k6nKVnK1299H0ddIMHpGN9rW5use%2BDW%2BzAjVgDUXn7%2BsuLpNs1FYyPsr65rVKO%2BTsFnmnJEF%2FtnB4Ce%2BHNQF3iRAWzSmGhTmt5SM0uqyJK1JGC8KKXMIJyL5jFLrywsagZFuYLPsRMvqW1%2BOwqeo4rKcCX40DvW%2BTi%2BDpw%2F2QHXciaBIO4oty4KoJ1YR%2BW8XF5NluANAKhz9b1VUdDdAg5Y2HUFFkm9ZhkQoGZZZMHAe3Bv37IdHedt2h6My6pTTWLuZmQKRTzy5IrGl2WrV%2F49OXPYhbaiR868%2F5q%2BW3Ri8t%2BXzGjFhZW3B3tc93zeNlKOo0%2FUh4WuYUIRKrfdAPQs9Gw2XU9D9FZmDhb7u1RrMswUJER6V6R4YOVmLVJ8jukMHYMEZSBJd6FU6X1TeszWL7lwFWoFUpV5QbiquNXqLBSDuPViUGEaqTMtrZl%2FJQPHVm9pEF39BnspvigDi%2FOawDj%2FVddCxuLrVCeE6mdV2YJYsuSqdGEaMKqo18YGOqUB0HVj6HauLZ42dxl%2Fs1NZp9x%2BaY9y8bSZkU2zXpe42ibhRFgOyJi64kWSNbwHsqwLflxx58OL6Fd%2BY9fxnO2oEr%2FTu29wcF64KLKs6jtz%2BgXhdmNpncBXcqlqNehAsjfUh6a3CFfCgcUa6M5WkSP1ZSP4LijjoObz%2FfYOec42S4Kc41UqfbnGeL2yRBZs%2BECSLldRyPf99FKqa6%2BIhqO9DsnnbWlq&X-Amz-Signature=bb66a51e2c6d86524dd5a3e0015cd966bc13336201e7a797dc28c2b7ec8345ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4M6XIR%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMYRE2II1LD%2BT3E63tDibF6fAJ2YI3WWwUgyMvrxrrtAiEAji6%2F8MstkCEXWwcAcY%2FB2%2FBrrnQMcCt98DnzUBj1jqQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3Lt38xnrvb5KU9yrcAyuImFN4DFKZnrYqMkyDQy5F%2FvMglbbLOLg%2F0zw3o6yfzWSCAVV%2BIApIcM7XBExQ%2FWybtGN2M92VBjA%2B8iSaqU%2F%2BDrcRd9sXymNJtMFLpiD%2BeQTnNlvS6D0fSHQyvW98X9ez1k6nKVnK1299H0ddIMHpGN9rW5use%2BDW%2BzAjVgDUXn7%2BsuLpNs1FYyPsr65rVKO%2BTsFnmnJEF%2FtnB4Ce%2BHNQF3iRAWzSmGhTmt5SM0uqyJK1JGC8KKXMIJyL5jFLrywsagZFuYLPsRMvqW1%2BOwqeo4rKcCX40DvW%2BTi%2BDpw%2F2QHXciaBIO4oty4KoJ1YR%2BW8XF5NluANAKhz9b1VUdDdAg5Y2HUFFkm9ZhkQoGZZZMHAe3Bv37IdHedt2h6My6pTTWLuZmQKRTzy5IrGl2WrV%2F49OXPYhbaiR868%2F5q%2BW3Ri8t%2BXzGjFhZW3B3tc93zeNlKOo0%2FUh4WuYUIRKrfdAPQs9Gw2XU9D9FZmDhb7u1RrMswUJER6V6R4YOVmLVJ8jukMHYMEZSBJd6FU6X1TeszWL7lwFWoFUpV5QbiquNXqLBSDuPViUGEaqTMtrZl%2FJQPHVm9pEF39BnspvigDi%2FOawDj%2FVddCxuLrVCeE6mdV2YJYsuSqdGEaMKqo18YGOqUB0HVj6HauLZ42dxl%2Fs1NZp9x%2BaY9y8bSZkU2zXpe42ibhRFgOyJi64kWSNbwHsqwLflxx58OL6Fd%2BY9fxnO2oEr%2FTu29wcF64KLKs6jtz%2BgXhdmNpncBXcqlqNehAsjfUh6a3CFfCgcUa6M5WkSP1ZSP4LijjoObz%2FfYOec42S4Kc41UqfbnGeL2yRBZs%2BECSLldRyPf99FKqa6%2BIhqO9DsnnbWlq&X-Amz-Signature=6392bd8fc4b7e3fa7780e4abdbed415984700b22ebfc808557a6c50531e18ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4M6XIR%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMYRE2II1LD%2BT3E63tDibF6fAJ2YI3WWwUgyMvrxrrtAiEAji6%2F8MstkCEXWwcAcY%2FB2%2FBrrnQMcCt98DnzUBj1jqQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3Lt38xnrvb5KU9yrcAyuImFN4DFKZnrYqMkyDQy5F%2FvMglbbLOLg%2F0zw3o6yfzWSCAVV%2BIApIcM7XBExQ%2FWybtGN2M92VBjA%2B8iSaqU%2F%2BDrcRd9sXymNJtMFLpiD%2BeQTnNlvS6D0fSHQyvW98X9ez1k6nKVnK1299H0ddIMHpGN9rW5use%2BDW%2BzAjVgDUXn7%2BsuLpNs1FYyPsr65rVKO%2BTsFnmnJEF%2FtnB4Ce%2BHNQF3iRAWzSmGhTmt5SM0uqyJK1JGC8KKXMIJyL5jFLrywsagZFuYLPsRMvqW1%2BOwqeo4rKcCX40DvW%2BTi%2BDpw%2F2QHXciaBIO4oty4KoJ1YR%2BW8XF5NluANAKhz9b1VUdDdAg5Y2HUFFkm9ZhkQoGZZZMHAe3Bv37IdHedt2h6My6pTTWLuZmQKRTzy5IrGl2WrV%2F49OXPYhbaiR868%2F5q%2BW3Ri8t%2BXzGjFhZW3B3tc93zeNlKOo0%2FUh4WuYUIRKrfdAPQs9Gw2XU9D9FZmDhb7u1RrMswUJER6V6R4YOVmLVJ8jukMHYMEZSBJd6FU6X1TeszWL7lwFWoFUpV5QbiquNXqLBSDuPViUGEaqTMtrZl%2FJQPHVm9pEF39BnspvigDi%2FOawDj%2FVddCxuLrVCeE6mdV2YJYsuSqdGEaMKqo18YGOqUB0HVj6HauLZ42dxl%2Fs1NZp9x%2BaY9y8bSZkU2zXpe42ibhRFgOyJi64kWSNbwHsqwLflxx58OL6Fd%2BY9fxnO2oEr%2FTu29wcF64KLKs6jtz%2BgXhdmNpncBXcqlqNehAsjfUh6a3CFfCgcUa6M5WkSP1ZSP4LijjoObz%2FfYOec42S4Kc41UqfbnGeL2yRBZs%2BECSLldRyPf99FKqa6%2BIhqO9DsnnbWlq&X-Amz-Signature=3f34199bac3b5e5520ffcafab1373028b7f3e35b7e144ddb2d2812b6d11f874f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4M6XIR%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMYRE2II1LD%2BT3E63tDibF6fAJ2YI3WWwUgyMvrxrrtAiEAji6%2F8MstkCEXWwcAcY%2FB2%2FBrrnQMcCt98DnzUBj1jqQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3Lt38xnrvb5KU9yrcAyuImFN4DFKZnrYqMkyDQy5F%2FvMglbbLOLg%2F0zw3o6yfzWSCAVV%2BIApIcM7XBExQ%2FWybtGN2M92VBjA%2B8iSaqU%2F%2BDrcRd9sXymNJtMFLpiD%2BeQTnNlvS6D0fSHQyvW98X9ez1k6nKVnK1299H0ddIMHpGN9rW5use%2BDW%2BzAjVgDUXn7%2BsuLpNs1FYyPsr65rVKO%2BTsFnmnJEF%2FtnB4Ce%2BHNQF3iRAWzSmGhTmt5SM0uqyJK1JGC8KKXMIJyL5jFLrywsagZFuYLPsRMvqW1%2BOwqeo4rKcCX40DvW%2BTi%2BDpw%2F2QHXciaBIO4oty4KoJ1YR%2BW8XF5NluANAKhz9b1VUdDdAg5Y2HUFFkm9ZhkQoGZZZMHAe3Bv37IdHedt2h6My6pTTWLuZmQKRTzy5IrGl2WrV%2F49OXPYhbaiR868%2F5q%2BW3Ri8t%2BXzGjFhZW3B3tc93zeNlKOo0%2FUh4WuYUIRKrfdAPQs9Gw2XU9D9FZmDhb7u1RrMswUJER6V6R4YOVmLVJ8jukMHYMEZSBJd6FU6X1TeszWL7lwFWoFUpV5QbiquNXqLBSDuPViUGEaqTMtrZl%2FJQPHVm9pEF39BnspvigDi%2FOawDj%2FVddCxuLrVCeE6mdV2YJYsuSqdGEaMKqo18YGOqUB0HVj6HauLZ42dxl%2Fs1NZp9x%2BaY9y8bSZkU2zXpe42ibhRFgOyJi64kWSNbwHsqwLflxx58OL6Fd%2BY9fxnO2oEr%2FTu29wcF64KLKs6jtz%2BgXhdmNpncBXcqlqNehAsjfUh6a3CFfCgcUa6M5WkSP1ZSP4LijjoObz%2FfYOec42S4Kc41UqfbnGeL2yRBZs%2BECSLldRyPf99FKqa6%2BIhqO9DsnnbWlq&X-Amz-Signature=96ac48df46bbd0f9bdaab3b22935d36372b1c6b407efbc724f3bae3b24d2095f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4M6XIR%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMYRE2II1LD%2BT3E63tDibF6fAJ2YI3WWwUgyMvrxrrtAiEAji6%2F8MstkCEXWwcAcY%2FB2%2FBrrnQMcCt98DnzUBj1jqQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3Lt38xnrvb5KU9yrcAyuImFN4DFKZnrYqMkyDQy5F%2FvMglbbLOLg%2F0zw3o6yfzWSCAVV%2BIApIcM7XBExQ%2FWybtGN2M92VBjA%2B8iSaqU%2F%2BDrcRd9sXymNJtMFLpiD%2BeQTnNlvS6D0fSHQyvW98X9ez1k6nKVnK1299H0ddIMHpGN9rW5use%2BDW%2BzAjVgDUXn7%2BsuLpNs1FYyPsr65rVKO%2BTsFnmnJEF%2FtnB4Ce%2BHNQF3iRAWzSmGhTmt5SM0uqyJK1JGC8KKXMIJyL5jFLrywsagZFuYLPsRMvqW1%2BOwqeo4rKcCX40DvW%2BTi%2BDpw%2F2QHXciaBIO4oty4KoJ1YR%2BW8XF5NluANAKhz9b1VUdDdAg5Y2HUFFkm9ZhkQoGZZZMHAe3Bv37IdHedt2h6My6pTTWLuZmQKRTzy5IrGl2WrV%2F49OXPYhbaiR868%2F5q%2BW3Ri8t%2BXzGjFhZW3B3tc93zeNlKOo0%2FUh4WuYUIRKrfdAPQs9Gw2XU9D9FZmDhb7u1RrMswUJER6V6R4YOVmLVJ8jukMHYMEZSBJd6FU6X1TeszWL7lwFWoFUpV5QbiquNXqLBSDuPViUGEaqTMtrZl%2FJQPHVm9pEF39BnspvigDi%2FOawDj%2FVddCxuLrVCeE6mdV2YJYsuSqdGEaMKqo18YGOqUB0HVj6HauLZ42dxl%2Fs1NZp9x%2BaY9y8bSZkU2zXpe42ibhRFgOyJi64kWSNbwHsqwLflxx58OL6Fd%2BY9fxnO2oEr%2FTu29wcF64KLKs6jtz%2BgXhdmNpncBXcqlqNehAsjfUh6a3CFfCgcUa6M5WkSP1ZSP4LijjoObz%2FfYOec42S4Kc41UqfbnGeL2yRBZs%2BECSLldRyPf99FKqa6%2BIhqO9DsnnbWlq&X-Amz-Signature=1359365f285a59a5a4bcfa8c8f0fc0291ff94ba6be04619dd387e88a283ed001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
