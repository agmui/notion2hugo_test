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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKV34DW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUPqYLrMsQ89i%2Fj0yYKQnxSFwKnlYZ7LM1WYdW8tFAAiBOq7dDBiP2lDFlJn6d6tUW5Fej1y9DSnoQngtuJNGioir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOUGbTi%2BzGItzUTxZKtwDkNgQf68d6PK6n2bOPCvm6JjcC2Bso9J%2BBRAZWa5zVjAoAp0GNQyeBGi0aw4I0lZx65Y9LeB5wcpQQuTvQI9bcKZMqDwpl7Q%2BtqQZdfU3AIJbQmz5rWYHGlvsfwTCEWtmfuqDIsayPejYC9naBiYnSuuieBGJPqizZVIjLrfK3q3LmKZu2U7tRgoYTGTiN1YUaSuxoywGWKbcITTetPsI9XMd6jzWUzco4adTpR3DJy%2FyvhP2541auE1ITpgJzcvkIWCKPJFJPHR%2Bz9Kux1%2FGVPKj1c6guASC7dukYVTOrs%2BXMCztog5ypY%2FZh5lXKxHKxLnY0Uk%2BdoOVoZojyFV%2BC7WxBml4X7SzZX0ddzIRFm067gYb4zykVS%2FObfmWRzYXxpMf49D%2Bzzzdbpo79kCVpsP%2BFU3d4eds0XI6cwuCEOL7x95U3TnsU%2F9Hq08suC23cHf8NMbgt%2F6LQeMnkELJGTjn3ZE8yDRUPCbhz5g8OD4gheTB8zGLs%2FbdB35vG9StSqLJ6VaP7YhKCm7iHJNz4ImnrFzUmdGqy1OoCB%2FPns7O6vKmGdSp0KGW70IZyUSfPLGTJYQBpwv535I%2FmXWLGNtK0mENEJJ%2F5eUkU9QfJsaI06ffHgkfqhP%2FwhMwkfqPwgY6pgFzE%2BkLodqg4ZHgC%2Buiv3VHXX1yQuaCMwtYgW5m5MlttM4NB9%2FtatQ53vXLsxWmz2Qu%2BKrJYCBknhnPtpS2IYV55tkU7ia%2BvGSrFl71dfkfNqPFityKpWS1NhWeKhSgT1E48lY82a1bJZNj%2Bex3mT4ywYg2%2BKx7j4yQUABSsO61klXp2RCKy5N4Bj6966UbIqy6vKs%2FxTSHFd8MyClwYBjZ04s3O0ur&X-Amz-Signature=61d4ab60ec132980629692d02cf7f3a9d83868ef07c91543f23e02d6ec15133b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKV34DW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUPqYLrMsQ89i%2Fj0yYKQnxSFwKnlYZ7LM1WYdW8tFAAiBOq7dDBiP2lDFlJn6d6tUW5Fej1y9DSnoQngtuJNGioir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOUGbTi%2BzGItzUTxZKtwDkNgQf68d6PK6n2bOPCvm6JjcC2Bso9J%2BBRAZWa5zVjAoAp0GNQyeBGi0aw4I0lZx65Y9LeB5wcpQQuTvQI9bcKZMqDwpl7Q%2BtqQZdfU3AIJbQmz5rWYHGlvsfwTCEWtmfuqDIsayPejYC9naBiYnSuuieBGJPqizZVIjLrfK3q3LmKZu2U7tRgoYTGTiN1YUaSuxoywGWKbcITTetPsI9XMd6jzWUzco4adTpR3DJy%2FyvhP2541auE1ITpgJzcvkIWCKPJFJPHR%2Bz9Kux1%2FGVPKj1c6guASC7dukYVTOrs%2BXMCztog5ypY%2FZh5lXKxHKxLnY0Uk%2BdoOVoZojyFV%2BC7WxBml4X7SzZX0ddzIRFm067gYb4zykVS%2FObfmWRzYXxpMf49D%2Bzzzdbpo79kCVpsP%2BFU3d4eds0XI6cwuCEOL7x95U3TnsU%2F9Hq08suC23cHf8NMbgt%2F6LQeMnkELJGTjn3ZE8yDRUPCbhz5g8OD4gheTB8zGLs%2FbdB35vG9StSqLJ6VaP7YhKCm7iHJNz4ImnrFzUmdGqy1OoCB%2FPns7O6vKmGdSp0KGW70IZyUSfPLGTJYQBpwv535I%2FmXWLGNtK0mENEJJ%2F5eUkU9QfJsaI06ffHgkfqhP%2FwhMwkfqPwgY6pgFzE%2BkLodqg4ZHgC%2Buiv3VHXX1yQuaCMwtYgW5m5MlttM4NB9%2FtatQ53vXLsxWmz2Qu%2BKrJYCBknhnPtpS2IYV55tkU7ia%2BvGSrFl71dfkfNqPFityKpWS1NhWeKhSgT1E48lY82a1bJZNj%2Bex3mT4ywYg2%2BKx7j4yQUABSsO61klXp2RCKy5N4Bj6966UbIqy6vKs%2FxTSHFd8MyClwYBjZ04s3O0ur&X-Amz-Signature=b24d94d34a25895277f7262b31d46318f8c0f88f45b051857269009dc39f0049&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKV34DW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUPqYLrMsQ89i%2Fj0yYKQnxSFwKnlYZ7LM1WYdW8tFAAiBOq7dDBiP2lDFlJn6d6tUW5Fej1y9DSnoQngtuJNGioir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOUGbTi%2BzGItzUTxZKtwDkNgQf68d6PK6n2bOPCvm6JjcC2Bso9J%2BBRAZWa5zVjAoAp0GNQyeBGi0aw4I0lZx65Y9LeB5wcpQQuTvQI9bcKZMqDwpl7Q%2BtqQZdfU3AIJbQmz5rWYHGlvsfwTCEWtmfuqDIsayPejYC9naBiYnSuuieBGJPqizZVIjLrfK3q3LmKZu2U7tRgoYTGTiN1YUaSuxoywGWKbcITTetPsI9XMd6jzWUzco4adTpR3DJy%2FyvhP2541auE1ITpgJzcvkIWCKPJFJPHR%2Bz9Kux1%2FGVPKj1c6guASC7dukYVTOrs%2BXMCztog5ypY%2FZh5lXKxHKxLnY0Uk%2BdoOVoZojyFV%2BC7WxBml4X7SzZX0ddzIRFm067gYb4zykVS%2FObfmWRzYXxpMf49D%2Bzzzdbpo79kCVpsP%2BFU3d4eds0XI6cwuCEOL7x95U3TnsU%2F9Hq08suC23cHf8NMbgt%2F6LQeMnkELJGTjn3ZE8yDRUPCbhz5g8OD4gheTB8zGLs%2FbdB35vG9StSqLJ6VaP7YhKCm7iHJNz4ImnrFzUmdGqy1OoCB%2FPns7O6vKmGdSp0KGW70IZyUSfPLGTJYQBpwv535I%2FmXWLGNtK0mENEJJ%2F5eUkU9QfJsaI06ffHgkfqhP%2FwhMwkfqPwgY6pgFzE%2BkLodqg4ZHgC%2Buiv3VHXX1yQuaCMwtYgW5m5MlttM4NB9%2FtatQ53vXLsxWmz2Qu%2BKrJYCBknhnPtpS2IYV55tkU7ia%2BvGSrFl71dfkfNqPFityKpWS1NhWeKhSgT1E48lY82a1bJZNj%2Bex3mT4ywYg2%2BKx7j4yQUABSsO61klXp2RCKy5N4Bj6966UbIqy6vKs%2FxTSHFd8MyClwYBjZ04s3O0ur&X-Amz-Signature=d66bfc3f5283563f8026e10b2d6f958ca009404a67cff1d06850fa3217b19c75&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKV34DW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUPqYLrMsQ89i%2Fj0yYKQnxSFwKnlYZ7LM1WYdW8tFAAiBOq7dDBiP2lDFlJn6d6tUW5Fej1y9DSnoQngtuJNGioir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOUGbTi%2BzGItzUTxZKtwDkNgQf68d6PK6n2bOPCvm6JjcC2Bso9J%2BBRAZWa5zVjAoAp0GNQyeBGi0aw4I0lZx65Y9LeB5wcpQQuTvQI9bcKZMqDwpl7Q%2BtqQZdfU3AIJbQmz5rWYHGlvsfwTCEWtmfuqDIsayPejYC9naBiYnSuuieBGJPqizZVIjLrfK3q3LmKZu2U7tRgoYTGTiN1YUaSuxoywGWKbcITTetPsI9XMd6jzWUzco4adTpR3DJy%2FyvhP2541auE1ITpgJzcvkIWCKPJFJPHR%2Bz9Kux1%2FGVPKj1c6guASC7dukYVTOrs%2BXMCztog5ypY%2FZh5lXKxHKxLnY0Uk%2BdoOVoZojyFV%2BC7WxBml4X7SzZX0ddzIRFm067gYb4zykVS%2FObfmWRzYXxpMf49D%2Bzzzdbpo79kCVpsP%2BFU3d4eds0XI6cwuCEOL7x95U3TnsU%2F9Hq08suC23cHf8NMbgt%2F6LQeMnkELJGTjn3ZE8yDRUPCbhz5g8OD4gheTB8zGLs%2FbdB35vG9StSqLJ6VaP7YhKCm7iHJNz4ImnrFzUmdGqy1OoCB%2FPns7O6vKmGdSp0KGW70IZyUSfPLGTJYQBpwv535I%2FmXWLGNtK0mENEJJ%2F5eUkU9QfJsaI06ffHgkfqhP%2FwhMwkfqPwgY6pgFzE%2BkLodqg4ZHgC%2Buiv3VHXX1yQuaCMwtYgW5m5MlttM4NB9%2FtatQ53vXLsxWmz2Qu%2BKrJYCBknhnPtpS2IYV55tkU7ia%2BvGSrFl71dfkfNqPFityKpWS1NhWeKhSgT1E48lY82a1bJZNj%2Bex3mT4ywYg2%2BKx7j4yQUABSsO61klXp2RCKy5N4Bj6966UbIqy6vKs%2FxTSHFd8MyClwYBjZ04s3O0ur&X-Amz-Signature=f2f50e9ba31b0d0936b97b101598bde92274a134ea7b6ef543159d13e193fa07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKV34DW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUPqYLrMsQ89i%2Fj0yYKQnxSFwKnlYZ7LM1WYdW8tFAAiBOq7dDBiP2lDFlJn6d6tUW5Fej1y9DSnoQngtuJNGioir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOUGbTi%2BzGItzUTxZKtwDkNgQf68d6PK6n2bOPCvm6JjcC2Bso9J%2BBRAZWa5zVjAoAp0GNQyeBGi0aw4I0lZx65Y9LeB5wcpQQuTvQI9bcKZMqDwpl7Q%2BtqQZdfU3AIJbQmz5rWYHGlvsfwTCEWtmfuqDIsayPejYC9naBiYnSuuieBGJPqizZVIjLrfK3q3LmKZu2U7tRgoYTGTiN1YUaSuxoywGWKbcITTetPsI9XMd6jzWUzco4adTpR3DJy%2FyvhP2541auE1ITpgJzcvkIWCKPJFJPHR%2Bz9Kux1%2FGVPKj1c6guASC7dukYVTOrs%2BXMCztog5ypY%2FZh5lXKxHKxLnY0Uk%2BdoOVoZojyFV%2BC7WxBml4X7SzZX0ddzIRFm067gYb4zykVS%2FObfmWRzYXxpMf49D%2Bzzzdbpo79kCVpsP%2BFU3d4eds0XI6cwuCEOL7x95U3TnsU%2F9Hq08suC23cHf8NMbgt%2F6LQeMnkELJGTjn3ZE8yDRUPCbhz5g8OD4gheTB8zGLs%2FbdB35vG9StSqLJ6VaP7YhKCm7iHJNz4ImnrFzUmdGqy1OoCB%2FPns7O6vKmGdSp0KGW70IZyUSfPLGTJYQBpwv535I%2FmXWLGNtK0mENEJJ%2F5eUkU9QfJsaI06ffHgkfqhP%2FwhMwkfqPwgY6pgFzE%2BkLodqg4ZHgC%2Buiv3VHXX1yQuaCMwtYgW5m5MlttM4NB9%2FtatQ53vXLsxWmz2Qu%2BKrJYCBknhnPtpS2IYV55tkU7ia%2BvGSrFl71dfkfNqPFityKpWS1NhWeKhSgT1E48lY82a1bJZNj%2Bex3mT4ywYg2%2BKx7j4yQUABSsO61klXp2RCKy5N4Bj6966UbIqy6vKs%2FxTSHFd8MyClwYBjZ04s3O0ur&X-Amz-Signature=402192fb458ea2d693de2bd3ce9d2690092801789d0c96a8ce15114347529b91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKV34DW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUPqYLrMsQ89i%2Fj0yYKQnxSFwKnlYZ7LM1WYdW8tFAAiBOq7dDBiP2lDFlJn6d6tUW5Fej1y9DSnoQngtuJNGioir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOUGbTi%2BzGItzUTxZKtwDkNgQf68d6PK6n2bOPCvm6JjcC2Bso9J%2BBRAZWa5zVjAoAp0GNQyeBGi0aw4I0lZx65Y9LeB5wcpQQuTvQI9bcKZMqDwpl7Q%2BtqQZdfU3AIJbQmz5rWYHGlvsfwTCEWtmfuqDIsayPejYC9naBiYnSuuieBGJPqizZVIjLrfK3q3LmKZu2U7tRgoYTGTiN1YUaSuxoywGWKbcITTetPsI9XMd6jzWUzco4adTpR3DJy%2FyvhP2541auE1ITpgJzcvkIWCKPJFJPHR%2Bz9Kux1%2FGVPKj1c6guASC7dukYVTOrs%2BXMCztog5ypY%2FZh5lXKxHKxLnY0Uk%2BdoOVoZojyFV%2BC7WxBml4X7SzZX0ddzIRFm067gYb4zykVS%2FObfmWRzYXxpMf49D%2Bzzzdbpo79kCVpsP%2BFU3d4eds0XI6cwuCEOL7x95U3TnsU%2F9Hq08suC23cHf8NMbgt%2F6LQeMnkELJGTjn3ZE8yDRUPCbhz5g8OD4gheTB8zGLs%2FbdB35vG9StSqLJ6VaP7YhKCm7iHJNz4ImnrFzUmdGqy1OoCB%2FPns7O6vKmGdSp0KGW70IZyUSfPLGTJYQBpwv535I%2FmXWLGNtK0mENEJJ%2F5eUkU9QfJsaI06ffHgkfqhP%2FwhMwkfqPwgY6pgFzE%2BkLodqg4ZHgC%2Buiv3VHXX1yQuaCMwtYgW5m5MlttM4NB9%2FtatQ53vXLsxWmz2Qu%2BKrJYCBknhnPtpS2IYV55tkU7ia%2BvGSrFl71dfkfNqPFityKpWS1NhWeKhSgT1E48lY82a1bJZNj%2Bex3mT4ywYg2%2BKx7j4yQUABSsO61klXp2RCKy5N4Bj6966UbIqy6vKs%2FxTSHFd8MyClwYBjZ04s3O0ur&X-Amz-Signature=63af7512f8f56abc019137afbca326902454ff57f13dc50149336be6f9c6e58f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKV34DW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUPqYLrMsQ89i%2Fj0yYKQnxSFwKnlYZ7LM1WYdW8tFAAiBOq7dDBiP2lDFlJn6d6tUW5Fej1y9DSnoQngtuJNGioir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOUGbTi%2BzGItzUTxZKtwDkNgQf68d6PK6n2bOPCvm6JjcC2Bso9J%2BBRAZWa5zVjAoAp0GNQyeBGi0aw4I0lZx65Y9LeB5wcpQQuTvQI9bcKZMqDwpl7Q%2BtqQZdfU3AIJbQmz5rWYHGlvsfwTCEWtmfuqDIsayPejYC9naBiYnSuuieBGJPqizZVIjLrfK3q3LmKZu2U7tRgoYTGTiN1YUaSuxoywGWKbcITTetPsI9XMd6jzWUzco4adTpR3DJy%2FyvhP2541auE1ITpgJzcvkIWCKPJFJPHR%2Bz9Kux1%2FGVPKj1c6guASC7dukYVTOrs%2BXMCztog5ypY%2FZh5lXKxHKxLnY0Uk%2BdoOVoZojyFV%2BC7WxBml4X7SzZX0ddzIRFm067gYb4zykVS%2FObfmWRzYXxpMf49D%2Bzzzdbpo79kCVpsP%2BFU3d4eds0XI6cwuCEOL7x95U3TnsU%2F9Hq08suC23cHf8NMbgt%2F6LQeMnkELJGTjn3ZE8yDRUPCbhz5g8OD4gheTB8zGLs%2FbdB35vG9StSqLJ6VaP7YhKCm7iHJNz4ImnrFzUmdGqy1OoCB%2FPns7O6vKmGdSp0KGW70IZyUSfPLGTJYQBpwv535I%2FmXWLGNtK0mENEJJ%2F5eUkU9QfJsaI06ffHgkfqhP%2FwhMwkfqPwgY6pgFzE%2BkLodqg4ZHgC%2Buiv3VHXX1yQuaCMwtYgW5m5MlttM4NB9%2FtatQ53vXLsxWmz2Qu%2BKrJYCBknhnPtpS2IYV55tkU7ia%2BvGSrFl71dfkfNqPFityKpWS1NhWeKhSgT1E48lY82a1bJZNj%2Bex3mT4ywYg2%2BKx7j4yQUABSsO61klXp2RCKy5N4Bj6966UbIqy6vKs%2FxTSHFd8MyClwYBjZ04s3O0ur&X-Amz-Signature=98c1ced8e8df2d2c4a0dbcf32c33b4f084fe9a179367afb9d528d51623fd065a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKV34DW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUPqYLrMsQ89i%2Fj0yYKQnxSFwKnlYZ7LM1WYdW8tFAAiBOq7dDBiP2lDFlJn6d6tUW5Fej1y9DSnoQngtuJNGioir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOUGbTi%2BzGItzUTxZKtwDkNgQf68d6PK6n2bOPCvm6JjcC2Bso9J%2BBRAZWa5zVjAoAp0GNQyeBGi0aw4I0lZx65Y9LeB5wcpQQuTvQI9bcKZMqDwpl7Q%2BtqQZdfU3AIJbQmz5rWYHGlvsfwTCEWtmfuqDIsayPejYC9naBiYnSuuieBGJPqizZVIjLrfK3q3LmKZu2U7tRgoYTGTiN1YUaSuxoywGWKbcITTetPsI9XMd6jzWUzco4adTpR3DJy%2FyvhP2541auE1ITpgJzcvkIWCKPJFJPHR%2Bz9Kux1%2FGVPKj1c6guASC7dukYVTOrs%2BXMCztog5ypY%2FZh5lXKxHKxLnY0Uk%2BdoOVoZojyFV%2BC7WxBml4X7SzZX0ddzIRFm067gYb4zykVS%2FObfmWRzYXxpMf49D%2Bzzzdbpo79kCVpsP%2BFU3d4eds0XI6cwuCEOL7x95U3TnsU%2F9Hq08suC23cHf8NMbgt%2F6LQeMnkELJGTjn3ZE8yDRUPCbhz5g8OD4gheTB8zGLs%2FbdB35vG9StSqLJ6VaP7YhKCm7iHJNz4ImnrFzUmdGqy1OoCB%2FPns7O6vKmGdSp0KGW70IZyUSfPLGTJYQBpwv535I%2FmXWLGNtK0mENEJJ%2F5eUkU9QfJsaI06ffHgkfqhP%2FwhMwkfqPwgY6pgFzE%2BkLodqg4ZHgC%2Buiv3VHXX1yQuaCMwtYgW5m5MlttM4NB9%2FtatQ53vXLsxWmz2Qu%2BKrJYCBknhnPtpS2IYV55tkU7ia%2BvGSrFl71dfkfNqPFityKpWS1NhWeKhSgT1E48lY82a1bJZNj%2Bex3mT4ywYg2%2BKx7j4yQUABSsO61klXp2RCKy5N4Bj6966UbIqy6vKs%2FxTSHFd8MyClwYBjZ04s3O0ur&X-Amz-Signature=36822aef4af5db61ba65d6566cc3cad16424fc35d2b05c0c9ca42565ef13adb7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
