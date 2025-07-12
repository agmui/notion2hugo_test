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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC7ZBBA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC29aBvPz6y%2FjhwwuSO66cV2UtKfh3fd%2FX6WMRRg8blQIgZUsmP8eq9XzmbQZGr5Wn2v8ihI4GdRG1clcT%2Bdd4R6UqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4iglnb894zJYhPYCrcA%2FvY%2FfzeShcG74Tuy09r0%2BlcRgzI8Clppm46oLV3Fhh7udo%2FAt3VX89%2FvEW9rLPL0LJRij6ddunsIsej31KvEoLS0qRqiG6ynbMBABsrPK2V1gUU5SETZk1cQ%2BicGUmB6kkjSeHKCFdd8WDxvNUvj8rW9bt1WMUHoqL4UuhblWvIL8be9FH%2FNIqzWdmA0Q3iEIwK%2FloYXB7t5cyUjIu28vGtsEgezYyN%2BWeuCuppQs9hM6OKU8EkUtg9p1KIhRuGRkpQRLlSBuWJwVLhAV4NheAWuxx4LEWNRs2g%2BCK1%2BOyISplHqnaOnY0LM5UD9KBeFC2Y%2B24k3yL45KKAyP1j%2FhFDMA0utkKBXiRe%2Bxao0ADC6VCptU9FDs5ig7ewSollWyfpO4N3IgvsZ7OBnqfuQ8QyqcUjj9D3aBGzx%2F296TfXPM0dIxPBBqcBrlQdT4W5K6diqY%2BLkJNo0ZKEzfIxdo967xluHTV76m9XPxZ%2FX1UPTea0fD%2FEIDdOg2GPNWsr8Rly6m3bSdRiflhqPv6zf8%2FMToLibBMd0rNOua80RKHefuKp7070nwvSMGopyEhy5Hc9wzApo7QuD7pSGxRZOAcykFKj%2FJBRZhHnNA0fYkFqZgM92Cs2XSzNwX7IMKb5x8MGOqUBBMnv6apP7o53jzGoS7u5UztWFU8OuapOggRuPcszxnouuU4C2tEcuWbmeLyxhd4KlbAEBtb%2F68P9hyf0%2BKYkijUbLflviPQ836JSvIbdb91jKrekxyTvyT0GkO3UHNec9W3mplusjyhn%2BoMYiqN5x8TXiVfDBZ710OWELkN8k5sirmhdbSTBIMzkfCnDXSX5AoszRQ3RIF0Kxh7CAJrKHPQWfLft&X-Amz-Signature=9d4c03485f66e6ed76572f134e8c3f3e2c23c206b65c1d7193d937ad965acac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC7ZBBA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC29aBvPz6y%2FjhwwuSO66cV2UtKfh3fd%2FX6WMRRg8blQIgZUsmP8eq9XzmbQZGr5Wn2v8ihI4GdRG1clcT%2Bdd4R6UqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4iglnb894zJYhPYCrcA%2FvY%2FfzeShcG74Tuy09r0%2BlcRgzI8Clppm46oLV3Fhh7udo%2FAt3VX89%2FvEW9rLPL0LJRij6ddunsIsej31KvEoLS0qRqiG6ynbMBABsrPK2V1gUU5SETZk1cQ%2BicGUmB6kkjSeHKCFdd8WDxvNUvj8rW9bt1WMUHoqL4UuhblWvIL8be9FH%2FNIqzWdmA0Q3iEIwK%2FloYXB7t5cyUjIu28vGtsEgezYyN%2BWeuCuppQs9hM6OKU8EkUtg9p1KIhRuGRkpQRLlSBuWJwVLhAV4NheAWuxx4LEWNRs2g%2BCK1%2BOyISplHqnaOnY0LM5UD9KBeFC2Y%2B24k3yL45KKAyP1j%2FhFDMA0utkKBXiRe%2Bxao0ADC6VCptU9FDs5ig7ewSollWyfpO4N3IgvsZ7OBnqfuQ8QyqcUjj9D3aBGzx%2F296TfXPM0dIxPBBqcBrlQdT4W5K6diqY%2BLkJNo0ZKEzfIxdo967xluHTV76m9XPxZ%2FX1UPTea0fD%2FEIDdOg2GPNWsr8Rly6m3bSdRiflhqPv6zf8%2FMToLibBMd0rNOua80RKHefuKp7070nwvSMGopyEhy5Hc9wzApo7QuD7pSGxRZOAcykFKj%2FJBRZhHnNA0fYkFqZgM92Cs2XSzNwX7IMKb5x8MGOqUBBMnv6apP7o53jzGoS7u5UztWFU8OuapOggRuPcszxnouuU4C2tEcuWbmeLyxhd4KlbAEBtb%2F68P9hyf0%2BKYkijUbLflviPQ836JSvIbdb91jKrekxyTvyT0GkO3UHNec9W3mplusjyhn%2BoMYiqN5x8TXiVfDBZ710OWELkN8k5sirmhdbSTBIMzkfCnDXSX5AoszRQ3RIF0Kxh7CAJrKHPQWfLft&X-Amz-Signature=8fd6e76e1145bcf25db9a9f7122fdaf14be4e4464a03bfbcb51d0735612b71be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC7ZBBA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC29aBvPz6y%2FjhwwuSO66cV2UtKfh3fd%2FX6WMRRg8blQIgZUsmP8eq9XzmbQZGr5Wn2v8ihI4GdRG1clcT%2Bdd4R6UqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4iglnb894zJYhPYCrcA%2FvY%2FfzeShcG74Tuy09r0%2BlcRgzI8Clppm46oLV3Fhh7udo%2FAt3VX89%2FvEW9rLPL0LJRij6ddunsIsej31KvEoLS0qRqiG6ynbMBABsrPK2V1gUU5SETZk1cQ%2BicGUmB6kkjSeHKCFdd8WDxvNUvj8rW9bt1WMUHoqL4UuhblWvIL8be9FH%2FNIqzWdmA0Q3iEIwK%2FloYXB7t5cyUjIu28vGtsEgezYyN%2BWeuCuppQs9hM6OKU8EkUtg9p1KIhRuGRkpQRLlSBuWJwVLhAV4NheAWuxx4LEWNRs2g%2BCK1%2BOyISplHqnaOnY0LM5UD9KBeFC2Y%2B24k3yL45KKAyP1j%2FhFDMA0utkKBXiRe%2Bxao0ADC6VCptU9FDs5ig7ewSollWyfpO4N3IgvsZ7OBnqfuQ8QyqcUjj9D3aBGzx%2F296TfXPM0dIxPBBqcBrlQdT4W5K6diqY%2BLkJNo0ZKEzfIxdo967xluHTV76m9XPxZ%2FX1UPTea0fD%2FEIDdOg2GPNWsr8Rly6m3bSdRiflhqPv6zf8%2FMToLibBMd0rNOua80RKHefuKp7070nwvSMGopyEhy5Hc9wzApo7QuD7pSGxRZOAcykFKj%2FJBRZhHnNA0fYkFqZgM92Cs2XSzNwX7IMKb5x8MGOqUBBMnv6apP7o53jzGoS7u5UztWFU8OuapOggRuPcszxnouuU4C2tEcuWbmeLyxhd4KlbAEBtb%2F68P9hyf0%2BKYkijUbLflviPQ836JSvIbdb91jKrekxyTvyT0GkO3UHNec9W3mplusjyhn%2BoMYiqN5x8TXiVfDBZ710OWELkN8k5sirmhdbSTBIMzkfCnDXSX5AoszRQ3RIF0Kxh7CAJrKHPQWfLft&X-Amz-Signature=51618e91ec75b28a99cdb69624fd3d1b7026860caae0f2378c7cdfb4c84e4b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC7ZBBA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC29aBvPz6y%2FjhwwuSO66cV2UtKfh3fd%2FX6WMRRg8blQIgZUsmP8eq9XzmbQZGr5Wn2v8ihI4GdRG1clcT%2Bdd4R6UqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4iglnb894zJYhPYCrcA%2FvY%2FfzeShcG74Tuy09r0%2BlcRgzI8Clppm46oLV3Fhh7udo%2FAt3VX89%2FvEW9rLPL0LJRij6ddunsIsej31KvEoLS0qRqiG6ynbMBABsrPK2V1gUU5SETZk1cQ%2BicGUmB6kkjSeHKCFdd8WDxvNUvj8rW9bt1WMUHoqL4UuhblWvIL8be9FH%2FNIqzWdmA0Q3iEIwK%2FloYXB7t5cyUjIu28vGtsEgezYyN%2BWeuCuppQs9hM6OKU8EkUtg9p1KIhRuGRkpQRLlSBuWJwVLhAV4NheAWuxx4LEWNRs2g%2BCK1%2BOyISplHqnaOnY0LM5UD9KBeFC2Y%2B24k3yL45KKAyP1j%2FhFDMA0utkKBXiRe%2Bxao0ADC6VCptU9FDs5ig7ewSollWyfpO4N3IgvsZ7OBnqfuQ8QyqcUjj9D3aBGzx%2F296TfXPM0dIxPBBqcBrlQdT4W5K6diqY%2BLkJNo0ZKEzfIxdo967xluHTV76m9XPxZ%2FX1UPTea0fD%2FEIDdOg2GPNWsr8Rly6m3bSdRiflhqPv6zf8%2FMToLibBMd0rNOua80RKHefuKp7070nwvSMGopyEhy5Hc9wzApo7QuD7pSGxRZOAcykFKj%2FJBRZhHnNA0fYkFqZgM92Cs2XSzNwX7IMKb5x8MGOqUBBMnv6apP7o53jzGoS7u5UztWFU8OuapOggRuPcszxnouuU4C2tEcuWbmeLyxhd4KlbAEBtb%2F68P9hyf0%2BKYkijUbLflviPQ836JSvIbdb91jKrekxyTvyT0GkO3UHNec9W3mplusjyhn%2BoMYiqN5x8TXiVfDBZ710OWELkN8k5sirmhdbSTBIMzkfCnDXSX5AoszRQ3RIF0Kxh7CAJrKHPQWfLft&X-Amz-Signature=8adc9f74b9840a24400486457eb1198630ee82a507d9a3cab4b2815d2a812a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC7ZBBA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC29aBvPz6y%2FjhwwuSO66cV2UtKfh3fd%2FX6WMRRg8blQIgZUsmP8eq9XzmbQZGr5Wn2v8ihI4GdRG1clcT%2Bdd4R6UqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4iglnb894zJYhPYCrcA%2FvY%2FfzeShcG74Tuy09r0%2BlcRgzI8Clppm46oLV3Fhh7udo%2FAt3VX89%2FvEW9rLPL0LJRij6ddunsIsej31KvEoLS0qRqiG6ynbMBABsrPK2V1gUU5SETZk1cQ%2BicGUmB6kkjSeHKCFdd8WDxvNUvj8rW9bt1WMUHoqL4UuhblWvIL8be9FH%2FNIqzWdmA0Q3iEIwK%2FloYXB7t5cyUjIu28vGtsEgezYyN%2BWeuCuppQs9hM6OKU8EkUtg9p1KIhRuGRkpQRLlSBuWJwVLhAV4NheAWuxx4LEWNRs2g%2BCK1%2BOyISplHqnaOnY0LM5UD9KBeFC2Y%2B24k3yL45KKAyP1j%2FhFDMA0utkKBXiRe%2Bxao0ADC6VCptU9FDs5ig7ewSollWyfpO4N3IgvsZ7OBnqfuQ8QyqcUjj9D3aBGzx%2F296TfXPM0dIxPBBqcBrlQdT4W5K6diqY%2BLkJNo0ZKEzfIxdo967xluHTV76m9XPxZ%2FX1UPTea0fD%2FEIDdOg2GPNWsr8Rly6m3bSdRiflhqPv6zf8%2FMToLibBMd0rNOua80RKHefuKp7070nwvSMGopyEhy5Hc9wzApo7QuD7pSGxRZOAcykFKj%2FJBRZhHnNA0fYkFqZgM92Cs2XSzNwX7IMKb5x8MGOqUBBMnv6apP7o53jzGoS7u5UztWFU8OuapOggRuPcszxnouuU4C2tEcuWbmeLyxhd4KlbAEBtb%2F68P9hyf0%2BKYkijUbLflviPQ836JSvIbdb91jKrekxyTvyT0GkO3UHNec9W3mplusjyhn%2BoMYiqN5x8TXiVfDBZ710OWELkN8k5sirmhdbSTBIMzkfCnDXSX5AoszRQ3RIF0Kxh7CAJrKHPQWfLft&X-Amz-Signature=2fd3dea1fe66d9abc17577752017d98ff29130f087361ddde91da0b2dbdad967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC7ZBBA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC29aBvPz6y%2FjhwwuSO66cV2UtKfh3fd%2FX6WMRRg8blQIgZUsmP8eq9XzmbQZGr5Wn2v8ihI4GdRG1clcT%2Bdd4R6UqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4iglnb894zJYhPYCrcA%2FvY%2FfzeShcG74Tuy09r0%2BlcRgzI8Clppm46oLV3Fhh7udo%2FAt3VX89%2FvEW9rLPL0LJRij6ddunsIsej31KvEoLS0qRqiG6ynbMBABsrPK2V1gUU5SETZk1cQ%2BicGUmB6kkjSeHKCFdd8WDxvNUvj8rW9bt1WMUHoqL4UuhblWvIL8be9FH%2FNIqzWdmA0Q3iEIwK%2FloYXB7t5cyUjIu28vGtsEgezYyN%2BWeuCuppQs9hM6OKU8EkUtg9p1KIhRuGRkpQRLlSBuWJwVLhAV4NheAWuxx4LEWNRs2g%2BCK1%2BOyISplHqnaOnY0LM5UD9KBeFC2Y%2B24k3yL45KKAyP1j%2FhFDMA0utkKBXiRe%2Bxao0ADC6VCptU9FDs5ig7ewSollWyfpO4N3IgvsZ7OBnqfuQ8QyqcUjj9D3aBGzx%2F296TfXPM0dIxPBBqcBrlQdT4W5K6diqY%2BLkJNo0ZKEzfIxdo967xluHTV76m9XPxZ%2FX1UPTea0fD%2FEIDdOg2GPNWsr8Rly6m3bSdRiflhqPv6zf8%2FMToLibBMd0rNOua80RKHefuKp7070nwvSMGopyEhy5Hc9wzApo7QuD7pSGxRZOAcykFKj%2FJBRZhHnNA0fYkFqZgM92Cs2XSzNwX7IMKb5x8MGOqUBBMnv6apP7o53jzGoS7u5UztWFU8OuapOggRuPcszxnouuU4C2tEcuWbmeLyxhd4KlbAEBtb%2F68P9hyf0%2BKYkijUbLflviPQ836JSvIbdb91jKrekxyTvyT0GkO3UHNec9W3mplusjyhn%2BoMYiqN5x8TXiVfDBZ710OWELkN8k5sirmhdbSTBIMzkfCnDXSX5AoszRQ3RIF0Kxh7CAJrKHPQWfLft&X-Amz-Signature=f97cda8123e0fe1f7221a54ff5046f691a887d2751b03f0564ed3e7636ec6564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC7ZBBA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC29aBvPz6y%2FjhwwuSO66cV2UtKfh3fd%2FX6WMRRg8blQIgZUsmP8eq9XzmbQZGr5Wn2v8ihI4GdRG1clcT%2Bdd4R6UqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4iglnb894zJYhPYCrcA%2FvY%2FfzeShcG74Tuy09r0%2BlcRgzI8Clppm46oLV3Fhh7udo%2FAt3VX89%2FvEW9rLPL0LJRij6ddunsIsej31KvEoLS0qRqiG6ynbMBABsrPK2V1gUU5SETZk1cQ%2BicGUmB6kkjSeHKCFdd8WDxvNUvj8rW9bt1WMUHoqL4UuhblWvIL8be9FH%2FNIqzWdmA0Q3iEIwK%2FloYXB7t5cyUjIu28vGtsEgezYyN%2BWeuCuppQs9hM6OKU8EkUtg9p1KIhRuGRkpQRLlSBuWJwVLhAV4NheAWuxx4LEWNRs2g%2BCK1%2BOyISplHqnaOnY0LM5UD9KBeFC2Y%2B24k3yL45KKAyP1j%2FhFDMA0utkKBXiRe%2Bxao0ADC6VCptU9FDs5ig7ewSollWyfpO4N3IgvsZ7OBnqfuQ8QyqcUjj9D3aBGzx%2F296TfXPM0dIxPBBqcBrlQdT4W5K6diqY%2BLkJNo0ZKEzfIxdo967xluHTV76m9XPxZ%2FX1UPTea0fD%2FEIDdOg2GPNWsr8Rly6m3bSdRiflhqPv6zf8%2FMToLibBMd0rNOua80RKHefuKp7070nwvSMGopyEhy5Hc9wzApo7QuD7pSGxRZOAcykFKj%2FJBRZhHnNA0fYkFqZgM92Cs2XSzNwX7IMKb5x8MGOqUBBMnv6apP7o53jzGoS7u5UztWFU8OuapOggRuPcszxnouuU4C2tEcuWbmeLyxhd4KlbAEBtb%2F68P9hyf0%2BKYkijUbLflviPQ836JSvIbdb91jKrekxyTvyT0GkO3UHNec9W3mplusjyhn%2BoMYiqN5x8TXiVfDBZ710OWELkN8k5sirmhdbSTBIMzkfCnDXSX5AoszRQ3RIF0Kxh7CAJrKHPQWfLft&X-Amz-Signature=654ae583d90415fe38c1011f8a220df05cb9f08ee4899202ab33ea83dd942f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC7ZBBA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC29aBvPz6y%2FjhwwuSO66cV2UtKfh3fd%2FX6WMRRg8blQIgZUsmP8eq9XzmbQZGr5Wn2v8ihI4GdRG1clcT%2Bdd4R6UqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4iglnb894zJYhPYCrcA%2FvY%2FfzeShcG74Tuy09r0%2BlcRgzI8Clppm46oLV3Fhh7udo%2FAt3VX89%2FvEW9rLPL0LJRij6ddunsIsej31KvEoLS0qRqiG6ynbMBABsrPK2V1gUU5SETZk1cQ%2BicGUmB6kkjSeHKCFdd8WDxvNUvj8rW9bt1WMUHoqL4UuhblWvIL8be9FH%2FNIqzWdmA0Q3iEIwK%2FloYXB7t5cyUjIu28vGtsEgezYyN%2BWeuCuppQs9hM6OKU8EkUtg9p1KIhRuGRkpQRLlSBuWJwVLhAV4NheAWuxx4LEWNRs2g%2BCK1%2BOyISplHqnaOnY0LM5UD9KBeFC2Y%2B24k3yL45KKAyP1j%2FhFDMA0utkKBXiRe%2Bxao0ADC6VCptU9FDs5ig7ewSollWyfpO4N3IgvsZ7OBnqfuQ8QyqcUjj9D3aBGzx%2F296TfXPM0dIxPBBqcBrlQdT4W5K6diqY%2BLkJNo0ZKEzfIxdo967xluHTV76m9XPxZ%2FX1UPTea0fD%2FEIDdOg2GPNWsr8Rly6m3bSdRiflhqPv6zf8%2FMToLibBMd0rNOua80RKHefuKp7070nwvSMGopyEhy5Hc9wzApo7QuD7pSGxRZOAcykFKj%2FJBRZhHnNA0fYkFqZgM92Cs2XSzNwX7IMKb5x8MGOqUBBMnv6apP7o53jzGoS7u5UztWFU8OuapOggRuPcszxnouuU4C2tEcuWbmeLyxhd4KlbAEBtb%2F68P9hyf0%2BKYkijUbLflviPQ836JSvIbdb91jKrekxyTvyT0GkO3UHNec9W3mplusjyhn%2BoMYiqN5x8TXiVfDBZ710OWELkN8k5sirmhdbSTBIMzkfCnDXSX5AoszRQ3RIF0Kxh7CAJrKHPQWfLft&X-Amz-Signature=2c5766aa9ad50e6194bd920699189362695a8d3aa1c3f31525839e9a7532fe93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
