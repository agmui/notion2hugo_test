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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4ZHQQN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlE60DILiSu8sfvfPR0l0bRm1oWu2fue4B35uC0TQJkwIhAPxOIcLG9MwyrQzwW%2Bo%2BXq37TzvN9xInLcA37T9LGIBMKv8DCE0QABoMNjM3NDIzMTgzODA1Igx3jpf0tb4zbeReSIAq3AM2p0HHyVJ5jpbAjTc3vyDykDyexHP5lpf%2Bp2BmV9n%2FONXTdFXpJAkXecjidC8UzTxEFz%2B5bl6xCDyjiuleh%2FRGN6chNsY%2B8BO4TwDSkXKcaOD5lWupM2rTZ3mRG4kSduUPObID0stO2Wgr5Pkq63mVY3ddhfxo8uPrf2xNXn27yFl2MI1xvKVH1QAvQL13r7Iam5%2BWPQDaCrjqq6bcTvBQOtUBMm%2BgX7RNsPSKlOkES1KvDhhVkan1PIixglx0FMtpjNXJuZ680eQPDfDhVmHUHp5liywkD6RpURsGpcuZnenWDHC2XTNE%2FAzmonYEbwjZf0N0j4YWfK0XjM%2F1c24u21c5ArjWBEQTLCnAJFbH%2BXQ7KA%2BuPomMth%2BdV0hXsz90n1gZ1bqbtVdLXdMsI8CJrdpMyB4lDgn6n9syMHZVh5%2B0vKHIu44Yfm3m7yGBwfFat4S0l7SW1OaSmxMU0vr2%2B2kL5MxxqrPosnJ%2Bp3ogjiy%2B3i1bLtDBxXr96zVRobtdgynsDm1OUvttLr6N%2B7Eup3MpIYwgGbUAA3ZK4ACX0I3BVTe16zMJ1fh6zVaqdZ0gYWBoPj%2F8S8E2G02%2F%2FB%2F%2Bej4VW9Ars6qM9ph3iKKuSpuiLU8w51RDWVtJKjC6koDABjqkAQhWEmj5vWlhx8U1aw0bkmqReyOH4CSFqGt55FahLdzOHHO0Tv177FJpaihTeCBMiNuxXV8Jzs2tiS2DywIGlmAHXXh4uNegI5prdZIJ%2FWYtqrjCrdjGXt5pvZdsMTNExpGFJ3xpP1epEVFhuQeBP4cGp43vai7RrJr1p6S4SrWKx6o32vwJVWBl5knT8KeDRyJsNzjr7tPJOnqze4zbQFzWoShC&X-Amz-Signature=6269ba6d0889f91f5baebe09ae57631aee314f6bde75384b2f000fc6c1f8ec37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4ZHQQN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlE60DILiSu8sfvfPR0l0bRm1oWu2fue4B35uC0TQJkwIhAPxOIcLG9MwyrQzwW%2Bo%2BXq37TzvN9xInLcA37T9LGIBMKv8DCE0QABoMNjM3NDIzMTgzODA1Igx3jpf0tb4zbeReSIAq3AM2p0HHyVJ5jpbAjTc3vyDykDyexHP5lpf%2Bp2BmV9n%2FONXTdFXpJAkXecjidC8UzTxEFz%2B5bl6xCDyjiuleh%2FRGN6chNsY%2B8BO4TwDSkXKcaOD5lWupM2rTZ3mRG4kSduUPObID0stO2Wgr5Pkq63mVY3ddhfxo8uPrf2xNXn27yFl2MI1xvKVH1QAvQL13r7Iam5%2BWPQDaCrjqq6bcTvBQOtUBMm%2BgX7RNsPSKlOkES1KvDhhVkan1PIixglx0FMtpjNXJuZ680eQPDfDhVmHUHp5liywkD6RpURsGpcuZnenWDHC2XTNE%2FAzmonYEbwjZf0N0j4YWfK0XjM%2F1c24u21c5ArjWBEQTLCnAJFbH%2BXQ7KA%2BuPomMth%2BdV0hXsz90n1gZ1bqbtVdLXdMsI8CJrdpMyB4lDgn6n9syMHZVh5%2B0vKHIu44Yfm3m7yGBwfFat4S0l7SW1OaSmxMU0vr2%2B2kL5MxxqrPosnJ%2Bp3ogjiy%2B3i1bLtDBxXr96zVRobtdgynsDm1OUvttLr6N%2B7Eup3MpIYwgGbUAA3ZK4ACX0I3BVTe16zMJ1fh6zVaqdZ0gYWBoPj%2F8S8E2G02%2F%2FB%2F%2Bej4VW9Ars6qM9ph3iKKuSpuiLU8w51RDWVtJKjC6koDABjqkAQhWEmj5vWlhx8U1aw0bkmqReyOH4CSFqGt55FahLdzOHHO0Tv177FJpaihTeCBMiNuxXV8Jzs2tiS2DywIGlmAHXXh4uNegI5prdZIJ%2FWYtqrjCrdjGXt5pvZdsMTNExpGFJ3xpP1epEVFhuQeBP4cGp43vai7RrJr1p6S4SrWKx6o32vwJVWBl5knT8KeDRyJsNzjr7tPJOnqze4zbQFzWoShC&X-Amz-Signature=a98601b45e1bf57383e6551647f27cde32eb667a0bbe2b4ffdfd81578ce28c55&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4ZHQQN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlE60DILiSu8sfvfPR0l0bRm1oWu2fue4B35uC0TQJkwIhAPxOIcLG9MwyrQzwW%2Bo%2BXq37TzvN9xInLcA37T9LGIBMKv8DCE0QABoMNjM3NDIzMTgzODA1Igx3jpf0tb4zbeReSIAq3AM2p0HHyVJ5jpbAjTc3vyDykDyexHP5lpf%2Bp2BmV9n%2FONXTdFXpJAkXecjidC8UzTxEFz%2B5bl6xCDyjiuleh%2FRGN6chNsY%2B8BO4TwDSkXKcaOD5lWupM2rTZ3mRG4kSduUPObID0stO2Wgr5Pkq63mVY3ddhfxo8uPrf2xNXn27yFl2MI1xvKVH1QAvQL13r7Iam5%2BWPQDaCrjqq6bcTvBQOtUBMm%2BgX7RNsPSKlOkES1KvDhhVkan1PIixglx0FMtpjNXJuZ680eQPDfDhVmHUHp5liywkD6RpURsGpcuZnenWDHC2XTNE%2FAzmonYEbwjZf0N0j4YWfK0XjM%2F1c24u21c5ArjWBEQTLCnAJFbH%2BXQ7KA%2BuPomMth%2BdV0hXsz90n1gZ1bqbtVdLXdMsI8CJrdpMyB4lDgn6n9syMHZVh5%2B0vKHIu44Yfm3m7yGBwfFat4S0l7SW1OaSmxMU0vr2%2B2kL5MxxqrPosnJ%2Bp3ogjiy%2B3i1bLtDBxXr96zVRobtdgynsDm1OUvttLr6N%2B7Eup3MpIYwgGbUAA3ZK4ACX0I3BVTe16zMJ1fh6zVaqdZ0gYWBoPj%2F8S8E2G02%2F%2FB%2F%2Bej4VW9Ars6qM9ph3iKKuSpuiLU8w51RDWVtJKjC6koDABjqkAQhWEmj5vWlhx8U1aw0bkmqReyOH4CSFqGt55FahLdzOHHO0Tv177FJpaihTeCBMiNuxXV8Jzs2tiS2DywIGlmAHXXh4uNegI5prdZIJ%2FWYtqrjCrdjGXt5pvZdsMTNExpGFJ3xpP1epEVFhuQeBP4cGp43vai7RrJr1p6S4SrWKx6o32vwJVWBl5knT8KeDRyJsNzjr7tPJOnqze4zbQFzWoShC&X-Amz-Signature=71c1b883b606cbcb785498eb0086cf43617e703363d27e084d192f3008bfc1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4ZHQQN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlE60DILiSu8sfvfPR0l0bRm1oWu2fue4B35uC0TQJkwIhAPxOIcLG9MwyrQzwW%2Bo%2BXq37TzvN9xInLcA37T9LGIBMKv8DCE0QABoMNjM3NDIzMTgzODA1Igx3jpf0tb4zbeReSIAq3AM2p0HHyVJ5jpbAjTc3vyDykDyexHP5lpf%2Bp2BmV9n%2FONXTdFXpJAkXecjidC8UzTxEFz%2B5bl6xCDyjiuleh%2FRGN6chNsY%2B8BO4TwDSkXKcaOD5lWupM2rTZ3mRG4kSduUPObID0stO2Wgr5Pkq63mVY3ddhfxo8uPrf2xNXn27yFl2MI1xvKVH1QAvQL13r7Iam5%2BWPQDaCrjqq6bcTvBQOtUBMm%2BgX7RNsPSKlOkES1KvDhhVkan1PIixglx0FMtpjNXJuZ680eQPDfDhVmHUHp5liywkD6RpURsGpcuZnenWDHC2XTNE%2FAzmonYEbwjZf0N0j4YWfK0XjM%2F1c24u21c5ArjWBEQTLCnAJFbH%2BXQ7KA%2BuPomMth%2BdV0hXsz90n1gZ1bqbtVdLXdMsI8CJrdpMyB4lDgn6n9syMHZVh5%2B0vKHIu44Yfm3m7yGBwfFat4S0l7SW1OaSmxMU0vr2%2B2kL5MxxqrPosnJ%2Bp3ogjiy%2B3i1bLtDBxXr96zVRobtdgynsDm1OUvttLr6N%2B7Eup3MpIYwgGbUAA3ZK4ACX0I3BVTe16zMJ1fh6zVaqdZ0gYWBoPj%2F8S8E2G02%2F%2FB%2F%2Bej4VW9Ars6qM9ph3iKKuSpuiLU8w51RDWVtJKjC6koDABjqkAQhWEmj5vWlhx8U1aw0bkmqReyOH4CSFqGt55FahLdzOHHO0Tv177FJpaihTeCBMiNuxXV8Jzs2tiS2DywIGlmAHXXh4uNegI5prdZIJ%2FWYtqrjCrdjGXt5pvZdsMTNExpGFJ3xpP1epEVFhuQeBP4cGp43vai7RrJr1p6S4SrWKx6o32vwJVWBl5knT8KeDRyJsNzjr7tPJOnqze4zbQFzWoShC&X-Amz-Signature=be6e55a98a2c6460423d42ab6de59d3196c2a6b684498c1ac748028eb2190cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4ZHQQN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlE60DILiSu8sfvfPR0l0bRm1oWu2fue4B35uC0TQJkwIhAPxOIcLG9MwyrQzwW%2Bo%2BXq37TzvN9xInLcA37T9LGIBMKv8DCE0QABoMNjM3NDIzMTgzODA1Igx3jpf0tb4zbeReSIAq3AM2p0HHyVJ5jpbAjTc3vyDykDyexHP5lpf%2Bp2BmV9n%2FONXTdFXpJAkXecjidC8UzTxEFz%2B5bl6xCDyjiuleh%2FRGN6chNsY%2B8BO4TwDSkXKcaOD5lWupM2rTZ3mRG4kSduUPObID0stO2Wgr5Pkq63mVY3ddhfxo8uPrf2xNXn27yFl2MI1xvKVH1QAvQL13r7Iam5%2BWPQDaCrjqq6bcTvBQOtUBMm%2BgX7RNsPSKlOkES1KvDhhVkan1PIixglx0FMtpjNXJuZ680eQPDfDhVmHUHp5liywkD6RpURsGpcuZnenWDHC2XTNE%2FAzmonYEbwjZf0N0j4YWfK0XjM%2F1c24u21c5ArjWBEQTLCnAJFbH%2BXQ7KA%2BuPomMth%2BdV0hXsz90n1gZ1bqbtVdLXdMsI8CJrdpMyB4lDgn6n9syMHZVh5%2B0vKHIu44Yfm3m7yGBwfFat4S0l7SW1OaSmxMU0vr2%2B2kL5MxxqrPosnJ%2Bp3ogjiy%2B3i1bLtDBxXr96zVRobtdgynsDm1OUvttLr6N%2B7Eup3MpIYwgGbUAA3ZK4ACX0I3BVTe16zMJ1fh6zVaqdZ0gYWBoPj%2F8S8E2G02%2F%2FB%2F%2Bej4VW9Ars6qM9ph3iKKuSpuiLU8w51RDWVtJKjC6koDABjqkAQhWEmj5vWlhx8U1aw0bkmqReyOH4CSFqGt55FahLdzOHHO0Tv177FJpaihTeCBMiNuxXV8Jzs2tiS2DywIGlmAHXXh4uNegI5prdZIJ%2FWYtqrjCrdjGXt5pvZdsMTNExpGFJ3xpP1epEVFhuQeBP4cGp43vai7RrJr1p6S4SrWKx6o32vwJVWBl5knT8KeDRyJsNzjr7tPJOnqze4zbQFzWoShC&X-Amz-Signature=038b1cd84e4e085947f0545458dfdb8bd1dfbbfcb3077bdcaed26cd3d58cc003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4ZHQQN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlE60DILiSu8sfvfPR0l0bRm1oWu2fue4B35uC0TQJkwIhAPxOIcLG9MwyrQzwW%2Bo%2BXq37TzvN9xInLcA37T9LGIBMKv8DCE0QABoMNjM3NDIzMTgzODA1Igx3jpf0tb4zbeReSIAq3AM2p0HHyVJ5jpbAjTc3vyDykDyexHP5lpf%2Bp2BmV9n%2FONXTdFXpJAkXecjidC8UzTxEFz%2B5bl6xCDyjiuleh%2FRGN6chNsY%2B8BO4TwDSkXKcaOD5lWupM2rTZ3mRG4kSduUPObID0stO2Wgr5Pkq63mVY3ddhfxo8uPrf2xNXn27yFl2MI1xvKVH1QAvQL13r7Iam5%2BWPQDaCrjqq6bcTvBQOtUBMm%2BgX7RNsPSKlOkES1KvDhhVkan1PIixglx0FMtpjNXJuZ680eQPDfDhVmHUHp5liywkD6RpURsGpcuZnenWDHC2XTNE%2FAzmonYEbwjZf0N0j4YWfK0XjM%2F1c24u21c5ArjWBEQTLCnAJFbH%2BXQ7KA%2BuPomMth%2BdV0hXsz90n1gZ1bqbtVdLXdMsI8CJrdpMyB4lDgn6n9syMHZVh5%2B0vKHIu44Yfm3m7yGBwfFat4S0l7SW1OaSmxMU0vr2%2B2kL5MxxqrPosnJ%2Bp3ogjiy%2B3i1bLtDBxXr96zVRobtdgynsDm1OUvttLr6N%2B7Eup3MpIYwgGbUAA3ZK4ACX0I3BVTe16zMJ1fh6zVaqdZ0gYWBoPj%2F8S8E2G02%2F%2FB%2F%2Bej4VW9Ars6qM9ph3iKKuSpuiLU8w51RDWVtJKjC6koDABjqkAQhWEmj5vWlhx8U1aw0bkmqReyOH4CSFqGt55FahLdzOHHO0Tv177FJpaihTeCBMiNuxXV8Jzs2tiS2DywIGlmAHXXh4uNegI5prdZIJ%2FWYtqrjCrdjGXt5pvZdsMTNExpGFJ3xpP1epEVFhuQeBP4cGp43vai7RrJr1p6S4SrWKx6o32vwJVWBl5knT8KeDRyJsNzjr7tPJOnqze4zbQFzWoShC&X-Amz-Signature=cc383439d768a564e230b087f67eb8ffaffa62846f74b6514df1e437805624d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4ZHQQN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlE60DILiSu8sfvfPR0l0bRm1oWu2fue4B35uC0TQJkwIhAPxOIcLG9MwyrQzwW%2Bo%2BXq37TzvN9xInLcA37T9LGIBMKv8DCE0QABoMNjM3NDIzMTgzODA1Igx3jpf0tb4zbeReSIAq3AM2p0HHyVJ5jpbAjTc3vyDykDyexHP5lpf%2Bp2BmV9n%2FONXTdFXpJAkXecjidC8UzTxEFz%2B5bl6xCDyjiuleh%2FRGN6chNsY%2B8BO4TwDSkXKcaOD5lWupM2rTZ3mRG4kSduUPObID0stO2Wgr5Pkq63mVY3ddhfxo8uPrf2xNXn27yFl2MI1xvKVH1QAvQL13r7Iam5%2BWPQDaCrjqq6bcTvBQOtUBMm%2BgX7RNsPSKlOkES1KvDhhVkan1PIixglx0FMtpjNXJuZ680eQPDfDhVmHUHp5liywkD6RpURsGpcuZnenWDHC2XTNE%2FAzmonYEbwjZf0N0j4YWfK0XjM%2F1c24u21c5ArjWBEQTLCnAJFbH%2BXQ7KA%2BuPomMth%2BdV0hXsz90n1gZ1bqbtVdLXdMsI8CJrdpMyB4lDgn6n9syMHZVh5%2B0vKHIu44Yfm3m7yGBwfFat4S0l7SW1OaSmxMU0vr2%2B2kL5MxxqrPosnJ%2Bp3ogjiy%2B3i1bLtDBxXr96zVRobtdgynsDm1OUvttLr6N%2B7Eup3MpIYwgGbUAA3ZK4ACX0I3BVTe16zMJ1fh6zVaqdZ0gYWBoPj%2F8S8E2G02%2F%2FB%2F%2Bej4VW9Ars6qM9ph3iKKuSpuiLU8w51RDWVtJKjC6koDABjqkAQhWEmj5vWlhx8U1aw0bkmqReyOH4CSFqGt55FahLdzOHHO0Tv177FJpaihTeCBMiNuxXV8Jzs2tiS2DywIGlmAHXXh4uNegI5prdZIJ%2FWYtqrjCrdjGXt5pvZdsMTNExpGFJ3xpP1epEVFhuQeBP4cGp43vai7RrJr1p6S4SrWKx6o32vwJVWBl5knT8KeDRyJsNzjr7tPJOnqze4zbQFzWoShC&X-Amz-Signature=4ed967026af045f70edf6714102c5870637420672559e34346cc7e382cabe55b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4ZHQQN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlE60DILiSu8sfvfPR0l0bRm1oWu2fue4B35uC0TQJkwIhAPxOIcLG9MwyrQzwW%2Bo%2BXq37TzvN9xInLcA37T9LGIBMKv8DCE0QABoMNjM3NDIzMTgzODA1Igx3jpf0tb4zbeReSIAq3AM2p0HHyVJ5jpbAjTc3vyDykDyexHP5lpf%2Bp2BmV9n%2FONXTdFXpJAkXecjidC8UzTxEFz%2B5bl6xCDyjiuleh%2FRGN6chNsY%2B8BO4TwDSkXKcaOD5lWupM2rTZ3mRG4kSduUPObID0stO2Wgr5Pkq63mVY3ddhfxo8uPrf2xNXn27yFl2MI1xvKVH1QAvQL13r7Iam5%2BWPQDaCrjqq6bcTvBQOtUBMm%2BgX7RNsPSKlOkES1KvDhhVkan1PIixglx0FMtpjNXJuZ680eQPDfDhVmHUHp5liywkD6RpURsGpcuZnenWDHC2XTNE%2FAzmonYEbwjZf0N0j4YWfK0XjM%2F1c24u21c5ArjWBEQTLCnAJFbH%2BXQ7KA%2BuPomMth%2BdV0hXsz90n1gZ1bqbtVdLXdMsI8CJrdpMyB4lDgn6n9syMHZVh5%2B0vKHIu44Yfm3m7yGBwfFat4S0l7SW1OaSmxMU0vr2%2B2kL5MxxqrPosnJ%2Bp3ogjiy%2B3i1bLtDBxXr96zVRobtdgynsDm1OUvttLr6N%2B7Eup3MpIYwgGbUAA3ZK4ACX0I3BVTe16zMJ1fh6zVaqdZ0gYWBoPj%2F8S8E2G02%2F%2FB%2F%2Bej4VW9Ars6qM9ph3iKKuSpuiLU8w51RDWVtJKjC6koDABjqkAQhWEmj5vWlhx8U1aw0bkmqReyOH4CSFqGt55FahLdzOHHO0Tv177FJpaihTeCBMiNuxXV8Jzs2tiS2DywIGlmAHXXh4uNegI5prdZIJ%2FWYtqrjCrdjGXt5pvZdsMTNExpGFJ3xpP1epEVFhuQeBP4cGp43vai7RrJr1p6S4SrWKx6o32vwJVWBl5knT8KeDRyJsNzjr7tPJOnqze4zbQFzWoShC&X-Amz-Signature=6a3dec55db3db8948e1658f1f8bcdd038c31c55fa15321712c76cf0b1b8bf59a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
