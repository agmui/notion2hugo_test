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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BECQS5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsa6nfCCZuI1%2B4XTzqXy24VkXnT2Pslci4bcmniK%2B0KwIhANC7sv7ibWAFVT85Prnpxn6RxKAcQJQpu7S%2Fuxe9SZ81KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxairMjtgVI1I62r6kq3APIXMOAlA7SZGwfDx%2FEKeJ%2BjyWdiANn2hLnFkzC0I8QPvY2hnFGlnRD2d50aCtijNq4aKt8VdYHfcgT3zt3sqFW2pIHMbimzgLFwTKr36B6gZX15glK%2BPuhZfkZ2QEGl36cQ15qvMwY5LMS6LZGE6SaPCIqted4S%2F8WNM8Oexpyj5wIrl1DAQ%2BegbTyPRVE8%2FrbXlJv8e7a%2Fd2i7GfF0aYe3n%2FqLeFq%2BdCFbiAkfpAAzRbJeHVVfMxzITG%2B2y3Xdf%2B1E0IOSu8ehKEgoTGkEAsyNGy221H0QeW9r96GD2A9VGvL7y7XVp1M0cpcs4eTw2sdj9t8BggINCmgdLJXlTC%2BIFkOexa9h84s2Q0aChhZ%2BsMuqOojVpxClYuCHuzRWZFkSj8aN13ACD5bC2eX0z8GLfnx47XYzxFQ0q1ioNpqDtiV0ZjSJcUp4VIQLmOgsc4%2FP9zqM2hpERGLyD7ZWqi5z4Aek49HfAZRXlec2guHxz0z3FnCuYtS%2FFHgqZJueu6S1BJg8FTbcGUzaspb8PfgP5XFtKrc239bQm8iOWFDyXqpvdrbAysRvDbeywnfAFx2q6toln9KAlaaoqgvrtiyitbq1asWFIMCaiKl6YBmE5IU8AYOf6d5MfAzyDCgh%2BC%2FBjqkAaqf81GgSbvB4dIrZTPaSs1Y0MpZehAz1oTtR%2BzObbhMlwPdt%2Fsh2v%2FwiHOw2QZZbtZU6Jt9mICSKOJXln%2BgtRgHCW6aDEQP0uem31a99P6tP9KtkX3%2BYeWYNIWKlGzjY%2BNOTKrNY%2FGWAiM1SajQvs4N4hu16Tvv411YIf0TN8BanaR4lhYvV0K65W3eXX4Eb9D0Am1uUt4JdfY%2FXUEBJforiSyT&X-Amz-Signature=4fd7c8fa63a1f0e01969748d31bed465cd5437d6922c8fe2a6eaa5341472fe6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BECQS5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsa6nfCCZuI1%2B4XTzqXy24VkXnT2Pslci4bcmniK%2B0KwIhANC7sv7ibWAFVT85Prnpxn6RxKAcQJQpu7S%2Fuxe9SZ81KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxairMjtgVI1I62r6kq3APIXMOAlA7SZGwfDx%2FEKeJ%2BjyWdiANn2hLnFkzC0I8QPvY2hnFGlnRD2d50aCtijNq4aKt8VdYHfcgT3zt3sqFW2pIHMbimzgLFwTKr36B6gZX15glK%2BPuhZfkZ2QEGl36cQ15qvMwY5LMS6LZGE6SaPCIqted4S%2F8WNM8Oexpyj5wIrl1DAQ%2BegbTyPRVE8%2FrbXlJv8e7a%2Fd2i7GfF0aYe3n%2FqLeFq%2BdCFbiAkfpAAzRbJeHVVfMxzITG%2B2y3Xdf%2B1E0IOSu8ehKEgoTGkEAsyNGy221H0QeW9r96GD2A9VGvL7y7XVp1M0cpcs4eTw2sdj9t8BggINCmgdLJXlTC%2BIFkOexa9h84s2Q0aChhZ%2BsMuqOojVpxClYuCHuzRWZFkSj8aN13ACD5bC2eX0z8GLfnx47XYzxFQ0q1ioNpqDtiV0ZjSJcUp4VIQLmOgsc4%2FP9zqM2hpERGLyD7ZWqi5z4Aek49HfAZRXlec2guHxz0z3FnCuYtS%2FFHgqZJueu6S1BJg8FTbcGUzaspb8PfgP5XFtKrc239bQm8iOWFDyXqpvdrbAysRvDbeywnfAFx2q6toln9KAlaaoqgvrtiyitbq1asWFIMCaiKl6YBmE5IU8AYOf6d5MfAzyDCgh%2BC%2FBjqkAaqf81GgSbvB4dIrZTPaSs1Y0MpZehAz1oTtR%2BzObbhMlwPdt%2Fsh2v%2FwiHOw2QZZbtZU6Jt9mICSKOJXln%2BgtRgHCW6aDEQP0uem31a99P6tP9KtkX3%2BYeWYNIWKlGzjY%2BNOTKrNY%2FGWAiM1SajQvs4N4hu16Tvv411YIf0TN8BanaR4lhYvV0K65W3eXX4Eb9D0Am1uUt4JdfY%2FXUEBJforiSyT&X-Amz-Signature=560589b8a8c9ee696401862a1b711147428cc325e5edaade0c8e461ec8f15999&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BECQS5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsa6nfCCZuI1%2B4XTzqXy24VkXnT2Pslci4bcmniK%2B0KwIhANC7sv7ibWAFVT85Prnpxn6RxKAcQJQpu7S%2Fuxe9SZ81KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxairMjtgVI1I62r6kq3APIXMOAlA7SZGwfDx%2FEKeJ%2BjyWdiANn2hLnFkzC0I8QPvY2hnFGlnRD2d50aCtijNq4aKt8VdYHfcgT3zt3sqFW2pIHMbimzgLFwTKr36B6gZX15glK%2BPuhZfkZ2QEGl36cQ15qvMwY5LMS6LZGE6SaPCIqted4S%2F8WNM8Oexpyj5wIrl1DAQ%2BegbTyPRVE8%2FrbXlJv8e7a%2Fd2i7GfF0aYe3n%2FqLeFq%2BdCFbiAkfpAAzRbJeHVVfMxzITG%2B2y3Xdf%2B1E0IOSu8ehKEgoTGkEAsyNGy221H0QeW9r96GD2A9VGvL7y7XVp1M0cpcs4eTw2sdj9t8BggINCmgdLJXlTC%2BIFkOexa9h84s2Q0aChhZ%2BsMuqOojVpxClYuCHuzRWZFkSj8aN13ACD5bC2eX0z8GLfnx47XYzxFQ0q1ioNpqDtiV0ZjSJcUp4VIQLmOgsc4%2FP9zqM2hpERGLyD7ZWqi5z4Aek49HfAZRXlec2guHxz0z3FnCuYtS%2FFHgqZJueu6S1BJg8FTbcGUzaspb8PfgP5XFtKrc239bQm8iOWFDyXqpvdrbAysRvDbeywnfAFx2q6toln9KAlaaoqgvrtiyitbq1asWFIMCaiKl6YBmE5IU8AYOf6d5MfAzyDCgh%2BC%2FBjqkAaqf81GgSbvB4dIrZTPaSs1Y0MpZehAz1oTtR%2BzObbhMlwPdt%2Fsh2v%2FwiHOw2QZZbtZU6Jt9mICSKOJXln%2BgtRgHCW6aDEQP0uem31a99P6tP9KtkX3%2BYeWYNIWKlGzjY%2BNOTKrNY%2FGWAiM1SajQvs4N4hu16Tvv411YIf0TN8BanaR4lhYvV0K65W3eXX4Eb9D0Am1uUt4JdfY%2FXUEBJforiSyT&X-Amz-Signature=0872287dec01dd647c7086e6a56ddf81216af97efdf256fb79381613201802ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BECQS5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsa6nfCCZuI1%2B4XTzqXy24VkXnT2Pslci4bcmniK%2B0KwIhANC7sv7ibWAFVT85Prnpxn6RxKAcQJQpu7S%2Fuxe9SZ81KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxairMjtgVI1I62r6kq3APIXMOAlA7SZGwfDx%2FEKeJ%2BjyWdiANn2hLnFkzC0I8QPvY2hnFGlnRD2d50aCtijNq4aKt8VdYHfcgT3zt3sqFW2pIHMbimzgLFwTKr36B6gZX15glK%2BPuhZfkZ2QEGl36cQ15qvMwY5LMS6LZGE6SaPCIqted4S%2F8WNM8Oexpyj5wIrl1DAQ%2BegbTyPRVE8%2FrbXlJv8e7a%2Fd2i7GfF0aYe3n%2FqLeFq%2BdCFbiAkfpAAzRbJeHVVfMxzITG%2B2y3Xdf%2B1E0IOSu8ehKEgoTGkEAsyNGy221H0QeW9r96GD2A9VGvL7y7XVp1M0cpcs4eTw2sdj9t8BggINCmgdLJXlTC%2BIFkOexa9h84s2Q0aChhZ%2BsMuqOojVpxClYuCHuzRWZFkSj8aN13ACD5bC2eX0z8GLfnx47XYzxFQ0q1ioNpqDtiV0ZjSJcUp4VIQLmOgsc4%2FP9zqM2hpERGLyD7ZWqi5z4Aek49HfAZRXlec2guHxz0z3FnCuYtS%2FFHgqZJueu6S1BJg8FTbcGUzaspb8PfgP5XFtKrc239bQm8iOWFDyXqpvdrbAysRvDbeywnfAFx2q6toln9KAlaaoqgvrtiyitbq1asWFIMCaiKl6YBmE5IU8AYOf6d5MfAzyDCgh%2BC%2FBjqkAaqf81GgSbvB4dIrZTPaSs1Y0MpZehAz1oTtR%2BzObbhMlwPdt%2Fsh2v%2FwiHOw2QZZbtZU6Jt9mICSKOJXln%2BgtRgHCW6aDEQP0uem31a99P6tP9KtkX3%2BYeWYNIWKlGzjY%2BNOTKrNY%2FGWAiM1SajQvs4N4hu16Tvv411YIf0TN8BanaR4lhYvV0K65W3eXX4Eb9D0Am1uUt4JdfY%2FXUEBJforiSyT&X-Amz-Signature=de6a49de8349dbb9b68593adeaeed897f26b2af372fc2f608343896203212c99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BECQS5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsa6nfCCZuI1%2B4XTzqXy24VkXnT2Pslci4bcmniK%2B0KwIhANC7sv7ibWAFVT85Prnpxn6RxKAcQJQpu7S%2Fuxe9SZ81KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxairMjtgVI1I62r6kq3APIXMOAlA7SZGwfDx%2FEKeJ%2BjyWdiANn2hLnFkzC0I8QPvY2hnFGlnRD2d50aCtijNq4aKt8VdYHfcgT3zt3sqFW2pIHMbimzgLFwTKr36B6gZX15glK%2BPuhZfkZ2QEGl36cQ15qvMwY5LMS6LZGE6SaPCIqted4S%2F8WNM8Oexpyj5wIrl1DAQ%2BegbTyPRVE8%2FrbXlJv8e7a%2Fd2i7GfF0aYe3n%2FqLeFq%2BdCFbiAkfpAAzRbJeHVVfMxzITG%2B2y3Xdf%2B1E0IOSu8ehKEgoTGkEAsyNGy221H0QeW9r96GD2A9VGvL7y7XVp1M0cpcs4eTw2sdj9t8BggINCmgdLJXlTC%2BIFkOexa9h84s2Q0aChhZ%2BsMuqOojVpxClYuCHuzRWZFkSj8aN13ACD5bC2eX0z8GLfnx47XYzxFQ0q1ioNpqDtiV0ZjSJcUp4VIQLmOgsc4%2FP9zqM2hpERGLyD7ZWqi5z4Aek49HfAZRXlec2guHxz0z3FnCuYtS%2FFHgqZJueu6S1BJg8FTbcGUzaspb8PfgP5XFtKrc239bQm8iOWFDyXqpvdrbAysRvDbeywnfAFx2q6toln9KAlaaoqgvrtiyitbq1asWFIMCaiKl6YBmE5IU8AYOf6d5MfAzyDCgh%2BC%2FBjqkAaqf81GgSbvB4dIrZTPaSs1Y0MpZehAz1oTtR%2BzObbhMlwPdt%2Fsh2v%2FwiHOw2QZZbtZU6Jt9mICSKOJXln%2BgtRgHCW6aDEQP0uem31a99P6tP9KtkX3%2BYeWYNIWKlGzjY%2BNOTKrNY%2FGWAiM1SajQvs4N4hu16Tvv411YIf0TN8BanaR4lhYvV0K65W3eXX4Eb9D0Am1uUt4JdfY%2FXUEBJforiSyT&X-Amz-Signature=6b0de8ce694cd5a63e599638605d49b518eed31acb19d43031bb4cba32479a19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BECQS5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsa6nfCCZuI1%2B4XTzqXy24VkXnT2Pslci4bcmniK%2B0KwIhANC7sv7ibWAFVT85Prnpxn6RxKAcQJQpu7S%2Fuxe9SZ81KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxairMjtgVI1I62r6kq3APIXMOAlA7SZGwfDx%2FEKeJ%2BjyWdiANn2hLnFkzC0I8QPvY2hnFGlnRD2d50aCtijNq4aKt8VdYHfcgT3zt3sqFW2pIHMbimzgLFwTKr36B6gZX15glK%2BPuhZfkZ2QEGl36cQ15qvMwY5LMS6LZGE6SaPCIqted4S%2F8WNM8Oexpyj5wIrl1DAQ%2BegbTyPRVE8%2FrbXlJv8e7a%2Fd2i7GfF0aYe3n%2FqLeFq%2BdCFbiAkfpAAzRbJeHVVfMxzITG%2B2y3Xdf%2B1E0IOSu8ehKEgoTGkEAsyNGy221H0QeW9r96GD2A9VGvL7y7XVp1M0cpcs4eTw2sdj9t8BggINCmgdLJXlTC%2BIFkOexa9h84s2Q0aChhZ%2BsMuqOojVpxClYuCHuzRWZFkSj8aN13ACD5bC2eX0z8GLfnx47XYzxFQ0q1ioNpqDtiV0ZjSJcUp4VIQLmOgsc4%2FP9zqM2hpERGLyD7ZWqi5z4Aek49HfAZRXlec2guHxz0z3FnCuYtS%2FFHgqZJueu6S1BJg8FTbcGUzaspb8PfgP5XFtKrc239bQm8iOWFDyXqpvdrbAysRvDbeywnfAFx2q6toln9KAlaaoqgvrtiyitbq1asWFIMCaiKl6YBmE5IU8AYOf6d5MfAzyDCgh%2BC%2FBjqkAaqf81GgSbvB4dIrZTPaSs1Y0MpZehAz1oTtR%2BzObbhMlwPdt%2Fsh2v%2FwiHOw2QZZbtZU6Jt9mICSKOJXln%2BgtRgHCW6aDEQP0uem31a99P6tP9KtkX3%2BYeWYNIWKlGzjY%2BNOTKrNY%2FGWAiM1SajQvs4N4hu16Tvv411YIf0TN8BanaR4lhYvV0K65W3eXX4Eb9D0Am1uUt4JdfY%2FXUEBJforiSyT&X-Amz-Signature=79e15b24a3f46524ecb135a676fcba9948624b8d7011426e773d0bfe2a0f9e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BECQS5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsa6nfCCZuI1%2B4XTzqXy24VkXnT2Pslci4bcmniK%2B0KwIhANC7sv7ibWAFVT85Prnpxn6RxKAcQJQpu7S%2Fuxe9SZ81KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxairMjtgVI1I62r6kq3APIXMOAlA7SZGwfDx%2FEKeJ%2BjyWdiANn2hLnFkzC0I8QPvY2hnFGlnRD2d50aCtijNq4aKt8VdYHfcgT3zt3sqFW2pIHMbimzgLFwTKr36B6gZX15glK%2BPuhZfkZ2QEGl36cQ15qvMwY5LMS6LZGE6SaPCIqted4S%2F8WNM8Oexpyj5wIrl1DAQ%2BegbTyPRVE8%2FrbXlJv8e7a%2Fd2i7GfF0aYe3n%2FqLeFq%2BdCFbiAkfpAAzRbJeHVVfMxzITG%2B2y3Xdf%2B1E0IOSu8ehKEgoTGkEAsyNGy221H0QeW9r96GD2A9VGvL7y7XVp1M0cpcs4eTw2sdj9t8BggINCmgdLJXlTC%2BIFkOexa9h84s2Q0aChhZ%2BsMuqOojVpxClYuCHuzRWZFkSj8aN13ACD5bC2eX0z8GLfnx47XYzxFQ0q1ioNpqDtiV0ZjSJcUp4VIQLmOgsc4%2FP9zqM2hpERGLyD7ZWqi5z4Aek49HfAZRXlec2guHxz0z3FnCuYtS%2FFHgqZJueu6S1BJg8FTbcGUzaspb8PfgP5XFtKrc239bQm8iOWFDyXqpvdrbAysRvDbeywnfAFx2q6toln9KAlaaoqgvrtiyitbq1asWFIMCaiKl6YBmE5IU8AYOf6d5MfAzyDCgh%2BC%2FBjqkAaqf81GgSbvB4dIrZTPaSs1Y0MpZehAz1oTtR%2BzObbhMlwPdt%2Fsh2v%2FwiHOw2QZZbtZU6Jt9mICSKOJXln%2BgtRgHCW6aDEQP0uem31a99P6tP9KtkX3%2BYeWYNIWKlGzjY%2BNOTKrNY%2FGWAiM1SajQvs4N4hu16Tvv411YIf0TN8BanaR4lhYvV0K65W3eXX4Eb9D0Am1uUt4JdfY%2FXUEBJforiSyT&X-Amz-Signature=13b3a7285d034e8d903ab3b265dfd86179702cbc430eb01f0d7d9bf674472560&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BECQS5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsa6nfCCZuI1%2B4XTzqXy24VkXnT2Pslci4bcmniK%2B0KwIhANC7sv7ibWAFVT85Prnpxn6RxKAcQJQpu7S%2Fuxe9SZ81KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxairMjtgVI1I62r6kq3APIXMOAlA7SZGwfDx%2FEKeJ%2BjyWdiANn2hLnFkzC0I8QPvY2hnFGlnRD2d50aCtijNq4aKt8VdYHfcgT3zt3sqFW2pIHMbimzgLFwTKr36B6gZX15glK%2BPuhZfkZ2QEGl36cQ15qvMwY5LMS6LZGE6SaPCIqted4S%2F8WNM8Oexpyj5wIrl1DAQ%2BegbTyPRVE8%2FrbXlJv8e7a%2Fd2i7GfF0aYe3n%2FqLeFq%2BdCFbiAkfpAAzRbJeHVVfMxzITG%2B2y3Xdf%2B1E0IOSu8ehKEgoTGkEAsyNGy221H0QeW9r96GD2A9VGvL7y7XVp1M0cpcs4eTw2sdj9t8BggINCmgdLJXlTC%2BIFkOexa9h84s2Q0aChhZ%2BsMuqOojVpxClYuCHuzRWZFkSj8aN13ACD5bC2eX0z8GLfnx47XYzxFQ0q1ioNpqDtiV0ZjSJcUp4VIQLmOgsc4%2FP9zqM2hpERGLyD7ZWqi5z4Aek49HfAZRXlec2guHxz0z3FnCuYtS%2FFHgqZJueu6S1BJg8FTbcGUzaspb8PfgP5XFtKrc239bQm8iOWFDyXqpvdrbAysRvDbeywnfAFx2q6toln9KAlaaoqgvrtiyitbq1asWFIMCaiKl6YBmE5IU8AYOf6d5MfAzyDCgh%2BC%2FBjqkAaqf81GgSbvB4dIrZTPaSs1Y0MpZehAz1oTtR%2BzObbhMlwPdt%2Fsh2v%2FwiHOw2QZZbtZU6Jt9mICSKOJXln%2BgtRgHCW6aDEQP0uem31a99P6tP9KtkX3%2BYeWYNIWKlGzjY%2BNOTKrNY%2FGWAiM1SajQvs4N4hu16Tvv411YIf0TN8BanaR4lhYvV0K65W3eXX4Eb9D0Am1uUt4JdfY%2FXUEBJforiSyT&X-Amz-Signature=994d341d05d8d33efe6ef667c3e31848e13d372405e545e0e1407474bf8e384c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
