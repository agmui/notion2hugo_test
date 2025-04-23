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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVGWKDM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCzrlscQDW1cLySP1i0C1MpkmuNupIp%2BB4tHnDzqeHaNgIgah8R0alCdNXh7reWoeSVt6p%2BGRBoqT7J5LG3UNfJT6kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfWFUQWQkxVEelAyrcA9Vo0ycLt38%2BPsKN0%2F6AUTHlnrJpvNBUae2okjOYr%2BsS52P8GpB%2BdKKk9NSuVWD%2BzK81MCm7UIQwoNUedgBXae6pp7rlVStFPxptApTysy01ZYhNbTDLkVI76Nx%2BUhJ5ZDdJ4oy6QxAnEimM4ko3MpVw3HD4Avl3k36wL5QvwhqN6oavHacOexMki3tYJy6xrNLJ8boRcBh4V%2BThKF73SoyEIsezQ5gTz1kWQr4LcITJfiBaWgMnyau4VVV5foNYoYD08GOaDrdII0%2BQM4qZ9z5iN12nYNyuCbU06LSTyqgLGy7tGZxK%2FjLyk9Gy8KrrbOwaR13engMzznJljKjA33HxH2XnF19khQ%2BHIMxeCvPYNiPbkNb%2FX7Gl849NWnPho6gsYgxZBOBLkHN9b3nlFKFbCX8Sn1HuB%2FFiYzUhvTZVm6%2FmcUO%2F7sZ7F28RsnbJuJKkbdUE6%2FnHUxwPuGcEVF1iB5TMv%2FDlxgQNIM%2BTfxZgU8zyYfYRmveQZwO9Bz8pqGHF6OqghlLmBkSXsGFbMV%2BWkeZBIX1ctBrPn2IZu7WEGCyruh%2BwzuV%2F7skR%2BxTsjxyNRwCEBoQgG7f2nJ1%2BtOGGp5i1A23KVeiyeK%2F%2BzFqzww1%2BE2yP60%2FmoQvUMKGhpMAGOqUBw06X28hsMy1AcjDApn4VNXJP6nILsD%2BNs9wshWOAizszotGG5INHIaR4Re0bPjrcInHcsxsx7%2BDKqoLlo6BcumJtbaS1Vc%2FDRDEOaglfBOC%2B%2FIB4usicpmc9yI89wiCTKo8qLQxWFZEwndFI5KveZCIr75YcOUqChwD1nxVNvZ8AlPS8r%2FsU%2BF3Qyzn%2BX%2F7YthbnkGhelLNMepkjO1gF9VGDLuWE&X-Amz-Signature=b7a4458a1a5e15086527c3d03d11a40d4236bd03131f42bfdea5da26f225b78c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVGWKDM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCzrlscQDW1cLySP1i0C1MpkmuNupIp%2BB4tHnDzqeHaNgIgah8R0alCdNXh7reWoeSVt6p%2BGRBoqT7J5LG3UNfJT6kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfWFUQWQkxVEelAyrcA9Vo0ycLt38%2BPsKN0%2F6AUTHlnrJpvNBUae2okjOYr%2BsS52P8GpB%2BdKKk9NSuVWD%2BzK81MCm7UIQwoNUedgBXae6pp7rlVStFPxptApTysy01ZYhNbTDLkVI76Nx%2BUhJ5ZDdJ4oy6QxAnEimM4ko3MpVw3HD4Avl3k36wL5QvwhqN6oavHacOexMki3tYJy6xrNLJ8boRcBh4V%2BThKF73SoyEIsezQ5gTz1kWQr4LcITJfiBaWgMnyau4VVV5foNYoYD08GOaDrdII0%2BQM4qZ9z5iN12nYNyuCbU06LSTyqgLGy7tGZxK%2FjLyk9Gy8KrrbOwaR13engMzznJljKjA33HxH2XnF19khQ%2BHIMxeCvPYNiPbkNb%2FX7Gl849NWnPho6gsYgxZBOBLkHN9b3nlFKFbCX8Sn1HuB%2FFiYzUhvTZVm6%2FmcUO%2F7sZ7F28RsnbJuJKkbdUE6%2FnHUxwPuGcEVF1iB5TMv%2FDlxgQNIM%2BTfxZgU8zyYfYRmveQZwO9Bz8pqGHF6OqghlLmBkSXsGFbMV%2BWkeZBIX1ctBrPn2IZu7WEGCyruh%2BwzuV%2F7skR%2BxTsjxyNRwCEBoQgG7f2nJ1%2BtOGGp5i1A23KVeiyeK%2F%2BzFqzww1%2BE2yP60%2FmoQvUMKGhpMAGOqUBw06X28hsMy1AcjDApn4VNXJP6nILsD%2BNs9wshWOAizszotGG5INHIaR4Re0bPjrcInHcsxsx7%2BDKqoLlo6BcumJtbaS1Vc%2FDRDEOaglfBOC%2B%2FIB4usicpmc9yI89wiCTKo8qLQxWFZEwndFI5KveZCIr75YcOUqChwD1nxVNvZ8AlPS8r%2FsU%2BF3Qyzn%2BX%2F7YthbnkGhelLNMepkjO1gF9VGDLuWE&X-Amz-Signature=ceb6da1ef2551db86dbd6ab142fc889beed55286bdf687c06c8521b6834957e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVGWKDM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCzrlscQDW1cLySP1i0C1MpkmuNupIp%2BB4tHnDzqeHaNgIgah8R0alCdNXh7reWoeSVt6p%2BGRBoqT7J5LG3UNfJT6kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfWFUQWQkxVEelAyrcA9Vo0ycLt38%2BPsKN0%2F6AUTHlnrJpvNBUae2okjOYr%2BsS52P8GpB%2BdKKk9NSuVWD%2BzK81MCm7UIQwoNUedgBXae6pp7rlVStFPxptApTysy01ZYhNbTDLkVI76Nx%2BUhJ5ZDdJ4oy6QxAnEimM4ko3MpVw3HD4Avl3k36wL5QvwhqN6oavHacOexMki3tYJy6xrNLJ8boRcBh4V%2BThKF73SoyEIsezQ5gTz1kWQr4LcITJfiBaWgMnyau4VVV5foNYoYD08GOaDrdII0%2BQM4qZ9z5iN12nYNyuCbU06LSTyqgLGy7tGZxK%2FjLyk9Gy8KrrbOwaR13engMzznJljKjA33HxH2XnF19khQ%2BHIMxeCvPYNiPbkNb%2FX7Gl849NWnPho6gsYgxZBOBLkHN9b3nlFKFbCX8Sn1HuB%2FFiYzUhvTZVm6%2FmcUO%2F7sZ7F28RsnbJuJKkbdUE6%2FnHUxwPuGcEVF1iB5TMv%2FDlxgQNIM%2BTfxZgU8zyYfYRmveQZwO9Bz8pqGHF6OqghlLmBkSXsGFbMV%2BWkeZBIX1ctBrPn2IZu7WEGCyruh%2BwzuV%2F7skR%2BxTsjxyNRwCEBoQgG7f2nJ1%2BtOGGp5i1A23KVeiyeK%2F%2BzFqzww1%2BE2yP60%2FmoQvUMKGhpMAGOqUBw06X28hsMy1AcjDApn4VNXJP6nILsD%2BNs9wshWOAizszotGG5INHIaR4Re0bPjrcInHcsxsx7%2BDKqoLlo6BcumJtbaS1Vc%2FDRDEOaglfBOC%2B%2FIB4usicpmc9yI89wiCTKo8qLQxWFZEwndFI5KveZCIr75YcOUqChwD1nxVNvZ8AlPS8r%2FsU%2BF3Qyzn%2BX%2F7YthbnkGhelLNMepkjO1gF9VGDLuWE&X-Amz-Signature=bd0f1f84d03d36565d4bb99ce3cc98ac96f9dcd124f8ec04b66f086eb95a439a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVGWKDM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCzrlscQDW1cLySP1i0C1MpkmuNupIp%2BB4tHnDzqeHaNgIgah8R0alCdNXh7reWoeSVt6p%2BGRBoqT7J5LG3UNfJT6kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfWFUQWQkxVEelAyrcA9Vo0ycLt38%2BPsKN0%2F6AUTHlnrJpvNBUae2okjOYr%2BsS52P8GpB%2BdKKk9NSuVWD%2BzK81MCm7UIQwoNUedgBXae6pp7rlVStFPxptApTysy01ZYhNbTDLkVI76Nx%2BUhJ5ZDdJ4oy6QxAnEimM4ko3MpVw3HD4Avl3k36wL5QvwhqN6oavHacOexMki3tYJy6xrNLJ8boRcBh4V%2BThKF73SoyEIsezQ5gTz1kWQr4LcITJfiBaWgMnyau4VVV5foNYoYD08GOaDrdII0%2BQM4qZ9z5iN12nYNyuCbU06LSTyqgLGy7tGZxK%2FjLyk9Gy8KrrbOwaR13engMzznJljKjA33HxH2XnF19khQ%2BHIMxeCvPYNiPbkNb%2FX7Gl849NWnPho6gsYgxZBOBLkHN9b3nlFKFbCX8Sn1HuB%2FFiYzUhvTZVm6%2FmcUO%2F7sZ7F28RsnbJuJKkbdUE6%2FnHUxwPuGcEVF1iB5TMv%2FDlxgQNIM%2BTfxZgU8zyYfYRmveQZwO9Bz8pqGHF6OqghlLmBkSXsGFbMV%2BWkeZBIX1ctBrPn2IZu7WEGCyruh%2BwzuV%2F7skR%2BxTsjxyNRwCEBoQgG7f2nJ1%2BtOGGp5i1A23KVeiyeK%2F%2BzFqzww1%2BE2yP60%2FmoQvUMKGhpMAGOqUBw06X28hsMy1AcjDApn4VNXJP6nILsD%2BNs9wshWOAizszotGG5INHIaR4Re0bPjrcInHcsxsx7%2BDKqoLlo6BcumJtbaS1Vc%2FDRDEOaglfBOC%2B%2FIB4usicpmc9yI89wiCTKo8qLQxWFZEwndFI5KveZCIr75YcOUqChwD1nxVNvZ8AlPS8r%2FsU%2BF3Qyzn%2BX%2F7YthbnkGhelLNMepkjO1gF9VGDLuWE&X-Amz-Signature=9763f0e791854c5d7aee336a25d0c3331293d48eea04ebb376623e5dd1356c82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVGWKDM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCzrlscQDW1cLySP1i0C1MpkmuNupIp%2BB4tHnDzqeHaNgIgah8R0alCdNXh7reWoeSVt6p%2BGRBoqT7J5LG3UNfJT6kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfWFUQWQkxVEelAyrcA9Vo0ycLt38%2BPsKN0%2F6AUTHlnrJpvNBUae2okjOYr%2BsS52P8GpB%2BdKKk9NSuVWD%2BzK81MCm7UIQwoNUedgBXae6pp7rlVStFPxptApTysy01ZYhNbTDLkVI76Nx%2BUhJ5ZDdJ4oy6QxAnEimM4ko3MpVw3HD4Avl3k36wL5QvwhqN6oavHacOexMki3tYJy6xrNLJ8boRcBh4V%2BThKF73SoyEIsezQ5gTz1kWQr4LcITJfiBaWgMnyau4VVV5foNYoYD08GOaDrdII0%2BQM4qZ9z5iN12nYNyuCbU06LSTyqgLGy7tGZxK%2FjLyk9Gy8KrrbOwaR13engMzznJljKjA33HxH2XnF19khQ%2BHIMxeCvPYNiPbkNb%2FX7Gl849NWnPho6gsYgxZBOBLkHN9b3nlFKFbCX8Sn1HuB%2FFiYzUhvTZVm6%2FmcUO%2F7sZ7F28RsnbJuJKkbdUE6%2FnHUxwPuGcEVF1iB5TMv%2FDlxgQNIM%2BTfxZgU8zyYfYRmveQZwO9Bz8pqGHF6OqghlLmBkSXsGFbMV%2BWkeZBIX1ctBrPn2IZu7WEGCyruh%2BwzuV%2F7skR%2BxTsjxyNRwCEBoQgG7f2nJ1%2BtOGGp5i1A23KVeiyeK%2F%2BzFqzww1%2BE2yP60%2FmoQvUMKGhpMAGOqUBw06X28hsMy1AcjDApn4VNXJP6nILsD%2BNs9wshWOAizszotGG5INHIaR4Re0bPjrcInHcsxsx7%2BDKqoLlo6BcumJtbaS1Vc%2FDRDEOaglfBOC%2B%2FIB4usicpmc9yI89wiCTKo8qLQxWFZEwndFI5KveZCIr75YcOUqChwD1nxVNvZ8AlPS8r%2FsU%2BF3Qyzn%2BX%2F7YthbnkGhelLNMepkjO1gF9VGDLuWE&X-Amz-Signature=de6d54b6dc3f9bdd548a95ad073489a93ffa334d1707cca8837a77c54ea948f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVGWKDM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCzrlscQDW1cLySP1i0C1MpkmuNupIp%2BB4tHnDzqeHaNgIgah8R0alCdNXh7reWoeSVt6p%2BGRBoqT7J5LG3UNfJT6kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfWFUQWQkxVEelAyrcA9Vo0ycLt38%2BPsKN0%2F6AUTHlnrJpvNBUae2okjOYr%2BsS52P8GpB%2BdKKk9NSuVWD%2BzK81MCm7UIQwoNUedgBXae6pp7rlVStFPxptApTysy01ZYhNbTDLkVI76Nx%2BUhJ5ZDdJ4oy6QxAnEimM4ko3MpVw3HD4Avl3k36wL5QvwhqN6oavHacOexMki3tYJy6xrNLJ8boRcBh4V%2BThKF73SoyEIsezQ5gTz1kWQr4LcITJfiBaWgMnyau4VVV5foNYoYD08GOaDrdII0%2BQM4qZ9z5iN12nYNyuCbU06LSTyqgLGy7tGZxK%2FjLyk9Gy8KrrbOwaR13engMzznJljKjA33HxH2XnF19khQ%2BHIMxeCvPYNiPbkNb%2FX7Gl849NWnPho6gsYgxZBOBLkHN9b3nlFKFbCX8Sn1HuB%2FFiYzUhvTZVm6%2FmcUO%2F7sZ7F28RsnbJuJKkbdUE6%2FnHUxwPuGcEVF1iB5TMv%2FDlxgQNIM%2BTfxZgU8zyYfYRmveQZwO9Bz8pqGHF6OqghlLmBkSXsGFbMV%2BWkeZBIX1ctBrPn2IZu7WEGCyruh%2BwzuV%2F7skR%2BxTsjxyNRwCEBoQgG7f2nJ1%2BtOGGp5i1A23KVeiyeK%2F%2BzFqzww1%2BE2yP60%2FmoQvUMKGhpMAGOqUBw06X28hsMy1AcjDApn4VNXJP6nILsD%2BNs9wshWOAizszotGG5INHIaR4Re0bPjrcInHcsxsx7%2BDKqoLlo6BcumJtbaS1Vc%2FDRDEOaglfBOC%2B%2FIB4usicpmc9yI89wiCTKo8qLQxWFZEwndFI5KveZCIr75YcOUqChwD1nxVNvZ8AlPS8r%2FsU%2BF3Qyzn%2BX%2F7YthbnkGhelLNMepkjO1gF9VGDLuWE&X-Amz-Signature=965e74f93f91cf074c42e78ab5ee30777fa71b3e0261d344c0a4bdefc3be7a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVGWKDM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCzrlscQDW1cLySP1i0C1MpkmuNupIp%2BB4tHnDzqeHaNgIgah8R0alCdNXh7reWoeSVt6p%2BGRBoqT7J5LG3UNfJT6kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfWFUQWQkxVEelAyrcA9Vo0ycLt38%2BPsKN0%2F6AUTHlnrJpvNBUae2okjOYr%2BsS52P8GpB%2BdKKk9NSuVWD%2BzK81MCm7UIQwoNUedgBXae6pp7rlVStFPxptApTysy01ZYhNbTDLkVI76Nx%2BUhJ5ZDdJ4oy6QxAnEimM4ko3MpVw3HD4Avl3k36wL5QvwhqN6oavHacOexMki3tYJy6xrNLJ8boRcBh4V%2BThKF73SoyEIsezQ5gTz1kWQr4LcITJfiBaWgMnyau4VVV5foNYoYD08GOaDrdII0%2BQM4qZ9z5iN12nYNyuCbU06LSTyqgLGy7tGZxK%2FjLyk9Gy8KrrbOwaR13engMzznJljKjA33HxH2XnF19khQ%2BHIMxeCvPYNiPbkNb%2FX7Gl849NWnPho6gsYgxZBOBLkHN9b3nlFKFbCX8Sn1HuB%2FFiYzUhvTZVm6%2FmcUO%2F7sZ7F28RsnbJuJKkbdUE6%2FnHUxwPuGcEVF1iB5TMv%2FDlxgQNIM%2BTfxZgU8zyYfYRmveQZwO9Bz8pqGHF6OqghlLmBkSXsGFbMV%2BWkeZBIX1ctBrPn2IZu7WEGCyruh%2BwzuV%2F7skR%2BxTsjxyNRwCEBoQgG7f2nJ1%2BtOGGp5i1A23KVeiyeK%2F%2BzFqzww1%2BE2yP60%2FmoQvUMKGhpMAGOqUBw06X28hsMy1AcjDApn4VNXJP6nILsD%2BNs9wshWOAizszotGG5INHIaR4Re0bPjrcInHcsxsx7%2BDKqoLlo6BcumJtbaS1Vc%2FDRDEOaglfBOC%2B%2FIB4usicpmc9yI89wiCTKo8qLQxWFZEwndFI5KveZCIr75YcOUqChwD1nxVNvZ8AlPS8r%2FsU%2BF3Qyzn%2BX%2F7YthbnkGhelLNMepkjO1gF9VGDLuWE&X-Amz-Signature=752d39517400a8fea599762537c745d3ee282a24d53489ed0979e9cd69177434&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVGWKDM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCzrlscQDW1cLySP1i0C1MpkmuNupIp%2BB4tHnDzqeHaNgIgah8R0alCdNXh7reWoeSVt6p%2BGRBoqT7J5LG3UNfJT6kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfWFUQWQkxVEelAyrcA9Vo0ycLt38%2BPsKN0%2F6AUTHlnrJpvNBUae2okjOYr%2BsS52P8GpB%2BdKKk9NSuVWD%2BzK81MCm7UIQwoNUedgBXae6pp7rlVStFPxptApTysy01ZYhNbTDLkVI76Nx%2BUhJ5ZDdJ4oy6QxAnEimM4ko3MpVw3HD4Avl3k36wL5QvwhqN6oavHacOexMki3tYJy6xrNLJ8boRcBh4V%2BThKF73SoyEIsezQ5gTz1kWQr4LcITJfiBaWgMnyau4VVV5foNYoYD08GOaDrdII0%2BQM4qZ9z5iN12nYNyuCbU06LSTyqgLGy7tGZxK%2FjLyk9Gy8KrrbOwaR13engMzznJljKjA33HxH2XnF19khQ%2BHIMxeCvPYNiPbkNb%2FX7Gl849NWnPho6gsYgxZBOBLkHN9b3nlFKFbCX8Sn1HuB%2FFiYzUhvTZVm6%2FmcUO%2F7sZ7F28RsnbJuJKkbdUE6%2FnHUxwPuGcEVF1iB5TMv%2FDlxgQNIM%2BTfxZgU8zyYfYRmveQZwO9Bz8pqGHF6OqghlLmBkSXsGFbMV%2BWkeZBIX1ctBrPn2IZu7WEGCyruh%2BwzuV%2F7skR%2BxTsjxyNRwCEBoQgG7f2nJ1%2BtOGGp5i1A23KVeiyeK%2F%2BzFqzww1%2BE2yP60%2FmoQvUMKGhpMAGOqUBw06X28hsMy1AcjDApn4VNXJP6nILsD%2BNs9wshWOAizszotGG5INHIaR4Re0bPjrcInHcsxsx7%2BDKqoLlo6BcumJtbaS1Vc%2FDRDEOaglfBOC%2B%2FIB4usicpmc9yI89wiCTKo8qLQxWFZEwndFI5KveZCIr75YcOUqChwD1nxVNvZ8AlPS8r%2FsU%2BF3Qyzn%2BX%2F7YthbnkGhelLNMepkjO1gF9VGDLuWE&X-Amz-Signature=6d3f00b6f52f9c4e571e6f19202cfaa780e0954c83827800d819fabf444569bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
