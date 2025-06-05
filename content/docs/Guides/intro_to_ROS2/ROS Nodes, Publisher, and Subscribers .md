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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXXTVOQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD1Ab7OU9Q866Y80%2Fzl%2B773sb4lv3OSW%2BqgjwOCs%2BqlzgIhALphn4wjw2auQ%2BV%2B6Q%2BRSvO8Wpey8sd1j7i9AkGrv08yKv8DCEEQABoMNjM3NDIzMTgzODA1Igyo1L7tejqF5dqvlW0q3AP%2FFTcb4abQGKW%2Fmprk4dzIEZFkFkORdnpF3bFBqTC%2Ff79NRv3N29Sr9xYQlR6qy1n%2F1oZUA0p219Wr3c82J2y6Hg%2FQMDqPqUxpv8ho%2BbldBfK01xSzhzN15XkMsGccoVNTYkpiQlUi%2BDV5%2BDNGOWTZWOBrsHYGeelS4P7e8Pz4yz%2FA3TbmRqXPImoFHQsQKlEslEc0U8f6ThEG3NrsYJFqvpEymEttPiA8HMX3%2FFlyaeJBLDteAOTziEPI%2FKjHUzacrsUqiXx4%2FblzacOCUP7hG3Elh68dQmh2M5HQO9cfRv12eibu%2BcPMjo9%2BmtEXWHib77igs26%2Fp8ImspTL%2F8idetCJFOv%2BiMaUh9crrHMLkZKA%2F35RuVIX2wylVrHOElnYbh%2FG0lAxbkD1qYU7nq2F3PLsieOXGKgi5gcXqu1SzlbzDGSC4E77mg4VI5KvYWXA%2BMMe1Hi%2Fd%2BvDeQyam%2F89yLOO5wW1J1pyM5WBjuEV84%2Fzyna16I6eFQ0ji7LAvqiOBm1gq26aT5zTlCO8kgyZwue3XgmtWb3gaSUEX3%2Bp2a%2FKDmgICeOoKRR4hFrDxYGJvUnASxRcRM1%2B%2BuRftsgKr3lqcYakXwXcWJ%2FdvEYVknkwVAftF5vD9Lh4ZzCgi4XCBjqkAWGV2cqV9IUoH1eRefRvBAleNTwWGxjACLETifi4pylhX5MWBEd78bPLKCrDCoBkWpI19sUD3orpGMCWc%2Fy6vmJeIEo66L3U%2FsYJQwBdyPdgHCul%2BIVk3AD6dyhlheCWbOKzXBQtGN1DGZ162aZfYCQj14mEuPUqlbeeF6ClEVNvO8QlWjTnC7wdgQHuvlbHm3CVlZuyXLylqcRdCn2tzdiCXEG7&X-Amz-Signature=9fe0585d996105f6fd64add06d20e1aa26e41bbb0d41f4df78483812bccc4b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXXTVOQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD1Ab7OU9Q866Y80%2Fzl%2B773sb4lv3OSW%2BqgjwOCs%2BqlzgIhALphn4wjw2auQ%2BV%2B6Q%2BRSvO8Wpey8sd1j7i9AkGrv08yKv8DCEEQABoMNjM3NDIzMTgzODA1Igyo1L7tejqF5dqvlW0q3AP%2FFTcb4abQGKW%2Fmprk4dzIEZFkFkORdnpF3bFBqTC%2Ff79NRv3N29Sr9xYQlR6qy1n%2F1oZUA0p219Wr3c82J2y6Hg%2FQMDqPqUxpv8ho%2BbldBfK01xSzhzN15XkMsGccoVNTYkpiQlUi%2BDV5%2BDNGOWTZWOBrsHYGeelS4P7e8Pz4yz%2FA3TbmRqXPImoFHQsQKlEslEc0U8f6ThEG3NrsYJFqvpEymEttPiA8HMX3%2FFlyaeJBLDteAOTziEPI%2FKjHUzacrsUqiXx4%2FblzacOCUP7hG3Elh68dQmh2M5HQO9cfRv12eibu%2BcPMjo9%2BmtEXWHib77igs26%2Fp8ImspTL%2F8idetCJFOv%2BiMaUh9crrHMLkZKA%2F35RuVIX2wylVrHOElnYbh%2FG0lAxbkD1qYU7nq2F3PLsieOXGKgi5gcXqu1SzlbzDGSC4E77mg4VI5KvYWXA%2BMMe1Hi%2Fd%2BvDeQyam%2F89yLOO5wW1J1pyM5WBjuEV84%2Fzyna16I6eFQ0ji7LAvqiOBm1gq26aT5zTlCO8kgyZwue3XgmtWb3gaSUEX3%2Bp2a%2FKDmgICeOoKRR4hFrDxYGJvUnASxRcRM1%2B%2BuRftsgKr3lqcYakXwXcWJ%2FdvEYVknkwVAftF5vD9Lh4ZzCgi4XCBjqkAWGV2cqV9IUoH1eRefRvBAleNTwWGxjACLETifi4pylhX5MWBEd78bPLKCrDCoBkWpI19sUD3orpGMCWc%2Fy6vmJeIEo66L3U%2FsYJQwBdyPdgHCul%2BIVk3AD6dyhlheCWbOKzXBQtGN1DGZ162aZfYCQj14mEuPUqlbeeF6ClEVNvO8QlWjTnC7wdgQHuvlbHm3CVlZuyXLylqcRdCn2tzdiCXEG7&X-Amz-Signature=6c52281ca320bea5aee187526b37c26af106f1fa9e861542a43430ac5eb1ef78&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXXTVOQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD1Ab7OU9Q866Y80%2Fzl%2B773sb4lv3OSW%2BqgjwOCs%2BqlzgIhALphn4wjw2auQ%2BV%2B6Q%2BRSvO8Wpey8sd1j7i9AkGrv08yKv8DCEEQABoMNjM3NDIzMTgzODA1Igyo1L7tejqF5dqvlW0q3AP%2FFTcb4abQGKW%2Fmprk4dzIEZFkFkORdnpF3bFBqTC%2Ff79NRv3N29Sr9xYQlR6qy1n%2F1oZUA0p219Wr3c82J2y6Hg%2FQMDqPqUxpv8ho%2BbldBfK01xSzhzN15XkMsGccoVNTYkpiQlUi%2BDV5%2BDNGOWTZWOBrsHYGeelS4P7e8Pz4yz%2FA3TbmRqXPImoFHQsQKlEslEc0U8f6ThEG3NrsYJFqvpEymEttPiA8HMX3%2FFlyaeJBLDteAOTziEPI%2FKjHUzacrsUqiXx4%2FblzacOCUP7hG3Elh68dQmh2M5HQO9cfRv12eibu%2BcPMjo9%2BmtEXWHib77igs26%2Fp8ImspTL%2F8idetCJFOv%2BiMaUh9crrHMLkZKA%2F35RuVIX2wylVrHOElnYbh%2FG0lAxbkD1qYU7nq2F3PLsieOXGKgi5gcXqu1SzlbzDGSC4E77mg4VI5KvYWXA%2BMMe1Hi%2Fd%2BvDeQyam%2F89yLOO5wW1J1pyM5WBjuEV84%2Fzyna16I6eFQ0ji7LAvqiOBm1gq26aT5zTlCO8kgyZwue3XgmtWb3gaSUEX3%2Bp2a%2FKDmgICeOoKRR4hFrDxYGJvUnASxRcRM1%2B%2BuRftsgKr3lqcYakXwXcWJ%2FdvEYVknkwVAftF5vD9Lh4ZzCgi4XCBjqkAWGV2cqV9IUoH1eRefRvBAleNTwWGxjACLETifi4pylhX5MWBEd78bPLKCrDCoBkWpI19sUD3orpGMCWc%2Fy6vmJeIEo66L3U%2FsYJQwBdyPdgHCul%2BIVk3AD6dyhlheCWbOKzXBQtGN1DGZ162aZfYCQj14mEuPUqlbeeF6ClEVNvO8QlWjTnC7wdgQHuvlbHm3CVlZuyXLylqcRdCn2tzdiCXEG7&X-Amz-Signature=081008eaa15d7e12aaf6ef192c27ee80e98b7ee5355019bbdd35368bfadbf890&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXXTVOQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD1Ab7OU9Q866Y80%2Fzl%2B773sb4lv3OSW%2BqgjwOCs%2BqlzgIhALphn4wjw2auQ%2BV%2B6Q%2BRSvO8Wpey8sd1j7i9AkGrv08yKv8DCEEQABoMNjM3NDIzMTgzODA1Igyo1L7tejqF5dqvlW0q3AP%2FFTcb4abQGKW%2Fmprk4dzIEZFkFkORdnpF3bFBqTC%2Ff79NRv3N29Sr9xYQlR6qy1n%2F1oZUA0p219Wr3c82J2y6Hg%2FQMDqPqUxpv8ho%2BbldBfK01xSzhzN15XkMsGccoVNTYkpiQlUi%2BDV5%2BDNGOWTZWOBrsHYGeelS4P7e8Pz4yz%2FA3TbmRqXPImoFHQsQKlEslEc0U8f6ThEG3NrsYJFqvpEymEttPiA8HMX3%2FFlyaeJBLDteAOTziEPI%2FKjHUzacrsUqiXx4%2FblzacOCUP7hG3Elh68dQmh2M5HQO9cfRv12eibu%2BcPMjo9%2BmtEXWHib77igs26%2Fp8ImspTL%2F8idetCJFOv%2BiMaUh9crrHMLkZKA%2F35RuVIX2wylVrHOElnYbh%2FG0lAxbkD1qYU7nq2F3PLsieOXGKgi5gcXqu1SzlbzDGSC4E77mg4VI5KvYWXA%2BMMe1Hi%2Fd%2BvDeQyam%2F89yLOO5wW1J1pyM5WBjuEV84%2Fzyna16I6eFQ0ji7LAvqiOBm1gq26aT5zTlCO8kgyZwue3XgmtWb3gaSUEX3%2Bp2a%2FKDmgICeOoKRR4hFrDxYGJvUnASxRcRM1%2B%2BuRftsgKr3lqcYakXwXcWJ%2FdvEYVknkwVAftF5vD9Lh4ZzCgi4XCBjqkAWGV2cqV9IUoH1eRefRvBAleNTwWGxjACLETifi4pylhX5MWBEd78bPLKCrDCoBkWpI19sUD3orpGMCWc%2Fy6vmJeIEo66L3U%2FsYJQwBdyPdgHCul%2BIVk3AD6dyhlheCWbOKzXBQtGN1DGZ162aZfYCQj14mEuPUqlbeeF6ClEVNvO8QlWjTnC7wdgQHuvlbHm3CVlZuyXLylqcRdCn2tzdiCXEG7&X-Amz-Signature=1fa95b88de7f32e01da29b61b925d85e6c4a6fb684ed798d7884c368916951a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXXTVOQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD1Ab7OU9Q866Y80%2Fzl%2B773sb4lv3OSW%2BqgjwOCs%2BqlzgIhALphn4wjw2auQ%2BV%2B6Q%2BRSvO8Wpey8sd1j7i9AkGrv08yKv8DCEEQABoMNjM3NDIzMTgzODA1Igyo1L7tejqF5dqvlW0q3AP%2FFTcb4abQGKW%2Fmprk4dzIEZFkFkORdnpF3bFBqTC%2Ff79NRv3N29Sr9xYQlR6qy1n%2F1oZUA0p219Wr3c82J2y6Hg%2FQMDqPqUxpv8ho%2BbldBfK01xSzhzN15XkMsGccoVNTYkpiQlUi%2BDV5%2BDNGOWTZWOBrsHYGeelS4P7e8Pz4yz%2FA3TbmRqXPImoFHQsQKlEslEc0U8f6ThEG3NrsYJFqvpEymEttPiA8HMX3%2FFlyaeJBLDteAOTziEPI%2FKjHUzacrsUqiXx4%2FblzacOCUP7hG3Elh68dQmh2M5HQO9cfRv12eibu%2BcPMjo9%2BmtEXWHib77igs26%2Fp8ImspTL%2F8idetCJFOv%2BiMaUh9crrHMLkZKA%2F35RuVIX2wylVrHOElnYbh%2FG0lAxbkD1qYU7nq2F3PLsieOXGKgi5gcXqu1SzlbzDGSC4E77mg4VI5KvYWXA%2BMMe1Hi%2Fd%2BvDeQyam%2F89yLOO5wW1J1pyM5WBjuEV84%2Fzyna16I6eFQ0ji7LAvqiOBm1gq26aT5zTlCO8kgyZwue3XgmtWb3gaSUEX3%2Bp2a%2FKDmgICeOoKRR4hFrDxYGJvUnASxRcRM1%2B%2BuRftsgKr3lqcYakXwXcWJ%2FdvEYVknkwVAftF5vD9Lh4ZzCgi4XCBjqkAWGV2cqV9IUoH1eRefRvBAleNTwWGxjACLETifi4pylhX5MWBEd78bPLKCrDCoBkWpI19sUD3orpGMCWc%2Fy6vmJeIEo66L3U%2FsYJQwBdyPdgHCul%2BIVk3AD6dyhlheCWbOKzXBQtGN1DGZ162aZfYCQj14mEuPUqlbeeF6ClEVNvO8QlWjTnC7wdgQHuvlbHm3CVlZuyXLylqcRdCn2tzdiCXEG7&X-Amz-Signature=b533b25ec42b3487eed7355b404da5c1a91ca6570c88cb01c4038ee54b35ccb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXXTVOQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD1Ab7OU9Q866Y80%2Fzl%2B773sb4lv3OSW%2BqgjwOCs%2BqlzgIhALphn4wjw2auQ%2BV%2B6Q%2BRSvO8Wpey8sd1j7i9AkGrv08yKv8DCEEQABoMNjM3NDIzMTgzODA1Igyo1L7tejqF5dqvlW0q3AP%2FFTcb4abQGKW%2Fmprk4dzIEZFkFkORdnpF3bFBqTC%2Ff79NRv3N29Sr9xYQlR6qy1n%2F1oZUA0p219Wr3c82J2y6Hg%2FQMDqPqUxpv8ho%2BbldBfK01xSzhzN15XkMsGccoVNTYkpiQlUi%2BDV5%2BDNGOWTZWOBrsHYGeelS4P7e8Pz4yz%2FA3TbmRqXPImoFHQsQKlEslEc0U8f6ThEG3NrsYJFqvpEymEttPiA8HMX3%2FFlyaeJBLDteAOTziEPI%2FKjHUzacrsUqiXx4%2FblzacOCUP7hG3Elh68dQmh2M5HQO9cfRv12eibu%2BcPMjo9%2BmtEXWHib77igs26%2Fp8ImspTL%2F8idetCJFOv%2BiMaUh9crrHMLkZKA%2F35RuVIX2wylVrHOElnYbh%2FG0lAxbkD1qYU7nq2F3PLsieOXGKgi5gcXqu1SzlbzDGSC4E77mg4VI5KvYWXA%2BMMe1Hi%2Fd%2BvDeQyam%2F89yLOO5wW1J1pyM5WBjuEV84%2Fzyna16I6eFQ0ji7LAvqiOBm1gq26aT5zTlCO8kgyZwue3XgmtWb3gaSUEX3%2Bp2a%2FKDmgICeOoKRR4hFrDxYGJvUnASxRcRM1%2B%2BuRftsgKr3lqcYakXwXcWJ%2FdvEYVknkwVAftF5vD9Lh4ZzCgi4XCBjqkAWGV2cqV9IUoH1eRefRvBAleNTwWGxjACLETifi4pylhX5MWBEd78bPLKCrDCoBkWpI19sUD3orpGMCWc%2Fy6vmJeIEo66L3U%2FsYJQwBdyPdgHCul%2BIVk3AD6dyhlheCWbOKzXBQtGN1DGZ162aZfYCQj14mEuPUqlbeeF6ClEVNvO8QlWjTnC7wdgQHuvlbHm3CVlZuyXLylqcRdCn2tzdiCXEG7&X-Amz-Signature=29ea84b6d6fd5e75ec8a746345371411bda7d780721238899544ce3610ad05b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXXTVOQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD1Ab7OU9Q866Y80%2Fzl%2B773sb4lv3OSW%2BqgjwOCs%2BqlzgIhALphn4wjw2auQ%2BV%2B6Q%2BRSvO8Wpey8sd1j7i9AkGrv08yKv8DCEEQABoMNjM3NDIzMTgzODA1Igyo1L7tejqF5dqvlW0q3AP%2FFTcb4abQGKW%2Fmprk4dzIEZFkFkORdnpF3bFBqTC%2Ff79NRv3N29Sr9xYQlR6qy1n%2F1oZUA0p219Wr3c82J2y6Hg%2FQMDqPqUxpv8ho%2BbldBfK01xSzhzN15XkMsGccoVNTYkpiQlUi%2BDV5%2BDNGOWTZWOBrsHYGeelS4P7e8Pz4yz%2FA3TbmRqXPImoFHQsQKlEslEc0U8f6ThEG3NrsYJFqvpEymEttPiA8HMX3%2FFlyaeJBLDteAOTziEPI%2FKjHUzacrsUqiXx4%2FblzacOCUP7hG3Elh68dQmh2M5HQO9cfRv12eibu%2BcPMjo9%2BmtEXWHib77igs26%2Fp8ImspTL%2F8idetCJFOv%2BiMaUh9crrHMLkZKA%2F35RuVIX2wylVrHOElnYbh%2FG0lAxbkD1qYU7nq2F3PLsieOXGKgi5gcXqu1SzlbzDGSC4E77mg4VI5KvYWXA%2BMMe1Hi%2Fd%2BvDeQyam%2F89yLOO5wW1J1pyM5WBjuEV84%2Fzyna16I6eFQ0ji7LAvqiOBm1gq26aT5zTlCO8kgyZwue3XgmtWb3gaSUEX3%2Bp2a%2FKDmgICeOoKRR4hFrDxYGJvUnASxRcRM1%2B%2BuRftsgKr3lqcYakXwXcWJ%2FdvEYVknkwVAftF5vD9Lh4ZzCgi4XCBjqkAWGV2cqV9IUoH1eRefRvBAleNTwWGxjACLETifi4pylhX5MWBEd78bPLKCrDCoBkWpI19sUD3orpGMCWc%2Fy6vmJeIEo66L3U%2FsYJQwBdyPdgHCul%2BIVk3AD6dyhlheCWbOKzXBQtGN1DGZ162aZfYCQj14mEuPUqlbeeF6ClEVNvO8QlWjTnC7wdgQHuvlbHm3CVlZuyXLylqcRdCn2tzdiCXEG7&X-Amz-Signature=7f678250383465060fe0eb6a384b5656799d6cf71808a69b649c801a857b1b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXXTVOQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD1Ab7OU9Q866Y80%2Fzl%2B773sb4lv3OSW%2BqgjwOCs%2BqlzgIhALphn4wjw2auQ%2BV%2B6Q%2BRSvO8Wpey8sd1j7i9AkGrv08yKv8DCEEQABoMNjM3NDIzMTgzODA1Igyo1L7tejqF5dqvlW0q3AP%2FFTcb4abQGKW%2Fmprk4dzIEZFkFkORdnpF3bFBqTC%2Ff79NRv3N29Sr9xYQlR6qy1n%2F1oZUA0p219Wr3c82J2y6Hg%2FQMDqPqUxpv8ho%2BbldBfK01xSzhzN15XkMsGccoVNTYkpiQlUi%2BDV5%2BDNGOWTZWOBrsHYGeelS4P7e8Pz4yz%2FA3TbmRqXPImoFHQsQKlEslEc0U8f6ThEG3NrsYJFqvpEymEttPiA8HMX3%2FFlyaeJBLDteAOTziEPI%2FKjHUzacrsUqiXx4%2FblzacOCUP7hG3Elh68dQmh2M5HQO9cfRv12eibu%2BcPMjo9%2BmtEXWHib77igs26%2Fp8ImspTL%2F8idetCJFOv%2BiMaUh9crrHMLkZKA%2F35RuVIX2wylVrHOElnYbh%2FG0lAxbkD1qYU7nq2F3PLsieOXGKgi5gcXqu1SzlbzDGSC4E77mg4VI5KvYWXA%2BMMe1Hi%2Fd%2BvDeQyam%2F89yLOO5wW1J1pyM5WBjuEV84%2Fzyna16I6eFQ0ji7LAvqiOBm1gq26aT5zTlCO8kgyZwue3XgmtWb3gaSUEX3%2Bp2a%2FKDmgICeOoKRR4hFrDxYGJvUnASxRcRM1%2B%2BuRftsgKr3lqcYakXwXcWJ%2FdvEYVknkwVAftF5vD9Lh4ZzCgi4XCBjqkAWGV2cqV9IUoH1eRefRvBAleNTwWGxjACLETifi4pylhX5MWBEd78bPLKCrDCoBkWpI19sUD3orpGMCWc%2Fy6vmJeIEo66L3U%2FsYJQwBdyPdgHCul%2BIVk3AD6dyhlheCWbOKzXBQtGN1DGZ162aZfYCQj14mEuPUqlbeeF6ClEVNvO8QlWjTnC7wdgQHuvlbHm3CVlZuyXLylqcRdCn2tzdiCXEG7&X-Amz-Signature=a360281c16988f769f6ba9084d34b5b4e1f374c6f886a4ec857e5adeec2a4403&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
