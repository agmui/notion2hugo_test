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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7GVLH7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uwdMh20cNDdqhk3TfHsV7%2FmLtOJP5aHtCen0gcuARwIhAJLnmx6Ypjzpvst2XY8lH745bWUOoSrJ%2FJn7CG3RMyUcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwia6fMbZni7iCHPF0q3AMpzZHgYfpe3zAW4dN9sXbcekbrQ1EC%2FU8QdFxrvIoHFqihLwBeE4N0RL6GE0LEMf2%2FU5%2Fxz%2BNWH0x8ob7Az4nZ1rG%2FBWA57EIYTnmi8iY%2B3zF97ePxxmO%2FJYWIpgOGLnpH4eVHviP8IcG15Irx1qcv18q6nGAAXv%2BbrhkaoW5anbV9p0he69jUQ1EuHhpuU5GhpjV6IR572VJNeZPryL%2Fs9CHhBY0khgxZfJxOU9EvKm5akDyHFYyRikOJSIWlLoxH2yeAv%2BBMToDdosuSmZEsgRNWvl8eLvXvjSpsYJLIiYUd9XXoGPuWC%2BVFTL5nRpFtkU6r%2Frut7vX2s5YNYBiQ8NPKIyG%2FSzVyoJN2uiCy9P5%2BuhQyHXTGfHdmDPql7XA4LIkO32njwX8JvDmnav8vv8xXLlRV26zsuBobKgGtmriFKk6u2eSiMnYIRqK44tkf%2Bsm62dB2R45sQXmn0uk%2FzjtvGdIzUgfauEE5sSlBI6dNZ9LREiO0V4Ki9tW6WQf7QoWPPUh4kvJC2b1Q6cbR1VFZ%2BXkrNrVDAqA5HkWb2J3FK%2FZ0FVsb38%2FtjwfEU51jGsrl7Uy1pI4%2F50tGumhESbFtQ3PoRYw4Sv3CG4ksJk3egdUAT3CyBfYppjDRpdS%2BBjqkAak5kib0ZEeFX7g5CTOT6sDTh%2BWZ%2BxwvX8hS3dBnt0TEPRFW%2FY%2Bd7M4o31OluToGRlDO77LMDt8cDzw21K%2FeSrzZjKM%2FeKVR8FqJzc%2FaRC0L9rBq7c9GoWyAzaUs%2FRSC7SlAuFvBhpxQ%2B3jRPLgJDMBt0SuYV15zjdppRZeDhShTWrsK%2FO8I%2FJGBkbvRcA5bSYn%2FiO7q2n0rjTOfhyX%2F3C56o%2Fih&X-Amz-Signature=5869ca50ec021cd16aa761abda59c0510bccd5694b6ab73c8ea4a692303c16e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7GVLH7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uwdMh20cNDdqhk3TfHsV7%2FmLtOJP5aHtCen0gcuARwIhAJLnmx6Ypjzpvst2XY8lH745bWUOoSrJ%2FJn7CG3RMyUcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwia6fMbZni7iCHPF0q3AMpzZHgYfpe3zAW4dN9sXbcekbrQ1EC%2FU8QdFxrvIoHFqihLwBeE4N0RL6GE0LEMf2%2FU5%2Fxz%2BNWH0x8ob7Az4nZ1rG%2FBWA57EIYTnmi8iY%2B3zF97ePxxmO%2FJYWIpgOGLnpH4eVHviP8IcG15Irx1qcv18q6nGAAXv%2BbrhkaoW5anbV9p0he69jUQ1EuHhpuU5GhpjV6IR572VJNeZPryL%2Fs9CHhBY0khgxZfJxOU9EvKm5akDyHFYyRikOJSIWlLoxH2yeAv%2BBMToDdosuSmZEsgRNWvl8eLvXvjSpsYJLIiYUd9XXoGPuWC%2BVFTL5nRpFtkU6r%2Frut7vX2s5YNYBiQ8NPKIyG%2FSzVyoJN2uiCy9P5%2BuhQyHXTGfHdmDPql7XA4LIkO32njwX8JvDmnav8vv8xXLlRV26zsuBobKgGtmriFKk6u2eSiMnYIRqK44tkf%2Bsm62dB2R45sQXmn0uk%2FzjtvGdIzUgfauEE5sSlBI6dNZ9LREiO0V4Ki9tW6WQf7QoWPPUh4kvJC2b1Q6cbR1VFZ%2BXkrNrVDAqA5HkWb2J3FK%2FZ0FVsb38%2FtjwfEU51jGsrl7Uy1pI4%2F50tGumhESbFtQ3PoRYw4Sv3CG4ksJk3egdUAT3CyBfYppjDRpdS%2BBjqkAak5kib0ZEeFX7g5CTOT6sDTh%2BWZ%2BxwvX8hS3dBnt0TEPRFW%2FY%2Bd7M4o31OluToGRlDO77LMDt8cDzw21K%2FeSrzZjKM%2FeKVR8FqJzc%2FaRC0L9rBq7c9GoWyAzaUs%2FRSC7SlAuFvBhpxQ%2B3jRPLgJDMBt0SuYV15zjdppRZeDhShTWrsK%2FO8I%2FJGBkbvRcA5bSYn%2FiO7q2n0rjTOfhyX%2F3C56o%2Fih&X-Amz-Signature=93700852441b3ae0dc9307eb5682a068e2dc6c9f0df4b40bbc0d00342594d5df&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7GVLH7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uwdMh20cNDdqhk3TfHsV7%2FmLtOJP5aHtCen0gcuARwIhAJLnmx6Ypjzpvst2XY8lH745bWUOoSrJ%2FJn7CG3RMyUcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwia6fMbZni7iCHPF0q3AMpzZHgYfpe3zAW4dN9sXbcekbrQ1EC%2FU8QdFxrvIoHFqihLwBeE4N0RL6GE0LEMf2%2FU5%2Fxz%2BNWH0x8ob7Az4nZ1rG%2FBWA57EIYTnmi8iY%2B3zF97ePxxmO%2FJYWIpgOGLnpH4eVHviP8IcG15Irx1qcv18q6nGAAXv%2BbrhkaoW5anbV9p0he69jUQ1EuHhpuU5GhpjV6IR572VJNeZPryL%2Fs9CHhBY0khgxZfJxOU9EvKm5akDyHFYyRikOJSIWlLoxH2yeAv%2BBMToDdosuSmZEsgRNWvl8eLvXvjSpsYJLIiYUd9XXoGPuWC%2BVFTL5nRpFtkU6r%2Frut7vX2s5YNYBiQ8NPKIyG%2FSzVyoJN2uiCy9P5%2BuhQyHXTGfHdmDPql7XA4LIkO32njwX8JvDmnav8vv8xXLlRV26zsuBobKgGtmriFKk6u2eSiMnYIRqK44tkf%2Bsm62dB2R45sQXmn0uk%2FzjtvGdIzUgfauEE5sSlBI6dNZ9LREiO0V4Ki9tW6WQf7QoWPPUh4kvJC2b1Q6cbR1VFZ%2BXkrNrVDAqA5HkWb2J3FK%2FZ0FVsb38%2FtjwfEU51jGsrl7Uy1pI4%2F50tGumhESbFtQ3PoRYw4Sv3CG4ksJk3egdUAT3CyBfYppjDRpdS%2BBjqkAak5kib0ZEeFX7g5CTOT6sDTh%2BWZ%2BxwvX8hS3dBnt0TEPRFW%2FY%2Bd7M4o31OluToGRlDO77LMDt8cDzw21K%2FeSrzZjKM%2FeKVR8FqJzc%2FaRC0L9rBq7c9GoWyAzaUs%2FRSC7SlAuFvBhpxQ%2B3jRPLgJDMBt0SuYV15zjdppRZeDhShTWrsK%2FO8I%2FJGBkbvRcA5bSYn%2FiO7q2n0rjTOfhyX%2F3C56o%2Fih&X-Amz-Signature=902a5dd430446ff3793d8279a39384fc05946bbba0e1b34c6a4c92e99b542de3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7GVLH7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uwdMh20cNDdqhk3TfHsV7%2FmLtOJP5aHtCen0gcuARwIhAJLnmx6Ypjzpvst2XY8lH745bWUOoSrJ%2FJn7CG3RMyUcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwia6fMbZni7iCHPF0q3AMpzZHgYfpe3zAW4dN9sXbcekbrQ1EC%2FU8QdFxrvIoHFqihLwBeE4N0RL6GE0LEMf2%2FU5%2Fxz%2BNWH0x8ob7Az4nZ1rG%2FBWA57EIYTnmi8iY%2B3zF97ePxxmO%2FJYWIpgOGLnpH4eVHviP8IcG15Irx1qcv18q6nGAAXv%2BbrhkaoW5anbV9p0he69jUQ1EuHhpuU5GhpjV6IR572VJNeZPryL%2Fs9CHhBY0khgxZfJxOU9EvKm5akDyHFYyRikOJSIWlLoxH2yeAv%2BBMToDdosuSmZEsgRNWvl8eLvXvjSpsYJLIiYUd9XXoGPuWC%2BVFTL5nRpFtkU6r%2Frut7vX2s5YNYBiQ8NPKIyG%2FSzVyoJN2uiCy9P5%2BuhQyHXTGfHdmDPql7XA4LIkO32njwX8JvDmnav8vv8xXLlRV26zsuBobKgGtmriFKk6u2eSiMnYIRqK44tkf%2Bsm62dB2R45sQXmn0uk%2FzjtvGdIzUgfauEE5sSlBI6dNZ9LREiO0V4Ki9tW6WQf7QoWPPUh4kvJC2b1Q6cbR1VFZ%2BXkrNrVDAqA5HkWb2J3FK%2FZ0FVsb38%2FtjwfEU51jGsrl7Uy1pI4%2F50tGumhESbFtQ3PoRYw4Sv3CG4ksJk3egdUAT3CyBfYppjDRpdS%2BBjqkAak5kib0ZEeFX7g5CTOT6sDTh%2BWZ%2BxwvX8hS3dBnt0TEPRFW%2FY%2Bd7M4o31OluToGRlDO77LMDt8cDzw21K%2FeSrzZjKM%2FeKVR8FqJzc%2FaRC0L9rBq7c9GoWyAzaUs%2FRSC7SlAuFvBhpxQ%2B3jRPLgJDMBt0SuYV15zjdppRZeDhShTWrsK%2FO8I%2FJGBkbvRcA5bSYn%2FiO7q2n0rjTOfhyX%2F3C56o%2Fih&X-Amz-Signature=23f5140d06f4a1adbfd7797e4431d102ad2177e53510455c5448f78d76d39849&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7GVLH7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uwdMh20cNDdqhk3TfHsV7%2FmLtOJP5aHtCen0gcuARwIhAJLnmx6Ypjzpvst2XY8lH745bWUOoSrJ%2FJn7CG3RMyUcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwia6fMbZni7iCHPF0q3AMpzZHgYfpe3zAW4dN9sXbcekbrQ1EC%2FU8QdFxrvIoHFqihLwBeE4N0RL6GE0LEMf2%2FU5%2Fxz%2BNWH0x8ob7Az4nZ1rG%2FBWA57EIYTnmi8iY%2B3zF97ePxxmO%2FJYWIpgOGLnpH4eVHviP8IcG15Irx1qcv18q6nGAAXv%2BbrhkaoW5anbV9p0he69jUQ1EuHhpuU5GhpjV6IR572VJNeZPryL%2Fs9CHhBY0khgxZfJxOU9EvKm5akDyHFYyRikOJSIWlLoxH2yeAv%2BBMToDdosuSmZEsgRNWvl8eLvXvjSpsYJLIiYUd9XXoGPuWC%2BVFTL5nRpFtkU6r%2Frut7vX2s5YNYBiQ8NPKIyG%2FSzVyoJN2uiCy9P5%2BuhQyHXTGfHdmDPql7XA4LIkO32njwX8JvDmnav8vv8xXLlRV26zsuBobKgGtmriFKk6u2eSiMnYIRqK44tkf%2Bsm62dB2R45sQXmn0uk%2FzjtvGdIzUgfauEE5sSlBI6dNZ9LREiO0V4Ki9tW6WQf7QoWPPUh4kvJC2b1Q6cbR1VFZ%2BXkrNrVDAqA5HkWb2J3FK%2FZ0FVsb38%2FtjwfEU51jGsrl7Uy1pI4%2F50tGumhESbFtQ3PoRYw4Sv3CG4ksJk3egdUAT3CyBfYppjDRpdS%2BBjqkAak5kib0ZEeFX7g5CTOT6sDTh%2BWZ%2BxwvX8hS3dBnt0TEPRFW%2FY%2Bd7M4o31OluToGRlDO77LMDt8cDzw21K%2FeSrzZjKM%2FeKVR8FqJzc%2FaRC0L9rBq7c9GoWyAzaUs%2FRSC7SlAuFvBhpxQ%2B3jRPLgJDMBt0SuYV15zjdppRZeDhShTWrsK%2FO8I%2FJGBkbvRcA5bSYn%2FiO7q2n0rjTOfhyX%2F3C56o%2Fih&X-Amz-Signature=e110bd4b0afaff6ef70ae3bd4ab360e1d23bd780e0fd4f02a792727b430968e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7GVLH7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uwdMh20cNDdqhk3TfHsV7%2FmLtOJP5aHtCen0gcuARwIhAJLnmx6Ypjzpvst2XY8lH745bWUOoSrJ%2FJn7CG3RMyUcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwia6fMbZni7iCHPF0q3AMpzZHgYfpe3zAW4dN9sXbcekbrQ1EC%2FU8QdFxrvIoHFqihLwBeE4N0RL6GE0LEMf2%2FU5%2Fxz%2BNWH0x8ob7Az4nZ1rG%2FBWA57EIYTnmi8iY%2B3zF97ePxxmO%2FJYWIpgOGLnpH4eVHviP8IcG15Irx1qcv18q6nGAAXv%2BbrhkaoW5anbV9p0he69jUQ1EuHhpuU5GhpjV6IR572VJNeZPryL%2Fs9CHhBY0khgxZfJxOU9EvKm5akDyHFYyRikOJSIWlLoxH2yeAv%2BBMToDdosuSmZEsgRNWvl8eLvXvjSpsYJLIiYUd9XXoGPuWC%2BVFTL5nRpFtkU6r%2Frut7vX2s5YNYBiQ8NPKIyG%2FSzVyoJN2uiCy9P5%2BuhQyHXTGfHdmDPql7XA4LIkO32njwX8JvDmnav8vv8xXLlRV26zsuBobKgGtmriFKk6u2eSiMnYIRqK44tkf%2Bsm62dB2R45sQXmn0uk%2FzjtvGdIzUgfauEE5sSlBI6dNZ9LREiO0V4Ki9tW6WQf7QoWPPUh4kvJC2b1Q6cbR1VFZ%2BXkrNrVDAqA5HkWb2J3FK%2FZ0FVsb38%2FtjwfEU51jGsrl7Uy1pI4%2F50tGumhESbFtQ3PoRYw4Sv3CG4ksJk3egdUAT3CyBfYppjDRpdS%2BBjqkAak5kib0ZEeFX7g5CTOT6sDTh%2BWZ%2BxwvX8hS3dBnt0TEPRFW%2FY%2Bd7M4o31OluToGRlDO77LMDt8cDzw21K%2FeSrzZjKM%2FeKVR8FqJzc%2FaRC0L9rBq7c9GoWyAzaUs%2FRSC7SlAuFvBhpxQ%2B3jRPLgJDMBt0SuYV15zjdppRZeDhShTWrsK%2FO8I%2FJGBkbvRcA5bSYn%2FiO7q2n0rjTOfhyX%2F3C56o%2Fih&X-Amz-Signature=c47ee8b6e9d80bd7d17555a96247e3040c7f97e6c6c18e0c26f5df3def5dcac2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7GVLH7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uwdMh20cNDdqhk3TfHsV7%2FmLtOJP5aHtCen0gcuARwIhAJLnmx6Ypjzpvst2XY8lH745bWUOoSrJ%2FJn7CG3RMyUcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwia6fMbZni7iCHPF0q3AMpzZHgYfpe3zAW4dN9sXbcekbrQ1EC%2FU8QdFxrvIoHFqihLwBeE4N0RL6GE0LEMf2%2FU5%2Fxz%2BNWH0x8ob7Az4nZ1rG%2FBWA57EIYTnmi8iY%2B3zF97ePxxmO%2FJYWIpgOGLnpH4eVHviP8IcG15Irx1qcv18q6nGAAXv%2BbrhkaoW5anbV9p0he69jUQ1EuHhpuU5GhpjV6IR572VJNeZPryL%2Fs9CHhBY0khgxZfJxOU9EvKm5akDyHFYyRikOJSIWlLoxH2yeAv%2BBMToDdosuSmZEsgRNWvl8eLvXvjSpsYJLIiYUd9XXoGPuWC%2BVFTL5nRpFtkU6r%2Frut7vX2s5YNYBiQ8NPKIyG%2FSzVyoJN2uiCy9P5%2BuhQyHXTGfHdmDPql7XA4LIkO32njwX8JvDmnav8vv8xXLlRV26zsuBobKgGtmriFKk6u2eSiMnYIRqK44tkf%2Bsm62dB2R45sQXmn0uk%2FzjtvGdIzUgfauEE5sSlBI6dNZ9LREiO0V4Ki9tW6WQf7QoWPPUh4kvJC2b1Q6cbR1VFZ%2BXkrNrVDAqA5HkWb2J3FK%2FZ0FVsb38%2FtjwfEU51jGsrl7Uy1pI4%2F50tGumhESbFtQ3PoRYw4Sv3CG4ksJk3egdUAT3CyBfYppjDRpdS%2BBjqkAak5kib0ZEeFX7g5CTOT6sDTh%2BWZ%2BxwvX8hS3dBnt0TEPRFW%2FY%2Bd7M4o31OluToGRlDO77LMDt8cDzw21K%2FeSrzZjKM%2FeKVR8FqJzc%2FaRC0L9rBq7c9GoWyAzaUs%2FRSC7SlAuFvBhpxQ%2B3jRPLgJDMBt0SuYV15zjdppRZeDhShTWrsK%2FO8I%2FJGBkbvRcA5bSYn%2FiO7q2n0rjTOfhyX%2F3C56o%2Fih&X-Amz-Signature=b5452c67116703e767a98408d1d8c0a44ab00e0813d1ae9ebdda0ac56bbe8fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7GVLH7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uwdMh20cNDdqhk3TfHsV7%2FmLtOJP5aHtCen0gcuARwIhAJLnmx6Ypjzpvst2XY8lH745bWUOoSrJ%2FJn7CG3RMyUcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwia6fMbZni7iCHPF0q3AMpzZHgYfpe3zAW4dN9sXbcekbrQ1EC%2FU8QdFxrvIoHFqihLwBeE4N0RL6GE0LEMf2%2FU5%2Fxz%2BNWH0x8ob7Az4nZ1rG%2FBWA57EIYTnmi8iY%2B3zF97ePxxmO%2FJYWIpgOGLnpH4eVHviP8IcG15Irx1qcv18q6nGAAXv%2BbrhkaoW5anbV9p0he69jUQ1EuHhpuU5GhpjV6IR572VJNeZPryL%2Fs9CHhBY0khgxZfJxOU9EvKm5akDyHFYyRikOJSIWlLoxH2yeAv%2BBMToDdosuSmZEsgRNWvl8eLvXvjSpsYJLIiYUd9XXoGPuWC%2BVFTL5nRpFtkU6r%2Frut7vX2s5YNYBiQ8NPKIyG%2FSzVyoJN2uiCy9P5%2BuhQyHXTGfHdmDPql7XA4LIkO32njwX8JvDmnav8vv8xXLlRV26zsuBobKgGtmriFKk6u2eSiMnYIRqK44tkf%2Bsm62dB2R45sQXmn0uk%2FzjtvGdIzUgfauEE5sSlBI6dNZ9LREiO0V4Ki9tW6WQf7QoWPPUh4kvJC2b1Q6cbR1VFZ%2BXkrNrVDAqA5HkWb2J3FK%2FZ0FVsb38%2FtjwfEU51jGsrl7Uy1pI4%2F50tGumhESbFtQ3PoRYw4Sv3CG4ksJk3egdUAT3CyBfYppjDRpdS%2BBjqkAak5kib0ZEeFX7g5CTOT6sDTh%2BWZ%2BxwvX8hS3dBnt0TEPRFW%2FY%2Bd7M4o31OluToGRlDO77LMDt8cDzw21K%2FeSrzZjKM%2FeKVR8FqJzc%2FaRC0L9rBq7c9GoWyAzaUs%2FRSC7SlAuFvBhpxQ%2B3jRPLgJDMBt0SuYV15zjdppRZeDhShTWrsK%2FO8I%2FJGBkbvRcA5bSYn%2FiO7q2n0rjTOfhyX%2F3C56o%2Fih&X-Amz-Signature=2546a86c5caec82e4a86c4e7152ad1d75de90d271a47ac21d25d0a7f72e99950&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
