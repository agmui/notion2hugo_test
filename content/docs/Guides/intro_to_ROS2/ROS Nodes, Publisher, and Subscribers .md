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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XDHT4A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCJRH5wzlJ11Oaf0lkzM8Ngl0KZuz9FRoClBJ8j2nRWBAIgWeLGMou%2Fd9u2OdbTRCShZHbi1wsNiFPpq11HwbxTDjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGgRAwzFgEk4Yf4beCrcA%2F5KTZKA7JYoZT%2BBUAPjTxGjSOd%2Benup0lhpPKnCixR3WPbFImNHqyZ4qZqs9Asm6vn8fc%2BeSTpzjpgCoR%2FKOW3uFwC%2FSBMqDOq9ySOGq8zyNbIci9Ozo0cy%2BzDE5Xnh%2F8a%2Fki20LZNV9tGRuC5qdtiENdK%2BbPppBSVSRIUPQJxTrKpZg2KOF7tKexrPpXLfRzU%2BjoVVSc9VzSqam%2FE%2BaUiBNVCyybhM6htO7wdzWZdNJyEcfD23DfOir8fEHh20Aj9ypSRMV0%2FqiAcNFijVJcIA4tpdqVqEvDH9dfTIxWw4K0FE7Tt1iINTBKGuSjiPaR%2FquxHtYlmkoWnLz8PH5Zr1%2FghKS1fGyA5Xo4A19yN%2F2rwhSsUDAm2gvirYBZqkfjrtyPTUO0jIzbEgjSCb%2BGtX5rhFbjWYmFhs9q2asINVUALOWRCifcultHVPFK7K2r2kz%2FCC0IJKhDDdEk%2BowqNPX4hpFpiwM0pqSt52WiRCaRVFNh5%2FGT0j5nZJLmyB1iZ42FrWYp1HB6cLCe6KEX92rsfULlmp5Y4DVTuee8AwJs8ietU%2BxQFjpIV%2BsVyFJ8S%2B9eNQSBKPL%2BkgDjcu40wXWORnk63JqW9iiO7tVU0uHssVGKF1VMZJYrUTMLCFg8IGOqUBCDsVbb2VZtsgGkXzUXHUwQYq8f7Xmhk3QWYxY0sNVttTVgTF4veeGtPjAqN8mbDPJxudqzIHPwKRiTcA3y72UGjQSqaK9%2FU3b7wCwSWjzAgxfxAVHBNEioRg5ztwS7XHFEtHmC8HgdZPqS8y4ri0aABp57ZzvJZmJ0Whwd0pTruvudFTSE0ExuPT5aT4FQM0fhs3HtxGHP44%2BcoIgnjZKj%2B713J4&X-Amz-Signature=63fe1e7756ad6f55d3732225ba8c941c7fb908ca96b89b15b4d4be8a79381985&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XDHT4A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCJRH5wzlJ11Oaf0lkzM8Ngl0KZuz9FRoClBJ8j2nRWBAIgWeLGMou%2Fd9u2OdbTRCShZHbi1wsNiFPpq11HwbxTDjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGgRAwzFgEk4Yf4beCrcA%2F5KTZKA7JYoZT%2BBUAPjTxGjSOd%2Benup0lhpPKnCixR3WPbFImNHqyZ4qZqs9Asm6vn8fc%2BeSTpzjpgCoR%2FKOW3uFwC%2FSBMqDOq9ySOGq8zyNbIci9Ozo0cy%2BzDE5Xnh%2F8a%2Fki20LZNV9tGRuC5qdtiENdK%2BbPppBSVSRIUPQJxTrKpZg2KOF7tKexrPpXLfRzU%2BjoVVSc9VzSqam%2FE%2BaUiBNVCyybhM6htO7wdzWZdNJyEcfD23DfOir8fEHh20Aj9ypSRMV0%2FqiAcNFijVJcIA4tpdqVqEvDH9dfTIxWw4K0FE7Tt1iINTBKGuSjiPaR%2FquxHtYlmkoWnLz8PH5Zr1%2FghKS1fGyA5Xo4A19yN%2F2rwhSsUDAm2gvirYBZqkfjrtyPTUO0jIzbEgjSCb%2BGtX5rhFbjWYmFhs9q2asINVUALOWRCifcultHVPFK7K2r2kz%2FCC0IJKhDDdEk%2BowqNPX4hpFpiwM0pqSt52WiRCaRVFNh5%2FGT0j5nZJLmyB1iZ42FrWYp1HB6cLCe6KEX92rsfULlmp5Y4DVTuee8AwJs8ietU%2BxQFjpIV%2BsVyFJ8S%2B9eNQSBKPL%2BkgDjcu40wXWORnk63JqW9iiO7tVU0uHssVGKF1VMZJYrUTMLCFg8IGOqUBCDsVbb2VZtsgGkXzUXHUwQYq8f7Xmhk3QWYxY0sNVttTVgTF4veeGtPjAqN8mbDPJxudqzIHPwKRiTcA3y72UGjQSqaK9%2FU3b7wCwSWjzAgxfxAVHBNEioRg5ztwS7XHFEtHmC8HgdZPqS8y4ri0aABp57ZzvJZmJ0Whwd0pTruvudFTSE0ExuPT5aT4FQM0fhs3HtxGHP44%2BcoIgnjZKj%2B713J4&X-Amz-Signature=d69ec1e15224e41fce26b08271cc5b3a5c1307a08facc81976669c8b25ce8245&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XDHT4A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCJRH5wzlJ11Oaf0lkzM8Ngl0KZuz9FRoClBJ8j2nRWBAIgWeLGMou%2Fd9u2OdbTRCShZHbi1wsNiFPpq11HwbxTDjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGgRAwzFgEk4Yf4beCrcA%2F5KTZKA7JYoZT%2BBUAPjTxGjSOd%2Benup0lhpPKnCixR3WPbFImNHqyZ4qZqs9Asm6vn8fc%2BeSTpzjpgCoR%2FKOW3uFwC%2FSBMqDOq9ySOGq8zyNbIci9Ozo0cy%2BzDE5Xnh%2F8a%2Fki20LZNV9tGRuC5qdtiENdK%2BbPppBSVSRIUPQJxTrKpZg2KOF7tKexrPpXLfRzU%2BjoVVSc9VzSqam%2FE%2BaUiBNVCyybhM6htO7wdzWZdNJyEcfD23DfOir8fEHh20Aj9ypSRMV0%2FqiAcNFijVJcIA4tpdqVqEvDH9dfTIxWw4K0FE7Tt1iINTBKGuSjiPaR%2FquxHtYlmkoWnLz8PH5Zr1%2FghKS1fGyA5Xo4A19yN%2F2rwhSsUDAm2gvirYBZqkfjrtyPTUO0jIzbEgjSCb%2BGtX5rhFbjWYmFhs9q2asINVUALOWRCifcultHVPFK7K2r2kz%2FCC0IJKhDDdEk%2BowqNPX4hpFpiwM0pqSt52WiRCaRVFNh5%2FGT0j5nZJLmyB1iZ42FrWYp1HB6cLCe6KEX92rsfULlmp5Y4DVTuee8AwJs8ietU%2BxQFjpIV%2BsVyFJ8S%2B9eNQSBKPL%2BkgDjcu40wXWORnk63JqW9iiO7tVU0uHssVGKF1VMZJYrUTMLCFg8IGOqUBCDsVbb2VZtsgGkXzUXHUwQYq8f7Xmhk3QWYxY0sNVttTVgTF4veeGtPjAqN8mbDPJxudqzIHPwKRiTcA3y72UGjQSqaK9%2FU3b7wCwSWjzAgxfxAVHBNEioRg5ztwS7XHFEtHmC8HgdZPqS8y4ri0aABp57ZzvJZmJ0Whwd0pTruvudFTSE0ExuPT5aT4FQM0fhs3HtxGHP44%2BcoIgnjZKj%2B713J4&X-Amz-Signature=f602d95523aa7718d5ded9c8bf6ee73d4304b8eb5d2501af1783a5cca68c8457&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XDHT4A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCJRH5wzlJ11Oaf0lkzM8Ngl0KZuz9FRoClBJ8j2nRWBAIgWeLGMou%2Fd9u2OdbTRCShZHbi1wsNiFPpq11HwbxTDjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGgRAwzFgEk4Yf4beCrcA%2F5KTZKA7JYoZT%2BBUAPjTxGjSOd%2Benup0lhpPKnCixR3WPbFImNHqyZ4qZqs9Asm6vn8fc%2BeSTpzjpgCoR%2FKOW3uFwC%2FSBMqDOq9ySOGq8zyNbIci9Ozo0cy%2BzDE5Xnh%2F8a%2Fki20LZNV9tGRuC5qdtiENdK%2BbPppBSVSRIUPQJxTrKpZg2KOF7tKexrPpXLfRzU%2BjoVVSc9VzSqam%2FE%2BaUiBNVCyybhM6htO7wdzWZdNJyEcfD23DfOir8fEHh20Aj9ypSRMV0%2FqiAcNFijVJcIA4tpdqVqEvDH9dfTIxWw4K0FE7Tt1iINTBKGuSjiPaR%2FquxHtYlmkoWnLz8PH5Zr1%2FghKS1fGyA5Xo4A19yN%2F2rwhSsUDAm2gvirYBZqkfjrtyPTUO0jIzbEgjSCb%2BGtX5rhFbjWYmFhs9q2asINVUALOWRCifcultHVPFK7K2r2kz%2FCC0IJKhDDdEk%2BowqNPX4hpFpiwM0pqSt52WiRCaRVFNh5%2FGT0j5nZJLmyB1iZ42FrWYp1HB6cLCe6KEX92rsfULlmp5Y4DVTuee8AwJs8ietU%2BxQFjpIV%2BsVyFJ8S%2B9eNQSBKPL%2BkgDjcu40wXWORnk63JqW9iiO7tVU0uHssVGKF1VMZJYrUTMLCFg8IGOqUBCDsVbb2VZtsgGkXzUXHUwQYq8f7Xmhk3QWYxY0sNVttTVgTF4veeGtPjAqN8mbDPJxudqzIHPwKRiTcA3y72UGjQSqaK9%2FU3b7wCwSWjzAgxfxAVHBNEioRg5ztwS7XHFEtHmC8HgdZPqS8y4ri0aABp57ZzvJZmJ0Whwd0pTruvudFTSE0ExuPT5aT4FQM0fhs3HtxGHP44%2BcoIgnjZKj%2B713J4&X-Amz-Signature=bb8f7ce41489bc253c833ec709239fdaa6e9ed4a640a8fc5cc6543b1ed6a2308&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XDHT4A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCJRH5wzlJ11Oaf0lkzM8Ngl0KZuz9FRoClBJ8j2nRWBAIgWeLGMou%2Fd9u2OdbTRCShZHbi1wsNiFPpq11HwbxTDjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGgRAwzFgEk4Yf4beCrcA%2F5KTZKA7JYoZT%2BBUAPjTxGjSOd%2Benup0lhpPKnCixR3WPbFImNHqyZ4qZqs9Asm6vn8fc%2BeSTpzjpgCoR%2FKOW3uFwC%2FSBMqDOq9ySOGq8zyNbIci9Ozo0cy%2BzDE5Xnh%2F8a%2Fki20LZNV9tGRuC5qdtiENdK%2BbPppBSVSRIUPQJxTrKpZg2KOF7tKexrPpXLfRzU%2BjoVVSc9VzSqam%2FE%2BaUiBNVCyybhM6htO7wdzWZdNJyEcfD23DfOir8fEHh20Aj9ypSRMV0%2FqiAcNFijVJcIA4tpdqVqEvDH9dfTIxWw4K0FE7Tt1iINTBKGuSjiPaR%2FquxHtYlmkoWnLz8PH5Zr1%2FghKS1fGyA5Xo4A19yN%2F2rwhSsUDAm2gvirYBZqkfjrtyPTUO0jIzbEgjSCb%2BGtX5rhFbjWYmFhs9q2asINVUALOWRCifcultHVPFK7K2r2kz%2FCC0IJKhDDdEk%2BowqNPX4hpFpiwM0pqSt52WiRCaRVFNh5%2FGT0j5nZJLmyB1iZ42FrWYp1HB6cLCe6KEX92rsfULlmp5Y4DVTuee8AwJs8ietU%2BxQFjpIV%2BsVyFJ8S%2B9eNQSBKPL%2BkgDjcu40wXWORnk63JqW9iiO7tVU0uHssVGKF1VMZJYrUTMLCFg8IGOqUBCDsVbb2VZtsgGkXzUXHUwQYq8f7Xmhk3QWYxY0sNVttTVgTF4veeGtPjAqN8mbDPJxudqzIHPwKRiTcA3y72UGjQSqaK9%2FU3b7wCwSWjzAgxfxAVHBNEioRg5ztwS7XHFEtHmC8HgdZPqS8y4ri0aABp57ZzvJZmJ0Whwd0pTruvudFTSE0ExuPT5aT4FQM0fhs3HtxGHP44%2BcoIgnjZKj%2B713J4&X-Amz-Signature=e85a49b3107731639b3c40e4a1d2e98b383062e3bebcf2724a5a13b45a268f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XDHT4A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCJRH5wzlJ11Oaf0lkzM8Ngl0KZuz9FRoClBJ8j2nRWBAIgWeLGMou%2Fd9u2OdbTRCShZHbi1wsNiFPpq11HwbxTDjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGgRAwzFgEk4Yf4beCrcA%2F5KTZKA7JYoZT%2BBUAPjTxGjSOd%2Benup0lhpPKnCixR3WPbFImNHqyZ4qZqs9Asm6vn8fc%2BeSTpzjpgCoR%2FKOW3uFwC%2FSBMqDOq9ySOGq8zyNbIci9Ozo0cy%2BzDE5Xnh%2F8a%2Fki20LZNV9tGRuC5qdtiENdK%2BbPppBSVSRIUPQJxTrKpZg2KOF7tKexrPpXLfRzU%2BjoVVSc9VzSqam%2FE%2BaUiBNVCyybhM6htO7wdzWZdNJyEcfD23DfOir8fEHh20Aj9ypSRMV0%2FqiAcNFijVJcIA4tpdqVqEvDH9dfTIxWw4K0FE7Tt1iINTBKGuSjiPaR%2FquxHtYlmkoWnLz8PH5Zr1%2FghKS1fGyA5Xo4A19yN%2F2rwhSsUDAm2gvirYBZqkfjrtyPTUO0jIzbEgjSCb%2BGtX5rhFbjWYmFhs9q2asINVUALOWRCifcultHVPFK7K2r2kz%2FCC0IJKhDDdEk%2BowqNPX4hpFpiwM0pqSt52WiRCaRVFNh5%2FGT0j5nZJLmyB1iZ42FrWYp1HB6cLCe6KEX92rsfULlmp5Y4DVTuee8AwJs8ietU%2BxQFjpIV%2BsVyFJ8S%2B9eNQSBKPL%2BkgDjcu40wXWORnk63JqW9iiO7tVU0uHssVGKF1VMZJYrUTMLCFg8IGOqUBCDsVbb2VZtsgGkXzUXHUwQYq8f7Xmhk3QWYxY0sNVttTVgTF4veeGtPjAqN8mbDPJxudqzIHPwKRiTcA3y72UGjQSqaK9%2FU3b7wCwSWjzAgxfxAVHBNEioRg5ztwS7XHFEtHmC8HgdZPqS8y4ri0aABp57ZzvJZmJ0Whwd0pTruvudFTSE0ExuPT5aT4FQM0fhs3HtxGHP44%2BcoIgnjZKj%2B713J4&X-Amz-Signature=345cdb9696d000cb70f5597482475cf72700ceb1cde0e8913bc92d525ea5ce50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XDHT4A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCJRH5wzlJ11Oaf0lkzM8Ngl0KZuz9FRoClBJ8j2nRWBAIgWeLGMou%2Fd9u2OdbTRCShZHbi1wsNiFPpq11HwbxTDjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGgRAwzFgEk4Yf4beCrcA%2F5KTZKA7JYoZT%2BBUAPjTxGjSOd%2Benup0lhpPKnCixR3WPbFImNHqyZ4qZqs9Asm6vn8fc%2BeSTpzjpgCoR%2FKOW3uFwC%2FSBMqDOq9ySOGq8zyNbIci9Ozo0cy%2BzDE5Xnh%2F8a%2Fki20LZNV9tGRuC5qdtiENdK%2BbPppBSVSRIUPQJxTrKpZg2KOF7tKexrPpXLfRzU%2BjoVVSc9VzSqam%2FE%2BaUiBNVCyybhM6htO7wdzWZdNJyEcfD23DfOir8fEHh20Aj9ypSRMV0%2FqiAcNFijVJcIA4tpdqVqEvDH9dfTIxWw4K0FE7Tt1iINTBKGuSjiPaR%2FquxHtYlmkoWnLz8PH5Zr1%2FghKS1fGyA5Xo4A19yN%2F2rwhSsUDAm2gvirYBZqkfjrtyPTUO0jIzbEgjSCb%2BGtX5rhFbjWYmFhs9q2asINVUALOWRCifcultHVPFK7K2r2kz%2FCC0IJKhDDdEk%2BowqNPX4hpFpiwM0pqSt52WiRCaRVFNh5%2FGT0j5nZJLmyB1iZ42FrWYp1HB6cLCe6KEX92rsfULlmp5Y4DVTuee8AwJs8ietU%2BxQFjpIV%2BsVyFJ8S%2B9eNQSBKPL%2BkgDjcu40wXWORnk63JqW9iiO7tVU0uHssVGKF1VMZJYrUTMLCFg8IGOqUBCDsVbb2VZtsgGkXzUXHUwQYq8f7Xmhk3QWYxY0sNVttTVgTF4veeGtPjAqN8mbDPJxudqzIHPwKRiTcA3y72UGjQSqaK9%2FU3b7wCwSWjzAgxfxAVHBNEioRg5ztwS7XHFEtHmC8HgdZPqS8y4ri0aABp57ZzvJZmJ0Whwd0pTruvudFTSE0ExuPT5aT4FQM0fhs3HtxGHP44%2BcoIgnjZKj%2B713J4&X-Amz-Signature=21c83649ffa581bd0fa5b598a82d663f41fc65032f964ef95baa32922a0f4417&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XDHT4A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCJRH5wzlJ11Oaf0lkzM8Ngl0KZuz9FRoClBJ8j2nRWBAIgWeLGMou%2Fd9u2OdbTRCShZHbi1wsNiFPpq11HwbxTDjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGgRAwzFgEk4Yf4beCrcA%2F5KTZKA7JYoZT%2BBUAPjTxGjSOd%2Benup0lhpPKnCixR3WPbFImNHqyZ4qZqs9Asm6vn8fc%2BeSTpzjpgCoR%2FKOW3uFwC%2FSBMqDOq9ySOGq8zyNbIci9Ozo0cy%2BzDE5Xnh%2F8a%2Fki20LZNV9tGRuC5qdtiENdK%2BbPppBSVSRIUPQJxTrKpZg2KOF7tKexrPpXLfRzU%2BjoVVSc9VzSqam%2FE%2BaUiBNVCyybhM6htO7wdzWZdNJyEcfD23DfOir8fEHh20Aj9ypSRMV0%2FqiAcNFijVJcIA4tpdqVqEvDH9dfTIxWw4K0FE7Tt1iINTBKGuSjiPaR%2FquxHtYlmkoWnLz8PH5Zr1%2FghKS1fGyA5Xo4A19yN%2F2rwhSsUDAm2gvirYBZqkfjrtyPTUO0jIzbEgjSCb%2BGtX5rhFbjWYmFhs9q2asINVUALOWRCifcultHVPFK7K2r2kz%2FCC0IJKhDDdEk%2BowqNPX4hpFpiwM0pqSt52WiRCaRVFNh5%2FGT0j5nZJLmyB1iZ42FrWYp1HB6cLCe6KEX92rsfULlmp5Y4DVTuee8AwJs8ietU%2BxQFjpIV%2BsVyFJ8S%2B9eNQSBKPL%2BkgDjcu40wXWORnk63JqW9iiO7tVU0uHssVGKF1VMZJYrUTMLCFg8IGOqUBCDsVbb2VZtsgGkXzUXHUwQYq8f7Xmhk3QWYxY0sNVttTVgTF4veeGtPjAqN8mbDPJxudqzIHPwKRiTcA3y72UGjQSqaK9%2FU3b7wCwSWjzAgxfxAVHBNEioRg5ztwS7XHFEtHmC8HgdZPqS8y4ri0aABp57ZzvJZmJ0Whwd0pTruvudFTSE0ExuPT5aT4FQM0fhs3HtxGHP44%2BcoIgnjZKj%2B713J4&X-Amz-Signature=e236a169c2348ad5ff9f399b7f55a7359d4ab23a3039aff7ace95f5b5b5558c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
