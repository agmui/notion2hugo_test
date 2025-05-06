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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ZGIJA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWj1QC81UtI37T1ponyVMQCW%2BJN3R4BtvkazeJmT4seAiEA9GSFwU9YheTnGPkz8ZlMGT6Phcx8c%2FZcqbBuP%2Bt5fjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdLL%2BnVDVEk3zGHmCrcA3ycvXY5kuHy82JHWMqirhjEbvBQhoFpxukcEHOIDvnrXSQld7%2BDb3C%2BEtCG%2B8c8T05OlaYsBczLk36iOPgddh%2Fe%2BLsD%2BoAduv8PGioLVlMU9Cd7LWk1YxNhRXTfPNqa4HLkiXtNJLrl3CGyQx%2FP5Sj38XwJjroB7Om6fFE1lrzRsyL9DCXClsEUzcXVGTUKeX5TQ4lJIhU5VA9kmc3HiahBperwS7gMHSjCmluO7VtGE%2FXuL%2Fr1DQJg7OOeiF8Bc1UeAGH8qcupKL%2FTQDwPKJWkH7InyVIzoynTyBI1b0B1pOdR%2FFFd55yAxRvDhIoajqmwneBslFfn%2FMQLIFPkWzu%2B850UgO79Mzs5prb3lgN%2F8X9uJGp47O958BkSsWgvnthylK09BFllFdhdeshT1j0jpVW2PlRkn0KrXpcx%2FR%2BorYbjNe5Py7naL%2FJHbSVE0r9tsCsmP0aMpJ8PnMr9q8WUyby%2FCciPZfqQdLvniV5WnT%2BL5Cw%2BDN%2FtkPl9RryJkHXu1C136lOIJX4%2FovfCE87U2Pc%2Fdkld9sqXJioXoXQ0C4F6qVLf9u%2FRqFTaCb5gLO3mPiivePME2gdJ2yx7ILbUapWpO1YLyPlhzhtc0H1%2FOZiNYXgRHp%2F%2FWr19MPWy6MAGOqUBxGLEWRfUElAYbUmhn801JMFFXbJAEPm4HwlhpSC0JjjBCNZaI%2B%2FsYq3fIXcBKPMAMMEKYUNUfwN84Z%2FL%2BTqP%2BQBCugOYDRRKMflt5vr07Y49YAcFZzTFKZcXuP9OljVvS5tdEbMYVJjegxocEYmv9%2B0BIWEy45SB%2FmkeUV5DrMzywGqDtfinRecl0JrYPfWHAZGZUniSUh7TnKRpA%2FRzPLN92VTE&X-Amz-Signature=14469dc2b06b6e25be56a4d45f6b6df4ddbc6b6df46f64f2b73cf3d964b2c346&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ZGIJA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWj1QC81UtI37T1ponyVMQCW%2BJN3R4BtvkazeJmT4seAiEA9GSFwU9YheTnGPkz8ZlMGT6Phcx8c%2FZcqbBuP%2Bt5fjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdLL%2BnVDVEk3zGHmCrcA3ycvXY5kuHy82JHWMqirhjEbvBQhoFpxukcEHOIDvnrXSQld7%2BDb3C%2BEtCG%2B8c8T05OlaYsBczLk36iOPgddh%2Fe%2BLsD%2BoAduv8PGioLVlMU9Cd7LWk1YxNhRXTfPNqa4HLkiXtNJLrl3CGyQx%2FP5Sj38XwJjroB7Om6fFE1lrzRsyL9DCXClsEUzcXVGTUKeX5TQ4lJIhU5VA9kmc3HiahBperwS7gMHSjCmluO7VtGE%2FXuL%2Fr1DQJg7OOeiF8Bc1UeAGH8qcupKL%2FTQDwPKJWkH7InyVIzoynTyBI1b0B1pOdR%2FFFd55yAxRvDhIoajqmwneBslFfn%2FMQLIFPkWzu%2B850UgO79Mzs5prb3lgN%2F8X9uJGp47O958BkSsWgvnthylK09BFllFdhdeshT1j0jpVW2PlRkn0KrXpcx%2FR%2BorYbjNe5Py7naL%2FJHbSVE0r9tsCsmP0aMpJ8PnMr9q8WUyby%2FCciPZfqQdLvniV5WnT%2BL5Cw%2BDN%2FtkPl9RryJkHXu1C136lOIJX4%2FovfCE87U2Pc%2Fdkld9sqXJioXoXQ0C4F6qVLf9u%2FRqFTaCb5gLO3mPiivePME2gdJ2yx7ILbUapWpO1YLyPlhzhtc0H1%2FOZiNYXgRHp%2F%2FWr19MPWy6MAGOqUBxGLEWRfUElAYbUmhn801JMFFXbJAEPm4HwlhpSC0JjjBCNZaI%2B%2FsYq3fIXcBKPMAMMEKYUNUfwN84Z%2FL%2BTqP%2BQBCugOYDRRKMflt5vr07Y49YAcFZzTFKZcXuP9OljVvS5tdEbMYVJjegxocEYmv9%2B0BIWEy45SB%2FmkeUV5DrMzywGqDtfinRecl0JrYPfWHAZGZUniSUh7TnKRpA%2FRzPLN92VTE&X-Amz-Signature=b230b2a5bde3376a00b5f564b037f5414218c9825c523f5dd01b8d219eaae056&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ZGIJA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWj1QC81UtI37T1ponyVMQCW%2BJN3R4BtvkazeJmT4seAiEA9GSFwU9YheTnGPkz8ZlMGT6Phcx8c%2FZcqbBuP%2Bt5fjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdLL%2BnVDVEk3zGHmCrcA3ycvXY5kuHy82JHWMqirhjEbvBQhoFpxukcEHOIDvnrXSQld7%2BDb3C%2BEtCG%2B8c8T05OlaYsBczLk36iOPgddh%2Fe%2BLsD%2BoAduv8PGioLVlMU9Cd7LWk1YxNhRXTfPNqa4HLkiXtNJLrl3CGyQx%2FP5Sj38XwJjroB7Om6fFE1lrzRsyL9DCXClsEUzcXVGTUKeX5TQ4lJIhU5VA9kmc3HiahBperwS7gMHSjCmluO7VtGE%2FXuL%2Fr1DQJg7OOeiF8Bc1UeAGH8qcupKL%2FTQDwPKJWkH7InyVIzoynTyBI1b0B1pOdR%2FFFd55yAxRvDhIoajqmwneBslFfn%2FMQLIFPkWzu%2B850UgO79Mzs5prb3lgN%2F8X9uJGp47O958BkSsWgvnthylK09BFllFdhdeshT1j0jpVW2PlRkn0KrXpcx%2FR%2BorYbjNe5Py7naL%2FJHbSVE0r9tsCsmP0aMpJ8PnMr9q8WUyby%2FCciPZfqQdLvniV5WnT%2BL5Cw%2BDN%2FtkPl9RryJkHXu1C136lOIJX4%2FovfCE87U2Pc%2Fdkld9sqXJioXoXQ0C4F6qVLf9u%2FRqFTaCb5gLO3mPiivePME2gdJ2yx7ILbUapWpO1YLyPlhzhtc0H1%2FOZiNYXgRHp%2F%2FWr19MPWy6MAGOqUBxGLEWRfUElAYbUmhn801JMFFXbJAEPm4HwlhpSC0JjjBCNZaI%2B%2FsYq3fIXcBKPMAMMEKYUNUfwN84Z%2FL%2BTqP%2BQBCugOYDRRKMflt5vr07Y49YAcFZzTFKZcXuP9OljVvS5tdEbMYVJjegxocEYmv9%2B0BIWEy45SB%2FmkeUV5DrMzywGqDtfinRecl0JrYPfWHAZGZUniSUh7TnKRpA%2FRzPLN92VTE&X-Amz-Signature=9813efbe8ea6f09ba0df4e7b1e4035bb658d301246e14e64a9de65563b45f50e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ZGIJA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWj1QC81UtI37T1ponyVMQCW%2BJN3R4BtvkazeJmT4seAiEA9GSFwU9YheTnGPkz8ZlMGT6Phcx8c%2FZcqbBuP%2Bt5fjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdLL%2BnVDVEk3zGHmCrcA3ycvXY5kuHy82JHWMqirhjEbvBQhoFpxukcEHOIDvnrXSQld7%2BDb3C%2BEtCG%2B8c8T05OlaYsBczLk36iOPgddh%2Fe%2BLsD%2BoAduv8PGioLVlMU9Cd7LWk1YxNhRXTfPNqa4HLkiXtNJLrl3CGyQx%2FP5Sj38XwJjroB7Om6fFE1lrzRsyL9DCXClsEUzcXVGTUKeX5TQ4lJIhU5VA9kmc3HiahBperwS7gMHSjCmluO7VtGE%2FXuL%2Fr1DQJg7OOeiF8Bc1UeAGH8qcupKL%2FTQDwPKJWkH7InyVIzoynTyBI1b0B1pOdR%2FFFd55yAxRvDhIoajqmwneBslFfn%2FMQLIFPkWzu%2B850UgO79Mzs5prb3lgN%2F8X9uJGp47O958BkSsWgvnthylK09BFllFdhdeshT1j0jpVW2PlRkn0KrXpcx%2FR%2BorYbjNe5Py7naL%2FJHbSVE0r9tsCsmP0aMpJ8PnMr9q8WUyby%2FCciPZfqQdLvniV5WnT%2BL5Cw%2BDN%2FtkPl9RryJkHXu1C136lOIJX4%2FovfCE87U2Pc%2Fdkld9sqXJioXoXQ0C4F6qVLf9u%2FRqFTaCb5gLO3mPiivePME2gdJ2yx7ILbUapWpO1YLyPlhzhtc0H1%2FOZiNYXgRHp%2F%2FWr19MPWy6MAGOqUBxGLEWRfUElAYbUmhn801JMFFXbJAEPm4HwlhpSC0JjjBCNZaI%2B%2FsYq3fIXcBKPMAMMEKYUNUfwN84Z%2FL%2BTqP%2BQBCugOYDRRKMflt5vr07Y49YAcFZzTFKZcXuP9OljVvS5tdEbMYVJjegxocEYmv9%2B0BIWEy45SB%2FmkeUV5DrMzywGqDtfinRecl0JrYPfWHAZGZUniSUh7TnKRpA%2FRzPLN92VTE&X-Amz-Signature=c1e4f7f37bdf4a296ec051e55c56f9249f1858dcb8f734d57fdf9f403adafe67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ZGIJA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWj1QC81UtI37T1ponyVMQCW%2BJN3R4BtvkazeJmT4seAiEA9GSFwU9YheTnGPkz8ZlMGT6Phcx8c%2FZcqbBuP%2Bt5fjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdLL%2BnVDVEk3zGHmCrcA3ycvXY5kuHy82JHWMqirhjEbvBQhoFpxukcEHOIDvnrXSQld7%2BDb3C%2BEtCG%2B8c8T05OlaYsBczLk36iOPgddh%2Fe%2BLsD%2BoAduv8PGioLVlMU9Cd7LWk1YxNhRXTfPNqa4HLkiXtNJLrl3CGyQx%2FP5Sj38XwJjroB7Om6fFE1lrzRsyL9DCXClsEUzcXVGTUKeX5TQ4lJIhU5VA9kmc3HiahBperwS7gMHSjCmluO7VtGE%2FXuL%2Fr1DQJg7OOeiF8Bc1UeAGH8qcupKL%2FTQDwPKJWkH7InyVIzoynTyBI1b0B1pOdR%2FFFd55yAxRvDhIoajqmwneBslFfn%2FMQLIFPkWzu%2B850UgO79Mzs5prb3lgN%2F8X9uJGp47O958BkSsWgvnthylK09BFllFdhdeshT1j0jpVW2PlRkn0KrXpcx%2FR%2BorYbjNe5Py7naL%2FJHbSVE0r9tsCsmP0aMpJ8PnMr9q8WUyby%2FCciPZfqQdLvniV5WnT%2BL5Cw%2BDN%2FtkPl9RryJkHXu1C136lOIJX4%2FovfCE87U2Pc%2Fdkld9sqXJioXoXQ0C4F6qVLf9u%2FRqFTaCb5gLO3mPiivePME2gdJ2yx7ILbUapWpO1YLyPlhzhtc0H1%2FOZiNYXgRHp%2F%2FWr19MPWy6MAGOqUBxGLEWRfUElAYbUmhn801JMFFXbJAEPm4HwlhpSC0JjjBCNZaI%2B%2FsYq3fIXcBKPMAMMEKYUNUfwN84Z%2FL%2BTqP%2BQBCugOYDRRKMflt5vr07Y49YAcFZzTFKZcXuP9OljVvS5tdEbMYVJjegxocEYmv9%2B0BIWEy45SB%2FmkeUV5DrMzywGqDtfinRecl0JrYPfWHAZGZUniSUh7TnKRpA%2FRzPLN92VTE&X-Amz-Signature=94132aeea9112ad15889dcf1590058f337a73ddb6761471736ba5f746d5ce611&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ZGIJA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWj1QC81UtI37T1ponyVMQCW%2BJN3R4BtvkazeJmT4seAiEA9GSFwU9YheTnGPkz8ZlMGT6Phcx8c%2FZcqbBuP%2Bt5fjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdLL%2BnVDVEk3zGHmCrcA3ycvXY5kuHy82JHWMqirhjEbvBQhoFpxukcEHOIDvnrXSQld7%2BDb3C%2BEtCG%2B8c8T05OlaYsBczLk36iOPgddh%2Fe%2BLsD%2BoAduv8PGioLVlMU9Cd7LWk1YxNhRXTfPNqa4HLkiXtNJLrl3CGyQx%2FP5Sj38XwJjroB7Om6fFE1lrzRsyL9DCXClsEUzcXVGTUKeX5TQ4lJIhU5VA9kmc3HiahBperwS7gMHSjCmluO7VtGE%2FXuL%2Fr1DQJg7OOeiF8Bc1UeAGH8qcupKL%2FTQDwPKJWkH7InyVIzoynTyBI1b0B1pOdR%2FFFd55yAxRvDhIoajqmwneBslFfn%2FMQLIFPkWzu%2B850UgO79Mzs5prb3lgN%2F8X9uJGp47O958BkSsWgvnthylK09BFllFdhdeshT1j0jpVW2PlRkn0KrXpcx%2FR%2BorYbjNe5Py7naL%2FJHbSVE0r9tsCsmP0aMpJ8PnMr9q8WUyby%2FCciPZfqQdLvniV5WnT%2BL5Cw%2BDN%2FtkPl9RryJkHXu1C136lOIJX4%2FovfCE87U2Pc%2Fdkld9sqXJioXoXQ0C4F6qVLf9u%2FRqFTaCb5gLO3mPiivePME2gdJ2yx7ILbUapWpO1YLyPlhzhtc0H1%2FOZiNYXgRHp%2F%2FWr19MPWy6MAGOqUBxGLEWRfUElAYbUmhn801JMFFXbJAEPm4HwlhpSC0JjjBCNZaI%2B%2FsYq3fIXcBKPMAMMEKYUNUfwN84Z%2FL%2BTqP%2BQBCugOYDRRKMflt5vr07Y49YAcFZzTFKZcXuP9OljVvS5tdEbMYVJjegxocEYmv9%2B0BIWEy45SB%2FmkeUV5DrMzywGqDtfinRecl0JrYPfWHAZGZUniSUh7TnKRpA%2FRzPLN92VTE&X-Amz-Signature=8a0e7c3175736ef2d85355f304b30edf8bdab8b09a5dd39fd13a79376f4a696b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ZGIJA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWj1QC81UtI37T1ponyVMQCW%2BJN3R4BtvkazeJmT4seAiEA9GSFwU9YheTnGPkz8ZlMGT6Phcx8c%2FZcqbBuP%2Bt5fjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdLL%2BnVDVEk3zGHmCrcA3ycvXY5kuHy82JHWMqirhjEbvBQhoFpxukcEHOIDvnrXSQld7%2BDb3C%2BEtCG%2B8c8T05OlaYsBczLk36iOPgddh%2Fe%2BLsD%2BoAduv8PGioLVlMU9Cd7LWk1YxNhRXTfPNqa4HLkiXtNJLrl3CGyQx%2FP5Sj38XwJjroB7Om6fFE1lrzRsyL9DCXClsEUzcXVGTUKeX5TQ4lJIhU5VA9kmc3HiahBperwS7gMHSjCmluO7VtGE%2FXuL%2Fr1DQJg7OOeiF8Bc1UeAGH8qcupKL%2FTQDwPKJWkH7InyVIzoynTyBI1b0B1pOdR%2FFFd55yAxRvDhIoajqmwneBslFfn%2FMQLIFPkWzu%2B850UgO79Mzs5prb3lgN%2F8X9uJGp47O958BkSsWgvnthylK09BFllFdhdeshT1j0jpVW2PlRkn0KrXpcx%2FR%2BorYbjNe5Py7naL%2FJHbSVE0r9tsCsmP0aMpJ8PnMr9q8WUyby%2FCciPZfqQdLvniV5WnT%2BL5Cw%2BDN%2FtkPl9RryJkHXu1C136lOIJX4%2FovfCE87U2Pc%2Fdkld9sqXJioXoXQ0C4F6qVLf9u%2FRqFTaCb5gLO3mPiivePME2gdJ2yx7ILbUapWpO1YLyPlhzhtc0H1%2FOZiNYXgRHp%2F%2FWr19MPWy6MAGOqUBxGLEWRfUElAYbUmhn801JMFFXbJAEPm4HwlhpSC0JjjBCNZaI%2B%2FsYq3fIXcBKPMAMMEKYUNUfwN84Z%2FL%2BTqP%2BQBCugOYDRRKMflt5vr07Y49YAcFZzTFKZcXuP9OljVvS5tdEbMYVJjegxocEYmv9%2B0BIWEy45SB%2FmkeUV5DrMzywGqDtfinRecl0JrYPfWHAZGZUniSUh7TnKRpA%2FRzPLN92VTE&X-Amz-Signature=c987cd8fb64e09bc7c0e9420b51c134c3e4b1d4a2164bf896ca17319a7f75c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ZGIJA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWj1QC81UtI37T1ponyVMQCW%2BJN3R4BtvkazeJmT4seAiEA9GSFwU9YheTnGPkz8ZlMGT6Phcx8c%2FZcqbBuP%2Bt5fjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdLL%2BnVDVEk3zGHmCrcA3ycvXY5kuHy82JHWMqirhjEbvBQhoFpxukcEHOIDvnrXSQld7%2BDb3C%2BEtCG%2B8c8T05OlaYsBczLk36iOPgddh%2Fe%2BLsD%2BoAduv8PGioLVlMU9Cd7LWk1YxNhRXTfPNqa4HLkiXtNJLrl3CGyQx%2FP5Sj38XwJjroB7Om6fFE1lrzRsyL9DCXClsEUzcXVGTUKeX5TQ4lJIhU5VA9kmc3HiahBperwS7gMHSjCmluO7VtGE%2FXuL%2Fr1DQJg7OOeiF8Bc1UeAGH8qcupKL%2FTQDwPKJWkH7InyVIzoynTyBI1b0B1pOdR%2FFFd55yAxRvDhIoajqmwneBslFfn%2FMQLIFPkWzu%2B850UgO79Mzs5prb3lgN%2F8X9uJGp47O958BkSsWgvnthylK09BFllFdhdeshT1j0jpVW2PlRkn0KrXpcx%2FR%2BorYbjNe5Py7naL%2FJHbSVE0r9tsCsmP0aMpJ8PnMr9q8WUyby%2FCciPZfqQdLvniV5WnT%2BL5Cw%2BDN%2FtkPl9RryJkHXu1C136lOIJX4%2FovfCE87U2Pc%2Fdkld9sqXJioXoXQ0C4F6qVLf9u%2FRqFTaCb5gLO3mPiivePME2gdJ2yx7ILbUapWpO1YLyPlhzhtc0H1%2FOZiNYXgRHp%2F%2FWr19MPWy6MAGOqUBxGLEWRfUElAYbUmhn801JMFFXbJAEPm4HwlhpSC0JjjBCNZaI%2B%2FsYq3fIXcBKPMAMMEKYUNUfwN84Z%2FL%2BTqP%2BQBCugOYDRRKMflt5vr07Y49YAcFZzTFKZcXuP9OljVvS5tdEbMYVJjegxocEYmv9%2B0BIWEy45SB%2FmkeUV5DrMzywGqDtfinRecl0JrYPfWHAZGZUniSUh7TnKRpA%2FRzPLN92VTE&X-Amz-Signature=946143a94d643c86c128a4cd832e543972c45f109d4a29a2868082cbe8250762&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
