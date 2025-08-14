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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNABWVKZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmqOkKRzbDt6wJ4RawqzUjONT4mPeQJmUBhL2V45B%2BAiEA4PreMYEznX9eVRLoy2K5ZlA6rUfi7I2rTPt2KmtJU4Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI%2Fwogd8W9hTT00MvircA4WCRQxlzeXfq9WAHwyEz8Hgcd4v2ktO%2FgYGeAdZp5lCnBNnBp4hh3ydo0VqhTQP6BMwr%2Fiq15latvDljkxPKrRji0mmS8sAG9PH1bGIPbhX53DiYYyu6Rq%2BpmxvienJhqodSifXZBkI3lkY0sheHNGpSA0EqRTuiJ6Sv1gBuc7vXGbzi2fiH0%2FNbnYEnD%2BCEvaZxCl1d5b2sZEXGS7ZzAx7DFA8V9hW%2BpcBqw6I5wJKFayRu9Lro25bEzeAHzDYBNaERFhKmibD2QRY5Jdk408OWg8FbBFcq027%2Bt0ocdx3Vm%2FJhf6iaEIXtd61x0cMCTkCjVVGPtZA37BCOkLHHbDP2xkGHysQWALHS73eQ1sitrRYIqAbI9cYx5YSf0533eFIR%2FPtQonQI0asVXDH7jLZC4TEGfexev8kgRnxoMmHCKr8oYPTMDJwr3x%2BlqvXFpbHKdD08FWhfoksU8%2BcOFd%2BV5%2B9jzAJjfNtc351nixWQ%2FcrS6brWvdViQVVobDCZiaOR60zB%2F4KQ3tVeheSg%2FpIPwxGrRezTALH69XXv9RX9nhr5g2z6l16eLOcxLtJPEnGdDyw6KeKwp7QNCQ3k5NES1bSzPNXepwJ9p0GQBN0jVyZ7sQT%2FFS0dFooMLCG98QGOqUBDgEdJKjDcblh%2FxIdVPxskbNEOxM43MIeNtG%2Flsd8OTrJhI6GGzJ%2FUAgBbjHxi1YvlAmt5cgmTeauMzWSy0GmEoQS9VBYFzeUSpRXubFjDryxTiX9Nw%2BfLKeb5GgwAhsLfHVHHpSA5fg1fhhU4AJm0rZf1MWdscojf8N8BfKu8wFkHBylAiMossuLJYwirb01%2FjMbPG1bQyPOBOg04rL18ga51aPj&X-Amz-Signature=e5139cad7936a208f6bfb3db8522b8f32ed71f3ef802fa72833942b77029849b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNABWVKZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmqOkKRzbDt6wJ4RawqzUjONT4mPeQJmUBhL2V45B%2BAiEA4PreMYEznX9eVRLoy2K5ZlA6rUfi7I2rTPt2KmtJU4Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI%2Fwogd8W9hTT00MvircA4WCRQxlzeXfq9WAHwyEz8Hgcd4v2ktO%2FgYGeAdZp5lCnBNnBp4hh3ydo0VqhTQP6BMwr%2Fiq15latvDljkxPKrRji0mmS8sAG9PH1bGIPbhX53DiYYyu6Rq%2BpmxvienJhqodSifXZBkI3lkY0sheHNGpSA0EqRTuiJ6Sv1gBuc7vXGbzi2fiH0%2FNbnYEnD%2BCEvaZxCl1d5b2sZEXGS7ZzAx7DFA8V9hW%2BpcBqw6I5wJKFayRu9Lro25bEzeAHzDYBNaERFhKmibD2QRY5Jdk408OWg8FbBFcq027%2Bt0ocdx3Vm%2FJhf6iaEIXtd61x0cMCTkCjVVGPtZA37BCOkLHHbDP2xkGHysQWALHS73eQ1sitrRYIqAbI9cYx5YSf0533eFIR%2FPtQonQI0asVXDH7jLZC4TEGfexev8kgRnxoMmHCKr8oYPTMDJwr3x%2BlqvXFpbHKdD08FWhfoksU8%2BcOFd%2BV5%2B9jzAJjfNtc351nixWQ%2FcrS6brWvdViQVVobDCZiaOR60zB%2F4KQ3tVeheSg%2FpIPwxGrRezTALH69XXv9RX9nhr5g2z6l16eLOcxLtJPEnGdDyw6KeKwp7QNCQ3k5NES1bSzPNXepwJ9p0GQBN0jVyZ7sQT%2FFS0dFooMLCG98QGOqUBDgEdJKjDcblh%2FxIdVPxskbNEOxM43MIeNtG%2Flsd8OTrJhI6GGzJ%2FUAgBbjHxi1YvlAmt5cgmTeauMzWSy0GmEoQS9VBYFzeUSpRXubFjDryxTiX9Nw%2BfLKeb5GgwAhsLfHVHHpSA5fg1fhhU4AJm0rZf1MWdscojf8N8BfKu8wFkHBylAiMossuLJYwirb01%2FjMbPG1bQyPOBOg04rL18ga51aPj&X-Amz-Signature=60cf756fda27bbd58d56fd99ce56f85e9721dde6dc1daedad047a12fb207ae7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNABWVKZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmqOkKRzbDt6wJ4RawqzUjONT4mPeQJmUBhL2V45B%2BAiEA4PreMYEznX9eVRLoy2K5ZlA6rUfi7I2rTPt2KmtJU4Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI%2Fwogd8W9hTT00MvircA4WCRQxlzeXfq9WAHwyEz8Hgcd4v2ktO%2FgYGeAdZp5lCnBNnBp4hh3ydo0VqhTQP6BMwr%2Fiq15latvDljkxPKrRji0mmS8sAG9PH1bGIPbhX53DiYYyu6Rq%2BpmxvienJhqodSifXZBkI3lkY0sheHNGpSA0EqRTuiJ6Sv1gBuc7vXGbzi2fiH0%2FNbnYEnD%2BCEvaZxCl1d5b2sZEXGS7ZzAx7DFA8V9hW%2BpcBqw6I5wJKFayRu9Lro25bEzeAHzDYBNaERFhKmibD2QRY5Jdk408OWg8FbBFcq027%2Bt0ocdx3Vm%2FJhf6iaEIXtd61x0cMCTkCjVVGPtZA37BCOkLHHbDP2xkGHysQWALHS73eQ1sitrRYIqAbI9cYx5YSf0533eFIR%2FPtQonQI0asVXDH7jLZC4TEGfexev8kgRnxoMmHCKr8oYPTMDJwr3x%2BlqvXFpbHKdD08FWhfoksU8%2BcOFd%2BV5%2B9jzAJjfNtc351nixWQ%2FcrS6brWvdViQVVobDCZiaOR60zB%2F4KQ3tVeheSg%2FpIPwxGrRezTALH69XXv9RX9nhr5g2z6l16eLOcxLtJPEnGdDyw6KeKwp7QNCQ3k5NES1bSzPNXepwJ9p0GQBN0jVyZ7sQT%2FFS0dFooMLCG98QGOqUBDgEdJKjDcblh%2FxIdVPxskbNEOxM43MIeNtG%2Flsd8OTrJhI6GGzJ%2FUAgBbjHxi1YvlAmt5cgmTeauMzWSy0GmEoQS9VBYFzeUSpRXubFjDryxTiX9Nw%2BfLKeb5GgwAhsLfHVHHpSA5fg1fhhU4AJm0rZf1MWdscojf8N8BfKu8wFkHBylAiMossuLJYwirb01%2FjMbPG1bQyPOBOg04rL18ga51aPj&X-Amz-Signature=e8b4d0036e4ef752281d5f21996420c0a6d5f243344a410c9046368bdca5e30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNABWVKZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmqOkKRzbDt6wJ4RawqzUjONT4mPeQJmUBhL2V45B%2BAiEA4PreMYEznX9eVRLoy2K5ZlA6rUfi7I2rTPt2KmtJU4Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI%2Fwogd8W9hTT00MvircA4WCRQxlzeXfq9WAHwyEz8Hgcd4v2ktO%2FgYGeAdZp5lCnBNnBp4hh3ydo0VqhTQP6BMwr%2Fiq15latvDljkxPKrRji0mmS8sAG9PH1bGIPbhX53DiYYyu6Rq%2BpmxvienJhqodSifXZBkI3lkY0sheHNGpSA0EqRTuiJ6Sv1gBuc7vXGbzi2fiH0%2FNbnYEnD%2BCEvaZxCl1d5b2sZEXGS7ZzAx7DFA8V9hW%2BpcBqw6I5wJKFayRu9Lro25bEzeAHzDYBNaERFhKmibD2QRY5Jdk408OWg8FbBFcq027%2Bt0ocdx3Vm%2FJhf6iaEIXtd61x0cMCTkCjVVGPtZA37BCOkLHHbDP2xkGHysQWALHS73eQ1sitrRYIqAbI9cYx5YSf0533eFIR%2FPtQonQI0asVXDH7jLZC4TEGfexev8kgRnxoMmHCKr8oYPTMDJwr3x%2BlqvXFpbHKdD08FWhfoksU8%2BcOFd%2BV5%2B9jzAJjfNtc351nixWQ%2FcrS6brWvdViQVVobDCZiaOR60zB%2F4KQ3tVeheSg%2FpIPwxGrRezTALH69XXv9RX9nhr5g2z6l16eLOcxLtJPEnGdDyw6KeKwp7QNCQ3k5NES1bSzPNXepwJ9p0GQBN0jVyZ7sQT%2FFS0dFooMLCG98QGOqUBDgEdJKjDcblh%2FxIdVPxskbNEOxM43MIeNtG%2Flsd8OTrJhI6GGzJ%2FUAgBbjHxi1YvlAmt5cgmTeauMzWSy0GmEoQS9VBYFzeUSpRXubFjDryxTiX9Nw%2BfLKeb5GgwAhsLfHVHHpSA5fg1fhhU4AJm0rZf1MWdscojf8N8BfKu8wFkHBylAiMossuLJYwirb01%2FjMbPG1bQyPOBOg04rL18ga51aPj&X-Amz-Signature=2240f1d6a69a80d90931ed77af21840793653ff7320e35f5d5488237d57ff088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNABWVKZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmqOkKRzbDt6wJ4RawqzUjONT4mPeQJmUBhL2V45B%2BAiEA4PreMYEznX9eVRLoy2K5ZlA6rUfi7I2rTPt2KmtJU4Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI%2Fwogd8W9hTT00MvircA4WCRQxlzeXfq9WAHwyEz8Hgcd4v2ktO%2FgYGeAdZp5lCnBNnBp4hh3ydo0VqhTQP6BMwr%2Fiq15latvDljkxPKrRji0mmS8sAG9PH1bGIPbhX53DiYYyu6Rq%2BpmxvienJhqodSifXZBkI3lkY0sheHNGpSA0EqRTuiJ6Sv1gBuc7vXGbzi2fiH0%2FNbnYEnD%2BCEvaZxCl1d5b2sZEXGS7ZzAx7DFA8V9hW%2BpcBqw6I5wJKFayRu9Lro25bEzeAHzDYBNaERFhKmibD2QRY5Jdk408OWg8FbBFcq027%2Bt0ocdx3Vm%2FJhf6iaEIXtd61x0cMCTkCjVVGPtZA37BCOkLHHbDP2xkGHysQWALHS73eQ1sitrRYIqAbI9cYx5YSf0533eFIR%2FPtQonQI0asVXDH7jLZC4TEGfexev8kgRnxoMmHCKr8oYPTMDJwr3x%2BlqvXFpbHKdD08FWhfoksU8%2BcOFd%2BV5%2B9jzAJjfNtc351nixWQ%2FcrS6brWvdViQVVobDCZiaOR60zB%2F4KQ3tVeheSg%2FpIPwxGrRezTALH69XXv9RX9nhr5g2z6l16eLOcxLtJPEnGdDyw6KeKwp7QNCQ3k5NES1bSzPNXepwJ9p0GQBN0jVyZ7sQT%2FFS0dFooMLCG98QGOqUBDgEdJKjDcblh%2FxIdVPxskbNEOxM43MIeNtG%2Flsd8OTrJhI6GGzJ%2FUAgBbjHxi1YvlAmt5cgmTeauMzWSy0GmEoQS9VBYFzeUSpRXubFjDryxTiX9Nw%2BfLKeb5GgwAhsLfHVHHpSA5fg1fhhU4AJm0rZf1MWdscojf8N8BfKu8wFkHBylAiMossuLJYwirb01%2FjMbPG1bQyPOBOg04rL18ga51aPj&X-Amz-Signature=7bfb0e84a0ef9618a9a4c3486da959acd533d0abf16bae6f9db47a13ffcc8b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNABWVKZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmqOkKRzbDt6wJ4RawqzUjONT4mPeQJmUBhL2V45B%2BAiEA4PreMYEznX9eVRLoy2K5ZlA6rUfi7I2rTPt2KmtJU4Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI%2Fwogd8W9hTT00MvircA4WCRQxlzeXfq9WAHwyEz8Hgcd4v2ktO%2FgYGeAdZp5lCnBNnBp4hh3ydo0VqhTQP6BMwr%2Fiq15latvDljkxPKrRji0mmS8sAG9PH1bGIPbhX53DiYYyu6Rq%2BpmxvienJhqodSifXZBkI3lkY0sheHNGpSA0EqRTuiJ6Sv1gBuc7vXGbzi2fiH0%2FNbnYEnD%2BCEvaZxCl1d5b2sZEXGS7ZzAx7DFA8V9hW%2BpcBqw6I5wJKFayRu9Lro25bEzeAHzDYBNaERFhKmibD2QRY5Jdk408OWg8FbBFcq027%2Bt0ocdx3Vm%2FJhf6iaEIXtd61x0cMCTkCjVVGPtZA37BCOkLHHbDP2xkGHysQWALHS73eQ1sitrRYIqAbI9cYx5YSf0533eFIR%2FPtQonQI0asVXDH7jLZC4TEGfexev8kgRnxoMmHCKr8oYPTMDJwr3x%2BlqvXFpbHKdD08FWhfoksU8%2BcOFd%2BV5%2B9jzAJjfNtc351nixWQ%2FcrS6brWvdViQVVobDCZiaOR60zB%2F4KQ3tVeheSg%2FpIPwxGrRezTALH69XXv9RX9nhr5g2z6l16eLOcxLtJPEnGdDyw6KeKwp7QNCQ3k5NES1bSzPNXepwJ9p0GQBN0jVyZ7sQT%2FFS0dFooMLCG98QGOqUBDgEdJKjDcblh%2FxIdVPxskbNEOxM43MIeNtG%2Flsd8OTrJhI6GGzJ%2FUAgBbjHxi1YvlAmt5cgmTeauMzWSy0GmEoQS9VBYFzeUSpRXubFjDryxTiX9Nw%2BfLKeb5GgwAhsLfHVHHpSA5fg1fhhU4AJm0rZf1MWdscojf8N8BfKu8wFkHBylAiMossuLJYwirb01%2FjMbPG1bQyPOBOg04rL18ga51aPj&X-Amz-Signature=c4c0571653380f1f960cc6ceb48ee216c04ba78e1d3efa3de2ff7e45fabc5dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNABWVKZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmqOkKRzbDt6wJ4RawqzUjONT4mPeQJmUBhL2V45B%2BAiEA4PreMYEznX9eVRLoy2K5ZlA6rUfi7I2rTPt2KmtJU4Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI%2Fwogd8W9hTT00MvircA4WCRQxlzeXfq9WAHwyEz8Hgcd4v2ktO%2FgYGeAdZp5lCnBNnBp4hh3ydo0VqhTQP6BMwr%2Fiq15latvDljkxPKrRji0mmS8sAG9PH1bGIPbhX53DiYYyu6Rq%2BpmxvienJhqodSifXZBkI3lkY0sheHNGpSA0EqRTuiJ6Sv1gBuc7vXGbzi2fiH0%2FNbnYEnD%2BCEvaZxCl1d5b2sZEXGS7ZzAx7DFA8V9hW%2BpcBqw6I5wJKFayRu9Lro25bEzeAHzDYBNaERFhKmibD2QRY5Jdk408OWg8FbBFcq027%2Bt0ocdx3Vm%2FJhf6iaEIXtd61x0cMCTkCjVVGPtZA37BCOkLHHbDP2xkGHysQWALHS73eQ1sitrRYIqAbI9cYx5YSf0533eFIR%2FPtQonQI0asVXDH7jLZC4TEGfexev8kgRnxoMmHCKr8oYPTMDJwr3x%2BlqvXFpbHKdD08FWhfoksU8%2BcOFd%2BV5%2B9jzAJjfNtc351nixWQ%2FcrS6brWvdViQVVobDCZiaOR60zB%2F4KQ3tVeheSg%2FpIPwxGrRezTALH69XXv9RX9nhr5g2z6l16eLOcxLtJPEnGdDyw6KeKwp7QNCQ3k5NES1bSzPNXepwJ9p0GQBN0jVyZ7sQT%2FFS0dFooMLCG98QGOqUBDgEdJKjDcblh%2FxIdVPxskbNEOxM43MIeNtG%2Flsd8OTrJhI6GGzJ%2FUAgBbjHxi1YvlAmt5cgmTeauMzWSy0GmEoQS9VBYFzeUSpRXubFjDryxTiX9Nw%2BfLKeb5GgwAhsLfHVHHpSA5fg1fhhU4AJm0rZf1MWdscojf8N8BfKu8wFkHBylAiMossuLJYwirb01%2FjMbPG1bQyPOBOg04rL18ga51aPj&X-Amz-Signature=f468920f98432d827a49e5f15a82935e970bb6af8b6442e032898333c9a68f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNABWVKZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmqOkKRzbDt6wJ4RawqzUjONT4mPeQJmUBhL2V45B%2BAiEA4PreMYEznX9eVRLoy2K5ZlA6rUfi7I2rTPt2KmtJU4Eq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI%2Fwogd8W9hTT00MvircA4WCRQxlzeXfq9WAHwyEz8Hgcd4v2ktO%2FgYGeAdZp5lCnBNnBp4hh3ydo0VqhTQP6BMwr%2Fiq15latvDljkxPKrRji0mmS8sAG9PH1bGIPbhX53DiYYyu6Rq%2BpmxvienJhqodSifXZBkI3lkY0sheHNGpSA0EqRTuiJ6Sv1gBuc7vXGbzi2fiH0%2FNbnYEnD%2BCEvaZxCl1d5b2sZEXGS7ZzAx7DFA8V9hW%2BpcBqw6I5wJKFayRu9Lro25bEzeAHzDYBNaERFhKmibD2QRY5Jdk408OWg8FbBFcq027%2Bt0ocdx3Vm%2FJhf6iaEIXtd61x0cMCTkCjVVGPtZA37BCOkLHHbDP2xkGHysQWALHS73eQ1sitrRYIqAbI9cYx5YSf0533eFIR%2FPtQonQI0asVXDH7jLZC4TEGfexev8kgRnxoMmHCKr8oYPTMDJwr3x%2BlqvXFpbHKdD08FWhfoksU8%2BcOFd%2BV5%2B9jzAJjfNtc351nixWQ%2FcrS6brWvdViQVVobDCZiaOR60zB%2F4KQ3tVeheSg%2FpIPwxGrRezTALH69XXv9RX9nhr5g2z6l16eLOcxLtJPEnGdDyw6KeKwp7QNCQ3k5NES1bSzPNXepwJ9p0GQBN0jVyZ7sQT%2FFS0dFooMLCG98QGOqUBDgEdJKjDcblh%2FxIdVPxskbNEOxM43MIeNtG%2Flsd8OTrJhI6GGzJ%2FUAgBbjHxi1YvlAmt5cgmTeauMzWSy0GmEoQS9VBYFzeUSpRXubFjDryxTiX9Nw%2BfLKeb5GgwAhsLfHVHHpSA5fg1fhhU4AJm0rZf1MWdscojf8N8BfKu8wFkHBylAiMossuLJYwirb01%2FjMbPG1bQyPOBOg04rL18ga51aPj&X-Amz-Signature=f9a8061bc52ab4f645f6b2c610008bbcf7b31d31205f997964df54477102d4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
