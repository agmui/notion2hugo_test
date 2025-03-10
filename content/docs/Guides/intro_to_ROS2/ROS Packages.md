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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAZYOYV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGpnGByUVm00oD3iwe4c5N1T5bTaF2LqtsjgCENf4W4OAiBQi9CGVKYbhq%2FoSMhnP7Wxy%2BUAYwHX9VAc628SBoWakSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFTAUVhZTdFUUC2LKtwDfxLvt%2BubinMtdU0WH7iZ8jqiuTkFRQss0w639jLRBZCoTyHGspOMm49itsjIfQp7UeEQ7iWwROaQ4ZQUWozf6aUfTpkn0FSuVTyt8dlqKshUPRCRlY0TEbr0gNR%2FKNIODfA8zd%2FWN7gLLdHyioj%2F4oYE%2FqValcgMLLzL6bxx5%2Fgw3KmAV9061eWrWAlLvtsJxC5icVpLdNNZHLJeefpEP9aOCsby%2FXzVZKgHfssHaCM6L39Lfipd1QUmMXhAfPPfJiJ9AbwQwLyLQ%2BHIP1pchNbD08rJ7g%2F%2FhC%2BWhLgpBXWeXwrnKBRNkB9Fu%2BDh1U4AcscpaqRshr%2BmPDG4kRaKD%2FjX7CMCQGKnhTSwUNHQi1FqKDijb6qiNYke0eD%2FJ74oDpBCui7VsydSjkmZ1Ago%2FoIzJiIWc0%2BuRmYLvGTAGh7KPPRNZC7L5pAiC370UYFi%2Bu5znLa535UV5qC0fr6WA3llEakkCIPD1zEmiiyLVaV5tbYwi3yll7waTqfYnFGrnCpWTupotIYz4XFkdGuHizv%2B2jsLMcaYX8tuVr2pEnVAcVZtX60k3LeowiJnEoN%2F1khh%2BrUCaLzKdHpY4CUMoGSBsYZ7S19%2BWK2CxQ0ItSNVtN%2BAjJjf%2BOkUTo4w2Ky9vgY6pgGFpgRdyTYWtyYdCtQFYPKrRi2qSN4C7RzU03qM%2Bdm9cqmI55bt2yoX%2BdD37lfSkBLSiZy4rdm4SXhDLQHWM%2BQdDzvvoYyGU4nYT5GMNOjogIRZ%2BH%2BTwc3VS9Px01MXIF33zjV7MOS4BuJXUdior1TguSG0JvAfDobayzvGbzrF7T9Lm4hU4bMvu8FIKtZqbOXrTjvGRndzL1911cj06d7lI%2BmNi%2F3G&X-Amz-Signature=269734385a5fc3b5c4af440db1e5b32b8935daad6c7fcfc6e9144d3973a50183&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAZYOYV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGpnGByUVm00oD3iwe4c5N1T5bTaF2LqtsjgCENf4W4OAiBQi9CGVKYbhq%2FoSMhnP7Wxy%2BUAYwHX9VAc628SBoWakSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFTAUVhZTdFUUC2LKtwDfxLvt%2BubinMtdU0WH7iZ8jqiuTkFRQss0w639jLRBZCoTyHGspOMm49itsjIfQp7UeEQ7iWwROaQ4ZQUWozf6aUfTpkn0FSuVTyt8dlqKshUPRCRlY0TEbr0gNR%2FKNIODfA8zd%2FWN7gLLdHyioj%2F4oYE%2FqValcgMLLzL6bxx5%2Fgw3KmAV9061eWrWAlLvtsJxC5icVpLdNNZHLJeefpEP9aOCsby%2FXzVZKgHfssHaCM6L39Lfipd1QUmMXhAfPPfJiJ9AbwQwLyLQ%2BHIP1pchNbD08rJ7g%2F%2FhC%2BWhLgpBXWeXwrnKBRNkB9Fu%2BDh1U4AcscpaqRshr%2BmPDG4kRaKD%2FjX7CMCQGKnhTSwUNHQi1FqKDijb6qiNYke0eD%2FJ74oDpBCui7VsydSjkmZ1Ago%2FoIzJiIWc0%2BuRmYLvGTAGh7KPPRNZC7L5pAiC370UYFi%2Bu5znLa535UV5qC0fr6WA3llEakkCIPD1zEmiiyLVaV5tbYwi3yll7waTqfYnFGrnCpWTupotIYz4XFkdGuHizv%2B2jsLMcaYX8tuVr2pEnVAcVZtX60k3LeowiJnEoN%2F1khh%2BrUCaLzKdHpY4CUMoGSBsYZ7S19%2BWK2CxQ0ItSNVtN%2BAjJjf%2BOkUTo4w2Ky9vgY6pgGFpgRdyTYWtyYdCtQFYPKrRi2qSN4C7RzU03qM%2Bdm9cqmI55bt2yoX%2BdD37lfSkBLSiZy4rdm4SXhDLQHWM%2BQdDzvvoYyGU4nYT5GMNOjogIRZ%2BH%2BTwc3VS9Px01MXIF33zjV7MOS4BuJXUdior1TguSG0JvAfDobayzvGbzrF7T9Lm4hU4bMvu8FIKtZqbOXrTjvGRndzL1911cj06d7lI%2BmNi%2F3G&X-Amz-Signature=3d19aab6bb5a108a7bb52a50d13a1481f125621c01c2efde6ce551b4cd2e1879&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAZYOYV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGpnGByUVm00oD3iwe4c5N1T5bTaF2LqtsjgCENf4W4OAiBQi9CGVKYbhq%2FoSMhnP7Wxy%2BUAYwHX9VAc628SBoWakSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFTAUVhZTdFUUC2LKtwDfxLvt%2BubinMtdU0WH7iZ8jqiuTkFRQss0w639jLRBZCoTyHGspOMm49itsjIfQp7UeEQ7iWwROaQ4ZQUWozf6aUfTpkn0FSuVTyt8dlqKshUPRCRlY0TEbr0gNR%2FKNIODfA8zd%2FWN7gLLdHyioj%2F4oYE%2FqValcgMLLzL6bxx5%2Fgw3KmAV9061eWrWAlLvtsJxC5icVpLdNNZHLJeefpEP9aOCsby%2FXzVZKgHfssHaCM6L39Lfipd1QUmMXhAfPPfJiJ9AbwQwLyLQ%2BHIP1pchNbD08rJ7g%2F%2FhC%2BWhLgpBXWeXwrnKBRNkB9Fu%2BDh1U4AcscpaqRshr%2BmPDG4kRaKD%2FjX7CMCQGKnhTSwUNHQi1FqKDijb6qiNYke0eD%2FJ74oDpBCui7VsydSjkmZ1Ago%2FoIzJiIWc0%2BuRmYLvGTAGh7KPPRNZC7L5pAiC370UYFi%2Bu5znLa535UV5qC0fr6WA3llEakkCIPD1zEmiiyLVaV5tbYwi3yll7waTqfYnFGrnCpWTupotIYz4XFkdGuHizv%2B2jsLMcaYX8tuVr2pEnVAcVZtX60k3LeowiJnEoN%2F1khh%2BrUCaLzKdHpY4CUMoGSBsYZ7S19%2BWK2CxQ0ItSNVtN%2BAjJjf%2BOkUTo4w2Ky9vgY6pgGFpgRdyTYWtyYdCtQFYPKrRi2qSN4C7RzU03qM%2Bdm9cqmI55bt2yoX%2BdD37lfSkBLSiZy4rdm4SXhDLQHWM%2BQdDzvvoYyGU4nYT5GMNOjogIRZ%2BH%2BTwc3VS9Px01MXIF33zjV7MOS4BuJXUdior1TguSG0JvAfDobayzvGbzrF7T9Lm4hU4bMvu8FIKtZqbOXrTjvGRndzL1911cj06d7lI%2BmNi%2F3G&X-Amz-Signature=0bf469138e6f38bd7f4056e3fe4b15ea3a5721d3b2e58fef5cc0783d74b9af3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAZYOYV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGpnGByUVm00oD3iwe4c5N1T5bTaF2LqtsjgCENf4W4OAiBQi9CGVKYbhq%2FoSMhnP7Wxy%2BUAYwHX9VAc628SBoWakSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFTAUVhZTdFUUC2LKtwDfxLvt%2BubinMtdU0WH7iZ8jqiuTkFRQss0w639jLRBZCoTyHGspOMm49itsjIfQp7UeEQ7iWwROaQ4ZQUWozf6aUfTpkn0FSuVTyt8dlqKshUPRCRlY0TEbr0gNR%2FKNIODfA8zd%2FWN7gLLdHyioj%2F4oYE%2FqValcgMLLzL6bxx5%2Fgw3KmAV9061eWrWAlLvtsJxC5icVpLdNNZHLJeefpEP9aOCsby%2FXzVZKgHfssHaCM6L39Lfipd1QUmMXhAfPPfJiJ9AbwQwLyLQ%2BHIP1pchNbD08rJ7g%2F%2FhC%2BWhLgpBXWeXwrnKBRNkB9Fu%2BDh1U4AcscpaqRshr%2BmPDG4kRaKD%2FjX7CMCQGKnhTSwUNHQi1FqKDijb6qiNYke0eD%2FJ74oDpBCui7VsydSjkmZ1Ago%2FoIzJiIWc0%2BuRmYLvGTAGh7KPPRNZC7L5pAiC370UYFi%2Bu5znLa535UV5qC0fr6WA3llEakkCIPD1zEmiiyLVaV5tbYwi3yll7waTqfYnFGrnCpWTupotIYz4XFkdGuHizv%2B2jsLMcaYX8tuVr2pEnVAcVZtX60k3LeowiJnEoN%2F1khh%2BrUCaLzKdHpY4CUMoGSBsYZ7S19%2BWK2CxQ0ItSNVtN%2BAjJjf%2BOkUTo4w2Ky9vgY6pgGFpgRdyTYWtyYdCtQFYPKrRi2qSN4C7RzU03qM%2Bdm9cqmI55bt2yoX%2BdD37lfSkBLSiZy4rdm4SXhDLQHWM%2BQdDzvvoYyGU4nYT5GMNOjogIRZ%2BH%2BTwc3VS9Px01MXIF33zjV7MOS4BuJXUdior1TguSG0JvAfDobayzvGbzrF7T9Lm4hU4bMvu8FIKtZqbOXrTjvGRndzL1911cj06d7lI%2BmNi%2F3G&X-Amz-Signature=af3b6e054bfc640482959e12cd0ce7b281875070cc53e16ce660e8a839b64632&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAZYOYV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGpnGByUVm00oD3iwe4c5N1T5bTaF2LqtsjgCENf4W4OAiBQi9CGVKYbhq%2FoSMhnP7Wxy%2BUAYwHX9VAc628SBoWakSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFTAUVhZTdFUUC2LKtwDfxLvt%2BubinMtdU0WH7iZ8jqiuTkFRQss0w639jLRBZCoTyHGspOMm49itsjIfQp7UeEQ7iWwROaQ4ZQUWozf6aUfTpkn0FSuVTyt8dlqKshUPRCRlY0TEbr0gNR%2FKNIODfA8zd%2FWN7gLLdHyioj%2F4oYE%2FqValcgMLLzL6bxx5%2Fgw3KmAV9061eWrWAlLvtsJxC5icVpLdNNZHLJeefpEP9aOCsby%2FXzVZKgHfssHaCM6L39Lfipd1QUmMXhAfPPfJiJ9AbwQwLyLQ%2BHIP1pchNbD08rJ7g%2F%2FhC%2BWhLgpBXWeXwrnKBRNkB9Fu%2BDh1U4AcscpaqRshr%2BmPDG4kRaKD%2FjX7CMCQGKnhTSwUNHQi1FqKDijb6qiNYke0eD%2FJ74oDpBCui7VsydSjkmZ1Ago%2FoIzJiIWc0%2BuRmYLvGTAGh7KPPRNZC7L5pAiC370UYFi%2Bu5znLa535UV5qC0fr6WA3llEakkCIPD1zEmiiyLVaV5tbYwi3yll7waTqfYnFGrnCpWTupotIYz4XFkdGuHizv%2B2jsLMcaYX8tuVr2pEnVAcVZtX60k3LeowiJnEoN%2F1khh%2BrUCaLzKdHpY4CUMoGSBsYZ7S19%2BWK2CxQ0ItSNVtN%2BAjJjf%2BOkUTo4w2Ky9vgY6pgGFpgRdyTYWtyYdCtQFYPKrRi2qSN4C7RzU03qM%2Bdm9cqmI55bt2yoX%2BdD37lfSkBLSiZy4rdm4SXhDLQHWM%2BQdDzvvoYyGU4nYT5GMNOjogIRZ%2BH%2BTwc3VS9Px01MXIF33zjV7MOS4BuJXUdior1TguSG0JvAfDobayzvGbzrF7T9Lm4hU4bMvu8FIKtZqbOXrTjvGRndzL1911cj06d7lI%2BmNi%2F3G&X-Amz-Signature=d7cf787f1975fd23125f0bef98152829062d61aeb019ec5affc8bc7929d0ca65&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAZYOYV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGpnGByUVm00oD3iwe4c5N1T5bTaF2LqtsjgCENf4W4OAiBQi9CGVKYbhq%2FoSMhnP7Wxy%2BUAYwHX9VAc628SBoWakSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFTAUVhZTdFUUC2LKtwDfxLvt%2BubinMtdU0WH7iZ8jqiuTkFRQss0w639jLRBZCoTyHGspOMm49itsjIfQp7UeEQ7iWwROaQ4ZQUWozf6aUfTpkn0FSuVTyt8dlqKshUPRCRlY0TEbr0gNR%2FKNIODfA8zd%2FWN7gLLdHyioj%2F4oYE%2FqValcgMLLzL6bxx5%2Fgw3KmAV9061eWrWAlLvtsJxC5icVpLdNNZHLJeefpEP9aOCsby%2FXzVZKgHfssHaCM6L39Lfipd1QUmMXhAfPPfJiJ9AbwQwLyLQ%2BHIP1pchNbD08rJ7g%2F%2FhC%2BWhLgpBXWeXwrnKBRNkB9Fu%2BDh1U4AcscpaqRshr%2BmPDG4kRaKD%2FjX7CMCQGKnhTSwUNHQi1FqKDijb6qiNYke0eD%2FJ74oDpBCui7VsydSjkmZ1Ago%2FoIzJiIWc0%2BuRmYLvGTAGh7KPPRNZC7L5pAiC370UYFi%2Bu5znLa535UV5qC0fr6WA3llEakkCIPD1zEmiiyLVaV5tbYwi3yll7waTqfYnFGrnCpWTupotIYz4XFkdGuHizv%2B2jsLMcaYX8tuVr2pEnVAcVZtX60k3LeowiJnEoN%2F1khh%2BrUCaLzKdHpY4CUMoGSBsYZ7S19%2BWK2CxQ0ItSNVtN%2BAjJjf%2BOkUTo4w2Ky9vgY6pgGFpgRdyTYWtyYdCtQFYPKrRi2qSN4C7RzU03qM%2Bdm9cqmI55bt2yoX%2BdD37lfSkBLSiZy4rdm4SXhDLQHWM%2BQdDzvvoYyGU4nYT5GMNOjogIRZ%2BH%2BTwc3VS9Px01MXIF33zjV7MOS4BuJXUdior1TguSG0JvAfDobayzvGbzrF7T9Lm4hU4bMvu8FIKtZqbOXrTjvGRndzL1911cj06d7lI%2BmNi%2F3G&X-Amz-Signature=8ba995cd5a9e158d46c7a472638a4846e9fcfef7483472b7d805e49b8c0116b3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAZYOYV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGpnGByUVm00oD3iwe4c5N1T5bTaF2LqtsjgCENf4W4OAiBQi9CGVKYbhq%2FoSMhnP7Wxy%2BUAYwHX9VAc628SBoWakSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFTAUVhZTdFUUC2LKtwDfxLvt%2BubinMtdU0WH7iZ8jqiuTkFRQss0w639jLRBZCoTyHGspOMm49itsjIfQp7UeEQ7iWwROaQ4ZQUWozf6aUfTpkn0FSuVTyt8dlqKshUPRCRlY0TEbr0gNR%2FKNIODfA8zd%2FWN7gLLdHyioj%2F4oYE%2FqValcgMLLzL6bxx5%2Fgw3KmAV9061eWrWAlLvtsJxC5icVpLdNNZHLJeefpEP9aOCsby%2FXzVZKgHfssHaCM6L39Lfipd1QUmMXhAfPPfJiJ9AbwQwLyLQ%2BHIP1pchNbD08rJ7g%2F%2FhC%2BWhLgpBXWeXwrnKBRNkB9Fu%2BDh1U4AcscpaqRshr%2BmPDG4kRaKD%2FjX7CMCQGKnhTSwUNHQi1FqKDijb6qiNYke0eD%2FJ74oDpBCui7VsydSjkmZ1Ago%2FoIzJiIWc0%2BuRmYLvGTAGh7KPPRNZC7L5pAiC370UYFi%2Bu5znLa535UV5qC0fr6WA3llEakkCIPD1zEmiiyLVaV5tbYwi3yll7waTqfYnFGrnCpWTupotIYz4XFkdGuHizv%2B2jsLMcaYX8tuVr2pEnVAcVZtX60k3LeowiJnEoN%2F1khh%2BrUCaLzKdHpY4CUMoGSBsYZ7S19%2BWK2CxQ0ItSNVtN%2BAjJjf%2BOkUTo4w2Ky9vgY6pgGFpgRdyTYWtyYdCtQFYPKrRi2qSN4C7RzU03qM%2Bdm9cqmI55bt2yoX%2BdD37lfSkBLSiZy4rdm4SXhDLQHWM%2BQdDzvvoYyGU4nYT5GMNOjogIRZ%2BH%2BTwc3VS9Px01MXIF33zjV7MOS4BuJXUdior1TguSG0JvAfDobayzvGbzrF7T9Lm4hU4bMvu8FIKtZqbOXrTjvGRndzL1911cj06d7lI%2BmNi%2F3G&X-Amz-Signature=c443842422538b39d5ae45fc0aa4f9e88bbd1feb0eda511c44bd28880e91a517&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
