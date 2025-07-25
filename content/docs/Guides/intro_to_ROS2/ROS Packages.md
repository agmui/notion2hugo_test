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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MPU66N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC3rxfGb8fWLGTy6oOXGtyYKfWz2MYoaCZLpU0fTndfMAiEAupJE%2BBW3TGcVIVgGq4LbOXMjJ%2Bc04qE7JFei7n65csEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFW7V7PZ%2BMS9IMfRbyrcA8iRaNQ2%2Fktd0mQtvyeq%2BkE49Iw8rlbFAFB6knsCU0Snt3S1pWumNYIbnaNG4Cl7o09Y6OeNKchTcp4%2BqeqnnoEe1lBjf0zZPNprGyhFflZq%2BpssPlk%2BQtWVSxyIpLIDjkG%2B5u0v5W59jxhVylXov73S2gTeiJSOOvXBeGMjT%2F1lMmcCbfNAKVA9SiHiNntJMNbSssbQ%2FVPa%2F%2BO8lic0x4JlmQM5WxGKA1iDA6Ts7LANC4NkE%2FUejJ8B9P%2FkFuxr5eMkn3qDl%2FJrvauIqRaMHP8ghvgyU9irDSPNoY%2F%2BT2sROW2fBdQ7%2BRUDe6XD6GAnx935vRPC4ZXf2lJqJnCkN3JRlmEdqetI0Vdu7whHqq%2FxRjPUmTSNxcmq%2FRasEiju47%2B%2B7CpX9F7dXAx%2F%2BTRDuQtXedU%2B854ZJogemGYA6yrZqe5Msu4IN5YzjIE6l65eLfDbS29tIBzor7KXdYLpvE94%2Bz1jnumVOYSIyDYXZhsyybYRlf9CcVsB7jjDa5XA5u547%2FkL474mygJJU40YhadTMNsukNNvtc%2B3CYlq2m0mAtKFPWT2lhlLQi6XmID%2BII3sXAN3h3V%2FoszfodcecWamlcb%2B8QLs05swbqHuumJW37WP4wQn1gsW8oXeMIy8jsQGOqUBOwntm50Xx7%2BVRhagySoXcCrp9tJtjLWCjldZ93vcOQW%2B%2F4rtgvG77%2B04KppU4SGYE1hwFLctSLiX%2FgjwoIlBP06a6QPC165nuRLTzaypIFDS3R0MRkUixDNUWzGrNbT%2BXSsaU5F09hGTTeytwDYW4eDqBM1T4bLSXO5dS2cTXZMlRipq8GqcC5XTgNJA9tmGEP9ZCJCzJW16GXvIwucvDlQcwRZn&X-Amz-Signature=1725fbc84272fb8d8823d41893dbeffa83b36735473bde837d1d4c6821801183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MPU66N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC3rxfGb8fWLGTy6oOXGtyYKfWz2MYoaCZLpU0fTndfMAiEAupJE%2BBW3TGcVIVgGq4LbOXMjJ%2Bc04qE7JFei7n65csEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFW7V7PZ%2BMS9IMfRbyrcA8iRaNQ2%2Fktd0mQtvyeq%2BkE49Iw8rlbFAFB6knsCU0Snt3S1pWumNYIbnaNG4Cl7o09Y6OeNKchTcp4%2BqeqnnoEe1lBjf0zZPNprGyhFflZq%2BpssPlk%2BQtWVSxyIpLIDjkG%2B5u0v5W59jxhVylXov73S2gTeiJSOOvXBeGMjT%2F1lMmcCbfNAKVA9SiHiNntJMNbSssbQ%2FVPa%2F%2BO8lic0x4JlmQM5WxGKA1iDA6Ts7LANC4NkE%2FUejJ8B9P%2FkFuxr5eMkn3qDl%2FJrvauIqRaMHP8ghvgyU9irDSPNoY%2F%2BT2sROW2fBdQ7%2BRUDe6XD6GAnx935vRPC4ZXf2lJqJnCkN3JRlmEdqetI0Vdu7whHqq%2FxRjPUmTSNxcmq%2FRasEiju47%2B%2B7CpX9F7dXAx%2F%2BTRDuQtXedU%2B854ZJogemGYA6yrZqe5Msu4IN5YzjIE6l65eLfDbS29tIBzor7KXdYLpvE94%2Bz1jnumVOYSIyDYXZhsyybYRlf9CcVsB7jjDa5XA5u547%2FkL474mygJJU40YhadTMNsukNNvtc%2B3CYlq2m0mAtKFPWT2lhlLQi6XmID%2BII3sXAN3h3V%2FoszfodcecWamlcb%2B8QLs05swbqHuumJW37WP4wQn1gsW8oXeMIy8jsQGOqUBOwntm50Xx7%2BVRhagySoXcCrp9tJtjLWCjldZ93vcOQW%2B%2F4rtgvG77%2B04KppU4SGYE1hwFLctSLiX%2FgjwoIlBP06a6QPC165nuRLTzaypIFDS3R0MRkUixDNUWzGrNbT%2BXSsaU5F09hGTTeytwDYW4eDqBM1T4bLSXO5dS2cTXZMlRipq8GqcC5XTgNJA9tmGEP9ZCJCzJW16GXvIwucvDlQcwRZn&X-Amz-Signature=ca4a7845b1f212fa7b038d48631a94da57dd702a6e8cc81454549c4b1843fa7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MPU66N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC3rxfGb8fWLGTy6oOXGtyYKfWz2MYoaCZLpU0fTndfMAiEAupJE%2BBW3TGcVIVgGq4LbOXMjJ%2Bc04qE7JFei7n65csEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFW7V7PZ%2BMS9IMfRbyrcA8iRaNQ2%2Fktd0mQtvyeq%2BkE49Iw8rlbFAFB6knsCU0Snt3S1pWumNYIbnaNG4Cl7o09Y6OeNKchTcp4%2BqeqnnoEe1lBjf0zZPNprGyhFflZq%2BpssPlk%2BQtWVSxyIpLIDjkG%2B5u0v5W59jxhVylXov73S2gTeiJSOOvXBeGMjT%2F1lMmcCbfNAKVA9SiHiNntJMNbSssbQ%2FVPa%2F%2BO8lic0x4JlmQM5WxGKA1iDA6Ts7LANC4NkE%2FUejJ8B9P%2FkFuxr5eMkn3qDl%2FJrvauIqRaMHP8ghvgyU9irDSPNoY%2F%2BT2sROW2fBdQ7%2BRUDe6XD6GAnx935vRPC4ZXf2lJqJnCkN3JRlmEdqetI0Vdu7whHqq%2FxRjPUmTSNxcmq%2FRasEiju47%2B%2B7CpX9F7dXAx%2F%2BTRDuQtXedU%2B854ZJogemGYA6yrZqe5Msu4IN5YzjIE6l65eLfDbS29tIBzor7KXdYLpvE94%2Bz1jnumVOYSIyDYXZhsyybYRlf9CcVsB7jjDa5XA5u547%2FkL474mygJJU40YhadTMNsukNNvtc%2B3CYlq2m0mAtKFPWT2lhlLQi6XmID%2BII3sXAN3h3V%2FoszfodcecWamlcb%2B8QLs05swbqHuumJW37WP4wQn1gsW8oXeMIy8jsQGOqUBOwntm50Xx7%2BVRhagySoXcCrp9tJtjLWCjldZ93vcOQW%2B%2F4rtgvG77%2B04KppU4SGYE1hwFLctSLiX%2FgjwoIlBP06a6QPC165nuRLTzaypIFDS3R0MRkUixDNUWzGrNbT%2BXSsaU5F09hGTTeytwDYW4eDqBM1T4bLSXO5dS2cTXZMlRipq8GqcC5XTgNJA9tmGEP9ZCJCzJW16GXvIwucvDlQcwRZn&X-Amz-Signature=fa755450789b19701fb84c8d095e5af6183507ccb4795b7ba8ce86daa48d6721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MPU66N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC3rxfGb8fWLGTy6oOXGtyYKfWz2MYoaCZLpU0fTndfMAiEAupJE%2BBW3TGcVIVgGq4LbOXMjJ%2Bc04qE7JFei7n65csEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFW7V7PZ%2BMS9IMfRbyrcA8iRaNQ2%2Fktd0mQtvyeq%2BkE49Iw8rlbFAFB6knsCU0Snt3S1pWumNYIbnaNG4Cl7o09Y6OeNKchTcp4%2BqeqnnoEe1lBjf0zZPNprGyhFflZq%2BpssPlk%2BQtWVSxyIpLIDjkG%2B5u0v5W59jxhVylXov73S2gTeiJSOOvXBeGMjT%2F1lMmcCbfNAKVA9SiHiNntJMNbSssbQ%2FVPa%2F%2BO8lic0x4JlmQM5WxGKA1iDA6Ts7LANC4NkE%2FUejJ8B9P%2FkFuxr5eMkn3qDl%2FJrvauIqRaMHP8ghvgyU9irDSPNoY%2F%2BT2sROW2fBdQ7%2BRUDe6XD6GAnx935vRPC4ZXf2lJqJnCkN3JRlmEdqetI0Vdu7whHqq%2FxRjPUmTSNxcmq%2FRasEiju47%2B%2B7CpX9F7dXAx%2F%2BTRDuQtXedU%2B854ZJogemGYA6yrZqe5Msu4IN5YzjIE6l65eLfDbS29tIBzor7KXdYLpvE94%2Bz1jnumVOYSIyDYXZhsyybYRlf9CcVsB7jjDa5XA5u547%2FkL474mygJJU40YhadTMNsukNNvtc%2B3CYlq2m0mAtKFPWT2lhlLQi6XmID%2BII3sXAN3h3V%2FoszfodcecWamlcb%2B8QLs05swbqHuumJW37WP4wQn1gsW8oXeMIy8jsQGOqUBOwntm50Xx7%2BVRhagySoXcCrp9tJtjLWCjldZ93vcOQW%2B%2F4rtgvG77%2B04KppU4SGYE1hwFLctSLiX%2FgjwoIlBP06a6QPC165nuRLTzaypIFDS3R0MRkUixDNUWzGrNbT%2BXSsaU5F09hGTTeytwDYW4eDqBM1T4bLSXO5dS2cTXZMlRipq8GqcC5XTgNJA9tmGEP9ZCJCzJW16GXvIwucvDlQcwRZn&X-Amz-Signature=c66bbbc4427e4ed53b2157d5d249b66d3583ec2b4994c230a784117c7e6d6098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MPU66N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC3rxfGb8fWLGTy6oOXGtyYKfWz2MYoaCZLpU0fTndfMAiEAupJE%2BBW3TGcVIVgGq4LbOXMjJ%2Bc04qE7JFei7n65csEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFW7V7PZ%2BMS9IMfRbyrcA8iRaNQ2%2Fktd0mQtvyeq%2BkE49Iw8rlbFAFB6knsCU0Snt3S1pWumNYIbnaNG4Cl7o09Y6OeNKchTcp4%2BqeqnnoEe1lBjf0zZPNprGyhFflZq%2BpssPlk%2BQtWVSxyIpLIDjkG%2B5u0v5W59jxhVylXov73S2gTeiJSOOvXBeGMjT%2F1lMmcCbfNAKVA9SiHiNntJMNbSssbQ%2FVPa%2F%2BO8lic0x4JlmQM5WxGKA1iDA6Ts7LANC4NkE%2FUejJ8B9P%2FkFuxr5eMkn3qDl%2FJrvauIqRaMHP8ghvgyU9irDSPNoY%2F%2BT2sROW2fBdQ7%2BRUDe6XD6GAnx935vRPC4ZXf2lJqJnCkN3JRlmEdqetI0Vdu7whHqq%2FxRjPUmTSNxcmq%2FRasEiju47%2B%2B7CpX9F7dXAx%2F%2BTRDuQtXedU%2B854ZJogemGYA6yrZqe5Msu4IN5YzjIE6l65eLfDbS29tIBzor7KXdYLpvE94%2Bz1jnumVOYSIyDYXZhsyybYRlf9CcVsB7jjDa5XA5u547%2FkL474mygJJU40YhadTMNsukNNvtc%2B3CYlq2m0mAtKFPWT2lhlLQi6XmID%2BII3sXAN3h3V%2FoszfodcecWamlcb%2B8QLs05swbqHuumJW37WP4wQn1gsW8oXeMIy8jsQGOqUBOwntm50Xx7%2BVRhagySoXcCrp9tJtjLWCjldZ93vcOQW%2B%2F4rtgvG77%2B04KppU4SGYE1hwFLctSLiX%2FgjwoIlBP06a6QPC165nuRLTzaypIFDS3R0MRkUixDNUWzGrNbT%2BXSsaU5F09hGTTeytwDYW4eDqBM1T4bLSXO5dS2cTXZMlRipq8GqcC5XTgNJA9tmGEP9ZCJCzJW16GXvIwucvDlQcwRZn&X-Amz-Signature=2f189c1b1a4e06f04e9908b2b23c25462c17e6e1ccdc5817de321aba55cc9bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MPU66N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC3rxfGb8fWLGTy6oOXGtyYKfWz2MYoaCZLpU0fTndfMAiEAupJE%2BBW3TGcVIVgGq4LbOXMjJ%2Bc04qE7JFei7n65csEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFW7V7PZ%2BMS9IMfRbyrcA8iRaNQ2%2Fktd0mQtvyeq%2BkE49Iw8rlbFAFB6knsCU0Snt3S1pWumNYIbnaNG4Cl7o09Y6OeNKchTcp4%2BqeqnnoEe1lBjf0zZPNprGyhFflZq%2BpssPlk%2BQtWVSxyIpLIDjkG%2B5u0v5W59jxhVylXov73S2gTeiJSOOvXBeGMjT%2F1lMmcCbfNAKVA9SiHiNntJMNbSssbQ%2FVPa%2F%2BO8lic0x4JlmQM5WxGKA1iDA6Ts7LANC4NkE%2FUejJ8B9P%2FkFuxr5eMkn3qDl%2FJrvauIqRaMHP8ghvgyU9irDSPNoY%2F%2BT2sROW2fBdQ7%2BRUDe6XD6GAnx935vRPC4ZXf2lJqJnCkN3JRlmEdqetI0Vdu7whHqq%2FxRjPUmTSNxcmq%2FRasEiju47%2B%2B7CpX9F7dXAx%2F%2BTRDuQtXedU%2B854ZJogemGYA6yrZqe5Msu4IN5YzjIE6l65eLfDbS29tIBzor7KXdYLpvE94%2Bz1jnumVOYSIyDYXZhsyybYRlf9CcVsB7jjDa5XA5u547%2FkL474mygJJU40YhadTMNsukNNvtc%2B3CYlq2m0mAtKFPWT2lhlLQi6XmID%2BII3sXAN3h3V%2FoszfodcecWamlcb%2B8QLs05swbqHuumJW37WP4wQn1gsW8oXeMIy8jsQGOqUBOwntm50Xx7%2BVRhagySoXcCrp9tJtjLWCjldZ93vcOQW%2B%2F4rtgvG77%2B04KppU4SGYE1hwFLctSLiX%2FgjwoIlBP06a6QPC165nuRLTzaypIFDS3R0MRkUixDNUWzGrNbT%2BXSsaU5F09hGTTeytwDYW4eDqBM1T4bLSXO5dS2cTXZMlRipq8GqcC5XTgNJA9tmGEP9ZCJCzJW16GXvIwucvDlQcwRZn&X-Amz-Signature=e24fa826162b776247abceabb34418ff3dfc737c202e168da63cb812a635d04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MPU66N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC3rxfGb8fWLGTy6oOXGtyYKfWz2MYoaCZLpU0fTndfMAiEAupJE%2BBW3TGcVIVgGq4LbOXMjJ%2Bc04qE7JFei7n65csEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFW7V7PZ%2BMS9IMfRbyrcA8iRaNQ2%2Fktd0mQtvyeq%2BkE49Iw8rlbFAFB6knsCU0Snt3S1pWumNYIbnaNG4Cl7o09Y6OeNKchTcp4%2BqeqnnoEe1lBjf0zZPNprGyhFflZq%2BpssPlk%2BQtWVSxyIpLIDjkG%2B5u0v5W59jxhVylXov73S2gTeiJSOOvXBeGMjT%2F1lMmcCbfNAKVA9SiHiNntJMNbSssbQ%2FVPa%2F%2BO8lic0x4JlmQM5WxGKA1iDA6Ts7LANC4NkE%2FUejJ8B9P%2FkFuxr5eMkn3qDl%2FJrvauIqRaMHP8ghvgyU9irDSPNoY%2F%2BT2sROW2fBdQ7%2BRUDe6XD6GAnx935vRPC4ZXf2lJqJnCkN3JRlmEdqetI0Vdu7whHqq%2FxRjPUmTSNxcmq%2FRasEiju47%2B%2B7CpX9F7dXAx%2F%2BTRDuQtXedU%2B854ZJogemGYA6yrZqe5Msu4IN5YzjIE6l65eLfDbS29tIBzor7KXdYLpvE94%2Bz1jnumVOYSIyDYXZhsyybYRlf9CcVsB7jjDa5XA5u547%2FkL474mygJJU40YhadTMNsukNNvtc%2B3CYlq2m0mAtKFPWT2lhlLQi6XmID%2BII3sXAN3h3V%2FoszfodcecWamlcb%2B8QLs05swbqHuumJW37WP4wQn1gsW8oXeMIy8jsQGOqUBOwntm50Xx7%2BVRhagySoXcCrp9tJtjLWCjldZ93vcOQW%2B%2F4rtgvG77%2B04KppU4SGYE1hwFLctSLiX%2FgjwoIlBP06a6QPC165nuRLTzaypIFDS3R0MRkUixDNUWzGrNbT%2BXSsaU5F09hGTTeytwDYW4eDqBM1T4bLSXO5dS2cTXZMlRipq8GqcC5XTgNJA9tmGEP9ZCJCzJW16GXvIwucvDlQcwRZn&X-Amz-Signature=415365156d001f04a1931290b4296e380f6b13339c15bae715bdd9ceeedcd1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
