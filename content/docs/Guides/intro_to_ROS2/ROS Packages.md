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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQKZAU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD2UhwKzpR5WnGl3VOrWaoR8HMbaGfzh67ES5CyTS5EFgIhAKpqbMgu%2Bw%2FMjbeSDRydirpo3pTLv6l6ozutxKqiImmxKv8DCGkQABoMNjM3NDIzMTgzODA1IgyRejr9xe74k1szFUQq3AO52P9Z%2BKDm2As6xIo6X6DgjdBKOtvdszQOLVAmOPk4NnQAVsbsZ0SVP2suJD%2Bpr7SjaF1G0F%2FQVfkwXXJDtq0MP7jU6tKAos9YBVsJVeRVhxJWweZg1Ut6AChj2aqZMDjsfpDJtel9bb2A2AlEyCea75iZl7UjgIWuh1wVnMcKbAZqzf3INw0pfzEdZvji1aTmCNIXkqf6m2EHRnLi%2BVa53Obk9teGivcqUQJ%2BFjuFEsvSACRWXsL0BNq3u4ewwsmcmCjh3FavSv4I0Q8Sm5oedyp3WxCLmQ%2FVOAvmS7bUT2lRvQtqlSQcSJZqI4J27aN4NzoEh1NgQE1Ke9uUHh7BuPax1ja4cufPXAEhJn5tMjIAsdJ2P2Esp7Da5FeAycUfDhgC57R3kYTTLbLjYeS3sAYeZ4C0dFVP27b6o8HUQpOyfMZ9qEotBQQU5mMGGaf4BkrJenkz76kT8m4M0r2EqC99I9nDcpDyvpqowwNCaoZBC4nos4RWE%2FqAV6ZwPxo2v0XB%2Flye0OiOAJWjQznQzeTdftZRHG1smOkHPMYBndvCTPAKMDRD5slaCLawwq5S7jNhJyJLO6L7Zx45NNh65n7gY1AUyZXM4ui1xjKFkrZ%2Fmt%2FFpzhNhmzvBzCslazDBjqkAYkWahVk1TClQZXR%2FCVCi7BnFtxALsb561GAtoh7pMRG5PqaboDXEglhW9oQir2vlVBJA659EbbkOKN9ELXvy%2FhwZyiUs1HeW72iOcKwdixUdHvXwgW%2BQDSx4mZDuD3hmyxsprxP24yxrfJ8fjnrT3%2BnSFFq0dd87fRsgANT6Pntko478exlBcfhH%2BnVOgAm7GrCiGJJRTdv31tN2HVwO3sPLMfr&X-Amz-Signature=94abc0e5652221618a34e2fef2a0c08519f6cea64cf09c30387836efc78866ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQKZAU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD2UhwKzpR5WnGl3VOrWaoR8HMbaGfzh67ES5CyTS5EFgIhAKpqbMgu%2Bw%2FMjbeSDRydirpo3pTLv6l6ozutxKqiImmxKv8DCGkQABoMNjM3NDIzMTgzODA1IgyRejr9xe74k1szFUQq3AO52P9Z%2BKDm2As6xIo6X6DgjdBKOtvdszQOLVAmOPk4NnQAVsbsZ0SVP2suJD%2Bpr7SjaF1G0F%2FQVfkwXXJDtq0MP7jU6tKAos9YBVsJVeRVhxJWweZg1Ut6AChj2aqZMDjsfpDJtel9bb2A2AlEyCea75iZl7UjgIWuh1wVnMcKbAZqzf3INw0pfzEdZvji1aTmCNIXkqf6m2EHRnLi%2BVa53Obk9teGivcqUQJ%2BFjuFEsvSACRWXsL0BNq3u4ewwsmcmCjh3FavSv4I0Q8Sm5oedyp3WxCLmQ%2FVOAvmS7bUT2lRvQtqlSQcSJZqI4J27aN4NzoEh1NgQE1Ke9uUHh7BuPax1ja4cufPXAEhJn5tMjIAsdJ2P2Esp7Da5FeAycUfDhgC57R3kYTTLbLjYeS3sAYeZ4C0dFVP27b6o8HUQpOyfMZ9qEotBQQU5mMGGaf4BkrJenkz76kT8m4M0r2EqC99I9nDcpDyvpqowwNCaoZBC4nos4RWE%2FqAV6ZwPxo2v0XB%2Flye0OiOAJWjQznQzeTdftZRHG1smOkHPMYBndvCTPAKMDRD5slaCLawwq5S7jNhJyJLO6L7Zx45NNh65n7gY1AUyZXM4ui1xjKFkrZ%2Fmt%2FFpzhNhmzvBzCslazDBjqkAYkWahVk1TClQZXR%2FCVCi7BnFtxALsb561GAtoh7pMRG5PqaboDXEglhW9oQir2vlVBJA659EbbkOKN9ELXvy%2FhwZyiUs1HeW72iOcKwdixUdHvXwgW%2BQDSx4mZDuD3hmyxsprxP24yxrfJ8fjnrT3%2BnSFFq0dd87fRsgANT6Pntko478exlBcfhH%2BnVOgAm7GrCiGJJRTdv31tN2HVwO3sPLMfr&X-Amz-Signature=b1194e395de46802ecd05b369a70e58ef0afb3e799ec3bb9076391930465ed9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQKZAU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD2UhwKzpR5WnGl3VOrWaoR8HMbaGfzh67ES5CyTS5EFgIhAKpqbMgu%2Bw%2FMjbeSDRydirpo3pTLv6l6ozutxKqiImmxKv8DCGkQABoMNjM3NDIzMTgzODA1IgyRejr9xe74k1szFUQq3AO52P9Z%2BKDm2As6xIo6X6DgjdBKOtvdszQOLVAmOPk4NnQAVsbsZ0SVP2suJD%2Bpr7SjaF1G0F%2FQVfkwXXJDtq0MP7jU6tKAos9YBVsJVeRVhxJWweZg1Ut6AChj2aqZMDjsfpDJtel9bb2A2AlEyCea75iZl7UjgIWuh1wVnMcKbAZqzf3INw0pfzEdZvji1aTmCNIXkqf6m2EHRnLi%2BVa53Obk9teGivcqUQJ%2BFjuFEsvSACRWXsL0BNq3u4ewwsmcmCjh3FavSv4I0Q8Sm5oedyp3WxCLmQ%2FVOAvmS7bUT2lRvQtqlSQcSJZqI4J27aN4NzoEh1NgQE1Ke9uUHh7BuPax1ja4cufPXAEhJn5tMjIAsdJ2P2Esp7Da5FeAycUfDhgC57R3kYTTLbLjYeS3sAYeZ4C0dFVP27b6o8HUQpOyfMZ9qEotBQQU5mMGGaf4BkrJenkz76kT8m4M0r2EqC99I9nDcpDyvpqowwNCaoZBC4nos4RWE%2FqAV6ZwPxo2v0XB%2Flye0OiOAJWjQznQzeTdftZRHG1smOkHPMYBndvCTPAKMDRD5slaCLawwq5S7jNhJyJLO6L7Zx45NNh65n7gY1AUyZXM4ui1xjKFkrZ%2Fmt%2FFpzhNhmzvBzCslazDBjqkAYkWahVk1TClQZXR%2FCVCi7BnFtxALsb561GAtoh7pMRG5PqaboDXEglhW9oQir2vlVBJA659EbbkOKN9ELXvy%2FhwZyiUs1HeW72iOcKwdixUdHvXwgW%2BQDSx4mZDuD3hmyxsprxP24yxrfJ8fjnrT3%2BnSFFq0dd87fRsgANT6Pntko478exlBcfhH%2BnVOgAm7GrCiGJJRTdv31tN2HVwO3sPLMfr&X-Amz-Signature=72c06dac99f340d23885318f2cb3d2b77d0a985b7cfa336f575e14e281254ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQKZAU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD2UhwKzpR5WnGl3VOrWaoR8HMbaGfzh67ES5CyTS5EFgIhAKpqbMgu%2Bw%2FMjbeSDRydirpo3pTLv6l6ozutxKqiImmxKv8DCGkQABoMNjM3NDIzMTgzODA1IgyRejr9xe74k1szFUQq3AO52P9Z%2BKDm2As6xIo6X6DgjdBKOtvdszQOLVAmOPk4NnQAVsbsZ0SVP2suJD%2Bpr7SjaF1G0F%2FQVfkwXXJDtq0MP7jU6tKAos9YBVsJVeRVhxJWweZg1Ut6AChj2aqZMDjsfpDJtel9bb2A2AlEyCea75iZl7UjgIWuh1wVnMcKbAZqzf3INw0pfzEdZvji1aTmCNIXkqf6m2EHRnLi%2BVa53Obk9teGivcqUQJ%2BFjuFEsvSACRWXsL0BNq3u4ewwsmcmCjh3FavSv4I0Q8Sm5oedyp3WxCLmQ%2FVOAvmS7bUT2lRvQtqlSQcSJZqI4J27aN4NzoEh1NgQE1Ke9uUHh7BuPax1ja4cufPXAEhJn5tMjIAsdJ2P2Esp7Da5FeAycUfDhgC57R3kYTTLbLjYeS3sAYeZ4C0dFVP27b6o8HUQpOyfMZ9qEotBQQU5mMGGaf4BkrJenkz76kT8m4M0r2EqC99I9nDcpDyvpqowwNCaoZBC4nos4RWE%2FqAV6ZwPxo2v0XB%2Flye0OiOAJWjQznQzeTdftZRHG1smOkHPMYBndvCTPAKMDRD5slaCLawwq5S7jNhJyJLO6L7Zx45NNh65n7gY1AUyZXM4ui1xjKFkrZ%2Fmt%2FFpzhNhmzvBzCslazDBjqkAYkWahVk1TClQZXR%2FCVCi7BnFtxALsb561GAtoh7pMRG5PqaboDXEglhW9oQir2vlVBJA659EbbkOKN9ELXvy%2FhwZyiUs1HeW72iOcKwdixUdHvXwgW%2BQDSx4mZDuD3hmyxsprxP24yxrfJ8fjnrT3%2BnSFFq0dd87fRsgANT6Pntko478exlBcfhH%2BnVOgAm7GrCiGJJRTdv31tN2HVwO3sPLMfr&X-Amz-Signature=0cfd7d5901e368faafef8af446db884d54a44ba666431c01f665c020eef9b89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQKZAU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD2UhwKzpR5WnGl3VOrWaoR8HMbaGfzh67ES5CyTS5EFgIhAKpqbMgu%2Bw%2FMjbeSDRydirpo3pTLv6l6ozutxKqiImmxKv8DCGkQABoMNjM3NDIzMTgzODA1IgyRejr9xe74k1szFUQq3AO52P9Z%2BKDm2As6xIo6X6DgjdBKOtvdszQOLVAmOPk4NnQAVsbsZ0SVP2suJD%2Bpr7SjaF1G0F%2FQVfkwXXJDtq0MP7jU6tKAos9YBVsJVeRVhxJWweZg1Ut6AChj2aqZMDjsfpDJtel9bb2A2AlEyCea75iZl7UjgIWuh1wVnMcKbAZqzf3INw0pfzEdZvji1aTmCNIXkqf6m2EHRnLi%2BVa53Obk9teGivcqUQJ%2BFjuFEsvSACRWXsL0BNq3u4ewwsmcmCjh3FavSv4I0Q8Sm5oedyp3WxCLmQ%2FVOAvmS7bUT2lRvQtqlSQcSJZqI4J27aN4NzoEh1NgQE1Ke9uUHh7BuPax1ja4cufPXAEhJn5tMjIAsdJ2P2Esp7Da5FeAycUfDhgC57R3kYTTLbLjYeS3sAYeZ4C0dFVP27b6o8HUQpOyfMZ9qEotBQQU5mMGGaf4BkrJenkz76kT8m4M0r2EqC99I9nDcpDyvpqowwNCaoZBC4nos4RWE%2FqAV6ZwPxo2v0XB%2Flye0OiOAJWjQznQzeTdftZRHG1smOkHPMYBndvCTPAKMDRD5slaCLawwq5S7jNhJyJLO6L7Zx45NNh65n7gY1AUyZXM4ui1xjKFkrZ%2Fmt%2FFpzhNhmzvBzCslazDBjqkAYkWahVk1TClQZXR%2FCVCi7BnFtxALsb561GAtoh7pMRG5PqaboDXEglhW9oQir2vlVBJA659EbbkOKN9ELXvy%2FhwZyiUs1HeW72iOcKwdixUdHvXwgW%2BQDSx4mZDuD3hmyxsprxP24yxrfJ8fjnrT3%2BnSFFq0dd87fRsgANT6Pntko478exlBcfhH%2BnVOgAm7GrCiGJJRTdv31tN2HVwO3sPLMfr&X-Amz-Signature=1eae9ab747cfbe3675a23587d60574ce36b9c9085572fd25b40574c0221a77b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQKZAU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD2UhwKzpR5WnGl3VOrWaoR8HMbaGfzh67ES5CyTS5EFgIhAKpqbMgu%2Bw%2FMjbeSDRydirpo3pTLv6l6ozutxKqiImmxKv8DCGkQABoMNjM3NDIzMTgzODA1IgyRejr9xe74k1szFUQq3AO52P9Z%2BKDm2As6xIo6X6DgjdBKOtvdszQOLVAmOPk4NnQAVsbsZ0SVP2suJD%2Bpr7SjaF1G0F%2FQVfkwXXJDtq0MP7jU6tKAos9YBVsJVeRVhxJWweZg1Ut6AChj2aqZMDjsfpDJtel9bb2A2AlEyCea75iZl7UjgIWuh1wVnMcKbAZqzf3INw0pfzEdZvji1aTmCNIXkqf6m2EHRnLi%2BVa53Obk9teGivcqUQJ%2BFjuFEsvSACRWXsL0BNq3u4ewwsmcmCjh3FavSv4I0Q8Sm5oedyp3WxCLmQ%2FVOAvmS7bUT2lRvQtqlSQcSJZqI4J27aN4NzoEh1NgQE1Ke9uUHh7BuPax1ja4cufPXAEhJn5tMjIAsdJ2P2Esp7Da5FeAycUfDhgC57R3kYTTLbLjYeS3sAYeZ4C0dFVP27b6o8HUQpOyfMZ9qEotBQQU5mMGGaf4BkrJenkz76kT8m4M0r2EqC99I9nDcpDyvpqowwNCaoZBC4nos4RWE%2FqAV6ZwPxo2v0XB%2Flye0OiOAJWjQznQzeTdftZRHG1smOkHPMYBndvCTPAKMDRD5slaCLawwq5S7jNhJyJLO6L7Zx45NNh65n7gY1AUyZXM4ui1xjKFkrZ%2Fmt%2FFpzhNhmzvBzCslazDBjqkAYkWahVk1TClQZXR%2FCVCi7BnFtxALsb561GAtoh7pMRG5PqaboDXEglhW9oQir2vlVBJA659EbbkOKN9ELXvy%2FhwZyiUs1HeW72iOcKwdixUdHvXwgW%2BQDSx4mZDuD3hmyxsprxP24yxrfJ8fjnrT3%2BnSFFq0dd87fRsgANT6Pntko478exlBcfhH%2BnVOgAm7GrCiGJJRTdv31tN2HVwO3sPLMfr&X-Amz-Signature=583203da4882f64f8ed27cc0f83d91c7fc2e1d9d82184a50dbd55246fae71d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQKZAU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD2UhwKzpR5WnGl3VOrWaoR8HMbaGfzh67ES5CyTS5EFgIhAKpqbMgu%2Bw%2FMjbeSDRydirpo3pTLv6l6ozutxKqiImmxKv8DCGkQABoMNjM3NDIzMTgzODA1IgyRejr9xe74k1szFUQq3AO52P9Z%2BKDm2As6xIo6X6DgjdBKOtvdszQOLVAmOPk4NnQAVsbsZ0SVP2suJD%2Bpr7SjaF1G0F%2FQVfkwXXJDtq0MP7jU6tKAos9YBVsJVeRVhxJWweZg1Ut6AChj2aqZMDjsfpDJtel9bb2A2AlEyCea75iZl7UjgIWuh1wVnMcKbAZqzf3INw0pfzEdZvji1aTmCNIXkqf6m2EHRnLi%2BVa53Obk9teGivcqUQJ%2BFjuFEsvSACRWXsL0BNq3u4ewwsmcmCjh3FavSv4I0Q8Sm5oedyp3WxCLmQ%2FVOAvmS7bUT2lRvQtqlSQcSJZqI4J27aN4NzoEh1NgQE1Ke9uUHh7BuPax1ja4cufPXAEhJn5tMjIAsdJ2P2Esp7Da5FeAycUfDhgC57R3kYTTLbLjYeS3sAYeZ4C0dFVP27b6o8HUQpOyfMZ9qEotBQQU5mMGGaf4BkrJenkz76kT8m4M0r2EqC99I9nDcpDyvpqowwNCaoZBC4nos4RWE%2FqAV6ZwPxo2v0XB%2Flye0OiOAJWjQznQzeTdftZRHG1smOkHPMYBndvCTPAKMDRD5slaCLawwq5S7jNhJyJLO6L7Zx45NNh65n7gY1AUyZXM4ui1xjKFkrZ%2Fmt%2FFpzhNhmzvBzCslazDBjqkAYkWahVk1TClQZXR%2FCVCi7BnFtxALsb561GAtoh7pMRG5PqaboDXEglhW9oQir2vlVBJA659EbbkOKN9ELXvy%2FhwZyiUs1HeW72iOcKwdixUdHvXwgW%2BQDSx4mZDuD3hmyxsprxP24yxrfJ8fjnrT3%2BnSFFq0dd87fRsgANT6Pntko478exlBcfhH%2BnVOgAm7GrCiGJJRTdv31tN2HVwO3sPLMfr&X-Amz-Signature=fcec2661d785014ee4c33734e9393271d567179a5532459526aad20d0f8a8a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
