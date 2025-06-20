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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRBI4NW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICckJDxOxuWXgqWzjiG%2FIuXEwzoSxT1f8h%2F3QVqn1BqGAiEA49Ty5GCHydTjqNq6KbsDgOolzPKi7mwwcsQ%2FxRyjCRwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGNMyMuFqkmBjpitSrcAyz2lsxfgKIGw%2F0t1MXUIkbaEMElL0XmB4EDjHfh1R%2B%2F0Dom%2FEDCihUiV%2FbEzNwwuqlSzLIIfjUVOhTCDlyt41qKl2qV7VrKR0wH8Q6XJdTyxCGsJilW2FN6RkTN70zIBPlRaMETdPH8qIt2J0i1GmRyD4xYiVBILjJ8eF88968Yqp20AEpmo9fy%2B0NprscBxDrTqZ%2FvB5AqzGtumbS5jtBgM23jjCHOl6oEsS9LiBD14wNth1aI%2FaZpJ56U274m5kyPflRENZ%2FncyPrQO2aTJykL3bgTeI2%2BZFF7XMmXrutsLQe9mhBxdjmc17S%2FUfXx1fcBYdynczusHN5h3NJNBixt5TmYKAEYexwsUdcgV%2FSAO7pw93r7ixxpe%2B%2F%2B6sLK5h%2FJt3kvxMkqkAAsDLGasu9wZ3lbFoC0cYzMWq%2Fe%2BVnWQzEoVh%2FztC8qTmaND8sRFBcXYxhGjgik43T0RgcbYMfAiylp2GHGK6jNCcM%2BTTj5t3HhmenzgZ%2FmVmgqqScwdpSGFWNvWsPEKlqgksVdfxc6yyP3ejFEfM9YIfDh0onJyDswVyfQjN6FPhLYFBlFrAbg554unTAzSNFLYMPOsvitulI97yLbP5RK49lwxoW5a%2FX%2FvUUcjxH5iB7MMyh18IGOqUBGNqnCmGv1PhcV4YSAbPuIKciMC24Eh9e6ovyFvMsRvFKB5Cve%2BPCytjqkZk3utmOEsQB2deJ8%2B3%2FLcZ2SdEOzhfr4kypLF%2FVARbEZGyYGG2VfQ4caViiYV6%2Fc7Bdm5wStTcMDBOaCRjpLe2bPM0GN%2BGBxmc8w9Mrh2CioOVkIQtVJZv%2FEkfpU1I7VgP6ogGCMYDmwlhhjIQFjTRnH0pjKd9m%2BapK&X-Amz-Signature=86569c3f0c482096f0150c3512095fccabae7928285b0f2d34b4dbc106c5ef37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRBI4NW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICckJDxOxuWXgqWzjiG%2FIuXEwzoSxT1f8h%2F3QVqn1BqGAiEA49Ty5GCHydTjqNq6KbsDgOolzPKi7mwwcsQ%2FxRyjCRwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGNMyMuFqkmBjpitSrcAyz2lsxfgKIGw%2F0t1MXUIkbaEMElL0XmB4EDjHfh1R%2B%2F0Dom%2FEDCihUiV%2FbEzNwwuqlSzLIIfjUVOhTCDlyt41qKl2qV7VrKR0wH8Q6XJdTyxCGsJilW2FN6RkTN70zIBPlRaMETdPH8qIt2J0i1GmRyD4xYiVBILjJ8eF88968Yqp20AEpmo9fy%2B0NprscBxDrTqZ%2FvB5AqzGtumbS5jtBgM23jjCHOl6oEsS9LiBD14wNth1aI%2FaZpJ56U274m5kyPflRENZ%2FncyPrQO2aTJykL3bgTeI2%2BZFF7XMmXrutsLQe9mhBxdjmc17S%2FUfXx1fcBYdynczusHN5h3NJNBixt5TmYKAEYexwsUdcgV%2FSAO7pw93r7ixxpe%2B%2F%2B6sLK5h%2FJt3kvxMkqkAAsDLGasu9wZ3lbFoC0cYzMWq%2Fe%2BVnWQzEoVh%2FztC8qTmaND8sRFBcXYxhGjgik43T0RgcbYMfAiylp2GHGK6jNCcM%2BTTj5t3HhmenzgZ%2FmVmgqqScwdpSGFWNvWsPEKlqgksVdfxc6yyP3ejFEfM9YIfDh0onJyDswVyfQjN6FPhLYFBlFrAbg554unTAzSNFLYMPOsvitulI97yLbP5RK49lwxoW5a%2FX%2FvUUcjxH5iB7MMyh18IGOqUBGNqnCmGv1PhcV4YSAbPuIKciMC24Eh9e6ovyFvMsRvFKB5Cve%2BPCytjqkZk3utmOEsQB2deJ8%2B3%2FLcZ2SdEOzhfr4kypLF%2FVARbEZGyYGG2VfQ4caViiYV6%2Fc7Bdm5wStTcMDBOaCRjpLe2bPM0GN%2BGBxmc8w9Mrh2CioOVkIQtVJZv%2FEkfpU1I7VgP6ogGCMYDmwlhhjIQFjTRnH0pjKd9m%2BapK&X-Amz-Signature=ba41f0a20e41463051a9662506fcae4d5c143596e06387632b6b3d1cdf97eb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRBI4NW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICckJDxOxuWXgqWzjiG%2FIuXEwzoSxT1f8h%2F3QVqn1BqGAiEA49Ty5GCHydTjqNq6KbsDgOolzPKi7mwwcsQ%2FxRyjCRwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGNMyMuFqkmBjpitSrcAyz2lsxfgKIGw%2F0t1MXUIkbaEMElL0XmB4EDjHfh1R%2B%2F0Dom%2FEDCihUiV%2FbEzNwwuqlSzLIIfjUVOhTCDlyt41qKl2qV7VrKR0wH8Q6XJdTyxCGsJilW2FN6RkTN70zIBPlRaMETdPH8qIt2J0i1GmRyD4xYiVBILjJ8eF88968Yqp20AEpmo9fy%2B0NprscBxDrTqZ%2FvB5AqzGtumbS5jtBgM23jjCHOl6oEsS9LiBD14wNth1aI%2FaZpJ56U274m5kyPflRENZ%2FncyPrQO2aTJykL3bgTeI2%2BZFF7XMmXrutsLQe9mhBxdjmc17S%2FUfXx1fcBYdynczusHN5h3NJNBixt5TmYKAEYexwsUdcgV%2FSAO7pw93r7ixxpe%2B%2F%2B6sLK5h%2FJt3kvxMkqkAAsDLGasu9wZ3lbFoC0cYzMWq%2Fe%2BVnWQzEoVh%2FztC8qTmaND8sRFBcXYxhGjgik43T0RgcbYMfAiylp2GHGK6jNCcM%2BTTj5t3HhmenzgZ%2FmVmgqqScwdpSGFWNvWsPEKlqgksVdfxc6yyP3ejFEfM9YIfDh0onJyDswVyfQjN6FPhLYFBlFrAbg554unTAzSNFLYMPOsvitulI97yLbP5RK49lwxoW5a%2FX%2FvUUcjxH5iB7MMyh18IGOqUBGNqnCmGv1PhcV4YSAbPuIKciMC24Eh9e6ovyFvMsRvFKB5Cve%2BPCytjqkZk3utmOEsQB2deJ8%2B3%2FLcZ2SdEOzhfr4kypLF%2FVARbEZGyYGG2VfQ4caViiYV6%2Fc7Bdm5wStTcMDBOaCRjpLe2bPM0GN%2BGBxmc8w9Mrh2CioOVkIQtVJZv%2FEkfpU1I7VgP6ogGCMYDmwlhhjIQFjTRnH0pjKd9m%2BapK&X-Amz-Signature=e2ded12d82cee447a8f2a64d0f1c4a25d0ceb6288b6601473d732aa204b4be2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRBI4NW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICckJDxOxuWXgqWzjiG%2FIuXEwzoSxT1f8h%2F3QVqn1BqGAiEA49Ty5GCHydTjqNq6KbsDgOolzPKi7mwwcsQ%2FxRyjCRwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGNMyMuFqkmBjpitSrcAyz2lsxfgKIGw%2F0t1MXUIkbaEMElL0XmB4EDjHfh1R%2B%2F0Dom%2FEDCihUiV%2FbEzNwwuqlSzLIIfjUVOhTCDlyt41qKl2qV7VrKR0wH8Q6XJdTyxCGsJilW2FN6RkTN70zIBPlRaMETdPH8qIt2J0i1GmRyD4xYiVBILjJ8eF88968Yqp20AEpmo9fy%2B0NprscBxDrTqZ%2FvB5AqzGtumbS5jtBgM23jjCHOl6oEsS9LiBD14wNth1aI%2FaZpJ56U274m5kyPflRENZ%2FncyPrQO2aTJykL3bgTeI2%2BZFF7XMmXrutsLQe9mhBxdjmc17S%2FUfXx1fcBYdynczusHN5h3NJNBixt5TmYKAEYexwsUdcgV%2FSAO7pw93r7ixxpe%2B%2F%2B6sLK5h%2FJt3kvxMkqkAAsDLGasu9wZ3lbFoC0cYzMWq%2Fe%2BVnWQzEoVh%2FztC8qTmaND8sRFBcXYxhGjgik43T0RgcbYMfAiylp2GHGK6jNCcM%2BTTj5t3HhmenzgZ%2FmVmgqqScwdpSGFWNvWsPEKlqgksVdfxc6yyP3ejFEfM9YIfDh0onJyDswVyfQjN6FPhLYFBlFrAbg554unTAzSNFLYMPOsvitulI97yLbP5RK49lwxoW5a%2FX%2FvUUcjxH5iB7MMyh18IGOqUBGNqnCmGv1PhcV4YSAbPuIKciMC24Eh9e6ovyFvMsRvFKB5Cve%2BPCytjqkZk3utmOEsQB2deJ8%2B3%2FLcZ2SdEOzhfr4kypLF%2FVARbEZGyYGG2VfQ4caViiYV6%2Fc7Bdm5wStTcMDBOaCRjpLe2bPM0GN%2BGBxmc8w9Mrh2CioOVkIQtVJZv%2FEkfpU1I7VgP6ogGCMYDmwlhhjIQFjTRnH0pjKd9m%2BapK&X-Amz-Signature=b693c95269836389c1a985293235ac5c82430bf3402e696f7aa9af283c2fa6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRBI4NW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICckJDxOxuWXgqWzjiG%2FIuXEwzoSxT1f8h%2F3QVqn1BqGAiEA49Ty5GCHydTjqNq6KbsDgOolzPKi7mwwcsQ%2FxRyjCRwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGNMyMuFqkmBjpitSrcAyz2lsxfgKIGw%2F0t1MXUIkbaEMElL0XmB4EDjHfh1R%2B%2F0Dom%2FEDCihUiV%2FbEzNwwuqlSzLIIfjUVOhTCDlyt41qKl2qV7VrKR0wH8Q6XJdTyxCGsJilW2FN6RkTN70zIBPlRaMETdPH8qIt2J0i1GmRyD4xYiVBILjJ8eF88968Yqp20AEpmo9fy%2B0NprscBxDrTqZ%2FvB5AqzGtumbS5jtBgM23jjCHOl6oEsS9LiBD14wNth1aI%2FaZpJ56U274m5kyPflRENZ%2FncyPrQO2aTJykL3bgTeI2%2BZFF7XMmXrutsLQe9mhBxdjmc17S%2FUfXx1fcBYdynczusHN5h3NJNBixt5TmYKAEYexwsUdcgV%2FSAO7pw93r7ixxpe%2B%2F%2B6sLK5h%2FJt3kvxMkqkAAsDLGasu9wZ3lbFoC0cYzMWq%2Fe%2BVnWQzEoVh%2FztC8qTmaND8sRFBcXYxhGjgik43T0RgcbYMfAiylp2GHGK6jNCcM%2BTTj5t3HhmenzgZ%2FmVmgqqScwdpSGFWNvWsPEKlqgksVdfxc6yyP3ejFEfM9YIfDh0onJyDswVyfQjN6FPhLYFBlFrAbg554unTAzSNFLYMPOsvitulI97yLbP5RK49lwxoW5a%2FX%2FvUUcjxH5iB7MMyh18IGOqUBGNqnCmGv1PhcV4YSAbPuIKciMC24Eh9e6ovyFvMsRvFKB5Cve%2BPCytjqkZk3utmOEsQB2deJ8%2B3%2FLcZ2SdEOzhfr4kypLF%2FVARbEZGyYGG2VfQ4caViiYV6%2Fc7Bdm5wStTcMDBOaCRjpLe2bPM0GN%2BGBxmc8w9Mrh2CioOVkIQtVJZv%2FEkfpU1I7VgP6ogGCMYDmwlhhjIQFjTRnH0pjKd9m%2BapK&X-Amz-Signature=781e2d175d47b86e9d0c137373ffb803519bf8c6be14aaeddec61b87e2a589f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRBI4NW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICckJDxOxuWXgqWzjiG%2FIuXEwzoSxT1f8h%2F3QVqn1BqGAiEA49Ty5GCHydTjqNq6KbsDgOolzPKi7mwwcsQ%2FxRyjCRwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGNMyMuFqkmBjpitSrcAyz2lsxfgKIGw%2F0t1MXUIkbaEMElL0XmB4EDjHfh1R%2B%2F0Dom%2FEDCihUiV%2FbEzNwwuqlSzLIIfjUVOhTCDlyt41qKl2qV7VrKR0wH8Q6XJdTyxCGsJilW2FN6RkTN70zIBPlRaMETdPH8qIt2J0i1GmRyD4xYiVBILjJ8eF88968Yqp20AEpmo9fy%2B0NprscBxDrTqZ%2FvB5AqzGtumbS5jtBgM23jjCHOl6oEsS9LiBD14wNth1aI%2FaZpJ56U274m5kyPflRENZ%2FncyPrQO2aTJykL3bgTeI2%2BZFF7XMmXrutsLQe9mhBxdjmc17S%2FUfXx1fcBYdynczusHN5h3NJNBixt5TmYKAEYexwsUdcgV%2FSAO7pw93r7ixxpe%2B%2F%2B6sLK5h%2FJt3kvxMkqkAAsDLGasu9wZ3lbFoC0cYzMWq%2Fe%2BVnWQzEoVh%2FztC8qTmaND8sRFBcXYxhGjgik43T0RgcbYMfAiylp2GHGK6jNCcM%2BTTj5t3HhmenzgZ%2FmVmgqqScwdpSGFWNvWsPEKlqgksVdfxc6yyP3ejFEfM9YIfDh0onJyDswVyfQjN6FPhLYFBlFrAbg554unTAzSNFLYMPOsvitulI97yLbP5RK49lwxoW5a%2FX%2FvUUcjxH5iB7MMyh18IGOqUBGNqnCmGv1PhcV4YSAbPuIKciMC24Eh9e6ovyFvMsRvFKB5Cve%2BPCytjqkZk3utmOEsQB2deJ8%2B3%2FLcZ2SdEOzhfr4kypLF%2FVARbEZGyYGG2VfQ4caViiYV6%2Fc7Bdm5wStTcMDBOaCRjpLe2bPM0GN%2BGBxmc8w9Mrh2CioOVkIQtVJZv%2FEkfpU1I7VgP6ogGCMYDmwlhhjIQFjTRnH0pjKd9m%2BapK&X-Amz-Signature=b7527a57802d74d5f84e68d2264221e133796ab219a4869b323983c0ec87d1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRBI4NW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICckJDxOxuWXgqWzjiG%2FIuXEwzoSxT1f8h%2F3QVqn1BqGAiEA49Ty5GCHydTjqNq6KbsDgOolzPKi7mwwcsQ%2FxRyjCRwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGNMyMuFqkmBjpitSrcAyz2lsxfgKIGw%2F0t1MXUIkbaEMElL0XmB4EDjHfh1R%2B%2F0Dom%2FEDCihUiV%2FbEzNwwuqlSzLIIfjUVOhTCDlyt41qKl2qV7VrKR0wH8Q6XJdTyxCGsJilW2FN6RkTN70zIBPlRaMETdPH8qIt2J0i1GmRyD4xYiVBILjJ8eF88968Yqp20AEpmo9fy%2B0NprscBxDrTqZ%2FvB5AqzGtumbS5jtBgM23jjCHOl6oEsS9LiBD14wNth1aI%2FaZpJ56U274m5kyPflRENZ%2FncyPrQO2aTJykL3bgTeI2%2BZFF7XMmXrutsLQe9mhBxdjmc17S%2FUfXx1fcBYdynczusHN5h3NJNBixt5TmYKAEYexwsUdcgV%2FSAO7pw93r7ixxpe%2B%2F%2B6sLK5h%2FJt3kvxMkqkAAsDLGasu9wZ3lbFoC0cYzMWq%2Fe%2BVnWQzEoVh%2FztC8qTmaND8sRFBcXYxhGjgik43T0RgcbYMfAiylp2GHGK6jNCcM%2BTTj5t3HhmenzgZ%2FmVmgqqScwdpSGFWNvWsPEKlqgksVdfxc6yyP3ejFEfM9YIfDh0onJyDswVyfQjN6FPhLYFBlFrAbg554unTAzSNFLYMPOsvitulI97yLbP5RK49lwxoW5a%2FX%2FvUUcjxH5iB7MMyh18IGOqUBGNqnCmGv1PhcV4YSAbPuIKciMC24Eh9e6ovyFvMsRvFKB5Cve%2BPCytjqkZk3utmOEsQB2deJ8%2B3%2FLcZ2SdEOzhfr4kypLF%2FVARbEZGyYGG2VfQ4caViiYV6%2Fc7Bdm5wStTcMDBOaCRjpLe2bPM0GN%2BGBxmc8w9Mrh2CioOVkIQtVJZv%2FEkfpU1I7VgP6ogGCMYDmwlhhjIQFjTRnH0pjKd9m%2BapK&X-Amz-Signature=082aebd7f24bc6059ef67944bf2fa683e351e0f35ce1edc3d647a7e7247c6156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRBI4NW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICckJDxOxuWXgqWzjiG%2FIuXEwzoSxT1f8h%2F3QVqn1BqGAiEA49Ty5GCHydTjqNq6KbsDgOolzPKi7mwwcsQ%2FxRyjCRwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGNMyMuFqkmBjpitSrcAyz2lsxfgKIGw%2F0t1MXUIkbaEMElL0XmB4EDjHfh1R%2B%2F0Dom%2FEDCihUiV%2FbEzNwwuqlSzLIIfjUVOhTCDlyt41qKl2qV7VrKR0wH8Q6XJdTyxCGsJilW2FN6RkTN70zIBPlRaMETdPH8qIt2J0i1GmRyD4xYiVBILjJ8eF88968Yqp20AEpmo9fy%2B0NprscBxDrTqZ%2FvB5AqzGtumbS5jtBgM23jjCHOl6oEsS9LiBD14wNth1aI%2FaZpJ56U274m5kyPflRENZ%2FncyPrQO2aTJykL3bgTeI2%2BZFF7XMmXrutsLQe9mhBxdjmc17S%2FUfXx1fcBYdynczusHN5h3NJNBixt5TmYKAEYexwsUdcgV%2FSAO7pw93r7ixxpe%2B%2F%2B6sLK5h%2FJt3kvxMkqkAAsDLGasu9wZ3lbFoC0cYzMWq%2Fe%2BVnWQzEoVh%2FztC8qTmaND8sRFBcXYxhGjgik43T0RgcbYMfAiylp2GHGK6jNCcM%2BTTj5t3HhmenzgZ%2FmVmgqqScwdpSGFWNvWsPEKlqgksVdfxc6yyP3ejFEfM9YIfDh0onJyDswVyfQjN6FPhLYFBlFrAbg554unTAzSNFLYMPOsvitulI97yLbP5RK49lwxoW5a%2FX%2FvUUcjxH5iB7MMyh18IGOqUBGNqnCmGv1PhcV4YSAbPuIKciMC24Eh9e6ovyFvMsRvFKB5Cve%2BPCytjqkZk3utmOEsQB2deJ8%2B3%2FLcZ2SdEOzhfr4kypLF%2FVARbEZGyYGG2VfQ4caViiYV6%2Fc7Bdm5wStTcMDBOaCRjpLe2bPM0GN%2BGBxmc8w9Mrh2CioOVkIQtVJZv%2FEkfpU1I7VgP6ogGCMYDmwlhhjIQFjTRnH0pjKd9m%2BapK&X-Amz-Signature=56de3df43b9a48832c20f5f1083c08043815a824028f9467eaa3877c1dd94649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
