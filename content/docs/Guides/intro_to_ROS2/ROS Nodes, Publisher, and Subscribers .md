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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVAU32R%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj4Drf%2Fd57%2FCGWR%2BvaybhuV0dnnYg1%2BUIYbS%2BrsuNi5AiBpWi%2FZcU4INW0v%2BBHiz96Cxd98CRNyaSZocgmE3Pn3MyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknpmlnqykl1%2FnG4SKtwDc%2Brjl%2FEG8wYho9kkb%2FhVjMO7Zha9yxMa%2BRRcqpY5CL8DcU%2BLT5vy59hxaHnPVy2wIruYQLiAmA4FmMqmgACCWoJf6wnC4zLCJnBDMo4HscQdGHXLlfKbjAvEPRuXLjerrNqFvz95F19cskuJJKLxVes3TyTpYS0hQcnj%2FQV%2BPyhU%2BpPdhw1IeP0z2BmZNo%2B3tSdWn1cQ%2FddvvdpNAGrcrR%2Bd7GZsxp6HGkuQO2hFH0nv3zdhqR0dLspxMH%2BhkBnN79uTuJo82u1Fe%2BoGdsqAUVhjAlKsW7QsqPLXEHPXO2%2B%2BXt38fH2Iv3apqd3T3%2FTtRstNAcsYUQL%2BrGnmoPr8QONS6QK04MkjchuifXZVcJ7QOh9Xu9I5XWJ6pdasVX0ruuyJVqIRzJLia7T%2F0VCcr7VP12%2Bw3Og%2FGn32n0hoeVfFo2GXHieoJ%2BJmzaF3ZZvG1suOMGbntppNUU3Y5j7OcrgEGn1HONyFPDjnHCrQKg8G9l10izxjF9%2Bc3V%2F%2BG3DWe1SLQWXDJ0JRgdw%2FURnMJ5T1%2F01cjNgh%2Bu9dzZzUlqVYdIrzB2GBQ8dHfesI4d1E3SnL2B9wvPBvhV4LreWqg6BIwtKXM5WCsJ9FeGHuRJDuJAlFH5FCdqtO1aAw5LmwzwY6pgEC6OZuMzo4CKR5mUaWXle4caVBfGv8n74vlln5%2FtLrTNw1YLJTMh59di1ppuqLR8v7XrguEI54wqi0x28iqCz7Y10lDRWEns88zvNWwM9CYUpSJs7frqSAH%2FNqJDviOSrJ6DelvEnXmzP1pf2%2FyDcpd3%2FRG27BS7uMnGe3LNb1HCGH60QtnuqetBUNU3Bmwt0xDEhJTacjjsA2q%2FacQuI9D33iVoAb&X-Amz-Signature=7a81714c75933a10dbf30f421406340fffde59f694565caed98e879a148abf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVAU32R%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj4Drf%2Fd57%2FCGWR%2BvaybhuV0dnnYg1%2BUIYbS%2BrsuNi5AiBpWi%2FZcU4INW0v%2BBHiz96Cxd98CRNyaSZocgmE3Pn3MyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknpmlnqykl1%2FnG4SKtwDc%2Brjl%2FEG8wYho9kkb%2FhVjMO7Zha9yxMa%2BRRcqpY5CL8DcU%2BLT5vy59hxaHnPVy2wIruYQLiAmA4FmMqmgACCWoJf6wnC4zLCJnBDMo4HscQdGHXLlfKbjAvEPRuXLjerrNqFvz95F19cskuJJKLxVes3TyTpYS0hQcnj%2FQV%2BPyhU%2BpPdhw1IeP0z2BmZNo%2B3tSdWn1cQ%2FddvvdpNAGrcrR%2Bd7GZsxp6HGkuQO2hFH0nv3zdhqR0dLspxMH%2BhkBnN79uTuJo82u1Fe%2BoGdsqAUVhjAlKsW7QsqPLXEHPXO2%2B%2BXt38fH2Iv3apqd3T3%2FTtRstNAcsYUQL%2BrGnmoPr8QONS6QK04MkjchuifXZVcJ7QOh9Xu9I5XWJ6pdasVX0ruuyJVqIRzJLia7T%2F0VCcr7VP12%2Bw3Og%2FGn32n0hoeVfFo2GXHieoJ%2BJmzaF3ZZvG1suOMGbntppNUU3Y5j7OcrgEGn1HONyFPDjnHCrQKg8G9l10izxjF9%2Bc3V%2F%2BG3DWe1SLQWXDJ0JRgdw%2FURnMJ5T1%2F01cjNgh%2Bu9dzZzUlqVYdIrzB2GBQ8dHfesI4d1E3SnL2B9wvPBvhV4LreWqg6BIwtKXM5WCsJ9FeGHuRJDuJAlFH5FCdqtO1aAw5LmwzwY6pgEC6OZuMzo4CKR5mUaWXle4caVBfGv8n74vlln5%2FtLrTNw1YLJTMh59di1ppuqLR8v7XrguEI54wqi0x28iqCz7Y10lDRWEns88zvNWwM9CYUpSJs7frqSAH%2FNqJDviOSrJ6DelvEnXmzP1pf2%2FyDcpd3%2FRG27BS7uMnGe3LNb1HCGH60QtnuqetBUNU3Bmwt0xDEhJTacjjsA2q%2FacQuI9D33iVoAb&X-Amz-Signature=04441f3c7451eab670fc335c9f7bba4ad0266befbeb77be29db2e782974bc8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVAU32R%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj4Drf%2Fd57%2FCGWR%2BvaybhuV0dnnYg1%2BUIYbS%2BrsuNi5AiBpWi%2FZcU4INW0v%2BBHiz96Cxd98CRNyaSZocgmE3Pn3MyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknpmlnqykl1%2FnG4SKtwDc%2Brjl%2FEG8wYho9kkb%2FhVjMO7Zha9yxMa%2BRRcqpY5CL8DcU%2BLT5vy59hxaHnPVy2wIruYQLiAmA4FmMqmgACCWoJf6wnC4zLCJnBDMo4HscQdGHXLlfKbjAvEPRuXLjerrNqFvz95F19cskuJJKLxVes3TyTpYS0hQcnj%2FQV%2BPyhU%2BpPdhw1IeP0z2BmZNo%2B3tSdWn1cQ%2FddvvdpNAGrcrR%2Bd7GZsxp6HGkuQO2hFH0nv3zdhqR0dLspxMH%2BhkBnN79uTuJo82u1Fe%2BoGdsqAUVhjAlKsW7QsqPLXEHPXO2%2B%2BXt38fH2Iv3apqd3T3%2FTtRstNAcsYUQL%2BrGnmoPr8QONS6QK04MkjchuifXZVcJ7QOh9Xu9I5XWJ6pdasVX0ruuyJVqIRzJLia7T%2F0VCcr7VP12%2Bw3Og%2FGn32n0hoeVfFo2GXHieoJ%2BJmzaF3ZZvG1suOMGbntppNUU3Y5j7OcrgEGn1HONyFPDjnHCrQKg8G9l10izxjF9%2Bc3V%2F%2BG3DWe1SLQWXDJ0JRgdw%2FURnMJ5T1%2F01cjNgh%2Bu9dzZzUlqVYdIrzB2GBQ8dHfesI4d1E3SnL2B9wvPBvhV4LreWqg6BIwtKXM5WCsJ9FeGHuRJDuJAlFH5FCdqtO1aAw5LmwzwY6pgEC6OZuMzo4CKR5mUaWXle4caVBfGv8n74vlln5%2FtLrTNw1YLJTMh59di1ppuqLR8v7XrguEI54wqi0x28iqCz7Y10lDRWEns88zvNWwM9CYUpSJs7frqSAH%2FNqJDviOSrJ6DelvEnXmzP1pf2%2FyDcpd3%2FRG27BS7uMnGe3LNb1HCGH60QtnuqetBUNU3Bmwt0xDEhJTacjjsA2q%2FacQuI9D33iVoAb&X-Amz-Signature=ca2b8d611f4e78e776585558d794f46c5de260efa070139eb7d674fc24c99058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVAU32R%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj4Drf%2Fd57%2FCGWR%2BvaybhuV0dnnYg1%2BUIYbS%2BrsuNi5AiBpWi%2FZcU4INW0v%2BBHiz96Cxd98CRNyaSZocgmE3Pn3MyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknpmlnqykl1%2FnG4SKtwDc%2Brjl%2FEG8wYho9kkb%2FhVjMO7Zha9yxMa%2BRRcqpY5CL8DcU%2BLT5vy59hxaHnPVy2wIruYQLiAmA4FmMqmgACCWoJf6wnC4zLCJnBDMo4HscQdGHXLlfKbjAvEPRuXLjerrNqFvz95F19cskuJJKLxVes3TyTpYS0hQcnj%2FQV%2BPyhU%2BpPdhw1IeP0z2BmZNo%2B3tSdWn1cQ%2FddvvdpNAGrcrR%2Bd7GZsxp6HGkuQO2hFH0nv3zdhqR0dLspxMH%2BhkBnN79uTuJo82u1Fe%2BoGdsqAUVhjAlKsW7QsqPLXEHPXO2%2B%2BXt38fH2Iv3apqd3T3%2FTtRstNAcsYUQL%2BrGnmoPr8QONS6QK04MkjchuifXZVcJ7QOh9Xu9I5XWJ6pdasVX0ruuyJVqIRzJLia7T%2F0VCcr7VP12%2Bw3Og%2FGn32n0hoeVfFo2GXHieoJ%2BJmzaF3ZZvG1suOMGbntppNUU3Y5j7OcrgEGn1HONyFPDjnHCrQKg8G9l10izxjF9%2Bc3V%2F%2BG3DWe1SLQWXDJ0JRgdw%2FURnMJ5T1%2F01cjNgh%2Bu9dzZzUlqVYdIrzB2GBQ8dHfesI4d1E3SnL2B9wvPBvhV4LreWqg6BIwtKXM5WCsJ9FeGHuRJDuJAlFH5FCdqtO1aAw5LmwzwY6pgEC6OZuMzo4CKR5mUaWXle4caVBfGv8n74vlln5%2FtLrTNw1YLJTMh59di1ppuqLR8v7XrguEI54wqi0x28iqCz7Y10lDRWEns88zvNWwM9CYUpSJs7frqSAH%2FNqJDviOSrJ6DelvEnXmzP1pf2%2FyDcpd3%2FRG27BS7uMnGe3LNb1HCGH60QtnuqetBUNU3Bmwt0xDEhJTacjjsA2q%2FacQuI9D33iVoAb&X-Amz-Signature=c2707cbd341b30d6384ac7cfbfec542e50ee96a84d61d0633944aaf966bd7b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVAU32R%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj4Drf%2Fd57%2FCGWR%2BvaybhuV0dnnYg1%2BUIYbS%2BrsuNi5AiBpWi%2FZcU4INW0v%2BBHiz96Cxd98CRNyaSZocgmE3Pn3MyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknpmlnqykl1%2FnG4SKtwDc%2Brjl%2FEG8wYho9kkb%2FhVjMO7Zha9yxMa%2BRRcqpY5CL8DcU%2BLT5vy59hxaHnPVy2wIruYQLiAmA4FmMqmgACCWoJf6wnC4zLCJnBDMo4HscQdGHXLlfKbjAvEPRuXLjerrNqFvz95F19cskuJJKLxVes3TyTpYS0hQcnj%2FQV%2BPyhU%2BpPdhw1IeP0z2BmZNo%2B3tSdWn1cQ%2FddvvdpNAGrcrR%2Bd7GZsxp6HGkuQO2hFH0nv3zdhqR0dLspxMH%2BhkBnN79uTuJo82u1Fe%2BoGdsqAUVhjAlKsW7QsqPLXEHPXO2%2B%2BXt38fH2Iv3apqd3T3%2FTtRstNAcsYUQL%2BrGnmoPr8QONS6QK04MkjchuifXZVcJ7QOh9Xu9I5XWJ6pdasVX0ruuyJVqIRzJLia7T%2F0VCcr7VP12%2Bw3Og%2FGn32n0hoeVfFo2GXHieoJ%2BJmzaF3ZZvG1suOMGbntppNUU3Y5j7OcrgEGn1HONyFPDjnHCrQKg8G9l10izxjF9%2Bc3V%2F%2BG3DWe1SLQWXDJ0JRgdw%2FURnMJ5T1%2F01cjNgh%2Bu9dzZzUlqVYdIrzB2GBQ8dHfesI4d1E3SnL2B9wvPBvhV4LreWqg6BIwtKXM5WCsJ9FeGHuRJDuJAlFH5FCdqtO1aAw5LmwzwY6pgEC6OZuMzo4CKR5mUaWXle4caVBfGv8n74vlln5%2FtLrTNw1YLJTMh59di1ppuqLR8v7XrguEI54wqi0x28iqCz7Y10lDRWEns88zvNWwM9CYUpSJs7frqSAH%2FNqJDviOSrJ6DelvEnXmzP1pf2%2FyDcpd3%2FRG27BS7uMnGe3LNb1HCGH60QtnuqetBUNU3Bmwt0xDEhJTacjjsA2q%2FacQuI9D33iVoAb&X-Amz-Signature=a5d1891845a2dc6289ce2acdda1cbfc86e687846e80d8a8a94c3fd439112a628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVAU32R%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj4Drf%2Fd57%2FCGWR%2BvaybhuV0dnnYg1%2BUIYbS%2BrsuNi5AiBpWi%2FZcU4INW0v%2BBHiz96Cxd98CRNyaSZocgmE3Pn3MyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknpmlnqykl1%2FnG4SKtwDc%2Brjl%2FEG8wYho9kkb%2FhVjMO7Zha9yxMa%2BRRcqpY5CL8DcU%2BLT5vy59hxaHnPVy2wIruYQLiAmA4FmMqmgACCWoJf6wnC4zLCJnBDMo4HscQdGHXLlfKbjAvEPRuXLjerrNqFvz95F19cskuJJKLxVes3TyTpYS0hQcnj%2FQV%2BPyhU%2BpPdhw1IeP0z2BmZNo%2B3tSdWn1cQ%2FddvvdpNAGrcrR%2Bd7GZsxp6HGkuQO2hFH0nv3zdhqR0dLspxMH%2BhkBnN79uTuJo82u1Fe%2BoGdsqAUVhjAlKsW7QsqPLXEHPXO2%2B%2BXt38fH2Iv3apqd3T3%2FTtRstNAcsYUQL%2BrGnmoPr8QONS6QK04MkjchuifXZVcJ7QOh9Xu9I5XWJ6pdasVX0ruuyJVqIRzJLia7T%2F0VCcr7VP12%2Bw3Og%2FGn32n0hoeVfFo2GXHieoJ%2BJmzaF3ZZvG1suOMGbntppNUU3Y5j7OcrgEGn1HONyFPDjnHCrQKg8G9l10izxjF9%2Bc3V%2F%2BG3DWe1SLQWXDJ0JRgdw%2FURnMJ5T1%2F01cjNgh%2Bu9dzZzUlqVYdIrzB2GBQ8dHfesI4d1E3SnL2B9wvPBvhV4LreWqg6BIwtKXM5WCsJ9FeGHuRJDuJAlFH5FCdqtO1aAw5LmwzwY6pgEC6OZuMzo4CKR5mUaWXle4caVBfGv8n74vlln5%2FtLrTNw1YLJTMh59di1ppuqLR8v7XrguEI54wqi0x28iqCz7Y10lDRWEns88zvNWwM9CYUpSJs7frqSAH%2FNqJDviOSrJ6DelvEnXmzP1pf2%2FyDcpd3%2FRG27BS7uMnGe3LNb1HCGH60QtnuqetBUNU3Bmwt0xDEhJTacjjsA2q%2FacQuI9D33iVoAb&X-Amz-Signature=60e0eb66b0429aa3063ac2786b3b4d454dfef7807e4906d7c36c035057adaf1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVAU32R%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj4Drf%2Fd57%2FCGWR%2BvaybhuV0dnnYg1%2BUIYbS%2BrsuNi5AiBpWi%2FZcU4INW0v%2BBHiz96Cxd98CRNyaSZocgmE3Pn3MyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknpmlnqykl1%2FnG4SKtwDc%2Brjl%2FEG8wYho9kkb%2FhVjMO7Zha9yxMa%2BRRcqpY5CL8DcU%2BLT5vy59hxaHnPVy2wIruYQLiAmA4FmMqmgACCWoJf6wnC4zLCJnBDMo4HscQdGHXLlfKbjAvEPRuXLjerrNqFvz95F19cskuJJKLxVes3TyTpYS0hQcnj%2FQV%2BPyhU%2BpPdhw1IeP0z2BmZNo%2B3tSdWn1cQ%2FddvvdpNAGrcrR%2Bd7GZsxp6HGkuQO2hFH0nv3zdhqR0dLspxMH%2BhkBnN79uTuJo82u1Fe%2BoGdsqAUVhjAlKsW7QsqPLXEHPXO2%2B%2BXt38fH2Iv3apqd3T3%2FTtRstNAcsYUQL%2BrGnmoPr8QONS6QK04MkjchuifXZVcJ7QOh9Xu9I5XWJ6pdasVX0ruuyJVqIRzJLia7T%2F0VCcr7VP12%2Bw3Og%2FGn32n0hoeVfFo2GXHieoJ%2BJmzaF3ZZvG1suOMGbntppNUU3Y5j7OcrgEGn1HONyFPDjnHCrQKg8G9l10izxjF9%2Bc3V%2F%2BG3DWe1SLQWXDJ0JRgdw%2FURnMJ5T1%2F01cjNgh%2Bu9dzZzUlqVYdIrzB2GBQ8dHfesI4d1E3SnL2B9wvPBvhV4LreWqg6BIwtKXM5WCsJ9FeGHuRJDuJAlFH5FCdqtO1aAw5LmwzwY6pgEC6OZuMzo4CKR5mUaWXle4caVBfGv8n74vlln5%2FtLrTNw1YLJTMh59di1ppuqLR8v7XrguEI54wqi0x28iqCz7Y10lDRWEns88zvNWwM9CYUpSJs7frqSAH%2FNqJDviOSrJ6DelvEnXmzP1pf2%2FyDcpd3%2FRG27BS7uMnGe3LNb1HCGH60QtnuqetBUNU3Bmwt0xDEhJTacjjsA2q%2FacQuI9D33iVoAb&X-Amz-Signature=48ef8c8c388c66693d971e48dcd536644a780cc9715ac12a32fd1fd61b386c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVAU32R%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj4Drf%2Fd57%2FCGWR%2BvaybhuV0dnnYg1%2BUIYbS%2BrsuNi5AiBpWi%2FZcU4INW0v%2BBHiz96Cxd98CRNyaSZocgmE3Pn3MyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknpmlnqykl1%2FnG4SKtwDc%2Brjl%2FEG8wYho9kkb%2FhVjMO7Zha9yxMa%2BRRcqpY5CL8DcU%2BLT5vy59hxaHnPVy2wIruYQLiAmA4FmMqmgACCWoJf6wnC4zLCJnBDMo4HscQdGHXLlfKbjAvEPRuXLjerrNqFvz95F19cskuJJKLxVes3TyTpYS0hQcnj%2FQV%2BPyhU%2BpPdhw1IeP0z2BmZNo%2B3tSdWn1cQ%2FddvvdpNAGrcrR%2Bd7GZsxp6HGkuQO2hFH0nv3zdhqR0dLspxMH%2BhkBnN79uTuJo82u1Fe%2BoGdsqAUVhjAlKsW7QsqPLXEHPXO2%2B%2BXt38fH2Iv3apqd3T3%2FTtRstNAcsYUQL%2BrGnmoPr8QONS6QK04MkjchuifXZVcJ7QOh9Xu9I5XWJ6pdasVX0ruuyJVqIRzJLia7T%2F0VCcr7VP12%2Bw3Og%2FGn32n0hoeVfFo2GXHieoJ%2BJmzaF3ZZvG1suOMGbntppNUU3Y5j7OcrgEGn1HONyFPDjnHCrQKg8G9l10izxjF9%2Bc3V%2F%2BG3DWe1SLQWXDJ0JRgdw%2FURnMJ5T1%2F01cjNgh%2Bu9dzZzUlqVYdIrzB2GBQ8dHfesI4d1E3SnL2B9wvPBvhV4LreWqg6BIwtKXM5WCsJ9FeGHuRJDuJAlFH5FCdqtO1aAw5LmwzwY6pgEC6OZuMzo4CKR5mUaWXle4caVBfGv8n74vlln5%2FtLrTNw1YLJTMh59di1ppuqLR8v7XrguEI54wqi0x28iqCz7Y10lDRWEns88zvNWwM9CYUpSJs7frqSAH%2FNqJDviOSrJ6DelvEnXmzP1pf2%2FyDcpd3%2FRG27BS7uMnGe3LNb1HCGH60QtnuqetBUNU3Bmwt0xDEhJTacjjsA2q%2FacQuI9D33iVoAb&X-Amz-Signature=98b07be431c8e8648332a7bfe528f69b67bffd4bfeaa8e1df238499e7ba91450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
