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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D5UVIG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FIwUdHuvnJZF7D%2B2VtYmAFNf%2BoFIEsj%2FeCx9pnTvkCIDqsI9OKKM9W5jxAlRiymQDdsypairnPyB2vQ2%2B1JIORKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwUyq8kqCG0%2BkeZDgq3ANEXTZpWbNcO6fQ03LNVmsxfj6wByhi1N1ErFGnMej6ZWZk1NmOKSQ3QgZx%2BZS0R0wCQ8VZvx9EWykQaq%2BWO9Yrl02IJBXVaM8DEKE1WUqMQ8qaGFvHd%2BPIq6wPx5TcYh9rEkEhco0NaLc50USqKVxPVU2FuQkE%2FV4b%2FAKvNJ%2FVaNihgzuzupKPkkx7ZW8rBRFvTDeZUiswLd%2BPEkXVZ4IuXOuS3wX%2Bo3bs8o35ZXG70x9QhvK0j9FGvw5W5UssC%2FoVcnhJvCJCPtS7DQklVlpkBODAlvQ2BVxLhMraZ16LAuP3zTKkIQ8RZKFBpkd%2FF9apbxbnnMXI3gPWwA%2F4zKpkkrdVrNTLzPweqJdXqqahG9ul%2F0YfGe4iHGvjRFzbzS9Dcu6H9M8CieiyGTzmY3e1Z9BN1qFx3%2FCLmGaJ7TD5BQ%2F%2BmN53E7sFEgdBaJVbp1oEYvmDItZ%2BRE1ygHpoOCf24N0tPdOiNMyx2qbrUHzAa1SdWZD5QYlPg4bm8o4p%2FC2LG4AcZsjuVawSN4swQ4yyNBjzJV7ocLLry%2FEsKPoxnqHx0jeKoyexsoTFiOyknNp1XUpdZp6dUF3%2BhZSDPpwXIeDgoL1hZ40CFcSkSQeqqbKDy5p7GsT9CtqD3zDywaDCBjqnATuZ9TVnQqpGrnMFu%2F8ULDaBapWgbk9yiWz0LxRwU9Y1r3B8CijBFP1URjpkVsBrJdsU%2BOcgm7O70Pv9lO7BJeCwOHrgmq3kwVrm5r%2BZDR%2BrSUF2KBbMZVUFP3%2FDDnTfmby8%2Bq6NYHDFLTYqPwKp8MRlPqvd%2F5Fmgz71caObn5FsMLdwUinCuBINa8Xr07IZynp7N%2F84sUfWc%2BlUdGeVyewpIWo5xlJx&X-Amz-Signature=acf8322d39b73e045d26d400f082120d16e2148e8d560d717678604a2efe41ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D5UVIG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FIwUdHuvnJZF7D%2B2VtYmAFNf%2BoFIEsj%2FeCx9pnTvkCIDqsI9OKKM9W5jxAlRiymQDdsypairnPyB2vQ2%2B1JIORKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwUyq8kqCG0%2BkeZDgq3ANEXTZpWbNcO6fQ03LNVmsxfj6wByhi1N1ErFGnMej6ZWZk1NmOKSQ3QgZx%2BZS0R0wCQ8VZvx9EWykQaq%2BWO9Yrl02IJBXVaM8DEKE1WUqMQ8qaGFvHd%2BPIq6wPx5TcYh9rEkEhco0NaLc50USqKVxPVU2FuQkE%2FV4b%2FAKvNJ%2FVaNihgzuzupKPkkx7ZW8rBRFvTDeZUiswLd%2BPEkXVZ4IuXOuS3wX%2Bo3bs8o35ZXG70x9QhvK0j9FGvw5W5UssC%2FoVcnhJvCJCPtS7DQklVlpkBODAlvQ2BVxLhMraZ16LAuP3zTKkIQ8RZKFBpkd%2FF9apbxbnnMXI3gPWwA%2F4zKpkkrdVrNTLzPweqJdXqqahG9ul%2F0YfGe4iHGvjRFzbzS9Dcu6H9M8CieiyGTzmY3e1Z9BN1qFx3%2FCLmGaJ7TD5BQ%2F%2BmN53E7sFEgdBaJVbp1oEYvmDItZ%2BRE1ygHpoOCf24N0tPdOiNMyx2qbrUHzAa1SdWZD5QYlPg4bm8o4p%2FC2LG4AcZsjuVawSN4swQ4yyNBjzJV7ocLLry%2FEsKPoxnqHx0jeKoyexsoTFiOyknNp1XUpdZp6dUF3%2BhZSDPpwXIeDgoL1hZ40CFcSkSQeqqbKDy5p7GsT9CtqD3zDywaDCBjqnATuZ9TVnQqpGrnMFu%2F8ULDaBapWgbk9yiWz0LxRwU9Y1r3B8CijBFP1URjpkVsBrJdsU%2BOcgm7O70Pv9lO7BJeCwOHrgmq3kwVrm5r%2BZDR%2BrSUF2KBbMZVUFP3%2FDDnTfmby8%2Bq6NYHDFLTYqPwKp8MRlPqvd%2F5Fmgz71caObn5FsMLdwUinCuBINa8Xr07IZynp7N%2F84sUfWc%2BlUdGeVyewpIWo5xlJx&X-Amz-Signature=e07fa607be072f2662d897faf91ffdcbe69b73e8d9253826bb9d4a944838b3df&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D5UVIG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FIwUdHuvnJZF7D%2B2VtYmAFNf%2BoFIEsj%2FeCx9pnTvkCIDqsI9OKKM9W5jxAlRiymQDdsypairnPyB2vQ2%2B1JIORKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwUyq8kqCG0%2BkeZDgq3ANEXTZpWbNcO6fQ03LNVmsxfj6wByhi1N1ErFGnMej6ZWZk1NmOKSQ3QgZx%2BZS0R0wCQ8VZvx9EWykQaq%2BWO9Yrl02IJBXVaM8DEKE1WUqMQ8qaGFvHd%2BPIq6wPx5TcYh9rEkEhco0NaLc50USqKVxPVU2FuQkE%2FV4b%2FAKvNJ%2FVaNihgzuzupKPkkx7ZW8rBRFvTDeZUiswLd%2BPEkXVZ4IuXOuS3wX%2Bo3bs8o35ZXG70x9QhvK0j9FGvw5W5UssC%2FoVcnhJvCJCPtS7DQklVlpkBODAlvQ2BVxLhMraZ16LAuP3zTKkIQ8RZKFBpkd%2FF9apbxbnnMXI3gPWwA%2F4zKpkkrdVrNTLzPweqJdXqqahG9ul%2F0YfGe4iHGvjRFzbzS9Dcu6H9M8CieiyGTzmY3e1Z9BN1qFx3%2FCLmGaJ7TD5BQ%2F%2BmN53E7sFEgdBaJVbp1oEYvmDItZ%2BRE1ygHpoOCf24N0tPdOiNMyx2qbrUHzAa1SdWZD5QYlPg4bm8o4p%2FC2LG4AcZsjuVawSN4swQ4yyNBjzJV7ocLLry%2FEsKPoxnqHx0jeKoyexsoTFiOyknNp1XUpdZp6dUF3%2BhZSDPpwXIeDgoL1hZ40CFcSkSQeqqbKDy5p7GsT9CtqD3zDywaDCBjqnATuZ9TVnQqpGrnMFu%2F8ULDaBapWgbk9yiWz0LxRwU9Y1r3B8CijBFP1URjpkVsBrJdsU%2BOcgm7O70Pv9lO7BJeCwOHrgmq3kwVrm5r%2BZDR%2BrSUF2KBbMZVUFP3%2FDDnTfmby8%2Bq6NYHDFLTYqPwKp8MRlPqvd%2F5Fmgz71caObn5FsMLdwUinCuBINa8Xr07IZynp7N%2F84sUfWc%2BlUdGeVyewpIWo5xlJx&X-Amz-Signature=b42d0db757b8d77ee9550cfb90061764c069ac241086e2448d22a98d43ae07a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D5UVIG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FIwUdHuvnJZF7D%2B2VtYmAFNf%2BoFIEsj%2FeCx9pnTvkCIDqsI9OKKM9W5jxAlRiymQDdsypairnPyB2vQ2%2B1JIORKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwUyq8kqCG0%2BkeZDgq3ANEXTZpWbNcO6fQ03LNVmsxfj6wByhi1N1ErFGnMej6ZWZk1NmOKSQ3QgZx%2BZS0R0wCQ8VZvx9EWykQaq%2BWO9Yrl02IJBXVaM8DEKE1WUqMQ8qaGFvHd%2BPIq6wPx5TcYh9rEkEhco0NaLc50USqKVxPVU2FuQkE%2FV4b%2FAKvNJ%2FVaNihgzuzupKPkkx7ZW8rBRFvTDeZUiswLd%2BPEkXVZ4IuXOuS3wX%2Bo3bs8o35ZXG70x9QhvK0j9FGvw5W5UssC%2FoVcnhJvCJCPtS7DQklVlpkBODAlvQ2BVxLhMraZ16LAuP3zTKkIQ8RZKFBpkd%2FF9apbxbnnMXI3gPWwA%2F4zKpkkrdVrNTLzPweqJdXqqahG9ul%2F0YfGe4iHGvjRFzbzS9Dcu6H9M8CieiyGTzmY3e1Z9BN1qFx3%2FCLmGaJ7TD5BQ%2F%2BmN53E7sFEgdBaJVbp1oEYvmDItZ%2BRE1ygHpoOCf24N0tPdOiNMyx2qbrUHzAa1SdWZD5QYlPg4bm8o4p%2FC2LG4AcZsjuVawSN4swQ4yyNBjzJV7ocLLry%2FEsKPoxnqHx0jeKoyexsoTFiOyknNp1XUpdZp6dUF3%2BhZSDPpwXIeDgoL1hZ40CFcSkSQeqqbKDy5p7GsT9CtqD3zDywaDCBjqnATuZ9TVnQqpGrnMFu%2F8ULDaBapWgbk9yiWz0LxRwU9Y1r3B8CijBFP1URjpkVsBrJdsU%2BOcgm7O70Pv9lO7BJeCwOHrgmq3kwVrm5r%2BZDR%2BrSUF2KBbMZVUFP3%2FDDnTfmby8%2Bq6NYHDFLTYqPwKp8MRlPqvd%2F5Fmgz71caObn5FsMLdwUinCuBINa8Xr07IZynp7N%2F84sUfWc%2BlUdGeVyewpIWo5xlJx&X-Amz-Signature=e081d6d3d161f524932b9f705eac762904c43329f923b24dd81c0ba49ab9713f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D5UVIG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FIwUdHuvnJZF7D%2B2VtYmAFNf%2BoFIEsj%2FeCx9pnTvkCIDqsI9OKKM9W5jxAlRiymQDdsypairnPyB2vQ2%2B1JIORKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwUyq8kqCG0%2BkeZDgq3ANEXTZpWbNcO6fQ03LNVmsxfj6wByhi1N1ErFGnMej6ZWZk1NmOKSQ3QgZx%2BZS0R0wCQ8VZvx9EWykQaq%2BWO9Yrl02IJBXVaM8DEKE1WUqMQ8qaGFvHd%2BPIq6wPx5TcYh9rEkEhco0NaLc50USqKVxPVU2FuQkE%2FV4b%2FAKvNJ%2FVaNihgzuzupKPkkx7ZW8rBRFvTDeZUiswLd%2BPEkXVZ4IuXOuS3wX%2Bo3bs8o35ZXG70x9QhvK0j9FGvw5W5UssC%2FoVcnhJvCJCPtS7DQklVlpkBODAlvQ2BVxLhMraZ16LAuP3zTKkIQ8RZKFBpkd%2FF9apbxbnnMXI3gPWwA%2F4zKpkkrdVrNTLzPweqJdXqqahG9ul%2F0YfGe4iHGvjRFzbzS9Dcu6H9M8CieiyGTzmY3e1Z9BN1qFx3%2FCLmGaJ7TD5BQ%2F%2BmN53E7sFEgdBaJVbp1oEYvmDItZ%2BRE1ygHpoOCf24N0tPdOiNMyx2qbrUHzAa1SdWZD5QYlPg4bm8o4p%2FC2LG4AcZsjuVawSN4swQ4yyNBjzJV7ocLLry%2FEsKPoxnqHx0jeKoyexsoTFiOyknNp1XUpdZp6dUF3%2BhZSDPpwXIeDgoL1hZ40CFcSkSQeqqbKDy5p7GsT9CtqD3zDywaDCBjqnATuZ9TVnQqpGrnMFu%2F8ULDaBapWgbk9yiWz0LxRwU9Y1r3B8CijBFP1URjpkVsBrJdsU%2BOcgm7O70Pv9lO7BJeCwOHrgmq3kwVrm5r%2BZDR%2BrSUF2KBbMZVUFP3%2FDDnTfmby8%2Bq6NYHDFLTYqPwKp8MRlPqvd%2F5Fmgz71caObn5FsMLdwUinCuBINa8Xr07IZynp7N%2F84sUfWc%2BlUdGeVyewpIWo5xlJx&X-Amz-Signature=95b4a689da40f90b195cf04b7afba3b047c5bc9b9af23645f7e0788140d9bd82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D5UVIG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FIwUdHuvnJZF7D%2B2VtYmAFNf%2BoFIEsj%2FeCx9pnTvkCIDqsI9OKKM9W5jxAlRiymQDdsypairnPyB2vQ2%2B1JIORKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwUyq8kqCG0%2BkeZDgq3ANEXTZpWbNcO6fQ03LNVmsxfj6wByhi1N1ErFGnMej6ZWZk1NmOKSQ3QgZx%2BZS0R0wCQ8VZvx9EWykQaq%2BWO9Yrl02IJBXVaM8DEKE1WUqMQ8qaGFvHd%2BPIq6wPx5TcYh9rEkEhco0NaLc50USqKVxPVU2FuQkE%2FV4b%2FAKvNJ%2FVaNihgzuzupKPkkx7ZW8rBRFvTDeZUiswLd%2BPEkXVZ4IuXOuS3wX%2Bo3bs8o35ZXG70x9QhvK0j9FGvw5W5UssC%2FoVcnhJvCJCPtS7DQklVlpkBODAlvQ2BVxLhMraZ16LAuP3zTKkIQ8RZKFBpkd%2FF9apbxbnnMXI3gPWwA%2F4zKpkkrdVrNTLzPweqJdXqqahG9ul%2F0YfGe4iHGvjRFzbzS9Dcu6H9M8CieiyGTzmY3e1Z9BN1qFx3%2FCLmGaJ7TD5BQ%2F%2BmN53E7sFEgdBaJVbp1oEYvmDItZ%2BRE1ygHpoOCf24N0tPdOiNMyx2qbrUHzAa1SdWZD5QYlPg4bm8o4p%2FC2LG4AcZsjuVawSN4swQ4yyNBjzJV7ocLLry%2FEsKPoxnqHx0jeKoyexsoTFiOyknNp1XUpdZp6dUF3%2BhZSDPpwXIeDgoL1hZ40CFcSkSQeqqbKDy5p7GsT9CtqD3zDywaDCBjqnATuZ9TVnQqpGrnMFu%2F8ULDaBapWgbk9yiWz0LxRwU9Y1r3B8CijBFP1URjpkVsBrJdsU%2BOcgm7O70Pv9lO7BJeCwOHrgmq3kwVrm5r%2BZDR%2BrSUF2KBbMZVUFP3%2FDDnTfmby8%2Bq6NYHDFLTYqPwKp8MRlPqvd%2F5Fmgz71caObn5FsMLdwUinCuBINa8Xr07IZynp7N%2F84sUfWc%2BlUdGeVyewpIWo5xlJx&X-Amz-Signature=1c2a1d1766dfc01adad10972685d03b55f78582be1f72006e0d0ac0b174323bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D5UVIG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FIwUdHuvnJZF7D%2B2VtYmAFNf%2BoFIEsj%2FeCx9pnTvkCIDqsI9OKKM9W5jxAlRiymQDdsypairnPyB2vQ2%2B1JIORKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwUyq8kqCG0%2BkeZDgq3ANEXTZpWbNcO6fQ03LNVmsxfj6wByhi1N1ErFGnMej6ZWZk1NmOKSQ3QgZx%2BZS0R0wCQ8VZvx9EWykQaq%2BWO9Yrl02IJBXVaM8DEKE1WUqMQ8qaGFvHd%2BPIq6wPx5TcYh9rEkEhco0NaLc50USqKVxPVU2FuQkE%2FV4b%2FAKvNJ%2FVaNihgzuzupKPkkx7ZW8rBRFvTDeZUiswLd%2BPEkXVZ4IuXOuS3wX%2Bo3bs8o35ZXG70x9QhvK0j9FGvw5W5UssC%2FoVcnhJvCJCPtS7DQklVlpkBODAlvQ2BVxLhMraZ16LAuP3zTKkIQ8RZKFBpkd%2FF9apbxbnnMXI3gPWwA%2F4zKpkkrdVrNTLzPweqJdXqqahG9ul%2F0YfGe4iHGvjRFzbzS9Dcu6H9M8CieiyGTzmY3e1Z9BN1qFx3%2FCLmGaJ7TD5BQ%2F%2BmN53E7sFEgdBaJVbp1oEYvmDItZ%2BRE1ygHpoOCf24N0tPdOiNMyx2qbrUHzAa1SdWZD5QYlPg4bm8o4p%2FC2LG4AcZsjuVawSN4swQ4yyNBjzJV7ocLLry%2FEsKPoxnqHx0jeKoyexsoTFiOyknNp1XUpdZp6dUF3%2BhZSDPpwXIeDgoL1hZ40CFcSkSQeqqbKDy5p7GsT9CtqD3zDywaDCBjqnATuZ9TVnQqpGrnMFu%2F8ULDaBapWgbk9yiWz0LxRwU9Y1r3B8CijBFP1URjpkVsBrJdsU%2BOcgm7O70Pv9lO7BJeCwOHrgmq3kwVrm5r%2BZDR%2BrSUF2KBbMZVUFP3%2FDDnTfmby8%2Bq6NYHDFLTYqPwKp8MRlPqvd%2F5Fmgz71caObn5FsMLdwUinCuBINa8Xr07IZynp7N%2F84sUfWc%2BlUdGeVyewpIWo5xlJx&X-Amz-Signature=72be68c6f5c7e5fc64507140349c4d8e0066074c10042bee4f2b33c83904b7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D5UVIG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FIwUdHuvnJZF7D%2B2VtYmAFNf%2BoFIEsj%2FeCx9pnTvkCIDqsI9OKKM9W5jxAlRiymQDdsypairnPyB2vQ2%2B1JIORKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwUyq8kqCG0%2BkeZDgq3ANEXTZpWbNcO6fQ03LNVmsxfj6wByhi1N1ErFGnMej6ZWZk1NmOKSQ3QgZx%2BZS0R0wCQ8VZvx9EWykQaq%2BWO9Yrl02IJBXVaM8DEKE1WUqMQ8qaGFvHd%2BPIq6wPx5TcYh9rEkEhco0NaLc50USqKVxPVU2FuQkE%2FV4b%2FAKvNJ%2FVaNihgzuzupKPkkx7ZW8rBRFvTDeZUiswLd%2BPEkXVZ4IuXOuS3wX%2Bo3bs8o35ZXG70x9QhvK0j9FGvw5W5UssC%2FoVcnhJvCJCPtS7DQklVlpkBODAlvQ2BVxLhMraZ16LAuP3zTKkIQ8RZKFBpkd%2FF9apbxbnnMXI3gPWwA%2F4zKpkkrdVrNTLzPweqJdXqqahG9ul%2F0YfGe4iHGvjRFzbzS9Dcu6H9M8CieiyGTzmY3e1Z9BN1qFx3%2FCLmGaJ7TD5BQ%2F%2BmN53E7sFEgdBaJVbp1oEYvmDItZ%2BRE1ygHpoOCf24N0tPdOiNMyx2qbrUHzAa1SdWZD5QYlPg4bm8o4p%2FC2LG4AcZsjuVawSN4swQ4yyNBjzJV7ocLLry%2FEsKPoxnqHx0jeKoyexsoTFiOyknNp1XUpdZp6dUF3%2BhZSDPpwXIeDgoL1hZ40CFcSkSQeqqbKDy5p7GsT9CtqD3zDywaDCBjqnATuZ9TVnQqpGrnMFu%2F8ULDaBapWgbk9yiWz0LxRwU9Y1r3B8CijBFP1URjpkVsBrJdsU%2BOcgm7O70Pv9lO7BJeCwOHrgmq3kwVrm5r%2BZDR%2BrSUF2KBbMZVUFP3%2FDDnTfmby8%2Bq6NYHDFLTYqPwKp8MRlPqvd%2F5Fmgz71caObn5FsMLdwUinCuBINa8Xr07IZynp7N%2F84sUfWc%2BlUdGeVyewpIWo5xlJx&X-Amz-Signature=32e2257d53ad00ea21d771f811c28e5ba8569964054d99ca5e2ebc67fb08fe25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
