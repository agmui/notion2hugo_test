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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DKX3YP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOsxoB86l5a3u3vqe3d5tVVAyM4umWNRelaGdMQxyGbwIhAPAKHK%2F70M2h3%2FFwqfiEmdC8JdBXoYX1LATWLv5KYu7zKv8DCEoQABoMNjM3NDIzMTgzODA1IgyKaUsV9gB8J%2BJXHwkq3AO7d%2FZxEWNcC3FheDaGogwB8lRdUkq7ghzjHLz%2BZmnf%2FtuRA4l93JVOY%2BeWlWJMpP4%2FfUe0oLmVWBfVTfmnlYRa%2FgpdYaX93TruQj%2FMHUatNId3Vi8hW%2FVPsaeKVwtkcIdkllV78L%2BnjIDfLDHHNGkEXWS1cX7FplX2g65UJXdojIZeaztv3115BJfrYuyndo9zQ%2Brws7P2sdPeqX94OFufI43AgydEUxEGmG97l8p3uJV%2BoqZcpqEAIW1J%2FZ3o2AzJQJog99cS4ma%2F65io9oIxcGPb2yAEKozFL4jYAIg%2Bt1kW4ihQhpLo9hAJVrxh50TxgkhpcS6gUaGEu2C6P0Lr4fyJnXO8Vogd3cifJv6AYV5EY2LtEDXXsJa7GI%2B2lUt6dyVpOpqwecrO12YB%2FGXvWjS0dSAnJfK8oAv8WwUNyqJccvBkym4TDfDQckZSMo7OcuGNhyKp8tNmyL3dUTsyZ4derqsqi00M0dxjkDIHihWImv9MkobbNiXrTjYkdHy%2FIDaw0JTAR64sTUV25APSLbkd3G6CMUXhatBRnyMGkH%2Fx%2Bd6pUcG1rIs4rXJ0dzIgNRH2YUrAy86se6jXCd5dai0peepDC9jK2M%2FKYq1OKEtxP4zQMTBbyeQRRTDrgOnABjqkAeCIh3XUPVseomI%2F6AKIl2haAHgnKxaPhxJF3V4hUvG19GECI%2Bb9mhg%2BF1MweBoU3yDlnNZk9V3P5h72nsn4t%2Fj6zYYo1ief3kXVXqHINb7CsesiqHkiAaSyAwFOq53qiQ0%2FOKj62WfcCI2P%2FsWEIZoLHxSRMIpxhjkwUX1LZJVWvEcK5QE7BPtwPp8O1oxyf89DrmriYFJNOX4lE19cs0sPAyCu&X-Amz-Signature=11548089b0930a3cf25b2ead52aad646a47de7ced29d1ed3456b426fe8cecfc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DKX3YP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOsxoB86l5a3u3vqe3d5tVVAyM4umWNRelaGdMQxyGbwIhAPAKHK%2F70M2h3%2FFwqfiEmdC8JdBXoYX1LATWLv5KYu7zKv8DCEoQABoMNjM3NDIzMTgzODA1IgyKaUsV9gB8J%2BJXHwkq3AO7d%2FZxEWNcC3FheDaGogwB8lRdUkq7ghzjHLz%2BZmnf%2FtuRA4l93JVOY%2BeWlWJMpP4%2FfUe0oLmVWBfVTfmnlYRa%2FgpdYaX93TruQj%2FMHUatNId3Vi8hW%2FVPsaeKVwtkcIdkllV78L%2BnjIDfLDHHNGkEXWS1cX7FplX2g65UJXdojIZeaztv3115BJfrYuyndo9zQ%2Brws7P2sdPeqX94OFufI43AgydEUxEGmG97l8p3uJV%2BoqZcpqEAIW1J%2FZ3o2AzJQJog99cS4ma%2F65io9oIxcGPb2yAEKozFL4jYAIg%2Bt1kW4ihQhpLo9hAJVrxh50TxgkhpcS6gUaGEu2C6P0Lr4fyJnXO8Vogd3cifJv6AYV5EY2LtEDXXsJa7GI%2B2lUt6dyVpOpqwecrO12YB%2FGXvWjS0dSAnJfK8oAv8WwUNyqJccvBkym4TDfDQckZSMo7OcuGNhyKp8tNmyL3dUTsyZ4derqsqi00M0dxjkDIHihWImv9MkobbNiXrTjYkdHy%2FIDaw0JTAR64sTUV25APSLbkd3G6CMUXhatBRnyMGkH%2Fx%2Bd6pUcG1rIs4rXJ0dzIgNRH2YUrAy86se6jXCd5dai0peepDC9jK2M%2FKYq1OKEtxP4zQMTBbyeQRRTDrgOnABjqkAeCIh3XUPVseomI%2F6AKIl2haAHgnKxaPhxJF3V4hUvG19GECI%2Bb9mhg%2BF1MweBoU3yDlnNZk9V3P5h72nsn4t%2Fj6zYYo1ief3kXVXqHINb7CsesiqHkiAaSyAwFOq53qiQ0%2FOKj62WfcCI2P%2FsWEIZoLHxSRMIpxhjkwUX1LZJVWvEcK5QE7BPtwPp8O1oxyf89DrmriYFJNOX4lE19cs0sPAyCu&X-Amz-Signature=bc8c88719c2f60143c9a59757f5cd2062871d07ab2bd202f652c3840588fa57d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DKX3YP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOsxoB86l5a3u3vqe3d5tVVAyM4umWNRelaGdMQxyGbwIhAPAKHK%2F70M2h3%2FFwqfiEmdC8JdBXoYX1LATWLv5KYu7zKv8DCEoQABoMNjM3NDIzMTgzODA1IgyKaUsV9gB8J%2BJXHwkq3AO7d%2FZxEWNcC3FheDaGogwB8lRdUkq7ghzjHLz%2BZmnf%2FtuRA4l93JVOY%2BeWlWJMpP4%2FfUe0oLmVWBfVTfmnlYRa%2FgpdYaX93TruQj%2FMHUatNId3Vi8hW%2FVPsaeKVwtkcIdkllV78L%2BnjIDfLDHHNGkEXWS1cX7FplX2g65UJXdojIZeaztv3115BJfrYuyndo9zQ%2Brws7P2sdPeqX94OFufI43AgydEUxEGmG97l8p3uJV%2BoqZcpqEAIW1J%2FZ3o2AzJQJog99cS4ma%2F65io9oIxcGPb2yAEKozFL4jYAIg%2Bt1kW4ihQhpLo9hAJVrxh50TxgkhpcS6gUaGEu2C6P0Lr4fyJnXO8Vogd3cifJv6AYV5EY2LtEDXXsJa7GI%2B2lUt6dyVpOpqwecrO12YB%2FGXvWjS0dSAnJfK8oAv8WwUNyqJccvBkym4TDfDQckZSMo7OcuGNhyKp8tNmyL3dUTsyZ4derqsqi00M0dxjkDIHihWImv9MkobbNiXrTjYkdHy%2FIDaw0JTAR64sTUV25APSLbkd3G6CMUXhatBRnyMGkH%2Fx%2Bd6pUcG1rIs4rXJ0dzIgNRH2YUrAy86se6jXCd5dai0peepDC9jK2M%2FKYq1OKEtxP4zQMTBbyeQRRTDrgOnABjqkAeCIh3XUPVseomI%2F6AKIl2haAHgnKxaPhxJF3V4hUvG19GECI%2Bb9mhg%2BF1MweBoU3yDlnNZk9V3P5h72nsn4t%2Fj6zYYo1ief3kXVXqHINb7CsesiqHkiAaSyAwFOq53qiQ0%2FOKj62WfcCI2P%2FsWEIZoLHxSRMIpxhjkwUX1LZJVWvEcK5QE7BPtwPp8O1oxyf89DrmriYFJNOX4lE19cs0sPAyCu&X-Amz-Signature=afbf5096145566bcfd7a2ff34cd431a3147cc84d10fb3281d4c3d80c2879449e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DKX3YP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOsxoB86l5a3u3vqe3d5tVVAyM4umWNRelaGdMQxyGbwIhAPAKHK%2F70M2h3%2FFwqfiEmdC8JdBXoYX1LATWLv5KYu7zKv8DCEoQABoMNjM3NDIzMTgzODA1IgyKaUsV9gB8J%2BJXHwkq3AO7d%2FZxEWNcC3FheDaGogwB8lRdUkq7ghzjHLz%2BZmnf%2FtuRA4l93JVOY%2BeWlWJMpP4%2FfUe0oLmVWBfVTfmnlYRa%2FgpdYaX93TruQj%2FMHUatNId3Vi8hW%2FVPsaeKVwtkcIdkllV78L%2BnjIDfLDHHNGkEXWS1cX7FplX2g65UJXdojIZeaztv3115BJfrYuyndo9zQ%2Brws7P2sdPeqX94OFufI43AgydEUxEGmG97l8p3uJV%2BoqZcpqEAIW1J%2FZ3o2AzJQJog99cS4ma%2F65io9oIxcGPb2yAEKozFL4jYAIg%2Bt1kW4ihQhpLo9hAJVrxh50TxgkhpcS6gUaGEu2C6P0Lr4fyJnXO8Vogd3cifJv6AYV5EY2LtEDXXsJa7GI%2B2lUt6dyVpOpqwecrO12YB%2FGXvWjS0dSAnJfK8oAv8WwUNyqJccvBkym4TDfDQckZSMo7OcuGNhyKp8tNmyL3dUTsyZ4derqsqi00M0dxjkDIHihWImv9MkobbNiXrTjYkdHy%2FIDaw0JTAR64sTUV25APSLbkd3G6CMUXhatBRnyMGkH%2Fx%2Bd6pUcG1rIs4rXJ0dzIgNRH2YUrAy86se6jXCd5dai0peepDC9jK2M%2FKYq1OKEtxP4zQMTBbyeQRRTDrgOnABjqkAeCIh3XUPVseomI%2F6AKIl2haAHgnKxaPhxJF3V4hUvG19GECI%2Bb9mhg%2BF1MweBoU3yDlnNZk9V3P5h72nsn4t%2Fj6zYYo1ief3kXVXqHINb7CsesiqHkiAaSyAwFOq53qiQ0%2FOKj62WfcCI2P%2FsWEIZoLHxSRMIpxhjkwUX1LZJVWvEcK5QE7BPtwPp8O1oxyf89DrmriYFJNOX4lE19cs0sPAyCu&X-Amz-Signature=53fdd2a5c3a5cbdaa6e8161a1a70f7f454873161374808a83a42b265a17f7894&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DKX3YP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOsxoB86l5a3u3vqe3d5tVVAyM4umWNRelaGdMQxyGbwIhAPAKHK%2F70M2h3%2FFwqfiEmdC8JdBXoYX1LATWLv5KYu7zKv8DCEoQABoMNjM3NDIzMTgzODA1IgyKaUsV9gB8J%2BJXHwkq3AO7d%2FZxEWNcC3FheDaGogwB8lRdUkq7ghzjHLz%2BZmnf%2FtuRA4l93JVOY%2BeWlWJMpP4%2FfUe0oLmVWBfVTfmnlYRa%2FgpdYaX93TruQj%2FMHUatNId3Vi8hW%2FVPsaeKVwtkcIdkllV78L%2BnjIDfLDHHNGkEXWS1cX7FplX2g65UJXdojIZeaztv3115BJfrYuyndo9zQ%2Brws7P2sdPeqX94OFufI43AgydEUxEGmG97l8p3uJV%2BoqZcpqEAIW1J%2FZ3o2AzJQJog99cS4ma%2F65io9oIxcGPb2yAEKozFL4jYAIg%2Bt1kW4ihQhpLo9hAJVrxh50TxgkhpcS6gUaGEu2C6P0Lr4fyJnXO8Vogd3cifJv6AYV5EY2LtEDXXsJa7GI%2B2lUt6dyVpOpqwecrO12YB%2FGXvWjS0dSAnJfK8oAv8WwUNyqJccvBkym4TDfDQckZSMo7OcuGNhyKp8tNmyL3dUTsyZ4derqsqi00M0dxjkDIHihWImv9MkobbNiXrTjYkdHy%2FIDaw0JTAR64sTUV25APSLbkd3G6CMUXhatBRnyMGkH%2Fx%2Bd6pUcG1rIs4rXJ0dzIgNRH2YUrAy86se6jXCd5dai0peepDC9jK2M%2FKYq1OKEtxP4zQMTBbyeQRRTDrgOnABjqkAeCIh3XUPVseomI%2F6AKIl2haAHgnKxaPhxJF3V4hUvG19GECI%2Bb9mhg%2BF1MweBoU3yDlnNZk9V3P5h72nsn4t%2Fj6zYYo1ief3kXVXqHINb7CsesiqHkiAaSyAwFOq53qiQ0%2FOKj62WfcCI2P%2FsWEIZoLHxSRMIpxhjkwUX1LZJVWvEcK5QE7BPtwPp8O1oxyf89DrmriYFJNOX4lE19cs0sPAyCu&X-Amz-Signature=bd25518df77027d4bca87215731c9d9586b791968f9c66b99d48c98728972f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DKX3YP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOsxoB86l5a3u3vqe3d5tVVAyM4umWNRelaGdMQxyGbwIhAPAKHK%2F70M2h3%2FFwqfiEmdC8JdBXoYX1LATWLv5KYu7zKv8DCEoQABoMNjM3NDIzMTgzODA1IgyKaUsV9gB8J%2BJXHwkq3AO7d%2FZxEWNcC3FheDaGogwB8lRdUkq7ghzjHLz%2BZmnf%2FtuRA4l93JVOY%2BeWlWJMpP4%2FfUe0oLmVWBfVTfmnlYRa%2FgpdYaX93TruQj%2FMHUatNId3Vi8hW%2FVPsaeKVwtkcIdkllV78L%2BnjIDfLDHHNGkEXWS1cX7FplX2g65UJXdojIZeaztv3115BJfrYuyndo9zQ%2Brws7P2sdPeqX94OFufI43AgydEUxEGmG97l8p3uJV%2BoqZcpqEAIW1J%2FZ3o2AzJQJog99cS4ma%2F65io9oIxcGPb2yAEKozFL4jYAIg%2Bt1kW4ihQhpLo9hAJVrxh50TxgkhpcS6gUaGEu2C6P0Lr4fyJnXO8Vogd3cifJv6AYV5EY2LtEDXXsJa7GI%2B2lUt6dyVpOpqwecrO12YB%2FGXvWjS0dSAnJfK8oAv8WwUNyqJccvBkym4TDfDQckZSMo7OcuGNhyKp8tNmyL3dUTsyZ4derqsqi00M0dxjkDIHihWImv9MkobbNiXrTjYkdHy%2FIDaw0JTAR64sTUV25APSLbkd3G6CMUXhatBRnyMGkH%2Fx%2Bd6pUcG1rIs4rXJ0dzIgNRH2YUrAy86se6jXCd5dai0peepDC9jK2M%2FKYq1OKEtxP4zQMTBbyeQRRTDrgOnABjqkAeCIh3XUPVseomI%2F6AKIl2haAHgnKxaPhxJF3V4hUvG19GECI%2Bb9mhg%2BF1MweBoU3yDlnNZk9V3P5h72nsn4t%2Fj6zYYo1ief3kXVXqHINb7CsesiqHkiAaSyAwFOq53qiQ0%2FOKj62WfcCI2P%2FsWEIZoLHxSRMIpxhjkwUX1LZJVWvEcK5QE7BPtwPp8O1oxyf89DrmriYFJNOX4lE19cs0sPAyCu&X-Amz-Signature=9582eb65121d149441f14d0b648e75af9ef7d08246e35089646e2f99f8029c26&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DKX3YP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOsxoB86l5a3u3vqe3d5tVVAyM4umWNRelaGdMQxyGbwIhAPAKHK%2F70M2h3%2FFwqfiEmdC8JdBXoYX1LATWLv5KYu7zKv8DCEoQABoMNjM3NDIzMTgzODA1IgyKaUsV9gB8J%2BJXHwkq3AO7d%2FZxEWNcC3FheDaGogwB8lRdUkq7ghzjHLz%2BZmnf%2FtuRA4l93JVOY%2BeWlWJMpP4%2FfUe0oLmVWBfVTfmnlYRa%2FgpdYaX93TruQj%2FMHUatNId3Vi8hW%2FVPsaeKVwtkcIdkllV78L%2BnjIDfLDHHNGkEXWS1cX7FplX2g65UJXdojIZeaztv3115BJfrYuyndo9zQ%2Brws7P2sdPeqX94OFufI43AgydEUxEGmG97l8p3uJV%2BoqZcpqEAIW1J%2FZ3o2AzJQJog99cS4ma%2F65io9oIxcGPb2yAEKozFL4jYAIg%2Bt1kW4ihQhpLo9hAJVrxh50TxgkhpcS6gUaGEu2C6P0Lr4fyJnXO8Vogd3cifJv6AYV5EY2LtEDXXsJa7GI%2B2lUt6dyVpOpqwecrO12YB%2FGXvWjS0dSAnJfK8oAv8WwUNyqJccvBkym4TDfDQckZSMo7OcuGNhyKp8tNmyL3dUTsyZ4derqsqi00M0dxjkDIHihWImv9MkobbNiXrTjYkdHy%2FIDaw0JTAR64sTUV25APSLbkd3G6CMUXhatBRnyMGkH%2Fx%2Bd6pUcG1rIs4rXJ0dzIgNRH2YUrAy86se6jXCd5dai0peepDC9jK2M%2FKYq1OKEtxP4zQMTBbyeQRRTDrgOnABjqkAeCIh3XUPVseomI%2F6AKIl2haAHgnKxaPhxJF3V4hUvG19GECI%2Bb9mhg%2BF1MweBoU3yDlnNZk9V3P5h72nsn4t%2Fj6zYYo1ief3kXVXqHINb7CsesiqHkiAaSyAwFOq53qiQ0%2FOKj62WfcCI2P%2FsWEIZoLHxSRMIpxhjkwUX1LZJVWvEcK5QE7BPtwPp8O1oxyf89DrmriYFJNOX4lE19cs0sPAyCu&X-Amz-Signature=96a77092e05c0ffe00e937d3d1cc22b016bf8ea5609a0b3623dde422230b2d13&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
