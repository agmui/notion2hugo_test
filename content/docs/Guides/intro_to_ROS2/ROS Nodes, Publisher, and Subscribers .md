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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUWBLQ4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Ufhxl%2BZv8uXqByNNXyNbDLEDMTgLCNUplJfhF1a1PAIhAMbtX7Kz5wcqiDTvJ%2F%2BqRNCkjcMEvmoZ85NLmb91ixr0KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwn0HdPpLYT3Qvngq3APlUICGd8Oas44kC2uxx3xHqC3xQzIKN%2FFCud5vkWNAy6PsmEdwPrxLEVGYuMn1n7qEjPe5j9lRqLJKQ6YJubD1vpIE4jREpo9lJFh1TZG1gu5b%2BIYlwgQxSwTyo9%2B1sLdKxBhApREpxfZAVxSEswFChDFmCQSZWWsfN479pgO6CxB6s9pneuIjcOJCD0D6qc8OUZDsv098TmMFgW3EAXqxhpAAAPD5UGp9%2B5hHxPq8xomySOms%2Fdnd6np3L8Il%2BPeUY0AeHSORpIc3SqGNwSwWC80CjPPitFO6630OPc6HNUNhHPtN9Vhwej1VQmDc4JfKxKhlJE%2FkO496kpsNSafaVMrazVLEVjSAS6OpYDVpzAwTKTm%2Baue4efpSAL8YVhR%2BlEtyxbGjayYjqMwku8IYdiusHpXxH2D3qFymKYenRDIEiBOafch8br09ZgQMTvo3WMeDYw%2Fo%2FjQyb%2F7bTQI7bq0b3qN%2BgjlUuZBrhUM0cZ4fB0E%2Bf5SttdMX0mz%2Bb12baSOj4qzz7fB%2BC62QnHgx%2FMGgERfVXreRETVRzdpo6uy1TbveEUua6LK1%2FKFkjWvgUE%2BYTNSnirXLGYyF%2BjXvZncvnayU0QdgdtHV6k1UUQ7DAbA9AfEFpNJhYjDZ59zEBjqkAaBLbUZmUlvOGcXJp7CzHNdOseHzFxmCvmTygtGFqCA%2FF4npOBXIoiZKaUoqO6tNBjyDQW2No7GyZ29BZPmQ%2F8UXAlhHupSkrE%2FcxeFZxPvSgI0rRb2jQMB7a2ICvT7Lu715B%2ByhDArRhPidmpTh%2FMCtYswPiOdPrgH4wOx%2BprtMT2zwQaMYH5gwwZ6sJD%2BrRv4ZsKHgFIIQ4fcPHZlkAwLRrbwF&X-Amz-Signature=40c229e5296ffa318b50bea5356c7698d2c3ab78ad8d884ea60c7dbac882626e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUWBLQ4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Ufhxl%2BZv8uXqByNNXyNbDLEDMTgLCNUplJfhF1a1PAIhAMbtX7Kz5wcqiDTvJ%2F%2BqRNCkjcMEvmoZ85NLmb91ixr0KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwn0HdPpLYT3Qvngq3APlUICGd8Oas44kC2uxx3xHqC3xQzIKN%2FFCud5vkWNAy6PsmEdwPrxLEVGYuMn1n7qEjPe5j9lRqLJKQ6YJubD1vpIE4jREpo9lJFh1TZG1gu5b%2BIYlwgQxSwTyo9%2B1sLdKxBhApREpxfZAVxSEswFChDFmCQSZWWsfN479pgO6CxB6s9pneuIjcOJCD0D6qc8OUZDsv098TmMFgW3EAXqxhpAAAPD5UGp9%2B5hHxPq8xomySOms%2Fdnd6np3L8Il%2BPeUY0AeHSORpIc3SqGNwSwWC80CjPPitFO6630OPc6HNUNhHPtN9Vhwej1VQmDc4JfKxKhlJE%2FkO496kpsNSafaVMrazVLEVjSAS6OpYDVpzAwTKTm%2Baue4efpSAL8YVhR%2BlEtyxbGjayYjqMwku8IYdiusHpXxH2D3qFymKYenRDIEiBOafch8br09ZgQMTvo3WMeDYw%2Fo%2FjQyb%2F7bTQI7bq0b3qN%2BgjlUuZBrhUM0cZ4fB0E%2Bf5SttdMX0mz%2Bb12baSOj4qzz7fB%2BC62QnHgx%2FMGgERfVXreRETVRzdpo6uy1TbveEUua6LK1%2FKFkjWvgUE%2BYTNSnirXLGYyF%2BjXvZncvnayU0QdgdtHV6k1UUQ7DAbA9AfEFpNJhYjDZ59zEBjqkAaBLbUZmUlvOGcXJp7CzHNdOseHzFxmCvmTygtGFqCA%2FF4npOBXIoiZKaUoqO6tNBjyDQW2No7GyZ29BZPmQ%2F8UXAlhHupSkrE%2FcxeFZxPvSgI0rRb2jQMB7a2ICvT7Lu715B%2ByhDArRhPidmpTh%2FMCtYswPiOdPrgH4wOx%2BprtMT2zwQaMYH5gwwZ6sJD%2BrRv4ZsKHgFIIQ4fcPHZlkAwLRrbwF&X-Amz-Signature=5bf7456450294d5d7fd42509d706bc5e73cc7b7a5b60e1873a1a2844d084f2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUWBLQ4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Ufhxl%2BZv8uXqByNNXyNbDLEDMTgLCNUplJfhF1a1PAIhAMbtX7Kz5wcqiDTvJ%2F%2BqRNCkjcMEvmoZ85NLmb91ixr0KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwn0HdPpLYT3Qvngq3APlUICGd8Oas44kC2uxx3xHqC3xQzIKN%2FFCud5vkWNAy6PsmEdwPrxLEVGYuMn1n7qEjPe5j9lRqLJKQ6YJubD1vpIE4jREpo9lJFh1TZG1gu5b%2BIYlwgQxSwTyo9%2B1sLdKxBhApREpxfZAVxSEswFChDFmCQSZWWsfN479pgO6CxB6s9pneuIjcOJCD0D6qc8OUZDsv098TmMFgW3EAXqxhpAAAPD5UGp9%2B5hHxPq8xomySOms%2Fdnd6np3L8Il%2BPeUY0AeHSORpIc3SqGNwSwWC80CjPPitFO6630OPc6HNUNhHPtN9Vhwej1VQmDc4JfKxKhlJE%2FkO496kpsNSafaVMrazVLEVjSAS6OpYDVpzAwTKTm%2Baue4efpSAL8YVhR%2BlEtyxbGjayYjqMwku8IYdiusHpXxH2D3qFymKYenRDIEiBOafch8br09ZgQMTvo3WMeDYw%2Fo%2FjQyb%2F7bTQI7bq0b3qN%2BgjlUuZBrhUM0cZ4fB0E%2Bf5SttdMX0mz%2Bb12baSOj4qzz7fB%2BC62QnHgx%2FMGgERfVXreRETVRzdpo6uy1TbveEUua6LK1%2FKFkjWvgUE%2BYTNSnirXLGYyF%2BjXvZncvnayU0QdgdtHV6k1UUQ7DAbA9AfEFpNJhYjDZ59zEBjqkAaBLbUZmUlvOGcXJp7CzHNdOseHzFxmCvmTygtGFqCA%2FF4npOBXIoiZKaUoqO6tNBjyDQW2No7GyZ29BZPmQ%2F8UXAlhHupSkrE%2FcxeFZxPvSgI0rRb2jQMB7a2ICvT7Lu715B%2ByhDArRhPidmpTh%2FMCtYswPiOdPrgH4wOx%2BprtMT2zwQaMYH5gwwZ6sJD%2BrRv4ZsKHgFIIQ4fcPHZlkAwLRrbwF&X-Amz-Signature=791410188c4bcaed1a6155af636c3afce5eefd5ed7c641bc6781e1a4e7687334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUWBLQ4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Ufhxl%2BZv8uXqByNNXyNbDLEDMTgLCNUplJfhF1a1PAIhAMbtX7Kz5wcqiDTvJ%2F%2BqRNCkjcMEvmoZ85NLmb91ixr0KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwn0HdPpLYT3Qvngq3APlUICGd8Oas44kC2uxx3xHqC3xQzIKN%2FFCud5vkWNAy6PsmEdwPrxLEVGYuMn1n7qEjPe5j9lRqLJKQ6YJubD1vpIE4jREpo9lJFh1TZG1gu5b%2BIYlwgQxSwTyo9%2B1sLdKxBhApREpxfZAVxSEswFChDFmCQSZWWsfN479pgO6CxB6s9pneuIjcOJCD0D6qc8OUZDsv098TmMFgW3EAXqxhpAAAPD5UGp9%2B5hHxPq8xomySOms%2Fdnd6np3L8Il%2BPeUY0AeHSORpIc3SqGNwSwWC80CjPPitFO6630OPc6HNUNhHPtN9Vhwej1VQmDc4JfKxKhlJE%2FkO496kpsNSafaVMrazVLEVjSAS6OpYDVpzAwTKTm%2Baue4efpSAL8YVhR%2BlEtyxbGjayYjqMwku8IYdiusHpXxH2D3qFymKYenRDIEiBOafch8br09ZgQMTvo3WMeDYw%2Fo%2FjQyb%2F7bTQI7bq0b3qN%2BgjlUuZBrhUM0cZ4fB0E%2Bf5SttdMX0mz%2Bb12baSOj4qzz7fB%2BC62QnHgx%2FMGgERfVXreRETVRzdpo6uy1TbveEUua6LK1%2FKFkjWvgUE%2BYTNSnirXLGYyF%2BjXvZncvnayU0QdgdtHV6k1UUQ7DAbA9AfEFpNJhYjDZ59zEBjqkAaBLbUZmUlvOGcXJp7CzHNdOseHzFxmCvmTygtGFqCA%2FF4npOBXIoiZKaUoqO6tNBjyDQW2No7GyZ29BZPmQ%2F8UXAlhHupSkrE%2FcxeFZxPvSgI0rRb2jQMB7a2ICvT7Lu715B%2ByhDArRhPidmpTh%2FMCtYswPiOdPrgH4wOx%2BprtMT2zwQaMYH5gwwZ6sJD%2BrRv4ZsKHgFIIQ4fcPHZlkAwLRrbwF&X-Amz-Signature=cc8216dfcff47a4dbac56ca61b2f2e02800c7617a53ea6a6deb6bd9fc7860951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUWBLQ4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Ufhxl%2BZv8uXqByNNXyNbDLEDMTgLCNUplJfhF1a1PAIhAMbtX7Kz5wcqiDTvJ%2F%2BqRNCkjcMEvmoZ85NLmb91ixr0KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwn0HdPpLYT3Qvngq3APlUICGd8Oas44kC2uxx3xHqC3xQzIKN%2FFCud5vkWNAy6PsmEdwPrxLEVGYuMn1n7qEjPe5j9lRqLJKQ6YJubD1vpIE4jREpo9lJFh1TZG1gu5b%2BIYlwgQxSwTyo9%2B1sLdKxBhApREpxfZAVxSEswFChDFmCQSZWWsfN479pgO6CxB6s9pneuIjcOJCD0D6qc8OUZDsv098TmMFgW3EAXqxhpAAAPD5UGp9%2B5hHxPq8xomySOms%2Fdnd6np3L8Il%2BPeUY0AeHSORpIc3SqGNwSwWC80CjPPitFO6630OPc6HNUNhHPtN9Vhwej1VQmDc4JfKxKhlJE%2FkO496kpsNSafaVMrazVLEVjSAS6OpYDVpzAwTKTm%2Baue4efpSAL8YVhR%2BlEtyxbGjayYjqMwku8IYdiusHpXxH2D3qFymKYenRDIEiBOafch8br09ZgQMTvo3WMeDYw%2Fo%2FjQyb%2F7bTQI7bq0b3qN%2BgjlUuZBrhUM0cZ4fB0E%2Bf5SttdMX0mz%2Bb12baSOj4qzz7fB%2BC62QnHgx%2FMGgERfVXreRETVRzdpo6uy1TbveEUua6LK1%2FKFkjWvgUE%2BYTNSnirXLGYyF%2BjXvZncvnayU0QdgdtHV6k1UUQ7DAbA9AfEFpNJhYjDZ59zEBjqkAaBLbUZmUlvOGcXJp7CzHNdOseHzFxmCvmTygtGFqCA%2FF4npOBXIoiZKaUoqO6tNBjyDQW2No7GyZ29BZPmQ%2F8UXAlhHupSkrE%2FcxeFZxPvSgI0rRb2jQMB7a2ICvT7Lu715B%2ByhDArRhPidmpTh%2FMCtYswPiOdPrgH4wOx%2BprtMT2zwQaMYH5gwwZ6sJD%2BrRv4ZsKHgFIIQ4fcPHZlkAwLRrbwF&X-Amz-Signature=910649ea66ca54841b6e5d98d80c22e1661150b9b95a4951285ffa191f4b9e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUWBLQ4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Ufhxl%2BZv8uXqByNNXyNbDLEDMTgLCNUplJfhF1a1PAIhAMbtX7Kz5wcqiDTvJ%2F%2BqRNCkjcMEvmoZ85NLmb91ixr0KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwn0HdPpLYT3Qvngq3APlUICGd8Oas44kC2uxx3xHqC3xQzIKN%2FFCud5vkWNAy6PsmEdwPrxLEVGYuMn1n7qEjPe5j9lRqLJKQ6YJubD1vpIE4jREpo9lJFh1TZG1gu5b%2BIYlwgQxSwTyo9%2B1sLdKxBhApREpxfZAVxSEswFChDFmCQSZWWsfN479pgO6CxB6s9pneuIjcOJCD0D6qc8OUZDsv098TmMFgW3EAXqxhpAAAPD5UGp9%2B5hHxPq8xomySOms%2Fdnd6np3L8Il%2BPeUY0AeHSORpIc3SqGNwSwWC80CjPPitFO6630OPc6HNUNhHPtN9Vhwej1VQmDc4JfKxKhlJE%2FkO496kpsNSafaVMrazVLEVjSAS6OpYDVpzAwTKTm%2Baue4efpSAL8YVhR%2BlEtyxbGjayYjqMwku8IYdiusHpXxH2D3qFymKYenRDIEiBOafch8br09ZgQMTvo3WMeDYw%2Fo%2FjQyb%2F7bTQI7bq0b3qN%2BgjlUuZBrhUM0cZ4fB0E%2Bf5SttdMX0mz%2Bb12baSOj4qzz7fB%2BC62QnHgx%2FMGgERfVXreRETVRzdpo6uy1TbveEUua6LK1%2FKFkjWvgUE%2BYTNSnirXLGYyF%2BjXvZncvnayU0QdgdtHV6k1UUQ7DAbA9AfEFpNJhYjDZ59zEBjqkAaBLbUZmUlvOGcXJp7CzHNdOseHzFxmCvmTygtGFqCA%2FF4npOBXIoiZKaUoqO6tNBjyDQW2No7GyZ29BZPmQ%2F8UXAlhHupSkrE%2FcxeFZxPvSgI0rRb2jQMB7a2ICvT7Lu715B%2ByhDArRhPidmpTh%2FMCtYswPiOdPrgH4wOx%2BprtMT2zwQaMYH5gwwZ6sJD%2BrRv4ZsKHgFIIQ4fcPHZlkAwLRrbwF&X-Amz-Signature=33112c7e22eacb6cd8e4c3ba5b0d66c53f0409d75baf4d17ea382ea21919ee60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUWBLQ4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Ufhxl%2BZv8uXqByNNXyNbDLEDMTgLCNUplJfhF1a1PAIhAMbtX7Kz5wcqiDTvJ%2F%2BqRNCkjcMEvmoZ85NLmb91ixr0KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwn0HdPpLYT3Qvngq3APlUICGd8Oas44kC2uxx3xHqC3xQzIKN%2FFCud5vkWNAy6PsmEdwPrxLEVGYuMn1n7qEjPe5j9lRqLJKQ6YJubD1vpIE4jREpo9lJFh1TZG1gu5b%2BIYlwgQxSwTyo9%2B1sLdKxBhApREpxfZAVxSEswFChDFmCQSZWWsfN479pgO6CxB6s9pneuIjcOJCD0D6qc8OUZDsv098TmMFgW3EAXqxhpAAAPD5UGp9%2B5hHxPq8xomySOms%2Fdnd6np3L8Il%2BPeUY0AeHSORpIc3SqGNwSwWC80CjPPitFO6630OPc6HNUNhHPtN9Vhwej1VQmDc4JfKxKhlJE%2FkO496kpsNSafaVMrazVLEVjSAS6OpYDVpzAwTKTm%2Baue4efpSAL8YVhR%2BlEtyxbGjayYjqMwku8IYdiusHpXxH2D3qFymKYenRDIEiBOafch8br09ZgQMTvo3WMeDYw%2Fo%2FjQyb%2F7bTQI7bq0b3qN%2BgjlUuZBrhUM0cZ4fB0E%2Bf5SttdMX0mz%2Bb12baSOj4qzz7fB%2BC62QnHgx%2FMGgERfVXreRETVRzdpo6uy1TbveEUua6LK1%2FKFkjWvgUE%2BYTNSnirXLGYyF%2BjXvZncvnayU0QdgdtHV6k1UUQ7DAbA9AfEFpNJhYjDZ59zEBjqkAaBLbUZmUlvOGcXJp7CzHNdOseHzFxmCvmTygtGFqCA%2FF4npOBXIoiZKaUoqO6tNBjyDQW2No7GyZ29BZPmQ%2F8UXAlhHupSkrE%2FcxeFZxPvSgI0rRb2jQMB7a2ICvT7Lu715B%2ByhDArRhPidmpTh%2FMCtYswPiOdPrgH4wOx%2BprtMT2zwQaMYH5gwwZ6sJD%2BrRv4ZsKHgFIIQ4fcPHZlkAwLRrbwF&X-Amz-Signature=eaafbd281f27dae515947c16f1ac9fcce708e4f424bf92760314c12ef52fec74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUWBLQ4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Ufhxl%2BZv8uXqByNNXyNbDLEDMTgLCNUplJfhF1a1PAIhAMbtX7Kz5wcqiDTvJ%2F%2BqRNCkjcMEvmoZ85NLmb91ixr0KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwn0HdPpLYT3Qvngq3APlUICGd8Oas44kC2uxx3xHqC3xQzIKN%2FFCud5vkWNAy6PsmEdwPrxLEVGYuMn1n7qEjPe5j9lRqLJKQ6YJubD1vpIE4jREpo9lJFh1TZG1gu5b%2BIYlwgQxSwTyo9%2B1sLdKxBhApREpxfZAVxSEswFChDFmCQSZWWsfN479pgO6CxB6s9pneuIjcOJCD0D6qc8OUZDsv098TmMFgW3EAXqxhpAAAPD5UGp9%2B5hHxPq8xomySOms%2Fdnd6np3L8Il%2BPeUY0AeHSORpIc3SqGNwSwWC80CjPPitFO6630OPc6HNUNhHPtN9Vhwej1VQmDc4JfKxKhlJE%2FkO496kpsNSafaVMrazVLEVjSAS6OpYDVpzAwTKTm%2Baue4efpSAL8YVhR%2BlEtyxbGjayYjqMwku8IYdiusHpXxH2D3qFymKYenRDIEiBOafch8br09ZgQMTvo3WMeDYw%2Fo%2FjQyb%2F7bTQI7bq0b3qN%2BgjlUuZBrhUM0cZ4fB0E%2Bf5SttdMX0mz%2Bb12baSOj4qzz7fB%2BC62QnHgx%2FMGgERfVXreRETVRzdpo6uy1TbveEUua6LK1%2FKFkjWvgUE%2BYTNSnirXLGYyF%2BjXvZncvnayU0QdgdtHV6k1UUQ7DAbA9AfEFpNJhYjDZ59zEBjqkAaBLbUZmUlvOGcXJp7CzHNdOseHzFxmCvmTygtGFqCA%2FF4npOBXIoiZKaUoqO6tNBjyDQW2No7GyZ29BZPmQ%2F8UXAlhHupSkrE%2FcxeFZxPvSgI0rRb2jQMB7a2ICvT7Lu715B%2ByhDArRhPidmpTh%2FMCtYswPiOdPrgH4wOx%2BprtMT2zwQaMYH5gwwZ6sJD%2BrRv4ZsKHgFIIQ4fcPHZlkAwLRrbwF&X-Amz-Signature=bd13629bde378578b0ac1fa54cf078c353d1fa6a446b9474f75ea183aac76752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
