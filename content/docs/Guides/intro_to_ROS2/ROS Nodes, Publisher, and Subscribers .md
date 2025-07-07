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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKDWKES%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBzl1MHw5A7vWkDUfLbLVFh0uSIzFB%2Fs%2FoqV3N3oijYjAiAQkDd1zI8YdQ22x0NOxG4PXi2yG8GL89FX4FPaSMPcqyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdZEqOj0GeGex%2FAn4KtwDKdbgdGgVD%2F7gEJjVuOxLuLImhkMWqeziA82%2F1Bxy6fpRSq4psyCMIpStNjTMXiauNUKCZO374jXCazcHjEyBAb0pU2fEVqor8kuhpQEljQ3avcpIT5rNsbRenM7Gy8AbeDKyrp05zsiAmIJw0yvAu8QqIN41vx9bSdNm8cf33bTJtnNUCdargVdH0k6shXKSjMT8Y%2F3rIoMN9wouop5R%2BzyXk24a4OP4syGrTvHsgpLyG8N6joIX6paqRb5u24PYqboqjC8Pn4o75YEySftKLmsa28lNodDLGWmC09eY5dW6T1XGcBn%2B9AIo77LQeoBtkwTFcNBYy3l4SMZQAEkSQgPlySnpJarokFCgTDtV2NRDMjg9IEUdez6juUAq9PaemxerRG1Y0JaeUSug%2BwAfhg71M%2Ftmbg%2BfD25sj1dp5XP7TQKICFmL%2FNelWXvDl4biVG%2FamDkQm43dLn99T2CbA0sRqUFgmazLB1ispCBowftE9aiTk%2FVQNw6od3MD%2BwjFEL1QLZGtfvbJ7lzGMpxwTk60B0fsr67VpxS2KJ1XBKOCLkqI%2Fx3mjkwkr3KpLWiPU75cReeo5sBnbxX4EQEukPhf%2F4Jy71tP4mlE%2Be%2FYdTYmBM1WIY7hB%2B%2FBNtYwz%2BiwwwY6pgF77pS0zktwM6sp3CCbgk4fU6H6Yb8a7FOoNbzk6PaJu24zY%2B8cFH9egeAdF46y6pNo3WCQjX83plMn49oFncPshLInUvNUXF14IGJRF2bgOrS3my6cMzS%2BRV2PmeUpPpjq8nBFsf0sO6k9zcBk54PI6AkLx4yuE3c0qJ%2BI9%2FGQJYdrkokSogH2F4MlD9%2FrbMQrg9tjW0SJf6xEC4D9ls%2FsCDFbotTk&X-Amz-Signature=8063a9c12ea127c4006fd49de0c06714da2c0c3bcb47b2eb0d412f04c7c770f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKDWKES%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBzl1MHw5A7vWkDUfLbLVFh0uSIzFB%2Fs%2FoqV3N3oijYjAiAQkDd1zI8YdQ22x0NOxG4PXi2yG8GL89FX4FPaSMPcqyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdZEqOj0GeGex%2FAn4KtwDKdbgdGgVD%2F7gEJjVuOxLuLImhkMWqeziA82%2F1Bxy6fpRSq4psyCMIpStNjTMXiauNUKCZO374jXCazcHjEyBAb0pU2fEVqor8kuhpQEljQ3avcpIT5rNsbRenM7Gy8AbeDKyrp05zsiAmIJw0yvAu8QqIN41vx9bSdNm8cf33bTJtnNUCdargVdH0k6shXKSjMT8Y%2F3rIoMN9wouop5R%2BzyXk24a4OP4syGrTvHsgpLyG8N6joIX6paqRb5u24PYqboqjC8Pn4o75YEySftKLmsa28lNodDLGWmC09eY5dW6T1XGcBn%2B9AIo77LQeoBtkwTFcNBYy3l4SMZQAEkSQgPlySnpJarokFCgTDtV2NRDMjg9IEUdez6juUAq9PaemxerRG1Y0JaeUSug%2BwAfhg71M%2Ftmbg%2BfD25sj1dp5XP7TQKICFmL%2FNelWXvDl4biVG%2FamDkQm43dLn99T2CbA0sRqUFgmazLB1ispCBowftE9aiTk%2FVQNw6od3MD%2BwjFEL1QLZGtfvbJ7lzGMpxwTk60B0fsr67VpxS2KJ1XBKOCLkqI%2Fx3mjkwkr3KpLWiPU75cReeo5sBnbxX4EQEukPhf%2F4Jy71tP4mlE%2Be%2FYdTYmBM1WIY7hB%2B%2FBNtYwz%2BiwwwY6pgF77pS0zktwM6sp3CCbgk4fU6H6Yb8a7FOoNbzk6PaJu24zY%2B8cFH9egeAdF46y6pNo3WCQjX83plMn49oFncPshLInUvNUXF14IGJRF2bgOrS3my6cMzS%2BRV2PmeUpPpjq8nBFsf0sO6k9zcBk54PI6AkLx4yuE3c0qJ%2BI9%2FGQJYdrkokSogH2F4MlD9%2FrbMQrg9tjW0SJf6xEC4D9ls%2FsCDFbotTk&X-Amz-Signature=1de450af85d6140d4734cc06a1f4ede2e86ad50669c9df117ada11d38492da3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKDWKES%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBzl1MHw5A7vWkDUfLbLVFh0uSIzFB%2Fs%2FoqV3N3oijYjAiAQkDd1zI8YdQ22x0NOxG4PXi2yG8GL89FX4FPaSMPcqyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdZEqOj0GeGex%2FAn4KtwDKdbgdGgVD%2F7gEJjVuOxLuLImhkMWqeziA82%2F1Bxy6fpRSq4psyCMIpStNjTMXiauNUKCZO374jXCazcHjEyBAb0pU2fEVqor8kuhpQEljQ3avcpIT5rNsbRenM7Gy8AbeDKyrp05zsiAmIJw0yvAu8QqIN41vx9bSdNm8cf33bTJtnNUCdargVdH0k6shXKSjMT8Y%2F3rIoMN9wouop5R%2BzyXk24a4OP4syGrTvHsgpLyG8N6joIX6paqRb5u24PYqboqjC8Pn4o75YEySftKLmsa28lNodDLGWmC09eY5dW6T1XGcBn%2B9AIo77LQeoBtkwTFcNBYy3l4SMZQAEkSQgPlySnpJarokFCgTDtV2NRDMjg9IEUdez6juUAq9PaemxerRG1Y0JaeUSug%2BwAfhg71M%2Ftmbg%2BfD25sj1dp5XP7TQKICFmL%2FNelWXvDl4biVG%2FamDkQm43dLn99T2CbA0sRqUFgmazLB1ispCBowftE9aiTk%2FVQNw6od3MD%2BwjFEL1QLZGtfvbJ7lzGMpxwTk60B0fsr67VpxS2KJ1XBKOCLkqI%2Fx3mjkwkr3KpLWiPU75cReeo5sBnbxX4EQEukPhf%2F4Jy71tP4mlE%2Be%2FYdTYmBM1WIY7hB%2B%2FBNtYwz%2BiwwwY6pgF77pS0zktwM6sp3CCbgk4fU6H6Yb8a7FOoNbzk6PaJu24zY%2B8cFH9egeAdF46y6pNo3WCQjX83plMn49oFncPshLInUvNUXF14IGJRF2bgOrS3my6cMzS%2BRV2PmeUpPpjq8nBFsf0sO6k9zcBk54PI6AkLx4yuE3c0qJ%2BI9%2FGQJYdrkokSogH2F4MlD9%2FrbMQrg9tjW0SJf6xEC4D9ls%2FsCDFbotTk&X-Amz-Signature=1c319c36b68201493729f611a60eec595e7cedea9d985fef72a44dd73c7a83dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKDWKES%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBzl1MHw5A7vWkDUfLbLVFh0uSIzFB%2Fs%2FoqV3N3oijYjAiAQkDd1zI8YdQ22x0NOxG4PXi2yG8GL89FX4FPaSMPcqyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdZEqOj0GeGex%2FAn4KtwDKdbgdGgVD%2F7gEJjVuOxLuLImhkMWqeziA82%2F1Bxy6fpRSq4psyCMIpStNjTMXiauNUKCZO374jXCazcHjEyBAb0pU2fEVqor8kuhpQEljQ3avcpIT5rNsbRenM7Gy8AbeDKyrp05zsiAmIJw0yvAu8QqIN41vx9bSdNm8cf33bTJtnNUCdargVdH0k6shXKSjMT8Y%2F3rIoMN9wouop5R%2BzyXk24a4OP4syGrTvHsgpLyG8N6joIX6paqRb5u24PYqboqjC8Pn4o75YEySftKLmsa28lNodDLGWmC09eY5dW6T1XGcBn%2B9AIo77LQeoBtkwTFcNBYy3l4SMZQAEkSQgPlySnpJarokFCgTDtV2NRDMjg9IEUdez6juUAq9PaemxerRG1Y0JaeUSug%2BwAfhg71M%2Ftmbg%2BfD25sj1dp5XP7TQKICFmL%2FNelWXvDl4biVG%2FamDkQm43dLn99T2CbA0sRqUFgmazLB1ispCBowftE9aiTk%2FVQNw6od3MD%2BwjFEL1QLZGtfvbJ7lzGMpxwTk60B0fsr67VpxS2KJ1XBKOCLkqI%2Fx3mjkwkr3KpLWiPU75cReeo5sBnbxX4EQEukPhf%2F4Jy71tP4mlE%2Be%2FYdTYmBM1WIY7hB%2B%2FBNtYwz%2BiwwwY6pgF77pS0zktwM6sp3CCbgk4fU6H6Yb8a7FOoNbzk6PaJu24zY%2B8cFH9egeAdF46y6pNo3WCQjX83plMn49oFncPshLInUvNUXF14IGJRF2bgOrS3my6cMzS%2BRV2PmeUpPpjq8nBFsf0sO6k9zcBk54PI6AkLx4yuE3c0qJ%2BI9%2FGQJYdrkokSogH2F4MlD9%2FrbMQrg9tjW0SJf6xEC4D9ls%2FsCDFbotTk&X-Amz-Signature=5a6e76cebed1824f12bd71b29dcb2920a8fdf851170dca45fa84bb35951818cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKDWKES%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBzl1MHw5A7vWkDUfLbLVFh0uSIzFB%2Fs%2FoqV3N3oijYjAiAQkDd1zI8YdQ22x0NOxG4PXi2yG8GL89FX4FPaSMPcqyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdZEqOj0GeGex%2FAn4KtwDKdbgdGgVD%2F7gEJjVuOxLuLImhkMWqeziA82%2F1Bxy6fpRSq4psyCMIpStNjTMXiauNUKCZO374jXCazcHjEyBAb0pU2fEVqor8kuhpQEljQ3avcpIT5rNsbRenM7Gy8AbeDKyrp05zsiAmIJw0yvAu8QqIN41vx9bSdNm8cf33bTJtnNUCdargVdH0k6shXKSjMT8Y%2F3rIoMN9wouop5R%2BzyXk24a4OP4syGrTvHsgpLyG8N6joIX6paqRb5u24PYqboqjC8Pn4o75YEySftKLmsa28lNodDLGWmC09eY5dW6T1XGcBn%2B9AIo77LQeoBtkwTFcNBYy3l4SMZQAEkSQgPlySnpJarokFCgTDtV2NRDMjg9IEUdez6juUAq9PaemxerRG1Y0JaeUSug%2BwAfhg71M%2Ftmbg%2BfD25sj1dp5XP7TQKICFmL%2FNelWXvDl4biVG%2FamDkQm43dLn99T2CbA0sRqUFgmazLB1ispCBowftE9aiTk%2FVQNw6od3MD%2BwjFEL1QLZGtfvbJ7lzGMpxwTk60B0fsr67VpxS2KJ1XBKOCLkqI%2Fx3mjkwkr3KpLWiPU75cReeo5sBnbxX4EQEukPhf%2F4Jy71tP4mlE%2Be%2FYdTYmBM1WIY7hB%2B%2FBNtYwz%2BiwwwY6pgF77pS0zktwM6sp3CCbgk4fU6H6Yb8a7FOoNbzk6PaJu24zY%2B8cFH9egeAdF46y6pNo3WCQjX83plMn49oFncPshLInUvNUXF14IGJRF2bgOrS3my6cMzS%2BRV2PmeUpPpjq8nBFsf0sO6k9zcBk54PI6AkLx4yuE3c0qJ%2BI9%2FGQJYdrkokSogH2F4MlD9%2FrbMQrg9tjW0SJf6xEC4D9ls%2FsCDFbotTk&X-Amz-Signature=063fccdfe0ff508c899ef488c02149c5cb259ec989cb7763f36178b6c4f64758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKDWKES%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBzl1MHw5A7vWkDUfLbLVFh0uSIzFB%2Fs%2FoqV3N3oijYjAiAQkDd1zI8YdQ22x0NOxG4PXi2yG8GL89FX4FPaSMPcqyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdZEqOj0GeGex%2FAn4KtwDKdbgdGgVD%2F7gEJjVuOxLuLImhkMWqeziA82%2F1Bxy6fpRSq4psyCMIpStNjTMXiauNUKCZO374jXCazcHjEyBAb0pU2fEVqor8kuhpQEljQ3avcpIT5rNsbRenM7Gy8AbeDKyrp05zsiAmIJw0yvAu8QqIN41vx9bSdNm8cf33bTJtnNUCdargVdH0k6shXKSjMT8Y%2F3rIoMN9wouop5R%2BzyXk24a4OP4syGrTvHsgpLyG8N6joIX6paqRb5u24PYqboqjC8Pn4o75YEySftKLmsa28lNodDLGWmC09eY5dW6T1XGcBn%2B9AIo77LQeoBtkwTFcNBYy3l4SMZQAEkSQgPlySnpJarokFCgTDtV2NRDMjg9IEUdez6juUAq9PaemxerRG1Y0JaeUSug%2BwAfhg71M%2Ftmbg%2BfD25sj1dp5XP7TQKICFmL%2FNelWXvDl4biVG%2FamDkQm43dLn99T2CbA0sRqUFgmazLB1ispCBowftE9aiTk%2FVQNw6od3MD%2BwjFEL1QLZGtfvbJ7lzGMpxwTk60B0fsr67VpxS2KJ1XBKOCLkqI%2Fx3mjkwkr3KpLWiPU75cReeo5sBnbxX4EQEukPhf%2F4Jy71tP4mlE%2Be%2FYdTYmBM1WIY7hB%2B%2FBNtYwz%2BiwwwY6pgF77pS0zktwM6sp3CCbgk4fU6H6Yb8a7FOoNbzk6PaJu24zY%2B8cFH9egeAdF46y6pNo3WCQjX83plMn49oFncPshLInUvNUXF14IGJRF2bgOrS3my6cMzS%2BRV2PmeUpPpjq8nBFsf0sO6k9zcBk54PI6AkLx4yuE3c0qJ%2BI9%2FGQJYdrkokSogH2F4MlD9%2FrbMQrg9tjW0SJf6xEC4D9ls%2FsCDFbotTk&X-Amz-Signature=31becae5e6e51646c9c560bc2304661c464254650be69b0b5167c00587a37476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKDWKES%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBzl1MHw5A7vWkDUfLbLVFh0uSIzFB%2Fs%2FoqV3N3oijYjAiAQkDd1zI8YdQ22x0NOxG4PXi2yG8GL89FX4FPaSMPcqyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdZEqOj0GeGex%2FAn4KtwDKdbgdGgVD%2F7gEJjVuOxLuLImhkMWqeziA82%2F1Bxy6fpRSq4psyCMIpStNjTMXiauNUKCZO374jXCazcHjEyBAb0pU2fEVqor8kuhpQEljQ3avcpIT5rNsbRenM7Gy8AbeDKyrp05zsiAmIJw0yvAu8QqIN41vx9bSdNm8cf33bTJtnNUCdargVdH0k6shXKSjMT8Y%2F3rIoMN9wouop5R%2BzyXk24a4OP4syGrTvHsgpLyG8N6joIX6paqRb5u24PYqboqjC8Pn4o75YEySftKLmsa28lNodDLGWmC09eY5dW6T1XGcBn%2B9AIo77LQeoBtkwTFcNBYy3l4SMZQAEkSQgPlySnpJarokFCgTDtV2NRDMjg9IEUdez6juUAq9PaemxerRG1Y0JaeUSug%2BwAfhg71M%2Ftmbg%2BfD25sj1dp5XP7TQKICFmL%2FNelWXvDl4biVG%2FamDkQm43dLn99T2CbA0sRqUFgmazLB1ispCBowftE9aiTk%2FVQNw6od3MD%2BwjFEL1QLZGtfvbJ7lzGMpxwTk60B0fsr67VpxS2KJ1XBKOCLkqI%2Fx3mjkwkr3KpLWiPU75cReeo5sBnbxX4EQEukPhf%2F4Jy71tP4mlE%2Be%2FYdTYmBM1WIY7hB%2B%2FBNtYwz%2BiwwwY6pgF77pS0zktwM6sp3CCbgk4fU6H6Yb8a7FOoNbzk6PaJu24zY%2B8cFH9egeAdF46y6pNo3WCQjX83plMn49oFncPshLInUvNUXF14IGJRF2bgOrS3my6cMzS%2BRV2PmeUpPpjq8nBFsf0sO6k9zcBk54PI6AkLx4yuE3c0qJ%2BI9%2FGQJYdrkokSogH2F4MlD9%2FrbMQrg9tjW0SJf6xEC4D9ls%2FsCDFbotTk&X-Amz-Signature=238076cf2b6419c8bb576df836a8baf161e18b0a4337b7b9ede201f711e5f3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKDWKES%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBzl1MHw5A7vWkDUfLbLVFh0uSIzFB%2Fs%2FoqV3N3oijYjAiAQkDd1zI8YdQ22x0NOxG4PXi2yG8GL89FX4FPaSMPcqyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdZEqOj0GeGex%2FAn4KtwDKdbgdGgVD%2F7gEJjVuOxLuLImhkMWqeziA82%2F1Bxy6fpRSq4psyCMIpStNjTMXiauNUKCZO374jXCazcHjEyBAb0pU2fEVqor8kuhpQEljQ3avcpIT5rNsbRenM7Gy8AbeDKyrp05zsiAmIJw0yvAu8QqIN41vx9bSdNm8cf33bTJtnNUCdargVdH0k6shXKSjMT8Y%2F3rIoMN9wouop5R%2BzyXk24a4OP4syGrTvHsgpLyG8N6joIX6paqRb5u24PYqboqjC8Pn4o75YEySftKLmsa28lNodDLGWmC09eY5dW6T1XGcBn%2B9AIo77LQeoBtkwTFcNBYy3l4SMZQAEkSQgPlySnpJarokFCgTDtV2NRDMjg9IEUdez6juUAq9PaemxerRG1Y0JaeUSug%2BwAfhg71M%2Ftmbg%2BfD25sj1dp5XP7TQKICFmL%2FNelWXvDl4biVG%2FamDkQm43dLn99T2CbA0sRqUFgmazLB1ispCBowftE9aiTk%2FVQNw6od3MD%2BwjFEL1QLZGtfvbJ7lzGMpxwTk60B0fsr67VpxS2KJ1XBKOCLkqI%2Fx3mjkwkr3KpLWiPU75cReeo5sBnbxX4EQEukPhf%2F4Jy71tP4mlE%2Be%2FYdTYmBM1WIY7hB%2B%2FBNtYwz%2BiwwwY6pgF77pS0zktwM6sp3CCbgk4fU6H6Yb8a7FOoNbzk6PaJu24zY%2B8cFH9egeAdF46y6pNo3WCQjX83plMn49oFncPshLInUvNUXF14IGJRF2bgOrS3my6cMzS%2BRV2PmeUpPpjq8nBFsf0sO6k9zcBk54PI6AkLx4yuE3c0qJ%2BI9%2FGQJYdrkokSogH2F4MlD9%2FrbMQrg9tjW0SJf6xEC4D9ls%2FsCDFbotTk&X-Amz-Signature=ce61ef92f94508e6762e8854ea6550973be28eba0b18087471b9d837a6b33644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
