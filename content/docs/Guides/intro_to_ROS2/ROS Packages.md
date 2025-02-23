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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVQUFJE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxHASSFFVrOS2aW0ZvVW8LbSttIJwhHt2tezQZtY4iAiEAiAW7prTPZGblPGqULkuiMvbI4C0j5Yk9U%2FW%2Bs9zx87cq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIRfcsHYNwR2CslslSrcA%2BJ%2FRNIkIWjwKjkWuivuFhPK8nrlATxhUhb9gDXq6iQUB6bnZyKDzViCt9jfEcpnYYXwLMAUpTGeVWZlseg6IpIM5jpQYYQ8EmSuJ3tMjGymSrpE8w29lpkSPOA3fUDfJZa%2FWfTFsxRXhOBzQnWXZeRJFABPRtV0uzNGoje6vDCF5ygVC2D%2BHWPxjJhm22qQswteld8wYRRd63q5b2rdhl%2BcjKky675lOEPlHRm9FdTVT2mEPCf9E%2BViGihh5Zes7v7tDXkecI20C50rAc9ijxolmXBcVZ3vDMylyRF%2BhiHl9oCS68iSeZNSjKoNKn9F5DdSfy%2FvecZ7levYcGawZQLx2wO630nSqcMX%2BWXQUiOK4O3cxBByqmfhcvnof0vhhOBrLH4q0u5LadlTM4S0c1NSDrXwJ5HZx0vfDEiiO6c86sfkDoL1y50CKjhN1s7l0%2B6xISfuBS1eu8AIx%2B82sB%2F8XxR%2FYvgZTsH8m6HnyPqfXMXNzB7GEQYZVFcoHcP9mMBJsvZgkUkc2NugykXA6Ko%2B3o15ZMh0FhAIeH3yT%2FDvn1CmZgbHYkjyZC1LDsnRNCvs%2Ft1%2FQBzwBYjDjpksiAagHTMFlKCkl6iV91K%2B%2BfWpd%2FG%2BGlKpCYEVSUlSMJaH7r0GOqUBrdV7Oe7xiNqNEcaPz9jmIDNP2EiyZvKiWAUx%2F1fmByaD0pJyN3T0lwhyuWAMTkcpiBW9qcu46%2BT%2FqwY61fSljUwSc8IKZHQ%2F62HwiXoY%2BFieQrNaRkM9ps30lP%2Btqra2hmXWPXXO0V5DbLgVYAGZ0EvGa9B0RePexAfUgI%2BdhfXrdoTCHO7MFedH8LOaA5nyb4qBULiMZfEWx5vEVntAaHjjPBtK&X-Amz-Signature=a5f1abcd3a3c84e117caa4c22b7b7f4d04a129abd82a10ea60290f84e3732887&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVQUFJE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxHASSFFVrOS2aW0ZvVW8LbSttIJwhHt2tezQZtY4iAiEAiAW7prTPZGblPGqULkuiMvbI4C0j5Yk9U%2FW%2Bs9zx87cq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIRfcsHYNwR2CslslSrcA%2BJ%2FRNIkIWjwKjkWuivuFhPK8nrlATxhUhb9gDXq6iQUB6bnZyKDzViCt9jfEcpnYYXwLMAUpTGeVWZlseg6IpIM5jpQYYQ8EmSuJ3tMjGymSrpE8w29lpkSPOA3fUDfJZa%2FWfTFsxRXhOBzQnWXZeRJFABPRtV0uzNGoje6vDCF5ygVC2D%2BHWPxjJhm22qQswteld8wYRRd63q5b2rdhl%2BcjKky675lOEPlHRm9FdTVT2mEPCf9E%2BViGihh5Zes7v7tDXkecI20C50rAc9ijxolmXBcVZ3vDMylyRF%2BhiHl9oCS68iSeZNSjKoNKn9F5DdSfy%2FvecZ7levYcGawZQLx2wO630nSqcMX%2BWXQUiOK4O3cxBByqmfhcvnof0vhhOBrLH4q0u5LadlTM4S0c1NSDrXwJ5HZx0vfDEiiO6c86sfkDoL1y50CKjhN1s7l0%2B6xISfuBS1eu8AIx%2B82sB%2F8XxR%2FYvgZTsH8m6HnyPqfXMXNzB7GEQYZVFcoHcP9mMBJsvZgkUkc2NugykXA6Ko%2B3o15ZMh0FhAIeH3yT%2FDvn1CmZgbHYkjyZC1LDsnRNCvs%2Ft1%2FQBzwBYjDjpksiAagHTMFlKCkl6iV91K%2B%2BfWpd%2FG%2BGlKpCYEVSUlSMJaH7r0GOqUBrdV7Oe7xiNqNEcaPz9jmIDNP2EiyZvKiWAUx%2F1fmByaD0pJyN3T0lwhyuWAMTkcpiBW9qcu46%2BT%2FqwY61fSljUwSc8IKZHQ%2F62HwiXoY%2BFieQrNaRkM9ps30lP%2Btqra2hmXWPXXO0V5DbLgVYAGZ0EvGa9B0RePexAfUgI%2BdhfXrdoTCHO7MFedH8LOaA5nyb4qBULiMZfEWx5vEVntAaHjjPBtK&X-Amz-Signature=f78328ec78dcf8774e8e77ad009a27c675b0a7faac16fe7204b3df27cddb035c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVQUFJE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxHASSFFVrOS2aW0ZvVW8LbSttIJwhHt2tezQZtY4iAiEAiAW7prTPZGblPGqULkuiMvbI4C0j5Yk9U%2FW%2Bs9zx87cq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIRfcsHYNwR2CslslSrcA%2BJ%2FRNIkIWjwKjkWuivuFhPK8nrlATxhUhb9gDXq6iQUB6bnZyKDzViCt9jfEcpnYYXwLMAUpTGeVWZlseg6IpIM5jpQYYQ8EmSuJ3tMjGymSrpE8w29lpkSPOA3fUDfJZa%2FWfTFsxRXhOBzQnWXZeRJFABPRtV0uzNGoje6vDCF5ygVC2D%2BHWPxjJhm22qQswteld8wYRRd63q5b2rdhl%2BcjKky675lOEPlHRm9FdTVT2mEPCf9E%2BViGihh5Zes7v7tDXkecI20C50rAc9ijxolmXBcVZ3vDMylyRF%2BhiHl9oCS68iSeZNSjKoNKn9F5DdSfy%2FvecZ7levYcGawZQLx2wO630nSqcMX%2BWXQUiOK4O3cxBByqmfhcvnof0vhhOBrLH4q0u5LadlTM4S0c1NSDrXwJ5HZx0vfDEiiO6c86sfkDoL1y50CKjhN1s7l0%2B6xISfuBS1eu8AIx%2B82sB%2F8XxR%2FYvgZTsH8m6HnyPqfXMXNzB7GEQYZVFcoHcP9mMBJsvZgkUkc2NugykXA6Ko%2B3o15ZMh0FhAIeH3yT%2FDvn1CmZgbHYkjyZC1LDsnRNCvs%2Ft1%2FQBzwBYjDjpksiAagHTMFlKCkl6iV91K%2B%2BfWpd%2FG%2BGlKpCYEVSUlSMJaH7r0GOqUBrdV7Oe7xiNqNEcaPz9jmIDNP2EiyZvKiWAUx%2F1fmByaD0pJyN3T0lwhyuWAMTkcpiBW9qcu46%2BT%2FqwY61fSljUwSc8IKZHQ%2F62HwiXoY%2BFieQrNaRkM9ps30lP%2Btqra2hmXWPXXO0V5DbLgVYAGZ0EvGa9B0RePexAfUgI%2BdhfXrdoTCHO7MFedH8LOaA5nyb4qBULiMZfEWx5vEVntAaHjjPBtK&X-Amz-Signature=ad69b3322ddda764cddec7a2fdbb64b13ba4c86049c67221f0b18314e6eb2b81&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVQUFJE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxHASSFFVrOS2aW0ZvVW8LbSttIJwhHt2tezQZtY4iAiEAiAW7prTPZGblPGqULkuiMvbI4C0j5Yk9U%2FW%2Bs9zx87cq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIRfcsHYNwR2CslslSrcA%2BJ%2FRNIkIWjwKjkWuivuFhPK8nrlATxhUhb9gDXq6iQUB6bnZyKDzViCt9jfEcpnYYXwLMAUpTGeVWZlseg6IpIM5jpQYYQ8EmSuJ3tMjGymSrpE8w29lpkSPOA3fUDfJZa%2FWfTFsxRXhOBzQnWXZeRJFABPRtV0uzNGoje6vDCF5ygVC2D%2BHWPxjJhm22qQswteld8wYRRd63q5b2rdhl%2BcjKky675lOEPlHRm9FdTVT2mEPCf9E%2BViGihh5Zes7v7tDXkecI20C50rAc9ijxolmXBcVZ3vDMylyRF%2BhiHl9oCS68iSeZNSjKoNKn9F5DdSfy%2FvecZ7levYcGawZQLx2wO630nSqcMX%2BWXQUiOK4O3cxBByqmfhcvnof0vhhOBrLH4q0u5LadlTM4S0c1NSDrXwJ5HZx0vfDEiiO6c86sfkDoL1y50CKjhN1s7l0%2B6xISfuBS1eu8AIx%2B82sB%2F8XxR%2FYvgZTsH8m6HnyPqfXMXNzB7GEQYZVFcoHcP9mMBJsvZgkUkc2NugykXA6Ko%2B3o15ZMh0FhAIeH3yT%2FDvn1CmZgbHYkjyZC1LDsnRNCvs%2Ft1%2FQBzwBYjDjpksiAagHTMFlKCkl6iV91K%2B%2BfWpd%2FG%2BGlKpCYEVSUlSMJaH7r0GOqUBrdV7Oe7xiNqNEcaPz9jmIDNP2EiyZvKiWAUx%2F1fmByaD0pJyN3T0lwhyuWAMTkcpiBW9qcu46%2BT%2FqwY61fSljUwSc8IKZHQ%2F62HwiXoY%2BFieQrNaRkM9ps30lP%2Btqra2hmXWPXXO0V5DbLgVYAGZ0EvGa9B0RePexAfUgI%2BdhfXrdoTCHO7MFedH8LOaA5nyb4qBULiMZfEWx5vEVntAaHjjPBtK&X-Amz-Signature=50abb21f2e56b5f865c5f147fba0e5e0e9c6cedff141b5e8704ef1f342ece26e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVQUFJE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxHASSFFVrOS2aW0ZvVW8LbSttIJwhHt2tezQZtY4iAiEAiAW7prTPZGblPGqULkuiMvbI4C0j5Yk9U%2FW%2Bs9zx87cq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIRfcsHYNwR2CslslSrcA%2BJ%2FRNIkIWjwKjkWuivuFhPK8nrlATxhUhb9gDXq6iQUB6bnZyKDzViCt9jfEcpnYYXwLMAUpTGeVWZlseg6IpIM5jpQYYQ8EmSuJ3tMjGymSrpE8w29lpkSPOA3fUDfJZa%2FWfTFsxRXhOBzQnWXZeRJFABPRtV0uzNGoje6vDCF5ygVC2D%2BHWPxjJhm22qQswteld8wYRRd63q5b2rdhl%2BcjKky675lOEPlHRm9FdTVT2mEPCf9E%2BViGihh5Zes7v7tDXkecI20C50rAc9ijxolmXBcVZ3vDMylyRF%2BhiHl9oCS68iSeZNSjKoNKn9F5DdSfy%2FvecZ7levYcGawZQLx2wO630nSqcMX%2BWXQUiOK4O3cxBByqmfhcvnof0vhhOBrLH4q0u5LadlTM4S0c1NSDrXwJ5HZx0vfDEiiO6c86sfkDoL1y50CKjhN1s7l0%2B6xISfuBS1eu8AIx%2B82sB%2F8XxR%2FYvgZTsH8m6HnyPqfXMXNzB7GEQYZVFcoHcP9mMBJsvZgkUkc2NugykXA6Ko%2B3o15ZMh0FhAIeH3yT%2FDvn1CmZgbHYkjyZC1LDsnRNCvs%2Ft1%2FQBzwBYjDjpksiAagHTMFlKCkl6iV91K%2B%2BfWpd%2FG%2BGlKpCYEVSUlSMJaH7r0GOqUBrdV7Oe7xiNqNEcaPz9jmIDNP2EiyZvKiWAUx%2F1fmByaD0pJyN3T0lwhyuWAMTkcpiBW9qcu46%2BT%2FqwY61fSljUwSc8IKZHQ%2F62HwiXoY%2BFieQrNaRkM9ps30lP%2Btqra2hmXWPXXO0V5DbLgVYAGZ0EvGa9B0RePexAfUgI%2BdhfXrdoTCHO7MFedH8LOaA5nyb4qBULiMZfEWx5vEVntAaHjjPBtK&X-Amz-Signature=c957856c2a34f30d2a0d8a48808b9c4f7be1af0afefc687d868720f75afa2db6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVQUFJE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxHASSFFVrOS2aW0ZvVW8LbSttIJwhHt2tezQZtY4iAiEAiAW7prTPZGblPGqULkuiMvbI4C0j5Yk9U%2FW%2Bs9zx87cq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIRfcsHYNwR2CslslSrcA%2BJ%2FRNIkIWjwKjkWuivuFhPK8nrlATxhUhb9gDXq6iQUB6bnZyKDzViCt9jfEcpnYYXwLMAUpTGeVWZlseg6IpIM5jpQYYQ8EmSuJ3tMjGymSrpE8w29lpkSPOA3fUDfJZa%2FWfTFsxRXhOBzQnWXZeRJFABPRtV0uzNGoje6vDCF5ygVC2D%2BHWPxjJhm22qQswteld8wYRRd63q5b2rdhl%2BcjKky675lOEPlHRm9FdTVT2mEPCf9E%2BViGihh5Zes7v7tDXkecI20C50rAc9ijxolmXBcVZ3vDMylyRF%2BhiHl9oCS68iSeZNSjKoNKn9F5DdSfy%2FvecZ7levYcGawZQLx2wO630nSqcMX%2BWXQUiOK4O3cxBByqmfhcvnof0vhhOBrLH4q0u5LadlTM4S0c1NSDrXwJ5HZx0vfDEiiO6c86sfkDoL1y50CKjhN1s7l0%2B6xISfuBS1eu8AIx%2B82sB%2F8XxR%2FYvgZTsH8m6HnyPqfXMXNzB7GEQYZVFcoHcP9mMBJsvZgkUkc2NugykXA6Ko%2B3o15ZMh0FhAIeH3yT%2FDvn1CmZgbHYkjyZC1LDsnRNCvs%2Ft1%2FQBzwBYjDjpksiAagHTMFlKCkl6iV91K%2B%2BfWpd%2FG%2BGlKpCYEVSUlSMJaH7r0GOqUBrdV7Oe7xiNqNEcaPz9jmIDNP2EiyZvKiWAUx%2F1fmByaD0pJyN3T0lwhyuWAMTkcpiBW9qcu46%2BT%2FqwY61fSljUwSc8IKZHQ%2F62HwiXoY%2BFieQrNaRkM9ps30lP%2Btqra2hmXWPXXO0V5DbLgVYAGZ0EvGa9B0RePexAfUgI%2BdhfXrdoTCHO7MFedH8LOaA5nyb4qBULiMZfEWx5vEVntAaHjjPBtK&X-Amz-Signature=35651404ee8214053fa9a99e61154a3611a5e068d21ddabb939241ce3a3e6b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVQUFJE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClxHASSFFVrOS2aW0ZvVW8LbSttIJwhHt2tezQZtY4iAiEAiAW7prTPZGblPGqULkuiMvbI4C0j5Yk9U%2FW%2Bs9zx87cq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIRfcsHYNwR2CslslSrcA%2BJ%2FRNIkIWjwKjkWuivuFhPK8nrlATxhUhb9gDXq6iQUB6bnZyKDzViCt9jfEcpnYYXwLMAUpTGeVWZlseg6IpIM5jpQYYQ8EmSuJ3tMjGymSrpE8w29lpkSPOA3fUDfJZa%2FWfTFsxRXhOBzQnWXZeRJFABPRtV0uzNGoje6vDCF5ygVC2D%2BHWPxjJhm22qQswteld8wYRRd63q5b2rdhl%2BcjKky675lOEPlHRm9FdTVT2mEPCf9E%2BViGihh5Zes7v7tDXkecI20C50rAc9ijxolmXBcVZ3vDMylyRF%2BhiHl9oCS68iSeZNSjKoNKn9F5DdSfy%2FvecZ7levYcGawZQLx2wO630nSqcMX%2BWXQUiOK4O3cxBByqmfhcvnof0vhhOBrLH4q0u5LadlTM4S0c1NSDrXwJ5HZx0vfDEiiO6c86sfkDoL1y50CKjhN1s7l0%2B6xISfuBS1eu8AIx%2B82sB%2F8XxR%2FYvgZTsH8m6HnyPqfXMXNzB7GEQYZVFcoHcP9mMBJsvZgkUkc2NugykXA6Ko%2B3o15ZMh0FhAIeH3yT%2FDvn1CmZgbHYkjyZC1LDsnRNCvs%2Ft1%2FQBzwBYjDjpksiAagHTMFlKCkl6iV91K%2B%2BfWpd%2FG%2BGlKpCYEVSUlSMJaH7r0GOqUBrdV7Oe7xiNqNEcaPz9jmIDNP2EiyZvKiWAUx%2F1fmByaD0pJyN3T0lwhyuWAMTkcpiBW9qcu46%2BT%2FqwY61fSljUwSc8IKZHQ%2F62HwiXoY%2BFieQrNaRkM9ps30lP%2Btqra2hmXWPXXO0V5DbLgVYAGZ0EvGa9B0RePexAfUgI%2BdhfXrdoTCHO7MFedH8LOaA5nyb4qBULiMZfEWx5vEVntAaHjjPBtK&X-Amz-Signature=efbfc59751894b83e1b46560a62b1549cf588fac087538e4cb4dd34d3d04dc19&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
