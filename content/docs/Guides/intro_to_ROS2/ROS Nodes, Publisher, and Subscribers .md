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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7FA67R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcpHqJ%2BkyvV%2FokpI8DMFvbPY77ECOz5Sr264Po%2B%2BNxAIhAIeMUwkkTjwwnacZddD9SBq906lBWR2S8jMbKan1JKd9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzXd856Jv8n2BRNVlkq3AOxEXF%2FSxNTipDsPmNhmAicblr0%2FLQYDjDHLpSkva6lv%2FLHOFx6amxghPMw5%2FNgIpXnEYyBToPXOr2W%2B13Ft%2F%2FsR8ONqQu4Kl63CpXARgafOeAtFfzjipodN2EZHXBDMjU%2FD85aoxhyf%2F6ckQClfrlYTUnHZVyYK3Mw96vmkdnU9FcuMa3zb02WNWMGWscOofNB31NfzTkAfWx%2BFmT1WcrgRwN3qmtnI27meC46Coll%2BiL3N2xSDaCEhbl1Tg5OhcjpuFOjIBU97AleDH%2BpYul7PZABb9PHWjlgUGKKtwgebAWZAxVWI89PPe8FCH%2FeIUg8wRPvAwTp%2BaK3GWDGPQd0ap6HOOPKpomtU1Pxv2NiXQWqMYh6rAHWXxCI%2Fo%2FJCkAsUPnlwrTnePeTrz8jIHADmv3VMBWrnF8R3VT9jS3z6IPPIvMwx7DvUNq0DrBFDrbBaZBIK5IAqb%2B2SdFMWUX5k9amF16GAX54SK%2FHsducQyRYNZ%2Bi76pB7PxeiH6iey1lyojsM8XKwXrQa8z73hWFoERZ76C1rrKOEYICNd611fO0aq56R7LAqFGAjA1o6m9Zs%2Bt%2FBEc%2FsVmoits%2BVqu0pkGpuoo4AVYxUofloMPkaGyh4hgJgQVHy1FVvTCi%2BO%2FABjqkAWVgVyMJJd5lIBT821bTo85yM2HFTFMhCQzH%2F4MKC3JK8P8XASJkJu5qECnA5DiX0B5zy9D3bU6PT9Zq3v7v1aXBYqqjbSXTWgQsVIaFEYg6khaJSTcNGWMAI8Cb2k52aKtG4m4NseG9SndBJi2LWBN72mgbvQAOlS0iswOcsupzp0WTiL4naXa055V0r%2FkJq4S1%2Bkj3Ui5hlaUqKecUcgwgfPiP&X-Amz-Signature=1da4877ae93fe2eb8dfb5d3204de487d773c12c5c1436c63017979d0fb3e9620&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7FA67R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcpHqJ%2BkyvV%2FokpI8DMFvbPY77ECOz5Sr264Po%2B%2BNxAIhAIeMUwkkTjwwnacZddD9SBq906lBWR2S8jMbKan1JKd9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzXd856Jv8n2BRNVlkq3AOxEXF%2FSxNTipDsPmNhmAicblr0%2FLQYDjDHLpSkva6lv%2FLHOFx6amxghPMw5%2FNgIpXnEYyBToPXOr2W%2B13Ft%2F%2FsR8ONqQu4Kl63CpXARgafOeAtFfzjipodN2EZHXBDMjU%2FD85aoxhyf%2F6ckQClfrlYTUnHZVyYK3Mw96vmkdnU9FcuMa3zb02WNWMGWscOofNB31NfzTkAfWx%2BFmT1WcrgRwN3qmtnI27meC46Coll%2BiL3N2xSDaCEhbl1Tg5OhcjpuFOjIBU97AleDH%2BpYul7PZABb9PHWjlgUGKKtwgebAWZAxVWI89PPe8FCH%2FeIUg8wRPvAwTp%2BaK3GWDGPQd0ap6HOOPKpomtU1Pxv2NiXQWqMYh6rAHWXxCI%2Fo%2FJCkAsUPnlwrTnePeTrz8jIHADmv3VMBWrnF8R3VT9jS3z6IPPIvMwx7DvUNq0DrBFDrbBaZBIK5IAqb%2B2SdFMWUX5k9amF16GAX54SK%2FHsducQyRYNZ%2Bi76pB7PxeiH6iey1lyojsM8XKwXrQa8z73hWFoERZ76C1rrKOEYICNd611fO0aq56R7LAqFGAjA1o6m9Zs%2Bt%2FBEc%2FsVmoits%2BVqu0pkGpuoo4AVYxUofloMPkaGyh4hgJgQVHy1FVvTCi%2BO%2FABjqkAWVgVyMJJd5lIBT821bTo85yM2HFTFMhCQzH%2F4MKC3JK8P8XASJkJu5qECnA5DiX0B5zy9D3bU6PT9Zq3v7v1aXBYqqjbSXTWgQsVIaFEYg6khaJSTcNGWMAI8Cb2k52aKtG4m4NseG9SndBJi2LWBN72mgbvQAOlS0iswOcsupzp0WTiL4naXa055V0r%2FkJq4S1%2Bkj3Ui5hlaUqKecUcgwgfPiP&X-Amz-Signature=ac3fd6f57cd3ff7488ae74ba77c129d3e3bae8c4849fd3e7ae431a39fb575d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7FA67R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcpHqJ%2BkyvV%2FokpI8DMFvbPY77ECOz5Sr264Po%2B%2BNxAIhAIeMUwkkTjwwnacZddD9SBq906lBWR2S8jMbKan1JKd9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzXd856Jv8n2BRNVlkq3AOxEXF%2FSxNTipDsPmNhmAicblr0%2FLQYDjDHLpSkva6lv%2FLHOFx6amxghPMw5%2FNgIpXnEYyBToPXOr2W%2B13Ft%2F%2FsR8ONqQu4Kl63CpXARgafOeAtFfzjipodN2EZHXBDMjU%2FD85aoxhyf%2F6ckQClfrlYTUnHZVyYK3Mw96vmkdnU9FcuMa3zb02WNWMGWscOofNB31NfzTkAfWx%2BFmT1WcrgRwN3qmtnI27meC46Coll%2BiL3N2xSDaCEhbl1Tg5OhcjpuFOjIBU97AleDH%2BpYul7PZABb9PHWjlgUGKKtwgebAWZAxVWI89PPe8FCH%2FeIUg8wRPvAwTp%2BaK3GWDGPQd0ap6HOOPKpomtU1Pxv2NiXQWqMYh6rAHWXxCI%2Fo%2FJCkAsUPnlwrTnePeTrz8jIHADmv3VMBWrnF8R3VT9jS3z6IPPIvMwx7DvUNq0DrBFDrbBaZBIK5IAqb%2B2SdFMWUX5k9amF16GAX54SK%2FHsducQyRYNZ%2Bi76pB7PxeiH6iey1lyojsM8XKwXrQa8z73hWFoERZ76C1rrKOEYICNd611fO0aq56R7LAqFGAjA1o6m9Zs%2Bt%2FBEc%2FsVmoits%2BVqu0pkGpuoo4AVYxUofloMPkaGyh4hgJgQVHy1FVvTCi%2BO%2FABjqkAWVgVyMJJd5lIBT821bTo85yM2HFTFMhCQzH%2F4MKC3JK8P8XASJkJu5qECnA5DiX0B5zy9D3bU6PT9Zq3v7v1aXBYqqjbSXTWgQsVIaFEYg6khaJSTcNGWMAI8Cb2k52aKtG4m4NseG9SndBJi2LWBN72mgbvQAOlS0iswOcsupzp0WTiL4naXa055V0r%2FkJq4S1%2Bkj3Ui5hlaUqKecUcgwgfPiP&X-Amz-Signature=6afaa1cb34bb8acc37d9a482a1b16bedf409d37edcd07e51ca3314858247afa7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7FA67R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcpHqJ%2BkyvV%2FokpI8DMFvbPY77ECOz5Sr264Po%2B%2BNxAIhAIeMUwkkTjwwnacZddD9SBq906lBWR2S8jMbKan1JKd9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzXd856Jv8n2BRNVlkq3AOxEXF%2FSxNTipDsPmNhmAicblr0%2FLQYDjDHLpSkva6lv%2FLHOFx6amxghPMw5%2FNgIpXnEYyBToPXOr2W%2B13Ft%2F%2FsR8ONqQu4Kl63CpXARgafOeAtFfzjipodN2EZHXBDMjU%2FD85aoxhyf%2F6ckQClfrlYTUnHZVyYK3Mw96vmkdnU9FcuMa3zb02WNWMGWscOofNB31NfzTkAfWx%2BFmT1WcrgRwN3qmtnI27meC46Coll%2BiL3N2xSDaCEhbl1Tg5OhcjpuFOjIBU97AleDH%2BpYul7PZABb9PHWjlgUGKKtwgebAWZAxVWI89PPe8FCH%2FeIUg8wRPvAwTp%2BaK3GWDGPQd0ap6HOOPKpomtU1Pxv2NiXQWqMYh6rAHWXxCI%2Fo%2FJCkAsUPnlwrTnePeTrz8jIHADmv3VMBWrnF8R3VT9jS3z6IPPIvMwx7DvUNq0DrBFDrbBaZBIK5IAqb%2B2SdFMWUX5k9amF16GAX54SK%2FHsducQyRYNZ%2Bi76pB7PxeiH6iey1lyojsM8XKwXrQa8z73hWFoERZ76C1rrKOEYICNd611fO0aq56R7LAqFGAjA1o6m9Zs%2Bt%2FBEc%2FsVmoits%2BVqu0pkGpuoo4AVYxUofloMPkaGyh4hgJgQVHy1FVvTCi%2BO%2FABjqkAWVgVyMJJd5lIBT821bTo85yM2HFTFMhCQzH%2F4MKC3JK8P8XASJkJu5qECnA5DiX0B5zy9D3bU6PT9Zq3v7v1aXBYqqjbSXTWgQsVIaFEYg6khaJSTcNGWMAI8Cb2k52aKtG4m4NseG9SndBJi2LWBN72mgbvQAOlS0iswOcsupzp0WTiL4naXa055V0r%2FkJq4S1%2Bkj3Ui5hlaUqKecUcgwgfPiP&X-Amz-Signature=86bf46cb5cd088d9df55820c226db9f54d84d9b02b402aa8f87fd4100a79a209&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7FA67R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcpHqJ%2BkyvV%2FokpI8DMFvbPY77ECOz5Sr264Po%2B%2BNxAIhAIeMUwkkTjwwnacZddD9SBq906lBWR2S8jMbKan1JKd9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzXd856Jv8n2BRNVlkq3AOxEXF%2FSxNTipDsPmNhmAicblr0%2FLQYDjDHLpSkva6lv%2FLHOFx6amxghPMw5%2FNgIpXnEYyBToPXOr2W%2B13Ft%2F%2FsR8ONqQu4Kl63CpXARgafOeAtFfzjipodN2EZHXBDMjU%2FD85aoxhyf%2F6ckQClfrlYTUnHZVyYK3Mw96vmkdnU9FcuMa3zb02WNWMGWscOofNB31NfzTkAfWx%2BFmT1WcrgRwN3qmtnI27meC46Coll%2BiL3N2xSDaCEhbl1Tg5OhcjpuFOjIBU97AleDH%2BpYul7PZABb9PHWjlgUGKKtwgebAWZAxVWI89PPe8FCH%2FeIUg8wRPvAwTp%2BaK3GWDGPQd0ap6HOOPKpomtU1Pxv2NiXQWqMYh6rAHWXxCI%2Fo%2FJCkAsUPnlwrTnePeTrz8jIHADmv3VMBWrnF8R3VT9jS3z6IPPIvMwx7DvUNq0DrBFDrbBaZBIK5IAqb%2B2SdFMWUX5k9amF16GAX54SK%2FHsducQyRYNZ%2Bi76pB7PxeiH6iey1lyojsM8XKwXrQa8z73hWFoERZ76C1rrKOEYICNd611fO0aq56R7LAqFGAjA1o6m9Zs%2Bt%2FBEc%2FsVmoits%2BVqu0pkGpuoo4AVYxUofloMPkaGyh4hgJgQVHy1FVvTCi%2BO%2FABjqkAWVgVyMJJd5lIBT821bTo85yM2HFTFMhCQzH%2F4MKC3JK8P8XASJkJu5qECnA5DiX0B5zy9D3bU6PT9Zq3v7v1aXBYqqjbSXTWgQsVIaFEYg6khaJSTcNGWMAI8Cb2k52aKtG4m4NseG9SndBJi2LWBN72mgbvQAOlS0iswOcsupzp0WTiL4naXa055V0r%2FkJq4S1%2Bkj3Ui5hlaUqKecUcgwgfPiP&X-Amz-Signature=d1d826a4071a5a037e222cb3bcdb295ca571fe939bded30b0b5035a6a60eab24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7FA67R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcpHqJ%2BkyvV%2FokpI8DMFvbPY77ECOz5Sr264Po%2B%2BNxAIhAIeMUwkkTjwwnacZddD9SBq906lBWR2S8jMbKan1JKd9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzXd856Jv8n2BRNVlkq3AOxEXF%2FSxNTipDsPmNhmAicblr0%2FLQYDjDHLpSkva6lv%2FLHOFx6amxghPMw5%2FNgIpXnEYyBToPXOr2W%2B13Ft%2F%2FsR8ONqQu4Kl63CpXARgafOeAtFfzjipodN2EZHXBDMjU%2FD85aoxhyf%2F6ckQClfrlYTUnHZVyYK3Mw96vmkdnU9FcuMa3zb02WNWMGWscOofNB31NfzTkAfWx%2BFmT1WcrgRwN3qmtnI27meC46Coll%2BiL3N2xSDaCEhbl1Tg5OhcjpuFOjIBU97AleDH%2BpYul7PZABb9PHWjlgUGKKtwgebAWZAxVWI89PPe8FCH%2FeIUg8wRPvAwTp%2BaK3GWDGPQd0ap6HOOPKpomtU1Pxv2NiXQWqMYh6rAHWXxCI%2Fo%2FJCkAsUPnlwrTnePeTrz8jIHADmv3VMBWrnF8R3VT9jS3z6IPPIvMwx7DvUNq0DrBFDrbBaZBIK5IAqb%2B2SdFMWUX5k9amF16GAX54SK%2FHsducQyRYNZ%2Bi76pB7PxeiH6iey1lyojsM8XKwXrQa8z73hWFoERZ76C1rrKOEYICNd611fO0aq56R7LAqFGAjA1o6m9Zs%2Bt%2FBEc%2FsVmoits%2BVqu0pkGpuoo4AVYxUofloMPkaGyh4hgJgQVHy1FVvTCi%2BO%2FABjqkAWVgVyMJJd5lIBT821bTo85yM2HFTFMhCQzH%2F4MKC3JK8P8XASJkJu5qECnA5DiX0B5zy9D3bU6PT9Zq3v7v1aXBYqqjbSXTWgQsVIaFEYg6khaJSTcNGWMAI8Cb2k52aKtG4m4NseG9SndBJi2LWBN72mgbvQAOlS0iswOcsupzp0WTiL4naXa055V0r%2FkJq4S1%2Bkj3Ui5hlaUqKecUcgwgfPiP&X-Amz-Signature=e59ee785acd1b34594abc18383366fa40304bbaea55c424848306de9fe3509ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7FA67R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcpHqJ%2BkyvV%2FokpI8DMFvbPY77ECOz5Sr264Po%2B%2BNxAIhAIeMUwkkTjwwnacZddD9SBq906lBWR2S8jMbKan1JKd9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzXd856Jv8n2BRNVlkq3AOxEXF%2FSxNTipDsPmNhmAicblr0%2FLQYDjDHLpSkva6lv%2FLHOFx6amxghPMw5%2FNgIpXnEYyBToPXOr2W%2B13Ft%2F%2FsR8ONqQu4Kl63CpXARgafOeAtFfzjipodN2EZHXBDMjU%2FD85aoxhyf%2F6ckQClfrlYTUnHZVyYK3Mw96vmkdnU9FcuMa3zb02WNWMGWscOofNB31NfzTkAfWx%2BFmT1WcrgRwN3qmtnI27meC46Coll%2BiL3N2xSDaCEhbl1Tg5OhcjpuFOjIBU97AleDH%2BpYul7PZABb9PHWjlgUGKKtwgebAWZAxVWI89PPe8FCH%2FeIUg8wRPvAwTp%2BaK3GWDGPQd0ap6HOOPKpomtU1Pxv2NiXQWqMYh6rAHWXxCI%2Fo%2FJCkAsUPnlwrTnePeTrz8jIHADmv3VMBWrnF8R3VT9jS3z6IPPIvMwx7DvUNq0DrBFDrbBaZBIK5IAqb%2B2SdFMWUX5k9amF16GAX54SK%2FHsducQyRYNZ%2Bi76pB7PxeiH6iey1lyojsM8XKwXrQa8z73hWFoERZ76C1rrKOEYICNd611fO0aq56R7LAqFGAjA1o6m9Zs%2Bt%2FBEc%2FsVmoits%2BVqu0pkGpuoo4AVYxUofloMPkaGyh4hgJgQVHy1FVvTCi%2BO%2FABjqkAWVgVyMJJd5lIBT821bTo85yM2HFTFMhCQzH%2F4MKC3JK8P8XASJkJu5qECnA5DiX0B5zy9D3bU6PT9Zq3v7v1aXBYqqjbSXTWgQsVIaFEYg6khaJSTcNGWMAI8Cb2k52aKtG4m4NseG9SndBJi2LWBN72mgbvQAOlS0iswOcsupzp0WTiL4naXa055V0r%2FkJq4S1%2Bkj3Ui5hlaUqKecUcgwgfPiP&X-Amz-Signature=4c07423c849788ecc86d4deff8b6f0c52fae57844bb9c9aef9d7c32340eed2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7FA67R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcpHqJ%2BkyvV%2FokpI8DMFvbPY77ECOz5Sr264Po%2B%2BNxAIhAIeMUwkkTjwwnacZddD9SBq906lBWR2S8jMbKan1JKd9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzXd856Jv8n2BRNVlkq3AOxEXF%2FSxNTipDsPmNhmAicblr0%2FLQYDjDHLpSkva6lv%2FLHOFx6amxghPMw5%2FNgIpXnEYyBToPXOr2W%2B13Ft%2F%2FsR8ONqQu4Kl63CpXARgafOeAtFfzjipodN2EZHXBDMjU%2FD85aoxhyf%2F6ckQClfrlYTUnHZVyYK3Mw96vmkdnU9FcuMa3zb02WNWMGWscOofNB31NfzTkAfWx%2BFmT1WcrgRwN3qmtnI27meC46Coll%2BiL3N2xSDaCEhbl1Tg5OhcjpuFOjIBU97AleDH%2BpYul7PZABb9PHWjlgUGKKtwgebAWZAxVWI89PPe8FCH%2FeIUg8wRPvAwTp%2BaK3GWDGPQd0ap6HOOPKpomtU1Pxv2NiXQWqMYh6rAHWXxCI%2Fo%2FJCkAsUPnlwrTnePeTrz8jIHADmv3VMBWrnF8R3VT9jS3z6IPPIvMwx7DvUNq0DrBFDrbBaZBIK5IAqb%2B2SdFMWUX5k9amF16GAX54SK%2FHsducQyRYNZ%2Bi76pB7PxeiH6iey1lyojsM8XKwXrQa8z73hWFoERZ76C1rrKOEYICNd611fO0aq56R7LAqFGAjA1o6m9Zs%2Bt%2FBEc%2FsVmoits%2BVqu0pkGpuoo4AVYxUofloMPkaGyh4hgJgQVHy1FVvTCi%2BO%2FABjqkAWVgVyMJJd5lIBT821bTo85yM2HFTFMhCQzH%2F4MKC3JK8P8XASJkJu5qECnA5DiX0B5zy9D3bU6PT9Zq3v7v1aXBYqqjbSXTWgQsVIaFEYg6khaJSTcNGWMAI8Cb2k52aKtG4m4NseG9SndBJi2LWBN72mgbvQAOlS0iswOcsupzp0WTiL4naXa055V0r%2FkJq4S1%2Bkj3Ui5hlaUqKecUcgwgfPiP&X-Amz-Signature=5a0e81fc3c34c1a03739bb963277dbfa254e44c0ef598037108a7d18caff7a46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
