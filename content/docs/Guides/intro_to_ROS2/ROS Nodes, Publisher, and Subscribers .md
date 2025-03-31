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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRE4ADEA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQ%2BvfmpfqHLVAMqb8FL9%2B8TYukdJoDLbpmqnc45Sf8uAIgVNpFJpvyGaC98v%2BoxL%2Fd06IvCh964iWzHhDqYyhqAp8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTp2io4DYWvucKfpCrcA2MbJtjxaFaYw8xUKgyC1%2FwqjG%2FGXiIV5R0xrAi4DKLYnM1rV6eSVU%2ByXnyGsJv5okftIamJKoC%2F2Zpl7%2FS7I9h1VsZpv%2FBPbVMI4SS9k2pmsb5gKUr%2Fc%2Flw202Q91q4Gyqq%2Fz6CEkfjtYaqD9v16Dy%2Fe369bJLpcoMll6Jrua3TncJWfVN%2F6o2fmyS8iCFuGyAjOnov%2BK2IH5s%2BcQBtHi2EkeOFKyKhNuXRtXITav5qQAe617ASdnk3G%2FnNLoMY8Rt2gY0ZExSh0Ysms4i0P4GH5Xa21oblboTH2uw9TEZxKmkZZ86IyhfT9Xb73ecU6Ii90yB2IIcWhmeh%2BbKm1NJEBJ4CDkEd8NAC8d%2B7Z0bd7GjqH6IsiEG8rKXEDGw836%2FYhIQUnwajN9%2Fp2o6WoOjXTvdkHASE8rI5BqzsoaVgzZEcgWXgss4U0ya4DUbRELefaop1Ta5Yf6W%2F2j2FBBzv9A2PmqxzRMV7Mg9t9N1R%2F6JSR8LQHrl8QYIKOb6dXPtJwfrQJyh0HO9acaP4ctNgr8E%2Bi9ZFfTlDUUkfYWXi4fW%2FEJH00r8JPRBQhOpX8gi3cG%2B%2B0p9xQZ16TcNQrOylEc1%2B8IWt8%2Br%2FslJ83umnymNzu9TFn6G6An%2FjMKivqL8GOqUBqtM8u3x5cWwVBvjMzsPXpvsxfUnzBeaHSqozEvPycozOeVIzZs9gVF9MN1zP5mUs3LaIP%2BhMaltnDyXOKL031U%2FnQsH0%2BxF8rOglt%2BydQ5yOVNhsLZvi1zqcU8uxv8ssUuFokSTNoZtGwTxA4vnjloAF0lYP27ugSSABy2bik9IoW%2FIv0UV%2FlKlAccs8wHizxY3hhieWfQvPqiOWPeMG6OPyr16f&X-Amz-Signature=f9b824f044bbea2eeca17359fcfadde1e9797a296376c93187cd02c542e6f1f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRE4ADEA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQ%2BvfmpfqHLVAMqb8FL9%2B8TYukdJoDLbpmqnc45Sf8uAIgVNpFJpvyGaC98v%2BoxL%2Fd06IvCh964iWzHhDqYyhqAp8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTp2io4DYWvucKfpCrcA2MbJtjxaFaYw8xUKgyC1%2FwqjG%2FGXiIV5R0xrAi4DKLYnM1rV6eSVU%2ByXnyGsJv5okftIamJKoC%2F2Zpl7%2FS7I9h1VsZpv%2FBPbVMI4SS9k2pmsb5gKUr%2Fc%2Flw202Q91q4Gyqq%2Fz6CEkfjtYaqD9v16Dy%2Fe369bJLpcoMll6Jrua3TncJWfVN%2F6o2fmyS8iCFuGyAjOnov%2BK2IH5s%2BcQBtHi2EkeOFKyKhNuXRtXITav5qQAe617ASdnk3G%2FnNLoMY8Rt2gY0ZExSh0Ysms4i0P4GH5Xa21oblboTH2uw9TEZxKmkZZ86IyhfT9Xb73ecU6Ii90yB2IIcWhmeh%2BbKm1NJEBJ4CDkEd8NAC8d%2B7Z0bd7GjqH6IsiEG8rKXEDGw836%2FYhIQUnwajN9%2Fp2o6WoOjXTvdkHASE8rI5BqzsoaVgzZEcgWXgss4U0ya4DUbRELefaop1Ta5Yf6W%2F2j2FBBzv9A2PmqxzRMV7Mg9t9N1R%2F6JSR8LQHrl8QYIKOb6dXPtJwfrQJyh0HO9acaP4ctNgr8E%2Bi9ZFfTlDUUkfYWXi4fW%2FEJH00r8JPRBQhOpX8gi3cG%2B%2B0p9xQZ16TcNQrOylEc1%2B8IWt8%2Br%2FslJ83umnymNzu9TFn6G6An%2FjMKivqL8GOqUBqtM8u3x5cWwVBvjMzsPXpvsxfUnzBeaHSqozEvPycozOeVIzZs9gVF9MN1zP5mUs3LaIP%2BhMaltnDyXOKL031U%2FnQsH0%2BxF8rOglt%2BydQ5yOVNhsLZvi1zqcU8uxv8ssUuFokSTNoZtGwTxA4vnjloAF0lYP27ugSSABy2bik9IoW%2FIv0UV%2FlKlAccs8wHizxY3hhieWfQvPqiOWPeMG6OPyr16f&X-Amz-Signature=70db82506dc3954e1987c1152371f61793a7e22fd2c0df94f8848860f59ff2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRE4ADEA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQ%2BvfmpfqHLVAMqb8FL9%2B8TYukdJoDLbpmqnc45Sf8uAIgVNpFJpvyGaC98v%2BoxL%2Fd06IvCh964iWzHhDqYyhqAp8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTp2io4DYWvucKfpCrcA2MbJtjxaFaYw8xUKgyC1%2FwqjG%2FGXiIV5R0xrAi4DKLYnM1rV6eSVU%2ByXnyGsJv5okftIamJKoC%2F2Zpl7%2FS7I9h1VsZpv%2FBPbVMI4SS9k2pmsb5gKUr%2Fc%2Flw202Q91q4Gyqq%2Fz6CEkfjtYaqD9v16Dy%2Fe369bJLpcoMll6Jrua3TncJWfVN%2F6o2fmyS8iCFuGyAjOnov%2BK2IH5s%2BcQBtHi2EkeOFKyKhNuXRtXITav5qQAe617ASdnk3G%2FnNLoMY8Rt2gY0ZExSh0Ysms4i0P4GH5Xa21oblboTH2uw9TEZxKmkZZ86IyhfT9Xb73ecU6Ii90yB2IIcWhmeh%2BbKm1NJEBJ4CDkEd8NAC8d%2B7Z0bd7GjqH6IsiEG8rKXEDGw836%2FYhIQUnwajN9%2Fp2o6WoOjXTvdkHASE8rI5BqzsoaVgzZEcgWXgss4U0ya4DUbRELefaop1Ta5Yf6W%2F2j2FBBzv9A2PmqxzRMV7Mg9t9N1R%2F6JSR8LQHrl8QYIKOb6dXPtJwfrQJyh0HO9acaP4ctNgr8E%2Bi9ZFfTlDUUkfYWXi4fW%2FEJH00r8JPRBQhOpX8gi3cG%2B%2B0p9xQZ16TcNQrOylEc1%2B8IWt8%2Br%2FslJ83umnymNzu9TFn6G6An%2FjMKivqL8GOqUBqtM8u3x5cWwVBvjMzsPXpvsxfUnzBeaHSqozEvPycozOeVIzZs9gVF9MN1zP5mUs3LaIP%2BhMaltnDyXOKL031U%2FnQsH0%2BxF8rOglt%2BydQ5yOVNhsLZvi1zqcU8uxv8ssUuFokSTNoZtGwTxA4vnjloAF0lYP27ugSSABy2bik9IoW%2FIv0UV%2FlKlAccs8wHizxY3hhieWfQvPqiOWPeMG6OPyr16f&X-Amz-Signature=0ca1e745f8c18f1ff9dd6eb36abf71c38a413e50caf63666d1faab4556bf2395&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRE4ADEA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQ%2BvfmpfqHLVAMqb8FL9%2B8TYukdJoDLbpmqnc45Sf8uAIgVNpFJpvyGaC98v%2BoxL%2Fd06IvCh964iWzHhDqYyhqAp8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTp2io4DYWvucKfpCrcA2MbJtjxaFaYw8xUKgyC1%2FwqjG%2FGXiIV5R0xrAi4DKLYnM1rV6eSVU%2ByXnyGsJv5okftIamJKoC%2F2Zpl7%2FS7I9h1VsZpv%2FBPbVMI4SS9k2pmsb5gKUr%2Fc%2Flw202Q91q4Gyqq%2Fz6CEkfjtYaqD9v16Dy%2Fe369bJLpcoMll6Jrua3TncJWfVN%2F6o2fmyS8iCFuGyAjOnov%2BK2IH5s%2BcQBtHi2EkeOFKyKhNuXRtXITav5qQAe617ASdnk3G%2FnNLoMY8Rt2gY0ZExSh0Ysms4i0P4GH5Xa21oblboTH2uw9TEZxKmkZZ86IyhfT9Xb73ecU6Ii90yB2IIcWhmeh%2BbKm1NJEBJ4CDkEd8NAC8d%2B7Z0bd7GjqH6IsiEG8rKXEDGw836%2FYhIQUnwajN9%2Fp2o6WoOjXTvdkHASE8rI5BqzsoaVgzZEcgWXgss4U0ya4DUbRELefaop1Ta5Yf6W%2F2j2FBBzv9A2PmqxzRMV7Mg9t9N1R%2F6JSR8LQHrl8QYIKOb6dXPtJwfrQJyh0HO9acaP4ctNgr8E%2Bi9ZFfTlDUUkfYWXi4fW%2FEJH00r8JPRBQhOpX8gi3cG%2B%2B0p9xQZ16TcNQrOylEc1%2B8IWt8%2Br%2FslJ83umnymNzu9TFn6G6An%2FjMKivqL8GOqUBqtM8u3x5cWwVBvjMzsPXpvsxfUnzBeaHSqozEvPycozOeVIzZs9gVF9MN1zP5mUs3LaIP%2BhMaltnDyXOKL031U%2FnQsH0%2BxF8rOglt%2BydQ5yOVNhsLZvi1zqcU8uxv8ssUuFokSTNoZtGwTxA4vnjloAF0lYP27ugSSABy2bik9IoW%2FIv0UV%2FlKlAccs8wHizxY3hhieWfQvPqiOWPeMG6OPyr16f&X-Amz-Signature=29946fad27fa166a35b3b9b70b32f47b31a8d164b68c0440a98c915180a1120c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRE4ADEA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQ%2BvfmpfqHLVAMqb8FL9%2B8TYukdJoDLbpmqnc45Sf8uAIgVNpFJpvyGaC98v%2BoxL%2Fd06IvCh964iWzHhDqYyhqAp8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTp2io4DYWvucKfpCrcA2MbJtjxaFaYw8xUKgyC1%2FwqjG%2FGXiIV5R0xrAi4DKLYnM1rV6eSVU%2ByXnyGsJv5okftIamJKoC%2F2Zpl7%2FS7I9h1VsZpv%2FBPbVMI4SS9k2pmsb5gKUr%2Fc%2Flw202Q91q4Gyqq%2Fz6CEkfjtYaqD9v16Dy%2Fe369bJLpcoMll6Jrua3TncJWfVN%2F6o2fmyS8iCFuGyAjOnov%2BK2IH5s%2BcQBtHi2EkeOFKyKhNuXRtXITav5qQAe617ASdnk3G%2FnNLoMY8Rt2gY0ZExSh0Ysms4i0P4GH5Xa21oblboTH2uw9TEZxKmkZZ86IyhfT9Xb73ecU6Ii90yB2IIcWhmeh%2BbKm1NJEBJ4CDkEd8NAC8d%2B7Z0bd7GjqH6IsiEG8rKXEDGw836%2FYhIQUnwajN9%2Fp2o6WoOjXTvdkHASE8rI5BqzsoaVgzZEcgWXgss4U0ya4DUbRELefaop1Ta5Yf6W%2F2j2FBBzv9A2PmqxzRMV7Mg9t9N1R%2F6JSR8LQHrl8QYIKOb6dXPtJwfrQJyh0HO9acaP4ctNgr8E%2Bi9ZFfTlDUUkfYWXi4fW%2FEJH00r8JPRBQhOpX8gi3cG%2B%2B0p9xQZ16TcNQrOylEc1%2B8IWt8%2Br%2FslJ83umnymNzu9TFn6G6An%2FjMKivqL8GOqUBqtM8u3x5cWwVBvjMzsPXpvsxfUnzBeaHSqozEvPycozOeVIzZs9gVF9MN1zP5mUs3LaIP%2BhMaltnDyXOKL031U%2FnQsH0%2BxF8rOglt%2BydQ5yOVNhsLZvi1zqcU8uxv8ssUuFokSTNoZtGwTxA4vnjloAF0lYP27ugSSABy2bik9IoW%2FIv0UV%2FlKlAccs8wHizxY3hhieWfQvPqiOWPeMG6OPyr16f&X-Amz-Signature=e555534200f582d795fc3fe4e36d0c6462ebfedb9bf9fa92bfbe5183a416747d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRE4ADEA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQ%2BvfmpfqHLVAMqb8FL9%2B8TYukdJoDLbpmqnc45Sf8uAIgVNpFJpvyGaC98v%2BoxL%2Fd06IvCh964iWzHhDqYyhqAp8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTp2io4DYWvucKfpCrcA2MbJtjxaFaYw8xUKgyC1%2FwqjG%2FGXiIV5R0xrAi4DKLYnM1rV6eSVU%2ByXnyGsJv5okftIamJKoC%2F2Zpl7%2FS7I9h1VsZpv%2FBPbVMI4SS9k2pmsb5gKUr%2Fc%2Flw202Q91q4Gyqq%2Fz6CEkfjtYaqD9v16Dy%2Fe369bJLpcoMll6Jrua3TncJWfVN%2F6o2fmyS8iCFuGyAjOnov%2BK2IH5s%2BcQBtHi2EkeOFKyKhNuXRtXITav5qQAe617ASdnk3G%2FnNLoMY8Rt2gY0ZExSh0Ysms4i0P4GH5Xa21oblboTH2uw9TEZxKmkZZ86IyhfT9Xb73ecU6Ii90yB2IIcWhmeh%2BbKm1NJEBJ4CDkEd8NAC8d%2B7Z0bd7GjqH6IsiEG8rKXEDGw836%2FYhIQUnwajN9%2Fp2o6WoOjXTvdkHASE8rI5BqzsoaVgzZEcgWXgss4U0ya4DUbRELefaop1Ta5Yf6W%2F2j2FBBzv9A2PmqxzRMV7Mg9t9N1R%2F6JSR8LQHrl8QYIKOb6dXPtJwfrQJyh0HO9acaP4ctNgr8E%2Bi9ZFfTlDUUkfYWXi4fW%2FEJH00r8JPRBQhOpX8gi3cG%2B%2B0p9xQZ16TcNQrOylEc1%2B8IWt8%2Br%2FslJ83umnymNzu9TFn6G6An%2FjMKivqL8GOqUBqtM8u3x5cWwVBvjMzsPXpvsxfUnzBeaHSqozEvPycozOeVIzZs9gVF9MN1zP5mUs3LaIP%2BhMaltnDyXOKL031U%2FnQsH0%2BxF8rOglt%2BydQ5yOVNhsLZvi1zqcU8uxv8ssUuFokSTNoZtGwTxA4vnjloAF0lYP27ugSSABy2bik9IoW%2FIv0UV%2FlKlAccs8wHizxY3hhieWfQvPqiOWPeMG6OPyr16f&X-Amz-Signature=c5ac729eeadc5dc27847c2b442b8f14366b3863ff653ea829a695cb16f896279&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRE4ADEA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQ%2BvfmpfqHLVAMqb8FL9%2B8TYukdJoDLbpmqnc45Sf8uAIgVNpFJpvyGaC98v%2BoxL%2Fd06IvCh964iWzHhDqYyhqAp8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTp2io4DYWvucKfpCrcA2MbJtjxaFaYw8xUKgyC1%2FwqjG%2FGXiIV5R0xrAi4DKLYnM1rV6eSVU%2ByXnyGsJv5okftIamJKoC%2F2Zpl7%2FS7I9h1VsZpv%2FBPbVMI4SS9k2pmsb5gKUr%2Fc%2Flw202Q91q4Gyqq%2Fz6CEkfjtYaqD9v16Dy%2Fe369bJLpcoMll6Jrua3TncJWfVN%2F6o2fmyS8iCFuGyAjOnov%2BK2IH5s%2BcQBtHi2EkeOFKyKhNuXRtXITav5qQAe617ASdnk3G%2FnNLoMY8Rt2gY0ZExSh0Ysms4i0P4GH5Xa21oblboTH2uw9TEZxKmkZZ86IyhfT9Xb73ecU6Ii90yB2IIcWhmeh%2BbKm1NJEBJ4CDkEd8NAC8d%2B7Z0bd7GjqH6IsiEG8rKXEDGw836%2FYhIQUnwajN9%2Fp2o6WoOjXTvdkHASE8rI5BqzsoaVgzZEcgWXgss4U0ya4DUbRELefaop1Ta5Yf6W%2F2j2FBBzv9A2PmqxzRMV7Mg9t9N1R%2F6JSR8LQHrl8QYIKOb6dXPtJwfrQJyh0HO9acaP4ctNgr8E%2Bi9ZFfTlDUUkfYWXi4fW%2FEJH00r8JPRBQhOpX8gi3cG%2B%2B0p9xQZ16TcNQrOylEc1%2B8IWt8%2Br%2FslJ83umnymNzu9TFn6G6An%2FjMKivqL8GOqUBqtM8u3x5cWwVBvjMzsPXpvsxfUnzBeaHSqozEvPycozOeVIzZs9gVF9MN1zP5mUs3LaIP%2BhMaltnDyXOKL031U%2FnQsH0%2BxF8rOglt%2BydQ5yOVNhsLZvi1zqcU8uxv8ssUuFokSTNoZtGwTxA4vnjloAF0lYP27ugSSABy2bik9IoW%2FIv0UV%2FlKlAccs8wHizxY3hhieWfQvPqiOWPeMG6OPyr16f&X-Amz-Signature=955bfe222d3fb8ba8d959908f83fa892478c281ebd239c28412aa43f74963ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRE4ADEA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQ%2BvfmpfqHLVAMqb8FL9%2B8TYukdJoDLbpmqnc45Sf8uAIgVNpFJpvyGaC98v%2BoxL%2Fd06IvCh964iWzHhDqYyhqAp8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTp2io4DYWvucKfpCrcA2MbJtjxaFaYw8xUKgyC1%2FwqjG%2FGXiIV5R0xrAi4DKLYnM1rV6eSVU%2ByXnyGsJv5okftIamJKoC%2F2Zpl7%2FS7I9h1VsZpv%2FBPbVMI4SS9k2pmsb5gKUr%2Fc%2Flw202Q91q4Gyqq%2Fz6CEkfjtYaqD9v16Dy%2Fe369bJLpcoMll6Jrua3TncJWfVN%2F6o2fmyS8iCFuGyAjOnov%2BK2IH5s%2BcQBtHi2EkeOFKyKhNuXRtXITav5qQAe617ASdnk3G%2FnNLoMY8Rt2gY0ZExSh0Ysms4i0P4GH5Xa21oblboTH2uw9TEZxKmkZZ86IyhfT9Xb73ecU6Ii90yB2IIcWhmeh%2BbKm1NJEBJ4CDkEd8NAC8d%2B7Z0bd7GjqH6IsiEG8rKXEDGw836%2FYhIQUnwajN9%2Fp2o6WoOjXTvdkHASE8rI5BqzsoaVgzZEcgWXgss4U0ya4DUbRELefaop1Ta5Yf6W%2F2j2FBBzv9A2PmqxzRMV7Mg9t9N1R%2F6JSR8LQHrl8QYIKOb6dXPtJwfrQJyh0HO9acaP4ctNgr8E%2Bi9ZFfTlDUUkfYWXi4fW%2FEJH00r8JPRBQhOpX8gi3cG%2B%2B0p9xQZ16TcNQrOylEc1%2B8IWt8%2Br%2FslJ83umnymNzu9TFn6G6An%2FjMKivqL8GOqUBqtM8u3x5cWwVBvjMzsPXpvsxfUnzBeaHSqozEvPycozOeVIzZs9gVF9MN1zP5mUs3LaIP%2BhMaltnDyXOKL031U%2FnQsH0%2BxF8rOglt%2BydQ5yOVNhsLZvi1zqcU8uxv8ssUuFokSTNoZtGwTxA4vnjloAF0lYP27ugSSABy2bik9IoW%2FIv0UV%2FlKlAccs8wHizxY3hhieWfQvPqiOWPeMG6OPyr16f&X-Amz-Signature=b4eeb33354da887c2d6d665cfceb42797de38f49e11a047d2e59b43c2a6e981b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
