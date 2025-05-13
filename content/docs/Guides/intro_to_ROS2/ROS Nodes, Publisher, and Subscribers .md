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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7ZA42H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFfdfU67Q0%2BRj9SJrLb5Hp4C5TqPDVNZ09bNeNGHuogAAiEA5HSVUqdX6lY7w7CwC9B80F04TYvr9GiMsz4214eVeTkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFehkxGmrKUrf2lyhCrcA2lCBslTkQRRSw5jKr3L81dvfXIoQ5EuWOajiNWd8iVdsW0Tvhmi0FjVZXF%2FhcQuN%2FsW9pqUG8RrRhwUvCJfHkMlICb5xFb5d6OL%2FrkDQMFGijbYuBHoqI4m2cldlFT4jGqo7wvQHdJ%2BLPJTk61GzA1dcTIlmdnPVK2wfJgOeCyQwpFNzkUN9sUlSiYy7TE%2FIT30H05wVTd7EWTJnARge7BWtCRBnd%2BUBxMmqoR1TWa8GlsYe6fPA2zazU5ANC0CIAA6%2B4d%2BUtqErT091s4VMg2taY2eXwJqtuPJh2sle9%2FjfyzIZB9mmp74G4zKCt%2BFxJo114Wp66I8LFym%2BNqTR%2FRoedKEuY9GJkpl9lPLVfpannYTV6DGb%2BHTXO3BWo4UM4o%2B%2FNlcMaZySbJmRnEcn1yvyD90gkCXHBUCxVWCkk8MGR0YCVtLH8drolp4y7GprOeFWxVUEV21dmPxrlQRUPZBZTjCqnOdlbRzmgCCfnCqXoSB4DfA9OHvBqkAbEnkJu%2BmbKrQq8gHVCLocvcQ%2B4ACffsnyXPZsx44XfzDIqReF6XeTjvJGAu%2BPmxZJ74B8oG9Cd4ywhXPAI%2FLLX2HAV6OK0U14bHPmJ14OOqSfYI5%2BWmG9%2BZNGMWtTKrWMM%2Fxi8EGOqUBb6eQo0eNneXmQSgrZtFf7QMr8zs%2BgaX9Nl2II2IU%2BCEO%2BV5ZKGjjs5L%2FTKyGsIygdTy73xHzV6TpOENXzCPGpKkiyLJRmVIKs6qt14zsgPvYnzLgxuPl8e17WGdmzP1rjGgkNNaWsY%2BkhrCNjj6HQfdlIEK9EvRaDp%2BkqPyrqHt7MqtxmN3j9DKPZ1aLr7z1N70A3tu4nTU88SD4bQZRf582lPBE&X-Amz-Signature=bca4f9773267ca29146a1d4327fb2143ec2994dcbf4ce47d44b4bd57502ed29d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7ZA42H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFfdfU67Q0%2BRj9SJrLb5Hp4C5TqPDVNZ09bNeNGHuogAAiEA5HSVUqdX6lY7w7CwC9B80F04TYvr9GiMsz4214eVeTkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFehkxGmrKUrf2lyhCrcA2lCBslTkQRRSw5jKr3L81dvfXIoQ5EuWOajiNWd8iVdsW0Tvhmi0FjVZXF%2FhcQuN%2FsW9pqUG8RrRhwUvCJfHkMlICb5xFb5d6OL%2FrkDQMFGijbYuBHoqI4m2cldlFT4jGqo7wvQHdJ%2BLPJTk61GzA1dcTIlmdnPVK2wfJgOeCyQwpFNzkUN9sUlSiYy7TE%2FIT30H05wVTd7EWTJnARge7BWtCRBnd%2BUBxMmqoR1TWa8GlsYe6fPA2zazU5ANC0CIAA6%2B4d%2BUtqErT091s4VMg2taY2eXwJqtuPJh2sle9%2FjfyzIZB9mmp74G4zKCt%2BFxJo114Wp66I8LFym%2BNqTR%2FRoedKEuY9GJkpl9lPLVfpannYTV6DGb%2BHTXO3BWo4UM4o%2B%2FNlcMaZySbJmRnEcn1yvyD90gkCXHBUCxVWCkk8MGR0YCVtLH8drolp4y7GprOeFWxVUEV21dmPxrlQRUPZBZTjCqnOdlbRzmgCCfnCqXoSB4DfA9OHvBqkAbEnkJu%2BmbKrQq8gHVCLocvcQ%2B4ACffsnyXPZsx44XfzDIqReF6XeTjvJGAu%2BPmxZJ74B8oG9Cd4ywhXPAI%2FLLX2HAV6OK0U14bHPmJ14OOqSfYI5%2BWmG9%2BZNGMWtTKrWMM%2Fxi8EGOqUBb6eQo0eNneXmQSgrZtFf7QMr8zs%2BgaX9Nl2II2IU%2BCEO%2BV5ZKGjjs5L%2FTKyGsIygdTy73xHzV6TpOENXzCPGpKkiyLJRmVIKs6qt14zsgPvYnzLgxuPl8e17WGdmzP1rjGgkNNaWsY%2BkhrCNjj6HQfdlIEK9EvRaDp%2BkqPyrqHt7MqtxmN3j9DKPZ1aLr7z1N70A3tu4nTU88SD4bQZRf582lPBE&X-Amz-Signature=5f2514b5ada2ebbd3be8c9b0694d7d5b1ba57e237e506ac47f29fff3999fc846&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7ZA42H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFfdfU67Q0%2BRj9SJrLb5Hp4C5TqPDVNZ09bNeNGHuogAAiEA5HSVUqdX6lY7w7CwC9B80F04TYvr9GiMsz4214eVeTkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFehkxGmrKUrf2lyhCrcA2lCBslTkQRRSw5jKr3L81dvfXIoQ5EuWOajiNWd8iVdsW0Tvhmi0FjVZXF%2FhcQuN%2FsW9pqUG8RrRhwUvCJfHkMlICb5xFb5d6OL%2FrkDQMFGijbYuBHoqI4m2cldlFT4jGqo7wvQHdJ%2BLPJTk61GzA1dcTIlmdnPVK2wfJgOeCyQwpFNzkUN9sUlSiYy7TE%2FIT30H05wVTd7EWTJnARge7BWtCRBnd%2BUBxMmqoR1TWa8GlsYe6fPA2zazU5ANC0CIAA6%2B4d%2BUtqErT091s4VMg2taY2eXwJqtuPJh2sle9%2FjfyzIZB9mmp74G4zKCt%2BFxJo114Wp66I8LFym%2BNqTR%2FRoedKEuY9GJkpl9lPLVfpannYTV6DGb%2BHTXO3BWo4UM4o%2B%2FNlcMaZySbJmRnEcn1yvyD90gkCXHBUCxVWCkk8MGR0YCVtLH8drolp4y7GprOeFWxVUEV21dmPxrlQRUPZBZTjCqnOdlbRzmgCCfnCqXoSB4DfA9OHvBqkAbEnkJu%2BmbKrQq8gHVCLocvcQ%2B4ACffsnyXPZsx44XfzDIqReF6XeTjvJGAu%2BPmxZJ74B8oG9Cd4ywhXPAI%2FLLX2HAV6OK0U14bHPmJ14OOqSfYI5%2BWmG9%2BZNGMWtTKrWMM%2Fxi8EGOqUBb6eQo0eNneXmQSgrZtFf7QMr8zs%2BgaX9Nl2II2IU%2BCEO%2BV5ZKGjjs5L%2FTKyGsIygdTy73xHzV6TpOENXzCPGpKkiyLJRmVIKs6qt14zsgPvYnzLgxuPl8e17WGdmzP1rjGgkNNaWsY%2BkhrCNjj6HQfdlIEK9EvRaDp%2BkqPyrqHt7MqtxmN3j9DKPZ1aLr7z1N70A3tu4nTU88SD4bQZRf582lPBE&X-Amz-Signature=97542f52ba1214b208338b03d8fb87cf14b78ebf4792e60859e80576290202ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7ZA42H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFfdfU67Q0%2BRj9SJrLb5Hp4C5TqPDVNZ09bNeNGHuogAAiEA5HSVUqdX6lY7w7CwC9B80F04TYvr9GiMsz4214eVeTkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFehkxGmrKUrf2lyhCrcA2lCBslTkQRRSw5jKr3L81dvfXIoQ5EuWOajiNWd8iVdsW0Tvhmi0FjVZXF%2FhcQuN%2FsW9pqUG8RrRhwUvCJfHkMlICb5xFb5d6OL%2FrkDQMFGijbYuBHoqI4m2cldlFT4jGqo7wvQHdJ%2BLPJTk61GzA1dcTIlmdnPVK2wfJgOeCyQwpFNzkUN9sUlSiYy7TE%2FIT30H05wVTd7EWTJnARge7BWtCRBnd%2BUBxMmqoR1TWa8GlsYe6fPA2zazU5ANC0CIAA6%2B4d%2BUtqErT091s4VMg2taY2eXwJqtuPJh2sle9%2FjfyzIZB9mmp74G4zKCt%2BFxJo114Wp66I8LFym%2BNqTR%2FRoedKEuY9GJkpl9lPLVfpannYTV6DGb%2BHTXO3BWo4UM4o%2B%2FNlcMaZySbJmRnEcn1yvyD90gkCXHBUCxVWCkk8MGR0YCVtLH8drolp4y7GprOeFWxVUEV21dmPxrlQRUPZBZTjCqnOdlbRzmgCCfnCqXoSB4DfA9OHvBqkAbEnkJu%2BmbKrQq8gHVCLocvcQ%2B4ACffsnyXPZsx44XfzDIqReF6XeTjvJGAu%2BPmxZJ74B8oG9Cd4ywhXPAI%2FLLX2HAV6OK0U14bHPmJ14OOqSfYI5%2BWmG9%2BZNGMWtTKrWMM%2Fxi8EGOqUBb6eQo0eNneXmQSgrZtFf7QMr8zs%2BgaX9Nl2II2IU%2BCEO%2BV5ZKGjjs5L%2FTKyGsIygdTy73xHzV6TpOENXzCPGpKkiyLJRmVIKs6qt14zsgPvYnzLgxuPl8e17WGdmzP1rjGgkNNaWsY%2BkhrCNjj6HQfdlIEK9EvRaDp%2BkqPyrqHt7MqtxmN3j9DKPZ1aLr7z1N70A3tu4nTU88SD4bQZRf582lPBE&X-Amz-Signature=b4b264bcb67b06809ad85c80faea83cb57cc8736d820bd3d03f12e353b2ae7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7ZA42H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFfdfU67Q0%2BRj9SJrLb5Hp4C5TqPDVNZ09bNeNGHuogAAiEA5HSVUqdX6lY7w7CwC9B80F04TYvr9GiMsz4214eVeTkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFehkxGmrKUrf2lyhCrcA2lCBslTkQRRSw5jKr3L81dvfXIoQ5EuWOajiNWd8iVdsW0Tvhmi0FjVZXF%2FhcQuN%2FsW9pqUG8RrRhwUvCJfHkMlICb5xFb5d6OL%2FrkDQMFGijbYuBHoqI4m2cldlFT4jGqo7wvQHdJ%2BLPJTk61GzA1dcTIlmdnPVK2wfJgOeCyQwpFNzkUN9sUlSiYy7TE%2FIT30H05wVTd7EWTJnARge7BWtCRBnd%2BUBxMmqoR1TWa8GlsYe6fPA2zazU5ANC0CIAA6%2B4d%2BUtqErT091s4VMg2taY2eXwJqtuPJh2sle9%2FjfyzIZB9mmp74G4zKCt%2BFxJo114Wp66I8LFym%2BNqTR%2FRoedKEuY9GJkpl9lPLVfpannYTV6DGb%2BHTXO3BWo4UM4o%2B%2FNlcMaZySbJmRnEcn1yvyD90gkCXHBUCxVWCkk8MGR0YCVtLH8drolp4y7GprOeFWxVUEV21dmPxrlQRUPZBZTjCqnOdlbRzmgCCfnCqXoSB4DfA9OHvBqkAbEnkJu%2BmbKrQq8gHVCLocvcQ%2B4ACffsnyXPZsx44XfzDIqReF6XeTjvJGAu%2BPmxZJ74B8oG9Cd4ywhXPAI%2FLLX2HAV6OK0U14bHPmJ14OOqSfYI5%2BWmG9%2BZNGMWtTKrWMM%2Fxi8EGOqUBb6eQo0eNneXmQSgrZtFf7QMr8zs%2BgaX9Nl2II2IU%2BCEO%2BV5ZKGjjs5L%2FTKyGsIygdTy73xHzV6TpOENXzCPGpKkiyLJRmVIKs6qt14zsgPvYnzLgxuPl8e17WGdmzP1rjGgkNNaWsY%2BkhrCNjj6HQfdlIEK9EvRaDp%2BkqPyrqHt7MqtxmN3j9DKPZ1aLr7z1N70A3tu4nTU88SD4bQZRf582lPBE&X-Amz-Signature=f70aeeeebd8d1b764a52f98164f9aad383e5e1b2a2335f72ed63e38016efd093&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7ZA42H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFfdfU67Q0%2BRj9SJrLb5Hp4C5TqPDVNZ09bNeNGHuogAAiEA5HSVUqdX6lY7w7CwC9B80F04TYvr9GiMsz4214eVeTkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFehkxGmrKUrf2lyhCrcA2lCBslTkQRRSw5jKr3L81dvfXIoQ5EuWOajiNWd8iVdsW0Tvhmi0FjVZXF%2FhcQuN%2FsW9pqUG8RrRhwUvCJfHkMlICb5xFb5d6OL%2FrkDQMFGijbYuBHoqI4m2cldlFT4jGqo7wvQHdJ%2BLPJTk61GzA1dcTIlmdnPVK2wfJgOeCyQwpFNzkUN9sUlSiYy7TE%2FIT30H05wVTd7EWTJnARge7BWtCRBnd%2BUBxMmqoR1TWa8GlsYe6fPA2zazU5ANC0CIAA6%2B4d%2BUtqErT091s4VMg2taY2eXwJqtuPJh2sle9%2FjfyzIZB9mmp74G4zKCt%2BFxJo114Wp66I8LFym%2BNqTR%2FRoedKEuY9GJkpl9lPLVfpannYTV6DGb%2BHTXO3BWo4UM4o%2B%2FNlcMaZySbJmRnEcn1yvyD90gkCXHBUCxVWCkk8MGR0YCVtLH8drolp4y7GprOeFWxVUEV21dmPxrlQRUPZBZTjCqnOdlbRzmgCCfnCqXoSB4DfA9OHvBqkAbEnkJu%2BmbKrQq8gHVCLocvcQ%2B4ACffsnyXPZsx44XfzDIqReF6XeTjvJGAu%2BPmxZJ74B8oG9Cd4ywhXPAI%2FLLX2HAV6OK0U14bHPmJ14OOqSfYI5%2BWmG9%2BZNGMWtTKrWMM%2Fxi8EGOqUBb6eQo0eNneXmQSgrZtFf7QMr8zs%2BgaX9Nl2II2IU%2BCEO%2BV5ZKGjjs5L%2FTKyGsIygdTy73xHzV6TpOENXzCPGpKkiyLJRmVIKs6qt14zsgPvYnzLgxuPl8e17WGdmzP1rjGgkNNaWsY%2BkhrCNjj6HQfdlIEK9EvRaDp%2BkqPyrqHt7MqtxmN3j9DKPZ1aLr7z1N70A3tu4nTU88SD4bQZRf582lPBE&X-Amz-Signature=c0a261c643721f6488b2cfece12a94eca6d7a8f6575381203b87675c4fae68ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7ZA42H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFfdfU67Q0%2BRj9SJrLb5Hp4C5TqPDVNZ09bNeNGHuogAAiEA5HSVUqdX6lY7w7CwC9B80F04TYvr9GiMsz4214eVeTkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFehkxGmrKUrf2lyhCrcA2lCBslTkQRRSw5jKr3L81dvfXIoQ5EuWOajiNWd8iVdsW0Tvhmi0FjVZXF%2FhcQuN%2FsW9pqUG8RrRhwUvCJfHkMlICb5xFb5d6OL%2FrkDQMFGijbYuBHoqI4m2cldlFT4jGqo7wvQHdJ%2BLPJTk61GzA1dcTIlmdnPVK2wfJgOeCyQwpFNzkUN9sUlSiYy7TE%2FIT30H05wVTd7EWTJnARge7BWtCRBnd%2BUBxMmqoR1TWa8GlsYe6fPA2zazU5ANC0CIAA6%2B4d%2BUtqErT091s4VMg2taY2eXwJqtuPJh2sle9%2FjfyzIZB9mmp74G4zKCt%2BFxJo114Wp66I8LFym%2BNqTR%2FRoedKEuY9GJkpl9lPLVfpannYTV6DGb%2BHTXO3BWo4UM4o%2B%2FNlcMaZySbJmRnEcn1yvyD90gkCXHBUCxVWCkk8MGR0YCVtLH8drolp4y7GprOeFWxVUEV21dmPxrlQRUPZBZTjCqnOdlbRzmgCCfnCqXoSB4DfA9OHvBqkAbEnkJu%2BmbKrQq8gHVCLocvcQ%2B4ACffsnyXPZsx44XfzDIqReF6XeTjvJGAu%2BPmxZJ74B8oG9Cd4ywhXPAI%2FLLX2HAV6OK0U14bHPmJ14OOqSfYI5%2BWmG9%2BZNGMWtTKrWMM%2Fxi8EGOqUBb6eQo0eNneXmQSgrZtFf7QMr8zs%2BgaX9Nl2II2IU%2BCEO%2BV5ZKGjjs5L%2FTKyGsIygdTy73xHzV6TpOENXzCPGpKkiyLJRmVIKs6qt14zsgPvYnzLgxuPl8e17WGdmzP1rjGgkNNaWsY%2BkhrCNjj6HQfdlIEK9EvRaDp%2BkqPyrqHt7MqtxmN3j9DKPZ1aLr7z1N70A3tu4nTU88SD4bQZRf582lPBE&X-Amz-Signature=0eb73af9b6644cec42f1477131116ea515e57fdd11eb5a1e19c1fd4108c241f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7ZA42H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFfdfU67Q0%2BRj9SJrLb5Hp4C5TqPDVNZ09bNeNGHuogAAiEA5HSVUqdX6lY7w7CwC9B80F04TYvr9GiMsz4214eVeTkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFehkxGmrKUrf2lyhCrcA2lCBslTkQRRSw5jKr3L81dvfXIoQ5EuWOajiNWd8iVdsW0Tvhmi0FjVZXF%2FhcQuN%2FsW9pqUG8RrRhwUvCJfHkMlICb5xFb5d6OL%2FrkDQMFGijbYuBHoqI4m2cldlFT4jGqo7wvQHdJ%2BLPJTk61GzA1dcTIlmdnPVK2wfJgOeCyQwpFNzkUN9sUlSiYy7TE%2FIT30H05wVTd7EWTJnARge7BWtCRBnd%2BUBxMmqoR1TWa8GlsYe6fPA2zazU5ANC0CIAA6%2B4d%2BUtqErT091s4VMg2taY2eXwJqtuPJh2sle9%2FjfyzIZB9mmp74G4zKCt%2BFxJo114Wp66I8LFym%2BNqTR%2FRoedKEuY9GJkpl9lPLVfpannYTV6DGb%2BHTXO3BWo4UM4o%2B%2FNlcMaZySbJmRnEcn1yvyD90gkCXHBUCxVWCkk8MGR0YCVtLH8drolp4y7GprOeFWxVUEV21dmPxrlQRUPZBZTjCqnOdlbRzmgCCfnCqXoSB4DfA9OHvBqkAbEnkJu%2BmbKrQq8gHVCLocvcQ%2B4ACffsnyXPZsx44XfzDIqReF6XeTjvJGAu%2BPmxZJ74B8oG9Cd4ywhXPAI%2FLLX2HAV6OK0U14bHPmJ14OOqSfYI5%2BWmG9%2BZNGMWtTKrWMM%2Fxi8EGOqUBb6eQo0eNneXmQSgrZtFf7QMr8zs%2BgaX9Nl2II2IU%2BCEO%2BV5ZKGjjs5L%2FTKyGsIygdTy73xHzV6TpOENXzCPGpKkiyLJRmVIKs6qt14zsgPvYnzLgxuPl8e17WGdmzP1rjGgkNNaWsY%2BkhrCNjj6HQfdlIEK9EvRaDp%2BkqPyrqHt7MqtxmN3j9DKPZ1aLr7z1N70A3tu4nTU88SD4bQZRf582lPBE&X-Amz-Signature=71e06e329b9d4d164e176649a16c69f30885efd7102e6dfb50ea9a4d72dafe00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
