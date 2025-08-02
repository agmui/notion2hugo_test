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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7SGK5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsoVwD1nEn%2BPjQ7uTgTzBLjZT7dCWFQ7icYmPPYKDoMAiB0AY3UsJEOH4WHZsAr6YiX%2BHBzIzJrnFm%2B4d%2FSlWL0ESr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRy7NZv1%2BYJpYUydxKtwDe50NAnN14Mf24HFD0Y4bJfMqhwzzRHzXdV%2FosnfvjaHgfZEF4Dxe7qSxBkOhdiNLT%2BRQzO9vd%2FX32WC%2F18G3LodkEaxdzYgQUgsi5wu7RFU%2B6%2B6m3f7uyMn%2BdlzkkRE5NF9znFNoNyV%2FmDW%2FrklmKxxiW79nL4AoSkXjA6xfHFlhMhIPRZJpTIAnaS2tD6Klo%2FdWZhRI8k69dYeGzRuvjmGfCyxjKnObd2NMORvIAM7hU0UXYA0QqqgiiJwsaCf0SXgBz2OQSDIqqanvj9f1HB40Bw8SE7QMrKunjH9Ha4EJDoKBSqcU145Vgbz6fSEuMnbXotq25WHiZLU%2FGPwfoXcVTkXw9Z9QbxnxVre9SqCmBIpxz7r9HP1f7586VJCGhIoxX9OnS6WsorwQWm29DMkPr0LSLIFirq2ZDqswL8L7fa%2BuqPBXvyp39hzyNGtsF%2B8hobiZQZLIe8yq03YC%2BhrCqxxm3TXE2LU2R7QiUZS1moC7Ue0FA9YFsiggGJeCZyUU9VccPpth90wfA3ZHlBYo57l6sgJely6reeRzGZVPGEGpfrAqh8xwcug6zrNSYoqNU3nK2hovwolNyeiBLUupxWfnMdFDmh5a5SjLEUNH7Eu%2BWcWJ%2FyRaIgQwrMS5xAY6pgGVscnoJuQ2pO7G71Eloy1Y2QywRAAxd7gn1mJm83ooEAwWnNr3i8LDL2SDhiQvUxHq1BejCjIdQWv0%2BBzeDBvDUxEukDSte2EQpz1YHpeaKFrutZXYI4kG6MVPfyp1v7UcUfAtxHZuNwVXf11jZEunFeHDaRPVmo8BG593XZPbl9rWToWFW7MikV4FGawP84HEfbKJL8mGfktwm7uf1FFtNdlQlByI&X-Amz-Signature=5d3f152b3c0da1caf831449e5a29f13b6efd2e622a673c9d98a9b57776a9b6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7SGK5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsoVwD1nEn%2BPjQ7uTgTzBLjZT7dCWFQ7icYmPPYKDoMAiB0AY3UsJEOH4WHZsAr6YiX%2BHBzIzJrnFm%2B4d%2FSlWL0ESr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRy7NZv1%2BYJpYUydxKtwDe50NAnN14Mf24HFD0Y4bJfMqhwzzRHzXdV%2FosnfvjaHgfZEF4Dxe7qSxBkOhdiNLT%2BRQzO9vd%2FX32WC%2F18G3LodkEaxdzYgQUgsi5wu7RFU%2B6%2B6m3f7uyMn%2BdlzkkRE5NF9znFNoNyV%2FmDW%2FrklmKxxiW79nL4AoSkXjA6xfHFlhMhIPRZJpTIAnaS2tD6Klo%2FdWZhRI8k69dYeGzRuvjmGfCyxjKnObd2NMORvIAM7hU0UXYA0QqqgiiJwsaCf0SXgBz2OQSDIqqanvj9f1HB40Bw8SE7QMrKunjH9Ha4EJDoKBSqcU145Vgbz6fSEuMnbXotq25WHiZLU%2FGPwfoXcVTkXw9Z9QbxnxVre9SqCmBIpxz7r9HP1f7586VJCGhIoxX9OnS6WsorwQWm29DMkPr0LSLIFirq2ZDqswL8L7fa%2BuqPBXvyp39hzyNGtsF%2B8hobiZQZLIe8yq03YC%2BhrCqxxm3TXE2LU2R7QiUZS1moC7Ue0FA9YFsiggGJeCZyUU9VccPpth90wfA3ZHlBYo57l6sgJely6reeRzGZVPGEGpfrAqh8xwcug6zrNSYoqNU3nK2hovwolNyeiBLUupxWfnMdFDmh5a5SjLEUNH7Eu%2BWcWJ%2FyRaIgQwrMS5xAY6pgGVscnoJuQ2pO7G71Eloy1Y2QywRAAxd7gn1mJm83ooEAwWnNr3i8LDL2SDhiQvUxHq1BejCjIdQWv0%2BBzeDBvDUxEukDSte2EQpz1YHpeaKFrutZXYI4kG6MVPfyp1v7UcUfAtxHZuNwVXf11jZEunFeHDaRPVmo8BG593XZPbl9rWToWFW7MikV4FGawP84HEfbKJL8mGfktwm7uf1FFtNdlQlByI&X-Amz-Signature=1e8ace6bb8a785c155946afca1b1eeeeb8fadcfe0eefc8b1fd113669fb58c1e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7SGK5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsoVwD1nEn%2BPjQ7uTgTzBLjZT7dCWFQ7icYmPPYKDoMAiB0AY3UsJEOH4WHZsAr6YiX%2BHBzIzJrnFm%2B4d%2FSlWL0ESr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRy7NZv1%2BYJpYUydxKtwDe50NAnN14Mf24HFD0Y4bJfMqhwzzRHzXdV%2FosnfvjaHgfZEF4Dxe7qSxBkOhdiNLT%2BRQzO9vd%2FX32WC%2F18G3LodkEaxdzYgQUgsi5wu7RFU%2B6%2B6m3f7uyMn%2BdlzkkRE5NF9znFNoNyV%2FmDW%2FrklmKxxiW79nL4AoSkXjA6xfHFlhMhIPRZJpTIAnaS2tD6Klo%2FdWZhRI8k69dYeGzRuvjmGfCyxjKnObd2NMORvIAM7hU0UXYA0QqqgiiJwsaCf0SXgBz2OQSDIqqanvj9f1HB40Bw8SE7QMrKunjH9Ha4EJDoKBSqcU145Vgbz6fSEuMnbXotq25WHiZLU%2FGPwfoXcVTkXw9Z9QbxnxVre9SqCmBIpxz7r9HP1f7586VJCGhIoxX9OnS6WsorwQWm29DMkPr0LSLIFirq2ZDqswL8L7fa%2BuqPBXvyp39hzyNGtsF%2B8hobiZQZLIe8yq03YC%2BhrCqxxm3TXE2LU2R7QiUZS1moC7Ue0FA9YFsiggGJeCZyUU9VccPpth90wfA3ZHlBYo57l6sgJely6reeRzGZVPGEGpfrAqh8xwcug6zrNSYoqNU3nK2hovwolNyeiBLUupxWfnMdFDmh5a5SjLEUNH7Eu%2BWcWJ%2FyRaIgQwrMS5xAY6pgGVscnoJuQ2pO7G71Eloy1Y2QywRAAxd7gn1mJm83ooEAwWnNr3i8LDL2SDhiQvUxHq1BejCjIdQWv0%2BBzeDBvDUxEukDSte2EQpz1YHpeaKFrutZXYI4kG6MVPfyp1v7UcUfAtxHZuNwVXf11jZEunFeHDaRPVmo8BG593XZPbl9rWToWFW7MikV4FGawP84HEfbKJL8mGfktwm7uf1FFtNdlQlByI&X-Amz-Signature=46332429b07c047649bacea91755cee7582195dcb1019a8439c0c306efa25af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7SGK5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsoVwD1nEn%2BPjQ7uTgTzBLjZT7dCWFQ7icYmPPYKDoMAiB0AY3UsJEOH4WHZsAr6YiX%2BHBzIzJrnFm%2B4d%2FSlWL0ESr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRy7NZv1%2BYJpYUydxKtwDe50NAnN14Mf24HFD0Y4bJfMqhwzzRHzXdV%2FosnfvjaHgfZEF4Dxe7qSxBkOhdiNLT%2BRQzO9vd%2FX32WC%2F18G3LodkEaxdzYgQUgsi5wu7RFU%2B6%2B6m3f7uyMn%2BdlzkkRE5NF9znFNoNyV%2FmDW%2FrklmKxxiW79nL4AoSkXjA6xfHFlhMhIPRZJpTIAnaS2tD6Klo%2FdWZhRI8k69dYeGzRuvjmGfCyxjKnObd2NMORvIAM7hU0UXYA0QqqgiiJwsaCf0SXgBz2OQSDIqqanvj9f1HB40Bw8SE7QMrKunjH9Ha4EJDoKBSqcU145Vgbz6fSEuMnbXotq25WHiZLU%2FGPwfoXcVTkXw9Z9QbxnxVre9SqCmBIpxz7r9HP1f7586VJCGhIoxX9OnS6WsorwQWm29DMkPr0LSLIFirq2ZDqswL8L7fa%2BuqPBXvyp39hzyNGtsF%2B8hobiZQZLIe8yq03YC%2BhrCqxxm3TXE2LU2R7QiUZS1moC7Ue0FA9YFsiggGJeCZyUU9VccPpth90wfA3ZHlBYo57l6sgJely6reeRzGZVPGEGpfrAqh8xwcug6zrNSYoqNU3nK2hovwolNyeiBLUupxWfnMdFDmh5a5SjLEUNH7Eu%2BWcWJ%2FyRaIgQwrMS5xAY6pgGVscnoJuQ2pO7G71Eloy1Y2QywRAAxd7gn1mJm83ooEAwWnNr3i8LDL2SDhiQvUxHq1BejCjIdQWv0%2BBzeDBvDUxEukDSte2EQpz1YHpeaKFrutZXYI4kG6MVPfyp1v7UcUfAtxHZuNwVXf11jZEunFeHDaRPVmo8BG593XZPbl9rWToWFW7MikV4FGawP84HEfbKJL8mGfktwm7uf1FFtNdlQlByI&X-Amz-Signature=94780fb13f0ff9bcdcb2cdafc9e1482da460f206b2a104fcf836d7d38ed2358b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7SGK5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsoVwD1nEn%2BPjQ7uTgTzBLjZT7dCWFQ7icYmPPYKDoMAiB0AY3UsJEOH4WHZsAr6YiX%2BHBzIzJrnFm%2B4d%2FSlWL0ESr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRy7NZv1%2BYJpYUydxKtwDe50NAnN14Mf24HFD0Y4bJfMqhwzzRHzXdV%2FosnfvjaHgfZEF4Dxe7qSxBkOhdiNLT%2BRQzO9vd%2FX32WC%2F18G3LodkEaxdzYgQUgsi5wu7RFU%2B6%2B6m3f7uyMn%2BdlzkkRE5NF9znFNoNyV%2FmDW%2FrklmKxxiW79nL4AoSkXjA6xfHFlhMhIPRZJpTIAnaS2tD6Klo%2FdWZhRI8k69dYeGzRuvjmGfCyxjKnObd2NMORvIAM7hU0UXYA0QqqgiiJwsaCf0SXgBz2OQSDIqqanvj9f1HB40Bw8SE7QMrKunjH9Ha4EJDoKBSqcU145Vgbz6fSEuMnbXotq25WHiZLU%2FGPwfoXcVTkXw9Z9QbxnxVre9SqCmBIpxz7r9HP1f7586VJCGhIoxX9OnS6WsorwQWm29DMkPr0LSLIFirq2ZDqswL8L7fa%2BuqPBXvyp39hzyNGtsF%2B8hobiZQZLIe8yq03YC%2BhrCqxxm3TXE2LU2R7QiUZS1moC7Ue0FA9YFsiggGJeCZyUU9VccPpth90wfA3ZHlBYo57l6sgJely6reeRzGZVPGEGpfrAqh8xwcug6zrNSYoqNU3nK2hovwolNyeiBLUupxWfnMdFDmh5a5SjLEUNH7Eu%2BWcWJ%2FyRaIgQwrMS5xAY6pgGVscnoJuQ2pO7G71Eloy1Y2QywRAAxd7gn1mJm83ooEAwWnNr3i8LDL2SDhiQvUxHq1BejCjIdQWv0%2BBzeDBvDUxEukDSte2EQpz1YHpeaKFrutZXYI4kG6MVPfyp1v7UcUfAtxHZuNwVXf11jZEunFeHDaRPVmo8BG593XZPbl9rWToWFW7MikV4FGawP84HEfbKJL8mGfktwm7uf1FFtNdlQlByI&X-Amz-Signature=cf4c64b63e7e1425ac8bd2076b39ed07d38f9541ba545f72589a9adbe9126846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7SGK5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsoVwD1nEn%2BPjQ7uTgTzBLjZT7dCWFQ7icYmPPYKDoMAiB0AY3UsJEOH4WHZsAr6YiX%2BHBzIzJrnFm%2B4d%2FSlWL0ESr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRy7NZv1%2BYJpYUydxKtwDe50NAnN14Mf24HFD0Y4bJfMqhwzzRHzXdV%2FosnfvjaHgfZEF4Dxe7qSxBkOhdiNLT%2BRQzO9vd%2FX32WC%2F18G3LodkEaxdzYgQUgsi5wu7RFU%2B6%2B6m3f7uyMn%2BdlzkkRE5NF9znFNoNyV%2FmDW%2FrklmKxxiW79nL4AoSkXjA6xfHFlhMhIPRZJpTIAnaS2tD6Klo%2FdWZhRI8k69dYeGzRuvjmGfCyxjKnObd2NMORvIAM7hU0UXYA0QqqgiiJwsaCf0SXgBz2OQSDIqqanvj9f1HB40Bw8SE7QMrKunjH9Ha4EJDoKBSqcU145Vgbz6fSEuMnbXotq25WHiZLU%2FGPwfoXcVTkXw9Z9QbxnxVre9SqCmBIpxz7r9HP1f7586VJCGhIoxX9OnS6WsorwQWm29DMkPr0LSLIFirq2ZDqswL8L7fa%2BuqPBXvyp39hzyNGtsF%2B8hobiZQZLIe8yq03YC%2BhrCqxxm3TXE2LU2R7QiUZS1moC7Ue0FA9YFsiggGJeCZyUU9VccPpth90wfA3ZHlBYo57l6sgJely6reeRzGZVPGEGpfrAqh8xwcug6zrNSYoqNU3nK2hovwolNyeiBLUupxWfnMdFDmh5a5SjLEUNH7Eu%2BWcWJ%2FyRaIgQwrMS5xAY6pgGVscnoJuQ2pO7G71Eloy1Y2QywRAAxd7gn1mJm83ooEAwWnNr3i8LDL2SDhiQvUxHq1BejCjIdQWv0%2BBzeDBvDUxEukDSte2EQpz1YHpeaKFrutZXYI4kG6MVPfyp1v7UcUfAtxHZuNwVXf11jZEunFeHDaRPVmo8BG593XZPbl9rWToWFW7MikV4FGawP84HEfbKJL8mGfktwm7uf1FFtNdlQlByI&X-Amz-Signature=1deb5f0f1ff4bcf8990f0c28f1f72a1de04c17539c16b79a4835693422b2ee2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7SGK5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsoVwD1nEn%2BPjQ7uTgTzBLjZT7dCWFQ7icYmPPYKDoMAiB0AY3UsJEOH4WHZsAr6YiX%2BHBzIzJrnFm%2B4d%2FSlWL0ESr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRy7NZv1%2BYJpYUydxKtwDe50NAnN14Mf24HFD0Y4bJfMqhwzzRHzXdV%2FosnfvjaHgfZEF4Dxe7qSxBkOhdiNLT%2BRQzO9vd%2FX32WC%2F18G3LodkEaxdzYgQUgsi5wu7RFU%2B6%2B6m3f7uyMn%2BdlzkkRE5NF9znFNoNyV%2FmDW%2FrklmKxxiW79nL4AoSkXjA6xfHFlhMhIPRZJpTIAnaS2tD6Klo%2FdWZhRI8k69dYeGzRuvjmGfCyxjKnObd2NMORvIAM7hU0UXYA0QqqgiiJwsaCf0SXgBz2OQSDIqqanvj9f1HB40Bw8SE7QMrKunjH9Ha4EJDoKBSqcU145Vgbz6fSEuMnbXotq25WHiZLU%2FGPwfoXcVTkXw9Z9QbxnxVre9SqCmBIpxz7r9HP1f7586VJCGhIoxX9OnS6WsorwQWm29DMkPr0LSLIFirq2ZDqswL8L7fa%2BuqPBXvyp39hzyNGtsF%2B8hobiZQZLIe8yq03YC%2BhrCqxxm3TXE2LU2R7QiUZS1moC7Ue0FA9YFsiggGJeCZyUU9VccPpth90wfA3ZHlBYo57l6sgJely6reeRzGZVPGEGpfrAqh8xwcug6zrNSYoqNU3nK2hovwolNyeiBLUupxWfnMdFDmh5a5SjLEUNH7Eu%2BWcWJ%2FyRaIgQwrMS5xAY6pgGVscnoJuQ2pO7G71Eloy1Y2QywRAAxd7gn1mJm83ooEAwWnNr3i8LDL2SDhiQvUxHq1BejCjIdQWv0%2BBzeDBvDUxEukDSte2EQpz1YHpeaKFrutZXYI4kG6MVPfyp1v7UcUfAtxHZuNwVXf11jZEunFeHDaRPVmo8BG593XZPbl9rWToWFW7MikV4FGawP84HEfbKJL8mGfktwm7uf1FFtNdlQlByI&X-Amz-Signature=9963c7c5366cc0829521823704c5f58f4b52682f0e1b4ee5b0e1a53165fe712b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7SGK5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsoVwD1nEn%2BPjQ7uTgTzBLjZT7dCWFQ7icYmPPYKDoMAiB0AY3UsJEOH4WHZsAr6YiX%2BHBzIzJrnFm%2B4d%2FSlWL0ESr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRy7NZv1%2BYJpYUydxKtwDe50NAnN14Mf24HFD0Y4bJfMqhwzzRHzXdV%2FosnfvjaHgfZEF4Dxe7qSxBkOhdiNLT%2BRQzO9vd%2FX32WC%2F18G3LodkEaxdzYgQUgsi5wu7RFU%2B6%2B6m3f7uyMn%2BdlzkkRE5NF9znFNoNyV%2FmDW%2FrklmKxxiW79nL4AoSkXjA6xfHFlhMhIPRZJpTIAnaS2tD6Klo%2FdWZhRI8k69dYeGzRuvjmGfCyxjKnObd2NMORvIAM7hU0UXYA0QqqgiiJwsaCf0SXgBz2OQSDIqqanvj9f1HB40Bw8SE7QMrKunjH9Ha4EJDoKBSqcU145Vgbz6fSEuMnbXotq25WHiZLU%2FGPwfoXcVTkXw9Z9QbxnxVre9SqCmBIpxz7r9HP1f7586VJCGhIoxX9OnS6WsorwQWm29DMkPr0LSLIFirq2ZDqswL8L7fa%2BuqPBXvyp39hzyNGtsF%2B8hobiZQZLIe8yq03YC%2BhrCqxxm3TXE2LU2R7QiUZS1moC7Ue0FA9YFsiggGJeCZyUU9VccPpth90wfA3ZHlBYo57l6sgJely6reeRzGZVPGEGpfrAqh8xwcug6zrNSYoqNU3nK2hovwolNyeiBLUupxWfnMdFDmh5a5SjLEUNH7Eu%2BWcWJ%2FyRaIgQwrMS5xAY6pgGVscnoJuQ2pO7G71Eloy1Y2QywRAAxd7gn1mJm83ooEAwWnNr3i8LDL2SDhiQvUxHq1BejCjIdQWv0%2BBzeDBvDUxEukDSte2EQpz1YHpeaKFrutZXYI4kG6MVPfyp1v7UcUfAtxHZuNwVXf11jZEunFeHDaRPVmo8BG593XZPbl9rWToWFW7MikV4FGawP84HEfbKJL8mGfktwm7uf1FFtNdlQlByI&X-Amz-Signature=665dcb9439b92489f56d0b8bc7318528715b6863fef4c1ddbaf6a19b78c22853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
