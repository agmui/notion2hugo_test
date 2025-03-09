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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2CU5SE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDDW5LhbjN8HyEqe%2F5oH1m%2Fg8EfjIH3mO%2BNXo6EKL6HJgIhANOrRndxHWBYRK9wmIZU9wbCDrIU9XmS54ZNkK4FhpuBKv8DCGwQABoMNjM3NDIzMTgzODA1IgyO0dj62dqVp7af5Woq3APrFPMYdEurd5WrhSHSM%2Bg%2BGNRzAh1JU8yb0ksQrPRXAJ3z5uiNtXHdnqZyl91QaXFhnTBa4%2FhrCX2C2lQ0ejWwxgQLKP%2BMwGGT0eRakn8p2QAjuP1LCgBxDB3JxTHhgHh1qcqc%2FFLSjGvVN%2FGOgDTvYM563j2a65AQiie%2F4H3K%2BzpSFBhOrln7ujag7cZeqv5Bymo%2BM0XAfWSP%2BWbuSguKqPC9bylkWhXMXyfuZEh2VwZRqR6LC7h5P1gD2D7baYlCSMPOcYKMHNNpN4Z88jtH1mAmKOHpeL67s1OfOPu2Qh159Bu2mkGb88OdJCNFrLuSu78hTwIOnfE5Xuwvq%2Bndo6iCQUpddsyCjIW1a21HhOcOkOH19tQZBE1h5f%2BLVs3XuqKpn4OkQ7v%2FMulIFOfo5vdXR7Lc6Rr1%2Fbh3GgCnFJ8awo7PQLN5OsiCta7x3HhTPkE%2Fn7nAuU44EyOzJ5oFJBMqT6gzXklDPhgI0x61V97dain2p%2BzqFrmRKW2Qp5nOqAU%2F31vKP%2FXLD%2BDh%2Bj6A8Q66q0PG1YsyGOWyq0Dv98RMbK%2FfOmH5JTMeQpEGsbGsVWcp%2FxwQnszxRWHAv%2BO%2FfBwL%2Fpc1f%2BpFx4o42jI8qUJxbJV%2FLbDVmUYSqTDxirS%2BBjqkAfYtuYKVFDKWdXDT0UWC1%2BmJxXUKjL0dOF3YOgtNOqEx%2Bx%2F5mzQKbAoq8MedMDNwikNM7z%2BXiaJEWT%2BJGIRxLD4pLxkCBROY0%2FQLmKPjbl7PgfhvxHEhpWRRVM0Y3vvLSUC67HrwW81e9muXdv8h%2BuMpIsxGhHVbXWGhtYvWVC67eQWG%2BO6mJax4Dvdaun7ngt88%2BVWP3OfF3LkpEpAOctK5tBtc&X-Amz-Signature=583754605643a010e490e7d819bf9037f4b3881c121ad5756949b44b1ca02078&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2CU5SE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDDW5LhbjN8HyEqe%2F5oH1m%2Fg8EfjIH3mO%2BNXo6EKL6HJgIhANOrRndxHWBYRK9wmIZU9wbCDrIU9XmS54ZNkK4FhpuBKv8DCGwQABoMNjM3NDIzMTgzODA1IgyO0dj62dqVp7af5Woq3APrFPMYdEurd5WrhSHSM%2Bg%2BGNRzAh1JU8yb0ksQrPRXAJ3z5uiNtXHdnqZyl91QaXFhnTBa4%2FhrCX2C2lQ0ejWwxgQLKP%2BMwGGT0eRakn8p2QAjuP1LCgBxDB3JxTHhgHh1qcqc%2FFLSjGvVN%2FGOgDTvYM563j2a65AQiie%2F4H3K%2BzpSFBhOrln7ujag7cZeqv5Bymo%2BM0XAfWSP%2BWbuSguKqPC9bylkWhXMXyfuZEh2VwZRqR6LC7h5P1gD2D7baYlCSMPOcYKMHNNpN4Z88jtH1mAmKOHpeL67s1OfOPu2Qh159Bu2mkGb88OdJCNFrLuSu78hTwIOnfE5Xuwvq%2Bndo6iCQUpddsyCjIW1a21HhOcOkOH19tQZBE1h5f%2BLVs3XuqKpn4OkQ7v%2FMulIFOfo5vdXR7Lc6Rr1%2Fbh3GgCnFJ8awo7PQLN5OsiCta7x3HhTPkE%2Fn7nAuU44EyOzJ5oFJBMqT6gzXklDPhgI0x61V97dain2p%2BzqFrmRKW2Qp5nOqAU%2F31vKP%2FXLD%2BDh%2Bj6A8Q66q0PG1YsyGOWyq0Dv98RMbK%2FfOmH5JTMeQpEGsbGsVWcp%2FxwQnszxRWHAv%2BO%2FfBwL%2Fpc1f%2BpFx4o42jI8qUJxbJV%2FLbDVmUYSqTDxirS%2BBjqkAfYtuYKVFDKWdXDT0UWC1%2BmJxXUKjL0dOF3YOgtNOqEx%2Bx%2F5mzQKbAoq8MedMDNwikNM7z%2BXiaJEWT%2BJGIRxLD4pLxkCBROY0%2FQLmKPjbl7PgfhvxHEhpWRRVM0Y3vvLSUC67HrwW81e9muXdv8h%2BuMpIsxGhHVbXWGhtYvWVC67eQWG%2BO6mJax4Dvdaun7ngt88%2BVWP3OfF3LkpEpAOctK5tBtc&X-Amz-Signature=33aa918a406f7f7b66b1f0a4c9dcfceecc61381843521ef5d8eb0fc7888d7be3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2CU5SE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDDW5LhbjN8HyEqe%2F5oH1m%2Fg8EfjIH3mO%2BNXo6EKL6HJgIhANOrRndxHWBYRK9wmIZU9wbCDrIU9XmS54ZNkK4FhpuBKv8DCGwQABoMNjM3NDIzMTgzODA1IgyO0dj62dqVp7af5Woq3APrFPMYdEurd5WrhSHSM%2Bg%2BGNRzAh1JU8yb0ksQrPRXAJ3z5uiNtXHdnqZyl91QaXFhnTBa4%2FhrCX2C2lQ0ejWwxgQLKP%2BMwGGT0eRakn8p2QAjuP1LCgBxDB3JxTHhgHh1qcqc%2FFLSjGvVN%2FGOgDTvYM563j2a65AQiie%2F4H3K%2BzpSFBhOrln7ujag7cZeqv5Bymo%2BM0XAfWSP%2BWbuSguKqPC9bylkWhXMXyfuZEh2VwZRqR6LC7h5P1gD2D7baYlCSMPOcYKMHNNpN4Z88jtH1mAmKOHpeL67s1OfOPu2Qh159Bu2mkGb88OdJCNFrLuSu78hTwIOnfE5Xuwvq%2Bndo6iCQUpddsyCjIW1a21HhOcOkOH19tQZBE1h5f%2BLVs3XuqKpn4OkQ7v%2FMulIFOfo5vdXR7Lc6Rr1%2Fbh3GgCnFJ8awo7PQLN5OsiCta7x3HhTPkE%2Fn7nAuU44EyOzJ5oFJBMqT6gzXklDPhgI0x61V97dain2p%2BzqFrmRKW2Qp5nOqAU%2F31vKP%2FXLD%2BDh%2Bj6A8Q66q0PG1YsyGOWyq0Dv98RMbK%2FfOmH5JTMeQpEGsbGsVWcp%2FxwQnszxRWHAv%2BO%2FfBwL%2Fpc1f%2BpFx4o42jI8qUJxbJV%2FLbDVmUYSqTDxirS%2BBjqkAfYtuYKVFDKWdXDT0UWC1%2BmJxXUKjL0dOF3YOgtNOqEx%2Bx%2F5mzQKbAoq8MedMDNwikNM7z%2BXiaJEWT%2BJGIRxLD4pLxkCBROY0%2FQLmKPjbl7PgfhvxHEhpWRRVM0Y3vvLSUC67HrwW81e9muXdv8h%2BuMpIsxGhHVbXWGhtYvWVC67eQWG%2BO6mJax4Dvdaun7ngt88%2BVWP3OfF3LkpEpAOctK5tBtc&X-Amz-Signature=f9ffb8693f73ce2dc036d34c0360a1cf2138e99d52365878b250be772cad0a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2CU5SE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDDW5LhbjN8HyEqe%2F5oH1m%2Fg8EfjIH3mO%2BNXo6EKL6HJgIhANOrRndxHWBYRK9wmIZU9wbCDrIU9XmS54ZNkK4FhpuBKv8DCGwQABoMNjM3NDIzMTgzODA1IgyO0dj62dqVp7af5Woq3APrFPMYdEurd5WrhSHSM%2Bg%2BGNRzAh1JU8yb0ksQrPRXAJ3z5uiNtXHdnqZyl91QaXFhnTBa4%2FhrCX2C2lQ0ejWwxgQLKP%2BMwGGT0eRakn8p2QAjuP1LCgBxDB3JxTHhgHh1qcqc%2FFLSjGvVN%2FGOgDTvYM563j2a65AQiie%2F4H3K%2BzpSFBhOrln7ujag7cZeqv5Bymo%2BM0XAfWSP%2BWbuSguKqPC9bylkWhXMXyfuZEh2VwZRqR6LC7h5P1gD2D7baYlCSMPOcYKMHNNpN4Z88jtH1mAmKOHpeL67s1OfOPu2Qh159Bu2mkGb88OdJCNFrLuSu78hTwIOnfE5Xuwvq%2Bndo6iCQUpddsyCjIW1a21HhOcOkOH19tQZBE1h5f%2BLVs3XuqKpn4OkQ7v%2FMulIFOfo5vdXR7Lc6Rr1%2Fbh3GgCnFJ8awo7PQLN5OsiCta7x3HhTPkE%2Fn7nAuU44EyOzJ5oFJBMqT6gzXklDPhgI0x61V97dain2p%2BzqFrmRKW2Qp5nOqAU%2F31vKP%2FXLD%2BDh%2Bj6A8Q66q0PG1YsyGOWyq0Dv98RMbK%2FfOmH5JTMeQpEGsbGsVWcp%2FxwQnszxRWHAv%2BO%2FfBwL%2Fpc1f%2BpFx4o42jI8qUJxbJV%2FLbDVmUYSqTDxirS%2BBjqkAfYtuYKVFDKWdXDT0UWC1%2BmJxXUKjL0dOF3YOgtNOqEx%2Bx%2F5mzQKbAoq8MedMDNwikNM7z%2BXiaJEWT%2BJGIRxLD4pLxkCBROY0%2FQLmKPjbl7PgfhvxHEhpWRRVM0Y3vvLSUC67HrwW81e9muXdv8h%2BuMpIsxGhHVbXWGhtYvWVC67eQWG%2BO6mJax4Dvdaun7ngt88%2BVWP3OfF3LkpEpAOctK5tBtc&X-Amz-Signature=114c0954a57b39dfa1aeef599267191b1af8b7229a63664fb434fbf4e724282b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2CU5SE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDDW5LhbjN8HyEqe%2F5oH1m%2Fg8EfjIH3mO%2BNXo6EKL6HJgIhANOrRndxHWBYRK9wmIZU9wbCDrIU9XmS54ZNkK4FhpuBKv8DCGwQABoMNjM3NDIzMTgzODA1IgyO0dj62dqVp7af5Woq3APrFPMYdEurd5WrhSHSM%2Bg%2BGNRzAh1JU8yb0ksQrPRXAJ3z5uiNtXHdnqZyl91QaXFhnTBa4%2FhrCX2C2lQ0ejWwxgQLKP%2BMwGGT0eRakn8p2QAjuP1LCgBxDB3JxTHhgHh1qcqc%2FFLSjGvVN%2FGOgDTvYM563j2a65AQiie%2F4H3K%2BzpSFBhOrln7ujag7cZeqv5Bymo%2BM0XAfWSP%2BWbuSguKqPC9bylkWhXMXyfuZEh2VwZRqR6LC7h5P1gD2D7baYlCSMPOcYKMHNNpN4Z88jtH1mAmKOHpeL67s1OfOPu2Qh159Bu2mkGb88OdJCNFrLuSu78hTwIOnfE5Xuwvq%2Bndo6iCQUpddsyCjIW1a21HhOcOkOH19tQZBE1h5f%2BLVs3XuqKpn4OkQ7v%2FMulIFOfo5vdXR7Lc6Rr1%2Fbh3GgCnFJ8awo7PQLN5OsiCta7x3HhTPkE%2Fn7nAuU44EyOzJ5oFJBMqT6gzXklDPhgI0x61V97dain2p%2BzqFrmRKW2Qp5nOqAU%2F31vKP%2FXLD%2BDh%2Bj6A8Q66q0PG1YsyGOWyq0Dv98RMbK%2FfOmH5JTMeQpEGsbGsVWcp%2FxwQnszxRWHAv%2BO%2FfBwL%2Fpc1f%2BpFx4o42jI8qUJxbJV%2FLbDVmUYSqTDxirS%2BBjqkAfYtuYKVFDKWdXDT0UWC1%2BmJxXUKjL0dOF3YOgtNOqEx%2Bx%2F5mzQKbAoq8MedMDNwikNM7z%2BXiaJEWT%2BJGIRxLD4pLxkCBROY0%2FQLmKPjbl7PgfhvxHEhpWRRVM0Y3vvLSUC67HrwW81e9muXdv8h%2BuMpIsxGhHVbXWGhtYvWVC67eQWG%2BO6mJax4Dvdaun7ngt88%2BVWP3OfF3LkpEpAOctK5tBtc&X-Amz-Signature=00364b9d4107b53c5f28e108d16197ec5263e92d4a094bb23607685810eae747&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2CU5SE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDDW5LhbjN8HyEqe%2F5oH1m%2Fg8EfjIH3mO%2BNXo6EKL6HJgIhANOrRndxHWBYRK9wmIZU9wbCDrIU9XmS54ZNkK4FhpuBKv8DCGwQABoMNjM3NDIzMTgzODA1IgyO0dj62dqVp7af5Woq3APrFPMYdEurd5WrhSHSM%2Bg%2BGNRzAh1JU8yb0ksQrPRXAJ3z5uiNtXHdnqZyl91QaXFhnTBa4%2FhrCX2C2lQ0ejWwxgQLKP%2BMwGGT0eRakn8p2QAjuP1LCgBxDB3JxTHhgHh1qcqc%2FFLSjGvVN%2FGOgDTvYM563j2a65AQiie%2F4H3K%2BzpSFBhOrln7ujag7cZeqv5Bymo%2BM0XAfWSP%2BWbuSguKqPC9bylkWhXMXyfuZEh2VwZRqR6LC7h5P1gD2D7baYlCSMPOcYKMHNNpN4Z88jtH1mAmKOHpeL67s1OfOPu2Qh159Bu2mkGb88OdJCNFrLuSu78hTwIOnfE5Xuwvq%2Bndo6iCQUpddsyCjIW1a21HhOcOkOH19tQZBE1h5f%2BLVs3XuqKpn4OkQ7v%2FMulIFOfo5vdXR7Lc6Rr1%2Fbh3GgCnFJ8awo7PQLN5OsiCta7x3HhTPkE%2Fn7nAuU44EyOzJ5oFJBMqT6gzXklDPhgI0x61V97dain2p%2BzqFrmRKW2Qp5nOqAU%2F31vKP%2FXLD%2BDh%2Bj6A8Q66q0PG1YsyGOWyq0Dv98RMbK%2FfOmH5JTMeQpEGsbGsVWcp%2FxwQnszxRWHAv%2BO%2FfBwL%2Fpc1f%2BpFx4o42jI8qUJxbJV%2FLbDVmUYSqTDxirS%2BBjqkAfYtuYKVFDKWdXDT0UWC1%2BmJxXUKjL0dOF3YOgtNOqEx%2Bx%2F5mzQKbAoq8MedMDNwikNM7z%2BXiaJEWT%2BJGIRxLD4pLxkCBROY0%2FQLmKPjbl7PgfhvxHEhpWRRVM0Y3vvLSUC67HrwW81e9muXdv8h%2BuMpIsxGhHVbXWGhtYvWVC67eQWG%2BO6mJax4Dvdaun7ngt88%2BVWP3OfF3LkpEpAOctK5tBtc&X-Amz-Signature=dfe8b058915410a35af2d1a71ad7a5093c14dddc1c51aeed1143fb340fb2f7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2CU5SE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDDW5LhbjN8HyEqe%2F5oH1m%2Fg8EfjIH3mO%2BNXo6EKL6HJgIhANOrRndxHWBYRK9wmIZU9wbCDrIU9XmS54ZNkK4FhpuBKv8DCGwQABoMNjM3NDIzMTgzODA1IgyO0dj62dqVp7af5Woq3APrFPMYdEurd5WrhSHSM%2Bg%2BGNRzAh1JU8yb0ksQrPRXAJ3z5uiNtXHdnqZyl91QaXFhnTBa4%2FhrCX2C2lQ0ejWwxgQLKP%2BMwGGT0eRakn8p2QAjuP1LCgBxDB3JxTHhgHh1qcqc%2FFLSjGvVN%2FGOgDTvYM563j2a65AQiie%2F4H3K%2BzpSFBhOrln7ujag7cZeqv5Bymo%2BM0XAfWSP%2BWbuSguKqPC9bylkWhXMXyfuZEh2VwZRqR6LC7h5P1gD2D7baYlCSMPOcYKMHNNpN4Z88jtH1mAmKOHpeL67s1OfOPu2Qh159Bu2mkGb88OdJCNFrLuSu78hTwIOnfE5Xuwvq%2Bndo6iCQUpddsyCjIW1a21HhOcOkOH19tQZBE1h5f%2BLVs3XuqKpn4OkQ7v%2FMulIFOfo5vdXR7Lc6Rr1%2Fbh3GgCnFJ8awo7PQLN5OsiCta7x3HhTPkE%2Fn7nAuU44EyOzJ5oFJBMqT6gzXklDPhgI0x61V97dain2p%2BzqFrmRKW2Qp5nOqAU%2F31vKP%2FXLD%2BDh%2Bj6A8Q66q0PG1YsyGOWyq0Dv98RMbK%2FfOmH5JTMeQpEGsbGsVWcp%2FxwQnszxRWHAv%2BO%2FfBwL%2Fpc1f%2BpFx4o42jI8qUJxbJV%2FLbDVmUYSqTDxirS%2BBjqkAfYtuYKVFDKWdXDT0UWC1%2BmJxXUKjL0dOF3YOgtNOqEx%2Bx%2F5mzQKbAoq8MedMDNwikNM7z%2BXiaJEWT%2BJGIRxLD4pLxkCBROY0%2FQLmKPjbl7PgfhvxHEhpWRRVM0Y3vvLSUC67HrwW81e9muXdv8h%2BuMpIsxGhHVbXWGhtYvWVC67eQWG%2BO6mJax4Dvdaun7ngt88%2BVWP3OfF3LkpEpAOctK5tBtc&X-Amz-Signature=13a5a4f34a7997605b069e77f95e0f70b2d0108798e96f1724203673539505c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2CU5SE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDDW5LhbjN8HyEqe%2F5oH1m%2Fg8EfjIH3mO%2BNXo6EKL6HJgIhANOrRndxHWBYRK9wmIZU9wbCDrIU9XmS54ZNkK4FhpuBKv8DCGwQABoMNjM3NDIzMTgzODA1IgyO0dj62dqVp7af5Woq3APrFPMYdEurd5WrhSHSM%2Bg%2BGNRzAh1JU8yb0ksQrPRXAJ3z5uiNtXHdnqZyl91QaXFhnTBa4%2FhrCX2C2lQ0ejWwxgQLKP%2BMwGGT0eRakn8p2QAjuP1LCgBxDB3JxTHhgHh1qcqc%2FFLSjGvVN%2FGOgDTvYM563j2a65AQiie%2F4H3K%2BzpSFBhOrln7ujag7cZeqv5Bymo%2BM0XAfWSP%2BWbuSguKqPC9bylkWhXMXyfuZEh2VwZRqR6LC7h5P1gD2D7baYlCSMPOcYKMHNNpN4Z88jtH1mAmKOHpeL67s1OfOPu2Qh159Bu2mkGb88OdJCNFrLuSu78hTwIOnfE5Xuwvq%2Bndo6iCQUpddsyCjIW1a21HhOcOkOH19tQZBE1h5f%2BLVs3XuqKpn4OkQ7v%2FMulIFOfo5vdXR7Lc6Rr1%2Fbh3GgCnFJ8awo7PQLN5OsiCta7x3HhTPkE%2Fn7nAuU44EyOzJ5oFJBMqT6gzXklDPhgI0x61V97dain2p%2BzqFrmRKW2Qp5nOqAU%2F31vKP%2FXLD%2BDh%2Bj6A8Q66q0PG1YsyGOWyq0Dv98RMbK%2FfOmH5JTMeQpEGsbGsVWcp%2FxwQnszxRWHAv%2BO%2FfBwL%2Fpc1f%2BpFx4o42jI8qUJxbJV%2FLbDVmUYSqTDxirS%2BBjqkAfYtuYKVFDKWdXDT0UWC1%2BmJxXUKjL0dOF3YOgtNOqEx%2Bx%2F5mzQKbAoq8MedMDNwikNM7z%2BXiaJEWT%2BJGIRxLD4pLxkCBROY0%2FQLmKPjbl7PgfhvxHEhpWRRVM0Y3vvLSUC67HrwW81e9muXdv8h%2BuMpIsxGhHVbXWGhtYvWVC67eQWG%2BO6mJax4Dvdaun7ngt88%2BVWP3OfF3LkpEpAOctK5tBtc&X-Amz-Signature=36346c7b9381f60dd5803c11d23d8540e005a974ba8ddc38b95923e655691554&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
