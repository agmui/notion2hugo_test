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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=92873d01e1cf47dce453e58c192b3c56d0f2ec0bdd6d2f4f7a3ca9041f6c7204&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=57883841494cbfb4e029e92834e13d1b7ecc05fe88064f06dafd7dd12599fe0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=9dfe737fa04328d82c700c89ddb376133425bb258e4b26e17b7649e236334842&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=9a7402febab68e7790316539fadceba5591b44902c7e11fee070286f3126befd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=d452059721af5f97f0928f6e00a4032a3172f0fe5b50f29ec71222b1e6a76ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=a9991b541a56d2683edaae45bc0da721a7e6fd4e2a72f35465c227aae6b55039&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=4c13e1e14340c6a1c2280b9ba7f04df2cace33dbb90f09b33574167642e9eabd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=90af9540e93dcc800dd566cab6e164761121b11bc4b6b1f7f8f02126f1cb66dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
