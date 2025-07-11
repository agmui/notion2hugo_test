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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFDJMTA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPkZK9sRAKoZlmuYEd9MQQDiTlaY%2FkIuzKcQ4%2ByRhDgIgYgdM4dosObsbN3B%2Fy%2B9eZPOMlvigzPvRElQVvS%2BbqJYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZuq4fpZCEcqejRdSrcA0L82RiP6WGd4HPDZ%2F9uHDu0dLPMwm8dxdBKuy4cJVlMw0IORnI5VYptAj8LxdigU29%2FuWN0G3l1T7tutCnLs0QXOJos52%2BdUUnaKv9LJ52pC1nIL8a4B5LEe5aUs%2BkYACzxTVk5JUAdxp8po759%2Fz2LHLuI0Hn1OWAVXtrtRH8M0xUO43I3LRI4YcY7HpKxBiQOyrwpKpgXBH3TRm7J7Y53Rt5x0cmZGlTxpudoMDqQpXamRjUL9TXI4LlrB92Fkuuvf7ANo%2BPD%2Fj%2Bv5aDdIcKpgF10%2B4efokcVsVYdxoKduz%2BQJsd2xmJ8dkvgr6vOOIohXgl4WVc%2Bf%2Fl6vtnyGJ29J%2Br2mPx095F9ox19pPLfzzWaVGEdTC10hkI2XlnHfwS5ap8ChSgLX%2BUhji%2Fw6shNM5VI8%2BNRiu8QGSpo7SbYHXjeXy2%2F7OxylLP03qrA%2BOvUYwpYXdpVTR%2BJGrbszPSokfbBWthtb%2BCLgNBQqzV1vKidnAYDoGle8x9DyS1ZTyaB7jd8QNA6ZVJiMjoIs3l2rZGVIKItTtvdxGtbPeyg4sGJpzQ19FT043LsVzzGmlbOlegorrwhEbnskeA%2FMMASsE3iTwok6tYxQUt8HS2DCml7z2cPosWT4tmeMPnVxcMGOqUBnFua205WN5wK%2FLrHNVdQrxIXbVzjZQuIHnGuTyYQaoEaMD1PwU6PA6apWGJap9wCIvrLLmUbk3LUafSWhgvxV7gESS5IWi%2FiQJtgX5Mb6%2FdrUtLF5gdRQsYxZOMil7NZIRMwpYcb0ohYfOK1m4r1ou1PrvZ%2FZBc71qqjEfO3vTs%2FI%2B%2BrP7WQyyGNzMSnXo%2F1mwB8bztca2RMuS6fwusVzpoevNtA&X-Amz-Signature=3cbde611f8a9eed72711d3f9b2aab6e5a7c2b62894c22753dc2cd5283cc7d575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFDJMTA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPkZK9sRAKoZlmuYEd9MQQDiTlaY%2FkIuzKcQ4%2ByRhDgIgYgdM4dosObsbN3B%2Fy%2B9eZPOMlvigzPvRElQVvS%2BbqJYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZuq4fpZCEcqejRdSrcA0L82RiP6WGd4HPDZ%2F9uHDu0dLPMwm8dxdBKuy4cJVlMw0IORnI5VYptAj8LxdigU29%2FuWN0G3l1T7tutCnLs0QXOJos52%2BdUUnaKv9LJ52pC1nIL8a4B5LEe5aUs%2BkYACzxTVk5JUAdxp8po759%2Fz2LHLuI0Hn1OWAVXtrtRH8M0xUO43I3LRI4YcY7HpKxBiQOyrwpKpgXBH3TRm7J7Y53Rt5x0cmZGlTxpudoMDqQpXamRjUL9TXI4LlrB92Fkuuvf7ANo%2BPD%2Fj%2Bv5aDdIcKpgF10%2B4efokcVsVYdxoKduz%2BQJsd2xmJ8dkvgr6vOOIohXgl4WVc%2Bf%2Fl6vtnyGJ29J%2Br2mPx095F9ox19pPLfzzWaVGEdTC10hkI2XlnHfwS5ap8ChSgLX%2BUhji%2Fw6shNM5VI8%2BNRiu8QGSpo7SbYHXjeXy2%2F7OxylLP03qrA%2BOvUYwpYXdpVTR%2BJGrbszPSokfbBWthtb%2BCLgNBQqzV1vKidnAYDoGle8x9DyS1ZTyaB7jd8QNA6ZVJiMjoIs3l2rZGVIKItTtvdxGtbPeyg4sGJpzQ19FT043LsVzzGmlbOlegorrwhEbnskeA%2FMMASsE3iTwok6tYxQUt8HS2DCml7z2cPosWT4tmeMPnVxcMGOqUBnFua205WN5wK%2FLrHNVdQrxIXbVzjZQuIHnGuTyYQaoEaMD1PwU6PA6apWGJap9wCIvrLLmUbk3LUafSWhgvxV7gESS5IWi%2FiQJtgX5Mb6%2FdrUtLF5gdRQsYxZOMil7NZIRMwpYcb0ohYfOK1m4r1ou1PrvZ%2FZBc71qqjEfO3vTs%2FI%2B%2BrP7WQyyGNzMSnXo%2F1mwB8bztca2RMuS6fwusVzpoevNtA&X-Amz-Signature=9a3faf4c7378ae2698ad35597857845410a96ac5739aadd0107370dea00a48a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFDJMTA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPkZK9sRAKoZlmuYEd9MQQDiTlaY%2FkIuzKcQ4%2ByRhDgIgYgdM4dosObsbN3B%2Fy%2B9eZPOMlvigzPvRElQVvS%2BbqJYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZuq4fpZCEcqejRdSrcA0L82RiP6WGd4HPDZ%2F9uHDu0dLPMwm8dxdBKuy4cJVlMw0IORnI5VYptAj8LxdigU29%2FuWN0G3l1T7tutCnLs0QXOJos52%2BdUUnaKv9LJ52pC1nIL8a4B5LEe5aUs%2BkYACzxTVk5JUAdxp8po759%2Fz2LHLuI0Hn1OWAVXtrtRH8M0xUO43I3LRI4YcY7HpKxBiQOyrwpKpgXBH3TRm7J7Y53Rt5x0cmZGlTxpudoMDqQpXamRjUL9TXI4LlrB92Fkuuvf7ANo%2BPD%2Fj%2Bv5aDdIcKpgF10%2B4efokcVsVYdxoKduz%2BQJsd2xmJ8dkvgr6vOOIohXgl4WVc%2Bf%2Fl6vtnyGJ29J%2Br2mPx095F9ox19pPLfzzWaVGEdTC10hkI2XlnHfwS5ap8ChSgLX%2BUhji%2Fw6shNM5VI8%2BNRiu8QGSpo7SbYHXjeXy2%2F7OxylLP03qrA%2BOvUYwpYXdpVTR%2BJGrbszPSokfbBWthtb%2BCLgNBQqzV1vKidnAYDoGle8x9DyS1ZTyaB7jd8QNA6ZVJiMjoIs3l2rZGVIKItTtvdxGtbPeyg4sGJpzQ19FT043LsVzzGmlbOlegorrwhEbnskeA%2FMMASsE3iTwok6tYxQUt8HS2DCml7z2cPosWT4tmeMPnVxcMGOqUBnFua205WN5wK%2FLrHNVdQrxIXbVzjZQuIHnGuTyYQaoEaMD1PwU6PA6apWGJap9wCIvrLLmUbk3LUafSWhgvxV7gESS5IWi%2FiQJtgX5Mb6%2FdrUtLF5gdRQsYxZOMil7NZIRMwpYcb0ohYfOK1m4r1ou1PrvZ%2FZBc71qqjEfO3vTs%2FI%2B%2BrP7WQyyGNzMSnXo%2F1mwB8bztca2RMuS6fwusVzpoevNtA&X-Amz-Signature=345dd3c16b7af95f6c45fd6fecebff73cee08532e78c0b6fa10caae72895f1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFDJMTA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPkZK9sRAKoZlmuYEd9MQQDiTlaY%2FkIuzKcQ4%2ByRhDgIgYgdM4dosObsbN3B%2Fy%2B9eZPOMlvigzPvRElQVvS%2BbqJYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZuq4fpZCEcqejRdSrcA0L82RiP6WGd4HPDZ%2F9uHDu0dLPMwm8dxdBKuy4cJVlMw0IORnI5VYptAj8LxdigU29%2FuWN0G3l1T7tutCnLs0QXOJos52%2BdUUnaKv9LJ52pC1nIL8a4B5LEe5aUs%2BkYACzxTVk5JUAdxp8po759%2Fz2LHLuI0Hn1OWAVXtrtRH8M0xUO43I3LRI4YcY7HpKxBiQOyrwpKpgXBH3TRm7J7Y53Rt5x0cmZGlTxpudoMDqQpXamRjUL9TXI4LlrB92Fkuuvf7ANo%2BPD%2Fj%2Bv5aDdIcKpgF10%2B4efokcVsVYdxoKduz%2BQJsd2xmJ8dkvgr6vOOIohXgl4WVc%2Bf%2Fl6vtnyGJ29J%2Br2mPx095F9ox19pPLfzzWaVGEdTC10hkI2XlnHfwS5ap8ChSgLX%2BUhji%2Fw6shNM5VI8%2BNRiu8QGSpo7SbYHXjeXy2%2F7OxylLP03qrA%2BOvUYwpYXdpVTR%2BJGrbszPSokfbBWthtb%2BCLgNBQqzV1vKidnAYDoGle8x9DyS1ZTyaB7jd8QNA6ZVJiMjoIs3l2rZGVIKItTtvdxGtbPeyg4sGJpzQ19FT043LsVzzGmlbOlegorrwhEbnskeA%2FMMASsE3iTwok6tYxQUt8HS2DCml7z2cPosWT4tmeMPnVxcMGOqUBnFua205WN5wK%2FLrHNVdQrxIXbVzjZQuIHnGuTyYQaoEaMD1PwU6PA6apWGJap9wCIvrLLmUbk3LUafSWhgvxV7gESS5IWi%2FiQJtgX5Mb6%2FdrUtLF5gdRQsYxZOMil7NZIRMwpYcb0ohYfOK1m4r1ou1PrvZ%2FZBc71qqjEfO3vTs%2FI%2B%2BrP7WQyyGNzMSnXo%2F1mwB8bztca2RMuS6fwusVzpoevNtA&X-Amz-Signature=408be9ed4724f6af25fb4467d30ceb2c152270633fb591fb75d1408142cf23a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFDJMTA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPkZK9sRAKoZlmuYEd9MQQDiTlaY%2FkIuzKcQ4%2ByRhDgIgYgdM4dosObsbN3B%2Fy%2B9eZPOMlvigzPvRElQVvS%2BbqJYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZuq4fpZCEcqejRdSrcA0L82RiP6WGd4HPDZ%2F9uHDu0dLPMwm8dxdBKuy4cJVlMw0IORnI5VYptAj8LxdigU29%2FuWN0G3l1T7tutCnLs0QXOJos52%2BdUUnaKv9LJ52pC1nIL8a4B5LEe5aUs%2BkYACzxTVk5JUAdxp8po759%2Fz2LHLuI0Hn1OWAVXtrtRH8M0xUO43I3LRI4YcY7HpKxBiQOyrwpKpgXBH3TRm7J7Y53Rt5x0cmZGlTxpudoMDqQpXamRjUL9TXI4LlrB92Fkuuvf7ANo%2BPD%2Fj%2Bv5aDdIcKpgF10%2B4efokcVsVYdxoKduz%2BQJsd2xmJ8dkvgr6vOOIohXgl4WVc%2Bf%2Fl6vtnyGJ29J%2Br2mPx095F9ox19pPLfzzWaVGEdTC10hkI2XlnHfwS5ap8ChSgLX%2BUhji%2Fw6shNM5VI8%2BNRiu8QGSpo7SbYHXjeXy2%2F7OxylLP03qrA%2BOvUYwpYXdpVTR%2BJGrbszPSokfbBWthtb%2BCLgNBQqzV1vKidnAYDoGle8x9DyS1ZTyaB7jd8QNA6ZVJiMjoIs3l2rZGVIKItTtvdxGtbPeyg4sGJpzQ19FT043LsVzzGmlbOlegorrwhEbnskeA%2FMMASsE3iTwok6tYxQUt8HS2DCml7z2cPosWT4tmeMPnVxcMGOqUBnFua205WN5wK%2FLrHNVdQrxIXbVzjZQuIHnGuTyYQaoEaMD1PwU6PA6apWGJap9wCIvrLLmUbk3LUafSWhgvxV7gESS5IWi%2FiQJtgX5Mb6%2FdrUtLF5gdRQsYxZOMil7NZIRMwpYcb0ohYfOK1m4r1ou1PrvZ%2FZBc71qqjEfO3vTs%2FI%2B%2BrP7WQyyGNzMSnXo%2F1mwB8bztca2RMuS6fwusVzpoevNtA&X-Amz-Signature=c76da329fd1a7d0398443727d50ce3b58ad7d7247f16636b27ba284dd2f5276b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFDJMTA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPkZK9sRAKoZlmuYEd9MQQDiTlaY%2FkIuzKcQ4%2ByRhDgIgYgdM4dosObsbN3B%2Fy%2B9eZPOMlvigzPvRElQVvS%2BbqJYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZuq4fpZCEcqejRdSrcA0L82RiP6WGd4HPDZ%2F9uHDu0dLPMwm8dxdBKuy4cJVlMw0IORnI5VYptAj8LxdigU29%2FuWN0G3l1T7tutCnLs0QXOJos52%2BdUUnaKv9LJ52pC1nIL8a4B5LEe5aUs%2BkYACzxTVk5JUAdxp8po759%2Fz2LHLuI0Hn1OWAVXtrtRH8M0xUO43I3LRI4YcY7HpKxBiQOyrwpKpgXBH3TRm7J7Y53Rt5x0cmZGlTxpudoMDqQpXamRjUL9TXI4LlrB92Fkuuvf7ANo%2BPD%2Fj%2Bv5aDdIcKpgF10%2B4efokcVsVYdxoKduz%2BQJsd2xmJ8dkvgr6vOOIohXgl4WVc%2Bf%2Fl6vtnyGJ29J%2Br2mPx095F9ox19pPLfzzWaVGEdTC10hkI2XlnHfwS5ap8ChSgLX%2BUhji%2Fw6shNM5VI8%2BNRiu8QGSpo7SbYHXjeXy2%2F7OxylLP03qrA%2BOvUYwpYXdpVTR%2BJGrbszPSokfbBWthtb%2BCLgNBQqzV1vKidnAYDoGle8x9DyS1ZTyaB7jd8QNA6ZVJiMjoIs3l2rZGVIKItTtvdxGtbPeyg4sGJpzQ19FT043LsVzzGmlbOlegorrwhEbnskeA%2FMMASsE3iTwok6tYxQUt8HS2DCml7z2cPosWT4tmeMPnVxcMGOqUBnFua205WN5wK%2FLrHNVdQrxIXbVzjZQuIHnGuTyYQaoEaMD1PwU6PA6apWGJap9wCIvrLLmUbk3LUafSWhgvxV7gESS5IWi%2FiQJtgX5Mb6%2FdrUtLF5gdRQsYxZOMil7NZIRMwpYcb0ohYfOK1m4r1ou1PrvZ%2FZBc71qqjEfO3vTs%2FI%2B%2BrP7WQyyGNzMSnXo%2F1mwB8bztca2RMuS6fwusVzpoevNtA&X-Amz-Signature=a00435e96bb2c30a2ca2e98ee4970cebfb9d40f6bb70b4d3fd86feb6369f2b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFDJMTA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPkZK9sRAKoZlmuYEd9MQQDiTlaY%2FkIuzKcQ4%2ByRhDgIgYgdM4dosObsbN3B%2Fy%2B9eZPOMlvigzPvRElQVvS%2BbqJYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZuq4fpZCEcqejRdSrcA0L82RiP6WGd4HPDZ%2F9uHDu0dLPMwm8dxdBKuy4cJVlMw0IORnI5VYptAj8LxdigU29%2FuWN0G3l1T7tutCnLs0QXOJos52%2BdUUnaKv9LJ52pC1nIL8a4B5LEe5aUs%2BkYACzxTVk5JUAdxp8po759%2Fz2LHLuI0Hn1OWAVXtrtRH8M0xUO43I3LRI4YcY7HpKxBiQOyrwpKpgXBH3TRm7J7Y53Rt5x0cmZGlTxpudoMDqQpXamRjUL9TXI4LlrB92Fkuuvf7ANo%2BPD%2Fj%2Bv5aDdIcKpgF10%2B4efokcVsVYdxoKduz%2BQJsd2xmJ8dkvgr6vOOIohXgl4WVc%2Bf%2Fl6vtnyGJ29J%2Br2mPx095F9ox19pPLfzzWaVGEdTC10hkI2XlnHfwS5ap8ChSgLX%2BUhji%2Fw6shNM5VI8%2BNRiu8QGSpo7SbYHXjeXy2%2F7OxylLP03qrA%2BOvUYwpYXdpVTR%2BJGrbszPSokfbBWthtb%2BCLgNBQqzV1vKidnAYDoGle8x9DyS1ZTyaB7jd8QNA6ZVJiMjoIs3l2rZGVIKItTtvdxGtbPeyg4sGJpzQ19FT043LsVzzGmlbOlegorrwhEbnskeA%2FMMASsE3iTwok6tYxQUt8HS2DCml7z2cPosWT4tmeMPnVxcMGOqUBnFua205WN5wK%2FLrHNVdQrxIXbVzjZQuIHnGuTyYQaoEaMD1PwU6PA6apWGJap9wCIvrLLmUbk3LUafSWhgvxV7gESS5IWi%2FiQJtgX5Mb6%2FdrUtLF5gdRQsYxZOMil7NZIRMwpYcb0ohYfOK1m4r1ou1PrvZ%2FZBc71qqjEfO3vTs%2FI%2B%2BrP7WQyyGNzMSnXo%2F1mwB8bztca2RMuS6fwusVzpoevNtA&X-Amz-Signature=2bac46e9221112c1dfea31f658907eafd2dbab0c3613d5bfbbc19a05d3d7f9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFDJMTA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPkZK9sRAKoZlmuYEd9MQQDiTlaY%2FkIuzKcQ4%2ByRhDgIgYgdM4dosObsbN3B%2Fy%2B9eZPOMlvigzPvRElQVvS%2BbqJYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZuq4fpZCEcqejRdSrcA0L82RiP6WGd4HPDZ%2F9uHDu0dLPMwm8dxdBKuy4cJVlMw0IORnI5VYptAj8LxdigU29%2FuWN0G3l1T7tutCnLs0QXOJos52%2BdUUnaKv9LJ52pC1nIL8a4B5LEe5aUs%2BkYACzxTVk5JUAdxp8po759%2Fz2LHLuI0Hn1OWAVXtrtRH8M0xUO43I3LRI4YcY7HpKxBiQOyrwpKpgXBH3TRm7J7Y53Rt5x0cmZGlTxpudoMDqQpXamRjUL9TXI4LlrB92Fkuuvf7ANo%2BPD%2Fj%2Bv5aDdIcKpgF10%2B4efokcVsVYdxoKduz%2BQJsd2xmJ8dkvgr6vOOIohXgl4WVc%2Bf%2Fl6vtnyGJ29J%2Br2mPx095F9ox19pPLfzzWaVGEdTC10hkI2XlnHfwS5ap8ChSgLX%2BUhji%2Fw6shNM5VI8%2BNRiu8QGSpo7SbYHXjeXy2%2F7OxylLP03qrA%2BOvUYwpYXdpVTR%2BJGrbszPSokfbBWthtb%2BCLgNBQqzV1vKidnAYDoGle8x9DyS1ZTyaB7jd8QNA6ZVJiMjoIs3l2rZGVIKItTtvdxGtbPeyg4sGJpzQ19FT043LsVzzGmlbOlegorrwhEbnskeA%2FMMASsE3iTwok6tYxQUt8HS2DCml7z2cPosWT4tmeMPnVxcMGOqUBnFua205WN5wK%2FLrHNVdQrxIXbVzjZQuIHnGuTyYQaoEaMD1PwU6PA6apWGJap9wCIvrLLmUbk3LUafSWhgvxV7gESS5IWi%2FiQJtgX5Mb6%2FdrUtLF5gdRQsYxZOMil7NZIRMwpYcb0ohYfOK1m4r1ou1PrvZ%2FZBc71qqjEfO3vTs%2FI%2B%2BrP7WQyyGNzMSnXo%2F1mwB8bztca2RMuS6fwusVzpoevNtA&X-Amz-Signature=073c67e8da2a826bda2eebb08c67e045baa618202856f1c8d5d91911f988db3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
