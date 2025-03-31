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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=e1736e0fe8e97203213c38cc4f59389afc53f7772dd2569c5703d5b788644766&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=68214c49bc80a2c3f08fa2923ab35580ed9794e4f1df2ad89ff3a7797f0ccba0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=2ae0f3d94e3a3f5e3a5c3437e66e146ed6d119e62f0151405d2f70034e25a3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=feec512376abb000151b99367c7e6ed8433dfdc20d1881b1e2c71d8ac8cddd16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=5cd86bbae7f45c06a476151584a3f6db988b4fe34cb41e301e7e28f339330393&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=30205ddd656811e90f607784041f964a125e97c15ea27a8c2573170131655c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=60928622f47918c420eb2235353569daf68317d35ad0d23124b4fa4c896d4050&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=1bc9a4036d198b42d2a7ab093f9acc7347d48f8c9261dcfe2bab0532c79c4f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
