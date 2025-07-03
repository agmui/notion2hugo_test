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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOGEDQ2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGip4GATVwybgir3jDEtooY8iboD0qMbsbiTlZnHd362AiEAsiMqxPk4N2plYZ8dKtF5HRlMq8GYyjYpqrBTjAp1QMAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDImuHDaFgkOTVm0qmyrcAxZ2E8xkouWpjEsBnTQHhRgHzAFeBwS9VJox74Fb1T0jhaaUmltNp0WtCoN59WXuEvO6sMSq%2B2s34TaGB7iDlkw9S0PT6r9GvnHC75Zk8P7H%2BebzZTzQiIC6BPnck3dJ%2BhgOSs4T8T3x9Q7nkERpt2M9vDJhekWW1we6BF4TM5NgLHbf5%2Fs3xTBCYdbVWZeR0%2FyRQcc4K0rW%2FtSFQDFiD5P%2FYQpJhiYOBo2n9cvUOND6EwfxUewdcwpoxYCO3wECJHtolfN6lDD98njum%2B2hvLraP9qxjN%2FVYT8RUCBV%2F9xa%2FF%2B6LNogIH7fwjkc4jjZL4DEXnZJFpMO%2FGLxuNa4Hoys0eL92Xlv3S3beX90%2B64%2BV%2FXCU9aUZWqAbSGx8GUU4bpgUbAKq3%2FJdZdfq972unSXjEmUairqYRHcHl8svPqPUNWXUWNvUI%2BOoRv8oY5MdM%2Fx8O5SuLQXdkAoy1m1X8Ek1WIYPwAa1KM%2BcTNgfiNnVoAQnJxrAQyknYh%2Fldd0M%2FZfFOTIle%2FKKt5lrQM%2FhtZioJiqOeassvZlu4d7KfD64jC%2BCAlvZkED5sBYp7Xth9GQrfR0LzeR92CgE1wlfzSCrlbQjMb9%2FY6c7crWLGsG%2BBi%2FgcvDQtaK3JtYMODemMMGOqUBlO9JHU%2F38ra75U%2F%2F1%2BR2OZ6hXNohpytg%2BJgheNsbSnTRifu2JUTYhsmOCw0V1WzuqnGv8bebLX3REpjBTGR3G8EieVzTUZDIR8R385eIM8wqDseV4UssyZHl6JFDsxlyp5DwgSvrNu6sXx1TdrBxeLTzgI1%2FFgw1VOgh%2B1n5vGGLZMxPJq5zZoh5anNhl%2BAetNy59hJbQXyOAZsFgTOO6OBL9B%2Fe&X-Amz-Signature=d1170b67867d2f51ba58b7633962a4ace6f4bf0cf99c54efcd82177df8e87caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOGEDQ2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGip4GATVwybgir3jDEtooY8iboD0qMbsbiTlZnHd362AiEAsiMqxPk4N2plYZ8dKtF5HRlMq8GYyjYpqrBTjAp1QMAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDImuHDaFgkOTVm0qmyrcAxZ2E8xkouWpjEsBnTQHhRgHzAFeBwS9VJox74Fb1T0jhaaUmltNp0WtCoN59WXuEvO6sMSq%2B2s34TaGB7iDlkw9S0PT6r9GvnHC75Zk8P7H%2BebzZTzQiIC6BPnck3dJ%2BhgOSs4T8T3x9Q7nkERpt2M9vDJhekWW1we6BF4TM5NgLHbf5%2Fs3xTBCYdbVWZeR0%2FyRQcc4K0rW%2FtSFQDFiD5P%2FYQpJhiYOBo2n9cvUOND6EwfxUewdcwpoxYCO3wECJHtolfN6lDD98njum%2B2hvLraP9qxjN%2FVYT8RUCBV%2F9xa%2FF%2B6LNogIH7fwjkc4jjZL4DEXnZJFpMO%2FGLxuNa4Hoys0eL92Xlv3S3beX90%2B64%2BV%2FXCU9aUZWqAbSGx8GUU4bpgUbAKq3%2FJdZdfq972unSXjEmUairqYRHcHl8svPqPUNWXUWNvUI%2BOoRv8oY5MdM%2Fx8O5SuLQXdkAoy1m1X8Ek1WIYPwAa1KM%2BcTNgfiNnVoAQnJxrAQyknYh%2Fldd0M%2FZfFOTIle%2FKKt5lrQM%2FhtZioJiqOeassvZlu4d7KfD64jC%2BCAlvZkED5sBYp7Xth9GQrfR0LzeR92CgE1wlfzSCrlbQjMb9%2FY6c7crWLGsG%2BBi%2FgcvDQtaK3JtYMODemMMGOqUBlO9JHU%2F38ra75U%2F%2F1%2BR2OZ6hXNohpytg%2BJgheNsbSnTRifu2JUTYhsmOCw0V1WzuqnGv8bebLX3REpjBTGR3G8EieVzTUZDIR8R385eIM8wqDseV4UssyZHl6JFDsxlyp5DwgSvrNu6sXx1TdrBxeLTzgI1%2FFgw1VOgh%2B1n5vGGLZMxPJq5zZoh5anNhl%2BAetNy59hJbQXyOAZsFgTOO6OBL9B%2Fe&X-Amz-Signature=81d856f2daec4e2376d84baa5de5578909fc0d8621098ff9f89f2bd387cdeea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOGEDQ2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGip4GATVwybgir3jDEtooY8iboD0qMbsbiTlZnHd362AiEAsiMqxPk4N2plYZ8dKtF5HRlMq8GYyjYpqrBTjAp1QMAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDImuHDaFgkOTVm0qmyrcAxZ2E8xkouWpjEsBnTQHhRgHzAFeBwS9VJox74Fb1T0jhaaUmltNp0WtCoN59WXuEvO6sMSq%2B2s34TaGB7iDlkw9S0PT6r9GvnHC75Zk8P7H%2BebzZTzQiIC6BPnck3dJ%2BhgOSs4T8T3x9Q7nkERpt2M9vDJhekWW1we6BF4TM5NgLHbf5%2Fs3xTBCYdbVWZeR0%2FyRQcc4K0rW%2FtSFQDFiD5P%2FYQpJhiYOBo2n9cvUOND6EwfxUewdcwpoxYCO3wECJHtolfN6lDD98njum%2B2hvLraP9qxjN%2FVYT8RUCBV%2F9xa%2FF%2B6LNogIH7fwjkc4jjZL4DEXnZJFpMO%2FGLxuNa4Hoys0eL92Xlv3S3beX90%2B64%2BV%2FXCU9aUZWqAbSGx8GUU4bpgUbAKq3%2FJdZdfq972unSXjEmUairqYRHcHl8svPqPUNWXUWNvUI%2BOoRv8oY5MdM%2Fx8O5SuLQXdkAoy1m1X8Ek1WIYPwAa1KM%2BcTNgfiNnVoAQnJxrAQyknYh%2Fldd0M%2FZfFOTIle%2FKKt5lrQM%2FhtZioJiqOeassvZlu4d7KfD64jC%2BCAlvZkED5sBYp7Xth9GQrfR0LzeR92CgE1wlfzSCrlbQjMb9%2FY6c7crWLGsG%2BBi%2FgcvDQtaK3JtYMODemMMGOqUBlO9JHU%2F38ra75U%2F%2F1%2BR2OZ6hXNohpytg%2BJgheNsbSnTRifu2JUTYhsmOCw0V1WzuqnGv8bebLX3REpjBTGR3G8EieVzTUZDIR8R385eIM8wqDseV4UssyZHl6JFDsxlyp5DwgSvrNu6sXx1TdrBxeLTzgI1%2FFgw1VOgh%2B1n5vGGLZMxPJq5zZoh5anNhl%2BAetNy59hJbQXyOAZsFgTOO6OBL9B%2Fe&X-Amz-Signature=50bd0ac7f28a8ccd80e9d5eaf80eb9d45448f96a2a3df0fb7fb0475e829fb412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOGEDQ2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGip4GATVwybgir3jDEtooY8iboD0qMbsbiTlZnHd362AiEAsiMqxPk4N2plYZ8dKtF5HRlMq8GYyjYpqrBTjAp1QMAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDImuHDaFgkOTVm0qmyrcAxZ2E8xkouWpjEsBnTQHhRgHzAFeBwS9VJox74Fb1T0jhaaUmltNp0WtCoN59WXuEvO6sMSq%2B2s34TaGB7iDlkw9S0PT6r9GvnHC75Zk8P7H%2BebzZTzQiIC6BPnck3dJ%2BhgOSs4T8T3x9Q7nkERpt2M9vDJhekWW1we6BF4TM5NgLHbf5%2Fs3xTBCYdbVWZeR0%2FyRQcc4K0rW%2FtSFQDFiD5P%2FYQpJhiYOBo2n9cvUOND6EwfxUewdcwpoxYCO3wECJHtolfN6lDD98njum%2B2hvLraP9qxjN%2FVYT8RUCBV%2F9xa%2FF%2B6LNogIH7fwjkc4jjZL4DEXnZJFpMO%2FGLxuNa4Hoys0eL92Xlv3S3beX90%2B64%2BV%2FXCU9aUZWqAbSGx8GUU4bpgUbAKq3%2FJdZdfq972unSXjEmUairqYRHcHl8svPqPUNWXUWNvUI%2BOoRv8oY5MdM%2Fx8O5SuLQXdkAoy1m1X8Ek1WIYPwAa1KM%2BcTNgfiNnVoAQnJxrAQyknYh%2Fldd0M%2FZfFOTIle%2FKKt5lrQM%2FhtZioJiqOeassvZlu4d7KfD64jC%2BCAlvZkED5sBYp7Xth9GQrfR0LzeR92CgE1wlfzSCrlbQjMb9%2FY6c7crWLGsG%2BBi%2FgcvDQtaK3JtYMODemMMGOqUBlO9JHU%2F38ra75U%2F%2F1%2BR2OZ6hXNohpytg%2BJgheNsbSnTRifu2JUTYhsmOCw0V1WzuqnGv8bebLX3REpjBTGR3G8EieVzTUZDIR8R385eIM8wqDseV4UssyZHl6JFDsxlyp5DwgSvrNu6sXx1TdrBxeLTzgI1%2FFgw1VOgh%2B1n5vGGLZMxPJq5zZoh5anNhl%2BAetNy59hJbQXyOAZsFgTOO6OBL9B%2Fe&X-Amz-Signature=49390e8216b945399babecefa0e12935c3759a857cd945af30b4e2559ec54e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOGEDQ2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGip4GATVwybgir3jDEtooY8iboD0qMbsbiTlZnHd362AiEAsiMqxPk4N2plYZ8dKtF5HRlMq8GYyjYpqrBTjAp1QMAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDImuHDaFgkOTVm0qmyrcAxZ2E8xkouWpjEsBnTQHhRgHzAFeBwS9VJox74Fb1T0jhaaUmltNp0WtCoN59WXuEvO6sMSq%2B2s34TaGB7iDlkw9S0PT6r9GvnHC75Zk8P7H%2BebzZTzQiIC6BPnck3dJ%2BhgOSs4T8T3x9Q7nkERpt2M9vDJhekWW1we6BF4TM5NgLHbf5%2Fs3xTBCYdbVWZeR0%2FyRQcc4K0rW%2FtSFQDFiD5P%2FYQpJhiYOBo2n9cvUOND6EwfxUewdcwpoxYCO3wECJHtolfN6lDD98njum%2B2hvLraP9qxjN%2FVYT8RUCBV%2F9xa%2FF%2B6LNogIH7fwjkc4jjZL4DEXnZJFpMO%2FGLxuNa4Hoys0eL92Xlv3S3beX90%2B64%2BV%2FXCU9aUZWqAbSGx8GUU4bpgUbAKq3%2FJdZdfq972unSXjEmUairqYRHcHl8svPqPUNWXUWNvUI%2BOoRv8oY5MdM%2Fx8O5SuLQXdkAoy1m1X8Ek1WIYPwAa1KM%2BcTNgfiNnVoAQnJxrAQyknYh%2Fldd0M%2FZfFOTIle%2FKKt5lrQM%2FhtZioJiqOeassvZlu4d7KfD64jC%2BCAlvZkED5sBYp7Xth9GQrfR0LzeR92CgE1wlfzSCrlbQjMb9%2FY6c7crWLGsG%2BBi%2FgcvDQtaK3JtYMODemMMGOqUBlO9JHU%2F38ra75U%2F%2F1%2BR2OZ6hXNohpytg%2BJgheNsbSnTRifu2JUTYhsmOCw0V1WzuqnGv8bebLX3REpjBTGR3G8EieVzTUZDIR8R385eIM8wqDseV4UssyZHl6JFDsxlyp5DwgSvrNu6sXx1TdrBxeLTzgI1%2FFgw1VOgh%2B1n5vGGLZMxPJq5zZoh5anNhl%2BAetNy59hJbQXyOAZsFgTOO6OBL9B%2Fe&X-Amz-Signature=60d8496cc8262b2fbc7ae14d7aa102fc3b8751f59ac9bf5ee69358ef1caf7ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOGEDQ2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGip4GATVwybgir3jDEtooY8iboD0qMbsbiTlZnHd362AiEAsiMqxPk4N2plYZ8dKtF5HRlMq8GYyjYpqrBTjAp1QMAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDImuHDaFgkOTVm0qmyrcAxZ2E8xkouWpjEsBnTQHhRgHzAFeBwS9VJox74Fb1T0jhaaUmltNp0WtCoN59WXuEvO6sMSq%2B2s34TaGB7iDlkw9S0PT6r9GvnHC75Zk8P7H%2BebzZTzQiIC6BPnck3dJ%2BhgOSs4T8T3x9Q7nkERpt2M9vDJhekWW1we6BF4TM5NgLHbf5%2Fs3xTBCYdbVWZeR0%2FyRQcc4K0rW%2FtSFQDFiD5P%2FYQpJhiYOBo2n9cvUOND6EwfxUewdcwpoxYCO3wECJHtolfN6lDD98njum%2B2hvLraP9qxjN%2FVYT8RUCBV%2F9xa%2FF%2B6LNogIH7fwjkc4jjZL4DEXnZJFpMO%2FGLxuNa4Hoys0eL92Xlv3S3beX90%2B64%2BV%2FXCU9aUZWqAbSGx8GUU4bpgUbAKq3%2FJdZdfq972unSXjEmUairqYRHcHl8svPqPUNWXUWNvUI%2BOoRv8oY5MdM%2Fx8O5SuLQXdkAoy1m1X8Ek1WIYPwAa1KM%2BcTNgfiNnVoAQnJxrAQyknYh%2Fldd0M%2FZfFOTIle%2FKKt5lrQM%2FhtZioJiqOeassvZlu4d7KfD64jC%2BCAlvZkED5sBYp7Xth9GQrfR0LzeR92CgE1wlfzSCrlbQjMb9%2FY6c7crWLGsG%2BBi%2FgcvDQtaK3JtYMODemMMGOqUBlO9JHU%2F38ra75U%2F%2F1%2BR2OZ6hXNohpytg%2BJgheNsbSnTRifu2JUTYhsmOCw0V1WzuqnGv8bebLX3REpjBTGR3G8EieVzTUZDIR8R385eIM8wqDseV4UssyZHl6JFDsxlyp5DwgSvrNu6sXx1TdrBxeLTzgI1%2FFgw1VOgh%2B1n5vGGLZMxPJq5zZoh5anNhl%2BAetNy59hJbQXyOAZsFgTOO6OBL9B%2Fe&X-Amz-Signature=16c48c8c3b6f32a019a91508ebbb99bb70690ff7a291216ae2aaf8a381ba2bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOGEDQ2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGip4GATVwybgir3jDEtooY8iboD0qMbsbiTlZnHd362AiEAsiMqxPk4N2plYZ8dKtF5HRlMq8GYyjYpqrBTjAp1QMAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDImuHDaFgkOTVm0qmyrcAxZ2E8xkouWpjEsBnTQHhRgHzAFeBwS9VJox74Fb1T0jhaaUmltNp0WtCoN59WXuEvO6sMSq%2B2s34TaGB7iDlkw9S0PT6r9GvnHC75Zk8P7H%2BebzZTzQiIC6BPnck3dJ%2BhgOSs4T8T3x9Q7nkERpt2M9vDJhekWW1we6BF4TM5NgLHbf5%2Fs3xTBCYdbVWZeR0%2FyRQcc4K0rW%2FtSFQDFiD5P%2FYQpJhiYOBo2n9cvUOND6EwfxUewdcwpoxYCO3wECJHtolfN6lDD98njum%2B2hvLraP9qxjN%2FVYT8RUCBV%2F9xa%2FF%2B6LNogIH7fwjkc4jjZL4DEXnZJFpMO%2FGLxuNa4Hoys0eL92Xlv3S3beX90%2B64%2BV%2FXCU9aUZWqAbSGx8GUU4bpgUbAKq3%2FJdZdfq972unSXjEmUairqYRHcHl8svPqPUNWXUWNvUI%2BOoRv8oY5MdM%2Fx8O5SuLQXdkAoy1m1X8Ek1WIYPwAa1KM%2BcTNgfiNnVoAQnJxrAQyknYh%2Fldd0M%2FZfFOTIle%2FKKt5lrQM%2FhtZioJiqOeassvZlu4d7KfD64jC%2BCAlvZkED5sBYp7Xth9GQrfR0LzeR92CgE1wlfzSCrlbQjMb9%2FY6c7crWLGsG%2BBi%2FgcvDQtaK3JtYMODemMMGOqUBlO9JHU%2F38ra75U%2F%2F1%2BR2OZ6hXNohpytg%2BJgheNsbSnTRifu2JUTYhsmOCw0V1WzuqnGv8bebLX3REpjBTGR3G8EieVzTUZDIR8R385eIM8wqDseV4UssyZHl6JFDsxlyp5DwgSvrNu6sXx1TdrBxeLTzgI1%2FFgw1VOgh%2B1n5vGGLZMxPJq5zZoh5anNhl%2BAetNy59hJbQXyOAZsFgTOO6OBL9B%2Fe&X-Amz-Signature=a9d8f48bd8f75958ed67118372f22370876ce8a5c1552a145921435a312ad040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOGEDQ2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGip4GATVwybgir3jDEtooY8iboD0qMbsbiTlZnHd362AiEAsiMqxPk4N2plYZ8dKtF5HRlMq8GYyjYpqrBTjAp1QMAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDImuHDaFgkOTVm0qmyrcAxZ2E8xkouWpjEsBnTQHhRgHzAFeBwS9VJox74Fb1T0jhaaUmltNp0WtCoN59WXuEvO6sMSq%2B2s34TaGB7iDlkw9S0PT6r9GvnHC75Zk8P7H%2BebzZTzQiIC6BPnck3dJ%2BhgOSs4T8T3x9Q7nkERpt2M9vDJhekWW1we6BF4TM5NgLHbf5%2Fs3xTBCYdbVWZeR0%2FyRQcc4K0rW%2FtSFQDFiD5P%2FYQpJhiYOBo2n9cvUOND6EwfxUewdcwpoxYCO3wECJHtolfN6lDD98njum%2B2hvLraP9qxjN%2FVYT8RUCBV%2F9xa%2FF%2B6LNogIH7fwjkc4jjZL4DEXnZJFpMO%2FGLxuNa4Hoys0eL92Xlv3S3beX90%2B64%2BV%2FXCU9aUZWqAbSGx8GUU4bpgUbAKq3%2FJdZdfq972unSXjEmUairqYRHcHl8svPqPUNWXUWNvUI%2BOoRv8oY5MdM%2Fx8O5SuLQXdkAoy1m1X8Ek1WIYPwAa1KM%2BcTNgfiNnVoAQnJxrAQyknYh%2Fldd0M%2FZfFOTIle%2FKKt5lrQM%2FhtZioJiqOeassvZlu4d7KfD64jC%2BCAlvZkED5sBYp7Xth9GQrfR0LzeR92CgE1wlfzSCrlbQjMb9%2FY6c7crWLGsG%2BBi%2FgcvDQtaK3JtYMODemMMGOqUBlO9JHU%2F38ra75U%2F%2F1%2BR2OZ6hXNohpytg%2BJgheNsbSnTRifu2JUTYhsmOCw0V1WzuqnGv8bebLX3REpjBTGR3G8EieVzTUZDIR8R385eIM8wqDseV4UssyZHl6JFDsxlyp5DwgSvrNu6sXx1TdrBxeLTzgI1%2FFgw1VOgh%2B1n5vGGLZMxPJq5zZoh5anNhl%2BAetNy59hJbQXyOAZsFgTOO6OBL9B%2Fe&X-Amz-Signature=d44f66e89f60b17ac73b96434e3242da8821e23e3dd1d37863d2a3854a3466d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
