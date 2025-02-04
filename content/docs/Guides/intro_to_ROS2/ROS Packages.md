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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDUHIRF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAWMMYmLoHdjGBmcVXcPmYyFSuK%2F59H2lB5MdAjpgkyHAiEAzBEle3HC%2FqAeeodcbKivtSN%2FLBaNbBWWoNnVNEU0l04q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDjSqNI2EIUaBl5WOircA4FKcLnaRvmqc4OOuAOlSDftBPmfhHIhbmt8goO7fd%2BV8pXABX4Qu0f9Wk32mVpDSGRgry4fjQTJksVP8o3bWWMztVSTXExLgDY1QzMm0wcY7EGPdILI%2BZFUtbSW2tObih5YKocC3YxVyWBvA7S5S%2FKYDUUmIXR2w420MJR1nV6BC60sBxq3HGtUL6Av%2BP26fRPGJnTbhGEY8vUuEDO9D6xsf%2Bmb8LMRTI6IT%2BoTe81jLc5oxvaoD%2FiqtSlXdIm9jP9eOfXYxh8rK61EsA0C%2BLcbKMTcl2um4igsiiWWeAss5sJ1JLuuviF%2FgPapy%2BRGOC6PV8DEzN925DgGwSlQeewuYa1xU2ztzH5Lxga1xzwSeRC2Aq0XW7SXiFaVmsOIf1qdxy4Mj9FQNuib3VVWHku6T7ZVj30jl0Bc5wrPGCFgdadff%2F7gTAgQOPu5IUraqNgkd4yIDRXBQOaX5HbB3SNs5lOUyqKcvExxJMjzgTT2fH7koU5ozYFSQvIXPjrpw7QtLYKASD6FEHi7cd5acHqA5V1W4%2BXpAPjyPfpHTFb8gb4b%2FQTEOSWB01ZfsnEr9twvmgwsVhQLv8mTTiIH56fjo030PO9qOjqrPFsjEk2m2p5GB52NrO9HFY3UMI3eib0GOqUBU9SGwxvQWeHAVXYpc4K%2BekZtOkjYyLoEu%2BCt%2FbZ8VNqk5NyLmwXAag40ZLINERD3TwARVawQ2rGCrKj6DE98fjCLLyAvdy2AnemUHln3MVJDhrbMaTBArz1EIOiY6sjFmxeNgEgYTPVYG4JhS8LBGtm76ZDSCE3wKiKIzQtbFYeFA0GN%2FRtRyjEB%2BwAfaJGNEhtvRUjuOZmJD%2F%2Bi4fh2BE6tu6JZ&X-Amz-Signature=08d953e5f99e43a8850d236cb28ba5e52295045cd5582dbd7c81eef606aca79c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDUHIRF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAWMMYmLoHdjGBmcVXcPmYyFSuK%2F59H2lB5MdAjpgkyHAiEAzBEle3HC%2FqAeeodcbKivtSN%2FLBaNbBWWoNnVNEU0l04q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDjSqNI2EIUaBl5WOircA4FKcLnaRvmqc4OOuAOlSDftBPmfhHIhbmt8goO7fd%2BV8pXABX4Qu0f9Wk32mVpDSGRgry4fjQTJksVP8o3bWWMztVSTXExLgDY1QzMm0wcY7EGPdILI%2BZFUtbSW2tObih5YKocC3YxVyWBvA7S5S%2FKYDUUmIXR2w420MJR1nV6BC60sBxq3HGtUL6Av%2BP26fRPGJnTbhGEY8vUuEDO9D6xsf%2Bmb8LMRTI6IT%2BoTe81jLc5oxvaoD%2FiqtSlXdIm9jP9eOfXYxh8rK61EsA0C%2BLcbKMTcl2um4igsiiWWeAss5sJ1JLuuviF%2FgPapy%2BRGOC6PV8DEzN925DgGwSlQeewuYa1xU2ztzH5Lxga1xzwSeRC2Aq0XW7SXiFaVmsOIf1qdxy4Mj9FQNuib3VVWHku6T7ZVj30jl0Bc5wrPGCFgdadff%2F7gTAgQOPu5IUraqNgkd4yIDRXBQOaX5HbB3SNs5lOUyqKcvExxJMjzgTT2fH7koU5ozYFSQvIXPjrpw7QtLYKASD6FEHi7cd5acHqA5V1W4%2BXpAPjyPfpHTFb8gb4b%2FQTEOSWB01ZfsnEr9twvmgwsVhQLv8mTTiIH56fjo030PO9qOjqrPFsjEk2m2p5GB52NrO9HFY3UMI3eib0GOqUBU9SGwxvQWeHAVXYpc4K%2BekZtOkjYyLoEu%2BCt%2FbZ8VNqk5NyLmwXAag40ZLINERD3TwARVawQ2rGCrKj6DE98fjCLLyAvdy2AnemUHln3MVJDhrbMaTBArz1EIOiY6sjFmxeNgEgYTPVYG4JhS8LBGtm76ZDSCE3wKiKIzQtbFYeFA0GN%2FRtRyjEB%2BwAfaJGNEhtvRUjuOZmJD%2F%2Bi4fh2BE6tu6JZ&X-Amz-Signature=810993453bb72c37a78c48047b26d92aceaf387a7e62f925e02ca2d8b6de26d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDUHIRF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAWMMYmLoHdjGBmcVXcPmYyFSuK%2F59H2lB5MdAjpgkyHAiEAzBEle3HC%2FqAeeodcbKivtSN%2FLBaNbBWWoNnVNEU0l04q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDjSqNI2EIUaBl5WOircA4FKcLnaRvmqc4OOuAOlSDftBPmfhHIhbmt8goO7fd%2BV8pXABX4Qu0f9Wk32mVpDSGRgry4fjQTJksVP8o3bWWMztVSTXExLgDY1QzMm0wcY7EGPdILI%2BZFUtbSW2tObih5YKocC3YxVyWBvA7S5S%2FKYDUUmIXR2w420MJR1nV6BC60sBxq3HGtUL6Av%2BP26fRPGJnTbhGEY8vUuEDO9D6xsf%2Bmb8LMRTI6IT%2BoTe81jLc5oxvaoD%2FiqtSlXdIm9jP9eOfXYxh8rK61EsA0C%2BLcbKMTcl2um4igsiiWWeAss5sJ1JLuuviF%2FgPapy%2BRGOC6PV8DEzN925DgGwSlQeewuYa1xU2ztzH5Lxga1xzwSeRC2Aq0XW7SXiFaVmsOIf1qdxy4Mj9FQNuib3VVWHku6T7ZVj30jl0Bc5wrPGCFgdadff%2F7gTAgQOPu5IUraqNgkd4yIDRXBQOaX5HbB3SNs5lOUyqKcvExxJMjzgTT2fH7koU5ozYFSQvIXPjrpw7QtLYKASD6FEHi7cd5acHqA5V1W4%2BXpAPjyPfpHTFb8gb4b%2FQTEOSWB01ZfsnEr9twvmgwsVhQLv8mTTiIH56fjo030PO9qOjqrPFsjEk2m2p5GB52NrO9HFY3UMI3eib0GOqUBU9SGwxvQWeHAVXYpc4K%2BekZtOkjYyLoEu%2BCt%2FbZ8VNqk5NyLmwXAag40ZLINERD3TwARVawQ2rGCrKj6DE98fjCLLyAvdy2AnemUHln3MVJDhrbMaTBArz1EIOiY6sjFmxeNgEgYTPVYG4JhS8LBGtm76ZDSCE3wKiKIzQtbFYeFA0GN%2FRtRyjEB%2BwAfaJGNEhtvRUjuOZmJD%2F%2Bi4fh2BE6tu6JZ&X-Amz-Signature=7f582a413bdb026fffe4dda56ea977ba1e087378dd37d2ba9af1d0ecee9af21b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDUHIRF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAWMMYmLoHdjGBmcVXcPmYyFSuK%2F59H2lB5MdAjpgkyHAiEAzBEle3HC%2FqAeeodcbKivtSN%2FLBaNbBWWoNnVNEU0l04q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDjSqNI2EIUaBl5WOircA4FKcLnaRvmqc4OOuAOlSDftBPmfhHIhbmt8goO7fd%2BV8pXABX4Qu0f9Wk32mVpDSGRgry4fjQTJksVP8o3bWWMztVSTXExLgDY1QzMm0wcY7EGPdILI%2BZFUtbSW2tObih5YKocC3YxVyWBvA7S5S%2FKYDUUmIXR2w420MJR1nV6BC60sBxq3HGtUL6Av%2BP26fRPGJnTbhGEY8vUuEDO9D6xsf%2Bmb8LMRTI6IT%2BoTe81jLc5oxvaoD%2FiqtSlXdIm9jP9eOfXYxh8rK61EsA0C%2BLcbKMTcl2um4igsiiWWeAss5sJ1JLuuviF%2FgPapy%2BRGOC6PV8DEzN925DgGwSlQeewuYa1xU2ztzH5Lxga1xzwSeRC2Aq0XW7SXiFaVmsOIf1qdxy4Mj9FQNuib3VVWHku6T7ZVj30jl0Bc5wrPGCFgdadff%2F7gTAgQOPu5IUraqNgkd4yIDRXBQOaX5HbB3SNs5lOUyqKcvExxJMjzgTT2fH7koU5ozYFSQvIXPjrpw7QtLYKASD6FEHi7cd5acHqA5V1W4%2BXpAPjyPfpHTFb8gb4b%2FQTEOSWB01ZfsnEr9twvmgwsVhQLv8mTTiIH56fjo030PO9qOjqrPFsjEk2m2p5GB52NrO9HFY3UMI3eib0GOqUBU9SGwxvQWeHAVXYpc4K%2BekZtOkjYyLoEu%2BCt%2FbZ8VNqk5NyLmwXAag40ZLINERD3TwARVawQ2rGCrKj6DE98fjCLLyAvdy2AnemUHln3MVJDhrbMaTBArz1EIOiY6sjFmxeNgEgYTPVYG4JhS8LBGtm76ZDSCE3wKiKIzQtbFYeFA0GN%2FRtRyjEB%2BwAfaJGNEhtvRUjuOZmJD%2F%2Bi4fh2BE6tu6JZ&X-Amz-Signature=ff62503693d9a0f7ad5f8ac156ad6a1d387e18fec785bde2b626dfec942bd5be&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDUHIRF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAWMMYmLoHdjGBmcVXcPmYyFSuK%2F59H2lB5MdAjpgkyHAiEAzBEle3HC%2FqAeeodcbKivtSN%2FLBaNbBWWoNnVNEU0l04q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDjSqNI2EIUaBl5WOircA4FKcLnaRvmqc4OOuAOlSDftBPmfhHIhbmt8goO7fd%2BV8pXABX4Qu0f9Wk32mVpDSGRgry4fjQTJksVP8o3bWWMztVSTXExLgDY1QzMm0wcY7EGPdILI%2BZFUtbSW2tObih5YKocC3YxVyWBvA7S5S%2FKYDUUmIXR2w420MJR1nV6BC60sBxq3HGtUL6Av%2BP26fRPGJnTbhGEY8vUuEDO9D6xsf%2Bmb8LMRTI6IT%2BoTe81jLc5oxvaoD%2FiqtSlXdIm9jP9eOfXYxh8rK61EsA0C%2BLcbKMTcl2um4igsiiWWeAss5sJ1JLuuviF%2FgPapy%2BRGOC6PV8DEzN925DgGwSlQeewuYa1xU2ztzH5Lxga1xzwSeRC2Aq0XW7SXiFaVmsOIf1qdxy4Mj9FQNuib3VVWHku6T7ZVj30jl0Bc5wrPGCFgdadff%2F7gTAgQOPu5IUraqNgkd4yIDRXBQOaX5HbB3SNs5lOUyqKcvExxJMjzgTT2fH7koU5ozYFSQvIXPjrpw7QtLYKASD6FEHi7cd5acHqA5V1W4%2BXpAPjyPfpHTFb8gb4b%2FQTEOSWB01ZfsnEr9twvmgwsVhQLv8mTTiIH56fjo030PO9qOjqrPFsjEk2m2p5GB52NrO9HFY3UMI3eib0GOqUBU9SGwxvQWeHAVXYpc4K%2BekZtOkjYyLoEu%2BCt%2FbZ8VNqk5NyLmwXAag40ZLINERD3TwARVawQ2rGCrKj6DE98fjCLLyAvdy2AnemUHln3MVJDhrbMaTBArz1EIOiY6sjFmxeNgEgYTPVYG4JhS8LBGtm76ZDSCE3wKiKIzQtbFYeFA0GN%2FRtRyjEB%2BwAfaJGNEhtvRUjuOZmJD%2F%2Bi4fh2BE6tu6JZ&X-Amz-Signature=58b6a08d5ac74d1df897a13fc6921dc3bfaa24425b83ad6f2366c7d67304a82f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDUHIRF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAWMMYmLoHdjGBmcVXcPmYyFSuK%2F59H2lB5MdAjpgkyHAiEAzBEle3HC%2FqAeeodcbKivtSN%2FLBaNbBWWoNnVNEU0l04q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDjSqNI2EIUaBl5WOircA4FKcLnaRvmqc4OOuAOlSDftBPmfhHIhbmt8goO7fd%2BV8pXABX4Qu0f9Wk32mVpDSGRgry4fjQTJksVP8o3bWWMztVSTXExLgDY1QzMm0wcY7EGPdILI%2BZFUtbSW2tObih5YKocC3YxVyWBvA7S5S%2FKYDUUmIXR2w420MJR1nV6BC60sBxq3HGtUL6Av%2BP26fRPGJnTbhGEY8vUuEDO9D6xsf%2Bmb8LMRTI6IT%2BoTe81jLc5oxvaoD%2FiqtSlXdIm9jP9eOfXYxh8rK61EsA0C%2BLcbKMTcl2um4igsiiWWeAss5sJ1JLuuviF%2FgPapy%2BRGOC6PV8DEzN925DgGwSlQeewuYa1xU2ztzH5Lxga1xzwSeRC2Aq0XW7SXiFaVmsOIf1qdxy4Mj9FQNuib3VVWHku6T7ZVj30jl0Bc5wrPGCFgdadff%2F7gTAgQOPu5IUraqNgkd4yIDRXBQOaX5HbB3SNs5lOUyqKcvExxJMjzgTT2fH7koU5ozYFSQvIXPjrpw7QtLYKASD6FEHi7cd5acHqA5V1W4%2BXpAPjyPfpHTFb8gb4b%2FQTEOSWB01ZfsnEr9twvmgwsVhQLv8mTTiIH56fjo030PO9qOjqrPFsjEk2m2p5GB52NrO9HFY3UMI3eib0GOqUBU9SGwxvQWeHAVXYpc4K%2BekZtOkjYyLoEu%2BCt%2FbZ8VNqk5NyLmwXAag40ZLINERD3TwARVawQ2rGCrKj6DE98fjCLLyAvdy2AnemUHln3MVJDhrbMaTBArz1EIOiY6sjFmxeNgEgYTPVYG4JhS8LBGtm76ZDSCE3wKiKIzQtbFYeFA0GN%2FRtRyjEB%2BwAfaJGNEhtvRUjuOZmJD%2F%2Bi4fh2BE6tu6JZ&X-Amz-Signature=027d65a5a08da93ab0b08258111fff2dd4e7ab0a506d17a40313b022e41e4840&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDUHIRF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAWMMYmLoHdjGBmcVXcPmYyFSuK%2F59H2lB5MdAjpgkyHAiEAzBEle3HC%2FqAeeodcbKivtSN%2FLBaNbBWWoNnVNEU0l04q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDjSqNI2EIUaBl5WOircA4FKcLnaRvmqc4OOuAOlSDftBPmfhHIhbmt8goO7fd%2BV8pXABX4Qu0f9Wk32mVpDSGRgry4fjQTJksVP8o3bWWMztVSTXExLgDY1QzMm0wcY7EGPdILI%2BZFUtbSW2tObih5YKocC3YxVyWBvA7S5S%2FKYDUUmIXR2w420MJR1nV6BC60sBxq3HGtUL6Av%2BP26fRPGJnTbhGEY8vUuEDO9D6xsf%2Bmb8LMRTI6IT%2BoTe81jLc5oxvaoD%2FiqtSlXdIm9jP9eOfXYxh8rK61EsA0C%2BLcbKMTcl2um4igsiiWWeAss5sJ1JLuuviF%2FgPapy%2BRGOC6PV8DEzN925DgGwSlQeewuYa1xU2ztzH5Lxga1xzwSeRC2Aq0XW7SXiFaVmsOIf1qdxy4Mj9FQNuib3VVWHku6T7ZVj30jl0Bc5wrPGCFgdadff%2F7gTAgQOPu5IUraqNgkd4yIDRXBQOaX5HbB3SNs5lOUyqKcvExxJMjzgTT2fH7koU5ozYFSQvIXPjrpw7QtLYKASD6FEHi7cd5acHqA5V1W4%2BXpAPjyPfpHTFb8gb4b%2FQTEOSWB01ZfsnEr9twvmgwsVhQLv8mTTiIH56fjo030PO9qOjqrPFsjEk2m2p5GB52NrO9HFY3UMI3eib0GOqUBU9SGwxvQWeHAVXYpc4K%2BekZtOkjYyLoEu%2BCt%2FbZ8VNqk5NyLmwXAag40ZLINERD3TwARVawQ2rGCrKj6DE98fjCLLyAvdy2AnemUHln3MVJDhrbMaTBArz1EIOiY6sjFmxeNgEgYTPVYG4JhS8LBGtm76ZDSCE3wKiKIzQtbFYeFA0GN%2FRtRyjEB%2BwAfaJGNEhtvRUjuOZmJD%2F%2Bi4fh2BE6tu6JZ&X-Amz-Signature=e13705b34c4b47f4d265b4802462763c4db8df088907b0d359fdcdae5ec2d47e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
