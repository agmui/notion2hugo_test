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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FC2TJAN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTUog0vMqg3jpKYUd50a31CalkpVlqjHbTj%2FiW4gmdgIgTMfBx51BgtIpx7FEnG9dDYSQwB8oAlYxvC3lKZ8uM7MqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlsbm32nBW5f5RDMCrcA2SHnzbtemt20VDi8CoA4Q%2Fa%2FmkuE8gTC98yQMg3XL8WfvmbHZjQnAdbZJizpPrMMuMJFrHMdbD6HoXsLYr%2FTo1%2B9Hgi2dpQNJrofgEbDf8P%2FK0fa5BxkQMx%2BD6sUL2x18rc5uRUN%2BJbvKk8Pucfc1XVEdQauMC5Vz%2BClnpU8jhaoOTQOjPCMMv8Jza1AjrLUrJm0bhLzPNmYXh%2FKxnKcW555GiaXMR4sL6YItRx7bBKovBeqIxads1WlekCvM3n66DNd6TSrOCNhNdhwpQWpXWFe3%2FrhkJAePwRoqVDoDKdFcON09OQEV3crMjEBbLyKSipLQsE5nEa43kNE826abGjl55IMJ3CQ1YDs3M7OOR4C9GyRiC2XUuNC24jEtz6KTqlkoSiz50py86EksUEQMoo4a7ViWSHtJwWWfWL8t1%2FoU%2FPpPtZJt%2Bpn6frQ1JBXC45NCETMUMO%2BEGA3uJWBg9e8R31UfQNmmGnk65STp4tgn1z93CyZPdjs6eKN52psSLgAP6AkXhLVMhz9lmi%2FwJXmLnhREIAoUdOTJsXuqx00TrmW00s7xXsYcRYqYK0ltOSMv0cQtybqUkpptffvh36dhJeeyc7JO0LuZEQPSNqmUmbjSZxYIiZ1rDUMJT%2FxMMGOqUBp8SvbHQmvkDFbrD9eWn7RpVmoLV%2FXtXRztzpBtrfLN93M3qMiqZS3Pzq5CCkZLS%2BkepB3xqQz%2FzyrVDOVI0wXdYVGkDwb7%2F05BrfOb6%2BVvDPyivHrCfRLWnLDtZzVO6MVO2iUmB%2BnTnIaLR8X6UT4w5X0FYwRmqfQ3VTd1vrK8G6spH9A5EQWbnKwTum9GWlzSbR6DldUE0MlabRyBjidD6wnt%2B3&X-Amz-Signature=dafea7bd3f044df4c3bcf8435907014fafaedc4326698351cf4f2942c3d8870f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FC2TJAN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTUog0vMqg3jpKYUd50a31CalkpVlqjHbTj%2FiW4gmdgIgTMfBx51BgtIpx7FEnG9dDYSQwB8oAlYxvC3lKZ8uM7MqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlsbm32nBW5f5RDMCrcA2SHnzbtemt20VDi8CoA4Q%2Fa%2FmkuE8gTC98yQMg3XL8WfvmbHZjQnAdbZJizpPrMMuMJFrHMdbD6HoXsLYr%2FTo1%2B9Hgi2dpQNJrofgEbDf8P%2FK0fa5BxkQMx%2BD6sUL2x18rc5uRUN%2BJbvKk8Pucfc1XVEdQauMC5Vz%2BClnpU8jhaoOTQOjPCMMv8Jza1AjrLUrJm0bhLzPNmYXh%2FKxnKcW555GiaXMR4sL6YItRx7bBKovBeqIxads1WlekCvM3n66DNd6TSrOCNhNdhwpQWpXWFe3%2FrhkJAePwRoqVDoDKdFcON09OQEV3crMjEBbLyKSipLQsE5nEa43kNE826abGjl55IMJ3CQ1YDs3M7OOR4C9GyRiC2XUuNC24jEtz6KTqlkoSiz50py86EksUEQMoo4a7ViWSHtJwWWfWL8t1%2FoU%2FPpPtZJt%2Bpn6frQ1JBXC45NCETMUMO%2BEGA3uJWBg9e8R31UfQNmmGnk65STp4tgn1z93CyZPdjs6eKN52psSLgAP6AkXhLVMhz9lmi%2FwJXmLnhREIAoUdOTJsXuqx00TrmW00s7xXsYcRYqYK0ltOSMv0cQtybqUkpptffvh36dhJeeyc7JO0LuZEQPSNqmUmbjSZxYIiZ1rDUMJT%2FxMMGOqUBp8SvbHQmvkDFbrD9eWn7RpVmoLV%2FXtXRztzpBtrfLN93M3qMiqZS3Pzq5CCkZLS%2BkepB3xqQz%2FzyrVDOVI0wXdYVGkDwb7%2F05BrfOb6%2BVvDPyivHrCfRLWnLDtZzVO6MVO2iUmB%2BnTnIaLR8X6UT4w5X0FYwRmqfQ3VTd1vrK8G6spH9A5EQWbnKwTum9GWlzSbR6DldUE0MlabRyBjidD6wnt%2B3&X-Amz-Signature=ef3f22aa8a199d63cfb5f184c07b61ca94ebe9d59daae7af0dfe4506412e622c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FC2TJAN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTUog0vMqg3jpKYUd50a31CalkpVlqjHbTj%2FiW4gmdgIgTMfBx51BgtIpx7FEnG9dDYSQwB8oAlYxvC3lKZ8uM7MqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlsbm32nBW5f5RDMCrcA2SHnzbtemt20VDi8CoA4Q%2Fa%2FmkuE8gTC98yQMg3XL8WfvmbHZjQnAdbZJizpPrMMuMJFrHMdbD6HoXsLYr%2FTo1%2B9Hgi2dpQNJrofgEbDf8P%2FK0fa5BxkQMx%2BD6sUL2x18rc5uRUN%2BJbvKk8Pucfc1XVEdQauMC5Vz%2BClnpU8jhaoOTQOjPCMMv8Jza1AjrLUrJm0bhLzPNmYXh%2FKxnKcW555GiaXMR4sL6YItRx7bBKovBeqIxads1WlekCvM3n66DNd6TSrOCNhNdhwpQWpXWFe3%2FrhkJAePwRoqVDoDKdFcON09OQEV3crMjEBbLyKSipLQsE5nEa43kNE826abGjl55IMJ3CQ1YDs3M7OOR4C9GyRiC2XUuNC24jEtz6KTqlkoSiz50py86EksUEQMoo4a7ViWSHtJwWWfWL8t1%2FoU%2FPpPtZJt%2Bpn6frQ1JBXC45NCETMUMO%2BEGA3uJWBg9e8R31UfQNmmGnk65STp4tgn1z93CyZPdjs6eKN52psSLgAP6AkXhLVMhz9lmi%2FwJXmLnhREIAoUdOTJsXuqx00TrmW00s7xXsYcRYqYK0ltOSMv0cQtybqUkpptffvh36dhJeeyc7JO0LuZEQPSNqmUmbjSZxYIiZ1rDUMJT%2FxMMGOqUBp8SvbHQmvkDFbrD9eWn7RpVmoLV%2FXtXRztzpBtrfLN93M3qMiqZS3Pzq5CCkZLS%2BkepB3xqQz%2FzyrVDOVI0wXdYVGkDwb7%2F05BrfOb6%2BVvDPyivHrCfRLWnLDtZzVO6MVO2iUmB%2BnTnIaLR8X6UT4w5X0FYwRmqfQ3VTd1vrK8G6spH9A5EQWbnKwTum9GWlzSbR6DldUE0MlabRyBjidD6wnt%2B3&X-Amz-Signature=de5311bf96dc43178af9d3209d0fffac6a0bb26d7afc0d6659d239990f7ecbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FC2TJAN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTUog0vMqg3jpKYUd50a31CalkpVlqjHbTj%2FiW4gmdgIgTMfBx51BgtIpx7FEnG9dDYSQwB8oAlYxvC3lKZ8uM7MqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlsbm32nBW5f5RDMCrcA2SHnzbtemt20VDi8CoA4Q%2Fa%2FmkuE8gTC98yQMg3XL8WfvmbHZjQnAdbZJizpPrMMuMJFrHMdbD6HoXsLYr%2FTo1%2B9Hgi2dpQNJrofgEbDf8P%2FK0fa5BxkQMx%2BD6sUL2x18rc5uRUN%2BJbvKk8Pucfc1XVEdQauMC5Vz%2BClnpU8jhaoOTQOjPCMMv8Jza1AjrLUrJm0bhLzPNmYXh%2FKxnKcW555GiaXMR4sL6YItRx7bBKovBeqIxads1WlekCvM3n66DNd6TSrOCNhNdhwpQWpXWFe3%2FrhkJAePwRoqVDoDKdFcON09OQEV3crMjEBbLyKSipLQsE5nEa43kNE826abGjl55IMJ3CQ1YDs3M7OOR4C9GyRiC2XUuNC24jEtz6KTqlkoSiz50py86EksUEQMoo4a7ViWSHtJwWWfWL8t1%2FoU%2FPpPtZJt%2Bpn6frQ1JBXC45NCETMUMO%2BEGA3uJWBg9e8R31UfQNmmGnk65STp4tgn1z93CyZPdjs6eKN52psSLgAP6AkXhLVMhz9lmi%2FwJXmLnhREIAoUdOTJsXuqx00TrmW00s7xXsYcRYqYK0ltOSMv0cQtybqUkpptffvh36dhJeeyc7JO0LuZEQPSNqmUmbjSZxYIiZ1rDUMJT%2FxMMGOqUBp8SvbHQmvkDFbrD9eWn7RpVmoLV%2FXtXRztzpBtrfLN93M3qMiqZS3Pzq5CCkZLS%2BkepB3xqQz%2FzyrVDOVI0wXdYVGkDwb7%2F05BrfOb6%2BVvDPyivHrCfRLWnLDtZzVO6MVO2iUmB%2BnTnIaLR8X6UT4w5X0FYwRmqfQ3VTd1vrK8G6spH9A5EQWbnKwTum9GWlzSbR6DldUE0MlabRyBjidD6wnt%2B3&X-Amz-Signature=cb818e43f1be758d2e41d64d49a31de30f9c72639f40abd9f824a6e6f51188c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FC2TJAN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTUog0vMqg3jpKYUd50a31CalkpVlqjHbTj%2FiW4gmdgIgTMfBx51BgtIpx7FEnG9dDYSQwB8oAlYxvC3lKZ8uM7MqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlsbm32nBW5f5RDMCrcA2SHnzbtemt20VDi8CoA4Q%2Fa%2FmkuE8gTC98yQMg3XL8WfvmbHZjQnAdbZJizpPrMMuMJFrHMdbD6HoXsLYr%2FTo1%2B9Hgi2dpQNJrofgEbDf8P%2FK0fa5BxkQMx%2BD6sUL2x18rc5uRUN%2BJbvKk8Pucfc1XVEdQauMC5Vz%2BClnpU8jhaoOTQOjPCMMv8Jza1AjrLUrJm0bhLzPNmYXh%2FKxnKcW555GiaXMR4sL6YItRx7bBKovBeqIxads1WlekCvM3n66DNd6TSrOCNhNdhwpQWpXWFe3%2FrhkJAePwRoqVDoDKdFcON09OQEV3crMjEBbLyKSipLQsE5nEa43kNE826abGjl55IMJ3CQ1YDs3M7OOR4C9GyRiC2XUuNC24jEtz6KTqlkoSiz50py86EksUEQMoo4a7ViWSHtJwWWfWL8t1%2FoU%2FPpPtZJt%2Bpn6frQ1JBXC45NCETMUMO%2BEGA3uJWBg9e8R31UfQNmmGnk65STp4tgn1z93CyZPdjs6eKN52psSLgAP6AkXhLVMhz9lmi%2FwJXmLnhREIAoUdOTJsXuqx00TrmW00s7xXsYcRYqYK0ltOSMv0cQtybqUkpptffvh36dhJeeyc7JO0LuZEQPSNqmUmbjSZxYIiZ1rDUMJT%2FxMMGOqUBp8SvbHQmvkDFbrD9eWn7RpVmoLV%2FXtXRztzpBtrfLN93M3qMiqZS3Pzq5CCkZLS%2BkepB3xqQz%2FzyrVDOVI0wXdYVGkDwb7%2F05BrfOb6%2BVvDPyivHrCfRLWnLDtZzVO6MVO2iUmB%2BnTnIaLR8X6UT4w5X0FYwRmqfQ3VTd1vrK8G6spH9A5EQWbnKwTum9GWlzSbR6DldUE0MlabRyBjidD6wnt%2B3&X-Amz-Signature=03f5a0f28fc346054e12a6012022699d671eac6f021309c12724a328ec0d35c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FC2TJAN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTUog0vMqg3jpKYUd50a31CalkpVlqjHbTj%2FiW4gmdgIgTMfBx51BgtIpx7FEnG9dDYSQwB8oAlYxvC3lKZ8uM7MqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlsbm32nBW5f5RDMCrcA2SHnzbtemt20VDi8CoA4Q%2Fa%2FmkuE8gTC98yQMg3XL8WfvmbHZjQnAdbZJizpPrMMuMJFrHMdbD6HoXsLYr%2FTo1%2B9Hgi2dpQNJrofgEbDf8P%2FK0fa5BxkQMx%2BD6sUL2x18rc5uRUN%2BJbvKk8Pucfc1XVEdQauMC5Vz%2BClnpU8jhaoOTQOjPCMMv8Jza1AjrLUrJm0bhLzPNmYXh%2FKxnKcW555GiaXMR4sL6YItRx7bBKovBeqIxads1WlekCvM3n66DNd6TSrOCNhNdhwpQWpXWFe3%2FrhkJAePwRoqVDoDKdFcON09OQEV3crMjEBbLyKSipLQsE5nEa43kNE826abGjl55IMJ3CQ1YDs3M7OOR4C9GyRiC2XUuNC24jEtz6KTqlkoSiz50py86EksUEQMoo4a7ViWSHtJwWWfWL8t1%2FoU%2FPpPtZJt%2Bpn6frQ1JBXC45NCETMUMO%2BEGA3uJWBg9e8R31UfQNmmGnk65STp4tgn1z93CyZPdjs6eKN52psSLgAP6AkXhLVMhz9lmi%2FwJXmLnhREIAoUdOTJsXuqx00TrmW00s7xXsYcRYqYK0ltOSMv0cQtybqUkpptffvh36dhJeeyc7JO0LuZEQPSNqmUmbjSZxYIiZ1rDUMJT%2FxMMGOqUBp8SvbHQmvkDFbrD9eWn7RpVmoLV%2FXtXRztzpBtrfLN93M3qMiqZS3Pzq5CCkZLS%2BkepB3xqQz%2FzyrVDOVI0wXdYVGkDwb7%2F05BrfOb6%2BVvDPyivHrCfRLWnLDtZzVO6MVO2iUmB%2BnTnIaLR8X6UT4w5X0FYwRmqfQ3VTd1vrK8G6spH9A5EQWbnKwTum9GWlzSbR6DldUE0MlabRyBjidD6wnt%2B3&X-Amz-Signature=794839b48b332f3934f5a4e65ff0a67e3305359a4597d85fc350ca8968a6d787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FC2TJAN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTUog0vMqg3jpKYUd50a31CalkpVlqjHbTj%2FiW4gmdgIgTMfBx51BgtIpx7FEnG9dDYSQwB8oAlYxvC3lKZ8uM7MqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlsbm32nBW5f5RDMCrcA2SHnzbtemt20VDi8CoA4Q%2Fa%2FmkuE8gTC98yQMg3XL8WfvmbHZjQnAdbZJizpPrMMuMJFrHMdbD6HoXsLYr%2FTo1%2B9Hgi2dpQNJrofgEbDf8P%2FK0fa5BxkQMx%2BD6sUL2x18rc5uRUN%2BJbvKk8Pucfc1XVEdQauMC5Vz%2BClnpU8jhaoOTQOjPCMMv8Jza1AjrLUrJm0bhLzPNmYXh%2FKxnKcW555GiaXMR4sL6YItRx7bBKovBeqIxads1WlekCvM3n66DNd6TSrOCNhNdhwpQWpXWFe3%2FrhkJAePwRoqVDoDKdFcON09OQEV3crMjEBbLyKSipLQsE5nEa43kNE826abGjl55IMJ3CQ1YDs3M7OOR4C9GyRiC2XUuNC24jEtz6KTqlkoSiz50py86EksUEQMoo4a7ViWSHtJwWWfWL8t1%2FoU%2FPpPtZJt%2Bpn6frQ1JBXC45NCETMUMO%2BEGA3uJWBg9e8R31UfQNmmGnk65STp4tgn1z93CyZPdjs6eKN52psSLgAP6AkXhLVMhz9lmi%2FwJXmLnhREIAoUdOTJsXuqx00TrmW00s7xXsYcRYqYK0ltOSMv0cQtybqUkpptffvh36dhJeeyc7JO0LuZEQPSNqmUmbjSZxYIiZ1rDUMJT%2FxMMGOqUBp8SvbHQmvkDFbrD9eWn7RpVmoLV%2FXtXRztzpBtrfLN93M3qMiqZS3Pzq5CCkZLS%2BkepB3xqQz%2FzyrVDOVI0wXdYVGkDwb7%2F05BrfOb6%2BVvDPyivHrCfRLWnLDtZzVO6MVO2iUmB%2BnTnIaLR8X6UT4w5X0FYwRmqfQ3VTd1vrK8G6spH9A5EQWbnKwTum9GWlzSbR6DldUE0MlabRyBjidD6wnt%2B3&X-Amz-Signature=50f4629e6e6d5e6006d97d7e9b942266e42c6424b722d18fe8ab968382c7bee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
