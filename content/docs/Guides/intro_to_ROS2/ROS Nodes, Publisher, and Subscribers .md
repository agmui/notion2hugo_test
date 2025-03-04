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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSXCRNI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzhGBpe31VqllbYzxoaTRghmmRJAMaolQnjZ9QUeu2dAiATZQ0OxHPCWCERWLbApb7%2BcNLoDzk7EUv7qdoY%2F44VoCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwE5Gv194tZ%2Bk0JcWKtwDHYhGOIpG%2F2y1DSHVWpIyFJ%2Be%2BubHzV%2FVd3c%2FTUdJhRnvxh3680IMVFs4pOUWfqotsJJGin4Db8q%2BzEfUlfGgxdRymliL4l7Bqd2FHvgFx49rRIF%2FuXLuW27%2FSmTd1mTwY1Jbx6%2FUgb22h0DRX2ba9aeOyILvqLnd7I4%2B4Jdc1Ge9RuL7Gua9xvf6Gnq%2F9Rc%2FmbcjAX0WLKcEw%2Feo8OBGQ7lFVcqfVSesiygs%2BeqPVdaXFJYO7WVNYkrHkf6%2BDb%2BX7oC56a%2BOHpFwm%2BJAFShM8LVoHhbJNDhsYjbO3PoeBa7LCct8RnxxTIcW4tr3RIengUG1qgdRJ2d3jegc6fxUun0zY%2B%2BCbtdzwM5weSk7IQFPzE2VjPL5QZWZ8tEoaZlo%2Btgs46shtJYimTHaRim6qSy8eIIMkrlq7Qbf7W1E0YigKFGM0kT3u7n8XIKNyhrcwH8iOviU%2FO7uAOXKasZNzZFPODoVebPEFwabZ8d6xlVcAh7B7TAVCWR8aLei7xB%2FauK1wJgPh4pwDcL7EAl5uL9W8Zek7Q%2BKJGMlQPGuBHryBR3ERekTI%2FggwP7PLvQUaUAWFdFSjFMM6P8MURstum1AjElU6dDkGsX6yppv0EImagjyFI4uQ%2BTwIRowtcWbvgY6pgHn%2FZb01pN3LelUPHUd5%2F41tW%2FXBvyiToGE1woEBLZ0p%2BolzCfl1Tl2k2spE6HiQchy2pCwWm7WADUBHoBwKXPeBnK7lJsMEYSi9Qda0AdvjXPAfJ5OpaRxC%2B66f4nD%2BWiNcoJslzhYBfX%2B2RMa6tuv0Yx1wxalwG95kfm6ssQ5zrtzwj2Qo8x4poPwVDIe6b2Em3GsVLs%2FhiSc%2B%2BcgJw1JJHo%2F6k39&X-Amz-Signature=662982731df59856b73ae851b9284b1def429374d69b9449fdb1704fd1408970&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSXCRNI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzhGBpe31VqllbYzxoaTRghmmRJAMaolQnjZ9QUeu2dAiATZQ0OxHPCWCERWLbApb7%2BcNLoDzk7EUv7qdoY%2F44VoCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwE5Gv194tZ%2Bk0JcWKtwDHYhGOIpG%2F2y1DSHVWpIyFJ%2Be%2BubHzV%2FVd3c%2FTUdJhRnvxh3680IMVFs4pOUWfqotsJJGin4Db8q%2BzEfUlfGgxdRymliL4l7Bqd2FHvgFx49rRIF%2FuXLuW27%2FSmTd1mTwY1Jbx6%2FUgb22h0DRX2ba9aeOyILvqLnd7I4%2B4Jdc1Ge9RuL7Gua9xvf6Gnq%2F9Rc%2FmbcjAX0WLKcEw%2Feo8OBGQ7lFVcqfVSesiygs%2BeqPVdaXFJYO7WVNYkrHkf6%2BDb%2BX7oC56a%2BOHpFwm%2BJAFShM8LVoHhbJNDhsYjbO3PoeBa7LCct8RnxxTIcW4tr3RIengUG1qgdRJ2d3jegc6fxUun0zY%2B%2BCbtdzwM5weSk7IQFPzE2VjPL5QZWZ8tEoaZlo%2Btgs46shtJYimTHaRim6qSy8eIIMkrlq7Qbf7W1E0YigKFGM0kT3u7n8XIKNyhrcwH8iOviU%2FO7uAOXKasZNzZFPODoVebPEFwabZ8d6xlVcAh7B7TAVCWR8aLei7xB%2FauK1wJgPh4pwDcL7EAl5uL9W8Zek7Q%2BKJGMlQPGuBHryBR3ERekTI%2FggwP7PLvQUaUAWFdFSjFMM6P8MURstum1AjElU6dDkGsX6yppv0EImagjyFI4uQ%2BTwIRowtcWbvgY6pgHn%2FZb01pN3LelUPHUd5%2F41tW%2FXBvyiToGE1woEBLZ0p%2BolzCfl1Tl2k2spE6HiQchy2pCwWm7WADUBHoBwKXPeBnK7lJsMEYSi9Qda0AdvjXPAfJ5OpaRxC%2B66f4nD%2BWiNcoJslzhYBfX%2B2RMa6tuv0Yx1wxalwG95kfm6ssQ5zrtzwj2Qo8x4poPwVDIe6b2Em3GsVLs%2FhiSc%2B%2BcgJw1JJHo%2F6k39&X-Amz-Signature=8a9891fb111b7687beff6a2a91651fe89dac4eca090ccfc64f7c2ba35e35b168&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSXCRNI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzhGBpe31VqllbYzxoaTRghmmRJAMaolQnjZ9QUeu2dAiATZQ0OxHPCWCERWLbApb7%2BcNLoDzk7EUv7qdoY%2F44VoCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwE5Gv194tZ%2Bk0JcWKtwDHYhGOIpG%2F2y1DSHVWpIyFJ%2Be%2BubHzV%2FVd3c%2FTUdJhRnvxh3680IMVFs4pOUWfqotsJJGin4Db8q%2BzEfUlfGgxdRymliL4l7Bqd2FHvgFx49rRIF%2FuXLuW27%2FSmTd1mTwY1Jbx6%2FUgb22h0DRX2ba9aeOyILvqLnd7I4%2B4Jdc1Ge9RuL7Gua9xvf6Gnq%2F9Rc%2FmbcjAX0WLKcEw%2Feo8OBGQ7lFVcqfVSesiygs%2BeqPVdaXFJYO7WVNYkrHkf6%2BDb%2BX7oC56a%2BOHpFwm%2BJAFShM8LVoHhbJNDhsYjbO3PoeBa7LCct8RnxxTIcW4tr3RIengUG1qgdRJ2d3jegc6fxUun0zY%2B%2BCbtdzwM5weSk7IQFPzE2VjPL5QZWZ8tEoaZlo%2Btgs46shtJYimTHaRim6qSy8eIIMkrlq7Qbf7W1E0YigKFGM0kT3u7n8XIKNyhrcwH8iOviU%2FO7uAOXKasZNzZFPODoVebPEFwabZ8d6xlVcAh7B7TAVCWR8aLei7xB%2FauK1wJgPh4pwDcL7EAl5uL9W8Zek7Q%2BKJGMlQPGuBHryBR3ERekTI%2FggwP7PLvQUaUAWFdFSjFMM6P8MURstum1AjElU6dDkGsX6yppv0EImagjyFI4uQ%2BTwIRowtcWbvgY6pgHn%2FZb01pN3LelUPHUd5%2F41tW%2FXBvyiToGE1woEBLZ0p%2BolzCfl1Tl2k2spE6HiQchy2pCwWm7WADUBHoBwKXPeBnK7lJsMEYSi9Qda0AdvjXPAfJ5OpaRxC%2B66f4nD%2BWiNcoJslzhYBfX%2B2RMa6tuv0Yx1wxalwG95kfm6ssQ5zrtzwj2Qo8x4poPwVDIe6b2Em3GsVLs%2FhiSc%2B%2BcgJw1JJHo%2F6k39&X-Amz-Signature=55d365709e17cbef5cb500b83995cecc2ad0d652e3405d55f495d61817810dee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSXCRNI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzhGBpe31VqllbYzxoaTRghmmRJAMaolQnjZ9QUeu2dAiATZQ0OxHPCWCERWLbApb7%2BcNLoDzk7EUv7qdoY%2F44VoCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwE5Gv194tZ%2Bk0JcWKtwDHYhGOIpG%2F2y1DSHVWpIyFJ%2Be%2BubHzV%2FVd3c%2FTUdJhRnvxh3680IMVFs4pOUWfqotsJJGin4Db8q%2BzEfUlfGgxdRymliL4l7Bqd2FHvgFx49rRIF%2FuXLuW27%2FSmTd1mTwY1Jbx6%2FUgb22h0DRX2ba9aeOyILvqLnd7I4%2B4Jdc1Ge9RuL7Gua9xvf6Gnq%2F9Rc%2FmbcjAX0WLKcEw%2Feo8OBGQ7lFVcqfVSesiygs%2BeqPVdaXFJYO7WVNYkrHkf6%2BDb%2BX7oC56a%2BOHpFwm%2BJAFShM8LVoHhbJNDhsYjbO3PoeBa7LCct8RnxxTIcW4tr3RIengUG1qgdRJ2d3jegc6fxUun0zY%2B%2BCbtdzwM5weSk7IQFPzE2VjPL5QZWZ8tEoaZlo%2Btgs46shtJYimTHaRim6qSy8eIIMkrlq7Qbf7W1E0YigKFGM0kT3u7n8XIKNyhrcwH8iOviU%2FO7uAOXKasZNzZFPODoVebPEFwabZ8d6xlVcAh7B7TAVCWR8aLei7xB%2FauK1wJgPh4pwDcL7EAl5uL9W8Zek7Q%2BKJGMlQPGuBHryBR3ERekTI%2FggwP7PLvQUaUAWFdFSjFMM6P8MURstum1AjElU6dDkGsX6yppv0EImagjyFI4uQ%2BTwIRowtcWbvgY6pgHn%2FZb01pN3LelUPHUd5%2F41tW%2FXBvyiToGE1woEBLZ0p%2BolzCfl1Tl2k2spE6HiQchy2pCwWm7WADUBHoBwKXPeBnK7lJsMEYSi9Qda0AdvjXPAfJ5OpaRxC%2B66f4nD%2BWiNcoJslzhYBfX%2B2RMa6tuv0Yx1wxalwG95kfm6ssQ5zrtzwj2Qo8x4poPwVDIe6b2Em3GsVLs%2FhiSc%2B%2BcgJw1JJHo%2F6k39&X-Amz-Signature=62e769ecd780ea9298d1edf61a7421358b29e66d9251644e6884e933fdfb0494&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSXCRNI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzhGBpe31VqllbYzxoaTRghmmRJAMaolQnjZ9QUeu2dAiATZQ0OxHPCWCERWLbApb7%2BcNLoDzk7EUv7qdoY%2F44VoCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwE5Gv194tZ%2Bk0JcWKtwDHYhGOIpG%2F2y1DSHVWpIyFJ%2Be%2BubHzV%2FVd3c%2FTUdJhRnvxh3680IMVFs4pOUWfqotsJJGin4Db8q%2BzEfUlfGgxdRymliL4l7Bqd2FHvgFx49rRIF%2FuXLuW27%2FSmTd1mTwY1Jbx6%2FUgb22h0DRX2ba9aeOyILvqLnd7I4%2B4Jdc1Ge9RuL7Gua9xvf6Gnq%2F9Rc%2FmbcjAX0WLKcEw%2Feo8OBGQ7lFVcqfVSesiygs%2BeqPVdaXFJYO7WVNYkrHkf6%2BDb%2BX7oC56a%2BOHpFwm%2BJAFShM8LVoHhbJNDhsYjbO3PoeBa7LCct8RnxxTIcW4tr3RIengUG1qgdRJ2d3jegc6fxUun0zY%2B%2BCbtdzwM5weSk7IQFPzE2VjPL5QZWZ8tEoaZlo%2Btgs46shtJYimTHaRim6qSy8eIIMkrlq7Qbf7W1E0YigKFGM0kT3u7n8XIKNyhrcwH8iOviU%2FO7uAOXKasZNzZFPODoVebPEFwabZ8d6xlVcAh7B7TAVCWR8aLei7xB%2FauK1wJgPh4pwDcL7EAl5uL9W8Zek7Q%2BKJGMlQPGuBHryBR3ERekTI%2FggwP7PLvQUaUAWFdFSjFMM6P8MURstum1AjElU6dDkGsX6yppv0EImagjyFI4uQ%2BTwIRowtcWbvgY6pgHn%2FZb01pN3LelUPHUd5%2F41tW%2FXBvyiToGE1woEBLZ0p%2BolzCfl1Tl2k2spE6HiQchy2pCwWm7WADUBHoBwKXPeBnK7lJsMEYSi9Qda0AdvjXPAfJ5OpaRxC%2B66f4nD%2BWiNcoJslzhYBfX%2B2RMa6tuv0Yx1wxalwG95kfm6ssQ5zrtzwj2Qo8x4poPwVDIe6b2Em3GsVLs%2FhiSc%2B%2BcgJw1JJHo%2F6k39&X-Amz-Signature=575ae7f39043da8a44d3ff6b2332c88719a03c89756a6a36250684fb2f17f2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSXCRNI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzhGBpe31VqllbYzxoaTRghmmRJAMaolQnjZ9QUeu2dAiATZQ0OxHPCWCERWLbApb7%2BcNLoDzk7EUv7qdoY%2F44VoCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwE5Gv194tZ%2Bk0JcWKtwDHYhGOIpG%2F2y1DSHVWpIyFJ%2Be%2BubHzV%2FVd3c%2FTUdJhRnvxh3680IMVFs4pOUWfqotsJJGin4Db8q%2BzEfUlfGgxdRymliL4l7Bqd2FHvgFx49rRIF%2FuXLuW27%2FSmTd1mTwY1Jbx6%2FUgb22h0DRX2ba9aeOyILvqLnd7I4%2B4Jdc1Ge9RuL7Gua9xvf6Gnq%2F9Rc%2FmbcjAX0WLKcEw%2Feo8OBGQ7lFVcqfVSesiygs%2BeqPVdaXFJYO7WVNYkrHkf6%2BDb%2BX7oC56a%2BOHpFwm%2BJAFShM8LVoHhbJNDhsYjbO3PoeBa7LCct8RnxxTIcW4tr3RIengUG1qgdRJ2d3jegc6fxUun0zY%2B%2BCbtdzwM5weSk7IQFPzE2VjPL5QZWZ8tEoaZlo%2Btgs46shtJYimTHaRim6qSy8eIIMkrlq7Qbf7W1E0YigKFGM0kT3u7n8XIKNyhrcwH8iOviU%2FO7uAOXKasZNzZFPODoVebPEFwabZ8d6xlVcAh7B7TAVCWR8aLei7xB%2FauK1wJgPh4pwDcL7EAl5uL9W8Zek7Q%2BKJGMlQPGuBHryBR3ERekTI%2FggwP7PLvQUaUAWFdFSjFMM6P8MURstum1AjElU6dDkGsX6yppv0EImagjyFI4uQ%2BTwIRowtcWbvgY6pgHn%2FZb01pN3LelUPHUd5%2F41tW%2FXBvyiToGE1woEBLZ0p%2BolzCfl1Tl2k2spE6HiQchy2pCwWm7WADUBHoBwKXPeBnK7lJsMEYSi9Qda0AdvjXPAfJ5OpaRxC%2B66f4nD%2BWiNcoJslzhYBfX%2B2RMa6tuv0Yx1wxalwG95kfm6ssQ5zrtzwj2Qo8x4poPwVDIe6b2Em3GsVLs%2FhiSc%2B%2BcgJw1JJHo%2F6k39&X-Amz-Signature=946a048705feca9c2c8367d3817bdb8aa0932a565f4b63b9e19c4a2413bafe03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSXCRNI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzhGBpe31VqllbYzxoaTRghmmRJAMaolQnjZ9QUeu2dAiATZQ0OxHPCWCERWLbApb7%2BcNLoDzk7EUv7qdoY%2F44VoCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwE5Gv194tZ%2Bk0JcWKtwDHYhGOIpG%2F2y1DSHVWpIyFJ%2Be%2BubHzV%2FVd3c%2FTUdJhRnvxh3680IMVFs4pOUWfqotsJJGin4Db8q%2BzEfUlfGgxdRymliL4l7Bqd2FHvgFx49rRIF%2FuXLuW27%2FSmTd1mTwY1Jbx6%2FUgb22h0DRX2ba9aeOyILvqLnd7I4%2B4Jdc1Ge9RuL7Gua9xvf6Gnq%2F9Rc%2FmbcjAX0WLKcEw%2Feo8OBGQ7lFVcqfVSesiygs%2BeqPVdaXFJYO7WVNYkrHkf6%2BDb%2BX7oC56a%2BOHpFwm%2BJAFShM8LVoHhbJNDhsYjbO3PoeBa7LCct8RnxxTIcW4tr3RIengUG1qgdRJ2d3jegc6fxUun0zY%2B%2BCbtdzwM5weSk7IQFPzE2VjPL5QZWZ8tEoaZlo%2Btgs46shtJYimTHaRim6qSy8eIIMkrlq7Qbf7W1E0YigKFGM0kT3u7n8XIKNyhrcwH8iOviU%2FO7uAOXKasZNzZFPODoVebPEFwabZ8d6xlVcAh7B7TAVCWR8aLei7xB%2FauK1wJgPh4pwDcL7EAl5uL9W8Zek7Q%2BKJGMlQPGuBHryBR3ERekTI%2FggwP7PLvQUaUAWFdFSjFMM6P8MURstum1AjElU6dDkGsX6yppv0EImagjyFI4uQ%2BTwIRowtcWbvgY6pgHn%2FZb01pN3LelUPHUd5%2F41tW%2FXBvyiToGE1woEBLZ0p%2BolzCfl1Tl2k2spE6HiQchy2pCwWm7WADUBHoBwKXPeBnK7lJsMEYSi9Qda0AdvjXPAfJ5OpaRxC%2B66f4nD%2BWiNcoJslzhYBfX%2B2RMa6tuv0Yx1wxalwG95kfm6ssQ5zrtzwj2Qo8x4poPwVDIe6b2Em3GsVLs%2FhiSc%2B%2BcgJw1JJHo%2F6k39&X-Amz-Signature=cd8f6b5527647510b5c641374fba600504bc6f5438aac278d084e07e168d4344&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSXCRNI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzhGBpe31VqllbYzxoaTRghmmRJAMaolQnjZ9QUeu2dAiATZQ0OxHPCWCERWLbApb7%2BcNLoDzk7EUv7qdoY%2F44VoCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwE5Gv194tZ%2Bk0JcWKtwDHYhGOIpG%2F2y1DSHVWpIyFJ%2Be%2BubHzV%2FVd3c%2FTUdJhRnvxh3680IMVFs4pOUWfqotsJJGin4Db8q%2BzEfUlfGgxdRymliL4l7Bqd2FHvgFx49rRIF%2FuXLuW27%2FSmTd1mTwY1Jbx6%2FUgb22h0DRX2ba9aeOyILvqLnd7I4%2B4Jdc1Ge9RuL7Gua9xvf6Gnq%2F9Rc%2FmbcjAX0WLKcEw%2Feo8OBGQ7lFVcqfVSesiygs%2BeqPVdaXFJYO7WVNYkrHkf6%2BDb%2BX7oC56a%2BOHpFwm%2BJAFShM8LVoHhbJNDhsYjbO3PoeBa7LCct8RnxxTIcW4tr3RIengUG1qgdRJ2d3jegc6fxUun0zY%2B%2BCbtdzwM5weSk7IQFPzE2VjPL5QZWZ8tEoaZlo%2Btgs46shtJYimTHaRim6qSy8eIIMkrlq7Qbf7W1E0YigKFGM0kT3u7n8XIKNyhrcwH8iOviU%2FO7uAOXKasZNzZFPODoVebPEFwabZ8d6xlVcAh7B7TAVCWR8aLei7xB%2FauK1wJgPh4pwDcL7EAl5uL9W8Zek7Q%2BKJGMlQPGuBHryBR3ERekTI%2FggwP7PLvQUaUAWFdFSjFMM6P8MURstum1AjElU6dDkGsX6yppv0EImagjyFI4uQ%2BTwIRowtcWbvgY6pgHn%2FZb01pN3LelUPHUd5%2F41tW%2FXBvyiToGE1woEBLZ0p%2BolzCfl1Tl2k2spE6HiQchy2pCwWm7WADUBHoBwKXPeBnK7lJsMEYSi9Qda0AdvjXPAfJ5OpaRxC%2B66f4nD%2BWiNcoJslzhYBfX%2B2RMa6tuv0Yx1wxalwG95kfm6ssQ5zrtzwj2Qo8x4poPwVDIe6b2Em3GsVLs%2FhiSc%2B%2BcgJw1JJHo%2F6k39&X-Amz-Signature=35e9dd08a5c6c21d7d69bcbd4d4a78d03745962dd2f3e637b124026dd59ddd7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
