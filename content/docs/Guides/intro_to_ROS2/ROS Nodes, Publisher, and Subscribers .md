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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMK7FIA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPfrpTcPmF%2F8oivA7x7EJcOqHMFNEfhlMrYKof5Z1XgIgOySOIx%2FeOsvMCmI0Y5xvGLP9uBaqiRuhRcvi3OSol4MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TRndKlfl2DHFesircA%2F38oppcO8hqADnp14VbTbAnp419srvil3zV41XSJdama%2F0BJDhzs1Xyy8EZxvJXby9t5lyfF8TZLM509Zqz5mDjKNjF%2FJgjTlVOlFXMZ5S9JW%2ByjeF7uz2USlbHRYw8h2FkM3mdIx7BbsW35JYutcEaaVrx7OQRjsKat%2B%2F12DTLc67jNM%2BaggYOajH9rlpgovZKU9Fc44SRALOSYomt40rp%2B0UfsAyoC%2BDKnBDVR3SIGf4wZtjiO%2B9IPCWmGnVBT0KXUKOLADBdu9cjaXMO5u6Bt2NhzfeFB%2BntKjqlOnjUNw%2B5NT5X%2F9xuDS%2BSLHZGiWDDi14%2BWnf8TIM9DbVA%2BKjT9PnBZHdOCesz%2Fe3Q9XX7z4h761%2FqO0e2YzmY6Fx2B%2B1%2Fyt33c%2BaRqMNKZXMMAey%2B1C20hfNDe4icmOsSVbepqL60A%2FXRunuwJK9KL99aJnt%2BReP9QW2vols7Iw4X7bZ8%2BHoayvP7vbf%2B%2BfWGOl0OYAWtphDH8g5ec0t382Hrt7fyeHkn2uhbtQvkkGJ0HkEGtFdNRIjIpapMvYeAGyF7sykkcFtWU1MRQl%2BvB220nxZBGLYhHTLrGjERHL80IkYk3U%2FJ0e8q7yvkcmqGqFJKa6fQtUwmNijhOIS8MNukgcsGOqUBv9W9%2FR%2BVBO95Y%2B0Ne2StU8MVtsNPVMJLDzdWFCaPBUSSjrTZyMVAYt5FjNOCNVVgThMucvh5zKlydKQ84TsPZbjWcxTLgCOMWDVZ07QP1ZWm8tuvLDS1xIxzScGISspv7gHH2g85un11EWP3iWUtjkoJ78xlFyprWfaumn78zsToFE5jPzBGz%2FNlJVDKIn4ndwm1kjyNpZeC5cGBONc67337M7Cl&X-Amz-Signature=6a3da2637083e64c1d04b14f99ba9e57416810ea07fbdbe355f0b88ed1054e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMK7FIA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPfrpTcPmF%2F8oivA7x7EJcOqHMFNEfhlMrYKof5Z1XgIgOySOIx%2FeOsvMCmI0Y5xvGLP9uBaqiRuhRcvi3OSol4MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TRndKlfl2DHFesircA%2F38oppcO8hqADnp14VbTbAnp419srvil3zV41XSJdama%2F0BJDhzs1Xyy8EZxvJXby9t5lyfF8TZLM509Zqz5mDjKNjF%2FJgjTlVOlFXMZ5S9JW%2ByjeF7uz2USlbHRYw8h2FkM3mdIx7BbsW35JYutcEaaVrx7OQRjsKat%2B%2F12DTLc67jNM%2BaggYOajH9rlpgovZKU9Fc44SRALOSYomt40rp%2B0UfsAyoC%2BDKnBDVR3SIGf4wZtjiO%2B9IPCWmGnVBT0KXUKOLADBdu9cjaXMO5u6Bt2NhzfeFB%2BntKjqlOnjUNw%2B5NT5X%2F9xuDS%2BSLHZGiWDDi14%2BWnf8TIM9DbVA%2BKjT9PnBZHdOCesz%2Fe3Q9XX7z4h761%2FqO0e2YzmY6Fx2B%2B1%2Fyt33c%2BaRqMNKZXMMAey%2B1C20hfNDe4icmOsSVbepqL60A%2FXRunuwJK9KL99aJnt%2BReP9QW2vols7Iw4X7bZ8%2BHoayvP7vbf%2B%2BfWGOl0OYAWtphDH8g5ec0t382Hrt7fyeHkn2uhbtQvkkGJ0HkEGtFdNRIjIpapMvYeAGyF7sykkcFtWU1MRQl%2BvB220nxZBGLYhHTLrGjERHL80IkYk3U%2FJ0e8q7yvkcmqGqFJKa6fQtUwmNijhOIS8MNukgcsGOqUBv9W9%2FR%2BVBO95Y%2B0Ne2StU8MVtsNPVMJLDzdWFCaPBUSSjrTZyMVAYt5FjNOCNVVgThMucvh5zKlydKQ84TsPZbjWcxTLgCOMWDVZ07QP1ZWm8tuvLDS1xIxzScGISspv7gHH2g85un11EWP3iWUtjkoJ78xlFyprWfaumn78zsToFE5jPzBGz%2FNlJVDKIn4ndwm1kjyNpZeC5cGBONc67337M7Cl&X-Amz-Signature=22d54e6a29c82157d25e633aeea34780eb3d4987f30b49b2e73bd37427476159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMK7FIA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPfrpTcPmF%2F8oivA7x7EJcOqHMFNEfhlMrYKof5Z1XgIgOySOIx%2FeOsvMCmI0Y5xvGLP9uBaqiRuhRcvi3OSol4MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TRndKlfl2DHFesircA%2F38oppcO8hqADnp14VbTbAnp419srvil3zV41XSJdama%2F0BJDhzs1Xyy8EZxvJXby9t5lyfF8TZLM509Zqz5mDjKNjF%2FJgjTlVOlFXMZ5S9JW%2ByjeF7uz2USlbHRYw8h2FkM3mdIx7BbsW35JYutcEaaVrx7OQRjsKat%2B%2F12DTLc67jNM%2BaggYOajH9rlpgovZKU9Fc44SRALOSYomt40rp%2B0UfsAyoC%2BDKnBDVR3SIGf4wZtjiO%2B9IPCWmGnVBT0KXUKOLADBdu9cjaXMO5u6Bt2NhzfeFB%2BntKjqlOnjUNw%2B5NT5X%2F9xuDS%2BSLHZGiWDDi14%2BWnf8TIM9DbVA%2BKjT9PnBZHdOCesz%2Fe3Q9XX7z4h761%2FqO0e2YzmY6Fx2B%2B1%2Fyt33c%2BaRqMNKZXMMAey%2B1C20hfNDe4icmOsSVbepqL60A%2FXRunuwJK9KL99aJnt%2BReP9QW2vols7Iw4X7bZ8%2BHoayvP7vbf%2B%2BfWGOl0OYAWtphDH8g5ec0t382Hrt7fyeHkn2uhbtQvkkGJ0HkEGtFdNRIjIpapMvYeAGyF7sykkcFtWU1MRQl%2BvB220nxZBGLYhHTLrGjERHL80IkYk3U%2FJ0e8q7yvkcmqGqFJKa6fQtUwmNijhOIS8MNukgcsGOqUBv9W9%2FR%2BVBO95Y%2B0Ne2StU8MVtsNPVMJLDzdWFCaPBUSSjrTZyMVAYt5FjNOCNVVgThMucvh5zKlydKQ84TsPZbjWcxTLgCOMWDVZ07QP1ZWm8tuvLDS1xIxzScGISspv7gHH2g85un11EWP3iWUtjkoJ78xlFyprWfaumn78zsToFE5jPzBGz%2FNlJVDKIn4ndwm1kjyNpZeC5cGBONc67337M7Cl&X-Amz-Signature=d3891edaace7b571bd7083930af0c7de431325d72576b127f03f3c317d32674b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMK7FIA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPfrpTcPmF%2F8oivA7x7EJcOqHMFNEfhlMrYKof5Z1XgIgOySOIx%2FeOsvMCmI0Y5xvGLP9uBaqiRuhRcvi3OSol4MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TRndKlfl2DHFesircA%2F38oppcO8hqADnp14VbTbAnp419srvil3zV41XSJdama%2F0BJDhzs1Xyy8EZxvJXby9t5lyfF8TZLM509Zqz5mDjKNjF%2FJgjTlVOlFXMZ5S9JW%2ByjeF7uz2USlbHRYw8h2FkM3mdIx7BbsW35JYutcEaaVrx7OQRjsKat%2B%2F12DTLc67jNM%2BaggYOajH9rlpgovZKU9Fc44SRALOSYomt40rp%2B0UfsAyoC%2BDKnBDVR3SIGf4wZtjiO%2B9IPCWmGnVBT0KXUKOLADBdu9cjaXMO5u6Bt2NhzfeFB%2BntKjqlOnjUNw%2B5NT5X%2F9xuDS%2BSLHZGiWDDi14%2BWnf8TIM9DbVA%2BKjT9PnBZHdOCesz%2Fe3Q9XX7z4h761%2FqO0e2YzmY6Fx2B%2B1%2Fyt33c%2BaRqMNKZXMMAey%2B1C20hfNDe4icmOsSVbepqL60A%2FXRunuwJK9KL99aJnt%2BReP9QW2vols7Iw4X7bZ8%2BHoayvP7vbf%2B%2BfWGOl0OYAWtphDH8g5ec0t382Hrt7fyeHkn2uhbtQvkkGJ0HkEGtFdNRIjIpapMvYeAGyF7sykkcFtWU1MRQl%2BvB220nxZBGLYhHTLrGjERHL80IkYk3U%2FJ0e8q7yvkcmqGqFJKa6fQtUwmNijhOIS8MNukgcsGOqUBv9W9%2FR%2BVBO95Y%2B0Ne2StU8MVtsNPVMJLDzdWFCaPBUSSjrTZyMVAYt5FjNOCNVVgThMucvh5zKlydKQ84TsPZbjWcxTLgCOMWDVZ07QP1ZWm8tuvLDS1xIxzScGISspv7gHH2g85un11EWP3iWUtjkoJ78xlFyprWfaumn78zsToFE5jPzBGz%2FNlJVDKIn4ndwm1kjyNpZeC5cGBONc67337M7Cl&X-Amz-Signature=1a8ae367e07508d5e0eb0f9b63df3d8a004c2dc662af719a0ecdf5618cece325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMK7FIA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPfrpTcPmF%2F8oivA7x7EJcOqHMFNEfhlMrYKof5Z1XgIgOySOIx%2FeOsvMCmI0Y5xvGLP9uBaqiRuhRcvi3OSol4MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TRndKlfl2DHFesircA%2F38oppcO8hqADnp14VbTbAnp419srvil3zV41XSJdama%2F0BJDhzs1Xyy8EZxvJXby9t5lyfF8TZLM509Zqz5mDjKNjF%2FJgjTlVOlFXMZ5S9JW%2ByjeF7uz2USlbHRYw8h2FkM3mdIx7BbsW35JYutcEaaVrx7OQRjsKat%2B%2F12DTLc67jNM%2BaggYOajH9rlpgovZKU9Fc44SRALOSYomt40rp%2B0UfsAyoC%2BDKnBDVR3SIGf4wZtjiO%2B9IPCWmGnVBT0KXUKOLADBdu9cjaXMO5u6Bt2NhzfeFB%2BntKjqlOnjUNw%2B5NT5X%2F9xuDS%2BSLHZGiWDDi14%2BWnf8TIM9DbVA%2BKjT9PnBZHdOCesz%2Fe3Q9XX7z4h761%2FqO0e2YzmY6Fx2B%2B1%2Fyt33c%2BaRqMNKZXMMAey%2B1C20hfNDe4icmOsSVbepqL60A%2FXRunuwJK9KL99aJnt%2BReP9QW2vols7Iw4X7bZ8%2BHoayvP7vbf%2B%2BfWGOl0OYAWtphDH8g5ec0t382Hrt7fyeHkn2uhbtQvkkGJ0HkEGtFdNRIjIpapMvYeAGyF7sykkcFtWU1MRQl%2BvB220nxZBGLYhHTLrGjERHL80IkYk3U%2FJ0e8q7yvkcmqGqFJKa6fQtUwmNijhOIS8MNukgcsGOqUBv9W9%2FR%2BVBO95Y%2B0Ne2StU8MVtsNPVMJLDzdWFCaPBUSSjrTZyMVAYt5FjNOCNVVgThMucvh5zKlydKQ84TsPZbjWcxTLgCOMWDVZ07QP1ZWm8tuvLDS1xIxzScGISspv7gHH2g85un11EWP3iWUtjkoJ78xlFyprWfaumn78zsToFE5jPzBGz%2FNlJVDKIn4ndwm1kjyNpZeC5cGBONc67337M7Cl&X-Amz-Signature=e5c4da39e00c0f2472d9a5f17617f699cfc1db5aaa196da91b7fb3bf79c6668f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMK7FIA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPfrpTcPmF%2F8oivA7x7EJcOqHMFNEfhlMrYKof5Z1XgIgOySOIx%2FeOsvMCmI0Y5xvGLP9uBaqiRuhRcvi3OSol4MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TRndKlfl2DHFesircA%2F38oppcO8hqADnp14VbTbAnp419srvil3zV41XSJdama%2F0BJDhzs1Xyy8EZxvJXby9t5lyfF8TZLM509Zqz5mDjKNjF%2FJgjTlVOlFXMZ5S9JW%2ByjeF7uz2USlbHRYw8h2FkM3mdIx7BbsW35JYutcEaaVrx7OQRjsKat%2B%2F12DTLc67jNM%2BaggYOajH9rlpgovZKU9Fc44SRALOSYomt40rp%2B0UfsAyoC%2BDKnBDVR3SIGf4wZtjiO%2B9IPCWmGnVBT0KXUKOLADBdu9cjaXMO5u6Bt2NhzfeFB%2BntKjqlOnjUNw%2B5NT5X%2F9xuDS%2BSLHZGiWDDi14%2BWnf8TIM9DbVA%2BKjT9PnBZHdOCesz%2Fe3Q9XX7z4h761%2FqO0e2YzmY6Fx2B%2B1%2Fyt33c%2BaRqMNKZXMMAey%2B1C20hfNDe4icmOsSVbepqL60A%2FXRunuwJK9KL99aJnt%2BReP9QW2vols7Iw4X7bZ8%2BHoayvP7vbf%2B%2BfWGOl0OYAWtphDH8g5ec0t382Hrt7fyeHkn2uhbtQvkkGJ0HkEGtFdNRIjIpapMvYeAGyF7sykkcFtWU1MRQl%2BvB220nxZBGLYhHTLrGjERHL80IkYk3U%2FJ0e8q7yvkcmqGqFJKa6fQtUwmNijhOIS8MNukgcsGOqUBv9W9%2FR%2BVBO95Y%2B0Ne2StU8MVtsNPVMJLDzdWFCaPBUSSjrTZyMVAYt5FjNOCNVVgThMucvh5zKlydKQ84TsPZbjWcxTLgCOMWDVZ07QP1ZWm8tuvLDS1xIxzScGISspv7gHH2g85un11EWP3iWUtjkoJ78xlFyprWfaumn78zsToFE5jPzBGz%2FNlJVDKIn4ndwm1kjyNpZeC5cGBONc67337M7Cl&X-Amz-Signature=a07b82b9c1cdf805a6c44d96b9f6e9f7a7f2ca2106e4d292a50e573cd8ac08eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMK7FIA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPfrpTcPmF%2F8oivA7x7EJcOqHMFNEfhlMrYKof5Z1XgIgOySOIx%2FeOsvMCmI0Y5xvGLP9uBaqiRuhRcvi3OSol4MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TRndKlfl2DHFesircA%2F38oppcO8hqADnp14VbTbAnp419srvil3zV41XSJdama%2F0BJDhzs1Xyy8EZxvJXby9t5lyfF8TZLM509Zqz5mDjKNjF%2FJgjTlVOlFXMZ5S9JW%2ByjeF7uz2USlbHRYw8h2FkM3mdIx7BbsW35JYutcEaaVrx7OQRjsKat%2B%2F12DTLc67jNM%2BaggYOajH9rlpgovZKU9Fc44SRALOSYomt40rp%2B0UfsAyoC%2BDKnBDVR3SIGf4wZtjiO%2B9IPCWmGnVBT0KXUKOLADBdu9cjaXMO5u6Bt2NhzfeFB%2BntKjqlOnjUNw%2B5NT5X%2F9xuDS%2BSLHZGiWDDi14%2BWnf8TIM9DbVA%2BKjT9PnBZHdOCesz%2Fe3Q9XX7z4h761%2FqO0e2YzmY6Fx2B%2B1%2Fyt33c%2BaRqMNKZXMMAey%2B1C20hfNDe4icmOsSVbepqL60A%2FXRunuwJK9KL99aJnt%2BReP9QW2vols7Iw4X7bZ8%2BHoayvP7vbf%2B%2BfWGOl0OYAWtphDH8g5ec0t382Hrt7fyeHkn2uhbtQvkkGJ0HkEGtFdNRIjIpapMvYeAGyF7sykkcFtWU1MRQl%2BvB220nxZBGLYhHTLrGjERHL80IkYk3U%2FJ0e8q7yvkcmqGqFJKa6fQtUwmNijhOIS8MNukgcsGOqUBv9W9%2FR%2BVBO95Y%2B0Ne2StU8MVtsNPVMJLDzdWFCaPBUSSjrTZyMVAYt5FjNOCNVVgThMucvh5zKlydKQ84TsPZbjWcxTLgCOMWDVZ07QP1ZWm8tuvLDS1xIxzScGISspv7gHH2g85un11EWP3iWUtjkoJ78xlFyprWfaumn78zsToFE5jPzBGz%2FNlJVDKIn4ndwm1kjyNpZeC5cGBONc67337M7Cl&X-Amz-Signature=54062393bf8acb7af29e8cd120cf3927301ed3542a2b02b143af5ac6357ba129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMK7FIA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPfrpTcPmF%2F8oivA7x7EJcOqHMFNEfhlMrYKof5Z1XgIgOySOIx%2FeOsvMCmI0Y5xvGLP9uBaqiRuhRcvi3OSol4MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TRndKlfl2DHFesircA%2F38oppcO8hqADnp14VbTbAnp419srvil3zV41XSJdama%2F0BJDhzs1Xyy8EZxvJXby9t5lyfF8TZLM509Zqz5mDjKNjF%2FJgjTlVOlFXMZ5S9JW%2ByjeF7uz2USlbHRYw8h2FkM3mdIx7BbsW35JYutcEaaVrx7OQRjsKat%2B%2F12DTLc67jNM%2BaggYOajH9rlpgovZKU9Fc44SRALOSYomt40rp%2B0UfsAyoC%2BDKnBDVR3SIGf4wZtjiO%2B9IPCWmGnVBT0KXUKOLADBdu9cjaXMO5u6Bt2NhzfeFB%2BntKjqlOnjUNw%2B5NT5X%2F9xuDS%2BSLHZGiWDDi14%2BWnf8TIM9DbVA%2BKjT9PnBZHdOCesz%2Fe3Q9XX7z4h761%2FqO0e2YzmY6Fx2B%2B1%2Fyt33c%2BaRqMNKZXMMAey%2B1C20hfNDe4icmOsSVbepqL60A%2FXRunuwJK9KL99aJnt%2BReP9QW2vols7Iw4X7bZ8%2BHoayvP7vbf%2B%2BfWGOl0OYAWtphDH8g5ec0t382Hrt7fyeHkn2uhbtQvkkGJ0HkEGtFdNRIjIpapMvYeAGyF7sykkcFtWU1MRQl%2BvB220nxZBGLYhHTLrGjERHL80IkYk3U%2FJ0e8q7yvkcmqGqFJKa6fQtUwmNijhOIS8MNukgcsGOqUBv9W9%2FR%2BVBO95Y%2B0Ne2StU8MVtsNPVMJLDzdWFCaPBUSSjrTZyMVAYt5FjNOCNVVgThMucvh5zKlydKQ84TsPZbjWcxTLgCOMWDVZ07QP1ZWm8tuvLDS1xIxzScGISspv7gHH2g85un11EWP3iWUtjkoJ78xlFyprWfaumn78zsToFE5jPzBGz%2FNlJVDKIn4ndwm1kjyNpZeC5cGBONc67337M7Cl&X-Amz-Signature=fea372d06827b2beecc63b82972b6498453c3b0a3de6a395a27693d219d543e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
