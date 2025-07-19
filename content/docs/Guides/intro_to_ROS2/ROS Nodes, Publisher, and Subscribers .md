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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=8dfa2a45b73e4f2a415bd70b315dffcf77d5712e24afc6d45cc0b82f1ba43911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=43de564f69c354d6ca44c197f7f107a2a9240b2d283800189432062d166ee87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=93dc85e4eebbac73ae2da9885c6e6ae15abb2a9d94d13b42582b4fa2e0bcbba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=aa022532e402a1ed0af111f1f8b8ee52128e5ddd7155d8ff7afc55e1269a660a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=83b5748dd61aa3b5704edf0c8f5dfbfb3bf4466f241362add847b250c51143bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=956454ae711e04e5283a5aad4dbea05f3d935be9c6a18cb61ccbeb2e77cdc178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=c4aecf9906d1f9e063e2edec3942bdffdd1573ef1c9ebd3d5db677a67fac8747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=d38abbab767be7d95427f89663b670b911f90745ab8c15a818535acd5f34395d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
