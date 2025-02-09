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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIGFDH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2FD2nUQ2yf67YZ5rO79BS0JdFkG1bt438GIqhwGlclAIgbrzEedjUYZYGlxH6%2BxQWqgQ0csLwvVHPMiRZhe%2BMegsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWwds1wNcbjZV%2BgEircA%2BKC%2FgpFYD4y4mXFS986JHxuWlRBvKpkftMH8p6EOQtIfS51EJ2Li0WV59VWsXoeulpM3fow%2F%2F14PCF7M%2F3%2Fhp9g9nqiChna2sNZr3LdBchuP7zG2yV%2FsMQjSAMMUDCwisEhILvfrCIJ71pKzQQivl9zyZscjJoPnD%2BoBCiRA8yQ3bb6y7UNNkgJPWymbU4dWbKd5U%2B7NKSwNu4IZN%2F9WYRjypiqfKGG1HhI5C%2BVsYyxb5l5WBmoUifl0zZM3pemVmmti8Ca3xJ%2FlsrasFLEdPJ1qE%2BNyv9lUlrFgregifxB1sDvgQvHgqragEc96NfsCCWbiMzjFLJ4qAFom8HbBF%2F11PPTjjHJ02mtmMelfjAJjlA%2BI4DoRrBvfq3pmXHANVBWu8%2BbqpxpuCQsgGlYkj4L2wTwenG%2Fm9%2B9ePVhtzkV6q8w1fdnPTFHLbqkp3MqHLgbnThjuGnRGZeJYDry1qzI9lFmawjPpLWtHRG%2FB3rKCOD68AWyYaqxF1DcSyrlPXomh%2BDCDw%2F7K3dnAH7Eu%2FkUhtTndXtzc1RGbdiQ3nUAC64CUQTlqh9HrnFhYFVXnJkDajNoinInCzaZx0LBXjn7%2FPi9jjAeEZAQpvPAzI5s9tbTpHrju13dbzdSMOK%2BoL0GOqUBwcckSVcUOgeg9QfDSrwvp2rDWNKqBgBAZY34R%2Bd9ud0zsYc%2Fff5YiEuJhRCNwEeePxaWjh0tmsq1rbWSvQ5J983p8KYmaMqwm8xIr6qsNcngheMbVQEmK4Efv%2BS0e4UvQhFrbmegWblQZWODMrIOjrj6ddf9A%2FSVSx9%2FzW4QRS%2BGguGEhau6QmrzCUJQIh%2F8kGdXklgP2kXhscqmw5AbklGsLXu%2B&X-Amz-Signature=7854b9f3c73dc35c5c2c0344dfcbe84123c696fca1c360502bde98c743200e24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIGFDH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2FD2nUQ2yf67YZ5rO79BS0JdFkG1bt438GIqhwGlclAIgbrzEedjUYZYGlxH6%2BxQWqgQ0csLwvVHPMiRZhe%2BMegsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWwds1wNcbjZV%2BgEircA%2BKC%2FgpFYD4y4mXFS986JHxuWlRBvKpkftMH8p6EOQtIfS51EJ2Li0WV59VWsXoeulpM3fow%2F%2F14PCF7M%2F3%2Fhp9g9nqiChna2sNZr3LdBchuP7zG2yV%2FsMQjSAMMUDCwisEhILvfrCIJ71pKzQQivl9zyZscjJoPnD%2BoBCiRA8yQ3bb6y7UNNkgJPWymbU4dWbKd5U%2B7NKSwNu4IZN%2F9WYRjypiqfKGG1HhI5C%2BVsYyxb5l5WBmoUifl0zZM3pemVmmti8Ca3xJ%2FlsrasFLEdPJ1qE%2BNyv9lUlrFgregifxB1sDvgQvHgqragEc96NfsCCWbiMzjFLJ4qAFom8HbBF%2F11PPTjjHJ02mtmMelfjAJjlA%2BI4DoRrBvfq3pmXHANVBWu8%2BbqpxpuCQsgGlYkj4L2wTwenG%2Fm9%2B9ePVhtzkV6q8w1fdnPTFHLbqkp3MqHLgbnThjuGnRGZeJYDry1qzI9lFmawjPpLWtHRG%2FB3rKCOD68AWyYaqxF1DcSyrlPXomh%2BDCDw%2F7K3dnAH7Eu%2FkUhtTndXtzc1RGbdiQ3nUAC64CUQTlqh9HrnFhYFVXnJkDajNoinInCzaZx0LBXjn7%2FPi9jjAeEZAQpvPAzI5s9tbTpHrju13dbzdSMOK%2BoL0GOqUBwcckSVcUOgeg9QfDSrwvp2rDWNKqBgBAZY34R%2Bd9ud0zsYc%2Fff5YiEuJhRCNwEeePxaWjh0tmsq1rbWSvQ5J983p8KYmaMqwm8xIr6qsNcngheMbVQEmK4Efv%2BS0e4UvQhFrbmegWblQZWODMrIOjrj6ddf9A%2FSVSx9%2FzW4QRS%2BGguGEhau6QmrzCUJQIh%2F8kGdXklgP2kXhscqmw5AbklGsLXu%2B&X-Amz-Signature=49799fe6834fc3b6424615a097032243cc804040331153818bceb7f10fe43ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIGFDH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2FD2nUQ2yf67YZ5rO79BS0JdFkG1bt438GIqhwGlclAIgbrzEedjUYZYGlxH6%2BxQWqgQ0csLwvVHPMiRZhe%2BMegsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWwds1wNcbjZV%2BgEircA%2BKC%2FgpFYD4y4mXFS986JHxuWlRBvKpkftMH8p6EOQtIfS51EJ2Li0WV59VWsXoeulpM3fow%2F%2F14PCF7M%2F3%2Fhp9g9nqiChna2sNZr3LdBchuP7zG2yV%2FsMQjSAMMUDCwisEhILvfrCIJ71pKzQQivl9zyZscjJoPnD%2BoBCiRA8yQ3bb6y7UNNkgJPWymbU4dWbKd5U%2B7NKSwNu4IZN%2F9WYRjypiqfKGG1HhI5C%2BVsYyxb5l5WBmoUifl0zZM3pemVmmti8Ca3xJ%2FlsrasFLEdPJ1qE%2BNyv9lUlrFgregifxB1sDvgQvHgqragEc96NfsCCWbiMzjFLJ4qAFom8HbBF%2F11PPTjjHJ02mtmMelfjAJjlA%2BI4DoRrBvfq3pmXHANVBWu8%2BbqpxpuCQsgGlYkj4L2wTwenG%2Fm9%2B9ePVhtzkV6q8w1fdnPTFHLbqkp3MqHLgbnThjuGnRGZeJYDry1qzI9lFmawjPpLWtHRG%2FB3rKCOD68AWyYaqxF1DcSyrlPXomh%2BDCDw%2F7K3dnAH7Eu%2FkUhtTndXtzc1RGbdiQ3nUAC64CUQTlqh9HrnFhYFVXnJkDajNoinInCzaZx0LBXjn7%2FPi9jjAeEZAQpvPAzI5s9tbTpHrju13dbzdSMOK%2BoL0GOqUBwcckSVcUOgeg9QfDSrwvp2rDWNKqBgBAZY34R%2Bd9ud0zsYc%2Fff5YiEuJhRCNwEeePxaWjh0tmsq1rbWSvQ5J983p8KYmaMqwm8xIr6qsNcngheMbVQEmK4Efv%2BS0e4UvQhFrbmegWblQZWODMrIOjrj6ddf9A%2FSVSx9%2FzW4QRS%2BGguGEhau6QmrzCUJQIh%2F8kGdXklgP2kXhscqmw5AbklGsLXu%2B&X-Amz-Signature=a05e80c4ec64b096c24f4c4baf9122ba8330843ee2d443c3c3b8ff0071263b12&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIGFDH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2FD2nUQ2yf67YZ5rO79BS0JdFkG1bt438GIqhwGlclAIgbrzEedjUYZYGlxH6%2BxQWqgQ0csLwvVHPMiRZhe%2BMegsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWwds1wNcbjZV%2BgEircA%2BKC%2FgpFYD4y4mXFS986JHxuWlRBvKpkftMH8p6EOQtIfS51EJ2Li0WV59VWsXoeulpM3fow%2F%2F14PCF7M%2F3%2Fhp9g9nqiChna2sNZr3LdBchuP7zG2yV%2FsMQjSAMMUDCwisEhILvfrCIJ71pKzQQivl9zyZscjJoPnD%2BoBCiRA8yQ3bb6y7UNNkgJPWymbU4dWbKd5U%2B7NKSwNu4IZN%2F9WYRjypiqfKGG1HhI5C%2BVsYyxb5l5WBmoUifl0zZM3pemVmmti8Ca3xJ%2FlsrasFLEdPJ1qE%2BNyv9lUlrFgregifxB1sDvgQvHgqragEc96NfsCCWbiMzjFLJ4qAFom8HbBF%2F11PPTjjHJ02mtmMelfjAJjlA%2BI4DoRrBvfq3pmXHANVBWu8%2BbqpxpuCQsgGlYkj4L2wTwenG%2Fm9%2B9ePVhtzkV6q8w1fdnPTFHLbqkp3MqHLgbnThjuGnRGZeJYDry1qzI9lFmawjPpLWtHRG%2FB3rKCOD68AWyYaqxF1DcSyrlPXomh%2BDCDw%2F7K3dnAH7Eu%2FkUhtTndXtzc1RGbdiQ3nUAC64CUQTlqh9HrnFhYFVXnJkDajNoinInCzaZx0LBXjn7%2FPi9jjAeEZAQpvPAzI5s9tbTpHrju13dbzdSMOK%2BoL0GOqUBwcckSVcUOgeg9QfDSrwvp2rDWNKqBgBAZY34R%2Bd9ud0zsYc%2Fff5YiEuJhRCNwEeePxaWjh0tmsq1rbWSvQ5J983p8KYmaMqwm8xIr6qsNcngheMbVQEmK4Efv%2BS0e4UvQhFrbmegWblQZWODMrIOjrj6ddf9A%2FSVSx9%2FzW4QRS%2BGguGEhau6QmrzCUJQIh%2F8kGdXklgP2kXhscqmw5AbklGsLXu%2B&X-Amz-Signature=bd0c93ea9f4e9855fc44f9509eb83b4ed6d0da5724dba865ffb1838f09619075&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIGFDH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2FD2nUQ2yf67YZ5rO79BS0JdFkG1bt438GIqhwGlclAIgbrzEedjUYZYGlxH6%2BxQWqgQ0csLwvVHPMiRZhe%2BMegsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWwds1wNcbjZV%2BgEircA%2BKC%2FgpFYD4y4mXFS986JHxuWlRBvKpkftMH8p6EOQtIfS51EJ2Li0WV59VWsXoeulpM3fow%2F%2F14PCF7M%2F3%2Fhp9g9nqiChna2sNZr3LdBchuP7zG2yV%2FsMQjSAMMUDCwisEhILvfrCIJ71pKzQQivl9zyZscjJoPnD%2BoBCiRA8yQ3bb6y7UNNkgJPWymbU4dWbKd5U%2B7NKSwNu4IZN%2F9WYRjypiqfKGG1HhI5C%2BVsYyxb5l5WBmoUifl0zZM3pemVmmti8Ca3xJ%2FlsrasFLEdPJ1qE%2BNyv9lUlrFgregifxB1sDvgQvHgqragEc96NfsCCWbiMzjFLJ4qAFom8HbBF%2F11PPTjjHJ02mtmMelfjAJjlA%2BI4DoRrBvfq3pmXHANVBWu8%2BbqpxpuCQsgGlYkj4L2wTwenG%2Fm9%2B9ePVhtzkV6q8w1fdnPTFHLbqkp3MqHLgbnThjuGnRGZeJYDry1qzI9lFmawjPpLWtHRG%2FB3rKCOD68AWyYaqxF1DcSyrlPXomh%2BDCDw%2F7K3dnAH7Eu%2FkUhtTndXtzc1RGbdiQ3nUAC64CUQTlqh9HrnFhYFVXnJkDajNoinInCzaZx0LBXjn7%2FPi9jjAeEZAQpvPAzI5s9tbTpHrju13dbzdSMOK%2BoL0GOqUBwcckSVcUOgeg9QfDSrwvp2rDWNKqBgBAZY34R%2Bd9ud0zsYc%2Fff5YiEuJhRCNwEeePxaWjh0tmsq1rbWSvQ5J983p8KYmaMqwm8xIr6qsNcngheMbVQEmK4Efv%2BS0e4UvQhFrbmegWblQZWODMrIOjrj6ddf9A%2FSVSx9%2FzW4QRS%2BGguGEhau6QmrzCUJQIh%2F8kGdXklgP2kXhscqmw5AbklGsLXu%2B&X-Amz-Signature=b3a7c66ea600d5d2cd70d271bf88969c6d18b5a1178baff11fc6187b50fa773c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIGFDH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2FD2nUQ2yf67YZ5rO79BS0JdFkG1bt438GIqhwGlclAIgbrzEedjUYZYGlxH6%2BxQWqgQ0csLwvVHPMiRZhe%2BMegsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWwds1wNcbjZV%2BgEircA%2BKC%2FgpFYD4y4mXFS986JHxuWlRBvKpkftMH8p6EOQtIfS51EJ2Li0WV59VWsXoeulpM3fow%2F%2F14PCF7M%2F3%2Fhp9g9nqiChna2sNZr3LdBchuP7zG2yV%2FsMQjSAMMUDCwisEhILvfrCIJ71pKzQQivl9zyZscjJoPnD%2BoBCiRA8yQ3bb6y7UNNkgJPWymbU4dWbKd5U%2B7NKSwNu4IZN%2F9WYRjypiqfKGG1HhI5C%2BVsYyxb5l5WBmoUifl0zZM3pemVmmti8Ca3xJ%2FlsrasFLEdPJ1qE%2BNyv9lUlrFgregifxB1sDvgQvHgqragEc96NfsCCWbiMzjFLJ4qAFom8HbBF%2F11PPTjjHJ02mtmMelfjAJjlA%2BI4DoRrBvfq3pmXHANVBWu8%2BbqpxpuCQsgGlYkj4L2wTwenG%2Fm9%2B9ePVhtzkV6q8w1fdnPTFHLbqkp3MqHLgbnThjuGnRGZeJYDry1qzI9lFmawjPpLWtHRG%2FB3rKCOD68AWyYaqxF1DcSyrlPXomh%2BDCDw%2F7K3dnAH7Eu%2FkUhtTndXtzc1RGbdiQ3nUAC64CUQTlqh9HrnFhYFVXnJkDajNoinInCzaZx0LBXjn7%2FPi9jjAeEZAQpvPAzI5s9tbTpHrju13dbzdSMOK%2BoL0GOqUBwcckSVcUOgeg9QfDSrwvp2rDWNKqBgBAZY34R%2Bd9ud0zsYc%2Fff5YiEuJhRCNwEeePxaWjh0tmsq1rbWSvQ5J983p8KYmaMqwm8xIr6qsNcngheMbVQEmK4Efv%2BS0e4UvQhFrbmegWblQZWODMrIOjrj6ddf9A%2FSVSx9%2FzW4QRS%2BGguGEhau6QmrzCUJQIh%2F8kGdXklgP2kXhscqmw5AbklGsLXu%2B&X-Amz-Signature=779ee9a4a66114c9517f80af160e2623cc90be971eb0d0608e32e51576dc4744&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIGFDH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2FD2nUQ2yf67YZ5rO79BS0JdFkG1bt438GIqhwGlclAIgbrzEedjUYZYGlxH6%2BxQWqgQ0csLwvVHPMiRZhe%2BMegsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWwds1wNcbjZV%2BgEircA%2BKC%2FgpFYD4y4mXFS986JHxuWlRBvKpkftMH8p6EOQtIfS51EJ2Li0WV59VWsXoeulpM3fow%2F%2F14PCF7M%2F3%2Fhp9g9nqiChna2sNZr3LdBchuP7zG2yV%2FsMQjSAMMUDCwisEhILvfrCIJ71pKzQQivl9zyZscjJoPnD%2BoBCiRA8yQ3bb6y7UNNkgJPWymbU4dWbKd5U%2B7NKSwNu4IZN%2F9WYRjypiqfKGG1HhI5C%2BVsYyxb5l5WBmoUifl0zZM3pemVmmti8Ca3xJ%2FlsrasFLEdPJ1qE%2BNyv9lUlrFgregifxB1sDvgQvHgqragEc96NfsCCWbiMzjFLJ4qAFom8HbBF%2F11PPTjjHJ02mtmMelfjAJjlA%2BI4DoRrBvfq3pmXHANVBWu8%2BbqpxpuCQsgGlYkj4L2wTwenG%2Fm9%2B9ePVhtzkV6q8w1fdnPTFHLbqkp3MqHLgbnThjuGnRGZeJYDry1qzI9lFmawjPpLWtHRG%2FB3rKCOD68AWyYaqxF1DcSyrlPXomh%2BDCDw%2F7K3dnAH7Eu%2FkUhtTndXtzc1RGbdiQ3nUAC64CUQTlqh9HrnFhYFVXnJkDajNoinInCzaZx0LBXjn7%2FPi9jjAeEZAQpvPAzI5s9tbTpHrju13dbzdSMOK%2BoL0GOqUBwcckSVcUOgeg9QfDSrwvp2rDWNKqBgBAZY34R%2Bd9ud0zsYc%2Fff5YiEuJhRCNwEeePxaWjh0tmsq1rbWSvQ5J983p8KYmaMqwm8xIr6qsNcngheMbVQEmK4Efv%2BS0e4UvQhFrbmegWblQZWODMrIOjrj6ddf9A%2FSVSx9%2FzW4QRS%2BGguGEhau6QmrzCUJQIh%2F8kGdXklgP2kXhscqmw5AbklGsLXu%2B&X-Amz-Signature=3e9226e5360e6fe58d781ecc1e73aa8666015e1b35edefc960094fe52dbf8d18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIGFDH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2FD2nUQ2yf67YZ5rO79BS0JdFkG1bt438GIqhwGlclAIgbrzEedjUYZYGlxH6%2BxQWqgQ0csLwvVHPMiRZhe%2BMegsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWwds1wNcbjZV%2BgEircA%2BKC%2FgpFYD4y4mXFS986JHxuWlRBvKpkftMH8p6EOQtIfS51EJ2Li0WV59VWsXoeulpM3fow%2F%2F14PCF7M%2F3%2Fhp9g9nqiChna2sNZr3LdBchuP7zG2yV%2FsMQjSAMMUDCwisEhILvfrCIJ71pKzQQivl9zyZscjJoPnD%2BoBCiRA8yQ3bb6y7UNNkgJPWymbU4dWbKd5U%2B7NKSwNu4IZN%2F9WYRjypiqfKGG1HhI5C%2BVsYyxb5l5WBmoUifl0zZM3pemVmmti8Ca3xJ%2FlsrasFLEdPJ1qE%2BNyv9lUlrFgregifxB1sDvgQvHgqragEc96NfsCCWbiMzjFLJ4qAFom8HbBF%2F11PPTjjHJ02mtmMelfjAJjlA%2BI4DoRrBvfq3pmXHANVBWu8%2BbqpxpuCQsgGlYkj4L2wTwenG%2Fm9%2B9ePVhtzkV6q8w1fdnPTFHLbqkp3MqHLgbnThjuGnRGZeJYDry1qzI9lFmawjPpLWtHRG%2FB3rKCOD68AWyYaqxF1DcSyrlPXomh%2BDCDw%2F7K3dnAH7Eu%2FkUhtTndXtzc1RGbdiQ3nUAC64CUQTlqh9HrnFhYFVXnJkDajNoinInCzaZx0LBXjn7%2FPi9jjAeEZAQpvPAzI5s9tbTpHrju13dbzdSMOK%2BoL0GOqUBwcckSVcUOgeg9QfDSrwvp2rDWNKqBgBAZY34R%2Bd9ud0zsYc%2Fff5YiEuJhRCNwEeePxaWjh0tmsq1rbWSvQ5J983p8KYmaMqwm8xIr6qsNcngheMbVQEmK4Efv%2BS0e4UvQhFrbmegWblQZWODMrIOjrj6ddf9A%2FSVSx9%2FzW4QRS%2BGguGEhau6QmrzCUJQIh%2F8kGdXklgP2kXhscqmw5AbklGsLXu%2B&X-Amz-Signature=1af271ac046d7e49aa57c72d27bbd13fa5eb0cefa035f21c0e18fa287518e9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
