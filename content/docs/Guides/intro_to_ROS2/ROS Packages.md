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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKY5OZZQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjGzg6egd%2FMBM05PH1j1e%2B4vMJVCEFuf0v0QDIUesdJAiEAqcdqRMDTqOsfOJEr9%2BKjsrBaBbfz6cnBeD8SaR9J%2BDcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJtJhGbJYstC3hYEFCrcAxQ3GD5v1g6oqiXvVfoThCoafLxlo5qzw5ooOFJFvtA%2F0eFoc1U6i1%2F0AiDOekUtuaBGfbg%2BFW9NwP6rREh8OC2k%2BkycB11YX%2BF%2BUVmrfrw5T4D7TvDWwnlp8nBVCQ%2BSbgGk74vfnBQgkKKgjBwMKObuT7OU7w4tRQCk%2FJNtXhvYB01UAgllxGtyIvSUikAD1Xr2rUrpKBCPsQwPBIQFAgQ8OnhW181Ta6H8eROpCHbHoRHALeDylrD6pZU7Own86M2JzuB%2B8OwS0cm93LMmnUUnnxN3q90MUH15JuSbZGTx5UXkBJ4Lnqip9z394V0j9uJ%2B28RDTaqqrtaVfU%2BfqFRoTprl6TOCegDsENBmJ7Hanrieub0q2Wnow4yCUo1I7W6VpeGka2wLXQxeFmsY9cadNCi72DnsnCf%2FDzqSiAGRv3O7E3LuhmD6vb%2B713tYugkTMJQhC2aIV40aeNu9atcbzqBPXvdYhCLJpSB9FSTZ2JEcwAQ2C%2BQRI0ffvPx8%2B%2FY66xl8M2aJqUbeA1UGnS66%2Fbdjx8Mrp%2Ff8Z%2FVeZjS9sxpHubVy8t7gS4zDZl%2FEuICv9V1SBZQ3DsdnY%2B96aMuoQZGXpOFdH2CgYSgEDbV3NwIS5cIChnCc%2BfTHMJDZvsQGOqUBm4Ngos087WzOifB2ci%2BI1%2BJ3s10Vb%2BnSB5mlE3uufKIdeAmBlatdBefYjxUIvN3xWGbjBmP17EZPlMobWg3lkW8tSjP7Q6dX6Hc64xN9fGw340iGhTXFBf%2BMHopwxZ61B%2FRDyVMHlfgfeE5AOjQJJj7LannEoQp22Xxr939ODQuAjQpk8pnuFMJbUcJV%2BTx3MXZ62HMfMUBfauq8%2BLHiAIA98Or%2F&X-Amz-Signature=cdb8ad8bc0395f9ca86ea07485cc8e16613742d69007c1a02d7dfe6079145fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKY5OZZQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjGzg6egd%2FMBM05PH1j1e%2B4vMJVCEFuf0v0QDIUesdJAiEAqcdqRMDTqOsfOJEr9%2BKjsrBaBbfz6cnBeD8SaR9J%2BDcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJtJhGbJYstC3hYEFCrcAxQ3GD5v1g6oqiXvVfoThCoafLxlo5qzw5ooOFJFvtA%2F0eFoc1U6i1%2F0AiDOekUtuaBGfbg%2BFW9NwP6rREh8OC2k%2BkycB11YX%2BF%2BUVmrfrw5T4D7TvDWwnlp8nBVCQ%2BSbgGk74vfnBQgkKKgjBwMKObuT7OU7w4tRQCk%2FJNtXhvYB01UAgllxGtyIvSUikAD1Xr2rUrpKBCPsQwPBIQFAgQ8OnhW181Ta6H8eROpCHbHoRHALeDylrD6pZU7Own86M2JzuB%2B8OwS0cm93LMmnUUnnxN3q90MUH15JuSbZGTx5UXkBJ4Lnqip9z394V0j9uJ%2B28RDTaqqrtaVfU%2BfqFRoTprl6TOCegDsENBmJ7Hanrieub0q2Wnow4yCUo1I7W6VpeGka2wLXQxeFmsY9cadNCi72DnsnCf%2FDzqSiAGRv3O7E3LuhmD6vb%2B713tYugkTMJQhC2aIV40aeNu9atcbzqBPXvdYhCLJpSB9FSTZ2JEcwAQ2C%2BQRI0ffvPx8%2B%2FY66xl8M2aJqUbeA1UGnS66%2Fbdjx8Mrp%2Ff8Z%2FVeZjS9sxpHubVy8t7gS4zDZl%2FEuICv9V1SBZQ3DsdnY%2B96aMuoQZGXpOFdH2CgYSgEDbV3NwIS5cIChnCc%2BfTHMJDZvsQGOqUBm4Ngos087WzOifB2ci%2BI1%2BJ3s10Vb%2BnSB5mlE3uufKIdeAmBlatdBefYjxUIvN3xWGbjBmP17EZPlMobWg3lkW8tSjP7Q6dX6Hc64xN9fGw340iGhTXFBf%2BMHopwxZ61B%2FRDyVMHlfgfeE5AOjQJJj7LannEoQp22Xxr939ODQuAjQpk8pnuFMJbUcJV%2BTx3MXZ62HMfMUBfauq8%2BLHiAIA98Or%2F&X-Amz-Signature=ab8c2c9bd739752254ef6f43d332d2842e6e7c6aefa4e99c55f06313e2027e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKY5OZZQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjGzg6egd%2FMBM05PH1j1e%2B4vMJVCEFuf0v0QDIUesdJAiEAqcdqRMDTqOsfOJEr9%2BKjsrBaBbfz6cnBeD8SaR9J%2BDcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJtJhGbJYstC3hYEFCrcAxQ3GD5v1g6oqiXvVfoThCoafLxlo5qzw5ooOFJFvtA%2F0eFoc1U6i1%2F0AiDOekUtuaBGfbg%2BFW9NwP6rREh8OC2k%2BkycB11YX%2BF%2BUVmrfrw5T4D7TvDWwnlp8nBVCQ%2BSbgGk74vfnBQgkKKgjBwMKObuT7OU7w4tRQCk%2FJNtXhvYB01UAgllxGtyIvSUikAD1Xr2rUrpKBCPsQwPBIQFAgQ8OnhW181Ta6H8eROpCHbHoRHALeDylrD6pZU7Own86M2JzuB%2B8OwS0cm93LMmnUUnnxN3q90MUH15JuSbZGTx5UXkBJ4Lnqip9z394V0j9uJ%2B28RDTaqqrtaVfU%2BfqFRoTprl6TOCegDsENBmJ7Hanrieub0q2Wnow4yCUo1I7W6VpeGka2wLXQxeFmsY9cadNCi72DnsnCf%2FDzqSiAGRv3O7E3LuhmD6vb%2B713tYugkTMJQhC2aIV40aeNu9atcbzqBPXvdYhCLJpSB9FSTZ2JEcwAQ2C%2BQRI0ffvPx8%2B%2FY66xl8M2aJqUbeA1UGnS66%2Fbdjx8Mrp%2Ff8Z%2FVeZjS9sxpHubVy8t7gS4zDZl%2FEuICv9V1SBZQ3DsdnY%2B96aMuoQZGXpOFdH2CgYSgEDbV3NwIS5cIChnCc%2BfTHMJDZvsQGOqUBm4Ngos087WzOifB2ci%2BI1%2BJ3s10Vb%2BnSB5mlE3uufKIdeAmBlatdBefYjxUIvN3xWGbjBmP17EZPlMobWg3lkW8tSjP7Q6dX6Hc64xN9fGw340iGhTXFBf%2BMHopwxZ61B%2FRDyVMHlfgfeE5AOjQJJj7LannEoQp22Xxr939ODQuAjQpk8pnuFMJbUcJV%2BTx3MXZ62HMfMUBfauq8%2BLHiAIA98Or%2F&X-Amz-Signature=e5c2d491513558c0fb09a3cb705ac67d92d415f1fa3c05cb70859d5911997ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKY5OZZQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjGzg6egd%2FMBM05PH1j1e%2B4vMJVCEFuf0v0QDIUesdJAiEAqcdqRMDTqOsfOJEr9%2BKjsrBaBbfz6cnBeD8SaR9J%2BDcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJtJhGbJYstC3hYEFCrcAxQ3GD5v1g6oqiXvVfoThCoafLxlo5qzw5ooOFJFvtA%2F0eFoc1U6i1%2F0AiDOekUtuaBGfbg%2BFW9NwP6rREh8OC2k%2BkycB11YX%2BF%2BUVmrfrw5T4D7TvDWwnlp8nBVCQ%2BSbgGk74vfnBQgkKKgjBwMKObuT7OU7w4tRQCk%2FJNtXhvYB01UAgllxGtyIvSUikAD1Xr2rUrpKBCPsQwPBIQFAgQ8OnhW181Ta6H8eROpCHbHoRHALeDylrD6pZU7Own86M2JzuB%2B8OwS0cm93LMmnUUnnxN3q90MUH15JuSbZGTx5UXkBJ4Lnqip9z394V0j9uJ%2B28RDTaqqrtaVfU%2BfqFRoTprl6TOCegDsENBmJ7Hanrieub0q2Wnow4yCUo1I7W6VpeGka2wLXQxeFmsY9cadNCi72DnsnCf%2FDzqSiAGRv3O7E3LuhmD6vb%2B713tYugkTMJQhC2aIV40aeNu9atcbzqBPXvdYhCLJpSB9FSTZ2JEcwAQ2C%2BQRI0ffvPx8%2B%2FY66xl8M2aJqUbeA1UGnS66%2Fbdjx8Mrp%2Ff8Z%2FVeZjS9sxpHubVy8t7gS4zDZl%2FEuICv9V1SBZQ3DsdnY%2B96aMuoQZGXpOFdH2CgYSgEDbV3NwIS5cIChnCc%2BfTHMJDZvsQGOqUBm4Ngos087WzOifB2ci%2BI1%2BJ3s10Vb%2BnSB5mlE3uufKIdeAmBlatdBefYjxUIvN3xWGbjBmP17EZPlMobWg3lkW8tSjP7Q6dX6Hc64xN9fGw340iGhTXFBf%2BMHopwxZ61B%2FRDyVMHlfgfeE5AOjQJJj7LannEoQp22Xxr939ODQuAjQpk8pnuFMJbUcJV%2BTx3MXZ62HMfMUBfauq8%2BLHiAIA98Or%2F&X-Amz-Signature=2f530f835914f00ab2002a03f4d105ae5c2f345d4f0d3a2df476e42c1ac7eca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKY5OZZQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjGzg6egd%2FMBM05PH1j1e%2B4vMJVCEFuf0v0QDIUesdJAiEAqcdqRMDTqOsfOJEr9%2BKjsrBaBbfz6cnBeD8SaR9J%2BDcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJtJhGbJYstC3hYEFCrcAxQ3GD5v1g6oqiXvVfoThCoafLxlo5qzw5ooOFJFvtA%2F0eFoc1U6i1%2F0AiDOekUtuaBGfbg%2BFW9NwP6rREh8OC2k%2BkycB11YX%2BF%2BUVmrfrw5T4D7TvDWwnlp8nBVCQ%2BSbgGk74vfnBQgkKKgjBwMKObuT7OU7w4tRQCk%2FJNtXhvYB01UAgllxGtyIvSUikAD1Xr2rUrpKBCPsQwPBIQFAgQ8OnhW181Ta6H8eROpCHbHoRHALeDylrD6pZU7Own86M2JzuB%2B8OwS0cm93LMmnUUnnxN3q90MUH15JuSbZGTx5UXkBJ4Lnqip9z394V0j9uJ%2B28RDTaqqrtaVfU%2BfqFRoTprl6TOCegDsENBmJ7Hanrieub0q2Wnow4yCUo1I7W6VpeGka2wLXQxeFmsY9cadNCi72DnsnCf%2FDzqSiAGRv3O7E3LuhmD6vb%2B713tYugkTMJQhC2aIV40aeNu9atcbzqBPXvdYhCLJpSB9FSTZ2JEcwAQ2C%2BQRI0ffvPx8%2B%2FY66xl8M2aJqUbeA1UGnS66%2Fbdjx8Mrp%2Ff8Z%2FVeZjS9sxpHubVy8t7gS4zDZl%2FEuICv9V1SBZQ3DsdnY%2B96aMuoQZGXpOFdH2CgYSgEDbV3NwIS5cIChnCc%2BfTHMJDZvsQGOqUBm4Ngos087WzOifB2ci%2BI1%2BJ3s10Vb%2BnSB5mlE3uufKIdeAmBlatdBefYjxUIvN3xWGbjBmP17EZPlMobWg3lkW8tSjP7Q6dX6Hc64xN9fGw340iGhTXFBf%2BMHopwxZ61B%2FRDyVMHlfgfeE5AOjQJJj7LannEoQp22Xxr939ODQuAjQpk8pnuFMJbUcJV%2BTx3MXZ62HMfMUBfauq8%2BLHiAIA98Or%2F&X-Amz-Signature=93d4a44042b3053618f28f8d15daed114c105c3d07fd8ae397b87158260d62ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKY5OZZQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjGzg6egd%2FMBM05PH1j1e%2B4vMJVCEFuf0v0QDIUesdJAiEAqcdqRMDTqOsfOJEr9%2BKjsrBaBbfz6cnBeD8SaR9J%2BDcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJtJhGbJYstC3hYEFCrcAxQ3GD5v1g6oqiXvVfoThCoafLxlo5qzw5ooOFJFvtA%2F0eFoc1U6i1%2F0AiDOekUtuaBGfbg%2BFW9NwP6rREh8OC2k%2BkycB11YX%2BF%2BUVmrfrw5T4D7TvDWwnlp8nBVCQ%2BSbgGk74vfnBQgkKKgjBwMKObuT7OU7w4tRQCk%2FJNtXhvYB01UAgllxGtyIvSUikAD1Xr2rUrpKBCPsQwPBIQFAgQ8OnhW181Ta6H8eROpCHbHoRHALeDylrD6pZU7Own86M2JzuB%2B8OwS0cm93LMmnUUnnxN3q90MUH15JuSbZGTx5UXkBJ4Lnqip9z394V0j9uJ%2B28RDTaqqrtaVfU%2BfqFRoTprl6TOCegDsENBmJ7Hanrieub0q2Wnow4yCUo1I7W6VpeGka2wLXQxeFmsY9cadNCi72DnsnCf%2FDzqSiAGRv3O7E3LuhmD6vb%2B713tYugkTMJQhC2aIV40aeNu9atcbzqBPXvdYhCLJpSB9FSTZ2JEcwAQ2C%2BQRI0ffvPx8%2B%2FY66xl8M2aJqUbeA1UGnS66%2Fbdjx8Mrp%2Ff8Z%2FVeZjS9sxpHubVy8t7gS4zDZl%2FEuICv9V1SBZQ3DsdnY%2B96aMuoQZGXpOFdH2CgYSgEDbV3NwIS5cIChnCc%2BfTHMJDZvsQGOqUBm4Ngos087WzOifB2ci%2BI1%2BJ3s10Vb%2BnSB5mlE3uufKIdeAmBlatdBefYjxUIvN3xWGbjBmP17EZPlMobWg3lkW8tSjP7Q6dX6Hc64xN9fGw340iGhTXFBf%2BMHopwxZ61B%2FRDyVMHlfgfeE5AOjQJJj7LannEoQp22Xxr939ODQuAjQpk8pnuFMJbUcJV%2BTx3MXZ62HMfMUBfauq8%2BLHiAIA98Or%2F&X-Amz-Signature=0d47bb99a37c7f1eefeb327465b41d1b6e63884a9f9887cf45be7240258519de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKY5OZZQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjGzg6egd%2FMBM05PH1j1e%2B4vMJVCEFuf0v0QDIUesdJAiEAqcdqRMDTqOsfOJEr9%2BKjsrBaBbfz6cnBeD8SaR9J%2BDcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJtJhGbJYstC3hYEFCrcAxQ3GD5v1g6oqiXvVfoThCoafLxlo5qzw5ooOFJFvtA%2F0eFoc1U6i1%2F0AiDOekUtuaBGfbg%2BFW9NwP6rREh8OC2k%2BkycB11YX%2BF%2BUVmrfrw5T4D7TvDWwnlp8nBVCQ%2BSbgGk74vfnBQgkKKgjBwMKObuT7OU7w4tRQCk%2FJNtXhvYB01UAgllxGtyIvSUikAD1Xr2rUrpKBCPsQwPBIQFAgQ8OnhW181Ta6H8eROpCHbHoRHALeDylrD6pZU7Own86M2JzuB%2B8OwS0cm93LMmnUUnnxN3q90MUH15JuSbZGTx5UXkBJ4Lnqip9z394V0j9uJ%2B28RDTaqqrtaVfU%2BfqFRoTprl6TOCegDsENBmJ7Hanrieub0q2Wnow4yCUo1I7W6VpeGka2wLXQxeFmsY9cadNCi72DnsnCf%2FDzqSiAGRv3O7E3LuhmD6vb%2B713tYugkTMJQhC2aIV40aeNu9atcbzqBPXvdYhCLJpSB9FSTZ2JEcwAQ2C%2BQRI0ffvPx8%2B%2FY66xl8M2aJqUbeA1UGnS66%2Fbdjx8Mrp%2Ff8Z%2FVeZjS9sxpHubVy8t7gS4zDZl%2FEuICv9V1SBZQ3DsdnY%2B96aMuoQZGXpOFdH2CgYSgEDbV3NwIS5cIChnCc%2BfTHMJDZvsQGOqUBm4Ngos087WzOifB2ci%2BI1%2BJ3s10Vb%2BnSB5mlE3uufKIdeAmBlatdBefYjxUIvN3xWGbjBmP17EZPlMobWg3lkW8tSjP7Q6dX6Hc64xN9fGw340iGhTXFBf%2BMHopwxZ61B%2FRDyVMHlfgfeE5AOjQJJj7LannEoQp22Xxr939ODQuAjQpk8pnuFMJbUcJV%2BTx3MXZ62HMfMUBfauq8%2BLHiAIA98Or%2F&X-Amz-Signature=64904dc3bb92a6087d11b74391906382f36629e27e11bda065d9b0b3f1f4428e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
