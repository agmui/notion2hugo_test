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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHSAPLH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNnLTH%2Bti1amX20FHgzRdJxrDFVLbHYRks1qNvCWKw8wIgJzYT06JKpQJtC8ojTP%2BD1ZVFRJ0MVbFeO3n5VLhOIMEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYQ84uSfGQ%2FD%2ByIayrcA33teIN0T8hAnKKjSIRRbLu2LlUmkwj9cxwYkWeTEyB4e1%2FszIm47z0YTUvF3PA8QqgnkiMNGYjvbRETMA%2B6c%2BVn17ntK5JS4oN%2FNYxXO4UfnVwQDj8bi66PcnjldWVq3N617mqWVA%2FBvHhy5atr7Sx0n8F3XbVERLi6Vw%2BUZ7SaXCMPhAsNbW%2FQVh78DxgacQY5KU%2FgHoq0Jc62ZgZxcV0NvizNqJol2%2F9Vz1ZUaRi8Sce9AZYvWEdwOH%2BXvYbuqqJn3Vwv6GwSIcn9eH0fjxMbbS7mr3QKIRa8XHWZBnFx2jBVWeAWRccjIyTmjF4bQs8s8gyVCebMLUqArmyR9%2FNfcsOdHyy%2FZMAdXbYDvQemHVFQtZAmmycdovTCsQy0d7aD5noHj5A496mbd%2B6xdEOWmc4Q%2FREQ6nbBwpwc0wxWefxkTzeFYOsfbLGQ6DmlLRzeqUwBIfAsUqFStAVYFxVKuVV7wEG6vnAtL8SW%2Bq6jnkYSux2G%2FtR%2BpHA9zFudkm25HRaLoUyKPr5lUpRCBgKDnbEq3adZJeLfpTSop6jk5FnLP8fLhBIS9ae1ortglqDYrUGT1yTHgWCOvcgDxXWhF2nZ5DlPwx8QM9UWKeoHZvYVwngdhS0PU2SfMOrnpsIGOqUBnMNzGXqgWftFbGDOgwPK%2FWZy9JzrkHdZRzS%2B8geAR3kd%2Fluo%2BcDb%2FthplRMkfodysZDLRGUfM273fSLQfuyXRdSjS0ZdqxrFVS%2BLTYtMhtYtbSBAWsdSml%2Bm7irAK14X%2BEWO8SNoAPKcJYDEgxfi%2F2Ff%2FVsW%2BH8iruOU5WOU1MAR9waVRLwRcsuKw2Rso%2BFF5ERlQOZBV03%2BHt6Nw70pBDnuB4d3&X-Amz-Signature=4c81289791b4433d74e85b6f06caa4fc75d3d93c3561abad0574369c8284e857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHSAPLH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNnLTH%2Bti1amX20FHgzRdJxrDFVLbHYRks1qNvCWKw8wIgJzYT06JKpQJtC8ojTP%2BD1ZVFRJ0MVbFeO3n5VLhOIMEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYQ84uSfGQ%2FD%2ByIayrcA33teIN0T8hAnKKjSIRRbLu2LlUmkwj9cxwYkWeTEyB4e1%2FszIm47z0YTUvF3PA8QqgnkiMNGYjvbRETMA%2B6c%2BVn17ntK5JS4oN%2FNYxXO4UfnVwQDj8bi66PcnjldWVq3N617mqWVA%2FBvHhy5atr7Sx0n8F3XbVERLi6Vw%2BUZ7SaXCMPhAsNbW%2FQVh78DxgacQY5KU%2FgHoq0Jc62ZgZxcV0NvizNqJol2%2F9Vz1ZUaRi8Sce9AZYvWEdwOH%2BXvYbuqqJn3Vwv6GwSIcn9eH0fjxMbbS7mr3QKIRa8XHWZBnFx2jBVWeAWRccjIyTmjF4bQs8s8gyVCebMLUqArmyR9%2FNfcsOdHyy%2FZMAdXbYDvQemHVFQtZAmmycdovTCsQy0d7aD5noHj5A496mbd%2B6xdEOWmc4Q%2FREQ6nbBwpwc0wxWefxkTzeFYOsfbLGQ6DmlLRzeqUwBIfAsUqFStAVYFxVKuVV7wEG6vnAtL8SW%2Bq6jnkYSux2G%2FtR%2BpHA9zFudkm25HRaLoUyKPr5lUpRCBgKDnbEq3adZJeLfpTSop6jk5FnLP8fLhBIS9ae1ortglqDYrUGT1yTHgWCOvcgDxXWhF2nZ5DlPwx8QM9UWKeoHZvYVwngdhS0PU2SfMOrnpsIGOqUBnMNzGXqgWftFbGDOgwPK%2FWZy9JzrkHdZRzS%2B8geAR3kd%2Fluo%2BcDb%2FthplRMkfodysZDLRGUfM273fSLQfuyXRdSjS0ZdqxrFVS%2BLTYtMhtYtbSBAWsdSml%2Bm7irAK14X%2BEWO8SNoAPKcJYDEgxfi%2F2Ff%2FVsW%2BH8iruOU5WOU1MAR9waVRLwRcsuKw2Rso%2BFF5ERlQOZBV03%2BHt6Nw70pBDnuB4d3&X-Amz-Signature=ccbc14f112d69505618bc90685f928240c44cb59e172785c04a88641c15cbc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHSAPLH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNnLTH%2Bti1amX20FHgzRdJxrDFVLbHYRks1qNvCWKw8wIgJzYT06JKpQJtC8ojTP%2BD1ZVFRJ0MVbFeO3n5VLhOIMEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYQ84uSfGQ%2FD%2ByIayrcA33teIN0T8hAnKKjSIRRbLu2LlUmkwj9cxwYkWeTEyB4e1%2FszIm47z0YTUvF3PA8QqgnkiMNGYjvbRETMA%2B6c%2BVn17ntK5JS4oN%2FNYxXO4UfnVwQDj8bi66PcnjldWVq3N617mqWVA%2FBvHhy5atr7Sx0n8F3XbVERLi6Vw%2BUZ7SaXCMPhAsNbW%2FQVh78DxgacQY5KU%2FgHoq0Jc62ZgZxcV0NvizNqJol2%2F9Vz1ZUaRi8Sce9AZYvWEdwOH%2BXvYbuqqJn3Vwv6GwSIcn9eH0fjxMbbS7mr3QKIRa8XHWZBnFx2jBVWeAWRccjIyTmjF4bQs8s8gyVCebMLUqArmyR9%2FNfcsOdHyy%2FZMAdXbYDvQemHVFQtZAmmycdovTCsQy0d7aD5noHj5A496mbd%2B6xdEOWmc4Q%2FREQ6nbBwpwc0wxWefxkTzeFYOsfbLGQ6DmlLRzeqUwBIfAsUqFStAVYFxVKuVV7wEG6vnAtL8SW%2Bq6jnkYSux2G%2FtR%2BpHA9zFudkm25HRaLoUyKPr5lUpRCBgKDnbEq3adZJeLfpTSop6jk5FnLP8fLhBIS9ae1ortglqDYrUGT1yTHgWCOvcgDxXWhF2nZ5DlPwx8QM9UWKeoHZvYVwngdhS0PU2SfMOrnpsIGOqUBnMNzGXqgWftFbGDOgwPK%2FWZy9JzrkHdZRzS%2B8geAR3kd%2Fluo%2BcDb%2FthplRMkfodysZDLRGUfM273fSLQfuyXRdSjS0ZdqxrFVS%2BLTYtMhtYtbSBAWsdSml%2Bm7irAK14X%2BEWO8SNoAPKcJYDEgxfi%2F2Ff%2FVsW%2BH8iruOU5WOU1MAR9waVRLwRcsuKw2Rso%2BFF5ERlQOZBV03%2BHt6Nw70pBDnuB4d3&X-Amz-Signature=29c1a0b1c7b9f4c35f014e2423735d27afaa4185531724aafe7e2700f00d6f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHSAPLH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNnLTH%2Bti1amX20FHgzRdJxrDFVLbHYRks1qNvCWKw8wIgJzYT06JKpQJtC8ojTP%2BD1ZVFRJ0MVbFeO3n5VLhOIMEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYQ84uSfGQ%2FD%2ByIayrcA33teIN0T8hAnKKjSIRRbLu2LlUmkwj9cxwYkWeTEyB4e1%2FszIm47z0YTUvF3PA8QqgnkiMNGYjvbRETMA%2B6c%2BVn17ntK5JS4oN%2FNYxXO4UfnVwQDj8bi66PcnjldWVq3N617mqWVA%2FBvHhy5atr7Sx0n8F3XbVERLi6Vw%2BUZ7SaXCMPhAsNbW%2FQVh78DxgacQY5KU%2FgHoq0Jc62ZgZxcV0NvizNqJol2%2F9Vz1ZUaRi8Sce9AZYvWEdwOH%2BXvYbuqqJn3Vwv6GwSIcn9eH0fjxMbbS7mr3QKIRa8XHWZBnFx2jBVWeAWRccjIyTmjF4bQs8s8gyVCebMLUqArmyR9%2FNfcsOdHyy%2FZMAdXbYDvQemHVFQtZAmmycdovTCsQy0d7aD5noHj5A496mbd%2B6xdEOWmc4Q%2FREQ6nbBwpwc0wxWefxkTzeFYOsfbLGQ6DmlLRzeqUwBIfAsUqFStAVYFxVKuVV7wEG6vnAtL8SW%2Bq6jnkYSux2G%2FtR%2BpHA9zFudkm25HRaLoUyKPr5lUpRCBgKDnbEq3adZJeLfpTSop6jk5FnLP8fLhBIS9ae1ortglqDYrUGT1yTHgWCOvcgDxXWhF2nZ5DlPwx8QM9UWKeoHZvYVwngdhS0PU2SfMOrnpsIGOqUBnMNzGXqgWftFbGDOgwPK%2FWZy9JzrkHdZRzS%2B8geAR3kd%2Fluo%2BcDb%2FthplRMkfodysZDLRGUfM273fSLQfuyXRdSjS0ZdqxrFVS%2BLTYtMhtYtbSBAWsdSml%2Bm7irAK14X%2BEWO8SNoAPKcJYDEgxfi%2F2Ff%2FVsW%2BH8iruOU5WOU1MAR9waVRLwRcsuKw2Rso%2BFF5ERlQOZBV03%2BHt6Nw70pBDnuB4d3&X-Amz-Signature=054af70ce7bb3ca281017298f2d97f09d9486a1e074b32f955d49817b061f514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHSAPLH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNnLTH%2Bti1amX20FHgzRdJxrDFVLbHYRks1qNvCWKw8wIgJzYT06JKpQJtC8ojTP%2BD1ZVFRJ0MVbFeO3n5VLhOIMEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYQ84uSfGQ%2FD%2ByIayrcA33teIN0T8hAnKKjSIRRbLu2LlUmkwj9cxwYkWeTEyB4e1%2FszIm47z0YTUvF3PA8QqgnkiMNGYjvbRETMA%2B6c%2BVn17ntK5JS4oN%2FNYxXO4UfnVwQDj8bi66PcnjldWVq3N617mqWVA%2FBvHhy5atr7Sx0n8F3XbVERLi6Vw%2BUZ7SaXCMPhAsNbW%2FQVh78DxgacQY5KU%2FgHoq0Jc62ZgZxcV0NvizNqJol2%2F9Vz1ZUaRi8Sce9AZYvWEdwOH%2BXvYbuqqJn3Vwv6GwSIcn9eH0fjxMbbS7mr3QKIRa8XHWZBnFx2jBVWeAWRccjIyTmjF4bQs8s8gyVCebMLUqArmyR9%2FNfcsOdHyy%2FZMAdXbYDvQemHVFQtZAmmycdovTCsQy0d7aD5noHj5A496mbd%2B6xdEOWmc4Q%2FREQ6nbBwpwc0wxWefxkTzeFYOsfbLGQ6DmlLRzeqUwBIfAsUqFStAVYFxVKuVV7wEG6vnAtL8SW%2Bq6jnkYSux2G%2FtR%2BpHA9zFudkm25HRaLoUyKPr5lUpRCBgKDnbEq3adZJeLfpTSop6jk5FnLP8fLhBIS9ae1ortglqDYrUGT1yTHgWCOvcgDxXWhF2nZ5DlPwx8QM9UWKeoHZvYVwngdhS0PU2SfMOrnpsIGOqUBnMNzGXqgWftFbGDOgwPK%2FWZy9JzrkHdZRzS%2B8geAR3kd%2Fluo%2BcDb%2FthplRMkfodysZDLRGUfM273fSLQfuyXRdSjS0ZdqxrFVS%2BLTYtMhtYtbSBAWsdSml%2Bm7irAK14X%2BEWO8SNoAPKcJYDEgxfi%2F2Ff%2FVsW%2BH8iruOU5WOU1MAR9waVRLwRcsuKw2Rso%2BFF5ERlQOZBV03%2BHt6Nw70pBDnuB4d3&X-Amz-Signature=8facb75fc72962367ac29b1e2c9bf9965659451ec34ee297daa4abbf6f89b661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHSAPLH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNnLTH%2Bti1amX20FHgzRdJxrDFVLbHYRks1qNvCWKw8wIgJzYT06JKpQJtC8ojTP%2BD1ZVFRJ0MVbFeO3n5VLhOIMEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYQ84uSfGQ%2FD%2ByIayrcA33teIN0T8hAnKKjSIRRbLu2LlUmkwj9cxwYkWeTEyB4e1%2FszIm47z0YTUvF3PA8QqgnkiMNGYjvbRETMA%2B6c%2BVn17ntK5JS4oN%2FNYxXO4UfnVwQDj8bi66PcnjldWVq3N617mqWVA%2FBvHhy5atr7Sx0n8F3XbVERLi6Vw%2BUZ7SaXCMPhAsNbW%2FQVh78DxgacQY5KU%2FgHoq0Jc62ZgZxcV0NvizNqJol2%2F9Vz1ZUaRi8Sce9AZYvWEdwOH%2BXvYbuqqJn3Vwv6GwSIcn9eH0fjxMbbS7mr3QKIRa8XHWZBnFx2jBVWeAWRccjIyTmjF4bQs8s8gyVCebMLUqArmyR9%2FNfcsOdHyy%2FZMAdXbYDvQemHVFQtZAmmycdovTCsQy0d7aD5noHj5A496mbd%2B6xdEOWmc4Q%2FREQ6nbBwpwc0wxWefxkTzeFYOsfbLGQ6DmlLRzeqUwBIfAsUqFStAVYFxVKuVV7wEG6vnAtL8SW%2Bq6jnkYSux2G%2FtR%2BpHA9zFudkm25HRaLoUyKPr5lUpRCBgKDnbEq3adZJeLfpTSop6jk5FnLP8fLhBIS9ae1ortglqDYrUGT1yTHgWCOvcgDxXWhF2nZ5DlPwx8QM9UWKeoHZvYVwngdhS0PU2SfMOrnpsIGOqUBnMNzGXqgWftFbGDOgwPK%2FWZy9JzrkHdZRzS%2B8geAR3kd%2Fluo%2BcDb%2FthplRMkfodysZDLRGUfM273fSLQfuyXRdSjS0ZdqxrFVS%2BLTYtMhtYtbSBAWsdSml%2Bm7irAK14X%2BEWO8SNoAPKcJYDEgxfi%2F2Ff%2FVsW%2BH8iruOU5WOU1MAR9waVRLwRcsuKw2Rso%2BFF5ERlQOZBV03%2BHt6Nw70pBDnuB4d3&X-Amz-Signature=a69adae12d6f47e07ffdd378ace915e719a4332559872fde6916275312874ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHSAPLH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNnLTH%2Bti1amX20FHgzRdJxrDFVLbHYRks1qNvCWKw8wIgJzYT06JKpQJtC8ojTP%2BD1ZVFRJ0MVbFeO3n5VLhOIMEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYQ84uSfGQ%2FD%2ByIayrcA33teIN0T8hAnKKjSIRRbLu2LlUmkwj9cxwYkWeTEyB4e1%2FszIm47z0YTUvF3PA8QqgnkiMNGYjvbRETMA%2B6c%2BVn17ntK5JS4oN%2FNYxXO4UfnVwQDj8bi66PcnjldWVq3N617mqWVA%2FBvHhy5atr7Sx0n8F3XbVERLi6Vw%2BUZ7SaXCMPhAsNbW%2FQVh78DxgacQY5KU%2FgHoq0Jc62ZgZxcV0NvizNqJol2%2F9Vz1ZUaRi8Sce9AZYvWEdwOH%2BXvYbuqqJn3Vwv6GwSIcn9eH0fjxMbbS7mr3QKIRa8XHWZBnFx2jBVWeAWRccjIyTmjF4bQs8s8gyVCebMLUqArmyR9%2FNfcsOdHyy%2FZMAdXbYDvQemHVFQtZAmmycdovTCsQy0d7aD5noHj5A496mbd%2B6xdEOWmc4Q%2FREQ6nbBwpwc0wxWefxkTzeFYOsfbLGQ6DmlLRzeqUwBIfAsUqFStAVYFxVKuVV7wEG6vnAtL8SW%2Bq6jnkYSux2G%2FtR%2BpHA9zFudkm25HRaLoUyKPr5lUpRCBgKDnbEq3adZJeLfpTSop6jk5FnLP8fLhBIS9ae1ortglqDYrUGT1yTHgWCOvcgDxXWhF2nZ5DlPwx8QM9UWKeoHZvYVwngdhS0PU2SfMOrnpsIGOqUBnMNzGXqgWftFbGDOgwPK%2FWZy9JzrkHdZRzS%2B8geAR3kd%2Fluo%2BcDb%2FthplRMkfodysZDLRGUfM273fSLQfuyXRdSjS0ZdqxrFVS%2BLTYtMhtYtbSBAWsdSml%2Bm7irAK14X%2BEWO8SNoAPKcJYDEgxfi%2F2Ff%2FVsW%2BH8iruOU5WOU1MAR9waVRLwRcsuKw2Rso%2BFF5ERlQOZBV03%2BHt6Nw70pBDnuB4d3&X-Amz-Signature=ec152b2bbdfcd293cd43292cc242c89bf61b464a426e7a33c4ea10a1496c2ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
