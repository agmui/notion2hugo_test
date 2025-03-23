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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTKGUPG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDSAopAe9LGfbmOkFGSJpLicid2h0t7%2BuNp6fyvTc3VFwIgG9ftHXb4JnHRFpD0%2By1CYrPcZuQ5PfReGLyPqdOsd5kqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXKWSil5kT3XdoNnircA6WkVJBlggH6BxpE0l9124t%2FBatNsC6D6RAB2aDqgKGSJinoH1Q0WwQAuUql%2BAHQCSiMF7hgBnx3nn%2B7BhYVRT5FM4Th5cYALO%2B2R0TAoOPTmRSpw4%2FS8H3Oah5Kvk1vFaS2vgzHo0AUxXvA6hO7LwGo7M6ziXex6LiPBMtJEPDdtvLAVlLNYpGv6NJNYsHevLDue9AykkGwBAI8F2a5no5%2FUZd2%2BhtVcLzBftz4mvDLc%2BDFKbEOR2OT%2FpbLGnq4qqyR%2Bn3%2FEPCBSXjE%2Bm34WYbq3lJzd2ojV17I1kqA5iujPbL2sVYSvdZG%2B%2BON2j4YK2WUj7n4dx%2Ftp%2BExqlQll9rZhlte7VEC5rY97%2F1At3uFLngQPO8Xp5W6yWxRApPMhURF0fFIQrl68poUQqg1bWGl%2FBrCiYjgZcvc9qzmDh1GG3EXRW8piM9U6RFloDQhz%2B7vK%2F7gp2LolYCI%2FlKXiZCsHj9Wj8%2BHJqI6czlY%2BzmQ5KW1Q3JeTKCREgXUZQXUYBBC312jpkOGxGUKku6M8uvuAyMoyhc16pTkMM7ITQCMXKhdFQuxCrEinT9euhGNU9ZrFSNY2iLgbC7uuxAVt%2BdcFHqPcMq6C5giHeoBg1qyjyzEGMF%2FNVl4uTToMLzj%2Fb4GOqUBv8i2x%2FK0eBplBxNJj0ia3lgVXeNh6%2B18f90oS4LqfG6mVaBZZ1arA1OoSwTAQZTHjInUys3Nb3MpoS1XoMdPwOU4eX8J0JbeSYzLFta9WML%2BMW8Bq%2F0tJUTUMP2pH7yw7kASfzW7d%2B7fVyntj2r0ZphH%2BYg1Hl4IWUruCeehR8rJ6orrILbb%2BXIp%2FW7HIMMfoFrbtQLcrIS87tJLxKbVt0baZFGv&X-Amz-Signature=f717d9f85a41240f3fee301e69f546875fdb930b50be3815326a68662da6b6db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTKGUPG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDSAopAe9LGfbmOkFGSJpLicid2h0t7%2BuNp6fyvTc3VFwIgG9ftHXb4JnHRFpD0%2By1CYrPcZuQ5PfReGLyPqdOsd5kqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXKWSil5kT3XdoNnircA6WkVJBlggH6BxpE0l9124t%2FBatNsC6D6RAB2aDqgKGSJinoH1Q0WwQAuUql%2BAHQCSiMF7hgBnx3nn%2B7BhYVRT5FM4Th5cYALO%2B2R0TAoOPTmRSpw4%2FS8H3Oah5Kvk1vFaS2vgzHo0AUxXvA6hO7LwGo7M6ziXex6LiPBMtJEPDdtvLAVlLNYpGv6NJNYsHevLDue9AykkGwBAI8F2a5no5%2FUZd2%2BhtVcLzBftz4mvDLc%2BDFKbEOR2OT%2FpbLGnq4qqyR%2Bn3%2FEPCBSXjE%2Bm34WYbq3lJzd2ojV17I1kqA5iujPbL2sVYSvdZG%2B%2BON2j4YK2WUj7n4dx%2Ftp%2BExqlQll9rZhlte7VEC5rY97%2F1At3uFLngQPO8Xp5W6yWxRApPMhURF0fFIQrl68poUQqg1bWGl%2FBrCiYjgZcvc9qzmDh1GG3EXRW8piM9U6RFloDQhz%2B7vK%2F7gp2LolYCI%2FlKXiZCsHj9Wj8%2BHJqI6czlY%2BzmQ5KW1Q3JeTKCREgXUZQXUYBBC312jpkOGxGUKku6M8uvuAyMoyhc16pTkMM7ITQCMXKhdFQuxCrEinT9euhGNU9ZrFSNY2iLgbC7uuxAVt%2BdcFHqPcMq6C5giHeoBg1qyjyzEGMF%2FNVl4uTToMLzj%2Fb4GOqUBv8i2x%2FK0eBplBxNJj0ia3lgVXeNh6%2B18f90oS4LqfG6mVaBZZ1arA1OoSwTAQZTHjInUys3Nb3MpoS1XoMdPwOU4eX8J0JbeSYzLFta9WML%2BMW8Bq%2F0tJUTUMP2pH7yw7kASfzW7d%2B7fVyntj2r0ZphH%2BYg1Hl4IWUruCeehR8rJ6orrILbb%2BXIp%2FW7HIMMfoFrbtQLcrIS87tJLxKbVt0baZFGv&X-Amz-Signature=143bcca974779775380e3f2933a08cf2494b01d0dc6fd047e63a3ba83aea7301&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTKGUPG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDSAopAe9LGfbmOkFGSJpLicid2h0t7%2BuNp6fyvTc3VFwIgG9ftHXb4JnHRFpD0%2By1CYrPcZuQ5PfReGLyPqdOsd5kqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXKWSil5kT3XdoNnircA6WkVJBlggH6BxpE0l9124t%2FBatNsC6D6RAB2aDqgKGSJinoH1Q0WwQAuUql%2BAHQCSiMF7hgBnx3nn%2B7BhYVRT5FM4Th5cYALO%2B2R0TAoOPTmRSpw4%2FS8H3Oah5Kvk1vFaS2vgzHo0AUxXvA6hO7LwGo7M6ziXex6LiPBMtJEPDdtvLAVlLNYpGv6NJNYsHevLDue9AykkGwBAI8F2a5no5%2FUZd2%2BhtVcLzBftz4mvDLc%2BDFKbEOR2OT%2FpbLGnq4qqyR%2Bn3%2FEPCBSXjE%2Bm34WYbq3lJzd2ojV17I1kqA5iujPbL2sVYSvdZG%2B%2BON2j4YK2WUj7n4dx%2Ftp%2BExqlQll9rZhlte7VEC5rY97%2F1At3uFLngQPO8Xp5W6yWxRApPMhURF0fFIQrl68poUQqg1bWGl%2FBrCiYjgZcvc9qzmDh1GG3EXRW8piM9U6RFloDQhz%2B7vK%2F7gp2LolYCI%2FlKXiZCsHj9Wj8%2BHJqI6czlY%2BzmQ5KW1Q3JeTKCREgXUZQXUYBBC312jpkOGxGUKku6M8uvuAyMoyhc16pTkMM7ITQCMXKhdFQuxCrEinT9euhGNU9ZrFSNY2iLgbC7uuxAVt%2BdcFHqPcMq6C5giHeoBg1qyjyzEGMF%2FNVl4uTToMLzj%2Fb4GOqUBv8i2x%2FK0eBplBxNJj0ia3lgVXeNh6%2B18f90oS4LqfG6mVaBZZ1arA1OoSwTAQZTHjInUys3Nb3MpoS1XoMdPwOU4eX8J0JbeSYzLFta9WML%2BMW8Bq%2F0tJUTUMP2pH7yw7kASfzW7d%2B7fVyntj2r0ZphH%2BYg1Hl4IWUruCeehR8rJ6orrILbb%2BXIp%2FW7HIMMfoFrbtQLcrIS87tJLxKbVt0baZFGv&X-Amz-Signature=5dde1d55636a9774b8ecc0e45573afc8ef30011801193a810db6a226323d5336&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTKGUPG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDSAopAe9LGfbmOkFGSJpLicid2h0t7%2BuNp6fyvTc3VFwIgG9ftHXb4JnHRFpD0%2By1CYrPcZuQ5PfReGLyPqdOsd5kqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXKWSil5kT3XdoNnircA6WkVJBlggH6BxpE0l9124t%2FBatNsC6D6RAB2aDqgKGSJinoH1Q0WwQAuUql%2BAHQCSiMF7hgBnx3nn%2B7BhYVRT5FM4Th5cYALO%2B2R0TAoOPTmRSpw4%2FS8H3Oah5Kvk1vFaS2vgzHo0AUxXvA6hO7LwGo7M6ziXex6LiPBMtJEPDdtvLAVlLNYpGv6NJNYsHevLDue9AykkGwBAI8F2a5no5%2FUZd2%2BhtVcLzBftz4mvDLc%2BDFKbEOR2OT%2FpbLGnq4qqyR%2Bn3%2FEPCBSXjE%2Bm34WYbq3lJzd2ojV17I1kqA5iujPbL2sVYSvdZG%2B%2BON2j4YK2WUj7n4dx%2Ftp%2BExqlQll9rZhlte7VEC5rY97%2F1At3uFLngQPO8Xp5W6yWxRApPMhURF0fFIQrl68poUQqg1bWGl%2FBrCiYjgZcvc9qzmDh1GG3EXRW8piM9U6RFloDQhz%2B7vK%2F7gp2LolYCI%2FlKXiZCsHj9Wj8%2BHJqI6czlY%2BzmQ5KW1Q3JeTKCREgXUZQXUYBBC312jpkOGxGUKku6M8uvuAyMoyhc16pTkMM7ITQCMXKhdFQuxCrEinT9euhGNU9ZrFSNY2iLgbC7uuxAVt%2BdcFHqPcMq6C5giHeoBg1qyjyzEGMF%2FNVl4uTToMLzj%2Fb4GOqUBv8i2x%2FK0eBplBxNJj0ia3lgVXeNh6%2B18f90oS4LqfG6mVaBZZ1arA1OoSwTAQZTHjInUys3Nb3MpoS1XoMdPwOU4eX8J0JbeSYzLFta9WML%2BMW8Bq%2F0tJUTUMP2pH7yw7kASfzW7d%2B7fVyntj2r0ZphH%2BYg1Hl4IWUruCeehR8rJ6orrILbb%2BXIp%2FW7HIMMfoFrbtQLcrIS87tJLxKbVt0baZFGv&X-Amz-Signature=38c064f87c8947ef17aea1d6ec0ae9756f713d995fb3d2914cba31232e3e7c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTKGUPG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDSAopAe9LGfbmOkFGSJpLicid2h0t7%2BuNp6fyvTc3VFwIgG9ftHXb4JnHRFpD0%2By1CYrPcZuQ5PfReGLyPqdOsd5kqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXKWSil5kT3XdoNnircA6WkVJBlggH6BxpE0l9124t%2FBatNsC6D6RAB2aDqgKGSJinoH1Q0WwQAuUql%2BAHQCSiMF7hgBnx3nn%2B7BhYVRT5FM4Th5cYALO%2B2R0TAoOPTmRSpw4%2FS8H3Oah5Kvk1vFaS2vgzHo0AUxXvA6hO7LwGo7M6ziXex6LiPBMtJEPDdtvLAVlLNYpGv6NJNYsHevLDue9AykkGwBAI8F2a5no5%2FUZd2%2BhtVcLzBftz4mvDLc%2BDFKbEOR2OT%2FpbLGnq4qqyR%2Bn3%2FEPCBSXjE%2Bm34WYbq3lJzd2ojV17I1kqA5iujPbL2sVYSvdZG%2B%2BON2j4YK2WUj7n4dx%2Ftp%2BExqlQll9rZhlte7VEC5rY97%2F1At3uFLngQPO8Xp5W6yWxRApPMhURF0fFIQrl68poUQqg1bWGl%2FBrCiYjgZcvc9qzmDh1GG3EXRW8piM9U6RFloDQhz%2B7vK%2F7gp2LolYCI%2FlKXiZCsHj9Wj8%2BHJqI6czlY%2BzmQ5KW1Q3JeTKCREgXUZQXUYBBC312jpkOGxGUKku6M8uvuAyMoyhc16pTkMM7ITQCMXKhdFQuxCrEinT9euhGNU9ZrFSNY2iLgbC7uuxAVt%2BdcFHqPcMq6C5giHeoBg1qyjyzEGMF%2FNVl4uTToMLzj%2Fb4GOqUBv8i2x%2FK0eBplBxNJj0ia3lgVXeNh6%2B18f90oS4LqfG6mVaBZZ1arA1OoSwTAQZTHjInUys3Nb3MpoS1XoMdPwOU4eX8J0JbeSYzLFta9WML%2BMW8Bq%2F0tJUTUMP2pH7yw7kASfzW7d%2B7fVyntj2r0ZphH%2BYg1Hl4IWUruCeehR8rJ6orrILbb%2BXIp%2FW7HIMMfoFrbtQLcrIS87tJLxKbVt0baZFGv&X-Amz-Signature=fe9cad43d16c2d4af1aeddf16d684523ad1303c737f5392c5d3432a1865666ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTKGUPG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDSAopAe9LGfbmOkFGSJpLicid2h0t7%2BuNp6fyvTc3VFwIgG9ftHXb4JnHRFpD0%2By1CYrPcZuQ5PfReGLyPqdOsd5kqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXKWSil5kT3XdoNnircA6WkVJBlggH6BxpE0l9124t%2FBatNsC6D6RAB2aDqgKGSJinoH1Q0WwQAuUql%2BAHQCSiMF7hgBnx3nn%2B7BhYVRT5FM4Th5cYALO%2B2R0TAoOPTmRSpw4%2FS8H3Oah5Kvk1vFaS2vgzHo0AUxXvA6hO7LwGo7M6ziXex6LiPBMtJEPDdtvLAVlLNYpGv6NJNYsHevLDue9AykkGwBAI8F2a5no5%2FUZd2%2BhtVcLzBftz4mvDLc%2BDFKbEOR2OT%2FpbLGnq4qqyR%2Bn3%2FEPCBSXjE%2Bm34WYbq3lJzd2ojV17I1kqA5iujPbL2sVYSvdZG%2B%2BON2j4YK2WUj7n4dx%2Ftp%2BExqlQll9rZhlte7VEC5rY97%2F1At3uFLngQPO8Xp5W6yWxRApPMhURF0fFIQrl68poUQqg1bWGl%2FBrCiYjgZcvc9qzmDh1GG3EXRW8piM9U6RFloDQhz%2B7vK%2F7gp2LolYCI%2FlKXiZCsHj9Wj8%2BHJqI6czlY%2BzmQ5KW1Q3JeTKCREgXUZQXUYBBC312jpkOGxGUKku6M8uvuAyMoyhc16pTkMM7ITQCMXKhdFQuxCrEinT9euhGNU9ZrFSNY2iLgbC7uuxAVt%2BdcFHqPcMq6C5giHeoBg1qyjyzEGMF%2FNVl4uTToMLzj%2Fb4GOqUBv8i2x%2FK0eBplBxNJj0ia3lgVXeNh6%2B18f90oS4LqfG6mVaBZZ1arA1OoSwTAQZTHjInUys3Nb3MpoS1XoMdPwOU4eX8J0JbeSYzLFta9WML%2BMW8Bq%2F0tJUTUMP2pH7yw7kASfzW7d%2B7fVyntj2r0ZphH%2BYg1Hl4IWUruCeehR8rJ6orrILbb%2BXIp%2FW7HIMMfoFrbtQLcrIS87tJLxKbVt0baZFGv&X-Amz-Signature=0a07dd9da460bf180a3225305aa57803ed371c6f70c2907d1c3417e019273fec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTKGUPG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDSAopAe9LGfbmOkFGSJpLicid2h0t7%2BuNp6fyvTc3VFwIgG9ftHXb4JnHRFpD0%2By1CYrPcZuQ5PfReGLyPqdOsd5kqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXKWSil5kT3XdoNnircA6WkVJBlggH6BxpE0l9124t%2FBatNsC6D6RAB2aDqgKGSJinoH1Q0WwQAuUql%2BAHQCSiMF7hgBnx3nn%2B7BhYVRT5FM4Th5cYALO%2B2R0TAoOPTmRSpw4%2FS8H3Oah5Kvk1vFaS2vgzHo0AUxXvA6hO7LwGo7M6ziXex6LiPBMtJEPDdtvLAVlLNYpGv6NJNYsHevLDue9AykkGwBAI8F2a5no5%2FUZd2%2BhtVcLzBftz4mvDLc%2BDFKbEOR2OT%2FpbLGnq4qqyR%2Bn3%2FEPCBSXjE%2Bm34WYbq3lJzd2ojV17I1kqA5iujPbL2sVYSvdZG%2B%2BON2j4YK2WUj7n4dx%2Ftp%2BExqlQll9rZhlte7VEC5rY97%2F1At3uFLngQPO8Xp5W6yWxRApPMhURF0fFIQrl68poUQqg1bWGl%2FBrCiYjgZcvc9qzmDh1GG3EXRW8piM9U6RFloDQhz%2B7vK%2F7gp2LolYCI%2FlKXiZCsHj9Wj8%2BHJqI6czlY%2BzmQ5KW1Q3JeTKCREgXUZQXUYBBC312jpkOGxGUKku6M8uvuAyMoyhc16pTkMM7ITQCMXKhdFQuxCrEinT9euhGNU9ZrFSNY2iLgbC7uuxAVt%2BdcFHqPcMq6C5giHeoBg1qyjyzEGMF%2FNVl4uTToMLzj%2Fb4GOqUBv8i2x%2FK0eBplBxNJj0ia3lgVXeNh6%2B18f90oS4LqfG6mVaBZZ1arA1OoSwTAQZTHjInUys3Nb3MpoS1XoMdPwOU4eX8J0JbeSYzLFta9WML%2BMW8Bq%2F0tJUTUMP2pH7yw7kASfzW7d%2B7fVyntj2r0ZphH%2BYg1Hl4IWUruCeehR8rJ6orrILbb%2BXIp%2FW7HIMMfoFrbtQLcrIS87tJLxKbVt0baZFGv&X-Amz-Signature=e3074f0bb206bb8ea55ddcdea26f7e4424126fa4887a7f1a773a380684980652&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
