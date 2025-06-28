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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PIMKSP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK2FCejbk9EHzG%2Fqir5yVnK7Rvnu5xuqzTK8LXvY%2BpgQIgYu9Oa00vCzVWKy9lxl4dcKAFExNvu0o8t18ABurbyC0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfVk8JJllMNgu3aYircAz%2BmsHJ%2FZoFRXE2emmyG7gHBD01pj14d6xplRl34yWfeRnfmZuhqkH07aTr2RROLEerUOcdjCSnf4DkSOSwtOt90rYp7AtN91CJ4mxfUckw%2BEMgp%2B%2Br7pFKf8nV8ixAMmLegKKj1%2FWdNWGvXC3bmdmbHazxeGcNJYBd76KsAKORjeTKvwrbqejhNTzkn%2BbmYvIe6f5jLvNBHtOjugEN03T4ttAYJ%2BKjh%2FF9RVfeiMYqq23bxKGYKlYF9Xv7sRbSvHXlCH%2FDxM4etXwiGjHFqL9w4CddsBV8VK5dOryGOLm427uLtb%2Bqg1zWuSII3eizUPj8uEytxTVrnkrw8F2UEWq0S8058rWNtpzPtvBuBZYHMhHV9NrqkGjgFhkY0NXH9PE8cKhwmWJHUJYYkadjBPjYvHN1Q%2BlX4X0fB6JHi%2F6y8GsmYNb1W9QzsZRgxLCmzoeCKlmQibwIp7n9ot5SFdqx4XM1%2FAlP%2BsVu5YqfdOCiE6JoKFVKOTgl7VRu4%2BttZ0Api1cu%2F8Vq%2FywEFK3yIyRryyzwT5G9iBChf3JRM70mJvoUfNuWQPPJL2WUb90Sc7R%2FS60Czv9lbYRLtObYaA6nlBs%2FH4vBZBuLT6Pxus8CyBDvfIBWuxbtMZo2GMMDW%2FMIGOqUBIZarVyVlIRIQmv2HOqw%2FOj3rciCXtHoJsL7%2BQkWE8fCXlwfCB8uwt%2B%2BO8Ll637NYqxqyvFE%2BmoSgkr4aXLe51ITPflk2lfp7%2FUsIldbfgmkV7Na5zFmgaa8N01QrXrA0BXdHRjhLAlEKrfog5pe86FiCPWoltus8fWFVbrL7iBrJmM8O8C5neVWQfmCe29Tp9xJ5Syb7WBB%2BpiBsvftDexiWhGuW&X-Amz-Signature=3f60f051cd7ea67e1cea8358322df51f8c36ac3966d67073888f974e1d03efc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PIMKSP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK2FCejbk9EHzG%2Fqir5yVnK7Rvnu5xuqzTK8LXvY%2BpgQIgYu9Oa00vCzVWKy9lxl4dcKAFExNvu0o8t18ABurbyC0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfVk8JJllMNgu3aYircAz%2BmsHJ%2FZoFRXE2emmyG7gHBD01pj14d6xplRl34yWfeRnfmZuhqkH07aTr2RROLEerUOcdjCSnf4DkSOSwtOt90rYp7AtN91CJ4mxfUckw%2BEMgp%2B%2Br7pFKf8nV8ixAMmLegKKj1%2FWdNWGvXC3bmdmbHazxeGcNJYBd76KsAKORjeTKvwrbqejhNTzkn%2BbmYvIe6f5jLvNBHtOjugEN03T4ttAYJ%2BKjh%2FF9RVfeiMYqq23bxKGYKlYF9Xv7sRbSvHXlCH%2FDxM4etXwiGjHFqL9w4CddsBV8VK5dOryGOLm427uLtb%2Bqg1zWuSII3eizUPj8uEytxTVrnkrw8F2UEWq0S8058rWNtpzPtvBuBZYHMhHV9NrqkGjgFhkY0NXH9PE8cKhwmWJHUJYYkadjBPjYvHN1Q%2BlX4X0fB6JHi%2F6y8GsmYNb1W9QzsZRgxLCmzoeCKlmQibwIp7n9ot5SFdqx4XM1%2FAlP%2BsVu5YqfdOCiE6JoKFVKOTgl7VRu4%2BttZ0Api1cu%2F8Vq%2FywEFK3yIyRryyzwT5G9iBChf3JRM70mJvoUfNuWQPPJL2WUb90Sc7R%2FS60Czv9lbYRLtObYaA6nlBs%2FH4vBZBuLT6Pxus8CyBDvfIBWuxbtMZo2GMMDW%2FMIGOqUBIZarVyVlIRIQmv2HOqw%2FOj3rciCXtHoJsL7%2BQkWE8fCXlwfCB8uwt%2B%2BO8Ll637NYqxqyvFE%2BmoSgkr4aXLe51ITPflk2lfp7%2FUsIldbfgmkV7Na5zFmgaa8N01QrXrA0BXdHRjhLAlEKrfog5pe86FiCPWoltus8fWFVbrL7iBrJmM8O8C5neVWQfmCe29Tp9xJ5Syb7WBB%2BpiBsvftDexiWhGuW&X-Amz-Signature=5d6fdf97c43f2007c4bbdf92bc364d2464014ced1af611030e6f2375996e83c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PIMKSP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK2FCejbk9EHzG%2Fqir5yVnK7Rvnu5xuqzTK8LXvY%2BpgQIgYu9Oa00vCzVWKy9lxl4dcKAFExNvu0o8t18ABurbyC0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfVk8JJllMNgu3aYircAz%2BmsHJ%2FZoFRXE2emmyG7gHBD01pj14d6xplRl34yWfeRnfmZuhqkH07aTr2RROLEerUOcdjCSnf4DkSOSwtOt90rYp7AtN91CJ4mxfUckw%2BEMgp%2B%2Br7pFKf8nV8ixAMmLegKKj1%2FWdNWGvXC3bmdmbHazxeGcNJYBd76KsAKORjeTKvwrbqejhNTzkn%2BbmYvIe6f5jLvNBHtOjugEN03T4ttAYJ%2BKjh%2FF9RVfeiMYqq23bxKGYKlYF9Xv7sRbSvHXlCH%2FDxM4etXwiGjHFqL9w4CddsBV8VK5dOryGOLm427uLtb%2Bqg1zWuSII3eizUPj8uEytxTVrnkrw8F2UEWq0S8058rWNtpzPtvBuBZYHMhHV9NrqkGjgFhkY0NXH9PE8cKhwmWJHUJYYkadjBPjYvHN1Q%2BlX4X0fB6JHi%2F6y8GsmYNb1W9QzsZRgxLCmzoeCKlmQibwIp7n9ot5SFdqx4XM1%2FAlP%2BsVu5YqfdOCiE6JoKFVKOTgl7VRu4%2BttZ0Api1cu%2F8Vq%2FywEFK3yIyRryyzwT5G9iBChf3JRM70mJvoUfNuWQPPJL2WUb90Sc7R%2FS60Czv9lbYRLtObYaA6nlBs%2FH4vBZBuLT6Pxus8CyBDvfIBWuxbtMZo2GMMDW%2FMIGOqUBIZarVyVlIRIQmv2HOqw%2FOj3rciCXtHoJsL7%2BQkWE8fCXlwfCB8uwt%2B%2BO8Ll637NYqxqyvFE%2BmoSgkr4aXLe51ITPflk2lfp7%2FUsIldbfgmkV7Na5zFmgaa8N01QrXrA0BXdHRjhLAlEKrfog5pe86FiCPWoltus8fWFVbrL7iBrJmM8O8C5neVWQfmCe29Tp9xJ5Syb7WBB%2BpiBsvftDexiWhGuW&X-Amz-Signature=b70ec96e1c9a51a6ba212e148364caa897813d048c7b3c58421d0564a4d451ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PIMKSP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK2FCejbk9EHzG%2Fqir5yVnK7Rvnu5xuqzTK8LXvY%2BpgQIgYu9Oa00vCzVWKy9lxl4dcKAFExNvu0o8t18ABurbyC0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfVk8JJllMNgu3aYircAz%2BmsHJ%2FZoFRXE2emmyG7gHBD01pj14d6xplRl34yWfeRnfmZuhqkH07aTr2RROLEerUOcdjCSnf4DkSOSwtOt90rYp7AtN91CJ4mxfUckw%2BEMgp%2B%2Br7pFKf8nV8ixAMmLegKKj1%2FWdNWGvXC3bmdmbHazxeGcNJYBd76KsAKORjeTKvwrbqejhNTzkn%2BbmYvIe6f5jLvNBHtOjugEN03T4ttAYJ%2BKjh%2FF9RVfeiMYqq23bxKGYKlYF9Xv7sRbSvHXlCH%2FDxM4etXwiGjHFqL9w4CddsBV8VK5dOryGOLm427uLtb%2Bqg1zWuSII3eizUPj8uEytxTVrnkrw8F2UEWq0S8058rWNtpzPtvBuBZYHMhHV9NrqkGjgFhkY0NXH9PE8cKhwmWJHUJYYkadjBPjYvHN1Q%2BlX4X0fB6JHi%2F6y8GsmYNb1W9QzsZRgxLCmzoeCKlmQibwIp7n9ot5SFdqx4XM1%2FAlP%2BsVu5YqfdOCiE6JoKFVKOTgl7VRu4%2BttZ0Api1cu%2F8Vq%2FywEFK3yIyRryyzwT5G9iBChf3JRM70mJvoUfNuWQPPJL2WUb90Sc7R%2FS60Czv9lbYRLtObYaA6nlBs%2FH4vBZBuLT6Pxus8CyBDvfIBWuxbtMZo2GMMDW%2FMIGOqUBIZarVyVlIRIQmv2HOqw%2FOj3rciCXtHoJsL7%2BQkWE8fCXlwfCB8uwt%2B%2BO8Ll637NYqxqyvFE%2BmoSgkr4aXLe51ITPflk2lfp7%2FUsIldbfgmkV7Na5zFmgaa8N01QrXrA0BXdHRjhLAlEKrfog5pe86FiCPWoltus8fWFVbrL7iBrJmM8O8C5neVWQfmCe29Tp9xJ5Syb7WBB%2BpiBsvftDexiWhGuW&X-Amz-Signature=e23787cccb17e19b4cdaa969100185b6030befd3a6f9365d6e738123f94f89f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PIMKSP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK2FCejbk9EHzG%2Fqir5yVnK7Rvnu5xuqzTK8LXvY%2BpgQIgYu9Oa00vCzVWKy9lxl4dcKAFExNvu0o8t18ABurbyC0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfVk8JJllMNgu3aYircAz%2BmsHJ%2FZoFRXE2emmyG7gHBD01pj14d6xplRl34yWfeRnfmZuhqkH07aTr2RROLEerUOcdjCSnf4DkSOSwtOt90rYp7AtN91CJ4mxfUckw%2BEMgp%2B%2Br7pFKf8nV8ixAMmLegKKj1%2FWdNWGvXC3bmdmbHazxeGcNJYBd76KsAKORjeTKvwrbqejhNTzkn%2BbmYvIe6f5jLvNBHtOjugEN03T4ttAYJ%2BKjh%2FF9RVfeiMYqq23bxKGYKlYF9Xv7sRbSvHXlCH%2FDxM4etXwiGjHFqL9w4CddsBV8VK5dOryGOLm427uLtb%2Bqg1zWuSII3eizUPj8uEytxTVrnkrw8F2UEWq0S8058rWNtpzPtvBuBZYHMhHV9NrqkGjgFhkY0NXH9PE8cKhwmWJHUJYYkadjBPjYvHN1Q%2BlX4X0fB6JHi%2F6y8GsmYNb1W9QzsZRgxLCmzoeCKlmQibwIp7n9ot5SFdqx4XM1%2FAlP%2BsVu5YqfdOCiE6JoKFVKOTgl7VRu4%2BttZ0Api1cu%2F8Vq%2FywEFK3yIyRryyzwT5G9iBChf3JRM70mJvoUfNuWQPPJL2WUb90Sc7R%2FS60Czv9lbYRLtObYaA6nlBs%2FH4vBZBuLT6Pxus8CyBDvfIBWuxbtMZo2GMMDW%2FMIGOqUBIZarVyVlIRIQmv2HOqw%2FOj3rciCXtHoJsL7%2BQkWE8fCXlwfCB8uwt%2B%2BO8Ll637NYqxqyvFE%2BmoSgkr4aXLe51ITPflk2lfp7%2FUsIldbfgmkV7Na5zFmgaa8N01QrXrA0BXdHRjhLAlEKrfog5pe86FiCPWoltus8fWFVbrL7iBrJmM8O8C5neVWQfmCe29Tp9xJ5Syb7WBB%2BpiBsvftDexiWhGuW&X-Amz-Signature=dbb4257a399e1ec569097df7b1aa2df3e9fc3ef5b3d7d8c305a1ca5402f4c4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PIMKSP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK2FCejbk9EHzG%2Fqir5yVnK7Rvnu5xuqzTK8LXvY%2BpgQIgYu9Oa00vCzVWKy9lxl4dcKAFExNvu0o8t18ABurbyC0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfVk8JJllMNgu3aYircAz%2BmsHJ%2FZoFRXE2emmyG7gHBD01pj14d6xplRl34yWfeRnfmZuhqkH07aTr2RROLEerUOcdjCSnf4DkSOSwtOt90rYp7AtN91CJ4mxfUckw%2BEMgp%2B%2Br7pFKf8nV8ixAMmLegKKj1%2FWdNWGvXC3bmdmbHazxeGcNJYBd76KsAKORjeTKvwrbqejhNTzkn%2BbmYvIe6f5jLvNBHtOjugEN03T4ttAYJ%2BKjh%2FF9RVfeiMYqq23bxKGYKlYF9Xv7sRbSvHXlCH%2FDxM4etXwiGjHFqL9w4CddsBV8VK5dOryGOLm427uLtb%2Bqg1zWuSII3eizUPj8uEytxTVrnkrw8F2UEWq0S8058rWNtpzPtvBuBZYHMhHV9NrqkGjgFhkY0NXH9PE8cKhwmWJHUJYYkadjBPjYvHN1Q%2BlX4X0fB6JHi%2F6y8GsmYNb1W9QzsZRgxLCmzoeCKlmQibwIp7n9ot5SFdqx4XM1%2FAlP%2BsVu5YqfdOCiE6JoKFVKOTgl7VRu4%2BttZ0Api1cu%2F8Vq%2FywEFK3yIyRryyzwT5G9iBChf3JRM70mJvoUfNuWQPPJL2WUb90Sc7R%2FS60Czv9lbYRLtObYaA6nlBs%2FH4vBZBuLT6Pxus8CyBDvfIBWuxbtMZo2GMMDW%2FMIGOqUBIZarVyVlIRIQmv2HOqw%2FOj3rciCXtHoJsL7%2BQkWE8fCXlwfCB8uwt%2B%2BO8Ll637NYqxqyvFE%2BmoSgkr4aXLe51ITPflk2lfp7%2FUsIldbfgmkV7Na5zFmgaa8N01QrXrA0BXdHRjhLAlEKrfog5pe86FiCPWoltus8fWFVbrL7iBrJmM8O8C5neVWQfmCe29Tp9xJ5Syb7WBB%2BpiBsvftDexiWhGuW&X-Amz-Signature=370c003456eea53bf4c781735789eb9d5a57daaddd0313529f831343a6366ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PIMKSP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK2FCejbk9EHzG%2Fqir5yVnK7Rvnu5xuqzTK8LXvY%2BpgQIgYu9Oa00vCzVWKy9lxl4dcKAFExNvu0o8t18ABurbyC0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfVk8JJllMNgu3aYircAz%2BmsHJ%2FZoFRXE2emmyG7gHBD01pj14d6xplRl34yWfeRnfmZuhqkH07aTr2RROLEerUOcdjCSnf4DkSOSwtOt90rYp7AtN91CJ4mxfUckw%2BEMgp%2B%2Br7pFKf8nV8ixAMmLegKKj1%2FWdNWGvXC3bmdmbHazxeGcNJYBd76KsAKORjeTKvwrbqejhNTzkn%2BbmYvIe6f5jLvNBHtOjugEN03T4ttAYJ%2BKjh%2FF9RVfeiMYqq23bxKGYKlYF9Xv7sRbSvHXlCH%2FDxM4etXwiGjHFqL9w4CddsBV8VK5dOryGOLm427uLtb%2Bqg1zWuSII3eizUPj8uEytxTVrnkrw8F2UEWq0S8058rWNtpzPtvBuBZYHMhHV9NrqkGjgFhkY0NXH9PE8cKhwmWJHUJYYkadjBPjYvHN1Q%2BlX4X0fB6JHi%2F6y8GsmYNb1W9QzsZRgxLCmzoeCKlmQibwIp7n9ot5SFdqx4XM1%2FAlP%2BsVu5YqfdOCiE6JoKFVKOTgl7VRu4%2BttZ0Api1cu%2F8Vq%2FywEFK3yIyRryyzwT5G9iBChf3JRM70mJvoUfNuWQPPJL2WUb90Sc7R%2FS60Czv9lbYRLtObYaA6nlBs%2FH4vBZBuLT6Pxus8CyBDvfIBWuxbtMZo2GMMDW%2FMIGOqUBIZarVyVlIRIQmv2HOqw%2FOj3rciCXtHoJsL7%2BQkWE8fCXlwfCB8uwt%2B%2BO8Ll637NYqxqyvFE%2BmoSgkr4aXLe51ITPflk2lfp7%2FUsIldbfgmkV7Na5zFmgaa8N01QrXrA0BXdHRjhLAlEKrfog5pe86FiCPWoltus8fWFVbrL7iBrJmM8O8C5neVWQfmCe29Tp9xJ5Syb7WBB%2BpiBsvftDexiWhGuW&X-Amz-Signature=5accc50368c4dd610dd2c796c314aff556a16f83ee5df8cd914fd2c132c6928f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PIMKSP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK2FCejbk9EHzG%2Fqir5yVnK7Rvnu5xuqzTK8LXvY%2BpgQIgYu9Oa00vCzVWKy9lxl4dcKAFExNvu0o8t18ABurbyC0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfVk8JJllMNgu3aYircAz%2BmsHJ%2FZoFRXE2emmyG7gHBD01pj14d6xplRl34yWfeRnfmZuhqkH07aTr2RROLEerUOcdjCSnf4DkSOSwtOt90rYp7AtN91CJ4mxfUckw%2BEMgp%2B%2Br7pFKf8nV8ixAMmLegKKj1%2FWdNWGvXC3bmdmbHazxeGcNJYBd76KsAKORjeTKvwrbqejhNTzkn%2BbmYvIe6f5jLvNBHtOjugEN03T4ttAYJ%2BKjh%2FF9RVfeiMYqq23bxKGYKlYF9Xv7sRbSvHXlCH%2FDxM4etXwiGjHFqL9w4CddsBV8VK5dOryGOLm427uLtb%2Bqg1zWuSII3eizUPj8uEytxTVrnkrw8F2UEWq0S8058rWNtpzPtvBuBZYHMhHV9NrqkGjgFhkY0NXH9PE8cKhwmWJHUJYYkadjBPjYvHN1Q%2BlX4X0fB6JHi%2F6y8GsmYNb1W9QzsZRgxLCmzoeCKlmQibwIp7n9ot5SFdqx4XM1%2FAlP%2BsVu5YqfdOCiE6JoKFVKOTgl7VRu4%2BttZ0Api1cu%2F8Vq%2FywEFK3yIyRryyzwT5G9iBChf3JRM70mJvoUfNuWQPPJL2WUb90Sc7R%2FS60Czv9lbYRLtObYaA6nlBs%2FH4vBZBuLT6Pxus8CyBDvfIBWuxbtMZo2GMMDW%2FMIGOqUBIZarVyVlIRIQmv2HOqw%2FOj3rciCXtHoJsL7%2BQkWE8fCXlwfCB8uwt%2B%2BO8Ll637NYqxqyvFE%2BmoSgkr4aXLe51ITPflk2lfp7%2FUsIldbfgmkV7Na5zFmgaa8N01QrXrA0BXdHRjhLAlEKrfog5pe86FiCPWoltus8fWFVbrL7iBrJmM8O8C5neVWQfmCe29Tp9xJ5Syb7WBB%2BpiBsvftDexiWhGuW&X-Amz-Signature=a975e4057edb5b06ebe4a924be074c7cbd7e737c1f49630a74b6ec8e8d71a369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
