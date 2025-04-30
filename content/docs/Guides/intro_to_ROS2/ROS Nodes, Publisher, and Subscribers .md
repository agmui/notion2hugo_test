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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2WFSJU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH%2FfNIQY%2Bo9jsMq8Xa4gFLPAtVgJHXSRZtpteZp7VKmIAiARsCY7ESTzuRRXRjH6Qs6NDq8DylBaxgfWkUoFM5iLwyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGWaF3pDMd72YVF8KtwD%2FqnI%2B%2FcGaBbhA05RZ%2BH7R7EhIqP02zQmwo9mChLLzY7JdcnTLuorHCZJZXVlScNjkCcKZGKxm9P8eYfsV5Jp4TEuierjCiKoPiztqROQdDY85ozPWq%2FPaPhxgyy%2FcKd%2BMGd2Ha11Q63Pbl6WOPq%2Fa0WD%2F5hW1SkXUms9pqDZ8tAODl6H%2Bncg2a%2BUHHk4Uxo%2B%2B3LV2UARHYhkiD1kohlum8xTWbyksmSg5pk5HgoA9upO3TqjQSWScSon5spcHiCol9Ipu7rjNFqv2wuYy4RUVN%2BYoSAagKBVnRWF6g%2FxsSzYA%2BamkFhNy2p9iRLsXaeAM1DinYZPmhiAajzK7pv5aDkZTacyOHZwdrZVfikq2s49517%2BUv%2FvGLynr7JA%2FcC40IiS%2BsndED7edfd5zVW0HK8zbhzIJY21XDTqyTY0%2FCdl%2BnKb2wZQ1ScmajumIbiz5BIlcE9s8cMFx0Lfv1r2lHlq9nNirl1P0bCr8sOi27zl72EkCXzdgKiGBf09Dunw601QGhEow8sA5v6oIdivawOGM9tWGpKyQDBVbZlxpF%2BGBiHR1VXwxkZARDwE%2FmuL1p4YB%2FaPf%2BdnXrnVAc9ZyBJ8ZpygEBXpmOV5iixk0P%2FtEK%2Bs2ZdUzP611lww%2BfnGwAY6pgH1dOflF4SeqyUd0PjoIBHC6p0kc5wihwxqSLgHyyrVvzENHwG%2F4Bk5%2FHaWjSlQOKVOTDLLOeY9aQorIBkESZ4NGPZznVvocRelx1yzSfV5q9StDA18nSlkac%2BhTgjl6FnyhHbPQTHFCVQjA8%2Fv%2BrO7Z0tNka%2BHf131Z38bs4UmbsMISa40rNpiaPal0wbKJliTZDzVIIqjB9U5JDU%2FjtjuBVz5Csmh&X-Amz-Signature=b71d7b929933a0ee8ae82bee87f1748de80a89b47b0ccb7c17c210b52a1eb025&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2WFSJU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH%2FfNIQY%2Bo9jsMq8Xa4gFLPAtVgJHXSRZtpteZp7VKmIAiARsCY7ESTzuRRXRjH6Qs6NDq8DylBaxgfWkUoFM5iLwyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGWaF3pDMd72YVF8KtwD%2FqnI%2B%2FcGaBbhA05RZ%2BH7R7EhIqP02zQmwo9mChLLzY7JdcnTLuorHCZJZXVlScNjkCcKZGKxm9P8eYfsV5Jp4TEuierjCiKoPiztqROQdDY85ozPWq%2FPaPhxgyy%2FcKd%2BMGd2Ha11Q63Pbl6WOPq%2Fa0WD%2F5hW1SkXUms9pqDZ8tAODl6H%2Bncg2a%2BUHHk4Uxo%2B%2B3LV2UARHYhkiD1kohlum8xTWbyksmSg5pk5HgoA9upO3TqjQSWScSon5spcHiCol9Ipu7rjNFqv2wuYy4RUVN%2BYoSAagKBVnRWF6g%2FxsSzYA%2BamkFhNy2p9iRLsXaeAM1DinYZPmhiAajzK7pv5aDkZTacyOHZwdrZVfikq2s49517%2BUv%2FvGLynr7JA%2FcC40IiS%2BsndED7edfd5zVW0HK8zbhzIJY21XDTqyTY0%2FCdl%2BnKb2wZQ1ScmajumIbiz5BIlcE9s8cMFx0Lfv1r2lHlq9nNirl1P0bCr8sOi27zl72EkCXzdgKiGBf09Dunw601QGhEow8sA5v6oIdivawOGM9tWGpKyQDBVbZlxpF%2BGBiHR1VXwxkZARDwE%2FmuL1p4YB%2FaPf%2BdnXrnVAc9ZyBJ8ZpygEBXpmOV5iixk0P%2FtEK%2Bs2ZdUzP611lww%2BfnGwAY6pgH1dOflF4SeqyUd0PjoIBHC6p0kc5wihwxqSLgHyyrVvzENHwG%2F4Bk5%2FHaWjSlQOKVOTDLLOeY9aQorIBkESZ4NGPZznVvocRelx1yzSfV5q9StDA18nSlkac%2BhTgjl6FnyhHbPQTHFCVQjA8%2Fv%2BrO7Z0tNka%2BHf131Z38bs4UmbsMISa40rNpiaPal0wbKJliTZDzVIIqjB9U5JDU%2FjtjuBVz5Csmh&X-Amz-Signature=4dfea5bcedee9309364f2e57c9d94ae50542caca4bc1324bd894ed283d9641b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2WFSJU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH%2FfNIQY%2Bo9jsMq8Xa4gFLPAtVgJHXSRZtpteZp7VKmIAiARsCY7ESTzuRRXRjH6Qs6NDq8DylBaxgfWkUoFM5iLwyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGWaF3pDMd72YVF8KtwD%2FqnI%2B%2FcGaBbhA05RZ%2BH7R7EhIqP02zQmwo9mChLLzY7JdcnTLuorHCZJZXVlScNjkCcKZGKxm9P8eYfsV5Jp4TEuierjCiKoPiztqROQdDY85ozPWq%2FPaPhxgyy%2FcKd%2BMGd2Ha11Q63Pbl6WOPq%2Fa0WD%2F5hW1SkXUms9pqDZ8tAODl6H%2Bncg2a%2BUHHk4Uxo%2B%2B3LV2UARHYhkiD1kohlum8xTWbyksmSg5pk5HgoA9upO3TqjQSWScSon5spcHiCol9Ipu7rjNFqv2wuYy4RUVN%2BYoSAagKBVnRWF6g%2FxsSzYA%2BamkFhNy2p9iRLsXaeAM1DinYZPmhiAajzK7pv5aDkZTacyOHZwdrZVfikq2s49517%2BUv%2FvGLynr7JA%2FcC40IiS%2BsndED7edfd5zVW0HK8zbhzIJY21XDTqyTY0%2FCdl%2BnKb2wZQ1ScmajumIbiz5BIlcE9s8cMFx0Lfv1r2lHlq9nNirl1P0bCr8sOi27zl72EkCXzdgKiGBf09Dunw601QGhEow8sA5v6oIdivawOGM9tWGpKyQDBVbZlxpF%2BGBiHR1VXwxkZARDwE%2FmuL1p4YB%2FaPf%2BdnXrnVAc9ZyBJ8ZpygEBXpmOV5iixk0P%2FtEK%2Bs2ZdUzP611lww%2BfnGwAY6pgH1dOflF4SeqyUd0PjoIBHC6p0kc5wihwxqSLgHyyrVvzENHwG%2F4Bk5%2FHaWjSlQOKVOTDLLOeY9aQorIBkESZ4NGPZznVvocRelx1yzSfV5q9StDA18nSlkac%2BhTgjl6FnyhHbPQTHFCVQjA8%2Fv%2BrO7Z0tNka%2BHf131Z38bs4UmbsMISa40rNpiaPal0wbKJliTZDzVIIqjB9U5JDU%2FjtjuBVz5Csmh&X-Amz-Signature=3d652f4bb89e4a96237cc30e51964a1e6333d747ab87c5e38fe3b0f80598edd3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2WFSJU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH%2FfNIQY%2Bo9jsMq8Xa4gFLPAtVgJHXSRZtpteZp7VKmIAiARsCY7ESTzuRRXRjH6Qs6NDq8DylBaxgfWkUoFM5iLwyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGWaF3pDMd72YVF8KtwD%2FqnI%2B%2FcGaBbhA05RZ%2BH7R7EhIqP02zQmwo9mChLLzY7JdcnTLuorHCZJZXVlScNjkCcKZGKxm9P8eYfsV5Jp4TEuierjCiKoPiztqROQdDY85ozPWq%2FPaPhxgyy%2FcKd%2BMGd2Ha11Q63Pbl6WOPq%2Fa0WD%2F5hW1SkXUms9pqDZ8tAODl6H%2Bncg2a%2BUHHk4Uxo%2B%2B3LV2UARHYhkiD1kohlum8xTWbyksmSg5pk5HgoA9upO3TqjQSWScSon5spcHiCol9Ipu7rjNFqv2wuYy4RUVN%2BYoSAagKBVnRWF6g%2FxsSzYA%2BamkFhNy2p9iRLsXaeAM1DinYZPmhiAajzK7pv5aDkZTacyOHZwdrZVfikq2s49517%2BUv%2FvGLynr7JA%2FcC40IiS%2BsndED7edfd5zVW0HK8zbhzIJY21XDTqyTY0%2FCdl%2BnKb2wZQ1ScmajumIbiz5BIlcE9s8cMFx0Lfv1r2lHlq9nNirl1P0bCr8sOi27zl72EkCXzdgKiGBf09Dunw601QGhEow8sA5v6oIdivawOGM9tWGpKyQDBVbZlxpF%2BGBiHR1VXwxkZARDwE%2FmuL1p4YB%2FaPf%2BdnXrnVAc9ZyBJ8ZpygEBXpmOV5iixk0P%2FtEK%2Bs2ZdUzP611lww%2BfnGwAY6pgH1dOflF4SeqyUd0PjoIBHC6p0kc5wihwxqSLgHyyrVvzENHwG%2F4Bk5%2FHaWjSlQOKVOTDLLOeY9aQorIBkESZ4NGPZznVvocRelx1yzSfV5q9StDA18nSlkac%2BhTgjl6FnyhHbPQTHFCVQjA8%2Fv%2BrO7Z0tNka%2BHf131Z38bs4UmbsMISa40rNpiaPal0wbKJliTZDzVIIqjB9U5JDU%2FjtjuBVz5Csmh&X-Amz-Signature=a27b2876d8754a3e84d84f16fea0c7b9176e8e763e4eba45c1c714fffb3d382e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2WFSJU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH%2FfNIQY%2Bo9jsMq8Xa4gFLPAtVgJHXSRZtpteZp7VKmIAiARsCY7ESTzuRRXRjH6Qs6NDq8DylBaxgfWkUoFM5iLwyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGWaF3pDMd72YVF8KtwD%2FqnI%2B%2FcGaBbhA05RZ%2BH7R7EhIqP02zQmwo9mChLLzY7JdcnTLuorHCZJZXVlScNjkCcKZGKxm9P8eYfsV5Jp4TEuierjCiKoPiztqROQdDY85ozPWq%2FPaPhxgyy%2FcKd%2BMGd2Ha11Q63Pbl6WOPq%2Fa0WD%2F5hW1SkXUms9pqDZ8tAODl6H%2Bncg2a%2BUHHk4Uxo%2B%2B3LV2UARHYhkiD1kohlum8xTWbyksmSg5pk5HgoA9upO3TqjQSWScSon5spcHiCol9Ipu7rjNFqv2wuYy4RUVN%2BYoSAagKBVnRWF6g%2FxsSzYA%2BamkFhNy2p9iRLsXaeAM1DinYZPmhiAajzK7pv5aDkZTacyOHZwdrZVfikq2s49517%2BUv%2FvGLynr7JA%2FcC40IiS%2BsndED7edfd5zVW0HK8zbhzIJY21XDTqyTY0%2FCdl%2BnKb2wZQ1ScmajumIbiz5BIlcE9s8cMFx0Lfv1r2lHlq9nNirl1P0bCr8sOi27zl72EkCXzdgKiGBf09Dunw601QGhEow8sA5v6oIdivawOGM9tWGpKyQDBVbZlxpF%2BGBiHR1VXwxkZARDwE%2FmuL1p4YB%2FaPf%2BdnXrnVAc9ZyBJ8ZpygEBXpmOV5iixk0P%2FtEK%2Bs2ZdUzP611lww%2BfnGwAY6pgH1dOflF4SeqyUd0PjoIBHC6p0kc5wihwxqSLgHyyrVvzENHwG%2F4Bk5%2FHaWjSlQOKVOTDLLOeY9aQorIBkESZ4NGPZznVvocRelx1yzSfV5q9StDA18nSlkac%2BhTgjl6FnyhHbPQTHFCVQjA8%2Fv%2BrO7Z0tNka%2BHf131Z38bs4UmbsMISa40rNpiaPal0wbKJliTZDzVIIqjB9U5JDU%2FjtjuBVz5Csmh&X-Amz-Signature=c68467a95476631bd5df75b0281cb93d978bc850fd7fcca4ddc6a657ec691bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2WFSJU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH%2FfNIQY%2Bo9jsMq8Xa4gFLPAtVgJHXSRZtpteZp7VKmIAiARsCY7ESTzuRRXRjH6Qs6NDq8DylBaxgfWkUoFM5iLwyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGWaF3pDMd72YVF8KtwD%2FqnI%2B%2FcGaBbhA05RZ%2BH7R7EhIqP02zQmwo9mChLLzY7JdcnTLuorHCZJZXVlScNjkCcKZGKxm9P8eYfsV5Jp4TEuierjCiKoPiztqROQdDY85ozPWq%2FPaPhxgyy%2FcKd%2BMGd2Ha11Q63Pbl6WOPq%2Fa0WD%2F5hW1SkXUms9pqDZ8tAODl6H%2Bncg2a%2BUHHk4Uxo%2B%2B3LV2UARHYhkiD1kohlum8xTWbyksmSg5pk5HgoA9upO3TqjQSWScSon5spcHiCol9Ipu7rjNFqv2wuYy4RUVN%2BYoSAagKBVnRWF6g%2FxsSzYA%2BamkFhNy2p9iRLsXaeAM1DinYZPmhiAajzK7pv5aDkZTacyOHZwdrZVfikq2s49517%2BUv%2FvGLynr7JA%2FcC40IiS%2BsndED7edfd5zVW0HK8zbhzIJY21XDTqyTY0%2FCdl%2BnKb2wZQ1ScmajumIbiz5BIlcE9s8cMFx0Lfv1r2lHlq9nNirl1P0bCr8sOi27zl72EkCXzdgKiGBf09Dunw601QGhEow8sA5v6oIdivawOGM9tWGpKyQDBVbZlxpF%2BGBiHR1VXwxkZARDwE%2FmuL1p4YB%2FaPf%2BdnXrnVAc9ZyBJ8ZpygEBXpmOV5iixk0P%2FtEK%2Bs2ZdUzP611lww%2BfnGwAY6pgH1dOflF4SeqyUd0PjoIBHC6p0kc5wihwxqSLgHyyrVvzENHwG%2F4Bk5%2FHaWjSlQOKVOTDLLOeY9aQorIBkESZ4NGPZznVvocRelx1yzSfV5q9StDA18nSlkac%2BhTgjl6FnyhHbPQTHFCVQjA8%2Fv%2BrO7Z0tNka%2BHf131Z38bs4UmbsMISa40rNpiaPal0wbKJliTZDzVIIqjB9U5JDU%2FjtjuBVz5Csmh&X-Amz-Signature=4a1ee1ab3d6dffacd627d32002cd8a4896da31b689ee6eb693e11889ef687b16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2WFSJU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH%2FfNIQY%2Bo9jsMq8Xa4gFLPAtVgJHXSRZtpteZp7VKmIAiARsCY7ESTzuRRXRjH6Qs6NDq8DylBaxgfWkUoFM5iLwyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGWaF3pDMd72YVF8KtwD%2FqnI%2B%2FcGaBbhA05RZ%2BH7R7EhIqP02zQmwo9mChLLzY7JdcnTLuorHCZJZXVlScNjkCcKZGKxm9P8eYfsV5Jp4TEuierjCiKoPiztqROQdDY85ozPWq%2FPaPhxgyy%2FcKd%2BMGd2Ha11Q63Pbl6WOPq%2Fa0WD%2F5hW1SkXUms9pqDZ8tAODl6H%2Bncg2a%2BUHHk4Uxo%2B%2B3LV2UARHYhkiD1kohlum8xTWbyksmSg5pk5HgoA9upO3TqjQSWScSon5spcHiCol9Ipu7rjNFqv2wuYy4RUVN%2BYoSAagKBVnRWF6g%2FxsSzYA%2BamkFhNy2p9iRLsXaeAM1DinYZPmhiAajzK7pv5aDkZTacyOHZwdrZVfikq2s49517%2BUv%2FvGLynr7JA%2FcC40IiS%2BsndED7edfd5zVW0HK8zbhzIJY21XDTqyTY0%2FCdl%2BnKb2wZQ1ScmajumIbiz5BIlcE9s8cMFx0Lfv1r2lHlq9nNirl1P0bCr8sOi27zl72EkCXzdgKiGBf09Dunw601QGhEow8sA5v6oIdivawOGM9tWGpKyQDBVbZlxpF%2BGBiHR1VXwxkZARDwE%2FmuL1p4YB%2FaPf%2BdnXrnVAc9ZyBJ8ZpygEBXpmOV5iixk0P%2FtEK%2Bs2ZdUzP611lww%2BfnGwAY6pgH1dOflF4SeqyUd0PjoIBHC6p0kc5wihwxqSLgHyyrVvzENHwG%2F4Bk5%2FHaWjSlQOKVOTDLLOeY9aQorIBkESZ4NGPZznVvocRelx1yzSfV5q9StDA18nSlkac%2BhTgjl6FnyhHbPQTHFCVQjA8%2Fv%2BrO7Z0tNka%2BHf131Z38bs4UmbsMISa40rNpiaPal0wbKJliTZDzVIIqjB9U5JDU%2FjtjuBVz5Csmh&X-Amz-Signature=5f0ad08570210b435853bf25ac8c61b16f703b53dba051b2cce1cff09e961b78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2WFSJU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH%2FfNIQY%2Bo9jsMq8Xa4gFLPAtVgJHXSRZtpteZp7VKmIAiARsCY7ESTzuRRXRjH6Qs6NDq8DylBaxgfWkUoFM5iLwyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGWaF3pDMd72YVF8KtwD%2FqnI%2B%2FcGaBbhA05RZ%2BH7R7EhIqP02zQmwo9mChLLzY7JdcnTLuorHCZJZXVlScNjkCcKZGKxm9P8eYfsV5Jp4TEuierjCiKoPiztqROQdDY85ozPWq%2FPaPhxgyy%2FcKd%2BMGd2Ha11Q63Pbl6WOPq%2Fa0WD%2F5hW1SkXUms9pqDZ8tAODl6H%2Bncg2a%2BUHHk4Uxo%2B%2B3LV2UARHYhkiD1kohlum8xTWbyksmSg5pk5HgoA9upO3TqjQSWScSon5spcHiCol9Ipu7rjNFqv2wuYy4RUVN%2BYoSAagKBVnRWF6g%2FxsSzYA%2BamkFhNy2p9iRLsXaeAM1DinYZPmhiAajzK7pv5aDkZTacyOHZwdrZVfikq2s49517%2BUv%2FvGLynr7JA%2FcC40IiS%2BsndED7edfd5zVW0HK8zbhzIJY21XDTqyTY0%2FCdl%2BnKb2wZQ1ScmajumIbiz5BIlcE9s8cMFx0Lfv1r2lHlq9nNirl1P0bCr8sOi27zl72EkCXzdgKiGBf09Dunw601QGhEow8sA5v6oIdivawOGM9tWGpKyQDBVbZlxpF%2BGBiHR1VXwxkZARDwE%2FmuL1p4YB%2FaPf%2BdnXrnVAc9ZyBJ8ZpygEBXpmOV5iixk0P%2FtEK%2Bs2ZdUzP611lww%2BfnGwAY6pgH1dOflF4SeqyUd0PjoIBHC6p0kc5wihwxqSLgHyyrVvzENHwG%2F4Bk5%2FHaWjSlQOKVOTDLLOeY9aQorIBkESZ4NGPZznVvocRelx1yzSfV5q9StDA18nSlkac%2BhTgjl6FnyhHbPQTHFCVQjA8%2Fv%2BrO7Z0tNka%2BHf131Z38bs4UmbsMISa40rNpiaPal0wbKJliTZDzVIIqjB9U5JDU%2FjtjuBVz5Csmh&X-Amz-Signature=fc86b17d591657c1f2765465206512d175368c58a606360696561704067b90ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
