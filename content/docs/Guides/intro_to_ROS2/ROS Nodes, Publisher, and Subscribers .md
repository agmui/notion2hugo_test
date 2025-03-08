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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APRYQMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCn7ZWFQiPkpnKJ7kxuCg9dsFVLt9H6%2B%2Bp5zhJ8n25TEgIgX80mrCJoQYblqRA5TzsmO4FLr85JLNTqlfeRzDG5rzYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJBT%2F78R3XApaT1W3yrcAyk%2BTxtB1igIVdy1cdGzmGXchdCTrmdwfJ86NmxFF42inM4CsgDPE4AIkC6W41xxFEdMnNLcnsNyoZ9WFO%2F3SS7w8RiYBWh2dNEBjsQhHMM68uimtIbVnNIxi4ZnR1x5OxOLTCnWKfZMHS6IFMxOJlNMllJse2vcL%2FNoHJ43zeid61%2FWyObdJFxGYk8lrMJVCsf03YFCJW6Pqh%2FPabU77pXl5YeXygy6MzmnOR08BCFITmFJO1P%2B0doS3eCQ8jB84SGr0qf8pE614uRS8ClDbkmtZJ2Uww%2FAQhEI9HtrqWVamU6zW9ka9tUzkmrKjIKGRVHDBbohIh5uYuQYm1vWYPYVRtlNhqvmiWU%2B6K%2BSVnZD2AwaDDdrU%2FO%2BVySrGEOvYESpy8vd0D9WIgmVwUr%2FPwS8Jq%2BzvexVovRjtdheVgbSuX%2BZmIfX8ejAubTwRRFpUoiNeNviJeL9MAY2wIl8gjCwSe9%2BsC452nOdWmVPdtjqtn0AgV3xq2B55mVM2kMvw8s8G6ECSomciq5YFfUjVEyk%2FB1hXDFdx%2BBoDRZ1Nu96SJgR%2FQDF2eN3wlPEFvSsMufxK3ygBZE0vuosvqRdNN7eZqLJVzwvxMT72txv%2Bxks20qv4Ai6G%2BxsfABLMOiCsr4GOqUBUX8jod6YH5QZqF%2BnA%2BpSeHfRO4hv1%2FD4WIwXYeI97a38RfWuCot5iJ5AoJ3H8G0vBtVbdh6bWmjFVdKyUxptdtZJOSHS%2FIM%2BViMv%2BeGWwGU6XxJ1QYk5AA9dw2dDm0KmFGoSYYb%2FX47%2BO1%2Bd6tIQuXg4LXdsCxIxqw43JahTWhSnKAb0n%2BUhv1NGE0O5GhrL7O3CXqclQTDZKBJisBOCj%2FaG764B&X-Amz-Signature=61e3634b65ebc8ad0104114ff46ae21100303d71dbcb9b389851c2fe5ebaf1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APRYQMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCn7ZWFQiPkpnKJ7kxuCg9dsFVLt9H6%2B%2Bp5zhJ8n25TEgIgX80mrCJoQYblqRA5TzsmO4FLr85JLNTqlfeRzDG5rzYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJBT%2F78R3XApaT1W3yrcAyk%2BTxtB1igIVdy1cdGzmGXchdCTrmdwfJ86NmxFF42inM4CsgDPE4AIkC6W41xxFEdMnNLcnsNyoZ9WFO%2F3SS7w8RiYBWh2dNEBjsQhHMM68uimtIbVnNIxi4ZnR1x5OxOLTCnWKfZMHS6IFMxOJlNMllJse2vcL%2FNoHJ43zeid61%2FWyObdJFxGYk8lrMJVCsf03YFCJW6Pqh%2FPabU77pXl5YeXygy6MzmnOR08BCFITmFJO1P%2B0doS3eCQ8jB84SGr0qf8pE614uRS8ClDbkmtZJ2Uww%2FAQhEI9HtrqWVamU6zW9ka9tUzkmrKjIKGRVHDBbohIh5uYuQYm1vWYPYVRtlNhqvmiWU%2B6K%2BSVnZD2AwaDDdrU%2FO%2BVySrGEOvYESpy8vd0D9WIgmVwUr%2FPwS8Jq%2BzvexVovRjtdheVgbSuX%2BZmIfX8ejAubTwRRFpUoiNeNviJeL9MAY2wIl8gjCwSe9%2BsC452nOdWmVPdtjqtn0AgV3xq2B55mVM2kMvw8s8G6ECSomciq5YFfUjVEyk%2FB1hXDFdx%2BBoDRZ1Nu96SJgR%2FQDF2eN3wlPEFvSsMufxK3ygBZE0vuosvqRdNN7eZqLJVzwvxMT72txv%2Bxks20qv4Ai6G%2BxsfABLMOiCsr4GOqUBUX8jod6YH5QZqF%2BnA%2BpSeHfRO4hv1%2FD4WIwXYeI97a38RfWuCot5iJ5AoJ3H8G0vBtVbdh6bWmjFVdKyUxptdtZJOSHS%2FIM%2BViMv%2BeGWwGU6XxJ1QYk5AA9dw2dDm0KmFGoSYYb%2FX47%2BO1%2Bd6tIQuXg4LXdsCxIxqw43JahTWhSnKAb0n%2BUhv1NGE0O5GhrL7O3CXqclQTDZKBJisBOCj%2FaG764B&X-Amz-Signature=c08fd45f294be23d7c4c1367f0c4d43c0de2debc56ad8f25976625d4bf5e6c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APRYQMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCn7ZWFQiPkpnKJ7kxuCg9dsFVLt9H6%2B%2Bp5zhJ8n25TEgIgX80mrCJoQYblqRA5TzsmO4FLr85JLNTqlfeRzDG5rzYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJBT%2F78R3XApaT1W3yrcAyk%2BTxtB1igIVdy1cdGzmGXchdCTrmdwfJ86NmxFF42inM4CsgDPE4AIkC6W41xxFEdMnNLcnsNyoZ9WFO%2F3SS7w8RiYBWh2dNEBjsQhHMM68uimtIbVnNIxi4ZnR1x5OxOLTCnWKfZMHS6IFMxOJlNMllJse2vcL%2FNoHJ43zeid61%2FWyObdJFxGYk8lrMJVCsf03YFCJW6Pqh%2FPabU77pXl5YeXygy6MzmnOR08BCFITmFJO1P%2B0doS3eCQ8jB84SGr0qf8pE614uRS8ClDbkmtZJ2Uww%2FAQhEI9HtrqWVamU6zW9ka9tUzkmrKjIKGRVHDBbohIh5uYuQYm1vWYPYVRtlNhqvmiWU%2B6K%2BSVnZD2AwaDDdrU%2FO%2BVySrGEOvYESpy8vd0D9WIgmVwUr%2FPwS8Jq%2BzvexVovRjtdheVgbSuX%2BZmIfX8ejAubTwRRFpUoiNeNviJeL9MAY2wIl8gjCwSe9%2BsC452nOdWmVPdtjqtn0AgV3xq2B55mVM2kMvw8s8G6ECSomciq5YFfUjVEyk%2FB1hXDFdx%2BBoDRZ1Nu96SJgR%2FQDF2eN3wlPEFvSsMufxK3ygBZE0vuosvqRdNN7eZqLJVzwvxMT72txv%2Bxks20qv4Ai6G%2BxsfABLMOiCsr4GOqUBUX8jod6YH5QZqF%2BnA%2BpSeHfRO4hv1%2FD4WIwXYeI97a38RfWuCot5iJ5AoJ3H8G0vBtVbdh6bWmjFVdKyUxptdtZJOSHS%2FIM%2BViMv%2BeGWwGU6XxJ1QYk5AA9dw2dDm0KmFGoSYYb%2FX47%2BO1%2Bd6tIQuXg4LXdsCxIxqw43JahTWhSnKAb0n%2BUhv1NGE0O5GhrL7O3CXqclQTDZKBJisBOCj%2FaG764B&X-Amz-Signature=cd6de2b481239cfa28b58efdde947e834b88051052b9fac6bd49ac0bcb5d5e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APRYQMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCn7ZWFQiPkpnKJ7kxuCg9dsFVLt9H6%2B%2Bp5zhJ8n25TEgIgX80mrCJoQYblqRA5TzsmO4FLr85JLNTqlfeRzDG5rzYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJBT%2F78R3XApaT1W3yrcAyk%2BTxtB1igIVdy1cdGzmGXchdCTrmdwfJ86NmxFF42inM4CsgDPE4AIkC6W41xxFEdMnNLcnsNyoZ9WFO%2F3SS7w8RiYBWh2dNEBjsQhHMM68uimtIbVnNIxi4ZnR1x5OxOLTCnWKfZMHS6IFMxOJlNMllJse2vcL%2FNoHJ43zeid61%2FWyObdJFxGYk8lrMJVCsf03YFCJW6Pqh%2FPabU77pXl5YeXygy6MzmnOR08BCFITmFJO1P%2B0doS3eCQ8jB84SGr0qf8pE614uRS8ClDbkmtZJ2Uww%2FAQhEI9HtrqWVamU6zW9ka9tUzkmrKjIKGRVHDBbohIh5uYuQYm1vWYPYVRtlNhqvmiWU%2B6K%2BSVnZD2AwaDDdrU%2FO%2BVySrGEOvYESpy8vd0D9WIgmVwUr%2FPwS8Jq%2BzvexVovRjtdheVgbSuX%2BZmIfX8ejAubTwRRFpUoiNeNviJeL9MAY2wIl8gjCwSe9%2BsC452nOdWmVPdtjqtn0AgV3xq2B55mVM2kMvw8s8G6ECSomciq5YFfUjVEyk%2FB1hXDFdx%2BBoDRZ1Nu96SJgR%2FQDF2eN3wlPEFvSsMufxK3ygBZE0vuosvqRdNN7eZqLJVzwvxMT72txv%2Bxks20qv4Ai6G%2BxsfABLMOiCsr4GOqUBUX8jod6YH5QZqF%2BnA%2BpSeHfRO4hv1%2FD4WIwXYeI97a38RfWuCot5iJ5AoJ3H8G0vBtVbdh6bWmjFVdKyUxptdtZJOSHS%2FIM%2BViMv%2BeGWwGU6XxJ1QYk5AA9dw2dDm0KmFGoSYYb%2FX47%2BO1%2Bd6tIQuXg4LXdsCxIxqw43JahTWhSnKAb0n%2BUhv1NGE0O5GhrL7O3CXqclQTDZKBJisBOCj%2FaG764B&X-Amz-Signature=e3de95e592c255b0ced5a6b0bdaebb6f0121999835e33215aba58fd98b03258d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APRYQMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCn7ZWFQiPkpnKJ7kxuCg9dsFVLt9H6%2B%2Bp5zhJ8n25TEgIgX80mrCJoQYblqRA5TzsmO4FLr85JLNTqlfeRzDG5rzYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJBT%2F78R3XApaT1W3yrcAyk%2BTxtB1igIVdy1cdGzmGXchdCTrmdwfJ86NmxFF42inM4CsgDPE4AIkC6W41xxFEdMnNLcnsNyoZ9WFO%2F3SS7w8RiYBWh2dNEBjsQhHMM68uimtIbVnNIxi4ZnR1x5OxOLTCnWKfZMHS6IFMxOJlNMllJse2vcL%2FNoHJ43zeid61%2FWyObdJFxGYk8lrMJVCsf03YFCJW6Pqh%2FPabU77pXl5YeXygy6MzmnOR08BCFITmFJO1P%2B0doS3eCQ8jB84SGr0qf8pE614uRS8ClDbkmtZJ2Uww%2FAQhEI9HtrqWVamU6zW9ka9tUzkmrKjIKGRVHDBbohIh5uYuQYm1vWYPYVRtlNhqvmiWU%2B6K%2BSVnZD2AwaDDdrU%2FO%2BVySrGEOvYESpy8vd0D9WIgmVwUr%2FPwS8Jq%2BzvexVovRjtdheVgbSuX%2BZmIfX8ejAubTwRRFpUoiNeNviJeL9MAY2wIl8gjCwSe9%2BsC452nOdWmVPdtjqtn0AgV3xq2B55mVM2kMvw8s8G6ECSomciq5YFfUjVEyk%2FB1hXDFdx%2BBoDRZ1Nu96SJgR%2FQDF2eN3wlPEFvSsMufxK3ygBZE0vuosvqRdNN7eZqLJVzwvxMT72txv%2Bxks20qv4Ai6G%2BxsfABLMOiCsr4GOqUBUX8jod6YH5QZqF%2BnA%2BpSeHfRO4hv1%2FD4WIwXYeI97a38RfWuCot5iJ5AoJ3H8G0vBtVbdh6bWmjFVdKyUxptdtZJOSHS%2FIM%2BViMv%2BeGWwGU6XxJ1QYk5AA9dw2dDm0KmFGoSYYb%2FX47%2BO1%2Bd6tIQuXg4LXdsCxIxqw43JahTWhSnKAb0n%2BUhv1NGE0O5GhrL7O3CXqclQTDZKBJisBOCj%2FaG764B&X-Amz-Signature=91cebbc87049ae1846c941f9248e0fef12719a55c2d2f55a357f25d23064080b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APRYQMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCn7ZWFQiPkpnKJ7kxuCg9dsFVLt9H6%2B%2Bp5zhJ8n25TEgIgX80mrCJoQYblqRA5TzsmO4FLr85JLNTqlfeRzDG5rzYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJBT%2F78R3XApaT1W3yrcAyk%2BTxtB1igIVdy1cdGzmGXchdCTrmdwfJ86NmxFF42inM4CsgDPE4AIkC6W41xxFEdMnNLcnsNyoZ9WFO%2F3SS7w8RiYBWh2dNEBjsQhHMM68uimtIbVnNIxi4ZnR1x5OxOLTCnWKfZMHS6IFMxOJlNMllJse2vcL%2FNoHJ43zeid61%2FWyObdJFxGYk8lrMJVCsf03YFCJW6Pqh%2FPabU77pXl5YeXygy6MzmnOR08BCFITmFJO1P%2B0doS3eCQ8jB84SGr0qf8pE614uRS8ClDbkmtZJ2Uww%2FAQhEI9HtrqWVamU6zW9ka9tUzkmrKjIKGRVHDBbohIh5uYuQYm1vWYPYVRtlNhqvmiWU%2B6K%2BSVnZD2AwaDDdrU%2FO%2BVySrGEOvYESpy8vd0D9WIgmVwUr%2FPwS8Jq%2BzvexVovRjtdheVgbSuX%2BZmIfX8ejAubTwRRFpUoiNeNviJeL9MAY2wIl8gjCwSe9%2BsC452nOdWmVPdtjqtn0AgV3xq2B55mVM2kMvw8s8G6ECSomciq5YFfUjVEyk%2FB1hXDFdx%2BBoDRZ1Nu96SJgR%2FQDF2eN3wlPEFvSsMufxK3ygBZE0vuosvqRdNN7eZqLJVzwvxMT72txv%2Bxks20qv4Ai6G%2BxsfABLMOiCsr4GOqUBUX8jod6YH5QZqF%2BnA%2BpSeHfRO4hv1%2FD4WIwXYeI97a38RfWuCot5iJ5AoJ3H8G0vBtVbdh6bWmjFVdKyUxptdtZJOSHS%2FIM%2BViMv%2BeGWwGU6XxJ1QYk5AA9dw2dDm0KmFGoSYYb%2FX47%2BO1%2Bd6tIQuXg4LXdsCxIxqw43JahTWhSnKAb0n%2BUhv1NGE0O5GhrL7O3CXqclQTDZKBJisBOCj%2FaG764B&X-Amz-Signature=9221093e68872bb3d8f6df1bff75083bf797749932d5f7cefb54bb1a4013e36c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APRYQMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCn7ZWFQiPkpnKJ7kxuCg9dsFVLt9H6%2B%2Bp5zhJ8n25TEgIgX80mrCJoQYblqRA5TzsmO4FLr85JLNTqlfeRzDG5rzYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJBT%2F78R3XApaT1W3yrcAyk%2BTxtB1igIVdy1cdGzmGXchdCTrmdwfJ86NmxFF42inM4CsgDPE4AIkC6W41xxFEdMnNLcnsNyoZ9WFO%2F3SS7w8RiYBWh2dNEBjsQhHMM68uimtIbVnNIxi4ZnR1x5OxOLTCnWKfZMHS6IFMxOJlNMllJse2vcL%2FNoHJ43zeid61%2FWyObdJFxGYk8lrMJVCsf03YFCJW6Pqh%2FPabU77pXl5YeXygy6MzmnOR08BCFITmFJO1P%2B0doS3eCQ8jB84SGr0qf8pE614uRS8ClDbkmtZJ2Uww%2FAQhEI9HtrqWVamU6zW9ka9tUzkmrKjIKGRVHDBbohIh5uYuQYm1vWYPYVRtlNhqvmiWU%2B6K%2BSVnZD2AwaDDdrU%2FO%2BVySrGEOvYESpy8vd0D9WIgmVwUr%2FPwS8Jq%2BzvexVovRjtdheVgbSuX%2BZmIfX8ejAubTwRRFpUoiNeNviJeL9MAY2wIl8gjCwSe9%2BsC452nOdWmVPdtjqtn0AgV3xq2B55mVM2kMvw8s8G6ECSomciq5YFfUjVEyk%2FB1hXDFdx%2BBoDRZ1Nu96SJgR%2FQDF2eN3wlPEFvSsMufxK3ygBZE0vuosvqRdNN7eZqLJVzwvxMT72txv%2Bxks20qv4Ai6G%2BxsfABLMOiCsr4GOqUBUX8jod6YH5QZqF%2BnA%2BpSeHfRO4hv1%2FD4WIwXYeI97a38RfWuCot5iJ5AoJ3H8G0vBtVbdh6bWmjFVdKyUxptdtZJOSHS%2FIM%2BViMv%2BeGWwGU6XxJ1QYk5AA9dw2dDm0KmFGoSYYb%2FX47%2BO1%2Bd6tIQuXg4LXdsCxIxqw43JahTWhSnKAb0n%2BUhv1NGE0O5GhrL7O3CXqclQTDZKBJisBOCj%2FaG764B&X-Amz-Signature=0de52a378c96e4f31d542877e82c09ee10083f93ab7f12cb3d7e60b9b4cb6362&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APRYQMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCn7ZWFQiPkpnKJ7kxuCg9dsFVLt9H6%2B%2Bp5zhJ8n25TEgIgX80mrCJoQYblqRA5TzsmO4FLr85JLNTqlfeRzDG5rzYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJBT%2F78R3XApaT1W3yrcAyk%2BTxtB1igIVdy1cdGzmGXchdCTrmdwfJ86NmxFF42inM4CsgDPE4AIkC6W41xxFEdMnNLcnsNyoZ9WFO%2F3SS7w8RiYBWh2dNEBjsQhHMM68uimtIbVnNIxi4ZnR1x5OxOLTCnWKfZMHS6IFMxOJlNMllJse2vcL%2FNoHJ43zeid61%2FWyObdJFxGYk8lrMJVCsf03YFCJW6Pqh%2FPabU77pXl5YeXygy6MzmnOR08BCFITmFJO1P%2B0doS3eCQ8jB84SGr0qf8pE614uRS8ClDbkmtZJ2Uww%2FAQhEI9HtrqWVamU6zW9ka9tUzkmrKjIKGRVHDBbohIh5uYuQYm1vWYPYVRtlNhqvmiWU%2B6K%2BSVnZD2AwaDDdrU%2FO%2BVySrGEOvYESpy8vd0D9WIgmVwUr%2FPwS8Jq%2BzvexVovRjtdheVgbSuX%2BZmIfX8ejAubTwRRFpUoiNeNviJeL9MAY2wIl8gjCwSe9%2BsC452nOdWmVPdtjqtn0AgV3xq2B55mVM2kMvw8s8G6ECSomciq5YFfUjVEyk%2FB1hXDFdx%2BBoDRZ1Nu96SJgR%2FQDF2eN3wlPEFvSsMufxK3ygBZE0vuosvqRdNN7eZqLJVzwvxMT72txv%2Bxks20qv4Ai6G%2BxsfABLMOiCsr4GOqUBUX8jod6YH5QZqF%2BnA%2BpSeHfRO4hv1%2FD4WIwXYeI97a38RfWuCot5iJ5AoJ3H8G0vBtVbdh6bWmjFVdKyUxptdtZJOSHS%2FIM%2BViMv%2BeGWwGU6XxJ1QYk5AA9dw2dDm0KmFGoSYYb%2FX47%2BO1%2Bd6tIQuXg4LXdsCxIxqw43JahTWhSnKAb0n%2BUhv1NGE0O5GhrL7O3CXqclQTDZKBJisBOCj%2FaG764B&X-Amz-Signature=fd41fb407a082ad2a10f3c8b48201f0018d3fbd319215b50438b98f938474146&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
