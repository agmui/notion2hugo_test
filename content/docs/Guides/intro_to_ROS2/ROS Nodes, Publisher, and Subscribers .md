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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6ANIJO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH%2BFvgeb46xqI6UsmPS6uAeeoNRY8%2BAfxpC21Jz42cP7AiEA20ltGlurhBfBjUkq39DmlfRu3VG1XUP2%2FQu4zVx7JbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKou%2FsAKjFFYas%2BT5yrcA3pGLtq8gbjr2PnpaCSbPQp2RCGev90oits9yUmZKGz2a8SOXiS92e%2Bi7n8QYSFyvFvkmQYgf4NXRuYXSpC77iwuv1zYRUlajo1i5mMkJRhERfd%2BDIE5aCg4mz83ZeJHTmvejr9ARlvDShr4LeCTHlhB3FhHwWd5La%2FPSPXkiVIKLqbAO0GvSQ%2BpxxBkHmfj32liLB6bUUQMqsLCQBosP4FHt8vtr50NDFWXa7RzXkXeqtkOGB4N0cF7B7ErFmdbQAvG9zbBmql3cgoFhb5f5czIlVXUQwhFV3WcTriLGIpqdj2QHkgkR87A%2BDuXq2kF4NMp6XgPYT4qvaVba%2B1ZgNf30228UZ3%2FWgkFopzA3AGiID%2FxE3qs5eOLu8XUgbpTlShRSqkfVRaCUlmOrYRF4PLGXJIzDvJqalvZOjVj26qiDBhWDh3F%2BmLKDPb9OY5jEP9iBnXQtUH8dvreB7Q7hdw%2BtiPH0P%2BEHlfYyVAqWry%2FFgDqs8MPnP3j8focrcVzxx9%2FW%2F3rj3Rub4YCaBq61Quwg%2BGZZ9wk7KQ3u3rCi94%2B6JeJwPYq2XaXMDgaqpSQQ4ndzxkCevB5eW%2FBWbLdaTwaI4d46BozeJOHOmEUFieL2chFeGQlZcwrC%2BSSMMSPiMQGOqUBxkVzXf3YNwS9%2BuWzBBXdd5SO0t%2FqdS15iasIIct7NFuSRIKy1F0GETWyv5TSWqBvW55ccP1PZDPjOv0xB3xKTyYjGFSl6ol5N0iwyGJRSpogLqAXhq2tNtqv0Atz96wa2%2FbvyvhxtrWHp2o4EDE1QwZbqAw3spxZToF%2BFT4Tp0PLizL%2BAPZ9zEYCG7Twiqn0DSrL3Ex4PIRNAdZ3lQoi27nfcDSW&X-Amz-Signature=aac03f141bbf4a49489cf7d0d9c22900e5193b605fb35ccde762eb90657b8587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6ANIJO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH%2BFvgeb46xqI6UsmPS6uAeeoNRY8%2BAfxpC21Jz42cP7AiEA20ltGlurhBfBjUkq39DmlfRu3VG1XUP2%2FQu4zVx7JbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKou%2FsAKjFFYas%2BT5yrcA3pGLtq8gbjr2PnpaCSbPQp2RCGev90oits9yUmZKGz2a8SOXiS92e%2Bi7n8QYSFyvFvkmQYgf4NXRuYXSpC77iwuv1zYRUlajo1i5mMkJRhERfd%2BDIE5aCg4mz83ZeJHTmvejr9ARlvDShr4LeCTHlhB3FhHwWd5La%2FPSPXkiVIKLqbAO0GvSQ%2BpxxBkHmfj32liLB6bUUQMqsLCQBosP4FHt8vtr50NDFWXa7RzXkXeqtkOGB4N0cF7B7ErFmdbQAvG9zbBmql3cgoFhb5f5czIlVXUQwhFV3WcTriLGIpqdj2QHkgkR87A%2BDuXq2kF4NMp6XgPYT4qvaVba%2B1ZgNf30228UZ3%2FWgkFopzA3AGiID%2FxE3qs5eOLu8XUgbpTlShRSqkfVRaCUlmOrYRF4PLGXJIzDvJqalvZOjVj26qiDBhWDh3F%2BmLKDPb9OY5jEP9iBnXQtUH8dvreB7Q7hdw%2BtiPH0P%2BEHlfYyVAqWry%2FFgDqs8MPnP3j8focrcVzxx9%2FW%2F3rj3Rub4YCaBq61Quwg%2BGZZ9wk7KQ3u3rCi94%2B6JeJwPYq2XaXMDgaqpSQQ4ndzxkCevB5eW%2FBWbLdaTwaI4d46BozeJOHOmEUFieL2chFeGQlZcwrC%2BSSMMSPiMQGOqUBxkVzXf3YNwS9%2BuWzBBXdd5SO0t%2FqdS15iasIIct7NFuSRIKy1F0GETWyv5TSWqBvW55ccP1PZDPjOv0xB3xKTyYjGFSl6ol5N0iwyGJRSpogLqAXhq2tNtqv0Atz96wa2%2FbvyvhxtrWHp2o4EDE1QwZbqAw3spxZToF%2BFT4Tp0PLizL%2BAPZ9zEYCG7Twiqn0DSrL3Ex4PIRNAdZ3lQoi27nfcDSW&X-Amz-Signature=727bed80d1e39b4e61c222e2cd82de9bc529130b1e9f9aef2300b4738e3a5d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6ANIJO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH%2BFvgeb46xqI6UsmPS6uAeeoNRY8%2BAfxpC21Jz42cP7AiEA20ltGlurhBfBjUkq39DmlfRu3VG1XUP2%2FQu4zVx7JbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKou%2FsAKjFFYas%2BT5yrcA3pGLtq8gbjr2PnpaCSbPQp2RCGev90oits9yUmZKGz2a8SOXiS92e%2Bi7n8QYSFyvFvkmQYgf4NXRuYXSpC77iwuv1zYRUlajo1i5mMkJRhERfd%2BDIE5aCg4mz83ZeJHTmvejr9ARlvDShr4LeCTHlhB3FhHwWd5La%2FPSPXkiVIKLqbAO0GvSQ%2BpxxBkHmfj32liLB6bUUQMqsLCQBosP4FHt8vtr50NDFWXa7RzXkXeqtkOGB4N0cF7B7ErFmdbQAvG9zbBmql3cgoFhb5f5czIlVXUQwhFV3WcTriLGIpqdj2QHkgkR87A%2BDuXq2kF4NMp6XgPYT4qvaVba%2B1ZgNf30228UZ3%2FWgkFopzA3AGiID%2FxE3qs5eOLu8XUgbpTlShRSqkfVRaCUlmOrYRF4PLGXJIzDvJqalvZOjVj26qiDBhWDh3F%2BmLKDPb9OY5jEP9iBnXQtUH8dvreB7Q7hdw%2BtiPH0P%2BEHlfYyVAqWry%2FFgDqs8MPnP3j8focrcVzxx9%2FW%2F3rj3Rub4YCaBq61Quwg%2BGZZ9wk7KQ3u3rCi94%2B6JeJwPYq2XaXMDgaqpSQQ4ndzxkCevB5eW%2FBWbLdaTwaI4d46BozeJOHOmEUFieL2chFeGQlZcwrC%2BSSMMSPiMQGOqUBxkVzXf3YNwS9%2BuWzBBXdd5SO0t%2FqdS15iasIIct7NFuSRIKy1F0GETWyv5TSWqBvW55ccP1PZDPjOv0xB3xKTyYjGFSl6ol5N0iwyGJRSpogLqAXhq2tNtqv0Atz96wa2%2FbvyvhxtrWHp2o4EDE1QwZbqAw3spxZToF%2BFT4Tp0PLizL%2BAPZ9zEYCG7Twiqn0DSrL3Ex4PIRNAdZ3lQoi27nfcDSW&X-Amz-Signature=02f972d12fca85c5d05f32e6f0d956db367042347e40ac70c584bd6a1ebb9035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6ANIJO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH%2BFvgeb46xqI6UsmPS6uAeeoNRY8%2BAfxpC21Jz42cP7AiEA20ltGlurhBfBjUkq39DmlfRu3VG1XUP2%2FQu4zVx7JbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKou%2FsAKjFFYas%2BT5yrcA3pGLtq8gbjr2PnpaCSbPQp2RCGev90oits9yUmZKGz2a8SOXiS92e%2Bi7n8QYSFyvFvkmQYgf4NXRuYXSpC77iwuv1zYRUlajo1i5mMkJRhERfd%2BDIE5aCg4mz83ZeJHTmvejr9ARlvDShr4LeCTHlhB3FhHwWd5La%2FPSPXkiVIKLqbAO0GvSQ%2BpxxBkHmfj32liLB6bUUQMqsLCQBosP4FHt8vtr50NDFWXa7RzXkXeqtkOGB4N0cF7B7ErFmdbQAvG9zbBmql3cgoFhb5f5czIlVXUQwhFV3WcTriLGIpqdj2QHkgkR87A%2BDuXq2kF4NMp6XgPYT4qvaVba%2B1ZgNf30228UZ3%2FWgkFopzA3AGiID%2FxE3qs5eOLu8XUgbpTlShRSqkfVRaCUlmOrYRF4PLGXJIzDvJqalvZOjVj26qiDBhWDh3F%2BmLKDPb9OY5jEP9iBnXQtUH8dvreB7Q7hdw%2BtiPH0P%2BEHlfYyVAqWry%2FFgDqs8MPnP3j8focrcVzxx9%2FW%2F3rj3Rub4YCaBq61Quwg%2BGZZ9wk7KQ3u3rCi94%2B6JeJwPYq2XaXMDgaqpSQQ4ndzxkCevB5eW%2FBWbLdaTwaI4d46BozeJOHOmEUFieL2chFeGQlZcwrC%2BSSMMSPiMQGOqUBxkVzXf3YNwS9%2BuWzBBXdd5SO0t%2FqdS15iasIIct7NFuSRIKy1F0GETWyv5TSWqBvW55ccP1PZDPjOv0xB3xKTyYjGFSl6ol5N0iwyGJRSpogLqAXhq2tNtqv0Atz96wa2%2FbvyvhxtrWHp2o4EDE1QwZbqAw3spxZToF%2BFT4Tp0PLizL%2BAPZ9zEYCG7Twiqn0DSrL3Ex4PIRNAdZ3lQoi27nfcDSW&X-Amz-Signature=93fb5baa3e502ea8943ec1e96caa76fdd6e78ddb312fe5839e28c760feee13a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6ANIJO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH%2BFvgeb46xqI6UsmPS6uAeeoNRY8%2BAfxpC21Jz42cP7AiEA20ltGlurhBfBjUkq39DmlfRu3VG1XUP2%2FQu4zVx7JbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKou%2FsAKjFFYas%2BT5yrcA3pGLtq8gbjr2PnpaCSbPQp2RCGev90oits9yUmZKGz2a8SOXiS92e%2Bi7n8QYSFyvFvkmQYgf4NXRuYXSpC77iwuv1zYRUlajo1i5mMkJRhERfd%2BDIE5aCg4mz83ZeJHTmvejr9ARlvDShr4LeCTHlhB3FhHwWd5La%2FPSPXkiVIKLqbAO0GvSQ%2BpxxBkHmfj32liLB6bUUQMqsLCQBosP4FHt8vtr50NDFWXa7RzXkXeqtkOGB4N0cF7B7ErFmdbQAvG9zbBmql3cgoFhb5f5czIlVXUQwhFV3WcTriLGIpqdj2QHkgkR87A%2BDuXq2kF4NMp6XgPYT4qvaVba%2B1ZgNf30228UZ3%2FWgkFopzA3AGiID%2FxE3qs5eOLu8XUgbpTlShRSqkfVRaCUlmOrYRF4PLGXJIzDvJqalvZOjVj26qiDBhWDh3F%2BmLKDPb9OY5jEP9iBnXQtUH8dvreB7Q7hdw%2BtiPH0P%2BEHlfYyVAqWry%2FFgDqs8MPnP3j8focrcVzxx9%2FW%2F3rj3Rub4YCaBq61Quwg%2BGZZ9wk7KQ3u3rCi94%2B6JeJwPYq2XaXMDgaqpSQQ4ndzxkCevB5eW%2FBWbLdaTwaI4d46BozeJOHOmEUFieL2chFeGQlZcwrC%2BSSMMSPiMQGOqUBxkVzXf3YNwS9%2BuWzBBXdd5SO0t%2FqdS15iasIIct7NFuSRIKy1F0GETWyv5TSWqBvW55ccP1PZDPjOv0xB3xKTyYjGFSl6ol5N0iwyGJRSpogLqAXhq2tNtqv0Atz96wa2%2FbvyvhxtrWHp2o4EDE1QwZbqAw3spxZToF%2BFT4Tp0PLizL%2BAPZ9zEYCG7Twiqn0DSrL3Ex4PIRNAdZ3lQoi27nfcDSW&X-Amz-Signature=ccf78958deb01918614f24443f99115ab0198ddf9e53ae5bc73525e5401e9fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6ANIJO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH%2BFvgeb46xqI6UsmPS6uAeeoNRY8%2BAfxpC21Jz42cP7AiEA20ltGlurhBfBjUkq39DmlfRu3VG1XUP2%2FQu4zVx7JbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKou%2FsAKjFFYas%2BT5yrcA3pGLtq8gbjr2PnpaCSbPQp2RCGev90oits9yUmZKGz2a8SOXiS92e%2Bi7n8QYSFyvFvkmQYgf4NXRuYXSpC77iwuv1zYRUlajo1i5mMkJRhERfd%2BDIE5aCg4mz83ZeJHTmvejr9ARlvDShr4LeCTHlhB3FhHwWd5La%2FPSPXkiVIKLqbAO0GvSQ%2BpxxBkHmfj32liLB6bUUQMqsLCQBosP4FHt8vtr50NDFWXa7RzXkXeqtkOGB4N0cF7B7ErFmdbQAvG9zbBmql3cgoFhb5f5czIlVXUQwhFV3WcTriLGIpqdj2QHkgkR87A%2BDuXq2kF4NMp6XgPYT4qvaVba%2B1ZgNf30228UZ3%2FWgkFopzA3AGiID%2FxE3qs5eOLu8XUgbpTlShRSqkfVRaCUlmOrYRF4PLGXJIzDvJqalvZOjVj26qiDBhWDh3F%2BmLKDPb9OY5jEP9iBnXQtUH8dvreB7Q7hdw%2BtiPH0P%2BEHlfYyVAqWry%2FFgDqs8MPnP3j8focrcVzxx9%2FW%2F3rj3Rub4YCaBq61Quwg%2BGZZ9wk7KQ3u3rCi94%2B6JeJwPYq2XaXMDgaqpSQQ4ndzxkCevB5eW%2FBWbLdaTwaI4d46BozeJOHOmEUFieL2chFeGQlZcwrC%2BSSMMSPiMQGOqUBxkVzXf3YNwS9%2BuWzBBXdd5SO0t%2FqdS15iasIIct7NFuSRIKy1F0GETWyv5TSWqBvW55ccP1PZDPjOv0xB3xKTyYjGFSl6ol5N0iwyGJRSpogLqAXhq2tNtqv0Atz96wa2%2FbvyvhxtrWHp2o4EDE1QwZbqAw3spxZToF%2BFT4Tp0PLizL%2BAPZ9zEYCG7Twiqn0DSrL3Ex4PIRNAdZ3lQoi27nfcDSW&X-Amz-Signature=ea251ee9f746572368ca71077fbba4ff922ecaba3c8c0fd90043173880570346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6ANIJO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH%2BFvgeb46xqI6UsmPS6uAeeoNRY8%2BAfxpC21Jz42cP7AiEA20ltGlurhBfBjUkq39DmlfRu3VG1XUP2%2FQu4zVx7JbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKou%2FsAKjFFYas%2BT5yrcA3pGLtq8gbjr2PnpaCSbPQp2RCGev90oits9yUmZKGz2a8SOXiS92e%2Bi7n8QYSFyvFvkmQYgf4NXRuYXSpC77iwuv1zYRUlajo1i5mMkJRhERfd%2BDIE5aCg4mz83ZeJHTmvejr9ARlvDShr4LeCTHlhB3FhHwWd5La%2FPSPXkiVIKLqbAO0GvSQ%2BpxxBkHmfj32liLB6bUUQMqsLCQBosP4FHt8vtr50NDFWXa7RzXkXeqtkOGB4N0cF7B7ErFmdbQAvG9zbBmql3cgoFhb5f5czIlVXUQwhFV3WcTriLGIpqdj2QHkgkR87A%2BDuXq2kF4NMp6XgPYT4qvaVba%2B1ZgNf30228UZ3%2FWgkFopzA3AGiID%2FxE3qs5eOLu8XUgbpTlShRSqkfVRaCUlmOrYRF4PLGXJIzDvJqalvZOjVj26qiDBhWDh3F%2BmLKDPb9OY5jEP9iBnXQtUH8dvreB7Q7hdw%2BtiPH0P%2BEHlfYyVAqWry%2FFgDqs8MPnP3j8focrcVzxx9%2FW%2F3rj3Rub4YCaBq61Quwg%2BGZZ9wk7KQ3u3rCi94%2B6JeJwPYq2XaXMDgaqpSQQ4ndzxkCevB5eW%2FBWbLdaTwaI4d46BozeJOHOmEUFieL2chFeGQlZcwrC%2BSSMMSPiMQGOqUBxkVzXf3YNwS9%2BuWzBBXdd5SO0t%2FqdS15iasIIct7NFuSRIKy1F0GETWyv5TSWqBvW55ccP1PZDPjOv0xB3xKTyYjGFSl6ol5N0iwyGJRSpogLqAXhq2tNtqv0Atz96wa2%2FbvyvhxtrWHp2o4EDE1QwZbqAw3spxZToF%2BFT4Tp0PLizL%2BAPZ9zEYCG7Twiqn0DSrL3Ex4PIRNAdZ3lQoi27nfcDSW&X-Amz-Signature=f3f3958d8ab07a3c53f23c452ebf9432a01b3b5694806139cfaae3583417d069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6ANIJO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH%2BFvgeb46xqI6UsmPS6uAeeoNRY8%2BAfxpC21Jz42cP7AiEA20ltGlurhBfBjUkq39DmlfRu3VG1XUP2%2FQu4zVx7JbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKou%2FsAKjFFYas%2BT5yrcA3pGLtq8gbjr2PnpaCSbPQp2RCGev90oits9yUmZKGz2a8SOXiS92e%2Bi7n8QYSFyvFvkmQYgf4NXRuYXSpC77iwuv1zYRUlajo1i5mMkJRhERfd%2BDIE5aCg4mz83ZeJHTmvejr9ARlvDShr4LeCTHlhB3FhHwWd5La%2FPSPXkiVIKLqbAO0GvSQ%2BpxxBkHmfj32liLB6bUUQMqsLCQBosP4FHt8vtr50NDFWXa7RzXkXeqtkOGB4N0cF7B7ErFmdbQAvG9zbBmql3cgoFhb5f5czIlVXUQwhFV3WcTriLGIpqdj2QHkgkR87A%2BDuXq2kF4NMp6XgPYT4qvaVba%2B1ZgNf30228UZ3%2FWgkFopzA3AGiID%2FxE3qs5eOLu8XUgbpTlShRSqkfVRaCUlmOrYRF4PLGXJIzDvJqalvZOjVj26qiDBhWDh3F%2BmLKDPb9OY5jEP9iBnXQtUH8dvreB7Q7hdw%2BtiPH0P%2BEHlfYyVAqWry%2FFgDqs8MPnP3j8focrcVzxx9%2FW%2F3rj3Rub4YCaBq61Quwg%2BGZZ9wk7KQ3u3rCi94%2B6JeJwPYq2XaXMDgaqpSQQ4ndzxkCevB5eW%2FBWbLdaTwaI4d46BozeJOHOmEUFieL2chFeGQlZcwrC%2BSSMMSPiMQGOqUBxkVzXf3YNwS9%2BuWzBBXdd5SO0t%2FqdS15iasIIct7NFuSRIKy1F0GETWyv5TSWqBvW55ccP1PZDPjOv0xB3xKTyYjGFSl6ol5N0iwyGJRSpogLqAXhq2tNtqv0Atz96wa2%2FbvyvhxtrWHp2o4EDE1QwZbqAw3spxZToF%2BFT4Tp0PLizL%2BAPZ9zEYCG7Twiqn0DSrL3Ex4PIRNAdZ3lQoi27nfcDSW&X-Amz-Signature=7582f032e3c66dbf26b760f2d47879762da53cc59a4fd201b4f02f52f4fe50b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
