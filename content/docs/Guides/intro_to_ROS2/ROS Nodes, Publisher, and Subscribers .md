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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JAKW7B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHLIz0RTX92nJEl2xNr%2BHR3gQTE4GqV%2FmGW3Lmjv1lzGAiEAuKXPJbowp6MDxconriGIgr0%2Bb02VQU9qJUsishIq2UoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE6o%2Fsn%2FcqUZxpGnCrcA5onZwvcWdE3mI9t3rqUWQkfFCY9TPMnt%2B7NseFjS%2BHj4AyX516qI7piCSvxhMkw3tv2SrzA%2FVClZMk2lRSS4WBNA3XD6ebRE366xJuXU1nna%2BYoE3bP3PNCIvePM4J%2BRNYfpGhnBO%2FEvY2RssV02ng7p5Qn9BaP%2BNv1IGWBOJ2NBYb4MOVaZsPJN4XxFsEDtmAWQ%2FOHl1M9YxJ8UEunvFKs1fYJZYaMd3NMCg5WVqyegg%2F77oWluUPWqXbxPUFCdiDEYFzhUTV8bV7CALUQPuRExocIEdYiiRiD%2FfnWpiMKfKkv90OHLXF5%2FVDBZ28Ty2%2Bi46tvL2wV1Mmf7IOaWdgaz4d%2FoYZD7e46XgxTELtrIBOaoz4zUrXz%2BCzxjLzssTdugOg8Z43jgINFQRhlKsyWstfvAjiFN57Z%2BZIYPRjscnjIWhXjEC5YnePjbSuWwd7O9SEu7cwkb8fKY5E2RQuYWPVURHUbZ89Ku%2BEyBKDdY%2BHyt6%2Fq1geAd4Qy3MHjCDszFKpi0bdDrFhVdMAPEnROG4rft0PIHwS6hq8MNHRtP1%2FNQgpoyoywjp8%2FpqHzvwHWBOgPQctax54OmImdHweZ8HOsO8Pfb5JTufdOR2E1dBst%2B%2FeCuzI%2FqutnMLWUqL8GOqUBJ52RFDmZaQYmvto7t5aA9aCWPrFSQnfdmcUnWj0OSTPWpVOSkQK2CdP38v5tGXpWJK0CXu18RY8CR1Q%2B1DISD3hpM4hwch%2F6oZdVV%2FjNx9Dx%2BWN1cTwkveWwXvQyZ0Om2ieqiHz%2FAEECb7Ps7y8ZYL6H2XXeKlNrOovDYox8q8AALNDmFtkukdQUEy0WCTrMsak5Oepa0gBUw6nKd02gXrHuR7TM&X-Amz-Signature=1b3b034fa166b4f7e3ff6048616953ea5b40aeb86e551b212582d3b8f62b5a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JAKW7B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHLIz0RTX92nJEl2xNr%2BHR3gQTE4GqV%2FmGW3Lmjv1lzGAiEAuKXPJbowp6MDxconriGIgr0%2Bb02VQU9qJUsishIq2UoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE6o%2Fsn%2FcqUZxpGnCrcA5onZwvcWdE3mI9t3rqUWQkfFCY9TPMnt%2B7NseFjS%2BHj4AyX516qI7piCSvxhMkw3tv2SrzA%2FVClZMk2lRSS4WBNA3XD6ebRE366xJuXU1nna%2BYoE3bP3PNCIvePM4J%2BRNYfpGhnBO%2FEvY2RssV02ng7p5Qn9BaP%2BNv1IGWBOJ2NBYb4MOVaZsPJN4XxFsEDtmAWQ%2FOHl1M9YxJ8UEunvFKs1fYJZYaMd3NMCg5WVqyegg%2F77oWluUPWqXbxPUFCdiDEYFzhUTV8bV7CALUQPuRExocIEdYiiRiD%2FfnWpiMKfKkv90OHLXF5%2FVDBZ28Ty2%2Bi46tvL2wV1Mmf7IOaWdgaz4d%2FoYZD7e46XgxTELtrIBOaoz4zUrXz%2BCzxjLzssTdugOg8Z43jgINFQRhlKsyWstfvAjiFN57Z%2BZIYPRjscnjIWhXjEC5YnePjbSuWwd7O9SEu7cwkb8fKY5E2RQuYWPVURHUbZ89Ku%2BEyBKDdY%2BHyt6%2Fq1geAd4Qy3MHjCDszFKpi0bdDrFhVdMAPEnROG4rft0PIHwS6hq8MNHRtP1%2FNQgpoyoywjp8%2FpqHzvwHWBOgPQctax54OmImdHweZ8HOsO8Pfb5JTufdOR2E1dBst%2B%2FeCuzI%2FqutnMLWUqL8GOqUBJ52RFDmZaQYmvto7t5aA9aCWPrFSQnfdmcUnWj0OSTPWpVOSkQK2CdP38v5tGXpWJK0CXu18RY8CR1Q%2B1DISD3hpM4hwch%2F6oZdVV%2FjNx9Dx%2BWN1cTwkveWwXvQyZ0Om2ieqiHz%2FAEECb7Ps7y8ZYL6H2XXeKlNrOovDYox8q8AALNDmFtkukdQUEy0WCTrMsak5Oepa0gBUw6nKd02gXrHuR7TM&X-Amz-Signature=66c18e0881ec95ecea91cbaeff35177ba3587a321b747a3ce37277ac501bfd01&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JAKW7B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHLIz0RTX92nJEl2xNr%2BHR3gQTE4GqV%2FmGW3Lmjv1lzGAiEAuKXPJbowp6MDxconriGIgr0%2Bb02VQU9qJUsishIq2UoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE6o%2Fsn%2FcqUZxpGnCrcA5onZwvcWdE3mI9t3rqUWQkfFCY9TPMnt%2B7NseFjS%2BHj4AyX516qI7piCSvxhMkw3tv2SrzA%2FVClZMk2lRSS4WBNA3XD6ebRE366xJuXU1nna%2BYoE3bP3PNCIvePM4J%2BRNYfpGhnBO%2FEvY2RssV02ng7p5Qn9BaP%2BNv1IGWBOJ2NBYb4MOVaZsPJN4XxFsEDtmAWQ%2FOHl1M9YxJ8UEunvFKs1fYJZYaMd3NMCg5WVqyegg%2F77oWluUPWqXbxPUFCdiDEYFzhUTV8bV7CALUQPuRExocIEdYiiRiD%2FfnWpiMKfKkv90OHLXF5%2FVDBZ28Ty2%2Bi46tvL2wV1Mmf7IOaWdgaz4d%2FoYZD7e46XgxTELtrIBOaoz4zUrXz%2BCzxjLzssTdugOg8Z43jgINFQRhlKsyWstfvAjiFN57Z%2BZIYPRjscnjIWhXjEC5YnePjbSuWwd7O9SEu7cwkb8fKY5E2RQuYWPVURHUbZ89Ku%2BEyBKDdY%2BHyt6%2Fq1geAd4Qy3MHjCDszFKpi0bdDrFhVdMAPEnROG4rft0PIHwS6hq8MNHRtP1%2FNQgpoyoywjp8%2FpqHzvwHWBOgPQctax54OmImdHweZ8HOsO8Pfb5JTufdOR2E1dBst%2B%2FeCuzI%2FqutnMLWUqL8GOqUBJ52RFDmZaQYmvto7t5aA9aCWPrFSQnfdmcUnWj0OSTPWpVOSkQK2CdP38v5tGXpWJK0CXu18RY8CR1Q%2B1DISD3hpM4hwch%2F6oZdVV%2FjNx9Dx%2BWN1cTwkveWwXvQyZ0Om2ieqiHz%2FAEECb7Ps7y8ZYL6H2XXeKlNrOovDYox8q8AALNDmFtkukdQUEy0WCTrMsak5Oepa0gBUw6nKd02gXrHuR7TM&X-Amz-Signature=8a5a5dc07b901c433ec379ad960ce78ae69bc67b23f6c8a07400e13dce8e2bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JAKW7B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHLIz0RTX92nJEl2xNr%2BHR3gQTE4GqV%2FmGW3Lmjv1lzGAiEAuKXPJbowp6MDxconriGIgr0%2Bb02VQU9qJUsishIq2UoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE6o%2Fsn%2FcqUZxpGnCrcA5onZwvcWdE3mI9t3rqUWQkfFCY9TPMnt%2B7NseFjS%2BHj4AyX516qI7piCSvxhMkw3tv2SrzA%2FVClZMk2lRSS4WBNA3XD6ebRE366xJuXU1nna%2BYoE3bP3PNCIvePM4J%2BRNYfpGhnBO%2FEvY2RssV02ng7p5Qn9BaP%2BNv1IGWBOJ2NBYb4MOVaZsPJN4XxFsEDtmAWQ%2FOHl1M9YxJ8UEunvFKs1fYJZYaMd3NMCg5WVqyegg%2F77oWluUPWqXbxPUFCdiDEYFzhUTV8bV7CALUQPuRExocIEdYiiRiD%2FfnWpiMKfKkv90OHLXF5%2FVDBZ28Ty2%2Bi46tvL2wV1Mmf7IOaWdgaz4d%2FoYZD7e46XgxTELtrIBOaoz4zUrXz%2BCzxjLzssTdugOg8Z43jgINFQRhlKsyWstfvAjiFN57Z%2BZIYPRjscnjIWhXjEC5YnePjbSuWwd7O9SEu7cwkb8fKY5E2RQuYWPVURHUbZ89Ku%2BEyBKDdY%2BHyt6%2Fq1geAd4Qy3MHjCDszFKpi0bdDrFhVdMAPEnROG4rft0PIHwS6hq8MNHRtP1%2FNQgpoyoywjp8%2FpqHzvwHWBOgPQctax54OmImdHweZ8HOsO8Pfb5JTufdOR2E1dBst%2B%2FeCuzI%2FqutnMLWUqL8GOqUBJ52RFDmZaQYmvto7t5aA9aCWPrFSQnfdmcUnWj0OSTPWpVOSkQK2CdP38v5tGXpWJK0CXu18RY8CR1Q%2B1DISD3hpM4hwch%2F6oZdVV%2FjNx9Dx%2BWN1cTwkveWwXvQyZ0Om2ieqiHz%2FAEECb7Ps7y8ZYL6H2XXeKlNrOovDYox8q8AALNDmFtkukdQUEy0WCTrMsak5Oepa0gBUw6nKd02gXrHuR7TM&X-Amz-Signature=52b7debab91ab99c3327b96741ccf4ca298973d51ff584b2b0e16fbf2ef840b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JAKW7B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHLIz0RTX92nJEl2xNr%2BHR3gQTE4GqV%2FmGW3Lmjv1lzGAiEAuKXPJbowp6MDxconriGIgr0%2Bb02VQU9qJUsishIq2UoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE6o%2Fsn%2FcqUZxpGnCrcA5onZwvcWdE3mI9t3rqUWQkfFCY9TPMnt%2B7NseFjS%2BHj4AyX516qI7piCSvxhMkw3tv2SrzA%2FVClZMk2lRSS4WBNA3XD6ebRE366xJuXU1nna%2BYoE3bP3PNCIvePM4J%2BRNYfpGhnBO%2FEvY2RssV02ng7p5Qn9BaP%2BNv1IGWBOJ2NBYb4MOVaZsPJN4XxFsEDtmAWQ%2FOHl1M9YxJ8UEunvFKs1fYJZYaMd3NMCg5WVqyegg%2F77oWluUPWqXbxPUFCdiDEYFzhUTV8bV7CALUQPuRExocIEdYiiRiD%2FfnWpiMKfKkv90OHLXF5%2FVDBZ28Ty2%2Bi46tvL2wV1Mmf7IOaWdgaz4d%2FoYZD7e46XgxTELtrIBOaoz4zUrXz%2BCzxjLzssTdugOg8Z43jgINFQRhlKsyWstfvAjiFN57Z%2BZIYPRjscnjIWhXjEC5YnePjbSuWwd7O9SEu7cwkb8fKY5E2RQuYWPVURHUbZ89Ku%2BEyBKDdY%2BHyt6%2Fq1geAd4Qy3MHjCDszFKpi0bdDrFhVdMAPEnROG4rft0PIHwS6hq8MNHRtP1%2FNQgpoyoywjp8%2FpqHzvwHWBOgPQctax54OmImdHweZ8HOsO8Pfb5JTufdOR2E1dBst%2B%2FeCuzI%2FqutnMLWUqL8GOqUBJ52RFDmZaQYmvto7t5aA9aCWPrFSQnfdmcUnWj0OSTPWpVOSkQK2CdP38v5tGXpWJK0CXu18RY8CR1Q%2B1DISD3hpM4hwch%2F6oZdVV%2FjNx9Dx%2BWN1cTwkveWwXvQyZ0Om2ieqiHz%2FAEECb7Ps7y8ZYL6H2XXeKlNrOovDYox8q8AALNDmFtkukdQUEy0WCTrMsak5Oepa0gBUw6nKd02gXrHuR7TM&X-Amz-Signature=e50da5126ce50151fbaae133e433f47209ccf27d7133307f5b8a0ade2e4fa6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JAKW7B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHLIz0RTX92nJEl2xNr%2BHR3gQTE4GqV%2FmGW3Lmjv1lzGAiEAuKXPJbowp6MDxconriGIgr0%2Bb02VQU9qJUsishIq2UoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE6o%2Fsn%2FcqUZxpGnCrcA5onZwvcWdE3mI9t3rqUWQkfFCY9TPMnt%2B7NseFjS%2BHj4AyX516qI7piCSvxhMkw3tv2SrzA%2FVClZMk2lRSS4WBNA3XD6ebRE366xJuXU1nna%2BYoE3bP3PNCIvePM4J%2BRNYfpGhnBO%2FEvY2RssV02ng7p5Qn9BaP%2BNv1IGWBOJ2NBYb4MOVaZsPJN4XxFsEDtmAWQ%2FOHl1M9YxJ8UEunvFKs1fYJZYaMd3NMCg5WVqyegg%2F77oWluUPWqXbxPUFCdiDEYFzhUTV8bV7CALUQPuRExocIEdYiiRiD%2FfnWpiMKfKkv90OHLXF5%2FVDBZ28Ty2%2Bi46tvL2wV1Mmf7IOaWdgaz4d%2FoYZD7e46XgxTELtrIBOaoz4zUrXz%2BCzxjLzssTdugOg8Z43jgINFQRhlKsyWstfvAjiFN57Z%2BZIYPRjscnjIWhXjEC5YnePjbSuWwd7O9SEu7cwkb8fKY5E2RQuYWPVURHUbZ89Ku%2BEyBKDdY%2BHyt6%2Fq1geAd4Qy3MHjCDszFKpi0bdDrFhVdMAPEnROG4rft0PIHwS6hq8MNHRtP1%2FNQgpoyoywjp8%2FpqHzvwHWBOgPQctax54OmImdHweZ8HOsO8Pfb5JTufdOR2E1dBst%2B%2FeCuzI%2FqutnMLWUqL8GOqUBJ52RFDmZaQYmvto7t5aA9aCWPrFSQnfdmcUnWj0OSTPWpVOSkQK2CdP38v5tGXpWJK0CXu18RY8CR1Q%2B1DISD3hpM4hwch%2F6oZdVV%2FjNx9Dx%2BWN1cTwkveWwXvQyZ0Om2ieqiHz%2FAEECb7Ps7y8ZYL6H2XXeKlNrOovDYox8q8AALNDmFtkukdQUEy0WCTrMsak5Oepa0gBUw6nKd02gXrHuR7TM&X-Amz-Signature=ec589d5385b7b8e509f5030b26b90d0013a0a927aadac94880c2dedae1ce5c85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JAKW7B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHLIz0RTX92nJEl2xNr%2BHR3gQTE4GqV%2FmGW3Lmjv1lzGAiEAuKXPJbowp6MDxconriGIgr0%2Bb02VQU9qJUsishIq2UoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE6o%2Fsn%2FcqUZxpGnCrcA5onZwvcWdE3mI9t3rqUWQkfFCY9TPMnt%2B7NseFjS%2BHj4AyX516qI7piCSvxhMkw3tv2SrzA%2FVClZMk2lRSS4WBNA3XD6ebRE366xJuXU1nna%2BYoE3bP3PNCIvePM4J%2BRNYfpGhnBO%2FEvY2RssV02ng7p5Qn9BaP%2BNv1IGWBOJ2NBYb4MOVaZsPJN4XxFsEDtmAWQ%2FOHl1M9YxJ8UEunvFKs1fYJZYaMd3NMCg5WVqyegg%2F77oWluUPWqXbxPUFCdiDEYFzhUTV8bV7CALUQPuRExocIEdYiiRiD%2FfnWpiMKfKkv90OHLXF5%2FVDBZ28Ty2%2Bi46tvL2wV1Mmf7IOaWdgaz4d%2FoYZD7e46XgxTELtrIBOaoz4zUrXz%2BCzxjLzssTdugOg8Z43jgINFQRhlKsyWstfvAjiFN57Z%2BZIYPRjscnjIWhXjEC5YnePjbSuWwd7O9SEu7cwkb8fKY5E2RQuYWPVURHUbZ89Ku%2BEyBKDdY%2BHyt6%2Fq1geAd4Qy3MHjCDszFKpi0bdDrFhVdMAPEnROG4rft0PIHwS6hq8MNHRtP1%2FNQgpoyoywjp8%2FpqHzvwHWBOgPQctax54OmImdHweZ8HOsO8Pfb5JTufdOR2E1dBst%2B%2FeCuzI%2FqutnMLWUqL8GOqUBJ52RFDmZaQYmvto7t5aA9aCWPrFSQnfdmcUnWj0OSTPWpVOSkQK2CdP38v5tGXpWJK0CXu18RY8CR1Q%2B1DISD3hpM4hwch%2F6oZdVV%2FjNx9Dx%2BWN1cTwkveWwXvQyZ0Om2ieqiHz%2FAEECb7Ps7y8ZYL6H2XXeKlNrOovDYox8q8AALNDmFtkukdQUEy0WCTrMsak5Oepa0gBUw6nKd02gXrHuR7TM&X-Amz-Signature=b83d691ef5976141be7c3bd1d02639ad335aa2eecb83691c14ed1d15f17286fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JAKW7B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHLIz0RTX92nJEl2xNr%2BHR3gQTE4GqV%2FmGW3Lmjv1lzGAiEAuKXPJbowp6MDxconriGIgr0%2Bb02VQU9qJUsishIq2UoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE6o%2Fsn%2FcqUZxpGnCrcA5onZwvcWdE3mI9t3rqUWQkfFCY9TPMnt%2B7NseFjS%2BHj4AyX516qI7piCSvxhMkw3tv2SrzA%2FVClZMk2lRSS4WBNA3XD6ebRE366xJuXU1nna%2BYoE3bP3PNCIvePM4J%2BRNYfpGhnBO%2FEvY2RssV02ng7p5Qn9BaP%2BNv1IGWBOJ2NBYb4MOVaZsPJN4XxFsEDtmAWQ%2FOHl1M9YxJ8UEunvFKs1fYJZYaMd3NMCg5WVqyegg%2F77oWluUPWqXbxPUFCdiDEYFzhUTV8bV7CALUQPuRExocIEdYiiRiD%2FfnWpiMKfKkv90OHLXF5%2FVDBZ28Ty2%2Bi46tvL2wV1Mmf7IOaWdgaz4d%2FoYZD7e46XgxTELtrIBOaoz4zUrXz%2BCzxjLzssTdugOg8Z43jgINFQRhlKsyWstfvAjiFN57Z%2BZIYPRjscnjIWhXjEC5YnePjbSuWwd7O9SEu7cwkb8fKY5E2RQuYWPVURHUbZ89Ku%2BEyBKDdY%2BHyt6%2Fq1geAd4Qy3MHjCDszFKpi0bdDrFhVdMAPEnROG4rft0PIHwS6hq8MNHRtP1%2FNQgpoyoywjp8%2FpqHzvwHWBOgPQctax54OmImdHweZ8HOsO8Pfb5JTufdOR2E1dBst%2B%2FeCuzI%2FqutnMLWUqL8GOqUBJ52RFDmZaQYmvto7t5aA9aCWPrFSQnfdmcUnWj0OSTPWpVOSkQK2CdP38v5tGXpWJK0CXu18RY8CR1Q%2B1DISD3hpM4hwch%2F6oZdVV%2FjNx9Dx%2BWN1cTwkveWwXvQyZ0Om2ieqiHz%2FAEECb7Ps7y8ZYL6H2XXeKlNrOovDYox8q8AALNDmFtkukdQUEy0WCTrMsak5Oepa0gBUw6nKd02gXrHuR7TM&X-Amz-Signature=7c1964fa4e714beafe930fa01763be6c7b7c12068f68e7b2714d1225e2ea734a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
