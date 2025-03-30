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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSBMN5U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICfoZuw5ocs%2B9g7fAzlstJ%2BLmXXrbeYsOxh49ezXAwyeAiEAoVF1zNyRDYE%2FEDTAsrhDYPECgBYoQhSGiXUaohkh5PcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSdH297NRfL8CafBircA7UObzCTRJ%2B5qyYvL98OYqtf52M%2FaLCMm1UAczLsBpgKrD6z0U4rwry86TjaEu2x52CqZpgSGFzbJ5mz7KLSG%2BjgTc2hBsGfBw7T6ygXCwy3CQ1KVYXCS5OXk8BNIXGITJlfScUU5PirsXswTO2pCbeQYhQ01FjeBVxAYcgTV4mcvcSg2N8HYfzKn8Su4j%2B3INzb7hDm36L6C2rq6tKfR%2BglIcf0wt941P3HfkHDfOL0HMnjugle3MwXyz3%2Bz2P2ABIq%2FGeh85qCqMopJyIZgfdVXeVi6%2FqvB3dX7k0DZSlj0QS%2BRFYpAvkCPC6ZTMsc7vVrXNOCbUyq7SiaV52FLzFwtglMe80SzktbEtsTl0mtqzCQNCcHVk4NSb2AuiEiknSgCShWbNykysoR3KDH2qCBvgOsY7aqLpVQCYzkH%2FnD5TWn8P1aEn3SkWYTG%2BX%2FXGGMLFMMYQvsb3kMx8dgfYNQiTaZt4NBtWUMWPGNpuQ51S9sCPm99UFRt7xl4Cs3mQemcQFh6dRB8BZwJalsK2YwTYbPZDPccmbb%2B3Q9l4Lb3XUff%2F%2FX3cMLh%2FGu6H%2FzwnizYkAik%2Bm%2F8Tu96NxcNbTMAmSiWvCStqH5FGsx2%2Fam8qpCQ2grbouD3ItDMKbqor8GOqUBoiyb%2BWdnjAF15vPtLUElW1q%2B0w3xys16i2ToJxIuQztLVqQ9CQwefE%2B6MUWRkP5GYcP4n7IwwX%2FieyyNT3mFHXgziKDZTDNkYn57H7rvwDFeILPxsSg6oKrs36R0vekcQzAsLpkbpQJWsI1aLTbkohLfDbA0VvaA5oz0a1VoPHTLyUeQhYh2u6XEA%2F6oXSHJqO6Ccw%2Fit8rz6ikFOAZWpLvigTDV&X-Amz-Signature=1f6e1c755cb18c021d3e0bc6fe712ad5faab795cc869a7599959877119cd3f81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSBMN5U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICfoZuw5ocs%2B9g7fAzlstJ%2BLmXXrbeYsOxh49ezXAwyeAiEAoVF1zNyRDYE%2FEDTAsrhDYPECgBYoQhSGiXUaohkh5PcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSdH297NRfL8CafBircA7UObzCTRJ%2B5qyYvL98OYqtf52M%2FaLCMm1UAczLsBpgKrD6z0U4rwry86TjaEu2x52CqZpgSGFzbJ5mz7KLSG%2BjgTc2hBsGfBw7T6ygXCwy3CQ1KVYXCS5OXk8BNIXGITJlfScUU5PirsXswTO2pCbeQYhQ01FjeBVxAYcgTV4mcvcSg2N8HYfzKn8Su4j%2B3INzb7hDm36L6C2rq6tKfR%2BglIcf0wt941P3HfkHDfOL0HMnjugle3MwXyz3%2Bz2P2ABIq%2FGeh85qCqMopJyIZgfdVXeVi6%2FqvB3dX7k0DZSlj0QS%2BRFYpAvkCPC6ZTMsc7vVrXNOCbUyq7SiaV52FLzFwtglMe80SzktbEtsTl0mtqzCQNCcHVk4NSb2AuiEiknSgCShWbNykysoR3KDH2qCBvgOsY7aqLpVQCYzkH%2FnD5TWn8P1aEn3SkWYTG%2BX%2FXGGMLFMMYQvsb3kMx8dgfYNQiTaZt4NBtWUMWPGNpuQ51S9sCPm99UFRt7xl4Cs3mQemcQFh6dRB8BZwJalsK2YwTYbPZDPccmbb%2B3Q9l4Lb3XUff%2F%2FX3cMLh%2FGu6H%2FzwnizYkAik%2Bm%2F8Tu96NxcNbTMAmSiWvCStqH5FGsx2%2Fam8qpCQ2grbouD3ItDMKbqor8GOqUBoiyb%2BWdnjAF15vPtLUElW1q%2B0w3xys16i2ToJxIuQztLVqQ9CQwefE%2B6MUWRkP5GYcP4n7IwwX%2FieyyNT3mFHXgziKDZTDNkYn57H7rvwDFeILPxsSg6oKrs36R0vekcQzAsLpkbpQJWsI1aLTbkohLfDbA0VvaA5oz0a1VoPHTLyUeQhYh2u6XEA%2F6oXSHJqO6Ccw%2Fit8rz6ikFOAZWpLvigTDV&X-Amz-Signature=34900f8b9ebd7e1e2ddca8ef2fc03164f55dd1e1e47759bc3dc47d0c64ac1175&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSBMN5U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICfoZuw5ocs%2B9g7fAzlstJ%2BLmXXrbeYsOxh49ezXAwyeAiEAoVF1zNyRDYE%2FEDTAsrhDYPECgBYoQhSGiXUaohkh5PcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSdH297NRfL8CafBircA7UObzCTRJ%2B5qyYvL98OYqtf52M%2FaLCMm1UAczLsBpgKrD6z0U4rwry86TjaEu2x52CqZpgSGFzbJ5mz7KLSG%2BjgTc2hBsGfBw7T6ygXCwy3CQ1KVYXCS5OXk8BNIXGITJlfScUU5PirsXswTO2pCbeQYhQ01FjeBVxAYcgTV4mcvcSg2N8HYfzKn8Su4j%2B3INzb7hDm36L6C2rq6tKfR%2BglIcf0wt941P3HfkHDfOL0HMnjugle3MwXyz3%2Bz2P2ABIq%2FGeh85qCqMopJyIZgfdVXeVi6%2FqvB3dX7k0DZSlj0QS%2BRFYpAvkCPC6ZTMsc7vVrXNOCbUyq7SiaV52FLzFwtglMe80SzktbEtsTl0mtqzCQNCcHVk4NSb2AuiEiknSgCShWbNykysoR3KDH2qCBvgOsY7aqLpVQCYzkH%2FnD5TWn8P1aEn3SkWYTG%2BX%2FXGGMLFMMYQvsb3kMx8dgfYNQiTaZt4NBtWUMWPGNpuQ51S9sCPm99UFRt7xl4Cs3mQemcQFh6dRB8BZwJalsK2YwTYbPZDPccmbb%2B3Q9l4Lb3XUff%2F%2FX3cMLh%2FGu6H%2FzwnizYkAik%2Bm%2F8Tu96NxcNbTMAmSiWvCStqH5FGsx2%2Fam8qpCQ2grbouD3ItDMKbqor8GOqUBoiyb%2BWdnjAF15vPtLUElW1q%2B0w3xys16i2ToJxIuQztLVqQ9CQwefE%2B6MUWRkP5GYcP4n7IwwX%2FieyyNT3mFHXgziKDZTDNkYn57H7rvwDFeILPxsSg6oKrs36R0vekcQzAsLpkbpQJWsI1aLTbkohLfDbA0VvaA5oz0a1VoPHTLyUeQhYh2u6XEA%2F6oXSHJqO6Ccw%2Fit8rz6ikFOAZWpLvigTDV&X-Amz-Signature=dafa41b95bf14e03b130f6907883691e3be8034f70f0e963700cc7a99d22150d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSBMN5U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICfoZuw5ocs%2B9g7fAzlstJ%2BLmXXrbeYsOxh49ezXAwyeAiEAoVF1zNyRDYE%2FEDTAsrhDYPECgBYoQhSGiXUaohkh5PcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSdH297NRfL8CafBircA7UObzCTRJ%2B5qyYvL98OYqtf52M%2FaLCMm1UAczLsBpgKrD6z0U4rwry86TjaEu2x52CqZpgSGFzbJ5mz7KLSG%2BjgTc2hBsGfBw7T6ygXCwy3CQ1KVYXCS5OXk8BNIXGITJlfScUU5PirsXswTO2pCbeQYhQ01FjeBVxAYcgTV4mcvcSg2N8HYfzKn8Su4j%2B3INzb7hDm36L6C2rq6tKfR%2BglIcf0wt941P3HfkHDfOL0HMnjugle3MwXyz3%2Bz2P2ABIq%2FGeh85qCqMopJyIZgfdVXeVi6%2FqvB3dX7k0DZSlj0QS%2BRFYpAvkCPC6ZTMsc7vVrXNOCbUyq7SiaV52FLzFwtglMe80SzktbEtsTl0mtqzCQNCcHVk4NSb2AuiEiknSgCShWbNykysoR3KDH2qCBvgOsY7aqLpVQCYzkH%2FnD5TWn8P1aEn3SkWYTG%2BX%2FXGGMLFMMYQvsb3kMx8dgfYNQiTaZt4NBtWUMWPGNpuQ51S9sCPm99UFRt7xl4Cs3mQemcQFh6dRB8BZwJalsK2YwTYbPZDPccmbb%2B3Q9l4Lb3XUff%2F%2FX3cMLh%2FGu6H%2FzwnizYkAik%2Bm%2F8Tu96NxcNbTMAmSiWvCStqH5FGsx2%2Fam8qpCQ2grbouD3ItDMKbqor8GOqUBoiyb%2BWdnjAF15vPtLUElW1q%2B0w3xys16i2ToJxIuQztLVqQ9CQwefE%2B6MUWRkP5GYcP4n7IwwX%2FieyyNT3mFHXgziKDZTDNkYn57H7rvwDFeILPxsSg6oKrs36R0vekcQzAsLpkbpQJWsI1aLTbkohLfDbA0VvaA5oz0a1VoPHTLyUeQhYh2u6XEA%2F6oXSHJqO6Ccw%2Fit8rz6ikFOAZWpLvigTDV&X-Amz-Signature=4647447133c5527d2a314621e3862727ab6438d616f6d2c89e9062f92f195216&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSBMN5U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICfoZuw5ocs%2B9g7fAzlstJ%2BLmXXrbeYsOxh49ezXAwyeAiEAoVF1zNyRDYE%2FEDTAsrhDYPECgBYoQhSGiXUaohkh5PcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSdH297NRfL8CafBircA7UObzCTRJ%2B5qyYvL98OYqtf52M%2FaLCMm1UAczLsBpgKrD6z0U4rwry86TjaEu2x52CqZpgSGFzbJ5mz7KLSG%2BjgTc2hBsGfBw7T6ygXCwy3CQ1KVYXCS5OXk8BNIXGITJlfScUU5PirsXswTO2pCbeQYhQ01FjeBVxAYcgTV4mcvcSg2N8HYfzKn8Su4j%2B3INzb7hDm36L6C2rq6tKfR%2BglIcf0wt941P3HfkHDfOL0HMnjugle3MwXyz3%2Bz2P2ABIq%2FGeh85qCqMopJyIZgfdVXeVi6%2FqvB3dX7k0DZSlj0QS%2BRFYpAvkCPC6ZTMsc7vVrXNOCbUyq7SiaV52FLzFwtglMe80SzktbEtsTl0mtqzCQNCcHVk4NSb2AuiEiknSgCShWbNykysoR3KDH2qCBvgOsY7aqLpVQCYzkH%2FnD5TWn8P1aEn3SkWYTG%2BX%2FXGGMLFMMYQvsb3kMx8dgfYNQiTaZt4NBtWUMWPGNpuQ51S9sCPm99UFRt7xl4Cs3mQemcQFh6dRB8BZwJalsK2YwTYbPZDPccmbb%2B3Q9l4Lb3XUff%2F%2FX3cMLh%2FGu6H%2FzwnizYkAik%2Bm%2F8Tu96NxcNbTMAmSiWvCStqH5FGsx2%2Fam8qpCQ2grbouD3ItDMKbqor8GOqUBoiyb%2BWdnjAF15vPtLUElW1q%2B0w3xys16i2ToJxIuQztLVqQ9CQwefE%2B6MUWRkP5GYcP4n7IwwX%2FieyyNT3mFHXgziKDZTDNkYn57H7rvwDFeILPxsSg6oKrs36R0vekcQzAsLpkbpQJWsI1aLTbkohLfDbA0VvaA5oz0a1VoPHTLyUeQhYh2u6XEA%2F6oXSHJqO6Ccw%2Fit8rz6ikFOAZWpLvigTDV&X-Amz-Signature=37bc6578a43217ed1bdfabe59a57fe01e20131483dea8f1e62b868cfd0162bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSBMN5U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICfoZuw5ocs%2B9g7fAzlstJ%2BLmXXrbeYsOxh49ezXAwyeAiEAoVF1zNyRDYE%2FEDTAsrhDYPECgBYoQhSGiXUaohkh5PcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSdH297NRfL8CafBircA7UObzCTRJ%2B5qyYvL98OYqtf52M%2FaLCMm1UAczLsBpgKrD6z0U4rwry86TjaEu2x52CqZpgSGFzbJ5mz7KLSG%2BjgTc2hBsGfBw7T6ygXCwy3CQ1KVYXCS5OXk8BNIXGITJlfScUU5PirsXswTO2pCbeQYhQ01FjeBVxAYcgTV4mcvcSg2N8HYfzKn8Su4j%2B3INzb7hDm36L6C2rq6tKfR%2BglIcf0wt941P3HfkHDfOL0HMnjugle3MwXyz3%2Bz2P2ABIq%2FGeh85qCqMopJyIZgfdVXeVi6%2FqvB3dX7k0DZSlj0QS%2BRFYpAvkCPC6ZTMsc7vVrXNOCbUyq7SiaV52FLzFwtglMe80SzktbEtsTl0mtqzCQNCcHVk4NSb2AuiEiknSgCShWbNykysoR3KDH2qCBvgOsY7aqLpVQCYzkH%2FnD5TWn8P1aEn3SkWYTG%2BX%2FXGGMLFMMYQvsb3kMx8dgfYNQiTaZt4NBtWUMWPGNpuQ51S9sCPm99UFRt7xl4Cs3mQemcQFh6dRB8BZwJalsK2YwTYbPZDPccmbb%2B3Q9l4Lb3XUff%2F%2FX3cMLh%2FGu6H%2FzwnizYkAik%2Bm%2F8Tu96NxcNbTMAmSiWvCStqH5FGsx2%2Fam8qpCQ2grbouD3ItDMKbqor8GOqUBoiyb%2BWdnjAF15vPtLUElW1q%2B0w3xys16i2ToJxIuQztLVqQ9CQwefE%2B6MUWRkP5GYcP4n7IwwX%2FieyyNT3mFHXgziKDZTDNkYn57H7rvwDFeILPxsSg6oKrs36R0vekcQzAsLpkbpQJWsI1aLTbkohLfDbA0VvaA5oz0a1VoPHTLyUeQhYh2u6XEA%2F6oXSHJqO6Ccw%2Fit8rz6ikFOAZWpLvigTDV&X-Amz-Signature=03f45eb3af2f453f8f59561e9b51e3ee81859445753a52a114515caf33278ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSBMN5U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICfoZuw5ocs%2B9g7fAzlstJ%2BLmXXrbeYsOxh49ezXAwyeAiEAoVF1zNyRDYE%2FEDTAsrhDYPECgBYoQhSGiXUaohkh5PcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSdH297NRfL8CafBircA7UObzCTRJ%2B5qyYvL98OYqtf52M%2FaLCMm1UAczLsBpgKrD6z0U4rwry86TjaEu2x52CqZpgSGFzbJ5mz7KLSG%2BjgTc2hBsGfBw7T6ygXCwy3CQ1KVYXCS5OXk8BNIXGITJlfScUU5PirsXswTO2pCbeQYhQ01FjeBVxAYcgTV4mcvcSg2N8HYfzKn8Su4j%2B3INzb7hDm36L6C2rq6tKfR%2BglIcf0wt941P3HfkHDfOL0HMnjugle3MwXyz3%2Bz2P2ABIq%2FGeh85qCqMopJyIZgfdVXeVi6%2FqvB3dX7k0DZSlj0QS%2BRFYpAvkCPC6ZTMsc7vVrXNOCbUyq7SiaV52FLzFwtglMe80SzktbEtsTl0mtqzCQNCcHVk4NSb2AuiEiknSgCShWbNykysoR3KDH2qCBvgOsY7aqLpVQCYzkH%2FnD5TWn8P1aEn3SkWYTG%2BX%2FXGGMLFMMYQvsb3kMx8dgfYNQiTaZt4NBtWUMWPGNpuQ51S9sCPm99UFRt7xl4Cs3mQemcQFh6dRB8BZwJalsK2YwTYbPZDPccmbb%2B3Q9l4Lb3XUff%2F%2FX3cMLh%2FGu6H%2FzwnizYkAik%2Bm%2F8Tu96NxcNbTMAmSiWvCStqH5FGsx2%2Fam8qpCQ2grbouD3ItDMKbqor8GOqUBoiyb%2BWdnjAF15vPtLUElW1q%2B0w3xys16i2ToJxIuQztLVqQ9CQwefE%2B6MUWRkP5GYcP4n7IwwX%2FieyyNT3mFHXgziKDZTDNkYn57H7rvwDFeILPxsSg6oKrs36R0vekcQzAsLpkbpQJWsI1aLTbkohLfDbA0VvaA5oz0a1VoPHTLyUeQhYh2u6XEA%2F6oXSHJqO6Ccw%2Fit8rz6ikFOAZWpLvigTDV&X-Amz-Signature=37035af4653a768a1441a7ac10644c6006a1c28c4bbff332fb8c5bf118b59fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSBMN5U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICfoZuw5ocs%2B9g7fAzlstJ%2BLmXXrbeYsOxh49ezXAwyeAiEAoVF1zNyRDYE%2FEDTAsrhDYPECgBYoQhSGiXUaohkh5PcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSdH297NRfL8CafBircA7UObzCTRJ%2B5qyYvL98OYqtf52M%2FaLCMm1UAczLsBpgKrD6z0U4rwry86TjaEu2x52CqZpgSGFzbJ5mz7KLSG%2BjgTc2hBsGfBw7T6ygXCwy3CQ1KVYXCS5OXk8BNIXGITJlfScUU5PirsXswTO2pCbeQYhQ01FjeBVxAYcgTV4mcvcSg2N8HYfzKn8Su4j%2B3INzb7hDm36L6C2rq6tKfR%2BglIcf0wt941P3HfkHDfOL0HMnjugle3MwXyz3%2Bz2P2ABIq%2FGeh85qCqMopJyIZgfdVXeVi6%2FqvB3dX7k0DZSlj0QS%2BRFYpAvkCPC6ZTMsc7vVrXNOCbUyq7SiaV52FLzFwtglMe80SzktbEtsTl0mtqzCQNCcHVk4NSb2AuiEiknSgCShWbNykysoR3KDH2qCBvgOsY7aqLpVQCYzkH%2FnD5TWn8P1aEn3SkWYTG%2BX%2FXGGMLFMMYQvsb3kMx8dgfYNQiTaZt4NBtWUMWPGNpuQ51S9sCPm99UFRt7xl4Cs3mQemcQFh6dRB8BZwJalsK2YwTYbPZDPccmbb%2B3Q9l4Lb3XUff%2F%2FX3cMLh%2FGu6H%2FzwnizYkAik%2Bm%2F8Tu96NxcNbTMAmSiWvCStqH5FGsx2%2Fam8qpCQ2grbouD3ItDMKbqor8GOqUBoiyb%2BWdnjAF15vPtLUElW1q%2B0w3xys16i2ToJxIuQztLVqQ9CQwefE%2B6MUWRkP5GYcP4n7IwwX%2FieyyNT3mFHXgziKDZTDNkYn57H7rvwDFeILPxsSg6oKrs36R0vekcQzAsLpkbpQJWsI1aLTbkohLfDbA0VvaA5oz0a1VoPHTLyUeQhYh2u6XEA%2F6oXSHJqO6Ccw%2Fit8rz6ikFOAZWpLvigTDV&X-Amz-Signature=3bb6e7316179d5625c93dd25f4468309901186ccda29cde1ffdbc64a6ca04c61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
