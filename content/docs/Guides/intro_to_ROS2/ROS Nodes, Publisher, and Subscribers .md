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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVDNILNS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHqo4DaJWN%2B7e5GAROWyPOPcwGpHlb4D%2FE5Rgo33tZNQIgfxyh4Uf%2F44YVJyuKVUxWKrwQFoBK5niAPOr3CPesY9wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FnCOzcFB3zBgzxvircA0M9T2NATdXhXqxTvGATwSwP639Zcn2h6zdzHnqnWTPQA%2BK7NTCnHw358OjlWzTgssC%2BW427ryC9SeBsicTVg71iLWhbBIo%2Fpjko1VWqsPofSXFOajbaxuRvETdwAQE6zEhDR3miNRPEVZz7vO%2Bmrku9T3RXkaT62NvG65YoqyWWuLakkGQTsX7%2Bw8hFJrUt965CuGeaAxSTyw1K7H0BqXUk1NBtpWwCKxR%2Fg9wznyXDM7Y9h6Mxh4YtQKVSD9dMyloShpFW1V3iUCyNQO7vys3mvhSkT55xPwS2PAlZRRIN4JctRGtyRBhgTMveLBul%2Fy2u2uNxI0nl16hVkEf3WR5%2Fb7YH1JXQ%2B9bVTGUnALMzUdX2uHDBd96FhxBoWi1sHpRRFsmefIKxDrRUNvAY%2BCuGZ%2BfgMcRaCblZrdC2G7CRGvSbUB0l7X8h7e23vXplVxjCx7lOWqjl9G3lYTysCZyXehcMjxeUciG52hgj7UnKxaAXXifxxWlnVx3EcNYGhEOIY9Z2n7VTbRy36Bb3Ttq72AKxbIiBktrGi4eCfMSLGAALOAFxPTqm1tamU94r1gHMFpnVq1KEHYl6mIYqKcUEIRUYYuBvY53boWYxDTgx%2FmoezYvTZcM4ntJYMN7z%2Fr4GOqUByhp4dnEocnN9SM7LotJTlsW4xomJDkgzeCyJY178q6IeXz3o3ufJiJcNNnxKwo1C%2BsOKwA6pq6lchEQSUK7UJ5AMicH26yZD9CVfZ2jkn5JE%2FH4f5JwGPrXVDrhSYkCYubOGRj791pYKxF6jK5CR3rN5Ih%2Fe3Gqx5lxuSAdCX3hrqPTzOEl2EsjFyqPv8i%2B12kGp%2BIMI%2FLb%2F4aTAcT8St4UsNWZt&X-Amz-Signature=bd0f3bdbd3976cc262ed386d5a9dea078c44930f652898a5f5b1a5c799d0f72f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVDNILNS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHqo4DaJWN%2B7e5GAROWyPOPcwGpHlb4D%2FE5Rgo33tZNQIgfxyh4Uf%2F44YVJyuKVUxWKrwQFoBK5niAPOr3CPesY9wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FnCOzcFB3zBgzxvircA0M9T2NATdXhXqxTvGATwSwP639Zcn2h6zdzHnqnWTPQA%2BK7NTCnHw358OjlWzTgssC%2BW427ryC9SeBsicTVg71iLWhbBIo%2Fpjko1VWqsPofSXFOajbaxuRvETdwAQE6zEhDR3miNRPEVZz7vO%2Bmrku9T3RXkaT62NvG65YoqyWWuLakkGQTsX7%2Bw8hFJrUt965CuGeaAxSTyw1K7H0BqXUk1NBtpWwCKxR%2Fg9wznyXDM7Y9h6Mxh4YtQKVSD9dMyloShpFW1V3iUCyNQO7vys3mvhSkT55xPwS2PAlZRRIN4JctRGtyRBhgTMveLBul%2Fy2u2uNxI0nl16hVkEf3WR5%2Fb7YH1JXQ%2B9bVTGUnALMzUdX2uHDBd96FhxBoWi1sHpRRFsmefIKxDrRUNvAY%2BCuGZ%2BfgMcRaCblZrdC2G7CRGvSbUB0l7X8h7e23vXplVxjCx7lOWqjl9G3lYTysCZyXehcMjxeUciG52hgj7UnKxaAXXifxxWlnVx3EcNYGhEOIY9Z2n7VTbRy36Bb3Ttq72AKxbIiBktrGi4eCfMSLGAALOAFxPTqm1tamU94r1gHMFpnVq1KEHYl6mIYqKcUEIRUYYuBvY53boWYxDTgx%2FmoezYvTZcM4ntJYMN7z%2Fr4GOqUByhp4dnEocnN9SM7LotJTlsW4xomJDkgzeCyJY178q6IeXz3o3ufJiJcNNnxKwo1C%2BsOKwA6pq6lchEQSUK7UJ5AMicH26yZD9CVfZ2jkn5JE%2FH4f5JwGPrXVDrhSYkCYubOGRj791pYKxF6jK5CR3rN5Ih%2Fe3Gqx5lxuSAdCX3hrqPTzOEl2EsjFyqPv8i%2B12kGp%2BIMI%2FLb%2F4aTAcT8St4UsNWZt&X-Amz-Signature=9ab9275ee5bdeb454a3d8ea751a842d78b617a397c220637d08ce84947c9eff1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVDNILNS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHqo4DaJWN%2B7e5GAROWyPOPcwGpHlb4D%2FE5Rgo33tZNQIgfxyh4Uf%2F44YVJyuKVUxWKrwQFoBK5niAPOr3CPesY9wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FnCOzcFB3zBgzxvircA0M9T2NATdXhXqxTvGATwSwP639Zcn2h6zdzHnqnWTPQA%2BK7NTCnHw358OjlWzTgssC%2BW427ryC9SeBsicTVg71iLWhbBIo%2Fpjko1VWqsPofSXFOajbaxuRvETdwAQE6zEhDR3miNRPEVZz7vO%2Bmrku9T3RXkaT62NvG65YoqyWWuLakkGQTsX7%2Bw8hFJrUt965CuGeaAxSTyw1K7H0BqXUk1NBtpWwCKxR%2Fg9wznyXDM7Y9h6Mxh4YtQKVSD9dMyloShpFW1V3iUCyNQO7vys3mvhSkT55xPwS2PAlZRRIN4JctRGtyRBhgTMveLBul%2Fy2u2uNxI0nl16hVkEf3WR5%2Fb7YH1JXQ%2B9bVTGUnALMzUdX2uHDBd96FhxBoWi1sHpRRFsmefIKxDrRUNvAY%2BCuGZ%2BfgMcRaCblZrdC2G7CRGvSbUB0l7X8h7e23vXplVxjCx7lOWqjl9G3lYTysCZyXehcMjxeUciG52hgj7UnKxaAXXifxxWlnVx3EcNYGhEOIY9Z2n7VTbRy36Bb3Ttq72AKxbIiBktrGi4eCfMSLGAALOAFxPTqm1tamU94r1gHMFpnVq1KEHYl6mIYqKcUEIRUYYuBvY53boWYxDTgx%2FmoezYvTZcM4ntJYMN7z%2Fr4GOqUByhp4dnEocnN9SM7LotJTlsW4xomJDkgzeCyJY178q6IeXz3o3ufJiJcNNnxKwo1C%2BsOKwA6pq6lchEQSUK7UJ5AMicH26yZD9CVfZ2jkn5JE%2FH4f5JwGPrXVDrhSYkCYubOGRj791pYKxF6jK5CR3rN5Ih%2Fe3Gqx5lxuSAdCX3hrqPTzOEl2EsjFyqPv8i%2B12kGp%2BIMI%2FLb%2F4aTAcT8St4UsNWZt&X-Amz-Signature=01f389f1e559d58db1d55e0712189bc2089c78abd4fed4c2c38c3e55fbfe7924&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVDNILNS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHqo4DaJWN%2B7e5GAROWyPOPcwGpHlb4D%2FE5Rgo33tZNQIgfxyh4Uf%2F44YVJyuKVUxWKrwQFoBK5niAPOr3CPesY9wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FnCOzcFB3zBgzxvircA0M9T2NATdXhXqxTvGATwSwP639Zcn2h6zdzHnqnWTPQA%2BK7NTCnHw358OjlWzTgssC%2BW427ryC9SeBsicTVg71iLWhbBIo%2Fpjko1VWqsPofSXFOajbaxuRvETdwAQE6zEhDR3miNRPEVZz7vO%2Bmrku9T3RXkaT62NvG65YoqyWWuLakkGQTsX7%2Bw8hFJrUt965CuGeaAxSTyw1K7H0BqXUk1NBtpWwCKxR%2Fg9wznyXDM7Y9h6Mxh4YtQKVSD9dMyloShpFW1V3iUCyNQO7vys3mvhSkT55xPwS2PAlZRRIN4JctRGtyRBhgTMveLBul%2Fy2u2uNxI0nl16hVkEf3WR5%2Fb7YH1JXQ%2B9bVTGUnALMzUdX2uHDBd96FhxBoWi1sHpRRFsmefIKxDrRUNvAY%2BCuGZ%2BfgMcRaCblZrdC2G7CRGvSbUB0l7X8h7e23vXplVxjCx7lOWqjl9G3lYTysCZyXehcMjxeUciG52hgj7UnKxaAXXifxxWlnVx3EcNYGhEOIY9Z2n7VTbRy36Bb3Ttq72AKxbIiBktrGi4eCfMSLGAALOAFxPTqm1tamU94r1gHMFpnVq1KEHYl6mIYqKcUEIRUYYuBvY53boWYxDTgx%2FmoezYvTZcM4ntJYMN7z%2Fr4GOqUByhp4dnEocnN9SM7LotJTlsW4xomJDkgzeCyJY178q6IeXz3o3ufJiJcNNnxKwo1C%2BsOKwA6pq6lchEQSUK7UJ5AMicH26yZD9CVfZ2jkn5JE%2FH4f5JwGPrXVDrhSYkCYubOGRj791pYKxF6jK5CR3rN5Ih%2Fe3Gqx5lxuSAdCX3hrqPTzOEl2EsjFyqPv8i%2B12kGp%2BIMI%2FLb%2F4aTAcT8St4UsNWZt&X-Amz-Signature=c457497dfb47562cf107df9f611c6e005f7b76b14f1c21f908c535d3df082964&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVDNILNS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHqo4DaJWN%2B7e5GAROWyPOPcwGpHlb4D%2FE5Rgo33tZNQIgfxyh4Uf%2F44YVJyuKVUxWKrwQFoBK5niAPOr3CPesY9wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FnCOzcFB3zBgzxvircA0M9T2NATdXhXqxTvGATwSwP639Zcn2h6zdzHnqnWTPQA%2BK7NTCnHw358OjlWzTgssC%2BW427ryC9SeBsicTVg71iLWhbBIo%2Fpjko1VWqsPofSXFOajbaxuRvETdwAQE6zEhDR3miNRPEVZz7vO%2Bmrku9T3RXkaT62NvG65YoqyWWuLakkGQTsX7%2Bw8hFJrUt965CuGeaAxSTyw1K7H0BqXUk1NBtpWwCKxR%2Fg9wznyXDM7Y9h6Mxh4YtQKVSD9dMyloShpFW1V3iUCyNQO7vys3mvhSkT55xPwS2PAlZRRIN4JctRGtyRBhgTMveLBul%2Fy2u2uNxI0nl16hVkEf3WR5%2Fb7YH1JXQ%2B9bVTGUnALMzUdX2uHDBd96FhxBoWi1sHpRRFsmefIKxDrRUNvAY%2BCuGZ%2BfgMcRaCblZrdC2G7CRGvSbUB0l7X8h7e23vXplVxjCx7lOWqjl9G3lYTysCZyXehcMjxeUciG52hgj7UnKxaAXXifxxWlnVx3EcNYGhEOIY9Z2n7VTbRy36Bb3Ttq72AKxbIiBktrGi4eCfMSLGAALOAFxPTqm1tamU94r1gHMFpnVq1KEHYl6mIYqKcUEIRUYYuBvY53boWYxDTgx%2FmoezYvTZcM4ntJYMN7z%2Fr4GOqUByhp4dnEocnN9SM7LotJTlsW4xomJDkgzeCyJY178q6IeXz3o3ufJiJcNNnxKwo1C%2BsOKwA6pq6lchEQSUK7UJ5AMicH26yZD9CVfZ2jkn5JE%2FH4f5JwGPrXVDrhSYkCYubOGRj791pYKxF6jK5CR3rN5Ih%2Fe3Gqx5lxuSAdCX3hrqPTzOEl2EsjFyqPv8i%2B12kGp%2BIMI%2FLb%2F4aTAcT8St4UsNWZt&X-Amz-Signature=3b9dfa45ce0c36b0e014e9391ecf819507422f86a5aead5e1f5af0c4d25dd8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVDNILNS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHqo4DaJWN%2B7e5GAROWyPOPcwGpHlb4D%2FE5Rgo33tZNQIgfxyh4Uf%2F44YVJyuKVUxWKrwQFoBK5niAPOr3CPesY9wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FnCOzcFB3zBgzxvircA0M9T2NATdXhXqxTvGATwSwP639Zcn2h6zdzHnqnWTPQA%2BK7NTCnHw358OjlWzTgssC%2BW427ryC9SeBsicTVg71iLWhbBIo%2Fpjko1VWqsPofSXFOajbaxuRvETdwAQE6zEhDR3miNRPEVZz7vO%2Bmrku9T3RXkaT62NvG65YoqyWWuLakkGQTsX7%2Bw8hFJrUt965CuGeaAxSTyw1K7H0BqXUk1NBtpWwCKxR%2Fg9wznyXDM7Y9h6Mxh4YtQKVSD9dMyloShpFW1V3iUCyNQO7vys3mvhSkT55xPwS2PAlZRRIN4JctRGtyRBhgTMveLBul%2Fy2u2uNxI0nl16hVkEf3WR5%2Fb7YH1JXQ%2B9bVTGUnALMzUdX2uHDBd96FhxBoWi1sHpRRFsmefIKxDrRUNvAY%2BCuGZ%2BfgMcRaCblZrdC2G7CRGvSbUB0l7X8h7e23vXplVxjCx7lOWqjl9G3lYTysCZyXehcMjxeUciG52hgj7UnKxaAXXifxxWlnVx3EcNYGhEOIY9Z2n7VTbRy36Bb3Ttq72AKxbIiBktrGi4eCfMSLGAALOAFxPTqm1tamU94r1gHMFpnVq1KEHYl6mIYqKcUEIRUYYuBvY53boWYxDTgx%2FmoezYvTZcM4ntJYMN7z%2Fr4GOqUByhp4dnEocnN9SM7LotJTlsW4xomJDkgzeCyJY178q6IeXz3o3ufJiJcNNnxKwo1C%2BsOKwA6pq6lchEQSUK7UJ5AMicH26yZD9CVfZ2jkn5JE%2FH4f5JwGPrXVDrhSYkCYubOGRj791pYKxF6jK5CR3rN5Ih%2Fe3Gqx5lxuSAdCX3hrqPTzOEl2EsjFyqPv8i%2B12kGp%2BIMI%2FLb%2F4aTAcT8St4UsNWZt&X-Amz-Signature=9ceba7a886e76d5ca1dfb525cefce3961e7bac955f646cfa3abb7bc9cb0cff7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVDNILNS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHqo4DaJWN%2B7e5GAROWyPOPcwGpHlb4D%2FE5Rgo33tZNQIgfxyh4Uf%2F44YVJyuKVUxWKrwQFoBK5niAPOr3CPesY9wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FnCOzcFB3zBgzxvircA0M9T2NATdXhXqxTvGATwSwP639Zcn2h6zdzHnqnWTPQA%2BK7NTCnHw358OjlWzTgssC%2BW427ryC9SeBsicTVg71iLWhbBIo%2Fpjko1VWqsPofSXFOajbaxuRvETdwAQE6zEhDR3miNRPEVZz7vO%2Bmrku9T3RXkaT62NvG65YoqyWWuLakkGQTsX7%2Bw8hFJrUt965CuGeaAxSTyw1K7H0BqXUk1NBtpWwCKxR%2Fg9wznyXDM7Y9h6Mxh4YtQKVSD9dMyloShpFW1V3iUCyNQO7vys3mvhSkT55xPwS2PAlZRRIN4JctRGtyRBhgTMveLBul%2Fy2u2uNxI0nl16hVkEf3WR5%2Fb7YH1JXQ%2B9bVTGUnALMzUdX2uHDBd96FhxBoWi1sHpRRFsmefIKxDrRUNvAY%2BCuGZ%2BfgMcRaCblZrdC2G7CRGvSbUB0l7X8h7e23vXplVxjCx7lOWqjl9G3lYTysCZyXehcMjxeUciG52hgj7UnKxaAXXifxxWlnVx3EcNYGhEOIY9Z2n7VTbRy36Bb3Ttq72AKxbIiBktrGi4eCfMSLGAALOAFxPTqm1tamU94r1gHMFpnVq1KEHYl6mIYqKcUEIRUYYuBvY53boWYxDTgx%2FmoezYvTZcM4ntJYMN7z%2Fr4GOqUByhp4dnEocnN9SM7LotJTlsW4xomJDkgzeCyJY178q6IeXz3o3ufJiJcNNnxKwo1C%2BsOKwA6pq6lchEQSUK7UJ5AMicH26yZD9CVfZ2jkn5JE%2FH4f5JwGPrXVDrhSYkCYubOGRj791pYKxF6jK5CR3rN5Ih%2Fe3Gqx5lxuSAdCX3hrqPTzOEl2EsjFyqPv8i%2B12kGp%2BIMI%2FLb%2F4aTAcT8St4UsNWZt&X-Amz-Signature=4afaa2549210e6f2d5f8370d3cfb78c1d3e4d5264bf207d3f1a12eeec9456252&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVDNILNS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHqo4DaJWN%2B7e5GAROWyPOPcwGpHlb4D%2FE5Rgo33tZNQIgfxyh4Uf%2F44YVJyuKVUxWKrwQFoBK5niAPOr3CPesY9wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FnCOzcFB3zBgzxvircA0M9T2NATdXhXqxTvGATwSwP639Zcn2h6zdzHnqnWTPQA%2BK7NTCnHw358OjlWzTgssC%2BW427ryC9SeBsicTVg71iLWhbBIo%2Fpjko1VWqsPofSXFOajbaxuRvETdwAQE6zEhDR3miNRPEVZz7vO%2Bmrku9T3RXkaT62NvG65YoqyWWuLakkGQTsX7%2Bw8hFJrUt965CuGeaAxSTyw1K7H0BqXUk1NBtpWwCKxR%2Fg9wznyXDM7Y9h6Mxh4YtQKVSD9dMyloShpFW1V3iUCyNQO7vys3mvhSkT55xPwS2PAlZRRIN4JctRGtyRBhgTMveLBul%2Fy2u2uNxI0nl16hVkEf3WR5%2Fb7YH1JXQ%2B9bVTGUnALMzUdX2uHDBd96FhxBoWi1sHpRRFsmefIKxDrRUNvAY%2BCuGZ%2BfgMcRaCblZrdC2G7CRGvSbUB0l7X8h7e23vXplVxjCx7lOWqjl9G3lYTysCZyXehcMjxeUciG52hgj7UnKxaAXXifxxWlnVx3EcNYGhEOIY9Z2n7VTbRy36Bb3Ttq72AKxbIiBktrGi4eCfMSLGAALOAFxPTqm1tamU94r1gHMFpnVq1KEHYl6mIYqKcUEIRUYYuBvY53boWYxDTgx%2FmoezYvTZcM4ntJYMN7z%2Fr4GOqUByhp4dnEocnN9SM7LotJTlsW4xomJDkgzeCyJY178q6IeXz3o3ufJiJcNNnxKwo1C%2BsOKwA6pq6lchEQSUK7UJ5AMicH26yZD9CVfZ2jkn5JE%2FH4f5JwGPrXVDrhSYkCYubOGRj791pYKxF6jK5CR3rN5Ih%2Fe3Gqx5lxuSAdCX3hrqPTzOEl2EsjFyqPv8i%2B12kGp%2BIMI%2FLb%2F4aTAcT8St4UsNWZt&X-Amz-Signature=a81ef5f79c6fa3fba8705f98a92d45e1d2ab66b4fbffefc8e41839f9c8232110&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
