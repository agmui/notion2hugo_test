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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23CYMSX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOiRoK%2BMZTeBh38u92FfGMULTgGav7%2BtRgLSoVj66ZvAiEAyqXXEICbIaCZHbZhBLi7%2FA9BXSWZioOexjB8tgIVJUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFszTVqdU%2F6b3l8ZvircA0MHgZ7F1ZJuR6C4kenr%2BxnDlt9v%2B4a8RwAXi8X1n4aFclLYtiWnuSlpUxX2ec2TYm6GUXgLyBUBYGRJ06T53E7p0vNOznKU5z2V04Y9KWgPu9SVYw1vIvp67kjpbmBcBbf8Y%2FsLuWyd66zbsBQ466r2I5MY3dbxpNJ609w%2BfJ0anrXhqCvGjbcxTnL9n7IuCnjUXmpPonX0GHG7YP5gzL4fPuOtlWCG%2BX23Nxez8w0ubc2Ny6%2BDGh6INlUdBewo92XCey0L50CbwtINblykE4xAwfUTAXSctQfNhX%2F213kqOe63zqUGW2%2F1reywXeI0whVZbYzGuSS%2F1YiZRqjB%2FyG0LoH9pImEeVW2mnlps1eO4f4aPqzhYp40rBWxXxhwxMuuzYbWSnXlW%2FIJsI52iljhRTA9p4tHG8eltEHKg%2FkXvA%2FAkw1SAe3PBGIBNN%2FR6CwsGS7z7M8jpncrHNIed%2BShoVxiz7NJdOpkpOJ5xZG8dmdyNvlVO7IOmvky%2FecG2xFlwYcwHNKm8psYlI0OhURMAE1RlT6%2BpdKS2b5A%2FDrWz67FENr9juUgMcv9YQ7SameCj%2BC2qi4aOZ4PGVWrV3%2F09xtP%2BPaiZE%2Bt9ESgQ4iQB%2FiGEBFH%2FWEt8L7MMKTl8sAGOqUBX8vnwZq0n%2F8PGxxEXE8WwQyhP4NfVkijXYNjv5ngJtW7SD6LlvNuixYqD3pCYpMif8O8nBLrOXjvb8VP2JKD5A1ptWhRJ7MTVenV7%2FgaOsdvUzeuKXKKooj005jEOJn%2FC7kd7fTuucDXbqtjPSCTNznIpGZ%2FUXk5jhdXq5W%2F%2B0693RAtHQNcgOAsch8%2BqB1d2lVuE3Fze79CMqhe0uPLR%2BvUNMRt&X-Amz-Signature=94c8ffae8ccea057bee42d515b01809ed046177dd3df019ff94fa3707913ccf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23CYMSX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOiRoK%2BMZTeBh38u92FfGMULTgGav7%2BtRgLSoVj66ZvAiEAyqXXEICbIaCZHbZhBLi7%2FA9BXSWZioOexjB8tgIVJUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFszTVqdU%2F6b3l8ZvircA0MHgZ7F1ZJuR6C4kenr%2BxnDlt9v%2B4a8RwAXi8X1n4aFclLYtiWnuSlpUxX2ec2TYm6GUXgLyBUBYGRJ06T53E7p0vNOznKU5z2V04Y9KWgPu9SVYw1vIvp67kjpbmBcBbf8Y%2FsLuWyd66zbsBQ466r2I5MY3dbxpNJ609w%2BfJ0anrXhqCvGjbcxTnL9n7IuCnjUXmpPonX0GHG7YP5gzL4fPuOtlWCG%2BX23Nxez8w0ubc2Ny6%2BDGh6INlUdBewo92XCey0L50CbwtINblykE4xAwfUTAXSctQfNhX%2F213kqOe63zqUGW2%2F1reywXeI0whVZbYzGuSS%2F1YiZRqjB%2FyG0LoH9pImEeVW2mnlps1eO4f4aPqzhYp40rBWxXxhwxMuuzYbWSnXlW%2FIJsI52iljhRTA9p4tHG8eltEHKg%2FkXvA%2FAkw1SAe3PBGIBNN%2FR6CwsGS7z7M8jpncrHNIed%2BShoVxiz7NJdOpkpOJ5xZG8dmdyNvlVO7IOmvky%2FecG2xFlwYcwHNKm8psYlI0OhURMAE1RlT6%2BpdKS2b5A%2FDrWz67FENr9juUgMcv9YQ7SameCj%2BC2qi4aOZ4PGVWrV3%2F09xtP%2BPaiZE%2Bt9ESgQ4iQB%2FiGEBFH%2FWEt8L7MMKTl8sAGOqUBX8vnwZq0n%2F8PGxxEXE8WwQyhP4NfVkijXYNjv5ngJtW7SD6LlvNuixYqD3pCYpMif8O8nBLrOXjvb8VP2JKD5A1ptWhRJ7MTVenV7%2FgaOsdvUzeuKXKKooj005jEOJn%2FC7kd7fTuucDXbqtjPSCTNznIpGZ%2FUXk5jhdXq5W%2F%2B0693RAtHQNcgOAsch8%2BqB1d2lVuE3Fze79CMqhe0uPLR%2BvUNMRt&X-Amz-Signature=8e86931f92975a1dd2748a54059116402e4b0da6baad5383103f2250bb2c0c48&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23CYMSX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOiRoK%2BMZTeBh38u92FfGMULTgGav7%2BtRgLSoVj66ZvAiEAyqXXEICbIaCZHbZhBLi7%2FA9BXSWZioOexjB8tgIVJUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFszTVqdU%2F6b3l8ZvircA0MHgZ7F1ZJuR6C4kenr%2BxnDlt9v%2B4a8RwAXi8X1n4aFclLYtiWnuSlpUxX2ec2TYm6GUXgLyBUBYGRJ06T53E7p0vNOznKU5z2V04Y9KWgPu9SVYw1vIvp67kjpbmBcBbf8Y%2FsLuWyd66zbsBQ466r2I5MY3dbxpNJ609w%2BfJ0anrXhqCvGjbcxTnL9n7IuCnjUXmpPonX0GHG7YP5gzL4fPuOtlWCG%2BX23Nxez8w0ubc2Ny6%2BDGh6INlUdBewo92XCey0L50CbwtINblykE4xAwfUTAXSctQfNhX%2F213kqOe63zqUGW2%2F1reywXeI0whVZbYzGuSS%2F1YiZRqjB%2FyG0LoH9pImEeVW2mnlps1eO4f4aPqzhYp40rBWxXxhwxMuuzYbWSnXlW%2FIJsI52iljhRTA9p4tHG8eltEHKg%2FkXvA%2FAkw1SAe3PBGIBNN%2FR6CwsGS7z7M8jpncrHNIed%2BShoVxiz7NJdOpkpOJ5xZG8dmdyNvlVO7IOmvky%2FecG2xFlwYcwHNKm8psYlI0OhURMAE1RlT6%2BpdKS2b5A%2FDrWz67FENr9juUgMcv9YQ7SameCj%2BC2qi4aOZ4PGVWrV3%2F09xtP%2BPaiZE%2Bt9ESgQ4iQB%2FiGEBFH%2FWEt8L7MMKTl8sAGOqUBX8vnwZq0n%2F8PGxxEXE8WwQyhP4NfVkijXYNjv5ngJtW7SD6LlvNuixYqD3pCYpMif8O8nBLrOXjvb8VP2JKD5A1ptWhRJ7MTVenV7%2FgaOsdvUzeuKXKKooj005jEOJn%2FC7kd7fTuucDXbqtjPSCTNznIpGZ%2FUXk5jhdXq5W%2F%2B0693RAtHQNcgOAsch8%2BqB1d2lVuE3Fze79CMqhe0uPLR%2BvUNMRt&X-Amz-Signature=70fa2fe141e6b7c67357e8e38905d654514fa9fe4e32b0310e330e8c80f3db68&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23CYMSX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOiRoK%2BMZTeBh38u92FfGMULTgGav7%2BtRgLSoVj66ZvAiEAyqXXEICbIaCZHbZhBLi7%2FA9BXSWZioOexjB8tgIVJUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFszTVqdU%2F6b3l8ZvircA0MHgZ7F1ZJuR6C4kenr%2BxnDlt9v%2B4a8RwAXi8X1n4aFclLYtiWnuSlpUxX2ec2TYm6GUXgLyBUBYGRJ06T53E7p0vNOznKU5z2V04Y9KWgPu9SVYw1vIvp67kjpbmBcBbf8Y%2FsLuWyd66zbsBQ466r2I5MY3dbxpNJ609w%2BfJ0anrXhqCvGjbcxTnL9n7IuCnjUXmpPonX0GHG7YP5gzL4fPuOtlWCG%2BX23Nxez8w0ubc2Ny6%2BDGh6INlUdBewo92XCey0L50CbwtINblykE4xAwfUTAXSctQfNhX%2F213kqOe63zqUGW2%2F1reywXeI0whVZbYzGuSS%2F1YiZRqjB%2FyG0LoH9pImEeVW2mnlps1eO4f4aPqzhYp40rBWxXxhwxMuuzYbWSnXlW%2FIJsI52iljhRTA9p4tHG8eltEHKg%2FkXvA%2FAkw1SAe3PBGIBNN%2FR6CwsGS7z7M8jpncrHNIed%2BShoVxiz7NJdOpkpOJ5xZG8dmdyNvlVO7IOmvky%2FecG2xFlwYcwHNKm8psYlI0OhURMAE1RlT6%2BpdKS2b5A%2FDrWz67FENr9juUgMcv9YQ7SameCj%2BC2qi4aOZ4PGVWrV3%2F09xtP%2BPaiZE%2Bt9ESgQ4iQB%2FiGEBFH%2FWEt8L7MMKTl8sAGOqUBX8vnwZq0n%2F8PGxxEXE8WwQyhP4NfVkijXYNjv5ngJtW7SD6LlvNuixYqD3pCYpMif8O8nBLrOXjvb8VP2JKD5A1ptWhRJ7MTVenV7%2FgaOsdvUzeuKXKKooj005jEOJn%2FC7kd7fTuucDXbqtjPSCTNznIpGZ%2FUXk5jhdXq5W%2F%2B0693RAtHQNcgOAsch8%2BqB1d2lVuE3Fze79CMqhe0uPLR%2BvUNMRt&X-Amz-Signature=3a051d594100616cdd84aa480beb692048d50010270aa0b9b650275f97ba1adc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23CYMSX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOiRoK%2BMZTeBh38u92FfGMULTgGav7%2BtRgLSoVj66ZvAiEAyqXXEICbIaCZHbZhBLi7%2FA9BXSWZioOexjB8tgIVJUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFszTVqdU%2F6b3l8ZvircA0MHgZ7F1ZJuR6C4kenr%2BxnDlt9v%2B4a8RwAXi8X1n4aFclLYtiWnuSlpUxX2ec2TYm6GUXgLyBUBYGRJ06T53E7p0vNOznKU5z2V04Y9KWgPu9SVYw1vIvp67kjpbmBcBbf8Y%2FsLuWyd66zbsBQ466r2I5MY3dbxpNJ609w%2BfJ0anrXhqCvGjbcxTnL9n7IuCnjUXmpPonX0GHG7YP5gzL4fPuOtlWCG%2BX23Nxez8w0ubc2Ny6%2BDGh6INlUdBewo92XCey0L50CbwtINblykE4xAwfUTAXSctQfNhX%2F213kqOe63zqUGW2%2F1reywXeI0whVZbYzGuSS%2F1YiZRqjB%2FyG0LoH9pImEeVW2mnlps1eO4f4aPqzhYp40rBWxXxhwxMuuzYbWSnXlW%2FIJsI52iljhRTA9p4tHG8eltEHKg%2FkXvA%2FAkw1SAe3PBGIBNN%2FR6CwsGS7z7M8jpncrHNIed%2BShoVxiz7NJdOpkpOJ5xZG8dmdyNvlVO7IOmvky%2FecG2xFlwYcwHNKm8psYlI0OhURMAE1RlT6%2BpdKS2b5A%2FDrWz67FENr9juUgMcv9YQ7SameCj%2BC2qi4aOZ4PGVWrV3%2F09xtP%2BPaiZE%2Bt9ESgQ4iQB%2FiGEBFH%2FWEt8L7MMKTl8sAGOqUBX8vnwZq0n%2F8PGxxEXE8WwQyhP4NfVkijXYNjv5ngJtW7SD6LlvNuixYqD3pCYpMif8O8nBLrOXjvb8VP2JKD5A1ptWhRJ7MTVenV7%2FgaOsdvUzeuKXKKooj005jEOJn%2FC7kd7fTuucDXbqtjPSCTNznIpGZ%2FUXk5jhdXq5W%2F%2B0693RAtHQNcgOAsch8%2BqB1d2lVuE3Fze79CMqhe0uPLR%2BvUNMRt&X-Amz-Signature=34fead922b7ffdb1e60b3260e1646a8d8fb90159007956b0d8d16ee814eb5eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23CYMSX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOiRoK%2BMZTeBh38u92FfGMULTgGav7%2BtRgLSoVj66ZvAiEAyqXXEICbIaCZHbZhBLi7%2FA9BXSWZioOexjB8tgIVJUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFszTVqdU%2F6b3l8ZvircA0MHgZ7F1ZJuR6C4kenr%2BxnDlt9v%2B4a8RwAXi8X1n4aFclLYtiWnuSlpUxX2ec2TYm6GUXgLyBUBYGRJ06T53E7p0vNOznKU5z2V04Y9KWgPu9SVYw1vIvp67kjpbmBcBbf8Y%2FsLuWyd66zbsBQ466r2I5MY3dbxpNJ609w%2BfJ0anrXhqCvGjbcxTnL9n7IuCnjUXmpPonX0GHG7YP5gzL4fPuOtlWCG%2BX23Nxez8w0ubc2Ny6%2BDGh6INlUdBewo92XCey0L50CbwtINblykE4xAwfUTAXSctQfNhX%2F213kqOe63zqUGW2%2F1reywXeI0whVZbYzGuSS%2F1YiZRqjB%2FyG0LoH9pImEeVW2mnlps1eO4f4aPqzhYp40rBWxXxhwxMuuzYbWSnXlW%2FIJsI52iljhRTA9p4tHG8eltEHKg%2FkXvA%2FAkw1SAe3PBGIBNN%2FR6CwsGS7z7M8jpncrHNIed%2BShoVxiz7NJdOpkpOJ5xZG8dmdyNvlVO7IOmvky%2FecG2xFlwYcwHNKm8psYlI0OhURMAE1RlT6%2BpdKS2b5A%2FDrWz67FENr9juUgMcv9YQ7SameCj%2BC2qi4aOZ4PGVWrV3%2F09xtP%2BPaiZE%2Bt9ESgQ4iQB%2FiGEBFH%2FWEt8L7MMKTl8sAGOqUBX8vnwZq0n%2F8PGxxEXE8WwQyhP4NfVkijXYNjv5ngJtW7SD6LlvNuixYqD3pCYpMif8O8nBLrOXjvb8VP2JKD5A1ptWhRJ7MTVenV7%2FgaOsdvUzeuKXKKooj005jEOJn%2FC7kd7fTuucDXbqtjPSCTNznIpGZ%2FUXk5jhdXq5W%2F%2B0693RAtHQNcgOAsch8%2BqB1d2lVuE3Fze79CMqhe0uPLR%2BvUNMRt&X-Amz-Signature=cf2eab2cb90c3f9bb2fb1083581f11961dae3f6846fe5667dc2f52ab32b656b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23CYMSX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOiRoK%2BMZTeBh38u92FfGMULTgGav7%2BtRgLSoVj66ZvAiEAyqXXEICbIaCZHbZhBLi7%2FA9BXSWZioOexjB8tgIVJUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFszTVqdU%2F6b3l8ZvircA0MHgZ7F1ZJuR6C4kenr%2BxnDlt9v%2B4a8RwAXi8X1n4aFclLYtiWnuSlpUxX2ec2TYm6GUXgLyBUBYGRJ06T53E7p0vNOznKU5z2V04Y9KWgPu9SVYw1vIvp67kjpbmBcBbf8Y%2FsLuWyd66zbsBQ466r2I5MY3dbxpNJ609w%2BfJ0anrXhqCvGjbcxTnL9n7IuCnjUXmpPonX0GHG7YP5gzL4fPuOtlWCG%2BX23Nxez8w0ubc2Ny6%2BDGh6INlUdBewo92XCey0L50CbwtINblykE4xAwfUTAXSctQfNhX%2F213kqOe63zqUGW2%2F1reywXeI0whVZbYzGuSS%2F1YiZRqjB%2FyG0LoH9pImEeVW2mnlps1eO4f4aPqzhYp40rBWxXxhwxMuuzYbWSnXlW%2FIJsI52iljhRTA9p4tHG8eltEHKg%2FkXvA%2FAkw1SAe3PBGIBNN%2FR6CwsGS7z7M8jpncrHNIed%2BShoVxiz7NJdOpkpOJ5xZG8dmdyNvlVO7IOmvky%2FecG2xFlwYcwHNKm8psYlI0OhURMAE1RlT6%2BpdKS2b5A%2FDrWz67FENr9juUgMcv9YQ7SameCj%2BC2qi4aOZ4PGVWrV3%2F09xtP%2BPaiZE%2Bt9ESgQ4iQB%2FiGEBFH%2FWEt8L7MMKTl8sAGOqUBX8vnwZq0n%2F8PGxxEXE8WwQyhP4NfVkijXYNjv5ngJtW7SD6LlvNuixYqD3pCYpMif8O8nBLrOXjvb8VP2JKD5A1ptWhRJ7MTVenV7%2FgaOsdvUzeuKXKKooj005jEOJn%2FC7kd7fTuucDXbqtjPSCTNznIpGZ%2FUXk5jhdXq5W%2F%2B0693RAtHQNcgOAsch8%2BqB1d2lVuE3Fze79CMqhe0uPLR%2BvUNMRt&X-Amz-Signature=281c61aebecf9334ea3d9b101735021c5e07c1106101d228af70b1329259ea6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23CYMSX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOiRoK%2BMZTeBh38u92FfGMULTgGav7%2BtRgLSoVj66ZvAiEAyqXXEICbIaCZHbZhBLi7%2FA9BXSWZioOexjB8tgIVJUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFszTVqdU%2F6b3l8ZvircA0MHgZ7F1ZJuR6C4kenr%2BxnDlt9v%2B4a8RwAXi8X1n4aFclLYtiWnuSlpUxX2ec2TYm6GUXgLyBUBYGRJ06T53E7p0vNOznKU5z2V04Y9KWgPu9SVYw1vIvp67kjpbmBcBbf8Y%2FsLuWyd66zbsBQ466r2I5MY3dbxpNJ609w%2BfJ0anrXhqCvGjbcxTnL9n7IuCnjUXmpPonX0GHG7YP5gzL4fPuOtlWCG%2BX23Nxez8w0ubc2Ny6%2BDGh6INlUdBewo92XCey0L50CbwtINblykE4xAwfUTAXSctQfNhX%2F213kqOe63zqUGW2%2F1reywXeI0whVZbYzGuSS%2F1YiZRqjB%2FyG0LoH9pImEeVW2mnlps1eO4f4aPqzhYp40rBWxXxhwxMuuzYbWSnXlW%2FIJsI52iljhRTA9p4tHG8eltEHKg%2FkXvA%2FAkw1SAe3PBGIBNN%2FR6CwsGS7z7M8jpncrHNIed%2BShoVxiz7NJdOpkpOJ5xZG8dmdyNvlVO7IOmvky%2FecG2xFlwYcwHNKm8psYlI0OhURMAE1RlT6%2BpdKS2b5A%2FDrWz67FENr9juUgMcv9YQ7SameCj%2BC2qi4aOZ4PGVWrV3%2F09xtP%2BPaiZE%2Bt9ESgQ4iQB%2FiGEBFH%2FWEt8L7MMKTl8sAGOqUBX8vnwZq0n%2F8PGxxEXE8WwQyhP4NfVkijXYNjv5ngJtW7SD6LlvNuixYqD3pCYpMif8O8nBLrOXjvb8VP2JKD5A1ptWhRJ7MTVenV7%2FgaOsdvUzeuKXKKooj005jEOJn%2FC7kd7fTuucDXbqtjPSCTNznIpGZ%2FUXk5jhdXq5W%2F%2B0693RAtHQNcgOAsch8%2BqB1d2lVuE3Fze79CMqhe0uPLR%2BvUNMRt&X-Amz-Signature=d7d96aac0899a2fcd75a6d712ce42acf9752212b45cda1b511413b0d1c1b8940&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
