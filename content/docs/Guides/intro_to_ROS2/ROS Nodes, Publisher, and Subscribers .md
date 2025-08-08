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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4PSOPZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUHQoz352ZYPiBcdx%2F5PbUmJtCB4K3QALEDzDpzDjbywIhAOIR1K4wm3lAX7HBJ1blAIDVk1nOm%2BK9RaUIwFfaA%2FsPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIgSHyyU0Zqd42fYq3AO6DUYv1okApzP2WeXGqwRMd%2BEpt7f9fVj9nwCJ3MchFtTPJcbAid3FI87D7UYXRbgQAntsskwHVmAd57XrC5ijHtGZ3PhMqdoMwbs%2FDOrADUXMWjvb%2BOw2LuE6%2FmwgNQLsdeX1W7qLTDNoIBaNsjy%2FucKWIuofyBeMS3XpCXxlVeoHI5rGtTxk%2BiVHPFLLkq%2FqF6U1zMguUtqoHOwmfQRlBmchXFBgshYGcUkchGIMQaeab5pR7cN3Iv2qZJMb5hoJDdN6Vi8cqqOVy1b4CQjSfZC5Tk7p41%2B7nR2uTpJGLddqupV8FSnVSzG2rmnqmeQouWuoaAmFC2QG0cu1WCpMaqot8i9M0OOfo1c1eB1XOwXd7gqI2H8qoyb1%2FDwhNkBXasp8zAcN%2Fk%2BsfYDIgOPH%2BK380vTuY38RbT435w2qQyPTQ6SQaXsviBcej1GaCUW082IAF1zTYOt73PFvOx2RgJGnpKQUNBc15twfGeBqLWc0mQIZMazD18m%2B4xnKBOyaRkm3Y%2BJLI6bV%2BefYIov%2Btnvfv5okzYVGDucXx9Sll9Q9zQkCx7354nW2uUiIDfG49Rh9RhMiZl7%2B7holAi%2BOs5ZJJlxUTmWcYNHEAAR7FYP5YS4JXHThbyznBDCgx9bEBjqkAVpeyoo1X8di310d5O21rBVpte9s7CKfONM6YLV69L%2FOMDKe%2BkdIJI%2FTXC6WWYDlN%2BtRIKiIF1hN2o2MNTGjoInifcHKM7tEEwY2YuqbvHE1AsOtGGdCz5yGpPOwoRgEClsh51JTNE9jYC8qWYEqHVLPfwTt%2FPVQ5aVtXK2u6IJvku9yfj%2B%2BZpyIETyC3NbBilffSHvQMC4dpg57tbZUDLaBeBHy&X-Amz-Signature=655eb63d8b2e3dbe34bf27366e2e542a8079fb82755faec0fcfb02f82d606476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4PSOPZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUHQoz352ZYPiBcdx%2F5PbUmJtCB4K3QALEDzDpzDjbywIhAOIR1K4wm3lAX7HBJ1blAIDVk1nOm%2BK9RaUIwFfaA%2FsPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIgSHyyU0Zqd42fYq3AO6DUYv1okApzP2WeXGqwRMd%2BEpt7f9fVj9nwCJ3MchFtTPJcbAid3FI87D7UYXRbgQAntsskwHVmAd57XrC5ijHtGZ3PhMqdoMwbs%2FDOrADUXMWjvb%2BOw2LuE6%2FmwgNQLsdeX1W7qLTDNoIBaNsjy%2FucKWIuofyBeMS3XpCXxlVeoHI5rGtTxk%2BiVHPFLLkq%2FqF6U1zMguUtqoHOwmfQRlBmchXFBgshYGcUkchGIMQaeab5pR7cN3Iv2qZJMb5hoJDdN6Vi8cqqOVy1b4CQjSfZC5Tk7p41%2B7nR2uTpJGLddqupV8FSnVSzG2rmnqmeQouWuoaAmFC2QG0cu1WCpMaqot8i9M0OOfo1c1eB1XOwXd7gqI2H8qoyb1%2FDwhNkBXasp8zAcN%2Fk%2BsfYDIgOPH%2BK380vTuY38RbT435w2qQyPTQ6SQaXsviBcej1GaCUW082IAF1zTYOt73PFvOx2RgJGnpKQUNBc15twfGeBqLWc0mQIZMazD18m%2B4xnKBOyaRkm3Y%2BJLI6bV%2BefYIov%2Btnvfv5okzYVGDucXx9Sll9Q9zQkCx7354nW2uUiIDfG49Rh9RhMiZl7%2B7holAi%2BOs5ZJJlxUTmWcYNHEAAR7FYP5YS4JXHThbyznBDCgx9bEBjqkAVpeyoo1X8di310d5O21rBVpte9s7CKfONM6YLV69L%2FOMDKe%2BkdIJI%2FTXC6WWYDlN%2BtRIKiIF1hN2o2MNTGjoInifcHKM7tEEwY2YuqbvHE1AsOtGGdCz5yGpPOwoRgEClsh51JTNE9jYC8qWYEqHVLPfwTt%2FPVQ5aVtXK2u6IJvku9yfj%2B%2BZpyIETyC3NbBilffSHvQMC4dpg57tbZUDLaBeBHy&X-Amz-Signature=f76594dc29a3cef8f3a68bc779a0641720a892647116f76701e52c7bc59e5c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4PSOPZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUHQoz352ZYPiBcdx%2F5PbUmJtCB4K3QALEDzDpzDjbywIhAOIR1K4wm3lAX7HBJ1blAIDVk1nOm%2BK9RaUIwFfaA%2FsPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIgSHyyU0Zqd42fYq3AO6DUYv1okApzP2WeXGqwRMd%2BEpt7f9fVj9nwCJ3MchFtTPJcbAid3FI87D7UYXRbgQAntsskwHVmAd57XrC5ijHtGZ3PhMqdoMwbs%2FDOrADUXMWjvb%2BOw2LuE6%2FmwgNQLsdeX1W7qLTDNoIBaNsjy%2FucKWIuofyBeMS3XpCXxlVeoHI5rGtTxk%2BiVHPFLLkq%2FqF6U1zMguUtqoHOwmfQRlBmchXFBgshYGcUkchGIMQaeab5pR7cN3Iv2qZJMb5hoJDdN6Vi8cqqOVy1b4CQjSfZC5Tk7p41%2B7nR2uTpJGLddqupV8FSnVSzG2rmnqmeQouWuoaAmFC2QG0cu1WCpMaqot8i9M0OOfo1c1eB1XOwXd7gqI2H8qoyb1%2FDwhNkBXasp8zAcN%2Fk%2BsfYDIgOPH%2BK380vTuY38RbT435w2qQyPTQ6SQaXsviBcej1GaCUW082IAF1zTYOt73PFvOx2RgJGnpKQUNBc15twfGeBqLWc0mQIZMazD18m%2B4xnKBOyaRkm3Y%2BJLI6bV%2BefYIov%2Btnvfv5okzYVGDucXx9Sll9Q9zQkCx7354nW2uUiIDfG49Rh9RhMiZl7%2B7holAi%2BOs5ZJJlxUTmWcYNHEAAR7FYP5YS4JXHThbyznBDCgx9bEBjqkAVpeyoo1X8di310d5O21rBVpte9s7CKfONM6YLV69L%2FOMDKe%2BkdIJI%2FTXC6WWYDlN%2BtRIKiIF1hN2o2MNTGjoInifcHKM7tEEwY2YuqbvHE1AsOtGGdCz5yGpPOwoRgEClsh51JTNE9jYC8qWYEqHVLPfwTt%2FPVQ5aVtXK2u6IJvku9yfj%2B%2BZpyIETyC3NbBilffSHvQMC4dpg57tbZUDLaBeBHy&X-Amz-Signature=9839c0e78727ec65cabda14a936495ad8248eb4f09ad50f1994ef76f4ed46e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4PSOPZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUHQoz352ZYPiBcdx%2F5PbUmJtCB4K3QALEDzDpzDjbywIhAOIR1K4wm3lAX7HBJ1blAIDVk1nOm%2BK9RaUIwFfaA%2FsPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIgSHyyU0Zqd42fYq3AO6DUYv1okApzP2WeXGqwRMd%2BEpt7f9fVj9nwCJ3MchFtTPJcbAid3FI87D7UYXRbgQAntsskwHVmAd57XrC5ijHtGZ3PhMqdoMwbs%2FDOrADUXMWjvb%2BOw2LuE6%2FmwgNQLsdeX1W7qLTDNoIBaNsjy%2FucKWIuofyBeMS3XpCXxlVeoHI5rGtTxk%2BiVHPFLLkq%2FqF6U1zMguUtqoHOwmfQRlBmchXFBgshYGcUkchGIMQaeab5pR7cN3Iv2qZJMb5hoJDdN6Vi8cqqOVy1b4CQjSfZC5Tk7p41%2B7nR2uTpJGLddqupV8FSnVSzG2rmnqmeQouWuoaAmFC2QG0cu1WCpMaqot8i9M0OOfo1c1eB1XOwXd7gqI2H8qoyb1%2FDwhNkBXasp8zAcN%2Fk%2BsfYDIgOPH%2BK380vTuY38RbT435w2qQyPTQ6SQaXsviBcej1GaCUW082IAF1zTYOt73PFvOx2RgJGnpKQUNBc15twfGeBqLWc0mQIZMazD18m%2B4xnKBOyaRkm3Y%2BJLI6bV%2BefYIov%2Btnvfv5okzYVGDucXx9Sll9Q9zQkCx7354nW2uUiIDfG49Rh9RhMiZl7%2B7holAi%2BOs5ZJJlxUTmWcYNHEAAR7FYP5YS4JXHThbyznBDCgx9bEBjqkAVpeyoo1X8di310d5O21rBVpte9s7CKfONM6YLV69L%2FOMDKe%2BkdIJI%2FTXC6WWYDlN%2BtRIKiIF1hN2o2MNTGjoInifcHKM7tEEwY2YuqbvHE1AsOtGGdCz5yGpPOwoRgEClsh51JTNE9jYC8qWYEqHVLPfwTt%2FPVQ5aVtXK2u6IJvku9yfj%2B%2BZpyIETyC3NbBilffSHvQMC4dpg57tbZUDLaBeBHy&X-Amz-Signature=b5ef78a398b28f1e19328715f8fcc9cdef5cb8f60cf348ed2deb6317a9299b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4PSOPZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUHQoz352ZYPiBcdx%2F5PbUmJtCB4K3QALEDzDpzDjbywIhAOIR1K4wm3lAX7HBJ1blAIDVk1nOm%2BK9RaUIwFfaA%2FsPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIgSHyyU0Zqd42fYq3AO6DUYv1okApzP2WeXGqwRMd%2BEpt7f9fVj9nwCJ3MchFtTPJcbAid3FI87D7UYXRbgQAntsskwHVmAd57XrC5ijHtGZ3PhMqdoMwbs%2FDOrADUXMWjvb%2BOw2LuE6%2FmwgNQLsdeX1W7qLTDNoIBaNsjy%2FucKWIuofyBeMS3XpCXxlVeoHI5rGtTxk%2BiVHPFLLkq%2FqF6U1zMguUtqoHOwmfQRlBmchXFBgshYGcUkchGIMQaeab5pR7cN3Iv2qZJMb5hoJDdN6Vi8cqqOVy1b4CQjSfZC5Tk7p41%2B7nR2uTpJGLddqupV8FSnVSzG2rmnqmeQouWuoaAmFC2QG0cu1WCpMaqot8i9M0OOfo1c1eB1XOwXd7gqI2H8qoyb1%2FDwhNkBXasp8zAcN%2Fk%2BsfYDIgOPH%2BK380vTuY38RbT435w2qQyPTQ6SQaXsviBcej1GaCUW082IAF1zTYOt73PFvOx2RgJGnpKQUNBc15twfGeBqLWc0mQIZMazD18m%2B4xnKBOyaRkm3Y%2BJLI6bV%2BefYIov%2Btnvfv5okzYVGDucXx9Sll9Q9zQkCx7354nW2uUiIDfG49Rh9RhMiZl7%2B7holAi%2BOs5ZJJlxUTmWcYNHEAAR7FYP5YS4JXHThbyznBDCgx9bEBjqkAVpeyoo1X8di310d5O21rBVpte9s7CKfONM6YLV69L%2FOMDKe%2BkdIJI%2FTXC6WWYDlN%2BtRIKiIF1hN2o2MNTGjoInifcHKM7tEEwY2YuqbvHE1AsOtGGdCz5yGpPOwoRgEClsh51JTNE9jYC8qWYEqHVLPfwTt%2FPVQ5aVtXK2u6IJvku9yfj%2B%2BZpyIETyC3NbBilffSHvQMC4dpg57tbZUDLaBeBHy&X-Amz-Signature=3cad22247f11135b5de4a85438bdb0e50eade6ad07f1a3dabd1c70cf2eccea63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4PSOPZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUHQoz352ZYPiBcdx%2F5PbUmJtCB4K3QALEDzDpzDjbywIhAOIR1K4wm3lAX7HBJ1blAIDVk1nOm%2BK9RaUIwFfaA%2FsPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIgSHyyU0Zqd42fYq3AO6DUYv1okApzP2WeXGqwRMd%2BEpt7f9fVj9nwCJ3MchFtTPJcbAid3FI87D7UYXRbgQAntsskwHVmAd57XrC5ijHtGZ3PhMqdoMwbs%2FDOrADUXMWjvb%2BOw2LuE6%2FmwgNQLsdeX1W7qLTDNoIBaNsjy%2FucKWIuofyBeMS3XpCXxlVeoHI5rGtTxk%2BiVHPFLLkq%2FqF6U1zMguUtqoHOwmfQRlBmchXFBgshYGcUkchGIMQaeab5pR7cN3Iv2qZJMb5hoJDdN6Vi8cqqOVy1b4CQjSfZC5Tk7p41%2B7nR2uTpJGLddqupV8FSnVSzG2rmnqmeQouWuoaAmFC2QG0cu1WCpMaqot8i9M0OOfo1c1eB1XOwXd7gqI2H8qoyb1%2FDwhNkBXasp8zAcN%2Fk%2BsfYDIgOPH%2BK380vTuY38RbT435w2qQyPTQ6SQaXsviBcej1GaCUW082IAF1zTYOt73PFvOx2RgJGnpKQUNBc15twfGeBqLWc0mQIZMazD18m%2B4xnKBOyaRkm3Y%2BJLI6bV%2BefYIov%2Btnvfv5okzYVGDucXx9Sll9Q9zQkCx7354nW2uUiIDfG49Rh9RhMiZl7%2B7holAi%2BOs5ZJJlxUTmWcYNHEAAR7FYP5YS4JXHThbyznBDCgx9bEBjqkAVpeyoo1X8di310d5O21rBVpte9s7CKfONM6YLV69L%2FOMDKe%2BkdIJI%2FTXC6WWYDlN%2BtRIKiIF1hN2o2MNTGjoInifcHKM7tEEwY2YuqbvHE1AsOtGGdCz5yGpPOwoRgEClsh51JTNE9jYC8qWYEqHVLPfwTt%2FPVQ5aVtXK2u6IJvku9yfj%2B%2BZpyIETyC3NbBilffSHvQMC4dpg57tbZUDLaBeBHy&X-Amz-Signature=fa24fec893b9794375ba4e0c889ef9b3b90379609fa61f264e2268a5b2f6a997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4PSOPZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUHQoz352ZYPiBcdx%2F5PbUmJtCB4K3QALEDzDpzDjbywIhAOIR1K4wm3lAX7HBJ1blAIDVk1nOm%2BK9RaUIwFfaA%2FsPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIgSHyyU0Zqd42fYq3AO6DUYv1okApzP2WeXGqwRMd%2BEpt7f9fVj9nwCJ3MchFtTPJcbAid3FI87D7UYXRbgQAntsskwHVmAd57XrC5ijHtGZ3PhMqdoMwbs%2FDOrADUXMWjvb%2BOw2LuE6%2FmwgNQLsdeX1W7qLTDNoIBaNsjy%2FucKWIuofyBeMS3XpCXxlVeoHI5rGtTxk%2BiVHPFLLkq%2FqF6U1zMguUtqoHOwmfQRlBmchXFBgshYGcUkchGIMQaeab5pR7cN3Iv2qZJMb5hoJDdN6Vi8cqqOVy1b4CQjSfZC5Tk7p41%2B7nR2uTpJGLddqupV8FSnVSzG2rmnqmeQouWuoaAmFC2QG0cu1WCpMaqot8i9M0OOfo1c1eB1XOwXd7gqI2H8qoyb1%2FDwhNkBXasp8zAcN%2Fk%2BsfYDIgOPH%2BK380vTuY38RbT435w2qQyPTQ6SQaXsviBcej1GaCUW082IAF1zTYOt73PFvOx2RgJGnpKQUNBc15twfGeBqLWc0mQIZMazD18m%2B4xnKBOyaRkm3Y%2BJLI6bV%2BefYIov%2Btnvfv5okzYVGDucXx9Sll9Q9zQkCx7354nW2uUiIDfG49Rh9RhMiZl7%2B7holAi%2BOs5ZJJlxUTmWcYNHEAAR7FYP5YS4JXHThbyznBDCgx9bEBjqkAVpeyoo1X8di310d5O21rBVpte9s7CKfONM6YLV69L%2FOMDKe%2BkdIJI%2FTXC6WWYDlN%2BtRIKiIF1hN2o2MNTGjoInifcHKM7tEEwY2YuqbvHE1AsOtGGdCz5yGpPOwoRgEClsh51JTNE9jYC8qWYEqHVLPfwTt%2FPVQ5aVtXK2u6IJvku9yfj%2B%2BZpyIETyC3NbBilffSHvQMC4dpg57tbZUDLaBeBHy&X-Amz-Signature=94578788ebcaf73d6eda19ab9e02d4101cbf26a36b533e224ddd190303778d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4PSOPZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUHQoz352ZYPiBcdx%2F5PbUmJtCB4K3QALEDzDpzDjbywIhAOIR1K4wm3lAX7HBJ1blAIDVk1nOm%2BK9RaUIwFfaA%2FsPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFIgSHyyU0Zqd42fYq3AO6DUYv1okApzP2WeXGqwRMd%2BEpt7f9fVj9nwCJ3MchFtTPJcbAid3FI87D7UYXRbgQAntsskwHVmAd57XrC5ijHtGZ3PhMqdoMwbs%2FDOrADUXMWjvb%2BOw2LuE6%2FmwgNQLsdeX1W7qLTDNoIBaNsjy%2FucKWIuofyBeMS3XpCXxlVeoHI5rGtTxk%2BiVHPFLLkq%2FqF6U1zMguUtqoHOwmfQRlBmchXFBgshYGcUkchGIMQaeab5pR7cN3Iv2qZJMb5hoJDdN6Vi8cqqOVy1b4CQjSfZC5Tk7p41%2B7nR2uTpJGLddqupV8FSnVSzG2rmnqmeQouWuoaAmFC2QG0cu1WCpMaqot8i9M0OOfo1c1eB1XOwXd7gqI2H8qoyb1%2FDwhNkBXasp8zAcN%2Fk%2BsfYDIgOPH%2BK380vTuY38RbT435w2qQyPTQ6SQaXsviBcej1GaCUW082IAF1zTYOt73PFvOx2RgJGnpKQUNBc15twfGeBqLWc0mQIZMazD18m%2B4xnKBOyaRkm3Y%2BJLI6bV%2BefYIov%2Btnvfv5okzYVGDucXx9Sll9Q9zQkCx7354nW2uUiIDfG49Rh9RhMiZl7%2B7holAi%2BOs5ZJJlxUTmWcYNHEAAR7FYP5YS4JXHThbyznBDCgx9bEBjqkAVpeyoo1X8di310d5O21rBVpte9s7CKfONM6YLV69L%2FOMDKe%2BkdIJI%2FTXC6WWYDlN%2BtRIKiIF1hN2o2MNTGjoInifcHKM7tEEwY2YuqbvHE1AsOtGGdCz5yGpPOwoRgEClsh51JTNE9jYC8qWYEqHVLPfwTt%2FPVQ5aVtXK2u6IJvku9yfj%2B%2BZpyIETyC3NbBilffSHvQMC4dpg57tbZUDLaBeBHy&X-Amz-Signature=a9ac8465b9ece0a175a72aed2a719ba798eecb3152072b731b9d940ad4aaf21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
