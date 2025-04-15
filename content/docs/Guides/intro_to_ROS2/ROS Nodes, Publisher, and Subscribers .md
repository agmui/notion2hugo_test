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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMGFMTR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAJxVmTJFKN5UWwPxgQHbV0tYHPrCtkkKHTUOOLX3Y5AiAmluUt2jP0nj2I9N5JbcO7mEiMQDzyS512wrWG3NR8vCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCQaoQ3S90v%2BO8xxxKtwDCDTrPgt%2FHXA0uTNdqrmstV6lAYwRxSjo6%2BVDtUpz2rEgmU0LlW9QIHIrUAcFvaIuhlu%2BB5pEEEXd7BaGtsBGhurZ80%2FtBj9S3Abn3bfyS9a23eJx1vbNOLuCKkGmsf7NfY909z15zjDJKbohb%2FButwFYX6k4FUJgbXIw4tja6ncv2XEmTrFv20qHWr3HIT4eGLoYSHa62EQ%2BEX31JoxnCjvttGrcF60FcyeM4CmSOjxLBtkVQy6sy50zrfh9nmydOaOjvab83AieWsn7BmE0a7tjQoLsCQWDrAouWAX%2FeBgrIACMY4p167OA2ob76qvH9gm5YACYwZLH3khVESxv7K98OEdRVbhbINdakgA950NGPwmkfWDSXzFPJYt6GCqfMimmxZdg4lgio8B6N8NFAzhZq42u%2FUcvrobq%2FCLCr169Cfn%2FE3idvTFZBqHKswLPNXN%2FUA%2Fw9WxkvrxNefN6AKI4SZk3FpjErc4YKYvNRzGyLed8dooeIBJloBBC7KI06GKThPIziN9Qc49gZxjrltxeNyl8dJd35fKeKnVZy6Ab%2FiigFK1vvFGDZkVED%2FHrBeCsPWNWlH%2F3U3xuQH9h1FA%2FDDIrBwlfORdb1D5pAZDxRqtSDaK69WfrKYYw1Ov2vwY6pgGHVZjcsq2NoLAoCABjM6TFW%2BBjAO7qaqIJBF7kzNuZEJ4CVS02DC89P%2FUM5tpSILAZzTooMK0aOcqBtUChH0lsk6rSsYuKFMGAJ8u0BBxkhCSAuHF5AthF4l25he4Ddzesl2dBv4gV7hi%2FTFn8r%2B7zsYwDueejqy8G8dMfPLMIZwAdIpU0XtZzMCBcEnU0BPW2oz09%2F0pEE1e4gZkNIDBhpNv2MIXB&X-Amz-Signature=6a455e0dd184ee41d099da0525e9e0a52e43637a3de3b70db868b4f9a47aea12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMGFMTR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAJxVmTJFKN5UWwPxgQHbV0tYHPrCtkkKHTUOOLX3Y5AiAmluUt2jP0nj2I9N5JbcO7mEiMQDzyS512wrWG3NR8vCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCQaoQ3S90v%2BO8xxxKtwDCDTrPgt%2FHXA0uTNdqrmstV6lAYwRxSjo6%2BVDtUpz2rEgmU0LlW9QIHIrUAcFvaIuhlu%2BB5pEEEXd7BaGtsBGhurZ80%2FtBj9S3Abn3bfyS9a23eJx1vbNOLuCKkGmsf7NfY909z15zjDJKbohb%2FButwFYX6k4FUJgbXIw4tja6ncv2XEmTrFv20qHWr3HIT4eGLoYSHa62EQ%2BEX31JoxnCjvttGrcF60FcyeM4CmSOjxLBtkVQy6sy50zrfh9nmydOaOjvab83AieWsn7BmE0a7tjQoLsCQWDrAouWAX%2FeBgrIACMY4p167OA2ob76qvH9gm5YACYwZLH3khVESxv7K98OEdRVbhbINdakgA950NGPwmkfWDSXzFPJYt6GCqfMimmxZdg4lgio8B6N8NFAzhZq42u%2FUcvrobq%2FCLCr169Cfn%2FE3idvTFZBqHKswLPNXN%2FUA%2Fw9WxkvrxNefN6AKI4SZk3FpjErc4YKYvNRzGyLed8dooeIBJloBBC7KI06GKThPIziN9Qc49gZxjrltxeNyl8dJd35fKeKnVZy6Ab%2FiigFK1vvFGDZkVED%2FHrBeCsPWNWlH%2F3U3xuQH9h1FA%2FDDIrBwlfORdb1D5pAZDxRqtSDaK69WfrKYYw1Ov2vwY6pgGHVZjcsq2NoLAoCABjM6TFW%2BBjAO7qaqIJBF7kzNuZEJ4CVS02DC89P%2FUM5tpSILAZzTooMK0aOcqBtUChH0lsk6rSsYuKFMGAJ8u0BBxkhCSAuHF5AthF4l25he4Ddzesl2dBv4gV7hi%2FTFn8r%2B7zsYwDueejqy8G8dMfPLMIZwAdIpU0XtZzMCBcEnU0BPW2oz09%2F0pEE1e4gZkNIDBhpNv2MIXB&X-Amz-Signature=143a294589ff3f3ea5372a13340115c23d19bfade3b22c720ff37fb1a4f23670&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMGFMTR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAJxVmTJFKN5UWwPxgQHbV0tYHPrCtkkKHTUOOLX3Y5AiAmluUt2jP0nj2I9N5JbcO7mEiMQDzyS512wrWG3NR8vCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCQaoQ3S90v%2BO8xxxKtwDCDTrPgt%2FHXA0uTNdqrmstV6lAYwRxSjo6%2BVDtUpz2rEgmU0LlW9QIHIrUAcFvaIuhlu%2BB5pEEEXd7BaGtsBGhurZ80%2FtBj9S3Abn3bfyS9a23eJx1vbNOLuCKkGmsf7NfY909z15zjDJKbohb%2FButwFYX6k4FUJgbXIw4tja6ncv2XEmTrFv20qHWr3HIT4eGLoYSHa62EQ%2BEX31JoxnCjvttGrcF60FcyeM4CmSOjxLBtkVQy6sy50zrfh9nmydOaOjvab83AieWsn7BmE0a7tjQoLsCQWDrAouWAX%2FeBgrIACMY4p167OA2ob76qvH9gm5YACYwZLH3khVESxv7K98OEdRVbhbINdakgA950NGPwmkfWDSXzFPJYt6GCqfMimmxZdg4lgio8B6N8NFAzhZq42u%2FUcvrobq%2FCLCr169Cfn%2FE3idvTFZBqHKswLPNXN%2FUA%2Fw9WxkvrxNefN6AKI4SZk3FpjErc4YKYvNRzGyLed8dooeIBJloBBC7KI06GKThPIziN9Qc49gZxjrltxeNyl8dJd35fKeKnVZy6Ab%2FiigFK1vvFGDZkVED%2FHrBeCsPWNWlH%2F3U3xuQH9h1FA%2FDDIrBwlfORdb1D5pAZDxRqtSDaK69WfrKYYw1Ov2vwY6pgGHVZjcsq2NoLAoCABjM6TFW%2BBjAO7qaqIJBF7kzNuZEJ4CVS02DC89P%2FUM5tpSILAZzTooMK0aOcqBtUChH0lsk6rSsYuKFMGAJ8u0BBxkhCSAuHF5AthF4l25he4Ddzesl2dBv4gV7hi%2FTFn8r%2B7zsYwDueejqy8G8dMfPLMIZwAdIpU0XtZzMCBcEnU0BPW2oz09%2F0pEE1e4gZkNIDBhpNv2MIXB&X-Amz-Signature=a9f932ad74ae37b409a0f03941cccbeb2d1f43bf573695e815edbd92aa001222&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMGFMTR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAJxVmTJFKN5UWwPxgQHbV0tYHPrCtkkKHTUOOLX3Y5AiAmluUt2jP0nj2I9N5JbcO7mEiMQDzyS512wrWG3NR8vCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCQaoQ3S90v%2BO8xxxKtwDCDTrPgt%2FHXA0uTNdqrmstV6lAYwRxSjo6%2BVDtUpz2rEgmU0LlW9QIHIrUAcFvaIuhlu%2BB5pEEEXd7BaGtsBGhurZ80%2FtBj9S3Abn3bfyS9a23eJx1vbNOLuCKkGmsf7NfY909z15zjDJKbohb%2FButwFYX6k4FUJgbXIw4tja6ncv2XEmTrFv20qHWr3HIT4eGLoYSHa62EQ%2BEX31JoxnCjvttGrcF60FcyeM4CmSOjxLBtkVQy6sy50zrfh9nmydOaOjvab83AieWsn7BmE0a7tjQoLsCQWDrAouWAX%2FeBgrIACMY4p167OA2ob76qvH9gm5YACYwZLH3khVESxv7K98OEdRVbhbINdakgA950NGPwmkfWDSXzFPJYt6GCqfMimmxZdg4lgio8B6N8NFAzhZq42u%2FUcvrobq%2FCLCr169Cfn%2FE3idvTFZBqHKswLPNXN%2FUA%2Fw9WxkvrxNefN6AKI4SZk3FpjErc4YKYvNRzGyLed8dooeIBJloBBC7KI06GKThPIziN9Qc49gZxjrltxeNyl8dJd35fKeKnVZy6Ab%2FiigFK1vvFGDZkVED%2FHrBeCsPWNWlH%2F3U3xuQH9h1FA%2FDDIrBwlfORdb1D5pAZDxRqtSDaK69WfrKYYw1Ov2vwY6pgGHVZjcsq2NoLAoCABjM6TFW%2BBjAO7qaqIJBF7kzNuZEJ4CVS02DC89P%2FUM5tpSILAZzTooMK0aOcqBtUChH0lsk6rSsYuKFMGAJ8u0BBxkhCSAuHF5AthF4l25he4Ddzesl2dBv4gV7hi%2FTFn8r%2B7zsYwDueejqy8G8dMfPLMIZwAdIpU0XtZzMCBcEnU0BPW2oz09%2F0pEE1e4gZkNIDBhpNv2MIXB&X-Amz-Signature=b6a5a03cc5e6604b7d31bc4fba7696553dd10683bba7c226ed16d27d5028934d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMGFMTR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAJxVmTJFKN5UWwPxgQHbV0tYHPrCtkkKHTUOOLX3Y5AiAmluUt2jP0nj2I9N5JbcO7mEiMQDzyS512wrWG3NR8vCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCQaoQ3S90v%2BO8xxxKtwDCDTrPgt%2FHXA0uTNdqrmstV6lAYwRxSjo6%2BVDtUpz2rEgmU0LlW9QIHIrUAcFvaIuhlu%2BB5pEEEXd7BaGtsBGhurZ80%2FtBj9S3Abn3bfyS9a23eJx1vbNOLuCKkGmsf7NfY909z15zjDJKbohb%2FButwFYX6k4FUJgbXIw4tja6ncv2XEmTrFv20qHWr3HIT4eGLoYSHa62EQ%2BEX31JoxnCjvttGrcF60FcyeM4CmSOjxLBtkVQy6sy50zrfh9nmydOaOjvab83AieWsn7BmE0a7tjQoLsCQWDrAouWAX%2FeBgrIACMY4p167OA2ob76qvH9gm5YACYwZLH3khVESxv7K98OEdRVbhbINdakgA950NGPwmkfWDSXzFPJYt6GCqfMimmxZdg4lgio8B6N8NFAzhZq42u%2FUcvrobq%2FCLCr169Cfn%2FE3idvTFZBqHKswLPNXN%2FUA%2Fw9WxkvrxNefN6AKI4SZk3FpjErc4YKYvNRzGyLed8dooeIBJloBBC7KI06GKThPIziN9Qc49gZxjrltxeNyl8dJd35fKeKnVZy6Ab%2FiigFK1vvFGDZkVED%2FHrBeCsPWNWlH%2F3U3xuQH9h1FA%2FDDIrBwlfORdb1D5pAZDxRqtSDaK69WfrKYYw1Ov2vwY6pgGHVZjcsq2NoLAoCABjM6TFW%2BBjAO7qaqIJBF7kzNuZEJ4CVS02DC89P%2FUM5tpSILAZzTooMK0aOcqBtUChH0lsk6rSsYuKFMGAJ8u0BBxkhCSAuHF5AthF4l25he4Ddzesl2dBv4gV7hi%2FTFn8r%2B7zsYwDueejqy8G8dMfPLMIZwAdIpU0XtZzMCBcEnU0BPW2oz09%2F0pEE1e4gZkNIDBhpNv2MIXB&X-Amz-Signature=7f19b75a3e947287c74540585406128d2ed8ac9a90780dda275b72a0074eea38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMGFMTR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAJxVmTJFKN5UWwPxgQHbV0tYHPrCtkkKHTUOOLX3Y5AiAmluUt2jP0nj2I9N5JbcO7mEiMQDzyS512wrWG3NR8vCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCQaoQ3S90v%2BO8xxxKtwDCDTrPgt%2FHXA0uTNdqrmstV6lAYwRxSjo6%2BVDtUpz2rEgmU0LlW9QIHIrUAcFvaIuhlu%2BB5pEEEXd7BaGtsBGhurZ80%2FtBj9S3Abn3bfyS9a23eJx1vbNOLuCKkGmsf7NfY909z15zjDJKbohb%2FButwFYX6k4FUJgbXIw4tja6ncv2XEmTrFv20qHWr3HIT4eGLoYSHa62EQ%2BEX31JoxnCjvttGrcF60FcyeM4CmSOjxLBtkVQy6sy50zrfh9nmydOaOjvab83AieWsn7BmE0a7tjQoLsCQWDrAouWAX%2FeBgrIACMY4p167OA2ob76qvH9gm5YACYwZLH3khVESxv7K98OEdRVbhbINdakgA950NGPwmkfWDSXzFPJYt6GCqfMimmxZdg4lgio8B6N8NFAzhZq42u%2FUcvrobq%2FCLCr169Cfn%2FE3idvTFZBqHKswLPNXN%2FUA%2Fw9WxkvrxNefN6AKI4SZk3FpjErc4YKYvNRzGyLed8dooeIBJloBBC7KI06GKThPIziN9Qc49gZxjrltxeNyl8dJd35fKeKnVZy6Ab%2FiigFK1vvFGDZkVED%2FHrBeCsPWNWlH%2F3U3xuQH9h1FA%2FDDIrBwlfORdb1D5pAZDxRqtSDaK69WfrKYYw1Ov2vwY6pgGHVZjcsq2NoLAoCABjM6TFW%2BBjAO7qaqIJBF7kzNuZEJ4CVS02DC89P%2FUM5tpSILAZzTooMK0aOcqBtUChH0lsk6rSsYuKFMGAJ8u0BBxkhCSAuHF5AthF4l25he4Ddzesl2dBv4gV7hi%2FTFn8r%2B7zsYwDueejqy8G8dMfPLMIZwAdIpU0XtZzMCBcEnU0BPW2oz09%2F0pEE1e4gZkNIDBhpNv2MIXB&X-Amz-Signature=a18e3bd5a610db5441463214d9b1d10f6d82a786ca1b8b0f61abd3bed4d872f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMGFMTR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAJxVmTJFKN5UWwPxgQHbV0tYHPrCtkkKHTUOOLX3Y5AiAmluUt2jP0nj2I9N5JbcO7mEiMQDzyS512wrWG3NR8vCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCQaoQ3S90v%2BO8xxxKtwDCDTrPgt%2FHXA0uTNdqrmstV6lAYwRxSjo6%2BVDtUpz2rEgmU0LlW9QIHIrUAcFvaIuhlu%2BB5pEEEXd7BaGtsBGhurZ80%2FtBj9S3Abn3bfyS9a23eJx1vbNOLuCKkGmsf7NfY909z15zjDJKbohb%2FButwFYX6k4FUJgbXIw4tja6ncv2XEmTrFv20qHWr3HIT4eGLoYSHa62EQ%2BEX31JoxnCjvttGrcF60FcyeM4CmSOjxLBtkVQy6sy50zrfh9nmydOaOjvab83AieWsn7BmE0a7tjQoLsCQWDrAouWAX%2FeBgrIACMY4p167OA2ob76qvH9gm5YACYwZLH3khVESxv7K98OEdRVbhbINdakgA950NGPwmkfWDSXzFPJYt6GCqfMimmxZdg4lgio8B6N8NFAzhZq42u%2FUcvrobq%2FCLCr169Cfn%2FE3idvTFZBqHKswLPNXN%2FUA%2Fw9WxkvrxNefN6AKI4SZk3FpjErc4YKYvNRzGyLed8dooeIBJloBBC7KI06GKThPIziN9Qc49gZxjrltxeNyl8dJd35fKeKnVZy6Ab%2FiigFK1vvFGDZkVED%2FHrBeCsPWNWlH%2F3U3xuQH9h1FA%2FDDIrBwlfORdb1D5pAZDxRqtSDaK69WfrKYYw1Ov2vwY6pgGHVZjcsq2NoLAoCABjM6TFW%2BBjAO7qaqIJBF7kzNuZEJ4CVS02DC89P%2FUM5tpSILAZzTooMK0aOcqBtUChH0lsk6rSsYuKFMGAJ8u0BBxkhCSAuHF5AthF4l25he4Ddzesl2dBv4gV7hi%2FTFn8r%2B7zsYwDueejqy8G8dMfPLMIZwAdIpU0XtZzMCBcEnU0BPW2oz09%2F0pEE1e4gZkNIDBhpNv2MIXB&X-Amz-Signature=52442a07503215f941c9bbf839226a3d3cb55f0d290d866c11a1e4e239cabcda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMGFMTR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAJxVmTJFKN5UWwPxgQHbV0tYHPrCtkkKHTUOOLX3Y5AiAmluUt2jP0nj2I9N5JbcO7mEiMQDzyS512wrWG3NR8vCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCQaoQ3S90v%2BO8xxxKtwDCDTrPgt%2FHXA0uTNdqrmstV6lAYwRxSjo6%2BVDtUpz2rEgmU0LlW9QIHIrUAcFvaIuhlu%2BB5pEEEXd7BaGtsBGhurZ80%2FtBj9S3Abn3bfyS9a23eJx1vbNOLuCKkGmsf7NfY909z15zjDJKbohb%2FButwFYX6k4FUJgbXIw4tja6ncv2XEmTrFv20qHWr3HIT4eGLoYSHa62EQ%2BEX31JoxnCjvttGrcF60FcyeM4CmSOjxLBtkVQy6sy50zrfh9nmydOaOjvab83AieWsn7BmE0a7tjQoLsCQWDrAouWAX%2FeBgrIACMY4p167OA2ob76qvH9gm5YACYwZLH3khVESxv7K98OEdRVbhbINdakgA950NGPwmkfWDSXzFPJYt6GCqfMimmxZdg4lgio8B6N8NFAzhZq42u%2FUcvrobq%2FCLCr169Cfn%2FE3idvTFZBqHKswLPNXN%2FUA%2Fw9WxkvrxNefN6AKI4SZk3FpjErc4YKYvNRzGyLed8dooeIBJloBBC7KI06GKThPIziN9Qc49gZxjrltxeNyl8dJd35fKeKnVZy6Ab%2FiigFK1vvFGDZkVED%2FHrBeCsPWNWlH%2F3U3xuQH9h1FA%2FDDIrBwlfORdb1D5pAZDxRqtSDaK69WfrKYYw1Ov2vwY6pgGHVZjcsq2NoLAoCABjM6TFW%2BBjAO7qaqIJBF7kzNuZEJ4CVS02DC89P%2FUM5tpSILAZzTooMK0aOcqBtUChH0lsk6rSsYuKFMGAJ8u0BBxkhCSAuHF5AthF4l25he4Ddzesl2dBv4gV7hi%2FTFn8r%2B7zsYwDueejqy8G8dMfPLMIZwAdIpU0XtZzMCBcEnU0BPW2oz09%2F0pEE1e4gZkNIDBhpNv2MIXB&X-Amz-Signature=2d8e9a2173cf15475915cc5aea173ca29b9d600f2e8ab932106fb74f38607617&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
