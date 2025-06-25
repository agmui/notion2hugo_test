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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5MDEHY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDEfLPWrjjZedxBjLDqI1aMFk5jVKq%2BlGxpieZRaMkPeAIgQscf9VWNR1txktaaYhm1fB1kd44lRgPvFq%2B49Oj0KAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBtWcNYq%2FFrJIdB7JircA2%2B4VoiqBkuk19hwFFsYhVLQ1eDpIfO%2FcMSWoJ23PPhMWWdHrAEQaIPl%2B9IuXVekBXGt93pq9t%2FUpgh13NDymZQitCVIwd425j67uLQVvFUSdOqLKceUDHgdEOWeKIH4D3%2BwM7SyqDuqlNJfSqDXEsjlP2nWxlAuRkNAkcE9jOHBzN8xxLZv%2FVcqYBV%2BT7C0GFqVx7aVbstF7M7ktEdxupQxj8U9Jrzm6tKbsH8%2B2cLdojU3hEW641w6zjY1a3MPfSydU5zIT7Ce70dpkGkLdL3uSJcILPtTUJAwACY7WMJQ5WUTYJE%2BpVFfU2Y52m%2FMghgUejpKmUcDSrPjt%2B4BO2OBgwyAHOAqyGNgSjGcR8lCGrLXSh0Qlj1SmEzg0qQgr%2FWdYXm54EasDEBSmF7rgOTHYW%2F3RobVM3da9AN4AFAYjX92IIfdnzTj3%2Fme6nf%2FAeEUed7CaYQejwofm7QiqH09Z5hJW31iKYXoS1VuYgfU0MsvmxrmiV%2FQbyJtLeEgxI%2FxTpyXIqkW2EYty8aIN%2F%2BurwSzDbmabum3xtbyK%2BpCG390jaPEHZUxB0AdnR5iRHj2Is2dNuYGcR3IjW1puIjIAjcOWDIEYfhR0UnIVg0CsMm12tCpS24RGw%2BAMKGl7sIGOqUBJDuqqJDeUGOIHdl6HIcRHVwZVOlDdFBCwJJBekcKkvNgn4uHBj%2FnHLvpobsvjxV8T%2FA1E93AZoUSwm46Hbzl3Tv5jUuq5ay%2FDd9AWfbeIO4OZSeeU3SMCaNxXIH0PQDEEA7UJb9aLqD3sEt9MHjyOlMNqS4%2BMi3BIz341Nq4Vz%2FVIav3AqsWzqNDry%2BXx8VzIDGEDq2klOTU1zyVY9c%2FPc5Wp9hU&X-Amz-Signature=91b07d4e9f341803066b26b9113e766c3d8d9b5da9310396952722ae3ea66fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5MDEHY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDEfLPWrjjZedxBjLDqI1aMFk5jVKq%2BlGxpieZRaMkPeAIgQscf9VWNR1txktaaYhm1fB1kd44lRgPvFq%2B49Oj0KAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBtWcNYq%2FFrJIdB7JircA2%2B4VoiqBkuk19hwFFsYhVLQ1eDpIfO%2FcMSWoJ23PPhMWWdHrAEQaIPl%2B9IuXVekBXGt93pq9t%2FUpgh13NDymZQitCVIwd425j67uLQVvFUSdOqLKceUDHgdEOWeKIH4D3%2BwM7SyqDuqlNJfSqDXEsjlP2nWxlAuRkNAkcE9jOHBzN8xxLZv%2FVcqYBV%2BT7C0GFqVx7aVbstF7M7ktEdxupQxj8U9Jrzm6tKbsH8%2B2cLdojU3hEW641w6zjY1a3MPfSydU5zIT7Ce70dpkGkLdL3uSJcILPtTUJAwACY7WMJQ5WUTYJE%2BpVFfU2Y52m%2FMghgUejpKmUcDSrPjt%2B4BO2OBgwyAHOAqyGNgSjGcR8lCGrLXSh0Qlj1SmEzg0qQgr%2FWdYXm54EasDEBSmF7rgOTHYW%2F3RobVM3da9AN4AFAYjX92IIfdnzTj3%2Fme6nf%2FAeEUed7CaYQejwofm7QiqH09Z5hJW31iKYXoS1VuYgfU0MsvmxrmiV%2FQbyJtLeEgxI%2FxTpyXIqkW2EYty8aIN%2F%2BurwSzDbmabum3xtbyK%2BpCG390jaPEHZUxB0AdnR5iRHj2Is2dNuYGcR3IjW1puIjIAjcOWDIEYfhR0UnIVg0CsMm12tCpS24RGw%2BAMKGl7sIGOqUBJDuqqJDeUGOIHdl6HIcRHVwZVOlDdFBCwJJBekcKkvNgn4uHBj%2FnHLvpobsvjxV8T%2FA1E93AZoUSwm46Hbzl3Tv5jUuq5ay%2FDd9AWfbeIO4OZSeeU3SMCaNxXIH0PQDEEA7UJb9aLqD3sEt9MHjyOlMNqS4%2BMi3BIz341Nq4Vz%2FVIav3AqsWzqNDry%2BXx8VzIDGEDq2klOTU1zyVY9c%2FPc5Wp9hU&X-Amz-Signature=1ec2020da26489777466a9246e6ca3b771a1813892a46431989653dd6b2d3f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5MDEHY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDEfLPWrjjZedxBjLDqI1aMFk5jVKq%2BlGxpieZRaMkPeAIgQscf9VWNR1txktaaYhm1fB1kd44lRgPvFq%2B49Oj0KAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBtWcNYq%2FFrJIdB7JircA2%2B4VoiqBkuk19hwFFsYhVLQ1eDpIfO%2FcMSWoJ23PPhMWWdHrAEQaIPl%2B9IuXVekBXGt93pq9t%2FUpgh13NDymZQitCVIwd425j67uLQVvFUSdOqLKceUDHgdEOWeKIH4D3%2BwM7SyqDuqlNJfSqDXEsjlP2nWxlAuRkNAkcE9jOHBzN8xxLZv%2FVcqYBV%2BT7C0GFqVx7aVbstF7M7ktEdxupQxj8U9Jrzm6tKbsH8%2B2cLdojU3hEW641w6zjY1a3MPfSydU5zIT7Ce70dpkGkLdL3uSJcILPtTUJAwACY7WMJQ5WUTYJE%2BpVFfU2Y52m%2FMghgUejpKmUcDSrPjt%2B4BO2OBgwyAHOAqyGNgSjGcR8lCGrLXSh0Qlj1SmEzg0qQgr%2FWdYXm54EasDEBSmF7rgOTHYW%2F3RobVM3da9AN4AFAYjX92IIfdnzTj3%2Fme6nf%2FAeEUed7CaYQejwofm7QiqH09Z5hJW31iKYXoS1VuYgfU0MsvmxrmiV%2FQbyJtLeEgxI%2FxTpyXIqkW2EYty8aIN%2F%2BurwSzDbmabum3xtbyK%2BpCG390jaPEHZUxB0AdnR5iRHj2Is2dNuYGcR3IjW1puIjIAjcOWDIEYfhR0UnIVg0CsMm12tCpS24RGw%2BAMKGl7sIGOqUBJDuqqJDeUGOIHdl6HIcRHVwZVOlDdFBCwJJBekcKkvNgn4uHBj%2FnHLvpobsvjxV8T%2FA1E93AZoUSwm46Hbzl3Tv5jUuq5ay%2FDd9AWfbeIO4OZSeeU3SMCaNxXIH0PQDEEA7UJb9aLqD3sEt9MHjyOlMNqS4%2BMi3BIz341Nq4Vz%2FVIav3AqsWzqNDry%2BXx8VzIDGEDq2klOTU1zyVY9c%2FPc5Wp9hU&X-Amz-Signature=d1e8865391b96ddbaba9d27bb78c00610ffd66fd35c732350d6078cbba14b217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5MDEHY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDEfLPWrjjZedxBjLDqI1aMFk5jVKq%2BlGxpieZRaMkPeAIgQscf9VWNR1txktaaYhm1fB1kd44lRgPvFq%2B49Oj0KAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBtWcNYq%2FFrJIdB7JircA2%2B4VoiqBkuk19hwFFsYhVLQ1eDpIfO%2FcMSWoJ23PPhMWWdHrAEQaIPl%2B9IuXVekBXGt93pq9t%2FUpgh13NDymZQitCVIwd425j67uLQVvFUSdOqLKceUDHgdEOWeKIH4D3%2BwM7SyqDuqlNJfSqDXEsjlP2nWxlAuRkNAkcE9jOHBzN8xxLZv%2FVcqYBV%2BT7C0GFqVx7aVbstF7M7ktEdxupQxj8U9Jrzm6tKbsH8%2B2cLdojU3hEW641w6zjY1a3MPfSydU5zIT7Ce70dpkGkLdL3uSJcILPtTUJAwACY7WMJQ5WUTYJE%2BpVFfU2Y52m%2FMghgUejpKmUcDSrPjt%2B4BO2OBgwyAHOAqyGNgSjGcR8lCGrLXSh0Qlj1SmEzg0qQgr%2FWdYXm54EasDEBSmF7rgOTHYW%2F3RobVM3da9AN4AFAYjX92IIfdnzTj3%2Fme6nf%2FAeEUed7CaYQejwofm7QiqH09Z5hJW31iKYXoS1VuYgfU0MsvmxrmiV%2FQbyJtLeEgxI%2FxTpyXIqkW2EYty8aIN%2F%2BurwSzDbmabum3xtbyK%2BpCG390jaPEHZUxB0AdnR5iRHj2Is2dNuYGcR3IjW1puIjIAjcOWDIEYfhR0UnIVg0CsMm12tCpS24RGw%2BAMKGl7sIGOqUBJDuqqJDeUGOIHdl6HIcRHVwZVOlDdFBCwJJBekcKkvNgn4uHBj%2FnHLvpobsvjxV8T%2FA1E93AZoUSwm46Hbzl3Tv5jUuq5ay%2FDd9AWfbeIO4OZSeeU3SMCaNxXIH0PQDEEA7UJb9aLqD3sEt9MHjyOlMNqS4%2BMi3BIz341Nq4Vz%2FVIav3AqsWzqNDry%2BXx8VzIDGEDq2klOTU1zyVY9c%2FPc5Wp9hU&X-Amz-Signature=0a4c2461dc1cbe4292dbbd3ff68a08fc4c263632cb36c508da11435debf7bf31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5MDEHY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDEfLPWrjjZedxBjLDqI1aMFk5jVKq%2BlGxpieZRaMkPeAIgQscf9VWNR1txktaaYhm1fB1kd44lRgPvFq%2B49Oj0KAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBtWcNYq%2FFrJIdB7JircA2%2B4VoiqBkuk19hwFFsYhVLQ1eDpIfO%2FcMSWoJ23PPhMWWdHrAEQaIPl%2B9IuXVekBXGt93pq9t%2FUpgh13NDymZQitCVIwd425j67uLQVvFUSdOqLKceUDHgdEOWeKIH4D3%2BwM7SyqDuqlNJfSqDXEsjlP2nWxlAuRkNAkcE9jOHBzN8xxLZv%2FVcqYBV%2BT7C0GFqVx7aVbstF7M7ktEdxupQxj8U9Jrzm6tKbsH8%2B2cLdojU3hEW641w6zjY1a3MPfSydU5zIT7Ce70dpkGkLdL3uSJcILPtTUJAwACY7WMJQ5WUTYJE%2BpVFfU2Y52m%2FMghgUejpKmUcDSrPjt%2B4BO2OBgwyAHOAqyGNgSjGcR8lCGrLXSh0Qlj1SmEzg0qQgr%2FWdYXm54EasDEBSmF7rgOTHYW%2F3RobVM3da9AN4AFAYjX92IIfdnzTj3%2Fme6nf%2FAeEUed7CaYQejwofm7QiqH09Z5hJW31iKYXoS1VuYgfU0MsvmxrmiV%2FQbyJtLeEgxI%2FxTpyXIqkW2EYty8aIN%2F%2BurwSzDbmabum3xtbyK%2BpCG390jaPEHZUxB0AdnR5iRHj2Is2dNuYGcR3IjW1puIjIAjcOWDIEYfhR0UnIVg0CsMm12tCpS24RGw%2BAMKGl7sIGOqUBJDuqqJDeUGOIHdl6HIcRHVwZVOlDdFBCwJJBekcKkvNgn4uHBj%2FnHLvpobsvjxV8T%2FA1E93AZoUSwm46Hbzl3Tv5jUuq5ay%2FDd9AWfbeIO4OZSeeU3SMCaNxXIH0PQDEEA7UJb9aLqD3sEt9MHjyOlMNqS4%2BMi3BIz341Nq4Vz%2FVIav3AqsWzqNDry%2BXx8VzIDGEDq2klOTU1zyVY9c%2FPc5Wp9hU&X-Amz-Signature=d61f207b551757330d24e6434edc4e3e4929943f42b6d18183f29891c9ccb272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5MDEHY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDEfLPWrjjZedxBjLDqI1aMFk5jVKq%2BlGxpieZRaMkPeAIgQscf9VWNR1txktaaYhm1fB1kd44lRgPvFq%2B49Oj0KAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBtWcNYq%2FFrJIdB7JircA2%2B4VoiqBkuk19hwFFsYhVLQ1eDpIfO%2FcMSWoJ23PPhMWWdHrAEQaIPl%2B9IuXVekBXGt93pq9t%2FUpgh13NDymZQitCVIwd425j67uLQVvFUSdOqLKceUDHgdEOWeKIH4D3%2BwM7SyqDuqlNJfSqDXEsjlP2nWxlAuRkNAkcE9jOHBzN8xxLZv%2FVcqYBV%2BT7C0GFqVx7aVbstF7M7ktEdxupQxj8U9Jrzm6tKbsH8%2B2cLdojU3hEW641w6zjY1a3MPfSydU5zIT7Ce70dpkGkLdL3uSJcILPtTUJAwACY7WMJQ5WUTYJE%2BpVFfU2Y52m%2FMghgUejpKmUcDSrPjt%2B4BO2OBgwyAHOAqyGNgSjGcR8lCGrLXSh0Qlj1SmEzg0qQgr%2FWdYXm54EasDEBSmF7rgOTHYW%2F3RobVM3da9AN4AFAYjX92IIfdnzTj3%2Fme6nf%2FAeEUed7CaYQejwofm7QiqH09Z5hJW31iKYXoS1VuYgfU0MsvmxrmiV%2FQbyJtLeEgxI%2FxTpyXIqkW2EYty8aIN%2F%2BurwSzDbmabum3xtbyK%2BpCG390jaPEHZUxB0AdnR5iRHj2Is2dNuYGcR3IjW1puIjIAjcOWDIEYfhR0UnIVg0CsMm12tCpS24RGw%2BAMKGl7sIGOqUBJDuqqJDeUGOIHdl6HIcRHVwZVOlDdFBCwJJBekcKkvNgn4uHBj%2FnHLvpobsvjxV8T%2FA1E93AZoUSwm46Hbzl3Tv5jUuq5ay%2FDd9AWfbeIO4OZSeeU3SMCaNxXIH0PQDEEA7UJb9aLqD3sEt9MHjyOlMNqS4%2BMi3BIz341Nq4Vz%2FVIav3AqsWzqNDry%2BXx8VzIDGEDq2klOTU1zyVY9c%2FPc5Wp9hU&X-Amz-Signature=67580ce634caddb614566527628a3b0e91c0c054f90054f9151e49955b358aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5MDEHY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDEfLPWrjjZedxBjLDqI1aMFk5jVKq%2BlGxpieZRaMkPeAIgQscf9VWNR1txktaaYhm1fB1kd44lRgPvFq%2B49Oj0KAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBtWcNYq%2FFrJIdB7JircA2%2B4VoiqBkuk19hwFFsYhVLQ1eDpIfO%2FcMSWoJ23PPhMWWdHrAEQaIPl%2B9IuXVekBXGt93pq9t%2FUpgh13NDymZQitCVIwd425j67uLQVvFUSdOqLKceUDHgdEOWeKIH4D3%2BwM7SyqDuqlNJfSqDXEsjlP2nWxlAuRkNAkcE9jOHBzN8xxLZv%2FVcqYBV%2BT7C0GFqVx7aVbstF7M7ktEdxupQxj8U9Jrzm6tKbsH8%2B2cLdojU3hEW641w6zjY1a3MPfSydU5zIT7Ce70dpkGkLdL3uSJcILPtTUJAwACY7WMJQ5WUTYJE%2BpVFfU2Y52m%2FMghgUejpKmUcDSrPjt%2B4BO2OBgwyAHOAqyGNgSjGcR8lCGrLXSh0Qlj1SmEzg0qQgr%2FWdYXm54EasDEBSmF7rgOTHYW%2F3RobVM3da9AN4AFAYjX92IIfdnzTj3%2Fme6nf%2FAeEUed7CaYQejwofm7QiqH09Z5hJW31iKYXoS1VuYgfU0MsvmxrmiV%2FQbyJtLeEgxI%2FxTpyXIqkW2EYty8aIN%2F%2BurwSzDbmabum3xtbyK%2BpCG390jaPEHZUxB0AdnR5iRHj2Is2dNuYGcR3IjW1puIjIAjcOWDIEYfhR0UnIVg0CsMm12tCpS24RGw%2BAMKGl7sIGOqUBJDuqqJDeUGOIHdl6HIcRHVwZVOlDdFBCwJJBekcKkvNgn4uHBj%2FnHLvpobsvjxV8T%2FA1E93AZoUSwm46Hbzl3Tv5jUuq5ay%2FDd9AWfbeIO4OZSeeU3SMCaNxXIH0PQDEEA7UJb9aLqD3sEt9MHjyOlMNqS4%2BMi3BIz341Nq4Vz%2FVIav3AqsWzqNDry%2BXx8VzIDGEDq2klOTU1zyVY9c%2FPc5Wp9hU&X-Amz-Signature=05b52bcb52dbcc96b64c11032af535325120d12a6ec3409130677e68ed354abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5MDEHY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDEfLPWrjjZedxBjLDqI1aMFk5jVKq%2BlGxpieZRaMkPeAIgQscf9VWNR1txktaaYhm1fB1kd44lRgPvFq%2B49Oj0KAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBtWcNYq%2FFrJIdB7JircA2%2B4VoiqBkuk19hwFFsYhVLQ1eDpIfO%2FcMSWoJ23PPhMWWdHrAEQaIPl%2B9IuXVekBXGt93pq9t%2FUpgh13NDymZQitCVIwd425j67uLQVvFUSdOqLKceUDHgdEOWeKIH4D3%2BwM7SyqDuqlNJfSqDXEsjlP2nWxlAuRkNAkcE9jOHBzN8xxLZv%2FVcqYBV%2BT7C0GFqVx7aVbstF7M7ktEdxupQxj8U9Jrzm6tKbsH8%2B2cLdojU3hEW641w6zjY1a3MPfSydU5zIT7Ce70dpkGkLdL3uSJcILPtTUJAwACY7WMJQ5WUTYJE%2BpVFfU2Y52m%2FMghgUejpKmUcDSrPjt%2B4BO2OBgwyAHOAqyGNgSjGcR8lCGrLXSh0Qlj1SmEzg0qQgr%2FWdYXm54EasDEBSmF7rgOTHYW%2F3RobVM3da9AN4AFAYjX92IIfdnzTj3%2Fme6nf%2FAeEUed7CaYQejwofm7QiqH09Z5hJW31iKYXoS1VuYgfU0MsvmxrmiV%2FQbyJtLeEgxI%2FxTpyXIqkW2EYty8aIN%2F%2BurwSzDbmabum3xtbyK%2BpCG390jaPEHZUxB0AdnR5iRHj2Is2dNuYGcR3IjW1puIjIAjcOWDIEYfhR0UnIVg0CsMm12tCpS24RGw%2BAMKGl7sIGOqUBJDuqqJDeUGOIHdl6HIcRHVwZVOlDdFBCwJJBekcKkvNgn4uHBj%2FnHLvpobsvjxV8T%2FA1E93AZoUSwm46Hbzl3Tv5jUuq5ay%2FDd9AWfbeIO4OZSeeU3SMCaNxXIH0PQDEEA7UJb9aLqD3sEt9MHjyOlMNqS4%2BMi3BIz341Nq4Vz%2FVIav3AqsWzqNDry%2BXx8VzIDGEDq2klOTU1zyVY9c%2FPc5Wp9hU&X-Amz-Signature=3dff1e3dee88223e0bd9a42a6ecee0b8c7affc34e160b49ffdb4535445d667f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
