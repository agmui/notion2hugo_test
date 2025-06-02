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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LA4TSDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAEMvSyCY%2FvmHCVoylGHvGzkv7WlONeXMTC42BgiincgAiEArp2YjE%2Fgomk2lgVAqY%2FxdG2Kelie0Gw8W2WgT9%2FTVRkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbiXAi65JE%2FOzJqkyrcAx500JN4bySCENEcrlOxwMVwnCmXM3FxxeBz5XZubju79is%2FZHGzkZySIbT9EM%2FW2AW25odSG8uPUh%2FK%2FVETJCNTb8tTI1RBU%2FIDNnoWaPmy879QCTUizk9cvTYMk%2BdR2PzyOTWsiUeEzOJW23x%2F7%2FxbHpEoamrZpfJZ8xEFC0bgOqLY593KiU2rgrMhhQvL0IikO5Vtvuf3q%2FijGzW9mGWkp3Mh7ps%2FplZ9UqUp1MbOHK1ow%2B2wTbZqXz1%2BQP4zwjI93aJvXiFWLxGA04VcJkaPzg0XKzZAbYVY7PP3Q65QG0tEBzqzUvqMUEx5xBJrNirt6q2MpDn%2B9%2FUN4gJPqqp9sL8%2F1Z9NjXhCCbtPE5GIzI9oeAeEMclFWl1edJUJ5NAR%2FAXg3%2FaeLjctfZikcBgm6wPbxQQH6UohQiA3V3IvAbyskCiUTQQWDb3hINAp4sLRQF3RkT6fFjAGdT%2BYICoJS8tltofeI8IWgtxvROhK%2B05Njx%2BQd5wPL%2FxiR6ojb%2BX87E1SKyRbGSOi4GABQvtmJ%2FLpx5%2BxmLhtO4DQWIGeUK%2FLsiqLem3yaXzFYtw%2FwhfzHRxVOBs1TEaMRXu1JaCAzx8GJ%2Fylw3m%2Bt9p9sLe5j7LXB5SEN7wbIdv0MLWT%2BMEGOqUBwxdeQmna0F9z9CHtp5syvBcQBUwwCycih4OnKU59JeaOMrfRjfOyO88s5MEY8aIr8bZfaaEkYFiGmGGVVDFS%2Bu%2FSpdj%2FMxig75O1rmVa0909ep8Z78PqtNd5FHTe2NKcJGfxIHKJgB01sQ2yVmIGKvwAqstrMueVWZFJHPv7Gw%2BTYclmAV8GnS6sVzgLUXwqq72wrpq3OJ7LQUVd0d5S0fywqFLb&X-Amz-Signature=db9f6054ee8993a33bc4fceed3993d7f8a47b1b051f187d54c15000f33aa62d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LA4TSDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAEMvSyCY%2FvmHCVoylGHvGzkv7WlONeXMTC42BgiincgAiEArp2YjE%2Fgomk2lgVAqY%2FxdG2Kelie0Gw8W2WgT9%2FTVRkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbiXAi65JE%2FOzJqkyrcAx500JN4bySCENEcrlOxwMVwnCmXM3FxxeBz5XZubju79is%2FZHGzkZySIbT9EM%2FW2AW25odSG8uPUh%2FK%2FVETJCNTb8tTI1RBU%2FIDNnoWaPmy879QCTUizk9cvTYMk%2BdR2PzyOTWsiUeEzOJW23x%2F7%2FxbHpEoamrZpfJZ8xEFC0bgOqLY593KiU2rgrMhhQvL0IikO5Vtvuf3q%2FijGzW9mGWkp3Mh7ps%2FplZ9UqUp1MbOHK1ow%2B2wTbZqXz1%2BQP4zwjI93aJvXiFWLxGA04VcJkaPzg0XKzZAbYVY7PP3Q65QG0tEBzqzUvqMUEx5xBJrNirt6q2MpDn%2B9%2FUN4gJPqqp9sL8%2F1Z9NjXhCCbtPE5GIzI9oeAeEMclFWl1edJUJ5NAR%2FAXg3%2FaeLjctfZikcBgm6wPbxQQH6UohQiA3V3IvAbyskCiUTQQWDb3hINAp4sLRQF3RkT6fFjAGdT%2BYICoJS8tltofeI8IWgtxvROhK%2B05Njx%2BQd5wPL%2FxiR6ojb%2BX87E1SKyRbGSOi4GABQvtmJ%2FLpx5%2BxmLhtO4DQWIGeUK%2FLsiqLem3yaXzFYtw%2FwhfzHRxVOBs1TEaMRXu1JaCAzx8GJ%2Fylw3m%2Bt9p9sLe5j7LXB5SEN7wbIdv0MLWT%2BMEGOqUBwxdeQmna0F9z9CHtp5syvBcQBUwwCycih4OnKU59JeaOMrfRjfOyO88s5MEY8aIr8bZfaaEkYFiGmGGVVDFS%2Bu%2FSpdj%2FMxig75O1rmVa0909ep8Z78PqtNd5FHTe2NKcJGfxIHKJgB01sQ2yVmIGKvwAqstrMueVWZFJHPv7Gw%2BTYclmAV8GnS6sVzgLUXwqq72wrpq3OJ7LQUVd0d5S0fywqFLb&X-Amz-Signature=c38e642f6383d571e0d778c64c0f44c9c0d38f6dbe9ab094b637186021718316&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LA4TSDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAEMvSyCY%2FvmHCVoylGHvGzkv7WlONeXMTC42BgiincgAiEArp2YjE%2Fgomk2lgVAqY%2FxdG2Kelie0Gw8W2WgT9%2FTVRkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbiXAi65JE%2FOzJqkyrcAx500JN4bySCENEcrlOxwMVwnCmXM3FxxeBz5XZubju79is%2FZHGzkZySIbT9EM%2FW2AW25odSG8uPUh%2FK%2FVETJCNTb8tTI1RBU%2FIDNnoWaPmy879QCTUizk9cvTYMk%2BdR2PzyOTWsiUeEzOJW23x%2F7%2FxbHpEoamrZpfJZ8xEFC0bgOqLY593KiU2rgrMhhQvL0IikO5Vtvuf3q%2FijGzW9mGWkp3Mh7ps%2FplZ9UqUp1MbOHK1ow%2B2wTbZqXz1%2BQP4zwjI93aJvXiFWLxGA04VcJkaPzg0XKzZAbYVY7PP3Q65QG0tEBzqzUvqMUEx5xBJrNirt6q2MpDn%2B9%2FUN4gJPqqp9sL8%2F1Z9NjXhCCbtPE5GIzI9oeAeEMclFWl1edJUJ5NAR%2FAXg3%2FaeLjctfZikcBgm6wPbxQQH6UohQiA3V3IvAbyskCiUTQQWDb3hINAp4sLRQF3RkT6fFjAGdT%2BYICoJS8tltofeI8IWgtxvROhK%2B05Njx%2BQd5wPL%2FxiR6ojb%2BX87E1SKyRbGSOi4GABQvtmJ%2FLpx5%2BxmLhtO4DQWIGeUK%2FLsiqLem3yaXzFYtw%2FwhfzHRxVOBs1TEaMRXu1JaCAzx8GJ%2Fylw3m%2Bt9p9sLe5j7LXB5SEN7wbIdv0MLWT%2BMEGOqUBwxdeQmna0F9z9CHtp5syvBcQBUwwCycih4OnKU59JeaOMrfRjfOyO88s5MEY8aIr8bZfaaEkYFiGmGGVVDFS%2Bu%2FSpdj%2FMxig75O1rmVa0909ep8Z78PqtNd5FHTe2NKcJGfxIHKJgB01sQ2yVmIGKvwAqstrMueVWZFJHPv7Gw%2BTYclmAV8GnS6sVzgLUXwqq72wrpq3OJ7LQUVd0d5S0fywqFLb&X-Amz-Signature=feec2ee46ddef22a8f1613f63a199da861f44305a7eb0aceb8ad6104eb4d59c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LA4TSDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAEMvSyCY%2FvmHCVoylGHvGzkv7WlONeXMTC42BgiincgAiEArp2YjE%2Fgomk2lgVAqY%2FxdG2Kelie0Gw8W2WgT9%2FTVRkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbiXAi65JE%2FOzJqkyrcAx500JN4bySCENEcrlOxwMVwnCmXM3FxxeBz5XZubju79is%2FZHGzkZySIbT9EM%2FW2AW25odSG8uPUh%2FK%2FVETJCNTb8tTI1RBU%2FIDNnoWaPmy879QCTUizk9cvTYMk%2BdR2PzyOTWsiUeEzOJW23x%2F7%2FxbHpEoamrZpfJZ8xEFC0bgOqLY593KiU2rgrMhhQvL0IikO5Vtvuf3q%2FijGzW9mGWkp3Mh7ps%2FplZ9UqUp1MbOHK1ow%2B2wTbZqXz1%2BQP4zwjI93aJvXiFWLxGA04VcJkaPzg0XKzZAbYVY7PP3Q65QG0tEBzqzUvqMUEx5xBJrNirt6q2MpDn%2B9%2FUN4gJPqqp9sL8%2F1Z9NjXhCCbtPE5GIzI9oeAeEMclFWl1edJUJ5NAR%2FAXg3%2FaeLjctfZikcBgm6wPbxQQH6UohQiA3V3IvAbyskCiUTQQWDb3hINAp4sLRQF3RkT6fFjAGdT%2BYICoJS8tltofeI8IWgtxvROhK%2B05Njx%2BQd5wPL%2FxiR6ojb%2BX87E1SKyRbGSOi4GABQvtmJ%2FLpx5%2BxmLhtO4DQWIGeUK%2FLsiqLem3yaXzFYtw%2FwhfzHRxVOBs1TEaMRXu1JaCAzx8GJ%2Fylw3m%2Bt9p9sLe5j7LXB5SEN7wbIdv0MLWT%2BMEGOqUBwxdeQmna0F9z9CHtp5syvBcQBUwwCycih4OnKU59JeaOMrfRjfOyO88s5MEY8aIr8bZfaaEkYFiGmGGVVDFS%2Bu%2FSpdj%2FMxig75O1rmVa0909ep8Z78PqtNd5FHTe2NKcJGfxIHKJgB01sQ2yVmIGKvwAqstrMueVWZFJHPv7Gw%2BTYclmAV8GnS6sVzgLUXwqq72wrpq3OJ7LQUVd0d5S0fywqFLb&X-Amz-Signature=caedeecdeee95c9b8c1ab090fe72d32543c92cb4c906e64fd2075a0d3bd1ade6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LA4TSDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAEMvSyCY%2FvmHCVoylGHvGzkv7WlONeXMTC42BgiincgAiEArp2YjE%2Fgomk2lgVAqY%2FxdG2Kelie0Gw8W2WgT9%2FTVRkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbiXAi65JE%2FOzJqkyrcAx500JN4bySCENEcrlOxwMVwnCmXM3FxxeBz5XZubju79is%2FZHGzkZySIbT9EM%2FW2AW25odSG8uPUh%2FK%2FVETJCNTb8tTI1RBU%2FIDNnoWaPmy879QCTUizk9cvTYMk%2BdR2PzyOTWsiUeEzOJW23x%2F7%2FxbHpEoamrZpfJZ8xEFC0bgOqLY593KiU2rgrMhhQvL0IikO5Vtvuf3q%2FijGzW9mGWkp3Mh7ps%2FplZ9UqUp1MbOHK1ow%2B2wTbZqXz1%2BQP4zwjI93aJvXiFWLxGA04VcJkaPzg0XKzZAbYVY7PP3Q65QG0tEBzqzUvqMUEx5xBJrNirt6q2MpDn%2B9%2FUN4gJPqqp9sL8%2F1Z9NjXhCCbtPE5GIzI9oeAeEMclFWl1edJUJ5NAR%2FAXg3%2FaeLjctfZikcBgm6wPbxQQH6UohQiA3V3IvAbyskCiUTQQWDb3hINAp4sLRQF3RkT6fFjAGdT%2BYICoJS8tltofeI8IWgtxvROhK%2B05Njx%2BQd5wPL%2FxiR6ojb%2BX87E1SKyRbGSOi4GABQvtmJ%2FLpx5%2BxmLhtO4DQWIGeUK%2FLsiqLem3yaXzFYtw%2FwhfzHRxVOBs1TEaMRXu1JaCAzx8GJ%2Fylw3m%2Bt9p9sLe5j7LXB5SEN7wbIdv0MLWT%2BMEGOqUBwxdeQmna0F9z9CHtp5syvBcQBUwwCycih4OnKU59JeaOMrfRjfOyO88s5MEY8aIr8bZfaaEkYFiGmGGVVDFS%2Bu%2FSpdj%2FMxig75O1rmVa0909ep8Z78PqtNd5FHTe2NKcJGfxIHKJgB01sQ2yVmIGKvwAqstrMueVWZFJHPv7Gw%2BTYclmAV8GnS6sVzgLUXwqq72wrpq3OJ7LQUVd0d5S0fywqFLb&X-Amz-Signature=646f5057be12a7fd7a7ef8ba2ed7776399cbbcaba72a6e0864529c45c4f6dcb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LA4TSDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAEMvSyCY%2FvmHCVoylGHvGzkv7WlONeXMTC42BgiincgAiEArp2YjE%2Fgomk2lgVAqY%2FxdG2Kelie0Gw8W2WgT9%2FTVRkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbiXAi65JE%2FOzJqkyrcAx500JN4bySCENEcrlOxwMVwnCmXM3FxxeBz5XZubju79is%2FZHGzkZySIbT9EM%2FW2AW25odSG8uPUh%2FK%2FVETJCNTb8tTI1RBU%2FIDNnoWaPmy879QCTUizk9cvTYMk%2BdR2PzyOTWsiUeEzOJW23x%2F7%2FxbHpEoamrZpfJZ8xEFC0bgOqLY593KiU2rgrMhhQvL0IikO5Vtvuf3q%2FijGzW9mGWkp3Mh7ps%2FplZ9UqUp1MbOHK1ow%2B2wTbZqXz1%2BQP4zwjI93aJvXiFWLxGA04VcJkaPzg0XKzZAbYVY7PP3Q65QG0tEBzqzUvqMUEx5xBJrNirt6q2MpDn%2B9%2FUN4gJPqqp9sL8%2F1Z9NjXhCCbtPE5GIzI9oeAeEMclFWl1edJUJ5NAR%2FAXg3%2FaeLjctfZikcBgm6wPbxQQH6UohQiA3V3IvAbyskCiUTQQWDb3hINAp4sLRQF3RkT6fFjAGdT%2BYICoJS8tltofeI8IWgtxvROhK%2B05Njx%2BQd5wPL%2FxiR6ojb%2BX87E1SKyRbGSOi4GABQvtmJ%2FLpx5%2BxmLhtO4DQWIGeUK%2FLsiqLem3yaXzFYtw%2FwhfzHRxVOBs1TEaMRXu1JaCAzx8GJ%2Fylw3m%2Bt9p9sLe5j7LXB5SEN7wbIdv0MLWT%2BMEGOqUBwxdeQmna0F9z9CHtp5syvBcQBUwwCycih4OnKU59JeaOMrfRjfOyO88s5MEY8aIr8bZfaaEkYFiGmGGVVDFS%2Bu%2FSpdj%2FMxig75O1rmVa0909ep8Z78PqtNd5FHTe2NKcJGfxIHKJgB01sQ2yVmIGKvwAqstrMueVWZFJHPv7Gw%2BTYclmAV8GnS6sVzgLUXwqq72wrpq3OJ7LQUVd0d5S0fywqFLb&X-Amz-Signature=884e3896219d5dfa3b9fedccc1087b98c1fd9a0aa24e6a04dd3e2bb2a5973078&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LA4TSDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAEMvSyCY%2FvmHCVoylGHvGzkv7WlONeXMTC42BgiincgAiEArp2YjE%2Fgomk2lgVAqY%2FxdG2Kelie0Gw8W2WgT9%2FTVRkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbiXAi65JE%2FOzJqkyrcAx500JN4bySCENEcrlOxwMVwnCmXM3FxxeBz5XZubju79is%2FZHGzkZySIbT9EM%2FW2AW25odSG8uPUh%2FK%2FVETJCNTb8tTI1RBU%2FIDNnoWaPmy879QCTUizk9cvTYMk%2BdR2PzyOTWsiUeEzOJW23x%2F7%2FxbHpEoamrZpfJZ8xEFC0bgOqLY593KiU2rgrMhhQvL0IikO5Vtvuf3q%2FijGzW9mGWkp3Mh7ps%2FplZ9UqUp1MbOHK1ow%2B2wTbZqXz1%2BQP4zwjI93aJvXiFWLxGA04VcJkaPzg0XKzZAbYVY7PP3Q65QG0tEBzqzUvqMUEx5xBJrNirt6q2MpDn%2B9%2FUN4gJPqqp9sL8%2F1Z9NjXhCCbtPE5GIzI9oeAeEMclFWl1edJUJ5NAR%2FAXg3%2FaeLjctfZikcBgm6wPbxQQH6UohQiA3V3IvAbyskCiUTQQWDb3hINAp4sLRQF3RkT6fFjAGdT%2BYICoJS8tltofeI8IWgtxvROhK%2B05Njx%2BQd5wPL%2FxiR6ojb%2BX87E1SKyRbGSOi4GABQvtmJ%2FLpx5%2BxmLhtO4DQWIGeUK%2FLsiqLem3yaXzFYtw%2FwhfzHRxVOBs1TEaMRXu1JaCAzx8GJ%2Fylw3m%2Bt9p9sLe5j7LXB5SEN7wbIdv0MLWT%2BMEGOqUBwxdeQmna0F9z9CHtp5syvBcQBUwwCycih4OnKU59JeaOMrfRjfOyO88s5MEY8aIr8bZfaaEkYFiGmGGVVDFS%2Bu%2FSpdj%2FMxig75O1rmVa0909ep8Z78PqtNd5FHTe2NKcJGfxIHKJgB01sQ2yVmIGKvwAqstrMueVWZFJHPv7Gw%2BTYclmAV8GnS6sVzgLUXwqq72wrpq3OJ7LQUVd0d5S0fywqFLb&X-Amz-Signature=ae1d3955e8ab511fbd927818df27747c4ba79adcb10a34396f483002b0ff9d44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LA4TSDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAEMvSyCY%2FvmHCVoylGHvGzkv7WlONeXMTC42BgiincgAiEArp2YjE%2Fgomk2lgVAqY%2FxdG2Kelie0Gw8W2WgT9%2FTVRkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbiXAi65JE%2FOzJqkyrcAx500JN4bySCENEcrlOxwMVwnCmXM3FxxeBz5XZubju79is%2FZHGzkZySIbT9EM%2FW2AW25odSG8uPUh%2FK%2FVETJCNTb8tTI1RBU%2FIDNnoWaPmy879QCTUizk9cvTYMk%2BdR2PzyOTWsiUeEzOJW23x%2F7%2FxbHpEoamrZpfJZ8xEFC0bgOqLY593KiU2rgrMhhQvL0IikO5Vtvuf3q%2FijGzW9mGWkp3Mh7ps%2FplZ9UqUp1MbOHK1ow%2B2wTbZqXz1%2BQP4zwjI93aJvXiFWLxGA04VcJkaPzg0XKzZAbYVY7PP3Q65QG0tEBzqzUvqMUEx5xBJrNirt6q2MpDn%2B9%2FUN4gJPqqp9sL8%2F1Z9NjXhCCbtPE5GIzI9oeAeEMclFWl1edJUJ5NAR%2FAXg3%2FaeLjctfZikcBgm6wPbxQQH6UohQiA3V3IvAbyskCiUTQQWDb3hINAp4sLRQF3RkT6fFjAGdT%2BYICoJS8tltofeI8IWgtxvROhK%2B05Njx%2BQd5wPL%2FxiR6ojb%2BX87E1SKyRbGSOi4GABQvtmJ%2FLpx5%2BxmLhtO4DQWIGeUK%2FLsiqLem3yaXzFYtw%2FwhfzHRxVOBs1TEaMRXu1JaCAzx8GJ%2Fylw3m%2Bt9p9sLe5j7LXB5SEN7wbIdv0MLWT%2BMEGOqUBwxdeQmna0F9z9CHtp5syvBcQBUwwCycih4OnKU59JeaOMrfRjfOyO88s5MEY8aIr8bZfaaEkYFiGmGGVVDFS%2Bu%2FSpdj%2FMxig75O1rmVa0909ep8Z78PqtNd5FHTe2NKcJGfxIHKJgB01sQ2yVmIGKvwAqstrMueVWZFJHPv7Gw%2BTYclmAV8GnS6sVzgLUXwqq72wrpq3OJ7LQUVd0d5S0fywqFLb&X-Amz-Signature=1c5c32072b6a81a4f7d0bb2192e388dbd855849b0c8c4fa05d06f344244ddd42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
