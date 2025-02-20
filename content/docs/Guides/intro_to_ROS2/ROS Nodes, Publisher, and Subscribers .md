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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGXW7ER%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfAPszUTd7zvJ4%2FJ1LxAc2unbtoPxV4EcBwoQ3clTYAiEArYzGyD%2FXP4itXtFcMFuvQAPo4qTQGI4KAFaTrLWwTpwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzreg8gmrfa3E%2FjkSrcA50W5TWRoMz9GUS926cZofx4DgyUM8CbyeDC7ztIZY6ztMPm%2FjUZuJgTI1K520rXFbJl31ZavZ%2FInRIfxScr75MipG6t6gbh1%2B7kPgUTBowLrVU22Zx3DeVLiIbsBCb5gM%2F2FbPAGx270HpZaswr7RVY6WLAqhe%2FPnWZ5r%2F%2F%2FgN5XIGcn6UgHwzRRNDwaFvq0gOp8hMrBKhVhktg3lnMSrga2Yxo%2FeuCWeYryQKCSBaC3ZoZWFHfWBTeb2OBRtznjrUGCO7C7FXoGF3m9ICM%2FCpH%2Fg2EUC5xxrXPmtoYbJ9%2FxCqUhbBIQgI4fcaoYBy6ewC%2B85prwANDHb3TpNHRC2N%2F29lgesMll99CS3g8AIDSgfz%2F3Fy4NpejRUQsVegwGC2TYk2xkIbTkirjvvoS%2FKAymvPCKUsriW7W1q72DyCMSDSeq219CdXwkXSK9hjOH1O%2FXMhMsl7Wv9Vs1ObI3fUZj4SM%2Fm9ilY6i8vW91Ru9b4ZbpLOG7wMlRriT5SFkPSLp5yb083nGloS7RKA9%2BnmXr6D%2BlA20V8v%2BOvmXxd1Znitiy%2BpdYxgGnYfhkg2vbr3As5dVeJ9ME2aGqaJByyqFftaim%2FUZJWmTSnUnnHizLc7kb3Ou7KZqP4QoMMON3r0GOqUBX1G9Oy3B9n96RLh8pv3Xp1M0iOyhBU%2BKS%2BXy4yZllKys7bgSU3rothEp7g5pcLOb3rfQNNeswVEEEbxOHegsTwGZsnPfDhf86kC8grpr46N3wZCc7oXeh204bJup7N%2BVQRPMVeWutFeqlAn1BEYXyJzpP1Zatu0%2FFbLSgHfe2ZP7fSxUCOHU1dggcHn8uXUP8MqEFsXy%2FV7eQUP%2F4vCP5bh%2FbOR4&X-Amz-Signature=beac9ce376dd205e3138747ec9e92e3e1be77722073c840732700d87ba862895&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGXW7ER%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfAPszUTd7zvJ4%2FJ1LxAc2unbtoPxV4EcBwoQ3clTYAiEArYzGyD%2FXP4itXtFcMFuvQAPo4qTQGI4KAFaTrLWwTpwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzreg8gmrfa3E%2FjkSrcA50W5TWRoMz9GUS926cZofx4DgyUM8CbyeDC7ztIZY6ztMPm%2FjUZuJgTI1K520rXFbJl31ZavZ%2FInRIfxScr75MipG6t6gbh1%2B7kPgUTBowLrVU22Zx3DeVLiIbsBCb5gM%2F2FbPAGx270HpZaswr7RVY6WLAqhe%2FPnWZ5r%2F%2F%2FgN5XIGcn6UgHwzRRNDwaFvq0gOp8hMrBKhVhktg3lnMSrga2Yxo%2FeuCWeYryQKCSBaC3ZoZWFHfWBTeb2OBRtznjrUGCO7C7FXoGF3m9ICM%2FCpH%2Fg2EUC5xxrXPmtoYbJ9%2FxCqUhbBIQgI4fcaoYBy6ewC%2B85prwANDHb3TpNHRC2N%2F29lgesMll99CS3g8AIDSgfz%2F3Fy4NpejRUQsVegwGC2TYk2xkIbTkirjvvoS%2FKAymvPCKUsriW7W1q72DyCMSDSeq219CdXwkXSK9hjOH1O%2FXMhMsl7Wv9Vs1ObI3fUZj4SM%2Fm9ilY6i8vW91Ru9b4ZbpLOG7wMlRriT5SFkPSLp5yb083nGloS7RKA9%2BnmXr6D%2BlA20V8v%2BOvmXxd1Znitiy%2BpdYxgGnYfhkg2vbr3As5dVeJ9ME2aGqaJByyqFftaim%2FUZJWmTSnUnnHizLc7kb3Ou7KZqP4QoMMON3r0GOqUBX1G9Oy3B9n96RLh8pv3Xp1M0iOyhBU%2BKS%2BXy4yZllKys7bgSU3rothEp7g5pcLOb3rfQNNeswVEEEbxOHegsTwGZsnPfDhf86kC8grpr46N3wZCc7oXeh204bJup7N%2BVQRPMVeWutFeqlAn1BEYXyJzpP1Zatu0%2FFbLSgHfe2ZP7fSxUCOHU1dggcHn8uXUP8MqEFsXy%2FV7eQUP%2F4vCP5bh%2FbOR4&X-Amz-Signature=6bac0ce269490ef9b4b4e66bab96509c050b4c050f7b121bff43a882f526011c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGXW7ER%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfAPszUTd7zvJ4%2FJ1LxAc2unbtoPxV4EcBwoQ3clTYAiEArYzGyD%2FXP4itXtFcMFuvQAPo4qTQGI4KAFaTrLWwTpwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzreg8gmrfa3E%2FjkSrcA50W5TWRoMz9GUS926cZofx4DgyUM8CbyeDC7ztIZY6ztMPm%2FjUZuJgTI1K520rXFbJl31ZavZ%2FInRIfxScr75MipG6t6gbh1%2B7kPgUTBowLrVU22Zx3DeVLiIbsBCb5gM%2F2FbPAGx270HpZaswr7RVY6WLAqhe%2FPnWZ5r%2F%2F%2FgN5XIGcn6UgHwzRRNDwaFvq0gOp8hMrBKhVhktg3lnMSrga2Yxo%2FeuCWeYryQKCSBaC3ZoZWFHfWBTeb2OBRtznjrUGCO7C7FXoGF3m9ICM%2FCpH%2Fg2EUC5xxrXPmtoYbJ9%2FxCqUhbBIQgI4fcaoYBy6ewC%2B85prwANDHb3TpNHRC2N%2F29lgesMll99CS3g8AIDSgfz%2F3Fy4NpejRUQsVegwGC2TYk2xkIbTkirjvvoS%2FKAymvPCKUsriW7W1q72DyCMSDSeq219CdXwkXSK9hjOH1O%2FXMhMsl7Wv9Vs1ObI3fUZj4SM%2Fm9ilY6i8vW91Ru9b4ZbpLOG7wMlRriT5SFkPSLp5yb083nGloS7RKA9%2BnmXr6D%2BlA20V8v%2BOvmXxd1Znitiy%2BpdYxgGnYfhkg2vbr3As5dVeJ9ME2aGqaJByyqFftaim%2FUZJWmTSnUnnHizLc7kb3Ou7KZqP4QoMMON3r0GOqUBX1G9Oy3B9n96RLh8pv3Xp1M0iOyhBU%2BKS%2BXy4yZllKys7bgSU3rothEp7g5pcLOb3rfQNNeswVEEEbxOHegsTwGZsnPfDhf86kC8grpr46N3wZCc7oXeh204bJup7N%2BVQRPMVeWutFeqlAn1BEYXyJzpP1Zatu0%2FFbLSgHfe2ZP7fSxUCOHU1dggcHn8uXUP8MqEFsXy%2FV7eQUP%2F4vCP5bh%2FbOR4&X-Amz-Signature=de7b9e22d9860e962d66a6a2711a29006e845e54628f364dfa96ac6ba5067df6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGXW7ER%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfAPszUTd7zvJ4%2FJ1LxAc2unbtoPxV4EcBwoQ3clTYAiEArYzGyD%2FXP4itXtFcMFuvQAPo4qTQGI4KAFaTrLWwTpwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzreg8gmrfa3E%2FjkSrcA50W5TWRoMz9GUS926cZofx4DgyUM8CbyeDC7ztIZY6ztMPm%2FjUZuJgTI1K520rXFbJl31ZavZ%2FInRIfxScr75MipG6t6gbh1%2B7kPgUTBowLrVU22Zx3DeVLiIbsBCb5gM%2F2FbPAGx270HpZaswr7RVY6WLAqhe%2FPnWZ5r%2F%2F%2FgN5XIGcn6UgHwzRRNDwaFvq0gOp8hMrBKhVhktg3lnMSrga2Yxo%2FeuCWeYryQKCSBaC3ZoZWFHfWBTeb2OBRtznjrUGCO7C7FXoGF3m9ICM%2FCpH%2Fg2EUC5xxrXPmtoYbJ9%2FxCqUhbBIQgI4fcaoYBy6ewC%2B85prwANDHb3TpNHRC2N%2F29lgesMll99CS3g8AIDSgfz%2F3Fy4NpejRUQsVegwGC2TYk2xkIbTkirjvvoS%2FKAymvPCKUsriW7W1q72DyCMSDSeq219CdXwkXSK9hjOH1O%2FXMhMsl7Wv9Vs1ObI3fUZj4SM%2Fm9ilY6i8vW91Ru9b4ZbpLOG7wMlRriT5SFkPSLp5yb083nGloS7RKA9%2BnmXr6D%2BlA20V8v%2BOvmXxd1Znitiy%2BpdYxgGnYfhkg2vbr3As5dVeJ9ME2aGqaJByyqFftaim%2FUZJWmTSnUnnHizLc7kb3Ou7KZqP4QoMMON3r0GOqUBX1G9Oy3B9n96RLh8pv3Xp1M0iOyhBU%2BKS%2BXy4yZllKys7bgSU3rothEp7g5pcLOb3rfQNNeswVEEEbxOHegsTwGZsnPfDhf86kC8grpr46N3wZCc7oXeh204bJup7N%2BVQRPMVeWutFeqlAn1BEYXyJzpP1Zatu0%2FFbLSgHfe2ZP7fSxUCOHU1dggcHn8uXUP8MqEFsXy%2FV7eQUP%2F4vCP5bh%2FbOR4&X-Amz-Signature=da868db2943abc270205ac9b702d7a3d59d9be07f0d8f846c39052a8a9d49ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGXW7ER%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfAPszUTd7zvJ4%2FJ1LxAc2unbtoPxV4EcBwoQ3clTYAiEArYzGyD%2FXP4itXtFcMFuvQAPo4qTQGI4KAFaTrLWwTpwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzreg8gmrfa3E%2FjkSrcA50W5TWRoMz9GUS926cZofx4DgyUM8CbyeDC7ztIZY6ztMPm%2FjUZuJgTI1K520rXFbJl31ZavZ%2FInRIfxScr75MipG6t6gbh1%2B7kPgUTBowLrVU22Zx3DeVLiIbsBCb5gM%2F2FbPAGx270HpZaswr7RVY6WLAqhe%2FPnWZ5r%2F%2F%2FgN5XIGcn6UgHwzRRNDwaFvq0gOp8hMrBKhVhktg3lnMSrga2Yxo%2FeuCWeYryQKCSBaC3ZoZWFHfWBTeb2OBRtznjrUGCO7C7FXoGF3m9ICM%2FCpH%2Fg2EUC5xxrXPmtoYbJ9%2FxCqUhbBIQgI4fcaoYBy6ewC%2B85prwANDHb3TpNHRC2N%2F29lgesMll99CS3g8AIDSgfz%2F3Fy4NpejRUQsVegwGC2TYk2xkIbTkirjvvoS%2FKAymvPCKUsriW7W1q72DyCMSDSeq219CdXwkXSK9hjOH1O%2FXMhMsl7Wv9Vs1ObI3fUZj4SM%2Fm9ilY6i8vW91Ru9b4ZbpLOG7wMlRriT5SFkPSLp5yb083nGloS7RKA9%2BnmXr6D%2BlA20V8v%2BOvmXxd1Znitiy%2BpdYxgGnYfhkg2vbr3As5dVeJ9ME2aGqaJByyqFftaim%2FUZJWmTSnUnnHizLc7kb3Ou7KZqP4QoMMON3r0GOqUBX1G9Oy3B9n96RLh8pv3Xp1M0iOyhBU%2BKS%2BXy4yZllKys7bgSU3rothEp7g5pcLOb3rfQNNeswVEEEbxOHegsTwGZsnPfDhf86kC8grpr46N3wZCc7oXeh204bJup7N%2BVQRPMVeWutFeqlAn1BEYXyJzpP1Zatu0%2FFbLSgHfe2ZP7fSxUCOHU1dggcHn8uXUP8MqEFsXy%2FV7eQUP%2F4vCP5bh%2FbOR4&X-Amz-Signature=f5ea5dc118ecaf73b4501d06a9405b3d00f266dc231d2455991d95ded776c683&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGXW7ER%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfAPszUTd7zvJ4%2FJ1LxAc2unbtoPxV4EcBwoQ3clTYAiEArYzGyD%2FXP4itXtFcMFuvQAPo4qTQGI4KAFaTrLWwTpwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzreg8gmrfa3E%2FjkSrcA50W5TWRoMz9GUS926cZofx4DgyUM8CbyeDC7ztIZY6ztMPm%2FjUZuJgTI1K520rXFbJl31ZavZ%2FInRIfxScr75MipG6t6gbh1%2B7kPgUTBowLrVU22Zx3DeVLiIbsBCb5gM%2F2FbPAGx270HpZaswr7RVY6WLAqhe%2FPnWZ5r%2F%2F%2FgN5XIGcn6UgHwzRRNDwaFvq0gOp8hMrBKhVhktg3lnMSrga2Yxo%2FeuCWeYryQKCSBaC3ZoZWFHfWBTeb2OBRtznjrUGCO7C7FXoGF3m9ICM%2FCpH%2Fg2EUC5xxrXPmtoYbJ9%2FxCqUhbBIQgI4fcaoYBy6ewC%2B85prwANDHb3TpNHRC2N%2F29lgesMll99CS3g8AIDSgfz%2F3Fy4NpejRUQsVegwGC2TYk2xkIbTkirjvvoS%2FKAymvPCKUsriW7W1q72DyCMSDSeq219CdXwkXSK9hjOH1O%2FXMhMsl7Wv9Vs1ObI3fUZj4SM%2Fm9ilY6i8vW91Ru9b4ZbpLOG7wMlRriT5SFkPSLp5yb083nGloS7RKA9%2BnmXr6D%2BlA20V8v%2BOvmXxd1Znitiy%2BpdYxgGnYfhkg2vbr3As5dVeJ9ME2aGqaJByyqFftaim%2FUZJWmTSnUnnHizLc7kb3Ou7KZqP4QoMMON3r0GOqUBX1G9Oy3B9n96RLh8pv3Xp1M0iOyhBU%2BKS%2BXy4yZllKys7bgSU3rothEp7g5pcLOb3rfQNNeswVEEEbxOHegsTwGZsnPfDhf86kC8grpr46N3wZCc7oXeh204bJup7N%2BVQRPMVeWutFeqlAn1BEYXyJzpP1Zatu0%2FFbLSgHfe2ZP7fSxUCOHU1dggcHn8uXUP8MqEFsXy%2FV7eQUP%2F4vCP5bh%2FbOR4&X-Amz-Signature=7583cb5e8073114b901529b580b12f2df5fe9a4dae1996a016f9ac443261ea81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGXW7ER%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfAPszUTd7zvJ4%2FJ1LxAc2unbtoPxV4EcBwoQ3clTYAiEArYzGyD%2FXP4itXtFcMFuvQAPo4qTQGI4KAFaTrLWwTpwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzreg8gmrfa3E%2FjkSrcA50W5TWRoMz9GUS926cZofx4DgyUM8CbyeDC7ztIZY6ztMPm%2FjUZuJgTI1K520rXFbJl31ZavZ%2FInRIfxScr75MipG6t6gbh1%2B7kPgUTBowLrVU22Zx3DeVLiIbsBCb5gM%2F2FbPAGx270HpZaswr7RVY6WLAqhe%2FPnWZ5r%2F%2F%2FgN5XIGcn6UgHwzRRNDwaFvq0gOp8hMrBKhVhktg3lnMSrga2Yxo%2FeuCWeYryQKCSBaC3ZoZWFHfWBTeb2OBRtznjrUGCO7C7FXoGF3m9ICM%2FCpH%2Fg2EUC5xxrXPmtoYbJ9%2FxCqUhbBIQgI4fcaoYBy6ewC%2B85prwANDHb3TpNHRC2N%2F29lgesMll99CS3g8AIDSgfz%2F3Fy4NpejRUQsVegwGC2TYk2xkIbTkirjvvoS%2FKAymvPCKUsriW7W1q72DyCMSDSeq219CdXwkXSK9hjOH1O%2FXMhMsl7Wv9Vs1ObI3fUZj4SM%2Fm9ilY6i8vW91Ru9b4ZbpLOG7wMlRriT5SFkPSLp5yb083nGloS7RKA9%2BnmXr6D%2BlA20V8v%2BOvmXxd1Znitiy%2BpdYxgGnYfhkg2vbr3As5dVeJ9ME2aGqaJByyqFftaim%2FUZJWmTSnUnnHizLc7kb3Ou7KZqP4QoMMON3r0GOqUBX1G9Oy3B9n96RLh8pv3Xp1M0iOyhBU%2BKS%2BXy4yZllKys7bgSU3rothEp7g5pcLOb3rfQNNeswVEEEbxOHegsTwGZsnPfDhf86kC8grpr46N3wZCc7oXeh204bJup7N%2BVQRPMVeWutFeqlAn1BEYXyJzpP1Zatu0%2FFbLSgHfe2ZP7fSxUCOHU1dggcHn8uXUP8MqEFsXy%2FV7eQUP%2F4vCP5bh%2FbOR4&X-Amz-Signature=c659b66f9f89626ffb76aff93a1ddb5134b6dfd357b7cc019be6b3751fc9ee08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGXW7ER%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfAPszUTd7zvJ4%2FJ1LxAc2unbtoPxV4EcBwoQ3clTYAiEArYzGyD%2FXP4itXtFcMFuvQAPo4qTQGI4KAFaTrLWwTpwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzreg8gmrfa3E%2FjkSrcA50W5TWRoMz9GUS926cZofx4DgyUM8CbyeDC7ztIZY6ztMPm%2FjUZuJgTI1K520rXFbJl31ZavZ%2FInRIfxScr75MipG6t6gbh1%2B7kPgUTBowLrVU22Zx3DeVLiIbsBCb5gM%2F2FbPAGx270HpZaswr7RVY6WLAqhe%2FPnWZ5r%2F%2F%2FgN5XIGcn6UgHwzRRNDwaFvq0gOp8hMrBKhVhktg3lnMSrga2Yxo%2FeuCWeYryQKCSBaC3ZoZWFHfWBTeb2OBRtznjrUGCO7C7FXoGF3m9ICM%2FCpH%2Fg2EUC5xxrXPmtoYbJ9%2FxCqUhbBIQgI4fcaoYBy6ewC%2B85prwANDHb3TpNHRC2N%2F29lgesMll99CS3g8AIDSgfz%2F3Fy4NpejRUQsVegwGC2TYk2xkIbTkirjvvoS%2FKAymvPCKUsriW7W1q72DyCMSDSeq219CdXwkXSK9hjOH1O%2FXMhMsl7Wv9Vs1ObI3fUZj4SM%2Fm9ilY6i8vW91Ru9b4ZbpLOG7wMlRriT5SFkPSLp5yb083nGloS7RKA9%2BnmXr6D%2BlA20V8v%2BOvmXxd1Znitiy%2BpdYxgGnYfhkg2vbr3As5dVeJ9ME2aGqaJByyqFftaim%2FUZJWmTSnUnnHizLc7kb3Ou7KZqP4QoMMON3r0GOqUBX1G9Oy3B9n96RLh8pv3Xp1M0iOyhBU%2BKS%2BXy4yZllKys7bgSU3rothEp7g5pcLOb3rfQNNeswVEEEbxOHegsTwGZsnPfDhf86kC8grpr46N3wZCc7oXeh204bJup7N%2BVQRPMVeWutFeqlAn1BEYXyJzpP1Zatu0%2FFbLSgHfe2ZP7fSxUCOHU1dggcHn8uXUP8MqEFsXy%2FV7eQUP%2F4vCP5bh%2FbOR4&X-Amz-Signature=dee1485d82ec4c9a19a26db2d1a785f8abc7bc046f1298e25e0ae67d5863e11d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
