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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=260d74e60bb540415ef00d8dea48015b7a7df6297b434170cd01e08ad752ba6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=8769588076a8c22fc03a4f14df6a166d26fafb267084140bcc767d8103571983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=6ce46baafbab8474d5e0b02ba886d564df7f608e9007f919b1d6e7e383e9907f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=8ff28b628a37a7fe786abd48589fda3cacf37019d851a3192868f3121a0c5f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=4a5fbb1b30efcbcad79e4403c24f6fde87fa78e313f1cc9277f5e338e149a80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=52dd3b7c2c93ee4d1d1079745c261d82084822fc61e7de593dfbd830006f28dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=9aa65ffc8dad471813e73887db7e81ce3699ffa984fe89eaca23c11396cae546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSUZPW3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ80kRXLYCDDrIS8fRY9DpEcidtN4ZBbqMAZ0iU%2BZXuQIgPnm3naAj5%2B9fDTrtfDUVaH9xJqIHsZH2D%2F86q%2Bagy%2FMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSMpnjJ79DDYD2x%2ByrcAy0RzyQc5%2ByTT8xz%2FJ%2FW1A1lxOOd3eIVRw59b2mMKS1%2FBpRUHQ7aEW%2FryTcI2EjcsqspvN8dihFkzpG8e2XvP%2BomENuEjMWyo0nqBb7qjy42Ka35L2ytfl2TOSDkVXBUVizFhYWOOGL0gvbGWlQoeS0%2FVONvhcSU%2BOOsoQ3DD4E4tTv%2F7mWnhRj1vpbhoA112aK8ZahGiYmSiZ13DnxhH%2B7WYlBwhbk87E6WHfee2eGx6%2BbzHnqDR4lg%2BTDYp%2BM%2FOAAQnkjZbkDl9l9UjMBR0%2Fld5rjQPOqdiZBVMsJqOEwkHCv%2FzIlS%2B%2BN0li4dXQMAdwadFb%2FU994kxwifdsvmZgYCiqFIHWRILSXbInouePTQWvRNNIBJaalfdPk8FA5cxwuSXiQze51nxBI077zQSHf3yFg%2FDxxkySYhzaXfel5Xtu7k%2BWmIGyNxrg9BGr77wfArgx%2B6GcKQLoNO1Rt8WLF5fAhHmAnKr1a7d0s3e7rr52I32fr2HIrg%2B1ZwELWJgJWVYG1cg%2BIrKVi0kA7hhJidflGdtEJ1NcRvwTBuuBYvbRpm0u7Xnjv%2FYsxRR7BXlq%2BYYzoi%2F%2B8OJaNUMmxRhNLgZ39aGnMGNrr2ydpZbPk0Zx3unZAYDnFY60%2FUMOzqisMGOqUBbpM%2Fejqi42tHa1bxM1ttquKlHSqJ9gIVi%2B9EOLIQsXGD%2BZ%2FB70Jp1KyU7dg8q1kdLD3xrsVK7mACrUTPPCSDy3Gl%2FQMXpH2M6RLKWEggnAe6OAW8KpmDaIHk%2Bn6k%2Fmn%2Fnzh87RaeTwih5a%2BnlepwLbfcJAomyJruJPYk93k%2FSbmUXz3lc8dnMlRcnqn1mpzrd6ps28NwztmzgrG0pAir2l2z0dcW&X-Amz-Signature=3a0524ad53449d2d93d77999091eb06c748702a41c7defebeb74f8dfe9e51aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
