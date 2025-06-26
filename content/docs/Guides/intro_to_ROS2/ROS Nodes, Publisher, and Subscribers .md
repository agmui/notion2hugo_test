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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEQU7J4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDhh7BZTmPZdJb2mAaWtkx77rRyfD6eo%2B9UA%2BW8%2FcOvVwIgdyNALNbqGkz7%2Fq%2BaVOAbrCbi0b3Uzz5gl3EsmbJoCl4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJexvC49FRxpTqsb0CrcA%2BahpIX5XJNatO%2FEfnNT7FKEkzotpiJ9piYxJNtA8Bbh4RjC4mhJoa3I6X9iQt7Hr7mKpsjykSseFSHEuYRecD5TRZyPRvqsKoI9yFFipoMQTYSQgL4Jdi9fG%2BCw0TBHXm466ekBeRK6UsMQfBSAW1D28ZoQWFDNdwx25RKDlSETr0BIJmWnIOSdusDyQ1R1JvDBRVhVmI4OQ3X0hi4MEYHk6WjFdmryn43t9KYcQtJaxbAY%2Bxdq5Q%2F%2BnGjdxC3TsqEMSxndYY1Z40HUG4WeHnyaZk%2BXX3ZHSP9iv1%2BjdR0H4UwrmMlu%2FNKJ56ilKFQGf%2BJGXKRATWtnelSSYL%2FqTz29TdKz0XUNlZGH6cKxSX3kGfVIooQNbPDoWK2kYSaBiTGFkDc6dedPK%2BVpW2u3JoodKoh71uM5bYzN7vc04TvR0%2FZsme628FOY1cxChXaaPtQYZeHmC9UryDRK0MhC7N9J%2BPnn8%2FAwf%2F4mkbg%2FQ4pcDlNwcps9gBae3pgjJGW2b%2BnglBPLV0YWP%2F2nCenvrX6ahMnwUGXd6P7LPtd3wH1EbUIszlUiFAB8oyzrrTnZQ8PfsgAiFAep3MvMmyPv0srZvsWH4JF%2F%2BOHGw2D1QbILp8V52bpsxz80%2BUkUMOCW9MIGOqUBnMLUhKWxAVqPHX8FuIUsD%2FF0J1VKypdNXNns8Z2RIM%2BK046FDsI9YpVTquKPBb1JMewwinsX0DTpOkC4zIHmxwKO3oFg3IYTFdQHipst6jzTPE8ci%2BDfhngEaxzkBUq8qP3EsDHJZGNzWvYUh1eEQbMjTRbL8Ca0m8E8gtbiFIg14TPyyo9aLFOIlJGlD5VcIxoPIFTbSqQTElOAjGcmtUJYlMWK&X-Amz-Signature=3585f15d7d9e9ed8555d075db35884a51fce1eb1de62a9be62c71738384d8d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEQU7J4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDhh7BZTmPZdJb2mAaWtkx77rRyfD6eo%2B9UA%2BW8%2FcOvVwIgdyNALNbqGkz7%2Fq%2BaVOAbrCbi0b3Uzz5gl3EsmbJoCl4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJexvC49FRxpTqsb0CrcA%2BahpIX5XJNatO%2FEfnNT7FKEkzotpiJ9piYxJNtA8Bbh4RjC4mhJoa3I6X9iQt7Hr7mKpsjykSseFSHEuYRecD5TRZyPRvqsKoI9yFFipoMQTYSQgL4Jdi9fG%2BCw0TBHXm466ekBeRK6UsMQfBSAW1D28ZoQWFDNdwx25RKDlSETr0BIJmWnIOSdusDyQ1R1JvDBRVhVmI4OQ3X0hi4MEYHk6WjFdmryn43t9KYcQtJaxbAY%2Bxdq5Q%2F%2BnGjdxC3TsqEMSxndYY1Z40HUG4WeHnyaZk%2BXX3ZHSP9iv1%2BjdR0H4UwrmMlu%2FNKJ56ilKFQGf%2BJGXKRATWtnelSSYL%2FqTz29TdKz0XUNlZGH6cKxSX3kGfVIooQNbPDoWK2kYSaBiTGFkDc6dedPK%2BVpW2u3JoodKoh71uM5bYzN7vc04TvR0%2FZsme628FOY1cxChXaaPtQYZeHmC9UryDRK0MhC7N9J%2BPnn8%2FAwf%2F4mkbg%2FQ4pcDlNwcps9gBae3pgjJGW2b%2BnglBPLV0YWP%2F2nCenvrX6ahMnwUGXd6P7LPtd3wH1EbUIszlUiFAB8oyzrrTnZQ8PfsgAiFAep3MvMmyPv0srZvsWH4JF%2F%2BOHGw2D1QbILp8V52bpsxz80%2BUkUMOCW9MIGOqUBnMLUhKWxAVqPHX8FuIUsD%2FF0J1VKypdNXNns8Z2RIM%2BK046FDsI9YpVTquKPBb1JMewwinsX0DTpOkC4zIHmxwKO3oFg3IYTFdQHipst6jzTPE8ci%2BDfhngEaxzkBUq8qP3EsDHJZGNzWvYUh1eEQbMjTRbL8Ca0m8E8gtbiFIg14TPyyo9aLFOIlJGlD5VcIxoPIFTbSqQTElOAjGcmtUJYlMWK&X-Amz-Signature=3d4ffa5fb66585c5a9ebb42e3b3a20e35922c419cdd3965051219f20cc15482f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEQU7J4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDhh7BZTmPZdJb2mAaWtkx77rRyfD6eo%2B9UA%2BW8%2FcOvVwIgdyNALNbqGkz7%2Fq%2BaVOAbrCbi0b3Uzz5gl3EsmbJoCl4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJexvC49FRxpTqsb0CrcA%2BahpIX5XJNatO%2FEfnNT7FKEkzotpiJ9piYxJNtA8Bbh4RjC4mhJoa3I6X9iQt7Hr7mKpsjykSseFSHEuYRecD5TRZyPRvqsKoI9yFFipoMQTYSQgL4Jdi9fG%2BCw0TBHXm466ekBeRK6UsMQfBSAW1D28ZoQWFDNdwx25RKDlSETr0BIJmWnIOSdusDyQ1R1JvDBRVhVmI4OQ3X0hi4MEYHk6WjFdmryn43t9KYcQtJaxbAY%2Bxdq5Q%2F%2BnGjdxC3TsqEMSxndYY1Z40HUG4WeHnyaZk%2BXX3ZHSP9iv1%2BjdR0H4UwrmMlu%2FNKJ56ilKFQGf%2BJGXKRATWtnelSSYL%2FqTz29TdKz0XUNlZGH6cKxSX3kGfVIooQNbPDoWK2kYSaBiTGFkDc6dedPK%2BVpW2u3JoodKoh71uM5bYzN7vc04TvR0%2FZsme628FOY1cxChXaaPtQYZeHmC9UryDRK0MhC7N9J%2BPnn8%2FAwf%2F4mkbg%2FQ4pcDlNwcps9gBae3pgjJGW2b%2BnglBPLV0YWP%2F2nCenvrX6ahMnwUGXd6P7LPtd3wH1EbUIszlUiFAB8oyzrrTnZQ8PfsgAiFAep3MvMmyPv0srZvsWH4JF%2F%2BOHGw2D1QbILp8V52bpsxz80%2BUkUMOCW9MIGOqUBnMLUhKWxAVqPHX8FuIUsD%2FF0J1VKypdNXNns8Z2RIM%2BK046FDsI9YpVTquKPBb1JMewwinsX0DTpOkC4zIHmxwKO3oFg3IYTFdQHipst6jzTPE8ci%2BDfhngEaxzkBUq8qP3EsDHJZGNzWvYUh1eEQbMjTRbL8Ca0m8E8gtbiFIg14TPyyo9aLFOIlJGlD5VcIxoPIFTbSqQTElOAjGcmtUJYlMWK&X-Amz-Signature=6b70c6d634abbf3c25cd8d544edc7e9b8ad07673181a97237ec00f39c13e264a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEQU7J4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDhh7BZTmPZdJb2mAaWtkx77rRyfD6eo%2B9UA%2BW8%2FcOvVwIgdyNALNbqGkz7%2Fq%2BaVOAbrCbi0b3Uzz5gl3EsmbJoCl4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJexvC49FRxpTqsb0CrcA%2BahpIX5XJNatO%2FEfnNT7FKEkzotpiJ9piYxJNtA8Bbh4RjC4mhJoa3I6X9iQt7Hr7mKpsjykSseFSHEuYRecD5TRZyPRvqsKoI9yFFipoMQTYSQgL4Jdi9fG%2BCw0TBHXm466ekBeRK6UsMQfBSAW1D28ZoQWFDNdwx25RKDlSETr0BIJmWnIOSdusDyQ1R1JvDBRVhVmI4OQ3X0hi4MEYHk6WjFdmryn43t9KYcQtJaxbAY%2Bxdq5Q%2F%2BnGjdxC3TsqEMSxndYY1Z40HUG4WeHnyaZk%2BXX3ZHSP9iv1%2BjdR0H4UwrmMlu%2FNKJ56ilKFQGf%2BJGXKRATWtnelSSYL%2FqTz29TdKz0XUNlZGH6cKxSX3kGfVIooQNbPDoWK2kYSaBiTGFkDc6dedPK%2BVpW2u3JoodKoh71uM5bYzN7vc04TvR0%2FZsme628FOY1cxChXaaPtQYZeHmC9UryDRK0MhC7N9J%2BPnn8%2FAwf%2F4mkbg%2FQ4pcDlNwcps9gBae3pgjJGW2b%2BnglBPLV0YWP%2F2nCenvrX6ahMnwUGXd6P7LPtd3wH1EbUIszlUiFAB8oyzrrTnZQ8PfsgAiFAep3MvMmyPv0srZvsWH4JF%2F%2BOHGw2D1QbILp8V52bpsxz80%2BUkUMOCW9MIGOqUBnMLUhKWxAVqPHX8FuIUsD%2FF0J1VKypdNXNns8Z2RIM%2BK046FDsI9YpVTquKPBb1JMewwinsX0DTpOkC4zIHmxwKO3oFg3IYTFdQHipst6jzTPE8ci%2BDfhngEaxzkBUq8qP3EsDHJZGNzWvYUh1eEQbMjTRbL8Ca0m8E8gtbiFIg14TPyyo9aLFOIlJGlD5VcIxoPIFTbSqQTElOAjGcmtUJYlMWK&X-Amz-Signature=5e9f8ed6f66b1d94b9583d74901e0a32301f5dfac12932a5be7d045e790894d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEQU7J4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDhh7BZTmPZdJb2mAaWtkx77rRyfD6eo%2B9UA%2BW8%2FcOvVwIgdyNALNbqGkz7%2Fq%2BaVOAbrCbi0b3Uzz5gl3EsmbJoCl4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJexvC49FRxpTqsb0CrcA%2BahpIX5XJNatO%2FEfnNT7FKEkzotpiJ9piYxJNtA8Bbh4RjC4mhJoa3I6X9iQt7Hr7mKpsjykSseFSHEuYRecD5TRZyPRvqsKoI9yFFipoMQTYSQgL4Jdi9fG%2BCw0TBHXm466ekBeRK6UsMQfBSAW1D28ZoQWFDNdwx25RKDlSETr0BIJmWnIOSdusDyQ1R1JvDBRVhVmI4OQ3X0hi4MEYHk6WjFdmryn43t9KYcQtJaxbAY%2Bxdq5Q%2F%2BnGjdxC3TsqEMSxndYY1Z40HUG4WeHnyaZk%2BXX3ZHSP9iv1%2BjdR0H4UwrmMlu%2FNKJ56ilKFQGf%2BJGXKRATWtnelSSYL%2FqTz29TdKz0XUNlZGH6cKxSX3kGfVIooQNbPDoWK2kYSaBiTGFkDc6dedPK%2BVpW2u3JoodKoh71uM5bYzN7vc04TvR0%2FZsme628FOY1cxChXaaPtQYZeHmC9UryDRK0MhC7N9J%2BPnn8%2FAwf%2F4mkbg%2FQ4pcDlNwcps9gBae3pgjJGW2b%2BnglBPLV0YWP%2F2nCenvrX6ahMnwUGXd6P7LPtd3wH1EbUIszlUiFAB8oyzrrTnZQ8PfsgAiFAep3MvMmyPv0srZvsWH4JF%2F%2BOHGw2D1QbILp8V52bpsxz80%2BUkUMOCW9MIGOqUBnMLUhKWxAVqPHX8FuIUsD%2FF0J1VKypdNXNns8Z2RIM%2BK046FDsI9YpVTquKPBb1JMewwinsX0DTpOkC4zIHmxwKO3oFg3IYTFdQHipst6jzTPE8ci%2BDfhngEaxzkBUq8qP3EsDHJZGNzWvYUh1eEQbMjTRbL8Ca0m8E8gtbiFIg14TPyyo9aLFOIlJGlD5VcIxoPIFTbSqQTElOAjGcmtUJYlMWK&X-Amz-Signature=44eb5035d44e6b20634139143f6e560dcacbd443a7b3e8f1cac0adca914aeb30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEQU7J4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDhh7BZTmPZdJb2mAaWtkx77rRyfD6eo%2B9UA%2BW8%2FcOvVwIgdyNALNbqGkz7%2Fq%2BaVOAbrCbi0b3Uzz5gl3EsmbJoCl4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJexvC49FRxpTqsb0CrcA%2BahpIX5XJNatO%2FEfnNT7FKEkzotpiJ9piYxJNtA8Bbh4RjC4mhJoa3I6X9iQt7Hr7mKpsjykSseFSHEuYRecD5TRZyPRvqsKoI9yFFipoMQTYSQgL4Jdi9fG%2BCw0TBHXm466ekBeRK6UsMQfBSAW1D28ZoQWFDNdwx25RKDlSETr0BIJmWnIOSdusDyQ1R1JvDBRVhVmI4OQ3X0hi4MEYHk6WjFdmryn43t9KYcQtJaxbAY%2Bxdq5Q%2F%2BnGjdxC3TsqEMSxndYY1Z40HUG4WeHnyaZk%2BXX3ZHSP9iv1%2BjdR0H4UwrmMlu%2FNKJ56ilKFQGf%2BJGXKRATWtnelSSYL%2FqTz29TdKz0XUNlZGH6cKxSX3kGfVIooQNbPDoWK2kYSaBiTGFkDc6dedPK%2BVpW2u3JoodKoh71uM5bYzN7vc04TvR0%2FZsme628FOY1cxChXaaPtQYZeHmC9UryDRK0MhC7N9J%2BPnn8%2FAwf%2F4mkbg%2FQ4pcDlNwcps9gBae3pgjJGW2b%2BnglBPLV0YWP%2F2nCenvrX6ahMnwUGXd6P7LPtd3wH1EbUIszlUiFAB8oyzrrTnZQ8PfsgAiFAep3MvMmyPv0srZvsWH4JF%2F%2BOHGw2D1QbILp8V52bpsxz80%2BUkUMOCW9MIGOqUBnMLUhKWxAVqPHX8FuIUsD%2FF0J1VKypdNXNns8Z2RIM%2BK046FDsI9YpVTquKPBb1JMewwinsX0DTpOkC4zIHmxwKO3oFg3IYTFdQHipst6jzTPE8ci%2BDfhngEaxzkBUq8qP3EsDHJZGNzWvYUh1eEQbMjTRbL8Ca0m8E8gtbiFIg14TPyyo9aLFOIlJGlD5VcIxoPIFTbSqQTElOAjGcmtUJYlMWK&X-Amz-Signature=81bb96089259c7f00516782bdc1951b28c43f26316346de9cfb52910fe0eef01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEQU7J4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDhh7BZTmPZdJb2mAaWtkx77rRyfD6eo%2B9UA%2BW8%2FcOvVwIgdyNALNbqGkz7%2Fq%2BaVOAbrCbi0b3Uzz5gl3EsmbJoCl4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJexvC49FRxpTqsb0CrcA%2BahpIX5XJNatO%2FEfnNT7FKEkzotpiJ9piYxJNtA8Bbh4RjC4mhJoa3I6X9iQt7Hr7mKpsjykSseFSHEuYRecD5TRZyPRvqsKoI9yFFipoMQTYSQgL4Jdi9fG%2BCw0TBHXm466ekBeRK6UsMQfBSAW1D28ZoQWFDNdwx25RKDlSETr0BIJmWnIOSdusDyQ1R1JvDBRVhVmI4OQ3X0hi4MEYHk6WjFdmryn43t9KYcQtJaxbAY%2Bxdq5Q%2F%2BnGjdxC3TsqEMSxndYY1Z40HUG4WeHnyaZk%2BXX3ZHSP9iv1%2BjdR0H4UwrmMlu%2FNKJ56ilKFQGf%2BJGXKRATWtnelSSYL%2FqTz29TdKz0XUNlZGH6cKxSX3kGfVIooQNbPDoWK2kYSaBiTGFkDc6dedPK%2BVpW2u3JoodKoh71uM5bYzN7vc04TvR0%2FZsme628FOY1cxChXaaPtQYZeHmC9UryDRK0MhC7N9J%2BPnn8%2FAwf%2F4mkbg%2FQ4pcDlNwcps9gBae3pgjJGW2b%2BnglBPLV0YWP%2F2nCenvrX6ahMnwUGXd6P7LPtd3wH1EbUIszlUiFAB8oyzrrTnZQ8PfsgAiFAep3MvMmyPv0srZvsWH4JF%2F%2BOHGw2D1QbILp8V52bpsxz80%2BUkUMOCW9MIGOqUBnMLUhKWxAVqPHX8FuIUsD%2FF0J1VKypdNXNns8Z2RIM%2BK046FDsI9YpVTquKPBb1JMewwinsX0DTpOkC4zIHmxwKO3oFg3IYTFdQHipst6jzTPE8ci%2BDfhngEaxzkBUq8qP3EsDHJZGNzWvYUh1eEQbMjTRbL8Ca0m8E8gtbiFIg14TPyyo9aLFOIlJGlD5VcIxoPIFTbSqQTElOAjGcmtUJYlMWK&X-Amz-Signature=fbb78ddcec8a22261470eed50228773183a71a7c9fae2546244dbd3ed7ee3817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEQU7J4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDhh7BZTmPZdJb2mAaWtkx77rRyfD6eo%2B9UA%2BW8%2FcOvVwIgdyNALNbqGkz7%2Fq%2BaVOAbrCbi0b3Uzz5gl3EsmbJoCl4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJexvC49FRxpTqsb0CrcA%2BahpIX5XJNatO%2FEfnNT7FKEkzotpiJ9piYxJNtA8Bbh4RjC4mhJoa3I6X9iQt7Hr7mKpsjykSseFSHEuYRecD5TRZyPRvqsKoI9yFFipoMQTYSQgL4Jdi9fG%2BCw0TBHXm466ekBeRK6UsMQfBSAW1D28ZoQWFDNdwx25RKDlSETr0BIJmWnIOSdusDyQ1R1JvDBRVhVmI4OQ3X0hi4MEYHk6WjFdmryn43t9KYcQtJaxbAY%2Bxdq5Q%2F%2BnGjdxC3TsqEMSxndYY1Z40HUG4WeHnyaZk%2BXX3ZHSP9iv1%2BjdR0H4UwrmMlu%2FNKJ56ilKFQGf%2BJGXKRATWtnelSSYL%2FqTz29TdKz0XUNlZGH6cKxSX3kGfVIooQNbPDoWK2kYSaBiTGFkDc6dedPK%2BVpW2u3JoodKoh71uM5bYzN7vc04TvR0%2FZsme628FOY1cxChXaaPtQYZeHmC9UryDRK0MhC7N9J%2BPnn8%2FAwf%2F4mkbg%2FQ4pcDlNwcps9gBae3pgjJGW2b%2BnglBPLV0YWP%2F2nCenvrX6ahMnwUGXd6P7LPtd3wH1EbUIszlUiFAB8oyzrrTnZQ8PfsgAiFAep3MvMmyPv0srZvsWH4JF%2F%2BOHGw2D1QbILp8V52bpsxz80%2BUkUMOCW9MIGOqUBnMLUhKWxAVqPHX8FuIUsD%2FF0J1VKypdNXNns8Z2RIM%2BK046FDsI9YpVTquKPBb1JMewwinsX0DTpOkC4zIHmxwKO3oFg3IYTFdQHipst6jzTPE8ci%2BDfhngEaxzkBUq8qP3EsDHJZGNzWvYUh1eEQbMjTRbL8Ca0m8E8gtbiFIg14TPyyo9aLFOIlJGlD5VcIxoPIFTbSqQTElOAjGcmtUJYlMWK&X-Amz-Signature=2cb044fb42fdef02716d07122dd01c91dccf6698f2eafb63a28975ad2cb8f232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
