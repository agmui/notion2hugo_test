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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZU2MFQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDanzNGo4PBUaJE97o8wAoeqiRKzTk21J6NxZADFIosGgIgSl3eXbRMDhFpvFogUR1YXnQ94tAWVBu8JhBp2uoC0OMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmaAFg3pOnryt6CMSrcA2BTxxi3ooA3%2BE5yrv1619mx99LAq%2BFtTGBy2kKeanGpgblp7tl30eBekX%2BkvkWTzelu9quogwaaD4yUR6YbrX5V8ey2ZFXX3eenLQJb4CEoIOLyrHJ6KVT2vIzxnYaf8MpILsCfIO9mny0MBOGQVY2N7PLdZriHLwUM4AUjrbH2F53Mqc3H4QDKSz3ZkYAuyxbQ7i9k%2FU53djVjA3SCbMXtyBEbMuBkKtmAzKumHjgWAN1IdCHeMCkEOl4qZCL27nX8L8xlAn27Qua72BDf4AkLuYZgl5V2BbiSDEA5jCXSZWA44mJTMsft4aM5Wmxzz7ZJxWxkdpzOl1NseYuo0dFPeyW%2BjasdUF3jSn%2FsIYci%2BeApfnw%2BGI34z67VcUYsxmZrzzTsuo1r8aWJ4LJl36th%2Fn6GhuBe2u04fk5v3F1IkOkcCHL8qNx%2BGeorwbzee7Ho%2Fw4HZqJPyNbyxdKFyDi3TPj1VIKLdySg3M3MNI5MoK5rBotS2FciyA4Est6K3lBDVzRawQJiBQcKF5Qrr42pMnbAEyaF%2F7mcpLQ03ZA%2FFJleDD9RtxH5yWVLc%2BGaMsiT5WWw3UD8DY1ZscBWt1rC2Tc60Sfy2%2FdTcQq8NGP8ku4XTGGwGr90iNTmMMCezcAGOqUB3evJMKV4tqQgR0px%2FTPjLu3SnmeUIsreh2agOG556aoj7OiToh3TgJz4NwIFEDf0my7qiJKvspm2IdRBg9BBdLE8iiL13Bllb%2FzIr%2Ft2wwiPMq6nw7ya%2FDxhCpPP%2Ba5XwBTXq1x9oAG9mvpOYtzotNkLvwTBrpDGW3MNE%2Bwx0fNSVCjxIGxRFQw8w2gLo1tGMbHdJmPQxA5F2CsB%2Bsc6cZwXDXSO&X-Amz-Signature=149cdc24d44c9dd0804aa2c9d58d0f3ff2ff974a7d4d150ca0ded0707886ad46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZU2MFQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDanzNGo4PBUaJE97o8wAoeqiRKzTk21J6NxZADFIosGgIgSl3eXbRMDhFpvFogUR1YXnQ94tAWVBu8JhBp2uoC0OMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmaAFg3pOnryt6CMSrcA2BTxxi3ooA3%2BE5yrv1619mx99LAq%2BFtTGBy2kKeanGpgblp7tl30eBekX%2BkvkWTzelu9quogwaaD4yUR6YbrX5V8ey2ZFXX3eenLQJb4CEoIOLyrHJ6KVT2vIzxnYaf8MpILsCfIO9mny0MBOGQVY2N7PLdZriHLwUM4AUjrbH2F53Mqc3H4QDKSz3ZkYAuyxbQ7i9k%2FU53djVjA3SCbMXtyBEbMuBkKtmAzKumHjgWAN1IdCHeMCkEOl4qZCL27nX8L8xlAn27Qua72BDf4AkLuYZgl5V2BbiSDEA5jCXSZWA44mJTMsft4aM5Wmxzz7ZJxWxkdpzOl1NseYuo0dFPeyW%2BjasdUF3jSn%2FsIYci%2BeApfnw%2BGI34z67VcUYsxmZrzzTsuo1r8aWJ4LJl36th%2Fn6GhuBe2u04fk5v3F1IkOkcCHL8qNx%2BGeorwbzee7Ho%2Fw4HZqJPyNbyxdKFyDi3TPj1VIKLdySg3M3MNI5MoK5rBotS2FciyA4Est6K3lBDVzRawQJiBQcKF5Qrr42pMnbAEyaF%2F7mcpLQ03ZA%2FFJleDD9RtxH5yWVLc%2BGaMsiT5WWw3UD8DY1ZscBWt1rC2Tc60Sfy2%2FdTcQq8NGP8ku4XTGGwGr90iNTmMMCezcAGOqUB3evJMKV4tqQgR0px%2FTPjLu3SnmeUIsreh2agOG556aoj7OiToh3TgJz4NwIFEDf0my7qiJKvspm2IdRBg9BBdLE8iiL13Bllb%2FzIr%2Ft2wwiPMq6nw7ya%2FDxhCpPP%2Ba5XwBTXq1x9oAG9mvpOYtzotNkLvwTBrpDGW3MNE%2Bwx0fNSVCjxIGxRFQw8w2gLo1tGMbHdJmPQxA5F2CsB%2Bsc6cZwXDXSO&X-Amz-Signature=bd2962aeadc95e9be05e2e0c90dbfc7274f1c24da0145c295af86701f1353b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZU2MFQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDanzNGo4PBUaJE97o8wAoeqiRKzTk21J6NxZADFIosGgIgSl3eXbRMDhFpvFogUR1YXnQ94tAWVBu8JhBp2uoC0OMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmaAFg3pOnryt6CMSrcA2BTxxi3ooA3%2BE5yrv1619mx99LAq%2BFtTGBy2kKeanGpgblp7tl30eBekX%2BkvkWTzelu9quogwaaD4yUR6YbrX5V8ey2ZFXX3eenLQJb4CEoIOLyrHJ6KVT2vIzxnYaf8MpILsCfIO9mny0MBOGQVY2N7PLdZriHLwUM4AUjrbH2F53Mqc3H4QDKSz3ZkYAuyxbQ7i9k%2FU53djVjA3SCbMXtyBEbMuBkKtmAzKumHjgWAN1IdCHeMCkEOl4qZCL27nX8L8xlAn27Qua72BDf4AkLuYZgl5V2BbiSDEA5jCXSZWA44mJTMsft4aM5Wmxzz7ZJxWxkdpzOl1NseYuo0dFPeyW%2BjasdUF3jSn%2FsIYci%2BeApfnw%2BGI34z67VcUYsxmZrzzTsuo1r8aWJ4LJl36th%2Fn6GhuBe2u04fk5v3F1IkOkcCHL8qNx%2BGeorwbzee7Ho%2Fw4HZqJPyNbyxdKFyDi3TPj1VIKLdySg3M3MNI5MoK5rBotS2FciyA4Est6K3lBDVzRawQJiBQcKF5Qrr42pMnbAEyaF%2F7mcpLQ03ZA%2FFJleDD9RtxH5yWVLc%2BGaMsiT5WWw3UD8DY1ZscBWt1rC2Tc60Sfy2%2FdTcQq8NGP8ku4XTGGwGr90iNTmMMCezcAGOqUB3evJMKV4tqQgR0px%2FTPjLu3SnmeUIsreh2agOG556aoj7OiToh3TgJz4NwIFEDf0my7qiJKvspm2IdRBg9BBdLE8iiL13Bllb%2FzIr%2Ft2wwiPMq6nw7ya%2FDxhCpPP%2Ba5XwBTXq1x9oAG9mvpOYtzotNkLvwTBrpDGW3MNE%2Bwx0fNSVCjxIGxRFQw8w2gLo1tGMbHdJmPQxA5F2CsB%2Bsc6cZwXDXSO&X-Amz-Signature=7ae2857aeae3fa07c01f2fd56d68746dfee3c47e520f41b0b6cf1f01d985e7f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZU2MFQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDanzNGo4PBUaJE97o8wAoeqiRKzTk21J6NxZADFIosGgIgSl3eXbRMDhFpvFogUR1YXnQ94tAWVBu8JhBp2uoC0OMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmaAFg3pOnryt6CMSrcA2BTxxi3ooA3%2BE5yrv1619mx99LAq%2BFtTGBy2kKeanGpgblp7tl30eBekX%2BkvkWTzelu9quogwaaD4yUR6YbrX5V8ey2ZFXX3eenLQJb4CEoIOLyrHJ6KVT2vIzxnYaf8MpILsCfIO9mny0MBOGQVY2N7PLdZriHLwUM4AUjrbH2F53Mqc3H4QDKSz3ZkYAuyxbQ7i9k%2FU53djVjA3SCbMXtyBEbMuBkKtmAzKumHjgWAN1IdCHeMCkEOl4qZCL27nX8L8xlAn27Qua72BDf4AkLuYZgl5V2BbiSDEA5jCXSZWA44mJTMsft4aM5Wmxzz7ZJxWxkdpzOl1NseYuo0dFPeyW%2BjasdUF3jSn%2FsIYci%2BeApfnw%2BGI34z67VcUYsxmZrzzTsuo1r8aWJ4LJl36th%2Fn6GhuBe2u04fk5v3F1IkOkcCHL8qNx%2BGeorwbzee7Ho%2Fw4HZqJPyNbyxdKFyDi3TPj1VIKLdySg3M3MNI5MoK5rBotS2FciyA4Est6K3lBDVzRawQJiBQcKF5Qrr42pMnbAEyaF%2F7mcpLQ03ZA%2FFJleDD9RtxH5yWVLc%2BGaMsiT5WWw3UD8DY1ZscBWt1rC2Tc60Sfy2%2FdTcQq8NGP8ku4XTGGwGr90iNTmMMCezcAGOqUB3evJMKV4tqQgR0px%2FTPjLu3SnmeUIsreh2agOG556aoj7OiToh3TgJz4NwIFEDf0my7qiJKvspm2IdRBg9BBdLE8iiL13Bllb%2FzIr%2Ft2wwiPMq6nw7ya%2FDxhCpPP%2Ba5XwBTXq1x9oAG9mvpOYtzotNkLvwTBrpDGW3MNE%2Bwx0fNSVCjxIGxRFQw8w2gLo1tGMbHdJmPQxA5F2CsB%2Bsc6cZwXDXSO&X-Amz-Signature=fa19ee07ef6f073fe466f2516b056de50cc60c42eb51b5f02f7ded3fdf976d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZU2MFQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDanzNGo4PBUaJE97o8wAoeqiRKzTk21J6NxZADFIosGgIgSl3eXbRMDhFpvFogUR1YXnQ94tAWVBu8JhBp2uoC0OMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmaAFg3pOnryt6CMSrcA2BTxxi3ooA3%2BE5yrv1619mx99LAq%2BFtTGBy2kKeanGpgblp7tl30eBekX%2BkvkWTzelu9quogwaaD4yUR6YbrX5V8ey2ZFXX3eenLQJb4CEoIOLyrHJ6KVT2vIzxnYaf8MpILsCfIO9mny0MBOGQVY2N7PLdZriHLwUM4AUjrbH2F53Mqc3H4QDKSz3ZkYAuyxbQ7i9k%2FU53djVjA3SCbMXtyBEbMuBkKtmAzKumHjgWAN1IdCHeMCkEOl4qZCL27nX8L8xlAn27Qua72BDf4AkLuYZgl5V2BbiSDEA5jCXSZWA44mJTMsft4aM5Wmxzz7ZJxWxkdpzOl1NseYuo0dFPeyW%2BjasdUF3jSn%2FsIYci%2BeApfnw%2BGI34z67VcUYsxmZrzzTsuo1r8aWJ4LJl36th%2Fn6GhuBe2u04fk5v3F1IkOkcCHL8qNx%2BGeorwbzee7Ho%2Fw4HZqJPyNbyxdKFyDi3TPj1VIKLdySg3M3MNI5MoK5rBotS2FciyA4Est6K3lBDVzRawQJiBQcKF5Qrr42pMnbAEyaF%2F7mcpLQ03ZA%2FFJleDD9RtxH5yWVLc%2BGaMsiT5WWw3UD8DY1ZscBWt1rC2Tc60Sfy2%2FdTcQq8NGP8ku4XTGGwGr90iNTmMMCezcAGOqUB3evJMKV4tqQgR0px%2FTPjLu3SnmeUIsreh2agOG556aoj7OiToh3TgJz4NwIFEDf0my7qiJKvspm2IdRBg9BBdLE8iiL13Bllb%2FzIr%2Ft2wwiPMq6nw7ya%2FDxhCpPP%2Ba5XwBTXq1x9oAG9mvpOYtzotNkLvwTBrpDGW3MNE%2Bwx0fNSVCjxIGxRFQw8w2gLo1tGMbHdJmPQxA5F2CsB%2Bsc6cZwXDXSO&X-Amz-Signature=a697d7c2ffa01548510e264e940554c5330a455d4d4d9d5d46615e50a9da6aea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZU2MFQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDanzNGo4PBUaJE97o8wAoeqiRKzTk21J6NxZADFIosGgIgSl3eXbRMDhFpvFogUR1YXnQ94tAWVBu8JhBp2uoC0OMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmaAFg3pOnryt6CMSrcA2BTxxi3ooA3%2BE5yrv1619mx99LAq%2BFtTGBy2kKeanGpgblp7tl30eBekX%2BkvkWTzelu9quogwaaD4yUR6YbrX5V8ey2ZFXX3eenLQJb4CEoIOLyrHJ6KVT2vIzxnYaf8MpILsCfIO9mny0MBOGQVY2N7PLdZriHLwUM4AUjrbH2F53Mqc3H4QDKSz3ZkYAuyxbQ7i9k%2FU53djVjA3SCbMXtyBEbMuBkKtmAzKumHjgWAN1IdCHeMCkEOl4qZCL27nX8L8xlAn27Qua72BDf4AkLuYZgl5V2BbiSDEA5jCXSZWA44mJTMsft4aM5Wmxzz7ZJxWxkdpzOl1NseYuo0dFPeyW%2BjasdUF3jSn%2FsIYci%2BeApfnw%2BGI34z67VcUYsxmZrzzTsuo1r8aWJ4LJl36th%2Fn6GhuBe2u04fk5v3F1IkOkcCHL8qNx%2BGeorwbzee7Ho%2Fw4HZqJPyNbyxdKFyDi3TPj1VIKLdySg3M3MNI5MoK5rBotS2FciyA4Est6K3lBDVzRawQJiBQcKF5Qrr42pMnbAEyaF%2F7mcpLQ03ZA%2FFJleDD9RtxH5yWVLc%2BGaMsiT5WWw3UD8DY1ZscBWt1rC2Tc60Sfy2%2FdTcQq8NGP8ku4XTGGwGr90iNTmMMCezcAGOqUB3evJMKV4tqQgR0px%2FTPjLu3SnmeUIsreh2agOG556aoj7OiToh3TgJz4NwIFEDf0my7qiJKvspm2IdRBg9BBdLE8iiL13Bllb%2FzIr%2Ft2wwiPMq6nw7ya%2FDxhCpPP%2Ba5XwBTXq1x9oAG9mvpOYtzotNkLvwTBrpDGW3MNE%2Bwx0fNSVCjxIGxRFQw8w2gLo1tGMbHdJmPQxA5F2CsB%2Bsc6cZwXDXSO&X-Amz-Signature=824bcd612438b1f55a2c3c21abfe279be5b1bdd19edb3e204f10bd9f38852f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZU2MFQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDanzNGo4PBUaJE97o8wAoeqiRKzTk21J6NxZADFIosGgIgSl3eXbRMDhFpvFogUR1YXnQ94tAWVBu8JhBp2uoC0OMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmaAFg3pOnryt6CMSrcA2BTxxi3ooA3%2BE5yrv1619mx99LAq%2BFtTGBy2kKeanGpgblp7tl30eBekX%2BkvkWTzelu9quogwaaD4yUR6YbrX5V8ey2ZFXX3eenLQJb4CEoIOLyrHJ6KVT2vIzxnYaf8MpILsCfIO9mny0MBOGQVY2N7PLdZriHLwUM4AUjrbH2F53Mqc3H4QDKSz3ZkYAuyxbQ7i9k%2FU53djVjA3SCbMXtyBEbMuBkKtmAzKumHjgWAN1IdCHeMCkEOl4qZCL27nX8L8xlAn27Qua72BDf4AkLuYZgl5V2BbiSDEA5jCXSZWA44mJTMsft4aM5Wmxzz7ZJxWxkdpzOl1NseYuo0dFPeyW%2BjasdUF3jSn%2FsIYci%2BeApfnw%2BGI34z67VcUYsxmZrzzTsuo1r8aWJ4LJl36th%2Fn6GhuBe2u04fk5v3F1IkOkcCHL8qNx%2BGeorwbzee7Ho%2Fw4HZqJPyNbyxdKFyDi3TPj1VIKLdySg3M3MNI5MoK5rBotS2FciyA4Est6K3lBDVzRawQJiBQcKF5Qrr42pMnbAEyaF%2F7mcpLQ03ZA%2FFJleDD9RtxH5yWVLc%2BGaMsiT5WWw3UD8DY1ZscBWt1rC2Tc60Sfy2%2FdTcQq8NGP8ku4XTGGwGr90iNTmMMCezcAGOqUB3evJMKV4tqQgR0px%2FTPjLu3SnmeUIsreh2agOG556aoj7OiToh3TgJz4NwIFEDf0my7qiJKvspm2IdRBg9BBdLE8iiL13Bllb%2FzIr%2Ft2wwiPMq6nw7ya%2FDxhCpPP%2Ba5XwBTXq1x9oAG9mvpOYtzotNkLvwTBrpDGW3MNE%2Bwx0fNSVCjxIGxRFQw8w2gLo1tGMbHdJmPQxA5F2CsB%2Bsc6cZwXDXSO&X-Amz-Signature=e768b3786811532ba5dce9f529c894774a21b97af4acc5e6a7ccca641b481ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZU2MFQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDanzNGo4PBUaJE97o8wAoeqiRKzTk21J6NxZADFIosGgIgSl3eXbRMDhFpvFogUR1YXnQ94tAWVBu8JhBp2uoC0OMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmaAFg3pOnryt6CMSrcA2BTxxi3ooA3%2BE5yrv1619mx99LAq%2BFtTGBy2kKeanGpgblp7tl30eBekX%2BkvkWTzelu9quogwaaD4yUR6YbrX5V8ey2ZFXX3eenLQJb4CEoIOLyrHJ6KVT2vIzxnYaf8MpILsCfIO9mny0MBOGQVY2N7PLdZriHLwUM4AUjrbH2F53Mqc3H4QDKSz3ZkYAuyxbQ7i9k%2FU53djVjA3SCbMXtyBEbMuBkKtmAzKumHjgWAN1IdCHeMCkEOl4qZCL27nX8L8xlAn27Qua72BDf4AkLuYZgl5V2BbiSDEA5jCXSZWA44mJTMsft4aM5Wmxzz7ZJxWxkdpzOl1NseYuo0dFPeyW%2BjasdUF3jSn%2FsIYci%2BeApfnw%2BGI34z67VcUYsxmZrzzTsuo1r8aWJ4LJl36th%2Fn6GhuBe2u04fk5v3F1IkOkcCHL8qNx%2BGeorwbzee7Ho%2Fw4HZqJPyNbyxdKFyDi3TPj1VIKLdySg3M3MNI5MoK5rBotS2FciyA4Est6K3lBDVzRawQJiBQcKF5Qrr42pMnbAEyaF%2F7mcpLQ03ZA%2FFJleDD9RtxH5yWVLc%2BGaMsiT5WWw3UD8DY1ZscBWt1rC2Tc60Sfy2%2FdTcQq8NGP8ku4XTGGwGr90iNTmMMCezcAGOqUB3evJMKV4tqQgR0px%2FTPjLu3SnmeUIsreh2agOG556aoj7OiToh3TgJz4NwIFEDf0my7qiJKvspm2IdRBg9BBdLE8iiL13Bllb%2FzIr%2Ft2wwiPMq6nw7ya%2FDxhCpPP%2Ba5XwBTXq1x9oAG9mvpOYtzotNkLvwTBrpDGW3MNE%2Bwx0fNSVCjxIGxRFQw8w2gLo1tGMbHdJmPQxA5F2CsB%2Bsc6cZwXDXSO&X-Amz-Signature=fba1e592fa67e56178d41bc766626f655a5a6b01a012a99df5bcf972b68007db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
