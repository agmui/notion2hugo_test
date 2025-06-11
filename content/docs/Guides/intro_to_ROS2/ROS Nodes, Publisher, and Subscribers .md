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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AUL7F%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCycN73RhsOaLndzTW2slxRCYSMstfAumah5CJX4401swIhAKrs9sRwnXhMnpUzpvusyfSCOFjM%2FOylsZdoMts1gpgOKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypBuccMTQNa1DY3Nwq3AN8OeWWWoO1S%2F9PF5pkuByuWS4FaSHYTe006gHJrZCeV9qT7GbPyjJEYiNHNZZMNkxxQMsoCVf7HTPBDiPQOskL8dlxx87qlGkyfdWPyjCEoY2ZWpl3yBvPzQ9VQjtfii8h6E6K2J6cvnbyLMkSRia0bbc3kbrHhwVnCdaM2w5Xee7O8CnJyX8gcb5K44LEwrzrNrrmVRbbq6v9oqulkbc6a45fYcSLBU8eX55tMIXGRlcek1ZaJA5JU0v4JDymMaK7fD6C2Pe6tkzR1rM9dabTrZB%2F9hL23%2FVC9S4SxMp9VE%2Fdpy2qpixtyIGoThAKYHbQEjblKmiSlVQ9J%2B5XidLmPWh26g7LibU6M%2F7%2FYidl6QExn9740wRUPYM2pLUyenjNj6lHmjL3BRcI2Q6NRvnNWkxxBYh3AEPlGwqUBBZXDJu6KvA6BEoOn4gv5zdMjtRgHIMOYZn0mo9rMQ5nGU7Ga6suImpGJYSWspzwJ0UqdPMcZbgBGxAn3%2ByqYHb0Y3f%2FCQgMIiILKA4qMhNx1yuQVtiSXSv7l2TuGXVFViRQLezWI8J6yRGHv8f7sjWbbW2SPweWWfxPVyuCPBG0XZGGmLf5YcvmI411U3A8ICfCyEAzqLCqhK1n4A2bvjDEyKfCBjqkAT6c6T7xQuT%2F6DsMHqom%2Fg2Hkd0YRoVdu8XJWK9uZHS7NBtxwySF9DiSOSw%2BGr8hU2GSNJZs1PDCwrhcm2c3Iz7R8inzyh%2BT4UysZvUNPFVXrlM6LcU9yVdzCbp473osffqPIhjFRaECEBu7FkUezcwFfrHiMb2mqdY7lzVGkvDBSWOryP2UTD67w2oUstDLqByUH3RFq4Bh%2B1BdOQycs%2F8W0svs&X-Amz-Signature=2d183c03fa12fee22456520ece67c951e7d75c28ec03a70527ba59f7d75e75c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AUL7F%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCycN73RhsOaLndzTW2slxRCYSMstfAumah5CJX4401swIhAKrs9sRwnXhMnpUzpvusyfSCOFjM%2FOylsZdoMts1gpgOKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypBuccMTQNa1DY3Nwq3AN8OeWWWoO1S%2F9PF5pkuByuWS4FaSHYTe006gHJrZCeV9qT7GbPyjJEYiNHNZZMNkxxQMsoCVf7HTPBDiPQOskL8dlxx87qlGkyfdWPyjCEoY2ZWpl3yBvPzQ9VQjtfii8h6E6K2J6cvnbyLMkSRia0bbc3kbrHhwVnCdaM2w5Xee7O8CnJyX8gcb5K44LEwrzrNrrmVRbbq6v9oqulkbc6a45fYcSLBU8eX55tMIXGRlcek1ZaJA5JU0v4JDymMaK7fD6C2Pe6tkzR1rM9dabTrZB%2F9hL23%2FVC9S4SxMp9VE%2Fdpy2qpixtyIGoThAKYHbQEjblKmiSlVQ9J%2B5XidLmPWh26g7LibU6M%2F7%2FYidl6QExn9740wRUPYM2pLUyenjNj6lHmjL3BRcI2Q6NRvnNWkxxBYh3AEPlGwqUBBZXDJu6KvA6BEoOn4gv5zdMjtRgHIMOYZn0mo9rMQ5nGU7Ga6suImpGJYSWspzwJ0UqdPMcZbgBGxAn3%2ByqYHb0Y3f%2FCQgMIiILKA4qMhNx1yuQVtiSXSv7l2TuGXVFViRQLezWI8J6yRGHv8f7sjWbbW2SPweWWfxPVyuCPBG0XZGGmLf5YcvmI411U3A8ICfCyEAzqLCqhK1n4A2bvjDEyKfCBjqkAT6c6T7xQuT%2F6DsMHqom%2Fg2Hkd0YRoVdu8XJWK9uZHS7NBtxwySF9DiSOSw%2BGr8hU2GSNJZs1PDCwrhcm2c3Iz7R8inzyh%2BT4UysZvUNPFVXrlM6LcU9yVdzCbp473osffqPIhjFRaECEBu7FkUezcwFfrHiMb2mqdY7lzVGkvDBSWOryP2UTD67w2oUstDLqByUH3RFq4Bh%2B1BdOQycs%2F8W0svs&X-Amz-Signature=7d9698756802a40de8ecac5e51e481b7308680c0adee78daf65fd8628da5c589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AUL7F%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCycN73RhsOaLndzTW2slxRCYSMstfAumah5CJX4401swIhAKrs9sRwnXhMnpUzpvusyfSCOFjM%2FOylsZdoMts1gpgOKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypBuccMTQNa1DY3Nwq3AN8OeWWWoO1S%2F9PF5pkuByuWS4FaSHYTe006gHJrZCeV9qT7GbPyjJEYiNHNZZMNkxxQMsoCVf7HTPBDiPQOskL8dlxx87qlGkyfdWPyjCEoY2ZWpl3yBvPzQ9VQjtfii8h6E6K2J6cvnbyLMkSRia0bbc3kbrHhwVnCdaM2w5Xee7O8CnJyX8gcb5K44LEwrzrNrrmVRbbq6v9oqulkbc6a45fYcSLBU8eX55tMIXGRlcek1ZaJA5JU0v4JDymMaK7fD6C2Pe6tkzR1rM9dabTrZB%2F9hL23%2FVC9S4SxMp9VE%2Fdpy2qpixtyIGoThAKYHbQEjblKmiSlVQ9J%2B5XidLmPWh26g7LibU6M%2F7%2FYidl6QExn9740wRUPYM2pLUyenjNj6lHmjL3BRcI2Q6NRvnNWkxxBYh3AEPlGwqUBBZXDJu6KvA6BEoOn4gv5zdMjtRgHIMOYZn0mo9rMQ5nGU7Ga6suImpGJYSWspzwJ0UqdPMcZbgBGxAn3%2ByqYHb0Y3f%2FCQgMIiILKA4qMhNx1yuQVtiSXSv7l2TuGXVFViRQLezWI8J6yRGHv8f7sjWbbW2SPweWWfxPVyuCPBG0XZGGmLf5YcvmI411U3A8ICfCyEAzqLCqhK1n4A2bvjDEyKfCBjqkAT6c6T7xQuT%2F6DsMHqom%2Fg2Hkd0YRoVdu8XJWK9uZHS7NBtxwySF9DiSOSw%2BGr8hU2GSNJZs1PDCwrhcm2c3Iz7R8inzyh%2BT4UysZvUNPFVXrlM6LcU9yVdzCbp473osffqPIhjFRaECEBu7FkUezcwFfrHiMb2mqdY7lzVGkvDBSWOryP2UTD67w2oUstDLqByUH3RFq4Bh%2B1BdOQycs%2F8W0svs&X-Amz-Signature=ff1bc5e3b0e1f83c6ab6e1b409cc2288673145db0902f91e775c5dff4aa413d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AUL7F%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCycN73RhsOaLndzTW2slxRCYSMstfAumah5CJX4401swIhAKrs9sRwnXhMnpUzpvusyfSCOFjM%2FOylsZdoMts1gpgOKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypBuccMTQNa1DY3Nwq3AN8OeWWWoO1S%2F9PF5pkuByuWS4FaSHYTe006gHJrZCeV9qT7GbPyjJEYiNHNZZMNkxxQMsoCVf7HTPBDiPQOskL8dlxx87qlGkyfdWPyjCEoY2ZWpl3yBvPzQ9VQjtfii8h6E6K2J6cvnbyLMkSRia0bbc3kbrHhwVnCdaM2w5Xee7O8CnJyX8gcb5K44LEwrzrNrrmVRbbq6v9oqulkbc6a45fYcSLBU8eX55tMIXGRlcek1ZaJA5JU0v4JDymMaK7fD6C2Pe6tkzR1rM9dabTrZB%2F9hL23%2FVC9S4SxMp9VE%2Fdpy2qpixtyIGoThAKYHbQEjblKmiSlVQ9J%2B5XidLmPWh26g7LibU6M%2F7%2FYidl6QExn9740wRUPYM2pLUyenjNj6lHmjL3BRcI2Q6NRvnNWkxxBYh3AEPlGwqUBBZXDJu6KvA6BEoOn4gv5zdMjtRgHIMOYZn0mo9rMQ5nGU7Ga6suImpGJYSWspzwJ0UqdPMcZbgBGxAn3%2ByqYHb0Y3f%2FCQgMIiILKA4qMhNx1yuQVtiSXSv7l2TuGXVFViRQLezWI8J6yRGHv8f7sjWbbW2SPweWWfxPVyuCPBG0XZGGmLf5YcvmI411U3A8ICfCyEAzqLCqhK1n4A2bvjDEyKfCBjqkAT6c6T7xQuT%2F6DsMHqom%2Fg2Hkd0YRoVdu8XJWK9uZHS7NBtxwySF9DiSOSw%2BGr8hU2GSNJZs1PDCwrhcm2c3Iz7R8inzyh%2BT4UysZvUNPFVXrlM6LcU9yVdzCbp473osffqPIhjFRaECEBu7FkUezcwFfrHiMb2mqdY7lzVGkvDBSWOryP2UTD67w2oUstDLqByUH3RFq4Bh%2B1BdOQycs%2F8W0svs&X-Amz-Signature=7f0456a751e7a404056122183218f4bc88cb8cf89a4c78af85c7854d7453e7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AUL7F%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCycN73RhsOaLndzTW2slxRCYSMstfAumah5CJX4401swIhAKrs9sRwnXhMnpUzpvusyfSCOFjM%2FOylsZdoMts1gpgOKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypBuccMTQNa1DY3Nwq3AN8OeWWWoO1S%2F9PF5pkuByuWS4FaSHYTe006gHJrZCeV9qT7GbPyjJEYiNHNZZMNkxxQMsoCVf7HTPBDiPQOskL8dlxx87qlGkyfdWPyjCEoY2ZWpl3yBvPzQ9VQjtfii8h6E6K2J6cvnbyLMkSRia0bbc3kbrHhwVnCdaM2w5Xee7O8CnJyX8gcb5K44LEwrzrNrrmVRbbq6v9oqulkbc6a45fYcSLBU8eX55tMIXGRlcek1ZaJA5JU0v4JDymMaK7fD6C2Pe6tkzR1rM9dabTrZB%2F9hL23%2FVC9S4SxMp9VE%2Fdpy2qpixtyIGoThAKYHbQEjblKmiSlVQ9J%2B5XidLmPWh26g7LibU6M%2F7%2FYidl6QExn9740wRUPYM2pLUyenjNj6lHmjL3BRcI2Q6NRvnNWkxxBYh3AEPlGwqUBBZXDJu6KvA6BEoOn4gv5zdMjtRgHIMOYZn0mo9rMQ5nGU7Ga6suImpGJYSWspzwJ0UqdPMcZbgBGxAn3%2ByqYHb0Y3f%2FCQgMIiILKA4qMhNx1yuQVtiSXSv7l2TuGXVFViRQLezWI8J6yRGHv8f7sjWbbW2SPweWWfxPVyuCPBG0XZGGmLf5YcvmI411U3A8ICfCyEAzqLCqhK1n4A2bvjDEyKfCBjqkAT6c6T7xQuT%2F6DsMHqom%2Fg2Hkd0YRoVdu8XJWK9uZHS7NBtxwySF9DiSOSw%2BGr8hU2GSNJZs1PDCwrhcm2c3Iz7R8inzyh%2BT4UysZvUNPFVXrlM6LcU9yVdzCbp473osffqPIhjFRaECEBu7FkUezcwFfrHiMb2mqdY7lzVGkvDBSWOryP2UTD67w2oUstDLqByUH3RFq4Bh%2B1BdOQycs%2F8W0svs&X-Amz-Signature=4af197cc7b88fafeb942e80a52960de54f6d771bc455c43ada04134cc2494dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AUL7F%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCycN73RhsOaLndzTW2slxRCYSMstfAumah5CJX4401swIhAKrs9sRwnXhMnpUzpvusyfSCOFjM%2FOylsZdoMts1gpgOKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypBuccMTQNa1DY3Nwq3AN8OeWWWoO1S%2F9PF5pkuByuWS4FaSHYTe006gHJrZCeV9qT7GbPyjJEYiNHNZZMNkxxQMsoCVf7HTPBDiPQOskL8dlxx87qlGkyfdWPyjCEoY2ZWpl3yBvPzQ9VQjtfii8h6E6K2J6cvnbyLMkSRia0bbc3kbrHhwVnCdaM2w5Xee7O8CnJyX8gcb5K44LEwrzrNrrmVRbbq6v9oqulkbc6a45fYcSLBU8eX55tMIXGRlcek1ZaJA5JU0v4JDymMaK7fD6C2Pe6tkzR1rM9dabTrZB%2F9hL23%2FVC9S4SxMp9VE%2Fdpy2qpixtyIGoThAKYHbQEjblKmiSlVQ9J%2B5XidLmPWh26g7LibU6M%2F7%2FYidl6QExn9740wRUPYM2pLUyenjNj6lHmjL3BRcI2Q6NRvnNWkxxBYh3AEPlGwqUBBZXDJu6KvA6BEoOn4gv5zdMjtRgHIMOYZn0mo9rMQ5nGU7Ga6suImpGJYSWspzwJ0UqdPMcZbgBGxAn3%2ByqYHb0Y3f%2FCQgMIiILKA4qMhNx1yuQVtiSXSv7l2TuGXVFViRQLezWI8J6yRGHv8f7sjWbbW2SPweWWfxPVyuCPBG0XZGGmLf5YcvmI411U3A8ICfCyEAzqLCqhK1n4A2bvjDEyKfCBjqkAT6c6T7xQuT%2F6DsMHqom%2Fg2Hkd0YRoVdu8XJWK9uZHS7NBtxwySF9DiSOSw%2BGr8hU2GSNJZs1PDCwrhcm2c3Iz7R8inzyh%2BT4UysZvUNPFVXrlM6LcU9yVdzCbp473osffqPIhjFRaECEBu7FkUezcwFfrHiMb2mqdY7lzVGkvDBSWOryP2UTD67w2oUstDLqByUH3RFq4Bh%2B1BdOQycs%2F8W0svs&X-Amz-Signature=f7b02a8ee80d8e7a9b976cfbe56dec2bda4240d194620b6593da08cfc1c6986d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AUL7F%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCycN73RhsOaLndzTW2slxRCYSMstfAumah5CJX4401swIhAKrs9sRwnXhMnpUzpvusyfSCOFjM%2FOylsZdoMts1gpgOKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypBuccMTQNa1DY3Nwq3AN8OeWWWoO1S%2F9PF5pkuByuWS4FaSHYTe006gHJrZCeV9qT7GbPyjJEYiNHNZZMNkxxQMsoCVf7HTPBDiPQOskL8dlxx87qlGkyfdWPyjCEoY2ZWpl3yBvPzQ9VQjtfii8h6E6K2J6cvnbyLMkSRia0bbc3kbrHhwVnCdaM2w5Xee7O8CnJyX8gcb5K44LEwrzrNrrmVRbbq6v9oqulkbc6a45fYcSLBU8eX55tMIXGRlcek1ZaJA5JU0v4JDymMaK7fD6C2Pe6tkzR1rM9dabTrZB%2F9hL23%2FVC9S4SxMp9VE%2Fdpy2qpixtyIGoThAKYHbQEjblKmiSlVQ9J%2B5XidLmPWh26g7LibU6M%2F7%2FYidl6QExn9740wRUPYM2pLUyenjNj6lHmjL3BRcI2Q6NRvnNWkxxBYh3AEPlGwqUBBZXDJu6KvA6BEoOn4gv5zdMjtRgHIMOYZn0mo9rMQ5nGU7Ga6suImpGJYSWspzwJ0UqdPMcZbgBGxAn3%2ByqYHb0Y3f%2FCQgMIiILKA4qMhNx1yuQVtiSXSv7l2TuGXVFViRQLezWI8J6yRGHv8f7sjWbbW2SPweWWfxPVyuCPBG0XZGGmLf5YcvmI411U3A8ICfCyEAzqLCqhK1n4A2bvjDEyKfCBjqkAT6c6T7xQuT%2F6DsMHqom%2Fg2Hkd0YRoVdu8XJWK9uZHS7NBtxwySF9DiSOSw%2BGr8hU2GSNJZs1PDCwrhcm2c3Iz7R8inzyh%2BT4UysZvUNPFVXrlM6LcU9yVdzCbp473osffqPIhjFRaECEBu7FkUezcwFfrHiMb2mqdY7lzVGkvDBSWOryP2UTD67w2oUstDLqByUH3RFq4Bh%2B1BdOQycs%2F8W0svs&X-Amz-Signature=ae1519445f4667fa0c850abe36bacc1b01274265578b03dd98a10652c9d3a1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AUL7F%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCycN73RhsOaLndzTW2slxRCYSMstfAumah5CJX4401swIhAKrs9sRwnXhMnpUzpvusyfSCOFjM%2FOylsZdoMts1gpgOKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypBuccMTQNa1DY3Nwq3AN8OeWWWoO1S%2F9PF5pkuByuWS4FaSHYTe006gHJrZCeV9qT7GbPyjJEYiNHNZZMNkxxQMsoCVf7HTPBDiPQOskL8dlxx87qlGkyfdWPyjCEoY2ZWpl3yBvPzQ9VQjtfii8h6E6K2J6cvnbyLMkSRia0bbc3kbrHhwVnCdaM2w5Xee7O8CnJyX8gcb5K44LEwrzrNrrmVRbbq6v9oqulkbc6a45fYcSLBU8eX55tMIXGRlcek1ZaJA5JU0v4JDymMaK7fD6C2Pe6tkzR1rM9dabTrZB%2F9hL23%2FVC9S4SxMp9VE%2Fdpy2qpixtyIGoThAKYHbQEjblKmiSlVQ9J%2B5XidLmPWh26g7LibU6M%2F7%2FYidl6QExn9740wRUPYM2pLUyenjNj6lHmjL3BRcI2Q6NRvnNWkxxBYh3AEPlGwqUBBZXDJu6KvA6BEoOn4gv5zdMjtRgHIMOYZn0mo9rMQ5nGU7Ga6suImpGJYSWspzwJ0UqdPMcZbgBGxAn3%2ByqYHb0Y3f%2FCQgMIiILKA4qMhNx1yuQVtiSXSv7l2TuGXVFViRQLezWI8J6yRGHv8f7sjWbbW2SPweWWfxPVyuCPBG0XZGGmLf5YcvmI411U3A8ICfCyEAzqLCqhK1n4A2bvjDEyKfCBjqkAT6c6T7xQuT%2F6DsMHqom%2Fg2Hkd0YRoVdu8XJWK9uZHS7NBtxwySF9DiSOSw%2BGr8hU2GSNJZs1PDCwrhcm2c3Iz7R8inzyh%2BT4UysZvUNPFVXrlM6LcU9yVdzCbp473osffqPIhjFRaECEBu7FkUezcwFfrHiMb2mqdY7lzVGkvDBSWOryP2UTD67w2oUstDLqByUH3RFq4Bh%2B1BdOQycs%2F8W0svs&X-Amz-Signature=c2623662a7ff145ed398e6a6bf2c6c9a277c81dcf4364bd86ac603ff7be3a64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
