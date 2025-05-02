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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMJTQ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCQEJ0M5xR9LGdONsFWnPuyaxVzhVnqmew%2BXAG4MZKmrQIgGITr1DQ76l4GJEP6Z%2FvevlejwTDH8gCFoTFSNEnRDRsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3CfSW200PIleqNwCrcA%2F6sWjWnyxGf%2Froqg1dSwPD%2FG4HdK7XFZ%2Bb7bVs4DN7h1NBzbihsdzb8ZsxtIBQ0KdZFyPzk6XaFJ3QNlfVfanpeVf0nCL0Kjahd05sDoCJH7vuseLOS3NLewYKhWgyH%2BoJlq7qS2fIcrG1TDeDStytXi1OKJdI5OGU2AWjb2LKkwBOdLsSi9NKU5xVwBFwN7jjw9b1FL0RYrtM%2F5966m0PygG%2FGNwD0VP4Zi%2Fu7gZMJv7tBLXAfY8JYS74IGilSL6NjLUAhcr0TyBG1s7yMlAiZpmYjgkL2viuMatOFtgvee6SDsRQYSoiXzCfHQ5A0hYWFfVcltHWQdBjE0vT5%2F1DtGmI5h2MSTvTqnr1qJFV5ZIlPUdDfLOhuHhIldPVWZuf8f3Zl4fVPOl7F7a%2B8tQRdWZFFTMJtclej8Ph9tHZMdXheEY626Q6gdViDhqLTbAKlWt1KbcvwDnWhCZuOCFo5FvJI81lO9O3GNSM3hmDKIueuHQkMe5ahlzch0R1O0x02z9ZiKMDRT0s2d7ZYuAOdc74cT%2FAEL2FVNQBr5CzljTPKMAN3wWGm9Cj9zrDY6TJwLzWL5iw7RtSBW%2FtEE9btYmszlFfapy75Ys%2BLKTSff489JDyuoabUcC56MIrX0sAGOqUBAg74jMKvWMT7oxCs1gJ7uPredMgSUolVlGxongxvpukE1B6cx7D%2Fh3EhJn0SgyXjT3byFox5OSA%2BCx2zRJ56htqMYkN0IHMmD989iL0Z7b2dmcR76nf02hqUh73KA7sIOS0BQy2uUMxyMDDvqtWvYNgXgyAHiosaf%2FVFcuRof2rR7JFS2tC4C0TeA4IM35F9aZSjJBY5KhCWJ5YvsQuJHf%2Fa563o&X-Amz-Signature=8d52476b7bf766dd3e0c307d96de0482040c1fd207749fab0afecc6e7041fa64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMJTQ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCQEJ0M5xR9LGdONsFWnPuyaxVzhVnqmew%2BXAG4MZKmrQIgGITr1DQ76l4GJEP6Z%2FvevlejwTDH8gCFoTFSNEnRDRsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3CfSW200PIleqNwCrcA%2F6sWjWnyxGf%2Froqg1dSwPD%2FG4HdK7XFZ%2Bb7bVs4DN7h1NBzbihsdzb8ZsxtIBQ0KdZFyPzk6XaFJ3QNlfVfanpeVf0nCL0Kjahd05sDoCJH7vuseLOS3NLewYKhWgyH%2BoJlq7qS2fIcrG1TDeDStytXi1OKJdI5OGU2AWjb2LKkwBOdLsSi9NKU5xVwBFwN7jjw9b1FL0RYrtM%2F5966m0PygG%2FGNwD0VP4Zi%2Fu7gZMJv7tBLXAfY8JYS74IGilSL6NjLUAhcr0TyBG1s7yMlAiZpmYjgkL2viuMatOFtgvee6SDsRQYSoiXzCfHQ5A0hYWFfVcltHWQdBjE0vT5%2F1DtGmI5h2MSTvTqnr1qJFV5ZIlPUdDfLOhuHhIldPVWZuf8f3Zl4fVPOl7F7a%2B8tQRdWZFFTMJtclej8Ph9tHZMdXheEY626Q6gdViDhqLTbAKlWt1KbcvwDnWhCZuOCFo5FvJI81lO9O3GNSM3hmDKIueuHQkMe5ahlzch0R1O0x02z9ZiKMDRT0s2d7ZYuAOdc74cT%2FAEL2FVNQBr5CzljTPKMAN3wWGm9Cj9zrDY6TJwLzWL5iw7RtSBW%2FtEE9btYmszlFfapy75Ys%2BLKTSff489JDyuoabUcC56MIrX0sAGOqUBAg74jMKvWMT7oxCs1gJ7uPredMgSUolVlGxongxvpukE1B6cx7D%2Fh3EhJn0SgyXjT3byFox5OSA%2BCx2zRJ56htqMYkN0IHMmD989iL0Z7b2dmcR76nf02hqUh73KA7sIOS0BQy2uUMxyMDDvqtWvYNgXgyAHiosaf%2FVFcuRof2rR7JFS2tC4C0TeA4IM35F9aZSjJBY5KhCWJ5YvsQuJHf%2Fa563o&X-Amz-Signature=f2fd54bf32ddd867e6ea0e2455afef2f26e7ecee731d3a6280c2c1e5fa8c785e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMJTQ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCQEJ0M5xR9LGdONsFWnPuyaxVzhVnqmew%2BXAG4MZKmrQIgGITr1DQ76l4GJEP6Z%2FvevlejwTDH8gCFoTFSNEnRDRsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3CfSW200PIleqNwCrcA%2F6sWjWnyxGf%2Froqg1dSwPD%2FG4HdK7XFZ%2Bb7bVs4DN7h1NBzbihsdzb8ZsxtIBQ0KdZFyPzk6XaFJ3QNlfVfanpeVf0nCL0Kjahd05sDoCJH7vuseLOS3NLewYKhWgyH%2BoJlq7qS2fIcrG1TDeDStytXi1OKJdI5OGU2AWjb2LKkwBOdLsSi9NKU5xVwBFwN7jjw9b1FL0RYrtM%2F5966m0PygG%2FGNwD0VP4Zi%2Fu7gZMJv7tBLXAfY8JYS74IGilSL6NjLUAhcr0TyBG1s7yMlAiZpmYjgkL2viuMatOFtgvee6SDsRQYSoiXzCfHQ5A0hYWFfVcltHWQdBjE0vT5%2F1DtGmI5h2MSTvTqnr1qJFV5ZIlPUdDfLOhuHhIldPVWZuf8f3Zl4fVPOl7F7a%2B8tQRdWZFFTMJtclej8Ph9tHZMdXheEY626Q6gdViDhqLTbAKlWt1KbcvwDnWhCZuOCFo5FvJI81lO9O3GNSM3hmDKIueuHQkMe5ahlzch0R1O0x02z9ZiKMDRT0s2d7ZYuAOdc74cT%2FAEL2FVNQBr5CzljTPKMAN3wWGm9Cj9zrDY6TJwLzWL5iw7RtSBW%2FtEE9btYmszlFfapy75Ys%2BLKTSff489JDyuoabUcC56MIrX0sAGOqUBAg74jMKvWMT7oxCs1gJ7uPredMgSUolVlGxongxvpukE1B6cx7D%2Fh3EhJn0SgyXjT3byFox5OSA%2BCx2zRJ56htqMYkN0IHMmD989iL0Z7b2dmcR76nf02hqUh73KA7sIOS0BQy2uUMxyMDDvqtWvYNgXgyAHiosaf%2FVFcuRof2rR7JFS2tC4C0TeA4IM35F9aZSjJBY5KhCWJ5YvsQuJHf%2Fa563o&X-Amz-Signature=6e2cf59dcad48ae7609c3bd3ae7bfb81d2b3474232fc7a678506c79913c7225d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMJTQ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCQEJ0M5xR9LGdONsFWnPuyaxVzhVnqmew%2BXAG4MZKmrQIgGITr1DQ76l4GJEP6Z%2FvevlejwTDH8gCFoTFSNEnRDRsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3CfSW200PIleqNwCrcA%2F6sWjWnyxGf%2Froqg1dSwPD%2FG4HdK7XFZ%2Bb7bVs4DN7h1NBzbihsdzb8ZsxtIBQ0KdZFyPzk6XaFJ3QNlfVfanpeVf0nCL0Kjahd05sDoCJH7vuseLOS3NLewYKhWgyH%2BoJlq7qS2fIcrG1TDeDStytXi1OKJdI5OGU2AWjb2LKkwBOdLsSi9NKU5xVwBFwN7jjw9b1FL0RYrtM%2F5966m0PygG%2FGNwD0VP4Zi%2Fu7gZMJv7tBLXAfY8JYS74IGilSL6NjLUAhcr0TyBG1s7yMlAiZpmYjgkL2viuMatOFtgvee6SDsRQYSoiXzCfHQ5A0hYWFfVcltHWQdBjE0vT5%2F1DtGmI5h2MSTvTqnr1qJFV5ZIlPUdDfLOhuHhIldPVWZuf8f3Zl4fVPOl7F7a%2B8tQRdWZFFTMJtclej8Ph9tHZMdXheEY626Q6gdViDhqLTbAKlWt1KbcvwDnWhCZuOCFo5FvJI81lO9O3GNSM3hmDKIueuHQkMe5ahlzch0R1O0x02z9ZiKMDRT0s2d7ZYuAOdc74cT%2FAEL2FVNQBr5CzljTPKMAN3wWGm9Cj9zrDY6TJwLzWL5iw7RtSBW%2FtEE9btYmszlFfapy75Ys%2BLKTSff489JDyuoabUcC56MIrX0sAGOqUBAg74jMKvWMT7oxCs1gJ7uPredMgSUolVlGxongxvpukE1B6cx7D%2Fh3EhJn0SgyXjT3byFox5OSA%2BCx2zRJ56htqMYkN0IHMmD989iL0Z7b2dmcR76nf02hqUh73KA7sIOS0BQy2uUMxyMDDvqtWvYNgXgyAHiosaf%2FVFcuRof2rR7JFS2tC4C0TeA4IM35F9aZSjJBY5KhCWJ5YvsQuJHf%2Fa563o&X-Amz-Signature=eef530be3b97e4399ce5a1788c172ff551ef1dc0a0d73eba897fd5639c61e012&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMJTQ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCQEJ0M5xR9LGdONsFWnPuyaxVzhVnqmew%2BXAG4MZKmrQIgGITr1DQ76l4GJEP6Z%2FvevlejwTDH8gCFoTFSNEnRDRsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3CfSW200PIleqNwCrcA%2F6sWjWnyxGf%2Froqg1dSwPD%2FG4HdK7XFZ%2Bb7bVs4DN7h1NBzbihsdzb8ZsxtIBQ0KdZFyPzk6XaFJ3QNlfVfanpeVf0nCL0Kjahd05sDoCJH7vuseLOS3NLewYKhWgyH%2BoJlq7qS2fIcrG1TDeDStytXi1OKJdI5OGU2AWjb2LKkwBOdLsSi9NKU5xVwBFwN7jjw9b1FL0RYrtM%2F5966m0PygG%2FGNwD0VP4Zi%2Fu7gZMJv7tBLXAfY8JYS74IGilSL6NjLUAhcr0TyBG1s7yMlAiZpmYjgkL2viuMatOFtgvee6SDsRQYSoiXzCfHQ5A0hYWFfVcltHWQdBjE0vT5%2F1DtGmI5h2MSTvTqnr1qJFV5ZIlPUdDfLOhuHhIldPVWZuf8f3Zl4fVPOl7F7a%2B8tQRdWZFFTMJtclej8Ph9tHZMdXheEY626Q6gdViDhqLTbAKlWt1KbcvwDnWhCZuOCFo5FvJI81lO9O3GNSM3hmDKIueuHQkMe5ahlzch0R1O0x02z9ZiKMDRT0s2d7ZYuAOdc74cT%2FAEL2FVNQBr5CzljTPKMAN3wWGm9Cj9zrDY6TJwLzWL5iw7RtSBW%2FtEE9btYmszlFfapy75Ys%2BLKTSff489JDyuoabUcC56MIrX0sAGOqUBAg74jMKvWMT7oxCs1gJ7uPredMgSUolVlGxongxvpukE1B6cx7D%2Fh3EhJn0SgyXjT3byFox5OSA%2BCx2zRJ56htqMYkN0IHMmD989iL0Z7b2dmcR76nf02hqUh73KA7sIOS0BQy2uUMxyMDDvqtWvYNgXgyAHiosaf%2FVFcuRof2rR7JFS2tC4C0TeA4IM35F9aZSjJBY5KhCWJ5YvsQuJHf%2Fa563o&X-Amz-Signature=33fef7d5f106147208a5c56e47e1b2400e891d16a0d13cdb6372a6d7670b77a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMJTQ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCQEJ0M5xR9LGdONsFWnPuyaxVzhVnqmew%2BXAG4MZKmrQIgGITr1DQ76l4GJEP6Z%2FvevlejwTDH8gCFoTFSNEnRDRsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3CfSW200PIleqNwCrcA%2F6sWjWnyxGf%2Froqg1dSwPD%2FG4HdK7XFZ%2Bb7bVs4DN7h1NBzbihsdzb8ZsxtIBQ0KdZFyPzk6XaFJ3QNlfVfanpeVf0nCL0Kjahd05sDoCJH7vuseLOS3NLewYKhWgyH%2BoJlq7qS2fIcrG1TDeDStytXi1OKJdI5OGU2AWjb2LKkwBOdLsSi9NKU5xVwBFwN7jjw9b1FL0RYrtM%2F5966m0PygG%2FGNwD0VP4Zi%2Fu7gZMJv7tBLXAfY8JYS74IGilSL6NjLUAhcr0TyBG1s7yMlAiZpmYjgkL2viuMatOFtgvee6SDsRQYSoiXzCfHQ5A0hYWFfVcltHWQdBjE0vT5%2F1DtGmI5h2MSTvTqnr1qJFV5ZIlPUdDfLOhuHhIldPVWZuf8f3Zl4fVPOl7F7a%2B8tQRdWZFFTMJtclej8Ph9tHZMdXheEY626Q6gdViDhqLTbAKlWt1KbcvwDnWhCZuOCFo5FvJI81lO9O3GNSM3hmDKIueuHQkMe5ahlzch0R1O0x02z9ZiKMDRT0s2d7ZYuAOdc74cT%2FAEL2FVNQBr5CzljTPKMAN3wWGm9Cj9zrDY6TJwLzWL5iw7RtSBW%2FtEE9btYmszlFfapy75Ys%2BLKTSff489JDyuoabUcC56MIrX0sAGOqUBAg74jMKvWMT7oxCs1gJ7uPredMgSUolVlGxongxvpukE1B6cx7D%2Fh3EhJn0SgyXjT3byFox5OSA%2BCx2zRJ56htqMYkN0IHMmD989iL0Z7b2dmcR76nf02hqUh73KA7sIOS0BQy2uUMxyMDDvqtWvYNgXgyAHiosaf%2FVFcuRof2rR7JFS2tC4C0TeA4IM35F9aZSjJBY5KhCWJ5YvsQuJHf%2Fa563o&X-Amz-Signature=0d6a2476f1c9ae8b421a0ba8c11c5ac382eff1c3c52c7b4aa6c5e3ab1fd9a040&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMJTQ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCQEJ0M5xR9LGdONsFWnPuyaxVzhVnqmew%2BXAG4MZKmrQIgGITr1DQ76l4GJEP6Z%2FvevlejwTDH8gCFoTFSNEnRDRsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3CfSW200PIleqNwCrcA%2F6sWjWnyxGf%2Froqg1dSwPD%2FG4HdK7XFZ%2Bb7bVs4DN7h1NBzbihsdzb8ZsxtIBQ0KdZFyPzk6XaFJ3QNlfVfanpeVf0nCL0Kjahd05sDoCJH7vuseLOS3NLewYKhWgyH%2BoJlq7qS2fIcrG1TDeDStytXi1OKJdI5OGU2AWjb2LKkwBOdLsSi9NKU5xVwBFwN7jjw9b1FL0RYrtM%2F5966m0PygG%2FGNwD0VP4Zi%2Fu7gZMJv7tBLXAfY8JYS74IGilSL6NjLUAhcr0TyBG1s7yMlAiZpmYjgkL2viuMatOFtgvee6SDsRQYSoiXzCfHQ5A0hYWFfVcltHWQdBjE0vT5%2F1DtGmI5h2MSTvTqnr1qJFV5ZIlPUdDfLOhuHhIldPVWZuf8f3Zl4fVPOl7F7a%2B8tQRdWZFFTMJtclej8Ph9tHZMdXheEY626Q6gdViDhqLTbAKlWt1KbcvwDnWhCZuOCFo5FvJI81lO9O3GNSM3hmDKIueuHQkMe5ahlzch0R1O0x02z9ZiKMDRT0s2d7ZYuAOdc74cT%2FAEL2FVNQBr5CzljTPKMAN3wWGm9Cj9zrDY6TJwLzWL5iw7RtSBW%2FtEE9btYmszlFfapy75Ys%2BLKTSff489JDyuoabUcC56MIrX0sAGOqUBAg74jMKvWMT7oxCs1gJ7uPredMgSUolVlGxongxvpukE1B6cx7D%2Fh3EhJn0SgyXjT3byFox5OSA%2BCx2zRJ56htqMYkN0IHMmD989iL0Z7b2dmcR76nf02hqUh73KA7sIOS0BQy2uUMxyMDDvqtWvYNgXgyAHiosaf%2FVFcuRof2rR7JFS2tC4C0TeA4IM35F9aZSjJBY5KhCWJ5YvsQuJHf%2Fa563o&X-Amz-Signature=c4d51d7abbf9c2d750101731d02b683914b07824ca7d56674f8af9c27fd75cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMJTQ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCQEJ0M5xR9LGdONsFWnPuyaxVzhVnqmew%2BXAG4MZKmrQIgGITr1DQ76l4GJEP6Z%2FvevlejwTDH8gCFoTFSNEnRDRsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3CfSW200PIleqNwCrcA%2F6sWjWnyxGf%2Froqg1dSwPD%2FG4HdK7XFZ%2Bb7bVs4DN7h1NBzbihsdzb8ZsxtIBQ0KdZFyPzk6XaFJ3QNlfVfanpeVf0nCL0Kjahd05sDoCJH7vuseLOS3NLewYKhWgyH%2BoJlq7qS2fIcrG1TDeDStytXi1OKJdI5OGU2AWjb2LKkwBOdLsSi9NKU5xVwBFwN7jjw9b1FL0RYrtM%2F5966m0PygG%2FGNwD0VP4Zi%2Fu7gZMJv7tBLXAfY8JYS74IGilSL6NjLUAhcr0TyBG1s7yMlAiZpmYjgkL2viuMatOFtgvee6SDsRQYSoiXzCfHQ5A0hYWFfVcltHWQdBjE0vT5%2F1DtGmI5h2MSTvTqnr1qJFV5ZIlPUdDfLOhuHhIldPVWZuf8f3Zl4fVPOl7F7a%2B8tQRdWZFFTMJtclej8Ph9tHZMdXheEY626Q6gdViDhqLTbAKlWt1KbcvwDnWhCZuOCFo5FvJI81lO9O3GNSM3hmDKIueuHQkMe5ahlzch0R1O0x02z9ZiKMDRT0s2d7ZYuAOdc74cT%2FAEL2FVNQBr5CzljTPKMAN3wWGm9Cj9zrDY6TJwLzWL5iw7RtSBW%2FtEE9btYmszlFfapy75Ys%2BLKTSff489JDyuoabUcC56MIrX0sAGOqUBAg74jMKvWMT7oxCs1gJ7uPredMgSUolVlGxongxvpukE1B6cx7D%2Fh3EhJn0SgyXjT3byFox5OSA%2BCx2zRJ56htqMYkN0IHMmD989iL0Z7b2dmcR76nf02hqUh73KA7sIOS0BQy2uUMxyMDDvqtWvYNgXgyAHiosaf%2FVFcuRof2rR7JFS2tC4C0TeA4IM35F9aZSjJBY5KhCWJ5YvsQuJHf%2Fa563o&X-Amz-Signature=649a54dcf750efc24c3019797e2c74a2ef6c887a8c8164ed753e6e0110669bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
