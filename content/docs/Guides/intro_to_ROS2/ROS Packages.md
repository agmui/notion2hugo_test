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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQ5HRZJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBfG0WIx%2BRFsvAt4RjsS5ZsqH%2Bk31%2FUSvhHrmiJfbsrhAiEAtR0EK0UIJXCF5vwdw0FzuA9yry2P73UIUvBKPIG%2BuVsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADiYk170JG5gpWIhyrcA885rMa1ar06CF3Ab3x1BzxcWCVJ1FYcCMrPTC4%2FY0apH8A28KnpWhmlGcNaNGySRKolrjH9JAvhMAMVc0I7EFzp1aS4ZkWGoum9nFJrWh1UKfNoqQdqfFnzOimCG%2FCEELpU7HqoXBtpGbtUMBAWmEZu24Er7xTnY1PCgV4cMBqREYcKgzIeKoaGlQbH8wrd2Sw0p2XMX6C%2BfgSjYXBKuWMwZtTKRTeaux2YgrgZR8PmQcYhFVBUZILjyJL8EE0SgiywWfBcisv3Owal%2BORE8Qw5MBeQ6w2LwyEtZUVYc4UDVzD9ia3sWmeCF4ZsnyQV7DBaO6F7HAM9Lu%2FiAwcWuBwacJC%2B6IF80hzlw81g%2FmCgTjkHCqdXsNbfSAUI%2BjHvkbEdFOgy%2FUDtbpMRLATIvAft1eDk6sgxrhDi3%2BkqmtjP8008L5l748ApWtcMNCjPM0HLXprTCwru1H9OV6RphpKo90UMl%2BFvLM35YNQ8lGkyXYRoENXDRlzmQekMliJQVmD8tNDxrexvc8MwhLHbazDxpNq47I7n%2BgTfhfEK%2BXDcFk7gW1IWHgIXB1ZdfeBS9tmxJJnxidxBC0PoLqGF%2B9G15az80nV3J56Qd%2BNqY5Z9Y3xm7YhzjN26VFOBMLverb4GOqUBTUgi05iqD0uqwKI1FrglrmfM%2F5S4%2BIFNZ8mXu4h90WKA6mJ61cZLozrc4exdn5NwwvL3dMAO0F2Ab83XZ9HIYRDl3GNoidaNBzwA%2FokPEeEAu%2B5rKjQtvDy%2B8dSmCf2Jh2banBipAj87MkQr2FHu78%2BO59qZVwcTY8yDUDVABq%2FNHEHv%2BEtF2z7sQO0MIgX8HUayxtmfhlNgi82C5eVKnwHQquew&X-Amz-Signature=18837e5ef4e5ac9cbdf1f3070fe1149d845d0dc86c2f431ad514f1b467cdf444&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQ5HRZJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBfG0WIx%2BRFsvAt4RjsS5ZsqH%2Bk31%2FUSvhHrmiJfbsrhAiEAtR0EK0UIJXCF5vwdw0FzuA9yry2P73UIUvBKPIG%2BuVsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADiYk170JG5gpWIhyrcA885rMa1ar06CF3Ab3x1BzxcWCVJ1FYcCMrPTC4%2FY0apH8A28KnpWhmlGcNaNGySRKolrjH9JAvhMAMVc0I7EFzp1aS4ZkWGoum9nFJrWh1UKfNoqQdqfFnzOimCG%2FCEELpU7HqoXBtpGbtUMBAWmEZu24Er7xTnY1PCgV4cMBqREYcKgzIeKoaGlQbH8wrd2Sw0p2XMX6C%2BfgSjYXBKuWMwZtTKRTeaux2YgrgZR8PmQcYhFVBUZILjyJL8EE0SgiywWfBcisv3Owal%2BORE8Qw5MBeQ6w2LwyEtZUVYc4UDVzD9ia3sWmeCF4ZsnyQV7DBaO6F7HAM9Lu%2FiAwcWuBwacJC%2B6IF80hzlw81g%2FmCgTjkHCqdXsNbfSAUI%2BjHvkbEdFOgy%2FUDtbpMRLATIvAft1eDk6sgxrhDi3%2BkqmtjP8008L5l748ApWtcMNCjPM0HLXprTCwru1H9OV6RphpKo90UMl%2BFvLM35YNQ8lGkyXYRoENXDRlzmQekMliJQVmD8tNDxrexvc8MwhLHbazDxpNq47I7n%2BgTfhfEK%2BXDcFk7gW1IWHgIXB1ZdfeBS9tmxJJnxidxBC0PoLqGF%2B9G15az80nV3J56Qd%2BNqY5Z9Y3xm7YhzjN26VFOBMLverb4GOqUBTUgi05iqD0uqwKI1FrglrmfM%2F5S4%2BIFNZ8mXu4h90WKA6mJ61cZLozrc4exdn5NwwvL3dMAO0F2Ab83XZ9HIYRDl3GNoidaNBzwA%2FokPEeEAu%2B5rKjQtvDy%2B8dSmCf2Jh2banBipAj87MkQr2FHu78%2BO59qZVwcTY8yDUDVABq%2FNHEHv%2BEtF2z7sQO0MIgX8HUayxtmfhlNgi82C5eVKnwHQquew&X-Amz-Signature=9a4ebd4b8803706aa3b1059b80cdf06d3eefe609bd11833fa51485a5302ecba4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQ5HRZJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBfG0WIx%2BRFsvAt4RjsS5ZsqH%2Bk31%2FUSvhHrmiJfbsrhAiEAtR0EK0UIJXCF5vwdw0FzuA9yry2P73UIUvBKPIG%2BuVsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADiYk170JG5gpWIhyrcA885rMa1ar06CF3Ab3x1BzxcWCVJ1FYcCMrPTC4%2FY0apH8A28KnpWhmlGcNaNGySRKolrjH9JAvhMAMVc0I7EFzp1aS4ZkWGoum9nFJrWh1UKfNoqQdqfFnzOimCG%2FCEELpU7HqoXBtpGbtUMBAWmEZu24Er7xTnY1PCgV4cMBqREYcKgzIeKoaGlQbH8wrd2Sw0p2XMX6C%2BfgSjYXBKuWMwZtTKRTeaux2YgrgZR8PmQcYhFVBUZILjyJL8EE0SgiywWfBcisv3Owal%2BORE8Qw5MBeQ6w2LwyEtZUVYc4UDVzD9ia3sWmeCF4ZsnyQV7DBaO6F7HAM9Lu%2FiAwcWuBwacJC%2B6IF80hzlw81g%2FmCgTjkHCqdXsNbfSAUI%2BjHvkbEdFOgy%2FUDtbpMRLATIvAft1eDk6sgxrhDi3%2BkqmtjP8008L5l748ApWtcMNCjPM0HLXprTCwru1H9OV6RphpKo90UMl%2BFvLM35YNQ8lGkyXYRoENXDRlzmQekMliJQVmD8tNDxrexvc8MwhLHbazDxpNq47I7n%2BgTfhfEK%2BXDcFk7gW1IWHgIXB1ZdfeBS9tmxJJnxidxBC0PoLqGF%2B9G15az80nV3J56Qd%2BNqY5Z9Y3xm7YhzjN26VFOBMLverb4GOqUBTUgi05iqD0uqwKI1FrglrmfM%2F5S4%2BIFNZ8mXu4h90WKA6mJ61cZLozrc4exdn5NwwvL3dMAO0F2Ab83XZ9HIYRDl3GNoidaNBzwA%2FokPEeEAu%2B5rKjQtvDy%2B8dSmCf2Jh2banBipAj87MkQr2FHu78%2BO59qZVwcTY8yDUDVABq%2FNHEHv%2BEtF2z7sQO0MIgX8HUayxtmfhlNgi82C5eVKnwHQquew&X-Amz-Signature=98aaf3d57749d8f6f71ea04bb876d1c7a9b03250288e359b3314de19f01a5619&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQ5HRZJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBfG0WIx%2BRFsvAt4RjsS5ZsqH%2Bk31%2FUSvhHrmiJfbsrhAiEAtR0EK0UIJXCF5vwdw0FzuA9yry2P73UIUvBKPIG%2BuVsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADiYk170JG5gpWIhyrcA885rMa1ar06CF3Ab3x1BzxcWCVJ1FYcCMrPTC4%2FY0apH8A28KnpWhmlGcNaNGySRKolrjH9JAvhMAMVc0I7EFzp1aS4ZkWGoum9nFJrWh1UKfNoqQdqfFnzOimCG%2FCEELpU7HqoXBtpGbtUMBAWmEZu24Er7xTnY1PCgV4cMBqREYcKgzIeKoaGlQbH8wrd2Sw0p2XMX6C%2BfgSjYXBKuWMwZtTKRTeaux2YgrgZR8PmQcYhFVBUZILjyJL8EE0SgiywWfBcisv3Owal%2BORE8Qw5MBeQ6w2LwyEtZUVYc4UDVzD9ia3sWmeCF4ZsnyQV7DBaO6F7HAM9Lu%2FiAwcWuBwacJC%2B6IF80hzlw81g%2FmCgTjkHCqdXsNbfSAUI%2BjHvkbEdFOgy%2FUDtbpMRLATIvAft1eDk6sgxrhDi3%2BkqmtjP8008L5l748ApWtcMNCjPM0HLXprTCwru1H9OV6RphpKo90UMl%2BFvLM35YNQ8lGkyXYRoENXDRlzmQekMliJQVmD8tNDxrexvc8MwhLHbazDxpNq47I7n%2BgTfhfEK%2BXDcFk7gW1IWHgIXB1ZdfeBS9tmxJJnxidxBC0PoLqGF%2B9G15az80nV3J56Qd%2BNqY5Z9Y3xm7YhzjN26VFOBMLverb4GOqUBTUgi05iqD0uqwKI1FrglrmfM%2F5S4%2BIFNZ8mXu4h90WKA6mJ61cZLozrc4exdn5NwwvL3dMAO0F2Ab83XZ9HIYRDl3GNoidaNBzwA%2FokPEeEAu%2B5rKjQtvDy%2B8dSmCf2Jh2banBipAj87MkQr2FHu78%2BO59qZVwcTY8yDUDVABq%2FNHEHv%2BEtF2z7sQO0MIgX8HUayxtmfhlNgi82C5eVKnwHQquew&X-Amz-Signature=5f5a58c2cc2bd119c03d62616fbc570f364baf8150985fce7d9186f77417dd6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQ5HRZJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBfG0WIx%2BRFsvAt4RjsS5ZsqH%2Bk31%2FUSvhHrmiJfbsrhAiEAtR0EK0UIJXCF5vwdw0FzuA9yry2P73UIUvBKPIG%2BuVsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADiYk170JG5gpWIhyrcA885rMa1ar06CF3Ab3x1BzxcWCVJ1FYcCMrPTC4%2FY0apH8A28KnpWhmlGcNaNGySRKolrjH9JAvhMAMVc0I7EFzp1aS4ZkWGoum9nFJrWh1UKfNoqQdqfFnzOimCG%2FCEELpU7HqoXBtpGbtUMBAWmEZu24Er7xTnY1PCgV4cMBqREYcKgzIeKoaGlQbH8wrd2Sw0p2XMX6C%2BfgSjYXBKuWMwZtTKRTeaux2YgrgZR8PmQcYhFVBUZILjyJL8EE0SgiywWfBcisv3Owal%2BORE8Qw5MBeQ6w2LwyEtZUVYc4UDVzD9ia3sWmeCF4ZsnyQV7DBaO6F7HAM9Lu%2FiAwcWuBwacJC%2B6IF80hzlw81g%2FmCgTjkHCqdXsNbfSAUI%2BjHvkbEdFOgy%2FUDtbpMRLATIvAft1eDk6sgxrhDi3%2BkqmtjP8008L5l748ApWtcMNCjPM0HLXprTCwru1H9OV6RphpKo90UMl%2BFvLM35YNQ8lGkyXYRoENXDRlzmQekMliJQVmD8tNDxrexvc8MwhLHbazDxpNq47I7n%2BgTfhfEK%2BXDcFk7gW1IWHgIXB1ZdfeBS9tmxJJnxidxBC0PoLqGF%2B9G15az80nV3J56Qd%2BNqY5Z9Y3xm7YhzjN26VFOBMLverb4GOqUBTUgi05iqD0uqwKI1FrglrmfM%2F5S4%2BIFNZ8mXu4h90WKA6mJ61cZLozrc4exdn5NwwvL3dMAO0F2Ab83XZ9HIYRDl3GNoidaNBzwA%2FokPEeEAu%2B5rKjQtvDy%2B8dSmCf2Jh2banBipAj87MkQr2FHu78%2BO59qZVwcTY8yDUDVABq%2FNHEHv%2BEtF2z7sQO0MIgX8HUayxtmfhlNgi82C5eVKnwHQquew&X-Amz-Signature=d7dd6e2a00e992711436b90578d2fdf623de144847f5cf5eb5e19a3d0285b3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQ5HRZJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBfG0WIx%2BRFsvAt4RjsS5ZsqH%2Bk31%2FUSvhHrmiJfbsrhAiEAtR0EK0UIJXCF5vwdw0FzuA9yry2P73UIUvBKPIG%2BuVsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADiYk170JG5gpWIhyrcA885rMa1ar06CF3Ab3x1BzxcWCVJ1FYcCMrPTC4%2FY0apH8A28KnpWhmlGcNaNGySRKolrjH9JAvhMAMVc0I7EFzp1aS4ZkWGoum9nFJrWh1UKfNoqQdqfFnzOimCG%2FCEELpU7HqoXBtpGbtUMBAWmEZu24Er7xTnY1PCgV4cMBqREYcKgzIeKoaGlQbH8wrd2Sw0p2XMX6C%2BfgSjYXBKuWMwZtTKRTeaux2YgrgZR8PmQcYhFVBUZILjyJL8EE0SgiywWfBcisv3Owal%2BORE8Qw5MBeQ6w2LwyEtZUVYc4UDVzD9ia3sWmeCF4ZsnyQV7DBaO6F7HAM9Lu%2FiAwcWuBwacJC%2B6IF80hzlw81g%2FmCgTjkHCqdXsNbfSAUI%2BjHvkbEdFOgy%2FUDtbpMRLATIvAft1eDk6sgxrhDi3%2BkqmtjP8008L5l748ApWtcMNCjPM0HLXprTCwru1H9OV6RphpKo90UMl%2BFvLM35YNQ8lGkyXYRoENXDRlzmQekMliJQVmD8tNDxrexvc8MwhLHbazDxpNq47I7n%2BgTfhfEK%2BXDcFk7gW1IWHgIXB1ZdfeBS9tmxJJnxidxBC0PoLqGF%2B9G15az80nV3J56Qd%2BNqY5Z9Y3xm7YhzjN26VFOBMLverb4GOqUBTUgi05iqD0uqwKI1FrglrmfM%2F5S4%2BIFNZ8mXu4h90WKA6mJ61cZLozrc4exdn5NwwvL3dMAO0F2Ab83XZ9HIYRDl3GNoidaNBzwA%2FokPEeEAu%2B5rKjQtvDy%2B8dSmCf2Jh2banBipAj87MkQr2FHu78%2BO59qZVwcTY8yDUDVABq%2FNHEHv%2BEtF2z7sQO0MIgX8HUayxtmfhlNgi82C5eVKnwHQquew&X-Amz-Signature=3e793412d2ec8bf592b5bb8d15ced2fc9980d0f9e7e89c2a45d607c772985581&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQ5HRZJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBfG0WIx%2BRFsvAt4RjsS5ZsqH%2Bk31%2FUSvhHrmiJfbsrhAiEAtR0EK0UIJXCF5vwdw0FzuA9yry2P73UIUvBKPIG%2BuVsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADiYk170JG5gpWIhyrcA885rMa1ar06CF3Ab3x1BzxcWCVJ1FYcCMrPTC4%2FY0apH8A28KnpWhmlGcNaNGySRKolrjH9JAvhMAMVc0I7EFzp1aS4ZkWGoum9nFJrWh1UKfNoqQdqfFnzOimCG%2FCEELpU7HqoXBtpGbtUMBAWmEZu24Er7xTnY1PCgV4cMBqREYcKgzIeKoaGlQbH8wrd2Sw0p2XMX6C%2BfgSjYXBKuWMwZtTKRTeaux2YgrgZR8PmQcYhFVBUZILjyJL8EE0SgiywWfBcisv3Owal%2BORE8Qw5MBeQ6w2LwyEtZUVYc4UDVzD9ia3sWmeCF4ZsnyQV7DBaO6F7HAM9Lu%2FiAwcWuBwacJC%2B6IF80hzlw81g%2FmCgTjkHCqdXsNbfSAUI%2BjHvkbEdFOgy%2FUDtbpMRLATIvAft1eDk6sgxrhDi3%2BkqmtjP8008L5l748ApWtcMNCjPM0HLXprTCwru1H9OV6RphpKo90UMl%2BFvLM35YNQ8lGkyXYRoENXDRlzmQekMliJQVmD8tNDxrexvc8MwhLHbazDxpNq47I7n%2BgTfhfEK%2BXDcFk7gW1IWHgIXB1ZdfeBS9tmxJJnxidxBC0PoLqGF%2B9G15az80nV3J56Qd%2BNqY5Z9Y3xm7YhzjN26VFOBMLverb4GOqUBTUgi05iqD0uqwKI1FrglrmfM%2F5S4%2BIFNZ8mXu4h90WKA6mJ61cZLozrc4exdn5NwwvL3dMAO0F2Ab83XZ9HIYRDl3GNoidaNBzwA%2FokPEeEAu%2B5rKjQtvDy%2B8dSmCf2Jh2banBipAj87MkQr2FHu78%2BO59qZVwcTY8yDUDVABq%2FNHEHv%2BEtF2z7sQO0MIgX8HUayxtmfhlNgi82C5eVKnwHQquew&X-Amz-Signature=e87ff508a8b2dbb22ac51b8a1dce5f1669e1d98dc4b41329b1e1c0b7f484242e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
