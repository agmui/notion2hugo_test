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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7UB6I6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAo6ivFR7xAJeXxIXqPoTLnSb1AEtnOtSiqRyAVp5lO7AiEAxbuM%2FP6VqlQmT4BqL6jJ%2Farg1UNM4c91Ldx%2F1ouXFyUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJXSfWeCeQhQdM%2BERircA2R2p0UebRcjuc770HtfK3sGRkQKXQLwAK4NGFP0CQujKRDGo6H9a2nYMgwCZSvZs4Iv62UJQI7NDpcsEp1maKcJZKPSX8yDqlu0rTHhPu9%2FNlQvnudu0yWVjk%2BjrhCGXlxlNTBKutAz%2BhDxEG6OSu2G%2BGIlNgH1jWiQuTeHrxjQgf95qILpqTsYqGkYml0D3PZJuqeYKTnu84j%2FWQJAkrIU5WbG9VWZHntNa1rOMw5vY%2B2Ssw3093qRaWDILReRd7dbr30Yhcg3R8mON3ZDeTN5gbieMg180d6hwcQZiNlhxEcJ8Kl4Z4w1mFEQL86k52hvf7FOiK%2FpA4zlCrXo7Kv8wzxtyTTPcXzln91AkzI6%2F9wQ74%2BxobpQp3WBYiQUCg5llx5KWwwT1C1034dYTHGypUfRwogAv64BUOB%2Blbu4xy%2B%2FKoyX6BN80iDlODS6f0UlUDHpmCka3Pr8gBi9eLs8bTtfL6Hi1raui5PIa0qpYr6cCNJiqhQDMWxvJWefjyCXVmABWKQ7AFaXw5OzIyEJGjsdCgfC4epkiFfXnUJRUuiEgBblCMCLn50bP6ql7nm3jkAnmKeoHX2cKPMlez4XcjQjkqaMELxFpu6b814zHevywt1RY11oDNtTMIuNhsIGOqUBSKvQVdjtDx%2BmRh5bLZJAk%2Bq9eD2ZXODLYaERLkxXBwVi80frFJ1janc4gl2untVXFGldg9hMza08QUBjirzk2fw5v4dbb5u%2F73KQDhFGfCc7yZXQPccUKZASDYjxyjOEZMlj6aZ7YXAFib%2BVnP5NjyMXBeZzpHh18%2BFSi2QRT57HQ5hjVWYOGPj%2BDGrJjJNKYlXUAxZ5%2Ftkaqunwu1KGVQ%2B14fth&X-Amz-Signature=aec66bd86b5a43bdf6284097da8311a5339ec6808dde46bba8ed33b7e4e79e82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7UB6I6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAo6ivFR7xAJeXxIXqPoTLnSb1AEtnOtSiqRyAVp5lO7AiEAxbuM%2FP6VqlQmT4BqL6jJ%2Farg1UNM4c91Ldx%2F1ouXFyUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJXSfWeCeQhQdM%2BERircA2R2p0UebRcjuc770HtfK3sGRkQKXQLwAK4NGFP0CQujKRDGo6H9a2nYMgwCZSvZs4Iv62UJQI7NDpcsEp1maKcJZKPSX8yDqlu0rTHhPu9%2FNlQvnudu0yWVjk%2BjrhCGXlxlNTBKutAz%2BhDxEG6OSu2G%2BGIlNgH1jWiQuTeHrxjQgf95qILpqTsYqGkYml0D3PZJuqeYKTnu84j%2FWQJAkrIU5WbG9VWZHntNa1rOMw5vY%2B2Ssw3093qRaWDILReRd7dbr30Yhcg3R8mON3ZDeTN5gbieMg180d6hwcQZiNlhxEcJ8Kl4Z4w1mFEQL86k52hvf7FOiK%2FpA4zlCrXo7Kv8wzxtyTTPcXzln91AkzI6%2F9wQ74%2BxobpQp3WBYiQUCg5llx5KWwwT1C1034dYTHGypUfRwogAv64BUOB%2Blbu4xy%2B%2FKoyX6BN80iDlODS6f0UlUDHpmCka3Pr8gBi9eLs8bTtfL6Hi1raui5PIa0qpYr6cCNJiqhQDMWxvJWefjyCXVmABWKQ7AFaXw5OzIyEJGjsdCgfC4epkiFfXnUJRUuiEgBblCMCLn50bP6ql7nm3jkAnmKeoHX2cKPMlez4XcjQjkqaMELxFpu6b814zHevywt1RY11oDNtTMIuNhsIGOqUBSKvQVdjtDx%2BmRh5bLZJAk%2Bq9eD2ZXODLYaERLkxXBwVi80frFJ1janc4gl2untVXFGldg9hMza08QUBjirzk2fw5v4dbb5u%2F73KQDhFGfCc7yZXQPccUKZASDYjxyjOEZMlj6aZ7YXAFib%2BVnP5NjyMXBeZzpHh18%2BFSi2QRT57HQ5hjVWYOGPj%2BDGrJjJNKYlXUAxZ5%2Ftkaqunwu1KGVQ%2B14fth&X-Amz-Signature=f384552d7c6d43abe934cbdd4a94f997a04a4b9186377494e5b0ea8d90dc5eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7UB6I6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAo6ivFR7xAJeXxIXqPoTLnSb1AEtnOtSiqRyAVp5lO7AiEAxbuM%2FP6VqlQmT4BqL6jJ%2Farg1UNM4c91Ldx%2F1ouXFyUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJXSfWeCeQhQdM%2BERircA2R2p0UebRcjuc770HtfK3sGRkQKXQLwAK4NGFP0CQujKRDGo6H9a2nYMgwCZSvZs4Iv62UJQI7NDpcsEp1maKcJZKPSX8yDqlu0rTHhPu9%2FNlQvnudu0yWVjk%2BjrhCGXlxlNTBKutAz%2BhDxEG6OSu2G%2BGIlNgH1jWiQuTeHrxjQgf95qILpqTsYqGkYml0D3PZJuqeYKTnu84j%2FWQJAkrIU5WbG9VWZHntNa1rOMw5vY%2B2Ssw3093qRaWDILReRd7dbr30Yhcg3R8mON3ZDeTN5gbieMg180d6hwcQZiNlhxEcJ8Kl4Z4w1mFEQL86k52hvf7FOiK%2FpA4zlCrXo7Kv8wzxtyTTPcXzln91AkzI6%2F9wQ74%2BxobpQp3WBYiQUCg5llx5KWwwT1C1034dYTHGypUfRwogAv64BUOB%2Blbu4xy%2B%2FKoyX6BN80iDlODS6f0UlUDHpmCka3Pr8gBi9eLs8bTtfL6Hi1raui5PIa0qpYr6cCNJiqhQDMWxvJWefjyCXVmABWKQ7AFaXw5OzIyEJGjsdCgfC4epkiFfXnUJRUuiEgBblCMCLn50bP6ql7nm3jkAnmKeoHX2cKPMlez4XcjQjkqaMELxFpu6b814zHevywt1RY11oDNtTMIuNhsIGOqUBSKvQVdjtDx%2BmRh5bLZJAk%2Bq9eD2ZXODLYaERLkxXBwVi80frFJ1janc4gl2untVXFGldg9hMza08QUBjirzk2fw5v4dbb5u%2F73KQDhFGfCc7yZXQPccUKZASDYjxyjOEZMlj6aZ7YXAFib%2BVnP5NjyMXBeZzpHh18%2BFSi2QRT57HQ5hjVWYOGPj%2BDGrJjJNKYlXUAxZ5%2Ftkaqunwu1KGVQ%2B14fth&X-Amz-Signature=cab3ac24ebd6c747861ed898e78bf5dd41005aa5aad7c21a98e0c671322b3f51&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7UB6I6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAo6ivFR7xAJeXxIXqPoTLnSb1AEtnOtSiqRyAVp5lO7AiEAxbuM%2FP6VqlQmT4BqL6jJ%2Farg1UNM4c91Ldx%2F1ouXFyUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJXSfWeCeQhQdM%2BERircA2R2p0UebRcjuc770HtfK3sGRkQKXQLwAK4NGFP0CQujKRDGo6H9a2nYMgwCZSvZs4Iv62UJQI7NDpcsEp1maKcJZKPSX8yDqlu0rTHhPu9%2FNlQvnudu0yWVjk%2BjrhCGXlxlNTBKutAz%2BhDxEG6OSu2G%2BGIlNgH1jWiQuTeHrxjQgf95qILpqTsYqGkYml0D3PZJuqeYKTnu84j%2FWQJAkrIU5WbG9VWZHntNa1rOMw5vY%2B2Ssw3093qRaWDILReRd7dbr30Yhcg3R8mON3ZDeTN5gbieMg180d6hwcQZiNlhxEcJ8Kl4Z4w1mFEQL86k52hvf7FOiK%2FpA4zlCrXo7Kv8wzxtyTTPcXzln91AkzI6%2F9wQ74%2BxobpQp3WBYiQUCg5llx5KWwwT1C1034dYTHGypUfRwogAv64BUOB%2Blbu4xy%2B%2FKoyX6BN80iDlODS6f0UlUDHpmCka3Pr8gBi9eLs8bTtfL6Hi1raui5PIa0qpYr6cCNJiqhQDMWxvJWefjyCXVmABWKQ7AFaXw5OzIyEJGjsdCgfC4epkiFfXnUJRUuiEgBblCMCLn50bP6ql7nm3jkAnmKeoHX2cKPMlez4XcjQjkqaMELxFpu6b814zHevywt1RY11oDNtTMIuNhsIGOqUBSKvQVdjtDx%2BmRh5bLZJAk%2Bq9eD2ZXODLYaERLkxXBwVi80frFJ1janc4gl2untVXFGldg9hMza08QUBjirzk2fw5v4dbb5u%2F73KQDhFGfCc7yZXQPccUKZASDYjxyjOEZMlj6aZ7YXAFib%2BVnP5NjyMXBeZzpHh18%2BFSi2QRT57HQ5hjVWYOGPj%2BDGrJjJNKYlXUAxZ5%2Ftkaqunwu1KGVQ%2B14fth&X-Amz-Signature=05ce404f7e18d695142978b83b7521e4419ac3734696cbf5dee7db1488901540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7UB6I6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAo6ivFR7xAJeXxIXqPoTLnSb1AEtnOtSiqRyAVp5lO7AiEAxbuM%2FP6VqlQmT4BqL6jJ%2Farg1UNM4c91Ldx%2F1ouXFyUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJXSfWeCeQhQdM%2BERircA2R2p0UebRcjuc770HtfK3sGRkQKXQLwAK4NGFP0CQujKRDGo6H9a2nYMgwCZSvZs4Iv62UJQI7NDpcsEp1maKcJZKPSX8yDqlu0rTHhPu9%2FNlQvnudu0yWVjk%2BjrhCGXlxlNTBKutAz%2BhDxEG6OSu2G%2BGIlNgH1jWiQuTeHrxjQgf95qILpqTsYqGkYml0D3PZJuqeYKTnu84j%2FWQJAkrIU5WbG9VWZHntNa1rOMw5vY%2B2Ssw3093qRaWDILReRd7dbr30Yhcg3R8mON3ZDeTN5gbieMg180d6hwcQZiNlhxEcJ8Kl4Z4w1mFEQL86k52hvf7FOiK%2FpA4zlCrXo7Kv8wzxtyTTPcXzln91AkzI6%2F9wQ74%2BxobpQp3WBYiQUCg5llx5KWwwT1C1034dYTHGypUfRwogAv64BUOB%2Blbu4xy%2B%2FKoyX6BN80iDlODS6f0UlUDHpmCka3Pr8gBi9eLs8bTtfL6Hi1raui5PIa0qpYr6cCNJiqhQDMWxvJWefjyCXVmABWKQ7AFaXw5OzIyEJGjsdCgfC4epkiFfXnUJRUuiEgBblCMCLn50bP6ql7nm3jkAnmKeoHX2cKPMlez4XcjQjkqaMELxFpu6b814zHevywt1RY11oDNtTMIuNhsIGOqUBSKvQVdjtDx%2BmRh5bLZJAk%2Bq9eD2ZXODLYaERLkxXBwVi80frFJ1janc4gl2untVXFGldg9hMza08QUBjirzk2fw5v4dbb5u%2F73KQDhFGfCc7yZXQPccUKZASDYjxyjOEZMlj6aZ7YXAFib%2BVnP5NjyMXBeZzpHh18%2BFSi2QRT57HQ5hjVWYOGPj%2BDGrJjJNKYlXUAxZ5%2Ftkaqunwu1KGVQ%2B14fth&X-Amz-Signature=4f456cd32bc972d968cd2548707296dc3c011cca0661c9c9a1be0cf202c316c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7UB6I6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAo6ivFR7xAJeXxIXqPoTLnSb1AEtnOtSiqRyAVp5lO7AiEAxbuM%2FP6VqlQmT4BqL6jJ%2Farg1UNM4c91Ldx%2F1ouXFyUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJXSfWeCeQhQdM%2BERircA2R2p0UebRcjuc770HtfK3sGRkQKXQLwAK4NGFP0CQujKRDGo6H9a2nYMgwCZSvZs4Iv62UJQI7NDpcsEp1maKcJZKPSX8yDqlu0rTHhPu9%2FNlQvnudu0yWVjk%2BjrhCGXlxlNTBKutAz%2BhDxEG6OSu2G%2BGIlNgH1jWiQuTeHrxjQgf95qILpqTsYqGkYml0D3PZJuqeYKTnu84j%2FWQJAkrIU5WbG9VWZHntNa1rOMw5vY%2B2Ssw3093qRaWDILReRd7dbr30Yhcg3R8mON3ZDeTN5gbieMg180d6hwcQZiNlhxEcJ8Kl4Z4w1mFEQL86k52hvf7FOiK%2FpA4zlCrXo7Kv8wzxtyTTPcXzln91AkzI6%2F9wQ74%2BxobpQp3WBYiQUCg5llx5KWwwT1C1034dYTHGypUfRwogAv64BUOB%2Blbu4xy%2B%2FKoyX6BN80iDlODS6f0UlUDHpmCka3Pr8gBi9eLs8bTtfL6Hi1raui5PIa0qpYr6cCNJiqhQDMWxvJWefjyCXVmABWKQ7AFaXw5OzIyEJGjsdCgfC4epkiFfXnUJRUuiEgBblCMCLn50bP6ql7nm3jkAnmKeoHX2cKPMlez4XcjQjkqaMELxFpu6b814zHevywt1RY11oDNtTMIuNhsIGOqUBSKvQVdjtDx%2BmRh5bLZJAk%2Bq9eD2ZXODLYaERLkxXBwVi80frFJ1janc4gl2untVXFGldg9hMza08QUBjirzk2fw5v4dbb5u%2F73KQDhFGfCc7yZXQPccUKZASDYjxyjOEZMlj6aZ7YXAFib%2BVnP5NjyMXBeZzpHh18%2BFSi2QRT57HQ5hjVWYOGPj%2BDGrJjJNKYlXUAxZ5%2Ftkaqunwu1KGVQ%2B14fth&X-Amz-Signature=5d7ef27ddc02fe86f4658dec5921c047cd083b351a5cf4324d076eacc40b5609&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7UB6I6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAo6ivFR7xAJeXxIXqPoTLnSb1AEtnOtSiqRyAVp5lO7AiEAxbuM%2FP6VqlQmT4BqL6jJ%2Farg1UNM4c91Ldx%2F1ouXFyUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJXSfWeCeQhQdM%2BERircA2R2p0UebRcjuc770HtfK3sGRkQKXQLwAK4NGFP0CQujKRDGo6H9a2nYMgwCZSvZs4Iv62UJQI7NDpcsEp1maKcJZKPSX8yDqlu0rTHhPu9%2FNlQvnudu0yWVjk%2BjrhCGXlxlNTBKutAz%2BhDxEG6OSu2G%2BGIlNgH1jWiQuTeHrxjQgf95qILpqTsYqGkYml0D3PZJuqeYKTnu84j%2FWQJAkrIU5WbG9VWZHntNa1rOMw5vY%2B2Ssw3093qRaWDILReRd7dbr30Yhcg3R8mON3ZDeTN5gbieMg180d6hwcQZiNlhxEcJ8Kl4Z4w1mFEQL86k52hvf7FOiK%2FpA4zlCrXo7Kv8wzxtyTTPcXzln91AkzI6%2F9wQ74%2BxobpQp3WBYiQUCg5llx5KWwwT1C1034dYTHGypUfRwogAv64BUOB%2Blbu4xy%2B%2FKoyX6BN80iDlODS6f0UlUDHpmCka3Pr8gBi9eLs8bTtfL6Hi1raui5PIa0qpYr6cCNJiqhQDMWxvJWefjyCXVmABWKQ7AFaXw5OzIyEJGjsdCgfC4epkiFfXnUJRUuiEgBblCMCLn50bP6ql7nm3jkAnmKeoHX2cKPMlez4XcjQjkqaMELxFpu6b814zHevywt1RY11oDNtTMIuNhsIGOqUBSKvQVdjtDx%2BmRh5bLZJAk%2Bq9eD2ZXODLYaERLkxXBwVi80frFJ1janc4gl2untVXFGldg9hMza08QUBjirzk2fw5v4dbb5u%2F73KQDhFGfCc7yZXQPccUKZASDYjxyjOEZMlj6aZ7YXAFib%2BVnP5NjyMXBeZzpHh18%2BFSi2QRT57HQ5hjVWYOGPj%2BDGrJjJNKYlXUAxZ5%2Ftkaqunwu1KGVQ%2B14fth&X-Amz-Signature=2ccae01f79123a3667275b6a9afd90f8ff3f777b83e4bbd8176e2bf92474ffe5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7UB6I6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAo6ivFR7xAJeXxIXqPoTLnSb1AEtnOtSiqRyAVp5lO7AiEAxbuM%2FP6VqlQmT4BqL6jJ%2Farg1UNM4c91Ldx%2F1ouXFyUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJXSfWeCeQhQdM%2BERircA2R2p0UebRcjuc770HtfK3sGRkQKXQLwAK4NGFP0CQujKRDGo6H9a2nYMgwCZSvZs4Iv62UJQI7NDpcsEp1maKcJZKPSX8yDqlu0rTHhPu9%2FNlQvnudu0yWVjk%2BjrhCGXlxlNTBKutAz%2BhDxEG6OSu2G%2BGIlNgH1jWiQuTeHrxjQgf95qILpqTsYqGkYml0D3PZJuqeYKTnu84j%2FWQJAkrIU5WbG9VWZHntNa1rOMw5vY%2B2Ssw3093qRaWDILReRd7dbr30Yhcg3R8mON3ZDeTN5gbieMg180d6hwcQZiNlhxEcJ8Kl4Z4w1mFEQL86k52hvf7FOiK%2FpA4zlCrXo7Kv8wzxtyTTPcXzln91AkzI6%2F9wQ74%2BxobpQp3WBYiQUCg5llx5KWwwT1C1034dYTHGypUfRwogAv64BUOB%2Blbu4xy%2B%2FKoyX6BN80iDlODS6f0UlUDHpmCka3Pr8gBi9eLs8bTtfL6Hi1raui5PIa0qpYr6cCNJiqhQDMWxvJWefjyCXVmABWKQ7AFaXw5OzIyEJGjsdCgfC4epkiFfXnUJRUuiEgBblCMCLn50bP6ql7nm3jkAnmKeoHX2cKPMlez4XcjQjkqaMELxFpu6b814zHevywt1RY11oDNtTMIuNhsIGOqUBSKvQVdjtDx%2BmRh5bLZJAk%2Bq9eD2ZXODLYaERLkxXBwVi80frFJ1janc4gl2untVXFGldg9hMza08QUBjirzk2fw5v4dbb5u%2F73KQDhFGfCc7yZXQPccUKZASDYjxyjOEZMlj6aZ7YXAFib%2BVnP5NjyMXBeZzpHh18%2BFSi2QRT57HQ5hjVWYOGPj%2BDGrJjJNKYlXUAxZ5%2Ftkaqunwu1KGVQ%2B14fth&X-Amz-Signature=e3892212b1a75d7589043998e8ad7237a92bbd050d9571c831419966d8098d63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
