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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRYDHQB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCqfeFNKJRCNK3zgF79%2BfsbBMWaoOWD4TMuGWZhphRZQIgFHo7CzmRUYRtnLyvvPOcVd02GjYOVgpi8ruyj5f9nk8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbAH3kqh70LGgm1SrcAygxX8tq%2BUG4SVcB9PuQBOQ1YebtiF%2B4pAyhhT4daYp3gF61gP8p7aFlYprF5V8zkapRnI8ZmUCxukl9CaFOfnQAKVEaaa755yOGaFWcwHXG1Paw9%2FjXYbPsBrA2KB949jhmA5wpyNIIoY3m1wEto%2BPdd3WQJrhX%2BdYo1EgtIGGAi5CVmZVpgOYJum5wl4ftULaXqa52iZ1vzQXm5P%2F0YAhrQIBSUVLyoLmCVFpoL5LPKXyCX30w5ih%2F0NJZLz81PUwtHK1RWWsESSWiU%2BBRFDLJ6yB6n36FfSllpqniTp8raxWm%2BU9tBu5einlg%2FieSi2%2F93MjEB545LkMsYyVLhhgPmSkL6Ls9SP06aK3TmgMD8B6gJrP3h9wzdpkebzGq2cGBWK%2FxU9Pt1Jlb9wdei2pyQyzNMCE3vDdbQtdDIShRvdr5NKlesvrayWXEcrBFMZRSDG37IFkHlC1ZLe7JQB5jhU%2Fzn4qRYvYYZj36NJp2X8l07MnYPG16te8k8ZRIIUOf6oDRTts5KQdszFikorB9EGt1NOm2t0zBPhuL5IQksgq7cvyjfGT32xxEEnDAzMRWhgdMLaSdsWYmMOSRYpeTCQ4V9c3mHIYCbYR9vB6KHlrN%2FW5DJG3TPkB3MMS%2F0b4GOqUBOk5u9t%2B9tGi5qKkYtiOI2xNkNfP%2FMPhyuY5W1iBHYFvSU6zdl1iD1qPEp17GxV%2BxSEvDLgDiIKPPgSVdpf1N3C7V0oMCzvEqBz59GrzM%2FwL6S06eJwM%2FgCS%2Bb%2BVPlZ5p4AnrXNZEAnQe3UB81tuAOLU8taO21M7%2BL90rp%2BMgQPCS0eycBuJNMHg4J2ZEtfm7i6vvA45fZQzdG%2B2Fdy3ErDw3Df0m&X-Amz-Signature=75541d0f3532e5b1cbb3e819aeeca03603e8225cfe065bb0e6bc2fbced233826&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRYDHQB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCqfeFNKJRCNK3zgF79%2BfsbBMWaoOWD4TMuGWZhphRZQIgFHo7CzmRUYRtnLyvvPOcVd02GjYOVgpi8ruyj5f9nk8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbAH3kqh70LGgm1SrcAygxX8tq%2BUG4SVcB9PuQBOQ1YebtiF%2B4pAyhhT4daYp3gF61gP8p7aFlYprF5V8zkapRnI8ZmUCxukl9CaFOfnQAKVEaaa755yOGaFWcwHXG1Paw9%2FjXYbPsBrA2KB949jhmA5wpyNIIoY3m1wEto%2BPdd3WQJrhX%2BdYo1EgtIGGAi5CVmZVpgOYJum5wl4ftULaXqa52iZ1vzQXm5P%2F0YAhrQIBSUVLyoLmCVFpoL5LPKXyCX30w5ih%2F0NJZLz81PUwtHK1RWWsESSWiU%2BBRFDLJ6yB6n36FfSllpqniTp8raxWm%2BU9tBu5einlg%2FieSi2%2F93MjEB545LkMsYyVLhhgPmSkL6Ls9SP06aK3TmgMD8B6gJrP3h9wzdpkebzGq2cGBWK%2FxU9Pt1Jlb9wdei2pyQyzNMCE3vDdbQtdDIShRvdr5NKlesvrayWXEcrBFMZRSDG37IFkHlC1ZLe7JQB5jhU%2Fzn4qRYvYYZj36NJp2X8l07MnYPG16te8k8ZRIIUOf6oDRTts5KQdszFikorB9EGt1NOm2t0zBPhuL5IQksgq7cvyjfGT32xxEEnDAzMRWhgdMLaSdsWYmMOSRYpeTCQ4V9c3mHIYCbYR9vB6KHlrN%2FW5DJG3TPkB3MMS%2F0b4GOqUBOk5u9t%2B9tGi5qKkYtiOI2xNkNfP%2FMPhyuY5W1iBHYFvSU6zdl1iD1qPEp17GxV%2BxSEvDLgDiIKPPgSVdpf1N3C7V0oMCzvEqBz59GrzM%2FwL6S06eJwM%2FgCS%2Bb%2BVPlZ5p4AnrXNZEAnQe3UB81tuAOLU8taO21M7%2BL90rp%2BMgQPCS0eycBuJNMHg4J2ZEtfm7i6vvA45fZQzdG%2B2Fdy3ErDw3Df0m&X-Amz-Signature=1632ea784996c3331179b435b5158f870e00480509bc738f55acd0cdf7da5dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRYDHQB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCqfeFNKJRCNK3zgF79%2BfsbBMWaoOWD4TMuGWZhphRZQIgFHo7CzmRUYRtnLyvvPOcVd02GjYOVgpi8ruyj5f9nk8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbAH3kqh70LGgm1SrcAygxX8tq%2BUG4SVcB9PuQBOQ1YebtiF%2B4pAyhhT4daYp3gF61gP8p7aFlYprF5V8zkapRnI8ZmUCxukl9CaFOfnQAKVEaaa755yOGaFWcwHXG1Paw9%2FjXYbPsBrA2KB949jhmA5wpyNIIoY3m1wEto%2BPdd3WQJrhX%2BdYo1EgtIGGAi5CVmZVpgOYJum5wl4ftULaXqa52iZ1vzQXm5P%2F0YAhrQIBSUVLyoLmCVFpoL5LPKXyCX30w5ih%2F0NJZLz81PUwtHK1RWWsESSWiU%2BBRFDLJ6yB6n36FfSllpqniTp8raxWm%2BU9tBu5einlg%2FieSi2%2F93MjEB545LkMsYyVLhhgPmSkL6Ls9SP06aK3TmgMD8B6gJrP3h9wzdpkebzGq2cGBWK%2FxU9Pt1Jlb9wdei2pyQyzNMCE3vDdbQtdDIShRvdr5NKlesvrayWXEcrBFMZRSDG37IFkHlC1ZLe7JQB5jhU%2Fzn4qRYvYYZj36NJp2X8l07MnYPG16te8k8ZRIIUOf6oDRTts5KQdszFikorB9EGt1NOm2t0zBPhuL5IQksgq7cvyjfGT32xxEEnDAzMRWhgdMLaSdsWYmMOSRYpeTCQ4V9c3mHIYCbYR9vB6KHlrN%2FW5DJG3TPkB3MMS%2F0b4GOqUBOk5u9t%2B9tGi5qKkYtiOI2xNkNfP%2FMPhyuY5W1iBHYFvSU6zdl1iD1qPEp17GxV%2BxSEvDLgDiIKPPgSVdpf1N3C7V0oMCzvEqBz59GrzM%2FwL6S06eJwM%2FgCS%2Bb%2BVPlZ5p4AnrXNZEAnQe3UB81tuAOLU8taO21M7%2BL90rp%2BMgQPCS0eycBuJNMHg4J2ZEtfm7i6vvA45fZQzdG%2B2Fdy3ErDw3Df0m&X-Amz-Signature=261c2baeb778c3974059c49f349b6f972a6b9921926fde5ae11674fafed89690&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRYDHQB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCqfeFNKJRCNK3zgF79%2BfsbBMWaoOWD4TMuGWZhphRZQIgFHo7CzmRUYRtnLyvvPOcVd02GjYOVgpi8ruyj5f9nk8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbAH3kqh70LGgm1SrcAygxX8tq%2BUG4SVcB9PuQBOQ1YebtiF%2B4pAyhhT4daYp3gF61gP8p7aFlYprF5V8zkapRnI8ZmUCxukl9CaFOfnQAKVEaaa755yOGaFWcwHXG1Paw9%2FjXYbPsBrA2KB949jhmA5wpyNIIoY3m1wEto%2BPdd3WQJrhX%2BdYo1EgtIGGAi5CVmZVpgOYJum5wl4ftULaXqa52iZ1vzQXm5P%2F0YAhrQIBSUVLyoLmCVFpoL5LPKXyCX30w5ih%2F0NJZLz81PUwtHK1RWWsESSWiU%2BBRFDLJ6yB6n36FfSllpqniTp8raxWm%2BU9tBu5einlg%2FieSi2%2F93MjEB545LkMsYyVLhhgPmSkL6Ls9SP06aK3TmgMD8B6gJrP3h9wzdpkebzGq2cGBWK%2FxU9Pt1Jlb9wdei2pyQyzNMCE3vDdbQtdDIShRvdr5NKlesvrayWXEcrBFMZRSDG37IFkHlC1ZLe7JQB5jhU%2Fzn4qRYvYYZj36NJp2X8l07MnYPG16te8k8ZRIIUOf6oDRTts5KQdszFikorB9EGt1NOm2t0zBPhuL5IQksgq7cvyjfGT32xxEEnDAzMRWhgdMLaSdsWYmMOSRYpeTCQ4V9c3mHIYCbYR9vB6KHlrN%2FW5DJG3TPkB3MMS%2F0b4GOqUBOk5u9t%2B9tGi5qKkYtiOI2xNkNfP%2FMPhyuY5W1iBHYFvSU6zdl1iD1qPEp17GxV%2BxSEvDLgDiIKPPgSVdpf1N3C7V0oMCzvEqBz59GrzM%2FwL6S06eJwM%2FgCS%2Bb%2BVPlZ5p4AnrXNZEAnQe3UB81tuAOLU8taO21M7%2BL90rp%2BMgQPCS0eycBuJNMHg4J2ZEtfm7i6vvA45fZQzdG%2B2Fdy3ErDw3Df0m&X-Amz-Signature=36bf5770f05b1a4629330db90e58837b9ef1ebd3b94836b48ffbe4989da43a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRYDHQB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCqfeFNKJRCNK3zgF79%2BfsbBMWaoOWD4TMuGWZhphRZQIgFHo7CzmRUYRtnLyvvPOcVd02GjYOVgpi8ruyj5f9nk8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbAH3kqh70LGgm1SrcAygxX8tq%2BUG4SVcB9PuQBOQ1YebtiF%2B4pAyhhT4daYp3gF61gP8p7aFlYprF5V8zkapRnI8ZmUCxukl9CaFOfnQAKVEaaa755yOGaFWcwHXG1Paw9%2FjXYbPsBrA2KB949jhmA5wpyNIIoY3m1wEto%2BPdd3WQJrhX%2BdYo1EgtIGGAi5CVmZVpgOYJum5wl4ftULaXqa52iZ1vzQXm5P%2F0YAhrQIBSUVLyoLmCVFpoL5LPKXyCX30w5ih%2F0NJZLz81PUwtHK1RWWsESSWiU%2BBRFDLJ6yB6n36FfSllpqniTp8raxWm%2BU9tBu5einlg%2FieSi2%2F93MjEB545LkMsYyVLhhgPmSkL6Ls9SP06aK3TmgMD8B6gJrP3h9wzdpkebzGq2cGBWK%2FxU9Pt1Jlb9wdei2pyQyzNMCE3vDdbQtdDIShRvdr5NKlesvrayWXEcrBFMZRSDG37IFkHlC1ZLe7JQB5jhU%2Fzn4qRYvYYZj36NJp2X8l07MnYPG16te8k8ZRIIUOf6oDRTts5KQdszFikorB9EGt1NOm2t0zBPhuL5IQksgq7cvyjfGT32xxEEnDAzMRWhgdMLaSdsWYmMOSRYpeTCQ4V9c3mHIYCbYR9vB6KHlrN%2FW5DJG3TPkB3MMS%2F0b4GOqUBOk5u9t%2B9tGi5qKkYtiOI2xNkNfP%2FMPhyuY5W1iBHYFvSU6zdl1iD1qPEp17GxV%2BxSEvDLgDiIKPPgSVdpf1N3C7V0oMCzvEqBz59GrzM%2FwL6S06eJwM%2FgCS%2Bb%2BVPlZ5p4AnrXNZEAnQe3UB81tuAOLU8taO21M7%2BL90rp%2BMgQPCS0eycBuJNMHg4J2ZEtfm7i6vvA45fZQzdG%2B2Fdy3ErDw3Df0m&X-Amz-Signature=69980dca1e991e27e654760da513447491082a33dedca93be01b94f54fac69aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRYDHQB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCqfeFNKJRCNK3zgF79%2BfsbBMWaoOWD4TMuGWZhphRZQIgFHo7CzmRUYRtnLyvvPOcVd02GjYOVgpi8ruyj5f9nk8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbAH3kqh70LGgm1SrcAygxX8tq%2BUG4SVcB9PuQBOQ1YebtiF%2B4pAyhhT4daYp3gF61gP8p7aFlYprF5V8zkapRnI8ZmUCxukl9CaFOfnQAKVEaaa755yOGaFWcwHXG1Paw9%2FjXYbPsBrA2KB949jhmA5wpyNIIoY3m1wEto%2BPdd3WQJrhX%2BdYo1EgtIGGAi5CVmZVpgOYJum5wl4ftULaXqa52iZ1vzQXm5P%2F0YAhrQIBSUVLyoLmCVFpoL5LPKXyCX30w5ih%2F0NJZLz81PUwtHK1RWWsESSWiU%2BBRFDLJ6yB6n36FfSllpqniTp8raxWm%2BU9tBu5einlg%2FieSi2%2F93MjEB545LkMsYyVLhhgPmSkL6Ls9SP06aK3TmgMD8B6gJrP3h9wzdpkebzGq2cGBWK%2FxU9Pt1Jlb9wdei2pyQyzNMCE3vDdbQtdDIShRvdr5NKlesvrayWXEcrBFMZRSDG37IFkHlC1ZLe7JQB5jhU%2Fzn4qRYvYYZj36NJp2X8l07MnYPG16te8k8ZRIIUOf6oDRTts5KQdszFikorB9EGt1NOm2t0zBPhuL5IQksgq7cvyjfGT32xxEEnDAzMRWhgdMLaSdsWYmMOSRYpeTCQ4V9c3mHIYCbYR9vB6KHlrN%2FW5DJG3TPkB3MMS%2F0b4GOqUBOk5u9t%2B9tGi5qKkYtiOI2xNkNfP%2FMPhyuY5W1iBHYFvSU6zdl1iD1qPEp17GxV%2BxSEvDLgDiIKPPgSVdpf1N3C7V0oMCzvEqBz59GrzM%2FwL6S06eJwM%2FgCS%2Bb%2BVPlZ5p4AnrXNZEAnQe3UB81tuAOLU8taO21M7%2BL90rp%2BMgQPCS0eycBuJNMHg4J2ZEtfm7i6vvA45fZQzdG%2B2Fdy3ErDw3Df0m&X-Amz-Signature=36e09e7023e0316e14d4f7831687657a37e03f25b5b202e0a151a226e0c7b2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRYDHQB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCqfeFNKJRCNK3zgF79%2BfsbBMWaoOWD4TMuGWZhphRZQIgFHo7CzmRUYRtnLyvvPOcVd02GjYOVgpi8ruyj5f9nk8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbAH3kqh70LGgm1SrcAygxX8tq%2BUG4SVcB9PuQBOQ1YebtiF%2B4pAyhhT4daYp3gF61gP8p7aFlYprF5V8zkapRnI8ZmUCxukl9CaFOfnQAKVEaaa755yOGaFWcwHXG1Paw9%2FjXYbPsBrA2KB949jhmA5wpyNIIoY3m1wEto%2BPdd3WQJrhX%2BdYo1EgtIGGAi5CVmZVpgOYJum5wl4ftULaXqa52iZ1vzQXm5P%2F0YAhrQIBSUVLyoLmCVFpoL5LPKXyCX30w5ih%2F0NJZLz81PUwtHK1RWWsESSWiU%2BBRFDLJ6yB6n36FfSllpqniTp8raxWm%2BU9tBu5einlg%2FieSi2%2F93MjEB545LkMsYyVLhhgPmSkL6Ls9SP06aK3TmgMD8B6gJrP3h9wzdpkebzGq2cGBWK%2FxU9Pt1Jlb9wdei2pyQyzNMCE3vDdbQtdDIShRvdr5NKlesvrayWXEcrBFMZRSDG37IFkHlC1ZLe7JQB5jhU%2Fzn4qRYvYYZj36NJp2X8l07MnYPG16te8k8ZRIIUOf6oDRTts5KQdszFikorB9EGt1NOm2t0zBPhuL5IQksgq7cvyjfGT32xxEEnDAzMRWhgdMLaSdsWYmMOSRYpeTCQ4V9c3mHIYCbYR9vB6KHlrN%2FW5DJG3TPkB3MMS%2F0b4GOqUBOk5u9t%2B9tGi5qKkYtiOI2xNkNfP%2FMPhyuY5W1iBHYFvSU6zdl1iD1qPEp17GxV%2BxSEvDLgDiIKPPgSVdpf1N3C7V0oMCzvEqBz59GrzM%2FwL6S06eJwM%2FgCS%2Bb%2BVPlZ5p4AnrXNZEAnQe3UB81tuAOLU8taO21M7%2BL90rp%2BMgQPCS0eycBuJNMHg4J2ZEtfm7i6vvA45fZQzdG%2B2Fdy3ErDw3Df0m&X-Amz-Signature=a05dc3a46be03a738812aae58cee35319a0fb89be4d437e6f1d0d865f608d7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRYDHQB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCqfeFNKJRCNK3zgF79%2BfsbBMWaoOWD4TMuGWZhphRZQIgFHo7CzmRUYRtnLyvvPOcVd02GjYOVgpi8ruyj5f9nk8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbAH3kqh70LGgm1SrcAygxX8tq%2BUG4SVcB9PuQBOQ1YebtiF%2B4pAyhhT4daYp3gF61gP8p7aFlYprF5V8zkapRnI8ZmUCxukl9CaFOfnQAKVEaaa755yOGaFWcwHXG1Paw9%2FjXYbPsBrA2KB949jhmA5wpyNIIoY3m1wEto%2BPdd3WQJrhX%2BdYo1EgtIGGAi5CVmZVpgOYJum5wl4ftULaXqa52iZ1vzQXm5P%2F0YAhrQIBSUVLyoLmCVFpoL5LPKXyCX30w5ih%2F0NJZLz81PUwtHK1RWWsESSWiU%2BBRFDLJ6yB6n36FfSllpqniTp8raxWm%2BU9tBu5einlg%2FieSi2%2F93MjEB545LkMsYyVLhhgPmSkL6Ls9SP06aK3TmgMD8B6gJrP3h9wzdpkebzGq2cGBWK%2FxU9Pt1Jlb9wdei2pyQyzNMCE3vDdbQtdDIShRvdr5NKlesvrayWXEcrBFMZRSDG37IFkHlC1ZLe7JQB5jhU%2Fzn4qRYvYYZj36NJp2X8l07MnYPG16te8k8ZRIIUOf6oDRTts5KQdszFikorB9EGt1NOm2t0zBPhuL5IQksgq7cvyjfGT32xxEEnDAzMRWhgdMLaSdsWYmMOSRYpeTCQ4V9c3mHIYCbYR9vB6KHlrN%2FW5DJG3TPkB3MMS%2F0b4GOqUBOk5u9t%2B9tGi5qKkYtiOI2xNkNfP%2FMPhyuY5W1iBHYFvSU6zdl1iD1qPEp17GxV%2BxSEvDLgDiIKPPgSVdpf1N3C7V0oMCzvEqBz59GrzM%2FwL6S06eJwM%2FgCS%2Bb%2BVPlZ5p4AnrXNZEAnQe3UB81tuAOLU8taO21M7%2BL90rp%2BMgQPCS0eycBuJNMHg4J2ZEtfm7i6vvA45fZQzdG%2B2Fdy3ErDw3Df0m&X-Amz-Signature=16c8b60a3a41bb27a0c674a6bac18e6f765a3b681566813684e02ebc08766bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
