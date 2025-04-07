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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY7YJUQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsJHpYU0hxs32zu1UPf7hPaGRWwUOZ16Y0LI%2BSSigpnAiAuKqs%2Fo83ZHSlyl8AUEVAp2mAWYi%2FjQa%2BqNm944%2B0S7Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM6XmdItcecSUJforEKtwDeuz197lP1ufvtnyUhLhG0UHcMYH1qVWv%2B%2ByDhm4QocxUUYf7IIL%2Bvsd1isgOHLF19urC0jjwRbCUa4FPkySh12AmSqJ5p%2FMIWjqK6UsqIKXbE5NTzuj%2BbIeAj9v1pRG0HAuMh0yVRilzXS8T0rvLWauatbCkVZxzCu157woLAlkF4wmu9PHOkdcXgXaKbugh5cutMyZwagGbqvL3fKM%2BUwkouI%2Fge4t%2B%2BwlgO9YsULcro1N7jb2MLNjenKILPqgjKP4MBLkKRluXgSA7kfQsr073FcsJRRP1%2FgecWFwDb572ZSRZjym1NyHh3vyy3vaa10MXHUa0wiHdA%2FzybCG0nyGH9hJyARtUtmGGwWoUsMXUTp6%2Fvd1vsLlM7Dy7Zo%2BBlYHVU0h5EPiWMuxcRLSo672fkyRArDq3n%2BUgocVO%2Fai%2B0dWFeZ8coEJqFv9bG%2BzvY1RD1CBcTTC9Lmu9uEB9diKqnimfHOEAduqX4ajSWB4QtplBw72DhyJz%2BDAFqBNT6k5zZSN6Ui57IL5CjiScvnH9mZSb3HGRpFrANSm0fOY4yX7FmNQRb%2FXkvbXwkFFQ0omT%2B8Gc6csJDctSqvH6r8ULugRtXIHVQPXqs6FfwE4XpxIA2DFB7fIkZ%2Bcwu4bOvwY6pgFVHX7SoaihUgUgKPAOcxEZAQx2tawPLE6QU2uXbutMn%2BfcLmmT%2FUM3brPiCAHX0fLzo13ivw0UXuvBUhhxlY6ONMD0sSZO75f%2BQ7T%2FFKxzJi858p0CLoxpDIJ73pYOLmHEp%2B61AC%2B7hRxglY%2Flc%2BHPyqOnlNpt80DPhhSmL%2FyumkBV2XTKFNBr0oq0APUgTkdDcti5oIwdmeVRB2beJ4JJK47ATgwk&X-Amz-Signature=52febf4049525c280c826b9a0c1848951cc4a657d752354d6c1968132824c190&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY7YJUQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsJHpYU0hxs32zu1UPf7hPaGRWwUOZ16Y0LI%2BSSigpnAiAuKqs%2Fo83ZHSlyl8AUEVAp2mAWYi%2FjQa%2BqNm944%2B0S7Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM6XmdItcecSUJforEKtwDeuz197lP1ufvtnyUhLhG0UHcMYH1qVWv%2B%2ByDhm4QocxUUYf7IIL%2Bvsd1isgOHLF19urC0jjwRbCUa4FPkySh12AmSqJ5p%2FMIWjqK6UsqIKXbE5NTzuj%2BbIeAj9v1pRG0HAuMh0yVRilzXS8T0rvLWauatbCkVZxzCu157woLAlkF4wmu9PHOkdcXgXaKbugh5cutMyZwagGbqvL3fKM%2BUwkouI%2Fge4t%2B%2BwlgO9YsULcro1N7jb2MLNjenKILPqgjKP4MBLkKRluXgSA7kfQsr073FcsJRRP1%2FgecWFwDb572ZSRZjym1NyHh3vyy3vaa10MXHUa0wiHdA%2FzybCG0nyGH9hJyARtUtmGGwWoUsMXUTp6%2Fvd1vsLlM7Dy7Zo%2BBlYHVU0h5EPiWMuxcRLSo672fkyRArDq3n%2BUgocVO%2Fai%2B0dWFeZ8coEJqFv9bG%2BzvY1RD1CBcTTC9Lmu9uEB9diKqnimfHOEAduqX4ajSWB4QtplBw72DhyJz%2BDAFqBNT6k5zZSN6Ui57IL5CjiScvnH9mZSb3HGRpFrANSm0fOY4yX7FmNQRb%2FXkvbXwkFFQ0omT%2B8Gc6csJDctSqvH6r8ULugRtXIHVQPXqs6FfwE4XpxIA2DFB7fIkZ%2Bcwu4bOvwY6pgFVHX7SoaihUgUgKPAOcxEZAQx2tawPLE6QU2uXbutMn%2BfcLmmT%2FUM3brPiCAHX0fLzo13ivw0UXuvBUhhxlY6ONMD0sSZO75f%2BQ7T%2FFKxzJi858p0CLoxpDIJ73pYOLmHEp%2B61AC%2B7hRxglY%2Flc%2BHPyqOnlNpt80DPhhSmL%2FyumkBV2XTKFNBr0oq0APUgTkdDcti5oIwdmeVRB2beJ4JJK47ATgwk&X-Amz-Signature=d3bfb0707a74edaa574bc6865ea0d7c2ab3ea5aff1b89f8dfd0860fac4c6dc33&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY7YJUQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsJHpYU0hxs32zu1UPf7hPaGRWwUOZ16Y0LI%2BSSigpnAiAuKqs%2Fo83ZHSlyl8AUEVAp2mAWYi%2FjQa%2BqNm944%2B0S7Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM6XmdItcecSUJforEKtwDeuz197lP1ufvtnyUhLhG0UHcMYH1qVWv%2B%2ByDhm4QocxUUYf7IIL%2Bvsd1isgOHLF19urC0jjwRbCUa4FPkySh12AmSqJ5p%2FMIWjqK6UsqIKXbE5NTzuj%2BbIeAj9v1pRG0HAuMh0yVRilzXS8T0rvLWauatbCkVZxzCu157woLAlkF4wmu9PHOkdcXgXaKbugh5cutMyZwagGbqvL3fKM%2BUwkouI%2Fge4t%2B%2BwlgO9YsULcro1N7jb2MLNjenKILPqgjKP4MBLkKRluXgSA7kfQsr073FcsJRRP1%2FgecWFwDb572ZSRZjym1NyHh3vyy3vaa10MXHUa0wiHdA%2FzybCG0nyGH9hJyARtUtmGGwWoUsMXUTp6%2Fvd1vsLlM7Dy7Zo%2BBlYHVU0h5EPiWMuxcRLSo672fkyRArDq3n%2BUgocVO%2Fai%2B0dWFeZ8coEJqFv9bG%2BzvY1RD1CBcTTC9Lmu9uEB9diKqnimfHOEAduqX4ajSWB4QtplBw72DhyJz%2BDAFqBNT6k5zZSN6Ui57IL5CjiScvnH9mZSb3HGRpFrANSm0fOY4yX7FmNQRb%2FXkvbXwkFFQ0omT%2B8Gc6csJDctSqvH6r8ULugRtXIHVQPXqs6FfwE4XpxIA2DFB7fIkZ%2Bcwu4bOvwY6pgFVHX7SoaihUgUgKPAOcxEZAQx2tawPLE6QU2uXbutMn%2BfcLmmT%2FUM3brPiCAHX0fLzo13ivw0UXuvBUhhxlY6ONMD0sSZO75f%2BQ7T%2FFKxzJi858p0CLoxpDIJ73pYOLmHEp%2B61AC%2B7hRxglY%2Flc%2BHPyqOnlNpt80DPhhSmL%2FyumkBV2XTKFNBr0oq0APUgTkdDcti5oIwdmeVRB2beJ4JJK47ATgwk&X-Amz-Signature=1a69f280f9d9af744c2bc64f9c1041ea7c2b88d36cb6c605b17b9ea759e3d444&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY7YJUQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsJHpYU0hxs32zu1UPf7hPaGRWwUOZ16Y0LI%2BSSigpnAiAuKqs%2Fo83ZHSlyl8AUEVAp2mAWYi%2FjQa%2BqNm944%2B0S7Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM6XmdItcecSUJforEKtwDeuz197lP1ufvtnyUhLhG0UHcMYH1qVWv%2B%2ByDhm4QocxUUYf7IIL%2Bvsd1isgOHLF19urC0jjwRbCUa4FPkySh12AmSqJ5p%2FMIWjqK6UsqIKXbE5NTzuj%2BbIeAj9v1pRG0HAuMh0yVRilzXS8T0rvLWauatbCkVZxzCu157woLAlkF4wmu9PHOkdcXgXaKbugh5cutMyZwagGbqvL3fKM%2BUwkouI%2Fge4t%2B%2BwlgO9YsULcro1N7jb2MLNjenKILPqgjKP4MBLkKRluXgSA7kfQsr073FcsJRRP1%2FgecWFwDb572ZSRZjym1NyHh3vyy3vaa10MXHUa0wiHdA%2FzybCG0nyGH9hJyARtUtmGGwWoUsMXUTp6%2Fvd1vsLlM7Dy7Zo%2BBlYHVU0h5EPiWMuxcRLSo672fkyRArDq3n%2BUgocVO%2Fai%2B0dWFeZ8coEJqFv9bG%2BzvY1RD1CBcTTC9Lmu9uEB9diKqnimfHOEAduqX4ajSWB4QtplBw72DhyJz%2BDAFqBNT6k5zZSN6Ui57IL5CjiScvnH9mZSb3HGRpFrANSm0fOY4yX7FmNQRb%2FXkvbXwkFFQ0omT%2B8Gc6csJDctSqvH6r8ULugRtXIHVQPXqs6FfwE4XpxIA2DFB7fIkZ%2Bcwu4bOvwY6pgFVHX7SoaihUgUgKPAOcxEZAQx2tawPLE6QU2uXbutMn%2BfcLmmT%2FUM3brPiCAHX0fLzo13ivw0UXuvBUhhxlY6ONMD0sSZO75f%2BQ7T%2FFKxzJi858p0CLoxpDIJ73pYOLmHEp%2B61AC%2B7hRxglY%2Flc%2BHPyqOnlNpt80DPhhSmL%2FyumkBV2XTKFNBr0oq0APUgTkdDcti5oIwdmeVRB2beJ4JJK47ATgwk&X-Amz-Signature=ef1b15dcb288727acce0c4767ed2c2fe0d65e44bd1ce84df1917f24739213bee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY7YJUQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsJHpYU0hxs32zu1UPf7hPaGRWwUOZ16Y0LI%2BSSigpnAiAuKqs%2Fo83ZHSlyl8AUEVAp2mAWYi%2FjQa%2BqNm944%2B0S7Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM6XmdItcecSUJforEKtwDeuz197lP1ufvtnyUhLhG0UHcMYH1qVWv%2B%2ByDhm4QocxUUYf7IIL%2Bvsd1isgOHLF19urC0jjwRbCUa4FPkySh12AmSqJ5p%2FMIWjqK6UsqIKXbE5NTzuj%2BbIeAj9v1pRG0HAuMh0yVRilzXS8T0rvLWauatbCkVZxzCu157woLAlkF4wmu9PHOkdcXgXaKbugh5cutMyZwagGbqvL3fKM%2BUwkouI%2Fge4t%2B%2BwlgO9YsULcro1N7jb2MLNjenKILPqgjKP4MBLkKRluXgSA7kfQsr073FcsJRRP1%2FgecWFwDb572ZSRZjym1NyHh3vyy3vaa10MXHUa0wiHdA%2FzybCG0nyGH9hJyARtUtmGGwWoUsMXUTp6%2Fvd1vsLlM7Dy7Zo%2BBlYHVU0h5EPiWMuxcRLSo672fkyRArDq3n%2BUgocVO%2Fai%2B0dWFeZ8coEJqFv9bG%2BzvY1RD1CBcTTC9Lmu9uEB9diKqnimfHOEAduqX4ajSWB4QtplBw72DhyJz%2BDAFqBNT6k5zZSN6Ui57IL5CjiScvnH9mZSb3HGRpFrANSm0fOY4yX7FmNQRb%2FXkvbXwkFFQ0omT%2B8Gc6csJDctSqvH6r8ULugRtXIHVQPXqs6FfwE4XpxIA2DFB7fIkZ%2Bcwu4bOvwY6pgFVHX7SoaihUgUgKPAOcxEZAQx2tawPLE6QU2uXbutMn%2BfcLmmT%2FUM3brPiCAHX0fLzo13ivw0UXuvBUhhxlY6ONMD0sSZO75f%2BQ7T%2FFKxzJi858p0CLoxpDIJ73pYOLmHEp%2B61AC%2B7hRxglY%2Flc%2BHPyqOnlNpt80DPhhSmL%2FyumkBV2XTKFNBr0oq0APUgTkdDcti5oIwdmeVRB2beJ4JJK47ATgwk&X-Amz-Signature=2d210783cc479e854bc8d2abc0aa02a645c8ae9d12117f5a80f8b066d5cf5427&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY7YJUQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsJHpYU0hxs32zu1UPf7hPaGRWwUOZ16Y0LI%2BSSigpnAiAuKqs%2Fo83ZHSlyl8AUEVAp2mAWYi%2FjQa%2BqNm944%2B0S7Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM6XmdItcecSUJforEKtwDeuz197lP1ufvtnyUhLhG0UHcMYH1qVWv%2B%2ByDhm4QocxUUYf7IIL%2Bvsd1isgOHLF19urC0jjwRbCUa4FPkySh12AmSqJ5p%2FMIWjqK6UsqIKXbE5NTzuj%2BbIeAj9v1pRG0HAuMh0yVRilzXS8T0rvLWauatbCkVZxzCu157woLAlkF4wmu9PHOkdcXgXaKbugh5cutMyZwagGbqvL3fKM%2BUwkouI%2Fge4t%2B%2BwlgO9YsULcro1N7jb2MLNjenKILPqgjKP4MBLkKRluXgSA7kfQsr073FcsJRRP1%2FgecWFwDb572ZSRZjym1NyHh3vyy3vaa10MXHUa0wiHdA%2FzybCG0nyGH9hJyARtUtmGGwWoUsMXUTp6%2Fvd1vsLlM7Dy7Zo%2BBlYHVU0h5EPiWMuxcRLSo672fkyRArDq3n%2BUgocVO%2Fai%2B0dWFeZ8coEJqFv9bG%2BzvY1RD1CBcTTC9Lmu9uEB9diKqnimfHOEAduqX4ajSWB4QtplBw72DhyJz%2BDAFqBNT6k5zZSN6Ui57IL5CjiScvnH9mZSb3HGRpFrANSm0fOY4yX7FmNQRb%2FXkvbXwkFFQ0omT%2B8Gc6csJDctSqvH6r8ULugRtXIHVQPXqs6FfwE4XpxIA2DFB7fIkZ%2Bcwu4bOvwY6pgFVHX7SoaihUgUgKPAOcxEZAQx2tawPLE6QU2uXbutMn%2BfcLmmT%2FUM3brPiCAHX0fLzo13ivw0UXuvBUhhxlY6ONMD0sSZO75f%2BQ7T%2FFKxzJi858p0CLoxpDIJ73pYOLmHEp%2B61AC%2B7hRxglY%2Flc%2BHPyqOnlNpt80DPhhSmL%2FyumkBV2XTKFNBr0oq0APUgTkdDcti5oIwdmeVRB2beJ4JJK47ATgwk&X-Amz-Signature=bd320362464d8315f6172182bb619b141c92b9d800631245b91d407ceedd351e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY7YJUQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsJHpYU0hxs32zu1UPf7hPaGRWwUOZ16Y0LI%2BSSigpnAiAuKqs%2Fo83ZHSlyl8AUEVAp2mAWYi%2FjQa%2BqNm944%2B0S7Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM6XmdItcecSUJforEKtwDeuz197lP1ufvtnyUhLhG0UHcMYH1qVWv%2B%2ByDhm4QocxUUYf7IIL%2Bvsd1isgOHLF19urC0jjwRbCUa4FPkySh12AmSqJ5p%2FMIWjqK6UsqIKXbE5NTzuj%2BbIeAj9v1pRG0HAuMh0yVRilzXS8T0rvLWauatbCkVZxzCu157woLAlkF4wmu9PHOkdcXgXaKbugh5cutMyZwagGbqvL3fKM%2BUwkouI%2Fge4t%2B%2BwlgO9YsULcro1N7jb2MLNjenKILPqgjKP4MBLkKRluXgSA7kfQsr073FcsJRRP1%2FgecWFwDb572ZSRZjym1NyHh3vyy3vaa10MXHUa0wiHdA%2FzybCG0nyGH9hJyARtUtmGGwWoUsMXUTp6%2Fvd1vsLlM7Dy7Zo%2BBlYHVU0h5EPiWMuxcRLSo672fkyRArDq3n%2BUgocVO%2Fai%2B0dWFeZ8coEJqFv9bG%2BzvY1RD1CBcTTC9Lmu9uEB9diKqnimfHOEAduqX4ajSWB4QtplBw72DhyJz%2BDAFqBNT6k5zZSN6Ui57IL5CjiScvnH9mZSb3HGRpFrANSm0fOY4yX7FmNQRb%2FXkvbXwkFFQ0omT%2B8Gc6csJDctSqvH6r8ULugRtXIHVQPXqs6FfwE4XpxIA2DFB7fIkZ%2Bcwu4bOvwY6pgFVHX7SoaihUgUgKPAOcxEZAQx2tawPLE6QU2uXbutMn%2BfcLmmT%2FUM3brPiCAHX0fLzo13ivw0UXuvBUhhxlY6ONMD0sSZO75f%2BQ7T%2FFKxzJi858p0CLoxpDIJ73pYOLmHEp%2B61AC%2B7hRxglY%2Flc%2BHPyqOnlNpt80DPhhSmL%2FyumkBV2XTKFNBr0oq0APUgTkdDcti5oIwdmeVRB2beJ4JJK47ATgwk&X-Amz-Signature=6e28d0db269606b00403f7fdcf89f53c93cffa7b05067addc133a44433356727&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY7YJUQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsJHpYU0hxs32zu1UPf7hPaGRWwUOZ16Y0LI%2BSSigpnAiAuKqs%2Fo83ZHSlyl8AUEVAp2mAWYi%2FjQa%2BqNm944%2B0S7Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM6XmdItcecSUJforEKtwDeuz197lP1ufvtnyUhLhG0UHcMYH1qVWv%2B%2ByDhm4QocxUUYf7IIL%2Bvsd1isgOHLF19urC0jjwRbCUa4FPkySh12AmSqJ5p%2FMIWjqK6UsqIKXbE5NTzuj%2BbIeAj9v1pRG0HAuMh0yVRilzXS8T0rvLWauatbCkVZxzCu157woLAlkF4wmu9PHOkdcXgXaKbugh5cutMyZwagGbqvL3fKM%2BUwkouI%2Fge4t%2B%2BwlgO9YsULcro1N7jb2MLNjenKILPqgjKP4MBLkKRluXgSA7kfQsr073FcsJRRP1%2FgecWFwDb572ZSRZjym1NyHh3vyy3vaa10MXHUa0wiHdA%2FzybCG0nyGH9hJyARtUtmGGwWoUsMXUTp6%2Fvd1vsLlM7Dy7Zo%2BBlYHVU0h5EPiWMuxcRLSo672fkyRArDq3n%2BUgocVO%2Fai%2B0dWFeZ8coEJqFv9bG%2BzvY1RD1CBcTTC9Lmu9uEB9diKqnimfHOEAduqX4ajSWB4QtplBw72DhyJz%2BDAFqBNT6k5zZSN6Ui57IL5CjiScvnH9mZSb3HGRpFrANSm0fOY4yX7FmNQRb%2FXkvbXwkFFQ0omT%2B8Gc6csJDctSqvH6r8ULugRtXIHVQPXqs6FfwE4XpxIA2DFB7fIkZ%2Bcwu4bOvwY6pgFVHX7SoaihUgUgKPAOcxEZAQx2tawPLE6QU2uXbutMn%2BfcLmmT%2FUM3brPiCAHX0fLzo13ivw0UXuvBUhhxlY6ONMD0sSZO75f%2BQ7T%2FFKxzJi858p0CLoxpDIJ73pYOLmHEp%2B61AC%2B7hRxglY%2Flc%2BHPyqOnlNpt80DPhhSmL%2FyumkBV2XTKFNBr0oq0APUgTkdDcti5oIwdmeVRB2beJ4JJK47ATgwk&X-Amz-Signature=ff9d28bf9e779bb23c3394d9ff7873548ead172ac2455b4717ef26a21875ffce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
