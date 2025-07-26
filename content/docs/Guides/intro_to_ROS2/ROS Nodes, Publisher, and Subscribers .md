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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMLPGQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDna%2F%2FXssOzuzbYOXJy1Avbj%2FDPO85y6VhUByYNDtZOlwIgd2Uv28KWjYkJ80gLBlVMIzzXtSo%2BpAHyxYpLyo6twZIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFL9YGzlbgEpHnIq%2FyrcA%2FsFE1NyHYFBL0zIfHu0xPQTEkWEADaEjXDQcE036smR8JVEQEveYihhSDb2TMjLLsqnWUAcy%2FiV0Rax7uC%2Foz30WskQiLGfaLkAYoI7bH0hU5HolKgLXlXwzL7ynqtUpqpv8hJ5OhcjGGPzJNOQkIC5bhqeNKjCtrPtpx%2FdlxIy0241KTLaCxdl9QXTa%2F%2BvMf2s7Ym1TAWK8f%2FwVJgsFGINKLi%2FoEdfqnyA%2Bp3iWKZ7Nofz70oWzAi65uP30WVQIdsDAVm%2FNJu1t1r5btt16RIBMFCVYvNYsnh9eszKy9sEyPQHyttgXg%2B3tV6zPorrmyIDwsof0xvvIFrv4YtZ7SHWftIh5B%2BAhBbl7IHzRTDBkJqfkg%2B1dB9KLkuEW9kU3Jcna9J%2FdQP1HzBj49G0L3mbRXkshgstdGfOeGwTWg5zHr6MGvCSxvBdH2%2BVFiaqsCvc%2FYpqjpR2zHe3Kfu0I4YF9i74fZ%2F32X%2BA7Nl7of0aNF2jQ9jTb%2FgRVKsXvLWUmLY5CTZDomH1bCFEYuCsolgBrAzqjGQFhH%2BQqA1ANekTGIgKKU9YsGChDtdcDybQhebbgqgM%2BpLv9XhJDLvoSqO1O7V12bUi0%2FPg94%2FRLsudMMlKg8mouGPhzGhgMITZlMQGOqUB%2BRY6QzxJpcIBLmgedVZtnQsfJgEKEBkj9K2FUZKWsw%2BNaMHzZtUGoZsrN9WAqGKITkAiu80Kow%2FhVxVGD9mBSVoO3IPROlJsTOUKMTCnjLzpVmbhl4oh59oKUxj7fvpvmoaAdXdZpHybRlB8kGBaIyNp%2B2gOBNBvNM8s5cyc1t8%2BqmPeUBHlLhq%2FvbVzxsNcWba%2BpObyw4aA56rgesT5pLM2wXRY&X-Amz-Signature=37c288a85faa8a984f76b57c2b44ee34bbc49e4cb69e2f484bec1f2ff633fe97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMLPGQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDna%2F%2FXssOzuzbYOXJy1Avbj%2FDPO85y6VhUByYNDtZOlwIgd2Uv28KWjYkJ80gLBlVMIzzXtSo%2BpAHyxYpLyo6twZIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFL9YGzlbgEpHnIq%2FyrcA%2FsFE1NyHYFBL0zIfHu0xPQTEkWEADaEjXDQcE036smR8JVEQEveYihhSDb2TMjLLsqnWUAcy%2FiV0Rax7uC%2Foz30WskQiLGfaLkAYoI7bH0hU5HolKgLXlXwzL7ynqtUpqpv8hJ5OhcjGGPzJNOQkIC5bhqeNKjCtrPtpx%2FdlxIy0241KTLaCxdl9QXTa%2F%2BvMf2s7Ym1TAWK8f%2FwVJgsFGINKLi%2FoEdfqnyA%2Bp3iWKZ7Nofz70oWzAi65uP30WVQIdsDAVm%2FNJu1t1r5btt16RIBMFCVYvNYsnh9eszKy9sEyPQHyttgXg%2B3tV6zPorrmyIDwsof0xvvIFrv4YtZ7SHWftIh5B%2BAhBbl7IHzRTDBkJqfkg%2B1dB9KLkuEW9kU3Jcna9J%2FdQP1HzBj49G0L3mbRXkshgstdGfOeGwTWg5zHr6MGvCSxvBdH2%2BVFiaqsCvc%2FYpqjpR2zHe3Kfu0I4YF9i74fZ%2F32X%2BA7Nl7of0aNF2jQ9jTb%2FgRVKsXvLWUmLY5CTZDomH1bCFEYuCsolgBrAzqjGQFhH%2BQqA1ANekTGIgKKU9YsGChDtdcDybQhebbgqgM%2BpLv9XhJDLvoSqO1O7V12bUi0%2FPg94%2FRLsudMMlKg8mouGPhzGhgMITZlMQGOqUB%2BRY6QzxJpcIBLmgedVZtnQsfJgEKEBkj9K2FUZKWsw%2BNaMHzZtUGoZsrN9WAqGKITkAiu80Kow%2FhVxVGD9mBSVoO3IPROlJsTOUKMTCnjLzpVmbhl4oh59oKUxj7fvpvmoaAdXdZpHybRlB8kGBaIyNp%2B2gOBNBvNM8s5cyc1t8%2BqmPeUBHlLhq%2FvbVzxsNcWba%2BpObyw4aA56rgesT5pLM2wXRY&X-Amz-Signature=4ac01d592da47b90fab20513762887f1fd6dacf724f364770fd489504cbbe88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMLPGQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDna%2F%2FXssOzuzbYOXJy1Avbj%2FDPO85y6VhUByYNDtZOlwIgd2Uv28KWjYkJ80gLBlVMIzzXtSo%2BpAHyxYpLyo6twZIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFL9YGzlbgEpHnIq%2FyrcA%2FsFE1NyHYFBL0zIfHu0xPQTEkWEADaEjXDQcE036smR8JVEQEveYihhSDb2TMjLLsqnWUAcy%2FiV0Rax7uC%2Foz30WskQiLGfaLkAYoI7bH0hU5HolKgLXlXwzL7ynqtUpqpv8hJ5OhcjGGPzJNOQkIC5bhqeNKjCtrPtpx%2FdlxIy0241KTLaCxdl9QXTa%2F%2BvMf2s7Ym1TAWK8f%2FwVJgsFGINKLi%2FoEdfqnyA%2Bp3iWKZ7Nofz70oWzAi65uP30WVQIdsDAVm%2FNJu1t1r5btt16RIBMFCVYvNYsnh9eszKy9sEyPQHyttgXg%2B3tV6zPorrmyIDwsof0xvvIFrv4YtZ7SHWftIh5B%2BAhBbl7IHzRTDBkJqfkg%2B1dB9KLkuEW9kU3Jcna9J%2FdQP1HzBj49G0L3mbRXkshgstdGfOeGwTWg5zHr6MGvCSxvBdH2%2BVFiaqsCvc%2FYpqjpR2zHe3Kfu0I4YF9i74fZ%2F32X%2BA7Nl7of0aNF2jQ9jTb%2FgRVKsXvLWUmLY5CTZDomH1bCFEYuCsolgBrAzqjGQFhH%2BQqA1ANekTGIgKKU9YsGChDtdcDybQhebbgqgM%2BpLv9XhJDLvoSqO1O7V12bUi0%2FPg94%2FRLsudMMlKg8mouGPhzGhgMITZlMQGOqUB%2BRY6QzxJpcIBLmgedVZtnQsfJgEKEBkj9K2FUZKWsw%2BNaMHzZtUGoZsrN9WAqGKITkAiu80Kow%2FhVxVGD9mBSVoO3IPROlJsTOUKMTCnjLzpVmbhl4oh59oKUxj7fvpvmoaAdXdZpHybRlB8kGBaIyNp%2B2gOBNBvNM8s5cyc1t8%2BqmPeUBHlLhq%2FvbVzxsNcWba%2BpObyw4aA56rgesT5pLM2wXRY&X-Amz-Signature=efe45be1737f36537ddd1e504044078dd5e99cfd5895c25f3bfdd1d8b8872a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMLPGQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDna%2F%2FXssOzuzbYOXJy1Avbj%2FDPO85y6VhUByYNDtZOlwIgd2Uv28KWjYkJ80gLBlVMIzzXtSo%2BpAHyxYpLyo6twZIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFL9YGzlbgEpHnIq%2FyrcA%2FsFE1NyHYFBL0zIfHu0xPQTEkWEADaEjXDQcE036smR8JVEQEveYihhSDb2TMjLLsqnWUAcy%2FiV0Rax7uC%2Foz30WskQiLGfaLkAYoI7bH0hU5HolKgLXlXwzL7ynqtUpqpv8hJ5OhcjGGPzJNOQkIC5bhqeNKjCtrPtpx%2FdlxIy0241KTLaCxdl9QXTa%2F%2BvMf2s7Ym1TAWK8f%2FwVJgsFGINKLi%2FoEdfqnyA%2Bp3iWKZ7Nofz70oWzAi65uP30WVQIdsDAVm%2FNJu1t1r5btt16RIBMFCVYvNYsnh9eszKy9sEyPQHyttgXg%2B3tV6zPorrmyIDwsof0xvvIFrv4YtZ7SHWftIh5B%2BAhBbl7IHzRTDBkJqfkg%2B1dB9KLkuEW9kU3Jcna9J%2FdQP1HzBj49G0L3mbRXkshgstdGfOeGwTWg5zHr6MGvCSxvBdH2%2BVFiaqsCvc%2FYpqjpR2zHe3Kfu0I4YF9i74fZ%2F32X%2BA7Nl7of0aNF2jQ9jTb%2FgRVKsXvLWUmLY5CTZDomH1bCFEYuCsolgBrAzqjGQFhH%2BQqA1ANekTGIgKKU9YsGChDtdcDybQhebbgqgM%2BpLv9XhJDLvoSqO1O7V12bUi0%2FPg94%2FRLsudMMlKg8mouGPhzGhgMITZlMQGOqUB%2BRY6QzxJpcIBLmgedVZtnQsfJgEKEBkj9K2FUZKWsw%2BNaMHzZtUGoZsrN9WAqGKITkAiu80Kow%2FhVxVGD9mBSVoO3IPROlJsTOUKMTCnjLzpVmbhl4oh59oKUxj7fvpvmoaAdXdZpHybRlB8kGBaIyNp%2B2gOBNBvNM8s5cyc1t8%2BqmPeUBHlLhq%2FvbVzxsNcWba%2BpObyw4aA56rgesT5pLM2wXRY&X-Amz-Signature=29b5dbc24793a41f5efa3b3046ef32e8a24d3c22196afd2a27ab6e6f9f3be0db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMLPGQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDna%2F%2FXssOzuzbYOXJy1Avbj%2FDPO85y6VhUByYNDtZOlwIgd2Uv28KWjYkJ80gLBlVMIzzXtSo%2BpAHyxYpLyo6twZIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFL9YGzlbgEpHnIq%2FyrcA%2FsFE1NyHYFBL0zIfHu0xPQTEkWEADaEjXDQcE036smR8JVEQEveYihhSDb2TMjLLsqnWUAcy%2FiV0Rax7uC%2Foz30WskQiLGfaLkAYoI7bH0hU5HolKgLXlXwzL7ynqtUpqpv8hJ5OhcjGGPzJNOQkIC5bhqeNKjCtrPtpx%2FdlxIy0241KTLaCxdl9QXTa%2F%2BvMf2s7Ym1TAWK8f%2FwVJgsFGINKLi%2FoEdfqnyA%2Bp3iWKZ7Nofz70oWzAi65uP30WVQIdsDAVm%2FNJu1t1r5btt16RIBMFCVYvNYsnh9eszKy9sEyPQHyttgXg%2B3tV6zPorrmyIDwsof0xvvIFrv4YtZ7SHWftIh5B%2BAhBbl7IHzRTDBkJqfkg%2B1dB9KLkuEW9kU3Jcna9J%2FdQP1HzBj49G0L3mbRXkshgstdGfOeGwTWg5zHr6MGvCSxvBdH2%2BVFiaqsCvc%2FYpqjpR2zHe3Kfu0I4YF9i74fZ%2F32X%2BA7Nl7of0aNF2jQ9jTb%2FgRVKsXvLWUmLY5CTZDomH1bCFEYuCsolgBrAzqjGQFhH%2BQqA1ANekTGIgKKU9YsGChDtdcDybQhebbgqgM%2BpLv9XhJDLvoSqO1O7V12bUi0%2FPg94%2FRLsudMMlKg8mouGPhzGhgMITZlMQGOqUB%2BRY6QzxJpcIBLmgedVZtnQsfJgEKEBkj9K2FUZKWsw%2BNaMHzZtUGoZsrN9WAqGKITkAiu80Kow%2FhVxVGD9mBSVoO3IPROlJsTOUKMTCnjLzpVmbhl4oh59oKUxj7fvpvmoaAdXdZpHybRlB8kGBaIyNp%2B2gOBNBvNM8s5cyc1t8%2BqmPeUBHlLhq%2FvbVzxsNcWba%2BpObyw4aA56rgesT5pLM2wXRY&X-Amz-Signature=a0abe770f19290fe2d20cb679861f3f935b7c7b9608057a591c4e250d3f93391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMLPGQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDna%2F%2FXssOzuzbYOXJy1Avbj%2FDPO85y6VhUByYNDtZOlwIgd2Uv28KWjYkJ80gLBlVMIzzXtSo%2BpAHyxYpLyo6twZIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFL9YGzlbgEpHnIq%2FyrcA%2FsFE1NyHYFBL0zIfHu0xPQTEkWEADaEjXDQcE036smR8JVEQEveYihhSDb2TMjLLsqnWUAcy%2FiV0Rax7uC%2Foz30WskQiLGfaLkAYoI7bH0hU5HolKgLXlXwzL7ynqtUpqpv8hJ5OhcjGGPzJNOQkIC5bhqeNKjCtrPtpx%2FdlxIy0241KTLaCxdl9QXTa%2F%2BvMf2s7Ym1TAWK8f%2FwVJgsFGINKLi%2FoEdfqnyA%2Bp3iWKZ7Nofz70oWzAi65uP30WVQIdsDAVm%2FNJu1t1r5btt16RIBMFCVYvNYsnh9eszKy9sEyPQHyttgXg%2B3tV6zPorrmyIDwsof0xvvIFrv4YtZ7SHWftIh5B%2BAhBbl7IHzRTDBkJqfkg%2B1dB9KLkuEW9kU3Jcna9J%2FdQP1HzBj49G0L3mbRXkshgstdGfOeGwTWg5zHr6MGvCSxvBdH2%2BVFiaqsCvc%2FYpqjpR2zHe3Kfu0I4YF9i74fZ%2F32X%2BA7Nl7of0aNF2jQ9jTb%2FgRVKsXvLWUmLY5CTZDomH1bCFEYuCsolgBrAzqjGQFhH%2BQqA1ANekTGIgKKU9YsGChDtdcDybQhebbgqgM%2BpLv9XhJDLvoSqO1O7V12bUi0%2FPg94%2FRLsudMMlKg8mouGPhzGhgMITZlMQGOqUB%2BRY6QzxJpcIBLmgedVZtnQsfJgEKEBkj9K2FUZKWsw%2BNaMHzZtUGoZsrN9WAqGKITkAiu80Kow%2FhVxVGD9mBSVoO3IPROlJsTOUKMTCnjLzpVmbhl4oh59oKUxj7fvpvmoaAdXdZpHybRlB8kGBaIyNp%2B2gOBNBvNM8s5cyc1t8%2BqmPeUBHlLhq%2FvbVzxsNcWba%2BpObyw4aA56rgesT5pLM2wXRY&X-Amz-Signature=a2b0a33125724496fdefdba3387f0cff658f0e8f892d22c7c9d2e3e498169dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMLPGQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDna%2F%2FXssOzuzbYOXJy1Avbj%2FDPO85y6VhUByYNDtZOlwIgd2Uv28KWjYkJ80gLBlVMIzzXtSo%2BpAHyxYpLyo6twZIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFL9YGzlbgEpHnIq%2FyrcA%2FsFE1NyHYFBL0zIfHu0xPQTEkWEADaEjXDQcE036smR8JVEQEveYihhSDb2TMjLLsqnWUAcy%2FiV0Rax7uC%2Foz30WskQiLGfaLkAYoI7bH0hU5HolKgLXlXwzL7ynqtUpqpv8hJ5OhcjGGPzJNOQkIC5bhqeNKjCtrPtpx%2FdlxIy0241KTLaCxdl9QXTa%2F%2BvMf2s7Ym1TAWK8f%2FwVJgsFGINKLi%2FoEdfqnyA%2Bp3iWKZ7Nofz70oWzAi65uP30WVQIdsDAVm%2FNJu1t1r5btt16RIBMFCVYvNYsnh9eszKy9sEyPQHyttgXg%2B3tV6zPorrmyIDwsof0xvvIFrv4YtZ7SHWftIh5B%2BAhBbl7IHzRTDBkJqfkg%2B1dB9KLkuEW9kU3Jcna9J%2FdQP1HzBj49G0L3mbRXkshgstdGfOeGwTWg5zHr6MGvCSxvBdH2%2BVFiaqsCvc%2FYpqjpR2zHe3Kfu0I4YF9i74fZ%2F32X%2BA7Nl7of0aNF2jQ9jTb%2FgRVKsXvLWUmLY5CTZDomH1bCFEYuCsolgBrAzqjGQFhH%2BQqA1ANekTGIgKKU9YsGChDtdcDybQhebbgqgM%2BpLv9XhJDLvoSqO1O7V12bUi0%2FPg94%2FRLsudMMlKg8mouGPhzGhgMITZlMQGOqUB%2BRY6QzxJpcIBLmgedVZtnQsfJgEKEBkj9K2FUZKWsw%2BNaMHzZtUGoZsrN9WAqGKITkAiu80Kow%2FhVxVGD9mBSVoO3IPROlJsTOUKMTCnjLzpVmbhl4oh59oKUxj7fvpvmoaAdXdZpHybRlB8kGBaIyNp%2B2gOBNBvNM8s5cyc1t8%2BqmPeUBHlLhq%2FvbVzxsNcWba%2BpObyw4aA56rgesT5pLM2wXRY&X-Amz-Signature=dd40a13bfa7f64527271cb1867b65124ac4858de914df493c2c39e49514eb727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMLPGQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDna%2F%2FXssOzuzbYOXJy1Avbj%2FDPO85y6VhUByYNDtZOlwIgd2Uv28KWjYkJ80gLBlVMIzzXtSo%2BpAHyxYpLyo6twZIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFL9YGzlbgEpHnIq%2FyrcA%2FsFE1NyHYFBL0zIfHu0xPQTEkWEADaEjXDQcE036smR8JVEQEveYihhSDb2TMjLLsqnWUAcy%2FiV0Rax7uC%2Foz30WskQiLGfaLkAYoI7bH0hU5HolKgLXlXwzL7ynqtUpqpv8hJ5OhcjGGPzJNOQkIC5bhqeNKjCtrPtpx%2FdlxIy0241KTLaCxdl9QXTa%2F%2BvMf2s7Ym1TAWK8f%2FwVJgsFGINKLi%2FoEdfqnyA%2Bp3iWKZ7Nofz70oWzAi65uP30WVQIdsDAVm%2FNJu1t1r5btt16RIBMFCVYvNYsnh9eszKy9sEyPQHyttgXg%2B3tV6zPorrmyIDwsof0xvvIFrv4YtZ7SHWftIh5B%2BAhBbl7IHzRTDBkJqfkg%2B1dB9KLkuEW9kU3Jcna9J%2FdQP1HzBj49G0L3mbRXkshgstdGfOeGwTWg5zHr6MGvCSxvBdH2%2BVFiaqsCvc%2FYpqjpR2zHe3Kfu0I4YF9i74fZ%2F32X%2BA7Nl7of0aNF2jQ9jTb%2FgRVKsXvLWUmLY5CTZDomH1bCFEYuCsolgBrAzqjGQFhH%2BQqA1ANekTGIgKKU9YsGChDtdcDybQhebbgqgM%2BpLv9XhJDLvoSqO1O7V12bUi0%2FPg94%2FRLsudMMlKg8mouGPhzGhgMITZlMQGOqUB%2BRY6QzxJpcIBLmgedVZtnQsfJgEKEBkj9K2FUZKWsw%2BNaMHzZtUGoZsrN9WAqGKITkAiu80Kow%2FhVxVGD9mBSVoO3IPROlJsTOUKMTCnjLzpVmbhl4oh59oKUxj7fvpvmoaAdXdZpHybRlB8kGBaIyNp%2B2gOBNBvNM8s5cyc1t8%2BqmPeUBHlLhq%2FvbVzxsNcWba%2BpObyw4aA56rgesT5pLM2wXRY&X-Amz-Signature=1f28af8aa9fb7aa5c162e479bebf55387de8b88ce1f132c5ddaf36221b3a1f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
