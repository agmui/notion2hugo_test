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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCBEUNK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVvtIzZbI2g%2FQDKQmaKrDs%2FZu7mU6vlZfrncxFJELMiAiEAuTtt0AM8ZFCe3HuZexvG6Om4fTehiGDHTO%2FkXpIgu8cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3QapVpFxrgK%2FLShSrcA0%2Br3lEhURN158whtlXfiqrEFH7B3KJj%2FdgADsZc9saChI37arnJNlArN%2FGBY%2FMn8mCHlNLKK5X4%2FriHE33CKRwf6Py9oeBwpKtLBjLRvTR%2FMfMbF2vmU9TYUcdOG%2FVUsx0Tzlw4a%2F%2FXVmpCpZ7ez9CGVhNqo4qnzPsS7ZgbciM8W7iMbTAQWkAGkXNCDYYk0xc6j0TnYLYzfpW8t1VAW5CKdAcwmvQcLyO8OZteJyogmPBk%2Fwh5gP772PxYIoLUh5xIpr1EaR10kKTmfP%2BPSd%2F9J8YVR7l41XsySJSx4%2FrebgWWUO%2F8jaKuurA%2FDiYK0L9nk636eFMWFwev9fvIDNjxMMdXv32ISmxHW%2FD3T1DYpkQWvXbip7v7jNRTOFOW6n58P%2F%2FLShWTAMFb%2F%2FZjRcBvZZV7%2BNyTs5%2FL2qKwlYd7GIwKhR%2BZ3OTWoS6pQyn1IwJfb0iXnx8hUf3bUH8fK88VNi%2BeY1pxrkVAU7ieRS6H87a9KFBPvpeBmOPNR9g%2FRiJoDqZnArykSIPNG0cNei5DFkxs4%2FBcPRfDZBc2WQfX6uFYnxIanV%2B%2FjwOvfog4FjX2YTx%2Favg9UY%2BlDFITM7R2%2BiclcfHJbjXzXd145eJIckbDjXnp714IFky8MMXttcEGOqUBI7nipSjZedxq6e8RIL1%2Fj%2BCSex34TEKIiUd1vH9fGUI8dWDrR073ldsVumDF4JXdwu98uwkkl0nnAMzboJzd1bRMKqnNR%2F7r8GbtFZIjV3W57NwqcQjixeo8w1wO72SdHgQ7mdYcwZtTg%2F%2B48e5dMeIyNktPjUDVPVPvOb5zmhOwvbTBGFK9%2FqE8Dr18yoG0NMwAyK%2Bt0%2BdublMTmw7CcuTYQYvz&X-Amz-Signature=bb9af72957721182f0a40795de7981dfa0703b371939f8eb987c6eaefa74983d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCBEUNK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVvtIzZbI2g%2FQDKQmaKrDs%2FZu7mU6vlZfrncxFJELMiAiEAuTtt0AM8ZFCe3HuZexvG6Om4fTehiGDHTO%2FkXpIgu8cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3QapVpFxrgK%2FLShSrcA0%2Br3lEhURN158whtlXfiqrEFH7B3KJj%2FdgADsZc9saChI37arnJNlArN%2FGBY%2FMn8mCHlNLKK5X4%2FriHE33CKRwf6Py9oeBwpKtLBjLRvTR%2FMfMbF2vmU9TYUcdOG%2FVUsx0Tzlw4a%2F%2FXVmpCpZ7ez9CGVhNqo4qnzPsS7ZgbciM8W7iMbTAQWkAGkXNCDYYk0xc6j0TnYLYzfpW8t1VAW5CKdAcwmvQcLyO8OZteJyogmPBk%2Fwh5gP772PxYIoLUh5xIpr1EaR10kKTmfP%2BPSd%2F9J8YVR7l41XsySJSx4%2FrebgWWUO%2F8jaKuurA%2FDiYK0L9nk636eFMWFwev9fvIDNjxMMdXv32ISmxHW%2FD3T1DYpkQWvXbip7v7jNRTOFOW6n58P%2F%2FLShWTAMFb%2F%2FZjRcBvZZV7%2BNyTs5%2FL2qKwlYd7GIwKhR%2BZ3OTWoS6pQyn1IwJfb0iXnx8hUf3bUH8fK88VNi%2BeY1pxrkVAU7ieRS6H87a9KFBPvpeBmOPNR9g%2FRiJoDqZnArykSIPNG0cNei5DFkxs4%2FBcPRfDZBc2WQfX6uFYnxIanV%2B%2FjwOvfog4FjX2YTx%2Favg9UY%2BlDFITM7R2%2BiclcfHJbjXzXd145eJIckbDjXnp714IFky8MMXttcEGOqUBI7nipSjZedxq6e8RIL1%2Fj%2BCSex34TEKIiUd1vH9fGUI8dWDrR073ldsVumDF4JXdwu98uwkkl0nnAMzboJzd1bRMKqnNR%2F7r8GbtFZIjV3W57NwqcQjixeo8w1wO72SdHgQ7mdYcwZtTg%2F%2B48e5dMeIyNktPjUDVPVPvOb5zmhOwvbTBGFK9%2FqE8Dr18yoG0NMwAyK%2Bt0%2BdublMTmw7CcuTYQYvz&X-Amz-Signature=44041173c22b683ded9f88c4aa5c4a83c8d25750ed5ad43702014b8451f9976e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCBEUNK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVvtIzZbI2g%2FQDKQmaKrDs%2FZu7mU6vlZfrncxFJELMiAiEAuTtt0AM8ZFCe3HuZexvG6Om4fTehiGDHTO%2FkXpIgu8cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3QapVpFxrgK%2FLShSrcA0%2Br3lEhURN158whtlXfiqrEFH7B3KJj%2FdgADsZc9saChI37arnJNlArN%2FGBY%2FMn8mCHlNLKK5X4%2FriHE33CKRwf6Py9oeBwpKtLBjLRvTR%2FMfMbF2vmU9TYUcdOG%2FVUsx0Tzlw4a%2F%2FXVmpCpZ7ez9CGVhNqo4qnzPsS7ZgbciM8W7iMbTAQWkAGkXNCDYYk0xc6j0TnYLYzfpW8t1VAW5CKdAcwmvQcLyO8OZteJyogmPBk%2Fwh5gP772PxYIoLUh5xIpr1EaR10kKTmfP%2BPSd%2F9J8YVR7l41XsySJSx4%2FrebgWWUO%2F8jaKuurA%2FDiYK0L9nk636eFMWFwev9fvIDNjxMMdXv32ISmxHW%2FD3T1DYpkQWvXbip7v7jNRTOFOW6n58P%2F%2FLShWTAMFb%2F%2FZjRcBvZZV7%2BNyTs5%2FL2qKwlYd7GIwKhR%2BZ3OTWoS6pQyn1IwJfb0iXnx8hUf3bUH8fK88VNi%2BeY1pxrkVAU7ieRS6H87a9KFBPvpeBmOPNR9g%2FRiJoDqZnArykSIPNG0cNei5DFkxs4%2FBcPRfDZBc2WQfX6uFYnxIanV%2B%2FjwOvfog4FjX2YTx%2Favg9UY%2BlDFITM7R2%2BiclcfHJbjXzXd145eJIckbDjXnp714IFky8MMXttcEGOqUBI7nipSjZedxq6e8RIL1%2Fj%2BCSex34TEKIiUd1vH9fGUI8dWDrR073ldsVumDF4JXdwu98uwkkl0nnAMzboJzd1bRMKqnNR%2F7r8GbtFZIjV3W57NwqcQjixeo8w1wO72SdHgQ7mdYcwZtTg%2F%2B48e5dMeIyNktPjUDVPVPvOb5zmhOwvbTBGFK9%2FqE8Dr18yoG0NMwAyK%2Bt0%2BdublMTmw7CcuTYQYvz&X-Amz-Signature=40c1647a12a93ca638a12ceb3cf5f52364496faa5e924a306d9bbb6cbec24124&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCBEUNK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVvtIzZbI2g%2FQDKQmaKrDs%2FZu7mU6vlZfrncxFJELMiAiEAuTtt0AM8ZFCe3HuZexvG6Om4fTehiGDHTO%2FkXpIgu8cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3QapVpFxrgK%2FLShSrcA0%2Br3lEhURN158whtlXfiqrEFH7B3KJj%2FdgADsZc9saChI37arnJNlArN%2FGBY%2FMn8mCHlNLKK5X4%2FriHE33CKRwf6Py9oeBwpKtLBjLRvTR%2FMfMbF2vmU9TYUcdOG%2FVUsx0Tzlw4a%2F%2FXVmpCpZ7ez9CGVhNqo4qnzPsS7ZgbciM8W7iMbTAQWkAGkXNCDYYk0xc6j0TnYLYzfpW8t1VAW5CKdAcwmvQcLyO8OZteJyogmPBk%2Fwh5gP772PxYIoLUh5xIpr1EaR10kKTmfP%2BPSd%2F9J8YVR7l41XsySJSx4%2FrebgWWUO%2F8jaKuurA%2FDiYK0L9nk636eFMWFwev9fvIDNjxMMdXv32ISmxHW%2FD3T1DYpkQWvXbip7v7jNRTOFOW6n58P%2F%2FLShWTAMFb%2F%2FZjRcBvZZV7%2BNyTs5%2FL2qKwlYd7GIwKhR%2BZ3OTWoS6pQyn1IwJfb0iXnx8hUf3bUH8fK88VNi%2BeY1pxrkVAU7ieRS6H87a9KFBPvpeBmOPNR9g%2FRiJoDqZnArykSIPNG0cNei5DFkxs4%2FBcPRfDZBc2WQfX6uFYnxIanV%2B%2FjwOvfog4FjX2YTx%2Favg9UY%2BlDFITM7R2%2BiclcfHJbjXzXd145eJIckbDjXnp714IFky8MMXttcEGOqUBI7nipSjZedxq6e8RIL1%2Fj%2BCSex34TEKIiUd1vH9fGUI8dWDrR073ldsVumDF4JXdwu98uwkkl0nnAMzboJzd1bRMKqnNR%2F7r8GbtFZIjV3W57NwqcQjixeo8w1wO72SdHgQ7mdYcwZtTg%2F%2B48e5dMeIyNktPjUDVPVPvOb5zmhOwvbTBGFK9%2FqE8Dr18yoG0NMwAyK%2Bt0%2BdublMTmw7CcuTYQYvz&X-Amz-Signature=d707e1b3c95052fcbf42e4f94f871c86da7646bf5c00cbd17d43a5baec011267&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCBEUNK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVvtIzZbI2g%2FQDKQmaKrDs%2FZu7mU6vlZfrncxFJELMiAiEAuTtt0AM8ZFCe3HuZexvG6Om4fTehiGDHTO%2FkXpIgu8cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3QapVpFxrgK%2FLShSrcA0%2Br3lEhURN158whtlXfiqrEFH7B3KJj%2FdgADsZc9saChI37arnJNlArN%2FGBY%2FMn8mCHlNLKK5X4%2FriHE33CKRwf6Py9oeBwpKtLBjLRvTR%2FMfMbF2vmU9TYUcdOG%2FVUsx0Tzlw4a%2F%2FXVmpCpZ7ez9CGVhNqo4qnzPsS7ZgbciM8W7iMbTAQWkAGkXNCDYYk0xc6j0TnYLYzfpW8t1VAW5CKdAcwmvQcLyO8OZteJyogmPBk%2Fwh5gP772PxYIoLUh5xIpr1EaR10kKTmfP%2BPSd%2F9J8YVR7l41XsySJSx4%2FrebgWWUO%2F8jaKuurA%2FDiYK0L9nk636eFMWFwev9fvIDNjxMMdXv32ISmxHW%2FD3T1DYpkQWvXbip7v7jNRTOFOW6n58P%2F%2FLShWTAMFb%2F%2FZjRcBvZZV7%2BNyTs5%2FL2qKwlYd7GIwKhR%2BZ3OTWoS6pQyn1IwJfb0iXnx8hUf3bUH8fK88VNi%2BeY1pxrkVAU7ieRS6H87a9KFBPvpeBmOPNR9g%2FRiJoDqZnArykSIPNG0cNei5DFkxs4%2FBcPRfDZBc2WQfX6uFYnxIanV%2B%2FjwOvfog4FjX2YTx%2Favg9UY%2BlDFITM7R2%2BiclcfHJbjXzXd145eJIckbDjXnp714IFky8MMXttcEGOqUBI7nipSjZedxq6e8RIL1%2Fj%2BCSex34TEKIiUd1vH9fGUI8dWDrR073ldsVumDF4JXdwu98uwkkl0nnAMzboJzd1bRMKqnNR%2F7r8GbtFZIjV3W57NwqcQjixeo8w1wO72SdHgQ7mdYcwZtTg%2F%2B48e5dMeIyNktPjUDVPVPvOb5zmhOwvbTBGFK9%2FqE8Dr18yoG0NMwAyK%2Bt0%2BdublMTmw7CcuTYQYvz&X-Amz-Signature=1e6078d932fb1cf29a49ca1ef129ac797f684fe8151e3054088c534b622469ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCBEUNK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVvtIzZbI2g%2FQDKQmaKrDs%2FZu7mU6vlZfrncxFJELMiAiEAuTtt0AM8ZFCe3HuZexvG6Om4fTehiGDHTO%2FkXpIgu8cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3QapVpFxrgK%2FLShSrcA0%2Br3lEhURN158whtlXfiqrEFH7B3KJj%2FdgADsZc9saChI37arnJNlArN%2FGBY%2FMn8mCHlNLKK5X4%2FriHE33CKRwf6Py9oeBwpKtLBjLRvTR%2FMfMbF2vmU9TYUcdOG%2FVUsx0Tzlw4a%2F%2FXVmpCpZ7ez9CGVhNqo4qnzPsS7ZgbciM8W7iMbTAQWkAGkXNCDYYk0xc6j0TnYLYzfpW8t1VAW5CKdAcwmvQcLyO8OZteJyogmPBk%2Fwh5gP772PxYIoLUh5xIpr1EaR10kKTmfP%2BPSd%2F9J8YVR7l41XsySJSx4%2FrebgWWUO%2F8jaKuurA%2FDiYK0L9nk636eFMWFwev9fvIDNjxMMdXv32ISmxHW%2FD3T1DYpkQWvXbip7v7jNRTOFOW6n58P%2F%2FLShWTAMFb%2F%2FZjRcBvZZV7%2BNyTs5%2FL2qKwlYd7GIwKhR%2BZ3OTWoS6pQyn1IwJfb0iXnx8hUf3bUH8fK88VNi%2BeY1pxrkVAU7ieRS6H87a9KFBPvpeBmOPNR9g%2FRiJoDqZnArykSIPNG0cNei5DFkxs4%2FBcPRfDZBc2WQfX6uFYnxIanV%2B%2FjwOvfog4FjX2YTx%2Favg9UY%2BlDFITM7R2%2BiclcfHJbjXzXd145eJIckbDjXnp714IFky8MMXttcEGOqUBI7nipSjZedxq6e8RIL1%2Fj%2BCSex34TEKIiUd1vH9fGUI8dWDrR073ldsVumDF4JXdwu98uwkkl0nnAMzboJzd1bRMKqnNR%2F7r8GbtFZIjV3W57NwqcQjixeo8w1wO72SdHgQ7mdYcwZtTg%2F%2B48e5dMeIyNktPjUDVPVPvOb5zmhOwvbTBGFK9%2FqE8Dr18yoG0NMwAyK%2Bt0%2BdublMTmw7CcuTYQYvz&X-Amz-Signature=58f80014fc9bc0e595d8e9ee5ad81fcf73c42c0a25dab0f590f660024c18b58c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCBEUNK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVvtIzZbI2g%2FQDKQmaKrDs%2FZu7mU6vlZfrncxFJELMiAiEAuTtt0AM8ZFCe3HuZexvG6Om4fTehiGDHTO%2FkXpIgu8cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3QapVpFxrgK%2FLShSrcA0%2Br3lEhURN158whtlXfiqrEFH7B3KJj%2FdgADsZc9saChI37arnJNlArN%2FGBY%2FMn8mCHlNLKK5X4%2FriHE33CKRwf6Py9oeBwpKtLBjLRvTR%2FMfMbF2vmU9TYUcdOG%2FVUsx0Tzlw4a%2F%2FXVmpCpZ7ez9CGVhNqo4qnzPsS7ZgbciM8W7iMbTAQWkAGkXNCDYYk0xc6j0TnYLYzfpW8t1VAW5CKdAcwmvQcLyO8OZteJyogmPBk%2Fwh5gP772PxYIoLUh5xIpr1EaR10kKTmfP%2BPSd%2F9J8YVR7l41XsySJSx4%2FrebgWWUO%2F8jaKuurA%2FDiYK0L9nk636eFMWFwev9fvIDNjxMMdXv32ISmxHW%2FD3T1DYpkQWvXbip7v7jNRTOFOW6n58P%2F%2FLShWTAMFb%2F%2FZjRcBvZZV7%2BNyTs5%2FL2qKwlYd7GIwKhR%2BZ3OTWoS6pQyn1IwJfb0iXnx8hUf3bUH8fK88VNi%2BeY1pxrkVAU7ieRS6H87a9KFBPvpeBmOPNR9g%2FRiJoDqZnArykSIPNG0cNei5DFkxs4%2FBcPRfDZBc2WQfX6uFYnxIanV%2B%2FjwOvfog4FjX2YTx%2Favg9UY%2BlDFITM7R2%2BiclcfHJbjXzXd145eJIckbDjXnp714IFky8MMXttcEGOqUBI7nipSjZedxq6e8RIL1%2Fj%2BCSex34TEKIiUd1vH9fGUI8dWDrR073ldsVumDF4JXdwu98uwkkl0nnAMzboJzd1bRMKqnNR%2F7r8GbtFZIjV3W57NwqcQjixeo8w1wO72SdHgQ7mdYcwZtTg%2F%2B48e5dMeIyNktPjUDVPVPvOb5zmhOwvbTBGFK9%2FqE8Dr18yoG0NMwAyK%2Bt0%2BdublMTmw7CcuTYQYvz&X-Amz-Signature=f1ab2c587b6923c6d3b4b562f7b7eddf708b8375e98a84819fe8f4368c76d3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
