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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SKFOUU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFnyPs6MmZXiYY9NydwDgGwXfR32Xk1Yip%2BNmQfnuAV9AiEAvOJCMij93cQp14UtZB9YYycDrT9xpI%2B2swU3I%2BTv4HYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMUEz7q08HWCOHFdeyrcA6MZfFzPC6Bfc4ZjiKw%2BYCsf8YgvNygC72XsMlct3G0kRpS0alyjq8i3Xpa788%2FRu0q88lcTH1xzU9qjVjAm7CyNslQtfo3oMNg1JfyjhSuR1BpTBdzn1VuvNXRnkYfIVgXbbNlVdtBSL9zlEj4txQwjsovjPu4Wqd2tud4ZoLr4SI2KSTu7FvkaSDL7acp%2BafjBQ%2FBWUrssdmBgJ1zUhSAvJ3eHChym2UNDN0rEaCPH9OY18XVHiSDT%2F%2BVUQcaBSuvE34VFweQHex2xxyAAW92h0ROgowFBUOJxybyN6oo5WPrAPtqmsFjZ0x9b8m%2FEfOes4SmmpffXQXgw1z89CcneufddiNumgihQcTpy4TZzAEktIH%2BuZVc7RnIPHjiUB48RgZ7sbC0BeHaeB06KmMor1Swp8R4m4nuMBTqk894n%2F1QOsbs%2BUQMfZxgh9avj%2Fat6BcqUA3oj5FfzIr1HmwsfMp%2B98j1YoKfhnxvfo%2Bfg1GmgXELVTPn%2FpUzg%2BgglWt3zdoesICxW9R%2B7qDQ%2FV7QNaYmRSyJuTmBoi4%2BReRt58BkNExjy%2BSg%2FvVWx8X12o1LfFseCaw4fmgFvV%2FqDIAb9LjaKl03Hq8DZ9j0Xr7cm%2FYZjuZeWe21Ew3V3MOKfrL4GOqUBCgK1sbdXSsQVVKYbX8CollDEQeLHXeUm9HMAVkcXRYVZa%2F6sOXO4dpmZIDMEGQmGsuFN4Hed0Wlg7bYXITY6Fv0mWJCbqF%2BcCUC4umkA4ZPhKwtCQePqowJu0ACeRJbgAG%2FAjPRwE%2Fu21qv9dRP3ifqY8FFc0lASbyOqUE%2Fta8MTepF4aDtVo0V6lzOEKLie3oqG3fJzYDlovBM5GSZ8vGQVBclT&X-Amz-Signature=2753285d526fe1899780015c1bd73ed9a9ec497d3858e33c23ff48a6eb90f50d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SKFOUU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFnyPs6MmZXiYY9NydwDgGwXfR32Xk1Yip%2BNmQfnuAV9AiEAvOJCMij93cQp14UtZB9YYycDrT9xpI%2B2swU3I%2BTv4HYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMUEz7q08HWCOHFdeyrcA6MZfFzPC6Bfc4ZjiKw%2BYCsf8YgvNygC72XsMlct3G0kRpS0alyjq8i3Xpa788%2FRu0q88lcTH1xzU9qjVjAm7CyNslQtfo3oMNg1JfyjhSuR1BpTBdzn1VuvNXRnkYfIVgXbbNlVdtBSL9zlEj4txQwjsovjPu4Wqd2tud4ZoLr4SI2KSTu7FvkaSDL7acp%2BafjBQ%2FBWUrssdmBgJ1zUhSAvJ3eHChym2UNDN0rEaCPH9OY18XVHiSDT%2F%2BVUQcaBSuvE34VFweQHex2xxyAAW92h0ROgowFBUOJxybyN6oo5WPrAPtqmsFjZ0x9b8m%2FEfOes4SmmpffXQXgw1z89CcneufddiNumgihQcTpy4TZzAEktIH%2BuZVc7RnIPHjiUB48RgZ7sbC0BeHaeB06KmMor1Swp8R4m4nuMBTqk894n%2F1QOsbs%2BUQMfZxgh9avj%2Fat6BcqUA3oj5FfzIr1HmwsfMp%2B98j1YoKfhnxvfo%2Bfg1GmgXELVTPn%2FpUzg%2BgglWt3zdoesICxW9R%2B7qDQ%2FV7QNaYmRSyJuTmBoi4%2BReRt58BkNExjy%2BSg%2FvVWx8X12o1LfFseCaw4fmgFvV%2FqDIAb9LjaKl03Hq8DZ9j0Xr7cm%2FYZjuZeWe21Ew3V3MOKfrL4GOqUBCgK1sbdXSsQVVKYbX8CollDEQeLHXeUm9HMAVkcXRYVZa%2F6sOXO4dpmZIDMEGQmGsuFN4Hed0Wlg7bYXITY6Fv0mWJCbqF%2BcCUC4umkA4ZPhKwtCQePqowJu0ACeRJbgAG%2FAjPRwE%2Fu21qv9dRP3ifqY8FFc0lASbyOqUE%2Fta8MTepF4aDtVo0V6lzOEKLie3oqG3fJzYDlovBM5GSZ8vGQVBclT&X-Amz-Signature=3298fecf1c9223b1ab9eec680f94f499bb545cef901883506aec32b9a436e676&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SKFOUU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFnyPs6MmZXiYY9NydwDgGwXfR32Xk1Yip%2BNmQfnuAV9AiEAvOJCMij93cQp14UtZB9YYycDrT9xpI%2B2swU3I%2BTv4HYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMUEz7q08HWCOHFdeyrcA6MZfFzPC6Bfc4ZjiKw%2BYCsf8YgvNygC72XsMlct3G0kRpS0alyjq8i3Xpa788%2FRu0q88lcTH1xzU9qjVjAm7CyNslQtfo3oMNg1JfyjhSuR1BpTBdzn1VuvNXRnkYfIVgXbbNlVdtBSL9zlEj4txQwjsovjPu4Wqd2tud4ZoLr4SI2KSTu7FvkaSDL7acp%2BafjBQ%2FBWUrssdmBgJ1zUhSAvJ3eHChym2UNDN0rEaCPH9OY18XVHiSDT%2F%2BVUQcaBSuvE34VFweQHex2xxyAAW92h0ROgowFBUOJxybyN6oo5WPrAPtqmsFjZ0x9b8m%2FEfOes4SmmpffXQXgw1z89CcneufddiNumgihQcTpy4TZzAEktIH%2BuZVc7RnIPHjiUB48RgZ7sbC0BeHaeB06KmMor1Swp8R4m4nuMBTqk894n%2F1QOsbs%2BUQMfZxgh9avj%2Fat6BcqUA3oj5FfzIr1HmwsfMp%2B98j1YoKfhnxvfo%2Bfg1GmgXELVTPn%2FpUzg%2BgglWt3zdoesICxW9R%2B7qDQ%2FV7QNaYmRSyJuTmBoi4%2BReRt58BkNExjy%2BSg%2FvVWx8X12o1LfFseCaw4fmgFvV%2FqDIAb9LjaKl03Hq8DZ9j0Xr7cm%2FYZjuZeWe21Ew3V3MOKfrL4GOqUBCgK1sbdXSsQVVKYbX8CollDEQeLHXeUm9HMAVkcXRYVZa%2F6sOXO4dpmZIDMEGQmGsuFN4Hed0Wlg7bYXITY6Fv0mWJCbqF%2BcCUC4umkA4ZPhKwtCQePqowJu0ACeRJbgAG%2FAjPRwE%2Fu21qv9dRP3ifqY8FFc0lASbyOqUE%2Fta8MTepF4aDtVo0V6lzOEKLie3oqG3fJzYDlovBM5GSZ8vGQVBclT&X-Amz-Signature=22a2e95d662c41613f3865b42680a4b9ec98cbcbc11efbaca38a50d4350c3fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SKFOUU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFnyPs6MmZXiYY9NydwDgGwXfR32Xk1Yip%2BNmQfnuAV9AiEAvOJCMij93cQp14UtZB9YYycDrT9xpI%2B2swU3I%2BTv4HYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMUEz7q08HWCOHFdeyrcA6MZfFzPC6Bfc4ZjiKw%2BYCsf8YgvNygC72XsMlct3G0kRpS0alyjq8i3Xpa788%2FRu0q88lcTH1xzU9qjVjAm7CyNslQtfo3oMNg1JfyjhSuR1BpTBdzn1VuvNXRnkYfIVgXbbNlVdtBSL9zlEj4txQwjsovjPu4Wqd2tud4ZoLr4SI2KSTu7FvkaSDL7acp%2BafjBQ%2FBWUrssdmBgJ1zUhSAvJ3eHChym2UNDN0rEaCPH9OY18XVHiSDT%2F%2BVUQcaBSuvE34VFweQHex2xxyAAW92h0ROgowFBUOJxybyN6oo5WPrAPtqmsFjZ0x9b8m%2FEfOes4SmmpffXQXgw1z89CcneufddiNumgihQcTpy4TZzAEktIH%2BuZVc7RnIPHjiUB48RgZ7sbC0BeHaeB06KmMor1Swp8R4m4nuMBTqk894n%2F1QOsbs%2BUQMfZxgh9avj%2Fat6BcqUA3oj5FfzIr1HmwsfMp%2B98j1YoKfhnxvfo%2Bfg1GmgXELVTPn%2FpUzg%2BgglWt3zdoesICxW9R%2B7qDQ%2FV7QNaYmRSyJuTmBoi4%2BReRt58BkNExjy%2BSg%2FvVWx8X12o1LfFseCaw4fmgFvV%2FqDIAb9LjaKl03Hq8DZ9j0Xr7cm%2FYZjuZeWe21Ew3V3MOKfrL4GOqUBCgK1sbdXSsQVVKYbX8CollDEQeLHXeUm9HMAVkcXRYVZa%2F6sOXO4dpmZIDMEGQmGsuFN4Hed0Wlg7bYXITY6Fv0mWJCbqF%2BcCUC4umkA4ZPhKwtCQePqowJu0ACeRJbgAG%2FAjPRwE%2Fu21qv9dRP3ifqY8FFc0lASbyOqUE%2Fta8MTepF4aDtVo0V6lzOEKLie3oqG3fJzYDlovBM5GSZ8vGQVBclT&X-Amz-Signature=a71afe3d303fdc3a89c3cd5a202d26ff361ce278729d9388adc406fca18894e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SKFOUU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFnyPs6MmZXiYY9NydwDgGwXfR32Xk1Yip%2BNmQfnuAV9AiEAvOJCMij93cQp14UtZB9YYycDrT9xpI%2B2swU3I%2BTv4HYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMUEz7q08HWCOHFdeyrcA6MZfFzPC6Bfc4ZjiKw%2BYCsf8YgvNygC72XsMlct3G0kRpS0alyjq8i3Xpa788%2FRu0q88lcTH1xzU9qjVjAm7CyNslQtfo3oMNg1JfyjhSuR1BpTBdzn1VuvNXRnkYfIVgXbbNlVdtBSL9zlEj4txQwjsovjPu4Wqd2tud4ZoLr4SI2KSTu7FvkaSDL7acp%2BafjBQ%2FBWUrssdmBgJ1zUhSAvJ3eHChym2UNDN0rEaCPH9OY18XVHiSDT%2F%2BVUQcaBSuvE34VFweQHex2xxyAAW92h0ROgowFBUOJxybyN6oo5WPrAPtqmsFjZ0x9b8m%2FEfOes4SmmpffXQXgw1z89CcneufddiNumgihQcTpy4TZzAEktIH%2BuZVc7RnIPHjiUB48RgZ7sbC0BeHaeB06KmMor1Swp8R4m4nuMBTqk894n%2F1QOsbs%2BUQMfZxgh9avj%2Fat6BcqUA3oj5FfzIr1HmwsfMp%2B98j1YoKfhnxvfo%2Bfg1GmgXELVTPn%2FpUzg%2BgglWt3zdoesICxW9R%2B7qDQ%2FV7QNaYmRSyJuTmBoi4%2BReRt58BkNExjy%2BSg%2FvVWx8X12o1LfFseCaw4fmgFvV%2FqDIAb9LjaKl03Hq8DZ9j0Xr7cm%2FYZjuZeWe21Ew3V3MOKfrL4GOqUBCgK1sbdXSsQVVKYbX8CollDEQeLHXeUm9HMAVkcXRYVZa%2F6sOXO4dpmZIDMEGQmGsuFN4Hed0Wlg7bYXITY6Fv0mWJCbqF%2BcCUC4umkA4ZPhKwtCQePqowJu0ACeRJbgAG%2FAjPRwE%2Fu21qv9dRP3ifqY8FFc0lASbyOqUE%2Fta8MTepF4aDtVo0V6lzOEKLie3oqG3fJzYDlovBM5GSZ8vGQVBclT&X-Amz-Signature=345b42a68f2c84803dc47affe27e5f03d107b780991118d2b63aa3f41debe6d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SKFOUU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFnyPs6MmZXiYY9NydwDgGwXfR32Xk1Yip%2BNmQfnuAV9AiEAvOJCMij93cQp14UtZB9YYycDrT9xpI%2B2swU3I%2BTv4HYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMUEz7q08HWCOHFdeyrcA6MZfFzPC6Bfc4ZjiKw%2BYCsf8YgvNygC72XsMlct3G0kRpS0alyjq8i3Xpa788%2FRu0q88lcTH1xzU9qjVjAm7CyNslQtfo3oMNg1JfyjhSuR1BpTBdzn1VuvNXRnkYfIVgXbbNlVdtBSL9zlEj4txQwjsovjPu4Wqd2tud4ZoLr4SI2KSTu7FvkaSDL7acp%2BafjBQ%2FBWUrssdmBgJ1zUhSAvJ3eHChym2UNDN0rEaCPH9OY18XVHiSDT%2F%2BVUQcaBSuvE34VFweQHex2xxyAAW92h0ROgowFBUOJxybyN6oo5WPrAPtqmsFjZ0x9b8m%2FEfOes4SmmpffXQXgw1z89CcneufddiNumgihQcTpy4TZzAEktIH%2BuZVc7RnIPHjiUB48RgZ7sbC0BeHaeB06KmMor1Swp8R4m4nuMBTqk894n%2F1QOsbs%2BUQMfZxgh9avj%2Fat6BcqUA3oj5FfzIr1HmwsfMp%2B98j1YoKfhnxvfo%2Bfg1GmgXELVTPn%2FpUzg%2BgglWt3zdoesICxW9R%2B7qDQ%2FV7QNaYmRSyJuTmBoi4%2BReRt58BkNExjy%2BSg%2FvVWx8X12o1LfFseCaw4fmgFvV%2FqDIAb9LjaKl03Hq8DZ9j0Xr7cm%2FYZjuZeWe21Ew3V3MOKfrL4GOqUBCgK1sbdXSsQVVKYbX8CollDEQeLHXeUm9HMAVkcXRYVZa%2F6sOXO4dpmZIDMEGQmGsuFN4Hed0Wlg7bYXITY6Fv0mWJCbqF%2BcCUC4umkA4ZPhKwtCQePqowJu0ACeRJbgAG%2FAjPRwE%2Fu21qv9dRP3ifqY8FFc0lASbyOqUE%2Fta8MTepF4aDtVo0V6lzOEKLie3oqG3fJzYDlovBM5GSZ8vGQVBclT&X-Amz-Signature=5e1b11d00f698b7931e366f4f6da3823170b9bc45d66aa0dff709e6cb2b4a60a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SKFOUU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFnyPs6MmZXiYY9NydwDgGwXfR32Xk1Yip%2BNmQfnuAV9AiEAvOJCMij93cQp14UtZB9YYycDrT9xpI%2B2swU3I%2BTv4HYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMUEz7q08HWCOHFdeyrcA6MZfFzPC6Bfc4ZjiKw%2BYCsf8YgvNygC72XsMlct3G0kRpS0alyjq8i3Xpa788%2FRu0q88lcTH1xzU9qjVjAm7CyNslQtfo3oMNg1JfyjhSuR1BpTBdzn1VuvNXRnkYfIVgXbbNlVdtBSL9zlEj4txQwjsovjPu4Wqd2tud4ZoLr4SI2KSTu7FvkaSDL7acp%2BafjBQ%2FBWUrssdmBgJ1zUhSAvJ3eHChym2UNDN0rEaCPH9OY18XVHiSDT%2F%2BVUQcaBSuvE34VFweQHex2xxyAAW92h0ROgowFBUOJxybyN6oo5WPrAPtqmsFjZ0x9b8m%2FEfOes4SmmpffXQXgw1z89CcneufddiNumgihQcTpy4TZzAEktIH%2BuZVc7RnIPHjiUB48RgZ7sbC0BeHaeB06KmMor1Swp8R4m4nuMBTqk894n%2F1QOsbs%2BUQMfZxgh9avj%2Fat6BcqUA3oj5FfzIr1HmwsfMp%2B98j1YoKfhnxvfo%2Bfg1GmgXELVTPn%2FpUzg%2BgglWt3zdoesICxW9R%2B7qDQ%2FV7QNaYmRSyJuTmBoi4%2BReRt58BkNExjy%2BSg%2FvVWx8X12o1LfFseCaw4fmgFvV%2FqDIAb9LjaKl03Hq8DZ9j0Xr7cm%2FYZjuZeWe21Ew3V3MOKfrL4GOqUBCgK1sbdXSsQVVKYbX8CollDEQeLHXeUm9HMAVkcXRYVZa%2F6sOXO4dpmZIDMEGQmGsuFN4Hed0Wlg7bYXITY6Fv0mWJCbqF%2BcCUC4umkA4ZPhKwtCQePqowJu0ACeRJbgAG%2FAjPRwE%2Fu21qv9dRP3ifqY8FFc0lASbyOqUE%2Fta8MTepF4aDtVo0V6lzOEKLie3oqG3fJzYDlovBM5GSZ8vGQVBclT&X-Amz-Signature=e88de7c18be411ccec9843bc05355eb4dc196bbce177254ec5335ada1797ad1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SKFOUU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFnyPs6MmZXiYY9NydwDgGwXfR32Xk1Yip%2BNmQfnuAV9AiEAvOJCMij93cQp14UtZB9YYycDrT9xpI%2B2swU3I%2BTv4HYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMUEz7q08HWCOHFdeyrcA6MZfFzPC6Bfc4ZjiKw%2BYCsf8YgvNygC72XsMlct3G0kRpS0alyjq8i3Xpa788%2FRu0q88lcTH1xzU9qjVjAm7CyNslQtfo3oMNg1JfyjhSuR1BpTBdzn1VuvNXRnkYfIVgXbbNlVdtBSL9zlEj4txQwjsovjPu4Wqd2tud4ZoLr4SI2KSTu7FvkaSDL7acp%2BafjBQ%2FBWUrssdmBgJ1zUhSAvJ3eHChym2UNDN0rEaCPH9OY18XVHiSDT%2F%2BVUQcaBSuvE34VFweQHex2xxyAAW92h0ROgowFBUOJxybyN6oo5WPrAPtqmsFjZ0x9b8m%2FEfOes4SmmpffXQXgw1z89CcneufddiNumgihQcTpy4TZzAEktIH%2BuZVc7RnIPHjiUB48RgZ7sbC0BeHaeB06KmMor1Swp8R4m4nuMBTqk894n%2F1QOsbs%2BUQMfZxgh9avj%2Fat6BcqUA3oj5FfzIr1HmwsfMp%2B98j1YoKfhnxvfo%2Bfg1GmgXELVTPn%2FpUzg%2BgglWt3zdoesICxW9R%2B7qDQ%2FV7QNaYmRSyJuTmBoi4%2BReRt58BkNExjy%2BSg%2FvVWx8X12o1LfFseCaw4fmgFvV%2FqDIAb9LjaKl03Hq8DZ9j0Xr7cm%2FYZjuZeWe21Ew3V3MOKfrL4GOqUBCgK1sbdXSsQVVKYbX8CollDEQeLHXeUm9HMAVkcXRYVZa%2F6sOXO4dpmZIDMEGQmGsuFN4Hed0Wlg7bYXITY6Fv0mWJCbqF%2BcCUC4umkA4ZPhKwtCQePqowJu0ACeRJbgAG%2FAjPRwE%2Fu21qv9dRP3ifqY8FFc0lASbyOqUE%2Fta8MTepF4aDtVo0V6lzOEKLie3oqG3fJzYDlovBM5GSZ8vGQVBclT&X-Amz-Signature=6d3ea54f709a37f785850fe6f37dcb9c9a1ef9910f0e03baff1403bf4fd94162&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
