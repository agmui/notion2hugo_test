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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULQEVU5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH59U5I386InMUAFKkfzWzz5gmkHQIWP%2FQUFaGO10DeJAiEA%2BWxb%2FChTneYlRJu%2B8UUnSMFbTSHI36BzaXY7mlkGjooqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANBAyeqMFlNbnVLVCrcA6ClW%2Fm8J7ERHsE1D1kw7rNPmJxLXHJbCAGSSRG9GVSHKyMCC5kchH4T3ZAMh9BnwInHnbQNRLIYhm1H3Kh7asEQThS8f%2FJx9rkd6bazEQXUiP0v2Z67rrl66LzE%2Fv%2B5tJgrqE1X1mkcqFhyCxloWRDP97ZZ%2FtdLKTGxVYsoJF4Jx60g85uEFe0Xz%2FojEEx03fVaTgMubPV21Yxp1RlzFTA6GXrUCokSJ7K7Ra9fRPXKG0g3TjL7n8ipYJfVDDTdPxisQs8T08cWH0yr61PCUPdxYLOxqoBgUhEykRM%2BGDYsDoB4H8WDEYiwehALPpz7Lu%2BzZ16dyGdjl212XyqXrLsBiCT4Dv6sKMMXQPO4iaS72jT7GOAwBvSmO9OFzuItaSUQBPhXuuKATOdQOHWjrLjB%2BdOZ4T%2BAKgelHQ9aRuLTz7QHtM%2BSF%2BzxmrwULgmUTqJLW6jtsEFichjKHLJM3x1LaEEdo%2BI4lXMHJZ1kDhbux%2BgW8p10Ry%2FftqOMoputTNl3AxIy6Ix5NsiyNaI4F2BYCtHsdL%2FKuqQrL5zR9D19y6BLJBMHxEwmm8JF2TBv3jKzmxvFXpgedx2wz4OJ4R4o2h2SVYv7OTUL%2BI7LDS8C%2BetNiszO8cuxFS6EMJqn3sIGOqUBMFbHiNONqayx7gnvlInrTVXm4YPodMYtevY5jIgTszROVZ2%2FnsNf4eI1WsAISMK5GM8%2BhMTpUySMwyXpvZDkRs7vUtz39RbJ7Lw9lPzn42w818MpesvLYvrJEwQuv5ZBu76qtqPqPLlAoCViTRl2X3wGWGqsD3r6xvcr3q187xNN0n617hJdG8iJ%2FTjY81wMaAa6lQ9solVkMcaNOMyTwmtkLYSG&X-Amz-Signature=17ceff7ee6dd188a634e12e2413d92e8e8dd814e59348598b28ecf05251ef58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULQEVU5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH59U5I386InMUAFKkfzWzz5gmkHQIWP%2FQUFaGO10DeJAiEA%2BWxb%2FChTneYlRJu%2B8UUnSMFbTSHI36BzaXY7mlkGjooqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANBAyeqMFlNbnVLVCrcA6ClW%2Fm8J7ERHsE1D1kw7rNPmJxLXHJbCAGSSRG9GVSHKyMCC5kchH4T3ZAMh9BnwInHnbQNRLIYhm1H3Kh7asEQThS8f%2FJx9rkd6bazEQXUiP0v2Z67rrl66LzE%2Fv%2B5tJgrqE1X1mkcqFhyCxloWRDP97ZZ%2FtdLKTGxVYsoJF4Jx60g85uEFe0Xz%2FojEEx03fVaTgMubPV21Yxp1RlzFTA6GXrUCokSJ7K7Ra9fRPXKG0g3TjL7n8ipYJfVDDTdPxisQs8T08cWH0yr61PCUPdxYLOxqoBgUhEykRM%2BGDYsDoB4H8WDEYiwehALPpz7Lu%2BzZ16dyGdjl212XyqXrLsBiCT4Dv6sKMMXQPO4iaS72jT7GOAwBvSmO9OFzuItaSUQBPhXuuKATOdQOHWjrLjB%2BdOZ4T%2BAKgelHQ9aRuLTz7QHtM%2BSF%2BzxmrwULgmUTqJLW6jtsEFichjKHLJM3x1LaEEdo%2BI4lXMHJZ1kDhbux%2BgW8p10Ry%2FftqOMoputTNl3AxIy6Ix5NsiyNaI4F2BYCtHsdL%2FKuqQrL5zR9D19y6BLJBMHxEwmm8JF2TBv3jKzmxvFXpgedx2wz4OJ4R4o2h2SVYv7OTUL%2BI7LDS8C%2BetNiszO8cuxFS6EMJqn3sIGOqUBMFbHiNONqayx7gnvlInrTVXm4YPodMYtevY5jIgTszROVZ2%2FnsNf4eI1WsAISMK5GM8%2BhMTpUySMwyXpvZDkRs7vUtz39RbJ7Lw9lPzn42w818MpesvLYvrJEwQuv5ZBu76qtqPqPLlAoCViTRl2X3wGWGqsD3r6xvcr3q187xNN0n617hJdG8iJ%2FTjY81wMaAa6lQ9solVkMcaNOMyTwmtkLYSG&X-Amz-Signature=3211528c0ccfe8ef2a062e47ed28360e51694c44e2818e150876840df8bcfb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULQEVU5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH59U5I386InMUAFKkfzWzz5gmkHQIWP%2FQUFaGO10DeJAiEA%2BWxb%2FChTneYlRJu%2B8UUnSMFbTSHI36BzaXY7mlkGjooqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANBAyeqMFlNbnVLVCrcA6ClW%2Fm8J7ERHsE1D1kw7rNPmJxLXHJbCAGSSRG9GVSHKyMCC5kchH4T3ZAMh9BnwInHnbQNRLIYhm1H3Kh7asEQThS8f%2FJx9rkd6bazEQXUiP0v2Z67rrl66LzE%2Fv%2B5tJgrqE1X1mkcqFhyCxloWRDP97ZZ%2FtdLKTGxVYsoJF4Jx60g85uEFe0Xz%2FojEEx03fVaTgMubPV21Yxp1RlzFTA6GXrUCokSJ7K7Ra9fRPXKG0g3TjL7n8ipYJfVDDTdPxisQs8T08cWH0yr61PCUPdxYLOxqoBgUhEykRM%2BGDYsDoB4H8WDEYiwehALPpz7Lu%2BzZ16dyGdjl212XyqXrLsBiCT4Dv6sKMMXQPO4iaS72jT7GOAwBvSmO9OFzuItaSUQBPhXuuKATOdQOHWjrLjB%2BdOZ4T%2BAKgelHQ9aRuLTz7QHtM%2BSF%2BzxmrwULgmUTqJLW6jtsEFichjKHLJM3x1LaEEdo%2BI4lXMHJZ1kDhbux%2BgW8p10Ry%2FftqOMoputTNl3AxIy6Ix5NsiyNaI4F2BYCtHsdL%2FKuqQrL5zR9D19y6BLJBMHxEwmm8JF2TBv3jKzmxvFXpgedx2wz4OJ4R4o2h2SVYv7OTUL%2BI7LDS8C%2BetNiszO8cuxFS6EMJqn3sIGOqUBMFbHiNONqayx7gnvlInrTVXm4YPodMYtevY5jIgTszROVZ2%2FnsNf4eI1WsAISMK5GM8%2BhMTpUySMwyXpvZDkRs7vUtz39RbJ7Lw9lPzn42w818MpesvLYvrJEwQuv5ZBu76qtqPqPLlAoCViTRl2X3wGWGqsD3r6xvcr3q187xNN0n617hJdG8iJ%2FTjY81wMaAa6lQ9solVkMcaNOMyTwmtkLYSG&X-Amz-Signature=8705464ac821236a00b810183ff570f9b37948038b56869322d1595ebf42a744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULQEVU5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH59U5I386InMUAFKkfzWzz5gmkHQIWP%2FQUFaGO10DeJAiEA%2BWxb%2FChTneYlRJu%2B8UUnSMFbTSHI36BzaXY7mlkGjooqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANBAyeqMFlNbnVLVCrcA6ClW%2Fm8J7ERHsE1D1kw7rNPmJxLXHJbCAGSSRG9GVSHKyMCC5kchH4T3ZAMh9BnwInHnbQNRLIYhm1H3Kh7asEQThS8f%2FJx9rkd6bazEQXUiP0v2Z67rrl66LzE%2Fv%2B5tJgrqE1X1mkcqFhyCxloWRDP97ZZ%2FtdLKTGxVYsoJF4Jx60g85uEFe0Xz%2FojEEx03fVaTgMubPV21Yxp1RlzFTA6GXrUCokSJ7K7Ra9fRPXKG0g3TjL7n8ipYJfVDDTdPxisQs8T08cWH0yr61PCUPdxYLOxqoBgUhEykRM%2BGDYsDoB4H8WDEYiwehALPpz7Lu%2BzZ16dyGdjl212XyqXrLsBiCT4Dv6sKMMXQPO4iaS72jT7GOAwBvSmO9OFzuItaSUQBPhXuuKATOdQOHWjrLjB%2BdOZ4T%2BAKgelHQ9aRuLTz7QHtM%2BSF%2BzxmrwULgmUTqJLW6jtsEFichjKHLJM3x1LaEEdo%2BI4lXMHJZ1kDhbux%2BgW8p10Ry%2FftqOMoputTNl3AxIy6Ix5NsiyNaI4F2BYCtHsdL%2FKuqQrL5zR9D19y6BLJBMHxEwmm8JF2TBv3jKzmxvFXpgedx2wz4OJ4R4o2h2SVYv7OTUL%2BI7LDS8C%2BetNiszO8cuxFS6EMJqn3sIGOqUBMFbHiNONqayx7gnvlInrTVXm4YPodMYtevY5jIgTszROVZ2%2FnsNf4eI1WsAISMK5GM8%2BhMTpUySMwyXpvZDkRs7vUtz39RbJ7Lw9lPzn42w818MpesvLYvrJEwQuv5ZBu76qtqPqPLlAoCViTRl2X3wGWGqsD3r6xvcr3q187xNN0n617hJdG8iJ%2FTjY81wMaAa6lQ9solVkMcaNOMyTwmtkLYSG&X-Amz-Signature=cdb0497decad0fe78e55951ef75ca2f0d8ecdbcaf8fe8b02f664cf3e0801b768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULQEVU5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH59U5I386InMUAFKkfzWzz5gmkHQIWP%2FQUFaGO10DeJAiEA%2BWxb%2FChTneYlRJu%2B8UUnSMFbTSHI36BzaXY7mlkGjooqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANBAyeqMFlNbnVLVCrcA6ClW%2Fm8J7ERHsE1D1kw7rNPmJxLXHJbCAGSSRG9GVSHKyMCC5kchH4T3ZAMh9BnwInHnbQNRLIYhm1H3Kh7asEQThS8f%2FJx9rkd6bazEQXUiP0v2Z67rrl66LzE%2Fv%2B5tJgrqE1X1mkcqFhyCxloWRDP97ZZ%2FtdLKTGxVYsoJF4Jx60g85uEFe0Xz%2FojEEx03fVaTgMubPV21Yxp1RlzFTA6GXrUCokSJ7K7Ra9fRPXKG0g3TjL7n8ipYJfVDDTdPxisQs8T08cWH0yr61PCUPdxYLOxqoBgUhEykRM%2BGDYsDoB4H8WDEYiwehALPpz7Lu%2BzZ16dyGdjl212XyqXrLsBiCT4Dv6sKMMXQPO4iaS72jT7GOAwBvSmO9OFzuItaSUQBPhXuuKATOdQOHWjrLjB%2BdOZ4T%2BAKgelHQ9aRuLTz7QHtM%2BSF%2BzxmrwULgmUTqJLW6jtsEFichjKHLJM3x1LaEEdo%2BI4lXMHJZ1kDhbux%2BgW8p10Ry%2FftqOMoputTNl3AxIy6Ix5NsiyNaI4F2BYCtHsdL%2FKuqQrL5zR9D19y6BLJBMHxEwmm8JF2TBv3jKzmxvFXpgedx2wz4OJ4R4o2h2SVYv7OTUL%2BI7LDS8C%2BetNiszO8cuxFS6EMJqn3sIGOqUBMFbHiNONqayx7gnvlInrTVXm4YPodMYtevY5jIgTszROVZ2%2FnsNf4eI1WsAISMK5GM8%2BhMTpUySMwyXpvZDkRs7vUtz39RbJ7Lw9lPzn42w818MpesvLYvrJEwQuv5ZBu76qtqPqPLlAoCViTRl2X3wGWGqsD3r6xvcr3q187xNN0n617hJdG8iJ%2FTjY81wMaAa6lQ9solVkMcaNOMyTwmtkLYSG&X-Amz-Signature=f566e49824be16c7cd3ba68f82ca1b6d24612227c8ae839db1a5e52b157cc177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULQEVU5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH59U5I386InMUAFKkfzWzz5gmkHQIWP%2FQUFaGO10DeJAiEA%2BWxb%2FChTneYlRJu%2B8UUnSMFbTSHI36BzaXY7mlkGjooqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANBAyeqMFlNbnVLVCrcA6ClW%2Fm8J7ERHsE1D1kw7rNPmJxLXHJbCAGSSRG9GVSHKyMCC5kchH4T3ZAMh9BnwInHnbQNRLIYhm1H3Kh7asEQThS8f%2FJx9rkd6bazEQXUiP0v2Z67rrl66LzE%2Fv%2B5tJgrqE1X1mkcqFhyCxloWRDP97ZZ%2FtdLKTGxVYsoJF4Jx60g85uEFe0Xz%2FojEEx03fVaTgMubPV21Yxp1RlzFTA6GXrUCokSJ7K7Ra9fRPXKG0g3TjL7n8ipYJfVDDTdPxisQs8T08cWH0yr61PCUPdxYLOxqoBgUhEykRM%2BGDYsDoB4H8WDEYiwehALPpz7Lu%2BzZ16dyGdjl212XyqXrLsBiCT4Dv6sKMMXQPO4iaS72jT7GOAwBvSmO9OFzuItaSUQBPhXuuKATOdQOHWjrLjB%2BdOZ4T%2BAKgelHQ9aRuLTz7QHtM%2BSF%2BzxmrwULgmUTqJLW6jtsEFichjKHLJM3x1LaEEdo%2BI4lXMHJZ1kDhbux%2BgW8p10Ry%2FftqOMoputTNl3AxIy6Ix5NsiyNaI4F2BYCtHsdL%2FKuqQrL5zR9D19y6BLJBMHxEwmm8JF2TBv3jKzmxvFXpgedx2wz4OJ4R4o2h2SVYv7OTUL%2BI7LDS8C%2BetNiszO8cuxFS6EMJqn3sIGOqUBMFbHiNONqayx7gnvlInrTVXm4YPodMYtevY5jIgTszROVZ2%2FnsNf4eI1WsAISMK5GM8%2BhMTpUySMwyXpvZDkRs7vUtz39RbJ7Lw9lPzn42w818MpesvLYvrJEwQuv5ZBu76qtqPqPLlAoCViTRl2X3wGWGqsD3r6xvcr3q187xNN0n617hJdG8iJ%2FTjY81wMaAa6lQ9solVkMcaNOMyTwmtkLYSG&X-Amz-Signature=e40a06ac772d4534b5cca9afb9bf04d2385365375b209cdee59a4c638887c362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULQEVU5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH59U5I386InMUAFKkfzWzz5gmkHQIWP%2FQUFaGO10DeJAiEA%2BWxb%2FChTneYlRJu%2B8UUnSMFbTSHI36BzaXY7mlkGjooqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANBAyeqMFlNbnVLVCrcA6ClW%2Fm8J7ERHsE1D1kw7rNPmJxLXHJbCAGSSRG9GVSHKyMCC5kchH4T3ZAMh9BnwInHnbQNRLIYhm1H3Kh7asEQThS8f%2FJx9rkd6bazEQXUiP0v2Z67rrl66LzE%2Fv%2B5tJgrqE1X1mkcqFhyCxloWRDP97ZZ%2FtdLKTGxVYsoJF4Jx60g85uEFe0Xz%2FojEEx03fVaTgMubPV21Yxp1RlzFTA6GXrUCokSJ7K7Ra9fRPXKG0g3TjL7n8ipYJfVDDTdPxisQs8T08cWH0yr61PCUPdxYLOxqoBgUhEykRM%2BGDYsDoB4H8WDEYiwehALPpz7Lu%2BzZ16dyGdjl212XyqXrLsBiCT4Dv6sKMMXQPO4iaS72jT7GOAwBvSmO9OFzuItaSUQBPhXuuKATOdQOHWjrLjB%2BdOZ4T%2BAKgelHQ9aRuLTz7QHtM%2BSF%2BzxmrwULgmUTqJLW6jtsEFichjKHLJM3x1LaEEdo%2BI4lXMHJZ1kDhbux%2BgW8p10Ry%2FftqOMoputTNl3AxIy6Ix5NsiyNaI4F2BYCtHsdL%2FKuqQrL5zR9D19y6BLJBMHxEwmm8JF2TBv3jKzmxvFXpgedx2wz4OJ4R4o2h2SVYv7OTUL%2BI7LDS8C%2BetNiszO8cuxFS6EMJqn3sIGOqUBMFbHiNONqayx7gnvlInrTVXm4YPodMYtevY5jIgTszROVZ2%2FnsNf4eI1WsAISMK5GM8%2BhMTpUySMwyXpvZDkRs7vUtz39RbJ7Lw9lPzn42w818MpesvLYvrJEwQuv5ZBu76qtqPqPLlAoCViTRl2X3wGWGqsD3r6xvcr3q187xNN0n617hJdG8iJ%2FTjY81wMaAa6lQ9solVkMcaNOMyTwmtkLYSG&X-Amz-Signature=ace058c84077209da1b388f5752d8df5c33c68b3955555988fb22f0e39d84039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
