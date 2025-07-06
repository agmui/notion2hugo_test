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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHUADVR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBf1cX1wgHBlPNbsEdmxgN6JBC%2B59cZkKiEKd4BbXKawAiAwTzQM73YzKP7HDtKDCxvMa3sS9TRCWVK71KNmF7ehfyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnKGTS6HFez2qQyB7KtwD2I%2F2voaEq3EGpgV%2Bp6QD1RJunHHkgmKXHLO%2FujYsA%2FNYiCZ0LALAr8KPxapw%2FofR2LtoNZ6DcsTh%2FF%2FOMZkgIWR8lSLD4p5sgtpedJRIAf%2FVNBDoQvaxmKmiNZJhp4EhcINTdGuabTGXs6Ljpo1Wcq7AjKRtLDHKAbqA7IB2qhZ8xITdMMGgzC05EhAhEFWdRe%2FbRc5ZSqg%2Bv9FESItWsbQEUFQ04zty1QH6EbyTw3sUEBu6pZoGH%2BUG%2FvTpwz53cKPtDimRJfWWYJqsg9MMxJKxebrH3OAEeT6e9UIwCHhV1qSwkAS5Vd8xXnNMgqR2vAM19N%2FIiWm%2BkJtFguUH6rjwB5LNpfm9HkaRcwL%2B2r7ErlWHcppFxZomHxU8fyEF8HG0ZSiviLRpkFq2ibUw79CAgOZu6ykc8IXDnpvNkpe6sUSlHeiLaUanO%2Fk8wzAUfpCuwaIsKzb%2BhZAQ9x1PWPMV1GBiMDDPwzWWM3gayjuRcguItumtmjCfQP5UKtdkoFEs%2FSRbeGA5GsNyl4LZF0dypNGMTiDcSM9VBcOT3Pm8istjuQt%2BsV%2F0vjTPIpdyJnKt%2BRl1zl7%2FaSd0IjtcL5jfBMK4Cs%2Fi%2F655cgRvPIz3kwk%2FRQ8TttxTcPMw65CnwwY6pgET5a7TPonifREKaQA5xkSmz4tjz9L8jsEg0JzwK1SNBsKURlFrnRm9pWciTVcPQlmmYCej29UnzSriMFFnhxrqamLmaLMKXxY%2Fz40QraZJ71HC66p%2FSM8MdB%2FnjL6wPt7Gbk%2BZpkqlAK%2FsDMZi%2FRbbuDU3GtJIuYAzK2lJAB%2FClk96WBp72P0QEGT0T6XNs5oURDwUlg9Uagrtiwu5mShS%2FxhfKCj%2B&X-Amz-Signature=4a6f804a30e642b813889886b24e6df1e1e741a29e7746a5bc61893bc49772d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHUADVR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBf1cX1wgHBlPNbsEdmxgN6JBC%2B59cZkKiEKd4BbXKawAiAwTzQM73YzKP7HDtKDCxvMa3sS9TRCWVK71KNmF7ehfyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnKGTS6HFez2qQyB7KtwD2I%2F2voaEq3EGpgV%2Bp6QD1RJunHHkgmKXHLO%2FujYsA%2FNYiCZ0LALAr8KPxapw%2FofR2LtoNZ6DcsTh%2FF%2FOMZkgIWR8lSLD4p5sgtpedJRIAf%2FVNBDoQvaxmKmiNZJhp4EhcINTdGuabTGXs6Ljpo1Wcq7AjKRtLDHKAbqA7IB2qhZ8xITdMMGgzC05EhAhEFWdRe%2FbRc5ZSqg%2Bv9FESItWsbQEUFQ04zty1QH6EbyTw3sUEBu6pZoGH%2BUG%2FvTpwz53cKPtDimRJfWWYJqsg9MMxJKxebrH3OAEeT6e9UIwCHhV1qSwkAS5Vd8xXnNMgqR2vAM19N%2FIiWm%2BkJtFguUH6rjwB5LNpfm9HkaRcwL%2B2r7ErlWHcppFxZomHxU8fyEF8HG0ZSiviLRpkFq2ibUw79CAgOZu6ykc8IXDnpvNkpe6sUSlHeiLaUanO%2Fk8wzAUfpCuwaIsKzb%2BhZAQ9x1PWPMV1GBiMDDPwzWWM3gayjuRcguItumtmjCfQP5UKtdkoFEs%2FSRbeGA5GsNyl4LZF0dypNGMTiDcSM9VBcOT3Pm8istjuQt%2BsV%2F0vjTPIpdyJnKt%2BRl1zl7%2FaSd0IjtcL5jfBMK4Cs%2Fi%2F655cgRvPIz3kwk%2FRQ8TttxTcPMw65CnwwY6pgET5a7TPonifREKaQA5xkSmz4tjz9L8jsEg0JzwK1SNBsKURlFrnRm9pWciTVcPQlmmYCej29UnzSriMFFnhxrqamLmaLMKXxY%2Fz40QraZJ71HC66p%2FSM8MdB%2FnjL6wPt7Gbk%2BZpkqlAK%2FsDMZi%2FRbbuDU3GtJIuYAzK2lJAB%2FClk96WBp72P0QEGT0T6XNs5oURDwUlg9Uagrtiwu5mShS%2FxhfKCj%2B&X-Amz-Signature=a42b00763450b81438603639132acb13d7be7b29ab2295c9e68e98871f8ab75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHUADVR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBf1cX1wgHBlPNbsEdmxgN6JBC%2B59cZkKiEKd4BbXKawAiAwTzQM73YzKP7HDtKDCxvMa3sS9TRCWVK71KNmF7ehfyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnKGTS6HFez2qQyB7KtwD2I%2F2voaEq3EGpgV%2Bp6QD1RJunHHkgmKXHLO%2FujYsA%2FNYiCZ0LALAr8KPxapw%2FofR2LtoNZ6DcsTh%2FF%2FOMZkgIWR8lSLD4p5sgtpedJRIAf%2FVNBDoQvaxmKmiNZJhp4EhcINTdGuabTGXs6Ljpo1Wcq7AjKRtLDHKAbqA7IB2qhZ8xITdMMGgzC05EhAhEFWdRe%2FbRc5ZSqg%2Bv9FESItWsbQEUFQ04zty1QH6EbyTw3sUEBu6pZoGH%2BUG%2FvTpwz53cKPtDimRJfWWYJqsg9MMxJKxebrH3OAEeT6e9UIwCHhV1qSwkAS5Vd8xXnNMgqR2vAM19N%2FIiWm%2BkJtFguUH6rjwB5LNpfm9HkaRcwL%2B2r7ErlWHcppFxZomHxU8fyEF8HG0ZSiviLRpkFq2ibUw79CAgOZu6ykc8IXDnpvNkpe6sUSlHeiLaUanO%2Fk8wzAUfpCuwaIsKzb%2BhZAQ9x1PWPMV1GBiMDDPwzWWM3gayjuRcguItumtmjCfQP5UKtdkoFEs%2FSRbeGA5GsNyl4LZF0dypNGMTiDcSM9VBcOT3Pm8istjuQt%2BsV%2F0vjTPIpdyJnKt%2BRl1zl7%2FaSd0IjtcL5jfBMK4Cs%2Fi%2F655cgRvPIz3kwk%2FRQ8TttxTcPMw65CnwwY6pgET5a7TPonifREKaQA5xkSmz4tjz9L8jsEg0JzwK1SNBsKURlFrnRm9pWciTVcPQlmmYCej29UnzSriMFFnhxrqamLmaLMKXxY%2Fz40QraZJ71HC66p%2FSM8MdB%2FnjL6wPt7Gbk%2BZpkqlAK%2FsDMZi%2FRbbuDU3GtJIuYAzK2lJAB%2FClk96WBp72P0QEGT0T6XNs5oURDwUlg9Uagrtiwu5mShS%2FxhfKCj%2B&X-Amz-Signature=790b9abbe409a225b7f93ad5c78d240ed8ffc5ddd1281166d18b271e994eb3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHUADVR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBf1cX1wgHBlPNbsEdmxgN6JBC%2B59cZkKiEKd4BbXKawAiAwTzQM73YzKP7HDtKDCxvMa3sS9TRCWVK71KNmF7ehfyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnKGTS6HFez2qQyB7KtwD2I%2F2voaEq3EGpgV%2Bp6QD1RJunHHkgmKXHLO%2FujYsA%2FNYiCZ0LALAr8KPxapw%2FofR2LtoNZ6DcsTh%2FF%2FOMZkgIWR8lSLD4p5sgtpedJRIAf%2FVNBDoQvaxmKmiNZJhp4EhcINTdGuabTGXs6Ljpo1Wcq7AjKRtLDHKAbqA7IB2qhZ8xITdMMGgzC05EhAhEFWdRe%2FbRc5ZSqg%2Bv9FESItWsbQEUFQ04zty1QH6EbyTw3sUEBu6pZoGH%2BUG%2FvTpwz53cKPtDimRJfWWYJqsg9MMxJKxebrH3OAEeT6e9UIwCHhV1qSwkAS5Vd8xXnNMgqR2vAM19N%2FIiWm%2BkJtFguUH6rjwB5LNpfm9HkaRcwL%2B2r7ErlWHcppFxZomHxU8fyEF8HG0ZSiviLRpkFq2ibUw79CAgOZu6ykc8IXDnpvNkpe6sUSlHeiLaUanO%2Fk8wzAUfpCuwaIsKzb%2BhZAQ9x1PWPMV1GBiMDDPwzWWM3gayjuRcguItumtmjCfQP5UKtdkoFEs%2FSRbeGA5GsNyl4LZF0dypNGMTiDcSM9VBcOT3Pm8istjuQt%2BsV%2F0vjTPIpdyJnKt%2BRl1zl7%2FaSd0IjtcL5jfBMK4Cs%2Fi%2F655cgRvPIz3kwk%2FRQ8TttxTcPMw65CnwwY6pgET5a7TPonifREKaQA5xkSmz4tjz9L8jsEg0JzwK1SNBsKURlFrnRm9pWciTVcPQlmmYCej29UnzSriMFFnhxrqamLmaLMKXxY%2Fz40QraZJ71HC66p%2FSM8MdB%2FnjL6wPt7Gbk%2BZpkqlAK%2FsDMZi%2FRbbuDU3GtJIuYAzK2lJAB%2FClk96WBp72P0QEGT0T6XNs5oURDwUlg9Uagrtiwu5mShS%2FxhfKCj%2B&X-Amz-Signature=ef8e4702dd84ace347e615be97cd9d8561dd47fad49145998710a582cb16e706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHUADVR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBf1cX1wgHBlPNbsEdmxgN6JBC%2B59cZkKiEKd4BbXKawAiAwTzQM73YzKP7HDtKDCxvMa3sS9TRCWVK71KNmF7ehfyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnKGTS6HFez2qQyB7KtwD2I%2F2voaEq3EGpgV%2Bp6QD1RJunHHkgmKXHLO%2FujYsA%2FNYiCZ0LALAr8KPxapw%2FofR2LtoNZ6DcsTh%2FF%2FOMZkgIWR8lSLD4p5sgtpedJRIAf%2FVNBDoQvaxmKmiNZJhp4EhcINTdGuabTGXs6Ljpo1Wcq7AjKRtLDHKAbqA7IB2qhZ8xITdMMGgzC05EhAhEFWdRe%2FbRc5ZSqg%2Bv9FESItWsbQEUFQ04zty1QH6EbyTw3sUEBu6pZoGH%2BUG%2FvTpwz53cKPtDimRJfWWYJqsg9MMxJKxebrH3OAEeT6e9UIwCHhV1qSwkAS5Vd8xXnNMgqR2vAM19N%2FIiWm%2BkJtFguUH6rjwB5LNpfm9HkaRcwL%2B2r7ErlWHcppFxZomHxU8fyEF8HG0ZSiviLRpkFq2ibUw79CAgOZu6ykc8IXDnpvNkpe6sUSlHeiLaUanO%2Fk8wzAUfpCuwaIsKzb%2BhZAQ9x1PWPMV1GBiMDDPwzWWM3gayjuRcguItumtmjCfQP5UKtdkoFEs%2FSRbeGA5GsNyl4LZF0dypNGMTiDcSM9VBcOT3Pm8istjuQt%2BsV%2F0vjTPIpdyJnKt%2BRl1zl7%2FaSd0IjtcL5jfBMK4Cs%2Fi%2F655cgRvPIz3kwk%2FRQ8TttxTcPMw65CnwwY6pgET5a7TPonifREKaQA5xkSmz4tjz9L8jsEg0JzwK1SNBsKURlFrnRm9pWciTVcPQlmmYCej29UnzSriMFFnhxrqamLmaLMKXxY%2Fz40QraZJ71HC66p%2FSM8MdB%2FnjL6wPt7Gbk%2BZpkqlAK%2FsDMZi%2FRbbuDU3GtJIuYAzK2lJAB%2FClk96WBp72P0QEGT0T6XNs5oURDwUlg9Uagrtiwu5mShS%2FxhfKCj%2B&X-Amz-Signature=f492eafa860191e1964d91fd02b3356e454ff91932c0628be1e970985e23f4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHUADVR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBf1cX1wgHBlPNbsEdmxgN6JBC%2B59cZkKiEKd4BbXKawAiAwTzQM73YzKP7HDtKDCxvMa3sS9TRCWVK71KNmF7ehfyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnKGTS6HFez2qQyB7KtwD2I%2F2voaEq3EGpgV%2Bp6QD1RJunHHkgmKXHLO%2FujYsA%2FNYiCZ0LALAr8KPxapw%2FofR2LtoNZ6DcsTh%2FF%2FOMZkgIWR8lSLD4p5sgtpedJRIAf%2FVNBDoQvaxmKmiNZJhp4EhcINTdGuabTGXs6Ljpo1Wcq7AjKRtLDHKAbqA7IB2qhZ8xITdMMGgzC05EhAhEFWdRe%2FbRc5ZSqg%2Bv9FESItWsbQEUFQ04zty1QH6EbyTw3sUEBu6pZoGH%2BUG%2FvTpwz53cKPtDimRJfWWYJqsg9MMxJKxebrH3OAEeT6e9UIwCHhV1qSwkAS5Vd8xXnNMgqR2vAM19N%2FIiWm%2BkJtFguUH6rjwB5LNpfm9HkaRcwL%2B2r7ErlWHcppFxZomHxU8fyEF8HG0ZSiviLRpkFq2ibUw79CAgOZu6ykc8IXDnpvNkpe6sUSlHeiLaUanO%2Fk8wzAUfpCuwaIsKzb%2BhZAQ9x1PWPMV1GBiMDDPwzWWM3gayjuRcguItumtmjCfQP5UKtdkoFEs%2FSRbeGA5GsNyl4LZF0dypNGMTiDcSM9VBcOT3Pm8istjuQt%2BsV%2F0vjTPIpdyJnKt%2BRl1zl7%2FaSd0IjtcL5jfBMK4Cs%2Fi%2F655cgRvPIz3kwk%2FRQ8TttxTcPMw65CnwwY6pgET5a7TPonifREKaQA5xkSmz4tjz9L8jsEg0JzwK1SNBsKURlFrnRm9pWciTVcPQlmmYCej29UnzSriMFFnhxrqamLmaLMKXxY%2Fz40QraZJ71HC66p%2FSM8MdB%2FnjL6wPt7Gbk%2BZpkqlAK%2FsDMZi%2FRbbuDU3GtJIuYAzK2lJAB%2FClk96WBp72P0QEGT0T6XNs5oURDwUlg9Uagrtiwu5mShS%2FxhfKCj%2B&X-Amz-Signature=3edae8377ca19d297af88a5decda6af10f5b08fd8c7ef0dea7109bdc2d23394c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHUADVR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBf1cX1wgHBlPNbsEdmxgN6JBC%2B59cZkKiEKd4BbXKawAiAwTzQM73YzKP7HDtKDCxvMa3sS9TRCWVK71KNmF7ehfyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnKGTS6HFez2qQyB7KtwD2I%2F2voaEq3EGpgV%2Bp6QD1RJunHHkgmKXHLO%2FujYsA%2FNYiCZ0LALAr8KPxapw%2FofR2LtoNZ6DcsTh%2FF%2FOMZkgIWR8lSLD4p5sgtpedJRIAf%2FVNBDoQvaxmKmiNZJhp4EhcINTdGuabTGXs6Ljpo1Wcq7AjKRtLDHKAbqA7IB2qhZ8xITdMMGgzC05EhAhEFWdRe%2FbRc5ZSqg%2Bv9FESItWsbQEUFQ04zty1QH6EbyTw3sUEBu6pZoGH%2BUG%2FvTpwz53cKPtDimRJfWWYJqsg9MMxJKxebrH3OAEeT6e9UIwCHhV1qSwkAS5Vd8xXnNMgqR2vAM19N%2FIiWm%2BkJtFguUH6rjwB5LNpfm9HkaRcwL%2B2r7ErlWHcppFxZomHxU8fyEF8HG0ZSiviLRpkFq2ibUw79CAgOZu6ykc8IXDnpvNkpe6sUSlHeiLaUanO%2Fk8wzAUfpCuwaIsKzb%2BhZAQ9x1PWPMV1GBiMDDPwzWWM3gayjuRcguItumtmjCfQP5UKtdkoFEs%2FSRbeGA5GsNyl4LZF0dypNGMTiDcSM9VBcOT3Pm8istjuQt%2BsV%2F0vjTPIpdyJnKt%2BRl1zl7%2FaSd0IjtcL5jfBMK4Cs%2Fi%2F655cgRvPIz3kwk%2FRQ8TttxTcPMw65CnwwY6pgET5a7TPonifREKaQA5xkSmz4tjz9L8jsEg0JzwK1SNBsKURlFrnRm9pWciTVcPQlmmYCej29UnzSriMFFnhxrqamLmaLMKXxY%2Fz40QraZJ71HC66p%2FSM8MdB%2FnjL6wPt7Gbk%2BZpkqlAK%2FsDMZi%2FRbbuDU3GtJIuYAzK2lJAB%2FClk96WBp72P0QEGT0T6XNs5oURDwUlg9Uagrtiwu5mShS%2FxhfKCj%2B&X-Amz-Signature=4401f3454c99f15fcecdc89fa4649ae9060b80f4ab3120b878c4955ac9010fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHUADVR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBf1cX1wgHBlPNbsEdmxgN6JBC%2B59cZkKiEKd4BbXKawAiAwTzQM73YzKP7HDtKDCxvMa3sS9TRCWVK71KNmF7ehfyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnKGTS6HFez2qQyB7KtwD2I%2F2voaEq3EGpgV%2Bp6QD1RJunHHkgmKXHLO%2FujYsA%2FNYiCZ0LALAr8KPxapw%2FofR2LtoNZ6DcsTh%2FF%2FOMZkgIWR8lSLD4p5sgtpedJRIAf%2FVNBDoQvaxmKmiNZJhp4EhcINTdGuabTGXs6Ljpo1Wcq7AjKRtLDHKAbqA7IB2qhZ8xITdMMGgzC05EhAhEFWdRe%2FbRc5ZSqg%2Bv9FESItWsbQEUFQ04zty1QH6EbyTw3sUEBu6pZoGH%2BUG%2FvTpwz53cKPtDimRJfWWYJqsg9MMxJKxebrH3OAEeT6e9UIwCHhV1qSwkAS5Vd8xXnNMgqR2vAM19N%2FIiWm%2BkJtFguUH6rjwB5LNpfm9HkaRcwL%2B2r7ErlWHcppFxZomHxU8fyEF8HG0ZSiviLRpkFq2ibUw79CAgOZu6ykc8IXDnpvNkpe6sUSlHeiLaUanO%2Fk8wzAUfpCuwaIsKzb%2BhZAQ9x1PWPMV1GBiMDDPwzWWM3gayjuRcguItumtmjCfQP5UKtdkoFEs%2FSRbeGA5GsNyl4LZF0dypNGMTiDcSM9VBcOT3Pm8istjuQt%2BsV%2F0vjTPIpdyJnKt%2BRl1zl7%2FaSd0IjtcL5jfBMK4Cs%2Fi%2F655cgRvPIz3kwk%2FRQ8TttxTcPMw65CnwwY6pgET5a7TPonifREKaQA5xkSmz4tjz9L8jsEg0JzwK1SNBsKURlFrnRm9pWciTVcPQlmmYCej29UnzSriMFFnhxrqamLmaLMKXxY%2Fz40QraZJ71HC66p%2FSM8MdB%2FnjL6wPt7Gbk%2BZpkqlAK%2FsDMZi%2FRbbuDU3GtJIuYAzK2lJAB%2FClk96WBp72P0QEGT0T6XNs5oURDwUlg9Uagrtiwu5mShS%2FxhfKCj%2B&X-Amz-Signature=0be428ddfd84c8107a2ffcc1e22919a2e0adca928d7b6c6604379c8b694f32d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
