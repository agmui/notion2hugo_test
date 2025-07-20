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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XXBWDP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqf9tgJS%2BKe%2BkJv5boHoC9l8QJdkOinumvRqivfIKHMgIhALnlog7SOnvfEymVb7Z0tZ5%2B9m5MLqtsicvGMB10G0k5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLx2%2F8soCooMPqfuMq3AMI%2Bcruc8nTTxhO%2FlGQ9m%2FHvJD5EuOzSWsrG0EaBmwW7w1pYCAvvDHhQV0yG1R3h1sb7GrVJGh53AUQmKtIr1079At%2Fps7j7ofQ4%2BHTO9zA%2BXR2cYnqYbOMMXLzWS9zrqATCFjQRE4ZqOduvhUU9EhHQiAnOToml8heb%2F2ZiJRu0aw3pIZGuTKr1yGUoSYCsEQv%2BKm5PfP4NPh%2FPKHDYiUIZ9iX48yuUROhlAKeAbiXWDe2m4Y5w9atPcIAJj5jdBI3m1AjOkVVWtFpO6zorNa20viMbxvDKfWAvkp7eNceMMPXncpsc0S%2FLjHdRgQ6Z3a6OjXBLLRrj%2BVAFNfMgwGMxDHkd0SwUFR8UJ1HMjJW%2FM0SbgFfYE1%2BefINgcXHnwShUlW0HHppIA13FQXNl7P%2BKoFfowWvN98sikSgPU3B2EiVtDqmCe5LpaGy%2BYlOfdQcXCEuyDadPuiOWZIC%2Fl6Bn4wh2blRN%2BVK%2BFPJqv%2Fp%2FcfnnSZp27DZPxjvgFpP2hMYFtmCsznlcUfoxm3g9jTgjP8KO4x9d7cCvK9Xkc%2FppWo7vCF1OsM089K2sG09%2BvoTAIpKPQIjDocVnXPT8KktPyj%2BMjtku5TNm3Ss4w9USXQGZKFIr6cvMdb7KjCrt%2FLDBjqkAe740EcX%2F6UFsQHLBkEGDL0inID%2BfFg4Byxik0cjISWJ%2Bwdm3vQ0zquk6FHCVAqwUDOlrcKLcA7YanjSed4SfEmWBzXjYi%2FatQ9lmLfP1xqhQzNXwBZFLJTv2T2pxhUWTHhfSyGgNsSRbyCsN1arrOnJTgQOQ3MIcULVxsZ7VVjCM2%2FhZt8Gfs%2BWJAMwUnn0gpxnxcaZpKLJUW0Cs%2FnrpuvhnpQJ&X-Amz-Signature=f837b153fa77c920b9d724f31757ce74836adcd92ffab2fe3f8bdfb8499c5094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XXBWDP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqf9tgJS%2BKe%2BkJv5boHoC9l8QJdkOinumvRqivfIKHMgIhALnlog7SOnvfEymVb7Z0tZ5%2B9m5MLqtsicvGMB10G0k5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLx2%2F8soCooMPqfuMq3AMI%2Bcruc8nTTxhO%2FlGQ9m%2FHvJD5EuOzSWsrG0EaBmwW7w1pYCAvvDHhQV0yG1R3h1sb7GrVJGh53AUQmKtIr1079At%2Fps7j7ofQ4%2BHTO9zA%2BXR2cYnqYbOMMXLzWS9zrqATCFjQRE4ZqOduvhUU9EhHQiAnOToml8heb%2F2ZiJRu0aw3pIZGuTKr1yGUoSYCsEQv%2BKm5PfP4NPh%2FPKHDYiUIZ9iX48yuUROhlAKeAbiXWDe2m4Y5w9atPcIAJj5jdBI3m1AjOkVVWtFpO6zorNa20viMbxvDKfWAvkp7eNceMMPXncpsc0S%2FLjHdRgQ6Z3a6OjXBLLRrj%2BVAFNfMgwGMxDHkd0SwUFR8UJ1HMjJW%2FM0SbgFfYE1%2BefINgcXHnwShUlW0HHppIA13FQXNl7P%2BKoFfowWvN98sikSgPU3B2EiVtDqmCe5LpaGy%2BYlOfdQcXCEuyDadPuiOWZIC%2Fl6Bn4wh2blRN%2BVK%2BFPJqv%2Fp%2FcfnnSZp27DZPxjvgFpP2hMYFtmCsznlcUfoxm3g9jTgjP8KO4x9d7cCvK9Xkc%2FppWo7vCF1OsM089K2sG09%2BvoTAIpKPQIjDocVnXPT8KktPyj%2BMjtku5TNm3Ss4w9USXQGZKFIr6cvMdb7KjCrt%2FLDBjqkAe740EcX%2F6UFsQHLBkEGDL0inID%2BfFg4Byxik0cjISWJ%2Bwdm3vQ0zquk6FHCVAqwUDOlrcKLcA7YanjSed4SfEmWBzXjYi%2FatQ9lmLfP1xqhQzNXwBZFLJTv2T2pxhUWTHhfSyGgNsSRbyCsN1arrOnJTgQOQ3MIcULVxsZ7VVjCM2%2FhZt8Gfs%2BWJAMwUnn0gpxnxcaZpKLJUW0Cs%2FnrpuvhnpQJ&X-Amz-Signature=1acc6a0f81b6aa8378f7c80543d53b8719adfddeb752a5b8adec4540b7050a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XXBWDP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqf9tgJS%2BKe%2BkJv5boHoC9l8QJdkOinumvRqivfIKHMgIhALnlog7SOnvfEymVb7Z0tZ5%2B9m5MLqtsicvGMB10G0k5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLx2%2F8soCooMPqfuMq3AMI%2Bcruc8nTTxhO%2FlGQ9m%2FHvJD5EuOzSWsrG0EaBmwW7w1pYCAvvDHhQV0yG1R3h1sb7GrVJGh53AUQmKtIr1079At%2Fps7j7ofQ4%2BHTO9zA%2BXR2cYnqYbOMMXLzWS9zrqATCFjQRE4ZqOduvhUU9EhHQiAnOToml8heb%2F2ZiJRu0aw3pIZGuTKr1yGUoSYCsEQv%2BKm5PfP4NPh%2FPKHDYiUIZ9iX48yuUROhlAKeAbiXWDe2m4Y5w9atPcIAJj5jdBI3m1AjOkVVWtFpO6zorNa20viMbxvDKfWAvkp7eNceMMPXncpsc0S%2FLjHdRgQ6Z3a6OjXBLLRrj%2BVAFNfMgwGMxDHkd0SwUFR8UJ1HMjJW%2FM0SbgFfYE1%2BefINgcXHnwShUlW0HHppIA13FQXNl7P%2BKoFfowWvN98sikSgPU3B2EiVtDqmCe5LpaGy%2BYlOfdQcXCEuyDadPuiOWZIC%2Fl6Bn4wh2blRN%2BVK%2BFPJqv%2Fp%2FcfnnSZp27DZPxjvgFpP2hMYFtmCsznlcUfoxm3g9jTgjP8KO4x9d7cCvK9Xkc%2FppWo7vCF1OsM089K2sG09%2BvoTAIpKPQIjDocVnXPT8KktPyj%2BMjtku5TNm3Ss4w9USXQGZKFIr6cvMdb7KjCrt%2FLDBjqkAe740EcX%2F6UFsQHLBkEGDL0inID%2BfFg4Byxik0cjISWJ%2Bwdm3vQ0zquk6FHCVAqwUDOlrcKLcA7YanjSed4SfEmWBzXjYi%2FatQ9lmLfP1xqhQzNXwBZFLJTv2T2pxhUWTHhfSyGgNsSRbyCsN1arrOnJTgQOQ3MIcULVxsZ7VVjCM2%2FhZt8Gfs%2BWJAMwUnn0gpxnxcaZpKLJUW0Cs%2FnrpuvhnpQJ&X-Amz-Signature=cf027912ba8eb95c898f555b6e8b6f925346fccd7785e4f9d720a11bd541a362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XXBWDP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqf9tgJS%2BKe%2BkJv5boHoC9l8QJdkOinumvRqivfIKHMgIhALnlog7SOnvfEymVb7Z0tZ5%2B9m5MLqtsicvGMB10G0k5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLx2%2F8soCooMPqfuMq3AMI%2Bcruc8nTTxhO%2FlGQ9m%2FHvJD5EuOzSWsrG0EaBmwW7w1pYCAvvDHhQV0yG1R3h1sb7GrVJGh53AUQmKtIr1079At%2Fps7j7ofQ4%2BHTO9zA%2BXR2cYnqYbOMMXLzWS9zrqATCFjQRE4ZqOduvhUU9EhHQiAnOToml8heb%2F2ZiJRu0aw3pIZGuTKr1yGUoSYCsEQv%2BKm5PfP4NPh%2FPKHDYiUIZ9iX48yuUROhlAKeAbiXWDe2m4Y5w9atPcIAJj5jdBI3m1AjOkVVWtFpO6zorNa20viMbxvDKfWAvkp7eNceMMPXncpsc0S%2FLjHdRgQ6Z3a6OjXBLLRrj%2BVAFNfMgwGMxDHkd0SwUFR8UJ1HMjJW%2FM0SbgFfYE1%2BefINgcXHnwShUlW0HHppIA13FQXNl7P%2BKoFfowWvN98sikSgPU3B2EiVtDqmCe5LpaGy%2BYlOfdQcXCEuyDadPuiOWZIC%2Fl6Bn4wh2blRN%2BVK%2BFPJqv%2Fp%2FcfnnSZp27DZPxjvgFpP2hMYFtmCsznlcUfoxm3g9jTgjP8KO4x9d7cCvK9Xkc%2FppWo7vCF1OsM089K2sG09%2BvoTAIpKPQIjDocVnXPT8KktPyj%2BMjtku5TNm3Ss4w9USXQGZKFIr6cvMdb7KjCrt%2FLDBjqkAe740EcX%2F6UFsQHLBkEGDL0inID%2BfFg4Byxik0cjISWJ%2Bwdm3vQ0zquk6FHCVAqwUDOlrcKLcA7YanjSed4SfEmWBzXjYi%2FatQ9lmLfP1xqhQzNXwBZFLJTv2T2pxhUWTHhfSyGgNsSRbyCsN1arrOnJTgQOQ3MIcULVxsZ7VVjCM2%2FhZt8Gfs%2BWJAMwUnn0gpxnxcaZpKLJUW0Cs%2FnrpuvhnpQJ&X-Amz-Signature=c8c4155c917ae3dc0c6d16c69ae35421ceec4770175093d44b92d622d21aa2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XXBWDP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqf9tgJS%2BKe%2BkJv5boHoC9l8QJdkOinumvRqivfIKHMgIhALnlog7SOnvfEymVb7Z0tZ5%2B9m5MLqtsicvGMB10G0k5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLx2%2F8soCooMPqfuMq3AMI%2Bcruc8nTTxhO%2FlGQ9m%2FHvJD5EuOzSWsrG0EaBmwW7w1pYCAvvDHhQV0yG1R3h1sb7GrVJGh53AUQmKtIr1079At%2Fps7j7ofQ4%2BHTO9zA%2BXR2cYnqYbOMMXLzWS9zrqATCFjQRE4ZqOduvhUU9EhHQiAnOToml8heb%2F2ZiJRu0aw3pIZGuTKr1yGUoSYCsEQv%2BKm5PfP4NPh%2FPKHDYiUIZ9iX48yuUROhlAKeAbiXWDe2m4Y5w9atPcIAJj5jdBI3m1AjOkVVWtFpO6zorNa20viMbxvDKfWAvkp7eNceMMPXncpsc0S%2FLjHdRgQ6Z3a6OjXBLLRrj%2BVAFNfMgwGMxDHkd0SwUFR8UJ1HMjJW%2FM0SbgFfYE1%2BefINgcXHnwShUlW0HHppIA13FQXNl7P%2BKoFfowWvN98sikSgPU3B2EiVtDqmCe5LpaGy%2BYlOfdQcXCEuyDadPuiOWZIC%2Fl6Bn4wh2blRN%2BVK%2BFPJqv%2Fp%2FcfnnSZp27DZPxjvgFpP2hMYFtmCsznlcUfoxm3g9jTgjP8KO4x9d7cCvK9Xkc%2FppWo7vCF1OsM089K2sG09%2BvoTAIpKPQIjDocVnXPT8KktPyj%2BMjtku5TNm3Ss4w9USXQGZKFIr6cvMdb7KjCrt%2FLDBjqkAe740EcX%2F6UFsQHLBkEGDL0inID%2BfFg4Byxik0cjISWJ%2Bwdm3vQ0zquk6FHCVAqwUDOlrcKLcA7YanjSed4SfEmWBzXjYi%2FatQ9lmLfP1xqhQzNXwBZFLJTv2T2pxhUWTHhfSyGgNsSRbyCsN1arrOnJTgQOQ3MIcULVxsZ7VVjCM2%2FhZt8Gfs%2BWJAMwUnn0gpxnxcaZpKLJUW0Cs%2FnrpuvhnpQJ&X-Amz-Signature=fc7ae0987c2190703ec13c3d929dc1857cdf82ec8b05b62fc0b357337e23e1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XXBWDP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqf9tgJS%2BKe%2BkJv5boHoC9l8QJdkOinumvRqivfIKHMgIhALnlog7SOnvfEymVb7Z0tZ5%2B9m5MLqtsicvGMB10G0k5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLx2%2F8soCooMPqfuMq3AMI%2Bcruc8nTTxhO%2FlGQ9m%2FHvJD5EuOzSWsrG0EaBmwW7w1pYCAvvDHhQV0yG1R3h1sb7GrVJGh53AUQmKtIr1079At%2Fps7j7ofQ4%2BHTO9zA%2BXR2cYnqYbOMMXLzWS9zrqATCFjQRE4ZqOduvhUU9EhHQiAnOToml8heb%2F2ZiJRu0aw3pIZGuTKr1yGUoSYCsEQv%2BKm5PfP4NPh%2FPKHDYiUIZ9iX48yuUROhlAKeAbiXWDe2m4Y5w9atPcIAJj5jdBI3m1AjOkVVWtFpO6zorNa20viMbxvDKfWAvkp7eNceMMPXncpsc0S%2FLjHdRgQ6Z3a6OjXBLLRrj%2BVAFNfMgwGMxDHkd0SwUFR8UJ1HMjJW%2FM0SbgFfYE1%2BefINgcXHnwShUlW0HHppIA13FQXNl7P%2BKoFfowWvN98sikSgPU3B2EiVtDqmCe5LpaGy%2BYlOfdQcXCEuyDadPuiOWZIC%2Fl6Bn4wh2blRN%2BVK%2BFPJqv%2Fp%2FcfnnSZp27DZPxjvgFpP2hMYFtmCsznlcUfoxm3g9jTgjP8KO4x9d7cCvK9Xkc%2FppWo7vCF1OsM089K2sG09%2BvoTAIpKPQIjDocVnXPT8KktPyj%2BMjtku5TNm3Ss4w9USXQGZKFIr6cvMdb7KjCrt%2FLDBjqkAe740EcX%2F6UFsQHLBkEGDL0inID%2BfFg4Byxik0cjISWJ%2Bwdm3vQ0zquk6FHCVAqwUDOlrcKLcA7YanjSed4SfEmWBzXjYi%2FatQ9lmLfP1xqhQzNXwBZFLJTv2T2pxhUWTHhfSyGgNsSRbyCsN1arrOnJTgQOQ3MIcULVxsZ7VVjCM2%2FhZt8Gfs%2BWJAMwUnn0gpxnxcaZpKLJUW0Cs%2FnrpuvhnpQJ&X-Amz-Signature=44a24e16df4a6f3d13963f230e020d5d7834720373955cf66ff7607ab8ca6ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XXBWDP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqf9tgJS%2BKe%2BkJv5boHoC9l8QJdkOinumvRqivfIKHMgIhALnlog7SOnvfEymVb7Z0tZ5%2B9m5MLqtsicvGMB10G0k5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLx2%2F8soCooMPqfuMq3AMI%2Bcruc8nTTxhO%2FlGQ9m%2FHvJD5EuOzSWsrG0EaBmwW7w1pYCAvvDHhQV0yG1R3h1sb7GrVJGh53AUQmKtIr1079At%2Fps7j7ofQ4%2BHTO9zA%2BXR2cYnqYbOMMXLzWS9zrqATCFjQRE4ZqOduvhUU9EhHQiAnOToml8heb%2F2ZiJRu0aw3pIZGuTKr1yGUoSYCsEQv%2BKm5PfP4NPh%2FPKHDYiUIZ9iX48yuUROhlAKeAbiXWDe2m4Y5w9atPcIAJj5jdBI3m1AjOkVVWtFpO6zorNa20viMbxvDKfWAvkp7eNceMMPXncpsc0S%2FLjHdRgQ6Z3a6OjXBLLRrj%2BVAFNfMgwGMxDHkd0SwUFR8UJ1HMjJW%2FM0SbgFfYE1%2BefINgcXHnwShUlW0HHppIA13FQXNl7P%2BKoFfowWvN98sikSgPU3B2EiVtDqmCe5LpaGy%2BYlOfdQcXCEuyDadPuiOWZIC%2Fl6Bn4wh2blRN%2BVK%2BFPJqv%2Fp%2FcfnnSZp27DZPxjvgFpP2hMYFtmCsznlcUfoxm3g9jTgjP8KO4x9d7cCvK9Xkc%2FppWo7vCF1OsM089K2sG09%2BvoTAIpKPQIjDocVnXPT8KktPyj%2BMjtku5TNm3Ss4w9USXQGZKFIr6cvMdb7KjCrt%2FLDBjqkAe740EcX%2F6UFsQHLBkEGDL0inID%2BfFg4Byxik0cjISWJ%2Bwdm3vQ0zquk6FHCVAqwUDOlrcKLcA7YanjSed4SfEmWBzXjYi%2FatQ9lmLfP1xqhQzNXwBZFLJTv2T2pxhUWTHhfSyGgNsSRbyCsN1arrOnJTgQOQ3MIcULVxsZ7VVjCM2%2FhZt8Gfs%2BWJAMwUnn0gpxnxcaZpKLJUW0Cs%2FnrpuvhnpQJ&X-Amz-Signature=6977580b84a13367cfac01116715cdd42a354b11e036cf10b46a199aa157fb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
