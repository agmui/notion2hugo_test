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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWZMYVJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfBAljown2TV0eHzPMb4F3sw97huPzUUdloEye9o8DMAiA5XSdDXcMtbbCK%2F94nYjzDDynsBfuAZXezhgN2pNp0sir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJq7y49DuSF1CSTbyKtwDTVRat13QUT5NBflChRx39lMgjSJX530s5bHOb3BWPwE0Y6Na%2BQaG2TWYDSqVAfIDwbhUn8FzfzNpMfT4p%2FRzZ4Nzvyp7iALtYaNawyfvk1Aw9f%2BXgYTm9Lmt%2BWrmfV8%2BDNSfNeUt%2BOYKL2E9ObxW%2FMSFj8tpikx43HX6bQTkI1h%2FdXF7qbZpfqycrGzkTGtWNQyqzhdRZTwS3GBYtsSkTM5njIdWoa2%2B9%2B69njYprziP21YYLxyzPpUYZItGdNLhYt%2B3IbiAM0ihyxdJ%2BEVM2LGEXPRiBQ3s7L6poxBsO7JXCd9gsqg1RL9xEbtjbNkf2CzUt%2BjKBYBo3PbxUIZN6e%2FftMgjMWDA6BQqbCZwylUyAVOfwN99%2B0e2U93iOFTfA%2Fz1ABQ5waW8tdA2xsaLn6dfb%2FPNgfr9J2b6RJJPnM1AV%2BAltijsGEOiIFbPBgG%2BITJixxeQdlrADCIAoAJ6%2B0IuzeqhkUf0ivSsDqM2NXODu5f6TE%2FwgKICij4qIFfCSFNJ8MahEKWmhzEXVbMJDvrnDtdW4%2BvbPAcoZlJHpdArQstRdnRJPyK15IlP2f3iUhOvWpGckK4VYmyUuoKCD2J6gxSOZNw%2BXDF90rNh4LI7EZmhv%2FgZHRFNYREw8rrewAY6pgHMZuM%2FBLvpqgdhMJrYBgfsOSvxkSYSP%2FIwpTUAvCKnStxJQhRCbdxpprNQ%2BFWQ%2Fr2J6VYRI0Pjn5%2FDx8lyhdl7PEUFQOUhyVLUdGEYoROY8K6arQ1OLGZGUXXcJrrvrKq4r9OerNe%2Bq4Bkpm11b4tQ8uPCWWUjLm3XTI8TDTJL4ynyaujcNgtVvFAt0oLGbMybsWVOxGA%2BtwplbtRnwg3vK1aMsgQl&X-Amz-Signature=c9c4c300ab824a6e42da1be1a43ff9a556da81b3d1104aea681da8993b4883ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWZMYVJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfBAljown2TV0eHzPMb4F3sw97huPzUUdloEye9o8DMAiA5XSdDXcMtbbCK%2F94nYjzDDynsBfuAZXezhgN2pNp0sir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJq7y49DuSF1CSTbyKtwDTVRat13QUT5NBflChRx39lMgjSJX530s5bHOb3BWPwE0Y6Na%2BQaG2TWYDSqVAfIDwbhUn8FzfzNpMfT4p%2FRzZ4Nzvyp7iALtYaNawyfvk1Aw9f%2BXgYTm9Lmt%2BWrmfV8%2BDNSfNeUt%2BOYKL2E9ObxW%2FMSFj8tpikx43HX6bQTkI1h%2FdXF7qbZpfqycrGzkTGtWNQyqzhdRZTwS3GBYtsSkTM5njIdWoa2%2B9%2B69njYprziP21YYLxyzPpUYZItGdNLhYt%2B3IbiAM0ihyxdJ%2BEVM2LGEXPRiBQ3s7L6poxBsO7JXCd9gsqg1RL9xEbtjbNkf2CzUt%2BjKBYBo3PbxUIZN6e%2FftMgjMWDA6BQqbCZwylUyAVOfwN99%2B0e2U93iOFTfA%2Fz1ABQ5waW8tdA2xsaLn6dfb%2FPNgfr9J2b6RJJPnM1AV%2BAltijsGEOiIFbPBgG%2BITJixxeQdlrADCIAoAJ6%2B0IuzeqhkUf0ivSsDqM2NXODu5f6TE%2FwgKICij4qIFfCSFNJ8MahEKWmhzEXVbMJDvrnDtdW4%2BvbPAcoZlJHpdArQstRdnRJPyK15IlP2f3iUhOvWpGckK4VYmyUuoKCD2J6gxSOZNw%2BXDF90rNh4LI7EZmhv%2FgZHRFNYREw8rrewAY6pgHMZuM%2FBLvpqgdhMJrYBgfsOSvxkSYSP%2FIwpTUAvCKnStxJQhRCbdxpprNQ%2BFWQ%2Fr2J6VYRI0Pjn5%2FDx8lyhdl7PEUFQOUhyVLUdGEYoROY8K6arQ1OLGZGUXXcJrrvrKq4r9OerNe%2Bq4Bkpm11b4tQ8uPCWWUjLm3XTI8TDTJL4ynyaujcNgtVvFAt0oLGbMybsWVOxGA%2BtwplbtRnwg3vK1aMsgQl&X-Amz-Signature=45c70aca44361d03a9182d247b2e47bb88eab01f322bb19b93d002cb7cf54bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWZMYVJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfBAljown2TV0eHzPMb4F3sw97huPzUUdloEye9o8DMAiA5XSdDXcMtbbCK%2F94nYjzDDynsBfuAZXezhgN2pNp0sir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJq7y49DuSF1CSTbyKtwDTVRat13QUT5NBflChRx39lMgjSJX530s5bHOb3BWPwE0Y6Na%2BQaG2TWYDSqVAfIDwbhUn8FzfzNpMfT4p%2FRzZ4Nzvyp7iALtYaNawyfvk1Aw9f%2BXgYTm9Lmt%2BWrmfV8%2BDNSfNeUt%2BOYKL2E9ObxW%2FMSFj8tpikx43HX6bQTkI1h%2FdXF7qbZpfqycrGzkTGtWNQyqzhdRZTwS3GBYtsSkTM5njIdWoa2%2B9%2B69njYprziP21YYLxyzPpUYZItGdNLhYt%2B3IbiAM0ihyxdJ%2BEVM2LGEXPRiBQ3s7L6poxBsO7JXCd9gsqg1RL9xEbtjbNkf2CzUt%2BjKBYBo3PbxUIZN6e%2FftMgjMWDA6BQqbCZwylUyAVOfwN99%2B0e2U93iOFTfA%2Fz1ABQ5waW8tdA2xsaLn6dfb%2FPNgfr9J2b6RJJPnM1AV%2BAltijsGEOiIFbPBgG%2BITJixxeQdlrADCIAoAJ6%2B0IuzeqhkUf0ivSsDqM2NXODu5f6TE%2FwgKICij4qIFfCSFNJ8MahEKWmhzEXVbMJDvrnDtdW4%2BvbPAcoZlJHpdArQstRdnRJPyK15IlP2f3iUhOvWpGckK4VYmyUuoKCD2J6gxSOZNw%2BXDF90rNh4LI7EZmhv%2FgZHRFNYREw8rrewAY6pgHMZuM%2FBLvpqgdhMJrYBgfsOSvxkSYSP%2FIwpTUAvCKnStxJQhRCbdxpprNQ%2BFWQ%2Fr2J6VYRI0Pjn5%2FDx8lyhdl7PEUFQOUhyVLUdGEYoROY8K6arQ1OLGZGUXXcJrrvrKq4r9OerNe%2Bq4Bkpm11b4tQ8uPCWWUjLm3XTI8TDTJL4ynyaujcNgtVvFAt0oLGbMybsWVOxGA%2BtwplbtRnwg3vK1aMsgQl&X-Amz-Signature=19b9de8e6351d6231541858c878d1f29bc60beb427f5c6c7604258c4c84806a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWZMYVJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfBAljown2TV0eHzPMb4F3sw97huPzUUdloEye9o8DMAiA5XSdDXcMtbbCK%2F94nYjzDDynsBfuAZXezhgN2pNp0sir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJq7y49DuSF1CSTbyKtwDTVRat13QUT5NBflChRx39lMgjSJX530s5bHOb3BWPwE0Y6Na%2BQaG2TWYDSqVAfIDwbhUn8FzfzNpMfT4p%2FRzZ4Nzvyp7iALtYaNawyfvk1Aw9f%2BXgYTm9Lmt%2BWrmfV8%2BDNSfNeUt%2BOYKL2E9ObxW%2FMSFj8tpikx43HX6bQTkI1h%2FdXF7qbZpfqycrGzkTGtWNQyqzhdRZTwS3GBYtsSkTM5njIdWoa2%2B9%2B69njYprziP21YYLxyzPpUYZItGdNLhYt%2B3IbiAM0ihyxdJ%2BEVM2LGEXPRiBQ3s7L6poxBsO7JXCd9gsqg1RL9xEbtjbNkf2CzUt%2BjKBYBo3PbxUIZN6e%2FftMgjMWDA6BQqbCZwylUyAVOfwN99%2B0e2U93iOFTfA%2Fz1ABQ5waW8tdA2xsaLn6dfb%2FPNgfr9J2b6RJJPnM1AV%2BAltijsGEOiIFbPBgG%2BITJixxeQdlrADCIAoAJ6%2B0IuzeqhkUf0ivSsDqM2NXODu5f6TE%2FwgKICij4qIFfCSFNJ8MahEKWmhzEXVbMJDvrnDtdW4%2BvbPAcoZlJHpdArQstRdnRJPyK15IlP2f3iUhOvWpGckK4VYmyUuoKCD2J6gxSOZNw%2BXDF90rNh4LI7EZmhv%2FgZHRFNYREw8rrewAY6pgHMZuM%2FBLvpqgdhMJrYBgfsOSvxkSYSP%2FIwpTUAvCKnStxJQhRCbdxpprNQ%2BFWQ%2Fr2J6VYRI0Pjn5%2FDx8lyhdl7PEUFQOUhyVLUdGEYoROY8K6arQ1OLGZGUXXcJrrvrKq4r9OerNe%2Bq4Bkpm11b4tQ8uPCWWUjLm3XTI8TDTJL4ynyaujcNgtVvFAt0oLGbMybsWVOxGA%2BtwplbtRnwg3vK1aMsgQl&X-Amz-Signature=e6375b7f08e79533e3f20c23bc041c8f9ec17d918930209d690dfc6d4c15f642&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWZMYVJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfBAljown2TV0eHzPMb4F3sw97huPzUUdloEye9o8DMAiA5XSdDXcMtbbCK%2F94nYjzDDynsBfuAZXezhgN2pNp0sir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJq7y49DuSF1CSTbyKtwDTVRat13QUT5NBflChRx39lMgjSJX530s5bHOb3BWPwE0Y6Na%2BQaG2TWYDSqVAfIDwbhUn8FzfzNpMfT4p%2FRzZ4Nzvyp7iALtYaNawyfvk1Aw9f%2BXgYTm9Lmt%2BWrmfV8%2BDNSfNeUt%2BOYKL2E9ObxW%2FMSFj8tpikx43HX6bQTkI1h%2FdXF7qbZpfqycrGzkTGtWNQyqzhdRZTwS3GBYtsSkTM5njIdWoa2%2B9%2B69njYprziP21YYLxyzPpUYZItGdNLhYt%2B3IbiAM0ihyxdJ%2BEVM2LGEXPRiBQ3s7L6poxBsO7JXCd9gsqg1RL9xEbtjbNkf2CzUt%2BjKBYBo3PbxUIZN6e%2FftMgjMWDA6BQqbCZwylUyAVOfwN99%2B0e2U93iOFTfA%2Fz1ABQ5waW8tdA2xsaLn6dfb%2FPNgfr9J2b6RJJPnM1AV%2BAltijsGEOiIFbPBgG%2BITJixxeQdlrADCIAoAJ6%2B0IuzeqhkUf0ivSsDqM2NXODu5f6TE%2FwgKICij4qIFfCSFNJ8MahEKWmhzEXVbMJDvrnDtdW4%2BvbPAcoZlJHpdArQstRdnRJPyK15IlP2f3iUhOvWpGckK4VYmyUuoKCD2J6gxSOZNw%2BXDF90rNh4LI7EZmhv%2FgZHRFNYREw8rrewAY6pgHMZuM%2FBLvpqgdhMJrYBgfsOSvxkSYSP%2FIwpTUAvCKnStxJQhRCbdxpprNQ%2BFWQ%2Fr2J6VYRI0Pjn5%2FDx8lyhdl7PEUFQOUhyVLUdGEYoROY8K6arQ1OLGZGUXXcJrrvrKq4r9OerNe%2Bq4Bkpm11b4tQ8uPCWWUjLm3XTI8TDTJL4ynyaujcNgtVvFAt0oLGbMybsWVOxGA%2BtwplbtRnwg3vK1aMsgQl&X-Amz-Signature=c962d6e36e8728dabbd372ce19c4f49dc85009c6fda38b22438f0eff21cc691b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWZMYVJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfBAljown2TV0eHzPMb4F3sw97huPzUUdloEye9o8DMAiA5XSdDXcMtbbCK%2F94nYjzDDynsBfuAZXezhgN2pNp0sir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJq7y49DuSF1CSTbyKtwDTVRat13QUT5NBflChRx39lMgjSJX530s5bHOb3BWPwE0Y6Na%2BQaG2TWYDSqVAfIDwbhUn8FzfzNpMfT4p%2FRzZ4Nzvyp7iALtYaNawyfvk1Aw9f%2BXgYTm9Lmt%2BWrmfV8%2BDNSfNeUt%2BOYKL2E9ObxW%2FMSFj8tpikx43HX6bQTkI1h%2FdXF7qbZpfqycrGzkTGtWNQyqzhdRZTwS3GBYtsSkTM5njIdWoa2%2B9%2B69njYprziP21YYLxyzPpUYZItGdNLhYt%2B3IbiAM0ihyxdJ%2BEVM2LGEXPRiBQ3s7L6poxBsO7JXCd9gsqg1RL9xEbtjbNkf2CzUt%2BjKBYBo3PbxUIZN6e%2FftMgjMWDA6BQqbCZwylUyAVOfwN99%2B0e2U93iOFTfA%2Fz1ABQ5waW8tdA2xsaLn6dfb%2FPNgfr9J2b6RJJPnM1AV%2BAltijsGEOiIFbPBgG%2BITJixxeQdlrADCIAoAJ6%2B0IuzeqhkUf0ivSsDqM2NXODu5f6TE%2FwgKICij4qIFfCSFNJ8MahEKWmhzEXVbMJDvrnDtdW4%2BvbPAcoZlJHpdArQstRdnRJPyK15IlP2f3iUhOvWpGckK4VYmyUuoKCD2J6gxSOZNw%2BXDF90rNh4LI7EZmhv%2FgZHRFNYREw8rrewAY6pgHMZuM%2FBLvpqgdhMJrYBgfsOSvxkSYSP%2FIwpTUAvCKnStxJQhRCbdxpprNQ%2BFWQ%2Fr2J6VYRI0Pjn5%2FDx8lyhdl7PEUFQOUhyVLUdGEYoROY8K6arQ1OLGZGUXXcJrrvrKq4r9OerNe%2Bq4Bkpm11b4tQ8uPCWWUjLm3XTI8TDTJL4ynyaujcNgtVvFAt0oLGbMybsWVOxGA%2BtwplbtRnwg3vK1aMsgQl&X-Amz-Signature=e2fc7cace0150701402d0840d1b37305fae4cd35b5f856b087fff64ca6db880b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWZMYVJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfBAljown2TV0eHzPMb4F3sw97huPzUUdloEye9o8DMAiA5XSdDXcMtbbCK%2F94nYjzDDynsBfuAZXezhgN2pNp0sir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJq7y49DuSF1CSTbyKtwDTVRat13QUT5NBflChRx39lMgjSJX530s5bHOb3BWPwE0Y6Na%2BQaG2TWYDSqVAfIDwbhUn8FzfzNpMfT4p%2FRzZ4Nzvyp7iALtYaNawyfvk1Aw9f%2BXgYTm9Lmt%2BWrmfV8%2BDNSfNeUt%2BOYKL2E9ObxW%2FMSFj8tpikx43HX6bQTkI1h%2FdXF7qbZpfqycrGzkTGtWNQyqzhdRZTwS3GBYtsSkTM5njIdWoa2%2B9%2B69njYprziP21YYLxyzPpUYZItGdNLhYt%2B3IbiAM0ihyxdJ%2BEVM2LGEXPRiBQ3s7L6poxBsO7JXCd9gsqg1RL9xEbtjbNkf2CzUt%2BjKBYBo3PbxUIZN6e%2FftMgjMWDA6BQqbCZwylUyAVOfwN99%2B0e2U93iOFTfA%2Fz1ABQ5waW8tdA2xsaLn6dfb%2FPNgfr9J2b6RJJPnM1AV%2BAltijsGEOiIFbPBgG%2BITJixxeQdlrADCIAoAJ6%2B0IuzeqhkUf0ivSsDqM2NXODu5f6TE%2FwgKICij4qIFfCSFNJ8MahEKWmhzEXVbMJDvrnDtdW4%2BvbPAcoZlJHpdArQstRdnRJPyK15IlP2f3iUhOvWpGckK4VYmyUuoKCD2J6gxSOZNw%2BXDF90rNh4LI7EZmhv%2FgZHRFNYREw8rrewAY6pgHMZuM%2FBLvpqgdhMJrYBgfsOSvxkSYSP%2FIwpTUAvCKnStxJQhRCbdxpprNQ%2BFWQ%2Fr2J6VYRI0Pjn5%2FDx8lyhdl7PEUFQOUhyVLUdGEYoROY8K6arQ1OLGZGUXXcJrrvrKq4r9OerNe%2Bq4Bkpm11b4tQ8uPCWWUjLm3XTI8TDTJL4ynyaujcNgtVvFAt0oLGbMybsWVOxGA%2BtwplbtRnwg3vK1aMsgQl&X-Amz-Signature=0eec0db23de950dd203da7bc4246ab8b298461bb0478cba24eb614d3bcbe175d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWZMYVJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfBAljown2TV0eHzPMb4F3sw97huPzUUdloEye9o8DMAiA5XSdDXcMtbbCK%2F94nYjzDDynsBfuAZXezhgN2pNp0sir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJq7y49DuSF1CSTbyKtwDTVRat13QUT5NBflChRx39lMgjSJX530s5bHOb3BWPwE0Y6Na%2BQaG2TWYDSqVAfIDwbhUn8FzfzNpMfT4p%2FRzZ4Nzvyp7iALtYaNawyfvk1Aw9f%2BXgYTm9Lmt%2BWrmfV8%2BDNSfNeUt%2BOYKL2E9ObxW%2FMSFj8tpikx43HX6bQTkI1h%2FdXF7qbZpfqycrGzkTGtWNQyqzhdRZTwS3GBYtsSkTM5njIdWoa2%2B9%2B69njYprziP21YYLxyzPpUYZItGdNLhYt%2B3IbiAM0ihyxdJ%2BEVM2LGEXPRiBQ3s7L6poxBsO7JXCd9gsqg1RL9xEbtjbNkf2CzUt%2BjKBYBo3PbxUIZN6e%2FftMgjMWDA6BQqbCZwylUyAVOfwN99%2B0e2U93iOFTfA%2Fz1ABQ5waW8tdA2xsaLn6dfb%2FPNgfr9J2b6RJJPnM1AV%2BAltijsGEOiIFbPBgG%2BITJixxeQdlrADCIAoAJ6%2B0IuzeqhkUf0ivSsDqM2NXODu5f6TE%2FwgKICij4qIFfCSFNJ8MahEKWmhzEXVbMJDvrnDtdW4%2BvbPAcoZlJHpdArQstRdnRJPyK15IlP2f3iUhOvWpGckK4VYmyUuoKCD2J6gxSOZNw%2BXDF90rNh4LI7EZmhv%2FgZHRFNYREw8rrewAY6pgHMZuM%2FBLvpqgdhMJrYBgfsOSvxkSYSP%2FIwpTUAvCKnStxJQhRCbdxpprNQ%2BFWQ%2Fr2J6VYRI0Pjn5%2FDx8lyhdl7PEUFQOUhyVLUdGEYoROY8K6arQ1OLGZGUXXcJrrvrKq4r9OerNe%2Bq4Bkpm11b4tQ8uPCWWUjLm3XTI8TDTJL4ynyaujcNgtVvFAt0oLGbMybsWVOxGA%2BtwplbtRnwg3vK1aMsgQl&X-Amz-Signature=f0349461af2612a015585aa45737feff34cee24e6a629984796c989fb802940e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
