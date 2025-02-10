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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNZYS3T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEaN2tpY5kzDat0R8gH8s6tdotjwMrRJlSceaG8tjiQIgUkAQ5htQPt%2BWt1uySMrCAa4D7gcdxPNCVDb76LZLFsMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6bTEItr7YfAJ0CCSrcA%2BhhR0MF8uVeU9uNEmi%2B8isMBS7Uz%2FvW2CobuQoUGqW284YPM0auSldl6aTlUOnfpbumRJ3QgfoC6ne2CjE1z4ZYORdXm2RSnSSholnzQ7AScpVUROqTEzJgojonvEs2K13hn09XS%2FVBLRrvMk1KxZShiTF%2Ft0xsKV%2FH9NWy5aWHKXabBvH%2FxI1wGh56UcJ5H5vfeacq5Z7mprzhFh5l4Y91bUZbx3p57HKwhYJGrAJbNR%2F7wG1FpOSeP7i8JaU5iYJnl7stMOp%2FfczhClzLHqAditBWWvZFbLcFBfK9mXmir%2BChC24ZQRixDeaCfB3XT9CYAWeHV3WasDFcYDDTwNGRsHdtq0lVZSogCUEiOG2New774%2BTeQqMmAKKZwzKl5gc%2FXB80AbXaxj2RP1J950nfI905deg0BjiGllx3Agj0UP%2FdoHhsHggO59COAJcglMsv2zQTWZ%2BKpfexikuDqSs8%2FBs6aAvQOLrc2tbPlUWrEowDxXxveiY8apVpmbrl31r6Ah8DtkHefLmemVnx7yE518zjM7N2cJyt5BOgbv%2BA0IsrC1Qs7uPbYaJ1qotpiXI27208Yq3iH1tREfD5qm4bar2o3q1khqvcA0LrgOJMr5TgIKPLh6pPPCNoMMDNqb0GOqUBAhNXnyTiwprGbQEe09zkw9m7%2FpUaENzQx2g%2BFaZfD7OnmaFr6MBX1ncyD0W9P3oOzamnxrc4%2FGjJwm0J4Aa49wjz%2F7NiP3YE1tOwoqr0TpWDGfjaHe19fuk5AvbkXVWe34OUmnywMWPbtALq9RtvuL1rC%2BFBVj52Kdq5iW4VjkhThLVyZXjRMjbfhRlqTIFMQNPRGzsdifKX1OfPdyuCQR9dFv1c&X-Amz-Signature=3cb71a459a0d60b9b7be615096f0d8e387c0e7f1a0b5c8dba59aaaf505d61081&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNZYS3T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEaN2tpY5kzDat0R8gH8s6tdotjwMrRJlSceaG8tjiQIgUkAQ5htQPt%2BWt1uySMrCAa4D7gcdxPNCVDb76LZLFsMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6bTEItr7YfAJ0CCSrcA%2BhhR0MF8uVeU9uNEmi%2B8isMBS7Uz%2FvW2CobuQoUGqW284YPM0auSldl6aTlUOnfpbumRJ3QgfoC6ne2CjE1z4ZYORdXm2RSnSSholnzQ7AScpVUROqTEzJgojonvEs2K13hn09XS%2FVBLRrvMk1KxZShiTF%2Ft0xsKV%2FH9NWy5aWHKXabBvH%2FxI1wGh56UcJ5H5vfeacq5Z7mprzhFh5l4Y91bUZbx3p57HKwhYJGrAJbNR%2F7wG1FpOSeP7i8JaU5iYJnl7stMOp%2FfczhClzLHqAditBWWvZFbLcFBfK9mXmir%2BChC24ZQRixDeaCfB3XT9CYAWeHV3WasDFcYDDTwNGRsHdtq0lVZSogCUEiOG2New774%2BTeQqMmAKKZwzKl5gc%2FXB80AbXaxj2RP1J950nfI905deg0BjiGllx3Agj0UP%2FdoHhsHggO59COAJcglMsv2zQTWZ%2BKpfexikuDqSs8%2FBs6aAvQOLrc2tbPlUWrEowDxXxveiY8apVpmbrl31r6Ah8DtkHefLmemVnx7yE518zjM7N2cJyt5BOgbv%2BA0IsrC1Qs7uPbYaJ1qotpiXI27208Yq3iH1tREfD5qm4bar2o3q1khqvcA0LrgOJMr5TgIKPLh6pPPCNoMMDNqb0GOqUBAhNXnyTiwprGbQEe09zkw9m7%2FpUaENzQx2g%2BFaZfD7OnmaFr6MBX1ncyD0W9P3oOzamnxrc4%2FGjJwm0J4Aa49wjz%2F7NiP3YE1tOwoqr0TpWDGfjaHe19fuk5AvbkXVWe34OUmnywMWPbtALq9RtvuL1rC%2BFBVj52Kdq5iW4VjkhThLVyZXjRMjbfhRlqTIFMQNPRGzsdifKX1OfPdyuCQR9dFv1c&X-Amz-Signature=99cdd78a404d8ccdc33f349523b5aef18e7e15cd6d53c9ebee02b63428f5756a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNZYS3T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEaN2tpY5kzDat0R8gH8s6tdotjwMrRJlSceaG8tjiQIgUkAQ5htQPt%2BWt1uySMrCAa4D7gcdxPNCVDb76LZLFsMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6bTEItr7YfAJ0CCSrcA%2BhhR0MF8uVeU9uNEmi%2B8isMBS7Uz%2FvW2CobuQoUGqW284YPM0auSldl6aTlUOnfpbumRJ3QgfoC6ne2CjE1z4ZYORdXm2RSnSSholnzQ7AScpVUROqTEzJgojonvEs2K13hn09XS%2FVBLRrvMk1KxZShiTF%2Ft0xsKV%2FH9NWy5aWHKXabBvH%2FxI1wGh56UcJ5H5vfeacq5Z7mprzhFh5l4Y91bUZbx3p57HKwhYJGrAJbNR%2F7wG1FpOSeP7i8JaU5iYJnl7stMOp%2FfczhClzLHqAditBWWvZFbLcFBfK9mXmir%2BChC24ZQRixDeaCfB3XT9CYAWeHV3WasDFcYDDTwNGRsHdtq0lVZSogCUEiOG2New774%2BTeQqMmAKKZwzKl5gc%2FXB80AbXaxj2RP1J950nfI905deg0BjiGllx3Agj0UP%2FdoHhsHggO59COAJcglMsv2zQTWZ%2BKpfexikuDqSs8%2FBs6aAvQOLrc2tbPlUWrEowDxXxveiY8apVpmbrl31r6Ah8DtkHefLmemVnx7yE518zjM7N2cJyt5BOgbv%2BA0IsrC1Qs7uPbYaJ1qotpiXI27208Yq3iH1tREfD5qm4bar2o3q1khqvcA0LrgOJMr5TgIKPLh6pPPCNoMMDNqb0GOqUBAhNXnyTiwprGbQEe09zkw9m7%2FpUaENzQx2g%2BFaZfD7OnmaFr6MBX1ncyD0W9P3oOzamnxrc4%2FGjJwm0J4Aa49wjz%2F7NiP3YE1tOwoqr0TpWDGfjaHe19fuk5AvbkXVWe34OUmnywMWPbtALq9RtvuL1rC%2BFBVj52Kdq5iW4VjkhThLVyZXjRMjbfhRlqTIFMQNPRGzsdifKX1OfPdyuCQR9dFv1c&X-Amz-Signature=430069f6d81d7386def2fa65fed65263696300a47cfa942b809adcc2b896f1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNZYS3T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEaN2tpY5kzDat0R8gH8s6tdotjwMrRJlSceaG8tjiQIgUkAQ5htQPt%2BWt1uySMrCAa4D7gcdxPNCVDb76LZLFsMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6bTEItr7YfAJ0CCSrcA%2BhhR0MF8uVeU9uNEmi%2B8isMBS7Uz%2FvW2CobuQoUGqW284YPM0auSldl6aTlUOnfpbumRJ3QgfoC6ne2CjE1z4ZYORdXm2RSnSSholnzQ7AScpVUROqTEzJgojonvEs2K13hn09XS%2FVBLRrvMk1KxZShiTF%2Ft0xsKV%2FH9NWy5aWHKXabBvH%2FxI1wGh56UcJ5H5vfeacq5Z7mprzhFh5l4Y91bUZbx3p57HKwhYJGrAJbNR%2F7wG1FpOSeP7i8JaU5iYJnl7stMOp%2FfczhClzLHqAditBWWvZFbLcFBfK9mXmir%2BChC24ZQRixDeaCfB3XT9CYAWeHV3WasDFcYDDTwNGRsHdtq0lVZSogCUEiOG2New774%2BTeQqMmAKKZwzKl5gc%2FXB80AbXaxj2RP1J950nfI905deg0BjiGllx3Agj0UP%2FdoHhsHggO59COAJcglMsv2zQTWZ%2BKpfexikuDqSs8%2FBs6aAvQOLrc2tbPlUWrEowDxXxveiY8apVpmbrl31r6Ah8DtkHefLmemVnx7yE518zjM7N2cJyt5BOgbv%2BA0IsrC1Qs7uPbYaJ1qotpiXI27208Yq3iH1tREfD5qm4bar2o3q1khqvcA0LrgOJMr5TgIKPLh6pPPCNoMMDNqb0GOqUBAhNXnyTiwprGbQEe09zkw9m7%2FpUaENzQx2g%2BFaZfD7OnmaFr6MBX1ncyD0W9P3oOzamnxrc4%2FGjJwm0J4Aa49wjz%2F7NiP3YE1tOwoqr0TpWDGfjaHe19fuk5AvbkXVWe34OUmnywMWPbtALq9RtvuL1rC%2BFBVj52Kdq5iW4VjkhThLVyZXjRMjbfhRlqTIFMQNPRGzsdifKX1OfPdyuCQR9dFv1c&X-Amz-Signature=28ddd49b304af40a0f6018a4e6efa384130705dcde95d1ccd018aebfbdbe9794&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNZYS3T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEaN2tpY5kzDat0R8gH8s6tdotjwMrRJlSceaG8tjiQIgUkAQ5htQPt%2BWt1uySMrCAa4D7gcdxPNCVDb76LZLFsMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6bTEItr7YfAJ0CCSrcA%2BhhR0MF8uVeU9uNEmi%2B8isMBS7Uz%2FvW2CobuQoUGqW284YPM0auSldl6aTlUOnfpbumRJ3QgfoC6ne2CjE1z4ZYORdXm2RSnSSholnzQ7AScpVUROqTEzJgojonvEs2K13hn09XS%2FVBLRrvMk1KxZShiTF%2Ft0xsKV%2FH9NWy5aWHKXabBvH%2FxI1wGh56UcJ5H5vfeacq5Z7mprzhFh5l4Y91bUZbx3p57HKwhYJGrAJbNR%2F7wG1FpOSeP7i8JaU5iYJnl7stMOp%2FfczhClzLHqAditBWWvZFbLcFBfK9mXmir%2BChC24ZQRixDeaCfB3XT9CYAWeHV3WasDFcYDDTwNGRsHdtq0lVZSogCUEiOG2New774%2BTeQqMmAKKZwzKl5gc%2FXB80AbXaxj2RP1J950nfI905deg0BjiGllx3Agj0UP%2FdoHhsHggO59COAJcglMsv2zQTWZ%2BKpfexikuDqSs8%2FBs6aAvQOLrc2tbPlUWrEowDxXxveiY8apVpmbrl31r6Ah8DtkHefLmemVnx7yE518zjM7N2cJyt5BOgbv%2BA0IsrC1Qs7uPbYaJ1qotpiXI27208Yq3iH1tREfD5qm4bar2o3q1khqvcA0LrgOJMr5TgIKPLh6pPPCNoMMDNqb0GOqUBAhNXnyTiwprGbQEe09zkw9m7%2FpUaENzQx2g%2BFaZfD7OnmaFr6MBX1ncyD0W9P3oOzamnxrc4%2FGjJwm0J4Aa49wjz%2F7NiP3YE1tOwoqr0TpWDGfjaHe19fuk5AvbkXVWe34OUmnywMWPbtALq9RtvuL1rC%2BFBVj52Kdq5iW4VjkhThLVyZXjRMjbfhRlqTIFMQNPRGzsdifKX1OfPdyuCQR9dFv1c&X-Amz-Signature=2df7702341b8723cb29ee82a864034ab3279dbbd716ce21f1a9de92334b66f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNZYS3T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEaN2tpY5kzDat0R8gH8s6tdotjwMrRJlSceaG8tjiQIgUkAQ5htQPt%2BWt1uySMrCAa4D7gcdxPNCVDb76LZLFsMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6bTEItr7YfAJ0CCSrcA%2BhhR0MF8uVeU9uNEmi%2B8isMBS7Uz%2FvW2CobuQoUGqW284YPM0auSldl6aTlUOnfpbumRJ3QgfoC6ne2CjE1z4ZYORdXm2RSnSSholnzQ7AScpVUROqTEzJgojonvEs2K13hn09XS%2FVBLRrvMk1KxZShiTF%2Ft0xsKV%2FH9NWy5aWHKXabBvH%2FxI1wGh56UcJ5H5vfeacq5Z7mprzhFh5l4Y91bUZbx3p57HKwhYJGrAJbNR%2F7wG1FpOSeP7i8JaU5iYJnl7stMOp%2FfczhClzLHqAditBWWvZFbLcFBfK9mXmir%2BChC24ZQRixDeaCfB3XT9CYAWeHV3WasDFcYDDTwNGRsHdtq0lVZSogCUEiOG2New774%2BTeQqMmAKKZwzKl5gc%2FXB80AbXaxj2RP1J950nfI905deg0BjiGllx3Agj0UP%2FdoHhsHggO59COAJcglMsv2zQTWZ%2BKpfexikuDqSs8%2FBs6aAvQOLrc2tbPlUWrEowDxXxveiY8apVpmbrl31r6Ah8DtkHefLmemVnx7yE518zjM7N2cJyt5BOgbv%2BA0IsrC1Qs7uPbYaJ1qotpiXI27208Yq3iH1tREfD5qm4bar2o3q1khqvcA0LrgOJMr5TgIKPLh6pPPCNoMMDNqb0GOqUBAhNXnyTiwprGbQEe09zkw9m7%2FpUaENzQx2g%2BFaZfD7OnmaFr6MBX1ncyD0W9P3oOzamnxrc4%2FGjJwm0J4Aa49wjz%2F7NiP3YE1tOwoqr0TpWDGfjaHe19fuk5AvbkXVWe34OUmnywMWPbtALq9RtvuL1rC%2BFBVj52Kdq5iW4VjkhThLVyZXjRMjbfhRlqTIFMQNPRGzsdifKX1OfPdyuCQR9dFv1c&X-Amz-Signature=1660b9292e1007779cddc7bc052b7600f742b503fb2155234028b720100fb0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNZYS3T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEaN2tpY5kzDat0R8gH8s6tdotjwMrRJlSceaG8tjiQIgUkAQ5htQPt%2BWt1uySMrCAa4D7gcdxPNCVDb76LZLFsMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6bTEItr7YfAJ0CCSrcA%2BhhR0MF8uVeU9uNEmi%2B8isMBS7Uz%2FvW2CobuQoUGqW284YPM0auSldl6aTlUOnfpbumRJ3QgfoC6ne2CjE1z4ZYORdXm2RSnSSholnzQ7AScpVUROqTEzJgojonvEs2K13hn09XS%2FVBLRrvMk1KxZShiTF%2Ft0xsKV%2FH9NWy5aWHKXabBvH%2FxI1wGh56UcJ5H5vfeacq5Z7mprzhFh5l4Y91bUZbx3p57HKwhYJGrAJbNR%2F7wG1FpOSeP7i8JaU5iYJnl7stMOp%2FfczhClzLHqAditBWWvZFbLcFBfK9mXmir%2BChC24ZQRixDeaCfB3XT9CYAWeHV3WasDFcYDDTwNGRsHdtq0lVZSogCUEiOG2New774%2BTeQqMmAKKZwzKl5gc%2FXB80AbXaxj2RP1J950nfI905deg0BjiGllx3Agj0UP%2FdoHhsHggO59COAJcglMsv2zQTWZ%2BKpfexikuDqSs8%2FBs6aAvQOLrc2tbPlUWrEowDxXxveiY8apVpmbrl31r6Ah8DtkHefLmemVnx7yE518zjM7N2cJyt5BOgbv%2BA0IsrC1Qs7uPbYaJ1qotpiXI27208Yq3iH1tREfD5qm4bar2o3q1khqvcA0LrgOJMr5TgIKPLh6pPPCNoMMDNqb0GOqUBAhNXnyTiwprGbQEe09zkw9m7%2FpUaENzQx2g%2BFaZfD7OnmaFr6MBX1ncyD0W9P3oOzamnxrc4%2FGjJwm0J4Aa49wjz%2F7NiP3YE1tOwoqr0TpWDGfjaHe19fuk5AvbkXVWe34OUmnywMWPbtALq9RtvuL1rC%2BFBVj52Kdq5iW4VjkhThLVyZXjRMjbfhRlqTIFMQNPRGzsdifKX1OfPdyuCQR9dFv1c&X-Amz-Signature=226ad288345db3a942e0872200b3f62750ed4ee02d23b9e2ac55c93af733267d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNZYS3T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEaN2tpY5kzDat0R8gH8s6tdotjwMrRJlSceaG8tjiQIgUkAQ5htQPt%2BWt1uySMrCAa4D7gcdxPNCVDb76LZLFsMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6bTEItr7YfAJ0CCSrcA%2BhhR0MF8uVeU9uNEmi%2B8isMBS7Uz%2FvW2CobuQoUGqW284YPM0auSldl6aTlUOnfpbumRJ3QgfoC6ne2CjE1z4ZYORdXm2RSnSSholnzQ7AScpVUROqTEzJgojonvEs2K13hn09XS%2FVBLRrvMk1KxZShiTF%2Ft0xsKV%2FH9NWy5aWHKXabBvH%2FxI1wGh56UcJ5H5vfeacq5Z7mprzhFh5l4Y91bUZbx3p57HKwhYJGrAJbNR%2F7wG1FpOSeP7i8JaU5iYJnl7stMOp%2FfczhClzLHqAditBWWvZFbLcFBfK9mXmir%2BChC24ZQRixDeaCfB3XT9CYAWeHV3WasDFcYDDTwNGRsHdtq0lVZSogCUEiOG2New774%2BTeQqMmAKKZwzKl5gc%2FXB80AbXaxj2RP1J950nfI905deg0BjiGllx3Agj0UP%2FdoHhsHggO59COAJcglMsv2zQTWZ%2BKpfexikuDqSs8%2FBs6aAvQOLrc2tbPlUWrEowDxXxveiY8apVpmbrl31r6Ah8DtkHefLmemVnx7yE518zjM7N2cJyt5BOgbv%2BA0IsrC1Qs7uPbYaJ1qotpiXI27208Yq3iH1tREfD5qm4bar2o3q1khqvcA0LrgOJMr5TgIKPLh6pPPCNoMMDNqb0GOqUBAhNXnyTiwprGbQEe09zkw9m7%2FpUaENzQx2g%2BFaZfD7OnmaFr6MBX1ncyD0W9P3oOzamnxrc4%2FGjJwm0J4Aa49wjz%2F7NiP3YE1tOwoqr0TpWDGfjaHe19fuk5AvbkXVWe34OUmnywMWPbtALq9RtvuL1rC%2BFBVj52Kdq5iW4VjkhThLVyZXjRMjbfhRlqTIFMQNPRGzsdifKX1OfPdyuCQR9dFv1c&X-Amz-Signature=75cd79a536503070d5dcc81b6172b20383e601b8c25fd5e56e9f388d853576ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
