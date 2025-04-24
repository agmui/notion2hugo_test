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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36JOAEZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkiFk2bo6I4Ns4tPp5QCFKct%2FEc%2FBv2Usc6ikVwybrCAiAiky1zsRSrsWagW%2FYOD%2BlzeY4Q4boJz8%2Fj46tZUb2EoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMPK8kZVoHU2o9AAUYKtwDsa385MwePW57njmt8jLAJ6%2BZLoxkKlPkyQvxLsvfXtnxncj2CtFuBQWHtyweSNybh157KoWKol%2BX5v%2BmBrJyJCwWlM9WUCbi%2Fupooeztv5QqKktPgh8ZrTTlCdpZIDOVlVesWXHSl7Fr3R8KefwHJ%2FJAbIRBDMyMD3Z5%2FoqSFGUXn6vqyo7%2BvGyS%2FImRq2Evcp5SC0Cg8xl0S8VCItCql1KYh462VWxgmrI9mX%2B%2BrKHQOC%2FjXGKbVSm7p6Q0TKmMpCYbNZapTNO17HVdpbT9g5j%2FmuI2vi0iANp4u7KpYKJdHd%2FdNXrHmtZgYffBPQB4MXyfCb6clABKEqi1HjHhaP40pzxHkKBxvKC8bI%2Bw44dTzps%2FzdqKkVHgLxFNsL7J95HmysiRVbFp5dGg5QpTYuPhOEV7sfPEcDDFfO6gTBx5IFUe%2B0cySLTTq0VpT8mCaAdi6UIi9EGQPJTG%2B1NPdopfXjEhYRApI7Mq6DC71IXkYw5vwyDaBCP%2FoQ1chDRaTlRJfRBcKGyd05w0okxNPlaubETf%2BS4BjJcqrYv80NAgt7CCcrbXh6A92hhdYM%2BVw4kI6zY18EeSkO20rSnk66DQF0S2atOeMa7%2Byi676X4xtJZXNWW7DcpHFU0wyvGpwAY6pgF%2FJXGKHh2la3eShjk8%2B93spo%2FCqmo1HCLmSsTy0GuJpisMqsFMcx8NPtx1KQwcjUCOfdF82Gnvu1sc7xM8ApBZTVn%2F23EWs6jU7uIMAphH6rsul%2BXsaN5LvBlkQ7WaBQNbsLYTPVgWKJE7a9rmZz1Hcw0xsR6limEcNrvM5AgiZF%2FjXbuKzP0uDluJL5wr03eQTJjnBFoox0cIaGNNf1%2Bl%2Fxf%2FlZqy&X-Amz-Signature=aee5a028c9fbad86701b2480498364d329029f3c9e6b0c574f864ea4a934e9d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36JOAEZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkiFk2bo6I4Ns4tPp5QCFKct%2FEc%2FBv2Usc6ikVwybrCAiAiky1zsRSrsWagW%2FYOD%2BlzeY4Q4boJz8%2Fj46tZUb2EoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMPK8kZVoHU2o9AAUYKtwDsa385MwePW57njmt8jLAJ6%2BZLoxkKlPkyQvxLsvfXtnxncj2CtFuBQWHtyweSNybh157KoWKol%2BX5v%2BmBrJyJCwWlM9WUCbi%2Fupooeztv5QqKktPgh8ZrTTlCdpZIDOVlVesWXHSl7Fr3R8KefwHJ%2FJAbIRBDMyMD3Z5%2FoqSFGUXn6vqyo7%2BvGyS%2FImRq2Evcp5SC0Cg8xl0S8VCItCql1KYh462VWxgmrI9mX%2B%2BrKHQOC%2FjXGKbVSm7p6Q0TKmMpCYbNZapTNO17HVdpbT9g5j%2FmuI2vi0iANp4u7KpYKJdHd%2FdNXrHmtZgYffBPQB4MXyfCb6clABKEqi1HjHhaP40pzxHkKBxvKC8bI%2Bw44dTzps%2FzdqKkVHgLxFNsL7J95HmysiRVbFp5dGg5QpTYuPhOEV7sfPEcDDFfO6gTBx5IFUe%2B0cySLTTq0VpT8mCaAdi6UIi9EGQPJTG%2B1NPdopfXjEhYRApI7Mq6DC71IXkYw5vwyDaBCP%2FoQ1chDRaTlRJfRBcKGyd05w0okxNPlaubETf%2BS4BjJcqrYv80NAgt7CCcrbXh6A92hhdYM%2BVw4kI6zY18EeSkO20rSnk66DQF0S2atOeMa7%2Byi676X4xtJZXNWW7DcpHFU0wyvGpwAY6pgF%2FJXGKHh2la3eShjk8%2B93spo%2FCqmo1HCLmSsTy0GuJpisMqsFMcx8NPtx1KQwcjUCOfdF82Gnvu1sc7xM8ApBZTVn%2F23EWs6jU7uIMAphH6rsul%2BXsaN5LvBlkQ7WaBQNbsLYTPVgWKJE7a9rmZz1Hcw0xsR6limEcNrvM5AgiZF%2FjXbuKzP0uDluJL5wr03eQTJjnBFoox0cIaGNNf1%2Bl%2Fxf%2FlZqy&X-Amz-Signature=98dde91da76bb017239c94fec3ce36895feed0ad7f9e795f758010a9b35ee84f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36JOAEZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkiFk2bo6I4Ns4tPp5QCFKct%2FEc%2FBv2Usc6ikVwybrCAiAiky1zsRSrsWagW%2FYOD%2BlzeY4Q4boJz8%2Fj46tZUb2EoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMPK8kZVoHU2o9AAUYKtwDsa385MwePW57njmt8jLAJ6%2BZLoxkKlPkyQvxLsvfXtnxncj2CtFuBQWHtyweSNybh157KoWKol%2BX5v%2BmBrJyJCwWlM9WUCbi%2Fupooeztv5QqKktPgh8ZrTTlCdpZIDOVlVesWXHSl7Fr3R8KefwHJ%2FJAbIRBDMyMD3Z5%2FoqSFGUXn6vqyo7%2BvGyS%2FImRq2Evcp5SC0Cg8xl0S8VCItCql1KYh462VWxgmrI9mX%2B%2BrKHQOC%2FjXGKbVSm7p6Q0TKmMpCYbNZapTNO17HVdpbT9g5j%2FmuI2vi0iANp4u7KpYKJdHd%2FdNXrHmtZgYffBPQB4MXyfCb6clABKEqi1HjHhaP40pzxHkKBxvKC8bI%2Bw44dTzps%2FzdqKkVHgLxFNsL7J95HmysiRVbFp5dGg5QpTYuPhOEV7sfPEcDDFfO6gTBx5IFUe%2B0cySLTTq0VpT8mCaAdi6UIi9EGQPJTG%2B1NPdopfXjEhYRApI7Mq6DC71IXkYw5vwyDaBCP%2FoQ1chDRaTlRJfRBcKGyd05w0okxNPlaubETf%2BS4BjJcqrYv80NAgt7CCcrbXh6A92hhdYM%2BVw4kI6zY18EeSkO20rSnk66DQF0S2atOeMa7%2Byi676X4xtJZXNWW7DcpHFU0wyvGpwAY6pgF%2FJXGKHh2la3eShjk8%2B93spo%2FCqmo1HCLmSsTy0GuJpisMqsFMcx8NPtx1KQwcjUCOfdF82Gnvu1sc7xM8ApBZTVn%2F23EWs6jU7uIMAphH6rsul%2BXsaN5LvBlkQ7WaBQNbsLYTPVgWKJE7a9rmZz1Hcw0xsR6limEcNrvM5AgiZF%2FjXbuKzP0uDluJL5wr03eQTJjnBFoox0cIaGNNf1%2Bl%2Fxf%2FlZqy&X-Amz-Signature=43c86c92885dbc99a32297833dce00675d12993456dfaa71dbce26c17c9451bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36JOAEZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkiFk2bo6I4Ns4tPp5QCFKct%2FEc%2FBv2Usc6ikVwybrCAiAiky1zsRSrsWagW%2FYOD%2BlzeY4Q4boJz8%2Fj46tZUb2EoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMPK8kZVoHU2o9AAUYKtwDsa385MwePW57njmt8jLAJ6%2BZLoxkKlPkyQvxLsvfXtnxncj2CtFuBQWHtyweSNybh157KoWKol%2BX5v%2BmBrJyJCwWlM9WUCbi%2Fupooeztv5QqKktPgh8ZrTTlCdpZIDOVlVesWXHSl7Fr3R8KefwHJ%2FJAbIRBDMyMD3Z5%2FoqSFGUXn6vqyo7%2BvGyS%2FImRq2Evcp5SC0Cg8xl0S8VCItCql1KYh462VWxgmrI9mX%2B%2BrKHQOC%2FjXGKbVSm7p6Q0TKmMpCYbNZapTNO17HVdpbT9g5j%2FmuI2vi0iANp4u7KpYKJdHd%2FdNXrHmtZgYffBPQB4MXyfCb6clABKEqi1HjHhaP40pzxHkKBxvKC8bI%2Bw44dTzps%2FzdqKkVHgLxFNsL7J95HmysiRVbFp5dGg5QpTYuPhOEV7sfPEcDDFfO6gTBx5IFUe%2B0cySLTTq0VpT8mCaAdi6UIi9EGQPJTG%2B1NPdopfXjEhYRApI7Mq6DC71IXkYw5vwyDaBCP%2FoQ1chDRaTlRJfRBcKGyd05w0okxNPlaubETf%2BS4BjJcqrYv80NAgt7CCcrbXh6A92hhdYM%2BVw4kI6zY18EeSkO20rSnk66DQF0S2atOeMa7%2Byi676X4xtJZXNWW7DcpHFU0wyvGpwAY6pgF%2FJXGKHh2la3eShjk8%2B93spo%2FCqmo1HCLmSsTy0GuJpisMqsFMcx8NPtx1KQwcjUCOfdF82Gnvu1sc7xM8ApBZTVn%2F23EWs6jU7uIMAphH6rsul%2BXsaN5LvBlkQ7WaBQNbsLYTPVgWKJE7a9rmZz1Hcw0xsR6limEcNrvM5AgiZF%2FjXbuKzP0uDluJL5wr03eQTJjnBFoox0cIaGNNf1%2Bl%2Fxf%2FlZqy&X-Amz-Signature=050556cf11ea23548b78951182eef1b6fb33cb262653924b12db1bfa54c2cb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36JOAEZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkiFk2bo6I4Ns4tPp5QCFKct%2FEc%2FBv2Usc6ikVwybrCAiAiky1zsRSrsWagW%2FYOD%2BlzeY4Q4boJz8%2Fj46tZUb2EoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMPK8kZVoHU2o9AAUYKtwDsa385MwePW57njmt8jLAJ6%2BZLoxkKlPkyQvxLsvfXtnxncj2CtFuBQWHtyweSNybh157KoWKol%2BX5v%2BmBrJyJCwWlM9WUCbi%2Fupooeztv5QqKktPgh8ZrTTlCdpZIDOVlVesWXHSl7Fr3R8KefwHJ%2FJAbIRBDMyMD3Z5%2FoqSFGUXn6vqyo7%2BvGyS%2FImRq2Evcp5SC0Cg8xl0S8VCItCql1KYh462VWxgmrI9mX%2B%2BrKHQOC%2FjXGKbVSm7p6Q0TKmMpCYbNZapTNO17HVdpbT9g5j%2FmuI2vi0iANp4u7KpYKJdHd%2FdNXrHmtZgYffBPQB4MXyfCb6clABKEqi1HjHhaP40pzxHkKBxvKC8bI%2Bw44dTzps%2FzdqKkVHgLxFNsL7J95HmysiRVbFp5dGg5QpTYuPhOEV7sfPEcDDFfO6gTBx5IFUe%2B0cySLTTq0VpT8mCaAdi6UIi9EGQPJTG%2B1NPdopfXjEhYRApI7Mq6DC71IXkYw5vwyDaBCP%2FoQ1chDRaTlRJfRBcKGyd05w0okxNPlaubETf%2BS4BjJcqrYv80NAgt7CCcrbXh6A92hhdYM%2BVw4kI6zY18EeSkO20rSnk66DQF0S2atOeMa7%2Byi676X4xtJZXNWW7DcpHFU0wyvGpwAY6pgF%2FJXGKHh2la3eShjk8%2B93spo%2FCqmo1HCLmSsTy0GuJpisMqsFMcx8NPtx1KQwcjUCOfdF82Gnvu1sc7xM8ApBZTVn%2F23EWs6jU7uIMAphH6rsul%2BXsaN5LvBlkQ7WaBQNbsLYTPVgWKJE7a9rmZz1Hcw0xsR6limEcNrvM5AgiZF%2FjXbuKzP0uDluJL5wr03eQTJjnBFoox0cIaGNNf1%2Bl%2Fxf%2FlZqy&X-Amz-Signature=282637b64263a21c04c8784fbf7359d29fdc996196d009764f399d7ed88f19f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36JOAEZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkiFk2bo6I4Ns4tPp5QCFKct%2FEc%2FBv2Usc6ikVwybrCAiAiky1zsRSrsWagW%2FYOD%2BlzeY4Q4boJz8%2Fj46tZUb2EoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMPK8kZVoHU2o9AAUYKtwDsa385MwePW57njmt8jLAJ6%2BZLoxkKlPkyQvxLsvfXtnxncj2CtFuBQWHtyweSNybh157KoWKol%2BX5v%2BmBrJyJCwWlM9WUCbi%2Fupooeztv5QqKktPgh8ZrTTlCdpZIDOVlVesWXHSl7Fr3R8KefwHJ%2FJAbIRBDMyMD3Z5%2FoqSFGUXn6vqyo7%2BvGyS%2FImRq2Evcp5SC0Cg8xl0S8VCItCql1KYh462VWxgmrI9mX%2B%2BrKHQOC%2FjXGKbVSm7p6Q0TKmMpCYbNZapTNO17HVdpbT9g5j%2FmuI2vi0iANp4u7KpYKJdHd%2FdNXrHmtZgYffBPQB4MXyfCb6clABKEqi1HjHhaP40pzxHkKBxvKC8bI%2Bw44dTzps%2FzdqKkVHgLxFNsL7J95HmysiRVbFp5dGg5QpTYuPhOEV7sfPEcDDFfO6gTBx5IFUe%2B0cySLTTq0VpT8mCaAdi6UIi9EGQPJTG%2B1NPdopfXjEhYRApI7Mq6DC71IXkYw5vwyDaBCP%2FoQ1chDRaTlRJfRBcKGyd05w0okxNPlaubETf%2BS4BjJcqrYv80NAgt7CCcrbXh6A92hhdYM%2BVw4kI6zY18EeSkO20rSnk66DQF0S2atOeMa7%2Byi676X4xtJZXNWW7DcpHFU0wyvGpwAY6pgF%2FJXGKHh2la3eShjk8%2B93spo%2FCqmo1HCLmSsTy0GuJpisMqsFMcx8NPtx1KQwcjUCOfdF82Gnvu1sc7xM8ApBZTVn%2F23EWs6jU7uIMAphH6rsul%2BXsaN5LvBlkQ7WaBQNbsLYTPVgWKJE7a9rmZz1Hcw0xsR6limEcNrvM5AgiZF%2FjXbuKzP0uDluJL5wr03eQTJjnBFoox0cIaGNNf1%2Bl%2Fxf%2FlZqy&X-Amz-Signature=99b5b2760ac38e6219e06a83bdc8302f3f8e5ba7ff29caba43e002e53ba5353e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36JOAEZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkiFk2bo6I4Ns4tPp5QCFKct%2FEc%2FBv2Usc6ikVwybrCAiAiky1zsRSrsWagW%2FYOD%2BlzeY4Q4boJz8%2Fj46tZUb2EoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMPK8kZVoHU2o9AAUYKtwDsa385MwePW57njmt8jLAJ6%2BZLoxkKlPkyQvxLsvfXtnxncj2CtFuBQWHtyweSNybh157KoWKol%2BX5v%2BmBrJyJCwWlM9WUCbi%2Fupooeztv5QqKktPgh8ZrTTlCdpZIDOVlVesWXHSl7Fr3R8KefwHJ%2FJAbIRBDMyMD3Z5%2FoqSFGUXn6vqyo7%2BvGyS%2FImRq2Evcp5SC0Cg8xl0S8VCItCql1KYh462VWxgmrI9mX%2B%2BrKHQOC%2FjXGKbVSm7p6Q0TKmMpCYbNZapTNO17HVdpbT9g5j%2FmuI2vi0iANp4u7KpYKJdHd%2FdNXrHmtZgYffBPQB4MXyfCb6clABKEqi1HjHhaP40pzxHkKBxvKC8bI%2Bw44dTzps%2FzdqKkVHgLxFNsL7J95HmysiRVbFp5dGg5QpTYuPhOEV7sfPEcDDFfO6gTBx5IFUe%2B0cySLTTq0VpT8mCaAdi6UIi9EGQPJTG%2B1NPdopfXjEhYRApI7Mq6DC71IXkYw5vwyDaBCP%2FoQ1chDRaTlRJfRBcKGyd05w0okxNPlaubETf%2BS4BjJcqrYv80NAgt7CCcrbXh6A92hhdYM%2BVw4kI6zY18EeSkO20rSnk66DQF0S2atOeMa7%2Byi676X4xtJZXNWW7DcpHFU0wyvGpwAY6pgF%2FJXGKHh2la3eShjk8%2B93spo%2FCqmo1HCLmSsTy0GuJpisMqsFMcx8NPtx1KQwcjUCOfdF82Gnvu1sc7xM8ApBZTVn%2F23EWs6jU7uIMAphH6rsul%2BXsaN5LvBlkQ7WaBQNbsLYTPVgWKJE7a9rmZz1Hcw0xsR6limEcNrvM5AgiZF%2FjXbuKzP0uDluJL5wr03eQTJjnBFoox0cIaGNNf1%2Bl%2Fxf%2FlZqy&X-Amz-Signature=423f4fbe007c88be6debbf3b7b04d542af43688774f7240acef82d33257d6e70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36JOAEZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkiFk2bo6I4Ns4tPp5QCFKct%2FEc%2FBv2Usc6ikVwybrCAiAiky1zsRSrsWagW%2FYOD%2BlzeY4Q4boJz8%2Fj46tZUb2EoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMPK8kZVoHU2o9AAUYKtwDsa385MwePW57njmt8jLAJ6%2BZLoxkKlPkyQvxLsvfXtnxncj2CtFuBQWHtyweSNybh157KoWKol%2BX5v%2BmBrJyJCwWlM9WUCbi%2Fupooeztv5QqKktPgh8ZrTTlCdpZIDOVlVesWXHSl7Fr3R8KefwHJ%2FJAbIRBDMyMD3Z5%2FoqSFGUXn6vqyo7%2BvGyS%2FImRq2Evcp5SC0Cg8xl0S8VCItCql1KYh462VWxgmrI9mX%2B%2BrKHQOC%2FjXGKbVSm7p6Q0TKmMpCYbNZapTNO17HVdpbT9g5j%2FmuI2vi0iANp4u7KpYKJdHd%2FdNXrHmtZgYffBPQB4MXyfCb6clABKEqi1HjHhaP40pzxHkKBxvKC8bI%2Bw44dTzps%2FzdqKkVHgLxFNsL7J95HmysiRVbFp5dGg5QpTYuPhOEV7sfPEcDDFfO6gTBx5IFUe%2B0cySLTTq0VpT8mCaAdi6UIi9EGQPJTG%2B1NPdopfXjEhYRApI7Mq6DC71IXkYw5vwyDaBCP%2FoQ1chDRaTlRJfRBcKGyd05w0okxNPlaubETf%2BS4BjJcqrYv80NAgt7CCcrbXh6A92hhdYM%2BVw4kI6zY18EeSkO20rSnk66DQF0S2atOeMa7%2Byi676X4xtJZXNWW7DcpHFU0wyvGpwAY6pgF%2FJXGKHh2la3eShjk8%2B93spo%2FCqmo1HCLmSsTy0GuJpisMqsFMcx8NPtx1KQwcjUCOfdF82Gnvu1sc7xM8ApBZTVn%2F23EWs6jU7uIMAphH6rsul%2BXsaN5LvBlkQ7WaBQNbsLYTPVgWKJE7a9rmZz1Hcw0xsR6limEcNrvM5AgiZF%2FjXbuKzP0uDluJL5wr03eQTJjnBFoox0cIaGNNf1%2Bl%2Fxf%2FlZqy&X-Amz-Signature=7d25499c4218ddbd3a54487ab4e19b85e4f815b8865c4f3805b358eb29fbb698&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
