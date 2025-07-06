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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI4WG3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhc2BcpRDW409cv6%2BJwx%2FvnuF8ZqMoR308U3nW1jxkGAIhANS2W3G5TMuWNWfMFO5Ys%2FR7WM4ris4p4bNy6bizNW2cKv8DCGEQABoMNjM3NDIzMTgzODA1Igw7s%2BcWxqGJv0QnMDcq3APiaXlYbi%2Ba5envjgwfvkZaifFiy1Vb72a1pcYKUxmOGRKKuIqoriwi1t4nf%2Bwrmf4Q0X8OVcklf26l8SFbiSNHVfAZMSRBolr%2BjdYUCkqhHQpRMCsyvHrG9YpCyRHzMWu%2FEe1%2Fp982hSXG4pIXkvdcsQarIpcVCvZgyDJmet6WJCz1%2Fc2AVnDVDuutV9xDqJirPMvB2HLzp%2F7h2mkjViUIqybrxlipXdMwRZ0CIZOF%2FO0ku7CGBO308Iv6%2Fpw9fJpuTaiIoMm%2BLYkrw5oNv4jtuzB8EgIQ7m0wVxiO7Sjft5x%2FDj6OxoDbfEjOhzNwno%2Bw11a6%2BLMYw%2Fg0VOW75ANyDFIDHR4IThH9NaDv36XbU45qPsJh6Owwv46TcOEx4RJp9D6Y5Ox5rBApdc4zHObFKCbHQlPzCkuLDs7hhUJy%2F%2BAqxl5WzC%2BQE6dAYsKXI7WmgreXAxrNFDT1rg5wuUfUYO6EZXL2sWlF5VwBiy04ApmEEDrepQwhxM1Q4YdpO3QQiHYJcT1z0xa14cUKIrfTbh8tgSrD%2Fwn%2F78kcJa5JG8QMOt7hJSlGQLXlQJR6%2FrBjRlPC2xUDst%2Bow3JHlNPqU6vliu2S2n%2Bt%2FyQbiV9Favi5oYqTTu67o2I9EjDlw6rDBjqkATTvBO82smQfggXXLjiOd59eou%2FcBMqxQVnsOEN0FfSznAFF%2B60d47%2FQhC6Yo2WxNmahqc1DkTPHTTKLmgwDECztOoro75SbBzyNCIqe0jCZ1mcN1VmA3Q8LZxbXIhVkUJq5zs8dNPVXC5DSiTfVTFjHKhzWDnUysyNCUEvT%2Br3cJ3GIO%2B9WSG9CymnAnVdlvie4OB8WK0CNqa4MBEbHEa1JUYYA&X-Amz-Signature=2b88c2b97f6fc5b19ad5a197aa303adb2452e68ac6d3a0d3115e7e4317bb281d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI4WG3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhc2BcpRDW409cv6%2BJwx%2FvnuF8ZqMoR308U3nW1jxkGAIhANS2W3G5TMuWNWfMFO5Ys%2FR7WM4ris4p4bNy6bizNW2cKv8DCGEQABoMNjM3NDIzMTgzODA1Igw7s%2BcWxqGJv0QnMDcq3APiaXlYbi%2Ba5envjgwfvkZaifFiy1Vb72a1pcYKUxmOGRKKuIqoriwi1t4nf%2Bwrmf4Q0X8OVcklf26l8SFbiSNHVfAZMSRBolr%2BjdYUCkqhHQpRMCsyvHrG9YpCyRHzMWu%2FEe1%2Fp982hSXG4pIXkvdcsQarIpcVCvZgyDJmet6WJCz1%2Fc2AVnDVDuutV9xDqJirPMvB2HLzp%2F7h2mkjViUIqybrxlipXdMwRZ0CIZOF%2FO0ku7CGBO308Iv6%2Fpw9fJpuTaiIoMm%2BLYkrw5oNv4jtuzB8EgIQ7m0wVxiO7Sjft5x%2FDj6OxoDbfEjOhzNwno%2Bw11a6%2BLMYw%2Fg0VOW75ANyDFIDHR4IThH9NaDv36XbU45qPsJh6Owwv46TcOEx4RJp9D6Y5Ox5rBApdc4zHObFKCbHQlPzCkuLDs7hhUJy%2F%2BAqxl5WzC%2BQE6dAYsKXI7WmgreXAxrNFDT1rg5wuUfUYO6EZXL2sWlF5VwBiy04ApmEEDrepQwhxM1Q4YdpO3QQiHYJcT1z0xa14cUKIrfTbh8tgSrD%2Fwn%2F78kcJa5JG8QMOt7hJSlGQLXlQJR6%2FrBjRlPC2xUDst%2Bow3JHlNPqU6vliu2S2n%2Bt%2FyQbiV9Favi5oYqTTu67o2I9EjDlw6rDBjqkATTvBO82smQfggXXLjiOd59eou%2FcBMqxQVnsOEN0FfSznAFF%2B60d47%2FQhC6Yo2WxNmahqc1DkTPHTTKLmgwDECztOoro75SbBzyNCIqe0jCZ1mcN1VmA3Q8LZxbXIhVkUJq5zs8dNPVXC5DSiTfVTFjHKhzWDnUysyNCUEvT%2Br3cJ3GIO%2B9WSG9CymnAnVdlvie4OB8WK0CNqa4MBEbHEa1JUYYA&X-Amz-Signature=6e778f9bf2a9ee7c3455c29cf3cd659438731eda3200b8137cb50dae877ce034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI4WG3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhc2BcpRDW409cv6%2BJwx%2FvnuF8ZqMoR308U3nW1jxkGAIhANS2W3G5TMuWNWfMFO5Ys%2FR7WM4ris4p4bNy6bizNW2cKv8DCGEQABoMNjM3NDIzMTgzODA1Igw7s%2BcWxqGJv0QnMDcq3APiaXlYbi%2Ba5envjgwfvkZaifFiy1Vb72a1pcYKUxmOGRKKuIqoriwi1t4nf%2Bwrmf4Q0X8OVcklf26l8SFbiSNHVfAZMSRBolr%2BjdYUCkqhHQpRMCsyvHrG9YpCyRHzMWu%2FEe1%2Fp982hSXG4pIXkvdcsQarIpcVCvZgyDJmet6WJCz1%2Fc2AVnDVDuutV9xDqJirPMvB2HLzp%2F7h2mkjViUIqybrxlipXdMwRZ0CIZOF%2FO0ku7CGBO308Iv6%2Fpw9fJpuTaiIoMm%2BLYkrw5oNv4jtuzB8EgIQ7m0wVxiO7Sjft5x%2FDj6OxoDbfEjOhzNwno%2Bw11a6%2BLMYw%2Fg0VOW75ANyDFIDHR4IThH9NaDv36XbU45qPsJh6Owwv46TcOEx4RJp9D6Y5Ox5rBApdc4zHObFKCbHQlPzCkuLDs7hhUJy%2F%2BAqxl5WzC%2BQE6dAYsKXI7WmgreXAxrNFDT1rg5wuUfUYO6EZXL2sWlF5VwBiy04ApmEEDrepQwhxM1Q4YdpO3QQiHYJcT1z0xa14cUKIrfTbh8tgSrD%2Fwn%2F78kcJa5JG8QMOt7hJSlGQLXlQJR6%2FrBjRlPC2xUDst%2Bow3JHlNPqU6vliu2S2n%2Bt%2FyQbiV9Favi5oYqTTu67o2I9EjDlw6rDBjqkATTvBO82smQfggXXLjiOd59eou%2FcBMqxQVnsOEN0FfSznAFF%2B60d47%2FQhC6Yo2WxNmahqc1DkTPHTTKLmgwDECztOoro75SbBzyNCIqe0jCZ1mcN1VmA3Q8LZxbXIhVkUJq5zs8dNPVXC5DSiTfVTFjHKhzWDnUysyNCUEvT%2Br3cJ3GIO%2B9WSG9CymnAnVdlvie4OB8WK0CNqa4MBEbHEa1JUYYA&X-Amz-Signature=9be27137a3d6b3f049a91437b74c2d3b7898eca6b4dba0d834ef998aa8e33f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI4WG3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhc2BcpRDW409cv6%2BJwx%2FvnuF8ZqMoR308U3nW1jxkGAIhANS2W3G5TMuWNWfMFO5Ys%2FR7WM4ris4p4bNy6bizNW2cKv8DCGEQABoMNjM3NDIzMTgzODA1Igw7s%2BcWxqGJv0QnMDcq3APiaXlYbi%2Ba5envjgwfvkZaifFiy1Vb72a1pcYKUxmOGRKKuIqoriwi1t4nf%2Bwrmf4Q0X8OVcklf26l8SFbiSNHVfAZMSRBolr%2BjdYUCkqhHQpRMCsyvHrG9YpCyRHzMWu%2FEe1%2Fp982hSXG4pIXkvdcsQarIpcVCvZgyDJmet6WJCz1%2Fc2AVnDVDuutV9xDqJirPMvB2HLzp%2F7h2mkjViUIqybrxlipXdMwRZ0CIZOF%2FO0ku7CGBO308Iv6%2Fpw9fJpuTaiIoMm%2BLYkrw5oNv4jtuzB8EgIQ7m0wVxiO7Sjft5x%2FDj6OxoDbfEjOhzNwno%2Bw11a6%2BLMYw%2Fg0VOW75ANyDFIDHR4IThH9NaDv36XbU45qPsJh6Owwv46TcOEx4RJp9D6Y5Ox5rBApdc4zHObFKCbHQlPzCkuLDs7hhUJy%2F%2BAqxl5WzC%2BQE6dAYsKXI7WmgreXAxrNFDT1rg5wuUfUYO6EZXL2sWlF5VwBiy04ApmEEDrepQwhxM1Q4YdpO3QQiHYJcT1z0xa14cUKIrfTbh8tgSrD%2Fwn%2F78kcJa5JG8QMOt7hJSlGQLXlQJR6%2FrBjRlPC2xUDst%2Bow3JHlNPqU6vliu2S2n%2Bt%2FyQbiV9Favi5oYqTTu67o2I9EjDlw6rDBjqkATTvBO82smQfggXXLjiOd59eou%2FcBMqxQVnsOEN0FfSznAFF%2B60d47%2FQhC6Yo2WxNmahqc1DkTPHTTKLmgwDECztOoro75SbBzyNCIqe0jCZ1mcN1VmA3Q8LZxbXIhVkUJq5zs8dNPVXC5DSiTfVTFjHKhzWDnUysyNCUEvT%2Br3cJ3GIO%2B9WSG9CymnAnVdlvie4OB8WK0CNqa4MBEbHEa1JUYYA&X-Amz-Signature=2a885a9e6268b4281db763ad53d40ba7f70b9bcde20572e1262722585d9578b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI4WG3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhc2BcpRDW409cv6%2BJwx%2FvnuF8ZqMoR308U3nW1jxkGAIhANS2W3G5TMuWNWfMFO5Ys%2FR7WM4ris4p4bNy6bizNW2cKv8DCGEQABoMNjM3NDIzMTgzODA1Igw7s%2BcWxqGJv0QnMDcq3APiaXlYbi%2Ba5envjgwfvkZaifFiy1Vb72a1pcYKUxmOGRKKuIqoriwi1t4nf%2Bwrmf4Q0X8OVcklf26l8SFbiSNHVfAZMSRBolr%2BjdYUCkqhHQpRMCsyvHrG9YpCyRHzMWu%2FEe1%2Fp982hSXG4pIXkvdcsQarIpcVCvZgyDJmet6WJCz1%2Fc2AVnDVDuutV9xDqJirPMvB2HLzp%2F7h2mkjViUIqybrxlipXdMwRZ0CIZOF%2FO0ku7CGBO308Iv6%2Fpw9fJpuTaiIoMm%2BLYkrw5oNv4jtuzB8EgIQ7m0wVxiO7Sjft5x%2FDj6OxoDbfEjOhzNwno%2Bw11a6%2BLMYw%2Fg0VOW75ANyDFIDHR4IThH9NaDv36XbU45qPsJh6Owwv46TcOEx4RJp9D6Y5Ox5rBApdc4zHObFKCbHQlPzCkuLDs7hhUJy%2F%2BAqxl5WzC%2BQE6dAYsKXI7WmgreXAxrNFDT1rg5wuUfUYO6EZXL2sWlF5VwBiy04ApmEEDrepQwhxM1Q4YdpO3QQiHYJcT1z0xa14cUKIrfTbh8tgSrD%2Fwn%2F78kcJa5JG8QMOt7hJSlGQLXlQJR6%2FrBjRlPC2xUDst%2Bow3JHlNPqU6vliu2S2n%2Bt%2FyQbiV9Favi5oYqTTu67o2I9EjDlw6rDBjqkATTvBO82smQfggXXLjiOd59eou%2FcBMqxQVnsOEN0FfSznAFF%2B60d47%2FQhC6Yo2WxNmahqc1DkTPHTTKLmgwDECztOoro75SbBzyNCIqe0jCZ1mcN1VmA3Q8LZxbXIhVkUJq5zs8dNPVXC5DSiTfVTFjHKhzWDnUysyNCUEvT%2Br3cJ3GIO%2B9WSG9CymnAnVdlvie4OB8WK0CNqa4MBEbHEa1JUYYA&X-Amz-Signature=0ea779d58fad0db755b5719899b5c17ec10e78bcb1639c7cfec81b463c01feec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI4WG3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhc2BcpRDW409cv6%2BJwx%2FvnuF8ZqMoR308U3nW1jxkGAIhANS2W3G5TMuWNWfMFO5Ys%2FR7WM4ris4p4bNy6bizNW2cKv8DCGEQABoMNjM3NDIzMTgzODA1Igw7s%2BcWxqGJv0QnMDcq3APiaXlYbi%2Ba5envjgwfvkZaifFiy1Vb72a1pcYKUxmOGRKKuIqoriwi1t4nf%2Bwrmf4Q0X8OVcklf26l8SFbiSNHVfAZMSRBolr%2BjdYUCkqhHQpRMCsyvHrG9YpCyRHzMWu%2FEe1%2Fp982hSXG4pIXkvdcsQarIpcVCvZgyDJmet6WJCz1%2Fc2AVnDVDuutV9xDqJirPMvB2HLzp%2F7h2mkjViUIqybrxlipXdMwRZ0CIZOF%2FO0ku7CGBO308Iv6%2Fpw9fJpuTaiIoMm%2BLYkrw5oNv4jtuzB8EgIQ7m0wVxiO7Sjft5x%2FDj6OxoDbfEjOhzNwno%2Bw11a6%2BLMYw%2Fg0VOW75ANyDFIDHR4IThH9NaDv36XbU45qPsJh6Owwv46TcOEx4RJp9D6Y5Ox5rBApdc4zHObFKCbHQlPzCkuLDs7hhUJy%2F%2BAqxl5WzC%2BQE6dAYsKXI7WmgreXAxrNFDT1rg5wuUfUYO6EZXL2sWlF5VwBiy04ApmEEDrepQwhxM1Q4YdpO3QQiHYJcT1z0xa14cUKIrfTbh8tgSrD%2Fwn%2F78kcJa5JG8QMOt7hJSlGQLXlQJR6%2FrBjRlPC2xUDst%2Bow3JHlNPqU6vliu2S2n%2Bt%2FyQbiV9Favi5oYqTTu67o2I9EjDlw6rDBjqkATTvBO82smQfggXXLjiOd59eou%2FcBMqxQVnsOEN0FfSznAFF%2B60d47%2FQhC6Yo2WxNmahqc1DkTPHTTKLmgwDECztOoro75SbBzyNCIqe0jCZ1mcN1VmA3Q8LZxbXIhVkUJq5zs8dNPVXC5DSiTfVTFjHKhzWDnUysyNCUEvT%2Br3cJ3GIO%2B9WSG9CymnAnVdlvie4OB8WK0CNqa4MBEbHEa1JUYYA&X-Amz-Signature=99a94702db67aaf47e8c7e7e8729c7da65ef1487341cf8de32f39bd80870aa39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI4WG3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhc2BcpRDW409cv6%2BJwx%2FvnuF8ZqMoR308U3nW1jxkGAIhANS2W3G5TMuWNWfMFO5Ys%2FR7WM4ris4p4bNy6bizNW2cKv8DCGEQABoMNjM3NDIzMTgzODA1Igw7s%2BcWxqGJv0QnMDcq3APiaXlYbi%2Ba5envjgwfvkZaifFiy1Vb72a1pcYKUxmOGRKKuIqoriwi1t4nf%2Bwrmf4Q0X8OVcklf26l8SFbiSNHVfAZMSRBolr%2BjdYUCkqhHQpRMCsyvHrG9YpCyRHzMWu%2FEe1%2Fp982hSXG4pIXkvdcsQarIpcVCvZgyDJmet6WJCz1%2Fc2AVnDVDuutV9xDqJirPMvB2HLzp%2F7h2mkjViUIqybrxlipXdMwRZ0CIZOF%2FO0ku7CGBO308Iv6%2Fpw9fJpuTaiIoMm%2BLYkrw5oNv4jtuzB8EgIQ7m0wVxiO7Sjft5x%2FDj6OxoDbfEjOhzNwno%2Bw11a6%2BLMYw%2Fg0VOW75ANyDFIDHR4IThH9NaDv36XbU45qPsJh6Owwv46TcOEx4RJp9D6Y5Ox5rBApdc4zHObFKCbHQlPzCkuLDs7hhUJy%2F%2BAqxl5WzC%2BQE6dAYsKXI7WmgreXAxrNFDT1rg5wuUfUYO6EZXL2sWlF5VwBiy04ApmEEDrepQwhxM1Q4YdpO3QQiHYJcT1z0xa14cUKIrfTbh8tgSrD%2Fwn%2F78kcJa5JG8QMOt7hJSlGQLXlQJR6%2FrBjRlPC2xUDst%2Bow3JHlNPqU6vliu2S2n%2Bt%2FyQbiV9Favi5oYqTTu67o2I9EjDlw6rDBjqkATTvBO82smQfggXXLjiOd59eou%2FcBMqxQVnsOEN0FfSznAFF%2B60d47%2FQhC6Yo2WxNmahqc1DkTPHTTKLmgwDECztOoro75SbBzyNCIqe0jCZ1mcN1VmA3Q8LZxbXIhVkUJq5zs8dNPVXC5DSiTfVTFjHKhzWDnUysyNCUEvT%2Br3cJ3GIO%2B9WSG9CymnAnVdlvie4OB8WK0CNqa4MBEbHEa1JUYYA&X-Amz-Signature=6da9484ee815eaed259965338ab691b83eb8a9f46b2e908cd7a08e717964d2fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI4WG3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhc2BcpRDW409cv6%2BJwx%2FvnuF8ZqMoR308U3nW1jxkGAIhANS2W3G5TMuWNWfMFO5Ys%2FR7WM4ris4p4bNy6bizNW2cKv8DCGEQABoMNjM3NDIzMTgzODA1Igw7s%2BcWxqGJv0QnMDcq3APiaXlYbi%2Ba5envjgwfvkZaifFiy1Vb72a1pcYKUxmOGRKKuIqoriwi1t4nf%2Bwrmf4Q0X8OVcklf26l8SFbiSNHVfAZMSRBolr%2BjdYUCkqhHQpRMCsyvHrG9YpCyRHzMWu%2FEe1%2Fp982hSXG4pIXkvdcsQarIpcVCvZgyDJmet6WJCz1%2Fc2AVnDVDuutV9xDqJirPMvB2HLzp%2F7h2mkjViUIqybrxlipXdMwRZ0CIZOF%2FO0ku7CGBO308Iv6%2Fpw9fJpuTaiIoMm%2BLYkrw5oNv4jtuzB8EgIQ7m0wVxiO7Sjft5x%2FDj6OxoDbfEjOhzNwno%2Bw11a6%2BLMYw%2Fg0VOW75ANyDFIDHR4IThH9NaDv36XbU45qPsJh6Owwv46TcOEx4RJp9D6Y5Ox5rBApdc4zHObFKCbHQlPzCkuLDs7hhUJy%2F%2BAqxl5WzC%2BQE6dAYsKXI7WmgreXAxrNFDT1rg5wuUfUYO6EZXL2sWlF5VwBiy04ApmEEDrepQwhxM1Q4YdpO3QQiHYJcT1z0xa14cUKIrfTbh8tgSrD%2Fwn%2F78kcJa5JG8QMOt7hJSlGQLXlQJR6%2FrBjRlPC2xUDst%2Bow3JHlNPqU6vliu2S2n%2Bt%2FyQbiV9Favi5oYqTTu67o2I9EjDlw6rDBjqkATTvBO82smQfggXXLjiOd59eou%2FcBMqxQVnsOEN0FfSznAFF%2B60d47%2FQhC6Yo2WxNmahqc1DkTPHTTKLmgwDECztOoro75SbBzyNCIqe0jCZ1mcN1VmA3Q8LZxbXIhVkUJq5zs8dNPVXC5DSiTfVTFjHKhzWDnUysyNCUEvT%2Br3cJ3GIO%2B9WSG9CymnAnVdlvie4OB8WK0CNqa4MBEbHEa1JUYYA&X-Amz-Signature=393f16f9364eaa45568624758d233271a9554d7a67b0b17708a6c373902a8441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
