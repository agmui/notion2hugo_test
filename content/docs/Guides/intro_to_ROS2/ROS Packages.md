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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VV3UGZL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFgB2aWTukjN1uoGBvMXH91J%2F1TL%2FWv%2B85Cv0%2FoelL75AiEA3IZ7EKIaC831yOu9i3Q%2FBEUHZhfrrgLuTIU9tJ38KCYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOCUh8Cz3L8%2Fxi%2F8kyrcA6ZqYTVFPTy77T1Zoqqi0XW7J%2FB1lSuW%2B46pXYJXfmFbFQOrMmN1kHHOyIJHbJvO26%2BTWbogk2GSNKXSMDZKxA5bzErf3L3vvbK36soAeklv10cdiue7ZcwNgydEpI0hh7TF%2F%2BnCvUAxAv%2FLDsZHaeqg3zSyzScGSMI7WvimidhlGiZdKjvL3xKSylwfTwFXYeB0x0wtRDBgsvm9bL0bDIGDmXbysaGGlDb7O3lvgZeAO26TiFGm0VdBNmWRORBBbF%2F%2F8JrVKTfvbERdEj68b0zVGLnkLs4nHF%2FofbUD%2BQc1mqZm1R7QzZpaMNnYOW4WWccHw4RXZOSqFKrjo93P9ZcDoJaa7MlVRU6n1GScLY%2BBfRwEizh6nXdf0vuI2pUKVsLzIIi8oW5jWXE5tjw6OB4I3kJycv7MKWutX8z5yxotRt7Mp26VpbSzZKk7K04oGqDQYkUeAIHgHuSxvovBgOHcR%2F6j%2BLICUGGm8nhubS%2Bo6%2FgYjaXkRGH7XDWp7kgafj5i%2BAV%2BLky4U5voLHO6avi4SciyEMvgXrm4%2BKPuS9mCIII5yfcSTB4OBE9CKL6P9IC9nCuJ7XLLXRmCIjzd7vDaFb9bni1LWN6ii2KizTWKGkyxm%2FzF1DBNCa5QMLaEwb0GOqUBNRcWiZ5Wy5AxvhSVwaL6knnWuNk%2Bka72cmioonb%2ByaUp7DXEsK4aKAXvz9lDKVZkOuKNshVeCaM34kSEkj48qeyZs3zbit%2FznjmQkl%2BSdURDJyrTUKUcISiN3eFmuSHW%2BSgWKPeAWRS9Je41B5kqYjJkNvFgJn9vUE%2FIEE7dxMyay%2FZNVXKzUZg1ibnbdK2KsOK5uFhFCvhzMKiqOyQVsOzF6vt4&X-Amz-Signature=545792460c11043196fc22097cdccc3b33ed7b5ad5bf5db02d8487ebcaea9196&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VV3UGZL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFgB2aWTukjN1uoGBvMXH91J%2F1TL%2FWv%2B85Cv0%2FoelL75AiEA3IZ7EKIaC831yOu9i3Q%2FBEUHZhfrrgLuTIU9tJ38KCYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOCUh8Cz3L8%2Fxi%2F8kyrcA6ZqYTVFPTy77T1Zoqqi0XW7J%2FB1lSuW%2B46pXYJXfmFbFQOrMmN1kHHOyIJHbJvO26%2BTWbogk2GSNKXSMDZKxA5bzErf3L3vvbK36soAeklv10cdiue7ZcwNgydEpI0hh7TF%2F%2BnCvUAxAv%2FLDsZHaeqg3zSyzScGSMI7WvimidhlGiZdKjvL3xKSylwfTwFXYeB0x0wtRDBgsvm9bL0bDIGDmXbysaGGlDb7O3lvgZeAO26TiFGm0VdBNmWRORBBbF%2F%2F8JrVKTfvbERdEj68b0zVGLnkLs4nHF%2FofbUD%2BQc1mqZm1R7QzZpaMNnYOW4WWccHw4RXZOSqFKrjo93P9ZcDoJaa7MlVRU6n1GScLY%2BBfRwEizh6nXdf0vuI2pUKVsLzIIi8oW5jWXE5tjw6OB4I3kJycv7MKWutX8z5yxotRt7Mp26VpbSzZKk7K04oGqDQYkUeAIHgHuSxvovBgOHcR%2F6j%2BLICUGGm8nhubS%2Bo6%2FgYjaXkRGH7XDWp7kgafj5i%2BAV%2BLky4U5voLHO6avi4SciyEMvgXrm4%2BKPuS9mCIII5yfcSTB4OBE9CKL6P9IC9nCuJ7XLLXRmCIjzd7vDaFb9bni1LWN6ii2KizTWKGkyxm%2FzF1DBNCa5QMLaEwb0GOqUBNRcWiZ5Wy5AxvhSVwaL6knnWuNk%2Bka72cmioonb%2ByaUp7DXEsK4aKAXvz9lDKVZkOuKNshVeCaM34kSEkj48qeyZs3zbit%2FznjmQkl%2BSdURDJyrTUKUcISiN3eFmuSHW%2BSgWKPeAWRS9Je41B5kqYjJkNvFgJn9vUE%2FIEE7dxMyay%2FZNVXKzUZg1ibnbdK2KsOK5uFhFCvhzMKiqOyQVsOzF6vt4&X-Amz-Signature=d0e5bb190ca23f24d254fe2fa223b57a08a98e5502f9ab55e193d32eaa8e9917&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VV3UGZL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFgB2aWTukjN1uoGBvMXH91J%2F1TL%2FWv%2B85Cv0%2FoelL75AiEA3IZ7EKIaC831yOu9i3Q%2FBEUHZhfrrgLuTIU9tJ38KCYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOCUh8Cz3L8%2Fxi%2F8kyrcA6ZqYTVFPTy77T1Zoqqi0XW7J%2FB1lSuW%2B46pXYJXfmFbFQOrMmN1kHHOyIJHbJvO26%2BTWbogk2GSNKXSMDZKxA5bzErf3L3vvbK36soAeklv10cdiue7ZcwNgydEpI0hh7TF%2F%2BnCvUAxAv%2FLDsZHaeqg3zSyzScGSMI7WvimidhlGiZdKjvL3xKSylwfTwFXYeB0x0wtRDBgsvm9bL0bDIGDmXbysaGGlDb7O3lvgZeAO26TiFGm0VdBNmWRORBBbF%2F%2F8JrVKTfvbERdEj68b0zVGLnkLs4nHF%2FofbUD%2BQc1mqZm1R7QzZpaMNnYOW4WWccHw4RXZOSqFKrjo93P9ZcDoJaa7MlVRU6n1GScLY%2BBfRwEizh6nXdf0vuI2pUKVsLzIIi8oW5jWXE5tjw6OB4I3kJycv7MKWutX8z5yxotRt7Mp26VpbSzZKk7K04oGqDQYkUeAIHgHuSxvovBgOHcR%2F6j%2BLICUGGm8nhubS%2Bo6%2FgYjaXkRGH7XDWp7kgafj5i%2BAV%2BLky4U5voLHO6avi4SciyEMvgXrm4%2BKPuS9mCIII5yfcSTB4OBE9CKL6P9IC9nCuJ7XLLXRmCIjzd7vDaFb9bni1LWN6ii2KizTWKGkyxm%2FzF1DBNCa5QMLaEwb0GOqUBNRcWiZ5Wy5AxvhSVwaL6knnWuNk%2Bka72cmioonb%2ByaUp7DXEsK4aKAXvz9lDKVZkOuKNshVeCaM34kSEkj48qeyZs3zbit%2FznjmQkl%2BSdURDJyrTUKUcISiN3eFmuSHW%2BSgWKPeAWRS9Je41B5kqYjJkNvFgJn9vUE%2FIEE7dxMyay%2FZNVXKzUZg1ibnbdK2KsOK5uFhFCvhzMKiqOyQVsOzF6vt4&X-Amz-Signature=023aa6f986f073533b156f40cb41196937f9a4343fd2cb9be434c4458f90cb70&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VV3UGZL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFgB2aWTukjN1uoGBvMXH91J%2F1TL%2FWv%2B85Cv0%2FoelL75AiEA3IZ7EKIaC831yOu9i3Q%2FBEUHZhfrrgLuTIU9tJ38KCYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOCUh8Cz3L8%2Fxi%2F8kyrcA6ZqYTVFPTy77T1Zoqqi0XW7J%2FB1lSuW%2B46pXYJXfmFbFQOrMmN1kHHOyIJHbJvO26%2BTWbogk2GSNKXSMDZKxA5bzErf3L3vvbK36soAeklv10cdiue7ZcwNgydEpI0hh7TF%2F%2BnCvUAxAv%2FLDsZHaeqg3zSyzScGSMI7WvimidhlGiZdKjvL3xKSylwfTwFXYeB0x0wtRDBgsvm9bL0bDIGDmXbysaGGlDb7O3lvgZeAO26TiFGm0VdBNmWRORBBbF%2F%2F8JrVKTfvbERdEj68b0zVGLnkLs4nHF%2FofbUD%2BQc1mqZm1R7QzZpaMNnYOW4WWccHw4RXZOSqFKrjo93P9ZcDoJaa7MlVRU6n1GScLY%2BBfRwEizh6nXdf0vuI2pUKVsLzIIi8oW5jWXE5tjw6OB4I3kJycv7MKWutX8z5yxotRt7Mp26VpbSzZKk7K04oGqDQYkUeAIHgHuSxvovBgOHcR%2F6j%2BLICUGGm8nhubS%2Bo6%2FgYjaXkRGH7XDWp7kgafj5i%2BAV%2BLky4U5voLHO6avi4SciyEMvgXrm4%2BKPuS9mCIII5yfcSTB4OBE9CKL6P9IC9nCuJ7XLLXRmCIjzd7vDaFb9bni1LWN6ii2KizTWKGkyxm%2FzF1DBNCa5QMLaEwb0GOqUBNRcWiZ5Wy5AxvhSVwaL6knnWuNk%2Bka72cmioonb%2ByaUp7DXEsK4aKAXvz9lDKVZkOuKNshVeCaM34kSEkj48qeyZs3zbit%2FznjmQkl%2BSdURDJyrTUKUcISiN3eFmuSHW%2BSgWKPeAWRS9Je41B5kqYjJkNvFgJn9vUE%2FIEE7dxMyay%2FZNVXKzUZg1ibnbdK2KsOK5uFhFCvhzMKiqOyQVsOzF6vt4&X-Amz-Signature=ca57eb99e7a48a333bdef311f3a87abfab651ff78ec8a52473314e5bdf3f1d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VV3UGZL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFgB2aWTukjN1uoGBvMXH91J%2F1TL%2FWv%2B85Cv0%2FoelL75AiEA3IZ7EKIaC831yOu9i3Q%2FBEUHZhfrrgLuTIU9tJ38KCYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOCUh8Cz3L8%2Fxi%2F8kyrcA6ZqYTVFPTy77T1Zoqqi0XW7J%2FB1lSuW%2B46pXYJXfmFbFQOrMmN1kHHOyIJHbJvO26%2BTWbogk2GSNKXSMDZKxA5bzErf3L3vvbK36soAeklv10cdiue7ZcwNgydEpI0hh7TF%2F%2BnCvUAxAv%2FLDsZHaeqg3zSyzScGSMI7WvimidhlGiZdKjvL3xKSylwfTwFXYeB0x0wtRDBgsvm9bL0bDIGDmXbysaGGlDb7O3lvgZeAO26TiFGm0VdBNmWRORBBbF%2F%2F8JrVKTfvbERdEj68b0zVGLnkLs4nHF%2FofbUD%2BQc1mqZm1R7QzZpaMNnYOW4WWccHw4RXZOSqFKrjo93P9ZcDoJaa7MlVRU6n1GScLY%2BBfRwEizh6nXdf0vuI2pUKVsLzIIi8oW5jWXE5tjw6OB4I3kJycv7MKWutX8z5yxotRt7Mp26VpbSzZKk7K04oGqDQYkUeAIHgHuSxvovBgOHcR%2F6j%2BLICUGGm8nhubS%2Bo6%2FgYjaXkRGH7XDWp7kgafj5i%2BAV%2BLky4U5voLHO6avi4SciyEMvgXrm4%2BKPuS9mCIII5yfcSTB4OBE9CKL6P9IC9nCuJ7XLLXRmCIjzd7vDaFb9bni1LWN6ii2KizTWKGkyxm%2FzF1DBNCa5QMLaEwb0GOqUBNRcWiZ5Wy5AxvhSVwaL6knnWuNk%2Bka72cmioonb%2ByaUp7DXEsK4aKAXvz9lDKVZkOuKNshVeCaM34kSEkj48qeyZs3zbit%2FznjmQkl%2BSdURDJyrTUKUcISiN3eFmuSHW%2BSgWKPeAWRS9Je41B5kqYjJkNvFgJn9vUE%2FIEE7dxMyay%2FZNVXKzUZg1ibnbdK2KsOK5uFhFCvhzMKiqOyQVsOzF6vt4&X-Amz-Signature=3ec5c1f9617a4f2bf5c44f790e668a8c642e0a14a9ce6fc063feee7f7e2ebb4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VV3UGZL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFgB2aWTukjN1uoGBvMXH91J%2F1TL%2FWv%2B85Cv0%2FoelL75AiEA3IZ7EKIaC831yOu9i3Q%2FBEUHZhfrrgLuTIU9tJ38KCYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOCUh8Cz3L8%2Fxi%2F8kyrcA6ZqYTVFPTy77T1Zoqqi0XW7J%2FB1lSuW%2B46pXYJXfmFbFQOrMmN1kHHOyIJHbJvO26%2BTWbogk2GSNKXSMDZKxA5bzErf3L3vvbK36soAeklv10cdiue7ZcwNgydEpI0hh7TF%2F%2BnCvUAxAv%2FLDsZHaeqg3zSyzScGSMI7WvimidhlGiZdKjvL3xKSylwfTwFXYeB0x0wtRDBgsvm9bL0bDIGDmXbysaGGlDb7O3lvgZeAO26TiFGm0VdBNmWRORBBbF%2F%2F8JrVKTfvbERdEj68b0zVGLnkLs4nHF%2FofbUD%2BQc1mqZm1R7QzZpaMNnYOW4WWccHw4RXZOSqFKrjo93P9ZcDoJaa7MlVRU6n1GScLY%2BBfRwEizh6nXdf0vuI2pUKVsLzIIi8oW5jWXE5tjw6OB4I3kJycv7MKWutX8z5yxotRt7Mp26VpbSzZKk7K04oGqDQYkUeAIHgHuSxvovBgOHcR%2F6j%2BLICUGGm8nhubS%2Bo6%2FgYjaXkRGH7XDWp7kgafj5i%2BAV%2BLky4U5voLHO6avi4SciyEMvgXrm4%2BKPuS9mCIII5yfcSTB4OBE9CKL6P9IC9nCuJ7XLLXRmCIjzd7vDaFb9bni1LWN6ii2KizTWKGkyxm%2FzF1DBNCa5QMLaEwb0GOqUBNRcWiZ5Wy5AxvhSVwaL6knnWuNk%2Bka72cmioonb%2ByaUp7DXEsK4aKAXvz9lDKVZkOuKNshVeCaM34kSEkj48qeyZs3zbit%2FznjmQkl%2BSdURDJyrTUKUcISiN3eFmuSHW%2BSgWKPeAWRS9Je41B5kqYjJkNvFgJn9vUE%2FIEE7dxMyay%2FZNVXKzUZg1ibnbdK2KsOK5uFhFCvhzMKiqOyQVsOzF6vt4&X-Amz-Signature=461e236006b858d0589cd91ef60d735d6282e3d518657c1a65220b1f5095b63d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VV3UGZL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFgB2aWTukjN1uoGBvMXH91J%2F1TL%2FWv%2B85Cv0%2FoelL75AiEA3IZ7EKIaC831yOu9i3Q%2FBEUHZhfrrgLuTIU9tJ38KCYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOCUh8Cz3L8%2Fxi%2F8kyrcA6ZqYTVFPTy77T1Zoqqi0XW7J%2FB1lSuW%2B46pXYJXfmFbFQOrMmN1kHHOyIJHbJvO26%2BTWbogk2GSNKXSMDZKxA5bzErf3L3vvbK36soAeklv10cdiue7ZcwNgydEpI0hh7TF%2F%2BnCvUAxAv%2FLDsZHaeqg3zSyzScGSMI7WvimidhlGiZdKjvL3xKSylwfTwFXYeB0x0wtRDBgsvm9bL0bDIGDmXbysaGGlDb7O3lvgZeAO26TiFGm0VdBNmWRORBBbF%2F%2F8JrVKTfvbERdEj68b0zVGLnkLs4nHF%2FofbUD%2BQc1mqZm1R7QzZpaMNnYOW4WWccHw4RXZOSqFKrjo93P9ZcDoJaa7MlVRU6n1GScLY%2BBfRwEizh6nXdf0vuI2pUKVsLzIIi8oW5jWXE5tjw6OB4I3kJycv7MKWutX8z5yxotRt7Mp26VpbSzZKk7K04oGqDQYkUeAIHgHuSxvovBgOHcR%2F6j%2BLICUGGm8nhubS%2Bo6%2FgYjaXkRGH7XDWp7kgafj5i%2BAV%2BLky4U5voLHO6avi4SciyEMvgXrm4%2BKPuS9mCIII5yfcSTB4OBE9CKL6P9IC9nCuJ7XLLXRmCIjzd7vDaFb9bni1LWN6ii2KizTWKGkyxm%2FzF1DBNCa5QMLaEwb0GOqUBNRcWiZ5Wy5AxvhSVwaL6knnWuNk%2Bka72cmioonb%2ByaUp7DXEsK4aKAXvz9lDKVZkOuKNshVeCaM34kSEkj48qeyZs3zbit%2FznjmQkl%2BSdURDJyrTUKUcISiN3eFmuSHW%2BSgWKPeAWRS9Je41B5kqYjJkNvFgJn9vUE%2FIEE7dxMyay%2FZNVXKzUZg1ibnbdK2KsOK5uFhFCvhzMKiqOyQVsOzF6vt4&X-Amz-Signature=f914782bffcb83dac69784da7f4ddf5bd7728a160a05794b85f2d373e907761c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
