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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YO7VI7K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCPYd3PtpQdvqRmWx9X5jXQaoHxbRAdpv4ZXeNKfxDHWwIgHoKErBKYUb0U5%2BN2xxF4%2FH9yo9diCb%2BDWJOYg1yooEkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJLR4a4XkdCBa9A4syrcAxQ0VTtuCtijB6DNb06DspsIIEVbNBm5k64PYi35sU6zSgd7LqQSNoOHpKO7KTQGmuR0zzcmEJDBAsfswRpRHI%2BsEElmO4J1VY%2FrQCKaOCTKbuku05CqK3JZJ5BtX1itO%2FjeNIiSK%2FxbGhipvQh9fUhp%2BKtT4hoCZTGBKeYdFSgCwsGmtw9490XJvoBv04OTvRMBPOF6Mnb4E%2F6EMBgQ9K3mwLGGvmiuJxYXXus5sTRHUQaYJtVkX%2F8wjvPKVLy5xJuXztie3UQ6ZcbL0Z2SiwV2iL6gR9JWAgMAkkyjX0idP8CtzFd5eMXkVh64N3g4ivoY6vbRrVaxvK%2BN9W1VvoH9Fe61OWt1suiAmx2UDyM6XPzGWQ%2FSE5cvz3V3KEzyd9%2B9DCMA7PSyP%2B3iSuNpnYfKSaGi9OsFFqVgw%2BlpiX%2Br9onA53MdZBf2BuvBhu63JZEf6GvBNeVQmp5kUpRF092YNeUQPl3zyBiRNsRh4CNOLSHEEQTayPjz3zN00gS%2FHpKLGjKYyJyvplEFDerfrBEATi1blzzIHRHEC5SG1DynFZ4D79oDjE9dgHRGYpA2uCaTip6MY%2BlvDskViyClAwkBMrIwRgtuHqNEAZ6hZ1itFjSnf7aJYGjXO0reML7RqMAGOqUB4uUIQMKi2pprzsW4Dtz3s8LJpDvmSk7c17ho7eVr3CS59851ligZRGRAyoBQEzyY%2FBmd8xhctLCWhE67L7FX2Le%2FljwW0hrt0yJqVImvarqBeQZW%2Bjem3eJMYaFDhBfkIK1UVhtJQp0mLVEvvSbfiFLd2D9fyOzkVcQkrDZD08y9WJJNtr20cZgJX%2BSNino9JKUOpGHzDE97UDCpLFw8cdKP8Kl0&X-Amz-Signature=11e7ed995b22ddd3a6d052a05423247a1aae3634bef6afb3b864108b99c96352&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YO7VI7K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCPYd3PtpQdvqRmWx9X5jXQaoHxbRAdpv4ZXeNKfxDHWwIgHoKErBKYUb0U5%2BN2xxF4%2FH9yo9diCb%2BDWJOYg1yooEkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJLR4a4XkdCBa9A4syrcAxQ0VTtuCtijB6DNb06DspsIIEVbNBm5k64PYi35sU6zSgd7LqQSNoOHpKO7KTQGmuR0zzcmEJDBAsfswRpRHI%2BsEElmO4J1VY%2FrQCKaOCTKbuku05CqK3JZJ5BtX1itO%2FjeNIiSK%2FxbGhipvQh9fUhp%2BKtT4hoCZTGBKeYdFSgCwsGmtw9490XJvoBv04OTvRMBPOF6Mnb4E%2F6EMBgQ9K3mwLGGvmiuJxYXXus5sTRHUQaYJtVkX%2F8wjvPKVLy5xJuXztie3UQ6ZcbL0Z2SiwV2iL6gR9JWAgMAkkyjX0idP8CtzFd5eMXkVh64N3g4ivoY6vbRrVaxvK%2BN9W1VvoH9Fe61OWt1suiAmx2UDyM6XPzGWQ%2FSE5cvz3V3KEzyd9%2B9DCMA7PSyP%2B3iSuNpnYfKSaGi9OsFFqVgw%2BlpiX%2Br9onA53MdZBf2BuvBhu63JZEf6GvBNeVQmp5kUpRF092YNeUQPl3zyBiRNsRh4CNOLSHEEQTayPjz3zN00gS%2FHpKLGjKYyJyvplEFDerfrBEATi1blzzIHRHEC5SG1DynFZ4D79oDjE9dgHRGYpA2uCaTip6MY%2BlvDskViyClAwkBMrIwRgtuHqNEAZ6hZ1itFjSnf7aJYGjXO0reML7RqMAGOqUB4uUIQMKi2pprzsW4Dtz3s8LJpDvmSk7c17ho7eVr3CS59851ligZRGRAyoBQEzyY%2FBmd8xhctLCWhE67L7FX2Le%2FljwW0hrt0yJqVImvarqBeQZW%2Bjem3eJMYaFDhBfkIK1UVhtJQp0mLVEvvSbfiFLd2D9fyOzkVcQkrDZD08y9WJJNtr20cZgJX%2BSNino9JKUOpGHzDE97UDCpLFw8cdKP8Kl0&X-Amz-Signature=a02a2f0586d38123f0e47a85551611a6c402e07a6e41c34d4400ba4acbd895c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YO7VI7K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCPYd3PtpQdvqRmWx9X5jXQaoHxbRAdpv4ZXeNKfxDHWwIgHoKErBKYUb0U5%2BN2xxF4%2FH9yo9diCb%2BDWJOYg1yooEkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJLR4a4XkdCBa9A4syrcAxQ0VTtuCtijB6DNb06DspsIIEVbNBm5k64PYi35sU6zSgd7LqQSNoOHpKO7KTQGmuR0zzcmEJDBAsfswRpRHI%2BsEElmO4J1VY%2FrQCKaOCTKbuku05CqK3JZJ5BtX1itO%2FjeNIiSK%2FxbGhipvQh9fUhp%2BKtT4hoCZTGBKeYdFSgCwsGmtw9490XJvoBv04OTvRMBPOF6Mnb4E%2F6EMBgQ9K3mwLGGvmiuJxYXXus5sTRHUQaYJtVkX%2F8wjvPKVLy5xJuXztie3UQ6ZcbL0Z2SiwV2iL6gR9JWAgMAkkyjX0idP8CtzFd5eMXkVh64N3g4ivoY6vbRrVaxvK%2BN9W1VvoH9Fe61OWt1suiAmx2UDyM6XPzGWQ%2FSE5cvz3V3KEzyd9%2B9DCMA7PSyP%2B3iSuNpnYfKSaGi9OsFFqVgw%2BlpiX%2Br9onA53MdZBf2BuvBhu63JZEf6GvBNeVQmp5kUpRF092YNeUQPl3zyBiRNsRh4CNOLSHEEQTayPjz3zN00gS%2FHpKLGjKYyJyvplEFDerfrBEATi1blzzIHRHEC5SG1DynFZ4D79oDjE9dgHRGYpA2uCaTip6MY%2BlvDskViyClAwkBMrIwRgtuHqNEAZ6hZ1itFjSnf7aJYGjXO0reML7RqMAGOqUB4uUIQMKi2pprzsW4Dtz3s8LJpDvmSk7c17ho7eVr3CS59851ligZRGRAyoBQEzyY%2FBmd8xhctLCWhE67L7FX2Le%2FljwW0hrt0yJqVImvarqBeQZW%2Bjem3eJMYaFDhBfkIK1UVhtJQp0mLVEvvSbfiFLd2D9fyOzkVcQkrDZD08y9WJJNtr20cZgJX%2BSNino9JKUOpGHzDE97UDCpLFw8cdKP8Kl0&X-Amz-Signature=40e869c55fe640e2c2489d56095f8dacb67e2333cc13865f17b43b94a88c2c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YO7VI7K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCPYd3PtpQdvqRmWx9X5jXQaoHxbRAdpv4ZXeNKfxDHWwIgHoKErBKYUb0U5%2BN2xxF4%2FH9yo9diCb%2BDWJOYg1yooEkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJLR4a4XkdCBa9A4syrcAxQ0VTtuCtijB6DNb06DspsIIEVbNBm5k64PYi35sU6zSgd7LqQSNoOHpKO7KTQGmuR0zzcmEJDBAsfswRpRHI%2BsEElmO4J1VY%2FrQCKaOCTKbuku05CqK3JZJ5BtX1itO%2FjeNIiSK%2FxbGhipvQh9fUhp%2BKtT4hoCZTGBKeYdFSgCwsGmtw9490XJvoBv04OTvRMBPOF6Mnb4E%2F6EMBgQ9K3mwLGGvmiuJxYXXus5sTRHUQaYJtVkX%2F8wjvPKVLy5xJuXztie3UQ6ZcbL0Z2SiwV2iL6gR9JWAgMAkkyjX0idP8CtzFd5eMXkVh64N3g4ivoY6vbRrVaxvK%2BN9W1VvoH9Fe61OWt1suiAmx2UDyM6XPzGWQ%2FSE5cvz3V3KEzyd9%2B9DCMA7PSyP%2B3iSuNpnYfKSaGi9OsFFqVgw%2BlpiX%2Br9onA53MdZBf2BuvBhu63JZEf6GvBNeVQmp5kUpRF092YNeUQPl3zyBiRNsRh4CNOLSHEEQTayPjz3zN00gS%2FHpKLGjKYyJyvplEFDerfrBEATi1blzzIHRHEC5SG1DynFZ4D79oDjE9dgHRGYpA2uCaTip6MY%2BlvDskViyClAwkBMrIwRgtuHqNEAZ6hZ1itFjSnf7aJYGjXO0reML7RqMAGOqUB4uUIQMKi2pprzsW4Dtz3s8LJpDvmSk7c17ho7eVr3CS59851ligZRGRAyoBQEzyY%2FBmd8xhctLCWhE67L7FX2Le%2FljwW0hrt0yJqVImvarqBeQZW%2Bjem3eJMYaFDhBfkIK1UVhtJQp0mLVEvvSbfiFLd2D9fyOzkVcQkrDZD08y9WJJNtr20cZgJX%2BSNino9JKUOpGHzDE97UDCpLFw8cdKP8Kl0&X-Amz-Signature=8c7e900e6dc403512f15164d27f420b66741aaf08bc28eedf3b6fc26f7323859&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YO7VI7K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCPYd3PtpQdvqRmWx9X5jXQaoHxbRAdpv4ZXeNKfxDHWwIgHoKErBKYUb0U5%2BN2xxF4%2FH9yo9diCb%2BDWJOYg1yooEkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJLR4a4XkdCBa9A4syrcAxQ0VTtuCtijB6DNb06DspsIIEVbNBm5k64PYi35sU6zSgd7LqQSNoOHpKO7KTQGmuR0zzcmEJDBAsfswRpRHI%2BsEElmO4J1VY%2FrQCKaOCTKbuku05CqK3JZJ5BtX1itO%2FjeNIiSK%2FxbGhipvQh9fUhp%2BKtT4hoCZTGBKeYdFSgCwsGmtw9490XJvoBv04OTvRMBPOF6Mnb4E%2F6EMBgQ9K3mwLGGvmiuJxYXXus5sTRHUQaYJtVkX%2F8wjvPKVLy5xJuXztie3UQ6ZcbL0Z2SiwV2iL6gR9JWAgMAkkyjX0idP8CtzFd5eMXkVh64N3g4ivoY6vbRrVaxvK%2BN9W1VvoH9Fe61OWt1suiAmx2UDyM6XPzGWQ%2FSE5cvz3V3KEzyd9%2B9DCMA7PSyP%2B3iSuNpnYfKSaGi9OsFFqVgw%2BlpiX%2Br9onA53MdZBf2BuvBhu63JZEf6GvBNeVQmp5kUpRF092YNeUQPl3zyBiRNsRh4CNOLSHEEQTayPjz3zN00gS%2FHpKLGjKYyJyvplEFDerfrBEATi1blzzIHRHEC5SG1DynFZ4D79oDjE9dgHRGYpA2uCaTip6MY%2BlvDskViyClAwkBMrIwRgtuHqNEAZ6hZ1itFjSnf7aJYGjXO0reML7RqMAGOqUB4uUIQMKi2pprzsW4Dtz3s8LJpDvmSk7c17ho7eVr3CS59851ligZRGRAyoBQEzyY%2FBmd8xhctLCWhE67L7FX2Le%2FljwW0hrt0yJqVImvarqBeQZW%2Bjem3eJMYaFDhBfkIK1UVhtJQp0mLVEvvSbfiFLd2D9fyOzkVcQkrDZD08y9WJJNtr20cZgJX%2BSNino9JKUOpGHzDE97UDCpLFw8cdKP8Kl0&X-Amz-Signature=998680729f80f23f868d7ac045883457b061004a28d7b619a33b308e59a1839f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YO7VI7K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCPYd3PtpQdvqRmWx9X5jXQaoHxbRAdpv4ZXeNKfxDHWwIgHoKErBKYUb0U5%2BN2xxF4%2FH9yo9diCb%2BDWJOYg1yooEkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJLR4a4XkdCBa9A4syrcAxQ0VTtuCtijB6DNb06DspsIIEVbNBm5k64PYi35sU6zSgd7LqQSNoOHpKO7KTQGmuR0zzcmEJDBAsfswRpRHI%2BsEElmO4J1VY%2FrQCKaOCTKbuku05CqK3JZJ5BtX1itO%2FjeNIiSK%2FxbGhipvQh9fUhp%2BKtT4hoCZTGBKeYdFSgCwsGmtw9490XJvoBv04OTvRMBPOF6Mnb4E%2F6EMBgQ9K3mwLGGvmiuJxYXXus5sTRHUQaYJtVkX%2F8wjvPKVLy5xJuXztie3UQ6ZcbL0Z2SiwV2iL6gR9JWAgMAkkyjX0idP8CtzFd5eMXkVh64N3g4ivoY6vbRrVaxvK%2BN9W1VvoH9Fe61OWt1suiAmx2UDyM6XPzGWQ%2FSE5cvz3V3KEzyd9%2B9DCMA7PSyP%2B3iSuNpnYfKSaGi9OsFFqVgw%2BlpiX%2Br9onA53MdZBf2BuvBhu63JZEf6GvBNeVQmp5kUpRF092YNeUQPl3zyBiRNsRh4CNOLSHEEQTayPjz3zN00gS%2FHpKLGjKYyJyvplEFDerfrBEATi1blzzIHRHEC5SG1DynFZ4D79oDjE9dgHRGYpA2uCaTip6MY%2BlvDskViyClAwkBMrIwRgtuHqNEAZ6hZ1itFjSnf7aJYGjXO0reML7RqMAGOqUB4uUIQMKi2pprzsW4Dtz3s8LJpDvmSk7c17ho7eVr3CS59851ligZRGRAyoBQEzyY%2FBmd8xhctLCWhE67L7FX2Le%2FljwW0hrt0yJqVImvarqBeQZW%2Bjem3eJMYaFDhBfkIK1UVhtJQp0mLVEvvSbfiFLd2D9fyOzkVcQkrDZD08y9WJJNtr20cZgJX%2BSNino9JKUOpGHzDE97UDCpLFw8cdKP8Kl0&X-Amz-Signature=c1a30cac0f9a3e878d66f63bf5180f1342ef917b607b76547ad1244b082bd154&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YO7VI7K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCPYd3PtpQdvqRmWx9X5jXQaoHxbRAdpv4ZXeNKfxDHWwIgHoKErBKYUb0U5%2BN2xxF4%2FH9yo9diCb%2BDWJOYg1yooEkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJLR4a4XkdCBa9A4syrcAxQ0VTtuCtijB6DNb06DspsIIEVbNBm5k64PYi35sU6zSgd7LqQSNoOHpKO7KTQGmuR0zzcmEJDBAsfswRpRHI%2BsEElmO4J1VY%2FrQCKaOCTKbuku05CqK3JZJ5BtX1itO%2FjeNIiSK%2FxbGhipvQh9fUhp%2BKtT4hoCZTGBKeYdFSgCwsGmtw9490XJvoBv04OTvRMBPOF6Mnb4E%2F6EMBgQ9K3mwLGGvmiuJxYXXus5sTRHUQaYJtVkX%2F8wjvPKVLy5xJuXztie3UQ6ZcbL0Z2SiwV2iL6gR9JWAgMAkkyjX0idP8CtzFd5eMXkVh64N3g4ivoY6vbRrVaxvK%2BN9W1VvoH9Fe61OWt1suiAmx2UDyM6XPzGWQ%2FSE5cvz3V3KEzyd9%2B9DCMA7PSyP%2B3iSuNpnYfKSaGi9OsFFqVgw%2BlpiX%2Br9onA53MdZBf2BuvBhu63JZEf6GvBNeVQmp5kUpRF092YNeUQPl3zyBiRNsRh4CNOLSHEEQTayPjz3zN00gS%2FHpKLGjKYyJyvplEFDerfrBEATi1blzzIHRHEC5SG1DynFZ4D79oDjE9dgHRGYpA2uCaTip6MY%2BlvDskViyClAwkBMrIwRgtuHqNEAZ6hZ1itFjSnf7aJYGjXO0reML7RqMAGOqUB4uUIQMKi2pprzsW4Dtz3s8LJpDvmSk7c17ho7eVr3CS59851ligZRGRAyoBQEzyY%2FBmd8xhctLCWhE67L7FX2Le%2FljwW0hrt0yJqVImvarqBeQZW%2Bjem3eJMYaFDhBfkIK1UVhtJQp0mLVEvvSbfiFLd2D9fyOzkVcQkrDZD08y9WJJNtr20cZgJX%2BSNino9JKUOpGHzDE97UDCpLFw8cdKP8Kl0&X-Amz-Signature=a1e31929a0cd5b4d35a27e9ff96181ca4207c0f8405103833da84ea868e5e88b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YO7VI7K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCPYd3PtpQdvqRmWx9X5jXQaoHxbRAdpv4ZXeNKfxDHWwIgHoKErBKYUb0U5%2BN2xxF4%2FH9yo9diCb%2BDWJOYg1yooEkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJLR4a4XkdCBa9A4syrcAxQ0VTtuCtijB6DNb06DspsIIEVbNBm5k64PYi35sU6zSgd7LqQSNoOHpKO7KTQGmuR0zzcmEJDBAsfswRpRHI%2BsEElmO4J1VY%2FrQCKaOCTKbuku05CqK3JZJ5BtX1itO%2FjeNIiSK%2FxbGhipvQh9fUhp%2BKtT4hoCZTGBKeYdFSgCwsGmtw9490XJvoBv04OTvRMBPOF6Mnb4E%2F6EMBgQ9K3mwLGGvmiuJxYXXus5sTRHUQaYJtVkX%2F8wjvPKVLy5xJuXztie3UQ6ZcbL0Z2SiwV2iL6gR9JWAgMAkkyjX0idP8CtzFd5eMXkVh64N3g4ivoY6vbRrVaxvK%2BN9W1VvoH9Fe61OWt1suiAmx2UDyM6XPzGWQ%2FSE5cvz3V3KEzyd9%2B9DCMA7PSyP%2B3iSuNpnYfKSaGi9OsFFqVgw%2BlpiX%2Br9onA53MdZBf2BuvBhu63JZEf6GvBNeVQmp5kUpRF092YNeUQPl3zyBiRNsRh4CNOLSHEEQTayPjz3zN00gS%2FHpKLGjKYyJyvplEFDerfrBEATi1blzzIHRHEC5SG1DynFZ4D79oDjE9dgHRGYpA2uCaTip6MY%2BlvDskViyClAwkBMrIwRgtuHqNEAZ6hZ1itFjSnf7aJYGjXO0reML7RqMAGOqUB4uUIQMKi2pprzsW4Dtz3s8LJpDvmSk7c17ho7eVr3CS59851ligZRGRAyoBQEzyY%2FBmd8xhctLCWhE67L7FX2Le%2FljwW0hrt0yJqVImvarqBeQZW%2Bjem3eJMYaFDhBfkIK1UVhtJQp0mLVEvvSbfiFLd2D9fyOzkVcQkrDZD08y9WJJNtr20cZgJX%2BSNino9JKUOpGHzDE97UDCpLFw8cdKP8Kl0&X-Amz-Signature=bcee5ba150685107267b16ee14e600637143e155b57b07b121a7555d0223f8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
