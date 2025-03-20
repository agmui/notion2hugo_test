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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3F6RN3A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGyRGUIUXaX9Y5lYlpQGznH5D%2BmNbWr0%2BKbkc2VE17JRAiEA3wwrYxxybqFNYa0%2FZltF8x9p7Z%2FOI1mCD3BxXptsX4IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMFFv4Z%2BHrO4vR5tircA0f9lrrB9tb3U3BJFL8F26rEQwK87OeNqj56mUwUvb1F3z8Tn8GazYg8EprYVG12CYVRV%2BqY6peN9z9fS0uQn04vEswOTBCEH6MphIau8QynDZRCOS%2FDhwVvHyaWX46%2BOQU280ogChDdHfZDwT%2B4Sa3HlR225F960jkTNi%2FlGPJOlVOvu%2BvYjlpqiUarWs4DkB55cp5Li%2Fhng2u4MSEM0rOPjP4ubHuwx0ZwGjSXEow%2BlczZIgXjjFy8ulETwP8w5ZZCOds6vK4%2Fn%2BviF2TtBJoVP8EVxEP50rSYJnjdOBGiEdiGcN8xTjtXwoEI5FdkrNGTQd5EGVs%2Fx%2F%2FfkJ7qj%2F74OGS7EN2bV%2B0O7UdfkbM6%2F60UjvcY%2FDcKeVkzP5rN%2BOOkDsifpnVcv%2B1vwGTEe0kiIYro5ColgVpnhpKE9cVyQcXrvQA%2Feo3584%2By%2Foos7XMnQqye8K8jotD3mV2N5mfHXs%2FkPP%2FrbBe6LB4gEY1RkKEFr%2FufSkGRVFBxldp%2BTS7Riz3kptsXtCqyz44X%2F7GNgb%2F6W1pyvVvvzTvhviqIjKAW6xymRwE6W6hskmaS%2BvH6cbgvWibukwit6Rzqn7ZyseFG0eKfJ1dDeci6e3aIIEkiy0fALKRwotsLMNmE8b4GOqUBvl%2FN02BXaJUj%2Bo6trMSXPP8HtAcaFHiRjwkUtHy7V0h6sK%2FcyUkfgWOh90VM01OW37vuivs%2FkpUyur6V8BDuxS3s6xNk3KbILPxsAs13RCYcByp1Yj52uy%2Bg7VZ4l58AK7BNLvKR14yTnNEuTfCrtIsMi%2BiVLwA9yUr42DMwWQrtkML214gB8KApABD9KAaFWJ5kT2XvscPBJRnZp89v8I4prtB6&X-Amz-Signature=e93e5efd50ab254dcfc39028ab2a2b934db792c73fc6166eca3d10727d884280&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3F6RN3A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGyRGUIUXaX9Y5lYlpQGznH5D%2BmNbWr0%2BKbkc2VE17JRAiEA3wwrYxxybqFNYa0%2FZltF8x9p7Z%2FOI1mCD3BxXptsX4IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMFFv4Z%2BHrO4vR5tircA0f9lrrB9tb3U3BJFL8F26rEQwK87OeNqj56mUwUvb1F3z8Tn8GazYg8EprYVG12CYVRV%2BqY6peN9z9fS0uQn04vEswOTBCEH6MphIau8QynDZRCOS%2FDhwVvHyaWX46%2BOQU280ogChDdHfZDwT%2B4Sa3HlR225F960jkTNi%2FlGPJOlVOvu%2BvYjlpqiUarWs4DkB55cp5Li%2Fhng2u4MSEM0rOPjP4ubHuwx0ZwGjSXEow%2BlczZIgXjjFy8ulETwP8w5ZZCOds6vK4%2Fn%2BviF2TtBJoVP8EVxEP50rSYJnjdOBGiEdiGcN8xTjtXwoEI5FdkrNGTQd5EGVs%2Fx%2F%2FfkJ7qj%2F74OGS7EN2bV%2B0O7UdfkbM6%2F60UjvcY%2FDcKeVkzP5rN%2BOOkDsifpnVcv%2B1vwGTEe0kiIYro5ColgVpnhpKE9cVyQcXrvQA%2Feo3584%2By%2Foos7XMnQqye8K8jotD3mV2N5mfHXs%2FkPP%2FrbBe6LB4gEY1RkKEFr%2FufSkGRVFBxldp%2BTS7Riz3kptsXtCqyz44X%2F7GNgb%2F6W1pyvVvvzTvhviqIjKAW6xymRwE6W6hskmaS%2BvH6cbgvWibukwit6Rzqn7ZyseFG0eKfJ1dDeci6e3aIIEkiy0fALKRwotsLMNmE8b4GOqUBvl%2FN02BXaJUj%2Bo6trMSXPP8HtAcaFHiRjwkUtHy7V0h6sK%2FcyUkfgWOh90VM01OW37vuivs%2FkpUyur6V8BDuxS3s6xNk3KbILPxsAs13RCYcByp1Yj52uy%2Bg7VZ4l58AK7BNLvKR14yTnNEuTfCrtIsMi%2BiVLwA9yUr42DMwWQrtkML214gB8KApABD9KAaFWJ5kT2XvscPBJRnZp89v8I4prtB6&X-Amz-Signature=fa5dfc26e6661fff524b39f8f72ed9fedcf652b21053b42ea9763a5f7184b5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3F6RN3A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGyRGUIUXaX9Y5lYlpQGznH5D%2BmNbWr0%2BKbkc2VE17JRAiEA3wwrYxxybqFNYa0%2FZltF8x9p7Z%2FOI1mCD3BxXptsX4IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMFFv4Z%2BHrO4vR5tircA0f9lrrB9tb3U3BJFL8F26rEQwK87OeNqj56mUwUvb1F3z8Tn8GazYg8EprYVG12CYVRV%2BqY6peN9z9fS0uQn04vEswOTBCEH6MphIau8QynDZRCOS%2FDhwVvHyaWX46%2BOQU280ogChDdHfZDwT%2B4Sa3HlR225F960jkTNi%2FlGPJOlVOvu%2BvYjlpqiUarWs4DkB55cp5Li%2Fhng2u4MSEM0rOPjP4ubHuwx0ZwGjSXEow%2BlczZIgXjjFy8ulETwP8w5ZZCOds6vK4%2Fn%2BviF2TtBJoVP8EVxEP50rSYJnjdOBGiEdiGcN8xTjtXwoEI5FdkrNGTQd5EGVs%2Fx%2F%2FfkJ7qj%2F74OGS7EN2bV%2B0O7UdfkbM6%2F60UjvcY%2FDcKeVkzP5rN%2BOOkDsifpnVcv%2B1vwGTEe0kiIYro5ColgVpnhpKE9cVyQcXrvQA%2Feo3584%2By%2Foos7XMnQqye8K8jotD3mV2N5mfHXs%2FkPP%2FrbBe6LB4gEY1RkKEFr%2FufSkGRVFBxldp%2BTS7Riz3kptsXtCqyz44X%2F7GNgb%2F6W1pyvVvvzTvhviqIjKAW6xymRwE6W6hskmaS%2BvH6cbgvWibukwit6Rzqn7ZyseFG0eKfJ1dDeci6e3aIIEkiy0fALKRwotsLMNmE8b4GOqUBvl%2FN02BXaJUj%2Bo6trMSXPP8HtAcaFHiRjwkUtHy7V0h6sK%2FcyUkfgWOh90VM01OW37vuivs%2FkpUyur6V8BDuxS3s6xNk3KbILPxsAs13RCYcByp1Yj52uy%2Bg7VZ4l58AK7BNLvKR14yTnNEuTfCrtIsMi%2BiVLwA9yUr42DMwWQrtkML214gB8KApABD9KAaFWJ5kT2XvscPBJRnZp89v8I4prtB6&X-Amz-Signature=683e190612b46d9819f828e4efdcf4e0c5b77790fb731f65ca2da5f0622240ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3F6RN3A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGyRGUIUXaX9Y5lYlpQGznH5D%2BmNbWr0%2BKbkc2VE17JRAiEA3wwrYxxybqFNYa0%2FZltF8x9p7Z%2FOI1mCD3BxXptsX4IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMFFv4Z%2BHrO4vR5tircA0f9lrrB9tb3U3BJFL8F26rEQwK87OeNqj56mUwUvb1F3z8Tn8GazYg8EprYVG12CYVRV%2BqY6peN9z9fS0uQn04vEswOTBCEH6MphIau8QynDZRCOS%2FDhwVvHyaWX46%2BOQU280ogChDdHfZDwT%2B4Sa3HlR225F960jkTNi%2FlGPJOlVOvu%2BvYjlpqiUarWs4DkB55cp5Li%2Fhng2u4MSEM0rOPjP4ubHuwx0ZwGjSXEow%2BlczZIgXjjFy8ulETwP8w5ZZCOds6vK4%2Fn%2BviF2TtBJoVP8EVxEP50rSYJnjdOBGiEdiGcN8xTjtXwoEI5FdkrNGTQd5EGVs%2Fx%2F%2FfkJ7qj%2F74OGS7EN2bV%2B0O7UdfkbM6%2F60UjvcY%2FDcKeVkzP5rN%2BOOkDsifpnVcv%2B1vwGTEe0kiIYro5ColgVpnhpKE9cVyQcXrvQA%2Feo3584%2By%2Foos7XMnQqye8K8jotD3mV2N5mfHXs%2FkPP%2FrbBe6LB4gEY1RkKEFr%2FufSkGRVFBxldp%2BTS7Riz3kptsXtCqyz44X%2F7GNgb%2F6W1pyvVvvzTvhviqIjKAW6xymRwE6W6hskmaS%2BvH6cbgvWibukwit6Rzqn7ZyseFG0eKfJ1dDeci6e3aIIEkiy0fALKRwotsLMNmE8b4GOqUBvl%2FN02BXaJUj%2Bo6trMSXPP8HtAcaFHiRjwkUtHy7V0h6sK%2FcyUkfgWOh90VM01OW37vuivs%2FkpUyur6V8BDuxS3s6xNk3KbILPxsAs13RCYcByp1Yj52uy%2Bg7VZ4l58AK7BNLvKR14yTnNEuTfCrtIsMi%2BiVLwA9yUr42DMwWQrtkML214gB8KApABD9KAaFWJ5kT2XvscPBJRnZp89v8I4prtB6&X-Amz-Signature=e4267444a9e9d6f3eb3c16b63cb8388d56fbe72f9c29d29a3981cc40ce3020fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3F6RN3A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGyRGUIUXaX9Y5lYlpQGznH5D%2BmNbWr0%2BKbkc2VE17JRAiEA3wwrYxxybqFNYa0%2FZltF8x9p7Z%2FOI1mCD3BxXptsX4IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMFFv4Z%2BHrO4vR5tircA0f9lrrB9tb3U3BJFL8F26rEQwK87OeNqj56mUwUvb1F3z8Tn8GazYg8EprYVG12CYVRV%2BqY6peN9z9fS0uQn04vEswOTBCEH6MphIau8QynDZRCOS%2FDhwVvHyaWX46%2BOQU280ogChDdHfZDwT%2B4Sa3HlR225F960jkTNi%2FlGPJOlVOvu%2BvYjlpqiUarWs4DkB55cp5Li%2Fhng2u4MSEM0rOPjP4ubHuwx0ZwGjSXEow%2BlczZIgXjjFy8ulETwP8w5ZZCOds6vK4%2Fn%2BviF2TtBJoVP8EVxEP50rSYJnjdOBGiEdiGcN8xTjtXwoEI5FdkrNGTQd5EGVs%2Fx%2F%2FfkJ7qj%2F74OGS7EN2bV%2B0O7UdfkbM6%2F60UjvcY%2FDcKeVkzP5rN%2BOOkDsifpnVcv%2B1vwGTEe0kiIYro5ColgVpnhpKE9cVyQcXrvQA%2Feo3584%2By%2Foos7XMnQqye8K8jotD3mV2N5mfHXs%2FkPP%2FrbBe6LB4gEY1RkKEFr%2FufSkGRVFBxldp%2BTS7Riz3kptsXtCqyz44X%2F7GNgb%2F6W1pyvVvvzTvhviqIjKAW6xymRwE6W6hskmaS%2BvH6cbgvWibukwit6Rzqn7ZyseFG0eKfJ1dDeci6e3aIIEkiy0fALKRwotsLMNmE8b4GOqUBvl%2FN02BXaJUj%2Bo6trMSXPP8HtAcaFHiRjwkUtHy7V0h6sK%2FcyUkfgWOh90VM01OW37vuivs%2FkpUyur6V8BDuxS3s6xNk3KbILPxsAs13RCYcByp1Yj52uy%2Bg7VZ4l58AK7BNLvKR14yTnNEuTfCrtIsMi%2BiVLwA9yUr42DMwWQrtkML214gB8KApABD9KAaFWJ5kT2XvscPBJRnZp89v8I4prtB6&X-Amz-Signature=07a140a738e6de31b332b43b5a2c37579154a0134f50ff0489c39f02d1b52654&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3F6RN3A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGyRGUIUXaX9Y5lYlpQGznH5D%2BmNbWr0%2BKbkc2VE17JRAiEA3wwrYxxybqFNYa0%2FZltF8x9p7Z%2FOI1mCD3BxXptsX4IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMFFv4Z%2BHrO4vR5tircA0f9lrrB9tb3U3BJFL8F26rEQwK87OeNqj56mUwUvb1F3z8Tn8GazYg8EprYVG12CYVRV%2BqY6peN9z9fS0uQn04vEswOTBCEH6MphIau8QynDZRCOS%2FDhwVvHyaWX46%2BOQU280ogChDdHfZDwT%2B4Sa3HlR225F960jkTNi%2FlGPJOlVOvu%2BvYjlpqiUarWs4DkB55cp5Li%2Fhng2u4MSEM0rOPjP4ubHuwx0ZwGjSXEow%2BlczZIgXjjFy8ulETwP8w5ZZCOds6vK4%2Fn%2BviF2TtBJoVP8EVxEP50rSYJnjdOBGiEdiGcN8xTjtXwoEI5FdkrNGTQd5EGVs%2Fx%2F%2FfkJ7qj%2F74OGS7EN2bV%2B0O7UdfkbM6%2F60UjvcY%2FDcKeVkzP5rN%2BOOkDsifpnVcv%2B1vwGTEe0kiIYro5ColgVpnhpKE9cVyQcXrvQA%2Feo3584%2By%2Foos7XMnQqye8K8jotD3mV2N5mfHXs%2FkPP%2FrbBe6LB4gEY1RkKEFr%2FufSkGRVFBxldp%2BTS7Riz3kptsXtCqyz44X%2F7GNgb%2F6W1pyvVvvzTvhviqIjKAW6xymRwE6W6hskmaS%2BvH6cbgvWibukwit6Rzqn7ZyseFG0eKfJ1dDeci6e3aIIEkiy0fALKRwotsLMNmE8b4GOqUBvl%2FN02BXaJUj%2Bo6trMSXPP8HtAcaFHiRjwkUtHy7V0h6sK%2FcyUkfgWOh90VM01OW37vuivs%2FkpUyur6V8BDuxS3s6xNk3KbILPxsAs13RCYcByp1Yj52uy%2Bg7VZ4l58AK7BNLvKR14yTnNEuTfCrtIsMi%2BiVLwA9yUr42DMwWQrtkML214gB8KApABD9KAaFWJ5kT2XvscPBJRnZp89v8I4prtB6&X-Amz-Signature=14ab99d95b2bcab8f742db63eb156f4925b611c6b74fb1eb04e7f7f2b3ab0919&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3F6RN3A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGyRGUIUXaX9Y5lYlpQGznH5D%2BmNbWr0%2BKbkc2VE17JRAiEA3wwrYxxybqFNYa0%2FZltF8x9p7Z%2FOI1mCD3BxXptsX4IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMFFv4Z%2BHrO4vR5tircA0f9lrrB9tb3U3BJFL8F26rEQwK87OeNqj56mUwUvb1F3z8Tn8GazYg8EprYVG12CYVRV%2BqY6peN9z9fS0uQn04vEswOTBCEH6MphIau8QynDZRCOS%2FDhwVvHyaWX46%2BOQU280ogChDdHfZDwT%2B4Sa3HlR225F960jkTNi%2FlGPJOlVOvu%2BvYjlpqiUarWs4DkB55cp5Li%2Fhng2u4MSEM0rOPjP4ubHuwx0ZwGjSXEow%2BlczZIgXjjFy8ulETwP8w5ZZCOds6vK4%2Fn%2BviF2TtBJoVP8EVxEP50rSYJnjdOBGiEdiGcN8xTjtXwoEI5FdkrNGTQd5EGVs%2Fx%2F%2FfkJ7qj%2F74OGS7EN2bV%2B0O7UdfkbM6%2F60UjvcY%2FDcKeVkzP5rN%2BOOkDsifpnVcv%2B1vwGTEe0kiIYro5ColgVpnhpKE9cVyQcXrvQA%2Feo3584%2By%2Foos7XMnQqye8K8jotD3mV2N5mfHXs%2FkPP%2FrbBe6LB4gEY1RkKEFr%2FufSkGRVFBxldp%2BTS7Riz3kptsXtCqyz44X%2F7GNgb%2F6W1pyvVvvzTvhviqIjKAW6xymRwE6W6hskmaS%2BvH6cbgvWibukwit6Rzqn7ZyseFG0eKfJ1dDeci6e3aIIEkiy0fALKRwotsLMNmE8b4GOqUBvl%2FN02BXaJUj%2Bo6trMSXPP8HtAcaFHiRjwkUtHy7V0h6sK%2FcyUkfgWOh90VM01OW37vuivs%2FkpUyur6V8BDuxS3s6xNk3KbILPxsAs13RCYcByp1Yj52uy%2Bg7VZ4l58AK7BNLvKR14yTnNEuTfCrtIsMi%2BiVLwA9yUr42DMwWQrtkML214gB8KApABD9KAaFWJ5kT2XvscPBJRnZp89v8I4prtB6&X-Amz-Signature=c3af979b2653a48c14655492d2a002961b49f092df0cb6d5663ac7b5b4894682&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3F6RN3A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGyRGUIUXaX9Y5lYlpQGznH5D%2BmNbWr0%2BKbkc2VE17JRAiEA3wwrYxxybqFNYa0%2FZltF8x9p7Z%2FOI1mCD3BxXptsX4IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMFFv4Z%2BHrO4vR5tircA0f9lrrB9tb3U3BJFL8F26rEQwK87OeNqj56mUwUvb1F3z8Tn8GazYg8EprYVG12CYVRV%2BqY6peN9z9fS0uQn04vEswOTBCEH6MphIau8QynDZRCOS%2FDhwVvHyaWX46%2BOQU280ogChDdHfZDwT%2B4Sa3HlR225F960jkTNi%2FlGPJOlVOvu%2BvYjlpqiUarWs4DkB55cp5Li%2Fhng2u4MSEM0rOPjP4ubHuwx0ZwGjSXEow%2BlczZIgXjjFy8ulETwP8w5ZZCOds6vK4%2Fn%2BviF2TtBJoVP8EVxEP50rSYJnjdOBGiEdiGcN8xTjtXwoEI5FdkrNGTQd5EGVs%2Fx%2F%2FfkJ7qj%2F74OGS7EN2bV%2B0O7UdfkbM6%2F60UjvcY%2FDcKeVkzP5rN%2BOOkDsifpnVcv%2B1vwGTEe0kiIYro5ColgVpnhpKE9cVyQcXrvQA%2Feo3584%2By%2Foos7XMnQqye8K8jotD3mV2N5mfHXs%2FkPP%2FrbBe6LB4gEY1RkKEFr%2FufSkGRVFBxldp%2BTS7Riz3kptsXtCqyz44X%2F7GNgb%2F6W1pyvVvvzTvhviqIjKAW6xymRwE6W6hskmaS%2BvH6cbgvWibukwit6Rzqn7ZyseFG0eKfJ1dDeci6e3aIIEkiy0fALKRwotsLMNmE8b4GOqUBvl%2FN02BXaJUj%2Bo6trMSXPP8HtAcaFHiRjwkUtHy7V0h6sK%2FcyUkfgWOh90VM01OW37vuivs%2FkpUyur6V8BDuxS3s6xNk3KbILPxsAs13RCYcByp1Yj52uy%2Bg7VZ4l58AK7BNLvKR14yTnNEuTfCrtIsMi%2BiVLwA9yUr42DMwWQrtkML214gB8KApABD9KAaFWJ5kT2XvscPBJRnZp89v8I4prtB6&X-Amz-Signature=fdf51f0a21b20d2754035ded381f0f51edebdf1f64cd976669babf8376bb8d97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
