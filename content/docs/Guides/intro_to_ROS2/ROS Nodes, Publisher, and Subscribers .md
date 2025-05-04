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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVNXKP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCC%2B8XoKyDYLIw4owhTNzmVuuUrU59r5a7aZmsKRlfmRwIgKLGLckEl8LNx9SvcGkXu5PXFuAV9Zn9NHKOs641s6HMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDn0Q1RP7w7M9SL2kircA%2Fy2dWl637dogRIhs07TxF7kYZKvlrTfgk%2BBpwdeWgYzY0B%2BvDt1qPW1K46mFbm1h31buFhaUqZEgAL5O%2B5qgKsxbC42fPPrBzW5WYZ2GFlffeRp%2F9jxFJFFzl9VIsGKu54IiMDbhnsfyimVsPrlXQ8UQUB87YynOF44g7zthqaZT93QqDDCSPIxe9Uin2sxwWzU2LDCUoRNAVhtIW6m7uAj5c1RiXlPQ2l3CJLdGkktCVxHWaTGOUTVIOYDHX1xQetU%2Frg1JRlVOAAuGfjPR8AXOZGKQZrxj%2BpmQkp2keqFK6lQA565OoDFgPJzxX3SEuAJctEduccVqp8NDL7jcrkrpI7ZX%2BzlUIraPTgXHMzmniPSlxDSxOGGzIqwr5Q82legvTy6fzNfp1xC35vFO6CMgIY6ENoslox03bFhY7BV268NJOX2eUHAEHvBi7d9Ud2Dn8BdznWGTNsFIJjzMp0eakw1%2FnGZsRyxqzP%2BWVNKcSk2mdRuZuDJrYgC7IMXmrMqm%2BX2VLxZ9tJdjjf6Bty73SoiYoSMcKPfZbof4ZpOhpvPciznjxNVKQVyRkqRUMgQoL6WTmoOwcp999CX%2F0S4ru8L5efW05GEyyUG7CTXXggtQwxz6l%2BnhukwMLyI3sAGOqUB2TxNAQKOfwvgT8FPidX4wKsxO1AR5kWBJ9mMwQc%2FZGjtf1hn5nQA%2F5IwSxDsDw0doHhN1O4ZGi9SvW%2FTgzOqxUGFdxLNmOBq5afF86uzTCBkb1UoIX8O%2FANun9Y7llOvumjXx1vJX9ynrjjlk7V02SYKb%2ByAGC%2FTJltkQe1zu9cOitPFxVgmsCX40JiJnneAhX%2FiU4%2BdO9JhFM01sbhJdhokql6%2F&X-Amz-Signature=569ddce05597a5d488851662853c888224080966d263c51c724d816e210a8fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVNXKP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCC%2B8XoKyDYLIw4owhTNzmVuuUrU59r5a7aZmsKRlfmRwIgKLGLckEl8LNx9SvcGkXu5PXFuAV9Zn9NHKOs641s6HMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDn0Q1RP7w7M9SL2kircA%2Fy2dWl637dogRIhs07TxF7kYZKvlrTfgk%2BBpwdeWgYzY0B%2BvDt1qPW1K46mFbm1h31buFhaUqZEgAL5O%2B5qgKsxbC42fPPrBzW5WYZ2GFlffeRp%2F9jxFJFFzl9VIsGKu54IiMDbhnsfyimVsPrlXQ8UQUB87YynOF44g7zthqaZT93QqDDCSPIxe9Uin2sxwWzU2LDCUoRNAVhtIW6m7uAj5c1RiXlPQ2l3CJLdGkktCVxHWaTGOUTVIOYDHX1xQetU%2Frg1JRlVOAAuGfjPR8AXOZGKQZrxj%2BpmQkp2keqFK6lQA565OoDFgPJzxX3SEuAJctEduccVqp8NDL7jcrkrpI7ZX%2BzlUIraPTgXHMzmniPSlxDSxOGGzIqwr5Q82legvTy6fzNfp1xC35vFO6CMgIY6ENoslox03bFhY7BV268NJOX2eUHAEHvBi7d9Ud2Dn8BdznWGTNsFIJjzMp0eakw1%2FnGZsRyxqzP%2BWVNKcSk2mdRuZuDJrYgC7IMXmrMqm%2BX2VLxZ9tJdjjf6Bty73SoiYoSMcKPfZbof4ZpOhpvPciznjxNVKQVyRkqRUMgQoL6WTmoOwcp999CX%2F0S4ru8L5efW05GEyyUG7CTXXggtQwxz6l%2BnhukwMLyI3sAGOqUB2TxNAQKOfwvgT8FPidX4wKsxO1AR5kWBJ9mMwQc%2FZGjtf1hn5nQA%2F5IwSxDsDw0doHhN1O4ZGi9SvW%2FTgzOqxUGFdxLNmOBq5afF86uzTCBkb1UoIX8O%2FANun9Y7llOvumjXx1vJX9ynrjjlk7V02SYKb%2ByAGC%2FTJltkQe1zu9cOitPFxVgmsCX40JiJnneAhX%2FiU4%2BdO9JhFM01sbhJdhokql6%2F&X-Amz-Signature=f79de85d24961d5d6e989f53b985a32198af0531b025977c10886dd7e10a4336&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVNXKP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCC%2B8XoKyDYLIw4owhTNzmVuuUrU59r5a7aZmsKRlfmRwIgKLGLckEl8LNx9SvcGkXu5PXFuAV9Zn9NHKOs641s6HMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDn0Q1RP7w7M9SL2kircA%2Fy2dWl637dogRIhs07TxF7kYZKvlrTfgk%2BBpwdeWgYzY0B%2BvDt1qPW1K46mFbm1h31buFhaUqZEgAL5O%2B5qgKsxbC42fPPrBzW5WYZ2GFlffeRp%2F9jxFJFFzl9VIsGKu54IiMDbhnsfyimVsPrlXQ8UQUB87YynOF44g7zthqaZT93QqDDCSPIxe9Uin2sxwWzU2LDCUoRNAVhtIW6m7uAj5c1RiXlPQ2l3CJLdGkktCVxHWaTGOUTVIOYDHX1xQetU%2Frg1JRlVOAAuGfjPR8AXOZGKQZrxj%2BpmQkp2keqFK6lQA565OoDFgPJzxX3SEuAJctEduccVqp8NDL7jcrkrpI7ZX%2BzlUIraPTgXHMzmniPSlxDSxOGGzIqwr5Q82legvTy6fzNfp1xC35vFO6CMgIY6ENoslox03bFhY7BV268NJOX2eUHAEHvBi7d9Ud2Dn8BdznWGTNsFIJjzMp0eakw1%2FnGZsRyxqzP%2BWVNKcSk2mdRuZuDJrYgC7IMXmrMqm%2BX2VLxZ9tJdjjf6Bty73SoiYoSMcKPfZbof4ZpOhpvPciznjxNVKQVyRkqRUMgQoL6WTmoOwcp999CX%2F0S4ru8L5efW05GEyyUG7CTXXggtQwxz6l%2BnhukwMLyI3sAGOqUB2TxNAQKOfwvgT8FPidX4wKsxO1AR5kWBJ9mMwQc%2FZGjtf1hn5nQA%2F5IwSxDsDw0doHhN1O4ZGi9SvW%2FTgzOqxUGFdxLNmOBq5afF86uzTCBkb1UoIX8O%2FANun9Y7llOvumjXx1vJX9ynrjjlk7V02SYKb%2ByAGC%2FTJltkQe1zu9cOitPFxVgmsCX40JiJnneAhX%2FiU4%2BdO9JhFM01sbhJdhokql6%2F&X-Amz-Signature=077ca633896e58deaf7c4a569be87ae93ebbe1f3f27dc5d5392178f3aa463ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVNXKP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCC%2B8XoKyDYLIw4owhTNzmVuuUrU59r5a7aZmsKRlfmRwIgKLGLckEl8LNx9SvcGkXu5PXFuAV9Zn9NHKOs641s6HMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDn0Q1RP7w7M9SL2kircA%2Fy2dWl637dogRIhs07TxF7kYZKvlrTfgk%2BBpwdeWgYzY0B%2BvDt1qPW1K46mFbm1h31buFhaUqZEgAL5O%2B5qgKsxbC42fPPrBzW5WYZ2GFlffeRp%2F9jxFJFFzl9VIsGKu54IiMDbhnsfyimVsPrlXQ8UQUB87YynOF44g7zthqaZT93QqDDCSPIxe9Uin2sxwWzU2LDCUoRNAVhtIW6m7uAj5c1RiXlPQ2l3CJLdGkktCVxHWaTGOUTVIOYDHX1xQetU%2Frg1JRlVOAAuGfjPR8AXOZGKQZrxj%2BpmQkp2keqFK6lQA565OoDFgPJzxX3SEuAJctEduccVqp8NDL7jcrkrpI7ZX%2BzlUIraPTgXHMzmniPSlxDSxOGGzIqwr5Q82legvTy6fzNfp1xC35vFO6CMgIY6ENoslox03bFhY7BV268NJOX2eUHAEHvBi7d9Ud2Dn8BdznWGTNsFIJjzMp0eakw1%2FnGZsRyxqzP%2BWVNKcSk2mdRuZuDJrYgC7IMXmrMqm%2BX2VLxZ9tJdjjf6Bty73SoiYoSMcKPfZbof4ZpOhpvPciznjxNVKQVyRkqRUMgQoL6WTmoOwcp999CX%2F0S4ru8L5efW05GEyyUG7CTXXggtQwxz6l%2BnhukwMLyI3sAGOqUB2TxNAQKOfwvgT8FPidX4wKsxO1AR5kWBJ9mMwQc%2FZGjtf1hn5nQA%2F5IwSxDsDw0doHhN1O4ZGi9SvW%2FTgzOqxUGFdxLNmOBq5afF86uzTCBkb1UoIX8O%2FANun9Y7llOvumjXx1vJX9ynrjjlk7V02SYKb%2ByAGC%2FTJltkQe1zu9cOitPFxVgmsCX40JiJnneAhX%2FiU4%2BdO9JhFM01sbhJdhokql6%2F&X-Amz-Signature=40f87ebf6190811002c640a50d86d9820470e48c1656004b098ae9261cca97a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVNXKP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCC%2B8XoKyDYLIw4owhTNzmVuuUrU59r5a7aZmsKRlfmRwIgKLGLckEl8LNx9SvcGkXu5PXFuAV9Zn9NHKOs641s6HMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDn0Q1RP7w7M9SL2kircA%2Fy2dWl637dogRIhs07TxF7kYZKvlrTfgk%2BBpwdeWgYzY0B%2BvDt1qPW1K46mFbm1h31buFhaUqZEgAL5O%2B5qgKsxbC42fPPrBzW5WYZ2GFlffeRp%2F9jxFJFFzl9VIsGKu54IiMDbhnsfyimVsPrlXQ8UQUB87YynOF44g7zthqaZT93QqDDCSPIxe9Uin2sxwWzU2LDCUoRNAVhtIW6m7uAj5c1RiXlPQ2l3CJLdGkktCVxHWaTGOUTVIOYDHX1xQetU%2Frg1JRlVOAAuGfjPR8AXOZGKQZrxj%2BpmQkp2keqFK6lQA565OoDFgPJzxX3SEuAJctEduccVqp8NDL7jcrkrpI7ZX%2BzlUIraPTgXHMzmniPSlxDSxOGGzIqwr5Q82legvTy6fzNfp1xC35vFO6CMgIY6ENoslox03bFhY7BV268NJOX2eUHAEHvBi7d9Ud2Dn8BdznWGTNsFIJjzMp0eakw1%2FnGZsRyxqzP%2BWVNKcSk2mdRuZuDJrYgC7IMXmrMqm%2BX2VLxZ9tJdjjf6Bty73SoiYoSMcKPfZbof4ZpOhpvPciznjxNVKQVyRkqRUMgQoL6WTmoOwcp999CX%2F0S4ru8L5efW05GEyyUG7CTXXggtQwxz6l%2BnhukwMLyI3sAGOqUB2TxNAQKOfwvgT8FPidX4wKsxO1AR5kWBJ9mMwQc%2FZGjtf1hn5nQA%2F5IwSxDsDw0doHhN1O4ZGi9SvW%2FTgzOqxUGFdxLNmOBq5afF86uzTCBkb1UoIX8O%2FANun9Y7llOvumjXx1vJX9ynrjjlk7V02SYKb%2ByAGC%2FTJltkQe1zu9cOitPFxVgmsCX40JiJnneAhX%2FiU4%2BdO9JhFM01sbhJdhokql6%2F&X-Amz-Signature=1378cb76f4f96b59fa3c8101d4c315a92aa11e52b7425c64cb0c74d3558a6119&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVNXKP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCC%2B8XoKyDYLIw4owhTNzmVuuUrU59r5a7aZmsKRlfmRwIgKLGLckEl8LNx9SvcGkXu5PXFuAV9Zn9NHKOs641s6HMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDn0Q1RP7w7M9SL2kircA%2Fy2dWl637dogRIhs07TxF7kYZKvlrTfgk%2BBpwdeWgYzY0B%2BvDt1qPW1K46mFbm1h31buFhaUqZEgAL5O%2B5qgKsxbC42fPPrBzW5WYZ2GFlffeRp%2F9jxFJFFzl9VIsGKu54IiMDbhnsfyimVsPrlXQ8UQUB87YynOF44g7zthqaZT93QqDDCSPIxe9Uin2sxwWzU2LDCUoRNAVhtIW6m7uAj5c1RiXlPQ2l3CJLdGkktCVxHWaTGOUTVIOYDHX1xQetU%2Frg1JRlVOAAuGfjPR8AXOZGKQZrxj%2BpmQkp2keqFK6lQA565OoDFgPJzxX3SEuAJctEduccVqp8NDL7jcrkrpI7ZX%2BzlUIraPTgXHMzmniPSlxDSxOGGzIqwr5Q82legvTy6fzNfp1xC35vFO6CMgIY6ENoslox03bFhY7BV268NJOX2eUHAEHvBi7d9Ud2Dn8BdznWGTNsFIJjzMp0eakw1%2FnGZsRyxqzP%2BWVNKcSk2mdRuZuDJrYgC7IMXmrMqm%2BX2VLxZ9tJdjjf6Bty73SoiYoSMcKPfZbof4ZpOhpvPciznjxNVKQVyRkqRUMgQoL6WTmoOwcp999CX%2F0S4ru8L5efW05GEyyUG7CTXXggtQwxz6l%2BnhukwMLyI3sAGOqUB2TxNAQKOfwvgT8FPidX4wKsxO1AR5kWBJ9mMwQc%2FZGjtf1hn5nQA%2F5IwSxDsDw0doHhN1O4ZGi9SvW%2FTgzOqxUGFdxLNmOBq5afF86uzTCBkb1UoIX8O%2FANun9Y7llOvumjXx1vJX9ynrjjlk7V02SYKb%2ByAGC%2FTJltkQe1zu9cOitPFxVgmsCX40JiJnneAhX%2FiU4%2BdO9JhFM01sbhJdhokql6%2F&X-Amz-Signature=5c52ef97384226fd6e506c1cd40096f761268e73a833c70a0b1befa85fdce6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVNXKP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCC%2B8XoKyDYLIw4owhTNzmVuuUrU59r5a7aZmsKRlfmRwIgKLGLckEl8LNx9SvcGkXu5PXFuAV9Zn9NHKOs641s6HMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDn0Q1RP7w7M9SL2kircA%2Fy2dWl637dogRIhs07TxF7kYZKvlrTfgk%2BBpwdeWgYzY0B%2BvDt1qPW1K46mFbm1h31buFhaUqZEgAL5O%2B5qgKsxbC42fPPrBzW5WYZ2GFlffeRp%2F9jxFJFFzl9VIsGKu54IiMDbhnsfyimVsPrlXQ8UQUB87YynOF44g7zthqaZT93QqDDCSPIxe9Uin2sxwWzU2LDCUoRNAVhtIW6m7uAj5c1RiXlPQ2l3CJLdGkktCVxHWaTGOUTVIOYDHX1xQetU%2Frg1JRlVOAAuGfjPR8AXOZGKQZrxj%2BpmQkp2keqFK6lQA565OoDFgPJzxX3SEuAJctEduccVqp8NDL7jcrkrpI7ZX%2BzlUIraPTgXHMzmniPSlxDSxOGGzIqwr5Q82legvTy6fzNfp1xC35vFO6CMgIY6ENoslox03bFhY7BV268NJOX2eUHAEHvBi7d9Ud2Dn8BdznWGTNsFIJjzMp0eakw1%2FnGZsRyxqzP%2BWVNKcSk2mdRuZuDJrYgC7IMXmrMqm%2BX2VLxZ9tJdjjf6Bty73SoiYoSMcKPfZbof4ZpOhpvPciznjxNVKQVyRkqRUMgQoL6WTmoOwcp999CX%2F0S4ru8L5efW05GEyyUG7CTXXggtQwxz6l%2BnhukwMLyI3sAGOqUB2TxNAQKOfwvgT8FPidX4wKsxO1AR5kWBJ9mMwQc%2FZGjtf1hn5nQA%2F5IwSxDsDw0doHhN1O4ZGi9SvW%2FTgzOqxUGFdxLNmOBq5afF86uzTCBkb1UoIX8O%2FANun9Y7llOvumjXx1vJX9ynrjjlk7V02SYKb%2ByAGC%2FTJltkQe1zu9cOitPFxVgmsCX40JiJnneAhX%2FiU4%2BdO9JhFM01sbhJdhokql6%2F&X-Amz-Signature=58201a392d34e47d79be549e747b20cfe93eb33fb56ceb4626d376056e2724ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVNXKP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCC%2B8XoKyDYLIw4owhTNzmVuuUrU59r5a7aZmsKRlfmRwIgKLGLckEl8LNx9SvcGkXu5PXFuAV9Zn9NHKOs641s6HMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDn0Q1RP7w7M9SL2kircA%2Fy2dWl637dogRIhs07TxF7kYZKvlrTfgk%2BBpwdeWgYzY0B%2BvDt1qPW1K46mFbm1h31buFhaUqZEgAL5O%2B5qgKsxbC42fPPrBzW5WYZ2GFlffeRp%2F9jxFJFFzl9VIsGKu54IiMDbhnsfyimVsPrlXQ8UQUB87YynOF44g7zthqaZT93QqDDCSPIxe9Uin2sxwWzU2LDCUoRNAVhtIW6m7uAj5c1RiXlPQ2l3CJLdGkktCVxHWaTGOUTVIOYDHX1xQetU%2Frg1JRlVOAAuGfjPR8AXOZGKQZrxj%2BpmQkp2keqFK6lQA565OoDFgPJzxX3SEuAJctEduccVqp8NDL7jcrkrpI7ZX%2BzlUIraPTgXHMzmniPSlxDSxOGGzIqwr5Q82legvTy6fzNfp1xC35vFO6CMgIY6ENoslox03bFhY7BV268NJOX2eUHAEHvBi7d9Ud2Dn8BdznWGTNsFIJjzMp0eakw1%2FnGZsRyxqzP%2BWVNKcSk2mdRuZuDJrYgC7IMXmrMqm%2BX2VLxZ9tJdjjf6Bty73SoiYoSMcKPfZbof4ZpOhpvPciznjxNVKQVyRkqRUMgQoL6WTmoOwcp999CX%2F0S4ru8L5efW05GEyyUG7CTXXggtQwxz6l%2BnhukwMLyI3sAGOqUB2TxNAQKOfwvgT8FPidX4wKsxO1AR5kWBJ9mMwQc%2FZGjtf1hn5nQA%2F5IwSxDsDw0doHhN1O4ZGi9SvW%2FTgzOqxUGFdxLNmOBq5afF86uzTCBkb1UoIX8O%2FANun9Y7llOvumjXx1vJX9ynrjjlk7V02SYKb%2ByAGC%2FTJltkQe1zu9cOitPFxVgmsCX40JiJnneAhX%2FiU4%2BdO9JhFM01sbhJdhokql6%2F&X-Amz-Signature=5437c87a7abe770916a813e076e1db9b130a155f8d08a27cb6f175e1e365420a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
