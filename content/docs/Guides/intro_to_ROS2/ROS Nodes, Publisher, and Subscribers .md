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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ5ILGS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7xToQr9lhs9gyZF4Fj26xA01o52eU6KwUNzzQAFhRvAIgQtWRu0%2FpDoul1zkXUR%2Bb7QNr4%2FB4gGv8T97rsE1cMyoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKBa3305cXznVsS4LSrcA8seHHPMe29Gd7R79pyrJQ45xeYnoj%2F3f561KpgTN%2FWDvMtwmlo7fpRK0NSLmZB8LPZmIiVv7bXXxH1XTNp3qbVGpGVoTP3QCHuW%2Fe%2FEJE%2Bi2xbYkTcE0P%2B5wsdVPIfyvyn%2FWcI3IYvW8dP2N%2BOctHQvxwuopAG7i8yUu%2B6TS0q9VVYPHa9Ys733qpgGYQnApO1%2Bpo0ywo3pODkbhrH0cJrt5fnXM638z7YpEZLAQHLQsOfUj4y%2Bqo8YsBs5cgzdVh5pdzyA6QAZi7r7i4L5yW6%2FW%2BUEbiPfL6sPNjCn%2FQfARFFFrFbQyjq%2F6Q8apthGVlkxjQIZcQ9gPFgZyFams02BMuGBHs2Ui%2FmEkWjcsZpumIMTCg4CDIOelTtqLD%2BdkHTBv99L5liRdF%2BPdIUrSgc2i1WmELDWskY%2B6m1wIgf7QHFQ4DoX5xN%2B38C%2BbTyStzYsZN4TpFIojreMDi14b3hoPnnxYrBlC%2FVNTOyon%2B0%2BVLbKW5S1rEWTqZUXzEHVqmrKg2WjNwnIRI3%2BipE5iKTHq%2Bw6I0lhztgg3jKjILrKow33KpLsUTmK7ULI816UmGr41TAgk5aBWgnbvMyZjyfyKQBPhO9nRBDYXT%2FDZybf%2FwDL4nLg80J8TNEdMLqfzb8GOqUBG3uA2iytdweBvGlN5yPngXR9XAJ2%2FZNxYfHnzH4W052JEos%2FdVYLGnbOH2QCFiKCCsSibp5dQQISon3sgVxj5JB5136ZlS2m1QCEpose3Zn%2BKTKuY2SUagDBMTRso6TAJSqlrghxZfNbyuuWKxVIRshz28K1sY4SNWraJoxohFdbdfO%2BjZfWyZcjgkluJ052Dn2%2BY6P4s0oce5Br63f8uxvd2lj7&X-Amz-Signature=0aba6aa67286b01b88f2a310e941c54cdb973bdb2b810f2a543c2b9c91d35783&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ5ILGS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7xToQr9lhs9gyZF4Fj26xA01o52eU6KwUNzzQAFhRvAIgQtWRu0%2FpDoul1zkXUR%2Bb7QNr4%2FB4gGv8T97rsE1cMyoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKBa3305cXznVsS4LSrcA8seHHPMe29Gd7R79pyrJQ45xeYnoj%2F3f561KpgTN%2FWDvMtwmlo7fpRK0NSLmZB8LPZmIiVv7bXXxH1XTNp3qbVGpGVoTP3QCHuW%2Fe%2FEJE%2Bi2xbYkTcE0P%2B5wsdVPIfyvyn%2FWcI3IYvW8dP2N%2BOctHQvxwuopAG7i8yUu%2B6TS0q9VVYPHa9Ys733qpgGYQnApO1%2Bpo0ywo3pODkbhrH0cJrt5fnXM638z7YpEZLAQHLQsOfUj4y%2Bqo8YsBs5cgzdVh5pdzyA6QAZi7r7i4L5yW6%2FW%2BUEbiPfL6sPNjCn%2FQfARFFFrFbQyjq%2F6Q8apthGVlkxjQIZcQ9gPFgZyFams02BMuGBHs2Ui%2FmEkWjcsZpumIMTCg4CDIOelTtqLD%2BdkHTBv99L5liRdF%2BPdIUrSgc2i1WmELDWskY%2B6m1wIgf7QHFQ4DoX5xN%2B38C%2BbTyStzYsZN4TpFIojreMDi14b3hoPnnxYrBlC%2FVNTOyon%2B0%2BVLbKW5S1rEWTqZUXzEHVqmrKg2WjNwnIRI3%2BipE5iKTHq%2Bw6I0lhztgg3jKjILrKow33KpLsUTmK7ULI816UmGr41TAgk5aBWgnbvMyZjyfyKQBPhO9nRBDYXT%2FDZybf%2FwDL4nLg80J8TNEdMLqfzb8GOqUBG3uA2iytdweBvGlN5yPngXR9XAJ2%2FZNxYfHnzH4W052JEos%2FdVYLGnbOH2QCFiKCCsSibp5dQQISon3sgVxj5JB5136ZlS2m1QCEpose3Zn%2BKTKuY2SUagDBMTRso6TAJSqlrghxZfNbyuuWKxVIRshz28K1sY4SNWraJoxohFdbdfO%2BjZfWyZcjgkluJ052Dn2%2BY6P4s0oce5Br63f8uxvd2lj7&X-Amz-Signature=48f8b81a290e89dcd70e9484033b4a53ea087f7967e27991db056314cab0cb1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ5ILGS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7xToQr9lhs9gyZF4Fj26xA01o52eU6KwUNzzQAFhRvAIgQtWRu0%2FpDoul1zkXUR%2Bb7QNr4%2FB4gGv8T97rsE1cMyoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKBa3305cXznVsS4LSrcA8seHHPMe29Gd7R79pyrJQ45xeYnoj%2F3f561KpgTN%2FWDvMtwmlo7fpRK0NSLmZB8LPZmIiVv7bXXxH1XTNp3qbVGpGVoTP3QCHuW%2Fe%2FEJE%2Bi2xbYkTcE0P%2B5wsdVPIfyvyn%2FWcI3IYvW8dP2N%2BOctHQvxwuopAG7i8yUu%2B6TS0q9VVYPHa9Ys733qpgGYQnApO1%2Bpo0ywo3pODkbhrH0cJrt5fnXM638z7YpEZLAQHLQsOfUj4y%2Bqo8YsBs5cgzdVh5pdzyA6QAZi7r7i4L5yW6%2FW%2BUEbiPfL6sPNjCn%2FQfARFFFrFbQyjq%2F6Q8apthGVlkxjQIZcQ9gPFgZyFams02BMuGBHs2Ui%2FmEkWjcsZpumIMTCg4CDIOelTtqLD%2BdkHTBv99L5liRdF%2BPdIUrSgc2i1WmELDWskY%2B6m1wIgf7QHFQ4DoX5xN%2B38C%2BbTyStzYsZN4TpFIojreMDi14b3hoPnnxYrBlC%2FVNTOyon%2B0%2BVLbKW5S1rEWTqZUXzEHVqmrKg2WjNwnIRI3%2BipE5iKTHq%2Bw6I0lhztgg3jKjILrKow33KpLsUTmK7ULI816UmGr41TAgk5aBWgnbvMyZjyfyKQBPhO9nRBDYXT%2FDZybf%2FwDL4nLg80J8TNEdMLqfzb8GOqUBG3uA2iytdweBvGlN5yPngXR9XAJ2%2FZNxYfHnzH4W052JEos%2FdVYLGnbOH2QCFiKCCsSibp5dQQISon3sgVxj5JB5136ZlS2m1QCEpose3Zn%2BKTKuY2SUagDBMTRso6TAJSqlrghxZfNbyuuWKxVIRshz28K1sY4SNWraJoxohFdbdfO%2BjZfWyZcjgkluJ052Dn2%2BY6P4s0oce5Br63f8uxvd2lj7&X-Amz-Signature=caaeb328bc94d208a84e73deae5f91fe1110d32a2f61302bd82069f620e7b7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ5ILGS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7xToQr9lhs9gyZF4Fj26xA01o52eU6KwUNzzQAFhRvAIgQtWRu0%2FpDoul1zkXUR%2Bb7QNr4%2FB4gGv8T97rsE1cMyoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKBa3305cXznVsS4LSrcA8seHHPMe29Gd7R79pyrJQ45xeYnoj%2F3f561KpgTN%2FWDvMtwmlo7fpRK0NSLmZB8LPZmIiVv7bXXxH1XTNp3qbVGpGVoTP3QCHuW%2Fe%2FEJE%2Bi2xbYkTcE0P%2B5wsdVPIfyvyn%2FWcI3IYvW8dP2N%2BOctHQvxwuopAG7i8yUu%2B6TS0q9VVYPHa9Ys733qpgGYQnApO1%2Bpo0ywo3pODkbhrH0cJrt5fnXM638z7YpEZLAQHLQsOfUj4y%2Bqo8YsBs5cgzdVh5pdzyA6QAZi7r7i4L5yW6%2FW%2BUEbiPfL6sPNjCn%2FQfARFFFrFbQyjq%2F6Q8apthGVlkxjQIZcQ9gPFgZyFams02BMuGBHs2Ui%2FmEkWjcsZpumIMTCg4CDIOelTtqLD%2BdkHTBv99L5liRdF%2BPdIUrSgc2i1WmELDWskY%2B6m1wIgf7QHFQ4DoX5xN%2B38C%2BbTyStzYsZN4TpFIojreMDi14b3hoPnnxYrBlC%2FVNTOyon%2B0%2BVLbKW5S1rEWTqZUXzEHVqmrKg2WjNwnIRI3%2BipE5iKTHq%2Bw6I0lhztgg3jKjILrKow33KpLsUTmK7ULI816UmGr41TAgk5aBWgnbvMyZjyfyKQBPhO9nRBDYXT%2FDZybf%2FwDL4nLg80J8TNEdMLqfzb8GOqUBG3uA2iytdweBvGlN5yPngXR9XAJ2%2FZNxYfHnzH4W052JEos%2FdVYLGnbOH2QCFiKCCsSibp5dQQISon3sgVxj5JB5136ZlS2m1QCEpose3Zn%2BKTKuY2SUagDBMTRso6TAJSqlrghxZfNbyuuWKxVIRshz28K1sY4SNWraJoxohFdbdfO%2BjZfWyZcjgkluJ052Dn2%2BY6P4s0oce5Br63f8uxvd2lj7&X-Amz-Signature=801287b10906cbb9e892a00bbbebf68a093ef130b5d55bb4e95ad0e6b96d8a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ5ILGS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7xToQr9lhs9gyZF4Fj26xA01o52eU6KwUNzzQAFhRvAIgQtWRu0%2FpDoul1zkXUR%2Bb7QNr4%2FB4gGv8T97rsE1cMyoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKBa3305cXznVsS4LSrcA8seHHPMe29Gd7R79pyrJQ45xeYnoj%2F3f561KpgTN%2FWDvMtwmlo7fpRK0NSLmZB8LPZmIiVv7bXXxH1XTNp3qbVGpGVoTP3QCHuW%2Fe%2FEJE%2Bi2xbYkTcE0P%2B5wsdVPIfyvyn%2FWcI3IYvW8dP2N%2BOctHQvxwuopAG7i8yUu%2B6TS0q9VVYPHa9Ys733qpgGYQnApO1%2Bpo0ywo3pODkbhrH0cJrt5fnXM638z7YpEZLAQHLQsOfUj4y%2Bqo8YsBs5cgzdVh5pdzyA6QAZi7r7i4L5yW6%2FW%2BUEbiPfL6sPNjCn%2FQfARFFFrFbQyjq%2F6Q8apthGVlkxjQIZcQ9gPFgZyFams02BMuGBHs2Ui%2FmEkWjcsZpumIMTCg4CDIOelTtqLD%2BdkHTBv99L5liRdF%2BPdIUrSgc2i1WmELDWskY%2B6m1wIgf7QHFQ4DoX5xN%2B38C%2BbTyStzYsZN4TpFIojreMDi14b3hoPnnxYrBlC%2FVNTOyon%2B0%2BVLbKW5S1rEWTqZUXzEHVqmrKg2WjNwnIRI3%2BipE5iKTHq%2Bw6I0lhztgg3jKjILrKow33KpLsUTmK7ULI816UmGr41TAgk5aBWgnbvMyZjyfyKQBPhO9nRBDYXT%2FDZybf%2FwDL4nLg80J8TNEdMLqfzb8GOqUBG3uA2iytdweBvGlN5yPngXR9XAJ2%2FZNxYfHnzH4W052JEos%2FdVYLGnbOH2QCFiKCCsSibp5dQQISon3sgVxj5JB5136ZlS2m1QCEpose3Zn%2BKTKuY2SUagDBMTRso6TAJSqlrghxZfNbyuuWKxVIRshz28K1sY4SNWraJoxohFdbdfO%2BjZfWyZcjgkluJ052Dn2%2BY6P4s0oce5Br63f8uxvd2lj7&X-Amz-Signature=ec6ae7dee66840a68615757556c923a91a93d798145de8f4387211b92c058552&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ5ILGS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7xToQr9lhs9gyZF4Fj26xA01o52eU6KwUNzzQAFhRvAIgQtWRu0%2FpDoul1zkXUR%2Bb7QNr4%2FB4gGv8T97rsE1cMyoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKBa3305cXznVsS4LSrcA8seHHPMe29Gd7R79pyrJQ45xeYnoj%2F3f561KpgTN%2FWDvMtwmlo7fpRK0NSLmZB8LPZmIiVv7bXXxH1XTNp3qbVGpGVoTP3QCHuW%2Fe%2FEJE%2Bi2xbYkTcE0P%2B5wsdVPIfyvyn%2FWcI3IYvW8dP2N%2BOctHQvxwuopAG7i8yUu%2B6TS0q9VVYPHa9Ys733qpgGYQnApO1%2Bpo0ywo3pODkbhrH0cJrt5fnXM638z7YpEZLAQHLQsOfUj4y%2Bqo8YsBs5cgzdVh5pdzyA6QAZi7r7i4L5yW6%2FW%2BUEbiPfL6sPNjCn%2FQfARFFFrFbQyjq%2F6Q8apthGVlkxjQIZcQ9gPFgZyFams02BMuGBHs2Ui%2FmEkWjcsZpumIMTCg4CDIOelTtqLD%2BdkHTBv99L5liRdF%2BPdIUrSgc2i1WmELDWskY%2B6m1wIgf7QHFQ4DoX5xN%2B38C%2BbTyStzYsZN4TpFIojreMDi14b3hoPnnxYrBlC%2FVNTOyon%2B0%2BVLbKW5S1rEWTqZUXzEHVqmrKg2WjNwnIRI3%2BipE5iKTHq%2Bw6I0lhztgg3jKjILrKow33KpLsUTmK7ULI816UmGr41TAgk5aBWgnbvMyZjyfyKQBPhO9nRBDYXT%2FDZybf%2FwDL4nLg80J8TNEdMLqfzb8GOqUBG3uA2iytdweBvGlN5yPngXR9XAJ2%2FZNxYfHnzH4W052JEos%2FdVYLGnbOH2QCFiKCCsSibp5dQQISon3sgVxj5JB5136ZlS2m1QCEpose3Zn%2BKTKuY2SUagDBMTRso6TAJSqlrghxZfNbyuuWKxVIRshz28K1sY4SNWraJoxohFdbdfO%2BjZfWyZcjgkluJ052Dn2%2BY6P4s0oce5Br63f8uxvd2lj7&X-Amz-Signature=1ec3e36bb9c3650ed7206ee1c450f0c00de316c0ead6b4162937b8d799d13f76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ5ILGS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7xToQr9lhs9gyZF4Fj26xA01o52eU6KwUNzzQAFhRvAIgQtWRu0%2FpDoul1zkXUR%2Bb7QNr4%2FB4gGv8T97rsE1cMyoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKBa3305cXznVsS4LSrcA8seHHPMe29Gd7R79pyrJQ45xeYnoj%2F3f561KpgTN%2FWDvMtwmlo7fpRK0NSLmZB8LPZmIiVv7bXXxH1XTNp3qbVGpGVoTP3QCHuW%2Fe%2FEJE%2Bi2xbYkTcE0P%2B5wsdVPIfyvyn%2FWcI3IYvW8dP2N%2BOctHQvxwuopAG7i8yUu%2B6TS0q9VVYPHa9Ys733qpgGYQnApO1%2Bpo0ywo3pODkbhrH0cJrt5fnXM638z7YpEZLAQHLQsOfUj4y%2Bqo8YsBs5cgzdVh5pdzyA6QAZi7r7i4L5yW6%2FW%2BUEbiPfL6sPNjCn%2FQfARFFFrFbQyjq%2F6Q8apthGVlkxjQIZcQ9gPFgZyFams02BMuGBHs2Ui%2FmEkWjcsZpumIMTCg4CDIOelTtqLD%2BdkHTBv99L5liRdF%2BPdIUrSgc2i1WmELDWskY%2B6m1wIgf7QHFQ4DoX5xN%2B38C%2BbTyStzYsZN4TpFIojreMDi14b3hoPnnxYrBlC%2FVNTOyon%2B0%2BVLbKW5S1rEWTqZUXzEHVqmrKg2WjNwnIRI3%2BipE5iKTHq%2Bw6I0lhztgg3jKjILrKow33KpLsUTmK7ULI816UmGr41TAgk5aBWgnbvMyZjyfyKQBPhO9nRBDYXT%2FDZybf%2FwDL4nLg80J8TNEdMLqfzb8GOqUBG3uA2iytdweBvGlN5yPngXR9XAJ2%2FZNxYfHnzH4W052JEos%2FdVYLGnbOH2QCFiKCCsSibp5dQQISon3sgVxj5JB5136ZlS2m1QCEpose3Zn%2BKTKuY2SUagDBMTRso6TAJSqlrghxZfNbyuuWKxVIRshz28K1sY4SNWraJoxohFdbdfO%2BjZfWyZcjgkluJ052Dn2%2BY6P4s0oce5Br63f8uxvd2lj7&X-Amz-Signature=7afa88cfcb31042035fe900b3083d31428f76d695478acad177f96ebc5195992&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ5ILGS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7xToQr9lhs9gyZF4Fj26xA01o52eU6KwUNzzQAFhRvAIgQtWRu0%2FpDoul1zkXUR%2Bb7QNr4%2FB4gGv8T97rsE1cMyoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKBa3305cXznVsS4LSrcA8seHHPMe29Gd7R79pyrJQ45xeYnoj%2F3f561KpgTN%2FWDvMtwmlo7fpRK0NSLmZB8LPZmIiVv7bXXxH1XTNp3qbVGpGVoTP3QCHuW%2Fe%2FEJE%2Bi2xbYkTcE0P%2B5wsdVPIfyvyn%2FWcI3IYvW8dP2N%2BOctHQvxwuopAG7i8yUu%2B6TS0q9VVYPHa9Ys733qpgGYQnApO1%2Bpo0ywo3pODkbhrH0cJrt5fnXM638z7YpEZLAQHLQsOfUj4y%2Bqo8YsBs5cgzdVh5pdzyA6QAZi7r7i4L5yW6%2FW%2BUEbiPfL6sPNjCn%2FQfARFFFrFbQyjq%2F6Q8apthGVlkxjQIZcQ9gPFgZyFams02BMuGBHs2Ui%2FmEkWjcsZpumIMTCg4CDIOelTtqLD%2BdkHTBv99L5liRdF%2BPdIUrSgc2i1WmELDWskY%2B6m1wIgf7QHFQ4DoX5xN%2B38C%2BbTyStzYsZN4TpFIojreMDi14b3hoPnnxYrBlC%2FVNTOyon%2B0%2BVLbKW5S1rEWTqZUXzEHVqmrKg2WjNwnIRI3%2BipE5iKTHq%2Bw6I0lhztgg3jKjILrKow33KpLsUTmK7ULI816UmGr41TAgk5aBWgnbvMyZjyfyKQBPhO9nRBDYXT%2FDZybf%2FwDL4nLg80J8TNEdMLqfzb8GOqUBG3uA2iytdweBvGlN5yPngXR9XAJ2%2FZNxYfHnzH4W052JEos%2FdVYLGnbOH2QCFiKCCsSibp5dQQISon3sgVxj5JB5136ZlS2m1QCEpose3Zn%2BKTKuY2SUagDBMTRso6TAJSqlrghxZfNbyuuWKxVIRshz28K1sY4SNWraJoxohFdbdfO%2BjZfWyZcjgkluJ052Dn2%2BY6P4s0oce5Br63f8uxvd2lj7&X-Amz-Signature=9da558b350b04e9ecbdd892c19eb3a3befb68c6ec578c153c3a4e8601cc9ffb5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
