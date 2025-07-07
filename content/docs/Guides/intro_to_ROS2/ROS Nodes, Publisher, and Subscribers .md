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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV4JQYL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXA9vSO7JygWbKkJukJhz1LBvRGkiJV0HLmuv15hGJfQIhAMHYOkqyOWsVQi1WvPZPIc7FOKWyARwxpS8YIURyN8NhKv8DCGkQABoMNjM3NDIzMTgzODA1IgwY9dk%2FlzchEkSO4W0q3AP1TLyCKgvCva3Bl9Vac814%2Fu%2FuMSuhT3vgf9re3bLtGp0HO32zGVOrRIZz75jAFVk0BC99vzVS1ZccHxPAdMR1sK0teSY62%2BZycASZHdTMBFTsdfjtvqmHTFAWLZdQWJaj6cUtMmJJTPqZaJx1lONeyh4vX0Wm05emC4Wj6AoCr3CQvw28H6ApME8t2A2%2BaioCqHcV6Nb9y9eqfZnfhT9%2BeLunpOxMvc8cPFDdFkZ4S49ypnDYcuyXHX5hBzfI%2B%2F7iULqyHKBRHqrf0LJI7lpaPiM59UKixu6VZWNmY4wpIp15t%2FTgC4fLvSL%2FDQVn6WPQSZV5MbTcHbYfXLNZV8tZs2czTojKDGNoJaqwEK5qSVNDOdnLGL0W0Lq%2Bevs%2F8K%2FQ%2BkRqydh%2FUnF1EPIfD9Es6a9cto%2BLlbDeqphwW%2FIVdkRLPh7yhHpH8KpLXuRU%2F%2FPvC5RLGYh5EU52qXseSf7Ky2jTHz%2FSch7bQcSvF0XXWCiwYgiYkkFqHY9NoKnJyN3yxlhJCXY0eYS%2FysEhY3d%2Brq%2B5FnWRswdkr2w5WVQB9FS0i3mA9m3nnurlSk0LzsxhqMEeRDq0M91Kf%2BP00Dz9N96AfQkWb0CizK569C2USYrjZtGTWJXJ%2Fy%2BzKjDmoqzDBjqkARWXtMPuIjc%2FkTZs0AKCMcoWIzs3PVVSszvxSwuyywWOWcwRkaOpc%2Frfow0qgi1a8Zl5NrwfGudenBrM1P8JuKYP%2BNbIPyn7H6cnugC8VA5RYQ8CJWXX2nEx6IagdXDEyafjbmZp2sIuwCCGbEQUEziy8Bvan6SKjUtq0xbAPj5ym83pKA3flzumtXvYQOCefP4umpLSkEfIEz3aquGKruvgqSrd&X-Amz-Signature=134a859ac1c56c001340879cb876b510e1fe0b4446f16198c91413809b481f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV4JQYL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXA9vSO7JygWbKkJukJhz1LBvRGkiJV0HLmuv15hGJfQIhAMHYOkqyOWsVQi1WvPZPIc7FOKWyARwxpS8YIURyN8NhKv8DCGkQABoMNjM3NDIzMTgzODA1IgwY9dk%2FlzchEkSO4W0q3AP1TLyCKgvCva3Bl9Vac814%2Fu%2FuMSuhT3vgf9re3bLtGp0HO32zGVOrRIZz75jAFVk0BC99vzVS1ZccHxPAdMR1sK0teSY62%2BZycASZHdTMBFTsdfjtvqmHTFAWLZdQWJaj6cUtMmJJTPqZaJx1lONeyh4vX0Wm05emC4Wj6AoCr3CQvw28H6ApME8t2A2%2BaioCqHcV6Nb9y9eqfZnfhT9%2BeLunpOxMvc8cPFDdFkZ4S49ypnDYcuyXHX5hBzfI%2B%2F7iULqyHKBRHqrf0LJI7lpaPiM59UKixu6VZWNmY4wpIp15t%2FTgC4fLvSL%2FDQVn6WPQSZV5MbTcHbYfXLNZV8tZs2czTojKDGNoJaqwEK5qSVNDOdnLGL0W0Lq%2Bevs%2F8K%2FQ%2BkRqydh%2FUnF1EPIfD9Es6a9cto%2BLlbDeqphwW%2FIVdkRLPh7yhHpH8KpLXuRU%2F%2FPvC5RLGYh5EU52qXseSf7Ky2jTHz%2FSch7bQcSvF0XXWCiwYgiYkkFqHY9NoKnJyN3yxlhJCXY0eYS%2FysEhY3d%2Brq%2B5FnWRswdkr2w5WVQB9FS0i3mA9m3nnurlSk0LzsxhqMEeRDq0M91Kf%2BP00Dz9N96AfQkWb0CizK569C2USYrjZtGTWJXJ%2Fy%2BzKjDmoqzDBjqkARWXtMPuIjc%2FkTZs0AKCMcoWIzs3PVVSszvxSwuyywWOWcwRkaOpc%2Frfow0qgi1a8Zl5NrwfGudenBrM1P8JuKYP%2BNbIPyn7H6cnugC8VA5RYQ8CJWXX2nEx6IagdXDEyafjbmZp2sIuwCCGbEQUEziy8Bvan6SKjUtq0xbAPj5ym83pKA3flzumtXvYQOCefP4umpLSkEfIEz3aquGKruvgqSrd&X-Amz-Signature=659bd599ffb1c01fa806d2edaed1c48cb67ac87bc63fb01c91566f376aad9633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV4JQYL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXA9vSO7JygWbKkJukJhz1LBvRGkiJV0HLmuv15hGJfQIhAMHYOkqyOWsVQi1WvPZPIc7FOKWyARwxpS8YIURyN8NhKv8DCGkQABoMNjM3NDIzMTgzODA1IgwY9dk%2FlzchEkSO4W0q3AP1TLyCKgvCva3Bl9Vac814%2Fu%2FuMSuhT3vgf9re3bLtGp0HO32zGVOrRIZz75jAFVk0BC99vzVS1ZccHxPAdMR1sK0teSY62%2BZycASZHdTMBFTsdfjtvqmHTFAWLZdQWJaj6cUtMmJJTPqZaJx1lONeyh4vX0Wm05emC4Wj6AoCr3CQvw28H6ApME8t2A2%2BaioCqHcV6Nb9y9eqfZnfhT9%2BeLunpOxMvc8cPFDdFkZ4S49ypnDYcuyXHX5hBzfI%2B%2F7iULqyHKBRHqrf0LJI7lpaPiM59UKixu6VZWNmY4wpIp15t%2FTgC4fLvSL%2FDQVn6WPQSZV5MbTcHbYfXLNZV8tZs2czTojKDGNoJaqwEK5qSVNDOdnLGL0W0Lq%2Bevs%2F8K%2FQ%2BkRqydh%2FUnF1EPIfD9Es6a9cto%2BLlbDeqphwW%2FIVdkRLPh7yhHpH8KpLXuRU%2F%2FPvC5RLGYh5EU52qXseSf7Ky2jTHz%2FSch7bQcSvF0XXWCiwYgiYkkFqHY9NoKnJyN3yxlhJCXY0eYS%2FysEhY3d%2Brq%2B5FnWRswdkr2w5WVQB9FS0i3mA9m3nnurlSk0LzsxhqMEeRDq0M91Kf%2BP00Dz9N96AfQkWb0CizK569C2USYrjZtGTWJXJ%2Fy%2BzKjDmoqzDBjqkARWXtMPuIjc%2FkTZs0AKCMcoWIzs3PVVSszvxSwuyywWOWcwRkaOpc%2Frfow0qgi1a8Zl5NrwfGudenBrM1P8JuKYP%2BNbIPyn7H6cnugC8VA5RYQ8CJWXX2nEx6IagdXDEyafjbmZp2sIuwCCGbEQUEziy8Bvan6SKjUtq0xbAPj5ym83pKA3flzumtXvYQOCefP4umpLSkEfIEz3aquGKruvgqSrd&X-Amz-Signature=e127a7f19f44a0b8ea2accb57762883916e68caf41ba3923b3d58248e9a4792f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV4JQYL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXA9vSO7JygWbKkJukJhz1LBvRGkiJV0HLmuv15hGJfQIhAMHYOkqyOWsVQi1WvPZPIc7FOKWyARwxpS8YIURyN8NhKv8DCGkQABoMNjM3NDIzMTgzODA1IgwY9dk%2FlzchEkSO4W0q3AP1TLyCKgvCva3Bl9Vac814%2Fu%2FuMSuhT3vgf9re3bLtGp0HO32zGVOrRIZz75jAFVk0BC99vzVS1ZccHxPAdMR1sK0teSY62%2BZycASZHdTMBFTsdfjtvqmHTFAWLZdQWJaj6cUtMmJJTPqZaJx1lONeyh4vX0Wm05emC4Wj6AoCr3CQvw28H6ApME8t2A2%2BaioCqHcV6Nb9y9eqfZnfhT9%2BeLunpOxMvc8cPFDdFkZ4S49ypnDYcuyXHX5hBzfI%2B%2F7iULqyHKBRHqrf0LJI7lpaPiM59UKixu6VZWNmY4wpIp15t%2FTgC4fLvSL%2FDQVn6WPQSZV5MbTcHbYfXLNZV8tZs2czTojKDGNoJaqwEK5qSVNDOdnLGL0W0Lq%2Bevs%2F8K%2FQ%2BkRqydh%2FUnF1EPIfD9Es6a9cto%2BLlbDeqphwW%2FIVdkRLPh7yhHpH8KpLXuRU%2F%2FPvC5RLGYh5EU52qXseSf7Ky2jTHz%2FSch7bQcSvF0XXWCiwYgiYkkFqHY9NoKnJyN3yxlhJCXY0eYS%2FysEhY3d%2Brq%2B5FnWRswdkr2w5WVQB9FS0i3mA9m3nnurlSk0LzsxhqMEeRDq0M91Kf%2BP00Dz9N96AfQkWb0CizK569C2USYrjZtGTWJXJ%2Fy%2BzKjDmoqzDBjqkARWXtMPuIjc%2FkTZs0AKCMcoWIzs3PVVSszvxSwuyywWOWcwRkaOpc%2Frfow0qgi1a8Zl5NrwfGudenBrM1P8JuKYP%2BNbIPyn7H6cnugC8VA5RYQ8CJWXX2nEx6IagdXDEyafjbmZp2sIuwCCGbEQUEziy8Bvan6SKjUtq0xbAPj5ym83pKA3flzumtXvYQOCefP4umpLSkEfIEz3aquGKruvgqSrd&X-Amz-Signature=bb256d9217fb96d10d902eda3a8c84591db23a07cc34ed7cc1c1f557b5647ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV4JQYL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXA9vSO7JygWbKkJukJhz1LBvRGkiJV0HLmuv15hGJfQIhAMHYOkqyOWsVQi1WvPZPIc7FOKWyARwxpS8YIURyN8NhKv8DCGkQABoMNjM3NDIzMTgzODA1IgwY9dk%2FlzchEkSO4W0q3AP1TLyCKgvCva3Bl9Vac814%2Fu%2FuMSuhT3vgf9re3bLtGp0HO32zGVOrRIZz75jAFVk0BC99vzVS1ZccHxPAdMR1sK0teSY62%2BZycASZHdTMBFTsdfjtvqmHTFAWLZdQWJaj6cUtMmJJTPqZaJx1lONeyh4vX0Wm05emC4Wj6AoCr3CQvw28H6ApME8t2A2%2BaioCqHcV6Nb9y9eqfZnfhT9%2BeLunpOxMvc8cPFDdFkZ4S49ypnDYcuyXHX5hBzfI%2B%2F7iULqyHKBRHqrf0LJI7lpaPiM59UKixu6VZWNmY4wpIp15t%2FTgC4fLvSL%2FDQVn6WPQSZV5MbTcHbYfXLNZV8tZs2czTojKDGNoJaqwEK5qSVNDOdnLGL0W0Lq%2Bevs%2F8K%2FQ%2BkRqydh%2FUnF1EPIfD9Es6a9cto%2BLlbDeqphwW%2FIVdkRLPh7yhHpH8KpLXuRU%2F%2FPvC5RLGYh5EU52qXseSf7Ky2jTHz%2FSch7bQcSvF0XXWCiwYgiYkkFqHY9NoKnJyN3yxlhJCXY0eYS%2FysEhY3d%2Brq%2B5FnWRswdkr2w5WVQB9FS0i3mA9m3nnurlSk0LzsxhqMEeRDq0M91Kf%2BP00Dz9N96AfQkWb0CizK569C2USYrjZtGTWJXJ%2Fy%2BzKjDmoqzDBjqkARWXtMPuIjc%2FkTZs0AKCMcoWIzs3PVVSszvxSwuyywWOWcwRkaOpc%2Frfow0qgi1a8Zl5NrwfGudenBrM1P8JuKYP%2BNbIPyn7H6cnugC8VA5RYQ8CJWXX2nEx6IagdXDEyafjbmZp2sIuwCCGbEQUEziy8Bvan6SKjUtq0xbAPj5ym83pKA3flzumtXvYQOCefP4umpLSkEfIEz3aquGKruvgqSrd&X-Amz-Signature=968bdcba4a28d478442143f93d87fe7b7101259d3879a8b4994598aba8e45ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV4JQYL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXA9vSO7JygWbKkJukJhz1LBvRGkiJV0HLmuv15hGJfQIhAMHYOkqyOWsVQi1WvPZPIc7FOKWyARwxpS8YIURyN8NhKv8DCGkQABoMNjM3NDIzMTgzODA1IgwY9dk%2FlzchEkSO4W0q3AP1TLyCKgvCva3Bl9Vac814%2Fu%2FuMSuhT3vgf9re3bLtGp0HO32zGVOrRIZz75jAFVk0BC99vzVS1ZccHxPAdMR1sK0teSY62%2BZycASZHdTMBFTsdfjtvqmHTFAWLZdQWJaj6cUtMmJJTPqZaJx1lONeyh4vX0Wm05emC4Wj6AoCr3CQvw28H6ApME8t2A2%2BaioCqHcV6Nb9y9eqfZnfhT9%2BeLunpOxMvc8cPFDdFkZ4S49ypnDYcuyXHX5hBzfI%2B%2F7iULqyHKBRHqrf0LJI7lpaPiM59UKixu6VZWNmY4wpIp15t%2FTgC4fLvSL%2FDQVn6WPQSZV5MbTcHbYfXLNZV8tZs2czTojKDGNoJaqwEK5qSVNDOdnLGL0W0Lq%2Bevs%2F8K%2FQ%2BkRqydh%2FUnF1EPIfD9Es6a9cto%2BLlbDeqphwW%2FIVdkRLPh7yhHpH8KpLXuRU%2F%2FPvC5RLGYh5EU52qXseSf7Ky2jTHz%2FSch7bQcSvF0XXWCiwYgiYkkFqHY9NoKnJyN3yxlhJCXY0eYS%2FysEhY3d%2Brq%2B5FnWRswdkr2w5WVQB9FS0i3mA9m3nnurlSk0LzsxhqMEeRDq0M91Kf%2BP00Dz9N96AfQkWb0CizK569C2USYrjZtGTWJXJ%2Fy%2BzKjDmoqzDBjqkARWXtMPuIjc%2FkTZs0AKCMcoWIzs3PVVSszvxSwuyywWOWcwRkaOpc%2Frfow0qgi1a8Zl5NrwfGudenBrM1P8JuKYP%2BNbIPyn7H6cnugC8VA5RYQ8CJWXX2nEx6IagdXDEyafjbmZp2sIuwCCGbEQUEziy8Bvan6SKjUtq0xbAPj5ym83pKA3flzumtXvYQOCefP4umpLSkEfIEz3aquGKruvgqSrd&X-Amz-Signature=9cbc97ed74319dec3d2ebe84b4d8d486aeb75183defd9ef9dedf61ed740e3de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV4JQYL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXA9vSO7JygWbKkJukJhz1LBvRGkiJV0HLmuv15hGJfQIhAMHYOkqyOWsVQi1WvPZPIc7FOKWyARwxpS8YIURyN8NhKv8DCGkQABoMNjM3NDIzMTgzODA1IgwY9dk%2FlzchEkSO4W0q3AP1TLyCKgvCva3Bl9Vac814%2Fu%2FuMSuhT3vgf9re3bLtGp0HO32zGVOrRIZz75jAFVk0BC99vzVS1ZccHxPAdMR1sK0teSY62%2BZycASZHdTMBFTsdfjtvqmHTFAWLZdQWJaj6cUtMmJJTPqZaJx1lONeyh4vX0Wm05emC4Wj6AoCr3CQvw28H6ApME8t2A2%2BaioCqHcV6Nb9y9eqfZnfhT9%2BeLunpOxMvc8cPFDdFkZ4S49ypnDYcuyXHX5hBzfI%2B%2F7iULqyHKBRHqrf0LJI7lpaPiM59UKixu6VZWNmY4wpIp15t%2FTgC4fLvSL%2FDQVn6WPQSZV5MbTcHbYfXLNZV8tZs2czTojKDGNoJaqwEK5qSVNDOdnLGL0W0Lq%2Bevs%2F8K%2FQ%2BkRqydh%2FUnF1EPIfD9Es6a9cto%2BLlbDeqphwW%2FIVdkRLPh7yhHpH8KpLXuRU%2F%2FPvC5RLGYh5EU52qXseSf7Ky2jTHz%2FSch7bQcSvF0XXWCiwYgiYkkFqHY9NoKnJyN3yxlhJCXY0eYS%2FysEhY3d%2Brq%2B5FnWRswdkr2w5WVQB9FS0i3mA9m3nnurlSk0LzsxhqMEeRDq0M91Kf%2BP00Dz9N96AfQkWb0CizK569C2USYrjZtGTWJXJ%2Fy%2BzKjDmoqzDBjqkARWXtMPuIjc%2FkTZs0AKCMcoWIzs3PVVSszvxSwuyywWOWcwRkaOpc%2Frfow0qgi1a8Zl5NrwfGudenBrM1P8JuKYP%2BNbIPyn7H6cnugC8VA5RYQ8CJWXX2nEx6IagdXDEyafjbmZp2sIuwCCGbEQUEziy8Bvan6SKjUtq0xbAPj5ym83pKA3flzumtXvYQOCefP4umpLSkEfIEz3aquGKruvgqSrd&X-Amz-Signature=63ab5bd8c67bbb360baf435a073563f564dc94c8bf8e7d01a6fb5bffa21f91f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV4JQYL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXA9vSO7JygWbKkJukJhz1LBvRGkiJV0HLmuv15hGJfQIhAMHYOkqyOWsVQi1WvPZPIc7FOKWyARwxpS8YIURyN8NhKv8DCGkQABoMNjM3NDIzMTgzODA1IgwY9dk%2FlzchEkSO4W0q3AP1TLyCKgvCva3Bl9Vac814%2Fu%2FuMSuhT3vgf9re3bLtGp0HO32zGVOrRIZz75jAFVk0BC99vzVS1ZccHxPAdMR1sK0teSY62%2BZycASZHdTMBFTsdfjtvqmHTFAWLZdQWJaj6cUtMmJJTPqZaJx1lONeyh4vX0Wm05emC4Wj6AoCr3CQvw28H6ApME8t2A2%2BaioCqHcV6Nb9y9eqfZnfhT9%2BeLunpOxMvc8cPFDdFkZ4S49ypnDYcuyXHX5hBzfI%2B%2F7iULqyHKBRHqrf0LJI7lpaPiM59UKixu6VZWNmY4wpIp15t%2FTgC4fLvSL%2FDQVn6WPQSZV5MbTcHbYfXLNZV8tZs2czTojKDGNoJaqwEK5qSVNDOdnLGL0W0Lq%2Bevs%2F8K%2FQ%2BkRqydh%2FUnF1EPIfD9Es6a9cto%2BLlbDeqphwW%2FIVdkRLPh7yhHpH8KpLXuRU%2F%2FPvC5RLGYh5EU52qXseSf7Ky2jTHz%2FSch7bQcSvF0XXWCiwYgiYkkFqHY9NoKnJyN3yxlhJCXY0eYS%2FysEhY3d%2Brq%2B5FnWRswdkr2w5WVQB9FS0i3mA9m3nnurlSk0LzsxhqMEeRDq0M91Kf%2BP00Dz9N96AfQkWb0CizK569C2USYrjZtGTWJXJ%2Fy%2BzKjDmoqzDBjqkARWXtMPuIjc%2FkTZs0AKCMcoWIzs3PVVSszvxSwuyywWOWcwRkaOpc%2Frfow0qgi1a8Zl5NrwfGudenBrM1P8JuKYP%2BNbIPyn7H6cnugC8VA5RYQ8CJWXX2nEx6IagdXDEyafjbmZp2sIuwCCGbEQUEziy8Bvan6SKjUtq0xbAPj5ym83pKA3flzumtXvYQOCefP4umpLSkEfIEz3aquGKruvgqSrd&X-Amz-Signature=1c6796a7a70999a4596eb8cf99e87f2539c95674a4bfad3b9199fc15f706055a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
