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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXDUIBF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDpvwEgg7JU2YhDfj%2FQxVSV7tXszws1ZeqL%2BL8Gdc%2BSPAiEA01sfATl3NDgdzBcqrLqHQ3XONnVBg%2FHiDuvKgrmJeKEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBNgeAVwNshCWzUSrcA6esysE8Ef%2Bsy2OsdAmtcpjHQrdagTfylNRTyI9SLJD7OIvNyBxtkSnlMdyjheWQLfq6%2FWUTnkVK6JO%2F2dYsj9aTons4jQhil2FIp4EtBskKeISeatGXoV1jRuuqmB1blxP5CCegur%2F2iUvjOzm0WoZ%2BUsoQw4b5O4HwJ7rGJllT%2Bj71wGO%2BiV4qlHuj3KVWienVZiBMviVWNmPOZlmcADDHkKz%2FxLtWLNdzhhjpBC3tySGHPJZ%2FgJJ5OgxUdZ82gdBU3Dv4%2BBbGhtkW4LaqX4z4P36sO87XhbHo%2B3%2BpG8tR61hAuvBASMLrY%2BJwP3gTU4Y8DolQKfYJ5sIGhnEgeJ8JWehUuE9oeziUVGX95cRn2TeVWFKXX7a3FNqToOWLdwY2iAN1Bh%2B4w474QIYmHWax31w%2BsSV8F1wFmGBMVnq3OhW0oJGnUQ%2Bt4byxRxU1KDYIczpOP0RNzvvt9yTCAFLC44oNQyf2hl0eXuJ%2FfgDy%2Fq%2FzTgdYyMknnIwccBPhsPKM7%2B9dL0Zfm3JGSDJvFpAnGPssIfLbsYjRfriALUKGiBFpa0VWIV%2FZ8RNCWHxNepGX2a%2Fmj8gpPyIrDlaAzDTl61mCaYGFJezrJw5mw%2FyRm3VyPFpcCP1JtfYFMLP92b8GOqUBJavJNQxvx58exbi6LUISngF%2BusZ7XT5CHWXAc4NgvaOIo35TylCuP%2FNE0fVq%2BVLegq5ynVicleI8aiSSGI50ZsTnWVVSjtkOmlW1F%2F8c2PfwpfDg65b3XZj4d0Y%2Bi5NCYFzSEkiu9OxNQfa033UEOjgxGKvpoE%2F9J%2FDnVRkpfg%2BUMjn0OofDKNF8OfWRoYMF2QVtCZ1U41M74eKYJVv8iq32SPwS&X-Amz-Signature=35785bff8e62216cf7d2259a04907db0e3bd231a1877cafdcda62f7a5f109202&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXDUIBF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDpvwEgg7JU2YhDfj%2FQxVSV7tXszws1ZeqL%2BL8Gdc%2BSPAiEA01sfATl3NDgdzBcqrLqHQ3XONnVBg%2FHiDuvKgrmJeKEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBNgeAVwNshCWzUSrcA6esysE8Ef%2Bsy2OsdAmtcpjHQrdagTfylNRTyI9SLJD7OIvNyBxtkSnlMdyjheWQLfq6%2FWUTnkVK6JO%2F2dYsj9aTons4jQhil2FIp4EtBskKeISeatGXoV1jRuuqmB1blxP5CCegur%2F2iUvjOzm0WoZ%2BUsoQw4b5O4HwJ7rGJllT%2Bj71wGO%2BiV4qlHuj3KVWienVZiBMviVWNmPOZlmcADDHkKz%2FxLtWLNdzhhjpBC3tySGHPJZ%2FgJJ5OgxUdZ82gdBU3Dv4%2BBbGhtkW4LaqX4z4P36sO87XhbHo%2B3%2BpG8tR61hAuvBASMLrY%2BJwP3gTU4Y8DolQKfYJ5sIGhnEgeJ8JWehUuE9oeziUVGX95cRn2TeVWFKXX7a3FNqToOWLdwY2iAN1Bh%2B4w474QIYmHWax31w%2BsSV8F1wFmGBMVnq3OhW0oJGnUQ%2Bt4byxRxU1KDYIczpOP0RNzvvt9yTCAFLC44oNQyf2hl0eXuJ%2FfgDy%2Fq%2FzTgdYyMknnIwccBPhsPKM7%2B9dL0Zfm3JGSDJvFpAnGPssIfLbsYjRfriALUKGiBFpa0VWIV%2FZ8RNCWHxNepGX2a%2Fmj8gpPyIrDlaAzDTl61mCaYGFJezrJw5mw%2FyRm3VyPFpcCP1JtfYFMLP92b8GOqUBJavJNQxvx58exbi6LUISngF%2BusZ7XT5CHWXAc4NgvaOIo35TylCuP%2FNE0fVq%2BVLegq5ynVicleI8aiSSGI50ZsTnWVVSjtkOmlW1F%2F8c2PfwpfDg65b3XZj4d0Y%2Bi5NCYFzSEkiu9OxNQfa033UEOjgxGKvpoE%2F9J%2FDnVRkpfg%2BUMjn0OofDKNF8OfWRoYMF2QVtCZ1U41M74eKYJVv8iq32SPwS&X-Amz-Signature=046c54562988e17c140a04ac8a9af7f6a7b88af1950d27bf3e284ff6dd4a6835&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXDUIBF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDpvwEgg7JU2YhDfj%2FQxVSV7tXszws1ZeqL%2BL8Gdc%2BSPAiEA01sfATl3NDgdzBcqrLqHQ3XONnVBg%2FHiDuvKgrmJeKEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBNgeAVwNshCWzUSrcA6esysE8Ef%2Bsy2OsdAmtcpjHQrdagTfylNRTyI9SLJD7OIvNyBxtkSnlMdyjheWQLfq6%2FWUTnkVK6JO%2F2dYsj9aTons4jQhil2FIp4EtBskKeISeatGXoV1jRuuqmB1blxP5CCegur%2F2iUvjOzm0WoZ%2BUsoQw4b5O4HwJ7rGJllT%2Bj71wGO%2BiV4qlHuj3KVWienVZiBMviVWNmPOZlmcADDHkKz%2FxLtWLNdzhhjpBC3tySGHPJZ%2FgJJ5OgxUdZ82gdBU3Dv4%2BBbGhtkW4LaqX4z4P36sO87XhbHo%2B3%2BpG8tR61hAuvBASMLrY%2BJwP3gTU4Y8DolQKfYJ5sIGhnEgeJ8JWehUuE9oeziUVGX95cRn2TeVWFKXX7a3FNqToOWLdwY2iAN1Bh%2B4w474QIYmHWax31w%2BsSV8F1wFmGBMVnq3OhW0oJGnUQ%2Bt4byxRxU1KDYIczpOP0RNzvvt9yTCAFLC44oNQyf2hl0eXuJ%2FfgDy%2Fq%2FzTgdYyMknnIwccBPhsPKM7%2B9dL0Zfm3JGSDJvFpAnGPssIfLbsYjRfriALUKGiBFpa0VWIV%2FZ8RNCWHxNepGX2a%2Fmj8gpPyIrDlaAzDTl61mCaYGFJezrJw5mw%2FyRm3VyPFpcCP1JtfYFMLP92b8GOqUBJavJNQxvx58exbi6LUISngF%2BusZ7XT5CHWXAc4NgvaOIo35TylCuP%2FNE0fVq%2BVLegq5ynVicleI8aiSSGI50ZsTnWVVSjtkOmlW1F%2F8c2PfwpfDg65b3XZj4d0Y%2Bi5NCYFzSEkiu9OxNQfa033UEOjgxGKvpoE%2F9J%2FDnVRkpfg%2BUMjn0OofDKNF8OfWRoYMF2QVtCZ1U41M74eKYJVv8iq32SPwS&X-Amz-Signature=f499fb35043ee754bbf067ee0570e80bae7f778e2820364f9efda2df72380ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXDUIBF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDpvwEgg7JU2YhDfj%2FQxVSV7tXszws1ZeqL%2BL8Gdc%2BSPAiEA01sfATl3NDgdzBcqrLqHQ3XONnVBg%2FHiDuvKgrmJeKEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBNgeAVwNshCWzUSrcA6esysE8Ef%2Bsy2OsdAmtcpjHQrdagTfylNRTyI9SLJD7OIvNyBxtkSnlMdyjheWQLfq6%2FWUTnkVK6JO%2F2dYsj9aTons4jQhil2FIp4EtBskKeISeatGXoV1jRuuqmB1blxP5CCegur%2F2iUvjOzm0WoZ%2BUsoQw4b5O4HwJ7rGJllT%2Bj71wGO%2BiV4qlHuj3KVWienVZiBMviVWNmPOZlmcADDHkKz%2FxLtWLNdzhhjpBC3tySGHPJZ%2FgJJ5OgxUdZ82gdBU3Dv4%2BBbGhtkW4LaqX4z4P36sO87XhbHo%2B3%2BpG8tR61hAuvBASMLrY%2BJwP3gTU4Y8DolQKfYJ5sIGhnEgeJ8JWehUuE9oeziUVGX95cRn2TeVWFKXX7a3FNqToOWLdwY2iAN1Bh%2B4w474QIYmHWax31w%2BsSV8F1wFmGBMVnq3OhW0oJGnUQ%2Bt4byxRxU1KDYIczpOP0RNzvvt9yTCAFLC44oNQyf2hl0eXuJ%2FfgDy%2Fq%2FzTgdYyMknnIwccBPhsPKM7%2B9dL0Zfm3JGSDJvFpAnGPssIfLbsYjRfriALUKGiBFpa0VWIV%2FZ8RNCWHxNepGX2a%2Fmj8gpPyIrDlaAzDTl61mCaYGFJezrJw5mw%2FyRm3VyPFpcCP1JtfYFMLP92b8GOqUBJavJNQxvx58exbi6LUISngF%2BusZ7XT5CHWXAc4NgvaOIo35TylCuP%2FNE0fVq%2BVLegq5ynVicleI8aiSSGI50ZsTnWVVSjtkOmlW1F%2F8c2PfwpfDg65b3XZj4d0Y%2Bi5NCYFzSEkiu9OxNQfa033UEOjgxGKvpoE%2F9J%2FDnVRkpfg%2BUMjn0OofDKNF8OfWRoYMF2QVtCZ1U41M74eKYJVv8iq32SPwS&X-Amz-Signature=f64e89e3604b2e3586da7e0c639a87d054de44a6f39ae83bd174f82ef8c07a90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXDUIBF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDpvwEgg7JU2YhDfj%2FQxVSV7tXszws1ZeqL%2BL8Gdc%2BSPAiEA01sfATl3NDgdzBcqrLqHQ3XONnVBg%2FHiDuvKgrmJeKEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBNgeAVwNshCWzUSrcA6esysE8Ef%2Bsy2OsdAmtcpjHQrdagTfylNRTyI9SLJD7OIvNyBxtkSnlMdyjheWQLfq6%2FWUTnkVK6JO%2F2dYsj9aTons4jQhil2FIp4EtBskKeISeatGXoV1jRuuqmB1blxP5CCegur%2F2iUvjOzm0WoZ%2BUsoQw4b5O4HwJ7rGJllT%2Bj71wGO%2BiV4qlHuj3KVWienVZiBMviVWNmPOZlmcADDHkKz%2FxLtWLNdzhhjpBC3tySGHPJZ%2FgJJ5OgxUdZ82gdBU3Dv4%2BBbGhtkW4LaqX4z4P36sO87XhbHo%2B3%2BpG8tR61hAuvBASMLrY%2BJwP3gTU4Y8DolQKfYJ5sIGhnEgeJ8JWehUuE9oeziUVGX95cRn2TeVWFKXX7a3FNqToOWLdwY2iAN1Bh%2B4w474QIYmHWax31w%2BsSV8F1wFmGBMVnq3OhW0oJGnUQ%2Bt4byxRxU1KDYIczpOP0RNzvvt9yTCAFLC44oNQyf2hl0eXuJ%2FfgDy%2Fq%2FzTgdYyMknnIwccBPhsPKM7%2B9dL0Zfm3JGSDJvFpAnGPssIfLbsYjRfriALUKGiBFpa0VWIV%2FZ8RNCWHxNepGX2a%2Fmj8gpPyIrDlaAzDTl61mCaYGFJezrJw5mw%2FyRm3VyPFpcCP1JtfYFMLP92b8GOqUBJavJNQxvx58exbi6LUISngF%2BusZ7XT5CHWXAc4NgvaOIo35TylCuP%2FNE0fVq%2BVLegq5ynVicleI8aiSSGI50ZsTnWVVSjtkOmlW1F%2F8c2PfwpfDg65b3XZj4d0Y%2Bi5NCYFzSEkiu9OxNQfa033UEOjgxGKvpoE%2F9J%2FDnVRkpfg%2BUMjn0OofDKNF8OfWRoYMF2QVtCZ1U41M74eKYJVv8iq32SPwS&X-Amz-Signature=493835726f5cea59142e644ef2c0da68ffd9b15ca607d7a97763bb5d5c7c5d71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXDUIBF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDpvwEgg7JU2YhDfj%2FQxVSV7tXszws1ZeqL%2BL8Gdc%2BSPAiEA01sfATl3NDgdzBcqrLqHQ3XONnVBg%2FHiDuvKgrmJeKEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBNgeAVwNshCWzUSrcA6esysE8Ef%2Bsy2OsdAmtcpjHQrdagTfylNRTyI9SLJD7OIvNyBxtkSnlMdyjheWQLfq6%2FWUTnkVK6JO%2F2dYsj9aTons4jQhil2FIp4EtBskKeISeatGXoV1jRuuqmB1blxP5CCegur%2F2iUvjOzm0WoZ%2BUsoQw4b5O4HwJ7rGJllT%2Bj71wGO%2BiV4qlHuj3KVWienVZiBMviVWNmPOZlmcADDHkKz%2FxLtWLNdzhhjpBC3tySGHPJZ%2FgJJ5OgxUdZ82gdBU3Dv4%2BBbGhtkW4LaqX4z4P36sO87XhbHo%2B3%2BpG8tR61hAuvBASMLrY%2BJwP3gTU4Y8DolQKfYJ5sIGhnEgeJ8JWehUuE9oeziUVGX95cRn2TeVWFKXX7a3FNqToOWLdwY2iAN1Bh%2B4w474QIYmHWax31w%2BsSV8F1wFmGBMVnq3OhW0oJGnUQ%2Bt4byxRxU1KDYIczpOP0RNzvvt9yTCAFLC44oNQyf2hl0eXuJ%2FfgDy%2Fq%2FzTgdYyMknnIwccBPhsPKM7%2B9dL0Zfm3JGSDJvFpAnGPssIfLbsYjRfriALUKGiBFpa0VWIV%2FZ8RNCWHxNepGX2a%2Fmj8gpPyIrDlaAzDTl61mCaYGFJezrJw5mw%2FyRm3VyPFpcCP1JtfYFMLP92b8GOqUBJavJNQxvx58exbi6LUISngF%2BusZ7XT5CHWXAc4NgvaOIo35TylCuP%2FNE0fVq%2BVLegq5ynVicleI8aiSSGI50ZsTnWVVSjtkOmlW1F%2F8c2PfwpfDg65b3XZj4d0Y%2Bi5NCYFzSEkiu9OxNQfa033UEOjgxGKvpoE%2F9J%2FDnVRkpfg%2BUMjn0OofDKNF8OfWRoYMF2QVtCZ1U41M74eKYJVv8iq32SPwS&X-Amz-Signature=95d0d7d1a1db3b9019324aafa5daa288e193f21090855a7649862e046e74d20b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXDUIBF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDpvwEgg7JU2YhDfj%2FQxVSV7tXszws1ZeqL%2BL8Gdc%2BSPAiEA01sfATl3NDgdzBcqrLqHQ3XONnVBg%2FHiDuvKgrmJeKEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBNgeAVwNshCWzUSrcA6esysE8Ef%2Bsy2OsdAmtcpjHQrdagTfylNRTyI9SLJD7OIvNyBxtkSnlMdyjheWQLfq6%2FWUTnkVK6JO%2F2dYsj9aTons4jQhil2FIp4EtBskKeISeatGXoV1jRuuqmB1blxP5CCegur%2F2iUvjOzm0WoZ%2BUsoQw4b5O4HwJ7rGJllT%2Bj71wGO%2BiV4qlHuj3KVWienVZiBMviVWNmPOZlmcADDHkKz%2FxLtWLNdzhhjpBC3tySGHPJZ%2FgJJ5OgxUdZ82gdBU3Dv4%2BBbGhtkW4LaqX4z4P36sO87XhbHo%2B3%2BpG8tR61hAuvBASMLrY%2BJwP3gTU4Y8DolQKfYJ5sIGhnEgeJ8JWehUuE9oeziUVGX95cRn2TeVWFKXX7a3FNqToOWLdwY2iAN1Bh%2B4w474QIYmHWax31w%2BsSV8F1wFmGBMVnq3OhW0oJGnUQ%2Bt4byxRxU1KDYIczpOP0RNzvvt9yTCAFLC44oNQyf2hl0eXuJ%2FfgDy%2Fq%2FzTgdYyMknnIwccBPhsPKM7%2B9dL0Zfm3JGSDJvFpAnGPssIfLbsYjRfriALUKGiBFpa0VWIV%2FZ8RNCWHxNepGX2a%2Fmj8gpPyIrDlaAzDTl61mCaYGFJezrJw5mw%2FyRm3VyPFpcCP1JtfYFMLP92b8GOqUBJavJNQxvx58exbi6LUISngF%2BusZ7XT5CHWXAc4NgvaOIo35TylCuP%2FNE0fVq%2BVLegq5ynVicleI8aiSSGI50ZsTnWVVSjtkOmlW1F%2F8c2PfwpfDg65b3XZj4d0Y%2Bi5NCYFzSEkiu9OxNQfa033UEOjgxGKvpoE%2F9J%2FDnVRkpfg%2BUMjn0OofDKNF8OfWRoYMF2QVtCZ1U41M74eKYJVv8iq32SPwS&X-Amz-Signature=d1631b4766690a104dbc42244760a6d2e6c948589c36c7b0e207de8f293a8105&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXDUIBF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDpvwEgg7JU2YhDfj%2FQxVSV7tXszws1ZeqL%2BL8Gdc%2BSPAiEA01sfATl3NDgdzBcqrLqHQ3XONnVBg%2FHiDuvKgrmJeKEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBNgeAVwNshCWzUSrcA6esysE8Ef%2Bsy2OsdAmtcpjHQrdagTfylNRTyI9SLJD7OIvNyBxtkSnlMdyjheWQLfq6%2FWUTnkVK6JO%2F2dYsj9aTons4jQhil2FIp4EtBskKeISeatGXoV1jRuuqmB1blxP5CCegur%2F2iUvjOzm0WoZ%2BUsoQw4b5O4HwJ7rGJllT%2Bj71wGO%2BiV4qlHuj3KVWienVZiBMviVWNmPOZlmcADDHkKz%2FxLtWLNdzhhjpBC3tySGHPJZ%2FgJJ5OgxUdZ82gdBU3Dv4%2BBbGhtkW4LaqX4z4P36sO87XhbHo%2B3%2BpG8tR61hAuvBASMLrY%2BJwP3gTU4Y8DolQKfYJ5sIGhnEgeJ8JWehUuE9oeziUVGX95cRn2TeVWFKXX7a3FNqToOWLdwY2iAN1Bh%2B4w474QIYmHWax31w%2BsSV8F1wFmGBMVnq3OhW0oJGnUQ%2Bt4byxRxU1KDYIczpOP0RNzvvt9yTCAFLC44oNQyf2hl0eXuJ%2FfgDy%2Fq%2FzTgdYyMknnIwccBPhsPKM7%2B9dL0Zfm3JGSDJvFpAnGPssIfLbsYjRfriALUKGiBFpa0VWIV%2FZ8RNCWHxNepGX2a%2Fmj8gpPyIrDlaAzDTl61mCaYGFJezrJw5mw%2FyRm3VyPFpcCP1JtfYFMLP92b8GOqUBJavJNQxvx58exbi6LUISngF%2BusZ7XT5CHWXAc4NgvaOIo35TylCuP%2FNE0fVq%2BVLegq5ynVicleI8aiSSGI50ZsTnWVVSjtkOmlW1F%2F8c2PfwpfDg65b3XZj4d0Y%2Bi5NCYFzSEkiu9OxNQfa033UEOjgxGKvpoE%2F9J%2FDnVRkpfg%2BUMjn0OofDKNF8OfWRoYMF2QVtCZ1U41M74eKYJVv8iq32SPwS&X-Amz-Signature=950999629edbc228f701afc047113d21124fa280b246ad9a226af9b92e837c19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
