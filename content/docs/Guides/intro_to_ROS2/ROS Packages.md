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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS377QL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6CxEZ5FWbtdpekc1JG%2FL0OPjwGJXzHDKdiS1aN6V%2F2wIgXtENKs1530f7w9Y0qqc4D1vPk4nojQ943gr3r2qQDssqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfVSNctbCjQZA9wUircAwP8MLGohpnWC39UFlhHcYJmFqPxzvK9xyD%2FERt9wZi7K9sInRfR2O%2FbgzAVRFJGly05VZjufrspAgdfUrqE43qcnpRIcVqpCGyZ%2BcVAHAIoVlkP3ltBheLSuZXBdPOf2ZtuqJqLMaYqj24FPRt5MC95lkUtFdSdQyAVLoKm2jyL3dHpSQqWuKrts7MFGr9PnnIuE8fdVi4OHYSWtQvYpxV17CKpHbJwWtZK0a2h3bi%2F03tGvNk0rpRgLJOyTKYfMSI52kjGIpiFaJBnjKKFUExDyelIm9CPmRZhhDNQ%2FYrurYAycq5xJjsR7ZdTmhfgptjEAVRZQ2nIefSUHM%2BN3d0ghxnK%2FySyWATsD%2Blr5j1RDFw0B6XZbhPOo%2FJ9%2FlK53UQr9znZEFvxdJilYsMMh%2BbvqKKDQfFSRMQ6cvVRB3ZMwJ5Eb13I0o600jzaL4ZRs4ONXqTu9T8stnhrq9LS5u9kI0b9ZiyUn7oWzctTc44MGvw7YN87ZIkcsKxkmX%2B1xxveDyM6j3jPJD5CjZtPTkmrX%2FSxbX8kI9FgxjsNmQ8jnMSzr400JeWCasBmnKB32%2FkivwG2163rkkeib6BcG8MvLSXshYzRtFYcudlc2gEchyo5dz%2BR7QuUJNKCMMn8yMMGOqUB8%2B2ZRyFFtRmdHXxd3dH%2FAbmoi%2Bn5Riiiy2Ig57xcCg2dxpQtlUFKWB0cC0qEJpAJnhzghTZ%2Bh4BjPj5CQfYS7AysPiyqJDSF%2Fb267YtDjYsD9K4QYjP7DiowS%2F67lpSUKlQmOeLPpvUZIAX0Q4IJT3DP51IkQoE%2Bo6OTmrZXAFk5tGVJlowl7PWVD6j%2BGxQl44feoQruKaTV9G1dajQUHt1%2FQdki&X-Amz-Signature=ce6bb2e0db36f072b045fb6b46f391f36b712bcc84a57e982c2ad1636b4ed3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS377QL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6CxEZ5FWbtdpekc1JG%2FL0OPjwGJXzHDKdiS1aN6V%2F2wIgXtENKs1530f7w9Y0qqc4D1vPk4nojQ943gr3r2qQDssqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfVSNctbCjQZA9wUircAwP8MLGohpnWC39UFlhHcYJmFqPxzvK9xyD%2FERt9wZi7K9sInRfR2O%2FbgzAVRFJGly05VZjufrspAgdfUrqE43qcnpRIcVqpCGyZ%2BcVAHAIoVlkP3ltBheLSuZXBdPOf2ZtuqJqLMaYqj24FPRt5MC95lkUtFdSdQyAVLoKm2jyL3dHpSQqWuKrts7MFGr9PnnIuE8fdVi4OHYSWtQvYpxV17CKpHbJwWtZK0a2h3bi%2F03tGvNk0rpRgLJOyTKYfMSI52kjGIpiFaJBnjKKFUExDyelIm9CPmRZhhDNQ%2FYrurYAycq5xJjsR7ZdTmhfgptjEAVRZQ2nIefSUHM%2BN3d0ghxnK%2FySyWATsD%2Blr5j1RDFw0B6XZbhPOo%2FJ9%2FlK53UQr9znZEFvxdJilYsMMh%2BbvqKKDQfFSRMQ6cvVRB3ZMwJ5Eb13I0o600jzaL4ZRs4ONXqTu9T8stnhrq9LS5u9kI0b9ZiyUn7oWzctTc44MGvw7YN87ZIkcsKxkmX%2B1xxveDyM6j3jPJD5CjZtPTkmrX%2FSxbX8kI9FgxjsNmQ8jnMSzr400JeWCasBmnKB32%2FkivwG2163rkkeib6BcG8MvLSXshYzRtFYcudlc2gEchyo5dz%2BR7QuUJNKCMMn8yMMGOqUB8%2B2ZRyFFtRmdHXxd3dH%2FAbmoi%2Bn5Riiiy2Ig57xcCg2dxpQtlUFKWB0cC0qEJpAJnhzghTZ%2Bh4BjPj5CQfYS7AysPiyqJDSF%2Fb267YtDjYsD9K4QYjP7DiowS%2F67lpSUKlQmOeLPpvUZIAX0Q4IJT3DP51IkQoE%2Bo6OTmrZXAFk5tGVJlowl7PWVD6j%2BGxQl44feoQruKaTV9G1dajQUHt1%2FQdki&X-Amz-Signature=cd13034dc7e85f480c232bc0d8a914baa5f92eb27093b8087defef1535ce4e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS377QL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6CxEZ5FWbtdpekc1JG%2FL0OPjwGJXzHDKdiS1aN6V%2F2wIgXtENKs1530f7w9Y0qqc4D1vPk4nojQ943gr3r2qQDssqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfVSNctbCjQZA9wUircAwP8MLGohpnWC39UFlhHcYJmFqPxzvK9xyD%2FERt9wZi7K9sInRfR2O%2FbgzAVRFJGly05VZjufrspAgdfUrqE43qcnpRIcVqpCGyZ%2BcVAHAIoVlkP3ltBheLSuZXBdPOf2ZtuqJqLMaYqj24FPRt5MC95lkUtFdSdQyAVLoKm2jyL3dHpSQqWuKrts7MFGr9PnnIuE8fdVi4OHYSWtQvYpxV17CKpHbJwWtZK0a2h3bi%2F03tGvNk0rpRgLJOyTKYfMSI52kjGIpiFaJBnjKKFUExDyelIm9CPmRZhhDNQ%2FYrurYAycq5xJjsR7ZdTmhfgptjEAVRZQ2nIefSUHM%2BN3d0ghxnK%2FySyWATsD%2Blr5j1RDFw0B6XZbhPOo%2FJ9%2FlK53UQr9znZEFvxdJilYsMMh%2BbvqKKDQfFSRMQ6cvVRB3ZMwJ5Eb13I0o600jzaL4ZRs4ONXqTu9T8stnhrq9LS5u9kI0b9ZiyUn7oWzctTc44MGvw7YN87ZIkcsKxkmX%2B1xxveDyM6j3jPJD5CjZtPTkmrX%2FSxbX8kI9FgxjsNmQ8jnMSzr400JeWCasBmnKB32%2FkivwG2163rkkeib6BcG8MvLSXshYzRtFYcudlc2gEchyo5dz%2BR7QuUJNKCMMn8yMMGOqUB8%2B2ZRyFFtRmdHXxd3dH%2FAbmoi%2Bn5Riiiy2Ig57xcCg2dxpQtlUFKWB0cC0qEJpAJnhzghTZ%2Bh4BjPj5CQfYS7AysPiyqJDSF%2Fb267YtDjYsD9K4QYjP7DiowS%2F67lpSUKlQmOeLPpvUZIAX0Q4IJT3DP51IkQoE%2Bo6OTmrZXAFk5tGVJlowl7PWVD6j%2BGxQl44feoQruKaTV9G1dajQUHt1%2FQdki&X-Amz-Signature=107d30b56a026ffc0a3e1f4dddd430088fceb12969a41f151cfb6d15f5d84305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS377QL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6CxEZ5FWbtdpekc1JG%2FL0OPjwGJXzHDKdiS1aN6V%2F2wIgXtENKs1530f7w9Y0qqc4D1vPk4nojQ943gr3r2qQDssqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfVSNctbCjQZA9wUircAwP8MLGohpnWC39UFlhHcYJmFqPxzvK9xyD%2FERt9wZi7K9sInRfR2O%2FbgzAVRFJGly05VZjufrspAgdfUrqE43qcnpRIcVqpCGyZ%2BcVAHAIoVlkP3ltBheLSuZXBdPOf2ZtuqJqLMaYqj24FPRt5MC95lkUtFdSdQyAVLoKm2jyL3dHpSQqWuKrts7MFGr9PnnIuE8fdVi4OHYSWtQvYpxV17CKpHbJwWtZK0a2h3bi%2F03tGvNk0rpRgLJOyTKYfMSI52kjGIpiFaJBnjKKFUExDyelIm9CPmRZhhDNQ%2FYrurYAycq5xJjsR7ZdTmhfgptjEAVRZQ2nIefSUHM%2BN3d0ghxnK%2FySyWATsD%2Blr5j1RDFw0B6XZbhPOo%2FJ9%2FlK53UQr9znZEFvxdJilYsMMh%2BbvqKKDQfFSRMQ6cvVRB3ZMwJ5Eb13I0o600jzaL4ZRs4ONXqTu9T8stnhrq9LS5u9kI0b9ZiyUn7oWzctTc44MGvw7YN87ZIkcsKxkmX%2B1xxveDyM6j3jPJD5CjZtPTkmrX%2FSxbX8kI9FgxjsNmQ8jnMSzr400JeWCasBmnKB32%2FkivwG2163rkkeib6BcG8MvLSXshYzRtFYcudlc2gEchyo5dz%2BR7QuUJNKCMMn8yMMGOqUB8%2B2ZRyFFtRmdHXxd3dH%2FAbmoi%2Bn5Riiiy2Ig57xcCg2dxpQtlUFKWB0cC0qEJpAJnhzghTZ%2Bh4BjPj5CQfYS7AysPiyqJDSF%2Fb267YtDjYsD9K4QYjP7DiowS%2F67lpSUKlQmOeLPpvUZIAX0Q4IJT3DP51IkQoE%2Bo6OTmrZXAFk5tGVJlowl7PWVD6j%2BGxQl44feoQruKaTV9G1dajQUHt1%2FQdki&X-Amz-Signature=6dfc6d9b3a8ae4f8301ee2d9664fff5f445dfc533eb2ff245ebf70bb78605b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS377QL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6CxEZ5FWbtdpekc1JG%2FL0OPjwGJXzHDKdiS1aN6V%2F2wIgXtENKs1530f7w9Y0qqc4D1vPk4nojQ943gr3r2qQDssqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfVSNctbCjQZA9wUircAwP8MLGohpnWC39UFlhHcYJmFqPxzvK9xyD%2FERt9wZi7K9sInRfR2O%2FbgzAVRFJGly05VZjufrspAgdfUrqE43qcnpRIcVqpCGyZ%2BcVAHAIoVlkP3ltBheLSuZXBdPOf2ZtuqJqLMaYqj24FPRt5MC95lkUtFdSdQyAVLoKm2jyL3dHpSQqWuKrts7MFGr9PnnIuE8fdVi4OHYSWtQvYpxV17CKpHbJwWtZK0a2h3bi%2F03tGvNk0rpRgLJOyTKYfMSI52kjGIpiFaJBnjKKFUExDyelIm9CPmRZhhDNQ%2FYrurYAycq5xJjsR7ZdTmhfgptjEAVRZQ2nIefSUHM%2BN3d0ghxnK%2FySyWATsD%2Blr5j1RDFw0B6XZbhPOo%2FJ9%2FlK53UQr9znZEFvxdJilYsMMh%2BbvqKKDQfFSRMQ6cvVRB3ZMwJ5Eb13I0o600jzaL4ZRs4ONXqTu9T8stnhrq9LS5u9kI0b9ZiyUn7oWzctTc44MGvw7YN87ZIkcsKxkmX%2B1xxveDyM6j3jPJD5CjZtPTkmrX%2FSxbX8kI9FgxjsNmQ8jnMSzr400JeWCasBmnKB32%2FkivwG2163rkkeib6BcG8MvLSXshYzRtFYcudlc2gEchyo5dz%2BR7QuUJNKCMMn8yMMGOqUB8%2B2ZRyFFtRmdHXxd3dH%2FAbmoi%2Bn5Riiiy2Ig57xcCg2dxpQtlUFKWB0cC0qEJpAJnhzghTZ%2Bh4BjPj5CQfYS7AysPiyqJDSF%2Fb267YtDjYsD9K4QYjP7DiowS%2F67lpSUKlQmOeLPpvUZIAX0Q4IJT3DP51IkQoE%2Bo6OTmrZXAFk5tGVJlowl7PWVD6j%2BGxQl44feoQruKaTV9G1dajQUHt1%2FQdki&X-Amz-Signature=1eef0309ad9a33afb8350ba039cabd6885e429d66d848ee62b731feed40ce1ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS377QL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6CxEZ5FWbtdpekc1JG%2FL0OPjwGJXzHDKdiS1aN6V%2F2wIgXtENKs1530f7w9Y0qqc4D1vPk4nojQ943gr3r2qQDssqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfVSNctbCjQZA9wUircAwP8MLGohpnWC39UFlhHcYJmFqPxzvK9xyD%2FERt9wZi7K9sInRfR2O%2FbgzAVRFJGly05VZjufrspAgdfUrqE43qcnpRIcVqpCGyZ%2BcVAHAIoVlkP3ltBheLSuZXBdPOf2ZtuqJqLMaYqj24FPRt5MC95lkUtFdSdQyAVLoKm2jyL3dHpSQqWuKrts7MFGr9PnnIuE8fdVi4OHYSWtQvYpxV17CKpHbJwWtZK0a2h3bi%2F03tGvNk0rpRgLJOyTKYfMSI52kjGIpiFaJBnjKKFUExDyelIm9CPmRZhhDNQ%2FYrurYAycq5xJjsR7ZdTmhfgptjEAVRZQ2nIefSUHM%2BN3d0ghxnK%2FySyWATsD%2Blr5j1RDFw0B6XZbhPOo%2FJ9%2FlK53UQr9znZEFvxdJilYsMMh%2BbvqKKDQfFSRMQ6cvVRB3ZMwJ5Eb13I0o600jzaL4ZRs4ONXqTu9T8stnhrq9LS5u9kI0b9ZiyUn7oWzctTc44MGvw7YN87ZIkcsKxkmX%2B1xxveDyM6j3jPJD5CjZtPTkmrX%2FSxbX8kI9FgxjsNmQ8jnMSzr400JeWCasBmnKB32%2FkivwG2163rkkeib6BcG8MvLSXshYzRtFYcudlc2gEchyo5dz%2BR7QuUJNKCMMn8yMMGOqUB8%2B2ZRyFFtRmdHXxd3dH%2FAbmoi%2Bn5Riiiy2Ig57xcCg2dxpQtlUFKWB0cC0qEJpAJnhzghTZ%2Bh4BjPj5CQfYS7AysPiyqJDSF%2Fb267YtDjYsD9K4QYjP7DiowS%2F67lpSUKlQmOeLPpvUZIAX0Q4IJT3DP51IkQoE%2Bo6OTmrZXAFk5tGVJlowl7PWVD6j%2BGxQl44feoQruKaTV9G1dajQUHt1%2FQdki&X-Amz-Signature=ca8da371b2e66cbf3b91eeefaaa851c12e39130d66aee798b2b1e29ea4b2644e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS377QL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6CxEZ5FWbtdpekc1JG%2FL0OPjwGJXzHDKdiS1aN6V%2F2wIgXtENKs1530f7w9Y0qqc4D1vPk4nojQ943gr3r2qQDssqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfVSNctbCjQZA9wUircAwP8MLGohpnWC39UFlhHcYJmFqPxzvK9xyD%2FERt9wZi7K9sInRfR2O%2FbgzAVRFJGly05VZjufrspAgdfUrqE43qcnpRIcVqpCGyZ%2BcVAHAIoVlkP3ltBheLSuZXBdPOf2ZtuqJqLMaYqj24FPRt5MC95lkUtFdSdQyAVLoKm2jyL3dHpSQqWuKrts7MFGr9PnnIuE8fdVi4OHYSWtQvYpxV17CKpHbJwWtZK0a2h3bi%2F03tGvNk0rpRgLJOyTKYfMSI52kjGIpiFaJBnjKKFUExDyelIm9CPmRZhhDNQ%2FYrurYAycq5xJjsR7ZdTmhfgptjEAVRZQ2nIefSUHM%2BN3d0ghxnK%2FySyWATsD%2Blr5j1RDFw0B6XZbhPOo%2FJ9%2FlK53UQr9znZEFvxdJilYsMMh%2BbvqKKDQfFSRMQ6cvVRB3ZMwJ5Eb13I0o600jzaL4ZRs4ONXqTu9T8stnhrq9LS5u9kI0b9ZiyUn7oWzctTc44MGvw7YN87ZIkcsKxkmX%2B1xxveDyM6j3jPJD5CjZtPTkmrX%2FSxbX8kI9FgxjsNmQ8jnMSzr400JeWCasBmnKB32%2FkivwG2163rkkeib6BcG8MvLSXshYzRtFYcudlc2gEchyo5dz%2BR7QuUJNKCMMn8yMMGOqUB8%2B2ZRyFFtRmdHXxd3dH%2FAbmoi%2Bn5Riiiy2Ig57xcCg2dxpQtlUFKWB0cC0qEJpAJnhzghTZ%2Bh4BjPj5CQfYS7AysPiyqJDSF%2Fb267YtDjYsD9K4QYjP7DiowS%2F67lpSUKlQmOeLPpvUZIAX0Q4IJT3DP51IkQoE%2Bo6OTmrZXAFk5tGVJlowl7PWVD6j%2BGxQl44feoQruKaTV9G1dajQUHt1%2FQdki&X-Amz-Signature=1e0b017042cc674b9114bc5c0634ba94856bb32b9b38bb00d43f9042847539da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
