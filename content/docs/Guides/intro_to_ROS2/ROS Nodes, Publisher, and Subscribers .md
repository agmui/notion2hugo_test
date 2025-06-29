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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCX2BRT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz%2B8Qa4ZWd8899%2FqIhfoh3kSaqd9ue%2F00BV%2BBGZuyQIgUb4JJb81mXz9xRr3mzuqzeSSKCpj3iXHEmE3j7syH%2FQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfyHz9NXd74KZaGsircA6Jz1QzBZi606K4xpdEuuZoDEqKWar%2BLK%2BrXtNysimZATORbx4KEom8CkhdiBlvDI9YzWG5gEVhJIRIeU1kw4eGORRNV8lMc86TLtrOf1FyiZcq44Nq0xXGO9CvPNfWq9E3mxXxjD1Asazh8JWMQbbHX8bTrmKJx1h6sQ1Yz%2FaMDAA6PRa7iSxviQNAPDXw4m%2BezHg9graWksMl%2B9XIlk001IMLKTfoMiFrYnoeL%2Fx7hsOReyRzSXdNJIQjZ2xdWCq7oi7JOZSFpbWmoGof5Go6cDeQjkl%2FHXydVuJXXbkt4JFX0p5visXgA4ErC6zneFhgAh%2BbsbngESuMzHIJAdh6d7qIvp4ZpFsEhCGj8IN7f7DM1CofH5hX8QKlKsRO3wbog73QDRl4vl1Cc5AqIK6O3AcBltbu%2BIC90vX2rOxFUmc%2FTLc43FxQLqx%2FUhcV4iKb2wxYbpbtxm75b%2Be7xbMMEPT5QCOuvHmU%2FeZn6MSu1pEFsjWsFBuoJZK3JufspZ%2BWHVrMmXZFZTOc6DSDi77EzTad3XxytI05XRLkLRuqli9Mrmfk6QaI8JWzJAQ7Pi4xksdaRv29gRS4SaDbyBI0sH1Pz8tY6xhjSgyrizZSUz9MLRxByH7aFSBpWMNK6hMMGOqUBs3ejhYkTHRUBW7Tv7bszl%2BLNBjK9O4xaS6PsjORSclbTSAlsCB2HTWEChMoPnEl5HiNbL%2FdVO7P9CHqPwreOa8t3EaZmPntDLRmbjtJRNvvCMJomGzhR%2FwHSQFLZJ7MzP8M%2F7%2Fd%2FU%2BBP4qGF9GU48Tmu8GkBFEL6GgKmhxdo%2FbQCm2QP4M773OW6HZmpBoSFH7c0DraJR%2FuPXRTrWHa9pLf04f1p&X-Amz-Signature=14c30dbb6c7fdbe739eec3e7db9bc30fe235e4a66c1b4898e7a881a67d363806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCX2BRT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz%2B8Qa4ZWd8899%2FqIhfoh3kSaqd9ue%2F00BV%2BBGZuyQIgUb4JJb81mXz9xRr3mzuqzeSSKCpj3iXHEmE3j7syH%2FQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfyHz9NXd74KZaGsircA6Jz1QzBZi606K4xpdEuuZoDEqKWar%2BLK%2BrXtNysimZATORbx4KEom8CkhdiBlvDI9YzWG5gEVhJIRIeU1kw4eGORRNV8lMc86TLtrOf1FyiZcq44Nq0xXGO9CvPNfWq9E3mxXxjD1Asazh8JWMQbbHX8bTrmKJx1h6sQ1Yz%2FaMDAA6PRa7iSxviQNAPDXw4m%2BezHg9graWksMl%2B9XIlk001IMLKTfoMiFrYnoeL%2Fx7hsOReyRzSXdNJIQjZ2xdWCq7oi7JOZSFpbWmoGof5Go6cDeQjkl%2FHXydVuJXXbkt4JFX0p5visXgA4ErC6zneFhgAh%2BbsbngESuMzHIJAdh6d7qIvp4ZpFsEhCGj8IN7f7DM1CofH5hX8QKlKsRO3wbog73QDRl4vl1Cc5AqIK6O3AcBltbu%2BIC90vX2rOxFUmc%2FTLc43FxQLqx%2FUhcV4iKb2wxYbpbtxm75b%2Be7xbMMEPT5QCOuvHmU%2FeZn6MSu1pEFsjWsFBuoJZK3JufspZ%2BWHVrMmXZFZTOc6DSDi77EzTad3XxytI05XRLkLRuqli9Mrmfk6QaI8JWzJAQ7Pi4xksdaRv29gRS4SaDbyBI0sH1Pz8tY6xhjSgyrizZSUz9MLRxByH7aFSBpWMNK6hMMGOqUBs3ejhYkTHRUBW7Tv7bszl%2BLNBjK9O4xaS6PsjORSclbTSAlsCB2HTWEChMoPnEl5HiNbL%2FdVO7P9CHqPwreOa8t3EaZmPntDLRmbjtJRNvvCMJomGzhR%2FwHSQFLZJ7MzP8M%2F7%2Fd%2FU%2BBP4qGF9GU48Tmu8GkBFEL6GgKmhxdo%2FbQCm2QP4M773OW6HZmpBoSFH7c0DraJR%2FuPXRTrWHa9pLf04f1p&X-Amz-Signature=053f06195437a3a403bd32831d89f8229cf4e898fa72c8243eb9774b1733cab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCX2BRT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz%2B8Qa4ZWd8899%2FqIhfoh3kSaqd9ue%2F00BV%2BBGZuyQIgUb4JJb81mXz9xRr3mzuqzeSSKCpj3iXHEmE3j7syH%2FQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfyHz9NXd74KZaGsircA6Jz1QzBZi606K4xpdEuuZoDEqKWar%2BLK%2BrXtNysimZATORbx4KEom8CkhdiBlvDI9YzWG5gEVhJIRIeU1kw4eGORRNV8lMc86TLtrOf1FyiZcq44Nq0xXGO9CvPNfWq9E3mxXxjD1Asazh8JWMQbbHX8bTrmKJx1h6sQ1Yz%2FaMDAA6PRa7iSxviQNAPDXw4m%2BezHg9graWksMl%2B9XIlk001IMLKTfoMiFrYnoeL%2Fx7hsOReyRzSXdNJIQjZ2xdWCq7oi7JOZSFpbWmoGof5Go6cDeQjkl%2FHXydVuJXXbkt4JFX0p5visXgA4ErC6zneFhgAh%2BbsbngESuMzHIJAdh6d7qIvp4ZpFsEhCGj8IN7f7DM1CofH5hX8QKlKsRO3wbog73QDRl4vl1Cc5AqIK6O3AcBltbu%2BIC90vX2rOxFUmc%2FTLc43FxQLqx%2FUhcV4iKb2wxYbpbtxm75b%2Be7xbMMEPT5QCOuvHmU%2FeZn6MSu1pEFsjWsFBuoJZK3JufspZ%2BWHVrMmXZFZTOc6DSDi77EzTad3XxytI05XRLkLRuqli9Mrmfk6QaI8JWzJAQ7Pi4xksdaRv29gRS4SaDbyBI0sH1Pz8tY6xhjSgyrizZSUz9MLRxByH7aFSBpWMNK6hMMGOqUBs3ejhYkTHRUBW7Tv7bszl%2BLNBjK9O4xaS6PsjORSclbTSAlsCB2HTWEChMoPnEl5HiNbL%2FdVO7P9CHqPwreOa8t3EaZmPntDLRmbjtJRNvvCMJomGzhR%2FwHSQFLZJ7MzP8M%2F7%2Fd%2FU%2BBP4qGF9GU48Tmu8GkBFEL6GgKmhxdo%2FbQCm2QP4M773OW6HZmpBoSFH7c0DraJR%2FuPXRTrWHa9pLf04f1p&X-Amz-Signature=6c58004f1086f4f6d029838f45c7a4df9d4104ce767d44df2c689741bcc59f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCX2BRT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz%2B8Qa4ZWd8899%2FqIhfoh3kSaqd9ue%2F00BV%2BBGZuyQIgUb4JJb81mXz9xRr3mzuqzeSSKCpj3iXHEmE3j7syH%2FQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfyHz9NXd74KZaGsircA6Jz1QzBZi606K4xpdEuuZoDEqKWar%2BLK%2BrXtNysimZATORbx4KEom8CkhdiBlvDI9YzWG5gEVhJIRIeU1kw4eGORRNV8lMc86TLtrOf1FyiZcq44Nq0xXGO9CvPNfWq9E3mxXxjD1Asazh8JWMQbbHX8bTrmKJx1h6sQ1Yz%2FaMDAA6PRa7iSxviQNAPDXw4m%2BezHg9graWksMl%2B9XIlk001IMLKTfoMiFrYnoeL%2Fx7hsOReyRzSXdNJIQjZ2xdWCq7oi7JOZSFpbWmoGof5Go6cDeQjkl%2FHXydVuJXXbkt4JFX0p5visXgA4ErC6zneFhgAh%2BbsbngESuMzHIJAdh6d7qIvp4ZpFsEhCGj8IN7f7DM1CofH5hX8QKlKsRO3wbog73QDRl4vl1Cc5AqIK6O3AcBltbu%2BIC90vX2rOxFUmc%2FTLc43FxQLqx%2FUhcV4iKb2wxYbpbtxm75b%2Be7xbMMEPT5QCOuvHmU%2FeZn6MSu1pEFsjWsFBuoJZK3JufspZ%2BWHVrMmXZFZTOc6DSDi77EzTad3XxytI05XRLkLRuqli9Mrmfk6QaI8JWzJAQ7Pi4xksdaRv29gRS4SaDbyBI0sH1Pz8tY6xhjSgyrizZSUz9MLRxByH7aFSBpWMNK6hMMGOqUBs3ejhYkTHRUBW7Tv7bszl%2BLNBjK9O4xaS6PsjORSclbTSAlsCB2HTWEChMoPnEl5HiNbL%2FdVO7P9CHqPwreOa8t3EaZmPntDLRmbjtJRNvvCMJomGzhR%2FwHSQFLZJ7MzP8M%2F7%2Fd%2FU%2BBP4qGF9GU48Tmu8GkBFEL6GgKmhxdo%2FbQCm2QP4M773OW6HZmpBoSFH7c0DraJR%2FuPXRTrWHa9pLf04f1p&X-Amz-Signature=95247f0a9259483764ebcfc2fdec19658b0174d041f999070b35e68661ee2cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCX2BRT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz%2B8Qa4ZWd8899%2FqIhfoh3kSaqd9ue%2F00BV%2BBGZuyQIgUb4JJb81mXz9xRr3mzuqzeSSKCpj3iXHEmE3j7syH%2FQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfyHz9NXd74KZaGsircA6Jz1QzBZi606K4xpdEuuZoDEqKWar%2BLK%2BrXtNysimZATORbx4KEom8CkhdiBlvDI9YzWG5gEVhJIRIeU1kw4eGORRNV8lMc86TLtrOf1FyiZcq44Nq0xXGO9CvPNfWq9E3mxXxjD1Asazh8JWMQbbHX8bTrmKJx1h6sQ1Yz%2FaMDAA6PRa7iSxviQNAPDXw4m%2BezHg9graWksMl%2B9XIlk001IMLKTfoMiFrYnoeL%2Fx7hsOReyRzSXdNJIQjZ2xdWCq7oi7JOZSFpbWmoGof5Go6cDeQjkl%2FHXydVuJXXbkt4JFX0p5visXgA4ErC6zneFhgAh%2BbsbngESuMzHIJAdh6d7qIvp4ZpFsEhCGj8IN7f7DM1CofH5hX8QKlKsRO3wbog73QDRl4vl1Cc5AqIK6O3AcBltbu%2BIC90vX2rOxFUmc%2FTLc43FxQLqx%2FUhcV4iKb2wxYbpbtxm75b%2Be7xbMMEPT5QCOuvHmU%2FeZn6MSu1pEFsjWsFBuoJZK3JufspZ%2BWHVrMmXZFZTOc6DSDi77EzTad3XxytI05XRLkLRuqli9Mrmfk6QaI8JWzJAQ7Pi4xksdaRv29gRS4SaDbyBI0sH1Pz8tY6xhjSgyrizZSUz9MLRxByH7aFSBpWMNK6hMMGOqUBs3ejhYkTHRUBW7Tv7bszl%2BLNBjK9O4xaS6PsjORSclbTSAlsCB2HTWEChMoPnEl5HiNbL%2FdVO7P9CHqPwreOa8t3EaZmPntDLRmbjtJRNvvCMJomGzhR%2FwHSQFLZJ7MzP8M%2F7%2Fd%2FU%2BBP4qGF9GU48Tmu8GkBFEL6GgKmhxdo%2FbQCm2QP4M773OW6HZmpBoSFH7c0DraJR%2FuPXRTrWHa9pLf04f1p&X-Amz-Signature=4b94dd940665ba0911d8bca82a18ecf4889636d008297489438cb9b57f542aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCX2BRT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz%2B8Qa4ZWd8899%2FqIhfoh3kSaqd9ue%2F00BV%2BBGZuyQIgUb4JJb81mXz9xRr3mzuqzeSSKCpj3iXHEmE3j7syH%2FQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfyHz9NXd74KZaGsircA6Jz1QzBZi606K4xpdEuuZoDEqKWar%2BLK%2BrXtNysimZATORbx4KEom8CkhdiBlvDI9YzWG5gEVhJIRIeU1kw4eGORRNV8lMc86TLtrOf1FyiZcq44Nq0xXGO9CvPNfWq9E3mxXxjD1Asazh8JWMQbbHX8bTrmKJx1h6sQ1Yz%2FaMDAA6PRa7iSxviQNAPDXw4m%2BezHg9graWksMl%2B9XIlk001IMLKTfoMiFrYnoeL%2Fx7hsOReyRzSXdNJIQjZ2xdWCq7oi7JOZSFpbWmoGof5Go6cDeQjkl%2FHXydVuJXXbkt4JFX0p5visXgA4ErC6zneFhgAh%2BbsbngESuMzHIJAdh6d7qIvp4ZpFsEhCGj8IN7f7DM1CofH5hX8QKlKsRO3wbog73QDRl4vl1Cc5AqIK6O3AcBltbu%2BIC90vX2rOxFUmc%2FTLc43FxQLqx%2FUhcV4iKb2wxYbpbtxm75b%2Be7xbMMEPT5QCOuvHmU%2FeZn6MSu1pEFsjWsFBuoJZK3JufspZ%2BWHVrMmXZFZTOc6DSDi77EzTad3XxytI05XRLkLRuqli9Mrmfk6QaI8JWzJAQ7Pi4xksdaRv29gRS4SaDbyBI0sH1Pz8tY6xhjSgyrizZSUz9MLRxByH7aFSBpWMNK6hMMGOqUBs3ejhYkTHRUBW7Tv7bszl%2BLNBjK9O4xaS6PsjORSclbTSAlsCB2HTWEChMoPnEl5HiNbL%2FdVO7P9CHqPwreOa8t3EaZmPntDLRmbjtJRNvvCMJomGzhR%2FwHSQFLZJ7MzP8M%2F7%2Fd%2FU%2BBP4qGF9GU48Tmu8GkBFEL6GgKmhxdo%2FbQCm2QP4M773OW6HZmpBoSFH7c0DraJR%2FuPXRTrWHa9pLf04f1p&X-Amz-Signature=268ce4e47f0b133687e0f16de66f5160f44f06fc4db1adb28e1aab296cf8d00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCX2BRT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz%2B8Qa4ZWd8899%2FqIhfoh3kSaqd9ue%2F00BV%2BBGZuyQIgUb4JJb81mXz9xRr3mzuqzeSSKCpj3iXHEmE3j7syH%2FQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfyHz9NXd74KZaGsircA6Jz1QzBZi606K4xpdEuuZoDEqKWar%2BLK%2BrXtNysimZATORbx4KEom8CkhdiBlvDI9YzWG5gEVhJIRIeU1kw4eGORRNV8lMc86TLtrOf1FyiZcq44Nq0xXGO9CvPNfWq9E3mxXxjD1Asazh8JWMQbbHX8bTrmKJx1h6sQ1Yz%2FaMDAA6PRa7iSxviQNAPDXw4m%2BezHg9graWksMl%2B9XIlk001IMLKTfoMiFrYnoeL%2Fx7hsOReyRzSXdNJIQjZ2xdWCq7oi7JOZSFpbWmoGof5Go6cDeQjkl%2FHXydVuJXXbkt4JFX0p5visXgA4ErC6zneFhgAh%2BbsbngESuMzHIJAdh6d7qIvp4ZpFsEhCGj8IN7f7DM1CofH5hX8QKlKsRO3wbog73QDRl4vl1Cc5AqIK6O3AcBltbu%2BIC90vX2rOxFUmc%2FTLc43FxQLqx%2FUhcV4iKb2wxYbpbtxm75b%2Be7xbMMEPT5QCOuvHmU%2FeZn6MSu1pEFsjWsFBuoJZK3JufspZ%2BWHVrMmXZFZTOc6DSDi77EzTad3XxytI05XRLkLRuqli9Mrmfk6QaI8JWzJAQ7Pi4xksdaRv29gRS4SaDbyBI0sH1Pz8tY6xhjSgyrizZSUz9MLRxByH7aFSBpWMNK6hMMGOqUBs3ejhYkTHRUBW7Tv7bszl%2BLNBjK9O4xaS6PsjORSclbTSAlsCB2HTWEChMoPnEl5HiNbL%2FdVO7P9CHqPwreOa8t3EaZmPntDLRmbjtJRNvvCMJomGzhR%2FwHSQFLZJ7MzP8M%2F7%2Fd%2FU%2BBP4qGF9GU48Tmu8GkBFEL6GgKmhxdo%2FbQCm2QP4M773OW6HZmpBoSFH7c0DraJR%2FuPXRTrWHa9pLf04f1p&X-Amz-Signature=a304880673dac7562c814c012b1ec51a4fd3d8a5fdb6d6dd320f036ee5df1a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCX2BRT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz%2B8Qa4ZWd8899%2FqIhfoh3kSaqd9ue%2F00BV%2BBGZuyQIgUb4JJb81mXz9xRr3mzuqzeSSKCpj3iXHEmE3j7syH%2FQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfyHz9NXd74KZaGsircA6Jz1QzBZi606K4xpdEuuZoDEqKWar%2BLK%2BrXtNysimZATORbx4KEom8CkhdiBlvDI9YzWG5gEVhJIRIeU1kw4eGORRNV8lMc86TLtrOf1FyiZcq44Nq0xXGO9CvPNfWq9E3mxXxjD1Asazh8JWMQbbHX8bTrmKJx1h6sQ1Yz%2FaMDAA6PRa7iSxviQNAPDXw4m%2BezHg9graWksMl%2B9XIlk001IMLKTfoMiFrYnoeL%2Fx7hsOReyRzSXdNJIQjZ2xdWCq7oi7JOZSFpbWmoGof5Go6cDeQjkl%2FHXydVuJXXbkt4JFX0p5visXgA4ErC6zneFhgAh%2BbsbngESuMzHIJAdh6d7qIvp4ZpFsEhCGj8IN7f7DM1CofH5hX8QKlKsRO3wbog73QDRl4vl1Cc5AqIK6O3AcBltbu%2BIC90vX2rOxFUmc%2FTLc43FxQLqx%2FUhcV4iKb2wxYbpbtxm75b%2Be7xbMMEPT5QCOuvHmU%2FeZn6MSu1pEFsjWsFBuoJZK3JufspZ%2BWHVrMmXZFZTOc6DSDi77EzTad3XxytI05XRLkLRuqli9Mrmfk6QaI8JWzJAQ7Pi4xksdaRv29gRS4SaDbyBI0sH1Pz8tY6xhjSgyrizZSUz9MLRxByH7aFSBpWMNK6hMMGOqUBs3ejhYkTHRUBW7Tv7bszl%2BLNBjK9O4xaS6PsjORSclbTSAlsCB2HTWEChMoPnEl5HiNbL%2FdVO7P9CHqPwreOa8t3EaZmPntDLRmbjtJRNvvCMJomGzhR%2FwHSQFLZJ7MzP8M%2F7%2Fd%2FU%2BBP4qGF9GU48Tmu8GkBFEL6GgKmhxdo%2FbQCm2QP4M773OW6HZmpBoSFH7c0DraJR%2FuPXRTrWHa9pLf04f1p&X-Amz-Signature=c1fa26957dbf4a12727d0949c2f515cb503e55d9b2b266a82f8d4469788a3525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
