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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DACLKH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB%2BXTf6zr4WncWdLYpK07AQT2hoXCdm0Sy7hDHoSRP4RAiEAi4URKMU6Qb%2Fm4SkieZRqLl3R2Edfx7xIIbEeFiWCAdsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH91a5bPZ0NAC5WKayrcA8lhIYYcVDN%2FpYlmAHXA8uG1QxpqOcZc0jGxJG5EzAVI6zLwy%2BvzYham%2FDAqlGXVuekL8ABu7tk4TsO6FvNzQ392Z8ueRxADtYEnDI8g1%2Fvbn%2F4ORLQiiiWT8fSx9wNe4n2gbWflhih%2FHWtS6O6%2Fjzlq74HcpwTK2t51VqSZjhKnqKBt6L%2B6hdPFgXcxCRKTXFh6KopZdhX0HUQi0FJysy8p57Rnj44PQ5jXc%2BUaK%2BbsZwqN0uWAKY68pXtGaSmIpqzIPSRhcyohS6Joh6RxwPuW%2FiKOXfnJXjbZ%2BemP4OW96Evw9xMKxTmnWmUUFGhoJGTzkTRLCEt8038eVULK5P%2B29W%2FUbyUDCDmsCxLMvxZq4%2BefYleMpyvk%2F0KL5SLbR29gJZWXQgEdbMygXECJDh0snE%2BHxWM0V0p%2BjbuUL24jKUFBimr2j7eHIbBQvvXa5UMPZuKRvm%2F9Vo%2BJvxPeou39McfCadn4sJoFswXBfsvX2XUKJY4GXCcgtTNsOTKHy9ImuR2YyF3TwHyglyjKRPue8pgXMbNzjD%2F2hlRfMCNg%2BkQVqw4sMsobQVRNW5FRjuTnWA97uTLqFzh3EeirrDiYRjzgbzbuO8vBjrRpEJnuphZrlLolYX9Va8Q5MPm4r8MGOqUBULe45PLaUCINGQzgar5k6LfYj%2F27Q91KXGyOtx93%2B%2Bm4M7lcpkszgVWKuKhvbNdnLVQVALfD5F%2B0VdL8DpmIqrDdVbZn4K3vBqRgj5SFTuCSF3YelahT%2FEXX1sGAq6I0WqVUGYQ9DbfMUB%2F2FvnP0KKk019uR%2B6BCY3tzTFH%2FZXI71nlw%2BhYLSB6LWysY76S8bsoxH1UT%2Bs19ytpPW2DnD1t8MJc&X-Amz-Signature=ec1cb712ec000b62eaadcc2cac71a64e1ff574f754ba6aec5f2bdb72ba7934ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DACLKH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB%2BXTf6zr4WncWdLYpK07AQT2hoXCdm0Sy7hDHoSRP4RAiEAi4URKMU6Qb%2Fm4SkieZRqLl3R2Edfx7xIIbEeFiWCAdsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH91a5bPZ0NAC5WKayrcA8lhIYYcVDN%2FpYlmAHXA8uG1QxpqOcZc0jGxJG5EzAVI6zLwy%2BvzYham%2FDAqlGXVuekL8ABu7tk4TsO6FvNzQ392Z8ueRxADtYEnDI8g1%2Fvbn%2F4ORLQiiiWT8fSx9wNe4n2gbWflhih%2FHWtS6O6%2Fjzlq74HcpwTK2t51VqSZjhKnqKBt6L%2B6hdPFgXcxCRKTXFh6KopZdhX0HUQi0FJysy8p57Rnj44PQ5jXc%2BUaK%2BbsZwqN0uWAKY68pXtGaSmIpqzIPSRhcyohS6Joh6RxwPuW%2FiKOXfnJXjbZ%2BemP4OW96Evw9xMKxTmnWmUUFGhoJGTzkTRLCEt8038eVULK5P%2B29W%2FUbyUDCDmsCxLMvxZq4%2BefYleMpyvk%2F0KL5SLbR29gJZWXQgEdbMygXECJDh0snE%2BHxWM0V0p%2BjbuUL24jKUFBimr2j7eHIbBQvvXa5UMPZuKRvm%2F9Vo%2BJvxPeou39McfCadn4sJoFswXBfsvX2XUKJY4GXCcgtTNsOTKHy9ImuR2YyF3TwHyglyjKRPue8pgXMbNzjD%2F2hlRfMCNg%2BkQVqw4sMsobQVRNW5FRjuTnWA97uTLqFzh3EeirrDiYRjzgbzbuO8vBjrRpEJnuphZrlLolYX9Va8Q5MPm4r8MGOqUBULe45PLaUCINGQzgar5k6LfYj%2F27Q91KXGyOtx93%2B%2Bm4M7lcpkszgVWKuKhvbNdnLVQVALfD5F%2B0VdL8DpmIqrDdVbZn4K3vBqRgj5SFTuCSF3YelahT%2FEXX1sGAq6I0WqVUGYQ9DbfMUB%2F2FvnP0KKk019uR%2B6BCY3tzTFH%2FZXI71nlw%2BhYLSB6LWysY76S8bsoxH1UT%2Bs19ytpPW2DnD1t8MJc&X-Amz-Signature=2d6a6e2a9bda37d639a5272e6c0b84a016626a4642ffed85e1ce34f0cadfd23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DACLKH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB%2BXTf6zr4WncWdLYpK07AQT2hoXCdm0Sy7hDHoSRP4RAiEAi4URKMU6Qb%2Fm4SkieZRqLl3R2Edfx7xIIbEeFiWCAdsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH91a5bPZ0NAC5WKayrcA8lhIYYcVDN%2FpYlmAHXA8uG1QxpqOcZc0jGxJG5EzAVI6zLwy%2BvzYham%2FDAqlGXVuekL8ABu7tk4TsO6FvNzQ392Z8ueRxADtYEnDI8g1%2Fvbn%2F4ORLQiiiWT8fSx9wNe4n2gbWflhih%2FHWtS6O6%2Fjzlq74HcpwTK2t51VqSZjhKnqKBt6L%2B6hdPFgXcxCRKTXFh6KopZdhX0HUQi0FJysy8p57Rnj44PQ5jXc%2BUaK%2BbsZwqN0uWAKY68pXtGaSmIpqzIPSRhcyohS6Joh6RxwPuW%2FiKOXfnJXjbZ%2BemP4OW96Evw9xMKxTmnWmUUFGhoJGTzkTRLCEt8038eVULK5P%2B29W%2FUbyUDCDmsCxLMvxZq4%2BefYleMpyvk%2F0KL5SLbR29gJZWXQgEdbMygXECJDh0snE%2BHxWM0V0p%2BjbuUL24jKUFBimr2j7eHIbBQvvXa5UMPZuKRvm%2F9Vo%2BJvxPeou39McfCadn4sJoFswXBfsvX2XUKJY4GXCcgtTNsOTKHy9ImuR2YyF3TwHyglyjKRPue8pgXMbNzjD%2F2hlRfMCNg%2BkQVqw4sMsobQVRNW5FRjuTnWA97uTLqFzh3EeirrDiYRjzgbzbuO8vBjrRpEJnuphZrlLolYX9Va8Q5MPm4r8MGOqUBULe45PLaUCINGQzgar5k6LfYj%2F27Q91KXGyOtx93%2B%2Bm4M7lcpkszgVWKuKhvbNdnLVQVALfD5F%2B0VdL8DpmIqrDdVbZn4K3vBqRgj5SFTuCSF3YelahT%2FEXX1sGAq6I0WqVUGYQ9DbfMUB%2F2FvnP0KKk019uR%2B6BCY3tzTFH%2FZXI71nlw%2BhYLSB6LWysY76S8bsoxH1UT%2Bs19ytpPW2DnD1t8MJc&X-Amz-Signature=c4f4a56d7f056db6eb0c65cbbc1ee678225a1269e97d53b999978cdd7fbc9bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DACLKH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB%2BXTf6zr4WncWdLYpK07AQT2hoXCdm0Sy7hDHoSRP4RAiEAi4URKMU6Qb%2Fm4SkieZRqLl3R2Edfx7xIIbEeFiWCAdsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH91a5bPZ0NAC5WKayrcA8lhIYYcVDN%2FpYlmAHXA8uG1QxpqOcZc0jGxJG5EzAVI6zLwy%2BvzYham%2FDAqlGXVuekL8ABu7tk4TsO6FvNzQ392Z8ueRxADtYEnDI8g1%2Fvbn%2F4ORLQiiiWT8fSx9wNe4n2gbWflhih%2FHWtS6O6%2Fjzlq74HcpwTK2t51VqSZjhKnqKBt6L%2B6hdPFgXcxCRKTXFh6KopZdhX0HUQi0FJysy8p57Rnj44PQ5jXc%2BUaK%2BbsZwqN0uWAKY68pXtGaSmIpqzIPSRhcyohS6Joh6RxwPuW%2FiKOXfnJXjbZ%2BemP4OW96Evw9xMKxTmnWmUUFGhoJGTzkTRLCEt8038eVULK5P%2B29W%2FUbyUDCDmsCxLMvxZq4%2BefYleMpyvk%2F0KL5SLbR29gJZWXQgEdbMygXECJDh0snE%2BHxWM0V0p%2BjbuUL24jKUFBimr2j7eHIbBQvvXa5UMPZuKRvm%2F9Vo%2BJvxPeou39McfCadn4sJoFswXBfsvX2XUKJY4GXCcgtTNsOTKHy9ImuR2YyF3TwHyglyjKRPue8pgXMbNzjD%2F2hlRfMCNg%2BkQVqw4sMsobQVRNW5FRjuTnWA97uTLqFzh3EeirrDiYRjzgbzbuO8vBjrRpEJnuphZrlLolYX9Va8Q5MPm4r8MGOqUBULe45PLaUCINGQzgar5k6LfYj%2F27Q91KXGyOtx93%2B%2Bm4M7lcpkszgVWKuKhvbNdnLVQVALfD5F%2B0VdL8DpmIqrDdVbZn4K3vBqRgj5SFTuCSF3YelahT%2FEXX1sGAq6I0WqVUGYQ9DbfMUB%2F2FvnP0KKk019uR%2B6BCY3tzTFH%2FZXI71nlw%2BhYLSB6LWysY76S8bsoxH1UT%2Bs19ytpPW2DnD1t8MJc&X-Amz-Signature=177fb13d9af050e0f13bb361bd50ef16297f7eecfab2a5ec73794b07af516c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DACLKH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB%2BXTf6zr4WncWdLYpK07AQT2hoXCdm0Sy7hDHoSRP4RAiEAi4URKMU6Qb%2Fm4SkieZRqLl3R2Edfx7xIIbEeFiWCAdsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH91a5bPZ0NAC5WKayrcA8lhIYYcVDN%2FpYlmAHXA8uG1QxpqOcZc0jGxJG5EzAVI6zLwy%2BvzYham%2FDAqlGXVuekL8ABu7tk4TsO6FvNzQ392Z8ueRxADtYEnDI8g1%2Fvbn%2F4ORLQiiiWT8fSx9wNe4n2gbWflhih%2FHWtS6O6%2Fjzlq74HcpwTK2t51VqSZjhKnqKBt6L%2B6hdPFgXcxCRKTXFh6KopZdhX0HUQi0FJysy8p57Rnj44PQ5jXc%2BUaK%2BbsZwqN0uWAKY68pXtGaSmIpqzIPSRhcyohS6Joh6RxwPuW%2FiKOXfnJXjbZ%2BemP4OW96Evw9xMKxTmnWmUUFGhoJGTzkTRLCEt8038eVULK5P%2B29W%2FUbyUDCDmsCxLMvxZq4%2BefYleMpyvk%2F0KL5SLbR29gJZWXQgEdbMygXECJDh0snE%2BHxWM0V0p%2BjbuUL24jKUFBimr2j7eHIbBQvvXa5UMPZuKRvm%2F9Vo%2BJvxPeou39McfCadn4sJoFswXBfsvX2XUKJY4GXCcgtTNsOTKHy9ImuR2YyF3TwHyglyjKRPue8pgXMbNzjD%2F2hlRfMCNg%2BkQVqw4sMsobQVRNW5FRjuTnWA97uTLqFzh3EeirrDiYRjzgbzbuO8vBjrRpEJnuphZrlLolYX9Va8Q5MPm4r8MGOqUBULe45PLaUCINGQzgar5k6LfYj%2F27Q91KXGyOtx93%2B%2Bm4M7lcpkszgVWKuKhvbNdnLVQVALfD5F%2B0VdL8DpmIqrDdVbZn4K3vBqRgj5SFTuCSF3YelahT%2FEXX1sGAq6I0WqVUGYQ9DbfMUB%2F2FvnP0KKk019uR%2B6BCY3tzTFH%2FZXI71nlw%2BhYLSB6LWysY76S8bsoxH1UT%2Bs19ytpPW2DnD1t8MJc&X-Amz-Signature=f390d27744584a581ea6df456f3573fb691b8890723de3075526be773c97f898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DACLKH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB%2BXTf6zr4WncWdLYpK07AQT2hoXCdm0Sy7hDHoSRP4RAiEAi4URKMU6Qb%2Fm4SkieZRqLl3R2Edfx7xIIbEeFiWCAdsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH91a5bPZ0NAC5WKayrcA8lhIYYcVDN%2FpYlmAHXA8uG1QxpqOcZc0jGxJG5EzAVI6zLwy%2BvzYham%2FDAqlGXVuekL8ABu7tk4TsO6FvNzQ392Z8ueRxADtYEnDI8g1%2Fvbn%2F4ORLQiiiWT8fSx9wNe4n2gbWflhih%2FHWtS6O6%2Fjzlq74HcpwTK2t51VqSZjhKnqKBt6L%2B6hdPFgXcxCRKTXFh6KopZdhX0HUQi0FJysy8p57Rnj44PQ5jXc%2BUaK%2BbsZwqN0uWAKY68pXtGaSmIpqzIPSRhcyohS6Joh6RxwPuW%2FiKOXfnJXjbZ%2BemP4OW96Evw9xMKxTmnWmUUFGhoJGTzkTRLCEt8038eVULK5P%2B29W%2FUbyUDCDmsCxLMvxZq4%2BefYleMpyvk%2F0KL5SLbR29gJZWXQgEdbMygXECJDh0snE%2BHxWM0V0p%2BjbuUL24jKUFBimr2j7eHIbBQvvXa5UMPZuKRvm%2F9Vo%2BJvxPeou39McfCadn4sJoFswXBfsvX2XUKJY4GXCcgtTNsOTKHy9ImuR2YyF3TwHyglyjKRPue8pgXMbNzjD%2F2hlRfMCNg%2BkQVqw4sMsobQVRNW5FRjuTnWA97uTLqFzh3EeirrDiYRjzgbzbuO8vBjrRpEJnuphZrlLolYX9Va8Q5MPm4r8MGOqUBULe45PLaUCINGQzgar5k6LfYj%2F27Q91KXGyOtx93%2B%2Bm4M7lcpkszgVWKuKhvbNdnLVQVALfD5F%2B0VdL8DpmIqrDdVbZn4K3vBqRgj5SFTuCSF3YelahT%2FEXX1sGAq6I0WqVUGYQ9DbfMUB%2F2FvnP0KKk019uR%2B6BCY3tzTFH%2FZXI71nlw%2BhYLSB6LWysY76S8bsoxH1UT%2Bs19ytpPW2DnD1t8MJc&X-Amz-Signature=60e5e4039e9c3889291dd77fa2e06611d85eb43add77b45ceb66947a7cc7d59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DACLKH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB%2BXTf6zr4WncWdLYpK07AQT2hoXCdm0Sy7hDHoSRP4RAiEAi4URKMU6Qb%2Fm4SkieZRqLl3R2Edfx7xIIbEeFiWCAdsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH91a5bPZ0NAC5WKayrcA8lhIYYcVDN%2FpYlmAHXA8uG1QxpqOcZc0jGxJG5EzAVI6zLwy%2BvzYham%2FDAqlGXVuekL8ABu7tk4TsO6FvNzQ392Z8ueRxADtYEnDI8g1%2Fvbn%2F4ORLQiiiWT8fSx9wNe4n2gbWflhih%2FHWtS6O6%2Fjzlq74HcpwTK2t51VqSZjhKnqKBt6L%2B6hdPFgXcxCRKTXFh6KopZdhX0HUQi0FJysy8p57Rnj44PQ5jXc%2BUaK%2BbsZwqN0uWAKY68pXtGaSmIpqzIPSRhcyohS6Joh6RxwPuW%2FiKOXfnJXjbZ%2BemP4OW96Evw9xMKxTmnWmUUFGhoJGTzkTRLCEt8038eVULK5P%2B29W%2FUbyUDCDmsCxLMvxZq4%2BefYleMpyvk%2F0KL5SLbR29gJZWXQgEdbMygXECJDh0snE%2BHxWM0V0p%2BjbuUL24jKUFBimr2j7eHIbBQvvXa5UMPZuKRvm%2F9Vo%2BJvxPeou39McfCadn4sJoFswXBfsvX2XUKJY4GXCcgtTNsOTKHy9ImuR2YyF3TwHyglyjKRPue8pgXMbNzjD%2F2hlRfMCNg%2BkQVqw4sMsobQVRNW5FRjuTnWA97uTLqFzh3EeirrDiYRjzgbzbuO8vBjrRpEJnuphZrlLolYX9Va8Q5MPm4r8MGOqUBULe45PLaUCINGQzgar5k6LfYj%2F27Q91KXGyOtx93%2B%2Bm4M7lcpkszgVWKuKhvbNdnLVQVALfD5F%2B0VdL8DpmIqrDdVbZn4K3vBqRgj5SFTuCSF3YelahT%2FEXX1sGAq6I0WqVUGYQ9DbfMUB%2F2FvnP0KKk019uR%2B6BCY3tzTFH%2FZXI71nlw%2BhYLSB6LWysY76S8bsoxH1UT%2Bs19ytpPW2DnD1t8MJc&X-Amz-Signature=9fee1cc2b58af92c13ec2576faf1104c14f2c1abfc670aeb8c820197591fc309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DACLKH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB%2BXTf6zr4WncWdLYpK07AQT2hoXCdm0Sy7hDHoSRP4RAiEAi4URKMU6Qb%2Fm4SkieZRqLl3R2Edfx7xIIbEeFiWCAdsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH91a5bPZ0NAC5WKayrcA8lhIYYcVDN%2FpYlmAHXA8uG1QxpqOcZc0jGxJG5EzAVI6zLwy%2BvzYham%2FDAqlGXVuekL8ABu7tk4TsO6FvNzQ392Z8ueRxADtYEnDI8g1%2Fvbn%2F4ORLQiiiWT8fSx9wNe4n2gbWflhih%2FHWtS6O6%2Fjzlq74HcpwTK2t51VqSZjhKnqKBt6L%2B6hdPFgXcxCRKTXFh6KopZdhX0HUQi0FJysy8p57Rnj44PQ5jXc%2BUaK%2BbsZwqN0uWAKY68pXtGaSmIpqzIPSRhcyohS6Joh6RxwPuW%2FiKOXfnJXjbZ%2BemP4OW96Evw9xMKxTmnWmUUFGhoJGTzkTRLCEt8038eVULK5P%2B29W%2FUbyUDCDmsCxLMvxZq4%2BefYleMpyvk%2F0KL5SLbR29gJZWXQgEdbMygXECJDh0snE%2BHxWM0V0p%2BjbuUL24jKUFBimr2j7eHIbBQvvXa5UMPZuKRvm%2F9Vo%2BJvxPeou39McfCadn4sJoFswXBfsvX2XUKJY4GXCcgtTNsOTKHy9ImuR2YyF3TwHyglyjKRPue8pgXMbNzjD%2F2hlRfMCNg%2BkQVqw4sMsobQVRNW5FRjuTnWA97uTLqFzh3EeirrDiYRjzgbzbuO8vBjrRpEJnuphZrlLolYX9Va8Q5MPm4r8MGOqUBULe45PLaUCINGQzgar5k6LfYj%2F27Q91KXGyOtx93%2B%2Bm4M7lcpkszgVWKuKhvbNdnLVQVALfD5F%2B0VdL8DpmIqrDdVbZn4K3vBqRgj5SFTuCSF3YelahT%2FEXX1sGAq6I0WqVUGYQ9DbfMUB%2F2FvnP0KKk019uR%2B6BCY3tzTFH%2FZXI71nlw%2BhYLSB6LWysY76S8bsoxH1UT%2Bs19ytpPW2DnD1t8MJc&X-Amz-Signature=c562b27b23bcfe0a3f06e1eb144f7a1d9a81b5ce772950f79761769677aad67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
