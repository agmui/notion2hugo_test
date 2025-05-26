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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIBXTZK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3N1b2a56kE%2Bu8izh%2FND7XfggtAMVvWggrOiVSIoQ1%2FgIhAJ19zkNj6KlOdtDwSc4sm6oQAc%2FNarTAED84Cc2WVg1ZKv8DCDsQABoMNjM3NDIzMTgzODA1IgzG3qh1fQNZNgq4ofsq3APJHz0xqY6DSHNPiODHmaH6FAkSGQM2uqkECGcem4zwxTSuRJNJs0lhmcNsMg9OTVWCaHPbgl5phTm0sSX3e4%2BG5jxBxeLvFa7uI8MejFi7bIjtjPtPPSHW4uOTIML67BzSnxqmbZtqdVZHZQ8DdIl1T4pf%2BZLLwIKtcKgIk9H0ojo0fqeObrK1AJ3WpWRn6UwCa8iAEKEk%2FTSwntuVrDk1AtV1axElkoc0BkqgcsW3vK6cQnKQOPWkQnf85fBzMHp%2FainPycWE74cPXm6h5GRID1vNHiB2KArurLWd8zlWP2S2wzZZUumj%2FWXLjlJWuNX5VMENcPS0lcm2poSsaKKTUq1byJkTFZztgi9VNA9B6yeMvHJgxXAukuodthTeZA%2BSNOEU8R3G14nSH4SyONBDYL8fUsYTBJU6ezmYPM26HGxj1%2BoRcppbV%2BycoAFR5JdXBIMgKBVc3x65jd4Rybgmak9PlZaYA1yunMmMExC2PRuw3tdedBKZXXMiTYnM6yPh2JW%2FYCcCbgXG5lFHrKAh7SqxhFONOY2UCxaul3sMQax2qKY8ffrIS42rPSCGLQtw4HhJpJhVbPbPqkRycFhkB8s4boIG6V%2BulLle30WM0XpZYmZk6djlc%2FS%2FZzDlnc%2FBBjqkAWQU27EaoMWns8TuAAjfl24HzsGqcpgrdIqm19oEtIOfr%2BT0jOjFvfH9KR5%2B6hJYLD6WPA7XON26S93zD9587mucGj%2BuTb6zJP9iKHXtpT08wlbw5Ay%2B259LlvJzgHdpQ7TsdOxqlS15jT8fzjtSQvEhpOdaOT492usm9ORxT1x35Bdpfttw0jJy%2BNeBBmEOPz%2Bz5bV8oy%2FcavhlFzd8QdocSWbQ&X-Amz-Signature=028ec8e8649362ab81f3ad1e0f975e82435d4e95fbd1031cd68c6ec42d1866d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIBXTZK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3N1b2a56kE%2Bu8izh%2FND7XfggtAMVvWggrOiVSIoQ1%2FgIhAJ19zkNj6KlOdtDwSc4sm6oQAc%2FNarTAED84Cc2WVg1ZKv8DCDsQABoMNjM3NDIzMTgzODA1IgzG3qh1fQNZNgq4ofsq3APJHz0xqY6DSHNPiODHmaH6FAkSGQM2uqkECGcem4zwxTSuRJNJs0lhmcNsMg9OTVWCaHPbgl5phTm0sSX3e4%2BG5jxBxeLvFa7uI8MejFi7bIjtjPtPPSHW4uOTIML67BzSnxqmbZtqdVZHZQ8DdIl1T4pf%2BZLLwIKtcKgIk9H0ojo0fqeObrK1AJ3WpWRn6UwCa8iAEKEk%2FTSwntuVrDk1AtV1axElkoc0BkqgcsW3vK6cQnKQOPWkQnf85fBzMHp%2FainPycWE74cPXm6h5GRID1vNHiB2KArurLWd8zlWP2S2wzZZUumj%2FWXLjlJWuNX5VMENcPS0lcm2poSsaKKTUq1byJkTFZztgi9VNA9B6yeMvHJgxXAukuodthTeZA%2BSNOEU8R3G14nSH4SyONBDYL8fUsYTBJU6ezmYPM26HGxj1%2BoRcppbV%2BycoAFR5JdXBIMgKBVc3x65jd4Rybgmak9PlZaYA1yunMmMExC2PRuw3tdedBKZXXMiTYnM6yPh2JW%2FYCcCbgXG5lFHrKAh7SqxhFONOY2UCxaul3sMQax2qKY8ffrIS42rPSCGLQtw4HhJpJhVbPbPqkRycFhkB8s4boIG6V%2BulLle30WM0XpZYmZk6djlc%2FS%2FZzDlnc%2FBBjqkAWQU27EaoMWns8TuAAjfl24HzsGqcpgrdIqm19oEtIOfr%2BT0jOjFvfH9KR5%2B6hJYLD6WPA7XON26S93zD9587mucGj%2BuTb6zJP9iKHXtpT08wlbw5Ay%2B259LlvJzgHdpQ7TsdOxqlS15jT8fzjtSQvEhpOdaOT492usm9ORxT1x35Bdpfttw0jJy%2BNeBBmEOPz%2Bz5bV8oy%2FcavhlFzd8QdocSWbQ&X-Amz-Signature=e242ba607ed08cf1272b58c5367e53e4bb20abdd70345d3507d56d2b80ad3268&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIBXTZK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3N1b2a56kE%2Bu8izh%2FND7XfggtAMVvWggrOiVSIoQ1%2FgIhAJ19zkNj6KlOdtDwSc4sm6oQAc%2FNarTAED84Cc2WVg1ZKv8DCDsQABoMNjM3NDIzMTgzODA1IgzG3qh1fQNZNgq4ofsq3APJHz0xqY6DSHNPiODHmaH6FAkSGQM2uqkECGcem4zwxTSuRJNJs0lhmcNsMg9OTVWCaHPbgl5phTm0sSX3e4%2BG5jxBxeLvFa7uI8MejFi7bIjtjPtPPSHW4uOTIML67BzSnxqmbZtqdVZHZQ8DdIl1T4pf%2BZLLwIKtcKgIk9H0ojo0fqeObrK1AJ3WpWRn6UwCa8iAEKEk%2FTSwntuVrDk1AtV1axElkoc0BkqgcsW3vK6cQnKQOPWkQnf85fBzMHp%2FainPycWE74cPXm6h5GRID1vNHiB2KArurLWd8zlWP2S2wzZZUumj%2FWXLjlJWuNX5VMENcPS0lcm2poSsaKKTUq1byJkTFZztgi9VNA9B6yeMvHJgxXAukuodthTeZA%2BSNOEU8R3G14nSH4SyONBDYL8fUsYTBJU6ezmYPM26HGxj1%2BoRcppbV%2BycoAFR5JdXBIMgKBVc3x65jd4Rybgmak9PlZaYA1yunMmMExC2PRuw3tdedBKZXXMiTYnM6yPh2JW%2FYCcCbgXG5lFHrKAh7SqxhFONOY2UCxaul3sMQax2qKY8ffrIS42rPSCGLQtw4HhJpJhVbPbPqkRycFhkB8s4boIG6V%2BulLle30WM0XpZYmZk6djlc%2FS%2FZzDlnc%2FBBjqkAWQU27EaoMWns8TuAAjfl24HzsGqcpgrdIqm19oEtIOfr%2BT0jOjFvfH9KR5%2B6hJYLD6WPA7XON26S93zD9587mucGj%2BuTb6zJP9iKHXtpT08wlbw5Ay%2B259LlvJzgHdpQ7TsdOxqlS15jT8fzjtSQvEhpOdaOT492usm9ORxT1x35Bdpfttw0jJy%2BNeBBmEOPz%2Bz5bV8oy%2FcavhlFzd8QdocSWbQ&X-Amz-Signature=58cb19fa99f60bda5277cde2f84e7802e40370da3f44a8a16fc19cad8d64fb2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIBXTZK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3N1b2a56kE%2Bu8izh%2FND7XfggtAMVvWggrOiVSIoQ1%2FgIhAJ19zkNj6KlOdtDwSc4sm6oQAc%2FNarTAED84Cc2WVg1ZKv8DCDsQABoMNjM3NDIzMTgzODA1IgzG3qh1fQNZNgq4ofsq3APJHz0xqY6DSHNPiODHmaH6FAkSGQM2uqkECGcem4zwxTSuRJNJs0lhmcNsMg9OTVWCaHPbgl5phTm0sSX3e4%2BG5jxBxeLvFa7uI8MejFi7bIjtjPtPPSHW4uOTIML67BzSnxqmbZtqdVZHZQ8DdIl1T4pf%2BZLLwIKtcKgIk9H0ojo0fqeObrK1AJ3WpWRn6UwCa8iAEKEk%2FTSwntuVrDk1AtV1axElkoc0BkqgcsW3vK6cQnKQOPWkQnf85fBzMHp%2FainPycWE74cPXm6h5GRID1vNHiB2KArurLWd8zlWP2S2wzZZUumj%2FWXLjlJWuNX5VMENcPS0lcm2poSsaKKTUq1byJkTFZztgi9VNA9B6yeMvHJgxXAukuodthTeZA%2BSNOEU8R3G14nSH4SyONBDYL8fUsYTBJU6ezmYPM26HGxj1%2BoRcppbV%2BycoAFR5JdXBIMgKBVc3x65jd4Rybgmak9PlZaYA1yunMmMExC2PRuw3tdedBKZXXMiTYnM6yPh2JW%2FYCcCbgXG5lFHrKAh7SqxhFONOY2UCxaul3sMQax2qKY8ffrIS42rPSCGLQtw4HhJpJhVbPbPqkRycFhkB8s4boIG6V%2BulLle30WM0XpZYmZk6djlc%2FS%2FZzDlnc%2FBBjqkAWQU27EaoMWns8TuAAjfl24HzsGqcpgrdIqm19oEtIOfr%2BT0jOjFvfH9KR5%2B6hJYLD6WPA7XON26S93zD9587mucGj%2BuTb6zJP9iKHXtpT08wlbw5Ay%2B259LlvJzgHdpQ7TsdOxqlS15jT8fzjtSQvEhpOdaOT492usm9ORxT1x35Bdpfttw0jJy%2BNeBBmEOPz%2Bz5bV8oy%2FcavhlFzd8QdocSWbQ&X-Amz-Signature=24df50481f5bce8e726f6e9ec63897769c0fe81c4fca6ce64313ddf110ca69e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIBXTZK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3N1b2a56kE%2Bu8izh%2FND7XfggtAMVvWggrOiVSIoQ1%2FgIhAJ19zkNj6KlOdtDwSc4sm6oQAc%2FNarTAED84Cc2WVg1ZKv8DCDsQABoMNjM3NDIzMTgzODA1IgzG3qh1fQNZNgq4ofsq3APJHz0xqY6DSHNPiODHmaH6FAkSGQM2uqkECGcem4zwxTSuRJNJs0lhmcNsMg9OTVWCaHPbgl5phTm0sSX3e4%2BG5jxBxeLvFa7uI8MejFi7bIjtjPtPPSHW4uOTIML67BzSnxqmbZtqdVZHZQ8DdIl1T4pf%2BZLLwIKtcKgIk9H0ojo0fqeObrK1AJ3WpWRn6UwCa8iAEKEk%2FTSwntuVrDk1AtV1axElkoc0BkqgcsW3vK6cQnKQOPWkQnf85fBzMHp%2FainPycWE74cPXm6h5GRID1vNHiB2KArurLWd8zlWP2S2wzZZUumj%2FWXLjlJWuNX5VMENcPS0lcm2poSsaKKTUq1byJkTFZztgi9VNA9B6yeMvHJgxXAukuodthTeZA%2BSNOEU8R3G14nSH4SyONBDYL8fUsYTBJU6ezmYPM26HGxj1%2BoRcppbV%2BycoAFR5JdXBIMgKBVc3x65jd4Rybgmak9PlZaYA1yunMmMExC2PRuw3tdedBKZXXMiTYnM6yPh2JW%2FYCcCbgXG5lFHrKAh7SqxhFONOY2UCxaul3sMQax2qKY8ffrIS42rPSCGLQtw4HhJpJhVbPbPqkRycFhkB8s4boIG6V%2BulLle30WM0XpZYmZk6djlc%2FS%2FZzDlnc%2FBBjqkAWQU27EaoMWns8TuAAjfl24HzsGqcpgrdIqm19oEtIOfr%2BT0jOjFvfH9KR5%2B6hJYLD6WPA7XON26S93zD9587mucGj%2BuTb6zJP9iKHXtpT08wlbw5Ay%2B259LlvJzgHdpQ7TsdOxqlS15jT8fzjtSQvEhpOdaOT492usm9ORxT1x35Bdpfttw0jJy%2BNeBBmEOPz%2Bz5bV8oy%2FcavhlFzd8QdocSWbQ&X-Amz-Signature=670d1f4495b000b5d2080af34637c047a3b899104a16c4b0a655b0f6ef113f77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIBXTZK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3N1b2a56kE%2Bu8izh%2FND7XfggtAMVvWggrOiVSIoQ1%2FgIhAJ19zkNj6KlOdtDwSc4sm6oQAc%2FNarTAED84Cc2WVg1ZKv8DCDsQABoMNjM3NDIzMTgzODA1IgzG3qh1fQNZNgq4ofsq3APJHz0xqY6DSHNPiODHmaH6FAkSGQM2uqkECGcem4zwxTSuRJNJs0lhmcNsMg9OTVWCaHPbgl5phTm0sSX3e4%2BG5jxBxeLvFa7uI8MejFi7bIjtjPtPPSHW4uOTIML67BzSnxqmbZtqdVZHZQ8DdIl1T4pf%2BZLLwIKtcKgIk9H0ojo0fqeObrK1AJ3WpWRn6UwCa8iAEKEk%2FTSwntuVrDk1AtV1axElkoc0BkqgcsW3vK6cQnKQOPWkQnf85fBzMHp%2FainPycWE74cPXm6h5GRID1vNHiB2KArurLWd8zlWP2S2wzZZUumj%2FWXLjlJWuNX5VMENcPS0lcm2poSsaKKTUq1byJkTFZztgi9VNA9B6yeMvHJgxXAukuodthTeZA%2BSNOEU8R3G14nSH4SyONBDYL8fUsYTBJU6ezmYPM26HGxj1%2BoRcppbV%2BycoAFR5JdXBIMgKBVc3x65jd4Rybgmak9PlZaYA1yunMmMExC2PRuw3tdedBKZXXMiTYnM6yPh2JW%2FYCcCbgXG5lFHrKAh7SqxhFONOY2UCxaul3sMQax2qKY8ffrIS42rPSCGLQtw4HhJpJhVbPbPqkRycFhkB8s4boIG6V%2BulLle30WM0XpZYmZk6djlc%2FS%2FZzDlnc%2FBBjqkAWQU27EaoMWns8TuAAjfl24HzsGqcpgrdIqm19oEtIOfr%2BT0jOjFvfH9KR5%2B6hJYLD6WPA7XON26S93zD9587mucGj%2BuTb6zJP9iKHXtpT08wlbw5Ay%2B259LlvJzgHdpQ7TsdOxqlS15jT8fzjtSQvEhpOdaOT492usm9ORxT1x35Bdpfttw0jJy%2BNeBBmEOPz%2Bz5bV8oy%2FcavhlFzd8QdocSWbQ&X-Amz-Signature=f2a39c4da68b93080836042ce705ff85d799a415ddce29542f9c2c908478863f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIBXTZK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3N1b2a56kE%2Bu8izh%2FND7XfggtAMVvWggrOiVSIoQ1%2FgIhAJ19zkNj6KlOdtDwSc4sm6oQAc%2FNarTAED84Cc2WVg1ZKv8DCDsQABoMNjM3NDIzMTgzODA1IgzG3qh1fQNZNgq4ofsq3APJHz0xqY6DSHNPiODHmaH6FAkSGQM2uqkECGcem4zwxTSuRJNJs0lhmcNsMg9OTVWCaHPbgl5phTm0sSX3e4%2BG5jxBxeLvFa7uI8MejFi7bIjtjPtPPSHW4uOTIML67BzSnxqmbZtqdVZHZQ8DdIl1T4pf%2BZLLwIKtcKgIk9H0ojo0fqeObrK1AJ3WpWRn6UwCa8iAEKEk%2FTSwntuVrDk1AtV1axElkoc0BkqgcsW3vK6cQnKQOPWkQnf85fBzMHp%2FainPycWE74cPXm6h5GRID1vNHiB2KArurLWd8zlWP2S2wzZZUumj%2FWXLjlJWuNX5VMENcPS0lcm2poSsaKKTUq1byJkTFZztgi9VNA9B6yeMvHJgxXAukuodthTeZA%2BSNOEU8R3G14nSH4SyONBDYL8fUsYTBJU6ezmYPM26HGxj1%2BoRcppbV%2BycoAFR5JdXBIMgKBVc3x65jd4Rybgmak9PlZaYA1yunMmMExC2PRuw3tdedBKZXXMiTYnM6yPh2JW%2FYCcCbgXG5lFHrKAh7SqxhFONOY2UCxaul3sMQax2qKY8ffrIS42rPSCGLQtw4HhJpJhVbPbPqkRycFhkB8s4boIG6V%2BulLle30WM0XpZYmZk6djlc%2FS%2FZzDlnc%2FBBjqkAWQU27EaoMWns8TuAAjfl24HzsGqcpgrdIqm19oEtIOfr%2BT0jOjFvfH9KR5%2B6hJYLD6WPA7XON26S93zD9587mucGj%2BuTb6zJP9iKHXtpT08wlbw5Ay%2B259LlvJzgHdpQ7TsdOxqlS15jT8fzjtSQvEhpOdaOT492usm9ORxT1x35Bdpfttw0jJy%2BNeBBmEOPz%2Bz5bV8oy%2FcavhlFzd8QdocSWbQ&X-Amz-Signature=f3fb8dc21ec214b5bf7a7703216e0852c2a55ea463d527264953f8c4ce3b4c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIBXTZK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3N1b2a56kE%2Bu8izh%2FND7XfggtAMVvWggrOiVSIoQ1%2FgIhAJ19zkNj6KlOdtDwSc4sm6oQAc%2FNarTAED84Cc2WVg1ZKv8DCDsQABoMNjM3NDIzMTgzODA1IgzG3qh1fQNZNgq4ofsq3APJHz0xqY6DSHNPiODHmaH6FAkSGQM2uqkECGcem4zwxTSuRJNJs0lhmcNsMg9OTVWCaHPbgl5phTm0sSX3e4%2BG5jxBxeLvFa7uI8MejFi7bIjtjPtPPSHW4uOTIML67BzSnxqmbZtqdVZHZQ8DdIl1T4pf%2BZLLwIKtcKgIk9H0ojo0fqeObrK1AJ3WpWRn6UwCa8iAEKEk%2FTSwntuVrDk1AtV1axElkoc0BkqgcsW3vK6cQnKQOPWkQnf85fBzMHp%2FainPycWE74cPXm6h5GRID1vNHiB2KArurLWd8zlWP2S2wzZZUumj%2FWXLjlJWuNX5VMENcPS0lcm2poSsaKKTUq1byJkTFZztgi9VNA9B6yeMvHJgxXAukuodthTeZA%2BSNOEU8R3G14nSH4SyONBDYL8fUsYTBJU6ezmYPM26HGxj1%2BoRcppbV%2BycoAFR5JdXBIMgKBVc3x65jd4Rybgmak9PlZaYA1yunMmMExC2PRuw3tdedBKZXXMiTYnM6yPh2JW%2FYCcCbgXG5lFHrKAh7SqxhFONOY2UCxaul3sMQax2qKY8ffrIS42rPSCGLQtw4HhJpJhVbPbPqkRycFhkB8s4boIG6V%2BulLle30WM0XpZYmZk6djlc%2FS%2FZzDlnc%2FBBjqkAWQU27EaoMWns8TuAAjfl24HzsGqcpgrdIqm19oEtIOfr%2BT0jOjFvfH9KR5%2B6hJYLD6WPA7XON26S93zD9587mucGj%2BuTb6zJP9iKHXtpT08wlbw5Ay%2B259LlvJzgHdpQ7TsdOxqlS15jT8fzjtSQvEhpOdaOT492usm9ORxT1x35Bdpfttw0jJy%2BNeBBmEOPz%2Bz5bV8oy%2FcavhlFzd8QdocSWbQ&X-Amz-Signature=8a7c7f4ff26cd2a7d30253fde80f143d4b43b4ca39e3e8077470646a61667a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
