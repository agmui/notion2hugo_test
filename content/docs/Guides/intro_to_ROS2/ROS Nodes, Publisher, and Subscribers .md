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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWNSJK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnoO7KBx%2B2BSsGXqWODe3quyinMneBMHM3Emuw0ha9wIgd9lo5wcDOeIJwOkC6RkPXjqC2wHBmHfVLMaq9BfKahkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLH7E%2Bg1snkTnEUm5SrcA1F8jFeL%2FlezdZ2lXsYfTzBN2%2BjJEujg7d3CYGeHxYKAjcxiEw%2BmFPk5HzOqlxDSbsnHWUAn5Ge89A17AaIKoKnDUv5qRzGl5YTnncX%2B4yeSGhGDsPK%2B7FoVBtkNFyiBODw1ZmA0j%2BPOdPdgipyOEAWyeeHNWk1MEsLmvoKIOmeFVurYawvN2Ber7%2BowlXnZpZrKv8o%2FIL8qLtcbsJzaO9bjRpHxxx9dGJUtMVHP80RYBgFnj9WR%2BmMx9pbqWv4FHEjrlh4Oe5MElyi3DsqFkEAuuyN1DESFRe645%2FCSILhudKksFLUTngH8wZTPnwbI2Al7Cw84IpJ5d4UbPv2fh3dTNTJskMgFHRctGNpxSJX041YdrDUBsVX9ArRM3mPhd%2BDQd9HvzKcWQ2V%2F3lOqQFkR07bCBhls1tt7BsTRTRAQSWVQY7c1h7nt4hNE0WhXAGw82xow%2BCfjgRgida8jBF1zZfCfoWv7uHFDlXDFDuJYnGmw%2Bz3Pxo4MjzjdIDUbJJAA1No1QCvTK4EWDIs7OlEp45wxBeOLf%2F81IAGdnod4DLtR1wfQ9i8e08z5xbS%2FDKUu1d8XQRmVp%2BO62ww3lq3xZKZKeZ6XWFcwmkm%2FvHbb7bQTdaqHAghpEE7BMOO1osEGOqUBXTpbwSV%2FdrbuAfmwMhE28CCFxZqTf8dLWASb%2FCgnAghaocEFzKc%2B0PfU6Ss4bn3HcqnsrrThTX9A2XuiSzukXDvEfmHbmOncaF54qBHKvPsmdPMDiZ6L6%2FIDlDhBNSyk4mZqnQa%2BijdmW1ixyWNusH8F779vMlpq2jcgSwJfXKsEAqOQrqfYDx8DQY66Wxhr8B7dXjseD1qAC0XrELL5LIWqLNSs&X-Amz-Signature=ec7185f0391dd81dd0fe60700dfc93b3d95f8a741736ab4d0395f10cc7427302&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWNSJK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnoO7KBx%2B2BSsGXqWODe3quyinMneBMHM3Emuw0ha9wIgd9lo5wcDOeIJwOkC6RkPXjqC2wHBmHfVLMaq9BfKahkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLH7E%2Bg1snkTnEUm5SrcA1F8jFeL%2FlezdZ2lXsYfTzBN2%2BjJEujg7d3CYGeHxYKAjcxiEw%2BmFPk5HzOqlxDSbsnHWUAn5Ge89A17AaIKoKnDUv5qRzGl5YTnncX%2B4yeSGhGDsPK%2B7FoVBtkNFyiBODw1ZmA0j%2BPOdPdgipyOEAWyeeHNWk1MEsLmvoKIOmeFVurYawvN2Ber7%2BowlXnZpZrKv8o%2FIL8qLtcbsJzaO9bjRpHxxx9dGJUtMVHP80RYBgFnj9WR%2BmMx9pbqWv4FHEjrlh4Oe5MElyi3DsqFkEAuuyN1DESFRe645%2FCSILhudKksFLUTngH8wZTPnwbI2Al7Cw84IpJ5d4UbPv2fh3dTNTJskMgFHRctGNpxSJX041YdrDUBsVX9ArRM3mPhd%2BDQd9HvzKcWQ2V%2F3lOqQFkR07bCBhls1tt7BsTRTRAQSWVQY7c1h7nt4hNE0WhXAGw82xow%2BCfjgRgida8jBF1zZfCfoWv7uHFDlXDFDuJYnGmw%2Bz3Pxo4MjzjdIDUbJJAA1No1QCvTK4EWDIs7OlEp45wxBeOLf%2F81IAGdnod4DLtR1wfQ9i8e08z5xbS%2FDKUu1d8XQRmVp%2BO62ww3lq3xZKZKeZ6XWFcwmkm%2FvHbb7bQTdaqHAghpEE7BMOO1osEGOqUBXTpbwSV%2FdrbuAfmwMhE28CCFxZqTf8dLWASb%2FCgnAghaocEFzKc%2B0PfU6Ss4bn3HcqnsrrThTX9A2XuiSzukXDvEfmHbmOncaF54qBHKvPsmdPMDiZ6L6%2FIDlDhBNSyk4mZqnQa%2BijdmW1ixyWNusH8F779vMlpq2jcgSwJfXKsEAqOQrqfYDx8DQY66Wxhr8B7dXjseD1qAC0XrELL5LIWqLNSs&X-Amz-Signature=321700433cca239485501c23d6ba5d207e33be247726790d126250615ac2e2b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWNSJK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnoO7KBx%2B2BSsGXqWODe3quyinMneBMHM3Emuw0ha9wIgd9lo5wcDOeIJwOkC6RkPXjqC2wHBmHfVLMaq9BfKahkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLH7E%2Bg1snkTnEUm5SrcA1F8jFeL%2FlezdZ2lXsYfTzBN2%2BjJEujg7d3CYGeHxYKAjcxiEw%2BmFPk5HzOqlxDSbsnHWUAn5Ge89A17AaIKoKnDUv5qRzGl5YTnncX%2B4yeSGhGDsPK%2B7FoVBtkNFyiBODw1ZmA0j%2BPOdPdgipyOEAWyeeHNWk1MEsLmvoKIOmeFVurYawvN2Ber7%2BowlXnZpZrKv8o%2FIL8qLtcbsJzaO9bjRpHxxx9dGJUtMVHP80RYBgFnj9WR%2BmMx9pbqWv4FHEjrlh4Oe5MElyi3DsqFkEAuuyN1DESFRe645%2FCSILhudKksFLUTngH8wZTPnwbI2Al7Cw84IpJ5d4UbPv2fh3dTNTJskMgFHRctGNpxSJX041YdrDUBsVX9ArRM3mPhd%2BDQd9HvzKcWQ2V%2F3lOqQFkR07bCBhls1tt7BsTRTRAQSWVQY7c1h7nt4hNE0WhXAGw82xow%2BCfjgRgida8jBF1zZfCfoWv7uHFDlXDFDuJYnGmw%2Bz3Pxo4MjzjdIDUbJJAA1No1QCvTK4EWDIs7OlEp45wxBeOLf%2F81IAGdnod4DLtR1wfQ9i8e08z5xbS%2FDKUu1d8XQRmVp%2BO62ww3lq3xZKZKeZ6XWFcwmkm%2FvHbb7bQTdaqHAghpEE7BMOO1osEGOqUBXTpbwSV%2FdrbuAfmwMhE28CCFxZqTf8dLWASb%2FCgnAghaocEFzKc%2B0PfU6Ss4bn3HcqnsrrThTX9A2XuiSzukXDvEfmHbmOncaF54qBHKvPsmdPMDiZ6L6%2FIDlDhBNSyk4mZqnQa%2BijdmW1ixyWNusH8F779vMlpq2jcgSwJfXKsEAqOQrqfYDx8DQY66Wxhr8B7dXjseD1qAC0XrELL5LIWqLNSs&X-Amz-Signature=95a2034fc2b34a0946a78b9025d006d62f25471a95dfa655419bf86f1808d6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWNSJK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnoO7KBx%2B2BSsGXqWODe3quyinMneBMHM3Emuw0ha9wIgd9lo5wcDOeIJwOkC6RkPXjqC2wHBmHfVLMaq9BfKahkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLH7E%2Bg1snkTnEUm5SrcA1F8jFeL%2FlezdZ2lXsYfTzBN2%2BjJEujg7d3CYGeHxYKAjcxiEw%2BmFPk5HzOqlxDSbsnHWUAn5Ge89A17AaIKoKnDUv5qRzGl5YTnncX%2B4yeSGhGDsPK%2B7FoVBtkNFyiBODw1ZmA0j%2BPOdPdgipyOEAWyeeHNWk1MEsLmvoKIOmeFVurYawvN2Ber7%2BowlXnZpZrKv8o%2FIL8qLtcbsJzaO9bjRpHxxx9dGJUtMVHP80RYBgFnj9WR%2BmMx9pbqWv4FHEjrlh4Oe5MElyi3DsqFkEAuuyN1DESFRe645%2FCSILhudKksFLUTngH8wZTPnwbI2Al7Cw84IpJ5d4UbPv2fh3dTNTJskMgFHRctGNpxSJX041YdrDUBsVX9ArRM3mPhd%2BDQd9HvzKcWQ2V%2F3lOqQFkR07bCBhls1tt7BsTRTRAQSWVQY7c1h7nt4hNE0WhXAGw82xow%2BCfjgRgida8jBF1zZfCfoWv7uHFDlXDFDuJYnGmw%2Bz3Pxo4MjzjdIDUbJJAA1No1QCvTK4EWDIs7OlEp45wxBeOLf%2F81IAGdnod4DLtR1wfQ9i8e08z5xbS%2FDKUu1d8XQRmVp%2BO62ww3lq3xZKZKeZ6XWFcwmkm%2FvHbb7bQTdaqHAghpEE7BMOO1osEGOqUBXTpbwSV%2FdrbuAfmwMhE28CCFxZqTf8dLWASb%2FCgnAghaocEFzKc%2B0PfU6Ss4bn3HcqnsrrThTX9A2XuiSzukXDvEfmHbmOncaF54qBHKvPsmdPMDiZ6L6%2FIDlDhBNSyk4mZqnQa%2BijdmW1ixyWNusH8F779vMlpq2jcgSwJfXKsEAqOQrqfYDx8DQY66Wxhr8B7dXjseD1qAC0XrELL5LIWqLNSs&X-Amz-Signature=e8720959a2907b8c74858bfdc1629d3c975948bc6995629578b71b4c43b617e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWNSJK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnoO7KBx%2B2BSsGXqWODe3quyinMneBMHM3Emuw0ha9wIgd9lo5wcDOeIJwOkC6RkPXjqC2wHBmHfVLMaq9BfKahkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLH7E%2Bg1snkTnEUm5SrcA1F8jFeL%2FlezdZ2lXsYfTzBN2%2BjJEujg7d3CYGeHxYKAjcxiEw%2BmFPk5HzOqlxDSbsnHWUAn5Ge89A17AaIKoKnDUv5qRzGl5YTnncX%2B4yeSGhGDsPK%2B7FoVBtkNFyiBODw1ZmA0j%2BPOdPdgipyOEAWyeeHNWk1MEsLmvoKIOmeFVurYawvN2Ber7%2BowlXnZpZrKv8o%2FIL8qLtcbsJzaO9bjRpHxxx9dGJUtMVHP80RYBgFnj9WR%2BmMx9pbqWv4FHEjrlh4Oe5MElyi3DsqFkEAuuyN1DESFRe645%2FCSILhudKksFLUTngH8wZTPnwbI2Al7Cw84IpJ5d4UbPv2fh3dTNTJskMgFHRctGNpxSJX041YdrDUBsVX9ArRM3mPhd%2BDQd9HvzKcWQ2V%2F3lOqQFkR07bCBhls1tt7BsTRTRAQSWVQY7c1h7nt4hNE0WhXAGw82xow%2BCfjgRgida8jBF1zZfCfoWv7uHFDlXDFDuJYnGmw%2Bz3Pxo4MjzjdIDUbJJAA1No1QCvTK4EWDIs7OlEp45wxBeOLf%2F81IAGdnod4DLtR1wfQ9i8e08z5xbS%2FDKUu1d8XQRmVp%2BO62ww3lq3xZKZKeZ6XWFcwmkm%2FvHbb7bQTdaqHAghpEE7BMOO1osEGOqUBXTpbwSV%2FdrbuAfmwMhE28CCFxZqTf8dLWASb%2FCgnAghaocEFzKc%2B0PfU6Ss4bn3HcqnsrrThTX9A2XuiSzukXDvEfmHbmOncaF54qBHKvPsmdPMDiZ6L6%2FIDlDhBNSyk4mZqnQa%2BijdmW1ixyWNusH8F779vMlpq2jcgSwJfXKsEAqOQrqfYDx8DQY66Wxhr8B7dXjseD1qAC0XrELL5LIWqLNSs&X-Amz-Signature=626ffe05ebb2103ca1a0e3b294f8720eebe594374d22cdc583d61c9d99273e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWNSJK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnoO7KBx%2B2BSsGXqWODe3quyinMneBMHM3Emuw0ha9wIgd9lo5wcDOeIJwOkC6RkPXjqC2wHBmHfVLMaq9BfKahkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLH7E%2Bg1snkTnEUm5SrcA1F8jFeL%2FlezdZ2lXsYfTzBN2%2BjJEujg7d3CYGeHxYKAjcxiEw%2BmFPk5HzOqlxDSbsnHWUAn5Ge89A17AaIKoKnDUv5qRzGl5YTnncX%2B4yeSGhGDsPK%2B7FoVBtkNFyiBODw1ZmA0j%2BPOdPdgipyOEAWyeeHNWk1MEsLmvoKIOmeFVurYawvN2Ber7%2BowlXnZpZrKv8o%2FIL8qLtcbsJzaO9bjRpHxxx9dGJUtMVHP80RYBgFnj9WR%2BmMx9pbqWv4FHEjrlh4Oe5MElyi3DsqFkEAuuyN1DESFRe645%2FCSILhudKksFLUTngH8wZTPnwbI2Al7Cw84IpJ5d4UbPv2fh3dTNTJskMgFHRctGNpxSJX041YdrDUBsVX9ArRM3mPhd%2BDQd9HvzKcWQ2V%2F3lOqQFkR07bCBhls1tt7BsTRTRAQSWVQY7c1h7nt4hNE0WhXAGw82xow%2BCfjgRgida8jBF1zZfCfoWv7uHFDlXDFDuJYnGmw%2Bz3Pxo4MjzjdIDUbJJAA1No1QCvTK4EWDIs7OlEp45wxBeOLf%2F81IAGdnod4DLtR1wfQ9i8e08z5xbS%2FDKUu1d8XQRmVp%2BO62ww3lq3xZKZKeZ6XWFcwmkm%2FvHbb7bQTdaqHAghpEE7BMOO1osEGOqUBXTpbwSV%2FdrbuAfmwMhE28CCFxZqTf8dLWASb%2FCgnAghaocEFzKc%2B0PfU6Ss4bn3HcqnsrrThTX9A2XuiSzukXDvEfmHbmOncaF54qBHKvPsmdPMDiZ6L6%2FIDlDhBNSyk4mZqnQa%2BijdmW1ixyWNusH8F779vMlpq2jcgSwJfXKsEAqOQrqfYDx8DQY66Wxhr8B7dXjseD1qAC0XrELL5LIWqLNSs&X-Amz-Signature=d14c4ffb892f9ddcb0cf0397a6980bc2bf8a394b75839db742608c73e037fde1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWNSJK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnoO7KBx%2B2BSsGXqWODe3quyinMneBMHM3Emuw0ha9wIgd9lo5wcDOeIJwOkC6RkPXjqC2wHBmHfVLMaq9BfKahkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLH7E%2Bg1snkTnEUm5SrcA1F8jFeL%2FlezdZ2lXsYfTzBN2%2BjJEujg7d3CYGeHxYKAjcxiEw%2BmFPk5HzOqlxDSbsnHWUAn5Ge89A17AaIKoKnDUv5qRzGl5YTnncX%2B4yeSGhGDsPK%2B7FoVBtkNFyiBODw1ZmA0j%2BPOdPdgipyOEAWyeeHNWk1MEsLmvoKIOmeFVurYawvN2Ber7%2BowlXnZpZrKv8o%2FIL8qLtcbsJzaO9bjRpHxxx9dGJUtMVHP80RYBgFnj9WR%2BmMx9pbqWv4FHEjrlh4Oe5MElyi3DsqFkEAuuyN1DESFRe645%2FCSILhudKksFLUTngH8wZTPnwbI2Al7Cw84IpJ5d4UbPv2fh3dTNTJskMgFHRctGNpxSJX041YdrDUBsVX9ArRM3mPhd%2BDQd9HvzKcWQ2V%2F3lOqQFkR07bCBhls1tt7BsTRTRAQSWVQY7c1h7nt4hNE0WhXAGw82xow%2BCfjgRgida8jBF1zZfCfoWv7uHFDlXDFDuJYnGmw%2Bz3Pxo4MjzjdIDUbJJAA1No1QCvTK4EWDIs7OlEp45wxBeOLf%2F81IAGdnod4DLtR1wfQ9i8e08z5xbS%2FDKUu1d8XQRmVp%2BO62ww3lq3xZKZKeZ6XWFcwmkm%2FvHbb7bQTdaqHAghpEE7BMOO1osEGOqUBXTpbwSV%2FdrbuAfmwMhE28CCFxZqTf8dLWASb%2FCgnAghaocEFzKc%2B0PfU6Ss4bn3HcqnsrrThTX9A2XuiSzukXDvEfmHbmOncaF54qBHKvPsmdPMDiZ6L6%2FIDlDhBNSyk4mZqnQa%2BijdmW1ixyWNusH8F779vMlpq2jcgSwJfXKsEAqOQrqfYDx8DQY66Wxhr8B7dXjseD1qAC0XrELL5LIWqLNSs&X-Amz-Signature=50ee92377595919d752962f19f8f7f39a51c038ca99b323c16627e2e434b1f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWNSJK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnoO7KBx%2B2BSsGXqWODe3quyinMneBMHM3Emuw0ha9wIgd9lo5wcDOeIJwOkC6RkPXjqC2wHBmHfVLMaq9BfKahkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLH7E%2Bg1snkTnEUm5SrcA1F8jFeL%2FlezdZ2lXsYfTzBN2%2BjJEujg7d3CYGeHxYKAjcxiEw%2BmFPk5HzOqlxDSbsnHWUAn5Ge89A17AaIKoKnDUv5qRzGl5YTnncX%2B4yeSGhGDsPK%2B7FoVBtkNFyiBODw1ZmA0j%2BPOdPdgipyOEAWyeeHNWk1MEsLmvoKIOmeFVurYawvN2Ber7%2BowlXnZpZrKv8o%2FIL8qLtcbsJzaO9bjRpHxxx9dGJUtMVHP80RYBgFnj9WR%2BmMx9pbqWv4FHEjrlh4Oe5MElyi3DsqFkEAuuyN1DESFRe645%2FCSILhudKksFLUTngH8wZTPnwbI2Al7Cw84IpJ5d4UbPv2fh3dTNTJskMgFHRctGNpxSJX041YdrDUBsVX9ArRM3mPhd%2BDQd9HvzKcWQ2V%2F3lOqQFkR07bCBhls1tt7BsTRTRAQSWVQY7c1h7nt4hNE0WhXAGw82xow%2BCfjgRgida8jBF1zZfCfoWv7uHFDlXDFDuJYnGmw%2Bz3Pxo4MjzjdIDUbJJAA1No1QCvTK4EWDIs7OlEp45wxBeOLf%2F81IAGdnod4DLtR1wfQ9i8e08z5xbS%2FDKUu1d8XQRmVp%2BO62ww3lq3xZKZKeZ6XWFcwmkm%2FvHbb7bQTdaqHAghpEE7BMOO1osEGOqUBXTpbwSV%2FdrbuAfmwMhE28CCFxZqTf8dLWASb%2FCgnAghaocEFzKc%2B0PfU6Ss4bn3HcqnsrrThTX9A2XuiSzukXDvEfmHbmOncaF54qBHKvPsmdPMDiZ6L6%2FIDlDhBNSyk4mZqnQa%2BijdmW1ixyWNusH8F779vMlpq2jcgSwJfXKsEAqOQrqfYDx8DQY66Wxhr8B7dXjseD1qAC0XrELL5LIWqLNSs&X-Amz-Signature=fa5fd1c39f6a1f9b086c79d2fe4b2f1d283a3ccf71e7ba5eb6eb65ddda9ac7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
