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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB2X7HD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkFjoXCPIa65KlRbMi2hqzzr4oPA9fB7lQ93Ss%2FrUSTQIhAKVQvERLHSZPXtaCkDc5c7Qc2wRphcPlGf%2BpVjG1yq7YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUjx2cjvjjT%2BViNMYq3AN6sp8EE6tvG%2FDH4oZtcG%2BEnLzZgZ6Ne2Wp3CRZQB8LwWFgVfCurB1J5kEkjvpYPHFIz%2BqRvfjHYRCySC1dXwhKAZz71XoQe5uluitr63FIo687wlbiz8lVgKLZaz3QZO5A36IE6rTtDfrhY6QD23ABaaZRkblrZSVk4VizB%2BwHRg6zl8KsLgaklt2x08dHyJJeI0P91eXVeTq%2FnGFjcxqscRQ8hp32JiD7GgPfjcqX%2FGRIG6ZbP5WdMEVATRrGpBeBis8IUGza4R4QCrn8l2%2Fl78p21p2%2Bi2dEiDn2cZZCZWO0vY33qFkYdAFzFsBzjv%2BLjxwRi61fylmSokc0Hcb91QcZqONd1B%2BP3O9WZ7adHykaWLAlnpFPihJ%2BIVdsITw8YsH8cA%2B3D0BLSsKb%2FfmbjqHJZyj%2FpOk0dVTDhTlN1rtayxMiZBv%2BHu7mUKh3iMlc8AtR9kspYCYj4n4V5vPnbUi%2FiysDTmIl1VyAlGsBhHcblqL1BV1Ni2nuuw96wMp2MwCa2EmHlq3hWDuLxCe5VaSdwgqfZvZdwRBlLRZ9HtvIM3%2FaITw3pIdkv9pkZjRR8kVUaH8J0vRY%2FSQDq8zobNZTqNfTqz%2F3RI2LTCQ0IxHBVNHtPIecUEaZFDDF47LBBjqkARMQt0Tl3XaVLEcb0Ol%2FbpT4%2B%2BjTkz%2FRV%2Fw6hHDSkG%2BbyMWGW%2BGc1CLOXQimEYqiXwx%2BwM6gDFvqfKDqdmUzvhi%2FF7ZZBmgGjiygkxxJ3irq8UaywQKUzc5MjlYWA4fSCc%2FIPK90d1D5sPSE%2BBLoXtCC%2BQlgtbVk9shHbhn8rDth4cvgeKak1bY7YhrHYsJFBCFSC%2FiDUCIb%2F%2BObWkC6gsPrVEqP&X-Amz-Signature=c7f8344f72d2a7de1d145c0f21e519f8ed2181c6027de5e8e0d89462079d5974&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB2X7HD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkFjoXCPIa65KlRbMi2hqzzr4oPA9fB7lQ93Ss%2FrUSTQIhAKVQvERLHSZPXtaCkDc5c7Qc2wRphcPlGf%2BpVjG1yq7YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUjx2cjvjjT%2BViNMYq3AN6sp8EE6tvG%2FDH4oZtcG%2BEnLzZgZ6Ne2Wp3CRZQB8LwWFgVfCurB1J5kEkjvpYPHFIz%2BqRvfjHYRCySC1dXwhKAZz71XoQe5uluitr63FIo687wlbiz8lVgKLZaz3QZO5A36IE6rTtDfrhY6QD23ABaaZRkblrZSVk4VizB%2BwHRg6zl8KsLgaklt2x08dHyJJeI0P91eXVeTq%2FnGFjcxqscRQ8hp32JiD7GgPfjcqX%2FGRIG6ZbP5WdMEVATRrGpBeBis8IUGza4R4QCrn8l2%2Fl78p21p2%2Bi2dEiDn2cZZCZWO0vY33qFkYdAFzFsBzjv%2BLjxwRi61fylmSokc0Hcb91QcZqONd1B%2BP3O9WZ7adHykaWLAlnpFPihJ%2BIVdsITw8YsH8cA%2B3D0BLSsKb%2FfmbjqHJZyj%2FpOk0dVTDhTlN1rtayxMiZBv%2BHu7mUKh3iMlc8AtR9kspYCYj4n4V5vPnbUi%2FiysDTmIl1VyAlGsBhHcblqL1BV1Ni2nuuw96wMp2MwCa2EmHlq3hWDuLxCe5VaSdwgqfZvZdwRBlLRZ9HtvIM3%2FaITw3pIdkv9pkZjRR8kVUaH8J0vRY%2FSQDq8zobNZTqNfTqz%2F3RI2LTCQ0IxHBVNHtPIecUEaZFDDF47LBBjqkARMQt0Tl3XaVLEcb0Ol%2FbpT4%2B%2BjTkz%2FRV%2Fw6hHDSkG%2BbyMWGW%2BGc1CLOXQimEYqiXwx%2BwM6gDFvqfKDqdmUzvhi%2FF7ZZBmgGjiygkxxJ3irq8UaywQKUzc5MjlYWA4fSCc%2FIPK90d1D5sPSE%2BBLoXtCC%2BQlgtbVk9shHbhn8rDth4cvgeKak1bY7YhrHYsJFBCFSC%2FiDUCIb%2F%2BObWkC6gsPrVEqP&X-Amz-Signature=e7e37ee8de049713bc517cfcdec723d5170af6ed91710237d972d51d15b8310b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB2X7HD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkFjoXCPIa65KlRbMi2hqzzr4oPA9fB7lQ93Ss%2FrUSTQIhAKVQvERLHSZPXtaCkDc5c7Qc2wRphcPlGf%2BpVjG1yq7YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUjx2cjvjjT%2BViNMYq3AN6sp8EE6tvG%2FDH4oZtcG%2BEnLzZgZ6Ne2Wp3CRZQB8LwWFgVfCurB1J5kEkjvpYPHFIz%2BqRvfjHYRCySC1dXwhKAZz71XoQe5uluitr63FIo687wlbiz8lVgKLZaz3QZO5A36IE6rTtDfrhY6QD23ABaaZRkblrZSVk4VizB%2BwHRg6zl8KsLgaklt2x08dHyJJeI0P91eXVeTq%2FnGFjcxqscRQ8hp32JiD7GgPfjcqX%2FGRIG6ZbP5WdMEVATRrGpBeBis8IUGza4R4QCrn8l2%2Fl78p21p2%2Bi2dEiDn2cZZCZWO0vY33qFkYdAFzFsBzjv%2BLjxwRi61fylmSokc0Hcb91QcZqONd1B%2BP3O9WZ7adHykaWLAlnpFPihJ%2BIVdsITw8YsH8cA%2B3D0BLSsKb%2FfmbjqHJZyj%2FpOk0dVTDhTlN1rtayxMiZBv%2BHu7mUKh3iMlc8AtR9kspYCYj4n4V5vPnbUi%2FiysDTmIl1VyAlGsBhHcblqL1BV1Ni2nuuw96wMp2MwCa2EmHlq3hWDuLxCe5VaSdwgqfZvZdwRBlLRZ9HtvIM3%2FaITw3pIdkv9pkZjRR8kVUaH8J0vRY%2FSQDq8zobNZTqNfTqz%2F3RI2LTCQ0IxHBVNHtPIecUEaZFDDF47LBBjqkARMQt0Tl3XaVLEcb0Ol%2FbpT4%2B%2BjTkz%2FRV%2Fw6hHDSkG%2BbyMWGW%2BGc1CLOXQimEYqiXwx%2BwM6gDFvqfKDqdmUzvhi%2FF7ZZBmgGjiygkxxJ3irq8UaywQKUzc5MjlYWA4fSCc%2FIPK90d1D5sPSE%2BBLoXtCC%2BQlgtbVk9shHbhn8rDth4cvgeKak1bY7YhrHYsJFBCFSC%2FiDUCIb%2F%2BObWkC6gsPrVEqP&X-Amz-Signature=4e052fc532658214665b1331e089f47cddc0a3d990756e39a3695d488564c869&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB2X7HD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkFjoXCPIa65KlRbMi2hqzzr4oPA9fB7lQ93Ss%2FrUSTQIhAKVQvERLHSZPXtaCkDc5c7Qc2wRphcPlGf%2BpVjG1yq7YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUjx2cjvjjT%2BViNMYq3AN6sp8EE6tvG%2FDH4oZtcG%2BEnLzZgZ6Ne2Wp3CRZQB8LwWFgVfCurB1J5kEkjvpYPHFIz%2BqRvfjHYRCySC1dXwhKAZz71XoQe5uluitr63FIo687wlbiz8lVgKLZaz3QZO5A36IE6rTtDfrhY6QD23ABaaZRkblrZSVk4VizB%2BwHRg6zl8KsLgaklt2x08dHyJJeI0P91eXVeTq%2FnGFjcxqscRQ8hp32JiD7GgPfjcqX%2FGRIG6ZbP5WdMEVATRrGpBeBis8IUGza4R4QCrn8l2%2Fl78p21p2%2Bi2dEiDn2cZZCZWO0vY33qFkYdAFzFsBzjv%2BLjxwRi61fylmSokc0Hcb91QcZqONd1B%2BP3O9WZ7adHykaWLAlnpFPihJ%2BIVdsITw8YsH8cA%2B3D0BLSsKb%2FfmbjqHJZyj%2FpOk0dVTDhTlN1rtayxMiZBv%2BHu7mUKh3iMlc8AtR9kspYCYj4n4V5vPnbUi%2FiysDTmIl1VyAlGsBhHcblqL1BV1Ni2nuuw96wMp2MwCa2EmHlq3hWDuLxCe5VaSdwgqfZvZdwRBlLRZ9HtvIM3%2FaITw3pIdkv9pkZjRR8kVUaH8J0vRY%2FSQDq8zobNZTqNfTqz%2F3RI2LTCQ0IxHBVNHtPIecUEaZFDDF47LBBjqkARMQt0Tl3XaVLEcb0Ol%2FbpT4%2B%2BjTkz%2FRV%2Fw6hHDSkG%2BbyMWGW%2BGc1CLOXQimEYqiXwx%2BwM6gDFvqfKDqdmUzvhi%2FF7ZZBmgGjiygkxxJ3irq8UaywQKUzc5MjlYWA4fSCc%2FIPK90d1D5sPSE%2BBLoXtCC%2BQlgtbVk9shHbhn8rDth4cvgeKak1bY7YhrHYsJFBCFSC%2FiDUCIb%2F%2BObWkC6gsPrVEqP&X-Amz-Signature=f008c5bebff8411104cf735c9efe1502ca9f07a3ba4dd79bca2124a6ce44f9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB2X7HD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkFjoXCPIa65KlRbMi2hqzzr4oPA9fB7lQ93Ss%2FrUSTQIhAKVQvERLHSZPXtaCkDc5c7Qc2wRphcPlGf%2BpVjG1yq7YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUjx2cjvjjT%2BViNMYq3AN6sp8EE6tvG%2FDH4oZtcG%2BEnLzZgZ6Ne2Wp3CRZQB8LwWFgVfCurB1J5kEkjvpYPHFIz%2BqRvfjHYRCySC1dXwhKAZz71XoQe5uluitr63FIo687wlbiz8lVgKLZaz3QZO5A36IE6rTtDfrhY6QD23ABaaZRkblrZSVk4VizB%2BwHRg6zl8KsLgaklt2x08dHyJJeI0P91eXVeTq%2FnGFjcxqscRQ8hp32JiD7GgPfjcqX%2FGRIG6ZbP5WdMEVATRrGpBeBis8IUGza4R4QCrn8l2%2Fl78p21p2%2Bi2dEiDn2cZZCZWO0vY33qFkYdAFzFsBzjv%2BLjxwRi61fylmSokc0Hcb91QcZqONd1B%2BP3O9WZ7adHykaWLAlnpFPihJ%2BIVdsITw8YsH8cA%2B3D0BLSsKb%2FfmbjqHJZyj%2FpOk0dVTDhTlN1rtayxMiZBv%2BHu7mUKh3iMlc8AtR9kspYCYj4n4V5vPnbUi%2FiysDTmIl1VyAlGsBhHcblqL1BV1Ni2nuuw96wMp2MwCa2EmHlq3hWDuLxCe5VaSdwgqfZvZdwRBlLRZ9HtvIM3%2FaITw3pIdkv9pkZjRR8kVUaH8J0vRY%2FSQDq8zobNZTqNfTqz%2F3RI2LTCQ0IxHBVNHtPIecUEaZFDDF47LBBjqkARMQt0Tl3XaVLEcb0Ol%2FbpT4%2B%2BjTkz%2FRV%2Fw6hHDSkG%2BbyMWGW%2BGc1CLOXQimEYqiXwx%2BwM6gDFvqfKDqdmUzvhi%2FF7ZZBmgGjiygkxxJ3irq8UaywQKUzc5MjlYWA4fSCc%2FIPK90d1D5sPSE%2BBLoXtCC%2BQlgtbVk9shHbhn8rDth4cvgeKak1bY7YhrHYsJFBCFSC%2FiDUCIb%2F%2BObWkC6gsPrVEqP&X-Amz-Signature=704a06311af211717364070ef94b9f1cf15caba57e725e8df1af0cc27770db8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB2X7HD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkFjoXCPIa65KlRbMi2hqzzr4oPA9fB7lQ93Ss%2FrUSTQIhAKVQvERLHSZPXtaCkDc5c7Qc2wRphcPlGf%2BpVjG1yq7YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUjx2cjvjjT%2BViNMYq3AN6sp8EE6tvG%2FDH4oZtcG%2BEnLzZgZ6Ne2Wp3CRZQB8LwWFgVfCurB1J5kEkjvpYPHFIz%2BqRvfjHYRCySC1dXwhKAZz71XoQe5uluitr63FIo687wlbiz8lVgKLZaz3QZO5A36IE6rTtDfrhY6QD23ABaaZRkblrZSVk4VizB%2BwHRg6zl8KsLgaklt2x08dHyJJeI0P91eXVeTq%2FnGFjcxqscRQ8hp32JiD7GgPfjcqX%2FGRIG6ZbP5WdMEVATRrGpBeBis8IUGza4R4QCrn8l2%2Fl78p21p2%2Bi2dEiDn2cZZCZWO0vY33qFkYdAFzFsBzjv%2BLjxwRi61fylmSokc0Hcb91QcZqONd1B%2BP3O9WZ7adHykaWLAlnpFPihJ%2BIVdsITw8YsH8cA%2B3D0BLSsKb%2FfmbjqHJZyj%2FpOk0dVTDhTlN1rtayxMiZBv%2BHu7mUKh3iMlc8AtR9kspYCYj4n4V5vPnbUi%2FiysDTmIl1VyAlGsBhHcblqL1BV1Ni2nuuw96wMp2MwCa2EmHlq3hWDuLxCe5VaSdwgqfZvZdwRBlLRZ9HtvIM3%2FaITw3pIdkv9pkZjRR8kVUaH8J0vRY%2FSQDq8zobNZTqNfTqz%2F3RI2LTCQ0IxHBVNHtPIecUEaZFDDF47LBBjqkARMQt0Tl3XaVLEcb0Ol%2FbpT4%2B%2BjTkz%2FRV%2Fw6hHDSkG%2BbyMWGW%2BGc1CLOXQimEYqiXwx%2BwM6gDFvqfKDqdmUzvhi%2FF7ZZBmgGjiygkxxJ3irq8UaywQKUzc5MjlYWA4fSCc%2FIPK90d1D5sPSE%2BBLoXtCC%2BQlgtbVk9shHbhn8rDth4cvgeKak1bY7YhrHYsJFBCFSC%2FiDUCIb%2F%2BObWkC6gsPrVEqP&X-Amz-Signature=885ac22e55b638f02a10055e6d66179500e91bbed7331afe1e7bd208451f24d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB2X7HD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkFjoXCPIa65KlRbMi2hqzzr4oPA9fB7lQ93Ss%2FrUSTQIhAKVQvERLHSZPXtaCkDc5c7Qc2wRphcPlGf%2BpVjG1yq7YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUjx2cjvjjT%2BViNMYq3AN6sp8EE6tvG%2FDH4oZtcG%2BEnLzZgZ6Ne2Wp3CRZQB8LwWFgVfCurB1J5kEkjvpYPHFIz%2BqRvfjHYRCySC1dXwhKAZz71XoQe5uluitr63FIo687wlbiz8lVgKLZaz3QZO5A36IE6rTtDfrhY6QD23ABaaZRkblrZSVk4VizB%2BwHRg6zl8KsLgaklt2x08dHyJJeI0P91eXVeTq%2FnGFjcxqscRQ8hp32JiD7GgPfjcqX%2FGRIG6ZbP5WdMEVATRrGpBeBis8IUGza4R4QCrn8l2%2Fl78p21p2%2Bi2dEiDn2cZZCZWO0vY33qFkYdAFzFsBzjv%2BLjxwRi61fylmSokc0Hcb91QcZqONd1B%2BP3O9WZ7adHykaWLAlnpFPihJ%2BIVdsITw8YsH8cA%2B3D0BLSsKb%2FfmbjqHJZyj%2FpOk0dVTDhTlN1rtayxMiZBv%2BHu7mUKh3iMlc8AtR9kspYCYj4n4V5vPnbUi%2FiysDTmIl1VyAlGsBhHcblqL1BV1Ni2nuuw96wMp2MwCa2EmHlq3hWDuLxCe5VaSdwgqfZvZdwRBlLRZ9HtvIM3%2FaITw3pIdkv9pkZjRR8kVUaH8J0vRY%2FSQDq8zobNZTqNfTqz%2F3RI2LTCQ0IxHBVNHtPIecUEaZFDDF47LBBjqkARMQt0Tl3XaVLEcb0Ol%2FbpT4%2B%2BjTkz%2FRV%2Fw6hHDSkG%2BbyMWGW%2BGc1CLOXQimEYqiXwx%2BwM6gDFvqfKDqdmUzvhi%2FF7ZZBmgGjiygkxxJ3irq8UaywQKUzc5MjlYWA4fSCc%2FIPK90d1D5sPSE%2BBLoXtCC%2BQlgtbVk9shHbhn8rDth4cvgeKak1bY7YhrHYsJFBCFSC%2FiDUCIb%2F%2BObWkC6gsPrVEqP&X-Amz-Signature=34d676dd95542744ce2024fe0bb0df8ddf897ec28ccdb1fe86231663028e9b97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB2X7HD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkFjoXCPIa65KlRbMi2hqzzr4oPA9fB7lQ93Ss%2FrUSTQIhAKVQvERLHSZPXtaCkDc5c7Qc2wRphcPlGf%2BpVjG1yq7YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUjx2cjvjjT%2BViNMYq3AN6sp8EE6tvG%2FDH4oZtcG%2BEnLzZgZ6Ne2Wp3CRZQB8LwWFgVfCurB1J5kEkjvpYPHFIz%2BqRvfjHYRCySC1dXwhKAZz71XoQe5uluitr63FIo687wlbiz8lVgKLZaz3QZO5A36IE6rTtDfrhY6QD23ABaaZRkblrZSVk4VizB%2BwHRg6zl8KsLgaklt2x08dHyJJeI0P91eXVeTq%2FnGFjcxqscRQ8hp32JiD7GgPfjcqX%2FGRIG6ZbP5WdMEVATRrGpBeBis8IUGza4R4QCrn8l2%2Fl78p21p2%2Bi2dEiDn2cZZCZWO0vY33qFkYdAFzFsBzjv%2BLjxwRi61fylmSokc0Hcb91QcZqONd1B%2BP3O9WZ7adHykaWLAlnpFPihJ%2BIVdsITw8YsH8cA%2B3D0BLSsKb%2FfmbjqHJZyj%2FpOk0dVTDhTlN1rtayxMiZBv%2BHu7mUKh3iMlc8AtR9kspYCYj4n4V5vPnbUi%2FiysDTmIl1VyAlGsBhHcblqL1BV1Ni2nuuw96wMp2MwCa2EmHlq3hWDuLxCe5VaSdwgqfZvZdwRBlLRZ9HtvIM3%2FaITw3pIdkv9pkZjRR8kVUaH8J0vRY%2FSQDq8zobNZTqNfTqz%2F3RI2LTCQ0IxHBVNHtPIecUEaZFDDF47LBBjqkARMQt0Tl3XaVLEcb0Ol%2FbpT4%2B%2BjTkz%2FRV%2Fw6hHDSkG%2BbyMWGW%2BGc1CLOXQimEYqiXwx%2BwM6gDFvqfKDqdmUzvhi%2FF7ZZBmgGjiygkxxJ3irq8UaywQKUzc5MjlYWA4fSCc%2FIPK90d1D5sPSE%2BBLoXtCC%2BQlgtbVk9shHbhn8rDth4cvgeKak1bY7YhrHYsJFBCFSC%2FiDUCIb%2F%2BObWkC6gsPrVEqP&X-Amz-Signature=1ede07d8746d61b4e28de1d4635ab8136b3b815ca99596cdc6eb967688a1a076&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
