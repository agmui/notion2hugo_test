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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CCIR4D%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBBS3gxDcIVEgs7OtJBr03eoFe2qlqPWCs1ZzwYdwFjAAiEA495KL%2FnHCuXiT8dnJBbYVUWckUWHcctsVJ9sejhOtgQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJxKXhADfUffIERn5yrcAzyqtNJDFFsjJxvE589ng2kc5FpsM0kA8djzbrROHqMrGtCpSs8oZbDsMgFQ3W%2BeQdn%2F9X933hkf703wp3W4gtamsALcIa4A%2FbbadSbAaUy%2BS%2BtZ%2FJ1K5uAp4CyMkH%2B54ugMoGzIkMBdZVJppPq1xZiuYkSZa7eQYqTe%2FWF9aq9Z2Uf03h41Z0Wiaze4F2xoNN30C6B%2BgGTiqEom5MNhOUbZ7eR5HREsfVjtvtgBH9olmWgr8fDphsZliagGCC1%2BTyVDP0I7MEie%2FzZrsqXEx8DYGxuU1QHQzPSQ71JHXx5ISHVo0ms56RXP9CfrfL9V0AI7sdFtc%2BwNH3SSYiXfzIi%2FSDaIcfrqGSErRRpC5XDYFhpAeh8M5kY5mG0X%2FG9U9K0dtrRaNxdzChXLWMIE7Fgi3qiuhpccgL9kDev7mSVbtKW5IpsC8L7EfKaSW4zKoTiW%2FgeSuKo%2BFpaskmP2kVg02jypf3KBG6QIUjsMq%2Fpg6UXdxsR1wiT%2FFFijVfVYK8fIpX05TNqhiwXm2hAQmbjLFmH6b%2FjUeu8h6WyLrtxg8%2B97yDCAQBgv%2BOzdkrmYFQBVfIujDn57%2FfO5ggjpA7BUc12lq%2FlwDO2oimWpQP32C4TGlkSfU5Q7kS2jMNG9r74GOqUBUsSXcuOZOtfoCm%2Be%2BQ%2FlyM8Gm0yHYRh4FQGTOORfHH5DQP485GygbvHfoIcAVJZnonhHAwEyX8ujYPL0dXH0GTMTEiO5sMAnUUOv3S%2BGcvXBPjL9opm8%2BhhdbI8s4WpLqJGuOpQVwSgCqzqXvVe%2BCah%2BsLljof745nerHoJQiQht%2FIU6aUtIqsvagS9jvY9bRKfhcK57UyN2Pvs8J65%2BisJMuXXh&X-Amz-Signature=086154e31ca3af0e70eb3a3b72b8acf5fb0a20335c01d21d98982ba84aa3f6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CCIR4D%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBBS3gxDcIVEgs7OtJBr03eoFe2qlqPWCs1ZzwYdwFjAAiEA495KL%2FnHCuXiT8dnJBbYVUWckUWHcctsVJ9sejhOtgQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJxKXhADfUffIERn5yrcAzyqtNJDFFsjJxvE589ng2kc5FpsM0kA8djzbrROHqMrGtCpSs8oZbDsMgFQ3W%2BeQdn%2F9X933hkf703wp3W4gtamsALcIa4A%2FbbadSbAaUy%2BS%2BtZ%2FJ1K5uAp4CyMkH%2B54ugMoGzIkMBdZVJppPq1xZiuYkSZa7eQYqTe%2FWF9aq9Z2Uf03h41Z0Wiaze4F2xoNN30C6B%2BgGTiqEom5MNhOUbZ7eR5HREsfVjtvtgBH9olmWgr8fDphsZliagGCC1%2BTyVDP0I7MEie%2FzZrsqXEx8DYGxuU1QHQzPSQ71JHXx5ISHVo0ms56RXP9CfrfL9V0AI7sdFtc%2BwNH3SSYiXfzIi%2FSDaIcfrqGSErRRpC5XDYFhpAeh8M5kY5mG0X%2FG9U9K0dtrRaNxdzChXLWMIE7Fgi3qiuhpccgL9kDev7mSVbtKW5IpsC8L7EfKaSW4zKoTiW%2FgeSuKo%2BFpaskmP2kVg02jypf3KBG6QIUjsMq%2Fpg6UXdxsR1wiT%2FFFijVfVYK8fIpX05TNqhiwXm2hAQmbjLFmH6b%2FjUeu8h6WyLrtxg8%2B97yDCAQBgv%2BOzdkrmYFQBVfIujDn57%2FfO5ggjpA7BUc12lq%2FlwDO2oimWpQP32C4TGlkSfU5Q7kS2jMNG9r74GOqUBUsSXcuOZOtfoCm%2Be%2BQ%2FlyM8Gm0yHYRh4FQGTOORfHH5DQP485GygbvHfoIcAVJZnonhHAwEyX8ujYPL0dXH0GTMTEiO5sMAnUUOv3S%2BGcvXBPjL9opm8%2BhhdbI8s4WpLqJGuOpQVwSgCqzqXvVe%2BCah%2BsLljof745nerHoJQiQht%2FIU6aUtIqsvagS9jvY9bRKfhcK57UyN2Pvs8J65%2BisJMuXXh&X-Amz-Signature=af2b3cf9e49bc69e6fc12bff3243b75782b6f31afad66d6f41b3f13ed959207d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CCIR4D%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBBS3gxDcIVEgs7OtJBr03eoFe2qlqPWCs1ZzwYdwFjAAiEA495KL%2FnHCuXiT8dnJBbYVUWckUWHcctsVJ9sejhOtgQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJxKXhADfUffIERn5yrcAzyqtNJDFFsjJxvE589ng2kc5FpsM0kA8djzbrROHqMrGtCpSs8oZbDsMgFQ3W%2BeQdn%2F9X933hkf703wp3W4gtamsALcIa4A%2FbbadSbAaUy%2BS%2BtZ%2FJ1K5uAp4CyMkH%2B54ugMoGzIkMBdZVJppPq1xZiuYkSZa7eQYqTe%2FWF9aq9Z2Uf03h41Z0Wiaze4F2xoNN30C6B%2BgGTiqEom5MNhOUbZ7eR5HREsfVjtvtgBH9olmWgr8fDphsZliagGCC1%2BTyVDP0I7MEie%2FzZrsqXEx8DYGxuU1QHQzPSQ71JHXx5ISHVo0ms56RXP9CfrfL9V0AI7sdFtc%2BwNH3SSYiXfzIi%2FSDaIcfrqGSErRRpC5XDYFhpAeh8M5kY5mG0X%2FG9U9K0dtrRaNxdzChXLWMIE7Fgi3qiuhpccgL9kDev7mSVbtKW5IpsC8L7EfKaSW4zKoTiW%2FgeSuKo%2BFpaskmP2kVg02jypf3KBG6QIUjsMq%2Fpg6UXdxsR1wiT%2FFFijVfVYK8fIpX05TNqhiwXm2hAQmbjLFmH6b%2FjUeu8h6WyLrtxg8%2B97yDCAQBgv%2BOzdkrmYFQBVfIujDn57%2FfO5ggjpA7BUc12lq%2FlwDO2oimWpQP32C4TGlkSfU5Q7kS2jMNG9r74GOqUBUsSXcuOZOtfoCm%2Be%2BQ%2FlyM8Gm0yHYRh4FQGTOORfHH5DQP485GygbvHfoIcAVJZnonhHAwEyX8ujYPL0dXH0GTMTEiO5sMAnUUOv3S%2BGcvXBPjL9opm8%2BhhdbI8s4WpLqJGuOpQVwSgCqzqXvVe%2BCah%2BsLljof745nerHoJQiQht%2FIU6aUtIqsvagS9jvY9bRKfhcK57UyN2Pvs8J65%2BisJMuXXh&X-Amz-Signature=100742469f6daad6e56c48a6c6ebb32dd7be4056f88e3cadc61cd210d3b65557&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CCIR4D%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBBS3gxDcIVEgs7OtJBr03eoFe2qlqPWCs1ZzwYdwFjAAiEA495KL%2FnHCuXiT8dnJBbYVUWckUWHcctsVJ9sejhOtgQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJxKXhADfUffIERn5yrcAzyqtNJDFFsjJxvE589ng2kc5FpsM0kA8djzbrROHqMrGtCpSs8oZbDsMgFQ3W%2BeQdn%2F9X933hkf703wp3W4gtamsALcIa4A%2FbbadSbAaUy%2BS%2BtZ%2FJ1K5uAp4CyMkH%2B54ugMoGzIkMBdZVJppPq1xZiuYkSZa7eQYqTe%2FWF9aq9Z2Uf03h41Z0Wiaze4F2xoNN30C6B%2BgGTiqEom5MNhOUbZ7eR5HREsfVjtvtgBH9olmWgr8fDphsZliagGCC1%2BTyVDP0I7MEie%2FzZrsqXEx8DYGxuU1QHQzPSQ71JHXx5ISHVo0ms56RXP9CfrfL9V0AI7sdFtc%2BwNH3SSYiXfzIi%2FSDaIcfrqGSErRRpC5XDYFhpAeh8M5kY5mG0X%2FG9U9K0dtrRaNxdzChXLWMIE7Fgi3qiuhpccgL9kDev7mSVbtKW5IpsC8L7EfKaSW4zKoTiW%2FgeSuKo%2BFpaskmP2kVg02jypf3KBG6QIUjsMq%2Fpg6UXdxsR1wiT%2FFFijVfVYK8fIpX05TNqhiwXm2hAQmbjLFmH6b%2FjUeu8h6WyLrtxg8%2B97yDCAQBgv%2BOzdkrmYFQBVfIujDn57%2FfO5ggjpA7BUc12lq%2FlwDO2oimWpQP32C4TGlkSfU5Q7kS2jMNG9r74GOqUBUsSXcuOZOtfoCm%2Be%2BQ%2FlyM8Gm0yHYRh4FQGTOORfHH5DQP485GygbvHfoIcAVJZnonhHAwEyX8ujYPL0dXH0GTMTEiO5sMAnUUOv3S%2BGcvXBPjL9opm8%2BhhdbI8s4WpLqJGuOpQVwSgCqzqXvVe%2BCah%2BsLljof745nerHoJQiQht%2FIU6aUtIqsvagS9jvY9bRKfhcK57UyN2Pvs8J65%2BisJMuXXh&X-Amz-Signature=31803e47a7b399fd6e46b3148f037d2ae5abca9b071bbf71ffbb0e1274b16a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CCIR4D%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBBS3gxDcIVEgs7OtJBr03eoFe2qlqPWCs1ZzwYdwFjAAiEA495KL%2FnHCuXiT8dnJBbYVUWckUWHcctsVJ9sejhOtgQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJxKXhADfUffIERn5yrcAzyqtNJDFFsjJxvE589ng2kc5FpsM0kA8djzbrROHqMrGtCpSs8oZbDsMgFQ3W%2BeQdn%2F9X933hkf703wp3W4gtamsALcIa4A%2FbbadSbAaUy%2BS%2BtZ%2FJ1K5uAp4CyMkH%2B54ugMoGzIkMBdZVJppPq1xZiuYkSZa7eQYqTe%2FWF9aq9Z2Uf03h41Z0Wiaze4F2xoNN30C6B%2BgGTiqEom5MNhOUbZ7eR5HREsfVjtvtgBH9olmWgr8fDphsZliagGCC1%2BTyVDP0I7MEie%2FzZrsqXEx8DYGxuU1QHQzPSQ71JHXx5ISHVo0ms56RXP9CfrfL9V0AI7sdFtc%2BwNH3SSYiXfzIi%2FSDaIcfrqGSErRRpC5XDYFhpAeh8M5kY5mG0X%2FG9U9K0dtrRaNxdzChXLWMIE7Fgi3qiuhpccgL9kDev7mSVbtKW5IpsC8L7EfKaSW4zKoTiW%2FgeSuKo%2BFpaskmP2kVg02jypf3KBG6QIUjsMq%2Fpg6UXdxsR1wiT%2FFFijVfVYK8fIpX05TNqhiwXm2hAQmbjLFmH6b%2FjUeu8h6WyLrtxg8%2B97yDCAQBgv%2BOzdkrmYFQBVfIujDn57%2FfO5ggjpA7BUc12lq%2FlwDO2oimWpQP32C4TGlkSfU5Q7kS2jMNG9r74GOqUBUsSXcuOZOtfoCm%2Be%2BQ%2FlyM8Gm0yHYRh4FQGTOORfHH5DQP485GygbvHfoIcAVJZnonhHAwEyX8ujYPL0dXH0GTMTEiO5sMAnUUOv3S%2BGcvXBPjL9opm8%2BhhdbI8s4WpLqJGuOpQVwSgCqzqXvVe%2BCah%2BsLljof745nerHoJQiQht%2FIU6aUtIqsvagS9jvY9bRKfhcK57UyN2Pvs8J65%2BisJMuXXh&X-Amz-Signature=ab267116eef24efadb5f942004492338cd18051d5e0eb2b03101069b82d417eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CCIR4D%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBBS3gxDcIVEgs7OtJBr03eoFe2qlqPWCs1ZzwYdwFjAAiEA495KL%2FnHCuXiT8dnJBbYVUWckUWHcctsVJ9sejhOtgQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJxKXhADfUffIERn5yrcAzyqtNJDFFsjJxvE589ng2kc5FpsM0kA8djzbrROHqMrGtCpSs8oZbDsMgFQ3W%2BeQdn%2F9X933hkf703wp3W4gtamsALcIa4A%2FbbadSbAaUy%2BS%2BtZ%2FJ1K5uAp4CyMkH%2B54ugMoGzIkMBdZVJppPq1xZiuYkSZa7eQYqTe%2FWF9aq9Z2Uf03h41Z0Wiaze4F2xoNN30C6B%2BgGTiqEom5MNhOUbZ7eR5HREsfVjtvtgBH9olmWgr8fDphsZliagGCC1%2BTyVDP0I7MEie%2FzZrsqXEx8DYGxuU1QHQzPSQ71JHXx5ISHVo0ms56RXP9CfrfL9V0AI7sdFtc%2BwNH3SSYiXfzIi%2FSDaIcfrqGSErRRpC5XDYFhpAeh8M5kY5mG0X%2FG9U9K0dtrRaNxdzChXLWMIE7Fgi3qiuhpccgL9kDev7mSVbtKW5IpsC8L7EfKaSW4zKoTiW%2FgeSuKo%2BFpaskmP2kVg02jypf3KBG6QIUjsMq%2Fpg6UXdxsR1wiT%2FFFijVfVYK8fIpX05TNqhiwXm2hAQmbjLFmH6b%2FjUeu8h6WyLrtxg8%2B97yDCAQBgv%2BOzdkrmYFQBVfIujDn57%2FfO5ggjpA7BUc12lq%2FlwDO2oimWpQP32C4TGlkSfU5Q7kS2jMNG9r74GOqUBUsSXcuOZOtfoCm%2Be%2BQ%2FlyM8Gm0yHYRh4FQGTOORfHH5DQP485GygbvHfoIcAVJZnonhHAwEyX8ujYPL0dXH0GTMTEiO5sMAnUUOv3S%2BGcvXBPjL9opm8%2BhhdbI8s4WpLqJGuOpQVwSgCqzqXvVe%2BCah%2BsLljof745nerHoJQiQht%2FIU6aUtIqsvagS9jvY9bRKfhcK57UyN2Pvs8J65%2BisJMuXXh&X-Amz-Signature=95fb352620dd465d01bbd89bf7c0780cfa512e360ff703e56cc4a46e9f75237a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CCIR4D%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBBS3gxDcIVEgs7OtJBr03eoFe2qlqPWCs1ZzwYdwFjAAiEA495KL%2FnHCuXiT8dnJBbYVUWckUWHcctsVJ9sejhOtgQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJxKXhADfUffIERn5yrcAzyqtNJDFFsjJxvE589ng2kc5FpsM0kA8djzbrROHqMrGtCpSs8oZbDsMgFQ3W%2BeQdn%2F9X933hkf703wp3W4gtamsALcIa4A%2FbbadSbAaUy%2BS%2BtZ%2FJ1K5uAp4CyMkH%2B54ugMoGzIkMBdZVJppPq1xZiuYkSZa7eQYqTe%2FWF9aq9Z2Uf03h41Z0Wiaze4F2xoNN30C6B%2BgGTiqEom5MNhOUbZ7eR5HREsfVjtvtgBH9olmWgr8fDphsZliagGCC1%2BTyVDP0I7MEie%2FzZrsqXEx8DYGxuU1QHQzPSQ71JHXx5ISHVo0ms56RXP9CfrfL9V0AI7sdFtc%2BwNH3SSYiXfzIi%2FSDaIcfrqGSErRRpC5XDYFhpAeh8M5kY5mG0X%2FG9U9K0dtrRaNxdzChXLWMIE7Fgi3qiuhpccgL9kDev7mSVbtKW5IpsC8L7EfKaSW4zKoTiW%2FgeSuKo%2BFpaskmP2kVg02jypf3KBG6QIUjsMq%2Fpg6UXdxsR1wiT%2FFFijVfVYK8fIpX05TNqhiwXm2hAQmbjLFmH6b%2FjUeu8h6WyLrtxg8%2B97yDCAQBgv%2BOzdkrmYFQBVfIujDn57%2FfO5ggjpA7BUc12lq%2FlwDO2oimWpQP32C4TGlkSfU5Q7kS2jMNG9r74GOqUBUsSXcuOZOtfoCm%2Be%2BQ%2FlyM8Gm0yHYRh4FQGTOORfHH5DQP485GygbvHfoIcAVJZnonhHAwEyX8ujYPL0dXH0GTMTEiO5sMAnUUOv3S%2BGcvXBPjL9opm8%2BhhdbI8s4WpLqJGuOpQVwSgCqzqXvVe%2BCah%2BsLljof745nerHoJQiQht%2FIU6aUtIqsvagS9jvY9bRKfhcK57UyN2Pvs8J65%2BisJMuXXh&X-Amz-Signature=d1183f75a2baa77d27473857e11b0e60116922ea1bf156630d2a47c2d75c9245&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CCIR4D%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBBS3gxDcIVEgs7OtJBr03eoFe2qlqPWCs1ZzwYdwFjAAiEA495KL%2FnHCuXiT8dnJBbYVUWckUWHcctsVJ9sejhOtgQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJxKXhADfUffIERn5yrcAzyqtNJDFFsjJxvE589ng2kc5FpsM0kA8djzbrROHqMrGtCpSs8oZbDsMgFQ3W%2BeQdn%2F9X933hkf703wp3W4gtamsALcIa4A%2FbbadSbAaUy%2BS%2BtZ%2FJ1K5uAp4CyMkH%2B54ugMoGzIkMBdZVJppPq1xZiuYkSZa7eQYqTe%2FWF9aq9Z2Uf03h41Z0Wiaze4F2xoNN30C6B%2BgGTiqEom5MNhOUbZ7eR5HREsfVjtvtgBH9olmWgr8fDphsZliagGCC1%2BTyVDP0I7MEie%2FzZrsqXEx8DYGxuU1QHQzPSQ71JHXx5ISHVo0ms56RXP9CfrfL9V0AI7sdFtc%2BwNH3SSYiXfzIi%2FSDaIcfrqGSErRRpC5XDYFhpAeh8M5kY5mG0X%2FG9U9K0dtrRaNxdzChXLWMIE7Fgi3qiuhpccgL9kDev7mSVbtKW5IpsC8L7EfKaSW4zKoTiW%2FgeSuKo%2BFpaskmP2kVg02jypf3KBG6QIUjsMq%2Fpg6UXdxsR1wiT%2FFFijVfVYK8fIpX05TNqhiwXm2hAQmbjLFmH6b%2FjUeu8h6WyLrtxg8%2B97yDCAQBgv%2BOzdkrmYFQBVfIujDn57%2FfO5ggjpA7BUc12lq%2FlwDO2oimWpQP32C4TGlkSfU5Q7kS2jMNG9r74GOqUBUsSXcuOZOtfoCm%2Be%2BQ%2FlyM8Gm0yHYRh4FQGTOORfHH5DQP485GygbvHfoIcAVJZnonhHAwEyX8ujYPL0dXH0GTMTEiO5sMAnUUOv3S%2BGcvXBPjL9opm8%2BhhdbI8s4WpLqJGuOpQVwSgCqzqXvVe%2BCah%2BsLljof745nerHoJQiQht%2FIU6aUtIqsvagS9jvY9bRKfhcK57UyN2Pvs8J65%2BisJMuXXh&X-Amz-Signature=bb0f9616097f24bf32a26cfb0ed0a730edbfec69a34bd56f0f554aa9de8cec72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
