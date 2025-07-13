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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7I5P6Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb%2B7av1iY0og6puPfyOk836K7QpGSpLFJNrCotrR36AiEAvC3NjvqsPTjCtID7sQoEWDqSG3L2OCE%2Fx6zvEae4U2Yq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHV2PEKiUoDpjLStWCrcAw6cdjiAoXvJK7yXu5M4hVxb4Ux%2BVj6eS0BctfFw3j%2BfF5rJShHGA0BmwiKznLkCtbIGgVJjTHvSCDCYEl%2FcZSrs3en7V7ycCFKKK2A%2FxY9u3yTKXdiwKzs%2B2c6ciHaQYCj5bcb3O39rK6vF10goKzSywXlpWfLB3tmNFEv2o0PKsY8hvJfhIr64bAeXjFj157QIdfy8531A0QX%2B0we9bqzfl7ZGyzPf4MFj8pzjLQrMiRxTpPK%2FKVo1e1%2BRsVtqqyaSOUUdgGhwBkoUEh4EdeEha0xCOd3floY4YjeydzNQJtxi0DBZVzbWt5QQJCT4Ikm7udpssaTZc3AOGqiNTlkURnhv1QamrdR6%2Bzeyz9OEQkuAzHpXiPRcjRdabhbVRQsZx0f7SQxGj55dJYgKDrlKTxQQPmFMVty9WBlpaKCdBbwicBJ7T%2FxvUInwt50%2BZQy3psTtc989UZYPovvZ2QihAlurKcwGbZ5oVEUVKlv7FgvIYFVRMoYmgV3tMW7wTMv7IfA6jAO%2BkHaPsDJV6ZNheXEiAL3OQ1AOdKWQzl5nP%2FYOkwd%2BJISr1NzwdkJ99h039LzqBE0S2E0LwJyWpr0LRaipqF7F07h93hq2a3PpqdLkH9ExF4fDZKeVMIu0zsMGOqUBHPyx6ephLKkEUr9uImgJPMizkD8x6z0AiiGZvGv8uM7Edv%2F1grn7PCycCQlaSpjPs3OL7JZvtROr78CH4BQFYWh8Xhd84xolPo91IHS2SM0glET9BAFmJYehr7xv8kAshWDtHroMFywXtFGbDi78gGv6%2BppMl%2FlzXJz8QftJ2tnjJFAoLswKjpsi%2BZv8bF%2B4RNKGXkG92qwtstpGHOCGPd9a2VP%2F&X-Amz-Signature=b176fd7c7fc7c98194af3787c0898056c1e435b9ac830c4df1b824e0613a2752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7I5P6Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb%2B7av1iY0og6puPfyOk836K7QpGSpLFJNrCotrR36AiEAvC3NjvqsPTjCtID7sQoEWDqSG3L2OCE%2Fx6zvEae4U2Yq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHV2PEKiUoDpjLStWCrcAw6cdjiAoXvJK7yXu5M4hVxb4Ux%2BVj6eS0BctfFw3j%2BfF5rJShHGA0BmwiKznLkCtbIGgVJjTHvSCDCYEl%2FcZSrs3en7V7ycCFKKK2A%2FxY9u3yTKXdiwKzs%2B2c6ciHaQYCj5bcb3O39rK6vF10goKzSywXlpWfLB3tmNFEv2o0PKsY8hvJfhIr64bAeXjFj157QIdfy8531A0QX%2B0we9bqzfl7ZGyzPf4MFj8pzjLQrMiRxTpPK%2FKVo1e1%2BRsVtqqyaSOUUdgGhwBkoUEh4EdeEha0xCOd3floY4YjeydzNQJtxi0DBZVzbWt5QQJCT4Ikm7udpssaTZc3AOGqiNTlkURnhv1QamrdR6%2Bzeyz9OEQkuAzHpXiPRcjRdabhbVRQsZx0f7SQxGj55dJYgKDrlKTxQQPmFMVty9WBlpaKCdBbwicBJ7T%2FxvUInwt50%2BZQy3psTtc989UZYPovvZ2QihAlurKcwGbZ5oVEUVKlv7FgvIYFVRMoYmgV3tMW7wTMv7IfA6jAO%2BkHaPsDJV6ZNheXEiAL3OQ1AOdKWQzl5nP%2FYOkwd%2BJISr1NzwdkJ99h039LzqBE0S2E0LwJyWpr0LRaipqF7F07h93hq2a3PpqdLkH9ExF4fDZKeVMIu0zsMGOqUBHPyx6ephLKkEUr9uImgJPMizkD8x6z0AiiGZvGv8uM7Edv%2F1grn7PCycCQlaSpjPs3OL7JZvtROr78CH4BQFYWh8Xhd84xolPo91IHS2SM0glET9BAFmJYehr7xv8kAshWDtHroMFywXtFGbDi78gGv6%2BppMl%2FlzXJz8QftJ2tnjJFAoLswKjpsi%2BZv8bF%2B4RNKGXkG92qwtstpGHOCGPd9a2VP%2F&X-Amz-Signature=e8d40b419f5584e8e9c46cb68e594bead1ee73781fac2a88004a86145ff26ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7I5P6Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb%2B7av1iY0og6puPfyOk836K7QpGSpLFJNrCotrR36AiEAvC3NjvqsPTjCtID7sQoEWDqSG3L2OCE%2Fx6zvEae4U2Yq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHV2PEKiUoDpjLStWCrcAw6cdjiAoXvJK7yXu5M4hVxb4Ux%2BVj6eS0BctfFw3j%2BfF5rJShHGA0BmwiKznLkCtbIGgVJjTHvSCDCYEl%2FcZSrs3en7V7ycCFKKK2A%2FxY9u3yTKXdiwKzs%2B2c6ciHaQYCj5bcb3O39rK6vF10goKzSywXlpWfLB3tmNFEv2o0PKsY8hvJfhIr64bAeXjFj157QIdfy8531A0QX%2B0we9bqzfl7ZGyzPf4MFj8pzjLQrMiRxTpPK%2FKVo1e1%2BRsVtqqyaSOUUdgGhwBkoUEh4EdeEha0xCOd3floY4YjeydzNQJtxi0DBZVzbWt5QQJCT4Ikm7udpssaTZc3AOGqiNTlkURnhv1QamrdR6%2Bzeyz9OEQkuAzHpXiPRcjRdabhbVRQsZx0f7SQxGj55dJYgKDrlKTxQQPmFMVty9WBlpaKCdBbwicBJ7T%2FxvUInwt50%2BZQy3psTtc989UZYPovvZ2QihAlurKcwGbZ5oVEUVKlv7FgvIYFVRMoYmgV3tMW7wTMv7IfA6jAO%2BkHaPsDJV6ZNheXEiAL3OQ1AOdKWQzl5nP%2FYOkwd%2BJISr1NzwdkJ99h039LzqBE0S2E0LwJyWpr0LRaipqF7F07h93hq2a3PpqdLkH9ExF4fDZKeVMIu0zsMGOqUBHPyx6ephLKkEUr9uImgJPMizkD8x6z0AiiGZvGv8uM7Edv%2F1grn7PCycCQlaSpjPs3OL7JZvtROr78CH4BQFYWh8Xhd84xolPo91IHS2SM0glET9BAFmJYehr7xv8kAshWDtHroMFywXtFGbDi78gGv6%2BppMl%2FlzXJz8QftJ2tnjJFAoLswKjpsi%2BZv8bF%2B4RNKGXkG92qwtstpGHOCGPd9a2VP%2F&X-Amz-Signature=b634e14c694d15cd183d6574eeedfc050d93c08799e577403c41c55e8b8bfee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7I5P6Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb%2B7av1iY0og6puPfyOk836K7QpGSpLFJNrCotrR36AiEAvC3NjvqsPTjCtID7sQoEWDqSG3L2OCE%2Fx6zvEae4U2Yq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHV2PEKiUoDpjLStWCrcAw6cdjiAoXvJK7yXu5M4hVxb4Ux%2BVj6eS0BctfFw3j%2BfF5rJShHGA0BmwiKznLkCtbIGgVJjTHvSCDCYEl%2FcZSrs3en7V7ycCFKKK2A%2FxY9u3yTKXdiwKzs%2B2c6ciHaQYCj5bcb3O39rK6vF10goKzSywXlpWfLB3tmNFEv2o0PKsY8hvJfhIr64bAeXjFj157QIdfy8531A0QX%2B0we9bqzfl7ZGyzPf4MFj8pzjLQrMiRxTpPK%2FKVo1e1%2BRsVtqqyaSOUUdgGhwBkoUEh4EdeEha0xCOd3floY4YjeydzNQJtxi0DBZVzbWt5QQJCT4Ikm7udpssaTZc3AOGqiNTlkURnhv1QamrdR6%2Bzeyz9OEQkuAzHpXiPRcjRdabhbVRQsZx0f7SQxGj55dJYgKDrlKTxQQPmFMVty9WBlpaKCdBbwicBJ7T%2FxvUInwt50%2BZQy3psTtc989UZYPovvZ2QihAlurKcwGbZ5oVEUVKlv7FgvIYFVRMoYmgV3tMW7wTMv7IfA6jAO%2BkHaPsDJV6ZNheXEiAL3OQ1AOdKWQzl5nP%2FYOkwd%2BJISr1NzwdkJ99h039LzqBE0S2E0LwJyWpr0LRaipqF7F07h93hq2a3PpqdLkH9ExF4fDZKeVMIu0zsMGOqUBHPyx6ephLKkEUr9uImgJPMizkD8x6z0AiiGZvGv8uM7Edv%2F1grn7PCycCQlaSpjPs3OL7JZvtROr78CH4BQFYWh8Xhd84xolPo91IHS2SM0glET9BAFmJYehr7xv8kAshWDtHroMFywXtFGbDi78gGv6%2BppMl%2FlzXJz8QftJ2tnjJFAoLswKjpsi%2BZv8bF%2B4RNKGXkG92qwtstpGHOCGPd9a2VP%2F&X-Amz-Signature=746da77378381040c0d665f777f65bf3abd1d1702a109240a41e077834f8afc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7I5P6Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb%2B7av1iY0og6puPfyOk836K7QpGSpLFJNrCotrR36AiEAvC3NjvqsPTjCtID7sQoEWDqSG3L2OCE%2Fx6zvEae4U2Yq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHV2PEKiUoDpjLStWCrcAw6cdjiAoXvJK7yXu5M4hVxb4Ux%2BVj6eS0BctfFw3j%2BfF5rJShHGA0BmwiKznLkCtbIGgVJjTHvSCDCYEl%2FcZSrs3en7V7ycCFKKK2A%2FxY9u3yTKXdiwKzs%2B2c6ciHaQYCj5bcb3O39rK6vF10goKzSywXlpWfLB3tmNFEv2o0PKsY8hvJfhIr64bAeXjFj157QIdfy8531A0QX%2B0we9bqzfl7ZGyzPf4MFj8pzjLQrMiRxTpPK%2FKVo1e1%2BRsVtqqyaSOUUdgGhwBkoUEh4EdeEha0xCOd3floY4YjeydzNQJtxi0DBZVzbWt5QQJCT4Ikm7udpssaTZc3AOGqiNTlkURnhv1QamrdR6%2Bzeyz9OEQkuAzHpXiPRcjRdabhbVRQsZx0f7SQxGj55dJYgKDrlKTxQQPmFMVty9WBlpaKCdBbwicBJ7T%2FxvUInwt50%2BZQy3psTtc989UZYPovvZ2QihAlurKcwGbZ5oVEUVKlv7FgvIYFVRMoYmgV3tMW7wTMv7IfA6jAO%2BkHaPsDJV6ZNheXEiAL3OQ1AOdKWQzl5nP%2FYOkwd%2BJISr1NzwdkJ99h039LzqBE0S2E0LwJyWpr0LRaipqF7F07h93hq2a3PpqdLkH9ExF4fDZKeVMIu0zsMGOqUBHPyx6ephLKkEUr9uImgJPMizkD8x6z0AiiGZvGv8uM7Edv%2F1grn7PCycCQlaSpjPs3OL7JZvtROr78CH4BQFYWh8Xhd84xolPo91IHS2SM0glET9BAFmJYehr7xv8kAshWDtHroMFywXtFGbDi78gGv6%2BppMl%2FlzXJz8QftJ2tnjJFAoLswKjpsi%2BZv8bF%2B4RNKGXkG92qwtstpGHOCGPd9a2VP%2F&X-Amz-Signature=a521a452341f83a404da7922c6d9aaac9590f51a6078c0a62063d594e89908bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7I5P6Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb%2B7av1iY0og6puPfyOk836K7QpGSpLFJNrCotrR36AiEAvC3NjvqsPTjCtID7sQoEWDqSG3L2OCE%2Fx6zvEae4U2Yq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHV2PEKiUoDpjLStWCrcAw6cdjiAoXvJK7yXu5M4hVxb4Ux%2BVj6eS0BctfFw3j%2BfF5rJShHGA0BmwiKznLkCtbIGgVJjTHvSCDCYEl%2FcZSrs3en7V7ycCFKKK2A%2FxY9u3yTKXdiwKzs%2B2c6ciHaQYCj5bcb3O39rK6vF10goKzSywXlpWfLB3tmNFEv2o0PKsY8hvJfhIr64bAeXjFj157QIdfy8531A0QX%2B0we9bqzfl7ZGyzPf4MFj8pzjLQrMiRxTpPK%2FKVo1e1%2BRsVtqqyaSOUUdgGhwBkoUEh4EdeEha0xCOd3floY4YjeydzNQJtxi0DBZVzbWt5QQJCT4Ikm7udpssaTZc3AOGqiNTlkURnhv1QamrdR6%2Bzeyz9OEQkuAzHpXiPRcjRdabhbVRQsZx0f7SQxGj55dJYgKDrlKTxQQPmFMVty9WBlpaKCdBbwicBJ7T%2FxvUInwt50%2BZQy3psTtc989UZYPovvZ2QihAlurKcwGbZ5oVEUVKlv7FgvIYFVRMoYmgV3tMW7wTMv7IfA6jAO%2BkHaPsDJV6ZNheXEiAL3OQ1AOdKWQzl5nP%2FYOkwd%2BJISr1NzwdkJ99h039LzqBE0S2E0LwJyWpr0LRaipqF7F07h93hq2a3PpqdLkH9ExF4fDZKeVMIu0zsMGOqUBHPyx6ephLKkEUr9uImgJPMizkD8x6z0AiiGZvGv8uM7Edv%2F1grn7PCycCQlaSpjPs3OL7JZvtROr78CH4BQFYWh8Xhd84xolPo91IHS2SM0glET9BAFmJYehr7xv8kAshWDtHroMFywXtFGbDi78gGv6%2BppMl%2FlzXJz8QftJ2tnjJFAoLswKjpsi%2BZv8bF%2B4RNKGXkG92qwtstpGHOCGPd9a2VP%2F&X-Amz-Signature=f1f60f588b16d256c22b0c42f20f3dff4bc438ef8a69c1ba55b3e5033f67f89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7I5P6Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb%2B7av1iY0og6puPfyOk836K7QpGSpLFJNrCotrR36AiEAvC3NjvqsPTjCtID7sQoEWDqSG3L2OCE%2Fx6zvEae4U2Yq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHV2PEKiUoDpjLStWCrcAw6cdjiAoXvJK7yXu5M4hVxb4Ux%2BVj6eS0BctfFw3j%2BfF5rJShHGA0BmwiKznLkCtbIGgVJjTHvSCDCYEl%2FcZSrs3en7V7ycCFKKK2A%2FxY9u3yTKXdiwKzs%2B2c6ciHaQYCj5bcb3O39rK6vF10goKzSywXlpWfLB3tmNFEv2o0PKsY8hvJfhIr64bAeXjFj157QIdfy8531A0QX%2B0we9bqzfl7ZGyzPf4MFj8pzjLQrMiRxTpPK%2FKVo1e1%2BRsVtqqyaSOUUdgGhwBkoUEh4EdeEha0xCOd3floY4YjeydzNQJtxi0DBZVzbWt5QQJCT4Ikm7udpssaTZc3AOGqiNTlkURnhv1QamrdR6%2Bzeyz9OEQkuAzHpXiPRcjRdabhbVRQsZx0f7SQxGj55dJYgKDrlKTxQQPmFMVty9WBlpaKCdBbwicBJ7T%2FxvUInwt50%2BZQy3psTtc989UZYPovvZ2QihAlurKcwGbZ5oVEUVKlv7FgvIYFVRMoYmgV3tMW7wTMv7IfA6jAO%2BkHaPsDJV6ZNheXEiAL3OQ1AOdKWQzl5nP%2FYOkwd%2BJISr1NzwdkJ99h039LzqBE0S2E0LwJyWpr0LRaipqF7F07h93hq2a3PpqdLkH9ExF4fDZKeVMIu0zsMGOqUBHPyx6ephLKkEUr9uImgJPMizkD8x6z0AiiGZvGv8uM7Edv%2F1grn7PCycCQlaSpjPs3OL7JZvtROr78CH4BQFYWh8Xhd84xolPo91IHS2SM0glET9BAFmJYehr7xv8kAshWDtHroMFywXtFGbDi78gGv6%2BppMl%2FlzXJz8QftJ2tnjJFAoLswKjpsi%2BZv8bF%2B4RNKGXkG92qwtstpGHOCGPd9a2VP%2F&X-Amz-Signature=41e72ac891ede3a2b4ae1e4f17bb089a935f44d8c6df4200cbe5555b0b724bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7I5P6Q%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb%2B7av1iY0og6puPfyOk836K7QpGSpLFJNrCotrR36AiEAvC3NjvqsPTjCtID7sQoEWDqSG3L2OCE%2Fx6zvEae4U2Yq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHV2PEKiUoDpjLStWCrcAw6cdjiAoXvJK7yXu5M4hVxb4Ux%2BVj6eS0BctfFw3j%2BfF5rJShHGA0BmwiKznLkCtbIGgVJjTHvSCDCYEl%2FcZSrs3en7V7ycCFKKK2A%2FxY9u3yTKXdiwKzs%2B2c6ciHaQYCj5bcb3O39rK6vF10goKzSywXlpWfLB3tmNFEv2o0PKsY8hvJfhIr64bAeXjFj157QIdfy8531A0QX%2B0we9bqzfl7ZGyzPf4MFj8pzjLQrMiRxTpPK%2FKVo1e1%2BRsVtqqyaSOUUdgGhwBkoUEh4EdeEha0xCOd3floY4YjeydzNQJtxi0DBZVzbWt5QQJCT4Ikm7udpssaTZc3AOGqiNTlkURnhv1QamrdR6%2Bzeyz9OEQkuAzHpXiPRcjRdabhbVRQsZx0f7SQxGj55dJYgKDrlKTxQQPmFMVty9WBlpaKCdBbwicBJ7T%2FxvUInwt50%2BZQy3psTtc989UZYPovvZ2QihAlurKcwGbZ5oVEUVKlv7FgvIYFVRMoYmgV3tMW7wTMv7IfA6jAO%2BkHaPsDJV6ZNheXEiAL3OQ1AOdKWQzl5nP%2FYOkwd%2BJISr1NzwdkJ99h039LzqBE0S2E0LwJyWpr0LRaipqF7F07h93hq2a3PpqdLkH9ExF4fDZKeVMIu0zsMGOqUBHPyx6ephLKkEUr9uImgJPMizkD8x6z0AiiGZvGv8uM7Edv%2F1grn7PCycCQlaSpjPs3OL7JZvtROr78CH4BQFYWh8Xhd84xolPo91IHS2SM0glET9BAFmJYehr7xv8kAshWDtHroMFywXtFGbDi78gGv6%2BppMl%2FlzXJz8QftJ2tnjJFAoLswKjpsi%2BZv8bF%2B4RNKGXkG92qwtstpGHOCGPd9a2VP%2F&X-Amz-Signature=12b58ed87f7ef67c71bc8b19078e7af8ab54cf82b747b9817eae2387a077c394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
