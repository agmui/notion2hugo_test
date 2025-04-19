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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOHE7IM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmvBTJfUCJ3F1iRoG4LEAiViyzNK7p%2BjnFo2d2LaZi7QIgc5slNmN7NGW%2BaU5kCMnzW2%2FfXwmxG0yY9yHVML4OhSoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMkeX16lz2pzs23%2FCrcA%2Ff%2FfErchqyZzzrD1m15xbyDV8hR9jtPlu2%2BhpHRjij%2BPV2UKlGEMQKzrlKNZl1Ld2XeMDx5GFSAdMA4w10%2FaIO6K8dJncLmxnIoS4Wy0qe9ZmnGuJ%2Bq%2Foqp0VAdAA5203tQlW%2B6yfFQ%2Bbbr2AYwqQW205P6E%2BPT3vJm2I7Rjpj9pDfOFY4QPIY2wm2tbrXhb6x5YZK6TRCzU45CwJppqz1XK9hkkAzDwa%2BVW0UNLwRBjf60Sg2gHd98YeuVwneVatuPZ2BK8HswwojDpfLxqL6n4QZRX7QTaAh9ETKhKiFB0ByOA6KjbE5ErAKrxGEA2KHmimA0pf3Mk3BgjbXLfMFJfrMkmnHZJCUe9NVx1tQouZ13Z1fJP37%2Frot5oXiAIwnPmDi00vO21Nc8adzJwURaIF0QJjwuynjf4BJ1KYzw%2BMpGBAZePoW%2BgB2qoF2ihd1rF7eDiaV%2FWz3QZgIC4RD8jyfNoRQGp0UGcbznrlU5HYy%2FYVPo2afr%2Fs3pjdVuk8PMsyNFUjhydnAaXARgQlmM2A3XlenAB2S5nSih0mjPsTwi81ZBLRowO7naanp3rH3a%2FyCvFjFsG0RMN5Bme%2FoyMCMSKTw%2Flk01H%2FSOuBJ52FYteov6eyt58yg5MNigj8AGOqUB4W0WgdKQzKemnDiqF5fL6xh%2FAdZwvYmzewVASBoocpsRRUkHG%2Bl3%2Byon9stYoGhsWUO9%2BnXeDWAr3D2MnOrVyhaHyciqnBQeg5huKjKegXw8Dem%2BQFM0SEt%2BYvHKrQpFrTjlONF7EYJ%2FsJRINcZL6D3HyalbuEcjvQ9Hr9h06jJJSX5e2N7hsKtAb2dZYIFao5zxKleL2i1eOF1xniZn1xfLNGx1&X-Amz-Signature=947448aa5e67229a05656d67d1564fa747ae41f43d77a4008107ffa01d200e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOHE7IM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmvBTJfUCJ3F1iRoG4LEAiViyzNK7p%2BjnFo2d2LaZi7QIgc5slNmN7NGW%2BaU5kCMnzW2%2FfXwmxG0yY9yHVML4OhSoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMkeX16lz2pzs23%2FCrcA%2Ff%2FfErchqyZzzrD1m15xbyDV8hR9jtPlu2%2BhpHRjij%2BPV2UKlGEMQKzrlKNZl1Ld2XeMDx5GFSAdMA4w10%2FaIO6K8dJncLmxnIoS4Wy0qe9ZmnGuJ%2Bq%2Foqp0VAdAA5203tQlW%2B6yfFQ%2Bbbr2AYwqQW205P6E%2BPT3vJm2I7Rjpj9pDfOFY4QPIY2wm2tbrXhb6x5YZK6TRCzU45CwJppqz1XK9hkkAzDwa%2BVW0UNLwRBjf60Sg2gHd98YeuVwneVatuPZ2BK8HswwojDpfLxqL6n4QZRX7QTaAh9ETKhKiFB0ByOA6KjbE5ErAKrxGEA2KHmimA0pf3Mk3BgjbXLfMFJfrMkmnHZJCUe9NVx1tQouZ13Z1fJP37%2Frot5oXiAIwnPmDi00vO21Nc8adzJwURaIF0QJjwuynjf4BJ1KYzw%2BMpGBAZePoW%2BgB2qoF2ihd1rF7eDiaV%2FWz3QZgIC4RD8jyfNoRQGp0UGcbznrlU5HYy%2FYVPo2afr%2Fs3pjdVuk8PMsyNFUjhydnAaXARgQlmM2A3XlenAB2S5nSih0mjPsTwi81ZBLRowO7naanp3rH3a%2FyCvFjFsG0RMN5Bme%2FoyMCMSKTw%2Flk01H%2FSOuBJ52FYteov6eyt58yg5MNigj8AGOqUB4W0WgdKQzKemnDiqF5fL6xh%2FAdZwvYmzewVASBoocpsRRUkHG%2Bl3%2Byon9stYoGhsWUO9%2BnXeDWAr3D2MnOrVyhaHyciqnBQeg5huKjKegXw8Dem%2BQFM0SEt%2BYvHKrQpFrTjlONF7EYJ%2FsJRINcZL6D3HyalbuEcjvQ9Hr9h06jJJSX5e2N7hsKtAb2dZYIFao5zxKleL2i1eOF1xniZn1xfLNGx1&X-Amz-Signature=b9d980286da7f9d5f58fa9edd98cc93eca32f40d25cbc1266244b66fd50560a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOHE7IM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmvBTJfUCJ3F1iRoG4LEAiViyzNK7p%2BjnFo2d2LaZi7QIgc5slNmN7NGW%2BaU5kCMnzW2%2FfXwmxG0yY9yHVML4OhSoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMkeX16lz2pzs23%2FCrcA%2Ff%2FfErchqyZzzrD1m15xbyDV8hR9jtPlu2%2BhpHRjij%2BPV2UKlGEMQKzrlKNZl1Ld2XeMDx5GFSAdMA4w10%2FaIO6K8dJncLmxnIoS4Wy0qe9ZmnGuJ%2Bq%2Foqp0VAdAA5203tQlW%2B6yfFQ%2Bbbr2AYwqQW205P6E%2BPT3vJm2I7Rjpj9pDfOFY4QPIY2wm2tbrXhb6x5YZK6TRCzU45CwJppqz1XK9hkkAzDwa%2BVW0UNLwRBjf60Sg2gHd98YeuVwneVatuPZ2BK8HswwojDpfLxqL6n4QZRX7QTaAh9ETKhKiFB0ByOA6KjbE5ErAKrxGEA2KHmimA0pf3Mk3BgjbXLfMFJfrMkmnHZJCUe9NVx1tQouZ13Z1fJP37%2Frot5oXiAIwnPmDi00vO21Nc8adzJwURaIF0QJjwuynjf4BJ1KYzw%2BMpGBAZePoW%2BgB2qoF2ihd1rF7eDiaV%2FWz3QZgIC4RD8jyfNoRQGp0UGcbznrlU5HYy%2FYVPo2afr%2Fs3pjdVuk8PMsyNFUjhydnAaXARgQlmM2A3XlenAB2S5nSih0mjPsTwi81ZBLRowO7naanp3rH3a%2FyCvFjFsG0RMN5Bme%2FoyMCMSKTw%2Flk01H%2FSOuBJ52FYteov6eyt58yg5MNigj8AGOqUB4W0WgdKQzKemnDiqF5fL6xh%2FAdZwvYmzewVASBoocpsRRUkHG%2Bl3%2Byon9stYoGhsWUO9%2BnXeDWAr3D2MnOrVyhaHyciqnBQeg5huKjKegXw8Dem%2BQFM0SEt%2BYvHKrQpFrTjlONF7EYJ%2FsJRINcZL6D3HyalbuEcjvQ9Hr9h06jJJSX5e2N7hsKtAb2dZYIFao5zxKleL2i1eOF1xniZn1xfLNGx1&X-Amz-Signature=89015a3cad75a2561c74d3fee8a2a20cd9c756d0635a72a159d5acbf1dfde793&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOHE7IM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmvBTJfUCJ3F1iRoG4LEAiViyzNK7p%2BjnFo2d2LaZi7QIgc5slNmN7NGW%2BaU5kCMnzW2%2FfXwmxG0yY9yHVML4OhSoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMkeX16lz2pzs23%2FCrcA%2Ff%2FfErchqyZzzrD1m15xbyDV8hR9jtPlu2%2BhpHRjij%2BPV2UKlGEMQKzrlKNZl1Ld2XeMDx5GFSAdMA4w10%2FaIO6K8dJncLmxnIoS4Wy0qe9ZmnGuJ%2Bq%2Foqp0VAdAA5203tQlW%2B6yfFQ%2Bbbr2AYwqQW205P6E%2BPT3vJm2I7Rjpj9pDfOFY4QPIY2wm2tbrXhb6x5YZK6TRCzU45CwJppqz1XK9hkkAzDwa%2BVW0UNLwRBjf60Sg2gHd98YeuVwneVatuPZ2BK8HswwojDpfLxqL6n4QZRX7QTaAh9ETKhKiFB0ByOA6KjbE5ErAKrxGEA2KHmimA0pf3Mk3BgjbXLfMFJfrMkmnHZJCUe9NVx1tQouZ13Z1fJP37%2Frot5oXiAIwnPmDi00vO21Nc8adzJwURaIF0QJjwuynjf4BJ1KYzw%2BMpGBAZePoW%2BgB2qoF2ihd1rF7eDiaV%2FWz3QZgIC4RD8jyfNoRQGp0UGcbznrlU5HYy%2FYVPo2afr%2Fs3pjdVuk8PMsyNFUjhydnAaXARgQlmM2A3XlenAB2S5nSih0mjPsTwi81ZBLRowO7naanp3rH3a%2FyCvFjFsG0RMN5Bme%2FoyMCMSKTw%2Flk01H%2FSOuBJ52FYteov6eyt58yg5MNigj8AGOqUB4W0WgdKQzKemnDiqF5fL6xh%2FAdZwvYmzewVASBoocpsRRUkHG%2Bl3%2Byon9stYoGhsWUO9%2BnXeDWAr3D2MnOrVyhaHyciqnBQeg5huKjKegXw8Dem%2BQFM0SEt%2BYvHKrQpFrTjlONF7EYJ%2FsJRINcZL6D3HyalbuEcjvQ9Hr9h06jJJSX5e2N7hsKtAb2dZYIFao5zxKleL2i1eOF1xniZn1xfLNGx1&X-Amz-Signature=ef5e337b53adfe337bf4b3784eae12add45b616207d9eac529b27008d1fd30a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOHE7IM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmvBTJfUCJ3F1iRoG4LEAiViyzNK7p%2BjnFo2d2LaZi7QIgc5slNmN7NGW%2BaU5kCMnzW2%2FfXwmxG0yY9yHVML4OhSoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMkeX16lz2pzs23%2FCrcA%2Ff%2FfErchqyZzzrD1m15xbyDV8hR9jtPlu2%2BhpHRjij%2BPV2UKlGEMQKzrlKNZl1Ld2XeMDx5GFSAdMA4w10%2FaIO6K8dJncLmxnIoS4Wy0qe9ZmnGuJ%2Bq%2Foqp0VAdAA5203tQlW%2B6yfFQ%2Bbbr2AYwqQW205P6E%2BPT3vJm2I7Rjpj9pDfOFY4QPIY2wm2tbrXhb6x5YZK6TRCzU45CwJppqz1XK9hkkAzDwa%2BVW0UNLwRBjf60Sg2gHd98YeuVwneVatuPZ2BK8HswwojDpfLxqL6n4QZRX7QTaAh9ETKhKiFB0ByOA6KjbE5ErAKrxGEA2KHmimA0pf3Mk3BgjbXLfMFJfrMkmnHZJCUe9NVx1tQouZ13Z1fJP37%2Frot5oXiAIwnPmDi00vO21Nc8adzJwURaIF0QJjwuynjf4BJ1KYzw%2BMpGBAZePoW%2BgB2qoF2ihd1rF7eDiaV%2FWz3QZgIC4RD8jyfNoRQGp0UGcbznrlU5HYy%2FYVPo2afr%2Fs3pjdVuk8PMsyNFUjhydnAaXARgQlmM2A3XlenAB2S5nSih0mjPsTwi81ZBLRowO7naanp3rH3a%2FyCvFjFsG0RMN5Bme%2FoyMCMSKTw%2Flk01H%2FSOuBJ52FYteov6eyt58yg5MNigj8AGOqUB4W0WgdKQzKemnDiqF5fL6xh%2FAdZwvYmzewVASBoocpsRRUkHG%2Bl3%2Byon9stYoGhsWUO9%2BnXeDWAr3D2MnOrVyhaHyciqnBQeg5huKjKegXw8Dem%2BQFM0SEt%2BYvHKrQpFrTjlONF7EYJ%2FsJRINcZL6D3HyalbuEcjvQ9Hr9h06jJJSX5e2N7hsKtAb2dZYIFao5zxKleL2i1eOF1xniZn1xfLNGx1&X-Amz-Signature=48e6901461d9ae8f38c0369b4d2a9d44d62214d76aadb7e90ed4d2048bf26283&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOHE7IM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmvBTJfUCJ3F1iRoG4LEAiViyzNK7p%2BjnFo2d2LaZi7QIgc5slNmN7NGW%2BaU5kCMnzW2%2FfXwmxG0yY9yHVML4OhSoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMkeX16lz2pzs23%2FCrcA%2Ff%2FfErchqyZzzrD1m15xbyDV8hR9jtPlu2%2BhpHRjij%2BPV2UKlGEMQKzrlKNZl1Ld2XeMDx5GFSAdMA4w10%2FaIO6K8dJncLmxnIoS4Wy0qe9ZmnGuJ%2Bq%2Foqp0VAdAA5203tQlW%2B6yfFQ%2Bbbr2AYwqQW205P6E%2BPT3vJm2I7Rjpj9pDfOFY4QPIY2wm2tbrXhb6x5YZK6TRCzU45CwJppqz1XK9hkkAzDwa%2BVW0UNLwRBjf60Sg2gHd98YeuVwneVatuPZ2BK8HswwojDpfLxqL6n4QZRX7QTaAh9ETKhKiFB0ByOA6KjbE5ErAKrxGEA2KHmimA0pf3Mk3BgjbXLfMFJfrMkmnHZJCUe9NVx1tQouZ13Z1fJP37%2Frot5oXiAIwnPmDi00vO21Nc8adzJwURaIF0QJjwuynjf4BJ1KYzw%2BMpGBAZePoW%2BgB2qoF2ihd1rF7eDiaV%2FWz3QZgIC4RD8jyfNoRQGp0UGcbznrlU5HYy%2FYVPo2afr%2Fs3pjdVuk8PMsyNFUjhydnAaXARgQlmM2A3XlenAB2S5nSih0mjPsTwi81ZBLRowO7naanp3rH3a%2FyCvFjFsG0RMN5Bme%2FoyMCMSKTw%2Flk01H%2FSOuBJ52FYteov6eyt58yg5MNigj8AGOqUB4W0WgdKQzKemnDiqF5fL6xh%2FAdZwvYmzewVASBoocpsRRUkHG%2Bl3%2Byon9stYoGhsWUO9%2BnXeDWAr3D2MnOrVyhaHyciqnBQeg5huKjKegXw8Dem%2BQFM0SEt%2BYvHKrQpFrTjlONF7EYJ%2FsJRINcZL6D3HyalbuEcjvQ9Hr9h06jJJSX5e2N7hsKtAb2dZYIFao5zxKleL2i1eOF1xniZn1xfLNGx1&X-Amz-Signature=690323ed0b7472a8b392edc95f9d8ddeb47176f159370770717d6dfe11c89149&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOHE7IM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmvBTJfUCJ3F1iRoG4LEAiViyzNK7p%2BjnFo2d2LaZi7QIgc5slNmN7NGW%2BaU5kCMnzW2%2FfXwmxG0yY9yHVML4OhSoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMkeX16lz2pzs23%2FCrcA%2Ff%2FfErchqyZzzrD1m15xbyDV8hR9jtPlu2%2BhpHRjij%2BPV2UKlGEMQKzrlKNZl1Ld2XeMDx5GFSAdMA4w10%2FaIO6K8dJncLmxnIoS4Wy0qe9ZmnGuJ%2Bq%2Foqp0VAdAA5203tQlW%2B6yfFQ%2Bbbr2AYwqQW205P6E%2BPT3vJm2I7Rjpj9pDfOFY4QPIY2wm2tbrXhb6x5YZK6TRCzU45CwJppqz1XK9hkkAzDwa%2BVW0UNLwRBjf60Sg2gHd98YeuVwneVatuPZ2BK8HswwojDpfLxqL6n4QZRX7QTaAh9ETKhKiFB0ByOA6KjbE5ErAKrxGEA2KHmimA0pf3Mk3BgjbXLfMFJfrMkmnHZJCUe9NVx1tQouZ13Z1fJP37%2Frot5oXiAIwnPmDi00vO21Nc8adzJwURaIF0QJjwuynjf4BJ1KYzw%2BMpGBAZePoW%2BgB2qoF2ihd1rF7eDiaV%2FWz3QZgIC4RD8jyfNoRQGp0UGcbznrlU5HYy%2FYVPo2afr%2Fs3pjdVuk8PMsyNFUjhydnAaXARgQlmM2A3XlenAB2S5nSih0mjPsTwi81ZBLRowO7naanp3rH3a%2FyCvFjFsG0RMN5Bme%2FoyMCMSKTw%2Flk01H%2FSOuBJ52FYteov6eyt58yg5MNigj8AGOqUB4W0WgdKQzKemnDiqF5fL6xh%2FAdZwvYmzewVASBoocpsRRUkHG%2Bl3%2Byon9stYoGhsWUO9%2BnXeDWAr3D2MnOrVyhaHyciqnBQeg5huKjKegXw8Dem%2BQFM0SEt%2BYvHKrQpFrTjlONF7EYJ%2FsJRINcZL6D3HyalbuEcjvQ9Hr9h06jJJSX5e2N7hsKtAb2dZYIFao5zxKleL2i1eOF1xniZn1xfLNGx1&X-Amz-Signature=7c297252a9bb06fc5583c1e7adb6afe90c9e44bdf9a9cf3cdb3a47e1c0b12c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOHE7IM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmvBTJfUCJ3F1iRoG4LEAiViyzNK7p%2BjnFo2d2LaZi7QIgc5slNmN7NGW%2BaU5kCMnzW2%2FfXwmxG0yY9yHVML4OhSoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMkeX16lz2pzs23%2FCrcA%2Ff%2FfErchqyZzzrD1m15xbyDV8hR9jtPlu2%2BhpHRjij%2BPV2UKlGEMQKzrlKNZl1Ld2XeMDx5GFSAdMA4w10%2FaIO6K8dJncLmxnIoS4Wy0qe9ZmnGuJ%2Bq%2Foqp0VAdAA5203tQlW%2B6yfFQ%2Bbbr2AYwqQW205P6E%2BPT3vJm2I7Rjpj9pDfOFY4QPIY2wm2tbrXhb6x5YZK6TRCzU45CwJppqz1XK9hkkAzDwa%2BVW0UNLwRBjf60Sg2gHd98YeuVwneVatuPZ2BK8HswwojDpfLxqL6n4QZRX7QTaAh9ETKhKiFB0ByOA6KjbE5ErAKrxGEA2KHmimA0pf3Mk3BgjbXLfMFJfrMkmnHZJCUe9NVx1tQouZ13Z1fJP37%2Frot5oXiAIwnPmDi00vO21Nc8adzJwURaIF0QJjwuynjf4BJ1KYzw%2BMpGBAZePoW%2BgB2qoF2ihd1rF7eDiaV%2FWz3QZgIC4RD8jyfNoRQGp0UGcbznrlU5HYy%2FYVPo2afr%2Fs3pjdVuk8PMsyNFUjhydnAaXARgQlmM2A3XlenAB2S5nSih0mjPsTwi81ZBLRowO7naanp3rH3a%2FyCvFjFsG0RMN5Bme%2FoyMCMSKTw%2Flk01H%2FSOuBJ52FYteov6eyt58yg5MNigj8AGOqUB4W0WgdKQzKemnDiqF5fL6xh%2FAdZwvYmzewVASBoocpsRRUkHG%2Bl3%2Byon9stYoGhsWUO9%2BnXeDWAr3D2MnOrVyhaHyciqnBQeg5huKjKegXw8Dem%2BQFM0SEt%2BYvHKrQpFrTjlONF7EYJ%2FsJRINcZL6D3HyalbuEcjvQ9Hr9h06jJJSX5e2N7hsKtAb2dZYIFao5zxKleL2i1eOF1xniZn1xfLNGx1&X-Amz-Signature=2de84c6c38899d68dd9c08e82adf179265e200276599c96956d1cddaf64f802c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
