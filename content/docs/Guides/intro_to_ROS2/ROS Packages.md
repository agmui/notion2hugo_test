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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHMQ4CK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXRm2HpvoarYzIsPU%2F2%2FRWFbiitjy%2BHQcP6uGtAk6gwIgBjje0ElfBzKkVnhlSfQPa9WUwuRkO40WTUrlaKg9fxkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDProusg6W6DCb8APECrcA5eHsfVn9pYuNDHcYqkOoFT9LTT2VGPJTkYyaKPLRCkkxtMaL%2FcnkrUUSOIDZZ5Q2S00ca5HfTvVilaD8dhIs4zMphJfkAzwmyrxerf4oMlLArIULk8%2FgP00Kg0fnuNmMSt306R1%2FqxxHXtgaPYSzVx%2FbHj29HLhTWSasz7j97DoRZOvtwgOcGGaueKvNyMtfogK9NbbFEtU4NPnSSh7iNWfhJOkVF3u4MjmiRDxuf46wzx9yA7HtzR39IMhLWoaGrANZ601D3H%2FIuWd9qgvxnziGee6j2v0dS3lO2dPWRq5tkQzJeq%2FoyeSAswusjBoljnk5xA7BGH5uOG0DJoHqqVYtFum997Lnncd7VsR2WfiVpx3Ch4D%2FqLspxLu0rGDgb7lNs2bi5Mgl%2BsE1RE3vvKu7cw0dv9HYMLF8SVtsIFuKPkWPOBLJU16tvgRixj7f%2FelhWh1M6sAiYmsRbsCL1WXn08Lg%2BEM5RkBeNZ1ksDTHcF72RYR83PBONNE3vVegvQbiCG%2B%2Fi1g4vEPwVqjkyWWgTRTJYYZGbJX3DAOfmLGIVwxbyqIVjs%2FLqL1beX%2BU5QtcmwqA9fEc941YPL%2F5LagwXg234y5mrOVFL5g10XtOwHCeyfy2KhldUkMMNPo6LwGOqUBXsWuQ9eB4g3d%2BTZ0fwciyo7OmFjNZrpkyMqhafD3NStCRdIwutSXWbnsJqS9DFXjImIxKyHcgyfCu56s6rnmf7H0HkaUCbbY%2F%2B%2B2klrJKcl2MEfdzjStGiBjRUxKRmmJtbzStcWOqCs8KaeXochVLyA2ZwzO3XRMpNoCRNifhSXiyJ2pTchI8a%2FjpiWsrBhuVChlkb28ja9lJyZ89tTerVGwJ9ht&X-Amz-Signature=4b3847b9ecffdbfc96ff9832f706f3892368cf7394971be0514f1d4450815429&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHMQ4CK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXRm2HpvoarYzIsPU%2F2%2FRWFbiitjy%2BHQcP6uGtAk6gwIgBjje0ElfBzKkVnhlSfQPa9WUwuRkO40WTUrlaKg9fxkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDProusg6W6DCb8APECrcA5eHsfVn9pYuNDHcYqkOoFT9LTT2VGPJTkYyaKPLRCkkxtMaL%2FcnkrUUSOIDZZ5Q2S00ca5HfTvVilaD8dhIs4zMphJfkAzwmyrxerf4oMlLArIULk8%2FgP00Kg0fnuNmMSt306R1%2FqxxHXtgaPYSzVx%2FbHj29HLhTWSasz7j97DoRZOvtwgOcGGaueKvNyMtfogK9NbbFEtU4NPnSSh7iNWfhJOkVF3u4MjmiRDxuf46wzx9yA7HtzR39IMhLWoaGrANZ601D3H%2FIuWd9qgvxnziGee6j2v0dS3lO2dPWRq5tkQzJeq%2FoyeSAswusjBoljnk5xA7BGH5uOG0DJoHqqVYtFum997Lnncd7VsR2WfiVpx3Ch4D%2FqLspxLu0rGDgb7lNs2bi5Mgl%2BsE1RE3vvKu7cw0dv9HYMLF8SVtsIFuKPkWPOBLJU16tvgRixj7f%2FelhWh1M6sAiYmsRbsCL1WXn08Lg%2BEM5RkBeNZ1ksDTHcF72RYR83PBONNE3vVegvQbiCG%2B%2Fi1g4vEPwVqjkyWWgTRTJYYZGbJX3DAOfmLGIVwxbyqIVjs%2FLqL1beX%2BU5QtcmwqA9fEc941YPL%2F5LagwXg234y5mrOVFL5g10XtOwHCeyfy2KhldUkMMNPo6LwGOqUBXsWuQ9eB4g3d%2BTZ0fwciyo7OmFjNZrpkyMqhafD3NStCRdIwutSXWbnsJqS9DFXjImIxKyHcgyfCu56s6rnmf7H0HkaUCbbY%2F%2B%2B2klrJKcl2MEfdzjStGiBjRUxKRmmJtbzStcWOqCs8KaeXochVLyA2ZwzO3XRMpNoCRNifhSXiyJ2pTchI8a%2FjpiWsrBhuVChlkb28ja9lJyZ89tTerVGwJ9ht&X-Amz-Signature=4f97f49e40f97a20b55f256a5fbd1ebb1053c01abf890fb567e80a42f6449e39&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHMQ4CK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXRm2HpvoarYzIsPU%2F2%2FRWFbiitjy%2BHQcP6uGtAk6gwIgBjje0ElfBzKkVnhlSfQPa9WUwuRkO40WTUrlaKg9fxkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDProusg6W6DCb8APECrcA5eHsfVn9pYuNDHcYqkOoFT9LTT2VGPJTkYyaKPLRCkkxtMaL%2FcnkrUUSOIDZZ5Q2S00ca5HfTvVilaD8dhIs4zMphJfkAzwmyrxerf4oMlLArIULk8%2FgP00Kg0fnuNmMSt306R1%2FqxxHXtgaPYSzVx%2FbHj29HLhTWSasz7j97DoRZOvtwgOcGGaueKvNyMtfogK9NbbFEtU4NPnSSh7iNWfhJOkVF3u4MjmiRDxuf46wzx9yA7HtzR39IMhLWoaGrANZ601D3H%2FIuWd9qgvxnziGee6j2v0dS3lO2dPWRq5tkQzJeq%2FoyeSAswusjBoljnk5xA7BGH5uOG0DJoHqqVYtFum997Lnncd7VsR2WfiVpx3Ch4D%2FqLspxLu0rGDgb7lNs2bi5Mgl%2BsE1RE3vvKu7cw0dv9HYMLF8SVtsIFuKPkWPOBLJU16tvgRixj7f%2FelhWh1M6sAiYmsRbsCL1WXn08Lg%2BEM5RkBeNZ1ksDTHcF72RYR83PBONNE3vVegvQbiCG%2B%2Fi1g4vEPwVqjkyWWgTRTJYYZGbJX3DAOfmLGIVwxbyqIVjs%2FLqL1beX%2BU5QtcmwqA9fEc941YPL%2F5LagwXg234y5mrOVFL5g10XtOwHCeyfy2KhldUkMMNPo6LwGOqUBXsWuQ9eB4g3d%2BTZ0fwciyo7OmFjNZrpkyMqhafD3NStCRdIwutSXWbnsJqS9DFXjImIxKyHcgyfCu56s6rnmf7H0HkaUCbbY%2F%2B%2B2klrJKcl2MEfdzjStGiBjRUxKRmmJtbzStcWOqCs8KaeXochVLyA2ZwzO3XRMpNoCRNifhSXiyJ2pTchI8a%2FjpiWsrBhuVChlkb28ja9lJyZ89tTerVGwJ9ht&X-Amz-Signature=43a89e3d703e2f2b3c8ac58367efed6bd5875edcd1735e368e64772ab567086e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHMQ4CK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXRm2HpvoarYzIsPU%2F2%2FRWFbiitjy%2BHQcP6uGtAk6gwIgBjje0ElfBzKkVnhlSfQPa9WUwuRkO40WTUrlaKg9fxkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDProusg6W6DCb8APECrcA5eHsfVn9pYuNDHcYqkOoFT9LTT2VGPJTkYyaKPLRCkkxtMaL%2FcnkrUUSOIDZZ5Q2S00ca5HfTvVilaD8dhIs4zMphJfkAzwmyrxerf4oMlLArIULk8%2FgP00Kg0fnuNmMSt306R1%2FqxxHXtgaPYSzVx%2FbHj29HLhTWSasz7j97DoRZOvtwgOcGGaueKvNyMtfogK9NbbFEtU4NPnSSh7iNWfhJOkVF3u4MjmiRDxuf46wzx9yA7HtzR39IMhLWoaGrANZ601D3H%2FIuWd9qgvxnziGee6j2v0dS3lO2dPWRq5tkQzJeq%2FoyeSAswusjBoljnk5xA7BGH5uOG0DJoHqqVYtFum997Lnncd7VsR2WfiVpx3Ch4D%2FqLspxLu0rGDgb7lNs2bi5Mgl%2BsE1RE3vvKu7cw0dv9HYMLF8SVtsIFuKPkWPOBLJU16tvgRixj7f%2FelhWh1M6sAiYmsRbsCL1WXn08Lg%2BEM5RkBeNZ1ksDTHcF72RYR83PBONNE3vVegvQbiCG%2B%2Fi1g4vEPwVqjkyWWgTRTJYYZGbJX3DAOfmLGIVwxbyqIVjs%2FLqL1beX%2BU5QtcmwqA9fEc941YPL%2F5LagwXg234y5mrOVFL5g10XtOwHCeyfy2KhldUkMMNPo6LwGOqUBXsWuQ9eB4g3d%2BTZ0fwciyo7OmFjNZrpkyMqhafD3NStCRdIwutSXWbnsJqS9DFXjImIxKyHcgyfCu56s6rnmf7H0HkaUCbbY%2F%2B%2B2klrJKcl2MEfdzjStGiBjRUxKRmmJtbzStcWOqCs8KaeXochVLyA2ZwzO3XRMpNoCRNifhSXiyJ2pTchI8a%2FjpiWsrBhuVChlkb28ja9lJyZ89tTerVGwJ9ht&X-Amz-Signature=ed2d00645e0d9b5911bd5e4a8e7c02c8ee28d811be78b9f263970c31caab7091&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHMQ4CK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXRm2HpvoarYzIsPU%2F2%2FRWFbiitjy%2BHQcP6uGtAk6gwIgBjje0ElfBzKkVnhlSfQPa9WUwuRkO40WTUrlaKg9fxkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDProusg6W6DCb8APECrcA5eHsfVn9pYuNDHcYqkOoFT9LTT2VGPJTkYyaKPLRCkkxtMaL%2FcnkrUUSOIDZZ5Q2S00ca5HfTvVilaD8dhIs4zMphJfkAzwmyrxerf4oMlLArIULk8%2FgP00Kg0fnuNmMSt306R1%2FqxxHXtgaPYSzVx%2FbHj29HLhTWSasz7j97DoRZOvtwgOcGGaueKvNyMtfogK9NbbFEtU4NPnSSh7iNWfhJOkVF3u4MjmiRDxuf46wzx9yA7HtzR39IMhLWoaGrANZ601D3H%2FIuWd9qgvxnziGee6j2v0dS3lO2dPWRq5tkQzJeq%2FoyeSAswusjBoljnk5xA7BGH5uOG0DJoHqqVYtFum997Lnncd7VsR2WfiVpx3Ch4D%2FqLspxLu0rGDgb7lNs2bi5Mgl%2BsE1RE3vvKu7cw0dv9HYMLF8SVtsIFuKPkWPOBLJU16tvgRixj7f%2FelhWh1M6sAiYmsRbsCL1WXn08Lg%2BEM5RkBeNZ1ksDTHcF72RYR83PBONNE3vVegvQbiCG%2B%2Fi1g4vEPwVqjkyWWgTRTJYYZGbJX3DAOfmLGIVwxbyqIVjs%2FLqL1beX%2BU5QtcmwqA9fEc941YPL%2F5LagwXg234y5mrOVFL5g10XtOwHCeyfy2KhldUkMMNPo6LwGOqUBXsWuQ9eB4g3d%2BTZ0fwciyo7OmFjNZrpkyMqhafD3NStCRdIwutSXWbnsJqS9DFXjImIxKyHcgyfCu56s6rnmf7H0HkaUCbbY%2F%2B%2B2klrJKcl2MEfdzjStGiBjRUxKRmmJtbzStcWOqCs8KaeXochVLyA2ZwzO3XRMpNoCRNifhSXiyJ2pTchI8a%2FjpiWsrBhuVChlkb28ja9lJyZ89tTerVGwJ9ht&X-Amz-Signature=97836b24f11414a914e503b0d01f8a74ba674c806a605e7429117d7a2fd90a75&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHMQ4CK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXRm2HpvoarYzIsPU%2F2%2FRWFbiitjy%2BHQcP6uGtAk6gwIgBjje0ElfBzKkVnhlSfQPa9WUwuRkO40WTUrlaKg9fxkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDProusg6W6DCb8APECrcA5eHsfVn9pYuNDHcYqkOoFT9LTT2VGPJTkYyaKPLRCkkxtMaL%2FcnkrUUSOIDZZ5Q2S00ca5HfTvVilaD8dhIs4zMphJfkAzwmyrxerf4oMlLArIULk8%2FgP00Kg0fnuNmMSt306R1%2FqxxHXtgaPYSzVx%2FbHj29HLhTWSasz7j97DoRZOvtwgOcGGaueKvNyMtfogK9NbbFEtU4NPnSSh7iNWfhJOkVF3u4MjmiRDxuf46wzx9yA7HtzR39IMhLWoaGrANZ601D3H%2FIuWd9qgvxnziGee6j2v0dS3lO2dPWRq5tkQzJeq%2FoyeSAswusjBoljnk5xA7BGH5uOG0DJoHqqVYtFum997Lnncd7VsR2WfiVpx3Ch4D%2FqLspxLu0rGDgb7lNs2bi5Mgl%2BsE1RE3vvKu7cw0dv9HYMLF8SVtsIFuKPkWPOBLJU16tvgRixj7f%2FelhWh1M6sAiYmsRbsCL1WXn08Lg%2BEM5RkBeNZ1ksDTHcF72RYR83PBONNE3vVegvQbiCG%2B%2Fi1g4vEPwVqjkyWWgTRTJYYZGbJX3DAOfmLGIVwxbyqIVjs%2FLqL1beX%2BU5QtcmwqA9fEc941YPL%2F5LagwXg234y5mrOVFL5g10XtOwHCeyfy2KhldUkMMNPo6LwGOqUBXsWuQ9eB4g3d%2BTZ0fwciyo7OmFjNZrpkyMqhafD3NStCRdIwutSXWbnsJqS9DFXjImIxKyHcgyfCu56s6rnmf7H0HkaUCbbY%2F%2B%2B2klrJKcl2MEfdzjStGiBjRUxKRmmJtbzStcWOqCs8KaeXochVLyA2ZwzO3XRMpNoCRNifhSXiyJ2pTchI8a%2FjpiWsrBhuVChlkb28ja9lJyZ89tTerVGwJ9ht&X-Amz-Signature=ba553cf452b09ffb2601d1b400a740dfe0738e9fe4dbea0c1cbd5c0115a34f97&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHMQ4CK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXRm2HpvoarYzIsPU%2F2%2FRWFbiitjy%2BHQcP6uGtAk6gwIgBjje0ElfBzKkVnhlSfQPa9WUwuRkO40WTUrlaKg9fxkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDProusg6W6DCb8APECrcA5eHsfVn9pYuNDHcYqkOoFT9LTT2VGPJTkYyaKPLRCkkxtMaL%2FcnkrUUSOIDZZ5Q2S00ca5HfTvVilaD8dhIs4zMphJfkAzwmyrxerf4oMlLArIULk8%2FgP00Kg0fnuNmMSt306R1%2FqxxHXtgaPYSzVx%2FbHj29HLhTWSasz7j97DoRZOvtwgOcGGaueKvNyMtfogK9NbbFEtU4NPnSSh7iNWfhJOkVF3u4MjmiRDxuf46wzx9yA7HtzR39IMhLWoaGrANZ601D3H%2FIuWd9qgvxnziGee6j2v0dS3lO2dPWRq5tkQzJeq%2FoyeSAswusjBoljnk5xA7BGH5uOG0DJoHqqVYtFum997Lnncd7VsR2WfiVpx3Ch4D%2FqLspxLu0rGDgb7lNs2bi5Mgl%2BsE1RE3vvKu7cw0dv9HYMLF8SVtsIFuKPkWPOBLJU16tvgRixj7f%2FelhWh1M6sAiYmsRbsCL1WXn08Lg%2BEM5RkBeNZ1ksDTHcF72RYR83PBONNE3vVegvQbiCG%2B%2Fi1g4vEPwVqjkyWWgTRTJYYZGbJX3DAOfmLGIVwxbyqIVjs%2FLqL1beX%2BU5QtcmwqA9fEc941YPL%2F5LagwXg234y5mrOVFL5g10XtOwHCeyfy2KhldUkMMNPo6LwGOqUBXsWuQ9eB4g3d%2BTZ0fwciyo7OmFjNZrpkyMqhafD3NStCRdIwutSXWbnsJqS9DFXjImIxKyHcgyfCu56s6rnmf7H0HkaUCbbY%2F%2B%2B2klrJKcl2MEfdzjStGiBjRUxKRmmJtbzStcWOqCs8KaeXochVLyA2ZwzO3XRMpNoCRNifhSXiyJ2pTchI8a%2FjpiWsrBhuVChlkb28ja9lJyZ89tTerVGwJ9ht&X-Amz-Signature=bbf06774397898276469af8a5cf68ccda0fac686ebc77d5a0a5a5127da47d1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
