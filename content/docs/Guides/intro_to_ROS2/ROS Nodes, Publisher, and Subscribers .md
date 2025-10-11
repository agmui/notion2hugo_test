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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLIIBWJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDUTMKOzqKLM9KoHKFxBUZmgxD9z1POcm3cT1dZA%2Bni2gIhAOV6BmszqoEuCtZ5TnMgwEcqwU0HfUDWoKCb8UhmKPeIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySllMWP4YE%2Fw5hkkQq3AMMkHvT1E1efWnwGkmTMQMAXU2aoEcUJZ5s70U%2B7UDgSfxg35vTLNqVA0itt%2BA%2FGBkm676sbBRt3P45iMSth%2F90PxPbYz9E7YMX1NfQg3o1ct7T8OSn6GgA2ZDRFszKRIntkGPVlmb%2FAUlAgrwlJAbWM0vgA7NQXwABRdp1nIG9Vw5jpfGIy%2FshgzFZJyjxFk1wi%2BoS7Gx4dw6p9s3nLG7QcLNbMTUgr%2BulU31bvrEB%2B%2Btig8hLr3dIReikn%2FyT3cg%2FpnsXjnDvTBJ1Ynojc43Ih9eMY2ZcFlhdh4gSr9sx43mnzqxT%2BgAs6YLlpruOcC3XkJYEMS%2B40ZYb3iUyWIEWTkvxAD0k1DxOqG7FtY0SIOlTYJJbbRds10MARIbxiEtFIKpmqZptzaPaXF2LOfP5N62qfCrHw2uiXNoiWAZrvQYvTCx4rN6y2%2FtsSo58WYKsySAsJRfxs%2FeV55aeijy9WJuIm5JJH0v1wX4sDF4F4C%2Be3yrW13Vb9WrL5tS6LEDnMJUyzyupPBApykY4PnmUGbOZiIvp4eOyHk63vxUK6ITSP%2FpgrUK9kPxE%2Fnyn7j5WPy7JumRcS9AF3duNysklTIq9b9IFNHwLpftRrdl4LC1tn9jgtYRY995QNTCi2KbHBjqkAfhl3D84UXXUpKYHuJprAmWZUPv%2F9%2FYOcI0mD8NTj%2FiY4zHc8agN79j39qgjEg7C4Gi1OTG4BTV6omCa4jaKzAFLdGIpw1kOzCD9eplUOERT8T2A0Ks8z8mYZSnasAo%2FSBMuujOmUEKaqLpGFD39tufoMd%2BG%2BbvReSJsOPdE8l%2BIbfu1P6Xmbu6dsSV9r3s9T6QOSINnbqeJ78POwibHMO5c5jfa&X-Amz-Signature=70d1aca17ea0ca860ed45524d39d524ab27fdcec3104462c5878336e260b0fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLIIBWJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDUTMKOzqKLM9KoHKFxBUZmgxD9z1POcm3cT1dZA%2Bni2gIhAOV6BmszqoEuCtZ5TnMgwEcqwU0HfUDWoKCb8UhmKPeIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySllMWP4YE%2Fw5hkkQq3AMMkHvT1E1efWnwGkmTMQMAXU2aoEcUJZ5s70U%2B7UDgSfxg35vTLNqVA0itt%2BA%2FGBkm676sbBRt3P45iMSth%2F90PxPbYz9E7YMX1NfQg3o1ct7T8OSn6GgA2ZDRFszKRIntkGPVlmb%2FAUlAgrwlJAbWM0vgA7NQXwABRdp1nIG9Vw5jpfGIy%2FshgzFZJyjxFk1wi%2BoS7Gx4dw6p9s3nLG7QcLNbMTUgr%2BulU31bvrEB%2B%2Btig8hLr3dIReikn%2FyT3cg%2FpnsXjnDvTBJ1Ynojc43Ih9eMY2ZcFlhdh4gSr9sx43mnzqxT%2BgAs6YLlpruOcC3XkJYEMS%2B40ZYb3iUyWIEWTkvxAD0k1DxOqG7FtY0SIOlTYJJbbRds10MARIbxiEtFIKpmqZptzaPaXF2LOfP5N62qfCrHw2uiXNoiWAZrvQYvTCx4rN6y2%2FtsSo58WYKsySAsJRfxs%2FeV55aeijy9WJuIm5JJH0v1wX4sDF4F4C%2Be3yrW13Vb9WrL5tS6LEDnMJUyzyupPBApykY4PnmUGbOZiIvp4eOyHk63vxUK6ITSP%2FpgrUK9kPxE%2Fnyn7j5WPy7JumRcS9AF3duNysklTIq9b9IFNHwLpftRrdl4LC1tn9jgtYRY995QNTCi2KbHBjqkAfhl3D84UXXUpKYHuJprAmWZUPv%2F9%2FYOcI0mD8NTj%2FiY4zHc8agN79j39qgjEg7C4Gi1OTG4BTV6omCa4jaKzAFLdGIpw1kOzCD9eplUOERT8T2A0Ks8z8mYZSnasAo%2FSBMuujOmUEKaqLpGFD39tufoMd%2BG%2BbvReSJsOPdE8l%2BIbfu1P6Xmbu6dsSV9r3s9T6QOSINnbqeJ78POwibHMO5c5jfa&X-Amz-Signature=f9c564b86c40b3598a606f0e35a6106da5b8df26f9c03ff022cce0370ecb3a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLIIBWJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDUTMKOzqKLM9KoHKFxBUZmgxD9z1POcm3cT1dZA%2Bni2gIhAOV6BmszqoEuCtZ5TnMgwEcqwU0HfUDWoKCb8UhmKPeIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySllMWP4YE%2Fw5hkkQq3AMMkHvT1E1efWnwGkmTMQMAXU2aoEcUJZ5s70U%2B7UDgSfxg35vTLNqVA0itt%2BA%2FGBkm676sbBRt3P45iMSth%2F90PxPbYz9E7YMX1NfQg3o1ct7T8OSn6GgA2ZDRFszKRIntkGPVlmb%2FAUlAgrwlJAbWM0vgA7NQXwABRdp1nIG9Vw5jpfGIy%2FshgzFZJyjxFk1wi%2BoS7Gx4dw6p9s3nLG7QcLNbMTUgr%2BulU31bvrEB%2B%2Btig8hLr3dIReikn%2FyT3cg%2FpnsXjnDvTBJ1Ynojc43Ih9eMY2ZcFlhdh4gSr9sx43mnzqxT%2BgAs6YLlpruOcC3XkJYEMS%2B40ZYb3iUyWIEWTkvxAD0k1DxOqG7FtY0SIOlTYJJbbRds10MARIbxiEtFIKpmqZptzaPaXF2LOfP5N62qfCrHw2uiXNoiWAZrvQYvTCx4rN6y2%2FtsSo58WYKsySAsJRfxs%2FeV55aeijy9WJuIm5JJH0v1wX4sDF4F4C%2Be3yrW13Vb9WrL5tS6LEDnMJUyzyupPBApykY4PnmUGbOZiIvp4eOyHk63vxUK6ITSP%2FpgrUK9kPxE%2Fnyn7j5WPy7JumRcS9AF3duNysklTIq9b9IFNHwLpftRrdl4LC1tn9jgtYRY995QNTCi2KbHBjqkAfhl3D84UXXUpKYHuJprAmWZUPv%2F9%2FYOcI0mD8NTj%2FiY4zHc8agN79j39qgjEg7C4Gi1OTG4BTV6omCa4jaKzAFLdGIpw1kOzCD9eplUOERT8T2A0Ks8z8mYZSnasAo%2FSBMuujOmUEKaqLpGFD39tufoMd%2BG%2BbvReSJsOPdE8l%2BIbfu1P6Xmbu6dsSV9r3s9T6QOSINnbqeJ78POwibHMO5c5jfa&X-Amz-Signature=848e7bb454273ebbd2f728f48b7064e6929d6786a15d0c04f33465a2df1c002e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLIIBWJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDUTMKOzqKLM9KoHKFxBUZmgxD9z1POcm3cT1dZA%2Bni2gIhAOV6BmszqoEuCtZ5TnMgwEcqwU0HfUDWoKCb8UhmKPeIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySllMWP4YE%2Fw5hkkQq3AMMkHvT1E1efWnwGkmTMQMAXU2aoEcUJZ5s70U%2B7UDgSfxg35vTLNqVA0itt%2BA%2FGBkm676sbBRt3P45iMSth%2F90PxPbYz9E7YMX1NfQg3o1ct7T8OSn6GgA2ZDRFszKRIntkGPVlmb%2FAUlAgrwlJAbWM0vgA7NQXwABRdp1nIG9Vw5jpfGIy%2FshgzFZJyjxFk1wi%2BoS7Gx4dw6p9s3nLG7QcLNbMTUgr%2BulU31bvrEB%2B%2Btig8hLr3dIReikn%2FyT3cg%2FpnsXjnDvTBJ1Ynojc43Ih9eMY2ZcFlhdh4gSr9sx43mnzqxT%2BgAs6YLlpruOcC3XkJYEMS%2B40ZYb3iUyWIEWTkvxAD0k1DxOqG7FtY0SIOlTYJJbbRds10MARIbxiEtFIKpmqZptzaPaXF2LOfP5N62qfCrHw2uiXNoiWAZrvQYvTCx4rN6y2%2FtsSo58WYKsySAsJRfxs%2FeV55aeijy9WJuIm5JJH0v1wX4sDF4F4C%2Be3yrW13Vb9WrL5tS6LEDnMJUyzyupPBApykY4PnmUGbOZiIvp4eOyHk63vxUK6ITSP%2FpgrUK9kPxE%2Fnyn7j5WPy7JumRcS9AF3duNysklTIq9b9IFNHwLpftRrdl4LC1tn9jgtYRY995QNTCi2KbHBjqkAfhl3D84UXXUpKYHuJprAmWZUPv%2F9%2FYOcI0mD8NTj%2FiY4zHc8agN79j39qgjEg7C4Gi1OTG4BTV6omCa4jaKzAFLdGIpw1kOzCD9eplUOERT8T2A0Ks8z8mYZSnasAo%2FSBMuujOmUEKaqLpGFD39tufoMd%2BG%2BbvReSJsOPdE8l%2BIbfu1P6Xmbu6dsSV9r3s9T6QOSINnbqeJ78POwibHMO5c5jfa&X-Amz-Signature=eb8d1af33ba94c2abb01e9b2abc618888e4cf677408010af2ab35c97a42be03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLIIBWJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDUTMKOzqKLM9KoHKFxBUZmgxD9z1POcm3cT1dZA%2Bni2gIhAOV6BmszqoEuCtZ5TnMgwEcqwU0HfUDWoKCb8UhmKPeIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySllMWP4YE%2Fw5hkkQq3AMMkHvT1E1efWnwGkmTMQMAXU2aoEcUJZ5s70U%2B7UDgSfxg35vTLNqVA0itt%2BA%2FGBkm676sbBRt3P45iMSth%2F90PxPbYz9E7YMX1NfQg3o1ct7T8OSn6GgA2ZDRFszKRIntkGPVlmb%2FAUlAgrwlJAbWM0vgA7NQXwABRdp1nIG9Vw5jpfGIy%2FshgzFZJyjxFk1wi%2BoS7Gx4dw6p9s3nLG7QcLNbMTUgr%2BulU31bvrEB%2B%2Btig8hLr3dIReikn%2FyT3cg%2FpnsXjnDvTBJ1Ynojc43Ih9eMY2ZcFlhdh4gSr9sx43mnzqxT%2BgAs6YLlpruOcC3XkJYEMS%2B40ZYb3iUyWIEWTkvxAD0k1DxOqG7FtY0SIOlTYJJbbRds10MARIbxiEtFIKpmqZptzaPaXF2LOfP5N62qfCrHw2uiXNoiWAZrvQYvTCx4rN6y2%2FtsSo58WYKsySAsJRfxs%2FeV55aeijy9WJuIm5JJH0v1wX4sDF4F4C%2Be3yrW13Vb9WrL5tS6LEDnMJUyzyupPBApykY4PnmUGbOZiIvp4eOyHk63vxUK6ITSP%2FpgrUK9kPxE%2Fnyn7j5WPy7JumRcS9AF3duNysklTIq9b9IFNHwLpftRrdl4LC1tn9jgtYRY995QNTCi2KbHBjqkAfhl3D84UXXUpKYHuJprAmWZUPv%2F9%2FYOcI0mD8NTj%2FiY4zHc8agN79j39qgjEg7C4Gi1OTG4BTV6omCa4jaKzAFLdGIpw1kOzCD9eplUOERT8T2A0Ks8z8mYZSnasAo%2FSBMuujOmUEKaqLpGFD39tufoMd%2BG%2BbvReSJsOPdE8l%2BIbfu1P6Xmbu6dsSV9r3s9T6QOSINnbqeJ78POwibHMO5c5jfa&X-Amz-Signature=b74921fc9c132ee9b2c7ac7237cf091aac50f8af592669b5d583149deff7f659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLIIBWJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDUTMKOzqKLM9KoHKFxBUZmgxD9z1POcm3cT1dZA%2Bni2gIhAOV6BmszqoEuCtZ5TnMgwEcqwU0HfUDWoKCb8UhmKPeIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySllMWP4YE%2Fw5hkkQq3AMMkHvT1E1efWnwGkmTMQMAXU2aoEcUJZ5s70U%2B7UDgSfxg35vTLNqVA0itt%2BA%2FGBkm676sbBRt3P45iMSth%2F90PxPbYz9E7YMX1NfQg3o1ct7T8OSn6GgA2ZDRFszKRIntkGPVlmb%2FAUlAgrwlJAbWM0vgA7NQXwABRdp1nIG9Vw5jpfGIy%2FshgzFZJyjxFk1wi%2BoS7Gx4dw6p9s3nLG7QcLNbMTUgr%2BulU31bvrEB%2B%2Btig8hLr3dIReikn%2FyT3cg%2FpnsXjnDvTBJ1Ynojc43Ih9eMY2ZcFlhdh4gSr9sx43mnzqxT%2BgAs6YLlpruOcC3XkJYEMS%2B40ZYb3iUyWIEWTkvxAD0k1DxOqG7FtY0SIOlTYJJbbRds10MARIbxiEtFIKpmqZptzaPaXF2LOfP5N62qfCrHw2uiXNoiWAZrvQYvTCx4rN6y2%2FtsSo58WYKsySAsJRfxs%2FeV55aeijy9WJuIm5JJH0v1wX4sDF4F4C%2Be3yrW13Vb9WrL5tS6LEDnMJUyzyupPBApykY4PnmUGbOZiIvp4eOyHk63vxUK6ITSP%2FpgrUK9kPxE%2Fnyn7j5WPy7JumRcS9AF3duNysklTIq9b9IFNHwLpftRrdl4LC1tn9jgtYRY995QNTCi2KbHBjqkAfhl3D84UXXUpKYHuJprAmWZUPv%2F9%2FYOcI0mD8NTj%2FiY4zHc8agN79j39qgjEg7C4Gi1OTG4BTV6omCa4jaKzAFLdGIpw1kOzCD9eplUOERT8T2A0Ks8z8mYZSnasAo%2FSBMuujOmUEKaqLpGFD39tufoMd%2BG%2BbvReSJsOPdE8l%2BIbfu1P6Xmbu6dsSV9r3s9T6QOSINnbqeJ78POwibHMO5c5jfa&X-Amz-Signature=749a658a26035e097eae34bef16dbfb0546519f2fa81c05ef3dcc7bba8188dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLIIBWJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDUTMKOzqKLM9KoHKFxBUZmgxD9z1POcm3cT1dZA%2Bni2gIhAOV6BmszqoEuCtZ5TnMgwEcqwU0HfUDWoKCb8UhmKPeIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySllMWP4YE%2Fw5hkkQq3AMMkHvT1E1efWnwGkmTMQMAXU2aoEcUJZ5s70U%2B7UDgSfxg35vTLNqVA0itt%2BA%2FGBkm676sbBRt3P45iMSth%2F90PxPbYz9E7YMX1NfQg3o1ct7T8OSn6GgA2ZDRFszKRIntkGPVlmb%2FAUlAgrwlJAbWM0vgA7NQXwABRdp1nIG9Vw5jpfGIy%2FshgzFZJyjxFk1wi%2BoS7Gx4dw6p9s3nLG7QcLNbMTUgr%2BulU31bvrEB%2B%2Btig8hLr3dIReikn%2FyT3cg%2FpnsXjnDvTBJ1Ynojc43Ih9eMY2ZcFlhdh4gSr9sx43mnzqxT%2BgAs6YLlpruOcC3XkJYEMS%2B40ZYb3iUyWIEWTkvxAD0k1DxOqG7FtY0SIOlTYJJbbRds10MARIbxiEtFIKpmqZptzaPaXF2LOfP5N62qfCrHw2uiXNoiWAZrvQYvTCx4rN6y2%2FtsSo58WYKsySAsJRfxs%2FeV55aeijy9WJuIm5JJH0v1wX4sDF4F4C%2Be3yrW13Vb9WrL5tS6LEDnMJUyzyupPBApykY4PnmUGbOZiIvp4eOyHk63vxUK6ITSP%2FpgrUK9kPxE%2Fnyn7j5WPy7JumRcS9AF3duNysklTIq9b9IFNHwLpftRrdl4LC1tn9jgtYRY995QNTCi2KbHBjqkAfhl3D84UXXUpKYHuJprAmWZUPv%2F9%2FYOcI0mD8NTj%2FiY4zHc8agN79j39qgjEg7C4Gi1OTG4BTV6omCa4jaKzAFLdGIpw1kOzCD9eplUOERT8T2A0Ks8z8mYZSnasAo%2FSBMuujOmUEKaqLpGFD39tufoMd%2BG%2BbvReSJsOPdE8l%2BIbfu1P6Xmbu6dsSV9r3s9T6QOSINnbqeJ78POwibHMO5c5jfa&X-Amz-Signature=cf254ee736b767157f6e4b19eff4924251287e3412109b759381f884936a8371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLIIBWJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDUTMKOzqKLM9KoHKFxBUZmgxD9z1POcm3cT1dZA%2Bni2gIhAOV6BmszqoEuCtZ5TnMgwEcqwU0HfUDWoKCb8UhmKPeIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySllMWP4YE%2Fw5hkkQq3AMMkHvT1E1efWnwGkmTMQMAXU2aoEcUJZ5s70U%2B7UDgSfxg35vTLNqVA0itt%2BA%2FGBkm676sbBRt3P45iMSth%2F90PxPbYz9E7YMX1NfQg3o1ct7T8OSn6GgA2ZDRFszKRIntkGPVlmb%2FAUlAgrwlJAbWM0vgA7NQXwABRdp1nIG9Vw5jpfGIy%2FshgzFZJyjxFk1wi%2BoS7Gx4dw6p9s3nLG7QcLNbMTUgr%2BulU31bvrEB%2B%2Btig8hLr3dIReikn%2FyT3cg%2FpnsXjnDvTBJ1Ynojc43Ih9eMY2ZcFlhdh4gSr9sx43mnzqxT%2BgAs6YLlpruOcC3XkJYEMS%2B40ZYb3iUyWIEWTkvxAD0k1DxOqG7FtY0SIOlTYJJbbRds10MARIbxiEtFIKpmqZptzaPaXF2LOfP5N62qfCrHw2uiXNoiWAZrvQYvTCx4rN6y2%2FtsSo58WYKsySAsJRfxs%2FeV55aeijy9WJuIm5JJH0v1wX4sDF4F4C%2Be3yrW13Vb9WrL5tS6LEDnMJUyzyupPBApykY4PnmUGbOZiIvp4eOyHk63vxUK6ITSP%2FpgrUK9kPxE%2Fnyn7j5WPy7JumRcS9AF3duNysklTIq9b9IFNHwLpftRrdl4LC1tn9jgtYRY995QNTCi2KbHBjqkAfhl3D84UXXUpKYHuJprAmWZUPv%2F9%2FYOcI0mD8NTj%2FiY4zHc8agN79j39qgjEg7C4Gi1OTG4BTV6omCa4jaKzAFLdGIpw1kOzCD9eplUOERT8T2A0Ks8z8mYZSnasAo%2FSBMuujOmUEKaqLpGFD39tufoMd%2BG%2BbvReSJsOPdE8l%2BIbfu1P6Xmbu6dsSV9r3s9T6QOSINnbqeJ78POwibHMO5c5jfa&X-Amz-Signature=185d1c3a46a5adf2d16a2f017ef046442830b524d30278ba02b7b42a597cbe1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
