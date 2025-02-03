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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPSMR63%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzhoHnGgocGBuW5GEK3Hdh8g%2FvXeRVt30TptQEI4vHwIhANc4iQ3FaqkwFQHMmGIKAGzDhyfh3J6FsCFbn5eI00nBKv8DCBcQABoMNjM3NDIzMTgzODA1Igy1tZc%2ByLcH0tmjTPkq3APOVz%2B3otBm9BRIKihJg8oAGDkXIUsiTrdmoFYa%2Fgl3GDb3M%2FfpIQG%2FU5uXoEGV2gRv91fmhlJjF1AfJts1YdwBiTA1QqU2yJ57D9cvpnwOCysPUyLm5KSfSJZghYF8J9ssDMJGD%2B%2FRMu7YQpKzSgCOsC%2F%2FiaYsulxU%2FyLcix1s%2FhRc%2FwfmHVrHFVWX71ym9sV1kjMBhyDEjGRuD4uK6GnrgmarBjBJ5%2FUzuPcYxaGp5d0NZ5rqzHnlI28WkOGng5a4%2FrlYrUKe0bqH8Lsiu2qvaLaHABKnOdWG3NJK9vqOE38F5x0cepV3d7oRaIOS%2FTf55fLdiWABK7ZLs%2FWv64fCm2nx8g%2BeyhOV7oosAyK%2FhNdBA18t4TS%2B%2F6bhCVDu87u1KiULlezqgHu%2FSFwGB5K6AVJ6Bm76DBirFWsuSfGKCYubkqOnODGCGZAu3MVNofwdPeQjckXNkBKNSRH%2BnDAF%2FHV9Ul9DBH960S%2FrtabTL9ymdb8BTw5iQaAGNN3o6SF%2FWDjR1RpJndunEYWfpMU5F2azB0b8IAheSQ2XgtsAiEp44AuBV9uEQiFA17Sm1C2ranhg6IDstLtaY7Zfxkqgdnd%2B%2BV8DmOgmi5szxLT7B5IBY%2BHOuRcgmWwqWjDujoO9BjqkAX9SM%2FAEsuYc0SRjoMmt%2BhF5aw4voc7hBRtQ26a%2BQ%2F00VWg3TDWf2K%2BD18iKf4s30bbeDT91Ravs98THwRNcC0x%2Bqzfgj5DHP1KkFzgjTzE2MJQP5GWNTjN7rpTC7a%2BQYisGSrLxNeMJwCLWICiI%2BfoeW6HVPEI7I5xFJoqUQ4KpKkmJI3ENnbFjUcXJq398z44vNurhAgwnO%2Fylr2y3Bc2pV0NE&X-Amz-Signature=0f735dbfe4619b27d3709c1ac73aca61ad29c83bdd12909a29c90764240a5b44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPSMR63%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzhoHnGgocGBuW5GEK3Hdh8g%2FvXeRVt30TptQEI4vHwIhANc4iQ3FaqkwFQHMmGIKAGzDhyfh3J6FsCFbn5eI00nBKv8DCBcQABoMNjM3NDIzMTgzODA1Igy1tZc%2ByLcH0tmjTPkq3APOVz%2B3otBm9BRIKihJg8oAGDkXIUsiTrdmoFYa%2Fgl3GDb3M%2FfpIQG%2FU5uXoEGV2gRv91fmhlJjF1AfJts1YdwBiTA1QqU2yJ57D9cvpnwOCysPUyLm5KSfSJZghYF8J9ssDMJGD%2B%2FRMu7YQpKzSgCOsC%2F%2FiaYsulxU%2FyLcix1s%2FhRc%2FwfmHVrHFVWX71ym9sV1kjMBhyDEjGRuD4uK6GnrgmarBjBJ5%2FUzuPcYxaGp5d0NZ5rqzHnlI28WkOGng5a4%2FrlYrUKe0bqH8Lsiu2qvaLaHABKnOdWG3NJK9vqOE38F5x0cepV3d7oRaIOS%2FTf55fLdiWABK7ZLs%2FWv64fCm2nx8g%2BeyhOV7oosAyK%2FhNdBA18t4TS%2B%2F6bhCVDu87u1KiULlezqgHu%2FSFwGB5K6AVJ6Bm76DBirFWsuSfGKCYubkqOnODGCGZAu3MVNofwdPeQjckXNkBKNSRH%2BnDAF%2FHV9Ul9DBH960S%2FrtabTL9ymdb8BTw5iQaAGNN3o6SF%2FWDjR1RpJndunEYWfpMU5F2azB0b8IAheSQ2XgtsAiEp44AuBV9uEQiFA17Sm1C2ranhg6IDstLtaY7Zfxkqgdnd%2B%2BV8DmOgmi5szxLT7B5IBY%2BHOuRcgmWwqWjDujoO9BjqkAX9SM%2FAEsuYc0SRjoMmt%2BhF5aw4voc7hBRtQ26a%2BQ%2F00VWg3TDWf2K%2BD18iKf4s30bbeDT91Ravs98THwRNcC0x%2Bqzfgj5DHP1KkFzgjTzE2MJQP5GWNTjN7rpTC7a%2BQYisGSrLxNeMJwCLWICiI%2BfoeW6HVPEI7I5xFJoqUQ4KpKkmJI3ENnbFjUcXJq398z44vNurhAgwnO%2Fylr2y3Bc2pV0NE&X-Amz-Signature=1f202efb3ea7cf99b2d4ed06f6eea754ac696b259f8c9737c0fd85a0e0be3e89&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPSMR63%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzhoHnGgocGBuW5GEK3Hdh8g%2FvXeRVt30TptQEI4vHwIhANc4iQ3FaqkwFQHMmGIKAGzDhyfh3J6FsCFbn5eI00nBKv8DCBcQABoMNjM3NDIzMTgzODA1Igy1tZc%2ByLcH0tmjTPkq3APOVz%2B3otBm9BRIKihJg8oAGDkXIUsiTrdmoFYa%2Fgl3GDb3M%2FfpIQG%2FU5uXoEGV2gRv91fmhlJjF1AfJts1YdwBiTA1QqU2yJ57D9cvpnwOCysPUyLm5KSfSJZghYF8J9ssDMJGD%2B%2FRMu7YQpKzSgCOsC%2F%2FiaYsulxU%2FyLcix1s%2FhRc%2FwfmHVrHFVWX71ym9sV1kjMBhyDEjGRuD4uK6GnrgmarBjBJ5%2FUzuPcYxaGp5d0NZ5rqzHnlI28WkOGng5a4%2FrlYrUKe0bqH8Lsiu2qvaLaHABKnOdWG3NJK9vqOE38F5x0cepV3d7oRaIOS%2FTf55fLdiWABK7ZLs%2FWv64fCm2nx8g%2BeyhOV7oosAyK%2FhNdBA18t4TS%2B%2F6bhCVDu87u1KiULlezqgHu%2FSFwGB5K6AVJ6Bm76DBirFWsuSfGKCYubkqOnODGCGZAu3MVNofwdPeQjckXNkBKNSRH%2BnDAF%2FHV9Ul9DBH960S%2FrtabTL9ymdb8BTw5iQaAGNN3o6SF%2FWDjR1RpJndunEYWfpMU5F2azB0b8IAheSQ2XgtsAiEp44AuBV9uEQiFA17Sm1C2ranhg6IDstLtaY7Zfxkqgdnd%2B%2BV8DmOgmi5szxLT7B5IBY%2BHOuRcgmWwqWjDujoO9BjqkAX9SM%2FAEsuYc0SRjoMmt%2BhF5aw4voc7hBRtQ26a%2BQ%2F00VWg3TDWf2K%2BD18iKf4s30bbeDT91Ravs98THwRNcC0x%2Bqzfgj5DHP1KkFzgjTzE2MJQP5GWNTjN7rpTC7a%2BQYisGSrLxNeMJwCLWICiI%2BfoeW6HVPEI7I5xFJoqUQ4KpKkmJI3ENnbFjUcXJq398z44vNurhAgwnO%2Fylr2y3Bc2pV0NE&X-Amz-Signature=01696dd41d26f2746d323738dbe8579ec17a9213c79b0ddb4592fcf7cdcef37d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPSMR63%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzhoHnGgocGBuW5GEK3Hdh8g%2FvXeRVt30TptQEI4vHwIhANc4iQ3FaqkwFQHMmGIKAGzDhyfh3J6FsCFbn5eI00nBKv8DCBcQABoMNjM3NDIzMTgzODA1Igy1tZc%2ByLcH0tmjTPkq3APOVz%2B3otBm9BRIKihJg8oAGDkXIUsiTrdmoFYa%2Fgl3GDb3M%2FfpIQG%2FU5uXoEGV2gRv91fmhlJjF1AfJts1YdwBiTA1QqU2yJ57D9cvpnwOCysPUyLm5KSfSJZghYF8J9ssDMJGD%2B%2FRMu7YQpKzSgCOsC%2F%2FiaYsulxU%2FyLcix1s%2FhRc%2FwfmHVrHFVWX71ym9sV1kjMBhyDEjGRuD4uK6GnrgmarBjBJ5%2FUzuPcYxaGp5d0NZ5rqzHnlI28WkOGng5a4%2FrlYrUKe0bqH8Lsiu2qvaLaHABKnOdWG3NJK9vqOE38F5x0cepV3d7oRaIOS%2FTf55fLdiWABK7ZLs%2FWv64fCm2nx8g%2BeyhOV7oosAyK%2FhNdBA18t4TS%2B%2F6bhCVDu87u1KiULlezqgHu%2FSFwGB5K6AVJ6Bm76DBirFWsuSfGKCYubkqOnODGCGZAu3MVNofwdPeQjckXNkBKNSRH%2BnDAF%2FHV9Ul9DBH960S%2FrtabTL9ymdb8BTw5iQaAGNN3o6SF%2FWDjR1RpJndunEYWfpMU5F2azB0b8IAheSQ2XgtsAiEp44AuBV9uEQiFA17Sm1C2ranhg6IDstLtaY7Zfxkqgdnd%2B%2BV8DmOgmi5szxLT7B5IBY%2BHOuRcgmWwqWjDujoO9BjqkAX9SM%2FAEsuYc0SRjoMmt%2BhF5aw4voc7hBRtQ26a%2BQ%2F00VWg3TDWf2K%2BD18iKf4s30bbeDT91Ravs98THwRNcC0x%2Bqzfgj5DHP1KkFzgjTzE2MJQP5GWNTjN7rpTC7a%2BQYisGSrLxNeMJwCLWICiI%2BfoeW6HVPEI7I5xFJoqUQ4KpKkmJI3ENnbFjUcXJq398z44vNurhAgwnO%2Fylr2y3Bc2pV0NE&X-Amz-Signature=aa0fe78184ba07d5af4ecfc42cb8d4118bf206aa77cc21fc95d1ffeb2bc2682a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPSMR63%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzhoHnGgocGBuW5GEK3Hdh8g%2FvXeRVt30TptQEI4vHwIhANc4iQ3FaqkwFQHMmGIKAGzDhyfh3J6FsCFbn5eI00nBKv8DCBcQABoMNjM3NDIzMTgzODA1Igy1tZc%2ByLcH0tmjTPkq3APOVz%2B3otBm9BRIKihJg8oAGDkXIUsiTrdmoFYa%2Fgl3GDb3M%2FfpIQG%2FU5uXoEGV2gRv91fmhlJjF1AfJts1YdwBiTA1QqU2yJ57D9cvpnwOCysPUyLm5KSfSJZghYF8J9ssDMJGD%2B%2FRMu7YQpKzSgCOsC%2F%2FiaYsulxU%2FyLcix1s%2FhRc%2FwfmHVrHFVWX71ym9sV1kjMBhyDEjGRuD4uK6GnrgmarBjBJ5%2FUzuPcYxaGp5d0NZ5rqzHnlI28WkOGng5a4%2FrlYrUKe0bqH8Lsiu2qvaLaHABKnOdWG3NJK9vqOE38F5x0cepV3d7oRaIOS%2FTf55fLdiWABK7ZLs%2FWv64fCm2nx8g%2BeyhOV7oosAyK%2FhNdBA18t4TS%2B%2F6bhCVDu87u1KiULlezqgHu%2FSFwGB5K6AVJ6Bm76DBirFWsuSfGKCYubkqOnODGCGZAu3MVNofwdPeQjckXNkBKNSRH%2BnDAF%2FHV9Ul9DBH960S%2FrtabTL9ymdb8BTw5iQaAGNN3o6SF%2FWDjR1RpJndunEYWfpMU5F2azB0b8IAheSQ2XgtsAiEp44AuBV9uEQiFA17Sm1C2ranhg6IDstLtaY7Zfxkqgdnd%2B%2BV8DmOgmi5szxLT7B5IBY%2BHOuRcgmWwqWjDujoO9BjqkAX9SM%2FAEsuYc0SRjoMmt%2BhF5aw4voc7hBRtQ26a%2BQ%2F00VWg3TDWf2K%2BD18iKf4s30bbeDT91Ravs98THwRNcC0x%2Bqzfgj5DHP1KkFzgjTzE2MJQP5GWNTjN7rpTC7a%2BQYisGSrLxNeMJwCLWICiI%2BfoeW6HVPEI7I5xFJoqUQ4KpKkmJI3ENnbFjUcXJq398z44vNurhAgwnO%2Fylr2y3Bc2pV0NE&X-Amz-Signature=09187da71c8f1e98a6903d2ad0e8695d2f17e4257c96c63f481ae092edeeeec6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPSMR63%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzhoHnGgocGBuW5GEK3Hdh8g%2FvXeRVt30TptQEI4vHwIhANc4iQ3FaqkwFQHMmGIKAGzDhyfh3J6FsCFbn5eI00nBKv8DCBcQABoMNjM3NDIzMTgzODA1Igy1tZc%2ByLcH0tmjTPkq3APOVz%2B3otBm9BRIKihJg8oAGDkXIUsiTrdmoFYa%2Fgl3GDb3M%2FfpIQG%2FU5uXoEGV2gRv91fmhlJjF1AfJts1YdwBiTA1QqU2yJ57D9cvpnwOCysPUyLm5KSfSJZghYF8J9ssDMJGD%2B%2FRMu7YQpKzSgCOsC%2F%2FiaYsulxU%2FyLcix1s%2FhRc%2FwfmHVrHFVWX71ym9sV1kjMBhyDEjGRuD4uK6GnrgmarBjBJ5%2FUzuPcYxaGp5d0NZ5rqzHnlI28WkOGng5a4%2FrlYrUKe0bqH8Lsiu2qvaLaHABKnOdWG3NJK9vqOE38F5x0cepV3d7oRaIOS%2FTf55fLdiWABK7ZLs%2FWv64fCm2nx8g%2BeyhOV7oosAyK%2FhNdBA18t4TS%2B%2F6bhCVDu87u1KiULlezqgHu%2FSFwGB5K6AVJ6Bm76DBirFWsuSfGKCYubkqOnODGCGZAu3MVNofwdPeQjckXNkBKNSRH%2BnDAF%2FHV9Ul9DBH960S%2FrtabTL9ymdb8BTw5iQaAGNN3o6SF%2FWDjR1RpJndunEYWfpMU5F2azB0b8IAheSQ2XgtsAiEp44AuBV9uEQiFA17Sm1C2ranhg6IDstLtaY7Zfxkqgdnd%2B%2BV8DmOgmi5szxLT7B5IBY%2BHOuRcgmWwqWjDujoO9BjqkAX9SM%2FAEsuYc0SRjoMmt%2BhF5aw4voc7hBRtQ26a%2BQ%2F00VWg3TDWf2K%2BD18iKf4s30bbeDT91Ravs98THwRNcC0x%2Bqzfgj5DHP1KkFzgjTzE2MJQP5GWNTjN7rpTC7a%2BQYisGSrLxNeMJwCLWICiI%2BfoeW6HVPEI7I5xFJoqUQ4KpKkmJI3ENnbFjUcXJq398z44vNurhAgwnO%2Fylr2y3Bc2pV0NE&X-Amz-Signature=4253a4ed89916600ac235519118ad45bff251e7be9d9c3f85e57af29f8b8edc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPSMR63%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzhoHnGgocGBuW5GEK3Hdh8g%2FvXeRVt30TptQEI4vHwIhANc4iQ3FaqkwFQHMmGIKAGzDhyfh3J6FsCFbn5eI00nBKv8DCBcQABoMNjM3NDIzMTgzODA1Igy1tZc%2ByLcH0tmjTPkq3APOVz%2B3otBm9BRIKihJg8oAGDkXIUsiTrdmoFYa%2Fgl3GDb3M%2FfpIQG%2FU5uXoEGV2gRv91fmhlJjF1AfJts1YdwBiTA1QqU2yJ57D9cvpnwOCysPUyLm5KSfSJZghYF8J9ssDMJGD%2B%2FRMu7YQpKzSgCOsC%2F%2FiaYsulxU%2FyLcix1s%2FhRc%2FwfmHVrHFVWX71ym9sV1kjMBhyDEjGRuD4uK6GnrgmarBjBJ5%2FUzuPcYxaGp5d0NZ5rqzHnlI28WkOGng5a4%2FrlYrUKe0bqH8Lsiu2qvaLaHABKnOdWG3NJK9vqOE38F5x0cepV3d7oRaIOS%2FTf55fLdiWABK7ZLs%2FWv64fCm2nx8g%2BeyhOV7oosAyK%2FhNdBA18t4TS%2B%2F6bhCVDu87u1KiULlezqgHu%2FSFwGB5K6AVJ6Bm76DBirFWsuSfGKCYubkqOnODGCGZAu3MVNofwdPeQjckXNkBKNSRH%2BnDAF%2FHV9Ul9DBH960S%2FrtabTL9ymdb8BTw5iQaAGNN3o6SF%2FWDjR1RpJndunEYWfpMU5F2azB0b8IAheSQ2XgtsAiEp44AuBV9uEQiFA17Sm1C2ranhg6IDstLtaY7Zfxkqgdnd%2B%2BV8DmOgmi5szxLT7B5IBY%2BHOuRcgmWwqWjDujoO9BjqkAX9SM%2FAEsuYc0SRjoMmt%2BhF5aw4voc7hBRtQ26a%2BQ%2F00VWg3TDWf2K%2BD18iKf4s30bbeDT91Ravs98THwRNcC0x%2Bqzfgj5DHP1KkFzgjTzE2MJQP5GWNTjN7rpTC7a%2BQYisGSrLxNeMJwCLWICiI%2BfoeW6HVPEI7I5xFJoqUQ4KpKkmJI3ENnbFjUcXJq398z44vNurhAgwnO%2Fylr2y3Bc2pV0NE&X-Amz-Signature=9cba340bbe1f782d8e3992b5de758f5a5c60325f7f7254cd4501f0ce4607efe5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPSMR63%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzhoHnGgocGBuW5GEK3Hdh8g%2FvXeRVt30TptQEI4vHwIhANc4iQ3FaqkwFQHMmGIKAGzDhyfh3J6FsCFbn5eI00nBKv8DCBcQABoMNjM3NDIzMTgzODA1Igy1tZc%2ByLcH0tmjTPkq3APOVz%2B3otBm9BRIKihJg8oAGDkXIUsiTrdmoFYa%2Fgl3GDb3M%2FfpIQG%2FU5uXoEGV2gRv91fmhlJjF1AfJts1YdwBiTA1QqU2yJ57D9cvpnwOCysPUyLm5KSfSJZghYF8J9ssDMJGD%2B%2FRMu7YQpKzSgCOsC%2F%2FiaYsulxU%2FyLcix1s%2FhRc%2FwfmHVrHFVWX71ym9sV1kjMBhyDEjGRuD4uK6GnrgmarBjBJ5%2FUzuPcYxaGp5d0NZ5rqzHnlI28WkOGng5a4%2FrlYrUKe0bqH8Lsiu2qvaLaHABKnOdWG3NJK9vqOE38F5x0cepV3d7oRaIOS%2FTf55fLdiWABK7ZLs%2FWv64fCm2nx8g%2BeyhOV7oosAyK%2FhNdBA18t4TS%2B%2F6bhCVDu87u1KiULlezqgHu%2FSFwGB5K6AVJ6Bm76DBirFWsuSfGKCYubkqOnODGCGZAu3MVNofwdPeQjckXNkBKNSRH%2BnDAF%2FHV9Ul9DBH960S%2FrtabTL9ymdb8BTw5iQaAGNN3o6SF%2FWDjR1RpJndunEYWfpMU5F2azB0b8IAheSQ2XgtsAiEp44AuBV9uEQiFA17Sm1C2ranhg6IDstLtaY7Zfxkqgdnd%2B%2BV8DmOgmi5szxLT7B5IBY%2BHOuRcgmWwqWjDujoO9BjqkAX9SM%2FAEsuYc0SRjoMmt%2BhF5aw4voc7hBRtQ26a%2BQ%2F00VWg3TDWf2K%2BD18iKf4s30bbeDT91Ravs98THwRNcC0x%2Bqzfgj5DHP1KkFzgjTzE2MJQP5GWNTjN7rpTC7a%2BQYisGSrLxNeMJwCLWICiI%2BfoeW6HVPEI7I5xFJoqUQ4KpKkmJI3ENnbFjUcXJq398z44vNurhAgwnO%2Fylr2y3Bc2pV0NE&X-Amz-Signature=8e67fad2e27343aed6faa175a5073b8c2547c4f5bcc2adda40c607dc86c0726f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
