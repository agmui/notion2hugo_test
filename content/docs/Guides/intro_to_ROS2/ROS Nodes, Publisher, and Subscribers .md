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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZLRH5K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBe0XI0oRJCjx0M4GA3cZTgf%2BpLxXrIQ%2BrpQbBmZnRboAiAy%2BzgOG6jGZ2YcwmjzgsCbbQHsDkAH055HU%2BI%2FcEcONSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGzmTXagg4WU%2BunQKtwD7b3muKFysTyyiaKFSB7dCQC83tMI1azM5htFZtNz487BB4y7umNqLt%2FR42%2FaagfPspWHsWHFzA0rVF3SGH4Qs2DqXSXMvd%2FPNRN9yYEgPfpqf%2BXXn1WtTHFxE6q52ZFQ6X6DOXNLyb6AUWOXu%2FiiiL4ZPv3IrAckZZ2yaPcuZTqxQTG%2BVkhqd0p%2BbAOfUBa57a7voDYZQYWtI7ZHoVlJ63TFxvJM21grFhgtLp9lrE7%2FTmuUkekFvyuO58wJ%2FkU9fUoKD6xlOdEQRkT35jF8IiVYfDAd6j5TZPYjFeEXnh8QBMGZx5kDiukr87dKcIbeTwE3atji0DJfvkp4uHN%2FO8R8mnR1grrCPTpT%2BM0iCTPG4cSJi3Zi9jpZoADWw75Qt3E9aJ7EtSRYz26apTzx6fgPPrwEVukLWfTFwaWF3dXAOMRRL375IH2Ikim5A8SNSlyT0EPkowQxKF8Jppu4rRbYA3bEZhoT%2BhoihqaYMcnYW%2BdtczUFlWCkQ34tzRyA0gEhhaag7x%2BDuiAqgb%2B%2FGlN7Dj2jcUfNurfuQQfmfTmyq%2Blsb1D0Vyga5S6dezVNBjaad5OgywkE%2BwhkyW7c9UbF8wCsjh7yXqLEalLG9rgWuU2qltrEoGk5Bw4wopauvwY6pgHU9JG5Av8%2F0tlY5EZHpQ%2F9%2F9ib8tG9QlcIjC00SFZ%2BbxV9qVOCcWBmucGO0co5zctopU%2B10viy8k2w4RUTgjT9nJriC5RxklzV%2FANzeKoc%2FCYxWM6yhsR%2FlSJH8nEaDBG99TzcWV%2F62uoaNav%2FF%2BKnkpr8wBVS7q6or674VXq4fXOfJ3bdPcDQOd%2BkWocvMH3XJ8wLMNNd5nClwOqZ6bXwH%2BVTn9gV&X-Amz-Signature=7020c40581aea71cd3a04ebed60f502c051f3eff3ed7934f867cb162a761f3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZLRH5K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBe0XI0oRJCjx0M4GA3cZTgf%2BpLxXrIQ%2BrpQbBmZnRboAiAy%2BzgOG6jGZ2YcwmjzgsCbbQHsDkAH055HU%2BI%2FcEcONSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGzmTXagg4WU%2BunQKtwD7b3muKFysTyyiaKFSB7dCQC83tMI1azM5htFZtNz487BB4y7umNqLt%2FR42%2FaagfPspWHsWHFzA0rVF3SGH4Qs2DqXSXMvd%2FPNRN9yYEgPfpqf%2BXXn1WtTHFxE6q52ZFQ6X6DOXNLyb6AUWOXu%2FiiiL4ZPv3IrAckZZ2yaPcuZTqxQTG%2BVkhqd0p%2BbAOfUBa57a7voDYZQYWtI7ZHoVlJ63TFxvJM21grFhgtLp9lrE7%2FTmuUkekFvyuO58wJ%2FkU9fUoKD6xlOdEQRkT35jF8IiVYfDAd6j5TZPYjFeEXnh8QBMGZx5kDiukr87dKcIbeTwE3atji0DJfvkp4uHN%2FO8R8mnR1grrCPTpT%2BM0iCTPG4cSJi3Zi9jpZoADWw75Qt3E9aJ7EtSRYz26apTzx6fgPPrwEVukLWfTFwaWF3dXAOMRRL375IH2Ikim5A8SNSlyT0EPkowQxKF8Jppu4rRbYA3bEZhoT%2BhoihqaYMcnYW%2BdtczUFlWCkQ34tzRyA0gEhhaag7x%2BDuiAqgb%2B%2FGlN7Dj2jcUfNurfuQQfmfTmyq%2Blsb1D0Vyga5S6dezVNBjaad5OgywkE%2BwhkyW7c9UbF8wCsjh7yXqLEalLG9rgWuU2qltrEoGk5Bw4wopauvwY6pgHU9JG5Av8%2F0tlY5EZHpQ%2F9%2F9ib8tG9QlcIjC00SFZ%2BbxV9qVOCcWBmucGO0co5zctopU%2B10viy8k2w4RUTgjT9nJriC5RxklzV%2FANzeKoc%2FCYxWM6yhsR%2FlSJH8nEaDBG99TzcWV%2F62uoaNav%2FF%2BKnkpr8wBVS7q6or674VXq4fXOfJ3bdPcDQOd%2BkWocvMH3XJ8wLMNNd5nClwOqZ6bXwH%2BVTn9gV&X-Amz-Signature=9a2df76266decf424128275be62f24e95b19cce6238473f6f4e1389ba82f783e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZLRH5K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBe0XI0oRJCjx0M4GA3cZTgf%2BpLxXrIQ%2BrpQbBmZnRboAiAy%2BzgOG6jGZ2YcwmjzgsCbbQHsDkAH055HU%2BI%2FcEcONSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGzmTXagg4WU%2BunQKtwD7b3muKFysTyyiaKFSB7dCQC83tMI1azM5htFZtNz487BB4y7umNqLt%2FR42%2FaagfPspWHsWHFzA0rVF3SGH4Qs2DqXSXMvd%2FPNRN9yYEgPfpqf%2BXXn1WtTHFxE6q52ZFQ6X6DOXNLyb6AUWOXu%2FiiiL4ZPv3IrAckZZ2yaPcuZTqxQTG%2BVkhqd0p%2BbAOfUBa57a7voDYZQYWtI7ZHoVlJ63TFxvJM21grFhgtLp9lrE7%2FTmuUkekFvyuO58wJ%2FkU9fUoKD6xlOdEQRkT35jF8IiVYfDAd6j5TZPYjFeEXnh8QBMGZx5kDiukr87dKcIbeTwE3atji0DJfvkp4uHN%2FO8R8mnR1grrCPTpT%2BM0iCTPG4cSJi3Zi9jpZoADWw75Qt3E9aJ7EtSRYz26apTzx6fgPPrwEVukLWfTFwaWF3dXAOMRRL375IH2Ikim5A8SNSlyT0EPkowQxKF8Jppu4rRbYA3bEZhoT%2BhoihqaYMcnYW%2BdtczUFlWCkQ34tzRyA0gEhhaag7x%2BDuiAqgb%2B%2FGlN7Dj2jcUfNurfuQQfmfTmyq%2Blsb1D0Vyga5S6dezVNBjaad5OgywkE%2BwhkyW7c9UbF8wCsjh7yXqLEalLG9rgWuU2qltrEoGk5Bw4wopauvwY6pgHU9JG5Av8%2F0tlY5EZHpQ%2F9%2F9ib8tG9QlcIjC00SFZ%2BbxV9qVOCcWBmucGO0co5zctopU%2B10viy8k2w4RUTgjT9nJriC5RxklzV%2FANzeKoc%2FCYxWM6yhsR%2FlSJH8nEaDBG99TzcWV%2F62uoaNav%2FF%2BKnkpr8wBVS7q6or674VXq4fXOfJ3bdPcDQOd%2BkWocvMH3XJ8wLMNNd5nClwOqZ6bXwH%2BVTn9gV&X-Amz-Signature=2fa576bd7ddd9e599bb679d214b5228d21dc6ed15af7aca22b74ff7b3a499d36&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZLRH5K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBe0XI0oRJCjx0M4GA3cZTgf%2BpLxXrIQ%2BrpQbBmZnRboAiAy%2BzgOG6jGZ2YcwmjzgsCbbQHsDkAH055HU%2BI%2FcEcONSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGzmTXagg4WU%2BunQKtwD7b3muKFysTyyiaKFSB7dCQC83tMI1azM5htFZtNz487BB4y7umNqLt%2FR42%2FaagfPspWHsWHFzA0rVF3SGH4Qs2DqXSXMvd%2FPNRN9yYEgPfpqf%2BXXn1WtTHFxE6q52ZFQ6X6DOXNLyb6AUWOXu%2FiiiL4ZPv3IrAckZZ2yaPcuZTqxQTG%2BVkhqd0p%2BbAOfUBa57a7voDYZQYWtI7ZHoVlJ63TFxvJM21grFhgtLp9lrE7%2FTmuUkekFvyuO58wJ%2FkU9fUoKD6xlOdEQRkT35jF8IiVYfDAd6j5TZPYjFeEXnh8QBMGZx5kDiukr87dKcIbeTwE3atji0DJfvkp4uHN%2FO8R8mnR1grrCPTpT%2BM0iCTPG4cSJi3Zi9jpZoADWw75Qt3E9aJ7EtSRYz26apTzx6fgPPrwEVukLWfTFwaWF3dXAOMRRL375IH2Ikim5A8SNSlyT0EPkowQxKF8Jppu4rRbYA3bEZhoT%2BhoihqaYMcnYW%2BdtczUFlWCkQ34tzRyA0gEhhaag7x%2BDuiAqgb%2B%2FGlN7Dj2jcUfNurfuQQfmfTmyq%2Blsb1D0Vyga5S6dezVNBjaad5OgywkE%2BwhkyW7c9UbF8wCsjh7yXqLEalLG9rgWuU2qltrEoGk5Bw4wopauvwY6pgHU9JG5Av8%2F0tlY5EZHpQ%2F9%2F9ib8tG9QlcIjC00SFZ%2BbxV9qVOCcWBmucGO0co5zctopU%2B10viy8k2w4RUTgjT9nJriC5RxklzV%2FANzeKoc%2FCYxWM6yhsR%2FlSJH8nEaDBG99TzcWV%2F62uoaNav%2FF%2BKnkpr8wBVS7q6or674VXq4fXOfJ3bdPcDQOd%2BkWocvMH3XJ8wLMNNd5nClwOqZ6bXwH%2BVTn9gV&X-Amz-Signature=5893d0da07012010a5cee2e763915138533a103a21b33dd8b971ac8ba056560f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZLRH5K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBe0XI0oRJCjx0M4GA3cZTgf%2BpLxXrIQ%2BrpQbBmZnRboAiAy%2BzgOG6jGZ2YcwmjzgsCbbQHsDkAH055HU%2BI%2FcEcONSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGzmTXagg4WU%2BunQKtwD7b3muKFysTyyiaKFSB7dCQC83tMI1azM5htFZtNz487BB4y7umNqLt%2FR42%2FaagfPspWHsWHFzA0rVF3SGH4Qs2DqXSXMvd%2FPNRN9yYEgPfpqf%2BXXn1WtTHFxE6q52ZFQ6X6DOXNLyb6AUWOXu%2FiiiL4ZPv3IrAckZZ2yaPcuZTqxQTG%2BVkhqd0p%2BbAOfUBa57a7voDYZQYWtI7ZHoVlJ63TFxvJM21grFhgtLp9lrE7%2FTmuUkekFvyuO58wJ%2FkU9fUoKD6xlOdEQRkT35jF8IiVYfDAd6j5TZPYjFeEXnh8QBMGZx5kDiukr87dKcIbeTwE3atji0DJfvkp4uHN%2FO8R8mnR1grrCPTpT%2BM0iCTPG4cSJi3Zi9jpZoADWw75Qt3E9aJ7EtSRYz26apTzx6fgPPrwEVukLWfTFwaWF3dXAOMRRL375IH2Ikim5A8SNSlyT0EPkowQxKF8Jppu4rRbYA3bEZhoT%2BhoihqaYMcnYW%2BdtczUFlWCkQ34tzRyA0gEhhaag7x%2BDuiAqgb%2B%2FGlN7Dj2jcUfNurfuQQfmfTmyq%2Blsb1D0Vyga5S6dezVNBjaad5OgywkE%2BwhkyW7c9UbF8wCsjh7yXqLEalLG9rgWuU2qltrEoGk5Bw4wopauvwY6pgHU9JG5Av8%2F0tlY5EZHpQ%2F9%2F9ib8tG9QlcIjC00SFZ%2BbxV9qVOCcWBmucGO0co5zctopU%2B10viy8k2w4RUTgjT9nJriC5RxklzV%2FANzeKoc%2FCYxWM6yhsR%2FlSJH8nEaDBG99TzcWV%2F62uoaNav%2FF%2BKnkpr8wBVS7q6or674VXq4fXOfJ3bdPcDQOd%2BkWocvMH3XJ8wLMNNd5nClwOqZ6bXwH%2BVTn9gV&X-Amz-Signature=3d870693ad80c7b9cb885a4b1636fdb95e79f526124232ab0c3898610e1629b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZLRH5K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBe0XI0oRJCjx0M4GA3cZTgf%2BpLxXrIQ%2BrpQbBmZnRboAiAy%2BzgOG6jGZ2YcwmjzgsCbbQHsDkAH055HU%2BI%2FcEcONSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGzmTXagg4WU%2BunQKtwD7b3muKFysTyyiaKFSB7dCQC83tMI1azM5htFZtNz487BB4y7umNqLt%2FR42%2FaagfPspWHsWHFzA0rVF3SGH4Qs2DqXSXMvd%2FPNRN9yYEgPfpqf%2BXXn1WtTHFxE6q52ZFQ6X6DOXNLyb6AUWOXu%2FiiiL4ZPv3IrAckZZ2yaPcuZTqxQTG%2BVkhqd0p%2BbAOfUBa57a7voDYZQYWtI7ZHoVlJ63TFxvJM21grFhgtLp9lrE7%2FTmuUkekFvyuO58wJ%2FkU9fUoKD6xlOdEQRkT35jF8IiVYfDAd6j5TZPYjFeEXnh8QBMGZx5kDiukr87dKcIbeTwE3atji0DJfvkp4uHN%2FO8R8mnR1grrCPTpT%2BM0iCTPG4cSJi3Zi9jpZoADWw75Qt3E9aJ7EtSRYz26apTzx6fgPPrwEVukLWfTFwaWF3dXAOMRRL375IH2Ikim5A8SNSlyT0EPkowQxKF8Jppu4rRbYA3bEZhoT%2BhoihqaYMcnYW%2BdtczUFlWCkQ34tzRyA0gEhhaag7x%2BDuiAqgb%2B%2FGlN7Dj2jcUfNurfuQQfmfTmyq%2Blsb1D0Vyga5S6dezVNBjaad5OgywkE%2BwhkyW7c9UbF8wCsjh7yXqLEalLG9rgWuU2qltrEoGk5Bw4wopauvwY6pgHU9JG5Av8%2F0tlY5EZHpQ%2F9%2F9ib8tG9QlcIjC00SFZ%2BbxV9qVOCcWBmucGO0co5zctopU%2B10viy8k2w4RUTgjT9nJriC5RxklzV%2FANzeKoc%2FCYxWM6yhsR%2FlSJH8nEaDBG99TzcWV%2F62uoaNav%2FF%2BKnkpr8wBVS7q6or674VXq4fXOfJ3bdPcDQOd%2BkWocvMH3XJ8wLMNNd5nClwOqZ6bXwH%2BVTn9gV&X-Amz-Signature=2d4de0c4925e3feada3ee73e9d7fbabcc04e825c1b49e3e60ecc0565430c6f03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZLRH5K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBe0XI0oRJCjx0M4GA3cZTgf%2BpLxXrIQ%2BrpQbBmZnRboAiAy%2BzgOG6jGZ2YcwmjzgsCbbQHsDkAH055HU%2BI%2FcEcONSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGzmTXagg4WU%2BunQKtwD7b3muKFysTyyiaKFSB7dCQC83tMI1azM5htFZtNz487BB4y7umNqLt%2FR42%2FaagfPspWHsWHFzA0rVF3SGH4Qs2DqXSXMvd%2FPNRN9yYEgPfpqf%2BXXn1WtTHFxE6q52ZFQ6X6DOXNLyb6AUWOXu%2FiiiL4ZPv3IrAckZZ2yaPcuZTqxQTG%2BVkhqd0p%2BbAOfUBa57a7voDYZQYWtI7ZHoVlJ63TFxvJM21grFhgtLp9lrE7%2FTmuUkekFvyuO58wJ%2FkU9fUoKD6xlOdEQRkT35jF8IiVYfDAd6j5TZPYjFeEXnh8QBMGZx5kDiukr87dKcIbeTwE3atji0DJfvkp4uHN%2FO8R8mnR1grrCPTpT%2BM0iCTPG4cSJi3Zi9jpZoADWw75Qt3E9aJ7EtSRYz26apTzx6fgPPrwEVukLWfTFwaWF3dXAOMRRL375IH2Ikim5A8SNSlyT0EPkowQxKF8Jppu4rRbYA3bEZhoT%2BhoihqaYMcnYW%2BdtczUFlWCkQ34tzRyA0gEhhaag7x%2BDuiAqgb%2B%2FGlN7Dj2jcUfNurfuQQfmfTmyq%2Blsb1D0Vyga5S6dezVNBjaad5OgywkE%2BwhkyW7c9UbF8wCsjh7yXqLEalLG9rgWuU2qltrEoGk5Bw4wopauvwY6pgHU9JG5Av8%2F0tlY5EZHpQ%2F9%2F9ib8tG9QlcIjC00SFZ%2BbxV9qVOCcWBmucGO0co5zctopU%2B10viy8k2w4RUTgjT9nJriC5RxklzV%2FANzeKoc%2FCYxWM6yhsR%2FlSJH8nEaDBG99TzcWV%2F62uoaNav%2FF%2BKnkpr8wBVS7q6or674VXq4fXOfJ3bdPcDQOd%2BkWocvMH3XJ8wLMNNd5nClwOqZ6bXwH%2BVTn9gV&X-Amz-Signature=fffa6f02988a7c2288cb938f9b956742baa8e573ba7e3116af5800dfd0c5350f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZLRH5K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBe0XI0oRJCjx0M4GA3cZTgf%2BpLxXrIQ%2BrpQbBmZnRboAiAy%2BzgOG6jGZ2YcwmjzgsCbbQHsDkAH055HU%2BI%2FcEcONSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGzmTXagg4WU%2BunQKtwD7b3muKFysTyyiaKFSB7dCQC83tMI1azM5htFZtNz487BB4y7umNqLt%2FR42%2FaagfPspWHsWHFzA0rVF3SGH4Qs2DqXSXMvd%2FPNRN9yYEgPfpqf%2BXXn1WtTHFxE6q52ZFQ6X6DOXNLyb6AUWOXu%2FiiiL4ZPv3IrAckZZ2yaPcuZTqxQTG%2BVkhqd0p%2BbAOfUBa57a7voDYZQYWtI7ZHoVlJ63TFxvJM21grFhgtLp9lrE7%2FTmuUkekFvyuO58wJ%2FkU9fUoKD6xlOdEQRkT35jF8IiVYfDAd6j5TZPYjFeEXnh8QBMGZx5kDiukr87dKcIbeTwE3atji0DJfvkp4uHN%2FO8R8mnR1grrCPTpT%2BM0iCTPG4cSJi3Zi9jpZoADWw75Qt3E9aJ7EtSRYz26apTzx6fgPPrwEVukLWfTFwaWF3dXAOMRRL375IH2Ikim5A8SNSlyT0EPkowQxKF8Jppu4rRbYA3bEZhoT%2BhoihqaYMcnYW%2BdtczUFlWCkQ34tzRyA0gEhhaag7x%2BDuiAqgb%2B%2FGlN7Dj2jcUfNurfuQQfmfTmyq%2Blsb1D0Vyga5S6dezVNBjaad5OgywkE%2BwhkyW7c9UbF8wCsjh7yXqLEalLG9rgWuU2qltrEoGk5Bw4wopauvwY6pgHU9JG5Av8%2F0tlY5EZHpQ%2F9%2F9ib8tG9QlcIjC00SFZ%2BbxV9qVOCcWBmucGO0co5zctopU%2B10viy8k2w4RUTgjT9nJriC5RxklzV%2FANzeKoc%2FCYxWM6yhsR%2FlSJH8nEaDBG99TzcWV%2F62uoaNav%2FF%2BKnkpr8wBVS7q6or674VXq4fXOfJ3bdPcDQOd%2BkWocvMH3XJ8wLMNNd5nClwOqZ6bXwH%2BVTn9gV&X-Amz-Signature=6253a5d77f5afa51c738bc93be7ab62ae5cc7722d826c8d6c84ce0767c2bccec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
