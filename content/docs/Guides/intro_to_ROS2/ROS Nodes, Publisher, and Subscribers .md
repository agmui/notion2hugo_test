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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDRMWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs1gaRnm0pQ6i93mROGO7fb7aQimGehL6r6QbRZF%2BtrAIhAPfrCHJA9EHTBb%2FnnxqFO%2FJd9el8thKgd1%2FEu%2B9iGkluKv8DCFUQABoMNjM3NDIzMTgzODA1IgwUVOhoIErPHSgBN%2FAq3AMSlIwHLh7HkEo45er7LMSJKE8N%2Fj9h8p5nXFQeZaxAUEeSqMgm%2BEbB8TT%2FJoQhXs5EcyDfm28JejMs5BkEZIG9ABcnMGkqxI6hBT4XNYsd4WN63BZ3JhQeEN7c444VeOX5Nl8L74mBjmwNwm5HJWDRBTbHazvMwa8iG3L0TifdSIPa7XHGQDTbMkrJ95Hgy6qmJWJVqgG6gDezNHHn%2FbSKDKpqxoKvlUqHSOo%2Bn%2BXsMYsKa%2FtBXsWCSvP9wKQGcmtXP7NUVgKb6TpddcL70yy0PlS7iVGkUtcqm%2F0024TxENYHfcXFmGwzyfNr%2F%2FQImw8xfX5nmT%2Fvj7igafEHlHUvRxYDUJ1NqhHyyimk2mjZ3eZZIzEWNj9sV7Ad45AKYSV0SPqvJnohRkyr%2Fk2PnBxCxDl5kE0okbwVqiQApmyyr6YYUlOCfpjHWVSmxGlouCCey9hOs8zx9yFPUm3qiW0pmbLEUC8lFPIhkuMXYmyg34lAIyNfnDiHIWuuyZVQ1fkTr8zJCujMKy2cJSlrDybBh1iEobhO3qR1rlS64KTges7b4a2t%2BQFHQmh8IFZswnrEnWYZZPiJrSOSnXCXIq6CpcF3wTB86oK9F4IZxpXZNV%2F3O2z%2Fnabemc5q7zCqsJi%2FBjqkAXoFybxSVQR7gfY7aw4kxQp5Nelqr%2BUHRoQE0n5QQYvja8Y6olOFKz6DXNbebZREADTtRYP%2BLAuNok1uoqVzodo2yqcG66aPa5NfLjfPkJOoImooqfWFXeit9NhlmEX5uLt0uQC0dRmqAQAH3GwhuI40MZc%2FvVV8yWZZ5VDqoNponn6PUIcT9eM%2F527Js3VSWfg%2FH7I6S6YKMvmZn6IaWA49uLoo&X-Amz-Signature=4f416c120db429a55ea04859bd680a0351b4f4abda4b98b9d9504a9cc045cac5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDRMWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs1gaRnm0pQ6i93mROGO7fb7aQimGehL6r6QbRZF%2BtrAIhAPfrCHJA9EHTBb%2FnnxqFO%2FJd9el8thKgd1%2FEu%2B9iGkluKv8DCFUQABoMNjM3NDIzMTgzODA1IgwUVOhoIErPHSgBN%2FAq3AMSlIwHLh7HkEo45er7LMSJKE8N%2Fj9h8p5nXFQeZaxAUEeSqMgm%2BEbB8TT%2FJoQhXs5EcyDfm28JejMs5BkEZIG9ABcnMGkqxI6hBT4XNYsd4WN63BZ3JhQeEN7c444VeOX5Nl8L74mBjmwNwm5HJWDRBTbHazvMwa8iG3L0TifdSIPa7XHGQDTbMkrJ95Hgy6qmJWJVqgG6gDezNHHn%2FbSKDKpqxoKvlUqHSOo%2Bn%2BXsMYsKa%2FtBXsWCSvP9wKQGcmtXP7NUVgKb6TpddcL70yy0PlS7iVGkUtcqm%2F0024TxENYHfcXFmGwzyfNr%2F%2FQImw8xfX5nmT%2Fvj7igafEHlHUvRxYDUJ1NqhHyyimk2mjZ3eZZIzEWNj9sV7Ad45AKYSV0SPqvJnohRkyr%2Fk2PnBxCxDl5kE0okbwVqiQApmyyr6YYUlOCfpjHWVSmxGlouCCey9hOs8zx9yFPUm3qiW0pmbLEUC8lFPIhkuMXYmyg34lAIyNfnDiHIWuuyZVQ1fkTr8zJCujMKy2cJSlrDybBh1iEobhO3qR1rlS64KTges7b4a2t%2BQFHQmh8IFZswnrEnWYZZPiJrSOSnXCXIq6CpcF3wTB86oK9F4IZxpXZNV%2F3O2z%2Fnabemc5q7zCqsJi%2FBjqkAXoFybxSVQR7gfY7aw4kxQp5Nelqr%2BUHRoQE0n5QQYvja8Y6olOFKz6DXNbebZREADTtRYP%2BLAuNok1uoqVzodo2yqcG66aPa5NfLjfPkJOoImooqfWFXeit9NhlmEX5uLt0uQC0dRmqAQAH3GwhuI40MZc%2FvVV8yWZZ5VDqoNponn6PUIcT9eM%2F527Js3VSWfg%2FH7I6S6YKMvmZn6IaWA49uLoo&X-Amz-Signature=048677bb43fe658d0d8acad5128b6fb9c5586aa7f568ff9eff67b7199c72a7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDRMWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs1gaRnm0pQ6i93mROGO7fb7aQimGehL6r6QbRZF%2BtrAIhAPfrCHJA9EHTBb%2FnnxqFO%2FJd9el8thKgd1%2FEu%2B9iGkluKv8DCFUQABoMNjM3NDIzMTgzODA1IgwUVOhoIErPHSgBN%2FAq3AMSlIwHLh7HkEo45er7LMSJKE8N%2Fj9h8p5nXFQeZaxAUEeSqMgm%2BEbB8TT%2FJoQhXs5EcyDfm28JejMs5BkEZIG9ABcnMGkqxI6hBT4XNYsd4WN63BZ3JhQeEN7c444VeOX5Nl8L74mBjmwNwm5HJWDRBTbHazvMwa8iG3L0TifdSIPa7XHGQDTbMkrJ95Hgy6qmJWJVqgG6gDezNHHn%2FbSKDKpqxoKvlUqHSOo%2Bn%2BXsMYsKa%2FtBXsWCSvP9wKQGcmtXP7NUVgKb6TpddcL70yy0PlS7iVGkUtcqm%2F0024TxENYHfcXFmGwzyfNr%2F%2FQImw8xfX5nmT%2Fvj7igafEHlHUvRxYDUJ1NqhHyyimk2mjZ3eZZIzEWNj9sV7Ad45AKYSV0SPqvJnohRkyr%2Fk2PnBxCxDl5kE0okbwVqiQApmyyr6YYUlOCfpjHWVSmxGlouCCey9hOs8zx9yFPUm3qiW0pmbLEUC8lFPIhkuMXYmyg34lAIyNfnDiHIWuuyZVQ1fkTr8zJCujMKy2cJSlrDybBh1iEobhO3qR1rlS64KTges7b4a2t%2BQFHQmh8IFZswnrEnWYZZPiJrSOSnXCXIq6CpcF3wTB86oK9F4IZxpXZNV%2F3O2z%2Fnabemc5q7zCqsJi%2FBjqkAXoFybxSVQR7gfY7aw4kxQp5Nelqr%2BUHRoQE0n5QQYvja8Y6olOFKz6DXNbebZREADTtRYP%2BLAuNok1uoqVzodo2yqcG66aPa5NfLjfPkJOoImooqfWFXeit9NhlmEX5uLt0uQC0dRmqAQAH3GwhuI40MZc%2FvVV8yWZZ5VDqoNponn6PUIcT9eM%2F527Js3VSWfg%2FH7I6S6YKMvmZn6IaWA49uLoo&X-Amz-Signature=275ae00acdd2b849917aa313da3e630e380362937d7bc87dd9631a71041bc4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDRMWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs1gaRnm0pQ6i93mROGO7fb7aQimGehL6r6QbRZF%2BtrAIhAPfrCHJA9EHTBb%2FnnxqFO%2FJd9el8thKgd1%2FEu%2B9iGkluKv8DCFUQABoMNjM3NDIzMTgzODA1IgwUVOhoIErPHSgBN%2FAq3AMSlIwHLh7HkEo45er7LMSJKE8N%2Fj9h8p5nXFQeZaxAUEeSqMgm%2BEbB8TT%2FJoQhXs5EcyDfm28JejMs5BkEZIG9ABcnMGkqxI6hBT4XNYsd4WN63BZ3JhQeEN7c444VeOX5Nl8L74mBjmwNwm5HJWDRBTbHazvMwa8iG3L0TifdSIPa7XHGQDTbMkrJ95Hgy6qmJWJVqgG6gDezNHHn%2FbSKDKpqxoKvlUqHSOo%2Bn%2BXsMYsKa%2FtBXsWCSvP9wKQGcmtXP7NUVgKb6TpddcL70yy0PlS7iVGkUtcqm%2F0024TxENYHfcXFmGwzyfNr%2F%2FQImw8xfX5nmT%2Fvj7igafEHlHUvRxYDUJ1NqhHyyimk2mjZ3eZZIzEWNj9sV7Ad45AKYSV0SPqvJnohRkyr%2Fk2PnBxCxDl5kE0okbwVqiQApmyyr6YYUlOCfpjHWVSmxGlouCCey9hOs8zx9yFPUm3qiW0pmbLEUC8lFPIhkuMXYmyg34lAIyNfnDiHIWuuyZVQ1fkTr8zJCujMKy2cJSlrDybBh1iEobhO3qR1rlS64KTges7b4a2t%2BQFHQmh8IFZswnrEnWYZZPiJrSOSnXCXIq6CpcF3wTB86oK9F4IZxpXZNV%2F3O2z%2Fnabemc5q7zCqsJi%2FBjqkAXoFybxSVQR7gfY7aw4kxQp5Nelqr%2BUHRoQE0n5QQYvja8Y6olOFKz6DXNbebZREADTtRYP%2BLAuNok1uoqVzodo2yqcG66aPa5NfLjfPkJOoImooqfWFXeit9NhlmEX5uLt0uQC0dRmqAQAH3GwhuI40MZc%2FvVV8yWZZ5VDqoNponn6PUIcT9eM%2F527Js3VSWfg%2FH7I6S6YKMvmZn6IaWA49uLoo&X-Amz-Signature=c83439dcff22074b673a35346a893856602fe3b06eb8b62303c1b63dc2e099e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDRMWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs1gaRnm0pQ6i93mROGO7fb7aQimGehL6r6QbRZF%2BtrAIhAPfrCHJA9EHTBb%2FnnxqFO%2FJd9el8thKgd1%2FEu%2B9iGkluKv8DCFUQABoMNjM3NDIzMTgzODA1IgwUVOhoIErPHSgBN%2FAq3AMSlIwHLh7HkEo45er7LMSJKE8N%2Fj9h8p5nXFQeZaxAUEeSqMgm%2BEbB8TT%2FJoQhXs5EcyDfm28JejMs5BkEZIG9ABcnMGkqxI6hBT4XNYsd4WN63BZ3JhQeEN7c444VeOX5Nl8L74mBjmwNwm5HJWDRBTbHazvMwa8iG3L0TifdSIPa7XHGQDTbMkrJ95Hgy6qmJWJVqgG6gDezNHHn%2FbSKDKpqxoKvlUqHSOo%2Bn%2BXsMYsKa%2FtBXsWCSvP9wKQGcmtXP7NUVgKb6TpddcL70yy0PlS7iVGkUtcqm%2F0024TxENYHfcXFmGwzyfNr%2F%2FQImw8xfX5nmT%2Fvj7igafEHlHUvRxYDUJ1NqhHyyimk2mjZ3eZZIzEWNj9sV7Ad45AKYSV0SPqvJnohRkyr%2Fk2PnBxCxDl5kE0okbwVqiQApmyyr6YYUlOCfpjHWVSmxGlouCCey9hOs8zx9yFPUm3qiW0pmbLEUC8lFPIhkuMXYmyg34lAIyNfnDiHIWuuyZVQ1fkTr8zJCujMKy2cJSlrDybBh1iEobhO3qR1rlS64KTges7b4a2t%2BQFHQmh8IFZswnrEnWYZZPiJrSOSnXCXIq6CpcF3wTB86oK9F4IZxpXZNV%2F3O2z%2Fnabemc5q7zCqsJi%2FBjqkAXoFybxSVQR7gfY7aw4kxQp5Nelqr%2BUHRoQE0n5QQYvja8Y6olOFKz6DXNbebZREADTtRYP%2BLAuNok1uoqVzodo2yqcG66aPa5NfLjfPkJOoImooqfWFXeit9NhlmEX5uLt0uQC0dRmqAQAH3GwhuI40MZc%2FvVV8yWZZ5VDqoNponn6PUIcT9eM%2F527Js3VSWfg%2FH7I6S6YKMvmZn6IaWA49uLoo&X-Amz-Signature=072b1679b7b7bbbd2a0e3ff8d062527cb88ee82022d101c1b06d249646a0e611&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDRMWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs1gaRnm0pQ6i93mROGO7fb7aQimGehL6r6QbRZF%2BtrAIhAPfrCHJA9EHTBb%2FnnxqFO%2FJd9el8thKgd1%2FEu%2B9iGkluKv8DCFUQABoMNjM3NDIzMTgzODA1IgwUVOhoIErPHSgBN%2FAq3AMSlIwHLh7HkEo45er7LMSJKE8N%2Fj9h8p5nXFQeZaxAUEeSqMgm%2BEbB8TT%2FJoQhXs5EcyDfm28JejMs5BkEZIG9ABcnMGkqxI6hBT4XNYsd4WN63BZ3JhQeEN7c444VeOX5Nl8L74mBjmwNwm5HJWDRBTbHazvMwa8iG3L0TifdSIPa7XHGQDTbMkrJ95Hgy6qmJWJVqgG6gDezNHHn%2FbSKDKpqxoKvlUqHSOo%2Bn%2BXsMYsKa%2FtBXsWCSvP9wKQGcmtXP7NUVgKb6TpddcL70yy0PlS7iVGkUtcqm%2F0024TxENYHfcXFmGwzyfNr%2F%2FQImw8xfX5nmT%2Fvj7igafEHlHUvRxYDUJ1NqhHyyimk2mjZ3eZZIzEWNj9sV7Ad45AKYSV0SPqvJnohRkyr%2Fk2PnBxCxDl5kE0okbwVqiQApmyyr6YYUlOCfpjHWVSmxGlouCCey9hOs8zx9yFPUm3qiW0pmbLEUC8lFPIhkuMXYmyg34lAIyNfnDiHIWuuyZVQ1fkTr8zJCujMKy2cJSlrDybBh1iEobhO3qR1rlS64KTges7b4a2t%2BQFHQmh8IFZswnrEnWYZZPiJrSOSnXCXIq6CpcF3wTB86oK9F4IZxpXZNV%2F3O2z%2Fnabemc5q7zCqsJi%2FBjqkAXoFybxSVQR7gfY7aw4kxQp5Nelqr%2BUHRoQE0n5QQYvja8Y6olOFKz6DXNbebZREADTtRYP%2BLAuNok1uoqVzodo2yqcG66aPa5NfLjfPkJOoImooqfWFXeit9NhlmEX5uLt0uQC0dRmqAQAH3GwhuI40MZc%2FvVV8yWZZ5VDqoNponn6PUIcT9eM%2F527Js3VSWfg%2FH7I6S6YKMvmZn6IaWA49uLoo&X-Amz-Signature=823019ab1882cc8905d8b9a9a3f16a7e2aab78881a2aa37a4ba02dd215bd7f61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDRMWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs1gaRnm0pQ6i93mROGO7fb7aQimGehL6r6QbRZF%2BtrAIhAPfrCHJA9EHTBb%2FnnxqFO%2FJd9el8thKgd1%2FEu%2B9iGkluKv8DCFUQABoMNjM3NDIzMTgzODA1IgwUVOhoIErPHSgBN%2FAq3AMSlIwHLh7HkEo45er7LMSJKE8N%2Fj9h8p5nXFQeZaxAUEeSqMgm%2BEbB8TT%2FJoQhXs5EcyDfm28JejMs5BkEZIG9ABcnMGkqxI6hBT4XNYsd4WN63BZ3JhQeEN7c444VeOX5Nl8L74mBjmwNwm5HJWDRBTbHazvMwa8iG3L0TifdSIPa7XHGQDTbMkrJ95Hgy6qmJWJVqgG6gDezNHHn%2FbSKDKpqxoKvlUqHSOo%2Bn%2BXsMYsKa%2FtBXsWCSvP9wKQGcmtXP7NUVgKb6TpddcL70yy0PlS7iVGkUtcqm%2F0024TxENYHfcXFmGwzyfNr%2F%2FQImw8xfX5nmT%2Fvj7igafEHlHUvRxYDUJ1NqhHyyimk2mjZ3eZZIzEWNj9sV7Ad45AKYSV0SPqvJnohRkyr%2Fk2PnBxCxDl5kE0okbwVqiQApmyyr6YYUlOCfpjHWVSmxGlouCCey9hOs8zx9yFPUm3qiW0pmbLEUC8lFPIhkuMXYmyg34lAIyNfnDiHIWuuyZVQ1fkTr8zJCujMKy2cJSlrDybBh1iEobhO3qR1rlS64KTges7b4a2t%2BQFHQmh8IFZswnrEnWYZZPiJrSOSnXCXIq6CpcF3wTB86oK9F4IZxpXZNV%2F3O2z%2Fnabemc5q7zCqsJi%2FBjqkAXoFybxSVQR7gfY7aw4kxQp5Nelqr%2BUHRoQE0n5QQYvja8Y6olOFKz6DXNbebZREADTtRYP%2BLAuNok1uoqVzodo2yqcG66aPa5NfLjfPkJOoImooqfWFXeit9NhlmEX5uLt0uQC0dRmqAQAH3GwhuI40MZc%2FvVV8yWZZ5VDqoNponn6PUIcT9eM%2F527Js3VSWfg%2FH7I6S6YKMvmZn6IaWA49uLoo&X-Amz-Signature=f7fc8567f870d1a3c78ba1e5bb6659af8b925892385c29430de00240cd821540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDRMWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs1gaRnm0pQ6i93mROGO7fb7aQimGehL6r6QbRZF%2BtrAIhAPfrCHJA9EHTBb%2FnnxqFO%2FJd9el8thKgd1%2FEu%2B9iGkluKv8DCFUQABoMNjM3NDIzMTgzODA1IgwUVOhoIErPHSgBN%2FAq3AMSlIwHLh7HkEo45er7LMSJKE8N%2Fj9h8p5nXFQeZaxAUEeSqMgm%2BEbB8TT%2FJoQhXs5EcyDfm28JejMs5BkEZIG9ABcnMGkqxI6hBT4XNYsd4WN63BZ3JhQeEN7c444VeOX5Nl8L74mBjmwNwm5HJWDRBTbHazvMwa8iG3L0TifdSIPa7XHGQDTbMkrJ95Hgy6qmJWJVqgG6gDezNHHn%2FbSKDKpqxoKvlUqHSOo%2Bn%2BXsMYsKa%2FtBXsWCSvP9wKQGcmtXP7NUVgKb6TpddcL70yy0PlS7iVGkUtcqm%2F0024TxENYHfcXFmGwzyfNr%2F%2FQImw8xfX5nmT%2Fvj7igafEHlHUvRxYDUJ1NqhHyyimk2mjZ3eZZIzEWNj9sV7Ad45AKYSV0SPqvJnohRkyr%2Fk2PnBxCxDl5kE0okbwVqiQApmyyr6YYUlOCfpjHWVSmxGlouCCey9hOs8zx9yFPUm3qiW0pmbLEUC8lFPIhkuMXYmyg34lAIyNfnDiHIWuuyZVQ1fkTr8zJCujMKy2cJSlrDybBh1iEobhO3qR1rlS64KTges7b4a2t%2BQFHQmh8IFZswnrEnWYZZPiJrSOSnXCXIq6CpcF3wTB86oK9F4IZxpXZNV%2F3O2z%2Fnabemc5q7zCqsJi%2FBjqkAXoFybxSVQR7gfY7aw4kxQp5Nelqr%2BUHRoQE0n5QQYvja8Y6olOFKz6DXNbebZREADTtRYP%2BLAuNok1uoqVzodo2yqcG66aPa5NfLjfPkJOoImooqfWFXeit9NhlmEX5uLt0uQC0dRmqAQAH3GwhuI40MZc%2FvVV8yWZZ5VDqoNponn6PUIcT9eM%2F527Js3VSWfg%2FH7I6S6YKMvmZn6IaWA49uLoo&X-Amz-Signature=db56ab8d217cca8f4ac0312a54ea403b736fdaeb0b69491b5ff1d01c38b78cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
