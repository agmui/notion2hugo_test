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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXSB52W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC701Ff845%2B%2BTD%2BtZ2%2F1CUC80UcdCAVjSnK0ttJ7AcSkgIhAMU8QVQ%2BgxabZq1QVkNfYzIir6Ivk5mcO3Om%2FIhVmjefKv8DCEIQABoMNjM3NDIzMTgzODA1IgxELOVlkWoS7yEyiRgq3AMGue8uspTZuFniWf7MT9M4dx8MjCDkvS4CbrqvPA9%2F01s%2FFGDb17GsDk9iymPZSMj0yY7PjftemJFzHql%2Bx6WNyro%2FbFj354BB7Qo%2FxnRtOwAXQ%2FwCyN%2BZdD7b6gvFjg2KsF25mqITnHT9452jcAV363nIbvYNo15WnhGw7d%2FkTSu3OlYsii%2FIzMh%2Bc%2F4lEaAz259hHT1wx9jdmf1k6n96Hpwt8MziRqgtHKWe47T5pRvgbxtUIlzU3DaIelIfSy6cY01WQHatw6mzmkmEmnrJfk8sDqiDKy6l%2BMFaTju%2BpznFbmQRGEYPQI6TVD91lEw1W5iQHvU0QGm7A7IuY3mjLgMyaFK8sWqvTM6%2Fvb6UFAKQ3w%2FaegmuQuviv75as15gU5SjhcgNL2W6pABxkZI9Wxc5jaRY1dHgQKuBDRcXQCyTr9hwbkDOg8qVeIylO%2BjSmap7psrscOaJYYhGMOkvCorOLlKchBLX6Zicq8HSflciK3biHv%2B59P0L3IW3YZGxNH2CyU1z8D95Fqpnq4Sql4ME18X00e2kfXdjDI5SFoDq%2FwGucc8JTwmb%2FcfrjiOBdio26KbRq8GORpsRDTbsXHsv0LXlKAWsgy%2BIfc96nyFI34gExPJCv1GXTTCr3MHEBjqkASQL4cUHKoaU0%2BsxhE0FLMXUlj3kC%2BaEoOXlCO%2FuVuP7FqjLbC6AN6pJE%2FV0%2FoRWT9P0Pr0QOZIbx5Bgql4RLs5e2bWab2CAg7ESJ7rvv57WFm%2FIM112Gnf1U7mhSqtt71%2B7G5XJcZqQ0kbqzCPDhezwD5MkCz2Dou0u6PnnH5bA6WqBfY2JF7KwrQIuFeiBPze%2F4nmbgz4zox29MZnn%2B0c4sXh1&X-Amz-Signature=4109e6b3fc1e59847af74ad2e5603a6016a828c57bf7cc6121dd70ac76ab53dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXSB52W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC701Ff845%2B%2BTD%2BtZ2%2F1CUC80UcdCAVjSnK0ttJ7AcSkgIhAMU8QVQ%2BgxabZq1QVkNfYzIir6Ivk5mcO3Om%2FIhVmjefKv8DCEIQABoMNjM3NDIzMTgzODA1IgxELOVlkWoS7yEyiRgq3AMGue8uspTZuFniWf7MT9M4dx8MjCDkvS4CbrqvPA9%2F01s%2FFGDb17GsDk9iymPZSMj0yY7PjftemJFzHql%2Bx6WNyro%2FbFj354BB7Qo%2FxnRtOwAXQ%2FwCyN%2BZdD7b6gvFjg2KsF25mqITnHT9452jcAV363nIbvYNo15WnhGw7d%2FkTSu3OlYsii%2FIzMh%2Bc%2F4lEaAz259hHT1wx9jdmf1k6n96Hpwt8MziRqgtHKWe47T5pRvgbxtUIlzU3DaIelIfSy6cY01WQHatw6mzmkmEmnrJfk8sDqiDKy6l%2BMFaTju%2BpznFbmQRGEYPQI6TVD91lEw1W5iQHvU0QGm7A7IuY3mjLgMyaFK8sWqvTM6%2Fvb6UFAKQ3w%2FaegmuQuviv75as15gU5SjhcgNL2W6pABxkZI9Wxc5jaRY1dHgQKuBDRcXQCyTr9hwbkDOg8qVeIylO%2BjSmap7psrscOaJYYhGMOkvCorOLlKchBLX6Zicq8HSflciK3biHv%2B59P0L3IW3YZGxNH2CyU1z8D95Fqpnq4Sql4ME18X00e2kfXdjDI5SFoDq%2FwGucc8JTwmb%2FcfrjiOBdio26KbRq8GORpsRDTbsXHsv0LXlKAWsgy%2BIfc96nyFI34gExPJCv1GXTTCr3MHEBjqkASQL4cUHKoaU0%2BsxhE0FLMXUlj3kC%2BaEoOXlCO%2FuVuP7FqjLbC6AN6pJE%2FV0%2FoRWT9P0Pr0QOZIbx5Bgql4RLs5e2bWab2CAg7ESJ7rvv57WFm%2FIM112Gnf1U7mhSqtt71%2B7G5XJcZqQ0kbqzCPDhezwD5MkCz2Dou0u6PnnH5bA6WqBfY2JF7KwrQIuFeiBPze%2F4nmbgz4zox29MZnn%2B0c4sXh1&X-Amz-Signature=106fed5421bb8255170b36b3e9eb7130d4d2de7c851a260ea4f23596cad8ac36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXSB52W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC701Ff845%2B%2BTD%2BtZ2%2F1CUC80UcdCAVjSnK0ttJ7AcSkgIhAMU8QVQ%2BgxabZq1QVkNfYzIir6Ivk5mcO3Om%2FIhVmjefKv8DCEIQABoMNjM3NDIzMTgzODA1IgxELOVlkWoS7yEyiRgq3AMGue8uspTZuFniWf7MT9M4dx8MjCDkvS4CbrqvPA9%2F01s%2FFGDb17GsDk9iymPZSMj0yY7PjftemJFzHql%2Bx6WNyro%2FbFj354BB7Qo%2FxnRtOwAXQ%2FwCyN%2BZdD7b6gvFjg2KsF25mqITnHT9452jcAV363nIbvYNo15WnhGw7d%2FkTSu3OlYsii%2FIzMh%2Bc%2F4lEaAz259hHT1wx9jdmf1k6n96Hpwt8MziRqgtHKWe47T5pRvgbxtUIlzU3DaIelIfSy6cY01WQHatw6mzmkmEmnrJfk8sDqiDKy6l%2BMFaTju%2BpznFbmQRGEYPQI6TVD91lEw1W5iQHvU0QGm7A7IuY3mjLgMyaFK8sWqvTM6%2Fvb6UFAKQ3w%2FaegmuQuviv75as15gU5SjhcgNL2W6pABxkZI9Wxc5jaRY1dHgQKuBDRcXQCyTr9hwbkDOg8qVeIylO%2BjSmap7psrscOaJYYhGMOkvCorOLlKchBLX6Zicq8HSflciK3biHv%2B59P0L3IW3YZGxNH2CyU1z8D95Fqpnq4Sql4ME18X00e2kfXdjDI5SFoDq%2FwGucc8JTwmb%2FcfrjiOBdio26KbRq8GORpsRDTbsXHsv0LXlKAWsgy%2BIfc96nyFI34gExPJCv1GXTTCr3MHEBjqkASQL4cUHKoaU0%2BsxhE0FLMXUlj3kC%2BaEoOXlCO%2FuVuP7FqjLbC6AN6pJE%2FV0%2FoRWT9P0Pr0QOZIbx5Bgql4RLs5e2bWab2CAg7ESJ7rvv57WFm%2FIM112Gnf1U7mhSqtt71%2B7G5XJcZqQ0kbqzCPDhezwD5MkCz2Dou0u6PnnH5bA6WqBfY2JF7KwrQIuFeiBPze%2F4nmbgz4zox29MZnn%2B0c4sXh1&X-Amz-Signature=06efa05c9347f8a8a832d0d1e1a2fc339d264a8e4bcb065ba57332a340044c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXSB52W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC701Ff845%2B%2BTD%2BtZ2%2F1CUC80UcdCAVjSnK0ttJ7AcSkgIhAMU8QVQ%2BgxabZq1QVkNfYzIir6Ivk5mcO3Om%2FIhVmjefKv8DCEIQABoMNjM3NDIzMTgzODA1IgxELOVlkWoS7yEyiRgq3AMGue8uspTZuFniWf7MT9M4dx8MjCDkvS4CbrqvPA9%2F01s%2FFGDb17GsDk9iymPZSMj0yY7PjftemJFzHql%2Bx6WNyro%2FbFj354BB7Qo%2FxnRtOwAXQ%2FwCyN%2BZdD7b6gvFjg2KsF25mqITnHT9452jcAV363nIbvYNo15WnhGw7d%2FkTSu3OlYsii%2FIzMh%2Bc%2F4lEaAz259hHT1wx9jdmf1k6n96Hpwt8MziRqgtHKWe47T5pRvgbxtUIlzU3DaIelIfSy6cY01WQHatw6mzmkmEmnrJfk8sDqiDKy6l%2BMFaTju%2BpznFbmQRGEYPQI6TVD91lEw1W5iQHvU0QGm7A7IuY3mjLgMyaFK8sWqvTM6%2Fvb6UFAKQ3w%2FaegmuQuviv75as15gU5SjhcgNL2W6pABxkZI9Wxc5jaRY1dHgQKuBDRcXQCyTr9hwbkDOg8qVeIylO%2BjSmap7psrscOaJYYhGMOkvCorOLlKchBLX6Zicq8HSflciK3biHv%2B59P0L3IW3YZGxNH2CyU1z8D95Fqpnq4Sql4ME18X00e2kfXdjDI5SFoDq%2FwGucc8JTwmb%2FcfrjiOBdio26KbRq8GORpsRDTbsXHsv0LXlKAWsgy%2BIfc96nyFI34gExPJCv1GXTTCr3MHEBjqkASQL4cUHKoaU0%2BsxhE0FLMXUlj3kC%2BaEoOXlCO%2FuVuP7FqjLbC6AN6pJE%2FV0%2FoRWT9P0Pr0QOZIbx5Bgql4RLs5e2bWab2CAg7ESJ7rvv57WFm%2FIM112Gnf1U7mhSqtt71%2B7G5XJcZqQ0kbqzCPDhezwD5MkCz2Dou0u6PnnH5bA6WqBfY2JF7KwrQIuFeiBPze%2F4nmbgz4zox29MZnn%2B0c4sXh1&X-Amz-Signature=0d115f80dd42b0663c0ad58f06866a9959c485b95b6d7022b7f72d4a0f6c5e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXSB52W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC701Ff845%2B%2BTD%2BtZ2%2F1CUC80UcdCAVjSnK0ttJ7AcSkgIhAMU8QVQ%2BgxabZq1QVkNfYzIir6Ivk5mcO3Om%2FIhVmjefKv8DCEIQABoMNjM3NDIzMTgzODA1IgxELOVlkWoS7yEyiRgq3AMGue8uspTZuFniWf7MT9M4dx8MjCDkvS4CbrqvPA9%2F01s%2FFGDb17GsDk9iymPZSMj0yY7PjftemJFzHql%2Bx6WNyro%2FbFj354BB7Qo%2FxnRtOwAXQ%2FwCyN%2BZdD7b6gvFjg2KsF25mqITnHT9452jcAV363nIbvYNo15WnhGw7d%2FkTSu3OlYsii%2FIzMh%2Bc%2F4lEaAz259hHT1wx9jdmf1k6n96Hpwt8MziRqgtHKWe47T5pRvgbxtUIlzU3DaIelIfSy6cY01WQHatw6mzmkmEmnrJfk8sDqiDKy6l%2BMFaTju%2BpznFbmQRGEYPQI6TVD91lEw1W5iQHvU0QGm7A7IuY3mjLgMyaFK8sWqvTM6%2Fvb6UFAKQ3w%2FaegmuQuviv75as15gU5SjhcgNL2W6pABxkZI9Wxc5jaRY1dHgQKuBDRcXQCyTr9hwbkDOg8qVeIylO%2BjSmap7psrscOaJYYhGMOkvCorOLlKchBLX6Zicq8HSflciK3biHv%2B59P0L3IW3YZGxNH2CyU1z8D95Fqpnq4Sql4ME18X00e2kfXdjDI5SFoDq%2FwGucc8JTwmb%2FcfrjiOBdio26KbRq8GORpsRDTbsXHsv0LXlKAWsgy%2BIfc96nyFI34gExPJCv1GXTTCr3MHEBjqkASQL4cUHKoaU0%2BsxhE0FLMXUlj3kC%2BaEoOXlCO%2FuVuP7FqjLbC6AN6pJE%2FV0%2FoRWT9P0Pr0QOZIbx5Bgql4RLs5e2bWab2CAg7ESJ7rvv57WFm%2FIM112Gnf1U7mhSqtt71%2B7G5XJcZqQ0kbqzCPDhezwD5MkCz2Dou0u6PnnH5bA6WqBfY2JF7KwrQIuFeiBPze%2F4nmbgz4zox29MZnn%2B0c4sXh1&X-Amz-Signature=9dd673150ef81c58ba041926b6d9c27c9a47782dd11b461cc71a38d8a53c21fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXSB52W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC701Ff845%2B%2BTD%2BtZ2%2F1CUC80UcdCAVjSnK0ttJ7AcSkgIhAMU8QVQ%2BgxabZq1QVkNfYzIir6Ivk5mcO3Om%2FIhVmjefKv8DCEIQABoMNjM3NDIzMTgzODA1IgxELOVlkWoS7yEyiRgq3AMGue8uspTZuFniWf7MT9M4dx8MjCDkvS4CbrqvPA9%2F01s%2FFGDb17GsDk9iymPZSMj0yY7PjftemJFzHql%2Bx6WNyro%2FbFj354BB7Qo%2FxnRtOwAXQ%2FwCyN%2BZdD7b6gvFjg2KsF25mqITnHT9452jcAV363nIbvYNo15WnhGw7d%2FkTSu3OlYsii%2FIzMh%2Bc%2F4lEaAz259hHT1wx9jdmf1k6n96Hpwt8MziRqgtHKWe47T5pRvgbxtUIlzU3DaIelIfSy6cY01WQHatw6mzmkmEmnrJfk8sDqiDKy6l%2BMFaTju%2BpznFbmQRGEYPQI6TVD91lEw1W5iQHvU0QGm7A7IuY3mjLgMyaFK8sWqvTM6%2Fvb6UFAKQ3w%2FaegmuQuviv75as15gU5SjhcgNL2W6pABxkZI9Wxc5jaRY1dHgQKuBDRcXQCyTr9hwbkDOg8qVeIylO%2BjSmap7psrscOaJYYhGMOkvCorOLlKchBLX6Zicq8HSflciK3biHv%2B59P0L3IW3YZGxNH2CyU1z8D95Fqpnq4Sql4ME18X00e2kfXdjDI5SFoDq%2FwGucc8JTwmb%2FcfrjiOBdio26KbRq8GORpsRDTbsXHsv0LXlKAWsgy%2BIfc96nyFI34gExPJCv1GXTTCr3MHEBjqkASQL4cUHKoaU0%2BsxhE0FLMXUlj3kC%2BaEoOXlCO%2FuVuP7FqjLbC6AN6pJE%2FV0%2FoRWT9P0Pr0QOZIbx5Bgql4RLs5e2bWab2CAg7ESJ7rvv57WFm%2FIM112Gnf1U7mhSqtt71%2B7G5XJcZqQ0kbqzCPDhezwD5MkCz2Dou0u6PnnH5bA6WqBfY2JF7KwrQIuFeiBPze%2F4nmbgz4zox29MZnn%2B0c4sXh1&X-Amz-Signature=641aba4aa70c6e54d941b9884bb5c08cf678e642235df1561beb7d42a18c379f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXSB52W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC701Ff845%2B%2BTD%2BtZ2%2F1CUC80UcdCAVjSnK0ttJ7AcSkgIhAMU8QVQ%2BgxabZq1QVkNfYzIir6Ivk5mcO3Om%2FIhVmjefKv8DCEIQABoMNjM3NDIzMTgzODA1IgxELOVlkWoS7yEyiRgq3AMGue8uspTZuFniWf7MT9M4dx8MjCDkvS4CbrqvPA9%2F01s%2FFGDb17GsDk9iymPZSMj0yY7PjftemJFzHql%2Bx6WNyro%2FbFj354BB7Qo%2FxnRtOwAXQ%2FwCyN%2BZdD7b6gvFjg2KsF25mqITnHT9452jcAV363nIbvYNo15WnhGw7d%2FkTSu3OlYsii%2FIzMh%2Bc%2F4lEaAz259hHT1wx9jdmf1k6n96Hpwt8MziRqgtHKWe47T5pRvgbxtUIlzU3DaIelIfSy6cY01WQHatw6mzmkmEmnrJfk8sDqiDKy6l%2BMFaTju%2BpznFbmQRGEYPQI6TVD91lEw1W5iQHvU0QGm7A7IuY3mjLgMyaFK8sWqvTM6%2Fvb6UFAKQ3w%2FaegmuQuviv75as15gU5SjhcgNL2W6pABxkZI9Wxc5jaRY1dHgQKuBDRcXQCyTr9hwbkDOg8qVeIylO%2BjSmap7psrscOaJYYhGMOkvCorOLlKchBLX6Zicq8HSflciK3biHv%2B59P0L3IW3YZGxNH2CyU1z8D95Fqpnq4Sql4ME18X00e2kfXdjDI5SFoDq%2FwGucc8JTwmb%2FcfrjiOBdio26KbRq8GORpsRDTbsXHsv0LXlKAWsgy%2BIfc96nyFI34gExPJCv1GXTTCr3MHEBjqkASQL4cUHKoaU0%2BsxhE0FLMXUlj3kC%2BaEoOXlCO%2FuVuP7FqjLbC6AN6pJE%2FV0%2FoRWT9P0Pr0QOZIbx5Bgql4RLs5e2bWab2CAg7ESJ7rvv57WFm%2FIM112Gnf1U7mhSqtt71%2B7G5XJcZqQ0kbqzCPDhezwD5MkCz2Dou0u6PnnH5bA6WqBfY2JF7KwrQIuFeiBPze%2F4nmbgz4zox29MZnn%2B0c4sXh1&X-Amz-Signature=e88007bfb9b076f182a039c9c14893bc2f7d56ce8b33b5c16c3c411c1e5785ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXSB52W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC701Ff845%2B%2BTD%2BtZ2%2F1CUC80UcdCAVjSnK0ttJ7AcSkgIhAMU8QVQ%2BgxabZq1QVkNfYzIir6Ivk5mcO3Om%2FIhVmjefKv8DCEIQABoMNjM3NDIzMTgzODA1IgxELOVlkWoS7yEyiRgq3AMGue8uspTZuFniWf7MT9M4dx8MjCDkvS4CbrqvPA9%2F01s%2FFGDb17GsDk9iymPZSMj0yY7PjftemJFzHql%2Bx6WNyro%2FbFj354BB7Qo%2FxnRtOwAXQ%2FwCyN%2BZdD7b6gvFjg2KsF25mqITnHT9452jcAV363nIbvYNo15WnhGw7d%2FkTSu3OlYsii%2FIzMh%2Bc%2F4lEaAz259hHT1wx9jdmf1k6n96Hpwt8MziRqgtHKWe47T5pRvgbxtUIlzU3DaIelIfSy6cY01WQHatw6mzmkmEmnrJfk8sDqiDKy6l%2BMFaTju%2BpznFbmQRGEYPQI6TVD91lEw1W5iQHvU0QGm7A7IuY3mjLgMyaFK8sWqvTM6%2Fvb6UFAKQ3w%2FaegmuQuviv75as15gU5SjhcgNL2W6pABxkZI9Wxc5jaRY1dHgQKuBDRcXQCyTr9hwbkDOg8qVeIylO%2BjSmap7psrscOaJYYhGMOkvCorOLlKchBLX6Zicq8HSflciK3biHv%2B59P0L3IW3YZGxNH2CyU1z8D95Fqpnq4Sql4ME18X00e2kfXdjDI5SFoDq%2FwGucc8JTwmb%2FcfrjiOBdio26KbRq8GORpsRDTbsXHsv0LXlKAWsgy%2BIfc96nyFI34gExPJCv1GXTTCr3MHEBjqkASQL4cUHKoaU0%2BsxhE0FLMXUlj3kC%2BaEoOXlCO%2FuVuP7FqjLbC6AN6pJE%2FV0%2FoRWT9P0Pr0QOZIbx5Bgql4RLs5e2bWab2CAg7ESJ7rvv57WFm%2FIM112Gnf1U7mhSqtt71%2B7G5XJcZqQ0kbqzCPDhezwD5MkCz2Dou0u6PnnH5bA6WqBfY2JF7KwrQIuFeiBPze%2F4nmbgz4zox29MZnn%2B0c4sXh1&X-Amz-Signature=bd73fe272073bbe5a5e3895745ed58acdb96a26a93f80b23d75b85f80186e808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
