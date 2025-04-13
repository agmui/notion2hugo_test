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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRIYIE6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhBDM4W567Q%2F3V5JBCYMDDuSOX7QgY1egPbXFEOANFvAiAYRm2ACA4zdirkyM%2BN4YBtQL5KfQfjji%2BMGrgVl4g59CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmeXnQez0N8oarvrKtwD3jj9NeIdrTH36N5U6rqPMXHvj2ClYD%2BOESDtAberVo2uaCIdhxmJ47on0Ys3ve7u%2Fm8690bCu5jTDcATENobeBAz4iI8lSobJAh4zNopN%2BM%2F1PwdI3m%2BKpPsiEu%2FF%2FbfUpmthtfCzZBfAotD8r0q750Rtw4tj8p2siDwnNTe9AZ52e0sPTtFqiKBZeheqwhkAtAluQ%2Fsd08a8UGKI6ck62CI9DXJryeMs7QC5gL8gBoiANIhDBnvwOCNThYkO21VXlQkCjJSw%2BRGUQ0AXovQp%2Fk9MqNK8Uer3Hsgzmo0f3%2B6kABzyhGxNCcBExuT6jL9LRLOPBBe2Un3knXEDl3k2Na0Os3%2BZhGYY%2BLKNgUA0zpmFP0OECSE9I9rZqKsG%2F511RhH3nzgbim5Jj6xyd3KGYy6XwC4O9fWRmW3NdJ9PUyCaYJyK%2FzCpxzl9PMog2iyg6u%2BC5M1Gu7AB9kg8b1pDLrRjmFri9qzKaKQQqm1tujskZUtSLfFRGdTi0z7HJpCOafN6M2TeDfTSvxzx47v3ZVGnAa6Fxa8W6261c9%2F5sQ6crKwKd2x9oY0Ak668gWQduCDxns7GhqOjZo9Edvdi3HIqW2szeiKzzBUB3W49Duwn1bATiHiWqgW5lYw1r3uvwY6pgGNieHV%2Fsghxg%2FdnXcKFLZp48Q2Bmr3t9XdG%2B3X2sSwI7BaBzsHxmS6lSGB%2FP%2FV4BtEPCEQpL53co5Ib%2BxOCCs6pid%2BUixKrdWDM7JeY5dhD5rp3GH9%2FQ0%2FFkd4ACSWUEvn2yD9M9lROoVC10UUKt6RxZHh3ldzQNSgPR5yknhnyaC3uQ3CF6a9TMYL2nmdtsb1mPHMvY2Idjn4%2F27l4YqMYd2Ie2lW&X-Amz-Signature=d7ca446fda4214ed320a8d6e4976c2c44616ccd3e296c90199480e29ed1cbbad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRIYIE6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhBDM4W567Q%2F3V5JBCYMDDuSOX7QgY1egPbXFEOANFvAiAYRm2ACA4zdirkyM%2BN4YBtQL5KfQfjji%2BMGrgVl4g59CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmeXnQez0N8oarvrKtwD3jj9NeIdrTH36N5U6rqPMXHvj2ClYD%2BOESDtAberVo2uaCIdhxmJ47on0Ys3ve7u%2Fm8690bCu5jTDcATENobeBAz4iI8lSobJAh4zNopN%2BM%2F1PwdI3m%2BKpPsiEu%2FF%2FbfUpmthtfCzZBfAotD8r0q750Rtw4tj8p2siDwnNTe9AZ52e0sPTtFqiKBZeheqwhkAtAluQ%2Fsd08a8UGKI6ck62CI9DXJryeMs7QC5gL8gBoiANIhDBnvwOCNThYkO21VXlQkCjJSw%2BRGUQ0AXovQp%2Fk9MqNK8Uer3Hsgzmo0f3%2B6kABzyhGxNCcBExuT6jL9LRLOPBBe2Un3knXEDl3k2Na0Os3%2BZhGYY%2BLKNgUA0zpmFP0OECSE9I9rZqKsG%2F511RhH3nzgbim5Jj6xyd3KGYy6XwC4O9fWRmW3NdJ9PUyCaYJyK%2FzCpxzl9PMog2iyg6u%2BC5M1Gu7AB9kg8b1pDLrRjmFri9qzKaKQQqm1tujskZUtSLfFRGdTi0z7HJpCOafN6M2TeDfTSvxzx47v3ZVGnAa6Fxa8W6261c9%2F5sQ6crKwKd2x9oY0Ak668gWQduCDxns7GhqOjZo9Edvdi3HIqW2szeiKzzBUB3W49Duwn1bATiHiWqgW5lYw1r3uvwY6pgGNieHV%2Fsghxg%2FdnXcKFLZp48Q2Bmr3t9XdG%2B3X2sSwI7BaBzsHxmS6lSGB%2FP%2FV4BtEPCEQpL53co5Ib%2BxOCCs6pid%2BUixKrdWDM7JeY5dhD5rp3GH9%2FQ0%2FFkd4ACSWUEvn2yD9M9lROoVC10UUKt6RxZHh3ldzQNSgPR5yknhnyaC3uQ3CF6a9TMYL2nmdtsb1mPHMvY2Idjn4%2F27l4YqMYd2Ie2lW&X-Amz-Signature=0cd98db0428a823285502e0540d89851238ae1727165756d80a103fb0f8a0adb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRIYIE6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhBDM4W567Q%2F3V5JBCYMDDuSOX7QgY1egPbXFEOANFvAiAYRm2ACA4zdirkyM%2BN4YBtQL5KfQfjji%2BMGrgVl4g59CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmeXnQez0N8oarvrKtwD3jj9NeIdrTH36N5U6rqPMXHvj2ClYD%2BOESDtAberVo2uaCIdhxmJ47on0Ys3ve7u%2Fm8690bCu5jTDcATENobeBAz4iI8lSobJAh4zNopN%2BM%2F1PwdI3m%2BKpPsiEu%2FF%2FbfUpmthtfCzZBfAotD8r0q750Rtw4tj8p2siDwnNTe9AZ52e0sPTtFqiKBZeheqwhkAtAluQ%2Fsd08a8UGKI6ck62CI9DXJryeMs7QC5gL8gBoiANIhDBnvwOCNThYkO21VXlQkCjJSw%2BRGUQ0AXovQp%2Fk9MqNK8Uer3Hsgzmo0f3%2B6kABzyhGxNCcBExuT6jL9LRLOPBBe2Un3knXEDl3k2Na0Os3%2BZhGYY%2BLKNgUA0zpmFP0OECSE9I9rZqKsG%2F511RhH3nzgbim5Jj6xyd3KGYy6XwC4O9fWRmW3NdJ9PUyCaYJyK%2FzCpxzl9PMog2iyg6u%2BC5M1Gu7AB9kg8b1pDLrRjmFri9qzKaKQQqm1tujskZUtSLfFRGdTi0z7HJpCOafN6M2TeDfTSvxzx47v3ZVGnAa6Fxa8W6261c9%2F5sQ6crKwKd2x9oY0Ak668gWQduCDxns7GhqOjZo9Edvdi3HIqW2szeiKzzBUB3W49Duwn1bATiHiWqgW5lYw1r3uvwY6pgGNieHV%2Fsghxg%2FdnXcKFLZp48Q2Bmr3t9XdG%2B3X2sSwI7BaBzsHxmS6lSGB%2FP%2FV4BtEPCEQpL53co5Ib%2BxOCCs6pid%2BUixKrdWDM7JeY5dhD5rp3GH9%2FQ0%2FFkd4ACSWUEvn2yD9M9lROoVC10UUKt6RxZHh3ldzQNSgPR5yknhnyaC3uQ3CF6a9TMYL2nmdtsb1mPHMvY2Idjn4%2F27l4YqMYd2Ie2lW&X-Amz-Signature=e78c7ea6d1c23b5c1862716e1bfe303f951edac4018cf263d04a53f3717df8a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRIYIE6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhBDM4W567Q%2F3V5JBCYMDDuSOX7QgY1egPbXFEOANFvAiAYRm2ACA4zdirkyM%2BN4YBtQL5KfQfjji%2BMGrgVl4g59CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmeXnQez0N8oarvrKtwD3jj9NeIdrTH36N5U6rqPMXHvj2ClYD%2BOESDtAberVo2uaCIdhxmJ47on0Ys3ve7u%2Fm8690bCu5jTDcATENobeBAz4iI8lSobJAh4zNopN%2BM%2F1PwdI3m%2BKpPsiEu%2FF%2FbfUpmthtfCzZBfAotD8r0q750Rtw4tj8p2siDwnNTe9AZ52e0sPTtFqiKBZeheqwhkAtAluQ%2Fsd08a8UGKI6ck62CI9DXJryeMs7QC5gL8gBoiANIhDBnvwOCNThYkO21VXlQkCjJSw%2BRGUQ0AXovQp%2Fk9MqNK8Uer3Hsgzmo0f3%2B6kABzyhGxNCcBExuT6jL9LRLOPBBe2Un3knXEDl3k2Na0Os3%2BZhGYY%2BLKNgUA0zpmFP0OECSE9I9rZqKsG%2F511RhH3nzgbim5Jj6xyd3KGYy6XwC4O9fWRmW3NdJ9PUyCaYJyK%2FzCpxzl9PMog2iyg6u%2BC5M1Gu7AB9kg8b1pDLrRjmFri9qzKaKQQqm1tujskZUtSLfFRGdTi0z7HJpCOafN6M2TeDfTSvxzx47v3ZVGnAa6Fxa8W6261c9%2F5sQ6crKwKd2x9oY0Ak668gWQduCDxns7GhqOjZo9Edvdi3HIqW2szeiKzzBUB3W49Duwn1bATiHiWqgW5lYw1r3uvwY6pgGNieHV%2Fsghxg%2FdnXcKFLZp48Q2Bmr3t9XdG%2B3X2sSwI7BaBzsHxmS6lSGB%2FP%2FV4BtEPCEQpL53co5Ib%2BxOCCs6pid%2BUixKrdWDM7JeY5dhD5rp3GH9%2FQ0%2FFkd4ACSWUEvn2yD9M9lROoVC10UUKt6RxZHh3ldzQNSgPR5yknhnyaC3uQ3CF6a9TMYL2nmdtsb1mPHMvY2Idjn4%2F27l4YqMYd2Ie2lW&X-Amz-Signature=3169046ef8633a3dd07a5f5fc3c6f9fb5f078e4f4b8eece9ef44d78abec1dd51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRIYIE6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhBDM4W567Q%2F3V5JBCYMDDuSOX7QgY1egPbXFEOANFvAiAYRm2ACA4zdirkyM%2BN4YBtQL5KfQfjji%2BMGrgVl4g59CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmeXnQez0N8oarvrKtwD3jj9NeIdrTH36N5U6rqPMXHvj2ClYD%2BOESDtAberVo2uaCIdhxmJ47on0Ys3ve7u%2Fm8690bCu5jTDcATENobeBAz4iI8lSobJAh4zNopN%2BM%2F1PwdI3m%2BKpPsiEu%2FF%2FbfUpmthtfCzZBfAotD8r0q750Rtw4tj8p2siDwnNTe9AZ52e0sPTtFqiKBZeheqwhkAtAluQ%2Fsd08a8UGKI6ck62CI9DXJryeMs7QC5gL8gBoiANIhDBnvwOCNThYkO21VXlQkCjJSw%2BRGUQ0AXovQp%2Fk9MqNK8Uer3Hsgzmo0f3%2B6kABzyhGxNCcBExuT6jL9LRLOPBBe2Un3knXEDl3k2Na0Os3%2BZhGYY%2BLKNgUA0zpmFP0OECSE9I9rZqKsG%2F511RhH3nzgbim5Jj6xyd3KGYy6XwC4O9fWRmW3NdJ9PUyCaYJyK%2FzCpxzl9PMog2iyg6u%2BC5M1Gu7AB9kg8b1pDLrRjmFri9qzKaKQQqm1tujskZUtSLfFRGdTi0z7HJpCOafN6M2TeDfTSvxzx47v3ZVGnAa6Fxa8W6261c9%2F5sQ6crKwKd2x9oY0Ak668gWQduCDxns7GhqOjZo9Edvdi3HIqW2szeiKzzBUB3W49Duwn1bATiHiWqgW5lYw1r3uvwY6pgGNieHV%2Fsghxg%2FdnXcKFLZp48Q2Bmr3t9XdG%2B3X2sSwI7BaBzsHxmS6lSGB%2FP%2FV4BtEPCEQpL53co5Ib%2BxOCCs6pid%2BUixKrdWDM7JeY5dhD5rp3GH9%2FQ0%2FFkd4ACSWUEvn2yD9M9lROoVC10UUKt6RxZHh3ldzQNSgPR5yknhnyaC3uQ3CF6a9TMYL2nmdtsb1mPHMvY2Idjn4%2F27l4YqMYd2Ie2lW&X-Amz-Signature=19ca11aed2d35806fb7574f77b563d2f20cbe66db0c85aa97a0eceac1a773b74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRIYIE6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhBDM4W567Q%2F3V5JBCYMDDuSOX7QgY1egPbXFEOANFvAiAYRm2ACA4zdirkyM%2BN4YBtQL5KfQfjji%2BMGrgVl4g59CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmeXnQez0N8oarvrKtwD3jj9NeIdrTH36N5U6rqPMXHvj2ClYD%2BOESDtAberVo2uaCIdhxmJ47on0Ys3ve7u%2Fm8690bCu5jTDcATENobeBAz4iI8lSobJAh4zNopN%2BM%2F1PwdI3m%2BKpPsiEu%2FF%2FbfUpmthtfCzZBfAotD8r0q750Rtw4tj8p2siDwnNTe9AZ52e0sPTtFqiKBZeheqwhkAtAluQ%2Fsd08a8UGKI6ck62CI9DXJryeMs7QC5gL8gBoiANIhDBnvwOCNThYkO21VXlQkCjJSw%2BRGUQ0AXovQp%2Fk9MqNK8Uer3Hsgzmo0f3%2B6kABzyhGxNCcBExuT6jL9LRLOPBBe2Un3knXEDl3k2Na0Os3%2BZhGYY%2BLKNgUA0zpmFP0OECSE9I9rZqKsG%2F511RhH3nzgbim5Jj6xyd3KGYy6XwC4O9fWRmW3NdJ9PUyCaYJyK%2FzCpxzl9PMog2iyg6u%2BC5M1Gu7AB9kg8b1pDLrRjmFri9qzKaKQQqm1tujskZUtSLfFRGdTi0z7HJpCOafN6M2TeDfTSvxzx47v3ZVGnAa6Fxa8W6261c9%2F5sQ6crKwKd2x9oY0Ak668gWQduCDxns7GhqOjZo9Edvdi3HIqW2szeiKzzBUB3W49Duwn1bATiHiWqgW5lYw1r3uvwY6pgGNieHV%2Fsghxg%2FdnXcKFLZp48Q2Bmr3t9XdG%2B3X2sSwI7BaBzsHxmS6lSGB%2FP%2FV4BtEPCEQpL53co5Ib%2BxOCCs6pid%2BUixKrdWDM7JeY5dhD5rp3GH9%2FQ0%2FFkd4ACSWUEvn2yD9M9lROoVC10UUKt6RxZHh3ldzQNSgPR5yknhnyaC3uQ3CF6a9TMYL2nmdtsb1mPHMvY2Idjn4%2F27l4YqMYd2Ie2lW&X-Amz-Signature=d69d80ce6cff9669b687f601b9ad7d5b29d48a2c4d35f631707bbcb4196d8f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRIYIE6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhBDM4W567Q%2F3V5JBCYMDDuSOX7QgY1egPbXFEOANFvAiAYRm2ACA4zdirkyM%2BN4YBtQL5KfQfjji%2BMGrgVl4g59CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmeXnQez0N8oarvrKtwD3jj9NeIdrTH36N5U6rqPMXHvj2ClYD%2BOESDtAberVo2uaCIdhxmJ47on0Ys3ve7u%2Fm8690bCu5jTDcATENobeBAz4iI8lSobJAh4zNopN%2BM%2F1PwdI3m%2BKpPsiEu%2FF%2FbfUpmthtfCzZBfAotD8r0q750Rtw4tj8p2siDwnNTe9AZ52e0sPTtFqiKBZeheqwhkAtAluQ%2Fsd08a8UGKI6ck62CI9DXJryeMs7QC5gL8gBoiANIhDBnvwOCNThYkO21VXlQkCjJSw%2BRGUQ0AXovQp%2Fk9MqNK8Uer3Hsgzmo0f3%2B6kABzyhGxNCcBExuT6jL9LRLOPBBe2Un3knXEDl3k2Na0Os3%2BZhGYY%2BLKNgUA0zpmFP0OECSE9I9rZqKsG%2F511RhH3nzgbim5Jj6xyd3KGYy6XwC4O9fWRmW3NdJ9PUyCaYJyK%2FzCpxzl9PMog2iyg6u%2BC5M1Gu7AB9kg8b1pDLrRjmFri9qzKaKQQqm1tujskZUtSLfFRGdTi0z7HJpCOafN6M2TeDfTSvxzx47v3ZVGnAa6Fxa8W6261c9%2F5sQ6crKwKd2x9oY0Ak668gWQduCDxns7GhqOjZo9Edvdi3HIqW2szeiKzzBUB3W49Duwn1bATiHiWqgW5lYw1r3uvwY6pgGNieHV%2Fsghxg%2FdnXcKFLZp48Q2Bmr3t9XdG%2B3X2sSwI7BaBzsHxmS6lSGB%2FP%2FV4BtEPCEQpL53co5Ib%2BxOCCs6pid%2BUixKrdWDM7JeY5dhD5rp3GH9%2FQ0%2FFkd4ACSWUEvn2yD9M9lROoVC10UUKt6RxZHh3ldzQNSgPR5yknhnyaC3uQ3CF6a9TMYL2nmdtsb1mPHMvY2Idjn4%2F27l4YqMYd2Ie2lW&X-Amz-Signature=b5912677adef73a761c0e73e67c0243a7c9b3717ecdeed747d1db053356e5900&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRIYIE6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhBDM4W567Q%2F3V5JBCYMDDuSOX7QgY1egPbXFEOANFvAiAYRm2ACA4zdirkyM%2BN4YBtQL5KfQfjji%2BMGrgVl4g59CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmeXnQez0N8oarvrKtwD3jj9NeIdrTH36N5U6rqPMXHvj2ClYD%2BOESDtAberVo2uaCIdhxmJ47on0Ys3ve7u%2Fm8690bCu5jTDcATENobeBAz4iI8lSobJAh4zNopN%2BM%2F1PwdI3m%2BKpPsiEu%2FF%2FbfUpmthtfCzZBfAotD8r0q750Rtw4tj8p2siDwnNTe9AZ52e0sPTtFqiKBZeheqwhkAtAluQ%2Fsd08a8UGKI6ck62CI9DXJryeMs7QC5gL8gBoiANIhDBnvwOCNThYkO21VXlQkCjJSw%2BRGUQ0AXovQp%2Fk9MqNK8Uer3Hsgzmo0f3%2B6kABzyhGxNCcBExuT6jL9LRLOPBBe2Un3knXEDl3k2Na0Os3%2BZhGYY%2BLKNgUA0zpmFP0OECSE9I9rZqKsG%2F511RhH3nzgbim5Jj6xyd3KGYy6XwC4O9fWRmW3NdJ9PUyCaYJyK%2FzCpxzl9PMog2iyg6u%2BC5M1Gu7AB9kg8b1pDLrRjmFri9qzKaKQQqm1tujskZUtSLfFRGdTi0z7HJpCOafN6M2TeDfTSvxzx47v3ZVGnAa6Fxa8W6261c9%2F5sQ6crKwKd2x9oY0Ak668gWQduCDxns7GhqOjZo9Edvdi3HIqW2szeiKzzBUB3W49Duwn1bATiHiWqgW5lYw1r3uvwY6pgGNieHV%2Fsghxg%2FdnXcKFLZp48Q2Bmr3t9XdG%2B3X2sSwI7BaBzsHxmS6lSGB%2FP%2FV4BtEPCEQpL53co5Ib%2BxOCCs6pid%2BUixKrdWDM7JeY5dhD5rp3GH9%2FQ0%2FFkd4ACSWUEvn2yD9M9lROoVC10UUKt6RxZHh3ldzQNSgPR5yknhnyaC3uQ3CF6a9TMYL2nmdtsb1mPHMvY2Idjn4%2F27l4YqMYd2Ie2lW&X-Amz-Signature=0bb7bb0d01e43689d3904884afcd1a99fbe2a99c9164804f0954b8bead46384c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
