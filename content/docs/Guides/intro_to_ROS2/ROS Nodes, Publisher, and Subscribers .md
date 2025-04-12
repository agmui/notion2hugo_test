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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBM6MTH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmxvEWosz8jR%2BYVQ5Z1Bt6GM4yYTmazVHa%2Fm%2BGgWQGEAIhALfFbS9kQ2XgadxnkCxQ0Lv7ed9UfW1%2BFljD4GcOMAnXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQDweEXGCYRQpFFsIq3AMA6vBd6%2BvtYsgY8uG6kDK2M8a4zQDN%2FHyRrkJm7eq%2B0N6cOlQfxW%2BQxjrYlDTM3bD5rpmBJTz7%2BDDy0QJvvASuMyjIZtgyOuQv3gkunyaoBNQtsZeoKvIaFoYomM1%2BuIn5JGowf6T366F8q0OcXgzYMk0NWLXd8VI90uvRZ6PkmKPcfYh6%2FynG3xqBJenHnYflqB%2BzhVJlYl8R4Nhc%2FBY1pspGVwMQddFFT7%2BFjAcCvM1HtoNxLAQSetMVk7evzly4%2FDqGx55l3MIsiCEFpPlLFUzMIGkI0LC8MlW7vx5I093d08PzSnwNQO8IGWaAl65oaxnJhpyoPu2gxc4PkOpXGhY38faBFGJ84pi0Y4Sok8vUvoYPimueR3s4%2BXW7uG%2B6eJowgvSrjCR4zeqIiq88txHfDydiPAMvfc0s9xWufIjWMt%2Bf7u4Re482r1Y25I8NgjXY1gG3xrW1Blle1xpUjs5D2cdWNY9vTD%2FPA%2FBPymsrVJvkLMVPzp1P85otANtseaRg%2FzHnI9V07ntT02Ez6h5%2B3WMpTSCUcU3XwuxUd%2BJxtotrU7ae%2FLDGCvMM9Nk%2BGiaSrm7DVPiM%2BEjGJyXSgDk12DNn3eFyFBLxOIRbbj%2FsCIdIVsXziZ%2BtLTC2yum%2FBjqkAVOqS3sVpfZ8mCSi8UqemHaSeXscwRP2NBA70WHCfJxeX7kFyAyZjpfMW2Qbt9kHDQeyn4n5%2FgmRCcyv1i739DdRqKZKOFixMKfpD9z4uyvA%2B%2FoRUYEkSRLQgdrNkaK2HLkzmYU4k9awijKvuHjyox8AyetbYusgdLTaZdk%2BsV1fh8PlTH5beBIROIN02VvayxmAK%2Fz5FshluFtfL3xUX0g0jbP7&X-Amz-Signature=7f54bda6a771b1ec7bddcadbbfb96e9ac494bc52903aa74901acbf743cb8650c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBM6MTH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmxvEWosz8jR%2BYVQ5Z1Bt6GM4yYTmazVHa%2Fm%2BGgWQGEAIhALfFbS9kQ2XgadxnkCxQ0Lv7ed9UfW1%2BFljD4GcOMAnXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQDweEXGCYRQpFFsIq3AMA6vBd6%2BvtYsgY8uG6kDK2M8a4zQDN%2FHyRrkJm7eq%2B0N6cOlQfxW%2BQxjrYlDTM3bD5rpmBJTz7%2BDDy0QJvvASuMyjIZtgyOuQv3gkunyaoBNQtsZeoKvIaFoYomM1%2BuIn5JGowf6T366F8q0OcXgzYMk0NWLXd8VI90uvRZ6PkmKPcfYh6%2FynG3xqBJenHnYflqB%2BzhVJlYl8R4Nhc%2FBY1pspGVwMQddFFT7%2BFjAcCvM1HtoNxLAQSetMVk7evzly4%2FDqGx55l3MIsiCEFpPlLFUzMIGkI0LC8MlW7vx5I093d08PzSnwNQO8IGWaAl65oaxnJhpyoPu2gxc4PkOpXGhY38faBFGJ84pi0Y4Sok8vUvoYPimueR3s4%2BXW7uG%2B6eJowgvSrjCR4zeqIiq88txHfDydiPAMvfc0s9xWufIjWMt%2Bf7u4Re482r1Y25I8NgjXY1gG3xrW1Blle1xpUjs5D2cdWNY9vTD%2FPA%2FBPymsrVJvkLMVPzp1P85otANtseaRg%2FzHnI9V07ntT02Ez6h5%2B3WMpTSCUcU3XwuxUd%2BJxtotrU7ae%2FLDGCvMM9Nk%2BGiaSrm7DVPiM%2BEjGJyXSgDk12DNn3eFyFBLxOIRbbj%2FsCIdIVsXziZ%2BtLTC2yum%2FBjqkAVOqS3sVpfZ8mCSi8UqemHaSeXscwRP2NBA70WHCfJxeX7kFyAyZjpfMW2Qbt9kHDQeyn4n5%2FgmRCcyv1i739DdRqKZKOFixMKfpD9z4uyvA%2B%2FoRUYEkSRLQgdrNkaK2HLkzmYU4k9awijKvuHjyox8AyetbYusgdLTaZdk%2BsV1fh8PlTH5beBIROIN02VvayxmAK%2Fz5FshluFtfL3xUX0g0jbP7&X-Amz-Signature=deff0d6947ea365e246bba1bcfc6069844017ee97d82c09cd2e8eb53f2057b36&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBM6MTH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmxvEWosz8jR%2BYVQ5Z1Bt6GM4yYTmazVHa%2Fm%2BGgWQGEAIhALfFbS9kQ2XgadxnkCxQ0Lv7ed9UfW1%2BFljD4GcOMAnXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQDweEXGCYRQpFFsIq3AMA6vBd6%2BvtYsgY8uG6kDK2M8a4zQDN%2FHyRrkJm7eq%2B0N6cOlQfxW%2BQxjrYlDTM3bD5rpmBJTz7%2BDDy0QJvvASuMyjIZtgyOuQv3gkunyaoBNQtsZeoKvIaFoYomM1%2BuIn5JGowf6T366F8q0OcXgzYMk0NWLXd8VI90uvRZ6PkmKPcfYh6%2FynG3xqBJenHnYflqB%2BzhVJlYl8R4Nhc%2FBY1pspGVwMQddFFT7%2BFjAcCvM1HtoNxLAQSetMVk7evzly4%2FDqGx55l3MIsiCEFpPlLFUzMIGkI0LC8MlW7vx5I093d08PzSnwNQO8IGWaAl65oaxnJhpyoPu2gxc4PkOpXGhY38faBFGJ84pi0Y4Sok8vUvoYPimueR3s4%2BXW7uG%2B6eJowgvSrjCR4zeqIiq88txHfDydiPAMvfc0s9xWufIjWMt%2Bf7u4Re482r1Y25I8NgjXY1gG3xrW1Blle1xpUjs5D2cdWNY9vTD%2FPA%2FBPymsrVJvkLMVPzp1P85otANtseaRg%2FzHnI9V07ntT02Ez6h5%2B3WMpTSCUcU3XwuxUd%2BJxtotrU7ae%2FLDGCvMM9Nk%2BGiaSrm7DVPiM%2BEjGJyXSgDk12DNn3eFyFBLxOIRbbj%2FsCIdIVsXziZ%2BtLTC2yum%2FBjqkAVOqS3sVpfZ8mCSi8UqemHaSeXscwRP2NBA70WHCfJxeX7kFyAyZjpfMW2Qbt9kHDQeyn4n5%2FgmRCcyv1i739DdRqKZKOFixMKfpD9z4uyvA%2B%2FoRUYEkSRLQgdrNkaK2HLkzmYU4k9awijKvuHjyox8AyetbYusgdLTaZdk%2BsV1fh8PlTH5beBIROIN02VvayxmAK%2Fz5FshluFtfL3xUX0g0jbP7&X-Amz-Signature=7ef1784d6ab74b49b6af4e3e71a5781e7694aa9938cb7c7993adabc4591e76a3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBM6MTH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmxvEWosz8jR%2BYVQ5Z1Bt6GM4yYTmazVHa%2Fm%2BGgWQGEAIhALfFbS9kQ2XgadxnkCxQ0Lv7ed9UfW1%2BFljD4GcOMAnXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQDweEXGCYRQpFFsIq3AMA6vBd6%2BvtYsgY8uG6kDK2M8a4zQDN%2FHyRrkJm7eq%2B0N6cOlQfxW%2BQxjrYlDTM3bD5rpmBJTz7%2BDDy0QJvvASuMyjIZtgyOuQv3gkunyaoBNQtsZeoKvIaFoYomM1%2BuIn5JGowf6T366F8q0OcXgzYMk0NWLXd8VI90uvRZ6PkmKPcfYh6%2FynG3xqBJenHnYflqB%2BzhVJlYl8R4Nhc%2FBY1pspGVwMQddFFT7%2BFjAcCvM1HtoNxLAQSetMVk7evzly4%2FDqGx55l3MIsiCEFpPlLFUzMIGkI0LC8MlW7vx5I093d08PzSnwNQO8IGWaAl65oaxnJhpyoPu2gxc4PkOpXGhY38faBFGJ84pi0Y4Sok8vUvoYPimueR3s4%2BXW7uG%2B6eJowgvSrjCR4zeqIiq88txHfDydiPAMvfc0s9xWufIjWMt%2Bf7u4Re482r1Y25I8NgjXY1gG3xrW1Blle1xpUjs5D2cdWNY9vTD%2FPA%2FBPymsrVJvkLMVPzp1P85otANtseaRg%2FzHnI9V07ntT02Ez6h5%2B3WMpTSCUcU3XwuxUd%2BJxtotrU7ae%2FLDGCvMM9Nk%2BGiaSrm7DVPiM%2BEjGJyXSgDk12DNn3eFyFBLxOIRbbj%2FsCIdIVsXziZ%2BtLTC2yum%2FBjqkAVOqS3sVpfZ8mCSi8UqemHaSeXscwRP2NBA70WHCfJxeX7kFyAyZjpfMW2Qbt9kHDQeyn4n5%2FgmRCcyv1i739DdRqKZKOFixMKfpD9z4uyvA%2B%2FoRUYEkSRLQgdrNkaK2HLkzmYU4k9awijKvuHjyox8AyetbYusgdLTaZdk%2BsV1fh8PlTH5beBIROIN02VvayxmAK%2Fz5FshluFtfL3xUX0g0jbP7&X-Amz-Signature=407a787268fe51988bd3327473d91b64e6042c5b00e2f37e18c72bb436aff04e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBM6MTH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmxvEWosz8jR%2BYVQ5Z1Bt6GM4yYTmazVHa%2Fm%2BGgWQGEAIhALfFbS9kQ2XgadxnkCxQ0Lv7ed9UfW1%2BFljD4GcOMAnXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQDweEXGCYRQpFFsIq3AMA6vBd6%2BvtYsgY8uG6kDK2M8a4zQDN%2FHyRrkJm7eq%2B0N6cOlQfxW%2BQxjrYlDTM3bD5rpmBJTz7%2BDDy0QJvvASuMyjIZtgyOuQv3gkunyaoBNQtsZeoKvIaFoYomM1%2BuIn5JGowf6T366F8q0OcXgzYMk0NWLXd8VI90uvRZ6PkmKPcfYh6%2FynG3xqBJenHnYflqB%2BzhVJlYl8R4Nhc%2FBY1pspGVwMQddFFT7%2BFjAcCvM1HtoNxLAQSetMVk7evzly4%2FDqGx55l3MIsiCEFpPlLFUzMIGkI0LC8MlW7vx5I093d08PzSnwNQO8IGWaAl65oaxnJhpyoPu2gxc4PkOpXGhY38faBFGJ84pi0Y4Sok8vUvoYPimueR3s4%2BXW7uG%2B6eJowgvSrjCR4zeqIiq88txHfDydiPAMvfc0s9xWufIjWMt%2Bf7u4Re482r1Y25I8NgjXY1gG3xrW1Blle1xpUjs5D2cdWNY9vTD%2FPA%2FBPymsrVJvkLMVPzp1P85otANtseaRg%2FzHnI9V07ntT02Ez6h5%2B3WMpTSCUcU3XwuxUd%2BJxtotrU7ae%2FLDGCvMM9Nk%2BGiaSrm7DVPiM%2BEjGJyXSgDk12DNn3eFyFBLxOIRbbj%2FsCIdIVsXziZ%2BtLTC2yum%2FBjqkAVOqS3sVpfZ8mCSi8UqemHaSeXscwRP2NBA70WHCfJxeX7kFyAyZjpfMW2Qbt9kHDQeyn4n5%2FgmRCcyv1i739DdRqKZKOFixMKfpD9z4uyvA%2B%2FoRUYEkSRLQgdrNkaK2HLkzmYU4k9awijKvuHjyox8AyetbYusgdLTaZdk%2BsV1fh8PlTH5beBIROIN02VvayxmAK%2Fz5FshluFtfL3xUX0g0jbP7&X-Amz-Signature=85979ddba5724b8632938ee39075908e81ebd50ad27d293eb783f37e0d7f4a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBM6MTH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmxvEWosz8jR%2BYVQ5Z1Bt6GM4yYTmazVHa%2Fm%2BGgWQGEAIhALfFbS9kQ2XgadxnkCxQ0Lv7ed9UfW1%2BFljD4GcOMAnXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQDweEXGCYRQpFFsIq3AMA6vBd6%2BvtYsgY8uG6kDK2M8a4zQDN%2FHyRrkJm7eq%2B0N6cOlQfxW%2BQxjrYlDTM3bD5rpmBJTz7%2BDDy0QJvvASuMyjIZtgyOuQv3gkunyaoBNQtsZeoKvIaFoYomM1%2BuIn5JGowf6T366F8q0OcXgzYMk0NWLXd8VI90uvRZ6PkmKPcfYh6%2FynG3xqBJenHnYflqB%2BzhVJlYl8R4Nhc%2FBY1pspGVwMQddFFT7%2BFjAcCvM1HtoNxLAQSetMVk7evzly4%2FDqGx55l3MIsiCEFpPlLFUzMIGkI0LC8MlW7vx5I093d08PzSnwNQO8IGWaAl65oaxnJhpyoPu2gxc4PkOpXGhY38faBFGJ84pi0Y4Sok8vUvoYPimueR3s4%2BXW7uG%2B6eJowgvSrjCR4zeqIiq88txHfDydiPAMvfc0s9xWufIjWMt%2Bf7u4Re482r1Y25I8NgjXY1gG3xrW1Blle1xpUjs5D2cdWNY9vTD%2FPA%2FBPymsrVJvkLMVPzp1P85otANtseaRg%2FzHnI9V07ntT02Ez6h5%2B3WMpTSCUcU3XwuxUd%2BJxtotrU7ae%2FLDGCvMM9Nk%2BGiaSrm7DVPiM%2BEjGJyXSgDk12DNn3eFyFBLxOIRbbj%2FsCIdIVsXziZ%2BtLTC2yum%2FBjqkAVOqS3sVpfZ8mCSi8UqemHaSeXscwRP2NBA70WHCfJxeX7kFyAyZjpfMW2Qbt9kHDQeyn4n5%2FgmRCcyv1i739DdRqKZKOFixMKfpD9z4uyvA%2B%2FoRUYEkSRLQgdrNkaK2HLkzmYU4k9awijKvuHjyox8AyetbYusgdLTaZdk%2BsV1fh8PlTH5beBIROIN02VvayxmAK%2Fz5FshluFtfL3xUX0g0jbP7&X-Amz-Signature=5223f47ebe96553e99b9ad22610c0fb20c568e98c19d703a1ce6f1ae9dd9c91f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBM6MTH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmxvEWosz8jR%2BYVQ5Z1Bt6GM4yYTmazVHa%2Fm%2BGgWQGEAIhALfFbS9kQ2XgadxnkCxQ0Lv7ed9UfW1%2BFljD4GcOMAnXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQDweEXGCYRQpFFsIq3AMA6vBd6%2BvtYsgY8uG6kDK2M8a4zQDN%2FHyRrkJm7eq%2B0N6cOlQfxW%2BQxjrYlDTM3bD5rpmBJTz7%2BDDy0QJvvASuMyjIZtgyOuQv3gkunyaoBNQtsZeoKvIaFoYomM1%2BuIn5JGowf6T366F8q0OcXgzYMk0NWLXd8VI90uvRZ6PkmKPcfYh6%2FynG3xqBJenHnYflqB%2BzhVJlYl8R4Nhc%2FBY1pspGVwMQddFFT7%2BFjAcCvM1HtoNxLAQSetMVk7evzly4%2FDqGx55l3MIsiCEFpPlLFUzMIGkI0LC8MlW7vx5I093d08PzSnwNQO8IGWaAl65oaxnJhpyoPu2gxc4PkOpXGhY38faBFGJ84pi0Y4Sok8vUvoYPimueR3s4%2BXW7uG%2B6eJowgvSrjCR4zeqIiq88txHfDydiPAMvfc0s9xWufIjWMt%2Bf7u4Re482r1Y25I8NgjXY1gG3xrW1Blle1xpUjs5D2cdWNY9vTD%2FPA%2FBPymsrVJvkLMVPzp1P85otANtseaRg%2FzHnI9V07ntT02Ez6h5%2B3WMpTSCUcU3XwuxUd%2BJxtotrU7ae%2FLDGCvMM9Nk%2BGiaSrm7DVPiM%2BEjGJyXSgDk12DNn3eFyFBLxOIRbbj%2FsCIdIVsXziZ%2BtLTC2yum%2FBjqkAVOqS3sVpfZ8mCSi8UqemHaSeXscwRP2NBA70WHCfJxeX7kFyAyZjpfMW2Qbt9kHDQeyn4n5%2FgmRCcyv1i739DdRqKZKOFixMKfpD9z4uyvA%2B%2FoRUYEkSRLQgdrNkaK2HLkzmYU4k9awijKvuHjyox8AyetbYusgdLTaZdk%2BsV1fh8PlTH5beBIROIN02VvayxmAK%2Fz5FshluFtfL3xUX0g0jbP7&X-Amz-Signature=7db236c18b14df3e34dee646aa693c73731140b61cdd062334febcbf51fb3a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBM6MTH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmxvEWosz8jR%2BYVQ5Z1Bt6GM4yYTmazVHa%2Fm%2BGgWQGEAIhALfFbS9kQ2XgadxnkCxQ0Lv7ed9UfW1%2BFljD4GcOMAnXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQDweEXGCYRQpFFsIq3AMA6vBd6%2BvtYsgY8uG6kDK2M8a4zQDN%2FHyRrkJm7eq%2B0N6cOlQfxW%2BQxjrYlDTM3bD5rpmBJTz7%2BDDy0QJvvASuMyjIZtgyOuQv3gkunyaoBNQtsZeoKvIaFoYomM1%2BuIn5JGowf6T366F8q0OcXgzYMk0NWLXd8VI90uvRZ6PkmKPcfYh6%2FynG3xqBJenHnYflqB%2BzhVJlYl8R4Nhc%2FBY1pspGVwMQddFFT7%2BFjAcCvM1HtoNxLAQSetMVk7evzly4%2FDqGx55l3MIsiCEFpPlLFUzMIGkI0LC8MlW7vx5I093d08PzSnwNQO8IGWaAl65oaxnJhpyoPu2gxc4PkOpXGhY38faBFGJ84pi0Y4Sok8vUvoYPimueR3s4%2BXW7uG%2B6eJowgvSrjCR4zeqIiq88txHfDydiPAMvfc0s9xWufIjWMt%2Bf7u4Re482r1Y25I8NgjXY1gG3xrW1Blle1xpUjs5D2cdWNY9vTD%2FPA%2FBPymsrVJvkLMVPzp1P85otANtseaRg%2FzHnI9V07ntT02Ez6h5%2B3WMpTSCUcU3XwuxUd%2BJxtotrU7ae%2FLDGCvMM9Nk%2BGiaSrm7DVPiM%2BEjGJyXSgDk12DNn3eFyFBLxOIRbbj%2FsCIdIVsXziZ%2BtLTC2yum%2FBjqkAVOqS3sVpfZ8mCSi8UqemHaSeXscwRP2NBA70WHCfJxeX7kFyAyZjpfMW2Qbt9kHDQeyn4n5%2FgmRCcyv1i739DdRqKZKOFixMKfpD9z4uyvA%2B%2FoRUYEkSRLQgdrNkaK2HLkzmYU4k9awijKvuHjyox8AyetbYusgdLTaZdk%2BsV1fh8PlTH5beBIROIN02VvayxmAK%2Fz5FshluFtfL3xUX0g0jbP7&X-Amz-Signature=de626e1f0d3aa1c19280b1e9f3c19adacf455cd1b488e5a6323ebe2d6877b62f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
