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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWDHLOD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBT9GLhN0TASuwgnm8OIdXvfOeaGod1XRS26iV8ceAe4AiEAtOw7D9rO472OfAoXdbw4xt1FowmBl%2FsXTlvpThGffNkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzLh0HEm2j%2BBmBlNyrcA8ppHGt%2BGPgMkyYySANjPwSmCGuxVjR0zqAypm2Xk8DKHDRI1GOjAzGUKoWz1M8kGxlit12vZyvscX4r58F%2FpEYjH5grEFXhNsGj%2F%2FEcMdId5hc85M6BTE5%2FXne5XJ70vtWVNvMDkkXkSuckN5MaQB4mh1xPtPmvCzkzd3d20YIYPOLoaYGNNtlKoU0LAK9yl7qd9uT1ucxXDkzRNNlFkcGK536ssZ5lcj%2FBiIzlzafF9GhdUOzyX0td9qV6IDJeUJMZceFjFq3iex49odCxKglz1clsT4MkpHrlb3p%2BAPummLcNCJ%2BTWBR90Nry8E8Y%2BDFzvkTmONOY8rQav8Ys%2Fd4sDLpp%2FxW%2BvhNcdPr09OlI7KPdfiPOoIla0OzcYyKFhVE%2FNQbAgKsKu6hCV0RhWqnxbcw31XdsrMhVuO0HiuOYeFJS0z700m5IUWOIcKTCfulvfjfmHJoN%2FAKDZ2Pmeb%2FsaizWd3gJm7NRGs6rw4Bdkc%2BHU%2FVykHixSWUobg%2Fe1i96ikt6hRRIdxrESyBrB1eL33Eke%2FeXgR4n8SayLII62EDiOkhM%2F%2FXucrWZxwrJIOhPtfB%2B1vAZA%2B8KJaHreP4uekLv7h91kgo%2BSCjWbhAUJup78ysxdCSxOWbSMPC00cQGOqUBezJQ3%2FDYLTZ%2FMdz3mCNZr0o4ItQ9xplnROSA0EXZxIu0x907YST1VCInQFqpM3h9p9a7fpnLKydotiS3gJv70YJbEjS1IQGXF4A3T8pyan%2FBLED0DbnilkER1fA5syUbXqM3DXw6PS%2FSOGb8K64Se8Io9rOa%2F4vnYUn8gkEFkIhg1KqT6qTPyd2ICsjMuN4kqyCSRPxG1Tx45FPMaQPY1rHInPw2&X-Amz-Signature=bf587f6e53a182232c4299affca13725478b987bcd61dd80123761f754b5790a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWDHLOD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBT9GLhN0TASuwgnm8OIdXvfOeaGod1XRS26iV8ceAe4AiEAtOw7D9rO472OfAoXdbw4xt1FowmBl%2FsXTlvpThGffNkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzLh0HEm2j%2BBmBlNyrcA8ppHGt%2BGPgMkyYySANjPwSmCGuxVjR0zqAypm2Xk8DKHDRI1GOjAzGUKoWz1M8kGxlit12vZyvscX4r58F%2FpEYjH5grEFXhNsGj%2F%2FEcMdId5hc85M6BTE5%2FXne5XJ70vtWVNvMDkkXkSuckN5MaQB4mh1xPtPmvCzkzd3d20YIYPOLoaYGNNtlKoU0LAK9yl7qd9uT1ucxXDkzRNNlFkcGK536ssZ5lcj%2FBiIzlzafF9GhdUOzyX0td9qV6IDJeUJMZceFjFq3iex49odCxKglz1clsT4MkpHrlb3p%2BAPummLcNCJ%2BTWBR90Nry8E8Y%2BDFzvkTmONOY8rQav8Ys%2Fd4sDLpp%2FxW%2BvhNcdPr09OlI7KPdfiPOoIla0OzcYyKFhVE%2FNQbAgKsKu6hCV0RhWqnxbcw31XdsrMhVuO0HiuOYeFJS0z700m5IUWOIcKTCfulvfjfmHJoN%2FAKDZ2Pmeb%2FsaizWd3gJm7NRGs6rw4Bdkc%2BHU%2FVykHixSWUobg%2Fe1i96ikt6hRRIdxrESyBrB1eL33Eke%2FeXgR4n8SayLII62EDiOkhM%2F%2FXucrWZxwrJIOhPtfB%2B1vAZA%2B8KJaHreP4uekLv7h91kgo%2BSCjWbhAUJup78ysxdCSxOWbSMPC00cQGOqUBezJQ3%2FDYLTZ%2FMdz3mCNZr0o4ItQ9xplnROSA0EXZxIu0x907YST1VCInQFqpM3h9p9a7fpnLKydotiS3gJv70YJbEjS1IQGXF4A3T8pyan%2FBLED0DbnilkER1fA5syUbXqM3DXw6PS%2FSOGb8K64Se8Io9rOa%2F4vnYUn8gkEFkIhg1KqT6qTPyd2ICsjMuN4kqyCSRPxG1Tx45FPMaQPY1rHInPw2&X-Amz-Signature=288408766220b16e786122b2f0040c453e6e6b7837ae7dc513a2e770bffd6f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWDHLOD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBT9GLhN0TASuwgnm8OIdXvfOeaGod1XRS26iV8ceAe4AiEAtOw7D9rO472OfAoXdbw4xt1FowmBl%2FsXTlvpThGffNkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzLh0HEm2j%2BBmBlNyrcA8ppHGt%2BGPgMkyYySANjPwSmCGuxVjR0zqAypm2Xk8DKHDRI1GOjAzGUKoWz1M8kGxlit12vZyvscX4r58F%2FpEYjH5grEFXhNsGj%2F%2FEcMdId5hc85M6BTE5%2FXne5XJ70vtWVNvMDkkXkSuckN5MaQB4mh1xPtPmvCzkzd3d20YIYPOLoaYGNNtlKoU0LAK9yl7qd9uT1ucxXDkzRNNlFkcGK536ssZ5lcj%2FBiIzlzafF9GhdUOzyX0td9qV6IDJeUJMZceFjFq3iex49odCxKglz1clsT4MkpHrlb3p%2BAPummLcNCJ%2BTWBR90Nry8E8Y%2BDFzvkTmONOY8rQav8Ys%2Fd4sDLpp%2FxW%2BvhNcdPr09OlI7KPdfiPOoIla0OzcYyKFhVE%2FNQbAgKsKu6hCV0RhWqnxbcw31XdsrMhVuO0HiuOYeFJS0z700m5IUWOIcKTCfulvfjfmHJoN%2FAKDZ2Pmeb%2FsaizWd3gJm7NRGs6rw4Bdkc%2BHU%2FVykHixSWUobg%2Fe1i96ikt6hRRIdxrESyBrB1eL33Eke%2FeXgR4n8SayLII62EDiOkhM%2F%2FXucrWZxwrJIOhPtfB%2B1vAZA%2B8KJaHreP4uekLv7h91kgo%2BSCjWbhAUJup78ysxdCSxOWbSMPC00cQGOqUBezJQ3%2FDYLTZ%2FMdz3mCNZr0o4ItQ9xplnROSA0EXZxIu0x907YST1VCInQFqpM3h9p9a7fpnLKydotiS3gJv70YJbEjS1IQGXF4A3T8pyan%2FBLED0DbnilkER1fA5syUbXqM3DXw6PS%2FSOGb8K64Se8Io9rOa%2F4vnYUn8gkEFkIhg1KqT6qTPyd2ICsjMuN4kqyCSRPxG1Tx45FPMaQPY1rHInPw2&X-Amz-Signature=a2dbc8b5298b3a36cf5afc8bbd473a740c30069d4625bf8bc73cbc0118f85ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWDHLOD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBT9GLhN0TASuwgnm8OIdXvfOeaGod1XRS26iV8ceAe4AiEAtOw7D9rO472OfAoXdbw4xt1FowmBl%2FsXTlvpThGffNkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzLh0HEm2j%2BBmBlNyrcA8ppHGt%2BGPgMkyYySANjPwSmCGuxVjR0zqAypm2Xk8DKHDRI1GOjAzGUKoWz1M8kGxlit12vZyvscX4r58F%2FpEYjH5grEFXhNsGj%2F%2FEcMdId5hc85M6BTE5%2FXne5XJ70vtWVNvMDkkXkSuckN5MaQB4mh1xPtPmvCzkzd3d20YIYPOLoaYGNNtlKoU0LAK9yl7qd9uT1ucxXDkzRNNlFkcGK536ssZ5lcj%2FBiIzlzafF9GhdUOzyX0td9qV6IDJeUJMZceFjFq3iex49odCxKglz1clsT4MkpHrlb3p%2BAPummLcNCJ%2BTWBR90Nry8E8Y%2BDFzvkTmONOY8rQav8Ys%2Fd4sDLpp%2FxW%2BvhNcdPr09OlI7KPdfiPOoIla0OzcYyKFhVE%2FNQbAgKsKu6hCV0RhWqnxbcw31XdsrMhVuO0HiuOYeFJS0z700m5IUWOIcKTCfulvfjfmHJoN%2FAKDZ2Pmeb%2FsaizWd3gJm7NRGs6rw4Bdkc%2BHU%2FVykHixSWUobg%2Fe1i96ikt6hRRIdxrESyBrB1eL33Eke%2FeXgR4n8SayLII62EDiOkhM%2F%2FXucrWZxwrJIOhPtfB%2B1vAZA%2B8KJaHreP4uekLv7h91kgo%2BSCjWbhAUJup78ysxdCSxOWbSMPC00cQGOqUBezJQ3%2FDYLTZ%2FMdz3mCNZr0o4ItQ9xplnROSA0EXZxIu0x907YST1VCInQFqpM3h9p9a7fpnLKydotiS3gJv70YJbEjS1IQGXF4A3T8pyan%2FBLED0DbnilkER1fA5syUbXqM3DXw6PS%2FSOGb8K64Se8Io9rOa%2F4vnYUn8gkEFkIhg1KqT6qTPyd2ICsjMuN4kqyCSRPxG1Tx45FPMaQPY1rHInPw2&X-Amz-Signature=3885f49c938a825c3f392dfcce81ef2662ef5e0de1620629146b9fd6b8604492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWDHLOD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBT9GLhN0TASuwgnm8OIdXvfOeaGod1XRS26iV8ceAe4AiEAtOw7D9rO472OfAoXdbw4xt1FowmBl%2FsXTlvpThGffNkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzLh0HEm2j%2BBmBlNyrcA8ppHGt%2BGPgMkyYySANjPwSmCGuxVjR0zqAypm2Xk8DKHDRI1GOjAzGUKoWz1M8kGxlit12vZyvscX4r58F%2FpEYjH5grEFXhNsGj%2F%2FEcMdId5hc85M6BTE5%2FXne5XJ70vtWVNvMDkkXkSuckN5MaQB4mh1xPtPmvCzkzd3d20YIYPOLoaYGNNtlKoU0LAK9yl7qd9uT1ucxXDkzRNNlFkcGK536ssZ5lcj%2FBiIzlzafF9GhdUOzyX0td9qV6IDJeUJMZceFjFq3iex49odCxKglz1clsT4MkpHrlb3p%2BAPummLcNCJ%2BTWBR90Nry8E8Y%2BDFzvkTmONOY8rQav8Ys%2Fd4sDLpp%2FxW%2BvhNcdPr09OlI7KPdfiPOoIla0OzcYyKFhVE%2FNQbAgKsKu6hCV0RhWqnxbcw31XdsrMhVuO0HiuOYeFJS0z700m5IUWOIcKTCfulvfjfmHJoN%2FAKDZ2Pmeb%2FsaizWd3gJm7NRGs6rw4Bdkc%2BHU%2FVykHixSWUobg%2Fe1i96ikt6hRRIdxrESyBrB1eL33Eke%2FeXgR4n8SayLII62EDiOkhM%2F%2FXucrWZxwrJIOhPtfB%2B1vAZA%2B8KJaHreP4uekLv7h91kgo%2BSCjWbhAUJup78ysxdCSxOWbSMPC00cQGOqUBezJQ3%2FDYLTZ%2FMdz3mCNZr0o4ItQ9xplnROSA0EXZxIu0x907YST1VCInQFqpM3h9p9a7fpnLKydotiS3gJv70YJbEjS1IQGXF4A3T8pyan%2FBLED0DbnilkER1fA5syUbXqM3DXw6PS%2FSOGb8K64Se8Io9rOa%2F4vnYUn8gkEFkIhg1KqT6qTPyd2ICsjMuN4kqyCSRPxG1Tx45FPMaQPY1rHInPw2&X-Amz-Signature=b97de3ebd10a30c7ed18b8c61146a42eac3e8472a808d28a82fe84528a9bb4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWDHLOD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBT9GLhN0TASuwgnm8OIdXvfOeaGod1XRS26iV8ceAe4AiEAtOw7D9rO472OfAoXdbw4xt1FowmBl%2FsXTlvpThGffNkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzLh0HEm2j%2BBmBlNyrcA8ppHGt%2BGPgMkyYySANjPwSmCGuxVjR0zqAypm2Xk8DKHDRI1GOjAzGUKoWz1M8kGxlit12vZyvscX4r58F%2FpEYjH5grEFXhNsGj%2F%2FEcMdId5hc85M6BTE5%2FXne5XJ70vtWVNvMDkkXkSuckN5MaQB4mh1xPtPmvCzkzd3d20YIYPOLoaYGNNtlKoU0LAK9yl7qd9uT1ucxXDkzRNNlFkcGK536ssZ5lcj%2FBiIzlzafF9GhdUOzyX0td9qV6IDJeUJMZceFjFq3iex49odCxKglz1clsT4MkpHrlb3p%2BAPummLcNCJ%2BTWBR90Nry8E8Y%2BDFzvkTmONOY8rQav8Ys%2Fd4sDLpp%2FxW%2BvhNcdPr09OlI7KPdfiPOoIla0OzcYyKFhVE%2FNQbAgKsKu6hCV0RhWqnxbcw31XdsrMhVuO0HiuOYeFJS0z700m5IUWOIcKTCfulvfjfmHJoN%2FAKDZ2Pmeb%2FsaizWd3gJm7NRGs6rw4Bdkc%2BHU%2FVykHixSWUobg%2Fe1i96ikt6hRRIdxrESyBrB1eL33Eke%2FeXgR4n8SayLII62EDiOkhM%2F%2FXucrWZxwrJIOhPtfB%2B1vAZA%2B8KJaHreP4uekLv7h91kgo%2BSCjWbhAUJup78ysxdCSxOWbSMPC00cQGOqUBezJQ3%2FDYLTZ%2FMdz3mCNZr0o4ItQ9xplnROSA0EXZxIu0x907YST1VCInQFqpM3h9p9a7fpnLKydotiS3gJv70YJbEjS1IQGXF4A3T8pyan%2FBLED0DbnilkER1fA5syUbXqM3DXw6PS%2FSOGb8K64Se8Io9rOa%2F4vnYUn8gkEFkIhg1KqT6qTPyd2ICsjMuN4kqyCSRPxG1Tx45FPMaQPY1rHInPw2&X-Amz-Signature=21d00cad66e9223ef75e1d31cf790f01375ff6338d281c32b611eaa8fb65245d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWDHLOD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBT9GLhN0TASuwgnm8OIdXvfOeaGod1XRS26iV8ceAe4AiEAtOw7D9rO472OfAoXdbw4xt1FowmBl%2FsXTlvpThGffNkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzLh0HEm2j%2BBmBlNyrcA8ppHGt%2BGPgMkyYySANjPwSmCGuxVjR0zqAypm2Xk8DKHDRI1GOjAzGUKoWz1M8kGxlit12vZyvscX4r58F%2FpEYjH5grEFXhNsGj%2F%2FEcMdId5hc85M6BTE5%2FXne5XJ70vtWVNvMDkkXkSuckN5MaQB4mh1xPtPmvCzkzd3d20YIYPOLoaYGNNtlKoU0LAK9yl7qd9uT1ucxXDkzRNNlFkcGK536ssZ5lcj%2FBiIzlzafF9GhdUOzyX0td9qV6IDJeUJMZceFjFq3iex49odCxKglz1clsT4MkpHrlb3p%2BAPummLcNCJ%2BTWBR90Nry8E8Y%2BDFzvkTmONOY8rQav8Ys%2Fd4sDLpp%2FxW%2BvhNcdPr09OlI7KPdfiPOoIla0OzcYyKFhVE%2FNQbAgKsKu6hCV0RhWqnxbcw31XdsrMhVuO0HiuOYeFJS0z700m5IUWOIcKTCfulvfjfmHJoN%2FAKDZ2Pmeb%2FsaizWd3gJm7NRGs6rw4Bdkc%2BHU%2FVykHixSWUobg%2Fe1i96ikt6hRRIdxrESyBrB1eL33Eke%2FeXgR4n8SayLII62EDiOkhM%2F%2FXucrWZxwrJIOhPtfB%2B1vAZA%2B8KJaHreP4uekLv7h91kgo%2BSCjWbhAUJup78ysxdCSxOWbSMPC00cQGOqUBezJQ3%2FDYLTZ%2FMdz3mCNZr0o4ItQ9xplnROSA0EXZxIu0x907YST1VCInQFqpM3h9p9a7fpnLKydotiS3gJv70YJbEjS1IQGXF4A3T8pyan%2FBLED0DbnilkER1fA5syUbXqM3DXw6PS%2FSOGb8K64Se8Io9rOa%2F4vnYUn8gkEFkIhg1KqT6qTPyd2ICsjMuN4kqyCSRPxG1Tx45FPMaQPY1rHInPw2&X-Amz-Signature=6aadae6fbd9f6274cf4dd426611a174cbd0d2018c5d041ae53d05de628ec2fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
