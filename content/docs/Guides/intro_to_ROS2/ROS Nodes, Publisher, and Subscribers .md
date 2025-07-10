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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D4GWHA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3XfQUCuuokSwKHyuShsP19LBF%2BkRx67Vr69svQmq1QIhAJmGo1xv6g2hMwTCMTuI0D05HPWCmRQ5tHw3Zc0o5tPjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkRma8zZ7x9CAMkm4q3APv8LcMNPA2wRMsEQxxPULKcb%2BUpyi58tFnL7hUgE5kz930tdF4VXjxwY8%2Bjl6amROg9o0PeLmrW%2FpI9WNXrMKhwTLUQv9ooVedmVNG7zeLN1X7rqmhe3DbISn7lxomQke86C3vtutxgH2bOPqqZ1tnuWKWzCdzyoZS%2BpmS0%2FsrT46o1QJMXJFZQI1bvlmemCUeRB2%2BSTssNrlti8DMtqxzA8cSquhByl7iwf2dVk2dwYDKSyVUhX3mZFHHrlSajTB%2BxXnHiCg5JTG7piQy9z4YLIpj923qV%2BeWxxMcdPc%2Bgunw9UvG5mbib6XqHeft5Unr1Yli1tTOny1EV8p5%2B51lBt49a5W3940%2FqqZzJvs0XVOxXykfpNSDMPDZLiIzDpseprVfQm8M50eXR%2B6Q4qoF%2BouLSg7FETa6dC3twiyEfcNhFYpkGIHytkhxWapIhQRuL5uLeYaGZmUX2d8Lx3kg27yZncg%2B9lNIE2wfVIXb0wZk6%2FeFgDx2gqjruj%2BfImXc8hun%2FBH%2FsGiOXQXCzrVl7dj4MP1F2usJaJgUC7xfxgLatKZkdXBZcK%2FAboL%2Ft0dO6BD6ltzdAjwtj1OFM1OyUrCriSVilOfSIhxxvFMp15EgCuBuiG%2BjBebczDCfqL%2FDBjqkAT%2B9%2FGRZzJ%2Fon%2BezV9iJ30MPM5qcfWbGb3nrg72mFULeD%2Bp%2F39ZvzU2d6UgdyKe59ozoEpMRKKcz%2FnshyjonfDCSFI5ZUWAU40961BeO%2Bo2ALBMzpkFp2gMVocf04UoOn%2FWu3PaRmP7SJYaaYbImjaG%2Bh8Nym8Wl8CQ6UEca6DhBWuiWhGB6Hae24r1ZhuCHoQ9vgfXecUFu5rLS%2FYjYklmJI5Hc&X-Amz-Signature=aa24bf2ab56308ac7f971d4b8d00cb0b3fd8b200a56b261c67be780af6740d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D4GWHA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3XfQUCuuokSwKHyuShsP19LBF%2BkRx67Vr69svQmq1QIhAJmGo1xv6g2hMwTCMTuI0D05HPWCmRQ5tHw3Zc0o5tPjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkRma8zZ7x9CAMkm4q3APv8LcMNPA2wRMsEQxxPULKcb%2BUpyi58tFnL7hUgE5kz930tdF4VXjxwY8%2Bjl6amROg9o0PeLmrW%2FpI9WNXrMKhwTLUQv9ooVedmVNG7zeLN1X7rqmhe3DbISn7lxomQke86C3vtutxgH2bOPqqZ1tnuWKWzCdzyoZS%2BpmS0%2FsrT46o1QJMXJFZQI1bvlmemCUeRB2%2BSTssNrlti8DMtqxzA8cSquhByl7iwf2dVk2dwYDKSyVUhX3mZFHHrlSajTB%2BxXnHiCg5JTG7piQy9z4YLIpj923qV%2BeWxxMcdPc%2Bgunw9UvG5mbib6XqHeft5Unr1Yli1tTOny1EV8p5%2B51lBt49a5W3940%2FqqZzJvs0XVOxXykfpNSDMPDZLiIzDpseprVfQm8M50eXR%2B6Q4qoF%2BouLSg7FETa6dC3twiyEfcNhFYpkGIHytkhxWapIhQRuL5uLeYaGZmUX2d8Lx3kg27yZncg%2B9lNIE2wfVIXb0wZk6%2FeFgDx2gqjruj%2BfImXc8hun%2FBH%2FsGiOXQXCzrVl7dj4MP1F2usJaJgUC7xfxgLatKZkdXBZcK%2FAboL%2Ft0dO6BD6ltzdAjwtj1OFM1OyUrCriSVilOfSIhxxvFMp15EgCuBuiG%2BjBebczDCfqL%2FDBjqkAT%2B9%2FGRZzJ%2Fon%2BezV9iJ30MPM5qcfWbGb3nrg72mFULeD%2Bp%2F39ZvzU2d6UgdyKe59ozoEpMRKKcz%2FnshyjonfDCSFI5ZUWAU40961BeO%2Bo2ALBMzpkFp2gMVocf04UoOn%2FWu3PaRmP7SJYaaYbImjaG%2Bh8Nym8Wl8CQ6UEca6DhBWuiWhGB6Hae24r1ZhuCHoQ9vgfXecUFu5rLS%2FYjYklmJI5Hc&X-Amz-Signature=1d64c3615cce6674d212dd89ff46bcbb1839b797c60c633a4f403b9b0e7653b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D4GWHA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3XfQUCuuokSwKHyuShsP19LBF%2BkRx67Vr69svQmq1QIhAJmGo1xv6g2hMwTCMTuI0D05HPWCmRQ5tHw3Zc0o5tPjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkRma8zZ7x9CAMkm4q3APv8LcMNPA2wRMsEQxxPULKcb%2BUpyi58tFnL7hUgE5kz930tdF4VXjxwY8%2Bjl6amROg9o0PeLmrW%2FpI9WNXrMKhwTLUQv9ooVedmVNG7zeLN1X7rqmhe3DbISn7lxomQke86C3vtutxgH2bOPqqZ1tnuWKWzCdzyoZS%2BpmS0%2FsrT46o1QJMXJFZQI1bvlmemCUeRB2%2BSTssNrlti8DMtqxzA8cSquhByl7iwf2dVk2dwYDKSyVUhX3mZFHHrlSajTB%2BxXnHiCg5JTG7piQy9z4YLIpj923qV%2BeWxxMcdPc%2Bgunw9UvG5mbib6XqHeft5Unr1Yli1tTOny1EV8p5%2B51lBt49a5W3940%2FqqZzJvs0XVOxXykfpNSDMPDZLiIzDpseprVfQm8M50eXR%2B6Q4qoF%2BouLSg7FETa6dC3twiyEfcNhFYpkGIHytkhxWapIhQRuL5uLeYaGZmUX2d8Lx3kg27yZncg%2B9lNIE2wfVIXb0wZk6%2FeFgDx2gqjruj%2BfImXc8hun%2FBH%2FsGiOXQXCzrVl7dj4MP1F2usJaJgUC7xfxgLatKZkdXBZcK%2FAboL%2Ft0dO6BD6ltzdAjwtj1OFM1OyUrCriSVilOfSIhxxvFMp15EgCuBuiG%2BjBebczDCfqL%2FDBjqkAT%2B9%2FGRZzJ%2Fon%2BezV9iJ30MPM5qcfWbGb3nrg72mFULeD%2Bp%2F39ZvzU2d6UgdyKe59ozoEpMRKKcz%2FnshyjonfDCSFI5ZUWAU40961BeO%2Bo2ALBMzpkFp2gMVocf04UoOn%2FWu3PaRmP7SJYaaYbImjaG%2Bh8Nym8Wl8CQ6UEca6DhBWuiWhGB6Hae24r1ZhuCHoQ9vgfXecUFu5rLS%2FYjYklmJI5Hc&X-Amz-Signature=d1e5f5a6d0bb0a133f7a12c93ea5fcc78fbfa8cb0c60cab1269f9fcd11167593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D4GWHA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3XfQUCuuokSwKHyuShsP19LBF%2BkRx67Vr69svQmq1QIhAJmGo1xv6g2hMwTCMTuI0D05HPWCmRQ5tHw3Zc0o5tPjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkRma8zZ7x9CAMkm4q3APv8LcMNPA2wRMsEQxxPULKcb%2BUpyi58tFnL7hUgE5kz930tdF4VXjxwY8%2Bjl6amROg9o0PeLmrW%2FpI9WNXrMKhwTLUQv9ooVedmVNG7zeLN1X7rqmhe3DbISn7lxomQke86C3vtutxgH2bOPqqZ1tnuWKWzCdzyoZS%2BpmS0%2FsrT46o1QJMXJFZQI1bvlmemCUeRB2%2BSTssNrlti8DMtqxzA8cSquhByl7iwf2dVk2dwYDKSyVUhX3mZFHHrlSajTB%2BxXnHiCg5JTG7piQy9z4YLIpj923qV%2BeWxxMcdPc%2Bgunw9UvG5mbib6XqHeft5Unr1Yli1tTOny1EV8p5%2B51lBt49a5W3940%2FqqZzJvs0XVOxXykfpNSDMPDZLiIzDpseprVfQm8M50eXR%2B6Q4qoF%2BouLSg7FETa6dC3twiyEfcNhFYpkGIHytkhxWapIhQRuL5uLeYaGZmUX2d8Lx3kg27yZncg%2B9lNIE2wfVIXb0wZk6%2FeFgDx2gqjruj%2BfImXc8hun%2FBH%2FsGiOXQXCzrVl7dj4MP1F2usJaJgUC7xfxgLatKZkdXBZcK%2FAboL%2Ft0dO6BD6ltzdAjwtj1OFM1OyUrCriSVilOfSIhxxvFMp15EgCuBuiG%2BjBebczDCfqL%2FDBjqkAT%2B9%2FGRZzJ%2Fon%2BezV9iJ30MPM5qcfWbGb3nrg72mFULeD%2Bp%2F39ZvzU2d6UgdyKe59ozoEpMRKKcz%2FnshyjonfDCSFI5ZUWAU40961BeO%2Bo2ALBMzpkFp2gMVocf04UoOn%2FWu3PaRmP7SJYaaYbImjaG%2Bh8Nym8Wl8CQ6UEca6DhBWuiWhGB6Hae24r1ZhuCHoQ9vgfXecUFu5rLS%2FYjYklmJI5Hc&X-Amz-Signature=f9cf941487bd3f99b861b40a4c322f4a63c23cf1f2f9ad2cd0ca02dcfd93379a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D4GWHA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3XfQUCuuokSwKHyuShsP19LBF%2BkRx67Vr69svQmq1QIhAJmGo1xv6g2hMwTCMTuI0D05HPWCmRQ5tHw3Zc0o5tPjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkRma8zZ7x9CAMkm4q3APv8LcMNPA2wRMsEQxxPULKcb%2BUpyi58tFnL7hUgE5kz930tdF4VXjxwY8%2Bjl6amROg9o0PeLmrW%2FpI9WNXrMKhwTLUQv9ooVedmVNG7zeLN1X7rqmhe3DbISn7lxomQke86C3vtutxgH2bOPqqZ1tnuWKWzCdzyoZS%2BpmS0%2FsrT46o1QJMXJFZQI1bvlmemCUeRB2%2BSTssNrlti8DMtqxzA8cSquhByl7iwf2dVk2dwYDKSyVUhX3mZFHHrlSajTB%2BxXnHiCg5JTG7piQy9z4YLIpj923qV%2BeWxxMcdPc%2Bgunw9UvG5mbib6XqHeft5Unr1Yli1tTOny1EV8p5%2B51lBt49a5W3940%2FqqZzJvs0XVOxXykfpNSDMPDZLiIzDpseprVfQm8M50eXR%2B6Q4qoF%2BouLSg7FETa6dC3twiyEfcNhFYpkGIHytkhxWapIhQRuL5uLeYaGZmUX2d8Lx3kg27yZncg%2B9lNIE2wfVIXb0wZk6%2FeFgDx2gqjruj%2BfImXc8hun%2FBH%2FsGiOXQXCzrVl7dj4MP1F2usJaJgUC7xfxgLatKZkdXBZcK%2FAboL%2Ft0dO6BD6ltzdAjwtj1OFM1OyUrCriSVilOfSIhxxvFMp15EgCuBuiG%2BjBebczDCfqL%2FDBjqkAT%2B9%2FGRZzJ%2Fon%2BezV9iJ30MPM5qcfWbGb3nrg72mFULeD%2Bp%2F39ZvzU2d6UgdyKe59ozoEpMRKKcz%2FnshyjonfDCSFI5ZUWAU40961BeO%2Bo2ALBMzpkFp2gMVocf04UoOn%2FWu3PaRmP7SJYaaYbImjaG%2Bh8Nym8Wl8CQ6UEca6DhBWuiWhGB6Hae24r1ZhuCHoQ9vgfXecUFu5rLS%2FYjYklmJI5Hc&X-Amz-Signature=8094d23de21915678cfdbbd2072f66db36defe141c54aa5e121885ede269a928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D4GWHA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3XfQUCuuokSwKHyuShsP19LBF%2BkRx67Vr69svQmq1QIhAJmGo1xv6g2hMwTCMTuI0D05HPWCmRQ5tHw3Zc0o5tPjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkRma8zZ7x9CAMkm4q3APv8LcMNPA2wRMsEQxxPULKcb%2BUpyi58tFnL7hUgE5kz930tdF4VXjxwY8%2Bjl6amROg9o0PeLmrW%2FpI9WNXrMKhwTLUQv9ooVedmVNG7zeLN1X7rqmhe3DbISn7lxomQke86C3vtutxgH2bOPqqZ1tnuWKWzCdzyoZS%2BpmS0%2FsrT46o1QJMXJFZQI1bvlmemCUeRB2%2BSTssNrlti8DMtqxzA8cSquhByl7iwf2dVk2dwYDKSyVUhX3mZFHHrlSajTB%2BxXnHiCg5JTG7piQy9z4YLIpj923qV%2BeWxxMcdPc%2Bgunw9UvG5mbib6XqHeft5Unr1Yli1tTOny1EV8p5%2B51lBt49a5W3940%2FqqZzJvs0XVOxXykfpNSDMPDZLiIzDpseprVfQm8M50eXR%2B6Q4qoF%2BouLSg7FETa6dC3twiyEfcNhFYpkGIHytkhxWapIhQRuL5uLeYaGZmUX2d8Lx3kg27yZncg%2B9lNIE2wfVIXb0wZk6%2FeFgDx2gqjruj%2BfImXc8hun%2FBH%2FsGiOXQXCzrVl7dj4MP1F2usJaJgUC7xfxgLatKZkdXBZcK%2FAboL%2Ft0dO6BD6ltzdAjwtj1OFM1OyUrCriSVilOfSIhxxvFMp15EgCuBuiG%2BjBebczDCfqL%2FDBjqkAT%2B9%2FGRZzJ%2Fon%2BezV9iJ30MPM5qcfWbGb3nrg72mFULeD%2Bp%2F39ZvzU2d6UgdyKe59ozoEpMRKKcz%2FnshyjonfDCSFI5ZUWAU40961BeO%2Bo2ALBMzpkFp2gMVocf04UoOn%2FWu3PaRmP7SJYaaYbImjaG%2Bh8Nym8Wl8CQ6UEca6DhBWuiWhGB6Hae24r1ZhuCHoQ9vgfXecUFu5rLS%2FYjYklmJI5Hc&X-Amz-Signature=a7337c146ed66e23368ce3a9ad1a03accbc25f9191d067fc2fab903d06c9c629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D4GWHA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3XfQUCuuokSwKHyuShsP19LBF%2BkRx67Vr69svQmq1QIhAJmGo1xv6g2hMwTCMTuI0D05HPWCmRQ5tHw3Zc0o5tPjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkRma8zZ7x9CAMkm4q3APv8LcMNPA2wRMsEQxxPULKcb%2BUpyi58tFnL7hUgE5kz930tdF4VXjxwY8%2Bjl6amROg9o0PeLmrW%2FpI9WNXrMKhwTLUQv9ooVedmVNG7zeLN1X7rqmhe3DbISn7lxomQke86C3vtutxgH2bOPqqZ1tnuWKWzCdzyoZS%2BpmS0%2FsrT46o1QJMXJFZQI1bvlmemCUeRB2%2BSTssNrlti8DMtqxzA8cSquhByl7iwf2dVk2dwYDKSyVUhX3mZFHHrlSajTB%2BxXnHiCg5JTG7piQy9z4YLIpj923qV%2BeWxxMcdPc%2Bgunw9UvG5mbib6XqHeft5Unr1Yli1tTOny1EV8p5%2B51lBt49a5W3940%2FqqZzJvs0XVOxXykfpNSDMPDZLiIzDpseprVfQm8M50eXR%2B6Q4qoF%2BouLSg7FETa6dC3twiyEfcNhFYpkGIHytkhxWapIhQRuL5uLeYaGZmUX2d8Lx3kg27yZncg%2B9lNIE2wfVIXb0wZk6%2FeFgDx2gqjruj%2BfImXc8hun%2FBH%2FsGiOXQXCzrVl7dj4MP1F2usJaJgUC7xfxgLatKZkdXBZcK%2FAboL%2Ft0dO6BD6ltzdAjwtj1OFM1OyUrCriSVilOfSIhxxvFMp15EgCuBuiG%2BjBebczDCfqL%2FDBjqkAT%2B9%2FGRZzJ%2Fon%2BezV9iJ30MPM5qcfWbGb3nrg72mFULeD%2Bp%2F39ZvzU2d6UgdyKe59ozoEpMRKKcz%2FnshyjonfDCSFI5ZUWAU40961BeO%2Bo2ALBMzpkFp2gMVocf04UoOn%2FWu3PaRmP7SJYaaYbImjaG%2Bh8Nym8Wl8CQ6UEca6DhBWuiWhGB6Hae24r1ZhuCHoQ9vgfXecUFu5rLS%2FYjYklmJI5Hc&X-Amz-Signature=4682b4e86dbb8a2c77c723e865df6f78edef35891735be24c4e695ba6b33cb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D4GWHA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3XfQUCuuokSwKHyuShsP19LBF%2BkRx67Vr69svQmq1QIhAJmGo1xv6g2hMwTCMTuI0D05HPWCmRQ5tHw3Zc0o5tPjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkRma8zZ7x9CAMkm4q3APv8LcMNPA2wRMsEQxxPULKcb%2BUpyi58tFnL7hUgE5kz930tdF4VXjxwY8%2Bjl6amROg9o0PeLmrW%2FpI9WNXrMKhwTLUQv9ooVedmVNG7zeLN1X7rqmhe3DbISn7lxomQke86C3vtutxgH2bOPqqZ1tnuWKWzCdzyoZS%2BpmS0%2FsrT46o1QJMXJFZQI1bvlmemCUeRB2%2BSTssNrlti8DMtqxzA8cSquhByl7iwf2dVk2dwYDKSyVUhX3mZFHHrlSajTB%2BxXnHiCg5JTG7piQy9z4YLIpj923qV%2BeWxxMcdPc%2Bgunw9UvG5mbib6XqHeft5Unr1Yli1tTOny1EV8p5%2B51lBt49a5W3940%2FqqZzJvs0XVOxXykfpNSDMPDZLiIzDpseprVfQm8M50eXR%2B6Q4qoF%2BouLSg7FETa6dC3twiyEfcNhFYpkGIHytkhxWapIhQRuL5uLeYaGZmUX2d8Lx3kg27yZncg%2B9lNIE2wfVIXb0wZk6%2FeFgDx2gqjruj%2BfImXc8hun%2FBH%2FsGiOXQXCzrVl7dj4MP1F2usJaJgUC7xfxgLatKZkdXBZcK%2FAboL%2Ft0dO6BD6ltzdAjwtj1OFM1OyUrCriSVilOfSIhxxvFMp15EgCuBuiG%2BjBebczDCfqL%2FDBjqkAT%2B9%2FGRZzJ%2Fon%2BezV9iJ30MPM5qcfWbGb3nrg72mFULeD%2Bp%2F39ZvzU2d6UgdyKe59ozoEpMRKKcz%2FnshyjonfDCSFI5ZUWAU40961BeO%2Bo2ALBMzpkFp2gMVocf04UoOn%2FWu3PaRmP7SJYaaYbImjaG%2Bh8Nym8Wl8CQ6UEca6DhBWuiWhGB6Hae24r1ZhuCHoQ9vgfXecUFu5rLS%2FYjYklmJI5Hc&X-Amz-Signature=4bcfe6f951f743df275d6517c6e543a9cb9b74319fa100cb3f64bc5363d22a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
