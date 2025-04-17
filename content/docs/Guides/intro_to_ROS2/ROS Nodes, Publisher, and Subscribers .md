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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQI23KC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpsMCYMo9GdRYvRSRayVusJave9p8TsYSj0ezU8%2BpTAIhAJNvoGQJ7SH0ZKj2ZI1eati7PucQ28VNBXnuuV0SDpHKKv8DCGYQABoMNjM3NDIzMTgzODA1IgzUe2SZP2lClPfXIdIq3AMa3hgRQZGs4Gx50KNJt3Y9gzNCHKg8kgpdYRClECgBBO%2F81AnQetxI1j9U6aIRFgLgM2KiVHrRXb7%2FvqeSn3aS0KJ4iqHtw5CF2uwxxlg5EUgOExbKTVUjMaTypYkUiLxSnpeTWN1r7Ord2vl9jbArnN%2Bg%2B%2BqftoPs5vwOxE6VUXaa2In5Mr9qyIAzS3mXaDbk0TmLVu8ykJzLnPiqpHtjwPcDMXc7CMkW%2F39lKehDRcGlw%2FKfoQxJ6JVMqxTkhKKNgssgfe6LUAP8oj2Pc7SB2Toad9Spg%2BeHJs8VNlB%2BNHYeTImpI8xud6P1HFw2PA1oY8TVPUlkPKkWH7Q4dQdg5%2F0nlNJh0Hks9pY4z825dHiLL84mZqVhd%2FtRWUiAZGuGsJQ309d7WikAvQM%2FLBXYu508WInuFEv%2FSVxv8TGyksbxqqtjXT7NcC9ILlE0UlsSNg5nrXI8dRgilYT6uXKAtCWgJh6Ytv7jjYPDNSN8ZKkf4RmgJ6Fg%2BubJ7cFppMwUF%2FdUMILuH%2BzEOye1a%2BLgbwS%2F2I1gVWZhwJGY7%2FHnHZvP%2F1rMj4%2FUD6sQ833fn0FfU0RT5qiZvCR7brSKuIiLQH%2B%2Byd29TJpl0%2FVDLjTZPExusAEne6rGpuzaZjCh0YXABjqkAfNbSG3SqOS%2FCEWD2koFixWQbsVCw2t%2BdCqVQr17ll3X%2FGDOe36Tj1dXw2zO1HUW%2Bw%2BVh2blvCYrm0OBjf8YIM%2FRy1o5V06UYfFzSyjYwyei4jPE9Ei%2BUlhjwR%2FcTlvZAcgEt78eLNsUpMTUjbb2wKyRa0D91S0kGWLto2En4Xhh7KHxtRg8wGqwS8JwfmU9n3jBWeP2e5jVjEdUjW5wB%2FYkl5fk&X-Amz-Signature=a18832b7cb8990dc5efc8ff9d5251a9bd42455684459cbd8f6339b36ff7998a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQI23KC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpsMCYMo9GdRYvRSRayVusJave9p8TsYSj0ezU8%2BpTAIhAJNvoGQJ7SH0ZKj2ZI1eati7PucQ28VNBXnuuV0SDpHKKv8DCGYQABoMNjM3NDIzMTgzODA1IgzUe2SZP2lClPfXIdIq3AMa3hgRQZGs4Gx50KNJt3Y9gzNCHKg8kgpdYRClECgBBO%2F81AnQetxI1j9U6aIRFgLgM2KiVHrRXb7%2FvqeSn3aS0KJ4iqHtw5CF2uwxxlg5EUgOExbKTVUjMaTypYkUiLxSnpeTWN1r7Ord2vl9jbArnN%2Bg%2B%2BqftoPs5vwOxE6VUXaa2In5Mr9qyIAzS3mXaDbk0TmLVu8ykJzLnPiqpHtjwPcDMXc7CMkW%2F39lKehDRcGlw%2FKfoQxJ6JVMqxTkhKKNgssgfe6LUAP8oj2Pc7SB2Toad9Spg%2BeHJs8VNlB%2BNHYeTImpI8xud6P1HFw2PA1oY8TVPUlkPKkWH7Q4dQdg5%2F0nlNJh0Hks9pY4z825dHiLL84mZqVhd%2FtRWUiAZGuGsJQ309d7WikAvQM%2FLBXYu508WInuFEv%2FSVxv8TGyksbxqqtjXT7NcC9ILlE0UlsSNg5nrXI8dRgilYT6uXKAtCWgJh6Ytv7jjYPDNSN8ZKkf4RmgJ6Fg%2BubJ7cFppMwUF%2FdUMILuH%2BzEOye1a%2BLgbwS%2F2I1gVWZhwJGY7%2FHnHZvP%2F1rMj4%2FUD6sQ833fn0FfU0RT5qiZvCR7brSKuIiLQH%2B%2Byd29TJpl0%2FVDLjTZPExusAEne6rGpuzaZjCh0YXABjqkAfNbSG3SqOS%2FCEWD2koFixWQbsVCw2t%2BdCqVQr17ll3X%2FGDOe36Tj1dXw2zO1HUW%2Bw%2BVh2blvCYrm0OBjf8YIM%2FRy1o5V06UYfFzSyjYwyei4jPE9Ei%2BUlhjwR%2FcTlvZAcgEt78eLNsUpMTUjbb2wKyRa0D91S0kGWLto2En4Xhh7KHxtRg8wGqwS8JwfmU9n3jBWeP2e5jVjEdUjW5wB%2FYkl5fk&X-Amz-Signature=42db3891c7dfae5d4ba6f4ece7c0912535a2e10656d8a867b509748bfd473901&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQI23KC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpsMCYMo9GdRYvRSRayVusJave9p8TsYSj0ezU8%2BpTAIhAJNvoGQJ7SH0ZKj2ZI1eati7PucQ28VNBXnuuV0SDpHKKv8DCGYQABoMNjM3NDIzMTgzODA1IgzUe2SZP2lClPfXIdIq3AMa3hgRQZGs4Gx50KNJt3Y9gzNCHKg8kgpdYRClECgBBO%2F81AnQetxI1j9U6aIRFgLgM2KiVHrRXb7%2FvqeSn3aS0KJ4iqHtw5CF2uwxxlg5EUgOExbKTVUjMaTypYkUiLxSnpeTWN1r7Ord2vl9jbArnN%2Bg%2B%2BqftoPs5vwOxE6VUXaa2In5Mr9qyIAzS3mXaDbk0TmLVu8ykJzLnPiqpHtjwPcDMXc7CMkW%2F39lKehDRcGlw%2FKfoQxJ6JVMqxTkhKKNgssgfe6LUAP8oj2Pc7SB2Toad9Spg%2BeHJs8VNlB%2BNHYeTImpI8xud6P1HFw2PA1oY8TVPUlkPKkWH7Q4dQdg5%2F0nlNJh0Hks9pY4z825dHiLL84mZqVhd%2FtRWUiAZGuGsJQ309d7WikAvQM%2FLBXYu508WInuFEv%2FSVxv8TGyksbxqqtjXT7NcC9ILlE0UlsSNg5nrXI8dRgilYT6uXKAtCWgJh6Ytv7jjYPDNSN8ZKkf4RmgJ6Fg%2BubJ7cFppMwUF%2FdUMILuH%2BzEOye1a%2BLgbwS%2F2I1gVWZhwJGY7%2FHnHZvP%2F1rMj4%2FUD6sQ833fn0FfU0RT5qiZvCR7brSKuIiLQH%2B%2Byd29TJpl0%2FVDLjTZPExusAEne6rGpuzaZjCh0YXABjqkAfNbSG3SqOS%2FCEWD2koFixWQbsVCw2t%2BdCqVQr17ll3X%2FGDOe36Tj1dXw2zO1HUW%2Bw%2BVh2blvCYrm0OBjf8YIM%2FRy1o5V06UYfFzSyjYwyei4jPE9Ei%2BUlhjwR%2FcTlvZAcgEt78eLNsUpMTUjbb2wKyRa0D91S0kGWLto2En4Xhh7KHxtRg8wGqwS8JwfmU9n3jBWeP2e5jVjEdUjW5wB%2FYkl5fk&X-Amz-Signature=951cbe5dc829c441ea5be8122538ddc81ae048d73b8eb10633308b022ba84217&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQI23KC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpsMCYMo9GdRYvRSRayVusJave9p8TsYSj0ezU8%2BpTAIhAJNvoGQJ7SH0ZKj2ZI1eati7PucQ28VNBXnuuV0SDpHKKv8DCGYQABoMNjM3NDIzMTgzODA1IgzUe2SZP2lClPfXIdIq3AMa3hgRQZGs4Gx50KNJt3Y9gzNCHKg8kgpdYRClECgBBO%2F81AnQetxI1j9U6aIRFgLgM2KiVHrRXb7%2FvqeSn3aS0KJ4iqHtw5CF2uwxxlg5EUgOExbKTVUjMaTypYkUiLxSnpeTWN1r7Ord2vl9jbArnN%2Bg%2B%2BqftoPs5vwOxE6VUXaa2In5Mr9qyIAzS3mXaDbk0TmLVu8ykJzLnPiqpHtjwPcDMXc7CMkW%2F39lKehDRcGlw%2FKfoQxJ6JVMqxTkhKKNgssgfe6LUAP8oj2Pc7SB2Toad9Spg%2BeHJs8VNlB%2BNHYeTImpI8xud6P1HFw2PA1oY8TVPUlkPKkWH7Q4dQdg5%2F0nlNJh0Hks9pY4z825dHiLL84mZqVhd%2FtRWUiAZGuGsJQ309d7WikAvQM%2FLBXYu508WInuFEv%2FSVxv8TGyksbxqqtjXT7NcC9ILlE0UlsSNg5nrXI8dRgilYT6uXKAtCWgJh6Ytv7jjYPDNSN8ZKkf4RmgJ6Fg%2BubJ7cFppMwUF%2FdUMILuH%2BzEOye1a%2BLgbwS%2F2I1gVWZhwJGY7%2FHnHZvP%2F1rMj4%2FUD6sQ833fn0FfU0RT5qiZvCR7brSKuIiLQH%2B%2Byd29TJpl0%2FVDLjTZPExusAEne6rGpuzaZjCh0YXABjqkAfNbSG3SqOS%2FCEWD2koFixWQbsVCw2t%2BdCqVQr17ll3X%2FGDOe36Tj1dXw2zO1HUW%2Bw%2BVh2blvCYrm0OBjf8YIM%2FRy1o5V06UYfFzSyjYwyei4jPE9Ei%2BUlhjwR%2FcTlvZAcgEt78eLNsUpMTUjbb2wKyRa0D91S0kGWLto2En4Xhh7KHxtRg8wGqwS8JwfmU9n3jBWeP2e5jVjEdUjW5wB%2FYkl5fk&X-Amz-Signature=eda5dbe4ca3c272777e4c7c5adc9209137ac6d881b3ca11624006ddf71ead550&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQI23KC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpsMCYMo9GdRYvRSRayVusJave9p8TsYSj0ezU8%2BpTAIhAJNvoGQJ7SH0ZKj2ZI1eati7PucQ28VNBXnuuV0SDpHKKv8DCGYQABoMNjM3NDIzMTgzODA1IgzUe2SZP2lClPfXIdIq3AMa3hgRQZGs4Gx50KNJt3Y9gzNCHKg8kgpdYRClECgBBO%2F81AnQetxI1j9U6aIRFgLgM2KiVHrRXb7%2FvqeSn3aS0KJ4iqHtw5CF2uwxxlg5EUgOExbKTVUjMaTypYkUiLxSnpeTWN1r7Ord2vl9jbArnN%2Bg%2B%2BqftoPs5vwOxE6VUXaa2In5Mr9qyIAzS3mXaDbk0TmLVu8ykJzLnPiqpHtjwPcDMXc7CMkW%2F39lKehDRcGlw%2FKfoQxJ6JVMqxTkhKKNgssgfe6LUAP8oj2Pc7SB2Toad9Spg%2BeHJs8VNlB%2BNHYeTImpI8xud6P1HFw2PA1oY8TVPUlkPKkWH7Q4dQdg5%2F0nlNJh0Hks9pY4z825dHiLL84mZqVhd%2FtRWUiAZGuGsJQ309d7WikAvQM%2FLBXYu508WInuFEv%2FSVxv8TGyksbxqqtjXT7NcC9ILlE0UlsSNg5nrXI8dRgilYT6uXKAtCWgJh6Ytv7jjYPDNSN8ZKkf4RmgJ6Fg%2BubJ7cFppMwUF%2FdUMILuH%2BzEOye1a%2BLgbwS%2F2I1gVWZhwJGY7%2FHnHZvP%2F1rMj4%2FUD6sQ833fn0FfU0RT5qiZvCR7brSKuIiLQH%2B%2Byd29TJpl0%2FVDLjTZPExusAEne6rGpuzaZjCh0YXABjqkAfNbSG3SqOS%2FCEWD2koFixWQbsVCw2t%2BdCqVQr17ll3X%2FGDOe36Tj1dXw2zO1HUW%2Bw%2BVh2blvCYrm0OBjf8YIM%2FRy1o5V06UYfFzSyjYwyei4jPE9Ei%2BUlhjwR%2FcTlvZAcgEt78eLNsUpMTUjbb2wKyRa0D91S0kGWLto2En4Xhh7KHxtRg8wGqwS8JwfmU9n3jBWeP2e5jVjEdUjW5wB%2FYkl5fk&X-Amz-Signature=0cb085d331058bbf872e005ed5ac1ba5f6ca50af63efc1ba94d890332b9039e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQI23KC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpsMCYMo9GdRYvRSRayVusJave9p8TsYSj0ezU8%2BpTAIhAJNvoGQJ7SH0ZKj2ZI1eati7PucQ28VNBXnuuV0SDpHKKv8DCGYQABoMNjM3NDIzMTgzODA1IgzUe2SZP2lClPfXIdIq3AMa3hgRQZGs4Gx50KNJt3Y9gzNCHKg8kgpdYRClECgBBO%2F81AnQetxI1j9U6aIRFgLgM2KiVHrRXb7%2FvqeSn3aS0KJ4iqHtw5CF2uwxxlg5EUgOExbKTVUjMaTypYkUiLxSnpeTWN1r7Ord2vl9jbArnN%2Bg%2B%2BqftoPs5vwOxE6VUXaa2In5Mr9qyIAzS3mXaDbk0TmLVu8ykJzLnPiqpHtjwPcDMXc7CMkW%2F39lKehDRcGlw%2FKfoQxJ6JVMqxTkhKKNgssgfe6LUAP8oj2Pc7SB2Toad9Spg%2BeHJs8VNlB%2BNHYeTImpI8xud6P1HFw2PA1oY8TVPUlkPKkWH7Q4dQdg5%2F0nlNJh0Hks9pY4z825dHiLL84mZqVhd%2FtRWUiAZGuGsJQ309d7WikAvQM%2FLBXYu508WInuFEv%2FSVxv8TGyksbxqqtjXT7NcC9ILlE0UlsSNg5nrXI8dRgilYT6uXKAtCWgJh6Ytv7jjYPDNSN8ZKkf4RmgJ6Fg%2BubJ7cFppMwUF%2FdUMILuH%2BzEOye1a%2BLgbwS%2F2I1gVWZhwJGY7%2FHnHZvP%2F1rMj4%2FUD6sQ833fn0FfU0RT5qiZvCR7brSKuIiLQH%2B%2Byd29TJpl0%2FVDLjTZPExusAEne6rGpuzaZjCh0YXABjqkAfNbSG3SqOS%2FCEWD2koFixWQbsVCw2t%2BdCqVQr17ll3X%2FGDOe36Tj1dXw2zO1HUW%2Bw%2BVh2blvCYrm0OBjf8YIM%2FRy1o5V06UYfFzSyjYwyei4jPE9Ei%2BUlhjwR%2FcTlvZAcgEt78eLNsUpMTUjbb2wKyRa0D91S0kGWLto2En4Xhh7KHxtRg8wGqwS8JwfmU9n3jBWeP2e5jVjEdUjW5wB%2FYkl5fk&X-Amz-Signature=2ea8da78fc5fd0b7f85eea34746a44efbece1971934f147356d43b977d8b206c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQI23KC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpsMCYMo9GdRYvRSRayVusJave9p8TsYSj0ezU8%2BpTAIhAJNvoGQJ7SH0ZKj2ZI1eati7PucQ28VNBXnuuV0SDpHKKv8DCGYQABoMNjM3NDIzMTgzODA1IgzUe2SZP2lClPfXIdIq3AMa3hgRQZGs4Gx50KNJt3Y9gzNCHKg8kgpdYRClECgBBO%2F81AnQetxI1j9U6aIRFgLgM2KiVHrRXb7%2FvqeSn3aS0KJ4iqHtw5CF2uwxxlg5EUgOExbKTVUjMaTypYkUiLxSnpeTWN1r7Ord2vl9jbArnN%2Bg%2B%2BqftoPs5vwOxE6VUXaa2In5Mr9qyIAzS3mXaDbk0TmLVu8ykJzLnPiqpHtjwPcDMXc7CMkW%2F39lKehDRcGlw%2FKfoQxJ6JVMqxTkhKKNgssgfe6LUAP8oj2Pc7SB2Toad9Spg%2BeHJs8VNlB%2BNHYeTImpI8xud6P1HFw2PA1oY8TVPUlkPKkWH7Q4dQdg5%2F0nlNJh0Hks9pY4z825dHiLL84mZqVhd%2FtRWUiAZGuGsJQ309d7WikAvQM%2FLBXYu508WInuFEv%2FSVxv8TGyksbxqqtjXT7NcC9ILlE0UlsSNg5nrXI8dRgilYT6uXKAtCWgJh6Ytv7jjYPDNSN8ZKkf4RmgJ6Fg%2BubJ7cFppMwUF%2FdUMILuH%2BzEOye1a%2BLgbwS%2F2I1gVWZhwJGY7%2FHnHZvP%2F1rMj4%2FUD6sQ833fn0FfU0RT5qiZvCR7brSKuIiLQH%2B%2Byd29TJpl0%2FVDLjTZPExusAEne6rGpuzaZjCh0YXABjqkAfNbSG3SqOS%2FCEWD2koFixWQbsVCw2t%2BdCqVQr17ll3X%2FGDOe36Tj1dXw2zO1HUW%2Bw%2BVh2blvCYrm0OBjf8YIM%2FRy1o5V06UYfFzSyjYwyei4jPE9Ei%2BUlhjwR%2FcTlvZAcgEt78eLNsUpMTUjbb2wKyRa0D91S0kGWLto2En4Xhh7KHxtRg8wGqwS8JwfmU9n3jBWeP2e5jVjEdUjW5wB%2FYkl5fk&X-Amz-Signature=1e749ab4ec4a76d0df9bae5c118774ec0c55257e5bd7756c377f2a83fb884b97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQI23KC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpsMCYMo9GdRYvRSRayVusJave9p8TsYSj0ezU8%2BpTAIhAJNvoGQJ7SH0ZKj2ZI1eati7PucQ28VNBXnuuV0SDpHKKv8DCGYQABoMNjM3NDIzMTgzODA1IgzUe2SZP2lClPfXIdIq3AMa3hgRQZGs4Gx50KNJt3Y9gzNCHKg8kgpdYRClECgBBO%2F81AnQetxI1j9U6aIRFgLgM2KiVHrRXb7%2FvqeSn3aS0KJ4iqHtw5CF2uwxxlg5EUgOExbKTVUjMaTypYkUiLxSnpeTWN1r7Ord2vl9jbArnN%2Bg%2B%2BqftoPs5vwOxE6VUXaa2In5Mr9qyIAzS3mXaDbk0TmLVu8ykJzLnPiqpHtjwPcDMXc7CMkW%2F39lKehDRcGlw%2FKfoQxJ6JVMqxTkhKKNgssgfe6LUAP8oj2Pc7SB2Toad9Spg%2BeHJs8VNlB%2BNHYeTImpI8xud6P1HFw2PA1oY8TVPUlkPKkWH7Q4dQdg5%2F0nlNJh0Hks9pY4z825dHiLL84mZqVhd%2FtRWUiAZGuGsJQ309d7WikAvQM%2FLBXYu508WInuFEv%2FSVxv8TGyksbxqqtjXT7NcC9ILlE0UlsSNg5nrXI8dRgilYT6uXKAtCWgJh6Ytv7jjYPDNSN8ZKkf4RmgJ6Fg%2BubJ7cFppMwUF%2FdUMILuH%2BzEOye1a%2BLgbwS%2F2I1gVWZhwJGY7%2FHnHZvP%2F1rMj4%2FUD6sQ833fn0FfU0RT5qiZvCR7brSKuIiLQH%2B%2Byd29TJpl0%2FVDLjTZPExusAEne6rGpuzaZjCh0YXABjqkAfNbSG3SqOS%2FCEWD2koFixWQbsVCw2t%2BdCqVQr17ll3X%2FGDOe36Tj1dXw2zO1HUW%2Bw%2BVh2blvCYrm0OBjf8YIM%2FRy1o5V06UYfFzSyjYwyei4jPE9Ei%2BUlhjwR%2FcTlvZAcgEt78eLNsUpMTUjbb2wKyRa0D91S0kGWLto2En4Xhh7KHxtRg8wGqwS8JwfmU9n3jBWeP2e5jVjEdUjW5wB%2FYkl5fk&X-Amz-Signature=0a09a87d72d8a2979830e9243cea0a7717effd28e96e91be6d9950201d9cdec2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
