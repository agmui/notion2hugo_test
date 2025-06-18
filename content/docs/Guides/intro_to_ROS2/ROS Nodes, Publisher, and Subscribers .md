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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KU4IAI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHclVOKyyBOaberCQ9Lua%2B%2BwxMmDx6K6rng5GHmcEVAyAiEAiP1kHTtLpwFjuuE%2BklF0SFG7%2BEQ8jkja18EJ8LKqOjIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP6pIygMJ7o9DvwRyrcAzAFloyQRkKEP0rFx01aZttXPG%2FjEGa0aZldCASSXxskg%2FNcY3UXbV0aiJHMfdaUajNYjslwyEBhgJEBez2zJ1KjH43769hlPZjvNa1c7dH%2BxwqeTv%2BrXeIpwVf%2F4%2B9JeMqZKC3nS9qGlSDk0UrbAbyHY7xBkbUChecbsQItyyJKGDAG%2BdnTP0BZAwzcGRSSh9ouo%2B4YBUFXzY6iei3GMLrcAm02wFwvs%2BFkXV6rp%2BQSOl9P%2BopcO5QRTmHSZINAjSl%2FCwooCsMDdsXQ%2BhxDm4QNIwlesmBCzaFi2%2FJE%2FMs0BQdoYsMcgd3Ni2Jsr%2BnWYr4pz6Kv7QHdcsuSJlWcMsQ9NIKbWi8x8Zk36osoke2CnwQRqutygmV3k6BwaTWlIjQEPVhd5096u33%2BmICkhkXiVwR%2Bo7SOygFOSQOA2dTjTGYxYd92%2F%2F5Fx40%2Bzo4w2ZxfQvkC2oj1ka9k85xx4JBgkW%2F5AaSuB6AauPsHL9TeFQLmgFXrjWLJByzo4xT7h56P2Xso85UGxOXnXA0RsT50Nq4uGoO6b9saMdtUBG2oGCm46WbAZlaa54YDwGjkJ7OjzznfOOoMEcMAetAReesRO2q3zsW6EAxVDjFmXXGdfnHBHqpZHJNo4bOyMIWhyMIGOqUB2uc5F2RhCkvT1Hqe%2FZXFY4RMkC3BRU8gWlFZdJQJPAdnBizM6dLbFedAHms3UxuC3WCpepePlhmsl91wcsU5Eb9cOX2zOwJ7nnLfmoRhs99WNr6NIpH8CVDm5k0KR8Ca7RKuossU8JKn9GG7pzOW8vwdAiRk0KVj27ZaiDBJzuY25MID%2F%2Fax56%2FuLdv%2FTaeiYhXRc9tnNrvegp5ll%2FRt5qg0Q%2B%2B7&X-Amz-Signature=bee5ce064a965999b0502dee8e0a811ba1df96b862803962f397a97278dacbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KU4IAI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHclVOKyyBOaberCQ9Lua%2B%2BwxMmDx6K6rng5GHmcEVAyAiEAiP1kHTtLpwFjuuE%2BklF0SFG7%2BEQ8jkja18EJ8LKqOjIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP6pIygMJ7o9DvwRyrcAzAFloyQRkKEP0rFx01aZttXPG%2FjEGa0aZldCASSXxskg%2FNcY3UXbV0aiJHMfdaUajNYjslwyEBhgJEBez2zJ1KjH43769hlPZjvNa1c7dH%2BxwqeTv%2BrXeIpwVf%2F4%2B9JeMqZKC3nS9qGlSDk0UrbAbyHY7xBkbUChecbsQItyyJKGDAG%2BdnTP0BZAwzcGRSSh9ouo%2B4YBUFXzY6iei3GMLrcAm02wFwvs%2BFkXV6rp%2BQSOl9P%2BopcO5QRTmHSZINAjSl%2FCwooCsMDdsXQ%2BhxDm4QNIwlesmBCzaFi2%2FJE%2FMs0BQdoYsMcgd3Ni2Jsr%2BnWYr4pz6Kv7QHdcsuSJlWcMsQ9NIKbWi8x8Zk36osoke2CnwQRqutygmV3k6BwaTWlIjQEPVhd5096u33%2BmICkhkXiVwR%2Bo7SOygFOSQOA2dTjTGYxYd92%2F%2F5Fx40%2Bzo4w2ZxfQvkC2oj1ka9k85xx4JBgkW%2F5AaSuB6AauPsHL9TeFQLmgFXrjWLJByzo4xT7h56P2Xso85UGxOXnXA0RsT50Nq4uGoO6b9saMdtUBG2oGCm46WbAZlaa54YDwGjkJ7OjzznfOOoMEcMAetAReesRO2q3zsW6EAxVDjFmXXGdfnHBHqpZHJNo4bOyMIWhyMIGOqUB2uc5F2RhCkvT1Hqe%2FZXFY4RMkC3BRU8gWlFZdJQJPAdnBizM6dLbFedAHms3UxuC3WCpepePlhmsl91wcsU5Eb9cOX2zOwJ7nnLfmoRhs99WNr6NIpH8CVDm5k0KR8Ca7RKuossU8JKn9GG7pzOW8vwdAiRk0KVj27ZaiDBJzuY25MID%2F%2Fax56%2FuLdv%2FTaeiYhXRc9tnNrvegp5ll%2FRt5qg0Q%2B%2B7&X-Amz-Signature=714adff428640da6ac07bd3efb99484dfeafab6e05b611aafda73e32bea2d2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KU4IAI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHclVOKyyBOaberCQ9Lua%2B%2BwxMmDx6K6rng5GHmcEVAyAiEAiP1kHTtLpwFjuuE%2BklF0SFG7%2BEQ8jkja18EJ8LKqOjIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP6pIygMJ7o9DvwRyrcAzAFloyQRkKEP0rFx01aZttXPG%2FjEGa0aZldCASSXxskg%2FNcY3UXbV0aiJHMfdaUajNYjslwyEBhgJEBez2zJ1KjH43769hlPZjvNa1c7dH%2BxwqeTv%2BrXeIpwVf%2F4%2B9JeMqZKC3nS9qGlSDk0UrbAbyHY7xBkbUChecbsQItyyJKGDAG%2BdnTP0BZAwzcGRSSh9ouo%2B4YBUFXzY6iei3GMLrcAm02wFwvs%2BFkXV6rp%2BQSOl9P%2BopcO5QRTmHSZINAjSl%2FCwooCsMDdsXQ%2BhxDm4QNIwlesmBCzaFi2%2FJE%2FMs0BQdoYsMcgd3Ni2Jsr%2BnWYr4pz6Kv7QHdcsuSJlWcMsQ9NIKbWi8x8Zk36osoke2CnwQRqutygmV3k6BwaTWlIjQEPVhd5096u33%2BmICkhkXiVwR%2Bo7SOygFOSQOA2dTjTGYxYd92%2F%2F5Fx40%2Bzo4w2ZxfQvkC2oj1ka9k85xx4JBgkW%2F5AaSuB6AauPsHL9TeFQLmgFXrjWLJByzo4xT7h56P2Xso85UGxOXnXA0RsT50Nq4uGoO6b9saMdtUBG2oGCm46WbAZlaa54YDwGjkJ7OjzznfOOoMEcMAetAReesRO2q3zsW6EAxVDjFmXXGdfnHBHqpZHJNo4bOyMIWhyMIGOqUB2uc5F2RhCkvT1Hqe%2FZXFY4RMkC3BRU8gWlFZdJQJPAdnBizM6dLbFedAHms3UxuC3WCpepePlhmsl91wcsU5Eb9cOX2zOwJ7nnLfmoRhs99WNr6NIpH8CVDm5k0KR8Ca7RKuossU8JKn9GG7pzOW8vwdAiRk0KVj27ZaiDBJzuY25MID%2F%2Fax56%2FuLdv%2FTaeiYhXRc9tnNrvegp5ll%2FRt5qg0Q%2B%2B7&X-Amz-Signature=0cd7486c8551dc281ec599a5ae75335eb8aa567d8499b99f07a2ce45df267247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KU4IAI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHclVOKyyBOaberCQ9Lua%2B%2BwxMmDx6K6rng5GHmcEVAyAiEAiP1kHTtLpwFjuuE%2BklF0SFG7%2BEQ8jkja18EJ8LKqOjIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP6pIygMJ7o9DvwRyrcAzAFloyQRkKEP0rFx01aZttXPG%2FjEGa0aZldCASSXxskg%2FNcY3UXbV0aiJHMfdaUajNYjslwyEBhgJEBez2zJ1KjH43769hlPZjvNa1c7dH%2BxwqeTv%2BrXeIpwVf%2F4%2B9JeMqZKC3nS9qGlSDk0UrbAbyHY7xBkbUChecbsQItyyJKGDAG%2BdnTP0BZAwzcGRSSh9ouo%2B4YBUFXzY6iei3GMLrcAm02wFwvs%2BFkXV6rp%2BQSOl9P%2BopcO5QRTmHSZINAjSl%2FCwooCsMDdsXQ%2BhxDm4QNIwlesmBCzaFi2%2FJE%2FMs0BQdoYsMcgd3Ni2Jsr%2BnWYr4pz6Kv7QHdcsuSJlWcMsQ9NIKbWi8x8Zk36osoke2CnwQRqutygmV3k6BwaTWlIjQEPVhd5096u33%2BmICkhkXiVwR%2Bo7SOygFOSQOA2dTjTGYxYd92%2F%2F5Fx40%2Bzo4w2ZxfQvkC2oj1ka9k85xx4JBgkW%2F5AaSuB6AauPsHL9TeFQLmgFXrjWLJByzo4xT7h56P2Xso85UGxOXnXA0RsT50Nq4uGoO6b9saMdtUBG2oGCm46WbAZlaa54YDwGjkJ7OjzznfOOoMEcMAetAReesRO2q3zsW6EAxVDjFmXXGdfnHBHqpZHJNo4bOyMIWhyMIGOqUB2uc5F2RhCkvT1Hqe%2FZXFY4RMkC3BRU8gWlFZdJQJPAdnBizM6dLbFedAHms3UxuC3WCpepePlhmsl91wcsU5Eb9cOX2zOwJ7nnLfmoRhs99WNr6NIpH8CVDm5k0KR8Ca7RKuossU8JKn9GG7pzOW8vwdAiRk0KVj27ZaiDBJzuY25MID%2F%2Fax56%2FuLdv%2FTaeiYhXRc9tnNrvegp5ll%2FRt5qg0Q%2B%2B7&X-Amz-Signature=5d5c7f45493822ae9b9616f416a1d2854678a575672ca036152ee33acd9ad764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KU4IAI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHclVOKyyBOaberCQ9Lua%2B%2BwxMmDx6K6rng5GHmcEVAyAiEAiP1kHTtLpwFjuuE%2BklF0SFG7%2BEQ8jkja18EJ8LKqOjIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP6pIygMJ7o9DvwRyrcAzAFloyQRkKEP0rFx01aZttXPG%2FjEGa0aZldCASSXxskg%2FNcY3UXbV0aiJHMfdaUajNYjslwyEBhgJEBez2zJ1KjH43769hlPZjvNa1c7dH%2BxwqeTv%2BrXeIpwVf%2F4%2B9JeMqZKC3nS9qGlSDk0UrbAbyHY7xBkbUChecbsQItyyJKGDAG%2BdnTP0BZAwzcGRSSh9ouo%2B4YBUFXzY6iei3GMLrcAm02wFwvs%2BFkXV6rp%2BQSOl9P%2BopcO5QRTmHSZINAjSl%2FCwooCsMDdsXQ%2BhxDm4QNIwlesmBCzaFi2%2FJE%2FMs0BQdoYsMcgd3Ni2Jsr%2BnWYr4pz6Kv7QHdcsuSJlWcMsQ9NIKbWi8x8Zk36osoke2CnwQRqutygmV3k6BwaTWlIjQEPVhd5096u33%2BmICkhkXiVwR%2Bo7SOygFOSQOA2dTjTGYxYd92%2F%2F5Fx40%2Bzo4w2ZxfQvkC2oj1ka9k85xx4JBgkW%2F5AaSuB6AauPsHL9TeFQLmgFXrjWLJByzo4xT7h56P2Xso85UGxOXnXA0RsT50Nq4uGoO6b9saMdtUBG2oGCm46WbAZlaa54YDwGjkJ7OjzznfOOoMEcMAetAReesRO2q3zsW6EAxVDjFmXXGdfnHBHqpZHJNo4bOyMIWhyMIGOqUB2uc5F2RhCkvT1Hqe%2FZXFY4RMkC3BRU8gWlFZdJQJPAdnBizM6dLbFedAHms3UxuC3WCpepePlhmsl91wcsU5Eb9cOX2zOwJ7nnLfmoRhs99WNr6NIpH8CVDm5k0KR8Ca7RKuossU8JKn9GG7pzOW8vwdAiRk0KVj27ZaiDBJzuY25MID%2F%2Fax56%2FuLdv%2FTaeiYhXRc9tnNrvegp5ll%2FRt5qg0Q%2B%2B7&X-Amz-Signature=62be52d557dba6f7ce60ed9e2c94b574b50ac92ae8d2b38eb46b4bb4ac921753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KU4IAI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHclVOKyyBOaberCQ9Lua%2B%2BwxMmDx6K6rng5GHmcEVAyAiEAiP1kHTtLpwFjuuE%2BklF0SFG7%2BEQ8jkja18EJ8LKqOjIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP6pIygMJ7o9DvwRyrcAzAFloyQRkKEP0rFx01aZttXPG%2FjEGa0aZldCASSXxskg%2FNcY3UXbV0aiJHMfdaUajNYjslwyEBhgJEBez2zJ1KjH43769hlPZjvNa1c7dH%2BxwqeTv%2BrXeIpwVf%2F4%2B9JeMqZKC3nS9qGlSDk0UrbAbyHY7xBkbUChecbsQItyyJKGDAG%2BdnTP0BZAwzcGRSSh9ouo%2B4YBUFXzY6iei3GMLrcAm02wFwvs%2BFkXV6rp%2BQSOl9P%2BopcO5QRTmHSZINAjSl%2FCwooCsMDdsXQ%2BhxDm4QNIwlesmBCzaFi2%2FJE%2FMs0BQdoYsMcgd3Ni2Jsr%2BnWYr4pz6Kv7QHdcsuSJlWcMsQ9NIKbWi8x8Zk36osoke2CnwQRqutygmV3k6BwaTWlIjQEPVhd5096u33%2BmICkhkXiVwR%2Bo7SOygFOSQOA2dTjTGYxYd92%2F%2F5Fx40%2Bzo4w2ZxfQvkC2oj1ka9k85xx4JBgkW%2F5AaSuB6AauPsHL9TeFQLmgFXrjWLJByzo4xT7h56P2Xso85UGxOXnXA0RsT50Nq4uGoO6b9saMdtUBG2oGCm46WbAZlaa54YDwGjkJ7OjzznfOOoMEcMAetAReesRO2q3zsW6EAxVDjFmXXGdfnHBHqpZHJNo4bOyMIWhyMIGOqUB2uc5F2RhCkvT1Hqe%2FZXFY4RMkC3BRU8gWlFZdJQJPAdnBizM6dLbFedAHms3UxuC3WCpepePlhmsl91wcsU5Eb9cOX2zOwJ7nnLfmoRhs99WNr6NIpH8CVDm5k0KR8Ca7RKuossU8JKn9GG7pzOW8vwdAiRk0KVj27ZaiDBJzuY25MID%2F%2Fax56%2FuLdv%2FTaeiYhXRc9tnNrvegp5ll%2FRt5qg0Q%2B%2B7&X-Amz-Signature=06558e352eedf69dbc9bed9cc4c61d1d8cb0ae1a301e4248866268876c618d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KU4IAI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHclVOKyyBOaberCQ9Lua%2B%2BwxMmDx6K6rng5GHmcEVAyAiEAiP1kHTtLpwFjuuE%2BklF0SFG7%2BEQ8jkja18EJ8LKqOjIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP6pIygMJ7o9DvwRyrcAzAFloyQRkKEP0rFx01aZttXPG%2FjEGa0aZldCASSXxskg%2FNcY3UXbV0aiJHMfdaUajNYjslwyEBhgJEBez2zJ1KjH43769hlPZjvNa1c7dH%2BxwqeTv%2BrXeIpwVf%2F4%2B9JeMqZKC3nS9qGlSDk0UrbAbyHY7xBkbUChecbsQItyyJKGDAG%2BdnTP0BZAwzcGRSSh9ouo%2B4YBUFXzY6iei3GMLrcAm02wFwvs%2BFkXV6rp%2BQSOl9P%2BopcO5QRTmHSZINAjSl%2FCwooCsMDdsXQ%2BhxDm4QNIwlesmBCzaFi2%2FJE%2FMs0BQdoYsMcgd3Ni2Jsr%2BnWYr4pz6Kv7QHdcsuSJlWcMsQ9NIKbWi8x8Zk36osoke2CnwQRqutygmV3k6BwaTWlIjQEPVhd5096u33%2BmICkhkXiVwR%2Bo7SOygFOSQOA2dTjTGYxYd92%2F%2F5Fx40%2Bzo4w2ZxfQvkC2oj1ka9k85xx4JBgkW%2F5AaSuB6AauPsHL9TeFQLmgFXrjWLJByzo4xT7h56P2Xso85UGxOXnXA0RsT50Nq4uGoO6b9saMdtUBG2oGCm46WbAZlaa54YDwGjkJ7OjzznfOOoMEcMAetAReesRO2q3zsW6EAxVDjFmXXGdfnHBHqpZHJNo4bOyMIWhyMIGOqUB2uc5F2RhCkvT1Hqe%2FZXFY4RMkC3BRU8gWlFZdJQJPAdnBizM6dLbFedAHms3UxuC3WCpepePlhmsl91wcsU5Eb9cOX2zOwJ7nnLfmoRhs99WNr6NIpH8CVDm5k0KR8Ca7RKuossU8JKn9GG7pzOW8vwdAiRk0KVj27ZaiDBJzuY25MID%2F%2Fax56%2FuLdv%2FTaeiYhXRc9tnNrvegp5ll%2FRt5qg0Q%2B%2B7&X-Amz-Signature=5c310c49396bedf9605e4bc8e807e302909e6a787d9881470212fa336b45479d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KU4IAI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHclVOKyyBOaberCQ9Lua%2B%2BwxMmDx6K6rng5GHmcEVAyAiEAiP1kHTtLpwFjuuE%2BklF0SFG7%2BEQ8jkja18EJ8LKqOjIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP6pIygMJ7o9DvwRyrcAzAFloyQRkKEP0rFx01aZttXPG%2FjEGa0aZldCASSXxskg%2FNcY3UXbV0aiJHMfdaUajNYjslwyEBhgJEBez2zJ1KjH43769hlPZjvNa1c7dH%2BxwqeTv%2BrXeIpwVf%2F4%2B9JeMqZKC3nS9qGlSDk0UrbAbyHY7xBkbUChecbsQItyyJKGDAG%2BdnTP0BZAwzcGRSSh9ouo%2B4YBUFXzY6iei3GMLrcAm02wFwvs%2BFkXV6rp%2BQSOl9P%2BopcO5QRTmHSZINAjSl%2FCwooCsMDdsXQ%2BhxDm4QNIwlesmBCzaFi2%2FJE%2FMs0BQdoYsMcgd3Ni2Jsr%2BnWYr4pz6Kv7QHdcsuSJlWcMsQ9NIKbWi8x8Zk36osoke2CnwQRqutygmV3k6BwaTWlIjQEPVhd5096u33%2BmICkhkXiVwR%2Bo7SOygFOSQOA2dTjTGYxYd92%2F%2F5Fx40%2Bzo4w2ZxfQvkC2oj1ka9k85xx4JBgkW%2F5AaSuB6AauPsHL9TeFQLmgFXrjWLJByzo4xT7h56P2Xso85UGxOXnXA0RsT50Nq4uGoO6b9saMdtUBG2oGCm46WbAZlaa54YDwGjkJ7OjzznfOOoMEcMAetAReesRO2q3zsW6EAxVDjFmXXGdfnHBHqpZHJNo4bOyMIWhyMIGOqUB2uc5F2RhCkvT1Hqe%2FZXFY4RMkC3BRU8gWlFZdJQJPAdnBizM6dLbFedAHms3UxuC3WCpepePlhmsl91wcsU5Eb9cOX2zOwJ7nnLfmoRhs99WNr6NIpH8CVDm5k0KR8Ca7RKuossU8JKn9GG7pzOW8vwdAiRk0KVj27ZaiDBJzuY25MID%2F%2Fax56%2FuLdv%2FTaeiYhXRc9tnNrvegp5ll%2FRt5qg0Q%2B%2B7&X-Amz-Signature=580b92355e3f4a79a568ef60219ec5c8987fb1e48858df63b74427c6d851ae59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
