---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHZK7XVB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDyfxMXk0f4vJBG%2FxYZ0pyMbS9NqXm46w5eQ2TOyKv1iwIhAOxxy34Rim6bz%2FMJ1lKzvYtS9sVWX1cQAXfAF9LkBd4ZKv8DCCEQABoMNjM3NDIzMTgzODA1IgwGtIYaPdkNlz0I6PEq3APxRhN3a4gfxAE1jKqIM7BmQt3dqSXmVy%2F7DYNZRiNPwWFwcdYk3qx4Gaj3itjgr5UKJeD7tSzIo4gcQsEMvUobRzCAVu6kQPRn%2BkfCm%2FPFfzxZfzkVJD4ZZAZT%2BKILfCZ6Y7PA2lANwBK7L4545r%2BetyzgFjIhyrpeEAjiXsf8La8f%2Fud0sHX%2BylZXtAKHvxkdJai5WlLsRL%2Bzek5mTp%2BIXijsEgpN4wwNrmaLUeowdac%2BEq4zkFagzPwMzMo8L3OWl6YzoUCmd6EwO2mKSJntlMAQufiSkU3sGoyg2O%2Foduu7OhqzYIhG7%2FsANmDnBjvphZgAY8ovbYo%2BVU4do04wo0yiGkTf3ZedapjFYlps%2B7A1AtXnQ1tS%2BsMUT4aCYq1XTuDj22SqdL5XG%2BtiAkRqKbPUSG6FwWgg%2B8kYlP8bA8JKcNu7zVAISEPe8N8UfUIm%2FCKckr6etUc1UaOJB0a4Xvzq4uJPW61TN7uGyUzhSLPeQ%2Bx2KF3K3FZyZQuTh8C3TXQlgibF5sJ0bCruwbiYfuCxrWCng0WAQmz%2Bep0gVrNrsYr6u1%2FbeVK1qszJ3j0EIqFt30CIDp7z9WtuFVHp9w3Jt3ginmxgC1PhrabQRcqZ6IGOcBEbSaa8UDCj7YPUBjqkAbiLbKOWyLDt%2F8R7TMOUBF%2BAGtDRAUCmvsLMw66KtaVgslLKP5bd0DUc%2Fe9ABx5FL6rLoJ4zH1njS7BcaCgbrm1MSZFEOdJHvao%2FjiftJtBWSbVPl5YyBRokRuDdqK1FCliCTDFPHqTsQ2NaDhqryQVZ5V3BELQoIXqXFxCukD72UiXWJtSN6fonhrhbgWN2GO%2Fzkwp%2FDXOS7lwsILhlVpcUlU45&X-Amz-Signature=5103ffac80ee363ad61ce3d2280d90ff128c42921251e4c37a0a5c37a257154c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHZK7XVB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDyfxMXk0f4vJBG%2FxYZ0pyMbS9NqXm46w5eQ2TOyKv1iwIhAOxxy34Rim6bz%2FMJ1lKzvYtS9sVWX1cQAXfAF9LkBd4ZKv8DCCEQABoMNjM3NDIzMTgzODA1IgwGtIYaPdkNlz0I6PEq3APxRhN3a4gfxAE1jKqIM7BmQt3dqSXmVy%2F7DYNZRiNPwWFwcdYk3qx4Gaj3itjgr5UKJeD7tSzIo4gcQsEMvUobRzCAVu6kQPRn%2BkfCm%2FPFfzxZfzkVJD4ZZAZT%2BKILfCZ6Y7PA2lANwBK7L4545r%2BetyzgFjIhyrpeEAjiXsf8La8f%2Fud0sHX%2BylZXtAKHvxkdJai5WlLsRL%2Bzek5mTp%2BIXijsEgpN4wwNrmaLUeowdac%2BEq4zkFagzPwMzMo8L3OWl6YzoUCmd6EwO2mKSJntlMAQufiSkU3sGoyg2O%2Foduu7OhqzYIhG7%2FsANmDnBjvphZgAY8ovbYo%2BVU4do04wo0yiGkTf3ZedapjFYlps%2B7A1AtXnQ1tS%2BsMUT4aCYq1XTuDj22SqdL5XG%2BtiAkRqKbPUSG6FwWgg%2B8kYlP8bA8JKcNu7zVAISEPe8N8UfUIm%2FCKckr6etUc1UaOJB0a4Xvzq4uJPW61TN7uGyUzhSLPeQ%2Bx2KF3K3FZyZQuTh8C3TXQlgibF5sJ0bCruwbiYfuCxrWCng0WAQmz%2Bep0gVrNrsYr6u1%2FbeVK1qszJ3j0EIqFt30CIDp7z9WtuFVHp9w3Jt3ginmxgC1PhrabQRcqZ6IGOcBEbSaa8UDCj7YPUBjqkAbiLbKOWyLDt%2F8R7TMOUBF%2BAGtDRAUCmvsLMw66KtaVgslLKP5bd0DUc%2Fe9ABx5FL6rLoJ4zH1njS7BcaCgbrm1MSZFEOdJHvao%2FjiftJtBWSbVPl5YyBRokRuDdqK1FCliCTDFPHqTsQ2NaDhqryQVZ5V3BELQoIXqXFxCukD72UiXWJtSN6fonhrhbgWN2GO%2Fzkwp%2FDXOS7lwsILhlVpcUlU45&X-Amz-Signature=11b958e67eed0e0adcef8c277d861f771e1b7ef61054f15fdbce53b80358947e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHZK7XVB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDyfxMXk0f4vJBG%2FxYZ0pyMbS9NqXm46w5eQ2TOyKv1iwIhAOxxy34Rim6bz%2FMJ1lKzvYtS9sVWX1cQAXfAF9LkBd4ZKv8DCCEQABoMNjM3NDIzMTgzODA1IgwGtIYaPdkNlz0I6PEq3APxRhN3a4gfxAE1jKqIM7BmQt3dqSXmVy%2F7DYNZRiNPwWFwcdYk3qx4Gaj3itjgr5UKJeD7tSzIo4gcQsEMvUobRzCAVu6kQPRn%2BkfCm%2FPFfzxZfzkVJD4ZZAZT%2BKILfCZ6Y7PA2lANwBK7L4545r%2BetyzgFjIhyrpeEAjiXsf8La8f%2Fud0sHX%2BylZXtAKHvxkdJai5WlLsRL%2Bzek5mTp%2BIXijsEgpN4wwNrmaLUeowdac%2BEq4zkFagzPwMzMo8L3OWl6YzoUCmd6EwO2mKSJntlMAQufiSkU3sGoyg2O%2Foduu7OhqzYIhG7%2FsANmDnBjvphZgAY8ovbYo%2BVU4do04wo0yiGkTf3ZedapjFYlps%2B7A1AtXnQ1tS%2BsMUT4aCYq1XTuDj22SqdL5XG%2BtiAkRqKbPUSG6FwWgg%2B8kYlP8bA8JKcNu7zVAISEPe8N8UfUIm%2FCKckr6etUc1UaOJB0a4Xvzq4uJPW61TN7uGyUzhSLPeQ%2Bx2KF3K3FZyZQuTh8C3TXQlgibF5sJ0bCruwbiYfuCxrWCng0WAQmz%2Bep0gVrNrsYr6u1%2FbeVK1qszJ3j0EIqFt30CIDp7z9WtuFVHp9w3Jt3ginmxgC1PhrabQRcqZ6IGOcBEbSaa8UDCj7YPUBjqkAbiLbKOWyLDt%2F8R7TMOUBF%2BAGtDRAUCmvsLMw66KtaVgslLKP5bd0DUc%2Fe9ABx5FL6rLoJ4zH1njS7BcaCgbrm1MSZFEOdJHvao%2FjiftJtBWSbVPl5YyBRokRuDdqK1FCliCTDFPHqTsQ2NaDhqryQVZ5V3BELQoIXqXFxCukD72UiXWJtSN6fonhrhbgWN2GO%2Fzkwp%2FDXOS7lwsILhlVpcUlU45&X-Amz-Signature=c3fe8496d291aefead2e268a29b64c3a30cbff9ba460b86db37f10e5d215b10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHZK7XVB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDyfxMXk0f4vJBG%2FxYZ0pyMbS9NqXm46w5eQ2TOyKv1iwIhAOxxy34Rim6bz%2FMJ1lKzvYtS9sVWX1cQAXfAF9LkBd4ZKv8DCCEQABoMNjM3NDIzMTgzODA1IgwGtIYaPdkNlz0I6PEq3APxRhN3a4gfxAE1jKqIM7BmQt3dqSXmVy%2F7DYNZRiNPwWFwcdYk3qx4Gaj3itjgr5UKJeD7tSzIo4gcQsEMvUobRzCAVu6kQPRn%2BkfCm%2FPFfzxZfzkVJD4ZZAZT%2BKILfCZ6Y7PA2lANwBK7L4545r%2BetyzgFjIhyrpeEAjiXsf8La8f%2Fud0sHX%2BylZXtAKHvxkdJai5WlLsRL%2Bzek5mTp%2BIXijsEgpN4wwNrmaLUeowdac%2BEq4zkFagzPwMzMo8L3OWl6YzoUCmd6EwO2mKSJntlMAQufiSkU3sGoyg2O%2Foduu7OhqzYIhG7%2FsANmDnBjvphZgAY8ovbYo%2BVU4do04wo0yiGkTf3ZedapjFYlps%2B7A1AtXnQ1tS%2BsMUT4aCYq1XTuDj22SqdL5XG%2BtiAkRqKbPUSG6FwWgg%2B8kYlP8bA8JKcNu7zVAISEPe8N8UfUIm%2FCKckr6etUc1UaOJB0a4Xvzq4uJPW61TN7uGyUzhSLPeQ%2Bx2KF3K3FZyZQuTh8C3TXQlgibF5sJ0bCruwbiYfuCxrWCng0WAQmz%2Bep0gVrNrsYr6u1%2FbeVK1qszJ3j0EIqFt30CIDp7z9WtuFVHp9w3Jt3ginmxgC1PhrabQRcqZ6IGOcBEbSaa8UDCj7YPUBjqkAbiLbKOWyLDt%2F8R7TMOUBF%2BAGtDRAUCmvsLMw66KtaVgslLKP5bd0DUc%2Fe9ABx5FL6rLoJ4zH1njS7BcaCgbrm1MSZFEOdJHvao%2FjiftJtBWSbVPl5YyBRokRuDdqK1FCliCTDFPHqTsQ2NaDhqryQVZ5V3BELQoIXqXFxCukD72UiXWJtSN6fonhrhbgWN2GO%2Fzkwp%2FDXOS7lwsILhlVpcUlU45&X-Amz-Signature=a018e99c31964b53a75ffd8bf3e6b8d6f870119e03a5fdb8c085377cda1d30f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHZK7XVB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDyfxMXk0f4vJBG%2FxYZ0pyMbS9NqXm46w5eQ2TOyKv1iwIhAOxxy34Rim6bz%2FMJ1lKzvYtS9sVWX1cQAXfAF9LkBd4ZKv8DCCEQABoMNjM3NDIzMTgzODA1IgwGtIYaPdkNlz0I6PEq3APxRhN3a4gfxAE1jKqIM7BmQt3dqSXmVy%2F7DYNZRiNPwWFwcdYk3qx4Gaj3itjgr5UKJeD7tSzIo4gcQsEMvUobRzCAVu6kQPRn%2BkfCm%2FPFfzxZfzkVJD4ZZAZT%2BKILfCZ6Y7PA2lANwBK7L4545r%2BetyzgFjIhyrpeEAjiXsf8La8f%2Fud0sHX%2BylZXtAKHvxkdJai5WlLsRL%2Bzek5mTp%2BIXijsEgpN4wwNrmaLUeowdac%2BEq4zkFagzPwMzMo8L3OWl6YzoUCmd6EwO2mKSJntlMAQufiSkU3sGoyg2O%2Foduu7OhqzYIhG7%2FsANmDnBjvphZgAY8ovbYo%2BVU4do04wo0yiGkTf3ZedapjFYlps%2B7A1AtXnQ1tS%2BsMUT4aCYq1XTuDj22SqdL5XG%2BtiAkRqKbPUSG6FwWgg%2B8kYlP8bA8JKcNu7zVAISEPe8N8UfUIm%2FCKckr6etUc1UaOJB0a4Xvzq4uJPW61TN7uGyUzhSLPeQ%2Bx2KF3K3FZyZQuTh8C3TXQlgibF5sJ0bCruwbiYfuCxrWCng0WAQmz%2Bep0gVrNrsYr6u1%2FbeVK1qszJ3j0EIqFt30CIDp7z9WtuFVHp9w3Jt3ginmxgC1PhrabQRcqZ6IGOcBEbSaa8UDCj7YPUBjqkAbiLbKOWyLDt%2F8R7TMOUBF%2BAGtDRAUCmvsLMw66KtaVgslLKP5bd0DUc%2Fe9ABx5FL6rLoJ4zH1njS7BcaCgbrm1MSZFEOdJHvao%2FjiftJtBWSbVPl5YyBRokRuDdqK1FCliCTDFPHqTsQ2NaDhqryQVZ5V3BELQoIXqXFxCukD72UiXWJtSN6fonhrhbgWN2GO%2Fzkwp%2FDXOS7lwsILhlVpcUlU45&X-Amz-Signature=82d53d12c9e5a4f58c063c2e8209fbc01c53956a6e1d81c78c0b7218836cdbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHZK7XVB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDyfxMXk0f4vJBG%2FxYZ0pyMbS9NqXm46w5eQ2TOyKv1iwIhAOxxy34Rim6bz%2FMJ1lKzvYtS9sVWX1cQAXfAF9LkBd4ZKv8DCCEQABoMNjM3NDIzMTgzODA1IgwGtIYaPdkNlz0I6PEq3APxRhN3a4gfxAE1jKqIM7BmQt3dqSXmVy%2F7DYNZRiNPwWFwcdYk3qx4Gaj3itjgr5UKJeD7tSzIo4gcQsEMvUobRzCAVu6kQPRn%2BkfCm%2FPFfzxZfzkVJD4ZZAZT%2BKILfCZ6Y7PA2lANwBK7L4545r%2BetyzgFjIhyrpeEAjiXsf8La8f%2Fud0sHX%2BylZXtAKHvxkdJai5WlLsRL%2Bzek5mTp%2BIXijsEgpN4wwNrmaLUeowdac%2BEq4zkFagzPwMzMo8L3OWl6YzoUCmd6EwO2mKSJntlMAQufiSkU3sGoyg2O%2Foduu7OhqzYIhG7%2FsANmDnBjvphZgAY8ovbYo%2BVU4do04wo0yiGkTf3ZedapjFYlps%2B7A1AtXnQ1tS%2BsMUT4aCYq1XTuDj22SqdL5XG%2BtiAkRqKbPUSG6FwWgg%2B8kYlP8bA8JKcNu7zVAISEPe8N8UfUIm%2FCKckr6etUc1UaOJB0a4Xvzq4uJPW61TN7uGyUzhSLPeQ%2Bx2KF3K3FZyZQuTh8C3TXQlgibF5sJ0bCruwbiYfuCxrWCng0WAQmz%2Bep0gVrNrsYr6u1%2FbeVK1qszJ3j0EIqFt30CIDp7z9WtuFVHp9w3Jt3ginmxgC1PhrabQRcqZ6IGOcBEbSaa8UDCj7YPUBjqkAbiLbKOWyLDt%2F8R7TMOUBF%2BAGtDRAUCmvsLMw66KtaVgslLKP5bd0DUc%2Fe9ABx5FL6rLoJ4zH1njS7BcaCgbrm1MSZFEOdJHvao%2FjiftJtBWSbVPl5YyBRokRuDdqK1FCliCTDFPHqTsQ2NaDhqryQVZ5V3BELQoIXqXFxCukD72UiXWJtSN6fonhrhbgWN2GO%2Fzkwp%2FDXOS7lwsILhlVpcUlU45&X-Amz-Signature=67ad394ef92858d5c0d1dc3906b825dd05b3b43c99a01020fda51c6b44e6a80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHZK7XVB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDyfxMXk0f4vJBG%2FxYZ0pyMbS9NqXm46w5eQ2TOyKv1iwIhAOxxy34Rim6bz%2FMJ1lKzvYtS9sVWX1cQAXfAF9LkBd4ZKv8DCCEQABoMNjM3NDIzMTgzODA1IgwGtIYaPdkNlz0I6PEq3APxRhN3a4gfxAE1jKqIM7BmQt3dqSXmVy%2F7DYNZRiNPwWFwcdYk3qx4Gaj3itjgr5UKJeD7tSzIo4gcQsEMvUobRzCAVu6kQPRn%2BkfCm%2FPFfzxZfzkVJD4ZZAZT%2BKILfCZ6Y7PA2lANwBK7L4545r%2BetyzgFjIhyrpeEAjiXsf8La8f%2Fud0sHX%2BylZXtAKHvxkdJai5WlLsRL%2Bzek5mTp%2BIXijsEgpN4wwNrmaLUeowdac%2BEq4zkFagzPwMzMo8L3OWl6YzoUCmd6EwO2mKSJntlMAQufiSkU3sGoyg2O%2Foduu7OhqzYIhG7%2FsANmDnBjvphZgAY8ovbYo%2BVU4do04wo0yiGkTf3ZedapjFYlps%2B7A1AtXnQ1tS%2BsMUT4aCYq1XTuDj22SqdL5XG%2BtiAkRqKbPUSG6FwWgg%2B8kYlP8bA8JKcNu7zVAISEPe8N8UfUIm%2FCKckr6etUc1UaOJB0a4Xvzq4uJPW61TN7uGyUzhSLPeQ%2Bx2KF3K3FZyZQuTh8C3TXQlgibF5sJ0bCruwbiYfuCxrWCng0WAQmz%2Bep0gVrNrsYr6u1%2FbeVK1qszJ3j0EIqFt30CIDp7z9WtuFVHp9w3Jt3ginmxgC1PhrabQRcqZ6IGOcBEbSaa8UDCj7YPUBjqkAbiLbKOWyLDt%2F8R7TMOUBF%2BAGtDRAUCmvsLMw66KtaVgslLKP5bd0DUc%2Fe9ABx5FL6rLoJ4zH1njS7BcaCgbrm1MSZFEOdJHvao%2FjiftJtBWSbVPl5YyBRokRuDdqK1FCliCTDFPHqTsQ2NaDhqryQVZ5V3BELQoIXqXFxCukD72UiXWJtSN6fonhrhbgWN2GO%2Fzkwp%2FDXOS7lwsILhlVpcUlU45&X-Amz-Signature=4f192c3e748274009c050838a89be663ceefaff9aee7ba022d2027fb791cde08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHZK7XVB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDyfxMXk0f4vJBG%2FxYZ0pyMbS9NqXm46w5eQ2TOyKv1iwIhAOxxy34Rim6bz%2FMJ1lKzvYtS9sVWX1cQAXfAF9LkBd4ZKv8DCCEQABoMNjM3NDIzMTgzODA1IgwGtIYaPdkNlz0I6PEq3APxRhN3a4gfxAE1jKqIM7BmQt3dqSXmVy%2F7DYNZRiNPwWFwcdYk3qx4Gaj3itjgr5UKJeD7tSzIo4gcQsEMvUobRzCAVu6kQPRn%2BkfCm%2FPFfzxZfzkVJD4ZZAZT%2BKILfCZ6Y7PA2lANwBK7L4545r%2BetyzgFjIhyrpeEAjiXsf8La8f%2Fud0sHX%2BylZXtAKHvxkdJai5WlLsRL%2Bzek5mTp%2BIXijsEgpN4wwNrmaLUeowdac%2BEq4zkFagzPwMzMo8L3OWl6YzoUCmd6EwO2mKSJntlMAQufiSkU3sGoyg2O%2Foduu7OhqzYIhG7%2FsANmDnBjvphZgAY8ovbYo%2BVU4do04wo0yiGkTf3ZedapjFYlps%2B7A1AtXnQ1tS%2BsMUT4aCYq1XTuDj22SqdL5XG%2BtiAkRqKbPUSG6FwWgg%2B8kYlP8bA8JKcNu7zVAISEPe8N8UfUIm%2FCKckr6etUc1UaOJB0a4Xvzq4uJPW61TN7uGyUzhSLPeQ%2Bx2KF3K3FZyZQuTh8C3TXQlgibF5sJ0bCruwbiYfuCxrWCng0WAQmz%2Bep0gVrNrsYr6u1%2FbeVK1qszJ3j0EIqFt30CIDp7z9WtuFVHp9w3Jt3ginmxgC1PhrabQRcqZ6IGOcBEbSaa8UDCj7YPUBjqkAbiLbKOWyLDt%2F8R7TMOUBF%2BAGtDRAUCmvsLMw66KtaVgslLKP5bd0DUc%2Fe9ABx5FL6rLoJ4zH1njS7BcaCgbrm1MSZFEOdJHvao%2FjiftJtBWSbVPl5YyBRokRuDdqK1FCliCTDFPHqTsQ2NaDhqryQVZ5V3BELQoIXqXFxCukD72UiXWJtSN6fonhrhbgWN2GO%2Fzkwp%2FDXOS7lwsILhlVpcUlU45&X-Amz-Signature=f52950eaf58ad8bc6453e5264888635af6464987f3f8e8a49645743a5fd9d995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
