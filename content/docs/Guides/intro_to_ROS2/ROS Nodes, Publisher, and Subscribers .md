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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGWKXDB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD255mQmRh1tvbwl6nXcEWFRNOl4Ywlaohh2RzG4BYQVQIgCVLgonkFfVEfuXf4OjRJudm%2BtnR0n%2BgPEUfFa8Jng34q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI1gOehZUYzJXCx2xSrcAxTuJqG%2FTD9N6cBaY2UmWE6C6sgaBaxukqnn6coLFeIObwrFU0nXNsIsjQfePSqxmcmMhe0Ckqdfx4T6QUUZWyhJ8kZtKwX6HoVrq4AL%2FC%2BUPyxnfEvIiSW9yUD4GzKVoGP6v39AeCh0mCVwybVbogVYyqr%2FathedLKAc7NUOtQwZsfEs4UYwgOthGfSaJX8qTa5q%2B3%2BBdUxmIeBJbByVOcr4MKMoXK2g5fNHYHej700EJh%2FObJ%2FYmsBcGpb0OvDDnBXkOAn34AiojdiKxdwuR%2B6rhpSmlu0%2FgjA9uA%2B36WJ8s8OTMIzSIadOMiSOpxi3aLXGH%2BI8qG3mcis9I%2BjRUWBUN3n2em12BABqcY3DGowRG%2B6Hyj6RTzP8bcT9no5zb9PJyTS3UrvaMsoctMV9rSTmXQJ0ozR7eO8QE675TZp58tjRVlyzO2zxFV8vVfv4nmcnqRhx%2FDKaEtuhM0K8eHbWyrxqotGNJJGLFwnF6KJGAmd6eBMYMl5U8xTNnQO2dPF5S9K6Ujvm80nC76ucwWmFbjwSx%2F4W867BQsLmgSP0bo25XVvhecEpOrgFxyPTu8As%2BOHWhgxmPgcl9%2B36VxnVUyUQBx2l%2F9lq5SWkebiZj0iTgY%2FAhll0mM3ML7mv78GOqUBDp4EAokcqLEySfGRO7XwEvL6mVdSfyBgIKTN1RVUGD1wOf5DD1VmCy2olmyi1QRbBk8IiHqX3lkOG3yroS11O%2F4yAlaBv9pbAyds5y69DWcuRPdu2N8trR1n4mgLn%2B8Wmpq0bS2pswvnfpXr6p3BsNaSNEGcnUkHoNpC1eD2JZNnXdbVj%2BirLkuTQeT24jDM8K2WQ2AQR5QZLz8%2F9f5U7HoWyUXq&X-Amz-Signature=5bca33465a4b5920d401b76bda304382765aa4f8f1089d3bcaa1b98bf6bbe0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGWKXDB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD255mQmRh1tvbwl6nXcEWFRNOl4Ywlaohh2RzG4BYQVQIgCVLgonkFfVEfuXf4OjRJudm%2BtnR0n%2BgPEUfFa8Jng34q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI1gOehZUYzJXCx2xSrcAxTuJqG%2FTD9N6cBaY2UmWE6C6sgaBaxukqnn6coLFeIObwrFU0nXNsIsjQfePSqxmcmMhe0Ckqdfx4T6QUUZWyhJ8kZtKwX6HoVrq4AL%2FC%2BUPyxnfEvIiSW9yUD4GzKVoGP6v39AeCh0mCVwybVbogVYyqr%2FathedLKAc7NUOtQwZsfEs4UYwgOthGfSaJX8qTa5q%2B3%2BBdUxmIeBJbByVOcr4MKMoXK2g5fNHYHej700EJh%2FObJ%2FYmsBcGpb0OvDDnBXkOAn34AiojdiKxdwuR%2B6rhpSmlu0%2FgjA9uA%2B36WJ8s8OTMIzSIadOMiSOpxi3aLXGH%2BI8qG3mcis9I%2BjRUWBUN3n2em12BABqcY3DGowRG%2B6Hyj6RTzP8bcT9no5zb9PJyTS3UrvaMsoctMV9rSTmXQJ0ozR7eO8QE675TZp58tjRVlyzO2zxFV8vVfv4nmcnqRhx%2FDKaEtuhM0K8eHbWyrxqotGNJJGLFwnF6KJGAmd6eBMYMl5U8xTNnQO2dPF5S9K6Ujvm80nC76ucwWmFbjwSx%2F4W867BQsLmgSP0bo25XVvhecEpOrgFxyPTu8As%2BOHWhgxmPgcl9%2B36VxnVUyUQBx2l%2F9lq5SWkebiZj0iTgY%2FAhll0mM3ML7mv78GOqUBDp4EAokcqLEySfGRO7XwEvL6mVdSfyBgIKTN1RVUGD1wOf5DD1VmCy2olmyi1QRbBk8IiHqX3lkOG3yroS11O%2F4yAlaBv9pbAyds5y69DWcuRPdu2N8trR1n4mgLn%2B8Wmpq0bS2pswvnfpXr6p3BsNaSNEGcnUkHoNpC1eD2JZNnXdbVj%2BirLkuTQeT24jDM8K2WQ2AQR5QZLz8%2F9f5U7HoWyUXq&X-Amz-Signature=015f7eb94ef589445c8e04dca554d9388ccadea61021f44184b00d15782a8083&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGWKXDB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD255mQmRh1tvbwl6nXcEWFRNOl4Ywlaohh2RzG4BYQVQIgCVLgonkFfVEfuXf4OjRJudm%2BtnR0n%2BgPEUfFa8Jng34q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI1gOehZUYzJXCx2xSrcAxTuJqG%2FTD9N6cBaY2UmWE6C6sgaBaxukqnn6coLFeIObwrFU0nXNsIsjQfePSqxmcmMhe0Ckqdfx4T6QUUZWyhJ8kZtKwX6HoVrq4AL%2FC%2BUPyxnfEvIiSW9yUD4GzKVoGP6v39AeCh0mCVwybVbogVYyqr%2FathedLKAc7NUOtQwZsfEs4UYwgOthGfSaJX8qTa5q%2B3%2BBdUxmIeBJbByVOcr4MKMoXK2g5fNHYHej700EJh%2FObJ%2FYmsBcGpb0OvDDnBXkOAn34AiojdiKxdwuR%2B6rhpSmlu0%2FgjA9uA%2B36WJ8s8OTMIzSIadOMiSOpxi3aLXGH%2BI8qG3mcis9I%2BjRUWBUN3n2em12BABqcY3DGowRG%2B6Hyj6RTzP8bcT9no5zb9PJyTS3UrvaMsoctMV9rSTmXQJ0ozR7eO8QE675TZp58tjRVlyzO2zxFV8vVfv4nmcnqRhx%2FDKaEtuhM0K8eHbWyrxqotGNJJGLFwnF6KJGAmd6eBMYMl5U8xTNnQO2dPF5S9K6Ujvm80nC76ucwWmFbjwSx%2F4W867BQsLmgSP0bo25XVvhecEpOrgFxyPTu8As%2BOHWhgxmPgcl9%2B36VxnVUyUQBx2l%2F9lq5SWkebiZj0iTgY%2FAhll0mM3ML7mv78GOqUBDp4EAokcqLEySfGRO7XwEvL6mVdSfyBgIKTN1RVUGD1wOf5DD1VmCy2olmyi1QRbBk8IiHqX3lkOG3yroS11O%2F4yAlaBv9pbAyds5y69DWcuRPdu2N8trR1n4mgLn%2B8Wmpq0bS2pswvnfpXr6p3BsNaSNEGcnUkHoNpC1eD2JZNnXdbVj%2BirLkuTQeT24jDM8K2WQ2AQR5QZLz8%2F9f5U7HoWyUXq&X-Amz-Signature=de14820e0de91ab6c4d1a611ba26f933729682483e80670e5912d3c19a8dd58d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGWKXDB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD255mQmRh1tvbwl6nXcEWFRNOl4Ywlaohh2RzG4BYQVQIgCVLgonkFfVEfuXf4OjRJudm%2BtnR0n%2BgPEUfFa8Jng34q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI1gOehZUYzJXCx2xSrcAxTuJqG%2FTD9N6cBaY2UmWE6C6sgaBaxukqnn6coLFeIObwrFU0nXNsIsjQfePSqxmcmMhe0Ckqdfx4T6QUUZWyhJ8kZtKwX6HoVrq4AL%2FC%2BUPyxnfEvIiSW9yUD4GzKVoGP6v39AeCh0mCVwybVbogVYyqr%2FathedLKAc7NUOtQwZsfEs4UYwgOthGfSaJX8qTa5q%2B3%2BBdUxmIeBJbByVOcr4MKMoXK2g5fNHYHej700EJh%2FObJ%2FYmsBcGpb0OvDDnBXkOAn34AiojdiKxdwuR%2B6rhpSmlu0%2FgjA9uA%2B36WJ8s8OTMIzSIadOMiSOpxi3aLXGH%2BI8qG3mcis9I%2BjRUWBUN3n2em12BABqcY3DGowRG%2B6Hyj6RTzP8bcT9no5zb9PJyTS3UrvaMsoctMV9rSTmXQJ0ozR7eO8QE675TZp58tjRVlyzO2zxFV8vVfv4nmcnqRhx%2FDKaEtuhM0K8eHbWyrxqotGNJJGLFwnF6KJGAmd6eBMYMl5U8xTNnQO2dPF5S9K6Ujvm80nC76ucwWmFbjwSx%2F4W867BQsLmgSP0bo25XVvhecEpOrgFxyPTu8As%2BOHWhgxmPgcl9%2B36VxnVUyUQBx2l%2F9lq5SWkebiZj0iTgY%2FAhll0mM3ML7mv78GOqUBDp4EAokcqLEySfGRO7XwEvL6mVdSfyBgIKTN1RVUGD1wOf5DD1VmCy2olmyi1QRbBk8IiHqX3lkOG3yroS11O%2F4yAlaBv9pbAyds5y69DWcuRPdu2N8trR1n4mgLn%2B8Wmpq0bS2pswvnfpXr6p3BsNaSNEGcnUkHoNpC1eD2JZNnXdbVj%2BirLkuTQeT24jDM8K2WQ2AQR5QZLz8%2F9f5U7HoWyUXq&X-Amz-Signature=b2d8f3c069336f90dd38389827acff11e974a054ad6d214fb3a060e1290e6f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGWKXDB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD255mQmRh1tvbwl6nXcEWFRNOl4Ywlaohh2RzG4BYQVQIgCVLgonkFfVEfuXf4OjRJudm%2BtnR0n%2BgPEUfFa8Jng34q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI1gOehZUYzJXCx2xSrcAxTuJqG%2FTD9N6cBaY2UmWE6C6sgaBaxukqnn6coLFeIObwrFU0nXNsIsjQfePSqxmcmMhe0Ckqdfx4T6QUUZWyhJ8kZtKwX6HoVrq4AL%2FC%2BUPyxnfEvIiSW9yUD4GzKVoGP6v39AeCh0mCVwybVbogVYyqr%2FathedLKAc7NUOtQwZsfEs4UYwgOthGfSaJX8qTa5q%2B3%2BBdUxmIeBJbByVOcr4MKMoXK2g5fNHYHej700EJh%2FObJ%2FYmsBcGpb0OvDDnBXkOAn34AiojdiKxdwuR%2B6rhpSmlu0%2FgjA9uA%2B36WJ8s8OTMIzSIadOMiSOpxi3aLXGH%2BI8qG3mcis9I%2BjRUWBUN3n2em12BABqcY3DGowRG%2B6Hyj6RTzP8bcT9no5zb9PJyTS3UrvaMsoctMV9rSTmXQJ0ozR7eO8QE675TZp58tjRVlyzO2zxFV8vVfv4nmcnqRhx%2FDKaEtuhM0K8eHbWyrxqotGNJJGLFwnF6KJGAmd6eBMYMl5U8xTNnQO2dPF5S9K6Ujvm80nC76ucwWmFbjwSx%2F4W867BQsLmgSP0bo25XVvhecEpOrgFxyPTu8As%2BOHWhgxmPgcl9%2B36VxnVUyUQBx2l%2F9lq5SWkebiZj0iTgY%2FAhll0mM3ML7mv78GOqUBDp4EAokcqLEySfGRO7XwEvL6mVdSfyBgIKTN1RVUGD1wOf5DD1VmCy2olmyi1QRbBk8IiHqX3lkOG3yroS11O%2F4yAlaBv9pbAyds5y69DWcuRPdu2N8trR1n4mgLn%2B8Wmpq0bS2pswvnfpXr6p3BsNaSNEGcnUkHoNpC1eD2JZNnXdbVj%2BirLkuTQeT24jDM8K2WQ2AQR5QZLz8%2F9f5U7HoWyUXq&X-Amz-Signature=cc1aba12bac7344fbc7d320bde82bef68c706591302f08d4708e690e137fd561&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGWKXDB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD255mQmRh1tvbwl6nXcEWFRNOl4Ywlaohh2RzG4BYQVQIgCVLgonkFfVEfuXf4OjRJudm%2BtnR0n%2BgPEUfFa8Jng34q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI1gOehZUYzJXCx2xSrcAxTuJqG%2FTD9N6cBaY2UmWE6C6sgaBaxukqnn6coLFeIObwrFU0nXNsIsjQfePSqxmcmMhe0Ckqdfx4T6QUUZWyhJ8kZtKwX6HoVrq4AL%2FC%2BUPyxnfEvIiSW9yUD4GzKVoGP6v39AeCh0mCVwybVbogVYyqr%2FathedLKAc7NUOtQwZsfEs4UYwgOthGfSaJX8qTa5q%2B3%2BBdUxmIeBJbByVOcr4MKMoXK2g5fNHYHej700EJh%2FObJ%2FYmsBcGpb0OvDDnBXkOAn34AiojdiKxdwuR%2B6rhpSmlu0%2FgjA9uA%2B36WJ8s8OTMIzSIadOMiSOpxi3aLXGH%2BI8qG3mcis9I%2BjRUWBUN3n2em12BABqcY3DGowRG%2B6Hyj6RTzP8bcT9no5zb9PJyTS3UrvaMsoctMV9rSTmXQJ0ozR7eO8QE675TZp58tjRVlyzO2zxFV8vVfv4nmcnqRhx%2FDKaEtuhM0K8eHbWyrxqotGNJJGLFwnF6KJGAmd6eBMYMl5U8xTNnQO2dPF5S9K6Ujvm80nC76ucwWmFbjwSx%2F4W867BQsLmgSP0bo25XVvhecEpOrgFxyPTu8As%2BOHWhgxmPgcl9%2B36VxnVUyUQBx2l%2F9lq5SWkebiZj0iTgY%2FAhll0mM3ML7mv78GOqUBDp4EAokcqLEySfGRO7XwEvL6mVdSfyBgIKTN1RVUGD1wOf5DD1VmCy2olmyi1QRbBk8IiHqX3lkOG3yroS11O%2F4yAlaBv9pbAyds5y69DWcuRPdu2N8trR1n4mgLn%2B8Wmpq0bS2pswvnfpXr6p3BsNaSNEGcnUkHoNpC1eD2JZNnXdbVj%2BirLkuTQeT24jDM8K2WQ2AQR5QZLz8%2F9f5U7HoWyUXq&X-Amz-Signature=3351929c236121cd3ac00dc24bebddb1333807883b968fe40c47e61764b039fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGWKXDB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD255mQmRh1tvbwl6nXcEWFRNOl4Ywlaohh2RzG4BYQVQIgCVLgonkFfVEfuXf4OjRJudm%2BtnR0n%2BgPEUfFa8Jng34q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI1gOehZUYzJXCx2xSrcAxTuJqG%2FTD9N6cBaY2UmWE6C6sgaBaxukqnn6coLFeIObwrFU0nXNsIsjQfePSqxmcmMhe0Ckqdfx4T6QUUZWyhJ8kZtKwX6HoVrq4AL%2FC%2BUPyxnfEvIiSW9yUD4GzKVoGP6v39AeCh0mCVwybVbogVYyqr%2FathedLKAc7NUOtQwZsfEs4UYwgOthGfSaJX8qTa5q%2B3%2BBdUxmIeBJbByVOcr4MKMoXK2g5fNHYHej700EJh%2FObJ%2FYmsBcGpb0OvDDnBXkOAn34AiojdiKxdwuR%2B6rhpSmlu0%2FgjA9uA%2B36WJ8s8OTMIzSIadOMiSOpxi3aLXGH%2BI8qG3mcis9I%2BjRUWBUN3n2em12BABqcY3DGowRG%2B6Hyj6RTzP8bcT9no5zb9PJyTS3UrvaMsoctMV9rSTmXQJ0ozR7eO8QE675TZp58tjRVlyzO2zxFV8vVfv4nmcnqRhx%2FDKaEtuhM0K8eHbWyrxqotGNJJGLFwnF6KJGAmd6eBMYMl5U8xTNnQO2dPF5S9K6Ujvm80nC76ucwWmFbjwSx%2F4W867BQsLmgSP0bo25XVvhecEpOrgFxyPTu8As%2BOHWhgxmPgcl9%2B36VxnVUyUQBx2l%2F9lq5SWkebiZj0iTgY%2FAhll0mM3ML7mv78GOqUBDp4EAokcqLEySfGRO7XwEvL6mVdSfyBgIKTN1RVUGD1wOf5DD1VmCy2olmyi1QRbBk8IiHqX3lkOG3yroS11O%2F4yAlaBv9pbAyds5y69DWcuRPdu2N8trR1n4mgLn%2B8Wmpq0bS2pswvnfpXr6p3BsNaSNEGcnUkHoNpC1eD2JZNnXdbVj%2BirLkuTQeT24jDM8K2WQ2AQR5QZLz8%2F9f5U7HoWyUXq&X-Amz-Signature=754ca13cb523c6167ed8bf568a0876c3afacf580844c1bfbff0d9b4859186193&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGWKXDB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD255mQmRh1tvbwl6nXcEWFRNOl4Ywlaohh2RzG4BYQVQIgCVLgonkFfVEfuXf4OjRJudm%2BtnR0n%2BgPEUfFa8Jng34q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI1gOehZUYzJXCx2xSrcAxTuJqG%2FTD9N6cBaY2UmWE6C6sgaBaxukqnn6coLFeIObwrFU0nXNsIsjQfePSqxmcmMhe0Ckqdfx4T6QUUZWyhJ8kZtKwX6HoVrq4AL%2FC%2BUPyxnfEvIiSW9yUD4GzKVoGP6v39AeCh0mCVwybVbogVYyqr%2FathedLKAc7NUOtQwZsfEs4UYwgOthGfSaJX8qTa5q%2B3%2BBdUxmIeBJbByVOcr4MKMoXK2g5fNHYHej700EJh%2FObJ%2FYmsBcGpb0OvDDnBXkOAn34AiojdiKxdwuR%2B6rhpSmlu0%2FgjA9uA%2B36WJ8s8OTMIzSIadOMiSOpxi3aLXGH%2BI8qG3mcis9I%2BjRUWBUN3n2em12BABqcY3DGowRG%2B6Hyj6RTzP8bcT9no5zb9PJyTS3UrvaMsoctMV9rSTmXQJ0ozR7eO8QE675TZp58tjRVlyzO2zxFV8vVfv4nmcnqRhx%2FDKaEtuhM0K8eHbWyrxqotGNJJGLFwnF6KJGAmd6eBMYMl5U8xTNnQO2dPF5S9K6Ujvm80nC76ucwWmFbjwSx%2F4W867BQsLmgSP0bo25XVvhecEpOrgFxyPTu8As%2BOHWhgxmPgcl9%2B36VxnVUyUQBx2l%2F9lq5SWkebiZj0iTgY%2FAhll0mM3ML7mv78GOqUBDp4EAokcqLEySfGRO7XwEvL6mVdSfyBgIKTN1RVUGD1wOf5DD1VmCy2olmyi1QRbBk8IiHqX3lkOG3yroS11O%2F4yAlaBv9pbAyds5y69DWcuRPdu2N8trR1n4mgLn%2B8Wmpq0bS2pswvnfpXr6p3BsNaSNEGcnUkHoNpC1eD2JZNnXdbVj%2BirLkuTQeT24jDM8K2WQ2AQR5QZLz8%2F9f5U7HoWyUXq&X-Amz-Signature=6d6f4a5fa5472a528729ea2f82e554e7435ec3306e973e9142890477aa7bc5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
