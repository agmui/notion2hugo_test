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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFY5VOA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCuLYfUJdwo4JrqivjPEgtZvIGLF8fyjCz5v%2BR2lJjE8wIhALc793bFSzAUD0N%2BQljgDoJ9z3tdYee%2B6sAtQWi8HX2hKv8DCF4QABoMNjM3NDIzMTgzODA1IgwNdIspXlZg74wPg%2BQq3AMr0Vyup0cCnLoD3YXjE1SODnXVWumEFHpvTltIvKac5w1NN5U7NsxmLnPnJOCruUf1fp2XwHm9q6bcqBNRboYB0eeNcTPDm%2FbMcpMY5CaC0u5%2FKPOoJEByaejrnCmdk25UTc8DGCGVC8p8ngiEIv8PVft3uGoRqhJOymqWoF3Y8GfVmD5B3Zmcg6s1O9cpfjqEM1DL28%2BM37q9pWRwENxP3avzojreRDMujoAIPsk1nnNifGN3tb%2FoHuKw4F1x%2BQIdlfaP16N2BWjsj35s4zY%2Fm6MNjof4noc%2B0FncQwkVgKF557lSd6OYwKvYKuYakArngAmRJSdfh8OvLRYIAUo%2BbM9INs%2FRZrQh1LXhuYYFpy6rrnyPcgHEHdEkCJsX%2FYRx0gbOFaJWngV%2Bp9HTR2HUm5wOEJtDUWfkU4xv8OSdyCJDtxnrGI9GZzNoP51GhZpWFzyf%2BeGij6w8CZ8nMaSP45PJuXr%2B2k%2B48TX%2FNzTGKLOYe5Du0DJUGCMUcNispcsz5bAlqyjLiT1XQMRtDCXa2nnCdqpXvz3tkk6kZVhg3e%2Fe%2Bcvqi0DdBPeZ19FI83aoFGxZ9HPRwapy%2FVpautYFSAWASoEkH7EBr4d1f3LSOPtqjKDksvmMdchmuTCtgfXCBjqkAdrdnz91vCQyFK3MmFfbDMJcdSkm053XsCIXP7q6Shqe3PDT4mNUPPWSwTSvYduJbhNNp%2BCeXYcRgczqOz%2F6Qc6Ps1BzD21t6nF3p0Q4zRgUO8MatKDHy47pFwrB84MDxPrGWZGEG9QQzZCQiF47PaW0Ey%2Fq90r3IwLWasdqCs1LsHs2rlKuJjqwWLzUk9iwp0FWiyHCx%2FGR0blt8G3obC%2Fq%2Byzi&X-Amz-Signature=364b46ac9ee52f0ddcbcf7dbc5164a9315f20a5f98ee78eee546e5f463a52e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFY5VOA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCuLYfUJdwo4JrqivjPEgtZvIGLF8fyjCz5v%2BR2lJjE8wIhALc793bFSzAUD0N%2BQljgDoJ9z3tdYee%2B6sAtQWi8HX2hKv8DCF4QABoMNjM3NDIzMTgzODA1IgwNdIspXlZg74wPg%2BQq3AMr0Vyup0cCnLoD3YXjE1SODnXVWumEFHpvTltIvKac5w1NN5U7NsxmLnPnJOCruUf1fp2XwHm9q6bcqBNRboYB0eeNcTPDm%2FbMcpMY5CaC0u5%2FKPOoJEByaejrnCmdk25UTc8DGCGVC8p8ngiEIv8PVft3uGoRqhJOymqWoF3Y8GfVmD5B3Zmcg6s1O9cpfjqEM1DL28%2BM37q9pWRwENxP3avzojreRDMujoAIPsk1nnNifGN3tb%2FoHuKw4F1x%2BQIdlfaP16N2BWjsj35s4zY%2Fm6MNjof4noc%2B0FncQwkVgKF557lSd6OYwKvYKuYakArngAmRJSdfh8OvLRYIAUo%2BbM9INs%2FRZrQh1LXhuYYFpy6rrnyPcgHEHdEkCJsX%2FYRx0gbOFaJWngV%2Bp9HTR2HUm5wOEJtDUWfkU4xv8OSdyCJDtxnrGI9GZzNoP51GhZpWFzyf%2BeGij6w8CZ8nMaSP45PJuXr%2B2k%2B48TX%2FNzTGKLOYe5Du0DJUGCMUcNispcsz5bAlqyjLiT1XQMRtDCXa2nnCdqpXvz3tkk6kZVhg3e%2Fe%2Bcvqi0DdBPeZ19FI83aoFGxZ9HPRwapy%2FVpautYFSAWASoEkH7EBr4d1f3LSOPtqjKDksvmMdchmuTCtgfXCBjqkAdrdnz91vCQyFK3MmFfbDMJcdSkm053XsCIXP7q6Shqe3PDT4mNUPPWSwTSvYduJbhNNp%2BCeXYcRgczqOz%2F6Qc6Ps1BzD21t6nF3p0Q4zRgUO8MatKDHy47pFwrB84MDxPrGWZGEG9QQzZCQiF47PaW0Ey%2Fq90r3IwLWasdqCs1LsHs2rlKuJjqwWLzUk9iwp0FWiyHCx%2FGR0blt8G3obC%2Fq%2Byzi&X-Amz-Signature=be46cfea6bd983f153bd9dbc509a470126bd8af084cacf2d5ff1f4f7e575a72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFY5VOA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCuLYfUJdwo4JrqivjPEgtZvIGLF8fyjCz5v%2BR2lJjE8wIhALc793bFSzAUD0N%2BQljgDoJ9z3tdYee%2B6sAtQWi8HX2hKv8DCF4QABoMNjM3NDIzMTgzODA1IgwNdIspXlZg74wPg%2BQq3AMr0Vyup0cCnLoD3YXjE1SODnXVWumEFHpvTltIvKac5w1NN5U7NsxmLnPnJOCruUf1fp2XwHm9q6bcqBNRboYB0eeNcTPDm%2FbMcpMY5CaC0u5%2FKPOoJEByaejrnCmdk25UTc8DGCGVC8p8ngiEIv8PVft3uGoRqhJOymqWoF3Y8GfVmD5B3Zmcg6s1O9cpfjqEM1DL28%2BM37q9pWRwENxP3avzojreRDMujoAIPsk1nnNifGN3tb%2FoHuKw4F1x%2BQIdlfaP16N2BWjsj35s4zY%2Fm6MNjof4noc%2B0FncQwkVgKF557lSd6OYwKvYKuYakArngAmRJSdfh8OvLRYIAUo%2BbM9INs%2FRZrQh1LXhuYYFpy6rrnyPcgHEHdEkCJsX%2FYRx0gbOFaJWngV%2Bp9HTR2HUm5wOEJtDUWfkU4xv8OSdyCJDtxnrGI9GZzNoP51GhZpWFzyf%2BeGij6w8CZ8nMaSP45PJuXr%2B2k%2B48TX%2FNzTGKLOYe5Du0DJUGCMUcNispcsz5bAlqyjLiT1XQMRtDCXa2nnCdqpXvz3tkk6kZVhg3e%2Fe%2Bcvqi0DdBPeZ19FI83aoFGxZ9HPRwapy%2FVpautYFSAWASoEkH7EBr4d1f3LSOPtqjKDksvmMdchmuTCtgfXCBjqkAdrdnz91vCQyFK3MmFfbDMJcdSkm053XsCIXP7q6Shqe3PDT4mNUPPWSwTSvYduJbhNNp%2BCeXYcRgczqOz%2F6Qc6Ps1BzD21t6nF3p0Q4zRgUO8MatKDHy47pFwrB84MDxPrGWZGEG9QQzZCQiF47PaW0Ey%2Fq90r3IwLWasdqCs1LsHs2rlKuJjqwWLzUk9iwp0FWiyHCx%2FGR0blt8G3obC%2Fq%2Byzi&X-Amz-Signature=15edaa80e86cc5d1ca0a907b3ebcd39e71e7c6b2dd9ccebdb952e33a7b8b6108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFY5VOA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCuLYfUJdwo4JrqivjPEgtZvIGLF8fyjCz5v%2BR2lJjE8wIhALc793bFSzAUD0N%2BQljgDoJ9z3tdYee%2B6sAtQWi8HX2hKv8DCF4QABoMNjM3NDIzMTgzODA1IgwNdIspXlZg74wPg%2BQq3AMr0Vyup0cCnLoD3YXjE1SODnXVWumEFHpvTltIvKac5w1NN5U7NsxmLnPnJOCruUf1fp2XwHm9q6bcqBNRboYB0eeNcTPDm%2FbMcpMY5CaC0u5%2FKPOoJEByaejrnCmdk25UTc8DGCGVC8p8ngiEIv8PVft3uGoRqhJOymqWoF3Y8GfVmD5B3Zmcg6s1O9cpfjqEM1DL28%2BM37q9pWRwENxP3avzojreRDMujoAIPsk1nnNifGN3tb%2FoHuKw4F1x%2BQIdlfaP16N2BWjsj35s4zY%2Fm6MNjof4noc%2B0FncQwkVgKF557lSd6OYwKvYKuYakArngAmRJSdfh8OvLRYIAUo%2BbM9INs%2FRZrQh1LXhuYYFpy6rrnyPcgHEHdEkCJsX%2FYRx0gbOFaJWngV%2Bp9HTR2HUm5wOEJtDUWfkU4xv8OSdyCJDtxnrGI9GZzNoP51GhZpWFzyf%2BeGij6w8CZ8nMaSP45PJuXr%2B2k%2B48TX%2FNzTGKLOYe5Du0DJUGCMUcNispcsz5bAlqyjLiT1XQMRtDCXa2nnCdqpXvz3tkk6kZVhg3e%2Fe%2Bcvqi0DdBPeZ19FI83aoFGxZ9HPRwapy%2FVpautYFSAWASoEkH7EBr4d1f3LSOPtqjKDksvmMdchmuTCtgfXCBjqkAdrdnz91vCQyFK3MmFfbDMJcdSkm053XsCIXP7q6Shqe3PDT4mNUPPWSwTSvYduJbhNNp%2BCeXYcRgczqOz%2F6Qc6Ps1BzD21t6nF3p0Q4zRgUO8MatKDHy47pFwrB84MDxPrGWZGEG9QQzZCQiF47PaW0Ey%2Fq90r3IwLWasdqCs1LsHs2rlKuJjqwWLzUk9iwp0FWiyHCx%2FGR0blt8G3obC%2Fq%2Byzi&X-Amz-Signature=00880824a904cba9a55df37d2a471a347d41748950e65db28f0a814640000572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFY5VOA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCuLYfUJdwo4JrqivjPEgtZvIGLF8fyjCz5v%2BR2lJjE8wIhALc793bFSzAUD0N%2BQljgDoJ9z3tdYee%2B6sAtQWi8HX2hKv8DCF4QABoMNjM3NDIzMTgzODA1IgwNdIspXlZg74wPg%2BQq3AMr0Vyup0cCnLoD3YXjE1SODnXVWumEFHpvTltIvKac5w1NN5U7NsxmLnPnJOCruUf1fp2XwHm9q6bcqBNRboYB0eeNcTPDm%2FbMcpMY5CaC0u5%2FKPOoJEByaejrnCmdk25UTc8DGCGVC8p8ngiEIv8PVft3uGoRqhJOymqWoF3Y8GfVmD5B3Zmcg6s1O9cpfjqEM1DL28%2BM37q9pWRwENxP3avzojreRDMujoAIPsk1nnNifGN3tb%2FoHuKw4F1x%2BQIdlfaP16N2BWjsj35s4zY%2Fm6MNjof4noc%2B0FncQwkVgKF557lSd6OYwKvYKuYakArngAmRJSdfh8OvLRYIAUo%2BbM9INs%2FRZrQh1LXhuYYFpy6rrnyPcgHEHdEkCJsX%2FYRx0gbOFaJWngV%2Bp9HTR2HUm5wOEJtDUWfkU4xv8OSdyCJDtxnrGI9GZzNoP51GhZpWFzyf%2BeGij6w8CZ8nMaSP45PJuXr%2B2k%2B48TX%2FNzTGKLOYe5Du0DJUGCMUcNispcsz5bAlqyjLiT1XQMRtDCXa2nnCdqpXvz3tkk6kZVhg3e%2Fe%2Bcvqi0DdBPeZ19FI83aoFGxZ9HPRwapy%2FVpautYFSAWASoEkH7EBr4d1f3LSOPtqjKDksvmMdchmuTCtgfXCBjqkAdrdnz91vCQyFK3MmFfbDMJcdSkm053XsCIXP7q6Shqe3PDT4mNUPPWSwTSvYduJbhNNp%2BCeXYcRgczqOz%2F6Qc6Ps1BzD21t6nF3p0Q4zRgUO8MatKDHy47pFwrB84MDxPrGWZGEG9QQzZCQiF47PaW0Ey%2Fq90r3IwLWasdqCs1LsHs2rlKuJjqwWLzUk9iwp0FWiyHCx%2FGR0blt8G3obC%2Fq%2Byzi&X-Amz-Signature=23601e160130b5afe4dae0e37bf8c4569366bb443037196d2d709c5e1c6c755f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFY5VOA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCuLYfUJdwo4JrqivjPEgtZvIGLF8fyjCz5v%2BR2lJjE8wIhALc793bFSzAUD0N%2BQljgDoJ9z3tdYee%2B6sAtQWi8HX2hKv8DCF4QABoMNjM3NDIzMTgzODA1IgwNdIspXlZg74wPg%2BQq3AMr0Vyup0cCnLoD3YXjE1SODnXVWumEFHpvTltIvKac5w1NN5U7NsxmLnPnJOCruUf1fp2XwHm9q6bcqBNRboYB0eeNcTPDm%2FbMcpMY5CaC0u5%2FKPOoJEByaejrnCmdk25UTc8DGCGVC8p8ngiEIv8PVft3uGoRqhJOymqWoF3Y8GfVmD5B3Zmcg6s1O9cpfjqEM1DL28%2BM37q9pWRwENxP3avzojreRDMujoAIPsk1nnNifGN3tb%2FoHuKw4F1x%2BQIdlfaP16N2BWjsj35s4zY%2Fm6MNjof4noc%2B0FncQwkVgKF557lSd6OYwKvYKuYakArngAmRJSdfh8OvLRYIAUo%2BbM9INs%2FRZrQh1LXhuYYFpy6rrnyPcgHEHdEkCJsX%2FYRx0gbOFaJWngV%2Bp9HTR2HUm5wOEJtDUWfkU4xv8OSdyCJDtxnrGI9GZzNoP51GhZpWFzyf%2BeGij6w8CZ8nMaSP45PJuXr%2B2k%2B48TX%2FNzTGKLOYe5Du0DJUGCMUcNispcsz5bAlqyjLiT1XQMRtDCXa2nnCdqpXvz3tkk6kZVhg3e%2Fe%2Bcvqi0DdBPeZ19FI83aoFGxZ9HPRwapy%2FVpautYFSAWASoEkH7EBr4d1f3LSOPtqjKDksvmMdchmuTCtgfXCBjqkAdrdnz91vCQyFK3MmFfbDMJcdSkm053XsCIXP7q6Shqe3PDT4mNUPPWSwTSvYduJbhNNp%2BCeXYcRgczqOz%2F6Qc6Ps1BzD21t6nF3p0Q4zRgUO8MatKDHy47pFwrB84MDxPrGWZGEG9QQzZCQiF47PaW0Ey%2Fq90r3IwLWasdqCs1LsHs2rlKuJjqwWLzUk9iwp0FWiyHCx%2FGR0blt8G3obC%2Fq%2Byzi&X-Amz-Signature=c1b555e0713dd932592400fd18331be0e010af5889f008d94561b06e992d2255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFY5VOA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCuLYfUJdwo4JrqivjPEgtZvIGLF8fyjCz5v%2BR2lJjE8wIhALc793bFSzAUD0N%2BQljgDoJ9z3tdYee%2B6sAtQWi8HX2hKv8DCF4QABoMNjM3NDIzMTgzODA1IgwNdIspXlZg74wPg%2BQq3AMr0Vyup0cCnLoD3YXjE1SODnXVWumEFHpvTltIvKac5w1NN5U7NsxmLnPnJOCruUf1fp2XwHm9q6bcqBNRboYB0eeNcTPDm%2FbMcpMY5CaC0u5%2FKPOoJEByaejrnCmdk25UTc8DGCGVC8p8ngiEIv8PVft3uGoRqhJOymqWoF3Y8GfVmD5B3Zmcg6s1O9cpfjqEM1DL28%2BM37q9pWRwENxP3avzojreRDMujoAIPsk1nnNifGN3tb%2FoHuKw4F1x%2BQIdlfaP16N2BWjsj35s4zY%2Fm6MNjof4noc%2B0FncQwkVgKF557lSd6OYwKvYKuYakArngAmRJSdfh8OvLRYIAUo%2BbM9INs%2FRZrQh1LXhuYYFpy6rrnyPcgHEHdEkCJsX%2FYRx0gbOFaJWngV%2Bp9HTR2HUm5wOEJtDUWfkU4xv8OSdyCJDtxnrGI9GZzNoP51GhZpWFzyf%2BeGij6w8CZ8nMaSP45PJuXr%2B2k%2B48TX%2FNzTGKLOYe5Du0DJUGCMUcNispcsz5bAlqyjLiT1XQMRtDCXa2nnCdqpXvz3tkk6kZVhg3e%2Fe%2Bcvqi0DdBPeZ19FI83aoFGxZ9HPRwapy%2FVpautYFSAWASoEkH7EBr4d1f3LSOPtqjKDksvmMdchmuTCtgfXCBjqkAdrdnz91vCQyFK3MmFfbDMJcdSkm053XsCIXP7q6Shqe3PDT4mNUPPWSwTSvYduJbhNNp%2BCeXYcRgczqOz%2F6Qc6Ps1BzD21t6nF3p0Q4zRgUO8MatKDHy47pFwrB84MDxPrGWZGEG9QQzZCQiF47PaW0Ey%2Fq90r3IwLWasdqCs1LsHs2rlKuJjqwWLzUk9iwp0FWiyHCx%2FGR0blt8G3obC%2Fq%2Byzi&X-Amz-Signature=a1b0170e65e9f5561e7d5a3ff783671719acc13480832e0a8a85938c73629b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFY5VOA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCuLYfUJdwo4JrqivjPEgtZvIGLF8fyjCz5v%2BR2lJjE8wIhALc793bFSzAUD0N%2BQljgDoJ9z3tdYee%2B6sAtQWi8HX2hKv8DCF4QABoMNjM3NDIzMTgzODA1IgwNdIspXlZg74wPg%2BQq3AMr0Vyup0cCnLoD3YXjE1SODnXVWumEFHpvTltIvKac5w1NN5U7NsxmLnPnJOCruUf1fp2XwHm9q6bcqBNRboYB0eeNcTPDm%2FbMcpMY5CaC0u5%2FKPOoJEByaejrnCmdk25UTc8DGCGVC8p8ngiEIv8PVft3uGoRqhJOymqWoF3Y8GfVmD5B3Zmcg6s1O9cpfjqEM1DL28%2BM37q9pWRwENxP3avzojreRDMujoAIPsk1nnNifGN3tb%2FoHuKw4F1x%2BQIdlfaP16N2BWjsj35s4zY%2Fm6MNjof4noc%2B0FncQwkVgKF557lSd6OYwKvYKuYakArngAmRJSdfh8OvLRYIAUo%2BbM9INs%2FRZrQh1LXhuYYFpy6rrnyPcgHEHdEkCJsX%2FYRx0gbOFaJWngV%2Bp9HTR2HUm5wOEJtDUWfkU4xv8OSdyCJDtxnrGI9GZzNoP51GhZpWFzyf%2BeGij6w8CZ8nMaSP45PJuXr%2B2k%2B48TX%2FNzTGKLOYe5Du0DJUGCMUcNispcsz5bAlqyjLiT1XQMRtDCXa2nnCdqpXvz3tkk6kZVhg3e%2Fe%2Bcvqi0DdBPeZ19FI83aoFGxZ9HPRwapy%2FVpautYFSAWASoEkH7EBr4d1f3LSOPtqjKDksvmMdchmuTCtgfXCBjqkAdrdnz91vCQyFK3MmFfbDMJcdSkm053XsCIXP7q6Shqe3PDT4mNUPPWSwTSvYduJbhNNp%2BCeXYcRgczqOz%2F6Qc6Ps1BzD21t6nF3p0Q4zRgUO8MatKDHy47pFwrB84MDxPrGWZGEG9QQzZCQiF47PaW0Ey%2Fq90r3IwLWasdqCs1LsHs2rlKuJjqwWLzUk9iwp0FWiyHCx%2FGR0blt8G3obC%2Fq%2Byzi&X-Amz-Signature=d7834445839d8213f29c8843826a886062a75fe4b2d03c58367a4e081c31c5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
