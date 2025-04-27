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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUY6N6KP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHVos4Jav2Z0xpAmCzqRUsH09TGL%2F5PX7%2FXLOFvZUXAIgL2lTUsW2kpbZzm1DC67mkIJ3NV%2BeUnbEA7M8CTmNw4Mq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDM%2Bf%2FjTmE0%2FCjB6V1CrcA3mA1U1%2Bdae9eG0hkPQsVbP8lnRPfB1ydtsktwfbmNMYbtMN1L5R7ebZ00leiULxK4TP29%2BkV0TVZXeC31CiWhrKI%2BgWticMwlnUqAGkupvhffHbOOXbhSckXsRnIwI1NMvFtrTg9w1yiKsC24tiM0OlpJPYTPl7M7wO4lbaOYAHJenbIfi8PzDI7EbIhl2%2BKD9qpEvzT6dgNsifHe6ctABnHQT9Z%2By9%2F73MzLQQUxc6puF5vbzPzPD%2F5WSTwf3AR5NiWFW663tdht8YUjrbeJcSeLB5eVbyswDrKkPYNzKbWkQNd7WCa35K91okQOPB%2BrmTK3gx9%2B6sEVRq6YqqG5GiFCQPl5fTz6KCD530Q7KJByl4E1K%2FPJ1Dme%2Bis%2BJjo%2FtJQphiUuMw2tt4e49QLTHGBI7c%2FKs9ACLIWU55UFVXYIiCrQX1YmBtRbhKFe6Nong4i%2FiUgBxfmGQZyFcBu%2FxVWjcFSS%2BZSEqS4J7O3bTSglAqZw2VaGXuhcY8bBMlZcJj7OohlnCG%2F%2FV%2BT23g6Vf68vSCpEZ68UyQOrqkkWA4DVmGWCB8btfwCN7lrrllty44U0PQKE0K5X8n1lzf0XknEPOmm6ALEQO8GmCkCMHX4jxZcNxtHiXwGvbqMKvxucAGOqUB2cQXsnG4QOvEx80D%2BSvlDw5ey1AKx8nCZtKdbLkk5VOsvWZnAF6bzDwJWwtnpDGIE6culNXXZbwQR6fM7kKEhIU%2BqQbCDW%2BW%2BrcbXBvTLx4yhHwyWerM60rwdrdI3gtNR14Lz%2F39kQJH033wB%2Fh1DfJd7F9whL19jdphIjhDaWumYSx5hMVX9XVFRyol9W7Nd1Xj7lX4CV30jlRjEyyekXWvUwTS&X-Amz-Signature=776f5cfc6b06e18560c53178758850e8d1b91010a76ba1ea237112ea88fadf3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUY6N6KP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHVos4Jav2Z0xpAmCzqRUsH09TGL%2F5PX7%2FXLOFvZUXAIgL2lTUsW2kpbZzm1DC67mkIJ3NV%2BeUnbEA7M8CTmNw4Mq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDM%2Bf%2FjTmE0%2FCjB6V1CrcA3mA1U1%2Bdae9eG0hkPQsVbP8lnRPfB1ydtsktwfbmNMYbtMN1L5R7ebZ00leiULxK4TP29%2BkV0TVZXeC31CiWhrKI%2BgWticMwlnUqAGkupvhffHbOOXbhSckXsRnIwI1NMvFtrTg9w1yiKsC24tiM0OlpJPYTPl7M7wO4lbaOYAHJenbIfi8PzDI7EbIhl2%2BKD9qpEvzT6dgNsifHe6ctABnHQT9Z%2By9%2F73MzLQQUxc6puF5vbzPzPD%2F5WSTwf3AR5NiWFW663tdht8YUjrbeJcSeLB5eVbyswDrKkPYNzKbWkQNd7WCa35K91okQOPB%2BrmTK3gx9%2B6sEVRq6YqqG5GiFCQPl5fTz6KCD530Q7KJByl4E1K%2FPJ1Dme%2Bis%2BJjo%2FtJQphiUuMw2tt4e49QLTHGBI7c%2FKs9ACLIWU55UFVXYIiCrQX1YmBtRbhKFe6Nong4i%2FiUgBxfmGQZyFcBu%2FxVWjcFSS%2BZSEqS4J7O3bTSglAqZw2VaGXuhcY8bBMlZcJj7OohlnCG%2F%2FV%2BT23g6Vf68vSCpEZ68UyQOrqkkWA4DVmGWCB8btfwCN7lrrllty44U0PQKE0K5X8n1lzf0XknEPOmm6ALEQO8GmCkCMHX4jxZcNxtHiXwGvbqMKvxucAGOqUB2cQXsnG4QOvEx80D%2BSvlDw5ey1AKx8nCZtKdbLkk5VOsvWZnAF6bzDwJWwtnpDGIE6culNXXZbwQR6fM7kKEhIU%2BqQbCDW%2BW%2BrcbXBvTLx4yhHwyWerM60rwdrdI3gtNR14Lz%2F39kQJH033wB%2Fh1DfJd7F9whL19jdphIjhDaWumYSx5hMVX9XVFRyol9W7Nd1Xj7lX4CV30jlRjEyyekXWvUwTS&X-Amz-Signature=113ab4bf9c8be3eaa9eaa93df3b96966f4c386d7a22e70676010348f1c084a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUY6N6KP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHVos4Jav2Z0xpAmCzqRUsH09TGL%2F5PX7%2FXLOFvZUXAIgL2lTUsW2kpbZzm1DC67mkIJ3NV%2BeUnbEA7M8CTmNw4Mq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDM%2Bf%2FjTmE0%2FCjB6V1CrcA3mA1U1%2Bdae9eG0hkPQsVbP8lnRPfB1ydtsktwfbmNMYbtMN1L5R7ebZ00leiULxK4TP29%2BkV0TVZXeC31CiWhrKI%2BgWticMwlnUqAGkupvhffHbOOXbhSckXsRnIwI1NMvFtrTg9w1yiKsC24tiM0OlpJPYTPl7M7wO4lbaOYAHJenbIfi8PzDI7EbIhl2%2BKD9qpEvzT6dgNsifHe6ctABnHQT9Z%2By9%2F73MzLQQUxc6puF5vbzPzPD%2F5WSTwf3AR5NiWFW663tdht8YUjrbeJcSeLB5eVbyswDrKkPYNzKbWkQNd7WCa35K91okQOPB%2BrmTK3gx9%2B6sEVRq6YqqG5GiFCQPl5fTz6KCD530Q7KJByl4E1K%2FPJ1Dme%2Bis%2BJjo%2FtJQphiUuMw2tt4e49QLTHGBI7c%2FKs9ACLIWU55UFVXYIiCrQX1YmBtRbhKFe6Nong4i%2FiUgBxfmGQZyFcBu%2FxVWjcFSS%2BZSEqS4J7O3bTSglAqZw2VaGXuhcY8bBMlZcJj7OohlnCG%2F%2FV%2BT23g6Vf68vSCpEZ68UyQOrqkkWA4DVmGWCB8btfwCN7lrrllty44U0PQKE0K5X8n1lzf0XknEPOmm6ALEQO8GmCkCMHX4jxZcNxtHiXwGvbqMKvxucAGOqUB2cQXsnG4QOvEx80D%2BSvlDw5ey1AKx8nCZtKdbLkk5VOsvWZnAF6bzDwJWwtnpDGIE6culNXXZbwQR6fM7kKEhIU%2BqQbCDW%2BW%2BrcbXBvTLx4yhHwyWerM60rwdrdI3gtNR14Lz%2F39kQJH033wB%2Fh1DfJd7F9whL19jdphIjhDaWumYSx5hMVX9XVFRyol9W7Nd1Xj7lX4CV30jlRjEyyekXWvUwTS&X-Amz-Signature=99d0dd1f2722716c2548d868886073c0d07709d3bb8071057150c62e4dab40fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUY6N6KP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHVos4Jav2Z0xpAmCzqRUsH09TGL%2F5PX7%2FXLOFvZUXAIgL2lTUsW2kpbZzm1DC67mkIJ3NV%2BeUnbEA7M8CTmNw4Mq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDM%2Bf%2FjTmE0%2FCjB6V1CrcA3mA1U1%2Bdae9eG0hkPQsVbP8lnRPfB1ydtsktwfbmNMYbtMN1L5R7ebZ00leiULxK4TP29%2BkV0TVZXeC31CiWhrKI%2BgWticMwlnUqAGkupvhffHbOOXbhSckXsRnIwI1NMvFtrTg9w1yiKsC24tiM0OlpJPYTPl7M7wO4lbaOYAHJenbIfi8PzDI7EbIhl2%2BKD9qpEvzT6dgNsifHe6ctABnHQT9Z%2By9%2F73MzLQQUxc6puF5vbzPzPD%2F5WSTwf3AR5NiWFW663tdht8YUjrbeJcSeLB5eVbyswDrKkPYNzKbWkQNd7WCa35K91okQOPB%2BrmTK3gx9%2B6sEVRq6YqqG5GiFCQPl5fTz6KCD530Q7KJByl4E1K%2FPJ1Dme%2Bis%2BJjo%2FtJQphiUuMw2tt4e49QLTHGBI7c%2FKs9ACLIWU55UFVXYIiCrQX1YmBtRbhKFe6Nong4i%2FiUgBxfmGQZyFcBu%2FxVWjcFSS%2BZSEqS4J7O3bTSglAqZw2VaGXuhcY8bBMlZcJj7OohlnCG%2F%2FV%2BT23g6Vf68vSCpEZ68UyQOrqkkWA4DVmGWCB8btfwCN7lrrllty44U0PQKE0K5X8n1lzf0XknEPOmm6ALEQO8GmCkCMHX4jxZcNxtHiXwGvbqMKvxucAGOqUB2cQXsnG4QOvEx80D%2BSvlDw5ey1AKx8nCZtKdbLkk5VOsvWZnAF6bzDwJWwtnpDGIE6culNXXZbwQR6fM7kKEhIU%2BqQbCDW%2BW%2BrcbXBvTLx4yhHwyWerM60rwdrdI3gtNR14Lz%2F39kQJH033wB%2Fh1DfJd7F9whL19jdphIjhDaWumYSx5hMVX9XVFRyol9W7Nd1Xj7lX4CV30jlRjEyyekXWvUwTS&X-Amz-Signature=abd8ab343581c63e040f4f94618facee2dae230d0e273e78228c22042e9a25a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUY6N6KP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHVos4Jav2Z0xpAmCzqRUsH09TGL%2F5PX7%2FXLOFvZUXAIgL2lTUsW2kpbZzm1DC67mkIJ3NV%2BeUnbEA7M8CTmNw4Mq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDM%2Bf%2FjTmE0%2FCjB6V1CrcA3mA1U1%2Bdae9eG0hkPQsVbP8lnRPfB1ydtsktwfbmNMYbtMN1L5R7ebZ00leiULxK4TP29%2BkV0TVZXeC31CiWhrKI%2BgWticMwlnUqAGkupvhffHbOOXbhSckXsRnIwI1NMvFtrTg9w1yiKsC24tiM0OlpJPYTPl7M7wO4lbaOYAHJenbIfi8PzDI7EbIhl2%2BKD9qpEvzT6dgNsifHe6ctABnHQT9Z%2By9%2F73MzLQQUxc6puF5vbzPzPD%2F5WSTwf3AR5NiWFW663tdht8YUjrbeJcSeLB5eVbyswDrKkPYNzKbWkQNd7WCa35K91okQOPB%2BrmTK3gx9%2B6sEVRq6YqqG5GiFCQPl5fTz6KCD530Q7KJByl4E1K%2FPJ1Dme%2Bis%2BJjo%2FtJQphiUuMw2tt4e49QLTHGBI7c%2FKs9ACLIWU55UFVXYIiCrQX1YmBtRbhKFe6Nong4i%2FiUgBxfmGQZyFcBu%2FxVWjcFSS%2BZSEqS4J7O3bTSglAqZw2VaGXuhcY8bBMlZcJj7OohlnCG%2F%2FV%2BT23g6Vf68vSCpEZ68UyQOrqkkWA4DVmGWCB8btfwCN7lrrllty44U0PQKE0K5X8n1lzf0XknEPOmm6ALEQO8GmCkCMHX4jxZcNxtHiXwGvbqMKvxucAGOqUB2cQXsnG4QOvEx80D%2BSvlDw5ey1AKx8nCZtKdbLkk5VOsvWZnAF6bzDwJWwtnpDGIE6culNXXZbwQR6fM7kKEhIU%2BqQbCDW%2BW%2BrcbXBvTLx4yhHwyWerM60rwdrdI3gtNR14Lz%2F39kQJH033wB%2Fh1DfJd7F9whL19jdphIjhDaWumYSx5hMVX9XVFRyol9W7Nd1Xj7lX4CV30jlRjEyyekXWvUwTS&X-Amz-Signature=9455c203b63b4fe0d6635edb7776b6ac180c84becee790eb5a34435a13f824e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUY6N6KP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHVos4Jav2Z0xpAmCzqRUsH09TGL%2F5PX7%2FXLOFvZUXAIgL2lTUsW2kpbZzm1DC67mkIJ3NV%2BeUnbEA7M8CTmNw4Mq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDM%2Bf%2FjTmE0%2FCjB6V1CrcA3mA1U1%2Bdae9eG0hkPQsVbP8lnRPfB1ydtsktwfbmNMYbtMN1L5R7ebZ00leiULxK4TP29%2BkV0TVZXeC31CiWhrKI%2BgWticMwlnUqAGkupvhffHbOOXbhSckXsRnIwI1NMvFtrTg9w1yiKsC24tiM0OlpJPYTPl7M7wO4lbaOYAHJenbIfi8PzDI7EbIhl2%2BKD9qpEvzT6dgNsifHe6ctABnHQT9Z%2By9%2F73MzLQQUxc6puF5vbzPzPD%2F5WSTwf3AR5NiWFW663tdht8YUjrbeJcSeLB5eVbyswDrKkPYNzKbWkQNd7WCa35K91okQOPB%2BrmTK3gx9%2B6sEVRq6YqqG5GiFCQPl5fTz6KCD530Q7KJByl4E1K%2FPJ1Dme%2Bis%2BJjo%2FtJQphiUuMw2tt4e49QLTHGBI7c%2FKs9ACLIWU55UFVXYIiCrQX1YmBtRbhKFe6Nong4i%2FiUgBxfmGQZyFcBu%2FxVWjcFSS%2BZSEqS4J7O3bTSglAqZw2VaGXuhcY8bBMlZcJj7OohlnCG%2F%2FV%2BT23g6Vf68vSCpEZ68UyQOrqkkWA4DVmGWCB8btfwCN7lrrllty44U0PQKE0K5X8n1lzf0XknEPOmm6ALEQO8GmCkCMHX4jxZcNxtHiXwGvbqMKvxucAGOqUB2cQXsnG4QOvEx80D%2BSvlDw5ey1AKx8nCZtKdbLkk5VOsvWZnAF6bzDwJWwtnpDGIE6culNXXZbwQR6fM7kKEhIU%2BqQbCDW%2BW%2BrcbXBvTLx4yhHwyWerM60rwdrdI3gtNR14Lz%2F39kQJH033wB%2Fh1DfJd7F9whL19jdphIjhDaWumYSx5hMVX9XVFRyol9W7Nd1Xj7lX4CV30jlRjEyyekXWvUwTS&X-Amz-Signature=d25d38630e1007744509937fa8b40084ca9c2cbdcdfc842e155afede12d9bdbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUY6N6KP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHVos4Jav2Z0xpAmCzqRUsH09TGL%2F5PX7%2FXLOFvZUXAIgL2lTUsW2kpbZzm1DC67mkIJ3NV%2BeUnbEA7M8CTmNw4Mq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDM%2Bf%2FjTmE0%2FCjB6V1CrcA3mA1U1%2Bdae9eG0hkPQsVbP8lnRPfB1ydtsktwfbmNMYbtMN1L5R7ebZ00leiULxK4TP29%2BkV0TVZXeC31CiWhrKI%2BgWticMwlnUqAGkupvhffHbOOXbhSckXsRnIwI1NMvFtrTg9w1yiKsC24tiM0OlpJPYTPl7M7wO4lbaOYAHJenbIfi8PzDI7EbIhl2%2BKD9qpEvzT6dgNsifHe6ctABnHQT9Z%2By9%2F73MzLQQUxc6puF5vbzPzPD%2F5WSTwf3AR5NiWFW663tdht8YUjrbeJcSeLB5eVbyswDrKkPYNzKbWkQNd7WCa35K91okQOPB%2BrmTK3gx9%2B6sEVRq6YqqG5GiFCQPl5fTz6KCD530Q7KJByl4E1K%2FPJ1Dme%2Bis%2BJjo%2FtJQphiUuMw2tt4e49QLTHGBI7c%2FKs9ACLIWU55UFVXYIiCrQX1YmBtRbhKFe6Nong4i%2FiUgBxfmGQZyFcBu%2FxVWjcFSS%2BZSEqS4J7O3bTSglAqZw2VaGXuhcY8bBMlZcJj7OohlnCG%2F%2FV%2BT23g6Vf68vSCpEZ68UyQOrqkkWA4DVmGWCB8btfwCN7lrrllty44U0PQKE0K5X8n1lzf0XknEPOmm6ALEQO8GmCkCMHX4jxZcNxtHiXwGvbqMKvxucAGOqUB2cQXsnG4QOvEx80D%2BSvlDw5ey1AKx8nCZtKdbLkk5VOsvWZnAF6bzDwJWwtnpDGIE6culNXXZbwQR6fM7kKEhIU%2BqQbCDW%2BW%2BrcbXBvTLx4yhHwyWerM60rwdrdI3gtNR14Lz%2F39kQJH033wB%2Fh1DfJd7F9whL19jdphIjhDaWumYSx5hMVX9XVFRyol9W7Nd1Xj7lX4CV30jlRjEyyekXWvUwTS&X-Amz-Signature=3195d4dd903df74415b03de599568d416e6c464181e5143b85c4827ffaace665&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUY6N6KP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHVos4Jav2Z0xpAmCzqRUsH09TGL%2F5PX7%2FXLOFvZUXAIgL2lTUsW2kpbZzm1DC67mkIJ3NV%2BeUnbEA7M8CTmNw4Mq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDM%2Bf%2FjTmE0%2FCjB6V1CrcA3mA1U1%2Bdae9eG0hkPQsVbP8lnRPfB1ydtsktwfbmNMYbtMN1L5R7ebZ00leiULxK4TP29%2BkV0TVZXeC31CiWhrKI%2BgWticMwlnUqAGkupvhffHbOOXbhSckXsRnIwI1NMvFtrTg9w1yiKsC24tiM0OlpJPYTPl7M7wO4lbaOYAHJenbIfi8PzDI7EbIhl2%2BKD9qpEvzT6dgNsifHe6ctABnHQT9Z%2By9%2F73MzLQQUxc6puF5vbzPzPD%2F5WSTwf3AR5NiWFW663tdht8YUjrbeJcSeLB5eVbyswDrKkPYNzKbWkQNd7WCa35K91okQOPB%2BrmTK3gx9%2B6sEVRq6YqqG5GiFCQPl5fTz6KCD530Q7KJByl4E1K%2FPJ1Dme%2Bis%2BJjo%2FtJQphiUuMw2tt4e49QLTHGBI7c%2FKs9ACLIWU55UFVXYIiCrQX1YmBtRbhKFe6Nong4i%2FiUgBxfmGQZyFcBu%2FxVWjcFSS%2BZSEqS4J7O3bTSglAqZw2VaGXuhcY8bBMlZcJj7OohlnCG%2F%2FV%2BT23g6Vf68vSCpEZ68UyQOrqkkWA4DVmGWCB8btfwCN7lrrllty44U0PQKE0K5X8n1lzf0XknEPOmm6ALEQO8GmCkCMHX4jxZcNxtHiXwGvbqMKvxucAGOqUB2cQXsnG4QOvEx80D%2BSvlDw5ey1AKx8nCZtKdbLkk5VOsvWZnAF6bzDwJWwtnpDGIE6culNXXZbwQR6fM7kKEhIU%2BqQbCDW%2BW%2BrcbXBvTLx4yhHwyWerM60rwdrdI3gtNR14Lz%2F39kQJH033wB%2Fh1DfJd7F9whL19jdphIjhDaWumYSx5hMVX9XVFRyol9W7Nd1Xj7lX4CV30jlRjEyyekXWvUwTS&X-Amz-Signature=421f4bae172e3826d3fef14ca844d519a5f0b1911d515c8c45e08ad17bd864ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
