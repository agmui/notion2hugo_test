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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEMUCDF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHu5g5B%2FUstwMmUyrlYRzc3zjJoH8L7tjGVn8wsdV8yzAiEA%2FY3CeCyS2giFo0hdpHNrUpisYdmLQOyh0sNvK6sqgZ8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzjMt8IyzOLMvKLfyrcA%2Fy8%2B8sKtHrclPvnZ9rAri%2BvedN88IigrFsGDfrqSn1ghI70p0PTlvte7jat8dfhBkz9Ti6WfXrDRVrAqtajH3GVffH5ocO6NbAIblZ6zF82y4UC6g7rE3Z4F1iKa7t%2F8%2Bb8QsUQriAKcnZ21PhLHKOsFpc6q4LP6XVQq40TaJEE6sa0fCtOmXXl34DyZctftmNyDvVOVSa7PriEGTVOjppII1SZsoiYWCFIwdj4EUiA9bgWbbv%2FdSgm%2BMZNxOCIBszW%2BQEF5Zf%2BERABl7YkB4eQmXlNHdyrvgSentgCakhQkgG%2FnAdsHcRotZUrIo4dA%2BOKvQx8lqbH9xUxLAK8UPx87UaUYIJfFFUD5h29UtodUsfN4ZgjUlrAChkW5D8XfyvaVgX9BV67gyH9mjvcDP7B5GTCktBTeE6v8A%2FOz0dF9tIIjmDY2qgpBK3%2BQtgzJoLzdD1VlaeWUdO98Ww%2BRc0e1AIz%2FRlrFL5dmN8zG8%2FmHVewDMw5JdZoxZTTIcL25GHSoZjM2PUrgrOssB2hAncPy2WkFefmN%2B1rbO%2FLNxND3ihl4Uv7SK%2FL5DeT0B%2Fgl7vlloJWeWWAhVFg7rcpA%2FYMEnubbEHVBBTfelq2GlLOOG8JfAIMz8P34Tw2MJS6i74GOqUB70vAFDi9SDBJID0aR5y9UqC8ZbGoSPRreTXXMdKwV8BAXYSUx%2B0Jto%2BwmDMiTXDBY%2BEETyyU1Uz%2BqFw1ZBiyM4e405lA26pws4cqM9vxyL6w44ailLqGQWpgvRxpemWPj4Xdcrysczu4HgVBwlsqc5Hjaw4rj6O9ehcrrHPJBIsnFxclzZwpU6%2FAVG9Gf7g14t%2BgVWM2dEkP0CgVcHduMcrukpVE&X-Amz-Signature=ab164a267a0ec7d0685ea2d76ec4cc649219e369850eab658c3cfef5815966e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEMUCDF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHu5g5B%2FUstwMmUyrlYRzc3zjJoH8L7tjGVn8wsdV8yzAiEA%2FY3CeCyS2giFo0hdpHNrUpisYdmLQOyh0sNvK6sqgZ8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzjMt8IyzOLMvKLfyrcA%2Fy8%2B8sKtHrclPvnZ9rAri%2BvedN88IigrFsGDfrqSn1ghI70p0PTlvte7jat8dfhBkz9Ti6WfXrDRVrAqtajH3GVffH5ocO6NbAIblZ6zF82y4UC6g7rE3Z4F1iKa7t%2F8%2Bb8QsUQriAKcnZ21PhLHKOsFpc6q4LP6XVQq40TaJEE6sa0fCtOmXXl34DyZctftmNyDvVOVSa7PriEGTVOjppII1SZsoiYWCFIwdj4EUiA9bgWbbv%2FdSgm%2BMZNxOCIBszW%2BQEF5Zf%2BERABl7YkB4eQmXlNHdyrvgSentgCakhQkgG%2FnAdsHcRotZUrIo4dA%2BOKvQx8lqbH9xUxLAK8UPx87UaUYIJfFFUD5h29UtodUsfN4ZgjUlrAChkW5D8XfyvaVgX9BV67gyH9mjvcDP7B5GTCktBTeE6v8A%2FOz0dF9tIIjmDY2qgpBK3%2BQtgzJoLzdD1VlaeWUdO98Ww%2BRc0e1AIz%2FRlrFL5dmN8zG8%2FmHVewDMw5JdZoxZTTIcL25GHSoZjM2PUrgrOssB2hAncPy2WkFefmN%2B1rbO%2FLNxND3ihl4Uv7SK%2FL5DeT0B%2Fgl7vlloJWeWWAhVFg7rcpA%2FYMEnubbEHVBBTfelq2GlLOOG8JfAIMz8P34Tw2MJS6i74GOqUB70vAFDi9SDBJID0aR5y9UqC8ZbGoSPRreTXXMdKwV8BAXYSUx%2B0Jto%2BwmDMiTXDBY%2BEETyyU1Uz%2BqFw1ZBiyM4e405lA26pws4cqM9vxyL6w44ailLqGQWpgvRxpemWPj4Xdcrysczu4HgVBwlsqc5Hjaw4rj6O9ehcrrHPJBIsnFxclzZwpU6%2FAVG9Gf7g14t%2BgVWM2dEkP0CgVcHduMcrukpVE&X-Amz-Signature=b69e9f7db6971a265110e71ad3c41ebe2ef0b537ec9d8719563581e419e290d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEMUCDF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHu5g5B%2FUstwMmUyrlYRzc3zjJoH8L7tjGVn8wsdV8yzAiEA%2FY3CeCyS2giFo0hdpHNrUpisYdmLQOyh0sNvK6sqgZ8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzjMt8IyzOLMvKLfyrcA%2Fy8%2B8sKtHrclPvnZ9rAri%2BvedN88IigrFsGDfrqSn1ghI70p0PTlvte7jat8dfhBkz9Ti6WfXrDRVrAqtajH3GVffH5ocO6NbAIblZ6zF82y4UC6g7rE3Z4F1iKa7t%2F8%2Bb8QsUQriAKcnZ21PhLHKOsFpc6q4LP6XVQq40TaJEE6sa0fCtOmXXl34DyZctftmNyDvVOVSa7PriEGTVOjppII1SZsoiYWCFIwdj4EUiA9bgWbbv%2FdSgm%2BMZNxOCIBszW%2BQEF5Zf%2BERABl7YkB4eQmXlNHdyrvgSentgCakhQkgG%2FnAdsHcRotZUrIo4dA%2BOKvQx8lqbH9xUxLAK8UPx87UaUYIJfFFUD5h29UtodUsfN4ZgjUlrAChkW5D8XfyvaVgX9BV67gyH9mjvcDP7B5GTCktBTeE6v8A%2FOz0dF9tIIjmDY2qgpBK3%2BQtgzJoLzdD1VlaeWUdO98Ww%2BRc0e1AIz%2FRlrFL5dmN8zG8%2FmHVewDMw5JdZoxZTTIcL25GHSoZjM2PUrgrOssB2hAncPy2WkFefmN%2B1rbO%2FLNxND3ihl4Uv7SK%2FL5DeT0B%2Fgl7vlloJWeWWAhVFg7rcpA%2FYMEnubbEHVBBTfelq2GlLOOG8JfAIMz8P34Tw2MJS6i74GOqUB70vAFDi9SDBJID0aR5y9UqC8ZbGoSPRreTXXMdKwV8BAXYSUx%2B0Jto%2BwmDMiTXDBY%2BEETyyU1Uz%2BqFw1ZBiyM4e405lA26pws4cqM9vxyL6w44ailLqGQWpgvRxpemWPj4Xdcrysczu4HgVBwlsqc5Hjaw4rj6O9ehcrrHPJBIsnFxclzZwpU6%2FAVG9Gf7g14t%2BgVWM2dEkP0CgVcHduMcrukpVE&X-Amz-Signature=9ecf70338a9a076636c1d37406b6acbedd552698f05c5f4c7141663aeab023b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEMUCDF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHu5g5B%2FUstwMmUyrlYRzc3zjJoH8L7tjGVn8wsdV8yzAiEA%2FY3CeCyS2giFo0hdpHNrUpisYdmLQOyh0sNvK6sqgZ8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzjMt8IyzOLMvKLfyrcA%2Fy8%2B8sKtHrclPvnZ9rAri%2BvedN88IigrFsGDfrqSn1ghI70p0PTlvte7jat8dfhBkz9Ti6WfXrDRVrAqtajH3GVffH5ocO6NbAIblZ6zF82y4UC6g7rE3Z4F1iKa7t%2F8%2Bb8QsUQriAKcnZ21PhLHKOsFpc6q4LP6XVQq40TaJEE6sa0fCtOmXXl34DyZctftmNyDvVOVSa7PriEGTVOjppII1SZsoiYWCFIwdj4EUiA9bgWbbv%2FdSgm%2BMZNxOCIBszW%2BQEF5Zf%2BERABl7YkB4eQmXlNHdyrvgSentgCakhQkgG%2FnAdsHcRotZUrIo4dA%2BOKvQx8lqbH9xUxLAK8UPx87UaUYIJfFFUD5h29UtodUsfN4ZgjUlrAChkW5D8XfyvaVgX9BV67gyH9mjvcDP7B5GTCktBTeE6v8A%2FOz0dF9tIIjmDY2qgpBK3%2BQtgzJoLzdD1VlaeWUdO98Ww%2BRc0e1AIz%2FRlrFL5dmN8zG8%2FmHVewDMw5JdZoxZTTIcL25GHSoZjM2PUrgrOssB2hAncPy2WkFefmN%2B1rbO%2FLNxND3ihl4Uv7SK%2FL5DeT0B%2Fgl7vlloJWeWWAhVFg7rcpA%2FYMEnubbEHVBBTfelq2GlLOOG8JfAIMz8P34Tw2MJS6i74GOqUB70vAFDi9SDBJID0aR5y9UqC8ZbGoSPRreTXXMdKwV8BAXYSUx%2B0Jto%2BwmDMiTXDBY%2BEETyyU1Uz%2BqFw1ZBiyM4e405lA26pws4cqM9vxyL6w44ailLqGQWpgvRxpemWPj4Xdcrysczu4HgVBwlsqc5Hjaw4rj6O9ehcrrHPJBIsnFxclzZwpU6%2FAVG9Gf7g14t%2BgVWM2dEkP0CgVcHduMcrukpVE&X-Amz-Signature=7c3359c3eea7371030bf1b27f79f8b0a1adad8944b175dd777936a7543fecbf4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEMUCDF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHu5g5B%2FUstwMmUyrlYRzc3zjJoH8L7tjGVn8wsdV8yzAiEA%2FY3CeCyS2giFo0hdpHNrUpisYdmLQOyh0sNvK6sqgZ8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzjMt8IyzOLMvKLfyrcA%2Fy8%2B8sKtHrclPvnZ9rAri%2BvedN88IigrFsGDfrqSn1ghI70p0PTlvte7jat8dfhBkz9Ti6WfXrDRVrAqtajH3GVffH5ocO6NbAIblZ6zF82y4UC6g7rE3Z4F1iKa7t%2F8%2Bb8QsUQriAKcnZ21PhLHKOsFpc6q4LP6XVQq40TaJEE6sa0fCtOmXXl34DyZctftmNyDvVOVSa7PriEGTVOjppII1SZsoiYWCFIwdj4EUiA9bgWbbv%2FdSgm%2BMZNxOCIBszW%2BQEF5Zf%2BERABl7YkB4eQmXlNHdyrvgSentgCakhQkgG%2FnAdsHcRotZUrIo4dA%2BOKvQx8lqbH9xUxLAK8UPx87UaUYIJfFFUD5h29UtodUsfN4ZgjUlrAChkW5D8XfyvaVgX9BV67gyH9mjvcDP7B5GTCktBTeE6v8A%2FOz0dF9tIIjmDY2qgpBK3%2BQtgzJoLzdD1VlaeWUdO98Ww%2BRc0e1AIz%2FRlrFL5dmN8zG8%2FmHVewDMw5JdZoxZTTIcL25GHSoZjM2PUrgrOssB2hAncPy2WkFefmN%2B1rbO%2FLNxND3ihl4Uv7SK%2FL5DeT0B%2Fgl7vlloJWeWWAhVFg7rcpA%2FYMEnubbEHVBBTfelq2GlLOOG8JfAIMz8P34Tw2MJS6i74GOqUB70vAFDi9SDBJID0aR5y9UqC8ZbGoSPRreTXXMdKwV8BAXYSUx%2B0Jto%2BwmDMiTXDBY%2BEETyyU1Uz%2BqFw1ZBiyM4e405lA26pws4cqM9vxyL6w44ailLqGQWpgvRxpemWPj4Xdcrysczu4HgVBwlsqc5Hjaw4rj6O9ehcrrHPJBIsnFxclzZwpU6%2FAVG9Gf7g14t%2BgVWM2dEkP0CgVcHduMcrukpVE&X-Amz-Signature=ef42fe04deac24bf513af145e0cb279511ce7eeb68bef2cd65c906d196c0edb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEMUCDF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHu5g5B%2FUstwMmUyrlYRzc3zjJoH8L7tjGVn8wsdV8yzAiEA%2FY3CeCyS2giFo0hdpHNrUpisYdmLQOyh0sNvK6sqgZ8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzjMt8IyzOLMvKLfyrcA%2Fy8%2B8sKtHrclPvnZ9rAri%2BvedN88IigrFsGDfrqSn1ghI70p0PTlvte7jat8dfhBkz9Ti6WfXrDRVrAqtajH3GVffH5ocO6NbAIblZ6zF82y4UC6g7rE3Z4F1iKa7t%2F8%2Bb8QsUQriAKcnZ21PhLHKOsFpc6q4LP6XVQq40TaJEE6sa0fCtOmXXl34DyZctftmNyDvVOVSa7PriEGTVOjppII1SZsoiYWCFIwdj4EUiA9bgWbbv%2FdSgm%2BMZNxOCIBszW%2BQEF5Zf%2BERABl7YkB4eQmXlNHdyrvgSentgCakhQkgG%2FnAdsHcRotZUrIo4dA%2BOKvQx8lqbH9xUxLAK8UPx87UaUYIJfFFUD5h29UtodUsfN4ZgjUlrAChkW5D8XfyvaVgX9BV67gyH9mjvcDP7B5GTCktBTeE6v8A%2FOz0dF9tIIjmDY2qgpBK3%2BQtgzJoLzdD1VlaeWUdO98Ww%2BRc0e1AIz%2FRlrFL5dmN8zG8%2FmHVewDMw5JdZoxZTTIcL25GHSoZjM2PUrgrOssB2hAncPy2WkFefmN%2B1rbO%2FLNxND3ihl4Uv7SK%2FL5DeT0B%2Fgl7vlloJWeWWAhVFg7rcpA%2FYMEnubbEHVBBTfelq2GlLOOG8JfAIMz8P34Tw2MJS6i74GOqUB70vAFDi9SDBJID0aR5y9UqC8ZbGoSPRreTXXMdKwV8BAXYSUx%2B0Jto%2BwmDMiTXDBY%2BEETyyU1Uz%2BqFw1ZBiyM4e405lA26pws4cqM9vxyL6w44ailLqGQWpgvRxpemWPj4Xdcrysczu4HgVBwlsqc5Hjaw4rj6O9ehcrrHPJBIsnFxclzZwpU6%2FAVG9Gf7g14t%2BgVWM2dEkP0CgVcHduMcrukpVE&X-Amz-Signature=51acfa4ca2b3a3ebd3fcc60742b1ce0613e1d2cc4e381aa618f1f4a374e8bc8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEMUCDF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHu5g5B%2FUstwMmUyrlYRzc3zjJoH8L7tjGVn8wsdV8yzAiEA%2FY3CeCyS2giFo0hdpHNrUpisYdmLQOyh0sNvK6sqgZ8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzjMt8IyzOLMvKLfyrcA%2Fy8%2B8sKtHrclPvnZ9rAri%2BvedN88IigrFsGDfrqSn1ghI70p0PTlvte7jat8dfhBkz9Ti6WfXrDRVrAqtajH3GVffH5ocO6NbAIblZ6zF82y4UC6g7rE3Z4F1iKa7t%2F8%2Bb8QsUQriAKcnZ21PhLHKOsFpc6q4LP6XVQq40TaJEE6sa0fCtOmXXl34DyZctftmNyDvVOVSa7PriEGTVOjppII1SZsoiYWCFIwdj4EUiA9bgWbbv%2FdSgm%2BMZNxOCIBszW%2BQEF5Zf%2BERABl7YkB4eQmXlNHdyrvgSentgCakhQkgG%2FnAdsHcRotZUrIo4dA%2BOKvQx8lqbH9xUxLAK8UPx87UaUYIJfFFUD5h29UtodUsfN4ZgjUlrAChkW5D8XfyvaVgX9BV67gyH9mjvcDP7B5GTCktBTeE6v8A%2FOz0dF9tIIjmDY2qgpBK3%2BQtgzJoLzdD1VlaeWUdO98Ww%2BRc0e1AIz%2FRlrFL5dmN8zG8%2FmHVewDMw5JdZoxZTTIcL25GHSoZjM2PUrgrOssB2hAncPy2WkFefmN%2B1rbO%2FLNxND3ihl4Uv7SK%2FL5DeT0B%2Fgl7vlloJWeWWAhVFg7rcpA%2FYMEnubbEHVBBTfelq2GlLOOG8JfAIMz8P34Tw2MJS6i74GOqUB70vAFDi9SDBJID0aR5y9UqC8ZbGoSPRreTXXMdKwV8BAXYSUx%2B0Jto%2BwmDMiTXDBY%2BEETyyU1Uz%2BqFw1ZBiyM4e405lA26pws4cqM9vxyL6w44ailLqGQWpgvRxpemWPj4Xdcrysczu4HgVBwlsqc5Hjaw4rj6O9ehcrrHPJBIsnFxclzZwpU6%2FAVG9Gf7g14t%2BgVWM2dEkP0CgVcHduMcrukpVE&X-Amz-Signature=54bc2dc9b56ef8d4b043f3e2c7ac6d795ee2d8e7d126e234762b4128e0d7f389&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEMUCDF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHu5g5B%2FUstwMmUyrlYRzc3zjJoH8L7tjGVn8wsdV8yzAiEA%2FY3CeCyS2giFo0hdpHNrUpisYdmLQOyh0sNvK6sqgZ8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzjMt8IyzOLMvKLfyrcA%2Fy8%2B8sKtHrclPvnZ9rAri%2BvedN88IigrFsGDfrqSn1ghI70p0PTlvte7jat8dfhBkz9Ti6WfXrDRVrAqtajH3GVffH5ocO6NbAIblZ6zF82y4UC6g7rE3Z4F1iKa7t%2F8%2Bb8QsUQriAKcnZ21PhLHKOsFpc6q4LP6XVQq40TaJEE6sa0fCtOmXXl34DyZctftmNyDvVOVSa7PriEGTVOjppII1SZsoiYWCFIwdj4EUiA9bgWbbv%2FdSgm%2BMZNxOCIBszW%2BQEF5Zf%2BERABl7YkB4eQmXlNHdyrvgSentgCakhQkgG%2FnAdsHcRotZUrIo4dA%2BOKvQx8lqbH9xUxLAK8UPx87UaUYIJfFFUD5h29UtodUsfN4ZgjUlrAChkW5D8XfyvaVgX9BV67gyH9mjvcDP7B5GTCktBTeE6v8A%2FOz0dF9tIIjmDY2qgpBK3%2BQtgzJoLzdD1VlaeWUdO98Ww%2BRc0e1AIz%2FRlrFL5dmN8zG8%2FmHVewDMw5JdZoxZTTIcL25GHSoZjM2PUrgrOssB2hAncPy2WkFefmN%2B1rbO%2FLNxND3ihl4Uv7SK%2FL5DeT0B%2Fgl7vlloJWeWWAhVFg7rcpA%2FYMEnubbEHVBBTfelq2GlLOOG8JfAIMz8P34Tw2MJS6i74GOqUB70vAFDi9SDBJID0aR5y9UqC8ZbGoSPRreTXXMdKwV8BAXYSUx%2B0Jto%2BwmDMiTXDBY%2BEETyyU1Uz%2BqFw1ZBiyM4e405lA26pws4cqM9vxyL6w44ailLqGQWpgvRxpemWPj4Xdcrysczu4HgVBwlsqc5Hjaw4rj6O9ehcrrHPJBIsnFxclzZwpU6%2FAVG9Gf7g14t%2BgVWM2dEkP0CgVcHduMcrukpVE&X-Amz-Signature=ab8ce3fdcc2856bb8d8d1eaa48ed51ad2fb3aa1108b7e314b6524d66f7e2e165&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
