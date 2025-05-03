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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSOA43W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFebPcxXjVwhlWKonPP5ndZ4AsPw2H7HXZOQW%2Fd5WY7CAiEA6j2P%2FXZDs9j%2Bd05mtt6LVvMkuhxk4rCKGT1qzNN8jzMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1ksfj2uoXfdyu6ASrcA2AQtWwm0bJBm4B3UaMzllvg7HZgGo6HIul2c1dGVuHqVe8OvHaMtzaRuwe7%2Bb1VI%2BNPJGQF0QHNRfNDKiLvZayaCvTZfDZgRRO0T%2FhP8aDxB%2FgiQC0c%2FN2Knm5SiZ%2FTuM6X6pjMOG1ut5gApieztutemRYemMeunQjKr4%2BxIlyFL4G4kYpN6Glfzj9OI%2FTNHUFmQi5NmSS4rG9JkiTmihVbE29GhQUmLYcdIQt6nJG%2FmNRqiu2NA8SCuFXOC6XThSOamUgq8Rt2jTY9%2BiXc4Hrd6uI5WVH8w9tLA4Y7fCxYwyLckSn8gPyi54JCGvbhx37O58f0kf%2FtZJawgiUsTvIaFKgTEmSLYPrnv81dEFc5ss96zGybKskrBZnOERFFbieKemq2HYI6PpJcB5UEezI%2Fxo0faV05g1UHK1qFClFUiXa8HDYOXbyREx3N0%2BDRI%2Fn7K0FxhDBpTu%2FE8uWjylVOvVPJGJ%2FAyC5AqluOZCqxK8DoE2RQ8dpqacOu7n1U56AgWRLsZi31p0K97U5QH2wM%2BUWu6KDM0cY4eqx16MAY6%2BZqhAMOvpC24GE9pkAZqBSkhv470R0YOXZag3n7oGumE%2B1UE%2Bd1bJzOXGB40GZDuSk0fQaAYkkUjSD0MMqz2sAGOqUB45ODNTkNRSNw%2BvdUrB6Q98%2FxXtOIBg%2B1WaQ6aJ%2FxzpIqjSxNVfD586D9QywpA2Zg50%2FOqWlPbr0rApbT8BLBbdCqHF34D%2BUplUSeQYM4X%2BUjpJQ4oWpk1kpU3t2Sew8y1FUb2dP6L0SQIaa%2BBeDaJ7lxI3%2FmP89QwlPb1QGlgoCr4HrIDiQP4uGU2nunlWPgieoQmiFytUzgQhvTgJNT9zA1HmsK&X-Amz-Signature=36b5d0c764dc73fbb1c26411ec5f1ad051e4852654a98029b8b7144686b1eb3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSOA43W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFebPcxXjVwhlWKonPP5ndZ4AsPw2H7HXZOQW%2Fd5WY7CAiEA6j2P%2FXZDs9j%2Bd05mtt6LVvMkuhxk4rCKGT1qzNN8jzMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1ksfj2uoXfdyu6ASrcA2AQtWwm0bJBm4B3UaMzllvg7HZgGo6HIul2c1dGVuHqVe8OvHaMtzaRuwe7%2Bb1VI%2BNPJGQF0QHNRfNDKiLvZayaCvTZfDZgRRO0T%2FhP8aDxB%2FgiQC0c%2FN2Knm5SiZ%2FTuM6X6pjMOG1ut5gApieztutemRYemMeunQjKr4%2BxIlyFL4G4kYpN6Glfzj9OI%2FTNHUFmQi5NmSS4rG9JkiTmihVbE29GhQUmLYcdIQt6nJG%2FmNRqiu2NA8SCuFXOC6XThSOamUgq8Rt2jTY9%2BiXc4Hrd6uI5WVH8w9tLA4Y7fCxYwyLckSn8gPyi54JCGvbhx37O58f0kf%2FtZJawgiUsTvIaFKgTEmSLYPrnv81dEFc5ss96zGybKskrBZnOERFFbieKemq2HYI6PpJcB5UEezI%2Fxo0faV05g1UHK1qFClFUiXa8HDYOXbyREx3N0%2BDRI%2Fn7K0FxhDBpTu%2FE8uWjylVOvVPJGJ%2FAyC5AqluOZCqxK8DoE2RQ8dpqacOu7n1U56AgWRLsZi31p0K97U5QH2wM%2BUWu6KDM0cY4eqx16MAY6%2BZqhAMOvpC24GE9pkAZqBSkhv470R0YOXZag3n7oGumE%2B1UE%2Bd1bJzOXGB40GZDuSk0fQaAYkkUjSD0MMqz2sAGOqUB45ODNTkNRSNw%2BvdUrB6Q98%2FxXtOIBg%2B1WaQ6aJ%2FxzpIqjSxNVfD586D9QywpA2Zg50%2FOqWlPbr0rApbT8BLBbdCqHF34D%2BUplUSeQYM4X%2BUjpJQ4oWpk1kpU3t2Sew8y1FUb2dP6L0SQIaa%2BBeDaJ7lxI3%2FmP89QwlPb1QGlgoCr4HrIDiQP4uGU2nunlWPgieoQmiFytUzgQhvTgJNT9zA1HmsK&X-Amz-Signature=3b863bc14aaa605a32cf2a64fb0bbf70911cf4a5058e6be0fe442b2c73461b46&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSOA43W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFebPcxXjVwhlWKonPP5ndZ4AsPw2H7HXZOQW%2Fd5WY7CAiEA6j2P%2FXZDs9j%2Bd05mtt6LVvMkuhxk4rCKGT1qzNN8jzMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1ksfj2uoXfdyu6ASrcA2AQtWwm0bJBm4B3UaMzllvg7HZgGo6HIul2c1dGVuHqVe8OvHaMtzaRuwe7%2Bb1VI%2BNPJGQF0QHNRfNDKiLvZayaCvTZfDZgRRO0T%2FhP8aDxB%2FgiQC0c%2FN2Knm5SiZ%2FTuM6X6pjMOG1ut5gApieztutemRYemMeunQjKr4%2BxIlyFL4G4kYpN6Glfzj9OI%2FTNHUFmQi5NmSS4rG9JkiTmihVbE29GhQUmLYcdIQt6nJG%2FmNRqiu2NA8SCuFXOC6XThSOamUgq8Rt2jTY9%2BiXc4Hrd6uI5WVH8w9tLA4Y7fCxYwyLckSn8gPyi54JCGvbhx37O58f0kf%2FtZJawgiUsTvIaFKgTEmSLYPrnv81dEFc5ss96zGybKskrBZnOERFFbieKemq2HYI6PpJcB5UEezI%2Fxo0faV05g1UHK1qFClFUiXa8HDYOXbyREx3N0%2BDRI%2Fn7K0FxhDBpTu%2FE8uWjylVOvVPJGJ%2FAyC5AqluOZCqxK8DoE2RQ8dpqacOu7n1U56AgWRLsZi31p0K97U5QH2wM%2BUWu6KDM0cY4eqx16MAY6%2BZqhAMOvpC24GE9pkAZqBSkhv470R0YOXZag3n7oGumE%2B1UE%2Bd1bJzOXGB40GZDuSk0fQaAYkkUjSD0MMqz2sAGOqUB45ODNTkNRSNw%2BvdUrB6Q98%2FxXtOIBg%2B1WaQ6aJ%2FxzpIqjSxNVfD586D9QywpA2Zg50%2FOqWlPbr0rApbT8BLBbdCqHF34D%2BUplUSeQYM4X%2BUjpJQ4oWpk1kpU3t2Sew8y1FUb2dP6L0SQIaa%2BBeDaJ7lxI3%2FmP89QwlPb1QGlgoCr4HrIDiQP4uGU2nunlWPgieoQmiFytUzgQhvTgJNT9zA1HmsK&X-Amz-Signature=b5f936a06db30713ba5d0bb083dedcf286a9e883b8f5f105c8b1dc167273817c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSOA43W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFebPcxXjVwhlWKonPP5ndZ4AsPw2H7HXZOQW%2Fd5WY7CAiEA6j2P%2FXZDs9j%2Bd05mtt6LVvMkuhxk4rCKGT1qzNN8jzMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1ksfj2uoXfdyu6ASrcA2AQtWwm0bJBm4B3UaMzllvg7HZgGo6HIul2c1dGVuHqVe8OvHaMtzaRuwe7%2Bb1VI%2BNPJGQF0QHNRfNDKiLvZayaCvTZfDZgRRO0T%2FhP8aDxB%2FgiQC0c%2FN2Knm5SiZ%2FTuM6X6pjMOG1ut5gApieztutemRYemMeunQjKr4%2BxIlyFL4G4kYpN6Glfzj9OI%2FTNHUFmQi5NmSS4rG9JkiTmihVbE29GhQUmLYcdIQt6nJG%2FmNRqiu2NA8SCuFXOC6XThSOamUgq8Rt2jTY9%2BiXc4Hrd6uI5WVH8w9tLA4Y7fCxYwyLckSn8gPyi54JCGvbhx37O58f0kf%2FtZJawgiUsTvIaFKgTEmSLYPrnv81dEFc5ss96zGybKskrBZnOERFFbieKemq2HYI6PpJcB5UEezI%2Fxo0faV05g1UHK1qFClFUiXa8HDYOXbyREx3N0%2BDRI%2Fn7K0FxhDBpTu%2FE8uWjylVOvVPJGJ%2FAyC5AqluOZCqxK8DoE2RQ8dpqacOu7n1U56AgWRLsZi31p0K97U5QH2wM%2BUWu6KDM0cY4eqx16MAY6%2BZqhAMOvpC24GE9pkAZqBSkhv470R0YOXZag3n7oGumE%2B1UE%2Bd1bJzOXGB40GZDuSk0fQaAYkkUjSD0MMqz2sAGOqUB45ODNTkNRSNw%2BvdUrB6Q98%2FxXtOIBg%2B1WaQ6aJ%2FxzpIqjSxNVfD586D9QywpA2Zg50%2FOqWlPbr0rApbT8BLBbdCqHF34D%2BUplUSeQYM4X%2BUjpJQ4oWpk1kpU3t2Sew8y1FUb2dP6L0SQIaa%2BBeDaJ7lxI3%2FmP89QwlPb1QGlgoCr4HrIDiQP4uGU2nunlWPgieoQmiFytUzgQhvTgJNT9zA1HmsK&X-Amz-Signature=d4f145ea29744b4ac9c60ab7fddfbdde5aafc06ee072891befd9e47b966f0b66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSOA43W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFebPcxXjVwhlWKonPP5ndZ4AsPw2H7HXZOQW%2Fd5WY7CAiEA6j2P%2FXZDs9j%2Bd05mtt6LVvMkuhxk4rCKGT1qzNN8jzMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1ksfj2uoXfdyu6ASrcA2AQtWwm0bJBm4B3UaMzllvg7HZgGo6HIul2c1dGVuHqVe8OvHaMtzaRuwe7%2Bb1VI%2BNPJGQF0QHNRfNDKiLvZayaCvTZfDZgRRO0T%2FhP8aDxB%2FgiQC0c%2FN2Knm5SiZ%2FTuM6X6pjMOG1ut5gApieztutemRYemMeunQjKr4%2BxIlyFL4G4kYpN6Glfzj9OI%2FTNHUFmQi5NmSS4rG9JkiTmihVbE29GhQUmLYcdIQt6nJG%2FmNRqiu2NA8SCuFXOC6XThSOamUgq8Rt2jTY9%2BiXc4Hrd6uI5WVH8w9tLA4Y7fCxYwyLckSn8gPyi54JCGvbhx37O58f0kf%2FtZJawgiUsTvIaFKgTEmSLYPrnv81dEFc5ss96zGybKskrBZnOERFFbieKemq2HYI6PpJcB5UEezI%2Fxo0faV05g1UHK1qFClFUiXa8HDYOXbyREx3N0%2BDRI%2Fn7K0FxhDBpTu%2FE8uWjylVOvVPJGJ%2FAyC5AqluOZCqxK8DoE2RQ8dpqacOu7n1U56AgWRLsZi31p0K97U5QH2wM%2BUWu6KDM0cY4eqx16MAY6%2BZqhAMOvpC24GE9pkAZqBSkhv470R0YOXZag3n7oGumE%2B1UE%2Bd1bJzOXGB40GZDuSk0fQaAYkkUjSD0MMqz2sAGOqUB45ODNTkNRSNw%2BvdUrB6Q98%2FxXtOIBg%2B1WaQ6aJ%2FxzpIqjSxNVfD586D9QywpA2Zg50%2FOqWlPbr0rApbT8BLBbdCqHF34D%2BUplUSeQYM4X%2BUjpJQ4oWpk1kpU3t2Sew8y1FUb2dP6L0SQIaa%2BBeDaJ7lxI3%2FmP89QwlPb1QGlgoCr4HrIDiQP4uGU2nunlWPgieoQmiFytUzgQhvTgJNT9zA1HmsK&X-Amz-Signature=0219c7923f5dd053b4546409b50c7997c4fe66a7bbe561721111d7a94d3c6f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSOA43W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFebPcxXjVwhlWKonPP5ndZ4AsPw2H7HXZOQW%2Fd5WY7CAiEA6j2P%2FXZDs9j%2Bd05mtt6LVvMkuhxk4rCKGT1qzNN8jzMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1ksfj2uoXfdyu6ASrcA2AQtWwm0bJBm4B3UaMzllvg7HZgGo6HIul2c1dGVuHqVe8OvHaMtzaRuwe7%2Bb1VI%2BNPJGQF0QHNRfNDKiLvZayaCvTZfDZgRRO0T%2FhP8aDxB%2FgiQC0c%2FN2Knm5SiZ%2FTuM6X6pjMOG1ut5gApieztutemRYemMeunQjKr4%2BxIlyFL4G4kYpN6Glfzj9OI%2FTNHUFmQi5NmSS4rG9JkiTmihVbE29GhQUmLYcdIQt6nJG%2FmNRqiu2NA8SCuFXOC6XThSOamUgq8Rt2jTY9%2BiXc4Hrd6uI5WVH8w9tLA4Y7fCxYwyLckSn8gPyi54JCGvbhx37O58f0kf%2FtZJawgiUsTvIaFKgTEmSLYPrnv81dEFc5ss96zGybKskrBZnOERFFbieKemq2HYI6PpJcB5UEezI%2Fxo0faV05g1UHK1qFClFUiXa8HDYOXbyREx3N0%2BDRI%2Fn7K0FxhDBpTu%2FE8uWjylVOvVPJGJ%2FAyC5AqluOZCqxK8DoE2RQ8dpqacOu7n1U56AgWRLsZi31p0K97U5QH2wM%2BUWu6KDM0cY4eqx16MAY6%2BZqhAMOvpC24GE9pkAZqBSkhv470R0YOXZag3n7oGumE%2B1UE%2Bd1bJzOXGB40GZDuSk0fQaAYkkUjSD0MMqz2sAGOqUB45ODNTkNRSNw%2BvdUrB6Q98%2FxXtOIBg%2B1WaQ6aJ%2FxzpIqjSxNVfD586D9QywpA2Zg50%2FOqWlPbr0rApbT8BLBbdCqHF34D%2BUplUSeQYM4X%2BUjpJQ4oWpk1kpU3t2Sew8y1FUb2dP6L0SQIaa%2BBeDaJ7lxI3%2FmP89QwlPb1QGlgoCr4HrIDiQP4uGU2nunlWPgieoQmiFytUzgQhvTgJNT9zA1HmsK&X-Amz-Signature=a1573863bd66e782692c76aca5a891dbc3e10de60377eeac911f8bdbc1b21e13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSOA43W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFebPcxXjVwhlWKonPP5ndZ4AsPw2H7HXZOQW%2Fd5WY7CAiEA6j2P%2FXZDs9j%2Bd05mtt6LVvMkuhxk4rCKGT1qzNN8jzMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1ksfj2uoXfdyu6ASrcA2AQtWwm0bJBm4B3UaMzllvg7HZgGo6HIul2c1dGVuHqVe8OvHaMtzaRuwe7%2Bb1VI%2BNPJGQF0QHNRfNDKiLvZayaCvTZfDZgRRO0T%2FhP8aDxB%2FgiQC0c%2FN2Knm5SiZ%2FTuM6X6pjMOG1ut5gApieztutemRYemMeunQjKr4%2BxIlyFL4G4kYpN6Glfzj9OI%2FTNHUFmQi5NmSS4rG9JkiTmihVbE29GhQUmLYcdIQt6nJG%2FmNRqiu2NA8SCuFXOC6XThSOamUgq8Rt2jTY9%2BiXc4Hrd6uI5WVH8w9tLA4Y7fCxYwyLckSn8gPyi54JCGvbhx37O58f0kf%2FtZJawgiUsTvIaFKgTEmSLYPrnv81dEFc5ss96zGybKskrBZnOERFFbieKemq2HYI6PpJcB5UEezI%2Fxo0faV05g1UHK1qFClFUiXa8HDYOXbyREx3N0%2BDRI%2Fn7K0FxhDBpTu%2FE8uWjylVOvVPJGJ%2FAyC5AqluOZCqxK8DoE2RQ8dpqacOu7n1U56AgWRLsZi31p0K97U5QH2wM%2BUWu6KDM0cY4eqx16MAY6%2BZqhAMOvpC24GE9pkAZqBSkhv470R0YOXZag3n7oGumE%2B1UE%2Bd1bJzOXGB40GZDuSk0fQaAYkkUjSD0MMqz2sAGOqUB45ODNTkNRSNw%2BvdUrB6Q98%2FxXtOIBg%2B1WaQ6aJ%2FxzpIqjSxNVfD586D9QywpA2Zg50%2FOqWlPbr0rApbT8BLBbdCqHF34D%2BUplUSeQYM4X%2BUjpJQ4oWpk1kpU3t2Sew8y1FUb2dP6L0SQIaa%2BBeDaJ7lxI3%2FmP89QwlPb1QGlgoCr4HrIDiQP4uGU2nunlWPgieoQmiFytUzgQhvTgJNT9zA1HmsK&X-Amz-Signature=8a78c797a240bdbe09f0d036ba0ef7142e15341ea63dd1684b2bd69346dd7589&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSOA43W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFebPcxXjVwhlWKonPP5ndZ4AsPw2H7HXZOQW%2Fd5WY7CAiEA6j2P%2FXZDs9j%2Bd05mtt6LVvMkuhxk4rCKGT1qzNN8jzMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1ksfj2uoXfdyu6ASrcA2AQtWwm0bJBm4B3UaMzllvg7HZgGo6HIul2c1dGVuHqVe8OvHaMtzaRuwe7%2Bb1VI%2BNPJGQF0QHNRfNDKiLvZayaCvTZfDZgRRO0T%2FhP8aDxB%2FgiQC0c%2FN2Knm5SiZ%2FTuM6X6pjMOG1ut5gApieztutemRYemMeunQjKr4%2BxIlyFL4G4kYpN6Glfzj9OI%2FTNHUFmQi5NmSS4rG9JkiTmihVbE29GhQUmLYcdIQt6nJG%2FmNRqiu2NA8SCuFXOC6XThSOamUgq8Rt2jTY9%2BiXc4Hrd6uI5WVH8w9tLA4Y7fCxYwyLckSn8gPyi54JCGvbhx37O58f0kf%2FtZJawgiUsTvIaFKgTEmSLYPrnv81dEFc5ss96zGybKskrBZnOERFFbieKemq2HYI6PpJcB5UEezI%2Fxo0faV05g1UHK1qFClFUiXa8HDYOXbyREx3N0%2BDRI%2Fn7K0FxhDBpTu%2FE8uWjylVOvVPJGJ%2FAyC5AqluOZCqxK8DoE2RQ8dpqacOu7n1U56AgWRLsZi31p0K97U5QH2wM%2BUWu6KDM0cY4eqx16MAY6%2BZqhAMOvpC24GE9pkAZqBSkhv470R0YOXZag3n7oGumE%2B1UE%2Bd1bJzOXGB40GZDuSk0fQaAYkkUjSD0MMqz2sAGOqUB45ODNTkNRSNw%2BvdUrB6Q98%2FxXtOIBg%2B1WaQ6aJ%2FxzpIqjSxNVfD586D9QywpA2Zg50%2FOqWlPbr0rApbT8BLBbdCqHF34D%2BUplUSeQYM4X%2BUjpJQ4oWpk1kpU3t2Sew8y1FUb2dP6L0SQIaa%2BBeDaJ7lxI3%2FmP89QwlPb1QGlgoCr4HrIDiQP4uGU2nunlWPgieoQmiFytUzgQhvTgJNT9zA1HmsK&X-Amz-Signature=8e3b214b78a36542a6ad938e79388541d0861dca50e5ece7c79d5259bc2d3c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
