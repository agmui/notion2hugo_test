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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4XO7XH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGulc5WZGzxh32zw8b%2BquYcHEUpH7xCeNVzA6zOEnnbnAiEAsLDUkZLUntZgtv5lz71JKOJnH9ZlzQfGHms0F4Qa9ewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF6zT6Ez3qUQ8doWyrcA9X2xARjWUNk%2BCgxVj0HbOYXSBMpreiPXwFFDuHYWhJNDmMLSh76K91KSv2cOONHb5ZPWI61Hmb4WpYhjoEpvk6TiFHU8P%2FdxlMVXHRyzgkQW6T0mvYXnWjDhVmT2PoqECVLUUXiON0bD0HdDSS74pvjRyz3HqApNzof3paM1icKr6FHx9H1PRCDHIvIT7WD71xGCTwGz2lywgtSdoAZ2flH9RrgRfxzv%2FziP9VsUPUNL1kEdyp64CuAHwINxAiD9e%2BXQfwU9Xi0CwoceK9pjijYJDu1QQviewLSF030HU%2FZazJlNwtbHpTWVH6HwelnrQSi2ttoK6LC7Vz0n6E6X%2BNOqcIaAB5toRV5MLEf57Vl82cTgO8oNr9peuRybo%2FbmgQ%2B1mSS2arQL9YLasfugmwfJW3kp8ZD3q5yWxVK%2B4KbNaEXLBN2mRNN26my8GXT1p8hxcZG0qI3BnPNR128qkmpVEI9A733EpEkAyGgen9u4rAzfmgo0sfMWaj0exGPks64VGzAbIfys3jP6jBM8ifc%2FoyW5ixSVv99g4W9HRv0G9GjecRfiPvdD6byFqpgUZ5s5qI6L9PzZP%2BCPg65w8RU6Ph9sEdC1ONmjX%2FJlSNmePM5X6ALQHxNkrOeMMjGsMEGOqUBsJWeKdTq0GmOAY8GvhnnDC72W9p%2FiaW1KFljIYPMBvnsIoyK78W%2BJLc5aweYaxyODx0BxY%2BCFdaF7wOvCY8uYwmr%2Bc8qkU%2F6KdBU%2Fb5hlMQb3c2Gav4nBqvDQjQ4EwH5fWNmJDvJlMeop%2FeDkuZi3V2BueJiWZYja%2Bm8BNJOYMgJ1jaNGFXqIBJjr8A6kPQgfBjPRyb%2Bd33pYexldu2rEjPyo2MZ&X-Amz-Signature=9fe49db4db74ab2119dfbce9dba7495c25e6c2f071d3cfb2a18a0cb6c4911058&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4XO7XH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGulc5WZGzxh32zw8b%2BquYcHEUpH7xCeNVzA6zOEnnbnAiEAsLDUkZLUntZgtv5lz71JKOJnH9ZlzQfGHms0F4Qa9ewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF6zT6Ez3qUQ8doWyrcA9X2xARjWUNk%2BCgxVj0HbOYXSBMpreiPXwFFDuHYWhJNDmMLSh76K91KSv2cOONHb5ZPWI61Hmb4WpYhjoEpvk6TiFHU8P%2FdxlMVXHRyzgkQW6T0mvYXnWjDhVmT2PoqECVLUUXiON0bD0HdDSS74pvjRyz3HqApNzof3paM1icKr6FHx9H1PRCDHIvIT7WD71xGCTwGz2lywgtSdoAZ2flH9RrgRfxzv%2FziP9VsUPUNL1kEdyp64CuAHwINxAiD9e%2BXQfwU9Xi0CwoceK9pjijYJDu1QQviewLSF030HU%2FZazJlNwtbHpTWVH6HwelnrQSi2ttoK6LC7Vz0n6E6X%2BNOqcIaAB5toRV5MLEf57Vl82cTgO8oNr9peuRybo%2FbmgQ%2B1mSS2arQL9YLasfugmwfJW3kp8ZD3q5yWxVK%2B4KbNaEXLBN2mRNN26my8GXT1p8hxcZG0qI3BnPNR128qkmpVEI9A733EpEkAyGgen9u4rAzfmgo0sfMWaj0exGPks64VGzAbIfys3jP6jBM8ifc%2FoyW5ixSVv99g4W9HRv0G9GjecRfiPvdD6byFqpgUZ5s5qI6L9PzZP%2BCPg65w8RU6Ph9sEdC1ONmjX%2FJlSNmePM5X6ALQHxNkrOeMMjGsMEGOqUBsJWeKdTq0GmOAY8GvhnnDC72W9p%2FiaW1KFljIYPMBvnsIoyK78W%2BJLc5aweYaxyODx0BxY%2BCFdaF7wOvCY8uYwmr%2Bc8qkU%2F6KdBU%2Fb5hlMQb3c2Gav4nBqvDQjQ4EwH5fWNmJDvJlMeop%2FeDkuZi3V2BueJiWZYja%2Bm8BNJOYMgJ1jaNGFXqIBJjr8A6kPQgfBjPRyb%2Bd33pYexldu2rEjPyo2MZ&X-Amz-Signature=8d795ce212bbfabc1e28182dbcf4a532ecc2db33e53afa4bb95f566c225830e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4XO7XH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGulc5WZGzxh32zw8b%2BquYcHEUpH7xCeNVzA6zOEnnbnAiEAsLDUkZLUntZgtv5lz71JKOJnH9ZlzQfGHms0F4Qa9ewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF6zT6Ez3qUQ8doWyrcA9X2xARjWUNk%2BCgxVj0HbOYXSBMpreiPXwFFDuHYWhJNDmMLSh76K91KSv2cOONHb5ZPWI61Hmb4WpYhjoEpvk6TiFHU8P%2FdxlMVXHRyzgkQW6T0mvYXnWjDhVmT2PoqECVLUUXiON0bD0HdDSS74pvjRyz3HqApNzof3paM1icKr6FHx9H1PRCDHIvIT7WD71xGCTwGz2lywgtSdoAZ2flH9RrgRfxzv%2FziP9VsUPUNL1kEdyp64CuAHwINxAiD9e%2BXQfwU9Xi0CwoceK9pjijYJDu1QQviewLSF030HU%2FZazJlNwtbHpTWVH6HwelnrQSi2ttoK6LC7Vz0n6E6X%2BNOqcIaAB5toRV5MLEf57Vl82cTgO8oNr9peuRybo%2FbmgQ%2B1mSS2arQL9YLasfugmwfJW3kp8ZD3q5yWxVK%2B4KbNaEXLBN2mRNN26my8GXT1p8hxcZG0qI3BnPNR128qkmpVEI9A733EpEkAyGgen9u4rAzfmgo0sfMWaj0exGPks64VGzAbIfys3jP6jBM8ifc%2FoyW5ixSVv99g4W9HRv0G9GjecRfiPvdD6byFqpgUZ5s5qI6L9PzZP%2BCPg65w8RU6Ph9sEdC1ONmjX%2FJlSNmePM5X6ALQHxNkrOeMMjGsMEGOqUBsJWeKdTq0GmOAY8GvhnnDC72W9p%2FiaW1KFljIYPMBvnsIoyK78W%2BJLc5aweYaxyODx0BxY%2BCFdaF7wOvCY8uYwmr%2Bc8qkU%2F6KdBU%2Fb5hlMQb3c2Gav4nBqvDQjQ4EwH5fWNmJDvJlMeop%2FeDkuZi3V2BueJiWZYja%2Bm8BNJOYMgJ1jaNGFXqIBJjr8A6kPQgfBjPRyb%2Bd33pYexldu2rEjPyo2MZ&X-Amz-Signature=6885a023d38c570b80f730785726236b3e9136e89ad196135d48dcff48824c64&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4XO7XH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGulc5WZGzxh32zw8b%2BquYcHEUpH7xCeNVzA6zOEnnbnAiEAsLDUkZLUntZgtv5lz71JKOJnH9ZlzQfGHms0F4Qa9ewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF6zT6Ez3qUQ8doWyrcA9X2xARjWUNk%2BCgxVj0HbOYXSBMpreiPXwFFDuHYWhJNDmMLSh76K91KSv2cOONHb5ZPWI61Hmb4WpYhjoEpvk6TiFHU8P%2FdxlMVXHRyzgkQW6T0mvYXnWjDhVmT2PoqECVLUUXiON0bD0HdDSS74pvjRyz3HqApNzof3paM1icKr6FHx9H1PRCDHIvIT7WD71xGCTwGz2lywgtSdoAZ2flH9RrgRfxzv%2FziP9VsUPUNL1kEdyp64CuAHwINxAiD9e%2BXQfwU9Xi0CwoceK9pjijYJDu1QQviewLSF030HU%2FZazJlNwtbHpTWVH6HwelnrQSi2ttoK6LC7Vz0n6E6X%2BNOqcIaAB5toRV5MLEf57Vl82cTgO8oNr9peuRybo%2FbmgQ%2B1mSS2arQL9YLasfugmwfJW3kp8ZD3q5yWxVK%2B4KbNaEXLBN2mRNN26my8GXT1p8hxcZG0qI3BnPNR128qkmpVEI9A733EpEkAyGgen9u4rAzfmgo0sfMWaj0exGPks64VGzAbIfys3jP6jBM8ifc%2FoyW5ixSVv99g4W9HRv0G9GjecRfiPvdD6byFqpgUZ5s5qI6L9PzZP%2BCPg65w8RU6Ph9sEdC1ONmjX%2FJlSNmePM5X6ALQHxNkrOeMMjGsMEGOqUBsJWeKdTq0GmOAY8GvhnnDC72W9p%2FiaW1KFljIYPMBvnsIoyK78W%2BJLc5aweYaxyODx0BxY%2BCFdaF7wOvCY8uYwmr%2Bc8qkU%2F6KdBU%2Fb5hlMQb3c2Gav4nBqvDQjQ4EwH5fWNmJDvJlMeop%2FeDkuZi3V2BueJiWZYja%2Bm8BNJOYMgJ1jaNGFXqIBJjr8A6kPQgfBjPRyb%2Bd33pYexldu2rEjPyo2MZ&X-Amz-Signature=b330559b7abf7ea88015d25a5925fe98894b9acfeb84dc2eb455df7b03985aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4XO7XH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGulc5WZGzxh32zw8b%2BquYcHEUpH7xCeNVzA6zOEnnbnAiEAsLDUkZLUntZgtv5lz71JKOJnH9ZlzQfGHms0F4Qa9ewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF6zT6Ez3qUQ8doWyrcA9X2xARjWUNk%2BCgxVj0HbOYXSBMpreiPXwFFDuHYWhJNDmMLSh76K91KSv2cOONHb5ZPWI61Hmb4WpYhjoEpvk6TiFHU8P%2FdxlMVXHRyzgkQW6T0mvYXnWjDhVmT2PoqECVLUUXiON0bD0HdDSS74pvjRyz3HqApNzof3paM1icKr6FHx9H1PRCDHIvIT7WD71xGCTwGz2lywgtSdoAZ2flH9RrgRfxzv%2FziP9VsUPUNL1kEdyp64CuAHwINxAiD9e%2BXQfwU9Xi0CwoceK9pjijYJDu1QQviewLSF030HU%2FZazJlNwtbHpTWVH6HwelnrQSi2ttoK6LC7Vz0n6E6X%2BNOqcIaAB5toRV5MLEf57Vl82cTgO8oNr9peuRybo%2FbmgQ%2B1mSS2arQL9YLasfugmwfJW3kp8ZD3q5yWxVK%2B4KbNaEXLBN2mRNN26my8GXT1p8hxcZG0qI3BnPNR128qkmpVEI9A733EpEkAyGgen9u4rAzfmgo0sfMWaj0exGPks64VGzAbIfys3jP6jBM8ifc%2FoyW5ixSVv99g4W9HRv0G9GjecRfiPvdD6byFqpgUZ5s5qI6L9PzZP%2BCPg65w8RU6Ph9sEdC1ONmjX%2FJlSNmePM5X6ALQHxNkrOeMMjGsMEGOqUBsJWeKdTq0GmOAY8GvhnnDC72W9p%2FiaW1KFljIYPMBvnsIoyK78W%2BJLc5aweYaxyODx0BxY%2BCFdaF7wOvCY8uYwmr%2Bc8qkU%2F6KdBU%2Fb5hlMQb3c2Gav4nBqvDQjQ4EwH5fWNmJDvJlMeop%2FeDkuZi3V2BueJiWZYja%2Bm8BNJOYMgJ1jaNGFXqIBJjr8A6kPQgfBjPRyb%2Bd33pYexldu2rEjPyo2MZ&X-Amz-Signature=3161563375c19107fdff916e91aab8d4860c95ef155ba46d47d318943fa2ac68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4XO7XH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGulc5WZGzxh32zw8b%2BquYcHEUpH7xCeNVzA6zOEnnbnAiEAsLDUkZLUntZgtv5lz71JKOJnH9ZlzQfGHms0F4Qa9ewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF6zT6Ez3qUQ8doWyrcA9X2xARjWUNk%2BCgxVj0HbOYXSBMpreiPXwFFDuHYWhJNDmMLSh76K91KSv2cOONHb5ZPWI61Hmb4WpYhjoEpvk6TiFHU8P%2FdxlMVXHRyzgkQW6T0mvYXnWjDhVmT2PoqECVLUUXiON0bD0HdDSS74pvjRyz3HqApNzof3paM1icKr6FHx9H1PRCDHIvIT7WD71xGCTwGz2lywgtSdoAZ2flH9RrgRfxzv%2FziP9VsUPUNL1kEdyp64CuAHwINxAiD9e%2BXQfwU9Xi0CwoceK9pjijYJDu1QQviewLSF030HU%2FZazJlNwtbHpTWVH6HwelnrQSi2ttoK6LC7Vz0n6E6X%2BNOqcIaAB5toRV5MLEf57Vl82cTgO8oNr9peuRybo%2FbmgQ%2B1mSS2arQL9YLasfugmwfJW3kp8ZD3q5yWxVK%2B4KbNaEXLBN2mRNN26my8GXT1p8hxcZG0qI3BnPNR128qkmpVEI9A733EpEkAyGgen9u4rAzfmgo0sfMWaj0exGPks64VGzAbIfys3jP6jBM8ifc%2FoyW5ixSVv99g4W9HRv0G9GjecRfiPvdD6byFqpgUZ5s5qI6L9PzZP%2BCPg65w8RU6Ph9sEdC1ONmjX%2FJlSNmePM5X6ALQHxNkrOeMMjGsMEGOqUBsJWeKdTq0GmOAY8GvhnnDC72W9p%2FiaW1KFljIYPMBvnsIoyK78W%2BJLc5aweYaxyODx0BxY%2BCFdaF7wOvCY8uYwmr%2Bc8qkU%2F6KdBU%2Fb5hlMQb3c2Gav4nBqvDQjQ4EwH5fWNmJDvJlMeop%2FeDkuZi3V2BueJiWZYja%2Bm8BNJOYMgJ1jaNGFXqIBJjr8A6kPQgfBjPRyb%2Bd33pYexldu2rEjPyo2MZ&X-Amz-Signature=ebe8958e2a5afda49aa5dcc9f2802c223fc53620917c8574078fb5cb97a90ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4XO7XH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGulc5WZGzxh32zw8b%2BquYcHEUpH7xCeNVzA6zOEnnbnAiEAsLDUkZLUntZgtv5lz71JKOJnH9ZlzQfGHms0F4Qa9ewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF6zT6Ez3qUQ8doWyrcA9X2xARjWUNk%2BCgxVj0HbOYXSBMpreiPXwFFDuHYWhJNDmMLSh76K91KSv2cOONHb5ZPWI61Hmb4WpYhjoEpvk6TiFHU8P%2FdxlMVXHRyzgkQW6T0mvYXnWjDhVmT2PoqECVLUUXiON0bD0HdDSS74pvjRyz3HqApNzof3paM1icKr6FHx9H1PRCDHIvIT7WD71xGCTwGz2lywgtSdoAZ2flH9RrgRfxzv%2FziP9VsUPUNL1kEdyp64CuAHwINxAiD9e%2BXQfwU9Xi0CwoceK9pjijYJDu1QQviewLSF030HU%2FZazJlNwtbHpTWVH6HwelnrQSi2ttoK6LC7Vz0n6E6X%2BNOqcIaAB5toRV5MLEf57Vl82cTgO8oNr9peuRybo%2FbmgQ%2B1mSS2arQL9YLasfugmwfJW3kp8ZD3q5yWxVK%2B4KbNaEXLBN2mRNN26my8GXT1p8hxcZG0qI3BnPNR128qkmpVEI9A733EpEkAyGgen9u4rAzfmgo0sfMWaj0exGPks64VGzAbIfys3jP6jBM8ifc%2FoyW5ixSVv99g4W9HRv0G9GjecRfiPvdD6byFqpgUZ5s5qI6L9PzZP%2BCPg65w8RU6Ph9sEdC1ONmjX%2FJlSNmePM5X6ALQHxNkrOeMMjGsMEGOqUBsJWeKdTq0GmOAY8GvhnnDC72W9p%2FiaW1KFljIYPMBvnsIoyK78W%2BJLc5aweYaxyODx0BxY%2BCFdaF7wOvCY8uYwmr%2Bc8qkU%2F6KdBU%2Fb5hlMQb3c2Gav4nBqvDQjQ4EwH5fWNmJDvJlMeop%2FeDkuZi3V2BueJiWZYja%2Bm8BNJOYMgJ1jaNGFXqIBJjr8A6kPQgfBjPRyb%2Bd33pYexldu2rEjPyo2MZ&X-Amz-Signature=6bf1b9845e651046fa4a1c85d6233b8b9617eafd8a9ed87c2f30e52dfec5ca26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4XO7XH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGulc5WZGzxh32zw8b%2BquYcHEUpH7xCeNVzA6zOEnnbnAiEAsLDUkZLUntZgtv5lz71JKOJnH9ZlzQfGHms0F4Qa9ewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF6zT6Ez3qUQ8doWyrcA9X2xARjWUNk%2BCgxVj0HbOYXSBMpreiPXwFFDuHYWhJNDmMLSh76K91KSv2cOONHb5ZPWI61Hmb4WpYhjoEpvk6TiFHU8P%2FdxlMVXHRyzgkQW6T0mvYXnWjDhVmT2PoqECVLUUXiON0bD0HdDSS74pvjRyz3HqApNzof3paM1icKr6FHx9H1PRCDHIvIT7WD71xGCTwGz2lywgtSdoAZ2flH9RrgRfxzv%2FziP9VsUPUNL1kEdyp64CuAHwINxAiD9e%2BXQfwU9Xi0CwoceK9pjijYJDu1QQviewLSF030HU%2FZazJlNwtbHpTWVH6HwelnrQSi2ttoK6LC7Vz0n6E6X%2BNOqcIaAB5toRV5MLEf57Vl82cTgO8oNr9peuRybo%2FbmgQ%2B1mSS2arQL9YLasfugmwfJW3kp8ZD3q5yWxVK%2B4KbNaEXLBN2mRNN26my8GXT1p8hxcZG0qI3BnPNR128qkmpVEI9A733EpEkAyGgen9u4rAzfmgo0sfMWaj0exGPks64VGzAbIfys3jP6jBM8ifc%2FoyW5ixSVv99g4W9HRv0G9GjecRfiPvdD6byFqpgUZ5s5qI6L9PzZP%2BCPg65w8RU6Ph9sEdC1ONmjX%2FJlSNmePM5X6ALQHxNkrOeMMjGsMEGOqUBsJWeKdTq0GmOAY8GvhnnDC72W9p%2FiaW1KFljIYPMBvnsIoyK78W%2BJLc5aweYaxyODx0BxY%2BCFdaF7wOvCY8uYwmr%2Bc8qkU%2F6KdBU%2Fb5hlMQb3c2Gav4nBqvDQjQ4EwH5fWNmJDvJlMeop%2FeDkuZi3V2BueJiWZYja%2Bm8BNJOYMgJ1jaNGFXqIBJjr8A6kPQgfBjPRyb%2Bd33pYexldu2rEjPyo2MZ&X-Amz-Signature=3288269dbe16a7492683a4107aa395415562f9ce470d4054fa3101730e9ec927&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
