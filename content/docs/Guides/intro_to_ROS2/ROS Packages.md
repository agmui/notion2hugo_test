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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7N6WO6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzQZYVjKcLVEyU0sjc1YFBDJCOWfvzKIm4YixeuDMDiAiEAnrFkXcut%2Fwaw789QBF%2F%2BI0GWONlvVUc6RE6t%2BETwjhIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEINq0BWcxyPIiQ4PyrcA4bHiR%2ByHWXJQ5KIhnx8YrDLWDCKoLnyNDvLNXBS5HCAKk5YZ%2FhCXqLV4XnIZd59lepOofhRcJ9ry4IS47ZcjDwc8sKr%2BzL5E6pwD3TWf6xj%2B96UAJwZkMSu%2BRxof0hSUJCwJuVbsqUL%2BZIhvOgrjS1w8oWOz2hvCM15%2F%2Fk6kbKN%2BglLWB21K71ZfFmE4HuariwYr9yYigFuUkxJ6HwZbrPAAw4%2Fljc%2BKMaJKeQKs44XuOCyRoMeuulOpMRFhvIMVmuOcIC%2FPdY%2BoeSuqjyXh7ZMbjP%2F5CQDrBAJPTMDQun9RSnwiat7bL5nmYDlxtNOR0GVLO%2FQnfaEd1WR%2BFYxQLG714gsYY3KzyPIttGrCzr1zpWOte90gD%2Fmz67ByH8KoMVHZ4zC9BwrYdc1ZXl9BYhXmApbF8X71uDdOvn37CO37J%2B8Ks1wcsGnrHpjUiv4p4yvnOx2Lphgkvv6STSIpKJjacxKeRl3yiHXFdOAHe8XxeJ6jR8ZE5ddv77dd5ZP2ioww1LZlpD7m%2BW30st6LFEwlXR7NHK%2BnrBQQIApnCJXpoJ%2FS%2Bsg8Tb%2BiipbmJxWvTxE%2BGTQzscPqjaLcyIqtqvqPxWtRVkisQ0uh4zXzLZjUybGBEm%2BOIyoBXcsMNrumMIGOqUBSOZzgY3ngXPFphLTo9ORhFweGG0Hdw15uCeJz3FhnA0a7jxnPmd8Wjc9X77kvLqJIhgiC93lj96WIx5CcwVVoCxdLCfeeDnsRwJdW%2F8aQOjG%2B6nufNX91GnUxZVc6RoCcM1LUrBFQDTYbEJgHE6vvqTCWpLUWWr4Er8Kv%2Fblo69bV3psCQ9NQrxO%2B7ohW%2FXhpKK13V%2FfVg88EEHjzCJ0QeqQzGCt&X-Amz-Signature=d40ca474370a2b8b4d7d81fa1cad72a36b82d290bc91daef589e9126fd1dc946&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7N6WO6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzQZYVjKcLVEyU0sjc1YFBDJCOWfvzKIm4YixeuDMDiAiEAnrFkXcut%2Fwaw789QBF%2F%2BI0GWONlvVUc6RE6t%2BETwjhIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEINq0BWcxyPIiQ4PyrcA4bHiR%2ByHWXJQ5KIhnx8YrDLWDCKoLnyNDvLNXBS5HCAKk5YZ%2FhCXqLV4XnIZd59lepOofhRcJ9ry4IS47ZcjDwc8sKr%2BzL5E6pwD3TWf6xj%2B96UAJwZkMSu%2BRxof0hSUJCwJuVbsqUL%2BZIhvOgrjS1w8oWOz2hvCM15%2F%2Fk6kbKN%2BglLWB21K71ZfFmE4HuariwYr9yYigFuUkxJ6HwZbrPAAw4%2Fljc%2BKMaJKeQKs44XuOCyRoMeuulOpMRFhvIMVmuOcIC%2FPdY%2BoeSuqjyXh7ZMbjP%2F5CQDrBAJPTMDQun9RSnwiat7bL5nmYDlxtNOR0GVLO%2FQnfaEd1WR%2BFYxQLG714gsYY3KzyPIttGrCzr1zpWOte90gD%2Fmz67ByH8KoMVHZ4zC9BwrYdc1ZXl9BYhXmApbF8X71uDdOvn37CO37J%2B8Ks1wcsGnrHpjUiv4p4yvnOx2Lphgkvv6STSIpKJjacxKeRl3yiHXFdOAHe8XxeJ6jR8ZE5ddv77dd5ZP2ioww1LZlpD7m%2BW30st6LFEwlXR7NHK%2BnrBQQIApnCJXpoJ%2FS%2Bsg8Tb%2BiipbmJxWvTxE%2BGTQzscPqjaLcyIqtqvqPxWtRVkisQ0uh4zXzLZjUybGBEm%2BOIyoBXcsMNrumMIGOqUBSOZzgY3ngXPFphLTo9ORhFweGG0Hdw15uCeJz3FhnA0a7jxnPmd8Wjc9X77kvLqJIhgiC93lj96WIx5CcwVVoCxdLCfeeDnsRwJdW%2F8aQOjG%2B6nufNX91GnUxZVc6RoCcM1LUrBFQDTYbEJgHE6vvqTCWpLUWWr4Er8Kv%2Fblo69bV3psCQ9NQrxO%2B7ohW%2FXhpKK13V%2FfVg88EEHjzCJ0QeqQzGCt&X-Amz-Signature=87c68da6199296285f514266aa47f77d452c52eca6d543fcee3ab4af27d9242f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7N6WO6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzQZYVjKcLVEyU0sjc1YFBDJCOWfvzKIm4YixeuDMDiAiEAnrFkXcut%2Fwaw789QBF%2F%2BI0GWONlvVUc6RE6t%2BETwjhIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEINq0BWcxyPIiQ4PyrcA4bHiR%2ByHWXJQ5KIhnx8YrDLWDCKoLnyNDvLNXBS5HCAKk5YZ%2FhCXqLV4XnIZd59lepOofhRcJ9ry4IS47ZcjDwc8sKr%2BzL5E6pwD3TWf6xj%2B96UAJwZkMSu%2BRxof0hSUJCwJuVbsqUL%2BZIhvOgrjS1w8oWOz2hvCM15%2F%2Fk6kbKN%2BglLWB21K71ZfFmE4HuariwYr9yYigFuUkxJ6HwZbrPAAw4%2Fljc%2BKMaJKeQKs44XuOCyRoMeuulOpMRFhvIMVmuOcIC%2FPdY%2BoeSuqjyXh7ZMbjP%2F5CQDrBAJPTMDQun9RSnwiat7bL5nmYDlxtNOR0GVLO%2FQnfaEd1WR%2BFYxQLG714gsYY3KzyPIttGrCzr1zpWOte90gD%2Fmz67ByH8KoMVHZ4zC9BwrYdc1ZXl9BYhXmApbF8X71uDdOvn37CO37J%2B8Ks1wcsGnrHpjUiv4p4yvnOx2Lphgkvv6STSIpKJjacxKeRl3yiHXFdOAHe8XxeJ6jR8ZE5ddv77dd5ZP2ioww1LZlpD7m%2BW30st6LFEwlXR7NHK%2BnrBQQIApnCJXpoJ%2FS%2Bsg8Tb%2BiipbmJxWvTxE%2BGTQzscPqjaLcyIqtqvqPxWtRVkisQ0uh4zXzLZjUybGBEm%2BOIyoBXcsMNrumMIGOqUBSOZzgY3ngXPFphLTo9ORhFweGG0Hdw15uCeJz3FhnA0a7jxnPmd8Wjc9X77kvLqJIhgiC93lj96WIx5CcwVVoCxdLCfeeDnsRwJdW%2F8aQOjG%2B6nufNX91GnUxZVc6RoCcM1LUrBFQDTYbEJgHE6vvqTCWpLUWWr4Er8Kv%2Fblo69bV3psCQ9NQrxO%2B7ohW%2FXhpKK13V%2FfVg88EEHjzCJ0QeqQzGCt&X-Amz-Signature=c3a580900756673d2f3a135416467280e99bacbec05ecf910201a9b29163df4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7N6WO6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzQZYVjKcLVEyU0sjc1YFBDJCOWfvzKIm4YixeuDMDiAiEAnrFkXcut%2Fwaw789QBF%2F%2BI0GWONlvVUc6RE6t%2BETwjhIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEINq0BWcxyPIiQ4PyrcA4bHiR%2ByHWXJQ5KIhnx8YrDLWDCKoLnyNDvLNXBS5HCAKk5YZ%2FhCXqLV4XnIZd59lepOofhRcJ9ry4IS47ZcjDwc8sKr%2BzL5E6pwD3TWf6xj%2B96UAJwZkMSu%2BRxof0hSUJCwJuVbsqUL%2BZIhvOgrjS1w8oWOz2hvCM15%2F%2Fk6kbKN%2BglLWB21K71ZfFmE4HuariwYr9yYigFuUkxJ6HwZbrPAAw4%2Fljc%2BKMaJKeQKs44XuOCyRoMeuulOpMRFhvIMVmuOcIC%2FPdY%2BoeSuqjyXh7ZMbjP%2F5CQDrBAJPTMDQun9RSnwiat7bL5nmYDlxtNOR0GVLO%2FQnfaEd1WR%2BFYxQLG714gsYY3KzyPIttGrCzr1zpWOte90gD%2Fmz67ByH8KoMVHZ4zC9BwrYdc1ZXl9BYhXmApbF8X71uDdOvn37CO37J%2B8Ks1wcsGnrHpjUiv4p4yvnOx2Lphgkvv6STSIpKJjacxKeRl3yiHXFdOAHe8XxeJ6jR8ZE5ddv77dd5ZP2ioww1LZlpD7m%2BW30st6LFEwlXR7NHK%2BnrBQQIApnCJXpoJ%2FS%2Bsg8Tb%2BiipbmJxWvTxE%2BGTQzscPqjaLcyIqtqvqPxWtRVkisQ0uh4zXzLZjUybGBEm%2BOIyoBXcsMNrumMIGOqUBSOZzgY3ngXPFphLTo9ORhFweGG0Hdw15uCeJz3FhnA0a7jxnPmd8Wjc9X77kvLqJIhgiC93lj96WIx5CcwVVoCxdLCfeeDnsRwJdW%2F8aQOjG%2B6nufNX91GnUxZVc6RoCcM1LUrBFQDTYbEJgHE6vvqTCWpLUWWr4Er8Kv%2Fblo69bV3psCQ9NQrxO%2B7ohW%2FXhpKK13V%2FfVg88EEHjzCJ0QeqQzGCt&X-Amz-Signature=72c7d9111e603c60ee273bbfdf3302fa6e67be9a284c72ae1900a6a2cdf9004a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7N6WO6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzQZYVjKcLVEyU0sjc1YFBDJCOWfvzKIm4YixeuDMDiAiEAnrFkXcut%2Fwaw789QBF%2F%2BI0GWONlvVUc6RE6t%2BETwjhIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEINq0BWcxyPIiQ4PyrcA4bHiR%2ByHWXJQ5KIhnx8YrDLWDCKoLnyNDvLNXBS5HCAKk5YZ%2FhCXqLV4XnIZd59lepOofhRcJ9ry4IS47ZcjDwc8sKr%2BzL5E6pwD3TWf6xj%2B96UAJwZkMSu%2BRxof0hSUJCwJuVbsqUL%2BZIhvOgrjS1w8oWOz2hvCM15%2F%2Fk6kbKN%2BglLWB21K71ZfFmE4HuariwYr9yYigFuUkxJ6HwZbrPAAw4%2Fljc%2BKMaJKeQKs44XuOCyRoMeuulOpMRFhvIMVmuOcIC%2FPdY%2BoeSuqjyXh7ZMbjP%2F5CQDrBAJPTMDQun9RSnwiat7bL5nmYDlxtNOR0GVLO%2FQnfaEd1WR%2BFYxQLG714gsYY3KzyPIttGrCzr1zpWOte90gD%2Fmz67ByH8KoMVHZ4zC9BwrYdc1ZXl9BYhXmApbF8X71uDdOvn37CO37J%2B8Ks1wcsGnrHpjUiv4p4yvnOx2Lphgkvv6STSIpKJjacxKeRl3yiHXFdOAHe8XxeJ6jR8ZE5ddv77dd5ZP2ioww1LZlpD7m%2BW30st6LFEwlXR7NHK%2BnrBQQIApnCJXpoJ%2FS%2Bsg8Tb%2BiipbmJxWvTxE%2BGTQzscPqjaLcyIqtqvqPxWtRVkisQ0uh4zXzLZjUybGBEm%2BOIyoBXcsMNrumMIGOqUBSOZzgY3ngXPFphLTo9ORhFweGG0Hdw15uCeJz3FhnA0a7jxnPmd8Wjc9X77kvLqJIhgiC93lj96WIx5CcwVVoCxdLCfeeDnsRwJdW%2F8aQOjG%2B6nufNX91GnUxZVc6RoCcM1LUrBFQDTYbEJgHE6vvqTCWpLUWWr4Er8Kv%2Fblo69bV3psCQ9NQrxO%2B7ohW%2FXhpKK13V%2FfVg88EEHjzCJ0QeqQzGCt&X-Amz-Signature=730d0270d4ce6d4166ae28c1dccf810765973ca9e157a5cf2b227ba9cf0d8353&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7N6WO6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzQZYVjKcLVEyU0sjc1YFBDJCOWfvzKIm4YixeuDMDiAiEAnrFkXcut%2Fwaw789QBF%2F%2BI0GWONlvVUc6RE6t%2BETwjhIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEINq0BWcxyPIiQ4PyrcA4bHiR%2ByHWXJQ5KIhnx8YrDLWDCKoLnyNDvLNXBS5HCAKk5YZ%2FhCXqLV4XnIZd59lepOofhRcJ9ry4IS47ZcjDwc8sKr%2BzL5E6pwD3TWf6xj%2B96UAJwZkMSu%2BRxof0hSUJCwJuVbsqUL%2BZIhvOgrjS1w8oWOz2hvCM15%2F%2Fk6kbKN%2BglLWB21K71ZfFmE4HuariwYr9yYigFuUkxJ6HwZbrPAAw4%2Fljc%2BKMaJKeQKs44XuOCyRoMeuulOpMRFhvIMVmuOcIC%2FPdY%2BoeSuqjyXh7ZMbjP%2F5CQDrBAJPTMDQun9RSnwiat7bL5nmYDlxtNOR0GVLO%2FQnfaEd1WR%2BFYxQLG714gsYY3KzyPIttGrCzr1zpWOte90gD%2Fmz67ByH8KoMVHZ4zC9BwrYdc1ZXl9BYhXmApbF8X71uDdOvn37CO37J%2B8Ks1wcsGnrHpjUiv4p4yvnOx2Lphgkvv6STSIpKJjacxKeRl3yiHXFdOAHe8XxeJ6jR8ZE5ddv77dd5ZP2ioww1LZlpD7m%2BW30st6LFEwlXR7NHK%2BnrBQQIApnCJXpoJ%2FS%2Bsg8Tb%2BiipbmJxWvTxE%2BGTQzscPqjaLcyIqtqvqPxWtRVkisQ0uh4zXzLZjUybGBEm%2BOIyoBXcsMNrumMIGOqUBSOZzgY3ngXPFphLTo9ORhFweGG0Hdw15uCeJz3FhnA0a7jxnPmd8Wjc9X77kvLqJIhgiC93lj96WIx5CcwVVoCxdLCfeeDnsRwJdW%2F8aQOjG%2B6nufNX91GnUxZVc6RoCcM1LUrBFQDTYbEJgHE6vvqTCWpLUWWr4Er8Kv%2Fblo69bV3psCQ9NQrxO%2B7ohW%2FXhpKK13V%2FfVg88EEHjzCJ0QeqQzGCt&X-Amz-Signature=0de4f18845f1584d6e6713e4cf7126fb9d9055f9c0accbebb835d82bd8f6ae44&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7N6WO6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzQZYVjKcLVEyU0sjc1YFBDJCOWfvzKIm4YixeuDMDiAiEAnrFkXcut%2Fwaw789QBF%2F%2BI0GWONlvVUc6RE6t%2BETwjhIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEINq0BWcxyPIiQ4PyrcA4bHiR%2ByHWXJQ5KIhnx8YrDLWDCKoLnyNDvLNXBS5HCAKk5YZ%2FhCXqLV4XnIZd59lepOofhRcJ9ry4IS47ZcjDwc8sKr%2BzL5E6pwD3TWf6xj%2B96UAJwZkMSu%2BRxof0hSUJCwJuVbsqUL%2BZIhvOgrjS1w8oWOz2hvCM15%2F%2Fk6kbKN%2BglLWB21K71ZfFmE4HuariwYr9yYigFuUkxJ6HwZbrPAAw4%2Fljc%2BKMaJKeQKs44XuOCyRoMeuulOpMRFhvIMVmuOcIC%2FPdY%2BoeSuqjyXh7ZMbjP%2F5CQDrBAJPTMDQun9RSnwiat7bL5nmYDlxtNOR0GVLO%2FQnfaEd1WR%2BFYxQLG714gsYY3KzyPIttGrCzr1zpWOte90gD%2Fmz67ByH8KoMVHZ4zC9BwrYdc1ZXl9BYhXmApbF8X71uDdOvn37CO37J%2B8Ks1wcsGnrHpjUiv4p4yvnOx2Lphgkvv6STSIpKJjacxKeRl3yiHXFdOAHe8XxeJ6jR8ZE5ddv77dd5ZP2ioww1LZlpD7m%2BW30st6LFEwlXR7NHK%2BnrBQQIApnCJXpoJ%2FS%2Bsg8Tb%2BiipbmJxWvTxE%2BGTQzscPqjaLcyIqtqvqPxWtRVkisQ0uh4zXzLZjUybGBEm%2BOIyoBXcsMNrumMIGOqUBSOZzgY3ngXPFphLTo9ORhFweGG0Hdw15uCeJz3FhnA0a7jxnPmd8Wjc9X77kvLqJIhgiC93lj96WIx5CcwVVoCxdLCfeeDnsRwJdW%2F8aQOjG%2B6nufNX91GnUxZVc6RoCcM1LUrBFQDTYbEJgHE6vvqTCWpLUWWr4Er8Kv%2Fblo69bV3psCQ9NQrxO%2B7ohW%2FXhpKK13V%2FfVg88EEHjzCJ0QeqQzGCt&X-Amz-Signature=bd057df22db365fed3564d23ccdb736df3094ae0b8241da7fd99d85a7f8ef1b2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
