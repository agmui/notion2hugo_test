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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWPIDPY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqJ1P0U0CSLgTkJKr%2FOfQ9wbCqrkbL%2BEQUFp39SJHr1AiEAiRFpdkmDUVBX%2B1kxzceOMyUzoHAS5C%2Bgi4hkpUkbw7YqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY47nSi9gl2NE9zcircA%2Fgc4pIvqDdwSmmeb6dkLwiPie5y6U3qlMoa%2B5Bz15Min9OIAPT8czNAf5%2FPuTheo54K%2B7j2WsvC8erGROixHDt2CykXqv7IH2io5Pnk86Tu%2FE9dNfgq0F3Qua236n9cE27Avsj6%2FwLDhQ33KGMpmnIP7ueWSiNaozLln8yA7veeZBThN%2Fkb3qb1kdO4ikg8%2FZnPtKkEyhV7r6%2FP39U4q0OJtaIObLOZXOm1uMp8pQmDKM2hlUtiD2zajGfKNijojoKaTGc9%2Bhnbx5WhwJ0wCQXYWPLDDmIzEqp%2FrISDgj8hV4R0tYAfF3AVhAsDv6bxp1vE%2B4G5mB8keoQwNNM%2FlUSg7JM%2FmjH%2FK6gFZRBxV6ZK5pGjWnNCOTM256OhHWGX%2FQqP2iOFtIUdIjYjh5x%2FuwBRJN8qJmT2Jde8FkN4U1ER%2FsNfmnx5J8D9bAhiYi8MjKf1pFOzrW0llNYgvfrIM6WnoaU60Fp5HK48NSaICL8B1jm8ZDNpsKzzSVQjlMRgfHd50%2BeJ2NKziV2n1vVRn8Rinqwn9JbNbZ1VMx7ViUOh%2Fm8reHPXqvD3aJw4VpHoJ18ATgFLqLcbCiPu1Aio4dqT1Brz%2FycAcgc6A%2Bx%2Bp9Tl4AE7b%2BTnxjTlVydrMNHnr70GOqUBNfciNKlen8nQHZIIOcerqeEmj8QC4rn7Adp7WrwgY%2BKbkMx46USqjGp%2F7OtMbykPISj%2Bu4vHnHAQ1%2FovlzH0U%2B8H7YvZZ%2BjAFiqmHQXVX2zeegbmW%2B3HHNKD3nzIQbRTvFS2HtVt2xVluhg1In21YxculT%2FLZBTeBZ1s1HaVDlEUOqJHOm0iSBJxRjaTvL5MuaMFJdwXLoxqYTQpOJxLmLSdZG4e&X-Amz-Signature=9a806f3cb35b2dfea5d8a43f0b9d52a0f345b00c13262774f6d7fa8ff9d360c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWPIDPY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqJ1P0U0CSLgTkJKr%2FOfQ9wbCqrkbL%2BEQUFp39SJHr1AiEAiRFpdkmDUVBX%2B1kxzceOMyUzoHAS5C%2Bgi4hkpUkbw7YqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY47nSi9gl2NE9zcircA%2Fgc4pIvqDdwSmmeb6dkLwiPie5y6U3qlMoa%2B5Bz15Min9OIAPT8czNAf5%2FPuTheo54K%2B7j2WsvC8erGROixHDt2CykXqv7IH2io5Pnk86Tu%2FE9dNfgq0F3Qua236n9cE27Avsj6%2FwLDhQ33KGMpmnIP7ueWSiNaozLln8yA7veeZBThN%2Fkb3qb1kdO4ikg8%2FZnPtKkEyhV7r6%2FP39U4q0OJtaIObLOZXOm1uMp8pQmDKM2hlUtiD2zajGfKNijojoKaTGc9%2Bhnbx5WhwJ0wCQXYWPLDDmIzEqp%2FrISDgj8hV4R0tYAfF3AVhAsDv6bxp1vE%2B4G5mB8keoQwNNM%2FlUSg7JM%2FmjH%2FK6gFZRBxV6ZK5pGjWnNCOTM256OhHWGX%2FQqP2iOFtIUdIjYjh5x%2FuwBRJN8qJmT2Jde8FkN4U1ER%2FsNfmnx5J8D9bAhiYi8MjKf1pFOzrW0llNYgvfrIM6WnoaU60Fp5HK48NSaICL8B1jm8ZDNpsKzzSVQjlMRgfHd50%2BeJ2NKziV2n1vVRn8Rinqwn9JbNbZ1VMx7ViUOh%2Fm8reHPXqvD3aJw4VpHoJ18ATgFLqLcbCiPu1Aio4dqT1Brz%2FycAcgc6A%2Bx%2Bp9Tl4AE7b%2BTnxjTlVydrMNHnr70GOqUBNfciNKlen8nQHZIIOcerqeEmj8QC4rn7Adp7WrwgY%2BKbkMx46USqjGp%2F7OtMbykPISj%2Bu4vHnHAQ1%2FovlzH0U%2B8H7YvZZ%2BjAFiqmHQXVX2zeegbmW%2B3HHNKD3nzIQbRTvFS2HtVt2xVluhg1In21YxculT%2FLZBTeBZ1s1HaVDlEUOqJHOm0iSBJxRjaTvL5MuaMFJdwXLoxqYTQpOJxLmLSdZG4e&X-Amz-Signature=cd5118bcee6255fd845d9d86cafbf72a561ac1813781101708069a0b2adf2807&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWPIDPY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqJ1P0U0CSLgTkJKr%2FOfQ9wbCqrkbL%2BEQUFp39SJHr1AiEAiRFpdkmDUVBX%2B1kxzceOMyUzoHAS5C%2Bgi4hkpUkbw7YqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY47nSi9gl2NE9zcircA%2Fgc4pIvqDdwSmmeb6dkLwiPie5y6U3qlMoa%2B5Bz15Min9OIAPT8czNAf5%2FPuTheo54K%2B7j2WsvC8erGROixHDt2CykXqv7IH2io5Pnk86Tu%2FE9dNfgq0F3Qua236n9cE27Avsj6%2FwLDhQ33KGMpmnIP7ueWSiNaozLln8yA7veeZBThN%2Fkb3qb1kdO4ikg8%2FZnPtKkEyhV7r6%2FP39U4q0OJtaIObLOZXOm1uMp8pQmDKM2hlUtiD2zajGfKNijojoKaTGc9%2Bhnbx5WhwJ0wCQXYWPLDDmIzEqp%2FrISDgj8hV4R0tYAfF3AVhAsDv6bxp1vE%2B4G5mB8keoQwNNM%2FlUSg7JM%2FmjH%2FK6gFZRBxV6ZK5pGjWnNCOTM256OhHWGX%2FQqP2iOFtIUdIjYjh5x%2FuwBRJN8qJmT2Jde8FkN4U1ER%2FsNfmnx5J8D9bAhiYi8MjKf1pFOzrW0llNYgvfrIM6WnoaU60Fp5HK48NSaICL8B1jm8ZDNpsKzzSVQjlMRgfHd50%2BeJ2NKziV2n1vVRn8Rinqwn9JbNbZ1VMx7ViUOh%2Fm8reHPXqvD3aJw4VpHoJ18ATgFLqLcbCiPu1Aio4dqT1Brz%2FycAcgc6A%2Bx%2Bp9Tl4AE7b%2BTnxjTlVydrMNHnr70GOqUBNfciNKlen8nQHZIIOcerqeEmj8QC4rn7Adp7WrwgY%2BKbkMx46USqjGp%2F7OtMbykPISj%2Bu4vHnHAQ1%2FovlzH0U%2B8H7YvZZ%2BjAFiqmHQXVX2zeegbmW%2B3HHNKD3nzIQbRTvFS2HtVt2xVluhg1In21YxculT%2FLZBTeBZ1s1HaVDlEUOqJHOm0iSBJxRjaTvL5MuaMFJdwXLoxqYTQpOJxLmLSdZG4e&X-Amz-Signature=d54324aa34dd0d1f434e56a5d176aefda3798940eb68e745f0c090c5b3aff14e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWPIDPY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqJ1P0U0CSLgTkJKr%2FOfQ9wbCqrkbL%2BEQUFp39SJHr1AiEAiRFpdkmDUVBX%2B1kxzceOMyUzoHAS5C%2Bgi4hkpUkbw7YqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY47nSi9gl2NE9zcircA%2Fgc4pIvqDdwSmmeb6dkLwiPie5y6U3qlMoa%2B5Bz15Min9OIAPT8czNAf5%2FPuTheo54K%2B7j2WsvC8erGROixHDt2CykXqv7IH2io5Pnk86Tu%2FE9dNfgq0F3Qua236n9cE27Avsj6%2FwLDhQ33KGMpmnIP7ueWSiNaozLln8yA7veeZBThN%2Fkb3qb1kdO4ikg8%2FZnPtKkEyhV7r6%2FP39U4q0OJtaIObLOZXOm1uMp8pQmDKM2hlUtiD2zajGfKNijojoKaTGc9%2Bhnbx5WhwJ0wCQXYWPLDDmIzEqp%2FrISDgj8hV4R0tYAfF3AVhAsDv6bxp1vE%2B4G5mB8keoQwNNM%2FlUSg7JM%2FmjH%2FK6gFZRBxV6ZK5pGjWnNCOTM256OhHWGX%2FQqP2iOFtIUdIjYjh5x%2FuwBRJN8qJmT2Jde8FkN4U1ER%2FsNfmnx5J8D9bAhiYi8MjKf1pFOzrW0llNYgvfrIM6WnoaU60Fp5HK48NSaICL8B1jm8ZDNpsKzzSVQjlMRgfHd50%2BeJ2NKziV2n1vVRn8Rinqwn9JbNbZ1VMx7ViUOh%2Fm8reHPXqvD3aJw4VpHoJ18ATgFLqLcbCiPu1Aio4dqT1Brz%2FycAcgc6A%2Bx%2Bp9Tl4AE7b%2BTnxjTlVydrMNHnr70GOqUBNfciNKlen8nQHZIIOcerqeEmj8QC4rn7Adp7WrwgY%2BKbkMx46USqjGp%2F7OtMbykPISj%2Bu4vHnHAQ1%2FovlzH0U%2B8H7YvZZ%2BjAFiqmHQXVX2zeegbmW%2B3HHNKD3nzIQbRTvFS2HtVt2xVluhg1In21YxculT%2FLZBTeBZ1s1HaVDlEUOqJHOm0iSBJxRjaTvL5MuaMFJdwXLoxqYTQpOJxLmLSdZG4e&X-Amz-Signature=abcbdf89d806219ab70588393c6400290506cc2fac69b5db4ded5f1f116fda90&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWPIDPY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqJ1P0U0CSLgTkJKr%2FOfQ9wbCqrkbL%2BEQUFp39SJHr1AiEAiRFpdkmDUVBX%2B1kxzceOMyUzoHAS5C%2Bgi4hkpUkbw7YqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY47nSi9gl2NE9zcircA%2Fgc4pIvqDdwSmmeb6dkLwiPie5y6U3qlMoa%2B5Bz15Min9OIAPT8czNAf5%2FPuTheo54K%2B7j2WsvC8erGROixHDt2CykXqv7IH2io5Pnk86Tu%2FE9dNfgq0F3Qua236n9cE27Avsj6%2FwLDhQ33KGMpmnIP7ueWSiNaozLln8yA7veeZBThN%2Fkb3qb1kdO4ikg8%2FZnPtKkEyhV7r6%2FP39U4q0OJtaIObLOZXOm1uMp8pQmDKM2hlUtiD2zajGfKNijojoKaTGc9%2Bhnbx5WhwJ0wCQXYWPLDDmIzEqp%2FrISDgj8hV4R0tYAfF3AVhAsDv6bxp1vE%2B4G5mB8keoQwNNM%2FlUSg7JM%2FmjH%2FK6gFZRBxV6ZK5pGjWnNCOTM256OhHWGX%2FQqP2iOFtIUdIjYjh5x%2FuwBRJN8qJmT2Jde8FkN4U1ER%2FsNfmnx5J8D9bAhiYi8MjKf1pFOzrW0llNYgvfrIM6WnoaU60Fp5HK48NSaICL8B1jm8ZDNpsKzzSVQjlMRgfHd50%2BeJ2NKziV2n1vVRn8Rinqwn9JbNbZ1VMx7ViUOh%2Fm8reHPXqvD3aJw4VpHoJ18ATgFLqLcbCiPu1Aio4dqT1Brz%2FycAcgc6A%2Bx%2Bp9Tl4AE7b%2BTnxjTlVydrMNHnr70GOqUBNfciNKlen8nQHZIIOcerqeEmj8QC4rn7Adp7WrwgY%2BKbkMx46USqjGp%2F7OtMbykPISj%2Bu4vHnHAQ1%2FovlzH0U%2B8H7YvZZ%2BjAFiqmHQXVX2zeegbmW%2B3HHNKD3nzIQbRTvFS2HtVt2xVluhg1In21YxculT%2FLZBTeBZ1s1HaVDlEUOqJHOm0iSBJxRjaTvL5MuaMFJdwXLoxqYTQpOJxLmLSdZG4e&X-Amz-Signature=3be049731ba2eca2fd32038b3b05b69ab28d716b23626aa8233d09f43e6b6cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWPIDPY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqJ1P0U0CSLgTkJKr%2FOfQ9wbCqrkbL%2BEQUFp39SJHr1AiEAiRFpdkmDUVBX%2B1kxzceOMyUzoHAS5C%2Bgi4hkpUkbw7YqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY47nSi9gl2NE9zcircA%2Fgc4pIvqDdwSmmeb6dkLwiPie5y6U3qlMoa%2B5Bz15Min9OIAPT8czNAf5%2FPuTheo54K%2B7j2WsvC8erGROixHDt2CykXqv7IH2io5Pnk86Tu%2FE9dNfgq0F3Qua236n9cE27Avsj6%2FwLDhQ33KGMpmnIP7ueWSiNaozLln8yA7veeZBThN%2Fkb3qb1kdO4ikg8%2FZnPtKkEyhV7r6%2FP39U4q0OJtaIObLOZXOm1uMp8pQmDKM2hlUtiD2zajGfKNijojoKaTGc9%2Bhnbx5WhwJ0wCQXYWPLDDmIzEqp%2FrISDgj8hV4R0tYAfF3AVhAsDv6bxp1vE%2B4G5mB8keoQwNNM%2FlUSg7JM%2FmjH%2FK6gFZRBxV6ZK5pGjWnNCOTM256OhHWGX%2FQqP2iOFtIUdIjYjh5x%2FuwBRJN8qJmT2Jde8FkN4U1ER%2FsNfmnx5J8D9bAhiYi8MjKf1pFOzrW0llNYgvfrIM6WnoaU60Fp5HK48NSaICL8B1jm8ZDNpsKzzSVQjlMRgfHd50%2BeJ2NKziV2n1vVRn8Rinqwn9JbNbZ1VMx7ViUOh%2Fm8reHPXqvD3aJw4VpHoJ18ATgFLqLcbCiPu1Aio4dqT1Brz%2FycAcgc6A%2Bx%2Bp9Tl4AE7b%2BTnxjTlVydrMNHnr70GOqUBNfciNKlen8nQHZIIOcerqeEmj8QC4rn7Adp7WrwgY%2BKbkMx46USqjGp%2F7OtMbykPISj%2Bu4vHnHAQ1%2FovlzH0U%2B8H7YvZZ%2BjAFiqmHQXVX2zeegbmW%2B3HHNKD3nzIQbRTvFS2HtVt2xVluhg1In21YxculT%2FLZBTeBZ1s1HaVDlEUOqJHOm0iSBJxRjaTvL5MuaMFJdwXLoxqYTQpOJxLmLSdZG4e&X-Amz-Signature=a2bdc69871764fd87fefe7d39a6e0e1d126652031e9596ee5aca1bceb75d1f31&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWPIDPY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqJ1P0U0CSLgTkJKr%2FOfQ9wbCqrkbL%2BEQUFp39SJHr1AiEAiRFpdkmDUVBX%2B1kxzceOMyUzoHAS5C%2Bgi4hkpUkbw7YqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY47nSi9gl2NE9zcircA%2Fgc4pIvqDdwSmmeb6dkLwiPie5y6U3qlMoa%2B5Bz15Min9OIAPT8czNAf5%2FPuTheo54K%2B7j2WsvC8erGROixHDt2CykXqv7IH2io5Pnk86Tu%2FE9dNfgq0F3Qua236n9cE27Avsj6%2FwLDhQ33KGMpmnIP7ueWSiNaozLln8yA7veeZBThN%2Fkb3qb1kdO4ikg8%2FZnPtKkEyhV7r6%2FP39U4q0OJtaIObLOZXOm1uMp8pQmDKM2hlUtiD2zajGfKNijojoKaTGc9%2Bhnbx5WhwJ0wCQXYWPLDDmIzEqp%2FrISDgj8hV4R0tYAfF3AVhAsDv6bxp1vE%2B4G5mB8keoQwNNM%2FlUSg7JM%2FmjH%2FK6gFZRBxV6ZK5pGjWnNCOTM256OhHWGX%2FQqP2iOFtIUdIjYjh5x%2FuwBRJN8qJmT2Jde8FkN4U1ER%2FsNfmnx5J8D9bAhiYi8MjKf1pFOzrW0llNYgvfrIM6WnoaU60Fp5HK48NSaICL8B1jm8ZDNpsKzzSVQjlMRgfHd50%2BeJ2NKziV2n1vVRn8Rinqwn9JbNbZ1VMx7ViUOh%2Fm8reHPXqvD3aJw4VpHoJ18ATgFLqLcbCiPu1Aio4dqT1Brz%2FycAcgc6A%2Bx%2Bp9Tl4AE7b%2BTnxjTlVydrMNHnr70GOqUBNfciNKlen8nQHZIIOcerqeEmj8QC4rn7Adp7WrwgY%2BKbkMx46USqjGp%2F7OtMbykPISj%2Bu4vHnHAQ1%2FovlzH0U%2B8H7YvZZ%2BjAFiqmHQXVX2zeegbmW%2B3HHNKD3nzIQbRTvFS2HtVt2xVluhg1In21YxculT%2FLZBTeBZ1s1HaVDlEUOqJHOm0iSBJxRjaTvL5MuaMFJdwXLoxqYTQpOJxLmLSdZG4e&X-Amz-Signature=c084933ff120ef0415cd55912abf7bb030e9522ac310db57421b8f80c45b0e62&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
