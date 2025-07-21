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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTJNZUS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYIMBJQVU9%2FHH1HVdVcL4mLG6u3opc3dQ4%2Bjp58oKy3AiB5eJxZI1ZVGnPIVyYGRebksmshgsnuv6xUG3awVCTdOSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28KFXM%2BaaR1BzaynKtwDh1SnvHB6FdafZtUOTIksGMuZrgdCDvAQd%2FdKdlfQWOLKbL7iD8sP7IFecXoBK5PnrFq%2FHrobCRRULU4q%2BaOzw1KujCn06SS5FSNI80dfwmksIxQbHoU%2FjQ24ehvDQ0H1bga7jqHZ03lwivMDryQpzXYwqJoLkubXJun5yiQAN6noIPGZH%2FUvn7I3xyAVDTN712fUjRI53DscTVkb2zObtfvS4cg1EnNAPC7iUqyZIAiMaIWnYWwe%2B7nEg0ZzA%2FRb%2BvqRP400jPeCJJ6UGwpcmhxcxLT3ZL5sqz%2BYVCnksqIZ8PPQHMA3BL4ie%2B8Y5n0ZmLfddGVQ0HbbsHfpo583%2BbQMWeuXADZf5Ek2Tam%2FVQ566eCD5ZCbLanbYVVZ%2Fnu5mw99tTgqrcq0FkFIR2aasKyX6XPkvCa3rq1nkKWKggbyH82FNFUikXnOOd11NRw2GzThL%2BIMnkRw9Wj2hQOqws8aoI1E326m91FPF1qIyqkoUUNdFxQU18M71oaHUMnysnDw%2Bqsp%2Fu8YnpGa4kLBDijf4Ddcx6eINLh62BAAQBp54t1rbkj6Usyh9axY7xem0eZuGjVTYXnZ4ERTnZpwNy%2BEVFH2PvNzbApZJlEpJIcZc7ofNw8M%2BPvM9vEw5LP6wwY6pgFj8pjXLg5s8oVs9crOcmqmqlkM6wPP8HoQ74X%2B1IPko16ZkUcP3ei3XNBihNp%2B3imIKLMYofHWG3z87OEdcYu8V3WrGed%2BBH8x3kcYwiAKot6MT8Dt9bnl6w20DkML3U%2Bp3FuqwL7emCtyJLP5R0O87K5C7%2F5bkQF2v08AtAl11MrwcE8GSnQpWFQEUvLEtjUkfIVH87OcC2KFhLPceqzaahHyylgZ&X-Amz-Signature=a8820769c0b78a44e4a3efba3ff29c0021d130f71df925614a40febf3a7c7759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTJNZUS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYIMBJQVU9%2FHH1HVdVcL4mLG6u3opc3dQ4%2Bjp58oKy3AiB5eJxZI1ZVGnPIVyYGRebksmshgsnuv6xUG3awVCTdOSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28KFXM%2BaaR1BzaynKtwDh1SnvHB6FdafZtUOTIksGMuZrgdCDvAQd%2FdKdlfQWOLKbL7iD8sP7IFecXoBK5PnrFq%2FHrobCRRULU4q%2BaOzw1KujCn06SS5FSNI80dfwmksIxQbHoU%2FjQ24ehvDQ0H1bga7jqHZ03lwivMDryQpzXYwqJoLkubXJun5yiQAN6noIPGZH%2FUvn7I3xyAVDTN712fUjRI53DscTVkb2zObtfvS4cg1EnNAPC7iUqyZIAiMaIWnYWwe%2B7nEg0ZzA%2FRb%2BvqRP400jPeCJJ6UGwpcmhxcxLT3ZL5sqz%2BYVCnksqIZ8PPQHMA3BL4ie%2B8Y5n0ZmLfddGVQ0HbbsHfpo583%2BbQMWeuXADZf5Ek2Tam%2FVQ566eCD5ZCbLanbYVVZ%2Fnu5mw99tTgqrcq0FkFIR2aasKyX6XPkvCa3rq1nkKWKggbyH82FNFUikXnOOd11NRw2GzThL%2BIMnkRw9Wj2hQOqws8aoI1E326m91FPF1qIyqkoUUNdFxQU18M71oaHUMnysnDw%2Bqsp%2Fu8YnpGa4kLBDijf4Ddcx6eINLh62BAAQBp54t1rbkj6Usyh9axY7xem0eZuGjVTYXnZ4ERTnZpwNy%2BEVFH2PvNzbApZJlEpJIcZc7ofNw8M%2BPvM9vEw5LP6wwY6pgFj8pjXLg5s8oVs9crOcmqmqlkM6wPP8HoQ74X%2B1IPko16ZkUcP3ei3XNBihNp%2B3imIKLMYofHWG3z87OEdcYu8V3WrGed%2BBH8x3kcYwiAKot6MT8Dt9bnl6w20DkML3U%2Bp3FuqwL7emCtyJLP5R0O87K5C7%2F5bkQF2v08AtAl11MrwcE8GSnQpWFQEUvLEtjUkfIVH87OcC2KFhLPceqzaahHyylgZ&X-Amz-Signature=ca4f1bc722d1e77bc241bb8d7710139a99f3cffe74f7f30bd9bff0fb2bc550e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTJNZUS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYIMBJQVU9%2FHH1HVdVcL4mLG6u3opc3dQ4%2Bjp58oKy3AiB5eJxZI1ZVGnPIVyYGRebksmshgsnuv6xUG3awVCTdOSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28KFXM%2BaaR1BzaynKtwDh1SnvHB6FdafZtUOTIksGMuZrgdCDvAQd%2FdKdlfQWOLKbL7iD8sP7IFecXoBK5PnrFq%2FHrobCRRULU4q%2BaOzw1KujCn06SS5FSNI80dfwmksIxQbHoU%2FjQ24ehvDQ0H1bga7jqHZ03lwivMDryQpzXYwqJoLkubXJun5yiQAN6noIPGZH%2FUvn7I3xyAVDTN712fUjRI53DscTVkb2zObtfvS4cg1EnNAPC7iUqyZIAiMaIWnYWwe%2B7nEg0ZzA%2FRb%2BvqRP400jPeCJJ6UGwpcmhxcxLT3ZL5sqz%2BYVCnksqIZ8PPQHMA3BL4ie%2B8Y5n0ZmLfddGVQ0HbbsHfpo583%2BbQMWeuXADZf5Ek2Tam%2FVQ566eCD5ZCbLanbYVVZ%2Fnu5mw99tTgqrcq0FkFIR2aasKyX6XPkvCa3rq1nkKWKggbyH82FNFUikXnOOd11NRw2GzThL%2BIMnkRw9Wj2hQOqws8aoI1E326m91FPF1qIyqkoUUNdFxQU18M71oaHUMnysnDw%2Bqsp%2Fu8YnpGa4kLBDijf4Ddcx6eINLh62BAAQBp54t1rbkj6Usyh9axY7xem0eZuGjVTYXnZ4ERTnZpwNy%2BEVFH2PvNzbApZJlEpJIcZc7ofNw8M%2BPvM9vEw5LP6wwY6pgFj8pjXLg5s8oVs9crOcmqmqlkM6wPP8HoQ74X%2B1IPko16ZkUcP3ei3XNBihNp%2B3imIKLMYofHWG3z87OEdcYu8V3WrGed%2BBH8x3kcYwiAKot6MT8Dt9bnl6w20DkML3U%2Bp3FuqwL7emCtyJLP5R0O87K5C7%2F5bkQF2v08AtAl11MrwcE8GSnQpWFQEUvLEtjUkfIVH87OcC2KFhLPceqzaahHyylgZ&X-Amz-Signature=a7a97c914cf76ae29e40f487bfaf9f1dfaea84a2e37315946ecf53f7d3fbced2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTJNZUS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYIMBJQVU9%2FHH1HVdVcL4mLG6u3opc3dQ4%2Bjp58oKy3AiB5eJxZI1ZVGnPIVyYGRebksmshgsnuv6xUG3awVCTdOSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28KFXM%2BaaR1BzaynKtwDh1SnvHB6FdafZtUOTIksGMuZrgdCDvAQd%2FdKdlfQWOLKbL7iD8sP7IFecXoBK5PnrFq%2FHrobCRRULU4q%2BaOzw1KujCn06SS5FSNI80dfwmksIxQbHoU%2FjQ24ehvDQ0H1bga7jqHZ03lwivMDryQpzXYwqJoLkubXJun5yiQAN6noIPGZH%2FUvn7I3xyAVDTN712fUjRI53DscTVkb2zObtfvS4cg1EnNAPC7iUqyZIAiMaIWnYWwe%2B7nEg0ZzA%2FRb%2BvqRP400jPeCJJ6UGwpcmhxcxLT3ZL5sqz%2BYVCnksqIZ8PPQHMA3BL4ie%2B8Y5n0ZmLfddGVQ0HbbsHfpo583%2BbQMWeuXADZf5Ek2Tam%2FVQ566eCD5ZCbLanbYVVZ%2Fnu5mw99tTgqrcq0FkFIR2aasKyX6XPkvCa3rq1nkKWKggbyH82FNFUikXnOOd11NRw2GzThL%2BIMnkRw9Wj2hQOqws8aoI1E326m91FPF1qIyqkoUUNdFxQU18M71oaHUMnysnDw%2Bqsp%2Fu8YnpGa4kLBDijf4Ddcx6eINLh62BAAQBp54t1rbkj6Usyh9axY7xem0eZuGjVTYXnZ4ERTnZpwNy%2BEVFH2PvNzbApZJlEpJIcZc7ofNw8M%2BPvM9vEw5LP6wwY6pgFj8pjXLg5s8oVs9crOcmqmqlkM6wPP8HoQ74X%2B1IPko16ZkUcP3ei3XNBihNp%2B3imIKLMYofHWG3z87OEdcYu8V3WrGed%2BBH8x3kcYwiAKot6MT8Dt9bnl6w20DkML3U%2Bp3FuqwL7emCtyJLP5R0O87K5C7%2F5bkQF2v08AtAl11MrwcE8GSnQpWFQEUvLEtjUkfIVH87OcC2KFhLPceqzaahHyylgZ&X-Amz-Signature=cb22ec1a2883b9a01d4256b37f137342a87d7513c27d67471c1cc80675930871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTJNZUS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYIMBJQVU9%2FHH1HVdVcL4mLG6u3opc3dQ4%2Bjp58oKy3AiB5eJxZI1ZVGnPIVyYGRebksmshgsnuv6xUG3awVCTdOSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28KFXM%2BaaR1BzaynKtwDh1SnvHB6FdafZtUOTIksGMuZrgdCDvAQd%2FdKdlfQWOLKbL7iD8sP7IFecXoBK5PnrFq%2FHrobCRRULU4q%2BaOzw1KujCn06SS5FSNI80dfwmksIxQbHoU%2FjQ24ehvDQ0H1bga7jqHZ03lwivMDryQpzXYwqJoLkubXJun5yiQAN6noIPGZH%2FUvn7I3xyAVDTN712fUjRI53DscTVkb2zObtfvS4cg1EnNAPC7iUqyZIAiMaIWnYWwe%2B7nEg0ZzA%2FRb%2BvqRP400jPeCJJ6UGwpcmhxcxLT3ZL5sqz%2BYVCnksqIZ8PPQHMA3BL4ie%2B8Y5n0ZmLfddGVQ0HbbsHfpo583%2BbQMWeuXADZf5Ek2Tam%2FVQ566eCD5ZCbLanbYVVZ%2Fnu5mw99tTgqrcq0FkFIR2aasKyX6XPkvCa3rq1nkKWKggbyH82FNFUikXnOOd11NRw2GzThL%2BIMnkRw9Wj2hQOqws8aoI1E326m91FPF1qIyqkoUUNdFxQU18M71oaHUMnysnDw%2Bqsp%2Fu8YnpGa4kLBDijf4Ddcx6eINLh62BAAQBp54t1rbkj6Usyh9axY7xem0eZuGjVTYXnZ4ERTnZpwNy%2BEVFH2PvNzbApZJlEpJIcZc7ofNw8M%2BPvM9vEw5LP6wwY6pgFj8pjXLg5s8oVs9crOcmqmqlkM6wPP8HoQ74X%2B1IPko16ZkUcP3ei3XNBihNp%2B3imIKLMYofHWG3z87OEdcYu8V3WrGed%2BBH8x3kcYwiAKot6MT8Dt9bnl6w20DkML3U%2Bp3FuqwL7emCtyJLP5R0O87K5C7%2F5bkQF2v08AtAl11MrwcE8GSnQpWFQEUvLEtjUkfIVH87OcC2KFhLPceqzaahHyylgZ&X-Amz-Signature=a10fdd691f70917ef1ee19d130df521ed2a5da308f1b706f75fce4240a5ec7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTJNZUS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYIMBJQVU9%2FHH1HVdVcL4mLG6u3opc3dQ4%2Bjp58oKy3AiB5eJxZI1ZVGnPIVyYGRebksmshgsnuv6xUG3awVCTdOSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28KFXM%2BaaR1BzaynKtwDh1SnvHB6FdafZtUOTIksGMuZrgdCDvAQd%2FdKdlfQWOLKbL7iD8sP7IFecXoBK5PnrFq%2FHrobCRRULU4q%2BaOzw1KujCn06SS5FSNI80dfwmksIxQbHoU%2FjQ24ehvDQ0H1bga7jqHZ03lwivMDryQpzXYwqJoLkubXJun5yiQAN6noIPGZH%2FUvn7I3xyAVDTN712fUjRI53DscTVkb2zObtfvS4cg1EnNAPC7iUqyZIAiMaIWnYWwe%2B7nEg0ZzA%2FRb%2BvqRP400jPeCJJ6UGwpcmhxcxLT3ZL5sqz%2BYVCnksqIZ8PPQHMA3BL4ie%2B8Y5n0ZmLfddGVQ0HbbsHfpo583%2BbQMWeuXADZf5Ek2Tam%2FVQ566eCD5ZCbLanbYVVZ%2Fnu5mw99tTgqrcq0FkFIR2aasKyX6XPkvCa3rq1nkKWKggbyH82FNFUikXnOOd11NRw2GzThL%2BIMnkRw9Wj2hQOqws8aoI1E326m91FPF1qIyqkoUUNdFxQU18M71oaHUMnysnDw%2Bqsp%2Fu8YnpGa4kLBDijf4Ddcx6eINLh62BAAQBp54t1rbkj6Usyh9axY7xem0eZuGjVTYXnZ4ERTnZpwNy%2BEVFH2PvNzbApZJlEpJIcZc7ofNw8M%2BPvM9vEw5LP6wwY6pgFj8pjXLg5s8oVs9crOcmqmqlkM6wPP8HoQ74X%2B1IPko16ZkUcP3ei3XNBihNp%2B3imIKLMYofHWG3z87OEdcYu8V3WrGed%2BBH8x3kcYwiAKot6MT8Dt9bnl6w20DkML3U%2Bp3FuqwL7emCtyJLP5R0O87K5C7%2F5bkQF2v08AtAl11MrwcE8GSnQpWFQEUvLEtjUkfIVH87OcC2KFhLPceqzaahHyylgZ&X-Amz-Signature=ae35de3be38e61fcdb40ed59a4af919bf548defbd71fa053903c8e917068ed4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTJNZUS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYIMBJQVU9%2FHH1HVdVcL4mLG6u3opc3dQ4%2Bjp58oKy3AiB5eJxZI1ZVGnPIVyYGRebksmshgsnuv6xUG3awVCTdOSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28KFXM%2BaaR1BzaynKtwDh1SnvHB6FdafZtUOTIksGMuZrgdCDvAQd%2FdKdlfQWOLKbL7iD8sP7IFecXoBK5PnrFq%2FHrobCRRULU4q%2BaOzw1KujCn06SS5FSNI80dfwmksIxQbHoU%2FjQ24ehvDQ0H1bga7jqHZ03lwivMDryQpzXYwqJoLkubXJun5yiQAN6noIPGZH%2FUvn7I3xyAVDTN712fUjRI53DscTVkb2zObtfvS4cg1EnNAPC7iUqyZIAiMaIWnYWwe%2B7nEg0ZzA%2FRb%2BvqRP400jPeCJJ6UGwpcmhxcxLT3ZL5sqz%2BYVCnksqIZ8PPQHMA3BL4ie%2B8Y5n0ZmLfddGVQ0HbbsHfpo583%2BbQMWeuXADZf5Ek2Tam%2FVQ566eCD5ZCbLanbYVVZ%2Fnu5mw99tTgqrcq0FkFIR2aasKyX6XPkvCa3rq1nkKWKggbyH82FNFUikXnOOd11NRw2GzThL%2BIMnkRw9Wj2hQOqws8aoI1E326m91FPF1qIyqkoUUNdFxQU18M71oaHUMnysnDw%2Bqsp%2Fu8YnpGa4kLBDijf4Ddcx6eINLh62BAAQBp54t1rbkj6Usyh9axY7xem0eZuGjVTYXnZ4ERTnZpwNy%2BEVFH2PvNzbApZJlEpJIcZc7ofNw8M%2BPvM9vEw5LP6wwY6pgFj8pjXLg5s8oVs9crOcmqmqlkM6wPP8HoQ74X%2B1IPko16ZkUcP3ei3XNBihNp%2B3imIKLMYofHWG3z87OEdcYu8V3WrGed%2BBH8x3kcYwiAKot6MT8Dt9bnl6w20DkML3U%2Bp3FuqwL7emCtyJLP5R0O87K5C7%2F5bkQF2v08AtAl11MrwcE8GSnQpWFQEUvLEtjUkfIVH87OcC2KFhLPceqzaahHyylgZ&X-Amz-Signature=28908dcadfc0ce3705daed82748028df4f4a59c2e9d0eb6a30ee1434cddcd92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
