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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=4da0bd451bb85f65901ed75499e7d473b4daf68d272214c0db36f7502438a42a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=4e01b28f4b1b3eed8ea9853e8b36760b437617db5b7dc660141f182c661cd3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=b158caca7628d6cfd1bc269e722c5aab2707fdf085539294e228e9ad49b71e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=0eeb0a32f2c92d1804b99077129df2db6c9bce0243164fdb2247bf246450efda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=9c8471fe5b483582dcfcc71cec8899b07a8be9f4de20f761daa92cdfc42f72c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=72f77339a13fa9f6c34666506e9bc5c8a9c7550fafc1ae5810f473863ff3fefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=b7c928f844dbd67efd571f663fe18bcb21c532460865033ca35fae26edde6797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=957a1b6ea3323f8b5f5df3dbb15ee0fbc40cde7c951f929a181c71e29404d01d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
