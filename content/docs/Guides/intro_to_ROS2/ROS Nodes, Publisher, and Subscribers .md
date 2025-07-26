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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P6S33Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBWWDkTbLBj6IuJWxcRSO6m%2F0ZQZDG%2FhGFpK0wDk3UsXAiANl%2FFWJCn7OX0wgVrL56YOyPXJtzXWrw8QMrI9sGPzxir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMj9N4NVbwUI3Dq%2FRjKtwDkQoVrHHxcwmnDNC9Azd1kd3f3Xnq0r97Rra6kcYhSVpPCptLWVTfhfy6Io%2BIs7RknQBKkqqXfdk5%2FO3tQmsT%2F40FM0U2t6n5cNky%2FILamqD3W8MCTHMuvgD2rmMokbckYbavoSGyCkZiTEjEj8FYyKUzqiuvQ0zGIrl2UMd5JrrqsP73TJ2JVzeMKreodKLhF5E%2F5j2qH%2FcXdBEpSJHTJieTok%2BgYp8DYAqun6LNRWt6pOS3QpX5cWVKFcA0ZNjefmYaA5ka2Dkef5qru313svaimCyStt8w%2Bgv0GgoFr6UJ5bXZ3KbcAijAEpSAPXTN4%2BIa6mTOnCbZazSifPAL57GJ6%2BR9mVlvbyPzOuw6LLxl5rnWM%2B3lMEXhpagZrBQBZAF4mzW%2Bp%2F8JOVnLw6UzKd7LOYkbseP0KhMncQVcK3X49jQbad5mOl8psP8dmd5WjdB2lKNfkT7M7oFVqP0gNHuYPyzwPFFtgGRX4um5yNHy9%2FVcHQs9DdFLdUd%2BTm6aOnU028Gy415UCnYm835UbvnDBPFik9Wc9ghebUo%2BF0Rj7eettYCSUksAwaeXtf6pixRhD650X42QhGMHKNPA4QAUHDLfLk%2FG0Gb0xrV%2FtJJxCJ90uXYFYX7cIZkwhv%2BUxAY6pgE80WEM80ORJgmp2N4GwNfrvPEbcdrZDag2sBYm%2BF0L4bx2jvy6NLO5Hy0AODbLswkl2zfUeUR1GGZzrYXP738YVkQXQUabDVg%2BEjxX1N4B979oHoTxR3yAlFMkj4EYApHQr4QUWpjuD1t0Eo%2BiNnHCEEYS%2FT7GJGYBUOqq7gOUc4czT0SOjSR%2FJc%2BBixK%2B7NHkJiuJSkTfRm1a7xBlNWNfWsDIMO%2BI&X-Amz-Signature=eaa67fc9cb8c751caab7d6b1db07e33cc44a1a2ddfbdc6b33b5f52c8d768def9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P6S33Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBWWDkTbLBj6IuJWxcRSO6m%2F0ZQZDG%2FhGFpK0wDk3UsXAiANl%2FFWJCn7OX0wgVrL56YOyPXJtzXWrw8QMrI9sGPzxir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMj9N4NVbwUI3Dq%2FRjKtwDkQoVrHHxcwmnDNC9Azd1kd3f3Xnq0r97Rra6kcYhSVpPCptLWVTfhfy6Io%2BIs7RknQBKkqqXfdk5%2FO3tQmsT%2F40FM0U2t6n5cNky%2FILamqD3W8MCTHMuvgD2rmMokbckYbavoSGyCkZiTEjEj8FYyKUzqiuvQ0zGIrl2UMd5JrrqsP73TJ2JVzeMKreodKLhF5E%2F5j2qH%2FcXdBEpSJHTJieTok%2BgYp8DYAqun6LNRWt6pOS3QpX5cWVKFcA0ZNjefmYaA5ka2Dkef5qru313svaimCyStt8w%2Bgv0GgoFr6UJ5bXZ3KbcAijAEpSAPXTN4%2BIa6mTOnCbZazSifPAL57GJ6%2BR9mVlvbyPzOuw6LLxl5rnWM%2B3lMEXhpagZrBQBZAF4mzW%2Bp%2F8JOVnLw6UzKd7LOYkbseP0KhMncQVcK3X49jQbad5mOl8psP8dmd5WjdB2lKNfkT7M7oFVqP0gNHuYPyzwPFFtgGRX4um5yNHy9%2FVcHQs9DdFLdUd%2BTm6aOnU028Gy415UCnYm835UbvnDBPFik9Wc9ghebUo%2BF0Rj7eettYCSUksAwaeXtf6pixRhD650X42QhGMHKNPA4QAUHDLfLk%2FG0Gb0xrV%2FtJJxCJ90uXYFYX7cIZkwhv%2BUxAY6pgE80WEM80ORJgmp2N4GwNfrvPEbcdrZDag2sBYm%2BF0L4bx2jvy6NLO5Hy0AODbLswkl2zfUeUR1GGZzrYXP738YVkQXQUabDVg%2BEjxX1N4B979oHoTxR3yAlFMkj4EYApHQr4QUWpjuD1t0Eo%2BiNnHCEEYS%2FT7GJGYBUOqq7gOUc4czT0SOjSR%2FJc%2BBixK%2B7NHkJiuJSkTfRm1a7xBlNWNfWsDIMO%2BI&X-Amz-Signature=95d7f6e0da37d56b11f06ad16bceebe6a8c56ddc4d42f810e2ab5c65b87f4b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P6S33Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBWWDkTbLBj6IuJWxcRSO6m%2F0ZQZDG%2FhGFpK0wDk3UsXAiANl%2FFWJCn7OX0wgVrL56YOyPXJtzXWrw8QMrI9sGPzxir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMj9N4NVbwUI3Dq%2FRjKtwDkQoVrHHxcwmnDNC9Azd1kd3f3Xnq0r97Rra6kcYhSVpPCptLWVTfhfy6Io%2BIs7RknQBKkqqXfdk5%2FO3tQmsT%2F40FM0U2t6n5cNky%2FILamqD3W8MCTHMuvgD2rmMokbckYbavoSGyCkZiTEjEj8FYyKUzqiuvQ0zGIrl2UMd5JrrqsP73TJ2JVzeMKreodKLhF5E%2F5j2qH%2FcXdBEpSJHTJieTok%2BgYp8DYAqun6LNRWt6pOS3QpX5cWVKFcA0ZNjefmYaA5ka2Dkef5qru313svaimCyStt8w%2Bgv0GgoFr6UJ5bXZ3KbcAijAEpSAPXTN4%2BIa6mTOnCbZazSifPAL57GJ6%2BR9mVlvbyPzOuw6LLxl5rnWM%2B3lMEXhpagZrBQBZAF4mzW%2Bp%2F8JOVnLw6UzKd7LOYkbseP0KhMncQVcK3X49jQbad5mOl8psP8dmd5WjdB2lKNfkT7M7oFVqP0gNHuYPyzwPFFtgGRX4um5yNHy9%2FVcHQs9DdFLdUd%2BTm6aOnU028Gy415UCnYm835UbvnDBPFik9Wc9ghebUo%2BF0Rj7eettYCSUksAwaeXtf6pixRhD650X42QhGMHKNPA4QAUHDLfLk%2FG0Gb0xrV%2FtJJxCJ90uXYFYX7cIZkwhv%2BUxAY6pgE80WEM80ORJgmp2N4GwNfrvPEbcdrZDag2sBYm%2BF0L4bx2jvy6NLO5Hy0AODbLswkl2zfUeUR1GGZzrYXP738YVkQXQUabDVg%2BEjxX1N4B979oHoTxR3yAlFMkj4EYApHQr4QUWpjuD1t0Eo%2BiNnHCEEYS%2FT7GJGYBUOqq7gOUc4czT0SOjSR%2FJc%2BBixK%2B7NHkJiuJSkTfRm1a7xBlNWNfWsDIMO%2BI&X-Amz-Signature=54f754d93eedd87172afff170eeaaff1d8d440cb434fb2ece10b57ec5ae98cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P6S33Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBWWDkTbLBj6IuJWxcRSO6m%2F0ZQZDG%2FhGFpK0wDk3UsXAiANl%2FFWJCn7OX0wgVrL56YOyPXJtzXWrw8QMrI9sGPzxir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMj9N4NVbwUI3Dq%2FRjKtwDkQoVrHHxcwmnDNC9Azd1kd3f3Xnq0r97Rra6kcYhSVpPCptLWVTfhfy6Io%2BIs7RknQBKkqqXfdk5%2FO3tQmsT%2F40FM0U2t6n5cNky%2FILamqD3W8MCTHMuvgD2rmMokbckYbavoSGyCkZiTEjEj8FYyKUzqiuvQ0zGIrl2UMd5JrrqsP73TJ2JVzeMKreodKLhF5E%2F5j2qH%2FcXdBEpSJHTJieTok%2BgYp8DYAqun6LNRWt6pOS3QpX5cWVKFcA0ZNjefmYaA5ka2Dkef5qru313svaimCyStt8w%2Bgv0GgoFr6UJ5bXZ3KbcAijAEpSAPXTN4%2BIa6mTOnCbZazSifPAL57GJ6%2BR9mVlvbyPzOuw6LLxl5rnWM%2B3lMEXhpagZrBQBZAF4mzW%2Bp%2F8JOVnLw6UzKd7LOYkbseP0KhMncQVcK3X49jQbad5mOl8psP8dmd5WjdB2lKNfkT7M7oFVqP0gNHuYPyzwPFFtgGRX4um5yNHy9%2FVcHQs9DdFLdUd%2BTm6aOnU028Gy415UCnYm835UbvnDBPFik9Wc9ghebUo%2BF0Rj7eettYCSUksAwaeXtf6pixRhD650X42QhGMHKNPA4QAUHDLfLk%2FG0Gb0xrV%2FtJJxCJ90uXYFYX7cIZkwhv%2BUxAY6pgE80WEM80ORJgmp2N4GwNfrvPEbcdrZDag2sBYm%2BF0L4bx2jvy6NLO5Hy0AODbLswkl2zfUeUR1GGZzrYXP738YVkQXQUabDVg%2BEjxX1N4B979oHoTxR3yAlFMkj4EYApHQr4QUWpjuD1t0Eo%2BiNnHCEEYS%2FT7GJGYBUOqq7gOUc4czT0SOjSR%2FJc%2BBixK%2B7NHkJiuJSkTfRm1a7xBlNWNfWsDIMO%2BI&X-Amz-Signature=d352c36dc13597ac5539af0e9b3a2e4bf230170e9ebee866bb3e6618177efaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P6S33Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBWWDkTbLBj6IuJWxcRSO6m%2F0ZQZDG%2FhGFpK0wDk3UsXAiANl%2FFWJCn7OX0wgVrL56YOyPXJtzXWrw8QMrI9sGPzxir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMj9N4NVbwUI3Dq%2FRjKtwDkQoVrHHxcwmnDNC9Azd1kd3f3Xnq0r97Rra6kcYhSVpPCptLWVTfhfy6Io%2BIs7RknQBKkqqXfdk5%2FO3tQmsT%2F40FM0U2t6n5cNky%2FILamqD3W8MCTHMuvgD2rmMokbckYbavoSGyCkZiTEjEj8FYyKUzqiuvQ0zGIrl2UMd5JrrqsP73TJ2JVzeMKreodKLhF5E%2F5j2qH%2FcXdBEpSJHTJieTok%2BgYp8DYAqun6LNRWt6pOS3QpX5cWVKFcA0ZNjefmYaA5ka2Dkef5qru313svaimCyStt8w%2Bgv0GgoFr6UJ5bXZ3KbcAijAEpSAPXTN4%2BIa6mTOnCbZazSifPAL57GJ6%2BR9mVlvbyPzOuw6LLxl5rnWM%2B3lMEXhpagZrBQBZAF4mzW%2Bp%2F8JOVnLw6UzKd7LOYkbseP0KhMncQVcK3X49jQbad5mOl8psP8dmd5WjdB2lKNfkT7M7oFVqP0gNHuYPyzwPFFtgGRX4um5yNHy9%2FVcHQs9DdFLdUd%2BTm6aOnU028Gy415UCnYm835UbvnDBPFik9Wc9ghebUo%2BF0Rj7eettYCSUksAwaeXtf6pixRhD650X42QhGMHKNPA4QAUHDLfLk%2FG0Gb0xrV%2FtJJxCJ90uXYFYX7cIZkwhv%2BUxAY6pgE80WEM80ORJgmp2N4GwNfrvPEbcdrZDag2sBYm%2BF0L4bx2jvy6NLO5Hy0AODbLswkl2zfUeUR1GGZzrYXP738YVkQXQUabDVg%2BEjxX1N4B979oHoTxR3yAlFMkj4EYApHQr4QUWpjuD1t0Eo%2BiNnHCEEYS%2FT7GJGYBUOqq7gOUc4czT0SOjSR%2FJc%2BBixK%2B7NHkJiuJSkTfRm1a7xBlNWNfWsDIMO%2BI&X-Amz-Signature=1b9ace534964de0389d570ae44cfe5a3e800d72313ffc6b0f3ed3433f5b57b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P6S33Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBWWDkTbLBj6IuJWxcRSO6m%2F0ZQZDG%2FhGFpK0wDk3UsXAiANl%2FFWJCn7OX0wgVrL56YOyPXJtzXWrw8QMrI9sGPzxir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMj9N4NVbwUI3Dq%2FRjKtwDkQoVrHHxcwmnDNC9Azd1kd3f3Xnq0r97Rra6kcYhSVpPCptLWVTfhfy6Io%2BIs7RknQBKkqqXfdk5%2FO3tQmsT%2F40FM0U2t6n5cNky%2FILamqD3W8MCTHMuvgD2rmMokbckYbavoSGyCkZiTEjEj8FYyKUzqiuvQ0zGIrl2UMd5JrrqsP73TJ2JVzeMKreodKLhF5E%2F5j2qH%2FcXdBEpSJHTJieTok%2BgYp8DYAqun6LNRWt6pOS3QpX5cWVKFcA0ZNjefmYaA5ka2Dkef5qru313svaimCyStt8w%2Bgv0GgoFr6UJ5bXZ3KbcAijAEpSAPXTN4%2BIa6mTOnCbZazSifPAL57GJ6%2BR9mVlvbyPzOuw6LLxl5rnWM%2B3lMEXhpagZrBQBZAF4mzW%2Bp%2F8JOVnLw6UzKd7LOYkbseP0KhMncQVcK3X49jQbad5mOl8psP8dmd5WjdB2lKNfkT7M7oFVqP0gNHuYPyzwPFFtgGRX4um5yNHy9%2FVcHQs9DdFLdUd%2BTm6aOnU028Gy415UCnYm835UbvnDBPFik9Wc9ghebUo%2BF0Rj7eettYCSUksAwaeXtf6pixRhD650X42QhGMHKNPA4QAUHDLfLk%2FG0Gb0xrV%2FtJJxCJ90uXYFYX7cIZkwhv%2BUxAY6pgE80WEM80ORJgmp2N4GwNfrvPEbcdrZDag2sBYm%2BF0L4bx2jvy6NLO5Hy0AODbLswkl2zfUeUR1GGZzrYXP738YVkQXQUabDVg%2BEjxX1N4B979oHoTxR3yAlFMkj4EYApHQr4QUWpjuD1t0Eo%2BiNnHCEEYS%2FT7GJGYBUOqq7gOUc4czT0SOjSR%2FJc%2BBixK%2B7NHkJiuJSkTfRm1a7xBlNWNfWsDIMO%2BI&X-Amz-Signature=c44ff510be32d3081e51a65f34c83888766769008c6a9f4456d8dbd82b11f650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P6S33Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBWWDkTbLBj6IuJWxcRSO6m%2F0ZQZDG%2FhGFpK0wDk3UsXAiANl%2FFWJCn7OX0wgVrL56YOyPXJtzXWrw8QMrI9sGPzxir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMj9N4NVbwUI3Dq%2FRjKtwDkQoVrHHxcwmnDNC9Azd1kd3f3Xnq0r97Rra6kcYhSVpPCptLWVTfhfy6Io%2BIs7RknQBKkqqXfdk5%2FO3tQmsT%2F40FM0U2t6n5cNky%2FILamqD3W8MCTHMuvgD2rmMokbckYbavoSGyCkZiTEjEj8FYyKUzqiuvQ0zGIrl2UMd5JrrqsP73TJ2JVzeMKreodKLhF5E%2F5j2qH%2FcXdBEpSJHTJieTok%2BgYp8DYAqun6LNRWt6pOS3QpX5cWVKFcA0ZNjefmYaA5ka2Dkef5qru313svaimCyStt8w%2Bgv0GgoFr6UJ5bXZ3KbcAijAEpSAPXTN4%2BIa6mTOnCbZazSifPAL57GJ6%2BR9mVlvbyPzOuw6LLxl5rnWM%2B3lMEXhpagZrBQBZAF4mzW%2Bp%2F8JOVnLw6UzKd7LOYkbseP0KhMncQVcK3X49jQbad5mOl8psP8dmd5WjdB2lKNfkT7M7oFVqP0gNHuYPyzwPFFtgGRX4um5yNHy9%2FVcHQs9DdFLdUd%2BTm6aOnU028Gy415UCnYm835UbvnDBPFik9Wc9ghebUo%2BF0Rj7eettYCSUksAwaeXtf6pixRhD650X42QhGMHKNPA4QAUHDLfLk%2FG0Gb0xrV%2FtJJxCJ90uXYFYX7cIZkwhv%2BUxAY6pgE80WEM80ORJgmp2N4GwNfrvPEbcdrZDag2sBYm%2BF0L4bx2jvy6NLO5Hy0AODbLswkl2zfUeUR1GGZzrYXP738YVkQXQUabDVg%2BEjxX1N4B979oHoTxR3yAlFMkj4EYApHQr4QUWpjuD1t0Eo%2BiNnHCEEYS%2FT7GJGYBUOqq7gOUc4czT0SOjSR%2FJc%2BBixK%2B7NHkJiuJSkTfRm1a7xBlNWNfWsDIMO%2BI&X-Amz-Signature=725ce97d37514f69a7906640fe87eaefe3e23bda296f52ea7a4ac16f1c1ff73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P6S33Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBWWDkTbLBj6IuJWxcRSO6m%2F0ZQZDG%2FhGFpK0wDk3UsXAiANl%2FFWJCn7OX0wgVrL56YOyPXJtzXWrw8QMrI9sGPzxir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMj9N4NVbwUI3Dq%2FRjKtwDkQoVrHHxcwmnDNC9Azd1kd3f3Xnq0r97Rra6kcYhSVpPCptLWVTfhfy6Io%2BIs7RknQBKkqqXfdk5%2FO3tQmsT%2F40FM0U2t6n5cNky%2FILamqD3W8MCTHMuvgD2rmMokbckYbavoSGyCkZiTEjEj8FYyKUzqiuvQ0zGIrl2UMd5JrrqsP73TJ2JVzeMKreodKLhF5E%2F5j2qH%2FcXdBEpSJHTJieTok%2BgYp8DYAqun6LNRWt6pOS3QpX5cWVKFcA0ZNjefmYaA5ka2Dkef5qru313svaimCyStt8w%2Bgv0GgoFr6UJ5bXZ3KbcAijAEpSAPXTN4%2BIa6mTOnCbZazSifPAL57GJ6%2BR9mVlvbyPzOuw6LLxl5rnWM%2B3lMEXhpagZrBQBZAF4mzW%2Bp%2F8JOVnLw6UzKd7LOYkbseP0KhMncQVcK3X49jQbad5mOl8psP8dmd5WjdB2lKNfkT7M7oFVqP0gNHuYPyzwPFFtgGRX4um5yNHy9%2FVcHQs9DdFLdUd%2BTm6aOnU028Gy415UCnYm835UbvnDBPFik9Wc9ghebUo%2BF0Rj7eettYCSUksAwaeXtf6pixRhD650X42QhGMHKNPA4QAUHDLfLk%2FG0Gb0xrV%2FtJJxCJ90uXYFYX7cIZkwhv%2BUxAY6pgE80WEM80ORJgmp2N4GwNfrvPEbcdrZDag2sBYm%2BF0L4bx2jvy6NLO5Hy0AODbLswkl2zfUeUR1GGZzrYXP738YVkQXQUabDVg%2BEjxX1N4B979oHoTxR3yAlFMkj4EYApHQr4QUWpjuD1t0Eo%2BiNnHCEEYS%2FT7GJGYBUOqq7gOUc4czT0SOjSR%2FJc%2BBixK%2B7NHkJiuJSkTfRm1a7xBlNWNfWsDIMO%2BI&X-Amz-Signature=3f1ad5efc8d0d63832e97dd64a79d425f1ed522434cd746743930c8366ce2097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
