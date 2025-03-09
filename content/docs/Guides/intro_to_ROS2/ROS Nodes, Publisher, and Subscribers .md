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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSKAZF7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCW2QH3qTgFbFKrRWkAEgSEPY58TJz2%2BycQ6Z68zaqrKAIgTxqReSkcAZo1J5djIfnXRawNr3%2F0jOCIl1SnWDGGdhoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN0cq9GKXNiKqXv%2BryrcAy66r3HC85xLINbfZlRujfA9ArdM1cpvrSn0dsZiexZ67%2BTq7j2h9XMYOulHdMLtqktSLJuAt2iOhML9JhjyaAfsYU1SXPfDdQgG04%2BRBdNjXoTLyrG9eq9sOVK9xrf9jfix%2BIFSsi70msc8oFDuqTKQjeAWIwiD1Sf%2BISUIPRWQedqM3tw%2BG8GBMbQWLJQgMUEm8e2mg7%2Fe4%2FOae9P11zrllXQIQgKnqs5KcxbteYE%2FDFcZyWTXeS78I46vc042ECeLhUHV2lYtdbxmEhPfv2UVjQuGZ7aXyfMfewFT2JfNn7PT3n6g5vvcAPOvHbWCibkEuJwonuUusc0ILEbNh9PKI43yVppNuBQb0Iu075LuJZeZDhOkF4iY9NfUu89UrSlFVkl3dArWmGXbb9uT%2BRYrDzY948Pjtqwc%2FnzHfnI9FwBg7%2B0Ba8KOJLloaudSk705go92sAhB1SQo8zw%2BRe6md%2F%2BW%2BEhsKG8ybs%2FyMdFQ3VqzwVIFDz6tXpF2Jhc%2FcqXGwQXYd6fsGgkdB3ygbzh2rJrhjV0EsDaIVrQTMJZTpdxixq8mdYB6MKTZ8SPQdDryAl9HSOecSvTb7xOFZ03cHTB9s3FJq9XlYP9kevhLoz0KPS2q2484al%2BUML%2Fgt74GOqUBu1tpHUw158ELpxAlkV7ai8ka0vFQG9qi3TQSkcpokUuvMsDmfPGB7uiBO%2B6gcgFT1oIsigQsdKlSIR5qlGyDF6w8mkYjWBB6EOVsfCIHWD9FysA65TYDuwExF9njCDcnbYzvgDHVguOL95yzAS%2B7VXGyw%2BW%2B9WyYmktTqeZTV%2BqezKaG1j1I5Zyblnvidam37OMqsFvgT%2Bq2g%2BCo2vKoR5V8O%2FFj&X-Amz-Signature=8a8be27e565d939f9425b233051fbda052c0ff3545ba29f55853e814e700738f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSKAZF7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCW2QH3qTgFbFKrRWkAEgSEPY58TJz2%2BycQ6Z68zaqrKAIgTxqReSkcAZo1J5djIfnXRawNr3%2F0jOCIl1SnWDGGdhoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN0cq9GKXNiKqXv%2BryrcAy66r3HC85xLINbfZlRujfA9ArdM1cpvrSn0dsZiexZ67%2BTq7j2h9XMYOulHdMLtqktSLJuAt2iOhML9JhjyaAfsYU1SXPfDdQgG04%2BRBdNjXoTLyrG9eq9sOVK9xrf9jfix%2BIFSsi70msc8oFDuqTKQjeAWIwiD1Sf%2BISUIPRWQedqM3tw%2BG8GBMbQWLJQgMUEm8e2mg7%2Fe4%2FOae9P11zrllXQIQgKnqs5KcxbteYE%2FDFcZyWTXeS78I46vc042ECeLhUHV2lYtdbxmEhPfv2UVjQuGZ7aXyfMfewFT2JfNn7PT3n6g5vvcAPOvHbWCibkEuJwonuUusc0ILEbNh9PKI43yVppNuBQb0Iu075LuJZeZDhOkF4iY9NfUu89UrSlFVkl3dArWmGXbb9uT%2BRYrDzY948Pjtqwc%2FnzHfnI9FwBg7%2B0Ba8KOJLloaudSk705go92sAhB1SQo8zw%2BRe6md%2F%2BW%2BEhsKG8ybs%2FyMdFQ3VqzwVIFDz6tXpF2Jhc%2FcqXGwQXYd6fsGgkdB3ygbzh2rJrhjV0EsDaIVrQTMJZTpdxixq8mdYB6MKTZ8SPQdDryAl9HSOecSvTb7xOFZ03cHTB9s3FJq9XlYP9kevhLoz0KPS2q2484al%2BUML%2Fgt74GOqUBu1tpHUw158ELpxAlkV7ai8ka0vFQG9qi3TQSkcpokUuvMsDmfPGB7uiBO%2B6gcgFT1oIsigQsdKlSIR5qlGyDF6w8mkYjWBB6EOVsfCIHWD9FysA65TYDuwExF9njCDcnbYzvgDHVguOL95yzAS%2B7VXGyw%2BW%2B9WyYmktTqeZTV%2BqezKaG1j1I5Zyblnvidam37OMqsFvgT%2Bq2g%2BCo2vKoR5V8O%2FFj&X-Amz-Signature=bfb1fcf4a0b0166f9b1dadad8da125cadbec1c0f646c879c2c926084bba84a44&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSKAZF7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCW2QH3qTgFbFKrRWkAEgSEPY58TJz2%2BycQ6Z68zaqrKAIgTxqReSkcAZo1J5djIfnXRawNr3%2F0jOCIl1SnWDGGdhoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN0cq9GKXNiKqXv%2BryrcAy66r3HC85xLINbfZlRujfA9ArdM1cpvrSn0dsZiexZ67%2BTq7j2h9XMYOulHdMLtqktSLJuAt2iOhML9JhjyaAfsYU1SXPfDdQgG04%2BRBdNjXoTLyrG9eq9sOVK9xrf9jfix%2BIFSsi70msc8oFDuqTKQjeAWIwiD1Sf%2BISUIPRWQedqM3tw%2BG8GBMbQWLJQgMUEm8e2mg7%2Fe4%2FOae9P11zrllXQIQgKnqs5KcxbteYE%2FDFcZyWTXeS78I46vc042ECeLhUHV2lYtdbxmEhPfv2UVjQuGZ7aXyfMfewFT2JfNn7PT3n6g5vvcAPOvHbWCibkEuJwonuUusc0ILEbNh9PKI43yVppNuBQb0Iu075LuJZeZDhOkF4iY9NfUu89UrSlFVkl3dArWmGXbb9uT%2BRYrDzY948Pjtqwc%2FnzHfnI9FwBg7%2B0Ba8KOJLloaudSk705go92sAhB1SQo8zw%2BRe6md%2F%2BW%2BEhsKG8ybs%2FyMdFQ3VqzwVIFDz6tXpF2Jhc%2FcqXGwQXYd6fsGgkdB3ygbzh2rJrhjV0EsDaIVrQTMJZTpdxixq8mdYB6MKTZ8SPQdDryAl9HSOecSvTb7xOFZ03cHTB9s3FJq9XlYP9kevhLoz0KPS2q2484al%2BUML%2Fgt74GOqUBu1tpHUw158ELpxAlkV7ai8ka0vFQG9qi3TQSkcpokUuvMsDmfPGB7uiBO%2B6gcgFT1oIsigQsdKlSIR5qlGyDF6w8mkYjWBB6EOVsfCIHWD9FysA65TYDuwExF9njCDcnbYzvgDHVguOL95yzAS%2B7VXGyw%2BW%2B9WyYmktTqeZTV%2BqezKaG1j1I5Zyblnvidam37OMqsFvgT%2Bq2g%2BCo2vKoR5V8O%2FFj&X-Amz-Signature=7b7d5a29173f473cfca8743d26a2858f639c83bb3e0d148063934ea6ee662191&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSKAZF7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCW2QH3qTgFbFKrRWkAEgSEPY58TJz2%2BycQ6Z68zaqrKAIgTxqReSkcAZo1J5djIfnXRawNr3%2F0jOCIl1SnWDGGdhoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN0cq9GKXNiKqXv%2BryrcAy66r3HC85xLINbfZlRujfA9ArdM1cpvrSn0dsZiexZ67%2BTq7j2h9XMYOulHdMLtqktSLJuAt2iOhML9JhjyaAfsYU1SXPfDdQgG04%2BRBdNjXoTLyrG9eq9sOVK9xrf9jfix%2BIFSsi70msc8oFDuqTKQjeAWIwiD1Sf%2BISUIPRWQedqM3tw%2BG8GBMbQWLJQgMUEm8e2mg7%2Fe4%2FOae9P11zrllXQIQgKnqs5KcxbteYE%2FDFcZyWTXeS78I46vc042ECeLhUHV2lYtdbxmEhPfv2UVjQuGZ7aXyfMfewFT2JfNn7PT3n6g5vvcAPOvHbWCibkEuJwonuUusc0ILEbNh9PKI43yVppNuBQb0Iu075LuJZeZDhOkF4iY9NfUu89UrSlFVkl3dArWmGXbb9uT%2BRYrDzY948Pjtqwc%2FnzHfnI9FwBg7%2B0Ba8KOJLloaudSk705go92sAhB1SQo8zw%2BRe6md%2F%2BW%2BEhsKG8ybs%2FyMdFQ3VqzwVIFDz6tXpF2Jhc%2FcqXGwQXYd6fsGgkdB3ygbzh2rJrhjV0EsDaIVrQTMJZTpdxixq8mdYB6MKTZ8SPQdDryAl9HSOecSvTb7xOFZ03cHTB9s3FJq9XlYP9kevhLoz0KPS2q2484al%2BUML%2Fgt74GOqUBu1tpHUw158ELpxAlkV7ai8ka0vFQG9qi3TQSkcpokUuvMsDmfPGB7uiBO%2B6gcgFT1oIsigQsdKlSIR5qlGyDF6w8mkYjWBB6EOVsfCIHWD9FysA65TYDuwExF9njCDcnbYzvgDHVguOL95yzAS%2B7VXGyw%2BW%2B9WyYmktTqeZTV%2BqezKaG1j1I5Zyblnvidam37OMqsFvgT%2Bq2g%2BCo2vKoR5V8O%2FFj&X-Amz-Signature=987d852e1403c50e0a7160bcb8729be0caa8064f797b5d365b9ac98d059065b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSKAZF7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCW2QH3qTgFbFKrRWkAEgSEPY58TJz2%2BycQ6Z68zaqrKAIgTxqReSkcAZo1J5djIfnXRawNr3%2F0jOCIl1SnWDGGdhoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN0cq9GKXNiKqXv%2BryrcAy66r3HC85xLINbfZlRujfA9ArdM1cpvrSn0dsZiexZ67%2BTq7j2h9XMYOulHdMLtqktSLJuAt2iOhML9JhjyaAfsYU1SXPfDdQgG04%2BRBdNjXoTLyrG9eq9sOVK9xrf9jfix%2BIFSsi70msc8oFDuqTKQjeAWIwiD1Sf%2BISUIPRWQedqM3tw%2BG8GBMbQWLJQgMUEm8e2mg7%2Fe4%2FOae9P11zrllXQIQgKnqs5KcxbteYE%2FDFcZyWTXeS78I46vc042ECeLhUHV2lYtdbxmEhPfv2UVjQuGZ7aXyfMfewFT2JfNn7PT3n6g5vvcAPOvHbWCibkEuJwonuUusc0ILEbNh9PKI43yVppNuBQb0Iu075LuJZeZDhOkF4iY9NfUu89UrSlFVkl3dArWmGXbb9uT%2BRYrDzY948Pjtqwc%2FnzHfnI9FwBg7%2B0Ba8KOJLloaudSk705go92sAhB1SQo8zw%2BRe6md%2F%2BW%2BEhsKG8ybs%2FyMdFQ3VqzwVIFDz6tXpF2Jhc%2FcqXGwQXYd6fsGgkdB3ygbzh2rJrhjV0EsDaIVrQTMJZTpdxixq8mdYB6MKTZ8SPQdDryAl9HSOecSvTb7xOFZ03cHTB9s3FJq9XlYP9kevhLoz0KPS2q2484al%2BUML%2Fgt74GOqUBu1tpHUw158ELpxAlkV7ai8ka0vFQG9qi3TQSkcpokUuvMsDmfPGB7uiBO%2B6gcgFT1oIsigQsdKlSIR5qlGyDF6w8mkYjWBB6EOVsfCIHWD9FysA65TYDuwExF9njCDcnbYzvgDHVguOL95yzAS%2B7VXGyw%2BW%2B9WyYmktTqeZTV%2BqezKaG1j1I5Zyblnvidam37OMqsFvgT%2Bq2g%2BCo2vKoR5V8O%2FFj&X-Amz-Signature=3435f7709d1e18bfc12031e909f41c8d43d3734d45f6966ae5cd474661cbec4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSKAZF7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCW2QH3qTgFbFKrRWkAEgSEPY58TJz2%2BycQ6Z68zaqrKAIgTxqReSkcAZo1J5djIfnXRawNr3%2F0jOCIl1SnWDGGdhoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN0cq9GKXNiKqXv%2BryrcAy66r3HC85xLINbfZlRujfA9ArdM1cpvrSn0dsZiexZ67%2BTq7j2h9XMYOulHdMLtqktSLJuAt2iOhML9JhjyaAfsYU1SXPfDdQgG04%2BRBdNjXoTLyrG9eq9sOVK9xrf9jfix%2BIFSsi70msc8oFDuqTKQjeAWIwiD1Sf%2BISUIPRWQedqM3tw%2BG8GBMbQWLJQgMUEm8e2mg7%2Fe4%2FOae9P11zrllXQIQgKnqs5KcxbteYE%2FDFcZyWTXeS78I46vc042ECeLhUHV2lYtdbxmEhPfv2UVjQuGZ7aXyfMfewFT2JfNn7PT3n6g5vvcAPOvHbWCibkEuJwonuUusc0ILEbNh9PKI43yVppNuBQb0Iu075LuJZeZDhOkF4iY9NfUu89UrSlFVkl3dArWmGXbb9uT%2BRYrDzY948Pjtqwc%2FnzHfnI9FwBg7%2B0Ba8KOJLloaudSk705go92sAhB1SQo8zw%2BRe6md%2F%2BW%2BEhsKG8ybs%2FyMdFQ3VqzwVIFDz6tXpF2Jhc%2FcqXGwQXYd6fsGgkdB3ygbzh2rJrhjV0EsDaIVrQTMJZTpdxixq8mdYB6MKTZ8SPQdDryAl9HSOecSvTb7xOFZ03cHTB9s3FJq9XlYP9kevhLoz0KPS2q2484al%2BUML%2Fgt74GOqUBu1tpHUw158ELpxAlkV7ai8ka0vFQG9qi3TQSkcpokUuvMsDmfPGB7uiBO%2B6gcgFT1oIsigQsdKlSIR5qlGyDF6w8mkYjWBB6EOVsfCIHWD9FysA65TYDuwExF9njCDcnbYzvgDHVguOL95yzAS%2B7VXGyw%2BW%2B9WyYmktTqeZTV%2BqezKaG1j1I5Zyblnvidam37OMqsFvgT%2Bq2g%2BCo2vKoR5V8O%2FFj&X-Amz-Signature=148daddd721a8c786d5659219d8f33c7f7f60f298126282fcb9894aedc819978&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSKAZF7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCW2QH3qTgFbFKrRWkAEgSEPY58TJz2%2BycQ6Z68zaqrKAIgTxqReSkcAZo1J5djIfnXRawNr3%2F0jOCIl1SnWDGGdhoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN0cq9GKXNiKqXv%2BryrcAy66r3HC85xLINbfZlRujfA9ArdM1cpvrSn0dsZiexZ67%2BTq7j2h9XMYOulHdMLtqktSLJuAt2iOhML9JhjyaAfsYU1SXPfDdQgG04%2BRBdNjXoTLyrG9eq9sOVK9xrf9jfix%2BIFSsi70msc8oFDuqTKQjeAWIwiD1Sf%2BISUIPRWQedqM3tw%2BG8GBMbQWLJQgMUEm8e2mg7%2Fe4%2FOae9P11zrllXQIQgKnqs5KcxbteYE%2FDFcZyWTXeS78I46vc042ECeLhUHV2lYtdbxmEhPfv2UVjQuGZ7aXyfMfewFT2JfNn7PT3n6g5vvcAPOvHbWCibkEuJwonuUusc0ILEbNh9PKI43yVppNuBQb0Iu075LuJZeZDhOkF4iY9NfUu89UrSlFVkl3dArWmGXbb9uT%2BRYrDzY948Pjtqwc%2FnzHfnI9FwBg7%2B0Ba8KOJLloaudSk705go92sAhB1SQo8zw%2BRe6md%2F%2BW%2BEhsKG8ybs%2FyMdFQ3VqzwVIFDz6tXpF2Jhc%2FcqXGwQXYd6fsGgkdB3ygbzh2rJrhjV0EsDaIVrQTMJZTpdxixq8mdYB6MKTZ8SPQdDryAl9HSOecSvTb7xOFZ03cHTB9s3FJq9XlYP9kevhLoz0KPS2q2484al%2BUML%2Fgt74GOqUBu1tpHUw158ELpxAlkV7ai8ka0vFQG9qi3TQSkcpokUuvMsDmfPGB7uiBO%2B6gcgFT1oIsigQsdKlSIR5qlGyDF6w8mkYjWBB6EOVsfCIHWD9FysA65TYDuwExF9njCDcnbYzvgDHVguOL95yzAS%2B7VXGyw%2BW%2B9WyYmktTqeZTV%2BqezKaG1j1I5Zyblnvidam37OMqsFvgT%2Bq2g%2BCo2vKoR5V8O%2FFj&X-Amz-Signature=b52cac04781b415393b992c5e1c6708508273f5689eec31c7641001c6b6ac518&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSKAZF7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCW2QH3qTgFbFKrRWkAEgSEPY58TJz2%2BycQ6Z68zaqrKAIgTxqReSkcAZo1J5djIfnXRawNr3%2F0jOCIl1SnWDGGdhoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN0cq9GKXNiKqXv%2BryrcAy66r3HC85xLINbfZlRujfA9ArdM1cpvrSn0dsZiexZ67%2BTq7j2h9XMYOulHdMLtqktSLJuAt2iOhML9JhjyaAfsYU1SXPfDdQgG04%2BRBdNjXoTLyrG9eq9sOVK9xrf9jfix%2BIFSsi70msc8oFDuqTKQjeAWIwiD1Sf%2BISUIPRWQedqM3tw%2BG8GBMbQWLJQgMUEm8e2mg7%2Fe4%2FOae9P11zrllXQIQgKnqs5KcxbteYE%2FDFcZyWTXeS78I46vc042ECeLhUHV2lYtdbxmEhPfv2UVjQuGZ7aXyfMfewFT2JfNn7PT3n6g5vvcAPOvHbWCibkEuJwonuUusc0ILEbNh9PKI43yVppNuBQb0Iu075LuJZeZDhOkF4iY9NfUu89UrSlFVkl3dArWmGXbb9uT%2BRYrDzY948Pjtqwc%2FnzHfnI9FwBg7%2B0Ba8KOJLloaudSk705go92sAhB1SQo8zw%2BRe6md%2F%2BW%2BEhsKG8ybs%2FyMdFQ3VqzwVIFDz6tXpF2Jhc%2FcqXGwQXYd6fsGgkdB3ygbzh2rJrhjV0EsDaIVrQTMJZTpdxixq8mdYB6MKTZ8SPQdDryAl9HSOecSvTb7xOFZ03cHTB9s3FJq9XlYP9kevhLoz0KPS2q2484al%2BUML%2Fgt74GOqUBu1tpHUw158ELpxAlkV7ai8ka0vFQG9qi3TQSkcpokUuvMsDmfPGB7uiBO%2B6gcgFT1oIsigQsdKlSIR5qlGyDF6w8mkYjWBB6EOVsfCIHWD9FysA65TYDuwExF9njCDcnbYzvgDHVguOL95yzAS%2B7VXGyw%2BW%2B9WyYmktTqeZTV%2BqezKaG1j1I5Zyblnvidam37OMqsFvgT%2Bq2g%2BCo2vKoR5V8O%2FFj&X-Amz-Signature=318ef29a1ef91b29dd5fa34eafa9f689cbcdfb23438a67f4cf45b91540456715&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
