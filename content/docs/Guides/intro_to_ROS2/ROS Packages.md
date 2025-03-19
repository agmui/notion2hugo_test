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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5FWSPZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCEuHjqwlQa%2F5bk7Tu%2F2i8Rz2n1y4kiRCxJkUlF22hqAgIgZm9BH%2F7v8bC%2FvEarj9GldSdytNVwX0RD6MeuCqhkHggq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGIfA8eNvwJF%2BQM59ircAxzpV2cjLbM1%2FRknEmZR2UEuHzTfvnysCdCODkuymQBTBnCcvSWqOWB%2F0AcPDvebXKB53wRtu7hg4CQkvUvSPh86LJzp6nq4hPxIni%2BUgopIHBGPQ1E3VVyX1ZjlHxi4prB%2BKrBkdXQR%2BVPvYlQUoSYO2k5U8nnkkwIj%2BpkYPw%2FgcLjZzCtKzfrVC61NrTY0lXHCqPmPTC%2BZO%2BxgxesLKAzGzA%2FZZLfsiLgNrb8L74s0t4%2BSpjhQfIIeECnjgnR2Mn6HeTCbMWJXxoXxPoa31wzDcxf1Q0%2FQJZn391YCc0fmCn7LdsiUuj5%2FEXUG6NReKcbydD4K73lgYDuzAgtgNv04G2%2BmXoUoicK1Jix7dh7chPlJYRwqtzE7i8IhGSy7yGtzTBK7VWM2SZbx2OSKoW3ZvvyJ%2BNUPAVe7cjyRFjhowb7O1piZULLC5xXehrkasbbr%2BnqYkijYvlkC0zLBo%2BujKLaDt%2BN6B6QUerl9hW5m6y8SmY5JaPN1URqsr9LztMhFRsxjLN%2Bf9iECua0CQ%2FUjQeXdrAOT%2F4xz43qxewWoDoR4KWuwGK4qC0mu9d6JjCGsEzkS647w48npPm8ohy%2FEUrlyE0dpYsb3I69YihvRthv6RJ653m1%2Frmf2MPuB6r4GOqUB1DCpCpTE9WNF8GxPpEhGhInDqEe2WCcasDuQozGPq%2BsFMGJHte68%2FzkM0Ntv2fnLIn6i5qgvukK3Dg6ZMHpx5cBMxDRSQwVYJD%2Fsxxe%2Btu%2BCfhb96lXZivzQpJoB7ZzsFgTuompB%2FvDDPtMimdm0lnXQVU0n7NHwOsVlM0c5rSELBPL%2B8qW1Zg82%2Farzrfl89fp86X8GXPL%2FzWWavc8lREVm0D6c&X-Amz-Signature=4cb6d93a3dbd570be44fd243d0e2ac815a4bb564aab2f00f284cb68f5f59a713&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5FWSPZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCEuHjqwlQa%2F5bk7Tu%2F2i8Rz2n1y4kiRCxJkUlF22hqAgIgZm9BH%2F7v8bC%2FvEarj9GldSdytNVwX0RD6MeuCqhkHggq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGIfA8eNvwJF%2BQM59ircAxzpV2cjLbM1%2FRknEmZR2UEuHzTfvnysCdCODkuymQBTBnCcvSWqOWB%2F0AcPDvebXKB53wRtu7hg4CQkvUvSPh86LJzp6nq4hPxIni%2BUgopIHBGPQ1E3VVyX1ZjlHxi4prB%2BKrBkdXQR%2BVPvYlQUoSYO2k5U8nnkkwIj%2BpkYPw%2FgcLjZzCtKzfrVC61NrTY0lXHCqPmPTC%2BZO%2BxgxesLKAzGzA%2FZZLfsiLgNrb8L74s0t4%2BSpjhQfIIeECnjgnR2Mn6HeTCbMWJXxoXxPoa31wzDcxf1Q0%2FQJZn391YCc0fmCn7LdsiUuj5%2FEXUG6NReKcbydD4K73lgYDuzAgtgNv04G2%2BmXoUoicK1Jix7dh7chPlJYRwqtzE7i8IhGSy7yGtzTBK7VWM2SZbx2OSKoW3ZvvyJ%2BNUPAVe7cjyRFjhowb7O1piZULLC5xXehrkasbbr%2BnqYkijYvlkC0zLBo%2BujKLaDt%2BN6B6QUerl9hW5m6y8SmY5JaPN1URqsr9LztMhFRsxjLN%2Bf9iECua0CQ%2FUjQeXdrAOT%2F4xz43qxewWoDoR4KWuwGK4qC0mu9d6JjCGsEzkS647w48npPm8ohy%2FEUrlyE0dpYsb3I69YihvRthv6RJ653m1%2Frmf2MPuB6r4GOqUB1DCpCpTE9WNF8GxPpEhGhInDqEe2WCcasDuQozGPq%2BsFMGJHte68%2FzkM0Ntv2fnLIn6i5qgvukK3Dg6ZMHpx5cBMxDRSQwVYJD%2Fsxxe%2Btu%2BCfhb96lXZivzQpJoB7ZzsFgTuompB%2FvDDPtMimdm0lnXQVU0n7NHwOsVlM0c5rSELBPL%2B8qW1Zg82%2Farzrfl89fp86X8GXPL%2FzWWavc8lREVm0D6c&X-Amz-Signature=fef17d5a19fc5e585a7db114da9604b443fea80e9216f5d6b72eb7718d434ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5FWSPZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCEuHjqwlQa%2F5bk7Tu%2F2i8Rz2n1y4kiRCxJkUlF22hqAgIgZm9BH%2F7v8bC%2FvEarj9GldSdytNVwX0RD6MeuCqhkHggq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGIfA8eNvwJF%2BQM59ircAxzpV2cjLbM1%2FRknEmZR2UEuHzTfvnysCdCODkuymQBTBnCcvSWqOWB%2F0AcPDvebXKB53wRtu7hg4CQkvUvSPh86LJzp6nq4hPxIni%2BUgopIHBGPQ1E3VVyX1ZjlHxi4prB%2BKrBkdXQR%2BVPvYlQUoSYO2k5U8nnkkwIj%2BpkYPw%2FgcLjZzCtKzfrVC61NrTY0lXHCqPmPTC%2BZO%2BxgxesLKAzGzA%2FZZLfsiLgNrb8L74s0t4%2BSpjhQfIIeECnjgnR2Mn6HeTCbMWJXxoXxPoa31wzDcxf1Q0%2FQJZn391YCc0fmCn7LdsiUuj5%2FEXUG6NReKcbydD4K73lgYDuzAgtgNv04G2%2BmXoUoicK1Jix7dh7chPlJYRwqtzE7i8IhGSy7yGtzTBK7VWM2SZbx2OSKoW3ZvvyJ%2BNUPAVe7cjyRFjhowb7O1piZULLC5xXehrkasbbr%2BnqYkijYvlkC0zLBo%2BujKLaDt%2BN6B6QUerl9hW5m6y8SmY5JaPN1URqsr9LztMhFRsxjLN%2Bf9iECua0CQ%2FUjQeXdrAOT%2F4xz43qxewWoDoR4KWuwGK4qC0mu9d6JjCGsEzkS647w48npPm8ohy%2FEUrlyE0dpYsb3I69YihvRthv6RJ653m1%2Frmf2MPuB6r4GOqUB1DCpCpTE9WNF8GxPpEhGhInDqEe2WCcasDuQozGPq%2BsFMGJHte68%2FzkM0Ntv2fnLIn6i5qgvukK3Dg6ZMHpx5cBMxDRSQwVYJD%2Fsxxe%2Btu%2BCfhb96lXZivzQpJoB7ZzsFgTuompB%2FvDDPtMimdm0lnXQVU0n7NHwOsVlM0c5rSELBPL%2B8qW1Zg82%2Farzrfl89fp86X8GXPL%2FzWWavc8lREVm0D6c&X-Amz-Signature=d2c729e59b419631cb0154a3369ea17f64f792c780e40bc8c8393a9a27a16ccb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5FWSPZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCEuHjqwlQa%2F5bk7Tu%2F2i8Rz2n1y4kiRCxJkUlF22hqAgIgZm9BH%2F7v8bC%2FvEarj9GldSdytNVwX0RD6MeuCqhkHggq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGIfA8eNvwJF%2BQM59ircAxzpV2cjLbM1%2FRknEmZR2UEuHzTfvnysCdCODkuymQBTBnCcvSWqOWB%2F0AcPDvebXKB53wRtu7hg4CQkvUvSPh86LJzp6nq4hPxIni%2BUgopIHBGPQ1E3VVyX1ZjlHxi4prB%2BKrBkdXQR%2BVPvYlQUoSYO2k5U8nnkkwIj%2BpkYPw%2FgcLjZzCtKzfrVC61NrTY0lXHCqPmPTC%2BZO%2BxgxesLKAzGzA%2FZZLfsiLgNrb8L74s0t4%2BSpjhQfIIeECnjgnR2Mn6HeTCbMWJXxoXxPoa31wzDcxf1Q0%2FQJZn391YCc0fmCn7LdsiUuj5%2FEXUG6NReKcbydD4K73lgYDuzAgtgNv04G2%2BmXoUoicK1Jix7dh7chPlJYRwqtzE7i8IhGSy7yGtzTBK7VWM2SZbx2OSKoW3ZvvyJ%2BNUPAVe7cjyRFjhowb7O1piZULLC5xXehrkasbbr%2BnqYkijYvlkC0zLBo%2BujKLaDt%2BN6B6QUerl9hW5m6y8SmY5JaPN1URqsr9LztMhFRsxjLN%2Bf9iECua0CQ%2FUjQeXdrAOT%2F4xz43qxewWoDoR4KWuwGK4qC0mu9d6JjCGsEzkS647w48npPm8ohy%2FEUrlyE0dpYsb3I69YihvRthv6RJ653m1%2Frmf2MPuB6r4GOqUB1DCpCpTE9WNF8GxPpEhGhInDqEe2WCcasDuQozGPq%2BsFMGJHte68%2FzkM0Ntv2fnLIn6i5qgvukK3Dg6ZMHpx5cBMxDRSQwVYJD%2Fsxxe%2Btu%2BCfhb96lXZivzQpJoB7ZzsFgTuompB%2FvDDPtMimdm0lnXQVU0n7NHwOsVlM0c5rSELBPL%2B8qW1Zg82%2Farzrfl89fp86X8GXPL%2FzWWavc8lREVm0D6c&X-Amz-Signature=af42e08fc9e308e7e58a475d15976c2c10a3604aa88857d44c057c888b1fc5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5FWSPZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCEuHjqwlQa%2F5bk7Tu%2F2i8Rz2n1y4kiRCxJkUlF22hqAgIgZm9BH%2F7v8bC%2FvEarj9GldSdytNVwX0RD6MeuCqhkHggq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGIfA8eNvwJF%2BQM59ircAxzpV2cjLbM1%2FRknEmZR2UEuHzTfvnysCdCODkuymQBTBnCcvSWqOWB%2F0AcPDvebXKB53wRtu7hg4CQkvUvSPh86LJzp6nq4hPxIni%2BUgopIHBGPQ1E3VVyX1ZjlHxi4prB%2BKrBkdXQR%2BVPvYlQUoSYO2k5U8nnkkwIj%2BpkYPw%2FgcLjZzCtKzfrVC61NrTY0lXHCqPmPTC%2BZO%2BxgxesLKAzGzA%2FZZLfsiLgNrb8L74s0t4%2BSpjhQfIIeECnjgnR2Mn6HeTCbMWJXxoXxPoa31wzDcxf1Q0%2FQJZn391YCc0fmCn7LdsiUuj5%2FEXUG6NReKcbydD4K73lgYDuzAgtgNv04G2%2BmXoUoicK1Jix7dh7chPlJYRwqtzE7i8IhGSy7yGtzTBK7VWM2SZbx2OSKoW3ZvvyJ%2BNUPAVe7cjyRFjhowb7O1piZULLC5xXehrkasbbr%2BnqYkijYvlkC0zLBo%2BujKLaDt%2BN6B6QUerl9hW5m6y8SmY5JaPN1URqsr9LztMhFRsxjLN%2Bf9iECua0CQ%2FUjQeXdrAOT%2F4xz43qxewWoDoR4KWuwGK4qC0mu9d6JjCGsEzkS647w48npPm8ohy%2FEUrlyE0dpYsb3I69YihvRthv6RJ653m1%2Frmf2MPuB6r4GOqUB1DCpCpTE9WNF8GxPpEhGhInDqEe2WCcasDuQozGPq%2BsFMGJHte68%2FzkM0Ntv2fnLIn6i5qgvukK3Dg6ZMHpx5cBMxDRSQwVYJD%2Fsxxe%2Btu%2BCfhb96lXZivzQpJoB7ZzsFgTuompB%2FvDDPtMimdm0lnXQVU0n7NHwOsVlM0c5rSELBPL%2B8qW1Zg82%2Farzrfl89fp86X8GXPL%2FzWWavc8lREVm0D6c&X-Amz-Signature=d4bec68f56c3ea886f440422f2f0c81728f531af26c6fb88ee111254fd3ba534&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5FWSPZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCEuHjqwlQa%2F5bk7Tu%2F2i8Rz2n1y4kiRCxJkUlF22hqAgIgZm9BH%2F7v8bC%2FvEarj9GldSdytNVwX0RD6MeuCqhkHggq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGIfA8eNvwJF%2BQM59ircAxzpV2cjLbM1%2FRknEmZR2UEuHzTfvnysCdCODkuymQBTBnCcvSWqOWB%2F0AcPDvebXKB53wRtu7hg4CQkvUvSPh86LJzp6nq4hPxIni%2BUgopIHBGPQ1E3VVyX1ZjlHxi4prB%2BKrBkdXQR%2BVPvYlQUoSYO2k5U8nnkkwIj%2BpkYPw%2FgcLjZzCtKzfrVC61NrTY0lXHCqPmPTC%2BZO%2BxgxesLKAzGzA%2FZZLfsiLgNrb8L74s0t4%2BSpjhQfIIeECnjgnR2Mn6HeTCbMWJXxoXxPoa31wzDcxf1Q0%2FQJZn391YCc0fmCn7LdsiUuj5%2FEXUG6NReKcbydD4K73lgYDuzAgtgNv04G2%2BmXoUoicK1Jix7dh7chPlJYRwqtzE7i8IhGSy7yGtzTBK7VWM2SZbx2OSKoW3ZvvyJ%2BNUPAVe7cjyRFjhowb7O1piZULLC5xXehrkasbbr%2BnqYkijYvlkC0zLBo%2BujKLaDt%2BN6B6QUerl9hW5m6y8SmY5JaPN1URqsr9LztMhFRsxjLN%2Bf9iECua0CQ%2FUjQeXdrAOT%2F4xz43qxewWoDoR4KWuwGK4qC0mu9d6JjCGsEzkS647w48npPm8ohy%2FEUrlyE0dpYsb3I69YihvRthv6RJ653m1%2Frmf2MPuB6r4GOqUB1DCpCpTE9WNF8GxPpEhGhInDqEe2WCcasDuQozGPq%2BsFMGJHte68%2FzkM0Ntv2fnLIn6i5qgvukK3Dg6ZMHpx5cBMxDRSQwVYJD%2Fsxxe%2Btu%2BCfhb96lXZivzQpJoB7ZzsFgTuompB%2FvDDPtMimdm0lnXQVU0n7NHwOsVlM0c5rSELBPL%2B8qW1Zg82%2Farzrfl89fp86X8GXPL%2FzWWavc8lREVm0D6c&X-Amz-Signature=77a8bc724777575bf0393fe31f182fc7350e65aed77078af498ab101f98b9b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5FWSPZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCEuHjqwlQa%2F5bk7Tu%2F2i8Rz2n1y4kiRCxJkUlF22hqAgIgZm9BH%2F7v8bC%2FvEarj9GldSdytNVwX0RD6MeuCqhkHggq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGIfA8eNvwJF%2BQM59ircAxzpV2cjLbM1%2FRknEmZR2UEuHzTfvnysCdCODkuymQBTBnCcvSWqOWB%2F0AcPDvebXKB53wRtu7hg4CQkvUvSPh86LJzp6nq4hPxIni%2BUgopIHBGPQ1E3VVyX1ZjlHxi4prB%2BKrBkdXQR%2BVPvYlQUoSYO2k5U8nnkkwIj%2BpkYPw%2FgcLjZzCtKzfrVC61NrTY0lXHCqPmPTC%2BZO%2BxgxesLKAzGzA%2FZZLfsiLgNrb8L74s0t4%2BSpjhQfIIeECnjgnR2Mn6HeTCbMWJXxoXxPoa31wzDcxf1Q0%2FQJZn391YCc0fmCn7LdsiUuj5%2FEXUG6NReKcbydD4K73lgYDuzAgtgNv04G2%2BmXoUoicK1Jix7dh7chPlJYRwqtzE7i8IhGSy7yGtzTBK7VWM2SZbx2OSKoW3ZvvyJ%2BNUPAVe7cjyRFjhowb7O1piZULLC5xXehrkasbbr%2BnqYkijYvlkC0zLBo%2BujKLaDt%2BN6B6QUerl9hW5m6y8SmY5JaPN1URqsr9LztMhFRsxjLN%2Bf9iECua0CQ%2FUjQeXdrAOT%2F4xz43qxewWoDoR4KWuwGK4qC0mu9d6JjCGsEzkS647w48npPm8ohy%2FEUrlyE0dpYsb3I69YihvRthv6RJ653m1%2Frmf2MPuB6r4GOqUB1DCpCpTE9WNF8GxPpEhGhInDqEe2WCcasDuQozGPq%2BsFMGJHte68%2FzkM0Ntv2fnLIn6i5qgvukK3Dg6ZMHpx5cBMxDRSQwVYJD%2Fsxxe%2Btu%2BCfhb96lXZivzQpJoB7ZzsFgTuompB%2FvDDPtMimdm0lnXQVU0n7NHwOsVlM0c5rSELBPL%2B8qW1Zg82%2Farzrfl89fp86X8GXPL%2FzWWavc8lREVm0D6c&X-Amz-Signature=adc154290714f7f0744216a3bf0f3536661594f845063f3f0d7758fffe1c322e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
