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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5JHY6L%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICGtTMcq3uwJJZz8xZ%2B5Q8XXCxbJGnXzM3JrdNyvSkh7AiEA2%2BXFV8J%2BKdz0NPujtlC0rUPgl5yLgBtPKKiw9KB73pEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLBsua1mT8k%2Br0guCrcA3veOI4hE4jDVV9Y6A61iUQ0oZMnLu2xp5y2vz2D6vyfi5hhZ%2FFiJ%2FOVcCZ8VGLlzjrd17GtNgkogkRGpb9vf2ydjeOFTsd47WX71RLuV5U2ebfQusZFwaycvZc46ptMmrFHmKNDqh7ySJKA6G0KM2zdVfNmTEH2m8zDmKRiPsssoU1DROh67XixbfPRualUuXhx5ZytjWcv4MvE0v5acbTQRtcOlpYThwxajWZc5V89bq2R2v2X5CEK%2FillfbflVzAoEO%2F7OsZbGE3wUt8BheSbvqehvtvmyjo0ahTgd2tMHGdW7cEaRD8%2F%2Bp7s72aqTOUDFSfIcmACukr6dwJMlxoPkRtzTQTRO3A7VoKgecEl5gqfO5GGybTeX4WCEnsnhloYRC73xArIQOx6O4xnXJtjwpY%2FEd6%2FyvzIC4xPCZ4HBem80%2BqIIvToNN1fC25ZW2q6Bcoq16JWmDlKtYU61HSDAt4z%2B3Hi9uOdnoG%2FwjPK%2FOfFNPEHbTdAsD4P1SfmapOkaMuR0CJvhR5VflEgqATE%2BpshXHRff9hM1UwDJoIxiAHiKQPEv6WIogdF88SrLiTXC%2FktgCW%2Bgdkjar7Suo0kiQDG03QPP1D44mvU1aADVQAyhzudg%2Fd7tAT%2BMI%2By%2Bs8GOqUB9wYVKYtqh%2BEB2ZGSzbLlvvfNIprtkBnaOU37SHBD05gxA1JaP1ctvfojyfMTaLZV9Ne6WxLqT650k7NxjHsTeY%2FmdGbzpzctFOi9uqwlgeI%2BjubONE5dYZiDTOBVz8%2F7XBga7QvPEftlOFTNSfbBr8BmSEFzZ33biWtGIuVdNXGN7Eq9E4k4J1kljZ4WP6qf%2BfExhDI4wgEyCcPbH2q9lgQSsI2l&X-Amz-Signature=c89402f7e7acf471710bdaa2548ccc755cb7d5bf00049494def8b276c281241c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5JHY6L%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICGtTMcq3uwJJZz8xZ%2B5Q8XXCxbJGnXzM3JrdNyvSkh7AiEA2%2BXFV8J%2BKdz0NPujtlC0rUPgl5yLgBtPKKiw9KB73pEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLBsua1mT8k%2Br0guCrcA3veOI4hE4jDVV9Y6A61iUQ0oZMnLu2xp5y2vz2D6vyfi5hhZ%2FFiJ%2FOVcCZ8VGLlzjrd17GtNgkogkRGpb9vf2ydjeOFTsd47WX71RLuV5U2ebfQusZFwaycvZc46ptMmrFHmKNDqh7ySJKA6G0KM2zdVfNmTEH2m8zDmKRiPsssoU1DROh67XixbfPRualUuXhx5ZytjWcv4MvE0v5acbTQRtcOlpYThwxajWZc5V89bq2R2v2X5CEK%2FillfbflVzAoEO%2F7OsZbGE3wUt8BheSbvqehvtvmyjo0ahTgd2tMHGdW7cEaRD8%2F%2Bp7s72aqTOUDFSfIcmACukr6dwJMlxoPkRtzTQTRO3A7VoKgecEl5gqfO5GGybTeX4WCEnsnhloYRC73xArIQOx6O4xnXJtjwpY%2FEd6%2FyvzIC4xPCZ4HBem80%2BqIIvToNN1fC25ZW2q6Bcoq16JWmDlKtYU61HSDAt4z%2B3Hi9uOdnoG%2FwjPK%2FOfFNPEHbTdAsD4P1SfmapOkaMuR0CJvhR5VflEgqATE%2BpshXHRff9hM1UwDJoIxiAHiKQPEv6WIogdF88SrLiTXC%2FktgCW%2Bgdkjar7Suo0kiQDG03QPP1D44mvU1aADVQAyhzudg%2Fd7tAT%2BMI%2By%2Bs8GOqUB9wYVKYtqh%2BEB2ZGSzbLlvvfNIprtkBnaOU37SHBD05gxA1JaP1ctvfojyfMTaLZV9Ne6WxLqT650k7NxjHsTeY%2FmdGbzpzctFOi9uqwlgeI%2BjubONE5dYZiDTOBVz8%2F7XBga7QvPEftlOFTNSfbBr8BmSEFzZ33biWtGIuVdNXGN7Eq9E4k4J1kljZ4WP6qf%2BfExhDI4wgEyCcPbH2q9lgQSsI2l&X-Amz-Signature=d5bd07c5fe8b01036ffb8d8dc32808315249ee228782de244e0b0610bcf3c63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5JHY6L%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICGtTMcq3uwJJZz8xZ%2B5Q8XXCxbJGnXzM3JrdNyvSkh7AiEA2%2BXFV8J%2BKdz0NPujtlC0rUPgl5yLgBtPKKiw9KB73pEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLBsua1mT8k%2Br0guCrcA3veOI4hE4jDVV9Y6A61iUQ0oZMnLu2xp5y2vz2D6vyfi5hhZ%2FFiJ%2FOVcCZ8VGLlzjrd17GtNgkogkRGpb9vf2ydjeOFTsd47WX71RLuV5U2ebfQusZFwaycvZc46ptMmrFHmKNDqh7ySJKA6G0KM2zdVfNmTEH2m8zDmKRiPsssoU1DROh67XixbfPRualUuXhx5ZytjWcv4MvE0v5acbTQRtcOlpYThwxajWZc5V89bq2R2v2X5CEK%2FillfbflVzAoEO%2F7OsZbGE3wUt8BheSbvqehvtvmyjo0ahTgd2tMHGdW7cEaRD8%2F%2Bp7s72aqTOUDFSfIcmACukr6dwJMlxoPkRtzTQTRO3A7VoKgecEl5gqfO5GGybTeX4WCEnsnhloYRC73xArIQOx6O4xnXJtjwpY%2FEd6%2FyvzIC4xPCZ4HBem80%2BqIIvToNN1fC25ZW2q6Bcoq16JWmDlKtYU61HSDAt4z%2B3Hi9uOdnoG%2FwjPK%2FOfFNPEHbTdAsD4P1SfmapOkaMuR0CJvhR5VflEgqATE%2BpshXHRff9hM1UwDJoIxiAHiKQPEv6WIogdF88SrLiTXC%2FktgCW%2Bgdkjar7Suo0kiQDG03QPP1D44mvU1aADVQAyhzudg%2Fd7tAT%2BMI%2By%2Bs8GOqUB9wYVKYtqh%2BEB2ZGSzbLlvvfNIprtkBnaOU37SHBD05gxA1JaP1ctvfojyfMTaLZV9Ne6WxLqT650k7NxjHsTeY%2FmdGbzpzctFOi9uqwlgeI%2BjubONE5dYZiDTOBVz8%2F7XBga7QvPEftlOFTNSfbBr8BmSEFzZ33biWtGIuVdNXGN7Eq9E4k4J1kljZ4WP6qf%2BfExhDI4wgEyCcPbH2q9lgQSsI2l&X-Amz-Signature=52c61e69b94eea0b84339ca569356b463dd948d608fb7e281b27d0eb84094fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5JHY6L%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICGtTMcq3uwJJZz8xZ%2B5Q8XXCxbJGnXzM3JrdNyvSkh7AiEA2%2BXFV8J%2BKdz0NPujtlC0rUPgl5yLgBtPKKiw9KB73pEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLBsua1mT8k%2Br0guCrcA3veOI4hE4jDVV9Y6A61iUQ0oZMnLu2xp5y2vz2D6vyfi5hhZ%2FFiJ%2FOVcCZ8VGLlzjrd17GtNgkogkRGpb9vf2ydjeOFTsd47WX71RLuV5U2ebfQusZFwaycvZc46ptMmrFHmKNDqh7ySJKA6G0KM2zdVfNmTEH2m8zDmKRiPsssoU1DROh67XixbfPRualUuXhx5ZytjWcv4MvE0v5acbTQRtcOlpYThwxajWZc5V89bq2R2v2X5CEK%2FillfbflVzAoEO%2F7OsZbGE3wUt8BheSbvqehvtvmyjo0ahTgd2tMHGdW7cEaRD8%2F%2Bp7s72aqTOUDFSfIcmACukr6dwJMlxoPkRtzTQTRO3A7VoKgecEl5gqfO5GGybTeX4WCEnsnhloYRC73xArIQOx6O4xnXJtjwpY%2FEd6%2FyvzIC4xPCZ4HBem80%2BqIIvToNN1fC25ZW2q6Bcoq16JWmDlKtYU61HSDAt4z%2B3Hi9uOdnoG%2FwjPK%2FOfFNPEHbTdAsD4P1SfmapOkaMuR0CJvhR5VflEgqATE%2BpshXHRff9hM1UwDJoIxiAHiKQPEv6WIogdF88SrLiTXC%2FktgCW%2Bgdkjar7Suo0kiQDG03QPP1D44mvU1aADVQAyhzudg%2Fd7tAT%2BMI%2By%2Bs8GOqUB9wYVKYtqh%2BEB2ZGSzbLlvvfNIprtkBnaOU37SHBD05gxA1JaP1ctvfojyfMTaLZV9Ne6WxLqT650k7NxjHsTeY%2FmdGbzpzctFOi9uqwlgeI%2BjubONE5dYZiDTOBVz8%2F7XBga7QvPEftlOFTNSfbBr8BmSEFzZ33biWtGIuVdNXGN7Eq9E4k4J1kljZ4WP6qf%2BfExhDI4wgEyCcPbH2q9lgQSsI2l&X-Amz-Signature=9ba3e56ada02ca44aefa138e866d0093d0f2b4de78f950ca1d585126bb42580e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5JHY6L%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICGtTMcq3uwJJZz8xZ%2B5Q8XXCxbJGnXzM3JrdNyvSkh7AiEA2%2BXFV8J%2BKdz0NPujtlC0rUPgl5yLgBtPKKiw9KB73pEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLBsua1mT8k%2Br0guCrcA3veOI4hE4jDVV9Y6A61iUQ0oZMnLu2xp5y2vz2D6vyfi5hhZ%2FFiJ%2FOVcCZ8VGLlzjrd17GtNgkogkRGpb9vf2ydjeOFTsd47WX71RLuV5U2ebfQusZFwaycvZc46ptMmrFHmKNDqh7ySJKA6G0KM2zdVfNmTEH2m8zDmKRiPsssoU1DROh67XixbfPRualUuXhx5ZytjWcv4MvE0v5acbTQRtcOlpYThwxajWZc5V89bq2R2v2X5CEK%2FillfbflVzAoEO%2F7OsZbGE3wUt8BheSbvqehvtvmyjo0ahTgd2tMHGdW7cEaRD8%2F%2Bp7s72aqTOUDFSfIcmACukr6dwJMlxoPkRtzTQTRO3A7VoKgecEl5gqfO5GGybTeX4WCEnsnhloYRC73xArIQOx6O4xnXJtjwpY%2FEd6%2FyvzIC4xPCZ4HBem80%2BqIIvToNN1fC25ZW2q6Bcoq16JWmDlKtYU61HSDAt4z%2B3Hi9uOdnoG%2FwjPK%2FOfFNPEHbTdAsD4P1SfmapOkaMuR0CJvhR5VflEgqATE%2BpshXHRff9hM1UwDJoIxiAHiKQPEv6WIogdF88SrLiTXC%2FktgCW%2Bgdkjar7Suo0kiQDG03QPP1D44mvU1aADVQAyhzudg%2Fd7tAT%2BMI%2By%2Bs8GOqUB9wYVKYtqh%2BEB2ZGSzbLlvvfNIprtkBnaOU37SHBD05gxA1JaP1ctvfojyfMTaLZV9Ne6WxLqT650k7NxjHsTeY%2FmdGbzpzctFOi9uqwlgeI%2BjubONE5dYZiDTOBVz8%2F7XBga7QvPEftlOFTNSfbBr8BmSEFzZ33biWtGIuVdNXGN7Eq9E4k4J1kljZ4WP6qf%2BfExhDI4wgEyCcPbH2q9lgQSsI2l&X-Amz-Signature=84c502b5702d2010682052dbc6d523b1e9645e2cd14aa957d463b1c56c26a0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5JHY6L%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICGtTMcq3uwJJZz8xZ%2B5Q8XXCxbJGnXzM3JrdNyvSkh7AiEA2%2BXFV8J%2BKdz0NPujtlC0rUPgl5yLgBtPKKiw9KB73pEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLBsua1mT8k%2Br0guCrcA3veOI4hE4jDVV9Y6A61iUQ0oZMnLu2xp5y2vz2D6vyfi5hhZ%2FFiJ%2FOVcCZ8VGLlzjrd17GtNgkogkRGpb9vf2ydjeOFTsd47WX71RLuV5U2ebfQusZFwaycvZc46ptMmrFHmKNDqh7ySJKA6G0KM2zdVfNmTEH2m8zDmKRiPsssoU1DROh67XixbfPRualUuXhx5ZytjWcv4MvE0v5acbTQRtcOlpYThwxajWZc5V89bq2R2v2X5CEK%2FillfbflVzAoEO%2F7OsZbGE3wUt8BheSbvqehvtvmyjo0ahTgd2tMHGdW7cEaRD8%2F%2Bp7s72aqTOUDFSfIcmACukr6dwJMlxoPkRtzTQTRO3A7VoKgecEl5gqfO5GGybTeX4WCEnsnhloYRC73xArIQOx6O4xnXJtjwpY%2FEd6%2FyvzIC4xPCZ4HBem80%2BqIIvToNN1fC25ZW2q6Bcoq16JWmDlKtYU61HSDAt4z%2B3Hi9uOdnoG%2FwjPK%2FOfFNPEHbTdAsD4P1SfmapOkaMuR0CJvhR5VflEgqATE%2BpshXHRff9hM1UwDJoIxiAHiKQPEv6WIogdF88SrLiTXC%2FktgCW%2Bgdkjar7Suo0kiQDG03QPP1D44mvU1aADVQAyhzudg%2Fd7tAT%2BMI%2By%2Bs8GOqUB9wYVKYtqh%2BEB2ZGSzbLlvvfNIprtkBnaOU37SHBD05gxA1JaP1ctvfojyfMTaLZV9Ne6WxLqT650k7NxjHsTeY%2FmdGbzpzctFOi9uqwlgeI%2BjubONE5dYZiDTOBVz8%2F7XBga7QvPEftlOFTNSfbBr8BmSEFzZ33biWtGIuVdNXGN7Eq9E4k4J1kljZ4WP6qf%2BfExhDI4wgEyCcPbH2q9lgQSsI2l&X-Amz-Signature=0a369d495b76d4cfac5af78bfeeb1ecee627762eca23b93ee41f7e24465ec185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5JHY6L%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICGtTMcq3uwJJZz8xZ%2B5Q8XXCxbJGnXzM3JrdNyvSkh7AiEA2%2BXFV8J%2BKdz0NPujtlC0rUPgl5yLgBtPKKiw9KB73pEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLBsua1mT8k%2Br0guCrcA3veOI4hE4jDVV9Y6A61iUQ0oZMnLu2xp5y2vz2D6vyfi5hhZ%2FFiJ%2FOVcCZ8VGLlzjrd17GtNgkogkRGpb9vf2ydjeOFTsd47WX71RLuV5U2ebfQusZFwaycvZc46ptMmrFHmKNDqh7ySJKA6G0KM2zdVfNmTEH2m8zDmKRiPsssoU1DROh67XixbfPRualUuXhx5ZytjWcv4MvE0v5acbTQRtcOlpYThwxajWZc5V89bq2R2v2X5CEK%2FillfbflVzAoEO%2F7OsZbGE3wUt8BheSbvqehvtvmyjo0ahTgd2tMHGdW7cEaRD8%2F%2Bp7s72aqTOUDFSfIcmACukr6dwJMlxoPkRtzTQTRO3A7VoKgecEl5gqfO5GGybTeX4WCEnsnhloYRC73xArIQOx6O4xnXJtjwpY%2FEd6%2FyvzIC4xPCZ4HBem80%2BqIIvToNN1fC25ZW2q6Bcoq16JWmDlKtYU61HSDAt4z%2B3Hi9uOdnoG%2FwjPK%2FOfFNPEHbTdAsD4P1SfmapOkaMuR0CJvhR5VflEgqATE%2BpshXHRff9hM1UwDJoIxiAHiKQPEv6WIogdF88SrLiTXC%2FktgCW%2Bgdkjar7Suo0kiQDG03QPP1D44mvU1aADVQAyhzudg%2Fd7tAT%2BMI%2By%2Bs8GOqUB9wYVKYtqh%2BEB2ZGSzbLlvvfNIprtkBnaOU37SHBD05gxA1JaP1ctvfojyfMTaLZV9Ne6WxLqT650k7NxjHsTeY%2FmdGbzpzctFOi9uqwlgeI%2BjubONE5dYZiDTOBVz8%2F7XBga7QvPEftlOFTNSfbBr8BmSEFzZ33biWtGIuVdNXGN7Eq9E4k4J1kljZ4WP6qf%2BfExhDI4wgEyCcPbH2q9lgQSsI2l&X-Amz-Signature=d6dc627f604a9da09b7891b73661b1f29370686a1bcf36ef3edd749ed56c0083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5JHY6L%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICGtTMcq3uwJJZz8xZ%2B5Q8XXCxbJGnXzM3JrdNyvSkh7AiEA2%2BXFV8J%2BKdz0NPujtlC0rUPgl5yLgBtPKKiw9KB73pEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLBsua1mT8k%2Br0guCrcA3veOI4hE4jDVV9Y6A61iUQ0oZMnLu2xp5y2vz2D6vyfi5hhZ%2FFiJ%2FOVcCZ8VGLlzjrd17GtNgkogkRGpb9vf2ydjeOFTsd47WX71RLuV5U2ebfQusZFwaycvZc46ptMmrFHmKNDqh7ySJKA6G0KM2zdVfNmTEH2m8zDmKRiPsssoU1DROh67XixbfPRualUuXhx5ZytjWcv4MvE0v5acbTQRtcOlpYThwxajWZc5V89bq2R2v2X5CEK%2FillfbflVzAoEO%2F7OsZbGE3wUt8BheSbvqehvtvmyjo0ahTgd2tMHGdW7cEaRD8%2F%2Bp7s72aqTOUDFSfIcmACukr6dwJMlxoPkRtzTQTRO3A7VoKgecEl5gqfO5GGybTeX4WCEnsnhloYRC73xArIQOx6O4xnXJtjwpY%2FEd6%2FyvzIC4xPCZ4HBem80%2BqIIvToNN1fC25ZW2q6Bcoq16JWmDlKtYU61HSDAt4z%2B3Hi9uOdnoG%2FwjPK%2FOfFNPEHbTdAsD4P1SfmapOkaMuR0CJvhR5VflEgqATE%2BpshXHRff9hM1UwDJoIxiAHiKQPEv6WIogdF88SrLiTXC%2FktgCW%2Bgdkjar7Suo0kiQDG03QPP1D44mvU1aADVQAyhzudg%2Fd7tAT%2BMI%2By%2Bs8GOqUB9wYVKYtqh%2BEB2ZGSzbLlvvfNIprtkBnaOU37SHBD05gxA1JaP1ctvfojyfMTaLZV9Ne6WxLqT650k7NxjHsTeY%2FmdGbzpzctFOi9uqwlgeI%2BjubONE5dYZiDTOBVz8%2F7XBga7QvPEftlOFTNSfbBr8BmSEFzZ33biWtGIuVdNXGN7Eq9E4k4J1kljZ4WP6qf%2BfExhDI4wgEyCcPbH2q9lgQSsI2l&X-Amz-Signature=d0540dd5830d7711dd88d5818d31d21fc4098b6ba8fb500edfc0c763efcd2038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
