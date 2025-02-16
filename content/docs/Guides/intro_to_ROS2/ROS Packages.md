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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3E3ORM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAz5X7Hqwshanh5EPb9FWFwaMJ0mao%2FpK8go%2FT7wc0LdAiEAxvQHODtpvR3Gu4iPcp4hyCkZFyPaIoutmGcxqPGVyq8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMVCOtAcSOoEyEzShCrcA2o7Pv5GtW1s3DLT5dc3%2BcHhc%2FK7wWr%2Fb99P4yljsqm2U9TC9qU1lyDRMHN79OZY81yxP8d7w0bs6Y7FBccFpXW%2BFe7dVwaMoDsfp0eq2VmpKlzyIYCJRRGX4p1dvINksO68BVwK4%2FoiA4RP1U6gBamWbQZJYewp%2Bksj0XpzgbiQm12ZSx%2BnbvB7Ye%2BGl4QeWzNj5H3MNVrZCKLpPPZkDHVYBScMBVlXoyZ89WcI09OYSUcdjyPeKYUX6sMnpbbC%2FAf9RisauXDkJrF6PwLSMtHqYRgIX194E285eWx8J6yJv4%2B3A%2FB%2Fn9TGmhjkQT9hZ46tyzwe2bBI2YPgF0Pat0DUXrhbl4OO8fg3oHfLjEHsXnn4EcE6%2BCENDD56HQAROkF01Y4SMnqGfo1yCwJ%2BhIX34P2nN4ErkPY72VAB3L684yfkFwk9zl%2B%2Bnu9OHwiTPqHV8Rw0EhJV0D6DZctT1Jqq%2BGgQ3aG4Px%2FNrsLxWVEiH%2B0XOvUjaQohC8Dfaf5lgMAzejzXqnu6rOhH21NMEIEuVuA9ol%2BBC7zdTY5F2wO%2BZgKPeHNAceOclnQLS5UggO6vVQWiAANdQojvQatc1Ulmz2KeVtB7ZrABmUs%2BzIXHYP1okT5PcF8cyubMMI3nxL0GOqUBSPobveYPvXNKRPEet5Cnv%2BDmG1XwL4haHDUMF00PQTSBMQCPGpBET25nu6Xn2UCYzZWZxx2qIpVNEd3kYtFPEvrd5lcgxO9mDlwvhLSiG3MlYzAVGgIr73qlsQ3Q4pkKskG%2FBnwbpZ9PzLhx19PBnGlHdmSuZtOBmgcLT%2BhOGR9cEITSvAPgxbkoGJSy5wdMAPmlMeBO5162x%2Be9fEpx1Q9TDFoh&X-Amz-Signature=e0cea53e4c994e6c0d6381a9140597861acb84a8a223167683ce9bc0c1828faa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3E3ORM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAz5X7Hqwshanh5EPb9FWFwaMJ0mao%2FpK8go%2FT7wc0LdAiEAxvQHODtpvR3Gu4iPcp4hyCkZFyPaIoutmGcxqPGVyq8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMVCOtAcSOoEyEzShCrcA2o7Pv5GtW1s3DLT5dc3%2BcHhc%2FK7wWr%2Fb99P4yljsqm2U9TC9qU1lyDRMHN79OZY81yxP8d7w0bs6Y7FBccFpXW%2BFe7dVwaMoDsfp0eq2VmpKlzyIYCJRRGX4p1dvINksO68BVwK4%2FoiA4RP1U6gBamWbQZJYewp%2Bksj0XpzgbiQm12ZSx%2BnbvB7Ye%2BGl4QeWzNj5H3MNVrZCKLpPPZkDHVYBScMBVlXoyZ89WcI09OYSUcdjyPeKYUX6sMnpbbC%2FAf9RisauXDkJrF6PwLSMtHqYRgIX194E285eWx8J6yJv4%2B3A%2FB%2Fn9TGmhjkQT9hZ46tyzwe2bBI2YPgF0Pat0DUXrhbl4OO8fg3oHfLjEHsXnn4EcE6%2BCENDD56HQAROkF01Y4SMnqGfo1yCwJ%2BhIX34P2nN4ErkPY72VAB3L684yfkFwk9zl%2B%2Bnu9OHwiTPqHV8Rw0EhJV0D6DZctT1Jqq%2BGgQ3aG4Px%2FNrsLxWVEiH%2B0XOvUjaQohC8Dfaf5lgMAzejzXqnu6rOhH21NMEIEuVuA9ol%2BBC7zdTY5F2wO%2BZgKPeHNAceOclnQLS5UggO6vVQWiAANdQojvQatc1Ulmz2KeVtB7ZrABmUs%2BzIXHYP1okT5PcF8cyubMMI3nxL0GOqUBSPobveYPvXNKRPEet5Cnv%2BDmG1XwL4haHDUMF00PQTSBMQCPGpBET25nu6Xn2UCYzZWZxx2qIpVNEd3kYtFPEvrd5lcgxO9mDlwvhLSiG3MlYzAVGgIr73qlsQ3Q4pkKskG%2FBnwbpZ9PzLhx19PBnGlHdmSuZtOBmgcLT%2BhOGR9cEITSvAPgxbkoGJSy5wdMAPmlMeBO5162x%2Be9fEpx1Q9TDFoh&X-Amz-Signature=d2942dccee0971271710602c5ffceacd2d96ef00d0fa96ad6ea9071e5cf41720&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3E3ORM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAz5X7Hqwshanh5EPb9FWFwaMJ0mao%2FpK8go%2FT7wc0LdAiEAxvQHODtpvR3Gu4iPcp4hyCkZFyPaIoutmGcxqPGVyq8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMVCOtAcSOoEyEzShCrcA2o7Pv5GtW1s3DLT5dc3%2BcHhc%2FK7wWr%2Fb99P4yljsqm2U9TC9qU1lyDRMHN79OZY81yxP8d7w0bs6Y7FBccFpXW%2BFe7dVwaMoDsfp0eq2VmpKlzyIYCJRRGX4p1dvINksO68BVwK4%2FoiA4RP1U6gBamWbQZJYewp%2Bksj0XpzgbiQm12ZSx%2BnbvB7Ye%2BGl4QeWzNj5H3MNVrZCKLpPPZkDHVYBScMBVlXoyZ89WcI09OYSUcdjyPeKYUX6sMnpbbC%2FAf9RisauXDkJrF6PwLSMtHqYRgIX194E285eWx8J6yJv4%2B3A%2FB%2Fn9TGmhjkQT9hZ46tyzwe2bBI2YPgF0Pat0DUXrhbl4OO8fg3oHfLjEHsXnn4EcE6%2BCENDD56HQAROkF01Y4SMnqGfo1yCwJ%2BhIX34P2nN4ErkPY72VAB3L684yfkFwk9zl%2B%2Bnu9OHwiTPqHV8Rw0EhJV0D6DZctT1Jqq%2BGgQ3aG4Px%2FNrsLxWVEiH%2B0XOvUjaQohC8Dfaf5lgMAzejzXqnu6rOhH21NMEIEuVuA9ol%2BBC7zdTY5F2wO%2BZgKPeHNAceOclnQLS5UggO6vVQWiAANdQojvQatc1Ulmz2KeVtB7ZrABmUs%2BzIXHYP1okT5PcF8cyubMMI3nxL0GOqUBSPobveYPvXNKRPEet5Cnv%2BDmG1XwL4haHDUMF00PQTSBMQCPGpBET25nu6Xn2UCYzZWZxx2qIpVNEd3kYtFPEvrd5lcgxO9mDlwvhLSiG3MlYzAVGgIr73qlsQ3Q4pkKskG%2FBnwbpZ9PzLhx19PBnGlHdmSuZtOBmgcLT%2BhOGR9cEITSvAPgxbkoGJSy5wdMAPmlMeBO5162x%2Be9fEpx1Q9TDFoh&X-Amz-Signature=5047ae59a5a4011cb32ee2e66091a623b141987c4fe5d81378a68111eade3817&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3E3ORM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAz5X7Hqwshanh5EPb9FWFwaMJ0mao%2FpK8go%2FT7wc0LdAiEAxvQHODtpvR3Gu4iPcp4hyCkZFyPaIoutmGcxqPGVyq8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMVCOtAcSOoEyEzShCrcA2o7Pv5GtW1s3DLT5dc3%2BcHhc%2FK7wWr%2Fb99P4yljsqm2U9TC9qU1lyDRMHN79OZY81yxP8d7w0bs6Y7FBccFpXW%2BFe7dVwaMoDsfp0eq2VmpKlzyIYCJRRGX4p1dvINksO68BVwK4%2FoiA4RP1U6gBamWbQZJYewp%2Bksj0XpzgbiQm12ZSx%2BnbvB7Ye%2BGl4QeWzNj5H3MNVrZCKLpPPZkDHVYBScMBVlXoyZ89WcI09OYSUcdjyPeKYUX6sMnpbbC%2FAf9RisauXDkJrF6PwLSMtHqYRgIX194E285eWx8J6yJv4%2B3A%2FB%2Fn9TGmhjkQT9hZ46tyzwe2bBI2YPgF0Pat0DUXrhbl4OO8fg3oHfLjEHsXnn4EcE6%2BCENDD56HQAROkF01Y4SMnqGfo1yCwJ%2BhIX34P2nN4ErkPY72VAB3L684yfkFwk9zl%2B%2Bnu9OHwiTPqHV8Rw0EhJV0D6DZctT1Jqq%2BGgQ3aG4Px%2FNrsLxWVEiH%2B0XOvUjaQohC8Dfaf5lgMAzejzXqnu6rOhH21NMEIEuVuA9ol%2BBC7zdTY5F2wO%2BZgKPeHNAceOclnQLS5UggO6vVQWiAANdQojvQatc1Ulmz2KeVtB7ZrABmUs%2BzIXHYP1okT5PcF8cyubMMI3nxL0GOqUBSPobveYPvXNKRPEet5Cnv%2BDmG1XwL4haHDUMF00PQTSBMQCPGpBET25nu6Xn2UCYzZWZxx2qIpVNEd3kYtFPEvrd5lcgxO9mDlwvhLSiG3MlYzAVGgIr73qlsQ3Q4pkKskG%2FBnwbpZ9PzLhx19PBnGlHdmSuZtOBmgcLT%2BhOGR9cEITSvAPgxbkoGJSy5wdMAPmlMeBO5162x%2Be9fEpx1Q9TDFoh&X-Amz-Signature=362e3186033a8daae10a5e8ab5bb4f6f058e927f3ac5e2e014ac41fdb89e5809&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3E3ORM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAz5X7Hqwshanh5EPb9FWFwaMJ0mao%2FpK8go%2FT7wc0LdAiEAxvQHODtpvR3Gu4iPcp4hyCkZFyPaIoutmGcxqPGVyq8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMVCOtAcSOoEyEzShCrcA2o7Pv5GtW1s3DLT5dc3%2BcHhc%2FK7wWr%2Fb99P4yljsqm2U9TC9qU1lyDRMHN79OZY81yxP8d7w0bs6Y7FBccFpXW%2BFe7dVwaMoDsfp0eq2VmpKlzyIYCJRRGX4p1dvINksO68BVwK4%2FoiA4RP1U6gBamWbQZJYewp%2Bksj0XpzgbiQm12ZSx%2BnbvB7Ye%2BGl4QeWzNj5H3MNVrZCKLpPPZkDHVYBScMBVlXoyZ89WcI09OYSUcdjyPeKYUX6sMnpbbC%2FAf9RisauXDkJrF6PwLSMtHqYRgIX194E285eWx8J6yJv4%2B3A%2FB%2Fn9TGmhjkQT9hZ46tyzwe2bBI2YPgF0Pat0DUXrhbl4OO8fg3oHfLjEHsXnn4EcE6%2BCENDD56HQAROkF01Y4SMnqGfo1yCwJ%2BhIX34P2nN4ErkPY72VAB3L684yfkFwk9zl%2B%2Bnu9OHwiTPqHV8Rw0EhJV0D6DZctT1Jqq%2BGgQ3aG4Px%2FNrsLxWVEiH%2B0XOvUjaQohC8Dfaf5lgMAzejzXqnu6rOhH21NMEIEuVuA9ol%2BBC7zdTY5F2wO%2BZgKPeHNAceOclnQLS5UggO6vVQWiAANdQojvQatc1Ulmz2KeVtB7ZrABmUs%2BzIXHYP1okT5PcF8cyubMMI3nxL0GOqUBSPobveYPvXNKRPEet5Cnv%2BDmG1XwL4haHDUMF00PQTSBMQCPGpBET25nu6Xn2UCYzZWZxx2qIpVNEd3kYtFPEvrd5lcgxO9mDlwvhLSiG3MlYzAVGgIr73qlsQ3Q4pkKskG%2FBnwbpZ9PzLhx19PBnGlHdmSuZtOBmgcLT%2BhOGR9cEITSvAPgxbkoGJSy5wdMAPmlMeBO5162x%2Be9fEpx1Q9TDFoh&X-Amz-Signature=7cef2a869077ef6c9e3157d1ca0d9208e405f8b2d0bace15a530bd2f3b7f95cb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3E3ORM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAz5X7Hqwshanh5EPb9FWFwaMJ0mao%2FpK8go%2FT7wc0LdAiEAxvQHODtpvR3Gu4iPcp4hyCkZFyPaIoutmGcxqPGVyq8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMVCOtAcSOoEyEzShCrcA2o7Pv5GtW1s3DLT5dc3%2BcHhc%2FK7wWr%2Fb99P4yljsqm2U9TC9qU1lyDRMHN79OZY81yxP8d7w0bs6Y7FBccFpXW%2BFe7dVwaMoDsfp0eq2VmpKlzyIYCJRRGX4p1dvINksO68BVwK4%2FoiA4RP1U6gBamWbQZJYewp%2Bksj0XpzgbiQm12ZSx%2BnbvB7Ye%2BGl4QeWzNj5H3MNVrZCKLpPPZkDHVYBScMBVlXoyZ89WcI09OYSUcdjyPeKYUX6sMnpbbC%2FAf9RisauXDkJrF6PwLSMtHqYRgIX194E285eWx8J6yJv4%2B3A%2FB%2Fn9TGmhjkQT9hZ46tyzwe2bBI2YPgF0Pat0DUXrhbl4OO8fg3oHfLjEHsXnn4EcE6%2BCENDD56HQAROkF01Y4SMnqGfo1yCwJ%2BhIX34P2nN4ErkPY72VAB3L684yfkFwk9zl%2B%2Bnu9OHwiTPqHV8Rw0EhJV0D6DZctT1Jqq%2BGgQ3aG4Px%2FNrsLxWVEiH%2B0XOvUjaQohC8Dfaf5lgMAzejzXqnu6rOhH21NMEIEuVuA9ol%2BBC7zdTY5F2wO%2BZgKPeHNAceOclnQLS5UggO6vVQWiAANdQojvQatc1Ulmz2KeVtB7ZrABmUs%2BzIXHYP1okT5PcF8cyubMMI3nxL0GOqUBSPobveYPvXNKRPEet5Cnv%2BDmG1XwL4haHDUMF00PQTSBMQCPGpBET25nu6Xn2UCYzZWZxx2qIpVNEd3kYtFPEvrd5lcgxO9mDlwvhLSiG3MlYzAVGgIr73qlsQ3Q4pkKskG%2FBnwbpZ9PzLhx19PBnGlHdmSuZtOBmgcLT%2BhOGR9cEITSvAPgxbkoGJSy5wdMAPmlMeBO5162x%2Be9fEpx1Q9TDFoh&X-Amz-Signature=a3313cd18e5f38fe2a07436d2236e60b9e616945c37a75c79d8f6d07f46d8f23&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3E3ORM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAz5X7Hqwshanh5EPb9FWFwaMJ0mao%2FpK8go%2FT7wc0LdAiEAxvQHODtpvR3Gu4iPcp4hyCkZFyPaIoutmGcxqPGVyq8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMVCOtAcSOoEyEzShCrcA2o7Pv5GtW1s3DLT5dc3%2BcHhc%2FK7wWr%2Fb99P4yljsqm2U9TC9qU1lyDRMHN79OZY81yxP8d7w0bs6Y7FBccFpXW%2BFe7dVwaMoDsfp0eq2VmpKlzyIYCJRRGX4p1dvINksO68BVwK4%2FoiA4RP1U6gBamWbQZJYewp%2Bksj0XpzgbiQm12ZSx%2BnbvB7Ye%2BGl4QeWzNj5H3MNVrZCKLpPPZkDHVYBScMBVlXoyZ89WcI09OYSUcdjyPeKYUX6sMnpbbC%2FAf9RisauXDkJrF6PwLSMtHqYRgIX194E285eWx8J6yJv4%2B3A%2FB%2Fn9TGmhjkQT9hZ46tyzwe2bBI2YPgF0Pat0DUXrhbl4OO8fg3oHfLjEHsXnn4EcE6%2BCENDD56HQAROkF01Y4SMnqGfo1yCwJ%2BhIX34P2nN4ErkPY72VAB3L684yfkFwk9zl%2B%2Bnu9OHwiTPqHV8Rw0EhJV0D6DZctT1Jqq%2BGgQ3aG4Px%2FNrsLxWVEiH%2B0XOvUjaQohC8Dfaf5lgMAzejzXqnu6rOhH21NMEIEuVuA9ol%2BBC7zdTY5F2wO%2BZgKPeHNAceOclnQLS5UggO6vVQWiAANdQojvQatc1Ulmz2KeVtB7ZrABmUs%2BzIXHYP1okT5PcF8cyubMMI3nxL0GOqUBSPobveYPvXNKRPEet5Cnv%2BDmG1XwL4haHDUMF00PQTSBMQCPGpBET25nu6Xn2UCYzZWZxx2qIpVNEd3kYtFPEvrd5lcgxO9mDlwvhLSiG3MlYzAVGgIr73qlsQ3Q4pkKskG%2FBnwbpZ9PzLhx19PBnGlHdmSuZtOBmgcLT%2BhOGR9cEITSvAPgxbkoGJSy5wdMAPmlMeBO5162x%2Be9fEpx1Q9TDFoh&X-Amz-Signature=b5d2f0296c35dbbfb5b4962881638051aeae735304c120edd1ea2fe442e18da7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
