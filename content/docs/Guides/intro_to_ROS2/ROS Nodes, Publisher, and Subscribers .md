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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=5ad4d5856e5b892c3420715739276b1b17076faf1d39a380c9cb3ea0e55a5aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=be8d98910eabf7f5327622e017ead77139413af9d95cfbb1cc7c249d72e5cd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=ae88d8edd3116985b1f6e1eb9ef3e7cec2fcae763e5622d822254ae32a5fc8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=71b527509e5d00578c84d4add4d621f7a62af47c2be28a12d9fdd789330fdca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=05cebb5d668cdd9a53880a8c69aad7f9ee8aeff990f291fb5d36814c6af6ebab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=14de38f5ba42b7ed0e1c31a60d713bf045d88e527c88854d88a58fc268d00665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=29ae5f7e308b4bd1a6efafc5670e3fa4b85776f02fcd0de8a335806dc35f4f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=015fcf02851550ede579cd21542c44ffce200a32fd2ff516a827bab74f6c1f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
