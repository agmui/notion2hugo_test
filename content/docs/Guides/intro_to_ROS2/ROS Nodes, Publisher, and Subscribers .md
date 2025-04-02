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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XYT2EG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF5efB00ILOoy2Mn%2FXcV8EIlNL4mTVTvYpEBPJ2OcbUaAiBpENBBOt5HSJITPqb0rEB%2FxG3n9XQwug7yFdxXz6IcFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuAsXamrpK867jvDuKtwDnvaqAuQ4xbNDYLQWiwXefQbMuYRcSfTLxqgxU8jRT2G3IDld3tsBTfTMqMgM1UT3%2FWXgAJGwIVVKlH%2Fcvu1UoY%2FdygA9L7VSr6AIlb5tLRdeNzW3lSn8Lcc7rQBwI6ZxuOoTpmEVzLewtsTbw4YMPTiS9Hq47fY23dKJoqgIY%2B6W5WV%2Bsy8WiFlIZHfuin9FqoCKSUUtJX%2BA3hmmZPobvMqONKyp00%2BXMG5lU9l0Vp56%2BLZ5rB35JpHFfP%2FS9JaN5FNRQy%2FfwjaI9prt6nD5dAkTXm2c%2FYiB2vkc1NASXKcmOHZGP2JyOtwwI7Ww1EVLqlkdxYBhYux5TIb%2FNvMFN%2BfcfeDp9vxSi54PqzVvwhPI9LDpFfQbnbeA4rL8vAo9nUbe2P%2FURAbdcJjUgC3u%2Bqiu2IykYNpVABsau7kCSDPbudqQdv02wBnPb6waCl7xSg%2FTrmxWkK0jOr7tNPo3%2B72%2BjodIUOhVivUV1BOJk9Nr7Llf0cU1lNaU1%2Fc6s%2Fi9E7lSvkkx68Rqr4njmvo3csP6H6x7K469SeMZkU6YlgpqBW%2BMD%2F9USDWMDrPhwq5DzOlbF6gj8gkVQH5RcjYnb%2F5SEwMYlIFwHs1zDqTPNQC82AvIEg1g4IqxbXQwr8S0vwY6pgEoGe7J8YtwN3uffR6tNTZaXfyWMhafao9a6ylYA%2FWeNIs1eiBg%2BDj2Vr2BAVEL915hZ8ePsGIizz9SpEdkw9lYWCa2pEcIGOqyI4GdrJsKaw3HhGLn8Rj%2Bdelgl1Vz3w87CRguouw4tQfk41J4ILnIjfszpfU2J%2B2y%2F6qnNYK9bEKQSl91iLjQxJJZxTKfJKD6sW%2B6GFNf4SVCf0FEGwyKQJ59kYLg&X-Amz-Signature=b2188c55ebd75dc48a75b97be2e69843ad70d5f2d4a3fbdf8007f9d8552075ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XYT2EG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF5efB00ILOoy2Mn%2FXcV8EIlNL4mTVTvYpEBPJ2OcbUaAiBpENBBOt5HSJITPqb0rEB%2FxG3n9XQwug7yFdxXz6IcFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuAsXamrpK867jvDuKtwDnvaqAuQ4xbNDYLQWiwXefQbMuYRcSfTLxqgxU8jRT2G3IDld3tsBTfTMqMgM1UT3%2FWXgAJGwIVVKlH%2Fcvu1UoY%2FdygA9L7VSr6AIlb5tLRdeNzW3lSn8Lcc7rQBwI6ZxuOoTpmEVzLewtsTbw4YMPTiS9Hq47fY23dKJoqgIY%2B6W5WV%2Bsy8WiFlIZHfuin9FqoCKSUUtJX%2BA3hmmZPobvMqONKyp00%2BXMG5lU9l0Vp56%2BLZ5rB35JpHFfP%2FS9JaN5FNRQy%2FfwjaI9prt6nD5dAkTXm2c%2FYiB2vkc1NASXKcmOHZGP2JyOtwwI7Ww1EVLqlkdxYBhYux5TIb%2FNvMFN%2BfcfeDp9vxSi54PqzVvwhPI9LDpFfQbnbeA4rL8vAo9nUbe2P%2FURAbdcJjUgC3u%2Bqiu2IykYNpVABsau7kCSDPbudqQdv02wBnPb6waCl7xSg%2FTrmxWkK0jOr7tNPo3%2B72%2BjodIUOhVivUV1BOJk9Nr7Llf0cU1lNaU1%2Fc6s%2Fi9E7lSvkkx68Rqr4njmvo3csP6H6x7K469SeMZkU6YlgpqBW%2BMD%2F9USDWMDrPhwq5DzOlbF6gj8gkVQH5RcjYnb%2F5SEwMYlIFwHs1zDqTPNQC82AvIEg1g4IqxbXQwr8S0vwY6pgEoGe7J8YtwN3uffR6tNTZaXfyWMhafao9a6ylYA%2FWeNIs1eiBg%2BDj2Vr2BAVEL915hZ8ePsGIizz9SpEdkw9lYWCa2pEcIGOqyI4GdrJsKaw3HhGLn8Rj%2Bdelgl1Vz3w87CRguouw4tQfk41J4ILnIjfszpfU2J%2B2y%2F6qnNYK9bEKQSl91iLjQxJJZxTKfJKD6sW%2B6GFNf4SVCf0FEGwyKQJ59kYLg&X-Amz-Signature=8a20e060c1133384a5dc0abbc15297ed538f6a0c655d489bd81364ca7f8fd267&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XYT2EG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF5efB00ILOoy2Mn%2FXcV8EIlNL4mTVTvYpEBPJ2OcbUaAiBpENBBOt5HSJITPqb0rEB%2FxG3n9XQwug7yFdxXz6IcFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuAsXamrpK867jvDuKtwDnvaqAuQ4xbNDYLQWiwXefQbMuYRcSfTLxqgxU8jRT2G3IDld3tsBTfTMqMgM1UT3%2FWXgAJGwIVVKlH%2Fcvu1UoY%2FdygA9L7VSr6AIlb5tLRdeNzW3lSn8Lcc7rQBwI6ZxuOoTpmEVzLewtsTbw4YMPTiS9Hq47fY23dKJoqgIY%2B6W5WV%2Bsy8WiFlIZHfuin9FqoCKSUUtJX%2BA3hmmZPobvMqONKyp00%2BXMG5lU9l0Vp56%2BLZ5rB35JpHFfP%2FS9JaN5FNRQy%2FfwjaI9prt6nD5dAkTXm2c%2FYiB2vkc1NASXKcmOHZGP2JyOtwwI7Ww1EVLqlkdxYBhYux5TIb%2FNvMFN%2BfcfeDp9vxSi54PqzVvwhPI9LDpFfQbnbeA4rL8vAo9nUbe2P%2FURAbdcJjUgC3u%2Bqiu2IykYNpVABsau7kCSDPbudqQdv02wBnPb6waCl7xSg%2FTrmxWkK0jOr7tNPo3%2B72%2BjodIUOhVivUV1BOJk9Nr7Llf0cU1lNaU1%2Fc6s%2Fi9E7lSvkkx68Rqr4njmvo3csP6H6x7K469SeMZkU6YlgpqBW%2BMD%2F9USDWMDrPhwq5DzOlbF6gj8gkVQH5RcjYnb%2F5SEwMYlIFwHs1zDqTPNQC82AvIEg1g4IqxbXQwr8S0vwY6pgEoGe7J8YtwN3uffR6tNTZaXfyWMhafao9a6ylYA%2FWeNIs1eiBg%2BDj2Vr2BAVEL915hZ8ePsGIizz9SpEdkw9lYWCa2pEcIGOqyI4GdrJsKaw3HhGLn8Rj%2Bdelgl1Vz3w87CRguouw4tQfk41J4ILnIjfszpfU2J%2B2y%2F6qnNYK9bEKQSl91iLjQxJJZxTKfJKD6sW%2B6GFNf4SVCf0FEGwyKQJ59kYLg&X-Amz-Signature=e0c7cffdadfaf08ffe03156d8509bdc0e37f92ef2e9fe9f07d81ae2a150b7239&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XYT2EG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF5efB00ILOoy2Mn%2FXcV8EIlNL4mTVTvYpEBPJ2OcbUaAiBpENBBOt5HSJITPqb0rEB%2FxG3n9XQwug7yFdxXz6IcFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuAsXamrpK867jvDuKtwDnvaqAuQ4xbNDYLQWiwXefQbMuYRcSfTLxqgxU8jRT2G3IDld3tsBTfTMqMgM1UT3%2FWXgAJGwIVVKlH%2Fcvu1UoY%2FdygA9L7VSr6AIlb5tLRdeNzW3lSn8Lcc7rQBwI6ZxuOoTpmEVzLewtsTbw4YMPTiS9Hq47fY23dKJoqgIY%2B6W5WV%2Bsy8WiFlIZHfuin9FqoCKSUUtJX%2BA3hmmZPobvMqONKyp00%2BXMG5lU9l0Vp56%2BLZ5rB35JpHFfP%2FS9JaN5FNRQy%2FfwjaI9prt6nD5dAkTXm2c%2FYiB2vkc1NASXKcmOHZGP2JyOtwwI7Ww1EVLqlkdxYBhYux5TIb%2FNvMFN%2BfcfeDp9vxSi54PqzVvwhPI9LDpFfQbnbeA4rL8vAo9nUbe2P%2FURAbdcJjUgC3u%2Bqiu2IykYNpVABsau7kCSDPbudqQdv02wBnPb6waCl7xSg%2FTrmxWkK0jOr7tNPo3%2B72%2BjodIUOhVivUV1BOJk9Nr7Llf0cU1lNaU1%2Fc6s%2Fi9E7lSvkkx68Rqr4njmvo3csP6H6x7K469SeMZkU6YlgpqBW%2BMD%2F9USDWMDrPhwq5DzOlbF6gj8gkVQH5RcjYnb%2F5SEwMYlIFwHs1zDqTPNQC82AvIEg1g4IqxbXQwr8S0vwY6pgEoGe7J8YtwN3uffR6tNTZaXfyWMhafao9a6ylYA%2FWeNIs1eiBg%2BDj2Vr2BAVEL915hZ8ePsGIizz9SpEdkw9lYWCa2pEcIGOqyI4GdrJsKaw3HhGLn8Rj%2Bdelgl1Vz3w87CRguouw4tQfk41J4ILnIjfszpfU2J%2B2y%2F6qnNYK9bEKQSl91iLjQxJJZxTKfJKD6sW%2B6GFNf4SVCf0FEGwyKQJ59kYLg&X-Amz-Signature=00d6aee9703732376b5669dad5c8e7ba84d1fb2adde24f4e24bfd3b8a5575f41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XYT2EG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF5efB00ILOoy2Mn%2FXcV8EIlNL4mTVTvYpEBPJ2OcbUaAiBpENBBOt5HSJITPqb0rEB%2FxG3n9XQwug7yFdxXz6IcFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuAsXamrpK867jvDuKtwDnvaqAuQ4xbNDYLQWiwXefQbMuYRcSfTLxqgxU8jRT2G3IDld3tsBTfTMqMgM1UT3%2FWXgAJGwIVVKlH%2Fcvu1UoY%2FdygA9L7VSr6AIlb5tLRdeNzW3lSn8Lcc7rQBwI6ZxuOoTpmEVzLewtsTbw4YMPTiS9Hq47fY23dKJoqgIY%2B6W5WV%2Bsy8WiFlIZHfuin9FqoCKSUUtJX%2BA3hmmZPobvMqONKyp00%2BXMG5lU9l0Vp56%2BLZ5rB35JpHFfP%2FS9JaN5FNRQy%2FfwjaI9prt6nD5dAkTXm2c%2FYiB2vkc1NASXKcmOHZGP2JyOtwwI7Ww1EVLqlkdxYBhYux5TIb%2FNvMFN%2BfcfeDp9vxSi54PqzVvwhPI9LDpFfQbnbeA4rL8vAo9nUbe2P%2FURAbdcJjUgC3u%2Bqiu2IykYNpVABsau7kCSDPbudqQdv02wBnPb6waCl7xSg%2FTrmxWkK0jOr7tNPo3%2B72%2BjodIUOhVivUV1BOJk9Nr7Llf0cU1lNaU1%2Fc6s%2Fi9E7lSvkkx68Rqr4njmvo3csP6H6x7K469SeMZkU6YlgpqBW%2BMD%2F9USDWMDrPhwq5DzOlbF6gj8gkVQH5RcjYnb%2F5SEwMYlIFwHs1zDqTPNQC82AvIEg1g4IqxbXQwr8S0vwY6pgEoGe7J8YtwN3uffR6tNTZaXfyWMhafao9a6ylYA%2FWeNIs1eiBg%2BDj2Vr2BAVEL915hZ8ePsGIizz9SpEdkw9lYWCa2pEcIGOqyI4GdrJsKaw3HhGLn8Rj%2Bdelgl1Vz3w87CRguouw4tQfk41J4ILnIjfszpfU2J%2B2y%2F6qnNYK9bEKQSl91iLjQxJJZxTKfJKD6sW%2B6GFNf4SVCf0FEGwyKQJ59kYLg&X-Amz-Signature=8573aa3f8382c1ea38acfeff96949b9e5e7890684f863aae67adec128724181b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XYT2EG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF5efB00ILOoy2Mn%2FXcV8EIlNL4mTVTvYpEBPJ2OcbUaAiBpENBBOt5HSJITPqb0rEB%2FxG3n9XQwug7yFdxXz6IcFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuAsXamrpK867jvDuKtwDnvaqAuQ4xbNDYLQWiwXefQbMuYRcSfTLxqgxU8jRT2G3IDld3tsBTfTMqMgM1UT3%2FWXgAJGwIVVKlH%2Fcvu1UoY%2FdygA9L7VSr6AIlb5tLRdeNzW3lSn8Lcc7rQBwI6ZxuOoTpmEVzLewtsTbw4YMPTiS9Hq47fY23dKJoqgIY%2B6W5WV%2Bsy8WiFlIZHfuin9FqoCKSUUtJX%2BA3hmmZPobvMqONKyp00%2BXMG5lU9l0Vp56%2BLZ5rB35JpHFfP%2FS9JaN5FNRQy%2FfwjaI9prt6nD5dAkTXm2c%2FYiB2vkc1NASXKcmOHZGP2JyOtwwI7Ww1EVLqlkdxYBhYux5TIb%2FNvMFN%2BfcfeDp9vxSi54PqzVvwhPI9LDpFfQbnbeA4rL8vAo9nUbe2P%2FURAbdcJjUgC3u%2Bqiu2IykYNpVABsau7kCSDPbudqQdv02wBnPb6waCl7xSg%2FTrmxWkK0jOr7tNPo3%2B72%2BjodIUOhVivUV1BOJk9Nr7Llf0cU1lNaU1%2Fc6s%2Fi9E7lSvkkx68Rqr4njmvo3csP6H6x7K469SeMZkU6YlgpqBW%2BMD%2F9USDWMDrPhwq5DzOlbF6gj8gkVQH5RcjYnb%2F5SEwMYlIFwHs1zDqTPNQC82AvIEg1g4IqxbXQwr8S0vwY6pgEoGe7J8YtwN3uffR6tNTZaXfyWMhafao9a6ylYA%2FWeNIs1eiBg%2BDj2Vr2BAVEL915hZ8ePsGIizz9SpEdkw9lYWCa2pEcIGOqyI4GdrJsKaw3HhGLn8Rj%2Bdelgl1Vz3w87CRguouw4tQfk41J4ILnIjfszpfU2J%2B2y%2F6qnNYK9bEKQSl91iLjQxJJZxTKfJKD6sW%2B6GFNf4SVCf0FEGwyKQJ59kYLg&X-Amz-Signature=7366b40eaed9c75352a396bf2fd75cde554c85903f8eb7e5d01a068367502704&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XYT2EG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF5efB00ILOoy2Mn%2FXcV8EIlNL4mTVTvYpEBPJ2OcbUaAiBpENBBOt5HSJITPqb0rEB%2FxG3n9XQwug7yFdxXz6IcFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuAsXamrpK867jvDuKtwDnvaqAuQ4xbNDYLQWiwXefQbMuYRcSfTLxqgxU8jRT2G3IDld3tsBTfTMqMgM1UT3%2FWXgAJGwIVVKlH%2Fcvu1UoY%2FdygA9L7VSr6AIlb5tLRdeNzW3lSn8Lcc7rQBwI6ZxuOoTpmEVzLewtsTbw4YMPTiS9Hq47fY23dKJoqgIY%2B6W5WV%2Bsy8WiFlIZHfuin9FqoCKSUUtJX%2BA3hmmZPobvMqONKyp00%2BXMG5lU9l0Vp56%2BLZ5rB35JpHFfP%2FS9JaN5FNRQy%2FfwjaI9prt6nD5dAkTXm2c%2FYiB2vkc1NASXKcmOHZGP2JyOtwwI7Ww1EVLqlkdxYBhYux5TIb%2FNvMFN%2BfcfeDp9vxSi54PqzVvwhPI9LDpFfQbnbeA4rL8vAo9nUbe2P%2FURAbdcJjUgC3u%2Bqiu2IykYNpVABsau7kCSDPbudqQdv02wBnPb6waCl7xSg%2FTrmxWkK0jOr7tNPo3%2B72%2BjodIUOhVivUV1BOJk9Nr7Llf0cU1lNaU1%2Fc6s%2Fi9E7lSvkkx68Rqr4njmvo3csP6H6x7K469SeMZkU6YlgpqBW%2BMD%2F9USDWMDrPhwq5DzOlbF6gj8gkVQH5RcjYnb%2F5SEwMYlIFwHs1zDqTPNQC82AvIEg1g4IqxbXQwr8S0vwY6pgEoGe7J8YtwN3uffR6tNTZaXfyWMhafao9a6ylYA%2FWeNIs1eiBg%2BDj2Vr2BAVEL915hZ8ePsGIizz9SpEdkw9lYWCa2pEcIGOqyI4GdrJsKaw3HhGLn8Rj%2Bdelgl1Vz3w87CRguouw4tQfk41J4ILnIjfszpfU2J%2B2y%2F6qnNYK9bEKQSl91iLjQxJJZxTKfJKD6sW%2B6GFNf4SVCf0FEGwyKQJ59kYLg&X-Amz-Signature=48495fc244f51227c61f40960f3794424e6bd9027cd202eb555ae3d6fe479da9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XYT2EG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF5efB00ILOoy2Mn%2FXcV8EIlNL4mTVTvYpEBPJ2OcbUaAiBpENBBOt5HSJITPqb0rEB%2FxG3n9XQwug7yFdxXz6IcFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuAsXamrpK867jvDuKtwDnvaqAuQ4xbNDYLQWiwXefQbMuYRcSfTLxqgxU8jRT2G3IDld3tsBTfTMqMgM1UT3%2FWXgAJGwIVVKlH%2Fcvu1UoY%2FdygA9L7VSr6AIlb5tLRdeNzW3lSn8Lcc7rQBwI6ZxuOoTpmEVzLewtsTbw4YMPTiS9Hq47fY23dKJoqgIY%2B6W5WV%2Bsy8WiFlIZHfuin9FqoCKSUUtJX%2BA3hmmZPobvMqONKyp00%2BXMG5lU9l0Vp56%2BLZ5rB35JpHFfP%2FS9JaN5FNRQy%2FfwjaI9prt6nD5dAkTXm2c%2FYiB2vkc1NASXKcmOHZGP2JyOtwwI7Ww1EVLqlkdxYBhYux5TIb%2FNvMFN%2BfcfeDp9vxSi54PqzVvwhPI9LDpFfQbnbeA4rL8vAo9nUbe2P%2FURAbdcJjUgC3u%2Bqiu2IykYNpVABsau7kCSDPbudqQdv02wBnPb6waCl7xSg%2FTrmxWkK0jOr7tNPo3%2B72%2BjodIUOhVivUV1BOJk9Nr7Llf0cU1lNaU1%2Fc6s%2Fi9E7lSvkkx68Rqr4njmvo3csP6H6x7K469SeMZkU6YlgpqBW%2BMD%2F9USDWMDrPhwq5DzOlbF6gj8gkVQH5RcjYnb%2F5SEwMYlIFwHs1zDqTPNQC82AvIEg1g4IqxbXQwr8S0vwY6pgEoGe7J8YtwN3uffR6tNTZaXfyWMhafao9a6ylYA%2FWeNIs1eiBg%2BDj2Vr2BAVEL915hZ8ePsGIizz9SpEdkw9lYWCa2pEcIGOqyI4GdrJsKaw3HhGLn8Rj%2Bdelgl1Vz3w87CRguouw4tQfk41J4ILnIjfszpfU2J%2B2y%2F6qnNYK9bEKQSl91iLjQxJJZxTKfJKD6sW%2B6GFNf4SVCf0FEGwyKQJ59kYLg&X-Amz-Signature=fe3e3a30b3d607158263b0a80665f2684e6100199df361dbe3c186f924d6ed0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
