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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRDVON3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD9L1omh6%2F%2B4nVUUq2qcfxe%2FsWAf%2B3fWppIisPI0grjDgIgOnqCsoNe%2BV92t7s%2BusCIXr1ZXWxI7Ssz0sq4VF2OlSAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEudeGVjOowwh6HyByrcA1PUX0pCJI80pZFP17%2FStyVxgHSpyKh0rLDgmlkAgfN01FX3bLpPVS1BAV3IF51W%2B0N1McxtqSXoWrIo64LTb53R97IIykgorTrM9F2zyZuqZ%2FIut8vcMxCQxZRwMndYjHbuoaXVGfNynCUOu%2FATIHV%2BmZ5BKZML9Dt5zsjstMEYt8ERpVqgGkQaTVn4W4046PBm6wiczPWd1fK7KZPJcHGs%2BRYIrCd6fM%2FO7mfZWv9Z7DJ0dJPV6lToClAIePt6KklIvX2JZASHJTadCkxeoSIu9gAOJWuhhLC4k%2BRiJbYbkH66udK5mYrTxcBcH0pkT8KbRcBddU9WMDGrGh1iNfS2eAVBGAXBoXu1aBAwpE8RihHVRRphU8SS1wvw2dD8tgxYVtFRIGlJNTkt1f2o6L4kaH6zDvvM2f%2FZqyjquk1ElzIQQCRYOrNgOV74VINipzPrhuLdmiWmo7b1ZES2fnAcjexahwhmQLTZvZgYfCMcjgBAdJMZ0U63mcpRDMERQjUxwit4w574KGtf%2B9mLepl2lLljysZX24u87zzeuzsehjZuZyaEdtC74xdQaDdAukMkQ%2BUBLIbj0waa6odMbikOO%2BNeXkBbhVan5Ujdb%2FZnoHX3ZXciLaMYBrmDMMXskcEGOqUBHNDHVTRA9xYx%2B4wzSex8SUUie050p3h77cEWMLpwz4aNdd%2BKvx69US7sPra%2F0oIHY4rXN7UYk3uz1pVfves2WUaF0aHPvxRpD7JL12x%2BWcRr9YkdU%2F3e%2BQ6RUMzQfVONidiqijelJPxMn6GSXznNg3oIu0nr8rJNZ6iVhZFrBL04Kl%2FrFQ4u0EMvmGbnsmNiLoHga2Lkvq9cJF2JwheOnbHs3EAW&X-Amz-Signature=438a2185e95d61aae8bb87f2debf15ef23c0cec969ce930f88784f427b279477&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRDVON3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD9L1omh6%2F%2B4nVUUq2qcfxe%2FsWAf%2B3fWppIisPI0grjDgIgOnqCsoNe%2BV92t7s%2BusCIXr1ZXWxI7Ssz0sq4VF2OlSAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEudeGVjOowwh6HyByrcA1PUX0pCJI80pZFP17%2FStyVxgHSpyKh0rLDgmlkAgfN01FX3bLpPVS1BAV3IF51W%2B0N1McxtqSXoWrIo64LTb53R97IIykgorTrM9F2zyZuqZ%2FIut8vcMxCQxZRwMndYjHbuoaXVGfNynCUOu%2FATIHV%2BmZ5BKZML9Dt5zsjstMEYt8ERpVqgGkQaTVn4W4046PBm6wiczPWd1fK7KZPJcHGs%2BRYIrCd6fM%2FO7mfZWv9Z7DJ0dJPV6lToClAIePt6KklIvX2JZASHJTadCkxeoSIu9gAOJWuhhLC4k%2BRiJbYbkH66udK5mYrTxcBcH0pkT8KbRcBddU9WMDGrGh1iNfS2eAVBGAXBoXu1aBAwpE8RihHVRRphU8SS1wvw2dD8tgxYVtFRIGlJNTkt1f2o6L4kaH6zDvvM2f%2FZqyjquk1ElzIQQCRYOrNgOV74VINipzPrhuLdmiWmo7b1ZES2fnAcjexahwhmQLTZvZgYfCMcjgBAdJMZ0U63mcpRDMERQjUxwit4w574KGtf%2B9mLepl2lLljysZX24u87zzeuzsehjZuZyaEdtC74xdQaDdAukMkQ%2BUBLIbj0waa6odMbikOO%2BNeXkBbhVan5Ujdb%2FZnoHX3ZXciLaMYBrmDMMXskcEGOqUBHNDHVTRA9xYx%2B4wzSex8SUUie050p3h77cEWMLpwz4aNdd%2BKvx69US7sPra%2F0oIHY4rXN7UYk3uz1pVfves2WUaF0aHPvxRpD7JL12x%2BWcRr9YkdU%2F3e%2BQ6RUMzQfVONidiqijelJPxMn6GSXznNg3oIu0nr8rJNZ6iVhZFrBL04Kl%2FrFQ4u0EMvmGbnsmNiLoHga2Lkvq9cJF2JwheOnbHs3EAW&X-Amz-Signature=3f24c2180538aa41ac887e5c249b535de7a5e6c30c8c32ad62b3db214670a2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRDVON3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD9L1omh6%2F%2B4nVUUq2qcfxe%2FsWAf%2B3fWppIisPI0grjDgIgOnqCsoNe%2BV92t7s%2BusCIXr1ZXWxI7Ssz0sq4VF2OlSAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEudeGVjOowwh6HyByrcA1PUX0pCJI80pZFP17%2FStyVxgHSpyKh0rLDgmlkAgfN01FX3bLpPVS1BAV3IF51W%2B0N1McxtqSXoWrIo64LTb53R97IIykgorTrM9F2zyZuqZ%2FIut8vcMxCQxZRwMndYjHbuoaXVGfNynCUOu%2FATIHV%2BmZ5BKZML9Dt5zsjstMEYt8ERpVqgGkQaTVn4W4046PBm6wiczPWd1fK7KZPJcHGs%2BRYIrCd6fM%2FO7mfZWv9Z7DJ0dJPV6lToClAIePt6KklIvX2JZASHJTadCkxeoSIu9gAOJWuhhLC4k%2BRiJbYbkH66udK5mYrTxcBcH0pkT8KbRcBddU9WMDGrGh1iNfS2eAVBGAXBoXu1aBAwpE8RihHVRRphU8SS1wvw2dD8tgxYVtFRIGlJNTkt1f2o6L4kaH6zDvvM2f%2FZqyjquk1ElzIQQCRYOrNgOV74VINipzPrhuLdmiWmo7b1ZES2fnAcjexahwhmQLTZvZgYfCMcjgBAdJMZ0U63mcpRDMERQjUxwit4w574KGtf%2B9mLepl2lLljysZX24u87zzeuzsehjZuZyaEdtC74xdQaDdAukMkQ%2BUBLIbj0waa6odMbikOO%2BNeXkBbhVan5Ujdb%2FZnoHX3ZXciLaMYBrmDMMXskcEGOqUBHNDHVTRA9xYx%2B4wzSex8SUUie050p3h77cEWMLpwz4aNdd%2BKvx69US7sPra%2F0oIHY4rXN7UYk3uz1pVfves2WUaF0aHPvxRpD7JL12x%2BWcRr9YkdU%2F3e%2BQ6RUMzQfVONidiqijelJPxMn6GSXznNg3oIu0nr8rJNZ6iVhZFrBL04Kl%2FrFQ4u0EMvmGbnsmNiLoHga2Lkvq9cJF2JwheOnbHs3EAW&X-Amz-Signature=41e72d957667d5db89cd84c2c1a861be49dff150a214d3d38894288789e466ab&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRDVON3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD9L1omh6%2F%2B4nVUUq2qcfxe%2FsWAf%2B3fWppIisPI0grjDgIgOnqCsoNe%2BV92t7s%2BusCIXr1ZXWxI7Ssz0sq4VF2OlSAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEudeGVjOowwh6HyByrcA1PUX0pCJI80pZFP17%2FStyVxgHSpyKh0rLDgmlkAgfN01FX3bLpPVS1BAV3IF51W%2B0N1McxtqSXoWrIo64LTb53R97IIykgorTrM9F2zyZuqZ%2FIut8vcMxCQxZRwMndYjHbuoaXVGfNynCUOu%2FATIHV%2BmZ5BKZML9Dt5zsjstMEYt8ERpVqgGkQaTVn4W4046PBm6wiczPWd1fK7KZPJcHGs%2BRYIrCd6fM%2FO7mfZWv9Z7DJ0dJPV6lToClAIePt6KklIvX2JZASHJTadCkxeoSIu9gAOJWuhhLC4k%2BRiJbYbkH66udK5mYrTxcBcH0pkT8KbRcBddU9WMDGrGh1iNfS2eAVBGAXBoXu1aBAwpE8RihHVRRphU8SS1wvw2dD8tgxYVtFRIGlJNTkt1f2o6L4kaH6zDvvM2f%2FZqyjquk1ElzIQQCRYOrNgOV74VINipzPrhuLdmiWmo7b1ZES2fnAcjexahwhmQLTZvZgYfCMcjgBAdJMZ0U63mcpRDMERQjUxwit4w574KGtf%2B9mLepl2lLljysZX24u87zzeuzsehjZuZyaEdtC74xdQaDdAukMkQ%2BUBLIbj0waa6odMbikOO%2BNeXkBbhVan5Ujdb%2FZnoHX3ZXciLaMYBrmDMMXskcEGOqUBHNDHVTRA9xYx%2B4wzSex8SUUie050p3h77cEWMLpwz4aNdd%2BKvx69US7sPra%2F0oIHY4rXN7UYk3uz1pVfves2WUaF0aHPvxRpD7JL12x%2BWcRr9YkdU%2F3e%2BQ6RUMzQfVONidiqijelJPxMn6GSXznNg3oIu0nr8rJNZ6iVhZFrBL04Kl%2FrFQ4u0EMvmGbnsmNiLoHga2Lkvq9cJF2JwheOnbHs3EAW&X-Amz-Signature=a91e826f0c06eb63fb49171cd7c17a9c51fb660541af7426d43599adde22c90e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRDVON3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD9L1omh6%2F%2B4nVUUq2qcfxe%2FsWAf%2B3fWppIisPI0grjDgIgOnqCsoNe%2BV92t7s%2BusCIXr1ZXWxI7Ssz0sq4VF2OlSAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEudeGVjOowwh6HyByrcA1PUX0pCJI80pZFP17%2FStyVxgHSpyKh0rLDgmlkAgfN01FX3bLpPVS1BAV3IF51W%2B0N1McxtqSXoWrIo64LTb53R97IIykgorTrM9F2zyZuqZ%2FIut8vcMxCQxZRwMndYjHbuoaXVGfNynCUOu%2FATIHV%2BmZ5BKZML9Dt5zsjstMEYt8ERpVqgGkQaTVn4W4046PBm6wiczPWd1fK7KZPJcHGs%2BRYIrCd6fM%2FO7mfZWv9Z7DJ0dJPV6lToClAIePt6KklIvX2JZASHJTadCkxeoSIu9gAOJWuhhLC4k%2BRiJbYbkH66udK5mYrTxcBcH0pkT8KbRcBddU9WMDGrGh1iNfS2eAVBGAXBoXu1aBAwpE8RihHVRRphU8SS1wvw2dD8tgxYVtFRIGlJNTkt1f2o6L4kaH6zDvvM2f%2FZqyjquk1ElzIQQCRYOrNgOV74VINipzPrhuLdmiWmo7b1ZES2fnAcjexahwhmQLTZvZgYfCMcjgBAdJMZ0U63mcpRDMERQjUxwit4w574KGtf%2B9mLepl2lLljysZX24u87zzeuzsehjZuZyaEdtC74xdQaDdAukMkQ%2BUBLIbj0waa6odMbikOO%2BNeXkBbhVan5Ujdb%2FZnoHX3ZXciLaMYBrmDMMXskcEGOqUBHNDHVTRA9xYx%2B4wzSex8SUUie050p3h77cEWMLpwz4aNdd%2BKvx69US7sPra%2F0oIHY4rXN7UYk3uz1pVfves2WUaF0aHPvxRpD7JL12x%2BWcRr9YkdU%2F3e%2BQ6RUMzQfVONidiqijelJPxMn6GSXznNg3oIu0nr8rJNZ6iVhZFrBL04Kl%2FrFQ4u0EMvmGbnsmNiLoHga2Lkvq9cJF2JwheOnbHs3EAW&X-Amz-Signature=5e152eefb0478c81dc83a408c10bba3b273b97306fa0f63d465c1253bf937a47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRDVON3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD9L1omh6%2F%2B4nVUUq2qcfxe%2FsWAf%2B3fWppIisPI0grjDgIgOnqCsoNe%2BV92t7s%2BusCIXr1ZXWxI7Ssz0sq4VF2OlSAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEudeGVjOowwh6HyByrcA1PUX0pCJI80pZFP17%2FStyVxgHSpyKh0rLDgmlkAgfN01FX3bLpPVS1BAV3IF51W%2B0N1McxtqSXoWrIo64LTb53R97IIykgorTrM9F2zyZuqZ%2FIut8vcMxCQxZRwMndYjHbuoaXVGfNynCUOu%2FATIHV%2BmZ5BKZML9Dt5zsjstMEYt8ERpVqgGkQaTVn4W4046PBm6wiczPWd1fK7KZPJcHGs%2BRYIrCd6fM%2FO7mfZWv9Z7DJ0dJPV6lToClAIePt6KklIvX2JZASHJTadCkxeoSIu9gAOJWuhhLC4k%2BRiJbYbkH66udK5mYrTxcBcH0pkT8KbRcBddU9WMDGrGh1iNfS2eAVBGAXBoXu1aBAwpE8RihHVRRphU8SS1wvw2dD8tgxYVtFRIGlJNTkt1f2o6L4kaH6zDvvM2f%2FZqyjquk1ElzIQQCRYOrNgOV74VINipzPrhuLdmiWmo7b1ZES2fnAcjexahwhmQLTZvZgYfCMcjgBAdJMZ0U63mcpRDMERQjUxwit4w574KGtf%2B9mLepl2lLljysZX24u87zzeuzsehjZuZyaEdtC74xdQaDdAukMkQ%2BUBLIbj0waa6odMbikOO%2BNeXkBbhVan5Ujdb%2FZnoHX3ZXciLaMYBrmDMMXskcEGOqUBHNDHVTRA9xYx%2B4wzSex8SUUie050p3h77cEWMLpwz4aNdd%2BKvx69US7sPra%2F0oIHY4rXN7UYk3uz1pVfves2WUaF0aHPvxRpD7JL12x%2BWcRr9YkdU%2F3e%2BQ6RUMzQfVONidiqijelJPxMn6GSXznNg3oIu0nr8rJNZ6iVhZFrBL04Kl%2FrFQ4u0EMvmGbnsmNiLoHga2Lkvq9cJF2JwheOnbHs3EAW&X-Amz-Signature=f11c74e42e82d4c0817aee37e82738a00a53ca917231b0152039224b965fe9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRDVON3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD9L1omh6%2F%2B4nVUUq2qcfxe%2FsWAf%2B3fWppIisPI0grjDgIgOnqCsoNe%2BV92t7s%2BusCIXr1ZXWxI7Ssz0sq4VF2OlSAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEudeGVjOowwh6HyByrcA1PUX0pCJI80pZFP17%2FStyVxgHSpyKh0rLDgmlkAgfN01FX3bLpPVS1BAV3IF51W%2B0N1McxtqSXoWrIo64LTb53R97IIykgorTrM9F2zyZuqZ%2FIut8vcMxCQxZRwMndYjHbuoaXVGfNynCUOu%2FATIHV%2BmZ5BKZML9Dt5zsjstMEYt8ERpVqgGkQaTVn4W4046PBm6wiczPWd1fK7KZPJcHGs%2BRYIrCd6fM%2FO7mfZWv9Z7DJ0dJPV6lToClAIePt6KklIvX2JZASHJTadCkxeoSIu9gAOJWuhhLC4k%2BRiJbYbkH66udK5mYrTxcBcH0pkT8KbRcBddU9WMDGrGh1iNfS2eAVBGAXBoXu1aBAwpE8RihHVRRphU8SS1wvw2dD8tgxYVtFRIGlJNTkt1f2o6L4kaH6zDvvM2f%2FZqyjquk1ElzIQQCRYOrNgOV74VINipzPrhuLdmiWmo7b1ZES2fnAcjexahwhmQLTZvZgYfCMcjgBAdJMZ0U63mcpRDMERQjUxwit4w574KGtf%2B9mLepl2lLljysZX24u87zzeuzsehjZuZyaEdtC74xdQaDdAukMkQ%2BUBLIbj0waa6odMbikOO%2BNeXkBbhVan5Ujdb%2FZnoHX3ZXciLaMYBrmDMMXskcEGOqUBHNDHVTRA9xYx%2B4wzSex8SUUie050p3h77cEWMLpwz4aNdd%2BKvx69US7sPra%2F0oIHY4rXN7UYk3uz1pVfves2WUaF0aHPvxRpD7JL12x%2BWcRr9YkdU%2F3e%2BQ6RUMzQfVONidiqijelJPxMn6GSXznNg3oIu0nr8rJNZ6iVhZFrBL04Kl%2FrFQ4u0EMvmGbnsmNiLoHga2Lkvq9cJF2JwheOnbHs3EAW&X-Amz-Signature=1c9b6c4615d38bad56fbe1bc6fe8a40bb2b39203b3ecc626b26b10cf09f52184&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRDVON3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD9L1omh6%2F%2B4nVUUq2qcfxe%2FsWAf%2B3fWppIisPI0grjDgIgOnqCsoNe%2BV92t7s%2BusCIXr1ZXWxI7Ssz0sq4VF2OlSAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEudeGVjOowwh6HyByrcA1PUX0pCJI80pZFP17%2FStyVxgHSpyKh0rLDgmlkAgfN01FX3bLpPVS1BAV3IF51W%2B0N1McxtqSXoWrIo64LTb53R97IIykgorTrM9F2zyZuqZ%2FIut8vcMxCQxZRwMndYjHbuoaXVGfNynCUOu%2FATIHV%2BmZ5BKZML9Dt5zsjstMEYt8ERpVqgGkQaTVn4W4046PBm6wiczPWd1fK7KZPJcHGs%2BRYIrCd6fM%2FO7mfZWv9Z7DJ0dJPV6lToClAIePt6KklIvX2JZASHJTadCkxeoSIu9gAOJWuhhLC4k%2BRiJbYbkH66udK5mYrTxcBcH0pkT8KbRcBddU9WMDGrGh1iNfS2eAVBGAXBoXu1aBAwpE8RihHVRRphU8SS1wvw2dD8tgxYVtFRIGlJNTkt1f2o6L4kaH6zDvvM2f%2FZqyjquk1ElzIQQCRYOrNgOV74VINipzPrhuLdmiWmo7b1ZES2fnAcjexahwhmQLTZvZgYfCMcjgBAdJMZ0U63mcpRDMERQjUxwit4w574KGtf%2B9mLepl2lLljysZX24u87zzeuzsehjZuZyaEdtC74xdQaDdAukMkQ%2BUBLIbj0waa6odMbikOO%2BNeXkBbhVan5Ujdb%2FZnoHX3ZXciLaMYBrmDMMXskcEGOqUBHNDHVTRA9xYx%2B4wzSex8SUUie050p3h77cEWMLpwz4aNdd%2BKvx69US7sPra%2F0oIHY4rXN7UYk3uz1pVfves2WUaF0aHPvxRpD7JL12x%2BWcRr9YkdU%2F3e%2BQ6RUMzQfVONidiqijelJPxMn6GSXznNg3oIu0nr8rJNZ6iVhZFrBL04Kl%2FrFQ4u0EMvmGbnsmNiLoHga2Lkvq9cJF2JwheOnbHs3EAW&X-Amz-Signature=027acb4960500ca68cea0a9aad21051691f8fef8f9aa61e86aa3eba4b505f8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
