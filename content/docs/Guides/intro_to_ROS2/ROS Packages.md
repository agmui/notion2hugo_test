---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU564LZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm9VUvXuo%2FGNXiim5MGQZX2f%2BlDsnZsArtqPNnaqfoRAiEAvV2FHEV4%2BORLxZ%2F4NeIs3gyD%2B4j2Q9v7FIp3zLMkCkIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBQiGGlZcyRb9Bi%2FCrcA0hGRP0JWI%2BRcaIqy1C5tpho1N8qS27a4JRERcXnua3h1ibSaWwFipbEoXT0Va6cYvedBqhh3RREC3wdS7vUJUSStFCUfKp1Xu3VKZ0zTXeL3HLe1%2F%2F%2B80XNZ%2BAX%2FmfrWPznI%2BLCplUuh7vYFuQazTcY4oNaLey8x4E43p4iI7qWz0bZSRzMqJdxSG7J%2FmFsDruVf%2Bb1uBoJB%2BxQyeAweqVDYU0n%2FaNPXRR%2BX1DiRSTtW2eAHtUn4MvN6tPFgA8RJASQdAxiHFToorZWO47gXA%2Bo31rp9YlfekqKa2XPbzgG4538mZL2SRdxfytDerwQeXg7s1XNs3gWjGh67RVtjF2TDcmmQVcLJa887fYY02%2BDOIU2jYVp8BbcBZOO7PvSWBiK0lOVO2%2BVBimhSWdQQ%2BBgT8d9Rfdwvo6w5MyEe4U0wLHqRY5yLp0JMfm8W26p1AnIlzq%2FBCo4CTm%2BH3yR3NyKiOsIRfWrQ7M9JNlCgnSqlzvXNt0YRewC9auzV%2FBU60olsz3AVxAle%2FK4Afok1wy2fYoJ7KCJrWs65aCilvbwegy3F9os7awtNCl%2BoQ4xffol%2FNzE3NAaIkrTze%2Bkc501pF%2FvDz6vGtU7huKuWQm%2F7emEP37Jxterxj0WMIb5v8MGOqUBQgiS%2BxjyD2OVgagzj7QN5InSNYSFGughVvHG0VnIXXiob93sm7bn1hA1KfqjRcWO4SlRSod%2FBxaDVPePy3cD5KACp4xlaOAgknkvABbv20JDw%2B8bCz6U4EX%2FOLq2MjRbuX8gnyVdsPVBATiWeOKNYG39ZPsCTWDOVNCexhEJp9ErZIwi0fxAG%2BXXJcDIpSfBk%2BdEgEvNOnGJo%2BN10Kn9Q2i%2BF2fG&X-Amz-Signature=e9e3305cfdd7e6c5ebbd8a69318572dd35096f728a98c745989d458a89beddd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU564LZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm9VUvXuo%2FGNXiim5MGQZX2f%2BlDsnZsArtqPNnaqfoRAiEAvV2FHEV4%2BORLxZ%2F4NeIs3gyD%2B4j2Q9v7FIp3zLMkCkIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBQiGGlZcyRb9Bi%2FCrcA0hGRP0JWI%2BRcaIqy1C5tpho1N8qS27a4JRERcXnua3h1ibSaWwFipbEoXT0Va6cYvedBqhh3RREC3wdS7vUJUSStFCUfKp1Xu3VKZ0zTXeL3HLe1%2F%2F%2B80XNZ%2BAX%2FmfrWPznI%2BLCplUuh7vYFuQazTcY4oNaLey8x4E43p4iI7qWz0bZSRzMqJdxSG7J%2FmFsDruVf%2Bb1uBoJB%2BxQyeAweqVDYU0n%2FaNPXRR%2BX1DiRSTtW2eAHtUn4MvN6tPFgA8RJASQdAxiHFToorZWO47gXA%2Bo31rp9YlfekqKa2XPbzgG4538mZL2SRdxfytDerwQeXg7s1XNs3gWjGh67RVtjF2TDcmmQVcLJa887fYY02%2BDOIU2jYVp8BbcBZOO7PvSWBiK0lOVO2%2BVBimhSWdQQ%2BBgT8d9Rfdwvo6w5MyEe4U0wLHqRY5yLp0JMfm8W26p1AnIlzq%2FBCo4CTm%2BH3yR3NyKiOsIRfWrQ7M9JNlCgnSqlzvXNt0YRewC9auzV%2FBU60olsz3AVxAle%2FK4Afok1wy2fYoJ7KCJrWs65aCilvbwegy3F9os7awtNCl%2BoQ4xffol%2FNzE3NAaIkrTze%2Bkc501pF%2FvDz6vGtU7huKuWQm%2F7emEP37Jxterxj0WMIb5v8MGOqUBQgiS%2BxjyD2OVgagzj7QN5InSNYSFGughVvHG0VnIXXiob93sm7bn1hA1KfqjRcWO4SlRSod%2FBxaDVPePy3cD5KACp4xlaOAgknkvABbv20JDw%2B8bCz6U4EX%2FOLq2MjRbuX8gnyVdsPVBATiWeOKNYG39ZPsCTWDOVNCexhEJp9ErZIwi0fxAG%2BXXJcDIpSfBk%2BdEgEvNOnGJo%2BN10Kn9Q2i%2BF2fG&X-Amz-Signature=ccbca8134a21c422f6907c788209efd8e9b01a994ea18c4c4e3044ef788cb7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU564LZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm9VUvXuo%2FGNXiim5MGQZX2f%2BlDsnZsArtqPNnaqfoRAiEAvV2FHEV4%2BORLxZ%2F4NeIs3gyD%2B4j2Q9v7FIp3zLMkCkIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBQiGGlZcyRb9Bi%2FCrcA0hGRP0JWI%2BRcaIqy1C5tpho1N8qS27a4JRERcXnua3h1ibSaWwFipbEoXT0Va6cYvedBqhh3RREC3wdS7vUJUSStFCUfKp1Xu3VKZ0zTXeL3HLe1%2F%2F%2B80XNZ%2BAX%2FmfrWPznI%2BLCplUuh7vYFuQazTcY4oNaLey8x4E43p4iI7qWz0bZSRzMqJdxSG7J%2FmFsDruVf%2Bb1uBoJB%2BxQyeAweqVDYU0n%2FaNPXRR%2BX1DiRSTtW2eAHtUn4MvN6tPFgA8RJASQdAxiHFToorZWO47gXA%2Bo31rp9YlfekqKa2XPbzgG4538mZL2SRdxfytDerwQeXg7s1XNs3gWjGh67RVtjF2TDcmmQVcLJa887fYY02%2BDOIU2jYVp8BbcBZOO7PvSWBiK0lOVO2%2BVBimhSWdQQ%2BBgT8d9Rfdwvo6w5MyEe4U0wLHqRY5yLp0JMfm8W26p1AnIlzq%2FBCo4CTm%2BH3yR3NyKiOsIRfWrQ7M9JNlCgnSqlzvXNt0YRewC9auzV%2FBU60olsz3AVxAle%2FK4Afok1wy2fYoJ7KCJrWs65aCilvbwegy3F9os7awtNCl%2BoQ4xffol%2FNzE3NAaIkrTze%2Bkc501pF%2FvDz6vGtU7huKuWQm%2F7emEP37Jxterxj0WMIb5v8MGOqUBQgiS%2BxjyD2OVgagzj7QN5InSNYSFGughVvHG0VnIXXiob93sm7bn1hA1KfqjRcWO4SlRSod%2FBxaDVPePy3cD5KACp4xlaOAgknkvABbv20JDw%2B8bCz6U4EX%2FOLq2MjRbuX8gnyVdsPVBATiWeOKNYG39ZPsCTWDOVNCexhEJp9ErZIwi0fxAG%2BXXJcDIpSfBk%2BdEgEvNOnGJo%2BN10Kn9Q2i%2BF2fG&X-Amz-Signature=f7b9ba917cd2e8ae9d4b41a29ccb6061d9758c06a00d2e03aa574002e4bd8f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU564LZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm9VUvXuo%2FGNXiim5MGQZX2f%2BlDsnZsArtqPNnaqfoRAiEAvV2FHEV4%2BORLxZ%2F4NeIs3gyD%2B4j2Q9v7FIp3zLMkCkIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBQiGGlZcyRb9Bi%2FCrcA0hGRP0JWI%2BRcaIqy1C5tpho1N8qS27a4JRERcXnua3h1ibSaWwFipbEoXT0Va6cYvedBqhh3RREC3wdS7vUJUSStFCUfKp1Xu3VKZ0zTXeL3HLe1%2F%2F%2B80XNZ%2BAX%2FmfrWPznI%2BLCplUuh7vYFuQazTcY4oNaLey8x4E43p4iI7qWz0bZSRzMqJdxSG7J%2FmFsDruVf%2Bb1uBoJB%2BxQyeAweqVDYU0n%2FaNPXRR%2BX1DiRSTtW2eAHtUn4MvN6tPFgA8RJASQdAxiHFToorZWO47gXA%2Bo31rp9YlfekqKa2XPbzgG4538mZL2SRdxfytDerwQeXg7s1XNs3gWjGh67RVtjF2TDcmmQVcLJa887fYY02%2BDOIU2jYVp8BbcBZOO7PvSWBiK0lOVO2%2BVBimhSWdQQ%2BBgT8d9Rfdwvo6w5MyEe4U0wLHqRY5yLp0JMfm8W26p1AnIlzq%2FBCo4CTm%2BH3yR3NyKiOsIRfWrQ7M9JNlCgnSqlzvXNt0YRewC9auzV%2FBU60olsz3AVxAle%2FK4Afok1wy2fYoJ7KCJrWs65aCilvbwegy3F9os7awtNCl%2BoQ4xffol%2FNzE3NAaIkrTze%2Bkc501pF%2FvDz6vGtU7huKuWQm%2F7emEP37Jxterxj0WMIb5v8MGOqUBQgiS%2BxjyD2OVgagzj7QN5InSNYSFGughVvHG0VnIXXiob93sm7bn1hA1KfqjRcWO4SlRSod%2FBxaDVPePy3cD5KACp4xlaOAgknkvABbv20JDw%2B8bCz6U4EX%2FOLq2MjRbuX8gnyVdsPVBATiWeOKNYG39ZPsCTWDOVNCexhEJp9ErZIwi0fxAG%2BXXJcDIpSfBk%2BdEgEvNOnGJo%2BN10Kn9Q2i%2BF2fG&X-Amz-Signature=d19b33b18a3b6cd9da2f23dfc24bdb3d0aa2b93c8e5f1f52ed83e74016d75eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU564LZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm9VUvXuo%2FGNXiim5MGQZX2f%2BlDsnZsArtqPNnaqfoRAiEAvV2FHEV4%2BORLxZ%2F4NeIs3gyD%2B4j2Q9v7FIp3zLMkCkIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBQiGGlZcyRb9Bi%2FCrcA0hGRP0JWI%2BRcaIqy1C5tpho1N8qS27a4JRERcXnua3h1ibSaWwFipbEoXT0Va6cYvedBqhh3RREC3wdS7vUJUSStFCUfKp1Xu3VKZ0zTXeL3HLe1%2F%2F%2B80XNZ%2BAX%2FmfrWPznI%2BLCplUuh7vYFuQazTcY4oNaLey8x4E43p4iI7qWz0bZSRzMqJdxSG7J%2FmFsDruVf%2Bb1uBoJB%2BxQyeAweqVDYU0n%2FaNPXRR%2BX1DiRSTtW2eAHtUn4MvN6tPFgA8RJASQdAxiHFToorZWO47gXA%2Bo31rp9YlfekqKa2XPbzgG4538mZL2SRdxfytDerwQeXg7s1XNs3gWjGh67RVtjF2TDcmmQVcLJa887fYY02%2BDOIU2jYVp8BbcBZOO7PvSWBiK0lOVO2%2BVBimhSWdQQ%2BBgT8d9Rfdwvo6w5MyEe4U0wLHqRY5yLp0JMfm8W26p1AnIlzq%2FBCo4CTm%2BH3yR3NyKiOsIRfWrQ7M9JNlCgnSqlzvXNt0YRewC9auzV%2FBU60olsz3AVxAle%2FK4Afok1wy2fYoJ7KCJrWs65aCilvbwegy3F9os7awtNCl%2BoQ4xffol%2FNzE3NAaIkrTze%2Bkc501pF%2FvDz6vGtU7huKuWQm%2F7emEP37Jxterxj0WMIb5v8MGOqUBQgiS%2BxjyD2OVgagzj7QN5InSNYSFGughVvHG0VnIXXiob93sm7bn1hA1KfqjRcWO4SlRSod%2FBxaDVPePy3cD5KACp4xlaOAgknkvABbv20JDw%2B8bCz6U4EX%2FOLq2MjRbuX8gnyVdsPVBATiWeOKNYG39ZPsCTWDOVNCexhEJp9ErZIwi0fxAG%2BXXJcDIpSfBk%2BdEgEvNOnGJo%2BN10Kn9Q2i%2BF2fG&X-Amz-Signature=6a706c78baccc05b242ce48b4f845da3271bc13ee0ddd21189cb636c0e62d726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU564LZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm9VUvXuo%2FGNXiim5MGQZX2f%2BlDsnZsArtqPNnaqfoRAiEAvV2FHEV4%2BORLxZ%2F4NeIs3gyD%2B4j2Q9v7FIp3zLMkCkIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBQiGGlZcyRb9Bi%2FCrcA0hGRP0JWI%2BRcaIqy1C5tpho1N8qS27a4JRERcXnua3h1ibSaWwFipbEoXT0Va6cYvedBqhh3RREC3wdS7vUJUSStFCUfKp1Xu3VKZ0zTXeL3HLe1%2F%2F%2B80XNZ%2BAX%2FmfrWPznI%2BLCplUuh7vYFuQazTcY4oNaLey8x4E43p4iI7qWz0bZSRzMqJdxSG7J%2FmFsDruVf%2Bb1uBoJB%2BxQyeAweqVDYU0n%2FaNPXRR%2BX1DiRSTtW2eAHtUn4MvN6tPFgA8RJASQdAxiHFToorZWO47gXA%2Bo31rp9YlfekqKa2XPbzgG4538mZL2SRdxfytDerwQeXg7s1XNs3gWjGh67RVtjF2TDcmmQVcLJa887fYY02%2BDOIU2jYVp8BbcBZOO7PvSWBiK0lOVO2%2BVBimhSWdQQ%2BBgT8d9Rfdwvo6w5MyEe4U0wLHqRY5yLp0JMfm8W26p1AnIlzq%2FBCo4CTm%2BH3yR3NyKiOsIRfWrQ7M9JNlCgnSqlzvXNt0YRewC9auzV%2FBU60olsz3AVxAle%2FK4Afok1wy2fYoJ7KCJrWs65aCilvbwegy3F9os7awtNCl%2BoQ4xffol%2FNzE3NAaIkrTze%2Bkc501pF%2FvDz6vGtU7huKuWQm%2F7emEP37Jxterxj0WMIb5v8MGOqUBQgiS%2BxjyD2OVgagzj7QN5InSNYSFGughVvHG0VnIXXiob93sm7bn1hA1KfqjRcWO4SlRSod%2FBxaDVPePy3cD5KACp4xlaOAgknkvABbv20JDw%2B8bCz6U4EX%2FOLq2MjRbuX8gnyVdsPVBATiWeOKNYG39ZPsCTWDOVNCexhEJp9ErZIwi0fxAG%2BXXJcDIpSfBk%2BdEgEvNOnGJo%2BN10Kn9Q2i%2BF2fG&X-Amz-Signature=3898ec544fb61e4b9d810f5160d6bfcbc6c76b5e6375e88b39258387a4efbcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU564LZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm9VUvXuo%2FGNXiim5MGQZX2f%2BlDsnZsArtqPNnaqfoRAiEAvV2FHEV4%2BORLxZ%2F4NeIs3gyD%2B4j2Q9v7FIp3zLMkCkIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBQiGGlZcyRb9Bi%2FCrcA0hGRP0JWI%2BRcaIqy1C5tpho1N8qS27a4JRERcXnua3h1ibSaWwFipbEoXT0Va6cYvedBqhh3RREC3wdS7vUJUSStFCUfKp1Xu3VKZ0zTXeL3HLe1%2F%2F%2B80XNZ%2BAX%2FmfrWPznI%2BLCplUuh7vYFuQazTcY4oNaLey8x4E43p4iI7qWz0bZSRzMqJdxSG7J%2FmFsDruVf%2Bb1uBoJB%2BxQyeAweqVDYU0n%2FaNPXRR%2BX1DiRSTtW2eAHtUn4MvN6tPFgA8RJASQdAxiHFToorZWO47gXA%2Bo31rp9YlfekqKa2XPbzgG4538mZL2SRdxfytDerwQeXg7s1XNs3gWjGh67RVtjF2TDcmmQVcLJa887fYY02%2BDOIU2jYVp8BbcBZOO7PvSWBiK0lOVO2%2BVBimhSWdQQ%2BBgT8d9Rfdwvo6w5MyEe4U0wLHqRY5yLp0JMfm8W26p1AnIlzq%2FBCo4CTm%2BH3yR3NyKiOsIRfWrQ7M9JNlCgnSqlzvXNt0YRewC9auzV%2FBU60olsz3AVxAle%2FK4Afok1wy2fYoJ7KCJrWs65aCilvbwegy3F9os7awtNCl%2BoQ4xffol%2FNzE3NAaIkrTze%2Bkc501pF%2FvDz6vGtU7huKuWQm%2F7emEP37Jxterxj0WMIb5v8MGOqUBQgiS%2BxjyD2OVgagzj7QN5InSNYSFGughVvHG0VnIXXiob93sm7bn1hA1KfqjRcWO4SlRSod%2FBxaDVPePy3cD5KACp4xlaOAgknkvABbv20JDw%2B8bCz6U4EX%2FOLq2MjRbuX8gnyVdsPVBATiWeOKNYG39ZPsCTWDOVNCexhEJp9ErZIwi0fxAG%2BXXJcDIpSfBk%2BdEgEvNOnGJo%2BN10Kn9Q2i%2BF2fG&X-Amz-Signature=d30fccf45c84f3dc74f4fcf51626e6bd68b812ba92d35b616ff853576e8ad5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
