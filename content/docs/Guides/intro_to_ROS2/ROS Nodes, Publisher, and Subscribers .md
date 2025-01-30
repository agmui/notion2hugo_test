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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YISG2I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfAgcCBQhCYldYyuLQUuKVuk3iTNw7MTSP6MPzJW2pxgIgEMKRRcvA6nGz2wim4ihgkp4reyBk1NwCYP2LFHEg3%2BsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEopd10RFcT9mnS04ircA%2FrAkI4jZ7XrVbp%2BbHLWeJ5vWm7TXJxYQMQsR0%2Faz8sQJXTThe03i7LqtKWgcyZZrzddFdZgnvlBocyLYoMLe4H%2BuNea1s4%2FkrREB70DTTieUAZUZ9RihXkC3H%2FLaLjthuPeDI1qvFk21jFcJQt8RC%2FS5qM2oXxtmaMYt6YIxfTDT1viqBNuhS%2FCqez4feGy%2F0lWqqFFgTozo0BrWpolxXzIbIhczFB0IdpRPOmzIEgpGwkPLIECF1hHzVwgFJOxbrLFaHucM41Xtpu2ZTV5hehKLS1xcXcIESWHWee%2B8gxJomJWNTJMKChTjXCSjVH20TUn%2BXFbAr1wSq1tPDoecJC2f1JUB6D%2BpiLY0DidvNaQVB%2Bbwszh%2FE0cRdbjWMbotjny4e5VhYkrOKLKo8GkaZqcMK%2F4xlcLOv6X6bJdoQb0CiYB2JYtQsiAKbJY48pPD8EXOzRpwV2WravCKn%2FL%2BjW0b9V3eius8SXSpad6bVO5HrVFiy4gurJFmZWwOUCNzoxCq9U6fIwhAEI6KbPtf%2Byl7HRF%2FxSlOK0Wwdqf0MdssBuk2fq6RLX8EZs4gzbZ0Rgfm%2BHzs0Ewlqq3u7HRYIwMehrpViVARsx69X5gESpme0hDe1MiiBkYzwEuMJyI7LwGOqUBpiDoB1tiYWEvebkMLGUmG91HG16Kw7TnS%2BaW%2BsE%2B2sbMQTAvfLpaREzDsbCeMdsqLPrWJ4cbt8kfrScJzOjsUiSgZq3J5mMj9574GCV7ZkZ%2BLZAL3e4%2BvQBliQ8zJQUr2Nq8V1MgLYM0HvQgFkZiivBk2qSYKqrg%2B1EgWT7P8TqJRA7Uh9OQ1NVQSDb7DLmqY2E571kWta1kIO3KF%2FevPjrf2WWU&X-Amz-Signature=a7b4980ae79f89ad209f8d239ddd0bdace5894c081918a7746112d2240d36eed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YISG2I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfAgcCBQhCYldYyuLQUuKVuk3iTNw7MTSP6MPzJW2pxgIgEMKRRcvA6nGz2wim4ihgkp4reyBk1NwCYP2LFHEg3%2BsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEopd10RFcT9mnS04ircA%2FrAkI4jZ7XrVbp%2BbHLWeJ5vWm7TXJxYQMQsR0%2Faz8sQJXTThe03i7LqtKWgcyZZrzddFdZgnvlBocyLYoMLe4H%2BuNea1s4%2FkrREB70DTTieUAZUZ9RihXkC3H%2FLaLjthuPeDI1qvFk21jFcJQt8RC%2FS5qM2oXxtmaMYt6YIxfTDT1viqBNuhS%2FCqez4feGy%2F0lWqqFFgTozo0BrWpolxXzIbIhczFB0IdpRPOmzIEgpGwkPLIECF1hHzVwgFJOxbrLFaHucM41Xtpu2ZTV5hehKLS1xcXcIESWHWee%2B8gxJomJWNTJMKChTjXCSjVH20TUn%2BXFbAr1wSq1tPDoecJC2f1JUB6D%2BpiLY0DidvNaQVB%2Bbwszh%2FE0cRdbjWMbotjny4e5VhYkrOKLKo8GkaZqcMK%2F4xlcLOv6X6bJdoQb0CiYB2JYtQsiAKbJY48pPD8EXOzRpwV2WravCKn%2FL%2BjW0b9V3eius8SXSpad6bVO5HrVFiy4gurJFmZWwOUCNzoxCq9U6fIwhAEI6KbPtf%2Byl7HRF%2FxSlOK0Wwdqf0MdssBuk2fq6RLX8EZs4gzbZ0Rgfm%2BHzs0Ewlqq3u7HRYIwMehrpViVARsx69X5gESpme0hDe1MiiBkYzwEuMJyI7LwGOqUBpiDoB1tiYWEvebkMLGUmG91HG16Kw7TnS%2BaW%2BsE%2B2sbMQTAvfLpaREzDsbCeMdsqLPrWJ4cbt8kfrScJzOjsUiSgZq3J5mMj9574GCV7ZkZ%2BLZAL3e4%2BvQBliQ8zJQUr2Nq8V1MgLYM0HvQgFkZiivBk2qSYKqrg%2B1EgWT7P8TqJRA7Uh9OQ1NVQSDb7DLmqY2E571kWta1kIO3KF%2FevPjrf2WWU&X-Amz-Signature=1e9aabd451cff44e32cd30ef0728d743e612d23bf949a44d4354ae6340bec3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YISG2I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfAgcCBQhCYldYyuLQUuKVuk3iTNw7MTSP6MPzJW2pxgIgEMKRRcvA6nGz2wim4ihgkp4reyBk1NwCYP2LFHEg3%2BsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEopd10RFcT9mnS04ircA%2FrAkI4jZ7XrVbp%2BbHLWeJ5vWm7TXJxYQMQsR0%2Faz8sQJXTThe03i7LqtKWgcyZZrzddFdZgnvlBocyLYoMLe4H%2BuNea1s4%2FkrREB70DTTieUAZUZ9RihXkC3H%2FLaLjthuPeDI1qvFk21jFcJQt8RC%2FS5qM2oXxtmaMYt6YIxfTDT1viqBNuhS%2FCqez4feGy%2F0lWqqFFgTozo0BrWpolxXzIbIhczFB0IdpRPOmzIEgpGwkPLIECF1hHzVwgFJOxbrLFaHucM41Xtpu2ZTV5hehKLS1xcXcIESWHWee%2B8gxJomJWNTJMKChTjXCSjVH20TUn%2BXFbAr1wSq1tPDoecJC2f1JUB6D%2BpiLY0DidvNaQVB%2Bbwszh%2FE0cRdbjWMbotjny4e5VhYkrOKLKo8GkaZqcMK%2F4xlcLOv6X6bJdoQb0CiYB2JYtQsiAKbJY48pPD8EXOzRpwV2WravCKn%2FL%2BjW0b9V3eius8SXSpad6bVO5HrVFiy4gurJFmZWwOUCNzoxCq9U6fIwhAEI6KbPtf%2Byl7HRF%2FxSlOK0Wwdqf0MdssBuk2fq6RLX8EZs4gzbZ0Rgfm%2BHzs0Ewlqq3u7HRYIwMehrpViVARsx69X5gESpme0hDe1MiiBkYzwEuMJyI7LwGOqUBpiDoB1tiYWEvebkMLGUmG91HG16Kw7TnS%2BaW%2BsE%2B2sbMQTAvfLpaREzDsbCeMdsqLPrWJ4cbt8kfrScJzOjsUiSgZq3J5mMj9574GCV7ZkZ%2BLZAL3e4%2BvQBliQ8zJQUr2Nq8V1MgLYM0HvQgFkZiivBk2qSYKqrg%2B1EgWT7P8TqJRA7Uh9OQ1NVQSDb7DLmqY2E571kWta1kIO3KF%2FevPjrf2WWU&X-Amz-Signature=f54ec587991e5d0bea9de78711fd31194b9298a2d7893a1d7389fd1b9b6ac702&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YISG2I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfAgcCBQhCYldYyuLQUuKVuk3iTNw7MTSP6MPzJW2pxgIgEMKRRcvA6nGz2wim4ihgkp4reyBk1NwCYP2LFHEg3%2BsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEopd10RFcT9mnS04ircA%2FrAkI4jZ7XrVbp%2BbHLWeJ5vWm7TXJxYQMQsR0%2Faz8sQJXTThe03i7LqtKWgcyZZrzddFdZgnvlBocyLYoMLe4H%2BuNea1s4%2FkrREB70DTTieUAZUZ9RihXkC3H%2FLaLjthuPeDI1qvFk21jFcJQt8RC%2FS5qM2oXxtmaMYt6YIxfTDT1viqBNuhS%2FCqez4feGy%2F0lWqqFFgTozo0BrWpolxXzIbIhczFB0IdpRPOmzIEgpGwkPLIECF1hHzVwgFJOxbrLFaHucM41Xtpu2ZTV5hehKLS1xcXcIESWHWee%2B8gxJomJWNTJMKChTjXCSjVH20TUn%2BXFbAr1wSq1tPDoecJC2f1JUB6D%2BpiLY0DidvNaQVB%2Bbwszh%2FE0cRdbjWMbotjny4e5VhYkrOKLKo8GkaZqcMK%2F4xlcLOv6X6bJdoQb0CiYB2JYtQsiAKbJY48pPD8EXOzRpwV2WravCKn%2FL%2BjW0b9V3eius8SXSpad6bVO5HrVFiy4gurJFmZWwOUCNzoxCq9U6fIwhAEI6KbPtf%2Byl7HRF%2FxSlOK0Wwdqf0MdssBuk2fq6RLX8EZs4gzbZ0Rgfm%2BHzs0Ewlqq3u7HRYIwMehrpViVARsx69X5gESpme0hDe1MiiBkYzwEuMJyI7LwGOqUBpiDoB1tiYWEvebkMLGUmG91HG16Kw7TnS%2BaW%2BsE%2B2sbMQTAvfLpaREzDsbCeMdsqLPrWJ4cbt8kfrScJzOjsUiSgZq3J5mMj9574GCV7ZkZ%2BLZAL3e4%2BvQBliQ8zJQUr2Nq8V1MgLYM0HvQgFkZiivBk2qSYKqrg%2B1EgWT7P8TqJRA7Uh9OQ1NVQSDb7DLmqY2E571kWta1kIO3KF%2FevPjrf2WWU&X-Amz-Signature=9eabee4a0c955a5c98eae8d3c553311fe36eccd101da557f2d94cb38afea7f23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YISG2I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfAgcCBQhCYldYyuLQUuKVuk3iTNw7MTSP6MPzJW2pxgIgEMKRRcvA6nGz2wim4ihgkp4reyBk1NwCYP2LFHEg3%2BsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEopd10RFcT9mnS04ircA%2FrAkI4jZ7XrVbp%2BbHLWeJ5vWm7TXJxYQMQsR0%2Faz8sQJXTThe03i7LqtKWgcyZZrzddFdZgnvlBocyLYoMLe4H%2BuNea1s4%2FkrREB70DTTieUAZUZ9RihXkC3H%2FLaLjthuPeDI1qvFk21jFcJQt8RC%2FS5qM2oXxtmaMYt6YIxfTDT1viqBNuhS%2FCqez4feGy%2F0lWqqFFgTozo0BrWpolxXzIbIhczFB0IdpRPOmzIEgpGwkPLIECF1hHzVwgFJOxbrLFaHucM41Xtpu2ZTV5hehKLS1xcXcIESWHWee%2B8gxJomJWNTJMKChTjXCSjVH20TUn%2BXFbAr1wSq1tPDoecJC2f1JUB6D%2BpiLY0DidvNaQVB%2Bbwszh%2FE0cRdbjWMbotjny4e5VhYkrOKLKo8GkaZqcMK%2F4xlcLOv6X6bJdoQb0CiYB2JYtQsiAKbJY48pPD8EXOzRpwV2WravCKn%2FL%2BjW0b9V3eius8SXSpad6bVO5HrVFiy4gurJFmZWwOUCNzoxCq9U6fIwhAEI6KbPtf%2Byl7HRF%2FxSlOK0Wwdqf0MdssBuk2fq6RLX8EZs4gzbZ0Rgfm%2BHzs0Ewlqq3u7HRYIwMehrpViVARsx69X5gESpme0hDe1MiiBkYzwEuMJyI7LwGOqUBpiDoB1tiYWEvebkMLGUmG91HG16Kw7TnS%2BaW%2BsE%2B2sbMQTAvfLpaREzDsbCeMdsqLPrWJ4cbt8kfrScJzOjsUiSgZq3J5mMj9574GCV7ZkZ%2BLZAL3e4%2BvQBliQ8zJQUr2Nq8V1MgLYM0HvQgFkZiivBk2qSYKqrg%2B1EgWT7P8TqJRA7Uh9OQ1NVQSDb7DLmqY2E571kWta1kIO3KF%2FevPjrf2WWU&X-Amz-Signature=362a2010b795e2809cabaecd675e23816ad7f30a1c61049c8fef6f691f39e6bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YISG2I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfAgcCBQhCYldYyuLQUuKVuk3iTNw7MTSP6MPzJW2pxgIgEMKRRcvA6nGz2wim4ihgkp4reyBk1NwCYP2LFHEg3%2BsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEopd10RFcT9mnS04ircA%2FrAkI4jZ7XrVbp%2BbHLWeJ5vWm7TXJxYQMQsR0%2Faz8sQJXTThe03i7LqtKWgcyZZrzddFdZgnvlBocyLYoMLe4H%2BuNea1s4%2FkrREB70DTTieUAZUZ9RihXkC3H%2FLaLjthuPeDI1qvFk21jFcJQt8RC%2FS5qM2oXxtmaMYt6YIxfTDT1viqBNuhS%2FCqez4feGy%2F0lWqqFFgTozo0BrWpolxXzIbIhczFB0IdpRPOmzIEgpGwkPLIECF1hHzVwgFJOxbrLFaHucM41Xtpu2ZTV5hehKLS1xcXcIESWHWee%2B8gxJomJWNTJMKChTjXCSjVH20TUn%2BXFbAr1wSq1tPDoecJC2f1JUB6D%2BpiLY0DidvNaQVB%2Bbwszh%2FE0cRdbjWMbotjny4e5VhYkrOKLKo8GkaZqcMK%2F4xlcLOv6X6bJdoQb0CiYB2JYtQsiAKbJY48pPD8EXOzRpwV2WravCKn%2FL%2BjW0b9V3eius8SXSpad6bVO5HrVFiy4gurJFmZWwOUCNzoxCq9U6fIwhAEI6KbPtf%2Byl7HRF%2FxSlOK0Wwdqf0MdssBuk2fq6RLX8EZs4gzbZ0Rgfm%2BHzs0Ewlqq3u7HRYIwMehrpViVARsx69X5gESpme0hDe1MiiBkYzwEuMJyI7LwGOqUBpiDoB1tiYWEvebkMLGUmG91HG16Kw7TnS%2BaW%2BsE%2B2sbMQTAvfLpaREzDsbCeMdsqLPrWJ4cbt8kfrScJzOjsUiSgZq3J5mMj9574GCV7ZkZ%2BLZAL3e4%2BvQBliQ8zJQUr2Nq8V1MgLYM0HvQgFkZiivBk2qSYKqrg%2B1EgWT7P8TqJRA7Uh9OQ1NVQSDb7DLmqY2E571kWta1kIO3KF%2FevPjrf2WWU&X-Amz-Signature=de9d620c65afd0a598541ec520df0c30031f996ca9ede978365432ac5b2eb042&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YISG2I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfAgcCBQhCYldYyuLQUuKVuk3iTNw7MTSP6MPzJW2pxgIgEMKRRcvA6nGz2wim4ihgkp4reyBk1NwCYP2LFHEg3%2BsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEopd10RFcT9mnS04ircA%2FrAkI4jZ7XrVbp%2BbHLWeJ5vWm7TXJxYQMQsR0%2Faz8sQJXTThe03i7LqtKWgcyZZrzddFdZgnvlBocyLYoMLe4H%2BuNea1s4%2FkrREB70DTTieUAZUZ9RihXkC3H%2FLaLjthuPeDI1qvFk21jFcJQt8RC%2FS5qM2oXxtmaMYt6YIxfTDT1viqBNuhS%2FCqez4feGy%2F0lWqqFFgTozo0BrWpolxXzIbIhczFB0IdpRPOmzIEgpGwkPLIECF1hHzVwgFJOxbrLFaHucM41Xtpu2ZTV5hehKLS1xcXcIESWHWee%2B8gxJomJWNTJMKChTjXCSjVH20TUn%2BXFbAr1wSq1tPDoecJC2f1JUB6D%2BpiLY0DidvNaQVB%2Bbwszh%2FE0cRdbjWMbotjny4e5VhYkrOKLKo8GkaZqcMK%2F4xlcLOv6X6bJdoQb0CiYB2JYtQsiAKbJY48pPD8EXOzRpwV2WravCKn%2FL%2BjW0b9V3eius8SXSpad6bVO5HrVFiy4gurJFmZWwOUCNzoxCq9U6fIwhAEI6KbPtf%2Byl7HRF%2FxSlOK0Wwdqf0MdssBuk2fq6RLX8EZs4gzbZ0Rgfm%2BHzs0Ewlqq3u7HRYIwMehrpViVARsx69X5gESpme0hDe1MiiBkYzwEuMJyI7LwGOqUBpiDoB1tiYWEvebkMLGUmG91HG16Kw7TnS%2BaW%2BsE%2B2sbMQTAvfLpaREzDsbCeMdsqLPrWJ4cbt8kfrScJzOjsUiSgZq3J5mMj9574GCV7ZkZ%2BLZAL3e4%2BvQBliQ8zJQUr2Nq8V1MgLYM0HvQgFkZiivBk2qSYKqrg%2B1EgWT7P8TqJRA7Uh9OQ1NVQSDb7DLmqY2E571kWta1kIO3KF%2FevPjrf2WWU&X-Amz-Signature=881275ac57980032445385ea60b9eb3d40512aa8b1d797947e2ccbfc619093f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YISG2I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfAgcCBQhCYldYyuLQUuKVuk3iTNw7MTSP6MPzJW2pxgIgEMKRRcvA6nGz2wim4ihgkp4reyBk1NwCYP2LFHEg3%2BsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEopd10RFcT9mnS04ircA%2FrAkI4jZ7XrVbp%2BbHLWeJ5vWm7TXJxYQMQsR0%2Faz8sQJXTThe03i7LqtKWgcyZZrzddFdZgnvlBocyLYoMLe4H%2BuNea1s4%2FkrREB70DTTieUAZUZ9RihXkC3H%2FLaLjthuPeDI1qvFk21jFcJQt8RC%2FS5qM2oXxtmaMYt6YIxfTDT1viqBNuhS%2FCqez4feGy%2F0lWqqFFgTozo0BrWpolxXzIbIhczFB0IdpRPOmzIEgpGwkPLIECF1hHzVwgFJOxbrLFaHucM41Xtpu2ZTV5hehKLS1xcXcIESWHWee%2B8gxJomJWNTJMKChTjXCSjVH20TUn%2BXFbAr1wSq1tPDoecJC2f1JUB6D%2BpiLY0DidvNaQVB%2Bbwszh%2FE0cRdbjWMbotjny4e5VhYkrOKLKo8GkaZqcMK%2F4xlcLOv6X6bJdoQb0CiYB2JYtQsiAKbJY48pPD8EXOzRpwV2WravCKn%2FL%2BjW0b9V3eius8SXSpad6bVO5HrVFiy4gurJFmZWwOUCNzoxCq9U6fIwhAEI6KbPtf%2Byl7HRF%2FxSlOK0Wwdqf0MdssBuk2fq6RLX8EZs4gzbZ0Rgfm%2BHzs0Ewlqq3u7HRYIwMehrpViVARsx69X5gESpme0hDe1MiiBkYzwEuMJyI7LwGOqUBpiDoB1tiYWEvebkMLGUmG91HG16Kw7TnS%2BaW%2BsE%2B2sbMQTAvfLpaREzDsbCeMdsqLPrWJ4cbt8kfrScJzOjsUiSgZq3J5mMj9574GCV7ZkZ%2BLZAL3e4%2BvQBliQ8zJQUr2Nq8V1MgLYM0HvQgFkZiivBk2qSYKqrg%2B1EgWT7P8TqJRA7Uh9OQ1NVQSDb7DLmqY2E571kWta1kIO3KF%2FevPjrf2WWU&X-Amz-Signature=70a0105ea46191c9d537835676f8025dda30a9c029d60151a9e026a109f6a7df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
