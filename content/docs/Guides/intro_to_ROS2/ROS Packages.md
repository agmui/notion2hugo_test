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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SH5KXF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN4A3liqKw1F8brETXpsoAzcippfEoqfvkbnQFcVLHGwIgbtQJAOVAjCre4V0WwIJRCTwilSlwLyHmApwgRI3V25Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE3EbBnB11uMFc33%2FyrcA88cD5NSfFwUKW%2FwzrRbvd8uKi%2F5ZOyJqtXBY1ebuerdyg2EuOtl%2FdPBnlfzqHAg6sIBK5bzv2r%2FRgeivFCcuBOcRIFks0FhAzuqwOicWhjbKnaL0zaBlYKAB7NZPAjyQ0Y0JQVJ2ThnTqtl0N7GGsPU8zQ7ZGqrEbb0vVfuYc0sTUCF09QsXD2tkN9WjihbqkiEKjCKpPiRMXTt7BzunN5be%2BTuLEUYxyObERR4McmLk44ex%2FbBpAGddhoC4b97%2BCk%2BYnYSkthIHvThlChHSP%2Fdf%2FUgIyqA%2BD6Pdt9jm%2FpjNAl2A5jJTi5NQA734u8Zd9apQ%2BChwbMFKyUzR4Qzyp6XWy8JNlZOKdtvoW9r1lebMHOOLLAJzUzgexFBJuC%2By7bC%2F%2FmyvfrvSejjPMAaOjTFFS8EZOIU3oHysOhJLEkfp18%2B5sQKPxp5s3Z72qF1NIpR76QIgn3Iq3Bh26nyrPi%2BDzjM9Cri91e4zh7V02xWmguG1Vk20gQByTJoCcwSDuM63pRmpFWNeZRk%2F4H95nramIbME5GOLwe3%2BPpD5EbAXh6nW5Qg6%2Bh8Ouje%2B%2FFOieUt2NjbEKGSApZ%2BRQI5o1XwM8ZEVwc%2F%2FzmRx7Nta3pe5TU7ofjWXkGc0GATMKPnqMEGOqUBDGTJR4AXv4s%2Ff%2BlHZk%2BGE4W%2BUTGTSWUw54Vara1f0L%2FBw%2BavYXd4OZKn5djRNXmXhGWo%2FTQki1nLW1FfY0WNFM2OHVkp16ypxlQX4%2B3NH%2BoECExxXHiaZhXPc8iq8Jlvxun3jej67uRwTG%2BFO8ycQj1HQkdotDO4s2q72bfzRkHvZLLNt%2BGimAkcIKFOsTtiKtLNT4Qi9JEt52mv977v1IMsmk0N&X-Amz-Signature=f7f2df9365335dc7741778e494c875014fa220d5b4d1e0a325e1497bc5fccc03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SH5KXF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN4A3liqKw1F8brETXpsoAzcippfEoqfvkbnQFcVLHGwIgbtQJAOVAjCre4V0WwIJRCTwilSlwLyHmApwgRI3V25Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE3EbBnB11uMFc33%2FyrcA88cD5NSfFwUKW%2FwzrRbvd8uKi%2F5ZOyJqtXBY1ebuerdyg2EuOtl%2FdPBnlfzqHAg6sIBK5bzv2r%2FRgeivFCcuBOcRIFks0FhAzuqwOicWhjbKnaL0zaBlYKAB7NZPAjyQ0Y0JQVJ2ThnTqtl0N7GGsPU8zQ7ZGqrEbb0vVfuYc0sTUCF09QsXD2tkN9WjihbqkiEKjCKpPiRMXTt7BzunN5be%2BTuLEUYxyObERR4McmLk44ex%2FbBpAGddhoC4b97%2BCk%2BYnYSkthIHvThlChHSP%2Fdf%2FUgIyqA%2BD6Pdt9jm%2FpjNAl2A5jJTi5NQA734u8Zd9apQ%2BChwbMFKyUzR4Qzyp6XWy8JNlZOKdtvoW9r1lebMHOOLLAJzUzgexFBJuC%2By7bC%2F%2FmyvfrvSejjPMAaOjTFFS8EZOIU3oHysOhJLEkfp18%2B5sQKPxp5s3Z72qF1NIpR76QIgn3Iq3Bh26nyrPi%2BDzjM9Cri91e4zh7V02xWmguG1Vk20gQByTJoCcwSDuM63pRmpFWNeZRk%2F4H95nramIbME5GOLwe3%2BPpD5EbAXh6nW5Qg6%2Bh8Ouje%2B%2FFOieUt2NjbEKGSApZ%2BRQI5o1XwM8ZEVwc%2F%2FzmRx7Nta3pe5TU7ofjWXkGc0GATMKPnqMEGOqUBDGTJR4AXv4s%2Ff%2BlHZk%2BGE4W%2BUTGTSWUw54Vara1f0L%2FBw%2BavYXd4OZKn5djRNXmXhGWo%2FTQki1nLW1FfY0WNFM2OHVkp16ypxlQX4%2B3NH%2BoECExxXHiaZhXPc8iq8Jlvxun3jej67uRwTG%2BFO8ycQj1HQkdotDO4s2q72bfzRkHvZLLNt%2BGimAkcIKFOsTtiKtLNT4Qi9JEt52mv977v1IMsmk0N&X-Amz-Signature=958f88dedf177174508b5644c47839730b3e24021d155cf62d861f000bcc8259&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SH5KXF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN4A3liqKw1F8brETXpsoAzcippfEoqfvkbnQFcVLHGwIgbtQJAOVAjCre4V0WwIJRCTwilSlwLyHmApwgRI3V25Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE3EbBnB11uMFc33%2FyrcA88cD5NSfFwUKW%2FwzrRbvd8uKi%2F5ZOyJqtXBY1ebuerdyg2EuOtl%2FdPBnlfzqHAg6sIBK5bzv2r%2FRgeivFCcuBOcRIFks0FhAzuqwOicWhjbKnaL0zaBlYKAB7NZPAjyQ0Y0JQVJ2ThnTqtl0N7GGsPU8zQ7ZGqrEbb0vVfuYc0sTUCF09QsXD2tkN9WjihbqkiEKjCKpPiRMXTt7BzunN5be%2BTuLEUYxyObERR4McmLk44ex%2FbBpAGddhoC4b97%2BCk%2BYnYSkthIHvThlChHSP%2Fdf%2FUgIyqA%2BD6Pdt9jm%2FpjNAl2A5jJTi5NQA734u8Zd9apQ%2BChwbMFKyUzR4Qzyp6XWy8JNlZOKdtvoW9r1lebMHOOLLAJzUzgexFBJuC%2By7bC%2F%2FmyvfrvSejjPMAaOjTFFS8EZOIU3oHysOhJLEkfp18%2B5sQKPxp5s3Z72qF1NIpR76QIgn3Iq3Bh26nyrPi%2BDzjM9Cri91e4zh7V02xWmguG1Vk20gQByTJoCcwSDuM63pRmpFWNeZRk%2F4H95nramIbME5GOLwe3%2BPpD5EbAXh6nW5Qg6%2Bh8Ouje%2B%2FFOieUt2NjbEKGSApZ%2BRQI5o1XwM8ZEVwc%2F%2FzmRx7Nta3pe5TU7ofjWXkGc0GATMKPnqMEGOqUBDGTJR4AXv4s%2Ff%2BlHZk%2BGE4W%2BUTGTSWUw54Vara1f0L%2FBw%2BavYXd4OZKn5djRNXmXhGWo%2FTQki1nLW1FfY0WNFM2OHVkp16ypxlQX4%2B3NH%2BoECExxXHiaZhXPc8iq8Jlvxun3jej67uRwTG%2BFO8ycQj1HQkdotDO4s2q72bfzRkHvZLLNt%2BGimAkcIKFOsTtiKtLNT4Qi9JEt52mv977v1IMsmk0N&X-Amz-Signature=0bef46ff97317d02ae4c77c1d24fb6b1c141d011cd52987eb0511b789d50bc7b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SH5KXF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN4A3liqKw1F8brETXpsoAzcippfEoqfvkbnQFcVLHGwIgbtQJAOVAjCre4V0WwIJRCTwilSlwLyHmApwgRI3V25Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE3EbBnB11uMFc33%2FyrcA88cD5NSfFwUKW%2FwzrRbvd8uKi%2F5ZOyJqtXBY1ebuerdyg2EuOtl%2FdPBnlfzqHAg6sIBK5bzv2r%2FRgeivFCcuBOcRIFks0FhAzuqwOicWhjbKnaL0zaBlYKAB7NZPAjyQ0Y0JQVJ2ThnTqtl0N7GGsPU8zQ7ZGqrEbb0vVfuYc0sTUCF09QsXD2tkN9WjihbqkiEKjCKpPiRMXTt7BzunN5be%2BTuLEUYxyObERR4McmLk44ex%2FbBpAGddhoC4b97%2BCk%2BYnYSkthIHvThlChHSP%2Fdf%2FUgIyqA%2BD6Pdt9jm%2FpjNAl2A5jJTi5NQA734u8Zd9apQ%2BChwbMFKyUzR4Qzyp6XWy8JNlZOKdtvoW9r1lebMHOOLLAJzUzgexFBJuC%2By7bC%2F%2FmyvfrvSejjPMAaOjTFFS8EZOIU3oHysOhJLEkfp18%2B5sQKPxp5s3Z72qF1NIpR76QIgn3Iq3Bh26nyrPi%2BDzjM9Cri91e4zh7V02xWmguG1Vk20gQByTJoCcwSDuM63pRmpFWNeZRk%2F4H95nramIbME5GOLwe3%2BPpD5EbAXh6nW5Qg6%2Bh8Ouje%2B%2FFOieUt2NjbEKGSApZ%2BRQI5o1XwM8ZEVwc%2F%2FzmRx7Nta3pe5TU7ofjWXkGc0GATMKPnqMEGOqUBDGTJR4AXv4s%2Ff%2BlHZk%2BGE4W%2BUTGTSWUw54Vara1f0L%2FBw%2BavYXd4OZKn5djRNXmXhGWo%2FTQki1nLW1FfY0WNFM2OHVkp16ypxlQX4%2B3NH%2BoECExxXHiaZhXPc8iq8Jlvxun3jej67uRwTG%2BFO8ycQj1HQkdotDO4s2q72bfzRkHvZLLNt%2BGimAkcIKFOsTtiKtLNT4Qi9JEt52mv977v1IMsmk0N&X-Amz-Signature=45f15094cd4be80bfc6164291b819ef3c842009d873564de208c3c05cab3defe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SH5KXF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN4A3liqKw1F8brETXpsoAzcippfEoqfvkbnQFcVLHGwIgbtQJAOVAjCre4V0WwIJRCTwilSlwLyHmApwgRI3V25Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE3EbBnB11uMFc33%2FyrcA88cD5NSfFwUKW%2FwzrRbvd8uKi%2F5ZOyJqtXBY1ebuerdyg2EuOtl%2FdPBnlfzqHAg6sIBK5bzv2r%2FRgeivFCcuBOcRIFks0FhAzuqwOicWhjbKnaL0zaBlYKAB7NZPAjyQ0Y0JQVJ2ThnTqtl0N7GGsPU8zQ7ZGqrEbb0vVfuYc0sTUCF09QsXD2tkN9WjihbqkiEKjCKpPiRMXTt7BzunN5be%2BTuLEUYxyObERR4McmLk44ex%2FbBpAGddhoC4b97%2BCk%2BYnYSkthIHvThlChHSP%2Fdf%2FUgIyqA%2BD6Pdt9jm%2FpjNAl2A5jJTi5NQA734u8Zd9apQ%2BChwbMFKyUzR4Qzyp6XWy8JNlZOKdtvoW9r1lebMHOOLLAJzUzgexFBJuC%2By7bC%2F%2FmyvfrvSejjPMAaOjTFFS8EZOIU3oHysOhJLEkfp18%2B5sQKPxp5s3Z72qF1NIpR76QIgn3Iq3Bh26nyrPi%2BDzjM9Cri91e4zh7V02xWmguG1Vk20gQByTJoCcwSDuM63pRmpFWNeZRk%2F4H95nramIbME5GOLwe3%2BPpD5EbAXh6nW5Qg6%2Bh8Ouje%2B%2FFOieUt2NjbEKGSApZ%2BRQI5o1XwM8ZEVwc%2F%2FzmRx7Nta3pe5TU7ofjWXkGc0GATMKPnqMEGOqUBDGTJR4AXv4s%2Ff%2BlHZk%2BGE4W%2BUTGTSWUw54Vara1f0L%2FBw%2BavYXd4OZKn5djRNXmXhGWo%2FTQki1nLW1FfY0WNFM2OHVkp16ypxlQX4%2B3NH%2BoECExxXHiaZhXPc8iq8Jlvxun3jej67uRwTG%2BFO8ycQj1HQkdotDO4s2q72bfzRkHvZLLNt%2BGimAkcIKFOsTtiKtLNT4Qi9JEt52mv977v1IMsmk0N&X-Amz-Signature=da270b862df22c779aca64641f838fb819e426e932d85ad4c7ee68f74d23dfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SH5KXF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN4A3liqKw1F8brETXpsoAzcippfEoqfvkbnQFcVLHGwIgbtQJAOVAjCre4V0WwIJRCTwilSlwLyHmApwgRI3V25Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE3EbBnB11uMFc33%2FyrcA88cD5NSfFwUKW%2FwzrRbvd8uKi%2F5ZOyJqtXBY1ebuerdyg2EuOtl%2FdPBnlfzqHAg6sIBK5bzv2r%2FRgeivFCcuBOcRIFks0FhAzuqwOicWhjbKnaL0zaBlYKAB7NZPAjyQ0Y0JQVJ2ThnTqtl0N7GGsPU8zQ7ZGqrEbb0vVfuYc0sTUCF09QsXD2tkN9WjihbqkiEKjCKpPiRMXTt7BzunN5be%2BTuLEUYxyObERR4McmLk44ex%2FbBpAGddhoC4b97%2BCk%2BYnYSkthIHvThlChHSP%2Fdf%2FUgIyqA%2BD6Pdt9jm%2FpjNAl2A5jJTi5NQA734u8Zd9apQ%2BChwbMFKyUzR4Qzyp6XWy8JNlZOKdtvoW9r1lebMHOOLLAJzUzgexFBJuC%2By7bC%2F%2FmyvfrvSejjPMAaOjTFFS8EZOIU3oHysOhJLEkfp18%2B5sQKPxp5s3Z72qF1NIpR76QIgn3Iq3Bh26nyrPi%2BDzjM9Cri91e4zh7V02xWmguG1Vk20gQByTJoCcwSDuM63pRmpFWNeZRk%2F4H95nramIbME5GOLwe3%2BPpD5EbAXh6nW5Qg6%2Bh8Ouje%2B%2FFOieUt2NjbEKGSApZ%2BRQI5o1XwM8ZEVwc%2F%2FzmRx7Nta3pe5TU7ofjWXkGc0GATMKPnqMEGOqUBDGTJR4AXv4s%2Ff%2BlHZk%2BGE4W%2BUTGTSWUw54Vara1f0L%2FBw%2BavYXd4OZKn5djRNXmXhGWo%2FTQki1nLW1FfY0WNFM2OHVkp16ypxlQX4%2B3NH%2BoECExxXHiaZhXPc8iq8Jlvxun3jej67uRwTG%2BFO8ycQj1HQkdotDO4s2q72bfzRkHvZLLNt%2BGimAkcIKFOsTtiKtLNT4Qi9JEt52mv977v1IMsmk0N&X-Amz-Signature=a147d170de05613d275953bc9026d40bd641c4ba79b6aad842e728f5b8b35af5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SH5KXF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN4A3liqKw1F8brETXpsoAzcippfEoqfvkbnQFcVLHGwIgbtQJAOVAjCre4V0WwIJRCTwilSlwLyHmApwgRI3V25Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE3EbBnB11uMFc33%2FyrcA88cD5NSfFwUKW%2FwzrRbvd8uKi%2F5ZOyJqtXBY1ebuerdyg2EuOtl%2FdPBnlfzqHAg6sIBK5bzv2r%2FRgeivFCcuBOcRIFks0FhAzuqwOicWhjbKnaL0zaBlYKAB7NZPAjyQ0Y0JQVJ2ThnTqtl0N7GGsPU8zQ7ZGqrEbb0vVfuYc0sTUCF09QsXD2tkN9WjihbqkiEKjCKpPiRMXTt7BzunN5be%2BTuLEUYxyObERR4McmLk44ex%2FbBpAGddhoC4b97%2BCk%2BYnYSkthIHvThlChHSP%2Fdf%2FUgIyqA%2BD6Pdt9jm%2FpjNAl2A5jJTi5NQA734u8Zd9apQ%2BChwbMFKyUzR4Qzyp6XWy8JNlZOKdtvoW9r1lebMHOOLLAJzUzgexFBJuC%2By7bC%2F%2FmyvfrvSejjPMAaOjTFFS8EZOIU3oHysOhJLEkfp18%2B5sQKPxp5s3Z72qF1NIpR76QIgn3Iq3Bh26nyrPi%2BDzjM9Cri91e4zh7V02xWmguG1Vk20gQByTJoCcwSDuM63pRmpFWNeZRk%2F4H95nramIbME5GOLwe3%2BPpD5EbAXh6nW5Qg6%2Bh8Ouje%2B%2FFOieUt2NjbEKGSApZ%2BRQI5o1XwM8ZEVwc%2F%2FzmRx7Nta3pe5TU7ofjWXkGc0GATMKPnqMEGOqUBDGTJR4AXv4s%2Ff%2BlHZk%2BGE4W%2BUTGTSWUw54Vara1f0L%2FBw%2BavYXd4OZKn5djRNXmXhGWo%2FTQki1nLW1FfY0WNFM2OHVkp16ypxlQX4%2B3NH%2BoECExxXHiaZhXPc8iq8Jlvxun3jej67uRwTG%2BFO8ycQj1HQkdotDO4s2q72bfzRkHvZLLNt%2BGimAkcIKFOsTtiKtLNT4Qi9JEt52mv977v1IMsmk0N&X-Amz-Signature=0b4c678df3af7135844554a8db0c6979e140acd992fd19f94a8b1b516618c808&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
