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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2LOTRI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC8Ma7fCTxo4q81F%2BMQXOHlZdkIw7ZxBkWemkUc3%2BCRmgIhAORVQz9k%2FY%2FCvuM%2F4i155iyBAa%2BPsB8gaIBZWc6ve8VDKv8DCFwQABoMNjM3NDIzMTgzODA1Igx2hzBd8N%2BxDEiU0sYq3AMZqkcFOp5bw%2B3dPCNMrpAVl3bfcp4td9Rk0HhsLT6MVV7IBDg3hdiAWYmUyl4s8hQl%2FFx6n1CMom%2BdNrGkByT%2Fs2pngpYO2Gi1nsdJ%2F2JJ%2BYQie5Hz7%2BpOUEpIpCF5iPt1OTV%2FfvPofge8I%2Fmkk%2BXP0oUL%2BeJpudNuJFWT%2Fy52XNQHqmG5a4bE0PpIcWJP0%2FqnZ6qqdvdW6vjSugY3T4ijWCXqEDos81CnUGFc1vM4Ka%2BmqvjJnzRBJ2UnQJJmXu1VHAn%2BVRDnfl81evsPG0JkabbYwt2wZU3%2BBgq3x7mu6y28Jzcy%2F1PrBV1RWD93H2SpCIyZvdv3mNQMl51HIodiEHbt7tVc%2Bq%2BCurIz%2FiY69JfIKhe8ZuH5OZ5M3cYYzN8VZbFTSaaUqZlWe6bS%2BPDaPJ%2F63%2B9WSSoJ0KfqdiSslQM0iXvD96uR2P3ZGOxnd47%2BYvRp%2BVW2gmLU5VyXRl25MTm7qHB5UgrCSCR8OI%2Fdw2qnuCCtg5f4%2FSBMVdTYqmxdjTq6FivqQP01GVkNLobo2qYE4bB%2BMDEKk1O1mdjtdeC57vEh88ccF58DsdfAlJNX5IsLVHUwfDEOzKFh1RR26kcwCov6C%2FkJbC80yYBiLXefbZ1hzH7SX6hjVzDak97DBjqkATVkrK43ejyNbe9TNqT%2BYgKX8ZRxadWcYvP8HVdEHqRvFBjiml3qtddRF1gPatv5dUeNpLTlMv64kiVgOETnfuHhVw8yPyBqDFlKMqai8Gt%2FAhOFXfM5Eqj3PLEQ77mgfZcwoRv0kQRYrQveUyKeVdZoiSlPGl6jubxcaO7ge703VguL6OT4zEotuTLMsI5QV7ej3Lwnd7sABn6MlimPbOCIljWu&X-Amz-Signature=e8a23d098d5034accb38059b2b9d00c6d9f617b4ac3468448b26017a13c33381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2LOTRI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC8Ma7fCTxo4q81F%2BMQXOHlZdkIw7ZxBkWemkUc3%2BCRmgIhAORVQz9k%2FY%2FCvuM%2F4i155iyBAa%2BPsB8gaIBZWc6ve8VDKv8DCFwQABoMNjM3NDIzMTgzODA1Igx2hzBd8N%2BxDEiU0sYq3AMZqkcFOp5bw%2B3dPCNMrpAVl3bfcp4td9Rk0HhsLT6MVV7IBDg3hdiAWYmUyl4s8hQl%2FFx6n1CMom%2BdNrGkByT%2Fs2pngpYO2Gi1nsdJ%2F2JJ%2BYQie5Hz7%2BpOUEpIpCF5iPt1OTV%2FfvPofge8I%2Fmkk%2BXP0oUL%2BeJpudNuJFWT%2Fy52XNQHqmG5a4bE0PpIcWJP0%2FqnZ6qqdvdW6vjSugY3T4ijWCXqEDos81CnUGFc1vM4Ka%2BmqvjJnzRBJ2UnQJJmXu1VHAn%2BVRDnfl81evsPG0JkabbYwt2wZU3%2BBgq3x7mu6y28Jzcy%2F1PrBV1RWD93H2SpCIyZvdv3mNQMl51HIodiEHbt7tVc%2Bq%2BCurIz%2FiY69JfIKhe8ZuH5OZ5M3cYYzN8VZbFTSaaUqZlWe6bS%2BPDaPJ%2F63%2B9WSSoJ0KfqdiSslQM0iXvD96uR2P3ZGOxnd47%2BYvRp%2BVW2gmLU5VyXRl25MTm7qHB5UgrCSCR8OI%2Fdw2qnuCCtg5f4%2FSBMVdTYqmxdjTq6FivqQP01GVkNLobo2qYE4bB%2BMDEKk1O1mdjtdeC57vEh88ccF58DsdfAlJNX5IsLVHUwfDEOzKFh1RR26kcwCov6C%2FkJbC80yYBiLXefbZ1hzH7SX6hjVzDak97DBjqkATVkrK43ejyNbe9TNqT%2BYgKX8ZRxadWcYvP8HVdEHqRvFBjiml3qtddRF1gPatv5dUeNpLTlMv64kiVgOETnfuHhVw8yPyBqDFlKMqai8Gt%2FAhOFXfM5Eqj3PLEQ77mgfZcwoRv0kQRYrQveUyKeVdZoiSlPGl6jubxcaO7ge703VguL6OT4zEotuTLMsI5QV7ej3Lwnd7sABn6MlimPbOCIljWu&X-Amz-Signature=042f08cbab29dae566c5f44f7553be5adde61c1f30d33dbbe54f6cbb8448030f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2LOTRI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC8Ma7fCTxo4q81F%2BMQXOHlZdkIw7ZxBkWemkUc3%2BCRmgIhAORVQz9k%2FY%2FCvuM%2F4i155iyBAa%2BPsB8gaIBZWc6ve8VDKv8DCFwQABoMNjM3NDIzMTgzODA1Igx2hzBd8N%2BxDEiU0sYq3AMZqkcFOp5bw%2B3dPCNMrpAVl3bfcp4td9Rk0HhsLT6MVV7IBDg3hdiAWYmUyl4s8hQl%2FFx6n1CMom%2BdNrGkByT%2Fs2pngpYO2Gi1nsdJ%2F2JJ%2BYQie5Hz7%2BpOUEpIpCF5iPt1OTV%2FfvPofge8I%2Fmkk%2BXP0oUL%2BeJpudNuJFWT%2Fy52XNQHqmG5a4bE0PpIcWJP0%2FqnZ6qqdvdW6vjSugY3T4ijWCXqEDos81CnUGFc1vM4Ka%2BmqvjJnzRBJ2UnQJJmXu1VHAn%2BVRDnfl81evsPG0JkabbYwt2wZU3%2BBgq3x7mu6y28Jzcy%2F1PrBV1RWD93H2SpCIyZvdv3mNQMl51HIodiEHbt7tVc%2Bq%2BCurIz%2FiY69JfIKhe8ZuH5OZ5M3cYYzN8VZbFTSaaUqZlWe6bS%2BPDaPJ%2F63%2B9WSSoJ0KfqdiSslQM0iXvD96uR2P3ZGOxnd47%2BYvRp%2BVW2gmLU5VyXRl25MTm7qHB5UgrCSCR8OI%2Fdw2qnuCCtg5f4%2FSBMVdTYqmxdjTq6FivqQP01GVkNLobo2qYE4bB%2BMDEKk1O1mdjtdeC57vEh88ccF58DsdfAlJNX5IsLVHUwfDEOzKFh1RR26kcwCov6C%2FkJbC80yYBiLXefbZ1hzH7SX6hjVzDak97DBjqkATVkrK43ejyNbe9TNqT%2BYgKX8ZRxadWcYvP8HVdEHqRvFBjiml3qtddRF1gPatv5dUeNpLTlMv64kiVgOETnfuHhVw8yPyBqDFlKMqai8Gt%2FAhOFXfM5Eqj3PLEQ77mgfZcwoRv0kQRYrQveUyKeVdZoiSlPGl6jubxcaO7ge703VguL6OT4zEotuTLMsI5QV7ej3Lwnd7sABn6MlimPbOCIljWu&X-Amz-Signature=c090fb6bb577b857f7d41ffb5dd003b7c7cf46a3db9fe2d758cd7331decf0b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2LOTRI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC8Ma7fCTxo4q81F%2BMQXOHlZdkIw7ZxBkWemkUc3%2BCRmgIhAORVQz9k%2FY%2FCvuM%2F4i155iyBAa%2BPsB8gaIBZWc6ve8VDKv8DCFwQABoMNjM3NDIzMTgzODA1Igx2hzBd8N%2BxDEiU0sYq3AMZqkcFOp5bw%2B3dPCNMrpAVl3bfcp4td9Rk0HhsLT6MVV7IBDg3hdiAWYmUyl4s8hQl%2FFx6n1CMom%2BdNrGkByT%2Fs2pngpYO2Gi1nsdJ%2F2JJ%2BYQie5Hz7%2BpOUEpIpCF5iPt1OTV%2FfvPofge8I%2Fmkk%2BXP0oUL%2BeJpudNuJFWT%2Fy52XNQHqmG5a4bE0PpIcWJP0%2FqnZ6qqdvdW6vjSugY3T4ijWCXqEDos81CnUGFc1vM4Ka%2BmqvjJnzRBJ2UnQJJmXu1VHAn%2BVRDnfl81evsPG0JkabbYwt2wZU3%2BBgq3x7mu6y28Jzcy%2F1PrBV1RWD93H2SpCIyZvdv3mNQMl51HIodiEHbt7tVc%2Bq%2BCurIz%2FiY69JfIKhe8ZuH5OZ5M3cYYzN8VZbFTSaaUqZlWe6bS%2BPDaPJ%2F63%2B9WSSoJ0KfqdiSslQM0iXvD96uR2P3ZGOxnd47%2BYvRp%2BVW2gmLU5VyXRl25MTm7qHB5UgrCSCR8OI%2Fdw2qnuCCtg5f4%2FSBMVdTYqmxdjTq6FivqQP01GVkNLobo2qYE4bB%2BMDEKk1O1mdjtdeC57vEh88ccF58DsdfAlJNX5IsLVHUwfDEOzKFh1RR26kcwCov6C%2FkJbC80yYBiLXefbZ1hzH7SX6hjVzDak97DBjqkATVkrK43ejyNbe9TNqT%2BYgKX8ZRxadWcYvP8HVdEHqRvFBjiml3qtddRF1gPatv5dUeNpLTlMv64kiVgOETnfuHhVw8yPyBqDFlKMqai8Gt%2FAhOFXfM5Eqj3PLEQ77mgfZcwoRv0kQRYrQveUyKeVdZoiSlPGl6jubxcaO7ge703VguL6OT4zEotuTLMsI5QV7ej3Lwnd7sABn6MlimPbOCIljWu&X-Amz-Signature=e96f581db557defb0f5ac8ef112cac38ca8217004d0030db6851d501774b5216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2LOTRI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC8Ma7fCTxo4q81F%2BMQXOHlZdkIw7ZxBkWemkUc3%2BCRmgIhAORVQz9k%2FY%2FCvuM%2F4i155iyBAa%2BPsB8gaIBZWc6ve8VDKv8DCFwQABoMNjM3NDIzMTgzODA1Igx2hzBd8N%2BxDEiU0sYq3AMZqkcFOp5bw%2B3dPCNMrpAVl3bfcp4td9Rk0HhsLT6MVV7IBDg3hdiAWYmUyl4s8hQl%2FFx6n1CMom%2BdNrGkByT%2Fs2pngpYO2Gi1nsdJ%2F2JJ%2BYQie5Hz7%2BpOUEpIpCF5iPt1OTV%2FfvPofge8I%2Fmkk%2BXP0oUL%2BeJpudNuJFWT%2Fy52XNQHqmG5a4bE0PpIcWJP0%2FqnZ6qqdvdW6vjSugY3T4ijWCXqEDos81CnUGFc1vM4Ka%2BmqvjJnzRBJ2UnQJJmXu1VHAn%2BVRDnfl81evsPG0JkabbYwt2wZU3%2BBgq3x7mu6y28Jzcy%2F1PrBV1RWD93H2SpCIyZvdv3mNQMl51HIodiEHbt7tVc%2Bq%2BCurIz%2FiY69JfIKhe8ZuH5OZ5M3cYYzN8VZbFTSaaUqZlWe6bS%2BPDaPJ%2F63%2B9WSSoJ0KfqdiSslQM0iXvD96uR2P3ZGOxnd47%2BYvRp%2BVW2gmLU5VyXRl25MTm7qHB5UgrCSCR8OI%2Fdw2qnuCCtg5f4%2FSBMVdTYqmxdjTq6FivqQP01GVkNLobo2qYE4bB%2BMDEKk1O1mdjtdeC57vEh88ccF58DsdfAlJNX5IsLVHUwfDEOzKFh1RR26kcwCov6C%2FkJbC80yYBiLXefbZ1hzH7SX6hjVzDak97DBjqkATVkrK43ejyNbe9TNqT%2BYgKX8ZRxadWcYvP8HVdEHqRvFBjiml3qtddRF1gPatv5dUeNpLTlMv64kiVgOETnfuHhVw8yPyBqDFlKMqai8Gt%2FAhOFXfM5Eqj3PLEQ77mgfZcwoRv0kQRYrQveUyKeVdZoiSlPGl6jubxcaO7ge703VguL6OT4zEotuTLMsI5QV7ej3Lwnd7sABn6MlimPbOCIljWu&X-Amz-Signature=cb1712403a981baa5004b98102312bb9e8bab3f9c6c3bc796b40ac6c1cd07f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2LOTRI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC8Ma7fCTxo4q81F%2BMQXOHlZdkIw7ZxBkWemkUc3%2BCRmgIhAORVQz9k%2FY%2FCvuM%2F4i155iyBAa%2BPsB8gaIBZWc6ve8VDKv8DCFwQABoMNjM3NDIzMTgzODA1Igx2hzBd8N%2BxDEiU0sYq3AMZqkcFOp5bw%2B3dPCNMrpAVl3bfcp4td9Rk0HhsLT6MVV7IBDg3hdiAWYmUyl4s8hQl%2FFx6n1CMom%2BdNrGkByT%2Fs2pngpYO2Gi1nsdJ%2F2JJ%2BYQie5Hz7%2BpOUEpIpCF5iPt1OTV%2FfvPofge8I%2Fmkk%2BXP0oUL%2BeJpudNuJFWT%2Fy52XNQHqmG5a4bE0PpIcWJP0%2FqnZ6qqdvdW6vjSugY3T4ijWCXqEDos81CnUGFc1vM4Ka%2BmqvjJnzRBJ2UnQJJmXu1VHAn%2BVRDnfl81evsPG0JkabbYwt2wZU3%2BBgq3x7mu6y28Jzcy%2F1PrBV1RWD93H2SpCIyZvdv3mNQMl51HIodiEHbt7tVc%2Bq%2BCurIz%2FiY69JfIKhe8ZuH5OZ5M3cYYzN8VZbFTSaaUqZlWe6bS%2BPDaPJ%2F63%2B9WSSoJ0KfqdiSslQM0iXvD96uR2P3ZGOxnd47%2BYvRp%2BVW2gmLU5VyXRl25MTm7qHB5UgrCSCR8OI%2Fdw2qnuCCtg5f4%2FSBMVdTYqmxdjTq6FivqQP01GVkNLobo2qYE4bB%2BMDEKk1O1mdjtdeC57vEh88ccF58DsdfAlJNX5IsLVHUwfDEOzKFh1RR26kcwCov6C%2FkJbC80yYBiLXefbZ1hzH7SX6hjVzDak97DBjqkATVkrK43ejyNbe9TNqT%2BYgKX8ZRxadWcYvP8HVdEHqRvFBjiml3qtddRF1gPatv5dUeNpLTlMv64kiVgOETnfuHhVw8yPyBqDFlKMqai8Gt%2FAhOFXfM5Eqj3PLEQ77mgfZcwoRv0kQRYrQveUyKeVdZoiSlPGl6jubxcaO7ge703VguL6OT4zEotuTLMsI5QV7ej3Lwnd7sABn6MlimPbOCIljWu&X-Amz-Signature=c2625aa134aa6f2c516c3776700e64370251a2bbd15b89531b1d0c36fe0e716d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2LOTRI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC8Ma7fCTxo4q81F%2BMQXOHlZdkIw7ZxBkWemkUc3%2BCRmgIhAORVQz9k%2FY%2FCvuM%2F4i155iyBAa%2BPsB8gaIBZWc6ve8VDKv8DCFwQABoMNjM3NDIzMTgzODA1Igx2hzBd8N%2BxDEiU0sYq3AMZqkcFOp5bw%2B3dPCNMrpAVl3bfcp4td9Rk0HhsLT6MVV7IBDg3hdiAWYmUyl4s8hQl%2FFx6n1CMom%2BdNrGkByT%2Fs2pngpYO2Gi1nsdJ%2F2JJ%2BYQie5Hz7%2BpOUEpIpCF5iPt1OTV%2FfvPofge8I%2Fmkk%2BXP0oUL%2BeJpudNuJFWT%2Fy52XNQHqmG5a4bE0PpIcWJP0%2FqnZ6qqdvdW6vjSugY3T4ijWCXqEDos81CnUGFc1vM4Ka%2BmqvjJnzRBJ2UnQJJmXu1VHAn%2BVRDnfl81evsPG0JkabbYwt2wZU3%2BBgq3x7mu6y28Jzcy%2F1PrBV1RWD93H2SpCIyZvdv3mNQMl51HIodiEHbt7tVc%2Bq%2BCurIz%2FiY69JfIKhe8ZuH5OZ5M3cYYzN8VZbFTSaaUqZlWe6bS%2BPDaPJ%2F63%2B9WSSoJ0KfqdiSslQM0iXvD96uR2P3ZGOxnd47%2BYvRp%2BVW2gmLU5VyXRl25MTm7qHB5UgrCSCR8OI%2Fdw2qnuCCtg5f4%2FSBMVdTYqmxdjTq6FivqQP01GVkNLobo2qYE4bB%2BMDEKk1O1mdjtdeC57vEh88ccF58DsdfAlJNX5IsLVHUwfDEOzKFh1RR26kcwCov6C%2FkJbC80yYBiLXefbZ1hzH7SX6hjVzDak97DBjqkATVkrK43ejyNbe9TNqT%2BYgKX8ZRxadWcYvP8HVdEHqRvFBjiml3qtddRF1gPatv5dUeNpLTlMv64kiVgOETnfuHhVw8yPyBqDFlKMqai8Gt%2FAhOFXfM5Eqj3PLEQ77mgfZcwoRv0kQRYrQveUyKeVdZoiSlPGl6jubxcaO7ge703VguL6OT4zEotuTLMsI5QV7ej3Lwnd7sABn6MlimPbOCIljWu&X-Amz-Signature=80e48889dc627d98c5c60ecfdf4c22489a9b0f1b46d24955a05ecf0c6c51672c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
