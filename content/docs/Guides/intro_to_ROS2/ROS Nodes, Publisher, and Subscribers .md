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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH7MOJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7FZd23UXixj2goJGvhzCI8KmJKn9okgrqMRZqagV8QIgCpxjcahdn8G9moxw9w2vWlDL4EOqNLrRcotQd8w240Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBHYBVXDw8E672clFSrcA3Su3KhEO0tsAmesP%2FQHPZ9P1od6umHPoqRPjneS74HMIM86JoPstklz489%2B2IcovNc2p2LCzrmlAx%2Fz4KOqAz6yyDMv9QMJVr9qXBL631lxLRXQAZzBZcOZRlrkUu5FbYwznrig8FrVAjAVOxAlKcqZXod169bNdShVnjH72KtIEKlEOtrFxZjVx6Rp4fPdnqwHJomP1Kxl9jI5zz6fu7LXBbsAMcMv7qCpJcmlLrN7%2FrWJXHm45e95xmkcMSKbIUe1jfT5iUmh2B%2BTMtHxDjKky4dcaJ5NXjG8MkbPg3na9I%2FPpxQ7PkR1%2B4%2Fg9gBei86lFoAvGYK1Q4nK5G9aWy5MOK9ScjEjOM5nOhlyQX6Ac%2Box5lfWEE16qyte4%2Fg%2BzZ6gIvQJ6DvXAB5TUD2fPweI6tFVHUGrTjaG4dkGERaXvxOiGJbJuoG0THcM81S3rCvlw9v4ZeQosqaoF7FDY3K0UtYnrt2wMg2n4lNVWm2JvF8xM19H%2FfkgfYfCI0tLbmZmes5fctqiBBMAYQuewx2fGqByiG8ulLrCsaRXN3CUvajN6CKAwW4ixJHWgQ1%2FTyqHUEYBFQ11fpS6i6ios%2B2o2HAf5%2BZlFBVHA%2BUH%2FfSHaz%2B5kT0%2FiHk2II%2F%2BMJScrcAGOqUBpBf%2Bdk1NroSucsxZy%2F4y0psQEDAqz2exK68dBZ44ouhsjkeSrNStj86PUdeoQXIuqa%2Bmzmb1F2kjEnpE9JwoQOJMHgw7gf%2Bq9Jq7vE0FTjRouVpdbz%2BZFLckQ6GCk8IUkIPqPZ9PoCKzD9vNQwalnoJZVbATpOqT8A4eBzDDOrcZPfrIvzJN8t1vEMsXS24Hd8qj%2BfujjtQB451ktNPUlcWz6fxq&X-Amz-Signature=4d8f516f7def681387c40c9e8313b3eda5508ddc394c92ed5597be5163572898&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH7MOJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7FZd23UXixj2goJGvhzCI8KmJKn9okgrqMRZqagV8QIgCpxjcahdn8G9moxw9w2vWlDL4EOqNLrRcotQd8w240Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBHYBVXDw8E672clFSrcA3Su3KhEO0tsAmesP%2FQHPZ9P1od6umHPoqRPjneS74HMIM86JoPstklz489%2B2IcovNc2p2LCzrmlAx%2Fz4KOqAz6yyDMv9QMJVr9qXBL631lxLRXQAZzBZcOZRlrkUu5FbYwznrig8FrVAjAVOxAlKcqZXod169bNdShVnjH72KtIEKlEOtrFxZjVx6Rp4fPdnqwHJomP1Kxl9jI5zz6fu7LXBbsAMcMv7qCpJcmlLrN7%2FrWJXHm45e95xmkcMSKbIUe1jfT5iUmh2B%2BTMtHxDjKky4dcaJ5NXjG8MkbPg3na9I%2FPpxQ7PkR1%2B4%2Fg9gBei86lFoAvGYK1Q4nK5G9aWy5MOK9ScjEjOM5nOhlyQX6Ac%2Box5lfWEE16qyte4%2Fg%2BzZ6gIvQJ6DvXAB5TUD2fPweI6tFVHUGrTjaG4dkGERaXvxOiGJbJuoG0THcM81S3rCvlw9v4ZeQosqaoF7FDY3K0UtYnrt2wMg2n4lNVWm2JvF8xM19H%2FfkgfYfCI0tLbmZmes5fctqiBBMAYQuewx2fGqByiG8ulLrCsaRXN3CUvajN6CKAwW4ixJHWgQ1%2FTyqHUEYBFQ11fpS6i6ios%2B2o2HAf5%2BZlFBVHA%2BUH%2FfSHaz%2B5kT0%2FiHk2II%2F%2BMJScrcAGOqUBpBf%2Bdk1NroSucsxZy%2F4y0psQEDAqz2exK68dBZ44ouhsjkeSrNStj86PUdeoQXIuqa%2Bmzmb1F2kjEnpE9JwoQOJMHgw7gf%2Bq9Jq7vE0FTjRouVpdbz%2BZFLckQ6GCk8IUkIPqPZ9PoCKzD9vNQwalnoJZVbATpOqT8A4eBzDDOrcZPfrIvzJN8t1vEMsXS24Hd8qj%2BfujjtQB451ktNPUlcWz6fxq&X-Amz-Signature=1e5dc254fc8ddb7d75327b3e76e58161dac232ad251d6e5f3ad31708c5464ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH7MOJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7FZd23UXixj2goJGvhzCI8KmJKn9okgrqMRZqagV8QIgCpxjcahdn8G9moxw9w2vWlDL4EOqNLrRcotQd8w240Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBHYBVXDw8E672clFSrcA3Su3KhEO0tsAmesP%2FQHPZ9P1od6umHPoqRPjneS74HMIM86JoPstklz489%2B2IcovNc2p2LCzrmlAx%2Fz4KOqAz6yyDMv9QMJVr9qXBL631lxLRXQAZzBZcOZRlrkUu5FbYwznrig8FrVAjAVOxAlKcqZXod169bNdShVnjH72KtIEKlEOtrFxZjVx6Rp4fPdnqwHJomP1Kxl9jI5zz6fu7LXBbsAMcMv7qCpJcmlLrN7%2FrWJXHm45e95xmkcMSKbIUe1jfT5iUmh2B%2BTMtHxDjKky4dcaJ5NXjG8MkbPg3na9I%2FPpxQ7PkR1%2B4%2Fg9gBei86lFoAvGYK1Q4nK5G9aWy5MOK9ScjEjOM5nOhlyQX6Ac%2Box5lfWEE16qyte4%2Fg%2BzZ6gIvQJ6DvXAB5TUD2fPweI6tFVHUGrTjaG4dkGERaXvxOiGJbJuoG0THcM81S3rCvlw9v4ZeQosqaoF7FDY3K0UtYnrt2wMg2n4lNVWm2JvF8xM19H%2FfkgfYfCI0tLbmZmes5fctqiBBMAYQuewx2fGqByiG8ulLrCsaRXN3CUvajN6CKAwW4ixJHWgQ1%2FTyqHUEYBFQ11fpS6i6ios%2B2o2HAf5%2BZlFBVHA%2BUH%2FfSHaz%2B5kT0%2FiHk2II%2F%2BMJScrcAGOqUBpBf%2Bdk1NroSucsxZy%2F4y0psQEDAqz2exK68dBZ44ouhsjkeSrNStj86PUdeoQXIuqa%2Bmzmb1F2kjEnpE9JwoQOJMHgw7gf%2Bq9Jq7vE0FTjRouVpdbz%2BZFLckQ6GCk8IUkIPqPZ9PoCKzD9vNQwalnoJZVbATpOqT8A4eBzDDOrcZPfrIvzJN8t1vEMsXS24Hd8qj%2BfujjtQB451ktNPUlcWz6fxq&X-Amz-Signature=1e261757552ba5f3bd59d656a819c4a80a2eb26ffbbc8e0bfa4ced56a3d8cac9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH7MOJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7FZd23UXixj2goJGvhzCI8KmJKn9okgrqMRZqagV8QIgCpxjcahdn8G9moxw9w2vWlDL4EOqNLrRcotQd8w240Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBHYBVXDw8E672clFSrcA3Su3KhEO0tsAmesP%2FQHPZ9P1od6umHPoqRPjneS74HMIM86JoPstklz489%2B2IcovNc2p2LCzrmlAx%2Fz4KOqAz6yyDMv9QMJVr9qXBL631lxLRXQAZzBZcOZRlrkUu5FbYwznrig8FrVAjAVOxAlKcqZXod169bNdShVnjH72KtIEKlEOtrFxZjVx6Rp4fPdnqwHJomP1Kxl9jI5zz6fu7LXBbsAMcMv7qCpJcmlLrN7%2FrWJXHm45e95xmkcMSKbIUe1jfT5iUmh2B%2BTMtHxDjKky4dcaJ5NXjG8MkbPg3na9I%2FPpxQ7PkR1%2B4%2Fg9gBei86lFoAvGYK1Q4nK5G9aWy5MOK9ScjEjOM5nOhlyQX6Ac%2Box5lfWEE16qyte4%2Fg%2BzZ6gIvQJ6DvXAB5TUD2fPweI6tFVHUGrTjaG4dkGERaXvxOiGJbJuoG0THcM81S3rCvlw9v4ZeQosqaoF7FDY3K0UtYnrt2wMg2n4lNVWm2JvF8xM19H%2FfkgfYfCI0tLbmZmes5fctqiBBMAYQuewx2fGqByiG8ulLrCsaRXN3CUvajN6CKAwW4ixJHWgQ1%2FTyqHUEYBFQ11fpS6i6ios%2B2o2HAf5%2BZlFBVHA%2BUH%2FfSHaz%2B5kT0%2FiHk2II%2F%2BMJScrcAGOqUBpBf%2Bdk1NroSucsxZy%2F4y0psQEDAqz2exK68dBZ44ouhsjkeSrNStj86PUdeoQXIuqa%2Bmzmb1F2kjEnpE9JwoQOJMHgw7gf%2Bq9Jq7vE0FTjRouVpdbz%2BZFLckQ6GCk8IUkIPqPZ9PoCKzD9vNQwalnoJZVbATpOqT8A4eBzDDOrcZPfrIvzJN8t1vEMsXS24Hd8qj%2BfujjtQB451ktNPUlcWz6fxq&X-Amz-Signature=bdf2aada603162d3010fff524d1a0b7daf8b0dc3bdf1780cc46e4792666a4103&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH7MOJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7FZd23UXixj2goJGvhzCI8KmJKn9okgrqMRZqagV8QIgCpxjcahdn8G9moxw9w2vWlDL4EOqNLrRcotQd8w240Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBHYBVXDw8E672clFSrcA3Su3KhEO0tsAmesP%2FQHPZ9P1od6umHPoqRPjneS74HMIM86JoPstklz489%2B2IcovNc2p2LCzrmlAx%2Fz4KOqAz6yyDMv9QMJVr9qXBL631lxLRXQAZzBZcOZRlrkUu5FbYwznrig8FrVAjAVOxAlKcqZXod169bNdShVnjH72KtIEKlEOtrFxZjVx6Rp4fPdnqwHJomP1Kxl9jI5zz6fu7LXBbsAMcMv7qCpJcmlLrN7%2FrWJXHm45e95xmkcMSKbIUe1jfT5iUmh2B%2BTMtHxDjKky4dcaJ5NXjG8MkbPg3na9I%2FPpxQ7PkR1%2B4%2Fg9gBei86lFoAvGYK1Q4nK5G9aWy5MOK9ScjEjOM5nOhlyQX6Ac%2Box5lfWEE16qyte4%2Fg%2BzZ6gIvQJ6DvXAB5TUD2fPweI6tFVHUGrTjaG4dkGERaXvxOiGJbJuoG0THcM81S3rCvlw9v4ZeQosqaoF7FDY3K0UtYnrt2wMg2n4lNVWm2JvF8xM19H%2FfkgfYfCI0tLbmZmes5fctqiBBMAYQuewx2fGqByiG8ulLrCsaRXN3CUvajN6CKAwW4ixJHWgQ1%2FTyqHUEYBFQ11fpS6i6ios%2B2o2HAf5%2BZlFBVHA%2BUH%2FfSHaz%2B5kT0%2FiHk2II%2F%2BMJScrcAGOqUBpBf%2Bdk1NroSucsxZy%2F4y0psQEDAqz2exK68dBZ44ouhsjkeSrNStj86PUdeoQXIuqa%2Bmzmb1F2kjEnpE9JwoQOJMHgw7gf%2Bq9Jq7vE0FTjRouVpdbz%2BZFLckQ6GCk8IUkIPqPZ9PoCKzD9vNQwalnoJZVbATpOqT8A4eBzDDOrcZPfrIvzJN8t1vEMsXS24Hd8qj%2BfujjtQB451ktNPUlcWz6fxq&X-Amz-Signature=6cd55feff33d08bb1d709392b985777902f4226c0d7b4e6c0babf2a84a7d7d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH7MOJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7FZd23UXixj2goJGvhzCI8KmJKn9okgrqMRZqagV8QIgCpxjcahdn8G9moxw9w2vWlDL4EOqNLrRcotQd8w240Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBHYBVXDw8E672clFSrcA3Su3KhEO0tsAmesP%2FQHPZ9P1od6umHPoqRPjneS74HMIM86JoPstklz489%2B2IcovNc2p2LCzrmlAx%2Fz4KOqAz6yyDMv9QMJVr9qXBL631lxLRXQAZzBZcOZRlrkUu5FbYwznrig8FrVAjAVOxAlKcqZXod169bNdShVnjH72KtIEKlEOtrFxZjVx6Rp4fPdnqwHJomP1Kxl9jI5zz6fu7LXBbsAMcMv7qCpJcmlLrN7%2FrWJXHm45e95xmkcMSKbIUe1jfT5iUmh2B%2BTMtHxDjKky4dcaJ5NXjG8MkbPg3na9I%2FPpxQ7PkR1%2B4%2Fg9gBei86lFoAvGYK1Q4nK5G9aWy5MOK9ScjEjOM5nOhlyQX6Ac%2Box5lfWEE16qyte4%2Fg%2BzZ6gIvQJ6DvXAB5TUD2fPweI6tFVHUGrTjaG4dkGERaXvxOiGJbJuoG0THcM81S3rCvlw9v4ZeQosqaoF7FDY3K0UtYnrt2wMg2n4lNVWm2JvF8xM19H%2FfkgfYfCI0tLbmZmes5fctqiBBMAYQuewx2fGqByiG8ulLrCsaRXN3CUvajN6CKAwW4ixJHWgQ1%2FTyqHUEYBFQ11fpS6i6ios%2B2o2HAf5%2BZlFBVHA%2BUH%2FfSHaz%2B5kT0%2FiHk2II%2F%2BMJScrcAGOqUBpBf%2Bdk1NroSucsxZy%2F4y0psQEDAqz2exK68dBZ44ouhsjkeSrNStj86PUdeoQXIuqa%2Bmzmb1F2kjEnpE9JwoQOJMHgw7gf%2Bq9Jq7vE0FTjRouVpdbz%2BZFLckQ6GCk8IUkIPqPZ9PoCKzD9vNQwalnoJZVbATpOqT8A4eBzDDOrcZPfrIvzJN8t1vEMsXS24Hd8qj%2BfujjtQB451ktNPUlcWz6fxq&X-Amz-Signature=ad27c29880052efc8679dce7951a9be3e1a8809b22f68360838158bb71e41b53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH7MOJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7FZd23UXixj2goJGvhzCI8KmJKn9okgrqMRZqagV8QIgCpxjcahdn8G9moxw9w2vWlDL4EOqNLrRcotQd8w240Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBHYBVXDw8E672clFSrcA3Su3KhEO0tsAmesP%2FQHPZ9P1od6umHPoqRPjneS74HMIM86JoPstklz489%2B2IcovNc2p2LCzrmlAx%2Fz4KOqAz6yyDMv9QMJVr9qXBL631lxLRXQAZzBZcOZRlrkUu5FbYwznrig8FrVAjAVOxAlKcqZXod169bNdShVnjH72KtIEKlEOtrFxZjVx6Rp4fPdnqwHJomP1Kxl9jI5zz6fu7LXBbsAMcMv7qCpJcmlLrN7%2FrWJXHm45e95xmkcMSKbIUe1jfT5iUmh2B%2BTMtHxDjKky4dcaJ5NXjG8MkbPg3na9I%2FPpxQ7PkR1%2B4%2Fg9gBei86lFoAvGYK1Q4nK5G9aWy5MOK9ScjEjOM5nOhlyQX6Ac%2Box5lfWEE16qyte4%2Fg%2BzZ6gIvQJ6DvXAB5TUD2fPweI6tFVHUGrTjaG4dkGERaXvxOiGJbJuoG0THcM81S3rCvlw9v4ZeQosqaoF7FDY3K0UtYnrt2wMg2n4lNVWm2JvF8xM19H%2FfkgfYfCI0tLbmZmes5fctqiBBMAYQuewx2fGqByiG8ulLrCsaRXN3CUvajN6CKAwW4ixJHWgQ1%2FTyqHUEYBFQ11fpS6i6ios%2B2o2HAf5%2BZlFBVHA%2BUH%2FfSHaz%2B5kT0%2FiHk2II%2F%2BMJScrcAGOqUBpBf%2Bdk1NroSucsxZy%2F4y0psQEDAqz2exK68dBZ44ouhsjkeSrNStj86PUdeoQXIuqa%2Bmzmb1F2kjEnpE9JwoQOJMHgw7gf%2Bq9Jq7vE0FTjRouVpdbz%2BZFLckQ6GCk8IUkIPqPZ9PoCKzD9vNQwalnoJZVbATpOqT8A4eBzDDOrcZPfrIvzJN8t1vEMsXS24Hd8qj%2BfujjtQB451ktNPUlcWz6fxq&X-Amz-Signature=cda0cd8a0c1702211c34c7d81826f33255f59ebc1091fbe1be1a42fefa662300&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH7MOJ3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7FZd23UXixj2goJGvhzCI8KmJKn9okgrqMRZqagV8QIgCpxjcahdn8G9moxw9w2vWlDL4EOqNLrRcotQd8w240Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBHYBVXDw8E672clFSrcA3Su3KhEO0tsAmesP%2FQHPZ9P1od6umHPoqRPjneS74HMIM86JoPstklz489%2B2IcovNc2p2LCzrmlAx%2Fz4KOqAz6yyDMv9QMJVr9qXBL631lxLRXQAZzBZcOZRlrkUu5FbYwznrig8FrVAjAVOxAlKcqZXod169bNdShVnjH72KtIEKlEOtrFxZjVx6Rp4fPdnqwHJomP1Kxl9jI5zz6fu7LXBbsAMcMv7qCpJcmlLrN7%2FrWJXHm45e95xmkcMSKbIUe1jfT5iUmh2B%2BTMtHxDjKky4dcaJ5NXjG8MkbPg3na9I%2FPpxQ7PkR1%2B4%2Fg9gBei86lFoAvGYK1Q4nK5G9aWy5MOK9ScjEjOM5nOhlyQX6Ac%2Box5lfWEE16qyte4%2Fg%2BzZ6gIvQJ6DvXAB5TUD2fPweI6tFVHUGrTjaG4dkGERaXvxOiGJbJuoG0THcM81S3rCvlw9v4ZeQosqaoF7FDY3K0UtYnrt2wMg2n4lNVWm2JvF8xM19H%2FfkgfYfCI0tLbmZmes5fctqiBBMAYQuewx2fGqByiG8ulLrCsaRXN3CUvajN6CKAwW4ixJHWgQ1%2FTyqHUEYBFQ11fpS6i6ios%2B2o2HAf5%2BZlFBVHA%2BUH%2FfSHaz%2B5kT0%2FiHk2II%2F%2BMJScrcAGOqUBpBf%2Bdk1NroSucsxZy%2F4y0psQEDAqz2exK68dBZ44ouhsjkeSrNStj86PUdeoQXIuqa%2Bmzmb1F2kjEnpE9JwoQOJMHgw7gf%2Bq9Jq7vE0FTjRouVpdbz%2BZFLckQ6GCk8IUkIPqPZ9PoCKzD9vNQwalnoJZVbATpOqT8A4eBzDDOrcZPfrIvzJN8t1vEMsXS24Hd8qj%2BfujjtQB451ktNPUlcWz6fxq&X-Amz-Signature=64ff80f37dfc3a76f5efe8f8cb576a817e4f38a60cb6ab59f71817a16e3dd29c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
