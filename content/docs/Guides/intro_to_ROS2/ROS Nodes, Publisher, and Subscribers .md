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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVQIIZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDTy%2BAecd52cowM%2BsQ%2B2SL1WZt6VTztu07ArRGdOW8iWAiEAiJ3mKxEbHQ9I%2BpWMskDjyWD10CsJJTXxR8cnr10ghd0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEm4PzsKxp57VRvXxircAwc%2F8eiPaHRcyURzpOaNXotGxTLDYD0Mszml%2FbccwOE5cBEVMSYtsNHLHD4HmV0QZxaEmRL4t%2B6NiPbBmOWWGA4x1BQPSVO1z2eTgpi5bP5dFqwuOPuU0c4KG6QkFysvarsNctD%2F992p4Hvfl%2FiZxNmoHwtvjl77n9KAQpvWqK%2Bwrhm3nD5h%2F5qhKa3sqvgcAD7%2BTa7H3o4jBUE%2FQ5vqTe45UGrpQ9x0OYVn7ZyxINpn6PbrW5o4lNDTNlbDOsvVtuA%2Bj8Pymkmjenrn3JTZTXDAPR%2FbD%2BYDIzFrFkQaLL2S0MrPGIymZAdol5zoiwaIZtcjeMa9hWb52tt0hwadRkDdZlQnuT18FLHgoc2Bz0hrvB7g781EcsLpCtz1KzKFpeaM44TneXQWdkTucrMDdjsjBjig%2BD861DIBMRmdS8yu%2FOvuFo5n%2BHcep0REAKoLHHaYkI3rX5%2BixzO1KkaqOUh1pol2lMBVy2RQm2mR8tV2Wrw5qFSxZdTvOOtwpke4h5vH7Ms1K%2FSrka2gf3E4pYHaARXcNuw4qG3OsCZmGzRbwtv8y1fCJ1lebXjfOiHIKQgUHbiW7wiHegIhrrB8zeFRvppy3i6oNZS9QZ7jJNedEw4cbfinOxo28f4qMOybw70GOqUBqY5bTGZqAYtfP9lN6LEFAV5kVWNlyLzU79opI%2BE%2Bw%2FMszeSAICyKnBjxO1qfDIaaxqVAN2Zlt22YtYIKs5Ce7UZteElrqCr2DZ%2F5BxjkBmg23NV3n5svWMnlPG78aqysb%2FyRgw4UbLS8V%2BPZM9cCodiQ8JpeLMKL%2FfgWLkEuLgEGoP%2BPx2mHPFGt3ua2sR7IPCEEiD0a3cVKGPRJBfKKWgY87NDj&X-Amz-Signature=165235e397a8ce5043524298445bb2409eb0fb71f885e6a36108050e10c96b93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVQIIZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDTy%2BAecd52cowM%2BsQ%2B2SL1WZt6VTztu07ArRGdOW8iWAiEAiJ3mKxEbHQ9I%2BpWMskDjyWD10CsJJTXxR8cnr10ghd0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEm4PzsKxp57VRvXxircAwc%2F8eiPaHRcyURzpOaNXotGxTLDYD0Mszml%2FbccwOE5cBEVMSYtsNHLHD4HmV0QZxaEmRL4t%2B6NiPbBmOWWGA4x1BQPSVO1z2eTgpi5bP5dFqwuOPuU0c4KG6QkFysvarsNctD%2F992p4Hvfl%2FiZxNmoHwtvjl77n9KAQpvWqK%2Bwrhm3nD5h%2F5qhKa3sqvgcAD7%2BTa7H3o4jBUE%2FQ5vqTe45UGrpQ9x0OYVn7ZyxINpn6PbrW5o4lNDTNlbDOsvVtuA%2Bj8Pymkmjenrn3JTZTXDAPR%2FbD%2BYDIzFrFkQaLL2S0MrPGIymZAdol5zoiwaIZtcjeMa9hWb52tt0hwadRkDdZlQnuT18FLHgoc2Bz0hrvB7g781EcsLpCtz1KzKFpeaM44TneXQWdkTucrMDdjsjBjig%2BD861DIBMRmdS8yu%2FOvuFo5n%2BHcep0REAKoLHHaYkI3rX5%2BixzO1KkaqOUh1pol2lMBVy2RQm2mR8tV2Wrw5qFSxZdTvOOtwpke4h5vH7Ms1K%2FSrka2gf3E4pYHaARXcNuw4qG3OsCZmGzRbwtv8y1fCJ1lebXjfOiHIKQgUHbiW7wiHegIhrrB8zeFRvppy3i6oNZS9QZ7jJNedEw4cbfinOxo28f4qMOybw70GOqUBqY5bTGZqAYtfP9lN6LEFAV5kVWNlyLzU79opI%2BE%2Bw%2FMszeSAICyKnBjxO1qfDIaaxqVAN2Zlt22YtYIKs5Ce7UZteElrqCr2DZ%2F5BxjkBmg23NV3n5svWMnlPG78aqysb%2FyRgw4UbLS8V%2BPZM9cCodiQ8JpeLMKL%2FfgWLkEuLgEGoP%2BPx2mHPFGt3ua2sR7IPCEEiD0a3cVKGPRJBfKKWgY87NDj&X-Amz-Signature=b0c2ea60f982e2f4ed655f9936b8a056fc8ef4cf70caf7b054046a7dda891d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVQIIZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDTy%2BAecd52cowM%2BsQ%2B2SL1WZt6VTztu07ArRGdOW8iWAiEAiJ3mKxEbHQ9I%2BpWMskDjyWD10CsJJTXxR8cnr10ghd0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEm4PzsKxp57VRvXxircAwc%2F8eiPaHRcyURzpOaNXotGxTLDYD0Mszml%2FbccwOE5cBEVMSYtsNHLHD4HmV0QZxaEmRL4t%2B6NiPbBmOWWGA4x1BQPSVO1z2eTgpi5bP5dFqwuOPuU0c4KG6QkFysvarsNctD%2F992p4Hvfl%2FiZxNmoHwtvjl77n9KAQpvWqK%2Bwrhm3nD5h%2F5qhKa3sqvgcAD7%2BTa7H3o4jBUE%2FQ5vqTe45UGrpQ9x0OYVn7ZyxINpn6PbrW5o4lNDTNlbDOsvVtuA%2Bj8Pymkmjenrn3JTZTXDAPR%2FbD%2BYDIzFrFkQaLL2S0MrPGIymZAdol5zoiwaIZtcjeMa9hWb52tt0hwadRkDdZlQnuT18FLHgoc2Bz0hrvB7g781EcsLpCtz1KzKFpeaM44TneXQWdkTucrMDdjsjBjig%2BD861DIBMRmdS8yu%2FOvuFo5n%2BHcep0REAKoLHHaYkI3rX5%2BixzO1KkaqOUh1pol2lMBVy2RQm2mR8tV2Wrw5qFSxZdTvOOtwpke4h5vH7Ms1K%2FSrka2gf3E4pYHaARXcNuw4qG3OsCZmGzRbwtv8y1fCJ1lebXjfOiHIKQgUHbiW7wiHegIhrrB8zeFRvppy3i6oNZS9QZ7jJNedEw4cbfinOxo28f4qMOybw70GOqUBqY5bTGZqAYtfP9lN6LEFAV5kVWNlyLzU79opI%2BE%2Bw%2FMszeSAICyKnBjxO1qfDIaaxqVAN2Zlt22YtYIKs5Ce7UZteElrqCr2DZ%2F5BxjkBmg23NV3n5svWMnlPG78aqysb%2FyRgw4UbLS8V%2BPZM9cCodiQ8JpeLMKL%2FfgWLkEuLgEGoP%2BPx2mHPFGt3ua2sR7IPCEEiD0a3cVKGPRJBfKKWgY87NDj&X-Amz-Signature=469d0bc32c1325bf65259a6f96f4a37bee44b2bcf55ecc375505ddbe429bb65e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVQIIZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDTy%2BAecd52cowM%2BsQ%2B2SL1WZt6VTztu07ArRGdOW8iWAiEAiJ3mKxEbHQ9I%2BpWMskDjyWD10CsJJTXxR8cnr10ghd0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEm4PzsKxp57VRvXxircAwc%2F8eiPaHRcyURzpOaNXotGxTLDYD0Mszml%2FbccwOE5cBEVMSYtsNHLHD4HmV0QZxaEmRL4t%2B6NiPbBmOWWGA4x1BQPSVO1z2eTgpi5bP5dFqwuOPuU0c4KG6QkFysvarsNctD%2F992p4Hvfl%2FiZxNmoHwtvjl77n9KAQpvWqK%2Bwrhm3nD5h%2F5qhKa3sqvgcAD7%2BTa7H3o4jBUE%2FQ5vqTe45UGrpQ9x0OYVn7ZyxINpn6PbrW5o4lNDTNlbDOsvVtuA%2Bj8Pymkmjenrn3JTZTXDAPR%2FbD%2BYDIzFrFkQaLL2S0MrPGIymZAdol5zoiwaIZtcjeMa9hWb52tt0hwadRkDdZlQnuT18FLHgoc2Bz0hrvB7g781EcsLpCtz1KzKFpeaM44TneXQWdkTucrMDdjsjBjig%2BD861DIBMRmdS8yu%2FOvuFo5n%2BHcep0REAKoLHHaYkI3rX5%2BixzO1KkaqOUh1pol2lMBVy2RQm2mR8tV2Wrw5qFSxZdTvOOtwpke4h5vH7Ms1K%2FSrka2gf3E4pYHaARXcNuw4qG3OsCZmGzRbwtv8y1fCJ1lebXjfOiHIKQgUHbiW7wiHegIhrrB8zeFRvppy3i6oNZS9QZ7jJNedEw4cbfinOxo28f4qMOybw70GOqUBqY5bTGZqAYtfP9lN6LEFAV5kVWNlyLzU79opI%2BE%2Bw%2FMszeSAICyKnBjxO1qfDIaaxqVAN2Zlt22YtYIKs5Ce7UZteElrqCr2DZ%2F5BxjkBmg23NV3n5svWMnlPG78aqysb%2FyRgw4UbLS8V%2BPZM9cCodiQ8JpeLMKL%2FfgWLkEuLgEGoP%2BPx2mHPFGt3ua2sR7IPCEEiD0a3cVKGPRJBfKKWgY87NDj&X-Amz-Signature=beaa1e0d48b2da5385087a1b0aca0f190e8d2a23e20e5d60af20753129a24522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVQIIZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDTy%2BAecd52cowM%2BsQ%2B2SL1WZt6VTztu07ArRGdOW8iWAiEAiJ3mKxEbHQ9I%2BpWMskDjyWD10CsJJTXxR8cnr10ghd0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEm4PzsKxp57VRvXxircAwc%2F8eiPaHRcyURzpOaNXotGxTLDYD0Mszml%2FbccwOE5cBEVMSYtsNHLHD4HmV0QZxaEmRL4t%2B6NiPbBmOWWGA4x1BQPSVO1z2eTgpi5bP5dFqwuOPuU0c4KG6QkFysvarsNctD%2F992p4Hvfl%2FiZxNmoHwtvjl77n9KAQpvWqK%2Bwrhm3nD5h%2F5qhKa3sqvgcAD7%2BTa7H3o4jBUE%2FQ5vqTe45UGrpQ9x0OYVn7ZyxINpn6PbrW5o4lNDTNlbDOsvVtuA%2Bj8Pymkmjenrn3JTZTXDAPR%2FbD%2BYDIzFrFkQaLL2S0MrPGIymZAdol5zoiwaIZtcjeMa9hWb52tt0hwadRkDdZlQnuT18FLHgoc2Bz0hrvB7g781EcsLpCtz1KzKFpeaM44TneXQWdkTucrMDdjsjBjig%2BD861DIBMRmdS8yu%2FOvuFo5n%2BHcep0REAKoLHHaYkI3rX5%2BixzO1KkaqOUh1pol2lMBVy2RQm2mR8tV2Wrw5qFSxZdTvOOtwpke4h5vH7Ms1K%2FSrka2gf3E4pYHaARXcNuw4qG3OsCZmGzRbwtv8y1fCJ1lebXjfOiHIKQgUHbiW7wiHegIhrrB8zeFRvppy3i6oNZS9QZ7jJNedEw4cbfinOxo28f4qMOybw70GOqUBqY5bTGZqAYtfP9lN6LEFAV5kVWNlyLzU79opI%2BE%2Bw%2FMszeSAICyKnBjxO1qfDIaaxqVAN2Zlt22YtYIKs5Ce7UZteElrqCr2DZ%2F5BxjkBmg23NV3n5svWMnlPG78aqysb%2FyRgw4UbLS8V%2BPZM9cCodiQ8JpeLMKL%2FfgWLkEuLgEGoP%2BPx2mHPFGt3ua2sR7IPCEEiD0a3cVKGPRJBfKKWgY87NDj&X-Amz-Signature=e2fe6fc436326e96e780011352bb36ae7f732291b1c426e12669a86c555c0e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVQIIZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDTy%2BAecd52cowM%2BsQ%2B2SL1WZt6VTztu07ArRGdOW8iWAiEAiJ3mKxEbHQ9I%2BpWMskDjyWD10CsJJTXxR8cnr10ghd0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEm4PzsKxp57VRvXxircAwc%2F8eiPaHRcyURzpOaNXotGxTLDYD0Mszml%2FbccwOE5cBEVMSYtsNHLHD4HmV0QZxaEmRL4t%2B6NiPbBmOWWGA4x1BQPSVO1z2eTgpi5bP5dFqwuOPuU0c4KG6QkFysvarsNctD%2F992p4Hvfl%2FiZxNmoHwtvjl77n9KAQpvWqK%2Bwrhm3nD5h%2F5qhKa3sqvgcAD7%2BTa7H3o4jBUE%2FQ5vqTe45UGrpQ9x0OYVn7ZyxINpn6PbrW5o4lNDTNlbDOsvVtuA%2Bj8Pymkmjenrn3JTZTXDAPR%2FbD%2BYDIzFrFkQaLL2S0MrPGIymZAdol5zoiwaIZtcjeMa9hWb52tt0hwadRkDdZlQnuT18FLHgoc2Bz0hrvB7g781EcsLpCtz1KzKFpeaM44TneXQWdkTucrMDdjsjBjig%2BD861DIBMRmdS8yu%2FOvuFo5n%2BHcep0REAKoLHHaYkI3rX5%2BixzO1KkaqOUh1pol2lMBVy2RQm2mR8tV2Wrw5qFSxZdTvOOtwpke4h5vH7Ms1K%2FSrka2gf3E4pYHaARXcNuw4qG3OsCZmGzRbwtv8y1fCJ1lebXjfOiHIKQgUHbiW7wiHegIhrrB8zeFRvppy3i6oNZS9QZ7jJNedEw4cbfinOxo28f4qMOybw70GOqUBqY5bTGZqAYtfP9lN6LEFAV5kVWNlyLzU79opI%2BE%2Bw%2FMszeSAICyKnBjxO1qfDIaaxqVAN2Zlt22YtYIKs5Ce7UZteElrqCr2DZ%2F5BxjkBmg23NV3n5svWMnlPG78aqysb%2FyRgw4UbLS8V%2BPZM9cCodiQ8JpeLMKL%2FfgWLkEuLgEGoP%2BPx2mHPFGt3ua2sR7IPCEEiD0a3cVKGPRJBfKKWgY87NDj&X-Amz-Signature=e60e4f0175ec397521803f1348394f4097e0c41eabf11ff0d2d448677e6d1a44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVQIIZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDTy%2BAecd52cowM%2BsQ%2B2SL1WZt6VTztu07ArRGdOW8iWAiEAiJ3mKxEbHQ9I%2BpWMskDjyWD10CsJJTXxR8cnr10ghd0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEm4PzsKxp57VRvXxircAwc%2F8eiPaHRcyURzpOaNXotGxTLDYD0Mszml%2FbccwOE5cBEVMSYtsNHLHD4HmV0QZxaEmRL4t%2B6NiPbBmOWWGA4x1BQPSVO1z2eTgpi5bP5dFqwuOPuU0c4KG6QkFysvarsNctD%2F992p4Hvfl%2FiZxNmoHwtvjl77n9KAQpvWqK%2Bwrhm3nD5h%2F5qhKa3sqvgcAD7%2BTa7H3o4jBUE%2FQ5vqTe45UGrpQ9x0OYVn7ZyxINpn6PbrW5o4lNDTNlbDOsvVtuA%2Bj8Pymkmjenrn3JTZTXDAPR%2FbD%2BYDIzFrFkQaLL2S0MrPGIymZAdol5zoiwaIZtcjeMa9hWb52tt0hwadRkDdZlQnuT18FLHgoc2Bz0hrvB7g781EcsLpCtz1KzKFpeaM44TneXQWdkTucrMDdjsjBjig%2BD861DIBMRmdS8yu%2FOvuFo5n%2BHcep0REAKoLHHaYkI3rX5%2BixzO1KkaqOUh1pol2lMBVy2RQm2mR8tV2Wrw5qFSxZdTvOOtwpke4h5vH7Ms1K%2FSrka2gf3E4pYHaARXcNuw4qG3OsCZmGzRbwtv8y1fCJ1lebXjfOiHIKQgUHbiW7wiHegIhrrB8zeFRvppy3i6oNZS9QZ7jJNedEw4cbfinOxo28f4qMOybw70GOqUBqY5bTGZqAYtfP9lN6LEFAV5kVWNlyLzU79opI%2BE%2Bw%2FMszeSAICyKnBjxO1qfDIaaxqVAN2Zlt22YtYIKs5Ce7UZteElrqCr2DZ%2F5BxjkBmg23NV3n5svWMnlPG78aqysb%2FyRgw4UbLS8V%2BPZM9cCodiQ8JpeLMKL%2FfgWLkEuLgEGoP%2BPx2mHPFGt3ua2sR7IPCEEiD0a3cVKGPRJBfKKWgY87NDj&X-Amz-Signature=7b54761b649b9f6fa42fb8d788019b154ddd5050acb161a526c14dbba8769dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVQIIZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDTy%2BAecd52cowM%2BsQ%2B2SL1WZt6VTztu07ArRGdOW8iWAiEAiJ3mKxEbHQ9I%2BpWMskDjyWD10CsJJTXxR8cnr10ghd0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEm4PzsKxp57VRvXxircAwc%2F8eiPaHRcyURzpOaNXotGxTLDYD0Mszml%2FbccwOE5cBEVMSYtsNHLHD4HmV0QZxaEmRL4t%2B6NiPbBmOWWGA4x1BQPSVO1z2eTgpi5bP5dFqwuOPuU0c4KG6QkFysvarsNctD%2F992p4Hvfl%2FiZxNmoHwtvjl77n9KAQpvWqK%2Bwrhm3nD5h%2F5qhKa3sqvgcAD7%2BTa7H3o4jBUE%2FQ5vqTe45UGrpQ9x0OYVn7ZyxINpn6PbrW5o4lNDTNlbDOsvVtuA%2Bj8Pymkmjenrn3JTZTXDAPR%2FbD%2BYDIzFrFkQaLL2S0MrPGIymZAdol5zoiwaIZtcjeMa9hWb52tt0hwadRkDdZlQnuT18FLHgoc2Bz0hrvB7g781EcsLpCtz1KzKFpeaM44TneXQWdkTucrMDdjsjBjig%2BD861DIBMRmdS8yu%2FOvuFo5n%2BHcep0REAKoLHHaYkI3rX5%2BixzO1KkaqOUh1pol2lMBVy2RQm2mR8tV2Wrw5qFSxZdTvOOtwpke4h5vH7Ms1K%2FSrka2gf3E4pYHaARXcNuw4qG3OsCZmGzRbwtv8y1fCJ1lebXjfOiHIKQgUHbiW7wiHegIhrrB8zeFRvppy3i6oNZS9QZ7jJNedEw4cbfinOxo28f4qMOybw70GOqUBqY5bTGZqAYtfP9lN6LEFAV5kVWNlyLzU79opI%2BE%2Bw%2FMszeSAICyKnBjxO1qfDIaaxqVAN2Zlt22YtYIKs5Ce7UZteElrqCr2DZ%2F5BxjkBmg23NV3n5svWMnlPG78aqysb%2FyRgw4UbLS8V%2BPZM9cCodiQ8JpeLMKL%2FfgWLkEuLgEGoP%2BPx2mHPFGt3ua2sR7IPCEEiD0a3cVKGPRJBfKKWgY87NDj&X-Amz-Signature=fde354c8d559223a1c53c3191ecb3854299abeee7f1af4323eae55f9df336e45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
