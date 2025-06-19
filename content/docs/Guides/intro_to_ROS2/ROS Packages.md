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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7ALKVV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnmDCKlZnQn%2BRS3zFtGvZ04bzF4%2BcAHcEd1kh7bs9XDwIhAJZPnDVr%2B%2BGsud39bTQsf4AGn7OqvJkpRoY%2FTmqf1WMCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygxi%2Fsna%2FWGfGdicoq3AN%2FzH%2BXCh4yCg4szyAxDtQBeYnhzaG3Ov3i6FNqhHkM1POtKznTlvyQnPQqhH5t4J8d5lUtuz4OSiabslq%2FErhuSMeS4ode9nFZzXSP5i6vGrYwZalTdSwJY9%2FCZ2fRr1VmaDSgB43Be0JEFgYk8hmbZU6RX8am8RN6K690FZ7OHipIwBw2vLcJeN%2FyYXNhX3DlV%2BA9kD7APC%2Feny2vbNg5o60wmeAD8fYB6WJfq86GCwQeZLe%2Bxa83f1tiXDR%2BrLRugJLAb3yOM6AYrVvM%2BIcqP2KLODCNw8vG8LP2EBaEtTE2Q01XNMd7ZvNuPGrlTuSJgv3isAmayWEJZW1kc2EDIkOKSMTMoqfZUuCCxcJLH4w4h2L2Nvrd588Tuu8dvlSPUUOGVRJacORk9li3b5xUodGEGnEeaG%2FRCRLRXVgvFpN7nv2p1V45TVE6J2ue0RYFwRljM2hXBOs81L%2FY8pq7jPumgA3pfHnxbn%2FTfdE%2F%2FE6Prz1IWRMYuMC8EewMpiPDUNmISk0uU7OnfP%2B7f6c3QoWvbo0J%2B9NExQiaKNPwbRovQvzDVNVibFvbI4L0w14sFo6ejbQKlUFA8i%2BcAoRn3mZg2oippTsJeXXBWMwvfDhiD0BGe7ZWsvH2zjDS0c%2FCBjqkAZngJrkK4oI8F4qmsA%2FeZDmiMXaAC3Z%2BfilMnHCzqHghxR8Z6ZypAsNenfnyDtHecdcD4mclay%2FZHnbLGZhJgs5%2FB5RdyS%2B2Y5FvwNhqQQvIBSTm1r8QzL%2BhdgwAnsIsMLywOtM%2BYEuN0Ug2H0ksChEmoAu8yRRHPm1ZP9YQ1Dc6oxDsiZKA394gt42beHRtEZa9ovp3Q3Y2OFsTwQ0%2Fub8uYqaC&X-Amz-Signature=541688da181f91f68c90ba89fbd84326347ef1a123199f569d5d38103eda4aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7ALKVV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnmDCKlZnQn%2BRS3zFtGvZ04bzF4%2BcAHcEd1kh7bs9XDwIhAJZPnDVr%2B%2BGsud39bTQsf4AGn7OqvJkpRoY%2FTmqf1WMCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygxi%2Fsna%2FWGfGdicoq3AN%2FzH%2BXCh4yCg4szyAxDtQBeYnhzaG3Ov3i6FNqhHkM1POtKznTlvyQnPQqhH5t4J8d5lUtuz4OSiabslq%2FErhuSMeS4ode9nFZzXSP5i6vGrYwZalTdSwJY9%2FCZ2fRr1VmaDSgB43Be0JEFgYk8hmbZU6RX8am8RN6K690FZ7OHipIwBw2vLcJeN%2FyYXNhX3DlV%2BA9kD7APC%2Feny2vbNg5o60wmeAD8fYB6WJfq86GCwQeZLe%2Bxa83f1tiXDR%2BrLRugJLAb3yOM6AYrVvM%2BIcqP2KLODCNw8vG8LP2EBaEtTE2Q01XNMd7ZvNuPGrlTuSJgv3isAmayWEJZW1kc2EDIkOKSMTMoqfZUuCCxcJLH4w4h2L2Nvrd588Tuu8dvlSPUUOGVRJacORk9li3b5xUodGEGnEeaG%2FRCRLRXVgvFpN7nv2p1V45TVE6J2ue0RYFwRljM2hXBOs81L%2FY8pq7jPumgA3pfHnxbn%2FTfdE%2F%2FE6Prz1IWRMYuMC8EewMpiPDUNmISk0uU7OnfP%2B7f6c3QoWvbo0J%2B9NExQiaKNPwbRovQvzDVNVibFvbI4L0w14sFo6ejbQKlUFA8i%2BcAoRn3mZg2oippTsJeXXBWMwvfDhiD0BGe7ZWsvH2zjDS0c%2FCBjqkAZngJrkK4oI8F4qmsA%2FeZDmiMXaAC3Z%2BfilMnHCzqHghxR8Z6ZypAsNenfnyDtHecdcD4mclay%2FZHnbLGZhJgs5%2FB5RdyS%2B2Y5FvwNhqQQvIBSTm1r8QzL%2BhdgwAnsIsMLywOtM%2BYEuN0Ug2H0ksChEmoAu8yRRHPm1ZP9YQ1Dc6oxDsiZKA394gt42beHRtEZa9ovp3Q3Y2OFsTwQ0%2Fub8uYqaC&X-Amz-Signature=55328edb9fa6e218536e2c8099b42eed50f27dc222761f6eb557cee6679d4610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7ALKVV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnmDCKlZnQn%2BRS3zFtGvZ04bzF4%2BcAHcEd1kh7bs9XDwIhAJZPnDVr%2B%2BGsud39bTQsf4AGn7OqvJkpRoY%2FTmqf1WMCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygxi%2Fsna%2FWGfGdicoq3AN%2FzH%2BXCh4yCg4szyAxDtQBeYnhzaG3Ov3i6FNqhHkM1POtKznTlvyQnPQqhH5t4J8d5lUtuz4OSiabslq%2FErhuSMeS4ode9nFZzXSP5i6vGrYwZalTdSwJY9%2FCZ2fRr1VmaDSgB43Be0JEFgYk8hmbZU6RX8am8RN6K690FZ7OHipIwBw2vLcJeN%2FyYXNhX3DlV%2BA9kD7APC%2Feny2vbNg5o60wmeAD8fYB6WJfq86GCwQeZLe%2Bxa83f1tiXDR%2BrLRugJLAb3yOM6AYrVvM%2BIcqP2KLODCNw8vG8LP2EBaEtTE2Q01XNMd7ZvNuPGrlTuSJgv3isAmayWEJZW1kc2EDIkOKSMTMoqfZUuCCxcJLH4w4h2L2Nvrd588Tuu8dvlSPUUOGVRJacORk9li3b5xUodGEGnEeaG%2FRCRLRXVgvFpN7nv2p1V45TVE6J2ue0RYFwRljM2hXBOs81L%2FY8pq7jPumgA3pfHnxbn%2FTfdE%2F%2FE6Prz1IWRMYuMC8EewMpiPDUNmISk0uU7OnfP%2B7f6c3QoWvbo0J%2B9NExQiaKNPwbRovQvzDVNVibFvbI4L0w14sFo6ejbQKlUFA8i%2BcAoRn3mZg2oippTsJeXXBWMwvfDhiD0BGe7ZWsvH2zjDS0c%2FCBjqkAZngJrkK4oI8F4qmsA%2FeZDmiMXaAC3Z%2BfilMnHCzqHghxR8Z6ZypAsNenfnyDtHecdcD4mclay%2FZHnbLGZhJgs5%2FB5RdyS%2B2Y5FvwNhqQQvIBSTm1r8QzL%2BhdgwAnsIsMLywOtM%2BYEuN0Ug2H0ksChEmoAu8yRRHPm1ZP9YQ1Dc6oxDsiZKA394gt42beHRtEZa9ovp3Q3Y2OFsTwQ0%2Fub8uYqaC&X-Amz-Signature=933f47821b8c9ff4db4f0d639116720772b006c4ab1e38fd859f8eb029494308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7ALKVV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnmDCKlZnQn%2BRS3zFtGvZ04bzF4%2BcAHcEd1kh7bs9XDwIhAJZPnDVr%2B%2BGsud39bTQsf4AGn7OqvJkpRoY%2FTmqf1WMCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygxi%2Fsna%2FWGfGdicoq3AN%2FzH%2BXCh4yCg4szyAxDtQBeYnhzaG3Ov3i6FNqhHkM1POtKznTlvyQnPQqhH5t4J8d5lUtuz4OSiabslq%2FErhuSMeS4ode9nFZzXSP5i6vGrYwZalTdSwJY9%2FCZ2fRr1VmaDSgB43Be0JEFgYk8hmbZU6RX8am8RN6K690FZ7OHipIwBw2vLcJeN%2FyYXNhX3DlV%2BA9kD7APC%2Feny2vbNg5o60wmeAD8fYB6WJfq86GCwQeZLe%2Bxa83f1tiXDR%2BrLRugJLAb3yOM6AYrVvM%2BIcqP2KLODCNw8vG8LP2EBaEtTE2Q01XNMd7ZvNuPGrlTuSJgv3isAmayWEJZW1kc2EDIkOKSMTMoqfZUuCCxcJLH4w4h2L2Nvrd588Tuu8dvlSPUUOGVRJacORk9li3b5xUodGEGnEeaG%2FRCRLRXVgvFpN7nv2p1V45TVE6J2ue0RYFwRljM2hXBOs81L%2FY8pq7jPumgA3pfHnxbn%2FTfdE%2F%2FE6Prz1IWRMYuMC8EewMpiPDUNmISk0uU7OnfP%2B7f6c3QoWvbo0J%2B9NExQiaKNPwbRovQvzDVNVibFvbI4L0w14sFo6ejbQKlUFA8i%2BcAoRn3mZg2oippTsJeXXBWMwvfDhiD0BGe7ZWsvH2zjDS0c%2FCBjqkAZngJrkK4oI8F4qmsA%2FeZDmiMXaAC3Z%2BfilMnHCzqHghxR8Z6ZypAsNenfnyDtHecdcD4mclay%2FZHnbLGZhJgs5%2FB5RdyS%2B2Y5FvwNhqQQvIBSTm1r8QzL%2BhdgwAnsIsMLywOtM%2BYEuN0Ug2H0ksChEmoAu8yRRHPm1ZP9YQ1Dc6oxDsiZKA394gt42beHRtEZa9ovp3Q3Y2OFsTwQ0%2Fub8uYqaC&X-Amz-Signature=e1e66ec3a8e477ff0a796bf8207a93b4d5b9ce415db975ffebbba36cb4bd6a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7ALKVV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnmDCKlZnQn%2BRS3zFtGvZ04bzF4%2BcAHcEd1kh7bs9XDwIhAJZPnDVr%2B%2BGsud39bTQsf4AGn7OqvJkpRoY%2FTmqf1WMCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygxi%2Fsna%2FWGfGdicoq3AN%2FzH%2BXCh4yCg4szyAxDtQBeYnhzaG3Ov3i6FNqhHkM1POtKznTlvyQnPQqhH5t4J8d5lUtuz4OSiabslq%2FErhuSMeS4ode9nFZzXSP5i6vGrYwZalTdSwJY9%2FCZ2fRr1VmaDSgB43Be0JEFgYk8hmbZU6RX8am8RN6K690FZ7OHipIwBw2vLcJeN%2FyYXNhX3DlV%2BA9kD7APC%2Feny2vbNg5o60wmeAD8fYB6WJfq86GCwQeZLe%2Bxa83f1tiXDR%2BrLRugJLAb3yOM6AYrVvM%2BIcqP2KLODCNw8vG8LP2EBaEtTE2Q01XNMd7ZvNuPGrlTuSJgv3isAmayWEJZW1kc2EDIkOKSMTMoqfZUuCCxcJLH4w4h2L2Nvrd588Tuu8dvlSPUUOGVRJacORk9li3b5xUodGEGnEeaG%2FRCRLRXVgvFpN7nv2p1V45TVE6J2ue0RYFwRljM2hXBOs81L%2FY8pq7jPumgA3pfHnxbn%2FTfdE%2F%2FE6Prz1IWRMYuMC8EewMpiPDUNmISk0uU7OnfP%2B7f6c3QoWvbo0J%2B9NExQiaKNPwbRovQvzDVNVibFvbI4L0w14sFo6ejbQKlUFA8i%2BcAoRn3mZg2oippTsJeXXBWMwvfDhiD0BGe7ZWsvH2zjDS0c%2FCBjqkAZngJrkK4oI8F4qmsA%2FeZDmiMXaAC3Z%2BfilMnHCzqHghxR8Z6ZypAsNenfnyDtHecdcD4mclay%2FZHnbLGZhJgs5%2FB5RdyS%2B2Y5FvwNhqQQvIBSTm1r8QzL%2BhdgwAnsIsMLywOtM%2BYEuN0Ug2H0ksChEmoAu8yRRHPm1ZP9YQ1Dc6oxDsiZKA394gt42beHRtEZa9ovp3Q3Y2OFsTwQ0%2Fub8uYqaC&X-Amz-Signature=9d014702a230946ad262e83885fe0e9430faf47c09557f58deec10fb9b56c485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7ALKVV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnmDCKlZnQn%2BRS3zFtGvZ04bzF4%2BcAHcEd1kh7bs9XDwIhAJZPnDVr%2B%2BGsud39bTQsf4AGn7OqvJkpRoY%2FTmqf1WMCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygxi%2Fsna%2FWGfGdicoq3AN%2FzH%2BXCh4yCg4szyAxDtQBeYnhzaG3Ov3i6FNqhHkM1POtKznTlvyQnPQqhH5t4J8d5lUtuz4OSiabslq%2FErhuSMeS4ode9nFZzXSP5i6vGrYwZalTdSwJY9%2FCZ2fRr1VmaDSgB43Be0JEFgYk8hmbZU6RX8am8RN6K690FZ7OHipIwBw2vLcJeN%2FyYXNhX3DlV%2BA9kD7APC%2Feny2vbNg5o60wmeAD8fYB6WJfq86GCwQeZLe%2Bxa83f1tiXDR%2BrLRugJLAb3yOM6AYrVvM%2BIcqP2KLODCNw8vG8LP2EBaEtTE2Q01XNMd7ZvNuPGrlTuSJgv3isAmayWEJZW1kc2EDIkOKSMTMoqfZUuCCxcJLH4w4h2L2Nvrd588Tuu8dvlSPUUOGVRJacORk9li3b5xUodGEGnEeaG%2FRCRLRXVgvFpN7nv2p1V45TVE6J2ue0RYFwRljM2hXBOs81L%2FY8pq7jPumgA3pfHnxbn%2FTfdE%2F%2FE6Prz1IWRMYuMC8EewMpiPDUNmISk0uU7OnfP%2B7f6c3QoWvbo0J%2B9NExQiaKNPwbRovQvzDVNVibFvbI4L0w14sFo6ejbQKlUFA8i%2BcAoRn3mZg2oippTsJeXXBWMwvfDhiD0BGe7ZWsvH2zjDS0c%2FCBjqkAZngJrkK4oI8F4qmsA%2FeZDmiMXaAC3Z%2BfilMnHCzqHghxR8Z6ZypAsNenfnyDtHecdcD4mclay%2FZHnbLGZhJgs5%2FB5RdyS%2B2Y5FvwNhqQQvIBSTm1r8QzL%2BhdgwAnsIsMLywOtM%2BYEuN0Ug2H0ksChEmoAu8yRRHPm1ZP9YQ1Dc6oxDsiZKA394gt42beHRtEZa9ovp3Q3Y2OFsTwQ0%2Fub8uYqaC&X-Amz-Signature=6855877117d8d3db2f649652f079a21c619ca910bdf229ffdb332b362c89ddba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7ALKVV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnmDCKlZnQn%2BRS3zFtGvZ04bzF4%2BcAHcEd1kh7bs9XDwIhAJZPnDVr%2B%2BGsud39bTQsf4AGn7OqvJkpRoY%2FTmqf1WMCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygxi%2Fsna%2FWGfGdicoq3AN%2FzH%2BXCh4yCg4szyAxDtQBeYnhzaG3Ov3i6FNqhHkM1POtKznTlvyQnPQqhH5t4J8d5lUtuz4OSiabslq%2FErhuSMeS4ode9nFZzXSP5i6vGrYwZalTdSwJY9%2FCZ2fRr1VmaDSgB43Be0JEFgYk8hmbZU6RX8am8RN6K690FZ7OHipIwBw2vLcJeN%2FyYXNhX3DlV%2BA9kD7APC%2Feny2vbNg5o60wmeAD8fYB6WJfq86GCwQeZLe%2Bxa83f1tiXDR%2BrLRugJLAb3yOM6AYrVvM%2BIcqP2KLODCNw8vG8LP2EBaEtTE2Q01XNMd7ZvNuPGrlTuSJgv3isAmayWEJZW1kc2EDIkOKSMTMoqfZUuCCxcJLH4w4h2L2Nvrd588Tuu8dvlSPUUOGVRJacORk9li3b5xUodGEGnEeaG%2FRCRLRXVgvFpN7nv2p1V45TVE6J2ue0RYFwRljM2hXBOs81L%2FY8pq7jPumgA3pfHnxbn%2FTfdE%2F%2FE6Prz1IWRMYuMC8EewMpiPDUNmISk0uU7OnfP%2B7f6c3QoWvbo0J%2B9NExQiaKNPwbRovQvzDVNVibFvbI4L0w14sFo6ejbQKlUFA8i%2BcAoRn3mZg2oippTsJeXXBWMwvfDhiD0BGe7ZWsvH2zjDS0c%2FCBjqkAZngJrkK4oI8F4qmsA%2FeZDmiMXaAC3Z%2BfilMnHCzqHghxR8Z6ZypAsNenfnyDtHecdcD4mclay%2FZHnbLGZhJgs5%2FB5RdyS%2B2Y5FvwNhqQQvIBSTm1r8QzL%2BhdgwAnsIsMLywOtM%2BYEuN0Ug2H0ksChEmoAu8yRRHPm1ZP9YQ1Dc6oxDsiZKA394gt42beHRtEZa9ovp3Q3Y2OFsTwQ0%2Fub8uYqaC&X-Amz-Signature=540e66b502cf01d4bd4dbf5b6ad90a81141579051ea8596b2522edec8de524d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
