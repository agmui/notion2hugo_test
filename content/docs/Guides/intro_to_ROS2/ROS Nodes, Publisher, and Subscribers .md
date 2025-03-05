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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PN5XA5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxtwE3%2FnRmSVlN%2FP%2FnxTbFBJdPVzcklR1WQW%2FNPws01wIhAPpwG%2BPO398gpHkqYAj7XeZCMcMV%2FzJ0eZggLQ%2B90%2BBAKv8DCBoQABoMNjM3NDIzMTgzODA1Igw59xgr%2FN4WeAwiMx0q3AMPaO5oZUJiqgd7RhSKjEuLunbsV93Sk4J9uj9v%2F1M2AxgJtKvRPuGCdH6w16MMl95Kx77LzC%2B2n%2FE1s6DZy7Dw19YWKTj72x8bITDIqfkFVrOaCm71i0OIO2d9onNB5PmBzeMSUF924t23MFe%2BArbKxvJt8qoVA3CFa29Iwu4TiXSvW6J5s8C39DhlhKQBhSb%2BKO4auwXoBrtYoBK4dKp9kwoobUJVZmMzduC5eRev7D%2B0%2BjU29r2F05g6Fw%2FopCQO%2F5tWTM4oB3uIeiVI%2FwZDozrFMSRcoG%2Fghc8cDwcbT92VJe0rk9JVzRBJmq4pMB2HYO68LHzcdivs0HPux2M7r7eLPtLJVhU5XieFCqmrQWs158O9zQQQ9OSCI1Zhdp4WuONX1M%2Bp4%2F5FKdRpZd9ZM%2BLRG9VQg0ZhgqXtroCJEqWrubwkIuqm4rDMM6OTWiaFArIBnh0ir9JskJUZjPP1EJfGLoi58Kc4%2B0%2BJPDsVeVKGXiruczlOzxrgASRR49q1VsNEB5lWMwCl7nrdfy382B1YVVwvRapLdKBsqzsOmGu4D%2FDsF1V8%2BcJ1yo%2Bge%2F9vPPABIiBw5VlVi4TL14jAF%2FSWvORNaiHe65MxvIVRn7biEZ3jxBmrLQFOmDD6g6K%2BBjqkAWk5wTOx8QyG6zzDZT2WVDnOBz9E0WmTUUVHnp9FLVbj1s1Enx7lgCXnTZYRne5pIx9F9o3BD8bqqo0acBn%2BxeyNtElGTb2SCKjMlpqF8Z%2FtDRFqhk6YurCRKf8kR2LxJvAiGGEdragP1DpJGJNtKaFd%2FznZo1WedtSMUWkbMdkncAGL5CpAwuaDrkT%2FhyfaL0b%2FLUgs5SQ2revfl8Z7TKTmn8j7&X-Amz-Signature=842c497039f24f07e9e21df19ce9a88d6f0dc110cca695109ef2c5814eef8bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PN5XA5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxtwE3%2FnRmSVlN%2FP%2FnxTbFBJdPVzcklR1WQW%2FNPws01wIhAPpwG%2BPO398gpHkqYAj7XeZCMcMV%2FzJ0eZggLQ%2B90%2BBAKv8DCBoQABoMNjM3NDIzMTgzODA1Igw59xgr%2FN4WeAwiMx0q3AMPaO5oZUJiqgd7RhSKjEuLunbsV93Sk4J9uj9v%2F1M2AxgJtKvRPuGCdH6w16MMl95Kx77LzC%2B2n%2FE1s6DZy7Dw19YWKTj72x8bITDIqfkFVrOaCm71i0OIO2d9onNB5PmBzeMSUF924t23MFe%2BArbKxvJt8qoVA3CFa29Iwu4TiXSvW6J5s8C39DhlhKQBhSb%2BKO4auwXoBrtYoBK4dKp9kwoobUJVZmMzduC5eRev7D%2B0%2BjU29r2F05g6Fw%2FopCQO%2F5tWTM4oB3uIeiVI%2FwZDozrFMSRcoG%2Fghc8cDwcbT92VJe0rk9JVzRBJmq4pMB2HYO68LHzcdivs0HPux2M7r7eLPtLJVhU5XieFCqmrQWs158O9zQQQ9OSCI1Zhdp4WuONX1M%2Bp4%2F5FKdRpZd9ZM%2BLRG9VQg0ZhgqXtroCJEqWrubwkIuqm4rDMM6OTWiaFArIBnh0ir9JskJUZjPP1EJfGLoi58Kc4%2B0%2BJPDsVeVKGXiruczlOzxrgASRR49q1VsNEB5lWMwCl7nrdfy382B1YVVwvRapLdKBsqzsOmGu4D%2FDsF1V8%2BcJ1yo%2Bge%2F9vPPABIiBw5VlVi4TL14jAF%2FSWvORNaiHe65MxvIVRn7biEZ3jxBmrLQFOmDD6g6K%2BBjqkAWk5wTOx8QyG6zzDZT2WVDnOBz9E0WmTUUVHnp9FLVbj1s1Enx7lgCXnTZYRne5pIx9F9o3BD8bqqo0acBn%2BxeyNtElGTb2SCKjMlpqF8Z%2FtDRFqhk6YurCRKf8kR2LxJvAiGGEdragP1DpJGJNtKaFd%2FznZo1WedtSMUWkbMdkncAGL5CpAwuaDrkT%2FhyfaL0b%2FLUgs5SQ2revfl8Z7TKTmn8j7&X-Amz-Signature=e38754697400abb13247ba6af44ef6580bd1a1e879076d86de989dca2b8b98c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PN5XA5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxtwE3%2FnRmSVlN%2FP%2FnxTbFBJdPVzcklR1WQW%2FNPws01wIhAPpwG%2BPO398gpHkqYAj7XeZCMcMV%2FzJ0eZggLQ%2B90%2BBAKv8DCBoQABoMNjM3NDIzMTgzODA1Igw59xgr%2FN4WeAwiMx0q3AMPaO5oZUJiqgd7RhSKjEuLunbsV93Sk4J9uj9v%2F1M2AxgJtKvRPuGCdH6w16MMl95Kx77LzC%2B2n%2FE1s6DZy7Dw19YWKTj72x8bITDIqfkFVrOaCm71i0OIO2d9onNB5PmBzeMSUF924t23MFe%2BArbKxvJt8qoVA3CFa29Iwu4TiXSvW6J5s8C39DhlhKQBhSb%2BKO4auwXoBrtYoBK4dKp9kwoobUJVZmMzduC5eRev7D%2B0%2BjU29r2F05g6Fw%2FopCQO%2F5tWTM4oB3uIeiVI%2FwZDozrFMSRcoG%2Fghc8cDwcbT92VJe0rk9JVzRBJmq4pMB2HYO68LHzcdivs0HPux2M7r7eLPtLJVhU5XieFCqmrQWs158O9zQQQ9OSCI1Zhdp4WuONX1M%2Bp4%2F5FKdRpZd9ZM%2BLRG9VQg0ZhgqXtroCJEqWrubwkIuqm4rDMM6OTWiaFArIBnh0ir9JskJUZjPP1EJfGLoi58Kc4%2B0%2BJPDsVeVKGXiruczlOzxrgASRR49q1VsNEB5lWMwCl7nrdfy382B1YVVwvRapLdKBsqzsOmGu4D%2FDsF1V8%2BcJ1yo%2Bge%2F9vPPABIiBw5VlVi4TL14jAF%2FSWvORNaiHe65MxvIVRn7biEZ3jxBmrLQFOmDD6g6K%2BBjqkAWk5wTOx8QyG6zzDZT2WVDnOBz9E0WmTUUVHnp9FLVbj1s1Enx7lgCXnTZYRne5pIx9F9o3BD8bqqo0acBn%2BxeyNtElGTb2SCKjMlpqF8Z%2FtDRFqhk6YurCRKf8kR2LxJvAiGGEdragP1DpJGJNtKaFd%2FznZo1WedtSMUWkbMdkncAGL5CpAwuaDrkT%2FhyfaL0b%2FLUgs5SQ2revfl8Z7TKTmn8j7&X-Amz-Signature=42b61c3458433d2b48970728ebe82ec879ab77fe531016ce58fc6dfdf5b7be24&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PN5XA5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxtwE3%2FnRmSVlN%2FP%2FnxTbFBJdPVzcklR1WQW%2FNPws01wIhAPpwG%2BPO398gpHkqYAj7XeZCMcMV%2FzJ0eZggLQ%2B90%2BBAKv8DCBoQABoMNjM3NDIzMTgzODA1Igw59xgr%2FN4WeAwiMx0q3AMPaO5oZUJiqgd7RhSKjEuLunbsV93Sk4J9uj9v%2F1M2AxgJtKvRPuGCdH6w16MMl95Kx77LzC%2B2n%2FE1s6DZy7Dw19YWKTj72x8bITDIqfkFVrOaCm71i0OIO2d9onNB5PmBzeMSUF924t23MFe%2BArbKxvJt8qoVA3CFa29Iwu4TiXSvW6J5s8C39DhlhKQBhSb%2BKO4auwXoBrtYoBK4dKp9kwoobUJVZmMzduC5eRev7D%2B0%2BjU29r2F05g6Fw%2FopCQO%2F5tWTM4oB3uIeiVI%2FwZDozrFMSRcoG%2Fghc8cDwcbT92VJe0rk9JVzRBJmq4pMB2HYO68LHzcdivs0HPux2M7r7eLPtLJVhU5XieFCqmrQWs158O9zQQQ9OSCI1Zhdp4WuONX1M%2Bp4%2F5FKdRpZd9ZM%2BLRG9VQg0ZhgqXtroCJEqWrubwkIuqm4rDMM6OTWiaFArIBnh0ir9JskJUZjPP1EJfGLoi58Kc4%2B0%2BJPDsVeVKGXiruczlOzxrgASRR49q1VsNEB5lWMwCl7nrdfy382B1YVVwvRapLdKBsqzsOmGu4D%2FDsF1V8%2BcJ1yo%2Bge%2F9vPPABIiBw5VlVi4TL14jAF%2FSWvORNaiHe65MxvIVRn7biEZ3jxBmrLQFOmDD6g6K%2BBjqkAWk5wTOx8QyG6zzDZT2WVDnOBz9E0WmTUUVHnp9FLVbj1s1Enx7lgCXnTZYRne5pIx9F9o3BD8bqqo0acBn%2BxeyNtElGTb2SCKjMlpqF8Z%2FtDRFqhk6YurCRKf8kR2LxJvAiGGEdragP1DpJGJNtKaFd%2FznZo1WedtSMUWkbMdkncAGL5CpAwuaDrkT%2FhyfaL0b%2FLUgs5SQ2revfl8Z7TKTmn8j7&X-Amz-Signature=186fd35c457113abf6d55b694a8d2124d7d16f898df2884ff7c7606d72acbe13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PN5XA5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxtwE3%2FnRmSVlN%2FP%2FnxTbFBJdPVzcklR1WQW%2FNPws01wIhAPpwG%2BPO398gpHkqYAj7XeZCMcMV%2FzJ0eZggLQ%2B90%2BBAKv8DCBoQABoMNjM3NDIzMTgzODA1Igw59xgr%2FN4WeAwiMx0q3AMPaO5oZUJiqgd7RhSKjEuLunbsV93Sk4J9uj9v%2F1M2AxgJtKvRPuGCdH6w16MMl95Kx77LzC%2B2n%2FE1s6DZy7Dw19YWKTj72x8bITDIqfkFVrOaCm71i0OIO2d9onNB5PmBzeMSUF924t23MFe%2BArbKxvJt8qoVA3CFa29Iwu4TiXSvW6J5s8C39DhlhKQBhSb%2BKO4auwXoBrtYoBK4dKp9kwoobUJVZmMzduC5eRev7D%2B0%2BjU29r2F05g6Fw%2FopCQO%2F5tWTM4oB3uIeiVI%2FwZDozrFMSRcoG%2Fghc8cDwcbT92VJe0rk9JVzRBJmq4pMB2HYO68LHzcdivs0HPux2M7r7eLPtLJVhU5XieFCqmrQWs158O9zQQQ9OSCI1Zhdp4WuONX1M%2Bp4%2F5FKdRpZd9ZM%2BLRG9VQg0ZhgqXtroCJEqWrubwkIuqm4rDMM6OTWiaFArIBnh0ir9JskJUZjPP1EJfGLoi58Kc4%2B0%2BJPDsVeVKGXiruczlOzxrgASRR49q1VsNEB5lWMwCl7nrdfy382B1YVVwvRapLdKBsqzsOmGu4D%2FDsF1V8%2BcJ1yo%2Bge%2F9vPPABIiBw5VlVi4TL14jAF%2FSWvORNaiHe65MxvIVRn7biEZ3jxBmrLQFOmDD6g6K%2BBjqkAWk5wTOx8QyG6zzDZT2WVDnOBz9E0WmTUUVHnp9FLVbj1s1Enx7lgCXnTZYRne5pIx9F9o3BD8bqqo0acBn%2BxeyNtElGTb2SCKjMlpqF8Z%2FtDRFqhk6YurCRKf8kR2LxJvAiGGEdragP1DpJGJNtKaFd%2FznZo1WedtSMUWkbMdkncAGL5CpAwuaDrkT%2FhyfaL0b%2FLUgs5SQ2revfl8Z7TKTmn8j7&X-Amz-Signature=54acaa43ef55b964b85a9305544d971f3811367a4185d2ea9be06ce06ce65598&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PN5XA5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxtwE3%2FnRmSVlN%2FP%2FnxTbFBJdPVzcklR1WQW%2FNPws01wIhAPpwG%2BPO398gpHkqYAj7XeZCMcMV%2FzJ0eZggLQ%2B90%2BBAKv8DCBoQABoMNjM3NDIzMTgzODA1Igw59xgr%2FN4WeAwiMx0q3AMPaO5oZUJiqgd7RhSKjEuLunbsV93Sk4J9uj9v%2F1M2AxgJtKvRPuGCdH6w16MMl95Kx77LzC%2B2n%2FE1s6DZy7Dw19YWKTj72x8bITDIqfkFVrOaCm71i0OIO2d9onNB5PmBzeMSUF924t23MFe%2BArbKxvJt8qoVA3CFa29Iwu4TiXSvW6J5s8C39DhlhKQBhSb%2BKO4auwXoBrtYoBK4dKp9kwoobUJVZmMzduC5eRev7D%2B0%2BjU29r2F05g6Fw%2FopCQO%2F5tWTM4oB3uIeiVI%2FwZDozrFMSRcoG%2Fghc8cDwcbT92VJe0rk9JVzRBJmq4pMB2HYO68LHzcdivs0HPux2M7r7eLPtLJVhU5XieFCqmrQWs158O9zQQQ9OSCI1Zhdp4WuONX1M%2Bp4%2F5FKdRpZd9ZM%2BLRG9VQg0ZhgqXtroCJEqWrubwkIuqm4rDMM6OTWiaFArIBnh0ir9JskJUZjPP1EJfGLoi58Kc4%2B0%2BJPDsVeVKGXiruczlOzxrgASRR49q1VsNEB5lWMwCl7nrdfy382B1YVVwvRapLdKBsqzsOmGu4D%2FDsF1V8%2BcJ1yo%2Bge%2F9vPPABIiBw5VlVi4TL14jAF%2FSWvORNaiHe65MxvIVRn7biEZ3jxBmrLQFOmDD6g6K%2BBjqkAWk5wTOx8QyG6zzDZT2WVDnOBz9E0WmTUUVHnp9FLVbj1s1Enx7lgCXnTZYRne5pIx9F9o3BD8bqqo0acBn%2BxeyNtElGTb2SCKjMlpqF8Z%2FtDRFqhk6YurCRKf8kR2LxJvAiGGEdragP1DpJGJNtKaFd%2FznZo1WedtSMUWkbMdkncAGL5CpAwuaDrkT%2FhyfaL0b%2FLUgs5SQ2revfl8Z7TKTmn8j7&X-Amz-Signature=6dd60991a6b1a12c6f6eeeb182b3a98f18f8506d976849aa7b5c45d5584490ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PN5XA5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxtwE3%2FnRmSVlN%2FP%2FnxTbFBJdPVzcklR1WQW%2FNPws01wIhAPpwG%2BPO398gpHkqYAj7XeZCMcMV%2FzJ0eZggLQ%2B90%2BBAKv8DCBoQABoMNjM3NDIzMTgzODA1Igw59xgr%2FN4WeAwiMx0q3AMPaO5oZUJiqgd7RhSKjEuLunbsV93Sk4J9uj9v%2F1M2AxgJtKvRPuGCdH6w16MMl95Kx77LzC%2B2n%2FE1s6DZy7Dw19YWKTj72x8bITDIqfkFVrOaCm71i0OIO2d9onNB5PmBzeMSUF924t23MFe%2BArbKxvJt8qoVA3CFa29Iwu4TiXSvW6J5s8C39DhlhKQBhSb%2BKO4auwXoBrtYoBK4dKp9kwoobUJVZmMzduC5eRev7D%2B0%2BjU29r2F05g6Fw%2FopCQO%2F5tWTM4oB3uIeiVI%2FwZDozrFMSRcoG%2Fghc8cDwcbT92VJe0rk9JVzRBJmq4pMB2HYO68LHzcdivs0HPux2M7r7eLPtLJVhU5XieFCqmrQWs158O9zQQQ9OSCI1Zhdp4WuONX1M%2Bp4%2F5FKdRpZd9ZM%2BLRG9VQg0ZhgqXtroCJEqWrubwkIuqm4rDMM6OTWiaFArIBnh0ir9JskJUZjPP1EJfGLoi58Kc4%2B0%2BJPDsVeVKGXiruczlOzxrgASRR49q1VsNEB5lWMwCl7nrdfy382B1YVVwvRapLdKBsqzsOmGu4D%2FDsF1V8%2BcJ1yo%2Bge%2F9vPPABIiBw5VlVi4TL14jAF%2FSWvORNaiHe65MxvIVRn7biEZ3jxBmrLQFOmDD6g6K%2BBjqkAWk5wTOx8QyG6zzDZT2WVDnOBz9E0WmTUUVHnp9FLVbj1s1Enx7lgCXnTZYRne5pIx9F9o3BD8bqqo0acBn%2BxeyNtElGTb2SCKjMlpqF8Z%2FtDRFqhk6YurCRKf8kR2LxJvAiGGEdragP1DpJGJNtKaFd%2FznZo1WedtSMUWkbMdkncAGL5CpAwuaDrkT%2FhyfaL0b%2FLUgs5SQ2revfl8Z7TKTmn8j7&X-Amz-Signature=9035c5bd5bcace005d0ddd15eeb99352e91929b5332862085fdf7f2c30d11924&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PN5XA5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxtwE3%2FnRmSVlN%2FP%2FnxTbFBJdPVzcklR1WQW%2FNPws01wIhAPpwG%2BPO398gpHkqYAj7XeZCMcMV%2FzJ0eZggLQ%2B90%2BBAKv8DCBoQABoMNjM3NDIzMTgzODA1Igw59xgr%2FN4WeAwiMx0q3AMPaO5oZUJiqgd7RhSKjEuLunbsV93Sk4J9uj9v%2F1M2AxgJtKvRPuGCdH6w16MMl95Kx77LzC%2B2n%2FE1s6DZy7Dw19YWKTj72x8bITDIqfkFVrOaCm71i0OIO2d9onNB5PmBzeMSUF924t23MFe%2BArbKxvJt8qoVA3CFa29Iwu4TiXSvW6J5s8C39DhlhKQBhSb%2BKO4auwXoBrtYoBK4dKp9kwoobUJVZmMzduC5eRev7D%2B0%2BjU29r2F05g6Fw%2FopCQO%2F5tWTM4oB3uIeiVI%2FwZDozrFMSRcoG%2Fghc8cDwcbT92VJe0rk9JVzRBJmq4pMB2HYO68LHzcdivs0HPux2M7r7eLPtLJVhU5XieFCqmrQWs158O9zQQQ9OSCI1Zhdp4WuONX1M%2Bp4%2F5FKdRpZd9ZM%2BLRG9VQg0ZhgqXtroCJEqWrubwkIuqm4rDMM6OTWiaFArIBnh0ir9JskJUZjPP1EJfGLoi58Kc4%2B0%2BJPDsVeVKGXiruczlOzxrgASRR49q1VsNEB5lWMwCl7nrdfy382B1YVVwvRapLdKBsqzsOmGu4D%2FDsF1V8%2BcJ1yo%2Bge%2F9vPPABIiBw5VlVi4TL14jAF%2FSWvORNaiHe65MxvIVRn7biEZ3jxBmrLQFOmDD6g6K%2BBjqkAWk5wTOx8QyG6zzDZT2WVDnOBz9E0WmTUUVHnp9FLVbj1s1Enx7lgCXnTZYRne5pIx9F9o3BD8bqqo0acBn%2BxeyNtElGTb2SCKjMlpqF8Z%2FtDRFqhk6YurCRKf8kR2LxJvAiGGEdragP1DpJGJNtKaFd%2FznZo1WedtSMUWkbMdkncAGL5CpAwuaDrkT%2FhyfaL0b%2FLUgs5SQ2revfl8Z7TKTmn8j7&X-Amz-Signature=11a2c1fb1e1d6874e7ed82689b57a5c75cd876c91bf139248ef5f7a2a57782d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
