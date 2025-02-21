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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ2CPV3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcujJaFpuCUGr%2F7SYMFMRRXmtwYHR7F8hu2xI51vuGkAiEAzSq9PLwFfZtgI9ct7SpzmeqM3B7iHdxVwvUgpicxiM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1w2w685SkqQsY5NyrcA7cg%2FcOwwLnLG8%2FxkssgYV6HxAjhzDrTRYeB9Yrppxvb3pe7V0L4gAbZKE8fDhLrrDREvQOlTdcqMTMldCV8On7EREOQLmvn2DB2Lx0Srkpys20nrvuPpsoCijzS2ZgUTxLil7nfIdFQ77mmeLt%2FQ2MU%2Bmw4AsE7zbuUfySuzrt0a1HbyNJPTKntF8e%2FLnSucYWQ0nDKRUQ6AVjfCvgZVyjytqlJxpRXXswEXqmCQOCFXfGo%2BgjdYi%2FpjQ8MFh2tHlaL1HGrvK3ppMqvL8XUedKbuFawNFUjDL0BhNAK7i16KTQOV7FERbdi%2FlWX4vquMbYCWrEMSDUb1OTZMwbRFxGizViT6T6Rora8HSVEVIzMKwuZV%2FpK0KaZwAUWRcs%2F%2Blh1Wv2YCZKzIyxZT2lgDqdFABMXa2sLVdHy1s5hzfUqn0jV7Tp240XNN7Ql585CGxpW200HUy4MBHUflo1Hfd%2BZfkXC7SJclpt2xe%2FuCh3nBkztSFzbvdhll8VSF3QCecTFhSN1j1hoFSUP8vI%2F6w9RSksyiYj%2BNKUemgMgG2lbVn4hm%2FS0G4rOpZNIO64TVBryGl1TIvhz2j7zwOP5M7GB6Ck5fN5NoQnssq2u45GHoFJKIiW2zoLou4WsMOeA470GOqUBNazDEHDKvPr%2BtyM86YQS2%2Fkdn2ymFGyRSHxSo8bWkMTTYAETkCOHNdmy87uLIjmjGsCh61cPkAhUdtJik3issuksALn7DAXQOOqGvtjfoEH4uqj5Jc%2BHonf0OsniKwbvjEGmbKCwiO4%2BA4CuijKZgGjJuH3p3f7XQNbjAqKPcP8nxjYazVmgFpK2qaz%2F56vjlNWfrb6TJsPKvrp%2Fb2ymOLfHbdMf&X-Amz-Signature=37b583a8721be8d42325a3c6912770d1041ca23634fb740ac4b7e35df7b46858&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ2CPV3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcujJaFpuCUGr%2F7SYMFMRRXmtwYHR7F8hu2xI51vuGkAiEAzSq9PLwFfZtgI9ct7SpzmeqM3B7iHdxVwvUgpicxiM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1w2w685SkqQsY5NyrcA7cg%2FcOwwLnLG8%2FxkssgYV6HxAjhzDrTRYeB9Yrppxvb3pe7V0L4gAbZKE8fDhLrrDREvQOlTdcqMTMldCV8On7EREOQLmvn2DB2Lx0Srkpys20nrvuPpsoCijzS2ZgUTxLil7nfIdFQ77mmeLt%2FQ2MU%2Bmw4AsE7zbuUfySuzrt0a1HbyNJPTKntF8e%2FLnSucYWQ0nDKRUQ6AVjfCvgZVyjytqlJxpRXXswEXqmCQOCFXfGo%2BgjdYi%2FpjQ8MFh2tHlaL1HGrvK3ppMqvL8XUedKbuFawNFUjDL0BhNAK7i16KTQOV7FERbdi%2FlWX4vquMbYCWrEMSDUb1OTZMwbRFxGizViT6T6Rora8HSVEVIzMKwuZV%2FpK0KaZwAUWRcs%2F%2Blh1Wv2YCZKzIyxZT2lgDqdFABMXa2sLVdHy1s5hzfUqn0jV7Tp240XNN7Ql585CGxpW200HUy4MBHUflo1Hfd%2BZfkXC7SJclpt2xe%2FuCh3nBkztSFzbvdhll8VSF3QCecTFhSN1j1hoFSUP8vI%2F6w9RSksyiYj%2BNKUemgMgG2lbVn4hm%2FS0G4rOpZNIO64TVBryGl1TIvhz2j7zwOP5M7GB6Ck5fN5NoQnssq2u45GHoFJKIiW2zoLou4WsMOeA470GOqUBNazDEHDKvPr%2BtyM86YQS2%2Fkdn2ymFGyRSHxSo8bWkMTTYAETkCOHNdmy87uLIjmjGsCh61cPkAhUdtJik3issuksALn7DAXQOOqGvtjfoEH4uqj5Jc%2BHonf0OsniKwbvjEGmbKCwiO4%2BA4CuijKZgGjJuH3p3f7XQNbjAqKPcP8nxjYazVmgFpK2qaz%2F56vjlNWfrb6TJsPKvrp%2Fb2ymOLfHbdMf&X-Amz-Signature=ffe6bc6cb3ba80b0d261ec2ffd4b648770efbbd125c93e76dd50d61ac0dd5ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ2CPV3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcujJaFpuCUGr%2F7SYMFMRRXmtwYHR7F8hu2xI51vuGkAiEAzSq9PLwFfZtgI9ct7SpzmeqM3B7iHdxVwvUgpicxiM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1w2w685SkqQsY5NyrcA7cg%2FcOwwLnLG8%2FxkssgYV6HxAjhzDrTRYeB9Yrppxvb3pe7V0L4gAbZKE8fDhLrrDREvQOlTdcqMTMldCV8On7EREOQLmvn2DB2Lx0Srkpys20nrvuPpsoCijzS2ZgUTxLil7nfIdFQ77mmeLt%2FQ2MU%2Bmw4AsE7zbuUfySuzrt0a1HbyNJPTKntF8e%2FLnSucYWQ0nDKRUQ6AVjfCvgZVyjytqlJxpRXXswEXqmCQOCFXfGo%2BgjdYi%2FpjQ8MFh2tHlaL1HGrvK3ppMqvL8XUedKbuFawNFUjDL0BhNAK7i16KTQOV7FERbdi%2FlWX4vquMbYCWrEMSDUb1OTZMwbRFxGizViT6T6Rora8HSVEVIzMKwuZV%2FpK0KaZwAUWRcs%2F%2Blh1Wv2YCZKzIyxZT2lgDqdFABMXa2sLVdHy1s5hzfUqn0jV7Tp240XNN7Ql585CGxpW200HUy4MBHUflo1Hfd%2BZfkXC7SJclpt2xe%2FuCh3nBkztSFzbvdhll8VSF3QCecTFhSN1j1hoFSUP8vI%2F6w9RSksyiYj%2BNKUemgMgG2lbVn4hm%2FS0G4rOpZNIO64TVBryGl1TIvhz2j7zwOP5M7GB6Ck5fN5NoQnssq2u45GHoFJKIiW2zoLou4WsMOeA470GOqUBNazDEHDKvPr%2BtyM86YQS2%2Fkdn2ymFGyRSHxSo8bWkMTTYAETkCOHNdmy87uLIjmjGsCh61cPkAhUdtJik3issuksALn7DAXQOOqGvtjfoEH4uqj5Jc%2BHonf0OsniKwbvjEGmbKCwiO4%2BA4CuijKZgGjJuH3p3f7XQNbjAqKPcP8nxjYazVmgFpK2qaz%2F56vjlNWfrb6TJsPKvrp%2Fb2ymOLfHbdMf&X-Amz-Signature=4d0657daab7df9e7084e38e15160a9b6aed3aa2680d2e46a780e59ff839999d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ2CPV3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcujJaFpuCUGr%2F7SYMFMRRXmtwYHR7F8hu2xI51vuGkAiEAzSq9PLwFfZtgI9ct7SpzmeqM3B7iHdxVwvUgpicxiM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1w2w685SkqQsY5NyrcA7cg%2FcOwwLnLG8%2FxkssgYV6HxAjhzDrTRYeB9Yrppxvb3pe7V0L4gAbZKE8fDhLrrDREvQOlTdcqMTMldCV8On7EREOQLmvn2DB2Lx0Srkpys20nrvuPpsoCijzS2ZgUTxLil7nfIdFQ77mmeLt%2FQ2MU%2Bmw4AsE7zbuUfySuzrt0a1HbyNJPTKntF8e%2FLnSucYWQ0nDKRUQ6AVjfCvgZVyjytqlJxpRXXswEXqmCQOCFXfGo%2BgjdYi%2FpjQ8MFh2tHlaL1HGrvK3ppMqvL8XUedKbuFawNFUjDL0BhNAK7i16KTQOV7FERbdi%2FlWX4vquMbYCWrEMSDUb1OTZMwbRFxGizViT6T6Rora8HSVEVIzMKwuZV%2FpK0KaZwAUWRcs%2F%2Blh1Wv2YCZKzIyxZT2lgDqdFABMXa2sLVdHy1s5hzfUqn0jV7Tp240XNN7Ql585CGxpW200HUy4MBHUflo1Hfd%2BZfkXC7SJclpt2xe%2FuCh3nBkztSFzbvdhll8VSF3QCecTFhSN1j1hoFSUP8vI%2F6w9RSksyiYj%2BNKUemgMgG2lbVn4hm%2FS0G4rOpZNIO64TVBryGl1TIvhz2j7zwOP5M7GB6Ck5fN5NoQnssq2u45GHoFJKIiW2zoLou4WsMOeA470GOqUBNazDEHDKvPr%2BtyM86YQS2%2Fkdn2ymFGyRSHxSo8bWkMTTYAETkCOHNdmy87uLIjmjGsCh61cPkAhUdtJik3issuksALn7DAXQOOqGvtjfoEH4uqj5Jc%2BHonf0OsniKwbvjEGmbKCwiO4%2BA4CuijKZgGjJuH3p3f7XQNbjAqKPcP8nxjYazVmgFpK2qaz%2F56vjlNWfrb6TJsPKvrp%2Fb2ymOLfHbdMf&X-Amz-Signature=2adde1c5cce96b0b452fe98ad5db124d462e0c59c01372a02e9b1a84725e09f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ2CPV3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcujJaFpuCUGr%2F7SYMFMRRXmtwYHR7F8hu2xI51vuGkAiEAzSq9PLwFfZtgI9ct7SpzmeqM3B7iHdxVwvUgpicxiM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1w2w685SkqQsY5NyrcA7cg%2FcOwwLnLG8%2FxkssgYV6HxAjhzDrTRYeB9Yrppxvb3pe7V0L4gAbZKE8fDhLrrDREvQOlTdcqMTMldCV8On7EREOQLmvn2DB2Lx0Srkpys20nrvuPpsoCijzS2ZgUTxLil7nfIdFQ77mmeLt%2FQ2MU%2Bmw4AsE7zbuUfySuzrt0a1HbyNJPTKntF8e%2FLnSucYWQ0nDKRUQ6AVjfCvgZVyjytqlJxpRXXswEXqmCQOCFXfGo%2BgjdYi%2FpjQ8MFh2tHlaL1HGrvK3ppMqvL8XUedKbuFawNFUjDL0BhNAK7i16KTQOV7FERbdi%2FlWX4vquMbYCWrEMSDUb1OTZMwbRFxGizViT6T6Rora8HSVEVIzMKwuZV%2FpK0KaZwAUWRcs%2F%2Blh1Wv2YCZKzIyxZT2lgDqdFABMXa2sLVdHy1s5hzfUqn0jV7Tp240XNN7Ql585CGxpW200HUy4MBHUflo1Hfd%2BZfkXC7SJclpt2xe%2FuCh3nBkztSFzbvdhll8VSF3QCecTFhSN1j1hoFSUP8vI%2F6w9RSksyiYj%2BNKUemgMgG2lbVn4hm%2FS0G4rOpZNIO64TVBryGl1TIvhz2j7zwOP5M7GB6Ck5fN5NoQnssq2u45GHoFJKIiW2zoLou4WsMOeA470GOqUBNazDEHDKvPr%2BtyM86YQS2%2Fkdn2ymFGyRSHxSo8bWkMTTYAETkCOHNdmy87uLIjmjGsCh61cPkAhUdtJik3issuksALn7DAXQOOqGvtjfoEH4uqj5Jc%2BHonf0OsniKwbvjEGmbKCwiO4%2BA4CuijKZgGjJuH3p3f7XQNbjAqKPcP8nxjYazVmgFpK2qaz%2F56vjlNWfrb6TJsPKvrp%2Fb2ymOLfHbdMf&X-Amz-Signature=27d67e7ad616f96ab91ee4a46a3e3335d0bab1ab7a9fcf7dc6ca5fd16e17d3e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ2CPV3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcujJaFpuCUGr%2F7SYMFMRRXmtwYHR7F8hu2xI51vuGkAiEAzSq9PLwFfZtgI9ct7SpzmeqM3B7iHdxVwvUgpicxiM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1w2w685SkqQsY5NyrcA7cg%2FcOwwLnLG8%2FxkssgYV6HxAjhzDrTRYeB9Yrppxvb3pe7V0L4gAbZKE8fDhLrrDREvQOlTdcqMTMldCV8On7EREOQLmvn2DB2Lx0Srkpys20nrvuPpsoCijzS2ZgUTxLil7nfIdFQ77mmeLt%2FQ2MU%2Bmw4AsE7zbuUfySuzrt0a1HbyNJPTKntF8e%2FLnSucYWQ0nDKRUQ6AVjfCvgZVyjytqlJxpRXXswEXqmCQOCFXfGo%2BgjdYi%2FpjQ8MFh2tHlaL1HGrvK3ppMqvL8XUedKbuFawNFUjDL0BhNAK7i16KTQOV7FERbdi%2FlWX4vquMbYCWrEMSDUb1OTZMwbRFxGizViT6T6Rora8HSVEVIzMKwuZV%2FpK0KaZwAUWRcs%2F%2Blh1Wv2YCZKzIyxZT2lgDqdFABMXa2sLVdHy1s5hzfUqn0jV7Tp240XNN7Ql585CGxpW200HUy4MBHUflo1Hfd%2BZfkXC7SJclpt2xe%2FuCh3nBkztSFzbvdhll8VSF3QCecTFhSN1j1hoFSUP8vI%2F6w9RSksyiYj%2BNKUemgMgG2lbVn4hm%2FS0G4rOpZNIO64TVBryGl1TIvhz2j7zwOP5M7GB6Ck5fN5NoQnssq2u45GHoFJKIiW2zoLou4WsMOeA470GOqUBNazDEHDKvPr%2BtyM86YQS2%2Fkdn2ymFGyRSHxSo8bWkMTTYAETkCOHNdmy87uLIjmjGsCh61cPkAhUdtJik3issuksALn7DAXQOOqGvtjfoEH4uqj5Jc%2BHonf0OsniKwbvjEGmbKCwiO4%2BA4CuijKZgGjJuH3p3f7XQNbjAqKPcP8nxjYazVmgFpK2qaz%2F56vjlNWfrb6TJsPKvrp%2Fb2ymOLfHbdMf&X-Amz-Signature=b7d66f5c27d72500835a51a15ad67d8e080e94578a3dbbd2fb10f9cd74770fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ2CPV3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcujJaFpuCUGr%2F7SYMFMRRXmtwYHR7F8hu2xI51vuGkAiEAzSq9PLwFfZtgI9ct7SpzmeqM3B7iHdxVwvUgpicxiM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1w2w685SkqQsY5NyrcA7cg%2FcOwwLnLG8%2FxkssgYV6HxAjhzDrTRYeB9Yrppxvb3pe7V0L4gAbZKE8fDhLrrDREvQOlTdcqMTMldCV8On7EREOQLmvn2DB2Lx0Srkpys20nrvuPpsoCijzS2ZgUTxLil7nfIdFQ77mmeLt%2FQ2MU%2Bmw4AsE7zbuUfySuzrt0a1HbyNJPTKntF8e%2FLnSucYWQ0nDKRUQ6AVjfCvgZVyjytqlJxpRXXswEXqmCQOCFXfGo%2BgjdYi%2FpjQ8MFh2tHlaL1HGrvK3ppMqvL8XUedKbuFawNFUjDL0BhNAK7i16KTQOV7FERbdi%2FlWX4vquMbYCWrEMSDUb1OTZMwbRFxGizViT6T6Rora8HSVEVIzMKwuZV%2FpK0KaZwAUWRcs%2F%2Blh1Wv2YCZKzIyxZT2lgDqdFABMXa2sLVdHy1s5hzfUqn0jV7Tp240XNN7Ql585CGxpW200HUy4MBHUflo1Hfd%2BZfkXC7SJclpt2xe%2FuCh3nBkztSFzbvdhll8VSF3QCecTFhSN1j1hoFSUP8vI%2F6w9RSksyiYj%2BNKUemgMgG2lbVn4hm%2FS0G4rOpZNIO64TVBryGl1TIvhz2j7zwOP5M7GB6Ck5fN5NoQnssq2u45GHoFJKIiW2zoLou4WsMOeA470GOqUBNazDEHDKvPr%2BtyM86YQS2%2Fkdn2ymFGyRSHxSo8bWkMTTYAETkCOHNdmy87uLIjmjGsCh61cPkAhUdtJik3issuksALn7DAXQOOqGvtjfoEH4uqj5Jc%2BHonf0OsniKwbvjEGmbKCwiO4%2BA4CuijKZgGjJuH3p3f7XQNbjAqKPcP8nxjYazVmgFpK2qaz%2F56vjlNWfrb6TJsPKvrp%2Fb2ymOLfHbdMf&X-Amz-Signature=45a2eb7c1b710e6c96c1cfa70705b474fb4b80c73a174bf6c41cc3801e8dcd61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ2CPV3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcujJaFpuCUGr%2F7SYMFMRRXmtwYHR7F8hu2xI51vuGkAiEAzSq9PLwFfZtgI9ct7SpzmeqM3B7iHdxVwvUgpicxiM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1w2w685SkqQsY5NyrcA7cg%2FcOwwLnLG8%2FxkssgYV6HxAjhzDrTRYeB9Yrppxvb3pe7V0L4gAbZKE8fDhLrrDREvQOlTdcqMTMldCV8On7EREOQLmvn2DB2Lx0Srkpys20nrvuPpsoCijzS2ZgUTxLil7nfIdFQ77mmeLt%2FQ2MU%2Bmw4AsE7zbuUfySuzrt0a1HbyNJPTKntF8e%2FLnSucYWQ0nDKRUQ6AVjfCvgZVyjytqlJxpRXXswEXqmCQOCFXfGo%2BgjdYi%2FpjQ8MFh2tHlaL1HGrvK3ppMqvL8XUedKbuFawNFUjDL0BhNAK7i16KTQOV7FERbdi%2FlWX4vquMbYCWrEMSDUb1OTZMwbRFxGizViT6T6Rora8HSVEVIzMKwuZV%2FpK0KaZwAUWRcs%2F%2Blh1Wv2YCZKzIyxZT2lgDqdFABMXa2sLVdHy1s5hzfUqn0jV7Tp240XNN7Ql585CGxpW200HUy4MBHUflo1Hfd%2BZfkXC7SJclpt2xe%2FuCh3nBkztSFzbvdhll8VSF3QCecTFhSN1j1hoFSUP8vI%2F6w9RSksyiYj%2BNKUemgMgG2lbVn4hm%2FS0G4rOpZNIO64TVBryGl1TIvhz2j7zwOP5M7GB6Ck5fN5NoQnssq2u45GHoFJKIiW2zoLou4WsMOeA470GOqUBNazDEHDKvPr%2BtyM86YQS2%2Fkdn2ymFGyRSHxSo8bWkMTTYAETkCOHNdmy87uLIjmjGsCh61cPkAhUdtJik3issuksALn7DAXQOOqGvtjfoEH4uqj5Jc%2BHonf0OsniKwbvjEGmbKCwiO4%2BA4CuijKZgGjJuH3p3f7XQNbjAqKPcP8nxjYazVmgFpK2qaz%2F56vjlNWfrb6TJsPKvrp%2Fb2ymOLfHbdMf&X-Amz-Signature=8798ab2be8a8cf17ce2b63c4376b3669e7b1a1a2be50f1946e3069b4cb3a3070&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
