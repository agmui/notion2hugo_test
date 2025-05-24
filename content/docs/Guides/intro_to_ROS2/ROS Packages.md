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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKKS5DY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDi6bLaIH6F3zuEkNrHca%2Bdh405amLCXDGTol4almRMaAiEAtabyf5EkgZPWuiRJxCI%2FEDt5cdtidDK0ee5ljObAA4Aq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDJ%2BtNOyAqUrkxZ4ICrcA1UWUnjUVZKOW%2Fc%2BMhw4j%2Buca2ZuiYINqq%2FEt%2FTKRjhQskSUUe8%2BiqW7aLIUhJX9SblyHjoXxrf8cQcz4ecxJmdvjiDPa0AZ7%2BEBLMKJ7%2Fji3ZbQ%2Bowoi8CLjEb%2B9X4684G9lwCaIyynhm8HecxDmYwc3Q9A0EztkyOXbjEnuMrvqVuwcFv3%2BFjq5zw99oSe7OE89GgNTDDdh5sm83Hoze%2F4YcDJjDZiRwOmqkG%2FwSphoKlt2m7S7aSej29YJD5xKrnh1Imi1knbOklR4KFEo9FlDEdbxA%2Fa0cGdWLKNFnBzd3Db7u8yqct%2BQTaATYfuZgBJHjm05sfUktWWrHB6cdXAoikKYf1UTRQQWH9XxEdosVpsuAdaffabqgQwHZYzExkwv30mRCmulPtZViGcPHMH%2BNKIXy5F7XuRrSg3WF5gNZLAuq2dsYvQleQoA2bOweX2UAzFyvfnigp4l2OMNwr9jd6LGnGfI%2F76739mudgVZFzbmzR5fWDxjg0AjNFobUomyBM6x0oh75qPEU5vt7DxT24PV0Gm2ftM%2B4TfGM1mtjcHh4fgyDyAU5HpVdkIK5xQ%2FnL4J60HizYE7mWSYDl%2FnCMUTUs61FSwj6Q6GG5bU8keN090dD%2F6BrBSMOicxsEGOqUBgRrwTZgId2NSikarYlwe98pLdbLpHXgkBJA6krVotV9FuoZaPJiDeaWeWVwkFyuV0RLLuAq3gpikLfzUv1hrd8hqa2rhz9YVNpsTWY3wSYPST83nevRScvIuUe0fFmr7VsoeW1mt%2F%2BC%2Ba9TLN3NEVebHcwxbwNQx0xsBwe9cKRSpqX%2FVLc%2B0kxWSGQridLxAslIK84cWHAGSPCv5D%2B%2F%2FN8AdBtpx&X-Amz-Signature=96b1faccbfae1b8602d6b0a50936b767e1ba5b74fae54bda6f9d1e78f720e0ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKKS5DY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDi6bLaIH6F3zuEkNrHca%2Bdh405amLCXDGTol4almRMaAiEAtabyf5EkgZPWuiRJxCI%2FEDt5cdtidDK0ee5ljObAA4Aq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDJ%2BtNOyAqUrkxZ4ICrcA1UWUnjUVZKOW%2Fc%2BMhw4j%2Buca2ZuiYINqq%2FEt%2FTKRjhQskSUUe8%2BiqW7aLIUhJX9SblyHjoXxrf8cQcz4ecxJmdvjiDPa0AZ7%2BEBLMKJ7%2Fji3ZbQ%2Bowoi8CLjEb%2B9X4684G9lwCaIyynhm8HecxDmYwc3Q9A0EztkyOXbjEnuMrvqVuwcFv3%2BFjq5zw99oSe7OE89GgNTDDdh5sm83Hoze%2F4YcDJjDZiRwOmqkG%2FwSphoKlt2m7S7aSej29YJD5xKrnh1Imi1knbOklR4KFEo9FlDEdbxA%2Fa0cGdWLKNFnBzd3Db7u8yqct%2BQTaATYfuZgBJHjm05sfUktWWrHB6cdXAoikKYf1UTRQQWH9XxEdosVpsuAdaffabqgQwHZYzExkwv30mRCmulPtZViGcPHMH%2BNKIXy5F7XuRrSg3WF5gNZLAuq2dsYvQleQoA2bOweX2UAzFyvfnigp4l2OMNwr9jd6LGnGfI%2F76739mudgVZFzbmzR5fWDxjg0AjNFobUomyBM6x0oh75qPEU5vt7DxT24PV0Gm2ftM%2B4TfGM1mtjcHh4fgyDyAU5HpVdkIK5xQ%2FnL4J60HizYE7mWSYDl%2FnCMUTUs61FSwj6Q6GG5bU8keN090dD%2F6BrBSMOicxsEGOqUBgRrwTZgId2NSikarYlwe98pLdbLpHXgkBJA6krVotV9FuoZaPJiDeaWeWVwkFyuV0RLLuAq3gpikLfzUv1hrd8hqa2rhz9YVNpsTWY3wSYPST83nevRScvIuUe0fFmr7VsoeW1mt%2F%2BC%2Ba9TLN3NEVebHcwxbwNQx0xsBwe9cKRSpqX%2FVLc%2B0kxWSGQridLxAslIK84cWHAGSPCv5D%2B%2F%2FN8AdBtpx&X-Amz-Signature=b0929935b3f1ebf8338da7c4ff7a3b9677ac58cbf50630d3690a801d6b66bff3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKKS5DY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDi6bLaIH6F3zuEkNrHca%2Bdh405amLCXDGTol4almRMaAiEAtabyf5EkgZPWuiRJxCI%2FEDt5cdtidDK0ee5ljObAA4Aq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDJ%2BtNOyAqUrkxZ4ICrcA1UWUnjUVZKOW%2Fc%2BMhw4j%2Buca2ZuiYINqq%2FEt%2FTKRjhQskSUUe8%2BiqW7aLIUhJX9SblyHjoXxrf8cQcz4ecxJmdvjiDPa0AZ7%2BEBLMKJ7%2Fji3ZbQ%2Bowoi8CLjEb%2B9X4684G9lwCaIyynhm8HecxDmYwc3Q9A0EztkyOXbjEnuMrvqVuwcFv3%2BFjq5zw99oSe7OE89GgNTDDdh5sm83Hoze%2F4YcDJjDZiRwOmqkG%2FwSphoKlt2m7S7aSej29YJD5xKrnh1Imi1knbOklR4KFEo9FlDEdbxA%2Fa0cGdWLKNFnBzd3Db7u8yqct%2BQTaATYfuZgBJHjm05sfUktWWrHB6cdXAoikKYf1UTRQQWH9XxEdosVpsuAdaffabqgQwHZYzExkwv30mRCmulPtZViGcPHMH%2BNKIXy5F7XuRrSg3WF5gNZLAuq2dsYvQleQoA2bOweX2UAzFyvfnigp4l2OMNwr9jd6LGnGfI%2F76739mudgVZFzbmzR5fWDxjg0AjNFobUomyBM6x0oh75qPEU5vt7DxT24PV0Gm2ftM%2B4TfGM1mtjcHh4fgyDyAU5HpVdkIK5xQ%2FnL4J60HizYE7mWSYDl%2FnCMUTUs61FSwj6Q6GG5bU8keN090dD%2F6BrBSMOicxsEGOqUBgRrwTZgId2NSikarYlwe98pLdbLpHXgkBJA6krVotV9FuoZaPJiDeaWeWVwkFyuV0RLLuAq3gpikLfzUv1hrd8hqa2rhz9YVNpsTWY3wSYPST83nevRScvIuUe0fFmr7VsoeW1mt%2F%2BC%2Ba9TLN3NEVebHcwxbwNQx0xsBwe9cKRSpqX%2FVLc%2B0kxWSGQridLxAslIK84cWHAGSPCv5D%2B%2F%2FN8AdBtpx&X-Amz-Signature=70870eafd76ca7b02c01aead41de710af5e2c6acbe8cc8ba1e987f253139295f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKKS5DY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDi6bLaIH6F3zuEkNrHca%2Bdh405amLCXDGTol4almRMaAiEAtabyf5EkgZPWuiRJxCI%2FEDt5cdtidDK0ee5ljObAA4Aq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDJ%2BtNOyAqUrkxZ4ICrcA1UWUnjUVZKOW%2Fc%2BMhw4j%2Buca2ZuiYINqq%2FEt%2FTKRjhQskSUUe8%2BiqW7aLIUhJX9SblyHjoXxrf8cQcz4ecxJmdvjiDPa0AZ7%2BEBLMKJ7%2Fji3ZbQ%2Bowoi8CLjEb%2B9X4684G9lwCaIyynhm8HecxDmYwc3Q9A0EztkyOXbjEnuMrvqVuwcFv3%2BFjq5zw99oSe7OE89GgNTDDdh5sm83Hoze%2F4YcDJjDZiRwOmqkG%2FwSphoKlt2m7S7aSej29YJD5xKrnh1Imi1knbOklR4KFEo9FlDEdbxA%2Fa0cGdWLKNFnBzd3Db7u8yqct%2BQTaATYfuZgBJHjm05sfUktWWrHB6cdXAoikKYf1UTRQQWH9XxEdosVpsuAdaffabqgQwHZYzExkwv30mRCmulPtZViGcPHMH%2BNKIXy5F7XuRrSg3WF5gNZLAuq2dsYvQleQoA2bOweX2UAzFyvfnigp4l2OMNwr9jd6LGnGfI%2F76739mudgVZFzbmzR5fWDxjg0AjNFobUomyBM6x0oh75qPEU5vt7DxT24PV0Gm2ftM%2B4TfGM1mtjcHh4fgyDyAU5HpVdkIK5xQ%2FnL4J60HizYE7mWSYDl%2FnCMUTUs61FSwj6Q6GG5bU8keN090dD%2F6BrBSMOicxsEGOqUBgRrwTZgId2NSikarYlwe98pLdbLpHXgkBJA6krVotV9FuoZaPJiDeaWeWVwkFyuV0RLLuAq3gpikLfzUv1hrd8hqa2rhz9YVNpsTWY3wSYPST83nevRScvIuUe0fFmr7VsoeW1mt%2F%2BC%2Ba9TLN3NEVebHcwxbwNQx0xsBwe9cKRSpqX%2FVLc%2B0kxWSGQridLxAslIK84cWHAGSPCv5D%2B%2F%2FN8AdBtpx&X-Amz-Signature=693fd10d9e36486ea77ad7bca634dbabb0ac44975412e6477fd97ff87c36bb00&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKKS5DY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDi6bLaIH6F3zuEkNrHca%2Bdh405amLCXDGTol4almRMaAiEAtabyf5EkgZPWuiRJxCI%2FEDt5cdtidDK0ee5ljObAA4Aq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDJ%2BtNOyAqUrkxZ4ICrcA1UWUnjUVZKOW%2Fc%2BMhw4j%2Buca2ZuiYINqq%2FEt%2FTKRjhQskSUUe8%2BiqW7aLIUhJX9SblyHjoXxrf8cQcz4ecxJmdvjiDPa0AZ7%2BEBLMKJ7%2Fji3ZbQ%2Bowoi8CLjEb%2B9X4684G9lwCaIyynhm8HecxDmYwc3Q9A0EztkyOXbjEnuMrvqVuwcFv3%2BFjq5zw99oSe7OE89GgNTDDdh5sm83Hoze%2F4YcDJjDZiRwOmqkG%2FwSphoKlt2m7S7aSej29YJD5xKrnh1Imi1knbOklR4KFEo9FlDEdbxA%2Fa0cGdWLKNFnBzd3Db7u8yqct%2BQTaATYfuZgBJHjm05sfUktWWrHB6cdXAoikKYf1UTRQQWH9XxEdosVpsuAdaffabqgQwHZYzExkwv30mRCmulPtZViGcPHMH%2BNKIXy5F7XuRrSg3WF5gNZLAuq2dsYvQleQoA2bOweX2UAzFyvfnigp4l2OMNwr9jd6LGnGfI%2F76739mudgVZFzbmzR5fWDxjg0AjNFobUomyBM6x0oh75qPEU5vt7DxT24PV0Gm2ftM%2B4TfGM1mtjcHh4fgyDyAU5HpVdkIK5xQ%2FnL4J60HizYE7mWSYDl%2FnCMUTUs61FSwj6Q6GG5bU8keN090dD%2F6BrBSMOicxsEGOqUBgRrwTZgId2NSikarYlwe98pLdbLpHXgkBJA6krVotV9FuoZaPJiDeaWeWVwkFyuV0RLLuAq3gpikLfzUv1hrd8hqa2rhz9YVNpsTWY3wSYPST83nevRScvIuUe0fFmr7VsoeW1mt%2F%2BC%2Ba9TLN3NEVebHcwxbwNQx0xsBwe9cKRSpqX%2FVLc%2B0kxWSGQridLxAslIK84cWHAGSPCv5D%2B%2F%2FN8AdBtpx&X-Amz-Signature=5d66d98a82304e35b2287bd29bb41601498ded9dfff3b58fceb6ad63b0b1c822&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKKS5DY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDi6bLaIH6F3zuEkNrHca%2Bdh405amLCXDGTol4almRMaAiEAtabyf5EkgZPWuiRJxCI%2FEDt5cdtidDK0ee5ljObAA4Aq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDJ%2BtNOyAqUrkxZ4ICrcA1UWUnjUVZKOW%2Fc%2BMhw4j%2Buca2ZuiYINqq%2FEt%2FTKRjhQskSUUe8%2BiqW7aLIUhJX9SblyHjoXxrf8cQcz4ecxJmdvjiDPa0AZ7%2BEBLMKJ7%2Fji3ZbQ%2Bowoi8CLjEb%2B9X4684G9lwCaIyynhm8HecxDmYwc3Q9A0EztkyOXbjEnuMrvqVuwcFv3%2BFjq5zw99oSe7OE89GgNTDDdh5sm83Hoze%2F4YcDJjDZiRwOmqkG%2FwSphoKlt2m7S7aSej29YJD5xKrnh1Imi1knbOklR4KFEo9FlDEdbxA%2Fa0cGdWLKNFnBzd3Db7u8yqct%2BQTaATYfuZgBJHjm05sfUktWWrHB6cdXAoikKYf1UTRQQWH9XxEdosVpsuAdaffabqgQwHZYzExkwv30mRCmulPtZViGcPHMH%2BNKIXy5F7XuRrSg3WF5gNZLAuq2dsYvQleQoA2bOweX2UAzFyvfnigp4l2OMNwr9jd6LGnGfI%2F76739mudgVZFzbmzR5fWDxjg0AjNFobUomyBM6x0oh75qPEU5vt7DxT24PV0Gm2ftM%2B4TfGM1mtjcHh4fgyDyAU5HpVdkIK5xQ%2FnL4J60HizYE7mWSYDl%2FnCMUTUs61FSwj6Q6GG5bU8keN090dD%2F6BrBSMOicxsEGOqUBgRrwTZgId2NSikarYlwe98pLdbLpHXgkBJA6krVotV9FuoZaPJiDeaWeWVwkFyuV0RLLuAq3gpikLfzUv1hrd8hqa2rhz9YVNpsTWY3wSYPST83nevRScvIuUe0fFmr7VsoeW1mt%2F%2BC%2Ba9TLN3NEVebHcwxbwNQx0xsBwe9cKRSpqX%2FVLc%2B0kxWSGQridLxAslIK84cWHAGSPCv5D%2B%2F%2FN8AdBtpx&X-Amz-Signature=1799ed1032e9370f4b074347b1d63268fd94dfa85586a211341fd6e36e83e477&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKKS5DY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDi6bLaIH6F3zuEkNrHca%2Bdh405amLCXDGTol4almRMaAiEAtabyf5EkgZPWuiRJxCI%2FEDt5cdtidDK0ee5ljObAA4Aq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDJ%2BtNOyAqUrkxZ4ICrcA1UWUnjUVZKOW%2Fc%2BMhw4j%2Buca2ZuiYINqq%2FEt%2FTKRjhQskSUUe8%2BiqW7aLIUhJX9SblyHjoXxrf8cQcz4ecxJmdvjiDPa0AZ7%2BEBLMKJ7%2Fji3ZbQ%2Bowoi8CLjEb%2B9X4684G9lwCaIyynhm8HecxDmYwc3Q9A0EztkyOXbjEnuMrvqVuwcFv3%2BFjq5zw99oSe7OE89GgNTDDdh5sm83Hoze%2F4YcDJjDZiRwOmqkG%2FwSphoKlt2m7S7aSej29YJD5xKrnh1Imi1knbOklR4KFEo9FlDEdbxA%2Fa0cGdWLKNFnBzd3Db7u8yqct%2BQTaATYfuZgBJHjm05sfUktWWrHB6cdXAoikKYf1UTRQQWH9XxEdosVpsuAdaffabqgQwHZYzExkwv30mRCmulPtZViGcPHMH%2BNKIXy5F7XuRrSg3WF5gNZLAuq2dsYvQleQoA2bOweX2UAzFyvfnigp4l2OMNwr9jd6LGnGfI%2F76739mudgVZFzbmzR5fWDxjg0AjNFobUomyBM6x0oh75qPEU5vt7DxT24PV0Gm2ftM%2B4TfGM1mtjcHh4fgyDyAU5HpVdkIK5xQ%2FnL4J60HizYE7mWSYDl%2FnCMUTUs61FSwj6Q6GG5bU8keN090dD%2F6BrBSMOicxsEGOqUBgRrwTZgId2NSikarYlwe98pLdbLpHXgkBJA6krVotV9FuoZaPJiDeaWeWVwkFyuV0RLLuAq3gpikLfzUv1hrd8hqa2rhz9YVNpsTWY3wSYPST83nevRScvIuUe0fFmr7VsoeW1mt%2F%2BC%2Ba9TLN3NEVebHcwxbwNQx0xsBwe9cKRSpqX%2FVLc%2B0kxWSGQridLxAslIK84cWHAGSPCv5D%2B%2F%2FN8AdBtpx&X-Amz-Signature=e7698a73bcc51ec1d6e9f6823acc428f570108912b55cb0ec1dbce8e5430bfb1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
