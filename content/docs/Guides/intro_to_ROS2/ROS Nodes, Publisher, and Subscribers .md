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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEB7WQQ5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4Ox66c2Yp6buRqIkctXUTouRGmLz0OLcP86WqJBHFKAIhAOkGFBeD0s%2BXjnv5fAJjyNnitUQv4oB0Hepi3RtGoBVzKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOul6yEEaa7d4WrEkq3APnb5OSmkNXO4yI7uA4t3k868si21hrkYXT5V%2BZAKzjefIbRik%2FE%2Fg2YuOJdrhrDK%2FQx197s5w9S80HZ0dPLp1BqluU1mDtPYmQgbLec49oHIlP9EvWs9Gxcf%2FFsc0BhgfqKWbkehnSy1Mjq9L%2BAlQQky4qqk4n26nbWDJVIpfBpWCwKPJixJXrtG2mfJhZMpPeAybFrYD3fHJI%2BfNvlzkwVr2TVhZR8k0ovxOUffrhrGdbUMEJbOV4syi1GX0WyFJJdyZNPFAUKB23Lts2ApjOZifo%2FznTnwP77g0elZY69MWJZzKQEQ5mf2XmYlw9ysY8N1fnhIQ%2F5YIHNHYyc4H1%2FVR2ol6DyhdBp%2FH1oLqYLmcdhYfree150OTEE68DTXQg2vGYpbG6VhiqMYNuRLEGxwbWCUpCcyJeJJ0sEPx1FbSYiLcgyfEapIGMEWaJKKvDOIeK2vOvkbVgcDHgdheXXKHS7tJL8O1JeH8v3ZyCv%2F%2FEwiTL20R%2FW40SLLMaRACucfif4Zk6g1yv79V0EB2euqLFX92QSv%2FCuheL07Iv0UDuby66tKCiLNZ4xt%2FFyk3HH4w84t6Qre%2FQdMsOYfTsd2RpRZuBcvBktqhjUwH1CtjEqkS078OCeFepijDDvPm9BjqkAWJRn3iKulolVwGHliATgMA6Op76CO2kB2Taur9TLqUZA5oTtZG5dI0npU8oOrK4hE90LR%2Fe%2FJ2DgORscFC%2FRBuPV1H7zT5nmnUz%2Bv5vxaXKSUMSjKSCP4XO5OhDpuccTRNQQseEG%2BOav60bNAZA%2Bv1xAOJ1ssY7dLLI6a4l1h3nCJc7YdabFoEYCVqMHt6ueTtgX4Mu9oPRnXSzvJSzX%2BjlBCWB&X-Amz-Signature=1d403b33d6607cabd087112fa1097fb7ffc3ce0289d6326061d9b320dbf1fac3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEB7WQQ5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4Ox66c2Yp6buRqIkctXUTouRGmLz0OLcP86WqJBHFKAIhAOkGFBeD0s%2BXjnv5fAJjyNnitUQv4oB0Hepi3RtGoBVzKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOul6yEEaa7d4WrEkq3APnb5OSmkNXO4yI7uA4t3k868si21hrkYXT5V%2BZAKzjefIbRik%2FE%2Fg2YuOJdrhrDK%2FQx197s5w9S80HZ0dPLp1BqluU1mDtPYmQgbLec49oHIlP9EvWs9Gxcf%2FFsc0BhgfqKWbkehnSy1Mjq9L%2BAlQQky4qqk4n26nbWDJVIpfBpWCwKPJixJXrtG2mfJhZMpPeAybFrYD3fHJI%2BfNvlzkwVr2TVhZR8k0ovxOUffrhrGdbUMEJbOV4syi1GX0WyFJJdyZNPFAUKB23Lts2ApjOZifo%2FznTnwP77g0elZY69MWJZzKQEQ5mf2XmYlw9ysY8N1fnhIQ%2F5YIHNHYyc4H1%2FVR2ol6DyhdBp%2FH1oLqYLmcdhYfree150OTEE68DTXQg2vGYpbG6VhiqMYNuRLEGxwbWCUpCcyJeJJ0sEPx1FbSYiLcgyfEapIGMEWaJKKvDOIeK2vOvkbVgcDHgdheXXKHS7tJL8O1JeH8v3ZyCv%2F%2FEwiTL20R%2FW40SLLMaRACucfif4Zk6g1yv79V0EB2euqLFX92QSv%2FCuheL07Iv0UDuby66tKCiLNZ4xt%2FFyk3HH4w84t6Qre%2FQdMsOYfTsd2RpRZuBcvBktqhjUwH1CtjEqkS078OCeFepijDDvPm9BjqkAWJRn3iKulolVwGHliATgMA6Op76CO2kB2Taur9TLqUZA5oTtZG5dI0npU8oOrK4hE90LR%2Fe%2FJ2DgORscFC%2FRBuPV1H7zT5nmnUz%2Bv5vxaXKSUMSjKSCP4XO5OhDpuccTRNQQseEG%2BOav60bNAZA%2Bv1xAOJ1ssY7dLLI6a4l1h3nCJc7YdabFoEYCVqMHt6ueTtgX4Mu9oPRnXSzvJSzX%2BjlBCWB&X-Amz-Signature=0659de920a3f67cbec5886be93695c59e8b94246538c8823a8c14628ef6b5f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEB7WQQ5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4Ox66c2Yp6buRqIkctXUTouRGmLz0OLcP86WqJBHFKAIhAOkGFBeD0s%2BXjnv5fAJjyNnitUQv4oB0Hepi3RtGoBVzKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOul6yEEaa7d4WrEkq3APnb5OSmkNXO4yI7uA4t3k868si21hrkYXT5V%2BZAKzjefIbRik%2FE%2Fg2YuOJdrhrDK%2FQx197s5w9S80HZ0dPLp1BqluU1mDtPYmQgbLec49oHIlP9EvWs9Gxcf%2FFsc0BhgfqKWbkehnSy1Mjq9L%2BAlQQky4qqk4n26nbWDJVIpfBpWCwKPJixJXrtG2mfJhZMpPeAybFrYD3fHJI%2BfNvlzkwVr2TVhZR8k0ovxOUffrhrGdbUMEJbOV4syi1GX0WyFJJdyZNPFAUKB23Lts2ApjOZifo%2FznTnwP77g0elZY69MWJZzKQEQ5mf2XmYlw9ysY8N1fnhIQ%2F5YIHNHYyc4H1%2FVR2ol6DyhdBp%2FH1oLqYLmcdhYfree150OTEE68DTXQg2vGYpbG6VhiqMYNuRLEGxwbWCUpCcyJeJJ0sEPx1FbSYiLcgyfEapIGMEWaJKKvDOIeK2vOvkbVgcDHgdheXXKHS7tJL8O1JeH8v3ZyCv%2F%2FEwiTL20R%2FW40SLLMaRACucfif4Zk6g1yv79V0EB2euqLFX92QSv%2FCuheL07Iv0UDuby66tKCiLNZ4xt%2FFyk3HH4w84t6Qre%2FQdMsOYfTsd2RpRZuBcvBktqhjUwH1CtjEqkS078OCeFepijDDvPm9BjqkAWJRn3iKulolVwGHliATgMA6Op76CO2kB2Taur9TLqUZA5oTtZG5dI0npU8oOrK4hE90LR%2Fe%2FJ2DgORscFC%2FRBuPV1H7zT5nmnUz%2Bv5vxaXKSUMSjKSCP4XO5OhDpuccTRNQQseEG%2BOav60bNAZA%2Bv1xAOJ1ssY7dLLI6a4l1h3nCJc7YdabFoEYCVqMHt6ueTtgX4Mu9oPRnXSzvJSzX%2BjlBCWB&X-Amz-Signature=68aafabe7c35f2c0dd77446314f04102337e1d88aa406e9725ad50bbf7306272&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEB7WQQ5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4Ox66c2Yp6buRqIkctXUTouRGmLz0OLcP86WqJBHFKAIhAOkGFBeD0s%2BXjnv5fAJjyNnitUQv4oB0Hepi3RtGoBVzKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOul6yEEaa7d4WrEkq3APnb5OSmkNXO4yI7uA4t3k868si21hrkYXT5V%2BZAKzjefIbRik%2FE%2Fg2YuOJdrhrDK%2FQx197s5w9S80HZ0dPLp1BqluU1mDtPYmQgbLec49oHIlP9EvWs9Gxcf%2FFsc0BhgfqKWbkehnSy1Mjq9L%2BAlQQky4qqk4n26nbWDJVIpfBpWCwKPJixJXrtG2mfJhZMpPeAybFrYD3fHJI%2BfNvlzkwVr2TVhZR8k0ovxOUffrhrGdbUMEJbOV4syi1GX0WyFJJdyZNPFAUKB23Lts2ApjOZifo%2FznTnwP77g0elZY69MWJZzKQEQ5mf2XmYlw9ysY8N1fnhIQ%2F5YIHNHYyc4H1%2FVR2ol6DyhdBp%2FH1oLqYLmcdhYfree150OTEE68DTXQg2vGYpbG6VhiqMYNuRLEGxwbWCUpCcyJeJJ0sEPx1FbSYiLcgyfEapIGMEWaJKKvDOIeK2vOvkbVgcDHgdheXXKHS7tJL8O1JeH8v3ZyCv%2F%2FEwiTL20R%2FW40SLLMaRACucfif4Zk6g1yv79V0EB2euqLFX92QSv%2FCuheL07Iv0UDuby66tKCiLNZ4xt%2FFyk3HH4w84t6Qre%2FQdMsOYfTsd2RpRZuBcvBktqhjUwH1CtjEqkS078OCeFepijDDvPm9BjqkAWJRn3iKulolVwGHliATgMA6Op76CO2kB2Taur9TLqUZA5oTtZG5dI0npU8oOrK4hE90LR%2Fe%2FJ2DgORscFC%2FRBuPV1H7zT5nmnUz%2Bv5vxaXKSUMSjKSCP4XO5OhDpuccTRNQQseEG%2BOav60bNAZA%2Bv1xAOJ1ssY7dLLI6a4l1h3nCJc7YdabFoEYCVqMHt6ueTtgX4Mu9oPRnXSzvJSzX%2BjlBCWB&X-Amz-Signature=2f1c83f5b244615648c2b77b85fbb8f147192476318c7e5bc9fba861f8b4775c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEB7WQQ5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4Ox66c2Yp6buRqIkctXUTouRGmLz0OLcP86WqJBHFKAIhAOkGFBeD0s%2BXjnv5fAJjyNnitUQv4oB0Hepi3RtGoBVzKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOul6yEEaa7d4WrEkq3APnb5OSmkNXO4yI7uA4t3k868si21hrkYXT5V%2BZAKzjefIbRik%2FE%2Fg2YuOJdrhrDK%2FQx197s5w9S80HZ0dPLp1BqluU1mDtPYmQgbLec49oHIlP9EvWs9Gxcf%2FFsc0BhgfqKWbkehnSy1Mjq9L%2BAlQQky4qqk4n26nbWDJVIpfBpWCwKPJixJXrtG2mfJhZMpPeAybFrYD3fHJI%2BfNvlzkwVr2TVhZR8k0ovxOUffrhrGdbUMEJbOV4syi1GX0WyFJJdyZNPFAUKB23Lts2ApjOZifo%2FznTnwP77g0elZY69MWJZzKQEQ5mf2XmYlw9ysY8N1fnhIQ%2F5YIHNHYyc4H1%2FVR2ol6DyhdBp%2FH1oLqYLmcdhYfree150OTEE68DTXQg2vGYpbG6VhiqMYNuRLEGxwbWCUpCcyJeJJ0sEPx1FbSYiLcgyfEapIGMEWaJKKvDOIeK2vOvkbVgcDHgdheXXKHS7tJL8O1JeH8v3ZyCv%2F%2FEwiTL20R%2FW40SLLMaRACucfif4Zk6g1yv79V0EB2euqLFX92QSv%2FCuheL07Iv0UDuby66tKCiLNZ4xt%2FFyk3HH4w84t6Qre%2FQdMsOYfTsd2RpRZuBcvBktqhjUwH1CtjEqkS078OCeFepijDDvPm9BjqkAWJRn3iKulolVwGHliATgMA6Op76CO2kB2Taur9TLqUZA5oTtZG5dI0npU8oOrK4hE90LR%2Fe%2FJ2DgORscFC%2FRBuPV1H7zT5nmnUz%2Bv5vxaXKSUMSjKSCP4XO5OhDpuccTRNQQseEG%2BOav60bNAZA%2Bv1xAOJ1ssY7dLLI6a4l1h3nCJc7YdabFoEYCVqMHt6ueTtgX4Mu9oPRnXSzvJSzX%2BjlBCWB&X-Amz-Signature=bb129db1a474b9cd5671fe89298e90e3b6ce4490dafed94953c90056d09fd077&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEB7WQQ5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4Ox66c2Yp6buRqIkctXUTouRGmLz0OLcP86WqJBHFKAIhAOkGFBeD0s%2BXjnv5fAJjyNnitUQv4oB0Hepi3RtGoBVzKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOul6yEEaa7d4WrEkq3APnb5OSmkNXO4yI7uA4t3k868si21hrkYXT5V%2BZAKzjefIbRik%2FE%2Fg2YuOJdrhrDK%2FQx197s5w9S80HZ0dPLp1BqluU1mDtPYmQgbLec49oHIlP9EvWs9Gxcf%2FFsc0BhgfqKWbkehnSy1Mjq9L%2BAlQQky4qqk4n26nbWDJVIpfBpWCwKPJixJXrtG2mfJhZMpPeAybFrYD3fHJI%2BfNvlzkwVr2TVhZR8k0ovxOUffrhrGdbUMEJbOV4syi1GX0WyFJJdyZNPFAUKB23Lts2ApjOZifo%2FznTnwP77g0elZY69MWJZzKQEQ5mf2XmYlw9ysY8N1fnhIQ%2F5YIHNHYyc4H1%2FVR2ol6DyhdBp%2FH1oLqYLmcdhYfree150OTEE68DTXQg2vGYpbG6VhiqMYNuRLEGxwbWCUpCcyJeJJ0sEPx1FbSYiLcgyfEapIGMEWaJKKvDOIeK2vOvkbVgcDHgdheXXKHS7tJL8O1JeH8v3ZyCv%2F%2FEwiTL20R%2FW40SLLMaRACucfif4Zk6g1yv79V0EB2euqLFX92QSv%2FCuheL07Iv0UDuby66tKCiLNZ4xt%2FFyk3HH4w84t6Qre%2FQdMsOYfTsd2RpRZuBcvBktqhjUwH1CtjEqkS078OCeFepijDDvPm9BjqkAWJRn3iKulolVwGHliATgMA6Op76CO2kB2Taur9TLqUZA5oTtZG5dI0npU8oOrK4hE90LR%2Fe%2FJ2DgORscFC%2FRBuPV1H7zT5nmnUz%2Bv5vxaXKSUMSjKSCP4XO5OhDpuccTRNQQseEG%2BOav60bNAZA%2Bv1xAOJ1ssY7dLLI6a4l1h3nCJc7YdabFoEYCVqMHt6ueTtgX4Mu9oPRnXSzvJSzX%2BjlBCWB&X-Amz-Signature=4432bcae7a58a9377af2dc97d3465b8dc2b59aa5d368816e9cf76e8685eb87c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEB7WQQ5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4Ox66c2Yp6buRqIkctXUTouRGmLz0OLcP86WqJBHFKAIhAOkGFBeD0s%2BXjnv5fAJjyNnitUQv4oB0Hepi3RtGoBVzKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOul6yEEaa7d4WrEkq3APnb5OSmkNXO4yI7uA4t3k868si21hrkYXT5V%2BZAKzjefIbRik%2FE%2Fg2YuOJdrhrDK%2FQx197s5w9S80HZ0dPLp1BqluU1mDtPYmQgbLec49oHIlP9EvWs9Gxcf%2FFsc0BhgfqKWbkehnSy1Mjq9L%2BAlQQky4qqk4n26nbWDJVIpfBpWCwKPJixJXrtG2mfJhZMpPeAybFrYD3fHJI%2BfNvlzkwVr2TVhZR8k0ovxOUffrhrGdbUMEJbOV4syi1GX0WyFJJdyZNPFAUKB23Lts2ApjOZifo%2FznTnwP77g0elZY69MWJZzKQEQ5mf2XmYlw9ysY8N1fnhIQ%2F5YIHNHYyc4H1%2FVR2ol6DyhdBp%2FH1oLqYLmcdhYfree150OTEE68DTXQg2vGYpbG6VhiqMYNuRLEGxwbWCUpCcyJeJJ0sEPx1FbSYiLcgyfEapIGMEWaJKKvDOIeK2vOvkbVgcDHgdheXXKHS7tJL8O1JeH8v3ZyCv%2F%2FEwiTL20R%2FW40SLLMaRACucfif4Zk6g1yv79V0EB2euqLFX92QSv%2FCuheL07Iv0UDuby66tKCiLNZ4xt%2FFyk3HH4w84t6Qre%2FQdMsOYfTsd2RpRZuBcvBktqhjUwH1CtjEqkS078OCeFepijDDvPm9BjqkAWJRn3iKulolVwGHliATgMA6Op76CO2kB2Taur9TLqUZA5oTtZG5dI0npU8oOrK4hE90LR%2Fe%2FJ2DgORscFC%2FRBuPV1H7zT5nmnUz%2Bv5vxaXKSUMSjKSCP4XO5OhDpuccTRNQQseEG%2BOav60bNAZA%2Bv1xAOJ1ssY7dLLI6a4l1h3nCJc7YdabFoEYCVqMHt6ueTtgX4Mu9oPRnXSzvJSzX%2BjlBCWB&X-Amz-Signature=6b171dc0799568221e605321c1cf8102b5df399f208a5aed40f9b700f914eb40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEB7WQQ5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4Ox66c2Yp6buRqIkctXUTouRGmLz0OLcP86WqJBHFKAIhAOkGFBeD0s%2BXjnv5fAJjyNnitUQv4oB0Hepi3RtGoBVzKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOul6yEEaa7d4WrEkq3APnb5OSmkNXO4yI7uA4t3k868si21hrkYXT5V%2BZAKzjefIbRik%2FE%2Fg2YuOJdrhrDK%2FQx197s5w9S80HZ0dPLp1BqluU1mDtPYmQgbLec49oHIlP9EvWs9Gxcf%2FFsc0BhgfqKWbkehnSy1Mjq9L%2BAlQQky4qqk4n26nbWDJVIpfBpWCwKPJixJXrtG2mfJhZMpPeAybFrYD3fHJI%2BfNvlzkwVr2TVhZR8k0ovxOUffrhrGdbUMEJbOV4syi1GX0WyFJJdyZNPFAUKB23Lts2ApjOZifo%2FznTnwP77g0elZY69MWJZzKQEQ5mf2XmYlw9ysY8N1fnhIQ%2F5YIHNHYyc4H1%2FVR2ol6DyhdBp%2FH1oLqYLmcdhYfree150OTEE68DTXQg2vGYpbG6VhiqMYNuRLEGxwbWCUpCcyJeJJ0sEPx1FbSYiLcgyfEapIGMEWaJKKvDOIeK2vOvkbVgcDHgdheXXKHS7tJL8O1JeH8v3ZyCv%2F%2FEwiTL20R%2FW40SLLMaRACucfif4Zk6g1yv79V0EB2euqLFX92QSv%2FCuheL07Iv0UDuby66tKCiLNZ4xt%2FFyk3HH4w84t6Qre%2FQdMsOYfTsd2RpRZuBcvBktqhjUwH1CtjEqkS078OCeFepijDDvPm9BjqkAWJRn3iKulolVwGHliATgMA6Op76CO2kB2Taur9TLqUZA5oTtZG5dI0npU8oOrK4hE90LR%2Fe%2FJ2DgORscFC%2FRBuPV1H7zT5nmnUz%2Bv5vxaXKSUMSjKSCP4XO5OhDpuccTRNQQseEG%2BOav60bNAZA%2Bv1xAOJ1ssY7dLLI6a4l1h3nCJc7YdabFoEYCVqMHt6ueTtgX4Mu9oPRnXSzvJSzX%2BjlBCWB&X-Amz-Signature=a7fe4af1c5b1e7e093645c3e17f4e50e7b018bd5dd909414f5041deca66d3f06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
