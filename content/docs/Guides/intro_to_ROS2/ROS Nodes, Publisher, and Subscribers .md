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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE32IGNS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCgmQLsbTNGOM68wGraMaZuXiiYyUsjvd%2FglJlgbZhgjQIgWQO2sVLrAtFraItA8IcJFvNCDboseE%2FKoBERYpufPNwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH6kisFSYxBgEqsCrcAyRPRegub42M0h2nfi3axeqbYzRBBTjiB3pr2ZTBQG2kW9VpbvKmc0B%2FwjsXxxQ9PiGROgZB5PT3QSKYZIRLEa7oVvjSdJ2%2BbXIffLCPsEeBWCPl%2B2wXUn83xVdGQzIXQeNDatWhzxnCl%2BinfaUudN%2BCk%2F75vNPmxC8UjsE8Ub3LIH52uxkNH1%2BbNpGO4YIHb438iS4CPlgJMdzAYE8UspDrU%2BtYeuEQTI8WjWMk16BRuYlC0w92kseom4qGPhfF4Szx7%2BmBLhayP%2BGzEzrX6PwZch%2BcaN7tM9LN6xp68LxInooZWItNi%2F3d2XqUtG1GcV7U8ymeohQ8gqgRXoXTmYCDemmEntchNaS7O2I4TW4Bdu5a7b7uSjzO4aZH24w2IGmeGtbCwL1IHG5d%2B1BekjqpqONrEEP5AajJ3RbAr0Oz9bJZN0JBU6xLVIG%2FuWyx3%2BTCZalrkTRKK33Isd1AKpXqj2LNkTw%2FDsIZX04kNp8yhVy69B5lciPxShll%2BW%2FGqBcBoUAuttSUN62h5knY1fQx1%2F56G3FVzM8JNb7JzLzFwk9PhwWli8j57WGhfjnok5K%2BkSiuItVQachlmiqaDZr%2F%2FzaKu1TFpoq1w%2FFbwPWPwSp05FahNm0M96IxMJTz2cAGOqUBJV4ErwSdbKqcl5AjsJseaJ%2B7YJm4hPd%2FnKg48BIq%2B%2Bwkv2gWNQSrzsZ0Nzo645yXdUmXTq4EKHHAx53%2B6wHTpFXQYkMWddSBWvh7aCGVhFr3oqd5WWN%2FAg207KmklvfZmsGGUJCcHno9SiJdpgoAoqoXoUyZRDHy8wWK7F2yfJHoS1O4CU9%2BWYDEBUr%2FISV2b8klN5HSeuKhxLU8VUfbtInAfKWi&X-Amz-Signature=8d052e062bb70dedcf319d418a96b7ca885498916b1470a21d7e134f4fe17a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE32IGNS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCgmQLsbTNGOM68wGraMaZuXiiYyUsjvd%2FglJlgbZhgjQIgWQO2sVLrAtFraItA8IcJFvNCDboseE%2FKoBERYpufPNwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH6kisFSYxBgEqsCrcAyRPRegub42M0h2nfi3axeqbYzRBBTjiB3pr2ZTBQG2kW9VpbvKmc0B%2FwjsXxxQ9PiGROgZB5PT3QSKYZIRLEa7oVvjSdJ2%2BbXIffLCPsEeBWCPl%2B2wXUn83xVdGQzIXQeNDatWhzxnCl%2BinfaUudN%2BCk%2F75vNPmxC8UjsE8Ub3LIH52uxkNH1%2BbNpGO4YIHb438iS4CPlgJMdzAYE8UspDrU%2BtYeuEQTI8WjWMk16BRuYlC0w92kseom4qGPhfF4Szx7%2BmBLhayP%2BGzEzrX6PwZch%2BcaN7tM9LN6xp68LxInooZWItNi%2F3d2XqUtG1GcV7U8ymeohQ8gqgRXoXTmYCDemmEntchNaS7O2I4TW4Bdu5a7b7uSjzO4aZH24w2IGmeGtbCwL1IHG5d%2B1BekjqpqONrEEP5AajJ3RbAr0Oz9bJZN0JBU6xLVIG%2FuWyx3%2BTCZalrkTRKK33Isd1AKpXqj2LNkTw%2FDsIZX04kNp8yhVy69B5lciPxShll%2BW%2FGqBcBoUAuttSUN62h5knY1fQx1%2F56G3FVzM8JNb7JzLzFwk9PhwWli8j57WGhfjnok5K%2BkSiuItVQachlmiqaDZr%2F%2FzaKu1TFpoq1w%2FFbwPWPwSp05FahNm0M96IxMJTz2cAGOqUBJV4ErwSdbKqcl5AjsJseaJ%2B7YJm4hPd%2FnKg48BIq%2B%2Bwkv2gWNQSrzsZ0Nzo645yXdUmXTq4EKHHAx53%2B6wHTpFXQYkMWddSBWvh7aCGVhFr3oqd5WWN%2FAg207KmklvfZmsGGUJCcHno9SiJdpgoAoqoXoUyZRDHy8wWK7F2yfJHoS1O4CU9%2BWYDEBUr%2FISV2b8klN5HSeuKhxLU8VUfbtInAfKWi&X-Amz-Signature=58747ad1351eddb73fa00509bdf04787ea9754df6db9067845efafe81724d574&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE32IGNS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCgmQLsbTNGOM68wGraMaZuXiiYyUsjvd%2FglJlgbZhgjQIgWQO2sVLrAtFraItA8IcJFvNCDboseE%2FKoBERYpufPNwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH6kisFSYxBgEqsCrcAyRPRegub42M0h2nfi3axeqbYzRBBTjiB3pr2ZTBQG2kW9VpbvKmc0B%2FwjsXxxQ9PiGROgZB5PT3QSKYZIRLEa7oVvjSdJ2%2BbXIffLCPsEeBWCPl%2B2wXUn83xVdGQzIXQeNDatWhzxnCl%2BinfaUudN%2BCk%2F75vNPmxC8UjsE8Ub3LIH52uxkNH1%2BbNpGO4YIHb438iS4CPlgJMdzAYE8UspDrU%2BtYeuEQTI8WjWMk16BRuYlC0w92kseom4qGPhfF4Szx7%2BmBLhayP%2BGzEzrX6PwZch%2BcaN7tM9LN6xp68LxInooZWItNi%2F3d2XqUtG1GcV7U8ymeohQ8gqgRXoXTmYCDemmEntchNaS7O2I4TW4Bdu5a7b7uSjzO4aZH24w2IGmeGtbCwL1IHG5d%2B1BekjqpqONrEEP5AajJ3RbAr0Oz9bJZN0JBU6xLVIG%2FuWyx3%2BTCZalrkTRKK33Isd1AKpXqj2LNkTw%2FDsIZX04kNp8yhVy69B5lciPxShll%2BW%2FGqBcBoUAuttSUN62h5knY1fQx1%2F56G3FVzM8JNb7JzLzFwk9PhwWli8j57WGhfjnok5K%2BkSiuItVQachlmiqaDZr%2F%2FzaKu1TFpoq1w%2FFbwPWPwSp05FahNm0M96IxMJTz2cAGOqUBJV4ErwSdbKqcl5AjsJseaJ%2B7YJm4hPd%2FnKg48BIq%2B%2Bwkv2gWNQSrzsZ0Nzo645yXdUmXTq4EKHHAx53%2B6wHTpFXQYkMWddSBWvh7aCGVhFr3oqd5WWN%2FAg207KmklvfZmsGGUJCcHno9SiJdpgoAoqoXoUyZRDHy8wWK7F2yfJHoS1O4CU9%2BWYDEBUr%2FISV2b8klN5HSeuKhxLU8VUfbtInAfKWi&X-Amz-Signature=eae8ee3c1b4037aaa3c0170a93e35a57210ae8f4ddb6ccc3f6465561809c7528&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE32IGNS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCgmQLsbTNGOM68wGraMaZuXiiYyUsjvd%2FglJlgbZhgjQIgWQO2sVLrAtFraItA8IcJFvNCDboseE%2FKoBERYpufPNwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH6kisFSYxBgEqsCrcAyRPRegub42M0h2nfi3axeqbYzRBBTjiB3pr2ZTBQG2kW9VpbvKmc0B%2FwjsXxxQ9PiGROgZB5PT3QSKYZIRLEa7oVvjSdJ2%2BbXIffLCPsEeBWCPl%2B2wXUn83xVdGQzIXQeNDatWhzxnCl%2BinfaUudN%2BCk%2F75vNPmxC8UjsE8Ub3LIH52uxkNH1%2BbNpGO4YIHb438iS4CPlgJMdzAYE8UspDrU%2BtYeuEQTI8WjWMk16BRuYlC0w92kseom4qGPhfF4Szx7%2BmBLhayP%2BGzEzrX6PwZch%2BcaN7tM9LN6xp68LxInooZWItNi%2F3d2XqUtG1GcV7U8ymeohQ8gqgRXoXTmYCDemmEntchNaS7O2I4TW4Bdu5a7b7uSjzO4aZH24w2IGmeGtbCwL1IHG5d%2B1BekjqpqONrEEP5AajJ3RbAr0Oz9bJZN0JBU6xLVIG%2FuWyx3%2BTCZalrkTRKK33Isd1AKpXqj2LNkTw%2FDsIZX04kNp8yhVy69B5lciPxShll%2BW%2FGqBcBoUAuttSUN62h5knY1fQx1%2F56G3FVzM8JNb7JzLzFwk9PhwWli8j57WGhfjnok5K%2BkSiuItVQachlmiqaDZr%2F%2FzaKu1TFpoq1w%2FFbwPWPwSp05FahNm0M96IxMJTz2cAGOqUBJV4ErwSdbKqcl5AjsJseaJ%2B7YJm4hPd%2FnKg48BIq%2B%2Bwkv2gWNQSrzsZ0Nzo645yXdUmXTq4EKHHAx53%2B6wHTpFXQYkMWddSBWvh7aCGVhFr3oqd5WWN%2FAg207KmklvfZmsGGUJCcHno9SiJdpgoAoqoXoUyZRDHy8wWK7F2yfJHoS1O4CU9%2BWYDEBUr%2FISV2b8klN5HSeuKhxLU8VUfbtInAfKWi&X-Amz-Signature=42e75b3fcb511a18ff8ad650007c7da34963b50f08e322f198f4c28b995c10ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE32IGNS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCgmQLsbTNGOM68wGraMaZuXiiYyUsjvd%2FglJlgbZhgjQIgWQO2sVLrAtFraItA8IcJFvNCDboseE%2FKoBERYpufPNwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH6kisFSYxBgEqsCrcAyRPRegub42M0h2nfi3axeqbYzRBBTjiB3pr2ZTBQG2kW9VpbvKmc0B%2FwjsXxxQ9PiGROgZB5PT3QSKYZIRLEa7oVvjSdJ2%2BbXIffLCPsEeBWCPl%2B2wXUn83xVdGQzIXQeNDatWhzxnCl%2BinfaUudN%2BCk%2F75vNPmxC8UjsE8Ub3LIH52uxkNH1%2BbNpGO4YIHb438iS4CPlgJMdzAYE8UspDrU%2BtYeuEQTI8WjWMk16BRuYlC0w92kseom4qGPhfF4Szx7%2BmBLhayP%2BGzEzrX6PwZch%2BcaN7tM9LN6xp68LxInooZWItNi%2F3d2XqUtG1GcV7U8ymeohQ8gqgRXoXTmYCDemmEntchNaS7O2I4TW4Bdu5a7b7uSjzO4aZH24w2IGmeGtbCwL1IHG5d%2B1BekjqpqONrEEP5AajJ3RbAr0Oz9bJZN0JBU6xLVIG%2FuWyx3%2BTCZalrkTRKK33Isd1AKpXqj2LNkTw%2FDsIZX04kNp8yhVy69B5lciPxShll%2BW%2FGqBcBoUAuttSUN62h5knY1fQx1%2F56G3FVzM8JNb7JzLzFwk9PhwWli8j57WGhfjnok5K%2BkSiuItVQachlmiqaDZr%2F%2FzaKu1TFpoq1w%2FFbwPWPwSp05FahNm0M96IxMJTz2cAGOqUBJV4ErwSdbKqcl5AjsJseaJ%2B7YJm4hPd%2FnKg48BIq%2B%2Bwkv2gWNQSrzsZ0Nzo645yXdUmXTq4EKHHAx53%2B6wHTpFXQYkMWddSBWvh7aCGVhFr3oqd5WWN%2FAg207KmklvfZmsGGUJCcHno9SiJdpgoAoqoXoUyZRDHy8wWK7F2yfJHoS1O4CU9%2BWYDEBUr%2FISV2b8klN5HSeuKhxLU8VUfbtInAfKWi&X-Amz-Signature=dce96c176cfc71e81bf0f921f78dd45c2af2cc349df8f8b12a6775e0180dc4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE32IGNS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCgmQLsbTNGOM68wGraMaZuXiiYyUsjvd%2FglJlgbZhgjQIgWQO2sVLrAtFraItA8IcJFvNCDboseE%2FKoBERYpufPNwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH6kisFSYxBgEqsCrcAyRPRegub42M0h2nfi3axeqbYzRBBTjiB3pr2ZTBQG2kW9VpbvKmc0B%2FwjsXxxQ9PiGROgZB5PT3QSKYZIRLEa7oVvjSdJ2%2BbXIffLCPsEeBWCPl%2B2wXUn83xVdGQzIXQeNDatWhzxnCl%2BinfaUudN%2BCk%2F75vNPmxC8UjsE8Ub3LIH52uxkNH1%2BbNpGO4YIHb438iS4CPlgJMdzAYE8UspDrU%2BtYeuEQTI8WjWMk16BRuYlC0w92kseom4qGPhfF4Szx7%2BmBLhayP%2BGzEzrX6PwZch%2BcaN7tM9LN6xp68LxInooZWItNi%2F3d2XqUtG1GcV7U8ymeohQ8gqgRXoXTmYCDemmEntchNaS7O2I4TW4Bdu5a7b7uSjzO4aZH24w2IGmeGtbCwL1IHG5d%2B1BekjqpqONrEEP5AajJ3RbAr0Oz9bJZN0JBU6xLVIG%2FuWyx3%2BTCZalrkTRKK33Isd1AKpXqj2LNkTw%2FDsIZX04kNp8yhVy69B5lciPxShll%2BW%2FGqBcBoUAuttSUN62h5knY1fQx1%2F56G3FVzM8JNb7JzLzFwk9PhwWli8j57WGhfjnok5K%2BkSiuItVQachlmiqaDZr%2F%2FzaKu1TFpoq1w%2FFbwPWPwSp05FahNm0M96IxMJTz2cAGOqUBJV4ErwSdbKqcl5AjsJseaJ%2B7YJm4hPd%2FnKg48BIq%2B%2Bwkv2gWNQSrzsZ0Nzo645yXdUmXTq4EKHHAx53%2B6wHTpFXQYkMWddSBWvh7aCGVhFr3oqd5WWN%2FAg207KmklvfZmsGGUJCcHno9SiJdpgoAoqoXoUyZRDHy8wWK7F2yfJHoS1O4CU9%2BWYDEBUr%2FISV2b8klN5HSeuKhxLU8VUfbtInAfKWi&X-Amz-Signature=80d48460dc2ec2e2875d3198982e429729c507e932c372469f5adc6bd78afc6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE32IGNS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCgmQLsbTNGOM68wGraMaZuXiiYyUsjvd%2FglJlgbZhgjQIgWQO2sVLrAtFraItA8IcJFvNCDboseE%2FKoBERYpufPNwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH6kisFSYxBgEqsCrcAyRPRegub42M0h2nfi3axeqbYzRBBTjiB3pr2ZTBQG2kW9VpbvKmc0B%2FwjsXxxQ9PiGROgZB5PT3QSKYZIRLEa7oVvjSdJ2%2BbXIffLCPsEeBWCPl%2B2wXUn83xVdGQzIXQeNDatWhzxnCl%2BinfaUudN%2BCk%2F75vNPmxC8UjsE8Ub3LIH52uxkNH1%2BbNpGO4YIHb438iS4CPlgJMdzAYE8UspDrU%2BtYeuEQTI8WjWMk16BRuYlC0w92kseom4qGPhfF4Szx7%2BmBLhayP%2BGzEzrX6PwZch%2BcaN7tM9LN6xp68LxInooZWItNi%2F3d2XqUtG1GcV7U8ymeohQ8gqgRXoXTmYCDemmEntchNaS7O2I4TW4Bdu5a7b7uSjzO4aZH24w2IGmeGtbCwL1IHG5d%2B1BekjqpqONrEEP5AajJ3RbAr0Oz9bJZN0JBU6xLVIG%2FuWyx3%2BTCZalrkTRKK33Isd1AKpXqj2LNkTw%2FDsIZX04kNp8yhVy69B5lciPxShll%2BW%2FGqBcBoUAuttSUN62h5knY1fQx1%2F56G3FVzM8JNb7JzLzFwk9PhwWli8j57WGhfjnok5K%2BkSiuItVQachlmiqaDZr%2F%2FzaKu1TFpoq1w%2FFbwPWPwSp05FahNm0M96IxMJTz2cAGOqUBJV4ErwSdbKqcl5AjsJseaJ%2B7YJm4hPd%2FnKg48BIq%2B%2Bwkv2gWNQSrzsZ0Nzo645yXdUmXTq4EKHHAx53%2B6wHTpFXQYkMWddSBWvh7aCGVhFr3oqd5WWN%2FAg207KmklvfZmsGGUJCcHno9SiJdpgoAoqoXoUyZRDHy8wWK7F2yfJHoS1O4CU9%2BWYDEBUr%2FISV2b8klN5HSeuKhxLU8VUfbtInAfKWi&X-Amz-Signature=a56abdbc0b0d12f5042862e505eb2264e3c992102af70b95678df7f63273b5c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE32IGNS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCgmQLsbTNGOM68wGraMaZuXiiYyUsjvd%2FglJlgbZhgjQIgWQO2sVLrAtFraItA8IcJFvNCDboseE%2FKoBERYpufPNwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH6kisFSYxBgEqsCrcAyRPRegub42M0h2nfi3axeqbYzRBBTjiB3pr2ZTBQG2kW9VpbvKmc0B%2FwjsXxxQ9PiGROgZB5PT3QSKYZIRLEa7oVvjSdJ2%2BbXIffLCPsEeBWCPl%2B2wXUn83xVdGQzIXQeNDatWhzxnCl%2BinfaUudN%2BCk%2F75vNPmxC8UjsE8Ub3LIH52uxkNH1%2BbNpGO4YIHb438iS4CPlgJMdzAYE8UspDrU%2BtYeuEQTI8WjWMk16BRuYlC0w92kseom4qGPhfF4Szx7%2BmBLhayP%2BGzEzrX6PwZch%2BcaN7tM9LN6xp68LxInooZWItNi%2F3d2XqUtG1GcV7U8ymeohQ8gqgRXoXTmYCDemmEntchNaS7O2I4TW4Bdu5a7b7uSjzO4aZH24w2IGmeGtbCwL1IHG5d%2B1BekjqpqONrEEP5AajJ3RbAr0Oz9bJZN0JBU6xLVIG%2FuWyx3%2BTCZalrkTRKK33Isd1AKpXqj2LNkTw%2FDsIZX04kNp8yhVy69B5lciPxShll%2BW%2FGqBcBoUAuttSUN62h5knY1fQx1%2F56G3FVzM8JNb7JzLzFwk9PhwWli8j57WGhfjnok5K%2BkSiuItVQachlmiqaDZr%2F%2FzaKu1TFpoq1w%2FFbwPWPwSp05FahNm0M96IxMJTz2cAGOqUBJV4ErwSdbKqcl5AjsJseaJ%2B7YJm4hPd%2FnKg48BIq%2B%2Bwkv2gWNQSrzsZ0Nzo645yXdUmXTq4EKHHAx53%2B6wHTpFXQYkMWddSBWvh7aCGVhFr3oqd5WWN%2FAg207KmklvfZmsGGUJCcHno9SiJdpgoAoqoXoUyZRDHy8wWK7F2yfJHoS1O4CU9%2BWYDEBUr%2FISV2b8klN5HSeuKhxLU8VUfbtInAfKWi&X-Amz-Signature=59cfc662680ab4b782c3846f2ca77f29c069eff29f06d0337420dafa2dd881e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
