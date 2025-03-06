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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP6JRP5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiG2fErjwyU4C%2FWekt6Qg91mag6GFmI66BzF%2FWqfLTvwIgUBYuOwaxokjV8Eabd8hHKTUbTYDEXH3AHHsSbwoiTkoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKlO7pTIz%2BeicDz7NircA2g48ItzUjkJjXVG5ONQaVxM5LSBMZL%2BeAH50QusoNvidAKR9KdWtjW36GfOAw3rzdfv3KhWk1ZJlUhsVnYpao2BfQF%2B0nxa4s6wklMbhfRd7eKuVzBuT2HkPiBkyRkp5%2BSsEHs8SM93xMe6klVIv%2FGNBZCtt%2B3%2BfUfwM8oqRFJ79%2BFhBoACMX9bhO%2Fc7R7xq%2BgF43%2BZpJOUlnC9W2bv%2FMdmMnzZpCvjsQy4ciZPXciIfIdpJemmAIt1UtPkGBiv74YkApdhXrBNv1gGQQ4gRZWUM07yISR8VGmDxB9CvpQBaXXfHjgm1rn1KPkAHc5m8YyjxxSlwBJOMO7prkRIUfdXCm4677sJhUCKjxYPO1vH7Ytpe%2FMDPP5V3b5LOOLuryAIaOTfMX1gIyNwSw3wVd08HCeUaVvJj5ozduWIkoov63A7Hj7NBaMJ0a1liFixJSTOwXHf8DEtyqtAsjRMvwpwIJUX3HVdZPqTDNhvTDnp0%2BATnmqHaiaQccjIn2SF%2F4uNxZwX4r08jhRpm2fW%2FSXE6Fj%2FTFDoDVy%2FK0RYMUhhr3CMAR%2FRm4Nw4iO0oHqVDiDEsHlMJzNZGzBn7O7R3f6gLKK5i1tqE1Pj1a6NBObSnyXjPk414YLrGdWwMOLSpb4GOqUBoJuvpX%2FRUufXFz7fwii5GvuXEHo%2B3kmLTlf8J2t4p9gkmtFiV%2BDXq11lKiWjVi%2FtSbQjEwUo5e3Y42XzAo2BhPNLA85vX0D8FZ02G8F6YCqt2hqyOWbcmAH0b8s%2BJMadcJ13cJIassanMOhaYtW4awWaQjdqporCYgE%2FoT27T1k9%2BT5RE52M4yGuBA1egDlR25KfmcRYwwvoMg9%2B7LuVU1o%2FoxoC&X-Amz-Signature=aa56091f0268d281fccbf96a52fc7fb0b91c3824db5e617e4d3451ff2ed876a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP6JRP5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiG2fErjwyU4C%2FWekt6Qg91mag6GFmI66BzF%2FWqfLTvwIgUBYuOwaxokjV8Eabd8hHKTUbTYDEXH3AHHsSbwoiTkoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKlO7pTIz%2BeicDz7NircA2g48ItzUjkJjXVG5ONQaVxM5LSBMZL%2BeAH50QusoNvidAKR9KdWtjW36GfOAw3rzdfv3KhWk1ZJlUhsVnYpao2BfQF%2B0nxa4s6wklMbhfRd7eKuVzBuT2HkPiBkyRkp5%2BSsEHs8SM93xMe6klVIv%2FGNBZCtt%2B3%2BfUfwM8oqRFJ79%2BFhBoACMX9bhO%2Fc7R7xq%2BgF43%2BZpJOUlnC9W2bv%2FMdmMnzZpCvjsQy4ciZPXciIfIdpJemmAIt1UtPkGBiv74YkApdhXrBNv1gGQQ4gRZWUM07yISR8VGmDxB9CvpQBaXXfHjgm1rn1KPkAHc5m8YyjxxSlwBJOMO7prkRIUfdXCm4677sJhUCKjxYPO1vH7Ytpe%2FMDPP5V3b5LOOLuryAIaOTfMX1gIyNwSw3wVd08HCeUaVvJj5ozduWIkoov63A7Hj7NBaMJ0a1liFixJSTOwXHf8DEtyqtAsjRMvwpwIJUX3HVdZPqTDNhvTDnp0%2BATnmqHaiaQccjIn2SF%2F4uNxZwX4r08jhRpm2fW%2FSXE6Fj%2FTFDoDVy%2FK0RYMUhhr3CMAR%2FRm4Nw4iO0oHqVDiDEsHlMJzNZGzBn7O7R3f6gLKK5i1tqE1Pj1a6NBObSnyXjPk414YLrGdWwMOLSpb4GOqUBoJuvpX%2FRUufXFz7fwii5GvuXEHo%2B3kmLTlf8J2t4p9gkmtFiV%2BDXq11lKiWjVi%2FtSbQjEwUo5e3Y42XzAo2BhPNLA85vX0D8FZ02G8F6YCqt2hqyOWbcmAH0b8s%2BJMadcJ13cJIassanMOhaYtW4awWaQjdqporCYgE%2FoT27T1k9%2BT5RE52M4yGuBA1egDlR25KfmcRYwwvoMg9%2B7LuVU1o%2FoxoC&X-Amz-Signature=44a1a6da0de279bc79bfea6b6b5a68986564739ec9b92ec9ae46abbde255e977&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP6JRP5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiG2fErjwyU4C%2FWekt6Qg91mag6GFmI66BzF%2FWqfLTvwIgUBYuOwaxokjV8Eabd8hHKTUbTYDEXH3AHHsSbwoiTkoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKlO7pTIz%2BeicDz7NircA2g48ItzUjkJjXVG5ONQaVxM5LSBMZL%2BeAH50QusoNvidAKR9KdWtjW36GfOAw3rzdfv3KhWk1ZJlUhsVnYpao2BfQF%2B0nxa4s6wklMbhfRd7eKuVzBuT2HkPiBkyRkp5%2BSsEHs8SM93xMe6klVIv%2FGNBZCtt%2B3%2BfUfwM8oqRFJ79%2BFhBoACMX9bhO%2Fc7R7xq%2BgF43%2BZpJOUlnC9W2bv%2FMdmMnzZpCvjsQy4ciZPXciIfIdpJemmAIt1UtPkGBiv74YkApdhXrBNv1gGQQ4gRZWUM07yISR8VGmDxB9CvpQBaXXfHjgm1rn1KPkAHc5m8YyjxxSlwBJOMO7prkRIUfdXCm4677sJhUCKjxYPO1vH7Ytpe%2FMDPP5V3b5LOOLuryAIaOTfMX1gIyNwSw3wVd08HCeUaVvJj5ozduWIkoov63A7Hj7NBaMJ0a1liFixJSTOwXHf8DEtyqtAsjRMvwpwIJUX3HVdZPqTDNhvTDnp0%2BATnmqHaiaQccjIn2SF%2F4uNxZwX4r08jhRpm2fW%2FSXE6Fj%2FTFDoDVy%2FK0RYMUhhr3CMAR%2FRm4Nw4iO0oHqVDiDEsHlMJzNZGzBn7O7R3f6gLKK5i1tqE1Pj1a6NBObSnyXjPk414YLrGdWwMOLSpb4GOqUBoJuvpX%2FRUufXFz7fwii5GvuXEHo%2B3kmLTlf8J2t4p9gkmtFiV%2BDXq11lKiWjVi%2FtSbQjEwUo5e3Y42XzAo2BhPNLA85vX0D8FZ02G8F6YCqt2hqyOWbcmAH0b8s%2BJMadcJ13cJIassanMOhaYtW4awWaQjdqporCYgE%2FoT27T1k9%2BT5RE52M4yGuBA1egDlR25KfmcRYwwvoMg9%2B7LuVU1o%2FoxoC&X-Amz-Signature=1c59de624e6bba44e6ae264df655dcb9d446f5ecfa7f21bc4832ec3f4d2e8f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP6JRP5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiG2fErjwyU4C%2FWekt6Qg91mag6GFmI66BzF%2FWqfLTvwIgUBYuOwaxokjV8Eabd8hHKTUbTYDEXH3AHHsSbwoiTkoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKlO7pTIz%2BeicDz7NircA2g48ItzUjkJjXVG5ONQaVxM5LSBMZL%2BeAH50QusoNvidAKR9KdWtjW36GfOAw3rzdfv3KhWk1ZJlUhsVnYpao2BfQF%2B0nxa4s6wklMbhfRd7eKuVzBuT2HkPiBkyRkp5%2BSsEHs8SM93xMe6klVIv%2FGNBZCtt%2B3%2BfUfwM8oqRFJ79%2BFhBoACMX9bhO%2Fc7R7xq%2BgF43%2BZpJOUlnC9W2bv%2FMdmMnzZpCvjsQy4ciZPXciIfIdpJemmAIt1UtPkGBiv74YkApdhXrBNv1gGQQ4gRZWUM07yISR8VGmDxB9CvpQBaXXfHjgm1rn1KPkAHc5m8YyjxxSlwBJOMO7prkRIUfdXCm4677sJhUCKjxYPO1vH7Ytpe%2FMDPP5V3b5LOOLuryAIaOTfMX1gIyNwSw3wVd08HCeUaVvJj5ozduWIkoov63A7Hj7NBaMJ0a1liFixJSTOwXHf8DEtyqtAsjRMvwpwIJUX3HVdZPqTDNhvTDnp0%2BATnmqHaiaQccjIn2SF%2F4uNxZwX4r08jhRpm2fW%2FSXE6Fj%2FTFDoDVy%2FK0RYMUhhr3CMAR%2FRm4Nw4iO0oHqVDiDEsHlMJzNZGzBn7O7R3f6gLKK5i1tqE1Pj1a6NBObSnyXjPk414YLrGdWwMOLSpb4GOqUBoJuvpX%2FRUufXFz7fwii5GvuXEHo%2B3kmLTlf8J2t4p9gkmtFiV%2BDXq11lKiWjVi%2FtSbQjEwUo5e3Y42XzAo2BhPNLA85vX0D8FZ02G8F6YCqt2hqyOWbcmAH0b8s%2BJMadcJ13cJIassanMOhaYtW4awWaQjdqporCYgE%2FoT27T1k9%2BT5RE52M4yGuBA1egDlR25KfmcRYwwvoMg9%2B7LuVU1o%2FoxoC&X-Amz-Signature=d74b023d6a288fa6899a8d6b2d585984bc158ca822e1d51852411b6f7c83e7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP6JRP5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiG2fErjwyU4C%2FWekt6Qg91mag6GFmI66BzF%2FWqfLTvwIgUBYuOwaxokjV8Eabd8hHKTUbTYDEXH3AHHsSbwoiTkoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKlO7pTIz%2BeicDz7NircA2g48ItzUjkJjXVG5ONQaVxM5LSBMZL%2BeAH50QusoNvidAKR9KdWtjW36GfOAw3rzdfv3KhWk1ZJlUhsVnYpao2BfQF%2B0nxa4s6wklMbhfRd7eKuVzBuT2HkPiBkyRkp5%2BSsEHs8SM93xMe6klVIv%2FGNBZCtt%2B3%2BfUfwM8oqRFJ79%2BFhBoACMX9bhO%2Fc7R7xq%2BgF43%2BZpJOUlnC9W2bv%2FMdmMnzZpCvjsQy4ciZPXciIfIdpJemmAIt1UtPkGBiv74YkApdhXrBNv1gGQQ4gRZWUM07yISR8VGmDxB9CvpQBaXXfHjgm1rn1KPkAHc5m8YyjxxSlwBJOMO7prkRIUfdXCm4677sJhUCKjxYPO1vH7Ytpe%2FMDPP5V3b5LOOLuryAIaOTfMX1gIyNwSw3wVd08HCeUaVvJj5ozduWIkoov63A7Hj7NBaMJ0a1liFixJSTOwXHf8DEtyqtAsjRMvwpwIJUX3HVdZPqTDNhvTDnp0%2BATnmqHaiaQccjIn2SF%2F4uNxZwX4r08jhRpm2fW%2FSXE6Fj%2FTFDoDVy%2FK0RYMUhhr3CMAR%2FRm4Nw4iO0oHqVDiDEsHlMJzNZGzBn7O7R3f6gLKK5i1tqE1Pj1a6NBObSnyXjPk414YLrGdWwMOLSpb4GOqUBoJuvpX%2FRUufXFz7fwii5GvuXEHo%2B3kmLTlf8J2t4p9gkmtFiV%2BDXq11lKiWjVi%2FtSbQjEwUo5e3Y42XzAo2BhPNLA85vX0D8FZ02G8F6YCqt2hqyOWbcmAH0b8s%2BJMadcJ13cJIassanMOhaYtW4awWaQjdqporCYgE%2FoT27T1k9%2BT5RE52M4yGuBA1egDlR25KfmcRYwwvoMg9%2B7LuVU1o%2FoxoC&X-Amz-Signature=33e12a7411e0cd8ef0151007fd76d94a5341b3c0116b30e7aef99a91e3d3a221&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP6JRP5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiG2fErjwyU4C%2FWekt6Qg91mag6GFmI66BzF%2FWqfLTvwIgUBYuOwaxokjV8Eabd8hHKTUbTYDEXH3AHHsSbwoiTkoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKlO7pTIz%2BeicDz7NircA2g48ItzUjkJjXVG5ONQaVxM5LSBMZL%2BeAH50QusoNvidAKR9KdWtjW36GfOAw3rzdfv3KhWk1ZJlUhsVnYpao2BfQF%2B0nxa4s6wklMbhfRd7eKuVzBuT2HkPiBkyRkp5%2BSsEHs8SM93xMe6klVIv%2FGNBZCtt%2B3%2BfUfwM8oqRFJ79%2BFhBoACMX9bhO%2Fc7R7xq%2BgF43%2BZpJOUlnC9W2bv%2FMdmMnzZpCvjsQy4ciZPXciIfIdpJemmAIt1UtPkGBiv74YkApdhXrBNv1gGQQ4gRZWUM07yISR8VGmDxB9CvpQBaXXfHjgm1rn1KPkAHc5m8YyjxxSlwBJOMO7prkRIUfdXCm4677sJhUCKjxYPO1vH7Ytpe%2FMDPP5V3b5LOOLuryAIaOTfMX1gIyNwSw3wVd08HCeUaVvJj5ozduWIkoov63A7Hj7NBaMJ0a1liFixJSTOwXHf8DEtyqtAsjRMvwpwIJUX3HVdZPqTDNhvTDnp0%2BATnmqHaiaQccjIn2SF%2F4uNxZwX4r08jhRpm2fW%2FSXE6Fj%2FTFDoDVy%2FK0RYMUhhr3CMAR%2FRm4Nw4iO0oHqVDiDEsHlMJzNZGzBn7O7R3f6gLKK5i1tqE1Pj1a6NBObSnyXjPk414YLrGdWwMOLSpb4GOqUBoJuvpX%2FRUufXFz7fwii5GvuXEHo%2B3kmLTlf8J2t4p9gkmtFiV%2BDXq11lKiWjVi%2FtSbQjEwUo5e3Y42XzAo2BhPNLA85vX0D8FZ02G8F6YCqt2hqyOWbcmAH0b8s%2BJMadcJ13cJIassanMOhaYtW4awWaQjdqporCYgE%2FoT27T1k9%2BT5RE52M4yGuBA1egDlR25KfmcRYwwvoMg9%2B7LuVU1o%2FoxoC&X-Amz-Signature=533c69ffbee33d728aec24151cd5206340b71a9cfaf5770cba5379f4cc3c1bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP6JRP5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiG2fErjwyU4C%2FWekt6Qg91mag6GFmI66BzF%2FWqfLTvwIgUBYuOwaxokjV8Eabd8hHKTUbTYDEXH3AHHsSbwoiTkoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKlO7pTIz%2BeicDz7NircA2g48ItzUjkJjXVG5ONQaVxM5LSBMZL%2BeAH50QusoNvidAKR9KdWtjW36GfOAw3rzdfv3KhWk1ZJlUhsVnYpao2BfQF%2B0nxa4s6wklMbhfRd7eKuVzBuT2HkPiBkyRkp5%2BSsEHs8SM93xMe6klVIv%2FGNBZCtt%2B3%2BfUfwM8oqRFJ79%2BFhBoACMX9bhO%2Fc7R7xq%2BgF43%2BZpJOUlnC9W2bv%2FMdmMnzZpCvjsQy4ciZPXciIfIdpJemmAIt1UtPkGBiv74YkApdhXrBNv1gGQQ4gRZWUM07yISR8VGmDxB9CvpQBaXXfHjgm1rn1KPkAHc5m8YyjxxSlwBJOMO7prkRIUfdXCm4677sJhUCKjxYPO1vH7Ytpe%2FMDPP5V3b5LOOLuryAIaOTfMX1gIyNwSw3wVd08HCeUaVvJj5ozduWIkoov63A7Hj7NBaMJ0a1liFixJSTOwXHf8DEtyqtAsjRMvwpwIJUX3HVdZPqTDNhvTDnp0%2BATnmqHaiaQccjIn2SF%2F4uNxZwX4r08jhRpm2fW%2FSXE6Fj%2FTFDoDVy%2FK0RYMUhhr3CMAR%2FRm4Nw4iO0oHqVDiDEsHlMJzNZGzBn7O7R3f6gLKK5i1tqE1Pj1a6NBObSnyXjPk414YLrGdWwMOLSpb4GOqUBoJuvpX%2FRUufXFz7fwii5GvuXEHo%2B3kmLTlf8J2t4p9gkmtFiV%2BDXq11lKiWjVi%2FtSbQjEwUo5e3Y42XzAo2BhPNLA85vX0D8FZ02G8F6YCqt2hqyOWbcmAH0b8s%2BJMadcJ13cJIassanMOhaYtW4awWaQjdqporCYgE%2FoT27T1k9%2BT5RE52M4yGuBA1egDlR25KfmcRYwwvoMg9%2B7LuVU1o%2FoxoC&X-Amz-Signature=808e2103c7ecd4d60ed32cb30f3815262d2de3c448e2cdab1cccb40061d3f321&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP6JRP5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiG2fErjwyU4C%2FWekt6Qg91mag6GFmI66BzF%2FWqfLTvwIgUBYuOwaxokjV8Eabd8hHKTUbTYDEXH3AHHsSbwoiTkoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKlO7pTIz%2BeicDz7NircA2g48ItzUjkJjXVG5ONQaVxM5LSBMZL%2BeAH50QusoNvidAKR9KdWtjW36GfOAw3rzdfv3KhWk1ZJlUhsVnYpao2BfQF%2B0nxa4s6wklMbhfRd7eKuVzBuT2HkPiBkyRkp5%2BSsEHs8SM93xMe6klVIv%2FGNBZCtt%2B3%2BfUfwM8oqRFJ79%2BFhBoACMX9bhO%2Fc7R7xq%2BgF43%2BZpJOUlnC9W2bv%2FMdmMnzZpCvjsQy4ciZPXciIfIdpJemmAIt1UtPkGBiv74YkApdhXrBNv1gGQQ4gRZWUM07yISR8VGmDxB9CvpQBaXXfHjgm1rn1KPkAHc5m8YyjxxSlwBJOMO7prkRIUfdXCm4677sJhUCKjxYPO1vH7Ytpe%2FMDPP5V3b5LOOLuryAIaOTfMX1gIyNwSw3wVd08HCeUaVvJj5ozduWIkoov63A7Hj7NBaMJ0a1liFixJSTOwXHf8DEtyqtAsjRMvwpwIJUX3HVdZPqTDNhvTDnp0%2BATnmqHaiaQccjIn2SF%2F4uNxZwX4r08jhRpm2fW%2FSXE6Fj%2FTFDoDVy%2FK0RYMUhhr3CMAR%2FRm4Nw4iO0oHqVDiDEsHlMJzNZGzBn7O7R3f6gLKK5i1tqE1Pj1a6NBObSnyXjPk414YLrGdWwMOLSpb4GOqUBoJuvpX%2FRUufXFz7fwii5GvuXEHo%2B3kmLTlf8J2t4p9gkmtFiV%2BDXq11lKiWjVi%2FtSbQjEwUo5e3Y42XzAo2BhPNLA85vX0D8FZ02G8F6YCqt2hqyOWbcmAH0b8s%2BJMadcJ13cJIassanMOhaYtW4awWaQjdqporCYgE%2FoT27T1k9%2BT5RE52M4yGuBA1egDlR25KfmcRYwwvoMg9%2B7LuVU1o%2FoxoC&X-Amz-Signature=e2d2b7e0c31b0f886aa1de8963e47589697be9ecc73f1cf67c2ec0c6b84e7056&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
