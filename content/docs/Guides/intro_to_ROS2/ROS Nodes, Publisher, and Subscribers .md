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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFIES3L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIF4mELczqNVfVd3HdJBH43JkgEGXlwvPU%2BIfwup6OZGuAiAk5vSj7TFuggSMAR689OpzRnCskf2yzXXgHlbX1gyTyCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FFQA5b3tqx68GPYKtwDwyCfdWFtY3ueCaxmrKIYJeKMAeAI2B7wxYRqDTKMqVw%2BneVCFV33e6HR35fbu2QkS%2FrTkoSaoBJoNlXLDPSQCvjXtlPtPHa8b2kAXLLoo7NBLDWTKiw3zXqRxFEu8Gj9kzE0QFKGSxv4QqY9di%2Bh%2FaqCSq8b372XLqZQ9guhP8hcBc9rLjOQbWIurbpvL0KddeTeD8dZjpbv1qFcLHYSv2U98OFCtXE58WfVeVuN6fUdes62ztBCWHVvW6Ov%2FS42O9W2Udq5JbCX7zQ9rh89me1kTu%2BA9F9qTVdpp0mHw7xDggF3OK0CbCH21e8GtORqmuI8gSUuM%2FYdQ4AIDy%2FQVD0a8zqbiCFQGV2iZgZ3u%2BSgO%2BbJxnec775ECeqUnxcklO78u%2BW8uk45TqutfIaaMsPoKC%2Fc1nVkSUPqeWmemI1mcU9XNC5ftnETZTWCF4xCfAQz7ipvov73aZchQlHqr1H4KKdGcfj0hpekc3kYKFkKVcREl04XhPaHOZL4CpsOSNTmaxIMtrXx0x4OhylRlec9jrKPBOQGrqT8ny0Vitk%2B69%2F41vR9KAMcgavuvpSOKRhBXQ9S6e4euGEfOFCwLXY9Son%2FNz65z6i5uFnBa43elswwGylLhW%2BlipAw%2BuqFwQY6pgGUCqn38EzlXRCKsWiTOFFE7X%2FOm4sGE5gKSvj7lb579Z9Cg38FbYRY2M0H5rxpLQQWukc2%2BCB4NTb67nSqYkfFHutT%2F2BhLdPQyoI7A2ZS0mvI%2F1InyO%2FiVxc3TpBgOMsQKwIxH%2B%2FNRkCAltFWDia7TVBIjCMThUA9BtSaKTBtWA6qHbHJOs5otnKRzGAJhYmmycrjnlvTHKq6IaYdn5xZpws5gu%2B0&X-Amz-Signature=3a5ae8a70c9c22f92b144a9238189146ac9e16d82b7fb7eb0dc309f24c9164fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFIES3L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIF4mELczqNVfVd3HdJBH43JkgEGXlwvPU%2BIfwup6OZGuAiAk5vSj7TFuggSMAR689OpzRnCskf2yzXXgHlbX1gyTyCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FFQA5b3tqx68GPYKtwDwyCfdWFtY3ueCaxmrKIYJeKMAeAI2B7wxYRqDTKMqVw%2BneVCFV33e6HR35fbu2QkS%2FrTkoSaoBJoNlXLDPSQCvjXtlPtPHa8b2kAXLLoo7NBLDWTKiw3zXqRxFEu8Gj9kzE0QFKGSxv4QqY9di%2Bh%2FaqCSq8b372XLqZQ9guhP8hcBc9rLjOQbWIurbpvL0KddeTeD8dZjpbv1qFcLHYSv2U98OFCtXE58WfVeVuN6fUdes62ztBCWHVvW6Ov%2FS42O9W2Udq5JbCX7zQ9rh89me1kTu%2BA9F9qTVdpp0mHw7xDggF3OK0CbCH21e8GtORqmuI8gSUuM%2FYdQ4AIDy%2FQVD0a8zqbiCFQGV2iZgZ3u%2BSgO%2BbJxnec775ECeqUnxcklO78u%2BW8uk45TqutfIaaMsPoKC%2Fc1nVkSUPqeWmemI1mcU9XNC5ftnETZTWCF4xCfAQz7ipvov73aZchQlHqr1H4KKdGcfj0hpekc3kYKFkKVcREl04XhPaHOZL4CpsOSNTmaxIMtrXx0x4OhylRlec9jrKPBOQGrqT8ny0Vitk%2B69%2F41vR9KAMcgavuvpSOKRhBXQ9S6e4euGEfOFCwLXY9Son%2FNz65z6i5uFnBa43elswwGylLhW%2BlipAw%2BuqFwQY6pgGUCqn38EzlXRCKsWiTOFFE7X%2FOm4sGE5gKSvj7lb579Z9Cg38FbYRY2M0H5rxpLQQWukc2%2BCB4NTb67nSqYkfFHutT%2F2BhLdPQyoI7A2ZS0mvI%2F1InyO%2FiVxc3TpBgOMsQKwIxH%2B%2FNRkCAltFWDia7TVBIjCMThUA9BtSaKTBtWA6qHbHJOs5otnKRzGAJhYmmycrjnlvTHKq6IaYdn5xZpws5gu%2B0&X-Amz-Signature=958cabc86425ad73814fbe966ef8099514784e600d6e1ad12efbd6f4bb847dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFIES3L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIF4mELczqNVfVd3HdJBH43JkgEGXlwvPU%2BIfwup6OZGuAiAk5vSj7TFuggSMAR689OpzRnCskf2yzXXgHlbX1gyTyCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FFQA5b3tqx68GPYKtwDwyCfdWFtY3ueCaxmrKIYJeKMAeAI2B7wxYRqDTKMqVw%2BneVCFV33e6HR35fbu2QkS%2FrTkoSaoBJoNlXLDPSQCvjXtlPtPHa8b2kAXLLoo7NBLDWTKiw3zXqRxFEu8Gj9kzE0QFKGSxv4QqY9di%2Bh%2FaqCSq8b372XLqZQ9guhP8hcBc9rLjOQbWIurbpvL0KddeTeD8dZjpbv1qFcLHYSv2U98OFCtXE58WfVeVuN6fUdes62ztBCWHVvW6Ov%2FS42O9W2Udq5JbCX7zQ9rh89me1kTu%2BA9F9qTVdpp0mHw7xDggF3OK0CbCH21e8GtORqmuI8gSUuM%2FYdQ4AIDy%2FQVD0a8zqbiCFQGV2iZgZ3u%2BSgO%2BbJxnec775ECeqUnxcklO78u%2BW8uk45TqutfIaaMsPoKC%2Fc1nVkSUPqeWmemI1mcU9XNC5ftnETZTWCF4xCfAQz7ipvov73aZchQlHqr1H4KKdGcfj0hpekc3kYKFkKVcREl04XhPaHOZL4CpsOSNTmaxIMtrXx0x4OhylRlec9jrKPBOQGrqT8ny0Vitk%2B69%2F41vR9KAMcgavuvpSOKRhBXQ9S6e4euGEfOFCwLXY9Son%2FNz65z6i5uFnBa43elswwGylLhW%2BlipAw%2BuqFwQY6pgGUCqn38EzlXRCKsWiTOFFE7X%2FOm4sGE5gKSvj7lb579Z9Cg38FbYRY2M0H5rxpLQQWukc2%2BCB4NTb67nSqYkfFHutT%2F2BhLdPQyoI7A2ZS0mvI%2F1InyO%2FiVxc3TpBgOMsQKwIxH%2B%2FNRkCAltFWDia7TVBIjCMThUA9BtSaKTBtWA6qHbHJOs5otnKRzGAJhYmmycrjnlvTHKq6IaYdn5xZpws5gu%2B0&X-Amz-Signature=13d7f93b16ff96078a231659286a5055cfd8dae030ac052e51fda551b83ab693&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFIES3L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIF4mELczqNVfVd3HdJBH43JkgEGXlwvPU%2BIfwup6OZGuAiAk5vSj7TFuggSMAR689OpzRnCskf2yzXXgHlbX1gyTyCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FFQA5b3tqx68GPYKtwDwyCfdWFtY3ueCaxmrKIYJeKMAeAI2B7wxYRqDTKMqVw%2BneVCFV33e6HR35fbu2QkS%2FrTkoSaoBJoNlXLDPSQCvjXtlPtPHa8b2kAXLLoo7NBLDWTKiw3zXqRxFEu8Gj9kzE0QFKGSxv4QqY9di%2Bh%2FaqCSq8b372XLqZQ9guhP8hcBc9rLjOQbWIurbpvL0KddeTeD8dZjpbv1qFcLHYSv2U98OFCtXE58WfVeVuN6fUdes62ztBCWHVvW6Ov%2FS42O9W2Udq5JbCX7zQ9rh89me1kTu%2BA9F9qTVdpp0mHw7xDggF3OK0CbCH21e8GtORqmuI8gSUuM%2FYdQ4AIDy%2FQVD0a8zqbiCFQGV2iZgZ3u%2BSgO%2BbJxnec775ECeqUnxcklO78u%2BW8uk45TqutfIaaMsPoKC%2Fc1nVkSUPqeWmemI1mcU9XNC5ftnETZTWCF4xCfAQz7ipvov73aZchQlHqr1H4KKdGcfj0hpekc3kYKFkKVcREl04XhPaHOZL4CpsOSNTmaxIMtrXx0x4OhylRlec9jrKPBOQGrqT8ny0Vitk%2B69%2F41vR9KAMcgavuvpSOKRhBXQ9S6e4euGEfOFCwLXY9Son%2FNz65z6i5uFnBa43elswwGylLhW%2BlipAw%2BuqFwQY6pgGUCqn38EzlXRCKsWiTOFFE7X%2FOm4sGE5gKSvj7lb579Z9Cg38FbYRY2M0H5rxpLQQWukc2%2BCB4NTb67nSqYkfFHutT%2F2BhLdPQyoI7A2ZS0mvI%2F1InyO%2FiVxc3TpBgOMsQKwIxH%2B%2FNRkCAltFWDia7TVBIjCMThUA9BtSaKTBtWA6qHbHJOs5otnKRzGAJhYmmycrjnlvTHKq6IaYdn5xZpws5gu%2B0&X-Amz-Signature=b2ff1c5ed93efa3201343350923e5ceffcaf33c16e9758e86fe3e67973ea9586&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFIES3L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIF4mELczqNVfVd3HdJBH43JkgEGXlwvPU%2BIfwup6OZGuAiAk5vSj7TFuggSMAR689OpzRnCskf2yzXXgHlbX1gyTyCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FFQA5b3tqx68GPYKtwDwyCfdWFtY3ueCaxmrKIYJeKMAeAI2B7wxYRqDTKMqVw%2BneVCFV33e6HR35fbu2QkS%2FrTkoSaoBJoNlXLDPSQCvjXtlPtPHa8b2kAXLLoo7NBLDWTKiw3zXqRxFEu8Gj9kzE0QFKGSxv4QqY9di%2Bh%2FaqCSq8b372XLqZQ9guhP8hcBc9rLjOQbWIurbpvL0KddeTeD8dZjpbv1qFcLHYSv2U98OFCtXE58WfVeVuN6fUdes62ztBCWHVvW6Ov%2FS42O9W2Udq5JbCX7zQ9rh89me1kTu%2BA9F9qTVdpp0mHw7xDggF3OK0CbCH21e8GtORqmuI8gSUuM%2FYdQ4AIDy%2FQVD0a8zqbiCFQGV2iZgZ3u%2BSgO%2BbJxnec775ECeqUnxcklO78u%2BW8uk45TqutfIaaMsPoKC%2Fc1nVkSUPqeWmemI1mcU9XNC5ftnETZTWCF4xCfAQz7ipvov73aZchQlHqr1H4KKdGcfj0hpekc3kYKFkKVcREl04XhPaHOZL4CpsOSNTmaxIMtrXx0x4OhylRlec9jrKPBOQGrqT8ny0Vitk%2B69%2F41vR9KAMcgavuvpSOKRhBXQ9S6e4euGEfOFCwLXY9Son%2FNz65z6i5uFnBa43elswwGylLhW%2BlipAw%2BuqFwQY6pgGUCqn38EzlXRCKsWiTOFFE7X%2FOm4sGE5gKSvj7lb579Z9Cg38FbYRY2M0H5rxpLQQWukc2%2BCB4NTb67nSqYkfFHutT%2F2BhLdPQyoI7A2ZS0mvI%2F1InyO%2FiVxc3TpBgOMsQKwIxH%2B%2FNRkCAltFWDia7TVBIjCMThUA9BtSaKTBtWA6qHbHJOs5otnKRzGAJhYmmycrjnlvTHKq6IaYdn5xZpws5gu%2B0&X-Amz-Signature=effb5b0b03485dd02b6124cf55792fd90912aae5ec0a86e599f364aa9b8b7f50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFIES3L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIF4mELczqNVfVd3HdJBH43JkgEGXlwvPU%2BIfwup6OZGuAiAk5vSj7TFuggSMAR689OpzRnCskf2yzXXgHlbX1gyTyCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FFQA5b3tqx68GPYKtwDwyCfdWFtY3ueCaxmrKIYJeKMAeAI2B7wxYRqDTKMqVw%2BneVCFV33e6HR35fbu2QkS%2FrTkoSaoBJoNlXLDPSQCvjXtlPtPHa8b2kAXLLoo7NBLDWTKiw3zXqRxFEu8Gj9kzE0QFKGSxv4QqY9di%2Bh%2FaqCSq8b372XLqZQ9guhP8hcBc9rLjOQbWIurbpvL0KddeTeD8dZjpbv1qFcLHYSv2U98OFCtXE58WfVeVuN6fUdes62ztBCWHVvW6Ov%2FS42O9W2Udq5JbCX7zQ9rh89me1kTu%2BA9F9qTVdpp0mHw7xDggF3OK0CbCH21e8GtORqmuI8gSUuM%2FYdQ4AIDy%2FQVD0a8zqbiCFQGV2iZgZ3u%2BSgO%2BbJxnec775ECeqUnxcklO78u%2BW8uk45TqutfIaaMsPoKC%2Fc1nVkSUPqeWmemI1mcU9XNC5ftnETZTWCF4xCfAQz7ipvov73aZchQlHqr1H4KKdGcfj0hpekc3kYKFkKVcREl04XhPaHOZL4CpsOSNTmaxIMtrXx0x4OhylRlec9jrKPBOQGrqT8ny0Vitk%2B69%2F41vR9KAMcgavuvpSOKRhBXQ9S6e4euGEfOFCwLXY9Son%2FNz65z6i5uFnBa43elswwGylLhW%2BlipAw%2BuqFwQY6pgGUCqn38EzlXRCKsWiTOFFE7X%2FOm4sGE5gKSvj7lb579Z9Cg38FbYRY2M0H5rxpLQQWukc2%2BCB4NTb67nSqYkfFHutT%2F2BhLdPQyoI7A2ZS0mvI%2F1InyO%2FiVxc3TpBgOMsQKwIxH%2B%2FNRkCAltFWDia7TVBIjCMThUA9BtSaKTBtWA6qHbHJOs5otnKRzGAJhYmmycrjnlvTHKq6IaYdn5xZpws5gu%2B0&X-Amz-Signature=06883a7bdf87e64c096fff1203bc51a5b197b410ef34ba271d6e302a58fd6425&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFIES3L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIF4mELczqNVfVd3HdJBH43JkgEGXlwvPU%2BIfwup6OZGuAiAk5vSj7TFuggSMAR689OpzRnCskf2yzXXgHlbX1gyTyCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FFQA5b3tqx68GPYKtwDwyCfdWFtY3ueCaxmrKIYJeKMAeAI2B7wxYRqDTKMqVw%2BneVCFV33e6HR35fbu2QkS%2FrTkoSaoBJoNlXLDPSQCvjXtlPtPHa8b2kAXLLoo7NBLDWTKiw3zXqRxFEu8Gj9kzE0QFKGSxv4QqY9di%2Bh%2FaqCSq8b372XLqZQ9guhP8hcBc9rLjOQbWIurbpvL0KddeTeD8dZjpbv1qFcLHYSv2U98OFCtXE58WfVeVuN6fUdes62ztBCWHVvW6Ov%2FS42O9W2Udq5JbCX7zQ9rh89me1kTu%2BA9F9qTVdpp0mHw7xDggF3OK0CbCH21e8GtORqmuI8gSUuM%2FYdQ4AIDy%2FQVD0a8zqbiCFQGV2iZgZ3u%2BSgO%2BbJxnec775ECeqUnxcklO78u%2BW8uk45TqutfIaaMsPoKC%2Fc1nVkSUPqeWmemI1mcU9XNC5ftnETZTWCF4xCfAQz7ipvov73aZchQlHqr1H4KKdGcfj0hpekc3kYKFkKVcREl04XhPaHOZL4CpsOSNTmaxIMtrXx0x4OhylRlec9jrKPBOQGrqT8ny0Vitk%2B69%2F41vR9KAMcgavuvpSOKRhBXQ9S6e4euGEfOFCwLXY9Son%2FNz65z6i5uFnBa43elswwGylLhW%2BlipAw%2BuqFwQY6pgGUCqn38EzlXRCKsWiTOFFE7X%2FOm4sGE5gKSvj7lb579Z9Cg38FbYRY2M0H5rxpLQQWukc2%2BCB4NTb67nSqYkfFHutT%2F2BhLdPQyoI7A2ZS0mvI%2F1InyO%2FiVxc3TpBgOMsQKwIxH%2B%2FNRkCAltFWDia7TVBIjCMThUA9BtSaKTBtWA6qHbHJOs5otnKRzGAJhYmmycrjnlvTHKq6IaYdn5xZpws5gu%2B0&X-Amz-Signature=f9c5d4fff73d9c03bcf2e459f9ef109b1d818526482b4ddf9a09992418b46a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFIES3L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIF4mELczqNVfVd3HdJBH43JkgEGXlwvPU%2BIfwup6OZGuAiAk5vSj7TFuggSMAR689OpzRnCskf2yzXXgHlbX1gyTyCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FFQA5b3tqx68GPYKtwDwyCfdWFtY3ueCaxmrKIYJeKMAeAI2B7wxYRqDTKMqVw%2BneVCFV33e6HR35fbu2QkS%2FrTkoSaoBJoNlXLDPSQCvjXtlPtPHa8b2kAXLLoo7NBLDWTKiw3zXqRxFEu8Gj9kzE0QFKGSxv4QqY9di%2Bh%2FaqCSq8b372XLqZQ9guhP8hcBc9rLjOQbWIurbpvL0KddeTeD8dZjpbv1qFcLHYSv2U98OFCtXE58WfVeVuN6fUdes62ztBCWHVvW6Ov%2FS42O9W2Udq5JbCX7zQ9rh89me1kTu%2BA9F9qTVdpp0mHw7xDggF3OK0CbCH21e8GtORqmuI8gSUuM%2FYdQ4AIDy%2FQVD0a8zqbiCFQGV2iZgZ3u%2BSgO%2BbJxnec775ECeqUnxcklO78u%2BW8uk45TqutfIaaMsPoKC%2Fc1nVkSUPqeWmemI1mcU9XNC5ftnETZTWCF4xCfAQz7ipvov73aZchQlHqr1H4KKdGcfj0hpekc3kYKFkKVcREl04XhPaHOZL4CpsOSNTmaxIMtrXx0x4OhylRlec9jrKPBOQGrqT8ny0Vitk%2B69%2F41vR9KAMcgavuvpSOKRhBXQ9S6e4euGEfOFCwLXY9Son%2FNz65z6i5uFnBa43elswwGylLhW%2BlipAw%2BuqFwQY6pgGUCqn38EzlXRCKsWiTOFFE7X%2FOm4sGE5gKSvj7lb579Z9Cg38FbYRY2M0H5rxpLQQWukc2%2BCB4NTb67nSqYkfFHutT%2F2BhLdPQyoI7A2ZS0mvI%2F1InyO%2FiVxc3TpBgOMsQKwIxH%2B%2FNRkCAltFWDia7TVBIjCMThUA9BtSaKTBtWA6qHbHJOs5otnKRzGAJhYmmycrjnlvTHKq6IaYdn5xZpws5gu%2B0&X-Amz-Signature=49a649041702a83fb5b4935900f6a399ac2364944454752f0ad68423ef158047&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
