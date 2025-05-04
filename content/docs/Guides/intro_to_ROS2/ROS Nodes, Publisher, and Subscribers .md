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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIFRMK5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNEmnAO9807XzmLKZ0%2FolqLySpXt5bqHnQyt5LmMbesAIgS2%2BR4HRMYW7Kk3rqL2GfjsHK1YbuV3qhdonvZkzQW5oq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBsT6Pusb4oQ5eIxIyrcA8xB%2Fog0wHIS7f7DIfK7QZJKV6uw83ik0aMW0eP0wtrvn0eSvuAmKAlDOQpv%2Bo%2FYMtqBKJT%2Fui%2BCVEFPxf8ceakEhzX8xgHgwZWAvzb3KJY%2Bq0AHDVfLkRsepzyip7mxlWYdDqtuvQ20McaZA6jz7j0%2FIrnTRNbhpxuRgYbnvZlFPvWB2aFGC%2BLA0o6NcPp6jLbN%2FLfKxBGlXoVVgrEJFdy1TC9NN4QNkNZoYUIPWSDuBYU433VqYh2g35gv2I6SQTmXAV66ruSwYzIS7HaGucAsrF20P4bZopf7FALEk6mcq0G1pp%2FtuoQkCbPSDLFHk1DXqDp38sJNoVj%2Fe26cJIf7HfPBc66NQ1YTalojF7I0pQPw3KTcCjsLOYJzGxx0hxh8X4ojoXe%2Fz9nMZZBjkAg5mvfeQhLErb5VyeLhM%2BOPw7r27Yih88QAsb0t%2FKeDNlPgL7V0GKD%2FLDOYXncY5KYOEZVliKcZKl%2Bml%2BdXqO%2B%2FSiBnGzbnH9Q11CVhXWdU3v%2BbSVR0SMJFPb%2Bow0UIshRVaZarxoz%2B2zMtjClV6%2BwkVakD9NAxhNW%2FBRd47BM0KEvrRjaAs5kg%2BvLIl%2BNBU0gJSB2OoCO88KeD%2FOcOtqmnkNgcerxuE5mQZ3iuMOuD3cAGOqUBV5bl7%2BvgLKU47L86lNtL7Xim58BlklvhrwIawO5BLMNTm6Ym6cl1%2FSz4Jv3coB4lg3AZU6CIpm2DMXRXm86sDlT4zU0oH4GgpD51uD7pSgehBVX0SWa%2FRSm9%2B1fmQNP6m36xBjDF2A5ee6Qjz8ZBW8XQUhSOnJu3UL7iqc8Wr3GgarXo87CqXmo5VYGyx4I%2FZbM5DTkOAwuGXarWgifTj3EmnIGy&X-Amz-Signature=93227420b1796a908a00c7a4bb3a5b859235957c01d4550db98577e0619ccdce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIFRMK5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNEmnAO9807XzmLKZ0%2FolqLySpXt5bqHnQyt5LmMbesAIgS2%2BR4HRMYW7Kk3rqL2GfjsHK1YbuV3qhdonvZkzQW5oq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBsT6Pusb4oQ5eIxIyrcA8xB%2Fog0wHIS7f7DIfK7QZJKV6uw83ik0aMW0eP0wtrvn0eSvuAmKAlDOQpv%2Bo%2FYMtqBKJT%2Fui%2BCVEFPxf8ceakEhzX8xgHgwZWAvzb3KJY%2Bq0AHDVfLkRsepzyip7mxlWYdDqtuvQ20McaZA6jz7j0%2FIrnTRNbhpxuRgYbnvZlFPvWB2aFGC%2BLA0o6NcPp6jLbN%2FLfKxBGlXoVVgrEJFdy1TC9NN4QNkNZoYUIPWSDuBYU433VqYh2g35gv2I6SQTmXAV66ruSwYzIS7HaGucAsrF20P4bZopf7FALEk6mcq0G1pp%2FtuoQkCbPSDLFHk1DXqDp38sJNoVj%2Fe26cJIf7HfPBc66NQ1YTalojF7I0pQPw3KTcCjsLOYJzGxx0hxh8X4ojoXe%2Fz9nMZZBjkAg5mvfeQhLErb5VyeLhM%2BOPw7r27Yih88QAsb0t%2FKeDNlPgL7V0GKD%2FLDOYXncY5KYOEZVliKcZKl%2Bml%2BdXqO%2B%2FSiBnGzbnH9Q11CVhXWdU3v%2BbSVR0SMJFPb%2Bow0UIshRVaZarxoz%2B2zMtjClV6%2BwkVakD9NAxhNW%2FBRd47BM0KEvrRjaAs5kg%2BvLIl%2BNBU0gJSB2OoCO88KeD%2FOcOtqmnkNgcerxuE5mQZ3iuMOuD3cAGOqUBV5bl7%2BvgLKU47L86lNtL7Xim58BlklvhrwIawO5BLMNTm6Ym6cl1%2FSz4Jv3coB4lg3AZU6CIpm2DMXRXm86sDlT4zU0oH4GgpD51uD7pSgehBVX0SWa%2FRSm9%2B1fmQNP6m36xBjDF2A5ee6Qjz8ZBW8XQUhSOnJu3UL7iqc8Wr3GgarXo87CqXmo5VYGyx4I%2FZbM5DTkOAwuGXarWgifTj3EmnIGy&X-Amz-Signature=d5470646cdc73c5ed0a808e916b298e01068e8233471cdaca08239e975afa63c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIFRMK5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNEmnAO9807XzmLKZ0%2FolqLySpXt5bqHnQyt5LmMbesAIgS2%2BR4HRMYW7Kk3rqL2GfjsHK1YbuV3qhdonvZkzQW5oq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBsT6Pusb4oQ5eIxIyrcA8xB%2Fog0wHIS7f7DIfK7QZJKV6uw83ik0aMW0eP0wtrvn0eSvuAmKAlDOQpv%2Bo%2FYMtqBKJT%2Fui%2BCVEFPxf8ceakEhzX8xgHgwZWAvzb3KJY%2Bq0AHDVfLkRsepzyip7mxlWYdDqtuvQ20McaZA6jz7j0%2FIrnTRNbhpxuRgYbnvZlFPvWB2aFGC%2BLA0o6NcPp6jLbN%2FLfKxBGlXoVVgrEJFdy1TC9NN4QNkNZoYUIPWSDuBYU433VqYh2g35gv2I6SQTmXAV66ruSwYzIS7HaGucAsrF20P4bZopf7FALEk6mcq0G1pp%2FtuoQkCbPSDLFHk1DXqDp38sJNoVj%2Fe26cJIf7HfPBc66NQ1YTalojF7I0pQPw3KTcCjsLOYJzGxx0hxh8X4ojoXe%2Fz9nMZZBjkAg5mvfeQhLErb5VyeLhM%2BOPw7r27Yih88QAsb0t%2FKeDNlPgL7V0GKD%2FLDOYXncY5KYOEZVliKcZKl%2Bml%2BdXqO%2B%2FSiBnGzbnH9Q11CVhXWdU3v%2BbSVR0SMJFPb%2Bow0UIshRVaZarxoz%2B2zMtjClV6%2BwkVakD9NAxhNW%2FBRd47BM0KEvrRjaAs5kg%2BvLIl%2BNBU0gJSB2OoCO88KeD%2FOcOtqmnkNgcerxuE5mQZ3iuMOuD3cAGOqUBV5bl7%2BvgLKU47L86lNtL7Xim58BlklvhrwIawO5BLMNTm6Ym6cl1%2FSz4Jv3coB4lg3AZU6CIpm2DMXRXm86sDlT4zU0oH4GgpD51uD7pSgehBVX0SWa%2FRSm9%2B1fmQNP6m36xBjDF2A5ee6Qjz8ZBW8XQUhSOnJu3UL7iqc8Wr3GgarXo87CqXmo5VYGyx4I%2FZbM5DTkOAwuGXarWgifTj3EmnIGy&X-Amz-Signature=50460b07409c397a4be7883b2e252ccbe78af974c5643bf5428f1db2fc8252e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIFRMK5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNEmnAO9807XzmLKZ0%2FolqLySpXt5bqHnQyt5LmMbesAIgS2%2BR4HRMYW7Kk3rqL2GfjsHK1YbuV3qhdonvZkzQW5oq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBsT6Pusb4oQ5eIxIyrcA8xB%2Fog0wHIS7f7DIfK7QZJKV6uw83ik0aMW0eP0wtrvn0eSvuAmKAlDOQpv%2Bo%2FYMtqBKJT%2Fui%2BCVEFPxf8ceakEhzX8xgHgwZWAvzb3KJY%2Bq0AHDVfLkRsepzyip7mxlWYdDqtuvQ20McaZA6jz7j0%2FIrnTRNbhpxuRgYbnvZlFPvWB2aFGC%2BLA0o6NcPp6jLbN%2FLfKxBGlXoVVgrEJFdy1TC9NN4QNkNZoYUIPWSDuBYU433VqYh2g35gv2I6SQTmXAV66ruSwYzIS7HaGucAsrF20P4bZopf7FALEk6mcq0G1pp%2FtuoQkCbPSDLFHk1DXqDp38sJNoVj%2Fe26cJIf7HfPBc66NQ1YTalojF7I0pQPw3KTcCjsLOYJzGxx0hxh8X4ojoXe%2Fz9nMZZBjkAg5mvfeQhLErb5VyeLhM%2BOPw7r27Yih88QAsb0t%2FKeDNlPgL7V0GKD%2FLDOYXncY5KYOEZVliKcZKl%2Bml%2BdXqO%2B%2FSiBnGzbnH9Q11CVhXWdU3v%2BbSVR0SMJFPb%2Bow0UIshRVaZarxoz%2B2zMtjClV6%2BwkVakD9NAxhNW%2FBRd47BM0KEvrRjaAs5kg%2BvLIl%2BNBU0gJSB2OoCO88KeD%2FOcOtqmnkNgcerxuE5mQZ3iuMOuD3cAGOqUBV5bl7%2BvgLKU47L86lNtL7Xim58BlklvhrwIawO5BLMNTm6Ym6cl1%2FSz4Jv3coB4lg3AZU6CIpm2DMXRXm86sDlT4zU0oH4GgpD51uD7pSgehBVX0SWa%2FRSm9%2B1fmQNP6m36xBjDF2A5ee6Qjz8ZBW8XQUhSOnJu3UL7iqc8Wr3GgarXo87CqXmo5VYGyx4I%2FZbM5DTkOAwuGXarWgifTj3EmnIGy&X-Amz-Signature=9723d94583f74616d7c34308f532b4d61d12063c40548b37e9da7417d62559f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIFRMK5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNEmnAO9807XzmLKZ0%2FolqLySpXt5bqHnQyt5LmMbesAIgS2%2BR4HRMYW7Kk3rqL2GfjsHK1YbuV3qhdonvZkzQW5oq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBsT6Pusb4oQ5eIxIyrcA8xB%2Fog0wHIS7f7DIfK7QZJKV6uw83ik0aMW0eP0wtrvn0eSvuAmKAlDOQpv%2Bo%2FYMtqBKJT%2Fui%2BCVEFPxf8ceakEhzX8xgHgwZWAvzb3KJY%2Bq0AHDVfLkRsepzyip7mxlWYdDqtuvQ20McaZA6jz7j0%2FIrnTRNbhpxuRgYbnvZlFPvWB2aFGC%2BLA0o6NcPp6jLbN%2FLfKxBGlXoVVgrEJFdy1TC9NN4QNkNZoYUIPWSDuBYU433VqYh2g35gv2I6SQTmXAV66ruSwYzIS7HaGucAsrF20P4bZopf7FALEk6mcq0G1pp%2FtuoQkCbPSDLFHk1DXqDp38sJNoVj%2Fe26cJIf7HfPBc66NQ1YTalojF7I0pQPw3KTcCjsLOYJzGxx0hxh8X4ojoXe%2Fz9nMZZBjkAg5mvfeQhLErb5VyeLhM%2BOPw7r27Yih88QAsb0t%2FKeDNlPgL7V0GKD%2FLDOYXncY5KYOEZVliKcZKl%2Bml%2BdXqO%2B%2FSiBnGzbnH9Q11CVhXWdU3v%2BbSVR0SMJFPb%2Bow0UIshRVaZarxoz%2B2zMtjClV6%2BwkVakD9NAxhNW%2FBRd47BM0KEvrRjaAs5kg%2BvLIl%2BNBU0gJSB2OoCO88KeD%2FOcOtqmnkNgcerxuE5mQZ3iuMOuD3cAGOqUBV5bl7%2BvgLKU47L86lNtL7Xim58BlklvhrwIawO5BLMNTm6Ym6cl1%2FSz4Jv3coB4lg3AZU6CIpm2DMXRXm86sDlT4zU0oH4GgpD51uD7pSgehBVX0SWa%2FRSm9%2B1fmQNP6m36xBjDF2A5ee6Qjz8ZBW8XQUhSOnJu3UL7iqc8Wr3GgarXo87CqXmo5VYGyx4I%2FZbM5DTkOAwuGXarWgifTj3EmnIGy&X-Amz-Signature=45bea461abc75ea84cb6c02ec059024ab44e9b4378e3a8202a03d3703fd7fdaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIFRMK5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNEmnAO9807XzmLKZ0%2FolqLySpXt5bqHnQyt5LmMbesAIgS2%2BR4HRMYW7Kk3rqL2GfjsHK1YbuV3qhdonvZkzQW5oq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBsT6Pusb4oQ5eIxIyrcA8xB%2Fog0wHIS7f7DIfK7QZJKV6uw83ik0aMW0eP0wtrvn0eSvuAmKAlDOQpv%2Bo%2FYMtqBKJT%2Fui%2BCVEFPxf8ceakEhzX8xgHgwZWAvzb3KJY%2Bq0AHDVfLkRsepzyip7mxlWYdDqtuvQ20McaZA6jz7j0%2FIrnTRNbhpxuRgYbnvZlFPvWB2aFGC%2BLA0o6NcPp6jLbN%2FLfKxBGlXoVVgrEJFdy1TC9NN4QNkNZoYUIPWSDuBYU433VqYh2g35gv2I6SQTmXAV66ruSwYzIS7HaGucAsrF20P4bZopf7FALEk6mcq0G1pp%2FtuoQkCbPSDLFHk1DXqDp38sJNoVj%2Fe26cJIf7HfPBc66NQ1YTalojF7I0pQPw3KTcCjsLOYJzGxx0hxh8X4ojoXe%2Fz9nMZZBjkAg5mvfeQhLErb5VyeLhM%2BOPw7r27Yih88QAsb0t%2FKeDNlPgL7V0GKD%2FLDOYXncY5KYOEZVliKcZKl%2Bml%2BdXqO%2B%2FSiBnGzbnH9Q11CVhXWdU3v%2BbSVR0SMJFPb%2Bow0UIshRVaZarxoz%2B2zMtjClV6%2BwkVakD9NAxhNW%2FBRd47BM0KEvrRjaAs5kg%2BvLIl%2BNBU0gJSB2OoCO88KeD%2FOcOtqmnkNgcerxuE5mQZ3iuMOuD3cAGOqUBV5bl7%2BvgLKU47L86lNtL7Xim58BlklvhrwIawO5BLMNTm6Ym6cl1%2FSz4Jv3coB4lg3AZU6CIpm2DMXRXm86sDlT4zU0oH4GgpD51uD7pSgehBVX0SWa%2FRSm9%2B1fmQNP6m36xBjDF2A5ee6Qjz8ZBW8XQUhSOnJu3UL7iqc8Wr3GgarXo87CqXmo5VYGyx4I%2FZbM5DTkOAwuGXarWgifTj3EmnIGy&X-Amz-Signature=f58140c3673a9d4ed3bf4899a8140a53b9cdc4e4648c33125e64ad866b420777&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIFRMK5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNEmnAO9807XzmLKZ0%2FolqLySpXt5bqHnQyt5LmMbesAIgS2%2BR4HRMYW7Kk3rqL2GfjsHK1YbuV3qhdonvZkzQW5oq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBsT6Pusb4oQ5eIxIyrcA8xB%2Fog0wHIS7f7DIfK7QZJKV6uw83ik0aMW0eP0wtrvn0eSvuAmKAlDOQpv%2Bo%2FYMtqBKJT%2Fui%2BCVEFPxf8ceakEhzX8xgHgwZWAvzb3KJY%2Bq0AHDVfLkRsepzyip7mxlWYdDqtuvQ20McaZA6jz7j0%2FIrnTRNbhpxuRgYbnvZlFPvWB2aFGC%2BLA0o6NcPp6jLbN%2FLfKxBGlXoVVgrEJFdy1TC9NN4QNkNZoYUIPWSDuBYU433VqYh2g35gv2I6SQTmXAV66ruSwYzIS7HaGucAsrF20P4bZopf7FALEk6mcq0G1pp%2FtuoQkCbPSDLFHk1DXqDp38sJNoVj%2Fe26cJIf7HfPBc66NQ1YTalojF7I0pQPw3KTcCjsLOYJzGxx0hxh8X4ojoXe%2Fz9nMZZBjkAg5mvfeQhLErb5VyeLhM%2BOPw7r27Yih88QAsb0t%2FKeDNlPgL7V0GKD%2FLDOYXncY5KYOEZVliKcZKl%2Bml%2BdXqO%2B%2FSiBnGzbnH9Q11CVhXWdU3v%2BbSVR0SMJFPb%2Bow0UIshRVaZarxoz%2B2zMtjClV6%2BwkVakD9NAxhNW%2FBRd47BM0KEvrRjaAs5kg%2BvLIl%2BNBU0gJSB2OoCO88KeD%2FOcOtqmnkNgcerxuE5mQZ3iuMOuD3cAGOqUBV5bl7%2BvgLKU47L86lNtL7Xim58BlklvhrwIawO5BLMNTm6Ym6cl1%2FSz4Jv3coB4lg3AZU6CIpm2DMXRXm86sDlT4zU0oH4GgpD51uD7pSgehBVX0SWa%2FRSm9%2B1fmQNP6m36xBjDF2A5ee6Qjz8ZBW8XQUhSOnJu3UL7iqc8Wr3GgarXo87CqXmo5VYGyx4I%2FZbM5DTkOAwuGXarWgifTj3EmnIGy&X-Amz-Signature=08cfc4e18c17a38a20dad293a9d42f92547b418ecb9e5a3098f6eaf39da0bcfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIFRMK5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNEmnAO9807XzmLKZ0%2FolqLySpXt5bqHnQyt5LmMbesAIgS2%2BR4HRMYW7Kk3rqL2GfjsHK1YbuV3qhdonvZkzQW5oq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBsT6Pusb4oQ5eIxIyrcA8xB%2Fog0wHIS7f7DIfK7QZJKV6uw83ik0aMW0eP0wtrvn0eSvuAmKAlDOQpv%2Bo%2FYMtqBKJT%2Fui%2BCVEFPxf8ceakEhzX8xgHgwZWAvzb3KJY%2Bq0AHDVfLkRsepzyip7mxlWYdDqtuvQ20McaZA6jz7j0%2FIrnTRNbhpxuRgYbnvZlFPvWB2aFGC%2BLA0o6NcPp6jLbN%2FLfKxBGlXoVVgrEJFdy1TC9NN4QNkNZoYUIPWSDuBYU433VqYh2g35gv2I6SQTmXAV66ruSwYzIS7HaGucAsrF20P4bZopf7FALEk6mcq0G1pp%2FtuoQkCbPSDLFHk1DXqDp38sJNoVj%2Fe26cJIf7HfPBc66NQ1YTalojF7I0pQPw3KTcCjsLOYJzGxx0hxh8X4ojoXe%2Fz9nMZZBjkAg5mvfeQhLErb5VyeLhM%2BOPw7r27Yih88QAsb0t%2FKeDNlPgL7V0GKD%2FLDOYXncY5KYOEZVliKcZKl%2Bml%2BdXqO%2B%2FSiBnGzbnH9Q11CVhXWdU3v%2BbSVR0SMJFPb%2Bow0UIshRVaZarxoz%2B2zMtjClV6%2BwkVakD9NAxhNW%2FBRd47BM0KEvrRjaAs5kg%2BvLIl%2BNBU0gJSB2OoCO88KeD%2FOcOtqmnkNgcerxuE5mQZ3iuMOuD3cAGOqUBV5bl7%2BvgLKU47L86lNtL7Xim58BlklvhrwIawO5BLMNTm6Ym6cl1%2FSz4Jv3coB4lg3AZU6CIpm2DMXRXm86sDlT4zU0oH4GgpD51uD7pSgehBVX0SWa%2FRSm9%2B1fmQNP6m36xBjDF2A5ee6Qjz8ZBW8XQUhSOnJu3UL7iqc8Wr3GgarXo87CqXmo5VYGyx4I%2FZbM5DTkOAwuGXarWgifTj3EmnIGy&X-Amz-Signature=05c80bb0ac0b7a38390af470e54b83006314c0ca6e7757e13224fffffb7a67eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
