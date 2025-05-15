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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2G77BE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3QxpwhEQDd0I3tHtzpqJKFvLPwTLn%2FktRuX51usNZDAiBgBk7WGeiKaBf0IDB%2FqDTDb52LTbJmhfSjFmokd0CHvir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMOcrbf0I%2FtTG%2FLV9xKtwDDInBkUb6ZJYEIuwvRLfpPgF9sgP5%2F9Ub96w4vm4ozVLbtjp%2BqbAXKRiSkzn8V9H5mCSRKAN5HjxpOHI9tfgVkWnn9dRLwF%2B7TiqBQ12huHkvoqIU1%2FAeyDeVNBAxDfMiLK5TxXHClph%2FqFejbTpBtprCPmZu8dVpRSA29Qa4LIEIzu7yC3dAyE6qgHYaIhfWF8bvS%2F8cwInwG3Lcrd17l0rvGna6zGt2MB3VmzKWvDAukuoqHIDcqLXURNI2bJkDaL%2B72A1P%2FMTLcMelzIlF6W2tfQFSwveOje0Gy%2BYudSKivLa64N82gQZKEVYGWTp0uPbAWO3UoFmBLglLvwSHdTB3ST9pP1GTQxnrbv52YeSJbGE6xA3IU%2BEa7cWNB7JJ0Z4%2FC7gG51oFhO4Vn9zLvTY4Kt1i1DeUB%2BbvkBYLCiYrkoILko1pl6M1%2BYYbollqslpAzgYladDqyVCtmCvWKL53Pl8vPGGABhOK6TEreMluM4OmfAKl0M5azNbMVd3A6aGMFJ9d5x4vxb3mjKm5RRehhkEBLnt%2BFM288Q591UtFTm5gTN47vJ1CfHr5aRY7ZFTOdN8p0lDvCDCbV8j31kBpYA9sWNp8W6R2tqeUw0ND42rdXJ7n9wFzTQIw%2FtGVwQY6pgHVB7XQEFmcHP123Vh6bmoTY9Oyw3JSjNhS%2Bu3bgxeHSnfyxz%2FSh0Q7Qwm1oRHogIDb6iA4V16cbQ8A3%2BQjrANcDxqYbukGo%2BCSl%2FHeKeEm0zVoC0xeNTenn%2BCoW6KiNQkPmMuYXHlhgMnYQlHZ%2B1nDgTF9aHm%2FLyqs9PwyG3Z3HnPad2%2BXLAzouLsJ5wx9JOS8V56DnpAVthQqmMyZvPl3ybGPsn3v&X-Amz-Signature=bc3ecaeb28cc98720b895ec38fdace4cbe73738c4de164cbf0c8cb516f18cee3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2G77BE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3QxpwhEQDd0I3tHtzpqJKFvLPwTLn%2FktRuX51usNZDAiBgBk7WGeiKaBf0IDB%2FqDTDb52LTbJmhfSjFmokd0CHvir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMOcrbf0I%2FtTG%2FLV9xKtwDDInBkUb6ZJYEIuwvRLfpPgF9sgP5%2F9Ub96w4vm4ozVLbtjp%2BqbAXKRiSkzn8V9H5mCSRKAN5HjxpOHI9tfgVkWnn9dRLwF%2B7TiqBQ12huHkvoqIU1%2FAeyDeVNBAxDfMiLK5TxXHClph%2FqFejbTpBtprCPmZu8dVpRSA29Qa4LIEIzu7yC3dAyE6qgHYaIhfWF8bvS%2F8cwInwG3Lcrd17l0rvGna6zGt2MB3VmzKWvDAukuoqHIDcqLXURNI2bJkDaL%2B72A1P%2FMTLcMelzIlF6W2tfQFSwveOje0Gy%2BYudSKivLa64N82gQZKEVYGWTp0uPbAWO3UoFmBLglLvwSHdTB3ST9pP1GTQxnrbv52YeSJbGE6xA3IU%2BEa7cWNB7JJ0Z4%2FC7gG51oFhO4Vn9zLvTY4Kt1i1DeUB%2BbvkBYLCiYrkoILko1pl6M1%2BYYbollqslpAzgYladDqyVCtmCvWKL53Pl8vPGGABhOK6TEreMluM4OmfAKl0M5azNbMVd3A6aGMFJ9d5x4vxb3mjKm5RRehhkEBLnt%2BFM288Q591UtFTm5gTN47vJ1CfHr5aRY7ZFTOdN8p0lDvCDCbV8j31kBpYA9sWNp8W6R2tqeUw0ND42rdXJ7n9wFzTQIw%2FtGVwQY6pgHVB7XQEFmcHP123Vh6bmoTY9Oyw3JSjNhS%2Bu3bgxeHSnfyxz%2FSh0Q7Qwm1oRHogIDb6iA4V16cbQ8A3%2BQjrANcDxqYbukGo%2BCSl%2FHeKeEm0zVoC0xeNTenn%2BCoW6KiNQkPmMuYXHlhgMnYQlHZ%2B1nDgTF9aHm%2FLyqs9PwyG3Z3HnPad2%2BXLAzouLsJ5wx9JOS8V56DnpAVthQqmMyZvPl3ybGPsn3v&X-Amz-Signature=4f9f31d85f402e1435d6e1db0e7d97750c194659ac7894f29280444592dc9a37&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2G77BE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3QxpwhEQDd0I3tHtzpqJKFvLPwTLn%2FktRuX51usNZDAiBgBk7WGeiKaBf0IDB%2FqDTDb52LTbJmhfSjFmokd0CHvir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMOcrbf0I%2FtTG%2FLV9xKtwDDInBkUb6ZJYEIuwvRLfpPgF9sgP5%2F9Ub96w4vm4ozVLbtjp%2BqbAXKRiSkzn8V9H5mCSRKAN5HjxpOHI9tfgVkWnn9dRLwF%2B7TiqBQ12huHkvoqIU1%2FAeyDeVNBAxDfMiLK5TxXHClph%2FqFejbTpBtprCPmZu8dVpRSA29Qa4LIEIzu7yC3dAyE6qgHYaIhfWF8bvS%2F8cwInwG3Lcrd17l0rvGna6zGt2MB3VmzKWvDAukuoqHIDcqLXURNI2bJkDaL%2B72A1P%2FMTLcMelzIlF6W2tfQFSwveOje0Gy%2BYudSKivLa64N82gQZKEVYGWTp0uPbAWO3UoFmBLglLvwSHdTB3ST9pP1GTQxnrbv52YeSJbGE6xA3IU%2BEa7cWNB7JJ0Z4%2FC7gG51oFhO4Vn9zLvTY4Kt1i1DeUB%2BbvkBYLCiYrkoILko1pl6M1%2BYYbollqslpAzgYladDqyVCtmCvWKL53Pl8vPGGABhOK6TEreMluM4OmfAKl0M5azNbMVd3A6aGMFJ9d5x4vxb3mjKm5RRehhkEBLnt%2BFM288Q591UtFTm5gTN47vJ1CfHr5aRY7ZFTOdN8p0lDvCDCbV8j31kBpYA9sWNp8W6R2tqeUw0ND42rdXJ7n9wFzTQIw%2FtGVwQY6pgHVB7XQEFmcHP123Vh6bmoTY9Oyw3JSjNhS%2Bu3bgxeHSnfyxz%2FSh0Q7Qwm1oRHogIDb6iA4V16cbQ8A3%2BQjrANcDxqYbukGo%2BCSl%2FHeKeEm0zVoC0xeNTenn%2BCoW6KiNQkPmMuYXHlhgMnYQlHZ%2B1nDgTF9aHm%2FLyqs9PwyG3Z3HnPad2%2BXLAzouLsJ5wx9JOS8V56DnpAVthQqmMyZvPl3ybGPsn3v&X-Amz-Signature=dd612bf52c0706f4851293779be9d1955ca89b6ed2b1bd5577475a0479093ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2G77BE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3QxpwhEQDd0I3tHtzpqJKFvLPwTLn%2FktRuX51usNZDAiBgBk7WGeiKaBf0IDB%2FqDTDb52LTbJmhfSjFmokd0CHvir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMOcrbf0I%2FtTG%2FLV9xKtwDDInBkUb6ZJYEIuwvRLfpPgF9sgP5%2F9Ub96w4vm4ozVLbtjp%2BqbAXKRiSkzn8V9H5mCSRKAN5HjxpOHI9tfgVkWnn9dRLwF%2B7TiqBQ12huHkvoqIU1%2FAeyDeVNBAxDfMiLK5TxXHClph%2FqFejbTpBtprCPmZu8dVpRSA29Qa4LIEIzu7yC3dAyE6qgHYaIhfWF8bvS%2F8cwInwG3Lcrd17l0rvGna6zGt2MB3VmzKWvDAukuoqHIDcqLXURNI2bJkDaL%2B72A1P%2FMTLcMelzIlF6W2tfQFSwveOje0Gy%2BYudSKivLa64N82gQZKEVYGWTp0uPbAWO3UoFmBLglLvwSHdTB3ST9pP1GTQxnrbv52YeSJbGE6xA3IU%2BEa7cWNB7JJ0Z4%2FC7gG51oFhO4Vn9zLvTY4Kt1i1DeUB%2BbvkBYLCiYrkoILko1pl6M1%2BYYbollqslpAzgYladDqyVCtmCvWKL53Pl8vPGGABhOK6TEreMluM4OmfAKl0M5azNbMVd3A6aGMFJ9d5x4vxb3mjKm5RRehhkEBLnt%2BFM288Q591UtFTm5gTN47vJ1CfHr5aRY7ZFTOdN8p0lDvCDCbV8j31kBpYA9sWNp8W6R2tqeUw0ND42rdXJ7n9wFzTQIw%2FtGVwQY6pgHVB7XQEFmcHP123Vh6bmoTY9Oyw3JSjNhS%2Bu3bgxeHSnfyxz%2FSh0Q7Qwm1oRHogIDb6iA4V16cbQ8A3%2BQjrANcDxqYbukGo%2BCSl%2FHeKeEm0zVoC0xeNTenn%2BCoW6KiNQkPmMuYXHlhgMnYQlHZ%2B1nDgTF9aHm%2FLyqs9PwyG3Z3HnPad2%2BXLAzouLsJ5wx9JOS8V56DnpAVthQqmMyZvPl3ybGPsn3v&X-Amz-Signature=10b6e7f9460f3b83bf9698e19c01c4ad15be42e1a6e474c213942be241bf0b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2G77BE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3QxpwhEQDd0I3tHtzpqJKFvLPwTLn%2FktRuX51usNZDAiBgBk7WGeiKaBf0IDB%2FqDTDb52LTbJmhfSjFmokd0CHvir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMOcrbf0I%2FtTG%2FLV9xKtwDDInBkUb6ZJYEIuwvRLfpPgF9sgP5%2F9Ub96w4vm4ozVLbtjp%2BqbAXKRiSkzn8V9H5mCSRKAN5HjxpOHI9tfgVkWnn9dRLwF%2B7TiqBQ12huHkvoqIU1%2FAeyDeVNBAxDfMiLK5TxXHClph%2FqFejbTpBtprCPmZu8dVpRSA29Qa4LIEIzu7yC3dAyE6qgHYaIhfWF8bvS%2F8cwInwG3Lcrd17l0rvGna6zGt2MB3VmzKWvDAukuoqHIDcqLXURNI2bJkDaL%2B72A1P%2FMTLcMelzIlF6W2tfQFSwveOje0Gy%2BYudSKivLa64N82gQZKEVYGWTp0uPbAWO3UoFmBLglLvwSHdTB3ST9pP1GTQxnrbv52YeSJbGE6xA3IU%2BEa7cWNB7JJ0Z4%2FC7gG51oFhO4Vn9zLvTY4Kt1i1DeUB%2BbvkBYLCiYrkoILko1pl6M1%2BYYbollqslpAzgYladDqyVCtmCvWKL53Pl8vPGGABhOK6TEreMluM4OmfAKl0M5azNbMVd3A6aGMFJ9d5x4vxb3mjKm5RRehhkEBLnt%2BFM288Q591UtFTm5gTN47vJ1CfHr5aRY7ZFTOdN8p0lDvCDCbV8j31kBpYA9sWNp8W6R2tqeUw0ND42rdXJ7n9wFzTQIw%2FtGVwQY6pgHVB7XQEFmcHP123Vh6bmoTY9Oyw3JSjNhS%2Bu3bgxeHSnfyxz%2FSh0Q7Qwm1oRHogIDb6iA4V16cbQ8A3%2BQjrANcDxqYbukGo%2BCSl%2FHeKeEm0zVoC0xeNTenn%2BCoW6KiNQkPmMuYXHlhgMnYQlHZ%2B1nDgTF9aHm%2FLyqs9PwyG3Z3HnPad2%2BXLAzouLsJ5wx9JOS8V56DnpAVthQqmMyZvPl3ybGPsn3v&X-Amz-Signature=550cec3fb4bf4e00c40aa75426370f4e2de9f0fb7d11114bdfdf030684a410e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2G77BE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3QxpwhEQDd0I3tHtzpqJKFvLPwTLn%2FktRuX51usNZDAiBgBk7WGeiKaBf0IDB%2FqDTDb52LTbJmhfSjFmokd0CHvir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMOcrbf0I%2FtTG%2FLV9xKtwDDInBkUb6ZJYEIuwvRLfpPgF9sgP5%2F9Ub96w4vm4ozVLbtjp%2BqbAXKRiSkzn8V9H5mCSRKAN5HjxpOHI9tfgVkWnn9dRLwF%2B7TiqBQ12huHkvoqIU1%2FAeyDeVNBAxDfMiLK5TxXHClph%2FqFejbTpBtprCPmZu8dVpRSA29Qa4LIEIzu7yC3dAyE6qgHYaIhfWF8bvS%2F8cwInwG3Lcrd17l0rvGna6zGt2MB3VmzKWvDAukuoqHIDcqLXURNI2bJkDaL%2B72A1P%2FMTLcMelzIlF6W2tfQFSwveOje0Gy%2BYudSKivLa64N82gQZKEVYGWTp0uPbAWO3UoFmBLglLvwSHdTB3ST9pP1GTQxnrbv52YeSJbGE6xA3IU%2BEa7cWNB7JJ0Z4%2FC7gG51oFhO4Vn9zLvTY4Kt1i1DeUB%2BbvkBYLCiYrkoILko1pl6M1%2BYYbollqslpAzgYladDqyVCtmCvWKL53Pl8vPGGABhOK6TEreMluM4OmfAKl0M5azNbMVd3A6aGMFJ9d5x4vxb3mjKm5RRehhkEBLnt%2BFM288Q591UtFTm5gTN47vJ1CfHr5aRY7ZFTOdN8p0lDvCDCbV8j31kBpYA9sWNp8W6R2tqeUw0ND42rdXJ7n9wFzTQIw%2FtGVwQY6pgHVB7XQEFmcHP123Vh6bmoTY9Oyw3JSjNhS%2Bu3bgxeHSnfyxz%2FSh0Q7Qwm1oRHogIDb6iA4V16cbQ8A3%2BQjrANcDxqYbukGo%2BCSl%2FHeKeEm0zVoC0xeNTenn%2BCoW6KiNQkPmMuYXHlhgMnYQlHZ%2B1nDgTF9aHm%2FLyqs9PwyG3Z3HnPad2%2BXLAzouLsJ5wx9JOS8V56DnpAVthQqmMyZvPl3ybGPsn3v&X-Amz-Signature=948f61f1589663091177ddaa040feaf7da1ccd5331fc0e4b8d40427c23db888a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2G77BE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3QxpwhEQDd0I3tHtzpqJKFvLPwTLn%2FktRuX51usNZDAiBgBk7WGeiKaBf0IDB%2FqDTDb52LTbJmhfSjFmokd0CHvir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMOcrbf0I%2FtTG%2FLV9xKtwDDInBkUb6ZJYEIuwvRLfpPgF9sgP5%2F9Ub96w4vm4ozVLbtjp%2BqbAXKRiSkzn8V9H5mCSRKAN5HjxpOHI9tfgVkWnn9dRLwF%2B7TiqBQ12huHkvoqIU1%2FAeyDeVNBAxDfMiLK5TxXHClph%2FqFejbTpBtprCPmZu8dVpRSA29Qa4LIEIzu7yC3dAyE6qgHYaIhfWF8bvS%2F8cwInwG3Lcrd17l0rvGna6zGt2MB3VmzKWvDAukuoqHIDcqLXURNI2bJkDaL%2B72A1P%2FMTLcMelzIlF6W2tfQFSwveOje0Gy%2BYudSKivLa64N82gQZKEVYGWTp0uPbAWO3UoFmBLglLvwSHdTB3ST9pP1GTQxnrbv52YeSJbGE6xA3IU%2BEa7cWNB7JJ0Z4%2FC7gG51oFhO4Vn9zLvTY4Kt1i1DeUB%2BbvkBYLCiYrkoILko1pl6M1%2BYYbollqslpAzgYladDqyVCtmCvWKL53Pl8vPGGABhOK6TEreMluM4OmfAKl0M5azNbMVd3A6aGMFJ9d5x4vxb3mjKm5RRehhkEBLnt%2BFM288Q591UtFTm5gTN47vJ1CfHr5aRY7ZFTOdN8p0lDvCDCbV8j31kBpYA9sWNp8W6R2tqeUw0ND42rdXJ7n9wFzTQIw%2FtGVwQY6pgHVB7XQEFmcHP123Vh6bmoTY9Oyw3JSjNhS%2Bu3bgxeHSnfyxz%2FSh0Q7Qwm1oRHogIDb6iA4V16cbQ8A3%2BQjrANcDxqYbukGo%2BCSl%2FHeKeEm0zVoC0xeNTenn%2BCoW6KiNQkPmMuYXHlhgMnYQlHZ%2B1nDgTF9aHm%2FLyqs9PwyG3Z3HnPad2%2BXLAzouLsJ5wx9JOS8V56DnpAVthQqmMyZvPl3ybGPsn3v&X-Amz-Signature=1702102bf4aba0bf987d7fb140a9b7a17f10117a6082495afde824f9eda9a14c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2G77BE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3QxpwhEQDd0I3tHtzpqJKFvLPwTLn%2FktRuX51usNZDAiBgBk7WGeiKaBf0IDB%2FqDTDb52LTbJmhfSjFmokd0CHvir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMOcrbf0I%2FtTG%2FLV9xKtwDDInBkUb6ZJYEIuwvRLfpPgF9sgP5%2F9Ub96w4vm4ozVLbtjp%2BqbAXKRiSkzn8V9H5mCSRKAN5HjxpOHI9tfgVkWnn9dRLwF%2B7TiqBQ12huHkvoqIU1%2FAeyDeVNBAxDfMiLK5TxXHClph%2FqFejbTpBtprCPmZu8dVpRSA29Qa4LIEIzu7yC3dAyE6qgHYaIhfWF8bvS%2F8cwInwG3Lcrd17l0rvGna6zGt2MB3VmzKWvDAukuoqHIDcqLXURNI2bJkDaL%2B72A1P%2FMTLcMelzIlF6W2tfQFSwveOje0Gy%2BYudSKivLa64N82gQZKEVYGWTp0uPbAWO3UoFmBLglLvwSHdTB3ST9pP1GTQxnrbv52YeSJbGE6xA3IU%2BEa7cWNB7JJ0Z4%2FC7gG51oFhO4Vn9zLvTY4Kt1i1DeUB%2BbvkBYLCiYrkoILko1pl6M1%2BYYbollqslpAzgYladDqyVCtmCvWKL53Pl8vPGGABhOK6TEreMluM4OmfAKl0M5azNbMVd3A6aGMFJ9d5x4vxb3mjKm5RRehhkEBLnt%2BFM288Q591UtFTm5gTN47vJ1CfHr5aRY7ZFTOdN8p0lDvCDCbV8j31kBpYA9sWNp8W6R2tqeUw0ND42rdXJ7n9wFzTQIw%2FtGVwQY6pgHVB7XQEFmcHP123Vh6bmoTY9Oyw3JSjNhS%2Bu3bgxeHSnfyxz%2FSh0Q7Qwm1oRHogIDb6iA4V16cbQ8A3%2BQjrANcDxqYbukGo%2BCSl%2FHeKeEm0zVoC0xeNTenn%2BCoW6KiNQkPmMuYXHlhgMnYQlHZ%2B1nDgTF9aHm%2FLyqs9PwyG3Z3HnPad2%2BXLAzouLsJ5wx9JOS8V56DnpAVthQqmMyZvPl3ybGPsn3v&X-Amz-Signature=3ba5f85de80de2785d7d818f90b2fabd842bc4f2f6f94be0f23f50c75dbbaa4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
