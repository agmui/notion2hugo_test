---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YSCPCF%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCoCle1u187Ui%2FWNzYSMWil9iM%2B%2B8pAeNJ5kvmWCn7vLwIhAOeaSl5zgDDd850cq1Njlkji7BQGC4oiU4zGyBii3e0WKv8DCCsQABoMNjM3NDIzMTgzODA1Igx4WzHsMegcBebnEFkq3AM%2BpYyzQoc4UC2RV8n90oJccqNE5xnwYqZccCUn%2BqmrGeC1Nqv1i%2FD8uCA%2BcvpXhaEZzLpjyYyf8i81w5ayb2VRaf%2FZOdEX8sIVD3v0MhM5BiqZj09f%2F%2BGuqV1vyo7POMbiOIaRhXg9%2Bcq4ADLmqO945br%2FweRttWGj7ZJ2NCLOITMeNiPM7YyVpmfMXzhAHp5ArPoxqqn0Bg1uD1ARyIologmJekXH0jqrgaDliVn1Z4XOf6wYTkGjNRpkYNTaye%2FQibyMc1cPuyfaK0TomqELe%2BEzhkm7mF8fTOc%2Bp1Z2U6eS%2Ftxr2K4NKM%2FoS1EjLTSmf6p3cfsJ6qyign49fYJQO5Y8sGjUYE%2FYxPaWdE9FUhqScZ9xL%2F6uuibzP6gdEziawaMEEDkMKF8tu152ky8jjVhZBuLCRb6J%2F7JhkyWWD5wjM1LtGR5yS4lW5AIWnSKr8PqUr0IeJMeKJe03qkPqii4GLZvmNQdqIGiMIr%2BQqd%2BPWSpcSm40%2BNnLOamBlstSOAbQjYRQaSb%2FeEnbPO9QzsGT7iOhOtce0KzYR75KmdZLhWWBPzmVyiYO2lmAYXJt1ZjqZBXgN7qmSq886CTDxZyd6VsolW%2FnLNO%2B%2FpKGgZURlwVhnZXlN13InDD57%2BzRBjqkAYzvRzeIiKusKw3Eze5SUdaiFBSM7hlAZeezsGP7VnqHgVnsOjGI2hjjDTSRxQyMcDjsElYD9PbSq%2F8XAuMB%2FfEYfnhtT8Uw4cqQJctMa6NohVAIrZPFQKRLC2oCAxLLyifJVXT7Nk1Xq9jBjpOP%2Bd7JyhjbXEYTrcywgKcI5k22KIreMHhD6wirDVcf7Uuy8hfnkQs5pS3eupbKk6M8G%2BtvL8w4&X-Amz-Signature=d6ce0de8d0499d0d757f2d4b9cec71ec511fbf76b2e74e01fe8bae6e84bf8bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YSCPCF%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCoCle1u187Ui%2FWNzYSMWil9iM%2B%2B8pAeNJ5kvmWCn7vLwIhAOeaSl5zgDDd850cq1Njlkji7BQGC4oiU4zGyBii3e0WKv8DCCsQABoMNjM3NDIzMTgzODA1Igx4WzHsMegcBebnEFkq3AM%2BpYyzQoc4UC2RV8n90oJccqNE5xnwYqZccCUn%2BqmrGeC1Nqv1i%2FD8uCA%2BcvpXhaEZzLpjyYyf8i81w5ayb2VRaf%2FZOdEX8sIVD3v0MhM5BiqZj09f%2F%2BGuqV1vyo7POMbiOIaRhXg9%2Bcq4ADLmqO945br%2FweRttWGj7ZJ2NCLOITMeNiPM7YyVpmfMXzhAHp5ArPoxqqn0Bg1uD1ARyIologmJekXH0jqrgaDliVn1Z4XOf6wYTkGjNRpkYNTaye%2FQibyMc1cPuyfaK0TomqELe%2BEzhkm7mF8fTOc%2Bp1Z2U6eS%2Ftxr2K4NKM%2FoS1EjLTSmf6p3cfsJ6qyign49fYJQO5Y8sGjUYE%2FYxPaWdE9FUhqScZ9xL%2F6uuibzP6gdEziawaMEEDkMKF8tu152ky8jjVhZBuLCRb6J%2F7JhkyWWD5wjM1LtGR5yS4lW5AIWnSKr8PqUr0IeJMeKJe03qkPqii4GLZvmNQdqIGiMIr%2BQqd%2BPWSpcSm40%2BNnLOamBlstSOAbQjYRQaSb%2FeEnbPO9QzsGT7iOhOtce0KzYR75KmdZLhWWBPzmVyiYO2lmAYXJt1ZjqZBXgN7qmSq886CTDxZyd6VsolW%2FnLNO%2B%2FpKGgZURlwVhnZXlN13InDD57%2BzRBjqkAYzvRzeIiKusKw3Eze5SUdaiFBSM7hlAZeezsGP7VnqHgVnsOjGI2hjjDTSRxQyMcDjsElYD9PbSq%2F8XAuMB%2FfEYfnhtT8Uw4cqQJctMa6NohVAIrZPFQKRLC2oCAxLLyifJVXT7Nk1Xq9jBjpOP%2Bd7JyhjbXEYTrcywgKcI5k22KIreMHhD6wirDVcf7Uuy8hfnkQs5pS3eupbKk6M8G%2BtvL8w4&X-Amz-Signature=8af02856ae12827e35f310fb44179e4d6823d9e79910947c961e713d369d5e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YSCPCF%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCoCle1u187Ui%2FWNzYSMWil9iM%2B%2B8pAeNJ5kvmWCn7vLwIhAOeaSl5zgDDd850cq1Njlkji7BQGC4oiU4zGyBii3e0WKv8DCCsQABoMNjM3NDIzMTgzODA1Igx4WzHsMegcBebnEFkq3AM%2BpYyzQoc4UC2RV8n90oJccqNE5xnwYqZccCUn%2BqmrGeC1Nqv1i%2FD8uCA%2BcvpXhaEZzLpjyYyf8i81w5ayb2VRaf%2FZOdEX8sIVD3v0MhM5BiqZj09f%2F%2BGuqV1vyo7POMbiOIaRhXg9%2Bcq4ADLmqO945br%2FweRttWGj7ZJ2NCLOITMeNiPM7YyVpmfMXzhAHp5ArPoxqqn0Bg1uD1ARyIologmJekXH0jqrgaDliVn1Z4XOf6wYTkGjNRpkYNTaye%2FQibyMc1cPuyfaK0TomqELe%2BEzhkm7mF8fTOc%2Bp1Z2U6eS%2Ftxr2K4NKM%2FoS1EjLTSmf6p3cfsJ6qyign49fYJQO5Y8sGjUYE%2FYxPaWdE9FUhqScZ9xL%2F6uuibzP6gdEziawaMEEDkMKF8tu152ky8jjVhZBuLCRb6J%2F7JhkyWWD5wjM1LtGR5yS4lW5AIWnSKr8PqUr0IeJMeKJe03qkPqii4GLZvmNQdqIGiMIr%2BQqd%2BPWSpcSm40%2BNnLOamBlstSOAbQjYRQaSb%2FeEnbPO9QzsGT7iOhOtce0KzYR75KmdZLhWWBPzmVyiYO2lmAYXJt1ZjqZBXgN7qmSq886CTDxZyd6VsolW%2FnLNO%2B%2FpKGgZURlwVhnZXlN13InDD57%2BzRBjqkAYzvRzeIiKusKw3Eze5SUdaiFBSM7hlAZeezsGP7VnqHgVnsOjGI2hjjDTSRxQyMcDjsElYD9PbSq%2F8XAuMB%2FfEYfnhtT8Uw4cqQJctMa6NohVAIrZPFQKRLC2oCAxLLyifJVXT7Nk1Xq9jBjpOP%2Bd7JyhjbXEYTrcywgKcI5k22KIreMHhD6wirDVcf7Uuy8hfnkQs5pS3eupbKk6M8G%2BtvL8w4&X-Amz-Signature=a4f67303deb25442b95262bb58eda367207ad48fa9679d93cbfc587a9235948f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YSCPCF%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCoCle1u187Ui%2FWNzYSMWil9iM%2B%2B8pAeNJ5kvmWCn7vLwIhAOeaSl5zgDDd850cq1Njlkji7BQGC4oiU4zGyBii3e0WKv8DCCsQABoMNjM3NDIzMTgzODA1Igx4WzHsMegcBebnEFkq3AM%2BpYyzQoc4UC2RV8n90oJccqNE5xnwYqZccCUn%2BqmrGeC1Nqv1i%2FD8uCA%2BcvpXhaEZzLpjyYyf8i81w5ayb2VRaf%2FZOdEX8sIVD3v0MhM5BiqZj09f%2F%2BGuqV1vyo7POMbiOIaRhXg9%2Bcq4ADLmqO945br%2FweRttWGj7ZJ2NCLOITMeNiPM7YyVpmfMXzhAHp5ArPoxqqn0Bg1uD1ARyIologmJekXH0jqrgaDliVn1Z4XOf6wYTkGjNRpkYNTaye%2FQibyMc1cPuyfaK0TomqELe%2BEzhkm7mF8fTOc%2Bp1Z2U6eS%2Ftxr2K4NKM%2FoS1EjLTSmf6p3cfsJ6qyign49fYJQO5Y8sGjUYE%2FYxPaWdE9FUhqScZ9xL%2F6uuibzP6gdEziawaMEEDkMKF8tu152ky8jjVhZBuLCRb6J%2F7JhkyWWD5wjM1LtGR5yS4lW5AIWnSKr8PqUr0IeJMeKJe03qkPqii4GLZvmNQdqIGiMIr%2BQqd%2BPWSpcSm40%2BNnLOamBlstSOAbQjYRQaSb%2FeEnbPO9QzsGT7iOhOtce0KzYR75KmdZLhWWBPzmVyiYO2lmAYXJt1ZjqZBXgN7qmSq886CTDxZyd6VsolW%2FnLNO%2B%2FpKGgZURlwVhnZXlN13InDD57%2BzRBjqkAYzvRzeIiKusKw3Eze5SUdaiFBSM7hlAZeezsGP7VnqHgVnsOjGI2hjjDTSRxQyMcDjsElYD9PbSq%2F8XAuMB%2FfEYfnhtT8Uw4cqQJctMa6NohVAIrZPFQKRLC2oCAxLLyifJVXT7Nk1Xq9jBjpOP%2Bd7JyhjbXEYTrcywgKcI5k22KIreMHhD6wirDVcf7Uuy8hfnkQs5pS3eupbKk6M8G%2BtvL8w4&X-Amz-Signature=9de3f7d45789a43bc3451adf6fe2e18a4a9f2c8967d1ad33f18b4df2595905fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YSCPCF%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCoCle1u187Ui%2FWNzYSMWil9iM%2B%2B8pAeNJ5kvmWCn7vLwIhAOeaSl5zgDDd850cq1Njlkji7BQGC4oiU4zGyBii3e0WKv8DCCsQABoMNjM3NDIzMTgzODA1Igx4WzHsMegcBebnEFkq3AM%2BpYyzQoc4UC2RV8n90oJccqNE5xnwYqZccCUn%2BqmrGeC1Nqv1i%2FD8uCA%2BcvpXhaEZzLpjyYyf8i81w5ayb2VRaf%2FZOdEX8sIVD3v0MhM5BiqZj09f%2F%2BGuqV1vyo7POMbiOIaRhXg9%2Bcq4ADLmqO945br%2FweRttWGj7ZJ2NCLOITMeNiPM7YyVpmfMXzhAHp5ArPoxqqn0Bg1uD1ARyIologmJekXH0jqrgaDliVn1Z4XOf6wYTkGjNRpkYNTaye%2FQibyMc1cPuyfaK0TomqELe%2BEzhkm7mF8fTOc%2Bp1Z2U6eS%2Ftxr2K4NKM%2FoS1EjLTSmf6p3cfsJ6qyign49fYJQO5Y8sGjUYE%2FYxPaWdE9FUhqScZ9xL%2F6uuibzP6gdEziawaMEEDkMKF8tu152ky8jjVhZBuLCRb6J%2F7JhkyWWD5wjM1LtGR5yS4lW5AIWnSKr8PqUr0IeJMeKJe03qkPqii4GLZvmNQdqIGiMIr%2BQqd%2BPWSpcSm40%2BNnLOamBlstSOAbQjYRQaSb%2FeEnbPO9QzsGT7iOhOtce0KzYR75KmdZLhWWBPzmVyiYO2lmAYXJt1ZjqZBXgN7qmSq886CTDxZyd6VsolW%2FnLNO%2B%2FpKGgZURlwVhnZXlN13InDD57%2BzRBjqkAYzvRzeIiKusKw3Eze5SUdaiFBSM7hlAZeezsGP7VnqHgVnsOjGI2hjjDTSRxQyMcDjsElYD9PbSq%2F8XAuMB%2FfEYfnhtT8Uw4cqQJctMa6NohVAIrZPFQKRLC2oCAxLLyifJVXT7Nk1Xq9jBjpOP%2Bd7JyhjbXEYTrcywgKcI5k22KIreMHhD6wirDVcf7Uuy8hfnkQs5pS3eupbKk6M8G%2BtvL8w4&X-Amz-Signature=85bac0978756b3c13ac087896b75abaabbc8cfd56425f8d166aa706911cbcb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YSCPCF%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCoCle1u187Ui%2FWNzYSMWil9iM%2B%2B8pAeNJ5kvmWCn7vLwIhAOeaSl5zgDDd850cq1Njlkji7BQGC4oiU4zGyBii3e0WKv8DCCsQABoMNjM3NDIzMTgzODA1Igx4WzHsMegcBebnEFkq3AM%2BpYyzQoc4UC2RV8n90oJccqNE5xnwYqZccCUn%2BqmrGeC1Nqv1i%2FD8uCA%2BcvpXhaEZzLpjyYyf8i81w5ayb2VRaf%2FZOdEX8sIVD3v0MhM5BiqZj09f%2F%2BGuqV1vyo7POMbiOIaRhXg9%2Bcq4ADLmqO945br%2FweRttWGj7ZJ2NCLOITMeNiPM7YyVpmfMXzhAHp5ArPoxqqn0Bg1uD1ARyIologmJekXH0jqrgaDliVn1Z4XOf6wYTkGjNRpkYNTaye%2FQibyMc1cPuyfaK0TomqELe%2BEzhkm7mF8fTOc%2Bp1Z2U6eS%2Ftxr2K4NKM%2FoS1EjLTSmf6p3cfsJ6qyign49fYJQO5Y8sGjUYE%2FYxPaWdE9FUhqScZ9xL%2F6uuibzP6gdEziawaMEEDkMKF8tu152ky8jjVhZBuLCRb6J%2F7JhkyWWD5wjM1LtGR5yS4lW5AIWnSKr8PqUr0IeJMeKJe03qkPqii4GLZvmNQdqIGiMIr%2BQqd%2BPWSpcSm40%2BNnLOamBlstSOAbQjYRQaSb%2FeEnbPO9QzsGT7iOhOtce0KzYR75KmdZLhWWBPzmVyiYO2lmAYXJt1ZjqZBXgN7qmSq886CTDxZyd6VsolW%2FnLNO%2B%2FpKGgZURlwVhnZXlN13InDD57%2BzRBjqkAYzvRzeIiKusKw3Eze5SUdaiFBSM7hlAZeezsGP7VnqHgVnsOjGI2hjjDTSRxQyMcDjsElYD9PbSq%2F8XAuMB%2FfEYfnhtT8Uw4cqQJctMa6NohVAIrZPFQKRLC2oCAxLLyifJVXT7Nk1Xq9jBjpOP%2Bd7JyhjbXEYTrcywgKcI5k22KIreMHhD6wirDVcf7Uuy8hfnkQs5pS3eupbKk6M8G%2BtvL8w4&X-Amz-Signature=c35b1fc25525a5f3d76fb110e19299622e1d6dc22f51991392e9d675dcfc8dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YSCPCF%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCoCle1u187Ui%2FWNzYSMWil9iM%2B%2B8pAeNJ5kvmWCn7vLwIhAOeaSl5zgDDd850cq1Njlkji7BQGC4oiU4zGyBii3e0WKv8DCCsQABoMNjM3NDIzMTgzODA1Igx4WzHsMegcBebnEFkq3AM%2BpYyzQoc4UC2RV8n90oJccqNE5xnwYqZccCUn%2BqmrGeC1Nqv1i%2FD8uCA%2BcvpXhaEZzLpjyYyf8i81w5ayb2VRaf%2FZOdEX8sIVD3v0MhM5BiqZj09f%2F%2BGuqV1vyo7POMbiOIaRhXg9%2Bcq4ADLmqO945br%2FweRttWGj7ZJ2NCLOITMeNiPM7YyVpmfMXzhAHp5ArPoxqqn0Bg1uD1ARyIologmJekXH0jqrgaDliVn1Z4XOf6wYTkGjNRpkYNTaye%2FQibyMc1cPuyfaK0TomqELe%2BEzhkm7mF8fTOc%2Bp1Z2U6eS%2Ftxr2K4NKM%2FoS1EjLTSmf6p3cfsJ6qyign49fYJQO5Y8sGjUYE%2FYxPaWdE9FUhqScZ9xL%2F6uuibzP6gdEziawaMEEDkMKF8tu152ky8jjVhZBuLCRb6J%2F7JhkyWWD5wjM1LtGR5yS4lW5AIWnSKr8PqUr0IeJMeKJe03qkPqii4GLZvmNQdqIGiMIr%2BQqd%2BPWSpcSm40%2BNnLOamBlstSOAbQjYRQaSb%2FeEnbPO9QzsGT7iOhOtce0KzYR75KmdZLhWWBPzmVyiYO2lmAYXJt1ZjqZBXgN7qmSq886CTDxZyd6VsolW%2FnLNO%2B%2FpKGgZURlwVhnZXlN13InDD57%2BzRBjqkAYzvRzeIiKusKw3Eze5SUdaiFBSM7hlAZeezsGP7VnqHgVnsOjGI2hjjDTSRxQyMcDjsElYD9PbSq%2F8XAuMB%2FfEYfnhtT8Uw4cqQJctMa6NohVAIrZPFQKRLC2oCAxLLyifJVXT7Nk1Xq9jBjpOP%2Bd7JyhjbXEYTrcywgKcI5k22KIreMHhD6wirDVcf7Uuy8hfnkQs5pS3eupbKk6M8G%2BtvL8w4&X-Amz-Signature=0c6bfc15e790b286a35cb2f7eae1c7954ecdd791018ea8a9af97c57bd13c615c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
