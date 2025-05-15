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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AB3XLTI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCDaKIcvFj3lHvmyauOkv58NxfJ%2B6QgOkX6f%2B6xfDLKGAIgdyCUs0fQdarJfQH7SQc8VMv9tu2ztaWfBjWQs%2BarB5cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOiKb4F5iWvbMERQYSrcA8OaY4BLPGXDstuD%2BfE5gqg%2Fk%2FivaCzBzvk0%2FuVVI8VhwsBgmwb%2B4I7AfD2j%2FvqymSqWvYoJd6DQH3%2BC4gb8NzmVj4X54Qh6cmfvAaUhIPILsCsry5NAiGXfkyfXx0xHcm%2BB2455S64SfooI0n6ZehElpDroUhgxuE27hbfB3LNRMTvhKBLcoWOPBKtOJKutnEbxfeMgiHrZ2aBQv7F9H7LFBZ%2FIT5wej%2BbwCvi7GVDnE1I8%2FBBPS8EAg%2FfsGh26FW6cWtZIze4Av9fGs5aRGxEIr3SYmDmlYqfNfOGCRSijUOy9L39u%2FSBhBHRV51Vb%2FBMUJeOXTnt7ZE0J9WzHvW1AUoIeCYrsczJhA8Khl8mY5UmaHAcGXICM5TvCnUAprAPk6ghhtBWUUWfF7zfIvfUM3uT38fTPE0B591fNsnnM5Rk3jbqc%2BFr4wbUGaga2ITWv4w7vQzpU%2FCKtZtOMLiR9oeAGNkqAuJjpq2xRaXsBNW8OdvdbNdO%2FaKOn0eA4L7VAuudhSxQ6rBKOTFhYn9BDn2TvTry6BaUFnd5SmJboFItHqXH0BYGFOq02XNUnrHOG4tBOSMKuINOn7au3QLzq4opjng0BvfuP9XJya7CY0%2BN%2FfQ1A73AhvV4mMKXjmcEGOqUBrFFXTvn7wPTqddTTBoqykydGMfz6cs2Qjir4pdseypEAwEK6ghRM5UJtQjfRcmO8mJEp5%2FlAswCpndMG0crPipdkz0BQ37DOf3D%2FxUU2eAzA7gOf3nFgrF%2B45jeVsFrlNX0%2FwkMKc2Tl9L3AxH%2BWwJOU5oaO6vSsYvji4OjCcg0bqWC90x4x%2FEME708zoBq%2FnfEQmUki2OYCe6MQrgLnvCFeaQIa&X-Amz-Signature=995ad09ce9d9e62efac1053314317cdef2ed598a2d1ef8b1f5be34b2b158c881&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AB3XLTI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCDaKIcvFj3lHvmyauOkv58NxfJ%2B6QgOkX6f%2B6xfDLKGAIgdyCUs0fQdarJfQH7SQc8VMv9tu2ztaWfBjWQs%2BarB5cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOiKb4F5iWvbMERQYSrcA8OaY4BLPGXDstuD%2BfE5gqg%2Fk%2FivaCzBzvk0%2FuVVI8VhwsBgmwb%2B4I7AfD2j%2FvqymSqWvYoJd6DQH3%2BC4gb8NzmVj4X54Qh6cmfvAaUhIPILsCsry5NAiGXfkyfXx0xHcm%2BB2455S64SfooI0n6ZehElpDroUhgxuE27hbfB3LNRMTvhKBLcoWOPBKtOJKutnEbxfeMgiHrZ2aBQv7F9H7LFBZ%2FIT5wej%2BbwCvi7GVDnE1I8%2FBBPS8EAg%2FfsGh26FW6cWtZIze4Av9fGs5aRGxEIr3SYmDmlYqfNfOGCRSijUOy9L39u%2FSBhBHRV51Vb%2FBMUJeOXTnt7ZE0J9WzHvW1AUoIeCYrsczJhA8Khl8mY5UmaHAcGXICM5TvCnUAprAPk6ghhtBWUUWfF7zfIvfUM3uT38fTPE0B591fNsnnM5Rk3jbqc%2BFr4wbUGaga2ITWv4w7vQzpU%2FCKtZtOMLiR9oeAGNkqAuJjpq2xRaXsBNW8OdvdbNdO%2FaKOn0eA4L7VAuudhSxQ6rBKOTFhYn9BDn2TvTry6BaUFnd5SmJboFItHqXH0BYGFOq02XNUnrHOG4tBOSMKuINOn7au3QLzq4opjng0BvfuP9XJya7CY0%2BN%2FfQ1A73AhvV4mMKXjmcEGOqUBrFFXTvn7wPTqddTTBoqykydGMfz6cs2Qjir4pdseypEAwEK6ghRM5UJtQjfRcmO8mJEp5%2FlAswCpndMG0crPipdkz0BQ37DOf3D%2FxUU2eAzA7gOf3nFgrF%2B45jeVsFrlNX0%2FwkMKc2Tl9L3AxH%2BWwJOU5oaO6vSsYvji4OjCcg0bqWC90x4x%2FEME708zoBq%2FnfEQmUki2OYCe6MQrgLnvCFeaQIa&X-Amz-Signature=e739f174c69da4a9581ff7a65adc5cf9eda5545f1ada5906c4114f3b18d6b59c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AB3XLTI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCDaKIcvFj3lHvmyauOkv58NxfJ%2B6QgOkX6f%2B6xfDLKGAIgdyCUs0fQdarJfQH7SQc8VMv9tu2ztaWfBjWQs%2BarB5cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOiKb4F5iWvbMERQYSrcA8OaY4BLPGXDstuD%2BfE5gqg%2Fk%2FivaCzBzvk0%2FuVVI8VhwsBgmwb%2B4I7AfD2j%2FvqymSqWvYoJd6DQH3%2BC4gb8NzmVj4X54Qh6cmfvAaUhIPILsCsry5NAiGXfkyfXx0xHcm%2BB2455S64SfooI0n6ZehElpDroUhgxuE27hbfB3LNRMTvhKBLcoWOPBKtOJKutnEbxfeMgiHrZ2aBQv7F9H7LFBZ%2FIT5wej%2BbwCvi7GVDnE1I8%2FBBPS8EAg%2FfsGh26FW6cWtZIze4Av9fGs5aRGxEIr3SYmDmlYqfNfOGCRSijUOy9L39u%2FSBhBHRV51Vb%2FBMUJeOXTnt7ZE0J9WzHvW1AUoIeCYrsczJhA8Khl8mY5UmaHAcGXICM5TvCnUAprAPk6ghhtBWUUWfF7zfIvfUM3uT38fTPE0B591fNsnnM5Rk3jbqc%2BFr4wbUGaga2ITWv4w7vQzpU%2FCKtZtOMLiR9oeAGNkqAuJjpq2xRaXsBNW8OdvdbNdO%2FaKOn0eA4L7VAuudhSxQ6rBKOTFhYn9BDn2TvTry6BaUFnd5SmJboFItHqXH0BYGFOq02XNUnrHOG4tBOSMKuINOn7au3QLzq4opjng0BvfuP9XJya7CY0%2BN%2FfQ1A73AhvV4mMKXjmcEGOqUBrFFXTvn7wPTqddTTBoqykydGMfz6cs2Qjir4pdseypEAwEK6ghRM5UJtQjfRcmO8mJEp5%2FlAswCpndMG0crPipdkz0BQ37DOf3D%2FxUU2eAzA7gOf3nFgrF%2B45jeVsFrlNX0%2FwkMKc2Tl9L3AxH%2BWwJOU5oaO6vSsYvji4OjCcg0bqWC90x4x%2FEME708zoBq%2FnfEQmUki2OYCe6MQrgLnvCFeaQIa&X-Amz-Signature=55acb869a7f8d79a056a8b18f80b924c70cd39fee16d62144195c3c8117a7fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AB3XLTI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCDaKIcvFj3lHvmyauOkv58NxfJ%2B6QgOkX6f%2B6xfDLKGAIgdyCUs0fQdarJfQH7SQc8VMv9tu2ztaWfBjWQs%2BarB5cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOiKb4F5iWvbMERQYSrcA8OaY4BLPGXDstuD%2BfE5gqg%2Fk%2FivaCzBzvk0%2FuVVI8VhwsBgmwb%2B4I7AfD2j%2FvqymSqWvYoJd6DQH3%2BC4gb8NzmVj4X54Qh6cmfvAaUhIPILsCsry5NAiGXfkyfXx0xHcm%2BB2455S64SfooI0n6ZehElpDroUhgxuE27hbfB3LNRMTvhKBLcoWOPBKtOJKutnEbxfeMgiHrZ2aBQv7F9H7LFBZ%2FIT5wej%2BbwCvi7GVDnE1I8%2FBBPS8EAg%2FfsGh26FW6cWtZIze4Av9fGs5aRGxEIr3SYmDmlYqfNfOGCRSijUOy9L39u%2FSBhBHRV51Vb%2FBMUJeOXTnt7ZE0J9WzHvW1AUoIeCYrsczJhA8Khl8mY5UmaHAcGXICM5TvCnUAprAPk6ghhtBWUUWfF7zfIvfUM3uT38fTPE0B591fNsnnM5Rk3jbqc%2BFr4wbUGaga2ITWv4w7vQzpU%2FCKtZtOMLiR9oeAGNkqAuJjpq2xRaXsBNW8OdvdbNdO%2FaKOn0eA4L7VAuudhSxQ6rBKOTFhYn9BDn2TvTry6BaUFnd5SmJboFItHqXH0BYGFOq02XNUnrHOG4tBOSMKuINOn7au3QLzq4opjng0BvfuP9XJya7CY0%2BN%2FfQ1A73AhvV4mMKXjmcEGOqUBrFFXTvn7wPTqddTTBoqykydGMfz6cs2Qjir4pdseypEAwEK6ghRM5UJtQjfRcmO8mJEp5%2FlAswCpndMG0crPipdkz0BQ37DOf3D%2FxUU2eAzA7gOf3nFgrF%2B45jeVsFrlNX0%2FwkMKc2Tl9L3AxH%2BWwJOU5oaO6vSsYvji4OjCcg0bqWC90x4x%2FEME708zoBq%2FnfEQmUki2OYCe6MQrgLnvCFeaQIa&X-Amz-Signature=8229b9587650b0579bc4ed5ebf9c32991704886ad3361ed411781ba405b38ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AB3XLTI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCDaKIcvFj3lHvmyauOkv58NxfJ%2B6QgOkX6f%2B6xfDLKGAIgdyCUs0fQdarJfQH7SQc8VMv9tu2ztaWfBjWQs%2BarB5cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOiKb4F5iWvbMERQYSrcA8OaY4BLPGXDstuD%2BfE5gqg%2Fk%2FivaCzBzvk0%2FuVVI8VhwsBgmwb%2B4I7AfD2j%2FvqymSqWvYoJd6DQH3%2BC4gb8NzmVj4X54Qh6cmfvAaUhIPILsCsry5NAiGXfkyfXx0xHcm%2BB2455S64SfooI0n6ZehElpDroUhgxuE27hbfB3LNRMTvhKBLcoWOPBKtOJKutnEbxfeMgiHrZ2aBQv7F9H7LFBZ%2FIT5wej%2BbwCvi7GVDnE1I8%2FBBPS8EAg%2FfsGh26FW6cWtZIze4Av9fGs5aRGxEIr3SYmDmlYqfNfOGCRSijUOy9L39u%2FSBhBHRV51Vb%2FBMUJeOXTnt7ZE0J9WzHvW1AUoIeCYrsczJhA8Khl8mY5UmaHAcGXICM5TvCnUAprAPk6ghhtBWUUWfF7zfIvfUM3uT38fTPE0B591fNsnnM5Rk3jbqc%2BFr4wbUGaga2ITWv4w7vQzpU%2FCKtZtOMLiR9oeAGNkqAuJjpq2xRaXsBNW8OdvdbNdO%2FaKOn0eA4L7VAuudhSxQ6rBKOTFhYn9BDn2TvTry6BaUFnd5SmJboFItHqXH0BYGFOq02XNUnrHOG4tBOSMKuINOn7au3QLzq4opjng0BvfuP9XJya7CY0%2BN%2FfQ1A73AhvV4mMKXjmcEGOqUBrFFXTvn7wPTqddTTBoqykydGMfz6cs2Qjir4pdseypEAwEK6ghRM5UJtQjfRcmO8mJEp5%2FlAswCpndMG0crPipdkz0BQ37DOf3D%2FxUU2eAzA7gOf3nFgrF%2B45jeVsFrlNX0%2FwkMKc2Tl9L3AxH%2BWwJOU5oaO6vSsYvji4OjCcg0bqWC90x4x%2FEME708zoBq%2FnfEQmUki2OYCe6MQrgLnvCFeaQIa&X-Amz-Signature=64ad2ebb7d2bd733786f099541d18251397eb52f0b89e3896d1ed0ad89309380&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AB3XLTI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCDaKIcvFj3lHvmyauOkv58NxfJ%2B6QgOkX6f%2B6xfDLKGAIgdyCUs0fQdarJfQH7SQc8VMv9tu2ztaWfBjWQs%2BarB5cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOiKb4F5iWvbMERQYSrcA8OaY4BLPGXDstuD%2BfE5gqg%2Fk%2FivaCzBzvk0%2FuVVI8VhwsBgmwb%2B4I7AfD2j%2FvqymSqWvYoJd6DQH3%2BC4gb8NzmVj4X54Qh6cmfvAaUhIPILsCsry5NAiGXfkyfXx0xHcm%2BB2455S64SfooI0n6ZehElpDroUhgxuE27hbfB3LNRMTvhKBLcoWOPBKtOJKutnEbxfeMgiHrZ2aBQv7F9H7LFBZ%2FIT5wej%2BbwCvi7GVDnE1I8%2FBBPS8EAg%2FfsGh26FW6cWtZIze4Av9fGs5aRGxEIr3SYmDmlYqfNfOGCRSijUOy9L39u%2FSBhBHRV51Vb%2FBMUJeOXTnt7ZE0J9WzHvW1AUoIeCYrsczJhA8Khl8mY5UmaHAcGXICM5TvCnUAprAPk6ghhtBWUUWfF7zfIvfUM3uT38fTPE0B591fNsnnM5Rk3jbqc%2BFr4wbUGaga2ITWv4w7vQzpU%2FCKtZtOMLiR9oeAGNkqAuJjpq2xRaXsBNW8OdvdbNdO%2FaKOn0eA4L7VAuudhSxQ6rBKOTFhYn9BDn2TvTry6BaUFnd5SmJboFItHqXH0BYGFOq02XNUnrHOG4tBOSMKuINOn7au3QLzq4opjng0BvfuP9XJya7CY0%2BN%2FfQ1A73AhvV4mMKXjmcEGOqUBrFFXTvn7wPTqddTTBoqykydGMfz6cs2Qjir4pdseypEAwEK6ghRM5UJtQjfRcmO8mJEp5%2FlAswCpndMG0crPipdkz0BQ37DOf3D%2FxUU2eAzA7gOf3nFgrF%2B45jeVsFrlNX0%2FwkMKc2Tl9L3AxH%2BWwJOU5oaO6vSsYvji4OjCcg0bqWC90x4x%2FEME708zoBq%2FnfEQmUki2OYCe6MQrgLnvCFeaQIa&X-Amz-Signature=1530666e144e401e3918d5109e00d8ab8029ef4566148725b46754199aea99ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AB3XLTI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCDaKIcvFj3lHvmyauOkv58NxfJ%2B6QgOkX6f%2B6xfDLKGAIgdyCUs0fQdarJfQH7SQc8VMv9tu2ztaWfBjWQs%2BarB5cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOiKb4F5iWvbMERQYSrcA8OaY4BLPGXDstuD%2BfE5gqg%2Fk%2FivaCzBzvk0%2FuVVI8VhwsBgmwb%2B4I7AfD2j%2FvqymSqWvYoJd6DQH3%2BC4gb8NzmVj4X54Qh6cmfvAaUhIPILsCsry5NAiGXfkyfXx0xHcm%2BB2455S64SfooI0n6ZehElpDroUhgxuE27hbfB3LNRMTvhKBLcoWOPBKtOJKutnEbxfeMgiHrZ2aBQv7F9H7LFBZ%2FIT5wej%2BbwCvi7GVDnE1I8%2FBBPS8EAg%2FfsGh26FW6cWtZIze4Av9fGs5aRGxEIr3SYmDmlYqfNfOGCRSijUOy9L39u%2FSBhBHRV51Vb%2FBMUJeOXTnt7ZE0J9WzHvW1AUoIeCYrsczJhA8Khl8mY5UmaHAcGXICM5TvCnUAprAPk6ghhtBWUUWfF7zfIvfUM3uT38fTPE0B591fNsnnM5Rk3jbqc%2BFr4wbUGaga2ITWv4w7vQzpU%2FCKtZtOMLiR9oeAGNkqAuJjpq2xRaXsBNW8OdvdbNdO%2FaKOn0eA4L7VAuudhSxQ6rBKOTFhYn9BDn2TvTry6BaUFnd5SmJboFItHqXH0BYGFOq02XNUnrHOG4tBOSMKuINOn7au3QLzq4opjng0BvfuP9XJya7CY0%2BN%2FfQ1A73AhvV4mMKXjmcEGOqUBrFFXTvn7wPTqddTTBoqykydGMfz6cs2Qjir4pdseypEAwEK6ghRM5UJtQjfRcmO8mJEp5%2FlAswCpndMG0crPipdkz0BQ37DOf3D%2FxUU2eAzA7gOf3nFgrF%2B45jeVsFrlNX0%2FwkMKc2Tl9L3AxH%2BWwJOU5oaO6vSsYvji4OjCcg0bqWC90x4x%2FEME708zoBq%2FnfEQmUki2OYCe6MQrgLnvCFeaQIa&X-Amz-Signature=43601c89d1011847cba5912ef967e72c59083550b2eea67c57b01ac9a6ec258d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
