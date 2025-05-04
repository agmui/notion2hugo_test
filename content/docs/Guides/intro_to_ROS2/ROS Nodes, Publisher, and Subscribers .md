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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ5X3JGU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGU2IDKk8Kj0JcBfAx1REYTlKlYz%2BSCNGA2CLcv2JosVAiEApUPMQPz90hUXt04NNIabGiJtFhpnA6MRhbuJKZw6q8Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDChiB%2BGhVuHUMEHMYyrcA8OtoU5Af2iDFyZssdjunjAUOpKNpo8luKSJ%2FyOKNsu2HFIoRQJcUrvcYLmmEyAvfOzUsDuGSjw5JxEj0lml99PvnHknbGtGe%2Fk5S12KzmjA%2BcHM5kw9OppqYVyBIsBMjLd%2Fd%2B24cl4k39oVWv5JiJHgtB0QQ0p%2FzY4wkIFCMB%2BAZPDebCOH52yBiunejltDmLEGwwS6%2FqHqDTLqHNnQwyv4dBx1ml2bMmGBJSuqjZ5jaaMaPkQ6c1QnK27ppVH0b9vBNFkKnznaUW99pXD5fn5vli32Wt2cu4Kxvk829GUL%2FvWF3yQQ2c09rRLZT5pY%2B0BOxeu8cO3K0o%2FRHN5voddLPTSY9S8ky9LsRTU69oLZ2b1HNryc89myC5%2BY1vLFsaMOLgGUTge5QOWAdAgI2EvL3FO7PuJSgqS3F07R%2FvljoYIsPhWTAixKnuafMnDkMPD8pj4gUp9AEJ1V92qhITve10Gj22O0KFD8IpjNurN4xousGTQWfi4noRqupCxCuKhrUVTrCYi2VvWayHqq3xOLsZT9jZJWFRXiMFK7q6N8WyJoiGwqoDUyPdTyIkn4awyFMRjlNZzqLZeYY%2FUJBgZHFdsUKewXZLRKVT3IZliJB60Us6UKGWkG%2B3e2MJyi3cAGOqUBncPn%2F%2FkUSKXLN36bdeWDMwZ1VJDZQi%2FIiuvZFj4d%2BAbDaimMLuGHo%2FcY54BGSFPqL5SV93T5YaXVF2ZVS%2BLWo9o5goXd%2Fh9KVEPAUs9WHNVV%2FmCjdUuqtSxXEa0DPCdAuAVD1ZvAlfLPdUODtumPURBMzUJLwIkfIgkFtEWRa%2BEZ8cdvJyEntysaXQVx1MF7yehKGjywXXHq5c2sbDzd1xgV3R1r&X-Amz-Signature=da30cf8b1027c7af7ee0352cba3ccfb5baba7cbf5671033ac751c59826ecbf49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ5X3JGU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGU2IDKk8Kj0JcBfAx1REYTlKlYz%2BSCNGA2CLcv2JosVAiEApUPMQPz90hUXt04NNIabGiJtFhpnA6MRhbuJKZw6q8Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDChiB%2BGhVuHUMEHMYyrcA8OtoU5Af2iDFyZssdjunjAUOpKNpo8luKSJ%2FyOKNsu2HFIoRQJcUrvcYLmmEyAvfOzUsDuGSjw5JxEj0lml99PvnHknbGtGe%2Fk5S12KzmjA%2BcHM5kw9OppqYVyBIsBMjLd%2Fd%2B24cl4k39oVWv5JiJHgtB0QQ0p%2FzY4wkIFCMB%2BAZPDebCOH52yBiunejltDmLEGwwS6%2FqHqDTLqHNnQwyv4dBx1ml2bMmGBJSuqjZ5jaaMaPkQ6c1QnK27ppVH0b9vBNFkKnznaUW99pXD5fn5vli32Wt2cu4Kxvk829GUL%2FvWF3yQQ2c09rRLZT5pY%2B0BOxeu8cO3K0o%2FRHN5voddLPTSY9S8ky9LsRTU69oLZ2b1HNryc89myC5%2BY1vLFsaMOLgGUTge5QOWAdAgI2EvL3FO7PuJSgqS3F07R%2FvljoYIsPhWTAixKnuafMnDkMPD8pj4gUp9AEJ1V92qhITve10Gj22O0KFD8IpjNurN4xousGTQWfi4noRqupCxCuKhrUVTrCYi2VvWayHqq3xOLsZT9jZJWFRXiMFK7q6N8WyJoiGwqoDUyPdTyIkn4awyFMRjlNZzqLZeYY%2FUJBgZHFdsUKewXZLRKVT3IZliJB60Us6UKGWkG%2B3e2MJyi3cAGOqUBncPn%2F%2FkUSKXLN36bdeWDMwZ1VJDZQi%2FIiuvZFj4d%2BAbDaimMLuGHo%2FcY54BGSFPqL5SV93T5YaXVF2ZVS%2BLWo9o5goXd%2Fh9KVEPAUs9WHNVV%2FmCjdUuqtSxXEa0DPCdAuAVD1ZvAlfLPdUODtumPURBMzUJLwIkfIgkFtEWRa%2BEZ8cdvJyEntysaXQVx1MF7yehKGjywXXHq5c2sbDzd1xgV3R1r&X-Amz-Signature=f19cbed93da7775f61462e8f41c3721775b1086a8d88e350fa01a769cf74314c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ5X3JGU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGU2IDKk8Kj0JcBfAx1REYTlKlYz%2BSCNGA2CLcv2JosVAiEApUPMQPz90hUXt04NNIabGiJtFhpnA6MRhbuJKZw6q8Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDChiB%2BGhVuHUMEHMYyrcA8OtoU5Af2iDFyZssdjunjAUOpKNpo8luKSJ%2FyOKNsu2HFIoRQJcUrvcYLmmEyAvfOzUsDuGSjw5JxEj0lml99PvnHknbGtGe%2Fk5S12KzmjA%2BcHM5kw9OppqYVyBIsBMjLd%2Fd%2B24cl4k39oVWv5JiJHgtB0QQ0p%2FzY4wkIFCMB%2BAZPDebCOH52yBiunejltDmLEGwwS6%2FqHqDTLqHNnQwyv4dBx1ml2bMmGBJSuqjZ5jaaMaPkQ6c1QnK27ppVH0b9vBNFkKnznaUW99pXD5fn5vli32Wt2cu4Kxvk829GUL%2FvWF3yQQ2c09rRLZT5pY%2B0BOxeu8cO3K0o%2FRHN5voddLPTSY9S8ky9LsRTU69oLZ2b1HNryc89myC5%2BY1vLFsaMOLgGUTge5QOWAdAgI2EvL3FO7PuJSgqS3F07R%2FvljoYIsPhWTAixKnuafMnDkMPD8pj4gUp9AEJ1V92qhITve10Gj22O0KFD8IpjNurN4xousGTQWfi4noRqupCxCuKhrUVTrCYi2VvWayHqq3xOLsZT9jZJWFRXiMFK7q6N8WyJoiGwqoDUyPdTyIkn4awyFMRjlNZzqLZeYY%2FUJBgZHFdsUKewXZLRKVT3IZliJB60Us6UKGWkG%2B3e2MJyi3cAGOqUBncPn%2F%2FkUSKXLN36bdeWDMwZ1VJDZQi%2FIiuvZFj4d%2BAbDaimMLuGHo%2FcY54BGSFPqL5SV93T5YaXVF2ZVS%2BLWo9o5goXd%2Fh9KVEPAUs9WHNVV%2FmCjdUuqtSxXEa0DPCdAuAVD1ZvAlfLPdUODtumPURBMzUJLwIkfIgkFtEWRa%2BEZ8cdvJyEntysaXQVx1MF7yehKGjywXXHq5c2sbDzd1xgV3R1r&X-Amz-Signature=d759e5f43bb52828fa257e816c4a04ca3e29f8f72aea321dbfb32e39a319deaa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ5X3JGU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGU2IDKk8Kj0JcBfAx1REYTlKlYz%2BSCNGA2CLcv2JosVAiEApUPMQPz90hUXt04NNIabGiJtFhpnA6MRhbuJKZw6q8Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDChiB%2BGhVuHUMEHMYyrcA8OtoU5Af2iDFyZssdjunjAUOpKNpo8luKSJ%2FyOKNsu2HFIoRQJcUrvcYLmmEyAvfOzUsDuGSjw5JxEj0lml99PvnHknbGtGe%2Fk5S12KzmjA%2BcHM5kw9OppqYVyBIsBMjLd%2Fd%2B24cl4k39oVWv5JiJHgtB0QQ0p%2FzY4wkIFCMB%2BAZPDebCOH52yBiunejltDmLEGwwS6%2FqHqDTLqHNnQwyv4dBx1ml2bMmGBJSuqjZ5jaaMaPkQ6c1QnK27ppVH0b9vBNFkKnznaUW99pXD5fn5vli32Wt2cu4Kxvk829GUL%2FvWF3yQQ2c09rRLZT5pY%2B0BOxeu8cO3K0o%2FRHN5voddLPTSY9S8ky9LsRTU69oLZ2b1HNryc89myC5%2BY1vLFsaMOLgGUTge5QOWAdAgI2EvL3FO7PuJSgqS3F07R%2FvljoYIsPhWTAixKnuafMnDkMPD8pj4gUp9AEJ1V92qhITve10Gj22O0KFD8IpjNurN4xousGTQWfi4noRqupCxCuKhrUVTrCYi2VvWayHqq3xOLsZT9jZJWFRXiMFK7q6N8WyJoiGwqoDUyPdTyIkn4awyFMRjlNZzqLZeYY%2FUJBgZHFdsUKewXZLRKVT3IZliJB60Us6UKGWkG%2B3e2MJyi3cAGOqUBncPn%2F%2FkUSKXLN36bdeWDMwZ1VJDZQi%2FIiuvZFj4d%2BAbDaimMLuGHo%2FcY54BGSFPqL5SV93T5YaXVF2ZVS%2BLWo9o5goXd%2Fh9KVEPAUs9WHNVV%2FmCjdUuqtSxXEa0DPCdAuAVD1ZvAlfLPdUODtumPURBMzUJLwIkfIgkFtEWRa%2BEZ8cdvJyEntysaXQVx1MF7yehKGjywXXHq5c2sbDzd1xgV3R1r&X-Amz-Signature=9e812055b6ade1d0d925e96f26a7cdc8e677fbb67ab759c617fed051c7f109da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ5X3JGU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGU2IDKk8Kj0JcBfAx1REYTlKlYz%2BSCNGA2CLcv2JosVAiEApUPMQPz90hUXt04NNIabGiJtFhpnA6MRhbuJKZw6q8Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDChiB%2BGhVuHUMEHMYyrcA8OtoU5Af2iDFyZssdjunjAUOpKNpo8luKSJ%2FyOKNsu2HFIoRQJcUrvcYLmmEyAvfOzUsDuGSjw5JxEj0lml99PvnHknbGtGe%2Fk5S12KzmjA%2BcHM5kw9OppqYVyBIsBMjLd%2Fd%2B24cl4k39oVWv5JiJHgtB0QQ0p%2FzY4wkIFCMB%2BAZPDebCOH52yBiunejltDmLEGwwS6%2FqHqDTLqHNnQwyv4dBx1ml2bMmGBJSuqjZ5jaaMaPkQ6c1QnK27ppVH0b9vBNFkKnznaUW99pXD5fn5vli32Wt2cu4Kxvk829GUL%2FvWF3yQQ2c09rRLZT5pY%2B0BOxeu8cO3K0o%2FRHN5voddLPTSY9S8ky9LsRTU69oLZ2b1HNryc89myC5%2BY1vLFsaMOLgGUTge5QOWAdAgI2EvL3FO7PuJSgqS3F07R%2FvljoYIsPhWTAixKnuafMnDkMPD8pj4gUp9AEJ1V92qhITve10Gj22O0KFD8IpjNurN4xousGTQWfi4noRqupCxCuKhrUVTrCYi2VvWayHqq3xOLsZT9jZJWFRXiMFK7q6N8WyJoiGwqoDUyPdTyIkn4awyFMRjlNZzqLZeYY%2FUJBgZHFdsUKewXZLRKVT3IZliJB60Us6UKGWkG%2B3e2MJyi3cAGOqUBncPn%2F%2FkUSKXLN36bdeWDMwZ1VJDZQi%2FIiuvZFj4d%2BAbDaimMLuGHo%2FcY54BGSFPqL5SV93T5YaXVF2ZVS%2BLWo9o5goXd%2Fh9KVEPAUs9WHNVV%2FmCjdUuqtSxXEa0DPCdAuAVD1ZvAlfLPdUODtumPURBMzUJLwIkfIgkFtEWRa%2BEZ8cdvJyEntysaXQVx1MF7yehKGjywXXHq5c2sbDzd1xgV3R1r&X-Amz-Signature=b363b1b73afcbdf2f564324edc42a11363f396f0cb467b6d069894112795801f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ5X3JGU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGU2IDKk8Kj0JcBfAx1REYTlKlYz%2BSCNGA2CLcv2JosVAiEApUPMQPz90hUXt04NNIabGiJtFhpnA6MRhbuJKZw6q8Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDChiB%2BGhVuHUMEHMYyrcA8OtoU5Af2iDFyZssdjunjAUOpKNpo8luKSJ%2FyOKNsu2HFIoRQJcUrvcYLmmEyAvfOzUsDuGSjw5JxEj0lml99PvnHknbGtGe%2Fk5S12KzmjA%2BcHM5kw9OppqYVyBIsBMjLd%2Fd%2B24cl4k39oVWv5JiJHgtB0QQ0p%2FzY4wkIFCMB%2BAZPDebCOH52yBiunejltDmLEGwwS6%2FqHqDTLqHNnQwyv4dBx1ml2bMmGBJSuqjZ5jaaMaPkQ6c1QnK27ppVH0b9vBNFkKnznaUW99pXD5fn5vli32Wt2cu4Kxvk829GUL%2FvWF3yQQ2c09rRLZT5pY%2B0BOxeu8cO3K0o%2FRHN5voddLPTSY9S8ky9LsRTU69oLZ2b1HNryc89myC5%2BY1vLFsaMOLgGUTge5QOWAdAgI2EvL3FO7PuJSgqS3F07R%2FvljoYIsPhWTAixKnuafMnDkMPD8pj4gUp9AEJ1V92qhITve10Gj22O0KFD8IpjNurN4xousGTQWfi4noRqupCxCuKhrUVTrCYi2VvWayHqq3xOLsZT9jZJWFRXiMFK7q6N8WyJoiGwqoDUyPdTyIkn4awyFMRjlNZzqLZeYY%2FUJBgZHFdsUKewXZLRKVT3IZliJB60Us6UKGWkG%2B3e2MJyi3cAGOqUBncPn%2F%2FkUSKXLN36bdeWDMwZ1VJDZQi%2FIiuvZFj4d%2BAbDaimMLuGHo%2FcY54BGSFPqL5SV93T5YaXVF2ZVS%2BLWo9o5goXd%2Fh9KVEPAUs9WHNVV%2FmCjdUuqtSxXEa0DPCdAuAVD1ZvAlfLPdUODtumPURBMzUJLwIkfIgkFtEWRa%2BEZ8cdvJyEntysaXQVx1MF7yehKGjywXXHq5c2sbDzd1xgV3R1r&X-Amz-Signature=fd4f6259fb7377c3779c0f4243bce199833398bdde5de2673f2bffda48e10f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ5X3JGU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGU2IDKk8Kj0JcBfAx1REYTlKlYz%2BSCNGA2CLcv2JosVAiEApUPMQPz90hUXt04NNIabGiJtFhpnA6MRhbuJKZw6q8Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDChiB%2BGhVuHUMEHMYyrcA8OtoU5Af2iDFyZssdjunjAUOpKNpo8luKSJ%2FyOKNsu2HFIoRQJcUrvcYLmmEyAvfOzUsDuGSjw5JxEj0lml99PvnHknbGtGe%2Fk5S12KzmjA%2BcHM5kw9OppqYVyBIsBMjLd%2Fd%2B24cl4k39oVWv5JiJHgtB0QQ0p%2FzY4wkIFCMB%2BAZPDebCOH52yBiunejltDmLEGwwS6%2FqHqDTLqHNnQwyv4dBx1ml2bMmGBJSuqjZ5jaaMaPkQ6c1QnK27ppVH0b9vBNFkKnznaUW99pXD5fn5vli32Wt2cu4Kxvk829GUL%2FvWF3yQQ2c09rRLZT5pY%2B0BOxeu8cO3K0o%2FRHN5voddLPTSY9S8ky9LsRTU69oLZ2b1HNryc89myC5%2BY1vLFsaMOLgGUTge5QOWAdAgI2EvL3FO7PuJSgqS3F07R%2FvljoYIsPhWTAixKnuafMnDkMPD8pj4gUp9AEJ1V92qhITve10Gj22O0KFD8IpjNurN4xousGTQWfi4noRqupCxCuKhrUVTrCYi2VvWayHqq3xOLsZT9jZJWFRXiMFK7q6N8WyJoiGwqoDUyPdTyIkn4awyFMRjlNZzqLZeYY%2FUJBgZHFdsUKewXZLRKVT3IZliJB60Us6UKGWkG%2B3e2MJyi3cAGOqUBncPn%2F%2FkUSKXLN36bdeWDMwZ1VJDZQi%2FIiuvZFj4d%2BAbDaimMLuGHo%2FcY54BGSFPqL5SV93T5YaXVF2ZVS%2BLWo9o5goXd%2Fh9KVEPAUs9WHNVV%2FmCjdUuqtSxXEa0DPCdAuAVD1ZvAlfLPdUODtumPURBMzUJLwIkfIgkFtEWRa%2BEZ8cdvJyEntysaXQVx1MF7yehKGjywXXHq5c2sbDzd1xgV3R1r&X-Amz-Signature=492a25dfffdd80e7674922cad99613076687408c58e37b21eaa7e0ff4c45fe0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ5X3JGU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGU2IDKk8Kj0JcBfAx1REYTlKlYz%2BSCNGA2CLcv2JosVAiEApUPMQPz90hUXt04NNIabGiJtFhpnA6MRhbuJKZw6q8Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDChiB%2BGhVuHUMEHMYyrcA8OtoU5Af2iDFyZssdjunjAUOpKNpo8luKSJ%2FyOKNsu2HFIoRQJcUrvcYLmmEyAvfOzUsDuGSjw5JxEj0lml99PvnHknbGtGe%2Fk5S12KzmjA%2BcHM5kw9OppqYVyBIsBMjLd%2Fd%2B24cl4k39oVWv5JiJHgtB0QQ0p%2FzY4wkIFCMB%2BAZPDebCOH52yBiunejltDmLEGwwS6%2FqHqDTLqHNnQwyv4dBx1ml2bMmGBJSuqjZ5jaaMaPkQ6c1QnK27ppVH0b9vBNFkKnznaUW99pXD5fn5vli32Wt2cu4Kxvk829GUL%2FvWF3yQQ2c09rRLZT5pY%2B0BOxeu8cO3K0o%2FRHN5voddLPTSY9S8ky9LsRTU69oLZ2b1HNryc89myC5%2BY1vLFsaMOLgGUTge5QOWAdAgI2EvL3FO7PuJSgqS3F07R%2FvljoYIsPhWTAixKnuafMnDkMPD8pj4gUp9AEJ1V92qhITve10Gj22O0KFD8IpjNurN4xousGTQWfi4noRqupCxCuKhrUVTrCYi2VvWayHqq3xOLsZT9jZJWFRXiMFK7q6N8WyJoiGwqoDUyPdTyIkn4awyFMRjlNZzqLZeYY%2FUJBgZHFdsUKewXZLRKVT3IZliJB60Us6UKGWkG%2B3e2MJyi3cAGOqUBncPn%2F%2FkUSKXLN36bdeWDMwZ1VJDZQi%2FIiuvZFj4d%2BAbDaimMLuGHo%2FcY54BGSFPqL5SV93T5YaXVF2ZVS%2BLWo9o5goXd%2Fh9KVEPAUs9WHNVV%2FmCjdUuqtSxXEa0DPCdAuAVD1ZvAlfLPdUODtumPURBMzUJLwIkfIgkFtEWRa%2BEZ8cdvJyEntysaXQVx1MF7yehKGjywXXHq5c2sbDzd1xgV3R1r&X-Amz-Signature=442b83a3dee24d8883f44b08237b6a3c321538f27f2a43b2edcf5911d5537b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
