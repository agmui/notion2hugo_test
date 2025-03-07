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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFS7GJY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKE%2BtuLCNU7DLRXkt9zPkKTjFTmEy9szXyaZjrjTcMPgIhAJD5go2oWJx3uA8Pd2HhdciijaM%2FBoP4MP194%2BYQ6kcOKv8DCEcQABoMNjM3NDIzMTgzODA1IgxC4RZDHaxcFcUd2Egq3APwQ0lbRwDsQcgfIwtUdtVPnZRQ9oijv9mAjFnXTOXVNYVBOZpRDDSnHvlXN7D%2Bw85EZA09kbigx8fOrpEx9790nckDlUS7Cv%2Fkje5DNNJ5Q1S737ZiCo9lYD980fJZt9Ev6pwXRhripBH55t0Sgdt%2FChS%2FtC4%2B17JF68k4bwbqI4%2FHIWV3b7CjkhLte5NoW2vbIdK0AgnmIYWzwTjpyIw37UU1JniIyKFhFtN4LJr4xSs9TB63iy6y7afLdptkvmU%2BSJK8AKIPl3WE9rw2tZ67JTwsQEhD2tAq1H%2F9YIZ1Fl%2BBimI0kQrAIF7j3RQRe5I8dvfRAadXAaqrniZ2KCXmpsOeMKtpqRNNARDN8V5oj0iTbA5h%2FvemCJ4Oh9jJsFn9g4KLDs9vWc3bKSBWvnePw1zVI0oirMSWqNRWRV4KmI7MA52z%2F8ZhjqUz%2FDSmESLUN1pj%2Fu5mfTWVRnEg74fZqYVVdbdxO5vbWVBulj8ndbAEjNF9BwiMopxm09UqwDoAe0ZolSsh2Me47wzD3JTALiFY%2BJFThCLnweagVr1xSax9DCaNbfAX2BtoSHXMIKH70KM%2FeLhEUTpjbeVBr2nkTOJyFLIkZDuZTOw7mQrDZIav5Avni2fCKBkKvDCK%2Fqu%2BBjqkAdk3XFNwEKLjF5584uTxzQslVsi1sPQ3zFb%2FuhQmTe5e%2FxtWKk4SmWSnCpMKfK%2BqHnIqG9mvp1X8mF%2F2GPhYWn3WAFFZyVwzqr7fUi1la%2F2sE7gEzdyk8spoB8joLpQUSjkHIBwh1doT3BmRhXXcGzS%2Fl7t1pVoiLXZauJGgX5xOX%2FfLxQBCUeoOdLSXhbEf%2FxvTuTM8C622uMC2dL%2Fq6N3ZUQoN&X-Amz-Signature=611cc6cac38b2787c6c115b9bf092cd512b707740b544e832a2cba3cbe12f2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFS7GJY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKE%2BtuLCNU7DLRXkt9zPkKTjFTmEy9szXyaZjrjTcMPgIhAJD5go2oWJx3uA8Pd2HhdciijaM%2FBoP4MP194%2BYQ6kcOKv8DCEcQABoMNjM3NDIzMTgzODA1IgxC4RZDHaxcFcUd2Egq3APwQ0lbRwDsQcgfIwtUdtVPnZRQ9oijv9mAjFnXTOXVNYVBOZpRDDSnHvlXN7D%2Bw85EZA09kbigx8fOrpEx9790nckDlUS7Cv%2Fkje5DNNJ5Q1S737ZiCo9lYD980fJZt9Ev6pwXRhripBH55t0Sgdt%2FChS%2FtC4%2B17JF68k4bwbqI4%2FHIWV3b7CjkhLte5NoW2vbIdK0AgnmIYWzwTjpyIw37UU1JniIyKFhFtN4LJr4xSs9TB63iy6y7afLdptkvmU%2BSJK8AKIPl3WE9rw2tZ67JTwsQEhD2tAq1H%2F9YIZ1Fl%2BBimI0kQrAIF7j3RQRe5I8dvfRAadXAaqrniZ2KCXmpsOeMKtpqRNNARDN8V5oj0iTbA5h%2FvemCJ4Oh9jJsFn9g4KLDs9vWc3bKSBWvnePw1zVI0oirMSWqNRWRV4KmI7MA52z%2F8ZhjqUz%2FDSmESLUN1pj%2Fu5mfTWVRnEg74fZqYVVdbdxO5vbWVBulj8ndbAEjNF9BwiMopxm09UqwDoAe0ZolSsh2Me47wzD3JTALiFY%2BJFThCLnweagVr1xSax9DCaNbfAX2BtoSHXMIKH70KM%2FeLhEUTpjbeVBr2nkTOJyFLIkZDuZTOw7mQrDZIav5Avni2fCKBkKvDCK%2Fqu%2BBjqkAdk3XFNwEKLjF5584uTxzQslVsi1sPQ3zFb%2FuhQmTe5e%2FxtWKk4SmWSnCpMKfK%2BqHnIqG9mvp1X8mF%2F2GPhYWn3WAFFZyVwzqr7fUi1la%2F2sE7gEzdyk8spoB8joLpQUSjkHIBwh1doT3BmRhXXcGzS%2Fl7t1pVoiLXZauJGgX5xOX%2FfLxQBCUeoOdLSXhbEf%2FxvTuTM8C622uMC2dL%2Fq6N3ZUQoN&X-Amz-Signature=82c751faaeea35576cea908713f308bb9b128dea581035a2c45ce88cc626de7a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFS7GJY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKE%2BtuLCNU7DLRXkt9zPkKTjFTmEy9szXyaZjrjTcMPgIhAJD5go2oWJx3uA8Pd2HhdciijaM%2FBoP4MP194%2BYQ6kcOKv8DCEcQABoMNjM3NDIzMTgzODA1IgxC4RZDHaxcFcUd2Egq3APwQ0lbRwDsQcgfIwtUdtVPnZRQ9oijv9mAjFnXTOXVNYVBOZpRDDSnHvlXN7D%2Bw85EZA09kbigx8fOrpEx9790nckDlUS7Cv%2Fkje5DNNJ5Q1S737ZiCo9lYD980fJZt9Ev6pwXRhripBH55t0Sgdt%2FChS%2FtC4%2B17JF68k4bwbqI4%2FHIWV3b7CjkhLte5NoW2vbIdK0AgnmIYWzwTjpyIw37UU1JniIyKFhFtN4LJr4xSs9TB63iy6y7afLdptkvmU%2BSJK8AKIPl3WE9rw2tZ67JTwsQEhD2tAq1H%2F9YIZ1Fl%2BBimI0kQrAIF7j3RQRe5I8dvfRAadXAaqrniZ2KCXmpsOeMKtpqRNNARDN8V5oj0iTbA5h%2FvemCJ4Oh9jJsFn9g4KLDs9vWc3bKSBWvnePw1zVI0oirMSWqNRWRV4KmI7MA52z%2F8ZhjqUz%2FDSmESLUN1pj%2Fu5mfTWVRnEg74fZqYVVdbdxO5vbWVBulj8ndbAEjNF9BwiMopxm09UqwDoAe0ZolSsh2Me47wzD3JTALiFY%2BJFThCLnweagVr1xSax9DCaNbfAX2BtoSHXMIKH70KM%2FeLhEUTpjbeVBr2nkTOJyFLIkZDuZTOw7mQrDZIav5Avni2fCKBkKvDCK%2Fqu%2BBjqkAdk3XFNwEKLjF5584uTxzQslVsi1sPQ3zFb%2FuhQmTe5e%2FxtWKk4SmWSnCpMKfK%2BqHnIqG9mvp1X8mF%2F2GPhYWn3WAFFZyVwzqr7fUi1la%2F2sE7gEzdyk8spoB8joLpQUSjkHIBwh1doT3BmRhXXcGzS%2Fl7t1pVoiLXZauJGgX5xOX%2FfLxQBCUeoOdLSXhbEf%2FxvTuTM8C622uMC2dL%2Fq6N3ZUQoN&X-Amz-Signature=e2d8ad2099f2c699b60fc36f2e35fd3e6708d232535d3abe32a3da18313a0b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFS7GJY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKE%2BtuLCNU7DLRXkt9zPkKTjFTmEy9szXyaZjrjTcMPgIhAJD5go2oWJx3uA8Pd2HhdciijaM%2FBoP4MP194%2BYQ6kcOKv8DCEcQABoMNjM3NDIzMTgzODA1IgxC4RZDHaxcFcUd2Egq3APwQ0lbRwDsQcgfIwtUdtVPnZRQ9oijv9mAjFnXTOXVNYVBOZpRDDSnHvlXN7D%2Bw85EZA09kbigx8fOrpEx9790nckDlUS7Cv%2Fkje5DNNJ5Q1S737ZiCo9lYD980fJZt9Ev6pwXRhripBH55t0Sgdt%2FChS%2FtC4%2B17JF68k4bwbqI4%2FHIWV3b7CjkhLte5NoW2vbIdK0AgnmIYWzwTjpyIw37UU1JniIyKFhFtN4LJr4xSs9TB63iy6y7afLdptkvmU%2BSJK8AKIPl3WE9rw2tZ67JTwsQEhD2tAq1H%2F9YIZ1Fl%2BBimI0kQrAIF7j3RQRe5I8dvfRAadXAaqrniZ2KCXmpsOeMKtpqRNNARDN8V5oj0iTbA5h%2FvemCJ4Oh9jJsFn9g4KLDs9vWc3bKSBWvnePw1zVI0oirMSWqNRWRV4KmI7MA52z%2F8ZhjqUz%2FDSmESLUN1pj%2Fu5mfTWVRnEg74fZqYVVdbdxO5vbWVBulj8ndbAEjNF9BwiMopxm09UqwDoAe0ZolSsh2Me47wzD3JTALiFY%2BJFThCLnweagVr1xSax9DCaNbfAX2BtoSHXMIKH70KM%2FeLhEUTpjbeVBr2nkTOJyFLIkZDuZTOw7mQrDZIav5Avni2fCKBkKvDCK%2Fqu%2BBjqkAdk3XFNwEKLjF5584uTxzQslVsi1sPQ3zFb%2FuhQmTe5e%2FxtWKk4SmWSnCpMKfK%2BqHnIqG9mvp1X8mF%2F2GPhYWn3WAFFZyVwzqr7fUi1la%2F2sE7gEzdyk8spoB8joLpQUSjkHIBwh1doT3BmRhXXcGzS%2Fl7t1pVoiLXZauJGgX5xOX%2FfLxQBCUeoOdLSXhbEf%2FxvTuTM8C622uMC2dL%2Fq6N3ZUQoN&X-Amz-Signature=468c4383dae580b3548186e0201cc756dc229adb87e3ada88a402ee2db2af60e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFS7GJY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKE%2BtuLCNU7DLRXkt9zPkKTjFTmEy9szXyaZjrjTcMPgIhAJD5go2oWJx3uA8Pd2HhdciijaM%2FBoP4MP194%2BYQ6kcOKv8DCEcQABoMNjM3NDIzMTgzODA1IgxC4RZDHaxcFcUd2Egq3APwQ0lbRwDsQcgfIwtUdtVPnZRQ9oijv9mAjFnXTOXVNYVBOZpRDDSnHvlXN7D%2Bw85EZA09kbigx8fOrpEx9790nckDlUS7Cv%2Fkje5DNNJ5Q1S737ZiCo9lYD980fJZt9Ev6pwXRhripBH55t0Sgdt%2FChS%2FtC4%2B17JF68k4bwbqI4%2FHIWV3b7CjkhLte5NoW2vbIdK0AgnmIYWzwTjpyIw37UU1JniIyKFhFtN4LJr4xSs9TB63iy6y7afLdptkvmU%2BSJK8AKIPl3WE9rw2tZ67JTwsQEhD2tAq1H%2F9YIZ1Fl%2BBimI0kQrAIF7j3RQRe5I8dvfRAadXAaqrniZ2KCXmpsOeMKtpqRNNARDN8V5oj0iTbA5h%2FvemCJ4Oh9jJsFn9g4KLDs9vWc3bKSBWvnePw1zVI0oirMSWqNRWRV4KmI7MA52z%2F8ZhjqUz%2FDSmESLUN1pj%2Fu5mfTWVRnEg74fZqYVVdbdxO5vbWVBulj8ndbAEjNF9BwiMopxm09UqwDoAe0ZolSsh2Me47wzD3JTALiFY%2BJFThCLnweagVr1xSax9DCaNbfAX2BtoSHXMIKH70KM%2FeLhEUTpjbeVBr2nkTOJyFLIkZDuZTOw7mQrDZIav5Avni2fCKBkKvDCK%2Fqu%2BBjqkAdk3XFNwEKLjF5584uTxzQslVsi1sPQ3zFb%2FuhQmTe5e%2FxtWKk4SmWSnCpMKfK%2BqHnIqG9mvp1X8mF%2F2GPhYWn3WAFFZyVwzqr7fUi1la%2F2sE7gEzdyk8spoB8joLpQUSjkHIBwh1doT3BmRhXXcGzS%2Fl7t1pVoiLXZauJGgX5xOX%2FfLxQBCUeoOdLSXhbEf%2FxvTuTM8C622uMC2dL%2Fq6N3ZUQoN&X-Amz-Signature=a40ff8b67e393d8f4747406d42e18e2e0f1a846c23ec0cfcceb9596c41cc08ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFS7GJY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKE%2BtuLCNU7DLRXkt9zPkKTjFTmEy9szXyaZjrjTcMPgIhAJD5go2oWJx3uA8Pd2HhdciijaM%2FBoP4MP194%2BYQ6kcOKv8DCEcQABoMNjM3NDIzMTgzODA1IgxC4RZDHaxcFcUd2Egq3APwQ0lbRwDsQcgfIwtUdtVPnZRQ9oijv9mAjFnXTOXVNYVBOZpRDDSnHvlXN7D%2Bw85EZA09kbigx8fOrpEx9790nckDlUS7Cv%2Fkje5DNNJ5Q1S737ZiCo9lYD980fJZt9Ev6pwXRhripBH55t0Sgdt%2FChS%2FtC4%2B17JF68k4bwbqI4%2FHIWV3b7CjkhLte5NoW2vbIdK0AgnmIYWzwTjpyIw37UU1JniIyKFhFtN4LJr4xSs9TB63iy6y7afLdptkvmU%2BSJK8AKIPl3WE9rw2tZ67JTwsQEhD2tAq1H%2F9YIZ1Fl%2BBimI0kQrAIF7j3RQRe5I8dvfRAadXAaqrniZ2KCXmpsOeMKtpqRNNARDN8V5oj0iTbA5h%2FvemCJ4Oh9jJsFn9g4KLDs9vWc3bKSBWvnePw1zVI0oirMSWqNRWRV4KmI7MA52z%2F8ZhjqUz%2FDSmESLUN1pj%2Fu5mfTWVRnEg74fZqYVVdbdxO5vbWVBulj8ndbAEjNF9BwiMopxm09UqwDoAe0ZolSsh2Me47wzD3JTALiFY%2BJFThCLnweagVr1xSax9DCaNbfAX2BtoSHXMIKH70KM%2FeLhEUTpjbeVBr2nkTOJyFLIkZDuZTOw7mQrDZIav5Avni2fCKBkKvDCK%2Fqu%2BBjqkAdk3XFNwEKLjF5584uTxzQslVsi1sPQ3zFb%2FuhQmTe5e%2FxtWKk4SmWSnCpMKfK%2BqHnIqG9mvp1X8mF%2F2GPhYWn3WAFFZyVwzqr7fUi1la%2F2sE7gEzdyk8spoB8joLpQUSjkHIBwh1doT3BmRhXXcGzS%2Fl7t1pVoiLXZauJGgX5xOX%2FfLxQBCUeoOdLSXhbEf%2FxvTuTM8C622uMC2dL%2Fq6N3ZUQoN&X-Amz-Signature=30ee7e25561fc4963710483833a125960e6739dd73e676526771fb15aa04e516&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFS7GJY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKE%2BtuLCNU7DLRXkt9zPkKTjFTmEy9szXyaZjrjTcMPgIhAJD5go2oWJx3uA8Pd2HhdciijaM%2FBoP4MP194%2BYQ6kcOKv8DCEcQABoMNjM3NDIzMTgzODA1IgxC4RZDHaxcFcUd2Egq3APwQ0lbRwDsQcgfIwtUdtVPnZRQ9oijv9mAjFnXTOXVNYVBOZpRDDSnHvlXN7D%2Bw85EZA09kbigx8fOrpEx9790nckDlUS7Cv%2Fkje5DNNJ5Q1S737ZiCo9lYD980fJZt9Ev6pwXRhripBH55t0Sgdt%2FChS%2FtC4%2B17JF68k4bwbqI4%2FHIWV3b7CjkhLte5NoW2vbIdK0AgnmIYWzwTjpyIw37UU1JniIyKFhFtN4LJr4xSs9TB63iy6y7afLdptkvmU%2BSJK8AKIPl3WE9rw2tZ67JTwsQEhD2tAq1H%2F9YIZ1Fl%2BBimI0kQrAIF7j3RQRe5I8dvfRAadXAaqrniZ2KCXmpsOeMKtpqRNNARDN8V5oj0iTbA5h%2FvemCJ4Oh9jJsFn9g4KLDs9vWc3bKSBWvnePw1zVI0oirMSWqNRWRV4KmI7MA52z%2F8ZhjqUz%2FDSmESLUN1pj%2Fu5mfTWVRnEg74fZqYVVdbdxO5vbWVBulj8ndbAEjNF9BwiMopxm09UqwDoAe0ZolSsh2Me47wzD3JTALiFY%2BJFThCLnweagVr1xSax9DCaNbfAX2BtoSHXMIKH70KM%2FeLhEUTpjbeVBr2nkTOJyFLIkZDuZTOw7mQrDZIav5Avni2fCKBkKvDCK%2Fqu%2BBjqkAdk3XFNwEKLjF5584uTxzQslVsi1sPQ3zFb%2FuhQmTe5e%2FxtWKk4SmWSnCpMKfK%2BqHnIqG9mvp1X8mF%2F2GPhYWn3WAFFZyVwzqr7fUi1la%2F2sE7gEzdyk8spoB8joLpQUSjkHIBwh1doT3BmRhXXcGzS%2Fl7t1pVoiLXZauJGgX5xOX%2FfLxQBCUeoOdLSXhbEf%2FxvTuTM8C622uMC2dL%2Fq6N3ZUQoN&X-Amz-Signature=fef6de1cdc276d3eead0022f1c0120a7f505c4a997ba7b77f543baa12be7577d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFS7GJY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKE%2BtuLCNU7DLRXkt9zPkKTjFTmEy9szXyaZjrjTcMPgIhAJD5go2oWJx3uA8Pd2HhdciijaM%2FBoP4MP194%2BYQ6kcOKv8DCEcQABoMNjM3NDIzMTgzODA1IgxC4RZDHaxcFcUd2Egq3APwQ0lbRwDsQcgfIwtUdtVPnZRQ9oijv9mAjFnXTOXVNYVBOZpRDDSnHvlXN7D%2Bw85EZA09kbigx8fOrpEx9790nckDlUS7Cv%2Fkje5DNNJ5Q1S737ZiCo9lYD980fJZt9Ev6pwXRhripBH55t0Sgdt%2FChS%2FtC4%2B17JF68k4bwbqI4%2FHIWV3b7CjkhLte5NoW2vbIdK0AgnmIYWzwTjpyIw37UU1JniIyKFhFtN4LJr4xSs9TB63iy6y7afLdptkvmU%2BSJK8AKIPl3WE9rw2tZ67JTwsQEhD2tAq1H%2F9YIZ1Fl%2BBimI0kQrAIF7j3RQRe5I8dvfRAadXAaqrniZ2KCXmpsOeMKtpqRNNARDN8V5oj0iTbA5h%2FvemCJ4Oh9jJsFn9g4KLDs9vWc3bKSBWvnePw1zVI0oirMSWqNRWRV4KmI7MA52z%2F8ZhjqUz%2FDSmESLUN1pj%2Fu5mfTWVRnEg74fZqYVVdbdxO5vbWVBulj8ndbAEjNF9BwiMopxm09UqwDoAe0ZolSsh2Me47wzD3JTALiFY%2BJFThCLnweagVr1xSax9DCaNbfAX2BtoSHXMIKH70KM%2FeLhEUTpjbeVBr2nkTOJyFLIkZDuZTOw7mQrDZIav5Avni2fCKBkKvDCK%2Fqu%2BBjqkAdk3XFNwEKLjF5584uTxzQslVsi1sPQ3zFb%2FuhQmTe5e%2FxtWKk4SmWSnCpMKfK%2BqHnIqG9mvp1X8mF%2F2GPhYWn3WAFFZyVwzqr7fUi1la%2F2sE7gEzdyk8spoB8joLpQUSjkHIBwh1doT3BmRhXXcGzS%2Fl7t1pVoiLXZauJGgX5xOX%2FfLxQBCUeoOdLSXhbEf%2FxvTuTM8C622uMC2dL%2Fq6N3ZUQoN&X-Amz-Signature=5f39fbbb8673d56b43e8e46beeb6e6d8c3e04010d6c4102ad772fa2d05e4e14d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
