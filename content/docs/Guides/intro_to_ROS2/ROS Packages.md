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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6XWEPD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fzj8h0r2fawsTFNuu%2BtebN1pb6WMjUwEA8lU5sQbKIgIgZSxPtWAk0tiaUjDw2qBBlyzjRP%2FlrTKBJd0fFbvTCp8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGDyzp85QYTtXcdfYCrcA6kGdKTHzdVyZ61YdcKPmAXZA7TkXj8tUpf3ZayuqjW2s8419SuU4D%2FEgSZj8C4lLGXTCkzQf5m%2B7J3SI1rdmjdugN96CML8JU9x5ciNK0QK2TcqGUaX2ttDhH4INDNsF78hIaleg%2BtVZzH4g2%2BpY%2Fnxn9544A5sQiN92dkeeukuDqGiYyA82y1fVpO8kcVg%2BanVHgk0kt%2FKpwkF64fnFGozkyR2QBiiHroTCJLjA1PKuaC%2BCShvyspe2gPkr0uYzAAa0C4bJmH5oRULVz%2B%2F4irrFXvX8ec7Z8KY%2BaRkxZKNCD0MaUq5sEuhWAMVlU%2BrWxLnCXk1yMb03MjwH4OI4JXiwnF7cdScM%2BiYF77XTd57gU7jf%2FMhBPcLAKdIIYLgKFc7zNn2FmzPcw29%2Bh2zgEg6mEaFN3qbC6IKOn466LnAPqi8BGuSrpUXcVGuhJ8NqYIBccq1PQlro1gFeYHNCevRieuFNedRQxmKydnyjeE179oHo%2Bjq7cbthBnH5GjGF3rf1AU0jaBP3lLcGSz9%2BShLwFQ2TU4xFRXWqEcmIQPJ%2FbOeNJ7FE5TFxgdQ9Vp%2BNf4MH%2FQV2Ia5aCqgkkktU%2FWg1VtdFU91WJvsZ0Axo5nbsVWMiwoUugtk8Fd5MIWX2MEGOqUBtT4rGNeHLBcRvzB2vSZ9P86FRm%2B2%2B2PvRdDmI5z%2BznSh%2FgWm5z8RUu5XJ6ycnXh4yvEuN67gZ5FTIcJbCyH2%2BkIEzYM5UyUQs7yRQNNvE%2BGKM5osGGuOX4MOeB7ZCNqGvxyC6IPB8Z%2FcBIugVZImyIOmgN6GVSs2WRsX82kHcdzcUZc19FrzTFeNUFtc2ujpKNEgA%2B4dRafLieMqOhP2t%2B79SWFV&X-Amz-Signature=5e657f05e4f26b8ebc3b3913daab1c097786aeab7bff36b97a46823456aecdc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6XWEPD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fzj8h0r2fawsTFNuu%2BtebN1pb6WMjUwEA8lU5sQbKIgIgZSxPtWAk0tiaUjDw2qBBlyzjRP%2FlrTKBJd0fFbvTCp8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGDyzp85QYTtXcdfYCrcA6kGdKTHzdVyZ61YdcKPmAXZA7TkXj8tUpf3ZayuqjW2s8419SuU4D%2FEgSZj8C4lLGXTCkzQf5m%2B7J3SI1rdmjdugN96CML8JU9x5ciNK0QK2TcqGUaX2ttDhH4INDNsF78hIaleg%2BtVZzH4g2%2BpY%2Fnxn9544A5sQiN92dkeeukuDqGiYyA82y1fVpO8kcVg%2BanVHgk0kt%2FKpwkF64fnFGozkyR2QBiiHroTCJLjA1PKuaC%2BCShvyspe2gPkr0uYzAAa0C4bJmH5oRULVz%2B%2F4irrFXvX8ec7Z8KY%2BaRkxZKNCD0MaUq5sEuhWAMVlU%2BrWxLnCXk1yMb03MjwH4OI4JXiwnF7cdScM%2BiYF77XTd57gU7jf%2FMhBPcLAKdIIYLgKFc7zNn2FmzPcw29%2Bh2zgEg6mEaFN3qbC6IKOn466LnAPqi8BGuSrpUXcVGuhJ8NqYIBccq1PQlro1gFeYHNCevRieuFNedRQxmKydnyjeE179oHo%2Bjq7cbthBnH5GjGF3rf1AU0jaBP3lLcGSz9%2BShLwFQ2TU4xFRXWqEcmIQPJ%2FbOeNJ7FE5TFxgdQ9Vp%2BNf4MH%2FQV2Ia5aCqgkkktU%2FWg1VtdFU91WJvsZ0Axo5nbsVWMiwoUugtk8Fd5MIWX2MEGOqUBtT4rGNeHLBcRvzB2vSZ9P86FRm%2B2%2B2PvRdDmI5z%2BznSh%2FgWm5z8RUu5XJ6ycnXh4yvEuN67gZ5FTIcJbCyH2%2BkIEzYM5UyUQs7yRQNNvE%2BGKM5osGGuOX4MOeB7ZCNqGvxyC6IPB8Z%2FcBIugVZImyIOmgN6GVSs2WRsX82kHcdzcUZc19FrzTFeNUFtc2ujpKNEgA%2B4dRafLieMqOhP2t%2B79SWFV&X-Amz-Signature=64da67ebd2cdc4cf6c9720255d13db553a93005cc8ba98cf7afdf4aa6b356a51&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6XWEPD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fzj8h0r2fawsTFNuu%2BtebN1pb6WMjUwEA8lU5sQbKIgIgZSxPtWAk0tiaUjDw2qBBlyzjRP%2FlrTKBJd0fFbvTCp8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGDyzp85QYTtXcdfYCrcA6kGdKTHzdVyZ61YdcKPmAXZA7TkXj8tUpf3ZayuqjW2s8419SuU4D%2FEgSZj8C4lLGXTCkzQf5m%2B7J3SI1rdmjdugN96CML8JU9x5ciNK0QK2TcqGUaX2ttDhH4INDNsF78hIaleg%2BtVZzH4g2%2BpY%2Fnxn9544A5sQiN92dkeeukuDqGiYyA82y1fVpO8kcVg%2BanVHgk0kt%2FKpwkF64fnFGozkyR2QBiiHroTCJLjA1PKuaC%2BCShvyspe2gPkr0uYzAAa0C4bJmH5oRULVz%2B%2F4irrFXvX8ec7Z8KY%2BaRkxZKNCD0MaUq5sEuhWAMVlU%2BrWxLnCXk1yMb03MjwH4OI4JXiwnF7cdScM%2BiYF77XTd57gU7jf%2FMhBPcLAKdIIYLgKFc7zNn2FmzPcw29%2Bh2zgEg6mEaFN3qbC6IKOn466LnAPqi8BGuSrpUXcVGuhJ8NqYIBccq1PQlro1gFeYHNCevRieuFNedRQxmKydnyjeE179oHo%2Bjq7cbthBnH5GjGF3rf1AU0jaBP3lLcGSz9%2BShLwFQ2TU4xFRXWqEcmIQPJ%2FbOeNJ7FE5TFxgdQ9Vp%2BNf4MH%2FQV2Ia5aCqgkkktU%2FWg1VtdFU91WJvsZ0Axo5nbsVWMiwoUugtk8Fd5MIWX2MEGOqUBtT4rGNeHLBcRvzB2vSZ9P86FRm%2B2%2B2PvRdDmI5z%2BznSh%2FgWm5z8RUu5XJ6ycnXh4yvEuN67gZ5FTIcJbCyH2%2BkIEzYM5UyUQs7yRQNNvE%2BGKM5osGGuOX4MOeB7ZCNqGvxyC6IPB8Z%2FcBIugVZImyIOmgN6GVSs2WRsX82kHcdzcUZc19FrzTFeNUFtc2ujpKNEgA%2B4dRafLieMqOhP2t%2B79SWFV&X-Amz-Signature=1d3b4b2036a3bb4a0fdca2ab399315c7210045cf5f81c22352e313634564fca5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6XWEPD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fzj8h0r2fawsTFNuu%2BtebN1pb6WMjUwEA8lU5sQbKIgIgZSxPtWAk0tiaUjDw2qBBlyzjRP%2FlrTKBJd0fFbvTCp8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGDyzp85QYTtXcdfYCrcA6kGdKTHzdVyZ61YdcKPmAXZA7TkXj8tUpf3ZayuqjW2s8419SuU4D%2FEgSZj8C4lLGXTCkzQf5m%2B7J3SI1rdmjdugN96CML8JU9x5ciNK0QK2TcqGUaX2ttDhH4INDNsF78hIaleg%2BtVZzH4g2%2BpY%2Fnxn9544A5sQiN92dkeeukuDqGiYyA82y1fVpO8kcVg%2BanVHgk0kt%2FKpwkF64fnFGozkyR2QBiiHroTCJLjA1PKuaC%2BCShvyspe2gPkr0uYzAAa0C4bJmH5oRULVz%2B%2F4irrFXvX8ec7Z8KY%2BaRkxZKNCD0MaUq5sEuhWAMVlU%2BrWxLnCXk1yMb03MjwH4OI4JXiwnF7cdScM%2BiYF77XTd57gU7jf%2FMhBPcLAKdIIYLgKFc7zNn2FmzPcw29%2Bh2zgEg6mEaFN3qbC6IKOn466LnAPqi8BGuSrpUXcVGuhJ8NqYIBccq1PQlro1gFeYHNCevRieuFNedRQxmKydnyjeE179oHo%2Bjq7cbthBnH5GjGF3rf1AU0jaBP3lLcGSz9%2BShLwFQ2TU4xFRXWqEcmIQPJ%2FbOeNJ7FE5TFxgdQ9Vp%2BNf4MH%2FQV2Ia5aCqgkkktU%2FWg1VtdFU91WJvsZ0Axo5nbsVWMiwoUugtk8Fd5MIWX2MEGOqUBtT4rGNeHLBcRvzB2vSZ9P86FRm%2B2%2B2PvRdDmI5z%2BznSh%2FgWm5z8RUu5XJ6ycnXh4yvEuN67gZ5FTIcJbCyH2%2BkIEzYM5UyUQs7yRQNNvE%2BGKM5osGGuOX4MOeB7ZCNqGvxyC6IPB8Z%2FcBIugVZImyIOmgN6GVSs2WRsX82kHcdzcUZc19FrzTFeNUFtc2ujpKNEgA%2B4dRafLieMqOhP2t%2B79SWFV&X-Amz-Signature=5f56608e63614035fe93c214157625d62ffc010a9f7e0949130e9f74f54b0645&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6XWEPD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fzj8h0r2fawsTFNuu%2BtebN1pb6WMjUwEA8lU5sQbKIgIgZSxPtWAk0tiaUjDw2qBBlyzjRP%2FlrTKBJd0fFbvTCp8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGDyzp85QYTtXcdfYCrcA6kGdKTHzdVyZ61YdcKPmAXZA7TkXj8tUpf3ZayuqjW2s8419SuU4D%2FEgSZj8C4lLGXTCkzQf5m%2B7J3SI1rdmjdugN96CML8JU9x5ciNK0QK2TcqGUaX2ttDhH4INDNsF78hIaleg%2BtVZzH4g2%2BpY%2Fnxn9544A5sQiN92dkeeukuDqGiYyA82y1fVpO8kcVg%2BanVHgk0kt%2FKpwkF64fnFGozkyR2QBiiHroTCJLjA1PKuaC%2BCShvyspe2gPkr0uYzAAa0C4bJmH5oRULVz%2B%2F4irrFXvX8ec7Z8KY%2BaRkxZKNCD0MaUq5sEuhWAMVlU%2BrWxLnCXk1yMb03MjwH4OI4JXiwnF7cdScM%2BiYF77XTd57gU7jf%2FMhBPcLAKdIIYLgKFc7zNn2FmzPcw29%2Bh2zgEg6mEaFN3qbC6IKOn466LnAPqi8BGuSrpUXcVGuhJ8NqYIBccq1PQlro1gFeYHNCevRieuFNedRQxmKydnyjeE179oHo%2Bjq7cbthBnH5GjGF3rf1AU0jaBP3lLcGSz9%2BShLwFQ2TU4xFRXWqEcmIQPJ%2FbOeNJ7FE5TFxgdQ9Vp%2BNf4MH%2FQV2Ia5aCqgkkktU%2FWg1VtdFU91WJvsZ0Axo5nbsVWMiwoUugtk8Fd5MIWX2MEGOqUBtT4rGNeHLBcRvzB2vSZ9P86FRm%2B2%2B2PvRdDmI5z%2BznSh%2FgWm5z8RUu5XJ6ycnXh4yvEuN67gZ5FTIcJbCyH2%2BkIEzYM5UyUQs7yRQNNvE%2BGKM5osGGuOX4MOeB7ZCNqGvxyC6IPB8Z%2FcBIugVZImyIOmgN6GVSs2WRsX82kHcdzcUZc19FrzTFeNUFtc2ujpKNEgA%2B4dRafLieMqOhP2t%2B79SWFV&X-Amz-Signature=f90cf67e6c328630a0dfbce5cce7bd0505bdc8a7fbff4855eacd3bbe5fdf8779&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6XWEPD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fzj8h0r2fawsTFNuu%2BtebN1pb6WMjUwEA8lU5sQbKIgIgZSxPtWAk0tiaUjDw2qBBlyzjRP%2FlrTKBJd0fFbvTCp8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGDyzp85QYTtXcdfYCrcA6kGdKTHzdVyZ61YdcKPmAXZA7TkXj8tUpf3ZayuqjW2s8419SuU4D%2FEgSZj8C4lLGXTCkzQf5m%2B7J3SI1rdmjdugN96CML8JU9x5ciNK0QK2TcqGUaX2ttDhH4INDNsF78hIaleg%2BtVZzH4g2%2BpY%2Fnxn9544A5sQiN92dkeeukuDqGiYyA82y1fVpO8kcVg%2BanVHgk0kt%2FKpwkF64fnFGozkyR2QBiiHroTCJLjA1PKuaC%2BCShvyspe2gPkr0uYzAAa0C4bJmH5oRULVz%2B%2F4irrFXvX8ec7Z8KY%2BaRkxZKNCD0MaUq5sEuhWAMVlU%2BrWxLnCXk1yMb03MjwH4OI4JXiwnF7cdScM%2BiYF77XTd57gU7jf%2FMhBPcLAKdIIYLgKFc7zNn2FmzPcw29%2Bh2zgEg6mEaFN3qbC6IKOn466LnAPqi8BGuSrpUXcVGuhJ8NqYIBccq1PQlro1gFeYHNCevRieuFNedRQxmKydnyjeE179oHo%2Bjq7cbthBnH5GjGF3rf1AU0jaBP3lLcGSz9%2BShLwFQ2TU4xFRXWqEcmIQPJ%2FbOeNJ7FE5TFxgdQ9Vp%2BNf4MH%2FQV2Ia5aCqgkkktU%2FWg1VtdFU91WJvsZ0Axo5nbsVWMiwoUugtk8Fd5MIWX2MEGOqUBtT4rGNeHLBcRvzB2vSZ9P86FRm%2B2%2B2PvRdDmI5z%2BznSh%2FgWm5z8RUu5XJ6ycnXh4yvEuN67gZ5FTIcJbCyH2%2BkIEzYM5UyUQs7yRQNNvE%2BGKM5osGGuOX4MOeB7ZCNqGvxyC6IPB8Z%2FcBIugVZImyIOmgN6GVSs2WRsX82kHcdzcUZc19FrzTFeNUFtc2ujpKNEgA%2B4dRafLieMqOhP2t%2B79SWFV&X-Amz-Signature=1d6dad0098fe38f466be790557d91bd0b1583fd3d0103b6a240f390823e638ac&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6XWEPD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fzj8h0r2fawsTFNuu%2BtebN1pb6WMjUwEA8lU5sQbKIgIgZSxPtWAk0tiaUjDw2qBBlyzjRP%2FlrTKBJd0fFbvTCp8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGDyzp85QYTtXcdfYCrcA6kGdKTHzdVyZ61YdcKPmAXZA7TkXj8tUpf3ZayuqjW2s8419SuU4D%2FEgSZj8C4lLGXTCkzQf5m%2B7J3SI1rdmjdugN96CML8JU9x5ciNK0QK2TcqGUaX2ttDhH4INDNsF78hIaleg%2BtVZzH4g2%2BpY%2Fnxn9544A5sQiN92dkeeukuDqGiYyA82y1fVpO8kcVg%2BanVHgk0kt%2FKpwkF64fnFGozkyR2QBiiHroTCJLjA1PKuaC%2BCShvyspe2gPkr0uYzAAa0C4bJmH5oRULVz%2B%2F4irrFXvX8ec7Z8KY%2BaRkxZKNCD0MaUq5sEuhWAMVlU%2BrWxLnCXk1yMb03MjwH4OI4JXiwnF7cdScM%2BiYF77XTd57gU7jf%2FMhBPcLAKdIIYLgKFc7zNn2FmzPcw29%2Bh2zgEg6mEaFN3qbC6IKOn466LnAPqi8BGuSrpUXcVGuhJ8NqYIBccq1PQlro1gFeYHNCevRieuFNedRQxmKydnyjeE179oHo%2Bjq7cbthBnH5GjGF3rf1AU0jaBP3lLcGSz9%2BShLwFQ2TU4xFRXWqEcmIQPJ%2FbOeNJ7FE5TFxgdQ9Vp%2BNf4MH%2FQV2Ia5aCqgkkktU%2FWg1VtdFU91WJvsZ0Axo5nbsVWMiwoUugtk8Fd5MIWX2MEGOqUBtT4rGNeHLBcRvzB2vSZ9P86FRm%2B2%2B2PvRdDmI5z%2BznSh%2FgWm5z8RUu5XJ6ycnXh4yvEuN67gZ5FTIcJbCyH2%2BkIEzYM5UyUQs7yRQNNvE%2BGKM5osGGuOX4MOeB7ZCNqGvxyC6IPB8Z%2FcBIugVZImyIOmgN6GVSs2WRsX82kHcdzcUZc19FrzTFeNUFtc2ujpKNEgA%2B4dRafLieMqOhP2t%2B79SWFV&X-Amz-Signature=a8a51a0f71331ebb802a3a52cf32fd1180ce4b9ff7d221d74680c35afc242cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
