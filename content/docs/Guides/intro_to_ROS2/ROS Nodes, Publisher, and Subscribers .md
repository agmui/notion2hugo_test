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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIC3WKA7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeSO4k8hUUKYLVZRefHe%2FBC08bZbi28rfBYjfJvjsPyAIhALVFXoUG%2B%2Bmx7ctpJpqxrE7xJjmiGlzQ8X84pT0z9i8oKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUJxNs7VXrp3Niigq3APn0gmhpg64tH0ilhDHptGwX3l0JiymPOOoVTIY8dhtMFr%2F8zPoj9i1Do%2B5E3PLfpeM6C1u3kImsF6B%2BGCJx9z97KlEa%2FMHLng1RssqGW2pzpLHEEmM%2FIsAZ4DifDl6jMHQuHGLhzZ%2BBzH2rYWUsisaRocb8TrXyQN3ozPU34SHumswQ7IR3ODrzh%2B0abb2%2FORRSrgDvEBwDc%2FlAL9yqPZJ3ZgbawK3s0fUUngrtDrlkEJjoMWvnxvAeeR3S3SogmT9cCicCHB9GjwclYi6qp5qNUi071BIMFMYJa86nVnzzwujK2lO87ReqobEeO4sX5S%2FJP3O0LK9HOGCCmVmf32%2BAzq1axs%2Fc2ltVuU9Q%2FUbAxkyIKsjVrmiHS2OjSDsZQMu6zAd0CxMxKILEIXSJH%2FTyNmibLXjqyeNQCjC%2FKV%2Bn7sJu2N9hTljZAhWiwgS2Di1u1gXB8PSBc7vtqjzrN0L7PmCGZXBT9qGgTW4QBnOdEkt%2FO49YQ%2FNdJVhsBDOUo68b5oGZ4TDIEv1exwhqmxe6uzF5P5VupvDSfSAd%2FNMZRAg4H07sDBYrjXI4ysGofLRJ%2BNQflqp1dg0zhUP%2B0JSMSOmRmRDaplIIkgGtceMgGi9aJBZ4BeDcp6O8zD0hdrDBjqkAbsz8vCg8T5Gbx%2F7yUj33D2UIE6yNfOE7uI0C6jUkWq0pvoR1kc6cW%2BvIcC4GQcWafRhIWnV6BlFjJLCJNEepGaDKpg%2BUou6sGhcdJdsIrnuRVNF%2Bc%2FAawV8S%2BYAExpBXz%2FPeZ6J5KVb6ih5%2B8oSK%2B5at75f0B3wAI66QM6igIS8X8LJDNC5uoPZILHN%2Fj6%2FUytIbqxlTXaTd7o7m7188jREb%2Fzn&X-Amz-Signature=2f85a6a8bd51bc2ce7c2ecc4005d4bf11c47e48896cc827edbec1487ff1548c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIC3WKA7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeSO4k8hUUKYLVZRefHe%2FBC08bZbi28rfBYjfJvjsPyAIhALVFXoUG%2B%2Bmx7ctpJpqxrE7xJjmiGlzQ8X84pT0z9i8oKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUJxNs7VXrp3Niigq3APn0gmhpg64tH0ilhDHptGwX3l0JiymPOOoVTIY8dhtMFr%2F8zPoj9i1Do%2B5E3PLfpeM6C1u3kImsF6B%2BGCJx9z97KlEa%2FMHLng1RssqGW2pzpLHEEmM%2FIsAZ4DifDl6jMHQuHGLhzZ%2BBzH2rYWUsisaRocb8TrXyQN3ozPU34SHumswQ7IR3ODrzh%2B0abb2%2FORRSrgDvEBwDc%2FlAL9yqPZJ3ZgbawK3s0fUUngrtDrlkEJjoMWvnxvAeeR3S3SogmT9cCicCHB9GjwclYi6qp5qNUi071BIMFMYJa86nVnzzwujK2lO87ReqobEeO4sX5S%2FJP3O0LK9HOGCCmVmf32%2BAzq1axs%2Fc2ltVuU9Q%2FUbAxkyIKsjVrmiHS2OjSDsZQMu6zAd0CxMxKILEIXSJH%2FTyNmibLXjqyeNQCjC%2FKV%2Bn7sJu2N9hTljZAhWiwgS2Di1u1gXB8PSBc7vtqjzrN0L7PmCGZXBT9qGgTW4QBnOdEkt%2FO49YQ%2FNdJVhsBDOUo68b5oGZ4TDIEv1exwhqmxe6uzF5P5VupvDSfSAd%2FNMZRAg4H07sDBYrjXI4ysGofLRJ%2BNQflqp1dg0zhUP%2B0JSMSOmRmRDaplIIkgGtceMgGi9aJBZ4BeDcp6O8zD0hdrDBjqkAbsz8vCg8T5Gbx%2F7yUj33D2UIE6yNfOE7uI0C6jUkWq0pvoR1kc6cW%2BvIcC4GQcWafRhIWnV6BlFjJLCJNEepGaDKpg%2BUou6sGhcdJdsIrnuRVNF%2Bc%2FAawV8S%2BYAExpBXz%2FPeZ6J5KVb6ih5%2B8oSK%2B5at75f0B3wAI66QM6igIS8X8LJDNC5uoPZILHN%2Fj6%2FUytIbqxlTXaTd7o7m7188jREb%2Fzn&X-Amz-Signature=7ebcfdd103fce345599497841816b2a4965b8baf6231c3d53587df9e3f821f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIC3WKA7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeSO4k8hUUKYLVZRefHe%2FBC08bZbi28rfBYjfJvjsPyAIhALVFXoUG%2B%2Bmx7ctpJpqxrE7xJjmiGlzQ8X84pT0z9i8oKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUJxNs7VXrp3Niigq3APn0gmhpg64tH0ilhDHptGwX3l0JiymPOOoVTIY8dhtMFr%2F8zPoj9i1Do%2B5E3PLfpeM6C1u3kImsF6B%2BGCJx9z97KlEa%2FMHLng1RssqGW2pzpLHEEmM%2FIsAZ4DifDl6jMHQuHGLhzZ%2BBzH2rYWUsisaRocb8TrXyQN3ozPU34SHumswQ7IR3ODrzh%2B0abb2%2FORRSrgDvEBwDc%2FlAL9yqPZJ3ZgbawK3s0fUUngrtDrlkEJjoMWvnxvAeeR3S3SogmT9cCicCHB9GjwclYi6qp5qNUi071BIMFMYJa86nVnzzwujK2lO87ReqobEeO4sX5S%2FJP3O0LK9HOGCCmVmf32%2BAzq1axs%2Fc2ltVuU9Q%2FUbAxkyIKsjVrmiHS2OjSDsZQMu6zAd0CxMxKILEIXSJH%2FTyNmibLXjqyeNQCjC%2FKV%2Bn7sJu2N9hTljZAhWiwgS2Di1u1gXB8PSBc7vtqjzrN0L7PmCGZXBT9qGgTW4QBnOdEkt%2FO49YQ%2FNdJVhsBDOUo68b5oGZ4TDIEv1exwhqmxe6uzF5P5VupvDSfSAd%2FNMZRAg4H07sDBYrjXI4ysGofLRJ%2BNQflqp1dg0zhUP%2B0JSMSOmRmRDaplIIkgGtceMgGi9aJBZ4BeDcp6O8zD0hdrDBjqkAbsz8vCg8T5Gbx%2F7yUj33D2UIE6yNfOE7uI0C6jUkWq0pvoR1kc6cW%2BvIcC4GQcWafRhIWnV6BlFjJLCJNEepGaDKpg%2BUou6sGhcdJdsIrnuRVNF%2Bc%2FAawV8S%2BYAExpBXz%2FPeZ6J5KVb6ih5%2B8oSK%2B5at75f0B3wAI66QM6igIS8X8LJDNC5uoPZILHN%2Fj6%2FUytIbqxlTXaTd7o7m7188jREb%2Fzn&X-Amz-Signature=b1205e31b65dc03295d267d27aa16b4e752a40b92f19cab6a6e82ad8b4622969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIC3WKA7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeSO4k8hUUKYLVZRefHe%2FBC08bZbi28rfBYjfJvjsPyAIhALVFXoUG%2B%2Bmx7ctpJpqxrE7xJjmiGlzQ8X84pT0z9i8oKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUJxNs7VXrp3Niigq3APn0gmhpg64tH0ilhDHptGwX3l0JiymPOOoVTIY8dhtMFr%2F8zPoj9i1Do%2B5E3PLfpeM6C1u3kImsF6B%2BGCJx9z97KlEa%2FMHLng1RssqGW2pzpLHEEmM%2FIsAZ4DifDl6jMHQuHGLhzZ%2BBzH2rYWUsisaRocb8TrXyQN3ozPU34SHumswQ7IR3ODrzh%2B0abb2%2FORRSrgDvEBwDc%2FlAL9yqPZJ3ZgbawK3s0fUUngrtDrlkEJjoMWvnxvAeeR3S3SogmT9cCicCHB9GjwclYi6qp5qNUi071BIMFMYJa86nVnzzwujK2lO87ReqobEeO4sX5S%2FJP3O0LK9HOGCCmVmf32%2BAzq1axs%2Fc2ltVuU9Q%2FUbAxkyIKsjVrmiHS2OjSDsZQMu6zAd0CxMxKILEIXSJH%2FTyNmibLXjqyeNQCjC%2FKV%2Bn7sJu2N9hTljZAhWiwgS2Di1u1gXB8PSBc7vtqjzrN0L7PmCGZXBT9qGgTW4QBnOdEkt%2FO49YQ%2FNdJVhsBDOUo68b5oGZ4TDIEv1exwhqmxe6uzF5P5VupvDSfSAd%2FNMZRAg4H07sDBYrjXI4ysGofLRJ%2BNQflqp1dg0zhUP%2B0JSMSOmRmRDaplIIkgGtceMgGi9aJBZ4BeDcp6O8zD0hdrDBjqkAbsz8vCg8T5Gbx%2F7yUj33D2UIE6yNfOE7uI0C6jUkWq0pvoR1kc6cW%2BvIcC4GQcWafRhIWnV6BlFjJLCJNEepGaDKpg%2BUou6sGhcdJdsIrnuRVNF%2Bc%2FAawV8S%2BYAExpBXz%2FPeZ6J5KVb6ih5%2B8oSK%2B5at75f0B3wAI66QM6igIS8X8LJDNC5uoPZILHN%2Fj6%2FUytIbqxlTXaTd7o7m7188jREb%2Fzn&X-Amz-Signature=717807d4b3e72133a82b86dab8b32e22e423cb9749da4cd997f277faa4b86586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIC3WKA7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeSO4k8hUUKYLVZRefHe%2FBC08bZbi28rfBYjfJvjsPyAIhALVFXoUG%2B%2Bmx7ctpJpqxrE7xJjmiGlzQ8X84pT0z9i8oKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUJxNs7VXrp3Niigq3APn0gmhpg64tH0ilhDHptGwX3l0JiymPOOoVTIY8dhtMFr%2F8zPoj9i1Do%2B5E3PLfpeM6C1u3kImsF6B%2BGCJx9z97KlEa%2FMHLng1RssqGW2pzpLHEEmM%2FIsAZ4DifDl6jMHQuHGLhzZ%2BBzH2rYWUsisaRocb8TrXyQN3ozPU34SHumswQ7IR3ODrzh%2B0abb2%2FORRSrgDvEBwDc%2FlAL9yqPZJ3ZgbawK3s0fUUngrtDrlkEJjoMWvnxvAeeR3S3SogmT9cCicCHB9GjwclYi6qp5qNUi071BIMFMYJa86nVnzzwujK2lO87ReqobEeO4sX5S%2FJP3O0LK9HOGCCmVmf32%2BAzq1axs%2Fc2ltVuU9Q%2FUbAxkyIKsjVrmiHS2OjSDsZQMu6zAd0CxMxKILEIXSJH%2FTyNmibLXjqyeNQCjC%2FKV%2Bn7sJu2N9hTljZAhWiwgS2Di1u1gXB8PSBc7vtqjzrN0L7PmCGZXBT9qGgTW4QBnOdEkt%2FO49YQ%2FNdJVhsBDOUo68b5oGZ4TDIEv1exwhqmxe6uzF5P5VupvDSfSAd%2FNMZRAg4H07sDBYrjXI4ysGofLRJ%2BNQflqp1dg0zhUP%2B0JSMSOmRmRDaplIIkgGtceMgGi9aJBZ4BeDcp6O8zD0hdrDBjqkAbsz8vCg8T5Gbx%2F7yUj33D2UIE6yNfOE7uI0C6jUkWq0pvoR1kc6cW%2BvIcC4GQcWafRhIWnV6BlFjJLCJNEepGaDKpg%2BUou6sGhcdJdsIrnuRVNF%2Bc%2FAawV8S%2BYAExpBXz%2FPeZ6J5KVb6ih5%2B8oSK%2B5at75f0B3wAI66QM6igIS8X8LJDNC5uoPZILHN%2Fj6%2FUytIbqxlTXaTd7o7m7188jREb%2Fzn&X-Amz-Signature=5a2bc750916767cc15e0f207f2ef80127c34b7bbd6fc0b824e6e63bada16f137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIC3WKA7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeSO4k8hUUKYLVZRefHe%2FBC08bZbi28rfBYjfJvjsPyAIhALVFXoUG%2B%2Bmx7ctpJpqxrE7xJjmiGlzQ8X84pT0z9i8oKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUJxNs7VXrp3Niigq3APn0gmhpg64tH0ilhDHptGwX3l0JiymPOOoVTIY8dhtMFr%2F8zPoj9i1Do%2B5E3PLfpeM6C1u3kImsF6B%2BGCJx9z97KlEa%2FMHLng1RssqGW2pzpLHEEmM%2FIsAZ4DifDl6jMHQuHGLhzZ%2BBzH2rYWUsisaRocb8TrXyQN3ozPU34SHumswQ7IR3ODrzh%2B0abb2%2FORRSrgDvEBwDc%2FlAL9yqPZJ3ZgbawK3s0fUUngrtDrlkEJjoMWvnxvAeeR3S3SogmT9cCicCHB9GjwclYi6qp5qNUi071BIMFMYJa86nVnzzwujK2lO87ReqobEeO4sX5S%2FJP3O0LK9HOGCCmVmf32%2BAzq1axs%2Fc2ltVuU9Q%2FUbAxkyIKsjVrmiHS2OjSDsZQMu6zAd0CxMxKILEIXSJH%2FTyNmibLXjqyeNQCjC%2FKV%2Bn7sJu2N9hTljZAhWiwgS2Di1u1gXB8PSBc7vtqjzrN0L7PmCGZXBT9qGgTW4QBnOdEkt%2FO49YQ%2FNdJVhsBDOUo68b5oGZ4TDIEv1exwhqmxe6uzF5P5VupvDSfSAd%2FNMZRAg4H07sDBYrjXI4ysGofLRJ%2BNQflqp1dg0zhUP%2B0JSMSOmRmRDaplIIkgGtceMgGi9aJBZ4BeDcp6O8zD0hdrDBjqkAbsz8vCg8T5Gbx%2F7yUj33D2UIE6yNfOE7uI0C6jUkWq0pvoR1kc6cW%2BvIcC4GQcWafRhIWnV6BlFjJLCJNEepGaDKpg%2BUou6sGhcdJdsIrnuRVNF%2Bc%2FAawV8S%2BYAExpBXz%2FPeZ6J5KVb6ih5%2B8oSK%2B5at75f0B3wAI66QM6igIS8X8LJDNC5uoPZILHN%2Fj6%2FUytIbqxlTXaTd7o7m7188jREb%2Fzn&X-Amz-Signature=dd1dec255933508892d9ce80e9dccde7ae481e4389d7ddcbe0b5578dc8c040da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIC3WKA7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeSO4k8hUUKYLVZRefHe%2FBC08bZbi28rfBYjfJvjsPyAIhALVFXoUG%2B%2Bmx7ctpJpqxrE7xJjmiGlzQ8X84pT0z9i8oKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUJxNs7VXrp3Niigq3APn0gmhpg64tH0ilhDHptGwX3l0JiymPOOoVTIY8dhtMFr%2F8zPoj9i1Do%2B5E3PLfpeM6C1u3kImsF6B%2BGCJx9z97KlEa%2FMHLng1RssqGW2pzpLHEEmM%2FIsAZ4DifDl6jMHQuHGLhzZ%2BBzH2rYWUsisaRocb8TrXyQN3ozPU34SHumswQ7IR3ODrzh%2B0abb2%2FORRSrgDvEBwDc%2FlAL9yqPZJ3ZgbawK3s0fUUngrtDrlkEJjoMWvnxvAeeR3S3SogmT9cCicCHB9GjwclYi6qp5qNUi071BIMFMYJa86nVnzzwujK2lO87ReqobEeO4sX5S%2FJP3O0LK9HOGCCmVmf32%2BAzq1axs%2Fc2ltVuU9Q%2FUbAxkyIKsjVrmiHS2OjSDsZQMu6zAd0CxMxKILEIXSJH%2FTyNmibLXjqyeNQCjC%2FKV%2Bn7sJu2N9hTljZAhWiwgS2Di1u1gXB8PSBc7vtqjzrN0L7PmCGZXBT9qGgTW4QBnOdEkt%2FO49YQ%2FNdJVhsBDOUo68b5oGZ4TDIEv1exwhqmxe6uzF5P5VupvDSfSAd%2FNMZRAg4H07sDBYrjXI4ysGofLRJ%2BNQflqp1dg0zhUP%2B0JSMSOmRmRDaplIIkgGtceMgGi9aJBZ4BeDcp6O8zD0hdrDBjqkAbsz8vCg8T5Gbx%2F7yUj33D2UIE6yNfOE7uI0C6jUkWq0pvoR1kc6cW%2BvIcC4GQcWafRhIWnV6BlFjJLCJNEepGaDKpg%2BUou6sGhcdJdsIrnuRVNF%2Bc%2FAawV8S%2BYAExpBXz%2FPeZ6J5KVb6ih5%2B8oSK%2B5at75f0B3wAI66QM6igIS8X8LJDNC5uoPZILHN%2Fj6%2FUytIbqxlTXaTd7o7m7188jREb%2Fzn&X-Amz-Signature=ae6a6b60e9cd3cb1600b9a91c2f28ad7b65560b113b4ca27b0c5898f2c974d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIC3WKA7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeSO4k8hUUKYLVZRefHe%2FBC08bZbi28rfBYjfJvjsPyAIhALVFXoUG%2B%2Bmx7ctpJpqxrE7xJjmiGlzQ8X84pT0z9i8oKv8DCEoQABoMNjM3NDIzMTgzODA1IgwfUJxNs7VXrp3Niigq3APn0gmhpg64tH0ilhDHptGwX3l0JiymPOOoVTIY8dhtMFr%2F8zPoj9i1Do%2B5E3PLfpeM6C1u3kImsF6B%2BGCJx9z97KlEa%2FMHLng1RssqGW2pzpLHEEmM%2FIsAZ4DifDl6jMHQuHGLhzZ%2BBzH2rYWUsisaRocb8TrXyQN3ozPU34SHumswQ7IR3ODrzh%2B0abb2%2FORRSrgDvEBwDc%2FlAL9yqPZJ3ZgbawK3s0fUUngrtDrlkEJjoMWvnxvAeeR3S3SogmT9cCicCHB9GjwclYi6qp5qNUi071BIMFMYJa86nVnzzwujK2lO87ReqobEeO4sX5S%2FJP3O0LK9HOGCCmVmf32%2BAzq1axs%2Fc2ltVuU9Q%2FUbAxkyIKsjVrmiHS2OjSDsZQMu6zAd0CxMxKILEIXSJH%2FTyNmibLXjqyeNQCjC%2FKV%2Bn7sJu2N9hTljZAhWiwgS2Di1u1gXB8PSBc7vtqjzrN0L7PmCGZXBT9qGgTW4QBnOdEkt%2FO49YQ%2FNdJVhsBDOUo68b5oGZ4TDIEv1exwhqmxe6uzF5P5VupvDSfSAd%2FNMZRAg4H07sDBYrjXI4ysGofLRJ%2BNQflqp1dg0zhUP%2B0JSMSOmRmRDaplIIkgGtceMgGi9aJBZ4BeDcp6O8zD0hdrDBjqkAbsz8vCg8T5Gbx%2F7yUj33D2UIE6yNfOE7uI0C6jUkWq0pvoR1kc6cW%2BvIcC4GQcWafRhIWnV6BlFjJLCJNEepGaDKpg%2BUou6sGhcdJdsIrnuRVNF%2Bc%2FAawV8S%2BYAExpBXz%2FPeZ6J5KVb6ih5%2B8oSK%2B5at75f0B3wAI66QM6igIS8X8LJDNC5uoPZILHN%2Fj6%2FUytIbqxlTXaTd7o7m7188jREb%2Fzn&X-Amz-Signature=262f4e1fd07372ea57e608c20027a500fb644d9736703de24329f932499425ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
