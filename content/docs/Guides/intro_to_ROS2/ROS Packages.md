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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KJVOXG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6Whc507FXFZA7g%2BkanNi6dUcFPST%2FicNbtMzxPrFWlAiEAgU5DBfwsqJyqmDF2vllj%2F6dMlzATvMKrMwnvEJ9KpJwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB9igNQe42QQicuiSrcA5W5FasoJgWEIhGUQcKTguI1UMD186or3SfLIO2oOGrNXxJpoMMddvYDfGjNkXjMMa6JgW4bm3p7IwyUxLTHcXYUI7poDYVovCdt7E04Vt07%2BkGWVemQF%2BcegnTJ4B841LHfB0usaC5Q1sxZPiVgSw4JAO8sLgZgzTLgvUlQZo4DQhvShUfd3eWfSxMIYRaPu7f26SoewIGFXWwWze1HPuhq2BNznHiClnu8w3iz0OvImm7USgCz7muzM%2B%2B0fxIYCqGKh4VTdc1MNzjduaZGmCztVZR9H5IIeiVFPeAOdLVy0O9%2Fb9hNv6Eu7ixxcZP%2FdkaM4tsx1xZVIt5SPTrHjtlJCs9kJEBCfpN8gDs3mfQxANS2WD7QfvLai7DHlpBAgdNMJDvF0ZM8gaDaE1DGAMw4xn5qtSb68pq6wyqx%2FSp%2BCpLWTr8STqGcB6EtC1R6PIbJjClC5Q8lcHEpluQljk7Gu1mG6be0QgtMnpOcg0X3CAzjjX%2FKjUP%2FupRuqLFQrGmTBWn5ZeW5PHumtOGnRCEhzxnHDt0N4WlFHmpFpZVJYO%2Bs6RanjsNTMbcAiKhUrTFvXFI8aWhE7Xb7xNKstXGdeVxz8GhmlqZ9wRHeXNAJwuA13cEar04eR9MhMOvkob0GOqUBoyfJa38a56Dk65Uev8S%2BOAj4C1%2BUeCmWvSeU0ABXnXNwihfT5KiAquI%2BvXu9tFeYD5T%2BXsWbBXvyFeIAHc8D4OV3gpDd%2BrFN7vCeGHO%2F91jzcE8ANyCwUDsx9uESrY%2BwWXSPhl97333UPlCWC2O%2B8OYKbl%2F7BF%2BtO%2BTt32bh%2BEr%2F34qMURJv72Ri%2FDpjD6AakAc8tP7iB%2FEsFlWda%2FqDS5Z8bfsE&X-Amz-Signature=0ce60b9944f9ad6b54607e17dbbb250b263588ea0a210d3d78d4744ec226cbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KJVOXG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6Whc507FXFZA7g%2BkanNi6dUcFPST%2FicNbtMzxPrFWlAiEAgU5DBfwsqJyqmDF2vllj%2F6dMlzATvMKrMwnvEJ9KpJwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB9igNQe42QQicuiSrcA5W5FasoJgWEIhGUQcKTguI1UMD186or3SfLIO2oOGrNXxJpoMMddvYDfGjNkXjMMa6JgW4bm3p7IwyUxLTHcXYUI7poDYVovCdt7E04Vt07%2BkGWVemQF%2BcegnTJ4B841LHfB0usaC5Q1sxZPiVgSw4JAO8sLgZgzTLgvUlQZo4DQhvShUfd3eWfSxMIYRaPu7f26SoewIGFXWwWze1HPuhq2BNznHiClnu8w3iz0OvImm7USgCz7muzM%2B%2B0fxIYCqGKh4VTdc1MNzjduaZGmCztVZR9H5IIeiVFPeAOdLVy0O9%2Fb9hNv6Eu7ixxcZP%2FdkaM4tsx1xZVIt5SPTrHjtlJCs9kJEBCfpN8gDs3mfQxANS2WD7QfvLai7DHlpBAgdNMJDvF0ZM8gaDaE1DGAMw4xn5qtSb68pq6wyqx%2FSp%2BCpLWTr8STqGcB6EtC1R6PIbJjClC5Q8lcHEpluQljk7Gu1mG6be0QgtMnpOcg0X3CAzjjX%2FKjUP%2FupRuqLFQrGmTBWn5ZeW5PHumtOGnRCEhzxnHDt0N4WlFHmpFpZVJYO%2Bs6RanjsNTMbcAiKhUrTFvXFI8aWhE7Xb7xNKstXGdeVxz8GhmlqZ9wRHeXNAJwuA13cEar04eR9MhMOvkob0GOqUBoyfJa38a56Dk65Uev8S%2BOAj4C1%2BUeCmWvSeU0ABXnXNwihfT5KiAquI%2BvXu9tFeYD5T%2BXsWbBXvyFeIAHc8D4OV3gpDd%2BrFN7vCeGHO%2F91jzcE8ANyCwUDsx9uESrY%2BwWXSPhl97333UPlCWC2O%2B8OYKbl%2F7BF%2BtO%2BTt32bh%2BEr%2F34qMURJv72Ri%2FDpjD6AakAc8tP7iB%2FEsFlWda%2FqDS5Z8bfsE&X-Amz-Signature=123d4992b035ba06af55e5fef4f3ea156598519e8e204c4b93af52b065ad9d22&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KJVOXG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6Whc507FXFZA7g%2BkanNi6dUcFPST%2FicNbtMzxPrFWlAiEAgU5DBfwsqJyqmDF2vllj%2F6dMlzATvMKrMwnvEJ9KpJwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB9igNQe42QQicuiSrcA5W5FasoJgWEIhGUQcKTguI1UMD186or3SfLIO2oOGrNXxJpoMMddvYDfGjNkXjMMa6JgW4bm3p7IwyUxLTHcXYUI7poDYVovCdt7E04Vt07%2BkGWVemQF%2BcegnTJ4B841LHfB0usaC5Q1sxZPiVgSw4JAO8sLgZgzTLgvUlQZo4DQhvShUfd3eWfSxMIYRaPu7f26SoewIGFXWwWze1HPuhq2BNznHiClnu8w3iz0OvImm7USgCz7muzM%2B%2B0fxIYCqGKh4VTdc1MNzjduaZGmCztVZR9H5IIeiVFPeAOdLVy0O9%2Fb9hNv6Eu7ixxcZP%2FdkaM4tsx1xZVIt5SPTrHjtlJCs9kJEBCfpN8gDs3mfQxANS2WD7QfvLai7DHlpBAgdNMJDvF0ZM8gaDaE1DGAMw4xn5qtSb68pq6wyqx%2FSp%2BCpLWTr8STqGcB6EtC1R6PIbJjClC5Q8lcHEpluQljk7Gu1mG6be0QgtMnpOcg0X3CAzjjX%2FKjUP%2FupRuqLFQrGmTBWn5ZeW5PHumtOGnRCEhzxnHDt0N4WlFHmpFpZVJYO%2Bs6RanjsNTMbcAiKhUrTFvXFI8aWhE7Xb7xNKstXGdeVxz8GhmlqZ9wRHeXNAJwuA13cEar04eR9MhMOvkob0GOqUBoyfJa38a56Dk65Uev8S%2BOAj4C1%2BUeCmWvSeU0ABXnXNwihfT5KiAquI%2BvXu9tFeYD5T%2BXsWbBXvyFeIAHc8D4OV3gpDd%2BrFN7vCeGHO%2F91jzcE8ANyCwUDsx9uESrY%2BwWXSPhl97333UPlCWC2O%2B8OYKbl%2F7BF%2BtO%2BTt32bh%2BEr%2F34qMURJv72Ri%2FDpjD6AakAc8tP7iB%2FEsFlWda%2FqDS5Z8bfsE&X-Amz-Signature=f1c5d9caf3eb4a591443fcc121a1ad2009c9b53a57364ea9e53a8c3f58994cae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KJVOXG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6Whc507FXFZA7g%2BkanNi6dUcFPST%2FicNbtMzxPrFWlAiEAgU5DBfwsqJyqmDF2vllj%2F6dMlzATvMKrMwnvEJ9KpJwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB9igNQe42QQicuiSrcA5W5FasoJgWEIhGUQcKTguI1UMD186or3SfLIO2oOGrNXxJpoMMddvYDfGjNkXjMMa6JgW4bm3p7IwyUxLTHcXYUI7poDYVovCdt7E04Vt07%2BkGWVemQF%2BcegnTJ4B841LHfB0usaC5Q1sxZPiVgSw4JAO8sLgZgzTLgvUlQZo4DQhvShUfd3eWfSxMIYRaPu7f26SoewIGFXWwWze1HPuhq2BNznHiClnu8w3iz0OvImm7USgCz7muzM%2B%2B0fxIYCqGKh4VTdc1MNzjduaZGmCztVZR9H5IIeiVFPeAOdLVy0O9%2Fb9hNv6Eu7ixxcZP%2FdkaM4tsx1xZVIt5SPTrHjtlJCs9kJEBCfpN8gDs3mfQxANS2WD7QfvLai7DHlpBAgdNMJDvF0ZM8gaDaE1DGAMw4xn5qtSb68pq6wyqx%2FSp%2BCpLWTr8STqGcB6EtC1R6PIbJjClC5Q8lcHEpluQljk7Gu1mG6be0QgtMnpOcg0X3CAzjjX%2FKjUP%2FupRuqLFQrGmTBWn5ZeW5PHumtOGnRCEhzxnHDt0N4WlFHmpFpZVJYO%2Bs6RanjsNTMbcAiKhUrTFvXFI8aWhE7Xb7xNKstXGdeVxz8GhmlqZ9wRHeXNAJwuA13cEar04eR9MhMOvkob0GOqUBoyfJa38a56Dk65Uev8S%2BOAj4C1%2BUeCmWvSeU0ABXnXNwihfT5KiAquI%2BvXu9tFeYD5T%2BXsWbBXvyFeIAHc8D4OV3gpDd%2BrFN7vCeGHO%2F91jzcE8ANyCwUDsx9uESrY%2BwWXSPhl97333UPlCWC2O%2B8OYKbl%2F7BF%2BtO%2BTt32bh%2BEr%2F34qMURJv72Ri%2FDpjD6AakAc8tP7iB%2FEsFlWda%2FqDS5Z8bfsE&X-Amz-Signature=c5989a6ca145b3d970900541ed657110519950d2212308b69b4f146c0c5a124a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KJVOXG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6Whc507FXFZA7g%2BkanNi6dUcFPST%2FicNbtMzxPrFWlAiEAgU5DBfwsqJyqmDF2vllj%2F6dMlzATvMKrMwnvEJ9KpJwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB9igNQe42QQicuiSrcA5W5FasoJgWEIhGUQcKTguI1UMD186or3SfLIO2oOGrNXxJpoMMddvYDfGjNkXjMMa6JgW4bm3p7IwyUxLTHcXYUI7poDYVovCdt7E04Vt07%2BkGWVemQF%2BcegnTJ4B841LHfB0usaC5Q1sxZPiVgSw4JAO8sLgZgzTLgvUlQZo4DQhvShUfd3eWfSxMIYRaPu7f26SoewIGFXWwWze1HPuhq2BNznHiClnu8w3iz0OvImm7USgCz7muzM%2B%2B0fxIYCqGKh4VTdc1MNzjduaZGmCztVZR9H5IIeiVFPeAOdLVy0O9%2Fb9hNv6Eu7ixxcZP%2FdkaM4tsx1xZVIt5SPTrHjtlJCs9kJEBCfpN8gDs3mfQxANS2WD7QfvLai7DHlpBAgdNMJDvF0ZM8gaDaE1DGAMw4xn5qtSb68pq6wyqx%2FSp%2BCpLWTr8STqGcB6EtC1R6PIbJjClC5Q8lcHEpluQljk7Gu1mG6be0QgtMnpOcg0X3CAzjjX%2FKjUP%2FupRuqLFQrGmTBWn5ZeW5PHumtOGnRCEhzxnHDt0N4WlFHmpFpZVJYO%2Bs6RanjsNTMbcAiKhUrTFvXFI8aWhE7Xb7xNKstXGdeVxz8GhmlqZ9wRHeXNAJwuA13cEar04eR9MhMOvkob0GOqUBoyfJa38a56Dk65Uev8S%2BOAj4C1%2BUeCmWvSeU0ABXnXNwihfT5KiAquI%2BvXu9tFeYD5T%2BXsWbBXvyFeIAHc8D4OV3gpDd%2BrFN7vCeGHO%2F91jzcE8ANyCwUDsx9uESrY%2BwWXSPhl97333UPlCWC2O%2B8OYKbl%2F7BF%2BtO%2BTt32bh%2BEr%2F34qMURJv72Ri%2FDpjD6AakAc8tP7iB%2FEsFlWda%2FqDS5Z8bfsE&X-Amz-Signature=b70cb7259e1a5b10fd5b1a5a777685c3190e6c9ec114fb98daf9f04b4d412795&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KJVOXG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6Whc507FXFZA7g%2BkanNi6dUcFPST%2FicNbtMzxPrFWlAiEAgU5DBfwsqJyqmDF2vllj%2F6dMlzATvMKrMwnvEJ9KpJwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB9igNQe42QQicuiSrcA5W5FasoJgWEIhGUQcKTguI1UMD186or3SfLIO2oOGrNXxJpoMMddvYDfGjNkXjMMa6JgW4bm3p7IwyUxLTHcXYUI7poDYVovCdt7E04Vt07%2BkGWVemQF%2BcegnTJ4B841LHfB0usaC5Q1sxZPiVgSw4JAO8sLgZgzTLgvUlQZo4DQhvShUfd3eWfSxMIYRaPu7f26SoewIGFXWwWze1HPuhq2BNznHiClnu8w3iz0OvImm7USgCz7muzM%2B%2B0fxIYCqGKh4VTdc1MNzjduaZGmCztVZR9H5IIeiVFPeAOdLVy0O9%2Fb9hNv6Eu7ixxcZP%2FdkaM4tsx1xZVIt5SPTrHjtlJCs9kJEBCfpN8gDs3mfQxANS2WD7QfvLai7DHlpBAgdNMJDvF0ZM8gaDaE1DGAMw4xn5qtSb68pq6wyqx%2FSp%2BCpLWTr8STqGcB6EtC1R6PIbJjClC5Q8lcHEpluQljk7Gu1mG6be0QgtMnpOcg0X3CAzjjX%2FKjUP%2FupRuqLFQrGmTBWn5ZeW5PHumtOGnRCEhzxnHDt0N4WlFHmpFpZVJYO%2Bs6RanjsNTMbcAiKhUrTFvXFI8aWhE7Xb7xNKstXGdeVxz8GhmlqZ9wRHeXNAJwuA13cEar04eR9MhMOvkob0GOqUBoyfJa38a56Dk65Uev8S%2BOAj4C1%2BUeCmWvSeU0ABXnXNwihfT5KiAquI%2BvXu9tFeYD5T%2BXsWbBXvyFeIAHc8D4OV3gpDd%2BrFN7vCeGHO%2F91jzcE8ANyCwUDsx9uESrY%2BwWXSPhl97333UPlCWC2O%2B8OYKbl%2F7BF%2BtO%2BTt32bh%2BEr%2F34qMURJv72Ri%2FDpjD6AakAc8tP7iB%2FEsFlWda%2FqDS5Z8bfsE&X-Amz-Signature=8cd72abd07f48d8249b630a8b3d2b907fbecc87cc83bde06f5b6059fdb5ac056&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KJVOXG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6Whc507FXFZA7g%2BkanNi6dUcFPST%2FicNbtMzxPrFWlAiEAgU5DBfwsqJyqmDF2vllj%2F6dMlzATvMKrMwnvEJ9KpJwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB9igNQe42QQicuiSrcA5W5FasoJgWEIhGUQcKTguI1UMD186or3SfLIO2oOGrNXxJpoMMddvYDfGjNkXjMMa6JgW4bm3p7IwyUxLTHcXYUI7poDYVovCdt7E04Vt07%2BkGWVemQF%2BcegnTJ4B841LHfB0usaC5Q1sxZPiVgSw4JAO8sLgZgzTLgvUlQZo4DQhvShUfd3eWfSxMIYRaPu7f26SoewIGFXWwWze1HPuhq2BNznHiClnu8w3iz0OvImm7USgCz7muzM%2B%2B0fxIYCqGKh4VTdc1MNzjduaZGmCztVZR9H5IIeiVFPeAOdLVy0O9%2Fb9hNv6Eu7ixxcZP%2FdkaM4tsx1xZVIt5SPTrHjtlJCs9kJEBCfpN8gDs3mfQxANS2WD7QfvLai7DHlpBAgdNMJDvF0ZM8gaDaE1DGAMw4xn5qtSb68pq6wyqx%2FSp%2BCpLWTr8STqGcB6EtC1R6PIbJjClC5Q8lcHEpluQljk7Gu1mG6be0QgtMnpOcg0X3CAzjjX%2FKjUP%2FupRuqLFQrGmTBWn5ZeW5PHumtOGnRCEhzxnHDt0N4WlFHmpFpZVJYO%2Bs6RanjsNTMbcAiKhUrTFvXFI8aWhE7Xb7xNKstXGdeVxz8GhmlqZ9wRHeXNAJwuA13cEar04eR9MhMOvkob0GOqUBoyfJa38a56Dk65Uev8S%2BOAj4C1%2BUeCmWvSeU0ABXnXNwihfT5KiAquI%2BvXu9tFeYD5T%2BXsWbBXvyFeIAHc8D4OV3gpDd%2BrFN7vCeGHO%2F91jzcE8ANyCwUDsx9uESrY%2BwWXSPhl97333UPlCWC2O%2B8OYKbl%2F7BF%2BtO%2BTt32bh%2BEr%2F34qMURJv72Ri%2FDpjD6AakAc8tP7iB%2FEsFlWda%2FqDS5Z8bfsE&X-Amz-Signature=1645e39103bb0c56d13e870cc70acf873aa7992d67587cdffed4e302f449bee7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
