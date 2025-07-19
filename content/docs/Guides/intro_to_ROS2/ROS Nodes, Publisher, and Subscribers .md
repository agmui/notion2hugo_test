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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4ILIVB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsp3uRZSy%2BPB6CntRMTM5gVmj4d10p1n1tYYo48%2F43AIhAIBDqut5Vkk0HJt9emtu%2B7kcjXleYrZfSN9rutQ7W9%2BYKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaUlMXuKe1zsdSBHoq3AMV65N%2FvbLluC%2F%2FIQ7FvJItHkzY6Qhxp1gcAtNZ8x1fMC2AymjXEz9DuM2zJkJT7fP7cF3jwKvgxaECLTFOoGZMKnNEZoOVSYv7pJPk7zLsY2FsrBhGuWFkxrSuWXYBtQanbjpyqHNb0ZPRP7HXmAvGs%2FtsBWUgUmY71nPblKCqQcoWOzESdIn3YpHHRzS58G9AEObKlPWbCDODjBB9UqhWnOlqwqMoiof8J0njFs1CIlhirYJbwBK%2BNuU8sAq0tryfWGu9MLkWg2qh5YPZ1b4eYTok%2BNC5tpv%2BztSgwEuCG3eHE1GVb79%2BXw7p85aoP5INkf7UdsNHJM90mLTtBnoo5UVDeEs4HlHv71zFJoJpkZ%2BKS1RkT9zbmFVkD6U%2B6rRPr3hAvBkTmGr4o0ZT%2BT7sEmLSd4nKxq24bt%2BYDmMh5TaMzl8BbEYM2U3qlWIQ9AuHgQbidYbuHXiahVa%2BM6GPdEQE69NI%2B7eSIWWk40WHyhJlfQCcZBKNQCRDaQaIDxkItl92O4Mf0JqukbZFdhSRV3h4K66Om%2FrvdIP7cq7yuY%2FqI7Qqy%2FP8iG%2BY4lpzBWIYekodseMfLe3%2B1QfFqwSGAyYMhtNbbWBRXHGhoJQc8fy0LZwKLZf9rcE63jDZ4%2B3DBjqkAXFkKEjxTWZ45lBNUdkUxGghpDx5wJ%2FH4SqoyOHvBR3sB2nygXP0ZZXmFo6N%2F4EZ%2BMmMOBIaq6H4HPrBb3P685Ccqcj7q4wDjRXDFnQcnamWAH%2BSJdSQHPZUstQ6GKSDKDknjf%2FPiDofHp0SFgkVSKYOGJlSSdzJPnEUJRwm7vlksxIIqaJ0dtCzYlm2r04JnmtQspVRKAD9XRp9nlb97j6a%2BzXI&X-Amz-Signature=459452a68ab68bf7ef196c5aaac2803ca148fc0854a7969fc190efbd752274e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4ILIVB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsp3uRZSy%2BPB6CntRMTM5gVmj4d10p1n1tYYo48%2F43AIhAIBDqut5Vkk0HJt9emtu%2B7kcjXleYrZfSN9rutQ7W9%2BYKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaUlMXuKe1zsdSBHoq3AMV65N%2FvbLluC%2F%2FIQ7FvJItHkzY6Qhxp1gcAtNZ8x1fMC2AymjXEz9DuM2zJkJT7fP7cF3jwKvgxaECLTFOoGZMKnNEZoOVSYv7pJPk7zLsY2FsrBhGuWFkxrSuWXYBtQanbjpyqHNb0ZPRP7HXmAvGs%2FtsBWUgUmY71nPblKCqQcoWOzESdIn3YpHHRzS58G9AEObKlPWbCDODjBB9UqhWnOlqwqMoiof8J0njFs1CIlhirYJbwBK%2BNuU8sAq0tryfWGu9MLkWg2qh5YPZ1b4eYTok%2BNC5tpv%2BztSgwEuCG3eHE1GVb79%2BXw7p85aoP5INkf7UdsNHJM90mLTtBnoo5UVDeEs4HlHv71zFJoJpkZ%2BKS1RkT9zbmFVkD6U%2B6rRPr3hAvBkTmGr4o0ZT%2BT7sEmLSd4nKxq24bt%2BYDmMh5TaMzl8BbEYM2U3qlWIQ9AuHgQbidYbuHXiahVa%2BM6GPdEQE69NI%2B7eSIWWk40WHyhJlfQCcZBKNQCRDaQaIDxkItl92O4Mf0JqukbZFdhSRV3h4K66Om%2FrvdIP7cq7yuY%2FqI7Qqy%2FP8iG%2BY4lpzBWIYekodseMfLe3%2B1QfFqwSGAyYMhtNbbWBRXHGhoJQc8fy0LZwKLZf9rcE63jDZ4%2B3DBjqkAXFkKEjxTWZ45lBNUdkUxGghpDx5wJ%2FH4SqoyOHvBR3sB2nygXP0ZZXmFo6N%2F4EZ%2BMmMOBIaq6H4HPrBb3P685Ccqcj7q4wDjRXDFnQcnamWAH%2BSJdSQHPZUstQ6GKSDKDknjf%2FPiDofHp0SFgkVSKYOGJlSSdzJPnEUJRwm7vlksxIIqaJ0dtCzYlm2r04JnmtQspVRKAD9XRp9nlb97j6a%2BzXI&X-Amz-Signature=f0e7c428d09837cc3726ac84e21f3738eb8d6f22a666de7af9fbf65fdcdad223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4ILIVB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsp3uRZSy%2BPB6CntRMTM5gVmj4d10p1n1tYYo48%2F43AIhAIBDqut5Vkk0HJt9emtu%2B7kcjXleYrZfSN9rutQ7W9%2BYKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaUlMXuKe1zsdSBHoq3AMV65N%2FvbLluC%2F%2FIQ7FvJItHkzY6Qhxp1gcAtNZ8x1fMC2AymjXEz9DuM2zJkJT7fP7cF3jwKvgxaECLTFOoGZMKnNEZoOVSYv7pJPk7zLsY2FsrBhGuWFkxrSuWXYBtQanbjpyqHNb0ZPRP7HXmAvGs%2FtsBWUgUmY71nPblKCqQcoWOzESdIn3YpHHRzS58G9AEObKlPWbCDODjBB9UqhWnOlqwqMoiof8J0njFs1CIlhirYJbwBK%2BNuU8sAq0tryfWGu9MLkWg2qh5YPZ1b4eYTok%2BNC5tpv%2BztSgwEuCG3eHE1GVb79%2BXw7p85aoP5INkf7UdsNHJM90mLTtBnoo5UVDeEs4HlHv71zFJoJpkZ%2BKS1RkT9zbmFVkD6U%2B6rRPr3hAvBkTmGr4o0ZT%2BT7sEmLSd4nKxq24bt%2BYDmMh5TaMzl8BbEYM2U3qlWIQ9AuHgQbidYbuHXiahVa%2BM6GPdEQE69NI%2B7eSIWWk40WHyhJlfQCcZBKNQCRDaQaIDxkItl92O4Mf0JqukbZFdhSRV3h4K66Om%2FrvdIP7cq7yuY%2FqI7Qqy%2FP8iG%2BY4lpzBWIYekodseMfLe3%2B1QfFqwSGAyYMhtNbbWBRXHGhoJQc8fy0LZwKLZf9rcE63jDZ4%2B3DBjqkAXFkKEjxTWZ45lBNUdkUxGghpDx5wJ%2FH4SqoyOHvBR3sB2nygXP0ZZXmFo6N%2F4EZ%2BMmMOBIaq6H4HPrBb3P685Ccqcj7q4wDjRXDFnQcnamWAH%2BSJdSQHPZUstQ6GKSDKDknjf%2FPiDofHp0SFgkVSKYOGJlSSdzJPnEUJRwm7vlksxIIqaJ0dtCzYlm2r04JnmtQspVRKAD9XRp9nlb97j6a%2BzXI&X-Amz-Signature=8985cf84bd8566faeeb3edfaf0e0afb66125c8fd073683eb2b881307562e3f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4ILIVB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsp3uRZSy%2BPB6CntRMTM5gVmj4d10p1n1tYYo48%2F43AIhAIBDqut5Vkk0HJt9emtu%2B7kcjXleYrZfSN9rutQ7W9%2BYKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaUlMXuKe1zsdSBHoq3AMV65N%2FvbLluC%2F%2FIQ7FvJItHkzY6Qhxp1gcAtNZ8x1fMC2AymjXEz9DuM2zJkJT7fP7cF3jwKvgxaECLTFOoGZMKnNEZoOVSYv7pJPk7zLsY2FsrBhGuWFkxrSuWXYBtQanbjpyqHNb0ZPRP7HXmAvGs%2FtsBWUgUmY71nPblKCqQcoWOzESdIn3YpHHRzS58G9AEObKlPWbCDODjBB9UqhWnOlqwqMoiof8J0njFs1CIlhirYJbwBK%2BNuU8sAq0tryfWGu9MLkWg2qh5YPZ1b4eYTok%2BNC5tpv%2BztSgwEuCG3eHE1GVb79%2BXw7p85aoP5INkf7UdsNHJM90mLTtBnoo5UVDeEs4HlHv71zFJoJpkZ%2BKS1RkT9zbmFVkD6U%2B6rRPr3hAvBkTmGr4o0ZT%2BT7sEmLSd4nKxq24bt%2BYDmMh5TaMzl8BbEYM2U3qlWIQ9AuHgQbidYbuHXiahVa%2BM6GPdEQE69NI%2B7eSIWWk40WHyhJlfQCcZBKNQCRDaQaIDxkItl92O4Mf0JqukbZFdhSRV3h4K66Om%2FrvdIP7cq7yuY%2FqI7Qqy%2FP8iG%2BY4lpzBWIYekodseMfLe3%2B1QfFqwSGAyYMhtNbbWBRXHGhoJQc8fy0LZwKLZf9rcE63jDZ4%2B3DBjqkAXFkKEjxTWZ45lBNUdkUxGghpDx5wJ%2FH4SqoyOHvBR3sB2nygXP0ZZXmFo6N%2F4EZ%2BMmMOBIaq6H4HPrBb3P685Ccqcj7q4wDjRXDFnQcnamWAH%2BSJdSQHPZUstQ6GKSDKDknjf%2FPiDofHp0SFgkVSKYOGJlSSdzJPnEUJRwm7vlksxIIqaJ0dtCzYlm2r04JnmtQspVRKAD9XRp9nlb97j6a%2BzXI&X-Amz-Signature=88e1f40a48256dad22b04fd297dca62b959b439ff245c140001c619d62344cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4ILIVB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsp3uRZSy%2BPB6CntRMTM5gVmj4d10p1n1tYYo48%2F43AIhAIBDqut5Vkk0HJt9emtu%2B7kcjXleYrZfSN9rutQ7W9%2BYKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaUlMXuKe1zsdSBHoq3AMV65N%2FvbLluC%2F%2FIQ7FvJItHkzY6Qhxp1gcAtNZ8x1fMC2AymjXEz9DuM2zJkJT7fP7cF3jwKvgxaECLTFOoGZMKnNEZoOVSYv7pJPk7zLsY2FsrBhGuWFkxrSuWXYBtQanbjpyqHNb0ZPRP7HXmAvGs%2FtsBWUgUmY71nPblKCqQcoWOzESdIn3YpHHRzS58G9AEObKlPWbCDODjBB9UqhWnOlqwqMoiof8J0njFs1CIlhirYJbwBK%2BNuU8sAq0tryfWGu9MLkWg2qh5YPZ1b4eYTok%2BNC5tpv%2BztSgwEuCG3eHE1GVb79%2BXw7p85aoP5INkf7UdsNHJM90mLTtBnoo5UVDeEs4HlHv71zFJoJpkZ%2BKS1RkT9zbmFVkD6U%2B6rRPr3hAvBkTmGr4o0ZT%2BT7sEmLSd4nKxq24bt%2BYDmMh5TaMzl8BbEYM2U3qlWIQ9AuHgQbidYbuHXiahVa%2BM6GPdEQE69NI%2B7eSIWWk40WHyhJlfQCcZBKNQCRDaQaIDxkItl92O4Mf0JqukbZFdhSRV3h4K66Om%2FrvdIP7cq7yuY%2FqI7Qqy%2FP8iG%2BY4lpzBWIYekodseMfLe3%2B1QfFqwSGAyYMhtNbbWBRXHGhoJQc8fy0LZwKLZf9rcE63jDZ4%2B3DBjqkAXFkKEjxTWZ45lBNUdkUxGghpDx5wJ%2FH4SqoyOHvBR3sB2nygXP0ZZXmFo6N%2F4EZ%2BMmMOBIaq6H4HPrBb3P685Ccqcj7q4wDjRXDFnQcnamWAH%2BSJdSQHPZUstQ6GKSDKDknjf%2FPiDofHp0SFgkVSKYOGJlSSdzJPnEUJRwm7vlksxIIqaJ0dtCzYlm2r04JnmtQspVRKAD9XRp9nlb97j6a%2BzXI&X-Amz-Signature=a9b74bbe1845bd5f030f3dbe182f5b0ea22b6b34a3bb9c800dbfe614c5020739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4ILIVB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsp3uRZSy%2BPB6CntRMTM5gVmj4d10p1n1tYYo48%2F43AIhAIBDqut5Vkk0HJt9emtu%2B7kcjXleYrZfSN9rutQ7W9%2BYKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaUlMXuKe1zsdSBHoq3AMV65N%2FvbLluC%2F%2FIQ7FvJItHkzY6Qhxp1gcAtNZ8x1fMC2AymjXEz9DuM2zJkJT7fP7cF3jwKvgxaECLTFOoGZMKnNEZoOVSYv7pJPk7zLsY2FsrBhGuWFkxrSuWXYBtQanbjpyqHNb0ZPRP7HXmAvGs%2FtsBWUgUmY71nPblKCqQcoWOzESdIn3YpHHRzS58G9AEObKlPWbCDODjBB9UqhWnOlqwqMoiof8J0njFs1CIlhirYJbwBK%2BNuU8sAq0tryfWGu9MLkWg2qh5YPZ1b4eYTok%2BNC5tpv%2BztSgwEuCG3eHE1GVb79%2BXw7p85aoP5INkf7UdsNHJM90mLTtBnoo5UVDeEs4HlHv71zFJoJpkZ%2BKS1RkT9zbmFVkD6U%2B6rRPr3hAvBkTmGr4o0ZT%2BT7sEmLSd4nKxq24bt%2BYDmMh5TaMzl8BbEYM2U3qlWIQ9AuHgQbidYbuHXiahVa%2BM6GPdEQE69NI%2B7eSIWWk40WHyhJlfQCcZBKNQCRDaQaIDxkItl92O4Mf0JqukbZFdhSRV3h4K66Om%2FrvdIP7cq7yuY%2FqI7Qqy%2FP8iG%2BY4lpzBWIYekodseMfLe3%2B1QfFqwSGAyYMhtNbbWBRXHGhoJQc8fy0LZwKLZf9rcE63jDZ4%2B3DBjqkAXFkKEjxTWZ45lBNUdkUxGghpDx5wJ%2FH4SqoyOHvBR3sB2nygXP0ZZXmFo6N%2F4EZ%2BMmMOBIaq6H4HPrBb3P685Ccqcj7q4wDjRXDFnQcnamWAH%2BSJdSQHPZUstQ6GKSDKDknjf%2FPiDofHp0SFgkVSKYOGJlSSdzJPnEUJRwm7vlksxIIqaJ0dtCzYlm2r04JnmtQspVRKAD9XRp9nlb97j6a%2BzXI&X-Amz-Signature=ec8a2d4c57a5b54a2a67cba9a2376eb7446ad042ccf2c3cc944c537cec8d97d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4ILIVB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsp3uRZSy%2BPB6CntRMTM5gVmj4d10p1n1tYYo48%2F43AIhAIBDqut5Vkk0HJt9emtu%2B7kcjXleYrZfSN9rutQ7W9%2BYKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaUlMXuKe1zsdSBHoq3AMV65N%2FvbLluC%2F%2FIQ7FvJItHkzY6Qhxp1gcAtNZ8x1fMC2AymjXEz9DuM2zJkJT7fP7cF3jwKvgxaECLTFOoGZMKnNEZoOVSYv7pJPk7zLsY2FsrBhGuWFkxrSuWXYBtQanbjpyqHNb0ZPRP7HXmAvGs%2FtsBWUgUmY71nPblKCqQcoWOzESdIn3YpHHRzS58G9AEObKlPWbCDODjBB9UqhWnOlqwqMoiof8J0njFs1CIlhirYJbwBK%2BNuU8sAq0tryfWGu9MLkWg2qh5YPZ1b4eYTok%2BNC5tpv%2BztSgwEuCG3eHE1GVb79%2BXw7p85aoP5INkf7UdsNHJM90mLTtBnoo5UVDeEs4HlHv71zFJoJpkZ%2BKS1RkT9zbmFVkD6U%2B6rRPr3hAvBkTmGr4o0ZT%2BT7sEmLSd4nKxq24bt%2BYDmMh5TaMzl8BbEYM2U3qlWIQ9AuHgQbidYbuHXiahVa%2BM6GPdEQE69NI%2B7eSIWWk40WHyhJlfQCcZBKNQCRDaQaIDxkItl92O4Mf0JqukbZFdhSRV3h4K66Om%2FrvdIP7cq7yuY%2FqI7Qqy%2FP8iG%2BY4lpzBWIYekodseMfLe3%2B1QfFqwSGAyYMhtNbbWBRXHGhoJQc8fy0LZwKLZf9rcE63jDZ4%2B3DBjqkAXFkKEjxTWZ45lBNUdkUxGghpDx5wJ%2FH4SqoyOHvBR3sB2nygXP0ZZXmFo6N%2F4EZ%2BMmMOBIaq6H4HPrBb3P685Ccqcj7q4wDjRXDFnQcnamWAH%2BSJdSQHPZUstQ6GKSDKDknjf%2FPiDofHp0SFgkVSKYOGJlSSdzJPnEUJRwm7vlksxIIqaJ0dtCzYlm2r04JnmtQspVRKAD9XRp9nlb97j6a%2BzXI&X-Amz-Signature=0b7308a03c89257e4c0e6a36b985914274bedbd40b8d604b991ea09d99eb49cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4ILIVB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsp3uRZSy%2BPB6CntRMTM5gVmj4d10p1n1tYYo48%2F43AIhAIBDqut5Vkk0HJt9emtu%2B7kcjXleYrZfSN9rutQ7W9%2BYKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaUlMXuKe1zsdSBHoq3AMV65N%2FvbLluC%2F%2FIQ7FvJItHkzY6Qhxp1gcAtNZ8x1fMC2AymjXEz9DuM2zJkJT7fP7cF3jwKvgxaECLTFOoGZMKnNEZoOVSYv7pJPk7zLsY2FsrBhGuWFkxrSuWXYBtQanbjpyqHNb0ZPRP7HXmAvGs%2FtsBWUgUmY71nPblKCqQcoWOzESdIn3YpHHRzS58G9AEObKlPWbCDODjBB9UqhWnOlqwqMoiof8J0njFs1CIlhirYJbwBK%2BNuU8sAq0tryfWGu9MLkWg2qh5YPZ1b4eYTok%2BNC5tpv%2BztSgwEuCG3eHE1GVb79%2BXw7p85aoP5INkf7UdsNHJM90mLTtBnoo5UVDeEs4HlHv71zFJoJpkZ%2BKS1RkT9zbmFVkD6U%2B6rRPr3hAvBkTmGr4o0ZT%2BT7sEmLSd4nKxq24bt%2BYDmMh5TaMzl8BbEYM2U3qlWIQ9AuHgQbidYbuHXiahVa%2BM6GPdEQE69NI%2B7eSIWWk40WHyhJlfQCcZBKNQCRDaQaIDxkItl92O4Mf0JqukbZFdhSRV3h4K66Om%2FrvdIP7cq7yuY%2FqI7Qqy%2FP8iG%2BY4lpzBWIYekodseMfLe3%2B1QfFqwSGAyYMhtNbbWBRXHGhoJQc8fy0LZwKLZf9rcE63jDZ4%2B3DBjqkAXFkKEjxTWZ45lBNUdkUxGghpDx5wJ%2FH4SqoyOHvBR3sB2nygXP0ZZXmFo6N%2F4EZ%2BMmMOBIaq6H4HPrBb3P685Ccqcj7q4wDjRXDFnQcnamWAH%2BSJdSQHPZUstQ6GKSDKDknjf%2FPiDofHp0SFgkVSKYOGJlSSdzJPnEUJRwm7vlksxIIqaJ0dtCzYlm2r04JnmtQspVRKAD9XRp9nlb97j6a%2BzXI&X-Amz-Signature=50b612bb0ea8322b73462f8e09a3613384a100d9a18bc36fae9501003834d7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
