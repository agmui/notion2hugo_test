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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY26KDV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWTUbS%2FYsR%2BiGDiYIPmy4kfEv4V9vMIWsQ1MU%2Fhxz1oQIgTFeJeHPr9VFjJxL3XxqAVEozQAG7sLhH43ajGIi6XMMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP5UCsf1gbMDtuMrbircA99Mi6fAbt%2FlwdI7jjYDXovgBs%2BQC4hsEOiblZMiAah0yT5aJGKOqWSRMnA9AIt8fmVKJqtKuJc4FZ6iKl7kP4d8qNBFvMlRtkdE68MaBrchAF3voIF1aB4JARbvZPN0VX%2F9%2FyM4K7%2Fq2Jk6usCq7zXvQkN6vapa24bZ%2FSekrOltwf%2FQv8Xq7%2F5HiSMxuHpPbIrANtB5j%2FIUGp3hE0uddrQH7qq7jTci2Y7XjtGIA%2Fjg96CZ6iOHavS6602LPAngexP1Tt4F%2Bi02pimpfg2azclXgjjGy9YmqbYAQs3kU8aBGLOpGFNphBNLrlCMb9yWGyEkNG6wCiirLZwj0yrmptCdc3mAhQbIAzfyQwmCw5hOR%2BROSyyFIz0XgmxtR8tV8j17rB3eWqsRZbQJoJWCn52KXUntz8bTTpIxzV6uhp1hdEJ0D0esccAqTiW3fRckod3vOCn5QXan6PKRt2LCxgo%2F70ufXIx9msDqerQbhIFU8tU1LqvMzK3ILutmBrjJMSkAaNiagoaDBV4w7Z%2BcV4xAJaaMD4RkBEyu8MLh4zZQ8gRz0XvLNVebchAWIBx%2BmdBSatjfKamDoSLrvPR988RzaRySr5M4k2npdCrfGjMAZ2fPx0C6MhTOTtYqMOP6tsIGOqUBQwoQSw%2B04jnvzp%2BqCdWCQqWf8095PbrFYt%2Bh8yCr965YSHI1JwavraNogTXH6V1ArTkFo8fuEHIPn%2F4cB2L7WPgD694rlCz1o4GBjuA%2F57ZObkqBFaW630qL6gTmpJa25W%2BqaSwx9yLMLWDjyGBfOi89gh4FvDF3vBBHwOmkG71T920hdtbigEzoMDBiwbW48NHK2iZ5YqeRXuz5zllTiE8Ac5m%2F&X-Amz-Signature=0683d4990c3ebf7f7c30a8c37c55793667718e9d33dcde912bc0b558d6e5a106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY26KDV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWTUbS%2FYsR%2BiGDiYIPmy4kfEv4V9vMIWsQ1MU%2Fhxz1oQIgTFeJeHPr9VFjJxL3XxqAVEozQAG7sLhH43ajGIi6XMMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP5UCsf1gbMDtuMrbircA99Mi6fAbt%2FlwdI7jjYDXovgBs%2BQC4hsEOiblZMiAah0yT5aJGKOqWSRMnA9AIt8fmVKJqtKuJc4FZ6iKl7kP4d8qNBFvMlRtkdE68MaBrchAF3voIF1aB4JARbvZPN0VX%2F9%2FyM4K7%2Fq2Jk6usCq7zXvQkN6vapa24bZ%2FSekrOltwf%2FQv8Xq7%2F5HiSMxuHpPbIrANtB5j%2FIUGp3hE0uddrQH7qq7jTci2Y7XjtGIA%2Fjg96CZ6iOHavS6602LPAngexP1Tt4F%2Bi02pimpfg2azclXgjjGy9YmqbYAQs3kU8aBGLOpGFNphBNLrlCMb9yWGyEkNG6wCiirLZwj0yrmptCdc3mAhQbIAzfyQwmCw5hOR%2BROSyyFIz0XgmxtR8tV8j17rB3eWqsRZbQJoJWCn52KXUntz8bTTpIxzV6uhp1hdEJ0D0esccAqTiW3fRckod3vOCn5QXan6PKRt2LCxgo%2F70ufXIx9msDqerQbhIFU8tU1LqvMzK3ILutmBrjJMSkAaNiagoaDBV4w7Z%2BcV4xAJaaMD4RkBEyu8MLh4zZQ8gRz0XvLNVebchAWIBx%2BmdBSatjfKamDoSLrvPR988RzaRySr5M4k2npdCrfGjMAZ2fPx0C6MhTOTtYqMOP6tsIGOqUBQwoQSw%2B04jnvzp%2BqCdWCQqWf8095PbrFYt%2Bh8yCr965YSHI1JwavraNogTXH6V1ArTkFo8fuEHIPn%2F4cB2L7WPgD694rlCz1o4GBjuA%2F57ZObkqBFaW630qL6gTmpJa25W%2BqaSwx9yLMLWDjyGBfOi89gh4FvDF3vBBHwOmkG71T920hdtbigEzoMDBiwbW48NHK2iZ5YqeRXuz5zllTiE8Ac5m%2F&X-Amz-Signature=856781661c2e034afd1bdffb804b4b8825f83ae601fd370b00ad8c1730ba87fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY26KDV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWTUbS%2FYsR%2BiGDiYIPmy4kfEv4V9vMIWsQ1MU%2Fhxz1oQIgTFeJeHPr9VFjJxL3XxqAVEozQAG7sLhH43ajGIi6XMMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP5UCsf1gbMDtuMrbircA99Mi6fAbt%2FlwdI7jjYDXovgBs%2BQC4hsEOiblZMiAah0yT5aJGKOqWSRMnA9AIt8fmVKJqtKuJc4FZ6iKl7kP4d8qNBFvMlRtkdE68MaBrchAF3voIF1aB4JARbvZPN0VX%2F9%2FyM4K7%2Fq2Jk6usCq7zXvQkN6vapa24bZ%2FSekrOltwf%2FQv8Xq7%2F5HiSMxuHpPbIrANtB5j%2FIUGp3hE0uddrQH7qq7jTci2Y7XjtGIA%2Fjg96CZ6iOHavS6602LPAngexP1Tt4F%2Bi02pimpfg2azclXgjjGy9YmqbYAQs3kU8aBGLOpGFNphBNLrlCMb9yWGyEkNG6wCiirLZwj0yrmptCdc3mAhQbIAzfyQwmCw5hOR%2BROSyyFIz0XgmxtR8tV8j17rB3eWqsRZbQJoJWCn52KXUntz8bTTpIxzV6uhp1hdEJ0D0esccAqTiW3fRckod3vOCn5QXan6PKRt2LCxgo%2F70ufXIx9msDqerQbhIFU8tU1LqvMzK3ILutmBrjJMSkAaNiagoaDBV4w7Z%2BcV4xAJaaMD4RkBEyu8MLh4zZQ8gRz0XvLNVebchAWIBx%2BmdBSatjfKamDoSLrvPR988RzaRySr5M4k2npdCrfGjMAZ2fPx0C6MhTOTtYqMOP6tsIGOqUBQwoQSw%2B04jnvzp%2BqCdWCQqWf8095PbrFYt%2Bh8yCr965YSHI1JwavraNogTXH6V1ArTkFo8fuEHIPn%2F4cB2L7WPgD694rlCz1o4GBjuA%2F57ZObkqBFaW630qL6gTmpJa25W%2BqaSwx9yLMLWDjyGBfOi89gh4FvDF3vBBHwOmkG71T920hdtbigEzoMDBiwbW48NHK2iZ5YqeRXuz5zllTiE8Ac5m%2F&X-Amz-Signature=79fc50482b637d394b30586fa8b67dcac7bd4524b9375348b1857dc8c00c968c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY26KDV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWTUbS%2FYsR%2BiGDiYIPmy4kfEv4V9vMIWsQ1MU%2Fhxz1oQIgTFeJeHPr9VFjJxL3XxqAVEozQAG7sLhH43ajGIi6XMMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP5UCsf1gbMDtuMrbircA99Mi6fAbt%2FlwdI7jjYDXovgBs%2BQC4hsEOiblZMiAah0yT5aJGKOqWSRMnA9AIt8fmVKJqtKuJc4FZ6iKl7kP4d8qNBFvMlRtkdE68MaBrchAF3voIF1aB4JARbvZPN0VX%2F9%2FyM4K7%2Fq2Jk6usCq7zXvQkN6vapa24bZ%2FSekrOltwf%2FQv8Xq7%2F5HiSMxuHpPbIrANtB5j%2FIUGp3hE0uddrQH7qq7jTci2Y7XjtGIA%2Fjg96CZ6iOHavS6602LPAngexP1Tt4F%2Bi02pimpfg2azclXgjjGy9YmqbYAQs3kU8aBGLOpGFNphBNLrlCMb9yWGyEkNG6wCiirLZwj0yrmptCdc3mAhQbIAzfyQwmCw5hOR%2BROSyyFIz0XgmxtR8tV8j17rB3eWqsRZbQJoJWCn52KXUntz8bTTpIxzV6uhp1hdEJ0D0esccAqTiW3fRckod3vOCn5QXan6PKRt2LCxgo%2F70ufXIx9msDqerQbhIFU8tU1LqvMzK3ILutmBrjJMSkAaNiagoaDBV4w7Z%2BcV4xAJaaMD4RkBEyu8MLh4zZQ8gRz0XvLNVebchAWIBx%2BmdBSatjfKamDoSLrvPR988RzaRySr5M4k2npdCrfGjMAZ2fPx0C6MhTOTtYqMOP6tsIGOqUBQwoQSw%2B04jnvzp%2BqCdWCQqWf8095PbrFYt%2Bh8yCr965YSHI1JwavraNogTXH6V1ArTkFo8fuEHIPn%2F4cB2L7WPgD694rlCz1o4GBjuA%2F57ZObkqBFaW630qL6gTmpJa25W%2BqaSwx9yLMLWDjyGBfOi89gh4FvDF3vBBHwOmkG71T920hdtbigEzoMDBiwbW48NHK2iZ5YqeRXuz5zllTiE8Ac5m%2F&X-Amz-Signature=02852243200826ffead4f511c88943f080ae3528ec3249b4884fe8bb3905a51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY26KDV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWTUbS%2FYsR%2BiGDiYIPmy4kfEv4V9vMIWsQ1MU%2Fhxz1oQIgTFeJeHPr9VFjJxL3XxqAVEozQAG7sLhH43ajGIi6XMMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP5UCsf1gbMDtuMrbircA99Mi6fAbt%2FlwdI7jjYDXovgBs%2BQC4hsEOiblZMiAah0yT5aJGKOqWSRMnA9AIt8fmVKJqtKuJc4FZ6iKl7kP4d8qNBFvMlRtkdE68MaBrchAF3voIF1aB4JARbvZPN0VX%2F9%2FyM4K7%2Fq2Jk6usCq7zXvQkN6vapa24bZ%2FSekrOltwf%2FQv8Xq7%2F5HiSMxuHpPbIrANtB5j%2FIUGp3hE0uddrQH7qq7jTci2Y7XjtGIA%2Fjg96CZ6iOHavS6602LPAngexP1Tt4F%2Bi02pimpfg2azclXgjjGy9YmqbYAQs3kU8aBGLOpGFNphBNLrlCMb9yWGyEkNG6wCiirLZwj0yrmptCdc3mAhQbIAzfyQwmCw5hOR%2BROSyyFIz0XgmxtR8tV8j17rB3eWqsRZbQJoJWCn52KXUntz8bTTpIxzV6uhp1hdEJ0D0esccAqTiW3fRckod3vOCn5QXan6PKRt2LCxgo%2F70ufXIx9msDqerQbhIFU8tU1LqvMzK3ILutmBrjJMSkAaNiagoaDBV4w7Z%2BcV4xAJaaMD4RkBEyu8MLh4zZQ8gRz0XvLNVebchAWIBx%2BmdBSatjfKamDoSLrvPR988RzaRySr5M4k2npdCrfGjMAZ2fPx0C6MhTOTtYqMOP6tsIGOqUBQwoQSw%2B04jnvzp%2BqCdWCQqWf8095PbrFYt%2Bh8yCr965YSHI1JwavraNogTXH6V1ArTkFo8fuEHIPn%2F4cB2L7WPgD694rlCz1o4GBjuA%2F57ZObkqBFaW630qL6gTmpJa25W%2BqaSwx9yLMLWDjyGBfOi89gh4FvDF3vBBHwOmkG71T920hdtbigEzoMDBiwbW48NHK2iZ5YqeRXuz5zllTiE8Ac5m%2F&X-Amz-Signature=ebe9c4e5ffa8b43b1d2ef6eb2a527fd1b58061de7316c5d2ffd54ddb682cc747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY26KDV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWTUbS%2FYsR%2BiGDiYIPmy4kfEv4V9vMIWsQ1MU%2Fhxz1oQIgTFeJeHPr9VFjJxL3XxqAVEozQAG7sLhH43ajGIi6XMMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP5UCsf1gbMDtuMrbircA99Mi6fAbt%2FlwdI7jjYDXovgBs%2BQC4hsEOiblZMiAah0yT5aJGKOqWSRMnA9AIt8fmVKJqtKuJc4FZ6iKl7kP4d8qNBFvMlRtkdE68MaBrchAF3voIF1aB4JARbvZPN0VX%2F9%2FyM4K7%2Fq2Jk6usCq7zXvQkN6vapa24bZ%2FSekrOltwf%2FQv8Xq7%2F5HiSMxuHpPbIrANtB5j%2FIUGp3hE0uddrQH7qq7jTci2Y7XjtGIA%2Fjg96CZ6iOHavS6602LPAngexP1Tt4F%2Bi02pimpfg2azclXgjjGy9YmqbYAQs3kU8aBGLOpGFNphBNLrlCMb9yWGyEkNG6wCiirLZwj0yrmptCdc3mAhQbIAzfyQwmCw5hOR%2BROSyyFIz0XgmxtR8tV8j17rB3eWqsRZbQJoJWCn52KXUntz8bTTpIxzV6uhp1hdEJ0D0esccAqTiW3fRckod3vOCn5QXan6PKRt2LCxgo%2F70ufXIx9msDqerQbhIFU8tU1LqvMzK3ILutmBrjJMSkAaNiagoaDBV4w7Z%2BcV4xAJaaMD4RkBEyu8MLh4zZQ8gRz0XvLNVebchAWIBx%2BmdBSatjfKamDoSLrvPR988RzaRySr5M4k2npdCrfGjMAZ2fPx0C6MhTOTtYqMOP6tsIGOqUBQwoQSw%2B04jnvzp%2BqCdWCQqWf8095PbrFYt%2Bh8yCr965YSHI1JwavraNogTXH6V1ArTkFo8fuEHIPn%2F4cB2L7WPgD694rlCz1o4GBjuA%2F57ZObkqBFaW630qL6gTmpJa25W%2BqaSwx9yLMLWDjyGBfOi89gh4FvDF3vBBHwOmkG71T920hdtbigEzoMDBiwbW48NHK2iZ5YqeRXuz5zllTiE8Ac5m%2F&X-Amz-Signature=276491cd44c9404a2f2c2db8cf4d1fee1e91fe5132a1a8faff8e9a09b63470f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY26KDV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWTUbS%2FYsR%2BiGDiYIPmy4kfEv4V9vMIWsQ1MU%2Fhxz1oQIgTFeJeHPr9VFjJxL3XxqAVEozQAG7sLhH43ajGIi6XMMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP5UCsf1gbMDtuMrbircA99Mi6fAbt%2FlwdI7jjYDXovgBs%2BQC4hsEOiblZMiAah0yT5aJGKOqWSRMnA9AIt8fmVKJqtKuJc4FZ6iKl7kP4d8qNBFvMlRtkdE68MaBrchAF3voIF1aB4JARbvZPN0VX%2F9%2FyM4K7%2Fq2Jk6usCq7zXvQkN6vapa24bZ%2FSekrOltwf%2FQv8Xq7%2F5HiSMxuHpPbIrANtB5j%2FIUGp3hE0uddrQH7qq7jTci2Y7XjtGIA%2Fjg96CZ6iOHavS6602LPAngexP1Tt4F%2Bi02pimpfg2azclXgjjGy9YmqbYAQs3kU8aBGLOpGFNphBNLrlCMb9yWGyEkNG6wCiirLZwj0yrmptCdc3mAhQbIAzfyQwmCw5hOR%2BROSyyFIz0XgmxtR8tV8j17rB3eWqsRZbQJoJWCn52KXUntz8bTTpIxzV6uhp1hdEJ0D0esccAqTiW3fRckod3vOCn5QXan6PKRt2LCxgo%2F70ufXIx9msDqerQbhIFU8tU1LqvMzK3ILutmBrjJMSkAaNiagoaDBV4w7Z%2BcV4xAJaaMD4RkBEyu8MLh4zZQ8gRz0XvLNVebchAWIBx%2BmdBSatjfKamDoSLrvPR988RzaRySr5M4k2npdCrfGjMAZ2fPx0C6MhTOTtYqMOP6tsIGOqUBQwoQSw%2B04jnvzp%2BqCdWCQqWf8095PbrFYt%2Bh8yCr965YSHI1JwavraNogTXH6V1ArTkFo8fuEHIPn%2F4cB2L7WPgD694rlCz1o4GBjuA%2F57ZObkqBFaW630qL6gTmpJa25W%2BqaSwx9yLMLWDjyGBfOi89gh4FvDF3vBBHwOmkG71T920hdtbigEzoMDBiwbW48NHK2iZ5YqeRXuz5zllTiE8Ac5m%2F&X-Amz-Signature=04a9a0a2d4d270d876f2b9b1f329a91970b4562a508750158121aa3780429cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY26KDV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWTUbS%2FYsR%2BiGDiYIPmy4kfEv4V9vMIWsQ1MU%2Fhxz1oQIgTFeJeHPr9VFjJxL3XxqAVEozQAG7sLhH43ajGIi6XMMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP5UCsf1gbMDtuMrbircA99Mi6fAbt%2FlwdI7jjYDXovgBs%2BQC4hsEOiblZMiAah0yT5aJGKOqWSRMnA9AIt8fmVKJqtKuJc4FZ6iKl7kP4d8qNBFvMlRtkdE68MaBrchAF3voIF1aB4JARbvZPN0VX%2F9%2FyM4K7%2Fq2Jk6usCq7zXvQkN6vapa24bZ%2FSekrOltwf%2FQv8Xq7%2F5HiSMxuHpPbIrANtB5j%2FIUGp3hE0uddrQH7qq7jTci2Y7XjtGIA%2Fjg96CZ6iOHavS6602LPAngexP1Tt4F%2Bi02pimpfg2azclXgjjGy9YmqbYAQs3kU8aBGLOpGFNphBNLrlCMb9yWGyEkNG6wCiirLZwj0yrmptCdc3mAhQbIAzfyQwmCw5hOR%2BROSyyFIz0XgmxtR8tV8j17rB3eWqsRZbQJoJWCn52KXUntz8bTTpIxzV6uhp1hdEJ0D0esccAqTiW3fRckod3vOCn5QXan6PKRt2LCxgo%2F70ufXIx9msDqerQbhIFU8tU1LqvMzK3ILutmBrjJMSkAaNiagoaDBV4w7Z%2BcV4xAJaaMD4RkBEyu8MLh4zZQ8gRz0XvLNVebchAWIBx%2BmdBSatjfKamDoSLrvPR988RzaRySr5M4k2npdCrfGjMAZ2fPx0C6MhTOTtYqMOP6tsIGOqUBQwoQSw%2B04jnvzp%2BqCdWCQqWf8095PbrFYt%2Bh8yCr965YSHI1JwavraNogTXH6V1ArTkFo8fuEHIPn%2F4cB2L7WPgD694rlCz1o4GBjuA%2F57ZObkqBFaW630qL6gTmpJa25W%2BqaSwx9yLMLWDjyGBfOi89gh4FvDF3vBBHwOmkG71T920hdtbigEzoMDBiwbW48NHK2iZ5YqeRXuz5zllTiE8Ac5m%2F&X-Amz-Signature=63c60875356c89594843975f47d579f42b05b78b14b92fa876d88a38c579a432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
