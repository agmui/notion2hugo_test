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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKH2EH3P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCd3Hg0Ot92AvxsiFyKMkrXPgu3fBOztoZlt9ddF%2FtovQIhAOmEh%2FErXOK5x5Tl5VqaoubiP6clP2Aha6mlaMnUxOLaKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Mat%2Bl7Uroc7qWSQq3AOkUObu7XFabjNg%2BiA7p%2FWI9XImRyY4h901MtVVIeC2dHIEPOfVik24fYP%2FgZgDR%2Fd44gHCfJq%2Bz5lRYQd%2FHeyyPFfd%2BcJ79gExncJkBg2QGpr7RiHnC6L2MZeERhoHrc2XGjTY3HFOMPlVus8DlRR2u9h%2FZyPp8LmbCXDtb2xyPiYWpftjgtuuc5Uli2w8YjbN7OKA%2BvyDx7soxIPBUMWPpMjzXiBkoYApT36n%2FmPN%2FLTbit44drmdXlAwd7KXQ07g73fA2OjFVqFGPXW%2BEHYRF61uzbB6odPQodkWtnEQ1YYdQwh3UKZGArfvCAx6diiP2HQy9bmJD%2BCVg6aV3a2vLWO3Yw4ThSvPUXjpKWvquZPicQkn8Sh2blYX%2F2bBEigwDBZfibJtsGhZbcn8IBgCEycPud7kFA%2F%2Fy6v5vBBlIDjaJLf%2Bj%2FQs4zH%2FKaESxxxdpxFeqIcI4IZqKSpXClFmANwovabyBUqdkdlmUzxH335%2FpeBmT%2F9BT84Mf58PzTLw2XYRxnpIlPE4Ovw15p6KqzxslKobVXTTlCyor9H3qx3wCMWUTkLaDx9baweQceSGs2fuWeH8aFFcsv1hha%2FlkcVKOa%2BZgX9PbDVj7nfBnhb1xAUfS21B51fapDCQ1Jm9BjqkAWNq%2Fhod8cJuyPxNaQuazcehNlnwAMmJOQypk3OXKQeBr6BhJdFZx4WuqVuq2rNFVs6lZtALeylwKdYIfVhbSQD%2BgSh%2Bt57VduYihp8b51B3J0eOtecUY2ld%2BJYFAtb8ELdT46IZDe5%2BlqVbmRl23ixKSmBLB3gZZgNVJ%2BLkbOMTWBGjRqXiAl9yyAbiim6egfo2%2BC462AkpnjWsqLICmdBRuspo&X-Amz-Signature=2cdc6939b97e28e57215bf9868061576bcb18d17470afa39704f4d1b52f344bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKH2EH3P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCd3Hg0Ot92AvxsiFyKMkrXPgu3fBOztoZlt9ddF%2FtovQIhAOmEh%2FErXOK5x5Tl5VqaoubiP6clP2Aha6mlaMnUxOLaKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Mat%2Bl7Uroc7qWSQq3AOkUObu7XFabjNg%2BiA7p%2FWI9XImRyY4h901MtVVIeC2dHIEPOfVik24fYP%2FgZgDR%2Fd44gHCfJq%2Bz5lRYQd%2FHeyyPFfd%2BcJ79gExncJkBg2QGpr7RiHnC6L2MZeERhoHrc2XGjTY3HFOMPlVus8DlRR2u9h%2FZyPp8LmbCXDtb2xyPiYWpftjgtuuc5Uli2w8YjbN7OKA%2BvyDx7soxIPBUMWPpMjzXiBkoYApT36n%2FmPN%2FLTbit44drmdXlAwd7KXQ07g73fA2OjFVqFGPXW%2BEHYRF61uzbB6odPQodkWtnEQ1YYdQwh3UKZGArfvCAx6diiP2HQy9bmJD%2BCVg6aV3a2vLWO3Yw4ThSvPUXjpKWvquZPicQkn8Sh2blYX%2F2bBEigwDBZfibJtsGhZbcn8IBgCEycPud7kFA%2F%2Fy6v5vBBlIDjaJLf%2Bj%2FQs4zH%2FKaESxxxdpxFeqIcI4IZqKSpXClFmANwovabyBUqdkdlmUzxH335%2FpeBmT%2F9BT84Mf58PzTLw2XYRxnpIlPE4Ovw15p6KqzxslKobVXTTlCyor9H3qx3wCMWUTkLaDx9baweQceSGs2fuWeH8aFFcsv1hha%2FlkcVKOa%2BZgX9PbDVj7nfBnhb1xAUfS21B51fapDCQ1Jm9BjqkAWNq%2Fhod8cJuyPxNaQuazcehNlnwAMmJOQypk3OXKQeBr6BhJdFZx4WuqVuq2rNFVs6lZtALeylwKdYIfVhbSQD%2BgSh%2Bt57VduYihp8b51B3J0eOtecUY2ld%2BJYFAtb8ELdT46IZDe5%2BlqVbmRl23ixKSmBLB3gZZgNVJ%2BLkbOMTWBGjRqXiAl9yyAbiim6egfo2%2BC462AkpnjWsqLICmdBRuspo&X-Amz-Signature=d97b2ae9ad09756d565634dc3958f7adc3c7937e1b23bcdf7764e367492b3d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKH2EH3P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCd3Hg0Ot92AvxsiFyKMkrXPgu3fBOztoZlt9ddF%2FtovQIhAOmEh%2FErXOK5x5Tl5VqaoubiP6clP2Aha6mlaMnUxOLaKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Mat%2Bl7Uroc7qWSQq3AOkUObu7XFabjNg%2BiA7p%2FWI9XImRyY4h901MtVVIeC2dHIEPOfVik24fYP%2FgZgDR%2Fd44gHCfJq%2Bz5lRYQd%2FHeyyPFfd%2BcJ79gExncJkBg2QGpr7RiHnC6L2MZeERhoHrc2XGjTY3HFOMPlVus8DlRR2u9h%2FZyPp8LmbCXDtb2xyPiYWpftjgtuuc5Uli2w8YjbN7OKA%2BvyDx7soxIPBUMWPpMjzXiBkoYApT36n%2FmPN%2FLTbit44drmdXlAwd7KXQ07g73fA2OjFVqFGPXW%2BEHYRF61uzbB6odPQodkWtnEQ1YYdQwh3UKZGArfvCAx6diiP2HQy9bmJD%2BCVg6aV3a2vLWO3Yw4ThSvPUXjpKWvquZPicQkn8Sh2blYX%2F2bBEigwDBZfibJtsGhZbcn8IBgCEycPud7kFA%2F%2Fy6v5vBBlIDjaJLf%2Bj%2FQs4zH%2FKaESxxxdpxFeqIcI4IZqKSpXClFmANwovabyBUqdkdlmUzxH335%2FpeBmT%2F9BT84Mf58PzTLw2XYRxnpIlPE4Ovw15p6KqzxslKobVXTTlCyor9H3qx3wCMWUTkLaDx9baweQceSGs2fuWeH8aFFcsv1hha%2FlkcVKOa%2BZgX9PbDVj7nfBnhb1xAUfS21B51fapDCQ1Jm9BjqkAWNq%2Fhod8cJuyPxNaQuazcehNlnwAMmJOQypk3OXKQeBr6BhJdFZx4WuqVuq2rNFVs6lZtALeylwKdYIfVhbSQD%2BgSh%2Bt57VduYihp8b51B3J0eOtecUY2ld%2BJYFAtb8ELdT46IZDe5%2BlqVbmRl23ixKSmBLB3gZZgNVJ%2BLkbOMTWBGjRqXiAl9yyAbiim6egfo2%2BC462AkpnjWsqLICmdBRuspo&X-Amz-Signature=6fb9ec4883c64fa933ae2199a72d92371226bf67a9f87b56f12df0b1b6a71b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKH2EH3P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCd3Hg0Ot92AvxsiFyKMkrXPgu3fBOztoZlt9ddF%2FtovQIhAOmEh%2FErXOK5x5Tl5VqaoubiP6clP2Aha6mlaMnUxOLaKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Mat%2Bl7Uroc7qWSQq3AOkUObu7XFabjNg%2BiA7p%2FWI9XImRyY4h901MtVVIeC2dHIEPOfVik24fYP%2FgZgDR%2Fd44gHCfJq%2Bz5lRYQd%2FHeyyPFfd%2BcJ79gExncJkBg2QGpr7RiHnC6L2MZeERhoHrc2XGjTY3HFOMPlVus8DlRR2u9h%2FZyPp8LmbCXDtb2xyPiYWpftjgtuuc5Uli2w8YjbN7OKA%2BvyDx7soxIPBUMWPpMjzXiBkoYApT36n%2FmPN%2FLTbit44drmdXlAwd7KXQ07g73fA2OjFVqFGPXW%2BEHYRF61uzbB6odPQodkWtnEQ1YYdQwh3UKZGArfvCAx6diiP2HQy9bmJD%2BCVg6aV3a2vLWO3Yw4ThSvPUXjpKWvquZPicQkn8Sh2blYX%2F2bBEigwDBZfibJtsGhZbcn8IBgCEycPud7kFA%2F%2Fy6v5vBBlIDjaJLf%2Bj%2FQs4zH%2FKaESxxxdpxFeqIcI4IZqKSpXClFmANwovabyBUqdkdlmUzxH335%2FpeBmT%2F9BT84Mf58PzTLw2XYRxnpIlPE4Ovw15p6KqzxslKobVXTTlCyor9H3qx3wCMWUTkLaDx9baweQceSGs2fuWeH8aFFcsv1hha%2FlkcVKOa%2BZgX9PbDVj7nfBnhb1xAUfS21B51fapDCQ1Jm9BjqkAWNq%2Fhod8cJuyPxNaQuazcehNlnwAMmJOQypk3OXKQeBr6BhJdFZx4WuqVuq2rNFVs6lZtALeylwKdYIfVhbSQD%2BgSh%2Bt57VduYihp8b51B3J0eOtecUY2ld%2BJYFAtb8ELdT46IZDe5%2BlqVbmRl23ixKSmBLB3gZZgNVJ%2BLkbOMTWBGjRqXiAl9yyAbiim6egfo2%2BC462AkpnjWsqLICmdBRuspo&X-Amz-Signature=2822c20f3a00fc9e937979839ac606b936225c59918c526a517df9f59c85986f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKH2EH3P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCd3Hg0Ot92AvxsiFyKMkrXPgu3fBOztoZlt9ddF%2FtovQIhAOmEh%2FErXOK5x5Tl5VqaoubiP6clP2Aha6mlaMnUxOLaKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Mat%2Bl7Uroc7qWSQq3AOkUObu7XFabjNg%2BiA7p%2FWI9XImRyY4h901MtVVIeC2dHIEPOfVik24fYP%2FgZgDR%2Fd44gHCfJq%2Bz5lRYQd%2FHeyyPFfd%2BcJ79gExncJkBg2QGpr7RiHnC6L2MZeERhoHrc2XGjTY3HFOMPlVus8DlRR2u9h%2FZyPp8LmbCXDtb2xyPiYWpftjgtuuc5Uli2w8YjbN7OKA%2BvyDx7soxIPBUMWPpMjzXiBkoYApT36n%2FmPN%2FLTbit44drmdXlAwd7KXQ07g73fA2OjFVqFGPXW%2BEHYRF61uzbB6odPQodkWtnEQ1YYdQwh3UKZGArfvCAx6diiP2HQy9bmJD%2BCVg6aV3a2vLWO3Yw4ThSvPUXjpKWvquZPicQkn8Sh2blYX%2F2bBEigwDBZfibJtsGhZbcn8IBgCEycPud7kFA%2F%2Fy6v5vBBlIDjaJLf%2Bj%2FQs4zH%2FKaESxxxdpxFeqIcI4IZqKSpXClFmANwovabyBUqdkdlmUzxH335%2FpeBmT%2F9BT84Mf58PzTLw2XYRxnpIlPE4Ovw15p6KqzxslKobVXTTlCyor9H3qx3wCMWUTkLaDx9baweQceSGs2fuWeH8aFFcsv1hha%2FlkcVKOa%2BZgX9PbDVj7nfBnhb1xAUfS21B51fapDCQ1Jm9BjqkAWNq%2Fhod8cJuyPxNaQuazcehNlnwAMmJOQypk3OXKQeBr6BhJdFZx4WuqVuq2rNFVs6lZtALeylwKdYIfVhbSQD%2BgSh%2Bt57VduYihp8b51B3J0eOtecUY2ld%2BJYFAtb8ELdT46IZDe5%2BlqVbmRl23ixKSmBLB3gZZgNVJ%2BLkbOMTWBGjRqXiAl9yyAbiim6egfo2%2BC462AkpnjWsqLICmdBRuspo&X-Amz-Signature=7154038617f83ff8d731be9584d12a53295292a9ea8a60eba5a7af7359f27797&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKH2EH3P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCd3Hg0Ot92AvxsiFyKMkrXPgu3fBOztoZlt9ddF%2FtovQIhAOmEh%2FErXOK5x5Tl5VqaoubiP6clP2Aha6mlaMnUxOLaKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Mat%2Bl7Uroc7qWSQq3AOkUObu7XFabjNg%2BiA7p%2FWI9XImRyY4h901MtVVIeC2dHIEPOfVik24fYP%2FgZgDR%2Fd44gHCfJq%2Bz5lRYQd%2FHeyyPFfd%2BcJ79gExncJkBg2QGpr7RiHnC6L2MZeERhoHrc2XGjTY3HFOMPlVus8DlRR2u9h%2FZyPp8LmbCXDtb2xyPiYWpftjgtuuc5Uli2w8YjbN7OKA%2BvyDx7soxIPBUMWPpMjzXiBkoYApT36n%2FmPN%2FLTbit44drmdXlAwd7KXQ07g73fA2OjFVqFGPXW%2BEHYRF61uzbB6odPQodkWtnEQ1YYdQwh3UKZGArfvCAx6diiP2HQy9bmJD%2BCVg6aV3a2vLWO3Yw4ThSvPUXjpKWvquZPicQkn8Sh2blYX%2F2bBEigwDBZfibJtsGhZbcn8IBgCEycPud7kFA%2F%2Fy6v5vBBlIDjaJLf%2Bj%2FQs4zH%2FKaESxxxdpxFeqIcI4IZqKSpXClFmANwovabyBUqdkdlmUzxH335%2FpeBmT%2F9BT84Mf58PzTLw2XYRxnpIlPE4Ovw15p6KqzxslKobVXTTlCyor9H3qx3wCMWUTkLaDx9baweQceSGs2fuWeH8aFFcsv1hha%2FlkcVKOa%2BZgX9PbDVj7nfBnhb1xAUfS21B51fapDCQ1Jm9BjqkAWNq%2Fhod8cJuyPxNaQuazcehNlnwAMmJOQypk3OXKQeBr6BhJdFZx4WuqVuq2rNFVs6lZtALeylwKdYIfVhbSQD%2BgSh%2Bt57VduYihp8b51B3J0eOtecUY2ld%2BJYFAtb8ELdT46IZDe5%2BlqVbmRl23ixKSmBLB3gZZgNVJ%2BLkbOMTWBGjRqXiAl9yyAbiim6egfo2%2BC462AkpnjWsqLICmdBRuspo&X-Amz-Signature=05dda4106ae021abc09747adf2b6e912e8956e9363ee1a1c384441e90a98e7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKH2EH3P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCd3Hg0Ot92AvxsiFyKMkrXPgu3fBOztoZlt9ddF%2FtovQIhAOmEh%2FErXOK5x5Tl5VqaoubiP6clP2Aha6mlaMnUxOLaKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Mat%2Bl7Uroc7qWSQq3AOkUObu7XFabjNg%2BiA7p%2FWI9XImRyY4h901MtVVIeC2dHIEPOfVik24fYP%2FgZgDR%2Fd44gHCfJq%2Bz5lRYQd%2FHeyyPFfd%2BcJ79gExncJkBg2QGpr7RiHnC6L2MZeERhoHrc2XGjTY3HFOMPlVus8DlRR2u9h%2FZyPp8LmbCXDtb2xyPiYWpftjgtuuc5Uli2w8YjbN7OKA%2BvyDx7soxIPBUMWPpMjzXiBkoYApT36n%2FmPN%2FLTbit44drmdXlAwd7KXQ07g73fA2OjFVqFGPXW%2BEHYRF61uzbB6odPQodkWtnEQ1YYdQwh3UKZGArfvCAx6diiP2HQy9bmJD%2BCVg6aV3a2vLWO3Yw4ThSvPUXjpKWvquZPicQkn8Sh2blYX%2F2bBEigwDBZfibJtsGhZbcn8IBgCEycPud7kFA%2F%2Fy6v5vBBlIDjaJLf%2Bj%2FQs4zH%2FKaESxxxdpxFeqIcI4IZqKSpXClFmANwovabyBUqdkdlmUzxH335%2FpeBmT%2F9BT84Mf58PzTLw2XYRxnpIlPE4Ovw15p6KqzxslKobVXTTlCyor9H3qx3wCMWUTkLaDx9baweQceSGs2fuWeH8aFFcsv1hha%2FlkcVKOa%2BZgX9PbDVj7nfBnhb1xAUfS21B51fapDCQ1Jm9BjqkAWNq%2Fhod8cJuyPxNaQuazcehNlnwAMmJOQypk3OXKQeBr6BhJdFZx4WuqVuq2rNFVs6lZtALeylwKdYIfVhbSQD%2BgSh%2Bt57VduYihp8b51B3J0eOtecUY2ld%2BJYFAtb8ELdT46IZDe5%2BlqVbmRl23ixKSmBLB3gZZgNVJ%2BLkbOMTWBGjRqXiAl9yyAbiim6egfo2%2BC462AkpnjWsqLICmdBRuspo&X-Amz-Signature=748c16100ac447a1651063f7e45ab519e34d676758afd0d4335246cdbd9ccd09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKH2EH3P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCd3Hg0Ot92AvxsiFyKMkrXPgu3fBOztoZlt9ddF%2FtovQIhAOmEh%2FErXOK5x5Tl5VqaoubiP6clP2Aha6mlaMnUxOLaKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Mat%2Bl7Uroc7qWSQq3AOkUObu7XFabjNg%2BiA7p%2FWI9XImRyY4h901MtVVIeC2dHIEPOfVik24fYP%2FgZgDR%2Fd44gHCfJq%2Bz5lRYQd%2FHeyyPFfd%2BcJ79gExncJkBg2QGpr7RiHnC6L2MZeERhoHrc2XGjTY3HFOMPlVus8DlRR2u9h%2FZyPp8LmbCXDtb2xyPiYWpftjgtuuc5Uli2w8YjbN7OKA%2BvyDx7soxIPBUMWPpMjzXiBkoYApT36n%2FmPN%2FLTbit44drmdXlAwd7KXQ07g73fA2OjFVqFGPXW%2BEHYRF61uzbB6odPQodkWtnEQ1YYdQwh3UKZGArfvCAx6diiP2HQy9bmJD%2BCVg6aV3a2vLWO3Yw4ThSvPUXjpKWvquZPicQkn8Sh2blYX%2F2bBEigwDBZfibJtsGhZbcn8IBgCEycPud7kFA%2F%2Fy6v5vBBlIDjaJLf%2Bj%2FQs4zH%2FKaESxxxdpxFeqIcI4IZqKSpXClFmANwovabyBUqdkdlmUzxH335%2FpeBmT%2F9BT84Mf58PzTLw2XYRxnpIlPE4Ovw15p6KqzxslKobVXTTlCyor9H3qx3wCMWUTkLaDx9baweQceSGs2fuWeH8aFFcsv1hha%2FlkcVKOa%2BZgX9PbDVj7nfBnhb1xAUfS21B51fapDCQ1Jm9BjqkAWNq%2Fhod8cJuyPxNaQuazcehNlnwAMmJOQypk3OXKQeBr6BhJdFZx4WuqVuq2rNFVs6lZtALeylwKdYIfVhbSQD%2BgSh%2Bt57VduYihp8b51B3J0eOtecUY2ld%2BJYFAtb8ELdT46IZDe5%2BlqVbmRl23ixKSmBLB3gZZgNVJ%2BLkbOMTWBGjRqXiAl9yyAbiim6egfo2%2BC462AkpnjWsqLICmdBRuspo&X-Amz-Signature=6c901be1687a634b0fb6625a8cf9d110ded3a4a39ff009f0379776238022078b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
