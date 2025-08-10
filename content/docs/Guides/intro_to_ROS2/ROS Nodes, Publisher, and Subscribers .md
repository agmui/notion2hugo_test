---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQ7PTCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcNsSZYQXWsAGb7Xc2flEzAQ5wzTvkJA0Zwa9LmZV6pAiEA2s6S8XcdIsTsRacD0RX4eSxtV6UFcZHUueOnrdu%2FSh8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMx03g%2Bf5esNKYx2ircA7Ttrkp4Z2RzHgU7zi8gMfIICUXd3IzQ2Q4ZczoyVB85yqrXjfnjNzcpNTj9iyxc7mfIbwqnCoxSJaNJjxgAPUSzRqL6iMiq7twF8ceN7LY5OGphbWBA6%2FUK3GKyws%2B5%2FYBri%2B6qOwYUSr2t9PulVJxmuyijokiH6ip0AIErhtBeTJUEOyh2%2FoSnA5qBow10U2LS7Dz1Q2Za08vydUIcmJTzPiN%2FUlJBhbb8nbxY1eYDsqZ9AciZlqK0khNuFi9VbPs2HZcKmBBCkp7iJh11oJ60riZU0uR%2B%2BJnLBzJCuujZ94YcxJolaYCTaLVqAU7je70V24ZMuEZpvykMWOrZY913ZPwdlQcJa3YFrWmCwCcGMQwckUY6NxfElwNOjOKMsEzIDsiyidVgkUmnEaBiMGmx%2Fc34u%2FGz6srlOw%2FCyQzm6e1y21rb7YyIjphn72ehp%2BgZhkcoTZ2C0zStqKJDOnM2sxOYLo7a6yewtfXqeZQ3ryqDcVL15FG2SDRQoP6AYrAKish7zWeazD6G9Qu42cz7ABsa7jXlQv0QgjjKrF0AZq%2Bg5zRdZzwoRtVzWBqiD4t6f85EExVmj8jBeF5gbuQl426dMn2XY8Y1O2XfIDEQHoNaQbo9ZJP7UNGtMMb14MQGOqUBgHhP3IDTOjJMTnlibP0FdOYGs9nbpHw%2BHem5uipfy2xOaMzzcoAwKLmo%2FRJOCUYQDPeMYd5Sp3dcwsjKtuZLbsJxmiW%2Behr%2FdD0s0e1Sx1csM0BdjltHUk9kVPVNcjr82mQoAok1pwdpAzaWa7OMPPlFYGSdgfBZJKSg5eZy75sX2CylH6jds8Huj2WccvrvUHmaThGQAZtx6TRkhD5inqP5mr1w&X-Amz-Signature=e01757d41acdb76f05790e4daa2e7144ecfba9e14ca17e69c9cbdefbafd0d8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQ7PTCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcNsSZYQXWsAGb7Xc2flEzAQ5wzTvkJA0Zwa9LmZV6pAiEA2s6S8XcdIsTsRacD0RX4eSxtV6UFcZHUueOnrdu%2FSh8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMx03g%2Bf5esNKYx2ircA7Ttrkp4Z2RzHgU7zi8gMfIICUXd3IzQ2Q4ZczoyVB85yqrXjfnjNzcpNTj9iyxc7mfIbwqnCoxSJaNJjxgAPUSzRqL6iMiq7twF8ceN7LY5OGphbWBA6%2FUK3GKyws%2B5%2FYBri%2B6qOwYUSr2t9PulVJxmuyijokiH6ip0AIErhtBeTJUEOyh2%2FoSnA5qBow10U2LS7Dz1Q2Za08vydUIcmJTzPiN%2FUlJBhbb8nbxY1eYDsqZ9AciZlqK0khNuFi9VbPs2HZcKmBBCkp7iJh11oJ60riZU0uR%2B%2BJnLBzJCuujZ94YcxJolaYCTaLVqAU7je70V24ZMuEZpvykMWOrZY913ZPwdlQcJa3YFrWmCwCcGMQwckUY6NxfElwNOjOKMsEzIDsiyidVgkUmnEaBiMGmx%2Fc34u%2FGz6srlOw%2FCyQzm6e1y21rb7YyIjphn72ehp%2BgZhkcoTZ2C0zStqKJDOnM2sxOYLo7a6yewtfXqeZQ3ryqDcVL15FG2SDRQoP6AYrAKish7zWeazD6G9Qu42cz7ABsa7jXlQv0QgjjKrF0AZq%2Bg5zRdZzwoRtVzWBqiD4t6f85EExVmj8jBeF5gbuQl426dMn2XY8Y1O2XfIDEQHoNaQbo9ZJP7UNGtMMb14MQGOqUBgHhP3IDTOjJMTnlibP0FdOYGs9nbpHw%2BHem5uipfy2xOaMzzcoAwKLmo%2FRJOCUYQDPeMYd5Sp3dcwsjKtuZLbsJxmiW%2Behr%2FdD0s0e1Sx1csM0BdjltHUk9kVPVNcjr82mQoAok1pwdpAzaWa7OMPPlFYGSdgfBZJKSg5eZy75sX2CylH6jds8Huj2WccvrvUHmaThGQAZtx6TRkhD5inqP5mr1w&X-Amz-Signature=046589d5ce84a0160b911214eed1db937e85a719f81aa4b1ee54eb1e8dbfd734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQ7PTCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcNsSZYQXWsAGb7Xc2flEzAQ5wzTvkJA0Zwa9LmZV6pAiEA2s6S8XcdIsTsRacD0RX4eSxtV6UFcZHUueOnrdu%2FSh8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMx03g%2Bf5esNKYx2ircA7Ttrkp4Z2RzHgU7zi8gMfIICUXd3IzQ2Q4ZczoyVB85yqrXjfnjNzcpNTj9iyxc7mfIbwqnCoxSJaNJjxgAPUSzRqL6iMiq7twF8ceN7LY5OGphbWBA6%2FUK3GKyws%2B5%2FYBri%2B6qOwYUSr2t9PulVJxmuyijokiH6ip0AIErhtBeTJUEOyh2%2FoSnA5qBow10U2LS7Dz1Q2Za08vydUIcmJTzPiN%2FUlJBhbb8nbxY1eYDsqZ9AciZlqK0khNuFi9VbPs2HZcKmBBCkp7iJh11oJ60riZU0uR%2B%2BJnLBzJCuujZ94YcxJolaYCTaLVqAU7je70V24ZMuEZpvykMWOrZY913ZPwdlQcJa3YFrWmCwCcGMQwckUY6NxfElwNOjOKMsEzIDsiyidVgkUmnEaBiMGmx%2Fc34u%2FGz6srlOw%2FCyQzm6e1y21rb7YyIjphn72ehp%2BgZhkcoTZ2C0zStqKJDOnM2sxOYLo7a6yewtfXqeZQ3ryqDcVL15FG2SDRQoP6AYrAKish7zWeazD6G9Qu42cz7ABsa7jXlQv0QgjjKrF0AZq%2Bg5zRdZzwoRtVzWBqiD4t6f85EExVmj8jBeF5gbuQl426dMn2XY8Y1O2XfIDEQHoNaQbo9ZJP7UNGtMMb14MQGOqUBgHhP3IDTOjJMTnlibP0FdOYGs9nbpHw%2BHem5uipfy2xOaMzzcoAwKLmo%2FRJOCUYQDPeMYd5Sp3dcwsjKtuZLbsJxmiW%2Behr%2FdD0s0e1Sx1csM0BdjltHUk9kVPVNcjr82mQoAok1pwdpAzaWa7OMPPlFYGSdgfBZJKSg5eZy75sX2CylH6jds8Huj2WccvrvUHmaThGQAZtx6TRkhD5inqP5mr1w&X-Amz-Signature=58d26a491c722bcb01ac591b8422bc7690449265179387053ee171231ac6b705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQ7PTCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcNsSZYQXWsAGb7Xc2flEzAQ5wzTvkJA0Zwa9LmZV6pAiEA2s6S8XcdIsTsRacD0RX4eSxtV6UFcZHUueOnrdu%2FSh8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMx03g%2Bf5esNKYx2ircA7Ttrkp4Z2RzHgU7zi8gMfIICUXd3IzQ2Q4ZczoyVB85yqrXjfnjNzcpNTj9iyxc7mfIbwqnCoxSJaNJjxgAPUSzRqL6iMiq7twF8ceN7LY5OGphbWBA6%2FUK3GKyws%2B5%2FYBri%2B6qOwYUSr2t9PulVJxmuyijokiH6ip0AIErhtBeTJUEOyh2%2FoSnA5qBow10U2LS7Dz1Q2Za08vydUIcmJTzPiN%2FUlJBhbb8nbxY1eYDsqZ9AciZlqK0khNuFi9VbPs2HZcKmBBCkp7iJh11oJ60riZU0uR%2B%2BJnLBzJCuujZ94YcxJolaYCTaLVqAU7je70V24ZMuEZpvykMWOrZY913ZPwdlQcJa3YFrWmCwCcGMQwckUY6NxfElwNOjOKMsEzIDsiyidVgkUmnEaBiMGmx%2Fc34u%2FGz6srlOw%2FCyQzm6e1y21rb7YyIjphn72ehp%2BgZhkcoTZ2C0zStqKJDOnM2sxOYLo7a6yewtfXqeZQ3ryqDcVL15FG2SDRQoP6AYrAKish7zWeazD6G9Qu42cz7ABsa7jXlQv0QgjjKrF0AZq%2Bg5zRdZzwoRtVzWBqiD4t6f85EExVmj8jBeF5gbuQl426dMn2XY8Y1O2XfIDEQHoNaQbo9ZJP7UNGtMMb14MQGOqUBgHhP3IDTOjJMTnlibP0FdOYGs9nbpHw%2BHem5uipfy2xOaMzzcoAwKLmo%2FRJOCUYQDPeMYd5Sp3dcwsjKtuZLbsJxmiW%2Behr%2FdD0s0e1Sx1csM0BdjltHUk9kVPVNcjr82mQoAok1pwdpAzaWa7OMPPlFYGSdgfBZJKSg5eZy75sX2CylH6jds8Huj2WccvrvUHmaThGQAZtx6TRkhD5inqP5mr1w&X-Amz-Signature=1308187815f9836331da33eb9360da13beccd727345e1a670ffa2298e6df3ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQ7PTCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcNsSZYQXWsAGb7Xc2flEzAQ5wzTvkJA0Zwa9LmZV6pAiEA2s6S8XcdIsTsRacD0RX4eSxtV6UFcZHUueOnrdu%2FSh8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMx03g%2Bf5esNKYx2ircA7Ttrkp4Z2RzHgU7zi8gMfIICUXd3IzQ2Q4ZczoyVB85yqrXjfnjNzcpNTj9iyxc7mfIbwqnCoxSJaNJjxgAPUSzRqL6iMiq7twF8ceN7LY5OGphbWBA6%2FUK3GKyws%2B5%2FYBri%2B6qOwYUSr2t9PulVJxmuyijokiH6ip0AIErhtBeTJUEOyh2%2FoSnA5qBow10U2LS7Dz1Q2Za08vydUIcmJTzPiN%2FUlJBhbb8nbxY1eYDsqZ9AciZlqK0khNuFi9VbPs2HZcKmBBCkp7iJh11oJ60riZU0uR%2B%2BJnLBzJCuujZ94YcxJolaYCTaLVqAU7je70V24ZMuEZpvykMWOrZY913ZPwdlQcJa3YFrWmCwCcGMQwckUY6NxfElwNOjOKMsEzIDsiyidVgkUmnEaBiMGmx%2Fc34u%2FGz6srlOw%2FCyQzm6e1y21rb7YyIjphn72ehp%2BgZhkcoTZ2C0zStqKJDOnM2sxOYLo7a6yewtfXqeZQ3ryqDcVL15FG2SDRQoP6AYrAKish7zWeazD6G9Qu42cz7ABsa7jXlQv0QgjjKrF0AZq%2Bg5zRdZzwoRtVzWBqiD4t6f85EExVmj8jBeF5gbuQl426dMn2XY8Y1O2XfIDEQHoNaQbo9ZJP7UNGtMMb14MQGOqUBgHhP3IDTOjJMTnlibP0FdOYGs9nbpHw%2BHem5uipfy2xOaMzzcoAwKLmo%2FRJOCUYQDPeMYd5Sp3dcwsjKtuZLbsJxmiW%2Behr%2FdD0s0e1Sx1csM0BdjltHUk9kVPVNcjr82mQoAok1pwdpAzaWa7OMPPlFYGSdgfBZJKSg5eZy75sX2CylH6jds8Huj2WccvrvUHmaThGQAZtx6TRkhD5inqP5mr1w&X-Amz-Signature=1173af967a6bb32ea1040016f16641908b19291c6b524938c13fc22d946aa173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQ7PTCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcNsSZYQXWsAGb7Xc2flEzAQ5wzTvkJA0Zwa9LmZV6pAiEA2s6S8XcdIsTsRacD0RX4eSxtV6UFcZHUueOnrdu%2FSh8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMx03g%2Bf5esNKYx2ircA7Ttrkp4Z2RzHgU7zi8gMfIICUXd3IzQ2Q4ZczoyVB85yqrXjfnjNzcpNTj9iyxc7mfIbwqnCoxSJaNJjxgAPUSzRqL6iMiq7twF8ceN7LY5OGphbWBA6%2FUK3GKyws%2B5%2FYBri%2B6qOwYUSr2t9PulVJxmuyijokiH6ip0AIErhtBeTJUEOyh2%2FoSnA5qBow10U2LS7Dz1Q2Za08vydUIcmJTzPiN%2FUlJBhbb8nbxY1eYDsqZ9AciZlqK0khNuFi9VbPs2HZcKmBBCkp7iJh11oJ60riZU0uR%2B%2BJnLBzJCuujZ94YcxJolaYCTaLVqAU7je70V24ZMuEZpvykMWOrZY913ZPwdlQcJa3YFrWmCwCcGMQwckUY6NxfElwNOjOKMsEzIDsiyidVgkUmnEaBiMGmx%2Fc34u%2FGz6srlOw%2FCyQzm6e1y21rb7YyIjphn72ehp%2BgZhkcoTZ2C0zStqKJDOnM2sxOYLo7a6yewtfXqeZQ3ryqDcVL15FG2SDRQoP6AYrAKish7zWeazD6G9Qu42cz7ABsa7jXlQv0QgjjKrF0AZq%2Bg5zRdZzwoRtVzWBqiD4t6f85EExVmj8jBeF5gbuQl426dMn2XY8Y1O2XfIDEQHoNaQbo9ZJP7UNGtMMb14MQGOqUBgHhP3IDTOjJMTnlibP0FdOYGs9nbpHw%2BHem5uipfy2xOaMzzcoAwKLmo%2FRJOCUYQDPeMYd5Sp3dcwsjKtuZLbsJxmiW%2Behr%2FdD0s0e1Sx1csM0BdjltHUk9kVPVNcjr82mQoAok1pwdpAzaWa7OMPPlFYGSdgfBZJKSg5eZy75sX2CylH6jds8Huj2WccvrvUHmaThGQAZtx6TRkhD5inqP5mr1w&X-Amz-Signature=30e983f441c976dad8cd82b1c27d32cae91aa99b0b139cc3fcf88ada71ab253a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQ7PTCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcNsSZYQXWsAGb7Xc2flEzAQ5wzTvkJA0Zwa9LmZV6pAiEA2s6S8XcdIsTsRacD0RX4eSxtV6UFcZHUueOnrdu%2FSh8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMx03g%2Bf5esNKYx2ircA7Ttrkp4Z2RzHgU7zi8gMfIICUXd3IzQ2Q4ZczoyVB85yqrXjfnjNzcpNTj9iyxc7mfIbwqnCoxSJaNJjxgAPUSzRqL6iMiq7twF8ceN7LY5OGphbWBA6%2FUK3GKyws%2B5%2FYBri%2B6qOwYUSr2t9PulVJxmuyijokiH6ip0AIErhtBeTJUEOyh2%2FoSnA5qBow10U2LS7Dz1Q2Za08vydUIcmJTzPiN%2FUlJBhbb8nbxY1eYDsqZ9AciZlqK0khNuFi9VbPs2HZcKmBBCkp7iJh11oJ60riZU0uR%2B%2BJnLBzJCuujZ94YcxJolaYCTaLVqAU7je70V24ZMuEZpvykMWOrZY913ZPwdlQcJa3YFrWmCwCcGMQwckUY6NxfElwNOjOKMsEzIDsiyidVgkUmnEaBiMGmx%2Fc34u%2FGz6srlOw%2FCyQzm6e1y21rb7YyIjphn72ehp%2BgZhkcoTZ2C0zStqKJDOnM2sxOYLo7a6yewtfXqeZQ3ryqDcVL15FG2SDRQoP6AYrAKish7zWeazD6G9Qu42cz7ABsa7jXlQv0QgjjKrF0AZq%2Bg5zRdZzwoRtVzWBqiD4t6f85EExVmj8jBeF5gbuQl426dMn2XY8Y1O2XfIDEQHoNaQbo9ZJP7UNGtMMb14MQGOqUBgHhP3IDTOjJMTnlibP0FdOYGs9nbpHw%2BHem5uipfy2xOaMzzcoAwKLmo%2FRJOCUYQDPeMYd5Sp3dcwsjKtuZLbsJxmiW%2Behr%2FdD0s0e1Sx1csM0BdjltHUk9kVPVNcjr82mQoAok1pwdpAzaWa7OMPPlFYGSdgfBZJKSg5eZy75sX2CylH6jds8Huj2WccvrvUHmaThGQAZtx6TRkhD5inqP5mr1w&X-Amz-Signature=22d8e6a17b902c2ca308a0f0f3e7582cf246a0acd42f096183b28e3152dc1653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQ7PTCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcNsSZYQXWsAGb7Xc2flEzAQ5wzTvkJA0Zwa9LmZV6pAiEA2s6S8XcdIsTsRacD0RX4eSxtV6UFcZHUueOnrdu%2FSh8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMx03g%2Bf5esNKYx2ircA7Ttrkp4Z2RzHgU7zi8gMfIICUXd3IzQ2Q4ZczoyVB85yqrXjfnjNzcpNTj9iyxc7mfIbwqnCoxSJaNJjxgAPUSzRqL6iMiq7twF8ceN7LY5OGphbWBA6%2FUK3GKyws%2B5%2FYBri%2B6qOwYUSr2t9PulVJxmuyijokiH6ip0AIErhtBeTJUEOyh2%2FoSnA5qBow10U2LS7Dz1Q2Za08vydUIcmJTzPiN%2FUlJBhbb8nbxY1eYDsqZ9AciZlqK0khNuFi9VbPs2HZcKmBBCkp7iJh11oJ60riZU0uR%2B%2BJnLBzJCuujZ94YcxJolaYCTaLVqAU7je70V24ZMuEZpvykMWOrZY913ZPwdlQcJa3YFrWmCwCcGMQwckUY6NxfElwNOjOKMsEzIDsiyidVgkUmnEaBiMGmx%2Fc34u%2FGz6srlOw%2FCyQzm6e1y21rb7YyIjphn72ehp%2BgZhkcoTZ2C0zStqKJDOnM2sxOYLo7a6yewtfXqeZQ3ryqDcVL15FG2SDRQoP6AYrAKish7zWeazD6G9Qu42cz7ABsa7jXlQv0QgjjKrF0AZq%2Bg5zRdZzwoRtVzWBqiD4t6f85EExVmj8jBeF5gbuQl426dMn2XY8Y1O2XfIDEQHoNaQbo9ZJP7UNGtMMb14MQGOqUBgHhP3IDTOjJMTnlibP0FdOYGs9nbpHw%2BHem5uipfy2xOaMzzcoAwKLmo%2FRJOCUYQDPeMYd5Sp3dcwsjKtuZLbsJxmiW%2Behr%2FdD0s0e1Sx1csM0BdjltHUk9kVPVNcjr82mQoAok1pwdpAzaWa7OMPPlFYGSdgfBZJKSg5eZy75sX2CylH6jds8Huj2WccvrvUHmaThGQAZtx6TRkhD5inqP5mr1w&X-Amz-Signature=6f3307e27722a4f6e5b590c499c4149c7bb24b2be68402ce687bbc7a6c0b36ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
