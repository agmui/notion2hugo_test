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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TTLGPU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPakQCI2UTRBaxdB8Tl7895%2FI8o7ChX%2FiKeS%2FyXB16AAiBS7XRZ3u9bwKvmGG5OQ5o9VCPfM7tnMe%2FVivpsaV3Hpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRUPk9w2x4B017Sa8KtwDsbSM3PGwdoWChYBFLnuVPNnEVyvnHrqxd5s%2FOrncE1WB%2FFpWr8G4Qvt6%2B7Dz1dr1N1S6yE%2B2FOk2PMmJdYzQeMG87CEMwy0X820Cq3h9OpC%2BijJBu6LN2RncO6Ne7ScGv7vDdorU5ziiq8c6CsA4i53o9VuN6fmM0ZPqg%2F9w%2FMT8K3aOjYPR0DEMBGI30dbR%2BvU40ELyI2d3WMqVEiKSvYs53CBwpxQDq3%2FYABusdi%2BCGZi5WmnQzL%2BengMZZ1GTaAStOd9qQy5s6wJbICIP2ICvxSAY9T3IeGfc%2By4gOIf5xG6BOdX0oi%2FqLMmcotUPJ38jXkoBkMAUuMRCKw8q5mw3edy%2B%2F%2FrbyiqKdc4HzdqRIYdA2eKxhM%2Fq%2FzVzksG%2B77QQfXhHizg1uevyW4YDFSpFmsOLyVgRzgMOxRsNz%2FSyTaCzrlU8ZICIg7eQI5Hz%2BreYPRfagFkmidYuiKCGlD45IcvDqf4meslxMQraoVHtPMw5CNDyZHv5LYd%2FRL3N10RDY%2By0SrMEVMMYHFIGntCKa05n24TwEMmHQX8WYbIApYFP4%2Bt%2Bb2Jsrbv0ARFZt3qxttTo9jUA%2FydR29n3EB7rNFqnBabAekLhU4zbR45XeOyiDmzdUBqFrVgwuK2OvwY6pgFkKif9zuw1pM1kTO%2FgKp%2FPkWfMG%2BPNgloLSvuDU%2FrM0NcuBUvJzPPAC8Zm3FkdIezqOeGRTglAsAy%2Ba1cCioQ3Ne8yQAyPWRfeafuPmd9oIF8iDpnTI225I6%2Fj3M5VLihlpBF2nAtamPZUFIJonCWjrhpxUziH1bnXON6nb9Cdmf7bd4ASLbTV1GIt%2FMtQkFNzVMlIRC0jAVXe%2BCYFWVE3wt7T0T%2Bj&X-Amz-Signature=9d0cc0d7683a1e98c0c6d7d80363241e607d3391df7fb0c846245f6bdc7a8264&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TTLGPU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPakQCI2UTRBaxdB8Tl7895%2FI8o7ChX%2FiKeS%2FyXB16AAiBS7XRZ3u9bwKvmGG5OQ5o9VCPfM7tnMe%2FVivpsaV3Hpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRUPk9w2x4B017Sa8KtwDsbSM3PGwdoWChYBFLnuVPNnEVyvnHrqxd5s%2FOrncE1WB%2FFpWr8G4Qvt6%2B7Dz1dr1N1S6yE%2B2FOk2PMmJdYzQeMG87CEMwy0X820Cq3h9OpC%2BijJBu6LN2RncO6Ne7ScGv7vDdorU5ziiq8c6CsA4i53o9VuN6fmM0ZPqg%2F9w%2FMT8K3aOjYPR0DEMBGI30dbR%2BvU40ELyI2d3WMqVEiKSvYs53CBwpxQDq3%2FYABusdi%2BCGZi5WmnQzL%2BengMZZ1GTaAStOd9qQy5s6wJbICIP2ICvxSAY9T3IeGfc%2By4gOIf5xG6BOdX0oi%2FqLMmcotUPJ38jXkoBkMAUuMRCKw8q5mw3edy%2B%2F%2FrbyiqKdc4HzdqRIYdA2eKxhM%2Fq%2FzVzksG%2B77QQfXhHizg1uevyW4YDFSpFmsOLyVgRzgMOxRsNz%2FSyTaCzrlU8ZICIg7eQI5Hz%2BreYPRfagFkmidYuiKCGlD45IcvDqf4meslxMQraoVHtPMw5CNDyZHv5LYd%2FRL3N10RDY%2By0SrMEVMMYHFIGntCKa05n24TwEMmHQX8WYbIApYFP4%2Bt%2Bb2Jsrbv0ARFZt3qxttTo9jUA%2FydR29n3EB7rNFqnBabAekLhU4zbR45XeOyiDmzdUBqFrVgwuK2OvwY6pgFkKif9zuw1pM1kTO%2FgKp%2FPkWfMG%2BPNgloLSvuDU%2FrM0NcuBUvJzPPAC8Zm3FkdIezqOeGRTglAsAy%2Ba1cCioQ3Ne8yQAyPWRfeafuPmd9oIF8iDpnTI225I6%2Fj3M5VLihlpBF2nAtamPZUFIJonCWjrhpxUziH1bnXON6nb9Cdmf7bd4ASLbTV1GIt%2FMtQkFNzVMlIRC0jAVXe%2BCYFWVE3wt7T0T%2Bj&X-Amz-Signature=f46a61b4c0db2206503f746ba963ef434686802fda08c8dc1771d784fd07c13c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TTLGPU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPakQCI2UTRBaxdB8Tl7895%2FI8o7ChX%2FiKeS%2FyXB16AAiBS7XRZ3u9bwKvmGG5OQ5o9VCPfM7tnMe%2FVivpsaV3Hpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRUPk9w2x4B017Sa8KtwDsbSM3PGwdoWChYBFLnuVPNnEVyvnHrqxd5s%2FOrncE1WB%2FFpWr8G4Qvt6%2B7Dz1dr1N1S6yE%2B2FOk2PMmJdYzQeMG87CEMwy0X820Cq3h9OpC%2BijJBu6LN2RncO6Ne7ScGv7vDdorU5ziiq8c6CsA4i53o9VuN6fmM0ZPqg%2F9w%2FMT8K3aOjYPR0DEMBGI30dbR%2BvU40ELyI2d3WMqVEiKSvYs53CBwpxQDq3%2FYABusdi%2BCGZi5WmnQzL%2BengMZZ1GTaAStOd9qQy5s6wJbICIP2ICvxSAY9T3IeGfc%2By4gOIf5xG6BOdX0oi%2FqLMmcotUPJ38jXkoBkMAUuMRCKw8q5mw3edy%2B%2F%2FrbyiqKdc4HzdqRIYdA2eKxhM%2Fq%2FzVzksG%2B77QQfXhHizg1uevyW4YDFSpFmsOLyVgRzgMOxRsNz%2FSyTaCzrlU8ZICIg7eQI5Hz%2BreYPRfagFkmidYuiKCGlD45IcvDqf4meslxMQraoVHtPMw5CNDyZHv5LYd%2FRL3N10RDY%2By0SrMEVMMYHFIGntCKa05n24TwEMmHQX8WYbIApYFP4%2Bt%2Bb2Jsrbv0ARFZt3qxttTo9jUA%2FydR29n3EB7rNFqnBabAekLhU4zbR45XeOyiDmzdUBqFrVgwuK2OvwY6pgFkKif9zuw1pM1kTO%2FgKp%2FPkWfMG%2BPNgloLSvuDU%2FrM0NcuBUvJzPPAC8Zm3FkdIezqOeGRTglAsAy%2Ba1cCioQ3Ne8yQAyPWRfeafuPmd9oIF8iDpnTI225I6%2Fj3M5VLihlpBF2nAtamPZUFIJonCWjrhpxUziH1bnXON6nb9Cdmf7bd4ASLbTV1GIt%2FMtQkFNzVMlIRC0jAVXe%2BCYFWVE3wt7T0T%2Bj&X-Amz-Signature=ff353b1041a33a6d184a68dc5fd63dae68ef404e1164edb1d190f2020c06e42d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TTLGPU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPakQCI2UTRBaxdB8Tl7895%2FI8o7ChX%2FiKeS%2FyXB16AAiBS7XRZ3u9bwKvmGG5OQ5o9VCPfM7tnMe%2FVivpsaV3Hpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRUPk9w2x4B017Sa8KtwDsbSM3PGwdoWChYBFLnuVPNnEVyvnHrqxd5s%2FOrncE1WB%2FFpWr8G4Qvt6%2B7Dz1dr1N1S6yE%2B2FOk2PMmJdYzQeMG87CEMwy0X820Cq3h9OpC%2BijJBu6LN2RncO6Ne7ScGv7vDdorU5ziiq8c6CsA4i53o9VuN6fmM0ZPqg%2F9w%2FMT8K3aOjYPR0DEMBGI30dbR%2BvU40ELyI2d3WMqVEiKSvYs53CBwpxQDq3%2FYABusdi%2BCGZi5WmnQzL%2BengMZZ1GTaAStOd9qQy5s6wJbICIP2ICvxSAY9T3IeGfc%2By4gOIf5xG6BOdX0oi%2FqLMmcotUPJ38jXkoBkMAUuMRCKw8q5mw3edy%2B%2F%2FrbyiqKdc4HzdqRIYdA2eKxhM%2Fq%2FzVzksG%2B77QQfXhHizg1uevyW4YDFSpFmsOLyVgRzgMOxRsNz%2FSyTaCzrlU8ZICIg7eQI5Hz%2BreYPRfagFkmidYuiKCGlD45IcvDqf4meslxMQraoVHtPMw5CNDyZHv5LYd%2FRL3N10RDY%2By0SrMEVMMYHFIGntCKa05n24TwEMmHQX8WYbIApYFP4%2Bt%2Bb2Jsrbv0ARFZt3qxttTo9jUA%2FydR29n3EB7rNFqnBabAekLhU4zbR45XeOyiDmzdUBqFrVgwuK2OvwY6pgFkKif9zuw1pM1kTO%2FgKp%2FPkWfMG%2BPNgloLSvuDU%2FrM0NcuBUvJzPPAC8Zm3FkdIezqOeGRTglAsAy%2Ba1cCioQ3Ne8yQAyPWRfeafuPmd9oIF8iDpnTI225I6%2Fj3M5VLihlpBF2nAtamPZUFIJonCWjrhpxUziH1bnXON6nb9Cdmf7bd4ASLbTV1GIt%2FMtQkFNzVMlIRC0jAVXe%2BCYFWVE3wt7T0T%2Bj&X-Amz-Signature=adce6f54e1b5de779824b2c7e6dad34caa43e27b73d08311b8d998ca4ce695a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TTLGPU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPakQCI2UTRBaxdB8Tl7895%2FI8o7ChX%2FiKeS%2FyXB16AAiBS7XRZ3u9bwKvmGG5OQ5o9VCPfM7tnMe%2FVivpsaV3Hpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRUPk9w2x4B017Sa8KtwDsbSM3PGwdoWChYBFLnuVPNnEVyvnHrqxd5s%2FOrncE1WB%2FFpWr8G4Qvt6%2B7Dz1dr1N1S6yE%2B2FOk2PMmJdYzQeMG87CEMwy0X820Cq3h9OpC%2BijJBu6LN2RncO6Ne7ScGv7vDdorU5ziiq8c6CsA4i53o9VuN6fmM0ZPqg%2F9w%2FMT8K3aOjYPR0DEMBGI30dbR%2BvU40ELyI2d3WMqVEiKSvYs53CBwpxQDq3%2FYABusdi%2BCGZi5WmnQzL%2BengMZZ1GTaAStOd9qQy5s6wJbICIP2ICvxSAY9T3IeGfc%2By4gOIf5xG6BOdX0oi%2FqLMmcotUPJ38jXkoBkMAUuMRCKw8q5mw3edy%2B%2F%2FrbyiqKdc4HzdqRIYdA2eKxhM%2Fq%2FzVzksG%2B77QQfXhHizg1uevyW4YDFSpFmsOLyVgRzgMOxRsNz%2FSyTaCzrlU8ZICIg7eQI5Hz%2BreYPRfagFkmidYuiKCGlD45IcvDqf4meslxMQraoVHtPMw5CNDyZHv5LYd%2FRL3N10RDY%2By0SrMEVMMYHFIGntCKa05n24TwEMmHQX8WYbIApYFP4%2Bt%2Bb2Jsrbv0ARFZt3qxttTo9jUA%2FydR29n3EB7rNFqnBabAekLhU4zbR45XeOyiDmzdUBqFrVgwuK2OvwY6pgFkKif9zuw1pM1kTO%2FgKp%2FPkWfMG%2BPNgloLSvuDU%2FrM0NcuBUvJzPPAC8Zm3FkdIezqOeGRTglAsAy%2Ba1cCioQ3Ne8yQAyPWRfeafuPmd9oIF8iDpnTI225I6%2Fj3M5VLihlpBF2nAtamPZUFIJonCWjrhpxUziH1bnXON6nb9Cdmf7bd4ASLbTV1GIt%2FMtQkFNzVMlIRC0jAVXe%2BCYFWVE3wt7T0T%2Bj&X-Amz-Signature=deae74ef8cd7b5f785d78f9503aeb72045acab9770ee326182f2bbbc75a99274&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TTLGPU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPakQCI2UTRBaxdB8Tl7895%2FI8o7ChX%2FiKeS%2FyXB16AAiBS7XRZ3u9bwKvmGG5OQ5o9VCPfM7tnMe%2FVivpsaV3Hpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRUPk9w2x4B017Sa8KtwDsbSM3PGwdoWChYBFLnuVPNnEVyvnHrqxd5s%2FOrncE1WB%2FFpWr8G4Qvt6%2B7Dz1dr1N1S6yE%2B2FOk2PMmJdYzQeMG87CEMwy0X820Cq3h9OpC%2BijJBu6LN2RncO6Ne7ScGv7vDdorU5ziiq8c6CsA4i53o9VuN6fmM0ZPqg%2F9w%2FMT8K3aOjYPR0DEMBGI30dbR%2BvU40ELyI2d3WMqVEiKSvYs53CBwpxQDq3%2FYABusdi%2BCGZi5WmnQzL%2BengMZZ1GTaAStOd9qQy5s6wJbICIP2ICvxSAY9T3IeGfc%2By4gOIf5xG6BOdX0oi%2FqLMmcotUPJ38jXkoBkMAUuMRCKw8q5mw3edy%2B%2F%2FrbyiqKdc4HzdqRIYdA2eKxhM%2Fq%2FzVzksG%2B77QQfXhHizg1uevyW4YDFSpFmsOLyVgRzgMOxRsNz%2FSyTaCzrlU8ZICIg7eQI5Hz%2BreYPRfagFkmidYuiKCGlD45IcvDqf4meslxMQraoVHtPMw5CNDyZHv5LYd%2FRL3N10RDY%2By0SrMEVMMYHFIGntCKa05n24TwEMmHQX8WYbIApYFP4%2Bt%2Bb2Jsrbv0ARFZt3qxttTo9jUA%2FydR29n3EB7rNFqnBabAekLhU4zbR45XeOyiDmzdUBqFrVgwuK2OvwY6pgFkKif9zuw1pM1kTO%2FgKp%2FPkWfMG%2BPNgloLSvuDU%2FrM0NcuBUvJzPPAC8Zm3FkdIezqOeGRTglAsAy%2Ba1cCioQ3Ne8yQAyPWRfeafuPmd9oIF8iDpnTI225I6%2Fj3M5VLihlpBF2nAtamPZUFIJonCWjrhpxUziH1bnXON6nb9Cdmf7bd4ASLbTV1GIt%2FMtQkFNzVMlIRC0jAVXe%2BCYFWVE3wt7T0T%2Bj&X-Amz-Signature=8010c144895458292984127f738b30962b7dba90916f2ab89347dc3f297b70af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TTLGPU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPakQCI2UTRBaxdB8Tl7895%2FI8o7ChX%2FiKeS%2FyXB16AAiBS7XRZ3u9bwKvmGG5OQ5o9VCPfM7tnMe%2FVivpsaV3Hpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRUPk9w2x4B017Sa8KtwDsbSM3PGwdoWChYBFLnuVPNnEVyvnHrqxd5s%2FOrncE1WB%2FFpWr8G4Qvt6%2B7Dz1dr1N1S6yE%2B2FOk2PMmJdYzQeMG87CEMwy0X820Cq3h9OpC%2BijJBu6LN2RncO6Ne7ScGv7vDdorU5ziiq8c6CsA4i53o9VuN6fmM0ZPqg%2F9w%2FMT8K3aOjYPR0DEMBGI30dbR%2BvU40ELyI2d3WMqVEiKSvYs53CBwpxQDq3%2FYABusdi%2BCGZi5WmnQzL%2BengMZZ1GTaAStOd9qQy5s6wJbICIP2ICvxSAY9T3IeGfc%2By4gOIf5xG6BOdX0oi%2FqLMmcotUPJ38jXkoBkMAUuMRCKw8q5mw3edy%2B%2F%2FrbyiqKdc4HzdqRIYdA2eKxhM%2Fq%2FzVzksG%2B77QQfXhHizg1uevyW4YDFSpFmsOLyVgRzgMOxRsNz%2FSyTaCzrlU8ZICIg7eQI5Hz%2BreYPRfagFkmidYuiKCGlD45IcvDqf4meslxMQraoVHtPMw5CNDyZHv5LYd%2FRL3N10RDY%2By0SrMEVMMYHFIGntCKa05n24TwEMmHQX8WYbIApYFP4%2Bt%2Bb2Jsrbv0ARFZt3qxttTo9jUA%2FydR29n3EB7rNFqnBabAekLhU4zbR45XeOyiDmzdUBqFrVgwuK2OvwY6pgFkKif9zuw1pM1kTO%2FgKp%2FPkWfMG%2BPNgloLSvuDU%2FrM0NcuBUvJzPPAC8Zm3FkdIezqOeGRTglAsAy%2Ba1cCioQ3Ne8yQAyPWRfeafuPmd9oIF8iDpnTI225I6%2Fj3M5VLihlpBF2nAtamPZUFIJonCWjrhpxUziH1bnXON6nb9Cdmf7bd4ASLbTV1GIt%2FMtQkFNzVMlIRC0jAVXe%2BCYFWVE3wt7T0T%2Bj&X-Amz-Signature=9477c36c4392366fb177c54c8ceb7456016d9406f93b0e05493c24a63dbc349d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TTLGPU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPakQCI2UTRBaxdB8Tl7895%2FI8o7ChX%2FiKeS%2FyXB16AAiBS7XRZ3u9bwKvmGG5OQ5o9VCPfM7tnMe%2FVivpsaV3Hpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRUPk9w2x4B017Sa8KtwDsbSM3PGwdoWChYBFLnuVPNnEVyvnHrqxd5s%2FOrncE1WB%2FFpWr8G4Qvt6%2B7Dz1dr1N1S6yE%2B2FOk2PMmJdYzQeMG87CEMwy0X820Cq3h9OpC%2BijJBu6LN2RncO6Ne7ScGv7vDdorU5ziiq8c6CsA4i53o9VuN6fmM0ZPqg%2F9w%2FMT8K3aOjYPR0DEMBGI30dbR%2BvU40ELyI2d3WMqVEiKSvYs53CBwpxQDq3%2FYABusdi%2BCGZi5WmnQzL%2BengMZZ1GTaAStOd9qQy5s6wJbICIP2ICvxSAY9T3IeGfc%2By4gOIf5xG6BOdX0oi%2FqLMmcotUPJ38jXkoBkMAUuMRCKw8q5mw3edy%2B%2F%2FrbyiqKdc4HzdqRIYdA2eKxhM%2Fq%2FzVzksG%2B77QQfXhHizg1uevyW4YDFSpFmsOLyVgRzgMOxRsNz%2FSyTaCzrlU8ZICIg7eQI5Hz%2BreYPRfagFkmidYuiKCGlD45IcvDqf4meslxMQraoVHtPMw5CNDyZHv5LYd%2FRL3N10RDY%2By0SrMEVMMYHFIGntCKa05n24TwEMmHQX8WYbIApYFP4%2Bt%2Bb2Jsrbv0ARFZt3qxttTo9jUA%2FydR29n3EB7rNFqnBabAekLhU4zbR45XeOyiDmzdUBqFrVgwuK2OvwY6pgFkKif9zuw1pM1kTO%2FgKp%2FPkWfMG%2BPNgloLSvuDU%2FrM0NcuBUvJzPPAC8Zm3FkdIezqOeGRTglAsAy%2Ba1cCioQ3Ne8yQAyPWRfeafuPmd9oIF8iDpnTI225I6%2Fj3M5VLihlpBF2nAtamPZUFIJonCWjrhpxUziH1bnXON6nb9Cdmf7bd4ASLbTV1GIt%2FMtQkFNzVMlIRC0jAVXe%2BCYFWVE3wt7T0T%2Bj&X-Amz-Signature=a275cad5c040dd81cbb7118d60a9eb53e5435e4f074ac0a66e97aa1de725e92f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
