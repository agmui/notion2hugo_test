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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBTCY6Q%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCKwAGh%2F5hFi5%2Bil%2BPRe0S63psGjc20uxShkTf3yyifMwIgZjWDh0MzuzbVaX4dTEVDbs38bB7kIvphiEXBzGmiBrcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYyl2JBNrOxl3ua7ircA6c5ZdyL%2BrctnmAxSeVxYtd864sj6etrhC4H1C4vIU8KZTZxqDQzbsV%2BhN4Gd4aHqeiWo5fCrZez747jub78aV5mreWQfsHng4FOlNk9%2FkNwQIEHBm94drLIozqXp6RJ64eFMF9jqJu6csLoNYXE96N1zxqEkNXeuWzGmeC3swLiybc3yxRpCUJnv%2FHmMkR0EB07W5oVSZtj4Cjp7Zl8XQkbzWjD6uYpxaKgP%2FaZme73uXPboxPm%2BQfJoLcfyqLPfT5HVe9Vjrz%2BJe0jFQo3E7Fhcc%2BuZSIh1nk97WwilPORxNI34muGwdJPkVB3MAXjLK6u0ytKhm009yHnbq5O543T9hR5c7sEjBzJOGb8beaBVWmULxNx08t3CSfQWlOa6pOqvIRfklqP1f0%2Bw2UPPia3fqSwpfTgZY%2BxLv%2BBr8V2HmYCM3p6Uim25xVkL05CsReKDQF%2FNd9boqCGY0LMExSfdFnsHkz6q0tmU81ijVNUL4RGJMr1wA%2BcifNy1B5vE2tErMHpP7k5t2lMnekG2I9NsaBZZJKFv7m75D6fVYwWDQGgykwT9yVraMKJKbGXPgF5RBBLDASEOswGWq%2FqqQG0t%2BJMA390zqMQhB6nu844TwlnyijrMqlS9%2FfFMKLVn8AGOqUBlDUN9cmRIeE46PtpS5OPB34bToVLPGoT11wk3m55Bu%2BKa2%2B9eCneuXRTpLwcuWEtCTtsElkNjXnwNDM%2FEw4D2BcTuNbejeoQxV53K1DU4FsFSEHky%2F9QiH8y6XbFovi9PQ%2BtFfwrM4Z5fZELoxF%2FwdbaokEg1mFOQRKs3RD3IeAMuxKqiFdWk2bVjKilwZ4WKjrOpN0fYo3vBRoV%2Fi8vV5vuAyDF&X-Amz-Signature=8e070b011b34b992ef4a62bdead3f187c0d49ac5bc3bbf9363ebe64cc33951d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBTCY6Q%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCKwAGh%2F5hFi5%2Bil%2BPRe0S63psGjc20uxShkTf3yyifMwIgZjWDh0MzuzbVaX4dTEVDbs38bB7kIvphiEXBzGmiBrcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYyl2JBNrOxl3ua7ircA6c5ZdyL%2BrctnmAxSeVxYtd864sj6etrhC4H1C4vIU8KZTZxqDQzbsV%2BhN4Gd4aHqeiWo5fCrZez747jub78aV5mreWQfsHng4FOlNk9%2FkNwQIEHBm94drLIozqXp6RJ64eFMF9jqJu6csLoNYXE96N1zxqEkNXeuWzGmeC3swLiybc3yxRpCUJnv%2FHmMkR0EB07W5oVSZtj4Cjp7Zl8XQkbzWjD6uYpxaKgP%2FaZme73uXPboxPm%2BQfJoLcfyqLPfT5HVe9Vjrz%2BJe0jFQo3E7Fhcc%2BuZSIh1nk97WwilPORxNI34muGwdJPkVB3MAXjLK6u0ytKhm009yHnbq5O543T9hR5c7sEjBzJOGb8beaBVWmULxNx08t3CSfQWlOa6pOqvIRfklqP1f0%2Bw2UPPia3fqSwpfTgZY%2BxLv%2BBr8V2HmYCM3p6Uim25xVkL05CsReKDQF%2FNd9boqCGY0LMExSfdFnsHkz6q0tmU81ijVNUL4RGJMr1wA%2BcifNy1B5vE2tErMHpP7k5t2lMnekG2I9NsaBZZJKFv7m75D6fVYwWDQGgykwT9yVraMKJKbGXPgF5RBBLDASEOswGWq%2FqqQG0t%2BJMA390zqMQhB6nu844TwlnyijrMqlS9%2FfFMKLVn8AGOqUBlDUN9cmRIeE46PtpS5OPB34bToVLPGoT11wk3m55Bu%2BKa2%2B9eCneuXRTpLwcuWEtCTtsElkNjXnwNDM%2FEw4D2BcTuNbejeoQxV53K1DU4FsFSEHky%2F9QiH8y6XbFovi9PQ%2BtFfwrM4Z5fZELoxF%2FwdbaokEg1mFOQRKs3RD3IeAMuxKqiFdWk2bVjKilwZ4WKjrOpN0fYo3vBRoV%2Fi8vV5vuAyDF&X-Amz-Signature=3e24b2e3b5267fd7c46557e33d8011340c05fe59040abd83e34bcd719a0904fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBTCY6Q%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCKwAGh%2F5hFi5%2Bil%2BPRe0S63psGjc20uxShkTf3yyifMwIgZjWDh0MzuzbVaX4dTEVDbs38bB7kIvphiEXBzGmiBrcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYyl2JBNrOxl3ua7ircA6c5ZdyL%2BrctnmAxSeVxYtd864sj6etrhC4H1C4vIU8KZTZxqDQzbsV%2BhN4Gd4aHqeiWo5fCrZez747jub78aV5mreWQfsHng4FOlNk9%2FkNwQIEHBm94drLIozqXp6RJ64eFMF9jqJu6csLoNYXE96N1zxqEkNXeuWzGmeC3swLiybc3yxRpCUJnv%2FHmMkR0EB07W5oVSZtj4Cjp7Zl8XQkbzWjD6uYpxaKgP%2FaZme73uXPboxPm%2BQfJoLcfyqLPfT5HVe9Vjrz%2BJe0jFQo3E7Fhcc%2BuZSIh1nk97WwilPORxNI34muGwdJPkVB3MAXjLK6u0ytKhm009yHnbq5O543T9hR5c7sEjBzJOGb8beaBVWmULxNx08t3CSfQWlOa6pOqvIRfklqP1f0%2Bw2UPPia3fqSwpfTgZY%2BxLv%2BBr8V2HmYCM3p6Uim25xVkL05CsReKDQF%2FNd9boqCGY0LMExSfdFnsHkz6q0tmU81ijVNUL4RGJMr1wA%2BcifNy1B5vE2tErMHpP7k5t2lMnekG2I9NsaBZZJKFv7m75D6fVYwWDQGgykwT9yVraMKJKbGXPgF5RBBLDASEOswGWq%2FqqQG0t%2BJMA390zqMQhB6nu844TwlnyijrMqlS9%2FfFMKLVn8AGOqUBlDUN9cmRIeE46PtpS5OPB34bToVLPGoT11wk3m55Bu%2BKa2%2B9eCneuXRTpLwcuWEtCTtsElkNjXnwNDM%2FEw4D2BcTuNbejeoQxV53K1DU4FsFSEHky%2F9QiH8y6XbFovi9PQ%2BtFfwrM4Z5fZELoxF%2FwdbaokEg1mFOQRKs3RD3IeAMuxKqiFdWk2bVjKilwZ4WKjrOpN0fYo3vBRoV%2Fi8vV5vuAyDF&X-Amz-Signature=5ef0d3f9aa62b18c988fabbbf9e8917167127e8b2d21da8a83a6cc0074280a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBTCY6Q%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCKwAGh%2F5hFi5%2Bil%2BPRe0S63psGjc20uxShkTf3yyifMwIgZjWDh0MzuzbVaX4dTEVDbs38bB7kIvphiEXBzGmiBrcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYyl2JBNrOxl3ua7ircA6c5ZdyL%2BrctnmAxSeVxYtd864sj6etrhC4H1C4vIU8KZTZxqDQzbsV%2BhN4Gd4aHqeiWo5fCrZez747jub78aV5mreWQfsHng4FOlNk9%2FkNwQIEHBm94drLIozqXp6RJ64eFMF9jqJu6csLoNYXE96N1zxqEkNXeuWzGmeC3swLiybc3yxRpCUJnv%2FHmMkR0EB07W5oVSZtj4Cjp7Zl8XQkbzWjD6uYpxaKgP%2FaZme73uXPboxPm%2BQfJoLcfyqLPfT5HVe9Vjrz%2BJe0jFQo3E7Fhcc%2BuZSIh1nk97WwilPORxNI34muGwdJPkVB3MAXjLK6u0ytKhm009yHnbq5O543T9hR5c7sEjBzJOGb8beaBVWmULxNx08t3CSfQWlOa6pOqvIRfklqP1f0%2Bw2UPPia3fqSwpfTgZY%2BxLv%2BBr8V2HmYCM3p6Uim25xVkL05CsReKDQF%2FNd9boqCGY0LMExSfdFnsHkz6q0tmU81ijVNUL4RGJMr1wA%2BcifNy1B5vE2tErMHpP7k5t2lMnekG2I9NsaBZZJKFv7m75D6fVYwWDQGgykwT9yVraMKJKbGXPgF5RBBLDASEOswGWq%2FqqQG0t%2BJMA390zqMQhB6nu844TwlnyijrMqlS9%2FfFMKLVn8AGOqUBlDUN9cmRIeE46PtpS5OPB34bToVLPGoT11wk3m55Bu%2BKa2%2B9eCneuXRTpLwcuWEtCTtsElkNjXnwNDM%2FEw4D2BcTuNbejeoQxV53K1DU4FsFSEHky%2F9QiH8y6XbFovi9PQ%2BtFfwrM4Z5fZELoxF%2FwdbaokEg1mFOQRKs3RD3IeAMuxKqiFdWk2bVjKilwZ4WKjrOpN0fYo3vBRoV%2Fi8vV5vuAyDF&X-Amz-Signature=3db30683954f7687ae67344fec4e9efdaf2777cb6f897c4cef0668247dcb5284&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBTCY6Q%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCKwAGh%2F5hFi5%2Bil%2BPRe0S63psGjc20uxShkTf3yyifMwIgZjWDh0MzuzbVaX4dTEVDbs38bB7kIvphiEXBzGmiBrcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYyl2JBNrOxl3ua7ircA6c5ZdyL%2BrctnmAxSeVxYtd864sj6etrhC4H1C4vIU8KZTZxqDQzbsV%2BhN4Gd4aHqeiWo5fCrZez747jub78aV5mreWQfsHng4FOlNk9%2FkNwQIEHBm94drLIozqXp6RJ64eFMF9jqJu6csLoNYXE96N1zxqEkNXeuWzGmeC3swLiybc3yxRpCUJnv%2FHmMkR0EB07W5oVSZtj4Cjp7Zl8XQkbzWjD6uYpxaKgP%2FaZme73uXPboxPm%2BQfJoLcfyqLPfT5HVe9Vjrz%2BJe0jFQo3E7Fhcc%2BuZSIh1nk97WwilPORxNI34muGwdJPkVB3MAXjLK6u0ytKhm009yHnbq5O543T9hR5c7sEjBzJOGb8beaBVWmULxNx08t3CSfQWlOa6pOqvIRfklqP1f0%2Bw2UPPia3fqSwpfTgZY%2BxLv%2BBr8V2HmYCM3p6Uim25xVkL05CsReKDQF%2FNd9boqCGY0LMExSfdFnsHkz6q0tmU81ijVNUL4RGJMr1wA%2BcifNy1B5vE2tErMHpP7k5t2lMnekG2I9NsaBZZJKFv7m75D6fVYwWDQGgykwT9yVraMKJKbGXPgF5RBBLDASEOswGWq%2FqqQG0t%2BJMA390zqMQhB6nu844TwlnyijrMqlS9%2FfFMKLVn8AGOqUBlDUN9cmRIeE46PtpS5OPB34bToVLPGoT11wk3m55Bu%2BKa2%2B9eCneuXRTpLwcuWEtCTtsElkNjXnwNDM%2FEw4D2BcTuNbejeoQxV53K1DU4FsFSEHky%2F9QiH8y6XbFovi9PQ%2BtFfwrM4Z5fZELoxF%2FwdbaokEg1mFOQRKs3RD3IeAMuxKqiFdWk2bVjKilwZ4WKjrOpN0fYo3vBRoV%2Fi8vV5vuAyDF&X-Amz-Signature=c370b06e461a2e94afab54fbfcb41a1d16d022990605c78ec2e7491a68f96827&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBTCY6Q%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCKwAGh%2F5hFi5%2Bil%2BPRe0S63psGjc20uxShkTf3yyifMwIgZjWDh0MzuzbVaX4dTEVDbs38bB7kIvphiEXBzGmiBrcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYyl2JBNrOxl3ua7ircA6c5ZdyL%2BrctnmAxSeVxYtd864sj6etrhC4H1C4vIU8KZTZxqDQzbsV%2BhN4Gd4aHqeiWo5fCrZez747jub78aV5mreWQfsHng4FOlNk9%2FkNwQIEHBm94drLIozqXp6RJ64eFMF9jqJu6csLoNYXE96N1zxqEkNXeuWzGmeC3swLiybc3yxRpCUJnv%2FHmMkR0EB07W5oVSZtj4Cjp7Zl8XQkbzWjD6uYpxaKgP%2FaZme73uXPboxPm%2BQfJoLcfyqLPfT5HVe9Vjrz%2BJe0jFQo3E7Fhcc%2BuZSIh1nk97WwilPORxNI34muGwdJPkVB3MAXjLK6u0ytKhm009yHnbq5O543T9hR5c7sEjBzJOGb8beaBVWmULxNx08t3CSfQWlOa6pOqvIRfklqP1f0%2Bw2UPPia3fqSwpfTgZY%2BxLv%2BBr8V2HmYCM3p6Uim25xVkL05CsReKDQF%2FNd9boqCGY0LMExSfdFnsHkz6q0tmU81ijVNUL4RGJMr1wA%2BcifNy1B5vE2tErMHpP7k5t2lMnekG2I9NsaBZZJKFv7m75D6fVYwWDQGgykwT9yVraMKJKbGXPgF5RBBLDASEOswGWq%2FqqQG0t%2BJMA390zqMQhB6nu844TwlnyijrMqlS9%2FfFMKLVn8AGOqUBlDUN9cmRIeE46PtpS5OPB34bToVLPGoT11wk3m55Bu%2BKa2%2B9eCneuXRTpLwcuWEtCTtsElkNjXnwNDM%2FEw4D2BcTuNbejeoQxV53K1DU4FsFSEHky%2F9QiH8y6XbFovi9PQ%2BtFfwrM4Z5fZELoxF%2FwdbaokEg1mFOQRKs3RD3IeAMuxKqiFdWk2bVjKilwZ4WKjrOpN0fYo3vBRoV%2Fi8vV5vuAyDF&X-Amz-Signature=e0f428b2a463187c4c7343a98e5f4006e9921bedc0ed32dffea63e65eaecb59a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBTCY6Q%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCKwAGh%2F5hFi5%2Bil%2BPRe0S63psGjc20uxShkTf3yyifMwIgZjWDh0MzuzbVaX4dTEVDbs38bB7kIvphiEXBzGmiBrcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYyl2JBNrOxl3ua7ircA6c5ZdyL%2BrctnmAxSeVxYtd864sj6etrhC4H1C4vIU8KZTZxqDQzbsV%2BhN4Gd4aHqeiWo5fCrZez747jub78aV5mreWQfsHng4FOlNk9%2FkNwQIEHBm94drLIozqXp6RJ64eFMF9jqJu6csLoNYXE96N1zxqEkNXeuWzGmeC3swLiybc3yxRpCUJnv%2FHmMkR0EB07W5oVSZtj4Cjp7Zl8XQkbzWjD6uYpxaKgP%2FaZme73uXPboxPm%2BQfJoLcfyqLPfT5HVe9Vjrz%2BJe0jFQo3E7Fhcc%2BuZSIh1nk97WwilPORxNI34muGwdJPkVB3MAXjLK6u0ytKhm009yHnbq5O543T9hR5c7sEjBzJOGb8beaBVWmULxNx08t3CSfQWlOa6pOqvIRfklqP1f0%2Bw2UPPia3fqSwpfTgZY%2BxLv%2BBr8V2HmYCM3p6Uim25xVkL05CsReKDQF%2FNd9boqCGY0LMExSfdFnsHkz6q0tmU81ijVNUL4RGJMr1wA%2BcifNy1B5vE2tErMHpP7k5t2lMnekG2I9NsaBZZJKFv7m75D6fVYwWDQGgykwT9yVraMKJKbGXPgF5RBBLDASEOswGWq%2FqqQG0t%2BJMA390zqMQhB6nu844TwlnyijrMqlS9%2FfFMKLVn8AGOqUBlDUN9cmRIeE46PtpS5OPB34bToVLPGoT11wk3m55Bu%2BKa2%2B9eCneuXRTpLwcuWEtCTtsElkNjXnwNDM%2FEw4D2BcTuNbejeoQxV53K1DU4FsFSEHky%2F9QiH8y6XbFovi9PQ%2BtFfwrM4Z5fZELoxF%2FwdbaokEg1mFOQRKs3RD3IeAMuxKqiFdWk2bVjKilwZ4WKjrOpN0fYo3vBRoV%2Fi8vV5vuAyDF&X-Amz-Signature=e13737309d9ec81280083b6cdd56ef166157511cdf3fe954c18aa6d4ef25bb28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBTCY6Q%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCKwAGh%2F5hFi5%2Bil%2BPRe0S63psGjc20uxShkTf3yyifMwIgZjWDh0MzuzbVaX4dTEVDbs38bB7kIvphiEXBzGmiBrcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYyl2JBNrOxl3ua7ircA6c5ZdyL%2BrctnmAxSeVxYtd864sj6etrhC4H1C4vIU8KZTZxqDQzbsV%2BhN4Gd4aHqeiWo5fCrZez747jub78aV5mreWQfsHng4FOlNk9%2FkNwQIEHBm94drLIozqXp6RJ64eFMF9jqJu6csLoNYXE96N1zxqEkNXeuWzGmeC3swLiybc3yxRpCUJnv%2FHmMkR0EB07W5oVSZtj4Cjp7Zl8XQkbzWjD6uYpxaKgP%2FaZme73uXPboxPm%2BQfJoLcfyqLPfT5HVe9Vjrz%2BJe0jFQo3E7Fhcc%2BuZSIh1nk97WwilPORxNI34muGwdJPkVB3MAXjLK6u0ytKhm009yHnbq5O543T9hR5c7sEjBzJOGb8beaBVWmULxNx08t3CSfQWlOa6pOqvIRfklqP1f0%2Bw2UPPia3fqSwpfTgZY%2BxLv%2BBr8V2HmYCM3p6Uim25xVkL05CsReKDQF%2FNd9boqCGY0LMExSfdFnsHkz6q0tmU81ijVNUL4RGJMr1wA%2BcifNy1B5vE2tErMHpP7k5t2lMnekG2I9NsaBZZJKFv7m75D6fVYwWDQGgykwT9yVraMKJKbGXPgF5RBBLDASEOswGWq%2FqqQG0t%2BJMA390zqMQhB6nu844TwlnyijrMqlS9%2FfFMKLVn8AGOqUBlDUN9cmRIeE46PtpS5OPB34bToVLPGoT11wk3m55Bu%2BKa2%2B9eCneuXRTpLwcuWEtCTtsElkNjXnwNDM%2FEw4D2BcTuNbejeoQxV53K1DU4FsFSEHky%2F9QiH8y6XbFovi9PQ%2BtFfwrM4Z5fZELoxF%2FwdbaokEg1mFOQRKs3RD3IeAMuxKqiFdWk2bVjKilwZ4WKjrOpN0fYo3vBRoV%2Fi8vV5vuAyDF&X-Amz-Signature=a38d742360522d8395a48de92a2904d43a37d02768432fa6cb74cc12c1ae341a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
