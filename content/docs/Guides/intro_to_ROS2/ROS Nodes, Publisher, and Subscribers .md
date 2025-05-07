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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQURWN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQnG8xYltpWMZTmK7Gd%2FcFsxSq1fv%2Fn%2FVups4%2FlqSGAiAxIiF6TwgylChAIf0nDJ6mvppjOJoX1ASvHpCV3MGL%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMAFBaoK2CGXuEZAOfKtwD0qihZ9H1C0nWnMFioapNvablph9a%2BWdpQtuuK1A%2FFMIISm%2Bm8C7a4IHt6tN0d9LDSLIaLA0VTzUJKYaX47NbPLA3VKQGQWuS5tzp8G4VvPOKRmSU1fWgaYX58jXvH1dd2zmVVDEHDFAC7Ws4Sno2pIc8NsNypJC89Y1WKdRl4hjiqlGWXU%2FZBwbS3qXcFsyNOCHo2IsJfxqj62s12eYFETJCtAtg6NWXW9JPQSrtdHA69tbwY3Z%2FMWPMlkx7AfzmEHI7eT3tYci51WkNOwzrMOEykdlIVM0WzjdFmlScHvJdPhSpQqK3wXl8OgOT0D5soUHPhJrvdMi2cNKBBlgNWgOIRu7AlFGU7LIndr6EC1k7OKYHMa1889WlfLkSqcbiQTEbU80KNvz%2FMBLvHYFKkwWzVUam963VqAVt1dMRrm6zAct9zlDbVs8fh4YZpSxBMyvwlCsIGQcH8pekjp0X1lfiB77RR%2FMaCh4Y6QKcHJJ5vT08Hpc9ThqhQTQ54w2aHmg1CI0uAcXqkeFERU%2Bp9zL%2Bnte9CsY3yO5PKGO%2B4lsGIoe0JrJZG%2FX2qQxjNkwvBbCFaQWWzhZe%2BcfRYieECFI2h5B7MLr2LxYk9S9GNPzxtTWWSYKGGvLTpDgw9eftwAY6pgGTAPZBYPgkYyo6F%2FvZwsAstKJ791dmNFsaCVLsO7RFhGCDgN0Eez3hb7MmxHQAa5Ue8I5QlPVcuVsHpEGkl5bld7pGG%2FAkwg1gpI1wNhcLpa9qZxN%2Fq%2Fdxce%2FID7vs7r%2BEYmKH8ZAZZNE4y8uAWEHaTNV5C%2FQc8j7pfMdhBzY0KMHRPvfjTE0ZgBymBy%2F0%2B%2Fja5QKkac2uHnTIxr%2FN%2BzWjEERKIMgq&X-Amz-Signature=06f9df15174ddf0937025afc8e261dc7bb9d0ff3c9be6d7d347ff097b605e0c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQURWN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQnG8xYltpWMZTmK7Gd%2FcFsxSq1fv%2Fn%2FVups4%2FlqSGAiAxIiF6TwgylChAIf0nDJ6mvppjOJoX1ASvHpCV3MGL%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMAFBaoK2CGXuEZAOfKtwD0qihZ9H1C0nWnMFioapNvablph9a%2BWdpQtuuK1A%2FFMIISm%2Bm8C7a4IHt6tN0d9LDSLIaLA0VTzUJKYaX47NbPLA3VKQGQWuS5tzp8G4VvPOKRmSU1fWgaYX58jXvH1dd2zmVVDEHDFAC7Ws4Sno2pIc8NsNypJC89Y1WKdRl4hjiqlGWXU%2FZBwbS3qXcFsyNOCHo2IsJfxqj62s12eYFETJCtAtg6NWXW9JPQSrtdHA69tbwY3Z%2FMWPMlkx7AfzmEHI7eT3tYci51WkNOwzrMOEykdlIVM0WzjdFmlScHvJdPhSpQqK3wXl8OgOT0D5soUHPhJrvdMi2cNKBBlgNWgOIRu7AlFGU7LIndr6EC1k7OKYHMa1889WlfLkSqcbiQTEbU80KNvz%2FMBLvHYFKkwWzVUam963VqAVt1dMRrm6zAct9zlDbVs8fh4YZpSxBMyvwlCsIGQcH8pekjp0X1lfiB77RR%2FMaCh4Y6QKcHJJ5vT08Hpc9ThqhQTQ54w2aHmg1CI0uAcXqkeFERU%2Bp9zL%2Bnte9CsY3yO5PKGO%2B4lsGIoe0JrJZG%2FX2qQxjNkwvBbCFaQWWzhZe%2BcfRYieECFI2h5B7MLr2LxYk9S9GNPzxtTWWSYKGGvLTpDgw9eftwAY6pgGTAPZBYPgkYyo6F%2FvZwsAstKJ791dmNFsaCVLsO7RFhGCDgN0Eez3hb7MmxHQAa5Ue8I5QlPVcuVsHpEGkl5bld7pGG%2FAkwg1gpI1wNhcLpa9qZxN%2Fq%2Fdxce%2FID7vs7r%2BEYmKH8ZAZZNE4y8uAWEHaTNV5C%2FQc8j7pfMdhBzY0KMHRPvfjTE0ZgBymBy%2F0%2B%2Fja5QKkac2uHnTIxr%2FN%2BzWjEERKIMgq&X-Amz-Signature=c42058e89bec1adc4a416f41105d7eb6a8a16ff4e6d5e45382f09773ba2ef72a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQURWN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQnG8xYltpWMZTmK7Gd%2FcFsxSq1fv%2Fn%2FVups4%2FlqSGAiAxIiF6TwgylChAIf0nDJ6mvppjOJoX1ASvHpCV3MGL%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMAFBaoK2CGXuEZAOfKtwD0qihZ9H1C0nWnMFioapNvablph9a%2BWdpQtuuK1A%2FFMIISm%2Bm8C7a4IHt6tN0d9LDSLIaLA0VTzUJKYaX47NbPLA3VKQGQWuS5tzp8G4VvPOKRmSU1fWgaYX58jXvH1dd2zmVVDEHDFAC7Ws4Sno2pIc8NsNypJC89Y1WKdRl4hjiqlGWXU%2FZBwbS3qXcFsyNOCHo2IsJfxqj62s12eYFETJCtAtg6NWXW9JPQSrtdHA69tbwY3Z%2FMWPMlkx7AfzmEHI7eT3tYci51WkNOwzrMOEykdlIVM0WzjdFmlScHvJdPhSpQqK3wXl8OgOT0D5soUHPhJrvdMi2cNKBBlgNWgOIRu7AlFGU7LIndr6EC1k7OKYHMa1889WlfLkSqcbiQTEbU80KNvz%2FMBLvHYFKkwWzVUam963VqAVt1dMRrm6zAct9zlDbVs8fh4YZpSxBMyvwlCsIGQcH8pekjp0X1lfiB77RR%2FMaCh4Y6QKcHJJ5vT08Hpc9ThqhQTQ54w2aHmg1CI0uAcXqkeFERU%2Bp9zL%2Bnte9CsY3yO5PKGO%2B4lsGIoe0JrJZG%2FX2qQxjNkwvBbCFaQWWzhZe%2BcfRYieECFI2h5B7MLr2LxYk9S9GNPzxtTWWSYKGGvLTpDgw9eftwAY6pgGTAPZBYPgkYyo6F%2FvZwsAstKJ791dmNFsaCVLsO7RFhGCDgN0Eez3hb7MmxHQAa5Ue8I5QlPVcuVsHpEGkl5bld7pGG%2FAkwg1gpI1wNhcLpa9qZxN%2Fq%2Fdxce%2FID7vs7r%2BEYmKH8ZAZZNE4y8uAWEHaTNV5C%2FQc8j7pfMdhBzY0KMHRPvfjTE0ZgBymBy%2F0%2B%2Fja5QKkac2uHnTIxr%2FN%2BzWjEERKIMgq&X-Amz-Signature=09d897101ea889445e4d6e0adbe59113910559c81ed7492ff42107589acb7171&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQURWN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQnG8xYltpWMZTmK7Gd%2FcFsxSq1fv%2Fn%2FVups4%2FlqSGAiAxIiF6TwgylChAIf0nDJ6mvppjOJoX1ASvHpCV3MGL%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMAFBaoK2CGXuEZAOfKtwD0qihZ9H1C0nWnMFioapNvablph9a%2BWdpQtuuK1A%2FFMIISm%2Bm8C7a4IHt6tN0d9LDSLIaLA0VTzUJKYaX47NbPLA3VKQGQWuS5tzp8G4VvPOKRmSU1fWgaYX58jXvH1dd2zmVVDEHDFAC7Ws4Sno2pIc8NsNypJC89Y1WKdRl4hjiqlGWXU%2FZBwbS3qXcFsyNOCHo2IsJfxqj62s12eYFETJCtAtg6NWXW9JPQSrtdHA69tbwY3Z%2FMWPMlkx7AfzmEHI7eT3tYci51WkNOwzrMOEykdlIVM0WzjdFmlScHvJdPhSpQqK3wXl8OgOT0D5soUHPhJrvdMi2cNKBBlgNWgOIRu7AlFGU7LIndr6EC1k7OKYHMa1889WlfLkSqcbiQTEbU80KNvz%2FMBLvHYFKkwWzVUam963VqAVt1dMRrm6zAct9zlDbVs8fh4YZpSxBMyvwlCsIGQcH8pekjp0X1lfiB77RR%2FMaCh4Y6QKcHJJ5vT08Hpc9ThqhQTQ54w2aHmg1CI0uAcXqkeFERU%2Bp9zL%2Bnte9CsY3yO5PKGO%2B4lsGIoe0JrJZG%2FX2qQxjNkwvBbCFaQWWzhZe%2BcfRYieECFI2h5B7MLr2LxYk9S9GNPzxtTWWSYKGGvLTpDgw9eftwAY6pgGTAPZBYPgkYyo6F%2FvZwsAstKJ791dmNFsaCVLsO7RFhGCDgN0Eez3hb7MmxHQAa5Ue8I5QlPVcuVsHpEGkl5bld7pGG%2FAkwg1gpI1wNhcLpa9qZxN%2Fq%2Fdxce%2FID7vs7r%2BEYmKH8ZAZZNE4y8uAWEHaTNV5C%2FQc8j7pfMdhBzY0KMHRPvfjTE0ZgBymBy%2F0%2B%2Fja5QKkac2uHnTIxr%2FN%2BzWjEERKIMgq&X-Amz-Signature=11480425aab738edb170251807017319f9bb7c18283c12f2c346ce8961ee4cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQURWN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQnG8xYltpWMZTmK7Gd%2FcFsxSq1fv%2Fn%2FVups4%2FlqSGAiAxIiF6TwgylChAIf0nDJ6mvppjOJoX1ASvHpCV3MGL%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMAFBaoK2CGXuEZAOfKtwD0qihZ9H1C0nWnMFioapNvablph9a%2BWdpQtuuK1A%2FFMIISm%2Bm8C7a4IHt6tN0d9LDSLIaLA0VTzUJKYaX47NbPLA3VKQGQWuS5tzp8G4VvPOKRmSU1fWgaYX58jXvH1dd2zmVVDEHDFAC7Ws4Sno2pIc8NsNypJC89Y1WKdRl4hjiqlGWXU%2FZBwbS3qXcFsyNOCHo2IsJfxqj62s12eYFETJCtAtg6NWXW9JPQSrtdHA69tbwY3Z%2FMWPMlkx7AfzmEHI7eT3tYci51WkNOwzrMOEykdlIVM0WzjdFmlScHvJdPhSpQqK3wXl8OgOT0D5soUHPhJrvdMi2cNKBBlgNWgOIRu7AlFGU7LIndr6EC1k7OKYHMa1889WlfLkSqcbiQTEbU80KNvz%2FMBLvHYFKkwWzVUam963VqAVt1dMRrm6zAct9zlDbVs8fh4YZpSxBMyvwlCsIGQcH8pekjp0X1lfiB77RR%2FMaCh4Y6QKcHJJ5vT08Hpc9ThqhQTQ54w2aHmg1CI0uAcXqkeFERU%2Bp9zL%2Bnte9CsY3yO5PKGO%2B4lsGIoe0JrJZG%2FX2qQxjNkwvBbCFaQWWzhZe%2BcfRYieECFI2h5B7MLr2LxYk9S9GNPzxtTWWSYKGGvLTpDgw9eftwAY6pgGTAPZBYPgkYyo6F%2FvZwsAstKJ791dmNFsaCVLsO7RFhGCDgN0Eez3hb7MmxHQAa5Ue8I5QlPVcuVsHpEGkl5bld7pGG%2FAkwg1gpI1wNhcLpa9qZxN%2Fq%2Fdxce%2FID7vs7r%2BEYmKH8ZAZZNE4y8uAWEHaTNV5C%2FQc8j7pfMdhBzY0KMHRPvfjTE0ZgBymBy%2F0%2B%2Fja5QKkac2uHnTIxr%2FN%2BzWjEERKIMgq&X-Amz-Signature=605b0c6a967dc21960fbb50e9500f382b21b40579f2bcaf61cf0b2c2d07be802&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQURWN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQnG8xYltpWMZTmK7Gd%2FcFsxSq1fv%2Fn%2FVups4%2FlqSGAiAxIiF6TwgylChAIf0nDJ6mvppjOJoX1ASvHpCV3MGL%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMAFBaoK2CGXuEZAOfKtwD0qihZ9H1C0nWnMFioapNvablph9a%2BWdpQtuuK1A%2FFMIISm%2Bm8C7a4IHt6tN0d9LDSLIaLA0VTzUJKYaX47NbPLA3VKQGQWuS5tzp8G4VvPOKRmSU1fWgaYX58jXvH1dd2zmVVDEHDFAC7Ws4Sno2pIc8NsNypJC89Y1WKdRl4hjiqlGWXU%2FZBwbS3qXcFsyNOCHo2IsJfxqj62s12eYFETJCtAtg6NWXW9JPQSrtdHA69tbwY3Z%2FMWPMlkx7AfzmEHI7eT3tYci51WkNOwzrMOEykdlIVM0WzjdFmlScHvJdPhSpQqK3wXl8OgOT0D5soUHPhJrvdMi2cNKBBlgNWgOIRu7AlFGU7LIndr6EC1k7OKYHMa1889WlfLkSqcbiQTEbU80KNvz%2FMBLvHYFKkwWzVUam963VqAVt1dMRrm6zAct9zlDbVs8fh4YZpSxBMyvwlCsIGQcH8pekjp0X1lfiB77RR%2FMaCh4Y6QKcHJJ5vT08Hpc9ThqhQTQ54w2aHmg1CI0uAcXqkeFERU%2Bp9zL%2Bnte9CsY3yO5PKGO%2B4lsGIoe0JrJZG%2FX2qQxjNkwvBbCFaQWWzhZe%2BcfRYieECFI2h5B7MLr2LxYk9S9GNPzxtTWWSYKGGvLTpDgw9eftwAY6pgGTAPZBYPgkYyo6F%2FvZwsAstKJ791dmNFsaCVLsO7RFhGCDgN0Eez3hb7MmxHQAa5Ue8I5QlPVcuVsHpEGkl5bld7pGG%2FAkwg1gpI1wNhcLpa9qZxN%2Fq%2Fdxce%2FID7vs7r%2BEYmKH8ZAZZNE4y8uAWEHaTNV5C%2FQc8j7pfMdhBzY0KMHRPvfjTE0ZgBymBy%2F0%2B%2Fja5QKkac2uHnTIxr%2FN%2BzWjEERKIMgq&X-Amz-Signature=f07ab7db27afb9d3920269e0780b991d9010b4a7d63077d876d388ecce993487&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQURWN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQnG8xYltpWMZTmK7Gd%2FcFsxSq1fv%2Fn%2FVups4%2FlqSGAiAxIiF6TwgylChAIf0nDJ6mvppjOJoX1ASvHpCV3MGL%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMAFBaoK2CGXuEZAOfKtwD0qihZ9H1C0nWnMFioapNvablph9a%2BWdpQtuuK1A%2FFMIISm%2Bm8C7a4IHt6tN0d9LDSLIaLA0VTzUJKYaX47NbPLA3VKQGQWuS5tzp8G4VvPOKRmSU1fWgaYX58jXvH1dd2zmVVDEHDFAC7Ws4Sno2pIc8NsNypJC89Y1WKdRl4hjiqlGWXU%2FZBwbS3qXcFsyNOCHo2IsJfxqj62s12eYFETJCtAtg6NWXW9JPQSrtdHA69tbwY3Z%2FMWPMlkx7AfzmEHI7eT3tYci51WkNOwzrMOEykdlIVM0WzjdFmlScHvJdPhSpQqK3wXl8OgOT0D5soUHPhJrvdMi2cNKBBlgNWgOIRu7AlFGU7LIndr6EC1k7OKYHMa1889WlfLkSqcbiQTEbU80KNvz%2FMBLvHYFKkwWzVUam963VqAVt1dMRrm6zAct9zlDbVs8fh4YZpSxBMyvwlCsIGQcH8pekjp0X1lfiB77RR%2FMaCh4Y6QKcHJJ5vT08Hpc9ThqhQTQ54w2aHmg1CI0uAcXqkeFERU%2Bp9zL%2Bnte9CsY3yO5PKGO%2B4lsGIoe0JrJZG%2FX2qQxjNkwvBbCFaQWWzhZe%2BcfRYieECFI2h5B7MLr2LxYk9S9GNPzxtTWWSYKGGvLTpDgw9eftwAY6pgGTAPZBYPgkYyo6F%2FvZwsAstKJ791dmNFsaCVLsO7RFhGCDgN0Eez3hb7MmxHQAa5Ue8I5QlPVcuVsHpEGkl5bld7pGG%2FAkwg1gpI1wNhcLpa9qZxN%2Fq%2Fdxce%2FID7vs7r%2BEYmKH8ZAZZNE4y8uAWEHaTNV5C%2FQc8j7pfMdhBzY0KMHRPvfjTE0ZgBymBy%2F0%2B%2Fja5QKkac2uHnTIxr%2FN%2BzWjEERKIMgq&X-Amz-Signature=e34ca6057fdcc260838bba54ed3a8642fc95c858766bf617dcd60e9375e2b45a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQURWN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQnG8xYltpWMZTmK7Gd%2FcFsxSq1fv%2Fn%2FVups4%2FlqSGAiAxIiF6TwgylChAIf0nDJ6mvppjOJoX1ASvHpCV3MGL%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMAFBaoK2CGXuEZAOfKtwD0qihZ9H1C0nWnMFioapNvablph9a%2BWdpQtuuK1A%2FFMIISm%2Bm8C7a4IHt6tN0d9LDSLIaLA0VTzUJKYaX47NbPLA3VKQGQWuS5tzp8G4VvPOKRmSU1fWgaYX58jXvH1dd2zmVVDEHDFAC7Ws4Sno2pIc8NsNypJC89Y1WKdRl4hjiqlGWXU%2FZBwbS3qXcFsyNOCHo2IsJfxqj62s12eYFETJCtAtg6NWXW9JPQSrtdHA69tbwY3Z%2FMWPMlkx7AfzmEHI7eT3tYci51WkNOwzrMOEykdlIVM0WzjdFmlScHvJdPhSpQqK3wXl8OgOT0D5soUHPhJrvdMi2cNKBBlgNWgOIRu7AlFGU7LIndr6EC1k7OKYHMa1889WlfLkSqcbiQTEbU80KNvz%2FMBLvHYFKkwWzVUam963VqAVt1dMRrm6zAct9zlDbVs8fh4YZpSxBMyvwlCsIGQcH8pekjp0X1lfiB77RR%2FMaCh4Y6QKcHJJ5vT08Hpc9ThqhQTQ54w2aHmg1CI0uAcXqkeFERU%2Bp9zL%2Bnte9CsY3yO5PKGO%2B4lsGIoe0JrJZG%2FX2qQxjNkwvBbCFaQWWzhZe%2BcfRYieECFI2h5B7MLr2LxYk9S9GNPzxtTWWSYKGGvLTpDgw9eftwAY6pgGTAPZBYPgkYyo6F%2FvZwsAstKJ791dmNFsaCVLsO7RFhGCDgN0Eez3hb7MmxHQAa5Ue8I5QlPVcuVsHpEGkl5bld7pGG%2FAkwg1gpI1wNhcLpa9qZxN%2Fq%2Fdxce%2FID7vs7r%2BEYmKH8ZAZZNE4y8uAWEHaTNV5C%2FQc8j7pfMdhBzY0KMHRPvfjTE0ZgBymBy%2F0%2B%2Fja5QKkac2uHnTIxr%2FN%2BzWjEERKIMgq&X-Amz-Signature=e8584a37d83c14ec0a8a1ab2bbaadfe68c023c5fc9d39aa861eae706014d7a96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
