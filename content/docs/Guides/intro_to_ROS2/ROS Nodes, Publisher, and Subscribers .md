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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIEKP4Q%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCXlcu336vNfblkyel4qAnHKKnWc%2BcJHsMD8SbuQHeOnQIhAIL8c1gvpPUzbP%2BfrPnwtVB2asllLtTcMVWPzAlGgs%2BpKv8DCAwQABoMNjM3NDIzMTgzODA1IgzbGoutSNU9bADjnGIq3APA%2BRUgjkZjzYw3m4ktMOMvon5MwuRxTDqCEdTw3sqmolXbvp2vWDnZJY7DiNjQW%2B1DuAoZaAFjDslycHAuXG8%2B4Q5NZTvQhhwOJNm0vlwTiH4WaqosW6p1JxD3iSdHMBx4Qbpe2S%2FghcehsQKtqSCv7SlOuHYd9ejfS55qIZN74m%2FCV8fgQ5R2zxEF1yQxeClmMomHY9vgW1s0mU9GZgAPJw9gmspalnb5h7MEX%2BlyTTgkq7Srs%2FCbCRIizjwM0ivs4U5f6Wr92TrV0lghW9G4b1EuCLYfY19Jy93A4Sv%2F%2F7JoZTYdWKoXWJ6T6Wl2NGavf0xHZLsMmQFP32EnukRdS9A99WZvGbhe4qRmwvIud%2FvPuDXNOfck%2FQMHChquMLN0GJmA5fKEfj5GfFNKozpkJn0%2FmBBv%2BH%2F6ui1yRcyrSioTP7B6aIqOQeWifqesUHwM9CgxU6KVmnmcxPR8P2oj6BBjY2Noc2%2BMNeJ8Y7TY8iYwv8LBIj32On3xaid0UooGbFjPdSSJUAFjnmbfRz4xpyZQMC6EEomwDasEzOHtsqHUvpgN3d08NWb8BsJ98uRBeDIbiR%2BLExtbMT6mTuiIodNjmti5wqP6pN9sA5I14pBqtreKoRE0z2qVsTD4hYXQBjqkAWmKlzVNN%2FNINI%2FV9QvCmAPAnxnOQCMrPtg6%2Bn5p5wz8eb4qLSKIPm2zOYnUC2rSqhx6Fuj7JQHNOJcO6jCf1lIgANai5J5UmIqE%2B6FAnhzW9%2BTrac5bCE3L52NsIiO%2BcNUujBXaOkJeJ0Xtm2f0bRNc8FBhVtyKOQpen7rUeXVlpizlWs4tQ%2FWG9%2FgaRVj%2FXPTnJw5%2BLt1pyRm15jw4mipyLVP5&X-Amz-Signature=e1b4d36a0589406dd654fc31496ffde6166ae3057d6accbf4595078a1756c055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIEKP4Q%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCXlcu336vNfblkyel4qAnHKKnWc%2BcJHsMD8SbuQHeOnQIhAIL8c1gvpPUzbP%2BfrPnwtVB2asllLtTcMVWPzAlGgs%2BpKv8DCAwQABoMNjM3NDIzMTgzODA1IgzbGoutSNU9bADjnGIq3APA%2BRUgjkZjzYw3m4ktMOMvon5MwuRxTDqCEdTw3sqmolXbvp2vWDnZJY7DiNjQW%2B1DuAoZaAFjDslycHAuXG8%2B4Q5NZTvQhhwOJNm0vlwTiH4WaqosW6p1JxD3iSdHMBx4Qbpe2S%2FghcehsQKtqSCv7SlOuHYd9ejfS55qIZN74m%2FCV8fgQ5R2zxEF1yQxeClmMomHY9vgW1s0mU9GZgAPJw9gmspalnb5h7MEX%2BlyTTgkq7Srs%2FCbCRIizjwM0ivs4U5f6Wr92TrV0lghW9G4b1EuCLYfY19Jy93A4Sv%2F%2F7JoZTYdWKoXWJ6T6Wl2NGavf0xHZLsMmQFP32EnukRdS9A99WZvGbhe4qRmwvIud%2FvPuDXNOfck%2FQMHChquMLN0GJmA5fKEfj5GfFNKozpkJn0%2FmBBv%2BH%2F6ui1yRcyrSioTP7B6aIqOQeWifqesUHwM9CgxU6KVmnmcxPR8P2oj6BBjY2Noc2%2BMNeJ8Y7TY8iYwv8LBIj32On3xaid0UooGbFjPdSSJUAFjnmbfRz4xpyZQMC6EEomwDasEzOHtsqHUvpgN3d08NWb8BsJ98uRBeDIbiR%2BLExtbMT6mTuiIodNjmti5wqP6pN9sA5I14pBqtreKoRE0z2qVsTD4hYXQBjqkAWmKlzVNN%2FNINI%2FV9QvCmAPAnxnOQCMrPtg6%2Bn5p5wz8eb4qLSKIPm2zOYnUC2rSqhx6Fuj7JQHNOJcO6jCf1lIgANai5J5UmIqE%2B6FAnhzW9%2BTrac5bCE3L52NsIiO%2BcNUujBXaOkJeJ0Xtm2f0bRNc8FBhVtyKOQpen7rUeXVlpizlWs4tQ%2FWG9%2FgaRVj%2FXPTnJw5%2BLt1pyRm15jw4mipyLVP5&X-Amz-Signature=0a30cfce9fda7ee8658911620addfbb2952db46eac0a75c49a0d459737ec9caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIEKP4Q%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCXlcu336vNfblkyel4qAnHKKnWc%2BcJHsMD8SbuQHeOnQIhAIL8c1gvpPUzbP%2BfrPnwtVB2asllLtTcMVWPzAlGgs%2BpKv8DCAwQABoMNjM3NDIzMTgzODA1IgzbGoutSNU9bADjnGIq3APA%2BRUgjkZjzYw3m4ktMOMvon5MwuRxTDqCEdTw3sqmolXbvp2vWDnZJY7DiNjQW%2B1DuAoZaAFjDslycHAuXG8%2B4Q5NZTvQhhwOJNm0vlwTiH4WaqosW6p1JxD3iSdHMBx4Qbpe2S%2FghcehsQKtqSCv7SlOuHYd9ejfS55qIZN74m%2FCV8fgQ5R2zxEF1yQxeClmMomHY9vgW1s0mU9GZgAPJw9gmspalnb5h7MEX%2BlyTTgkq7Srs%2FCbCRIizjwM0ivs4U5f6Wr92TrV0lghW9G4b1EuCLYfY19Jy93A4Sv%2F%2F7JoZTYdWKoXWJ6T6Wl2NGavf0xHZLsMmQFP32EnukRdS9A99WZvGbhe4qRmwvIud%2FvPuDXNOfck%2FQMHChquMLN0GJmA5fKEfj5GfFNKozpkJn0%2FmBBv%2BH%2F6ui1yRcyrSioTP7B6aIqOQeWifqesUHwM9CgxU6KVmnmcxPR8P2oj6BBjY2Noc2%2BMNeJ8Y7TY8iYwv8LBIj32On3xaid0UooGbFjPdSSJUAFjnmbfRz4xpyZQMC6EEomwDasEzOHtsqHUvpgN3d08NWb8BsJ98uRBeDIbiR%2BLExtbMT6mTuiIodNjmti5wqP6pN9sA5I14pBqtreKoRE0z2qVsTD4hYXQBjqkAWmKlzVNN%2FNINI%2FV9QvCmAPAnxnOQCMrPtg6%2Bn5p5wz8eb4qLSKIPm2zOYnUC2rSqhx6Fuj7JQHNOJcO6jCf1lIgANai5J5UmIqE%2B6FAnhzW9%2BTrac5bCE3L52NsIiO%2BcNUujBXaOkJeJ0Xtm2f0bRNc8FBhVtyKOQpen7rUeXVlpizlWs4tQ%2FWG9%2FgaRVj%2FXPTnJw5%2BLt1pyRm15jw4mipyLVP5&X-Amz-Signature=ff5624d5ee4b020d57129963bda948749358b7845c18484c826dbd0180e8a12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIEKP4Q%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCXlcu336vNfblkyel4qAnHKKnWc%2BcJHsMD8SbuQHeOnQIhAIL8c1gvpPUzbP%2BfrPnwtVB2asllLtTcMVWPzAlGgs%2BpKv8DCAwQABoMNjM3NDIzMTgzODA1IgzbGoutSNU9bADjnGIq3APA%2BRUgjkZjzYw3m4ktMOMvon5MwuRxTDqCEdTw3sqmolXbvp2vWDnZJY7DiNjQW%2B1DuAoZaAFjDslycHAuXG8%2B4Q5NZTvQhhwOJNm0vlwTiH4WaqosW6p1JxD3iSdHMBx4Qbpe2S%2FghcehsQKtqSCv7SlOuHYd9ejfS55qIZN74m%2FCV8fgQ5R2zxEF1yQxeClmMomHY9vgW1s0mU9GZgAPJw9gmspalnb5h7MEX%2BlyTTgkq7Srs%2FCbCRIizjwM0ivs4U5f6Wr92TrV0lghW9G4b1EuCLYfY19Jy93A4Sv%2F%2F7JoZTYdWKoXWJ6T6Wl2NGavf0xHZLsMmQFP32EnukRdS9A99WZvGbhe4qRmwvIud%2FvPuDXNOfck%2FQMHChquMLN0GJmA5fKEfj5GfFNKozpkJn0%2FmBBv%2BH%2F6ui1yRcyrSioTP7B6aIqOQeWifqesUHwM9CgxU6KVmnmcxPR8P2oj6BBjY2Noc2%2BMNeJ8Y7TY8iYwv8LBIj32On3xaid0UooGbFjPdSSJUAFjnmbfRz4xpyZQMC6EEomwDasEzOHtsqHUvpgN3d08NWb8BsJ98uRBeDIbiR%2BLExtbMT6mTuiIodNjmti5wqP6pN9sA5I14pBqtreKoRE0z2qVsTD4hYXQBjqkAWmKlzVNN%2FNINI%2FV9QvCmAPAnxnOQCMrPtg6%2Bn5p5wz8eb4qLSKIPm2zOYnUC2rSqhx6Fuj7JQHNOJcO6jCf1lIgANai5J5UmIqE%2B6FAnhzW9%2BTrac5bCE3L52NsIiO%2BcNUujBXaOkJeJ0Xtm2f0bRNc8FBhVtyKOQpen7rUeXVlpizlWs4tQ%2FWG9%2FgaRVj%2FXPTnJw5%2BLt1pyRm15jw4mipyLVP5&X-Amz-Signature=0f1e999246cafa984db462f3aaf087e44816e97078c235fefa1fec369a8f3e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIEKP4Q%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCXlcu336vNfblkyel4qAnHKKnWc%2BcJHsMD8SbuQHeOnQIhAIL8c1gvpPUzbP%2BfrPnwtVB2asllLtTcMVWPzAlGgs%2BpKv8DCAwQABoMNjM3NDIzMTgzODA1IgzbGoutSNU9bADjnGIq3APA%2BRUgjkZjzYw3m4ktMOMvon5MwuRxTDqCEdTw3sqmolXbvp2vWDnZJY7DiNjQW%2B1DuAoZaAFjDslycHAuXG8%2B4Q5NZTvQhhwOJNm0vlwTiH4WaqosW6p1JxD3iSdHMBx4Qbpe2S%2FghcehsQKtqSCv7SlOuHYd9ejfS55qIZN74m%2FCV8fgQ5R2zxEF1yQxeClmMomHY9vgW1s0mU9GZgAPJw9gmspalnb5h7MEX%2BlyTTgkq7Srs%2FCbCRIizjwM0ivs4U5f6Wr92TrV0lghW9G4b1EuCLYfY19Jy93A4Sv%2F%2F7JoZTYdWKoXWJ6T6Wl2NGavf0xHZLsMmQFP32EnukRdS9A99WZvGbhe4qRmwvIud%2FvPuDXNOfck%2FQMHChquMLN0GJmA5fKEfj5GfFNKozpkJn0%2FmBBv%2BH%2F6ui1yRcyrSioTP7B6aIqOQeWifqesUHwM9CgxU6KVmnmcxPR8P2oj6BBjY2Noc2%2BMNeJ8Y7TY8iYwv8LBIj32On3xaid0UooGbFjPdSSJUAFjnmbfRz4xpyZQMC6EEomwDasEzOHtsqHUvpgN3d08NWb8BsJ98uRBeDIbiR%2BLExtbMT6mTuiIodNjmti5wqP6pN9sA5I14pBqtreKoRE0z2qVsTD4hYXQBjqkAWmKlzVNN%2FNINI%2FV9QvCmAPAnxnOQCMrPtg6%2Bn5p5wz8eb4qLSKIPm2zOYnUC2rSqhx6Fuj7JQHNOJcO6jCf1lIgANai5J5UmIqE%2B6FAnhzW9%2BTrac5bCE3L52NsIiO%2BcNUujBXaOkJeJ0Xtm2f0bRNc8FBhVtyKOQpen7rUeXVlpizlWs4tQ%2FWG9%2FgaRVj%2FXPTnJw5%2BLt1pyRm15jw4mipyLVP5&X-Amz-Signature=d28e8bc9ffc8b5e980647bb0bd6c5c19b38a1bdf44ab07214efc3ddba6885054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIEKP4Q%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCXlcu336vNfblkyel4qAnHKKnWc%2BcJHsMD8SbuQHeOnQIhAIL8c1gvpPUzbP%2BfrPnwtVB2asllLtTcMVWPzAlGgs%2BpKv8DCAwQABoMNjM3NDIzMTgzODA1IgzbGoutSNU9bADjnGIq3APA%2BRUgjkZjzYw3m4ktMOMvon5MwuRxTDqCEdTw3sqmolXbvp2vWDnZJY7DiNjQW%2B1DuAoZaAFjDslycHAuXG8%2B4Q5NZTvQhhwOJNm0vlwTiH4WaqosW6p1JxD3iSdHMBx4Qbpe2S%2FghcehsQKtqSCv7SlOuHYd9ejfS55qIZN74m%2FCV8fgQ5R2zxEF1yQxeClmMomHY9vgW1s0mU9GZgAPJw9gmspalnb5h7MEX%2BlyTTgkq7Srs%2FCbCRIizjwM0ivs4U5f6Wr92TrV0lghW9G4b1EuCLYfY19Jy93A4Sv%2F%2F7JoZTYdWKoXWJ6T6Wl2NGavf0xHZLsMmQFP32EnukRdS9A99WZvGbhe4qRmwvIud%2FvPuDXNOfck%2FQMHChquMLN0GJmA5fKEfj5GfFNKozpkJn0%2FmBBv%2BH%2F6ui1yRcyrSioTP7B6aIqOQeWifqesUHwM9CgxU6KVmnmcxPR8P2oj6BBjY2Noc2%2BMNeJ8Y7TY8iYwv8LBIj32On3xaid0UooGbFjPdSSJUAFjnmbfRz4xpyZQMC6EEomwDasEzOHtsqHUvpgN3d08NWb8BsJ98uRBeDIbiR%2BLExtbMT6mTuiIodNjmti5wqP6pN9sA5I14pBqtreKoRE0z2qVsTD4hYXQBjqkAWmKlzVNN%2FNINI%2FV9QvCmAPAnxnOQCMrPtg6%2Bn5p5wz8eb4qLSKIPm2zOYnUC2rSqhx6Fuj7JQHNOJcO6jCf1lIgANai5J5UmIqE%2B6FAnhzW9%2BTrac5bCE3L52NsIiO%2BcNUujBXaOkJeJ0Xtm2f0bRNc8FBhVtyKOQpen7rUeXVlpizlWs4tQ%2FWG9%2FgaRVj%2FXPTnJw5%2BLt1pyRm15jw4mipyLVP5&X-Amz-Signature=1bb13f7717bf67c01ef3269db3d9e13e109533cd3b3dcea75c5af29fcc6cb4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIEKP4Q%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCXlcu336vNfblkyel4qAnHKKnWc%2BcJHsMD8SbuQHeOnQIhAIL8c1gvpPUzbP%2BfrPnwtVB2asllLtTcMVWPzAlGgs%2BpKv8DCAwQABoMNjM3NDIzMTgzODA1IgzbGoutSNU9bADjnGIq3APA%2BRUgjkZjzYw3m4ktMOMvon5MwuRxTDqCEdTw3sqmolXbvp2vWDnZJY7DiNjQW%2B1DuAoZaAFjDslycHAuXG8%2B4Q5NZTvQhhwOJNm0vlwTiH4WaqosW6p1JxD3iSdHMBx4Qbpe2S%2FghcehsQKtqSCv7SlOuHYd9ejfS55qIZN74m%2FCV8fgQ5R2zxEF1yQxeClmMomHY9vgW1s0mU9GZgAPJw9gmspalnb5h7MEX%2BlyTTgkq7Srs%2FCbCRIizjwM0ivs4U5f6Wr92TrV0lghW9G4b1EuCLYfY19Jy93A4Sv%2F%2F7JoZTYdWKoXWJ6T6Wl2NGavf0xHZLsMmQFP32EnukRdS9A99WZvGbhe4qRmwvIud%2FvPuDXNOfck%2FQMHChquMLN0GJmA5fKEfj5GfFNKozpkJn0%2FmBBv%2BH%2F6ui1yRcyrSioTP7B6aIqOQeWifqesUHwM9CgxU6KVmnmcxPR8P2oj6BBjY2Noc2%2BMNeJ8Y7TY8iYwv8LBIj32On3xaid0UooGbFjPdSSJUAFjnmbfRz4xpyZQMC6EEomwDasEzOHtsqHUvpgN3d08NWb8BsJ98uRBeDIbiR%2BLExtbMT6mTuiIodNjmti5wqP6pN9sA5I14pBqtreKoRE0z2qVsTD4hYXQBjqkAWmKlzVNN%2FNINI%2FV9QvCmAPAnxnOQCMrPtg6%2Bn5p5wz8eb4qLSKIPm2zOYnUC2rSqhx6Fuj7JQHNOJcO6jCf1lIgANai5J5UmIqE%2B6FAnhzW9%2BTrac5bCE3L52NsIiO%2BcNUujBXaOkJeJ0Xtm2f0bRNc8FBhVtyKOQpen7rUeXVlpizlWs4tQ%2FWG9%2FgaRVj%2FXPTnJw5%2BLt1pyRm15jw4mipyLVP5&X-Amz-Signature=4810e628f4dd830dbc04f304901d3517a7b5f2a7ddcc94ff00a990617092f8ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIEKP4Q%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCXlcu336vNfblkyel4qAnHKKnWc%2BcJHsMD8SbuQHeOnQIhAIL8c1gvpPUzbP%2BfrPnwtVB2asllLtTcMVWPzAlGgs%2BpKv8DCAwQABoMNjM3NDIzMTgzODA1IgzbGoutSNU9bADjnGIq3APA%2BRUgjkZjzYw3m4ktMOMvon5MwuRxTDqCEdTw3sqmolXbvp2vWDnZJY7DiNjQW%2B1DuAoZaAFjDslycHAuXG8%2B4Q5NZTvQhhwOJNm0vlwTiH4WaqosW6p1JxD3iSdHMBx4Qbpe2S%2FghcehsQKtqSCv7SlOuHYd9ejfS55qIZN74m%2FCV8fgQ5R2zxEF1yQxeClmMomHY9vgW1s0mU9GZgAPJw9gmspalnb5h7MEX%2BlyTTgkq7Srs%2FCbCRIizjwM0ivs4U5f6Wr92TrV0lghW9G4b1EuCLYfY19Jy93A4Sv%2F%2F7JoZTYdWKoXWJ6T6Wl2NGavf0xHZLsMmQFP32EnukRdS9A99WZvGbhe4qRmwvIud%2FvPuDXNOfck%2FQMHChquMLN0GJmA5fKEfj5GfFNKozpkJn0%2FmBBv%2BH%2F6ui1yRcyrSioTP7B6aIqOQeWifqesUHwM9CgxU6KVmnmcxPR8P2oj6BBjY2Noc2%2BMNeJ8Y7TY8iYwv8LBIj32On3xaid0UooGbFjPdSSJUAFjnmbfRz4xpyZQMC6EEomwDasEzOHtsqHUvpgN3d08NWb8BsJ98uRBeDIbiR%2BLExtbMT6mTuiIodNjmti5wqP6pN9sA5I14pBqtreKoRE0z2qVsTD4hYXQBjqkAWmKlzVNN%2FNINI%2FV9QvCmAPAnxnOQCMrPtg6%2Bn5p5wz8eb4qLSKIPm2zOYnUC2rSqhx6Fuj7JQHNOJcO6jCf1lIgANai5J5UmIqE%2B6FAnhzW9%2BTrac5bCE3L52NsIiO%2BcNUujBXaOkJeJ0Xtm2f0bRNc8FBhVtyKOQpen7rUeXVlpizlWs4tQ%2FWG9%2FgaRVj%2FXPTnJw5%2BLt1pyRm15jw4mipyLVP5&X-Amz-Signature=236e0fd4981ab521c486f26a0a79e9fb96b46eb3eccf8342ba105e5d7ee3148a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
