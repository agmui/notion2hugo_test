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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWQBAV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUUEcxV431eYtF9IqzWxSm3oSkHg2f8vVIvyI8p4QIAIhAJ0yvWcCyb8D4YS2imHEuM8Nw6EDGsFcNoAePbxQhG%2FvKv8DCF8QABoMNjM3NDIzMTgzODA1IgyloqneyWRneRuFUVsq3ANsTRMd7hBBBJLbxJWwlewKJ9FCFdZ897UkpNrAljc%2BozBJIti5G3tH0CVCW7LdNGuvqsFVCWalJiYKB4L7Ck%2Fh%2Fec9RmvbdP%2B3aiP7oQA5DV7l9dkoHcWxCe0WQO8ODpkHfwF6JDB0pmIYezl%2FVdDyNyi0%2FMI2gpVTXUTGIBFowdpvTF%2Ftn4fwLJKoUtJV1GWTg6j6oC4lgdau5bJQBhlZh9YMRCk7Lfnnw1mLSdI%2F0E7GZxcDXxWToasIihTKVCichM1V3Akmj33xe%2BS89mRXVda0U1V5eBNbc2dIHFZ9ljoJSbOvXUdaEhGweu%2F9zxqzGuHRtwTqQTsS%2FuO1%2FRlPT9Kg%2BHWq5ivpCKxWe7SS9YIknUIOafuN%2BHujrSgpQwDCmbzzZXSCBFotdcT%2F3USWxR7YL3VwuTvNdO2QeBjzCn6K8MeBwj1RGv3%2Bs5KipROW9QjJDwV%2Fhk6PibLJU8goTiOEASKEp1vTC8hlQ2PFSCh0k498YDmuutz6bpglqJmTq%2BvgpHIh9HFrx5%2BL6ebGzwo284m2FMH35gSW%2B7Qf0DK%2BT7A2Fs6NEPUYT7hdpFtyU04MGtPjhb0pprn0cpSDdklxn8JZYZFkdd7ougsqQ764QlC4Cg0287eKATC80Zq%2FBjqkAc12AZsWTMOF0qLL4viC9GukbMvGtwnVnvHH6Ws4aSSD184AfeyH7aSr2dySyO26ETgQnqTDHz9D7vo6A4q%2BEGuewPNgB7FShnX3DWQLn6wEu%2Bqm%2F%2F%2BcboSXqTvMBUzJW8MWkQ1Xk90O%2B4g8u5f2qcT3GiDlxnceja6dEsatApM9TbA6eujNBvVnRzPtdkExGiOnHfx%2F%2FkTAxG0I8VSywI%2F%2FX2g9&X-Amz-Signature=6adf97eac1d0d957ba65b0d928ca6e6efabaad44013f5fa5edfa716b49912f62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWQBAV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUUEcxV431eYtF9IqzWxSm3oSkHg2f8vVIvyI8p4QIAIhAJ0yvWcCyb8D4YS2imHEuM8Nw6EDGsFcNoAePbxQhG%2FvKv8DCF8QABoMNjM3NDIzMTgzODA1IgyloqneyWRneRuFUVsq3ANsTRMd7hBBBJLbxJWwlewKJ9FCFdZ897UkpNrAljc%2BozBJIti5G3tH0CVCW7LdNGuvqsFVCWalJiYKB4L7Ck%2Fh%2Fec9RmvbdP%2B3aiP7oQA5DV7l9dkoHcWxCe0WQO8ODpkHfwF6JDB0pmIYezl%2FVdDyNyi0%2FMI2gpVTXUTGIBFowdpvTF%2Ftn4fwLJKoUtJV1GWTg6j6oC4lgdau5bJQBhlZh9YMRCk7Lfnnw1mLSdI%2F0E7GZxcDXxWToasIihTKVCichM1V3Akmj33xe%2BS89mRXVda0U1V5eBNbc2dIHFZ9ljoJSbOvXUdaEhGweu%2F9zxqzGuHRtwTqQTsS%2FuO1%2FRlPT9Kg%2BHWq5ivpCKxWe7SS9YIknUIOafuN%2BHujrSgpQwDCmbzzZXSCBFotdcT%2F3USWxR7YL3VwuTvNdO2QeBjzCn6K8MeBwj1RGv3%2Bs5KipROW9QjJDwV%2Fhk6PibLJU8goTiOEASKEp1vTC8hlQ2PFSCh0k498YDmuutz6bpglqJmTq%2BvgpHIh9HFrx5%2BL6ebGzwo284m2FMH35gSW%2B7Qf0DK%2BT7A2Fs6NEPUYT7hdpFtyU04MGtPjhb0pprn0cpSDdklxn8JZYZFkdd7ougsqQ764QlC4Cg0287eKATC80Zq%2FBjqkAc12AZsWTMOF0qLL4viC9GukbMvGtwnVnvHH6Ws4aSSD184AfeyH7aSr2dySyO26ETgQnqTDHz9D7vo6A4q%2BEGuewPNgB7FShnX3DWQLn6wEu%2Bqm%2F%2F%2BcboSXqTvMBUzJW8MWkQ1Xk90O%2B4g8u5f2qcT3GiDlxnceja6dEsatApM9TbA6eujNBvVnRzPtdkExGiOnHfx%2F%2FkTAxG0I8VSywI%2F%2FX2g9&X-Amz-Signature=631498d68f210e57be3c252ed3ac44899c65c30a943152b576c7b3c61769fb2b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWQBAV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUUEcxV431eYtF9IqzWxSm3oSkHg2f8vVIvyI8p4QIAIhAJ0yvWcCyb8D4YS2imHEuM8Nw6EDGsFcNoAePbxQhG%2FvKv8DCF8QABoMNjM3NDIzMTgzODA1IgyloqneyWRneRuFUVsq3ANsTRMd7hBBBJLbxJWwlewKJ9FCFdZ897UkpNrAljc%2BozBJIti5G3tH0CVCW7LdNGuvqsFVCWalJiYKB4L7Ck%2Fh%2Fec9RmvbdP%2B3aiP7oQA5DV7l9dkoHcWxCe0WQO8ODpkHfwF6JDB0pmIYezl%2FVdDyNyi0%2FMI2gpVTXUTGIBFowdpvTF%2Ftn4fwLJKoUtJV1GWTg6j6oC4lgdau5bJQBhlZh9YMRCk7Lfnnw1mLSdI%2F0E7GZxcDXxWToasIihTKVCichM1V3Akmj33xe%2BS89mRXVda0U1V5eBNbc2dIHFZ9ljoJSbOvXUdaEhGweu%2F9zxqzGuHRtwTqQTsS%2FuO1%2FRlPT9Kg%2BHWq5ivpCKxWe7SS9YIknUIOafuN%2BHujrSgpQwDCmbzzZXSCBFotdcT%2F3USWxR7YL3VwuTvNdO2QeBjzCn6K8MeBwj1RGv3%2Bs5KipROW9QjJDwV%2Fhk6PibLJU8goTiOEASKEp1vTC8hlQ2PFSCh0k498YDmuutz6bpglqJmTq%2BvgpHIh9HFrx5%2BL6ebGzwo284m2FMH35gSW%2B7Qf0DK%2BT7A2Fs6NEPUYT7hdpFtyU04MGtPjhb0pprn0cpSDdklxn8JZYZFkdd7ougsqQ764QlC4Cg0287eKATC80Zq%2FBjqkAc12AZsWTMOF0qLL4viC9GukbMvGtwnVnvHH6Ws4aSSD184AfeyH7aSr2dySyO26ETgQnqTDHz9D7vo6A4q%2BEGuewPNgB7FShnX3DWQLn6wEu%2Bqm%2F%2F%2BcboSXqTvMBUzJW8MWkQ1Xk90O%2B4g8u5f2qcT3GiDlxnceja6dEsatApM9TbA6eujNBvVnRzPtdkExGiOnHfx%2F%2FkTAxG0I8VSywI%2F%2FX2g9&X-Amz-Signature=8dfe94e703027c16a3ac5ab03b07717220a8f5b94962932fab8addd2f59a5c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWQBAV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUUEcxV431eYtF9IqzWxSm3oSkHg2f8vVIvyI8p4QIAIhAJ0yvWcCyb8D4YS2imHEuM8Nw6EDGsFcNoAePbxQhG%2FvKv8DCF8QABoMNjM3NDIzMTgzODA1IgyloqneyWRneRuFUVsq3ANsTRMd7hBBBJLbxJWwlewKJ9FCFdZ897UkpNrAljc%2BozBJIti5G3tH0CVCW7LdNGuvqsFVCWalJiYKB4L7Ck%2Fh%2Fec9RmvbdP%2B3aiP7oQA5DV7l9dkoHcWxCe0WQO8ODpkHfwF6JDB0pmIYezl%2FVdDyNyi0%2FMI2gpVTXUTGIBFowdpvTF%2Ftn4fwLJKoUtJV1GWTg6j6oC4lgdau5bJQBhlZh9YMRCk7Lfnnw1mLSdI%2F0E7GZxcDXxWToasIihTKVCichM1V3Akmj33xe%2BS89mRXVda0U1V5eBNbc2dIHFZ9ljoJSbOvXUdaEhGweu%2F9zxqzGuHRtwTqQTsS%2FuO1%2FRlPT9Kg%2BHWq5ivpCKxWe7SS9YIknUIOafuN%2BHujrSgpQwDCmbzzZXSCBFotdcT%2F3USWxR7YL3VwuTvNdO2QeBjzCn6K8MeBwj1RGv3%2Bs5KipROW9QjJDwV%2Fhk6PibLJU8goTiOEASKEp1vTC8hlQ2PFSCh0k498YDmuutz6bpglqJmTq%2BvgpHIh9HFrx5%2BL6ebGzwo284m2FMH35gSW%2B7Qf0DK%2BT7A2Fs6NEPUYT7hdpFtyU04MGtPjhb0pprn0cpSDdklxn8JZYZFkdd7ougsqQ764QlC4Cg0287eKATC80Zq%2FBjqkAc12AZsWTMOF0qLL4viC9GukbMvGtwnVnvHH6Ws4aSSD184AfeyH7aSr2dySyO26ETgQnqTDHz9D7vo6A4q%2BEGuewPNgB7FShnX3DWQLn6wEu%2Bqm%2F%2F%2BcboSXqTvMBUzJW8MWkQ1Xk90O%2B4g8u5f2qcT3GiDlxnceja6dEsatApM9TbA6eujNBvVnRzPtdkExGiOnHfx%2F%2FkTAxG0I8VSywI%2F%2FX2g9&X-Amz-Signature=b09afa0caa21aaf6fb3b3e434729a8333ce21b84ec497a7a0bfa1756a035eb5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWQBAV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUUEcxV431eYtF9IqzWxSm3oSkHg2f8vVIvyI8p4QIAIhAJ0yvWcCyb8D4YS2imHEuM8Nw6EDGsFcNoAePbxQhG%2FvKv8DCF8QABoMNjM3NDIzMTgzODA1IgyloqneyWRneRuFUVsq3ANsTRMd7hBBBJLbxJWwlewKJ9FCFdZ897UkpNrAljc%2BozBJIti5G3tH0CVCW7LdNGuvqsFVCWalJiYKB4L7Ck%2Fh%2Fec9RmvbdP%2B3aiP7oQA5DV7l9dkoHcWxCe0WQO8ODpkHfwF6JDB0pmIYezl%2FVdDyNyi0%2FMI2gpVTXUTGIBFowdpvTF%2Ftn4fwLJKoUtJV1GWTg6j6oC4lgdau5bJQBhlZh9YMRCk7Lfnnw1mLSdI%2F0E7GZxcDXxWToasIihTKVCichM1V3Akmj33xe%2BS89mRXVda0U1V5eBNbc2dIHFZ9ljoJSbOvXUdaEhGweu%2F9zxqzGuHRtwTqQTsS%2FuO1%2FRlPT9Kg%2BHWq5ivpCKxWe7SS9YIknUIOafuN%2BHujrSgpQwDCmbzzZXSCBFotdcT%2F3USWxR7YL3VwuTvNdO2QeBjzCn6K8MeBwj1RGv3%2Bs5KipROW9QjJDwV%2Fhk6PibLJU8goTiOEASKEp1vTC8hlQ2PFSCh0k498YDmuutz6bpglqJmTq%2BvgpHIh9HFrx5%2BL6ebGzwo284m2FMH35gSW%2B7Qf0DK%2BT7A2Fs6NEPUYT7hdpFtyU04MGtPjhb0pprn0cpSDdklxn8JZYZFkdd7ougsqQ764QlC4Cg0287eKATC80Zq%2FBjqkAc12AZsWTMOF0qLL4viC9GukbMvGtwnVnvHH6Ws4aSSD184AfeyH7aSr2dySyO26ETgQnqTDHz9D7vo6A4q%2BEGuewPNgB7FShnX3DWQLn6wEu%2Bqm%2F%2F%2BcboSXqTvMBUzJW8MWkQ1Xk90O%2B4g8u5f2qcT3GiDlxnceja6dEsatApM9TbA6eujNBvVnRzPtdkExGiOnHfx%2F%2FkTAxG0I8VSywI%2F%2FX2g9&X-Amz-Signature=e23b5c19b66ee4f8734f2c7443546776be2dc767192d89374a56ffb7d61d2037&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWQBAV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUUEcxV431eYtF9IqzWxSm3oSkHg2f8vVIvyI8p4QIAIhAJ0yvWcCyb8D4YS2imHEuM8Nw6EDGsFcNoAePbxQhG%2FvKv8DCF8QABoMNjM3NDIzMTgzODA1IgyloqneyWRneRuFUVsq3ANsTRMd7hBBBJLbxJWwlewKJ9FCFdZ897UkpNrAljc%2BozBJIti5G3tH0CVCW7LdNGuvqsFVCWalJiYKB4L7Ck%2Fh%2Fec9RmvbdP%2B3aiP7oQA5DV7l9dkoHcWxCe0WQO8ODpkHfwF6JDB0pmIYezl%2FVdDyNyi0%2FMI2gpVTXUTGIBFowdpvTF%2Ftn4fwLJKoUtJV1GWTg6j6oC4lgdau5bJQBhlZh9YMRCk7Lfnnw1mLSdI%2F0E7GZxcDXxWToasIihTKVCichM1V3Akmj33xe%2BS89mRXVda0U1V5eBNbc2dIHFZ9ljoJSbOvXUdaEhGweu%2F9zxqzGuHRtwTqQTsS%2FuO1%2FRlPT9Kg%2BHWq5ivpCKxWe7SS9YIknUIOafuN%2BHujrSgpQwDCmbzzZXSCBFotdcT%2F3USWxR7YL3VwuTvNdO2QeBjzCn6K8MeBwj1RGv3%2Bs5KipROW9QjJDwV%2Fhk6PibLJU8goTiOEASKEp1vTC8hlQ2PFSCh0k498YDmuutz6bpglqJmTq%2BvgpHIh9HFrx5%2BL6ebGzwo284m2FMH35gSW%2B7Qf0DK%2BT7A2Fs6NEPUYT7hdpFtyU04MGtPjhb0pprn0cpSDdklxn8JZYZFkdd7ougsqQ764QlC4Cg0287eKATC80Zq%2FBjqkAc12AZsWTMOF0qLL4viC9GukbMvGtwnVnvHH6Ws4aSSD184AfeyH7aSr2dySyO26ETgQnqTDHz9D7vo6A4q%2BEGuewPNgB7FShnX3DWQLn6wEu%2Bqm%2F%2F%2BcboSXqTvMBUzJW8MWkQ1Xk90O%2B4g8u5f2qcT3GiDlxnceja6dEsatApM9TbA6eujNBvVnRzPtdkExGiOnHfx%2F%2FkTAxG0I8VSywI%2F%2FX2g9&X-Amz-Signature=c32cf9d0cc6454909b05109749d048b33538a012afe3e3d329e3a360fb9c67f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWQBAV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUUEcxV431eYtF9IqzWxSm3oSkHg2f8vVIvyI8p4QIAIhAJ0yvWcCyb8D4YS2imHEuM8Nw6EDGsFcNoAePbxQhG%2FvKv8DCF8QABoMNjM3NDIzMTgzODA1IgyloqneyWRneRuFUVsq3ANsTRMd7hBBBJLbxJWwlewKJ9FCFdZ897UkpNrAljc%2BozBJIti5G3tH0CVCW7LdNGuvqsFVCWalJiYKB4L7Ck%2Fh%2Fec9RmvbdP%2B3aiP7oQA5DV7l9dkoHcWxCe0WQO8ODpkHfwF6JDB0pmIYezl%2FVdDyNyi0%2FMI2gpVTXUTGIBFowdpvTF%2Ftn4fwLJKoUtJV1GWTg6j6oC4lgdau5bJQBhlZh9YMRCk7Lfnnw1mLSdI%2F0E7GZxcDXxWToasIihTKVCichM1V3Akmj33xe%2BS89mRXVda0U1V5eBNbc2dIHFZ9ljoJSbOvXUdaEhGweu%2F9zxqzGuHRtwTqQTsS%2FuO1%2FRlPT9Kg%2BHWq5ivpCKxWe7SS9YIknUIOafuN%2BHujrSgpQwDCmbzzZXSCBFotdcT%2F3USWxR7YL3VwuTvNdO2QeBjzCn6K8MeBwj1RGv3%2Bs5KipROW9QjJDwV%2Fhk6PibLJU8goTiOEASKEp1vTC8hlQ2PFSCh0k498YDmuutz6bpglqJmTq%2BvgpHIh9HFrx5%2BL6ebGzwo284m2FMH35gSW%2B7Qf0DK%2BT7A2Fs6NEPUYT7hdpFtyU04MGtPjhb0pprn0cpSDdklxn8JZYZFkdd7ougsqQ764QlC4Cg0287eKATC80Zq%2FBjqkAc12AZsWTMOF0qLL4viC9GukbMvGtwnVnvHH6Ws4aSSD184AfeyH7aSr2dySyO26ETgQnqTDHz9D7vo6A4q%2BEGuewPNgB7FShnX3DWQLn6wEu%2Bqm%2F%2F%2BcboSXqTvMBUzJW8MWkQ1Xk90O%2B4g8u5f2qcT3GiDlxnceja6dEsatApM9TbA6eujNBvVnRzPtdkExGiOnHfx%2F%2FkTAxG0I8VSywI%2F%2FX2g9&X-Amz-Signature=4f4379b0668d907c682fea5c164fb7eac0577390baa4dd7a76eef0b12c5e69ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWQBAV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUUEcxV431eYtF9IqzWxSm3oSkHg2f8vVIvyI8p4QIAIhAJ0yvWcCyb8D4YS2imHEuM8Nw6EDGsFcNoAePbxQhG%2FvKv8DCF8QABoMNjM3NDIzMTgzODA1IgyloqneyWRneRuFUVsq3ANsTRMd7hBBBJLbxJWwlewKJ9FCFdZ897UkpNrAljc%2BozBJIti5G3tH0CVCW7LdNGuvqsFVCWalJiYKB4L7Ck%2Fh%2Fec9RmvbdP%2B3aiP7oQA5DV7l9dkoHcWxCe0WQO8ODpkHfwF6JDB0pmIYezl%2FVdDyNyi0%2FMI2gpVTXUTGIBFowdpvTF%2Ftn4fwLJKoUtJV1GWTg6j6oC4lgdau5bJQBhlZh9YMRCk7Lfnnw1mLSdI%2F0E7GZxcDXxWToasIihTKVCichM1V3Akmj33xe%2BS89mRXVda0U1V5eBNbc2dIHFZ9ljoJSbOvXUdaEhGweu%2F9zxqzGuHRtwTqQTsS%2FuO1%2FRlPT9Kg%2BHWq5ivpCKxWe7SS9YIknUIOafuN%2BHujrSgpQwDCmbzzZXSCBFotdcT%2F3USWxR7YL3VwuTvNdO2QeBjzCn6K8MeBwj1RGv3%2Bs5KipROW9QjJDwV%2Fhk6PibLJU8goTiOEASKEp1vTC8hlQ2PFSCh0k498YDmuutz6bpglqJmTq%2BvgpHIh9HFrx5%2BL6ebGzwo284m2FMH35gSW%2B7Qf0DK%2BT7A2Fs6NEPUYT7hdpFtyU04MGtPjhb0pprn0cpSDdklxn8JZYZFkdd7ougsqQ764QlC4Cg0287eKATC80Zq%2FBjqkAc12AZsWTMOF0qLL4viC9GukbMvGtwnVnvHH6Ws4aSSD184AfeyH7aSr2dySyO26ETgQnqTDHz9D7vo6A4q%2BEGuewPNgB7FShnX3DWQLn6wEu%2Bqm%2F%2F%2BcboSXqTvMBUzJW8MWkQ1Xk90O%2B4g8u5f2qcT3GiDlxnceja6dEsatApM9TbA6eujNBvVnRzPtdkExGiOnHfx%2F%2FkTAxG0I8VSywI%2F%2FX2g9&X-Amz-Signature=f39091597156795615a7419d6c41aec7c84f1fddd74fc6b9734e9c63b5c90afc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
