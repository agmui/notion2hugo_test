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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIMOFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCID47DHBjdraQEaMs8WiW6wR%2Be9CKBMPLWpQTqpGXr3XaAiEA34QFkygd6j4weVOEl1BXfiPVilbCpTSsjDf%2FATo4B6oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBVZk8TTk5tEw9shzircA%2B5%2BJ59PDQv8kEMG3u6tItTmNmIYHc%2BUsQT6JrWNXXoFO5Q4YqYK%2BgM1hq9VBHDRvu2kW2WPp9G75o8qSj5vy4Oc2p8nQPboFvERPPBSVIcawPVIGudloVLw5Jbkq7pnn7Z4UZfTeu4f8bgmavB4xIcDyg9KvCi0V6LbiL%2Fk%2FwSxNo7GcPPR9y%2FWp6LEZpC2tgsDa8yVcvUR2unLZtnDQRkajs1G58WFiROj%2BIrMPtb8hwZHgNKFUYvPLB0%2FME%2FAzOqtFTdvYwzj7WhwiaPcu0iNC6Sk0ZrBesncGeGH6YUQKm60ddBpSLl5ISMw%2FPCSgMAhdMqZS%2FjQGGlH6o4Nlm%2F9pSOWrhI1b5%2FNhn9q%2BFWliUGZvzzdOl%2FPMp8tJ6Lp%2BHvYcujvDuRl2KksAUkHjry7iwPLcgbNkIUE7k%2B0zQOUMPADmyXfTbS2%2BU3zfYN6YulR3NzWD8GG4vDYvgcpLbQF27j12GDdR732B0tjqlfP373IkwPMIpLoD05XQNOS68jk8X54k0va8DPpmDHcZXNCw7Nk3DfJjn2k0BPuDKv7tiJlYvT9woHSE%2F4R3MpPJdHLlT0yNynwWmSwPMs6ni5vtGm5LBukBjv1UvRlyptYaRDdOFa9vEQFaFGOMNuw574GOqUBZV%2F1vaHP1pO8f5yudO7g%2FQ%2FFrANnuAlMiFSpb36mgkLCYd3%2Fu5iWXVOno%2B6Svqe61nrjdR2ylEl8R80MuB%2FnMBLbExxQuuKLhXswFVu9G7T8WV2g%2B8NDlrRigRCDOq%2FkpE3aTASGal%2BEV3TUZAFXPWcQFhMzbPgQy9f5KQLAj50fd5cGgjkJQTGY6aVD1L8wRReiY9c4VYqCbUVGgm1eOzE17Ed%2F&X-Amz-Signature=abf2685c3400acd6d0f33c016d5586cdd7b9af8ce79a46899fe4b332ee51a0f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIMOFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCID47DHBjdraQEaMs8WiW6wR%2Be9CKBMPLWpQTqpGXr3XaAiEA34QFkygd6j4weVOEl1BXfiPVilbCpTSsjDf%2FATo4B6oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBVZk8TTk5tEw9shzircA%2B5%2BJ59PDQv8kEMG3u6tItTmNmIYHc%2BUsQT6JrWNXXoFO5Q4YqYK%2BgM1hq9VBHDRvu2kW2WPp9G75o8qSj5vy4Oc2p8nQPboFvERPPBSVIcawPVIGudloVLw5Jbkq7pnn7Z4UZfTeu4f8bgmavB4xIcDyg9KvCi0V6LbiL%2Fk%2FwSxNo7GcPPR9y%2FWp6LEZpC2tgsDa8yVcvUR2unLZtnDQRkajs1G58WFiROj%2BIrMPtb8hwZHgNKFUYvPLB0%2FME%2FAzOqtFTdvYwzj7WhwiaPcu0iNC6Sk0ZrBesncGeGH6YUQKm60ddBpSLl5ISMw%2FPCSgMAhdMqZS%2FjQGGlH6o4Nlm%2F9pSOWrhI1b5%2FNhn9q%2BFWliUGZvzzdOl%2FPMp8tJ6Lp%2BHvYcujvDuRl2KksAUkHjry7iwPLcgbNkIUE7k%2B0zQOUMPADmyXfTbS2%2BU3zfYN6YulR3NzWD8GG4vDYvgcpLbQF27j12GDdR732B0tjqlfP373IkwPMIpLoD05XQNOS68jk8X54k0va8DPpmDHcZXNCw7Nk3DfJjn2k0BPuDKv7tiJlYvT9woHSE%2F4R3MpPJdHLlT0yNynwWmSwPMs6ni5vtGm5LBukBjv1UvRlyptYaRDdOFa9vEQFaFGOMNuw574GOqUBZV%2F1vaHP1pO8f5yudO7g%2FQ%2FFrANnuAlMiFSpb36mgkLCYd3%2Fu5iWXVOno%2B6Svqe61nrjdR2ylEl8R80MuB%2FnMBLbExxQuuKLhXswFVu9G7T8WV2g%2B8NDlrRigRCDOq%2FkpE3aTASGal%2BEV3TUZAFXPWcQFhMzbPgQy9f5KQLAj50fd5cGgjkJQTGY6aVD1L8wRReiY9c4VYqCbUVGgm1eOzE17Ed%2F&X-Amz-Signature=3a8ef440416d34d3584b557441b36037c416e78a73dc0dce6c926a7b17269987&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIMOFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCID47DHBjdraQEaMs8WiW6wR%2Be9CKBMPLWpQTqpGXr3XaAiEA34QFkygd6j4weVOEl1BXfiPVilbCpTSsjDf%2FATo4B6oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBVZk8TTk5tEw9shzircA%2B5%2BJ59PDQv8kEMG3u6tItTmNmIYHc%2BUsQT6JrWNXXoFO5Q4YqYK%2BgM1hq9VBHDRvu2kW2WPp9G75o8qSj5vy4Oc2p8nQPboFvERPPBSVIcawPVIGudloVLw5Jbkq7pnn7Z4UZfTeu4f8bgmavB4xIcDyg9KvCi0V6LbiL%2Fk%2FwSxNo7GcPPR9y%2FWp6LEZpC2tgsDa8yVcvUR2unLZtnDQRkajs1G58WFiROj%2BIrMPtb8hwZHgNKFUYvPLB0%2FME%2FAzOqtFTdvYwzj7WhwiaPcu0iNC6Sk0ZrBesncGeGH6YUQKm60ddBpSLl5ISMw%2FPCSgMAhdMqZS%2FjQGGlH6o4Nlm%2F9pSOWrhI1b5%2FNhn9q%2BFWliUGZvzzdOl%2FPMp8tJ6Lp%2BHvYcujvDuRl2KksAUkHjry7iwPLcgbNkIUE7k%2B0zQOUMPADmyXfTbS2%2BU3zfYN6YulR3NzWD8GG4vDYvgcpLbQF27j12GDdR732B0tjqlfP373IkwPMIpLoD05XQNOS68jk8X54k0va8DPpmDHcZXNCw7Nk3DfJjn2k0BPuDKv7tiJlYvT9woHSE%2F4R3MpPJdHLlT0yNynwWmSwPMs6ni5vtGm5LBukBjv1UvRlyptYaRDdOFa9vEQFaFGOMNuw574GOqUBZV%2F1vaHP1pO8f5yudO7g%2FQ%2FFrANnuAlMiFSpb36mgkLCYd3%2Fu5iWXVOno%2B6Svqe61nrjdR2ylEl8R80MuB%2FnMBLbExxQuuKLhXswFVu9G7T8WV2g%2B8NDlrRigRCDOq%2FkpE3aTASGal%2BEV3TUZAFXPWcQFhMzbPgQy9f5KQLAj50fd5cGgjkJQTGY6aVD1L8wRReiY9c4VYqCbUVGgm1eOzE17Ed%2F&X-Amz-Signature=1a694d5c9dc7b327766c2c4d2a93245f4c6053d83633cd65a70c1be8c5895fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIMOFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCID47DHBjdraQEaMs8WiW6wR%2Be9CKBMPLWpQTqpGXr3XaAiEA34QFkygd6j4weVOEl1BXfiPVilbCpTSsjDf%2FATo4B6oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBVZk8TTk5tEw9shzircA%2B5%2BJ59PDQv8kEMG3u6tItTmNmIYHc%2BUsQT6JrWNXXoFO5Q4YqYK%2BgM1hq9VBHDRvu2kW2WPp9G75o8qSj5vy4Oc2p8nQPboFvERPPBSVIcawPVIGudloVLw5Jbkq7pnn7Z4UZfTeu4f8bgmavB4xIcDyg9KvCi0V6LbiL%2Fk%2FwSxNo7GcPPR9y%2FWp6LEZpC2tgsDa8yVcvUR2unLZtnDQRkajs1G58WFiROj%2BIrMPtb8hwZHgNKFUYvPLB0%2FME%2FAzOqtFTdvYwzj7WhwiaPcu0iNC6Sk0ZrBesncGeGH6YUQKm60ddBpSLl5ISMw%2FPCSgMAhdMqZS%2FjQGGlH6o4Nlm%2F9pSOWrhI1b5%2FNhn9q%2BFWliUGZvzzdOl%2FPMp8tJ6Lp%2BHvYcujvDuRl2KksAUkHjry7iwPLcgbNkIUE7k%2B0zQOUMPADmyXfTbS2%2BU3zfYN6YulR3NzWD8GG4vDYvgcpLbQF27j12GDdR732B0tjqlfP373IkwPMIpLoD05XQNOS68jk8X54k0va8DPpmDHcZXNCw7Nk3DfJjn2k0BPuDKv7tiJlYvT9woHSE%2F4R3MpPJdHLlT0yNynwWmSwPMs6ni5vtGm5LBukBjv1UvRlyptYaRDdOFa9vEQFaFGOMNuw574GOqUBZV%2F1vaHP1pO8f5yudO7g%2FQ%2FFrANnuAlMiFSpb36mgkLCYd3%2Fu5iWXVOno%2B6Svqe61nrjdR2ylEl8R80MuB%2FnMBLbExxQuuKLhXswFVu9G7T8WV2g%2B8NDlrRigRCDOq%2FkpE3aTASGal%2BEV3TUZAFXPWcQFhMzbPgQy9f5KQLAj50fd5cGgjkJQTGY6aVD1L8wRReiY9c4VYqCbUVGgm1eOzE17Ed%2F&X-Amz-Signature=cf87267bab15a7eb94e7f868bc913382293e9b74e97776b2d1ee2a24febed304&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIMOFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCID47DHBjdraQEaMs8WiW6wR%2Be9CKBMPLWpQTqpGXr3XaAiEA34QFkygd6j4weVOEl1BXfiPVilbCpTSsjDf%2FATo4B6oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBVZk8TTk5tEw9shzircA%2B5%2BJ59PDQv8kEMG3u6tItTmNmIYHc%2BUsQT6JrWNXXoFO5Q4YqYK%2BgM1hq9VBHDRvu2kW2WPp9G75o8qSj5vy4Oc2p8nQPboFvERPPBSVIcawPVIGudloVLw5Jbkq7pnn7Z4UZfTeu4f8bgmavB4xIcDyg9KvCi0V6LbiL%2Fk%2FwSxNo7GcPPR9y%2FWp6LEZpC2tgsDa8yVcvUR2unLZtnDQRkajs1G58WFiROj%2BIrMPtb8hwZHgNKFUYvPLB0%2FME%2FAzOqtFTdvYwzj7WhwiaPcu0iNC6Sk0ZrBesncGeGH6YUQKm60ddBpSLl5ISMw%2FPCSgMAhdMqZS%2FjQGGlH6o4Nlm%2F9pSOWrhI1b5%2FNhn9q%2BFWliUGZvzzdOl%2FPMp8tJ6Lp%2BHvYcujvDuRl2KksAUkHjry7iwPLcgbNkIUE7k%2B0zQOUMPADmyXfTbS2%2BU3zfYN6YulR3NzWD8GG4vDYvgcpLbQF27j12GDdR732B0tjqlfP373IkwPMIpLoD05XQNOS68jk8X54k0va8DPpmDHcZXNCw7Nk3DfJjn2k0BPuDKv7tiJlYvT9woHSE%2F4R3MpPJdHLlT0yNynwWmSwPMs6ni5vtGm5LBukBjv1UvRlyptYaRDdOFa9vEQFaFGOMNuw574GOqUBZV%2F1vaHP1pO8f5yudO7g%2FQ%2FFrANnuAlMiFSpb36mgkLCYd3%2Fu5iWXVOno%2B6Svqe61nrjdR2ylEl8R80MuB%2FnMBLbExxQuuKLhXswFVu9G7T8WV2g%2B8NDlrRigRCDOq%2FkpE3aTASGal%2BEV3TUZAFXPWcQFhMzbPgQy9f5KQLAj50fd5cGgjkJQTGY6aVD1L8wRReiY9c4VYqCbUVGgm1eOzE17Ed%2F&X-Amz-Signature=8597d2dc585198c42d45745b4335622bf9aa08ddda97c7def70c429ac8c5f3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIMOFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCID47DHBjdraQEaMs8WiW6wR%2Be9CKBMPLWpQTqpGXr3XaAiEA34QFkygd6j4weVOEl1BXfiPVilbCpTSsjDf%2FATo4B6oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBVZk8TTk5tEw9shzircA%2B5%2BJ59PDQv8kEMG3u6tItTmNmIYHc%2BUsQT6JrWNXXoFO5Q4YqYK%2BgM1hq9VBHDRvu2kW2WPp9G75o8qSj5vy4Oc2p8nQPboFvERPPBSVIcawPVIGudloVLw5Jbkq7pnn7Z4UZfTeu4f8bgmavB4xIcDyg9KvCi0V6LbiL%2Fk%2FwSxNo7GcPPR9y%2FWp6LEZpC2tgsDa8yVcvUR2unLZtnDQRkajs1G58WFiROj%2BIrMPtb8hwZHgNKFUYvPLB0%2FME%2FAzOqtFTdvYwzj7WhwiaPcu0iNC6Sk0ZrBesncGeGH6YUQKm60ddBpSLl5ISMw%2FPCSgMAhdMqZS%2FjQGGlH6o4Nlm%2F9pSOWrhI1b5%2FNhn9q%2BFWliUGZvzzdOl%2FPMp8tJ6Lp%2BHvYcujvDuRl2KksAUkHjry7iwPLcgbNkIUE7k%2B0zQOUMPADmyXfTbS2%2BU3zfYN6YulR3NzWD8GG4vDYvgcpLbQF27j12GDdR732B0tjqlfP373IkwPMIpLoD05XQNOS68jk8X54k0va8DPpmDHcZXNCw7Nk3DfJjn2k0BPuDKv7tiJlYvT9woHSE%2F4R3MpPJdHLlT0yNynwWmSwPMs6ni5vtGm5LBukBjv1UvRlyptYaRDdOFa9vEQFaFGOMNuw574GOqUBZV%2F1vaHP1pO8f5yudO7g%2FQ%2FFrANnuAlMiFSpb36mgkLCYd3%2Fu5iWXVOno%2B6Svqe61nrjdR2ylEl8R80MuB%2FnMBLbExxQuuKLhXswFVu9G7T8WV2g%2B8NDlrRigRCDOq%2FkpE3aTASGal%2BEV3TUZAFXPWcQFhMzbPgQy9f5KQLAj50fd5cGgjkJQTGY6aVD1L8wRReiY9c4VYqCbUVGgm1eOzE17Ed%2F&X-Amz-Signature=1f0c8999db99d90ff44a69460edb18700a8a86a9fae7816e64aeaa95c914d4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIMOFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCID47DHBjdraQEaMs8WiW6wR%2Be9CKBMPLWpQTqpGXr3XaAiEA34QFkygd6j4weVOEl1BXfiPVilbCpTSsjDf%2FATo4B6oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBVZk8TTk5tEw9shzircA%2B5%2BJ59PDQv8kEMG3u6tItTmNmIYHc%2BUsQT6JrWNXXoFO5Q4YqYK%2BgM1hq9VBHDRvu2kW2WPp9G75o8qSj5vy4Oc2p8nQPboFvERPPBSVIcawPVIGudloVLw5Jbkq7pnn7Z4UZfTeu4f8bgmavB4xIcDyg9KvCi0V6LbiL%2Fk%2FwSxNo7GcPPR9y%2FWp6LEZpC2tgsDa8yVcvUR2unLZtnDQRkajs1G58WFiROj%2BIrMPtb8hwZHgNKFUYvPLB0%2FME%2FAzOqtFTdvYwzj7WhwiaPcu0iNC6Sk0ZrBesncGeGH6YUQKm60ddBpSLl5ISMw%2FPCSgMAhdMqZS%2FjQGGlH6o4Nlm%2F9pSOWrhI1b5%2FNhn9q%2BFWliUGZvzzdOl%2FPMp8tJ6Lp%2BHvYcujvDuRl2KksAUkHjry7iwPLcgbNkIUE7k%2B0zQOUMPADmyXfTbS2%2BU3zfYN6YulR3NzWD8GG4vDYvgcpLbQF27j12GDdR732B0tjqlfP373IkwPMIpLoD05XQNOS68jk8X54k0va8DPpmDHcZXNCw7Nk3DfJjn2k0BPuDKv7tiJlYvT9woHSE%2F4R3MpPJdHLlT0yNynwWmSwPMs6ni5vtGm5LBukBjv1UvRlyptYaRDdOFa9vEQFaFGOMNuw574GOqUBZV%2F1vaHP1pO8f5yudO7g%2FQ%2FFrANnuAlMiFSpb36mgkLCYd3%2Fu5iWXVOno%2B6Svqe61nrjdR2ylEl8R80MuB%2FnMBLbExxQuuKLhXswFVu9G7T8WV2g%2B8NDlrRigRCDOq%2FkpE3aTASGal%2BEV3TUZAFXPWcQFhMzbPgQy9f5KQLAj50fd5cGgjkJQTGY6aVD1L8wRReiY9c4VYqCbUVGgm1eOzE17Ed%2F&X-Amz-Signature=321fc5f4d9f253d533543cde72dd29a4585502bbcff997e68a69e81b77727c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
