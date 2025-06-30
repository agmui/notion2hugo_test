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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3JDYB2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokF2eaS%2BBQ%2B6vAkpLY%2FJ%2FjlLAPfRkYwCQ3meWTtaDJwIgIFdR5cIHeaQU8L5gp%2Bj6YCeuH387j0r8RIFd1%2FanPOIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ZFXu%2BKR6vhY%2BrkircA7WuicYq9nXA7gHm3IJ1sIighijqBcZyJ6%2BrTky2y6nJogSO6PT%2B9gA5b%2FCOcGJDpKGfyqg%2F8zBc7s56GXDwblSqtEMTviLLjrtFEp94mxhGpY34QSenQxmAKnplGQnL4GtkFHHLAGuzVzgvnOPULmVk2Hj0rf4iulkQywr3Z8Y8GwzNLxee4bK584pjFVnXCW5L%2FxnCiZl2uyMd1YDXsEsxWYKt28X3qbhkL%2FxL3%2B%2FAtwZ2%2BLqc%2FvFtix6s52%2FtgEHxdPRdtSf1qlGRC36%2Ft6npXPBPGZgAUoz%2FrLL8COjIkyEP8L4Rb%2Fqekh8Fu8TeaE7w5gz4Kb3aGZiyYyDBSwZWPtOXoJuaIWuAwIJc6ei0siSfsZvUScFfXUDOpxrWIIIZAy4sDRgbrRPcDfFlvvu6nNNViqi%2F9y0LPcPee8SogeY3cDUHjaUvJfepnuyewj2WgqAl8gsZgFDWH5m5TNezesyVAkEkLvsRSy%2FqEyyi8yq50hEMtEpBw6TGmb6XRTUXQ%2FEMt4KmIOstjAnmFAkxxlGhuRIF0NV%2BqOdjyBKQvA1YTe6JUUT3HhELtAwWadu5olK0H0luWYRwCTffP1ESjRmVIMdCxKcnuoR7x4NEDW1pHyLouBF04IYNMLv0iMMGOqUBZG5OLzW8n3rbq%2BRSiStnitUfuB4mEFRrRZ0YjB9SL2xHg1WYdCNOySdv%2Bb6d%2F8z0UKY83F2M93BftLERD4LHhc7pXoJ5z2EnLzZ6G8KhubCs%2B6L4MxGhZqyYuXAjhCTMLcJ6ajM96G4V%2BH82YzDetb8z7tLgUSTqEbvo%2BbF4rdhhtjJKGQwP1Z5IHrF5Rljl08W%2Bs20Czmj4nRb1MwgVUGW7OvMl&X-Amz-Signature=8a538377067c238584b4bb8c9a81e2188ba3bf18bfe99de797a503e3a4dd936f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3JDYB2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokF2eaS%2BBQ%2B6vAkpLY%2FJ%2FjlLAPfRkYwCQ3meWTtaDJwIgIFdR5cIHeaQU8L5gp%2Bj6YCeuH387j0r8RIFd1%2FanPOIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ZFXu%2BKR6vhY%2BrkircA7WuicYq9nXA7gHm3IJ1sIighijqBcZyJ6%2BrTky2y6nJogSO6PT%2B9gA5b%2FCOcGJDpKGfyqg%2F8zBc7s56GXDwblSqtEMTviLLjrtFEp94mxhGpY34QSenQxmAKnplGQnL4GtkFHHLAGuzVzgvnOPULmVk2Hj0rf4iulkQywr3Z8Y8GwzNLxee4bK584pjFVnXCW5L%2FxnCiZl2uyMd1YDXsEsxWYKt28X3qbhkL%2FxL3%2B%2FAtwZ2%2BLqc%2FvFtix6s52%2FtgEHxdPRdtSf1qlGRC36%2Ft6npXPBPGZgAUoz%2FrLL8COjIkyEP8L4Rb%2Fqekh8Fu8TeaE7w5gz4Kb3aGZiyYyDBSwZWPtOXoJuaIWuAwIJc6ei0siSfsZvUScFfXUDOpxrWIIIZAy4sDRgbrRPcDfFlvvu6nNNViqi%2F9y0LPcPee8SogeY3cDUHjaUvJfepnuyewj2WgqAl8gsZgFDWH5m5TNezesyVAkEkLvsRSy%2FqEyyi8yq50hEMtEpBw6TGmb6XRTUXQ%2FEMt4KmIOstjAnmFAkxxlGhuRIF0NV%2BqOdjyBKQvA1YTe6JUUT3HhELtAwWadu5olK0H0luWYRwCTffP1ESjRmVIMdCxKcnuoR7x4NEDW1pHyLouBF04IYNMLv0iMMGOqUBZG5OLzW8n3rbq%2BRSiStnitUfuB4mEFRrRZ0YjB9SL2xHg1WYdCNOySdv%2Bb6d%2F8z0UKY83F2M93BftLERD4LHhc7pXoJ5z2EnLzZ6G8KhubCs%2B6L4MxGhZqyYuXAjhCTMLcJ6ajM96G4V%2BH82YzDetb8z7tLgUSTqEbvo%2BbF4rdhhtjJKGQwP1Z5IHrF5Rljl08W%2Bs20Czmj4nRb1MwgVUGW7OvMl&X-Amz-Signature=5ace54fc93fbaf86adfff95a0276fd62f9aafa037bdbe5089b539a9a0c457877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3JDYB2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokF2eaS%2BBQ%2B6vAkpLY%2FJ%2FjlLAPfRkYwCQ3meWTtaDJwIgIFdR5cIHeaQU8L5gp%2Bj6YCeuH387j0r8RIFd1%2FanPOIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ZFXu%2BKR6vhY%2BrkircA7WuicYq9nXA7gHm3IJ1sIighijqBcZyJ6%2BrTky2y6nJogSO6PT%2B9gA5b%2FCOcGJDpKGfyqg%2F8zBc7s56GXDwblSqtEMTviLLjrtFEp94mxhGpY34QSenQxmAKnplGQnL4GtkFHHLAGuzVzgvnOPULmVk2Hj0rf4iulkQywr3Z8Y8GwzNLxee4bK584pjFVnXCW5L%2FxnCiZl2uyMd1YDXsEsxWYKt28X3qbhkL%2FxL3%2B%2FAtwZ2%2BLqc%2FvFtix6s52%2FtgEHxdPRdtSf1qlGRC36%2Ft6npXPBPGZgAUoz%2FrLL8COjIkyEP8L4Rb%2Fqekh8Fu8TeaE7w5gz4Kb3aGZiyYyDBSwZWPtOXoJuaIWuAwIJc6ei0siSfsZvUScFfXUDOpxrWIIIZAy4sDRgbrRPcDfFlvvu6nNNViqi%2F9y0LPcPee8SogeY3cDUHjaUvJfepnuyewj2WgqAl8gsZgFDWH5m5TNezesyVAkEkLvsRSy%2FqEyyi8yq50hEMtEpBw6TGmb6XRTUXQ%2FEMt4KmIOstjAnmFAkxxlGhuRIF0NV%2BqOdjyBKQvA1YTe6JUUT3HhELtAwWadu5olK0H0luWYRwCTffP1ESjRmVIMdCxKcnuoR7x4NEDW1pHyLouBF04IYNMLv0iMMGOqUBZG5OLzW8n3rbq%2BRSiStnitUfuB4mEFRrRZ0YjB9SL2xHg1WYdCNOySdv%2Bb6d%2F8z0UKY83F2M93BftLERD4LHhc7pXoJ5z2EnLzZ6G8KhubCs%2B6L4MxGhZqyYuXAjhCTMLcJ6ajM96G4V%2BH82YzDetb8z7tLgUSTqEbvo%2BbF4rdhhtjJKGQwP1Z5IHrF5Rljl08W%2Bs20Czmj4nRb1MwgVUGW7OvMl&X-Amz-Signature=0776fb8130b73a5d2336e9c2ac8f625bee5310c8591115f8430d2a361a451099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3JDYB2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokF2eaS%2BBQ%2B6vAkpLY%2FJ%2FjlLAPfRkYwCQ3meWTtaDJwIgIFdR5cIHeaQU8L5gp%2Bj6YCeuH387j0r8RIFd1%2FanPOIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ZFXu%2BKR6vhY%2BrkircA7WuicYq9nXA7gHm3IJ1sIighijqBcZyJ6%2BrTky2y6nJogSO6PT%2B9gA5b%2FCOcGJDpKGfyqg%2F8zBc7s56GXDwblSqtEMTviLLjrtFEp94mxhGpY34QSenQxmAKnplGQnL4GtkFHHLAGuzVzgvnOPULmVk2Hj0rf4iulkQywr3Z8Y8GwzNLxee4bK584pjFVnXCW5L%2FxnCiZl2uyMd1YDXsEsxWYKt28X3qbhkL%2FxL3%2B%2FAtwZ2%2BLqc%2FvFtix6s52%2FtgEHxdPRdtSf1qlGRC36%2Ft6npXPBPGZgAUoz%2FrLL8COjIkyEP8L4Rb%2Fqekh8Fu8TeaE7w5gz4Kb3aGZiyYyDBSwZWPtOXoJuaIWuAwIJc6ei0siSfsZvUScFfXUDOpxrWIIIZAy4sDRgbrRPcDfFlvvu6nNNViqi%2F9y0LPcPee8SogeY3cDUHjaUvJfepnuyewj2WgqAl8gsZgFDWH5m5TNezesyVAkEkLvsRSy%2FqEyyi8yq50hEMtEpBw6TGmb6XRTUXQ%2FEMt4KmIOstjAnmFAkxxlGhuRIF0NV%2BqOdjyBKQvA1YTe6JUUT3HhELtAwWadu5olK0H0luWYRwCTffP1ESjRmVIMdCxKcnuoR7x4NEDW1pHyLouBF04IYNMLv0iMMGOqUBZG5OLzW8n3rbq%2BRSiStnitUfuB4mEFRrRZ0YjB9SL2xHg1WYdCNOySdv%2Bb6d%2F8z0UKY83F2M93BftLERD4LHhc7pXoJ5z2EnLzZ6G8KhubCs%2B6L4MxGhZqyYuXAjhCTMLcJ6ajM96G4V%2BH82YzDetb8z7tLgUSTqEbvo%2BbF4rdhhtjJKGQwP1Z5IHrF5Rljl08W%2Bs20Czmj4nRb1MwgVUGW7OvMl&X-Amz-Signature=e72c2ddca298fdda725b4b3103f02b0a274026c9a215dc659031fb93dacb8726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3JDYB2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokF2eaS%2BBQ%2B6vAkpLY%2FJ%2FjlLAPfRkYwCQ3meWTtaDJwIgIFdR5cIHeaQU8L5gp%2Bj6YCeuH387j0r8RIFd1%2FanPOIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ZFXu%2BKR6vhY%2BrkircA7WuicYq9nXA7gHm3IJ1sIighijqBcZyJ6%2BrTky2y6nJogSO6PT%2B9gA5b%2FCOcGJDpKGfyqg%2F8zBc7s56GXDwblSqtEMTviLLjrtFEp94mxhGpY34QSenQxmAKnplGQnL4GtkFHHLAGuzVzgvnOPULmVk2Hj0rf4iulkQywr3Z8Y8GwzNLxee4bK584pjFVnXCW5L%2FxnCiZl2uyMd1YDXsEsxWYKt28X3qbhkL%2FxL3%2B%2FAtwZ2%2BLqc%2FvFtix6s52%2FtgEHxdPRdtSf1qlGRC36%2Ft6npXPBPGZgAUoz%2FrLL8COjIkyEP8L4Rb%2Fqekh8Fu8TeaE7w5gz4Kb3aGZiyYyDBSwZWPtOXoJuaIWuAwIJc6ei0siSfsZvUScFfXUDOpxrWIIIZAy4sDRgbrRPcDfFlvvu6nNNViqi%2F9y0LPcPee8SogeY3cDUHjaUvJfepnuyewj2WgqAl8gsZgFDWH5m5TNezesyVAkEkLvsRSy%2FqEyyi8yq50hEMtEpBw6TGmb6XRTUXQ%2FEMt4KmIOstjAnmFAkxxlGhuRIF0NV%2BqOdjyBKQvA1YTe6JUUT3HhELtAwWadu5olK0H0luWYRwCTffP1ESjRmVIMdCxKcnuoR7x4NEDW1pHyLouBF04IYNMLv0iMMGOqUBZG5OLzW8n3rbq%2BRSiStnitUfuB4mEFRrRZ0YjB9SL2xHg1WYdCNOySdv%2Bb6d%2F8z0UKY83F2M93BftLERD4LHhc7pXoJ5z2EnLzZ6G8KhubCs%2B6L4MxGhZqyYuXAjhCTMLcJ6ajM96G4V%2BH82YzDetb8z7tLgUSTqEbvo%2BbF4rdhhtjJKGQwP1Z5IHrF5Rljl08W%2Bs20Czmj4nRb1MwgVUGW7OvMl&X-Amz-Signature=d6b080eb06888f47298bd29a144cc7bec5196427ff6a5e5bf079e36394b06878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3JDYB2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokF2eaS%2BBQ%2B6vAkpLY%2FJ%2FjlLAPfRkYwCQ3meWTtaDJwIgIFdR5cIHeaQU8L5gp%2Bj6YCeuH387j0r8RIFd1%2FanPOIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ZFXu%2BKR6vhY%2BrkircA7WuicYq9nXA7gHm3IJ1sIighijqBcZyJ6%2BrTky2y6nJogSO6PT%2B9gA5b%2FCOcGJDpKGfyqg%2F8zBc7s56GXDwblSqtEMTviLLjrtFEp94mxhGpY34QSenQxmAKnplGQnL4GtkFHHLAGuzVzgvnOPULmVk2Hj0rf4iulkQywr3Z8Y8GwzNLxee4bK584pjFVnXCW5L%2FxnCiZl2uyMd1YDXsEsxWYKt28X3qbhkL%2FxL3%2B%2FAtwZ2%2BLqc%2FvFtix6s52%2FtgEHxdPRdtSf1qlGRC36%2Ft6npXPBPGZgAUoz%2FrLL8COjIkyEP8L4Rb%2Fqekh8Fu8TeaE7w5gz4Kb3aGZiyYyDBSwZWPtOXoJuaIWuAwIJc6ei0siSfsZvUScFfXUDOpxrWIIIZAy4sDRgbrRPcDfFlvvu6nNNViqi%2F9y0LPcPee8SogeY3cDUHjaUvJfepnuyewj2WgqAl8gsZgFDWH5m5TNezesyVAkEkLvsRSy%2FqEyyi8yq50hEMtEpBw6TGmb6XRTUXQ%2FEMt4KmIOstjAnmFAkxxlGhuRIF0NV%2BqOdjyBKQvA1YTe6JUUT3HhELtAwWadu5olK0H0luWYRwCTffP1ESjRmVIMdCxKcnuoR7x4NEDW1pHyLouBF04IYNMLv0iMMGOqUBZG5OLzW8n3rbq%2BRSiStnitUfuB4mEFRrRZ0YjB9SL2xHg1WYdCNOySdv%2Bb6d%2F8z0UKY83F2M93BftLERD4LHhc7pXoJ5z2EnLzZ6G8KhubCs%2B6L4MxGhZqyYuXAjhCTMLcJ6ajM96G4V%2BH82YzDetb8z7tLgUSTqEbvo%2BbF4rdhhtjJKGQwP1Z5IHrF5Rljl08W%2Bs20Czmj4nRb1MwgVUGW7OvMl&X-Amz-Signature=466420af642786ec645dbbb57bedac60ab0464f5818bf0a622f0442453cc7f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3JDYB2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokF2eaS%2BBQ%2B6vAkpLY%2FJ%2FjlLAPfRkYwCQ3meWTtaDJwIgIFdR5cIHeaQU8L5gp%2Bj6YCeuH387j0r8RIFd1%2FanPOIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ZFXu%2BKR6vhY%2BrkircA7WuicYq9nXA7gHm3IJ1sIighijqBcZyJ6%2BrTky2y6nJogSO6PT%2B9gA5b%2FCOcGJDpKGfyqg%2F8zBc7s56GXDwblSqtEMTviLLjrtFEp94mxhGpY34QSenQxmAKnplGQnL4GtkFHHLAGuzVzgvnOPULmVk2Hj0rf4iulkQywr3Z8Y8GwzNLxee4bK584pjFVnXCW5L%2FxnCiZl2uyMd1YDXsEsxWYKt28X3qbhkL%2FxL3%2B%2FAtwZ2%2BLqc%2FvFtix6s52%2FtgEHxdPRdtSf1qlGRC36%2Ft6npXPBPGZgAUoz%2FrLL8COjIkyEP8L4Rb%2Fqekh8Fu8TeaE7w5gz4Kb3aGZiyYyDBSwZWPtOXoJuaIWuAwIJc6ei0siSfsZvUScFfXUDOpxrWIIIZAy4sDRgbrRPcDfFlvvu6nNNViqi%2F9y0LPcPee8SogeY3cDUHjaUvJfepnuyewj2WgqAl8gsZgFDWH5m5TNezesyVAkEkLvsRSy%2FqEyyi8yq50hEMtEpBw6TGmb6XRTUXQ%2FEMt4KmIOstjAnmFAkxxlGhuRIF0NV%2BqOdjyBKQvA1YTe6JUUT3HhELtAwWadu5olK0H0luWYRwCTffP1ESjRmVIMdCxKcnuoR7x4NEDW1pHyLouBF04IYNMLv0iMMGOqUBZG5OLzW8n3rbq%2BRSiStnitUfuB4mEFRrRZ0YjB9SL2xHg1WYdCNOySdv%2Bb6d%2F8z0UKY83F2M93BftLERD4LHhc7pXoJ5z2EnLzZ6G8KhubCs%2B6L4MxGhZqyYuXAjhCTMLcJ6ajM96G4V%2BH82YzDetb8z7tLgUSTqEbvo%2BbF4rdhhtjJKGQwP1Z5IHrF5Rljl08W%2Bs20Czmj4nRb1MwgVUGW7OvMl&X-Amz-Signature=b93cca150e1046d63e4064e97572a6b808a99d5658fc1e0d09014ab58f293794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3JDYB2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokF2eaS%2BBQ%2B6vAkpLY%2FJ%2FjlLAPfRkYwCQ3meWTtaDJwIgIFdR5cIHeaQU8L5gp%2Bj6YCeuH387j0r8RIFd1%2FanPOIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ZFXu%2BKR6vhY%2BrkircA7WuicYq9nXA7gHm3IJ1sIighijqBcZyJ6%2BrTky2y6nJogSO6PT%2B9gA5b%2FCOcGJDpKGfyqg%2F8zBc7s56GXDwblSqtEMTviLLjrtFEp94mxhGpY34QSenQxmAKnplGQnL4GtkFHHLAGuzVzgvnOPULmVk2Hj0rf4iulkQywr3Z8Y8GwzNLxee4bK584pjFVnXCW5L%2FxnCiZl2uyMd1YDXsEsxWYKt28X3qbhkL%2FxL3%2B%2FAtwZ2%2BLqc%2FvFtix6s52%2FtgEHxdPRdtSf1qlGRC36%2Ft6npXPBPGZgAUoz%2FrLL8COjIkyEP8L4Rb%2Fqekh8Fu8TeaE7w5gz4Kb3aGZiyYyDBSwZWPtOXoJuaIWuAwIJc6ei0siSfsZvUScFfXUDOpxrWIIIZAy4sDRgbrRPcDfFlvvu6nNNViqi%2F9y0LPcPee8SogeY3cDUHjaUvJfepnuyewj2WgqAl8gsZgFDWH5m5TNezesyVAkEkLvsRSy%2FqEyyi8yq50hEMtEpBw6TGmb6XRTUXQ%2FEMt4KmIOstjAnmFAkxxlGhuRIF0NV%2BqOdjyBKQvA1YTe6JUUT3HhELtAwWadu5olK0H0luWYRwCTffP1ESjRmVIMdCxKcnuoR7x4NEDW1pHyLouBF04IYNMLv0iMMGOqUBZG5OLzW8n3rbq%2BRSiStnitUfuB4mEFRrRZ0YjB9SL2xHg1WYdCNOySdv%2Bb6d%2F8z0UKY83F2M93BftLERD4LHhc7pXoJ5z2EnLzZ6G8KhubCs%2B6L4MxGhZqyYuXAjhCTMLcJ6ajM96G4V%2BH82YzDetb8z7tLgUSTqEbvo%2BbF4rdhhtjJKGQwP1Z5IHrF5Rljl08W%2Bs20Czmj4nRb1MwgVUGW7OvMl&X-Amz-Signature=f881844d7418a4daae723ec18678138d5b6496580f12afca68b3e3ac7528f1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
