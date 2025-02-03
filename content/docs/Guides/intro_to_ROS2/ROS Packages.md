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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWS4GZM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxRM42NtUNosik7Yjz8R395MCgW4feMSbrEmoATUq5pAiBCqCuAN59mAiBjNa92W8uSVqSo7LCfRuOdwf0Cb3%2FlxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp9J9DbMJ9Xi5N4MKtwDhn41cdups%2Bnyk9rO5pIJPPLMaQm9kf0Y5H4N1HwvErQeDaNw21cnpPqWRkEVg01XJakbYtj%2Fj8s73cadCEqQRy9H1AamSGIpPd2%2FDLDOhuyEWnzToVH%2FMYCau2S55xNbyyzAHgsq4Ub4bNjHtT5m6kUZDG%2B8iGStBi0x%2BLVw7cWwHmWCo%2FkVJwUSBAA%2BNoaiyv2BUVX11X4fe7UH%2FiRE5JRz%2BiThkvZ7FB%2FubuRdG167rM6ApfiOxQ1e71H4S%2F581xk6No3OgYn2MpudqdVnzMr1sQH1XdeZkAIoAtB6B41vTyfvUtYxmfcV1lWCB%2FxP3PsiEM7PZQZKPMMp9gjHWQZIUR7R%2BEyC6bz3jaHxVtZf%2BBGos5oxu2Mt3HIX%2BG5Nf0o6ouHK3HQlHBJ4v5syh5klx42c2TtrWe3IsuT5XAF8jrT38Tiy3%2FD4R8PRawxZlRFyvCBSO%2B1mTVjfWZziaCGnHWbpgM3unpnTMnF9xuo60YQsjVGEA%2B54U6M0jatkIn41WBzbSiDJLpQfcHpiHv4SmDz7AXJXWAF3VXheajlWEtcWcCgzAxMsEXFCaAZM0NU0rgQ0DT%2BtObxbehNKt3yTgU7GJU1YcB4VJnJmfPKnebTX1DdBWEq66GYw3cCAvQY6pgEs%2BJMC2qrh9tW%2BplRku6ny2HnfDaTtAf2VdD3NBRapWeZB2Pn3qeHyd%2F%2BW0H1VYkoj5iW0q7nPP%2B5bho1USwWTeMvHMSgz543PzIK52J0S9gYxUlV5Il6GPCtpikMp5%2F62bYUio8sHEcPVqteIZoxNxdKC%2BAlwTlbPt4XbUrdTZL7yT6RUVriK2kTSH9K%2FeLzXM3%2FPqcAE4BCsV4Xb4R93oPastmvH&X-Amz-Signature=b3e18eda0313cb45d42c84272df03e02257d841db12e4f418dd46512a61e8d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWS4GZM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxRM42NtUNosik7Yjz8R395MCgW4feMSbrEmoATUq5pAiBCqCuAN59mAiBjNa92W8uSVqSo7LCfRuOdwf0Cb3%2FlxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp9J9DbMJ9Xi5N4MKtwDhn41cdups%2Bnyk9rO5pIJPPLMaQm9kf0Y5H4N1HwvErQeDaNw21cnpPqWRkEVg01XJakbYtj%2Fj8s73cadCEqQRy9H1AamSGIpPd2%2FDLDOhuyEWnzToVH%2FMYCau2S55xNbyyzAHgsq4Ub4bNjHtT5m6kUZDG%2B8iGStBi0x%2BLVw7cWwHmWCo%2FkVJwUSBAA%2BNoaiyv2BUVX11X4fe7UH%2FiRE5JRz%2BiThkvZ7FB%2FubuRdG167rM6ApfiOxQ1e71H4S%2F581xk6No3OgYn2MpudqdVnzMr1sQH1XdeZkAIoAtB6B41vTyfvUtYxmfcV1lWCB%2FxP3PsiEM7PZQZKPMMp9gjHWQZIUR7R%2BEyC6bz3jaHxVtZf%2BBGos5oxu2Mt3HIX%2BG5Nf0o6ouHK3HQlHBJ4v5syh5klx42c2TtrWe3IsuT5XAF8jrT38Tiy3%2FD4R8PRawxZlRFyvCBSO%2B1mTVjfWZziaCGnHWbpgM3unpnTMnF9xuo60YQsjVGEA%2B54U6M0jatkIn41WBzbSiDJLpQfcHpiHv4SmDz7AXJXWAF3VXheajlWEtcWcCgzAxMsEXFCaAZM0NU0rgQ0DT%2BtObxbehNKt3yTgU7GJU1YcB4VJnJmfPKnebTX1DdBWEq66GYw3cCAvQY6pgEs%2BJMC2qrh9tW%2BplRku6ny2HnfDaTtAf2VdD3NBRapWeZB2Pn3qeHyd%2F%2BW0H1VYkoj5iW0q7nPP%2B5bho1USwWTeMvHMSgz543PzIK52J0S9gYxUlV5Il6GPCtpikMp5%2F62bYUio8sHEcPVqteIZoxNxdKC%2BAlwTlbPt4XbUrdTZL7yT6RUVriK2kTSH9K%2FeLzXM3%2FPqcAE4BCsV4Xb4R93oPastmvH&X-Amz-Signature=e0489135122f135ee80bf81c7242ba14ab60aa468c40c3bf70313dbd991456a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWS4GZM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxRM42NtUNosik7Yjz8R395MCgW4feMSbrEmoATUq5pAiBCqCuAN59mAiBjNa92W8uSVqSo7LCfRuOdwf0Cb3%2FlxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp9J9DbMJ9Xi5N4MKtwDhn41cdups%2Bnyk9rO5pIJPPLMaQm9kf0Y5H4N1HwvErQeDaNw21cnpPqWRkEVg01XJakbYtj%2Fj8s73cadCEqQRy9H1AamSGIpPd2%2FDLDOhuyEWnzToVH%2FMYCau2S55xNbyyzAHgsq4Ub4bNjHtT5m6kUZDG%2B8iGStBi0x%2BLVw7cWwHmWCo%2FkVJwUSBAA%2BNoaiyv2BUVX11X4fe7UH%2FiRE5JRz%2BiThkvZ7FB%2FubuRdG167rM6ApfiOxQ1e71H4S%2F581xk6No3OgYn2MpudqdVnzMr1sQH1XdeZkAIoAtB6B41vTyfvUtYxmfcV1lWCB%2FxP3PsiEM7PZQZKPMMp9gjHWQZIUR7R%2BEyC6bz3jaHxVtZf%2BBGos5oxu2Mt3HIX%2BG5Nf0o6ouHK3HQlHBJ4v5syh5klx42c2TtrWe3IsuT5XAF8jrT38Tiy3%2FD4R8PRawxZlRFyvCBSO%2B1mTVjfWZziaCGnHWbpgM3unpnTMnF9xuo60YQsjVGEA%2B54U6M0jatkIn41WBzbSiDJLpQfcHpiHv4SmDz7AXJXWAF3VXheajlWEtcWcCgzAxMsEXFCaAZM0NU0rgQ0DT%2BtObxbehNKt3yTgU7GJU1YcB4VJnJmfPKnebTX1DdBWEq66GYw3cCAvQY6pgEs%2BJMC2qrh9tW%2BplRku6ny2HnfDaTtAf2VdD3NBRapWeZB2Pn3qeHyd%2F%2BW0H1VYkoj5iW0q7nPP%2B5bho1USwWTeMvHMSgz543PzIK52J0S9gYxUlV5Il6GPCtpikMp5%2F62bYUio8sHEcPVqteIZoxNxdKC%2BAlwTlbPt4XbUrdTZL7yT6RUVriK2kTSH9K%2FeLzXM3%2FPqcAE4BCsV4Xb4R93oPastmvH&X-Amz-Signature=3ee9b4ede52d9f0d2c7d6460754c80989bc40cd037d9a06af7748ed24364efd6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWS4GZM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxRM42NtUNosik7Yjz8R395MCgW4feMSbrEmoATUq5pAiBCqCuAN59mAiBjNa92W8uSVqSo7LCfRuOdwf0Cb3%2FlxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp9J9DbMJ9Xi5N4MKtwDhn41cdups%2Bnyk9rO5pIJPPLMaQm9kf0Y5H4N1HwvErQeDaNw21cnpPqWRkEVg01XJakbYtj%2Fj8s73cadCEqQRy9H1AamSGIpPd2%2FDLDOhuyEWnzToVH%2FMYCau2S55xNbyyzAHgsq4Ub4bNjHtT5m6kUZDG%2B8iGStBi0x%2BLVw7cWwHmWCo%2FkVJwUSBAA%2BNoaiyv2BUVX11X4fe7UH%2FiRE5JRz%2BiThkvZ7FB%2FubuRdG167rM6ApfiOxQ1e71H4S%2F581xk6No3OgYn2MpudqdVnzMr1sQH1XdeZkAIoAtB6B41vTyfvUtYxmfcV1lWCB%2FxP3PsiEM7PZQZKPMMp9gjHWQZIUR7R%2BEyC6bz3jaHxVtZf%2BBGos5oxu2Mt3HIX%2BG5Nf0o6ouHK3HQlHBJ4v5syh5klx42c2TtrWe3IsuT5XAF8jrT38Tiy3%2FD4R8PRawxZlRFyvCBSO%2B1mTVjfWZziaCGnHWbpgM3unpnTMnF9xuo60YQsjVGEA%2B54U6M0jatkIn41WBzbSiDJLpQfcHpiHv4SmDz7AXJXWAF3VXheajlWEtcWcCgzAxMsEXFCaAZM0NU0rgQ0DT%2BtObxbehNKt3yTgU7GJU1YcB4VJnJmfPKnebTX1DdBWEq66GYw3cCAvQY6pgEs%2BJMC2qrh9tW%2BplRku6ny2HnfDaTtAf2VdD3NBRapWeZB2Pn3qeHyd%2F%2BW0H1VYkoj5iW0q7nPP%2B5bho1USwWTeMvHMSgz543PzIK52J0S9gYxUlV5Il6GPCtpikMp5%2F62bYUio8sHEcPVqteIZoxNxdKC%2BAlwTlbPt4XbUrdTZL7yT6RUVriK2kTSH9K%2FeLzXM3%2FPqcAE4BCsV4Xb4R93oPastmvH&X-Amz-Signature=eb3a8177f4acba897d4bca3883fbe5a67f95cf21abff7dbe35f7728d7a2d92fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWS4GZM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxRM42NtUNosik7Yjz8R395MCgW4feMSbrEmoATUq5pAiBCqCuAN59mAiBjNa92W8uSVqSo7LCfRuOdwf0Cb3%2FlxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp9J9DbMJ9Xi5N4MKtwDhn41cdups%2Bnyk9rO5pIJPPLMaQm9kf0Y5H4N1HwvErQeDaNw21cnpPqWRkEVg01XJakbYtj%2Fj8s73cadCEqQRy9H1AamSGIpPd2%2FDLDOhuyEWnzToVH%2FMYCau2S55xNbyyzAHgsq4Ub4bNjHtT5m6kUZDG%2B8iGStBi0x%2BLVw7cWwHmWCo%2FkVJwUSBAA%2BNoaiyv2BUVX11X4fe7UH%2FiRE5JRz%2BiThkvZ7FB%2FubuRdG167rM6ApfiOxQ1e71H4S%2F581xk6No3OgYn2MpudqdVnzMr1sQH1XdeZkAIoAtB6B41vTyfvUtYxmfcV1lWCB%2FxP3PsiEM7PZQZKPMMp9gjHWQZIUR7R%2BEyC6bz3jaHxVtZf%2BBGos5oxu2Mt3HIX%2BG5Nf0o6ouHK3HQlHBJ4v5syh5klx42c2TtrWe3IsuT5XAF8jrT38Tiy3%2FD4R8PRawxZlRFyvCBSO%2B1mTVjfWZziaCGnHWbpgM3unpnTMnF9xuo60YQsjVGEA%2B54U6M0jatkIn41WBzbSiDJLpQfcHpiHv4SmDz7AXJXWAF3VXheajlWEtcWcCgzAxMsEXFCaAZM0NU0rgQ0DT%2BtObxbehNKt3yTgU7GJU1YcB4VJnJmfPKnebTX1DdBWEq66GYw3cCAvQY6pgEs%2BJMC2qrh9tW%2BplRku6ny2HnfDaTtAf2VdD3NBRapWeZB2Pn3qeHyd%2F%2BW0H1VYkoj5iW0q7nPP%2B5bho1USwWTeMvHMSgz543PzIK52J0S9gYxUlV5Il6GPCtpikMp5%2F62bYUio8sHEcPVqteIZoxNxdKC%2BAlwTlbPt4XbUrdTZL7yT6RUVriK2kTSH9K%2FeLzXM3%2FPqcAE4BCsV4Xb4R93oPastmvH&X-Amz-Signature=0b0590fff1b4e396bb0f30793c3a1c5dcc7dfca2f8e2fed8496c1037a2072944&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWS4GZM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxRM42NtUNosik7Yjz8R395MCgW4feMSbrEmoATUq5pAiBCqCuAN59mAiBjNa92W8uSVqSo7LCfRuOdwf0Cb3%2FlxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp9J9DbMJ9Xi5N4MKtwDhn41cdups%2Bnyk9rO5pIJPPLMaQm9kf0Y5H4N1HwvErQeDaNw21cnpPqWRkEVg01XJakbYtj%2Fj8s73cadCEqQRy9H1AamSGIpPd2%2FDLDOhuyEWnzToVH%2FMYCau2S55xNbyyzAHgsq4Ub4bNjHtT5m6kUZDG%2B8iGStBi0x%2BLVw7cWwHmWCo%2FkVJwUSBAA%2BNoaiyv2BUVX11X4fe7UH%2FiRE5JRz%2BiThkvZ7FB%2FubuRdG167rM6ApfiOxQ1e71H4S%2F581xk6No3OgYn2MpudqdVnzMr1sQH1XdeZkAIoAtB6B41vTyfvUtYxmfcV1lWCB%2FxP3PsiEM7PZQZKPMMp9gjHWQZIUR7R%2BEyC6bz3jaHxVtZf%2BBGos5oxu2Mt3HIX%2BG5Nf0o6ouHK3HQlHBJ4v5syh5klx42c2TtrWe3IsuT5XAF8jrT38Tiy3%2FD4R8PRawxZlRFyvCBSO%2B1mTVjfWZziaCGnHWbpgM3unpnTMnF9xuo60YQsjVGEA%2B54U6M0jatkIn41WBzbSiDJLpQfcHpiHv4SmDz7AXJXWAF3VXheajlWEtcWcCgzAxMsEXFCaAZM0NU0rgQ0DT%2BtObxbehNKt3yTgU7GJU1YcB4VJnJmfPKnebTX1DdBWEq66GYw3cCAvQY6pgEs%2BJMC2qrh9tW%2BplRku6ny2HnfDaTtAf2VdD3NBRapWeZB2Pn3qeHyd%2F%2BW0H1VYkoj5iW0q7nPP%2B5bho1USwWTeMvHMSgz543PzIK52J0S9gYxUlV5Il6GPCtpikMp5%2F62bYUio8sHEcPVqteIZoxNxdKC%2BAlwTlbPt4XbUrdTZL7yT6RUVriK2kTSH9K%2FeLzXM3%2FPqcAE4BCsV4Xb4R93oPastmvH&X-Amz-Signature=4383bb1b992ffda9efb827afef17ac4d1d2c648f04c57573c13b1cadebea3394&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWS4GZM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxRM42NtUNosik7Yjz8R395MCgW4feMSbrEmoATUq5pAiBCqCuAN59mAiBjNa92W8uSVqSo7LCfRuOdwf0Cb3%2FlxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp9J9DbMJ9Xi5N4MKtwDhn41cdups%2Bnyk9rO5pIJPPLMaQm9kf0Y5H4N1HwvErQeDaNw21cnpPqWRkEVg01XJakbYtj%2Fj8s73cadCEqQRy9H1AamSGIpPd2%2FDLDOhuyEWnzToVH%2FMYCau2S55xNbyyzAHgsq4Ub4bNjHtT5m6kUZDG%2B8iGStBi0x%2BLVw7cWwHmWCo%2FkVJwUSBAA%2BNoaiyv2BUVX11X4fe7UH%2FiRE5JRz%2BiThkvZ7FB%2FubuRdG167rM6ApfiOxQ1e71H4S%2F581xk6No3OgYn2MpudqdVnzMr1sQH1XdeZkAIoAtB6B41vTyfvUtYxmfcV1lWCB%2FxP3PsiEM7PZQZKPMMp9gjHWQZIUR7R%2BEyC6bz3jaHxVtZf%2BBGos5oxu2Mt3HIX%2BG5Nf0o6ouHK3HQlHBJ4v5syh5klx42c2TtrWe3IsuT5XAF8jrT38Tiy3%2FD4R8PRawxZlRFyvCBSO%2B1mTVjfWZziaCGnHWbpgM3unpnTMnF9xuo60YQsjVGEA%2B54U6M0jatkIn41WBzbSiDJLpQfcHpiHv4SmDz7AXJXWAF3VXheajlWEtcWcCgzAxMsEXFCaAZM0NU0rgQ0DT%2BtObxbehNKt3yTgU7GJU1YcB4VJnJmfPKnebTX1DdBWEq66GYw3cCAvQY6pgEs%2BJMC2qrh9tW%2BplRku6ny2HnfDaTtAf2VdD3NBRapWeZB2Pn3qeHyd%2F%2BW0H1VYkoj5iW0q7nPP%2B5bho1USwWTeMvHMSgz543PzIK52J0S9gYxUlV5Il6GPCtpikMp5%2F62bYUio8sHEcPVqteIZoxNxdKC%2BAlwTlbPt4XbUrdTZL7yT6RUVriK2kTSH9K%2FeLzXM3%2FPqcAE4BCsV4Xb4R93oPastmvH&X-Amz-Signature=abda3f129927660d4e203c03b3fe42443677ba2dadf8246650bd3141b1754e72&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
