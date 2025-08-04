---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK6XAMR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGO2mPt87A8rbXHOqZXNFoAnE6luGEiwb98bUjz2baz7AiB8e6uCakpbMbqs5P%2FLAmybdEIutscIvlnjUZpDDQTImyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMeIdN73omVZSbm9COKtwDuAfM5Cz4r38hn2yt%2FeICRyoY3oqhiR%2BPqcn4PGa4pYD%2FeAWaOuN9AUYo4672Kpi2lz2v79d3s5HFRaLd0HxAudOSENRPLTOIqgwOogDgCdC15EKYIoh7%2BYCGWPS71BOXEovNMdUnARKk6LjUQKnpizQFC5UDzPgY0Uu8f%2F2m9jfojqDZcJgblepsRP2tb0rnPE8tuaeTZ4U%2B6bOHAnO9twGlag6iHE5%2BpcloD%2BU3afyN7eDfGjW%2BLCBgJZaES5iV3QDNGQ34r8fpKpZ4yEjPfCzLzdWmK3nQGYUkgE5VRwjlliH6RrFSjxlbSv%2FPZIDde97nB33AXCWQ2FZPGdN9gOY60DNV9z0iWNwyiYSdNKlB6isudgSW%2BMYBfkWbfxBsmS08fyVJKUGq1yJ5yG00dYTmPRItwTh%2BoExcnR6pXHYCBlSeONy5SKasTt5HltMwNl45h%2FGJhftx1KMDjLwrBIOX75v0%2FgVMnZ8Tph8SfwEntoBbTZ7DgWPEzjYWr%2FY4SD5CSayFYlcGC%2BPRNzQtmrz6%2FcfT8j57LHCpcdvsZkE9ZTU5quk2XTwGKz46gsPyyasL3ZwrD2Hm8UaZXOiIqEEq%2FI2jqm3yjCy44lsx5oJdQSxV6aGFi%2B4HLG0wnLfBxAY6pgFyfJB47t3vIQ6u1%2BPQOPve6i0k2VEnflU18JHD02EHRwmcFOLMJmvj9Jrk2G8DUve00q8ny8KBM8%2B9La2B1I5sq53HsmD%2FPKEdmYVntfYKB496ezk9h4McpKu%2FFigQpGjM8TB%2FqtW1Oj0fJM7NW%2BLntjUa%2Br675GsJlsor2zzDDG1m2VmyQGlZW1KRAWcuAcKO1qF4Nxo56JdaqHeJN%2BYN%2F89A2HIv&X-Amz-Signature=c40c806dba3911eac0a55f9106a974f7e0253acb857663d643555e6fb68c7bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK6XAMR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGO2mPt87A8rbXHOqZXNFoAnE6luGEiwb98bUjz2baz7AiB8e6uCakpbMbqs5P%2FLAmybdEIutscIvlnjUZpDDQTImyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMeIdN73omVZSbm9COKtwDuAfM5Cz4r38hn2yt%2FeICRyoY3oqhiR%2BPqcn4PGa4pYD%2FeAWaOuN9AUYo4672Kpi2lz2v79d3s5HFRaLd0HxAudOSENRPLTOIqgwOogDgCdC15EKYIoh7%2BYCGWPS71BOXEovNMdUnARKk6LjUQKnpizQFC5UDzPgY0Uu8f%2F2m9jfojqDZcJgblepsRP2tb0rnPE8tuaeTZ4U%2B6bOHAnO9twGlag6iHE5%2BpcloD%2BU3afyN7eDfGjW%2BLCBgJZaES5iV3QDNGQ34r8fpKpZ4yEjPfCzLzdWmK3nQGYUkgE5VRwjlliH6RrFSjxlbSv%2FPZIDde97nB33AXCWQ2FZPGdN9gOY60DNV9z0iWNwyiYSdNKlB6isudgSW%2BMYBfkWbfxBsmS08fyVJKUGq1yJ5yG00dYTmPRItwTh%2BoExcnR6pXHYCBlSeONy5SKasTt5HltMwNl45h%2FGJhftx1KMDjLwrBIOX75v0%2FgVMnZ8Tph8SfwEntoBbTZ7DgWPEzjYWr%2FY4SD5CSayFYlcGC%2BPRNzQtmrz6%2FcfT8j57LHCpcdvsZkE9ZTU5quk2XTwGKz46gsPyyasL3ZwrD2Hm8UaZXOiIqEEq%2FI2jqm3yjCy44lsx5oJdQSxV6aGFi%2B4HLG0wnLfBxAY6pgFyfJB47t3vIQ6u1%2BPQOPve6i0k2VEnflU18JHD02EHRwmcFOLMJmvj9Jrk2G8DUve00q8ny8KBM8%2B9La2B1I5sq53HsmD%2FPKEdmYVntfYKB496ezk9h4McpKu%2FFigQpGjM8TB%2FqtW1Oj0fJM7NW%2BLntjUa%2Br675GsJlsor2zzDDG1m2VmyQGlZW1KRAWcuAcKO1qF4Nxo56JdaqHeJN%2BYN%2F89A2HIv&X-Amz-Signature=4327308167fdbffbad819ef7047a8e1a1f4083b5c85e06c4328852e255b58dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK6XAMR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGO2mPt87A8rbXHOqZXNFoAnE6luGEiwb98bUjz2baz7AiB8e6uCakpbMbqs5P%2FLAmybdEIutscIvlnjUZpDDQTImyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMeIdN73omVZSbm9COKtwDuAfM5Cz4r38hn2yt%2FeICRyoY3oqhiR%2BPqcn4PGa4pYD%2FeAWaOuN9AUYo4672Kpi2lz2v79d3s5HFRaLd0HxAudOSENRPLTOIqgwOogDgCdC15EKYIoh7%2BYCGWPS71BOXEovNMdUnARKk6LjUQKnpizQFC5UDzPgY0Uu8f%2F2m9jfojqDZcJgblepsRP2tb0rnPE8tuaeTZ4U%2B6bOHAnO9twGlag6iHE5%2BpcloD%2BU3afyN7eDfGjW%2BLCBgJZaES5iV3QDNGQ34r8fpKpZ4yEjPfCzLzdWmK3nQGYUkgE5VRwjlliH6RrFSjxlbSv%2FPZIDde97nB33AXCWQ2FZPGdN9gOY60DNV9z0iWNwyiYSdNKlB6isudgSW%2BMYBfkWbfxBsmS08fyVJKUGq1yJ5yG00dYTmPRItwTh%2BoExcnR6pXHYCBlSeONy5SKasTt5HltMwNl45h%2FGJhftx1KMDjLwrBIOX75v0%2FgVMnZ8Tph8SfwEntoBbTZ7DgWPEzjYWr%2FY4SD5CSayFYlcGC%2BPRNzQtmrz6%2FcfT8j57LHCpcdvsZkE9ZTU5quk2XTwGKz46gsPyyasL3ZwrD2Hm8UaZXOiIqEEq%2FI2jqm3yjCy44lsx5oJdQSxV6aGFi%2B4HLG0wnLfBxAY6pgFyfJB47t3vIQ6u1%2BPQOPve6i0k2VEnflU18JHD02EHRwmcFOLMJmvj9Jrk2G8DUve00q8ny8KBM8%2B9La2B1I5sq53HsmD%2FPKEdmYVntfYKB496ezk9h4McpKu%2FFigQpGjM8TB%2FqtW1Oj0fJM7NW%2BLntjUa%2Br675GsJlsor2zzDDG1m2VmyQGlZW1KRAWcuAcKO1qF4Nxo56JdaqHeJN%2BYN%2F89A2HIv&X-Amz-Signature=4c41da58f13411cf71da702592d357802a0043ec5c0d2f2951fa22812c664cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK6XAMR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGO2mPt87A8rbXHOqZXNFoAnE6luGEiwb98bUjz2baz7AiB8e6uCakpbMbqs5P%2FLAmybdEIutscIvlnjUZpDDQTImyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMeIdN73omVZSbm9COKtwDuAfM5Cz4r38hn2yt%2FeICRyoY3oqhiR%2BPqcn4PGa4pYD%2FeAWaOuN9AUYo4672Kpi2lz2v79d3s5HFRaLd0HxAudOSENRPLTOIqgwOogDgCdC15EKYIoh7%2BYCGWPS71BOXEovNMdUnARKk6LjUQKnpizQFC5UDzPgY0Uu8f%2F2m9jfojqDZcJgblepsRP2tb0rnPE8tuaeTZ4U%2B6bOHAnO9twGlag6iHE5%2BpcloD%2BU3afyN7eDfGjW%2BLCBgJZaES5iV3QDNGQ34r8fpKpZ4yEjPfCzLzdWmK3nQGYUkgE5VRwjlliH6RrFSjxlbSv%2FPZIDde97nB33AXCWQ2FZPGdN9gOY60DNV9z0iWNwyiYSdNKlB6isudgSW%2BMYBfkWbfxBsmS08fyVJKUGq1yJ5yG00dYTmPRItwTh%2BoExcnR6pXHYCBlSeONy5SKasTt5HltMwNl45h%2FGJhftx1KMDjLwrBIOX75v0%2FgVMnZ8Tph8SfwEntoBbTZ7DgWPEzjYWr%2FY4SD5CSayFYlcGC%2BPRNzQtmrz6%2FcfT8j57LHCpcdvsZkE9ZTU5quk2XTwGKz46gsPyyasL3ZwrD2Hm8UaZXOiIqEEq%2FI2jqm3yjCy44lsx5oJdQSxV6aGFi%2B4HLG0wnLfBxAY6pgFyfJB47t3vIQ6u1%2BPQOPve6i0k2VEnflU18JHD02EHRwmcFOLMJmvj9Jrk2G8DUve00q8ny8KBM8%2B9La2B1I5sq53HsmD%2FPKEdmYVntfYKB496ezk9h4McpKu%2FFigQpGjM8TB%2FqtW1Oj0fJM7NW%2BLntjUa%2Br675GsJlsor2zzDDG1m2VmyQGlZW1KRAWcuAcKO1qF4Nxo56JdaqHeJN%2BYN%2F89A2HIv&X-Amz-Signature=81c09ce5f2ccfde7cacfa1ef015d47eb467ce5f4db32932101c0f174854eb42a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK6XAMR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGO2mPt87A8rbXHOqZXNFoAnE6luGEiwb98bUjz2baz7AiB8e6uCakpbMbqs5P%2FLAmybdEIutscIvlnjUZpDDQTImyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMeIdN73omVZSbm9COKtwDuAfM5Cz4r38hn2yt%2FeICRyoY3oqhiR%2BPqcn4PGa4pYD%2FeAWaOuN9AUYo4672Kpi2lz2v79d3s5HFRaLd0HxAudOSENRPLTOIqgwOogDgCdC15EKYIoh7%2BYCGWPS71BOXEovNMdUnARKk6LjUQKnpizQFC5UDzPgY0Uu8f%2F2m9jfojqDZcJgblepsRP2tb0rnPE8tuaeTZ4U%2B6bOHAnO9twGlag6iHE5%2BpcloD%2BU3afyN7eDfGjW%2BLCBgJZaES5iV3QDNGQ34r8fpKpZ4yEjPfCzLzdWmK3nQGYUkgE5VRwjlliH6RrFSjxlbSv%2FPZIDde97nB33AXCWQ2FZPGdN9gOY60DNV9z0iWNwyiYSdNKlB6isudgSW%2BMYBfkWbfxBsmS08fyVJKUGq1yJ5yG00dYTmPRItwTh%2BoExcnR6pXHYCBlSeONy5SKasTt5HltMwNl45h%2FGJhftx1KMDjLwrBIOX75v0%2FgVMnZ8Tph8SfwEntoBbTZ7DgWPEzjYWr%2FY4SD5CSayFYlcGC%2BPRNzQtmrz6%2FcfT8j57LHCpcdvsZkE9ZTU5quk2XTwGKz46gsPyyasL3ZwrD2Hm8UaZXOiIqEEq%2FI2jqm3yjCy44lsx5oJdQSxV6aGFi%2B4HLG0wnLfBxAY6pgFyfJB47t3vIQ6u1%2BPQOPve6i0k2VEnflU18JHD02EHRwmcFOLMJmvj9Jrk2G8DUve00q8ny8KBM8%2B9La2B1I5sq53HsmD%2FPKEdmYVntfYKB496ezk9h4McpKu%2FFigQpGjM8TB%2FqtW1Oj0fJM7NW%2BLntjUa%2Br675GsJlsor2zzDDG1m2VmyQGlZW1KRAWcuAcKO1qF4Nxo56JdaqHeJN%2BYN%2F89A2HIv&X-Amz-Signature=cd0918432bcd5bac823b727f5a869fac77e36cdb66ebc5fbb3c1bbb51ddd5e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK6XAMR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGO2mPt87A8rbXHOqZXNFoAnE6luGEiwb98bUjz2baz7AiB8e6uCakpbMbqs5P%2FLAmybdEIutscIvlnjUZpDDQTImyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMeIdN73omVZSbm9COKtwDuAfM5Cz4r38hn2yt%2FeICRyoY3oqhiR%2BPqcn4PGa4pYD%2FeAWaOuN9AUYo4672Kpi2lz2v79d3s5HFRaLd0HxAudOSENRPLTOIqgwOogDgCdC15EKYIoh7%2BYCGWPS71BOXEovNMdUnARKk6LjUQKnpizQFC5UDzPgY0Uu8f%2F2m9jfojqDZcJgblepsRP2tb0rnPE8tuaeTZ4U%2B6bOHAnO9twGlag6iHE5%2BpcloD%2BU3afyN7eDfGjW%2BLCBgJZaES5iV3QDNGQ34r8fpKpZ4yEjPfCzLzdWmK3nQGYUkgE5VRwjlliH6RrFSjxlbSv%2FPZIDde97nB33AXCWQ2FZPGdN9gOY60DNV9z0iWNwyiYSdNKlB6isudgSW%2BMYBfkWbfxBsmS08fyVJKUGq1yJ5yG00dYTmPRItwTh%2BoExcnR6pXHYCBlSeONy5SKasTt5HltMwNl45h%2FGJhftx1KMDjLwrBIOX75v0%2FgVMnZ8Tph8SfwEntoBbTZ7DgWPEzjYWr%2FY4SD5CSayFYlcGC%2BPRNzQtmrz6%2FcfT8j57LHCpcdvsZkE9ZTU5quk2XTwGKz46gsPyyasL3ZwrD2Hm8UaZXOiIqEEq%2FI2jqm3yjCy44lsx5oJdQSxV6aGFi%2B4HLG0wnLfBxAY6pgFyfJB47t3vIQ6u1%2BPQOPve6i0k2VEnflU18JHD02EHRwmcFOLMJmvj9Jrk2G8DUve00q8ny8KBM8%2B9La2B1I5sq53HsmD%2FPKEdmYVntfYKB496ezk9h4McpKu%2FFigQpGjM8TB%2FqtW1Oj0fJM7NW%2BLntjUa%2Br675GsJlsor2zzDDG1m2VmyQGlZW1KRAWcuAcKO1qF4Nxo56JdaqHeJN%2BYN%2F89A2HIv&X-Amz-Signature=bee73e9c3399bc6172623b4fef477680d1ea49ddb8105b4d9a140b18d0056d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK6XAMR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGO2mPt87A8rbXHOqZXNFoAnE6luGEiwb98bUjz2baz7AiB8e6uCakpbMbqs5P%2FLAmybdEIutscIvlnjUZpDDQTImyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMeIdN73omVZSbm9COKtwDuAfM5Cz4r38hn2yt%2FeICRyoY3oqhiR%2BPqcn4PGa4pYD%2FeAWaOuN9AUYo4672Kpi2lz2v79d3s5HFRaLd0HxAudOSENRPLTOIqgwOogDgCdC15EKYIoh7%2BYCGWPS71BOXEovNMdUnARKk6LjUQKnpizQFC5UDzPgY0Uu8f%2F2m9jfojqDZcJgblepsRP2tb0rnPE8tuaeTZ4U%2B6bOHAnO9twGlag6iHE5%2BpcloD%2BU3afyN7eDfGjW%2BLCBgJZaES5iV3QDNGQ34r8fpKpZ4yEjPfCzLzdWmK3nQGYUkgE5VRwjlliH6RrFSjxlbSv%2FPZIDde97nB33AXCWQ2FZPGdN9gOY60DNV9z0iWNwyiYSdNKlB6isudgSW%2BMYBfkWbfxBsmS08fyVJKUGq1yJ5yG00dYTmPRItwTh%2BoExcnR6pXHYCBlSeONy5SKasTt5HltMwNl45h%2FGJhftx1KMDjLwrBIOX75v0%2FgVMnZ8Tph8SfwEntoBbTZ7DgWPEzjYWr%2FY4SD5CSayFYlcGC%2BPRNzQtmrz6%2FcfT8j57LHCpcdvsZkE9ZTU5quk2XTwGKz46gsPyyasL3ZwrD2Hm8UaZXOiIqEEq%2FI2jqm3yjCy44lsx5oJdQSxV6aGFi%2B4HLG0wnLfBxAY6pgFyfJB47t3vIQ6u1%2BPQOPve6i0k2VEnflU18JHD02EHRwmcFOLMJmvj9Jrk2G8DUve00q8ny8KBM8%2B9La2B1I5sq53HsmD%2FPKEdmYVntfYKB496ezk9h4McpKu%2FFigQpGjM8TB%2FqtW1Oj0fJM7NW%2BLntjUa%2Br675GsJlsor2zzDDG1m2VmyQGlZW1KRAWcuAcKO1qF4Nxo56JdaqHeJN%2BYN%2F89A2HIv&X-Amz-Signature=03e924c27b7cd49f55d4944102335fe1331affee56c46c806f1a22e6ca826f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK6XAMR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGO2mPt87A8rbXHOqZXNFoAnE6luGEiwb98bUjz2baz7AiB8e6uCakpbMbqs5P%2FLAmybdEIutscIvlnjUZpDDQTImyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMeIdN73omVZSbm9COKtwDuAfM5Cz4r38hn2yt%2FeICRyoY3oqhiR%2BPqcn4PGa4pYD%2FeAWaOuN9AUYo4672Kpi2lz2v79d3s5HFRaLd0HxAudOSENRPLTOIqgwOogDgCdC15EKYIoh7%2BYCGWPS71BOXEovNMdUnARKk6LjUQKnpizQFC5UDzPgY0Uu8f%2F2m9jfojqDZcJgblepsRP2tb0rnPE8tuaeTZ4U%2B6bOHAnO9twGlag6iHE5%2BpcloD%2BU3afyN7eDfGjW%2BLCBgJZaES5iV3QDNGQ34r8fpKpZ4yEjPfCzLzdWmK3nQGYUkgE5VRwjlliH6RrFSjxlbSv%2FPZIDde97nB33AXCWQ2FZPGdN9gOY60DNV9z0iWNwyiYSdNKlB6isudgSW%2BMYBfkWbfxBsmS08fyVJKUGq1yJ5yG00dYTmPRItwTh%2BoExcnR6pXHYCBlSeONy5SKasTt5HltMwNl45h%2FGJhftx1KMDjLwrBIOX75v0%2FgVMnZ8Tph8SfwEntoBbTZ7DgWPEzjYWr%2FY4SD5CSayFYlcGC%2BPRNzQtmrz6%2FcfT8j57LHCpcdvsZkE9ZTU5quk2XTwGKz46gsPyyasL3ZwrD2Hm8UaZXOiIqEEq%2FI2jqm3yjCy44lsx5oJdQSxV6aGFi%2B4HLG0wnLfBxAY6pgFyfJB47t3vIQ6u1%2BPQOPve6i0k2VEnflU18JHD02EHRwmcFOLMJmvj9Jrk2G8DUve00q8ny8KBM8%2B9La2B1I5sq53HsmD%2FPKEdmYVntfYKB496ezk9h4McpKu%2FFigQpGjM8TB%2FqtW1Oj0fJM7NW%2BLntjUa%2Br675GsJlsor2zzDDG1m2VmyQGlZW1KRAWcuAcKO1qF4Nxo56JdaqHeJN%2BYN%2F89A2HIv&X-Amz-Signature=84ec5772e6a8f225f7b571bdbdbcafde15503a6285e7a1601586e883995fc440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
