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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L42D4OU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDTokm54CtsQcjTe3En%2Bsj9MzNgzorKZ6Jcx%2BnzV9hZrwIgfGRW4o6nTJgaOD7Wx2d%2Bi3EsVA6CKuV%2B4CyAtpFJ3pMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDrHh%2BPN5FHC9rcN6yrcA5OVU8E89pXKeAeBjIg1m8PHhoMShX%2BRLAra21WL70BLQKSpL6hBPNdRB3EWfPX%2BljXSZjx7r%2Fj2v5kNV4R8tNND5a%2B1K4R%2F1wGhxrUqM5RoFUNrfWxJhGVCKtS5rDSc5KyiLPcrI%2FT1w6DcE7zo1e5dyfFOK6yyYN3Hcvl9yMvLmXaKQJcAb7qUn4cxf%2F8G9Kii1rX3p%2FAHhMFxijNUMen68z9EEq6FQ9TIwxHBjXHPcm3HmWfEhECswfdje5zUwLxjWuTdu6XovRWOaotliNAL%2FbgToq5mAEQXdSt%2F8795l3iWvEhrtJl8aDKKwv7p6R9gvj813hsreRJrdGLtvmq0hZmBZCRdtt9ltQcWZhQRsRPAQYpy5E1F4r2LQzYEHMWenWXeBbD3wxa%2BiME%2F%2B0B5AwO5uTYrwEqwdec0AqhtXKtzCu%2F9b3ypejifQsUd8CdEh0iagyxUoRLfdfMFn4Wh8w68B28HmerytgSfn6vmId9k9gGQq8NfPrZ9Vfd0Qc8RKv9NeFrSEFaxu5qD5itt8i5fLGkaQ15DvtPA6H62pZkO1MwB02cTuEyQZfNQQFK%2FIYdE%2BGxLVWVw%2BXO0Goq6aFK6x6RNhgbEtoEkdBvNtWqHZI7sB1GNCX8MMKzhjcQGOqUBu%2F3GUfvFyuoJL2KAEBwJ9IWmQyRMFtH%2B8sN1sAg8QeFP7Z4T790xuu2SZPyIffgcVsZZeomxaL9nuLrEUIfL2cbggrqP5bOexchM9xQK%2BA56XRilTuY8GYod%2BXEL78DGBzlBAIKX%2FszxSn7%2Bf%2FvVOR%2BtkiKxbHZkTiQWnm%2BlFNF2Kz%2FVAsuTEj4WdqqMGDtOfM%2FxyYA3CjeLm57PEO0ULyReIqYI&X-Amz-Signature=509133b9802dc47c1f9a59b012291d5554f69fc472777a4ff33a0611877c8c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L42D4OU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDTokm54CtsQcjTe3En%2Bsj9MzNgzorKZ6Jcx%2BnzV9hZrwIgfGRW4o6nTJgaOD7Wx2d%2Bi3EsVA6CKuV%2B4CyAtpFJ3pMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDrHh%2BPN5FHC9rcN6yrcA5OVU8E89pXKeAeBjIg1m8PHhoMShX%2BRLAra21WL70BLQKSpL6hBPNdRB3EWfPX%2BljXSZjx7r%2Fj2v5kNV4R8tNND5a%2B1K4R%2F1wGhxrUqM5RoFUNrfWxJhGVCKtS5rDSc5KyiLPcrI%2FT1w6DcE7zo1e5dyfFOK6yyYN3Hcvl9yMvLmXaKQJcAb7qUn4cxf%2F8G9Kii1rX3p%2FAHhMFxijNUMen68z9EEq6FQ9TIwxHBjXHPcm3HmWfEhECswfdje5zUwLxjWuTdu6XovRWOaotliNAL%2FbgToq5mAEQXdSt%2F8795l3iWvEhrtJl8aDKKwv7p6R9gvj813hsreRJrdGLtvmq0hZmBZCRdtt9ltQcWZhQRsRPAQYpy5E1F4r2LQzYEHMWenWXeBbD3wxa%2BiME%2F%2B0B5AwO5uTYrwEqwdec0AqhtXKtzCu%2F9b3ypejifQsUd8CdEh0iagyxUoRLfdfMFn4Wh8w68B28HmerytgSfn6vmId9k9gGQq8NfPrZ9Vfd0Qc8RKv9NeFrSEFaxu5qD5itt8i5fLGkaQ15DvtPA6H62pZkO1MwB02cTuEyQZfNQQFK%2FIYdE%2BGxLVWVw%2BXO0Goq6aFK6x6RNhgbEtoEkdBvNtWqHZI7sB1GNCX8MMKzhjcQGOqUBu%2F3GUfvFyuoJL2KAEBwJ9IWmQyRMFtH%2B8sN1sAg8QeFP7Z4T790xuu2SZPyIffgcVsZZeomxaL9nuLrEUIfL2cbggrqP5bOexchM9xQK%2BA56XRilTuY8GYod%2BXEL78DGBzlBAIKX%2FszxSn7%2Bf%2FvVOR%2BtkiKxbHZkTiQWnm%2BlFNF2Kz%2FVAsuTEj4WdqqMGDtOfM%2FxyYA3CjeLm57PEO0ULyReIqYI&X-Amz-Signature=3c42844fa437b3232418f4b2025f8061597ca8f51c0233182d0c09b694bb9c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L42D4OU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDTokm54CtsQcjTe3En%2Bsj9MzNgzorKZ6Jcx%2BnzV9hZrwIgfGRW4o6nTJgaOD7Wx2d%2Bi3EsVA6CKuV%2B4CyAtpFJ3pMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDrHh%2BPN5FHC9rcN6yrcA5OVU8E89pXKeAeBjIg1m8PHhoMShX%2BRLAra21WL70BLQKSpL6hBPNdRB3EWfPX%2BljXSZjx7r%2Fj2v5kNV4R8tNND5a%2B1K4R%2F1wGhxrUqM5RoFUNrfWxJhGVCKtS5rDSc5KyiLPcrI%2FT1w6DcE7zo1e5dyfFOK6yyYN3Hcvl9yMvLmXaKQJcAb7qUn4cxf%2F8G9Kii1rX3p%2FAHhMFxijNUMen68z9EEq6FQ9TIwxHBjXHPcm3HmWfEhECswfdje5zUwLxjWuTdu6XovRWOaotliNAL%2FbgToq5mAEQXdSt%2F8795l3iWvEhrtJl8aDKKwv7p6R9gvj813hsreRJrdGLtvmq0hZmBZCRdtt9ltQcWZhQRsRPAQYpy5E1F4r2LQzYEHMWenWXeBbD3wxa%2BiME%2F%2B0B5AwO5uTYrwEqwdec0AqhtXKtzCu%2F9b3ypejifQsUd8CdEh0iagyxUoRLfdfMFn4Wh8w68B28HmerytgSfn6vmId9k9gGQq8NfPrZ9Vfd0Qc8RKv9NeFrSEFaxu5qD5itt8i5fLGkaQ15DvtPA6H62pZkO1MwB02cTuEyQZfNQQFK%2FIYdE%2BGxLVWVw%2BXO0Goq6aFK6x6RNhgbEtoEkdBvNtWqHZI7sB1GNCX8MMKzhjcQGOqUBu%2F3GUfvFyuoJL2KAEBwJ9IWmQyRMFtH%2B8sN1sAg8QeFP7Z4T790xuu2SZPyIffgcVsZZeomxaL9nuLrEUIfL2cbggrqP5bOexchM9xQK%2BA56XRilTuY8GYod%2BXEL78DGBzlBAIKX%2FszxSn7%2Bf%2FvVOR%2BtkiKxbHZkTiQWnm%2BlFNF2Kz%2FVAsuTEj4WdqqMGDtOfM%2FxyYA3CjeLm57PEO0ULyReIqYI&X-Amz-Signature=2f17fe7a00e4c9fcbfd3733f0dfa0a7a96454d64dcd126526884cbad99a92f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L42D4OU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDTokm54CtsQcjTe3En%2Bsj9MzNgzorKZ6Jcx%2BnzV9hZrwIgfGRW4o6nTJgaOD7Wx2d%2Bi3EsVA6CKuV%2B4CyAtpFJ3pMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDrHh%2BPN5FHC9rcN6yrcA5OVU8E89pXKeAeBjIg1m8PHhoMShX%2BRLAra21WL70BLQKSpL6hBPNdRB3EWfPX%2BljXSZjx7r%2Fj2v5kNV4R8tNND5a%2B1K4R%2F1wGhxrUqM5RoFUNrfWxJhGVCKtS5rDSc5KyiLPcrI%2FT1w6DcE7zo1e5dyfFOK6yyYN3Hcvl9yMvLmXaKQJcAb7qUn4cxf%2F8G9Kii1rX3p%2FAHhMFxijNUMen68z9EEq6FQ9TIwxHBjXHPcm3HmWfEhECswfdje5zUwLxjWuTdu6XovRWOaotliNAL%2FbgToq5mAEQXdSt%2F8795l3iWvEhrtJl8aDKKwv7p6R9gvj813hsreRJrdGLtvmq0hZmBZCRdtt9ltQcWZhQRsRPAQYpy5E1F4r2LQzYEHMWenWXeBbD3wxa%2BiME%2F%2B0B5AwO5uTYrwEqwdec0AqhtXKtzCu%2F9b3ypejifQsUd8CdEh0iagyxUoRLfdfMFn4Wh8w68B28HmerytgSfn6vmId9k9gGQq8NfPrZ9Vfd0Qc8RKv9NeFrSEFaxu5qD5itt8i5fLGkaQ15DvtPA6H62pZkO1MwB02cTuEyQZfNQQFK%2FIYdE%2BGxLVWVw%2BXO0Goq6aFK6x6RNhgbEtoEkdBvNtWqHZI7sB1GNCX8MMKzhjcQGOqUBu%2F3GUfvFyuoJL2KAEBwJ9IWmQyRMFtH%2B8sN1sAg8QeFP7Z4T790xuu2SZPyIffgcVsZZeomxaL9nuLrEUIfL2cbggrqP5bOexchM9xQK%2BA56XRilTuY8GYod%2BXEL78DGBzlBAIKX%2FszxSn7%2Bf%2FvVOR%2BtkiKxbHZkTiQWnm%2BlFNF2Kz%2FVAsuTEj4WdqqMGDtOfM%2FxyYA3CjeLm57PEO0ULyReIqYI&X-Amz-Signature=e9c45b591df779bf9f6c59e778d60c6f146c510d7a52d4ef0762be8c4788ebf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L42D4OU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDTokm54CtsQcjTe3En%2Bsj9MzNgzorKZ6Jcx%2BnzV9hZrwIgfGRW4o6nTJgaOD7Wx2d%2Bi3EsVA6CKuV%2B4CyAtpFJ3pMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDrHh%2BPN5FHC9rcN6yrcA5OVU8E89pXKeAeBjIg1m8PHhoMShX%2BRLAra21WL70BLQKSpL6hBPNdRB3EWfPX%2BljXSZjx7r%2Fj2v5kNV4R8tNND5a%2B1K4R%2F1wGhxrUqM5RoFUNrfWxJhGVCKtS5rDSc5KyiLPcrI%2FT1w6DcE7zo1e5dyfFOK6yyYN3Hcvl9yMvLmXaKQJcAb7qUn4cxf%2F8G9Kii1rX3p%2FAHhMFxijNUMen68z9EEq6FQ9TIwxHBjXHPcm3HmWfEhECswfdje5zUwLxjWuTdu6XovRWOaotliNAL%2FbgToq5mAEQXdSt%2F8795l3iWvEhrtJl8aDKKwv7p6R9gvj813hsreRJrdGLtvmq0hZmBZCRdtt9ltQcWZhQRsRPAQYpy5E1F4r2LQzYEHMWenWXeBbD3wxa%2BiME%2F%2B0B5AwO5uTYrwEqwdec0AqhtXKtzCu%2F9b3ypejifQsUd8CdEh0iagyxUoRLfdfMFn4Wh8w68B28HmerytgSfn6vmId9k9gGQq8NfPrZ9Vfd0Qc8RKv9NeFrSEFaxu5qD5itt8i5fLGkaQ15DvtPA6H62pZkO1MwB02cTuEyQZfNQQFK%2FIYdE%2BGxLVWVw%2BXO0Goq6aFK6x6RNhgbEtoEkdBvNtWqHZI7sB1GNCX8MMKzhjcQGOqUBu%2F3GUfvFyuoJL2KAEBwJ9IWmQyRMFtH%2B8sN1sAg8QeFP7Z4T790xuu2SZPyIffgcVsZZeomxaL9nuLrEUIfL2cbggrqP5bOexchM9xQK%2BA56XRilTuY8GYod%2BXEL78DGBzlBAIKX%2FszxSn7%2Bf%2FvVOR%2BtkiKxbHZkTiQWnm%2BlFNF2Kz%2FVAsuTEj4WdqqMGDtOfM%2FxyYA3CjeLm57PEO0ULyReIqYI&X-Amz-Signature=d54913dd21db290056f77a497bc5beef86892248c6459aef224b1489e62628f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L42D4OU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDTokm54CtsQcjTe3En%2Bsj9MzNgzorKZ6Jcx%2BnzV9hZrwIgfGRW4o6nTJgaOD7Wx2d%2Bi3EsVA6CKuV%2B4CyAtpFJ3pMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDrHh%2BPN5FHC9rcN6yrcA5OVU8E89pXKeAeBjIg1m8PHhoMShX%2BRLAra21WL70BLQKSpL6hBPNdRB3EWfPX%2BljXSZjx7r%2Fj2v5kNV4R8tNND5a%2B1K4R%2F1wGhxrUqM5RoFUNrfWxJhGVCKtS5rDSc5KyiLPcrI%2FT1w6DcE7zo1e5dyfFOK6yyYN3Hcvl9yMvLmXaKQJcAb7qUn4cxf%2F8G9Kii1rX3p%2FAHhMFxijNUMen68z9EEq6FQ9TIwxHBjXHPcm3HmWfEhECswfdje5zUwLxjWuTdu6XovRWOaotliNAL%2FbgToq5mAEQXdSt%2F8795l3iWvEhrtJl8aDKKwv7p6R9gvj813hsreRJrdGLtvmq0hZmBZCRdtt9ltQcWZhQRsRPAQYpy5E1F4r2LQzYEHMWenWXeBbD3wxa%2BiME%2F%2B0B5AwO5uTYrwEqwdec0AqhtXKtzCu%2F9b3ypejifQsUd8CdEh0iagyxUoRLfdfMFn4Wh8w68B28HmerytgSfn6vmId9k9gGQq8NfPrZ9Vfd0Qc8RKv9NeFrSEFaxu5qD5itt8i5fLGkaQ15DvtPA6H62pZkO1MwB02cTuEyQZfNQQFK%2FIYdE%2BGxLVWVw%2BXO0Goq6aFK6x6RNhgbEtoEkdBvNtWqHZI7sB1GNCX8MMKzhjcQGOqUBu%2F3GUfvFyuoJL2KAEBwJ9IWmQyRMFtH%2B8sN1sAg8QeFP7Z4T790xuu2SZPyIffgcVsZZeomxaL9nuLrEUIfL2cbggrqP5bOexchM9xQK%2BA56XRilTuY8GYod%2BXEL78DGBzlBAIKX%2FszxSn7%2Bf%2FvVOR%2BtkiKxbHZkTiQWnm%2BlFNF2Kz%2FVAsuTEj4WdqqMGDtOfM%2FxyYA3CjeLm57PEO0ULyReIqYI&X-Amz-Signature=219a8aefcb943722bf77e196d513fcc93bd1407b3940445a1ea2347bc22aa430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L42D4OU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDTokm54CtsQcjTe3En%2Bsj9MzNgzorKZ6Jcx%2BnzV9hZrwIgfGRW4o6nTJgaOD7Wx2d%2Bi3EsVA6CKuV%2B4CyAtpFJ3pMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDrHh%2BPN5FHC9rcN6yrcA5OVU8E89pXKeAeBjIg1m8PHhoMShX%2BRLAra21WL70BLQKSpL6hBPNdRB3EWfPX%2BljXSZjx7r%2Fj2v5kNV4R8tNND5a%2B1K4R%2F1wGhxrUqM5RoFUNrfWxJhGVCKtS5rDSc5KyiLPcrI%2FT1w6DcE7zo1e5dyfFOK6yyYN3Hcvl9yMvLmXaKQJcAb7qUn4cxf%2F8G9Kii1rX3p%2FAHhMFxijNUMen68z9EEq6FQ9TIwxHBjXHPcm3HmWfEhECswfdje5zUwLxjWuTdu6XovRWOaotliNAL%2FbgToq5mAEQXdSt%2F8795l3iWvEhrtJl8aDKKwv7p6R9gvj813hsreRJrdGLtvmq0hZmBZCRdtt9ltQcWZhQRsRPAQYpy5E1F4r2LQzYEHMWenWXeBbD3wxa%2BiME%2F%2B0B5AwO5uTYrwEqwdec0AqhtXKtzCu%2F9b3ypejifQsUd8CdEh0iagyxUoRLfdfMFn4Wh8w68B28HmerytgSfn6vmId9k9gGQq8NfPrZ9Vfd0Qc8RKv9NeFrSEFaxu5qD5itt8i5fLGkaQ15DvtPA6H62pZkO1MwB02cTuEyQZfNQQFK%2FIYdE%2BGxLVWVw%2BXO0Goq6aFK6x6RNhgbEtoEkdBvNtWqHZI7sB1GNCX8MMKzhjcQGOqUBu%2F3GUfvFyuoJL2KAEBwJ9IWmQyRMFtH%2B8sN1sAg8QeFP7Z4T790xuu2SZPyIffgcVsZZeomxaL9nuLrEUIfL2cbggrqP5bOexchM9xQK%2BA56XRilTuY8GYod%2BXEL78DGBzlBAIKX%2FszxSn7%2Bf%2FvVOR%2BtkiKxbHZkTiQWnm%2BlFNF2Kz%2FVAsuTEj4WdqqMGDtOfM%2FxyYA3CjeLm57PEO0ULyReIqYI&X-Amz-Signature=7bf3fdae1e57ba8a59d65d3f282a3537ae0e7a04bb285df3f900438603d1b988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
