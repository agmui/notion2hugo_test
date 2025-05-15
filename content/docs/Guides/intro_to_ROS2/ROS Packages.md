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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQNT3CM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAxTZJPRFH21vaw18bV8WV7zUBYFbjD71akKm29zzfwAAiEAicCTu2CuDxnWX9mBXwW%2FMl18NDApM0dO6Yvf5Pm6K4Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDBOJrT1O2S4nLKJiSrcAwk1bWPsiNCNN0YTkS8%2BTcBWXPd37Xgw%2F%2BHxTdBdDeJ1UfCKEv%2BlKhd0yCeRghiWGmUXEVDCS3j7ohrR%2FW42q4K3dMeaENm%2BalM0p%2BRp0Usji4pTQp29sd%2BV1EE5X%2BoaPcgmfvbLIBH3ei2%2BdfBFeDW7eV4AvwvPeoE9ghjxuW053zw11uQLyM9H0BldCUfGl0N16x4XDrU7f0GiX3Y77PlNMuVaGj9n5rMrNNe5nSLR2jARhDAEKibryS%2BSvAr0%2BUQkGudWRJQV%2FCOcdBmKMfww4NsCgHjHAdG7hKea5Exfn%2FB7MykNDiAETvwqFYWzYFBc1so11zaM6%2Bke6C%2Fcw7yNu45uiAG8uEWQExTfv9rALtinZzVyeruSezLIQW9Hvsn2VmZL7BkVvKFdU3BbDhemaOMH7wMk72WMRi9dR8qxMxgWMzt%2FZ94RdeauaDc%2BVLUum5qamcDIfTDO14yEefMpvxlBI8jLArIH9cC0u4u5Qp4TUV0q3U2NKzLPoSqxwIZcHv8VzPcTybYPBA43nAPQ5lnVQn6UlRRd4kgQ1CqBWuuDZUlSK0rLejIy4wtH1u7ZqwgiNZuhwwsLB2YIRXqfl2Xl0vIKdisEwViAUj06NAQsunnO2njVvAhjML%2FEmMEGOqUB02rZj745cL1XWVeOqX55iMxGA1N5O2nFbEsDIaSueiZbEF0HzvuK%2Bb81pRV8hJFOFRJXapu5BMWzxwBgcKLigA2KGKw7iNFSu7cI5%2BEezKJHpud%2FDOrn9xxjuY67E7OBs%2F1dLaOWSncAOv%2B5rnbRCfliXZB5ZR0XWu%2Bx851r7s8Td5uQC6sRspGkgWML6yljCk7SCa%2BR0p%2BDiuSchn2WyGOODmcB&X-Amz-Signature=66ff353ec78e4d5cb2f2170213211b57299c5bdcedbd923c7582f4212c725873&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQNT3CM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAxTZJPRFH21vaw18bV8WV7zUBYFbjD71akKm29zzfwAAiEAicCTu2CuDxnWX9mBXwW%2FMl18NDApM0dO6Yvf5Pm6K4Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDBOJrT1O2S4nLKJiSrcAwk1bWPsiNCNN0YTkS8%2BTcBWXPd37Xgw%2F%2BHxTdBdDeJ1UfCKEv%2BlKhd0yCeRghiWGmUXEVDCS3j7ohrR%2FW42q4K3dMeaENm%2BalM0p%2BRp0Usji4pTQp29sd%2BV1EE5X%2BoaPcgmfvbLIBH3ei2%2BdfBFeDW7eV4AvwvPeoE9ghjxuW053zw11uQLyM9H0BldCUfGl0N16x4XDrU7f0GiX3Y77PlNMuVaGj9n5rMrNNe5nSLR2jARhDAEKibryS%2BSvAr0%2BUQkGudWRJQV%2FCOcdBmKMfww4NsCgHjHAdG7hKea5Exfn%2FB7MykNDiAETvwqFYWzYFBc1so11zaM6%2Bke6C%2Fcw7yNu45uiAG8uEWQExTfv9rALtinZzVyeruSezLIQW9Hvsn2VmZL7BkVvKFdU3BbDhemaOMH7wMk72WMRi9dR8qxMxgWMzt%2FZ94RdeauaDc%2BVLUum5qamcDIfTDO14yEefMpvxlBI8jLArIH9cC0u4u5Qp4TUV0q3U2NKzLPoSqxwIZcHv8VzPcTybYPBA43nAPQ5lnVQn6UlRRd4kgQ1CqBWuuDZUlSK0rLejIy4wtH1u7ZqwgiNZuhwwsLB2YIRXqfl2Xl0vIKdisEwViAUj06NAQsunnO2njVvAhjML%2FEmMEGOqUB02rZj745cL1XWVeOqX55iMxGA1N5O2nFbEsDIaSueiZbEF0HzvuK%2Bb81pRV8hJFOFRJXapu5BMWzxwBgcKLigA2KGKw7iNFSu7cI5%2BEezKJHpud%2FDOrn9xxjuY67E7OBs%2F1dLaOWSncAOv%2B5rnbRCfliXZB5ZR0XWu%2Bx851r7s8Td5uQC6sRspGkgWML6yljCk7SCa%2BR0p%2BDiuSchn2WyGOODmcB&X-Amz-Signature=6acece7ea9a386f018293c2a44726ffdde8325d310d946dd0187671012a5a37e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQNT3CM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAxTZJPRFH21vaw18bV8WV7zUBYFbjD71akKm29zzfwAAiEAicCTu2CuDxnWX9mBXwW%2FMl18NDApM0dO6Yvf5Pm6K4Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDBOJrT1O2S4nLKJiSrcAwk1bWPsiNCNN0YTkS8%2BTcBWXPd37Xgw%2F%2BHxTdBdDeJ1UfCKEv%2BlKhd0yCeRghiWGmUXEVDCS3j7ohrR%2FW42q4K3dMeaENm%2BalM0p%2BRp0Usji4pTQp29sd%2BV1EE5X%2BoaPcgmfvbLIBH3ei2%2BdfBFeDW7eV4AvwvPeoE9ghjxuW053zw11uQLyM9H0BldCUfGl0N16x4XDrU7f0GiX3Y77PlNMuVaGj9n5rMrNNe5nSLR2jARhDAEKibryS%2BSvAr0%2BUQkGudWRJQV%2FCOcdBmKMfww4NsCgHjHAdG7hKea5Exfn%2FB7MykNDiAETvwqFYWzYFBc1so11zaM6%2Bke6C%2Fcw7yNu45uiAG8uEWQExTfv9rALtinZzVyeruSezLIQW9Hvsn2VmZL7BkVvKFdU3BbDhemaOMH7wMk72WMRi9dR8qxMxgWMzt%2FZ94RdeauaDc%2BVLUum5qamcDIfTDO14yEefMpvxlBI8jLArIH9cC0u4u5Qp4TUV0q3U2NKzLPoSqxwIZcHv8VzPcTybYPBA43nAPQ5lnVQn6UlRRd4kgQ1CqBWuuDZUlSK0rLejIy4wtH1u7ZqwgiNZuhwwsLB2YIRXqfl2Xl0vIKdisEwViAUj06NAQsunnO2njVvAhjML%2FEmMEGOqUB02rZj745cL1XWVeOqX55iMxGA1N5O2nFbEsDIaSueiZbEF0HzvuK%2Bb81pRV8hJFOFRJXapu5BMWzxwBgcKLigA2KGKw7iNFSu7cI5%2BEezKJHpud%2FDOrn9xxjuY67E7OBs%2F1dLaOWSncAOv%2B5rnbRCfliXZB5ZR0XWu%2Bx851r7s8Td5uQC6sRspGkgWML6yljCk7SCa%2BR0p%2BDiuSchn2WyGOODmcB&X-Amz-Signature=44babb92a23393af380338cc65d1178caa82c7cae1c9b2927ef71cf22e90c6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQNT3CM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAxTZJPRFH21vaw18bV8WV7zUBYFbjD71akKm29zzfwAAiEAicCTu2CuDxnWX9mBXwW%2FMl18NDApM0dO6Yvf5Pm6K4Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDBOJrT1O2S4nLKJiSrcAwk1bWPsiNCNN0YTkS8%2BTcBWXPd37Xgw%2F%2BHxTdBdDeJ1UfCKEv%2BlKhd0yCeRghiWGmUXEVDCS3j7ohrR%2FW42q4K3dMeaENm%2BalM0p%2BRp0Usji4pTQp29sd%2BV1EE5X%2BoaPcgmfvbLIBH3ei2%2BdfBFeDW7eV4AvwvPeoE9ghjxuW053zw11uQLyM9H0BldCUfGl0N16x4XDrU7f0GiX3Y77PlNMuVaGj9n5rMrNNe5nSLR2jARhDAEKibryS%2BSvAr0%2BUQkGudWRJQV%2FCOcdBmKMfww4NsCgHjHAdG7hKea5Exfn%2FB7MykNDiAETvwqFYWzYFBc1so11zaM6%2Bke6C%2Fcw7yNu45uiAG8uEWQExTfv9rALtinZzVyeruSezLIQW9Hvsn2VmZL7BkVvKFdU3BbDhemaOMH7wMk72WMRi9dR8qxMxgWMzt%2FZ94RdeauaDc%2BVLUum5qamcDIfTDO14yEefMpvxlBI8jLArIH9cC0u4u5Qp4TUV0q3U2NKzLPoSqxwIZcHv8VzPcTybYPBA43nAPQ5lnVQn6UlRRd4kgQ1CqBWuuDZUlSK0rLejIy4wtH1u7ZqwgiNZuhwwsLB2YIRXqfl2Xl0vIKdisEwViAUj06NAQsunnO2njVvAhjML%2FEmMEGOqUB02rZj745cL1XWVeOqX55iMxGA1N5O2nFbEsDIaSueiZbEF0HzvuK%2Bb81pRV8hJFOFRJXapu5BMWzxwBgcKLigA2KGKw7iNFSu7cI5%2BEezKJHpud%2FDOrn9xxjuY67E7OBs%2F1dLaOWSncAOv%2B5rnbRCfliXZB5ZR0XWu%2Bx851r7s8Td5uQC6sRspGkgWML6yljCk7SCa%2BR0p%2BDiuSchn2WyGOODmcB&X-Amz-Signature=3ad76ecdd325e3d7ca8c081d77a1d61f0f7f911283cff7f6517349fe0c625930&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQNT3CM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAxTZJPRFH21vaw18bV8WV7zUBYFbjD71akKm29zzfwAAiEAicCTu2CuDxnWX9mBXwW%2FMl18NDApM0dO6Yvf5Pm6K4Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDBOJrT1O2S4nLKJiSrcAwk1bWPsiNCNN0YTkS8%2BTcBWXPd37Xgw%2F%2BHxTdBdDeJ1UfCKEv%2BlKhd0yCeRghiWGmUXEVDCS3j7ohrR%2FW42q4K3dMeaENm%2BalM0p%2BRp0Usji4pTQp29sd%2BV1EE5X%2BoaPcgmfvbLIBH3ei2%2BdfBFeDW7eV4AvwvPeoE9ghjxuW053zw11uQLyM9H0BldCUfGl0N16x4XDrU7f0GiX3Y77PlNMuVaGj9n5rMrNNe5nSLR2jARhDAEKibryS%2BSvAr0%2BUQkGudWRJQV%2FCOcdBmKMfww4NsCgHjHAdG7hKea5Exfn%2FB7MykNDiAETvwqFYWzYFBc1so11zaM6%2Bke6C%2Fcw7yNu45uiAG8uEWQExTfv9rALtinZzVyeruSezLIQW9Hvsn2VmZL7BkVvKFdU3BbDhemaOMH7wMk72WMRi9dR8qxMxgWMzt%2FZ94RdeauaDc%2BVLUum5qamcDIfTDO14yEefMpvxlBI8jLArIH9cC0u4u5Qp4TUV0q3U2NKzLPoSqxwIZcHv8VzPcTybYPBA43nAPQ5lnVQn6UlRRd4kgQ1CqBWuuDZUlSK0rLejIy4wtH1u7ZqwgiNZuhwwsLB2YIRXqfl2Xl0vIKdisEwViAUj06NAQsunnO2njVvAhjML%2FEmMEGOqUB02rZj745cL1XWVeOqX55iMxGA1N5O2nFbEsDIaSueiZbEF0HzvuK%2Bb81pRV8hJFOFRJXapu5BMWzxwBgcKLigA2KGKw7iNFSu7cI5%2BEezKJHpud%2FDOrn9xxjuY67E7OBs%2F1dLaOWSncAOv%2B5rnbRCfliXZB5ZR0XWu%2Bx851r7s8Td5uQC6sRspGkgWML6yljCk7SCa%2BR0p%2BDiuSchn2WyGOODmcB&X-Amz-Signature=71bd086554484d6165c0410445ce59c0540ba7d4b73c0e9761aea841526356fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQNT3CM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAxTZJPRFH21vaw18bV8WV7zUBYFbjD71akKm29zzfwAAiEAicCTu2CuDxnWX9mBXwW%2FMl18NDApM0dO6Yvf5Pm6K4Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDBOJrT1O2S4nLKJiSrcAwk1bWPsiNCNN0YTkS8%2BTcBWXPd37Xgw%2F%2BHxTdBdDeJ1UfCKEv%2BlKhd0yCeRghiWGmUXEVDCS3j7ohrR%2FW42q4K3dMeaENm%2BalM0p%2BRp0Usji4pTQp29sd%2BV1EE5X%2BoaPcgmfvbLIBH3ei2%2BdfBFeDW7eV4AvwvPeoE9ghjxuW053zw11uQLyM9H0BldCUfGl0N16x4XDrU7f0GiX3Y77PlNMuVaGj9n5rMrNNe5nSLR2jARhDAEKibryS%2BSvAr0%2BUQkGudWRJQV%2FCOcdBmKMfww4NsCgHjHAdG7hKea5Exfn%2FB7MykNDiAETvwqFYWzYFBc1so11zaM6%2Bke6C%2Fcw7yNu45uiAG8uEWQExTfv9rALtinZzVyeruSezLIQW9Hvsn2VmZL7BkVvKFdU3BbDhemaOMH7wMk72WMRi9dR8qxMxgWMzt%2FZ94RdeauaDc%2BVLUum5qamcDIfTDO14yEefMpvxlBI8jLArIH9cC0u4u5Qp4TUV0q3U2NKzLPoSqxwIZcHv8VzPcTybYPBA43nAPQ5lnVQn6UlRRd4kgQ1CqBWuuDZUlSK0rLejIy4wtH1u7ZqwgiNZuhwwsLB2YIRXqfl2Xl0vIKdisEwViAUj06NAQsunnO2njVvAhjML%2FEmMEGOqUB02rZj745cL1XWVeOqX55iMxGA1N5O2nFbEsDIaSueiZbEF0HzvuK%2Bb81pRV8hJFOFRJXapu5BMWzxwBgcKLigA2KGKw7iNFSu7cI5%2BEezKJHpud%2FDOrn9xxjuY67E7OBs%2F1dLaOWSncAOv%2B5rnbRCfliXZB5ZR0XWu%2Bx851r7s8Td5uQC6sRspGkgWML6yljCk7SCa%2BR0p%2BDiuSchn2WyGOODmcB&X-Amz-Signature=d5d0629ee6774d61313e6d0c2a2802209be9e3fff00c8683bf76a070009ca024&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQNT3CM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAxTZJPRFH21vaw18bV8WV7zUBYFbjD71akKm29zzfwAAiEAicCTu2CuDxnWX9mBXwW%2FMl18NDApM0dO6Yvf5Pm6K4Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDBOJrT1O2S4nLKJiSrcAwk1bWPsiNCNN0YTkS8%2BTcBWXPd37Xgw%2F%2BHxTdBdDeJ1UfCKEv%2BlKhd0yCeRghiWGmUXEVDCS3j7ohrR%2FW42q4K3dMeaENm%2BalM0p%2BRp0Usji4pTQp29sd%2BV1EE5X%2BoaPcgmfvbLIBH3ei2%2BdfBFeDW7eV4AvwvPeoE9ghjxuW053zw11uQLyM9H0BldCUfGl0N16x4XDrU7f0GiX3Y77PlNMuVaGj9n5rMrNNe5nSLR2jARhDAEKibryS%2BSvAr0%2BUQkGudWRJQV%2FCOcdBmKMfww4NsCgHjHAdG7hKea5Exfn%2FB7MykNDiAETvwqFYWzYFBc1so11zaM6%2Bke6C%2Fcw7yNu45uiAG8uEWQExTfv9rALtinZzVyeruSezLIQW9Hvsn2VmZL7BkVvKFdU3BbDhemaOMH7wMk72WMRi9dR8qxMxgWMzt%2FZ94RdeauaDc%2BVLUum5qamcDIfTDO14yEefMpvxlBI8jLArIH9cC0u4u5Qp4TUV0q3U2NKzLPoSqxwIZcHv8VzPcTybYPBA43nAPQ5lnVQn6UlRRd4kgQ1CqBWuuDZUlSK0rLejIy4wtH1u7ZqwgiNZuhwwsLB2YIRXqfl2Xl0vIKdisEwViAUj06NAQsunnO2njVvAhjML%2FEmMEGOqUB02rZj745cL1XWVeOqX55iMxGA1N5O2nFbEsDIaSueiZbEF0HzvuK%2Bb81pRV8hJFOFRJXapu5BMWzxwBgcKLigA2KGKw7iNFSu7cI5%2BEezKJHpud%2FDOrn9xxjuY67E7OBs%2F1dLaOWSncAOv%2B5rnbRCfliXZB5ZR0XWu%2Bx851r7s8Td5uQC6sRspGkgWML6yljCk7SCa%2BR0p%2BDiuSchn2WyGOODmcB&X-Amz-Signature=9f78a7f0a8c88985ab117d16f0b84e07bf04d80554cd6598939dbcd287a1226e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
