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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAVTWC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDcNe1cpzXBwYBlQaayBXeTuCD6cHFlzlilf1FvVBc8IwIhAMyTxX8YKub4Q4KjZ94N9nHggdP7%2BDFM%2Fyx7XaV1tk0QKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BesihXn8WHUDCmewq3ANHccDoeQvqTpyPCjuFYR3j2ICpTjBMFb%2FxJsF5kFtVfLzJUXaSJBJE96jq6F4ycngvJTJLGOWrtSjCN2FRHNfMnyu2xK40fCEpKpdtR3r62Zq0WzaRKnKrNZJ9WEPSmuZKTA7%2FXjFSHq1MdjAPK0pF6%2FdpoMh0y96ZRulHgD9WCGs2lD3JEbzIaYMJT4oF38DYYUSmsI7hZOBFlzt0Y2GF0kHMVkZUwvGa5HIhCtoEuKkilbe5%2BWZPD9rYiVzlntBDBm6mrDCmT2UZxPEaC1yH3oD2CFf4fhwu%2FDHuYY%2Fbn%2BIlDZF9jAmM549CLRBWajBzinyFfZpghycEpPpr75ahRfNN3firIFH%2FrWUqkZpG6%2Bao%2FAvu6%2BS3dthI0C04NDa2Gb7CgfEIjC2AwFt201Gsmr7rcxgklGs79Aa%2B5NDlGW0V%2FBbgUY1v4HoGSLoWC%2FIU%2B59LF3aNGT4W80wC3KyjY6EWkARFELCkMyljg9ThGeGfAyt9NVZrzMtxnOoDAXQtHNJZOMt%2F45BYCTclgfIA9xNGLfa5E3yPtSluTXpatic28yNOOeLBYObVPNnmPRVhll6h3n%2Fx7a96JoCjGNHjIRO4h81HOdb1%2Ftqlw0IX12zYTp%2Bajh4d7EWU9jCP1ua%2FBjqkARXk01LxhgkbUUge4jm2PzKckQRAAMweH9%2F6pI81nomhSgipoerJL4Z3CIbSu8bRYPalUZNzamjyI20JCBTLvUzDwhWsCJydASuPD%2Fm9MYpQ%2FxHXtTjCcqMR%2BWo5lFwCI2iDXjMbqK3nd%2FT9TonmUpheslRJwiIezu14nk12Bzaswkd3jAqydR8ZTGO6%2FajVstPkxHGcGFg6Ooqcxb2IB%2FmxYTwl&X-Amz-Signature=cf8e07f72c848d1b782887aca9943bd9f0c7b820ef178e58e11002053de2b86b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAVTWC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDcNe1cpzXBwYBlQaayBXeTuCD6cHFlzlilf1FvVBc8IwIhAMyTxX8YKub4Q4KjZ94N9nHggdP7%2BDFM%2Fyx7XaV1tk0QKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BesihXn8WHUDCmewq3ANHccDoeQvqTpyPCjuFYR3j2ICpTjBMFb%2FxJsF5kFtVfLzJUXaSJBJE96jq6F4ycngvJTJLGOWrtSjCN2FRHNfMnyu2xK40fCEpKpdtR3r62Zq0WzaRKnKrNZJ9WEPSmuZKTA7%2FXjFSHq1MdjAPK0pF6%2FdpoMh0y96ZRulHgD9WCGs2lD3JEbzIaYMJT4oF38DYYUSmsI7hZOBFlzt0Y2GF0kHMVkZUwvGa5HIhCtoEuKkilbe5%2BWZPD9rYiVzlntBDBm6mrDCmT2UZxPEaC1yH3oD2CFf4fhwu%2FDHuYY%2Fbn%2BIlDZF9jAmM549CLRBWajBzinyFfZpghycEpPpr75ahRfNN3firIFH%2FrWUqkZpG6%2Bao%2FAvu6%2BS3dthI0C04NDa2Gb7CgfEIjC2AwFt201Gsmr7rcxgklGs79Aa%2B5NDlGW0V%2FBbgUY1v4HoGSLoWC%2FIU%2B59LF3aNGT4W80wC3KyjY6EWkARFELCkMyljg9ThGeGfAyt9NVZrzMtxnOoDAXQtHNJZOMt%2F45BYCTclgfIA9xNGLfa5E3yPtSluTXpatic28yNOOeLBYObVPNnmPRVhll6h3n%2Fx7a96JoCjGNHjIRO4h81HOdb1%2Ftqlw0IX12zYTp%2Bajh4d7EWU9jCP1ua%2FBjqkARXk01LxhgkbUUge4jm2PzKckQRAAMweH9%2F6pI81nomhSgipoerJL4Z3CIbSu8bRYPalUZNzamjyI20JCBTLvUzDwhWsCJydASuPD%2Fm9MYpQ%2FxHXtTjCcqMR%2BWo5lFwCI2iDXjMbqK3nd%2FT9TonmUpheslRJwiIezu14nk12Bzaswkd3jAqydR8ZTGO6%2FajVstPkxHGcGFg6Ooqcxb2IB%2FmxYTwl&X-Amz-Signature=62542762619e5e91f175fb8b141703bf413a1a68a6030ac1cf9752af4a9f851a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAVTWC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDcNe1cpzXBwYBlQaayBXeTuCD6cHFlzlilf1FvVBc8IwIhAMyTxX8YKub4Q4KjZ94N9nHggdP7%2BDFM%2Fyx7XaV1tk0QKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BesihXn8WHUDCmewq3ANHccDoeQvqTpyPCjuFYR3j2ICpTjBMFb%2FxJsF5kFtVfLzJUXaSJBJE96jq6F4ycngvJTJLGOWrtSjCN2FRHNfMnyu2xK40fCEpKpdtR3r62Zq0WzaRKnKrNZJ9WEPSmuZKTA7%2FXjFSHq1MdjAPK0pF6%2FdpoMh0y96ZRulHgD9WCGs2lD3JEbzIaYMJT4oF38DYYUSmsI7hZOBFlzt0Y2GF0kHMVkZUwvGa5HIhCtoEuKkilbe5%2BWZPD9rYiVzlntBDBm6mrDCmT2UZxPEaC1yH3oD2CFf4fhwu%2FDHuYY%2Fbn%2BIlDZF9jAmM549CLRBWajBzinyFfZpghycEpPpr75ahRfNN3firIFH%2FrWUqkZpG6%2Bao%2FAvu6%2BS3dthI0C04NDa2Gb7CgfEIjC2AwFt201Gsmr7rcxgklGs79Aa%2B5NDlGW0V%2FBbgUY1v4HoGSLoWC%2FIU%2B59LF3aNGT4W80wC3KyjY6EWkARFELCkMyljg9ThGeGfAyt9NVZrzMtxnOoDAXQtHNJZOMt%2F45BYCTclgfIA9xNGLfa5E3yPtSluTXpatic28yNOOeLBYObVPNnmPRVhll6h3n%2Fx7a96JoCjGNHjIRO4h81HOdb1%2Ftqlw0IX12zYTp%2Bajh4d7EWU9jCP1ua%2FBjqkARXk01LxhgkbUUge4jm2PzKckQRAAMweH9%2F6pI81nomhSgipoerJL4Z3CIbSu8bRYPalUZNzamjyI20JCBTLvUzDwhWsCJydASuPD%2Fm9MYpQ%2FxHXtTjCcqMR%2BWo5lFwCI2iDXjMbqK3nd%2FT9TonmUpheslRJwiIezu14nk12Bzaswkd3jAqydR8ZTGO6%2FajVstPkxHGcGFg6Ooqcxb2IB%2FmxYTwl&X-Amz-Signature=34a9c26b2758e1fd3fd967d77d55ba3b75abb4c1500570c21d94e22997be1e51&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAVTWC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDcNe1cpzXBwYBlQaayBXeTuCD6cHFlzlilf1FvVBc8IwIhAMyTxX8YKub4Q4KjZ94N9nHggdP7%2BDFM%2Fyx7XaV1tk0QKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BesihXn8WHUDCmewq3ANHccDoeQvqTpyPCjuFYR3j2ICpTjBMFb%2FxJsF5kFtVfLzJUXaSJBJE96jq6F4ycngvJTJLGOWrtSjCN2FRHNfMnyu2xK40fCEpKpdtR3r62Zq0WzaRKnKrNZJ9WEPSmuZKTA7%2FXjFSHq1MdjAPK0pF6%2FdpoMh0y96ZRulHgD9WCGs2lD3JEbzIaYMJT4oF38DYYUSmsI7hZOBFlzt0Y2GF0kHMVkZUwvGa5HIhCtoEuKkilbe5%2BWZPD9rYiVzlntBDBm6mrDCmT2UZxPEaC1yH3oD2CFf4fhwu%2FDHuYY%2Fbn%2BIlDZF9jAmM549CLRBWajBzinyFfZpghycEpPpr75ahRfNN3firIFH%2FrWUqkZpG6%2Bao%2FAvu6%2BS3dthI0C04NDa2Gb7CgfEIjC2AwFt201Gsmr7rcxgklGs79Aa%2B5NDlGW0V%2FBbgUY1v4HoGSLoWC%2FIU%2B59LF3aNGT4W80wC3KyjY6EWkARFELCkMyljg9ThGeGfAyt9NVZrzMtxnOoDAXQtHNJZOMt%2F45BYCTclgfIA9xNGLfa5E3yPtSluTXpatic28yNOOeLBYObVPNnmPRVhll6h3n%2Fx7a96JoCjGNHjIRO4h81HOdb1%2Ftqlw0IX12zYTp%2Bajh4d7EWU9jCP1ua%2FBjqkARXk01LxhgkbUUge4jm2PzKckQRAAMweH9%2F6pI81nomhSgipoerJL4Z3CIbSu8bRYPalUZNzamjyI20JCBTLvUzDwhWsCJydASuPD%2Fm9MYpQ%2FxHXtTjCcqMR%2BWo5lFwCI2iDXjMbqK3nd%2FT9TonmUpheslRJwiIezu14nk12Bzaswkd3jAqydR8ZTGO6%2FajVstPkxHGcGFg6Ooqcxb2IB%2FmxYTwl&X-Amz-Signature=5ba0b653414140a6e922df824ffa43bd7bdb5e335a6d8d4a180ffa4b984fa8a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAVTWC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDcNe1cpzXBwYBlQaayBXeTuCD6cHFlzlilf1FvVBc8IwIhAMyTxX8YKub4Q4KjZ94N9nHggdP7%2BDFM%2Fyx7XaV1tk0QKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BesihXn8WHUDCmewq3ANHccDoeQvqTpyPCjuFYR3j2ICpTjBMFb%2FxJsF5kFtVfLzJUXaSJBJE96jq6F4ycngvJTJLGOWrtSjCN2FRHNfMnyu2xK40fCEpKpdtR3r62Zq0WzaRKnKrNZJ9WEPSmuZKTA7%2FXjFSHq1MdjAPK0pF6%2FdpoMh0y96ZRulHgD9WCGs2lD3JEbzIaYMJT4oF38DYYUSmsI7hZOBFlzt0Y2GF0kHMVkZUwvGa5HIhCtoEuKkilbe5%2BWZPD9rYiVzlntBDBm6mrDCmT2UZxPEaC1yH3oD2CFf4fhwu%2FDHuYY%2Fbn%2BIlDZF9jAmM549CLRBWajBzinyFfZpghycEpPpr75ahRfNN3firIFH%2FrWUqkZpG6%2Bao%2FAvu6%2BS3dthI0C04NDa2Gb7CgfEIjC2AwFt201Gsmr7rcxgklGs79Aa%2B5NDlGW0V%2FBbgUY1v4HoGSLoWC%2FIU%2B59LF3aNGT4W80wC3KyjY6EWkARFELCkMyljg9ThGeGfAyt9NVZrzMtxnOoDAXQtHNJZOMt%2F45BYCTclgfIA9xNGLfa5E3yPtSluTXpatic28yNOOeLBYObVPNnmPRVhll6h3n%2Fx7a96JoCjGNHjIRO4h81HOdb1%2Ftqlw0IX12zYTp%2Bajh4d7EWU9jCP1ua%2FBjqkARXk01LxhgkbUUge4jm2PzKckQRAAMweH9%2F6pI81nomhSgipoerJL4Z3CIbSu8bRYPalUZNzamjyI20JCBTLvUzDwhWsCJydASuPD%2Fm9MYpQ%2FxHXtTjCcqMR%2BWo5lFwCI2iDXjMbqK3nd%2FT9TonmUpheslRJwiIezu14nk12Bzaswkd3jAqydR8ZTGO6%2FajVstPkxHGcGFg6Ooqcxb2IB%2FmxYTwl&X-Amz-Signature=6469073fe392d70a9a6c4188e0d1cc5cc3886515e3a3ff13ffab9365d6649972&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAVTWC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDcNe1cpzXBwYBlQaayBXeTuCD6cHFlzlilf1FvVBc8IwIhAMyTxX8YKub4Q4KjZ94N9nHggdP7%2BDFM%2Fyx7XaV1tk0QKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BesihXn8WHUDCmewq3ANHccDoeQvqTpyPCjuFYR3j2ICpTjBMFb%2FxJsF5kFtVfLzJUXaSJBJE96jq6F4ycngvJTJLGOWrtSjCN2FRHNfMnyu2xK40fCEpKpdtR3r62Zq0WzaRKnKrNZJ9WEPSmuZKTA7%2FXjFSHq1MdjAPK0pF6%2FdpoMh0y96ZRulHgD9WCGs2lD3JEbzIaYMJT4oF38DYYUSmsI7hZOBFlzt0Y2GF0kHMVkZUwvGa5HIhCtoEuKkilbe5%2BWZPD9rYiVzlntBDBm6mrDCmT2UZxPEaC1yH3oD2CFf4fhwu%2FDHuYY%2Fbn%2BIlDZF9jAmM549CLRBWajBzinyFfZpghycEpPpr75ahRfNN3firIFH%2FrWUqkZpG6%2Bao%2FAvu6%2BS3dthI0C04NDa2Gb7CgfEIjC2AwFt201Gsmr7rcxgklGs79Aa%2B5NDlGW0V%2FBbgUY1v4HoGSLoWC%2FIU%2B59LF3aNGT4W80wC3KyjY6EWkARFELCkMyljg9ThGeGfAyt9NVZrzMtxnOoDAXQtHNJZOMt%2F45BYCTclgfIA9xNGLfa5E3yPtSluTXpatic28yNOOeLBYObVPNnmPRVhll6h3n%2Fx7a96JoCjGNHjIRO4h81HOdb1%2Ftqlw0IX12zYTp%2Bajh4d7EWU9jCP1ua%2FBjqkARXk01LxhgkbUUge4jm2PzKckQRAAMweH9%2F6pI81nomhSgipoerJL4Z3CIbSu8bRYPalUZNzamjyI20JCBTLvUzDwhWsCJydASuPD%2Fm9MYpQ%2FxHXtTjCcqMR%2BWo5lFwCI2iDXjMbqK3nd%2FT9TonmUpheslRJwiIezu14nk12Bzaswkd3jAqydR8ZTGO6%2FajVstPkxHGcGFg6Ooqcxb2IB%2FmxYTwl&X-Amz-Signature=d1ff0da60f2bbd197598336cbed87bb3557e47ae552e9383177feb03d4b4c5ff&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHAVTWC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDcNe1cpzXBwYBlQaayBXeTuCD6cHFlzlilf1FvVBc8IwIhAMyTxX8YKub4Q4KjZ94N9nHggdP7%2BDFM%2Fyx7XaV1tk0QKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BesihXn8WHUDCmewq3ANHccDoeQvqTpyPCjuFYR3j2ICpTjBMFb%2FxJsF5kFtVfLzJUXaSJBJE96jq6F4ycngvJTJLGOWrtSjCN2FRHNfMnyu2xK40fCEpKpdtR3r62Zq0WzaRKnKrNZJ9WEPSmuZKTA7%2FXjFSHq1MdjAPK0pF6%2FdpoMh0y96ZRulHgD9WCGs2lD3JEbzIaYMJT4oF38DYYUSmsI7hZOBFlzt0Y2GF0kHMVkZUwvGa5HIhCtoEuKkilbe5%2BWZPD9rYiVzlntBDBm6mrDCmT2UZxPEaC1yH3oD2CFf4fhwu%2FDHuYY%2Fbn%2BIlDZF9jAmM549CLRBWajBzinyFfZpghycEpPpr75ahRfNN3firIFH%2FrWUqkZpG6%2Bao%2FAvu6%2BS3dthI0C04NDa2Gb7CgfEIjC2AwFt201Gsmr7rcxgklGs79Aa%2B5NDlGW0V%2FBbgUY1v4HoGSLoWC%2FIU%2B59LF3aNGT4W80wC3KyjY6EWkARFELCkMyljg9ThGeGfAyt9NVZrzMtxnOoDAXQtHNJZOMt%2F45BYCTclgfIA9xNGLfa5E3yPtSluTXpatic28yNOOeLBYObVPNnmPRVhll6h3n%2Fx7a96JoCjGNHjIRO4h81HOdb1%2Ftqlw0IX12zYTp%2Bajh4d7EWU9jCP1ua%2FBjqkARXk01LxhgkbUUge4jm2PzKckQRAAMweH9%2F6pI81nomhSgipoerJL4Z3CIbSu8bRYPalUZNzamjyI20JCBTLvUzDwhWsCJydASuPD%2Fm9MYpQ%2FxHXtTjCcqMR%2BWo5lFwCI2iDXjMbqK3nd%2FT9TonmUpheslRJwiIezu14nk12Bzaswkd3jAqydR8ZTGO6%2FajVstPkxHGcGFg6Ooqcxb2IB%2FmxYTwl&X-Amz-Signature=f2338fe7df6012c6fcc535a83a6213c0923dd186212e7d7210468567865cfbaf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
