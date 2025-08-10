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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGPHHBZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62EBC8qtmPTqulxYmWD59SCSfx3wBYAH0EzLr4XwArQIgMEblEiFuNrTzdF%2FJRgdztsuJaW7tvxIA0uz71rUxKIYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsOeTuMm%2BNSbOxSGSrcA8DfHgT5NpwabLWj93atyUxylyKRlXjNTy9vx6iZCEHsRRaJiqvntJewxjTBEGBoygHdHAeVKo%2FSm3NPf89TAv0HrB3KA9V0bTYJAKjaq%2BxXymQomz3%2FPhot%2BV8SJsZETZb6qaa14cyDQLnmQARezszJ1qk4c%2Bq2GKeALQy1MX1WXcZ3S2%2FA6PFwYmgwJu%2BPqBM%2BXpW3TMeZ%2BjeTsdZS8YM1AiqXrqf0sxSckJCWtiLo4Tvq%2Fn%2F8MhBkk7uZekT0xvfRhY3%2BEQmVWBlJKsBp%2Bvsvt4wxgM9jSqG3tcECRPdTg9AgaPUBNjJEUsRRsh6wiAGSzFejNtBFMrSqm%2FrnGBvAMgig%2F9djbMI99VBA7AqDYBE1szdlW9PH4%2FpdZuII5Fdj3aTVV%2BgXVX1rvePZ9Sik8IokSb8o7iC7yUikv%2BjpXI%2FQCSQyQZzkFHhu087hM4%2BDsLODbzokFFZ%2BohrkH4KZKE3aqPnq2xZaBREA1XsZBSE5hrmGdVG3BFufbiRxvhRAGkO1g%2Fm4x9cPEIcAsOb8VuFJrk7WH2%2BxR%2FWo6vwxzAW7yrzgoBzzh2uXQLj8R0wWn8FjBwdeBX2fk%2F%2FBlube8dmo5U47VhoDYF8b3kb3Oxcw4XMmi39BtdyIMI2748QGOqUBhJePBSDevKCROH4i2hgVj66sqO9sxKE5WutiO9XKbLhYIgABvGvnZBVCcg1SxICMFDRCXKlHRp0%2BTHUXaC9qDKJss8hoP1jWz8X7Z6pfSUhhK3IZsS7gmj0GxYkmAOyVEaS1ZyAd2ORcT614PAkJkJ9%2Bs%2BdH1JFSsJeBlKyV6FVsIvnrDFDzh20%2FzWTKqm%2B8d8ugB8fnqr%2Fngg%2Be95AYdJiunZzb&X-Amz-Signature=5a35e9451ace616f3e1e815554e3e52d5ea4c01a217cc242c76dc0d542d2d460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGPHHBZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62EBC8qtmPTqulxYmWD59SCSfx3wBYAH0EzLr4XwArQIgMEblEiFuNrTzdF%2FJRgdztsuJaW7tvxIA0uz71rUxKIYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsOeTuMm%2BNSbOxSGSrcA8DfHgT5NpwabLWj93atyUxylyKRlXjNTy9vx6iZCEHsRRaJiqvntJewxjTBEGBoygHdHAeVKo%2FSm3NPf89TAv0HrB3KA9V0bTYJAKjaq%2BxXymQomz3%2FPhot%2BV8SJsZETZb6qaa14cyDQLnmQARezszJ1qk4c%2Bq2GKeALQy1MX1WXcZ3S2%2FA6PFwYmgwJu%2BPqBM%2BXpW3TMeZ%2BjeTsdZS8YM1AiqXrqf0sxSckJCWtiLo4Tvq%2Fn%2F8MhBkk7uZekT0xvfRhY3%2BEQmVWBlJKsBp%2Bvsvt4wxgM9jSqG3tcECRPdTg9AgaPUBNjJEUsRRsh6wiAGSzFejNtBFMrSqm%2FrnGBvAMgig%2F9djbMI99VBA7AqDYBE1szdlW9PH4%2FpdZuII5Fdj3aTVV%2BgXVX1rvePZ9Sik8IokSb8o7iC7yUikv%2BjpXI%2FQCSQyQZzkFHhu087hM4%2BDsLODbzokFFZ%2BohrkH4KZKE3aqPnq2xZaBREA1XsZBSE5hrmGdVG3BFufbiRxvhRAGkO1g%2Fm4x9cPEIcAsOb8VuFJrk7WH2%2BxR%2FWo6vwxzAW7yrzgoBzzh2uXQLj8R0wWn8FjBwdeBX2fk%2F%2FBlube8dmo5U47VhoDYF8b3kb3Oxcw4XMmi39BtdyIMI2748QGOqUBhJePBSDevKCROH4i2hgVj66sqO9sxKE5WutiO9XKbLhYIgABvGvnZBVCcg1SxICMFDRCXKlHRp0%2BTHUXaC9qDKJss8hoP1jWz8X7Z6pfSUhhK3IZsS7gmj0GxYkmAOyVEaS1ZyAd2ORcT614PAkJkJ9%2Bs%2BdH1JFSsJeBlKyV6FVsIvnrDFDzh20%2FzWTKqm%2B8d8ugB8fnqr%2Fngg%2Be95AYdJiunZzb&X-Amz-Signature=3e18af798de9dc041c809cc0903c53fa014c6bb05d59ccd15f20876bec6fc168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGPHHBZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62EBC8qtmPTqulxYmWD59SCSfx3wBYAH0EzLr4XwArQIgMEblEiFuNrTzdF%2FJRgdztsuJaW7tvxIA0uz71rUxKIYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsOeTuMm%2BNSbOxSGSrcA8DfHgT5NpwabLWj93atyUxylyKRlXjNTy9vx6iZCEHsRRaJiqvntJewxjTBEGBoygHdHAeVKo%2FSm3NPf89TAv0HrB3KA9V0bTYJAKjaq%2BxXymQomz3%2FPhot%2BV8SJsZETZb6qaa14cyDQLnmQARezszJ1qk4c%2Bq2GKeALQy1MX1WXcZ3S2%2FA6PFwYmgwJu%2BPqBM%2BXpW3TMeZ%2BjeTsdZS8YM1AiqXrqf0sxSckJCWtiLo4Tvq%2Fn%2F8MhBkk7uZekT0xvfRhY3%2BEQmVWBlJKsBp%2Bvsvt4wxgM9jSqG3tcECRPdTg9AgaPUBNjJEUsRRsh6wiAGSzFejNtBFMrSqm%2FrnGBvAMgig%2F9djbMI99VBA7AqDYBE1szdlW9PH4%2FpdZuII5Fdj3aTVV%2BgXVX1rvePZ9Sik8IokSb8o7iC7yUikv%2BjpXI%2FQCSQyQZzkFHhu087hM4%2BDsLODbzokFFZ%2BohrkH4KZKE3aqPnq2xZaBREA1XsZBSE5hrmGdVG3BFufbiRxvhRAGkO1g%2Fm4x9cPEIcAsOb8VuFJrk7WH2%2BxR%2FWo6vwxzAW7yrzgoBzzh2uXQLj8R0wWn8FjBwdeBX2fk%2F%2FBlube8dmo5U47VhoDYF8b3kb3Oxcw4XMmi39BtdyIMI2748QGOqUBhJePBSDevKCROH4i2hgVj66sqO9sxKE5WutiO9XKbLhYIgABvGvnZBVCcg1SxICMFDRCXKlHRp0%2BTHUXaC9qDKJss8hoP1jWz8X7Z6pfSUhhK3IZsS7gmj0GxYkmAOyVEaS1ZyAd2ORcT614PAkJkJ9%2Bs%2BdH1JFSsJeBlKyV6FVsIvnrDFDzh20%2FzWTKqm%2B8d8ugB8fnqr%2Fngg%2Be95AYdJiunZzb&X-Amz-Signature=9f398ce98df1c29c2ffec58173c44d05f8cf343b847e58435d5dfa07389f35ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGPHHBZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62EBC8qtmPTqulxYmWD59SCSfx3wBYAH0EzLr4XwArQIgMEblEiFuNrTzdF%2FJRgdztsuJaW7tvxIA0uz71rUxKIYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsOeTuMm%2BNSbOxSGSrcA8DfHgT5NpwabLWj93atyUxylyKRlXjNTy9vx6iZCEHsRRaJiqvntJewxjTBEGBoygHdHAeVKo%2FSm3NPf89TAv0HrB3KA9V0bTYJAKjaq%2BxXymQomz3%2FPhot%2BV8SJsZETZb6qaa14cyDQLnmQARezszJ1qk4c%2Bq2GKeALQy1MX1WXcZ3S2%2FA6PFwYmgwJu%2BPqBM%2BXpW3TMeZ%2BjeTsdZS8YM1AiqXrqf0sxSckJCWtiLo4Tvq%2Fn%2F8MhBkk7uZekT0xvfRhY3%2BEQmVWBlJKsBp%2Bvsvt4wxgM9jSqG3tcECRPdTg9AgaPUBNjJEUsRRsh6wiAGSzFejNtBFMrSqm%2FrnGBvAMgig%2F9djbMI99VBA7AqDYBE1szdlW9PH4%2FpdZuII5Fdj3aTVV%2BgXVX1rvePZ9Sik8IokSb8o7iC7yUikv%2BjpXI%2FQCSQyQZzkFHhu087hM4%2BDsLODbzokFFZ%2BohrkH4KZKE3aqPnq2xZaBREA1XsZBSE5hrmGdVG3BFufbiRxvhRAGkO1g%2Fm4x9cPEIcAsOb8VuFJrk7WH2%2BxR%2FWo6vwxzAW7yrzgoBzzh2uXQLj8R0wWn8FjBwdeBX2fk%2F%2FBlube8dmo5U47VhoDYF8b3kb3Oxcw4XMmi39BtdyIMI2748QGOqUBhJePBSDevKCROH4i2hgVj66sqO9sxKE5WutiO9XKbLhYIgABvGvnZBVCcg1SxICMFDRCXKlHRp0%2BTHUXaC9qDKJss8hoP1jWz8X7Z6pfSUhhK3IZsS7gmj0GxYkmAOyVEaS1ZyAd2ORcT614PAkJkJ9%2Bs%2BdH1JFSsJeBlKyV6FVsIvnrDFDzh20%2FzWTKqm%2B8d8ugB8fnqr%2Fngg%2Be95AYdJiunZzb&X-Amz-Signature=f2f2bb871c443b753355f6c911f3aaa1f660126e6fd6d242ced12e903bba3613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGPHHBZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62EBC8qtmPTqulxYmWD59SCSfx3wBYAH0EzLr4XwArQIgMEblEiFuNrTzdF%2FJRgdztsuJaW7tvxIA0uz71rUxKIYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsOeTuMm%2BNSbOxSGSrcA8DfHgT5NpwabLWj93atyUxylyKRlXjNTy9vx6iZCEHsRRaJiqvntJewxjTBEGBoygHdHAeVKo%2FSm3NPf89TAv0HrB3KA9V0bTYJAKjaq%2BxXymQomz3%2FPhot%2BV8SJsZETZb6qaa14cyDQLnmQARezszJ1qk4c%2Bq2GKeALQy1MX1WXcZ3S2%2FA6PFwYmgwJu%2BPqBM%2BXpW3TMeZ%2BjeTsdZS8YM1AiqXrqf0sxSckJCWtiLo4Tvq%2Fn%2F8MhBkk7uZekT0xvfRhY3%2BEQmVWBlJKsBp%2Bvsvt4wxgM9jSqG3tcECRPdTg9AgaPUBNjJEUsRRsh6wiAGSzFejNtBFMrSqm%2FrnGBvAMgig%2F9djbMI99VBA7AqDYBE1szdlW9PH4%2FpdZuII5Fdj3aTVV%2BgXVX1rvePZ9Sik8IokSb8o7iC7yUikv%2BjpXI%2FQCSQyQZzkFHhu087hM4%2BDsLODbzokFFZ%2BohrkH4KZKE3aqPnq2xZaBREA1XsZBSE5hrmGdVG3BFufbiRxvhRAGkO1g%2Fm4x9cPEIcAsOb8VuFJrk7WH2%2BxR%2FWo6vwxzAW7yrzgoBzzh2uXQLj8R0wWn8FjBwdeBX2fk%2F%2FBlube8dmo5U47VhoDYF8b3kb3Oxcw4XMmi39BtdyIMI2748QGOqUBhJePBSDevKCROH4i2hgVj66sqO9sxKE5WutiO9XKbLhYIgABvGvnZBVCcg1SxICMFDRCXKlHRp0%2BTHUXaC9qDKJss8hoP1jWz8X7Z6pfSUhhK3IZsS7gmj0GxYkmAOyVEaS1ZyAd2ORcT614PAkJkJ9%2Bs%2BdH1JFSsJeBlKyV6FVsIvnrDFDzh20%2FzWTKqm%2B8d8ugB8fnqr%2Fngg%2Be95AYdJiunZzb&X-Amz-Signature=00024445bad98273d9eb7e9a561c64293980fad07cd9ba1099165f1910ce821c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGPHHBZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62EBC8qtmPTqulxYmWD59SCSfx3wBYAH0EzLr4XwArQIgMEblEiFuNrTzdF%2FJRgdztsuJaW7tvxIA0uz71rUxKIYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsOeTuMm%2BNSbOxSGSrcA8DfHgT5NpwabLWj93atyUxylyKRlXjNTy9vx6iZCEHsRRaJiqvntJewxjTBEGBoygHdHAeVKo%2FSm3NPf89TAv0HrB3KA9V0bTYJAKjaq%2BxXymQomz3%2FPhot%2BV8SJsZETZb6qaa14cyDQLnmQARezszJ1qk4c%2Bq2GKeALQy1MX1WXcZ3S2%2FA6PFwYmgwJu%2BPqBM%2BXpW3TMeZ%2BjeTsdZS8YM1AiqXrqf0sxSckJCWtiLo4Tvq%2Fn%2F8MhBkk7uZekT0xvfRhY3%2BEQmVWBlJKsBp%2Bvsvt4wxgM9jSqG3tcECRPdTg9AgaPUBNjJEUsRRsh6wiAGSzFejNtBFMrSqm%2FrnGBvAMgig%2F9djbMI99VBA7AqDYBE1szdlW9PH4%2FpdZuII5Fdj3aTVV%2BgXVX1rvePZ9Sik8IokSb8o7iC7yUikv%2BjpXI%2FQCSQyQZzkFHhu087hM4%2BDsLODbzokFFZ%2BohrkH4KZKE3aqPnq2xZaBREA1XsZBSE5hrmGdVG3BFufbiRxvhRAGkO1g%2Fm4x9cPEIcAsOb8VuFJrk7WH2%2BxR%2FWo6vwxzAW7yrzgoBzzh2uXQLj8R0wWn8FjBwdeBX2fk%2F%2FBlube8dmo5U47VhoDYF8b3kb3Oxcw4XMmi39BtdyIMI2748QGOqUBhJePBSDevKCROH4i2hgVj66sqO9sxKE5WutiO9XKbLhYIgABvGvnZBVCcg1SxICMFDRCXKlHRp0%2BTHUXaC9qDKJss8hoP1jWz8X7Z6pfSUhhK3IZsS7gmj0GxYkmAOyVEaS1ZyAd2ORcT614PAkJkJ9%2Bs%2BdH1JFSsJeBlKyV6FVsIvnrDFDzh20%2FzWTKqm%2B8d8ugB8fnqr%2Fngg%2Be95AYdJiunZzb&X-Amz-Signature=30e11c0b69940cb86dc55805c331ecd11366d88ca602ac93d4610aa2e6242a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGPHHBZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62EBC8qtmPTqulxYmWD59SCSfx3wBYAH0EzLr4XwArQIgMEblEiFuNrTzdF%2FJRgdztsuJaW7tvxIA0uz71rUxKIYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsOeTuMm%2BNSbOxSGSrcA8DfHgT5NpwabLWj93atyUxylyKRlXjNTy9vx6iZCEHsRRaJiqvntJewxjTBEGBoygHdHAeVKo%2FSm3NPf89TAv0HrB3KA9V0bTYJAKjaq%2BxXymQomz3%2FPhot%2BV8SJsZETZb6qaa14cyDQLnmQARezszJ1qk4c%2Bq2GKeALQy1MX1WXcZ3S2%2FA6PFwYmgwJu%2BPqBM%2BXpW3TMeZ%2BjeTsdZS8YM1AiqXrqf0sxSckJCWtiLo4Tvq%2Fn%2F8MhBkk7uZekT0xvfRhY3%2BEQmVWBlJKsBp%2Bvsvt4wxgM9jSqG3tcECRPdTg9AgaPUBNjJEUsRRsh6wiAGSzFejNtBFMrSqm%2FrnGBvAMgig%2F9djbMI99VBA7AqDYBE1szdlW9PH4%2FpdZuII5Fdj3aTVV%2BgXVX1rvePZ9Sik8IokSb8o7iC7yUikv%2BjpXI%2FQCSQyQZzkFHhu087hM4%2BDsLODbzokFFZ%2BohrkH4KZKE3aqPnq2xZaBREA1XsZBSE5hrmGdVG3BFufbiRxvhRAGkO1g%2Fm4x9cPEIcAsOb8VuFJrk7WH2%2BxR%2FWo6vwxzAW7yrzgoBzzh2uXQLj8R0wWn8FjBwdeBX2fk%2F%2FBlube8dmo5U47VhoDYF8b3kb3Oxcw4XMmi39BtdyIMI2748QGOqUBhJePBSDevKCROH4i2hgVj66sqO9sxKE5WutiO9XKbLhYIgABvGvnZBVCcg1SxICMFDRCXKlHRp0%2BTHUXaC9qDKJss8hoP1jWz8X7Z6pfSUhhK3IZsS7gmj0GxYkmAOyVEaS1ZyAd2ORcT614PAkJkJ9%2Bs%2BdH1JFSsJeBlKyV6FVsIvnrDFDzh20%2FzWTKqm%2B8d8ugB8fnqr%2Fngg%2Be95AYdJiunZzb&X-Amz-Signature=674c97147131aa267c766227c565907662afc35452e15773b9b16bd1c7d16d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
