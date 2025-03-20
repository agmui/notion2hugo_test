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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIXJRIU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGCsS4WfTvGkf9JpKsFM%2Bs6fgli3SS1rl9PBidedAAZmAiEAkL7bz0v1NP7lKTmUtGmsSLlW79MDzDeH0JyE9B%2FAIr8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcsizjKnZTs5E7xAyrcA%2Bowq%2Bh5xkC9gFbtJ7mhtx1Q9FDfOX3OqnEh9U8f2RwFkygsebhLkzw1UcMM4A9fjBv3qa3Q2Dg%2BJt%2BnvRsp%2FR7yBS4q%2Bi8Zui7rWx3YSlOWLckhBsrEWmepZllGNKL4YbjyeYQbT2tvvuz0dRQa18OdjBaTcME2D4pVQTaDZAZtPFFqSP%2BWnGu%2FeKJxp7jrRTCTlI3N6V0T46lLhpHaQxLRD57e79RDqpKaFdxKVm8YxjLjOjUEhRxWTtd2O70mWZz4yEXP8LvvxoRdETElP6ndFXwl%2BBOjVYbDfeJ%2BxhCWdU0kThAwJtCk0abjPeX7%2FrewteQtU8RS1VzDRL5dyK1P%2Bi6E4%2FEapf%2FjfxUA%2FtJ0gYBpen8pXzpXrOB0rinkyrr0XhSPcedUJMWka5Zm4hNQ4iyvuZxnE%2BeHxfuf1XI65nY32QGUmqxYJ2JKMsAfhlY%2FtB6YI%2Fnoiyiu%2BbdtR0syOqwq%2BG55nKUdHYzkk4JFM6QLO9m%2By4TZ9LoQV7Mx%2BVIjS5XM1B6kpZoKIlbyNy7VgecIt%2F%2BHDwCwveTQpMpVoEv%2FD47RHjHDsUbnc8JwyPtBWjPXDNu%2Fmc%2Fl7Sz73nbfcFVtHIFIUZomEMgGa7yixoIfDhPo2ntgb0fOMMnG774GOqUB4IpXJ1CrpUS9450jykGDfNir0O2bAkWjEaedLy3pqeeLG8vgaBNdwL1vecB8DT4hCItU60T%2FIyHeFBfJUdscoV%2B6sB7rnNIzV5qsi9ZZBNwymYUfawFKL2V27NkpY1j%2FjmFF5i6PWQwSLiAhGBYYNcb7%2FlkT8sv%2Bx7i0phnrnwRgl3DPgbySwkaPIxibAD6Hzfl88v%2Fc%2By3hmv44WGAvAFhAStGB&X-Amz-Signature=9753f735fd0b1a7311e168cf074058cbb6c8da70c46eef9bb8b761c7cadb27ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIXJRIU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGCsS4WfTvGkf9JpKsFM%2Bs6fgli3SS1rl9PBidedAAZmAiEAkL7bz0v1NP7lKTmUtGmsSLlW79MDzDeH0JyE9B%2FAIr8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcsizjKnZTs5E7xAyrcA%2Bowq%2Bh5xkC9gFbtJ7mhtx1Q9FDfOX3OqnEh9U8f2RwFkygsebhLkzw1UcMM4A9fjBv3qa3Q2Dg%2BJt%2BnvRsp%2FR7yBS4q%2Bi8Zui7rWx3YSlOWLckhBsrEWmepZllGNKL4YbjyeYQbT2tvvuz0dRQa18OdjBaTcME2D4pVQTaDZAZtPFFqSP%2BWnGu%2FeKJxp7jrRTCTlI3N6V0T46lLhpHaQxLRD57e79RDqpKaFdxKVm8YxjLjOjUEhRxWTtd2O70mWZz4yEXP8LvvxoRdETElP6ndFXwl%2BBOjVYbDfeJ%2BxhCWdU0kThAwJtCk0abjPeX7%2FrewteQtU8RS1VzDRL5dyK1P%2Bi6E4%2FEapf%2FjfxUA%2FtJ0gYBpen8pXzpXrOB0rinkyrr0XhSPcedUJMWka5Zm4hNQ4iyvuZxnE%2BeHxfuf1XI65nY32QGUmqxYJ2JKMsAfhlY%2FtB6YI%2Fnoiyiu%2BbdtR0syOqwq%2BG55nKUdHYzkk4JFM6QLO9m%2By4TZ9LoQV7Mx%2BVIjS5XM1B6kpZoKIlbyNy7VgecIt%2F%2BHDwCwveTQpMpVoEv%2FD47RHjHDsUbnc8JwyPtBWjPXDNu%2Fmc%2Fl7Sz73nbfcFVtHIFIUZomEMgGa7yixoIfDhPo2ntgb0fOMMnG774GOqUB4IpXJ1CrpUS9450jykGDfNir0O2bAkWjEaedLy3pqeeLG8vgaBNdwL1vecB8DT4hCItU60T%2FIyHeFBfJUdscoV%2B6sB7rnNIzV5qsi9ZZBNwymYUfawFKL2V27NkpY1j%2FjmFF5i6PWQwSLiAhGBYYNcb7%2FlkT8sv%2Bx7i0phnrnwRgl3DPgbySwkaPIxibAD6Hzfl88v%2Fc%2By3hmv44WGAvAFhAStGB&X-Amz-Signature=cf25f43f8af77cc24f15ea251041e4832df3d171fa98f14d361d08b10e70d6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIXJRIU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGCsS4WfTvGkf9JpKsFM%2Bs6fgli3SS1rl9PBidedAAZmAiEAkL7bz0v1NP7lKTmUtGmsSLlW79MDzDeH0JyE9B%2FAIr8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcsizjKnZTs5E7xAyrcA%2Bowq%2Bh5xkC9gFbtJ7mhtx1Q9FDfOX3OqnEh9U8f2RwFkygsebhLkzw1UcMM4A9fjBv3qa3Q2Dg%2BJt%2BnvRsp%2FR7yBS4q%2Bi8Zui7rWx3YSlOWLckhBsrEWmepZllGNKL4YbjyeYQbT2tvvuz0dRQa18OdjBaTcME2D4pVQTaDZAZtPFFqSP%2BWnGu%2FeKJxp7jrRTCTlI3N6V0T46lLhpHaQxLRD57e79RDqpKaFdxKVm8YxjLjOjUEhRxWTtd2O70mWZz4yEXP8LvvxoRdETElP6ndFXwl%2BBOjVYbDfeJ%2BxhCWdU0kThAwJtCk0abjPeX7%2FrewteQtU8RS1VzDRL5dyK1P%2Bi6E4%2FEapf%2FjfxUA%2FtJ0gYBpen8pXzpXrOB0rinkyrr0XhSPcedUJMWka5Zm4hNQ4iyvuZxnE%2BeHxfuf1XI65nY32QGUmqxYJ2JKMsAfhlY%2FtB6YI%2Fnoiyiu%2BbdtR0syOqwq%2BG55nKUdHYzkk4JFM6QLO9m%2By4TZ9LoQV7Mx%2BVIjS5XM1B6kpZoKIlbyNy7VgecIt%2F%2BHDwCwveTQpMpVoEv%2FD47RHjHDsUbnc8JwyPtBWjPXDNu%2Fmc%2Fl7Sz73nbfcFVtHIFIUZomEMgGa7yixoIfDhPo2ntgb0fOMMnG774GOqUB4IpXJ1CrpUS9450jykGDfNir0O2bAkWjEaedLy3pqeeLG8vgaBNdwL1vecB8DT4hCItU60T%2FIyHeFBfJUdscoV%2B6sB7rnNIzV5qsi9ZZBNwymYUfawFKL2V27NkpY1j%2FjmFF5i6PWQwSLiAhGBYYNcb7%2FlkT8sv%2Bx7i0phnrnwRgl3DPgbySwkaPIxibAD6Hzfl88v%2Fc%2By3hmv44WGAvAFhAStGB&X-Amz-Signature=07832ff4025b615a68c6e7f2dc780501e08cf75934c0884fde57b4d6b8516e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIXJRIU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGCsS4WfTvGkf9JpKsFM%2Bs6fgli3SS1rl9PBidedAAZmAiEAkL7bz0v1NP7lKTmUtGmsSLlW79MDzDeH0JyE9B%2FAIr8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcsizjKnZTs5E7xAyrcA%2Bowq%2Bh5xkC9gFbtJ7mhtx1Q9FDfOX3OqnEh9U8f2RwFkygsebhLkzw1UcMM4A9fjBv3qa3Q2Dg%2BJt%2BnvRsp%2FR7yBS4q%2Bi8Zui7rWx3YSlOWLckhBsrEWmepZllGNKL4YbjyeYQbT2tvvuz0dRQa18OdjBaTcME2D4pVQTaDZAZtPFFqSP%2BWnGu%2FeKJxp7jrRTCTlI3N6V0T46lLhpHaQxLRD57e79RDqpKaFdxKVm8YxjLjOjUEhRxWTtd2O70mWZz4yEXP8LvvxoRdETElP6ndFXwl%2BBOjVYbDfeJ%2BxhCWdU0kThAwJtCk0abjPeX7%2FrewteQtU8RS1VzDRL5dyK1P%2Bi6E4%2FEapf%2FjfxUA%2FtJ0gYBpen8pXzpXrOB0rinkyrr0XhSPcedUJMWka5Zm4hNQ4iyvuZxnE%2BeHxfuf1XI65nY32QGUmqxYJ2JKMsAfhlY%2FtB6YI%2Fnoiyiu%2BbdtR0syOqwq%2BG55nKUdHYzkk4JFM6QLO9m%2By4TZ9LoQV7Mx%2BVIjS5XM1B6kpZoKIlbyNy7VgecIt%2F%2BHDwCwveTQpMpVoEv%2FD47RHjHDsUbnc8JwyPtBWjPXDNu%2Fmc%2Fl7Sz73nbfcFVtHIFIUZomEMgGa7yixoIfDhPo2ntgb0fOMMnG774GOqUB4IpXJ1CrpUS9450jykGDfNir0O2bAkWjEaedLy3pqeeLG8vgaBNdwL1vecB8DT4hCItU60T%2FIyHeFBfJUdscoV%2B6sB7rnNIzV5qsi9ZZBNwymYUfawFKL2V27NkpY1j%2FjmFF5i6PWQwSLiAhGBYYNcb7%2FlkT8sv%2Bx7i0phnrnwRgl3DPgbySwkaPIxibAD6Hzfl88v%2Fc%2By3hmv44WGAvAFhAStGB&X-Amz-Signature=4c56ce13cd67c88731b866f8e5ec3c176eb48e91143cc77058f62c2e39538555&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIXJRIU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGCsS4WfTvGkf9JpKsFM%2Bs6fgli3SS1rl9PBidedAAZmAiEAkL7bz0v1NP7lKTmUtGmsSLlW79MDzDeH0JyE9B%2FAIr8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcsizjKnZTs5E7xAyrcA%2Bowq%2Bh5xkC9gFbtJ7mhtx1Q9FDfOX3OqnEh9U8f2RwFkygsebhLkzw1UcMM4A9fjBv3qa3Q2Dg%2BJt%2BnvRsp%2FR7yBS4q%2Bi8Zui7rWx3YSlOWLckhBsrEWmepZllGNKL4YbjyeYQbT2tvvuz0dRQa18OdjBaTcME2D4pVQTaDZAZtPFFqSP%2BWnGu%2FeKJxp7jrRTCTlI3N6V0T46lLhpHaQxLRD57e79RDqpKaFdxKVm8YxjLjOjUEhRxWTtd2O70mWZz4yEXP8LvvxoRdETElP6ndFXwl%2BBOjVYbDfeJ%2BxhCWdU0kThAwJtCk0abjPeX7%2FrewteQtU8RS1VzDRL5dyK1P%2Bi6E4%2FEapf%2FjfxUA%2FtJ0gYBpen8pXzpXrOB0rinkyrr0XhSPcedUJMWka5Zm4hNQ4iyvuZxnE%2BeHxfuf1XI65nY32QGUmqxYJ2JKMsAfhlY%2FtB6YI%2Fnoiyiu%2BbdtR0syOqwq%2BG55nKUdHYzkk4JFM6QLO9m%2By4TZ9LoQV7Mx%2BVIjS5XM1B6kpZoKIlbyNy7VgecIt%2F%2BHDwCwveTQpMpVoEv%2FD47RHjHDsUbnc8JwyPtBWjPXDNu%2Fmc%2Fl7Sz73nbfcFVtHIFIUZomEMgGa7yixoIfDhPo2ntgb0fOMMnG774GOqUB4IpXJ1CrpUS9450jykGDfNir0O2bAkWjEaedLy3pqeeLG8vgaBNdwL1vecB8DT4hCItU60T%2FIyHeFBfJUdscoV%2B6sB7rnNIzV5qsi9ZZBNwymYUfawFKL2V27NkpY1j%2FjmFF5i6PWQwSLiAhGBYYNcb7%2FlkT8sv%2Bx7i0phnrnwRgl3DPgbySwkaPIxibAD6Hzfl88v%2Fc%2By3hmv44WGAvAFhAStGB&X-Amz-Signature=3c50b978c9a33161c063957f91d8f6fc804b8cce35fb2a7f46e2e1d43bb2c2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIXJRIU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGCsS4WfTvGkf9JpKsFM%2Bs6fgli3SS1rl9PBidedAAZmAiEAkL7bz0v1NP7lKTmUtGmsSLlW79MDzDeH0JyE9B%2FAIr8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcsizjKnZTs5E7xAyrcA%2Bowq%2Bh5xkC9gFbtJ7mhtx1Q9FDfOX3OqnEh9U8f2RwFkygsebhLkzw1UcMM4A9fjBv3qa3Q2Dg%2BJt%2BnvRsp%2FR7yBS4q%2Bi8Zui7rWx3YSlOWLckhBsrEWmepZllGNKL4YbjyeYQbT2tvvuz0dRQa18OdjBaTcME2D4pVQTaDZAZtPFFqSP%2BWnGu%2FeKJxp7jrRTCTlI3N6V0T46lLhpHaQxLRD57e79RDqpKaFdxKVm8YxjLjOjUEhRxWTtd2O70mWZz4yEXP8LvvxoRdETElP6ndFXwl%2BBOjVYbDfeJ%2BxhCWdU0kThAwJtCk0abjPeX7%2FrewteQtU8RS1VzDRL5dyK1P%2Bi6E4%2FEapf%2FjfxUA%2FtJ0gYBpen8pXzpXrOB0rinkyrr0XhSPcedUJMWka5Zm4hNQ4iyvuZxnE%2BeHxfuf1XI65nY32QGUmqxYJ2JKMsAfhlY%2FtB6YI%2Fnoiyiu%2BbdtR0syOqwq%2BG55nKUdHYzkk4JFM6QLO9m%2By4TZ9LoQV7Mx%2BVIjS5XM1B6kpZoKIlbyNy7VgecIt%2F%2BHDwCwveTQpMpVoEv%2FD47RHjHDsUbnc8JwyPtBWjPXDNu%2Fmc%2Fl7Sz73nbfcFVtHIFIUZomEMgGa7yixoIfDhPo2ntgb0fOMMnG774GOqUB4IpXJ1CrpUS9450jykGDfNir0O2bAkWjEaedLy3pqeeLG8vgaBNdwL1vecB8DT4hCItU60T%2FIyHeFBfJUdscoV%2B6sB7rnNIzV5qsi9ZZBNwymYUfawFKL2V27NkpY1j%2FjmFF5i6PWQwSLiAhGBYYNcb7%2FlkT8sv%2Bx7i0phnrnwRgl3DPgbySwkaPIxibAD6Hzfl88v%2Fc%2By3hmv44WGAvAFhAStGB&X-Amz-Signature=d25297a5ff73e48853384ff18d9cfc37112526fb8784aedb88e935f555db6a66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIXJRIU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGCsS4WfTvGkf9JpKsFM%2Bs6fgli3SS1rl9PBidedAAZmAiEAkL7bz0v1NP7lKTmUtGmsSLlW79MDzDeH0JyE9B%2FAIr8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcsizjKnZTs5E7xAyrcA%2Bowq%2Bh5xkC9gFbtJ7mhtx1Q9FDfOX3OqnEh9U8f2RwFkygsebhLkzw1UcMM4A9fjBv3qa3Q2Dg%2BJt%2BnvRsp%2FR7yBS4q%2Bi8Zui7rWx3YSlOWLckhBsrEWmepZllGNKL4YbjyeYQbT2tvvuz0dRQa18OdjBaTcME2D4pVQTaDZAZtPFFqSP%2BWnGu%2FeKJxp7jrRTCTlI3N6V0T46lLhpHaQxLRD57e79RDqpKaFdxKVm8YxjLjOjUEhRxWTtd2O70mWZz4yEXP8LvvxoRdETElP6ndFXwl%2BBOjVYbDfeJ%2BxhCWdU0kThAwJtCk0abjPeX7%2FrewteQtU8RS1VzDRL5dyK1P%2Bi6E4%2FEapf%2FjfxUA%2FtJ0gYBpen8pXzpXrOB0rinkyrr0XhSPcedUJMWka5Zm4hNQ4iyvuZxnE%2BeHxfuf1XI65nY32QGUmqxYJ2JKMsAfhlY%2FtB6YI%2Fnoiyiu%2BbdtR0syOqwq%2BG55nKUdHYzkk4JFM6QLO9m%2By4TZ9LoQV7Mx%2BVIjS5XM1B6kpZoKIlbyNy7VgecIt%2F%2BHDwCwveTQpMpVoEv%2FD47RHjHDsUbnc8JwyPtBWjPXDNu%2Fmc%2Fl7Sz73nbfcFVtHIFIUZomEMgGa7yixoIfDhPo2ntgb0fOMMnG774GOqUB4IpXJ1CrpUS9450jykGDfNir0O2bAkWjEaedLy3pqeeLG8vgaBNdwL1vecB8DT4hCItU60T%2FIyHeFBfJUdscoV%2B6sB7rnNIzV5qsi9ZZBNwymYUfawFKL2V27NkpY1j%2FjmFF5i6PWQwSLiAhGBYYNcb7%2FlkT8sv%2Bx7i0phnrnwRgl3DPgbySwkaPIxibAD6Hzfl88v%2Fc%2By3hmv44WGAvAFhAStGB&X-Amz-Signature=184db07c5b799453a34bbccd81dc2b848ac991df019644f7a8a2617147a96955&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIXJRIU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGCsS4WfTvGkf9JpKsFM%2Bs6fgli3SS1rl9PBidedAAZmAiEAkL7bz0v1NP7lKTmUtGmsSLlW79MDzDeH0JyE9B%2FAIr8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcsizjKnZTs5E7xAyrcA%2Bowq%2Bh5xkC9gFbtJ7mhtx1Q9FDfOX3OqnEh9U8f2RwFkygsebhLkzw1UcMM4A9fjBv3qa3Q2Dg%2BJt%2BnvRsp%2FR7yBS4q%2Bi8Zui7rWx3YSlOWLckhBsrEWmepZllGNKL4YbjyeYQbT2tvvuz0dRQa18OdjBaTcME2D4pVQTaDZAZtPFFqSP%2BWnGu%2FeKJxp7jrRTCTlI3N6V0T46lLhpHaQxLRD57e79RDqpKaFdxKVm8YxjLjOjUEhRxWTtd2O70mWZz4yEXP8LvvxoRdETElP6ndFXwl%2BBOjVYbDfeJ%2BxhCWdU0kThAwJtCk0abjPeX7%2FrewteQtU8RS1VzDRL5dyK1P%2Bi6E4%2FEapf%2FjfxUA%2FtJ0gYBpen8pXzpXrOB0rinkyrr0XhSPcedUJMWka5Zm4hNQ4iyvuZxnE%2BeHxfuf1XI65nY32QGUmqxYJ2JKMsAfhlY%2FtB6YI%2Fnoiyiu%2BbdtR0syOqwq%2BG55nKUdHYzkk4JFM6QLO9m%2By4TZ9LoQV7Mx%2BVIjS5XM1B6kpZoKIlbyNy7VgecIt%2F%2BHDwCwveTQpMpVoEv%2FD47RHjHDsUbnc8JwyPtBWjPXDNu%2Fmc%2Fl7Sz73nbfcFVtHIFIUZomEMgGa7yixoIfDhPo2ntgb0fOMMnG774GOqUB4IpXJ1CrpUS9450jykGDfNir0O2bAkWjEaedLy3pqeeLG8vgaBNdwL1vecB8DT4hCItU60T%2FIyHeFBfJUdscoV%2B6sB7rnNIzV5qsi9ZZBNwymYUfawFKL2V27NkpY1j%2FjmFF5i6PWQwSLiAhGBYYNcb7%2FlkT8sv%2Bx7i0phnrnwRgl3DPgbySwkaPIxibAD6Hzfl88v%2Fc%2By3hmv44WGAvAFhAStGB&X-Amz-Signature=c20082ef4b3555426d531ff38fcd776bdabb293d147dac3bc25298e596bd5a58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
