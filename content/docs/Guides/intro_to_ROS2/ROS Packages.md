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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2ELLGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfN2%2Fs0SW02oG71S%2FznzzuIcVAVL0igpVsJEGfwdAYtgIhAOYTWnz5asfrYhIk1gr2k2j07vDrMFdctaYbeFaPlS2RKv8DCEoQABoMNjM3NDIzMTgzODA1IgwAHNQAudqmXJboGhMq3AMip1q1700dSQwaKG1gx2mSyH35QbqoTlKbX6i9%2BmbanwGcR1tL8Xrg5goUiResheQL6fplzbGxVA9Riet39%2B%2B4VlRaBi%2B4lqAKba7ufEMsJq4vPX%2BcH7A1Uu3m42JnUYtCQsAmcujp8qSXyEu9zZqFFU8VdHGjpvp4s5Pnk8h5DMYju%2BV3iP1ndApW9lBsjooPDGF80rBKrXxD6Tg33%2BTdK1VZPpVftw4yiGgjllf6Uw0ntixuyUcjvcqpbxXH006Lxo4z5S8vFccJSmpoarJnGteQWc%2FrTP8tW0gSsSVLxDiacNqHYWDX0BRWXdRGADxuIZgQMMgNgGuWFtMijlOCx2rV1SnZhX4jOY0bh%2BmJmqxLNuAj5pspLmhTjaXecx3RTnqM8OIAJoaMzct9gaU8zG4vZHYzwosQ0%2FiNKpRGMFe0kc6EWi%2BQipIbgZkVifzd7Sg3GfzZs6Ii098vtQ8V3nZHQAvsTYcXlWZC5c2iaTF5a0Rj40TOxOgcPmOwXd%2FTvPEDxOriL%2BxR2BQu4t87IYq4NQ2hSYH2nqkeI4mfN8784As%2Bpl5qeIoQeg7RM8F2gTkZvT8H%2Baf4%2FzlCzI05YUs7tsiy0cn7y8P0vEhH6vO99dJYCaMn2DnjDzDA7ve9BjqkAc4oZv31v%2Bbs6ymVGKH%2FvfiOZrDo0%2FcE51sLTei53Kc4TiR5skQpZ5LnSFlE6ELU%2BVdCHJjtcTJODxUtFU4NaZJ8qX5Soqhf8N4dCzts5M6ilFFr3Bd%2F4Ic14KwXBs9T1DCuCilJo2ohK12z26CRIC2s4LPON%2BEK%2FJuje4cM5%2BQO6D27eV%2B7zJI9uAz2HRM6xV2UnPNol2Wiu5Ct5Pl9bEdAxfak&X-Amz-Signature=6e97bbef1396216134dd13585b46ed02aa4941aa9cc4297b3db8bcd11c9c921b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2ELLGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfN2%2Fs0SW02oG71S%2FznzzuIcVAVL0igpVsJEGfwdAYtgIhAOYTWnz5asfrYhIk1gr2k2j07vDrMFdctaYbeFaPlS2RKv8DCEoQABoMNjM3NDIzMTgzODA1IgwAHNQAudqmXJboGhMq3AMip1q1700dSQwaKG1gx2mSyH35QbqoTlKbX6i9%2BmbanwGcR1tL8Xrg5goUiResheQL6fplzbGxVA9Riet39%2B%2B4VlRaBi%2B4lqAKba7ufEMsJq4vPX%2BcH7A1Uu3m42JnUYtCQsAmcujp8qSXyEu9zZqFFU8VdHGjpvp4s5Pnk8h5DMYju%2BV3iP1ndApW9lBsjooPDGF80rBKrXxD6Tg33%2BTdK1VZPpVftw4yiGgjllf6Uw0ntixuyUcjvcqpbxXH006Lxo4z5S8vFccJSmpoarJnGteQWc%2FrTP8tW0gSsSVLxDiacNqHYWDX0BRWXdRGADxuIZgQMMgNgGuWFtMijlOCx2rV1SnZhX4jOY0bh%2BmJmqxLNuAj5pspLmhTjaXecx3RTnqM8OIAJoaMzct9gaU8zG4vZHYzwosQ0%2FiNKpRGMFe0kc6EWi%2BQipIbgZkVifzd7Sg3GfzZs6Ii098vtQ8V3nZHQAvsTYcXlWZC5c2iaTF5a0Rj40TOxOgcPmOwXd%2FTvPEDxOriL%2BxR2BQu4t87IYq4NQ2hSYH2nqkeI4mfN8784As%2Bpl5qeIoQeg7RM8F2gTkZvT8H%2Baf4%2FzlCzI05YUs7tsiy0cn7y8P0vEhH6vO99dJYCaMn2DnjDzDA7ve9BjqkAc4oZv31v%2Bbs6ymVGKH%2FvfiOZrDo0%2FcE51sLTei53Kc4TiR5skQpZ5LnSFlE6ELU%2BVdCHJjtcTJODxUtFU4NaZJ8qX5Soqhf8N4dCzts5M6ilFFr3Bd%2F4Ic14KwXBs9T1DCuCilJo2ohK12z26CRIC2s4LPON%2BEK%2FJuje4cM5%2BQO6D27eV%2B7zJI9uAz2HRM6xV2UnPNol2Wiu5Ct5Pl9bEdAxfak&X-Amz-Signature=0222d42a23d6765f704419a7f44a7f561e64f41dc47a78482e2311923e65d87e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2ELLGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfN2%2Fs0SW02oG71S%2FznzzuIcVAVL0igpVsJEGfwdAYtgIhAOYTWnz5asfrYhIk1gr2k2j07vDrMFdctaYbeFaPlS2RKv8DCEoQABoMNjM3NDIzMTgzODA1IgwAHNQAudqmXJboGhMq3AMip1q1700dSQwaKG1gx2mSyH35QbqoTlKbX6i9%2BmbanwGcR1tL8Xrg5goUiResheQL6fplzbGxVA9Riet39%2B%2B4VlRaBi%2B4lqAKba7ufEMsJq4vPX%2BcH7A1Uu3m42JnUYtCQsAmcujp8qSXyEu9zZqFFU8VdHGjpvp4s5Pnk8h5DMYju%2BV3iP1ndApW9lBsjooPDGF80rBKrXxD6Tg33%2BTdK1VZPpVftw4yiGgjllf6Uw0ntixuyUcjvcqpbxXH006Lxo4z5S8vFccJSmpoarJnGteQWc%2FrTP8tW0gSsSVLxDiacNqHYWDX0BRWXdRGADxuIZgQMMgNgGuWFtMijlOCx2rV1SnZhX4jOY0bh%2BmJmqxLNuAj5pspLmhTjaXecx3RTnqM8OIAJoaMzct9gaU8zG4vZHYzwosQ0%2FiNKpRGMFe0kc6EWi%2BQipIbgZkVifzd7Sg3GfzZs6Ii098vtQ8V3nZHQAvsTYcXlWZC5c2iaTF5a0Rj40TOxOgcPmOwXd%2FTvPEDxOriL%2BxR2BQu4t87IYq4NQ2hSYH2nqkeI4mfN8784As%2Bpl5qeIoQeg7RM8F2gTkZvT8H%2Baf4%2FzlCzI05YUs7tsiy0cn7y8P0vEhH6vO99dJYCaMn2DnjDzDA7ve9BjqkAc4oZv31v%2Bbs6ymVGKH%2FvfiOZrDo0%2FcE51sLTei53Kc4TiR5skQpZ5LnSFlE6ELU%2BVdCHJjtcTJODxUtFU4NaZJ8qX5Soqhf8N4dCzts5M6ilFFr3Bd%2F4Ic14KwXBs9T1DCuCilJo2ohK12z26CRIC2s4LPON%2BEK%2FJuje4cM5%2BQO6D27eV%2B7zJI9uAz2HRM6xV2UnPNol2Wiu5Ct5Pl9bEdAxfak&X-Amz-Signature=2a865f05e9b0b468ac4babd7e87cea83690198eaffb984922deb990a3aa06fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2ELLGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfN2%2Fs0SW02oG71S%2FznzzuIcVAVL0igpVsJEGfwdAYtgIhAOYTWnz5asfrYhIk1gr2k2j07vDrMFdctaYbeFaPlS2RKv8DCEoQABoMNjM3NDIzMTgzODA1IgwAHNQAudqmXJboGhMq3AMip1q1700dSQwaKG1gx2mSyH35QbqoTlKbX6i9%2BmbanwGcR1tL8Xrg5goUiResheQL6fplzbGxVA9Riet39%2B%2B4VlRaBi%2B4lqAKba7ufEMsJq4vPX%2BcH7A1Uu3m42JnUYtCQsAmcujp8qSXyEu9zZqFFU8VdHGjpvp4s5Pnk8h5DMYju%2BV3iP1ndApW9lBsjooPDGF80rBKrXxD6Tg33%2BTdK1VZPpVftw4yiGgjllf6Uw0ntixuyUcjvcqpbxXH006Lxo4z5S8vFccJSmpoarJnGteQWc%2FrTP8tW0gSsSVLxDiacNqHYWDX0BRWXdRGADxuIZgQMMgNgGuWFtMijlOCx2rV1SnZhX4jOY0bh%2BmJmqxLNuAj5pspLmhTjaXecx3RTnqM8OIAJoaMzct9gaU8zG4vZHYzwosQ0%2FiNKpRGMFe0kc6EWi%2BQipIbgZkVifzd7Sg3GfzZs6Ii098vtQ8V3nZHQAvsTYcXlWZC5c2iaTF5a0Rj40TOxOgcPmOwXd%2FTvPEDxOriL%2BxR2BQu4t87IYq4NQ2hSYH2nqkeI4mfN8784As%2Bpl5qeIoQeg7RM8F2gTkZvT8H%2Baf4%2FzlCzI05YUs7tsiy0cn7y8P0vEhH6vO99dJYCaMn2DnjDzDA7ve9BjqkAc4oZv31v%2Bbs6ymVGKH%2FvfiOZrDo0%2FcE51sLTei53Kc4TiR5skQpZ5LnSFlE6ELU%2BVdCHJjtcTJODxUtFU4NaZJ8qX5Soqhf8N4dCzts5M6ilFFr3Bd%2F4Ic14KwXBs9T1DCuCilJo2ohK12z26CRIC2s4LPON%2BEK%2FJuje4cM5%2BQO6D27eV%2B7zJI9uAz2HRM6xV2UnPNol2Wiu5Ct5Pl9bEdAxfak&X-Amz-Signature=3fc846afa92b85da56376233a0233a317bb9578a5f74058c490bb08f40ccecec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2ELLGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfN2%2Fs0SW02oG71S%2FznzzuIcVAVL0igpVsJEGfwdAYtgIhAOYTWnz5asfrYhIk1gr2k2j07vDrMFdctaYbeFaPlS2RKv8DCEoQABoMNjM3NDIzMTgzODA1IgwAHNQAudqmXJboGhMq3AMip1q1700dSQwaKG1gx2mSyH35QbqoTlKbX6i9%2BmbanwGcR1tL8Xrg5goUiResheQL6fplzbGxVA9Riet39%2B%2B4VlRaBi%2B4lqAKba7ufEMsJq4vPX%2BcH7A1Uu3m42JnUYtCQsAmcujp8qSXyEu9zZqFFU8VdHGjpvp4s5Pnk8h5DMYju%2BV3iP1ndApW9lBsjooPDGF80rBKrXxD6Tg33%2BTdK1VZPpVftw4yiGgjllf6Uw0ntixuyUcjvcqpbxXH006Lxo4z5S8vFccJSmpoarJnGteQWc%2FrTP8tW0gSsSVLxDiacNqHYWDX0BRWXdRGADxuIZgQMMgNgGuWFtMijlOCx2rV1SnZhX4jOY0bh%2BmJmqxLNuAj5pspLmhTjaXecx3RTnqM8OIAJoaMzct9gaU8zG4vZHYzwosQ0%2FiNKpRGMFe0kc6EWi%2BQipIbgZkVifzd7Sg3GfzZs6Ii098vtQ8V3nZHQAvsTYcXlWZC5c2iaTF5a0Rj40TOxOgcPmOwXd%2FTvPEDxOriL%2BxR2BQu4t87IYq4NQ2hSYH2nqkeI4mfN8784As%2Bpl5qeIoQeg7RM8F2gTkZvT8H%2Baf4%2FzlCzI05YUs7tsiy0cn7y8P0vEhH6vO99dJYCaMn2DnjDzDA7ve9BjqkAc4oZv31v%2Bbs6ymVGKH%2FvfiOZrDo0%2FcE51sLTei53Kc4TiR5skQpZ5LnSFlE6ELU%2BVdCHJjtcTJODxUtFU4NaZJ8qX5Soqhf8N4dCzts5M6ilFFr3Bd%2F4Ic14KwXBs9T1DCuCilJo2ohK12z26CRIC2s4LPON%2BEK%2FJuje4cM5%2BQO6D27eV%2B7zJI9uAz2HRM6xV2UnPNol2Wiu5Ct5Pl9bEdAxfak&X-Amz-Signature=a17590706cfe2cb4b2fd6c3b8bcf4198bef2f714d32da8d2ed268380c893eb72&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2ELLGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfN2%2Fs0SW02oG71S%2FznzzuIcVAVL0igpVsJEGfwdAYtgIhAOYTWnz5asfrYhIk1gr2k2j07vDrMFdctaYbeFaPlS2RKv8DCEoQABoMNjM3NDIzMTgzODA1IgwAHNQAudqmXJboGhMq3AMip1q1700dSQwaKG1gx2mSyH35QbqoTlKbX6i9%2BmbanwGcR1tL8Xrg5goUiResheQL6fplzbGxVA9Riet39%2B%2B4VlRaBi%2B4lqAKba7ufEMsJq4vPX%2BcH7A1Uu3m42JnUYtCQsAmcujp8qSXyEu9zZqFFU8VdHGjpvp4s5Pnk8h5DMYju%2BV3iP1ndApW9lBsjooPDGF80rBKrXxD6Tg33%2BTdK1VZPpVftw4yiGgjllf6Uw0ntixuyUcjvcqpbxXH006Lxo4z5S8vFccJSmpoarJnGteQWc%2FrTP8tW0gSsSVLxDiacNqHYWDX0BRWXdRGADxuIZgQMMgNgGuWFtMijlOCx2rV1SnZhX4jOY0bh%2BmJmqxLNuAj5pspLmhTjaXecx3RTnqM8OIAJoaMzct9gaU8zG4vZHYzwosQ0%2FiNKpRGMFe0kc6EWi%2BQipIbgZkVifzd7Sg3GfzZs6Ii098vtQ8V3nZHQAvsTYcXlWZC5c2iaTF5a0Rj40TOxOgcPmOwXd%2FTvPEDxOriL%2BxR2BQu4t87IYq4NQ2hSYH2nqkeI4mfN8784As%2Bpl5qeIoQeg7RM8F2gTkZvT8H%2Baf4%2FzlCzI05YUs7tsiy0cn7y8P0vEhH6vO99dJYCaMn2DnjDzDA7ve9BjqkAc4oZv31v%2Bbs6ymVGKH%2FvfiOZrDo0%2FcE51sLTei53Kc4TiR5skQpZ5LnSFlE6ELU%2BVdCHJjtcTJODxUtFU4NaZJ8qX5Soqhf8N4dCzts5M6ilFFr3Bd%2F4Ic14KwXBs9T1DCuCilJo2ohK12z26CRIC2s4LPON%2BEK%2FJuje4cM5%2BQO6D27eV%2B7zJI9uAz2HRM6xV2UnPNol2Wiu5Ct5Pl9bEdAxfak&X-Amz-Signature=20b224abac0e584a7084b547bd5281ddc418bbbada2529cca76486507e2a234c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2ELLGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfN2%2Fs0SW02oG71S%2FznzzuIcVAVL0igpVsJEGfwdAYtgIhAOYTWnz5asfrYhIk1gr2k2j07vDrMFdctaYbeFaPlS2RKv8DCEoQABoMNjM3NDIzMTgzODA1IgwAHNQAudqmXJboGhMq3AMip1q1700dSQwaKG1gx2mSyH35QbqoTlKbX6i9%2BmbanwGcR1tL8Xrg5goUiResheQL6fplzbGxVA9Riet39%2B%2B4VlRaBi%2B4lqAKba7ufEMsJq4vPX%2BcH7A1Uu3m42JnUYtCQsAmcujp8qSXyEu9zZqFFU8VdHGjpvp4s5Pnk8h5DMYju%2BV3iP1ndApW9lBsjooPDGF80rBKrXxD6Tg33%2BTdK1VZPpVftw4yiGgjllf6Uw0ntixuyUcjvcqpbxXH006Lxo4z5S8vFccJSmpoarJnGteQWc%2FrTP8tW0gSsSVLxDiacNqHYWDX0BRWXdRGADxuIZgQMMgNgGuWFtMijlOCx2rV1SnZhX4jOY0bh%2BmJmqxLNuAj5pspLmhTjaXecx3RTnqM8OIAJoaMzct9gaU8zG4vZHYzwosQ0%2FiNKpRGMFe0kc6EWi%2BQipIbgZkVifzd7Sg3GfzZs6Ii098vtQ8V3nZHQAvsTYcXlWZC5c2iaTF5a0Rj40TOxOgcPmOwXd%2FTvPEDxOriL%2BxR2BQu4t87IYq4NQ2hSYH2nqkeI4mfN8784As%2Bpl5qeIoQeg7RM8F2gTkZvT8H%2Baf4%2FzlCzI05YUs7tsiy0cn7y8P0vEhH6vO99dJYCaMn2DnjDzDA7ve9BjqkAc4oZv31v%2Bbs6ymVGKH%2FvfiOZrDo0%2FcE51sLTei53Kc4TiR5skQpZ5LnSFlE6ELU%2BVdCHJjtcTJODxUtFU4NaZJ8qX5Soqhf8N4dCzts5M6ilFFr3Bd%2F4Ic14KwXBs9T1DCuCilJo2ohK12z26CRIC2s4LPON%2BEK%2FJuje4cM5%2BQO6D27eV%2B7zJI9uAz2HRM6xV2UnPNol2Wiu5Ct5Pl9bEdAxfak&X-Amz-Signature=9aa6e2c6cfda158942351121c3f07769b404f54d322baffd881e2da373b9b55f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
