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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUMHRU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHBs9hlpSWHzjUETqpCJmVspByGXXreUQ9FSj3p8tmq2AiEA7JTIXxWKCsjS2Qep%2F2a%2BZAsCZZ2aiWHrPMNEjX1iZNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOIu1fwtva5Ek9rCrcA4VjtVQdnHdnRwNJsBxbVa4lLNysQmLUBlzd8PQcsQ%2F6TsK%2FEv8CAYrEWEZaJ0pcT7Irq7egnryr0jSHPXuV60PtUhAhvJkhi5BV3ticMpgbC9oxWcn3tFbXgFjvZ%2FHuuS4P9Z3nE7fCFRr9awLGOY8hnHFVvtcShhgOHO1IY%2F9R4WSwwWFEBYkuuOAPapMNXR4MvAjLluABkTAAUNGowl%2BXb%2B7a6ixikPt%2FcmUdwUWH9hC%2B8rgHUGBhscAzZwBLOVeP0jCBKHKnwctp7CFaRklPBVmmBkh%2BMZT2E7UpHWIxDK62YLE6ajZaokU8FRBdOfKxw3Tazfgq8kW5FYF6gLfFGbkC9XbVg3vDJCbDjesKT1TBptjmJL3PvkJP%2BKTAv8i9PatHE8KYeBrBFWgTGJpJbMIfqtCeEL0%2FXjkooe2OoNWB1bd1%2FjJw46%2FaDn3ca9vxk%2Bbiy%2BnuY4zMw2VfrW%2FQ9ASJOhytpc%2F%2Fc8QdTkKxUHyogmYjHS7vM%2FBDsTjiDRa2SCL3DcuXTMw5BXsELmSNT54Zaw0OqeX0iUvTUkBNlediyyun6w66dizDWvdm%2BiShR2UH7AWUdJzOWQAvCja8RXFfdjNZSUVUwx8sEs4l8%2BW%2FjPVpVDLdz3GTMJz7lr0GOqUB5ZqcCX3ol4TDuXlvK4vSKEXbcPD5z0rpoPtXERaWAu4p3%2FpdHb55TGjUeyxH%2FFM%2FsSNoSvpQR%2FKN5f%2FsPJQcScEEgVqBmUHglX%2B8K29OCQqECwZQ4SX%2FDSxvVElBuSfKA4CzzRFDrtMSHGS9SiE3n%2BhS%2Fnu5EoBnvCWoILulSFKiMpOXEgHmjbmC8gvi%2FqbY42t9aSAJJomSzp0uorJh391qgOEc&X-Amz-Signature=fca60ce7d7bac58f6c02438b1a759b83c5602e7e49872c64965d8b6145649e53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUMHRU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHBs9hlpSWHzjUETqpCJmVspByGXXreUQ9FSj3p8tmq2AiEA7JTIXxWKCsjS2Qep%2F2a%2BZAsCZZ2aiWHrPMNEjX1iZNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOIu1fwtva5Ek9rCrcA4VjtVQdnHdnRwNJsBxbVa4lLNysQmLUBlzd8PQcsQ%2F6TsK%2FEv8CAYrEWEZaJ0pcT7Irq7egnryr0jSHPXuV60PtUhAhvJkhi5BV3ticMpgbC9oxWcn3tFbXgFjvZ%2FHuuS4P9Z3nE7fCFRr9awLGOY8hnHFVvtcShhgOHO1IY%2F9R4WSwwWFEBYkuuOAPapMNXR4MvAjLluABkTAAUNGowl%2BXb%2B7a6ixikPt%2FcmUdwUWH9hC%2B8rgHUGBhscAzZwBLOVeP0jCBKHKnwctp7CFaRklPBVmmBkh%2BMZT2E7UpHWIxDK62YLE6ajZaokU8FRBdOfKxw3Tazfgq8kW5FYF6gLfFGbkC9XbVg3vDJCbDjesKT1TBptjmJL3PvkJP%2BKTAv8i9PatHE8KYeBrBFWgTGJpJbMIfqtCeEL0%2FXjkooe2OoNWB1bd1%2FjJw46%2FaDn3ca9vxk%2Bbiy%2BnuY4zMw2VfrW%2FQ9ASJOhytpc%2F%2Fc8QdTkKxUHyogmYjHS7vM%2FBDsTjiDRa2SCL3DcuXTMw5BXsELmSNT54Zaw0OqeX0iUvTUkBNlediyyun6w66dizDWvdm%2BiShR2UH7AWUdJzOWQAvCja8RXFfdjNZSUVUwx8sEs4l8%2BW%2FjPVpVDLdz3GTMJz7lr0GOqUB5ZqcCX3ol4TDuXlvK4vSKEXbcPD5z0rpoPtXERaWAu4p3%2FpdHb55TGjUeyxH%2FFM%2FsSNoSvpQR%2FKN5f%2FsPJQcScEEgVqBmUHglX%2B8K29OCQqECwZQ4SX%2FDSxvVElBuSfKA4CzzRFDrtMSHGS9SiE3n%2BhS%2Fnu5EoBnvCWoILulSFKiMpOXEgHmjbmC8gvi%2FqbY42t9aSAJJomSzp0uorJh391qgOEc&X-Amz-Signature=69ca2d167d96ff3f4364c7fc71ff86c12d148abdb8add2b5e39c1a8185b21409&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUMHRU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHBs9hlpSWHzjUETqpCJmVspByGXXreUQ9FSj3p8tmq2AiEA7JTIXxWKCsjS2Qep%2F2a%2BZAsCZZ2aiWHrPMNEjX1iZNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOIu1fwtva5Ek9rCrcA4VjtVQdnHdnRwNJsBxbVa4lLNysQmLUBlzd8PQcsQ%2F6TsK%2FEv8CAYrEWEZaJ0pcT7Irq7egnryr0jSHPXuV60PtUhAhvJkhi5BV3ticMpgbC9oxWcn3tFbXgFjvZ%2FHuuS4P9Z3nE7fCFRr9awLGOY8hnHFVvtcShhgOHO1IY%2F9R4WSwwWFEBYkuuOAPapMNXR4MvAjLluABkTAAUNGowl%2BXb%2B7a6ixikPt%2FcmUdwUWH9hC%2B8rgHUGBhscAzZwBLOVeP0jCBKHKnwctp7CFaRklPBVmmBkh%2BMZT2E7UpHWIxDK62YLE6ajZaokU8FRBdOfKxw3Tazfgq8kW5FYF6gLfFGbkC9XbVg3vDJCbDjesKT1TBptjmJL3PvkJP%2BKTAv8i9PatHE8KYeBrBFWgTGJpJbMIfqtCeEL0%2FXjkooe2OoNWB1bd1%2FjJw46%2FaDn3ca9vxk%2Bbiy%2BnuY4zMw2VfrW%2FQ9ASJOhytpc%2F%2Fc8QdTkKxUHyogmYjHS7vM%2FBDsTjiDRa2SCL3DcuXTMw5BXsELmSNT54Zaw0OqeX0iUvTUkBNlediyyun6w66dizDWvdm%2BiShR2UH7AWUdJzOWQAvCja8RXFfdjNZSUVUwx8sEs4l8%2BW%2FjPVpVDLdz3GTMJz7lr0GOqUB5ZqcCX3ol4TDuXlvK4vSKEXbcPD5z0rpoPtXERaWAu4p3%2FpdHb55TGjUeyxH%2FFM%2FsSNoSvpQR%2FKN5f%2FsPJQcScEEgVqBmUHglX%2B8K29OCQqECwZQ4SX%2FDSxvVElBuSfKA4CzzRFDrtMSHGS9SiE3n%2BhS%2Fnu5EoBnvCWoILulSFKiMpOXEgHmjbmC8gvi%2FqbY42t9aSAJJomSzp0uorJh391qgOEc&X-Amz-Signature=8530ac57bdbdd6ff0c75c63368d5a3d320a0e6fff86ee0f00b56dfacfab6df42&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUMHRU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHBs9hlpSWHzjUETqpCJmVspByGXXreUQ9FSj3p8tmq2AiEA7JTIXxWKCsjS2Qep%2F2a%2BZAsCZZ2aiWHrPMNEjX1iZNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOIu1fwtva5Ek9rCrcA4VjtVQdnHdnRwNJsBxbVa4lLNysQmLUBlzd8PQcsQ%2F6TsK%2FEv8CAYrEWEZaJ0pcT7Irq7egnryr0jSHPXuV60PtUhAhvJkhi5BV3ticMpgbC9oxWcn3tFbXgFjvZ%2FHuuS4P9Z3nE7fCFRr9awLGOY8hnHFVvtcShhgOHO1IY%2F9R4WSwwWFEBYkuuOAPapMNXR4MvAjLluABkTAAUNGowl%2BXb%2B7a6ixikPt%2FcmUdwUWH9hC%2B8rgHUGBhscAzZwBLOVeP0jCBKHKnwctp7CFaRklPBVmmBkh%2BMZT2E7UpHWIxDK62YLE6ajZaokU8FRBdOfKxw3Tazfgq8kW5FYF6gLfFGbkC9XbVg3vDJCbDjesKT1TBptjmJL3PvkJP%2BKTAv8i9PatHE8KYeBrBFWgTGJpJbMIfqtCeEL0%2FXjkooe2OoNWB1bd1%2FjJw46%2FaDn3ca9vxk%2Bbiy%2BnuY4zMw2VfrW%2FQ9ASJOhytpc%2F%2Fc8QdTkKxUHyogmYjHS7vM%2FBDsTjiDRa2SCL3DcuXTMw5BXsELmSNT54Zaw0OqeX0iUvTUkBNlediyyun6w66dizDWvdm%2BiShR2UH7AWUdJzOWQAvCja8RXFfdjNZSUVUwx8sEs4l8%2BW%2FjPVpVDLdz3GTMJz7lr0GOqUB5ZqcCX3ol4TDuXlvK4vSKEXbcPD5z0rpoPtXERaWAu4p3%2FpdHb55TGjUeyxH%2FFM%2FsSNoSvpQR%2FKN5f%2FsPJQcScEEgVqBmUHglX%2B8K29OCQqECwZQ4SX%2FDSxvVElBuSfKA4CzzRFDrtMSHGS9SiE3n%2BhS%2Fnu5EoBnvCWoILulSFKiMpOXEgHmjbmC8gvi%2FqbY42t9aSAJJomSzp0uorJh391qgOEc&X-Amz-Signature=deccec3609b3e4c55e951e9ea2bd2d8cbfb01e862da555fa3ce5bddc2cd92190&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUMHRU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHBs9hlpSWHzjUETqpCJmVspByGXXreUQ9FSj3p8tmq2AiEA7JTIXxWKCsjS2Qep%2F2a%2BZAsCZZ2aiWHrPMNEjX1iZNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOIu1fwtva5Ek9rCrcA4VjtVQdnHdnRwNJsBxbVa4lLNysQmLUBlzd8PQcsQ%2F6TsK%2FEv8CAYrEWEZaJ0pcT7Irq7egnryr0jSHPXuV60PtUhAhvJkhi5BV3ticMpgbC9oxWcn3tFbXgFjvZ%2FHuuS4P9Z3nE7fCFRr9awLGOY8hnHFVvtcShhgOHO1IY%2F9R4WSwwWFEBYkuuOAPapMNXR4MvAjLluABkTAAUNGowl%2BXb%2B7a6ixikPt%2FcmUdwUWH9hC%2B8rgHUGBhscAzZwBLOVeP0jCBKHKnwctp7CFaRklPBVmmBkh%2BMZT2E7UpHWIxDK62YLE6ajZaokU8FRBdOfKxw3Tazfgq8kW5FYF6gLfFGbkC9XbVg3vDJCbDjesKT1TBptjmJL3PvkJP%2BKTAv8i9PatHE8KYeBrBFWgTGJpJbMIfqtCeEL0%2FXjkooe2OoNWB1bd1%2FjJw46%2FaDn3ca9vxk%2Bbiy%2BnuY4zMw2VfrW%2FQ9ASJOhytpc%2F%2Fc8QdTkKxUHyogmYjHS7vM%2FBDsTjiDRa2SCL3DcuXTMw5BXsELmSNT54Zaw0OqeX0iUvTUkBNlediyyun6w66dizDWvdm%2BiShR2UH7AWUdJzOWQAvCja8RXFfdjNZSUVUwx8sEs4l8%2BW%2FjPVpVDLdz3GTMJz7lr0GOqUB5ZqcCX3ol4TDuXlvK4vSKEXbcPD5z0rpoPtXERaWAu4p3%2FpdHb55TGjUeyxH%2FFM%2FsSNoSvpQR%2FKN5f%2FsPJQcScEEgVqBmUHglX%2B8K29OCQqECwZQ4SX%2FDSxvVElBuSfKA4CzzRFDrtMSHGS9SiE3n%2BhS%2Fnu5EoBnvCWoILulSFKiMpOXEgHmjbmC8gvi%2FqbY42t9aSAJJomSzp0uorJh391qgOEc&X-Amz-Signature=f6a9ca8644c039a3c49666538eb7a4e318a9f6131e9a564aced53f7a30f768b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUMHRU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHBs9hlpSWHzjUETqpCJmVspByGXXreUQ9FSj3p8tmq2AiEA7JTIXxWKCsjS2Qep%2F2a%2BZAsCZZ2aiWHrPMNEjX1iZNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOIu1fwtva5Ek9rCrcA4VjtVQdnHdnRwNJsBxbVa4lLNysQmLUBlzd8PQcsQ%2F6TsK%2FEv8CAYrEWEZaJ0pcT7Irq7egnryr0jSHPXuV60PtUhAhvJkhi5BV3ticMpgbC9oxWcn3tFbXgFjvZ%2FHuuS4P9Z3nE7fCFRr9awLGOY8hnHFVvtcShhgOHO1IY%2F9R4WSwwWFEBYkuuOAPapMNXR4MvAjLluABkTAAUNGowl%2BXb%2B7a6ixikPt%2FcmUdwUWH9hC%2B8rgHUGBhscAzZwBLOVeP0jCBKHKnwctp7CFaRklPBVmmBkh%2BMZT2E7UpHWIxDK62YLE6ajZaokU8FRBdOfKxw3Tazfgq8kW5FYF6gLfFGbkC9XbVg3vDJCbDjesKT1TBptjmJL3PvkJP%2BKTAv8i9PatHE8KYeBrBFWgTGJpJbMIfqtCeEL0%2FXjkooe2OoNWB1bd1%2FjJw46%2FaDn3ca9vxk%2Bbiy%2BnuY4zMw2VfrW%2FQ9ASJOhytpc%2F%2Fc8QdTkKxUHyogmYjHS7vM%2FBDsTjiDRa2SCL3DcuXTMw5BXsELmSNT54Zaw0OqeX0iUvTUkBNlediyyun6w66dizDWvdm%2BiShR2UH7AWUdJzOWQAvCja8RXFfdjNZSUVUwx8sEs4l8%2BW%2FjPVpVDLdz3GTMJz7lr0GOqUB5ZqcCX3ol4TDuXlvK4vSKEXbcPD5z0rpoPtXERaWAu4p3%2FpdHb55TGjUeyxH%2FFM%2FsSNoSvpQR%2FKN5f%2FsPJQcScEEgVqBmUHglX%2B8K29OCQqECwZQ4SX%2FDSxvVElBuSfKA4CzzRFDrtMSHGS9SiE3n%2BhS%2Fnu5EoBnvCWoILulSFKiMpOXEgHmjbmC8gvi%2FqbY42t9aSAJJomSzp0uorJh391qgOEc&X-Amz-Signature=b16dc899a771bfc02e3e995948fab7b376284aa2a44e764888d36a6a0df5ac74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUMHRU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHBs9hlpSWHzjUETqpCJmVspByGXXreUQ9FSj3p8tmq2AiEA7JTIXxWKCsjS2Qep%2F2a%2BZAsCZZ2aiWHrPMNEjX1iZNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOIu1fwtva5Ek9rCrcA4VjtVQdnHdnRwNJsBxbVa4lLNysQmLUBlzd8PQcsQ%2F6TsK%2FEv8CAYrEWEZaJ0pcT7Irq7egnryr0jSHPXuV60PtUhAhvJkhi5BV3ticMpgbC9oxWcn3tFbXgFjvZ%2FHuuS4P9Z3nE7fCFRr9awLGOY8hnHFVvtcShhgOHO1IY%2F9R4WSwwWFEBYkuuOAPapMNXR4MvAjLluABkTAAUNGowl%2BXb%2B7a6ixikPt%2FcmUdwUWH9hC%2B8rgHUGBhscAzZwBLOVeP0jCBKHKnwctp7CFaRklPBVmmBkh%2BMZT2E7UpHWIxDK62YLE6ajZaokU8FRBdOfKxw3Tazfgq8kW5FYF6gLfFGbkC9XbVg3vDJCbDjesKT1TBptjmJL3PvkJP%2BKTAv8i9PatHE8KYeBrBFWgTGJpJbMIfqtCeEL0%2FXjkooe2OoNWB1bd1%2FjJw46%2FaDn3ca9vxk%2Bbiy%2BnuY4zMw2VfrW%2FQ9ASJOhytpc%2F%2Fc8QdTkKxUHyogmYjHS7vM%2FBDsTjiDRa2SCL3DcuXTMw5BXsELmSNT54Zaw0OqeX0iUvTUkBNlediyyun6w66dizDWvdm%2BiShR2UH7AWUdJzOWQAvCja8RXFfdjNZSUVUwx8sEs4l8%2BW%2FjPVpVDLdz3GTMJz7lr0GOqUB5ZqcCX3ol4TDuXlvK4vSKEXbcPD5z0rpoPtXERaWAu4p3%2FpdHb55TGjUeyxH%2FFM%2FsSNoSvpQR%2FKN5f%2FsPJQcScEEgVqBmUHglX%2B8K29OCQqECwZQ4SX%2FDSxvVElBuSfKA4CzzRFDrtMSHGS9SiE3n%2BhS%2Fnu5EoBnvCWoILulSFKiMpOXEgHmjbmC8gvi%2FqbY42t9aSAJJomSzp0uorJh391qgOEc&X-Amz-Signature=459237e3b433aac865050ee58d808c5a8f7e49c0b1b274144bef78b844b572f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUMHRU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHBs9hlpSWHzjUETqpCJmVspByGXXreUQ9FSj3p8tmq2AiEA7JTIXxWKCsjS2Qep%2F2a%2BZAsCZZ2aiWHrPMNEjX1iZNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOIu1fwtva5Ek9rCrcA4VjtVQdnHdnRwNJsBxbVa4lLNysQmLUBlzd8PQcsQ%2F6TsK%2FEv8CAYrEWEZaJ0pcT7Irq7egnryr0jSHPXuV60PtUhAhvJkhi5BV3ticMpgbC9oxWcn3tFbXgFjvZ%2FHuuS4P9Z3nE7fCFRr9awLGOY8hnHFVvtcShhgOHO1IY%2F9R4WSwwWFEBYkuuOAPapMNXR4MvAjLluABkTAAUNGowl%2BXb%2B7a6ixikPt%2FcmUdwUWH9hC%2B8rgHUGBhscAzZwBLOVeP0jCBKHKnwctp7CFaRklPBVmmBkh%2BMZT2E7UpHWIxDK62YLE6ajZaokU8FRBdOfKxw3Tazfgq8kW5FYF6gLfFGbkC9XbVg3vDJCbDjesKT1TBptjmJL3PvkJP%2BKTAv8i9PatHE8KYeBrBFWgTGJpJbMIfqtCeEL0%2FXjkooe2OoNWB1bd1%2FjJw46%2FaDn3ca9vxk%2Bbiy%2BnuY4zMw2VfrW%2FQ9ASJOhytpc%2F%2Fc8QdTkKxUHyogmYjHS7vM%2FBDsTjiDRa2SCL3DcuXTMw5BXsELmSNT54Zaw0OqeX0iUvTUkBNlediyyun6w66dizDWvdm%2BiShR2UH7AWUdJzOWQAvCja8RXFfdjNZSUVUwx8sEs4l8%2BW%2FjPVpVDLdz3GTMJz7lr0GOqUB5ZqcCX3ol4TDuXlvK4vSKEXbcPD5z0rpoPtXERaWAu4p3%2FpdHb55TGjUeyxH%2FFM%2FsSNoSvpQR%2FKN5f%2FsPJQcScEEgVqBmUHglX%2B8K29OCQqECwZQ4SX%2FDSxvVElBuSfKA4CzzRFDrtMSHGS9SiE3n%2BhS%2Fnu5EoBnvCWoILulSFKiMpOXEgHmjbmC8gvi%2FqbY42t9aSAJJomSzp0uorJh391qgOEc&X-Amz-Signature=0b5311a010e8901e4041d449ad003a4101895962834841e03d8aa38c24b74422&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
