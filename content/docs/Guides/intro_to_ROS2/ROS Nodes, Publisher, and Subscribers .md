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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZUM3IX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCJAH0qurwforRvRoWhDtuA7qpYZTgNIyDGq1X09OneaAIgOBMC8mNvnVdp3ITUMHKQzVW9LJ%2BhYT44NZa2l1jY53YqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJybIMMdWIFAwPgnbCrcA6%2Fxmk3a6%2BD7QfwrWlFDEkeDYuaHNew%2Bnkqc8KhdKtLcnYoO7JskK9thgnXbTRup6wkOhhJuEoQOcsOJ8OvKP6ZsSPiRToy%2F%2BcWgjcvx8gVFIA8PfHivOTalAK1tj7IpIIy2ujjeZ%2Fw0XH83439rIEl6IIeru%2FwGUmORRxG%2F7BeT5Hred%2BaOYnIEjn2nR6smiJ8Z4ZPrcuqtp09cfJiGU91VIcQB7HW31lfycPYOraUNwmaE5GDKBO2kZ%2F7IRT1QIY7RM9uX57JPhqCYQ%2BJKOn9gmE3S4EmDD0h4MGiZdIP3jezXWxTX7ARK9iHWk5FMYT6BK%2BXyMPlFn%2B5YzgFXBDYusZhcA2OKOUuP3BRujH3juRQQe%2B7ogUvFgagjjBNaWjiE3c4ZNVq7IeDR6aweSlt0U%2FlIlgA2BhmU6GinHGgIrsdL6CN0WHnsF%2B0CVx42n2EdKD5wM0Hy5%2F4ng8pe3Lp3ueLytiYmqIlE6uvFbVZwuCgDjjXcyRlqdq5QcLupCUU1NaiVeQowxI8wb5iLzlZtpX%2Fyu%2BdDDnXfx1bwNnzrZe29MkG2cngLg6H4WGNM06y6J2F0TQdUr6A75IwLWJhuiI1NaQpgYo3W3elcE89M6VGVL5et6UfenfMVMNjg7b8GOqUBqYjEQjNwItqmsuy%2FBBco6%2FqyVro%2B%2BouGPrlP96NjIOyz%2BZRRNX8iLYIx%2Fo5odPwOrLYkmT6nceb%2FSXVYINXO%2Fs%2Fwdzz634FXBfMf8qBYgrp0NCkgbzoqbIvY0cyvWAMLQ1JsBfguzLsUr9ZW1t99xKoaxSts9o5B3QmfNmoLRBmQKGn6siArrn7czuOMGYN6MG6EKAfK3hTzukgu6qVh6eS28uel&X-Amz-Signature=dc240bb478f647dcbfdc8be3c4bdff32f929b524b0e8e14e2cfc2169a0db8347&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZUM3IX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCJAH0qurwforRvRoWhDtuA7qpYZTgNIyDGq1X09OneaAIgOBMC8mNvnVdp3ITUMHKQzVW9LJ%2BhYT44NZa2l1jY53YqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJybIMMdWIFAwPgnbCrcA6%2Fxmk3a6%2BD7QfwrWlFDEkeDYuaHNew%2Bnkqc8KhdKtLcnYoO7JskK9thgnXbTRup6wkOhhJuEoQOcsOJ8OvKP6ZsSPiRToy%2F%2BcWgjcvx8gVFIA8PfHivOTalAK1tj7IpIIy2ujjeZ%2Fw0XH83439rIEl6IIeru%2FwGUmORRxG%2F7BeT5Hred%2BaOYnIEjn2nR6smiJ8Z4ZPrcuqtp09cfJiGU91VIcQB7HW31lfycPYOraUNwmaE5GDKBO2kZ%2F7IRT1QIY7RM9uX57JPhqCYQ%2BJKOn9gmE3S4EmDD0h4MGiZdIP3jezXWxTX7ARK9iHWk5FMYT6BK%2BXyMPlFn%2B5YzgFXBDYusZhcA2OKOUuP3BRujH3juRQQe%2B7ogUvFgagjjBNaWjiE3c4ZNVq7IeDR6aweSlt0U%2FlIlgA2BhmU6GinHGgIrsdL6CN0WHnsF%2B0CVx42n2EdKD5wM0Hy5%2F4ng8pe3Lp3ueLytiYmqIlE6uvFbVZwuCgDjjXcyRlqdq5QcLupCUU1NaiVeQowxI8wb5iLzlZtpX%2Fyu%2BdDDnXfx1bwNnzrZe29MkG2cngLg6H4WGNM06y6J2F0TQdUr6A75IwLWJhuiI1NaQpgYo3W3elcE89M6VGVL5et6UfenfMVMNjg7b8GOqUBqYjEQjNwItqmsuy%2FBBco6%2FqyVro%2B%2BouGPrlP96NjIOyz%2BZRRNX8iLYIx%2Fo5odPwOrLYkmT6nceb%2FSXVYINXO%2Fs%2Fwdzz634FXBfMf8qBYgrp0NCkgbzoqbIvY0cyvWAMLQ1JsBfguzLsUr9ZW1t99xKoaxSts9o5B3QmfNmoLRBmQKGn6siArrn7czuOMGYN6MG6EKAfK3hTzukgu6qVh6eS28uel&X-Amz-Signature=15a6312f1e692ef875ba555291a0760f27382dd263559f15f715736f9fa92acf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZUM3IX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCJAH0qurwforRvRoWhDtuA7qpYZTgNIyDGq1X09OneaAIgOBMC8mNvnVdp3ITUMHKQzVW9LJ%2BhYT44NZa2l1jY53YqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJybIMMdWIFAwPgnbCrcA6%2Fxmk3a6%2BD7QfwrWlFDEkeDYuaHNew%2Bnkqc8KhdKtLcnYoO7JskK9thgnXbTRup6wkOhhJuEoQOcsOJ8OvKP6ZsSPiRToy%2F%2BcWgjcvx8gVFIA8PfHivOTalAK1tj7IpIIy2ujjeZ%2Fw0XH83439rIEl6IIeru%2FwGUmORRxG%2F7BeT5Hred%2BaOYnIEjn2nR6smiJ8Z4ZPrcuqtp09cfJiGU91VIcQB7HW31lfycPYOraUNwmaE5GDKBO2kZ%2F7IRT1QIY7RM9uX57JPhqCYQ%2BJKOn9gmE3S4EmDD0h4MGiZdIP3jezXWxTX7ARK9iHWk5FMYT6BK%2BXyMPlFn%2B5YzgFXBDYusZhcA2OKOUuP3BRujH3juRQQe%2B7ogUvFgagjjBNaWjiE3c4ZNVq7IeDR6aweSlt0U%2FlIlgA2BhmU6GinHGgIrsdL6CN0WHnsF%2B0CVx42n2EdKD5wM0Hy5%2F4ng8pe3Lp3ueLytiYmqIlE6uvFbVZwuCgDjjXcyRlqdq5QcLupCUU1NaiVeQowxI8wb5iLzlZtpX%2Fyu%2BdDDnXfx1bwNnzrZe29MkG2cngLg6H4WGNM06y6J2F0TQdUr6A75IwLWJhuiI1NaQpgYo3W3elcE89M6VGVL5et6UfenfMVMNjg7b8GOqUBqYjEQjNwItqmsuy%2FBBco6%2FqyVro%2B%2BouGPrlP96NjIOyz%2BZRRNX8iLYIx%2Fo5odPwOrLYkmT6nceb%2FSXVYINXO%2Fs%2Fwdzz634FXBfMf8qBYgrp0NCkgbzoqbIvY0cyvWAMLQ1JsBfguzLsUr9ZW1t99xKoaxSts9o5B3QmfNmoLRBmQKGn6siArrn7czuOMGYN6MG6EKAfK3hTzukgu6qVh6eS28uel&X-Amz-Signature=5a4b419f465d1ca95ca3ade731fe05e8d712ca558cec10e68a0928cc159da548&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZUM3IX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCJAH0qurwforRvRoWhDtuA7qpYZTgNIyDGq1X09OneaAIgOBMC8mNvnVdp3ITUMHKQzVW9LJ%2BhYT44NZa2l1jY53YqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJybIMMdWIFAwPgnbCrcA6%2Fxmk3a6%2BD7QfwrWlFDEkeDYuaHNew%2Bnkqc8KhdKtLcnYoO7JskK9thgnXbTRup6wkOhhJuEoQOcsOJ8OvKP6ZsSPiRToy%2F%2BcWgjcvx8gVFIA8PfHivOTalAK1tj7IpIIy2ujjeZ%2Fw0XH83439rIEl6IIeru%2FwGUmORRxG%2F7BeT5Hred%2BaOYnIEjn2nR6smiJ8Z4ZPrcuqtp09cfJiGU91VIcQB7HW31lfycPYOraUNwmaE5GDKBO2kZ%2F7IRT1QIY7RM9uX57JPhqCYQ%2BJKOn9gmE3S4EmDD0h4MGiZdIP3jezXWxTX7ARK9iHWk5FMYT6BK%2BXyMPlFn%2B5YzgFXBDYusZhcA2OKOUuP3BRujH3juRQQe%2B7ogUvFgagjjBNaWjiE3c4ZNVq7IeDR6aweSlt0U%2FlIlgA2BhmU6GinHGgIrsdL6CN0WHnsF%2B0CVx42n2EdKD5wM0Hy5%2F4ng8pe3Lp3ueLytiYmqIlE6uvFbVZwuCgDjjXcyRlqdq5QcLupCUU1NaiVeQowxI8wb5iLzlZtpX%2Fyu%2BdDDnXfx1bwNnzrZe29MkG2cngLg6H4WGNM06y6J2F0TQdUr6A75IwLWJhuiI1NaQpgYo3W3elcE89M6VGVL5et6UfenfMVMNjg7b8GOqUBqYjEQjNwItqmsuy%2FBBco6%2FqyVro%2B%2BouGPrlP96NjIOyz%2BZRRNX8iLYIx%2Fo5odPwOrLYkmT6nceb%2FSXVYINXO%2Fs%2Fwdzz634FXBfMf8qBYgrp0NCkgbzoqbIvY0cyvWAMLQ1JsBfguzLsUr9ZW1t99xKoaxSts9o5B3QmfNmoLRBmQKGn6siArrn7czuOMGYN6MG6EKAfK3hTzukgu6qVh6eS28uel&X-Amz-Signature=e3b2a7112ebaa8fb8eb7af7dcbd6169b5d035ea43c5e249c07241f5eb9d70ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZUM3IX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCJAH0qurwforRvRoWhDtuA7qpYZTgNIyDGq1X09OneaAIgOBMC8mNvnVdp3ITUMHKQzVW9LJ%2BhYT44NZa2l1jY53YqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJybIMMdWIFAwPgnbCrcA6%2Fxmk3a6%2BD7QfwrWlFDEkeDYuaHNew%2Bnkqc8KhdKtLcnYoO7JskK9thgnXbTRup6wkOhhJuEoQOcsOJ8OvKP6ZsSPiRToy%2F%2BcWgjcvx8gVFIA8PfHivOTalAK1tj7IpIIy2ujjeZ%2Fw0XH83439rIEl6IIeru%2FwGUmORRxG%2F7BeT5Hred%2BaOYnIEjn2nR6smiJ8Z4ZPrcuqtp09cfJiGU91VIcQB7HW31lfycPYOraUNwmaE5GDKBO2kZ%2F7IRT1QIY7RM9uX57JPhqCYQ%2BJKOn9gmE3S4EmDD0h4MGiZdIP3jezXWxTX7ARK9iHWk5FMYT6BK%2BXyMPlFn%2B5YzgFXBDYusZhcA2OKOUuP3BRujH3juRQQe%2B7ogUvFgagjjBNaWjiE3c4ZNVq7IeDR6aweSlt0U%2FlIlgA2BhmU6GinHGgIrsdL6CN0WHnsF%2B0CVx42n2EdKD5wM0Hy5%2F4ng8pe3Lp3ueLytiYmqIlE6uvFbVZwuCgDjjXcyRlqdq5QcLupCUU1NaiVeQowxI8wb5iLzlZtpX%2Fyu%2BdDDnXfx1bwNnzrZe29MkG2cngLg6H4WGNM06y6J2F0TQdUr6A75IwLWJhuiI1NaQpgYo3W3elcE89M6VGVL5et6UfenfMVMNjg7b8GOqUBqYjEQjNwItqmsuy%2FBBco6%2FqyVro%2B%2BouGPrlP96NjIOyz%2BZRRNX8iLYIx%2Fo5odPwOrLYkmT6nceb%2FSXVYINXO%2Fs%2Fwdzz634FXBfMf8qBYgrp0NCkgbzoqbIvY0cyvWAMLQ1JsBfguzLsUr9ZW1t99xKoaxSts9o5B3QmfNmoLRBmQKGn6siArrn7czuOMGYN6MG6EKAfK3hTzukgu6qVh6eS28uel&X-Amz-Signature=d482273029918bf21456cfa2853e59b5bcf0f045343f4e8ded2fa7243cad7501&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZUM3IX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCJAH0qurwforRvRoWhDtuA7qpYZTgNIyDGq1X09OneaAIgOBMC8mNvnVdp3ITUMHKQzVW9LJ%2BhYT44NZa2l1jY53YqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJybIMMdWIFAwPgnbCrcA6%2Fxmk3a6%2BD7QfwrWlFDEkeDYuaHNew%2Bnkqc8KhdKtLcnYoO7JskK9thgnXbTRup6wkOhhJuEoQOcsOJ8OvKP6ZsSPiRToy%2F%2BcWgjcvx8gVFIA8PfHivOTalAK1tj7IpIIy2ujjeZ%2Fw0XH83439rIEl6IIeru%2FwGUmORRxG%2F7BeT5Hred%2BaOYnIEjn2nR6smiJ8Z4ZPrcuqtp09cfJiGU91VIcQB7HW31lfycPYOraUNwmaE5GDKBO2kZ%2F7IRT1QIY7RM9uX57JPhqCYQ%2BJKOn9gmE3S4EmDD0h4MGiZdIP3jezXWxTX7ARK9iHWk5FMYT6BK%2BXyMPlFn%2B5YzgFXBDYusZhcA2OKOUuP3BRujH3juRQQe%2B7ogUvFgagjjBNaWjiE3c4ZNVq7IeDR6aweSlt0U%2FlIlgA2BhmU6GinHGgIrsdL6CN0WHnsF%2B0CVx42n2EdKD5wM0Hy5%2F4ng8pe3Lp3ueLytiYmqIlE6uvFbVZwuCgDjjXcyRlqdq5QcLupCUU1NaiVeQowxI8wb5iLzlZtpX%2Fyu%2BdDDnXfx1bwNnzrZe29MkG2cngLg6H4WGNM06y6J2F0TQdUr6A75IwLWJhuiI1NaQpgYo3W3elcE89M6VGVL5et6UfenfMVMNjg7b8GOqUBqYjEQjNwItqmsuy%2FBBco6%2FqyVro%2B%2BouGPrlP96NjIOyz%2BZRRNX8iLYIx%2Fo5odPwOrLYkmT6nceb%2FSXVYINXO%2Fs%2Fwdzz634FXBfMf8qBYgrp0NCkgbzoqbIvY0cyvWAMLQ1JsBfguzLsUr9ZW1t99xKoaxSts9o5B3QmfNmoLRBmQKGn6siArrn7czuOMGYN6MG6EKAfK3hTzukgu6qVh6eS28uel&X-Amz-Signature=e1a45dfcc4d13ee7583f71ec8499b54c5a0d10fa88b4fca31b6896ee8242b096&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZUM3IX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCJAH0qurwforRvRoWhDtuA7qpYZTgNIyDGq1X09OneaAIgOBMC8mNvnVdp3ITUMHKQzVW9LJ%2BhYT44NZa2l1jY53YqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJybIMMdWIFAwPgnbCrcA6%2Fxmk3a6%2BD7QfwrWlFDEkeDYuaHNew%2Bnkqc8KhdKtLcnYoO7JskK9thgnXbTRup6wkOhhJuEoQOcsOJ8OvKP6ZsSPiRToy%2F%2BcWgjcvx8gVFIA8PfHivOTalAK1tj7IpIIy2ujjeZ%2Fw0XH83439rIEl6IIeru%2FwGUmORRxG%2F7BeT5Hred%2BaOYnIEjn2nR6smiJ8Z4ZPrcuqtp09cfJiGU91VIcQB7HW31lfycPYOraUNwmaE5GDKBO2kZ%2F7IRT1QIY7RM9uX57JPhqCYQ%2BJKOn9gmE3S4EmDD0h4MGiZdIP3jezXWxTX7ARK9iHWk5FMYT6BK%2BXyMPlFn%2B5YzgFXBDYusZhcA2OKOUuP3BRujH3juRQQe%2B7ogUvFgagjjBNaWjiE3c4ZNVq7IeDR6aweSlt0U%2FlIlgA2BhmU6GinHGgIrsdL6CN0WHnsF%2B0CVx42n2EdKD5wM0Hy5%2F4ng8pe3Lp3ueLytiYmqIlE6uvFbVZwuCgDjjXcyRlqdq5QcLupCUU1NaiVeQowxI8wb5iLzlZtpX%2Fyu%2BdDDnXfx1bwNnzrZe29MkG2cngLg6H4WGNM06y6J2F0TQdUr6A75IwLWJhuiI1NaQpgYo3W3elcE89M6VGVL5et6UfenfMVMNjg7b8GOqUBqYjEQjNwItqmsuy%2FBBco6%2FqyVro%2B%2BouGPrlP96NjIOyz%2BZRRNX8iLYIx%2Fo5odPwOrLYkmT6nceb%2FSXVYINXO%2Fs%2Fwdzz634FXBfMf8qBYgrp0NCkgbzoqbIvY0cyvWAMLQ1JsBfguzLsUr9ZW1t99xKoaxSts9o5B3QmfNmoLRBmQKGn6siArrn7czuOMGYN6MG6EKAfK3hTzukgu6qVh6eS28uel&X-Amz-Signature=fc62d33f8251c89f5ee18ed6d7b7b9d0a6481603af4fac15caa2e0387175d3db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZUM3IX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCJAH0qurwforRvRoWhDtuA7qpYZTgNIyDGq1X09OneaAIgOBMC8mNvnVdp3ITUMHKQzVW9LJ%2BhYT44NZa2l1jY53YqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJybIMMdWIFAwPgnbCrcA6%2Fxmk3a6%2BD7QfwrWlFDEkeDYuaHNew%2Bnkqc8KhdKtLcnYoO7JskK9thgnXbTRup6wkOhhJuEoQOcsOJ8OvKP6ZsSPiRToy%2F%2BcWgjcvx8gVFIA8PfHivOTalAK1tj7IpIIy2ujjeZ%2Fw0XH83439rIEl6IIeru%2FwGUmORRxG%2F7BeT5Hred%2BaOYnIEjn2nR6smiJ8Z4ZPrcuqtp09cfJiGU91VIcQB7HW31lfycPYOraUNwmaE5GDKBO2kZ%2F7IRT1QIY7RM9uX57JPhqCYQ%2BJKOn9gmE3S4EmDD0h4MGiZdIP3jezXWxTX7ARK9iHWk5FMYT6BK%2BXyMPlFn%2B5YzgFXBDYusZhcA2OKOUuP3BRujH3juRQQe%2B7ogUvFgagjjBNaWjiE3c4ZNVq7IeDR6aweSlt0U%2FlIlgA2BhmU6GinHGgIrsdL6CN0WHnsF%2B0CVx42n2EdKD5wM0Hy5%2F4ng8pe3Lp3ueLytiYmqIlE6uvFbVZwuCgDjjXcyRlqdq5QcLupCUU1NaiVeQowxI8wb5iLzlZtpX%2Fyu%2BdDDnXfx1bwNnzrZe29MkG2cngLg6H4WGNM06y6J2F0TQdUr6A75IwLWJhuiI1NaQpgYo3W3elcE89M6VGVL5et6UfenfMVMNjg7b8GOqUBqYjEQjNwItqmsuy%2FBBco6%2FqyVro%2B%2BouGPrlP96NjIOyz%2BZRRNX8iLYIx%2Fo5odPwOrLYkmT6nceb%2FSXVYINXO%2Fs%2Fwdzz634FXBfMf8qBYgrp0NCkgbzoqbIvY0cyvWAMLQ1JsBfguzLsUr9ZW1t99xKoaxSts9o5B3QmfNmoLRBmQKGn6siArrn7czuOMGYN6MG6EKAfK3hTzukgu6qVh6eS28uel&X-Amz-Signature=bb0419265d9cbd3d8de6cd4f9c7ba4446973b3cdebba4898b111b4c702fef455&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
