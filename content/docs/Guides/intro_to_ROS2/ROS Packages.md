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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQC3XEF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGsCrfbk8AE0lvrc6cUD9EX1cgtH7COuoQ99UHN%2Fi0wIgaD%2BdEi%2FucOFV%2FVYUO5ETLdmgzahQvU95t5%2BJehMOlHYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2PLcworh4fV6UV3ircA2l5jBAyAz3jUd8D73lHHKqS4VVQDRx4Zlfjy9spXtwLiEaooqjf4Rm8l2L9i71le%2FRyOASiAmlCDQhlSdyR0y5Gs17ILiuMKvKQ715k46dnmGFaBmhOdsGuzN7UzpUQ6OJmFJhfRZkGNgtXIaLbqHcx71u2Xmcu95QGc04D8YbDl3iOBQhj%2BLu%2BSjWUhkmDMJDBdyLZr6NV7boXPS4n4idZGQQ%2B%2FOHA96qbzOZnxzkMQBtxvAKmB%2FjtiRxFIa8d3%2F%2Fiwb%2FYJy9LYm105ClZ2vKXW%2Fn8icHIHgbdnI%2FhsvoKAUsThr%2FdqSpgfgtbaqWEAsgDBaXBf5Ftf1s%2BcgpuYkZIdqhyOYzcesI0GBwiZlGqTKi2%2FAec1SLrMxxmy%2Brraqz4XZIiHEhcKyE6X%2FCx9EXd6UOyTaKGGjoT0ajgtarYQdCcwoRb28zdjlDg%2BPnz4%2BgIAT6Msf1JU8MmM69BOjOWGzsez5DbXfjqdARwk6wicPA5C9Ewn7kvvYBbE71EFAnOEaFbmc%2BZYzqutHcwZfT2ZIhyzyH9u%2FW%2Fpyjh%2Bz38a9xNgAouz%2B1L1nxXLYS94FL17A%2FP9dAwNL7ACnZPAc96JrKuNNPxoT1ZwgN9QdGW7NyjGmq4%2Fy%2F%2BCU8ZMJj8y8IGOqUB%2BwKdmVjLyKyOcxnTr8TrfxeCn80kodvvMqZto%2Fyaqy5unlB7qqYJ%2FQbTnJ7bIQnUVABerd38OaijOuU43O27rvoFwsVPE8NXMclsFcUatTldFqacBVf%2F2uiYyfAxJlh8Late2iteDokeveaxutSBCqKPA67uKG8P3btGgsRzAXIzXzgCP76CCNcrM417ldOJ0r2PgaPx75KDYLcak15i0HodFq6X&X-Amz-Signature=b4c4e7b0f2afd174de9eb9f2e6719c1f2d0a5b49b7da6d074b443a788a7ff1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQC3XEF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGsCrfbk8AE0lvrc6cUD9EX1cgtH7COuoQ99UHN%2Fi0wIgaD%2BdEi%2FucOFV%2FVYUO5ETLdmgzahQvU95t5%2BJehMOlHYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2PLcworh4fV6UV3ircA2l5jBAyAz3jUd8D73lHHKqS4VVQDRx4Zlfjy9spXtwLiEaooqjf4Rm8l2L9i71le%2FRyOASiAmlCDQhlSdyR0y5Gs17ILiuMKvKQ715k46dnmGFaBmhOdsGuzN7UzpUQ6OJmFJhfRZkGNgtXIaLbqHcx71u2Xmcu95QGc04D8YbDl3iOBQhj%2BLu%2BSjWUhkmDMJDBdyLZr6NV7boXPS4n4idZGQQ%2B%2FOHA96qbzOZnxzkMQBtxvAKmB%2FjtiRxFIa8d3%2F%2Fiwb%2FYJy9LYm105ClZ2vKXW%2Fn8icHIHgbdnI%2FhsvoKAUsThr%2FdqSpgfgtbaqWEAsgDBaXBf5Ftf1s%2BcgpuYkZIdqhyOYzcesI0GBwiZlGqTKi2%2FAec1SLrMxxmy%2Brraqz4XZIiHEhcKyE6X%2FCx9EXd6UOyTaKGGjoT0ajgtarYQdCcwoRb28zdjlDg%2BPnz4%2BgIAT6Msf1JU8MmM69BOjOWGzsez5DbXfjqdARwk6wicPA5C9Ewn7kvvYBbE71EFAnOEaFbmc%2BZYzqutHcwZfT2ZIhyzyH9u%2FW%2Fpyjh%2Bz38a9xNgAouz%2B1L1nxXLYS94FL17A%2FP9dAwNL7ACnZPAc96JrKuNNPxoT1ZwgN9QdGW7NyjGmq4%2Fy%2F%2BCU8ZMJj8y8IGOqUB%2BwKdmVjLyKyOcxnTr8TrfxeCn80kodvvMqZto%2Fyaqy5unlB7qqYJ%2FQbTnJ7bIQnUVABerd38OaijOuU43O27rvoFwsVPE8NXMclsFcUatTldFqacBVf%2F2uiYyfAxJlh8Late2iteDokeveaxutSBCqKPA67uKG8P3btGgsRzAXIzXzgCP76CCNcrM417ldOJ0r2PgaPx75KDYLcak15i0HodFq6X&X-Amz-Signature=275d3d4a49d926065ae0afc99f3ab71dfa9b442afe84c7403277e76ce7f8464e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQC3XEF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGsCrfbk8AE0lvrc6cUD9EX1cgtH7COuoQ99UHN%2Fi0wIgaD%2BdEi%2FucOFV%2FVYUO5ETLdmgzahQvU95t5%2BJehMOlHYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2PLcworh4fV6UV3ircA2l5jBAyAz3jUd8D73lHHKqS4VVQDRx4Zlfjy9spXtwLiEaooqjf4Rm8l2L9i71le%2FRyOASiAmlCDQhlSdyR0y5Gs17ILiuMKvKQ715k46dnmGFaBmhOdsGuzN7UzpUQ6OJmFJhfRZkGNgtXIaLbqHcx71u2Xmcu95QGc04D8YbDl3iOBQhj%2BLu%2BSjWUhkmDMJDBdyLZr6NV7boXPS4n4idZGQQ%2B%2FOHA96qbzOZnxzkMQBtxvAKmB%2FjtiRxFIa8d3%2F%2Fiwb%2FYJy9LYm105ClZ2vKXW%2Fn8icHIHgbdnI%2FhsvoKAUsThr%2FdqSpgfgtbaqWEAsgDBaXBf5Ftf1s%2BcgpuYkZIdqhyOYzcesI0GBwiZlGqTKi2%2FAec1SLrMxxmy%2Brraqz4XZIiHEhcKyE6X%2FCx9EXd6UOyTaKGGjoT0ajgtarYQdCcwoRb28zdjlDg%2BPnz4%2BgIAT6Msf1JU8MmM69BOjOWGzsez5DbXfjqdARwk6wicPA5C9Ewn7kvvYBbE71EFAnOEaFbmc%2BZYzqutHcwZfT2ZIhyzyH9u%2FW%2Fpyjh%2Bz38a9xNgAouz%2B1L1nxXLYS94FL17A%2FP9dAwNL7ACnZPAc96JrKuNNPxoT1ZwgN9QdGW7NyjGmq4%2Fy%2F%2BCU8ZMJj8y8IGOqUB%2BwKdmVjLyKyOcxnTr8TrfxeCn80kodvvMqZto%2Fyaqy5unlB7qqYJ%2FQbTnJ7bIQnUVABerd38OaijOuU43O27rvoFwsVPE8NXMclsFcUatTldFqacBVf%2F2uiYyfAxJlh8Late2iteDokeveaxutSBCqKPA67uKG8P3btGgsRzAXIzXzgCP76CCNcrM417ldOJ0r2PgaPx75KDYLcak15i0HodFq6X&X-Amz-Signature=77ee65a07cc39bd407d2fcd6410e5a5968f7953e72c0a529d1afe539d9fb00bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQC3XEF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGsCrfbk8AE0lvrc6cUD9EX1cgtH7COuoQ99UHN%2Fi0wIgaD%2BdEi%2FucOFV%2FVYUO5ETLdmgzahQvU95t5%2BJehMOlHYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2PLcworh4fV6UV3ircA2l5jBAyAz3jUd8D73lHHKqS4VVQDRx4Zlfjy9spXtwLiEaooqjf4Rm8l2L9i71le%2FRyOASiAmlCDQhlSdyR0y5Gs17ILiuMKvKQ715k46dnmGFaBmhOdsGuzN7UzpUQ6OJmFJhfRZkGNgtXIaLbqHcx71u2Xmcu95QGc04D8YbDl3iOBQhj%2BLu%2BSjWUhkmDMJDBdyLZr6NV7boXPS4n4idZGQQ%2B%2FOHA96qbzOZnxzkMQBtxvAKmB%2FjtiRxFIa8d3%2F%2Fiwb%2FYJy9LYm105ClZ2vKXW%2Fn8icHIHgbdnI%2FhsvoKAUsThr%2FdqSpgfgtbaqWEAsgDBaXBf5Ftf1s%2BcgpuYkZIdqhyOYzcesI0GBwiZlGqTKi2%2FAec1SLrMxxmy%2Brraqz4XZIiHEhcKyE6X%2FCx9EXd6UOyTaKGGjoT0ajgtarYQdCcwoRb28zdjlDg%2BPnz4%2BgIAT6Msf1JU8MmM69BOjOWGzsez5DbXfjqdARwk6wicPA5C9Ewn7kvvYBbE71EFAnOEaFbmc%2BZYzqutHcwZfT2ZIhyzyH9u%2FW%2Fpyjh%2Bz38a9xNgAouz%2B1L1nxXLYS94FL17A%2FP9dAwNL7ACnZPAc96JrKuNNPxoT1ZwgN9QdGW7NyjGmq4%2Fy%2F%2BCU8ZMJj8y8IGOqUB%2BwKdmVjLyKyOcxnTr8TrfxeCn80kodvvMqZto%2Fyaqy5unlB7qqYJ%2FQbTnJ7bIQnUVABerd38OaijOuU43O27rvoFwsVPE8NXMclsFcUatTldFqacBVf%2F2uiYyfAxJlh8Late2iteDokeveaxutSBCqKPA67uKG8P3btGgsRzAXIzXzgCP76CCNcrM417ldOJ0r2PgaPx75KDYLcak15i0HodFq6X&X-Amz-Signature=cc0addc590ab487aa241128a5c34333d665be5d144033f1adce6d1f0f21729b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQC3XEF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGsCrfbk8AE0lvrc6cUD9EX1cgtH7COuoQ99UHN%2Fi0wIgaD%2BdEi%2FucOFV%2FVYUO5ETLdmgzahQvU95t5%2BJehMOlHYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2PLcworh4fV6UV3ircA2l5jBAyAz3jUd8D73lHHKqS4VVQDRx4Zlfjy9spXtwLiEaooqjf4Rm8l2L9i71le%2FRyOASiAmlCDQhlSdyR0y5Gs17ILiuMKvKQ715k46dnmGFaBmhOdsGuzN7UzpUQ6OJmFJhfRZkGNgtXIaLbqHcx71u2Xmcu95QGc04D8YbDl3iOBQhj%2BLu%2BSjWUhkmDMJDBdyLZr6NV7boXPS4n4idZGQQ%2B%2FOHA96qbzOZnxzkMQBtxvAKmB%2FjtiRxFIa8d3%2F%2Fiwb%2FYJy9LYm105ClZ2vKXW%2Fn8icHIHgbdnI%2FhsvoKAUsThr%2FdqSpgfgtbaqWEAsgDBaXBf5Ftf1s%2BcgpuYkZIdqhyOYzcesI0GBwiZlGqTKi2%2FAec1SLrMxxmy%2Brraqz4XZIiHEhcKyE6X%2FCx9EXd6UOyTaKGGjoT0ajgtarYQdCcwoRb28zdjlDg%2BPnz4%2BgIAT6Msf1JU8MmM69BOjOWGzsez5DbXfjqdARwk6wicPA5C9Ewn7kvvYBbE71EFAnOEaFbmc%2BZYzqutHcwZfT2ZIhyzyH9u%2FW%2Fpyjh%2Bz38a9xNgAouz%2B1L1nxXLYS94FL17A%2FP9dAwNL7ACnZPAc96JrKuNNPxoT1ZwgN9QdGW7NyjGmq4%2Fy%2F%2BCU8ZMJj8y8IGOqUB%2BwKdmVjLyKyOcxnTr8TrfxeCn80kodvvMqZto%2Fyaqy5unlB7qqYJ%2FQbTnJ7bIQnUVABerd38OaijOuU43O27rvoFwsVPE8NXMclsFcUatTldFqacBVf%2F2uiYyfAxJlh8Late2iteDokeveaxutSBCqKPA67uKG8P3btGgsRzAXIzXzgCP76CCNcrM417ldOJ0r2PgaPx75KDYLcak15i0HodFq6X&X-Amz-Signature=c249065cb0ebc6ba3c8b3c09370a94486b4799af89d3a3d457268a1d322d9c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQC3XEF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGsCrfbk8AE0lvrc6cUD9EX1cgtH7COuoQ99UHN%2Fi0wIgaD%2BdEi%2FucOFV%2FVYUO5ETLdmgzahQvU95t5%2BJehMOlHYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2PLcworh4fV6UV3ircA2l5jBAyAz3jUd8D73lHHKqS4VVQDRx4Zlfjy9spXtwLiEaooqjf4Rm8l2L9i71le%2FRyOASiAmlCDQhlSdyR0y5Gs17ILiuMKvKQ715k46dnmGFaBmhOdsGuzN7UzpUQ6OJmFJhfRZkGNgtXIaLbqHcx71u2Xmcu95QGc04D8YbDl3iOBQhj%2BLu%2BSjWUhkmDMJDBdyLZr6NV7boXPS4n4idZGQQ%2B%2FOHA96qbzOZnxzkMQBtxvAKmB%2FjtiRxFIa8d3%2F%2Fiwb%2FYJy9LYm105ClZ2vKXW%2Fn8icHIHgbdnI%2FhsvoKAUsThr%2FdqSpgfgtbaqWEAsgDBaXBf5Ftf1s%2BcgpuYkZIdqhyOYzcesI0GBwiZlGqTKi2%2FAec1SLrMxxmy%2Brraqz4XZIiHEhcKyE6X%2FCx9EXd6UOyTaKGGjoT0ajgtarYQdCcwoRb28zdjlDg%2BPnz4%2BgIAT6Msf1JU8MmM69BOjOWGzsez5DbXfjqdARwk6wicPA5C9Ewn7kvvYBbE71EFAnOEaFbmc%2BZYzqutHcwZfT2ZIhyzyH9u%2FW%2Fpyjh%2Bz38a9xNgAouz%2B1L1nxXLYS94FL17A%2FP9dAwNL7ACnZPAc96JrKuNNPxoT1ZwgN9QdGW7NyjGmq4%2Fy%2F%2BCU8ZMJj8y8IGOqUB%2BwKdmVjLyKyOcxnTr8TrfxeCn80kodvvMqZto%2Fyaqy5unlB7qqYJ%2FQbTnJ7bIQnUVABerd38OaijOuU43O27rvoFwsVPE8NXMclsFcUatTldFqacBVf%2F2uiYyfAxJlh8Late2iteDokeveaxutSBCqKPA67uKG8P3btGgsRzAXIzXzgCP76CCNcrM417ldOJ0r2PgaPx75KDYLcak15i0HodFq6X&X-Amz-Signature=8fcb8417f0df11bc92099d16d7421cfe745c76fab6d04091f69cb6a44e3d06d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQC3XEF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGsCrfbk8AE0lvrc6cUD9EX1cgtH7COuoQ99UHN%2Fi0wIgaD%2BdEi%2FucOFV%2FVYUO5ETLdmgzahQvU95t5%2BJehMOlHYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2PLcworh4fV6UV3ircA2l5jBAyAz3jUd8D73lHHKqS4VVQDRx4Zlfjy9spXtwLiEaooqjf4Rm8l2L9i71le%2FRyOASiAmlCDQhlSdyR0y5Gs17ILiuMKvKQ715k46dnmGFaBmhOdsGuzN7UzpUQ6OJmFJhfRZkGNgtXIaLbqHcx71u2Xmcu95QGc04D8YbDl3iOBQhj%2BLu%2BSjWUhkmDMJDBdyLZr6NV7boXPS4n4idZGQQ%2B%2FOHA96qbzOZnxzkMQBtxvAKmB%2FjtiRxFIa8d3%2F%2Fiwb%2FYJy9LYm105ClZ2vKXW%2Fn8icHIHgbdnI%2FhsvoKAUsThr%2FdqSpgfgtbaqWEAsgDBaXBf5Ftf1s%2BcgpuYkZIdqhyOYzcesI0GBwiZlGqTKi2%2FAec1SLrMxxmy%2Brraqz4XZIiHEhcKyE6X%2FCx9EXd6UOyTaKGGjoT0ajgtarYQdCcwoRb28zdjlDg%2BPnz4%2BgIAT6Msf1JU8MmM69BOjOWGzsez5DbXfjqdARwk6wicPA5C9Ewn7kvvYBbE71EFAnOEaFbmc%2BZYzqutHcwZfT2ZIhyzyH9u%2FW%2Fpyjh%2Bz38a9xNgAouz%2B1L1nxXLYS94FL17A%2FP9dAwNL7ACnZPAc96JrKuNNPxoT1ZwgN9QdGW7NyjGmq4%2Fy%2F%2BCU8ZMJj8y8IGOqUB%2BwKdmVjLyKyOcxnTr8TrfxeCn80kodvvMqZto%2Fyaqy5unlB7qqYJ%2FQbTnJ7bIQnUVABerd38OaijOuU43O27rvoFwsVPE8NXMclsFcUatTldFqacBVf%2F2uiYyfAxJlh8Late2iteDokeveaxutSBCqKPA67uKG8P3btGgsRzAXIzXzgCP76CCNcrM417ldOJ0r2PgaPx75KDYLcak15i0HodFq6X&X-Amz-Signature=55d4ce2ac122447312572e68e9a904eaef714cdb7011996e6c47ab438c1ac208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
