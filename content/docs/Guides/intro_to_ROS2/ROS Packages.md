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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWDGRKX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD0TnT5rrwv3%2BPtlq8jDHei7KSI71D5qidMoBWQPRRL%2FAIgdGtvMRoncfSBa7itFKOteVtonuaT0ocwClYBDckUT7kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKkIlJ%2BRvcl0F9lcCrcAzoAFgw3BJeef1AnYNmjk3ZmT%2Fz0B6LH%2B9ACVJLtx4L2y1K42Ga008kfBb5c52fSQwjzSPJJUILFGSSOB5axMCr1EiKL0DgM7OwtTnLpQcHsMj2EquRPLewHKbSCb3aVhwLVSwO9dEy0H7P445o5yh2VOkSvfCLghltLj7YvRp4nawvR%2FDOgpjIEfra68pb7xj9OLUTxLeK%2FS6CSYHe%2Foib2duDQBHiYiqRd%2Bo9dkfECtv%2FOmPVg5%2FlMPDR6Rk77tiV9fUI4e%2Ba2qjkQyIVB9hoJMyj%2Br4qjDQHyiOD12V0KG4frSDU8Y%2F8ZJi72a%2FCfqxwhvOmlI3OwMOzWuhNMffCpyiKENnkz6KU44ZDPyfHMLydLcLQFj07GkP5jXtGcgxbat9m4beWi8JqbJCENN%2BGCvbu1syqKg1FXcfRKvvGRsgHlOMz6MtC7Lfvo4LW163UhO2JvpDUJVGwQas88fGfPXuC5Z4FNLel5CX41EyHp7Ear7%2BN51SRKPQ%2B5rffFHs1uNGszt3V5b89OfTEnoFcflr0hFrK2%2FkBfjtKruocSg%2FPaGfiLm6oIdsbLIcit0KfDKdYQIytJtv1pep1eHU2FAPVa2DQUh9El5SswTuPonYJE2UXqU26Y%2FGHTMKfx2sAGOqUBLZTdo6PLIvmeCwrM%2BISip18QYmVf5SinDdw3GFadZo%2FSDpu9ye2y1tQOOIam12rOM1RpRMZkRy6oH0cPbZQ55hZbRnGB3wlxMW91CIr6KQQXhdzy9lZTm5GSdVSGblH8Mjnf0v72jmIbGcVPyefWI1XuViFGf93sITvNrRwsuAmyAE6e5VHOuAHgnvJE2Hf2ikSlCw6%2Bjb20MNGYnrJLfiTUUgX2&X-Amz-Signature=9847e17789c32e08b6560cd00986c105ed85c227f3e0958c7374e0e528d61969&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWDGRKX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD0TnT5rrwv3%2BPtlq8jDHei7KSI71D5qidMoBWQPRRL%2FAIgdGtvMRoncfSBa7itFKOteVtonuaT0ocwClYBDckUT7kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKkIlJ%2BRvcl0F9lcCrcAzoAFgw3BJeef1AnYNmjk3ZmT%2Fz0B6LH%2B9ACVJLtx4L2y1K42Ga008kfBb5c52fSQwjzSPJJUILFGSSOB5axMCr1EiKL0DgM7OwtTnLpQcHsMj2EquRPLewHKbSCb3aVhwLVSwO9dEy0H7P445o5yh2VOkSvfCLghltLj7YvRp4nawvR%2FDOgpjIEfra68pb7xj9OLUTxLeK%2FS6CSYHe%2Foib2duDQBHiYiqRd%2Bo9dkfECtv%2FOmPVg5%2FlMPDR6Rk77tiV9fUI4e%2Ba2qjkQyIVB9hoJMyj%2Br4qjDQHyiOD12V0KG4frSDU8Y%2F8ZJi72a%2FCfqxwhvOmlI3OwMOzWuhNMffCpyiKENnkz6KU44ZDPyfHMLydLcLQFj07GkP5jXtGcgxbat9m4beWi8JqbJCENN%2BGCvbu1syqKg1FXcfRKvvGRsgHlOMz6MtC7Lfvo4LW163UhO2JvpDUJVGwQas88fGfPXuC5Z4FNLel5CX41EyHp7Ear7%2BN51SRKPQ%2B5rffFHs1uNGszt3V5b89OfTEnoFcflr0hFrK2%2FkBfjtKruocSg%2FPaGfiLm6oIdsbLIcit0KfDKdYQIytJtv1pep1eHU2FAPVa2DQUh9El5SswTuPonYJE2UXqU26Y%2FGHTMKfx2sAGOqUBLZTdo6PLIvmeCwrM%2BISip18QYmVf5SinDdw3GFadZo%2FSDpu9ye2y1tQOOIam12rOM1RpRMZkRy6oH0cPbZQ55hZbRnGB3wlxMW91CIr6KQQXhdzy9lZTm5GSdVSGblH8Mjnf0v72jmIbGcVPyefWI1XuViFGf93sITvNrRwsuAmyAE6e5VHOuAHgnvJE2Hf2ikSlCw6%2Bjb20MNGYnrJLfiTUUgX2&X-Amz-Signature=c95cda81df500444d488c03464b1844acd9ac01f3f2c41f407701edaac59245c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWDGRKX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD0TnT5rrwv3%2BPtlq8jDHei7KSI71D5qidMoBWQPRRL%2FAIgdGtvMRoncfSBa7itFKOteVtonuaT0ocwClYBDckUT7kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKkIlJ%2BRvcl0F9lcCrcAzoAFgw3BJeef1AnYNmjk3ZmT%2Fz0B6LH%2B9ACVJLtx4L2y1K42Ga008kfBb5c52fSQwjzSPJJUILFGSSOB5axMCr1EiKL0DgM7OwtTnLpQcHsMj2EquRPLewHKbSCb3aVhwLVSwO9dEy0H7P445o5yh2VOkSvfCLghltLj7YvRp4nawvR%2FDOgpjIEfra68pb7xj9OLUTxLeK%2FS6CSYHe%2Foib2duDQBHiYiqRd%2Bo9dkfECtv%2FOmPVg5%2FlMPDR6Rk77tiV9fUI4e%2Ba2qjkQyIVB9hoJMyj%2Br4qjDQHyiOD12V0KG4frSDU8Y%2F8ZJi72a%2FCfqxwhvOmlI3OwMOzWuhNMffCpyiKENnkz6KU44ZDPyfHMLydLcLQFj07GkP5jXtGcgxbat9m4beWi8JqbJCENN%2BGCvbu1syqKg1FXcfRKvvGRsgHlOMz6MtC7Lfvo4LW163UhO2JvpDUJVGwQas88fGfPXuC5Z4FNLel5CX41EyHp7Ear7%2BN51SRKPQ%2B5rffFHs1uNGszt3V5b89OfTEnoFcflr0hFrK2%2FkBfjtKruocSg%2FPaGfiLm6oIdsbLIcit0KfDKdYQIytJtv1pep1eHU2FAPVa2DQUh9El5SswTuPonYJE2UXqU26Y%2FGHTMKfx2sAGOqUBLZTdo6PLIvmeCwrM%2BISip18QYmVf5SinDdw3GFadZo%2FSDpu9ye2y1tQOOIam12rOM1RpRMZkRy6oH0cPbZQ55hZbRnGB3wlxMW91CIr6KQQXhdzy9lZTm5GSdVSGblH8Mjnf0v72jmIbGcVPyefWI1XuViFGf93sITvNrRwsuAmyAE6e5VHOuAHgnvJE2Hf2ikSlCw6%2Bjb20MNGYnrJLfiTUUgX2&X-Amz-Signature=19fc0a45120b89d54da0e880e3b22331eb03a49e3c4639dcfc5e3d3b06d921fe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWDGRKX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD0TnT5rrwv3%2BPtlq8jDHei7KSI71D5qidMoBWQPRRL%2FAIgdGtvMRoncfSBa7itFKOteVtonuaT0ocwClYBDckUT7kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKkIlJ%2BRvcl0F9lcCrcAzoAFgw3BJeef1AnYNmjk3ZmT%2Fz0B6LH%2B9ACVJLtx4L2y1K42Ga008kfBb5c52fSQwjzSPJJUILFGSSOB5axMCr1EiKL0DgM7OwtTnLpQcHsMj2EquRPLewHKbSCb3aVhwLVSwO9dEy0H7P445o5yh2VOkSvfCLghltLj7YvRp4nawvR%2FDOgpjIEfra68pb7xj9OLUTxLeK%2FS6CSYHe%2Foib2duDQBHiYiqRd%2Bo9dkfECtv%2FOmPVg5%2FlMPDR6Rk77tiV9fUI4e%2Ba2qjkQyIVB9hoJMyj%2Br4qjDQHyiOD12V0KG4frSDU8Y%2F8ZJi72a%2FCfqxwhvOmlI3OwMOzWuhNMffCpyiKENnkz6KU44ZDPyfHMLydLcLQFj07GkP5jXtGcgxbat9m4beWi8JqbJCENN%2BGCvbu1syqKg1FXcfRKvvGRsgHlOMz6MtC7Lfvo4LW163UhO2JvpDUJVGwQas88fGfPXuC5Z4FNLel5CX41EyHp7Ear7%2BN51SRKPQ%2B5rffFHs1uNGszt3V5b89OfTEnoFcflr0hFrK2%2FkBfjtKruocSg%2FPaGfiLm6oIdsbLIcit0KfDKdYQIytJtv1pep1eHU2FAPVa2DQUh9El5SswTuPonYJE2UXqU26Y%2FGHTMKfx2sAGOqUBLZTdo6PLIvmeCwrM%2BISip18QYmVf5SinDdw3GFadZo%2FSDpu9ye2y1tQOOIam12rOM1RpRMZkRy6oH0cPbZQ55hZbRnGB3wlxMW91CIr6KQQXhdzy9lZTm5GSdVSGblH8Mjnf0v72jmIbGcVPyefWI1XuViFGf93sITvNrRwsuAmyAE6e5VHOuAHgnvJE2Hf2ikSlCw6%2Bjb20MNGYnrJLfiTUUgX2&X-Amz-Signature=829f936597fc1ec0ecdf9df2d8e53cd1bbb15a5f423f05784704de3d341737b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWDGRKX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD0TnT5rrwv3%2BPtlq8jDHei7KSI71D5qidMoBWQPRRL%2FAIgdGtvMRoncfSBa7itFKOteVtonuaT0ocwClYBDckUT7kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKkIlJ%2BRvcl0F9lcCrcAzoAFgw3BJeef1AnYNmjk3ZmT%2Fz0B6LH%2B9ACVJLtx4L2y1K42Ga008kfBb5c52fSQwjzSPJJUILFGSSOB5axMCr1EiKL0DgM7OwtTnLpQcHsMj2EquRPLewHKbSCb3aVhwLVSwO9dEy0H7P445o5yh2VOkSvfCLghltLj7YvRp4nawvR%2FDOgpjIEfra68pb7xj9OLUTxLeK%2FS6CSYHe%2Foib2duDQBHiYiqRd%2Bo9dkfECtv%2FOmPVg5%2FlMPDR6Rk77tiV9fUI4e%2Ba2qjkQyIVB9hoJMyj%2Br4qjDQHyiOD12V0KG4frSDU8Y%2F8ZJi72a%2FCfqxwhvOmlI3OwMOzWuhNMffCpyiKENnkz6KU44ZDPyfHMLydLcLQFj07GkP5jXtGcgxbat9m4beWi8JqbJCENN%2BGCvbu1syqKg1FXcfRKvvGRsgHlOMz6MtC7Lfvo4LW163UhO2JvpDUJVGwQas88fGfPXuC5Z4FNLel5CX41EyHp7Ear7%2BN51SRKPQ%2B5rffFHs1uNGszt3V5b89OfTEnoFcflr0hFrK2%2FkBfjtKruocSg%2FPaGfiLm6oIdsbLIcit0KfDKdYQIytJtv1pep1eHU2FAPVa2DQUh9El5SswTuPonYJE2UXqU26Y%2FGHTMKfx2sAGOqUBLZTdo6PLIvmeCwrM%2BISip18QYmVf5SinDdw3GFadZo%2FSDpu9ye2y1tQOOIam12rOM1RpRMZkRy6oH0cPbZQ55hZbRnGB3wlxMW91CIr6KQQXhdzy9lZTm5GSdVSGblH8Mjnf0v72jmIbGcVPyefWI1XuViFGf93sITvNrRwsuAmyAE6e5VHOuAHgnvJE2Hf2ikSlCw6%2Bjb20MNGYnrJLfiTUUgX2&X-Amz-Signature=51e1b71715feb09d9a213c972bcdd77f35239533c7e5936e36fdaf7a71437293&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWDGRKX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD0TnT5rrwv3%2BPtlq8jDHei7KSI71D5qidMoBWQPRRL%2FAIgdGtvMRoncfSBa7itFKOteVtonuaT0ocwClYBDckUT7kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKkIlJ%2BRvcl0F9lcCrcAzoAFgw3BJeef1AnYNmjk3ZmT%2Fz0B6LH%2B9ACVJLtx4L2y1K42Ga008kfBb5c52fSQwjzSPJJUILFGSSOB5axMCr1EiKL0DgM7OwtTnLpQcHsMj2EquRPLewHKbSCb3aVhwLVSwO9dEy0H7P445o5yh2VOkSvfCLghltLj7YvRp4nawvR%2FDOgpjIEfra68pb7xj9OLUTxLeK%2FS6CSYHe%2Foib2duDQBHiYiqRd%2Bo9dkfECtv%2FOmPVg5%2FlMPDR6Rk77tiV9fUI4e%2Ba2qjkQyIVB9hoJMyj%2Br4qjDQHyiOD12V0KG4frSDU8Y%2F8ZJi72a%2FCfqxwhvOmlI3OwMOzWuhNMffCpyiKENnkz6KU44ZDPyfHMLydLcLQFj07GkP5jXtGcgxbat9m4beWi8JqbJCENN%2BGCvbu1syqKg1FXcfRKvvGRsgHlOMz6MtC7Lfvo4LW163UhO2JvpDUJVGwQas88fGfPXuC5Z4FNLel5CX41EyHp7Ear7%2BN51SRKPQ%2B5rffFHs1uNGszt3V5b89OfTEnoFcflr0hFrK2%2FkBfjtKruocSg%2FPaGfiLm6oIdsbLIcit0KfDKdYQIytJtv1pep1eHU2FAPVa2DQUh9El5SswTuPonYJE2UXqU26Y%2FGHTMKfx2sAGOqUBLZTdo6PLIvmeCwrM%2BISip18QYmVf5SinDdw3GFadZo%2FSDpu9ye2y1tQOOIam12rOM1RpRMZkRy6oH0cPbZQ55hZbRnGB3wlxMW91CIr6KQQXhdzy9lZTm5GSdVSGblH8Mjnf0v72jmIbGcVPyefWI1XuViFGf93sITvNrRwsuAmyAE6e5VHOuAHgnvJE2Hf2ikSlCw6%2Bjb20MNGYnrJLfiTUUgX2&X-Amz-Signature=00276900d95d218fcf6b6062ade0e10c9625558b0d04798ef4b69f643f4526cf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWDGRKX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD0TnT5rrwv3%2BPtlq8jDHei7KSI71D5qidMoBWQPRRL%2FAIgdGtvMRoncfSBa7itFKOteVtonuaT0ocwClYBDckUT7kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKkIlJ%2BRvcl0F9lcCrcAzoAFgw3BJeef1AnYNmjk3ZmT%2Fz0B6LH%2B9ACVJLtx4L2y1K42Ga008kfBb5c52fSQwjzSPJJUILFGSSOB5axMCr1EiKL0DgM7OwtTnLpQcHsMj2EquRPLewHKbSCb3aVhwLVSwO9dEy0H7P445o5yh2VOkSvfCLghltLj7YvRp4nawvR%2FDOgpjIEfra68pb7xj9OLUTxLeK%2FS6CSYHe%2Foib2duDQBHiYiqRd%2Bo9dkfECtv%2FOmPVg5%2FlMPDR6Rk77tiV9fUI4e%2Ba2qjkQyIVB9hoJMyj%2Br4qjDQHyiOD12V0KG4frSDU8Y%2F8ZJi72a%2FCfqxwhvOmlI3OwMOzWuhNMffCpyiKENnkz6KU44ZDPyfHMLydLcLQFj07GkP5jXtGcgxbat9m4beWi8JqbJCENN%2BGCvbu1syqKg1FXcfRKvvGRsgHlOMz6MtC7Lfvo4LW163UhO2JvpDUJVGwQas88fGfPXuC5Z4FNLel5CX41EyHp7Ear7%2BN51SRKPQ%2B5rffFHs1uNGszt3V5b89OfTEnoFcflr0hFrK2%2FkBfjtKruocSg%2FPaGfiLm6oIdsbLIcit0KfDKdYQIytJtv1pep1eHU2FAPVa2DQUh9El5SswTuPonYJE2UXqU26Y%2FGHTMKfx2sAGOqUBLZTdo6PLIvmeCwrM%2BISip18QYmVf5SinDdw3GFadZo%2FSDpu9ye2y1tQOOIam12rOM1RpRMZkRy6oH0cPbZQ55hZbRnGB3wlxMW91CIr6KQQXhdzy9lZTm5GSdVSGblH8Mjnf0v72jmIbGcVPyefWI1XuViFGf93sITvNrRwsuAmyAE6e5VHOuAHgnvJE2Hf2ikSlCw6%2Bjb20MNGYnrJLfiTUUgX2&X-Amz-Signature=f7866cb2fd6dd622b8daf6f7944df52c1d5b01dd1eeef98f24455f65b4a4e39f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
