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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUUAP24%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7zsaMFIf%2F1OQDXEAkq4hb79cxY8D4RcnExOPqjWpdwIhAOFaJCSsVmeBzqN0aN%2FElINtNF7LcO51FkCsbXd7FLw1Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzfzkwOf8K9f%2FBDxugq3APJ1nrGQepdQqrUo2Pfrsqq8iY1rhioxdCTBXAhGBYeD4jPutGzW97cFzkA8ahy4dsLK5HmeVpqbMoG2OtwptbT3fOawupL6HaUQfvJEpGXvl3Vj6JuXZJ%2FsLZC%2FQW%2BnUkQEwW4iawcJuGfKh7q4PDO7Cww1gB56k2hYFhi114qkx0goE6osOin5eNC5DJWfO8y5swERp60mjUS%2BYrhin0Ux9gtnut0LwWciC%2BgOODggp7ro2tcjPmSh%2BR9jm3wSasbqlFdM%2BOEuJzZsKe8nVbcevyXw1v9%2Brqrg57WI8TppJVFwuBZMuUkXl%2F8dfCiGt0s9HtPU6FJiL%2FYVh4hdJrw3XITGZ%2Byz4eDqmoGiA1qsqkIqXJfuwR4E9kDQr%2BWV%2FGKqc1PTYJdq81ycoNsH1R%2FSVKeM9vTNEvkS5wj4oeRX0y%2BiqGQvhIW2lVTYonJv3bFFqYLbtpOn9uriwlqJftIigHePtkj7L6coYZO5YMC8%2FXS%2FYjSdxp46iVXSTtg%2B%2FI4Dhba%2F5fMC4qlQz188yRiTjd%2BdZ%2FpmDIOBH0lyjf2kzLglNAFw4ndnaWSxB8L%2FItQcj95y1CzXFILlkh%2BP5hk1yDT6RFhrHgzmp3yZ%2FS6QK6ckd%2BGXFisLD0muDCFwvm%2FBjqkAU24pAVh6WHhj32h0ug3uGJU1mMVHL4s0VTrNh9rjlwXoDtDd2M0cDYn%2BwJrRDZRissgO2guunvg0AuSfsn28oVK%2FQ%2F3QwkR7jkKNAO7vEMzbZpPxDvvZMW2b3C1Dc%2F10m8Bu0cVA2EYXHvYUpBPamjKxnaNneQTqFkQORaHFAr3nSIQw1ZBlrUok%2F%2Brw4Oj3mxFTGQWJ%2FS85IiMfUZP%2F8Oio5Ga&X-Amz-Signature=b56b86c47078ee2bd2a5a23808f5f50c44fbaa098d28d1541548e48a9173f6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUUAP24%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7zsaMFIf%2F1OQDXEAkq4hb79cxY8D4RcnExOPqjWpdwIhAOFaJCSsVmeBzqN0aN%2FElINtNF7LcO51FkCsbXd7FLw1Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzfzkwOf8K9f%2FBDxugq3APJ1nrGQepdQqrUo2Pfrsqq8iY1rhioxdCTBXAhGBYeD4jPutGzW97cFzkA8ahy4dsLK5HmeVpqbMoG2OtwptbT3fOawupL6HaUQfvJEpGXvl3Vj6JuXZJ%2FsLZC%2FQW%2BnUkQEwW4iawcJuGfKh7q4PDO7Cww1gB56k2hYFhi114qkx0goE6osOin5eNC5DJWfO8y5swERp60mjUS%2BYrhin0Ux9gtnut0LwWciC%2BgOODggp7ro2tcjPmSh%2BR9jm3wSasbqlFdM%2BOEuJzZsKe8nVbcevyXw1v9%2Brqrg57WI8TppJVFwuBZMuUkXl%2F8dfCiGt0s9HtPU6FJiL%2FYVh4hdJrw3XITGZ%2Byz4eDqmoGiA1qsqkIqXJfuwR4E9kDQr%2BWV%2FGKqc1PTYJdq81ycoNsH1R%2FSVKeM9vTNEvkS5wj4oeRX0y%2BiqGQvhIW2lVTYonJv3bFFqYLbtpOn9uriwlqJftIigHePtkj7L6coYZO5YMC8%2FXS%2FYjSdxp46iVXSTtg%2B%2FI4Dhba%2F5fMC4qlQz188yRiTjd%2BdZ%2FpmDIOBH0lyjf2kzLglNAFw4ndnaWSxB8L%2FItQcj95y1CzXFILlkh%2BP5hk1yDT6RFhrHgzmp3yZ%2FS6QK6ckd%2BGXFisLD0muDCFwvm%2FBjqkAU24pAVh6WHhj32h0ug3uGJU1mMVHL4s0VTrNh9rjlwXoDtDd2M0cDYn%2BwJrRDZRissgO2guunvg0AuSfsn28oVK%2FQ%2F3QwkR7jkKNAO7vEMzbZpPxDvvZMW2b3C1Dc%2F10m8Bu0cVA2EYXHvYUpBPamjKxnaNneQTqFkQORaHFAr3nSIQw1ZBlrUok%2F%2Brw4Oj3mxFTGQWJ%2FS85IiMfUZP%2F8Oio5Ga&X-Amz-Signature=a14e0a2c20bb38b5665aee49faf78e00a3aa0ea4c38962570eb9638183deea94&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUUAP24%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7zsaMFIf%2F1OQDXEAkq4hb79cxY8D4RcnExOPqjWpdwIhAOFaJCSsVmeBzqN0aN%2FElINtNF7LcO51FkCsbXd7FLw1Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzfzkwOf8K9f%2FBDxugq3APJ1nrGQepdQqrUo2Pfrsqq8iY1rhioxdCTBXAhGBYeD4jPutGzW97cFzkA8ahy4dsLK5HmeVpqbMoG2OtwptbT3fOawupL6HaUQfvJEpGXvl3Vj6JuXZJ%2FsLZC%2FQW%2BnUkQEwW4iawcJuGfKh7q4PDO7Cww1gB56k2hYFhi114qkx0goE6osOin5eNC5DJWfO8y5swERp60mjUS%2BYrhin0Ux9gtnut0LwWciC%2BgOODggp7ro2tcjPmSh%2BR9jm3wSasbqlFdM%2BOEuJzZsKe8nVbcevyXw1v9%2Brqrg57WI8TppJVFwuBZMuUkXl%2F8dfCiGt0s9HtPU6FJiL%2FYVh4hdJrw3XITGZ%2Byz4eDqmoGiA1qsqkIqXJfuwR4E9kDQr%2BWV%2FGKqc1PTYJdq81ycoNsH1R%2FSVKeM9vTNEvkS5wj4oeRX0y%2BiqGQvhIW2lVTYonJv3bFFqYLbtpOn9uriwlqJftIigHePtkj7L6coYZO5YMC8%2FXS%2FYjSdxp46iVXSTtg%2B%2FI4Dhba%2F5fMC4qlQz188yRiTjd%2BdZ%2FpmDIOBH0lyjf2kzLglNAFw4ndnaWSxB8L%2FItQcj95y1CzXFILlkh%2BP5hk1yDT6RFhrHgzmp3yZ%2FS6QK6ckd%2BGXFisLD0muDCFwvm%2FBjqkAU24pAVh6WHhj32h0ug3uGJU1mMVHL4s0VTrNh9rjlwXoDtDd2M0cDYn%2BwJrRDZRissgO2guunvg0AuSfsn28oVK%2FQ%2F3QwkR7jkKNAO7vEMzbZpPxDvvZMW2b3C1Dc%2F10m8Bu0cVA2EYXHvYUpBPamjKxnaNneQTqFkQORaHFAr3nSIQw1ZBlrUok%2F%2Brw4Oj3mxFTGQWJ%2FS85IiMfUZP%2F8Oio5Ga&X-Amz-Signature=aa7c2d7a6eda79eca0903ba550fef65b7f86cd14ac5ceaaf2b46ca5150fd47f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUUAP24%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7zsaMFIf%2F1OQDXEAkq4hb79cxY8D4RcnExOPqjWpdwIhAOFaJCSsVmeBzqN0aN%2FElINtNF7LcO51FkCsbXd7FLw1Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzfzkwOf8K9f%2FBDxugq3APJ1nrGQepdQqrUo2Pfrsqq8iY1rhioxdCTBXAhGBYeD4jPutGzW97cFzkA8ahy4dsLK5HmeVpqbMoG2OtwptbT3fOawupL6HaUQfvJEpGXvl3Vj6JuXZJ%2FsLZC%2FQW%2BnUkQEwW4iawcJuGfKh7q4PDO7Cww1gB56k2hYFhi114qkx0goE6osOin5eNC5DJWfO8y5swERp60mjUS%2BYrhin0Ux9gtnut0LwWciC%2BgOODggp7ro2tcjPmSh%2BR9jm3wSasbqlFdM%2BOEuJzZsKe8nVbcevyXw1v9%2Brqrg57WI8TppJVFwuBZMuUkXl%2F8dfCiGt0s9HtPU6FJiL%2FYVh4hdJrw3XITGZ%2Byz4eDqmoGiA1qsqkIqXJfuwR4E9kDQr%2BWV%2FGKqc1PTYJdq81ycoNsH1R%2FSVKeM9vTNEvkS5wj4oeRX0y%2BiqGQvhIW2lVTYonJv3bFFqYLbtpOn9uriwlqJftIigHePtkj7L6coYZO5YMC8%2FXS%2FYjSdxp46iVXSTtg%2B%2FI4Dhba%2F5fMC4qlQz188yRiTjd%2BdZ%2FpmDIOBH0lyjf2kzLglNAFw4ndnaWSxB8L%2FItQcj95y1CzXFILlkh%2BP5hk1yDT6RFhrHgzmp3yZ%2FS6QK6ckd%2BGXFisLD0muDCFwvm%2FBjqkAU24pAVh6WHhj32h0ug3uGJU1mMVHL4s0VTrNh9rjlwXoDtDd2M0cDYn%2BwJrRDZRissgO2guunvg0AuSfsn28oVK%2FQ%2F3QwkR7jkKNAO7vEMzbZpPxDvvZMW2b3C1Dc%2F10m8Bu0cVA2EYXHvYUpBPamjKxnaNneQTqFkQORaHFAr3nSIQw1ZBlrUok%2F%2Brw4Oj3mxFTGQWJ%2FS85IiMfUZP%2F8Oio5Ga&X-Amz-Signature=64f354a584997eea897709a02f97e9eca0861d125cef547b4f96d16238eb52eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUUAP24%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7zsaMFIf%2F1OQDXEAkq4hb79cxY8D4RcnExOPqjWpdwIhAOFaJCSsVmeBzqN0aN%2FElINtNF7LcO51FkCsbXd7FLw1Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzfzkwOf8K9f%2FBDxugq3APJ1nrGQepdQqrUo2Pfrsqq8iY1rhioxdCTBXAhGBYeD4jPutGzW97cFzkA8ahy4dsLK5HmeVpqbMoG2OtwptbT3fOawupL6HaUQfvJEpGXvl3Vj6JuXZJ%2FsLZC%2FQW%2BnUkQEwW4iawcJuGfKh7q4PDO7Cww1gB56k2hYFhi114qkx0goE6osOin5eNC5DJWfO8y5swERp60mjUS%2BYrhin0Ux9gtnut0LwWciC%2BgOODggp7ro2tcjPmSh%2BR9jm3wSasbqlFdM%2BOEuJzZsKe8nVbcevyXw1v9%2Brqrg57WI8TppJVFwuBZMuUkXl%2F8dfCiGt0s9HtPU6FJiL%2FYVh4hdJrw3XITGZ%2Byz4eDqmoGiA1qsqkIqXJfuwR4E9kDQr%2BWV%2FGKqc1PTYJdq81ycoNsH1R%2FSVKeM9vTNEvkS5wj4oeRX0y%2BiqGQvhIW2lVTYonJv3bFFqYLbtpOn9uriwlqJftIigHePtkj7L6coYZO5YMC8%2FXS%2FYjSdxp46iVXSTtg%2B%2FI4Dhba%2F5fMC4qlQz188yRiTjd%2BdZ%2FpmDIOBH0lyjf2kzLglNAFw4ndnaWSxB8L%2FItQcj95y1CzXFILlkh%2BP5hk1yDT6RFhrHgzmp3yZ%2FS6QK6ckd%2BGXFisLD0muDCFwvm%2FBjqkAU24pAVh6WHhj32h0ug3uGJU1mMVHL4s0VTrNh9rjlwXoDtDd2M0cDYn%2BwJrRDZRissgO2guunvg0AuSfsn28oVK%2FQ%2F3QwkR7jkKNAO7vEMzbZpPxDvvZMW2b3C1Dc%2F10m8Bu0cVA2EYXHvYUpBPamjKxnaNneQTqFkQORaHFAr3nSIQw1ZBlrUok%2F%2Brw4Oj3mxFTGQWJ%2FS85IiMfUZP%2F8Oio5Ga&X-Amz-Signature=cbb5c4f89e4a69d8919635092fdb9b43a117bc62cfe37b66ecf584742f9eef89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUUAP24%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7zsaMFIf%2F1OQDXEAkq4hb79cxY8D4RcnExOPqjWpdwIhAOFaJCSsVmeBzqN0aN%2FElINtNF7LcO51FkCsbXd7FLw1Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzfzkwOf8K9f%2FBDxugq3APJ1nrGQepdQqrUo2Pfrsqq8iY1rhioxdCTBXAhGBYeD4jPutGzW97cFzkA8ahy4dsLK5HmeVpqbMoG2OtwptbT3fOawupL6HaUQfvJEpGXvl3Vj6JuXZJ%2FsLZC%2FQW%2BnUkQEwW4iawcJuGfKh7q4PDO7Cww1gB56k2hYFhi114qkx0goE6osOin5eNC5DJWfO8y5swERp60mjUS%2BYrhin0Ux9gtnut0LwWciC%2BgOODggp7ro2tcjPmSh%2BR9jm3wSasbqlFdM%2BOEuJzZsKe8nVbcevyXw1v9%2Brqrg57WI8TppJVFwuBZMuUkXl%2F8dfCiGt0s9HtPU6FJiL%2FYVh4hdJrw3XITGZ%2Byz4eDqmoGiA1qsqkIqXJfuwR4E9kDQr%2BWV%2FGKqc1PTYJdq81ycoNsH1R%2FSVKeM9vTNEvkS5wj4oeRX0y%2BiqGQvhIW2lVTYonJv3bFFqYLbtpOn9uriwlqJftIigHePtkj7L6coYZO5YMC8%2FXS%2FYjSdxp46iVXSTtg%2B%2FI4Dhba%2F5fMC4qlQz188yRiTjd%2BdZ%2FpmDIOBH0lyjf2kzLglNAFw4ndnaWSxB8L%2FItQcj95y1CzXFILlkh%2BP5hk1yDT6RFhrHgzmp3yZ%2FS6QK6ckd%2BGXFisLD0muDCFwvm%2FBjqkAU24pAVh6WHhj32h0ug3uGJU1mMVHL4s0VTrNh9rjlwXoDtDd2M0cDYn%2BwJrRDZRissgO2guunvg0AuSfsn28oVK%2FQ%2F3QwkR7jkKNAO7vEMzbZpPxDvvZMW2b3C1Dc%2F10m8Bu0cVA2EYXHvYUpBPamjKxnaNneQTqFkQORaHFAr3nSIQw1ZBlrUok%2F%2Brw4Oj3mxFTGQWJ%2FS85IiMfUZP%2F8Oio5Ga&X-Amz-Signature=4596185cbfb75d5aec28ae7d10f5764dcc497222a21d4b51fd73a4111665dca1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUUAP24%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7zsaMFIf%2F1OQDXEAkq4hb79cxY8D4RcnExOPqjWpdwIhAOFaJCSsVmeBzqN0aN%2FElINtNF7LcO51FkCsbXd7FLw1Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzfzkwOf8K9f%2FBDxugq3APJ1nrGQepdQqrUo2Pfrsqq8iY1rhioxdCTBXAhGBYeD4jPutGzW97cFzkA8ahy4dsLK5HmeVpqbMoG2OtwptbT3fOawupL6HaUQfvJEpGXvl3Vj6JuXZJ%2FsLZC%2FQW%2BnUkQEwW4iawcJuGfKh7q4PDO7Cww1gB56k2hYFhi114qkx0goE6osOin5eNC5DJWfO8y5swERp60mjUS%2BYrhin0Ux9gtnut0LwWciC%2BgOODggp7ro2tcjPmSh%2BR9jm3wSasbqlFdM%2BOEuJzZsKe8nVbcevyXw1v9%2Brqrg57WI8TppJVFwuBZMuUkXl%2F8dfCiGt0s9HtPU6FJiL%2FYVh4hdJrw3XITGZ%2Byz4eDqmoGiA1qsqkIqXJfuwR4E9kDQr%2BWV%2FGKqc1PTYJdq81ycoNsH1R%2FSVKeM9vTNEvkS5wj4oeRX0y%2BiqGQvhIW2lVTYonJv3bFFqYLbtpOn9uriwlqJftIigHePtkj7L6coYZO5YMC8%2FXS%2FYjSdxp46iVXSTtg%2B%2FI4Dhba%2F5fMC4qlQz188yRiTjd%2BdZ%2FpmDIOBH0lyjf2kzLglNAFw4ndnaWSxB8L%2FItQcj95y1CzXFILlkh%2BP5hk1yDT6RFhrHgzmp3yZ%2FS6QK6ckd%2BGXFisLD0muDCFwvm%2FBjqkAU24pAVh6WHhj32h0ug3uGJU1mMVHL4s0VTrNh9rjlwXoDtDd2M0cDYn%2BwJrRDZRissgO2guunvg0AuSfsn28oVK%2FQ%2F3QwkR7jkKNAO7vEMzbZpPxDvvZMW2b3C1Dc%2F10m8Bu0cVA2EYXHvYUpBPamjKxnaNneQTqFkQORaHFAr3nSIQw1ZBlrUok%2F%2Brw4Oj3mxFTGQWJ%2FS85IiMfUZP%2F8Oio5Ga&X-Amz-Signature=8e48c0d54148771ee5ae3761c0a65f75aaf9ab093d304a21f4af4990554b0c98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUUAP24%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7zsaMFIf%2F1OQDXEAkq4hb79cxY8D4RcnExOPqjWpdwIhAOFaJCSsVmeBzqN0aN%2FElINtNF7LcO51FkCsbXd7FLw1Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzfzkwOf8K9f%2FBDxugq3APJ1nrGQepdQqrUo2Pfrsqq8iY1rhioxdCTBXAhGBYeD4jPutGzW97cFzkA8ahy4dsLK5HmeVpqbMoG2OtwptbT3fOawupL6HaUQfvJEpGXvl3Vj6JuXZJ%2FsLZC%2FQW%2BnUkQEwW4iawcJuGfKh7q4PDO7Cww1gB56k2hYFhi114qkx0goE6osOin5eNC5DJWfO8y5swERp60mjUS%2BYrhin0Ux9gtnut0LwWciC%2BgOODggp7ro2tcjPmSh%2BR9jm3wSasbqlFdM%2BOEuJzZsKe8nVbcevyXw1v9%2Brqrg57WI8TppJVFwuBZMuUkXl%2F8dfCiGt0s9HtPU6FJiL%2FYVh4hdJrw3XITGZ%2Byz4eDqmoGiA1qsqkIqXJfuwR4E9kDQr%2BWV%2FGKqc1PTYJdq81ycoNsH1R%2FSVKeM9vTNEvkS5wj4oeRX0y%2BiqGQvhIW2lVTYonJv3bFFqYLbtpOn9uriwlqJftIigHePtkj7L6coYZO5YMC8%2FXS%2FYjSdxp46iVXSTtg%2B%2FI4Dhba%2F5fMC4qlQz188yRiTjd%2BdZ%2FpmDIOBH0lyjf2kzLglNAFw4ndnaWSxB8L%2FItQcj95y1CzXFILlkh%2BP5hk1yDT6RFhrHgzmp3yZ%2FS6QK6ckd%2BGXFisLD0muDCFwvm%2FBjqkAU24pAVh6WHhj32h0ug3uGJU1mMVHL4s0VTrNh9rjlwXoDtDd2M0cDYn%2BwJrRDZRissgO2guunvg0AuSfsn28oVK%2FQ%2F3QwkR7jkKNAO7vEMzbZpPxDvvZMW2b3C1Dc%2F10m8Bu0cVA2EYXHvYUpBPamjKxnaNneQTqFkQORaHFAr3nSIQw1ZBlrUok%2F%2Brw4Oj3mxFTGQWJ%2FS85IiMfUZP%2F8Oio5Ga&X-Amz-Signature=7d50736876dc0bde7be3d16329058173a7be85c5f4f3ceec285af7d045b1e031&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
