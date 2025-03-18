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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHY6HPF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUFL1DQ2zJNnY9p8MIFdflsmefSGp5wIbsxRhMQapUAAiEArSG70LTeu8GmP3JtPvwDuhZ%2F1ZR%2BYu7OZ0Q9BDv2gm0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIvrDKfBwkmi%2B8k3DSrcA3z8e6Z2JkKGsdtVzafLbTIWsyp7stgthNO7SelCjDAUWUzzaJCeiXAl3lrcRBg9gkZqj7xj8YAJ0iNGZRVrYoIeGiJExH6kZd5jU%2BeSXj8a3f8HGv9jBipAFH9e8wKKIv2LosDZwLPb9%2FQCnRvQBJvuAuei7E%2FuvAKxZs2Q0XfBJa2dIfB4htMmxoCjc4w71TdTPASbIAf6HyjmK0wFfDjs1Cj5EN08vOubJyUQt1yupK9etzustczmn9bHhhAZe2fSokaNuWHiodINbSN5FFT4FJMrdmey1xdhvGX2UeObaiYPTEIjcJ5AELtwduFik5enAD6QE2idDDdTtrZGd0zIRX6lwk9VaUMArY3m0U6xYHPll2M2sSOZVE7POGApkcgpH2%2F61SNtJF4WcNNcWZWegmVq9ITwgpXsT2gjcfnhh009YCFDWMUqo%2FpM2Od5bLNPbnC%2BLdhmEaToAMdxD0A7hIBtb%2BdTTYQwEeD33lAoQBQN%2FXEGsH9gEInMa7rQ8%2BuPary9cZRWV3LlUfl7U6CHTEp6V4sssqdcNKypUrn22V0NYiGS%2F4w0uLX%2FMDSn2qExaKu2%2F8VuubiBs8KTqrR0VYbKMIJ9NlX6A2p9pWGWrbnp%2Bf8NGXWXLIVnMN2x574GOqUB%2BscrLIAhGHG0dOHR%2F4I%2Fmq%2FQd40i2mtomiEgJwVcNZAefS24UJ2fwSDSdKItXkQeWlqyN8hyhy3fkxE5V1fjdVCDK1p7aksZWfed3f2GtbxmNf6Ajt4Z5dj%2BF%2FrrHvKd%2F43Fw61qUIbwnAGVbgtnDVX1zkUofbRqmYcg1A15znBbxPUXbF5xGBHVn5%2BOIk%2FnLfj6CmX7RzsbjloXQDOglHyGZLlg&X-Amz-Signature=c7855081e502da352cf4f3c2d787b175d821a1e6aeaa50060c36d21083d374fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHY6HPF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUFL1DQ2zJNnY9p8MIFdflsmefSGp5wIbsxRhMQapUAAiEArSG70LTeu8GmP3JtPvwDuhZ%2F1ZR%2BYu7OZ0Q9BDv2gm0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIvrDKfBwkmi%2B8k3DSrcA3z8e6Z2JkKGsdtVzafLbTIWsyp7stgthNO7SelCjDAUWUzzaJCeiXAl3lrcRBg9gkZqj7xj8YAJ0iNGZRVrYoIeGiJExH6kZd5jU%2BeSXj8a3f8HGv9jBipAFH9e8wKKIv2LosDZwLPb9%2FQCnRvQBJvuAuei7E%2FuvAKxZs2Q0XfBJa2dIfB4htMmxoCjc4w71TdTPASbIAf6HyjmK0wFfDjs1Cj5EN08vOubJyUQt1yupK9etzustczmn9bHhhAZe2fSokaNuWHiodINbSN5FFT4FJMrdmey1xdhvGX2UeObaiYPTEIjcJ5AELtwduFik5enAD6QE2idDDdTtrZGd0zIRX6lwk9VaUMArY3m0U6xYHPll2M2sSOZVE7POGApkcgpH2%2F61SNtJF4WcNNcWZWegmVq9ITwgpXsT2gjcfnhh009YCFDWMUqo%2FpM2Od5bLNPbnC%2BLdhmEaToAMdxD0A7hIBtb%2BdTTYQwEeD33lAoQBQN%2FXEGsH9gEInMa7rQ8%2BuPary9cZRWV3LlUfl7U6CHTEp6V4sssqdcNKypUrn22V0NYiGS%2F4w0uLX%2FMDSn2qExaKu2%2F8VuubiBs8KTqrR0VYbKMIJ9NlX6A2p9pWGWrbnp%2Bf8NGXWXLIVnMN2x574GOqUB%2BscrLIAhGHG0dOHR%2F4I%2Fmq%2FQd40i2mtomiEgJwVcNZAefS24UJ2fwSDSdKItXkQeWlqyN8hyhy3fkxE5V1fjdVCDK1p7aksZWfed3f2GtbxmNf6Ajt4Z5dj%2BF%2FrrHvKd%2F43Fw61qUIbwnAGVbgtnDVX1zkUofbRqmYcg1A15znBbxPUXbF5xGBHVn5%2BOIk%2FnLfj6CmX7RzsbjloXQDOglHyGZLlg&X-Amz-Signature=14fe494f0411d32006e42c32532dbdc93ff2edfa9d42dd0a690714dffcd774be&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHY6HPF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUFL1DQ2zJNnY9p8MIFdflsmefSGp5wIbsxRhMQapUAAiEArSG70LTeu8GmP3JtPvwDuhZ%2F1ZR%2BYu7OZ0Q9BDv2gm0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIvrDKfBwkmi%2B8k3DSrcA3z8e6Z2JkKGsdtVzafLbTIWsyp7stgthNO7SelCjDAUWUzzaJCeiXAl3lrcRBg9gkZqj7xj8YAJ0iNGZRVrYoIeGiJExH6kZd5jU%2BeSXj8a3f8HGv9jBipAFH9e8wKKIv2LosDZwLPb9%2FQCnRvQBJvuAuei7E%2FuvAKxZs2Q0XfBJa2dIfB4htMmxoCjc4w71TdTPASbIAf6HyjmK0wFfDjs1Cj5EN08vOubJyUQt1yupK9etzustczmn9bHhhAZe2fSokaNuWHiodINbSN5FFT4FJMrdmey1xdhvGX2UeObaiYPTEIjcJ5AELtwduFik5enAD6QE2idDDdTtrZGd0zIRX6lwk9VaUMArY3m0U6xYHPll2M2sSOZVE7POGApkcgpH2%2F61SNtJF4WcNNcWZWegmVq9ITwgpXsT2gjcfnhh009YCFDWMUqo%2FpM2Od5bLNPbnC%2BLdhmEaToAMdxD0A7hIBtb%2BdTTYQwEeD33lAoQBQN%2FXEGsH9gEInMa7rQ8%2BuPary9cZRWV3LlUfl7U6CHTEp6V4sssqdcNKypUrn22V0NYiGS%2F4w0uLX%2FMDSn2qExaKu2%2F8VuubiBs8KTqrR0VYbKMIJ9NlX6A2p9pWGWrbnp%2Bf8NGXWXLIVnMN2x574GOqUB%2BscrLIAhGHG0dOHR%2F4I%2Fmq%2FQd40i2mtomiEgJwVcNZAefS24UJ2fwSDSdKItXkQeWlqyN8hyhy3fkxE5V1fjdVCDK1p7aksZWfed3f2GtbxmNf6Ajt4Z5dj%2BF%2FrrHvKd%2F43Fw61qUIbwnAGVbgtnDVX1zkUofbRqmYcg1A15znBbxPUXbF5xGBHVn5%2BOIk%2FnLfj6CmX7RzsbjloXQDOglHyGZLlg&X-Amz-Signature=997f5f284150b9239b138cfcf8913133aa2ee107f73669ee3056e57c70bdc438&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHY6HPF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUFL1DQ2zJNnY9p8MIFdflsmefSGp5wIbsxRhMQapUAAiEArSG70LTeu8GmP3JtPvwDuhZ%2F1ZR%2BYu7OZ0Q9BDv2gm0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIvrDKfBwkmi%2B8k3DSrcA3z8e6Z2JkKGsdtVzafLbTIWsyp7stgthNO7SelCjDAUWUzzaJCeiXAl3lrcRBg9gkZqj7xj8YAJ0iNGZRVrYoIeGiJExH6kZd5jU%2BeSXj8a3f8HGv9jBipAFH9e8wKKIv2LosDZwLPb9%2FQCnRvQBJvuAuei7E%2FuvAKxZs2Q0XfBJa2dIfB4htMmxoCjc4w71TdTPASbIAf6HyjmK0wFfDjs1Cj5EN08vOubJyUQt1yupK9etzustczmn9bHhhAZe2fSokaNuWHiodINbSN5FFT4FJMrdmey1xdhvGX2UeObaiYPTEIjcJ5AELtwduFik5enAD6QE2idDDdTtrZGd0zIRX6lwk9VaUMArY3m0U6xYHPll2M2sSOZVE7POGApkcgpH2%2F61SNtJF4WcNNcWZWegmVq9ITwgpXsT2gjcfnhh009YCFDWMUqo%2FpM2Od5bLNPbnC%2BLdhmEaToAMdxD0A7hIBtb%2BdTTYQwEeD33lAoQBQN%2FXEGsH9gEInMa7rQ8%2BuPary9cZRWV3LlUfl7U6CHTEp6V4sssqdcNKypUrn22V0NYiGS%2F4w0uLX%2FMDSn2qExaKu2%2F8VuubiBs8KTqrR0VYbKMIJ9NlX6A2p9pWGWrbnp%2Bf8NGXWXLIVnMN2x574GOqUB%2BscrLIAhGHG0dOHR%2F4I%2Fmq%2FQd40i2mtomiEgJwVcNZAefS24UJ2fwSDSdKItXkQeWlqyN8hyhy3fkxE5V1fjdVCDK1p7aksZWfed3f2GtbxmNf6Ajt4Z5dj%2BF%2FrrHvKd%2F43Fw61qUIbwnAGVbgtnDVX1zkUofbRqmYcg1A15znBbxPUXbF5xGBHVn5%2BOIk%2FnLfj6CmX7RzsbjloXQDOglHyGZLlg&X-Amz-Signature=c6274fc303f53cc8a78640e91f0413d3111120e93f9ef93a3485486d0d2e3871&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHY6HPF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUFL1DQ2zJNnY9p8MIFdflsmefSGp5wIbsxRhMQapUAAiEArSG70LTeu8GmP3JtPvwDuhZ%2F1ZR%2BYu7OZ0Q9BDv2gm0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIvrDKfBwkmi%2B8k3DSrcA3z8e6Z2JkKGsdtVzafLbTIWsyp7stgthNO7SelCjDAUWUzzaJCeiXAl3lrcRBg9gkZqj7xj8YAJ0iNGZRVrYoIeGiJExH6kZd5jU%2BeSXj8a3f8HGv9jBipAFH9e8wKKIv2LosDZwLPb9%2FQCnRvQBJvuAuei7E%2FuvAKxZs2Q0XfBJa2dIfB4htMmxoCjc4w71TdTPASbIAf6HyjmK0wFfDjs1Cj5EN08vOubJyUQt1yupK9etzustczmn9bHhhAZe2fSokaNuWHiodINbSN5FFT4FJMrdmey1xdhvGX2UeObaiYPTEIjcJ5AELtwduFik5enAD6QE2idDDdTtrZGd0zIRX6lwk9VaUMArY3m0U6xYHPll2M2sSOZVE7POGApkcgpH2%2F61SNtJF4WcNNcWZWegmVq9ITwgpXsT2gjcfnhh009YCFDWMUqo%2FpM2Od5bLNPbnC%2BLdhmEaToAMdxD0A7hIBtb%2BdTTYQwEeD33lAoQBQN%2FXEGsH9gEInMa7rQ8%2BuPary9cZRWV3LlUfl7U6CHTEp6V4sssqdcNKypUrn22V0NYiGS%2F4w0uLX%2FMDSn2qExaKu2%2F8VuubiBs8KTqrR0VYbKMIJ9NlX6A2p9pWGWrbnp%2Bf8NGXWXLIVnMN2x574GOqUB%2BscrLIAhGHG0dOHR%2F4I%2Fmq%2FQd40i2mtomiEgJwVcNZAefS24UJ2fwSDSdKItXkQeWlqyN8hyhy3fkxE5V1fjdVCDK1p7aksZWfed3f2GtbxmNf6Ajt4Z5dj%2BF%2FrrHvKd%2F43Fw61qUIbwnAGVbgtnDVX1zkUofbRqmYcg1A15znBbxPUXbF5xGBHVn5%2BOIk%2FnLfj6CmX7RzsbjloXQDOglHyGZLlg&X-Amz-Signature=6f71a94e927b42aaee72f96a4f5c0c27e1843e827e10f73d835d02b44ace2ece&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHY6HPF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUFL1DQ2zJNnY9p8MIFdflsmefSGp5wIbsxRhMQapUAAiEArSG70LTeu8GmP3JtPvwDuhZ%2F1ZR%2BYu7OZ0Q9BDv2gm0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIvrDKfBwkmi%2B8k3DSrcA3z8e6Z2JkKGsdtVzafLbTIWsyp7stgthNO7SelCjDAUWUzzaJCeiXAl3lrcRBg9gkZqj7xj8YAJ0iNGZRVrYoIeGiJExH6kZd5jU%2BeSXj8a3f8HGv9jBipAFH9e8wKKIv2LosDZwLPb9%2FQCnRvQBJvuAuei7E%2FuvAKxZs2Q0XfBJa2dIfB4htMmxoCjc4w71TdTPASbIAf6HyjmK0wFfDjs1Cj5EN08vOubJyUQt1yupK9etzustczmn9bHhhAZe2fSokaNuWHiodINbSN5FFT4FJMrdmey1xdhvGX2UeObaiYPTEIjcJ5AELtwduFik5enAD6QE2idDDdTtrZGd0zIRX6lwk9VaUMArY3m0U6xYHPll2M2sSOZVE7POGApkcgpH2%2F61SNtJF4WcNNcWZWegmVq9ITwgpXsT2gjcfnhh009YCFDWMUqo%2FpM2Od5bLNPbnC%2BLdhmEaToAMdxD0A7hIBtb%2BdTTYQwEeD33lAoQBQN%2FXEGsH9gEInMa7rQ8%2BuPary9cZRWV3LlUfl7U6CHTEp6V4sssqdcNKypUrn22V0NYiGS%2F4w0uLX%2FMDSn2qExaKu2%2F8VuubiBs8KTqrR0VYbKMIJ9NlX6A2p9pWGWrbnp%2Bf8NGXWXLIVnMN2x574GOqUB%2BscrLIAhGHG0dOHR%2F4I%2Fmq%2FQd40i2mtomiEgJwVcNZAefS24UJ2fwSDSdKItXkQeWlqyN8hyhy3fkxE5V1fjdVCDK1p7aksZWfed3f2GtbxmNf6Ajt4Z5dj%2BF%2FrrHvKd%2F43Fw61qUIbwnAGVbgtnDVX1zkUofbRqmYcg1A15znBbxPUXbF5xGBHVn5%2BOIk%2FnLfj6CmX7RzsbjloXQDOglHyGZLlg&X-Amz-Signature=bab0601ee2a37a14a751fbd2980faa74c9293982eb2b69ff0351b457a6ac07c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHY6HPF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUFL1DQ2zJNnY9p8MIFdflsmefSGp5wIbsxRhMQapUAAiEArSG70LTeu8GmP3JtPvwDuhZ%2F1ZR%2BYu7OZ0Q9BDv2gm0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIvrDKfBwkmi%2B8k3DSrcA3z8e6Z2JkKGsdtVzafLbTIWsyp7stgthNO7SelCjDAUWUzzaJCeiXAl3lrcRBg9gkZqj7xj8YAJ0iNGZRVrYoIeGiJExH6kZd5jU%2BeSXj8a3f8HGv9jBipAFH9e8wKKIv2LosDZwLPb9%2FQCnRvQBJvuAuei7E%2FuvAKxZs2Q0XfBJa2dIfB4htMmxoCjc4w71TdTPASbIAf6HyjmK0wFfDjs1Cj5EN08vOubJyUQt1yupK9etzustczmn9bHhhAZe2fSokaNuWHiodINbSN5FFT4FJMrdmey1xdhvGX2UeObaiYPTEIjcJ5AELtwduFik5enAD6QE2idDDdTtrZGd0zIRX6lwk9VaUMArY3m0U6xYHPll2M2sSOZVE7POGApkcgpH2%2F61SNtJF4WcNNcWZWegmVq9ITwgpXsT2gjcfnhh009YCFDWMUqo%2FpM2Od5bLNPbnC%2BLdhmEaToAMdxD0A7hIBtb%2BdTTYQwEeD33lAoQBQN%2FXEGsH9gEInMa7rQ8%2BuPary9cZRWV3LlUfl7U6CHTEp6V4sssqdcNKypUrn22V0NYiGS%2F4w0uLX%2FMDSn2qExaKu2%2F8VuubiBs8KTqrR0VYbKMIJ9NlX6A2p9pWGWrbnp%2Bf8NGXWXLIVnMN2x574GOqUB%2BscrLIAhGHG0dOHR%2F4I%2Fmq%2FQd40i2mtomiEgJwVcNZAefS24UJ2fwSDSdKItXkQeWlqyN8hyhy3fkxE5V1fjdVCDK1p7aksZWfed3f2GtbxmNf6Ajt4Z5dj%2BF%2FrrHvKd%2F43Fw61qUIbwnAGVbgtnDVX1zkUofbRqmYcg1A15znBbxPUXbF5xGBHVn5%2BOIk%2FnLfj6CmX7RzsbjloXQDOglHyGZLlg&X-Amz-Signature=9da0f3b36601122ca30b50a5b22900a14c091b8765373c5630a4de8f1d79a4e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHY6HPF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUFL1DQ2zJNnY9p8MIFdflsmefSGp5wIbsxRhMQapUAAiEArSG70LTeu8GmP3JtPvwDuhZ%2F1ZR%2BYu7OZ0Q9BDv2gm0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIvrDKfBwkmi%2B8k3DSrcA3z8e6Z2JkKGsdtVzafLbTIWsyp7stgthNO7SelCjDAUWUzzaJCeiXAl3lrcRBg9gkZqj7xj8YAJ0iNGZRVrYoIeGiJExH6kZd5jU%2BeSXj8a3f8HGv9jBipAFH9e8wKKIv2LosDZwLPb9%2FQCnRvQBJvuAuei7E%2FuvAKxZs2Q0XfBJa2dIfB4htMmxoCjc4w71TdTPASbIAf6HyjmK0wFfDjs1Cj5EN08vOubJyUQt1yupK9etzustczmn9bHhhAZe2fSokaNuWHiodINbSN5FFT4FJMrdmey1xdhvGX2UeObaiYPTEIjcJ5AELtwduFik5enAD6QE2idDDdTtrZGd0zIRX6lwk9VaUMArY3m0U6xYHPll2M2sSOZVE7POGApkcgpH2%2F61SNtJF4WcNNcWZWegmVq9ITwgpXsT2gjcfnhh009YCFDWMUqo%2FpM2Od5bLNPbnC%2BLdhmEaToAMdxD0A7hIBtb%2BdTTYQwEeD33lAoQBQN%2FXEGsH9gEInMa7rQ8%2BuPary9cZRWV3LlUfl7U6CHTEp6V4sssqdcNKypUrn22V0NYiGS%2F4w0uLX%2FMDSn2qExaKu2%2F8VuubiBs8KTqrR0VYbKMIJ9NlX6A2p9pWGWrbnp%2Bf8NGXWXLIVnMN2x574GOqUB%2BscrLIAhGHG0dOHR%2F4I%2Fmq%2FQd40i2mtomiEgJwVcNZAefS24UJ2fwSDSdKItXkQeWlqyN8hyhy3fkxE5V1fjdVCDK1p7aksZWfed3f2GtbxmNf6Ajt4Z5dj%2BF%2FrrHvKd%2F43Fw61qUIbwnAGVbgtnDVX1zkUofbRqmYcg1A15znBbxPUXbF5xGBHVn5%2BOIk%2FnLfj6CmX7RzsbjloXQDOglHyGZLlg&X-Amz-Signature=971b267a27443e1857e11abd7995ed683dea61480e853ec1b4df57dce69f6f72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
