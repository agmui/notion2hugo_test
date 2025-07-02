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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=36541575258db84c07c7e08492ec125c9c276ceac8e1129b9b9ea1c27d10fd82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=baa7165baafd9de28253796b94663eca66996d7c8758fb52f345069fc055be36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=cc8da8e80a461a062e05d1a913991679013e8c1188e88423fc4670a151d4c417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=f991eff5b2c6a9dbcdc15f582e865e43b9627baca919fc9f257e6dda9d88bfba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=d33b8ff2afe2bd57a372b9c2e3da5a1f2d847eb53a8f5153b8afd51566b4bb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=d610ae179238c8c87e8b12e1e0e28f8ecb8a53f61ee67cd76fe1be49c87c3c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=50f71a22782502d367a8a8f8b40032dccb61fd4d6b676093ceb966dc6de712d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=37f99d7d506402b4e0a44b5e1e0c5ae4e1536a0a8a29fb931ebeafb433b29f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
