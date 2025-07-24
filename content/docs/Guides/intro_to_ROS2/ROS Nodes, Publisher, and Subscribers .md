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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEK6ZEZL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0dj5QTGL1OqLrBeCwcjLk6IFXPrPT%2BsGkNmu8yBWWEgIhALki%2BfZvyLb%2FX9eymjrbVXRHeBuVHl1zXG1RTKxoYj53Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwRqAxaet7u8fcOMGQq3AMGhJu1XtvqbuJSZappHxoBK%2Bjs%2B7i%2F7StoeOxwvKssGGoyGzOkJPYffVun9a7sX0V3aEHxfPTb4pcEE%2BO7vcnw8cRQ9aLRM5YGisWlLtr0HWwhCmMNYMIfYarAyABNtx4MSqzLGeS72HgNbZCZsvUWZ4YlPoq1h1do2iGHaTu0DX0254qeqGJQkiUIeH88BmE8OmlkFUmYmT0NOuy2xk9D3paTpXvJFE5mYLZsaXmm4B6P9uetbA0xqTd33SMfVVrlDu9y5JRacjw%2B4vkqibO3STHCOKnJfNktq2mKAKQFJr048N0At%2FYIieoLZNKjEmmHJeJwYJt4BpSScGU%2FsFOhpsS7rcynB%2FtO9BO8hnneXVhU%2B6w1kfq%2F2ApVz0QDWaB0crhjPtpwhZYnGRrMXoy%2BaCp0jBWYywhaD53%2FC%2FqH7EjIhqcOASgTvrs1T1OCnddqhR4hJ0Syl8SoAVl6r58tLNpxyEzD9P%2B2p3qnqZJ5PC2D9tYJiuYez8ySJw4GiY6lRGDks6LeOSqZbrmRdFZdNzoIECFFP%2FSlb56Z0ssskr7N5WuR2OUlL6n4uFfvAtyT3aAGoiKoYjO%2BiHhMy5tZnaR6ZK%2FOnAfn9PpTEQfL8cnHAYyedBylBxDl2TD9j4jEBjqkAXQqvZjaOS18fCyB60G3nACwcukS0vaatpdgDFcIfw5qPLHex6qan%2BAjmzx5epKXvbrLQerZzsBqu0JBm%2FkvLAk8jMdYstly2Pim%2FxHc638zIxWPMXjUgkLbpPSn6yFZTgdyhzzq1%2BoDxCf%2BjqDEd3ylxl6ut1WmKU7kQTTYR%2Fx4mo954vXDNUbp%2Fsl3QMI6E9O7bIRsuyrcAebjP2lc6fxmEp3Q&X-Amz-Signature=15d5d37f0075dace6ddde6f19773b6a4b6d4ebfb1883b7acf026b2ac9b8cbfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEK6ZEZL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0dj5QTGL1OqLrBeCwcjLk6IFXPrPT%2BsGkNmu8yBWWEgIhALki%2BfZvyLb%2FX9eymjrbVXRHeBuVHl1zXG1RTKxoYj53Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwRqAxaet7u8fcOMGQq3AMGhJu1XtvqbuJSZappHxoBK%2Bjs%2B7i%2F7StoeOxwvKssGGoyGzOkJPYffVun9a7sX0V3aEHxfPTb4pcEE%2BO7vcnw8cRQ9aLRM5YGisWlLtr0HWwhCmMNYMIfYarAyABNtx4MSqzLGeS72HgNbZCZsvUWZ4YlPoq1h1do2iGHaTu0DX0254qeqGJQkiUIeH88BmE8OmlkFUmYmT0NOuy2xk9D3paTpXvJFE5mYLZsaXmm4B6P9uetbA0xqTd33SMfVVrlDu9y5JRacjw%2B4vkqibO3STHCOKnJfNktq2mKAKQFJr048N0At%2FYIieoLZNKjEmmHJeJwYJt4BpSScGU%2FsFOhpsS7rcynB%2FtO9BO8hnneXVhU%2B6w1kfq%2F2ApVz0QDWaB0crhjPtpwhZYnGRrMXoy%2BaCp0jBWYywhaD53%2FC%2FqH7EjIhqcOASgTvrs1T1OCnddqhR4hJ0Syl8SoAVl6r58tLNpxyEzD9P%2B2p3qnqZJ5PC2D9tYJiuYez8ySJw4GiY6lRGDks6LeOSqZbrmRdFZdNzoIECFFP%2FSlb56Z0ssskr7N5WuR2OUlL6n4uFfvAtyT3aAGoiKoYjO%2BiHhMy5tZnaR6ZK%2FOnAfn9PpTEQfL8cnHAYyedBylBxDl2TD9j4jEBjqkAXQqvZjaOS18fCyB60G3nACwcukS0vaatpdgDFcIfw5qPLHex6qan%2BAjmzx5epKXvbrLQerZzsBqu0JBm%2FkvLAk8jMdYstly2Pim%2FxHc638zIxWPMXjUgkLbpPSn6yFZTgdyhzzq1%2BoDxCf%2BjqDEd3ylxl6ut1WmKU7kQTTYR%2Fx4mo954vXDNUbp%2Fsl3QMI6E9O7bIRsuyrcAebjP2lc6fxmEp3Q&X-Amz-Signature=01fc2a1e27e6b40deab36f3d6c24c1b929ac75d79e3bb9af69eb7b002313d06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEK6ZEZL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0dj5QTGL1OqLrBeCwcjLk6IFXPrPT%2BsGkNmu8yBWWEgIhALki%2BfZvyLb%2FX9eymjrbVXRHeBuVHl1zXG1RTKxoYj53Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwRqAxaet7u8fcOMGQq3AMGhJu1XtvqbuJSZappHxoBK%2Bjs%2B7i%2F7StoeOxwvKssGGoyGzOkJPYffVun9a7sX0V3aEHxfPTb4pcEE%2BO7vcnw8cRQ9aLRM5YGisWlLtr0HWwhCmMNYMIfYarAyABNtx4MSqzLGeS72HgNbZCZsvUWZ4YlPoq1h1do2iGHaTu0DX0254qeqGJQkiUIeH88BmE8OmlkFUmYmT0NOuy2xk9D3paTpXvJFE5mYLZsaXmm4B6P9uetbA0xqTd33SMfVVrlDu9y5JRacjw%2B4vkqibO3STHCOKnJfNktq2mKAKQFJr048N0At%2FYIieoLZNKjEmmHJeJwYJt4BpSScGU%2FsFOhpsS7rcynB%2FtO9BO8hnneXVhU%2B6w1kfq%2F2ApVz0QDWaB0crhjPtpwhZYnGRrMXoy%2BaCp0jBWYywhaD53%2FC%2FqH7EjIhqcOASgTvrs1T1OCnddqhR4hJ0Syl8SoAVl6r58tLNpxyEzD9P%2B2p3qnqZJ5PC2D9tYJiuYez8ySJw4GiY6lRGDks6LeOSqZbrmRdFZdNzoIECFFP%2FSlb56Z0ssskr7N5WuR2OUlL6n4uFfvAtyT3aAGoiKoYjO%2BiHhMy5tZnaR6ZK%2FOnAfn9PpTEQfL8cnHAYyedBylBxDl2TD9j4jEBjqkAXQqvZjaOS18fCyB60G3nACwcukS0vaatpdgDFcIfw5qPLHex6qan%2BAjmzx5epKXvbrLQerZzsBqu0JBm%2FkvLAk8jMdYstly2Pim%2FxHc638zIxWPMXjUgkLbpPSn6yFZTgdyhzzq1%2BoDxCf%2BjqDEd3ylxl6ut1WmKU7kQTTYR%2Fx4mo954vXDNUbp%2Fsl3QMI6E9O7bIRsuyrcAebjP2lc6fxmEp3Q&X-Amz-Signature=1e847b1c8a8e966d7dfd204afb95e14455b6a648436424846d2d182b3780ec2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEK6ZEZL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0dj5QTGL1OqLrBeCwcjLk6IFXPrPT%2BsGkNmu8yBWWEgIhALki%2BfZvyLb%2FX9eymjrbVXRHeBuVHl1zXG1RTKxoYj53Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwRqAxaet7u8fcOMGQq3AMGhJu1XtvqbuJSZappHxoBK%2Bjs%2B7i%2F7StoeOxwvKssGGoyGzOkJPYffVun9a7sX0V3aEHxfPTb4pcEE%2BO7vcnw8cRQ9aLRM5YGisWlLtr0HWwhCmMNYMIfYarAyABNtx4MSqzLGeS72HgNbZCZsvUWZ4YlPoq1h1do2iGHaTu0DX0254qeqGJQkiUIeH88BmE8OmlkFUmYmT0NOuy2xk9D3paTpXvJFE5mYLZsaXmm4B6P9uetbA0xqTd33SMfVVrlDu9y5JRacjw%2B4vkqibO3STHCOKnJfNktq2mKAKQFJr048N0At%2FYIieoLZNKjEmmHJeJwYJt4BpSScGU%2FsFOhpsS7rcynB%2FtO9BO8hnneXVhU%2B6w1kfq%2F2ApVz0QDWaB0crhjPtpwhZYnGRrMXoy%2BaCp0jBWYywhaD53%2FC%2FqH7EjIhqcOASgTvrs1T1OCnddqhR4hJ0Syl8SoAVl6r58tLNpxyEzD9P%2B2p3qnqZJ5PC2D9tYJiuYez8ySJw4GiY6lRGDks6LeOSqZbrmRdFZdNzoIECFFP%2FSlb56Z0ssskr7N5WuR2OUlL6n4uFfvAtyT3aAGoiKoYjO%2BiHhMy5tZnaR6ZK%2FOnAfn9PpTEQfL8cnHAYyedBylBxDl2TD9j4jEBjqkAXQqvZjaOS18fCyB60G3nACwcukS0vaatpdgDFcIfw5qPLHex6qan%2BAjmzx5epKXvbrLQerZzsBqu0JBm%2FkvLAk8jMdYstly2Pim%2FxHc638zIxWPMXjUgkLbpPSn6yFZTgdyhzzq1%2BoDxCf%2BjqDEd3ylxl6ut1WmKU7kQTTYR%2Fx4mo954vXDNUbp%2Fsl3QMI6E9O7bIRsuyrcAebjP2lc6fxmEp3Q&X-Amz-Signature=fdfc25b22b246b2ae37bf2a2e3aa0564053f107717b2c322187734a81681eb85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEK6ZEZL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0dj5QTGL1OqLrBeCwcjLk6IFXPrPT%2BsGkNmu8yBWWEgIhALki%2BfZvyLb%2FX9eymjrbVXRHeBuVHl1zXG1RTKxoYj53Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwRqAxaet7u8fcOMGQq3AMGhJu1XtvqbuJSZappHxoBK%2Bjs%2B7i%2F7StoeOxwvKssGGoyGzOkJPYffVun9a7sX0V3aEHxfPTb4pcEE%2BO7vcnw8cRQ9aLRM5YGisWlLtr0HWwhCmMNYMIfYarAyABNtx4MSqzLGeS72HgNbZCZsvUWZ4YlPoq1h1do2iGHaTu0DX0254qeqGJQkiUIeH88BmE8OmlkFUmYmT0NOuy2xk9D3paTpXvJFE5mYLZsaXmm4B6P9uetbA0xqTd33SMfVVrlDu9y5JRacjw%2B4vkqibO3STHCOKnJfNktq2mKAKQFJr048N0At%2FYIieoLZNKjEmmHJeJwYJt4BpSScGU%2FsFOhpsS7rcynB%2FtO9BO8hnneXVhU%2B6w1kfq%2F2ApVz0QDWaB0crhjPtpwhZYnGRrMXoy%2BaCp0jBWYywhaD53%2FC%2FqH7EjIhqcOASgTvrs1T1OCnddqhR4hJ0Syl8SoAVl6r58tLNpxyEzD9P%2B2p3qnqZJ5PC2D9tYJiuYez8ySJw4GiY6lRGDks6LeOSqZbrmRdFZdNzoIECFFP%2FSlb56Z0ssskr7N5WuR2OUlL6n4uFfvAtyT3aAGoiKoYjO%2BiHhMy5tZnaR6ZK%2FOnAfn9PpTEQfL8cnHAYyedBylBxDl2TD9j4jEBjqkAXQqvZjaOS18fCyB60G3nACwcukS0vaatpdgDFcIfw5qPLHex6qan%2BAjmzx5epKXvbrLQerZzsBqu0JBm%2FkvLAk8jMdYstly2Pim%2FxHc638zIxWPMXjUgkLbpPSn6yFZTgdyhzzq1%2BoDxCf%2BjqDEd3ylxl6ut1WmKU7kQTTYR%2Fx4mo954vXDNUbp%2Fsl3QMI6E9O7bIRsuyrcAebjP2lc6fxmEp3Q&X-Amz-Signature=2db921917504dbcb049e33dd74546e2a9a8535de432b5e7ce19d1b6d71eb4888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEK6ZEZL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0dj5QTGL1OqLrBeCwcjLk6IFXPrPT%2BsGkNmu8yBWWEgIhALki%2BfZvyLb%2FX9eymjrbVXRHeBuVHl1zXG1RTKxoYj53Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwRqAxaet7u8fcOMGQq3AMGhJu1XtvqbuJSZappHxoBK%2Bjs%2B7i%2F7StoeOxwvKssGGoyGzOkJPYffVun9a7sX0V3aEHxfPTb4pcEE%2BO7vcnw8cRQ9aLRM5YGisWlLtr0HWwhCmMNYMIfYarAyABNtx4MSqzLGeS72HgNbZCZsvUWZ4YlPoq1h1do2iGHaTu0DX0254qeqGJQkiUIeH88BmE8OmlkFUmYmT0NOuy2xk9D3paTpXvJFE5mYLZsaXmm4B6P9uetbA0xqTd33SMfVVrlDu9y5JRacjw%2B4vkqibO3STHCOKnJfNktq2mKAKQFJr048N0At%2FYIieoLZNKjEmmHJeJwYJt4BpSScGU%2FsFOhpsS7rcynB%2FtO9BO8hnneXVhU%2B6w1kfq%2F2ApVz0QDWaB0crhjPtpwhZYnGRrMXoy%2BaCp0jBWYywhaD53%2FC%2FqH7EjIhqcOASgTvrs1T1OCnddqhR4hJ0Syl8SoAVl6r58tLNpxyEzD9P%2B2p3qnqZJ5PC2D9tYJiuYez8ySJw4GiY6lRGDks6LeOSqZbrmRdFZdNzoIECFFP%2FSlb56Z0ssskr7N5WuR2OUlL6n4uFfvAtyT3aAGoiKoYjO%2BiHhMy5tZnaR6ZK%2FOnAfn9PpTEQfL8cnHAYyedBylBxDl2TD9j4jEBjqkAXQqvZjaOS18fCyB60G3nACwcukS0vaatpdgDFcIfw5qPLHex6qan%2BAjmzx5epKXvbrLQerZzsBqu0JBm%2FkvLAk8jMdYstly2Pim%2FxHc638zIxWPMXjUgkLbpPSn6yFZTgdyhzzq1%2BoDxCf%2BjqDEd3ylxl6ut1WmKU7kQTTYR%2Fx4mo954vXDNUbp%2Fsl3QMI6E9O7bIRsuyrcAebjP2lc6fxmEp3Q&X-Amz-Signature=82bdd538d14991069a80220af2e2c884b564aaa75fe737b4cf8944b36f2d3952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEK6ZEZL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0dj5QTGL1OqLrBeCwcjLk6IFXPrPT%2BsGkNmu8yBWWEgIhALki%2BfZvyLb%2FX9eymjrbVXRHeBuVHl1zXG1RTKxoYj53Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwRqAxaet7u8fcOMGQq3AMGhJu1XtvqbuJSZappHxoBK%2Bjs%2B7i%2F7StoeOxwvKssGGoyGzOkJPYffVun9a7sX0V3aEHxfPTb4pcEE%2BO7vcnw8cRQ9aLRM5YGisWlLtr0HWwhCmMNYMIfYarAyABNtx4MSqzLGeS72HgNbZCZsvUWZ4YlPoq1h1do2iGHaTu0DX0254qeqGJQkiUIeH88BmE8OmlkFUmYmT0NOuy2xk9D3paTpXvJFE5mYLZsaXmm4B6P9uetbA0xqTd33SMfVVrlDu9y5JRacjw%2B4vkqibO3STHCOKnJfNktq2mKAKQFJr048N0At%2FYIieoLZNKjEmmHJeJwYJt4BpSScGU%2FsFOhpsS7rcynB%2FtO9BO8hnneXVhU%2B6w1kfq%2F2ApVz0QDWaB0crhjPtpwhZYnGRrMXoy%2BaCp0jBWYywhaD53%2FC%2FqH7EjIhqcOASgTvrs1T1OCnddqhR4hJ0Syl8SoAVl6r58tLNpxyEzD9P%2B2p3qnqZJ5PC2D9tYJiuYez8ySJw4GiY6lRGDks6LeOSqZbrmRdFZdNzoIECFFP%2FSlb56Z0ssskr7N5WuR2OUlL6n4uFfvAtyT3aAGoiKoYjO%2BiHhMy5tZnaR6ZK%2FOnAfn9PpTEQfL8cnHAYyedBylBxDl2TD9j4jEBjqkAXQqvZjaOS18fCyB60G3nACwcukS0vaatpdgDFcIfw5qPLHex6qan%2BAjmzx5epKXvbrLQerZzsBqu0JBm%2FkvLAk8jMdYstly2Pim%2FxHc638zIxWPMXjUgkLbpPSn6yFZTgdyhzzq1%2BoDxCf%2BjqDEd3ylxl6ut1WmKU7kQTTYR%2Fx4mo954vXDNUbp%2Fsl3QMI6E9O7bIRsuyrcAebjP2lc6fxmEp3Q&X-Amz-Signature=f1036569c525a59022b92d223fbe2107dce76fa746201a845957c670e025c1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEK6ZEZL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0dj5QTGL1OqLrBeCwcjLk6IFXPrPT%2BsGkNmu8yBWWEgIhALki%2BfZvyLb%2FX9eymjrbVXRHeBuVHl1zXG1RTKxoYj53Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwRqAxaet7u8fcOMGQq3AMGhJu1XtvqbuJSZappHxoBK%2Bjs%2B7i%2F7StoeOxwvKssGGoyGzOkJPYffVun9a7sX0V3aEHxfPTb4pcEE%2BO7vcnw8cRQ9aLRM5YGisWlLtr0HWwhCmMNYMIfYarAyABNtx4MSqzLGeS72HgNbZCZsvUWZ4YlPoq1h1do2iGHaTu0DX0254qeqGJQkiUIeH88BmE8OmlkFUmYmT0NOuy2xk9D3paTpXvJFE5mYLZsaXmm4B6P9uetbA0xqTd33SMfVVrlDu9y5JRacjw%2B4vkqibO3STHCOKnJfNktq2mKAKQFJr048N0At%2FYIieoLZNKjEmmHJeJwYJt4BpSScGU%2FsFOhpsS7rcynB%2FtO9BO8hnneXVhU%2B6w1kfq%2F2ApVz0QDWaB0crhjPtpwhZYnGRrMXoy%2BaCp0jBWYywhaD53%2FC%2FqH7EjIhqcOASgTvrs1T1OCnddqhR4hJ0Syl8SoAVl6r58tLNpxyEzD9P%2B2p3qnqZJ5PC2D9tYJiuYez8ySJw4GiY6lRGDks6LeOSqZbrmRdFZdNzoIECFFP%2FSlb56Z0ssskr7N5WuR2OUlL6n4uFfvAtyT3aAGoiKoYjO%2BiHhMy5tZnaR6ZK%2FOnAfn9PpTEQfL8cnHAYyedBylBxDl2TD9j4jEBjqkAXQqvZjaOS18fCyB60G3nACwcukS0vaatpdgDFcIfw5qPLHex6qan%2BAjmzx5epKXvbrLQerZzsBqu0JBm%2FkvLAk8jMdYstly2Pim%2FxHc638zIxWPMXjUgkLbpPSn6yFZTgdyhzzq1%2BoDxCf%2BjqDEd3ylxl6ut1WmKU7kQTTYR%2Fx4mo954vXDNUbp%2Fsl3QMI6E9O7bIRsuyrcAebjP2lc6fxmEp3Q&X-Amz-Signature=61d4c02bfbc06b680484d94d5b3343e3a49bc62f3fe3e10637d7c5a93c9ceddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
