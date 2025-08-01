---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIH6FNE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPVPFh5qW8%2FhNCXNZMbI3fyE7hfupOz0j3SEC%2BhmrIAiEA5%2Bxr7YpNk3jrVNoN9aF5p%2Bu2xzqSuMhVxUNF0xw5r8cqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOoa8jxW3cjVj3jWSrcA6wn8j2Q%2FdLcrkdE8lnk984CtCr80VPmh5U1QqHGocRnNwLDx4DoHH9IeDngfN8hhWmRXO%2BEs7DvhSD%2FThxWIC%2BEOdf5S5B81dhyEocuClgwfVqHUmshckiuSLtI1%2FEB6Hv8IRpte%2BOToGIv0g1Val8wafAxcQUPS%2FXk2AM3G0f5rlJCNEtQHb4TcAt0ucIkOYrGNiYBCyqbBGqXjI5CWa7Ww4pvxGRJe8kd%2FmT3tlTeQ03yft9g3LKrY67dh50WCLdPf6j7DwqKK2imM2rciKo2pr2OIFC0DMCx4aSrO1FhfgHakxCjwIqcZqO%2BDYv30gVCFpWpY9WcGwTUI66UWNh7fkftJC50%2FbHYkpcKXJUyM46Duiils0a05Wz2PmQLjwXmZWKU5hyGgTs8nw9hlLVrjvwvOuw6pvtdPM32m9I99Guf9cDVaCFGvd5vHw3s3DgUXpicgaB4PoYsj93xxiG5DeLVGSvxn6TF4mHJr%2FtPSAfUl26Q9vQwz0Btm8my7GxJW%2B0%2BU5UGoP32BMba9LyWgV95jrT1E2nDCohZSQTZi2DK%2B%2BBZaFBH5hkBhn87as%2FMq6Z4c1R8%2BIomtt3sETzO3EYiNG%2FNr6dcEE1ihhI2Rd6YFjw7uilCRzRKMLOxs8QGOqUBaO8GKFP40XY8AMmfNoHFP0WwDO8zi9fWHB07JnlIo4nsyttYIJ4j40zj1Oa%2FlupNpgrF6pFZpdXvdYxWrlaZ5aaJBNbgqqKMXOREBWRCOaOfPrNfD0a8Gnspecdp95J7WYBowXFvCkk7V4RhgVksf5q2CDURZGxzQvRJuw1CS65eR8y5f1z5MBmnGBVShmtI64zyB3mJ28MZfoHiOrtVqyAH%2BxpM&X-Amz-Signature=fc77f96c5743576945bea14f6d0c0e0a78e8d1d372d145afab83ab9f31c56519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIH6FNE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPVPFh5qW8%2FhNCXNZMbI3fyE7hfupOz0j3SEC%2BhmrIAiEA5%2Bxr7YpNk3jrVNoN9aF5p%2Bu2xzqSuMhVxUNF0xw5r8cqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOoa8jxW3cjVj3jWSrcA6wn8j2Q%2FdLcrkdE8lnk984CtCr80VPmh5U1QqHGocRnNwLDx4DoHH9IeDngfN8hhWmRXO%2BEs7DvhSD%2FThxWIC%2BEOdf5S5B81dhyEocuClgwfVqHUmshckiuSLtI1%2FEB6Hv8IRpte%2BOToGIv0g1Val8wafAxcQUPS%2FXk2AM3G0f5rlJCNEtQHb4TcAt0ucIkOYrGNiYBCyqbBGqXjI5CWa7Ww4pvxGRJe8kd%2FmT3tlTeQ03yft9g3LKrY67dh50WCLdPf6j7DwqKK2imM2rciKo2pr2OIFC0DMCx4aSrO1FhfgHakxCjwIqcZqO%2BDYv30gVCFpWpY9WcGwTUI66UWNh7fkftJC50%2FbHYkpcKXJUyM46Duiils0a05Wz2PmQLjwXmZWKU5hyGgTs8nw9hlLVrjvwvOuw6pvtdPM32m9I99Guf9cDVaCFGvd5vHw3s3DgUXpicgaB4PoYsj93xxiG5DeLVGSvxn6TF4mHJr%2FtPSAfUl26Q9vQwz0Btm8my7GxJW%2B0%2BU5UGoP32BMba9LyWgV95jrT1E2nDCohZSQTZi2DK%2B%2BBZaFBH5hkBhn87as%2FMq6Z4c1R8%2BIomtt3sETzO3EYiNG%2FNr6dcEE1ihhI2Rd6YFjw7uilCRzRKMLOxs8QGOqUBaO8GKFP40XY8AMmfNoHFP0WwDO8zi9fWHB07JnlIo4nsyttYIJ4j40zj1Oa%2FlupNpgrF6pFZpdXvdYxWrlaZ5aaJBNbgqqKMXOREBWRCOaOfPrNfD0a8Gnspecdp95J7WYBowXFvCkk7V4RhgVksf5q2CDURZGxzQvRJuw1CS65eR8y5f1z5MBmnGBVShmtI64zyB3mJ28MZfoHiOrtVqyAH%2BxpM&X-Amz-Signature=37e973768c049de3856f385d5aefee48dd16422a697853f80e8201f761793b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIH6FNE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPVPFh5qW8%2FhNCXNZMbI3fyE7hfupOz0j3SEC%2BhmrIAiEA5%2Bxr7YpNk3jrVNoN9aF5p%2Bu2xzqSuMhVxUNF0xw5r8cqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOoa8jxW3cjVj3jWSrcA6wn8j2Q%2FdLcrkdE8lnk984CtCr80VPmh5U1QqHGocRnNwLDx4DoHH9IeDngfN8hhWmRXO%2BEs7DvhSD%2FThxWIC%2BEOdf5S5B81dhyEocuClgwfVqHUmshckiuSLtI1%2FEB6Hv8IRpte%2BOToGIv0g1Val8wafAxcQUPS%2FXk2AM3G0f5rlJCNEtQHb4TcAt0ucIkOYrGNiYBCyqbBGqXjI5CWa7Ww4pvxGRJe8kd%2FmT3tlTeQ03yft9g3LKrY67dh50WCLdPf6j7DwqKK2imM2rciKo2pr2OIFC0DMCx4aSrO1FhfgHakxCjwIqcZqO%2BDYv30gVCFpWpY9WcGwTUI66UWNh7fkftJC50%2FbHYkpcKXJUyM46Duiils0a05Wz2PmQLjwXmZWKU5hyGgTs8nw9hlLVrjvwvOuw6pvtdPM32m9I99Guf9cDVaCFGvd5vHw3s3DgUXpicgaB4PoYsj93xxiG5DeLVGSvxn6TF4mHJr%2FtPSAfUl26Q9vQwz0Btm8my7GxJW%2B0%2BU5UGoP32BMba9LyWgV95jrT1E2nDCohZSQTZi2DK%2B%2BBZaFBH5hkBhn87as%2FMq6Z4c1R8%2BIomtt3sETzO3EYiNG%2FNr6dcEE1ihhI2Rd6YFjw7uilCRzRKMLOxs8QGOqUBaO8GKFP40XY8AMmfNoHFP0WwDO8zi9fWHB07JnlIo4nsyttYIJ4j40zj1Oa%2FlupNpgrF6pFZpdXvdYxWrlaZ5aaJBNbgqqKMXOREBWRCOaOfPrNfD0a8Gnspecdp95J7WYBowXFvCkk7V4RhgVksf5q2CDURZGxzQvRJuw1CS65eR8y5f1z5MBmnGBVShmtI64zyB3mJ28MZfoHiOrtVqyAH%2BxpM&X-Amz-Signature=c670a608c05e4f5b7196163a43c85e427d5aee635bb3f6d5379730bf5ff80920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIH6FNE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPVPFh5qW8%2FhNCXNZMbI3fyE7hfupOz0j3SEC%2BhmrIAiEA5%2Bxr7YpNk3jrVNoN9aF5p%2Bu2xzqSuMhVxUNF0xw5r8cqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOoa8jxW3cjVj3jWSrcA6wn8j2Q%2FdLcrkdE8lnk984CtCr80VPmh5U1QqHGocRnNwLDx4DoHH9IeDngfN8hhWmRXO%2BEs7DvhSD%2FThxWIC%2BEOdf5S5B81dhyEocuClgwfVqHUmshckiuSLtI1%2FEB6Hv8IRpte%2BOToGIv0g1Val8wafAxcQUPS%2FXk2AM3G0f5rlJCNEtQHb4TcAt0ucIkOYrGNiYBCyqbBGqXjI5CWa7Ww4pvxGRJe8kd%2FmT3tlTeQ03yft9g3LKrY67dh50WCLdPf6j7DwqKK2imM2rciKo2pr2OIFC0DMCx4aSrO1FhfgHakxCjwIqcZqO%2BDYv30gVCFpWpY9WcGwTUI66UWNh7fkftJC50%2FbHYkpcKXJUyM46Duiils0a05Wz2PmQLjwXmZWKU5hyGgTs8nw9hlLVrjvwvOuw6pvtdPM32m9I99Guf9cDVaCFGvd5vHw3s3DgUXpicgaB4PoYsj93xxiG5DeLVGSvxn6TF4mHJr%2FtPSAfUl26Q9vQwz0Btm8my7GxJW%2B0%2BU5UGoP32BMba9LyWgV95jrT1E2nDCohZSQTZi2DK%2B%2BBZaFBH5hkBhn87as%2FMq6Z4c1R8%2BIomtt3sETzO3EYiNG%2FNr6dcEE1ihhI2Rd6YFjw7uilCRzRKMLOxs8QGOqUBaO8GKFP40XY8AMmfNoHFP0WwDO8zi9fWHB07JnlIo4nsyttYIJ4j40zj1Oa%2FlupNpgrF6pFZpdXvdYxWrlaZ5aaJBNbgqqKMXOREBWRCOaOfPrNfD0a8Gnspecdp95J7WYBowXFvCkk7V4RhgVksf5q2CDURZGxzQvRJuw1CS65eR8y5f1z5MBmnGBVShmtI64zyB3mJ28MZfoHiOrtVqyAH%2BxpM&X-Amz-Signature=a0eb6453ffd1467e5a7801fc6307d24a16aa94d1aeb823b5669c03d3d4b95316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIH6FNE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPVPFh5qW8%2FhNCXNZMbI3fyE7hfupOz0j3SEC%2BhmrIAiEA5%2Bxr7YpNk3jrVNoN9aF5p%2Bu2xzqSuMhVxUNF0xw5r8cqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOoa8jxW3cjVj3jWSrcA6wn8j2Q%2FdLcrkdE8lnk984CtCr80VPmh5U1QqHGocRnNwLDx4DoHH9IeDngfN8hhWmRXO%2BEs7DvhSD%2FThxWIC%2BEOdf5S5B81dhyEocuClgwfVqHUmshckiuSLtI1%2FEB6Hv8IRpte%2BOToGIv0g1Val8wafAxcQUPS%2FXk2AM3G0f5rlJCNEtQHb4TcAt0ucIkOYrGNiYBCyqbBGqXjI5CWa7Ww4pvxGRJe8kd%2FmT3tlTeQ03yft9g3LKrY67dh50WCLdPf6j7DwqKK2imM2rciKo2pr2OIFC0DMCx4aSrO1FhfgHakxCjwIqcZqO%2BDYv30gVCFpWpY9WcGwTUI66UWNh7fkftJC50%2FbHYkpcKXJUyM46Duiils0a05Wz2PmQLjwXmZWKU5hyGgTs8nw9hlLVrjvwvOuw6pvtdPM32m9I99Guf9cDVaCFGvd5vHw3s3DgUXpicgaB4PoYsj93xxiG5DeLVGSvxn6TF4mHJr%2FtPSAfUl26Q9vQwz0Btm8my7GxJW%2B0%2BU5UGoP32BMba9LyWgV95jrT1E2nDCohZSQTZi2DK%2B%2BBZaFBH5hkBhn87as%2FMq6Z4c1R8%2BIomtt3sETzO3EYiNG%2FNr6dcEE1ihhI2Rd6YFjw7uilCRzRKMLOxs8QGOqUBaO8GKFP40XY8AMmfNoHFP0WwDO8zi9fWHB07JnlIo4nsyttYIJ4j40zj1Oa%2FlupNpgrF6pFZpdXvdYxWrlaZ5aaJBNbgqqKMXOREBWRCOaOfPrNfD0a8Gnspecdp95J7WYBowXFvCkk7V4RhgVksf5q2CDURZGxzQvRJuw1CS65eR8y5f1z5MBmnGBVShmtI64zyB3mJ28MZfoHiOrtVqyAH%2BxpM&X-Amz-Signature=826c1757046e72af42f20cc4906dfe18acf707b54a916689773ac1714827f091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIH6FNE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPVPFh5qW8%2FhNCXNZMbI3fyE7hfupOz0j3SEC%2BhmrIAiEA5%2Bxr7YpNk3jrVNoN9aF5p%2Bu2xzqSuMhVxUNF0xw5r8cqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOoa8jxW3cjVj3jWSrcA6wn8j2Q%2FdLcrkdE8lnk984CtCr80VPmh5U1QqHGocRnNwLDx4DoHH9IeDngfN8hhWmRXO%2BEs7DvhSD%2FThxWIC%2BEOdf5S5B81dhyEocuClgwfVqHUmshckiuSLtI1%2FEB6Hv8IRpte%2BOToGIv0g1Val8wafAxcQUPS%2FXk2AM3G0f5rlJCNEtQHb4TcAt0ucIkOYrGNiYBCyqbBGqXjI5CWa7Ww4pvxGRJe8kd%2FmT3tlTeQ03yft9g3LKrY67dh50WCLdPf6j7DwqKK2imM2rciKo2pr2OIFC0DMCx4aSrO1FhfgHakxCjwIqcZqO%2BDYv30gVCFpWpY9WcGwTUI66UWNh7fkftJC50%2FbHYkpcKXJUyM46Duiils0a05Wz2PmQLjwXmZWKU5hyGgTs8nw9hlLVrjvwvOuw6pvtdPM32m9I99Guf9cDVaCFGvd5vHw3s3DgUXpicgaB4PoYsj93xxiG5DeLVGSvxn6TF4mHJr%2FtPSAfUl26Q9vQwz0Btm8my7GxJW%2B0%2BU5UGoP32BMba9LyWgV95jrT1E2nDCohZSQTZi2DK%2B%2BBZaFBH5hkBhn87as%2FMq6Z4c1R8%2BIomtt3sETzO3EYiNG%2FNr6dcEE1ihhI2Rd6YFjw7uilCRzRKMLOxs8QGOqUBaO8GKFP40XY8AMmfNoHFP0WwDO8zi9fWHB07JnlIo4nsyttYIJ4j40zj1Oa%2FlupNpgrF6pFZpdXvdYxWrlaZ5aaJBNbgqqKMXOREBWRCOaOfPrNfD0a8Gnspecdp95J7WYBowXFvCkk7V4RhgVksf5q2CDURZGxzQvRJuw1CS65eR8y5f1z5MBmnGBVShmtI64zyB3mJ28MZfoHiOrtVqyAH%2BxpM&X-Amz-Signature=f933c66b768c1256a7ff20d31f83a7650fcae2d3ee7c3c2a8655a0a42d6f5343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIH6FNE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPVPFh5qW8%2FhNCXNZMbI3fyE7hfupOz0j3SEC%2BhmrIAiEA5%2Bxr7YpNk3jrVNoN9aF5p%2Bu2xzqSuMhVxUNF0xw5r8cqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOoa8jxW3cjVj3jWSrcA6wn8j2Q%2FdLcrkdE8lnk984CtCr80VPmh5U1QqHGocRnNwLDx4DoHH9IeDngfN8hhWmRXO%2BEs7DvhSD%2FThxWIC%2BEOdf5S5B81dhyEocuClgwfVqHUmshckiuSLtI1%2FEB6Hv8IRpte%2BOToGIv0g1Val8wafAxcQUPS%2FXk2AM3G0f5rlJCNEtQHb4TcAt0ucIkOYrGNiYBCyqbBGqXjI5CWa7Ww4pvxGRJe8kd%2FmT3tlTeQ03yft9g3LKrY67dh50WCLdPf6j7DwqKK2imM2rciKo2pr2OIFC0DMCx4aSrO1FhfgHakxCjwIqcZqO%2BDYv30gVCFpWpY9WcGwTUI66UWNh7fkftJC50%2FbHYkpcKXJUyM46Duiils0a05Wz2PmQLjwXmZWKU5hyGgTs8nw9hlLVrjvwvOuw6pvtdPM32m9I99Guf9cDVaCFGvd5vHw3s3DgUXpicgaB4PoYsj93xxiG5DeLVGSvxn6TF4mHJr%2FtPSAfUl26Q9vQwz0Btm8my7GxJW%2B0%2BU5UGoP32BMba9LyWgV95jrT1E2nDCohZSQTZi2DK%2B%2BBZaFBH5hkBhn87as%2FMq6Z4c1R8%2BIomtt3sETzO3EYiNG%2FNr6dcEE1ihhI2Rd6YFjw7uilCRzRKMLOxs8QGOqUBaO8GKFP40XY8AMmfNoHFP0WwDO8zi9fWHB07JnlIo4nsyttYIJ4j40zj1Oa%2FlupNpgrF6pFZpdXvdYxWrlaZ5aaJBNbgqqKMXOREBWRCOaOfPrNfD0a8Gnspecdp95J7WYBowXFvCkk7V4RhgVksf5q2CDURZGxzQvRJuw1CS65eR8y5f1z5MBmnGBVShmtI64zyB3mJ28MZfoHiOrtVqyAH%2BxpM&X-Amz-Signature=97b6da392d841bf86dec91f4679c60b1696227c4ff6975800858fcd1f297e1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIH6FNE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPVPFh5qW8%2FhNCXNZMbI3fyE7hfupOz0j3SEC%2BhmrIAiEA5%2Bxr7YpNk3jrVNoN9aF5p%2Bu2xzqSuMhVxUNF0xw5r8cqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOoa8jxW3cjVj3jWSrcA6wn8j2Q%2FdLcrkdE8lnk984CtCr80VPmh5U1QqHGocRnNwLDx4DoHH9IeDngfN8hhWmRXO%2BEs7DvhSD%2FThxWIC%2BEOdf5S5B81dhyEocuClgwfVqHUmshckiuSLtI1%2FEB6Hv8IRpte%2BOToGIv0g1Val8wafAxcQUPS%2FXk2AM3G0f5rlJCNEtQHb4TcAt0ucIkOYrGNiYBCyqbBGqXjI5CWa7Ww4pvxGRJe8kd%2FmT3tlTeQ03yft9g3LKrY67dh50WCLdPf6j7DwqKK2imM2rciKo2pr2OIFC0DMCx4aSrO1FhfgHakxCjwIqcZqO%2BDYv30gVCFpWpY9WcGwTUI66UWNh7fkftJC50%2FbHYkpcKXJUyM46Duiils0a05Wz2PmQLjwXmZWKU5hyGgTs8nw9hlLVrjvwvOuw6pvtdPM32m9I99Guf9cDVaCFGvd5vHw3s3DgUXpicgaB4PoYsj93xxiG5DeLVGSvxn6TF4mHJr%2FtPSAfUl26Q9vQwz0Btm8my7GxJW%2B0%2BU5UGoP32BMba9LyWgV95jrT1E2nDCohZSQTZi2DK%2B%2BBZaFBH5hkBhn87as%2FMq6Z4c1R8%2BIomtt3sETzO3EYiNG%2FNr6dcEE1ihhI2Rd6YFjw7uilCRzRKMLOxs8QGOqUBaO8GKFP40XY8AMmfNoHFP0WwDO8zi9fWHB07JnlIo4nsyttYIJ4j40zj1Oa%2FlupNpgrF6pFZpdXvdYxWrlaZ5aaJBNbgqqKMXOREBWRCOaOfPrNfD0a8Gnspecdp95J7WYBowXFvCkk7V4RhgVksf5q2CDURZGxzQvRJuw1CS65eR8y5f1z5MBmnGBVShmtI64zyB3mJ28MZfoHiOrtVqyAH%2BxpM&X-Amz-Signature=2825478aea64bc3b15fd774e1ab0bad7d189a1d1d66b07db70179b56abd5cd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
