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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMDULYK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCqF5W70UleHcQWkOa%2BCypJ6qrRMhquql8RJtTKCRCMnQIhAOXN%2BOiqe2b3vlKlTuVY4Q859GPVq2Q3h6z8GF1Dxf46Kv8DCFwQABoMNjM3NDIzMTgzODA1Igy18V0%2Fb4ja5zLeVm0q3AOHkcAexGxX6IgDwSL2FHEoaxQct%2B16VTftAY1DFewzB3vKTPIk3ihPLlOkcRuo3hDyadZkCCX3BD4dLIdlQXvqayUSiWJMYOOZjMkU5gxyPSiga242MYZJSxj1v2XBRGjhTD9kg8gsRX5PTIBihCVPLotA7KCx6wEALuu7WZIP1AXtK51kiEcKT4To733zdSu%2FIi%2BCnsSoQFZ5dXRfaHooVJg9CTi90ssVFL%2FeUAPr%2FUTgQ55HF7QFuV%2BDNawwhPghMlGFh7yO2CihxkJWDCJe2igFLsgWdXz7jS%2F49L7PLnVeONUG6zxWxJzrM%2B9g0anN5AbBFzQQ0TSiXQ8sx1Poebpy11sR9wvWNJ5kRfBpb1bmUBOg5RtZU19fUV5JPrbScCljlBKV9hntDxY4mT3k1Utq9eSaQ6GqbpOAFt8MgitrBorXCO9QZNaM%2FLSwqLmUyVbmdpEEXVxEzy0eIBXVdZRhY28dUp5uziyYtV7kHqDzK7IEuejKG2Mwfckt%2Bd0DX9i2qrMMIAHEFNfFqcNU5CQXVObJM22oH3Ht6Hz4PSxoEpOX0vjHqAaLVDv7if4b9Py6e1egwZlvJSuWbOp9pzFeMpgIxoZ2s3y9LK8vFxterxfUH%2BJlTeedgjCXk97DBjqkAXbvkEIVXCamI4cGvPthgo1ogl7GKgNaaiG9sJqmkT2%2Bu%2BipEEukpxr3xTR2nY1wq0k5NTFAQemMtuoRUuHmATSvWHCYUH36G%2FBQr4fVD2k2Mj1amx7%2FsW2cGZXdr0241vfdvuZWC2p4M8%2BlXMFEBsIVzoRl5eJ9O2lEo27eJHOWbyVp19OEGlo6IULKQE4S5I3y8QJqy442QBpRsqdB%2BYfXnx53&X-Amz-Signature=4b43797d3a0d24e4537478f8ee6e12f9613721f0711544939d19bc70a98b7f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMDULYK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCqF5W70UleHcQWkOa%2BCypJ6qrRMhquql8RJtTKCRCMnQIhAOXN%2BOiqe2b3vlKlTuVY4Q859GPVq2Q3h6z8GF1Dxf46Kv8DCFwQABoMNjM3NDIzMTgzODA1Igy18V0%2Fb4ja5zLeVm0q3AOHkcAexGxX6IgDwSL2FHEoaxQct%2B16VTftAY1DFewzB3vKTPIk3ihPLlOkcRuo3hDyadZkCCX3BD4dLIdlQXvqayUSiWJMYOOZjMkU5gxyPSiga242MYZJSxj1v2XBRGjhTD9kg8gsRX5PTIBihCVPLotA7KCx6wEALuu7WZIP1AXtK51kiEcKT4To733zdSu%2FIi%2BCnsSoQFZ5dXRfaHooVJg9CTi90ssVFL%2FeUAPr%2FUTgQ55HF7QFuV%2BDNawwhPghMlGFh7yO2CihxkJWDCJe2igFLsgWdXz7jS%2F49L7PLnVeONUG6zxWxJzrM%2B9g0anN5AbBFzQQ0TSiXQ8sx1Poebpy11sR9wvWNJ5kRfBpb1bmUBOg5RtZU19fUV5JPrbScCljlBKV9hntDxY4mT3k1Utq9eSaQ6GqbpOAFt8MgitrBorXCO9QZNaM%2FLSwqLmUyVbmdpEEXVxEzy0eIBXVdZRhY28dUp5uziyYtV7kHqDzK7IEuejKG2Mwfckt%2Bd0DX9i2qrMMIAHEFNfFqcNU5CQXVObJM22oH3Ht6Hz4PSxoEpOX0vjHqAaLVDv7if4b9Py6e1egwZlvJSuWbOp9pzFeMpgIxoZ2s3y9LK8vFxterxfUH%2BJlTeedgjCXk97DBjqkAXbvkEIVXCamI4cGvPthgo1ogl7GKgNaaiG9sJqmkT2%2Bu%2BipEEukpxr3xTR2nY1wq0k5NTFAQemMtuoRUuHmATSvWHCYUH36G%2FBQr4fVD2k2Mj1amx7%2FsW2cGZXdr0241vfdvuZWC2p4M8%2BlXMFEBsIVzoRl5eJ9O2lEo27eJHOWbyVp19OEGlo6IULKQE4S5I3y8QJqy442QBpRsqdB%2BYfXnx53&X-Amz-Signature=a212ca7be7ad13a2d020f464054ea1dc6dfc113c88a8a05a252709e12e8b3594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMDULYK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCqF5W70UleHcQWkOa%2BCypJ6qrRMhquql8RJtTKCRCMnQIhAOXN%2BOiqe2b3vlKlTuVY4Q859GPVq2Q3h6z8GF1Dxf46Kv8DCFwQABoMNjM3NDIzMTgzODA1Igy18V0%2Fb4ja5zLeVm0q3AOHkcAexGxX6IgDwSL2FHEoaxQct%2B16VTftAY1DFewzB3vKTPIk3ihPLlOkcRuo3hDyadZkCCX3BD4dLIdlQXvqayUSiWJMYOOZjMkU5gxyPSiga242MYZJSxj1v2XBRGjhTD9kg8gsRX5PTIBihCVPLotA7KCx6wEALuu7WZIP1AXtK51kiEcKT4To733zdSu%2FIi%2BCnsSoQFZ5dXRfaHooVJg9CTi90ssVFL%2FeUAPr%2FUTgQ55HF7QFuV%2BDNawwhPghMlGFh7yO2CihxkJWDCJe2igFLsgWdXz7jS%2F49L7PLnVeONUG6zxWxJzrM%2B9g0anN5AbBFzQQ0TSiXQ8sx1Poebpy11sR9wvWNJ5kRfBpb1bmUBOg5RtZU19fUV5JPrbScCljlBKV9hntDxY4mT3k1Utq9eSaQ6GqbpOAFt8MgitrBorXCO9QZNaM%2FLSwqLmUyVbmdpEEXVxEzy0eIBXVdZRhY28dUp5uziyYtV7kHqDzK7IEuejKG2Mwfckt%2Bd0DX9i2qrMMIAHEFNfFqcNU5CQXVObJM22oH3Ht6Hz4PSxoEpOX0vjHqAaLVDv7if4b9Py6e1egwZlvJSuWbOp9pzFeMpgIxoZ2s3y9LK8vFxterxfUH%2BJlTeedgjCXk97DBjqkAXbvkEIVXCamI4cGvPthgo1ogl7GKgNaaiG9sJqmkT2%2Bu%2BipEEukpxr3xTR2nY1wq0k5NTFAQemMtuoRUuHmATSvWHCYUH36G%2FBQr4fVD2k2Mj1amx7%2FsW2cGZXdr0241vfdvuZWC2p4M8%2BlXMFEBsIVzoRl5eJ9O2lEo27eJHOWbyVp19OEGlo6IULKQE4S5I3y8QJqy442QBpRsqdB%2BYfXnx53&X-Amz-Signature=f8dfc73675a33c71ee1957eb10d4af884567acc459b772f58e593c18d4d2a14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMDULYK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCqF5W70UleHcQWkOa%2BCypJ6qrRMhquql8RJtTKCRCMnQIhAOXN%2BOiqe2b3vlKlTuVY4Q859GPVq2Q3h6z8GF1Dxf46Kv8DCFwQABoMNjM3NDIzMTgzODA1Igy18V0%2Fb4ja5zLeVm0q3AOHkcAexGxX6IgDwSL2FHEoaxQct%2B16VTftAY1DFewzB3vKTPIk3ihPLlOkcRuo3hDyadZkCCX3BD4dLIdlQXvqayUSiWJMYOOZjMkU5gxyPSiga242MYZJSxj1v2XBRGjhTD9kg8gsRX5PTIBihCVPLotA7KCx6wEALuu7WZIP1AXtK51kiEcKT4To733zdSu%2FIi%2BCnsSoQFZ5dXRfaHooVJg9CTi90ssVFL%2FeUAPr%2FUTgQ55HF7QFuV%2BDNawwhPghMlGFh7yO2CihxkJWDCJe2igFLsgWdXz7jS%2F49L7PLnVeONUG6zxWxJzrM%2B9g0anN5AbBFzQQ0TSiXQ8sx1Poebpy11sR9wvWNJ5kRfBpb1bmUBOg5RtZU19fUV5JPrbScCljlBKV9hntDxY4mT3k1Utq9eSaQ6GqbpOAFt8MgitrBorXCO9QZNaM%2FLSwqLmUyVbmdpEEXVxEzy0eIBXVdZRhY28dUp5uziyYtV7kHqDzK7IEuejKG2Mwfckt%2Bd0DX9i2qrMMIAHEFNfFqcNU5CQXVObJM22oH3Ht6Hz4PSxoEpOX0vjHqAaLVDv7if4b9Py6e1egwZlvJSuWbOp9pzFeMpgIxoZ2s3y9LK8vFxterxfUH%2BJlTeedgjCXk97DBjqkAXbvkEIVXCamI4cGvPthgo1ogl7GKgNaaiG9sJqmkT2%2Bu%2BipEEukpxr3xTR2nY1wq0k5NTFAQemMtuoRUuHmATSvWHCYUH36G%2FBQr4fVD2k2Mj1amx7%2FsW2cGZXdr0241vfdvuZWC2p4M8%2BlXMFEBsIVzoRl5eJ9O2lEo27eJHOWbyVp19OEGlo6IULKQE4S5I3y8QJqy442QBpRsqdB%2BYfXnx53&X-Amz-Signature=972bbe7ce6b6bba97cca054b93c622f5ac65299f8434e4d5cfbd13a50d93a8df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMDULYK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCqF5W70UleHcQWkOa%2BCypJ6qrRMhquql8RJtTKCRCMnQIhAOXN%2BOiqe2b3vlKlTuVY4Q859GPVq2Q3h6z8GF1Dxf46Kv8DCFwQABoMNjM3NDIzMTgzODA1Igy18V0%2Fb4ja5zLeVm0q3AOHkcAexGxX6IgDwSL2FHEoaxQct%2B16VTftAY1DFewzB3vKTPIk3ihPLlOkcRuo3hDyadZkCCX3BD4dLIdlQXvqayUSiWJMYOOZjMkU5gxyPSiga242MYZJSxj1v2XBRGjhTD9kg8gsRX5PTIBihCVPLotA7KCx6wEALuu7WZIP1AXtK51kiEcKT4To733zdSu%2FIi%2BCnsSoQFZ5dXRfaHooVJg9CTi90ssVFL%2FeUAPr%2FUTgQ55HF7QFuV%2BDNawwhPghMlGFh7yO2CihxkJWDCJe2igFLsgWdXz7jS%2F49L7PLnVeONUG6zxWxJzrM%2B9g0anN5AbBFzQQ0TSiXQ8sx1Poebpy11sR9wvWNJ5kRfBpb1bmUBOg5RtZU19fUV5JPrbScCljlBKV9hntDxY4mT3k1Utq9eSaQ6GqbpOAFt8MgitrBorXCO9QZNaM%2FLSwqLmUyVbmdpEEXVxEzy0eIBXVdZRhY28dUp5uziyYtV7kHqDzK7IEuejKG2Mwfckt%2Bd0DX9i2qrMMIAHEFNfFqcNU5CQXVObJM22oH3Ht6Hz4PSxoEpOX0vjHqAaLVDv7if4b9Py6e1egwZlvJSuWbOp9pzFeMpgIxoZ2s3y9LK8vFxterxfUH%2BJlTeedgjCXk97DBjqkAXbvkEIVXCamI4cGvPthgo1ogl7GKgNaaiG9sJqmkT2%2Bu%2BipEEukpxr3xTR2nY1wq0k5NTFAQemMtuoRUuHmATSvWHCYUH36G%2FBQr4fVD2k2Mj1amx7%2FsW2cGZXdr0241vfdvuZWC2p4M8%2BlXMFEBsIVzoRl5eJ9O2lEo27eJHOWbyVp19OEGlo6IULKQE4S5I3y8QJqy442QBpRsqdB%2BYfXnx53&X-Amz-Signature=9a4ef216b6bf7fbf9a303f7d6914cba4181d4e41bb3a6e83577ddaa12aab8d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMDULYK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCqF5W70UleHcQWkOa%2BCypJ6qrRMhquql8RJtTKCRCMnQIhAOXN%2BOiqe2b3vlKlTuVY4Q859GPVq2Q3h6z8GF1Dxf46Kv8DCFwQABoMNjM3NDIzMTgzODA1Igy18V0%2Fb4ja5zLeVm0q3AOHkcAexGxX6IgDwSL2FHEoaxQct%2B16VTftAY1DFewzB3vKTPIk3ihPLlOkcRuo3hDyadZkCCX3BD4dLIdlQXvqayUSiWJMYOOZjMkU5gxyPSiga242MYZJSxj1v2XBRGjhTD9kg8gsRX5PTIBihCVPLotA7KCx6wEALuu7WZIP1AXtK51kiEcKT4To733zdSu%2FIi%2BCnsSoQFZ5dXRfaHooVJg9CTi90ssVFL%2FeUAPr%2FUTgQ55HF7QFuV%2BDNawwhPghMlGFh7yO2CihxkJWDCJe2igFLsgWdXz7jS%2F49L7PLnVeONUG6zxWxJzrM%2B9g0anN5AbBFzQQ0TSiXQ8sx1Poebpy11sR9wvWNJ5kRfBpb1bmUBOg5RtZU19fUV5JPrbScCljlBKV9hntDxY4mT3k1Utq9eSaQ6GqbpOAFt8MgitrBorXCO9QZNaM%2FLSwqLmUyVbmdpEEXVxEzy0eIBXVdZRhY28dUp5uziyYtV7kHqDzK7IEuejKG2Mwfckt%2Bd0DX9i2qrMMIAHEFNfFqcNU5CQXVObJM22oH3Ht6Hz4PSxoEpOX0vjHqAaLVDv7if4b9Py6e1egwZlvJSuWbOp9pzFeMpgIxoZ2s3y9LK8vFxterxfUH%2BJlTeedgjCXk97DBjqkAXbvkEIVXCamI4cGvPthgo1ogl7GKgNaaiG9sJqmkT2%2Bu%2BipEEukpxr3xTR2nY1wq0k5NTFAQemMtuoRUuHmATSvWHCYUH36G%2FBQr4fVD2k2Mj1amx7%2FsW2cGZXdr0241vfdvuZWC2p4M8%2BlXMFEBsIVzoRl5eJ9O2lEo27eJHOWbyVp19OEGlo6IULKQE4S5I3y8QJqy442QBpRsqdB%2BYfXnx53&X-Amz-Signature=01ff61ee4665ca60fd843a3822e1d957a5b8228297ead5809ea99e2367727fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMDULYK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCqF5W70UleHcQWkOa%2BCypJ6qrRMhquql8RJtTKCRCMnQIhAOXN%2BOiqe2b3vlKlTuVY4Q859GPVq2Q3h6z8GF1Dxf46Kv8DCFwQABoMNjM3NDIzMTgzODA1Igy18V0%2Fb4ja5zLeVm0q3AOHkcAexGxX6IgDwSL2FHEoaxQct%2B16VTftAY1DFewzB3vKTPIk3ihPLlOkcRuo3hDyadZkCCX3BD4dLIdlQXvqayUSiWJMYOOZjMkU5gxyPSiga242MYZJSxj1v2XBRGjhTD9kg8gsRX5PTIBihCVPLotA7KCx6wEALuu7WZIP1AXtK51kiEcKT4To733zdSu%2FIi%2BCnsSoQFZ5dXRfaHooVJg9CTi90ssVFL%2FeUAPr%2FUTgQ55HF7QFuV%2BDNawwhPghMlGFh7yO2CihxkJWDCJe2igFLsgWdXz7jS%2F49L7PLnVeONUG6zxWxJzrM%2B9g0anN5AbBFzQQ0TSiXQ8sx1Poebpy11sR9wvWNJ5kRfBpb1bmUBOg5RtZU19fUV5JPrbScCljlBKV9hntDxY4mT3k1Utq9eSaQ6GqbpOAFt8MgitrBorXCO9QZNaM%2FLSwqLmUyVbmdpEEXVxEzy0eIBXVdZRhY28dUp5uziyYtV7kHqDzK7IEuejKG2Mwfckt%2Bd0DX9i2qrMMIAHEFNfFqcNU5CQXVObJM22oH3Ht6Hz4PSxoEpOX0vjHqAaLVDv7if4b9Py6e1egwZlvJSuWbOp9pzFeMpgIxoZ2s3y9LK8vFxterxfUH%2BJlTeedgjCXk97DBjqkAXbvkEIVXCamI4cGvPthgo1ogl7GKgNaaiG9sJqmkT2%2Bu%2BipEEukpxr3xTR2nY1wq0k5NTFAQemMtuoRUuHmATSvWHCYUH36G%2FBQr4fVD2k2Mj1amx7%2FsW2cGZXdr0241vfdvuZWC2p4M8%2BlXMFEBsIVzoRl5eJ9O2lEo27eJHOWbyVp19OEGlo6IULKQE4S5I3y8QJqy442QBpRsqdB%2BYfXnx53&X-Amz-Signature=61a42cb312bb57ba93c6e4c829e92a4c87da946f236e564e094b6b84ae26cd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
