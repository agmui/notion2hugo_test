---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZXDQLT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICkUQ6%2FUcvqVJbkMTW50VLNhQ506uj7k5PrTd9TReGzQAiEAu3M2KCEOXirO%2BH0XVNqefPg1nKvUBgpkYWZ7zbZmQOYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsFV3pasS2IiJeiQSrcA1CGhbbkOQBqXtVXcBxcwsnnHrXtp4ESh%2BpKbaflF6VM%2FULxp7gmjCILvNzAJYy5Fde0IQS%2FVJ6YZWk2NaVqtN9SJ4jN6vsXuenqdu5DFQnScM0YyLHAaM3fp4SAbQgCqhp2wOJFONzsgwy23bE2MdxoNIQH83kF7l9j%2FecwDt3i7AQhg%2B4r0B%2BsHVypj9Tdh2a3II9yXfOGroVorJ1%2BRr2HdhW7yPD8Nq%2B6I%2BFq2bTDLA%2BKOJ%2BG5XoOWg2NE%2BOjdaaoR%2FyXPBkyYfjk9b%2FmWf6HPauotPgNWRSWVG4JJevLRqnHAi%2FVhaW8jUMI0y7pA7N5Ju1O4tPb5J%2Fq54Y1WdURtwke1n2Mmitfdyuk6KqPSCI%2BsJCnfyPXgqUQ0t%2BopErV0szxa%2B%2FIG5gWDtJlawpeY9Q%2BAawF1Vg0xNkSKvKbzhAXDB0KJo8LKRHLO6JxOFBglvgo9O7BSIsheV4bkysk78yTdG2LNxASFffFXMtQX21k73TJUYW1CHuonBnXbexnKclCv%2F43byk77pQkDH%2BOxn5Mqd7tHPOfYUYaEaSGmb5MyieC3mkswGAMxOMdZvAsUTA1mWX0upgUkTIZq%2FME39G9YkmtWtTv%2FqzWGakrptGgb4KNr7P9qdS8MNT79b4GOqUBexyx%2FHajyL8VJaPc%2B1pSX7HYLoNf%2FArpLwvqKiWetepe2gYdd0iqfkxYqgfPmNItWPnQqpW7GVbDq89lKq54qr6MkvR65ggCoua3LKvjpIEi3%2Fjed0ZF9S5G7W7y3KGQ76r%2FjmbtL6qWO8AJH36iCy4YDs260gGax1BgaB13e%2Fje07puoREk9ZOFb5Q3qyoN9xalAubCunhHpJgIuSN5pxfsMJE%2B&X-Amz-Signature=1f47a3b23f1d9e8f084257bccb91a541073cf4a032bd888e38a659c48fc77444&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZXDQLT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICkUQ6%2FUcvqVJbkMTW50VLNhQ506uj7k5PrTd9TReGzQAiEAu3M2KCEOXirO%2BH0XVNqefPg1nKvUBgpkYWZ7zbZmQOYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsFV3pasS2IiJeiQSrcA1CGhbbkOQBqXtVXcBxcwsnnHrXtp4ESh%2BpKbaflF6VM%2FULxp7gmjCILvNzAJYy5Fde0IQS%2FVJ6YZWk2NaVqtN9SJ4jN6vsXuenqdu5DFQnScM0YyLHAaM3fp4SAbQgCqhp2wOJFONzsgwy23bE2MdxoNIQH83kF7l9j%2FecwDt3i7AQhg%2B4r0B%2BsHVypj9Tdh2a3II9yXfOGroVorJ1%2BRr2HdhW7yPD8Nq%2B6I%2BFq2bTDLA%2BKOJ%2BG5XoOWg2NE%2BOjdaaoR%2FyXPBkyYfjk9b%2FmWf6HPauotPgNWRSWVG4JJevLRqnHAi%2FVhaW8jUMI0y7pA7N5Ju1O4tPb5J%2Fq54Y1WdURtwke1n2Mmitfdyuk6KqPSCI%2BsJCnfyPXgqUQ0t%2BopErV0szxa%2B%2FIG5gWDtJlawpeY9Q%2BAawF1Vg0xNkSKvKbzhAXDB0KJo8LKRHLO6JxOFBglvgo9O7BSIsheV4bkysk78yTdG2LNxASFffFXMtQX21k73TJUYW1CHuonBnXbexnKclCv%2F43byk77pQkDH%2BOxn5Mqd7tHPOfYUYaEaSGmb5MyieC3mkswGAMxOMdZvAsUTA1mWX0upgUkTIZq%2FME39G9YkmtWtTv%2FqzWGakrptGgb4KNr7P9qdS8MNT79b4GOqUBexyx%2FHajyL8VJaPc%2B1pSX7HYLoNf%2FArpLwvqKiWetepe2gYdd0iqfkxYqgfPmNItWPnQqpW7GVbDq89lKq54qr6MkvR65ggCoua3LKvjpIEi3%2Fjed0ZF9S5G7W7y3KGQ76r%2FjmbtL6qWO8AJH36iCy4YDs260gGax1BgaB13e%2Fje07puoREk9ZOFb5Q3qyoN9xalAubCunhHpJgIuSN5pxfsMJE%2B&X-Amz-Signature=18f85b00d4abbbf818476b09e96fbb4d2b473adb4185ba05cbc192dc25d26874&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZXDQLT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICkUQ6%2FUcvqVJbkMTW50VLNhQ506uj7k5PrTd9TReGzQAiEAu3M2KCEOXirO%2BH0XVNqefPg1nKvUBgpkYWZ7zbZmQOYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsFV3pasS2IiJeiQSrcA1CGhbbkOQBqXtVXcBxcwsnnHrXtp4ESh%2BpKbaflF6VM%2FULxp7gmjCILvNzAJYy5Fde0IQS%2FVJ6YZWk2NaVqtN9SJ4jN6vsXuenqdu5DFQnScM0YyLHAaM3fp4SAbQgCqhp2wOJFONzsgwy23bE2MdxoNIQH83kF7l9j%2FecwDt3i7AQhg%2B4r0B%2BsHVypj9Tdh2a3II9yXfOGroVorJ1%2BRr2HdhW7yPD8Nq%2B6I%2BFq2bTDLA%2BKOJ%2BG5XoOWg2NE%2BOjdaaoR%2FyXPBkyYfjk9b%2FmWf6HPauotPgNWRSWVG4JJevLRqnHAi%2FVhaW8jUMI0y7pA7N5Ju1O4tPb5J%2Fq54Y1WdURtwke1n2Mmitfdyuk6KqPSCI%2BsJCnfyPXgqUQ0t%2BopErV0szxa%2B%2FIG5gWDtJlawpeY9Q%2BAawF1Vg0xNkSKvKbzhAXDB0KJo8LKRHLO6JxOFBglvgo9O7BSIsheV4bkysk78yTdG2LNxASFffFXMtQX21k73TJUYW1CHuonBnXbexnKclCv%2F43byk77pQkDH%2BOxn5Mqd7tHPOfYUYaEaSGmb5MyieC3mkswGAMxOMdZvAsUTA1mWX0upgUkTIZq%2FME39G9YkmtWtTv%2FqzWGakrptGgb4KNr7P9qdS8MNT79b4GOqUBexyx%2FHajyL8VJaPc%2B1pSX7HYLoNf%2FArpLwvqKiWetepe2gYdd0iqfkxYqgfPmNItWPnQqpW7GVbDq89lKq54qr6MkvR65ggCoua3LKvjpIEi3%2Fjed0ZF9S5G7W7y3KGQ76r%2FjmbtL6qWO8AJH36iCy4YDs260gGax1BgaB13e%2Fje07puoREk9ZOFb5Q3qyoN9xalAubCunhHpJgIuSN5pxfsMJE%2B&X-Amz-Signature=978ebc67d40df923717582e4db76c17d958a1bedcbebf8078ac143d62abcc457&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZXDQLT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICkUQ6%2FUcvqVJbkMTW50VLNhQ506uj7k5PrTd9TReGzQAiEAu3M2KCEOXirO%2BH0XVNqefPg1nKvUBgpkYWZ7zbZmQOYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsFV3pasS2IiJeiQSrcA1CGhbbkOQBqXtVXcBxcwsnnHrXtp4ESh%2BpKbaflF6VM%2FULxp7gmjCILvNzAJYy5Fde0IQS%2FVJ6YZWk2NaVqtN9SJ4jN6vsXuenqdu5DFQnScM0YyLHAaM3fp4SAbQgCqhp2wOJFONzsgwy23bE2MdxoNIQH83kF7l9j%2FecwDt3i7AQhg%2B4r0B%2BsHVypj9Tdh2a3II9yXfOGroVorJ1%2BRr2HdhW7yPD8Nq%2B6I%2BFq2bTDLA%2BKOJ%2BG5XoOWg2NE%2BOjdaaoR%2FyXPBkyYfjk9b%2FmWf6HPauotPgNWRSWVG4JJevLRqnHAi%2FVhaW8jUMI0y7pA7N5Ju1O4tPb5J%2Fq54Y1WdURtwke1n2Mmitfdyuk6KqPSCI%2BsJCnfyPXgqUQ0t%2BopErV0szxa%2B%2FIG5gWDtJlawpeY9Q%2BAawF1Vg0xNkSKvKbzhAXDB0KJo8LKRHLO6JxOFBglvgo9O7BSIsheV4bkysk78yTdG2LNxASFffFXMtQX21k73TJUYW1CHuonBnXbexnKclCv%2F43byk77pQkDH%2BOxn5Mqd7tHPOfYUYaEaSGmb5MyieC3mkswGAMxOMdZvAsUTA1mWX0upgUkTIZq%2FME39G9YkmtWtTv%2FqzWGakrptGgb4KNr7P9qdS8MNT79b4GOqUBexyx%2FHajyL8VJaPc%2B1pSX7HYLoNf%2FArpLwvqKiWetepe2gYdd0iqfkxYqgfPmNItWPnQqpW7GVbDq89lKq54qr6MkvR65ggCoua3LKvjpIEi3%2Fjed0ZF9S5G7W7y3KGQ76r%2FjmbtL6qWO8AJH36iCy4YDs260gGax1BgaB13e%2Fje07puoREk9ZOFb5Q3qyoN9xalAubCunhHpJgIuSN5pxfsMJE%2B&X-Amz-Signature=b8f42913115b8da16ed837cb3f72a3ecbb24eb02da08c146f4a2d348e7ee73ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZXDQLT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICkUQ6%2FUcvqVJbkMTW50VLNhQ506uj7k5PrTd9TReGzQAiEAu3M2KCEOXirO%2BH0XVNqefPg1nKvUBgpkYWZ7zbZmQOYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsFV3pasS2IiJeiQSrcA1CGhbbkOQBqXtVXcBxcwsnnHrXtp4ESh%2BpKbaflF6VM%2FULxp7gmjCILvNzAJYy5Fde0IQS%2FVJ6YZWk2NaVqtN9SJ4jN6vsXuenqdu5DFQnScM0YyLHAaM3fp4SAbQgCqhp2wOJFONzsgwy23bE2MdxoNIQH83kF7l9j%2FecwDt3i7AQhg%2B4r0B%2BsHVypj9Tdh2a3II9yXfOGroVorJ1%2BRr2HdhW7yPD8Nq%2B6I%2BFq2bTDLA%2BKOJ%2BG5XoOWg2NE%2BOjdaaoR%2FyXPBkyYfjk9b%2FmWf6HPauotPgNWRSWVG4JJevLRqnHAi%2FVhaW8jUMI0y7pA7N5Ju1O4tPb5J%2Fq54Y1WdURtwke1n2Mmitfdyuk6KqPSCI%2BsJCnfyPXgqUQ0t%2BopErV0szxa%2B%2FIG5gWDtJlawpeY9Q%2BAawF1Vg0xNkSKvKbzhAXDB0KJo8LKRHLO6JxOFBglvgo9O7BSIsheV4bkysk78yTdG2LNxASFffFXMtQX21k73TJUYW1CHuonBnXbexnKclCv%2F43byk77pQkDH%2BOxn5Mqd7tHPOfYUYaEaSGmb5MyieC3mkswGAMxOMdZvAsUTA1mWX0upgUkTIZq%2FME39G9YkmtWtTv%2FqzWGakrptGgb4KNr7P9qdS8MNT79b4GOqUBexyx%2FHajyL8VJaPc%2B1pSX7HYLoNf%2FArpLwvqKiWetepe2gYdd0iqfkxYqgfPmNItWPnQqpW7GVbDq89lKq54qr6MkvR65ggCoua3LKvjpIEi3%2Fjed0ZF9S5G7W7y3KGQ76r%2FjmbtL6qWO8AJH36iCy4YDs260gGax1BgaB13e%2Fje07puoREk9ZOFb5Q3qyoN9xalAubCunhHpJgIuSN5pxfsMJE%2B&X-Amz-Signature=e4a41436a2517dcf80bb149c6305442ebf8b70aabb434e3704cc7320f6a46812&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZXDQLT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICkUQ6%2FUcvqVJbkMTW50VLNhQ506uj7k5PrTd9TReGzQAiEAu3M2KCEOXirO%2BH0XVNqefPg1nKvUBgpkYWZ7zbZmQOYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsFV3pasS2IiJeiQSrcA1CGhbbkOQBqXtVXcBxcwsnnHrXtp4ESh%2BpKbaflF6VM%2FULxp7gmjCILvNzAJYy5Fde0IQS%2FVJ6YZWk2NaVqtN9SJ4jN6vsXuenqdu5DFQnScM0YyLHAaM3fp4SAbQgCqhp2wOJFONzsgwy23bE2MdxoNIQH83kF7l9j%2FecwDt3i7AQhg%2B4r0B%2BsHVypj9Tdh2a3II9yXfOGroVorJ1%2BRr2HdhW7yPD8Nq%2B6I%2BFq2bTDLA%2BKOJ%2BG5XoOWg2NE%2BOjdaaoR%2FyXPBkyYfjk9b%2FmWf6HPauotPgNWRSWVG4JJevLRqnHAi%2FVhaW8jUMI0y7pA7N5Ju1O4tPb5J%2Fq54Y1WdURtwke1n2Mmitfdyuk6KqPSCI%2BsJCnfyPXgqUQ0t%2BopErV0szxa%2B%2FIG5gWDtJlawpeY9Q%2BAawF1Vg0xNkSKvKbzhAXDB0KJo8LKRHLO6JxOFBglvgo9O7BSIsheV4bkysk78yTdG2LNxASFffFXMtQX21k73TJUYW1CHuonBnXbexnKclCv%2F43byk77pQkDH%2BOxn5Mqd7tHPOfYUYaEaSGmb5MyieC3mkswGAMxOMdZvAsUTA1mWX0upgUkTIZq%2FME39G9YkmtWtTv%2FqzWGakrptGgb4KNr7P9qdS8MNT79b4GOqUBexyx%2FHajyL8VJaPc%2B1pSX7HYLoNf%2FArpLwvqKiWetepe2gYdd0iqfkxYqgfPmNItWPnQqpW7GVbDq89lKq54qr6MkvR65ggCoua3LKvjpIEi3%2Fjed0ZF9S5G7W7y3KGQ76r%2FjmbtL6qWO8AJH36iCy4YDs260gGax1BgaB13e%2Fje07puoREk9ZOFb5Q3qyoN9xalAubCunhHpJgIuSN5pxfsMJE%2B&X-Amz-Signature=710f0914cf6e1460ea61b9803714167a1a6dff13861ef02e8916bea94e17788c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZXDQLT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICkUQ6%2FUcvqVJbkMTW50VLNhQ506uj7k5PrTd9TReGzQAiEAu3M2KCEOXirO%2BH0XVNqefPg1nKvUBgpkYWZ7zbZmQOYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsFV3pasS2IiJeiQSrcA1CGhbbkOQBqXtVXcBxcwsnnHrXtp4ESh%2BpKbaflF6VM%2FULxp7gmjCILvNzAJYy5Fde0IQS%2FVJ6YZWk2NaVqtN9SJ4jN6vsXuenqdu5DFQnScM0YyLHAaM3fp4SAbQgCqhp2wOJFONzsgwy23bE2MdxoNIQH83kF7l9j%2FecwDt3i7AQhg%2B4r0B%2BsHVypj9Tdh2a3II9yXfOGroVorJ1%2BRr2HdhW7yPD8Nq%2B6I%2BFq2bTDLA%2BKOJ%2BG5XoOWg2NE%2BOjdaaoR%2FyXPBkyYfjk9b%2FmWf6HPauotPgNWRSWVG4JJevLRqnHAi%2FVhaW8jUMI0y7pA7N5Ju1O4tPb5J%2Fq54Y1WdURtwke1n2Mmitfdyuk6KqPSCI%2BsJCnfyPXgqUQ0t%2BopErV0szxa%2B%2FIG5gWDtJlawpeY9Q%2BAawF1Vg0xNkSKvKbzhAXDB0KJo8LKRHLO6JxOFBglvgo9O7BSIsheV4bkysk78yTdG2LNxASFffFXMtQX21k73TJUYW1CHuonBnXbexnKclCv%2F43byk77pQkDH%2BOxn5Mqd7tHPOfYUYaEaSGmb5MyieC3mkswGAMxOMdZvAsUTA1mWX0upgUkTIZq%2FME39G9YkmtWtTv%2FqzWGakrptGgb4KNr7P9qdS8MNT79b4GOqUBexyx%2FHajyL8VJaPc%2B1pSX7HYLoNf%2FArpLwvqKiWetepe2gYdd0iqfkxYqgfPmNItWPnQqpW7GVbDq89lKq54qr6MkvR65ggCoua3LKvjpIEi3%2Fjed0ZF9S5G7W7y3KGQ76r%2FjmbtL6qWO8AJH36iCy4YDs260gGax1BgaB13e%2Fje07puoREk9ZOFb5Q3qyoN9xalAubCunhHpJgIuSN5pxfsMJE%2B&X-Amz-Signature=f965d28a46b82d13b4de86d8ee7981ffaf5f396ecac62745d7f287573b49d252&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
