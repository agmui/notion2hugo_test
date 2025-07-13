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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOBD2WO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzwT7mqujL6eLtHr3GFfUT2%2FM4RAS1HdTemfTOKTB1zAiBhquV%2B5MaY9fznrVKfx6k2nVAuzzskRpvSQ1SDy1sR9Sr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM7inaYZ%2BmxE7rd0YZKtwDdID4a%2BEeUowCLH1KRaNpU06YH8QzrkpF83P64XfGNnBl%2BKQLxW3gGc4cP66Aw39nzH2fxSzCThrd%2BAF%2BadvS%2BkiHRvNpPN39CileQUan2LYhnQYL5DElp%2F1AelOZUy6LKKpIOIjwpZnKQyWZ0g%2B96cWOJCYFoSjX%2FfFQC2ymhHuZlRzUUunXP%2BxWQX5sYxaYIvvTWHcTWfH96KTnoXH7UrAKn6UxWcPV1IHD8mpz6dfYtBwykp2F2MRnhaKZwOwyCWbDACEEKdhTwqMbUjzXp7BJ9opLM7NED8LtYNrFi2lesBwA4SnWTCapWyTb0B34eK0TAHehusdiyNqkfzBp19L3IrtnIWj%2FUo06%2B5CCj%2Bds577EMEQbkVfASVnUUeg98jTmBEF0ex6h5OAKb5wZEl6wvOCe7UNEvTbKZ7XZi8HG%2F8YrnT6ix8l18e%2BR0WYrtbq2BXDVktbV7PDrRg6ksuLfCAZtvaVEEPRFmbnYWnja4mcTyqXtRxvH1OyfbXniq63fUkZ40c8GgAj1v37nIM2dMqcbj8NuzgArGkl%2B7Ecm0gHIh21jqNpIzneToAF%2FgxaTcVUfavINf7UWtg3d32YsJQgANXx%2F6uXYuEzS1atdrkruwtwpk5viys0wkqXNwwY6pgGhrFF8cnUQd%2FaWRCXc7tiC0YCMR7Z3QrkHfFJXQDlm86gA921MAAdrGDLFmgjV%2BQEKMhTWAydGFK6IQwaKqPc48DuVDV2wPidnVkNDTyDQTrc6%2FK8TFjnRQdUaU7xlqneJwHO%2BJXLOje9LnPVEAiNHe1qeefzoqFlL58hEqvuFyrZcVqmbv6IsGitNkXkLc5fO2i6YTMTnebBaKFYJfa5i%2BF8EMViH&X-Amz-Signature=0df75e1f32871e229f4da637e2b64e08de1722430516fd8c77edfbd53d73f423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOBD2WO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzwT7mqujL6eLtHr3GFfUT2%2FM4RAS1HdTemfTOKTB1zAiBhquV%2B5MaY9fznrVKfx6k2nVAuzzskRpvSQ1SDy1sR9Sr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM7inaYZ%2BmxE7rd0YZKtwDdID4a%2BEeUowCLH1KRaNpU06YH8QzrkpF83P64XfGNnBl%2BKQLxW3gGc4cP66Aw39nzH2fxSzCThrd%2BAF%2BadvS%2BkiHRvNpPN39CileQUan2LYhnQYL5DElp%2F1AelOZUy6LKKpIOIjwpZnKQyWZ0g%2B96cWOJCYFoSjX%2FfFQC2ymhHuZlRzUUunXP%2BxWQX5sYxaYIvvTWHcTWfH96KTnoXH7UrAKn6UxWcPV1IHD8mpz6dfYtBwykp2F2MRnhaKZwOwyCWbDACEEKdhTwqMbUjzXp7BJ9opLM7NED8LtYNrFi2lesBwA4SnWTCapWyTb0B34eK0TAHehusdiyNqkfzBp19L3IrtnIWj%2FUo06%2B5CCj%2Bds577EMEQbkVfASVnUUeg98jTmBEF0ex6h5OAKb5wZEl6wvOCe7UNEvTbKZ7XZi8HG%2F8YrnT6ix8l18e%2BR0WYrtbq2BXDVktbV7PDrRg6ksuLfCAZtvaVEEPRFmbnYWnja4mcTyqXtRxvH1OyfbXniq63fUkZ40c8GgAj1v37nIM2dMqcbj8NuzgArGkl%2B7Ecm0gHIh21jqNpIzneToAF%2FgxaTcVUfavINf7UWtg3d32YsJQgANXx%2F6uXYuEzS1atdrkruwtwpk5viys0wkqXNwwY6pgGhrFF8cnUQd%2FaWRCXc7tiC0YCMR7Z3QrkHfFJXQDlm86gA921MAAdrGDLFmgjV%2BQEKMhTWAydGFK6IQwaKqPc48DuVDV2wPidnVkNDTyDQTrc6%2FK8TFjnRQdUaU7xlqneJwHO%2BJXLOje9LnPVEAiNHe1qeefzoqFlL58hEqvuFyrZcVqmbv6IsGitNkXkLc5fO2i6YTMTnebBaKFYJfa5i%2BF8EMViH&X-Amz-Signature=bd3c3a5f06ac8854b7f441f0d2549ce8658306b326b901e696777fe4f8ed4d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOBD2WO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzwT7mqujL6eLtHr3GFfUT2%2FM4RAS1HdTemfTOKTB1zAiBhquV%2B5MaY9fznrVKfx6k2nVAuzzskRpvSQ1SDy1sR9Sr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM7inaYZ%2BmxE7rd0YZKtwDdID4a%2BEeUowCLH1KRaNpU06YH8QzrkpF83P64XfGNnBl%2BKQLxW3gGc4cP66Aw39nzH2fxSzCThrd%2BAF%2BadvS%2BkiHRvNpPN39CileQUan2LYhnQYL5DElp%2F1AelOZUy6LKKpIOIjwpZnKQyWZ0g%2B96cWOJCYFoSjX%2FfFQC2ymhHuZlRzUUunXP%2BxWQX5sYxaYIvvTWHcTWfH96KTnoXH7UrAKn6UxWcPV1IHD8mpz6dfYtBwykp2F2MRnhaKZwOwyCWbDACEEKdhTwqMbUjzXp7BJ9opLM7NED8LtYNrFi2lesBwA4SnWTCapWyTb0B34eK0TAHehusdiyNqkfzBp19L3IrtnIWj%2FUo06%2B5CCj%2Bds577EMEQbkVfASVnUUeg98jTmBEF0ex6h5OAKb5wZEl6wvOCe7UNEvTbKZ7XZi8HG%2F8YrnT6ix8l18e%2BR0WYrtbq2BXDVktbV7PDrRg6ksuLfCAZtvaVEEPRFmbnYWnja4mcTyqXtRxvH1OyfbXniq63fUkZ40c8GgAj1v37nIM2dMqcbj8NuzgArGkl%2B7Ecm0gHIh21jqNpIzneToAF%2FgxaTcVUfavINf7UWtg3d32YsJQgANXx%2F6uXYuEzS1atdrkruwtwpk5viys0wkqXNwwY6pgGhrFF8cnUQd%2FaWRCXc7tiC0YCMR7Z3QrkHfFJXQDlm86gA921MAAdrGDLFmgjV%2BQEKMhTWAydGFK6IQwaKqPc48DuVDV2wPidnVkNDTyDQTrc6%2FK8TFjnRQdUaU7xlqneJwHO%2BJXLOje9LnPVEAiNHe1qeefzoqFlL58hEqvuFyrZcVqmbv6IsGitNkXkLc5fO2i6YTMTnebBaKFYJfa5i%2BF8EMViH&X-Amz-Signature=a9ce4d43aab55ddef92314a6ccc5a49b1589135d6583c2725ec5da410f78ba57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOBD2WO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzwT7mqujL6eLtHr3GFfUT2%2FM4RAS1HdTemfTOKTB1zAiBhquV%2B5MaY9fznrVKfx6k2nVAuzzskRpvSQ1SDy1sR9Sr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM7inaYZ%2BmxE7rd0YZKtwDdID4a%2BEeUowCLH1KRaNpU06YH8QzrkpF83P64XfGNnBl%2BKQLxW3gGc4cP66Aw39nzH2fxSzCThrd%2BAF%2BadvS%2BkiHRvNpPN39CileQUan2LYhnQYL5DElp%2F1AelOZUy6LKKpIOIjwpZnKQyWZ0g%2B96cWOJCYFoSjX%2FfFQC2ymhHuZlRzUUunXP%2BxWQX5sYxaYIvvTWHcTWfH96KTnoXH7UrAKn6UxWcPV1IHD8mpz6dfYtBwykp2F2MRnhaKZwOwyCWbDACEEKdhTwqMbUjzXp7BJ9opLM7NED8LtYNrFi2lesBwA4SnWTCapWyTb0B34eK0TAHehusdiyNqkfzBp19L3IrtnIWj%2FUo06%2B5CCj%2Bds577EMEQbkVfASVnUUeg98jTmBEF0ex6h5OAKb5wZEl6wvOCe7UNEvTbKZ7XZi8HG%2F8YrnT6ix8l18e%2BR0WYrtbq2BXDVktbV7PDrRg6ksuLfCAZtvaVEEPRFmbnYWnja4mcTyqXtRxvH1OyfbXniq63fUkZ40c8GgAj1v37nIM2dMqcbj8NuzgArGkl%2B7Ecm0gHIh21jqNpIzneToAF%2FgxaTcVUfavINf7UWtg3d32YsJQgANXx%2F6uXYuEzS1atdrkruwtwpk5viys0wkqXNwwY6pgGhrFF8cnUQd%2FaWRCXc7tiC0YCMR7Z3QrkHfFJXQDlm86gA921MAAdrGDLFmgjV%2BQEKMhTWAydGFK6IQwaKqPc48DuVDV2wPidnVkNDTyDQTrc6%2FK8TFjnRQdUaU7xlqneJwHO%2BJXLOje9LnPVEAiNHe1qeefzoqFlL58hEqvuFyrZcVqmbv6IsGitNkXkLc5fO2i6YTMTnebBaKFYJfa5i%2BF8EMViH&X-Amz-Signature=5d92b22e1773fe6f3571aae5e267579c51f28b455975ebb3244c76e240540573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOBD2WO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzwT7mqujL6eLtHr3GFfUT2%2FM4RAS1HdTemfTOKTB1zAiBhquV%2B5MaY9fznrVKfx6k2nVAuzzskRpvSQ1SDy1sR9Sr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM7inaYZ%2BmxE7rd0YZKtwDdID4a%2BEeUowCLH1KRaNpU06YH8QzrkpF83P64XfGNnBl%2BKQLxW3gGc4cP66Aw39nzH2fxSzCThrd%2BAF%2BadvS%2BkiHRvNpPN39CileQUan2LYhnQYL5DElp%2F1AelOZUy6LKKpIOIjwpZnKQyWZ0g%2B96cWOJCYFoSjX%2FfFQC2ymhHuZlRzUUunXP%2BxWQX5sYxaYIvvTWHcTWfH96KTnoXH7UrAKn6UxWcPV1IHD8mpz6dfYtBwykp2F2MRnhaKZwOwyCWbDACEEKdhTwqMbUjzXp7BJ9opLM7NED8LtYNrFi2lesBwA4SnWTCapWyTb0B34eK0TAHehusdiyNqkfzBp19L3IrtnIWj%2FUo06%2B5CCj%2Bds577EMEQbkVfASVnUUeg98jTmBEF0ex6h5OAKb5wZEl6wvOCe7UNEvTbKZ7XZi8HG%2F8YrnT6ix8l18e%2BR0WYrtbq2BXDVktbV7PDrRg6ksuLfCAZtvaVEEPRFmbnYWnja4mcTyqXtRxvH1OyfbXniq63fUkZ40c8GgAj1v37nIM2dMqcbj8NuzgArGkl%2B7Ecm0gHIh21jqNpIzneToAF%2FgxaTcVUfavINf7UWtg3d32YsJQgANXx%2F6uXYuEzS1atdrkruwtwpk5viys0wkqXNwwY6pgGhrFF8cnUQd%2FaWRCXc7tiC0YCMR7Z3QrkHfFJXQDlm86gA921MAAdrGDLFmgjV%2BQEKMhTWAydGFK6IQwaKqPc48DuVDV2wPidnVkNDTyDQTrc6%2FK8TFjnRQdUaU7xlqneJwHO%2BJXLOje9LnPVEAiNHe1qeefzoqFlL58hEqvuFyrZcVqmbv6IsGitNkXkLc5fO2i6YTMTnebBaKFYJfa5i%2BF8EMViH&X-Amz-Signature=776903e03f0e3d28b704c8eaa1c78e642cf90b8b23d67ce7caaca652ff463225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOBD2WO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzwT7mqujL6eLtHr3GFfUT2%2FM4RAS1HdTemfTOKTB1zAiBhquV%2B5MaY9fznrVKfx6k2nVAuzzskRpvSQ1SDy1sR9Sr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM7inaYZ%2BmxE7rd0YZKtwDdID4a%2BEeUowCLH1KRaNpU06YH8QzrkpF83P64XfGNnBl%2BKQLxW3gGc4cP66Aw39nzH2fxSzCThrd%2BAF%2BadvS%2BkiHRvNpPN39CileQUan2LYhnQYL5DElp%2F1AelOZUy6LKKpIOIjwpZnKQyWZ0g%2B96cWOJCYFoSjX%2FfFQC2ymhHuZlRzUUunXP%2BxWQX5sYxaYIvvTWHcTWfH96KTnoXH7UrAKn6UxWcPV1IHD8mpz6dfYtBwykp2F2MRnhaKZwOwyCWbDACEEKdhTwqMbUjzXp7BJ9opLM7NED8LtYNrFi2lesBwA4SnWTCapWyTb0B34eK0TAHehusdiyNqkfzBp19L3IrtnIWj%2FUo06%2B5CCj%2Bds577EMEQbkVfASVnUUeg98jTmBEF0ex6h5OAKb5wZEl6wvOCe7UNEvTbKZ7XZi8HG%2F8YrnT6ix8l18e%2BR0WYrtbq2BXDVktbV7PDrRg6ksuLfCAZtvaVEEPRFmbnYWnja4mcTyqXtRxvH1OyfbXniq63fUkZ40c8GgAj1v37nIM2dMqcbj8NuzgArGkl%2B7Ecm0gHIh21jqNpIzneToAF%2FgxaTcVUfavINf7UWtg3d32YsJQgANXx%2F6uXYuEzS1atdrkruwtwpk5viys0wkqXNwwY6pgGhrFF8cnUQd%2FaWRCXc7tiC0YCMR7Z3QrkHfFJXQDlm86gA921MAAdrGDLFmgjV%2BQEKMhTWAydGFK6IQwaKqPc48DuVDV2wPidnVkNDTyDQTrc6%2FK8TFjnRQdUaU7xlqneJwHO%2BJXLOje9LnPVEAiNHe1qeefzoqFlL58hEqvuFyrZcVqmbv6IsGitNkXkLc5fO2i6YTMTnebBaKFYJfa5i%2BF8EMViH&X-Amz-Signature=176aabd6d0a7169f67f2813a7a47882def695669fefe0465b208e2c561d95887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOBD2WO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzwT7mqujL6eLtHr3GFfUT2%2FM4RAS1HdTemfTOKTB1zAiBhquV%2B5MaY9fznrVKfx6k2nVAuzzskRpvSQ1SDy1sR9Sr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM7inaYZ%2BmxE7rd0YZKtwDdID4a%2BEeUowCLH1KRaNpU06YH8QzrkpF83P64XfGNnBl%2BKQLxW3gGc4cP66Aw39nzH2fxSzCThrd%2BAF%2BadvS%2BkiHRvNpPN39CileQUan2LYhnQYL5DElp%2F1AelOZUy6LKKpIOIjwpZnKQyWZ0g%2B96cWOJCYFoSjX%2FfFQC2ymhHuZlRzUUunXP%2BxWQX5sYxaYIvvTWHcTWfH96KTnoXH7UrAKn6UxWcPV1IHD8mpz6dfYtBwykp2F2MRnhaKZwOwyCWbDACEEKdhTwqMbUjzXp7BJ9opLM7NED8LtYNrFi2lesBwA4SnWTCapWyTb0B34eK0TAHehusdiyNqkfzBp19L3IrtnIWj%2FUo06%2B5CCj%2Bds577EMEQbkVfASVnUUeg98jTmBEF0ex6h5OAKb5wZEl6wvOCe7UNEvTbKZ7XZi8HG%2F8YrnT6ix8l18e%2BR0WYrtbq2BXDVktbV7PDrRg6ksuLfCAZtvaVEEPRFmbnYWnja4mcTyqXtRxvH1OyfbXniq63fUkZ40c8GgAj1v37nIM2dMqcbj8NuzgArGkl%2B7Ecm0gHIh21jqNpIzneToAF%2FgxaTcVUfavINf7UWtg3d32YsJQgANXx%2F6uXYuEzS1atdrkruwtwpk5viys0wkqXNwwY6pgGhrFF8cnUQd%2FaWRCXc7tiC0YCMR7Z3QrkHfFJXQDlm86gA921MAAdrGDLFmgjV%2BQEKMhTWAydGFK6IQwaKqPc48DuVDV2wPidnVkNDTyDQTrc6%2FK8TFjnRQdUaU7xlqneJwHO%2BJXLOje9LnPVEAiNHe1qeefzoqFlL58hEqvuFyrZcVqmbv6IsGitNkXkLc5fO2i6YTMTnebBaKFYJfa5i%2BF8EMViH&X-Amz-Signature=5a67aef3f72e8cadc81dbcc10096c5a6b8d813fbb06b1c9f1ba032c2bedda3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
