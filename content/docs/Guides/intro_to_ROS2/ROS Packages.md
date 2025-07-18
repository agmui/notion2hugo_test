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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXWFG2O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDpyObAbeVdyOE8VL1gnFAggi1ocE6c0qTJ6YuSh4Dr8wIhAMP2tBs4MWBjlaP75QAiyjRoEyeWxd8TO46%2BnAukUn%2BqKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYnQA7YZi3xEoSl68q3AMiou6h7gQ3dK%2FMulQJfBbejmscl80tuOnKKN62ERtJdXHRozfuv8NCJXyqqlAAoHpfoXnXNxbsoA69NNfXTuYvYHql%2BaLHYsH4ErWUuiTdmTaogc5bRlTaHCEMGdG7vB5XB06%2BSmZYTIuUBgBKvDMYqMkNdpRmKPAfPoT%2FwdiurNPBs0YWX2gxDFDshVDVHnKDH7KTMbwZzUY2SEJ0KMsTbDceQ%2B15n4oOgVLRrLXxpwuKdkc8iC2NF1zXDuV6FyDBIYpIAcaRWvAvXf%2BcROKnQa6rW2NbOj8wsE1as1uRPu%2BSgrHjhBSbeJNOny7RaT2ktwfXVq5o03gSg6wZCa5eUCk7Ff9CyocYwXM9445aBlSwqmPsSjbZwkENjG7A%2Fd4V25SsuWsFxJXJqtYTZ%2BtCDRdWljtReFplIkLgnFQTm47B3oFIeGrlfDAAE8XvKkwjn%2F2CmFNnixCSOhAI7SP%2Bem7JVMQknNNMstv9j8ARMKiveokpr91TZ4MMvsDWroWwjm7usUfwEXdjfmRZ9Sjn8b04Z5eHP9cz3xYBCo%2BCDC%2Fbgg6Ber7JCjuiHE1UWHVssayr%2BF%2B%2BfHCll3ExhpnEO5vyBeZu0gJwlMRIULX0vqyk8ulgGNpumaJG2zCM%2B%2BXDBjqkAVRdsdBPAMnonjxhXq0GzYCmqEGSI94ZzJeGNYS8B7xv9YZpEPk%2FrT%2BS%2BWs0OOlS0fxrNo57kLZIeaCkTjgdC1wH2FT24kZGR%2FWDyb0mKfqnXYORVo42gHe8CLvIZGid%2BVfNgYBSl5WObtfwOFRCYa9ruc7WdM3rtVpgmDCRNO0q8pVcZTWPB6d1BlO%2FT%2BWQQdDsCrxQydBga5mbtqr75yddfGqU&X-Amz-Signature=2556eeb8e524f6f4ef6e5c173f82e530368db96bf9c678a8fadcf7a64edd5eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXWFG2O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDpyObAbeVdyOE8VL1gnFAggi1ocE6c0qTJ6YuSh4Dr8wIhAMP2tBs4MWBjlaP75QAiyjRoEyeWxd8TO46%2BnAukUn%2BqKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYnQA7YZi3xEoSl68q3AMiou6h7gQ3dK%2FMulQJfBbejmscl80tuOnKKN62ERtJdXHRozfuv8NCJXyqqlAAoHpfoXnXNxbsoA69NNfXTuYvYHql%2BaLHYsH4ErWUuiTdmTaogc5bRlTaHCEMGdG7vB5XB06%2BSmZYTIuUBgBKvDMYqMkNdpRmKPAfPoT%2FwdiurNPBs0YWX2gxDFDshVDVHnKDH7KTMbwZzUY2SEJ0KMsTbDceQ%2B15n4oOgVLRrLXxpwuKdkc8iC2NF1zXDuV6FyDBIYpIAcaRWvAvXf%2BcROKnQa6rW2NbOj8wsE1as1uRPu%2BSgrHjhBSbeJNOny7RaT2ktwfXVq5o03gSg6wZCa5eUCk7Ff9CyocYwXM9445aBlSwqmPsSjbZwkENjG7A%2Fd4V25SsuWsFxJXJqtYTZ%2BtCDRdWljtReFplIkLgnFQTm47B3oFIeGrlfDAAE8XvKkwjn%2F2CmFNnixCSOhAI7SP%2Bem7JVMQknNNMstv9j8ARMKiveokpr91TZ4MMvsDWroWwjm7usUfwEXdjfmRZ9Sjn8b04Z5eHP9cz3xYBCo%2BCDC%2Fbgg6Ber7JCjuiHE1UWHVssayr%2BF%2B%2BfHCll3ExhpnEO5vyBeZu0gJwlMRIULX0vqyk8ulgGNpumaJG2zCM%2B%2BXDBjqkAVRdsdBPAMnonjxhXq0GzYCmqEGSI94ZzJeGNYS8B7xv9YZpEPk%2FrT%2BS%2BWs0OOlS0fxrNo57kLZIeaCkTjgdC1wH2FT24kZGR%2FWDyb0mKfqnXYORVo42gHe8CLvIZGid%2BVfNgYBSl5WObtfwOFRCYa9ruc7WdM3rtVpgmDCRNO0q8pVcZTWPB6d1BlO%2FT%2BWQQdDsCrxQydBga5mbtqr75yddfGqU&X-Amz-Signature=0c4ed8d8c06847150b3aaddcd8db7cf4f06eb0a55af463dba8f2642bb317e7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXWFG2O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDpyObAbeVdyOE8VL1gnFAggi1ocE6c0qTJ6YuSh4Dr8wIhAMP2tBs4MWBjlaP75QAiyjRoEyeWxd8TO46%2BnAukUn%2BqKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYnQA7YZi3xEoSl68q3AMiou6h7gQ3dK%2FMulQJfBbejmscl80tuOnKKN62ERtJdXHRozfuv8NCJXyqqlAAoHpfoXnXNxbsoA69NNfXTuYvYHql%2BaLHYsH4ErWUuiTdmTaogc5bRlTaHCEMGdG7vB5XB06%2BSmZYTIuUBgBKvDMYqMkNdpRmKPAfPoT%2FwdiurNPBs0YWX2gxDFDshVDVHnKDH7KTMbwZzUY2SEJ0KMsTbDceQ%2B15n4oOgVLRrLXxpwuKdkc8iC2NF1zXDuV6FyDBIYpIAcaRWvAvXf%2BcROKnQa6rW2NbOj8wsE1as1uRPu%2BSgrHjhBSbeJNOny7RaT2ktwfXVq5o03gSg6wZCa5eUCk7Ff9CyocYwXM9445aBlSwqmPsSjbZwkENjG7A%2Fd4V25SsuWsFxJXJqtYTZ%2BtCDRdWljtReFplIkLgnFQTm47B3oFIeGrlfDAAE8XvKkwjn%2F2CmFNnixCSOhAI7SP%2Bem7JVMQknNNMstv9j8ARMKiveokpr91TZ4MMvsDWroWwjm7usUfwEXdjfmRZ9Sjn8b04Z5eHP9cz3xYBCo%2BCDC%2Fbgg6Ber7JCjuiHE1UWHVssayr%2BF%2B%2BfHCll3ExhpnEO5vyBeZu0gJwlMRIULX0vqyk8ulgGNpumaJG2zCM%2B%2BXDBjqkAVRdsdBPAMnonjxhXq0GzYCmqEGSI94ZzJeGNYS8B7xv9YZpEPk%2FrT%2BS%2BWs0OOlS0fxrNo57kLZIeaCkTjgdC1wH2FT24kZGR%2FWDyb0mKfqnXYORVo42gHe8CLvIZGid%2BVfNgYBSl5WObtfwOFRCYa9ruc7WdM3rtVpgmDCRNO0q8pVcZTWPB6d1BlO%2FT%2BWQQdDsCrxQydBga5mbtqr75yddfGqU&X-Amz-Signature=ac6c10c3eb581b962da39e84901798e84109868849c0e98d0974bd8b0c29d0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXWFG2O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDpyObAbeVdyOE8VL1gnFAggi1ocE6c0qTJ6YuSh4Dr8wIhAMP2tBs4MWBjlaP75QAiyjRoEyeWxd8TO46%2BnAukUn%2BqKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYnQA7YZi3xEoSl68q3AMiou6h7gQ3dK%2FMulQJfBbejmscl80tuOnKKN62ERtJdXHRozfuv8NCJXyqqlAAoHpfoXnXNxbsoA69NNfXTuYvYHql%2BaLHYsH4ErWUuiTdmTaogc5bRlTaHCEMGdG7vB5XB06%2BSmZYTIuUBgBKvDMYqMkNdpRmKPAfPoT%2FwdiurNPBs0YWX2gxDFDshVDVHnKDH7KTMbwZzUY2SEJ0KMsTbDceQ%2B15n4oOgVLRrLXxpwuKdkc8iC2NF1zXDuV6FyDBIYpIAcaRWvAvXf%2BcROKnQa6rW2NbOj8wsE1as1uRPu%2BSgrHjhBSbeJNOny7RaT2ktwfXVq5o03gSg6wZCa5eUCk7Ff9CyocYwXM9445aBlSwqmPsSjbZwkENjG7A%2Fd4V25SsuWsFxJXJqtYTZ%2BtCDRdWljtReFplIkLgnFQTm47B3oFIeGrlfDAAE8XvKkwjn%2F2CmFNnixCSOhAI7SP%2Bem7JVMQknNNMstv9j8ARMKiveokpr91TZ4MMvsDWroWwjm7usUfwEXdjfmRZ9Sjn8b04Z5eHP9cz3xYBCo%2BCDC%2Fbgg6Ber7JCjuiHE1UWHVssayr%2BF%2B%2BfHCll3ExhpnEO5vyBeZu0gJwlMRIULX0vqyk8ulgGNpumaJG2zCM%2B%2BXDBjqkAVRdsdBPAMnonjxhXq0GzYCmqEGSI94ZzJeGNYS8B7xv9YZpEPk%2FrT%2BS%2BWs0OOlS0fxrNo57kLZIeaCkTjgdC1wH2FT24kZGR%2FWDyb0mKfqnXYORVo42gHe8CLvIZGid%2BVfNgYBSl5WObtfwOFRCYa9ruc7WdM3rtVpgmDCRNO0q8pVcZTWPB6d1BlO%2FT%2BWQQdDsCrxQydBga5mbtqr75yddfGqU&X-Amz-Signature=10920fef840fc494fc7dcfe2477ecbd945bfb714467490c7d2a061e9918f7e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXWFG2O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDpyObAbeVdyOE8VL1gnFAggi1ocE6c0qTJ6YuSh4Dr8wIhAMP2tBs4MWBjlaP75QAiyjRoEyeWxd8TO46%2BnAukUn%2BqKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYnQA7YZi3xEoSl68q3AMiou6h7gQ3dK%2FMulQJfBbejmscl80tuOnKKN62ERtJdXHRozfuv8NCJXyqqlAAoHpfoXnXNxbsoA69NNfXTuYvYHql%2BaLHYsH4ErWUuiTdmTaogc5bRlTaHCEMGdG7vB5XB06%2BSmZYTIuUBgBKvDMYqMkNdpRmKPAfPoT%2FwdiurNPBs0YWX2gxDFDshVDVHnKDH7KTMbwZzUY2SEJ0KMsTbDceQ%2B15n4oOgVLRrLXxpwuKdkc8iC2NF1zXDuV6FyDBIYpIAcaRWvAvXf%2BcROKnQa6rW2NbOj8wsE1as1uRPu%2BSgrHjhBSbeJNOny7RaT2ktwfXVq5o03gSg6wZCa5eUCk7Ff9CyocYwXM9445aBlSwqmPsSjbZwkENjG7A%2Fd4V25SsuWsFxJXJqtYTZ%2BtCDRdWljtReFplIkLgnFQTm47B3oFIeGrlfDAAE8XvKkwjn%2F2CmFNnixCSOhAI7SP%2Bem7JVMQknNNMstv9j8ARMKiveokpr91TZ4MMvsDWroWwjm7usUfwEXdjfmRZ9Sjn8b04Z5eHP9cz3xYBCo%2BCDC%2Fbgg6Ber7JCjuiHE1UWHVssayr%2BF%2B%2BfHCll3ExhpnEO5vyBeZu0gJwlMRIULX0vqyk8ulgGNpumaJG2zCM%2B%2BXDBjqkAVRdsdBPAMnonjxhXq0GzYCmqEGSI94ZzJeGNYS8B7xv9YZpEPk%2FrT%2BS%2BWs0OOlS0fxrNo57kLZIeaCkTjgdC1wH2FT24kZGR%2FWDyb0mKfqnXYORVo42gHe8CLvIZGid%2BVfNgYBSl5WObtfwOFRCYa9ruc7WdM3rtVpgmDCRNO0q8pVcZTWPB6d1BlO%2FT%2BWQQdDsCrxQydBga5mbtqr75yddfGqU&X-Amz-Signature=442c42f85ed175827c251aa58581837e20913f3b874dd1b5db56680a862d025c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXWFG2O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDpyObAbeVdyOE8VL1gnFAggi1ocE6c0qTJ6YuSh4Dr8wIhAMP2tBs4MWBjlaP75QAiyjRoEyeWxd8TO46%2BnAukUn%2BqKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYnQA7YZi3xEoSl68q3AMiou6h7gQ3dK%2FMulQJfBbejmscl80tuOnKKN62ERtJdXHRozfuv8NCJXyqqlAAoHpfoXnXNxbsoA69NNfXTuYvYHql%2BaLHYsH4ErWUuiTdmTaogc5bRlTaHCEMGdG7vB5XB06%2BSmZYTIuUBgBKvDMYqMkNdpRmKPAfPoT%2FwdiurNPBs0YWX2gxDFDshVDVHnKDH7KTMbwZzUY2SEJ0KMsTbDceQ%2B15n4oOgVLRrLXxpwuKdkc8iC2NF1zXDuV6FyDBIYpIAcaRWvAvXf%2BcROKnQa6rW2NbOj8wsE1as1uRPu%2BSgrHjhBSbeJNOny7RaT2ktwfXVq5o03gSg6wZCa5eUCk7Ff9CyocYwXM9445aBlSwqmPsSjbZwkENjG7A%2Fd4V25SsuWsFxJXJqtYTZ%2BtCDRdWljtReFplIkLgnFQTm47B3oFIeGrlfDAAE8XvKkwjn%2F2CmFNnixCSOhAI7SP%2Bem7JVMQknNNMstv9j8ARMKiveokpr91TZ4MMvsDWroWwjm7usUfwEXdjfmRZ9Sjn8b04Z5eHP9cz3xYBCo%2BCDC%2Fbgg6Ber7JCjuiHE1UWHVssayr%2BF%2B%2BfHCll3ExhpnEO5vyBeZu0gJwlMRIULX0vqyk8ulgGNpumaJG2zCM%2B%2BXDBjqkAVRdsdBPAMnonjxhXq0GzYCmqEGSI94ZzJeGNYS8B7xv9YZpEPk%2FrT%2BS%2BWs0OOlS0fxrNo57kLZIeaCkTjgdC1wH2FT24kZGR%2FWDyb0mKfqnXYORVo42gHe8CLvIZGid%2BVfNgYBSl5WObtfwOFRCYa9ruc7WdM3rtVpgmDCRNO0q8pVcZTWPB6d1BlO%2FT%2BWQQdDsCrxQydBga5mbtqr75yddfGqU&X-Amz-Signature=baa13836f122c48dd444ebbe05d1fd6f0a7260fd052f640e407c486e4dc7eca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXWFG2O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDpyObAbeVdyOE8VL1gnFAggi1ocE6c0qTJ6YuSh4Dr8wIhAMP2tBs4MWBjlaP75QAiyjRoEyeWxd8TO46%2BnAukUn%2BqKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYnQA7YZi3xEoSl68q3AMiou6h7gQ3dK%2FMulQJfBbejmscl80tuOnKKN62ERtJdXHRozfuv8NCJXyqqlAAoHpfoXnXNxbsoA69NNfXTuYvYHql%2BaLHYsH4ErWUuiTdmTaogc5bRlTaHCEMGdG7vB5XB06%2BSmZYTIuUBgBKvDMYqMkNdpRmKPAfPoT%2FwdiurNPBs0YWX2gxDFDshVDVHnKDH7KTMbwZzUY2SEJ0KMsTbDceQ%2B15n4oOgVLRrLXxpwuKdkc8iC2NF1zXDuV6FyDBIYpIAcaRWvAvXf%2BcROKnQa6rW2NbOj8wsE1as1uRPu%2BSgrHjhBSbeJNOny7RaT2ktwfXVq5o03gSg6wZCa5eUCk7Ff9CyocYwXM9445aBlSwqmPsSjbZwkENjG7A%2Fd4V25SsuWsFxJXJqtYTZ%2BtCDRdWljtReFplIkLgnFQTm47B3oFIeGrlfDAAE8XvKkwjn%2F2CmFNnixCSOhAI7SP%2Bem7JVMQknNNMstv9j8ARMKiveokpr91TZ4MMvsDWroWwjm7usUfwEXdjfmRZ9Sjn8b04Z5eHP9cz3xYBCo%2BCDC%2Fbgg6Ber7JCjuiHE1UWHVssayr%2BF%2B%2BfHCll3ExhpnEO5vyBeZu0gJwlMRIULX0vqyk8ulgGNpumaJG2zCM%2B%2BXDBjqkAVRdsdBPAMnonjxhXq0GzYCmqEGSI94ZzJeGNYS8B7xv9YZpEPk%2FrT%2BS%2BWs0OOlS0fxrNo57kLZIeaCkTjgdC1wH2FT24kZGR%2FWDyb0mKfqnXYORVo42gHe8CLvIZGid%2BVfNgYBSl5WObtfwOFRCYa9ruc7WdM3rtVpgmDCRNO0q8pVcZTWPB6d1BlO%2FT%2BWQQdDsCrxQydBga5mbtqr75yddfGqU&X-Amz-Signature=6f090a79a142caf8976351533dbed7a892fabecf5407dddc0b4dff7c71f7dd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
