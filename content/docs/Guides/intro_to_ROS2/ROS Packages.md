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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53DIVBA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3F84Vu%2BSKLSaOKD83jS3VveMic%2BCl26zAuF4P9IUhnAIhAOoo0bXM8lRXQGtQl4LefgfUjzW%2BI0V3T8KcoGPl3lXPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzoEZ8KZA2DToDxIq3ANtVBGW%2FqP5fSr6gOVn6uN%2FYIvjz7q0jvXRFGtwriuICoyx6v%2B0lYHbVvqRC6bzSrfW0oEBoP62Fc4Q8mdKFczbj%2FvNZRlq78GI8WcQq2dxvTNWdNWurwtYt2AFGqawnhhgSIWKPXNa%2F06zei6pX37v3iStUlK88Ch04YfvwRWB3p89gEp64AcfGciDqon5F437w80X72naWbo8L1%2BxoUedtmKG%2BSBAT34vqxvOeqTp8KyOB1gjROf6WfPSvss8DiMXIu7cSLh4%2BYY2fBOED4MmdeRt%2Ba%2BF6Y7iJJqAISrOplEYb5pL4ZrQh%2FqSDxZFK46onqP8Qp5cUuAGkBXJvrBf1H8TVCDqRe%2B%2FmRxxe%2FH1lUfN%2FE8vWacSpdloDF%2B2zfhpKwm5XozuFvZesBcsf2VQDRXfrrlXBtPX40uw%2FiCICJTIEI6QYC8sK605%2F0NmiRC3KCm30h9KEymLX460PJRgyF7TnCJ8k8s%2Fmgrph%2FFRD2rht9nazmkPvrNdNlkV4tmRTbMwe59Ym0SqlBYpa3KM6w4Ay940oO1r%2F%2FzS55OAEyOIb47NqzOqybRiu%2F4tYEYI8SVdD0L139iF7Vl%2BiDcnAM2xY4KD7zzi8mpqdPqfHyXnBQ%2BfF%2BiZYnkExTC%2Fp7TDBjqkARWHoMI97si2tqAiQxme6CmTA6AKU1ie%2BXnOTpsMWABxZ1ijMV2hVd5GflSslrSv7dOYhZUzIbcdBVUl9t7s4sFIalTgSv%2FqqOykaJLvGhyaCKoFS3Xua%2FeNWhLynEc8enTkN%2BcseTh%2Bl%2Fevc4jIEaEB2fhVKwCfCWS9wLegdjMbcA79UZ1C0WP30PD%2BDYbFXocXWufJ9uzDeiZpA1FKGyQmvAz0&X-Amz-Signature=2f2a67387be9d5a45d4b9cce853b0b550fea50b6f9b01d933d1baf5a465da946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53DIVBA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3F84Vu%2BSKLSaOKD83jS3VveMic%2BCl26zAuF4P9IUhnAIhAOoo0bXM8lRXQGtQl4LefgfUjzW%2BI0V3T8KcoGPl3lXPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzoEZ8KZA2DToDxIq3ANtVBGW%2FqP5fSr6gOVn6uN%2FYIvjz7q0jvXRFGtwriuICoyx6v%2B0lYHbVvqRC6bzSrfW0oEBoP62Fc4Q8mdKFczbj%2FvNZRlq78GI8WcQq2dxvTNWdNWurwtYt2AFGqawnhhgSIWKPXNa%2F06zei6pX37v3iStUlK88Ch04YfvwRWB3p89gEp64AcfGciDqon5F437w80X72naWbo8L1%2BxoUedtmKG%2BSBAT34vqxvOeqTp8KyOB1gjROf6WfPSvss8DiMXIu7cSLh4%2BYY2fBOED4MmdeRt%2Ba%2BF6Y7iJJqAISrOplEYb5pL4ZrQh%2FqSDxZFK46onqP8Qp5cUuAGkBXJvrBf1H8TVCDqRe%2B%2FmRxxe%2FH1lUfN%2FE8vWacSpdloDF%2B2zfhpKwm5XozuFvZesBcsf2VQDRXfrrlXBtPX40uw%2FiCICJTIEI6QYC8sK605%2F0NmiRC3KCm30h9KEymLX460PJRgyF7TnCJ8k8s%2Fmgrph%2FFRD2rht9nazmkPvrNdNlkV4tmRTbMwe59Ym0SqlBYpa3KM6w4Ay940oO1r%2F%2FzS55OAEyOIb47NqzOqybRiu%2F4tYEYI8SVdD0L139iF7Vl%2BiDcnAM2xY4KD7zzi8mpqdPqfHyXnBQ%2BfF%2BiZYnkExTC%2Fp7TDBjqkARWHoMI97si2tqAiQxme6CmTA6AKU1ie%2BXnOTpsMWABxZ1ijMV2hVd5GflSslrSv7dOYhZUzIbcdBVUl9t7s4sFIalTgSv%2FqqOykaJLvGhyaCKoFS3Xua%2FeNWhLynEc8enTkN%2BcseTh%2Bl%2Fevc4jIEaEB2fhVKwCfCWS9wLegdjMbcA79UZ1C0WP30PD%2BDYbFXocXWufJ9uzDeiZpA1FKGyQmvAz0&X-Amz-Signature=40a34d436d08ab18f0e263cd0928cd489ade9e0e3db5d1c92e95c2287b382231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53DIVBA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3F84Vu%2BSKLSaOKD83jS3VveMic%2BCl26zAuF4P9IUhnAIhAOoo0bXM8lRXQGtQl4LefgfUjzW%2BI0V3T8KcoGPl3lXPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzoEZ8KZA2DToDxIq3ANtVBGW%2FqP5fSr6gOVn6uN%2FYIvjz7q0jvXRFGtwriuICoyx6v%2B0lYHbVvqRC6bzSrfW0oEBoP62Fc4Q8mdKFczbj%2FvNZRlq78GI8WcQq2dxvTNWdNWurwtYt2AFGqawnhhgSIWKPXNa%2F06zei6pX37v3iStUlK88Ch04YfvwRWB3p89gEp64AcfGciDqon5F437w80X72naWbo8L1%2BxoUedtmKG%2BSBAT34vqxvOeqTp8KyOB1gjROf6WfPSvss8DiMXIu7cSLh4%2BYY2fBOED4MmdeRt%2Ba%2BF6Y7iJJqAISrOplEYb5pL4ZrQh%2FqSDxZFK46onqP8Qp5cUuAGkBXJvrBf1H8TVCDqRe%2B%2FmRxxe%2FH1lUfN%2FE8vWacSpdloDF%2B2zfhpKwm5XozuFvZesBcsf2VQDRXfrrlXBtPX40uw%2FiCICJTIEI6QYC8sK605%2F0NmiRC3KCm30h9KEymLX460PJRgyF7TnCJ8k8s%2Fmgrph%2FFRD2rht9nazmkPvrNdNlkV4tmRTbMwe59Ym0SqlBYpa3KM6w4Ay940oO1r%2F%2FzS55OAEyOIb47NqzOqybRiu%2F4tYEYI8SVdD0L139iF7Vl%2BiDcnAM2xY4KD7zzi8mpqdPqfHyXnBQ%2BfF%2BiZYnkExTC%2Fp7TDBjqkARWHoMI97si2tqAiQxme6CmTA6AKU1ie%2BXnOTpsMWABxZ1ijMV2hVd5GflSslrSv7dOYhZUzIbcdBVUl9t7s4sFIalTgSv%2FqqOykaJLvGhyaCKoFS3Xua%2FeNWhLynEc8enTkN%2BcseTh%2Bl%2Fevc4jIEaEB2fhVKwCfCWS9wLegdjMbcA79UZ1C0WP30PD%2BDYbFXocXWufJ9uzDeiZpA1FKGyQmvAz0&X-Amz-Signature=0f3a1a407861d57fa29f860d9e19cbf751374394b2b2c1df0c838a97d2997d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53DIVBA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3F84Vu%2BSKLSaOKD83jS3VveMic%2BCl26zAuF4P9IUhnAIhAOoo0bXM8lRXQGtQl4LefgfUjzW%2BI0V3T8KcoGPl3lXPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzoEZ8KZA2DToDxIq3ANtVBGW%2FqP5fSr6gOVn6uN%2FYIvjz7q0jvXRFGtwriuICoyx6v%2B0lYHbVvqRC6bzSrfW0oEBoP62Fc4Q8mdKFczbj%2FvNZRlq78GI8WcQq2dxvTNWdNWurwtYt2AFGqawnhhgSIWKPXNa%2F06zei6pX37v3iStUlK88Ch04YfvwRWB3p89gEp64AcfGciDqon5F437w80X72naWbo8L1%2BxoUedtmKG%2BSBAT34vqxvOeqTp8KyOB1gjROf6WfPSvss8DiMXIu7cSLh4%2BYY2fBOED4MmdeRt%2Ba%2BF6Y7iJJqAISrOplEYb5pL4ZrQh%2FqSDxZFK46onqP8Qp5cUuAGkBXJvrBf1H8TVCDqRe%2B%2FmRxxe%2FH1lUfN%2FE8vWacSpdloDF%2B2zfhpKwm5XozuFvZesBcsf2VQDRXfrrlXBtPX40uw%2FiCICJTIEI6QYC8sK605%2F0NmiRC3KCm30h9KEymLX460PJRgyF7TnCJ8k8s%2Fmgrph%2FFRD2rht9nazmkPvrNdNlkV4tmRTbMwe59Ym0SqlBYpa3KM6w4Ay940oO1r%2F%2FzS55OAEyOIb47NqzOqybRiu%2F4tYEYI8SVdD0L139iF7Vl%2BiDcnAM2xY4KD7zzi8mpqdPqfHyXnBQ%2BfF%2BiZYnkExTC%2Fp7TDBjqkARWHoMI97si2tqAiQxme6CmTA6AKU1ie%2BXnOTpsMWABxZ1ijMV2hVd5GflSslrSv7dOYhZUzIbcdBVUl9t7s4sFIalTgSv%2FqqOykaJLvGhyaCKoFS3Xua%2FeNWhLynEc8enTkN%2BcseTh%2Bl%2Fevc4jIEaEB2fhVKwCfCWS9wLegdjMbcA79UZ1C0WP30PD%2BDYbFXocXWufJ9uzDeiZpA1FKGyQmvAz0&X-Amz-Signature=a3e40a04edea66b1fd9a90544254f2311d8f7c44270ba5afac9d2279cb851572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53DIVBA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3F84Vu%2BSKLSaOKD83jS3VveMic%2BCl26zAuF4P9IUhnAIhAOoo0bXM8lRXQGtQl4LefgfUjzW%2BI0V3T8KcoGPl3lXPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzoEZ8KZA2DToDxIq3ANtVBGW%2FqP5fSr6gOVn6uN%2FYIvjz7q0jvXRFGtwriuICoyx6v%2B0lYHbVvqRC6bzSrfW0oEBoP62Fc4Q8mdKFczbj%2FvNZRlq78GI8WcQq2dxvTNWdNWurwtYt2AFGqawnhhgSIWKPXNa%2F06zei6pX37v3iStUlK88Ch04YfvwRWB3p89gEp64AcfGciDqon5F437w80X72naWbo8L1%2BxoUedtmKG%2BSBAT34vqxvOeqTp8KyOB1gjROf6WfPSvss8DiMXIu7cSLh4%2BYY2fBOED4MmdeRt%2Ba%2BF6Y7iJJqAISrOplEYb5pL4ZrQh%2FqSDxZFK46onqP8Qp5cUuAGkBXJvrBf1H8TVCDqRe%2B%2FmRxxe%2FH1lUfN%2FE8vWacSpdloDF%2B2zfhpKwm5XozuFvZesBcsf2VQDRXfrrlXBtPX40uw%2FiCICJTIEI6QYC8sK605%2F0NmiRC3KCm30h9KEymLX460PJRgyF7TnCJ8k8s%2Fmgrph%2FFRD2rht9nazmkPvrNdNlkV4tmRTbMwe59Ym0SqlBYpa3KM6w4Ay940oO1r%2F%2FzS55OAEyOIb47NqzOqybRiu%2F4tYEYI8SVdD0L139iF7Vl%2BiDcnAM2xY4KD7zzi8mpqdPqfHyXnBQ%2BfF%2BiZYnkExTC%2Fp7TDBjqkARWHoMI97si2tqAiQxme6CmTA6AKU1ie%2BXnOTpsMWABxZ1ijMV2hVd5GflSslrSv7dOYhZUzIbcdBVUl9t7s4sFIalTgSv%2FqqOykaJLvGhyaCKoFS3Xua%2FeNWhLynEc8enTkN%2BcseTh%2Bl%2Fevc4jIEaEB2fhVKwCfCWS9wLegdjMbcA79UZ1C0WP30PD%2BDYbFXocXWufJ9uzDeiZpA1FKGyQmvAz0&X-Amz-Signature=a96677788fcc06a049bd76e37e149a112108384646dc529e55c34c65e6325785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53DIVBA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3F84Vu%2BSKLSaOKD83jS3VveMic%2BCl26zAuF4P9IUhnAIhAOoo0bXM8lRXQGtQl4LefgfUjzW%2BI0V3T8KcoGPl3lXPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzoEZ8KZA2DToDxIq3ANtVBGW%2FqP5fSr6gOVn6uN%2FYIvjz7q0jvXRFGtwriuICoyx6v%2B0lYHbVvqRC6bzSrfW0oEBoP62Fc4Q8mdKFczbj%2FvNZRlq78GI8WcQq2dxvTNWdNWurwtYt2AFGqawnhhgSIWKPXNa%2F06zei6pX37v3iStUlK88Ch04YfvwRWB3p89gEp64AcfGciDqon5F437w80X72naWbo8L1%2BxoUedtmKG%2BSBAT34vqxvOeqTp8KyOB1gjROf6WfPSvss8DiMXIu7cSLh4%2BYY2fBOED4MmdeRt%2Ba%2BF6Y7iJJqAISrOplEYb5pL4ZrQh%2FqSDxZFK46onqP8Qp5cUuAGkBXJvrBf1H8TVCDqRe%2B%2FmRxxe%2FH1lUfN%2FE8vWacSpdloDF%2B2zfhpKwm5XozuFvZesBcsf2VQDRXfrrlXBtPX40uw%2FiCICJTIEI6QYC8sK605%2F0NmiRC3KCm30h9KEymLX460PJRgyF7TnCJ8k8s%2Fmgrph%2FFRD2rht9nazmkPvrNdNlkV4tmRTbMwe59Ym0SqlBYpa3KM6w4Ay940oO1r%2F%2FzS55OAEyOIb47NqzOqybRiu%2F4tYEYI8SVdD0L139iF7Vl%2BiDcnAM2xY4KD7zzi8mpqdPqfHyXnBQ%2BfF%2BiZYnkExTC%2Fp7TDBjqkARWHoMI97si2tqAiQxme6CmTA6AKU1ie%2BXnOTpsMWABxZ1ijMV2hVd5GflSslrSv7dOYhZUzIbcdBVUl9t7s4sFIalTgSv%2FqqOykaJLvGhyaCKoFS3Xua%2FeNWhLynEc8enTkN%2BcseTh%2Bl%2Fevc4jIEaEB2fhVKwCfCWS9wLegdjMbcA79UZ1C0WP30PD%2BDYbFXocXWufJ9uzDeiZpA1FKGyQmvAz0&X-Amz-Signature=86e5a3c68adecaa24e02f482917f70c329f18d24469738c42baa6de698391162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53DIVBA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3F84Vu%2BSKLSaOKD83jS3VveMic%2BCl26zAuF4P9IUhnAIhAOoo0bXM8lRXQGtQl4LefgfUjzW%2BI0V3T8KcoGPl3lXPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzoEZ8KZA2DToDxIq3ANtVBGW%2FqP5fSr6gOVn6uN%2FYIvjz7q0jvXRFGtwriuICoyx6v%2B0lYHbVvqRC6bzSrfW0oEBoP62Fc4Q8mdKFczbj%2FvNZRlq78GI8WcQq2dxvTNWdNWurwtYt2AFGqawnhhgSIWKPXNa%2F06zei6pX37v3iStUlK88Ch04YfvwRWB3p89gEp64AcfGciDqon5F437w80X72naWbo8L1%2BxoUedtmKG%2BSBAT34vqxvOeqTp8KyOB1gjROf6WfPSvss8DiMXIu7cSLh4%2BYY2fBOED4MmdeRt%2Ba%2BF6Y7iJJqAISrOplEYb5pL4ZrQh%2FqSDxZFK46onqP8Qp5cUuAGkBXJvrBf1H8TVCDqRe%2B%2FmRxxe%2FH1lUfN%2FE8vWacSpdloDF%2B2zfhpKwm5XozuFvZesBcsf2VQDRXfrrlXBtPX40uw%2FiCICJTIEI6QYC8sK605%2F0NmiRC3KCm30h9KEymLX460PJRgyF7TnCJ8k8s%2Fmgrph%2FFRD2rht9nazmkPvrNdNlkV4tmRTbMwe59Ym0SqlBYpa3KM6w4Ay940oO1r%2F%2FzS55OAEyOIb47NqzOqybRiu%2F4tYEYI8SVdD0L139iF7Vl%2BiDcnAM2xY4KD7zzi8mpqdPqfHyXnBQ%2BfF%2BiZYnkExTC%2Fp7TDBjqkARWHoMI97si2tqAiQxme6CmTA6AKU1ie%2BXnOTpsMWABxZ1ijMV2hVd5GflSslrSv7dOYhZUzIbcdBVUl9t7s4sFIalTgSv%2FqqOykaJLvGhyaCKoFS3Xua%2FeNWhLynEc8enTkN%2BcseTh%2Bl%2Fevc4jIEaEB2fhVKwCfCWS9wLegdjMbcA79UZ1C0WP30PD%2BDYbFXocXWufJ9uzDeiZpA1FKGyQmvAz0&X-Amz-Signature=f24bd8fdd4350aac4da4b9f05aac09f0d0a6260abefff5a39051c9859c8269e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
