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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MARYPCS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDrVce%2BJLQ0JrtLrgpiiPF4Q2G8bg6U9naANU2qxEhoUAiA3IoEqVXutnROwDqE23nTFpxZJT3ZDe89kxZRewwm4OCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMUYiZrRqcbWZi%2F9bfKtwDQz5VXouZQo9qKPNqd6vCJW9%2FlLWqnzt73zyD0vw8RgjZ7zywK6bQURe5Iz0EhydyUr7rQ4FsdnhpF6OXfNJSFjJnEGahTvaZWoZ2TEWRHZOkb2RPQ43hueiupHw2maH%2BPO8JTHb9raeajs6Arf7mmqok9UXED2Ftpj8czJVb0vxbRXjpO6jUlS6zfxonbr4d35i19fhQBGo33lk3TNZ7U7yA4JyeSjyON3TkmguKAbIft3%2BVl7gWuVHpX5E8UsGcSe8TpEjFZdQ3SBXfdQGPmkFFN2Lho1M6PFH2q9Qwzo4KfKyXieiqwP3CRnm%2F11kJQQ%2FkqReTMQZKe22ii9FbT9b%2BrVY4Ed1D76XjyWjWg2Ja09vL1%2F7XcEM3J3OC9L2%2FCpgshEzPwm8fpf3ISAtoLE2LxRDBWjrzwg42r0GUx6nv6LI8%2Bq689yMoMHgHLJtCdSyPUKqCogtsv82%2FLf6wGyAypKr1FphFbSpmSDFICa7NRKweDO%2FWvkv%2B%2Br0t47uxBQmZf%2BLSxaSJGg3s3P%2BFZkrPFZ2jcm%2BSm8zO0uZYnnYHetJNaj475Kf4BomjHg7Co0MgJDVNJmTn%2BMkRbfCeXMbE5XhCc%2F0o7BmYhfdnVdzCCZgLxfcZtf2hURQwmOu0vgY6pgH3OXirxKu%2Fal%2Fw2PSi5cV9H%2BJGKapCBWUPcp1UvQRqpkoz837jz24%2FbDYn83Ii81HmAsB0V%2BOrh%2FwfaYi1PZK6ZRrKOmnvoN2o5IEinhEHy0KYN8sxMdtkh6RWZNAIiSs1OBevGGoaqT4oYHDk3eD3JXbMb8xcK%2FlbICggaxXXW1HzzkAktzMQaGB%2FmaNwZ%2F3%2Fx0UySUFRMYWdXTRcqKlIwIfT6c7U&X-Amz-Signature=e6e624916f7c6762600800d9c8829f2f9acb40213b761e865a8ce51751f9524c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MARYPCS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDrVce%2BJLQ0JrtLrgpiiPF4Q2G8bg6U9naANU2qxEhoUAiA3IoEqVXutnROwDqE23nTFpxZJT3ZDe89kxZRewwm4OCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMUYiZrRqcbWZi%2F9bfKtwDQz5VXouZQo9qKPNqd6vCJW9%2FlLWqnzt73zyD0vw8RgjZ7zywK6bQURe5Iz0EhydyUr7rQ4FsdnhpF6OXfNJSFjJnEGahTvaZWoZ2TEWRHZOkb2RPQ43hueiupHw2maH%2BPO8JTHb9raeajs6Arf7mmqok9UXED2Ftpj8czJVb0vxbRXjpO6jUlS6zfxonbr4d35i19fhQBGo33lk3TNZ7U7yA4JyeSjyON3TkmguKAbIft3%2BVl7gWuVHpX5E8UsGcSe8TpEjFZdQ3SBXfdQGPmkFFN2Lho1M6PFH2q9Qwzo4KfKyXieiqwP3CRnm%2F11kJQQ%2FkqReTMQZKe22ii9FbT9b%2BrVY4Ed1D76XjyWjWg2Ja09vL1%2F7XcEM3J3OC9L2%2FCpgshEzPwm8fpf3ISAtoLE2LxRDBWjrzwg42r0GUx6nv6LI8%2Bq689yMoMHgHLJtCdSyPUKqCogtsv82%2FLf6wGyAypKr1FphFbSpmSDFICa7NRKweDO%2FWvkv%2B%2Br0t47uxBQmZf%2BLSxaSJGg3s3P%2BFZkrPFZ2jcm%2BSm8zO0uZYnnYHetJNaj475Kf4BomjHg7Co0MgJDVNJmTn%2BMkRbfCeXMbE5XhCc%2F0o7BmYhfdnVdzCCZgLxfcZtf2hURQwmOu0vgY6pgH3OXirxKu%2Fal%2Fw2PSi5cV9H%2BJGKapCBWUPcp1UvQRqpkoz837jz24%2FbDYn83Ii81HmAsB0V%2BOrh%2FwfaYi1PZK6ZRrKOmnvoN2o5IEinhEHy0KYN8sxMdtkh6RWZNAIiSs1OBevGGoaqT4oYHDk3eD3JXbMb8xcK%2FlbICggaxXXW1HzzkAktzMQaGB%2FmaNwZ%2F3%2Fx0UySUFRMYWdXTRcqKlIwIfT6c7U&X-Amz-Signature=c63ebee17356870f7b17aa84b9fa96aaa4c93767c340b6846b73b78d57da40e6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MARYPCS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDrVce%2BJLQ0JrtLrgpiiPF4Q2G8bg6U9naANU2qxEhoUAiA3IoEqVXutnROwDqE23nTFpxZJT3ZDe89kxZRewwm4OCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMUYiZrRqcbWZi%2F9bfKtwDQz5VXouZQo9qKPNqd6vCJW9%2FlLWqnzt73zyD0vw8RgjZ7zywK6bQURe5Iz0EhydyUr7rQ4FsdnhpF6OXfNJSFjJnEGahTvaZWoZ2TEWRHZOkb2RPQ43hueiupHw2maH%2BPO8JTHb9raeajs6Arf7mmqok9UXED2Ftpj8czJVb0vxbRXjpO6jUlS6zfxonbr4d35i19fhQBGo33lk3TNZ7U7yA4JyeSjyON3TkmguKAbIft3%2BVl7gWuVHpX5E8UsGcSe8TpEjFZdQ3SBXfdQGPmkFFN2Lho1M6PFH2q9Qwzo4KfKyXieiqwP3CRnm%2F11kJQQ%2FkqReTMQZKe22ii9FbT9b%2BrVY4Ed1D76XjyWjWg2Ja09vL1%2F7XcEM3J3OC9L2%2FCpgshEzPwm8fpf3ISAtoLE2LxRDBWjrzwg42r0GUx6nv6LI8%2Bq689yMoMHgHLJtCdSyPUKqCogtsv82%2FLf6wGyAypKr1FphFbSpmSDFICa7NRKweDO%2FWvkv%2B%2Br0t47uxBQmZf%2BLSxaSJGg3s3P%2BFZkrPFZ2jcm%2BSm8zO0uZYnnYHetJNaj475Kf4BomjHg7Co0MgJDVNJmTn%2BMkRbfCeXMbE5XhCc%2F0o7BmYhfdnVdzCCZgLxfcZtf2hURQwmOu0vgY6pgH3OXirxKu%2Fal%2Fw2PSi5cV9H%2BJGKapCBWUPcp1UvQRqpkoz837jz24%2FbDYn83Ii81HmAsB0V%2BOrh%2FwfaYi1PZK6ZRrKOmnvoN2o5IEinhEHy0KYN8sxMdtkh6RWZNAIiSs1OBevGGoaqT4oYHDk3eD3JXbMb8xcK%2FlbICggaxXXW1HzzkAktzMQaGB%2FmaNwZ%2F3%2Fx0UySUFRMYWdXTRcqKlIwIfT6c7U&X-Amz-Signature=10a718ae989417aebe4877f9ae8bf4564a10f9d59ef970d7c6f834c1ccac1fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MARYPCS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDrVce%2BJLQ0JrtLrgpiiPF4Q2G8bg6U9naANU2qxEhoUAiA3IoEqVXutnROwDqE23nTFpxZJT3ZDe89kxZRewwm4OCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMUYiZrRqcbWZi%2F9bfKtwDQz5VXouZQo9qKPNqd6vCJW9%2FlLWqnzt73zyD0vw8RgjZ7zywK6bQURe5Iz0EhydyUr7rQ4FsdnhpF6OXfNJSFjJnEGahTvaZWoZ2TEWRHZOkb2RPQ43hueiupHw2maH%2BPO8JTHb9raeajs6Arf7mmqok9UXED2Ftpj8czJVb0vxbRXjpO6jUlS6zfxonbr4d35i19fhQBGo33lk3TNZ7U7yA4JyeSjyON3TkmguKAbIft3%2BVl7gWuVHpX5E8UsGcSe8TpEjFZdQ3SBXfdQGPmkFFN2Lho1M6PFH2q9Qwzo4KfKyXieiqwP3CRnm%2F11kJQQ%2FkqReTMQZKe22ii9FbT9b%2BrVY4Ed1D76XjyWjWg2Ja09vL1%2F7XcEM3J3OC9L2%2FCpgshEzPwm8fpf3ISAtoLE2LxRDBWjrzwg42r0GUx6nv6LI8%2Bq689yMoMHgHLJtCdSyPUKqCogtsv82%2FLf6wGyAypKr1FphFbSpmSDFICa7NRKweDO%2FWvkv%2B%2Br0t47uxBQmZf%2BLSxaSJGg3s3P%2BFZkrPFZ2jcm%2BSm8zO0uZYnnYHetJNaj475Kf4BomjHg7Co0MgJDVNJmTn%2BMkRbfCeXMbE5XhCc%2F0o7BmYhfdnVdzCCZgLxfcZtf2hURQwmOu0vgY6pgH3OXirxKu%2Fal%2Fw2PSi5cV9H%2BJGKapCBWUPcp1UvQRqpkoz837jz24%2FbDYn83Ii81HmAsB0V%2BOrh%2FwfaYi1PZK6ZRrKOmnvoN2o5IEinhEHy0KYN8sxMdtkh6RWZNAIiSs1OBevGGoaqT4oYHDk3eD3JXbMb8xcK%2FlbICggaxXXW1HzzkAktzMQaGB%2FmaNwZ%2F3%2Fx0UySUFRMYWdXTRcqKlIwIfT6c7U&X-Amz-Signature=1acf12dce135f7337043613e39771555a965040a73ae4e047041b5e893f7d8c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MARYPCS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDrVce%2BJLQ0JrtLrgpiiPF4Q2G8bg6U9naANU2qxEhoUAiA3IoEqVXutnROwDqE23nTFpxZJT3ZDe89kxZRewwm4OCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMUYiZrRqcbWZi%2F9bfKtwDQz5VXouZQo9qKPNqd6vCJW9%2FlLWqnzt73zyD0vw8RgjZ7zywK6bQURe5Iz0EhydyUr7rQ4FsdnhpF6OXfNJSFjJnEGahTvaZWoZ2TEWRHZOkb2RPQ43hueiupHw2maH%2BPO8JTHb9raeajs6Arf7mmqok9UXED2Ftpj8czJVb0vxbRXjpO6jUlS6zfxonbr4d35i19fhQBGo33lk3TNZ7U7yA4JyeSjyON3TkmguKAbIft3%2BVl7gWuVHpX5E8UsGcSe8TpEjFZdQ3SBXfdQGPmkFFN2Lho1M6PFH2q9Qwzo4KfKyXieiqwP3CRnm%2F11kJQQ%2FkqReTMQZKe22ii9FbT9b%2BrVY4Ed1D76XjyWjWg2Ja09vL1%2F7XcEM3J3OC9L2%2FCpgshEzPwm8fpf3ISAtoLE2LxRDBWjrzwg42r0GUx6nv6LI8%2Bq689yMoMHgHLJtCdSyPUKqCogtsv82%2FLf6wGyAypKr1FphFbSpmSDFICa7NRKweDO%2FWvkv%2B%2Br0t47uxBQmZf%2BLSxaSJGg3s3P%2BFZkrPFZ2jcm%2BSm8zO0uZYnnYHetJNaj475Kf4BomjHg7Co0MgJDVNJmTn%2BMkRbfCeXMbE5XhCc%2F0o7BmYhfdnVdzCCZgLxfcZtf2hURQwmOu0vgY6pgH3OXirxKu%2Fal%2Fw2PSi5cV9H%2BJGKapCBWUPcp1UvQRqpkoz837jz24%2FbDYn83Ii81HmAsB0V%2BOrh%2FwfaYi1PZK6ZRrKOmnvoN2o5IEinhEHy0KYN8sxMdtkh6RWZNAIiSs1OBevGGoaqT4oYHDk3eD3JXbMb8xcK%2FlbICggaxXXW1HzzkAktzMQaGB%2FmaNwZ%2F3%2Fx0UySUFRMYWdXTRcqKlIwIfT6c7U&X-Amz-Signature=75d5a6a12d7bb61bc0832359a627f6a2fec272903f12e20e1e7674bf442a19c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MARYPCS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDrVce%2BJLQ0JrtLrgpiiPF4Q2G8bg6U9naANU2qxEhoUAiA3IoEqVXutnROwDqE23nTFpxZJT3ZDe89kxZRewwm4OCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMUYiZrRqcbWZi%2F9bfKtwDQz5VXouZQo9qKPNqd6vCJW9%2FlLWqnzt73zyD0vw8RgjZ7zywK6bQURe5Iz0EhydyUr7rQ4FsdnhpF6OXfNJSFjJnEGahTvaZWoZ2TEWRHZOkb2RPQ43hueiupHw2maH%2BPO8JTHb9raeajs6Arf7mmqok9UXED2Ftpj8czJVb0vxbRXjpO6jUlS6zfxonbr4d35i19fhQBGo33lk3TNZ7U7yA4JyeSjyON3TkmguKAbIft3%2BVl7gWuVHpX5E8UsGcSe8TpEjFZdQ3SBXfdQGPmkFFN2Lho1M6PFH2q9Qwzo4KfKyXieiqwP3CRnm%2F11kJQQ%2FkqReTMQZKe22ii9FbT9b%2BrVY4Ed1D76XjyWjWg2Ja09vL1%2F7XcEM3J3OC9L2%2FCpgshEzPwm8fpf3ISAtoLE2LxRDBWjrzwg42r0GUx6nv6LI8%2Bq689yMoMHgHLJtCdSyPUKqCogtsv82%2FLf6wGyAypKr1FphFbSpmSDFICa7NRKweDO%2FWvkv%2B%2Br0t47uxBQmZf%2BLSxaSJGg3s3P%2BFZkrPFZ2jcm%2BSm8zO0uZYnnYHetJNaj475Kf4BomjHg7Co0MgJDVNJmTn%2BMkRbfCeXMbE5XhCc%2F0o7BmYhfdnVdzCCZgLxfcZtf2hURQwmOu0vgY6pgH3OXirxKu%2Fal%2Fw2PSi5cV9H%2BJGKapCBWUPcp1UvQRqpkoz837jz24%2FbDYn83Ii81HmAsB0V%2BOrh%2FwfaYi1PZK6ZRrKOmnvoN2o5IEinhEHy0KYN8sxMdtkh6RWZNAIiSs1OBevGGoaqT4oYHDk3eD3JXbMb8xcK%2FlbICggaxXXW1HzzkAktzMQaGB%2FmaNwZ%2F3%2Fx0UySUFRMYWdXTRcqKlIwIfT6c7U&X-Amz-Signature=dee24f56a66bc91dd89704cc8bc0cdca8f133f07b5a93bd35f9388f351ee830d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MARYPCS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDrVce%2BJLQ0JrtLrgpiiPF4Q2G8bg6U9naANU2qxEhoUAiA3IoEqVXutnROwDqE23nTFpxZJT3ZDe89kxZRewwm4OCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMUYiZrRqcbWZi%2F9bfKtwDQz5VXouZQo9qKPNqd6vCJW9%2FlLWqnzt73zyD0vw8RgjZ7zywK6bQURe5Iz0EhydyUr7rQ4FsdnhpF6OXfNJSFjJnEGahTvaZWoZ2TEWRHZOkb2RPQ43hueiupHw2maH%2BPO8JTHb9raeajs6Arf7mmqok9UXED2Ftpj8czJVb0vxbRXjpO6jUlS6zfxonbr4d35i19fhQBGo33lk3TNZ7U7yA4JyeSjyON3TkmguKAbIft3%2BVl7gWuVHpX5E8UsGcSe8TpEjFZdQ3SBXfdQGPmkFFN2Lho1M6PFH2q9Qwzo4KfKyXieiqwP3CRnm%2F11kJQQ%2FkqReTMQZKe22ii9FbT9b%2BrVY4Ed1D76XjyWjWg2Ja09vL1%2F7XcEM3J3OC9L2%2FCpgshEzPwm8fpf3ISAtoLE2LxRDBWjrzwg42r0GUx6nv6LI8%2Bq689yMoMHgHLJtCdSyPUKqCogtsv82%2FLf6wGyAypKr1FphFbSpmSDFICa7NRKweDO%2FWvkv%2B%2Br0t47uxBQmZf%2BLSxaSJGg3s3P%2BFZkrPFZ2jcm%2BSm8zO0uZYnnYHetJNaj475Kf4BomjHg7Co0MgJDVNJmTn%2BMkRbfCeXMbE5XhCc%2F0o7BmYhfdnVdzCCZgLxfcZtf2hURQwmOu0vgY6pgH3OXirxKu%2Fal%2Fw2PSi5cV9H%2BJGKapCBWUPcp1UvQRqpkoz837jz24%2FbDYn83Ii81HmAsB0V%2BOrh%2FwfaYi1PZK6ZRrKOmnvoN2o5IEinhEHy0KYN8sxMdtkh6RWZNAIiSs1OBevGGoaqT4oYHDk3eD3JXbMb8xcK%2FlbICggaxXXW1HzzkAktzMQaGB%2FmaNwZ%2F3%2Fx0UySUFRMYWdXTRcqKlIwIfT6c7U&X-Amz-Signature=f816549b3ad49318c9bb4933bf0413440c7caad75a8ecd61af1d097ac7c7bf71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MARYPCS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDrVce%2BJLQ0JrtLrgpiiPF4Q2G8bg6U9naANU2qxEhoUAiA3IoEqVXutnROwDqE23nTFpxZJT3ZDe89kxZRewwm4OCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMUYiZrRqcbWZi%2F9bfKtwDQz5VXouZQo9qKPNqd6vCJW9%2FlLWqnzt73zyD0vw8RgjZ7zywK6bQURe5Iz0EhydyUr7rQ4FsdnhpF6OXfNJSFjJnEGahTvaZWoZ2TEWRHZOkb2RPQ43hueiupHw2maH%2BPO8JTHb9raeajs6Arf7mmqok9UXED2Ftpj8czJVb0vxbRXjpO6jUlS6zfxonbr4d35i19fhQBGo33lk3TNZ7U7yA4JyeSjyON3TkmguKAbIft3%2BVl7gWuVHpX5E8UsGcSe8TpEjFZdQ3SBXfdQGPmkFFN2Lho1M6PFH2q9Qwzo4KfKyXieiqwP3CRnm%2F11kJQQ%2FkqReTMQZKe22ii9FbT9b%2BrVY4Ed1D76XjyWjWg2Ja09vL1%2F7XcEM3J3OC9L2%2FCpgshEzPwm8fpf3ISAtoLE2LxRDBWjrzwg42r0GUx6nv6LI8%2Bq689yMoMHgHLJtCdSyPUKqCogtsv82%2FLf6wGyAypKr1FphFbSpmSDFICa7NRKweDO%2FWvkv%2B%2Br0t47uxBQmZf%2BLSxaSJGg3s3P%2BFZkrPFZ2jcm%2BSm8zO0uZYnnYHetJNaj475Kf4BomjHg7Co0MgJDVNJmTn%2BMkRbfCeXMbE5XhCc%2F0o7BmYhfdnVdzCCZgLxfcZtf2hURQwmOu0vgY6pgH3OXirxKu%2Fal%2Fw2PSi5cV9H%2BJGKapCBWUPcp1UvQRqpkoz837jz24%2FbDYn83Ii81HmAsB0V%2BOrh%2FwfaYi1PZK6ZRrKOmnvoN2o5IEinhEHy0KYN8sxMdtkh6RWZNAIiSs1OBevGGoaqT4oYHDk3eD3JXbMb8xcK%2FlbICggaxXXW1HzzkAktzMQaGB%2FmaNwZ%2F3%2Fx0UySUFRMYWdXTRcqKlIwIfT6c7U&X-Amz-Signature=57fa62086c02b2e0763753ae54e2aba0c136386e33048070c2feb09424569b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
