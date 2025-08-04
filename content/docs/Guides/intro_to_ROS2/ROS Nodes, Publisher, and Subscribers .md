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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDJ23O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfRY1xSXfJ9n4wSzR58prCtX3rhUcfwqD76G7ewnUOUgIhAJ7pn%2BmHPSBHlMCX5JFJyhDxv69DWHwvXWwi4ScvFrjAKv8DCEAQABoMNjM3NDIzMTgzODA1IgyimaMw2kWozSbwVZsq3APCYEF33H372YwjzXYL23X%2BIz7Nak%2FFbHyWcarQlhV6Fqi8N%2F3g5TgkJJIqH9a1xbMhLYZAGewlc2pbiWTYle6IchTvdN8RJHPrj35cRxgV0L0i243rTfzyeTjF0ybb5cVn7KsAqFf8XfnM4mYjlxQd07XMIkI1H%2FQ%2BBcmgpWIgWfDCBcnZCGijeL7vL4BeFf1IhEGBIcphhh5jsqqZCwoonm5fhKHk3up%2FjMr7RlVOPvHx1ilSE%2FlUUMq3qH3Jak0i1o2gKPm8W6HxYeLIuDZbP%2FlxwikwTFYItyK41v618LUndXM0dcgS9hQcxTCSWCVTjbi1IZvhJBCN2n1h0dnxGbyXhi%2FtWvd870Z%2FFGDeWv7Y738uVZORJ0j9JmyuHpiqZJPJ1O4Rp6N6ueId2pR5OdzO7evBD7e9w04AficAqBuu8jBte0QRI2L47Jp9JEuUSt6Vja0WXm3BxTrgW5yjHxTScnMycEJDsrYuVRJmC5BhjrfPd2cvlIsu9sXslSQLZhsLO3QZrFe%2FCalPfdk3wmmFa%2BBmc5GR37gxmCILNnMnAausw2dnRwC6uXtY4LK0woIvikDUlYs4nHCtRegGMYvS0ySwLr2JO3LMf5P6NsDC%2BGh0VjZK05lQ3TDHuMHEBjqkAf3uwGKeH%2FCIyRf3zRaKFSwKM7%2F7ODhTO3sW8KSvZeEqzUDsWByo%2FinwQKrUKEEbYVujUU%2FQO28Y%2F46oyQQiWukmylTHn3dT4wKkk5KIhJXwpouDeTQ0bZyV%2FhMhx3CX4Tk%2F%2BsErzxR49RqnszeWrLAqBS104YHW224l6YByBpVGgwwRk16zD8T8O%2BnqV78Ovm1Ey%2FTfVOop53nYZtWIXdA3YJOU&X-Amz-Signature=58e65a639a2b2ad91793d17a5e939714b4b59e95841978b3bb3c4ff1f4ccc504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDJ23O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfRY1xSXfJ9n4wSzR58prCtX3rhUcfwqD76G7ewnUOUgIhAJ7pn%2BmHPSBHlMCX5JFJyhDxv69DWHwvXWwi4ScvFrjAKv8DCEAQABoMNjM3NDIzMTgzODA1IgyimaMw2kWozSbwVZsq3APCYEF33H372YwjzXYL23X%2BIz7Nak%2FFbHyWcarQlhV6Fqi8N%2F3g5TgkJJIqH9a1xbMhLYZAGewlc2pbiWTYle6IchTvdN8RJHPrj35cRxgV0L0i243rTfzyeTjF0ybb5cVn7KsAqFf8XfnM4mYjlxQd07XMIkI1H%2FQ%2BBcmgpWIgWfDCBcnZCGijeL7vL4BeFf1IhEGBIcphhh5jsqqZCwoonm5fhKHk3up%2FjMr7RlVOPvHx1ilSE%2FlUUMq3qH3Jak0i1o2gKPm8W6HxYeLIuDZbP%2FlxwikwTFYItyK41v618LUndXM0dcgS9hQcxTCSWCVTjbi1IZvhJBCN2n1h0dnxGbyXhi%2FtWvd870Z%2FFGDeWv7Y738uVZORJ0j9JmyuHpiqZJPJ1O4Rp6N6ueId2pR5OdzO7evBD7e9w04AficAqBuu8jBte0QRI2L47Jp9JEuUSt6Vja0WXm3BxTrgW5yjHxTScnMycEJDsrYuVRJmC5BhjrfPd2cvlIsu9sXslSQLZhsLO3QZrFe%2FCalPfdk3wmmFa%2BBmc5GR37gxmCILNnMnAausw2dnRwC6uXtY4LK0woIvikDUlYs4nHCtRegGMYvS0ySwLr2JO3LMf5P6NsDC%2BGh0VjZK05lQ3TDHuMHEBjqkAf3uwGKeH%2FCIyRf3zRaKFSwKM7%2F7ODhTO3sW8KSvZeEqzUDsWByo%2FinwQKrUKEEbYVujUU%2FQO28Y%2F46oyQQiWukmylTHn3dT4wKkk5KIhJXwpouDeTQ0bZyV%2FhMhx3CX4Tk%2F%2BsErzxR49RqnszeWrLAqBS104YHW224l6YByBpVGgwwRk16zD8T8O%2BnqV78Ovm1Ey%2FTfVOop53nYZtWIXdA3YJOU&X-Amz-Signature=8b67c3e25ea91909e11cf07288648a88924ee27c12db3aba0f83f3e24992d174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDJ23O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfRY1xSXfJ9n4wSzR58prCtX3rhUcfwqD76G7ewnUOUgIhAJ7pn%2BmHPSBHlMCX5JFJyhDxv69DWHwvXWwi4ScvFrjAKv8DCEAQABoMNjM3NDIzMTgzODA1IgyimaMw2kWozSbwVZsq3APCYEF33H372YwjzXYL23X%2BIz7Nak%2FFbHyWcarQlhV6Fqi8N%2F3g5TgkJJIqH9a1xbMhLYZAGewlc2pbiWTYle6IchTvdN8RJHPrj35cRxgV0L0i243rTfzyeTjF0ybb5cVn7KsAqFf8XfnM4mYjlxQd07XMIkI1H%2FQ%2BBcmgpWIgWfDCBcnZCGijeL7vL4BeFf1IhEGBIcphhh5jsqqZCwoonm5fhKHk3up%2FjMr7RlVOPvHx1ilSE%2FlUUMq3qH3Jak0i1o2gKPm8W6HxYeLIuDZbP%2FlxwikwTFYItyK41v618LUndXM0dcgS9hQcxTCSWCVTjbi1IZvhJBCN2n1h0dnxGbyXhi%2FtWvd870Z%2FFGDeWv7Y738uVZORJ0j9JmyuHpiqZJPJ1O4Rp6N6ueId2pR5OdzO7evBD7e9w04AficAqBuu8jBte0QRI2L47Jp9JEuUSt6Vja0WXm3BxTrgW5yjHxTScnMycEJDsrYuVRJmC5BhjrfPd2cvlIsu9sXslSQLZhsLO3QZrFe%2FCalPfdk3wmmFa%2BBmc5GR37gxmCILNnMnAausw2dnRwC6uXtY4LK0woIvikDUlYs4nHCtRegGMYvS0ySwLr2JO3LMf5P6NsDC%2BGh0VjZK05lQ3TDHuMHEBjqkAf3uwGKeH%2FCIyRf3zRaKFSwKM7%2F7ODhTO3sW8KSvZeEqzUDsWByo%2FinwQKrUKEEbYVujUU%2FQO28Y%2F46oyQQiWukmylTHn3dT4wKkk5KIhJXwpouDeTQ0bZyV%2FhMhx3CX4Tk%2F%2BsErzxR49RqnszeWrLAqBS104YHW224l6YByBpVGgwwRk16zD8T8O%2BnqV78Ovm1Ey%2FTfVOop53nYZtWIXdA3YJOU&X-Amz-Signature=55c4647377bf0d6c561252136c4e7466d46297e47e3902e65358ec6bd0e61eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDJ23O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfRY1xSXfJ9n4wSzR58prCtX3rhUcfwqD76G7ewnUOUgIhAJ7pn%2BmHPSBHlMCX5JFJyhDxv69DWHwvXWwi4ScvFrjAKv8DCEAQABoMNjM3NDIzMTgzODA1IgyimaMw2kWozSbwVZsq3APCYEF33H372YwjzXYL23X%2BIz7Nak%2FFbHyWcarQlhV6Fqi8N%2F3g5TgkJJIqH9a1xbMhLYZAGewlc2pbiWTYle6IchTvdN8RJHPrj35cRxgV0L0i243rTfzyeTjF0ybb5cVn7KsAqFf8XfnM4mYjlxQd07XMIkI1H%2FQ%2BBcmgpWIgWfDCBcnZCGijeL7vL4BeFf1IhEGBIcphhh5jsqqZCwoonm5fhKHk3up%2FjMr7RlVOPvHx1ilSE%2FlUUMq3qH3Jak0i1o2gKPm8W6HxYeLIuDZbP%2FlxwikwTFYItyK41v618LUndXM0dcgS9hQcxTCSWCVTjbi1IZvhJBCN2n1h0dnxGbyXhi%2FtWvd870Z%2FFGDeWv7Y738uVZORJ0j9JmyuHpiqZJPJ1O4Rp6N6ueId2pR5OdzO7evBD7e9w04AficAqBuu8jBte0QRI2L47Jp9JEuUSt6Vja0WXm3BxTrgW5yjHxTScnMycEJDsrYuVRJmC5BhjrfPd2cvlIsu9sXslSQLZhsLO3QZrFe%2FCalPfdk3wmmFa%2BBmc5GR37gxmCILNnMnAausw2dnRwC6uXtY4LK0woIvikDUlYs4nHCtRegGMYvS0ySwLr2JO3LMf5P6NsDC%2BGh0VjZK05lQ3TDHuMHEBjqkAf3uwGKeH%2FCIyRf3zRaKFSwKM7%2F7ODhTO3sW8KSvZeEqzUDsWByo%2FinwQKrUKEEbYVujUU%2FQO28Y%2F46oyQQiWukmylTHn3dT4wKkk5KIhJXwpouDeTQ0bZyV%2FhMhx3CX4Tk%2F%2BsErzxR49RqnszeWrLAqBS104YHW224l6YByBpVGgwwRk16zD8T8O%2BnqV78Ovm1Ey%2FTfVOop53nYZtWIXdA3YJOU&X-Amz-Signature=1bf62513bbb22d74bfc5be937137bf82e9cd29b0eb3e9b2883b010bc42076e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDJ23O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfRY1xSXfJ9n4wSzR58prCtX3rhUcfwqD76G7ewnUOUgIhAJ7pn%2BmHPSBHlMCX5JFJyhDxv69DWHwvXWwi4ScvFrjAKv8DCEAQABoMNjM3NDIzMTgzODA1IgyimaMw2kWozSbwVZsq3APCYEF33H372YwjzXYL23X%2BIz7Nak%2FFbHyWcarQlhV6Fqi8N%2F3g5TgkJJIqH9a1xbMhLYZAGewlc2pbiWTYle6IchTvdN8RJHPrj35cRxgV0L0i243rTfzyeTjF0ybb5cVn7KsAqFf8XfnM4mYjlxQd07XMIkI1H%2FQ%2BBcmgpWIgWfDCBcnZCGijeL7vL4BeFf1IhEGBIcphhh5jsqqZCwoonm5fhKHk3up%2FjMr7RlVOPvHx1ilSE%2FlUUMq3qH3Jak0i1o2gKPm8W6HxYeLIuDZbP%2FlxwikwTFYItyK41v618LUndXM0dcgS9hQcxTCSWCVTjbi1IZvhJBCN2n1h0dnxGbyXhi%2FtWvd870Z%2FFGDeWv7Y738uVZORJ0j9JmyuHpiqZJPJ1O4Rp6N6ueId2pR5OdzO7evBD7e9w04AficAqBuu8jBte0QRI2L47Jp9JEuUSt6Vja0WXm3BxTrgW5yjHxTScnMycEJDsrYuVRJmC5BhjrfPd2cvlIsu9sXslSQLZhsLO3QZrFe%2FCalPfdk3wmmFa%2BBmc5GR37gxmCILNnMnAausw2dnRwC6uXtY4LK0woIvikDUlYs4nHCtRegGMYvS0ySwLr2JO3LMf5P6NsDC%2BGh0VjZK05lQ3TDHuMHEBjqkAf3uwGKeH%2FCIyRf3zRaKFSwKM7%2F7ODhTO3sW8KSvZeEqzUDsWByo%2FinwQKrUKEEbYVujUU%2FQO28Y%2F46oyQQiWukmylTHn3dT4wKkk5KIhJXwpouDeTQ0bZyV%2FhMhx3CX4Tk%2F%2BsErzxR49RqnszeWrLAqBS104YHW224l6YByBpVGgwwRk16zD8T8O%2BnqV78Ovm1Ey%2FTfVOop53nYZtWIXdA3YJOU&X-Amz-Signature=550599235407131260061ff430cc45888601b2fe16e84a771015c03373f905af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDJ23O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfRY1xSXfJ9n4wSzR58prCtX3rhUcfwqD76G7ewnUOUgIhAJ7pn%2BmHPSBHlMCX5JFJyhDxv69DWHwvXWwi4ScvFrjAKv8DCEAQABoMNjM3NDIzMTgzODA1IgyimaMw2kWozSbwVZsq3APCYEF33H372YwjzXYL23X%2BIz7Nak%2FFbHyWcarQlhV6Fqi8N%2F3g5TgkJJIqH9a1xbMhLYZAGewlc2pbiWTYle6IchTvdN8RJHPrj35cRxgV0L0i243rTfzyeTjF0ybb5cVn7KsAqFf8XfnM4mYjlxQd07XMIkI1H%2FQ%2BBcmgpWIgWfDCBcnZCGijeL7vL4BeFf1IhEGBIcphhh5jsqqZCwoonm5fhKHk3up%2FjMr7RlVOPvHx1ilSE%2FlUUMq3qH3Jak0i1o2gKPm8W6HxYeLIuDZbP%2FlxwikwTFYItyK41v618LUndXM0dcgS9hQcxTCSWCVTjbi1IZvhJBCN2n1h0dnxGbyXhi%2FtWvd870Z%2FFGDeWv7Y738uVZORJ0j9JmyuHpiqZJPJ1O4Rp6N6ueId2pR5OdzO7evBD7e9w04AficAqBuu8jBte0QRI2L47Jp9JEuUSt6Vja0WXm3BxTrgW5yjHxTScnMycEJDsrYuVRJmC5BhjrfPd2cvlIsu9sXslSQLZhsLO3QZrFe%2FCalPfdk3wmmFa%2BBmc5GR37gxmCILNnMnAausw2dnRwC6uXtY4LK0woIvikDUlYs4nHCtRegGMYvS0ySwLr2JO3LMf5P6NsDC%2BGh0VjZK05lQ3TDHuMHEBjqkAf3uwGKeH%2FCIyRf3zRaKFSwKM7%2F7ODhTO3sW8KSvZeEqzUDsWByo%2FinwQKrUKEEbYVujUU%2FQO28Y%2F46oyQQiWukmylTHn3dT4wKkk5KIhJXwpouDeTQ0bZyV%2FhMhx3CX4Tk%2F%2BsErzxR49RqnszeWrLAqBS104YHW224l6YByBpVGgwwRk16zD8T8O%2BnqV78Ovm1Ey%2FTfVOop53nYZtWIXdA3YJOU&X-Amz-Signature=e17da204aa765fa71fd2c6eeb53b25fa96f83fcb64f779a5818c6f4b2d8b0290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDJ23O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfRY1xSXfJ9n4wSzR58prCtX3rhUcfwqD76G7ewnUOUgIhAJ7pn%2BmHPSBHlMCX5JFJyhDxv69DWHwvXWwi4ScvFrjAKv8DCEAQABoMNjM3NDIzMTgzODA1IgyimaMw2kWozSbwVZsq3APCYEF33H372YwjzXYL23X%2BIz7Nak%2FFbHyWcarQlhV6Fqi8N%2F3g5TgkJJIqH9a1xbMhLYZAGewlc2pbiWTYle6IchTvdN8RJHPrj35cRxgV0L0i243rTfzyeTjF0ybb5cVn7KsAqFf8XfnM4mYjlxQd07XMIkI1H%2FQ%2BBcmgpWIgWfDCBcnZCGijeL7vL4BeFf1IhEGBIcphhh5jsqqZCwoonm5fhKHk3up%2FjMr7RlVOPvHx1ilSE%2FlUUMq3qH3Jak0i1o2gKPm8W6HxYeLIuDZbP%2FlxwikwTFYItyK41v618LUndXM0dcgS9hQcxTCSWCVTjbi1IZvhJBCN2n1h0dnxGbyXhi%2FtWvd870Z%2FFGDeWv7Y738uVZORJ0j9JmyuHpiqZJPJ1O4Rp6N6ueId2pR5OdzO7evBD7e9w04AficAqBuu8jBte0QRI2L47Jp9JEuUSt6Vja0WXm3BxTrgW5yjHxTScnMycEJDsrYuVRJmC5BhjrfPd2cvlIsu9sXslSQLZhsLO3QZrFe%2FCalPfdk3wmmFa%2BBmc5GR37gxmCILNnMnAausw2dnRwC6uXtY4LK0woIvikDUlYs4nHCtRegGMYvS0ySwLr2JO3LMf5P6NsDC%2BGh0VjZK05lQ3TDHuMHEBjqkAf3uwGKeH%2FCIyRf3zRaKFSwKM7%2F7ODhTO3sW8KSvZeEqzUDsWByo%2FinwQKrUKEEbYVujUU%2FQO28Y%2F46oyQQiWukmylTHn3dT4wKkk5KIhJXwpouDeTQ0bZyV%2FhMhx3CX4Tk%2F%2BsErzxR49RqnszeWrLAqBS104YHW224l6YByBpVGgwwRk16zD8T8O%2BnqV78Ovm1Ey%2FTfVOop53nYZtWIXdA3YJOU&X-Amz-Signature=ad2411f58a251d2837760961368185f54428a7dc905636b9bd6aee6d4daedfd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDJ23O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfRY1xSXfJ9n4wSzR58prCtX3rhUcfwqD76G7ewnUOUgIhAJ7pn%2BmHPSBHlMCX5JFJyhDxv69DWHwvXWwi4ScvFrjAKv8DCEAQABoMNjM3NDIzMTgzODA1IgyimaMw2kWozSbwVZsq3APCYEF33H372YwjzXYL23X%2BIz7Nak%2FFbHyWcarQlhV6Fqi8N%2F3g5TgkJJIqH9a1xbMhLYZAGewlc2pbiWTYle6IchTvdN8RJHPrj35cRxgV0L0i243rTfzyeTjF0ybb5cVn7KsAqFf8XfnM4mYjlxQd07XMIkI1H%2FQ%2BBcmgpWIgWfDCBcnZCGijeL7vL4BeFf1IhEGBIcphhh5jsqqZCwoonm5fhKHk3up%2FjMr7RlVOPvHx1ilSE%2FlUUMq3qH3Jak0i1o2gKPm8W6HxYeLIuDZbP%2FlxwikwTFYItyK41v618LUndXM0dcgS9hQcxTCSWCVTjbi1IZvhJBCN2n1h0dnxGbyXhi%2FtWvd870Z%2FFGDeWv7Y738uVZORJ0j9JmyuHpiqZJPJ1O4Rp6N6ueId2pR5OdzO7evBD7e9w04AficAqBuu8jBte0QRI2L47Jp9JEuUSt6Vja0WXm3BxTrgW5yjHxTScnMycEJDsrYuVRJmC5BhjrfPd2cvlIsu9sXslSQLZhsLO3QZrFe%2FCalPfdk3wmmFa%2BBmc5GR37gxmCILNnMnAausw2dnRwC6uXtY4LK0woIvikDUlYs4nHCtRegGMYvS0ySwLr2JO3LMf5P6NsDC%2BGh0VjZK05lQ3TDHuMHEBjqkAf3uwGKeH%2FCIyRf3zRaKFSwKM7%2F7ODhTO3sW8KSvZeEqzUDsWByo%2FinwQKrUKEEbYVujUU%2FQO28Y%2F46oyQQiWukmylTHn3dT4wKkk5KIhJXwpouDeTQ0bZyV%2FhMhx3CX4Tk%2F%2BsErzxR49RqnszeWrLAqBS104YHW224l6YByBpVGgwwRk16zD8T8O%2BnqV78Ovm1Ey%2FTfVOop53nYZtWIXdA3YJOU&X-Amz-Signature=a9e82a4acf4de480f9f8528cdd4046c630a385731c0e855845944a77c9a8e306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
