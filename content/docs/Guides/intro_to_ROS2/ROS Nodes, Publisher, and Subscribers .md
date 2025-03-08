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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BY7N4Y%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUeTx%2Fc8NHWvASCf5QX%2B%2BPrxWffeaICF3uz43kxYqUGAiEA7wUMLjingMtm%2Fty7JCMWq%2FlWUXXYcAaICzntPLPx%2F5kq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWKfTdgAY%2FFdZlH5ircA7oB7nodXP1qbOB5oX4HHWhDltQ1NJENU40MoirtXHvzHa%2BpnVU9PsOyYrxpl7NtAKO0YWDDCAhEXJ1pUyOQSLYTAdfmdn4KDg9UCZczDVumCypLk5LDNOoQAP1QiUQVB8xZw4UDedbLX3A2SSMKwuKPdblSr6v6cB5O3pYjMnwJj76azGFRp3z%2FKxwe%2BM6hxTFBdmUYynBkxXjwPs6QoN4%2BDQFbENpBlaeBWthBV4%2FCUa2v08pQZT2NblIUA8qpiJ6CCt8CbVQ6fv9nfo5tIzG5uP3IquIjsB91y6apBun7smGkmV%2FTNL5wrSgS5iUdH%2BQWEKjqF17h2Aqd1r4roHY7E2GTGhmLOnrSj2lpGN4f8BtZsUqvezTVmVQtaUOecUIxY6Q90dE3D8dRTcJ8zwU%2FST6LHqv4tSbdUDbHh%2FRkj0cWTRdhXOrjRzbMDeJyFRTue60yRrDiiJg3%2BLNbrBperkxtUTHD8Ij0hnhmMNTlsKDwo%2FzPR%2Bv3K9%2BZq06%2BwlDHaVvIfPtkYTc582WVrRuI0juu%2BE7d1fIXJrK6jT7FmwMkzdn7KqYEazu8FZHLjWhOkZeTpMRhtbdUC7gszUV%2F4i2cLmGQzUX388ZFhtiYeu6zUUY9rbhOmXwvMI3drr4GOqUB4uoeXZUzyO1YnmzvwPUTtaOplXEHmfsuHxMQ%2FZiPzYqdSx9h4a%2FKHmXpwcsq3pU3lh4c3gymCJSwXxnLDD1c4pNgmDVWcnT6Xfz79T1lWje9g6LZs4H0As0bU1WcZVJh4zkVbcrmaGT0IwrtrhOK3qJSp2LFjeUAfhZpDZlu9xXa%2Bsm%2BXeXNhLE2nDh%2FVDSztkZMoIR3CNEN2hJaq%2FTe0XTyykwm&X-Amz-Signature=14045366eedb72f35faa98b08e562829521cf576a49b4328ce7e3cf5cd320227&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BY7N4Y%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUeTx%2Fc8NHWvASCf5QX%2B%2BPrxWffeaICF3uz43kxYqUGAiEA7wUMLjingMtm%2Fty7JCMWq%2FlWUXXYcAaICzntPLPx%2F5kq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWKfTdgAY%2FFdZlH5ircA7oB7nodXP1qbOB5oX4HHWhDltQ1NJENU40MoirtXHvzHa%2BpnVU9PsOyYrxpl7NtAKO0YWDDCAhEXJ1pUyOQSLYTAdfmdn4KDg9UCZczDVumCypLk5LDNOoQAP1QiUQVB8xZw4UDedbLX3A2SSMKwuKPdblSr6v6cB5O3pYjMnwJj76azGFRp3z%2FKxwe%2BM6hxTFBdmUYynBkxXjwPs6QoN4%2BDQFbENpBlaeBWthBV4%2FCUa2v08pQZT2NblIUA8qpiJ6CCt8CbVQ6fv9nfo5tIzG5uP3IquIjsB91y6apBun7smGkmV%2FTNL5wrSgS5iUdH%2BQWEKjqF17h2Aqd1r4roHY7E2GTGhmLOnrSj2lpGN4f8BtZsUqvezTVmVQtaUOecUIxY6Q90dE3D8dRTcJ8zwU%2FST6LHqv4tSbdUDbHh%2FRkj0cWTRdhXOrjRzbMDeJyFRTue60yRrDiiJg3%2BLNbrBperkxtUTHD8Ij0hnhmMNTlsKDwo%2FzPR%2Bv3K9%2BZq06%2BwlDHaVvIfPtkYTc582WVrRuI0juu%2BE7d1fIXJrK6jT7FmwMkzdn7KqYEazu8FZHLjWhOkZeTpMRhtbdUC7gszUV%2F4i2cLmGQzUX388ZFhtiYeu6zUUY9rbhOmXwvMI3drr4GOqUB4uoeXZUzyO1YnmzvwPUTtaOplXEHmfsuHxMQ%2FZiPzYqdSx9h4a%2FKHmXpwcsq3pU3lh4c3gymCJSwXxnLDD1c4pNgmDVWcnT6Xfz79T1lWje9g6LZs4H0As0bU1WcZVJh4zkVbcrmaGT0IwrtrhOK3qJSp2LFjeUAfhZpDZlu9xXa%2Bsm%2BXeXNhLE2nDh%2FVDSztkZMoIR3CNEN2hJaq%2FTe0XTyykwm&X-Amz-Signature=617c28f94602eade0f0338bc52269e8ca7f3cbc0ebdc4f326fdc3240e190170c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BY7N4Y%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUeTx%2Fc8NHWvASCf5QX%2B%2BPrxWffeaICF3uz43kxYqUGAiEA7wUMLjingMtm%2Fty7JCMWq%2FlWUXXYcAaICzntPLPx%2F5kq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWKfTdgAY%2FFdZlH5ircA7oB7nodXP1qbOB5oX4HHWhDltQ1NJENU40MoirtXHvzHa%2BpnVU9PsOyYrxpl7NtAKO0YWDDCAhEXJ1pUyOQSLYTAdfmdn4KDg9UCZczDVumCypLk5LDNOoQAP1QiUQVB8xZw4UDedbLX3A2SSMKwuKPdblSr6v6cB5O3pYjMnwJj76azGFRp3z%2FKxwe%2BM6hxTFBdmUYynBkxXjwPs6QoN4%2BDQFbENpBlaeBWthBV4%2FCUa2v08pQZT2NblIUA8qpiJ6CCt8CbVQ6fv9nfo5tIzG5uP3IquIjsB91y6apBun7smGkmV%2FTNL5wrSgS5iUdH%2BQWEKjqF17h2Aqd1r4roHY7E2GTGhmLOnrSj2lpGN4f8BtZsUqvezTVmVQtaUOecUIxY6Q90dE3D8dRTcJ8zwU%2FST6LHqv4tSbdUDbHh%2FRkj0cWTRdhXOrjRzbMDeJyFRTue60yRrDiiJg3%2BLNbrBperkxtUTHD8Ij0hnhmMNTlsKDwo%2FzPR%2Bv3K9%2BZq06%2BwlDHaVvIfPtkYTc582WVrRuI0juu%2BE7d1fIXJrK6jT7FmwMkzdn7KqYEazu8FZHLjWhOkZeTpMRhtbdUC7gszUV%2F4i2cLmGQzUX388ZFhtiYeu6zUUY9rbhOmXwvMI3drr4GOqUB4uoeXZUzyO1YnmzvwPUTtaOplXEHmfsuHxMQ%2FZiPzYqdSx9h4a%2FKHmXpwcsq3pU3lh4c3gymCJSwXxnLDD1c4pNgmDVWcnT6Xfz79T1lWje9g6LZs4H0As0bU1WcZVJh4zkVbcrmaGT0IwrtrhOK3qJSp2LFjeUAfhZpDZlu9xXa%2Bsm%2BXeXNhLE2nDh%2FVDSztkZMoIR3CNEN2hJaq%2FTe0XTyykwm&X-Amz-Signature=41451f3b4c8194de1c901cfe30236ada5473627c864b23d237615b08fdaff4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BY7N4Y%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUeTx%2Fc8NHWvASCf5QX%2B%2BPrxWffeaICF3uz43kxYqUGAiEA7wUMLjingMtm%2Fty7JCMWq%2FlWUXXYcAaICzntPLPx%2F5kq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWKfTdgAY%2FFdZlH5ircA7oB7nodXP1qbOB5oX4HHWhDltQ1NJENU40MoirtXHvzHa%2BpnVU9PsOyYrxpl7NtAKO0YWDDCAhEXJ1pUyOQSLYTAdfmdn4KDg9UCZczDVumCypLk5LDNOoQAP1QiUQVB8xZw4UDedbLX3A2SSMKwuKPdblSr6v6cB5O3pYjMnwJj76azGFRp3z%2FKxwe%2BM6hxTFBdmUYynBkxXjwPs6QoN4%2BDQFbENpBlaeBWthBV4%2FCUa2v08pQZT2NblIUA8qpiJ6CCt8CbVQ6fv9nfo5tIzG5uP3IquIjsB91y6apBun7smGkmV%2FTNL5wrSgS5iUdH%2BQWEKjqF17h2Aqd1r4roHY7E2GTGhmLOnrSj2lpGN4f8BtZsUqvezTVmVQtaUOecUIxY6Q90dE3D8dRTcJ8zwU%2FST6LHqv4tSbdUDbHh%2FRkj0cWTRdhXOrjRzbMDeJyFRTue60yRrDiiJg3%2BLNbrBperkxtUTHD8Ij0hnhmMNTlsKDwo%2FzPR%2Bv3K9%2BZq06%2BwlDHaVvIfPtkYTc582WVrRuI0juu%2BE7d1fIXJrK6jT7FmwMkzdn7KqYEazu8FZHLjWhOkZeTpMRhtbdUC7gszUV%2F4i2cLmGQzUX388ZFhtiYeu6zUUY9rbhOmXwvMI3drr4GOqUB4uoeXZUzyO1YnmzvwPUTtaOplXEHmfsuHxMQ%2FZiPzYqdSx9h4a%2FKHmXpwcsq3pU3lh4c3gymCJSwXxnLDD1c4pNgmDVWcnT6Xfz79T1lWje9g6LZs4H0As0bU1WcZVJh4zkVbcrmaGT0IwrtrhOK3qJSp2LFjeUAfhZpDZlu9xXa%2Bsm%2BXeXNhLE2nDh%2FVDSztkZMoIR3CNEN2hJaq%2FTe0XTyykwm&X-Amz-Signature=a56a644c8c758ccf443c0501a7909ed86fc5f4fff5751f3f0b2f83eb9e5c466a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BY7N4Y%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUeTx%2Fc8NHWvASCf5QX%2B%2BPrxWffeaICF3uz43kxYqUGAiEA7wUMLjingMtm%2Fty7JCMWq%2FlWUXXYcAaICzntPLPx%2F5kq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWKfTdgAY%2FFdZlH5ircA7oB7nodXP1qbOB5oX4HHWhDltQ1NJENU40MoirtXHvzHa%2BpnVU9PsOyYrxpl7NtAKO0YWDDCAhEXJ1pUyOQSLYTAdfmdn4KDg9UCZczDVumCypLk5LDNOoQAP1QiUQVB8xZw4UDedbLX3A2SSMKwuKPdblSr6v6cB5O3pYjMnwJj76azGFRp3z%2FKxwe%2BM6hxTFBdmUYynBkxXjwPs6QoN4%2BDQFbENpBlaeBWthBV4%2FCUa2v08pQZT2NblIUA8qpiJ6CCt8CbVQ6fv9nfo5tIzG5uP3IquIjsB91y6apBun7smGkmV%2FTNL5wrSgS5iUdH%2BQWEKjqF17h2Aqd1r4roHY7E2GTGhmLOnrSj2lpGN4f8BtZsUqvezTVmVQtaUOecUIxY6Q90dE3D8dRTcJ8zwU%2FST6LHqv4tSbdUDbHh%2FRkj0cWTRdhXOrjRzbMDeJyFRTue60yRrDiiJg3%2BLNbrBperkxtUTHD8Ij0hnhmMNTlsKDwo%2FzPR%2Bv3K9%2BZq06%2BwlDHaVvIfPtkYTc582WVrRuI0juu%2BE7d1fIXJrK6jT7FmwMkzdn7KqYEazu8FZHLjWhOkZeTpMRhtbdUC7gszUV%2F4i2cLmGQzUX388ZFhtiYeu6zUUY9rbhOmXwvMI3drr4GOqUB4uoeXZUzyO1YnmzvwPUTtaOplXEHmfsuHxMQ%2FZiPzYqdSx9h4a%2FKHmXpwcsq3pU3lh4c3gymCJSwXxnLDD1c4pNgmDVWcnT6Xfz79T1lWje9g6LZs4H0As0bU1WcZVJh4zkVbcrmaGT0IwrtrhOK3qJSp2LFjeUAfhZpDZlu9xXa%2Bsm%2BXeXNhLE2nDh%2FVDSztkZMoIR3CNEN2hJaq%2FTe0XTyykwm&X-Amz-Signature=4de22581748eaaf4a22466381ba319125988c507193a338afa5e650b6498a287&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BY7N4Y%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUeTx%2Fc8NHWvASCf5QX%2B%2BPrxWffeaICF3uz43kxYqUGAiEA7wUMLjingMtm%2Fty7JCMWq%2FlWUXXYcAaICzntPLPx%2F5kq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWKfTdgAY%2FFdZlH5ircA7oB7nodXP1qbOB5oX4HHWhDltQ1NJENU40MoirtXHvzHa%2BpnVU9PsOyYrxpl7NtAKO0YWDDCAhEXJ1pUyOQSLYTAdfmdn4KDg9UCZczDVumCypLk5LDNOoQAP1QiUQVB8xZw4UDedbLX3A2SSMKwuKPdblSr6v6cB5O3pYjMnwJj76azGFRp3z%2FKxwe%2BM6hxTFBdmUYynBkxXjwPs6QoN4%2BDQFbENpBlaeBWthBV4%2FCUa2v08pQZT2NblIUA8qpiJ6CCt8CbVQ6fv9nfo5tIzG5uP3IquIjsB91y6apBun7smGkmV%2FTNL5wrSgS5iUdH%2BQWEKjqF17h2Aqd1r4roHY7E2GTGhmLOnrSj2lpGN4f8BtZsUqvezTVmVQtaUOecUIxY6Q90dE3D8dRTcJ8zwU%2FST6LHqv4tSbdUDbHh%2FRkj0cWTRdhXOrjRzbMDeJyFRTue60yRrDiiJg3%2BLNbrBperkxtUTHD8Ij0hnhmMNTlsKDwo%2FzPR%2Bv3K9%2BZq06%2BwlDHaVvIfPtkYTc582WVrRuI0juu%2BE7d1fIXJrK6jT7FmwMkzdn7KqYEazu8FZHLjWhOkZeTpMRhtbdUC7gszUV%2F4i2cLmGQzUX388ZFhtiYeu6zUUY9rbhOmXwvMI3drr4GOqUB4uoeXZUzyO1YnmzvwPUTtaOplXEHmfsuHxMQ%2FZiPzYqdSx9h4a%2FKHmXpwcsq3pU3lh4c3gymCJSwXxnLDD1c4pNgmDVWcnT6Xfz79T1lWje9g6LZs4H0As0bU1WcZVJh4zkVbcrmaGT0IwrtrhOK3qJSp2LFjeUAfhZpDZlu9xXa%2Bsm%2BXeXNhLE2nDh%2FVDSztkZMoIR3CNEN2hJaq%2FTe0XTyykwm&X-Amz-Signature=57ee604cb53433e8a20f5bafe7f63a5a6198d79db72cba83dcd1607a5d5b4efa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BY7N4Y%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUeTx%2Fc8NHWvASCf5QX%2B%2BPrxWffeaICF3uz43kxYqUGAiEA7wUMLjingMtm%2Fty7JCMWq%2FlWUXXYcAaICzntPLPx%2F5kq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWKfTdgAY%2FFdZlH5ircA7oB7nodXP1qbOB5oX4HHWhDltQ1NJENU40MoirtXHvzHa%2BpnVU9PsOyYrxpl7NtAKO0YWDDCAhEXJ1pUyOQSLYTAdfmdn4KDg9UCZczDVumCypLk5LDNOoQAP1QiUQVB8xZw4UDedbLX3A2SSMKwuKPdblSr6v6cB5O3pYjMnwJj76azGFRp3z%2FKxwe%2BM6hxTFBdmUYynBkxXjwPs6QoN4%2BDQFbENpBlaeBWthBV4%2FCUa2v08pQZT2NblIUA8qpiJ6CCt8CbVQ6fv9nfo5tIzG5uP3IquIjsB91y6apBun7smGkmV%2FTNL5wrSgS5iUdH%2BQWEKjqF17h2Aqd1r4roHY7E2GTGhmLOnrSj2lpGN4f8BtZsUqvezTVmVQtaUOecUIxY6Q90dE3D8dRTcJ8zwU%2FST6LHqv4tSbdUDbHh%2FRkj0cWTRdhXOrjRzbMDeJyFRTue60yRrDiiJg3%2BLNbrBperkxtUTHD8Ij0hnhmMNTlsKDwo%2FzPR%2Bv3K9%2BZq06%2BwlDHaVvIfPtkYTc582WVrRuI0juu%2BE7d1fIXJrK6jT7FmwMkzdn7KqYEazu8FZHLjWhOkZeTpMRhtbdUC7gszUV%2F4i2cLmGQzUX388ZFhtiYeu6zUUY9rbhOmXwvMI3drr4GOqUB4uoeXZUzyO1YnmzvwPUTtaOplXEHmfsuHxMQ%2FZiPzYqdSx9h4a%2FKHmXpwcsq3pU3lh4c3gymCJSwXxnLDD1c4pNgmDVWcnT6Xfz79T1lWje9g6LZs4H0As0bU1WcZVJh4zkVbcrmaGT0IwrtrhOK3qJSp2LFjeUAfhZpDZlu9xXa%2Bsm%2BXeXNhLE2nDh%2FVDSztkZMoIR3CNEN2hJaq%2FTe0XTyykwm&X-Amz-Signature=8525157a2973908ff2395c9f4fb708b7486e69d380af390ad7067f9768880f75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BY7N4Y%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUeTx%2Fc8NHWvASCf5QX%2B%2BPrxWffeaICF3uz43kxYqUGAiEA7wUMLjingMtm%2Fty7JCMWq%2FlWUXXYcAaICzntPLPx%2F5kq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWKfTdgAY%2FFdZlH5ircA7oB7nodXP1qbOB5oX4HHWhDltQ1NJENU40MoirtXHvzHa%2BpnVU9PsOyYrxpl7NtAKO0YWDDCAhEXJ1pUyOQSLYTAdfmdn4KDg9UCZczDVumCypLk5LDNOoQAP1QiUQVB8xZw4UDedbLX3A2SSMKwuKPdblSr6v6cB5O3pYjMnwJj76azGFRp3z%2FKxwe%2BM6hxTFBdmUYynBkxXjwPs6QoN4%2BDQFbENpBlaeBWthBV4%2FCUa2v08pQZT2NblIUA8qpiJ6CCt8CbVQ6fv9nfo5tIzG5uP3IquIjsB91y6apBun7smGkmV%2FTNL5wrSgS5iUdH%2BQWEKjqF17h2Aqd1r4roHY7E2GTGhmLOnrSj2lpGN4f8BtZsUqvezTVmVQtaUOecUIxY6Q90dE3D8dRTcJ8zwU%2FST6LHqv4tSbdUDbHh%2FRkj0cWTRdhXOrjRzbMDeJyFRTue60yRrDiiJg3%2BLNbrBperkxtUTHD8Ij0hnhmMNTlsKDwo%2FzPR%2Bv3K9%2BZq06%2BwlDHaVvIfPtkYTc582WVrRuI0juu%2BE7d1fIXJrK6jT7FmwMkzdn7KqYEazu8FZHLjWhOkZeTpMRhtbdUC7gszUV%2F4i2cLmGQzUX388ZFhtiYeu6zUUY9rbhOmXwvMI3drr4GOqUB4uoeXZUzyO1YnmzvwPUTtaOplXEHmfsuHxMQ%2FZiPzYqdSx9h4a%2FKHmXpwcsq3pU3lh4c3gymCJSwXxnLDD1c4pNgmDVWcnT6Xfz79T1lWje9g6LZs4H0As0bU1WcZVJh4zkVbcrmaGT0IwrtrhOK3qJSp2LFjeUAfhZpDZlu9xXa%2Bsm%2BXeXNhLE2nDh%2FVDSztkZMoIR3CNEN2hJaq%2FTe0XTyykwm&X-Amz-Signature=c012e12183ec8aa51704dce22909853d1ce5b11394df6ff72e3fb0549e3a953a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
