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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO574QFH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuMuAMwm38cw%2FBoM%2F3NFL1hx7Cry5xlMrVYQAnjAI5AIhALqSmDSUL4ea9UHeKXe%2FxUqRmJP0Afh6LjxVO9sGZ6TgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK4Ev%2Bg3DuM0%2Bx4Iq3APFvA21ua%2BZlmeAt7NFeHLtb8EY47jTlZZMa3YORapvJE4GYzgcVE%2Fkyzss8pFbE2eLXfa%2BfmtIvPmineOqFbNFkZ6yVCHRXFk1ymIR2Kzt5IHbGNxpdUa1iEeOroJ5N1NUpzENYf8ipuZxF3bfY4z93BypvjOBb71P5Sfekjak%2F74iqs3xlYKgPdVFJryH2VMxyZ7Ioz%2FFI7QCCFqAZ7qD9l1ndRHN1W%2BWHbaHRclri2SxJmcrlJlNZp15uRX5GupZ6SgEXtxCpltBzUAvYqGd3UcJ83fU3HpKxo6uUwarnP6CqgNJG8XYZL%2Fe6Qy7aArzE3KkKt8gXekHc2Cg9EVCzxMhzWzxnkRkX2ZGoYdDcJ47hV6Jh3dTUeFLrCbI3RiPRGP38cb4%2BgCL9ROZldKQDVgvZ8a%2BRM%2BOYoEsDdkWH8G5R7bnkx0nj2d%2BpwcjOrXQveeGgHgXZ6Z9aiCviqVVbeI9Pqhd2vnIARvv%2BEgQ%2FGyefZmuWMtgguy%2BpMy%2BEhNbQ9E7B9kQqnFAM1eC9kpocISl%2Ft%2BRF0dHt9NhpZgDpleH%2FJ%2FZGmQoU13FL0SZQAfhWvsgedjxatMpgS%2B8ElA9ogrY9GG2aLgBQb2BC%2F73LTaAjVL3JUNfOCy4KTCsrsvDBjqkAdhRUqELcR7QYXSok08ttQ9%2FNu4JafIkFrF82iYK%2FLp8%2BsxH7xg0Dd%2F9%2Fwp9ox5JCxBms5EicLYZoIey4cggnkVFBJsAONKRuIU47ZbFH2TVl%2BeiZfuf1%2FHd8ITQW4O5ocSqEVm38zc0d0yxGMBomep5m2HSYettln%2BHF9ax21o%2BDPBM6rzXd%2BFaJdySRqLT41dyIDWERaYRc9kBPjMVbV7EDHxg&X-Amz-Signature=63a6a6c0b2c51adf8a6d49dc31d24c25b3a8e4b7573efda6dfe2c3713cef3407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO574QFH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuMuAMwm38cw%2FBoM%2F3NFL1hx7Cry5xlMrVYQAnjAI5AIhALqSmDSUL4ea9UHeKXe%2FxUqRmJP0Afh6LjxVO9sGZ6TgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK4Ev%2Bg3DuM0%2Bx4Iq3APFvA21ua%2BZlmeAt7NFeHLtb8EY47jTlZZMa3YORapvJE4GYzgcVE%2Fkyzss8pFbE2eLXfa%2BfmtIvPmineOqFbNFkZ6yVCHRXFk1ymIR2Kzt5IHbGNxpdUa1iEeOroJ5N1NUpzENYf8ipuZxF3bfY4z93BypvjOBb71P5Sfekjak%2F74iqs3xlYKgPdVFJryH2VMxyZ7Ioz%2FFI7QCCFqAZ7qD9l1ndRHN1W%2BWHbaHRclri2SxJmcrlJlNZp15uRX5GupZ6SgEXtxCpltBzUAvYqGd3UcJ83fU3HpKxo6uUwarnP6CqgNJG8XYZL%2Fe6Qy7aArzE3KkKt8gXekHc2Cg9EVCzxMhzWzxnkRkX2ZGoYdDcJ47hV6Jh3dTUeFLrCbI3RiPRGP38cb4%2BgCL9ROZldKQDVgvZ8a%2BRM%2BOYoEsDdkWH8G5R7bnkx0nj2d%2BpwcjOrXQveeGgHgXZ6Z9aiCviqVVbeI9Pqhd2vnIARvv%2BEgQ%2FGyefZmuWMtgguy%2BpMy%2BEhNbQ9E7B9kQqnFAM1eC9kpocISl%2Ft%2BRF0dHt9NhpZgDpleH%2FJ%2FZGmQoU13FL0SZQAfhWvsgedjxatMpgS%2B8ElA9ogrY9GG2aLgBQb2BC%2F73LTaAjVL3JUNfOCy4KTCsrsvDBjqkAdhRUqELcR7QYXSok08ttQ9%2FNu4JafIkFrF82iYK%2FLp8%2BsxH7xg0Dd%2F9%2Fwp9ox5JCxBms5EicLYZoIey4cggnkVFBJsAONKRuIU47ZbFH2TVl%2BeiZfuf1%2FHd8ITQW4O5ocSqEVm38zc0d0yxGMBomep5m2HSYettln%2BHF9ax21o%2BDPBM6rzXd%2BFaJdySRqLT41dyIDWERaYRc9kBPjMVbV7EDHxg&X-Amz-Signature=0b9fe94640f2d69861e911da4b0365efa17068527be55f1141b0940950902786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO574QFH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuMuAMwm38cw%2FBoM%2F3NFL1hx7Cry5xlMrVYQAnjAI5AIhALqSmDSUL4ea9UHeKXe%2FxUqRmJP0Afh6LjxVO9sGZ6TgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK4Ev%2Bg3DuM0%2Bx4Iq3APFvA21ua%2BZlmeAt7NFeHLtb8EY47jTlZZMa3YORapvJE4GYzgcVE%2Fkyzss8pFbE2eLXfa%2BfmtIvPmineOqFbNFkZ6yVCHRXFk1ymIR2Kzt5IHbGNxpdUa1iEeOroJ5N1NUpzENYf8ipuZxF3bfY4z93BypvjOBb71P5Sfekjak%2F74iqs3xlYKgPdVFJryH2VMxyZ7Ioz%2FFI7QCCFqAZ7qD9l1ndRHN1W%2BWHbaHRclri2SxJmcrlJlNZp15uRX5GupZ6SgEXtxCpltBzUAvYqGd3UcJ83fU3HpKxo6uUwarnP6CqgNJG8XYZL%2Fe6Qy7aArzE3KkKt8gXekHc2Cg9EVCzxMhzWzxnkRkX2ZGoYdDcJ47hV6Jh3dTUeFLrCbI3RiPRGP38cb4%2BgCL9ROZldKQDVgvZ8a%2BRM%2BOYoEsDdkWH8G5R7bnkx0nj2d%2BpwcjOrXQveeGgHgXZ6Z9aiCviqVVbeI9Pqhd2vnIARvv%2BEgQ%2FGyefZmuWMtgguy%2BpMy%2BEhNbQ9E7B9kQqnFAM1eC9kpocISl%2Ft%2BRF0dHt9NhpZgDpleH%2FJ%2FZGmQoU13FL0SZQAfhWvsgedjxatMpgS%2B8ElA9ogrY9GG2aLgBQb2BC%2F73LTaAjVL3JUNfOCy4KTCsrsvDBjqkAdhRUqELcR7QYXSok08ttQ9%2FNu4JafIkFrF82iYK%2FLp8%2BsxH7xg0Dd%2F9%2Fwp9ox5JCxBms5EicLYZoIey4cggnkVFBJsAONKRuIU47ZbFH2TVl%2BeiZfuf1%2FHd8ITQW4O5ocSqEVm38zc0d0yxGMBomep5m2HSYettln%2BHF9ax21o%2BDPBM6rzXd%2BFaJdySRqLT41dyIDWERaYRc9kBPjMVbV7EDHxg&X-Amz-Signature=d429010512e8bff1f3bbcd796e3a20f2c6bfdac3d97825cc152da0c421c4bf4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO574QFH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuMuAMwm38cw%2FBoM%2F3NFL1hx7Cry5xlMrVYQAnjAI5AIhALqSmDSUL4ea9UHeKXe%2FxUqRmJP0Afh6LjxVO9sGZ6TgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK4Ev%2Bg3DuM0%2Bx4Iq3APFvA21ua%2BZlmeAt7NFeHLtb8EY47jTlZZMa3YORapvJE4GYzgcVE%2Fkyzss8pFbE2eLXfa%2BfmtIvPmineOqFbNFkZ6yVCHRXFk1ymIR2Kzt5IHbGNxpdUa1iEeOroJ5N1NUpzENYf8ipuZxF3bfY4z93BypvjOBb71P5Sfekjak%2F74iqs3xlYKgPdVFJryH2VMxyZ7Ioz%2FFI7QCCFqAZ7qD9l1ndRHN1W%2BWHbaHRclri2SxJmcrlJlNZp15uRX5GupZ6SgEXtxCpltBzUAvYqGd3UcJ83fU3HpKxo6uUwarnP6CqgNJG8XYZL%2Fe6Qy7aArzE3KkKt8gXekHc2Cg9EVCzxMhzWzxnkRkX2ZGoYdDcJ47hV6Jh3dTUeFLrCbI3RiPRGP38cb4%2BgCL9ROZldKQDVgvZ8a%2BRM%2BOYoEsDdkWH8G5R7bnkx0nj2d%2BpwcjOrXQveeGgHgXZ6Z9aiCviqVVbeI9Pqhd2vnIARvv%2BEgQ%2FGyefZmuWMtgguy%2BpMy%2BEhNbQ9E7B9kQqnFAM1eC9kpocISl%2Ft%2BRF0dHt9NhpZgDpleH%2FJ%2FZGmQoU13FL0SZQAfhWvsgedjxatMpgS%2B8ElA9ogrY9GG2aLgBQb2BC%2F73LTaAjVL3JUNfOCy4KTCsrsvDBjqkAdhRUqELcR7QYXSok08ttQ9%2FNu4JafIkFrF82iYK%2FLp8%2BsxH7xg0Dd%2F9%2Fwp9ox5JCxBms5EicLYZoIey4cggnkVFBJsAONKRuIU47ZbFH2TVl%2BeiZfuf1%2FHd8ITQW4O5ocSqEVm38zc0d0yxGMBomep5m2HSYettln%2BHF9ax21o%2BDPBM6rzXd%2BFaJdySRqLT41dyIDWERaYRc9kBPjMVbV7EDHxg&X-Amz-Signature=95eeb1ac8de6a0d0bf95077100d36d055400034866b95dae97395ed1f4e019be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO574QFH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuMuAMwm38cw%2FBoM%2F3NFL1hx7Cry5xlMrVYQAnjAI5AIhALqSmDSUL4ea9UHeKXe%2FxUqRmJP0Afh6LjxVO9sGZ6TgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK4Ev%2Bg3DuM0%2Bx4Iq3APFvA21ua%2BZlmeAt7NFeHLtb8EY47jTlZZMa3YORapvJE4GYzgcVE%2Fkyzss8pFbE2eLXfa%2BfmtIvPmineOqFbNFkZ6yVCHRXFk1ymIR2Kzt5IHbGNxpdUa1iEeOroJ5N1NUpzENYf8ipuZxF3bfY4z93BypvjOBb71P5Sfekjak%2F74iqs3xlYKgPdVFJryH2VMxyZ7Ioz%2FFI7QCCFqAZ7qD9l1ndRHN1W%2BWHbaHRclri2SxJmcrlJlNZp15uRX5GupZ6SgEXtxCpltBzUAvYqGd3UcJ83fU3HpKxo6uUwarnP6CqgNJG8XYZL%2Fe6Qy7aArzE3KkKt8gXekHc2Cg9EVCzxMhzWzxnkRkX2ZGoYdDcJ47hV6Jh3dTUeFLrCbI3RiPRGP38cb4%2BgCL9ROZldKQDVgvZ8a%2BRM%2BOYoEsDdkWH8G5R7bnkx0nj2d%2BpwcjOrXQveeGgHgXZ6Z9aiCviqVVbeI9Pqhd2vnIARvv%2BEgQ%2FGyefZmuWMtgguy%2BpMy%2BEhNbQ9E7B9kQqnFAM1eC9kpocISl%2Ft%2BRF0dHt9NhpZgDpleH%2FJ%2FZGmQoU13FL0SZQAfhWvsgedjxatMpgS%2B8ElA9ogrY9GG2aLgBQb2BC%2F73LTaAjVL3JUNfOCy4KTCsrsvDBjqkAdhRUqELcR7QYXSok08ttQ9%2FNu4JafIkFrF82iYK%2FLp8%2BsxH7xg0Dd%2F9%2Fwp9ox5JCxBms5EicLYZoIey4cggnkVFBJsAONKRuIU47ZbFH2TVl%2BeiZfuf1%2FHd8ITQW4O5ocSqEVm38zc0d0yxGMBomep5m2HSYettln%2BHF9ax21o%2BDPBM6rzXd%2BFaJdySRqLT41dyIDWERaYRc9kBPjMVbV7EDHxg&X-Amz-Signature=b32833f5cdbfd7a0269a728606f0221355ee9425f10c7f3d5b29b45d5a0f7407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO574QFH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuMuAMwm38cw%2FBoM%2F3NFL1hx7Cry5xlMrVYQAnjAI5AIhALqSmDSUL4ea9UHeKXe%2FxUqRmJP0Afh6LjxVO9sGZ6TgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK4Ev%2Bg3DuM0%2Bx4Iq3APFvA21ua%2BZlmeAt7NFeHLtb8EY47jTlZZMa3YORapvJE4GYzgcVE%2Fkyzss8pFbE2eLXfa%2BfmtIvPmineOqFbNFkZ6yVCHRXFk1ymIR2Kzt5IHbGNxpdUa1iEeOroJ5N1NUpzENYf8ipuZxF3bfY4z93BypvjOBb71P5Sfekjak%2F74iqs3xlYKgPdVFJryH2VMxyZ7Ioz%2FFI7QCCFqAZ7qD9l1ndRHN1W%2BWHbaHRclri2SxJmcrlJlNZp15uRX5GupZ6SgEXtxCpltBzUAvYqGd3UcJ83fU3HpKxo6uUwarnP6CqgNJG8XYZL%2Fe6Qy7aArzE3KkKt8gXekHc2Cg9EVCzxMhzWzxnkRkX2ZGoYdDcJ47hV6Jh3dTUeFLrCbI3RiPRGP38cb4%2BgCL9ROZldKQDVgvZ8a%2BRM%2BOYoEsDdkWH8G5R7bnkx0nj2d%2BpwcjOrXQveeGgHgXZ6Z9aiCviqVVbeI9Pqhd2vnIARvv%2BEgQ%2FGyefZmuWMtgguy%2BpMy%2BEhNbQ9E7B9kQqnFAM1eC9kpocISl%2Ft%2BRF0dHt9NhpZgDpleH%2FJ%2FZGmQoU13FL0SZQAfhWvsgedjxatMpgS%2B8ElA9ogrY9GG2aLgBQb2BC%2F73LTaAjVL3JUNfOCy4KTCsrsvDBjqkAdhRUqELcR7QYXSok08ttQ9%2FNu4JafIkFrF82iYK%2FLp8%2BsxH7xg0Dd%2F9%2Fwp9ox5JCxBms5EicLYZoIey4cggnkVFBJsAONKRuIU47ZbFH2TVl%2BeiZfuf1%2FHd8ITQW4O5ocSqEVm38zc0d0yxGMBomep5m2HSYettln%2BHF9ax21o%2BDPBM6rzXd%2BFaJdySRqLT41dyIDWERaYRc9kBPjMVbV7EDHxg&X-Amz-Signature=67982efcffb78b837944ab021106d8c522d9d5948e5e221b6970f46590adf3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO574QFH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuMuAMwm38cw%2FBoM%2F3NFL1hx7Cry5xlMrVYQAnjAI5AIhALqSmDSUL4ea9UHeKXe%2FxUqRmJP0Afh6LjxVO9sGZ6TgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK4Ev%2Bg3DuM0%2Bx4Iq3APFvA21ua%2BZlmeAt7NFeHLtb8EY47jTlZZMa3YORapvJE4GYzgcVE%2Fkyzss8pFbE2eLXfa%2BfmtIvPmineOqFbNFkZ6yVCHRXFk1ymIR2Kzt5IHbGNxpdUa1iEeOroJ5N1NUpzENYf8ipuZxF3bfY4z93BypvjOBb71P5Sfekjak%2F74iqs3xlYKgPdVFJryH2VMxyZ7Ioz%2FFI7QCCFqAZ7qD9l1ndRHN1W%2BWHbaHRclri2SxJmcrlJlNZp15uRX5GupZ6SgEXtxCpltBzUAvYqGd3UcJ83fU3HpKxo6uUwarnP6CqgNJG8XYZL%2Fe6Qy7aArzE3KkKt8gXekHc2Cg9EVCzxMhzWzxnkRkX2ZGoYdDcJ47hV6Jh3dTUeFLrCbI3RiPRGP38cb4%2BgCL9ROZldKQDVgvZ8a%2BRM%2BOYoEsDdkWH8G5R7bnkx0nj2d%2BpwcjOrXQveeGgHgXZ6Z9aiCviqVVbeI9Pqhd2vnIARvv%2BEgQ%2FGyefZmuWMtgguy%2BpMy%2BEhNbQ9E7B9kQqnFAM1eC9kpocISl%2Ft%2BRF0dHt9NhpZgDpleH%2FJ%2FZGmQoU13FL0SZQAfhWvsgedjxatMpgS%2B8ElA9ogrY9GG2aLgBQb2BC%2F73LTaAjVL3JUNfOCy4KTCsrsvDBjqkAdhRUqELcR7QYXSok08ttQ9%2FNu4JafIkFrF82iYK%2FLp8%2BsxH7xg0Dd%2F9%2Fwp9ox5JCxBms5EicLYZoIey4cggnkVFBJsAONKRuIU47ZbFH2TVl%2BeiZfuf1%2FHd8ITQW4O5ocSqEVm38zc0d0yxGMBomep5m2HSYettln%2BHF9ax21o%2BDPBM6rzXd%2BFaJdySRqLT41dyIDWERaYRc9kBPjMVbV7EDHxg&X-Amz-Signature=3300db280105bae4cbc419575a0e6f41007e7cc02cc5379272051c04e6c67c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
