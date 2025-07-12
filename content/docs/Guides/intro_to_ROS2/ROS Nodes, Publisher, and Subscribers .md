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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VV7SV2M%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcm31dVGJQrpEL6Q%2BG8jUbEDpCqcs%2BLk3OlrBAT0%2FIMAIgbBf%2BvgrmeFer57Dsr2EKw7a%2BfGUkWsEP5w4ThDbiOvoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeok27g1QFMZfUytCrcAy8IyETcqf5QejBlF2jiVj3WVqbqJz3Qx4ay5mUM53%2FTruO5M7YaO9CQDH3%2BUaaoEzAIgMdGwrv%2FOxev%2BJMceaMCARro98OQsjjzpv6TLKvp2TR2OIqkih9ksoJ3m4gi3kckMdjCaATMHunH3gXf4qSMR0nU%2F1NpxwIxiLwbndCRefKAmUg860jZoXJih1OuDVYrQ0hg9BwLQdKD0EZzznvnSiHv5y6GLUv%2F%2BV1LSL30Uj%2B7HSY8j3r%2F%2BhSFtQ4qN2axvTMq4muwPSEesvBl%2F0SHI0ZH7jlbIrD2H1Q60%2FwSSKJX95Q9AdOyzaJSLZWqyvpr7Bipl5oSV%2BNXRJgt18KlM04llUePdEjrYXuIrPgCMRH9FJ1Hhib%2B8TZCSa3kylMlv6JvmMMb7C6BGR6JXmjwhDc1R0woRvziB1kQ3xNJ1x7aT3rbFQ0AZ%2BFlWY7lEyPlvTRIwVpYmNYIJbT6LTY%2BFyski2XE0Is55brkfaGE0JfM22yX3TTk4mKJFNNggCEaY451iPoZTlsRyvp3%2Fr93EegngvDs%2BDB%2B5W7v6yfsIXSdskXWzQJxBbi0xvsdPnRNZM752xNdkLy6oBRgptlBjr2SnzMD74%2Fhi%2FUxEQAmvjpt9WAYafVb3tGOMLbZysMGOqUBmzGa8qY7ym4VG9yw1tyeaHljZ9GpcDqe5lG%2FN9IcpkwBTkY%2FT8NUUfKmEDLxfIgLPXehCe9PPlO5UFqoBMt2gXOvs%2Ffy5xcNTwjNnAT2MfKsJmXm%2B7e43h3TKSG2qHu65BDmga6K9aOtB5MapnHZky8MkyCbaBdrX241%2BPK64Wn8aJFxgvtnFSL0EmGNIoJFlHaW9P2VRTKpiGGkhTPsuJW43KlS&X-Amz-Signature=24f116e42a93259b959cddc4c76fdce25494c5ec1fd45a74867a1760344fbe38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VV7SV2M%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcm31dVGJQrpEL6Q%2BG8jUbEDpCqcs%2BLk3OlrBAT0%2FIMAIgbBf%2BvgrmeFer57Dsr2EKw7a%2BfGUkWsEP5w4ThDbiOvoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeok27g1QFMZfUytCrcAy8IyETcqf5QejBlF2jiVj3WVqbqJz3Qx4ay5mUM53%2FTruO5M7YaO9CQDH3%2BUaaoEzAIgMdGwrv%2FOxev%2BJMceaMCARro98OQsjjzpv6TLKvp2TR2OIqkih9ksoJ3m4gi3kckMdjCaATMHunH3gXf4qSMR0nU%2F1NpxwIxiLwbndCRefKAmUg860jZoXJih1OuDVYrQ0hg9BwLQdKD0EZzznvnSiHv5y6GLUv%2F%2BV1LSL30Uj%2B7HSY8j3r%2F%2BhSFtQ4qN2axvTMq4muwPSEesvBl%2F0SHI0ZH7jlbIrD2H1Q60%2FwSSKJX95Q9AdOyzaJSLZWqyvpr7Bipl5oSV%2BNXRJgt18KlM04llUePdEjrYXuIrPgCMRH9FJ1Hhib%2B8TZCSa3kylMlv6JvmMMb7C6BGR6JXmjwhDc1R0woRvziB1kQ3xNJ1x7aT3rbFQ0AZ%2BFlWY7lEyPlvTRIwVpYmNYIJbT6LTY%2BFyski2XE0Is55brkfaGE0JfM22yX3TTk4mKJFNNggCEaY451iPoZTlsRyvp3%2Fr93EegngvDs%2BDB%2B5W7v6yfsIXSdskXWzQJxBbi0xvsdPnRNZM752xNdkLy6oBRgptlBjr2SnzMD74%2Fhi%2FUxEQAmvjpt9WAYafVb3tGOMLbZysMGOqUBmzGa8qY7ym4VG9yw1tyeaHljZ9GpcDqe5lG%2FN9IcpkwBTkY%2FT8NUUfKmEDLxfIgLPXehCe9PPlO5UFqoBMt2gXOvs%2Ffy5xcNTwjNnAT2MfKsJmXm%2B7e43h3TKSG2qHu65BDmga6K9aOtB5MapnHZky8MkyCbaBdrX241%2BPK64Wn8aJFxgvtnFSL0EmGNIoJFlHaW9P2VRTKpiGGkhTPsuJW43KlS&X-Amz-Signature=ab6d61ff715b364dde9acd8e0502c084e3486bf35818b72df04ef3de7aec2a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VV7SV2M%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcm31dVGJQrpEL6Q%2BG8jUbEDpCqcs%2BLk3OlrBAT0%2FIMAIgbBf%2BvgrmeFer57Dsr2EKw7a%2BfGUkWsEP5w4ThDbiOvoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeok27g1QFMZfUytCrcAy8IyETcqf5QejBlF2jiVj3WVqbqJz3Qx4ay5mUM53%2FTruO5M7YaO9CQDH3%2BUaaoEzAIgMdGwrv%2FOxev%2BJMceaMCARro98OQsjjzpv6TLKvp2TR2OIqkih9ksoJ3m4gi3kckMdjCaATMHunH3gXf4qSMR0nU%2F1NpxwIxiLwbndCRefKAmUg860jZoXJih1OuDVYrQ0hg9BwLQdKD0EZzznvnSiHv5y6GLUv%2F%2BV1LSL30Uj%2B7HSY8j3r%2F%2BhSFtQ4qN2axvTMq4muwPSEesvBl%2F0SHI0ZH7jlbIrD2H1Q60%2FwSSKJX95Q9AdOyzaJSLZWqyvpr7Bipl5oSV%2BNXRJgt18KlM04llUePdEjrYXuIrPgCMRH9FJ1Hhib%2B8TZCSa3kylMlv6JvmMMb7C6BGR6JXmjwhDc1R0woRvziB1kQ3xNJ1x7aT3rbFQ0AZ%2BFlWY7lEyPlvTRIwVpYmNYIJbT6LTY%2BFyski2XE0Is55brkfaGE0JfM22yX3TTk4mKJFNNggCEaY451iPoZTlsRyvp3%2Fr93EegngvDs%2BDB%2B5W7v6yfsIXSdskXWzQJxBbi0xvsdPnRNZM752xNdkLy6oBRgptlBjr2SnzMD74%2Fhi%2FUxEQAmvjpt9WAYafVb3tGOMLbZysMGOqUBmzGa8qY7ym4VG9yw1tyeaHljZ9GpcDqe5lG%2FN9IcpkwBTkY%2FT8NUUfKmEDLxfIgLPXehCe9PPlO5UFqoBMt2gXOvs%2Ffy5xcNTwjNnAT2MfKsJmXm%2B7e43h3TKSG2qHu65BDmga6K9aOtB5MapnHZky8MkyCbaBdrX241%2BPK64Wn8aJFxgvtnFSL0EmGNIoJFlHaW9P2VRTKpiGGkhTPsuJW43KlS&X-Amz-Signature=8b0d7b887e241e5094559b8666e4d7f0a28c8160ab4cd9bc9d2ca2f58ff0c4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VV7SV2M%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcm31dVGJQrpEL6Q%2BG8jUbEDpCqcs%2BLk3OlrBAT0%2FIMAIgbBf%2BvgrmeFer57Dsr2EKw7a%2BfGUkWsEP5w4ThDbiOvoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeok27g1QFMZfUytCrcAy8IyETcqf5QejBlF2jiVj3WVqbqJz3Qx4ay5mUM53%2FTruO5M7YaO9CQDH3%2BUaaoEzAIgMdGwrv%2FOxev%2BJMceaMCARro98OQsjjzpv6TLKvp2TR2OIqkih9ksoJ3m4gi3kckMdjCaATMHunH3gXf4qSMR0nU%2F1NpxwIxiLwbndCRefKAmUg860jZoXJih1OuDVYrQ0hg9BwLQdKD0EZzznvnSiHv5y6GLUv%2F%2BV1LSL30Uj%2B7HSY8j3r%2F%2BhSFtQ4qN2axvTMq4muwPSEesvBl%2F0SHI0ZH7jlbIrD2H1Q60%2FwSSKJX95Q9AdOyzaJSLZWqyvpr7Bipl5oSV%2BNXRJgt18KlM04llUePdEjrYXuIrPgCMRH9FJ1Hhib%2B8TZCSa3kylMlv6JvmMMb7C6BGR6JXmjwhDc1R0woRvziB1kQ3xNJ1x7aT3rbFQ0AZ%2BFlWY7lEyPlvTRIwVpYmNYIJbT6LTY%2BFyski2XE0Is55brkfaGE0JfM22yX3TTk4mKJFNNggCEaY451iPoZTlsRyvp3%2Fr93EegngvDs%2BDB%2B5W7v6yfsIXSdskXWzQJxBbi0xvsdPnRNZM752xNdkLy6oBRgptlBjr2SnzMD74%2Fhi%2FUxEQAmvjpt9WAYafVb3tGOMLbZysMGOqUBmzGa8qY7ym4VG9yw1tyeaHljZ9GpcDqe5lG%2FN9IcpkwBTkY%2FT8NUUfKmEDLxfIgLPXehCe9PPlO5UFqoBMt2gXOvs%2Ffy5xcNTwjNnAT2MfKsJmXm%2B7e43h3TKSG2qHu65BDmga6K9aOtB5MapnHZky8MkyCbaBdrX241%2BPK64Wn8aJFxgvtnFSL0EmGNIoJFlHaW9P2VRTKpiGGkhTPsuJW43KlS&X-Amz-Signature=3a236e06adfbe386b8296cb9e32751f023246d62bcc94009b2722702c427edca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VV7SV2M%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcm31dVGJQrpEL6Q%2BG8jUbEDpCqcs%2BLk3OlrBAT0%2FIMAIgbBf%2BvgrmeFer57Dsr2EKw7a%2BfGUkWsEP5w4ThDbiOvoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeok27g1QFMZfUytCrcAy8IyETcqf5QejBlF2jiVj3WVqbqJz3Qx4ay5mUM53%2FTruO5M7YaO9CQDH3%2BUaaoEzAIgMdGwrv%2FOxev%2BJMceaMCARro98OQsjjzpv6TLKvp2TR2OIqkih9ksoJ3m4gi3kckMdjCaATMHunH3gXf4qSMR0nU%2F1NpxwIxiLwbndCRefKAmUg860jZoXJih1OuDVYrQ0hg9BwLQdKD0EZzznvnSiHv5y6GLUv%2F%2BV1LSL30Uj%2B7HSY8j3r%2F%2BhSFtQ4qN2axvTMq4muwPSEesvBl%2F0SHI0ZH7jlbIrD2H1Q60%2FwSSKJX95Q9AdOyzaJSLZWqyvpr7Bipl5oSV%2BNXRJgt18KlM04llUePdEjrYXuIrPgCMRH9FJ1Hhib%2B8TZCSa3kylMlv6JvmMMb7C6BGR6JXmjwhDc1R0woRvziB1kQ3xNJ1x7aT3rbFQ0AZ%2BFlWY7lEyPlvTRIwVpYmNYIJbT6LTY%2BFyski2XE0Is55brkfaGE0JfM22yX3TTk4mKJFNNggCEaY451iPoZTlsRyvp3%2Fr93EegngvDs%2BDB%2B5W7v6yfsIXSdskXWzQJxBbi0xvsdPnRNZM752xNdkLy6oBRgptlBjr2SnzMD74%2Fhi%2FUxEQAmvjpt9WAYafVb3tGOMLbZysMGOqUBmzGa8qY7ym4VG9yw1tyeaHljZ9GpcDqe5lG%2FN9IcpkwBTkY%2FT8NUUfKmEDLxfIgLPXehCe9PPlO5UFqoBMt2gXOvs%2Ffy5xcNTwjNnAT2MfKsJmXm%2B7e43h3TKSG2qHu65BDmga6K9aOtB5MapnHZky8MkyCbaBdrX241%2BPK64Wn8aJFxgvtnFSL0EmGNIoJFlHaW9P2VRTKpiGGkhTPsuJW43KlS&X-Amz-Signature=ee57c44ee0da7ab5c563dc3cef485b4174e0af9883cef38921c6436aa3cad394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VV7SV2M%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcm31dVGJQrpEL6Q%2BG8jUbEDpCqcs%2BLk3OlrBAT0%2FIMAIgbBf%2BvgrmeFer57Dsr2EKw7a%2BfGUkWsEP5w4ThDbiOvoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeok27g1QFMZfUytCrcAy8IyETcqf5QejBlF2jiVj3WVqbqJz3Qx4ay5mUM53%2FTruO5M7YaO9CQDH3%2BUaaoEzAIgMdGwrv%2FOxev%2BJMceaMCARro98OQsjjzpv6TLKvp2TR2OIqkih9ksoJ3m4gi3kckMdjCaATMHunH3gXf4qSMR0nU%2F1NpxwIxiLwbndCRefKAmUg860jZoXJih1OuDVYrQ0hg9BwLQdKD0EZzznvnSiHv5y6GLUv%2F%2BV1LSL30Uj%2B7HSY8j3r%2F%2BhSFtQ4qN2axvTMq4muwPSEesvBl%2F0SHI0ZH7jlbIrD2H1Q60%2FwSSKJX95Q9AdOyzaJSLZWqyvpr7Bipl5oSV%2BNXRJgt18KlM04llUePdEjrYXuIrPgCMRH9FJ1Hhib%2B8TZCSa3kylMlv6JvmMMb7C6BGR6JXmjwhDc1R0woRvziB1kQ3xNJ1x7aT3rbFQ0AZ%2BFlWY7lEyPlvTRIwVpYmNYIJbT6LTY%2BFyski2XE0Is55brkfaGE0JfM22yX3TTk4mKJFNNggCEaY451iPoZTlsRyvp3%2Fr93EegngvDs%2BDB%2B5W7v6yfsIXSdskXWzQJxBbi0xvsdPnRNZM752xNdkLy6oBRgptlBjr2SnzMD74%2Fhi%2FUxEQAmvjpt9WAYafVb3tGOMLbZysMGOqUBmzGa8qY7ym4VG9yw1tyeaHljZ9GpcDqe5lG%2FN9IcpkwBTkY%2FT8NUUfKmEDLxfIgLPXehCe9PPlO5UFqoBMt2gXOvs%2Ffy5xcNTwjNnAT2MfKsJmXm%2B7e43h3TKSG2qHu65BDmga6K9aOtB5MapnHZky8MkyCbaBdrX241%2BPK64Wn8aJFxgvtnFSL0EmGNIoJFlHaW9P2VRTKpiGGkhTPsuJW43KlS&X-Amz-Signature=4e01ca6cbc262c7c41ae8b586f2655cec2e29dc36407c11a3c63fe80cef89dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VV7SV2M%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcm31dVGJQrpEL6Q%2BG8jUbEDpCqcs%2BLk3OlrBAT0%2FIMAIgbBf%2BvgrmeFer57Dsr2EKw7a%2BfGUkWsEP5w4ThDbiOvoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeok27g1QFMZfUytCrcAy8IyETcqf5QejBlF2jiVj3WVqbqJz3Qx4ay5mUM53%2FTruO5M7YaO9CQDH3%2BUaaoEzAIgMdGwrv%2FOxev%2BJMceaMCARro98OQsjjzpv6TLKvp2TR2OIqkih9ksoJ3m4gi3kckMdjCaATMHunH3gXf4qSMR0nU%2F1NpxwIxiLwbndCRefKAmUg860jZoXJih1OuDVYrQ0hg9BwLQdKD0EZzznvnSiHv5y6GLUv%2F%2BV1LSL30Uj%2B7HSY8j3r%2F%2BhSFtQ4qN2axvTMq4muwPSEesvBl%2F0SHI0ZH7jlbIrD2H1Q60%2FwSSKJX95Q9AdOyzaJSLZWqyvpr7Bipl5oSV%2BNXRJgt18KlM04llUePdEjrYXuIrPgCMRH9FJ1Hhib%2B8TZCSa3kylMlv6JvmMMb7C6BGR6JXmjwhDc1R0woRvziB1kQ3xNJ1x7aT3rbFQ0AZ%2BFlWY7lEyPlvTRIwVpYmNYIJbT6LTY%2BFyski2XE0Is55brkfaGE0JfM22yX3TTk4mKJFNNggCEaY451iPoZTlsRyvp3%2Fr93EegngvDs%2BDB%2B5W7v6yfsIXSdskXWzQJxBbi0xvsdPnRNZM752xNdkLy6oBRgptlBjr2SnzMD74%2Fhi%2FUxEQAmvjpt9WAYafVb3tGOMLbZysMGOqUBmzGa8qY7ym4VG9yw1tyeaHljZ9GpcDqe5lG%2FN9IcpkwBTkY%2FT8NUUfKmEDLxfIgLPXehCe9PPlO5UFqoBMt2gXOvs%2Ffy5xcNTwjNnAT2MfKsJmXm%2B7e43h3TKSG2qHu65BDmga6K9aOtB5MapnHZky8MkyCbaBdrX241%2BPK64Wn8aJFxgvtnFSL0EmGNIoJFlHaW9P2VRTKpiGGkhTPsuJW43KlS&X-Amz-Signature=13784158e4e6dda1287cc43d0e6a8b380c51d117ff158065fc466b99aaf1bb73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VV7SV2M%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcm31dVGJQrpEL6Q%2BG8jUbEDpCqcs%2BLk3OlrBAT0%2FIMAIgbBf%2BvgrmeFer57Dsr2EKw7a%2BfGUkWsEP5w4ThDbiOvoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeok27g1QFMZfUytCrcAy8IyETcqf5QejBlF2jiVj3WVqbqJz3Qx4ay5mUM53%2FTruO5M7YaO9CQDH3%2BUaaoEzAIgMdGwrv%2FOxev%2BJMceaMCARro98OQsjjzpv6TLKvp2TR2OIqkih9ksoJ3m4gi3kckMdjCaATMHunH3gXf4qSMR0nU%2F1NpxwIxiLwbndCRefKAmUg860jZoXJih1OuDVYrQ0hg9BwLQdKD0EZzznvnSiHv5y6GLUv%2F%2BV1LSL30Uj%2B7HSY8j3r%2F%2BhSFtQ4qN2axvTMq4muwPSEesvBl%2F0SHI0ZH7jlbIrD2H1Q60%2FwSSKJX95Q9AdOyzaJSLZWqyvpr7Bipl5oSV%2BNXRJgt18KlM04llUePdEjrYXuIrPgCMRH9FJ1Hhib%2B8TZCSa3kylMlv6JvmMMb7C6BGR6JXmjwhDc1R0woRvziB1kQ3xNJ1x7aT3rbFQ0AZ%2BFlWY7lEyPlvTRIwVpYmNYIJbT6LTY%2BFyski2XE0Is55brkfaGE0JfM22yX3TTk4mKJFNNggCEaY451iPoZTlsRyvp3%2Fr93EegngvDs%2BDB%2B5W7v6yfsIXSdskXWzQJxBbi0xvsdPnRNZM752xNdkLy6oBRgptlBjr2SnzMD74%2Fhi%2FUxEQAmvjpt9WAYafVb3tGOMLbZysMGOqUBmzGa8qY7ym4VG9yw1tyeaHljZ9GpcDqe5lG%2FN9IcpkwBTkY%2FT8NUUfKmEDLxfIgLPXehCe9PPlO5UFqoBMt2gXOvs%2Ffy5xcNTwjNnAT2MfKsJmXm%2B7e43h3TKSG2qHu65BDmga6K9aOtB5MapnHZky8MkyCbaBdrX241%2BPK64Wn8aJFxgvtnFSL0EmGNIoJFlHaW9P2VRTKpiGGkhTPsuJW43KlS&X-Amz-Signature=0e47ad361d999d24b025b5917251d9cd12dce59ec8e1c95987a7f94d0230c4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
