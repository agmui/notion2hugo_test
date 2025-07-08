---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYVTQFU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgoVrpDuSF1cwYXtWbDXqKk50o0rENuScAqpqOy%2FHJwIgFBPQX9RmquOnIbKnSN7MklrmHFqcyoLwqrdVu3e3nE8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiMPHAjiaWHKhyiJSrcA6urlVZBS5J%2FSMzAy9bhkQ2RnjBs3VwZkXXa8yfJO%2BGaPS4w205ra4elMh%2FhGxgZW2NEEvCI95hneG5a1MDnESRyqrG71iDuSd5wBX9dMhXjyQHn4L14OH4SIRPRYSfgK%2FgMmhRgUpAGqyuIS0B6gVqrdxtnejVO8J4ygi3BwcrjLTvqjkgTEeqXJElQd7%2B5mI639lEPhlllPHxmG6jPRYhWNG2D2h1iGiBDgvMDZWCD5gkURoijcD3pQp7UXOy%2BFjKgpbDCZi3S4UCajq66Txp8vxGODXmrbR6toL%2Fh9QiNFrEnbMPvdPLwMmSjbJUgTZQR8rnxa%2BaWBbNxzEx3cfTd2Z6f6NXs0jSIAMLMDgEs33xrKR%2Fscot9oUDARnYGVHkT8RRcyyN7OhvL9%2BLxQ2LJIw5KbadKahumng7gaVNvdHUv6h2WyHAcOsFV4zJ2ZgJgvfoiXogAHDAgvR7YshYPznGTKNcb0GLe3hnzDjVYy3f3H3cdE4zCiPjTd0bPaf9EMVjfrKI862aYlt1FkLWOh2PCAt1OSrWopX6qtA05HMDWBM8ru%2Bzh4oTOaYJfjPDek0eX49ycZIdnG9iv20tNck8IiSCdVqJw9CHt0WePU3f%2BAS5n0LSEH%2FO6MJ3YtcMGOqUBOcNyIzokFdxq5R4F0lVPHR%2BQ%2FgY8BUN%2BzHsVsDQzA9te6%2FMnFCKosFvD2cWRRAagra4tg6jjz1EMBI7EYv22mSB%2FX9m1sb7JJ6YgbZ2bw3VPAlw0BtNhS%2F%2FXHGR6cGMxQl8niKjvEes4cZXwWjsIGv1TX4w1BpSUOpIiJm4HHMY81H5Zun%2FJ9SY0FyygNKfKGBBxMrWLv4t1C383otixFw0azCvp&X-Amz-Signature=479ca9b09ec79270edac1fd2d4047b255163134143d192863d123cd27a41e37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYVTQFU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgoVrpDuSF1cwYXtWbDXqKk50o0rENuScAqpqOy%2FHJwIgFBPQX9RmquOnIbKnSN7MklrmHFqcyoLwqrdVu3e3nE8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiMPHAjiaWHKhyiJSrcA6urlVZBS5J%2FSMzAy9bhkQ2RnjBs3VwZkXXa8yfJO%2BGaPS4w205ra4elMh%2FhGxgZW2NEEvCI95hneG5a1MDnESRyqrG71iDuSd5wBX9dMhXjyQHn4L14OH4SIRPRYSfgK%2FgMmhRgUpAGqyuIS0B6gVqrdxtnejVO8J4ygi3BwcrjLTvqjkgTEeqXJElQd7%2B5mI639lEPhlllPHxmG6jPRYhWNG2D2h1iGiBDgvMDZWCD5gkURoijcD3pQp7UXOy%2BFjKgpbDCZi3S4UCajq66Txp8vxGODXmrbR6toL%2Fh9QiNFrEnbMPvdPLwMmSjbJUgTZQR8rnxa%2BaWBbNxzEx3cfTd2Z6f6NXs0jSIAMLMDgEs33xrKR%2Fscot9oUDARnYGVHkT8RRcyyN7OhvL9%2BLxQ2LJIw5KbadKahumng7gaVNvdHUv6h2WyHAcOsFV4zJ2ZgJgvfoiXogAHDAgvR7YshYPznGTKNcb0GLe3hnzDjVYy3f3H3cdE4zCiPjTd0bPaf9EMVjfrKI862aYlt1FkLWOh2PCAt1OSrWopX6qtA05HMDWBM8ru%2Bzh4oTOaYJfjPDek0eX49ycZIdnG9iv20tNck8IiSCdVqJw9CHt0WePU3f%2BAS5n0LSEH%2FO6MJ3YtcMGOqUBOcNyIzokFdxq5R4F0lVPHR%2BQ%2FgY8BUN%2BzHsVsDQzA9te6%2FMnFCKosFvD2cWRRAagra4tg6jjz1EMBI7EYv22mSB%2FX9m1sb7JJ6YgbZ2bw3VPAlw0BtNhS%2F%2FXHGR6cGMxQl8niKjvEes4cZXwWjsIGv1TX4w1BpSUOpIiJm4HHMY81H5Zun%2FJ9SY0FyygNKfKGBBxMrWLv4t1C383otixFw0azCvp&X-Amz-Signature=6e9f28221801a39e6d0f8cb4a35e0a5b88a5053f177c043358f940ae656a07d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYVTQFU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgoVrpDuSF1cwYXtWbDXqKk50o0rENuScAqpqOy%2FHJwIgFBPQX9RmquOnIbKnSN7MklrmHFqcyoLwqrdVu3e3nE8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiMPHAjiaWHKhyiJSrcA6urlVZBS5J%2FSMzAy9bhkQ2RnjBs3VwZkXXa8yfJO%2BGaPS4w205ra4elMh%2FhGxgZW2NEEvCI95hneG5a1MDnESRyqrG71iDuSd5wBX9dMhXjyQHn4L14OH4SIRPRYSfgK%2FgMmhRgUpAGqyuIS0B6gVqrdxtnejVO8J4ygi3BwcrjLTvqjkgTEeqXJElQd7%2B5mI639lEPhlllPHxmG6jPRYhWNG2D2h1iGiBDgvMDZWCD5gkURoijcD3pQp7UXOy%2BFjKgpbDCZi3S4UCajq66Txp8vxGODXmrbR6toL%2Fh9QiNFrEnbMPvdPLwMmSjbJUgTZQR8rnxa%2BaWBbNxzEx3cfTd2Z6f6NXs0jSIAMLMDgEs33xrKR%2Fscot9oUDARnYGVHkT8RRcyyN7OhvL9%2BLxQ2LJIw5KbadKahumng7gaVNvdHUv6h2WyHAcOsFV4zJ2ZgJgvfoiXogAHDAgvR7YshYPznGTKNcb0GLe3hnzDjVYy3f3H3cdE4zCiPjTd0bPaf9EMVjfrKI862aYlt1FkLWOh2PCAt1OSrWopX6qtA05HMDWBM8ru%2Bzh4oTOaYJfjPDek0eX49ycZIdnG9iv20tNck8IiSCdVqJw9CHt0WePU3f%2BAS5n0LSEH%2FO6MJ3YtcMGOqUBOcNyIzokFdxq5R4F0lVPHR%2BQ%2FgY8BUN%2BzHsVsDQzA9te6%2FMnFCKosFvD2cWRRAagra4tg6jjz1EMBI7EYv22mSB%2FX9m1sb7JJ6YgbZ2bw3VPAlw0BtNhS%2F%2FXHGR6cGMxQl8niKjvEes4cZXwWjsIGv1TX4w1BpSUOpIiJm4HHMY81H5Zun%2FJ9SY0FyygNKfKGBBxMrWLv4t1C383otixFw0azCvp&X-Amz-Signature=22791bc6c8a09b28b7d3fc1a35716c7c74a955a71033c558df33dfdcfd38f185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYVTQFU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgoVrpDuSF1cwYXtWbDXqKk50o0rENuScAqpqOy%2FHJwIgFBPQX9RmquOnIbKnSN7MklrmHFqcyoLwqrdVu3e3nE8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiMPHAjiaWHKhyiJSrcA6urlVZBS5J%2FSMzAy9bhkQ2RnjBs3VwZkXXa8yfJO%2BGaPS4w205ra4elMh%2FhGxgZW2NEEvCI95hneG5a1MDnESRyqrG71iDuSd5wBX9dMhXjyQHn4L14OH4SIRPRYSfgK%2FgMmhRgUpAGqyuIS0B6gVqrdxtnejVO8J4ygi3BwcrjLTvqjkgTEeqXJElQd7%2B5mI639lEPhlllPHxmG6jPRYhWNG2D2h1iGiBDgvMDZWCD5gkURoijcD3pQp7UXOy%2BFjKgpbDCZi3S4UCajq66Txp8vxGODXmrbR6toL%2Fh9QiNFrEnbMPvdPLwMmSjbJUgTZQR8rnxa%2BaWBbNxzEx3cfTd2Z6f6NXs0jSIAMLMDgEs33xrKR%2Fscot9oUDARnYGVHkT8RRcyyN7OhvL9%2BLxQ2LJIw5KbadKahumng7gaVNvdHUv6h2WyHAcOsFV4zJ2ZgJgvfoiXogAHDAgvR7YshYPznGTKNcb0GLe3hnzDjVYy3f3H3cdE4zCiPjTd0bPaf9EMVjfrKI862aYlt1FkLWOh2PCAt1OSrWopX6qtA05HMDWBM8ru%2Bzh4oTOaYJfjPDek0eX49ycZIdnG9iv20tNck8IiSCdVqJw9CHt0WePU3f%2BAS5n0LSEH%2FO6MJ3YtcMGOqUBOcNyIzokFdxq5R4F0lVPHR%2BQ%2FgY8BUN%2BzHsVsDQzA9te6%2FMnFCKosFvD2cWRRAagra4tg6jjz1EMBI7EYv22mSB%2FX9m1sb7JJ6YgbZ2bw3VPAlw0BtNhS%2F%2FXHGR6cGMxQl8niKjvEes4cZXwWjsIGv1TX4w1BpSUOpIiJm4HHMY81H5Zun%2FJ9SY0FyygNKfKGBBxMrWLv4t1C383otixFw0azCvp&X-Amz-Signature=9987e36cb9b0fee1a66514044e2554fe61d4a39fb813d4ba277f2134d3d0d81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYVTQFU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgoVrpDuSF1cwYXtWbDXqKk50o0rENuScAqpqOy%2FHJwIgFBPQX9RmquOnIbKnSN7MklrmHFqcyoLwqrdVu3e3nE8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiMPHAjiaWHKhyiJSrcA6urlVZBS5J%2FSMzAy9bhkQ2RnjBs3VwZkXXa8yfJO%2BGaPS4w205ra4elMh%2FhGxgZW2NEEvCI95hneG5a1MDnESRyqrG71iDuSd5wBX9dMhXjyQHn4L14OH4SIRPRYSfgK%2FgMmhRgUpAGqyuIS0B6gVqrdxtnejVO8J4ygi3BwcrjLTvqjkgTEeqXJElQd7%2B5mI639lEPhlllPHxmG6jPRYhWNG2D2h1iGiBDgvMDZWCD5gkURoijcD3pQp7UXOy%2BFjKgpbDCZi3S4UCajq66Txp8vxGODXmrbR6toL%2Fh9QiNFrEnbMPvdPLwMmSjbJUgTZQR8rnxa%2BaWBbNxzEx3cfTd2Z6f6NXs0jSIAMLMDgEs33xrKR%2Fscot9oUDARnYGVHkT8RRcyyN7OhvL9%2BLxQ2LJIw5KbadKahumng7gaVNvdHUv6h2WyHAcOsFV4zJ2ZgJgvfoiXogAHDAgvR7YshYPznGTKNcb0GLe3hnzDjVYy3f3H3cdE4zCiPjTd0bPaf9EMVjfrKI862aYlt1FkLWOh2PCAt1OSrWopX6qtA05HMDWBM8ru%2Bzh4oTOaYJfjPDek0eX49ycZIdnG9iv20tNck8IiSCdVqJw9CHt0WePU3f%2BAS5n0LSEH%2FO6MJ3YtcMGOqUBOcNyIzokFdxq5R4F0lVPHR%2BQ%2FgY8BUN%2BzHsVsDQzA9te6%2FMnFCKosFvD2cWRRAagra4tg6jjz1EMBI7EYv22mSB%2FX9m1sb7JJ6YgbZ2bw3VPAlw0BtNhS%2F%2FXHGR6cGMxQl8niKjvEes4cZXwWjsIGv1TX4w1BpSUOpIiJm4HHMY81H5Zun%2FJ9SY0FyygNKfKGBBxMrWLv4t1C383otixFw0azCvp&X-Amz-Signature=e5618ba82184448c91a269cb1fb1f0be73ec1654de87bb6d696265f74d83482d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYVTQFU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgoVrpDuSF1cwYXtWbDXqKk50o0rENuScAqpqOy%2FHJwIgFBPQX9RmquOnIbKnSN7MklrmHFqcyoLwqrdVu3e3nE8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiMPHAjiaWHKhyiJSrcA6urlVZBS5J%2FSMzAy9bhkQ2RnjBs3VwZkXXa8yfJO%2BGaPS4w205ra4elMh%2FhGxgZW2NEEvCI95hneG5a1MDnESRyqrG71iDuSd5wBX9dMhXjyQHn4L14OH4SIRPRYSfgK%2FgMmhRgUpAGqyuIS0B6gVqrdxtnejVO8J4ygi3BwcrjLTvqjkgTEeqXJElQd7%2B5mI639lEPhlllPHxmG6jPRYhWNG2D2h1iGiBDgvMDZWCD5gkURoijcD3pQp7UXOy%2BFjKgpbDCZi3S4UCajq66Txp8vxGODXmrbR6toL%2Fh9QiNFrEnbMPvdPLwMmSjbJUgTZQR8rnxa%2BaWBbNxzEx3cfTd2Z6f6NXs0jSIAMLMDgEs33xrKR%2Fscot9oUDARnYGVHkT8RRcyyN7OhvL9%2BLxQ2LJIw5KbadKahumng7gaVNvdHUv6h2WyHAcOsFV4zJ2ZgJgvfoiXogAHDAgvR7YshYPznGTKNcb0GLe3hnzDjVYy3f3H3cdE4zCiPjTd0bPaf9EMVjfrKI862aYlt1FkLWOh2PCAt1OSrWopX6qtA05HMDWBM8ru%2Bzh4oTOaYJfjPDek0eX49ycZIdnG9iv20tNck8IiSCdVqJw9CHt0WePU3f%2BAS5n0LSEH%2FO6MJ3YtcMGOqUBOcNyIzokFdxq5R4F0lVPHR%2BQ%2FgY8BUN%2BzHsVsDQzA9te6%2FMnFCKosFvD2cWRRAagra4tg6jjz1EMBI7EYv22mSB%2FX9m1sb7JJ6YgbZ2bw3VPAlw0BtNhS%2F%2FXHGR6cGMxQl8niKjvEes4cZXwWjsIGv1TX4w1BpSUOpIiJm4HHMY81H5Zun%2FJ9SY0FyygNKfKGBBxMrWLv4t1C383otixFw0azCvp&X-Amz-Signature=10a64a4aa0c194a77dd5e8479a5b2f2a84d791419f66766435a9bd3566f931ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYVTQFU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgoVrpDuSF1cwYXtWbDXqKk50o0rENuScAqpqOy%2FHJwIgFBPQX9RmquOnIbKnSN7MklrmHFqcyoLwqrdVu3e3nE8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiMPHAjiaWHKhyiJSrcA6urlVZBS5J%2FSMzAy9bhkQ2RnjBs3VwZkXXa8yfJO%2BGaPS4w205ra4elMh%2FhGxgZW2NEEvCI95hneG5a1MDnESRyqrG71iDuSd5wBX9dMhXjyQHn4L14OH4SIRPRYSfgK%2FgMmhRgUpAGqyuIS0B6gVqrdxtnejVO8J4ygi3BwcrjLTvqjkgTEeqXJElQd7%2B5mI639lEPhlllPHxmG6jPRYhWNG2D2h1iGiBDgvMDZWCD5gkURoijcD3pQp7UXOy%2BFjKgpbDCZi3S4UCajq66Txp8vxGODXmrbR6toL%2Fh9QiNFrEnbMPvdPLwMmSjbJUgTZQR8rnxa%2BaWBbNxzEx3cfTd2Z6f6NXs0jSIAMLMDgEs33xrKR%2Fscot9oUDARnYGVHkT8RRcyyN7OhvL9%2BLxQ2LJIw5KbadKahumng7gaVNvdHUv6h2WyHAcOsFV4zJ2ZgJgvfoiXogAHDAgvR7YshYPznGTKNcb0GLe3hnzDjVYy3f3H3cdE4zCiPjTd0bPaf9EMVjfrKI862aYlt1FkLWOh2PCAt1OSrWopX6qtA05HMDWBM8ru%2Bzh4oTOaYJfjPDek0eX49ycZIdnG9iv20tNck8IiSCdVqJw9CHt0WePU3f%2BAS5n0LSEH%2FO6MJ3YtcMGOqUBOcNyIzokFdxq5R4F0lVPHR%2BQ%2FgY8BUN%2BzHsVsDQzA9te6%2FMnFCKosFvD2cWRRAagra4tg6jjz1EMBI7EYv22mSB%2FX9m1sb7JJ6YgbZ2bw3VPAlw0BtNhS%2F%2FXHGR6cGMxQl8niKjvEes4cZXwWjsIGv1TX4w1BpSUOpIiJm4HHMY81H5Zun%2FJ9SY0FyygNKfKGBBxMrWLv4t1C383otixFw0azCvp&X-Amz-Signature=3e79ebf94f3fd9635537147165bdb66707861f85bc952ba2dadccf3e6cfe5b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
