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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GITTHI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHdwNO9Qe%2By6R4DaxMY9AD1qutAPGXKtXUXF7bDIyDQIAiEAmd5FfQVrhVqJDx6V2m5vpp8oQ74S3C%2BNafDdwlOEdjIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhRjKNPDkrK1volUyrcA%2FUjKBMnblw23PJhsaPLZFeGQ8792VR14nvCg7DZM7R2sCFnUTSMUDVQ1KwTjPTKNsotDYrqbpJ4Ju5ke82CG97%2BR4QTrhiprv%2BkJpbRlYI35dwnquyIyhCKqbn60H5q%2FB%2BPq1jphHGGzgvZgAMBgYBd3mX6WSmOyHYtLJJIoXtjbAQoNnKIbL5DCUgNWC4qp2I1LmiTVpAa8xZccAVhK3cMv%2BTGyMy2SehSoRIemqIc2np5yIk4cw5HHcHi1Hf%2FamIMZ%2FzeXzAPbvX8n4AW4yBMZxNZKGnk1jqNtcsWz%2BNhwBeoPWOyJNamVT2upDSwExCanFdTr%2FmOxgnILHfaUkwlrWBLRcURSwOrN%2B9AZCqGMFbh%2BzbQxiQh0leEBax%2BT2HlnrcGlJiBEDd%2FNZbWt8oZ9Cu0ooKVznj4ptipw%2B4sbYOeOWm2F%2FTY%2BZ6WHTfAysjF2K1SYku8dtBpMH%2FletALyJTnb9oy65GcOuDq6ypRQazvQEUmCq8X2gBOhH%2B1UfnT1FQ%2FhE20ihP%2BfZMpLFJk841WC3X16twKHgHOtT58f0sd4%2FZaUHC85N8jVGPZXoZBlZ8QQccWZkFpZiKwDouHXG4VF59ofeY8PSC%2FDW7P45edjOa%2BUzzV99kfMNa7mMAGOqUB6%2BMt8YzIEYUL8UE9Dxk9i3WV5DNzlPaI%2F2HcwGtOomT0zNYFjzEHusGLUdqMGM07oTo68QXYMjQx3wdUB3%2B67CrS6H3YmqyOdNZGvUns3lUhiYatKRziyvF6zWtPLQAQwUSHLA2pRMM2n0If3DKMKFk1gl%2Bmhwo0z91543j59b1IRXoXQvuMfrgHIs1XYVVISYb1egRQIPnYc6%2F%2ByN6e%2Ba4%2F0iH8&X-Amz-Signature=1b99ede2b7d3b26ce7a940d6f637f9cf225fc7ef4631d1047e404ecdc5a5a806&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GITTHI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHdwNO9Qe%2By6R4DaxMY9AD1qutAPGXKtXUXF7bDIyDQIAiEAmd5FfQVrhVqJDx6V2m5vpp8oQ74S3C%2BNafDdwlOEdjIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhRjKNPDkrK1volUyrcA%2FUjKBMnblw23PJhsaPLZFeGQ8792VR14nvCg7DZM7R2sCFnUTSMUDVQ1KwTjPTKNsotDYrqbpJ4Ju5ke82CG97%2BR4QTrhiprv%2BkJpbRlYI35dwnquyIyhCKqbn60H5q%2FB%2BPq1jphHGGzgvZgAMBgYBd3mX6WSmOyHYtLJJIoXtjbAQoNnKIbL5DCUgNWC4qp2I1LmiTVpAa8xZccAVhK3cMv%2BTGyMy2SehSoRIemqIc2np5yIk4cw5HHcHi1Hf%2FamIMZ%2FzeXzAPbvX8n4AW4yBMZxNZKGnk1jqNtcsWz%2BNhwBeoPWOyJNamVT2upDSwExCanFdTr%2FmOxgnILHfaUkwlrWBLRcURSwOrN%2B9AZCqGMFbh%2BzbQxiQh0leEBax%2BT2HlnrcGlJiBEDd%2FNZbWt8oZ9Cu0ooKVznj4ptipw%2B4sbYOeOWm2F%2FTY%2BZ6WHTfAysjF2K1SYku8dtBpMH%2FletALyJTnb9oy65GcOuDq6ypRQazvQEUmCq8X2gBOhH%2B1UfnT1FQ%2FhE20ihP%2BfZMpLFJk841WC3X16twKHgHOtT58f0sd4%2FZaUHC85N8jVGPZXoZBlZ8QQccWZkFpZiKwDouHXG4VF59ofeY8PSC%2FDW7P45edjOa%2BUzzV99kfMNa7mMAGOqUB6%2BMt8YzIEYUL8UE9Dxk9i3WV5DNzlPaI%2F2HcwGtOomT0zNYFjzEHusGLUdqMGM07oTo68QXYMjQx3wdUB3%2B67CrS6H3YmqyOdNZGvUns3lUhiYatKRziyvF6zWtPLQAQwUSHLA2pRMM2n0If3DKMKFk1gl%2Bmhwo0z91543j59b1IRXoXQvuMfrgHIs1XYVVISYb1egRQIPnYc6%2F%2ByN6e%2Ba4%2F0iH8&X-Amz-Signature=fe3cbf8648ec5d02649efa9046889feb4d6a45c016926e361d3631173c2cb174&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GITTHI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHdwNO9Qe%2By6R4DaxMY9AD1qutAPGXKtXUXF7bDIyDQIAiEAmd5FfQVrhVqJDx6V2m5vpp8oQ74S3C%2BNafDdwlOEdjIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhRjKNPDkrK1volUyrcA%2FUjKBMnblw23PJhsaPLZFeGQ8792VR14nvCg7DZM7R2sCFnUTSMUDVQ1KwTjPTKNsotDYrqbpJ4Ju5ke82CG97%2BR4QTrhiprv%2BkJpbRlYI35dwnquyIyhCKqbn60H5q%2FB%2BPq1jphHGGzgvZgAMBgYBd3mX6WSmOyHYtLJJIoXtjbAQoNnKIbL5DCUgNWC4qp2I1LmiTVpAa8xZccAVhK3cMv%2BTGyMy2SehSoRIemqIc2np5yIk4cw5HHcHi1Hf%2FamIMZ%2FzeXzAPbvX8n4AW4yBMZxNZKGnk1jqNtcsWz%2BNhwBeoPWOyJNamVT2upDSwExCanFdTr%2FmOxgnILHfaUkwlrWBLRcURSwOrN%2B9AZCqGMFbh%2BzbQxiQh0leEBax%2BT2HlnrcGlJiBEDd%2FNZbWt8oZ9Cu0ooKVznj4ptipw%2B4sbYOeOWm2F%2FTY%2BZ6WHTfAysjF2K1SYku8dtBpMH%2FletALyJTnb9oy65GcOuDq6ypRQazvQEUmCq8X2gBOhH%2B1UfnT1FQ%2FhE20ihP%2BfZMpLFJk841WC3X16twKHgHOtT58f0sd4%2FZaUHC85N8jVGPZXoZBlZ8QQccWZkFpZiKwDouHXG4VF59ofeY8PSC%2FDW7P45edjOa%2BUzzV99kfMNa7mMAGOqUB6%2BMt8YzIEYUL8UE9Dxk9i3WV5DNzlPaI%2F2HcwGtOomT0zNYFjzEHusGLUdqMGM07oTo68QXYMjQx3wdUB3%2B67CrS6H3YmqyOdNZGvUns3lUhiYatKRziyvF6zWtPLQAQwUSHLA2pRMM2n0If3DKMKFk1gl%2Bmhwo0z91543j59b1IRXoXQvuMfrgHIs1XYVVISYb1egRQIPnYc6%2F%2ByN6e%2Ba4%2F0iH8&X-Amz-Signature=1342ee0c08a7b5b6fd5b61b5ad3496f2c13b8b8c83cc63fa03b388db6c634f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GITTHI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHdwNO9Qe%2By6R4DaxMY9AD1qutAPGXKtXUXF7bDIyDQIAiEAmd5FfQVrhVqJDx6V2m5vpp8oQ74S3C%2BNafDdwlOEdjIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhRjKNPDkrK1volUyrcA%2FUjKBMnblw23PJhsaPLZFeGQ8792VR14nvCg7DZM7R2sCFnUTSMUDVQ1KwTjPTKNsotDYrqbpJ4Ju5ke82CG97%2BR4QTrhiprv%2BkJpbRlYI35dwnquyIyhCKqbn60H5q%2FB%2BPq1jphHGGzgvZgAMBgYBd3mX6WSmOyHYtLJJIoXtjbAQoNnKIbL5DCUgNWC4qp2I1LmiTVpAa8xZccAVhK3cMv%2BTGyMy2SehSoRIemqIc2np5yIk4cw5HHcHi1Hf%2FamIMZ%2FzeXzAPbvX8n4AW4yBMZxNZKGnk1jqNtcsWz%2BNhwBeoPWOyJNamVT2upDSwExCanFdTr%2FmOxgnILHfaUkwlrWBLRcURSwOrN%2B9AZCqGMFbh%2BzbQxiQh0leEBax%2BT2HlnrcGlJiBEDd%2FNZbWt8oZ9Cu0ooKVznj4ptipw%2B4sbYOeOWm2F%2FTY%2BZ6WHTfAysjF2K1SYku8dtBpMH%2FletALyJTnb9oy65GcOuDq6ypRQazvQEUmCq8X2gBOhH%2B1UfnT1FQ%2FhE20ihP%2BfZMpLFJk841WC3X16twKHgHOtT58f0sd4%2FZaUHC85N8jVGPZXoZBlZ8QQccWZkFpZiKwDouHXG4VF59ofeY8PSC%2FDW7P45edjOa%2BUzzV99kfMNa7mMAGOqUB6%2BMt8YzIEYUL8UE9Dxk9i3WV5DNzlPaI%2F2HcwGtOomT0zNYFjzEHusGLUdqMGM07oTo68QXYMjQx3wdUB3%2B67CrS6H3YmqyOdNZGvUns3lUhiYatKRziyvF6zWtPLQAQwUSHLA2pRMM2n0If3DKMKFk1gl%2Bmhwo0z91543j59b1IRXoXQvuMfrgHIs1XYVVISYb1egRQIPnYc6%2F%2ByN6e%2Ba4%2F0iH8&X-Amz-Signature=84ac4d61023408906aac86118403ec6ba39f7f3e1a756b132503848824068120&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GITTHI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHdwNO9Qe%2By6R4DaxMY9AD1qutAPGXKtXUXF7bDIyDQIAiEAmd5FfQVrhVqJDx6V2m5vpp8oQ74S3C%2BNafDdwlOEdjIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhRjKNPDkrK1volUyrcA%2FUjKBMnblw23PJhsaPLZFeGQ8792VR14nvCg7DZM7R2sCFnUTSMUDVQ1KwTjPTKNsotDYrqbpJ4Ju5ke82CG97%2BR4QTrhiprv%2BkJpbRlYI35dwnquyIyhCKqbn60H5q%2FB%2BPq1jphHGGzgvZgAMBgYBd3mX6WSmOyHYtLJJIoXtjbAQoNnKIbL5DCUgNWC4qp2I1LmiTVpAa8xZccAVhK3cMv%2BTGyMy2SehSoRIemqIc2np5yIk4cw5HHcHi1Hf%2FamIMZ%2FzeXzAPbvX8n4AW4yBMZxNZKGnk1jqNtcsWz%2BNhwBeoPWOyJNamVT2upDSwExCanFdTr%2FmOxgnILHfaUkwlrWBLRcURSwOrN%2B9AZCqGMFbh%2BzbQxiQh0leEBax%2BT2HlnrcGlJiBEDd%2FNZbWt8oZ9Cu0ooKVznj4ptipw%2B4sbYOeOWm2F%2FTY%2BZ6WHTfAysjF2K1SYku8dtBpMH%2FletALyJTnb9oy65GcOuDq6ypRQazvQEUmCq8X2gBOhH%2B1UfnT1FQ%2FhE20ihP%2BfZMpLFJk841WC3X16twKHgHOtT58f0sd4%2FZaUHC85N8jVGPZXoZBlZ8QQccWZkFpZiKwDouHXG4VF59ofeY8PSC%2FDW7P45edjOa%2BUzzV99kfMNa7mMAGOqUB6%2BMt8YzIEYUL8UE9Dxk9i3WV5DNzlPaI%2F2HcwGtOomT0zNYFjzEHusGLUdqMGM07oTo68QXYMjQx3wdUB3%2B67CrS6H3YmqyOdNZGvUns3lUhiYatKRziyvF6zWtPLQAQwUSHLA2pRMM2n0If3DKMKFk1gl%2Bmhwo0z91543j59b1IRXoXQvuMfrgHIs1XYVVISYb1egRQIPnYc6%2F%2ByN6e%2Ba4%2F0iH8&X-Amz-Signature=2e1512011ab7d39880bd5519ff4d15c1227ec6f4858f338b57d6b47d46ae04e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GITTHI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHdwNO9Qe%2By6R4DaxMY9AD1qutAPGXKtXUXF7bDIyDQIAiEAmd5FfQVrhVqJDx6V2m5vpp8oQ74S3C%2BNafDdwlOEdjIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhRjKNPDkrK1volUyrcA%2FUjKBMnblw23PJhsaPLZFeGQ8792VR14nvCg7DZM7R2sCFnUTSMUDVQ1KwTjPTKNsotDYrqbpJ4Ju5ke82CG97%2BR4QTrhiprv%2BkJpbRlYI35dwnquyIyhCKqbn60H5q%2FB%2BPq1jphHGGzgvZgAMBgYBd3mX6WSmOyHYtLJJIoXtjbAQoNnKIbL5DCUgNWC4qp2I1LmiTVpAa8xZccAVhK3cMv%2BTGyMy2SehSoRIemqIc2np5yIk4cw5HHcHi1Hf%2FamIMZ%2FzeXzAPbvX8n4AW4yBMZxNZKGnk1jqNtcsWz%2BNhwBeoPWOyJNamVT2upDSwExCanFdTr%2FmOxgnILHfaUkwlrWBLRcURSwOrN%2B9AZCqGMFbh%2BzbQxiQh0leEBax%2BT2HlnrcGlJiBEDd%2FNZbWt8oZ9Cu0ooKVznj4ptipw%2B4sbYOeOWm2F%2FTY%2BZ6WHTfAysjF2K1SYku8dtBpMH%2FletALyJTnb9oy65GcOuDq6ypRQazvQEUmCq8X2gBOhH%2B1UfnT1FQ%2FhE20ihP%2BfZMpLFJk841WC3X16twKHgHOtT58f0sd4%2FZaUHC85N8jVGPZXoZBlZ8QQccWZkFpZiKwDouHXG4VF59ofeY8PSC%2FDW7P45edjOa%2BUzzV99kfMNa7mMAGOqUB6%2BMt8YzIEYUL8UE9Dxk9i3WV5DNzlPaI%2F2HcwGtOomT0zNYFjzEHusGLUdqMGM07oTo68QXYMjQx3wdUB3%2B67CrS6H3YmqyOdNZGvUns3lUhiYatKRziyvF6zWtPLQAQwUSHLA2pRMM2n0If3DKMKFk1gl%2Bmhwo0z91543j59b1IRXoXQvuMfrgHIs1XYVVISYb1egRQIPnYc6%2F%2ByN6e%2Ba4%2F0iH8&X-Amz-Signature=09ad207245e64e89dfa54679b407f7b6252bc3d5a2ff837339610b4331aa39e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GITTHI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHdwNO9Qe%2By6R4DaxMY9AD1qutAPGXKtXUXF7bDIyDQIAiEAmd5FfQVrhVqJDx6V2m5vpp8oQ74S3C%2BNafDdwlOEdjIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhRjKNPDkrK1volUyrcA%2FUjKBMnblw23PJhsaPLZFeGQ8792VR14nvCg7DZM7R2sCFnUTSMUDVQ1KwTjPTKNsotDYrqbpJ4Ju5ke82CG97%2BR4QTrhiprv%2BkJpbRlYI35dwnquyIyhCKqbn60H5q%2FB%2BPq1jphHGGzgvZgAMBgYBd3mX6WSmOyHYtLJJIoXtjbAQoNnKIbL5DCUgNWC4qp2I1LmiTVpAa8xZccAVhK3cMv%2BTGyMy2SehSoRIemqIc2np5yIk4cw5HHcHi1Hf%2FamIMZ%2FzeXzAPbvX8n4AW4yBMZxNZKGnk1jqNtcsWz%2BNhwBeoPWOyJNamVT2upDSwExCanFdTr%2FmOxgnILHfaUkwlrWBLRcURSwOrN%2B9AZCqGMFbh%2BzbQxiQh0leEBax%2BT2HlnrcGlJiBEDd%2FNZbWt8oZ9Cu0ooKVznj4ptipw%2B4sbYOeOWm2F%2FTY%2BZ6WHTfAysjF2K1SYku8dtBpMH%2FletALyJTnb9oy65GcOuDq6ypRQazvQEUmCq8X2gBOhH%2B1UfnT1FQ%2FhE20ihP%2BfZMpLFJk841WC3X16twKHgHOtT58f0sd4%2FZaUHC85N8jVGPZXoZBlZ8QQccWZkFpZiKwDouHXG4VF59ofeY8PSC%2FDW7P45edjOa%2BUzzV99kfMNa7mMAGOqUB6%2BMt8YzIEYUL8UE9Dxk9i3WV5DNzlPaI%2F2HcwGtOomT0zNYFjzEHusGLUdqMGM07oTo68QXYMjQx3wdUB3%2B67CrS6H3YmqyOdNZGvUns3lUhiYatKRziyvF6zWtPLQAQwUSHLA2pRMM2n0If3DKMKFk1gl%2Bmhwo0z91543j59b1IRXoXQvuMfrgHIs1XYVVISYb1egRQIPnYc6%2F%2ByN6e%2Ba4%2F0iH8&X-Amz-Signature=d5c03806e961bcc91ad4d02c93fb36d686acb41503ac99e423c5b9bea9ee905a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GITTHI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHdwNO9Qe%2By6R4DaxMY9AD1qutAPGXKtXUXF7bDIyDQIAiEAmd5FfQVrhVqJDx6V2m5vpp8oQ74S3C%2BNafDdwlOEdjIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhRjKNPDkrK1volUyrcA%2FUjKBMnblw23PJhsaPLZFeGQ8792VR14nvCg7DZM7R2sCFnUTSMUDVQ1KwTjPTKNsotDYrqbpJ4Ju5ke82CG97%2BR4QTrhiprv%2BkJpbRlYI35dwnquyIyhCKqbn60H5q%2FB%2BPq1jphHGGzgvZgAMBgYBd3mX6WSmOyHYtLJJIoXtjbAQoNnKIbL5DCUgNWC4qp2I1LmiTVpAa8xZccAVhK3cMv%2BTGyMy2SehSoRIemqIc2np5yIk4cw5HHcHi1Hf%2FamIMZ%2FzeXzAPbvX8n4AW4yBMZxNZKGnk1jqNtcsWz%2BNhwBeoPWOyJNamVT2upDSwExCanFdTr%2FmOxgnILHfaUkwlrWBLRcURSwOrN%2B9AZCqGMFbh%2BzbQxiQh0leEBax%2BT2HlnrcGlJiBEDd%2FNZbWt8oZ9Cu0ooKVznj4ptipw%2B4sbYOeOWm2F%2FTY%2BZ6WHTfAysjF2K1SYku8dtBpMH%2FletALyJTnb9oy65GcOuDq6ypRQazvQEUmCq8X2gBOhH%2B1UfnT1FQ%2FhE20ihP%2BfZMpLFJk841WC3X16twKHgHOtT58f0sd4%2FZaUHC85N8jVGPZXoZBlZ8QQccWZkFpZiKwDouHXG4VF59ofeY8PSC%2FDW7P45edjOa%2BUzzV99kfMNa7mMAGOqUB6%2BMt8YzIEYUL8UE9Dxk9i3WV5DNzlPaI%2F2HcwGtOomT0zNYFjzEHusGLUdqMGM07oTo68QXYMjQx3wdUB3%2B67CrS6H3YmqyOdNZGvUns3lUhiYatKRziyvF6zWtPLQAQwUSHLA2pRMM2n0If3DKMKFk1gl%2Bmhwo0z91543j59b1IRXoXQvuMfrgHIs1XYVVISYb1egRQIPnYc6%2F%2ByN6e%2Ba4%2F0iH8&X-Amz-Signature=e3746a18fdd26eb64f4724e4d27ab7f35ccec60f82468b254eee378f5d4e6201&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
