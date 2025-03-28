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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TJMXXF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdos%2FUe0jumRBkwhzluRqBBlPzk%2BVt%2BIwA9lJSc6grHAIhAPXHdxR8ZSis%2FOmp5D1EJjlyazF9jsCpx9aQVCqfohdMKv8DCFYQABoMNjM3NDIzMTgzODA1Igy4N3g0H1CZJpynZqoq3ANSPLiq2OLqMe61M46t6QnpztbEIt9S%2FRm794T%2BQvn485ybCueqeH1jFTEgahpwW%2BOoZKUsLE0gy6n1jPAuz3UkwoX8szKDeCUCnMiCCtNl%2FCecpkZW%2FRGToMrfQZJgILAgqmcvqMJYq5PjuucPBpeLcyRp5NG3mDroRa3Y8o54%2BAUHD5ySuuaipqWw5lY%2BqliMLajn7%2B%2FHuK06azg8S36VmJyAwbcB0lifVGBFc2PLzbR%2FF3a4X9NLLXpsxDLoABpUBpyND4tXY4SrZbu42y7wf3ERNB50746WTGA8RPVLP%2FL991gHS%2FkVADNchADkXvjlvK3kjpJPUJcmDB1uRY2J6uHjpl7Zf2cxBvyULHGPwmKNASQe8gP9BPSn3d7aWZe7DjW%2BqI9YrSVdHmqU2i1Z0%2BNkQXGXcuDNAzFtx%2FNvHwdxcQUJZcHnCMJJOplUnv%2F5XaobqAX5f5H2HyxoVcQ6mX0U4DuckE%2BTjhWNptFDvHWjaMY1KJmcqrtDuEVPMjOxEJAC1WrfDxj5Jh1vjuLkW6UGywuSgypcgmIGTERuW852sSnCGkRmAqTQknN%2FRqcOn7edTg0pEZPhaRTKz%2FZ4wPmzKzmsl4zS4DsPJAMN9igiYx4A838MYIkn0zChzJi%2FBjqkAZAgQa2axgc4f%2FB25kxD%2FvKXqNjKQzahmuMCoSGcc5w9T5%2BmmJL0a2E3AjPgIlLFeCybrrnPEr%2Flf6ImcL9DABUapppdF7wVRq%2Bq4%2FB%2BORwdZk6anN6Rc994rksjXChSE5zXpHx%2BJj7bHn%2FEaEqzbza8C7m5SvZPO6hs4LbMhIE085wyMCQNbAnQtOTKkB5jfb6NvexT%2FLFUxy%2FO4dWeZ2h%2FgMmF&X-Amz-Signature=176a038cce427362740275eccc68398a937d47ff235b6b54d57f63cf525e6f66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TJMXXF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdos%2FUe0jumRBkwhzluRqBBlPzk%2BVt%2BIwA9lJSc6grHAIhAPXHdxR8ZSis%2FOmp5D1EJjlyazF9jsCpx9aQVCqfohdMKv8DCFYQABoMNjM3NDIzMTgzODA1Igy4N3g0H1CZJpynZqoq3ANSPLiq2OLqMe61M46t6QnpztbEIt9S%2FRm794T%2BQvn485ybCueqeH1jFTEgahpwW%2BOoZKUsLE0gy6n1jPAuz3UkwoX8szKDeCUCnMiCCtNl%2FCecpkZW%2FRGToMrfQZJgILAgqmcvqMJYq5PjuucPBpeLcyRp5NG3mDroRa3Y8o54%2BAUHD5ySuuaipqWw5lY%2BqliMLajn7%2B%2FHuK06azg8S36VmJyAwbcB0lifVGBFc2PLzbR%2FF3a4X9NLLXpsxDLoABpUBpyND4tXY4SrZbu42y7wf3ERNB50746WTGA8RPVLP%2FL991gHS%2FkVADNchADkXvjlvK3kjpJPUJcmDB1uRY2J6uHjpl7Zf2cxBvyULHGPwmKNASQe8gP9BPSn3d7aWZe7DjW%2BqI9YrSVdHmqU2i1Z0%2BNkQXGXcuDNAzFtx%2FNvHwdxcQUJZcHnCMJJOplUnv%2F5XaobqAX5f5H2HyxoVcQ6mX0U4DuckE%2BTjhWNptFDvHWjaMY1KJmcqrtDuEVPMjOxEJAC1WrfDxj5Jh1vjuLkW6UGywuSgypcgmIGTERuW852sSnCGkRmAqTQknN%2FRqcOn7edTg0pEZPhaRTKz%2FZ4wPmzKzmsl4zS4DsPJAMN9igiYx4A838MYIkn0zChzJi%2FBjqkAZAgQa2axgc4f%2FB25kxD%2FvKXqNjKQzahmuMCoSGcc5w9T5%2BmmJL0a2E3AjPgIlLFeCybrrnPEr%2Flf6ImcL9DABUapppdF7wVRq%2Bq4%2FB%2BORwdZk6anN6Rc994rksjXChSE5zXpHx%2BJj7bHn%2FEaEqzbza8C7m5SvZPO6hs4LbMhIE085wyMCQNbAnQtOTKkB5jfb6NvexT%2FLFUxy%2FO4dWeZ2h%2FgMmF&X-Amz-Signature=13a4dbf9d7f6f774ecc4361fac74fa67b82612fd696f0e37201590d7914d0e31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TJMXXF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdos%2FUe0jumRBkwhzluRqBBlPzk%2BVt%2BIwA9lJSc6grHAIhAPXHdxR8ZSis%2FOmp5D1EJjlyazF9jsCpx9aQVCqfohdMKv8DCFYQABoMNjM3NDIzMTgzODA1Igy4N3g0H1CZJpynZqoq3ANSPLiq2OLqMe61M46t6QnpztbEIt9S%2FRm794T%2BQvn485ybCueqeH1jFTEgahpwW%2BOoZKUsLE0gy6n1jPAuz3UkwoX8szKDeCUCnMiCCtNl%2FCecpkZW%2FRGToMrfQZJgILAgqmcvqMJYq5PjuucPBpeLcyRp5NG3mDroRa3Y8o54%2BAUHD5ySuuaipqWw5lY%2BqliMLajn7%2B%2FHuK06azg8S36VmJyAwbcB0lifVGBFc2PLzbR%2FF3a4X9NLLXpsxDLoABpUBpyND4tXY4SrZbu42y7wf3ERNB50746WTGA8RPVLP%2FL991gHS%2FkVADNchADkXvjlvK3kjpJPUJcmDB1uRY2J6uHjpl7Zf2cxBvyULHGPwmKNASQe8gP9BPSn3d7aWZe7DjW%2BqI9YrSVdHmqU2i1Z0%2BNkQXGXcuDNAzFtx%2FNvHwdxcQUJZcHnCMJJOplUnv%2F5XaobqAX5f5H2HyxoVcQ6mX0U4DuckE%2BTjhWNptFDvHWjaMY1KJmcqrtDuEVPMjOxEJAC1WrfDxj5Jh1vjuLkW6UGywuSgypcgmIGTERuW852sSnCGkRmAqTQknN%2FRqcOn7edTg0pEZPhaRTKz%2FZ4wPmzKzmsl4zS4DsPJAMN9igiYx4A838MYIkn0zChzJi%2FBjqkAZAgQa2axgc4f%2FB25kxD%2FvKXqNjKQzahmuMCoSGcc5w9T5%2BmmJL0a2E3AjPgIlLFeCybrrnPEr%2Flf6ImcL9DABUapppdF7wVRq%2Bq4%2FB%2BORwdZk6anN6Rc994rksjXChSE5zXpHx%2BJj7bHn%2FEaEqzbza8C7m5SvZPO6hs4LbMhIE085wyMCQNbAnQtOTKkB5jfb6NvexT%2FLFUxy%2FO4dWeZ2h%2FgMmF&X-Amz-Signature=a31cf4a47e7d910275b21835ffbd7cfd27c7fc03f9c4298a44c2424ca0b6fe8d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TJMXXF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdos%2FUe0jumRBkwhzluRqBBlPzk%2BVt%2BIwA9lJSc6grHAIhAPXHdxR8ZSis%2FOmp5D1EJjlyazF9jsCpx9aQVCqfohdMKv8DCFYQABoMNjM3NDIzMTgzODA1Igy4N3g0H1CZJpynZqoq3ANSPLiq2OLqMe61M46t6QnpztbEIt9S%2FRm794T%2BQvn485ybCueqeH1jFTEgahpwW%2BOoZKUsLE0gy6n1jPAuz3UkwoX8szKDeCUCnMiCCtNl%2FCecpkZW%2FRGToMrfQZJgILAgqmcvqMJYq5PjuucPBpeLcyRp5NG3mDroRa3Y8o54%2BAUHD5ySuuaipqWw5lY%2BqliMLajn7%2B%2FHuK06azg8S36VmJyAwbcB0lifVGBFc2PLzbR%2FF3a4X9NLLXpsxDLoABpUBpyND4tXY4SrZbu42y7wf3ERNB50746WTGA8RPVLP%2FL991gHS%2FkVADNchADkXvjlvK3kjpJPUJcmDB1uRY2J6uHjpl7Zf2cxBvyULHGPwmKNASQe8gP9BPSn3d7aWZe7DjW%2BqI9YrSVdHmqU2i1Z0%2BNkQXGXcuDNAzFtx%2FNvHwdxcQUJZcHnCMJJOplUnv%2F5XaobqAX5f5H2HyxoVcQ6mX0U4DuckE%2BTjhWNptFDvHWjaMY1KJmcqrtDuEVPMjOxEJAC1WrfDxj5Jh1vjuLkW6UGywuSgypcgmIGTERuW852sSnCGkRmAqTQknN%2FRqcOn7edTg0pEZPhaRTKz%2FZ4wPmzKzmsl4zS4DsPJAMN9igiYx4A838MYIkn0zChzJi%2FBjqkAZAgQa2axgc4f%2FB25kxD%2FvKXqNjKQzahmuMCoSGcc5w9T5%2BmmJL0a2E3AjPgIlLFeCybrrnPEr%2Flf6ImcL9DABUapppdF7wVRq%2Bq4%2FB%2BORwdZk6anN6Rc994rksjXChSE5zXpHx%2BJj7bHn%2FEaEqzbza8C7m5SvZPO6hs4LbMhIE085wyMCQNbAnQtOTKkB5jfb6NvexT%2FLFUxy%2FO4dWeZ2h%2FgMmF&X-Amz-Signature=ba067fa06d26ca34ed8a417938005faaaf4c76f5984721eb21ffa99d98abd015&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TJMXXF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdos%2FUe0jumRBkwhzluRqBBlPzk%2BVt%2BIwA9lJSc6grHAIhAPXHdxR8ZSis%2FOmp5D1EJjlyazF9jsCpx9aQVCqfohdMKv8DCFYQABoMNjM3NDIzMTgzODA1Igy4N3g0H1CZJpynZqoq3ANSPLiq2OLqMe61M46t6QnpztbEIt9S%2FRm794T%2BQvn485ybCueqeH1jFTEgahpwW%2BOoZKUsLE0gy6n1jPAuz3UkwoX8szKDeCUCnMiCCtNl%2FCecpkZW%2FRGToMrfQZJgILAgqmcvqMJYq5PjuucPBpeLcyRp5NG3mDroRa3Y8o54%2BAUHD5ySuuaipqWw5lY%2BqliMLajn7%2B%2FHuK06azg8S36VmJyAwbcB0lifVGBFc2PLzbR%2FF3a4X9NLLXpsxDLoABpUBpyND4tXY4SrZbu42y7wf3ERNB50746WTGA8RPVLP%2FL991gHS%2FkVADNchADkXvjlvK3kjpJPUJcmDB1uRY2J6uHjpl7Zf2cxBvyULHGPwmKNASQe8gP9BPSn3d7aWZe7DjW%2BqI9YrSVdHmqU2i1Z0%2BNkQXGXcuDNAzFtx%2FNvHwdxcQUJZcHnCMJJOplUnv%2F5XaobqAX5f5H2HyxoVcQ6mX0U4DuckE%2BTjhWNptFDvHWjaMY1KJmcqrtDuEVPMjOxEJAC1WrfDxj5Jh1vjuLkW6UGywuSgypcgmIGTERuW852sSnCGkRmAqTQknN%2FRqcOn7edTg0pEZPhaRTKz%2FZ4wPmzKzmsl4zS4DsPJAMN9igiYx4A838MYIkn0zChzJi%2FBjqkAZAgQa2axgc4f%2FB25kxD%2FvKXqNjKQzahmuMCoSGcc5w9T5%2BmmJL0a2E3AjPgIlLFeCybrrnPEr%2Flf6ImcL9DABUapppdF7wVRq%2Bq4%2FB%2BORwdZk6anN6Rc994rksjXChSE5zXpHx%2BJj7bHn%2FEaEqzbza8C7m5SvZPO6hs4LbMhIE085wyMCQNbAnQtOTKkB5jfb6NvexT%2FLFUxy%2FO4dWeZ2h%2FgMmF&X-Amz-Signature=9c36d057ec35f75d1887a5eccc37e4c1a2b6114858d32d3c0d3dfeccbfa3d0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TJMXXF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdos%2FUe0jumRBkwhzluRqBBlPzk%2BVt%2BIwA9lJSc6grHAIhAPXHdxR8ZSis%2FOmp5D1EJjlyazF9jsCpx9aQVCqfohdMKv8DCFYQABoMNjM3NDIzMTgzODA1Igy4N3g0H1CZJpynZqoq3ANSPLiq2OLqMe61M46t6QnpztbEIt9S%2FRm794T%2BQvn485ybCueqeH1jFTEgahpwW%2BOoZKUsLE0gy6n1jPAuz3UkwoX8szKDeCUCnMiCCtNl%2FCecpkZW%2FRGToMrfQZJgILAgqmcvqMJYq5PjuucPBpeLcyRp5NG3mDroRa3Y8o54%2BAUHD5ySuuaipqWw5lY%2BqliMLajn7%2B%2FHuK06azg8S36VmJyAwbcB0lifVGBFc2PLzbR%2FF3a4X9NLLXpsxDLoABpUBpyND4tXY4SrZbu42y7wf3ERNB50746WTGA8RPVLP%2FL991gHS%2FkVADNchADkXvjlvK3kjpJPUJcmDB1uRY2J6uHjpl7Zf2cxBvyULHGPwmKNASQe8gP9BPSn3d7aWZe7DjW%2BqI9YrSVdHmqU2i1Z0%2BNkQXGXcuDNAzFtx%2FNvHwdxcQUJZcHnCMJJOplUnv%2F5XaobqAX5f5H2HyxoVcQ6mX0U4DuckE%2BTjhWNptFDvHWjaMY1KJmcqrtDuEVPMjOxEJAC1WrfDxj5Jh1vjuLkW6UGywuSgypcgmIGTERuW852sSnCGkRmAqTQknN%2FRqcOn7edTg0pEZPhaRTKz%2FZ4wPmzKzmsl4zS4DsPJAMN9igiYx4A838MYIkn0zChzJi%2FBjqkAZAgQa2axgc4f%2FB25kxD%2FvKXqNjKQzahmuMCoSGcc5w9T5%2BmmJL0a2E3AjPgIlLFeCybrrnPEr%2Flf6ImcL9DABUapppdF7wVRq%2Bq4%2FB%2BORwdZk6anN6Rc994rksjXChSE5zXpHx%2BJj7bHn%2FEaEqzbza8C7m5SvZPO6hs4LbMhIE085wyMCQNbAnQtOTKkB5jfb6NvexT%2FLFUxy%2FO4dWeZ2h%2FgMmF&X-Amz-Signature=3cbb464a581d92fd9633c9e4293dd52523f1ccb50d1ac91c7ca6e213df05ae94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TJMXXF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdos%2FUe0jumRBkwhzluRqBBlPzk%2BVt%2BIwA9lJSc6grHAIhAPXHdxR8ZSis%2FOmp5D1EJjlyazF9jsCpx9aQVCqfohdMKv8DCFYQABoMNjM3NDIzMTgzODA1Igy4N3g0H1CZJpynZqoq3ANSPLiq2OLqMe61M46t6QnpztbEIt9S%2FRm794T%2BQvn485ybCueqeH1jFTEgahpwW%2BOoZKUsLE0gy6n1jPAuz3UkwoX8szKDeCUCnMiCCtNl%2FCecpkZW%2FRGToMrfQZJgILAgqmcvqMJYq5PjuucPBpeLcyRp5NG3mDroRa3Y8o54%2BAUHD5ySuuaipqWw5lY%2BqliMLajn7%2B%2FHuK06azg8S36VmJyAwbcB0lifVGBFc2PLzbR%2FF3a4X9NLLXpsxDLoABpUBpyND4tXY4SrZbu42y7wf3ERNB50746WTGA8RPVLP%2FL991gHS%2FkVADNchADkXvjlvK3kjpJPUJcmDB1uRY2J6uHjpl7Zf2cxBvyULHGPwmKNASQe8gP9BPSn3d7aWZe7DjW%2BqI9YrSVdHmqU2i1Z0%2BNkQXGXcuDNAzFtx%2FNvHwdxcQUJZcHnCMJJOplUnv%2F5XaobqAX5f5H2HyxoVcQ6mX0U4DuckE%2BTjhWNptFDvHWjaMY1KJmcqrtDuEVPMjOxEJAC1WrfDxj5Jh1vjuLkW6UGywuSgypcgmIGTERuW852sSnCGkRmAqTQknN%2FRqcOn7edTg0pEZPhaRTKz%2FZ4wPmzKzmsl4zS4DsPJAMN9igiYx4A838MYIkn0zChzJi%2FBjqkAZAgQa2axgc4f%2FB25kxD%2FvKXqNjKQzahmuMCoSGcc5w9T5%2BmmJL0a2E3AjPgIlLFeCybrrnPEr%2Flf6ImcL9DABUapppdF7wVRq%2Bq4%2FB%2BORwdZk6anN6Rc994rksjXChSE5zXpHx%2BJj7bHn%2FEaEqzbza8C7m5SvZPO6hs4LbMhIE085wyMCQNbAnQtOTKkB5jfb6NvexT%2FLFUxy%2FO4dWeZ2h%2FgMmF&X-Amz-Signature=54fb678c7a5bd22cf8fdea73b0f4d887eee5f72a066cbd57bd428061e2d5927e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TJMXXF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdos%2FUe0jumRBkwhzluRqBBlPzk%2BVt%2BIwA9lJSc6grHAIhAPXHdxR8ZSis%2FOmp5D1EJjlyazF9jsCpx9aQVCqfohdMKv8DCFYQABoMNjM3NDIzMTgzODA1Igy4N3g0H1CZJpynZqoq3ANSPLiq2OLqMe61M46t6QnpztbEIt9S%2FRm794T%2BQvn485ybCueqeH1jFTEgahpwW%2BOoZKUsLE0gy6n1jPAuz3UkwoX8szKDeCUCnMiCCtNl%2FCecpkZW%2FRGToMrfQZJgILAgqmcvqMJYq5PjuucPBpeLcyRp5NG3mDroRa3Y8o54%2BAUHD5ySuuaipqWw5lY%2BqliMLajn7%2B%2FHuK06azg8S36VmJyAwbcB0lifVGBFc2PLzbR%2FF3a4X9NLLXpsxDLoABpUBpyND4tXY4SrZbu42y7wf3ERNB50746WTGA8RPVLP%2FL991gHS%2FkVADNchADkXvjlvK3kjpJPUJcmDB1uRY2J6uHjpl7Zf2cxBvyULHGPwmKNASQe8gP9BPSn3d7aWZe7DjW%2BqI9YrSVdHmqU2i1Z0%2BNkQXGXcuDNAzFtx%2FNvHwdxcQUJZcHnCMJJOplUnv%2F5XaobqAX5f5H2HyxoVcQ6mX0U4DuckE%2BTjhWNptFDvHWjaMY1KJmcqrtDuEVPMjOxEJAC1WrfDxj5Jh1vjuLkW6UGywuSgypcgmIGTERuW852sSnCGkRmAqTQknN%2FRqcOn7edTg0pEZPhaRTKz%2FZ4wPmzKzmsl4zS4DsPJAMN9igiYx4A838MYIkn0zChzJi%2FBjqkAZAgQa2axgc4f%2FB25kxD%2FvKXqNjKQzahmuMCoSGcc5w9T5%2BmmJL0a2E3AjPgIlLFeCybrrnPEr%2Flf6ImcL9DABUapppdF7wVRq%2Bq4%2FB%2BORwdZk6anN6Rc994rksjXChSE5zXpHx%2BJj7bHn%2FEaEqzbza8C7m5SvZPO6hs4LbMhIE085wyMCQNbAnQtOTKkB5jfb6NvexT%2FLFUxy%2FO4dWeZ2h%2FgMmF&X-Amz-Signature=66f13d1c7464ce0959ad0f2e29406372f12afe9f5425b02c8f4ac98c995f9ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
