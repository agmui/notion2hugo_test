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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKS75RAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOnAghs4ehmnAINFUfGUBmnd19We%2BoV0bec5tMtJybQIgNFPmd3dokxVj1AdbFXknmEOWqMOXzLqLbOVKBaDwQ0kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBykHJajfbZqf90wxCrcA09dL7xubZsGGmJI9pnmCgHmCsQAHXnAIP1bWF6nVQ%2FwmsoumCDRW8mzowINEWkZc9i2Y%2BXu4MYyAG%2BxO7TQj3lYSdU6yyT4wfAteeEvmMcRWBVF4mfh7xRjDt6q%2BpGtS9Xe%2FlHR6vxfBiuXT0e82af4uWWqUCXUrwLioJhQIbeZd5YseYVV0GG8qxPkG4vLSQO2DTXaWagK4eo7dULNshYC4F5ZKJ0Fp9J7a2T6TpAHLF6bz%2F3C3OBxgL07%2BGuWuZ81n0hnUNXcqm%2BIjzgC5YshtxTMQfFrE6IScueqk0%2BtWGKnuIRlAQBQFapIz01JefAx%2B0W0wL5ZvEK6kLy%2FWwHG%2BcqxTVWUPv5MZlU3uqpFhx0a7%2Fjm2THWLWdZAavUpEjWZ%2Bc2Dhbt622xXXwmhprHyyuD7sPkQC%2FYyja9k0GFKLtsqnv4Ak4GwaEvZn0HfRw%2BC1e5socVHgR2c9cv4HmGJ3MLJlz7cYZ6TbEuFvbajMbgQMKmz%2Bkj7wenJTpF1SV4fiBiYH6JowZgWKKFENVEhDC3GFYveJYl8opI5eNpq96wOzUIOriJET9e91UNev8o8NBes0y6HbVWsYVkI8No6Q1EzMAuIFDSw9ND23l3z%2Fs5mt7BPfWh4mXWMOvjob0GOqUB5ROs2gHF4P8xZwBOEWt8qFWHU9TCqOl4GnNIKitMQinZRKckZju%2B8xNBOiEdl5lXXv9VoK74ehHMHFBy%2BaPB5FsiUn%2BqIl3l3K5b4FDSs9Wy2GXqgZ75kWj5%2FguCMsXlbB%2FA%2B6Br0HudvVBLt2rIq5S0D6k2vmcvj0SMxLq9VuLgBVOO29pG9OXBfJPNrvrBgSfwQUrSmUDmS81lfqdlmmJ0srbl&X-Amz-Signature=724dc7b0839aff3748f5a87d287b23c665fcf7e9552741915ca61a13bc4cbd30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKS75RAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOnAghs4ehmnAINFUfGUBmnd19We%2BoV0bec5tMtJybQIgNFPmd3dokxVj1AdbFXknmEOWqMOXzLqLbOVKBaDwQ0kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBykHJajfbZqf90wxCrcA09dL7xubZsGGmJI9pnmCgHmCsQAHXnAIP1bWF6nVQ%2FwmsoumCDRW8mzowINEWkZc9i2Y%2BXu4MYyAG%2BxO7TQj3lYSdU6yyT4wfAteeEvmMcRWBVF4mfh7xRjDt6q%2BpGtS9Xe%2FlHR6vxfBiuXT0e82af4uWWqUCXUrwLioJhQIbeZd5YseYVV0GG8qxPkG4vLSQO2DTXaWagK4eo7dULNshYC4F5ZKJ0Fp9J7a2T6TpAHLF6bz%2F3C3OBxgL07%2BGuWuZ81n0hnUNXcqm%2BIjzgC5YshtxTMQfFrE6IScueqk0%2BtWGKnuIRlAQBQFapIz01JefAx%2B0W0wL5ZvEK6kLy%2FWwHG%2BcqxTVWUPv5MZlU3uqpFhx0a7%2Fjm2THWLWdZAavUpEjWZ%2Bc2Dhbt622xXXwmhprHyyuD7sPkQC%2FYyja9k0GFKLtsqnv4Ak4GwaEvZn0HfRw%2BC1e5socVHgR2c9cv4HmGJ3MLJlz7cYZ6TbEuFvbajMbgQMKmz%2Bkj7wenJTpF1SV4fiBiYH6JowZgWKKFENVEhDC3GFYveJYl8opI5eNpq96wOzUIOriJET9e91UNev8o8NBes0y6HbVWsYVkI8No6Q1EzMAuIFDSw9ND23l3z%2Fs5mt7BPfWh4mXWMOvjob0GOqUB5ROs2gHF4P8xZwBOEWt8qFWHU9TCqOl4GnNIKitMQinZRKckZju%2B8xNBOiEdl5lXXv9VoK74ehHMHFBy%2BaPB5FsiUn%2BqIl3l3K5b4FDSs9Wy2GXqgZ75kWj5%2FguCMsXlbB%2FA%2B6Br0HudvVBLt2rIq5S0D6k2vmcvj0SMxLq9VuLgBVOO29pG9OXBfJPNrvrBgSfwQUrSmUDmS81lfqdlmmJ0srbl&X-Amz-Signature=2106505140b0e56ad8deab48d4689c4752742a6a3ee6de15d3a08b9bcd937feb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKS75RAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOnAghs4ehmnAINFUfGUBmnd19We%2BoV0bec5tMtJybQIgNFPmd3dokxVj1AdbFXknmEOWqMOXzLqLbOVKBaDwQ0kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBykHJajfbZqf90wxCrcA09dL7xubZsGGmJI9pnmCgHmCsQAHXnAIP1bWF6nVQ%2FwmsoumCDRW8mzowINEWkZc9i2Y%2BXu4MYyAG%2BxO7TQj3lYSdU6yyT4wfAteeEvmMcRWBVF4mfh7xRjDt6q%2BpGtS9Xe%2FlHR6vxfBiuXT0e82af4uWWqUCXUrwLioJhQIbeZd5YseYVV0GG8qxPkG4vLSQO2DTXaWagK4eo7dULNshYC4F5ZKJ0Fp9J7a2T6TpAHLF6bz%2F3C3OBxgL07%2BGuWuZ81n0hnUNXcqm%2BIjzgC5YshtxTMQfFrE6IScueqk0%2BtWGKnuIRlAQBQFapIz01JefAx%2B0W0wL5ZvEK6kLy%2FWwHG%2BcqxTVWUPv5MZlU3uqpFhx0a7%2Fjm2THWLWdZAavUpEjWZ%2Bc2Dhbt622xXXwmhprHyyuD7sPkQC%2FYyja9k0GFKLtsqnv4Ak4GwaEvZn0HfRw%2BC1e5socVHgR2c9cv4HmGJ3MLJlz7cYZ6TbEuFvbajMbgQMKmz%2Bkj7wenJTpF1SV4fiBiYH6JowZgWKKFENVEhDC3GFYveJYl8opI5eNpq96wOzUIOriJET9e91UNev8o8NBes0y6HbVWsYVkI8No6Q1EzMAuIFDSw9ND23l3z%2Fs5mt7BPfWh4mXWMOvjob0GOqUB5ROs2gHF4P8xZwBOEWt8qFWHU9TCqOl4GnNIKitMQinZRKckZju%2B8xNBOiEdl5lXXv9VoK74ehHMHFBy%2BaPB5FsiUn%2BqIl3l3K5b4FDSs9Wy2GXqgZ75kWj5%2FguCMsXlbB%2FA%2B6Br0HudvVBLt2rIq5S0D6k2vmcvj0SMxLq9VuLgBVOO29pG9OXBfJPNrvrBgSfwQUrSmUDmS81lfqdlmmJ0srbl&X-Amz-Signature=966732c0888828a2923529475e7f8ed1a379abfa94fda4ff307be7c101a2c2d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKS75RAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOnAghs4ehmnAINFUfGUBmnd19We%2BoV0bec5tMtJybQIgNFPmd3dokxVj1AdbFXknmEOWqMOXzLqLbOVKBaDwQ0kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBykHJajfbZqf90wxCrcA09dL7xubZsGGmJI9pnmCgHmCsQAHXnAIP1bWF6nVQ%2FwmsoumCDRW8mzowINEWkZc9i2Y%2BXu4MYyAG%2BxO7TQj3lYSdU6yyT4wfAteeEvmMcRWBVF4mfh7xRjDt6q%2BpGtS9Xe%2FlHR6vxfBiuXT0e82af4uWWqUCXUrwLioJhQIbeZd5YseYVV0GG8qxPkG4vLSQO2DTXaWagK4eo7dULNshYC4F5ZKJ0Fp9J7a2T6TpAHLF6bz%2F3C3OBxgL07%2BGuWuZ81n0hnUNXcqm%2BIjzgC5YshtxTMQfFrE6IScueqk0%2BtWGKnuIRlAQBQFapIz01JefAx%2B0W0wL5ZvEK6kLy%2FWwHG%2BcqxTVWUPv5MZlU3uqpFhx0a7%2Fjm2THWLWdZAavUpEjWZ%2Bc2Dhbt622xXXwmhprHyyuD7sPkQC%2FYyja9k0GFKLtsqnv4Ak4GwaEvZn0HfRw%2BC1e5socVHgR2c9cv4HmGJ3MLJlz7cYZ6TbEuFvbajMbgQMKmz%2Bkj7wenJTpF1SV4fiBiYH6JowZgWKKFENVEhDC3GFYveJYl8opI5eNpq96wOzUIOriJET9e91UNev8o8NBes0y6HbVWsYVkI8No6Q1EzMAuIFDSw9ND23l3z%2Fs5mt7BPfWh4mXWMOvjob0GOqUB5ROs2gHF4P8xZwBOEWt8qFWHU9TCqOl4GnNIKitMQinZRKckZju%2B8xNBOiEdl5lXXv9VoK74ehHMHFBy%2BaPB5FsiUn%2BqIl3l3K5b4FDSs9Wy2GXqgZ75kWj5%2FguCMsXlbB%2FA%2B6Br0HudvVBLt2rIq5S0D6k2vmcvj0SMxLq9VuLgBVOO29pG9OXBfJPNrvrBgSfwQUrSmUDmS81lfqdlmmJ0srbl&X-Amz-Signature=ef5fe2c817271c4c1378a9141fa2f06b0c1066f8d039ddf9181ecf8c8a5bf872&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKS75RAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOnAghs4ehmnAINFUfGUBmnd19We%2BoV0bec5tMtJybQIgNFPmd3dokxVj1AdbFXknmEOWqMOXzLqLbOVKBaDwQ0kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBykHJajfbZqf90wxCrcA09dL7xubZsGGmJI9pnmCgHmCsQAHXnAIP1bWF6nVQ%2FwmsoumCDRW8mzowINEWkZc9i2Y%2BXu4MYyAG%2BxO7TQj3lYSdU6yyT4wfAteeEvmMcRWBVF4mfh7xRjDt6q%2BpGtS9Xe%2FlHR6vxfBiuXT0e82af4uWWqUCXUrwLioJhQIbeZd5YseYVV0GG8qxPkG4vLSQO2DTXaWagK4eo7dULNshYC4F5ZKJ0Fp9J7a2T6TpAHLF6bz%2F3C3OBxgL07%2BGuWuZ81n0hnUNXcqm%2BIjzgC5YshtxTMQfFrE6IScueqk0%2BtWGKnuIRlAQBQFapIz01JefAx%2B0W0wL5ZvEK6kLy%2FWwHG%2BcqxTVWUPv5MZlU3uqpFhx0a7%2Fjm2THWLWdZAavUpEjWZ%2Bc2Dhbt622xXXwmhprHyyuD7sPkQC%2FYyja9k0GFKLtsqnv4Ak4GwaEvZn0HfRw%2BC1e5socVHgR2c9cv4HmGJ3MLJlz7cYZ6TbEuFvbajMbgQMKmz%2Bkj7wenJTpF1SV4fiBiYH6JowZgWKKFENVEhDC3GFYveJYl8opI5eNpq96wOzUIOriJET9e91UNev8o8NBes0y6HbVWsYVkI8No6Q1EzMAuIFDSw9ND23l3z%2Fs5mt7BPfWh4mXWMOvjob0GOqUB5ROs2gHF4P8xZwBOEWt8qFWHU9TCqOl4GnNIKitMQinZRKckZju%2B8xNBOiEdl5lXXv9VoK74ehHMHFBy%2BaPB5FsiUn%2BqIl3l3K5b4FDSs9Wy2GXqgZ75kWj5%2FguCMsXlbB%2FA%2B6Br0HudvVBLt2rIq5S0D6k2vmcvj0SMxLq9VuLgBVOO29pG9OXBfJPNrvrBgSfwQUrSmUDmS81lfqdlmmJ0srbl&X-Amz-Signature=3ca1e70b43b9286e8674a57d156e83e655b9da0d1e6fedc299d25638693a0595&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKS75RAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOnAghs4ehmnAINFUfGUBmnd19We%2BoV0bec5tMtJybQIgNFPmd3dokxVj1AdbFXknmEOWqMOXzLqLbOVKBaDwQ0kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBykHJajfbZqf90wxCrcA09dL7xubZsGGmJI9pnmCgHmCsQAHXnAIP1bWF6nVQ%2FwmsoumCDRW8mzowINEWkZc9i2Y%2BXu4MYyAG%2BxO7TQj3lYSdU6yyT4wfAteeEvmMcRWBVF4mfh7xRjDt6q%2BpGtS9Xe%2FlHR6vxfBiuXT0e82af4uWWqUCXUrwLioJhQIbeZd5YseYVV0GG8qxPkG4vLSQO2DTXaWagK4eo7dULNshYC4F5ZKJ0Fp9J7a2T6TpAHLF6bz%2F3C3OBxgL07%2BGuWuZ81n0hnUNXcqm%2BIjzgC5YshtxTMQfFrE6IScueqk0%2BtWGKnuIRlAQBQFapIz01JefAx%2B0W0wL5ZvEK6kLy%2FWwHG%2BcqxTVWUPv5MZlU3uqpFhx0a7%2Fjm2THWLWdZAavUpEjWZ%2Bc2Dhbt622xXXwmhprHyyuD7sPkQC%2FYyja9k0GFKLtsqnv4Ak4GwaEvZn0HfRw%2BC1e5socVHgR2c9cv4HmGJ3MLJlz7cYZ6TbEuFvbajMbgQMKmz%2Bkj7wenJTpF1SV4fiBiYH6JowZgWKKFENVEhDC3GFYveJYl8opI5eNpq96wOzUIOriJET9e91UNev8o8NBes0y6HbVWsYVkI8No6Q1EzMAuIFDSw9ND23l3z%2Fs5mt7BPfWh4mXWMOvjob0GOqUB5ROs2gHF4P8xZwBOEWt8qFWHU9TCqOl4GnNIKitMQinZRKckZju%2B8xNBOiEdl5lXXv9VoK74ehHMHFBy%2BaPB5FsiUn%2BqIl3l3K5b4FDSs9Wy2GXqgZ75kWj5%2FguCMsXlbB%2FA%2B6Br0HudvVBLt2rIq5S0D6k2vmcvj0SMxLq9VuLgBVOO29pG9OXBfJPNrvrBgSfwQUrSmUDmS81lfqdlmmJ0srbl&X-Amz-Signature=574bbe29cf57c1ff12eb912b1f4b20f1bfffec1e8116c2e9f60474399f506e37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKS75RAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOnAghs4ehmnAINFUfGUBmnd19We%2BoV0bec5tMtJybQIgNFPmd3dokxVj1AdbFXknmEOWqMOXzLqLbOVKBaDwQ0kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBykHJajfbZqf90wxCrcA09dL7xubZsGGmJI9pnmCgHmCsQAHXnAIP1bWF6nVQ%2FwmsoumCDRW8mzowINEWkZc9i2Y%2BXu4MYyAG%2BxO7TQj3lYSdU6yyT4wfAteeEvmMcRWBVF4mfh7xRjDt6q%2BpGtS9Xe%2FlHR6vxfBiuXT0e82af4uWWqUCXUrwLioJhQIbeZd5YseYVV0GG8qxPkG4vLSQO2DTXaWagK4eo7dULNshYC4F5ZKJ0Fp9J7a2T6TpAHLF6bz%2F3C3OBxgL07%2BGuWuZ81n0hnUNXcqm%2BIjzgC5YshtxTMQfFrE6IScueqk0%2BtWGKnuIRlAQBQFapIz01JefAx%2B0W0wL5ZvEK6kLy%2FWwHG%2BcqxTVWUPv5MZlU3uqpFhx0a7%2Fjm2THWLWdZAavUpEjWZ%2Bc2Dhbt622xXXwmhprHyyuD7sPkQC%2FYyja9k0GFKLtsqnv4Ak4GwaEvZn0HfRw%2BC1e5socVHgR2c9cv4HmGJ3MLJlz7cYZ6TbEuFvbajMbgQMKmz%2Bkj7wenJTpF1SV4fiBiYH6JowZgWKKFENVEhDC3GFYveJYl8opI5eNpq96wOzUIOriJET9e91UNev8o8NBes0y6HbVWsYVkI8No6Q1EzMAuIFDSw9ND23l3z%2Fs5mt7BPfWh4mXWMOvjob0GOqUB5ROs2gHF4P8xZwBOEWt8qFWHU9TCqOl4GnNIKitMQinZRKckZju%2B8xNBOiEdl5lXXv9VoK74ehHMHFBy%2BaPB5FsiUn%2BqIl3l3K5b4FDSs9Wy2GXqgZ75kWj5%2FguCMsXlbB%2FA%2B6Br0HudvVBLt2rIq5S0D6k2vmcvj0SMxLq9VuLgBVOO29pG9OXBfJPNrvrBgSfwQUrSmUDmS81lfqdlmmJ0srbl&X-Amz-Signature=9952d60887ba3af4610ab4909c74c80e393c23cb9f156bd56c60e714f6931226&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKS75RAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOnAghs4ehmnAINFUfGUBmnd19We%2BoV0bec5tMtJybQIgNFPmd3dokxVj1AdbFXknmEOWqMOXzLqLbOVKBaDwQ0kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBykHJajfbZqf90wxCrcA09dL7xubZsGGmJI9pnmCgHmCsQAHXnAIP1bWF6nVQ%2FwmsoumCDRW8mzowINEWkZc9i2Y%2BXu4MYyAG%2BxO7TQj3lYSdU6yyT4wfAteeEvmMcRWBVF4mfh7xRjDt6q%2BpGtS9Xe%2FlHR6vxfBiuXT0e82af4uWWqUCXUrwLioJhQIbeZd5YseYVV0GG8qxPkG4vLSQO2DTXaWagK4eo7dULNshYC4F5ZKJ0Fp9J7a2T6TpAHLF6bz%2F3C3OBxgL07%2BGuWuZ81n0hnUNXcqm%2BIjzgC5YshtxTMQfFrE6IScueqk0%2BtWGKnuIRlAQBQFapIz01JefAx%2B0W0wL5ZvEK6kLy%2FWwHG%2BcqxTVWUPv5MZlU3uqpFhx0a7%2Fjm2THWLWdZAavUpEjWZ%2Bc2Dhbt622xXXwmhprHyyuD7sPkQC%2FYyja9k0GFKLtsqnv4Ak4GwaEvZn0HfRw%2BC1e5socVHgR2c9cv4HmGJ3MLJlz7cYZ6TbEuFvbajMbgQMKmz%2Bkj7wenJTpF1SV4fiBiYH6JowZgWKKFENVEhDC3GFYveJYl8opI5eNpq96wOzUIOriJET9e91UNev8o8NBes0y6HbVWsYVkI8No6Q1EzMAuIFDSw9ND23l3z%2Fs5mt7BPfWh4mXWMOvjob0GOqUB5ROs2gHF4P8xZwBOEWt8qFWHU9TCqOl4GnNIKitMQinZRKckZju%2B8xNBOiEdl5lXXv9VoK74ehHMHFBy%2BaPB5FsiUn%2BqIl3l3K5b4FDSs9Wy2GXqgZ75kWj5%2FguCMsXlbB%2FA%2B6Br0HudvVBLt2rIq5S0D6k2vmcvj0SMxLq9VuLgBVOO29pG9OXBfJPNrvrBgSfwQUrSmUDmS81lfqdlmmJ0srbl&X-Amz-Signature=fc2780e9c18b07621882622b8fceefbd511c7f60cff713b93c57793884be2eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
