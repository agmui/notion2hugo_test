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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQQBXUQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCXGYDL%2BpgSRcPIyqlVW%2BaUSdvwyu3nMsdK17oJxfoQxQIgRr8M4ScK8fGmXUFKwDWs3%2B3gIOS%2BrlrPHMRf0mqHn64q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLZSmJ3Hk2duealrHCrcA%2FfbHwFQKK7Tpw8dSibtdcFyeAXJKL0KnDEsc8s9vjO9VIJF%2BUsLvzkcz9cCRRn1Rlke8VCxcZAMkTVP2tWP06ahlUhjfbEJrvQzWs3xtYrTccAM0KaG0BFAtBszkVHkH92EL7dUER9Qs82gVS2a2JB6mWtmW2XO%2FwzvyUTlpa8uuZFoBEfCoR0XtVq2BPWVC9KGDPXqVpuN%2FeoVrju%2BazPPsCmPLxNZt5twiVI1CuFashq%2FyK9pAG193b8Z5Zg%2BzDLJ4iUYnZpWfetvFxO2WNJ9r5xlJkk%2F7zhr8tdHuafEhBq08PIq8b36qM1EF2TmIV41oEj8WqOJQlo5f4YApu3%2B8ukj9CSRwJgh1qQKBOQIZ%2BODJj%2Fq7TajDXs3UhrkE0G0z7eDRB0wf4ECO4pZD7i%2BXGWzMGJSFwZ%2FgHQZPLuxltrI76E61nhCETsv5BFcCuq%2F1v7q8EgM3vZTr5jDn3Q0mLkctkaa1aH0niaYv14sAh5IsZdy1Y5dIwQuM4%2FsEzdRWWHFGZ6wKsoop1kWERMnjE2hyBWEB1opaPvJusd9KwlxqzvC0IMM7DYuqsVQda0nP8%2Bxn3qC%2F12qgutB0G%2FpxfhDiUc4hgy0YTG1Hya4tjh5Ns4jbm1TSt0BMJ%2Fn%2B8EGOqUBJkPMCc%2FSzDdkVJCmRtgjliuU1SS1zLD4UiPc14CAZ3E6bxMePSA5BGI5lJMUfC0iEEyRUFLnBchJH8uxVVJlAlqcBor2GAhuji9WpfYVUJyDcv%2FJa3Rhk94bcjxk5ZCukBtCJJmv0Gf4BeQvxH%2F8kqdpcay2y3E7UXCjcuILRHWh2nn2ekcIzKlVvEFGb1w2Sy5hFqzkkBThg5boL5n0MPpXeg6v&X-Amz-Signature=f92eabebd17b882462d3f016fb1cf2bcbc65ce0a060abff34396f94e418f7e93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQQBXUQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCXGYDL%2BpgSRcPIyqlVW%2BaUSdvwyu3nMsdK17oJxfoQxQIgRr8M4ScK8fGmXUFKwDWs3%2B3gIOS%2BrlrPHMRf0mqHn64q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLZSmJ3Hk2duealrHCrcA%2FfbHwFQKK7Tpw8dSibtdcFyeAXJKL0KnDEsc8s9vjO9VIJF%2BUsLvzkcz9cCRRn1Rlke8VCxcZAMkTVP2tWP06ahlUhjfbEJrvQzWs3xtYrTccAM0KaG0BFAtBszkVHkH92EL7dUER9Qs82gVS2a2JB6mWtmW2XO%2FwzvyUTlpa8uuZFoBEfCoR0XtVq2BPWVC9KGDPXqVpuN%2FeoVrju%2BazPPsCmPLxNZt5twiVI1CuFashq%2FyK9pAG193b8Z5Zg%2BzDLJ4iUYnZpWfetvFxO2WNJ9r5xlJkk%2F7zhr8tdHuafEhBq08PIq8b36qM1EF2TmIV41oEj8WqOJQlo5f4YApu3%2B8ukj9CSRwJgh1qQKBOQIZ%2BODJj%2Fq7TajDXs3UhrkE0G0z7eDRB0wf4ECO4pZD7i%2BXGWzMGJSFwZ%2FgHQZPLuxltrI76E61nhCETsv5BFcCuq%2F1v7q8EgM3vZTr5jDn3Q0mLkctkaa1aH0niaYv14sAh5IsZdy1Y5dIwQuM4%2FsEzdRWWHFGZ6wKsoop1kWERMnjE2hyBWEB1opaPvJusd9KwlxqzvC0IMM7DYuqsVQda0nP8%2Bxn3qC%2F12qgutB0G%2FpxfhDiUc4hgy0YTG1Hya4tjh5Ns4jbm1TSt0BMJ%2Fn%2B8EGOqUBJkPMCc%2FSzDdkVJCmRtgjliuU1SS1zLD4UiPc14CAZ3E6bxMePSA5BGI5lJMUfC0iEEyRUFLnBchJH8uxVVJlAlqcBor2GAhuji9WpfYVUJyDcv%2FJa3Rhk94bcjxk5ZCukBtCJJmv0Gf4BeQvxH%2F8kqdpcay2y3E7UXCjcuILRHWh2nn2ekcIzKlVvEFGb1w2Sy5hFqzkkBThg5boL5n0MPpXeg6v&X-Amz-Signature=291945a9275fb97f786c14caddad633ab08a798dbfdc2137862995bcb32affcc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQQBXUQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCXGYDL%2BpgSRcPIyqlVW%2BaUSdvwyu3nMsdK17oJxfoQxQIgRr8M4ScK8fGmXUFKwDWs3%2B3gIOS%2BrlrPHMRf0mqHn64q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLZSmJ3Hk2duealrHCrcA%2FfbHwFQKK7Tpw8dSibtdcFyeAXJKL0KnDEsc8s9vjO9VIJF%2BUsLvzkcz9cCRRn1Rlke8VCxcZAMkTVP2tWP06ahlUhjfbEJrvQzWs3xtYrTccAM0KaG0BFAtBszkVHkH92EL7dUER9Qs82gVS2a2JB6mWtmW2XO%2FwzvyUTlpa8uuZFoBEfCoR0XtVq2BPWVC9KGDPXqVpuN%2FeoVrju%2BazPPsCmPLxNZt5twiVI1CuFashq%2FyK9pAG193b8Z5Zg%2BzDLJ4iUYnZpWfetvFxO2WNJ9r5xlJkk%2F7zhr8tdHuafEhBq08PIq8b36qM1EF2TmIV41oEj8WqOJQlo5f4YApu3%2B8ukj9CSRwJgh1qQKBOQIZ%2BODJj%2Fq7TajDXs3UhrkE0G0z7eDRB0wf4ECO4pZD7i%2BXGWzMGJSFwZ%2FgHQZPLuxltrI76E61nhCETsv5BFcCuq%2F1v7q8EgM3vZTr5jDn3Q0mLkctkaa1aH0niaYv14sAh5IsZdy1Y5dIwQuM4%2FsEzdRWWHFGZ6wKsoop1kWERMnjE2hyBWEB1opaPvJusd9KwlxqzvC0IMM7DYuqsVQda0nP8%2Bxn3qC%2F12qgutB0G%2FpxfhDiUc4hgy0YTG1Hya4tjh5Ns4jbm1TSt0BMJ%2Fn%2B8EGOqUBJkPMCc%2FSzDdkVJCmRtgjliuU1SS1zLD4UiPc14CAZ3E6bxMePSA5BGI5lJMUfC0iEEyRUFLnBchJH8uxVVJlAlqcBor2GAhuji9WpfYVUJyDcv%2FJa3Rhk94bcjxk5ZCukBtCJJmv0Gf4BeQvxH%2F8kqdpcay2y3E7UXCjcuILRHWh2nn2ekcIzKlVvEFGb1w2Sy5hFqzkkBThg5boL5n0MPpXeg6v&X-Amz-Signature=145e17113dc78fee59417fc8c7e4b2c5e32112904c0e98e3d0126abcc2bf827d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQQBXUQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCXGYDL%2BpgSRcPIyqlVW%2BaUSdvwyu3nMsdK17oJxfoQxQIgRr8M4ScK8fGmXUFKwDWs3%2B3gIOS%2BrlrPHMRf0mqHn64q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLZSmJ3Hk2duealrHCrcA%2FfbHwFQKK7Tpw8dSibtdcFyeAXJKL0KnDEsc8s9vjO9VIJF%2BUsLvzkcz9cCRRn1Rlke8VCxcZAMkTVP2tWP06ahlUhjfbEJrvQzWs3xtYrTccAM0KaG0BFAtBszkVHkH92EL7dUER9Qs82gVS2a2JB6mWtmW2XO%2FwzvyUTlpa8uuZFoBEfCoR0XtVq2BPWVC9KGDPXqVpuN%2FeoVrju%2BazPPsCmPLxNZt5twiVI1CuFashq%2FyK9pAG193b8Z5Zg%2BzDLJ4iUYnZpWfetvFxO2WNJ9r5xlJkk%2F7zhr8tdHuafEhBq08PIq8b36qM1EF2TmIV41oEj8WqOJQlo5f4YApu3%2B8ukj9CSRwJgh1qQKBOQIZ%2BODJj%2Fq7TajDXs3UhrkE0G0z7eDRB0wf4ECO4pZD7i%2BXGWzMGJSFwZ%2FgHQZPLuxltrI76E61nhCETsv5BFcCuq%2F1v7q8EgM3vZTr5jDn3Q0mLkctkaa1aH0niaYv14sAh5IsZdy1Y5dIwQuM4%2FsEzdRWWHFGZ6wKsoop1kWERMnjE2hyBWEB1opaPvJusd9KwlxqzvC0IMM7DYuqsVQda0nP8%2Bxn3qC%2F12qgutB0G%2FpxfhDiUc4hgy0YTG1Hya4tjh5Ns4jbm1TSt0BMJ%2Fn%2B8EGOqUBJkPMCc%2FSzDdkVJCmRtgjliuU1SS1zLD4UiPc14CAZ3E6bxMePSA5BGI5lJMUfC0iEEyRUFLnBchJH8uxVVJlAlqcBor2GAhuji9WpfYVUJyDcv%2FJa3Rhk94bcjxk5ZCukBtCJJmv0Gf4BeQvxH%2F8kqdpcay2y3E7UXCjcuILRHWh2nn2ekcIzKlVvEFGb1w2Sy5hFqzkkBThg5boL5n0MPpXeg6v&X-Amz-Signature=7747362fd5d165729959a8bb49b9d2149f711a4ae32eebfd3541a44303a633d3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQQBXUQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCXGYDL%2BpgSRcPIyqlVW%2BaUSdvwyu3nMsdK17oJxfoQxQIgRr8M4ScK8fGmXUFKwDWs3%2B3gIOS%2BrlrPHMRf0mqHn64q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLZSmJ3Hk2duealrHCrcA%2FfbHwFQKK7Tpw8dSibtdcFyeAXJKL0KnDEsc8s9vjO9VIJF%2BUsLvzkcz9cCRRn1Rlke8VCxcZAMkTVP2tWP06ahlUhjfbEJrvQzWs3xtYrTccAM0KaG0BFAtBszkVHkH92EL7dUER9Qs82gVS2a2JB6mWtmW2XO%2FwzvyUTlpa8uuZFoBEfCoR0XtVq2BPWVC9KGDPXqVpuN%2FeoVrju%2BazPPsCmPLxNZt5twiVI1CuFashq%2FyK9pAG193b8Z5Zg%2BzDLJ4iUYnZpWfetvFxO2WNJ9r5xlJkk%2F7zhr8tdHuafEhBq08PIq8b36qM1EF2TmIV41oEj8WqOJQlo5f4YApu3%2B8ukj9CSRwJgh1qQKBOQIZ%2BODJj%2Fq7TajDXs3UhrkE0G0z7eDRB0wf4ECO4pZD7i%2BXGWzMGJSFwZ%2FgHQZPLuxltrI76E61nhCETsv5BFcCuq%2F1v7q8EgM3vZTr5jDn3Q0mLkctkaa1aH0niaYv14sAh5IsZdy1Y5dIwQuM4%2FsEzdRWWHFGZ6wKsoop1kWERMnjE2hyBWEB1opaPvJusd9KwlxqzvC0IMM7DYuqsVQda0nP8%2Bxn3qC%2F12qgutB0G%2FpxfhDiUc4hgy0YTG1Hya4tjh5Ns4jbm1TSt0BMJ%2Fn%2B8EGOqUBJkPMCc%2FSzDdkVJCmRtgjliuU1SS1zLD4UiPc14CAZ3E6bxMePSA5BGI5lJMUfC0iEEyRUFLnBchJH8uxVVJlAlqcBor2GAhuji9WpfYVUJyDcv%2FJa3Rhk94bcjxk5ZCukBtCJJmv0Gf4BeQvxH%2F8kqdpcay2y3E7UXCjcuILRHWh2nn2ekcIzKlVvEFGb1w2Sy5hFqzkkBThg5boL5n0MPpXeg6v&X-Amz-Signature=3a436cc1249061947e11ea5f93f35f5145664f5fba81cb2c2e5fa3f2ace6de09&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQQBXUQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCXGYDL%2BpgSRcPIyqlVW%2BaUSdvwyu3nMsdK17oJxfoQxQIgRr8M4ScK8fGmXUFKwDWs3%2B3gIOS%2BrlrPHMRf0mqHn64q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLZSmJ3Hk2duealrHCrcA%2FfbHwFQKK7Tpw8dSibtdcFyeAXJKL0KnDEsc8s9vjO9VIJF%2BUsLvzkcz9cCRRn1Rlke8VCxcZAMkTVP2tWP06ahlUhjfbEJrvQzWs3xtYrTccAM0KaG0BFAtBszkVHkH92EL7dUER9Qs82gVS2a2JB6mWtmW2XO%2FwzvyUTlpa8uuZFoBEfCoR0XtVq2BPWVC9KGDPXqVpuN%2FeoVrju%2BazPPsCmPLxNZt5twiVI1CuFashq%2FyK9pAG193b8Z5Zg%2BzDLJ4iUYnZpWfetvFxO2WNJ9r5xlJkk%2F7zhr8tdHuafEhBq08PIq8b36qM1EF2TmIV41oEj8WqOJQlo5f4YApu3%2B8ukj9CSRwJgh1qQKBOQIZ%2BODJj%2Fq7TajDXs3UhrkE0G0z7eDRB0wf4ECO4pZD7i%2BXGWzMGJSFwZ%2FgHQZPLuxltrI76E61nhCETsv5BFcCuq%2F1v7q8EgM3vZTr5jDn3Q0mLkctkaa1aH0niaYv14sAh5IsZdy1Y5dIwQuM4%2FsEzdRWWHFGZ6wKsoop1kWERMnjE2hyBWEB1opaPvJusd9KwlxqzvC0IMM7DYuqsVQda0nP8%2Bxn3qC%2F12qgutB0G%2FpxfhDiUc4hgy0YTG1Hya4tjh5Ns4jbm1TSt0BMJ%2Fn%2B8EGOqUBJkPMCc%2FSzDdkVJCmRtgjliuU1SS1zLD4UiPc14CAZ3E6bxMePSA5BGI5lJMUfC0iEEyRUFLnBchJH8uxVVJlAlqcBor2GAhuji9WpfYVUJyDcv%2FJa3Rhk94bcjxk5ZCukBtCJJmv0Gf4BeQvxH%2F8kqdpcay2y3E7UXCjcuILRHWh2nn2ekcIzKlVvEFGb1w2Sy5hFqzkkBThg5boL5n0MPpXeg6v&X-Amz-Signature=c09cd55234adf0e25e7622ca7951f52bd755b6c8ffdbfe574e85ed879bdb6198&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQQBXUQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCXGYDL%2BpgSRcPIyqlVW%2BaUSdvwyu3nMsdK17oJxfoQxQIgRr8M4ScK8fGmXUFKwDWs3%2B3gIOS%2BrlrPHMRf0mqHn64q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLZSmJ3Hk2duealrHCrcA%2FfbHwFQKK7Tpw8dSibtdcFyeAXJKL0KnDEsc8s9vjO9VIJF%2BUsLvzkcz9cCRRn1Rlke8VCxcZAMkTVP2tWP06ahlUhjfbEJrvQzWs3xtYrTccAM0KaG0BFAtBszkVHkH92EL7dUER9Qs82gVS2a2JB6mWtmW2XO%2FwzvyUTlpa8uuZFoBEfCoR0XtVq2BPWVC9KGDPXqVpuN%2FeoVrju%2BazPPsCmPLxNZt5twiVI1CuFashq%2FyK9pAG193b8Z5Zg%2BzDLJ4iUYnZpWfetvFxO2WNJ9r5xlJkk%2F7zhr8tdHuafEhBq08PIq8b36qM1EF2TmIV41oEj8WqOJQlo5f4YApu3%2B8ukj9CSRwJgh1qQKBOQIZ%2BODJj%2Fq7TajDXs3UhrkE0G0z7eDRB0wf4ECO4pZD7i%2BXGWzMGJSFwZ%2FgHQZPLuxltrI76E61nhCETsv5BFcCuq%2F1v7q8EgM3vZTr5jDn3Q0mLkctkaa1aH0niaYv14sAh5IsZdy1Y5dIwQuM4%2FsEzdRWWHFGZ6wKsoop1kWERMnjE2hyBWEB1opaPvJusd9KwlxqzvC0IMM7DYuqsVQda0nP8%2Bxn3qC%2F12qgutB0G%2FpxfhDiUc4hgy0YTG1Hya4tjh5Ns4jbm1TSt0BMJ%2Fn%2B8EGOqUBJkPMCc%2FSzDdkVJCmRtgjliuU1SS1zLD4UiPc14CAZ3E6bxMePSA5BGI5lJMUfC0iEEyRUFLnBchJH8uxVVJlAlqcBor2GAhuji9WpfYVUJyDcv%2FJa3Rhk94bcjxk5ZCukBtCJJmv0Gf4BeQvxH%2F8kqdpcay2y3E7UXCjcuILRHWh2nn2ekcIzKlVvEFGb1w2Sy5hFqzkkBThg5boL5n0MPpXeg6v&X-Amz-Signature=77bcb89884fb0e3354d0cbe243ac688d79ad145224774ea80fa919e408256afc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
