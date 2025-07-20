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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YG7YM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApSUrtbQMMol1gC8HeIYWxGPepFUeiR2Xj4izqPrVApAiEAxZIf4qn%2BS9boXvVc2gQR3EPxpbAw47sgzDi9QwJKQ5gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHD2ekbh9zhQeElyrcAw5crPId2o2trGT4%2FdJObMj%2FqN2ALdyQp1I%2By3N0nnlM3p3WfW%2Fg7xDZB4J81%2FXkOeoiZiAO69xWQLzdzICEso9V4GS13kYp9p8Wif6MTxehivjaYkVYb%2BZ2nTtBYZALTMYB8Rob9wib5oebnSJKaDVVIpvzyYjKcjdepG3vzoqre1XDAAymYQsbGdUQwQ6aN5cqOe8k5z%2FBieVn3AovGNzhK1vs0QGZwp2egnKlqv543yjniWICHfDEctwJNVMAW6JkoLQ0siUHZPTd8sIqy%2BWeQLBbQRHE%2FF2FO%2BpqtV15b3F16%2BsTfslk0dabygF%2FemtFTYheBjqSn7ey7uChX%2BJWXppzMhUKrFEqGicTpj6PJDqwr0Edcl2QHf4oDrBthaRot5rdEcEcRK5zm4mzbQDyFyrCw%2BLfnboKQwlfi%2Fl%2FF0oOMvdSu0SJLGqxIDeoS6J8GBOCuOMeR42m00xAFWRVSj4x4jjSuio%2B9boSrFIlxso%2FsxZ7d6FBHp6YYke8IagEKVEEJqJWt9TmK48x2ieSmhf09SKYE9G44O4F9gnI57EkRfgBe3YGld3ZBHKNclwmE8Cjs8DUTZMUS3dIsxBwwM6RK%2BDbHKyamwR593y8gMBxG6%2FeAXOgJ4xvMJLd88MGOqUBBb5b2MgudSWlrGGAi%2FNh3oWpM4nydvn9yFDlzb0tVBU0z8zQKJ7eDlG30uFjEiaVGA0U3EWoUsuF%2FwYyK3Z%2B3NUE%2F0Shjczk58I82kUGNABavDKh0BbEmSd6Cl6pX2A%2FFhL8IUWtBZI2d1pvaczGsfSne%2FiA5mAZwcPuqRAhW8u2LIznLtQKsKRRqF6lW2%2FvFeo3zQUYf2YH7jvsQiQWEpG%2FRASD&X-Amz-Signature=c5d62e97effe8bb52615dfabbcbcfedd308ebd06530195773d19d0758028c44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YG7YM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApSUrtbQMMol1gC8HeIYWxGPepFUeiR2Xj4izqPrVApAiEAxZIf4qn%2BS9boXvVc2gQR3EPxpbAw47sgzDi9QwJKQ5gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHD2ekbh9zhQeElyrcAw5crPId2o2trGT4%2FdJObMj%2FqN2ALdyQp1I%2By3N0nnlM3p3WfW%2Fg7xDZB4J81%2FXkOeoiZiAO69xWQLzdzICEso9V4GS13kYp9p8Wif6MTxehivjaYkVYb%2BZ2nTtBYZALTMYB8Rob9wib5oebnSJKaDVVIpvzyYjKcjdepG3vzoqre1XDAAymYQsbGdUQwQ6aN5cqOe8k5z%2FBieVn3AovGNzhK1vs0QGZwp2egnKlqv543yjniWICHfDEctwJNVMAW6JkoLQ0siUHZPTd8sIqy%2BWeQLBbQRHE%2FF2FO%2BpqtV15b3F16%2BsTfslk0dabygF%2FemtFTYheBjqSn7ey7uChX%2BJWXppzMhUKrFEqGicTpj6PJDqwr0Edcl2QHf4oDrBthaRot5rdEcEcRK5zm4mzbQDyFyrCw%2BLfnboKQwlfi%2Fl%2FF0oOMvdSu0SJLGqxIDeoS6J8GBOCuOMeR42m00xAFWRVSj4x4jjSuio%2B9boSrFIlxso%2FsxZ7d6FBHp6YYke8IagEKVEEJqJWt9TmK48x2ieSmhf09SKYE9G44O4F9gnI57EkRfgBe3YGld3ZBHKNclwmE8Cjs8DUTZMUS3dIsxBwwM6RK%2BDbHKyamwR593y8gMBxG6%2FeAXOgJ4xvMJLd88MGOqUBBb5b2MgudSWlrGGAi%2FNh3oWpM4nydvn9yFDlzb0tVBU0z8zQKJ7eDlG30uFjEiaVGA0U3EWoUsuF%2FwYyK3Z%2B3NUE%2F0Shjczk58I82kUGNABavDKh0BbEmSd6Cl6pX2A%2FFhL8IUWtBZI2d1pvaczGsfSne%2FiA5mAZwcPuqRAhW8u2LIznLtQKsKRRqF6lW2%2FvFeo3zQUYf2YH7jvsQiQWEpG%2FRASD&X-Amz-Signature=89f795cfc5ae45a3f24acc8a33cef00cb4d23fdb372cc6ef4b440671d470593c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YG7YM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApSUrtbQMMol1gC8HeIYWxGPepFUeiR2Xj4izqPrVApAiEAxZIf4qn%2BS9boXvVc2gQR3EPxpbAw47sgzDi9QwJKQ5gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHD2ekbh9zhQeElyrcAw5crPId2o2trGT4%2FdJObMj%2FqN2ALdyQp1I%2By3N0nnlM3p3WfW%2Fg7xDZB4J81%2FXkOeoiZiAO69xWQLzdzICEso9V4GS13kYp9p8Wif6MTxehivjaYkVYb%2BZ2nTtBYZALTMYB8Rob9wib5oebnSJKaDVVIpvzyYjKcjdepG3vzoqre1XDAAymYQsbGdUQwQ6aN5cqOe8k5z%2FBieVn3AovGNzhK1vs0QGZwp2egnKlqv543yjniWICHfDEctwJNVMAW6JkoLQ0siUHZPTd8sIqy%2BWeQLBbQRHE%2FF2FO%2BpqtV15b3F16%2BsTfslk0dabygF%2FemtFTYheBjqSn7ey7uChX%2BJWXppzMhUKrFEqGicTpj6PJDqwr0Edcl2QHf4oDrBthaRot5rdEcEcRK5zm4mzbQDyFyrCw%2BLfnboKQwlfi%2Fl%2FF0oOMvdSu0SJLGqxIDeoS6J8GBOCuOMeR42m00xAFWRVSj4x4jjSuio%2B9boSrFIlxso%2FsxZ7d6FBHp6YYke8IagEKVEEJqJWt9TmK48x2ieSmhf09SKYE9G44O4F9gnI57EkRfgBe3YGld3ZBHKNclwmE8Cjs8DUTZMUS3dIsxBwwM6RK%2BDbHKyamwR593y8gMBxG6%2FeAXOgJ4xvMJLd88MGOqUBBb5b2MgudSWlrGGAi%2FNh3oWpM4nydvn9yFDlzb0tVBU0z8zQKJ7eDlG30uFjEiaVGA0U3EWoUsuF%2FwYyK3Z%2B3NUE%2F0Shjczk58I82kUGNABavDKh0BbEmSd6Cl6pX2A%2FFhL8IUWtBZI2d1pvaczGsfSne%2FiA5mAZwcPuqRAhW8u2LIznLtQKsKRRqF6lW2%2FvFeo3zQUYf2YH7jvsQiQWEpG%2FRASD&X-Amz-Signature=0a56fb10e007ef64a88f33d97a159c5bfc59abb4c3fd848e9ea24691a87cd1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YG7YM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApSUrtbQMMol1gC8HeIYWxGPepFUeiR2Xj4izqPrVApAiEAxZIf4qn%2BS9boXvVc2gQR3EPxpbAw47sgzDi9QwJKQ5gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHD2ekbh9zhQeElyrcAw5crPId2o2trGT4%2FdJObMj%2FqN2ALdyQp1I%2By3N0nnlM3p3WfW%2Fg7xDZB4J81%2FXkOeoiZiAO69xWQLzdzICEso9V4GS13kYp9p8Wif6MTxehivjaYkVYb%2BZ2nTtBYZALTMYB8Rob9wib5oebnSJKaDVVIpvzyYjKcjdepG3vzoqre1XDAAymYQsbGdUQwQ6aN5cqOe8k5z%2FBieVn3AovGNzhK1vs0QGZwp2egnKlqv543yjniWICHfDEctwJNVMAW6JkoLQ0siUHZPTd8sIqy%2BWeQLBbQRHE%2FF2FO%2BpqtV15b3F16%2BsTfslk0dabygF%2FemtFTYheBjqSn7ey7uChX%2BJWXppzMhUKrFEqGicTpj6PJDqwr0Edcl2QHf4oDrBthaRot5rdEcEcRK5zm4mzbQDyFyrCw%2BLfnboKQwlfi%2Fl%2FF0oOMvdSu0SJLGqxIDeoS6J8GBOCuOMeR42m00xAFWRVSj4x4jjSuio%2B9boSrFIlxso%2FsxZ7d6FBHp6YYke8IagEKVEEJqJWt9TmK48x2ieSmhf09SKYE9G44O4F9gnI57EkRfgBe3YGld3ZBHKNclwmE8Cjs8DUTZMUS3dIsxBwwM6RK%2BDbHKyamwR593y8gMBxG6%2FeAXOgJ4xvMJLd88MGOqUBBb5b2MgudSWlrGGAi%2FNh3oWpM4nydvn9yFDlzb0tVBU0z8zQKJ7eDlG30uFjEiaVGA0U3EWoUsuF%2FwYyK3Z%2B3NUE%2F0Shjczk58I82kUGNABavDKh0BbEmSd6Cl6pX2A%2FFhL8IUWtBZI2d1pvaczGsfSne%2FiA5mAZwcPuqRAhW8u2LIznLtQKsKRRqF6lW2%2FvFeo3zQUYf2YH7jvsQiQWEpG%2FRASD&X-Amz-Signature=1ef9267d87adc814aae827dd9ac36a08b37bd81b6be5a7cbb7dd50cb92688a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YG7YM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApSUrtbQMMol1gC8HeIYWxGPepFUeiR2Xj4izqPrVApAiEAxZIf4qn%2BS9boXvVc2gQR3EPxpbAw47sgzDi9QwJKQ5gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHD2ekbh9zhQeElyrcAw5crPId2o2trGT4%2FdJObMj%2FqN2ALdyQp1I%2By3N0nnlM3p3WfW%2Fg7xDZB4J81%2FXkOeoiZiAO69xWQLzdzICEso9V4GS13kYp9p8Wif6MTxehivjaYkVYb%2BZ2nTtBYZALTMYB8Rob9wib5oebnSJKaDVVIpvzyYjKcjdepG3vzoqre1XDAAymYQsbGdUQwQ6aN5cqOe8k5z%2FBieVn3AovGNzhK1vs0QGZwp2egnKlqv543yjniWICHfDEctwJNVMAW6JkoLQ0siUHZPTd8sIqy%2BWeQLBbQRHE%2FF2FO%2BpqtV15b3F16%2BsTfslk0dabygF%2FemtFTYheBjqSn7ey7uChX%2BJWXppzMhUKrFEqGicTpj6PJDqwr0Edcl2QHf4oDrBthaRot5rdEcEcRK5zm4mzbQDyFyrCw%2BLfnboKQwlfi%2Fl%2FF0oOMvdSu0SJLGqxIDeoS6J8GBOCuOMeR42m00xAFWRVSj4x4jjSuio%2B9boSrFIlxso%2FsxZ7d6FBHp6YYke8IagEKVEEJqJWt9TmK48x2ieSmhf09SKYE9G44O4F9gnI57EkRfgBe3YGld3ZBHKNclwmE8Cjs8DUTZMUS3dIsxBwwM6RK%2BDbHKyamwR593y8gMBxG6%2FeAXOgJ4xvMJLd88MGOqUBBb5b2MgudSWlrGGAi%2FNh3oWpM4nydvn9yFDlzb0tVBU0z8zQKJ7eDlG30uFjEiaVGA0U3EWoUsuF%2FwYyK3Z%2B3NUE%2F0Shjczk58I82kUGNABavDKh0BbEmSd6Cl6pX2A%2FFhL8IUWtBZI2d1pvaczGsfSne%2FiA5mAZwcPuqRAhW8u2LIznLtQKsKRRqF6lW2%2FvFeo3zQUYf2YH7jvsQiQWEpG%2FRASD&X-Amz-Signature=8eaa98fc70f78d34b9ea4c87d73bede022da0b5d396baa4fd36880315f10ade8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YG7YM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApSUrtbQMMol1gC8HeIYWxGPepFUeiR2Xj4izqPrVApAiEAxZIf4qn%2BS9boXvVc2gQR3EPxpbAw47sgzDi9QwJKQ5gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHD2ekbh9zhQeElyrcAw5crPId2o2trGT4%2FdJObMj%2FqN2ALdyQp1I%2By3N0nnlM3p3WfW%2Fg7xDZB4J81%2FXkOeoiZiAO69xWQLzdzICEso9V4GS13kYp9p8Wif6MTxehivjaYkVYb%2BZ2nTtBYZALTMYB8Rob9wib5oebnSJKaDVVIpvzyYjKcjdepG3vzoqre1XDAAymYQsbGdUQwQ6aN5cqOe8k5z%2FBieVn3AovGNzhK1vs0QGZwp2egnKlqv543yjniWICHfDEctwJNVMAW6JkoLQ0siUHZPTd8sIqy%2BWeQLBbQRHE%2FF2FO%2BpqtV15b3F16%2BsTfslk0dabygF%2FemtFTYheBjqSn7ey7uChX%2BJWXppzMhUKrFEqGicTpj6PJDqwr0Edcl2QHf4oDrBthaRot5rdEcEcRK5zm4mzbQDyFyrCw%2BLfnboKQwlfi%2Fl%2FF0oOMvdSu0SJLGqxIDeoS6J8GBOCuOMeR42m00xAFWRVSj4x4jjSuio%2B9boSrFIlxso%2FsxZ7d6FBHp6YYke8IagEKVEEJqJWt9TmK48x2ieSmhf09SKYE9G44O4F9gnI57EkRfgBe3YGld3ZBHKNclwmE8Cjs8DUTZMUS3dIsxBwwM6RK%2BDbHKyamwR593y8gMBxG6%2FeAXOgJ4xvMJLd88MGOqUBBb5b2MgudSWlrGGAi%2FNh3oWpM4nydvn9yFDlzb0tVBU0z8zQKJ7eDlG30uFjEiaVGA0U3EWoUsuF%2FwYyK3Z%2B3NUE%2F0Shjczk58I82kUGNABavDKh0BbEmSd6Cl6pX2A%2FFhL8IUWtBZI2d1pvaczGsfSne%2FiA5mAZwcPuqRAhW8u2LIznLtQKsKRRqF6lW2%2FvFeo3zQUYf2YH7jvsQiQWEpG%2FRASD&X-Amz-Signature=8526a2cb13f8e44fd271cc2ed9b77c9f6cef70cfb13aca85d56f3ce6e6cab8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YG7YM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApSUrtbQMMol1gC8HeIYWxGPepFUeiR2Xj4izqPrVApAiEAxZIf4qn%2BS9boXvVc2gQR3EPxpbAw47sgzDi9QwJKQ5gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHD2ekbh9zhQeElyrcAw5crPId2o2trGT4%2FdJObMj%2FqN2ALdyQp1I%2By3N0nnlM3p3WfW%2Fg7xDZB4J81%2FXkOeoiZiAO69xWQLzdzICEso9V4GS13kYp9p8Wif6MTxehivjaYkVYb%2BZ2nTtBYZALTMYB8Rob9wib5oebnSJKaDVVIpvzyYjKcjdepG3vzoqre1XDAAymYQsbGdUQwQ6aN5cqOe8k5z%2FBieVn3AovGNzhK1vs0QGZwp2egnKlqv543yjniWICHfDEctwJNVMAW6JkoLQ0siUHZPTd8sIqy%2BWeQLBbQRHE%2FF2FO%2BpqtV15b3F16%2BsTfslk0dabygF%2FemtFTYheBjqSn7ey7uChX%2BJWXppzMhUKrFEqGicTpj6PJDqwr0Edcl2QHf4oDrBthaRot5rdEcEcRK5zm4mzbQDyFyrCw%2BLfnboKQwlfi%2Fl%2FF0oOMvdSu0SJLGqxIDeoS6J8GBOCuOMeR42m00xAFWRVSj4x4jjSuio%2B9boSrFIlxso%2FsxZ7d6FBHp6YYke8IagEKVEEJqJWt9TmK48x2ieSmhf09SKYE9G44O4F9gnI57EkRfgBe3YGld3ZBHKNclwmE8Cjs8DUTZMUS3dIsxBwwM6RK%2BDbHKyamwR593y8gMBxG6%2FeAXOgJ4xvMJLd88MGOqUBBb5b2MgudSWlrGGAi%2FNh3oWpM4nydvn9yFDlzb0tVBU0z8zQKJ7eDlG30uFjEiaVGA0U3EWoUsuF%2FwYyK3Z%2B3NUE%2F0Shjczk58I82kUGNABavDKh0BbEmSd6Cl6pX2A%2FFhL8IUWtBZI2d1pvaczGsfSne%2FiA5mAZwcPuqRAhW8u2LIznLtQKsKRRqF6lW2%2FvFeo3zQUYf2YH7jvsQiQWEpG%2FRASD&X-Amz-Signature=3fd78528c23f002f6dd8c223db3605dc7844ecac6c22a440fe8f019eb84a9acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YG7YM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApSUrtbQMMol1gC8HeIYWxGPepFUeiR2Xj4izqPrVApAiEAxZIf4qn%2BS9boXvVc2gQR3EPxpbAw47sgzDi9QwJKQ5gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHD2ekbh9zhQeElyrcAw5crPId2o2trGT4%2FdJObMj%2FqN2ALdyQp1I%2By3N0nnlM3p3WfW%2Fg7xDZB4J81%2FXkOeoiZiAO69xWQLzdzICEso9V4GS13kYp9p8Wif6MTxehivjaYkVYb%2BZ2nTtBYZALTMYB8Rob9wib5oebnSJKaDVVIpvzyYjKcjdepG3vzoqre1XDAAymYQsbGdUQwQ6aN5cqOe8k5z%2FBieVn3AovGNzhK1vs0QGZwp2egnKlqv543yjniWICHfDEctwJNVMAW6JkoLQ0siUHZPTd8sIqy%2BWeQLBbQRHE%2FF2FO%2BpqtV15b3F16%2BsTfslk0dabygF%2FemtFTYheBjqSn7ey7uChX%2BJWXppzMhUKrFEqGicTpj6PJDqwr0Edcl2QHf4oDrBthaRot5rdEcEcRK5zm4mzbQDyFyrCw%2BLfnboKQwlfi%2Fl%2FF0oOMvdSu0SJLGqxIDeoS6J8GBOCuOMeR42m00xAFWRVSj4x4jjSuio%2B9boSrFIlxso%2FsxZ7d6FBHp6YYke8IagEKVEEJqJWt9TmK48x2ieSmhf09SKYE9G44O4F9gnI57EkRfgBe3YGld3ZBHKNclwmE8Cjs8DUTZMUS3dIsxBwwM6RK%2BDbHKyamwR593y8gMBxG6%2FeAXOgJ4xvMJLd88MGOqUBBb5b2MgudSWlrGGAi%2FNh3oWpM4nydvn9yFDlzb0tVBU0z8zQKJ7eDlG30uFjEiaVGA0U3EWoUsuF%2FwYyK3Z%2B3NUE%2F0Shjczk58I82kUGNABavDKh0BbEmSd6Cl6pX2A%2FFhL8IUWtBZI2d1pvaczGsfSne%2FiA5mAZwcPuqRAhW8u2LIznLtQKsKRRqF6lW2%2FvFeo3zQUYf2YH7jvsQiQWEpG%2FRASD&X-Amz-Signature=f30ceb11cd334f50ce0f05a7b62f56709a3642ca7bc7dfcdb4dae0e0dc6311fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
