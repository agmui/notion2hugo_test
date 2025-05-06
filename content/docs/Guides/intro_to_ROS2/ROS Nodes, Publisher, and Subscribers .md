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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI42YZK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxZUX0LFRUO4mDbXEbPO9rHtsPFWuIMoKB5lQupiCCFwIhANs046Y3KFd0z7FcCrg4vxmxSXwc3A%2BP2AKX%2Be4kUqDIKv8DCD4QABoMNjM3NDIzMTgzODA1Igx7zSmWj%2F%2FGaHyTVNgq3AP%2BdNBVqxlchVCy9u3h1xn0dR9fFMKbxCfQd%2FD0lwz1%2F9%2FqdF5%2FCmN9tPlwbA4MJE5xkjzBwiFKZjx8Talt5vk5nenMVzh%2FNEnN%2BntQBU%2FlCeMs0hxizHTcUyUluzH6nPnGii4KG3kt4GV3d%2FG5npIffIQrUhPjE6LQcSGFktVRFF6OXznAtoEjx578%2FdUCL3ZDxfX0j07TJ1pC1zb1%2BuO%2FD9YrszOOQ1xnnyU1cPX3%2FCJFO81aV3PNJTJwi5CsaOjXA6pnLQEJF6sRUsiEdQSQRTQRh%2FFOjpiEJWcg7Q4iFkHXF5YloZShjLeh47BWHDQTIupEZu7zhSIzU4gYsEKNXqj8yzXp9VWc6UhHy2d5hYeWDvcED2C2XnmHALbKZq%2B5ryZx9uIwun4i%2BTbZ6%2FREM%2FXW%2FO8w%2FSGN6kJLCMGPeoxY1Ce23ijN%2B%2Bp6LyhgjCLKvmkW0SyAzn%2B5gH4RkC24q97VoHex7n6DvBwQaDNyFSTTHVTzdqYqt3pKmTXDmho4mEmpMRQbw4%2Fan1Lz2Z0E8AiLti3VG%2F5GPTCuMRXAo7zDy%2BGRISM5APSse2D%2FDNPGJiZr8Jyls5nEu0cWkHHVXExVZwxmOUMSyNaNJlqGVWhrMXcIH4wAN8WGRzDesObABjqkAcPDNqwh0zDXtyMXzGb0%2BU0xkm4qHx0XkHIptaoFWngDcoubfcihuooLx7I4RstisIbHQSCKErNu2UnNTZq2Q5Yr6ZK5axB5IeeXefcY5CWWRDmD%2Fy481qA1OcMRISG0J9XsPRkWov5uzdXIAxjQj7C6rXEHqBdS7IJS4wz2U2CrdiWufD0eTu%2F2BKPi5G3vU9F%2BK2%2Bxw5if2cX8KGO22NNAytHp&X-Amz-Signature=ef19d71dbf44fc50dfaeb78216dad812356a0a1d0ca1dca4dc139aa364b78fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI42YZK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxZUX0LFRUO4mDbXEbPO9rHtsPFWuIMoKB5lQupiCCFwIhANs046Y3KFd0z7FcCrg4vxmxSXwc3A%2BP2AKX%2Be4kUqDIKv8DCD4QABoMNjM3NDIzMTgzODA1Igx7zSmWj%2F%2FGaHyTVNgq3AP%2BdNBVqxlchVCy9u3h1xn0dR9fFMKbxCfQd%2FD0lwz1%2F9%2FqdF5%2FCmN9tPlwbA4MJE5xkjzBwiFKZjx8Talt5vk5nenMVzh%2FNEnN%2BntQBU%2FlCeMs0hxizHTcUyUluzH6nPnGii4KG3kt4GV3d%2FG5npIffIQrUhPjE6LQcSGFktVRFF6OXznAtoEjx578%2FdUCL3ZDxfX0j07TJ1pC1zb1%2BuO%2FD9YrszOOQ1xnnyU1cPX3%2FCJFO81aV3PNJTJwi5CsaOjXA6pnLQEJF6sRUsiEdQSQRTQRh%2FFOjpiEJWcg7Q4iFkHXF5YloZShjLeh47BWHDQTIupEZu7zhSIzU4gYsEKNXqj8yzXp9VWc6UhHy2d5hYeWDvcED2C2XnmHALbKZq%2B5ryZx9uIwun4i%2BTbZ6%2FREM%2FXW%2FO8w%2FSGN6kJLCMGPeoxY1Ce23ijN%2B%2Bp6LyhgjCLKvmkW0SyAzn%2B5gH4RkC24q97VoHex7n6DvBwQaDNyFSTTHVTzdqYqt3pKmTXDmho4mEmpMRQbw4%2Fan1Lz2Z0E8AiLti3VG%2F5GPTCuMRXAo7zDy%2BGRISM5APSse2D%2FDNPGJiZr8Jyls5nEu0cWkHHVXExVZwxmOUMSyNaNJlqGVWhrMXcIH4wAN8WGRzDesObABjqkAcPDNqwh0zDXtyMXzGb0%2BU0xkm4qHx0XkHIptaoFWngDcoubfcihuooLx7I4RstisIbHQSCKErNu2UnNTZq2Q5Yr6ZK5axB5IeeXefcY5CWWRDmD%2Fy481qA1OcMRISG0J9XsPRkWov5uzdXIAxjQj7C6rXEHqBdS7IJS4wz2U2CrdiWufD0eTu%2F2BKPi5G3vU9F%2BK2%2Bxw5if2cX8KGO22NNAytHp&X-Amz-Signature=ad87b24d6ee312b2120dbd6817b78c1f60144ab2a88994a9af5ae9fbf41688a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI42YZK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxZUX0LFRUO4mDbXEbPO9rHtsPFWuIMoKB5lQupiCCFwIhANs046Y3KFd0z7FcCrg4vxmxSXwc3A%2BP2AKX%2Be4kUqDIKv8DCD4QABoMNjM3NDIzMTgzODA1Igx7zSmWj%2F%2FGaHyTVNgq3AP%2BdNBVqxlchVCy9u3h1xn0dR9fFMKbxCfQd%2FD0lwz1%2F9%2FqdF5%2FCmN9tPlwbA4MJE5xkjzBwiFKZjx8Talt5vk5nenMVzh%2FNEnN%2BntQBU%2FlCeMs0hxizHTcUyUluzH6nPnGii4KG3kt4GV3d%2FG5npIffIQrUhPjE6LQcSGFktVRFF6OXznAtoEjx578%2FdUCL3ZDxfX0j07TJ1pC1zb1%2BuO%2FD9YrszOOQ1xnnyU1cPX3%2FCJFO81aV3PNJTJwi5CsaOjXA6pnLQEJF6sRUsiEdQSQRTQRh%2FFOjpiEJWcg7Q4iFkHXF5YloZShjLeh47BWHDQTIupEZu7zhSIzU4gYsEKNXqj8yzXp9VWc6UhHy2d5hYeWDvcED2C2XnmHALbKZq%2B5ryZx9uIwun4i%2BTbZ6%2FREM%2FXW%2FO8w%2FSGN6kJLCMGPeoxY1Ce23ijN%2B%2Bp6LyhgjCLKvmkW0SyAzn%2B5gH4RkC24q97VoHex7n6DvBwQaDNyFSTTHVTzdqYqt3pKmTXDmho4mEmpMRQbw4%2Fan1Lz2Z0E8AiLti3VG%2F5GPTCuMRXAo7zDy%2BGRISM5APSse2D%2FDNPGJiZr8Jyls5nEu0cWkHHVXExVZwxmOUMSyNaNJlqGVWhrMXcIH4wAN8WGRzDesObABjqkAcPDNqwh0zDXtyMXzGb0%2BU0xkm4qHx0XkHIptaoFWngDcoubfcihuooLx7I4RstisIbHQSCKErNu2UnNTZq2Q5Yr6ZK5axB5IeeXefcY5CWWRDmD%2Fy481qA1OcMRISG0J9XsPRkWov5uzdXIAxjQj7C6rXEHqBdS7IJS4wz2U2CrdiWufD0eTu%2F2BKPi5G3vU9F%2BK2%2Bxw5if2cX8KGO22NNAytHp&X-Amz-Signature=52c90aa78ce8b8b53677e13abf0d5655f398e5212ff27a73add02845229dfa7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI42YZK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxZUX0LFRUO4mDbXEbPO9rHtsPFWuIMoKB5lQupiCCFwIhANs046Y3KFd0z7FcCrg4vxmxSXwc3A%2BP2AKX%2Be4kUqDIKv8DCD4QABoMNjM3NDIzMTgzODA1Igx7zSmWj%2F%2FGaHyTVNgq3AP%2BdNBVqxlchVCy9u3h1xn0dR9fFMKbxCfQd%2FD0lwz1%2F9%2FqdF5%2FCmN9tPlwbA4MJE5xkjzBwiFKZjx8Talt5vk5nenMVzh%2FNEnN%2BntQBU%2FlCeMs0hxizHTcUyUluzH6nPnGii4KG3kt4GV3d%2FG5npIffIQrUhPjE6LQcSGFktVRFF6OXznAtoEjx578%2FdUCL3ZDxfX0j07TJ1pC1zb1%2BuO%2FD9YrszOOQ1xnnyU1cPX3%2FCJFO81aV3PNJTJwi5CsaOjXA6pnLQEJF6sRUsiEdQSQRTQRh%2FFOjpiEJWcg7Q4iFkHXF5YloZShjLeh47BWHDQTIupEZu7zhSIzU4gYsEKNXqj8yzXp9VWc6UhHy2d5hYeWDvcED2C2XnmHALbKZq%2B5ryZx9uIwun4i%2BTbZ6%2FREM%2FXW%2FO8w%2FSGN6kJLCMGPeoxY1Ce23ijN%2B%2Bp6LyhgjCLKvmkW0SyAzn%2B5gH4RkC24q97VoHex7n6DvBwQaDNyFSTTHVTzdqYqt3pKmTXDmho4mEmpMRQbw4%2Fan1Lz2Z0E8AiLti3VG%2F5GPTCuMRXAo7zDy%2BGRISM5APSse2D%2FDNPGJiZr8Jyls5nEu0cWkHHVXExVZwxmOUMSyNaNJlqGVWhrMXcIH4wAN8WGRzDesObABjqkAcPDNqwh0zDXtyMXzGb0%2BU0xkm4qHx0XkHIptaoFWngDcoubfcihuooLx7I4RstisIbHQSCKErNu2UnNTZq2Q5Yr6ZK5axB5IeeXefcY5CWWRDmD%2Fy481qA1OcMRISG0J9XsPRkWov5uzdXIAxjQj7C6rXEHqBdS7IJS4wz2U2CrdiWufD0eTu%2F2BKPi5G3vU9F%2BK2%2Bxw5if2cX8KGO22NNAytHp&X-Amz-Signature=fde56bc7ac753883de2b9fc5642d69abc584d7f5fbbbf421cbaeffa4f2efe540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI42YZK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxZUX0LFRUO4mDbXEbPO9rHtsPFWuIMoKB5lQupiCCFwIhANs046Y3KFd0z7FcCrg4vxmxSXwc3A%2BP2AKX%2Be4kUqDIKv8DCD4QABoMNjM3NDIzMTgzODA1Igx7zSmWj%2F%2FGaHyTVNgq3AP%2BdNBVqxlchVCy9u3h1xn0dR9fFMKbxCfQd%2FD0lwz1%2F9%2FqdF5%2FCmN9tPlwbA4MJE5xkjzBwiFKZjx8Talt5vk5nenMVzh%2FNEnN%2BntQBU%2FlCeMs0hxizHTcUyUluzH6nPnGii4KG3kt4GV3d%2FG5npIffIQrUhPjE6LQcSGFktVRFF6OXznAtoEjx578%2FdUCL3ZDxfX0j07TJ1pC1zb1%2BuO%2FD9YrszOOQ1xnnyU1cPX3%2FCJFO81aV3PNJTJwi5CsaOjXA6pnLQEJF6sRUsiEdQSQRTQRh%2FFOjpiEJWcg7Q4iFkHXF5YloZShjLeh47BWHDQTIupEZu7zhSIzU4gYsEKNXqj8yzXp9VWc6UhHy2d5hYeWDvcED2C2XnmHALbKZq%2B5ryZx9uIwun4i%2BTbZ6%2FREM%2FXW%2FO8w%2FSGN6kJLCMGPeoxY1Ce23ijN%2B%2Bp6LyhgjCLKvmkW0SyAzn%2B5gH4RkC24q97VoHex7n6DvBwQaDNyFSTTHVTzdqYqt3pKmTXDmho4mEmpMRQbw4%2Fan1Lz2Z0E8AiLti3VG%2F5GPTCuMRXAo7zDy%2BGRISM5APSse2D%2FDNPGJiZr8Jyls5nEu0cWkHHVXExVZwxmOUMSyNaNJlqGVWhrMXcIH4wAN8WGRzDesObABjqkAcPDNqwh0zDXtyMXzGb0%2BU0xkm4qHx0XkHIptaoFWngDcoubfcihuooLx7I4RstisIbHQSCKErNu2UnNTZq2Q5Yr6ZK5axB5IeeXefcY5CWWRDmD%2Fy481qA1OcMRISG0J9XsPRkWov5uzdXIAxjQj7C6rXEHqBdS7IJS4wz2U2CrdiWufD0eTu%2F2BKPi5G3vU9F%2BK2%2Bxw5if2cX8KGO22NNAytHp&X-Amz-Signature=890564208e307f7c2552e8c510d7e5f343fbf00a7ebaca9d0a6f5f1ba4e25cad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI42YZK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxZUX0LFRUO4mDbXEbPO9rHtsPFWuIMoKB5lQupiCCFwIhANs046Y3KFd0z7FcCrg4vxmxSXwc3A%2BP2AKX%2Be4kUqDIKv8DCD4QABoMNjM3NDIzMTgzODA1Igx7zSmWj%2F%2FGaHyTVNgq3AP%2BdNBVqxlchVCy9u3h1xn0dR9fFMKbxCfQd%2FD0lwz1%2F9%2FqdF5%2FCmN9tPlwbA4MJE5xkjzBwiFKZjx8Talt5vk5nenMVzh%2FNEnN%2BntQBU%2FlCeMs0hxizHTcUyUluzH6nPnGii4KG3kt4GV3d%2FG5npIffIQrUhPjE6LQcSGFktVRFF6OXznAtoEjx578%2FdUCL3ZDxfX0j07TJ1pC1zb1%2BuO%2FD9YrszOOQ1xnnyU1cPX3%2FCJFO81aV3PNJTJwi5CsaOjXA6pnLQEJF6sRUsiEdQSQRTQRh%2FFOjpiEJWcg7Q4iFkHXF5YloZShjLeh47BWHDQTIupEZu7zhSIzU4gYsEKNXqj8yzXp9VWc6UhHy2d5hYeWDvcED2C2XnmHALbKZq%2B5ryZx9uIwun4i%2BTbZ6%2FREM%2FXW%2FO8w%2FSGN6kJLCMGPeoxY1Ce23ijN%2B%2Bp6LyhgjCLKvmkW0SyAzn%2B5gH4RkC24q97VoHex7n6DvBwQaDNyFSTTHVTzdqYqt3pKmTXDmho4mEmpMRQbw4%2Fan1Lz2Z0E8AiLti3VG%2F5GPTCuMRXAo7zDy%2BGRISM5APSse2D%2FDNPGJiZr8Jyls5nEu0cWkHHVXExVZwxmOUMSyNaNJlqGVWhrMXcIH4wAN8WGRzDesObABjqkAcPDNqwh0zDXtyMXzGb0%2BU0xkm4qHx0XkHIptaoFWngDcoubfcihuooLx7I4RstisIbHQSCKErNu2UnNTZq2Q5Yr6ZK5axB5IeeXefcY5CWWRDmD%2Fy481qA1OcMRISG0J9XsPRkWov5uzdXIAxjQj7C6rXEHqBdS7IJS4wz2U2CrdiWufD0eTu%2F2BKPi5G3vU9F%2BK2%2Bxw5if2cX8KGO22NNAytHp&X-Amz-Signature=38e0d659a12e4dde25823ff845f09b5314888362ac1ccf25f44df28643f98242&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI42YZK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxZUX0LFRUO4mDbXEbPO9rHtsPFWuIMoKB5lQupiCCFwIhANs046Y3KFd0z7FcCrg4vxmxSXwc3A%2BP2AKX%2Be4kUqDIKv8DCD4QABoMNjM3NDIzMTgzODA1Igx7zSmWj%2F%2FGaHyTVNgq3AP%2BdNBVqxlchVCy9u3h1xn0dR9fFMKbxCfQd%2FD0lwz1%2F9%2FqdF5%2FCmN9tPlwbA4MJE5xkjzBwiFKZjx8Talt5vk5nenMVzh%2FNEnN%2BntQBU%2FlCeMs0hxizHTcUyUluzH6nPnGii4KG3kt4GV3d%2FG5npIffIQrUhPjE6LQcSGFktVRFF6OXznAtoEjx578%2FdUCL3ZDxfX0j07TJ1pC1zb1%2BuO%2FD9YrszOOQ1xnnyU1cPX3%2FCJFO81aV3PNJTJwi5CsaOjXA6pnLQEJF6sRUsiEdQSQRTQRh%2FFOjpiEJWcg7Q4iFkHXF5YloZShjLeh47BWHDQTIupEZu7zhSIzU4gYsEKNXqj8yzXp9VWc6UhHy2d5hYeWDvcED2C2XnmHALbKZq%2B5ryZx9uIwun4i%2BTbZ6%2FREM%2FXW%2FO8w%2FSGN6kJLCMGPeoxY1Ce23ijN%2B%2Bp6LyhgjCLKvmkW0SyAzn%2B5gH4RkC24q97VoHex7n6DvBwQaDNyFSTTHVTzdqYqt3pKmTXDmho4mEmpMRQbw4%2Fan1Lz2Z0E8AiLti3VG%2F5GPTCuMRXAo7zDy%2BGRISM5APSse2D%2FDNPGJiZr8Jyls5nEu0cWkHHVXExVZwxmOUMSyNaNJlqGVWhrMXcIH4wAN8WGRzDesObABjqkAcPDNqwh0zDXtyMXzGb0%2BU0xkm4qHx0XkHIptaoFWngDcoubfcihuooLx7I4RstisIbHQSCKErNu2UnNTZq2Q5Yr6ZK5axB5IeeXefcY5CWWRDmD%2Fy481qA1OcMRISG0J9XsPRkWov5uzdXIAxjQj7C6rXEHqBdS7IJS4wz2U2CrdiWufD0eTu%2F2BKPi5G3vU9F%2BK2%2Bxw5if2cX8KGO22NNAytHp&X-Amz-Signature=ca26fcb10b5414ab797f3e4113b96301593563c14a607832183013d2ee144c78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI42YZK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxZUX0LFRUO4mDbXEbPO9rHtsPFWuIMoKB5lQupiCCFwIhANs046Y3KFd0z7FcCrg4vxmxSXwc3A%2BP2AKX%2Be4kUqDIKv8DCD4QABoMNjM3NDIzMTgzODA1Igx7zSmWj%2F%2FGaHyTVNgq3AP%2BdNBVqxlchVCy9u3h1xn0dR9fFMKbxCfQd%2FD0lwz1%2F9%2FqdF5%2FCmN9tPlwbA4MJE5xkjzBwiFKZjx8Talt5vk5nenMVzh%2FNEnN%2BntQBU%2FlCeMs0hxizHTcUyUluzH6nPnGii4KG3kt4GV3d%2FG5npIffIQrUhPjE6LQcSGFktVRFF6OXznAtoEjx578%2FdUCL3ZDxfX0j07TJ1pC1zb1%2BuO%2FD9YrszOOQ1xnnyU1cPX3%2FCJFO81aV3PNJTJwi5CsaOjXA6pnLQEJF6sRUsiEdQSQRTQRh%2FFOjpiEJWcg7Q4iFkHXF5YloZShjLeh47BWHDQTIupEZu7zhSIzU4gYsEKNXqj8yzXp9VWc6UhHy2d5hYeWDvcED2C2XnmHALbKZq%2B5ryZx9uIwun4i%2BTbZ6%2FREM%2FXW%2FO8w%2FSGN6kJLCMGPeoxY1Ce23ijN%2B%2Bp6LyhgjCLKvmkW0SyAzn%2B5gH4RkC24q97VoHex7n6DvBwQaDNyFSTTHVTzdqYqt3pKmTXDmho4mEmpMRQbw4%2Fan1Lz2Z0E8AiLti3VG%2F5GPTCuMRXAo7zDy%2BGRISM5APSse2D%2FDNPGJiZr8Jyls5nEu0cWkHHVXExVZwxmOUMSyNaNJlqGVWhrMXcIH4wAN8WGRzDesObABjqkAcPDNqwh0zDXtyMXzGb0%2BU0xkm4qHx0XkHIptaoFWngDcoubfcihuooLx7I4RstisIbHQSCKErNu2UnNTZq2Q5Yr6ZK5axB5IeeXefcY5CWWRDmD%2Fy481qA1OcMRISG0J9XsPRkWov5uzdXIAxjQj7C6rXEHqBdS7IJS4wz2U2CrdiWufD0eTu%2F2BKPi5G3vU9F%2BK2%2Bxw5if2cX8KGO22NNAytHp&X-Amz-Signature=fe7f95f2370a9f46238ce1940eed54882aea7ef1d6de80494e0282e206854393&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
