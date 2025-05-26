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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPPWVI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChbqrK2RpT0DNnNXWtpHcV0zQkQ5Wf%2FjLS4AiiqiMX%2BgIhAMWa8KOcODVdWjrFm7flN92Z0kJZTnouQGxSyHJPOKpBKv8DCDsQABoMNjM3NDIzMTgzODA1IgypAMbouSaPny9aXxkq3APfMDYoql5%2FSwq0tcmvdRpCzzoK2ZufOrl5YWEpoggDqBBHTCs6b6aClqxKAwaLqtIcXYP98phYri29E1B4zRsRJwJv3DllhedzAZPHHUksji7uY0rq5IzcCkRR%2B%2BNnM42%2FVHUW56%2Fr7lkcKK%2Bqm5OuxClW19Smy0cd7C1tzUGFbmYjuUt7zSg5sSlRD1%2BReqoPyp5g9sWT6CN1FpjeiKeZ063NzRaspgj6uP%2Fq73UjEPLBYK2uCKNS95l365HqnPFd%2FQH84gFArx4HZkee1kGrwBEEe9MayzUCAexDZ4WzUFS4APWGidIzbBC7%2FaDq%2FDChGmdkylDBiQ3bcwrbXEb%2FKn%2BMnwO6ISSp5%2Fu%2FClVw%2FbpAos0Zo1dJf9EHH45cVbhlIbFVuXLcD9UAV20juNetFxqV7o5duSkUW%2FQgF5TkTjOGgsakpjezVXTMxTjqE4a4e%2FcvhweEsfD%2Fe6LdVmiwvMwLoEYAppdiOjQ7nUZFyVFuPPYiqvUQ11MGAyVdgbbBALnfymOIemTcoMOMEVOw1PC8MCwGXh5pcE9Z9ET7z8l0K9jg%2FW6fQnnzLqDrBBWKYbidTpJIsdQRsjiXhPtq02XR9igbaTU%2FUql3jN9afM10mwrg07T9dBNNGzDrns%2FBBjqkAXZ2W4uPiewbqErxuR1C9f6qxXjF1%2BXp9uwD%2FSAwpzDQ9wJv5ueCXWXkEnF2cOuJDoNErkDjuZAq4LkXWRWZ7i%2BwLSZJi1eR1DCZCMwrKG8glTkoin0uypsoYlNEomvxYiKq9aTS%2BpkF69bvFS3Ka4cRy1USSLdXW84DKJ7S8we2HrOtYWwRk3D2GI0ro8FebnT4U9m77R18wf4ImvCN3kfCM9Ts&X-Amz-Signature=f10b3e470c842a8133e9047f69cf3615db6e25bcbddc8158e81d9ff595deec7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPPWVI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChbqrK2RpT0DNnNXWtpHcV0zQkQ5Wf%2FjLS4AiiqiMX%2BgIhAMWa8KOcODVdWjrFm7flN92Z0kJZTnouQGxSyHJPOKpBKv8DCDsQABoMNjM3NDIzMTgzODA1IgypAMbouSaPny9aXxkq3APfMDYoql5%2FSwq0tcmvdRpCzzoK2ZufOrl5YWEpoggDqBBHTCs6b6aClqxKAwaLqtIcXYP98phYri29E1B4zRsRJwJv3DllhedzAZPHHUksji7uY0rq5IzcCkRR%2B%2BNnM42%2FVHUW56%2Fr7lkcKK%2Bqm5OuxClW19Smy0cd7C1tzUGFbmYjuUt7zSg5sSlRD1%2BReqoPyp5g9sWT6CN1FpjeiKeZ063NzRaspgj6uP%2Fq73UjEPLBYK2uCKNS95l365HqnPFd%2FQH84gFArx4HZkee1kGrwBEEe9MayzUCAexDZ4WzUFS4APWGidIzbBC7%2FaDq%2FDChGmdkylDBiQ3bcwrbXEb%2FKn%2BMnwO6ISSp5%2Fu%2FClVw%2FbpAos0Zo1dJf9EHH45cVbhlIbFVuXLcD9UAV20juNetFxqV7o5duSkUW%2FQgF5TkTjOGgsakpjezVXTMxTjqE4a4e%2FcvhweEsfD%2Fe6LdVmiwvMwLoEYAppdiOjQ7nUZFyVFuPPYiqvUQ11MGAyVdgbbBALnfymOIemTcoMOMEVOw1PC8MCwGXh5pcE9Z9ET7z8l0K9jg%2FW6fQnnzLqDrBBWKYbidTpJIsdQRsjiXhPtq02XR9igbaTU%2FUql3jN9afM10mwrg07T9dBNNGzDrns%2FBBjqkAXZ2W4uPiewbqErxuR1C9f6qxXjF1%2BXp9uwD%2FSAwpzDQ9wJv5ueCXWXkEnF2cOuJDoNErkDjuZAq4LkXWRWZ7i%2BwLSZJi1eR1DCZCMwrKG8glTkoin0uypsoYlNEomvxYiKq9aTS%2BpkF69bvFS3Ka4cRy1USSLdXW84DKJ7S8we2HrOtYWwRk3D2GI0ro8FebnT4U9m77R18wf4ImvCN3kfCM9Ts&X-Amz-Signature=798b1ee3aa0df080b4cd1cb2d2af89cef63a554287218828c4afd6730025742d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPPWVI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChbqrK2RpT0DNnNXWtpHcV0zQkQ5Wf%2FjLS4AiiqiMX%2BgIhAMWa8KOcODVdWjrFm7flN92Z0kJZTnouQGxSyHJPOKpBKv8DCDsQABoMNjM3NDIzMTgzODA1IgypAMbouSaPny9aXxkq3APfMDYoql5%2FSwq0tcmvdRpCzzoK2ZufOrl5YWEpoggDqBBHTCs6b6aClqxKAwaLqtIcXYP98phYri29E1B4zRsRJwJv3DllhedzAZPHHUksji7uY0rq5IzcCkRR%2B%2BNnM42%2FVHUW56%2Fr7lkcKK%2Bqm5OuxClW19Smy0cd7C1tzUGFbmYjuUt7zSg5sSlRD1%2BReqoPyp5g9sWT6CN1FpjeiKeZ063NzRaspgj6uP%2Fq73UjEPLBYK2uCKNS95l365HqnPFd%2FQH84gFArx4HZkee1kGrwBEEe9MayzUCAexDZ4WzUFS4APWGidIzbBC7%2FaDq%2FDChGmdkylDBiQ3bcwrbXEb%2FKn%2BMnwO6ISSp5%2Fu%2FClVw%2FbpAos0Zo1dJf9EHH45cVbhlIbFVuXLcD9UAV20juNetFxqV7o5duSkUW%2FQgF5TkTjOGgsakpjezVXTMxTjqE4a4e%2FcvhweEsfD%2Fe6LdVmiwvMwLoEYAppdiOjQ7nUZFyVFuPPYiqvUQ11MGAyVdgbbBALnfymOIemTcoMOMEVOw1PC8MCwGXh5pcE9Z9ET7z8l0K9jg%2FW6fQnnzLqDrBBWKYbidTpJIsdQRsjiXhPtq02XR9igbaTU%2FUql3jN9afM10mwrg07T9dBNNGzDrns%2FBBjqkAXZ2W4uPiewbqErxuR1C9f6qxXjF1%2BXp9uwD%2FSAwpzDQ9wJv5ueCXWXkEnF2cOuJDoNErkDjuZAq4LkXWRWZ7i%2BwLSZJi1eR1DCZCMwrKG8glTkoin0uypsoYlNEomvxYiKq9aTS%2BpkF69bvFS3Ka4cRy1USSLdXW84DKJ7S8we2HrOtYWwRk3D2GI0ro8FebnT4U9m77R18wf4ImvCN3kfCM9Ts&X-Amz-Signature=25fd93451dd02d71e0fe601a76d7abc713d1464ae17d9f5e98da5a5c3ccfbaaa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPPWVI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChbqrK2RpT0DNnNXWtpHcV0zQkQ5Wf%2FjLS4AiiqiMX%2BgIhAMWa8KOcODVdWjrFm7flN92Z0kJZTnouQGxSyHJPOKpBKv8DCDsQABoMNjM3NDIzMTgzODA1IgypAMbouSaPny9aXxkq3APfMDYoql5%2FSwq0tcmvdRpCzzoK2ZufOrl5YWEpoggDqBBHTCs6b6aClqxKAwaLqtIcXYP98phYri29E1B4zRsRJwJv3DllhedzAZPHHUksji7uY0rq5IzcCkRR%2B%2BNnM42%2FVHUW56%2Fr7lkcKK%2Bqm5OuxClW19Smy0cd7C1tzUGFbmYjuUt7zSg5sSlRD1%2BReqoPyp5g9sWT6CN1FpjeiKeZ063NzRaspgj6uP%2Fq73UjEPLBYK2uCKNS95l365HqnPFd%2FQH84gFArx4HZkee1kGrwBEEe9MayzUCAexDZ4WzUFS4APWGidIzbBC7%2FaDq%2FDChGmdkylDBiQ3bcwrbXEb%2FKn%2BMnwO6ISSp5%2Fu%2FClVw%2FbpAos0Zo1dJf9EHH45cVbhlIbFVuXLcD9UAV20juNetFxqV7o5duSkUW%2FQgF5TkTjOGgsakpjezVXTMxTjqE4a4e%2FcvhweEsfD%2Fe6LdVmiwvMwLoEYAppdiOjQ7nUZFyVFuPPYiqvUQ11MGAyVdgbbBALnfymOIemTcoMOMEVOw1PC8MCwGXh5pcE9Z9ET7z8l0K9jg%2FW6fQnnzLqDrBBWKYbidTpJIsdQRsjiXhPtq02XR9igbaTU%2FUql3jN9afM10mwrg07T9dBNNGzDrns%2FBBjqkAXZ2W4uPiewbqErxuR1C9f6qxXjF1%2BXp9uwD%2FSAwpzDQ9wJv5ueCXWXkEnF2cOuJDoNErkDjuZAq4LkXWRWZ7i%2BwLSZJi1eR1DCZCMwrKG8glTkoin0uypsoYlNEomvxYiKq9aTS%2BpkF69bvFS3Ka4cRy1USSLdXW84DKJ7S8we2HrOtYWwRk3D2GI0ro8FebnT4U9m77R18wf4ImvCN3kfCM9Ts&X-Amz-Signature=ade53a2283f1824c5d3ee33aa71fd25c258cdddcb36a05cf5f0403a971e79ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPPWVI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChbqrK2RpT0DNnNXWtpHcV0zQkQ5Wf%2FjLS4AiiqiMX%2BgIhAMWa8KOcODVdWjrFm7flN92Z0kJZTnouQGxSyHJPOKpBKv8DCDsQABoMNjM3NDIzMTgzODA1IgypAMbouSaPny9aXxkq3APfMDYoql5%2FSwq0tcmvdRpCzzoK2ZufOrl5YWEpoggDqBBHTCs6b6aClqxKAwaLqtIcXYP98phYri29E1B4zRsRJwJv3DllhedzAZPHHUksji7uY0rq5IzcCkRR%2B%2BNnM42%2FVHUW56%2Fr7lkcKK%2Bqm5OuxClW19Smy0cd7C1tzUGFbmYjuUt7zSg5sSlRD1%2BReqoPyp5g9sWT6CN1FpjeiKeZ063NzRaspgj6uP%2Fq73UjEPLBYK2uCKNS95l365HqnPFd%2FQH84gFArx4HZkee1kGrwBEEe9MayzUCAexDZ4WzUFS4APWGidIzbBC7%2FaDq%2FDChGmdkylDBiQ3bcwrbXEb%2FKn%2BMnwO6ISSp5%2Fu%2FClVw%2FbpAos0Zo1dJf9EHH45cVbhlIbFVuXLcD9UAV20juNetFxqV7o5duSkUW%2FQgF5TkTjOGgsakpjezVXTMxTjqE4a4e%2FcvhweEsfD%2Fe6LdVmiwvMwLoEYAppdiOjQ7nUZFyVFuPPYiqvUQ11MGAyVdgbbBALnfymOIemTcoMOMEVOw1PC8MCwGXh5pcE9Z9ET7z8l0K9jg%2FW6fQnnzLqDrBBWKYbidTpJIsdQRsjiXhPtq02XR9igbaTU%2FUql3jN9afM10mwrg07T9dBNNGzDrns%2FBBjqkAXZ2W4uPiewbqErxuR1C9f6qxXjF1%2BXp9uwD%2FSAwpzDQ9wJv5ueCXWXkEnF2cOuJDoNErkDjuZAq4LkXWRWZ7i%2BwLSZJi1eR1DCZCMwrKG8glTkoin0uypsoYlNEomvxYiKq9aTS%2BpkF69bvFS3Ka4cRy1USSLdXW84DKJ7S8we2HrOtYWwRk3D2GI0ro8FebnT4U9m77R18wf4ImvCN3kfCM9Ts&X-Amz-Signature=51ddfdbfe62858acaf90631ff0219372cd8f61e2dbe08b53e2a028abce48840f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPPWVI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChbqrK2RpT0DNnNXWtpHcV0zQkQ5Wf%2FjLS4AiiqiMX%2BgIhAMWa8KOcODVdWjrFm7flN92Z0kJZTnouQGxSyHJPOKpBKv8DCDsQABoMNjM3NDIzMTgzODA1IgypAMbouSaPny9aXxkq3APfMDYoql5%2FSwq0tcmvdRpCzzoK2ZufOrl5YWEpoggDqBBHTCs6b6aClqxKAwaLqtIcXYP98phYri29E1B4zRsRJwJv3DllhedzAZPHHUksji7uY0rq5IzcCkRR%2B%2BNnM42%2FVHUW56%2Fr7lkcKK%2Bqm5OuxClW19Smy0cd7C1tzUGFbmYjuUt7zSg5sSlRD1%2BReqoPyp5g9sWT6CN1FpjeiKeZ063NzRaspgj6uP%2Fq73UjEPLBYK2uCKNS95l365HqnPFd%2FQH84gFArx4HZkee1kGrwBEEe9MayzUCAexDZ4WzUFS4APWGidIzbBC7%2FaDq%2FDChGmdkylDBiQ3bcwrbXEb%2FKn%2BMnwO6ISSp5%2Fu%2FClVw%2FbpAos0Zo1dJf9EHH45cVbhlIbFVuXLcD9UAV20juNetFxqV7o5duSkUW%2FQgF5TkTjOGgsakpjezVXTMxTjqE4a4e%2FcvhweEsfD%2Fe6LdVmiwvMwLoEYAppdiOjQ7nUZFyVFuPPYiqvUQ11MGAyVdgbbBALnfymOIemTcoMOMEVOw1PC8MCwGXh5pcE9Z9ET7z8l0K9jg%2FW6fQnnzLqDrBBWKYbidTpJIsdQRsjiXhPtq02XR9igbaTU%2FUql3jN9afM10mwrg07T9dBNNGzDrns%2FBBjqkAXZ2W4uPiewbqErxuR1C9f6qxXjF1%2BXp9uwD%2FSAwpzDQ9wJv5ueCXWXkEnF2cOuJDoNErkDjuZAq4LkXWRWZ7i%2BwLSZJi1eR1DCZCMwrKG8glTkoin0uypsoYlNEomvxYiKq9aTS%2BpkF69bvFS3Ka4cRy1USSLdXW84DKJ7S8we2HrOtYWwRk3D2GI0ro8FebnT4U9m77R18wf4ImvCN3kfCM9Ts&X-Amz-Signature=4c0db6c617592f0fe01ddbeafb26be01b2903899fe8ee8b958b9edfc5a81c102&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPPWVI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChbqrK2RpT0DNnNXWtpHcV0zQkQ5Wf%2FjLS4AiiqiMX%2BgIhAMWa8KOcODVdWjrFm7flN92Z0kJZTnouQGxSyHJPOKpBKv8DCDsQABoMNjM3NDIzMTgzODA1IgypAMbouSaPny9aXxkq3APfMDYoql5%2FSwq0tcmvdRpCzzoK2ZufOrl5YWEpoggDqBBHTCs6b6aClqxKAwaLqtIcXYP98phYri29E1B4zRsRJwJv3DllhedzAZPHHUksji7uY0rq5IzcCkRR%2B%2BNnM42%2FVHUW56%2Fr7lkcKK%2Bqm5OuxClW19Smy0cd7C1tzUGFbmYjuUt7zSg5sSlRD1%2BReqoPyp5g9sWT6CN1FpjeiKeZ063NzRaspgj6uP%2Fq73UjEPLBYK2uCKNS95l365HqnPFd%2FQH84gFArx4HZkee1kGrwBEEe9MayzUCAexDZ4WzUFS4APWGidIzbBC7%2FaDq%2FDChGmdkylDBiQ3bcwrbXEb%2FKn%2BMnwO6ISSp5%2Fu%2FClVw%2FbpAos0Zo1dJf9EHH45cVbhlIbFVuXLcD9UAV20juNetFxqV7o5duSkUW%2FQgF5TkTjOGgsakpjezVXTMxTjqE4a4e%2FcvhweEsfD%2Fe6LdVmiwvMwLoEYAppdiOjQ7nUZFyVFuPPYiqvUQ11MGAyVdgbbBALnfymOIemTcoMOMEVOw1PC8MCwGXh5pcE9Z9ET7z8l0K9jg%2FW6fQnnzLqDrBBWKYbidTpJIsdQRsjiXhPtq02XR9igbaTU%2FUql3jN9afM10mwrg07T9dBNNGzDrns%2FBBjqkAXZ2W4uPiewbqErxuR1C9f6qxXjF1%2BXp9uwD%2FSAwpzDQ9wJv5ueCXWXkEnF2cOuJDoNErkDjuZAq4LkXWRWZ7i%2BwLSZJi1eR1DCZCMwrKG8glTkoin0uypsoYlNEomvxYiKq9aTS%2BpkF69bvFS3Ka4cRy1USSLdXW84DKJ7S8we2HrOtYWwRk3D2GI0ro8FebnT4U9m77R18wf4ImvCN3kfCM9Ts&X-Amz-Signature=287519e0d20cbfb155c42262fb9f0acd8cecf0ca1ed038c248f87f60dc04f32b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPPWVI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChbqrK2RpT0DNnNXWtpHcV0zQkQ5Wf%2FjLS4AiiqiMX%2BgIhAMWa8KOcODVdWjrFm7flN92Z0kJZTnouQGxSyHJPOKpBKv8DCDsQABoMNjM3NDIzMTgzODA1IgypAMbouSaPny9aXxkq3APfMDYoql5%2FSwq0tcmvdRpCzzoK2ZufOrl5YWEpoggDqBBHTCs6b6aClqxKAwaLqtIcXYP98phYri29E1B4zRsRJwJv3DllhedzAZPHHUksji7uY0rq5IzcCkRR%2B%2BNnM42%2FVHUW56%2Fr7lkcKK%2Bqm5OuxClW19Smy0cd7C1tzUGFbmYjuUt7zSg5sSlRD1%2BReqoPyp5g9sWT6CN1FpjeiKeZ063NzRaspgj6uP%2Fq73UjEPLBYK2uCKNS95l365HqnPFd%2FQH84gFArx4HZkee1kGrwBEEe9MayzUCAexDZ4WzUFS4APWGidIzbBC7%2FaDq%2FDChGmdkylDBiQ3bcwrbXEb%2FKn%2BMnwO6ISSp5%2Fu%2FClVw%2FbpAos0Zo1dJf9EHH45cVbhlIbFVuXLcD9UAV20juNetFxqV7o5duSkUW%2FQgF5TkTjOGgsakpjezVXTMxTjqE4a4e%2FcvhweEsfD%2Fe6LdVmiwvMwLoEYAppdiOjQ7nUZFyVFuPPYiqvUQ11MGAyVdgbbBALnfymOIemTcoMOMEVOw1PC8MCwGXh5pcE9Z9ET7z8l0K9jg%2FW6fQnnzLqDrBBWKYbidTpJIsdQRsjiXhPtq02XR9igbaTU%2FUql3jN9afM10mwrg07T9dBNNGzDrns%2FBBjqkAXZ2W4uPiewbqErxuR1C9f6qxXjF1%2BXp9uwD%2FSAwpzDQ9wJv5ueCXWXkEnF2cOuJDoNErkDjuZAq4LkXWRWZ7i%2BwLSZJi1eR1DCZCMwrKG8glTkoin0uypsoYlNEomvxYiKq9aTS%2BpkF69bvFS3Ka4cRy1USSLdXW84DKJ7S8we2HrOtYWwRk3D2GI0ro8FebnT4U9m77R18wf4ImvCN3kfCM9Ts&X-Amz-Signature=ffad8849505770374cc2b8896157eb7e9a680daac2b28228dddc6585ca62d668&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
