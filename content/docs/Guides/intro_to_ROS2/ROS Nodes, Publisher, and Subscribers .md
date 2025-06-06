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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFS2OMQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEXHVovTCFG7n5WQ9CU%2Bm%2F0NWkcjfF1ptWO0GrgAZXmsAiEA9CnaZb7eD%2Fvzr4Kh5I0tUs9FHxHwem3GdxGhr5dS3NMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD0AaaUAAKz9v84fQCrcAyHiT%2B9IK7Wblg3yd8MRRYRnKYwgUzORroaI1Kfh7KByerMSDSjqE2FBZiC3R6qlUXP032Hhu2TiB22I3aGhK07ywj5QHYZD4sN3csQ1HoKNOphuTTJM4p61sCJKEdbbZEQi0L883wqXTpP7ZyYzNO9b1NPCcfrChZorK3rClr8ki%2FRcZ0uxHi89sWuf%2Fif8jnAyVkz3UEexDzJ%2FoA22kqvYb29lBpX5CsREa7bJDeLPNsPe36A5XnBC860A1Z4UWRDf3R8hJqj0lYihIcvyEVZNW%2F1OdvnqMh06n%2BIjR4ZUAKiHiRNxojAtdum%2BKd0XMER3LeQEQl%2Fr0TipVTMSvPPGwAcxSgDcZI5ehw1ntLDVq56JaRyocVffhiuWGjZJclJjCOLdRxo6DVbbozuBVXWn9QcCSm3vpTWNPBIdxgYED7RM9kQVE7yuQDHH5P7p%2FEETTAyvWNZK573v3AXM2%2Bhk7y0P%2BEnbTZhOAICDeRzu4TGhOKKqRQ0lFW8ZK8X6rkWxW%2FU5NiJ3bj59nyuTDNX1jiTl3Io8MIKb5RVt4dHB%2BwWOukXFawHkCjd4K4YXMUiw27SwRIownaldzl5Nb1rpS4BdIKSyqeONbIax3eabrdrusNNaqmhFy4QmMPD9iMIGOqUBgXp2%2BCO0pCU61EIcKE0QzCaXLB1pwakqxCZg9AscMJl17IyjqmGLwfAmbbq0HsIkVmgFhlsaDtHQNwfyZhWs%2BnFuk8vF1YfigYoAIGOVdlerxgB81Cb9HB6XSpIrxAjTqC6r02sC8kLHwca8NRMkYbDmjhucJEIXispe279qtvTM6A%2FW9icJSWDw1Ul3dtbcFLO4F3GGiRSJJFO8h4U2k7nqrT0l&X-Amz-Signature=07bde060647e23f9f7d1dbe00a26037d285cf42954c478386de16f7b1fbcf170&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFS2OMQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEXHVovTCFG7n5WQ9CU%2Bm%2F0NWkcjfF1ptWO0GrgAZXmsAiEA9CnaZb7eD%2Fvzr4Kh5I0tUs9FHxHwem3GdxGhr5dS3NMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD0AaaUAAKz9v84fQCrcAyHiT%2B9IK7Wblg3yd8MRRYRnKYwgUzORroaI1Kfh7KByerMSDSjqE2FBZiC3R6qlUXP032Hhu2TiB22I3aGhK07ywj5QHYZD4sN3csQ1HoKNOphuTTJM4p61sCJKEdbbZEQi0L883wqXTpP7ZyYzNO9b1NPCcfrChZorK3rClr8ki%2FRcZ0uxHi89sWuf%2Fif8jnAyVkz3UEexDzJ%2FoA22kqvYb29lBpX5CsREa7bJDeLPNsPe36A5XnBC860A1Z4UWRDf3R8hJqj0lYihIcvyEVZNW%2F1OdvnqMh06n%2BIjR4ZUAKiHiRNxojAtdum%2BKd0XMER3LeQEQl%2Fr0TipVTMSvPPGwAcxSgDcZI5ehw1ntLDVq56JaRyocVffhiuWGjZJclJjCOLdRxo6DVbbozuBVXWn9QcCSm3vpTWNPBIdxgYED7RM9kQVE7yuQDHH5P7p%2FEETTAyvWNZK573v3AXM2%2Bhk7y0P%2BEnbTZhOAICDeRzu4TGhOKKqRQ0lFW8ZK8X6rkWxW%2FU5NiJ3bj59nyuTDNX1jiTl3Io8MIKb5RVt4dHB%2BwWOukXFawHkCjd4K4YXMUiw27SwRIownaldzl5Nb1rpS4BdIKSyqeONbIax3eabrdrusNNaqmhFy4QmMPD9iMIGOqUBgXp2%2BCO0pCU61EIcKE0QzCaXLB1pwakqxCZg9AscMJl17IyjqmGLwfAmbbq0HsIkVmgFhlsaDtHQNwfyZhWs%2BnFuk8vF1YfigYoAIGOVdlerxgB81Cb9HB6XSpIrxAjTqC6r02sC8kLHwca8NRMkYbDmjhucJEIXispe279qtvTM6A%2FW9icJSWDw1Ul3dtbcFLO4F3GGiRSJJFO8h4U2k7nqrT0l&X-Amz-Signature=10e1bc35b35db9ae03c44dd9b99a96c841d1cbc6368cf01ae8f8c7571d574c18&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFS2OMQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEXHVovTCFG7n5WQ9CU%2Bm%2F0NWkcjfF1ptWO0GrgAZXmsAiEA9CnaZb7eD%2Fvzr4Kh5I0tUs9FHxHwem3GdxGhr5dS3NMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD0AaaUAAKz9v84fQCrcAyHiT%2B9IK7Wblg3yd8MRRYRnKYwgUzORroaI1Kfh7KByerMSDSjqE2FBZiC3R6qlUXP032Hhu2TiB22I3aGhK07ywj5QHYZD4sN3csQ1HoKNOphuTTJM4p61sCJKEdbbZEQi0L883wqXTpP7ZyYzNO9b1NPCcfrChZorK3rClr8ki%2FRcZ0uxHi89sWuf%2Fif8jnAyVkz3UEexDzJ%2FoA22kqvYb29lBpX5CsREa7bJDeLPNsPe36A5XnBC860A1Z4UWRDf3R8hJqj0lYihIcvyEVZNW%2F1OdvnqMh06n%2BIjR4ZUAKiHiRNxojAtdum%2BKd0XMER3LeQEQl%2Fr0TipVTMSvPPGwAcxSgDcZI5ehw1ntLDVq56JaRyocVffhiuWGjZJclJjCOLdRxo6DVbbozuBVXWn9QcCSm3vpTWNPBIdxgYED7RM9kQVE7yuQDHH5P7p%2FEETTAyvWNZK573v3AXM2%2Bhk7y0P%2BEnbTZhOAICDeRzu4TGhOKKqRQ0lFW8ZK8X6rkWxW%2FU5NiJ3bj59nyuTDNX1jiTl3Io8MIKb5RVt4dHB%2BwWOukXFawHkCjd4K4YXMUiw27SwRIownaldzl5Nb1rpS4BdIKSyqeONbIax3eabrdrusNNaqmhFy4QmMPD9iMIGOqUBgXp2%2BCO0pCU61EIcKE0QzCaXLB1pwakqxCZg9AscMJl17IyjqmGLwfAmbbq0HsIkVmgFhlsaDtHQNwfyZhWs%2BnFuk8vF1YfigYoAIGOVdlerxgB81Cb9HB6XSpIrxAjTqC6r02sC8kLHwca8NRMkYbDmjhucJEIXispe279qtvTM6A%2FW9icJSWDw1Ul3dtbcFLO4F3GGiRSJJFO8h4U2k7nqrT0l&X-Amz-Signature=0e3aef5e5fed91e40e77145c0677f9a0e9e8b936e083bf1a649512fcacf0097e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFS2OMQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEXHVovTCFG7n5WQ9CU%2Bm%2F0NWkcjfF1ptWO0GrgAZXmsAiEA9CnaZb7eD%2Fvzr4Kh5I0tUs9FHxHwem3GdxGhr5dS3NMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD0AaaUAAKz9v84fQCrcAyHiT%2B9IK7Wblg3yd8MRRYRnKYwgUzORroaI1Kfh7KByerMSDSjqE2FBZiC3R6qlUXP032Hhu2TiB22I3aGhK07ywj5QHYZD4sN3csQ1HoKNOphuTTJM4p61sCJKEdbbZEQi0L883wqXTpP7ZyYzNO9b1NPCcfrChZorK3rClr8ki%2FRcZ0uxHi89sWuf%2Fif8jnAyVkz3UEexDzJ%2FoA22kqvYb29lBpX5CsREa7bJDeLPNsPe36A5XnBC860A1Z4UWRDf3R8hJqj0lYihIcvyEVZNW%2F1OdvnqMh06n%2BIjR4ZUAKiHiRNxojAtdum%2BKd0XMER3LeQEQl%2Fr0TipVTMSvPPGwAcxSgDcZI5ehw1ntLDVq56JaRyocVffhiuWGjZJclJjCOLdRxo6DVbbozuBVXWn9QcCSm3vpTWNPBIdxgYED7RM9kQVE7yuQDHH5P7p%2FEETTAyvWNZK573v3AXM2%2Bhk7y0P%2BEnbTZhOAICDeRzu4TGhOKKqRQ0lFW8ZK8X6rkWxW%2FU5NiJ3bj59nyuTDNX1jiTl3Io8MIKb5RVt4dHB%2BwWOukXFawHkCjd4K4YXMUiw27SwRIownaldzl5Nb1rpS4BdIKSyqeONbIax3eabrdrusNNaqmhFy4QmMPD9iMIGOqUBgXp2%2BCO0pCU61EIcKE0QzCaXLB1pwakqxCZg9AscMJl17IyjqmGLwfAmbbq0HsIkVmgFhlsaDtHQNwfyZhWs%2BnFuk8vF1YfigYoAIGOVdlerxgB81Cb9HB6XSpIrxAjTqC6r02sC8kLHwca8NRMkYbDmjhucJEIXispe279qtvTM6A%2FW9icJSWDw1Ul3dtbcFLO4F3GGiRSJJFO8h4U2k7nqrT0l&X-Amz-Signature=c3324846d6741024db50ed8596255853eb4ecb01a767f7d798b9144536df8ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFS2OMQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEXHVovTCFG7n5WQ9CU%2Bm%2F0NWkcjfF1ptWO0GrgAZXmsAiEA9CnaZb7eD%2Fvzr4Kh5I0tUs9FHxHwem3GdxGhr5dS3NMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD0AaaUAAKz9v84fQCrcAyHiT%2B9IK7Wblg3yd8MRRYRnKYwgUzORroaI1Kfh7KByerMSDSjqE2FBZiC3R6qlUXP032Hhu2TiB22I3aGhK07ywj5QHYZD4sN3csQ1HoKNOphuTTJM4p61sCJKEdbbZEQi0L883wqXTpP7ZyYzNO9b1NPCcfrChZorK3rClr8ki%2FRcZ0uxHi89sWuf%2Fif8jnAyVkz3UEexDzJ%2FoA22kqvYb29lBpX5CsREa7bJDeLPNsPe36A5XnBC860A1Z4UWRDf3R8hJqj0lYihIcvyEVZNW%2F1OdvnqMh06n%2BIjR4ZUAKiHiRNxojAtdum%2BKd0XMER3LeQEQl%2Fr0TipVTMSvPPGwAcxSgDcZI5ehw1ntLDVq56JaRyocVffhiuWGjZJclJjCOLdRxo6DVbbozuBVXWn9QcCSm3vpTWNPBIdxgYED7RM9kQVE7yuQDHH5P7p%2FEETTAyvWNZK573v3AXM2%2Bhk7y0P%2BEnbTZhOAICDeRzu4TGhOKKqRQ0lFW8ZK8X6rkWxW%2FU5NiJ3bj59nyuTDNX1jiTl3Io8MIKb5RVt4dHB%2BwWOukXFawHkCjd4K4YXMUiw27SwRIownaldzl5Nb1rpS4BdIKSyqeONbIax3eabrdrusNNaqmhFy4QmMPD9iMIGOqUBgXp2%2BCO0pCU61EIcKE0QzCaXLB1pwakqxCZg9AscMJl17IyjqmGLwfAmbbq0HsIkVmgFhlsaDtHQNwfyZhWs%2BnFuk8vF1YfigYoAIGOVdlerxgB81Cb9HB6XSpIrxAjTqC6r02sC8kLHwca8NRMkYbDmjhucJEIXispe279qtvTM6A%2FW9icJSWDw1Ul3dtbcFLO4F3GGiRSJJFO8h4U2k7nqrT0l&X-Amz-Signature=4f11849869df6400dcc77b3669bd09fb03db8821b8da2896a23aab870d3e314d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFS2OMQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEXHVovTCFG7n5WQ9CU%2Bm%2F0NWkcjfF1ptWO0GrgAZXmsAiEA9CnaZb7eD%2Fvzr4Kh5I0tUs9FHxHwem3GdxGhr5dS3NMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD0AaaUAAKz9v84fQCrcAyHiT%2B9IK7Wblg3yd8MRRYRnKYwgUzORroaI1Kfh7KByerMSDSjqE2FBZiC3R6qlUXP032Hhu2TiB22I3aGhK07ywj5QHYZD4sN3csQ1HoKNOphuTTJM4p61sCJKEdbbZEQi0L883wqXTpP7ZyYzNO9b1NPCcfrChZorK3rClr8ki%2FRcZ0uxHi89sWuf%2Fif8jnAyVkz3UEexDzJ%2FoA22kqvYb29lBpX5CsREa7bJDeLPNsPe36A5XnBC860A1Z4UWRDf3R8hJqj0lYihIcvyEVZNW%2F1OdvnqMh06n%2BIjR4ZUAKiHiRNxojAtdum%2BKd0XMER3LeQEQl%2Fr0TipVTMSvPPGwAcxSgDcZI5ehw1ntLDVq56JaRyocVffhiuWGjZJclJjCOLdRxo6DVbbozuBVXWn9QcCSm3vpTWNPBIdxgYED7RM9kQVE7yuQDHH5P7p%2FEETTAyvWNZK573v3AXM2%2Bhk7y0P%2BEnbTZhOAICDeRzu4TGhOKKqRQ0lFW8ZK8X6rkWxW%2FU5NiJ3bj59nyuTDNX1jiTl3Io8MIKb5RVt4dHB%2BwWOukXFawHkCjd4K4YXMUiw27SwRIownaldzl5Nb1rpS4BdIKSyqeONbIax3eabrdrusNNaqmhFy4QmMPD9iMIGOqUBgXp2%2BCO0pCU61EIcKE0QzCaXLB1pwakqxCZg9AscMJl17IyjqmGLwfAmbbq0HsIkVmgFhlsaDtHQNwfyZhWs%2BnFuk8vF1YfigYoAIGOVdlerxgB81Cb9HB6XSpIrxAjTqC6r02sC8kLHwca8NRMkYbDmjhucJEIXispe279qtvTM6A%2FW9icJSWDw1Ul3dtbcFLO4F3GGiRSJJFO8h4U2k7nqrT0l&X-Amz-Signature=bcb2fe57afbfe0e58b4a8f1c75370fab80dcb23efb0fb48366db6ba1e31d5430&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFS2OMQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEXHVovTCFG7n5WQ9CU%2Bm%2F0NWkcjfF1ptWO0GrgAZXmsAiEA9CnaZb7eD%2Fvzr4Kh5I0tUs9FHxHwem3GdxGhr5dS3NMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD0AaaUAAKz9v84fQCrcAyHiT%2B9IK7Wblg3yd8MRRYRnKYwgUzORroaI1Kfh7KByerMSDSjqE2FBZiC3R6qlUXP032Hhu2TiB22I3aGhK07ywj5QHYZD4sN3csQ1HoKNOphuTTJM4p61sCJKEdbbZEQi0L883wqXTpP7ZyYzNO9b1NPCcfrChZorK3rClr8ki%2FRcZ0uxHi89sWuf%2Fif8jnAyVkz3UEexDzJ%2FoA22kqvYb29lBpX5CsREa7bJDeLPNsPe36A5XnBC860A1Z4UWRDf3R8hJqj0lYihIcvyEVZNW%2F1OdvnqMh06n%2BIjR4ZUAKiHiRNxojAtdum%2BKd0XMER3LeQEQl%2Fr0TipVTMSvPPGwAcxSgDcZI5ehw1ntLDVq56JaRyocVffhiuWGjZJclJjCOLdRxo6DVbbozuBVXWn9QcCSm3vpTWNPBIdxgYED7RM9kQVE7yuQDHH5P7p%2FEETTAyvWNZK573v3AXM2%2Bhk7y0P%2BEnbTZhOAICDeRzu4TGhOKKqRQ0lFW8ZK8X6rkWxW%2FU5NiJ3bj59nyuTDNX1jiTl3Io8MIKb5RVt4dHB%2BwWOukXFawHkCjd4K4YXMUiw27SwRIownaldzl5Nb1rpS4BdIKSyqeONbIax3eabrdrusNNaqmhFy4QmMPD9iMIGOqUBgXp2%2BCO0pCU61EIcKE0QzCaXLB1pwakqxCZg9AscMJl17IyjqmGLwfAmbbq0HsIkVmgFhlsaDtHQNwfyZhWs%2BnFuk8vF1YfigYoAIGOVdlerxgB81Cb9HB6XSpIrxAjTqC6r02sC8kLHwca8NRMkYbDmjhucJEIXispe279qtvTM6A%2FW9icJSWDw1Ul3dtbcFLO4F3GGiRSJJFO8h4U2k7nqrT0l&X-Amz-Signature=79af85ce97622608226b1bc198e60f4796ed576884996d834e9f0a14753141ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFS2OMQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEXHVovTCFG7n5WQ9CU%2Bm%2F0NWkcjfF1ptWO0GrgAZXmsAiEA9CnaZb7eD%2Fvzr4Kh5I0tUs9FHxHwem3GdxGhr5dS3NMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD0AaaUAAKz9v84fQCrcAyHiT%2B9IK7Wblg3yd8MRRYRnKYwgUzORroaI1Kfh7KByerMSDSjqE2FBZiC3R6qlUXP032Hhu2TiB22I3aGhK07ywj5QHYZD4sN3csQ1HoKNOphuTTJM4p61sCJKEdbbZEQi0L883wqXTpP7ZyYzNO9b1NPCcfrChZorK3rClr8ki%2FRcZ0uxHi89sWuf%2Fif8jnAyVkz3UEexDzJ%2FoA22kqvYb29lBpX5CsREa7bJDeLPNsPe36A5XnBC860A1Z4UWRDf3R8hJqj0lYihIcvyEVZNW%2F1OdvnqMh06n%2BIjR4ZUAKiHiRNxojAtdum%2BKd0XMER3LeQEQl%2Fr0TipVTMSvPPGwAcxSgDcZI5ehw1ntLDVq56JaRyocVffhiuWGjZJclJjCOLdRxo6DVbbozuBVXWn9QcCSm3vpTWNPBIdxgYED7RM9kQVE7yuQDHH5P7p%2FEETTAyvWNZK573v3AXM2%2Bhk7y0P%2BEnbTZhOAICDeRzu4TGhOKKqRQ0lFW8ZK8X6rkWxW%2FU5NiJ3bj59nyuTDNX1jiTl3Io8MIKb5RVt4dHB%2BwWOukXFawHkCjd4K4YXMUiw27SwRIownaldzl5Nb1rpS4BdIKSyqeONbIax3eabrdrusNNaqmhFy4QmMPD9iMIGOqUBgXp2%2BCO0pCU61EIcKE0QzCaXLB1pwakqxCZg9AscMJl17IyjqmGLwfAmbbq0HsIkVmgFhlsaDtHQNwfyZhWs%2BnFuk8vF1YfigYoAIGOVdlerxgB81Cb9HB6XSpIrxAjTqC6r02sC8kLHwca8NRMkYbDmjhucJEIXispe279qtvTM6A%2FW9icJSWDw1Ul3dtbcFLO4F3GGiRSJJFO8h4U2k7nqrT0l&X-Amz-Signature=26654cac9123854a5f2530bbd3e02c53c560fbca1912a7ade06e7c55c1839a39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
