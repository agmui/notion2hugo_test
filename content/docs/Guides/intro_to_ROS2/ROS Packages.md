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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3FN73%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCE%2BolJEoYezGnBZ0z%2Bj1h3vFtmLjkPCUdEWBsb3VXjHwIhAOyd90Nj8h4L4wRtz2QAZWBsDlVcQ7yrzrRVTX8SvimNKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlmmg8buVTzNavlMUq3AOoc6iZnwzYetlALkYuJZONrB0QhuaTCBcxfOqhQY2sUn%2B3Fq9%2FXroNCLkVHpv2%2BRjdZHcwU5Xul%2FpFQIUIn0W2uoW7DTOqlWoM2GUAhK5SxpHoNfseuSXAEe20J%2BWplEvQGXnWfZOJTCr7tFSV8JmMledqiUfkK2GE3%2Bes8wVvJNHXHzshg%2Fg37ZTyy7xZY1ZHYYlOuffHQ49%2Bxbqr4NaNYkMF33RqDGXd%2FDmHVAk%2BUTuQvHNhd3I3pgb7hjZZ5N6x8sc1CBmXqyw6UPpaSmYZt1Qc9lJ8kwGEX0z4vzIartkG5XLmQEivh6fX46mq63TtjieqltyAhw6CC6S3SMNfTi3GMUBP3EzNRqhUzKgmIoYvP7mRAhEy7Uk2KTnmqgE5khW0YkVFb5wuHhnCKKe%2FlNrdXks0Nw%2Fpsy%2BUzaXYR9BcmkXTPjXNhkKUf9Uq0fHWvOnACsRJvyWgnAfvclG1hJCAzVneGrauYNCFTIzs4hB6evSInVpLvFbF2ubScsfYLTu3oRyENSxdSJshEMaXaEDoDwIrK8gu24BEomUrepciYe7%2FHev3O3k3ctNiFkyi0kuOhXmNXmSybSwR4OHDaycYd%2FKzWhpM%2B0ATA0b3Q941N1pr1w6NRIupdTD816DABjqkAXNDpDp0IhDgRSfTMXvFfPW9Ql%2BlqmkO5TyCmQD5lwRafIFv6wqhNINHQ1MUVPlvaE%2Fs8GAKa7SBCbWuj9YW8W45plEN4dM1rmIWR6BClY2m5rpITuDcRIh9cx5ESeK45FY%2FeGTK%2BAFggQahFwgn32D2c90R%2B2Lq6DtVArqaKFiQZm9gw0XmKyajpeAo45JwCoQd8FZuavjGUSfJScFs9l0ymXPS&X-Amz-Signature=cd70065de246646cc8594909ba862f5c00dc8d1be19fdbe229717bcb61a9f984&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3FN73%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCE%2BolJEoYezGnBZ0z%2Bj1h3vFtmLjkPCUdEWBsb3VXjHwIhAOyd90Nj8h4L4wRtz2QAZWBsDlVcQ7yrzrRVTX8SvimNKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlmmg8buVTzNavlMUq3AOoc6iZnwzYetlALkYuJZONrB0QhuaTCBcxfOqhQY2sUn%2B3Fq9%2FXroNCLkVHpv2%2BRjdZHcwU5Xul%2FpFQIUIn0W2uoW7DTOqlWoM2GUAhK5SxpHoNfseuSXAEe20J%2BWplEvQGXnWfZOJTCr7tFSV8JmMledqiUfkK2GE3%2Bes8wVvJNHXHzshg%2Fg37ZTyy7xZY1ZHYYlOuffHQ49%2Bxbqr4NaNYkMF33RqDGXd%2FDmHVAk%2BUTuQvHNhd3I3pgb7hjZZ5N6x8sc1CBmXqyw6UPpaSmYZt1Qc9lJ8kwGEX0z4vzIartkG5XLmQEivh6fX46mq63TtjieqltyAhw6CC6S3SMNfTi3GMUBP3EzNRqhUzKgmIoYvP7mRAhEy7Uk2KTnmqgE5khW0YkVFb5wuHhnCKKe%2FlNrdXks0Nw%2Fpsy%2BUzaXYR9BcmkXTPjXNhkKUf9Uq0fHWvOnACsRJvyWgnAfvclG1hJCAzVneGrauYNCFTIzs4hB6evSInVpLvFbF2ubScsfYLTu3oRyENSxdSJshEMaXaEDoDwIrK8gu24BEomUrepciYe7%2FHev3O3k3ctNiFkyi0kuOhXmNXmSybSwR4OHDaycYd%2FKzWhpM%2B0ATA0b3Q941N1pr1w6NRIupdTD816DABjqkAXNDpDp0IhDgRSfTMXvFfPW9Ql%2BlqmkO5TyCmQD5lwRafIFv6wqhNINHQ1MUVPlvaE%2Fs8GAKa7SBCbWuj9YW8W45plEN4dM1rmIWR6BClY2m5rpITuDcRIh9cx5ESeK45FY%2FeGTK%2BAFggQahFwgn32D2c90R%2B2Lq6DtVArqaKFiQZm9gw0XmKyajpeAo45JwCoQd8FZuavjGUSfJScFs9l0ymXPS&X-Amz-Signature=34b2f391c5a448bcf74d002883fa795522fa8973f50fc6e853f57e8c188ff442&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3FN73%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCE%2BolJEoYezGnBZ0z%2Bj1h3vFtmLjkPCUdEWBsb3VXjHwIhAOyd90Nj8h4L4wRtz2QAZWBsDlVcQ7yrzrRVTX8SvimNKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlmmg8buVTzNavlMUq3AOoc6iZnwzYetlALkYuJZONrB0QhuaTCBcxfOqhQY2sUn%2B3Fq9%2FXroNCLkVHpv2%2BRjdZHcwU5Xul%2FpFQIUIn0W2uoW7DTOqlWoM2GUAhK5SxpHoNfseuSXAEe20J%2BWplEvQGXnWfZOJTCr7tFSV8JmMledqiUfkK2GE3%2Bes8wVvJNHXHzshg%2Fg37ZTyy7xZY1ZHYYlOuffHQ49%2Bxbqr4NaNYkMF33RqDGXd%2FDmHVAk%2BUTuQvHNhd3I3pgb7hjZZ5N6x8sc1CBmXqyw6UPpaSmYZt1Qc9lJ8kwGEX0z4vzIartkG5XLmQEivh6fX46mq63TtjieqltyAhw6CC6S3SMNfTi3GMUBP3EzNRqhUzKgmIoYvP7mRAhEy7Uk2KTnmqgE5khW0YkVFb5wuHhnCKKe%2FlNrdXks0Nw%2Fpsy%2BUzaXYR9BcmkXTPjXNhkKUf9Uq0fHWvOnACsRJvyWgnAfvclG1hJCAzVneGrauYNCFTIzs4hB6evSInVpLvFbF2ubScsfYLTu3oRyENSxdSJshEMaXaEDoDwIrK8gu24BEomUrepciYe7%2FHev3O3k3ctNiFkyi0kuOhXmNXmSybSwR4OHDaycYd%2FKzWhpM%2B0ATA0b3Q941N1pr1w6NRIupdTD816DABjqkAXNDpDp0IhDgRSfTMXvFfPW9Ql%2BlqmkO5TyCmQD5lwRafIFv6wqhNINHQ1MUVPlvaE%2Fs8GAKa7SBCbWuj9YW8W45plEN4dM1rmIWR6BClY2m5rpITuDcRIh9cx5ESeK45FY%2FeGTK%2BAFggQahFwgn32D2c90R%2B2Lq6DtVArqaKFiQZm9gw0XmKyajpeAo45JwCoQd8FZuavjGUSfJScFs9l0ymXPS&X-Amz-Signature=2d9145797f0f7144af409f0e393a7fc99caf17d29fb485eefb21645b60698d75&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3FN73%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCE%2BolJEoYezGnBZ0z%2Bj1h3vFtmLjkPCUdEWBsb3VXjHwIhAOyd90Nj8h4L4wRtz2QAZWBsDlVcQ7yrzrRVTX8SvimNKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlmmg8buVTzNavlMUq3AOoc6iZnwzYetlALkYuJZONrB0QhuaTCBcxfOqhQY2sUn%2B3Fq9%2FXroNCLkVHpv2%2BRjdZHcwU5Xul%2FpFQIUIn0W2uoW7DTOqlWoM2GUAhK5SxpHoNfseuSXAEe20J%2BWplEvQGXnWfZOJTCr7tFSV8JmMledqiUfkK2GE3%2Bes8wVvJNHXHzshg%2Fg37ZTyy7xZY1ZHYYlOuffHQ49%2Bxbqr4NaNYkMF33RqDGXd%2FDmHVAk%2BUTuQvHNhd3I3pgb7hjZZ5N6x8sc1CBmXqyw6UPpaSmYZt1Qc9lJ8kwGEX0z4vzIartkG5XLmQEivh6fX46mq63TtjieqltyAhw6CC6S3SMNfTi3GMUBP3EzNRqhUzKgmIoYvP7mRAhEy7Uk2KTnmqgE5khW0YkVFb5wuHhnCKKe%2FlNrdXks0Nw%2Fpsy%2BUzaXYR9BcmkXTPjXNhkKUf9Uq0fHWvOnACsRJvyWgnAfvclG1hJCAzVneGrauYNCFTIzs4hB6evSInVpLvFbF2ubScsfYLTu3oRyENSxdSJshEMaXaEDoDwIrK8gu24BEomUrepciYe7%2FHev3O3k3ctNiFkyi0kuOhXmNXmSybSwR4OHDaycYd%2FKzWhpM%2B0ATA0b3Q941N1pr1w6NRIupdTD816DABjqkAXNDpDp0IhDgRSfTMXvFfPW9Ql%2BlqmkO5TyCmQD5lwRafIFv6wqhNINHQ1MUVPlvaE%2Fs8GAKa7SBCbWuj9YW8W45plEN4dM1rmIWR6BClY2m5rpITuDcRIh9cx5ESeK45FY%2FeGTK%2BAFggQahFwgn32D2c90R%2B2Lq6DtVArqaKFiQZm9gw0XmKyajpeAo45JwCoQd8FZuavjGUSfJScFs9l0ymXPS&X-Amz-Signature=3a8ae38cc35985cfc8b5776598fa7738416dae245067e184cbdcd2ee41a3c5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3FN73%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCE%2BolJEoYezGnBZ0z%2Bj1h3vFtmLjkPCUdEWBsb3VXjHwIhAOyd90Nj8h4L4wRtz2QAZWBsDlVcQ7yrzrRVTX8SvimNKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlmmg8buVTzNavlMUq3AOoc6iZnwzYetlALkYuJZONrB0QhuaTCBcxfOqhQY2sUn%2B3Fq9%2FXroNCLkVHpv2%2BRjdZHcwU5Xul%2FpFQIUIn0W2uoW7DTOqlWoM2GUAhK5SxpHoNfseuSXAEe20J%2BWplEvQGXnWfZOJTCr7tFSV8JmMledqiUfkK2GE3%2Bes8wVvJNHXHzshg%2Fg37ZTyy7xZY1ZHYYlOuffHQ49%2Bxbqr4NaNYkMF33RqDGXd%2FDmHVAk%2BUTuQvHNhd3I3pgb7hjZZ5N6x8sc1CBmXqyw6UPpaSmYZt1Qc9lJ8kwGEX0z4vzIartkG5XLmQEivh6fX46mq63TtjieqltyAhw6CC6S3SMNfTi3GMUBP3EzNRqhUzKgmIoYvP7mRAhEy7Uk2KTnmqgE5khW0YkVFb5wuHhnCKKe%2FlNrdXks0Nw%2Fpsy%2BUzaXYR9BcmkXTPjXNhkKUf9Uq0fHWvOnACsRJvyWgnAfvclG1hJCAzVneGrauYNCFTIzs4hB6evSInVpLvFbF2ubScsfYLTu3oRyENSxdSJshEMaXaEDoDwIrK8gu24BEomUrepciYe7%2FHev3O3k3ctNiFkyi0kuOhXmNXmSybSwR4OHDaycYd%2FKzWhpM%2B0ATA0b3Q941N1pr1w6NRIupdTD816DABjqkAXNDpDp0IhDgRSfTMXvFfPW9Ql%2BlqmkO5TyCmQD5lwRafIFv6wqhNINHQ1MUVPlvaE%2Fs8GAKa7SBCbWuj9YW8W45plEN4dM1rmIWR6BClY2m5rpITuDcRIh9cx5ESeK45FY%2FeGTK%2BAFggQahFwgn32D2c90R%2B2Lq6DtVArqaKFiQZm9gw0XmKyajpeAo45JwCoQd8FZuavjGUSfJScFs9l0ymXPS&X-Amz-Signature=d7d3119431280561fd569a0fb47c8b4aba70489e6fd1d38f26d37b18342eb073&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3FN73%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCE%2BolJEoYezGnBZ0z%2Bj1h3vFtmLjkPCUdEWBsb3VXjHwIhAOyd90Nj8h4L4wRtz2QAZWBsDlVcQ7yrzrRVTX8SvimNKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlmmg8buVTzNavlMUq3AOoc6iZnwzYetlALkYuJZONrB0QhuaTCBcxfOqhQY2sUn%2B3Fq9%2FXroNCLkVHpv2%2BRjdZHcwU5Xul%2FpFQIUIn0W2uoW7DTOqlWoM2GUAhK5SxpHoNfseuSXAEe20J%2BWplEvQGXnWfZOJTCr7tFSV8JmMledqiUfkK2GE3%2Bes8wVvJNHXHzshg%2Fg37ZTyy7xZY1ZHYYlOuffHQ49%2Bxbqr4NaNYkMF33RqDGXd%2FDmHVAk%2BUTuQvHNhd3I3pgb7hjZZ5N6x8sc1CBmXqyw6UPpaSmYZt1Qc9lJ8kwGEX0z4vzIartkG5XLmQEivh6fX46mq63TtjieqltyAhw6CC6S3SMNfTi3GMUBP3EzNRqhUzKgmIoYvP7mRAhEy7Uk2KTnmqgE5khW0YkVFb5wuHhnCKKe%2FlNrdXks0Nw%2Fpsy%2BUzaXYR9BcmkXTPjXNhkKUf9Uq0fHWvOnACsRJvyWgnAfvclG1hJCAzVneGrauYNCFTIzs4hB6evSInVpLvFbF2ubScsfYLTu3oRyENSxdSJshEMaXaEDoDwIrK8gu24BEomUrepciYe7%2FHev3O3k3ctNiFkyi0kuOhXmNXmSybSwR4OHDaycYd%2FKzWhpM%2B0ATA0b3Q941N1pr1w6NRIupdTD816DABjqkAXNDpDp0IhDgRSfTMXvFfPW9Ql%2BlqmkO5TyCmQD5lwRafIFv6wqhNINHQ1MUVPlvaE%2Fs8GAKa7SBCbWuj9YW8W45plEN4dM1rmIWR6BClY2m5rpITuDcRIh9cx5ESeK45FY%2FeGTK%2BAFggQahFwgn32D2c90R%2B2Lq6DtVArqaKFiQZm9gw0XmKyajpeAo45JwCoQd8FZuavjGUSfJScFs9l0ymXPS&X-Amz-Signature=d57c25dbaac75f97d2a0a8ecefd8c5301370c0bb8f82279d5db5091092015db2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URH3FN73%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCE%2BolJEoYezGnBZ0z%2Bj1h3vFtmLjkPCUdEWBsb3VXjHwIhAOyd90Nj8h4L4wRtz2QAZWBsDlVcQ7yrzrRVTX8SvimNKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlmmg8buVTzNavlMUq3AOoc6iZnwzYetlALkYuJZONrB0QhuaTCBcxfOqhQY2sUn%2B3Fq9%2FXroNCLkVHpv2%2BRjdZHcwU5Xul%2FpFQIUIn0W2uoW7DTOqlWoM2GUAhK5SxpHoNfseuSXAEe20J%2BWplEvQGXnWfZOJTCr7tFSV8JmMledqiUfkK2GE3%2Bes8wVvJNHXHzshg%2Fg37ZTyy7xZY1ZHYYlOuffHQ49%2Bxbqr4NaNYkMF33RqDGXd%2FDmHVAk%2BUTuQvHNhd3I3pgb7hjZZ5N6x8sc1CBmXqyw6UPpaSmYZt1Qc9lJ8kwGEX0z4vzIartkG5XLmQEivh6fX46mq63TtjieqltyAhw6CC6S3SMNfTi3GMUBP3EzNRqhUzKgmIoYvP7mRAhEy7Uk2KTnmqgE5khW0YkVFb5wuHhnCKKe%2FlNrdXks0Nw%2Fpsy%2BUzaXYR9BcmkXTPjXNhkKUf9Uq0fHWvOnACsRJvyWgnAfvclG1hJCAzVneGrauYNCFTIzs4hB6evSInVpLvFbF2ubScsfYLTu3oRyENSxdSJshEMaXaEDoDwIrK8gu24BEomUrepciYe7%2FHev3O3k3ctNiFkyi0kuOhXmNXmSybSwR4OHDaycYd%2FKzWhpM%2B0ATA0b3Q941N1pr1w6NRIupdTD816DABjqkAXNDpDp0IhDgRSfTMXvFfPW9Ql%2BlqmkO5TyCmQD5lwRafIFv6wqhNINHQ1MUVPlvaE%2Fs8GAKa7SBCbWuj9YW8W45plEN4dM1rmIWR6BClY2m5rpITuDcRIh9cx5ESeK45FY%2FeGTK%2BAFggQahFwgn32D2c90R%2B2Lq6DtVArqaKFiQZm9gw0XmKyajpeAo45JwCoQd8FZuavjGUSfJScFs9l0ymXPS&X-Amz-Signature=e9d9df3c5a9bf2beee8103a1d062e4516c8bd002b2f77a87c24f1e6005914fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
