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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTM72SM6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPWEl6vIPRJaX0jqKYd3Qq1HUgdOqO3us%2FTpVfXXxGQIhAJZ3rlq1cc43Xg96CDrxnVrqQQZDvDStbMcdilkSpLKpKv8DCD0QABoMNjM3NDIzMTgzODA1IgwpYQRxxyE3DVpVQyIq3ANAVt%2FLlCrZ693ZztOuSnIPNEu9QW%2FJ2REdu4HAMx9tzjYOye35NLeJi213dGC55bj1ttVfJYQ%2F5pWjczGKqwz%2F7guD4LcApNXGuF4lqIZybzt%2F%2BQLuxZcg7CZ4ArpZ5q9V1Ch%2FT2Xa24nVSb2uVVlOkAoWIPaqcTw%2BIMI0K38jjh%2BX1O2BuJNxU6srsGI6rsUAv5P9xPbhzoF26iA9uuVbj%2BHQTnvTK86%2Be38E3IyhK3GIsO5qHnflQQOYBLb%2FJmI8xqDp4%2B3cS1R7cg%2Fe80ykgHij5DtAVaKeJI5Jq8PqeNE3FTgsNwExUCz09jnDOiVJjaCaA05D%2FDxwqN%2F79JhuJjtO3Il7L4VdN80kj32QgBS7c0oV3BwEqQF0ue3v93EzgZcB9M6KbIYbgCvDHTgPetqPOs4sg7bg6uzGdSrA3ZQXIQ6WL48oB%2FLhVcG%2BZFFnShSdqyB52%2B7SFH6RyVkpd%2FaZX7nNW3rht8cB0G1bC75tj5N%2BgiHsLDqh07LkDe8HL1syBWIkqj%2Bp26AA53GVLr1hvWULPfETkvNOcnzty5gPuqMBU%2Fx4rLkOoj%2BOjSaTPLZUjhbJBbFcJO%2F0FdZNp8hBgvJrEai%2B9eDqtINYbP84YQkPc5spJN3aOTCPu%2FXEBjqkAUuqRETb5wYQ4ODw%2B8Z9KOhOEBNPIcG4un9ko%2BlGzVxhs%2Fvp2rrZA%2FYiYqGg7gFkpsfqOGTlkMXA%2FFV7SMk4ieixzVmsAY0KqDPNX7gkahJY3ZZYTsqCRl5LiYpzA9wYD49hPEED8inO73ulWzaH1nSb5pz0EdScZgTdXRo2gIrTxLnc3gLgFTLdd0PZ0iRqMmhrYvkHIPIoeIdn4%2BBo6Dp3jD0K&X-Amz-Signature=dbed22cd73f485db997b247e01734ef4354fc9ad49d43d14f6c98c444d2ef0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTM72SM6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPWEl6vIPRJaX0jqKYd3Qq1HUgdOqO3us%2FTpVfXXxGQIhAJZ3rlq1cc43Xg96CDrxnVrqQQZDvDStbMcdilkSpLKpKv8DCD0QABoMNjM3NDIzMTgzODA1IgwpYQRxxyE3DVpVQyIq3ANAVt%2FLlCrZ693ZztOuSnIPNEu9QW%2FJ2REdu4HAMx9tzjYOye35NLeJi213dGC55bj1ttVfJYQ%2F5pWjczGKqwz%2F7guD4LcApNXGuF4lqIZybzt%2F%2BQLuxZcg7CZ4ArpZ5q9V1Ch%2FT2Xa24nVSb2uVVlOkAoWIPaqcTw%2BIMI0K38jjh%2BX1O2BuJNxU6srsGI6rsUAv5P9xPbhzoF26iA9uuVbj%2BHQTnvTK86%2Be38E3IyhK3GIsO5qHnflQQOYBLb%2FJmI8xqDp4%2B3cS1R7cg%2Fe80ykgHij5DtAVaKeJI5Jq8PqeNE3FTgsNwExUCz09jnDOiVJjaCaA05D%2FDxwqN%2F79JhuJjtO3Il7L4VdN80kj32QgBS7c0oV3BwEqQF0ue3v93EzgZcB9M6KbIYbgCvDHTgPetqPOs4sg7bg6uzGdSrA3ZQXIQ6WL48oB%2FLhVcG%2BZFFnShSdqyB52%2B7SFH6RyVkpd%2FaZX7nNW3rht8cB0G1bC75tj5N%2BgiHsLDqh07LkDe8HL1syBWIkqj%2Bp26AA53GVLr1hvWULPfETkvNOcnzty5gPuqMBU%2Fx4rLkOoj%2BOjSaTPLZUjhbJBbFcJO%2F0FdZNp8hBgvJrEai%2B9eDqtINYbP84YQkPc5spJN3aOTCPu%2FXEBjqkAUuqRETb5wYQ4ODw%2B8Z9KOhOEBNPIcG4un9ko%2BlGzVxhs%2Fvp2rrZA%2FYiYqGg7gFkpsfqOGTlkMXA%2FFV7SMk4ieixzVmsAY0KqDPNX7gkahJY3ZZYTsqCRl5LiYpzA9wYD49hPEED8inO73ulWzaH1nSb5pz0EdScZgTdXRo2gIrTxLnc3gLgFTLdd0PZ0iRqMmhrYvkHIPIoeIdn4%2BBo6Dp3jD0K&X-Amz-Signature=5fbbf45e4046adc44483de3ef1aed9075633fd420a7dfc2b00abf21c0f5ecea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTM72SM6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPWEl6vIPRJaX0jqKYd3Qq1HUgdOqO3us%2FTpVfXXxGQIhAJZ3rlq1cc43Xg96CDrxnVrqQQZDvDStbMcdilkSpLKpKv8DCD0QABoMNjM3NDIzMTgzODA1IgwpYQRxxyE3DVpVQyIq3ANAVt%2FLlCrZ693ZztOuSnIPNEu9QW%2FJ2REdu4HAMx9tzjYOye35NLeJi213dGC55bj1ttVfJYQ%2F5pWjczGKqwz%2F7guD4LcApNXGuF4lqIZybzt%2F%2BQLuxZcg7CZ4ArpZ5q9V1Ch%2FT2Xa24nVSb2uVVlOkAoWIPaqcTw%2BIMI0K38jjh%2BX1O2BuJNxU6srsGI6rsUAv5P9xPbhzoF26iA9uuVbj%2BHQTnvTK86%2Be38E3IyhK3GIsO5qHnflQQOYBLb%2FJmI8xqDp4%2B3cS1R7cg%2Fe80ykgHij5DtAVaKeJI5Jq8PqeNE3FTgsNwExUCz09jnDOiVJjaCaA05D%2FDxwqN%2F79JhuJjtO3Il7L4VdN80kj32QgBS7c0oV3BwEqQF0ue3v93EzgZcB9M6KbIYbgCvDHTgPetqPOs4sg7bg6uzGdSrA3ZQXIQ6WL48oB%2FLhVcG%2BZFFnShSdqyB52%2B7SFH6RyVkpd%2FaZX7nNW3rht8cB0G1bC75tj5N%2BgiHsLDqh07LkDe8HL1syBWIkqj%2Bp26AA53GVLr1hvWULPfETkvNOcnzty5gPuqMBU%2Fx4rLkOoj%2BOjSaTPLZUjhbJBbFcJO%2F0FdZNp8hBgvJrEai%2B9eDqtINYbP84YQkPc5spJN3aOTCPu%2FXEBjqkAUuqRETb5wYQ4ODw%2B8Z9KOhOEBNPIcG4un9ko%2BlGzVxhs%2Fvp2rrZA%2FYiYqGg7gFkpsfqOGTlkMXA%2FFV7SMk4ieixzVmsAY0KqDPNX7gkahJY3ZZYTsqCRl5LiYpzA9wYD49hPEED8inO73ulWzaH1nSb5pz0EdScZgTdXRo2gIrTxLnc3gLgFTLdd0PZ0iRqMmhrYvkHIPIoeIdn4%2BBo6Dp3jD0K&X-Amz-Signature=2a0ac91285a66db12a43c51846bccccb84194d998795d106fc7da5cd20b6e7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTM72SM6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPWEl6vIPRJaX0jqKYd3Qq1HUgdOqO3us%2FTpVfXXxGQIhAJZ3rlq1cc43Xg96CDrxnVrqQQZDvDStbMcdilkSpLKpKv8DCD0QABoMNjM3NDIzMTgzODA1IgwpYQRxxyE3DVpVQyIq3ANAVt%2FLlCrZ693ZztOuSnIPNEu9QW%2FJ2REdu4HAMx9tzjYOye35NLeJi213dGC55bj1ttVfJYQ%2F5pWjczGKqwz%2F7guD4LcApNXGuF4lqIZybzt%2F%2BQLuxZcg7CZ4ArpZ5q9V1Ch%2FT2Xa24nVSb2uVVlOkAoWIPaqcTw%2BIMI0K38jjh%2BX1O2BuJNxU6srsGI6rsUAv5P9xPbhzoF26iA9uuVbj%2BHQTnvTK86%2Be38E3IyhK3GIsO5qHnflQQOYBLb%2FJmI8xqDp4%2B3cS1R7cg%2Fe80ykgHij5DtAVaKeJI5Jq8PqeNE3FTgsNwExUCz09jnDOiVJjaCaA05D%2FDxwqN%2F79JhuJjtO3Il7L4VdN80kj32QgBS7c0oV3BwEqQF0ue3v93EzgZcB9M6KbIYbgCvDHTgPetqPOs4sg7bg6uzGdSrA3ZQXIQ6WL48oB%2FLhVcG%2BZFFnShSdqyB52%2B7SFH6RyVkpd%2FaZX7nNW3rht8cB0G1bC75tj5N%2BgiHsLDqh07LkDe8HL1syBWIkqj%2Bp26AA53GVLr1hvWULPfETkvNOcnzty5gPuqMBU%2Fx4rLkOoj%2BOjSaTPLZUjhbJBbFcJO%2F0FdZNp8hBgvJrEai%2B9eDqtINYbP84YQkPc5spJN3aOTCPu%2FXEBjqkAUuqRETb5wYQ4ODw%2B8Z9KOhOEBNPIcG4un9ko%2BlGzVxhs%2Fvp2rrZA%2FYiYqGg7gFkpsfqOGTlkMXA%2FFV7SMk4ieixzVmsAY0KqDPNX7gkahJY3ZZYTsqCRl5LiYpzA9wYD49hPEED8inO73ulWzaH1nSb5pz0EdScZgTdXRo2gIrTxLnc3gLgFTLdd0PZ0iRqMmhrYvkHIPIoeIdn4%2BBo6Dp3jD0K&X-Amz-Signature=24fdb2d74247adad888da0def1ccb13f6172b3d088e9f8dc2af305731e496f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTM72SM6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPWEl6vIPRJaX0jqKYd3Qq1HUgdOqO3us%2FTpVfXXxGQIhAJZ3rlq1cc43Xg96CDrxnVrqQQZDvDStbMcdilkSpLKpKv8DCD0QABoMNjM3NDIzMTgzODA1IgwpYQRxxyE3DVpVQyIq3ANAVt%2FLlCrZ693ZztOuSnIPNEu9QW%2FJ2REdu4HAMx9tzjYOye35NLeJi213dGC55bj1ttVfJYQ%2F5pWjczGKqwz%2F7guD4LcApNXGuF4lqIZybzt%2F%2BQLuxZcg7CZ4ArpZ5q9V1Ch%2FT2Xa24nVSb2uVVlOkAoWIPaqcTw%2BIMI0K38jjh%2BX1O2BuJNxU6srsGI6rsUAv5P9xPbhzoF26iA9uuVbj%2BHQTnvTK86%2Be38E3IyhK3GIsO5qHnflQQOYBLb%2FJmI8xqDp4%2B3cS1R7cg%2Fe80ykgHij5DtAVaKeJI5Jq8PqeNE3FTgsNwExUCz09jnDOiVJjaCaA05D%2FDxwqN%2F79JhuJjtO3Il7L4VdN80kj32QgBS7c0oV3BwEqQF0ue3v93EzgZcB9M6KbIYbgCvDHTgPetqPOs4sg7bg6uzGdSrA3ZQXIQ6WL48oB%2FLhVcG%2BZFFnShSdqyB52%2B7SFH6RyVkpd%2FaZX7nNW3rht8cB0G1bC75tj5N%2BgiHsLDqh07LkDe8HL1syBWIkqj%2Bp26AA53GVLr1hvWULPfETkvNOcnzty5gPuqMBU%2Fx4rLkOoj%2BOjSaTPLZUjhbJBbFcJO%2F0FdZNp8hBgvJrEai%2B9eDqtINYbP84YQkPc5spJN3aOTCPu%2FXEBjqkAUuqRETb5wYQ4ODw%2B8Z9KOhOEBNPIcG4un9ko%2BlGzVxhs%2Fvp2rrZA%2FYiYqGg7gFkpsfqOGTlkMXA%2FFV7SMk4ieixzVmsAY0KqDPNX7gkahJY3ZZYTsqCRl5LiYpzA9wYD49hPEED8inO73ulWzaH1nSb5pz0EdScZgTdXRo2gIrTxLnc3gLgFTLdd0PZ0iRqMmhrYvkHIPIoeIdn4%2BBo6Dp3jD0K&X-Amz-Signature=6d0dd661742cb8a637f9f98778e65491d920f266bf34402ef7961ef1bb4fc13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTM72SM6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPWEl6vIPRJaX0jqKYd3Qq1HUgdOqO3us%2FTpVfXXxGQIhAJZ3rlq1cc43Xg96CDrxnVrqQQZDvDStbMcdilkSpLKpKv8DCD0QABoMNjM3NDIzMTgzODA1IgwpYQRxxyE3DVpVQyIq3ANAVt%2FLlCrZ693ZztOuSnIPNEu9QW%2FJ2REdu4HAMx9tzjYOye35NLeJi213dGC55bj1ttVfJYQ%2F5pWjczGKqwz%2F7guD4LcApNXGuF4lqIZybzt%2F%2BQLuxZcg7CZ4ArpZ5q9V1Ch%2FT2Xa24nVSb2uVVlOkAoWIPaqcTw%2BIMI0K38jjh%2BX1O2BuJNxU6srsGI6rsUAv5P9xPbhzoF26iA9uuVbj%2BHQTnvTK86%2Be38E3IyhK3GIsO5qHnflQQOYBLb%2FJmI8xqDp4%2B3cS1R7cg%2Fe80ykgHij5DtAVaKeJI5Jq8PqeNE3FTgsNwExUCz09jnDOiVJjaCaA05D%2FDxwqN%2F79JhuJjtO3Il7L4VdN80kj32QgBS7c0oV3BwEqQF0ue3v93EzgZcB9M6KbIYbgCvDHTgPetqPOs4sg7bg6uzGdSrA3ZQXIQ6WL48oB%2FLhVcG%2BZFFnShSdqyB52%2B7SFH6RyVkpd%2FaZX7nNW3rht8cB0G1bC75tj5N%2BgiHsLDqh07LkDe8HL1syBWIkqj%2Bp26AA53GVLr1hvWULPfETkvNOcnzty5gPuqMBU%2Fx4rLkOoj%2BOjSaTPLZUjhbJBbFcJO%2F0FdZNp8hBgvJrEai%2B9eDqtINYbP84YQkPc5spJN3aOTCPu%2FXEBjqkAUuqRETb5wYQ4ODw%2B8Z9KOhOEBNPIcG4un9ko%2BlGzVxhs%2Fvp2rrZA%2FYiYqGg7gFkpsfqOGTlkMXA%2FFV7SMk4ieixzVmsAY0KqDPNX7gkahJY3ZZYTsqCRl5LiYpzA9wYD49hPEED8inO73ulWzaH1nSb5pz0EdScZgTdXRo2gIrTxLnc3gLgFTLdd0PZ0iRqMmhrYvkHIPIoeIdn4%2BBo6Dp3jD0K&X-Amz-Signature=7cd0c238975dd5aa3ee40bd2fd6d466f478c4ab9a79f169b31dcfc8243468544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTM72SM6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPWEl6vIPRJaX0jqKYd3Qq1HUgdOqO3us%2FTpVfXXxGQIhAJZ3rlq1cc43Xg96CDrxnVrqQQZDvDStbMcdilkSpLKpKv8DCD0QABoMNjM3NDIzMTgzODA1IgwpYQRxxyE3DVpVQyIq3ANAVt%2FLlCrZ693ZztOuSnIPNEu9QW%2FJ2REdu4HAMx9tzjYOye35NLeJi213dGC55bj1ttVfJYQ%2F5pWjczGKqwz%2F7guD4LcApNXGuF4lqIZybzt%2F%2BQLuxZcg7CZ4ArpZ5q9V1Ch%2FT2Xa24nVSb2uVVlOkAoWIPaqcTw%2BIMI0K38jjh%2BX1O2BuJNxU6srsGI6rsUAv5P9xPbhzoF26iA9uuVbj%2BHQTnvTK86%2Be38E3IyhK3GIsO5qHnflQQOYBLb%2FJmI8xqDp4%2B3cS1R7cg%2Fe80ykgHij5DtAVaKeJI5Jq8PqeNE3FTgsNwExUCz09jnDOiVJjaCaA05D%2FDxwqN%2F79JhuJjtO3Il7L4VdN80kj32QgBS7c0oV3BwEqQF0ue3v93EzgZcB9M6KbIYbgCvDHTgPetqPOs4sg7bg6uzGdSrA3ZQXIQ6WL48oB%2FLhVcG%2BZFFnShSdqyB52%2B7SFH6RyVkpd%2FaZX7nNW3rht8cB0G1bC75tj5N%2BgiHsLDqh07LkDe8HL1syBWIkqj%2Bp26AA53GVLr1hvWULPfETkvNOcnzty5gPuqMBU%2Fx4rLkOoj%2BOjSaTPLZUjhbJBbFcJO%2F0FdZNp8hBgvJrEai%2B9eDqtINYbP84YQkPc5spJN3aOTCPu%2FXEBjqkAUuqRETb5wYQ4ODw%2B8Z9KOhOEBNPIcG4un9ko%2BlGzVxhs%2Fvp2rrZA%2FYiYqGg7gFkpsfqOGTlkMXA%2FFV7SMk4ieixzVmsAY0KqDPNX7gkahJY3ZZYTsqCRl5LiYpzA9wYD49hPEED8inO73ulWzaH1nSb5pz0EdScZgTdXRo2gIrTxLnc3gLgFTLdd0PZ0iRqMmhrYvkHIPIoeIdn4%2BBo6Dp3jD0K&X-Amz-Signature=51952e6abc89941f34a01acecc73864a99576edb3dd77071179fd098b3346698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTM72SM6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPWEl6vIPRJaX0jqKYd3Qq1HUgdOqO3us%2FTpVfXXxGQIhAJZ3rlq1cc43Xg96CDrxnVrqQQZDvDStbMcdilkSpLKpKv8DCD0QABoMNjM3NDIzMTgzODA1IgwpYQRxxyE3DVpVQyIq3ANAVt%2FLlCrZ693ZztOuSnIPNEu9QW%2FJ2REdu4HAMx9tzjYOye35NLeJi213dGC55bj1ttVfJYQ%2F5pWjczGKqwz%2F7guD4LcApNXGuF4lqIZybzt%2F%2BQLuxZcg7CZ4ArpZ5q9V1Ch%2FT2Xa24nVSb2uVVlOkAoWIPaqcTw%2BIMI0K38jjh%2BX1O2BuJNxU6srsGI6rsUAv5P9xPbhzoF26iA9uuVbj%2BHQTnvTK86%2Be38E3IyhK3GIsO5qHnflQQOYBLb%2FJmI8xqDp4%2B3cS1R7cg%2Fe80ykgHij5DtAVaKeJI5Jq8PqeNE3FTgsNwExUCz09jnDOiVJjaCaA05D%2FDxwqN%2F79JhuJjtO3Il7L4VdN80kj32QgBS7c0oV3BwEqQF0ue3v93EzgZcB9M6KbIYbgCvDHTgPetqPOs4sg7bg6uzGdSrA3ZQXIQ6WL48oB%2FLhVcG%2BZFFnShSdqyB52%2B7SFH6RyVkpd%2FaZX7nNW3rht8cB0G1bC75tj5N%2BgiHsLDqh07LkDe8HL1syBWIkqj%2Bp26AA53GVLr1hvWULPfETkvNOcnzty5gPuqMBU%2Fx4rLkOoj%2BOjSaTPLZUjhbJBbFcJO%2F0FdZNp8hBgvJrEai%2B9eDqtINYbP84YQkPc5spJN3aOTCPu%2FXEBjqkAUuqRETb5wYQ4ODw%2B8Z9KOhOEBNPIcG4un9ko%2BlGzVxhs%2Fvp2rrZA%2FYiYqGg7gFkpsfqOGTlkMXA%2FFV7SMk4ieixzVmsAY0KqDPNX7gkahJY3ZZYTsqCRl5LiYpzA9wYD49hPEED8inO73ulWzaH1nSb5pz0EdScZgTdXRo2gIrTxLnc3gLgFTLdd0PZ0iRqMmhrYvkHIPIoeIdn4%2BBo6Dp3jD0K&X-Amz-Signature=36e00299b6a7aebcd8355a9795965852d9cce6f350d19343ead23e819a169a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
