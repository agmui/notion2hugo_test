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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=4085dfe90fd5da0097185d386d883818e045577a8dca01769a89a03e140c7180&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=a3d1c7371fb25429a3d983f13e428500fb32857442d1f4fbb9a3f1039b6c4ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=bd773952e6f8ad2753828c72bd266ad2d11c22d39ca1207c328e796cb6303f74&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=8b92a1d0c8e66400f7dee84facde7d47e0ba13339d2412882ecdfa52d684c82e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=7ff7f4df9e952e2a29b1d7e27d18a43f4c25b329f07aa6e8e04192ad21464ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=069e16c924f83f03eca0fff780a1cce61825c1e2ee3cce2af2c05d57a19aa771&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=b3b25c843549d44a859836be620ffbd280f42f6486cd8590708db71c131796ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27ZV7LN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPDUN9fs%2BF8VlinA5NzTnsWRQ7JMk6c2EYGOVAFf4pvAiEA%2BWX%2FB%2Ba3%2BbWYIdMnxa9MJyjtA5M3WZMBrfC2wgLU%2FqkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdvUTcXj%2B3uedmiyrcA8UnSbXBxTcmgbyIVeo3bbegkRdeSaVq8nx7hHfO%2FBBj30VJStS2V51TjqWIbsqQ5Af3o2k4PtSx9RqCN7rSLap1z%2BPhHPAGTwEUNlbLf4RDErPcbw20frFBakicE74lFA1N0c%2FaH5kr2bv6s0VskEYjqub3WxP945zMtZTPL26Touqy82aYs1c6muMeiBOrxVNIoWx1AuCFbOUHL4uk45aZikOJ6FIOhHeNWEI9g3y%2BbyElSC5i0Rx3%2BkJK7bFJrqEUlT%2F3WD1J%2BQjmcbaMnQCOmsM27XeYi1Y5flkssaUPS8LtNuGGiSgYPukyh%2BVd%2Bxg%2FKhK1c4Z%2FxmjdO%2Boif%2BnGkDRPnGTH5nCB3BQSNC3145hE%2FvZdzd4LF1sF6IMDLErJu6df3JhMsiU0bbTzwhUd5gJAflsIhG3%2BTndrvph2s30LjHuxh3N10jOxkyxsNwjAgJMsmkuZ7zTL8juJ%2FNylbnA9fBaCMdt9Cu0zh%2BT0zhlGW0Ve%2FfGSy2ZYnm1W6EXcsSzfSK7IfWBMI1sS2fBV3hHulyA6pg2c6WYSlh%2BHaURc%2BVW1Xfe7XG7iOreipR3REHo4lAuBHewobwoOhRZc9s2CvrnKy30v32dkzRhKWnaMNaxgBiglR17OMNu58b8GOqUBa8IjllMT1e%2Fhcb%2FTbzMhHABlLVIpIjCBIaAgOx9%2FT%2F9FJDuli14Vy1aFlPZGRV4mkYGz%2F5Bm3XzWo8mYCA3l%2FzUaOi%2BgLFL4ZwArGNQ4NXI6ktiLuscgQ6YNyOtwmxdnVUDFgZR8ASF7HEtsplVR0wJ5Tt2MCuTnmjsLCbiN%2FzI39oeGHMY5GtbSnH5U%2BbgzzT1moA%2B0%2FJ%2BusEB9BDDXxg62B5VI&X-Amz-Signature=0425ce6e292ef3d7a178f9cad3df5f2205d41e4fbaa5d935661a2a4eeb23f4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
