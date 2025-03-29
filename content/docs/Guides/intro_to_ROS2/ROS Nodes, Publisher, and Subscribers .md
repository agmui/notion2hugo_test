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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHHRQN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBPcMvIW%2Frl3ldFmnoNhZtqqOYsgh4Mdwr9YGdfBRCZFAiBs6qdgPpC6hFpTLEQNpmsyTRP5GSDiek%2BB2UvhR8heRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbB8j4ANj%2Fa4dMOn6KtwDmsx%2Fy4LsglmZSPajBamjvPVmo0QyDeuxSvv48l5vHtKCZZJ%2BKqRFzAiy7l9mzVkA845BUWUXXwFKINKuzWwRoDSA%2Bdys09OqcDYEDUMHcC%2BA1YExV8AvXv3mG1s73IZWN3ZIeVg5YNWO4C3pNvjuu2PIp55BpUuf9tGow1tjxRwNK%2BonKjoIuzCwbxraG%2FE23fXdgPQhf7bJvghJQ0WjVQsQHw2AlUbm1d80tDZnucCdynKXRnbmZEO2JeKPQQKu2XOfVNXPVnV1yoPx3wGTyqQx0U0Fs%2BBxLXE18oXu%2FmNMKaOOWMkzSKhJ8R%2FF%2FySHLBpz8RWyVmAykdxCph2TXyvoslrlwEnDH9ENs9c3h%2BgdN0Pe4dtW4IpGcT8g8D4JIm7FsZczZ3Mhuq7L6pPmWfeJ%2FdEElWr7tfmVFpxepQ22%2FQRUDXdyJpqJ2joPadHkHMK3poBpsBT%2BYDXtqnYUJ76ExTb4morg9rNUgAXchmk7%2BAXcppT7dAuvhQgLdj0ZRRxqFTxlc6VW%2B%2FFJlde4mnQ3Vav1sa37qBfb%2BXbGMDO8Zw4764LCcNcv6mtVnPd9DvdaxPz2ekYfyTh5hX2aned79zoG7RgxFYJAydeyN3xU%2FHRqtWEpmXzn0%2Bwwn8WevwY6pgGjXgdwoAxs26ytdnN8H2cDlbPUWQX2icWV8%2FXHlYRBEuwNRLaS4kaFJ%2Bo96b7bJbMSp79%2BkOTJDMKRJ5IImqfMQzaUgvQo8x0YgUFDEspJeXgJiOqtcVyDRusOBvZ7hxs%2Bv9iEX1jmn%2FdHcjs1u%2BvyYLy07GdgkWvYmqXDHlRbpBlls9%2FK8acRwtUtYyWdcK354OLM7321VZHI5QtdOte6sc9aTZ5P&X-Amz-Signature=e4451a6835cfb0f71c3215849ea0193dd6d411fc9233c8430c93a7dd19dadee4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHHRQN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBPcMvIW%2Frl3ldFmnoNhZtqqOYsgh4Mdwr9YGdfBRCZFAiBs6qdgPpC6hFpTLEQNpmsyTRP5GSDiek%2BB2UvhR8heRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbB8j4ANj%2Fa4dMOn6KtwDmsx%2Fy4LsglmZSPajBamjvPVmo0QyDeuxSvv48l5vHtKCZZJ%2BKqRFzAiy7l9mzVkA845BUWUXXwFKINKuzWwRoDSA%2Bdys09OqcDYEDUMHcC%2BA1YExV8AvXv3mG1s73IZWN3ZIeVg5YNWO4C3pNvjuu2PIp55BpUuf9tGow1tjxRwNK%2BonKjoIuzCwbxraG%2FE23fXdgPQhf7bJvghJQ0WjVQsQHw2AlUbm1d80tDZnucCdynKXRnbmZEO2JeKPQQKu2XOfVNXPVnV1yoPx3wGTyqQx0U0Fs%2BBxLXE18oXu%2FmNMKaOOWMkzSKhJ8R%2FF%2FySHLBpz8RWyVmAykdxCph2TXyvoslrlwEnDH9ENs9c3h%2BgdN0Pe4dtW4IpGcT8g8D4JIm7FsZczZ3Mhuq7L6pPmWfeJ%2FdEElWr7tfmVFpxepQ22%2FQRUDXdyJpqJ2joPadHkHMK3poBpsBT%2BYDXtqnYUJ76ExTb4morg9rNUgAXchmk7%2BAXcppT7dAuvhQgLdj0ZRRxqFTxlc6VW%2B%2FFJlde4mnQ3Vav1sa37qBfb%2BXbGMDO8Zw4764LCcNcv6mtVnPd9DvdaxPz2ekYfyTh5hX2aned79zoG7RgxFYJAydeyN3xU%2FHRqtWEpmXzn0%2Bwwn8WevwY6pgGjXgdwoAxs26ytdnN8H2cDlbPUWQX2icWV8%2FXHlYRBEuwNRLaS4kaFJ%2Bo96b7bJbMSp79%2BkOTJDMKRJ5IImqfMQzaUgvQo8x0YgUFDEspJeXgJiOqtcVyDRusOBvZ7hxs%2Bv9iEX1jmn%2FdHcjs1u%2BvyYLy07GdgkWvYmqXDHlRbpBlls9%2FK8acRwtUtYyWdcK354OLM7321VZHI5QtdOte6sc9aTZ5P&X-Amz-Signature=bf05da049caefd62a2bdd29f3129cab2e5e771a830f97ae2f69231f95b2757c1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHHRQN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBPcMvIW%2Frl3ldFmnoNhZtqqOYsgh4Mdwr9YGdfBRCZFAiBs6qdgPpC6hFpTLEQNpmsyTRP5GSDiek%2BB2UvhR8heRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbB8j4ANj%2Fa4dMOn6KtwDmsx%2Fy4LsglmZSPajBamjvPVmo0QyDeuxSvv48l5vHtKCZZJ%2BKqRFzAiy7l9mzVkA845BUWUXXwFKINKuzWwRoDSA%2Bdys09OqcDYEDUMHcC%2BA1YExV8AvXv3mG1s73IZWN3ZIeVg5YNWO4C3pNvjuu2PIp55BpUuf9tGow1tjxRwNK%2BonKjoIuzCwbxraG%2FE23fXdgPQhf7bJvghJQ0WjVQsQHw2AlUbm1d80tDZnucCdynKXRnbmZEO2JeKPQQKu2XOfVNXPVnV1yoPx3wGTyqQx0U0Fs%2BBxLXE18oXu%2FmNMKaOOWMkzSKhJ8R%2FF%2FySHLBpz8RWyVmAykdxCph2TXyvoslrlwEnDH9ENs9c3h%2BgdN0Pe4dtW4IpGcT8g8D4JIm7FsZczZ3Mhuq7L6pPmWfeJ%2FdEElWr7tfmVFpxepQ22%2FQRUDXdyJpqJ2joPadHkHMK3poBpsBT%2BYDXtqnYUJ76ExTb4morg9rNUgAXchmk7%2BAXcppT7dAuvhQgLdj0ZRRxqFTxlc6VW%2B%2FFJlde4mnQ3Vav1sa37qBfb%2BXbGMDO8Zw4764LCcNcv6mtVnPd9DvdaxPz2ekYfyTh5hX2aned79zoG7RgxFYJAydeyN3xU%2FHRqtWEpmXzn0%2Bwwn8WevwY6pgGjXgdwoAxs26ytdnN8H2cDlbPUWQX2icWV8%2FXHlYRBEuwNRLaS4kaFJ%2Bo96b7bJbMSp79%2BkOTJDMKRJ5IImqfMQzaUgvQo8x0YgUFDEspJeXgJiOqtcVyDRusOBvZ7hxs%2Bv9iEX1jmn%2FdHcjs1u%2BvyYLy07GdgkWvYmqXDHlRbpBlls9%2FK8acRwtUtYyWdcK354OLM7321VZHI5QtdOte6sc9aTZ5P&X-Amz-Signature=b6c19330626120c35f03d2c0562243a16ec280c385c111090e3c81e8d5a9eee6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHHRQN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBPcMvIW%2Frl3ldFmnoNhZtqqOYsgh4Mdwr9YGdfBRCZFAiBs6qdgPpC6hFpTLEQNpmsyTRP5GSDiek%2BB2UvhR8heRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbB8j4ANj%2Fa4dMOn6KtwDmsx%2Fy4LsglmZSPajBamjvPVmo0QyDeuxSvv48l5vHtKCZZJ%2BKqRFzAiy7l9mzVkA845BUWUXXwFKINKuzWwRoDSA%2Bdys09OqcDYEDUMHcC%2BA1YExV8AvXv3mG1s73IZWN3ZIeVg5YNWO4C3pNvjuu2PIp55BpUuf9tGow1tjxRwNK%2BonKjoIuzCwbxraG%2FE23fXdgPQhf7bJvghJQ0WjVQsQHw2AlUbm1d80tDZnucCdynKXRnbmZEO2JeKPQQKu2XOfVNXPVnV1yoPx3wGTyqQx0U0Fs%2BBxLXE18oXu%2FmNMKaOOWMkzSKhJ8R%2FF%2FySHLBpz8RWyVmAykdxCph2TXyvoslrlwEnDH9ENs9c3h%2BgdN0Pe4dtW4IpGcT8g8D4JIm7FsZczZ3Mhuq7L6pPmWfeJ%2FdEElWr7tfmVFpxepQ22%2FQRUDXdyJpqJ2joPadHkHMK3poBpsBT%2BYDXtqnYUJ76ExTb4morg9rNUgAXchmk7%2BAXcppT7dAuvhQgLdj0ZRRxqFTxlc6VW%2B%2FFJlde4mnQ3Vav1sa37qBfb%2BXbGMDO8Zw4764LCcNcv6mtVnPd9DvdaxPz2ekYfyTh5hX2aned79zoG7RgxFYJAydeyN3xU%2FHRqtWEpmXzn0%2Bwwn8WevwY6pgGjXgdwoAxs26ytdnN8H2cDlbPUWQX2icWV8%2FXHlYRBEuwNRLaS4kaFJ%2Bo96b7bJbMSp79%2BkOTJDMKRJ5IImqfMQzaUgvQo8x0YgUFDEspJeXgJiOqtcVyDRusOBvZ7hxs%2Bv9iEX1jmn%2FdHcjs1u%2BvyYLy07GdgkWvYmqXDHlRbpBlls9%2FK8acRwtUtYyWdcK354OLM7321VZHI5QtdOte6sc9aTZ5P&X-Amz-Signature=4954c1950a88c62d2cadd742e6ede057897a9d2f303007bc8b938edae1d65648&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHHRQN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBPcMvIW%2Frl3ldFmnoNhZtqqOYsgh4Mdwr9YGdfBRCZFAiBs6qdgPpC6hFpTLEQNpmsyTRP5GSDiek%2BB2UvhR8heRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbB8j4ANj%2Fa4dMOn6KtwDmsx%2Fy4LsglmZSPajBamjvPVmo0QyDeuxSvv48l5vHtKCZZJ%2BKqRFzAiy7l9mzVkA845BUWUXXwFKINKuzWwRoDSA%2Bdys09OqcDYEDUMHcC%2BA1YExV8AvXv3mG1s73IZWN3ZIeVg5YNWO4C3pNvjuu2PIp55BpUuf9tGow1tjxRwNK%2BonKjoIuzCwbxraG%2FE23fXdgPQhf7bJvghJQ0WjVQsQHw2AlUbm1d80tDZnucCdynKXRnbmZEO2JeKPQQKu2XOfVNXPVnV1yoPx3wGTyqQx0U0Fs%2BBxLXE18oXu%2FmNMKaOOWMkzSKhJ8R%2FF%2FySHLBpz8RWyVmAykdxCph2TXyvoslrlwEnDH9ENs9c3h%2BgdN0Pe4dtW4IpGcT8g8D4JIm7FsZczZ3Mhuq7L6pPmWfeJ%2FdEElWr7tfmVFpxepQ22%2FQRUDXdyJpqJ2joPadHkHMK3poBpsBT%2BYDXtqnYUJ76ExTb4morg9rNUgAXchmk7%2BAXcppT7dAuvhQgLdj0ZRRxqFTxlc6VW%2B%2FFJlde4mnQ3Vav1sa37qBfb%2BXbGMDO8Zw4764LCcNcv6mtVnPd9DvdaxPz2ekYfyTh5hX2aned79zoG7RgxFYJAydeyN3xU%2FHRqtWEpmXzn0%2Bwwn8WevwY6pgGjXgdwoAxs26ytdnN8H2cDlbPUWQX2icWV8%2FXHlYRBEuwNRLaS4kaFJ%2Bo96b7bJbMSp79%2BkOTJDMKRJ5IImqfMQzaUgvQo8x0YgUFDEspJeXgJiOqtcVyDRusOBvZ7hxs%2Bv9iEX1jmn%2FdHcjs1u%2BvyYLy07GdgkWvYmqXDHlRbpBlls9%2FK8acRwtUtYyWdcK354OLM7321VZHI5QtdOte6sc9aTZ5P&X-Amz-Signature=e9c2ea9ce186ba790058486d572415e5701108d618fa3c4aba54679bca3a17f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHHRQN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBPcMvIW%2Frl3ldFmnoNhZtqqOYsgh4Mdwr9YGdfBRCZFAiBs6qdgPpC6hFpTLEQNpmsyTRP5GSDiek%2BB2UvhR8heRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbB8j4ANj%2Fa4dMOn6KtwDmsx%2Fy4LsglmZSPajBamjvPVmo0QyDeuxSvv48l5vHtKCZZJ%2BKqRFzAiy7l9mzVkA845BUWUXXwFKINKuzWwRoDSA%2Bdys09OqcDYEDUMHcC%2BA1YExV8AvXv3mG1s73IZWN3ZIeVg5YNWO4C3pNvjuu2PIp55BpUuf9tGow1tjxRwNK%2BonKjoIuzCwbxraG%2FE23fXdgPQhf7bJvghJQ0WjVQsQHw2AlUbm1d80tDZnucCdynKXRnbmZEO2JeKPQQKu2XOfVNXPVnV1yoPx3wGTyqQx0U0Fs%2BBxLXE18oXu%2FmNMKaOOWMkzSKhJ8R%2FF%2FySHLBpz8RWyVmAykdxCph2TXyvoslrlwEnDH9ENs9c3h%2BgdN0Pe4dtW4IpGcT8g8D4JIm7FsZczZ3Mhuq7L6pPmWfeJ%2FdEElWr7tfmVFpxepQ22%2FQRUDXdyJpqJ2joPadHkHMK3poBpsBT%2BYDXtqnYUJ76ExTb4morg9rNUgAXchmk7%2BAXcppT7dAuvhQgLdj0ZRRxqFTxlc6VW%2B%2FFJlde4mnQ3Vav1sa37qBfb%2BXbGMDO8Zw4764LCcNcv6mtVnPd9DvdaxPz2ekYfyTh5hX2aned79zoG7RgxFYJAydeyN3xU%2FHRqtWEpmXzn0%2Bwwn8WevwY6pgGjXgdwoAxs26ytdnN8H2cDlbPUWQX2icWV8%2FXHlYRBEuwNRLaS4kaFJ%2Bo96b7bJbMSp79%2BkOTJDMKRJ5IImqfMQzaUgvQo8x0YgUFDEspJeXgJiOqtcVyDRusOBvZ7hxs%2Bv9iEX1jmn%2FdHcjs1u%2BvyYLy07GdgkWvYmqXDHlRbpBlls9%2FK8acRwtUtYyWdcK354OLM7321VZHI5QtdOte6sc9aTZ5P&X-Amz-Signature=0a95ae5bc240b88fbcfae6ab478339a7336520c3751ced6ccf73ef96faaf603b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHHRQN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBPcMvIW%2Frl3ldFmnoNhZtqqOYsgh4Mdwr9YGdfBRCZFAiBs6qdgPpC6hFpTLEQNpmsyTRP5GSDiek%2BB2UvhR8heRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbB8j4ANj%2Fa4dMOn6KtwDmsx%2Fy4LsglmZSPajBamjvPVmo0QyDeuxSvv48l5vHtKCZZJ%2BKqRFzAiy7l9mzVkA845BUWUXXwFKINKuzWwRoDSA%2Bdys09OqcDYEDUMHcC%2BA1YExV8AvXv3mG1s73IZWN3ZIeVg5YNWO4C3pNvjuu2PIp55BpUuf9tGow1tjxRwNK%2BonKjoIuzCwbxraG%2FE23fXdgPQhf7bJvghJQ0WjVQsQHw2AlUbm1d80tDZnucCdynKXRnbmZEO2JeKPQQKu2XOfVNXPVnV1yoPx3wGTyqQx0U0Fs%2BBxLXE18oXu%2FmNMKaOOWMkzSKhJ8R%2FF%2FySHLBpz8RWyVmAykdxCph2TXyvoslrlwEnDH9ENs9c3h%2BgdN0Pe4dtW4IpGcT8g8D4JIm7FsZczZ3Mhuq7L6pPmWfeJ%2FdEElWr7tfmVFpxepQ22%2FQRUDXdyJpqJ2joPadHkHMK3poBpsBT%2BYDXtqnYUJ76ExTb4morg9rNUgAXchmk7%2BAXcppT7dAuvhQgLdj0ZRRxqFTxlc6VW%2B%2FFJlde4mnQ3Vav1sa37qBfb%2BXbGMDO8Zw4764LCcNcv6mtVnPd9DvdaxPz2ekYfyTh5hX2aned79zoG7RgxFYJAydeyN3xU%2FHRqtWEpmXzn0%2Bwwn8WevwY6pgGjXgdwoAxs26ytdnN8H2cDlbPUWQX2icWV8%2FXHlYRBEuwNRLaS4kaFJ%2Bo96b7bJbMSp79%2BkOTJDMKRJ5IImqfMQzaUgvQo8x0YgUFDEspJeXgJiOqtcVyDRusOBvZ7hxs%2Bv9iEX1jmn%2FdHcjs1u%2BvyYLy07GdgkWvYmqXDHlRbpBlls9%2FK8acRwtUtYyWdcK354OLM7321VZHI5QtdOte6sc9aTZ5P&X-Amz-Signature=b6aa600be257a51997477a0b070765aa941fda449ca36dd8851732da88a4aac4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHHRQN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBPcMvIW%2Frl3ldFmnoNhZtqqOYsgh4Mdwr9YGdfBRCZFAiBs6qdgPpC6hFpTLEQNpmsyTRP5GSDiek%2BB2UvhR8heRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbB8j4ANj%2Fa4dMOn6KtwDmsx%2Fy4LsglmZSPajBamjvPVmo0QyDeuxSvv48l5vHtKCZZJ%2BKqRFzAiy7l9mzVkA845BUWUXXwFKINKuzWwRoDSA%2Bdys09OqcDYEDUMHcC%2BA1YExV8AvXv3mG1s73IZWN3ZIeVg5YNWO4C3pNvjuu2PIp55BpUuf9tGow1tjxRwNK%2BonKjoIuzCwbxraG%2FE23fXdgPQhf7bJvghJQ0WjVQsQHw2AlUbm1d80tDZnucCdynKXRnbmZEO2JeKPQQKu2XOfVNXPVnV1yoPx3wGTyqQx0U0Fs%2BBxLXE18oXu%2FmNMKaOOWMkzSKhJ8R%2FF%2FySHLBpz8RWyVmAykdxCph2TXyvoslrlwEnDH9ENs9c3h%2BgdN0Pe4dtW4IpGcT8g8D4JIm7FsZczZ3Mhuq7L6pPmWfeJ%2FdEElWr7tfmVFpxepQ22%2FQRUDXdyJpqJ2joPadHkHMK3poBpsBT%2BYDXtqnYUJ76ExTb4morg9rNUgAXchmk7%2BAXcppT7dAuvhQgLdj0ZRRxqFTxlc6VW%2B%2FFJlde4mnQ3Vav1sa37qBfb%2BXbGMDO8Zw4764LCcNcv6mtVnPd9DvdaxPz2ekYfyTh5hX2aned79zoG7RgxFYJAydeyN3xU%2FHRqtWEpmXzn0%2Bwwn8WevwY6pgGjXgdwoAxs26ytdnN8H2cDlbPUWQX2icWV8%2FXHlYRBEuwNRLaS4kaFJ%2Bo96b7bJbMSp79%2BkOTJDMKRJ5IImqfMQzaUgvQo8x0YgUFDEspJeXgJiOqtcVyDRusOBvZ7hxs%2Bv9iEX1jmn%2FdHcjs1u%2BvyYLy07GdgkWvYmqXDHlRbpBlls9%2FK8acRwtUtYyWdcK354OLM7321VZHI5QtdOte6sc9aTZ5P&X-Amz-Signature=698eba81c385cee8b1f3a5197eaf8b42f4dea41fe1e797debd5d9411fbb7acf0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
