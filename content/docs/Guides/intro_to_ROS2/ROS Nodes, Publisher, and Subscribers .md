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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SM4LKTS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEdY9nhsY5QDs9lKs5HvcUbLyIH50oK8Jq5UmmbCQi6HAiEA28qdzehzVF0VmPp3OZxpVtReFB5EH7b6FxsnhXYzXRwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHtPcebdBwlZTJGx6CrcAwipwYei2SHRS%2FKQLvIiNACrmzwlyABqZf%2B3lx%2BvMSDvV0iqd9rydfh2frccVXgSEmqjw5k24Wmn1a11OFFQTRQGXpnp%2B%2FCY3MhADwHidMUt%2FQ7OAa3DrCDxZnG0oFHjqgEDY3LMSbGGWQZ3OIMlum3gNfbVdpdasi0R776dffSnpW5dUGyu6Wbo5TPhGJIF0%2Behd56ayIW2z6DuMMrV4R3NUwEJ7k4yz0xWrzxhw0diXTRKIB22nHM8piSsVdEeGgAquOf8WuRGVDmCDPJxw8lb%2BErmeK%2FT8my4pyWjncOVcEj%2B1wsKuNNjVwdmEO5ewqRsy0P%2B%2F%2F8Ht%2FvxWNSkU7FV%2B8iM400YXJYE%2F%2B9GFvciBBqsZY%2BjkCLUWQdrS0YuBawmTVnpwJhibDGJDL10ECk4Doy9OQgfu7uzJHCJIwsY%2FeEQTHgtvagmbAMGPkZnuT0qobD8OT%2F%2BXszsMNnRntgEIbSJ%2FZHjkujYp6aBfeX7vYNuFD9WGkx0Twds4p5NIsEzBVKUz24CEv79XzqSyTQTtfugvreuygL2sZFJX8SfDj%2BeCbferqCY8PE9hC8jY4G%2FaTrCOZhlOCyiZzO5XHBb6n9uQTwU1gQKuqjXQvJs%2FS63vwbXWX1T49LfMKy9rr4GOqUBpPjP%2F3SVOAdUaIeFiUCHCNjiPkMP3TjSjA3e9pRgqFR0bT5cDOxetrjoaUgCgPUmIq6QBJVJXF479Ok9Ui8MzeUBtQ7SUSr7fgKWty0CtrVTisfSNQbCsDAP95BPUnleb1PrI86jmkIGlJw8kTD2ZOsYfLfSOt5w2KCucFtj1DnDiXqSUfl8911QxwMur4o0Svs%2BuG8Vs89g8RMK3o4uHXlaPRxW&X-Amz-Signature=7103c858490524a374537d8d2830464a77e746e48398d0210a252709a405509d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SM4LKTS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEdY9nhsY5QDs9lKs5HvcUbLyIH50oK8Jq5UmmbCQi6HAiEA28qdzehzVF0VmPp3OZxpVtReFB5EH7b6FxsnhXYzXRwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHtPcebdBwlZTJGx6CrcAwipwYei2SHRS%2FKQLvIiNACrmzwlyABqZf%2B3lx%2BvMSDvV0iqd9rydfh2frccVXgSEmqjw5k24Wmn1a11OFFQTRQGXpnp%2B%2FCY3MhADwHidMUt%2FQ7OAa3DrCDxZnG0oFHjqgEDY3LMSbGGWQZ3OIMlum3gNfbVdpdasi0R776dffSnpW5dUGyu6Wbo5TPhGJIF0%2Behd56ayIW2z6DuMMrV4R3NUwEJ7k4yz0xWrzxhw0diXTRKIB22nHM8piSsVdEeGgAquOf8WuRGVDmCDPJxw8lb%2BErmeK%2FT8my4pyWjncOVcEj%2B1wsKuNNjVwdmEO5ewqRsy0P%2B%2F%2F8Ht%2FvxWNSkU7FV%2B8iM400YXJYE%2F%2B9GFvciBBqsZY%2BjkCLUWQdrS0YuBawmTVnpwJhibDGJDL10ECk4Doy9OQgfu7uzJHCJIwsY%2FeEQTHgtvagmbAMGPkZnuT0qobD8OT%2F%2BXszsMNnRntgEIbSJ%2FZHjkujYp6aBfeX7vYNuFD9WGkx0Twds4p5NIsEzBVKUz24CEv79XzqSyTQTtfugvreuygL2sZFJX8SfDj%2BeCbferqCY8PE9hC8jY4G%2FaTrCOZhlOCyiZzO5XHBb6n9uQTwU1gQKuqjXQvJs%2FS63vwbXWX1T49LfMKy9rr4GOqUBpPjP%2F3SVOAdUaIeFiUCHCNjiPkMP3TjSjA3e9pRgqFR0bT5cDOxetrjoaUgCgPUmIq6QBJVJXF479Ok9Ui8MzeUBtQ7SUSr7fgKWty0CtrVTisfSNQbCsDAP95BPUnleb1PrI86jmkIGlJw8kTD2ZOsYfLfSOt5w2KCucFtj1DnDiXqSUfl8911QxwMur4o0Svs%2BuG8Vs89g8RMK3o4uHXlaPRxW&X-Amz-Signature=00abab6fb7945aa4b5488295a93b7f91f1220fbc5a1c9cba96a1258a71cf6a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SM4LKTS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEdY9nhsY5QDs9lKs5HvcUbLyIH50oK8Jq5UmmbCQi6HAiEA28qdzehzVF0VmPp3OZxpVtReFB5EH7b6FxsnhXYzXRwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHtPcebdBwlZTJGx6CrcAwipwYei2SHRS%2FKQLvIiNACrmzwlyABqZf%2B3lx%2BvMSDvV0iqd9rydfh2frccVXgSEmqjw5k24Wmn1a11OFFQTRQGXpnp%2B%2FCY3MhADwHidMUt%2FQ7OAa3DrCDxZnG0oFHjqgEDY3LMSbGGWQZ3OIMlum3gNfbVdpdasi0R776dffSnpW5dUGyu6Wbo5TPhGJIF0%2Behd56ayIW2z6DuMMrV4R3NUwEJ7k4yz0xWrzxhw0diXTRKIB22nHM8piSsVdEeGgAquOf8WuRGVDmCDPJxw8lb%2BErmeK%2FT8my4pyWjncOVcEj%2B1wsKuNNjVwdmEO5ewqRsy0P%2B%2F%2F8Ht%2FvxWNSkU7FV%2B8iM400YXJYE%2F%2B9GFvciBBqsZY%2BjkCLUWQdrS0YuBawmTVnpwJhibDGJDL10ECk4Doy9OQgfu7uzJHCJIwsY%2FeEQTHgtvagmbAMGPkZnuT0qobD8OT%2F%2BXszsMNnRntgEIbSJ%2FZHjkujYp6aBfeX7vYNuFD9WGkx0Twds4p5NIsEzBVKUz24CEv79XzqSyTQTtfugvreuygL2sZFJX8SfDj%2BeCbferqCY8PE9hC8jY4G%2FaTrCOZhlOCyiZzO5XHBb6n9uQTwU1gQKuqjXQvJs%2FS63vwbXWX1T49LfMKy9rr4GOqUBpPjP%2F3SVOAdUaIeFiUCHCNjiPkMP3TjSjA3e9pRgqFR0bT5cDOxetrjoaUgCgPUmIq6QBJVJXF479Ok9Ui8MzeUBtQ7SUSr7fgKWty0CtrVTisfSNQbCsDAP95BPUnleb1PrI86jmkIGlJw8kTD2ZOsYfLfSOt5w2KCucFtj1DnDiXqSUfl8911QxwMur4o0Svs%2BuG8Vs89g8RMK3o4uHXlaPRxW&X-Amz-Signature=fb1b92671d04065460941695e3b13ee2e0470066a3b6907d90b5016e33786758&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SM4LKTS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEdY9nhsY5QDs9lKs5HvcUbLyIH50oK8Jq5UmmbCQi6HAiEA28qdzehzVF0VmPp3OZxpVtReFB5EH7b6FxsnhXYzXRwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHtPcebdBwlZTJGx6CrcAwipwYei2SHRS%2FKQLvIiNACrmzwlyABqZf%2B3lx%2BvMSDvV0iqd9rydfh2frccVXgSEmqjw5k24Wmn1a11OFFQTRQGXpnp%2B%2FCY3MhADwHidMUt%2FQ7OAa3DrCDxZnG0oFHjqgEDY3LMSbGGWQZ3OIMlum3gNfbVdpdasi0R776dffSnpW5dUGyu6Wbo5TPhGJIF0%2Behd56ayIW2z6DuMMrV4R3NUwEJ7k4yz0xWrzxhw0diXTRKIB22nHM8piSsVdEeGgAquOf8WuRGVDmCDPJxw8lb%2BErmeK%2FT8my4pyWjncOVcEj%2B1wsKuNNjVwdmEO5ewqRsy0P%2B%2F%2F8Ht%2FvxWNSkU7FV%2B8iM400YXJYE%2F%2B9GFvciBBqsZY%2BjkCLUWQdrS0YuBawmTVnpwJhibDGJDL10ECk4Doy9OQgfu7uzJHCJIwsY%2FeEQTHgtvagmbAMGPkZnuT0qobD8OT%2F%2BXszsMNnRntgEIbSJ%2FZHjkujYp6aBfeX7vYNuFD9WGkx0Twds4p5NIsEzBVKUz24CEv79XzqSyTQTtfugvreuygL2sZFJX8SfDj%2BeCbferqCY8PE9hC8jY4G%2FaTrCOZhlOCyiZzO5XHBb6n9uQTwU1gQKuqjXQvJs%2FS63vwbXWX1T49LfMKy9rr4GOqUBpPjP%2F3SVOAdUaIeFiUCHCNjiPkMP3TjSjA3e9pRgqFR0bT5cDOxetrjoaUgCgPUmIq6QBJVJXF479Ok9Ui8MzeUBtQ7SUSr7fgKWty0CtrVTisfSNQbCsDAP95BPUnleb1PrI86jmkIGlJw8kTD2ZOsYfLfSOt5w2KCucFtj1DnDiXqSUfl8911QxwMur4o0Svs%2BuG8Vs89g8RMK3o4uHXlaPRxW&X-Amz-Signature=30dc3bf6c2852718b6b063b51450efc43ca834f39d719708ec917a154432be1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SM4LKTS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEdY9nhsY5QDs9lKs5HvcUbLyIH50oK8Jq5UmmbCQi6HAiEA28qdzehzVF0VmPp3OZxpVtReFB5EH7b6FxsnhXYzXRwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHtPcebdBwlZTJGx6CrcAwipwYei2SHRS%2FKQLvIiNACrmzwlyABqZf%2B3lx%2BvMSDvV0iqd9rydfh2frccVXgSEmqjw5k24Wmn1a11OFFQTRQGXpnp%2B%2FCY3MhADwHidMUt%2FQ7OAa3DrCDxZnG0oFHjqgEDY3LMSbGGWQZ3OIMlum3gNfbVdpdasi0R776dffSnpW5dUGyu6Wbo5TPhGJIF0%2Behd56ayIW2z6DuMMrV4R3NUwEJ7k4yz0xWrzxhw0diXTRKIB22nHM8piSsVdEeGgAquOf8WuRGVDmCDPJxw8lb%2BErmeK%2FT8my4pyWjncOVcEj%2B1wsKuNNjVwdmEO5ewqRsy0P%2B%2F%2F8Ht%2FvxWNSkU7FV%2B8iM400YXJYE%2F%2B9GFvciBBqsZY%2BjkCLUWQdrS0YuBawmTVnpwJhibDGJDL10ECk4Doy9OQgfu7uzJHCJIwsY%2FeEQTHgtvagmbAMGPkZnuT0qobD8OT%2F%2BXszsMNnRntgEIbSJ%2FZHjkujYp6aBfeX7vYNuFD9WGkx0Twds4p5NIsEzBVKUz24CEv79XzqSyTQTtfugvreuygL2sZFJX8SfDj%2BeCbferqCY8PE9hC8jY4G%2FaTrCOZhlOCyiZzO5XHBb6n9uQTwU1gQKuqjXQvJs%2FS63vwbXWX1T49LfMKy9rr4GOqUBpPjP%2F3SVOAdUaIeFiUCHCNjiPkMP3TjSjA3e9pRgqFR0bT5cDOxetrjoaUgCgPUmIq6QBJVJXF479Ok9Ui8MzeUBtQ7SUSr7fgKWty0CtrVTisfSNQbCsDAP95BPUnleb1PrI86jmkIGlJw8kTD2ZOsYfLfSOt5w2KCucFtj1DnDiXqSUfl8911QxwMur4o0Svs%2BuG8Vs89g8RMK3o4uHXlaPRxW&X-Amz-Signature=d331f1a3aaa1d1efac52a852cf006348e349961c9699856465392bfbc2f925e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SM4LKTS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEdY9nhsY5QDs9lKs5HvcUbLyIH50oK8Jq5UmmbCQi6HAiEA28qdzehzVF0VmPp3OZxpVtReFB5EH7b6FxsnhXYzXRwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHtPcebdBwlZTJGx6CrcAwipwYei2SHRS%2FKQLvIiNACrmzwlyABqZf%2B3lx%2BvMSDvV0iqd9rydfh2frccVXgSEmqjw5k24Wmn1a11OFFQTRQGXpnp%2B%2FCY3MhADwHidMUt%2FQ7OAa3DrCDxZnG0oFHjqgEDY3LMSbGGWQZ3OIMlum3gNfbVdpdasi0R776dffSnpW5dUGyu6Wbo5TPhGJIF0%2Behd56ayIW2z6DuMMrV4R3NUwEJ7k4yz0xWrzxhw0diXTRKIB22nHM8piSsVdEeGgAquOf8WuRGVDmCDPJxw8lb%2BErmeK%2FT8my4pyWjncOVcEj%2B1wsKuNNjVwdmEO5ewqRsy0P%2B%2F%2F8Ht%2FvxWNSkU7FV%2B8iM400YXJYE%2F%2B9GFvciBBqsZY%2BjkCLUWQdrS0YuBawmTVnpwJhibDGJDL10ECk4Doy9OQgfu7uzJHCJIwsY%2FeEQTHgtvagmbAMGPkZnuT0qobD8OT%2F%2BXszsMNnRntgEIbSJ%2FZHjkujYp6aBfeX7vYNuFD9WGkx0Twds4p5NIsEzBVKUz24CEv79XzqSyTQTtfugvreuygL2sZFJX8SfDj%2BeCbferqCY8PE9hC8jY4G%2FaTrCOZhlOCyiZzO5XHBb6n9uQTwU1gQKuqjXQvJs%2FS63vwbXWX1T49LfMKy9rr4GOqUBpPjP%2F3SVOAdUaIeFiUCHCNjiPkMP3TjSjA3e9pRgqFR0bT5cDOxetrjoaUgCgPUmIq6QBJVJXF479Ok9Ui8MzeUBtQ7SUSr7fgKWty0CtrVTisfSNQbCsDAP95BPUnleb1PrI86jmkIGlJw8kTD2ZOsYfLfSOt5w2KCucFtj1DnDiXqSUfl8911QxwMur4o0Svs%2BuG8Vs89g8RMK3o4uHXlaPRxW&X-Amz-Signature=a0d69de25cf7e841651c16f0503ba11071f71a49e195c2ab619aadc8e9de240a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SM4LKTS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEdY9nhsY5QDs9lKs5HvcUbLyIH50oK8Jq5UmmbCQi6HAiEA28qdzehzVF0VmPp3OZxpVtReFB5EH7b6FxsnhXYzXRwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHtPcebdBwlZTJGx6CrcAwipwYei2SHRS%2FKQLvIiNACrmzwlyABqZf%2B3lx%2BvMSDvV0iqd9rydfh2frccVXgSEmqjw5k24Wmn1a11OFFQTRQGXpnp%2B%2FCY3MhADwHidMUt%2FQ7OAa3DrCDxZnG0oFHjqgEDY3LMSbGGWQZ3OIMlum3gNfbVdpdasi0R776dffSnpW5dUGyu6Wbo5TPhGJIF0%2Behd56ayIW2z6DuMMrV4R3NUwEJ7k4yz0xWrzxhw0diXTRKIB22nHM8piSsVdEeGgAquOf8WuRGVDmCDPJxw8lb%2BErmeK%2FT8my4pyWjncOVcEj%2B1wsKuNNjVwdmEO5ewqRsy0P%2B%2F%2F8Ht%2FvxWNSkU7FV%2B8iM400YXJYE%2F%2B9GFvciBBqsZY%2BjkCLUWQdrS0YuBawmTVnpwJhibDGJDL10ECk4Doy9OQgfu7uzJHCJIwsY%2FeEQTHgtvagmbAMGPkZnuT0qobD8OT%2F%2BXszsMNnRntgEIbSJ%2FZHjkujYp6aBfeX7vYNuFD9WGkx0Twds4p5NIsEzBVKUz24CEv79XzqSyTQTtfugvreuygL2sZFJX8SfDj%2BeCbferqCY8PE9hC8jY4G%2FaTrCOZhlOCyiZzO5XHBb6n9uQTwU1gQKuqjXQvJs%2FS63vwbXWX1T49LfMKy9rr4GOqUBpPjP%2F3SVOAdUaIeFiUCHCNjiPkMP3TjSjA3e9pRgqFR0bT5cDOxetrjoaUgCgPUmIq6QBJVJXF479Ok9Ui8MzeUBtQ7SUSr7fgKWty0CtrVTisfSNQbCsDAP95BPUnleb1PrI86jmkIGlJw8kTD2ZOsYfLfSOt5w2KCucFtj1DnDiXqSUfl8911QxwMur4o0Svs%2BuG8Vs89g8RMK3o4uHXlaPRxW&X-Amz-Signature=5135c5f74c4187f3366e8c546447ceff889f55ead6e66b641e5e4f664869bba8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SM4LKTS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEdY9nhsY5QDs9lKs5HvcUbLyIH50oK8Jq5UmmbCQi6HAiEA28qdzehzVF0VmPp3OZxpVtReFB5EH7b6FxsnhXYzXRwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHtPcebdBwlZTJGx6CrcAwipwYei2SHRS%2FKQLvIiNACrmzwlyABqZf%2B3lx%2BvMSDvV0iqd9rydfh2frccVXgSEmqjw5k24Wmn1a11OFFQTRQGXpnp%2B%2FCY3MhADwHidMUt%2FQ7OAa3DrCDxZnG0oFHjqgEDY3LMSbGGWQZ3OIMlum3gNfbVdpdasi0R776dffSnpW5dUGyu6Wbo5TPhGJIF0%2Behd56ayIW2z6DuMMrV4R3NUwEJ7k4yz0xWrzxhw0diXTRKIB22nHM8piSsVdEeGgAquOf8WuRGVDmCDPJxw8lb%2BErmeK%2FT8my4pyWjncOVcEj%2B1wsKuNNjVwdmEO5ewqRsy0P%2B%2F%2F8Ht%2FvxWNSkU7FV%2B8iM400YXJYE%2F%2B9GFvciBBqsZY%2BjkCLUWQdrS0YuBawmTVnpwJhibDGJDL10ECk4Doy9OQgfu7uzJHCJIwsY%2FeEQTHgtvagmbAMGPkZnuT0qobD8OT%2F%2BXszsMNnRntgEIbSJ%2FZHjkujYp6aBfeX7vYNuFD9WGkx0Twds4p5NIsEzBVKUz24CEv79XzqSyTQTtfugvreuygL2sZFJX8SfDj%2BeCbferqCY8PE9hC8jY4G%2FaTrCOZhlOCyiZzO5XHBb6n9uQTwU1gQKuqjXQvJs%2FS63vwbXWX1T49LfMKy9rr4GOqUBpPjP%2F3SVOAdUaIeFiUCHCNjiPkMP3TjSjA3e9pRgqFR0bT5cDOxetrjoaUgCgPUmIq6QBJVJXF479Ok9Ui8MzeUBtQ7SUSr7fgKWty0CtrVTisfSNQbCsDAP95BPUnleb1PrI86jmkIGlJw8kTD2ZOsYfLfSOt5w2KCucFtj1DnDiXqSUfl8911QxwMur4o0Svs%2BuG8Vs89g8RMK3o4uHXlaPRxW&X-Amz-Signature=e3d1c1723c7eb10cb247b52e714f78d10b9ae1a56710144615eccf4540224ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
