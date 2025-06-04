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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WAND2N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCgz6hoX%2BvFqJ9BGJKJeKImCWEJaONirNEuhTe%2ByB99fAIgEzvfkmOvzxm3ckx1Qd2FNwS%2BseCxdc0vzORtCrh2wX8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIwQ0G37RFBQRlt4xCrcAxHRlUrWCtwIrMm0%2BkgjNPAbhfBX0dvu%2B%2Bf1AgUR0uzRXcCSDdrz7ts4pb%2Bw95E0nG1L94IDA%2FgHxqZdwCZdS2rakd1EWVHVeAtTm0xXiru%2B%2Bsqz7S95c3IK8BG83D6L5I7D0CEzwWiKB%2B5uJ%2FBZYRy2T1cxGlEEInQXJyXp2VbPGJAnm5GYRV91ETUkx5bwKN6exGkpq7b1WKXC0pSk%2BvZs1VXqBm9T0ks7ydEU2ww9n%2B%2F%2Fyfw%2BHFaydFvjjHrnac3Fbf9GtM5WbHpvzTOf7FMMSEZ%2Bn5FjEJ2deIXcw0Xhkyo0sVhS0Beg7yzkvBvk%2BbYFGSWlf%2FTZwMPZZsTSp%2Fw5hqOSjTAb1lo5q4ph0ai9XHL2FwKnPDmXqceMG6tJ8JjeYUPKeE8%2B722upjHZ1VmalQc1dnlOvQqTdnPP8KUOZDvJfhMVM9%2FqaPeEk5JTRLV1oyDzNmOpnIJuoujuxcg%2BL3DA2iz78EIkO5Y%2BMUuG5q%2Bs8JYwLRPtSSNPXWD3VRAsyKIYFbeRvUY9wJTp6HcNlwLL1KItBNbXFTcv3091hLdmdhN%2FbitydbUk0AAbkA8pmuPHq5ObeSHm%2FU6m%2FaDMfyOTo71Uw3Im2sthRQ%2B%2BguufmrorbI3ImP1xMKmI%2F8EGOqUBxmsXcMB334P4IUKzB4kLwpMHi5lpMu51wS68bEZ4ltPimFRTYrL884Tm%2FWIohpxeu%2B2%2BFj%2F5GIckCaGvzRu9QquBazRFjFepr10oLCWnjAg8T7RL0pfShTN4GgiustM0s6O8kUjpSqiwSrxEC6BiiBBUssuXmo5xGds0mTddy7%2B1r0dwiM5b2Qibiuqo9GmF%2BSDnI6LUMQdbXTcZ9hmG70UhT96n&X-Amz-Signature=0f85c811f32495d3d93f7d36b46cc9e23f29fbe61c5a55aae07c88018844c802&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WAND2N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCgz6hoX%2BvFqJ9BGJKJeKImCWEJaONirNEuhTe%2ByB99fAIgEzvfkmOvzxm3ckx1Qd2FNwS%2BseCxdc0vzORtCrh2wX8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIwQ0G37RFBQRlt4xCrcAxHRlUrWCtwIrMm0%2BkgjNPAbhfBX0dvu%2B%2Bf1AgUR0uzRXcCSDdrz7ts4pb%2Bw95E0nG1L94IDA%2FgHxqZdwCZdS2rakd1EWVHVeAtTm0xXiru%2B%2Bsqz7S95c3IK8BG83D6L5I7D0CEzwWiKB%2B5uJ%2FBZYRy2T1cxGlEEInQXJyXp2VbPGJAnm5GYRV91ETUkx5bwKN6exGkpq7b1WKXC0pSk%2BvZs1VXqBm9T0ks7ydEU2ww9n%2B%2F%2Fyfw%2BHFaydFvjjHrnac3Fbf9GtM5WbHpvzTOf7FMMSEZ%2Bn5FjEJ2deIXcw0Xhkyo0sVhS0Beg7yzkvBvk%2BbYFGSWlf%2FTZwMPZZsTSp%2Fw5hqOSjTAb1lo5q4ph0ai9XHL2FwKnPDmXqceMG6tJ8JjeYUPKeE8%2B722upjHZ1VmalQc1dnlOvQqTdnPP8KUOZDvJfhMVM9%2FqaPeEk5JTRLV1oyDzNmOpnIJuoujuxcg%2BL3DA2iz78EIkO5Y%2BMUuG5q%2Bs8JYwLRPtSSNPXWD3VRAsyKIYFbeRvUY9wJTp6HcNlwLL1KItBNbXFTcv3091hLdmdhN%2FbitydbUk0AAbkA8pmuPHq5ObeSHm%2FU6m%2FaDMfyOTo71Uw3Im2sthRQ%2B%2BguufmrorbI3ImP1xMKmI%2F8EGOqUBxmsXcMB334P4IUKzB4kLwpMHi5lpMu51wS68bEZ4ltPimFRTYrL884Tm%2FWIohpxeu%2B2%2BFj%2F5GIckCaGvzRu9QquBazRFjFepr10oLCWnjAg8T7RL0pfShTN4GgiustM0s6O8kUjpSqiwSrxEC6BiiBBUssuXmo5xGds0mTddy7%2B1r0dwiM5b2Qibiuqo9GmF%2BSDnI6LUMQdbXTcZ9hmG70UhT96n&X-Amz-Signature=92877e2cc2052fee589ae8ae0785749ef1bbfe4d48030878a05545c2b797254a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WAND2N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCgz6hoX%2BvFqJ9BGJKJeKImCWEJaONirNEuhTe%2ByB99fAIgEzvfkmOvzxm3ckx1Qd2FNwS%2BseCxdc0vzORtCrh2wX8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIwQ0G37RFBQRlt4xCrcAxHRlUrWCtwIrMm0%2BkgjNPAbhfBX0dvu%2B%2Bf1AgUR0uzRXcCSDdrz7ts4pb%2Bw95E0nG1L94IDA%2FgHxqZdwCZdS2rakd1EWVHVeAtTm0xXiru%2B%2Bsqz7S95c3IK8BG83D6L5I7D0CEzwWiKB%2B5uJ%2FBZYRy2T1cxGlEEInQXJyXp2VbPGJAnm5GYRV91ETUkx5bwKN6exGkpq7b1WKXC0pSk%2BvZs1VXqBm9T0ks7ydEU2ww9n%2B%2F%2Fyfw%2BHFaydFvjjHrnac3Fbf9GtM5WbHpvzTOf7FMMSEZ%2Bn5FjEJ2deIXcw0Xhkyo0sVhS0Beg7yzkvBvk%2BbYFGSWlf%2FTZwMPZZsTSp%2Fw5hqOSjTAb1lo5q4ph0ai9XHL2FwKnPDmXqceMG6tJ8JjeYUPKeE8%2B722upjHZ1VmalQc1dnlOvQqTdnPP8KUOZDvJfhMVM9%2FqaPeEk5JTRLV1oyDzNmOpnIJuoujuxcg%2BL3DA2iz78EIkO5Y%2BMUuG5q%2Bs8JYwLRPtSSNPXWD3VRAsyKIYFbeRvUY9wJTp6HcNlwLL1KItBNbXFTcv3091hLdmdhN%2FbitydbUk0AAbkA8pmuPHq5ObeSHm%2FU6m%2FaDMfyOTo71Uw3Im2sthRQ%2B%2BguufmrorbI3ImP1xMKmI%2F8EGOqUBxmsXcMB334P4IUKzB4kLwpMHi5lpMu51wS68bEZ4ltPimFRTYrL884Tm%2FWIohpxeu%2B2%2BFj%2F5GIckCaGvzRu9QquBazRFjFepr10oLCWnjAg8T7RL0pfShTN4GgiustM0s6O8kUjpSqiwSrxEC6BiiBBUssuXmo5xGds0mTddy7%2B1r0dwiM5b2Qibiuqo9GmF%2BSDnI6LUMQdbXTcZ9hmG70UhT96n&X-Amz-Signature=a4a02552a8548dfaf3477bfb9a00720fcd23233d733ed1072625b53b1036b150&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WAND2N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCgz6hoX%2BvFqJ9BGJKJeKImCWEJaONirNEuhTe%2ByB99fAIgEzvfkmOvzxm3ckx1Qd2FNwS%2BseCxdc0vzORtCrh2wX8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIwQ0G37RFBQRlt4xCrcAxHRlUrWCtwIrMm0%2BkgjNPAbhfBX0dvu%2B%2Bf1AgUR0uzRXcCSDdrz7ts4pb%2Bw95E0nG1L94IDA%2FgHxqZdwCZdS2rakd1EWVHVeAtTm0xXiru%2B%2Bsqz7S95c3IK8BG83D6L5I7D0CEzwWiKB%2B5uJ%2FBZYRy2T1cxGlEEInQXJyXp2VbPGJAnm5GYRV91ETUkx5bwKN6exGkpq7b1WKXC0pSk%2BvZs1VXqBm9T0ks7ydEU2ww9n%2B%2F%2Fyfw%2BHFaydFvjjHrnac3Fbf9GtM5WbHpvzTOf7FMMSEZ%2Bn5FjEJ2deIXcw0Xhkyo0sVhS0Beg7yzkvBvk%2BbYFGSWlf%2FTZwMPZZsTSp%2Fw5hqOSjTAb1lo5q4ph0ai9XHL2FwKnPDmXqceMG6tJ8JjeYUPKeE8%2B722upjHZ1VmalQc1dnlOvQqTdnPP8KUOZDvJfhMVM9%2FqaPeEk5JTRLV1oyDzNmOpnIJuoujuxcg%2BL3DA2iz78EIkO5Y%2BMUuG5q%2Bs8JYwLRPtSSNPXWD3VRAsyKIYFbeRvUY9wJTp6HcNlwLL1KItBNbXFTcv3091hLdmdhN%2FbitydbUk0AAbkA8pmuPHq5ObeSHm%2FU6m%2FaDMfyOTo71Uw3Im2sthRQ%2B%2BguufmrorbI3ImP1xMKmI%2F8EGOqUBxmsXcMB334P4IUKzB4kLwpMHi5lpMu51wS68bEZ4ltPimFRTYrL884Tm%2FWIohpxeu%2B2%2BFj%2F5GIckCaGvzRu9QquBazRFjFepr10oLCWnjAg8T7RL0pfShTN4GgiustM0s6O8kUjpSqiwSrxEC6BiiBBUssuXmo5xGds0mTddy7%2B1r0dwiM5b2Qibiuqo9GmF%2BSDnI6LUMQdbXTcZ9hmG70UhT96n&X-Amz-Signature=d487c7d4fe39e7e792a8519d07624748ad2082d0d8585fed348576575622538a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WAND2N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCgz6hoX%2BvFqJ9BGJKJeKImCWEJaONirNEuhTe%2ByB99fAIgEzvfkmOvzxm3ckx1Qd2FNwS%2BseCxdc0vzORtCrh2wX8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIwQ0G37RFBQRlt4xCrcAxHRlUrWCtwIrMm0%2BkgjNPAbhfBX0dvu%2B%2Bf1AgUR0uzRXcCSDdrz7ts4pb%2Bw95E0nG1L94IDA%2FgHxqZdwCZdS2rakd1EWVHVeAtTm0xXiru%2B%2Bsqz7S95c3IK8BG83D6L5I7D0CEzwWiKB%2B5uJ%2FBZYRy2T1cxGlEEInQXJyXp2VbPGJAnm5GYRV91ETUkx5bwKN6exGkpq7b1WKXC0pSk%2BvZs1VXqBm9T0ks7ydEU2ww9n%2B%2F%2Fyfw%2BHFaydFvjjHrnac3Fbf9GtM5WbHpvzTOf7FMMSEZ%2Bn5FjEJ2deIXcw0Xhkyo0sVhS0Beg7yzkvBvk%2BbYFGSWlf%2FTZwMPZZsTSp%2Fw5hqOSjTAb1lo5q4ph0ai9XHL2FwKnPDmXqceMG6tJ8JjeYUPKeE8%2B722upjHZ1VmalQc1dnlOvQqTdnPP8KUOZDvJfhMVM9%2FqaPeEk5JTRLV1oyDzNmOpnIJuoujuxcg%2BL3DA2iz78EIkO5Y%2BMUuG5q%2Bs8JYwLRPtSSNPXWD3VRAsyKIYFbeRvUY9wJTp6HcNlwLL1KItBNbXFTcv3091hLdmdhN%2FbitydbUk0AAbkA8pmuPHq5ObeSHm%2FU6m%2FaDMfyOTo71Uw3Im2sthRQ%2B%2BguufmrorbI3ImP1xMKmI%2F8EGOqUBxmsXcMB334P4IUKzB4kLwpMHi5lpMu51wS68bEZ4ltPimFRTYrL884Tm%2FWIohpxeu%2B2%2BFj%2F5GIckCaGvzRu9QquBazRFjFepr10oLCWnjAg8T7RL0pfShTN4GgiustM0s6O8kUjpSqiwSrxEC6BiiBBUssuXmo5xGds0mTddy7%2B1r0dwiM5b2Qibiuqo9GmF%2BSDnI6LUMQdbXTcZ9hmG70UhT96n&X-Amz-Signature=12f9dd0b499910d8b9cd4dbe2d05598b85b4515a82fe9fb7a887f26a5eac4ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WAND2N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCgz6hoX%2BvFqJ9BGJKJeKImCWEJaONirNEuhTe%2ByB99fAIgEzvfkmOvzxm3ckx1Qd2FNwS%2BseCxdc0vzORtCrh2wX8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIwQ0G37RFBQRlt4xCrcAxHRlUrWCtwIrMm0%2BkgjNPAbhfBX0dvu%2B%2Bf1AgUR0uzRXcCSDdrz7ts4pb%2Bw95E0nG1L94IDA%2FgHxqZdwCZdS2rakd1EWVHVeAtTm0xXiru%2B%2Bsqz7S95c3IK8BG83D6L5I7D0CEzwWiKB%2B5uJ%2FBZYRy2T1cxGlEEInQXJyXp2VbPGJAnm5GYRV91ETUkx5bwKN6exGkpq7b1WKXC0pSk%2BvZs1VXqBm9T0ks7ydEU2ww9n%2B%2F%2Fyfw%2BHFaydFvjjHrnac3Fbf9GtM5WbHpvzTOf7FMMSEZ%2Bn5FjEJ2deIXcw0Xhkyo0sVhS0Beg7yzkvBvk%2BbYFGSWlf%2FTZwMPZZsTSp%2Fw5hqOSjTAb1lo5q4ph0ai9XHL2FwKnPDmXqceMG6tJ8JjeYUPKeE8%2B722upjHZ1VmalQc1dnlOvQqTdnPP8KUOZDvJfhMVM9%2FqaPeEk5JTRLV1oyDzNmOpnIJuoujuxcg%2BL3DA2iz78EIkO5Y%2BMUuG5q%2Bs8JYwLRPtSSNPXWD3VRAsyKIYFbeRvUY9wJTp6HcNlwLL1KItBNbXFTcv3091hLdmdhN%2FbitydbUk0AAbkA8pmuPHq5ObeSHm%2FU6m%2FaDMfyOTo71Uw3Im2sthRQ%2B%2BguufmrorbI3ImP1xMKmI%2F8EGOqUBxmsXcMB334P4IUKzB4kLwpMHi5lpMu51wS68bEZ4ltPimFRTYrL884Tm%2FWIohpxeu%2B2%2BFj%2F5GIckCaGvzRu9QquBazRFjFepr10oLCWnjAg8T7RL0pfShTN4GgiustM0s6O8kUjpSqiwSrxEC6BiiBBUssuXmo5xGds0mTddy7%2B1r0dwiM5b2Qibiuqo9GmF%2BSDnI6LUMQdbXTcZ9hmG70UhT96n&X-Amz-Signature=08d29ba03ba6418a0c4134a51bcb9ba241601b0393c9539aae713e1f50c58f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WAND2N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCgz6hoX%2BvFqJ9BGJKJeKImCWEJaONirNEuhTe%2ByB99fAIgEzvfkmOvzxm3ckx1Qd2FNwS%2BseCxdc0vzORtCrh2wX8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIwQ0G37RFBQRlt4xCrcAxHRlUrWCtwIrMm0%2BkgjNPAbhfBX0dvu%2B%2Bf1AgUR0uzRXcCSDdrz7ts4pb%2Bw95E0nG1L94IDA%2FgHxqZdwCZdS2rakd1EWVHVeAtTm0xXiru%2B%2Bsqz7S95c3IK8BG83D6L5I7D0CEzwWiKB%2B5uJ%2FBZYRy2T1cxGlEEInQXJyXp2VbPGJAnm5GYRV91ETUkx5bwKN6exGkpq7b1WKXC0pSk%2BvZs1VXqBm9T0ks7ydEU2ww9n%2B%2F%2Fyfw%2BHFaydFvjjHrnac3Fbf9GtM5WbHpvzTOf7FMMSEZ%2Bn5FjEJ2deIXcw0Xhkyo0sVhS0Beg7yzkvBvk%2BbYFGSWlf%2FTZwMPZZsTSp%2Fw5hqOSjTAb1lo5q4ph0ai9XHL2FwKnPDmXqceMG6tJ8JjeYUPKeE8%2B722upjHZ1VmalQc1dnlOvQqTdnPP8KUOZDvJfhMVM9%2FqaPeEk5JTRLV1oyDzNmOpnIJuoujuxcg%2BL3DA2iz78EIkO5Y%2BMUuG5q%2Bs8JYwLRPtSSNPXWD3VRAsyKIYFbeRvUY9wJTp6HcNlwLL1KItBNbXFTcv3091hLdmdhN%2FbitydbUk0AAbkA8pmuPHq5ObeSHm%2FU6m%2FaDMfyOTo71Uw3Im2sthRQ%2B%2BguufmrorbI3ImP1xMKmI%2F8EGOqUBxmsXcMB334P4IUKzB4kLwpMHi5lpMu51wS68bEZ4ltPimFRTYrL884Tm%2FWIohpxeu%2B2%2BFj%2F5GIckCaGvzRu9QquBazRFjFepr10oLCWnjAg8T7RL0pfShTN4GgiustM0s6O8kUjpSqiwSrxEC6BiiBBUssuXmo5xGds0mTddy7%2B1r0dwiM5b2Qibiuqo9GmF%2BSDnI6LUMQdbXTcZ9hmG70UhT96n&X-Amz-Signature=e9ab0bde97b105cccacef1b61064891027fab7834322565eb0552ea35b7bc0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WAND2N%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCgz6hoX%2BvFqJ9BGJKJeKImCWEJaONirNEuhTe%2ByB99fAIgEzvfkmOvzxm3ckx1Qd2FNwS%2BseCxdc0vzORtCrh2wX8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIwQ0G37RFBQRlt4xCrcAxHRlUrWCtwIrMm0%2BkgjNPAbhfBX0dvu%2B%2Bf1AgUR0uzRXcCSDdrz7ts4pb%2Bw95E0nG1L94IDA%2FgHxqZdwCZdS2rakd1EWVHVeAtTm0xXiru%2B%2Bsqz7S95c3IK8BG83D6L5I7D0CEzwWiKB%2B5uJ%2FBZYRy2T1cxGlEEInQXJyXp2VbPGJAnm5GYRV91ETUkx5bwKN6exGkpq7b1WKXC0pSk%2BvZs1VXqBm9T0ks7ydEU2ww9n%2B%2F%2Fyfw%2BHFaydFvjjHrnac3Fbf9GtM5WbHpvzTOf7FMMSEZ%2Bn5FjEJ2deIXcw0Xhkyo0sVhS0Beg7yzkvBvk%2BbYFGSWlf%2FTZwMPZZsTSp%2Fw5hqOSjTAb1lo5q4ph0ai9XHL2FwKnPDmXqceMG6tJ8JjeYUPKeE8%2B722upjHZ1VmalQc1dnlOvQqTdnPP8KUOZDvJfhMVM9%2FqaPeEk5JTRLV1oyDzNmOpnIJuoujuxcg%2BL3DA2iz78EIkO5Y%2BMUuG5q%2Bs8JYwLRPtSSNPXWD3VRAsyKIYFbeRvUY9wJTp6HcNlwLL1KItBNbXFTcv3091hLdmdhN%2FbitydbUk0AAbkA8pmuPHq5ObeSHm%2FU6m%2FaDMfyOTo71Uw3Im2sthRQ%2B%2BguufmrorbI3ImP1xMKmI%2F8EGOqUBxmsXcMB334P4IUKzB4kLwpMHi5lpMu51wS68bEZ4ltPimFRTYrL884Tm%2FWIohpxeu%2B2%2BFj%2F5GIckCaGvzRu9QquBazRFjFepr10oLCWnjAg8T7RL0pfShTN4GgiustM0s6O8kUjpSqiwSrxEC6BiiBBUssuXmo5xGds0mTddy7%2B1r0dwiM5b2Qibiuqo9GmF%2BSDnI6LUMQdbXTcZ9hmG70UhT96n&X-Amz-Signature=a06d2b77ccb751b664c3166a74d5eb91862425df6490f476ca2edf14be754d46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
