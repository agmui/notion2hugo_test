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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSCSNBN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbLGZFTIzJ2YotYkn3ZYRvSmRAqEn5mwoi9o6vWsPHAAiBSZMA1rZ3yyVd1x3v%2Fu6tN%2FjwdVUCRv1jJtP63kOdkbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCJLMmoMdkKyetvdOKtwDnTXkWo698ebzKAnWQMyOCdH9dFTyeqtN97sqPZja4HzNMvGDApynwHYoKCcbQktPW8lQ0%2B23%2F1eqpgnXSwggFKmQnsv9VwpSWtqQu0UNiP7jLYFnk%2BPRZHxtWsGsXe6MV09SZ247SvHlWquWrSVbLfxeEk75ei7G2HLbpWTRtyGZCfxiZA56sO%2F3G5lN%2FKG8uyUy4l3OtdW%2B6fzFsVeucaiTglgoBB9%2Bm5XCUM2z9%2F9Lm160%2FdHtd0Z7YRCvvils0XZ5EUXyTDM8kuQrWyP8rMTec4gSQPFDhxbd%2BpOzz%2BBLsT1MuEYNtGBQFBjisPdzW8DIrHwu%2FTm5JJgzDJ1jXYbPSZmqFk4wS9k8c%2B03PH84Vc2NMuVA4H8xq3ljVTDgZx2HTpPU1ugHyeaC7kyjz8PJ6tfyxcEMLuo%2BZes%2FDMbq2OfS%2BszvdWLBo3DY3b41AVr%2Fk7dvgrqHKVZaJgtj6sLW5FprQb%2ByWusBdncPqpiDH%2BcHGrQBwFxCm79NONKzFAajZPZWetIHDZhln1dyFlIrMZ9cB9u757B3FjbyhJeoxBVFbE%2FCR9rU4tAoC4YiBeVT9AharBiakxq9nyoZ%2F7Dl%2BfbJDqEwCQ0aZNjypqcYSA5Uv7hDqS1e1qQw0by8wAY6pgGuiMMeZshTid%2F15ssr0hQYb2xp5j9Dkq4WnXWCb%2Bc%2BjEameMt5O5Wy8O%2Fqfn12%2FyxDPsnPtdWdjT%2B6NlZIQi%2FKqHPercVxsJm4UzV0eBKeGXSMLkfxRqa8rpIeyXKq3%2FB3o6UeSGw9TYB4HFXr5OGhZ9omcHwZS5EZz7eSrhQp57BsvDmztw4tVIf4IoLiICDpxJGImdU884Yv8kGAslVf234%2FTQzi&X-Amz-Signature=50761bffb126d01c59768e6b49118db9e48cee7b0a505c1d92bdfbe68338d752&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSCSNBN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbLGZFTIzJ2YotYkn3ZYRvSmRAqEn5mwoi9o6vWsPHAAiBSZMA1rZ3yyVd1x3v%2Fu6tN%2FjwdVUCRv1jJtP63kOdkbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCJLMmoMdkKyetvdOKtwDnTXkWo698ebzKAnWQMyOCdH9dFTyeqtN97sqPZja4HzNMvGDApynwHYoKCcbQktPW8lQ0%2B23%2F1eqpgnXSwggFKmQnsv9VwpSWtqQu0UNiP7jLYFnk%2BPRZHxtWsGsXe6MV09SZ247SvHlWquWrSVbLfxeEk75ei7G2HLbpWTRtyGZCfxiZA56sO%2F3G5lN%2FKG8uyUy4l3OtdW%2B6fzFsVeucaiTglgoBB9%2Bm5XCUM2z9%2F9Lm160%2FdHtd0Z7YRCvvils0XZ5EUXyTDM8kuQrWyP8rMTec4gSQPFDhxbd%2BpOzz%2BBLsT1MuEYNtGBQFBjisPdzW8DIrHwu%2FTm5JJgzDJ1jXYbPSZmqFk4wS9k8c%2B03PH84Vc2NMuVA4H8xq3ljVTDgZx2HTpPU1ugHyeaC7kyjz8PJ6tfyxcEMLuo%2BZes%2FDMbq2OfS%2BszvdWLBo3DY3b41AVr%2Fk7dvgrqHKVZaJgtj6sLW5FprQb%2ByWusBdncPqpiDH%2BcHGrQBwFxCm79NONKzFAajZPZWetIHDZhln1dyFlIrMZ9cB9u757B3FjbyhJeoxBVFbE%2FCR9rU4tAoC4YiBeVT9AharBiakxq9nyoZ%2F7Dl%2BfbJDqEwCQ0aZNjypqcYSA5Uv7hDqS1e1qQw0by8wAY6pgGuiMMeZshTid%2F15ssr0hQYb2xp5j9Dkq4WnXWCb%2Bc%2BjEameMt5O5Wy8O%2Fqfn12%2FyxDPsnPtdWdjT%2B6NlZIQi%2FKqHPercVxsJm4UzV0eBKeGXSMLkfxRqa8rpIeyXKq3%2FB3o6UeSGw9TYB4HFXr5OGhZ9omcHwZS5EZz7eSrhQp57BsvDmztw4tVIf4IoLiICDpxJGImdU884Yv8kGAslVf234%2FTQzi&X-Amz-Signature=e4a53abe7168cea9396b1e59ec87ae869b5d759e4500bfe438b193d3046f46b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSCSNBN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbLGZFTIzJ2YotYkn3ZYRvSmRAqEn5mwoi9o6vWsPHAAiBSZMA1rZ3yyVd1x3v%2Fu6tN%2FjwdVUCRv1jJtP63kOdkbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCJLMmoMdkKyetvdOKtwDnTXkWo698ebzKAnWQMyOCdH9dFTyeqtN97sqPZja4HzNMvGDApynwHYoKCcbQktPW8lQ0%2B23%2F1eqpgnXSwggFKmQnsv9VwpSWtqQu0UNiP7jLYFnk%2BPRZHxtWsGsXe6MV09SZ247SvHlWquWrSVbLfxeEk75ei7G2HLbpWTRtyGZCfxiZA56sO%2F3G5lN%2FKG8uyUy4l3OtdW%2B6fzFsVeucaiTglgoBB9%2Bm5XCUM2z9%2F9Lm160%2FdHtd0Z7YRCvvils0XZ5EUXyTDM8kuQrWyP8rMTec4gSQPFDhxbd%2BpOzz%2BBLsT1MuEYNtGBQFBjisPdzW8DIrHwu%2FTm5JJgzDJ1jXYbPSZmqFk4wS9k8c%2B03PH84Vc2NMuVA4H8xq3ljVTDgZx2HTpPU1ugHyeaC7kyjz8PJ6tfyxcEMLuo%2BZes%2FDMbq2OfS%2BszvdWLBo3DY3b41AVr%2Fk7dvgrqHKVZaJgtj6sLW5FprQb%2ByWusBdncPqpiDH%2BcHGrQBwFxCm79NONKzFAajZPZWetIHDZhln1dyFlIrMZ9cB9u757B3FjbyhJeoxBVFbE%2FCR9rU4tAoC4YiBeVT9AharBiakxq9nyoZ%2F7Dl%2BfbJDqEwCQ0aZNjypqcYSA5Uv7hDqS1e1qQw0by8wAY6pgGuiMMeZshTid%2F15ssr0hQYb2xp5j9Dkq4WnXWCb%2Bc%2BjEameMt5O5Wy8O%2Fqfn12%2FyxDPsnPtdWdjT%2B6NlZIQi%2FKqHPercVxsJm4UzV0eBKeGXSMLkfxRqa8rpIeyXKq3%2FB3o6UeSGw9TYB4HFXr5OGhZ9omcHwZS5EZz7eSrhQp57BsvDmztw4tVIf4IoLiICDpxJGImdU884Yv8kGAslVf234%2FTQzi&X-Amz-Signature=904e712c6461058a2f20c083bc349ac131cf18990dadd93d62c305fdc6c54da1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSCSNBN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbLGZFTIzJ2YotYkn3ZYRvSmRAqEn5mwoi9o6vWsPHAAiBSZMA1rZ3yyVd1x3v%2Fu6tN%2FjwdVUCRv1jJtP63kOdkbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCJLMmoMdkKyetvdOKtwDnTXkWo698ebzKAnWQMyOCdH9dFTyeqtN97sqPZja4HzNMvGDApynwHYoKCcbQktPW8lQ0%2B23%2F1eqpgnXSwggFKmQnsv9VwpSWtqQu0UNiP7jLYFnk%2BPRZHxtWsGsXe6MV09SZ247SvHlWquWrSVbLfxeEk75ei7G2HLbpWTRtyGZCfxiZA56sO%2F3G5lN%2FKG8uyUy4l3OtdW%2B6fzFsVeucaiTglgoBB9%2Bm5XCUM2z9%2F9Lm160%2FdHtd0Z7YRCvvils0XZ5EUXyTDM8kuQrWyP8rMTec4gSQPFDhxbd%2BpOzz%2BBLsT1MuEYNtGBQFBjisPdzW8DIrHwu%2FTm5JJgzDJ1jXYbPSZmqFk4wS9k8c%2B03PH84Vc2NMuVA4H8xq3ljVTDgZx2HTpPU1ugHyeaC7kyjz8PJ6tfyxcEMLuo%2BZes%2FDMbq2OfS%2BszvdWLBo3DY3b41AVr%2Fk7dvgrqHKVZaJgtj6sLW5FprQb%2ByWusBdncPqpiDH%2BcHGrQBwFxCm79NONKzFAajZPZWetIHDZhln1dyFlIrMZ9cB9u757B3FjbyhJeoxBVFbE%2FCR9rU4tAoC4YiBeVT9AharBiakxq9nyoZ%2F7Dl%2BfbJDqEwCQ0aZNjypqcYSA5Uv7hDqS1e1qQw0by8wAY6pgGuiMMeZshTid%2F15ssr0hQYb2xp5j9Dkq4WnXWCb%2Bc%2BjEameMt5O5Wy8O%2Fqfn12%2FyxDPsnPtdWdjT%2B6NlZIQi%2FKqHPercVxsJm4UzV0eBKeGXSMLkfxRqa8rpIeyXKq3%2FB3o6UeSGw9TYB4HFXr5OGhZ9omcHwZS5EZz7eSrhQp57BsvDmztw4tVIf4IoLiICDpxJGImdU884Yv8kGAslVf234%2FTQzi&X-Amz-Signature=965492792fa66aca87ed49b9754ef17de4e65fd850ff6c7d5972f03f79c4bf7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSCSNBN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbLGZFTIzJ2YotYkn3ZYRvSmRAqEn5mwoi9o6vWsPHAAiBSZMA1rZ3yyVd1x3v%2Fu6tN%2FjwdVUCRv1jJtP63kOdkbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCJLMmoMdkKyetvdOKtwDnTXkWo698ebzKAnWQMyOCdH9dFTyeqtN97sqPZja4HzNMvGDApynwHYoKCcbQktPW8lQ0%2B23%2F1eqpgnXSwggFKmQnsv9VwpSWtqQu0UNiP7jLYFnk%2BPRZHxtWsGsXe6MV09SZ247SvHlWquWrSVbLfxeEk75ei7G2HLbpWTRtyGZCfxiZA56sO%2F3G5lN%2FKG8uyUy4l3OtdW%2B6fzFsVeucaiTglgoBB9%2Bm5XCUM2z9%2F9Lm160%2FdHtd0Z7YRCvvils0XZ5EUXyTDM8kuQrWyP8rMTec4gSQPFDhxbd%2BpOzz%2BBLsT1MuEYNtGBQFBjisPdzW8DIrHwu%2FTm5JJgzDJ1jXYbPSZmqFk4wS9k8c%2B03PH84Vc2NMuVA4H8xq3ljVTDgZx2HTpPU1ugHyeaC7kyjz8PJ6tfyxcEMLuo%2BZes%2FDMbq2OfS%2BszvdWLBo3DY3b41AVr%2Fk7dvgrqHKVZaJgtj6sLW5FprQb%2ByWusBdncPqpiDH%2BcHGrQBwFxCm79NONKzFAajZPZWetIHDZhln1dyFlIrMZ9cB9u757B3FjbyhJeoxBVFbE%2FCR9rU4tAoC4YiBeVT9AharBiakxq9nyoZ%2F7Dl%2BfbJDqEwCQ0aZNjypqcYSA5Uv7hDqS1e1qQw0by8wAY6pgGuiMMeZshTid%2F15ssr0hQYb2xp5j9Dkq4WnXWCb%2Bc%2BjEameMt5O5Wy8O%2Fqfn12%2FyxDPsnPtdWdjT%2B6NlZIQi%2FKqHPercVxsJm4UzV0eBKeGXSMLkfxRqa8rpIeyXKq3%2FB3o6UeSGw9TYB4HFXr5OGhZ9omcHwZS5EZz7eSrhQp57BsvDmztw4tVIf4IoLiICDpxJGImdU884Yv8kGAslVf234%2FTQzi&X-Amz-Signature=c96ceca24dba2e559d38864e41a1c4826797843d3ab465a8bab701e89e638a95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSCSNBN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbLGZFTIzJ2YotYkn3ZYRvSmRAqEn5mwoi9o6vWsPHAAiBSZMA1rZ3yyVd1x3v%2Fu6tN%2FjwdVUCRv1jJtP63kOdkbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCJLMmoMdkKyetvdOKtwDnTXkWo698ebzKAnWQMyOCdH9dFTyeqtN97sqPZja4HzNMvGDApynwHYoKCcbQktPW8lQ0%2B23%2F1eqpgnXSwggFKmQnsv9VwpSWtqQu0UNiP7jLYFnk%2BPRZHxtWsGsXe6MV09SZ247SvHlWquWrSVbLfxeEk75ei7G2HLbpWTRtyGZCfxiZA56sO%2F3G5lN%2FKG8uyUy4l3OtdW%2B6fzFsVeucaiTglgoBB9%2Bm5XCUM2z9%2F9Lm160%2FdHtd0Z7YRCvvils0XZ5EUXyTDM8kuQrWyP8rMTec4gSQPFDhxbd%2BpOzz%2BBLsT1MuEYNtGBQFBjisPdzW8DIrHwu%2FTm5JJgzDJ1jXYbPSZmqFk4wS9k8c%2B03PH84Vc2NMuVA4H8xq3ljVTDgZx2HTpPU1ugHyeaC7kyjz8PJ6tfyxcEMLuo%2BZes%2FDMbq2OfS%2BszvdWLBo3DY3b41AVr%2Fk7dvgrqHKVZaJgtj6sLW5FprQb%2ByWusBdncPqpiDH%2BcHGrQBwFxCm79NONKzFAajZPZWetIHDZhln1dyFlIrMZ9cB9u757B3FjbyhJeoxBVFbE%2FCR9rU4tAoC4YiBeVT9AharBiakxq9nyoZ%2F7Dl%2BfbJDqEwCQ0aZNjypqcYSA5Uv7hDqS1e1qQw0by8wAY6pgGuiMMeZshTid%2F15ssr0hQYb2xp5j9Dkq4WnXWCb%2Bc%2BjEameMt5O5Wy8O%2Fqfn12%2FyxDPsnPtdWdjT%2B6NlZIQi%2FKqHPercVxsJm4UzV0eBKeGXSMLkfxRqa8rpIeyXKq3%2FB3o6UeSGw9TYB4HFXr5OGhZ9omcHwZS5EZz7eSrhQp57BsvDmztw4tVIf4IoLiICDpxJGImdU884Yv8kGAslVf234%2FTQzi&X-Amz-Signature=5b7c07d708f0c69c5f1ffe95e0ddab76aaa255401cae9790bdb1f906130d925b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSCSNBN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbLGZFTIzJ2YotYkn3ZYRvSmRAqEn5mwoi9o6vWsPHAAiBSZMA1rZ3yyVd1x3v%2Fu6tN%2FjwdVUCRv1jJtP63kOdkbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCJLMmoMdkKyetvdOKtwDnTXkWo698ebzKAnWQMyOCdH9dFTyeqtN97sqPZja4HzNMvGDApynwHYoKCcbQktPW8lQ0%2B23%2F1eqpgnXSwggFKmQnsv9VwpSWtqQu0UNiP7jLYFnk%2BPRZHxtWsGsXe6MV09SZ247SvHlWquWrSVbLfxeEk75ei7G2HLbpWTRtyGZCfxiZA56sO%2F3G5lN%2FKG8uyUy4l3OtdW%2B6fzFsVeucaiTglgoBB9%2Bm5XCUM2z9%2F9Lm160%2FdHtd0Z7YRCvvils0XZ5EUXyTDM8kuQrWyP8rMTec4gSQPFDhxbd%2BpOzz%2BBLsT1MuEYNtGBQFBjisPdzW8DIrHwu%2FTm5JJgzDJ1jXYbPSZmqFk4wS9k8c%2B03PH84Vc2NMuVA4H8xq3ljVTDgZx2HTpPU1ugHyeaC7kyjz8PJ6tfyxcEMLuo%2BZes%2FDMbq2OfS%2BszvdWLBo3DY3b41AVr%2Fk7dvgrqHKVZaJgtj6sLW5FprQb%2ByWusBdncPqpiDH%2BcHGrQBwFxCm79NONKzFAajZPZWetIHDZhln1dyFlIrMZ9cB9u757B3FjbyhJeoxBVFbE%2FCR9rU4tAoC4YiBeVT9AharBiakxq9nyoZ%2F7Dl%2BfbJDqEwCQ0aZNjypqcYSA5Uv7hDqS1e1qQw0by8wAY6pgGuiMMeZshTid%2F15ssr0hQYb2xp5j9Dkq4WnXWCb%2Bc%2BjEameMt5O5Wy8O%2Fqfn12%2FyxDPsnPtdWdjT%2B6NlZIQi%2FKqHPercVxsJm4UzV0eBKeGXSMLkfxRqa8rpIeyXKq3%2FB3o6UeSGw9TYB4HFXr5OGhZ9omcHwZS5EZz7eSrhQp57BsvDmztw4tVIf4IoLiICDpxJGImdU884Yv8kGAslVf234%2FTQzi&X-Amz-Signature=49410d48accc28b44bae82282f1ed28cde0ceaf89de8f8f0a36f86081935569d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSCSNBN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbLGZFTIzJ2YotYkn3ZYRvSmRAqEn5mwoi9o6vWsPHAAiBSZMA1rZ3yyVd1x3v%2Fu6tN%2FjwdVUCRv1jJtP63kOdkbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCJLMmoMdkKyetvdOKtwDnTXkWo698ebzKAnWQMyOCdH9dFTyeqtN97sqPZja4HzNMvGDApynwHYoKCcbQktPW8lQ0%2B23%2F1eqpgnXSwggFKmQnsv9VwpSWtqQu0UNiP7jLYFnk%2BPRZHxtWsGsXe6MV09SZ247SvHlWquWrSVbLfxeEk75ei7G2HLbpWTRtyGZCfxiZA56sO%2F3G5lN%2FKG8uyUy4l3OtdW%2B6fzFsVeucaiTglgoBB9%2Bm5XCUM2z9%2F9Lm160%2FdHtd0Z7YRCvvils0XZ5EUXyTDM8kuQrWyP8rMTec4gSQPFDhxbd%2BpOzz%2BBLsT1MuEYNtGBQFBjisPdzW8DIrHwu%2FTm5JJgzDJ1jXYbPSZmqFk4wS9k8c%2B03PH84Vc2NMuVA4H8xq3ljVTDgZx2HTpPU1ugHyeaC7kyjz8PJ6tfyxcEMLuo%2BZes%2FDMbq2OfS%2BszvdWLBo3DY3b41AVr%2Fk7dvgrqHKVZaJgtj6sLW5FprQb%2ByWusBdncPqpiDH%2BcHGrQBwFxCm79NONKzFAajZPZWetIHDZhln1dyFlIrMZ9cB9u757B3FjbyhJeoxBVFbE%2FCR9rU4tAoC4YiBeVT9AharBiakxq9nyoZ%2F7Dl%2BfbJDqEwCQ0aZNjypqcYSA5Uv7hDqS1e1qQw0by8wAY6pgGuiMMeZshTid%2F15ssr0hQYb2xp5j9Dkq4WnXWCb%2Bc%2BjEameMt5O5Wy8O%2Fqfn12%2FyxDPsnPtdWdjT%2B6NlZIQi%2FKqHPercVxsJm4UzV0eBKeGXSMLkfxRqa8rpIeyXKq3%2FB3o6UeSGw9TYB4HFXr5OGhZ9omcHwZS5EZz7eSrhQp57BsvDmztw4tVIf4IoLiICDpxJGImdU884Yv8kGAslVf234%2FTQzi&X-Amz-Signature=504c2bc292ae2475a6de24f4dac0dd0337b6da376a8e512115d617f650bc9c16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
