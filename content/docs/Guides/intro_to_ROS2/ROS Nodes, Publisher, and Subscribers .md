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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSD5BXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivo1c6tocRcTsUJXulCVekcVGvc997Qk5H0Z26k7MsgIhAJKCGuoxxmi%2FvD%2BV7H51G7AH%2BdVK7bkC26O0zC%2FDROSpKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkcj7BtZd%2FwrwgQdgq3APyGseyzk0jdHMfNtYmtez0FVClHJUG9RXa0n1BMq4eTWPHiBmQnTt4DFrGl25oKxu5YLD2vZGdtnPiF165XadY1mXA0fkBbcxG3FHVEGeD%2F1zgOHdJdyC2G1GR4ky3%2BrBVwTIdIDq1JF47CPPH9rnf%2BfxFcwBesGgrL%2BIgUr458NpxEmMWhjvnfcYotAn%2FHt7YJpAcMaeL8wjUnf2hfUboazFWTmw5aRT%2FrtdX8hVshZytzcF9kwO9cYB3NZXFBLHLLWf956LCjsTdN6stSn0MxU8hktkwQXELL104mDCG9ec2myiWFaqvQzS7fU8njL2Hbr9F4O4404baVlTDyTrZXHHhJMeQxJlixhVEZPK9YF1LIT6aV3UzZ5hfBayLv5gZ08qSBp%2FP73SuuSRk9dr2E3AvF8CWEp4W%2Fz2P1EVao3wRjHX7k9HgF7if6%2FmEInSlIj5lr57YXP%2B1JMjJnIJi0OzFE6B5cFbMDD%2FQ1e5cY7cDAS6jhq3SIINgUB0Ixh7n7otZktkQsIQf4b0F8e1aMr8vDc35swsI1WbJDnyUkLGbvJVJnOLfecPvkFYf%2FVfSiDLsvahXEfXcucJhj8G4IRoxqVl9zdyHcKH2rPbPaEMJwZz2uekQptvJ5DCSmOLEBjqkAXxBNDHULWAtWSJMWTeMI9CU%2F90ZebkXFY0lsWt4FT7FM8vqwgKa%2F9qibtv0rpIwo4tdGZCUXxQrOKL4GuVo9MqY26mAUcLsM8hmgYhFFIiLQGK6V6HQ%2FNCCtpESkjWYV%2BGzZ52VNYC5%2B7HFEZii2zqPK0t7TryVIPk3x3wuAXcbKQG1uky%2FhxtNazLug1t5SQNWQi0ZZqxtISgsAULP6%2F3ARJ%2FL&X-Amz-Signature=9b2468bb6605220603e994c9046307956344ff2c39dabff42e20a44124bc2dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSD5BXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivo1c6tocRcTsUJXulCVekcVGvc997Qk5H0Z26k7MsgIhAJKCGuoxxmi%2FvD%2BV7H51G7AH%2BdVK7bkC26O0zC%2FDROSpKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkcj7BtZd%2FwrwgQdgq3APyGseyzk0jdHMfNtYmtez0FVClHJUG9RXa0n1BMq4eTWPHiBmQnTt4DFrGl25oKxu5YLD2vZGdtnPiF165XadY1mXA0fkBbcxG3FHVEGeD%2F1zgOHdJdyC2G1GR4ky3%2BrBVwTIdIDq1JF47CPPH9rnf%2BfxFcwBesGgrL%2BIgUr458NpxEmMWhjvnfcYotAn%2FHt7YJpAcMaeL8wjUnf2hfUboazFWTmw5aRT%2FrtdX8hVshZytzcF9kwO9cYB3NZXFBLHLLWf956LCjsTdN6stSn0MxU8hktkwQXELL104mDCG9ec2myiWFaqvQzS7fU8njL2Hbr9F4O4404baVlTDyTrZXHHhJMeQxJlixhVEZPK9YF1LIT6aV3UzZ5hfBayLv5gZ08qSBp%2FP73SuuSRk9dr2E3AvF8CWEp4W%2Fz2P1EVao3wRjHX7k9HgF7if6%2FmEInSlIj5lr57YXP%2B1JMjJnIJi0OzFE6B5cFbMDD%2FQ1e5cY7cDAS6jhq3SIINgUB0Ixh7n7otZktkQsIQf4b0F8e1aMr8vDc35swsI1WbJDnyUkLGbvJVJnOLfecPvkFYf%2FVfSiDLsvahXEfXcucJhj8G4IRoxqVl9zdyHcKH2rPbPaEMJwZz2uekQptvJ5DCSmOLEBjqkAXxBNDHULWAtWSJMWTeMI9CU%2F90ZebkXFY0lsWt4FT7FM8vqwgKa%2F9qibtv0rpIwo4tdGZCUXxQrOKL4GuVo9MqY26mAUcLsM8hmgYhFFIiLQGK6V6HQ%2FNCCtpESkjWYV%2BGzZ52VNYC5%2B7HFEZii2zqPK0t7TryVIPk3x3wuAXcbKQG1uky%2FhxtNazLug1t5SQNWQi0ZZqxtISgsAULP6%2F3ARJ%2FL&X-Amz-Signature=f7b7fa100d45e1344d8deba4f4cfb211dc07f1e86bf56adaa1431a18bd376672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSD5BXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivo1c6tocRcTsUJXulCVekcVGvc997Qk5H0Z26k7MsgIhAJKCGuoxxmi%2FvD%2BV7H51G7AH%2BdVK7bkC26O0zC%2FDROSpKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkcj7BtZd%2FwrwgQdgq3APyGseyzk0jdHMfNtYmtez0FVClHJUG9RXa0n1BMq4eTWPHiBmQnTt4DFrGl25oKxu5YLD2vZGdtnPiF165XadY1mXA0fkBbcxG3FHVEGeD%2F1zgOHdJdyC2G1GR4ky3%2BrBVwTIdIDq1JF47CPPH9rnf%2BfxFcwBesGgrL%2BIgUr458NpxEmMWhjvnfcYotAn%2FHt7YJpAcMaeL8wjUnf2hfUboazFWTmw5aRT%2FrtdX8hVshZytzcF9kwO9cYB3NZXFBLHLLWf956LCjsTdN6stSn0MxU8hktkwQXELL104mDCG9ec2myiWFaqvQzS7fU8njL2Hbr9F4O4404baVlTDyTrZXHHhJMeQxJlixhVEZPK9YF1LIT6aV3UzZ5hfBayLv5gZ08qSBp%2FP73SuuSRk9dr2E3AvF8CWEp4W%2Fz2P1EVao3wRjHX7k9HgF7if6%2FmEInSlIj5lr57YXP%2B1JMjJnIJi0OzFE6B5cFbMDD%2FQ1e5cY7cDAS6jhq3SIINgUB0Ixh7n7otZktkQsIQf4b0F8e1aMr8vDc35swsI1WbJDnyUkLGbvJVJnOLfecPvkFYf%2FVfSiDLsvahXEfXcucJhj8G4IRoxqVl9zdyHcKH2rPbPaEMJwZz2uekQptvJ5DCSmOLEBjqkAXxBNDHULWAtWSJMWTeMI9CU%2F90ZebkXFY0lsWt4FT7FM8vqwgKa%2F9qibtv0rpIwo4tdGZCUXxQrOKL4GuVo9MqY26mAUcLsM8hmgYhFFIiLQGK6V6HQ%2FNCCtpESkjWYV%2BGzZ52VNYC5%2B7HFEZii2zqPK0t7TryVIPk3x3wuAXcbKQG1uky%2FhxtNazLug1t5SQNWQi0ZZqxtISgsAULP6%2F3ARJ%2FL&X-Amz-Signature=1cc939b95e0b5c60a993d698109e942d554fa9ae98d897df6b6c9cafe2987054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSD5BXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivo1c6tocRcTsUJXulCVekcVGvc997Qk5H0Z26k7MsgIhAJKCGuoxxmi%2FvD%2BV7H51G7AH%2BdVK7bkC26O0zC%2FDROSpKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkcj7BtZd%2FwrwgQdgq3APyGseyzk0jdHMfNtYmtez0FVClHJUG9RXa0n1BMq4eTWPHiBmQnTt4DFrGl25oKxu5YLD2vZGdtnPiF165XadY1mXA0fkBbcxG3FHVEGeD%2F1zgOHdJdyC2G1GR4ky3%2BrBVwTIdIDq1JF47CPPH9rnf%2BfxFcwBesGgrL%2BIgUr458NpxEmMWhjvnfcYotAn%2FHt7YJpAcMaeL8wjUnf2hfUboazFWTmw5aRT%2FrtdX8hVshZytzcF9kwO9cYB3NZXFBLHLLWf956LCjsTdN6stSn0MxU8hktkwQXELL104mDCG9ec2myiWFaqvQzS7fU8njL2Hbr9F4O4404baVlTDyTrZXHHhJMeQxJlixhVEZPK9YF1LIT6aV3UzZ5hfBayLv5gZ08qSBp%2FP73SuuSRk9dr2E3AvF8CWEp4W%2Fz2P1EVao3wRjHX7k9HgF7if6%2FmEInSlIj5lr57YXP%2B1JMjJnIJi0OzFE6B5cFbMDD%2FQ1e5cY7cDAS6jhq3SIINgUB0Ixh7n7otZktkQsIQf4b0F8e1aMr8vDc35swsI1WbJDnyUkLGbvJVJnOLfecPvkFYf%2FVfSiDLsvahXEfXcucJhj8G4IRoxqVl9zdyHcKH2rPbPaEMJwZz2uekQptvJ5DCSmOLEBjqkAXxBNDHULWAtWSJMWTeMI9CU%2F90ZebkXFY0lsWt4FT7FM8vqwgKa%2F9qibtv0rpIwo4tdGZCUXxQrOKL4GuVo9MqY26mAUcLsM8hmgYhFFIiLQGK6V6HQ%2FNCCtpESkjWYV%2BGzZ52VNYC5%2B7HFEZii2zqPK0t7TryVIPk3x3wuAXcbKQG1uky%2FhxtNazLug1t5SQNWQi0ZZqxtISgsAULP6%2F3ARJ%2FL&X-Amz-Signature=dc650f27d7b783c9cfcaf9e7004f28bceeb87fbfb9ce19b0d63adf870b10c427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSD5BXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivo1c6tocRcTsUJXulCVekcVGvc997Qk5H0Z26k7MsgIhAJKCGuoxxmi%2FvD%2BV7H51G7AH%2BdVK7bkC26O0zC%2FDROSpKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkcj7BtZd%2FwrwgQdgq3APyGseyzk0jdHMfNtYmtez0FVClHJUG9RXa0n1BMq4eTWPHiBmQnTt4DFrGl25oKxu5YLD2vZGdtnPiF165XadY1mXA0fkBbcxG3FHVEGeD%2F1zgOHdJdyC2G1GR4ky3%2BrBVwTIdIDq1JF47CPPH9rnf%2BfxFcwBesGgrL%2BIgUr458NpxEmMWhjvnfcYotAn%2FHt7YJpAcMaeL8wjUnf2hfUboazFWTmw5aRT%2FrtdX8hVshZytzcF9kwO9cYB3NZXFBLHLLWf956LCjsTdN6stSn0MxU8hktkwQXELL104mDCG9ec2myiWFaqvQzS7fU8njL2Hbr9F4O4404baVlTDyTrZXHHhJMeQxJlixhVEZPK9YF1LIT6aV3UzZ5hfBayLv5gZ08qSBp%2FP73SuuSRk9dr2E3AvF8CWEp4W%2Fz2P1EVao3wRjHX7k9HgF7if6%2FmEInSlIj5lr57YXP%2B1JMjJnIJi0OzFE6B5cFbMDD%2FQ1e5cY7cDAS6jhq3SIINgUB0Ixh7n7otZktkQsIQf4b0F8e1aMr8vDc35swsI1WbJDnyUkLGbvJVJnOLfecPvkFYf%2FVfSiDLsvahXEfXcucJhj8G4IRoxqVl9zdyHcKH2rPbPaEMJwZz2uekQptvJ5DCSmOLEBjqkAXxBNDHULWAtWSJMWTeMI9CU%2F90ZebkXFY0lsWt4FT7FM8vqwgKa%2F9qibtv0rpIwo4tdGZCUXxQrOKL4GuVo9MqY26mAUcLsM8hmgYhFFIiLQGK6V6HQ%2FNCCtpESkjWYV%2BGzZ52VNYC5%2B7HFEZii2zqPK0t7TryVIPk3x3wuAXcbKQG1uky%2FhxtNazLug1t5SQNWQi0ZZqxtISgsAULP6%2F3ARJ%2FL&X-Amz-Signature=2757f839548d4eefedc68397e80b6be3e01a7cbb92c3d01dd7f16f2600ddd4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSD5BXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivo1c6tocRcTsUJXulCVekcVGvc997Qk5H0Z26k7MsgIhAJKCGuoxxmi%2FvD%2BV7H51G7AH%2BdVK7bkC26O0zC%2FDROSpKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkcj7BtZd%2FwrwgQdgq3APyGseyzk0jdHMfNtYmtez0FVClHJUG9RXa0n1BMq4eTWPHiBmQnTt4DFrGl25oKxu5YLD2vZGdtnPiF165XadY1mXA0fkBbcxG3FHVEGeD%2F1zgOHdJdyC2G1GR4ky3%2BrBVwTIdIDq1JF47CPPH9rnf%2BfxFcwBesGgrL%2BIgUr458NpxEmMWhjvnfcYotAn%2FHt7YJpAcMaeL8wjUnf2hfUboazFWTmw5aRT%2FrtdX8hVshZytzcF9kwO9cYB3NZXFBLHLLWf956LCjsTdN6stSn0MxU8hktkwQXELL104mDCG9ec2myiWFaqvQzS7fU8njL2Hbr9F4O4404baVlTDyTrZXHHhJMeQxJlixhVEZPK9YF1LIT6aV3UzZ5hfBayLv5gZ08qSBp%2FP73SuuSRk9dr2E3AvF8CWEp4W%2Fz2P1EVao3wRjHX7k9HgF7if6%2FmEInSlIj5lr57YXP%2B1JMjJnIJi0OzFE6B5cFbMDD%2FQ1e5cY7cDAS6jhq3SIINgUB0Ixh7n7otZktkQsIQf4b0F8e1aMr8vDc35swsI1WbJDnyUkLGbvJVJnOLfecPvkFYf%2FVfSiDLsvahXEfXcucJhj8G4IRoxqVl9zdyHcKH2rPbPaEMJwZz2uekQptvJ5DCSmOLEBjqkAXxBNDHULWAtWSJMWTeMI9CU%2F90ZebkXFY0lsWt4FT7FM8vqwgKa%2F9qibtv0rpIwo4tdGZCUXxQrOKL4GuVo9MqY26mAUcLsM8hmgYhFFIiLQGK6V6HQ%2FNCCtpESkjWYV%2BGzZ52VNYC5%2B7HFEZii2zqPK0t7TryVIPk3x3wuAXcbKQG1uky%2FhxtNazLug1t5SQNWQi0ZZqxtISgsAULP6%2F3ARJ%2FL&X-Amz-Signature=55ecd40b6abc8400ba9ee134b50c6b4116f60400e9d0b53da33bacfb2291157c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSD5BXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivo1c6tocRcTsUJXulCVekcVGvc997Qk5H0Z26k7MsgIhAJKCGuoxxmi%2FvD%2BV7H51G7AH%2BdVK7bkC26O0zC%2FDROSpKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkcj7BtZd%2FwrwgQdgq3APyGseyzk0jdHMfNtYmtez0FVClHJUG9RXa0n1BMq4eTWPHiBmQnTt4DFrGl25oKxu5YLD2vZGdtnPiF165XadY1mXA0fkBbcxG3FHVEGeD%2F1zgOHdJdyC2G1GR4ky3%2BrBVwTIdIDq1JF47CPPH9rnf%2BfxFcwBesGgrL%2BIgUr458NpxEmMWhjvnfcYotAn%2FHt7YJpAcMaeL8wjUnf2hfUboazFWTmw5aRT%2FrtdX8hVshZytzcF9kwO9cYB3NZXFBLHLLWf956LCjsTdN6stSn0MxU8hktkwQXELL104mDCG9ec2myiWFaqvQzS7fU8njL2Hbr9F4O4404baVlTDyTrZXHHhJMeQxJlixhVEZPK9YF1LIT6aV3UzZ5hfBayLv5gZ08qSBp%2FP73SuuSRk9dr2E3AvF8CWEp4W%2Fz2P1EVao3wRjHX7k9HgF7if6%2FmEInSlIj5lr57YXP%2B1JMjJnIJi0OzFE6B5cFbMDD%2FQ1e5cY7cDAS6jhq3SIINgUB0Ixh7n7otZktkQsIQf4b0F8e1aMr8vDc35swsI1WbJDnyUkLGbvJVJnOLfecPvkFYf%2FVfSiDLsvahXEfXcucJhj8G4IRoxqVl9zdyHcKH2rPbPaEMJwZz2uekQptvJ5DCSmOLEBjqkAXxBNDHULWAtWSJMWTeMI9CU%2F90ZebkXFY0lsWt4FT7FM8vqwgKa%2F9qibtv0rpIwo4tdGZCUXxQrOKL4GuVo9MqY26mAUcLsM8hmgYhFFIiLQGK6V6HQ%2FNCCtpESkjWYV%2BGzZ52VNYC5%2B7HFEZii2zqPK0t7TryVIPk3x3wuAXcbKQG1uky%2FhxtNazLug1t5SQNWQi0ZZqxtISgsAULP6%2F3ARJ%2FL&X-Amz-Signature=ba0bb879b1b5117800d20a91aec060b28a8b8fa2c9f69eb1e9ebbdfc74167df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSD5BXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivo1c6tocRcTsUJXulCVekcVGvc997Qk5H0Z26k7MsgIhAJKCGuoxxmi%2FvD%2BV7H51G7AH%2BdVK7bkC26O0zC%2FDROSpKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkcj7BtZd%2FwrwgQdgq3APyGseyzk0jdHMfNtYmtez0FVClHJUG9RXa0n1BMq4eTWPHiBmQnTt4DFrGl25oKxu5YLD2vZGdtnPiF165XadY1mXA0fkBbcxG3FHVEGeD%2F1zgOHdJdyC2G1GR4ky3%2BrBVwTIdIDq1JF47CPPH9rnf%2BfxFcwBesGgrL%2BIgUr458NpxEmMWhjvnfcYotAn%2FHt7YJpAcMaeL8wjUnf2hfUboazFWTmw5aRT%2FrtdX8hVshZytzcF9kwO9cYB3NZXFBLHLLWf956LCjsTdN6stSn0MxU8hktkwQXELL104mDCG9ec2myiWFaqvQzS7fU8njL2Hbr9F4O4404baVlTDyTrZXHHhJMeQxJlixhVEZPK9YF1LIT6aV3UzZ5hfBayLv5gZ08qSBp%2FP73SuuSRk9dr2E3AvF8CWEp4W%2Fz2P1EVao3wRjHX7k9HgF7if6%2FmEInSlIj5lr57YXP%2B1JMjJnIJi0OzFE6B5cFbMDD%2FQ1e5cY7cDAS6jhq3SIINgUB0Ixh7n7otZktkQsIQf4b0F8e1aMr8vDc35swsI1WbJDnyUkLGbvJVJnOLfecPvkFYf%2FVfSiDLsvahXEfXcucJhj8G4IRoxqVl9zdyHcKH2rPbPaEMJwZz2uekQptvJ5DCSmOLEBjqkAXxBNDHULWAtWSJMWTeMI9CU%2F90ZebkXFY0lsWt4FT7FM8vqwgKa%2F9qibtv0rpIwo4tdGZCUXxQrOKL4GuVo9MqY26mAUcLsM8hmgYhFFIiLQGK6V6HQ%2FNCCtpESkjWYV%2BGzZ52VNYC5%2B7HFEZii2zqPK0t7TryVIPk3x3wuAXcbKQG1uky%2FhxtNazLug1t5SQNWQi0ZZqxtISgsAULP6%2F3ARJ%2FL&X-Amz-Signature=a12ebcebfe9a00337731a63f38cd12b554b8d6e2a7fd411a3e1419277b3bfca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
