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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS7SMPD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFAcuihZzIOrZ7amVakxmp6WlHnQTva3h9%2BAQByZCQsxAiEA%2BGsa8MAveSUYzdB0sU2vpNqVE6UG8KE%2BUX9nH9CB5fEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Fc2S%2Ft236Sj0%2FxircA0XF3bhIGJcb%2Fx3YJA5dQax9vC3AVZRf3r%2Bcq1ZaJt6O%2BPg3o7PfvYDHuQhRUCf8uVD%2BFBd2lrKXbni%2F1Yw1NE%2BOL4AsOA4w8QmsSNL6aDHu7uPKbTjCZVoNxsToW%2BiqePAYZCYiUl%2BfVHI5GadPbL%2FZScedYfbN304oGFPpxBKXw1sa%2BnT2yqcsOYpHPTRrDmalw4rHNVK8oUQMyKMxF9LaVtWM1%2F08m6NlgjG5%2BMHEIYh%2B3bW8tj39oNgBGbYSP7%2FL6f7xJT8hkG24xXNISAPALiniWhBvafcaCckEryhEauFRXbAhQsxKzsg4e0Uct0dT2iVUPq8eSJKKtk64Jg0y2Kc9JMucLMAMHMInkBeFOz%2BT0VbJIMoH5MMQ9uNrujq0gSAuJlhwi%2F8e709fkSmo%2F0M3Dbgc8%2F3veJVhbwoMLOqMbZNySYOiub25cAQPaVpv9oGH3EkOhu%2FyALD1vS%2FFnXPN6thUM4OyhLjus%2FcIOF0TspVQlLlUqYN6KwbCdMFRTQndxQXQ4%2BIEqrrHeGtww%2FYldOxyShJuHOZ6PE8iE4z4YVITpw5vavXN3fBrvHgbkjcEM4nEZ335taXzHi1vR%2FytLE5FlEwaJ8bIRFHzT1OO0pwPv25xHUGzMIfgxr4GOqUBkEYu5WSoHGDP%2F1GeqHRtIcPM0fwwcZ%2BmxplfE%2F9o%2B2RBWyqWqD5r%2FArlqhCzIkE7dMSlHte%2BiW6zSCoQB6tqiYj35DCoEl%2FikERD6j9xglRSdUlWC02yX26GaJOwcNSavuB2xPT8q0K5%2BZT2gOr6LXfwSMJcEm%2Ff9tk0DiPr8dInCCyT6dFjY7EhaYv2xowPmmFdzRWkKX5cb8OLnPUW5RGdVapW&X-Amz-Signature=a14f6c18460c636c95be443e38d34a23829a15547f8393cdf5513befb029d13f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS7SMPD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFAcuihZzIOrZ7amVakxmp6WlHnQTva3h9%2BAQByZCQsxAiEA%2BGsa8MAveSUYzdB0sU2vpNqVE6UG8KE%2BUX9nH9CB5fEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Fc2S%2Ft236Sj0%2FxircA0XF3bhIGJcb%2Fx3YJA5dQax9vC3AVZRf3r%2Bcq1ZaJt6O%2BPg3o7PfvYDHuQhRUCf8uVD%2BFBd2lrKXbni%2F1Yw1NE%2BOL4AsOA4w8QmsSNL6aDHu7uPKbTjCZVoNxsToW%2BiqePAYZCYiUl%2BfVHI5GadPbL%2FZScedYfbN304oGFPpxBKXw1sa%2BnT2yqcsOYpHPTRrDmalw4rHNVK8oUQMyKMxF9LaVtWM1%2F08m6NlgjG5%2BMHEIYh%2B3bW8tj39oNgBGbYSP7%2FL6f7xJT8hkG24xXNISAPALiniWhBvafcaCckEryhEauFRXbAhQsxKzsg4e0Uct0dT2iVUPq8eSJKKtk64Jg0y2Kc9JMucLMAMHMInkBeFOz%2BT0VbJIMoH5MMQ9uNrujq0gSAuJlhwi%2F8e709fkSmo%2F0M3Dbgc8%2F3veJVhbwoMLOqMbZNySYOiub25cAQPaVpv9oGH3EkOhu%2FyALD1vS%2FFnXPN6thUM4OyhLjus%2FcIOF0TspVQlLlUqYN6KwbCdMFRTQndxQXQ4%2BIEqrrHeGtww%2FYldOxyShJuHOZ6PE8iE4z4YVITpw5vavXN3fBrvHgbkjcEM4nEZ335taXzHi1vR%2FytLE5FlEwaJ8bIRFHzT1OO0pwPv25xHUGzMIfgxr4GOqUBkEYu5WSoHGDP%2F1GeqHRtIcPM0fwwcZ%2BmxplfE%2F9o%2B2RBWyqWqD5r%2FArlqhCzIkE7dMSlHte%2BiW6zSCoQB6tqiYj35DCoEl%2FikERD6j9xglRSdUlWC02yX26GaJOwcNSavuB2xPT8q0K5%2BZT2gOr6LXfwSMJcEm%2Ff9tk0DiPr8dInCCyT6dFjY7EhaYv2xowPmmFdzRWkKX5cb8OLnPUW5RGdVapW&X-Amz-Signature=e5b966fc9019f7c6e2c8092da34e9b35cbed6f7a44d760709da56f892f694c06&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS7SMPD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFAcuihZzIOrZ7amVakxmp6WlHnQTva3h9%2BAQByZCQsxAiEA%2BGsa8MAveSUYzdB0sU2vpNqVE6UG8KE%2BUX9nH9CB5fEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Fc2S%2Ft236Sj0%2FxircA0XF3bhIGJcb%2Fx3YJA5dQax9vC3AVZRf3r%2Bcq1ZaJt6O%2BPg3o7PfvYDHuQhRUCf8uVD%2BFBd2lrKXbni%2F1Yw1NE%2BOL4AsOA4w8QmsSNL6aDHu7uPKbTjCZVoNxsToW%2BiqePAYZCYiUl%2BfVHI5GadPbL%2FZScedYfbN304oGFPpxBKXw1sa%2BnT2yqcsOYpHPTRrDmalw4rHNVK8oUQMyKMxF9LaVtWM1%2F08m6NlgjG5%2BMHEIYh%2B3bW8tj39oNgBGbYSP7%2FL6f7xJT8hkG24xXNISAPALiniWhBvafcaCckEryhEauFRXbAhQsxKzsg4e0Uct0dT2iVUPq8eSJKKtk64Jg0y2Kc9JMucLMAMHMInkBeFOz%2BT0VbJIMoH5MMQ9uNrujq0gSAuJlhwi%2F8e709fkSmo%2F0M3Dbgc8%2F3veJVhbwoMLOqMbZNySYOiub25cAQPaVpv9oGH3EkOhu%2FyALD1vS%2FFnXPN6thUM4OyhLjus%2FcIOF0TspVQlLlUqYN6KwbCdMFRTQndxQXQ4%2BIEqrrHeGtww%2FYldOxyShJuHOZ6PE8iE4z4YVITpw5vavXN3fBrvHgbkjcEM4nEZ335taXzHi1vR%2FytLE5FlEwaJ8bIRFHzT1OO0pwPv25xHUGzMIfgxr4GOqUBkEYu5WSoHGDP%2F1GeqHRtIcPM0fwwcZ%2BmxplfE%2F9o%2B2RBWyqWqD5r%2FArlqhCzIkE7dMSlHte%2BiW6zSCoQB6tqiYj35DCoEl%2FikERD6j9xglRSdUlWC02yX26GaJOwcNSavuB2xPT8q0K5%2BZT2gOr6LXfwSMJcEm%2Ff9tk0DiPr8dInCCyT6dFjY7EhaYv2xowPmmFdzRWkKX5cb8OLnPUW5RGdVapW&X-Amz-Signature=cc0b49774bf8c8919facbeed4bd8ffa70c741ea3ce995716b6b1a5ddc4296094&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS7SMPD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFAcuihZzIOrZ7amVakxmp6WlHnQTva3h9%2BAQByZCQsxAiEA%2BGsa8MAveSUYzdB0sU2vpNqVE6UG8KE%2BUX9nH9CB5fEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Fc2S%2Ft236Sj0%2FxircA0XF3bhIGJcb%2Fx3YJA5dQax9vC3AVZRf3r%2Bcq1ZaJt6O%2BPg3o7PfvYDHuQhRUCf8uVD%2BFBd2lrKXbni%2F1Yw1NE%2BOL4AsOA4w8QmsSNL6aDHu7uPKbTjCZVoNxsToW%2BiqePAYZCYiUl%2BfVHI5GadPbL%2FZScedYfbN304oGFPpxBKXw1sa%2BnT2yqcsOYpHPTRrDmalw4rHNVK8oUQMyKMxF9LaVtWM1%2F08m6NlgjG5%2BMHEIYh%2B3bW8tj39oNgBGbYSP7%2FL6f7xJT8hkG24xXNISAPALiniWhBvafcaCckEryhEauFRXbAhQsxKzsg4e0Uct0dT2iVUPq8eSJKKtk64Jg0y2Kc9JMucLMAMHMInkBeFOz%2BT0VbJIMoH5MMQ9uNrujq0gSAuJlhwi%2F8e709fkSmo%2F0M3Dbgc8%2F3veJVhbwoMLOqMbZNySYOiub25cAQPaVpv9oGH3EkOhu%2FyALD1vS%2FFnXPN6thUM4OyhLjus%2FcIOF0TspVQlLlUqYN6KwbCdMFRTQndxQXQ4%2BIEqrrHeGtww%2FYldOxyShJuHOZ6PE8iE4z4YVITpw5vavXN3fBrvHgbkjcEM4nEZ335taXzHi1vR%2FytLE5FlEwaJ8bIRFHzT1OO0pwPv25xHUGzMIfgxr4GOqUBkEYu5WSoHGDP%2F1GeqHRtIcPM0fwwcZ%2BmxplfE%2F9o%2B2RBWyqWqD5r%2FArlqhCzIkE7dMSlHte%2BiW6zSCoQB6tqiYj35DCoEl%2FikERD6j9xglRSdUlWC02yX26GaJOwcNSavuB2xPT8q0K5%2BZT2gOr6LXfwSMJcEm%2Ff9tk0DiPr8dInCCyT6dFjY7EhaYv2xowPmmFdzRWkKX5cb8OLnPUW5RGdVapW&X-Amz-Signature=01a6310367e190f395470bb9de9fef26629d67bc25d7beddde88a628a0608720&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS7SMPD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFAcuihZzIOrZ7amVakxmp6WlHnQTva3h9%2BAQByZCQsxAiEA%2BGsa8MAveSUYzdB0sU2vpNqVE6UG8KE%2BUX9nH9CB5fEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Fc2S%2Ft236Sj0%2FxircA0XF3bhIGJcb%2Fx3YJA5dQax9vC3AVZRf3r%2Bcq1ZaJt6O%2BPg3o7PfvYDHuQhRUCf8uVD%2BFBd2lrKXbni%2F1Yw1NE%2BOL4AsOA4w8QmsSNL6aDHu7uPKbTjCZVoNxsToW%2BiqePAYZCYiUl%2BfVHI5GadPbL%2FZScedYfbN304oGFPpxBKXw1sa%2BnT2yqcsOYpHPTRrDmalw4rHNVK8oUQMyKMxF9LaVtWM1%2F08m6NlgjG5%2BMHEIYh%2B3bW8tj39oNgBGbYSP7%2FL6f7xJT8hkG24xXNISAPALiniWhBvafcaCckEryhEauFRXbAhQsxKzsg4e0Uct0dT2iVUPq8eSJKKtk64Jg0y2Kc9JMucLMAMHMInkBeFOz%2BT0VbJIMoH5MMQ9uNrujq0gSAuJlhwi%2F8e709fkSmo%2F0M3Dbgc8%2F3veJVhbwoMLOqMbZNySYOiub25cAQPaVpv9oGH3EkOhu%2FyALD1vS%2FFnXPN6thUM4OyhLjus%2FcIOF0TspVQlLlUqYN6KwbCdMFRTQndxQXQ4%2BIEqrrHeGtww%2FYldOxyShJuHOZ6PE8iE4z4YVITpw5vavXN3fBrvHgbkjcEM4nEZ335taXzHi1vR%2FytLE5FlEwaJ8bIRFHzT1OO0pwPv25xHUGzMIfgxr4GOqUBkEYu5WSoHGDP%2F1GeqHRtIcPM0fwwcZ%2BmxplfE%2F9o%2B2RBWyqWqD5r%2FArlqhCzIkE7dMSlHte%2BiW6zSCoQB6tqiYj35DCoEl%2FikERD6j9xglRSdUlWC02yX26GaJOwcNSavuB2xPT8q0K5%2BZT2gOr6LXfwSMJcEm%2Ff9tk0DiPr8dInCCyT6dFjY7EhaYv2xowPmmFdzRWkKX5cb8OLnPUW5RGdVapW&X-Amz-Signature=4d1b04b03a176137d704b1a9ca26b7dfb97873fb35ed4d0e7d22a8ad0b61d067&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS7SMPD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFAcuihZzIOrZ7amVakxmp6WlHnQTva3h9%2BAQByZCQsxAiEA%2BGsa8MAveSUYzdB0sU2vpNqVE6UG8KE%2BUX9nH9CB5fEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Fc2S%2Ft236Sj0%2FxircA0XF3bhIGJcb%2Fx3YJA5dQax9vC3AVZRf3r%2Bcq1ZaJt6O%2BPg3o7PfvYDHuQhRUCf8uVD%2BFBd2lrKXbni%2F1Yw1NE%2BOL4AsOA4w8QmsSNL6aDHu7uPKbTjCZVoNxsToW%2BiqePAYZCYiUl%2BfVHI5GadPbL%2FZScedYfbN304oGFPpxBKXw1sa%2BnT2yqcsOYpHPTRrDmalw4rHNVK8oUQMyKMxF9LaVtWM1%2F08m6NlgjG5%2BMHEIYh%2B3bW8tj39oNgBGbYSP7%2FL6f7xJT8hkG24xXNISAPALiniWhBvafcaCckEryhEauFRXbAhQsxKzsg4e0Uct0dT2iVUPq8eSJKKtk64Jg0y2Kc9JMucLMAMHMInkBeFOz%2BT0VbJIMoH5MMQ9uNrujq0gSAuJlhwi%2F8e709fkSmo%2F0M3Dbgc8%2F3veJVhbwoMLOqMbZNySYOiub25cAQPaVpv9oGH3EkOhu%2FyALD1vS%2FFnXPN6thUM4OyhLjus%2FcIOF0TspVQlLlUqYN6KwbCdMFRTQndxQXQ4%2BIEqrrHeGtww%2FYldOxyShJuHOZ6PE8iE4z4YVITpw5vavXN3fBrvHgbkjcEM4nEZ335taXzHi1vR%2FytLE5FlEwaJ8bIRFHzT1OO0pwPv25xHUGzMIfgxr4GOqUBkEYu5WSoHGDP%2F1GeqHRtIcPM0fwwcZ%2BmxplfE%2F9o%2B2RBWyqWqD5r%2FArlqhCzIkE7dMSlHte%2BiW6zSCoQB6tqiYj35DCoEl%2FikERD6j9xglRSdUlWC02yX26GaJOwcNSavuB2xPT8q0K5%2BZT2gOr6LXfwSMJcEm%2Ff9tk0DiPr8dInCCyT6dFjY7EhaYv2xowPmmFdzRWkKX5cb8OLnPUW5RGdVapW&X-Amz-Signature=83fc6a652a2974d48613ea42b6e3af65c7430ced98fa9bcba242dff9f0c1332d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS7SMPD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFAcuihZzIOrZ7amVakxmp6WlHnQTva3h9%2BAQByZCQsxAiEA%2BGsa8MAveSUYzdB0sU2vpNqVE6UG8KE%2BUX9nH9CB5fEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Fc2S%2Ft236Sj0%2FxircA0XF3bhIGJcb%2Fx3YJA5dQax9vC3AVZRf3r%2Bcq1ZaJt6O%2BPg3o7PfvYDHuQhRUCf8uVD%2BFBd2lrKXbni%2F1Yw1NE%2BOL4AsOA4w8QmsSNL6aDHu7uPKbTjCZVoNxsToW%2BiqePAYZCYiUl%2BfVHI5GadPbL%2FZScedYfbN304oGFPpxBKXw1sa%2BnT2yqcsOYpHPTRrDmalw4rHNVK8oUQMyKMxF9LaVtWM1%2F08m6NlgjG5%2BMHEIYh%2B3bW8tj39oNgBGbYSP7%2FL6f7xJT8hkG24xXNISAPALiniWhBvafcaCckEryhEauFRXbAhQsxKzsg4e0Uct0dT2iVUPq8eSJKKtk64Jg0y2Kc9JMucLMAMHMInkBeFOz%2BT0VbJIMoH5MMQ9uNrujq0gSAuJlhwi%2F8e709fkSmo%2F0M3Dbgc8%2F3veJVhbwoMLOqMbZNySYOiub25cAQPaVpv9oGH3EkOhu%2FyALD1vS%2FFnXPN6thUM4OyhLjus%2FcIOF0TspVQlLlUqYN6KwbCdMFRTQndxQXQ4%2BIEqrrHeGtww%2FYldOxyShJuHOZ6PE8iE4z4YVITpw5vavXN3fBrvHgbkjcEM4nEZ335taXzHi1vR%2FytLE5FlEwaJ8bIRFHzT1OO0pwPv25xHUGzMIfgxr4GOqUBkEYu5WSoHGDP%2F1GeqHRtIcPM0fwwcZ%2BmxplfE%2F9o%2B2RBWyqWqD5r%2FArlqhCzIkE7dMSlHte%2BiW6zSCoQB6tqiYj35DCoEl%2FikERD6j9xglRSdUlWC02yX26GaJOwcNSavuB2xPT8q0K5%2BZT2gOr6LXfwSMJcEm%2Ff9tk0DiPr8dInCCyT6dFjY7EhaYv2xowPmmFdzRWkKX5cb8OLnPUW5RGdVapW&X-Amz-Signature=30e9a8c104a26bee9915ceb736d248a5c939176dd53033fe4252b4ce1b23f3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS7SMPD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFAcuihZzIOrZ7amVakxmp6WlHnQTva3h9%2BAQByZCQsxAiEA%2BGsa8MAveSUYzdB0sU2vpNqVE6UG8KE%2BUX9nH9CB5fEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Fc2S%2Ft236Sj0%2FxircA0XF3bhIGJcb%2Fx3YJA5dQax9vC3AVZRf3r%2Bcq1ZaJt6O%2BPg3o7PfvYDHuQhRUCf8uVD%2BFBd2lrKXbni%2F1Yw1NE%2BOL4AsOA4w8QmsSNL6aDHu7uPKbTjCZVoNxsToW%2BiqePAYZCYiUl%2BfVHI5GadPbL%2FZScedYfbN304oGFPpxBKXw1sa%2BnT2yqcsOYpHPTRrDmalw4rHNVK8oUQMyKMxF9LaVtWM1%2F08m6NlgjG5%2BMHEIYh%2B3bW8tj39oNgBGbYSP7%2FL6f7xJT8hkG24xXNISAPALiniWhBvafcaCckEryhEauFRXbAhQsxKzsg4e0Uct0dT2iVUPq8eSJKKtk64Jg0y2Kc9JMucLMAMHMInkBeFOz%2BT0VbJIMoH5MMQ9uNrujq0gSAuJlhwi%2F8e709fkSmo%2F0M3Dbgc8%2F3veJVhbwoMLOqMbZNySYOiub25cAQPaVpv9oGH3EkOhu%2FyALD1vS%2FFnXPN6thUM4OyhLjus%2FcIOF0TspVQlLlUqYN6KwbCdMFRTQndxQXQ4%2BIEqrrHeGtww%2FYldOxyShJuHOZ6PE8iE4z4YVITpw5vavXN3fBrvHgbkjcEM4nEZ335taXzHi1vR%2FytLE5FlEwaJ8bIRFHzT1OO0pwPv25xHUGzMIfgxr4GOqUBkEYu5WSoHGDP%2F1GeqHRtIcPM0fwwcZ%2BmxplfE%2F9o%2B2RBWyqWqD5r%2FArlqhCzIkE7dMSlHte%2BiW6zSCoQB6tqiYj35DCoEl%2FikERD6j9xglRSdUlWC02yX26GaJOwcNSavuB2xPT8q0K5%2BZT2gOr6LXfwSMJcEm%2Ff9tk0DiPr8dInCCyT6dFjY7EhaYv2xowPmmFdzRWkKX5cb8OLnPUW5RGdVapW&X-Amz-Signature=ee479b8ebbf34e4f963e6f72549eb40874613bd018bcda86c0b2c4ab0b7098f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
