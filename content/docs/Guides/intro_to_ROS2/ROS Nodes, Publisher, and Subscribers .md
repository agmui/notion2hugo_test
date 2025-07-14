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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=6dc4e347f436de8a10487befdc8356cfd7c3f070d84036e98a834efaa6875269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=0bc4325b2dd03444538c8e9dba6fc041ab2c8ff7e53434f8d8d689c94e3980a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=c6a67a9bcadc4a2e350d920dd55cbc784951c4fbe828ce41576501da8c25b800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=6ee04937bd80082a93a013e89c478581103f51d10cf011afd840527118f5e8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=e2d01c1d70fd440abb63829c37cae7b6d16b6acda1d23569934411ff2bc45a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=975fb7979dd528e55832cc939a43020aaef6d224684ecf99d36335022c87c70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=8010a78c6d9cc2a75370fd7f5c088eee0d1fb167f09f2d9ce7b22f4327d4f676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=be0cad7b707b67f9e656d20acbbd25ce1a5d96bcffc9729d6c1df91564748f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
