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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQEG3S6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAWlFqBxv9i4tT0PMnh1evW0ms4e3Y61FCHTBvIKJqyMAiEA86JKnOCJjcsCj3jFl6eur%2F%2BgEEB0nTS3ecr%2F%2BSWhM7cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKEFwi4sY3DRREZWESrcA%2Br6b0nrjp%2BhgBmLixnn%2BZsimi%2BkH2A2O9VueAIKfk9zGuVeKHinYY79VZsjGTagx4nxK6o2QX85Fa2vhOD9GuVy6UPW3CJmRRXTIOe5rTGhhVLiK2DQsN6rR30Ll3%2FGl2UaosifnTLABJpZw%2F%2F21fZYKCgHx85jP5QszM2eoZPei69dCGkvdyYbrCjpOPMBHt02Xm%2FukNRg0vDBOgpj7OT8Nr0sdrSg3ka2%2F%2FjPjN7zZuYi3nTjZ18xkdTBP7gp1xiHLFLW6TNK%2Fj99xf1Cj%2BDvOmP%2Bb3xUqPA43bXKAXSc5lX44s%2Fn71%2FqFoES%2FeojwA1jX%2FVI3H1BD7UCPNN0vit7XMFBw7AszYE218d2m%2FP354eIjC0K3MxNUYA83laXYcuoYSaATTtffSBepzlyKFaVi%2Fk13TGpZtm%2BczmK8f2m%2F3fjH0IlOfvDnqsQS1Z1Y5NxNJqRKjtSzq%2BHnD8AB1oKGsb7SY9mbcVBRXAEn8lNKftrGx3jyUltObremLC0KuWbRHcWdtTb19z5XCBC6sftoGYHmgw%2Fxf4y1RyrdGvXK1ALVu5rFLwqak%2Fs3JEDSgnh9E91BEJp9uhOp358NPH6XeckDFWtJ%2FrtfabfHIE23ZdknHYxQmzUngtaMP3H4cMGOqUBmOO4WHfTaBvANa0m6HzR5j%2BoPe%2BaWf2EFvJX7jUROOE3YBzm0COc3PfASOnWfzp1RltEH8OshSjwd5Ldi1r%2FsnMTBUMQOFnZyLWwHbp9YgaosPCmOkhbnC2CKklM2s%2FRRxwqPZNAlckTIAD%2BvnI60fMI9wVgmRkcZa5E9ceLtx5ajaAJlKhrNsuhkDgYDhlPjilWhn%2FPmcqvbiOsj6I1MptXwU9J&X-Amz-Signature=34a55a553b9c0cb4482a606db3579195a86434ef3fff0ca0668f3d89cdc75e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQEG3S6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAWlFqBxv9i4tT0PMnh1evW0ms4e3Y61FCHTBvIKJqyMAiEA86JKnOCJjcsCj3jFl6eur%2F%2BgEEB0nTS3ecr%2F%2BSWhM7cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKEFwi4sY3DRREZWESrcA%2Br6b0nrjp%2BhgBmLixnn%2BZsimi%2BkH2A2O9VueAIKfk9zGuVeKHinYY79VZsjGTagx4nxK6o2QX85Fa2vhOD9GuVy6UPW3CJmRRXTIOe5rTGhhVLiK2DQsN6rR30Ll3%2FGl2UaosifnTLABJpZw%2F%2F21fZYKCgHx85jP5QszM2eoZPei69dCGkvdyYbrCjpOPMBHt02Xm%2FukNRg0vDBOgpj7OT8Nr0sdrSg3ka2%2F%2FjPjN7zZuYi3nTjZ18xkdTBP7gp1xiHLFLW6TNK%2Fj99xf1Cj%2BDvOmP%2Bb3xUqPA43bXKAXSc5lX44s%2Fn71%2FqFoES%2FeojwA1jX%2FVI3H1BD7UCPNN0vit7XMFBw7AszYE218d2m%2FP354eIjC0K3MxNUYA83laXYcuoYSaATTtffSBepzlyKFaVi%2Fk13TGpZtm%2BczmK8f2m%2F3fjH0IlOfvDnqsQS1Z1Y5NxNJqRKjtSzq%2BHnD8AB1oKGsb7SY9mbcVBRXAEn8lNKftrGx3jyUltObremLC0KuWbRHcWdtTb19z5XCBC6sftoGYHmgw%2Fxf4y1RyrdGvXK1ALVu5rFLwqak%2Fs3JEDSgnh9E91BEJp9uhOp358NPH6XeckDFWtJ%2FrtfabfHIE23ZdknHYxQmzUngtaMP3H4cMGOqUBmOO4WHfTaBvANa0m6HzR5j%2BoPe%2BaWf2EFvJX7jUROOE3YBzm0COc3PfASOnWfzp1RltEH8OshSjwd5Ldi1r%2FsnMTBUMQOFnZyLWwHbp9YgaosPCmOkhbnC2CKklM2s%2FRRxwqPZNAlckTIAD%2BvnI60fMI9wVgmRkcZa5E9ceLtx5ajaAJlKhrNsuhkDgYDhlPjilWhn%2FPmcqvbiOsj6I1MptXwU9J&X-Amz-Signature=0138f8015989f622496394ca2f656dc651f66b98112b91d78e1e928d08b5b2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQEG3S6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAWlFqBxv9i4tT0PMnh1evW0ms4e3Y61FCHTBvIKJqyMAiEA86JKnOCJjcsCj3jFl6eur%2F%2BgEEB0nTS3ecr%2F%2BSWhM7cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKEFwi4sY3DRREZWESrcA%2Br6b0nrjp%2BhgBmLixnn%2BZsimi%2BkH2A2O9VueAIKfk9zGuVeKHinYY79VZsjGTagx4nxK6o2QX85Fa2vhOD9GuVy6UPW3CJmRRXTIOe5rTGhhVLiK2DQsN6rR30Ll3%2FGl2UaosifnTLABJpZw%2F%2F21fZYKCgHx85jP5QszM2eoZPei69dCGkvdyYbrCjpOPMBHt02Xm%2FukNRg0vDBOgpj7OT8Nr0sdrSg3ka2%2F%2FjPjN7zZuYi3nTjZ18xkdTBP7gp1xiHLFLW6TNK%2Fj99xf1Cj%2BDvOmP%2Bb3xUqPA43bXKAXSc5lX44s%2Fn71%2FqFoES%2FeojwA1jX%2FVI3H1BD7UCPNN0vit7XMFBw7AszYE218d2m%2FP354eIjC0K3MxNUYA83laXYcuoYSaATTtffSBepzlyKFaVi%2Fk13TGpZtm%2BczmK8f2m%2F3fjH0IlOfvDnqsQS1Z1Y5NxNJqRKjtSzq%2BHnD8AB1oKGsb7SY9mbcVBRXAEn8lNKftrGx3jyUltObremLC0KuWbRHcWdtTb19z5XCBC6sftoGYHmgw%2Fxf4y1RyrdGvXK1ALVu5rFLwqak%2Fs3JEDSgnh9E91BEJp9uhOp358NPH6XeckDFWtJ%2FrtfabfHIE23ZdknHYxQmzUngtaMP3H4cMGOqUBmOO4WHfTaBvANa0m6HzR5j%2BoPe%2BaWf2EFvJX7jUROOE3YBzm0COc3PfASOnWfzp1RltEH8OshSjwd5Ldi1r%2FsnMTBUMQOFnZyLWwHbp9YgaosPCmOkhbnC2CKklM2s%2FRRxwqPZNAlckTIAD%2BvnI60fMI9wVgmRkcZa5E9ceLtx5ajaAJlKhrNsuhkDgYDhlPjilWhn%2FPmcqvbiOsj6I1MptXwU9J&X-Amz-Signature=63ebfb9547a669db2fc3c787ee2358decc2fd4c660362333dfea376138575d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQEG3S6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAWlFqBxv9i4tT0PMnh1evW0ms4e3Y61FCHTBvIKJqyMAiEA86JKnOCJjcsCj3jFl6eur%2F%2BgEEB0nTS3ecr%2F%2BSWhM7cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKEFwi4sY3DRREZWESrcA%2Br6b0nrjp%2BhgBmLixnn%2BZsimi%2BkH2A2O9VueAIKfk9zGuVeKHinYY79VZsjGTagx4nxK6o2QX85Fa2vhOD9GuVy6UPW3CJmRRXTIOe5rTGhhVLiK2DQsN6rR30Ll3%2FGl2UaosifnTLABJpZw%2F%2F21fZYKCgHx85jP5QszM2eoZPei69dCGkvdyYbrCjpOPMBHt02Xm%2FukNRg0vDBOgpj7OT8Nr0sdrSg3ka2%2F%2FjPjN7zZuYi3nTjZ18xkdTBP7gp1xiHLFLW6TNK%2Fj99xf1Cj%2BDvOmP%2Bb3xUqPA43bXKAXSc5lX44s%2Fn71%2FqFoES%2FeojwA1jX%2FVI3H1BD7UCPNN0vit7XMFBw7AszYE218d2m%2FP354eIjC0K3MxNUYA83laXYcuoYSaATTtffSBepzlyKFaVi%2Fk13TGpZtm%2BczmK8f2m%2F3fjH0IlOfvDnqsQS1Z1Y5NxNJqRKjtSzq%2BHnD8AB1oKGsb7SY9mbcVBRXAEn8lNKftrGx3jyUltObremLC0KuWbRHcWdtTb19z5XCBC6sftoGYHmgw%2Fxf4y1RyrdGvXK1ALVu5rFLwqak%2Fs3JEDSgnh9E91BEJp9uhOp358NPH6XeckDFWtJ%2FrtfabfHIE23ZdknHYxQmzUngtaMP3H4cMGOqUBmOO4WHfTaBvANa0m6HzR5j%2BoPe%2BaWf2EFvJX7jUROOE3YBzm0COc3PfASOnWfzp1RltEH8OshSjwd5Ldi1r%2FsnMTBUMQOFnZyLWwHbp9YgaosPCmOkhbnC2CKklM2s%2FRRxwqPZNAlckTIAD%2BvnI60fMI9wVgmRkcZa5E9ceLtx5ajaAJlKhrNsuhkDgYDhlPjilWhn%2FPmcqvbiOsj6I1MptXwU9J&X-Amz-Signature=8f0c2e3bbdd96a258dfa9f5781798f458b810c5c90ddd98c72eba2401619fb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQEG3S6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAWlFqBxv9i4tT0PMnh1evW0ms4e3Y61FCHTBvIKJqyMAiEA86JKnOCJjcsCj3jFl6eur%2F%2BgEEB0nTS3ecr%2F%2BSWhM7cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKEFwi4sY3DRREZWESrcA%2Br6b0nrjp%2BhgBmLixnn%2BZsimi%2BkH2A2O9VueAIKfk9zGuVeKHinYY79VZsjGTagx4nxK6o2QX85Fa2vhOD9GuVy6UPW3CJmRRXTIOe5rTGhhVLiK2DQsN6rR30Ll3%2FGl2UaosifnTLABJpZw%2F%2F21fZYKCgHx85jP5QszM2eoZPei69dCGkvdyYbrCjpOPMBHt02Xm%2FukNRg0vDBOgpj7OT8Nr0sdrSg3ka2%2F%2FjPjN7zZuYi3nTjZ18xkdTBP7gp1xiHLFLW6TNK%2Fj99xf1Cj%2BDvOmP%2Bb3xUqPA43bXKAXSc5lX44s%2Fn71%2FqFoES%2FeojwA1jX%2FVI3H1BD7UCPNN0vit7XMFBw7AszYE218d2m%2FP354eIjC0K3MxNUYA83laXYcuoYSaATTtffSBepzlyKFaVi%2Fk13TGpZtm%2BczmK8f2m%2F3fjH0IlOfvDnqsQS1Z1Y5NxNJqRKjtSzq%2BHnD8AB1oKGsb7SY9mbcVBRXAEn8lNKftrGx3jyUltObremLC0KuWbRHcWdtTb19z5XCBC6sftoGYHmgw%2Fxf4y1RyrdGvXK1ALVu5rFLwqak%2Fs3JEDSgnh9E91BEJp9uhOp358NPH6XeckDFWtJ%2FrtfabfHIE23ZdknHYxQmzUngtaMP3H4cMGOqUBmOO4WHfTaBvANa0m6HzR5j%2BoPe%2BaWf2EFvJX7jUROOE3YBzm0COc3PfASOnWfzp1RltEH8OshSjwd5Ldi1r%2FsnMTBUMQOFnZyLWwHbp9YgaosPCmOkhbnC2CKklM2s%2FRRxwqPZNAlckTIAD%2BvnI60fMI9wVgmRkcZa5E9ceLtx5ajaAJlKhrNsuhkDgYDhlPjilWhn%2FPmcqvbiOsj6I1MptXwU9J&X-Amz-Signature=48812ae34799aa6bdba69d1a5e83eb7bc06eee18299d37b63dae1fdf3fe81ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQEG3S6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAWlFqBxv9i4tT0PMnh1evW0ms4e3Y61FCHTBvIKJqyMAiEA86JKnOCJjcsCj3jFl6eur%2F%2BgEEB0nTS3ecr%2F%2BSWhM7cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKEFwi4sY3DRREZWESrcA%2Br6b0nrjp%2BhgBmLixnn%2BZsimi%2BkH2A2O9VueAIKfk9zGuVeKHinYY79VZsjGTagx4nxK6o2QX85Fa2vhOD9GuVy6UPW3CJmRRXTIOe5rTGhhVLiK2DQsN6rR30Ll3%2FGl2UaosifnTLABJpZw%2F%2F21fZYKCgHx85jP5QszM2eoZPei69dCGkvdyYbrCjpOPMBHt02Xm%2FukNRg0vDBOgpj7OT8Nr0sdrSg3ka2%2F%2FjPjN7zZuYi3nTjZ18xkdTBP7gp1xiHLFLW6TNK%2Fj99xf1Cj%2BDvOmP%2Bb3xUqPA43bXKAXSc5lX44s%2Fn71%2FqFoES%2FeojwA1jX%2FVI3H1BD7UCPNN0vit7XMFBw7AszYE218d2m%2FP354eIjC0K3MxNUYA83laXYcuoYSaATTtffSBepzlyKFaVi%2Fk13TGpZtm%2BczmK8f2m%2F3fjH0IlOfvDnqsQS1Z1Y5NxNJqRKjtSzq%2BHnD8AB1oKGsb7SY9mbcVBRXAEn8lNKftrGx3jyUltObremLC0KuWbRHcWdtTb19z5XCBC6sftoGYHmgw%2Fxf4y1RyrdGvXK1ALVu5rFLwqak%2Fs3JEDSgnh9E91BEJp9uhOp358NPH6XeckDFWtJ%2FrtfabfHIE23ZdknHYxQmzUngtaMP3H4cMGOqUBmOO4WHfTaBvANa0m6HzR5j%2BoPe%2BaWf2EFvJX7jUROOE3YBzm0COc3PfASOnWfzp1RltEH8OshSjwd5Ldi1r%2FsnMTBUMQOFnZyLWwHbp9YgaosPCmOkhbnC2CKklM2s%2FRRxwqPZNAlckTIAD%2BvnI60fMI9wVgmRkcZa5E9ceLtx5ajaAJlKhrNsuhkDgYDhlPjilWhn%2FPmcqvbiOsj6I1MptXwU9J&X-Amz-Signature=b3211195b53cbc77b8473db66ff3673352fb26a1f37381ee9d3db72a4da71fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQEG3S6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAWlFqBxv9i4tT0PMnh1evW0ms4e3Y61FCHTBvIKJqyMAiEA86JKnOCJjcsCj3jFl6eur%2F%2BgEEB0nTS3ecr%2F%2BSWhM7cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKEFwi4sY3DRREZWESrcA%2Br6b0nrjp%2BhgBmLixnn%2BZsimi%2BkH2A2O9VueAIKfk9zGuVeKHinYY79VZsjGTagx4nxK6o2QX85Fa2vhOD9GuVy6UPW3CJmRRXTIOe5rTGhhVLiK2DQsN6rR30Ll3%2FGl2UaosifnTLABJpZw%2F%2F21fZYKCgHx85jP5QszM2eoZPei69dCGkvdyYbrCjpOPMBHt02Xm%2FukNRg0vDBOgpj7OT8Nr0sdrSg3ka2%2F%2FjPjN7zZuYi3nTjZ18xkdTBP7gp1xiHLFLW6TNK%2Fj99xf1Cj%2BDvOmP%2Bb3xUqPA43bXKAXSc5lX44s%2Fn71%2FqFoES%2FeojwA1jX%2FVI3H1BD7UCPNN0vit7XMFBw7AszYE218d2m%2FP354eIjC0K3MxNUYA83laXYcuoYSaATTtffSBepzlyKFaVi%2Fk13TGpZtm%2BczmK8f2m%2F3fjH0IlOfvDnqsQS1Z1Y5NxNJqRKjtSzq%2BHnD8AB1oKGsb7SY9mbcVBRXAEn8lNKftrGx3jyUltObremLC0KuWbRHcWdtTb19z5XCBC6sftoGYHmgw%2Fxf4y1RyrdGvXK1ALVu5rFLwqak%2Fs3JEDSgnh9E91BEJp9uhOp358NPH6XeckDFWtJ%2FrtfabfHIE23ZdknHYxQmzUngtaMP3H4cMGOqUBmOO4WHfTaBvANa0m6HzR5j%2BoPe%2BaWf2EFvJX7jUROOE3YBzm0COc3PfASOnWfzp1RltEH8OshSjwd5Ldi1r%2FsnMTBUMQOFnZyLWwHbp9YgaosPCmOkhbnC2CKklM2s%2FRRxwqPZNAlckTIAD%2BvnI60fMI9wVgmRkcZa5E9ceLtx5ajaAJlKhrNsuhkDgYDhlPjilWhn%2FPmcqvbiOsj6I1MptXwU9J&X-Amz-Signature=6f671672f40cf2c1e0c1568a981615f8bd11a4b982e4ea7edba550c8d392e3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQEG3S6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAWlFqBxv9i4tT0PMnh1evW0ms4e3Y61FCHTBvIKJqyMAiEA86JKnOCJjcsCj3jFl6eur%2F%2BgEEB0nTS3ecr%2F%2BSWhM7cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKEFwi4sY3DRREZWESrcA%2Br6b0nrjp%2BhgBmLixnn%2BZsimi%2BkH2A2O9VueAIKfk9zGuVeKHinYY79VZsjGTagx4nxK6o2QX85Fa2vhOD9GuVy6UPW3CJmRRXTIOe5rTGhhVLiK2DQsN6rR30Ll3%2FGl2UaosifnTLABJpZw%2F%2F21fZYKCgHx85jP5QszM2eoZPei69dCGkvdyYbrCjpOPMBHt02Xm%2FukNRg0vDBOgpj7OT8Nr0sdrSg3ka2%2F%2FjPjN7zZuYi3nTjZ18xkdTBP7gp1xiHLFLW6TNK%2Fj99xf1Cj%2BDvOmP%2Bb3xUqPA43bXKAXSc5lX44s%2Fn71%2FqFoES%2FeojwA1jX%2FVI3H1BD7UCPNN0vit7XMFBw7AszYE218d2m%2FP354eIjC0K3MxNUYA83laXYcuoYSaATTtffSBepzlyKFaVi%2Fk13TGpZtm%2BczmK8f2m%2F3fjH0IlOfvDnqsQS1Z1Y5NxNJqRKjtSzq%2BHnD8AB1oKGsb7SY9mbcVBRXAEn8lNKftrGx3jyUltObremLC0KuWbRHcWdtTb19z5XCBC6sftoGYHmgw%2Fxf4y1RyrdGvXK1ALVu5rFLwqak%2Fs3JEDSgnh9E91BEJp9uhOp358NPH6XeckDFWtJ%2FrtfabfHIE23ZdknHYxQmzUngtaMP3H4cMGOqUBmOO4WHfTaBvANa0m6HzR5j%2BoPe%2BaWf2EFvJX7jUROOE3YBzm0COc3PfASOnWfzp1RltEH8OshSjwd5Ldi1r%2FsnMTBUMQOFnZyLWwHbp9YgaosPCmOkhbnC2CKklM2s%2FRRxwqPZNAlckTIAD%2BvnI60fMI9wVgmRkcZa5E9ceLtx5ajaAJlKhrNsuhkDgYDhlPjilWhn%2FPmcqvbiOsj6I1MptXwU9J&X-Amz-Signature=b33fe3b4f216ffbb77b7d54c61038f17298898a5f03cf1d4be8f7ff906fe3542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
