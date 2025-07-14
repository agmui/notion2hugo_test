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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4DRP5A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGfqzCpihrG2OLEBgznqOCNkZZyNgcwkJIF2rmfj6BdhAiEA8ZtXYVvil7VByoN3aVpGFEi8i02cKzgXdCFf3fQMjlsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB7Jy3egRlsaYuF%2FbCrcA36ckHlyPSaZ%2BaGErYfuZU2HvXnqd5hEa%2FrWyzv432fmY7xDPf%2Fa%2FK27SRCzNC%2FJRydSn1ngTSnpO26sfZ4qQLXv5SkGfhCqMecSjFTubDQTN1rrSSh2d1%2FnK15JAmPx%2BBEBy3EhFs0MCLMuMy6wAj10ga%2BPtlDurIJU04uAtR79EV9MY5Prk6lJqNieD8CFDl6pnwscGVfCbURLJv46vG7EpiJFKo5hNm952JJNsBrB7%2F%2B15THtHOv0vhV9iYOeUKie1XZc%2FVl5ji6UsRzG5IMVMClB9fuf1XYJznUW8%2BE4QjHnmwFToIkDGnAAwCMCxKXuqk3gMQ8oAuHxoiDF9pj%2FI33b3Ug8L1aEnXm0WtV%2BbjWdDIZmGBUeMGEzJFhAse1%2Bt6vIX9nGGYAp9dAdsxhPyk1EA7BLJHn9mS6srKpCxQobfatvjmz56Mg%2FVzFC0%2Fn5FFGP98HIPNbSh%2FEXmz2d%2FPFUhiA8A5J%2BB6Hz%2Fd51u8I4mzMryQ70HRr2r4CtEUW5YLzJNZwwvUZ9tPE7EN3YBe8Xk3HeCnXVl%2BaB5OPGH%2BCUbeKhI4p4Cm2%2BURuQPummbtqUVUG2TA7433YUTdB%2FnJz257WewlZWLO41WJcSiJSQ2yImlijCVJz4MJrc08MGOqUBGqeDPZejG50MdWR2Rsp1NJkp6f9NVl5%2F8%2BRT4hZB5KMMBQngLZF0bJXlmbrUJH7Xt0yr9bMiUAfsctC9Zj7xxYy03HBFea19zcTiAgACC2wr7xNRBFAuyMHrHhqzzCFghcFhIyDPspW11csYzN8oPR9FYIBy%2FNHJQK1xTnEHJVZJ3l4%2FZI9dVVOGWl8BEq%2BcNPXlbqkYIJY542eBC3gwx%2FbAAKlF&X-Amz-Signature=70f357bd8e1ecb5fe5a688f93548e95e8dc7e02a6ad0cba9afb7aaa2802895dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4DRP5A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGfqzCpihrG2OLEBgznqOCNkZZyNgcwkJIF2rmfj6BdhAiEA8ZtXYVvil7VByoN3aVpGFEi8i02cKzgXdCFf3fQMjlsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB7Jy3egRlsaYuF%2FbCrcA36ckHlyPSaZ%2BaGErYfuZU2HvXnqd5hEa%2FrWyzv432fmY7xDPf%2Fa%2FK27SRCzNC%2FJRydSn1ngTSnpO26sfZ4qQLXv5SkGfhCqMecSjFTubDQTN1rrSSh2d1%2FnK15JAmPx%2BBEBy3EhFs0MCLMuMy6wAj10ga%2BPtlDurIJU04uAtR79EV9MY5Prk6lJqNieD8CFDl6pnwscGVfCbURLJv46vG7EpiJFKo5hNm952JJNsBrB7%2F%2B15THtHOv0vhV9iYOeUKie1XZc%2FVl5ji6UsRzG5IMVMClB9fuf1XYJznUW8%2BE4QjHnmwFToIkDGnAAwCMCxKXuqk3gMQ8oAuHxoiDF9pj%2FI33b3Ug8L1aEnXm0WtV%2BbjWdDIZmGBUeMGEzJFhAse1%2Bt6vIX9nGGYAp9dAdsxhPyk1EA7BLJHn9mS6srKpCxQobfatvjmz56Mg%2FVzFC0%2Fn5FFGP98HIPNbSh%2FEXmz2d%2FPFUhiA8A5J%2BB6Hz%2Fd51u8I4mzMryQ70HRr2r4CtEUW5YLzJNZwwvUZ9tPE7EN3YBe8Xk3HeCnXVl%2BaB5OPGH%2BCUbeKhI4p4Cm2%2BURuQPummbtqUVUG2TA7433YUTdB%2FnJz257WewlZWLO41WJcSiJSQ2yImlijCVJz4MJrc08MGOqUBGqeDPZejG50MdWR2Rsp1NJkp6f9NVl5%2F8%2BRT4hZB5KMMBQngLZF0bJXlmbrUJH7Xt0yr9bMiUAfsctC9Zj7xxYy03HBFea19zcTiAgACC2wr7xNRBFAuyMHrHhqzzCFghcFhIyDPspW11csYzN8oPR9FYIBy%2FNHJQK1xTnEHJVZJ3l4%2FZI9dVVOGWl8BEq%2BcNPXlbqkYIJY542eBC3gwx%2FbAAKlF&X-Amz-Signature=cb279f6ac97998a25da6ba022584bf4f9c1b7db6d562e057e4f67a9bd3477cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4DRP5A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGfqzCpihrG2OLEBgznqOCNkZZyNgcwkJIF2rmfj6BdhAiEA8ZtXYVvil7VByoN3aVpGFEi8i02cKzgXdCFf3fQMjlsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB7Jy3egRlsaYuF%2FbCrcA36ckHlyPSaZ%2BaGErYfuZU2HvXnqd5hEa%2FrWyzv432fmY7xDPf%2Fa%2FK27SRCzNC%2FJRydSn1ngTSnpO26sfZ4qQLXv5SkGfhCqMecSjFTubDQTN1rrSSh2d1%2FnK15JAmPx%2BBEBy3EhFs0MCLMuMy6wAj10ga%2BPtlDurIJU04uAtR79EV9MY5Prk6lJqNieD8CFDl6pnwscGVfCbURLJv46vG7EpiJFKo5hNm952JJNsBrB7%2F%2B15THtHOv0vhV9iYOeUKie1XZc%2FVl5ji6UsRzG5IMVMClB9fuf1XYJznUW8%2BE4QjHnmwFToIkDGnAAwCMCxKXuqk3gMQ8oAuHxoiDF9pj%2FI33b3Ug8L1aEnXm0WtV%2BbjWdDIZmGBUeMGEzJFhAse1%2Bt6vIX9nGGYAp9dAdsxhPyk1EA7BLJHn9mS6srKpCxQobfatvjmz56Mg%2FVzFC0%2Fn5FFGP98HIPNbSh%2FEXmz2d%2FPFUhiA8A5J%2BB6Hz%2Fd51u8I4mzMryQ70HRr2r4CtEUW5YLzJNZwwvUZ9tPE7EN3YBe8Xk3HeCnXVl%2BaB5OPGH%2BCUbeKhI4p4Cm2%2BURuQPummbtqUVUG2TA7433YUTdB%2FnJz257WewlZWLO41WJcSiJSQ2yImlijCVJz4MJrc08MGOqUBGqeDPZejG50MdWR2Rsp1NJkp6f9NVl5%2F8%2BRT4hZB5KMMBQngLZF0bJXlmbrUJH7Xt0yr9bMiUAfsctC9Zj7xxYy03HBFea19zcTiAgACC2wr7xNRBFAuyMHrHhqzzCFghcFhIyDPspW11csYzN8oPR9FYIBy%2FNHJQK1xTnEHJVZJ3l4%2FZI9dVVOGWl8BEq%2BcNPXlbqkYIJY542eBC3gwx%2FbAAKlF&X-Amz-Signature=6ea7f728db326d95cdf4d6700a89c6caab7f234544d2f3dc04203ff68eeb4449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4DRP5A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGfqzCpihrG2OLEBgznqOCNkZZyNgcwkJIF2rmfj6BdhAiEA8ZtXYVvil7VByoN3aVpGFEi8i02cKzgXdCFf3fQMjlsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB7Jy3egRlsaYuF%2FbCrcA36ckHlyPSaZ%2BaGErYfuZU2HvXnqd5hEa%2FrWyzv432fmY7xDPf%2Fa%2FK27SRCzNC%2FJRydSn1ngTSnpO26sfZ4qQLXv5SkGfhCqMecSjFTubDQTN1rrSSh2d1%2FnK15JAmPx%2BBEBy3EhFs0MCLMuMy6wAj10ga%2BPtlDurIJU04uAtR79EV9MY5Prk6lJqNieD8CFDl6pnwscGVfCbURLJv46vG7EpiJFKo5hNm952JJNsBrB7%2F%2B15THtHOv0vhV9iYOeUKie1XZc%2FVl5ji6UsRzG5IMVMClB9fuf1XYJznUW8%2BE4QjHnmwFToIkDGnAAwCMCxKXuqk3gMQ8oAuHxoiDF9pj%2FI33b3Ug8L1aEnXm0WtV%2BbjWdDIZmGBUeMGEzJFhAse1%2Bt6vIX9nGGYAp9dAdsxhPyk1EA7BLJHn9mS6srKpCxQobfatvjmz56Mg%2FVzFC0%2Fn5FFGP98HIPNbSh%2FEXmz2d%2FPFUhiA8A5J%2BB6Hz%2Fd51u8I4mzMryQ70HRr2r4CtEUW5YLzJNZwwvUZ9tPE7EN3YBe8Xk3HeCnXVl%2BaB5OPGH%2BCUbeKhI4p4Cm2%2BURuQPummbtqUVUG2TA7433YUTdB%2FnJz257WewlZWLO41WJcSiJSQ2yImlijCVJz4MJrc08MGOqUBGqeDPZejG50MdWR2Rsp1NJkp6f9NVl5%2F8%2BRT4hZB5KMMBQngLZF0bJXlmbrUJH7Xt0yr9bMiUAfsctC9Zj7xxYy03HBFea19zcTiAgACC2wr7xNRBFAuyMHrHhqzzCFghcFhIyDPspW11csYzN8oPR9FYIBy%2FNHJQK1xTnEHJVZJ3l4%2FZI9dVVOGWl8BEq%2BcNPXlbqkYIJY542eBC3gwx%2FbAAKlF&X-Amz-Signature=0f3c6d706a30fd5db5ea3966baa275423701285e2272fcacfd5f24a538356173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4DRP5A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGfqzCpihrG2OLEBgznqOCNkZZyNgcwkJIF2rmfj6BdhAiEA8ZtXYVvil7VByoN3aVpGFEi8i02cKzgXdCFf3fQMjlsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB7Jy3egRlsaYuF%2FbCrcA36ckHlyPSaZ%2BaGErYfuZU2HvXnqd5hEa%2FrWyzv432fmY7xDPf%2Fa%2FK27SRCzNC%2FJRydSn1ngTSnpO26sfZ4qQLXv5SkGfhCqMecSjFTubDQTN1rrSSh2d1%2FnK15JAmPx%2BBEBy3EhFs0MCLMuMy6wAj10ga%2BPtlDurIJU04uAtR79EV9MY5Prk6lJqNieD8CFDl6pnwscGVfCbURLJv46vG7EpiJFKo5hNm952JJNsBrB7%2F%2B15THtHOv0vhV9iYOeUKie1XZc%2FVl5ji6UsRzG5IMVMClB9fuf1XYJznUW8%2BE4QjHnmwFToIkDGnAAwCMCxKXuqk3gMQ8oAuHxoiDF9pj%2FI33b3Ug8L1aEnXm0WtV%2BbjWdDIZmGBUeMGEzJFhAse1%2Bt6vIX9nGGYAp9dAdsxhPyk1EA7BLJHn9mS6srKpCxQobfatvjmz56Mg%2FVzFC0%2Fn5FFGP98HIPNbSh%2FEXmz2d%2FPFUhiA8A5J%2BB6Hz%2Fd51u8I4mzMryQ70HRr2r4CtEUW5YLzJNZwwvUZ9tPE7EN3YBe8Xk3HeCnXVl%2BaB5OPGH%2BCUbeKhI4p4Cm2%2BURuQPummbtqUVUG2TA7433YUTdB%2FnJz257WewlZWLO41WJcSiJSQ2yImlijCVJz4MJrc08MGOqUBGqeDPZejG50MdWR2Rsp1NJkp6f9NVl5%2F8%2BRT4hZB5KMMBQngLZF0bJXlmbrUJH7Xt0yr9bMiUAfsctC9Zj7xxYy03HBFea19zcTiAgACC2wr7xNRBFAuyMHrHhqzzCFghcFhIyDPspW11csYzN8oPR9FYIBy%2FNHJQK1xTnEHJVZJ3l4%2FZI9dVVOGWl8BEq%2BcNPXlbqkYIJY542eBC3gwx%2FbAAKlF&X-Amz-Signature=302d7c9486df71e580e3c270f38e428ef6c21175a0159ca4bc32f2eb78cb6b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4DRP5A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGfqzCpihrG2OLEBgznqOCNkZZyNgcwkJIF2rmfj6BdhAiEA8ZtXYVvil7VByoN3aVpGFEi8i02cKzgXdCFf3fQMjlsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB7Jy3egRlsaYuF%2FbCrcA36ckHlyPSaZ%2BaGErYfuZU2HvXnqd5hEa%2FrWyzv432fmY7xDPf%2Fa%2FK27SRCzNC%2FJRydSn1ngTSnpO26sfZ4qQLXv5SkGfhCqMecSjFTubDQTN1rrSSh2d1%2FnK15JAmPx%2BBEBy3EhFs0MCLMuMy6wAj10ga%2BPtlDurIJU04uAtR79EV9MY5Prk6lJqNieD8CFDl6pnwscGVfCbURLJv46vG7EpiJFKo5hNm952JJNsBrB7%2F%2B15THtHOv0vhV9iYOeUKie1XZc%2FVl5ji6UsRzG5IMVMClB9fuf1XYJznUW8%2BE4QjHnmwFToIkDGnAAwCMCxKXuqk3gMQ8oAuHxoiDF9pj%2FI33b3Ug8L1aEnXm0WtV%2BbjWdDIZmGBUeMGEzJFhAse1%2Bt6vIX9nGGYAp9dAdsxhPyk1EA7BLJHn9mS6srKpCxQobfatvjmz56Mg%2FVzFC0%2Fn5FFGP98HIPNbSh%2FEXmz2d%2FPFUhiA8A5J%2BB6Hz%2Fd51u8I4mzMryQ70HRr2r4CtEUW5YLzJNZwwvUZ9tPE7EN3YBe8Xk3HeCnXVl%2BaB5OPGH%2BCUbeKhI4p4Cm2%2BURuQPummbtqUVUG2TA7433YUTdB%2FnJz257WewlZWLO41WJcSiJSQ2yImlijCVJz4MJrc08MGOqUBGqeDPZejG50MdWR2Rsp1NJkp6f9NVl5%2F8%2BRT4hZB5KMMBQngLZF0bJXlmbrUJH7Xt0yr9bMiUAfsctC9Zj7xxYy03HBFea19zcTiAgACC2wr7xNRBFAuyMHrHhqzzCFghcFhIyDPspW11csYzN8oPR9FYIBy%2FNHJQK1xTnEHJVZJ3l4%2FZI9dVVOGWl8BEq%2BcNPXlbqkYIJY542eBC3gwx%2FbAAKlF&X-Amz-Signature=b759b8dd9714d143dda30883034849a0d9eee3db709f4df82f799c0df0cb0eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4DRP5A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGfqzCpihrG2OLEBgznqOCNkZZyNgcwkJIF2rmfj6BdhAiEA8ZtXYVvil7VByoN3aVpGFEi8i02cKzgXdCFf3fQMjlsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB7Jy3egRlsaYuF%2FbCrcA36ckHlyPSaZ%2BaGErYfuZU2HvXnqd5hEa%2FrWyzv432fmY7xDPf%2Fa%2FK27SRCzNC%2FJRydSn1ngTSnpO26sfZ4qQLXv5SkGfhCqMecSjFTubDQTN1rrSSh2d1%2FnK15JAmPx%2BBEBy3EhFs0MCLMuMy6wAj10ga%2BPtlDurIJU04uAtR79EV9MY5Prk6lJqNieD8CFDl6pnwscGVfCbURLJv46vG7EpiJFKo5hNm952JJNsBrB7%2F%2B15THtHOv0vhV9iYOeUKie1XZc%2FVl5ji6UsRzG5IMVMClB9fuf1XYJznUW8%2BE4QjHnmwFToIkDGnAAwCMCxKXuqk3gMQ8oAuHxoiDF9pj%2FI33b3Ug8L1aEnXm0WtV%2BbjWdDIZmGBUeMGEzJFhAse1%2Bt6vIX9nGGYAp9dAdsxhPyk1EA7BLJHn9mS6srKpCxQobfatvjmz56Mg%2FVzFC0%2Fn5FFGP98HIPNbSh%2FEXmz2d%2FPFUhiA8A5J%2BB6Hz%2Fd51u8I4mzMryQ70HRr2r4CtEUW5YLzJNZwwvUZ9tPE7EN3YBe8Xk3HeCnXVl%2BaB5OPGH%2BCUbeKhI4p4Cm2%2BURuQPummbtqUVUG2TA7433YUTdB%2FnJz257WewlZWLO41WJcSiJSQ2yImlijCVJz4MJrc08MGOqUBGqeDPZejG50MdWR2Rsp1NJkp6f9NVl5%2F8%2BRT4hZB5KMMBQngLZF0bJXlmbrUJH7Xt0yr9bMiUAfsctC9Zj7xxYy03HBFea19zcTiAgACC2wr7xNRBFAuyMHrHhqzzCFghcFhIyDPspW11csYzN8oPR9FYIBy%2FNHJQK1xTnEHJVZJ3l4%2FZI9dVVOGWl8BEq%2BcNPXlbqkYIJY542eBC3gwx%2FbAAKlF&X-Amz-Signature=d419b9ab4798ce6e94c3a74122cd1bb46d6c344bf022314b2dc726c90507d8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4DRP5A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGfqzCpihrG2OLEBgznqOCNkZZyNgcwkJIF2rmfj6BdhAiEA8ZtXYVvil7VByoN3aVpGFEi8i02cKzgXdCFf3fQMjlsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDB7Jy3egRlsaYuF%2FbCrcA36ckHlyPSaZ%2BaGErYfuZU2HvXnqd5hEa%2FrWyzv432fmY7xDPf%2Fa%2FK27SRCzNC%2FJRydSn1ngTSnpO26sfZ4qQLXv5SkGfhCqMecSjFTubDQTN1rrSSh2d1%2FnK15JAmPx%2BBEBy3EhFs0MCLMuMy6wAj10ga%2BPtlDurIJU04uAtR79EV9MY5Prk6lJqNieD8CFDl6pnwscGVfCbURLJv46vG7EpiJFKo5hNm952JJNsBrB7%2F%2B15THtHOv0vhV9iYOeUKie1XZc%2FVl5ji6UsRzG5IMVMClB9fuf1XYJznUW8%2BE4QjHnmwFToIkDGnAAwCMCxKXuqk3gMQ8oAuHxoiDF9pj%2FI33b3Ug8L1aEnXm0WtV%2BbjWdDIZmGBUeMGEzJFhAse1%2Bt6vIX9nGGYAp9dAdsxhPyk1EA7BLJHn9mS6srKpCxQobfatvjmz56Mg%2FVzFC0%2Fn5FFGP98HIPNbSh%2FEXmz2d%2FPFUhiA8A5J%2BB6Hz%2Fd51u8I4mzMryQ70HRr2r4CtEUW5YLzJNZwwvUZ9tPE7EN3YBe8Xk3HeCnXVl%2BaB5OPGH%2BCUbeKhI4p4Cm2%2BURuQPummbtqUVUG2TA7433YUTdB%2FnJz257WewlZWLO41WJcSiJSQ2yImlijCVJz4MJrc08MGOqUBGqeDPZejG50MdWR2Rsp1NJkp6f9NVl5%2F8%2BRT4hZB5KMMBQngLZF0bJXlmbrUJH7Xt0yr9bMiUAfsctC9Zj7xxYy03HBFea19zcTiAgACC2wr7xNRBFAuyMHrHhqzzCFghcFhIyDPspW11csYzN8oPR9FYIBy%2FNHJQK1xTnEHJVZJ3l4%2FZI9dVVOGWl8BEq%2BcNPXlbqkYIJY542eBC3gwx%2FbAAKlF&X-Amz-Signature=1296bdcbfc5268fa89c279e262f5b5f7907cef071bade3834629752058183e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
