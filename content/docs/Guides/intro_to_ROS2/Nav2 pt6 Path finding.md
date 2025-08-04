---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=49b1e280794562f4a97fd876e87399132243a19007140b8f8cee0761fbd14904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=5a7e50b480ee7463b23ed11e72e5db47c3ee61dd00f0a8ad31d207496dbf9c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=4c76022b0e22e22767eabac95035a564f9259748ac49d5a9cc220338d1053126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=b70c7e951caa1a2be5ef4a49cf29dddc30d371a267f87b2b85edec54a5c20c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=cd57ad210eb4ff234182922656f7b66ce18a32a0ca23d45387eff159b0b3aa4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=9a8fd0568cc581ef20de33c19c24920e9c4fbdfbe6a31af5889a18a9a6571bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=cd3868f01b207f35c55de7e58c4891e48ec0fd94f9c5ec0bcf556b2b1f844b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=a765e9a80ddee136478b7fd3ef53afe200b9324620a04e617a9e956252953f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=7b1bf881eaa8207ae4dad5ea59f63fe10d02f12732cb799e1552d090c7df4f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=fd181fa240424d75f9806688c7742fe93b814e2d2143bbba06317f54951aae0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=5ad88abd550e15b009b9f6fed1c6182ed9a3aba43db60835ca306b67901fc28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=3ea487acd2342a0f69439cf5176b504ec57a947965553737b5abe87e771ef21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTMA6K2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCBmdcIjy3xRluoZeAgud3FqaRV0ZW9j8mlPsfgwIEjhwIgaDskE7OQUwBoqf4PtGhT%2BE8erbHVHJw%2BCRu7mExXgwUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPsFzlAi5F%2BY%2FLvoXircA%2Fd9TnW4RsyEoQH2lyataysVIG%2FuFUwDdHY%2FQzHs38S3BIgF%2FgxuQ%2BUIOfGh3a0uxZTqY0iBn%2BNzuCmlFmzq3yFqxLbz7Taqq67h1YduG9Pqu0QenuqnP68T%2B6qw056LvnJ80Mn8qWwvvX60t%2B%2BWf3%2Ba4d2rA11FkX0O%2B9yry8tSO4CcYh7PDLNsbp%2BD6WtE4j9beZAwSL52JTr%2Fe3uywu9c12pCmP2iyu6M0hmtquyL7ROR1lNqV3DSDoDHxyiektcty3eVPUl8UuCWMgHEeRkS6ne6fOZ92CsN7FM9GZwnRyrFp4E7icA8mxwUBVgmLZiXkQVJ41T7VsK%2F%2B6MppPvNr6HloVKPqUBZlp3EXlEQd1t%2FexAJOsy0CjwdFgWxJjVdifFftBYsDagqz50ItQV0IqAZ3kBlQmfLWB8Z%2FbzawD7NhJLmjCtqbdiFTkmATccgD%2F%2FS3HaN022NZmqhzyyVHTy49AxHPE6CYjg7tlXy5E9vQVJ61b9lhizNwxnb%2FvE%2Bmwd0JKXc4Nn8BTtY5j0M79QFGpKhT1AM2la09s7eusL%2BCAIC9SrUvnlJV4sroY90BQ4smR5i1zx%2FYK%2BzxgRQRYbZi5nNGhIeJ5SvBLs703WPRNHFXG%2BlIszxMOmcxMQGOqUBJdl6UL1Z9xDZnmWpQHinY5mBVjjeDZmsMIfn9%2BY4Rt24ZgcJTK5ulywEVtYZ%2FV%2BF705GUtAeWbY9Sa%2FMYMDYjNMyJTBQ5Gvwtz7zkLyN1iOrdHM6yfnzfx%2F%2B389nbPJbJIQeSPqrbAT7STm1D8FuN%2BfqzwxTGIpEw2heqI9WUjpLq7vI7dPRC4feLaMoDtvanrr8zTOaTOOp4OMsqz5i36nJ7Bdl&X-Amz-Signature=4f9ee1f571f03d765f7011866c4641b1dc35f0f84ddbec8feb2f9a5a0b1d1f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
                    'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
