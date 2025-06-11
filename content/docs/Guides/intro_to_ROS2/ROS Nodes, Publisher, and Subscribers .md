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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7V7FB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNerPqr7EwmKoxLc5vigXWxLrwdoG%2F5g16YtxsUw59xAIgeDjcV0fMfp8OqTh2qK6WIBjlt18fLSBs8Jt0JAhfFUYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDabGpowHZr6PyHpSyrcA%2BHaiIIMPh%2FhgWRIcA2M4wOwm4SsmRClFq%2BQUrgbKYbH9wE%2B%2FXFrdz7HhHVYA4NPCGfnh1fy8m8N4o2zTig5kjzzq4M0E3hivNsXQMmeb5x1ysr1eXglrSoSZz%2BzG5GlV3rV6w9UmCu%2Bkn1gWb1GQ3jEDya2jqQRHZlV1hgXZSUwYLkCVUaRmnJvt4DLOPMc1XPX4QC0kWjEOVjiavw%2FahVfMG8Tn4RDHJIlGBRGkHhWzJK5%2BId7apLf%2FHFZk%2FZwLAgnc4CB8%2Bxg2gmmQvdH%2B%2FCMMhEceXsGXSWHz0vibidZZ2sCcC1hmlE7Z%2FrggH4FdhNFS5kC60pkmJGe0rxhl%2BK6ApUYFW6%2Bttpvc3lacH6ypDeLUA8UZWvsoF%2FgHpvHvEU6mAseisbogtH4tNEBBOtjceKbt9hUGDKFeLJuJAr5SRzei%2BXHs3rFAGlUdnLlzwtjO7rh3p7YDM3QLxRctquB0%2Bni1FhA7AHbczDc8snDPoFmaD98WD78UOwnZ7bXM3RwxkBXIIK1dvd7PopmyMWPFNjVBqF9%2B%2FCqx1D0Jz3WKoeBvfqLoyMp4%2Flntlt8ewbrv8hXq0IKe%2FeVwF4s5nHj9PPbOdgH44UA%2FNE8cTF2LMOltLSsH8oDDq3mMO3npsIGOqUBi23nJ1kZQgwSh%2BJABDgUEsM90v3HKFu38Jpk%2B85B0bjlN8c3K6ydOieJFio1iiQKoHyR83weyZ1RwfdAvAK1mnA17l%2FqKE51zbaShEbdEEDAffphsorPgtL94RK2vQ49ea0tA8%2B8Bc4JmZyYpUqIY4e3rOHGPL9gg%2BcwFfmndZrv7u2BHC%2FN1bxTFDJfMu8K7vYjriHWXWkHDidqXwQq4oat2kS9&X-Amz-Signature=28e4d2d283e855d7891ba0179d2f350bf4aa6212146f74b304e5586f6487f4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7V7FB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNerPqr7EwmKoxLc5vigXWxLrwdoG%2F5g16YtxsUw59xAIgeDjcV0fMfp8OqTh2qK6WIBjlt18fLSBs8Jt0JAhfFUYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDabGpowHZr6PyHpSyrcA%2BHaiIIMPh%2FhgWRIcA2M4wOwm4SsmRClFq%2BQUrgbKYbH9wE%2B%2FXFrdz7HhHVYA4NPCGfnh1fy8m8N4o2zTig5kjzzq4M0E3hivNsXQMmeb5x1ysr1eXglrSoSZz%2BzG5GlV3rV6w9UmCu%2Bkn1gWb1GQ3jEDya2jqQRHZlV1hgXZSUwYLkCVUaRmnJvt4DLOPMc1XPX4QC0kWjEOVjiavw%2FahVfMG8Tn4RDHJIlGBRGkHhWzJK5%2BId7apLf%2FHFZk%2FZwLAgnc4CB8%2Bxg2gmmQvdH%2B%2FCMMhEceXsGXSWHz0vibidZZ2sCcC1hmlE7Z%2FrggH4FdhNFS5kC60pkmJGe0rxhl%2BK6ApUYFW6%2Bttpvc3lacH6ypDeLUA8UZWvsoF%2FgHpvHvEU6mAseisbogtH4tNEBBOtjceKbt9hUGDKFeLJuJAr5SRzei%2BXHs3rFAGlUdnLlzwtjO7rh3p7YDM3QLxRctquB0%2Bni1FhA7AHbczDc8snDPoFmaD98WD78UOwnZ7bXM3RwxkBXIIK1dvd7PopmyMWPFNjVBqF9%2B%2FCqx1D0Jz3WKoeBvfqLoyMp4%2Flntlt8ewbrv8hXq0IKe%2FeVwF4s5nHj9PPbOdgH44UA%2FNE8cTF2LMOltLSsH8oDDq3mMO3npsIGOqUBi23nJ1kZQgwSh%2BJABDgUEsM90v3HKFu38Jpk%2B85B0bjlN8c3K6ydOieJFio1iiQKoHyR83weyZ1RwfdAvAK1mnA17l%2FqKE51zbaShEbdEEDAffphsorPgtL94RK2vQ49ea0tA8%2B8Bc4JmZyYpUqIY4e3rOHGPL9gg%2BcwFfmndZrv7u2BHC%2FN1bxTFDJfMu8K7vYjriHWXWkHDidqXwQq4oat2kS9&X-Amz-Signature=2918c4469e94d795ac41a75da9a09fee4f1187e8b9ce6af728a5994da66993ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7V7FB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNerPqr7EwmKoxLc5vigXWxLrwdoG%2F5g16YtxsUw59xAIgeDjcV0fMfp8OqTh2qK6WIBjlt18fLSBs8Jt0JAhfFUYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDabGpowHZr6PyHpSyrcA%2BHaiIIMPh%2FhgWRIcA2M4wOwm4SsmRClFq%2BQUrgbKYbH9wE%2B%2FXFrdz7HhHVYA4NPCGfnh1fy8m8N4o2zTig5kjzzq4M0E3hivNsXQMmeb5x1ysr1eXglrSoSZz%2BzG5GlV3rV6w9UmCu%2Bkn1gWb1GQ3jEDya2jqQRHZlV1hgXZSUwYLkCVUaRmnJvt4DLOPMc1XPX4QC0kWjEOVjiavw%2FahVfMG8Tn4RDHJIlGBRGkHhWzJK5%2BId7apLf%2FHFZk%2FZwLAgnc4CB8%2Bxg2gmmQvdH%2B%2FCMMhEceXsGXSWHz0vibidZZ2sCcC1hmlE7Z%2FrggH4FdhNFS5kC60pkmJGe0rxhl%2BK6ApUYFW6%2Bttpvc3lacH6ypDeLUA8UZWvsoF%2FgHpvHvEU6mAseisbogtH4tNEBBOtjceKbt9hUGDKFeLJuJAr5SRzei%2BXHs3rFAGlUdnLlzwtjO7rh3p7YDM3QLxRctquB0%2Bni1FhA7AHbczDc8snDPoFmaD98WD78UOwnZ7bXM3RwxkBXIIK1dvd7PopmyMWPFNjVBqF9%2B%2FCqx1D0Jz3WKoeBvfqLoyMp4%2Flntlt8ewbrv8hXq0IKe%2FeVwF4s5nHj9PPbOdgH44UA%2FNE8cTF2LMOltLSsH8oDDq3mMO3npsIGOqUBi23nJ1kZQgwSh%2BJABDgUEsM90v3HKFu38Jpk%2B85B0bjlN8c3K6ydOieJFio1iiQKoHyR83weyZ1RwfdAvAK1mnA17l%2FqKE51zbaShEbdEEDAffphsorPgtL94RK2vQ49ea0tA8%2B8Bc4JmZyYpUqIY4e3rOHGPL9gg%2BcwFfmndZrv7u2BHC%2FN1bxTFDJfMu8K7vYjriHWXWkHDidqXwQq4oat2kS9&X-Amz-Signature=154dadd29803344ef5ad1445373cb44cead3e56183585791bfc8f9a1cb1f56b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7V7FB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNerPqr7EwmKoxLc5vigXWxLrwdoG%2F5g16YtxsUw59xAIgeDjcV0fMfp8OqTh2qK6WIBjlt18fLSBs8Jt0JAhfFUYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDabGpowHZr6PyHpSyrcA%2BHaiIIMPh%2FhgWRIcA2M4wOwm4SsmRClFq%2BQUrgbKYbH9wE%2B%2FXFrdz7HhHVYA4NPCGfnh1fy8m8N4o2zTig5kjzzq4M0E3hivNsXQMmeb5x1ysr1eXglrSoSZz%2BzG5GlV3rV6w9UmCu%2Bkn1gWb1GQ3jEDya2jqQRHZlV1hgXZSUwYLkCVUaRmnJvt4DLOPMc1XPX4QC0kWjEOVjiavw%2FahVfMG8Tn4RDHJIlGBRGkHhWzJK5%2BId7apLf%2FHFZk%2FZwLAgnc4CB8%2Bxg2gmmQvdH%2B%2FCMMhEceXsGXSWHz0vibidZZ2sCcC1hmlE7Z%2FrggH4FdhNFS5kC60pkmJGe0rxhl%2BK6ApUYFW6%2Bttpvc3lacH6ypDeLUA8UZWvsoF%2FgHpvHvEU6mAseisbogtH4tNEBBOtjceKbt9hUGDKFeLJuJAr5SRzei%2BXHs3rFAGlUdnLlzwtjO7rh3p7YDM3QLxRctquB0%2Bni1FhA7AHbczDc8snDPoFmaD98WD78UOwnZ7bXM3RwxkBXIIK1dvd7PopmyMWPFNjVBqF9%2B%2FCqx1D0Jz3WKoeBvfqLoyMp4%2Flntlt8ewbrv8hXq0IKe%2FeVwF4s5nHj9PPbOdgH44UA%2FNE8cTF2LMOltLSsH8oDDq3mMO3npsIGOqUBi23nJ1kZQgwSh%2BJABDgUEsM90v3HKFu38Jpk%2B85B0bjlN8c3K6ydOieJFio1iiQKoHyR83weyZ1RwfdAvAK1mnA17l%2FqKE51zbaShEbdEEDAffphsorPgtL94RK2vQ49ea0tA8%2B8Bc4JmZyYpUqIY4e3rOHGPL9gg%2BcwFfmndZrv7u2BHC%2FN1bxTFDJfMu8K7vYjriHWXWkHDidqXwQq4oat2kS9&X-Amz-Signature=b1f32c23e6937f8d8b074004ed31a2b319cf3b5d609a5d8563c6dbe027dbe709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7V7FB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNerPqr7EwmKoxLc5vigXWxLrwdoG%2F5g16YtxsUw59xAIgeDjcV0fMfp8OqTh2qK6WIBjlt18fLSBs8Jt0JAhfFUYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDabGpowHZr6PyHpSyrcA%2BHaiIIMPh%2FhgWRIcA2M4wOwm4SsmRClFq%2BQUrgbKYbH9wE%2B%2FXFrdz7HhHVYA4NPCGfnh1fy8m8N4o2zTig5kjzzq4M0E3hivNsXQMmeb5x1ysr1eXglrSoSZz%2BzG5GlV3rV6w9UmCu%2Bkn1gWb1GQ3jEDya2jqQRHZlV1hgXZSUwYLkCVUaRmnJvt4DLOPMc1XPX4QC0kWjEOVjiavw%2FahVfMG8Tn4RDHJIlGBRGkHhWzJK5%2BId7apLf%2FHFZk%2FZwLAgnc4CB8%2Bxg2gmmQvdH%2B%2FCMMhEceXsGXSWHz0vibidZZ2sCcC1hmlE7Z%2FrggH4FdhNFS5kC60pkmJGe0rxhl%2BK6ApUYFW6%2Bttpvc3lacH6ypDeLUA8UZWvsoF%2FgHpvHvEU6mAseisbogtH4tNEBBOtjceKbt9hUGDKFeLJuJAr5SRzei%2BXHs3rFAGlUdnLlzwtjO7rh3p7YDM3QLxRctquB0%2Bni1FhA7AHbczDc8snDPoFmaD98WD78UOwnZ7bXM3RwxkBXIIK1dvd7PopmyMWPFNjVBqF9%2B%2FCqx1D0Jz3WKoeBvfqLoyMp4%2Flntlt8ewbrv8hXq0IKe%2FeVwF4s5nHj9PPbOdgH44UA%2FNE8cTF2LMOltLSsH8oDDq3mMO3npsIGOqUBi23nJ1kZQgwSh%2BJABDgUEsM90v3HKFu38Jpk%2B85B0bjlN8c3K6ydOieJFio1iiQKoHyR83weyZ1RwfdAvAK1mnA17l%2FqKE51zbaShEbdEEDAffphsorPgtL94RK2vQ49ea0tA8%2B8Bc4JmZyYpUqIY4e3rOHGPL9gg%2BcwFfmndZrv7u2BHC%2FN1bxTFDJfMu8K7vYjriHWXWkHDidqXwQq4oat2kS9&X-Amz-Signature=a911551b34538c6e07a1174e59db1cd2aa280cc5dcf257e43ac9793480b25c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7V7FB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNerPqr7EwmKoxLc5vigXWxLrwdoG%2F5g16YtxsUw59xAIgeDjcV0fMfp8OqTh2qK6WIBjlt18fLSBs8Jt0JAhfFUYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDabGpowHZr6PyHpSyrcA%2BHaiIIMPh%2FhgWRIcA2M4wOwm4SsmRClFq%2BQUrgbKYbH9wE%2B%2FXFrdz7HhHVYA4NPCGfnh1fy8m8N4o2zTig5kjzzq4M0E3hivNsXQMmeb5x1ysr1eXglrSoSZz%2BzG5GlV3rV6w9UmCu%2Bkn1gWb1GQ3jEDya2jqQRHZlV1hgXZSUwYLkCVUaRmnJvt4DLOPMc1XPX4QC0kWjEOVjiavw%2FahVfMG8Tn4RDHJIlGBRGkHhWzJK5%2BId7apLf%2FHFZk%2FZwLAgnc4CB8%2Bxg2gmmQvdH%2B%2FCMMhEceXsGXSWHz0vibidZZ2sCcC1hmlE7Z%2FrggH4FdhNFS5kC60pkmJGe0rxhl%2BK6ApUYFW6%2Bttpvc3lacH6ypDeLUA8UZWvsoF%2FgHpvHvEU6mAseisbogtH4tNEBBOtjceKbt9hUGDKFeLJuJAr5SRzei%2BXHs3rFAGlUdnLlzwtjO7rh3p7YDM3QLxRctquB0%2Bni1FhA7AHbczDc8snDPoFmaD98WD78UOwnZ7bXM3RwxkBXIIK1dvd7PopmyMWPFNjVBqF9%2B%2FCqx1D0Jz3WKoeBvfqLoyMp4%2Flntlt8ewbrv8hXq0IKe%2FeVwF4s5nHj9PPbOdgH44UA%2FNE8cTF2LMOltLSsH8oDDq3mMO3npsIGOqUBi23nJ1kZQgwSh%2BJABDgUEsM90v3HKFu38Jpk%2B85B0bjlN8c3K6ydOieJFio1iiQKoHyR83weyZ1RwfdAvAK1mnA17l%2FqKE51zbaShEbdEEDAffphsorPgtL94RK2vQ49ea0tA8%2B8Bc4JmZyYpUqIY4e3rOHGPL9gg%2BcwFfmndZrv7u2BHC%2FN1bxTFDJfMu8K7vYjriHWXWkHDidqXwQq4oat2kS9&X-Amz-Signature=2579ef19ba9dc8096c5412b38eab1d31bcc2787932072ca2d741c3e3683513b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7V7FB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNerPqr7EwmKoxLc5vigXWxLrwdoG%2F5g16YtxsUw59xAIgeDjcV0fMfp8OqTh2qK6WIBjlt18fLSBs8Jt0JAhfFUYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDabGpowHZr6PyHpSyrcA%2BHaiIIMPh%2FhgWRIcA2M4wOwm4SsmRClFq%2BQUrgbKYbH9wE%2B%2FXFrdz7HhHVYA4NPCGfnh1fy8m8N4o2zTig5kjzzq4M0E3hivNsXQMmeb5x1ysr1eXglrSoSZz%2BzG5GlV3rV6w9UmCu%2Bkn1gWb1GQ3jEDya2jqQRHZlV1hgXZSUwYLkCVUaRmnJvt4DLOPMc1XPX4QC0kWjEOVjiavw%2FahVfMG8Tn4RDHJIlGBRGkHhWzJK5%2BId7apLf%2FHFZk%2FZwLAgnc4CB8%2Bxg2gmmQvdH%2B%2FCMMhEceXsGXSWHz0vibidZZ2sCcC1hmlE7Z%2FrggH4FdhNFS5kC60pkmJGe0rxhl%2BK6ApUYFW6%2Bttpvc3lacH6ypDeLUA8UZWvsoF%2FgHpvHvEU6mAseisbogtH4tNEBBOtjceKbt9hUGDKFeLJuJAr5SRzei%2BXHs3rFAGlUdnLlzwtjO7rh3p7YDM3QLxRctquB0%2Bni1FhA7AHbczDc8snDPoFmaD98WD78UOwnZ7bXM3RwxkBXIIK1dvd7PopmyMWPFNjVBqF9%2B%2FCqx1D0Jz3WKoeBvfqLoyMp4%2Flntlt8ewbrv8hXq0IKe%2FeVwF4s5nHj9PPbOdgH44UA%2FNE8cTF2LMOltLSsH8oDDq3mMO3npsIGOqUBi23nJ1kZQgwSh%2BJABDgUEsM90v3HKFu38Jpk%2B85B0bjlN8c3K6ydOieJFio1iiQKoHyR83weyZ1RwfdAvAK1mnA17l%2FqKE51zbaShEbdEEDAffphsorPgtL94RK2vQ49ea0tA8%2B8Bc4JmZyYpUqIY4e3rOHGPL9gg%2BcwFfmndZrv7u2BHC%2FN1bxTFDJfMu8K7vYjriHWXWkHDidqXwQq4oat2kS9&X-Amz-Signature=863982bbbf0a0a3ac9f124253469d5c1db94a913f7df9e9667cdbe08ce984c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7V7FB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNerPqr7EwmKoxLc5vigXWxLrwdoG%2F5g16YtxsUw59xAIgeDjcV0fMfp8OqTh2qK6WIBjlt18fLSBs8Jt0JAhfFUYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDabGpowHZr6PyHpSyrcA%2BHaiIIMPh%2FhgWRIcA2M4wOwm4SsmRClFq%2BQUrgbKYbH9wE%2B%2FXFrdz7HhHVYA4NPCGfnh1fy8m8N4o2zTig5kjzzq4M0E3hivNsXQMmeb5x1ysr1eXglrSoSZz%2BzG5GlV3rV6w9UmCu%2Bkn1gWb1GQ3jEDya2jqQRHZlV1hgXZSUwYLkCVUaRmnJvt4DLOPMc1XPX4QC0kWjEOVjiavw%2FahVfMG8Tn4RDHJIlGBRGkHhWzJK5%2BId7apLf%2FHFZk%2FZwLAgnc4CB8%2Bxg2gmmQvdH%2B%2FCMMhEceXsGXSWHz0vibidZZ2sCcC1hmlE7Z%2FrggH4FdhNFS5kC60pkmJGe0rxhl%2BK6ApUYFW6%2Bttpvc3lacH6ypDeLUA8UZWvsoF%2FgHpvHvEU6mAseisbogtH4tNEBBOtjceKbt9hUGDKFeLJuJAr5SRzei%2BXHs3rFAGlUdnLlzwtjO7rh3p7YDM3QLxRctquB0%2Bni1FhA7AHbczDc8snDPoFmaD98WD78UOwnZ7bXM3RwxkBXIIK1dvd7PopmyMWPFNjVBqF9%2B%2FCqx1D0Jz3WKoeBvfqLoyMp4%2Flntlt8ewbrv8hXq0IKe%2FeVwF4s5nHj9PPbOdgH44UA%2FNE8cTF2LMOltLSsH8oDDq3mMO3npsIGOqUBi23nJ1kZQgwSh%2BJABDgUEsM90v3HKFu38Jpk%2B85B0bjlN8c3K6ydOieJFio1iiQKoHyR83weyZ1RwfdAvAK1mnA17l%2FqKE51zbaShEbdEEDAffphsorPgtL94RK2vQ49ea0tA8%2B8Bc4JmZyYpUqIY4e3rOHGPL9gg%2BcwFfmndZrv7u2BHC%2FN1bxTFDJfMu8K7vYjriHWXWkHDidqXwQq4oat2kS9&X-Amz-Signature=21246ef945be4fd284c51f166bde1037ef83e5e466c2dd74362096b314010721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
