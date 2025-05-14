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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YHPMWD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD1xWkua04as8w3n3W9kMd9TS01v2anatS5EWto7Eaq6wIgDmU%2BjyQzYMG88zgtwk8UVJ9KEL4iztxumdFQ6XueDGsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDe6Cf0M4wTmKqFwAyrcA%2BeKaZTkAVZj7VD8DbLDG0kVIKAn3B3iLL405sH5btgq7Y4SoCDrb%2BRC%2F8UVfszFJvgflJu%2FjTQ7pF%2FZPWzU7UFGpzZrW5FUy2aAtGKvIEI1twkhyAFvJmq6MEERIQ3vvof89isJ7TTTK8WR5Pneo%2FgO%2Fs7W9kFfsWeh4BcReHkqQGBBAysMUQFg4Un1eh%2B2pFGgnV0oBj5Os99EGmzbmGPsYg%2Ba68xCPG%2BTbl9x%2F5jtiRRwNOHUp47U9Ln01D6YB7AyESj6814BjuhrdrI%2FuDwbJmsbC4bUggeKwKHbte7vuVebRT7ww7jKd4TtrXSyyfILNcWFw709YSUEsAfxgb6AXh%2BY1a0aQPtRytNRWktH1VG9gH5t3HYzXjWbsibjX0WZjw8JwETXIBkfQyaxoCIDXbjsB31xdaZVMTxF6WPTcCx9WJOgf6H0XkPYe594IljcrPIkaH%2FL2qlYoYzkDo3Bx2PfTcSf4pL2yQCc0lm9IRN1v7JV6P4yrhTbNbk9TXytw4IBXLcdnjml6tCsMvyKeRPCEH6kDvskJ%2F0%2Fhi7ophFXvy6yPGn5I7%2BRa1miiNg4jokNp%2FVNMRHMJgveCKw53fVz%2Bh5rK4jjmkiQZeXSbB7pBVixRFM6RYLKMISjk8EGOqUBkfVUZRL5qvi4%2BBcn2n1UoOwWEzXYwWy8j%2F78VP1wLzTIsLfBTKFfLn6CD0KaNaph8kshFKCGO%2FkOV5fQ5fYWfJOs2KHBxVFCSA9tIPITJl%2BNp5aLlA3ExaRkPEGLg6smYQdoX6hriXIyKrP1x4Brl0bGXwspB00fkcQSg0om5%2B3eYPBgxS1LbaKDtpKLrow9KXsfmMS3T2KMTv3jcUkS5kLRSX6U&X-Amz-Signature=93c7fcd6342dab40e33d80e275368247899db343ee021b958a212e4a2b3d6645&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YHPMWD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD1xWkua04as8w3n3W9kMd9TS01v2anatS5EWto7Eaq6wIgDmU%2BjyQzYMG88zgtwk8UVJ9KEL4iztxumdFQ6XueDGsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDe6Cf0M4wTmKqFwAyrcA%2BeKaZTkAVZj7VD8DbLDG0kVIKAn3B3iLL405sH5btgq7Y4SoCDrb%2BRC%2F8UVfszFJvgflJu%2FjTQ7pF%2FZPWzU7UFGpzZrW5FUy2aAtGKvIEI1twkhyAFvJmq6MEERIQ3vvof89isJ7TTTK8WR5Pneo%2FgO%2Fs7W9kFfsWeh4BcReHkqQGBBAysMUQFg4Un1eh%2B2pFGgnV0oBj5Os99EGmzbmGPsYg%2Ba68xCPG%2BTbl9x%2F5jtiRRwNOHUp47U9Ln01D6YB7AyESj6814BjuhrdrI%2FuDwbJmsbC4bUggeKwKHbte7vuVebRT7ww7jKd4TtrXSyyfILNcWFw709YSUEsAfxgb6AXh%2BY1a0aQPtRytNRWktH1VG9gH5t3HYzXjWbsibjX0WZjw8JwETXIBkfQyaxoCIDXbjsB31xdaZVMTxF6WPTcCx9WJOgf6H0XkPYe594IljcrPIkaH%2FL2qlYoYzkDo3Bx2PfTcSf4pL2yQCc0lm9IRN1v7JV6P4yrhTbNbk9TXytw4IBXLcdnjml6tCsMvyKeRPCEH6kDvskJ%2F0%2Fhi7ophFXvy6yPGn5I7%2BRa1miiNg4jokNp%2FVNMRHMJgveCKw53fVz%2Bh5rK4jjmkiQZeXSbB7pBVixRFM6RYLKMISjk8EGOqUBkfVUZRL5qvi4%2BBcn2n1UoOwWEzXYwWy8j%2F78VP1wLzTIsLfBTKFfLn6CD0KaNaph8kshFKCGO%2FkOV5fQ5fYWfJOs2KHBxVFCSA9tIPITJl%2BNp5aLlA3ExaRkPEGLg6smYQdoX6hriXIyKrP1x4Brl0bGXwspB00fkcQSg0om5%2B3eYPBgxS1LbaKDtpKLrow9KXsfmMS3T2KMTv3jcUkS5kLRSX6U&X-Amz-Signature=e42a8a132ae4048e0486a77a4b452acb660f9e554617f2898d04073c66c565a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YHPMWD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD1xWkua04as8w3n3W9kMd9TS01v2anatS5EWto7Eaq6wIgDmU%2BjyQzYMG88zgtwk8UVJ9KEL4iztxumdFQ6XueDGsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDe6Cf0M4wTmKqFwAyrcA%2BeKaZTkAVZj7VD8DbLDG0kVIKAn3B3iLL405sH5btgq7Y4SoCDrb%2BRC%2F8UVfszFJvgflJu%2FjTQ7pF%2FZPWzU7UFGpzZrW5FUy2aAtGKvIEI1twkhyAFvJmq6MEERIQ3vvof89isJ7TTTK8WR5Pneo%2FgO%2Fs7W9kFfsWeh4BcReHkqQGBBAysMUQFg4Un1eh%2B2pFGgnV0oBj5Os99EGmzbmGPsYg%2Ba68xCPG%2BTbl9x%2F5jtiRRwNOHUp47U9Ln01D6YB7AyESj6814BjuhrdrI%2FuDwbJmsbC4bUggeKwKHbte7vuVebRT7ww7jKd4TtrXSyyfILNcWFw709YSUEsAfxgb6AXh%2BY1a0aQPtRytNRWktH1VG9gH5t3HYzXjWbsibjX0WZjw8JwETXIBkfQyaxoCIDXbjsB31xdaZVMTxF6WPTcCx9WJOgf6H0XkPYe594IljcrPIkaH%2FL2qlYoYzkDo3Bx2PfTcSf4pL2yQCc0lm9IRN1v7JV6P4yrhTbNbk9TXytw4IBXLcdnjml6tCsMvyKeRPCEH6kDvskJ%2F0%2Fhi7ophFXvy6yPGn5I7%2BRa1miiNg4jokNp%2FVNMRHMJgveCKw53fVz%2Bh5rK4jjmkiQZeXSbB7pBVixRFM6RYLKMISjk8EGOqUBkfVUZRL5qvi4%2BBcn2n1UoOwWEzXYwWy8j%2F78VP1wLzTIsLfBTKFfLn6CD0KaNaph8kshFKCGO%2FkOV5fQ5fYWfJOs2KHBxVFCSA9tIPITJl%2BNp5aLlA3ExaRkPEGLg6smYQdoX6hriXIyKrP1x4Brl0bGXwspB00fkcQSg0om5%2B3eYPBgxS1LbaKDtpKLrow9KXsfmMS3T2KMTv3jcUkS5kLRSX6U&X-Amz-Signature=fe440c3327fdc9c3896dc6a66d191f54adbc1ed51ada7eca08710ff0cfe5b4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YHPMWD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD1xWkua04as8w3n3W9kMd9TS01v2anatS5EWto7Eaq6wIgDmU%2BjyQzYMG88zgtwk8UVJ9KEL4iztxumdFQ6XueDGsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDe6Cf0M4wTmKqFwAyrcA%2BeKaZTkAVZj7VD8DbLDG0kVIKAn3B3iLL405sH5btgq7Y4SoCDrb%2BRC%2F8UVfszFJvgflJu%2FjTQ7pF%2FZPWzU7UFGpzZrW5FUy2aAtGKvIEI1twkhyAFvJmq6MEERIQ3vvof89isJ7TTTK8WR5Pneo%2FgO%2Fs7W9kFfsWeh4BcReHkqQGBBAysMUQFg4Un1eh%2B2pFGgnV0oBj5Os99EGmzbmGPsYg%2Ba68xCPG%2BTbl9x%2F5jtiRRwNOHUp47U9Ln01D6YB7AyESj6814BjuhrdrI%2FuDwbJmsbC4bUggeKwKHbte7vuVebRT7ww7jKd4TtrXSyyfILNcWFw709YSUEsAfxgb6AXh%2BY1a0aQPtRytNRWktH1VG9gH5t3HYzXjWbsibjX0WZjw8JwETXIBkfQyaxoCIDXbjsB31xdaZVMTxF6WPTcCx9WJOgf6H0XkPYe594IljcrPIkaH%2FL2qlYoYzkDo3Bx2PfTcSf4pL2yQCc0lm9IRN1v7JV6P4yrhTbNbk9TXytw4IBXLcdnjml6tCsMvyKeRPCEH6kDvskJ%2F0%2Fhi7ophFXvy6yPGn5I7%2BRa1miiNg4jokNp%2FVNMRHMJgveCKw53fVz%2Bh5rK4jjmkiQZeXSbB7pBVixRFM6RYLKMISjk8EGOqUBkfVUZRL5qvi4%2BBcn2n1UoOwWEzXYwWy8j%2F78VP1wLzTIsLfBTKFfLn6CD0KaNaph8kshFKCGO%2FkOV5fQ5fYWfJOs2KHBxVFCSA9tIPITJl%2BNp5aLlA3ExaRkPEGLg6smYQdoX6hriXIyKrP1x4Brl0bGXwspB00fkcQSg0om5%2B3eYPBgxS1LbaKDtpKLrow9KXsfmMS3T2KMTv3jcUkS5kLRSX6U&X-Amz-Signature=ca5b8d5592a9362a15a33970665b3cbd17db0505671ac8c5339610dfa8795ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YHPMWD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD1xWkua04as8w3n3W9kMd9TS01v2anatS5EWto7Eaq6wIgDmU%2BjyQzYMG88zgtwk8UVJ9KEL4iztxumdFQ6XueDGsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDe6Cf0M4wTmKqFwAyrcA%2BeKaZTkAVZj7VD8DbLDG0kVIKAn3B3iLL405sH5btgq7Y4SoCDrb%2BRC%2F8UVfszFJvgflJu%2FjTQ7pF%2FZPWzU7UFGpzZrW5FUy2aAtGKvIEI1twkhyAFvJmq6MEERIQ3vvof89isJ7TTTK8WR5Pneo%2FgO%2Fs7W9kFfsWeh4BcReHkqQGBBAysMUQFg4Un1eh%2B2pFGgnV0oBj5Os99EGmzbmGPsYg%2Ba68xCPG%2BTbl9x%2F5jtiRRwNOHUp47U9Ln01D6YB7AyESj6814BjuhrdrI%2FuDwbJmsbC4bUggeKwKHbte7vuVebRT7ww7jKd4TtrXSyyfILNcWFw709YSUEsAfxgb6AXh%2BY1a0aQPtRytNRWktH1VG9gH5t3HYzXjWbsibjX0WZjw8JwETXIBkfQyaxoCIDXbjsB31xdaZVMTxF6WPTcCx9WJOgf6H0XkPYe594IljcrPIkaH%2FL2qlYoYzkDo3Bx2PfTcSf4pL2yQCc0lm9IRN1v7JV6P4yrhTbNbk9TXytw4IBXLcdnjml6tCsMvyKeRPCEH6kDvskJ%2F0%2Fhi7ophFXvy6yPGn5I7%2BRa1miiNg4jokNp%2FVNMRHMJgveCKw53fVz%2Bh5rK4jjmkiQZeXSbB7pBVixRFM6RYLKMISjk8EGOqUBkfVUZRL5qvi4%2BBcn2n1UoOwWEzXYwWy8j%2F78VP1wLzTIsLfBTKFfLn6CD0KaNaph8kshFKCGO%2FkOV5fQ5fYWfJOs2KHBxVFCSA9tIPITJl%2BNp5aLlA3ExaRkPEGLg6smYQdoX6hriXIyKrP1x4Brl0bGXwspB00fkcQSg0om5%2B3eYPBgxS1LbaKDtpKLrow9KXsfmMS3T2KMTv3jcUkS5kLRSX6U&X-Amz-Signature=fa6a8d10f8a4e6fe267700113608a7f14c3402572f55c31d4699df40d027b0e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YHPMWD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD1xWkua04as8w3n3W9kMd9TS01v2anatS5EWto7Eaq6wIgDmU%2BjyQzYMG88zgtwk8UVJ9KEL4iztxumdFQ6XueDGsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDe6Cf0M4wTmKqFwAyrcA%2BeKaZTkAVZj7VD8DbLDG0kVIKAn3B3iLL405sH5btgq7Y4SoCDrb%2BRC%2F8UVfszFJvgflJu%2FjTQ7pF%2FZPWzU7UFGpzZrW5FUy2aAtGKvIEI1twkhyAFvJmq6MEERIQ3vvof89isJ7TTTK8WR5Pneo%2FgO%2Fs7W9kFfsWeh4BcReHkqQGBBAysMUQFg4Un1eh%2B2pFGgnV0oBj5Os99EGmzbmGPsYg%2Ba68xCPG%2BTbl9x%2F5jtiRRwNOHUp47U9Ln01D6YB7AyESj6814BjuhrdrI%2FuDwbJmsbC4bUggeKwKHbte7vuVebRT7ww7jKd4TtrXSyyfILNcWFw709YSUEsAfxgb6AXh%2BY1a0aQPtRytNRWktH1VG9gH5t3HYzXjWbsibjX0WZjw8JwETXIBkfQyaxoCIDXbjsB31xdaZVMTxF6WPTcCx9WJOgf6H0XkPYe594IljcrPIkaH%2FL2qlYoYzkDo3Bx2PfTcSf4pL2yQCc0lm9IRN1v7JV6P4yrhTbNbk9TXytw4IBXLcdnjml6tCsMvyKeRPCEH6kDvskJ%2F0%2Fhi7ophFXvy6yPGn5I7%2BRa1miiNg4jokNp%2FVNMRHMJgveCKw53fVz%2Bh5rK4jjmkiQZeXSbB7pBVixRFM6RYLKMISjk8EGOqUBkfVUZRL5qvi4%2BBcn2n1UoOwWEzXYwWy8j%2F78VP1wLzTIsLfBTKFfLn6CD0KaNaph8kshFKCGO%2FkOV5fQ5fYWfJOs2KHBxVFCSA9tIPITJl%2BNp5aLlA3ExaRkPEGLg6smYQdoX6hriXIyKrP1x4Brl0bGXwspB00fkcQSg0om5%2B3eYPBgxS1LbaKDtpKLrow9KXsfmMS3T2KMTv3jcUkS5kLRSX6U&X-Amz-Signature=68d299455f135a03e4e7f089ebb03adb9509a6cd0fd845b01bc700ea22a199ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YHPMWD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD1xWkua04as8w3n3W9kMd9TS01v2anatS5EWto7Eaq6wIgDmU%2BjyQzYMG88zgtwk8UVJ9KEL4iztxumdFQ6XueDGsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDe6Cf0M4wTmKqFwAyrcA%2BeKaZTkAVZj7VD8DbLDG0kVIKAn3B3iLL405sH5btgq7Y4SoCDrb%2BRC%2F8UVfszFJvgflJu%2FjTQ7pF%2FZPWzU7UFGpzZrW5FUy2aAtGKvIEI1twkhyAFvJmq6MEERIQ3vvof89isJ7TTTK8WR5Pneo%2FgO%2Fs7W9kFfsWeh4BcReHkqQGBBAysMUQFg4Un1eh%2B2pFGgnV0oBj5Os99EGmzbmGPsYg%2Ba68xCPG%2BTbl9x%2F5jtiRRwNOHUp47U9Ln01D6YB7AyESj6814BjuhrdrI%2FuDwbJmsbC4bUggeKwKHbte7vuVebRT7ww7jKd4TtrXSyyfILNcWFw709YSUEsAfxgb6AXh%2BY1a0aQPtRytNRWktH1VG9gH5t3HYzXjWbsibjX0WZjw8JwETXIBkfQyaxoCIDXbjsB31xdaZVMTxF6WPTcCx9WJOgf6H0XkPYe594IljcrPIkaH%2FL2qlYoYzkDo3Bx2PfTcSf4pL2yQCc0lm9IRN1v7JV6P4yrhTbNbk9TXytw4IBXLcdnjml6tCsMvyKeRPCEH6kDvskJ%2F0%2Fhi7ophFXvy6yPGn5I7%2BRa1miiNg4jokNp%2FVNMRHMJgveCKw53fVz%2Bh5rK4jjmkiQZeXSbB7pBVixRFM6RYLKMISjk8EGOqUBkfVUZRL5qvi4%2BBcn2n1UoOwWEzXYwWy8j%2F78VP1wLzTIsLfBTKFfLn6CD0KaNaph8kshFKCGO%2FkOV5fQ5fYWfJOs2KHBxVFCSA9tIPITJl%2BNp5aLlA3ExaRkPEGLg6smYQdoX6hriXIyKrP1x4Brl0bGXwspB00fkcQSg0om5%2B3eYPBgxS1LbaKDtpKLrow9KXsfmMS3T2KMTv3jcUkS5kLRSX6U&X-Amz-Signature=f4b3d620a0e0457213b05820075d027ee86cbb22e0de8d4316d6010b8784099d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YHPMWD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD1xWkua04as8w3n3W9kMd9TS01v2anatS5EWto7Eaq6wIgDmU%2BjyQzYMG88zgtwk8UVJ9KEL4iztxumdFQ6XueDGsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDe6Cf0M4wTmKqFwAyrcA%2BeKaZTkAVZj7VD8DbLDG0kVIKAn3B3iLL405sH5btgq7Y4SoCDrb%2BRC%2F8UVfszFJvgflJu%2FjTQ7pF%2FZPWzU7UFGpzZrW5FUy2aAtGKvIEI1twkhyAFvJmq6MEERIQ3vvof89isJ7TTTK8WR5Pneo%2FgO%2Fs7W9kFfsWeh4BcReHkqQGBBAysMUQFg4Un1eh%2B2pFGgnV0oBj5Os99EGmzbmGPsYg%2Ba68xCPG%2BTbl9x%2F5jtiRRwNOHUp47U9Ln01D6YB7AyESj6814BjuhrdrI%2FuDwbJmsbC4bUggeKwKHbte7vuVebRT7ww7jKd4TtrXSyyfILNcWFw709YSUEsAfxgb6AXh%2BY1a0aQPtRytNRWktH1VG9gH5t3HYzXjWbsibjX0WZjw8JwETXIBkfQyaxoCIDXbjsB31xdaZVMTxF6WPTcCx9WJOgf6H0XkPYe594IljcrPIkaH%2FL2qlYoYzkDo3Bx2PfTcSf4pL2yQCc0lm9IRN1v7JV6P4yrhTbNbk9TXytw4IBXLcdnjml6tCsMvyKeRPCEH6kDvskJ%2F0%2Fhi7ophFXvy6yPGn5I7%2BRa1miiNg4jokNp%2FVNMRHMJgveCKw53fVz%2Bh5rK4jjmkiQZeXSbB7pBVixRFM6RYLKMISjk8EGOqUBkfVUZRL5qvi4%2BBcn2n1UoOwWEzXYwWy8j%2F78VP1wLzTIsLfBTKFfLn6CD0KaNaph8kshFKCGO%2FkOV5fQ5fYWfJOs2KHBxVFCSA9tIPITJl%2BNp5aLlA3ExaRkPEGLg6smYQdoX6hriXIyKrP1x4Brl0bGXwspB00fkcQSg0om5%2B3eYPBgxS1LbaKDtpKLrow9KXsfmMS3T2KMTv3jcUkS5kLRSX6U&X-Amz-Signature=77158ade8a0b49b7a069320b90a0faac97644448f27a392c11c5eaaeea3f3f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
