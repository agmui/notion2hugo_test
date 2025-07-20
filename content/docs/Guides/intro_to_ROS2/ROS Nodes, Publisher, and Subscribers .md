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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHWLFMZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjX6TZh1lkHPyTdZE05E3fO0RAw3JjpSdaumJavnfAsAiEA2Z63ibtYoq2DmmGL6c%2Bix4wQAp4uEHzxC%2BO53tzx2SwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm0JpQguUT7tllcXircA8r10hcJfWwjtgGcYlIxBjL%2FrsMqWRLJAPuYDWPrjaRuBCc4jS2bR%2FhRZToielpLSrmiF%2B0%2F5KYsGJCPdkUenbYlglX9G3CHCIvYnhrMx10E%2FSc9O0QeumelhWjJh%2BJHPj6PJVHE1M56S4e7Db0eaIh9G7kFFJ%2BHkrfSUMgbknPrRgw3%2B6c3ZWMOvwr4rdF%2BO69hAQbh46vPGjLXeZpgXPlXsVpqJCrG%2FAbIRdhtuY%2FuNiGVxK7ctTHmotK8019E%2FvEclRsJwWir9EZDJNGV7DbNCJXfHkCENuzsSFQ6Yhw%2BtdBTsL3P8yUORzDv8QV9CEPWOshaqPxWOMuB3ZeXwGh9wV2A9sJBmjMjqTQbkNBwr7J2sPz8hh7LV2spg%2FzUFFKBu9xwbEt%2FeijgDE4Y28CKgVa0h%2FsklwtTRx09G4WoejL26QgX8eoybmo1cqzu1MPlah34gTP48uQAlo92NobeIDbq4C29nVZiBslwjI2FhXO%2FM%2BW7WtiTnYwmlMl4%2F63R9yQUBbLI3ISr5eNNbavm3WUgm6yh5eoN9CUjErxHIf6S3hY1lI03tQb6XUSP2Y4QBy702c6INNdvxbuMReS%2BCpU%2F890Ax58lu9GpOZ2Hm5J6ekYVZ17YLaMqMMyZ8cMGOqUBwdUrBBRAo91yLobu28QwM1U82CTFCPrM6PBN369Z8z0qoK%2BiT9LwFkBtGReu1AJdg0mobAOD6%2BJAmcD6Mi4OBucGLMyx30FSUeR9%2Bg5jIZRB0i7tNL60aJfNYyi1XZmsrBZ3MsnH042auUyPO%2FJHrZ%2BWvxVbOBTO7Ayibg22mrt2q6kXoyjkkAbgM%2BVIkK1W85KPgVzkq5u6xf70gVE%2FKi7PBBpZ&X-Amz-Signature=c2c392805cf46b2948bdf2e1f1142dd0a4b22ea2bfeffdd87f9ff8cc6f684c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHWLFMZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjX6TZh1lkHPyTdZE05E3fO0RAw3JjpSdaumJavnfAsAiEA2Z63ibtYoq2DmmGL6c%2Bix4wQAp4uEHzxC%2BO53tzx2SwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm0JpQguUT7tllcXircA8r10hcJfWwjtgGcYlIxBjL%2FrsMqWRLJAPuYDWPrjaRuBCc4jS2bR%2FhRZToielpLSrmiF%2B0%2F5KYsGJCPdkUenbYlglX9G3CHCIvYnhrMx10E%2FSc9O0QeumelhWjJh%2BJHPj6PJVHE1M56S4e7Db0eaIh9G7kFFJ%2BHkrfSUMgbknPrRgw3%2B6c3ZWMOvwr4rdF%2BO69hAQbh46vPGjLXeZpgXPlXsVpqJCrG%2FAbIRdhtuY%2FuNiGVxK7ctTHmotK8019E%2FvEclRsJwWir9EZDJNGV7DbNCJXfHkCENuzsSFQ6Yhw%2BtdBTsL3P8yUORzDv8QV9CEPWOshaqPxWOMuB3ZeXwGh9wV2A9sJBmjMjqTQbkNBwr7J2sPz8hh7LV2spg%2FzUFFKBu9xwbEt%2FeijgDE4Y28CKgVa0h%2FsklwtTRx09G4WoejL26QgX8eoybmo1cqzu1MPlah34gTP48uQAlo92NobeIDbq4C29nVZiBslwjI2FhXO%2FM%2BW7WtiTnYwmlMl4%2F63R9yQUBbLI3ISr5eNNbavm3WUgm6yh5eoN9CUjErxHIf6S3hY1lI03tQb6XUSP2Y4QBy702c6INNdvxbuMReS%2BCpU%2F890Ax58lu9GpOZ2Hm5J6ekYVZ17YLaMqMMyZ8cMGOqUBwdUrBBRAo91yLobu28QwM1U82CTFCPrM6PBN369Z8z0qoK%2BiT9LwFkBtGReu1AJdg0mobAOD6%2BJAmcD6Mi4OBucGLMyx30FSUeR9%2Bg5jIZRB0i7tNL60aJfNYyi1XZmsrBZ3MsnH042auUyPO%2FJHrZ%2BWvxVbOBTO7Ayibg22mrt2q6kXoyjkkAbgM%2BVIkK1W85KPgVzkq5u6xf70gVE%2FKi7PBBpZ&X-Amz-Signature=8a1c1d158d8a50da6ddf6b8663468737f08a6ab236ce049dcae28d83bf048a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHWLFMZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjX6TZh1lkHPyTdZE05E3fO0RAw3JjpSdaumJavnfAsAiEA2Z63ibtYoq2DmmGL6c%2Bix4wQAp4uEHzxC%2BO53tzx2SwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm0JpQguUT7tllcXircA8r10hcJfWwjtgGcYlIxBjL%2FrsMqWRLJAPuYDWPrjaRuBCc4jS2bR%2FhRZToielpLSrmiF%2B0%2F5KYsGJCPdkUenbYlglX9G3CHCIvYnhrMx10E%2FSc9O0QeumelhWjJh%2BJHPj6PJVHE1M56S4e7Db0eaIh9G7kFFJ%2BHkrfSUMgbknPrRgw3%2B6c3ZWMOvwr4rdF%2BO69hAQbh46vPGjLXeZpgXPlXsVpqJCrG%2FAbIRdhtuY%2FuNiGVxK7ctTHmotK8019E%2FvEclRsJwWir9EZDJNGV7DbNCJXfHkCENuzsSFQ6Yhw%2BtdBTsL3P8yUORzDv8QV9CEPWOshaqPxWOMuB3ZeXwGh9wV2A9sJBmjMjqTQbkNBwr7J2sPz8hh7LV2spg%2FzUFFKBu9xwbEt%2FeijgDE4Y28CKgVa0h%2FsklwtTRx09G4WoejL26QgX8eoybmo1cqzu1MPlah34gTP48uQAlo92NobeIDbq4C29nVZiBslwjI2FhXO%2FM%2BW7WtiTnYwmlMl4%2F63R9yQUBbLI3ISr5eNNbavm3WUgm6yh5eoN9CUjErxHIf6S3hY1lI03tQb6XUSP2Y4QBy702c6INNdvxbuMReS%2BCpU%2F890Ax58lu9GpOZ2Hm5J6ekYVZ17YLaMqMMyZ8cMGOqUBwdUrBBRAo91yLobu28QwM1U82CTFCPrM6PBN369Z8z0qoK%2BiT9LwFkBtGReu1AJdg0mobAOD6%2BJAmcD6Mi4OBucGLMyx30FSUeR9%2Bg5jIZRB0i7tNL60aJfNYyi1XZmsrBZ3MsnH042auUyPO%2FJHrZ%2BWvxVbOBTO7Ayibg22mrt2q6kXoyjkkAbgM%2BVIkK1W85KPgVzkq5u6xf70gVE%2FKi7PBBpZ&X-Amz-Signature=cae5acef7d90c6fbd68a82616d150bfb41c2814181566b49abbc28e637ce02e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHWLFMZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjX6TZh1lkHPyTdZE05E3fO0RAw3JjpSdaumJavnfAsAiEA2Z63ibtYoq2DmmGL6c%2Bix4wQAp4uEHzxC%2BO53tzx2SwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm0JpQguUT7tllcXircA8r10hcJfWwjtgGcYlIxBjL%2FrsMqWRLJAPuYDWPrjaRuBCc4jS2bR%2FhRZToielpLSrmiF%2B0%2F5KYsGJCPdkUenbYlglX9G3CHCIvYnhrMx10E%2FSc9O0QeumelhWjJh%2BJHPj6PJVHE1M56S4e7Db0eaIh9G7kFFJ%2BHkrfSUMgbknPrRgw3%2B6c3ZWMOvwr4rdF%2BO69hAQbh46vPGjLXeZpgXPlXsVpqJCrG%2FAbIRdhtuY%2FuNiGVxK7ctTHmotK8019E%2FvEclRsJwWir9EZDJNGV7DbNCJXfHkCENuzsSFQ6Yhw%2BtdBTsL3P8yUORzDv8QV9CEPWOshaqPxWOMuB3ZeXwGh9wV2A9sJBmjMjqTQbkNBwr7J2sPz8hh7LV2spg%2FzUFFKBu9xwbEt%2FeijgDE4Y28CKgVa0h%2FsklwtTRx09G4WoejL26QgX8eoybmo1cqzu1MPlah34gTP48uQAlo92NobeIDbq4C29nVZiBslwjI2FhXO%2FM%2BW7WtiTnYwmlMl4%2F63R9yQUBbLI3ISr5eNNbavm3WUgm6yh5eoN9CUjErxHIf6S3hY1lI03tQb6XUSP2Y4QBy702c6INNdvxbuMReS%2BCpU%2F890Ax58lu9GpOZ2Hm5J6ekYVZ17YLaMqMMyZ8cMGOqUBwdUrBBRAo91yLobu28QwM1U82CTFCPrM6PBN369Z8z0qoK%2BiT9LwFkBtGReu1AJdg0mobAOD6%2BJAmcD6Mi4OBucGLMyx30FSUeR9%2Bg5jIZRB0i7tNL60aJfNYyi1XZmsrBZ3MsnH042auUyPO%2FJHrZ%2BWvxVbOBTO7Ayibg22mrt2q6kXoyjkkAbgM%2BVIkK1W85KPgVzkq5u6xf70gVE%2FKi7PBBpZ&X-Amz-Signature=e19a19cea346cdabb62f118194f478bf692d0172c9769d0aece866f40565a7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHWLFMZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjX6TZh1lkHPyTdZE05E3fO0RAw3JjpSdaumJavnfAsAiEA2Z63ibtYoq2DmmGL6c%2Bix4wQAp4uEHzxC%2BO53tzx2SwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm0JpQguUT7tllcXircA8r10hcJfWwjtgGcYlIxBjL%2FrsMqWRLJAPuYDWPrjaRuBCc4jS2bR%2FhRZToielpLSrmiF%2B0%2F5KYsGJCPdkUenbYlglX9G3CHCIvYnhrMx10E%2FSc9O0QeumelhWjJh%2BJHPj6PJVHE1M56S4e7Db0eaIh9G7kFFJ%2BHkrfSUMgbknPrRgw3%2B6c3ZWMOvwr4rdF%2BO69hAQbh46vPGjLXeZpgXPlXsVpqJCrG%2FAbIRdhtuY%2FuNiGVxK7ctTHmotK8019E%2FvEclRsJwWir9EZDJNGV7DbNCJXfHkCENuzsSFQ6Yhw%2BtdBTsL3P8yUORzDv8QV9CEPWOshaqPxWOMuB3ZeXwGh9wV2A9sJBmjMjqTQbkNBwr7J2sPz8hh7LV2spg%2FzUFFKBu9xwbEt%2FeijgDE4Y28CKgVa0h%2FsklwtTRx09G4WoejL26QgX8eoybmo1cqzu1MPlah34gTP48uQAlo92NobeIDbq4C29nVZiBslwjI2FhXO%2FM%2BW7WtiTnYwmlMl4%2F63R9yQUBbLI3ISr5eNNbavm3WUgm6yh5eoN9CUjErxHIf6S3hY1lI03tQb6XUSP2Y4QBy702c6INNdvxbuMReS%2BCpU%2F890Ax58lu9GpOZ2Hm5J6ekYVZ17YLaMqMMyZ8cMGOqUBwdUrBBRAo91yLobu28QwM1U82CTFCPrM6PBN369Z8z0qoK%2BiT9LwFkBtGReu1AJdg0mobAOD6%2BJAmcD6Mi4OBucGLMyx30FSUeR9%2Bg5jIZRB0i7tNL60aJfNYyi1XZmsrBZ3MsnH042auUyPO%2FJHrZ%2BWvxVbOBTO7Ayibg22mrt2q6kXoyjkkAbgM%2BVIkK1W85KPgVzkq5u6xf70gVE%2FKi7PBBpZ&X-Amz-Signature=cfe95eea69ab1b2c2f268df3640f3d607a480ec8101689b1bbac1d63101abf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHWLFMZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjX6TZh1lkHPyTdZE05E3fO0RAw3JjpSdaumJavnfAsAiEA2Z63ibtYoq2DmmGL6c%2Bix4wQAp4uEHzxC%2BO53tzx2SwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm0JpQguUT7tllcXircA8r10hcJfWwjtgGcYlIxBjL%2FrsMqWRLJAPuYDWPrjaRuBCc4jS2bR%2FhRZToielpLSrmiF%2B0%2F5KYsGJCPdkUenbYlglX9G3CHCIvYnhrMx10E%2FSc9O0QeumelhWjJh%2BJHPj6PJVHE1M56S4e7Db0eaIh9G7kFFJ%2BHkrfSUMgbknPrRgw3%2B6c3ZWMOvwr4rdF%2BO69hAQbh46vPGjLXeZpgXPlXsVpqJCrG%2FAbIRdhtuY%2FuNiGVxK7ctTHmotK8019E%2FvEclRsJwWir9EZDJNGV7DbNCJXfHkCENuzsSFQ6Yhw%2BtdBTsL3P8yUORzDv8QV9CEPWOshaqPxWOMuB3ZeXwGh9wV2A9sJBmjMjqTQbkNBwr7J2sPz8hh7LV2spg%2FzUFFKBu9xwbEt%2FeijgDE4Y28CKgVa0h%2FsklwtTRx09G4WoejL26QgX8eoybmo1cqzu1MPlah34gTP48uQAlo92NobeIDbq4C29nVZiBslwjI2FhXO%2FM%2BW7WtiTnYwmlMl4%2F63R9yQUBbLI3ISr5eNNbavm3WUgm6yh5eoN9CUjErxHIf6S3hY1lI03tQb6XUSP2Y4QBy702c6INNdvxbuMReS%2BCpU%2F890Ax58lu9GpOZ2Hm5J6ekYVZ17YLaMqMMyZ8cMGOqUBwdUrBBRAo91yLobu28QwM1U82CTFCPrM6PBN369Z8z0qoK%2BiT9LwFkBtGReu1AJdg0mobAOD6%2BJAmcD6Mi4OBucGLMyx30FSUeR9%2Bg5jIZRB0i7tNL60aJfNYyi1XZmsrBZ3MsnH042auUyPO%2FJHrZ%2BWvxVbOBTO7Ayibg22mrt2q6kXoyjkkAbgM%2BVIkK1W85KPgVzkq5u6xf70gVE%2FKi7PBBpZ&X-Amz-Signature=9105ea372d74202e8fbedff4b62bb914ededc61686f57b87d7549cfe96f7fa46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHWLFMZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjX6TZh1lkHPyTdZE05E3fO0RAw3JjpSdaumJavnfAsAiEA2Z63ibtYoq2DmmGL6c%2Bix4wQAp4uEHzxC%2BO53tzx2SwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm0JpQguUT7tllcXircA8r10hcJfWwjtgGcYlIxBjL%2FrsMqWRLJAPuYDWPrjaRuBCc4jS2bR%2FhRZToielpLSrmiF%2B0%2F5KYsGJCPdkUenbYlglX9G3CHCIvYnhrMx10E%2FSc9O0QeumelhWjJh%2BJHPj6PJVHE1M56S4e7Db0eaIh9G7kFFJ%2BHkrfSUMgbknPrRgw3%2B6c3ZWMOvwr4rdF%2BO69hAQbh46vPGjLXeZpgXPlXsVpqJCrG%2FAbIRdhtuY%2FuNiGVxK7ctTHmotK8019E%2FvEclRsJwWir9EZDJNGV7DbNCJXfHkCENuzsSFQ6Yhw%2BtdBTsL3P8yUORzDv8QV9CEPWOshaqPxWOMuB3ZeXwGh9wV2A9sJBmjMjqTQbkNBwr7J2sPz8hh7LV2spg%2FzUFFKBu9xwbEt%2FeijgDE4Y28CKgVa0h%2FsklwtTRx09G4WoejL26QgX8eoybmo1cqzu1MPlah34gTP48uQAlo92NobeIDbq4C29nVZiBslwjI2FhXO%2FM%2BW7WtiTnYwmlMl4%2F63R9yQUBbLI3ISr5eNNbavm3WUgm6yh5eoN9CUjErxHIf6S3hY1lI03tQb6XUSP2Y4QBy702c6INNdvxbuMReS%2BCpU%2F890Ax58lu9GpOZ2Hm5J6ekYVZ17YLaMqMMyZ8cMGOqUBwdUrBBRAo91yLobu28QwM1U82CTFCPrM6PBN369Z8z0qoK%2BiT9LwFkBtGReu1AJdg0mobAOD6%2BJAmcD6Mi4OBucGLMyx30FSUeR9%2Bg5jIZRB0i7tNL60aJfNYyi1XZmsrBZ3MsnH042auUyPO%2FJHrZ%2BWvxVbOBTO7Ayibg22mrt2q6kXoyjkkAbgM%2BVIkK1W85KPgVzkq5u6xf70gVE%2FKi7PBBpZ&X-Amz-Signature=7bc29f1d39707a98cc32fd03769c9e776824c4099e947e2c158ca1d3b49a94b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHWLFMZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjX6TZh1lkHPyTdZE05E3fO0RAw3JjpSdaumJavnfAsAiEA2Z63ibtYoq2DmmGL6c%2Bix4wQAp4uEHzxC%2BO53tzx2SwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm0JpQguUT7tllcXircA8r10hcJfWwjtgGcYlIxBjL%2FrsMqWRLJAPuYDWPrjaRuBCc4jS2bR%2FhRZToielpLSrmiF%2B0%2F5KYsGJCPdkUenbYlglX9G3CHCIvYnhrMx10E%2FSc9O0QeumelhWjJh%2BJHPj6PJVHE1M56S4e7Db0eaIh9G7kFFJ%2BHkrfSUMgbknPrRgw3%2B6c3ZWMOvwr4rdF%2BO69hAQbh46vPGjLXeZpgXPlXsVpqJCrG%2FAbIRdhtuY%2FuNiGVxK7ctTHmotK8019E%2FvEclRsJwWir9EZDJNGV7DbNCJXfHkCENuzsSFQ6Yhw%2BtdBTsL3P8yUORzDv8QV9CEPWOshaqPxWOMuB3ZeXwGh9wV2A9sJBmjMjqTQbkNBwr7J2sPz8hh7LV2spg%2FzUFFKBu9xwbEt%2FeijgDE4Y28CKgVa0h%2FsklwtTRx09G4WoejL26QgX8eoybmo1cqzu1MPlah34gTP48uQAlo92NobeIDbq4C29nVZiBslwjI2FhXO%2FM%2BW7WtiTnYwmlMl4%2F63R9yQUBbLI3ISr5eNNbavm3WUgm6yh5eoN9CUjErxHIf6S3hY1lI03tQb6XUSP2Y4QBy702c6INNdvxbuMReS%2BCpU%2F890Ax58lu9GpOZ2Hm5J6ekYVZ17YLaMqMMyZ8cMGOqUBwdUrBBRAo91yLobu28QwM1U82CTFCPrM6PBN369Z8z0qoK%2BiT9LwFkBtGReu1AJdg0mobAOD6%2BJAmcD6Mi4OBucGLMyx30FSUeR9%2Bg5jIZRB0i7tNL60aJfNYyi1XZmsrBZ3MsnH042auUyPO%2FJHrZ%2BWvxVbOBTO7Ayibg22mrt2q6kXoyjkkAbgM%2BVIkK1W85KPgVzkq5u6xf70gVE%2FKi7PBBpZ&X-Amz-Signature=d391fc1771de1cc66f632c6aa6b49c48d1a7f01e093a067602bba59b95399697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
