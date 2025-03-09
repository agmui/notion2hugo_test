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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7RMRIW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC5wSOWmhnFd8B8Gp8ETGevTHY8SL6RTPFxQ1UKIy0LgAiBhFqjcxniRo1TLV4AOQ9hfoe8PWZOGN%2FrvfgsL9HnlPyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMrgJjTWUifHdbEDlKKtwDSOfZkN%2FAYuE0ZVsoDc3InJ5XopR3fU3o3mobUbmPGz7AXQP1HEMZPfnO7dSYCk1yLtJ7q6uY0WNSfPn95qVPfHEf3xPuoGXrgCV%2Fp6LV0r%2B1pkQHkZt%2BZFzD04veBX3hwkM7zqN7O8xdxvl1u2QBY7oYMzurzbDPtgYDUPEa%2BNsAF4ggUhI%2B4FBiSEbxyVZ4PybP8RxnUk%2FmCztJFRv0qFV7RSACWdv%2BuYaIV6qZUYuQ2FIAOFOmmnzdFeHrIgIGhATrCms1j4RlHKg8khfTUHtlg9sE8SAv5j7i18o1fYSm1vIUBrlg5Zb5Iu%2FbOOpBvArC%2FQfnJ0OhdHORXtPBioHz0zHrCsJGkSdQ6lAnp0mY84%2FOsvITJNjKPoz%2BLJfTYweOXK0QRmzUnzdMmq71tmD9K7nJMIvbQwhcGSLzYXnudlB6FKx0mtNqyO1UZNlFKlZPNQNKNdjdzzf%2FcBjjM5mN05tC5AormW%2BrzAsy7T7lTwYisQxQBHXJ8LeWNp%2BS171ZK1xDIAaVPwIi1VxSrGSt%2BH3xL%2BRYaubE%2F5R0uX%2BGHYeEaL54z4IUqz7hdB3IlmFexnu0J7tCTfJ7cAEGa33IJqxEAKs55sa19yNUsfx7MRiu3HSclAFVCUUw2umzvgY6pgEUQGNwNn20FplPPitwCMnsJ745mKPBXxT3gZXZH26jTCI1%2BYGnrDlpjKG%2Bs8xMUHYonDcMErOrZXHWf50e2GGWHTz6ceFAEw58SElAS4%2FMmchqp4yrdxxlPUaU1tvynfk6i%2FIGjlko6tKNm5BdGzWOQOyzmT2t%2BkJMcHwoXZM9TtxMr0QdUnpxVMipgcukx3ITdETH1ZFMiUCo8UVDXr%2Fz65wcEcgo&X-Amz-Signature=cb9c2e45fa41dd9ec022fcb97a50d27f1b00749170bbf08d7a42297a2cc04ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7RMRIW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC5wSOWmhnFd8B8Gp8ETGevTHY8SL6RTPFxQ1UKIy0LgAiBhFqjcxniRo1TLV4AOQ9hfoe8PWZOGN%2FrvfgsL9HnlPyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMrgJjTWUifHdbEDlKKtwDSOfZkN%2FAYuE0ZVsoDc3InJ5XopR3fU3o3mobUbmPGz7AXQP1HEMZPfnO7dSYCk1yLtJ7q6uY0WNSfPn95qVPfHEf3xPuoGXrgCV%2Fp6LV0r%2B1pkQHkZt%2BZFzD04veBX3hwkM7zqN7O8xdxvl1u2QBY7oYMzurzbDPtgYDUPEa%2BNsAF4ggUhI%2B4FBiSEbxyVZ4PybP8RxnUk%2FmCztJFRv0qFV7RSACWdv%2BuYaIV6qZUYuQ2FIAOFOmmnzdFeHrIgIGhATrCms1j4RlHKg8khfTUHtlg9sE8SAv5j7i18o1fYSm1vIUBrlg5Zb5Iu%2FbOOpBvArC%2FQfnJ0OhdHORXtPBioHz0zHrCsJGkSdQ6lAnp0mY84%2FOsvITJNjKPoz%2BLJfTYweOXK0QRmzUnzdMmq71tmD9K7nJMIvbQwhcGSLzYXnudlB6FKx0mtNqyO1UZNlFKlZPNQNKNdjdzzf%2FcBjjM5mN05tC5AormW%2BrzAsy7T7lTwYisQxQBHXJ8LeWNp%2BS171ZK1xDIAaVPwIi1VxSrGSt%2BH3xL%2BRYaubE%2F5R0uX%2BGHYeEaL54z4IUqz7hdB3IlmFexnu0J7tCTfJ7cAEGa33IJqxEAKs55sa19yNUsfx7MRiu3HSclAFVCUUw2umzvgY6pgEUQGNwNn20FplPPitwCMnsJ745mKPBXxT3gZXZH26jTCI1%2BYGnrDlpjKG%2Bs8xMUHYonDcMErOrZXHWf50e2GGWHTz6ceFAEw58SElAS4%2FMmchqp4yrdxxlPUaU1tvynfk6i%2FIGjlko6tKNm5BdGzWOQOyzmT2t%2BkJMcHwoXZM9TtxMr0QdUnpxVMipgcukx3ITdETH1ZFMiUCo8UVDXr%2Fz65wcEcgo&X-Amz-Signature=8bb503f6dd47b64ee7b3f8c814c67d4f5d3d50d154907b76daed0e7f026c5b47&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7RMRIW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC5wSOWmhnFd8B8Gp8ETGevTHY8SL6RTPFxQ1UKIy0LgAiBhFqjcxniRo1TLV4AOQ9hfoe8PWZOGN%2FrvfgsL9HnlPyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMrgJjTWUifHdbEDlKKtwDSOfZkN%2FAYuE0ZVsoDc3InJ5XopR3fU3o3mobUbmPGz7AXQP1HEMZPfnO7dSYCk1yLtJ7q6uY0WNSfPn95qVPfHEf3xPuoGXrgCV%2Fp6LV0r%2B1pkQHkZt%2BZFzD04veBX3hwkM7zqN7O8xdxvl1u2QBY7oYMzurzbDPtgYDUPEa%2BNsAF4ggUhI%2B4FBiSEbxyVZ4PybP8RxnUk%2FmCztJFRv0qFV7RSACWdv%2BuYaIV6qZUYuQ2FIAOFOmmnzdFeHrIgIGhATrCms1j4RlHKg8khfTUHtlg9sE8SAv5j7i18o1fYSm1vIUBrlg5Zb5Iu%2FbOOpBvArC%2FQfnJ0OhdHORXtPBioHz0zHrCsJGkSdQ6lAnp0mY84%2FOsvITJNjKPoz%2BLJfTYweOXK0QRmzUnzdMmq71tmD9K7nJMIvbQwhcGSLzYXnudlB6FKx0mtNqyO1UZNlFKlZPNQNKNdjdzzf%2FcBjjM5mN05tC5AormW%2BrzAsy7T7lTwYisQxQBHXJ8LeWNp%2BS171ZK1xDIAaVPwIi1VxSrGSt%2BH3xL%2BRYaubE%2F5R0uX%2BGHYeEaL54z4IUqz7hdB3IlmFexnu0J7tCTfJ7cAEGa33IJqxEAKs55sa19yNUsfx7MRiu3HSclAFVCUUw2umzvgY6pgEUQGNwNn20FplPPitwCMnsJ745mKPBXxT3gZXZH26jTCI1%2BYGnrDlpjKG%2Bs8xMUHYonDcMErOrZXHWf50e2GGWHTz6ceFAEw58SElAS4%2FMmchqp4yrdxxlPUaU1tvynfk6i%2FIGjlko6tKNm5BdGzWOQOyzmT2t%2BkJMcHwoXZM9TtxMr0QdUnpxVMipgcukx3ITdETH1ZFMiUCo8UVDXr%2Fz65wcEcgo&X-Amz-Signature=02b3f6023aa4472d6a6d594d0addd277482c5ec0d61f785facd6c24f037e694a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7RMRIW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC5wSOWmhnFd8B8Gp8ETGevTHY8SL6RTPFxQ1UKIy0LgAiBhFqjcxniRo1TLV4AOQ9hfoe8PWZOGN%2FrvfgsL9HnlPyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMrgJjTWUifHdbEDlKKtwDSOfZkN%2FAYuE0ZVsoDc3InJ5XopR3fU3o3mobUbmPGz7AXQP1HEMZPfnO7dSYCk1yLtJ7q6uY0WNSfPn95qVPfHEf3xPuoGXrgCV%2Fp6LV0r%2B1pkQHkZt%2BZFzD04veBX3hwkM7zqN7O8xdxvl1u2QBY7oYMzurzbDPtgYDUPEa%2BNsAF4ggUhI%2B4FBiSEbxyVZ4PybP8RxnUk%2FmCztJFRv0qFV7RSACWdv%2BuYaIV6qZUYuQ2FIAOFOmmnzdFeHrIgIGhATrCms1j4RlHKg8khfTUHtlg9sE8SAv5j7i18o1fYSm1vIUBrlg5Zb5Iu%2FbOOpBvArC%2FQfnJ0OhdHORXtPBioHz0zHrCsJGkSdQ6lAnp0mY84%2FOsvITJNjKPoz%2BLJfTYweOXK0QRmzUnzdMmq71tmD9K7nJMIvbQwhcGSLzYXnudlB6FKx0mtNqyO1UZNlFKlZPNQNKNdjdzzf%2FcBjjM5mN05tC5AormW%2BrzAsy7T7lTwYisQxQBHXJ8LeWNp%2BS171ZK1xDIAaVPwIi1VxSrGSt%2BH3xL%2BRYaubE%2F5R0uX%2BGHYeEaL54z4IUqz7hdB3IlmFexnu0J7tCTfJ7cAEGa33IJqxEAKs55sa19yNUsfx7MRiu3HSclAFVCUUw2umzvgY6pgEUQGNwNn20FplPPitwCMnsJ745mKPBXxT3gZXZH26jTCI1%2BYGnrDlpjKG%2Bs8xMUHYonDcMErOrZXHWf50e2GGWHTz6ceFAEw58SElAS4%2FMmchqp4yrdxxlPUaU1tvynfk6i%2FIGjlko6tKNm5BdGzWOQOyzmT2t%2BkJMcHwoXZM9TtxMr0QdUnpxVMipgcukx3ITdETH1ZFMiUCo8UVDXr%2Fz65wcEcgo&X-Amz-Signature=a01d0004a3354dc38ea7eef1db414ee083249ff8e626f4a80a5a6857db985da1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7RMRIW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC5wSOWmhnFd8B8Gp8ETGevTHY8SL6RTPFxQ1UKIy0LgAiBhFqjcxniRo1TLV4AOQ9hfoe8PWZOGN%2FrvfgsL9HnlPyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMrgJjTWUifHdbEDlKKtwDSOfZkN%2FAYuE0ZVsoDc3InJ5XopR3fU3o3mobUbmPGz7AXQP1HEMZPfnO7dSYCk1yLtJ7q6uY0WNSfPn95qVPfHEf3xPuoGXrgCV%2Fp6LV0r%2B1pkQHkZt%2BZFzD04veBX3hwkM7zqN7O8xdxvl1u2QBY7oYMzurzbDPtgYDUPEa%2BNsAF4ggUhI%2B4FBiSEbxyVZ4PybP8RxnUk%2FmCztJFRv0qFV7RSACWdv%2BuYaIV6qZUYuQ2FIAOFOmmnzdFeHrIgIGhATrCms1j4RlHKg8khfTUHtlg9sE8SAv5j7i18o1fYSm1vIUBrlg5Zb5Iu%2FbOOpBvArC%2FQfnJ0OhdHORXtPBioHz0zHrCsJGkSdQ6lAnp0mY84%2FOsvITJNjKPoz%2BLJfTYweOXK0QRmzUnzdMmq71tmD9K7nJMIvbQwhcGSLzYXnudlB6FKx0mtNqyO1UZNlFKlZPNQNKNdjdzzf%2FcBjjM5mN05tC5AormW%2BrzAsy7T7lTwYisQxQBHXJ8LeWNp%2BS171ZK1xDIAaVPwIi1VxSrGSt%2BH3xL%2BRYaubE%2F5R0uX%2BGHYeEaL54z4IUqz7hdB3IlmFexnu0J7tCTfJ7cAEGa33IJqxEAKs55sa19yNUsfx7MRiu3HSclAFVCUUw2umzvgY6pgEUQGNwNn20FplPPitwCMnsJ745mKPBXxT3gZXZH26jTCI1%2BYGnrDlpjKG%2Bs8xMUHYonDcMErOrZXHWf50e2GGWHTz6ceFAEw58SElAS4%2FMmchqp4yrdxxlPUaU1tvynfk6i%2FIGjlko6tKNm5BdGzWOQOyzmT2t%2BkJMcHwoXZM9TtxMr0QdUnpxVMipgcukx3ITdETH1ZFMiUCo8UVDXr%2Fz65wcEcgo&X-Amz-Signature=a4b4eece19b636bc647562da0ec128e81cb5b84750c1cc4572983d10c824adfe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7RMRIW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC5wSOWmhnFd8B8Gp8ETGevTHY8SL6RTPFxQ1UKIy0LgAiBhFqjcxniRo1TLV4AOQ9hfoe8PWZOGN%2FrvfgsL9HnlPyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMrgJjTWUifHdbEDlKKtwDSOfZkN%2FAYuE0ZVsoDc3InJ5XopR3fU3o3mobUbmPGz7AXQP1HEMZPfnO7dSYCk1yLtJ7q6uY0WNSfPn95qVPfHEf3xPuoGXrgCV%2Fp6LV0r%2B1pkQHkZt%2BZFzD04veBX3hwkM7zqN7O8xdxvl1u2QBY7oYMzurzbDPtgYDUPEa%2BNsAF4ggUhI%2B4FBiSEbxyVZ4PybP8RxnUk%2FmCztJFRv0qFV7RSACWdv%2BuYaIV6qZUYuQ2FIAOFOmmnzdFeHrIgIGhATrCms1j4RlHKg8khfTUHtlg9sE8SAv5j7i18o1fYSm1vIUBrlg5Zb5Iu%2FbOOpBvArC%2FQfnJ0OhdHORXtPBioHz0zHrCsJGkSdQ6lAnp0mY84%2FOsvITJNjKPoz%2BLJfTYweOXK0QRmzUnzdMmq71tmD9K7nJMIvbQwhcGSLzYXnudlB6FKx0mtNqyO1UZNlFKlZPNQNKNdjdzzf%2FcBjjM5mN05tC5AormW%2BrzAsy7T7lTwYisQxQBHXJ8LeWNp%2BS171ZK1xDIAaVPwIi1VxSrGSt%2BH3xL%2BRYaubE%2F5R0uX%2BGHYeEaL54z4IUqz7hdB3IlmFexnu0J7tCTfJ7cAEGa33IJqxEAKs55sa19yNUsfx7MRiu3HSclAFVCUUw2umzvgY6pgEUQGNwNn20FplPPitwCMnsJ745mKPBXxT3gZXZH26jTCI1%2BYGnrDlpjKG%2Bs8xMUHYonDcMErOrZXHWf50e2GGWHTz6ceFAEw58SElAS4%2FMmchqp4yrdxxlPUaU1tvynfk6i%2FIGjlko6tKNm5BdGzWOQOyzmT2t%2BkJMcHwoXZM9TtxMr0QdUnpxVMipgcukx3ITdETH1ZFMiUCo8UVDXr%2Fz65wcEcgo&X-Amz-Signature=6fc1f4174a895daf99cf27afa1940fb739b23b0dc5a3ac89cc8a171bc379e40e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7RMRIW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC5wSOWmhnFd8B8Gp8ETGevTHY8SL6RTPFxQ1UKIy0LgAiBhFqjcxniRo1TLV4AOQ9hfoe8PWZOGN%2FrvfgsL9HnlPyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMrgJjTWUifHdbEDlKKtwDSOfZkN%2FAYuE0ZVsoDc3InJ5XopR3fU3o3mobUbmPGz7AXQP1HEMZPfnO7dSYCk1yLtJ7q6uY0WNSfPn95qVPfHEf3xPuoGXrgCV%2Fp6LV0r%2B1pkQHkZt%2BZFzD04veBX3hwkM7zqN7O8xdxvl1u2QBY7oYMzurzbDPtgYDUPEa%2BNsAF4ggUhI%2B4FBiSEbxyVZ4PybP8RxnUk%2FmCztJFRv0qFV7RSACWdv%2BuYaIV6qZUYuQ2FIAOFOmmnzdFeHrIgIGhATrCms1j4RlHKg8khfTUHtlg9sE8SAv5j7i18o1fYSm1vIUBrlg5Zb5Iu%2FbOOpBvArC%2FQfnJ0OhdHORXtPBioHz0zHrCsJGkSdQ6lAnp0mY84%2FOsvITJNjKPoz%2BLJfTYweOXK0QRmzUnzdMmq71tmD9K7nJMIvbQwhcGSLzYXnudlB6FKx0mtNqyO1UZNlFKlZPNQNKNdjdzzf%2FcBjjM5mN05tC5AormW%2BrzAsy7T7lTwYisQxQBHXJ8LeWNp%2BS171ZK1xDIAaVPwIi1VxSrGSt%2BH3xL%2BRYaubE%2F5R0uX%2BGHYeEaL54z4IUqz7hdB3IlmFexnu0J7tCTfJ7cAEGa33IJqxEAKs55sa19yNUsfx7MRiu3HSclAFVCUUw2umzvgY6pgEUQGNwNn20FplPPitwCMnsJ745mKPBXxT3gZXZH26jTCI1%2BYGnrDlpjKG%2Bs8xMUHYonDcMErOrZXHWf50e2GGWHTz6ceFAEw58SElAS4%2FMmchqp4yrdxxlPUaU1tvynfk6i%2FIGjlko6tKNm5BdGzWOQOyzmT2t%2BkJMcHwoXZM9TtxMr0QdUnpxVMipgcukx3ITdETH1ZFMiUCo8UVDXr%2Fz65wcEcgo&X-Amz-Signature=11ca52f07212465c4151d14c0e6dc99d4aeecfbb5275588f7a914b31568a19c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
