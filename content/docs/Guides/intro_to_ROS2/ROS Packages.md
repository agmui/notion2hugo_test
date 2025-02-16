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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFJFQJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCTqTH1tvvlbpCA1UrxZifQpJQ%2Bg7yRplFaOKj%2FpNA0iQIgY0k3ff834nDGqn%2BI6IWzlb8gmzhBgyceXqF9T0GZaEgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMTRlz4aIomyb9UayrcA%2BOIh5xB6FIGggYu1%2BWdiGAl8TCYQOoe2mb0c2ZwF362ChSQKTMffpma3EEN0WVb3lgaf9ES7mdWLuLkBS7jLzUYYoRuSZNEQNjH8ILctQxPv1MZN9tnYq1wboiVMDGvrRBSRa%2Bgq%2BpvyWtXmj1pkLbaoPUyBj26ZzNml%2Fc731cQE%2F0niDFfikCljbv1pC5RsExcYlAlN%2FDb58paKPEK5Hp7L64vS1ON5jA%2FoCz30C4SS6HvkzPCFaa7MLHiDksjT6ydXhsvoTN9Bs7bUR2WFoNJRHT6WiZZ%2FQwFcox%2BdHQmvFJSYWw7S%2BUeajVWSthrhke8MgHLnna2Pu9WkK%2FOX4GAHkAm54ggXVDzhA2qs3rojTOr%2FDZTyDUWg4MG7GAfUbqO51gXxRDD%2BzERLTm9cFEwHBLW5%2BXIkDEPXi2WAaJLPHXVumnRkifAnhF9hwQCoFvYCAoofQz%2FyC%2BnGJq63vm5FW72uMy3QcIllJeRk08c%2BkxlePrIpZnBM5UEWDCL8CAVCnZzR67AY%2BQLRYwpsRR5Tu5HtQ30sD%2BWpl2WX0JCE4VPeOQLuOEXl6kgPsAifsO51f6c5yTs02YzMYxDSkz%2BQ1qficeGtKMM5zH2k%2FLKJIiipdLtgz7hyKhGMJL%2Bxb0GOqUBWnCA4s6T3xNBGahEYftAyWMUHZ19KOV68NUg5Eut7EJgRYKKJjkbR8nYDyt9y54SwTazPYHrXH88okgCe7Q1NsHl0vaOK7YvBGVSblQItv%2BAeLk3VmKDBw5B%2B1fElUzqlVtOHlfZTdD4FG2DqRKjkZlMW55jeroftH1PfxK0kPFvANv9vPOuL0bMiBCn9PhdC5AYIbG2bF1xSFiwZJjApVpyKv%2BE&X-Amz-Signature=9e8bd93d8d47093cb6665a2f54bac338484e8bf39ec856706084d4af47baef01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFJFQJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCTqTH1tvvlbpCA1UrxZifQpJQ%2Bg7yRplFaOKj%2FpNA0iQIgY0k3ff834nDGqn%2BI6IWzlb8gmzhBgyceXqF9T0GZaEgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMTRlz4aIomyb9UayrcA%2BOIh5xB6FIGggYu1%2BWdiGAl8TCYQOoe2mb0c2ZwF362ChSQKTMffpma3EEN0WVb3lgaf9ES7mdWLuLkBS7jLzUYYoRuSZNEQNjH8ILctQxPv1MZN9tnYq1wboiVMDGvrRBSRa%2Bgq%2BpvyWtXmj1pkLbaoPUyBj26ZzNml%2Fc731cQE%2F0niDFfikCljbv1pC5RsExcYlAlN%2FDb58paKPEK5Hp7L64vS1ON5jA%2FoCz30C4SS6HvkzPCFaa7MLHiDksjT6ydXhsvoTN9Bs7bUR2WFoNJRHT6WiZZ%2FQwFcox%2BdHQmvFJSYWw7S%2BUeajVWSthrhke8MgHLnna2Pu9WkK%2FOX4GAHkAm54ggXVDzhA2qs3rojTOr%2FDZTyDUWg4MG7GAfUbqO51gXxRDD%2BzERLTm9cFEwHBLW5%2BXIkDEPXi2WAaJLPHXVumnRkifAnhF9hwQCoFvYCAoofQz%2FyC%2BnGJq63vm5FW72uMy3QcIllJeRk08c%2BkxlePrIpZnBM5UEWDCL8CAVCnZzR67AY%2BQLRYwpsRR5Tu5HtQ30sD%2BWpl2WX0JCE4VPeOQLuOEXl6kgPsAifsO51f6c5yTs02YzMYxDSkz%2BQ1qficeGtKMM5zH2k%2FLKJIiipdLtgz7hyKhGMJL%2Bxb0GOqUBWnCA4s6T3xNBGahEYftAyWMUHZ19KOV68NUg5Eut7EJgRYKKJjkbR8nYDyt9y54SwTazPYHrXH88okgCe7Q1NsHl0vaOK7YvBGVSblQItv%2BAeLk3VmKDBw5B%2B1fElUzqlVtOHlfZTdD4FG2DqRKjkZlMW55jeroftH1PfxK0kPFvANv9vPOuL0bMiBCn9PhdC5AYIbG2bF1xSFiwZJjApVpyKv%2BE&X-Amz-Signature=532a3bb1a6689efe8faf3add10b9de7f381415b44cfbe7e6125f6312c92855e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFJFQJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCTqTH1tvvlbpCA1UrxZifQpJQ%2Bg7yRplFaOKj%2FpNA0iQIgY0k3ff834nDGqn%2BI6IWzlb8gmzhBgyceXqF9T0GZaEgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMTRlz4aIomyb9UayrcA%2BOIh5xB6FIGggYu1%2BWdiGAl8TCYQOoe2mb0c2ZwF362ChSQKTMffpma3EEN0WVb3lgaf9ES7mdWLuLkBS7jLzUYYoRuSZNEQNjH8ILctQxPv1MZN9tnYq1wboiVMDGvrRBSRa%2Bgq%2BpvyWtXmj1pkLbaoPUyBj26ZzNml%2Fc731cQE%2F0niDFfikCljbv1pC5RsExcYlAlN%2FDb58paKPEK5Hp7L64vS1ON5jA%2FoCz30C4SS6HvkzPCFaa7MLHiDksjT6ydXhsvoTN9Bs7bUR2WFoNJRHT6WiZZ%2FQwFcox%2BdHQmvFJSYWw7S%2BUeajVWSthrhke8MgHLnna2Pu9WkK%2FOX4GAHkAm54ggXVDzhA2qs3rojTOr%2FDZTyDUWg4MG7GAfUbqO51gXxRDD%2BzERLTm9cFEwHBLW5%2BXIkDEPXi2WAaJLPHXVumnRkifAnhF9hwQCoFvYCAoofQz%2FyC%2BnGJq63vm5FW72uMy3QcIllJeRk08c%2BkxlePrIpZnBM5UEWDCL8CAVCnZzR67AY%2BQLRYwpsRR5Tu5HtQ30sD%2BWpl2WX0JCE4VPeOQLuOEXl6kgPsAifsO51f6c5yTs02YzMYxDSkz%2BQ1qficeGtKMM5zH2k%2FLKJIiipdLtgz7hyKhGMJL%2Bxb0GOqUBWnCA4s6T3xNBGahEYftAyWMUHZ19KOV68NUg5Eut7EJgRYKKJjkbR8nYDyt9y54SwTazPYHrXH88okgCe7Q1NsHl0vaOK7YvBGVSblQItv%2BAeLk3VmKDBw5B%2B1fElUzqlVtOHlfZTdD4FG2DqRKjkZlMW55jeroftH1PfxK0kPFvANv9vPOuL0bMiBCn9PhdC5AYIbG2bF1xSFiwZJjApVpyKv%2BE&X-Amz-Signature=9e37c9514d6792fe3699ba79bba395be7ba2384d5f222754e80c980341a9b683&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFJFQJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCTqTH1tvvlbpCA1UrxZifQpJQ%2Bg7yRplFaOKj%2FpNA0iQIgY0k3ff834nDGqn%2BI6IWzlb8gmzhBgyceXqF9T0GZaEgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMTRlz4aIomyb9UayrcA%2BOIh5xB6FIGggYu1%2BWdiGAl8TCYQOoe2mb0c2ZwF362ChSQKTMffpma3EEN0WVb3lgaf9ES7mdWLuLkBS7jLzUYYoRuSZNEQNjH8ILctQxPv1MZN9tnYq1wboiVMDGvrRBSRa%2Bgq%2BpvyWtXmj1pkLbaoPUyBj26ZzNml%2Fc731cQE%2F0niDFfikCljbv1pC5RsExcYlAlN%2FDb58paKPEK5Hp7L64vS1ON5jA%2FoCz30C4SS6HvkzPCFaa7MLHiDksjT6ydXhsvoTN9Bs7bUR2WFoNJRHT6WiZZ%2FQwFcox%2BdHQmvFJSYWw7S%2BUeajVWSthrhke8MgHLnna2Pu9WkK%2FOX4GAHkAm54ggXVDzhA2qs3rojTOr%2FDZTyDUWg4MG7GAfUbqO51gXxRDD%2BzERLTm9cFEwHBLW5%2BXIkDEPXi2WAaJLPHXVumnRkifAnhF9hwQCoFvYCAoofQz%2FyC%2BnGJq63vm5FW72uMy3QcIllJeRk08c%2BkxlePrIpZnBM5UEWDCL8CAVCnZzR67AY%2BQLRYwpsRR5Tu5HtQ30sD%2BWpl2WX0JCE4VPeOQLuOEXl6kgPsAifsO51f6c5yTs02YzMYxDSkz%2BQ1qficeGtKMM5zH2k%2FLKJIiipdLtgz7hyKhGMJL%2Bxb0GOqUBWnCA4s6T3xNBGahEYftAyWMUHZ19KOV68NUg5Eut7EJgRYKKJjkbR8nYDyt9y54SwTazPYHrXH88okgCe7Q1NsHl0vaOK7YvBGVSblQItv%2BAeLk3VmKDBw5B%2B1fElUzqlVtOHlfZTdD4FG2DqRKjkZlMW55jeroftH1PfxK0kPFvANv9vPOuL0bMiBCn9PhdC5AYIbG2bF1xSFiwZJjApVpyKv%2BE&X-Amz-Signature=dce77688a9e1c0e2217b19ee8183a71cc167bde081e75b715f820c624668b6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFJFQJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCTqTH1tvvlbpCA1UrxZifQpJQ%2Bg7yRplFaOKj%2FpNA0iQIgY0k3ff834nDGqn%2BI6IWzlb8gmzhBgyceXqF9T0GZaEgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMTRlz4aIomyb9UayrcA%2BOIh5xB6FIGggYu1%2BWdiGAl8TCYQOoe2mb0c2ZwF362ChSQKTMffpma3EEN0WVb3lgaf9ES7mdWLuLkBS7jLzUYYoRuSZNEQNjH8ILctQxPv1MZN9tnYq1wboiVMDGvrRBSRa%2Bgq%2BpvyWtXmj1pkLbaoPUyBj26ZzNml%2Fc731cQE%2F0niDFfikCljbv1pC5RsExcYlAlN%2FDb58paKPEK5Hp7L64vS1ON5jA%2FoCz30C4SS6HvkzPCFaa7MLHiDksjT6ydXhsvoTN9Bs7bUR2WFoNJRHT6WiZZ%2FQwFcox%2BdHQmvFJSYWw7S%2BUeajVWSthrhke8MgHLnna2Pu9WkK%2FOX4GAHkAm54ggXVDzhA2qs3rojTOr%2FDZTyDUWg4MG7GAfUbqO51gXxRDD%2BzERLTm9cFEwHBLW5%2BXIkDEPXi2WAaJLPHXVumnRkifAnhF9hwQCoFvYCAoofQz%2FyC%2BnGJq63vm5FW72uMy3QcIllJeRk08c%2BkxlePrIpZnBM5UEWDCL8CAVCnZzR67AY%2BQLRYwpsRR5Tu5HtQ30sD%2BWpl2WX0JCE4VPeOQLuOEXl6kgPsAifsO51f6c5yTs02YzMYxDSkz%2BQ1qficeGtKMM5zH2k%2FLKJIiipdLtgz7hyKhGMJL%2Bxb0GOqUBWnCA4s6T3xNBGahEYftAyWMUHZ19KOV68NUg5Eut7EJgRYKKJjkbR8nYDyt9y54SwTazPYHrXH88okgCe7Q1NsHl0vaOK7YvBGVSblQItv%2BAeLk3VmKDBw5B%2B1fElUzqlVtOHlfZTdD4FG2DqRKjkZlMW55jeroftH1PfxK0kPFvANv9vPOuL0bMiBCn9PhdC5AYIbG2bF1xSFiwZJjApVpyKv%2BE&X-Amz-Signature=fbb48295efdfbc4b972886ba100f272f5c8998472643465a84f76c535989c2f3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFJFQJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCTqTH1tvvlbpCA1UrxZifQpJQ%2Bg7yRplFaOKj%2FpNA0iQIgY0k3ff834nDGqn%2BI6IWzlb8gmzhBgyceXqF9T0GZaEgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMTRlz4aIomyb9UayrcA%2BOIh5xB6FIGggYu1%2BWdiGAl8TCYQOoe2mb0c2ZwF362ChSQKTMffpma3EEN0WVb3lgaf9ES7mdWLuLkBS7jLzUYYoRuSZNEQNjH8ILctQxPv1MZN9tnYq1wboiVMDGvrRBSRa%2Bgq%2BpvyWtXmj1pkLbaoPUyBj26ZzNml%2Fc731cQE%2F0niDFfikCljbv1pC5RsExcYlAlN%2FDb58paKPEK5Hp7L64vS1ON5jA%2FoCz30C4SS6HvkzPCFaa7MLHiDksjT6ydXhsvoTN9Bs7bUR2WFoNJRHT6WiZZ%2FQwFcox%2BdHQmvFJSYWw7S%2BUeajVWSthrhke8MgHLnna2Pu9WkK%2FOX4GAHkAm54ggXVDzhA2qs3rojTOr%2FDZTyDUWg4MG7GAfUbqO51gXxRDD%2BzERLTm9cFEwHBLW5%2BXIkDEPXi2WAaJLPHXVumnRkifAnhF9hwQCoFvYCAoofQz%2FyC%2BnGJq63vm5FW72uMy3QcIllJeRk08c%2BkxlePrIpZnBM5UEWDCL8CAVCnZzR67AY%2BQLRYwpsRR5Tu5HtQ30sD%2BWpl2WX0JCE4VPeOQLuOEXl6kgPsAifsO51f6c5yTs02YzMYxDSkz%2BQ1qficeGtKMM5zH2k%2FLKJIiipdLtgz7hyKhGMJL%2Bxb0GOqUBWnCA4s6T3xNBGahEYftAyWMUHZ19KOV68NUg5Eut7EJgRYKKJjkbR8nYDyt9y54SwTazPYHrXH88okgCe7Q1NsHl0vaOK7YvBGVSblQItv%2BAeLk3VmKDBw5B%2B1fElUzqlVtOHlfZTdD4FG2DqRKjkZlMW55jeroftH1PfxK0kPFvANv9vPOuL0bMiBCn9PhdC5AYIbG2bF1xSFiwZJjApVpyKv%2BE&X-Amz-Signature=b3d2a3732fec1a559910e09192e54453eaf27f8ab6520c9a6dc29189dbc3d5d2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFJFQJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCTqTH1tvvlbpCA1UrxZifQpJQ%2Bg7yRplFaOKj%2FpNA0iQIgY0k3ff834nDGqn%2BI6IWzlb8gmzhBgyceXqF9T0GZaEgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMTRlz4aIomyb9UayrcA%2BOIh5xB6FIGggYu1%2BWdiGAl8TCYQOoe2mb0c2ZwF362ChSQKTMffpma3EEN0WVb3lgaf9ES7mdWLuLkBS7jLzUYYoRuSZNEQNjH8ILctQxPv1MZN9tnYq1wboiVMDGvrRBSRa%2Bgq%2BpvyWtXmj1pkLbaoPUyBj26ZzNml%2Fc731cQE%2F0niDFfikCljbv1pC5RsExcYlAlN%2FDb58paKPEK5Hp7L64vS1ON5jA%2FoCz30C4SS6HvkzPCFaa7MLHiDksjT6ydXhsvoTN9Bs7bUR2WFoNJRHT6WiZZ%2FQwFcox%2BdHQmvFJSYWw7S%2BUeajVWSthrhke8MgHLnna2Pu9WkK%2FOX4GAHkAm54ggXVDzhA2qs3rojTOr%2FDZTyDUWg4MG7GAfUbqO51gXxRDD%2BzERLTm9cFEwHBLW5%2BXIkDEPXi2WAaJLPHXVumnRkifAnhF9hwQCoFvYCAoofQz%2FyC%2BnGJq63vm5FW72uMy3QcIllJeRk08c%2BkxlePrIpZnBM5UEWDCL8CAVCnZzR67AY%2BQLRYwpsRR5Tu5HtQ30sD%2BWpl2WX0JCE4VPeOQLuOEXl6kgPsAifsO51f6c5yTs02YzMYxDSkz%2BQ1qficeGtKMM5zH2k%2FLKJIiipdLtgz7hyKhGMJL%2Bxb0GOqUBWnCA4s6T3xNBGahEYftAyWMUHZ19KOV68NUg5Eut7EJgRYKKJjkbR8nYDyt9y54SwTazPYHrXH88okgCe7Q1NsHl0vaOK7YvBGVSblQItv%2BAeLk3VmKDBw5B%2B1fElUzqlVtOHlfZTdD4FG2DqRKjkZlMW55jeroftH1PfxK0kPFvANv9vPOuL0bMiBCn9PhdC5AYIbG2bF1xSFiwZJjApVpyKv%2BE&X-Amz-Signature=4ef57f6d41117b0a82fed67d5990b619008f620f82420fd63c43f4846613bf3c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
