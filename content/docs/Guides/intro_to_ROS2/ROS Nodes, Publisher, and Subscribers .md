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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4G5ML3A%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCuAWPXEZmU9aEgDfhvFrMSqeNb8rwEvavaeuf5NmIN1wIgIgd98%2BYuO%2FcnlncW9ejDjUp827cVp8DXTk3SKHWZCI8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQznd5abBBb9eC5ZSrcAxpPfhW6DCuwZKhWiU%2BYtPAZSp1EIWPVrLy3PSZKAHl7mLIf5tiugekCx4ZbvK70SvDIMoWvZqvO7rBBMUvjJDt18blKHwrHSn%2BG2jChtwORXM%2F0dnl1BlqFWOuZQZ%2FMtvllOEFEX4Rkr%2FEaM2YMCQcPcbKGcGNkyivZDcs01b9Be9uChR1qtllOJpVn4nhsMDULEgjoAFfLdmMb1An%2BDCJ%2BbDpguiKtmdZdiJ2eCmZhhId4X10Q9wM%2B78k0A26%2FM%2Fb9Hn3A8YbghPpWmLcAlLpuWn1mcys1B8Yft58aOJgY86NXe0cT3qIuCj6WuHbbd%2BxQmUiuPHEzRt3LIxqAJ4v6JnoBG9Pa1ouDL61HcTbTHpmPvJXOxslAwGvrocJq4VXHYARo0fbQ7GA%2F8TXfBArq9y57JVmdZKeSGBWC3S1HGlKdpbtBgBsX9HjMPMXD%2Fpg5ulqZoxRFgDFyT%2BJAb7VoDPp7ih0lzH%2B6rZl%2FrWwBJnmh7Xl0NKFDoXnjXyOmN19b74XN%2BXMrWkhVAjE1ZwCmjjOx1%2FzCbvOBuH4Pq%2FWh9A4HXCBjUnSKkgkNXMAfR%2FJ6XCvNQVqVCt29ArTo%2F1J%2F6tWcrq%2BNTFpRWX0r20TUQb2Wimay0UizgB5QMKPH4cIGOqUBWJBmcNb7OU1zNHUdsE31Ro6GZebhTn2RjD%2Fl0OckUTgGfSkK5A2iDbeypVVuEdK7CJ58dNtxwDKbH22WulWO69S3iX4tPH4FV%2FTgGrVfrTQ4ZPLZl8bcZi6uwfSqG%2BIo%2FXLluR3xiSXY%2B1qDsZXIa3ny4U0pJ9dOcwiiqdoH5maYjvNIlkE0%2FuLW76Pc249WuLHOwgN0Uxisznu8Aur88L%2FSv8ke&X-Amz-Signature=5e6150cb880bceb36ebbe18b0f1842be9fb1bbf2b469d646ea53a95979e83773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4G5ML3A%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCuAWPXEZmU9aEgDfhvFrMSqeNb8rwEvavaeuf5NmIN1wIgIgd98%2BYuO%2FcnlncW9ejDjUp827cVp8DXTk3SKHWZCI8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQznd5abBBb9eC5ZSrcAxpPfhW6DCuwZKhWiU%2BYtPAZSp1EIWPVrLy3PSZKAHl7mLIf5tiugekCx4ZbvK70SvDIMoWvZqvO7rBBMUvjJDt18blKHwrHSn%2BG2jChtwORXM%2F0dnl1BlqFWOuZQZ%2FMtvllOEFEX4Rkr%2FEaM2YMCQcPcbKGcGNkyivZDcs01b9Be9uChR1qtllOJpVn4nhsMDULEgjoAFfLdmMb1An%2BDCJ%2BbDpguiKtmdZdiJ2eCmZhhId4X10Q9wM%2B78k0A26%2FM%2Fb9Hn3A8YbghPpWmLcAlLpuWn1mcys1B8Yft58aOJgY86NXe0cT3qIuCj6WuHbbd%2BxQmUiuPHEzRt3LIxqAJ4v6JnoBG9Pa1ouDL61HcTbTHpmPvJXOxslAwGvrocJq4VXHYARo0fbQ7GA%2F8TXfBArq9y57JVmdZKeSGBWC3S1HGlKdpbtBgBsX9HjMPMXD%2Fpg5ulqZoxRFgDFyT%2BJAb7VoDPp7ih0lzH%2B6rZl%2FrWwBJnmh7Xl0NKFDoXnjXyOmN19b74XN%2BXMrWkhVAjE1ZwCmjjOx1%2FzCbvOBuH4Pq%2FWh9A4HXCBjUnSKkgkNXMAfR%2FJ6XCvNQVqVCt29ArTo%2F1J%2F6tWcrq%2BNTFpRWX0r20TUQb2Wimay0UizgB5QMKPH4cIGOqUBWJBmcNb7OU1zNHUdsE31Ro6GZebhTn2RjD%2Fl0OckUTgGfSkK5A2iDbeypVVuEdK7CJ58dNtxwDKbH22WulWO69S3iX4tPH4FV%2FTgGrVfrTQ4ZPLZl8bcZi6uwfSqG%2BIo%2FXLluR3xiSXY%2B1qDsZXIa3ny4U0pJ9dOcwiiqdoH5maYjvNIlkE0%2FuLW76Pc249WuLHOwgN0Uxisznu8Aur88L%2FSv8ke&X-Amz-Signature=d47056d89ab164a7381e6be247557e7df3b1dcb6d71f3f87ea7b385c5e82bcac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4G5ML3A%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCuAWPXEZmU9aEgDfhvFrMSqeNb8rwEvavaeuf5NmIN1wIgIgd98%2BYuO%2FcnlncW9ejDjUp827cVp8DXTk3SKHWZCI8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQznd5abBBb9eC5ZSrcAxpPfhW6DCuwZKhWiU%2BYtPAZSp1EIWPVrLy3PSZKAHl7mLIf5tiugekCx4ZbvK70SvDIMoWvZqvO7rBBMUvjJDt18blKHwrHSn%2BG2jChtwORXM%2F0dnl1BlqFWOuZQZ%2FMtvllOEFEX4Rkr%2FEaM2YMCQcPcbKGcGNkyivZDcs01b9Be9uChR1qtllOJpVn4nhsMDULEgjoAFfLdmMb1An%2BDCJ%2BbDpguiKtmdZdiJ2eCmZhhId4X10Q9wM%2B78k0A26%2FM%2Fb9Hn3A8YbghPpWmLcAlLpuWn1mcys1B8Yft58aOJgY86NXe0cT3qIuCj6WuHbbd%2BxQmUiuPHEzRt3LIxqAJ4v6JnoBG9Pa1ouDL61HcTbTHpmPvJXOxslAwGvrocJq4VXHYARo0fbQ7GA%2F8TXfBArq9y57JVmdZKeSGBWC3S1HGlKdpbtBgBsX9HjMPMXD%2Fpg5ulqZoxRFgDFyT%2BJAb7VoDPp7ih0lzH%2B6rZl%2FrWwBJnmh7Xl0NKFDoXnjXyOmN19b74XN%2BXMrWkhVAjE1ZwCmjjOx1%2FzCbvOBuH4Pq%2FWh9A4HXCBjUnSKkgkNXMAfR%2FJ6XCvNQVqVCt29ArTo%2F1J%2F6tWcrq%2BNTFpRWX0r20TUQb2Wimay0UizgB5QMKPH4cIGOqUBWJBmcNb7OU1zNHUdsE31Ro6GZebhTn2RjD%2Fl0OckUTgGfSkK5A2iDbeypVVuEdK7CJ58dNtxwDKbH22WulWO69S3iX4tPH4FV%2FTgGrVfrTQ4ZPLZl8bcZi6uwfSqG%2BIo%2FXLluR3xiSXY%2B1qDsZXIa3ny4U0pJ9dOcwiiqdoH5maYjvNIlkE0%2FuLW76Pc249WuLHOwgN0Uxisznu8Aur88L%2FSv8ke&X-Amz-Signature=fa55e16d1db60eec414c0653e20a213552bddb4cb5f050af3e660f87207ec4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4G5ML3A%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCuAWPXEZmU9aEgDfhvFrMSqeNb8rwEvavaeuf5NmIN1wIgIgd98%2BYuO%2FcnlncW9ejDjUp827cVp8DXTk3SKHWZCI8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQznd5abBBb9eC5ZSrcAxpPfhW6DCuwZKhWiU%2BYtPAZSp1EIWPVrLy3PSZKAHl7mLIf5tiugekCx4ZbvK70SvDIMoWvZqvO7rBBMUvjJDt18blKHwrHSn%2BG2jChtwORXM%2F0dnl1BlqFWOuZQZ%2FMtvllOEFEX4Rkr%2FEaM2YMCQcPcbKGcGNkyivZDcs01b9Be9uChR1qtllOJpVn4nhsMDULEgjoAFfLdmMb1An%2BDCJ%2BbDpguiKtmdZdiJ2eCmZhhId4X10Q9wM%2B78k0A26%2FM%2Fb9Hn3A8YbghPpWmLcAlLpuWn1mcys1B8Yft58aOJgY86NXe0cT3qIuCj6WuHbbd%2BxQmUiuPHEzRt3LIxqAJ4v6JnoBG9Pa1ouDL61HcTbTHpmPvJXOxslAwGvrocJq4VXHYARo0fbQ7GA%2F8TXfBArq9y57JVmdZKeSGBWC3S1HGlKdpbtBgBsX9HjMPMXD%2Fpg5ulqZoxRFgDFyT%2BJAb7VoDPp7ih0lzH%2B6rZl%2FrWwBJnmh7Xl0NKFDoXnjXyOmN19b74XN%2BXMrWkhVAjE1ZwCmjjOx1%2FzCbvOBuH4Pq%2FWh9A4HXCBjUnSKkgkNXMAfR%2FJ6XCvNQVqVCt29ArTo%2F1J%2F6tWcrq%2BNTFpRWX0r20TUQb2Wimay0UizgB5QMKPH4cIGOqUBWJBmcNb7OU1zNHUdsE31Ro6GZebhTn2RjD%2Fl0OckUTgGfSkK5A2iDbeypVVuEdK7CJ58dNtxwDKbH22WulWO69S3iX4tPH4FV%2FTgGrVfrTQ4ZPLZl8bcZi6uwfSqG%2BIo%2FXLluR3xiSXY%2B1qDsZXIa3ny4U0pJ9dOcwiiqdoH5maYjvNIlkE0%2FuLW76Pc249WuLHOwgN0Uxisznu8Aur88L%2FSv8ke&X-Amz-Signature=d3b2a9db422f890d91652dccec8e1922b898acba835e8bf60175461b84077e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4G5ML3A%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCuAWPXEZmU9aEgDfhvFrMSqeNb8rwEvavaeuf5NmIN1wIgIgd98%2BYuO%2FcnlncW9ejDjUp827cVp8DXTk3SKHWZCI8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQznd5abBBb9eC5ZSrcAxpPfhW6DCuwZKhWiU%2BYtPAZSp1EIWPVrLy3PSZKAHl7mLIf5tiugekCx4ZbvK70SvDIMoWvZqvO7rBBMUvjJDt18blKHwrHSn%2BG2jChtwORXM%2F0dnl1BlqFWOuZQZ%2FMtvllOEFEX4Rkr%2FEaM2YMCQcPcbKGcGNkyivZDcs01b9Be9uChR1qtllOJpVn4nhsMDULEgjoAFfLdmMb1An%2BDCJ%2BbDpguiKtmdZdiJ2eCmZhhId4X10Q9wM%2B78k0A26%2FM%2Fb9Hn3A8YbghPpWmLcAlLpuWn1mcys1B8Yft58aOJgY86NXe0cT3qIuCj6WuHbbd%2BxQmUiuPHEzRt3LIxqAJ4v6JnoBG9Pa1ouDL61HcTbTHpmPvJXOxslAwGvrocJq4VXHYARo0fbQ7GA%2F8TXfBArq9y57JVmdZKeSGBWC3S1HGlKdpbtBgBsX9HjMPMXD%2Fpg5ulqZoxRFgDFyT%2BJAb7VoDPp7ih0lzH%2B6rZl%2FrWwBJnmh7Xl0NKFDoXnjXyOmN19b74XN%2BXMrWkhVAjE1ZwCmjjOx1%2FzCbvOBuH4Pq%2FWh9A4HXCBjUnSKkgkNXMAfR%2FJ6XCvNQVqVCt29ArTo%2F1J%2F6tWcrq%2BNTFpRWX0r20TUQb2Wimay0UizgB5QMKPH4cIGOqUBWJBmcNb7OU1zNHUdsE31Ro6GZebhTn2RjD%2Fl0OckUTgGfSkK5A2iDbeypVVuEdK7CJ58dNtxwDKbH22WulWO69S3iX4tPH4FV%2FTgGrVfrTQ4ZPLZl8bcZi6uwfSqG%2BIo%2FXLluR3xiSXY%2B1qDsZXIa3ny4U0pJ9dOcwiiqdoH5maYjvNIlkE0%2FuLW76Pc249WuLHOwgN0Uxisznu8Aur88L%2FSv8ke&X-Amz-Signature=c00453c978812c079702ad53e36d9900ab173eb6e7512e58fcc288a6e2f8d766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4G5ML3A%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCuAWPXEZmU9aEgDfhvFrMSqeNb8rwEvavaeuf5NmIN1wIgIgd98%2BYuO%2FcnlncW9ejDjUp827cVp8DXTk3SKHWZCI8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQznd5abBBb9eC5ZSrcAxpPfhW6DCuwZKhWiU%2BYtPAZSp1EIWPVrLy3PSZKAHl7mLIf5tiugekCx4ZbvK70SvDIMoWvZqvO7rBBMUvjJDt18blKHwrHSn%2BG2jChtwORXM%2F0dnl1BlqFWOuZQZ%2FMtvllOEFEX4Rkr%2FEaM2YMCQcPcbKGcGNkyivZDcs01b9Be9uChR1qtllOJpVn4nhsMDULEgjoAFfLdmMb1An%2BDCJ%2BbDpguiKtmdZdiJ2eCmZhhId4X10Q9wM%2B78k0A26%2FM%2Fb9Hn3A8YbghPpWmLcAlLpuWn1mcys1B8Yft58aOJgY86NXe0cT3qIuCj6WuHbbd%2BxQmUiuPHEzRt3LIxqAJ4v6JnoBG9Pa1ouDL61HcTbTHpmPvJXOxslAwGvrocJq4VXHYARo0fbQ7GA%2F8TXfBArq9y57JVmdZKeSGBWC3S1HGlKdpbtBgBsX9HjMPMXD%2Fpg5ulqZoxRFgDFyT%2BJAb7VoDPp7ih0lzH%2B6rZl%2FrWwBJnmh7Xl0NKFDoXnjXyOmN19b74XN%2BXMrWkhVAjE1ZwCmjjOx1%2FzCbvOBuH4Pq%2FWh9A4HXCBjUnSKkgkNXMAfR%2FJ6XCvNQVqVCt29ArTo%2F1J%2F6tWcrq%2BNTFpRWX0r20TUQb2Wimay0UizgB5QMKPH4cIGOqUBWJBmcNb7OU1zNHUdsE31Ro6GZebhTn2RjD%2Fl0OckUTgGfSkK5A2iDbeypVVuEdK7CJ58dNtxwDKbH22WulWO69S3iX4tPH4FV%2FTgGrVfrTQ4ZPLZl8bcZi6uwfSqG%2BIo%2FXLluR3xiSXY%2B1qDsZXIa3ny4U0pJ9dOcwiiqdoH5maYjvNIlkE0%2FuLW76Pc249WuLHOwgN0Uxisznu8Aur88L%2FSv8ke&X-Amz-Signature=865681e7d49eb24c031693a76f6e7bc72f012d21e7b85f5403614b3f3fc7fb72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4G5ML3A%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCuAWPXEZmU9aEgDfhvFrMSqeNb8rwEvavaeuf5NmIN1wIgIgd98%2BYuO%2FcnlncW9ejDjUp827cVp8DXTk3SKHWZCI8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQznd5abBBb9eC5ZSrcAxpPfhW6DCuwZKhWiU%2BYtPAZSp1EIWPVrLy3PSZKAHl7mLIf5tiugekCx4ZbvK70SvDIMoWvZqvO7rBBMUvjJDt18blKHwrHSn%2BG2jChtwORXM%2F0dnl1BlqFWOuZQZ%2FMtvllOEFEX4Rkr%2FEaM2YMCQcPcbKGcGNkyivZDcs01b9Be9uChR1qtllOJpVn4nhsMDULEgjoAFfLdmMb1An%2BDCJ%2BbDpguiKtmdZdiJ2eCmZhhId4X10Q9wM%2B78k0A26%2FM%2Fb9Hn3A8YbghPpWmLcAlLpuWn1mcys1B8Yft58aOJgY86NXe0cT3qIuCj6WuHbbd%2BxQmUiuPHEzRt3LIxqAJ4v6JnoBG9Pa1ouDL61HcTbTHpmPvJXOxslAwGvrocJq4VXHYARo0fbQ7GA%2F8TXfBArq9y57JVmdZKeSGBWC3S1HGlKdpbtBgBsX9HjMPMXD%2Fpg5ulqZoxRFgDFyT%2BJAb7VoDPp7ih0lzH%2B6rZl%2FrWwBJnmh7Xl0NKFDoXnjXyOmN19b74XN%2BXMrWkhVAjE1ZwCmjjOx1%2FzCbvOBuH4Pq%2FWh9A4HXCBjUnSKkgkNXMAfR%2FJ6XCvNQVqVCt29ArTo%2F1J%2F6tWcrq%2BNTFpRWX0r20TUQb2Wimay0UizgB5QMKPH4cIGOqUBWJBmcNb7OU1zNHUdsE31Ro6GZebhTn2RjD%2Fl0OckUTgGfSkK5A2iDbeypVVuEdK7CJ58dNtxwDKbH22WulWO69S3iX4tPH4FV%2FTgGrVfrTQ4ZPLZl8bcZi6uwfSqG%2BIo%2FXLluR3xiSXY%2B1qDsZXIa3ny4U0pJ9dOcwiiqdoH5maYjvNIlkE0%2FuLW76Pc249WuLHOwgN0Uxisznu8Aur88L%2FSv8ke&X-Amz-Signature=5c6f03d97d09c0ec560a3ee5c72684aab692ece3fd3117f02bdec9dcdcea7975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4G5ML3A%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCuAWPXEZmU9aEgDfhvFrMSqeNb8rwEvavaeuf5NmIN1wIgIgd98%2BYuO%2FcnlncW9ejDjUp827cVp8DXTk3SKHWZCI8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQznd5abBBb9eC5ZSrcAxpPfhW6DCuwZKhWiU%2BYtPAZSp1EIWPVrLy3PSZKAHl7mLIf5tiugekCx4ZbvK70SvDIMoWvZqvO7rBBMUvjJDt18blKHwrHSn%2BG2jChtwORXM%2F0dnl1BlqFWOuZQZ%2FMtvllOEFEX4Rkr%2FEaM2YMCQcPcbKGcGNkyivZDcs01b9Be9uChR1qtllOJpVn4nhsMDULEgjoAFfLdmMb1An%2BDCJ%2BbDpguiKtmdZdiJ2eCmZhhId4X10Q9wM%2B78k0A26%2FM%2Fb9Hn3A8YbghPpWmLcAlLpuWn1mcys1B8Yft58aOJgY86NXe0cT3qIuCj6WuHbbd%2BxQmUiuPHEzRt3LIxqAJ4v6JnoBG9Pa1ouDL61HcTbTHpmPvJXOxslAwGvrocJq4VXHYARo0fbQ7GA%2F8TXfBArq9y57JVmdZKeSGBWC3S1HGlKdpbtBgBsX9HjMPMXD%2Fpg5ulqZoxRFgDFyT%2BJAb7VoDPp7ih0lzH%2B6rZl%2FrWwBJnmh7Xl0NKFDoXnjXyOmN19b74XN%2BXMrWkhVAjE1ZwCmjjOx1%2FzCbvOBuH4Pq%2FWh9A4HXCBjUnSKkgkNXMAfR%2FJ6XCvNQVqVCt29ArTo%2F1J%2F6tWcrq%2BNTFpRWX0r20TUQb2Wimay0UizgB5QMKPH4cIGOqUBWJBmcNb7OU1zNHUdsE31Ro6GZebhTn2RjD%2Fl0OckUTgGfSkK5A2iDbeypVVuEdK7CJ58dNtxwDKbH22WulWO69S3iX4tPH4FV%2FTgGrVfrTQ4ZPLZl8bcZi6uwfSqG%2BIo%2FXLluR3xiSXY%2B1qDsZXIa3ny4U0pJ9dOcwiiqdoH5maYjvNIlkE0%2FuLW76Pc249WuLHOwgN0Uxisznu8Aur88L%2FSv8ke&X-Amz-Signature=f3d3dfcb47603df9942f1947fe1fbfec73f186b14be094e27e20599bf0aa919c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
