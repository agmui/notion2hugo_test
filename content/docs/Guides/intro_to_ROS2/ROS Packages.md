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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSE3F4T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ%2BOqN13pW%2FxsV7Z3gtJKkZbbBbsY698nnuLoEdVkbpAiAiufIJGyU4s5fOviSpwR6I6CPNlZac%2BtEHvSSIGwJPFir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3SUa7KZ6rCdwkjGuKtwDwHMGhmA7V%2BnWybg88nQ5gh33DVxmZnu9UyB3NFpehp1FJMqi%2Bfnq%2FIuuvwSa0lguQblvjrfsgXE9R%2B%2BPEu7HG9ECdjg4u0PzWOymfNKlxnBCcpJ6HYK5ZI38Kn3sCtpr%2FqVB7TpyQ7I%2BiFoB%2BKSqJCnFbTiWRiqYhsWySgXxIuZstIdMmmktnlLaRwSE4VdI9erc6p%2FoZPoeY1b6Saibia7FB3QZxMx20hqZMqQZ8gE0YgQTOYJSZhnWBeRZKYofYLzYCC%2BC%2BacgjzudfS1LyrYHEVbel7Tw1r13G75OmuNr6VSwMXk%2FMTKzIHh%2BY%2FTSzVwS7Mv10B4y50lr%2BMOLIXaaA7Ly%2BDYcs4hJ8tm4xg1QMO9thbXnq7LdA6BEGEiQPtneDLO05g1DRrtb%2BcDTIPsQgNm%2BANzmPaBrtpLl55rv%2BAVLNocNFQ5aWixTGQ6n9LDJioqAXHaeaGYW1PsIBGpKEK3M4rgtKvPa6%2FWY0fzDwdsD54tlcSjE8QxYC0rg209hfgVwgu0%2F9hVW1gbs15ly4Jhh7x0pOAWAwxlFILTR%2BdmDyv1jae5jkMKjtDbW6bbl8NkMiSc8W522YGReQNYsbV4bmsZnmTU5ETA3G%2BUJqhHp5RG5qL0QB5wwlMmxwAY6pgHOQomgVvhSNbdcbH%2FoC9ndcruhXV9MI3cVNYRMTb0lvEJlO%2BUhJEkMgPW6%2FLBzVCCmKjGUSejTlJWigdwnEHKxTaq%2BrZeIuYZCl9NBDAn4RnXwxTZTHfQv7Qj1FwdifVv5eQXXCHvGajaQpGsVaHpGMymulEtFOElJriK55RhoNwWdn2Eae9klGFAasej3Zc3HM3rA2IcyWj937qYiPHpK3WW5d8yb&X-Amz-Signature=6499279e387cb027eab896ee1c4265c0f5c3b62af690abbe0b4768a4dcd1b14d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSE3F4T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ%2BOqN13pW%2FxsV7Z3gtJKkZbbBbsY698nnuLoEdVkbpAiAiufIJGyU4s5fOviSpwR6I6CPNlZac%2BtEHvSSIGwJPFir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3SUa7KZ6rCdwkjGuKtwDwHMGhmA7V%2BnWybg88nQ5gh33DVxmZnu9UyB3NFpehp1FJMqi%2Bfnq%2FIuuvwSa0lguQblvjrfsgXE9R%2B%2BPEu7HG9ECdjg4u0PzWOymfNKlxnBCcpJ6HYK5ZI38Kn3sCtpr%2FqVB7TpyQ7I%2BiFoB%2BKSqJCnFbTiWRiqYhsWySgXxIuZstIdMmmktnlLaRwSE4VdI9erc6p%2FoZPoeY1b6Saibia7FB3QZxMx20hqZMqQZ8gE0YgQTOYJSZhnWBeRZKYofYLzYCC%2BC%2BacgjzudfS1LyrYHEVbel7Tw1r13G75OmuNr6VSwMXk%2FMTKzIHh%2BY%2FTSzVwS7Mv10B4y50lr%2BMOLIXaaA7Ly%2BDYcs4hJ8tm4xg1QMO9thbXnq7LdA6BEGEiQPtneDLO05g1DRrtb%2BcDTIPsQgNm%2BANzmPaBrtpLl55rv%2BAVLNocNFQ5aWixTGQ6n9LDJioqAXHaeaGYW1PsIBGpKEK3M4rgtKvPa6%2FWY0fzDwdsD54tlcSjE8QxYC0rg209hfgVwgu0%2F9hVW1gbs15ly4Jhh7x0pOAWAwxlFILTR%2BdmDyv1jae5jkMKjtDbW6bbl8NkMiSc8W522YGReQNYsbV4bmsZnmTU5ETA3G%2BUJqhHp5RG5qL0QB5wwlMmxwAY6pgHOQomgVvhSNbdcbH%2FoC9ndcruhXV9MI3cVNYRMTb0lvEJlO%2BUhJEkMgPW6%2FLBzVCCmKjGUSejTlJWigdwnEHKxTaq%2BrZeIuYZCl9NBDAn4RnXwxTZTHfQv7Qj1FwdifVv5eQXXCHvGajaQpGsVaHpGMymulEtFOElJriK55RhoNwWdn2Eae9klGFAasej3Zc3HM3rA2IcyWj937qYiPHpK3WW5d8yb&X-Amz-Signature=08ae3d6ce873e07aee96b4292b1478fa5e1313da8fff65dbbdd2599537e9003f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSE3F4T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ%2BOqN13pW%2FxsV7Z3gtJKkZbbBbsY698nnuLoEdVkbpAiAiufIJGyU4s5fOviSpwR6I6CPNlZac%2BtEHvSSIGwJPFir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3SUa7KZ6rCdwkjGuKtwDwHMGhmA7V%2BnWybg88nQ5gh33DVxmZnu9UyB3NFpehp1FJMqi%2Bfnq%2FIuuvwSa0lguQblvjrfsgXE9R%2B%2BPEu7HG9ECdjg4u0PzWOymfNKlxnBCcpJ6HYK5ZI38Kn3sCtpr%2FqVB7TpyQ7I%2BiFoB%2BKSqJCnFbTiWRiqYhsWySgXxIuZstIdMmmktnlLaRwSE4VdI9erc6p%2FoZPoeY1b6Saibia7FB3QZxMx20hqZMqQZ8gE0YgQTOYJSZhnWBeRZKYofYLzYCC%2BC%2BacgjzudfS1LyrYHEVbel7Tw1r13G75OmuNr6VSwMXk%2FMTKzIHh%2BY%2FTSzVwS7Mv10B4y50lr%2BMOLIXaaA7Ly%2BDYcs4hJ8tm4xg1QMO9thbXnq7LdA6BEGEiQPtneDLO05g1DRrtb%2BcDTIPsQgNm%2BANzmPaBrtpLl55rv%2BAVLNocNFQ5aWixTGQ6n9LDJioqAXHaeaGYW1PsIBGpKEK3M4rgtKvPa6%2FWY0fzDwdsD54tlcSjE8QxYC0rg209hfgVwgu0%2F9hVW1gbs15ly4Jhh7x0pOAWAwxlFILTR%2BdmDyv1jae5jkMKjtDbW6bbl8NkMiSc8W522YGReQNYsbV4bmsZnmTU5ETA3G%2BUJqhHp5RG5qL0QB5wwlMmxwAY6pgHOQomgVvhSNbdcbH%2FoC9ndcruhXV9MI3cVNYRMTb0lvEJlO%2BUhJEkMgPW6%2FLBzVCCmKjGUSejTlJWigdwnEHKxTaq%2BrZeIuYZCl9NBDAn4RnXwxTZTHfQv7Qj1FwdifVv5eQXXCHvGajaQpGsVaHpGMymulEtFOElJriK55RhoNwWdn2Eae9klGFAasej3Zc3HM3rA2IcyWj937qYiPHpK3WW5d8yb&X-Amz-Signature=f8cc952b034fbbc4ae2b0e2f55b59af5215bc2235d0d5f53d81dee16a9be56a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSE3F4T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ%2BOqN13pW%2FxsV7Z3gtJKkZbbBbsY698nnuLoEdVkbpAiAiufIJGyU4s5fOviSpwR6I6CPNlZac%2BtEHvSSIGwJPFir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3SUa7KZ6rCdwkjGuKtwDwHMGhmA7V%2BnWybg88nQ5gh33DVxmZnu9UyB3NFpehp1FJMqi%2Bfnq%2FIuuvwSa0lguQblvjrfsgXE9R%2B%2BPEu7HG9ECdjg4u0PzWOymfNKlxnBCcpJ6HYK5ZI38Kn3sCtpr%2FqVB7TpyQ7I%2BiFoB%2BKSqJCnFbTiWRiqYhsWySgXxIuZstIdMmmktnlLaRwSE4VdI9erc6p%2FoZPoeY1b6Saibia7FB3QZxMx20hqZMqQZ8gE0YgQTOYJSZhnWBeRZKYofYLzYCC%2BC%2BacgjzudfS1LyrYHEVbel7Tw1r13G75OmuNr6VSwMXk%2FMTKzIHh%2BY%2FTSzVwS7Mv10B4y50lr%2BMOLIXaaA7Ly%2BDYcs4hJ8tm4xg1QMO9thbXnq7LdA6BEGEiQPtneDLO05g1DRrtb%2BcDTIPsQgNm%2BANzmPaBrtpLl55rv%2BAVLNocNFQ5aWixTGQ6n9LDJioqAXHaeaGYW1PsIBGpKEK3M4rgtKvPa6%2FWY0fzDwdsD54tlcSjE8QxYC0rg209hfgVwgu0%2F9hVW1gbs15ly4Jhh7x0pOAWAwxlFILTR%2BdmDyv1jae5jkMKjtDbW6bbl8NkMiSc8W522YGReQNYsbV4bmsZnmTU5ETA3G%2BUJqhHp5RG5qL0QB5wwlMmxwAY6pgHOQomgVvhSNbdcbH%2FoC9ndcruhXV9MI3cVNYRMTb0lvEJlO%2BUhJEkMgPW6%2FLBzVCCmKjGUSejTlJWigdwnEHKxTaq%2BrZeIuYZCl9NBDAn4RnXwxTZTHfQv7Qj1FwdifVv5eQXXCHvGajaQpGsVaHpGMymulEtFOElJriK55RhoNwWdn2Eae9klGFAasej3Zc3HM3rA2IcyWj937qYiPHpK3WW5d8yb&X-Amz-Signature=0c473680e1247496e71b2ac9359b55a496ab23c86afbb53b8e2f11976f5858da&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSE3F4T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ%2BOqN13pW%2FxsV7Z3gtJKkZbbBbsY698nnuLoEdVkbpAiAiufIJGyU4s5fOviSpwR6I6CPNlZac%2BtEHvSSIGwJPFir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3SUa7KZ6rCdwkjGuKtwDwHMGhmA7V%2BnWybg88nQ5gh33DVxmZnu9UyB3NFpehp1FJMqi%2Bfnq%2FIuuvwSa0lguQblvjrfsgXE9R%2B%2BPEu7HG9ECdjg4u0PzWOymfNKlxnBCcpJ6HYK5ZI38Kn3sCtpr%2FqVB7TpyQ7I%2BiFoB%2BKSqJCnFbTiWRiqYhsWySgXxIuZstIdMmmktnlLaRwSE4VdI9erc6p%2FoZPoeY1b6Saibia7FB3QZxMx20hqZMqQZ8gE0YgQTOYJSZhnWBeRZKYofYLzYCC%2BC%2BacgjzudfS1LyrYHEVbel7Tw1r13G75OmuNr6VSwMXk%2FMTKzIHh%2BY%2FTSzVwS7Mv10B4y50lr%2BMOLIXaaA7Ly%2BDYcs4hJ8tm4xg1QMO9thbXnq7LdA6BEGEiQPtneDLO05g1DRrtb%2BcDTIPsQgNm%2BANzmPaBrtpLl55rv%2BAVLNocNFQ5aWixTGQ6n9LDJioqAXHaeaGYW1PsIBGpKEK3M4rgtKvPa6%2FWY0fzDwdsD54tlcSjE8QxYC0rg209hfgVwgu0%2F9hVW1gbs15ly4Jhh7x0pOAWAwxlFILTR%2BdmDyv1jae5jkMKjtDbW6bbl8NkMiSc8W522YGReQNYsbV4bmsZnmTU5ETA3G%2BUJqhHp5RG5qL0QB5wwlMmxwAY6pgHOQomgVvhSNbdcbH%2FoC9ndcruhXV9MI3cVNYRMTb0lvEJlO%2BUhJEkMgPW6%2FLBzVCCmKjGUSejTlJWigdwnEHKxTaq%2BrZeIuYZCl9NBDAn4RnXwxTZTHfQv7Qj1FwdifVv5eQXXCHvGajaQpGsVaHpGMymulEtFOElJriK55RhoNwWdn2Eae9klGFAasej3Zc3HM3rA2IcyWj937qYiPHpK3WW5d8yb&X-Amz-Signature=ea4e3e5f8dfc94521b4fc5683e93c48c6b897c57bc95d437eb6f252b71662ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSE3F4T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ%2BOqN13pW%2FxsV7Z3gtJKkZbbBbsY698nnuLoEdVkbpAiAiufIJGyU4s5fOviSpwR6I6CPNlZac%2BtEHvSSIGwJPFir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3SUa7KZ6rCdwkjGuKtwDwHMGhmA7V%2BnWybg88nQ5gh33DVxmZnu9UyB3NFpehp1FJMqi%2Bfnq%2FIuuvwSa0lguQblvjrfsgXE9R%2B%2BPEu7HG9ECdjg4u0PzWOymfNKlxnBCcpJ6HYK5ZI38Kn3sCtpr%2FqVB7TpyQ7I%2BiFoB%2BKSqJCnFbTiWRiqYhsWySgXxIuZstIdMmmktnlLaRwSE4VdI9erc6p%2FoZPoeY1b6Saibia7FB3QZxMx20hqZMqQZ8gE0YgQTOYJSZhnWBeRZKYofYLzYCC%2BC%2BacgjzudfS1LyrYHEVbel7Tw1r13G75OmuNr6VSwMXk%2FMTKzIHh%2BY%2FTSzVwS7Mv10B4y50lr%2BMOLIXaaA7Ly%2BDYcs4hJ8tm4xg1QMO9thbXnq7LdA6BEGEiQPtneDLO05g1DRrtb%2BcDTIPsQgNm%2BANzmPaBrtpLl55rv%2BAVLNocNFQ5aWixTGQ6n9LDJioqAXHaeaGYW1PsIBGpKEK3M4rgtKvPa6%2FWY0fzDwdsD54tlcSjE8QxYC0rg209hfgVwgu0%2F9hVW1gbs15ly4Jhh7x0pOAWAwxlFILTR%2BdmDyv1jae5jkMKjtDbW6bbl8NkMiSc8W522YGReQNYsbV4bmsZnmTU5ETA3G%2BUJqhHp5RG5qL0QB5wwlMmxwAY6pgHOQomgVvhSNbdcbH%2FoC9ndcruhXV9MI3cVNYRMTb0lvEJlO%2BUhJEkMgPW6%2FLBzVCCmKjGUSejTlJWigdwnEHKxTaq%2BrZeIuYZCl9NBDAn4RnXwxTZTHfQv7Qj1FwdifVv5eQXXCHvGajaQpGsVaHpGMymulEtFOElJriK55RhoNwWdn2Eae9klGFAasej3Zc3HM3rA2IcyWj937qYiPHpK3WW5d8yb&X-Amz-Signature=aaf5b36161bd474149c53e95663733a95fa7131e16d30f97f712a1856570d960&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSE3F4T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ%2BOqN13pW%2FxsV7Z3gtJKkZbbBbsY698nnuLoEdVkbpAiAiufIJGyU4s5fOviSpwR6I6CPNlZac%2BtEHvSSIGwJPFir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3SUa7KZ6rCdwkjGuKtwDwHMGhmA7V%2BnWybg88nQ5gh33DVxmZnu9UyB3NFpehp1FJMqi%2Bfnq%2FIuuvwSa0lguQblvjrfsgXE9R%2B%2BPEu7HG9ECdjg4u0PzWOymfNKlxnBCcpJ6HYK5ZI38Kn3sCtpr%2FqVB7TpyQ7I%2BiFoB%2BKSqJCnFbTiWRiqYhsWySgXxIuZstIdMmmktnlLaRwSE4VdI9erc6p%2FoZPoeY1b6Saibia7FB3QZxMx20hqZMqQZ8gE0YgQTOYJSZhnWBeRZKYofYLzYCC%2BC%2BacgjzudfS1LyrYHEVbel7Tw1r13G75OmuNr6VSwMXk%2FMTKzIHh%2BY%2FTSzVwS7Mv10B4y50lr%2BMOLIXaaA7Ly%2BDYcs4hJ8tm4xg1QMO9thbXnq7LdA6BEGEiQPtneDLO05g1DRrtb%2BcDTIPsQgNm%2BANzmPaBrtpLl55rv%2BAVLNocNFQ5aWixTGQ6n9LDJioqAXHaeaGYW1PsIBGpKEK3M4rgtKvPa6%2FWY0fzDwdsD54tlcSjE8QxYC0rg209hfgVwgu0%2F9hVW1gbs15ly4Jhh7x0pOAWAwxlFILTR%2BdmDyv1jae5jkMKjtDbW6bbl8NkMiSc8W522YGReQNYsbV4bmsZnmTU5ETA3G%2BUJqhHp5RG5qL0QB5wwlMmxwAY6pgHOQomgVvhSNbdcbH%2FoC9ndcruhXV9MI3cVNYRMTb0lvEJlO%2BUhJEkMgPW6%2FLBzVCCmKjGUSejTlJWigdwnEHKxTaq%2BrZeIuYZCl9NBDAn4RnXwxTZTHfQv7Qj1FwdifVv5eQXXCHvGajaQpGsVaHpGMymulEtFOElJriK55RhoNwWdn2Eae9klGFAasej3Zc3HM3rA2IcyWj937qYiPHpK3WW5d8yb&X-Amz-Signature=75c1f3b454b37b7b038e95c64896da66c4adc71bd386cc5d40796c19663a71f0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
