---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVRFA5N%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKzieWmxmvM7auCQeP86UY2chsS9V05gCgxJuxkKGh9AiEA29leimSZEw%2FFwANXBAcLv2Poe%2BXPHxmYYsvkjTCVtGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJkfaENGDfpuCDm4TyrcA8bSB9JtsnCSNu8%2FFIWquVldT0txGnniIPhYTXbauH5d4eNjiXPqthqyJvDWSTAYZot5OV9or%2Bqldi6KyDwWwYarV%2BnM%2Ft9lMpjcet4aJfMbH3C3lqcTcdOWvhw5YrOtgYtmf7B94gvDpAAKWjCxxgrpFPkpQy5LmyTIdcQhsC%2FKbUgG2yybxepNsNQGPnAd7Sx81CC9k0mNl7YAMqPkwx25uYeSgXw10u4QJjZMnMpZlJpPbhz2xWsMnhhkuzi68p1susqB%2F%2BEK6tvqGTnlgw3hvdSMlMpKGkvqIlsdlnS1VMpZ2wkto839tONberV1bUOZ0nOdtIAAhmSJxYOb2l3oGdCPPb8acVCWAstgWz0tHQihQOBs68rKGRrpLS%2BJ3sB3ayisAkyxyWi%2FqQuo7Uu5Q1kO%2Bvfz0p2eLpVJXhw%2BFtcn7FTWOwCXPrQx1%2FLtFMb47eVMr31cJ6dGkQNIa2fNxwtrdgwsIE0EO61TKPCz4iW2Lw7nMOYXmRleoLtkaC1RmPTw9DkoeyrUaBpPgXXCFHSY4WYUfbnXkxVhEMaCyyMFiSmg6qaD8EQLy42uh4coMOFXUwDql8HY3WlY%2Bhj8LzEHfIyZVB7OyQD93xqTMfvaHE3OhZBTR3H2MMS248UGOqUBrgxYiqy5eru2GCrcBG2ehdTZ5DZIWvhtltY3FAqm2%2B6f3gwI8GS2hOLdTFCXdbZTAxBzcUbrYOE0Y5kxcDiRCpLm7cmKewwJ4%2FdAEe%2BCdrjTxlOoprSFGp7uVtaw46Vh7q%2FWqRJvV7eslmBw22xUDmDlxgKrIVb6DmZeLrxOE3lYA3RWeuz9bpLujweUak73LH2zgeOwJLosNm%2BFV5nu9koQ1wOL&X-Amz-Signature=3f3289c3ac9134f9a5610069d63efaea19632113c0caf5fdb89e0c2668c51417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVRFA5N%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKzieWmxmvM7auCQeP86UY2chsS9V05gCgxJuxkKGh9AiEA29leimSZEw%2FFwANXBAcLv2Poe%2BXPHxmYYsvkjTCVtGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJkfaENGDfpuCDm4TyrcA8bSB9JtsnCSNu8%2FFIWquVldT0txGnniIPhYTXbauH5d4eNjiXPqthqyJvDWSTAYZot5OV9or%2Bqldi6KyDwWwYarV%2BnM%2Ft9lMpjcet4aJfMbH3C3lqcTcdOWvhw5YrOtgYtmf7B94gvDpAAKWjCxxgrpFPkpQy5LmyTIdcQhsC%2FKbUgG2yybxepNsNQGPnAd7Sx81CC9k0mNl7YAMqPkwx25uYeSgXw10u4QJjZMnMpZlJpPbhz2xWsMnhhkuzi68p1susqB%2F%2BEK6tvqGTnlgw3hvdSMlMpKGkvqIlsdlnS1VMpZ2wkto839tONberV1bUOZ0nOdtIAAhmSJxYOb2l3oGdCPPb8acVCWAstgWz0tHQihQOBs68rKGRrpLS%2BJ3sB3ayisAkyxyWi%2FqQuo7Uu5Q1kO%2Bvfz0p2eLpVJXhw%2BFtcn7FTWOwCXPrQx1%2FLtFMb47eVMr31cJ6dGkQNIa2fNxwtrdgwsIE0EO61TKPCz4iW2Lw7nMOYXmRleoLtkaC1RmPTw9DkoeyrUaBpPgXXCFHSY4WYUfbnXkxVhEMaCyyMFiSmg6qaD8EQLy42uh4coMOFXUwDql8HY3WlY%2Bhj8LzEHfIyZVB7OyQD93xqTMfvaHE3OhZBTR3H2MMS248UGOqUBrgxYiqy5eru2GCrcBG2ehdTZ5DZIWvhtltY3FAqm2%2B6f3gwI8GS2hOLdTFCXdbZTAxBzcUbrYOE0Y5kxcDiRCpLm7cmKewwJ4%2FdAEe%2BCdrjTxlOoprSFGp7uVtaw46Vh7q%2FWqRJvV7eslmBw22xUDmDlxgKrIVb6DmZeLrxOE3lYA3RWeuz9bpLujweUak73LH2zgeOwJLosNm%2BFV5nu9koQ1wOL&X-Amz-Signature=bf1fdc79d10713b1d640e5cd495013bd331488efb857c3394d57a47b61b7b9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVRFA5N%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKzieWmxmvM7auCQeP86UY2chsS9V05gCgxJuxkKGh9AiEA29leimSZEw%2FFwANXBAcLv2Poe%2BXPHxmYYsvkjTCVtGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJkfaENGDfpuCDm4TyrcA8bSB9JtsnCSNu8%2FFIWquVldT0txGnniIPhYTXbauH5d4eNjiXPqthqyJvDWSTAYZot5OV9or%2Bqldi6KyDwWwYarV%2BnM%2Ft9lMpjcet4aJfMbH3C3lqcTcdOWvhw5YrOtgYtmf7B94gvDpAAKWjCxxgrpFPkpQy5LmyTIdcQhsC%2FKbUgG2yybxepNsNQGPnAd7Sx81CC9k0mNl7YAMqPkwx25uYeSgXw10u4QJjZMnMpZlJpPbhz2xWsMnhhkuzi68p1susqB%2F%2BEK6tvqGTnlgw3hvdSMlMpKGkvqIlsdlnS1VMpZ2wkto839tONberV1bUOZ0nOdtIAAhmSJxYOb2l3oGdCPPb8acVCWAstgWz0tHQihQOBs68rKGRrpLS%2BJ3sB3ayisAkyxyWi%2FqQuo7Uu5Q1kO%2Bvfz0p2eLpVJXhw%2BFtcn7FTWOwCXPrQx1%2FLtFMb47eVMr31cJ6dGkQNIa2fNxwtrdgwsIE0EO61TKPCz4iW2Lw7nMOYXmRleoLtkaC1RmPTw9DkoeyrUaBpPgXXCFHSY4WYUfbnXkxVhEMaCyyMFiSmg6qaD8EQLy42uh4coMOFXUwDql8HY3WlY%2Bhj8LzEHfIyZVB7OyQD93xqTMfvaHE3OhZBTR3H2MMS248UGOqUBrgxYiqy5eru2GCrcBG2ehdTZ5DZIWvhtltY3FAqm2%2B6f3gwI8GS2hOLdTFCXdbZTAxBzcUbrYOE0Y5kxcDiRCpLm7cmKewwJ4%2FdAEe%2BCdrjTxlOoprSFGp7uVtaw46Vh7q%2FWqRJvV7eslmBw22xUDmDlxgKrIVb6DmZeLrxOE3lYA3RWeuz9bpLujweUak73LH2zgeOwJLosNm%2BFV5nu9koQ1wOL&X-Amz-Signature=dae8015a7cd749841679f3365a7eaf71e70e815698a036cd70a03403f3f93683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVRFA5N%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKzieWmxmvM7auCQeP86UY2chsS9V05gCgxJuxkKGh9AiEA29leimSZEw%2FFwANXBAcLv2Poe%2BXPHxmYYsvkjTCVtGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJkfaENGDfpuCDm4TyrcA8bSB9JtsnCSNu8%2FFIWquVldT0txGnniIPhYTXbauH5d4eNjiXPqthqyJvDWSTAYZot5OV9or%2Bqldi6KyDwWwYarV%2BnM%2Ft9lMpjcet4aJfMbH3C3lqcTcdOWvhw5YrOtgYtmf7B94gvDpAAKWjCxxgrpFPkpQy5LmyTIdcQhsC%2FKbUgG2yybxepNsNQGPnAd7Sx81CC9k0mNl7YAMqPkwx25uYeSgXw10u4QJjZMnMpZlJpPbhz2xWsMnhhkuzi68p1susqB%2F%2BEK6tvqGTnlgw3hvdSMlMpKGkvqIlsdlnS1VMpZ2wkto839tONberV1bUOZ0nOdtIAAhmSJxYOb2l3oGdCPPb8acVCWAstgWz0tHQihQOBs68rKGRrpLS%2BJ3sB3ayisAkyxyWi%2FqQuo7Uu5Q1kO%2Bvfz0p2eLpVJXhw%2BFtcn7FTWOwCXPrQx1%2FLtFMb47eVMr31cJ6dGkQNIa2fNxwtrdgwsIE0EO61TKPCz4iW2Lw7nMOYXmRleoLtkaC1RmPTw9DkoeyrUaBpPgXXCFHSY4WYUfbnXkxVhEMaCyyMFiSmg6qaD8EQLy42uh4coMOFXUwDql8HY3WlY%2Bhj8LzEHfIyZVB7OyQD93xqTMfvaHE3OhZBTR3H2MMS248UGOqUBrgxYiqy5eru2GCrcBG2ehdTZ5DZIWvhtltY3FAqm2%2B6f3gwI8GS2hOLdTFCXdbZTAxBzcUbrYOE0Y5kxcDiRCpLm7cmKewwJ4%2FdAEe%2BCdrjTxlOoprSFGp7uVtaw46Vh7q%2FWqRJvV7eslmBw22xUDmDlxgKrIVb6DmZeLrxOE3lYA3RWeuz9bpLujweUak73LH2zgeOwJLosNm%2BFV5nu9koQ1wOL&X-Amz-Signature=e2c2f8a04dfec4664851a4a4deb2056b93fb3dfd3605b8c709d6f7cb5af15334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVRFA5N%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKzieWmxmvM7auCQeP86UY2chsS9V05gCgxJuxkKGh9AiEA29leimSZEw%2FFwANXBAcLv2Poe%2BXPHxmYYsvkjTCVtGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJkfaENGDfpuCDm4TyrcA8bSB9JtsnCSNu8%2FFIWquVldT0txGnniIPhYTXbauH5d4eNjiXPqthqyJvDWSTAYZot5OV9or%2Bqldi6KyDwWwYarV%2BnM%2Ft9lMpjcet4aJfMbH3C3lqcTcdOWvhw5YrOtgYtmf7B94gvDpAAKWjCxxgrpFPkpQy5LmyTIdcQhsC%2FKbUgG2yybxepNsNQGPnAd7Sx81CC9k0mNl7YAMqPkwx25uYeSgXw10u4QJjZMnMpZlJpPbhz2xWsMnhhkuzi68p1susqB%2F%2BEK6tvqGTnlgw3hvdSMlMpKGkvqIlsdlnS1VMpZ2wkto839tONberV1bUOZ0nOdtIAAhmSJxYOb2l3oGdCPPb8acVCWAstgWz0tHQihQOBs68rKGRrpLS%2BJ3sB3ayisAkyxyWi%2FqQuo7Uu5Q1kO%2Bvfz0p2eLpVJXhw%2BFtcn7FTWOwCXPrQx1%2FLtFMb47eVMr31cJ6dGkQNIa2fNxwtrdgwsIE0EO61TKPCz4iW2Lw7nMOYXmRleoLtkaC1RmPTw9DkoeyrUaBpPgXXCFHSY4WYUfbnXkxVhEMaCyyMFiSmg6qaD8EQLy42uh4coMOFXUwDql8HY3WlY%2Bhj8LzEHfIyZVB7OyQD93xqTMfvaHE3OhZBTR3H2MMS248UGOqUBrgxYiqy5eru2GCrcBG2ehdTZ5DZIWvhtltY3FAqm2%2B6f3gwI8GS2hOLdTFCXdbZTAxBzcUbrYOE0Y5kxcDiRCpLm7cmKewwJ4%2FdAEe%2BCdrjTxlOoprSFGp7uVtaw46Vh7q%2FWqRJvV7eslmBw22xUDmDlxgKrIVb6DmZeLrxOE3lYA3RWeuz9bpLujweUak73LH2zgeOwJLosNm%2BFV5nu9koQ1wOL&X-Amz-Signature=e9adf9c9d075cfa396aeb962fa61f83e6ddd545eba1b281eec176b74fb2e61ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVRFA5N%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKzieWmxmvM7auCQeP86UY2chsS9V05gCgxJuxkKGh9AiEA29leimSZEw%2FFwANXBAcLv2Poe%2BXPHxmYYsvkjTCVtGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJkfaENGDfpuCDm4TyrcA8bSB9JtsnCSNu8%2FFIWquVldT0txGnniIPhYTXbauH5d4eNjiXPqthqyJvDWSTAYZot5OV9or%2Bqldi6KyDwWwYarV%2BnM%2Ft9lMpjcet4aJfMbH3C3lqcTcdOWvhw5YrOtgYtmf7B94gvDpAAKWjCxxgrpFPkpQy5LmyTIdcQhsC%2FKbUgG2yybxepNsNQGPnAd7Sx81CC9k0mNl7YAMqPkwx25uYeSgXw10u4QJjZMnMpZlJpPbhz2xWsMnhhkuzi68p1susqB%2F%2BEK6tvqGTnlgw3hvdSMlMpKGkvqIlsdlnS1VMpZ2wkto839tONberV1bUOZ0nOdtIAAhmSJxYOb2l3oGdCPPb8acVCWAstgWz0tHQihQOBs68rKGRrpLS%2BJ3sB3ayisAkyxyWi%2FqQuo7Uu5Q1kO%2Bvfz0p2eLpVJXhw%2BFtcn7FTWOwCXPrQx1%2FLtFMb47eVMr31cJ6dGkQNIa2fNxwtrdgwsIE0EO61TKPCz4iW2Lw7nMOYXmRleoLtkaC1RmPTw9DkoeyrUaBpPgXXCFHSY4WYUfbnXkxVhEMaCyyMFiSmg6qaD8EQLy42uh4coMOFXUwDql8HY3WlY%2Bhj8LzEHfIyZVB7OyQD93xqTMfvaHE3OhZBTR3H2MMS248UGOqUBrgxYiqy5eru2GCrcBG2ehdTZ5DZIWvhtltY3FAqm2%2B6f3gwI8GS2hOLdTFCXdbZTAxBzcUbrYOE0Y5kxcDiRCpLm7cmKewwJ4%2FdAEe%2BCdrjTxlOoprSFGp7uVtaw46Vh7q%2FWqRJvV7eslmBw22xUDmDlxgKrIVb6DmZeLrxOE3lYA3RWeuz9bpLujweUak73LH2zgeOwJLosNm%2BFV5nu9koQ1wOL&X-Amz-Signature=3f2cbf1af76ea5dea79fa03a3442b37c88abf3d3f71182166cec7b48d7112adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVRFA5N%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKzieWmxmvM7auCQeP86UY2chsS9V05gCgxJuxkKGh9AiEA29leimSZEw%2FFwANXBAcLv2Poe%2BXPHxmYYsvkjTCVtGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJkfaENGDfpuCDm4TyrcA8bSB9JtsnCSNu8%2FFIWquVldT0txGnniIPhYTXbauH5d4eNjiXPqthqyJvDWSTAYZot5OV9or%2Bqldi6KyDwWwYarV%2BnM%2Ft9lMpjcet4aJfMbH3C3lqcTcdOWvhw5YrOtgYtmf7B94gvDpAAKWjCxxgrpFPkpQy5LmyTIdcQhsC%2FKbUgG2yybxepNsNQGPnAd7Sx81CC9k0mNl7YAMqPkwx25uYeSgXw10u4QJjZMnMpZlJpPbhz2xWsMnhhkuzi68p1susqB%2F%2BEK6tvqGTnlgw3hvdSMlMpKGkvqIlsdlnS1VMpZ2wkto839tONberV1bUOZ0nOdtIAAhmSJxYOb2l3oGdCPPb8acVCWAstgWz0tHQihQOBs68rKGRrpLS%2BJ3sB3ayisAkyxyWi%2FqQuo7Uu5Q1kO%2Bvfz0p2eLpVJXhw%2BFtcn7FTWOwCXPrQx1%2FLtFMb47eVMr31cJ6dGkQNIa2fNxwtrdgwsIE0EO61TKPCz4iW2Lw7nMOYXmRleoLtkaC1RmPTw9DkoeyrUaBpPgXXCFHSY4WYUfbnXkxVhEMaCyyMFiSmg6qaD8EQLy42uh4coMOFXUwDql8HY3WlY%2Bhj8LzEHfIyZVB7OyQD93xqTMfvaHE3OhZBTR3H2MMS248UGOqUBrgxYiqy5eru2GCrcBG2ehdTZ5DZIWvhtltY3FAqm2%2B6f3gwI8GS2hOLdTFCXdbZTAxBzcUbrYOE0Y5kxcDiRCpLm7cmKewwJ4%2FdAEe%2BCdrjTxlOoprSFGp7uVtaw46Vh7q%2FWqRJvV7eslmBw22xUDmDlxgKrIVb6DmZeLrxOE3lYA3RWeuz9bpLujweUak73LH2zgeOwJLosNm%2BFV5nu9koQ1wOL&X-Amz-Signature=46f7ce4db07f64268dadac70a79a85fbce3067efb0f64f3ee5bebc96a7200ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
