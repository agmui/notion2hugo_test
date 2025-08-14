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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLODNOUV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6cfYx6zHV7YJFmlZ5xUSs%2BNNJ1LOATKTWCMi4D2t3uAiEAudd4sATE42ug6eC5pUPO1zBL5ll8aYqQX0CuFrupAvMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCn6GwL2DaFAA3BlDCrcA%2BEXH0p4UNfoi%2FWRfFFogEpzKP4pxvOCVY%2BvVXbB2E9pAH2U4hzNGPbNisi3%2BADxt9xGwpKcgHEOIBAzXYANsIXzifrAEQfxuXtiv2OPcWFVqKh8bA8WO8YxEp4yh5YVZkH8axsCypiASJ61qNuBlmwjpXSQnkirIsnddeZtxUnVjY1PXlz%2BFS2oVuTpJrpALVficD6xEw7m70kkVI4DP%2F0TIEChcBN486KLV8UPkl46qMS9f9wO8H8njibap%2F93LI4pKo8MU0Vf%2B1W4zVu%2FIH5DETlsHfDUmXNRej%2BOULTihVSrVIQ4%2BtZREmFsVaaYT91%2FSo%2Bohe0U7B1oVnV4LQySXtGK9a0W33yARIAqVPjuMMD8DqDvIQs6nHMJv1hVecmK1g1OEyGRgbSfIx2W1fGKSu4w3H5bF31s0EaA0EHTMfJHtogovE1YprpKgqPlL5NnyhJv%2FjmUdmgx0PpYPHwjHqroGiVOmFjG2jQFg0p2gydzysZgzYGD1lOYgZUkH%2FoQ2mbDGTQYxaZrQ3sP%2FgdA4B34R0MnewcQO8El5cp4kQQ9Bv2Zqyh3eTLAImSlDGihxsGcOhmrMLDI%2FgPTofri2yxq3V%2FnOgn9BR3oe3hYVgoy2eYhFLMLIcfAMKj598QGOqUBV39DIbsiJ0LB5FzXeLVMKRRhv3emeTPu%2FhjGsGYKynW2qMrzF36YLBeM9nwkey9m66ULzPc%2BaHwN%2BnJDS0D3RE2OlL3x%2FZc7qk9GGKTLgYRC8tRQ1ZT85JK%2Bb3dJVF7qVlseqgcSxE%2FWoQ%2BW35pcGGHrMrMnzp%2B617YbkVo2zSxzQGIHcLZBXfXrx410SjBWVJrNbwYL5CU6ZIXhQm5r2ttr0at5&X-Amz-Signature=0eeb123a230de922776987a41cff6a49d32d6c64e61bdcb02fb3139f4fdacff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLODNOUV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6cfYx6zHV7YJFmlZ5xUSs%2BNNJ1LOATKTWCMi4D2t3uAiEAudd4sATE42ug6eC5pUPO1zBL5ll8aYqQX0CuFrupAvMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCn6GwL2DaFAA3BlDCrcA%2BEXH0p4UNfoi%2FWRfFFogEpzKP4pxvOCVY%2BvVXbB2E9pAH2U4hzNGPbNisi3%2BADxt9xGwpKcgHEOIBAzXYANsIXzifrAEQfxuXtiv2OPcWFVqKh8bA8WO8YxEp4yh5YVZkH8axsCypiASJ61qNuBlmwjpXSQnkirIsnddeZtxUnVjY1PXlz%2BFS2oVuTpJrpALVficD6xEw7m70kkVI4DP%2F0TIEChcBN486KLV8UPkl46qMS9f9wO8H8njibap%2F93LI4pKo8MU0Vf%2B1W4zVu%2FIH5DETlsHfDUmXNRej%2BOULTihVSrVIQ4%2BtZREmFsVaaYT91%2FSo%2Bohe0U7B1oVnV4LQySXtGK9a0W33yARIAqVPjuMMD8DqDvIQs6nHMJv1hVecmK1g1OEyGRgbSfIx2W1fGKSu4w3H5bF31s0EaA0EHTMfJHtogovE1YprpKgqPlL5NnyhJv%2FjmUdmgx0PpYPHwjHqroGiVOmFjG2jQFg0p2gydzysZgzYGD1lOYgZUkH%2FoQ2mbDGTQYxaZrQ3sP%2FgdA4B34R0MnewcQO8El5cp4kQQ9Bv2Zqyh3eTLAImSlDGihxsGcOhmrMLDI%2FgPTofri2yxq3V%2FnOgn9BR3oe3hYVgoy2eYhFLMLIcfAMKj598QGOqUBV39DIbsiJ0LB5FzXeLVMKRRhv3emeTPu%2FhjGsGYKynW2qMrzF36YLBeM9nwkey9m66ULzPc%2BaHwN%2BnJDS0D3RE2OlL3x%2FZc7qk9GGKTLgYRC8tRQ1ZT85JK%2Bb3dJVF7qVlseqgcSxE%2FWoQ%2BW35pcGGHrMrMnzp%2B617YbkVo2zSxzQGIHcLZBXfXrx410SjBWVJrNbwYL5CU6ZIXhQm5r2ttr0at5&X-Amz-Signature=20f18848963c5ccd5bd66018e9c84db308804028bf6dc16306af5ad0b71ca782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLODNOUV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6cfYx6zHV7YJFmlZ5xUSs%2BNNJ1LOATKTWCMi4D2t3uAiEAudd4sATE42ug6eC5pUPO1zBL5ll8aYqQX0CuFrupAvMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCn6GwL2DaFAA3BlDCrcA%2BEXH0p4UNfoi%2FWRfFFogEpzKP4pxvOCVY%2BvVXbB2E9pAH2U4hzNGPbNisi3%2BADxt9xGwpKcgHEOIBAzXYANsIXzifrAEQfxuXtiv2OPcWFVqKh8bA8WO8YxEp4yh5YVZkH8axsCypiASJ61qNuBlmwjpXSQnkirIsnddeZtxUnVjY1PXlz%2BFS2oVuTpJrpALVficD6xEw7m70kkVI4DP%2F0TIEChcBN486KLV8UPkl46qMS9f9wO8H8njibap%2F93LI4pKo8MU0Vf%2B1W4zVu%2FIH5DETlsHfDUmXNRej%2BOULTihVSrVIQ4%2BtZREmFsVaaYT91%2FSo%2Bohe0U7B1oVnV4LQySXtGK9a0W33yARIAqVPjuMMD8DqDvIQs6nHMJv1hVecmK1g1OEyGRgbSfIx2W1fGKSu4w3H5bF31s0EaA0EHTMfJHtogovE1YprpKgqPlL5NnyhJv%2FjmUdmgx0PpYPHwjHqroGiVOmFjG2jQFg0p2gydzysZgzYGD1lOYgZUkH%2FoQ2mbDGTQYxaZrQ3sP%2FgdA4B34R0MnewcQO8El5cp4kQQ9Bv2Zqyh3eTLAImSlDGihxsGcOhmrMLDI%2FgPTofri2yxq3V%2FnOgn9BR3oe3hYVgoy2eYhFLMLIcfAMKj598QGOqUBV39DIbsiJ0LB5FzXeLVMKRRhv3emeTPu%2FhjGsGYKynW2qMrzF36YLBeM9nwkey9m66ULzPc%2BaHwN%2BnJDS0D3RE2OlL3x%2FZc7qk9GGKTLgYRC8tRQ1ZT85JK%2Bb3dJVF7qVlseqgcSxE%2FWoQ%2BW35pcGGHrMrMnzp%2B617YbkVo2zSxzQGIHcLZBXfXrx410SjBWVJrNbwYL5CU6ZIXhQm5r2ttr0at5&X-Amz-Signature=282fa7b94dbac33d9b0346f0f87626f7c276dfd57255d0489b35dc2640c992d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLODNOUV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6cfYx6zHV7YJFmlZ5xUSs%2BNNJ1LOATKTWCMi4D2t3uAiEAudd4sATE42ug6eC5pUPO1zBL5ll8aYqQX0CuFrupAvMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCn6GwL2DaFAA3BlDCrcA%2BEXH0p4UNfoi%2FWRfFFogEpzKP4pxvOCVY%2BvVXbB2E9pAH2U4hzNGPbNisi3%2BADxt9xGwpKcgHEOIBAzXYANsIXzifrAEQfxuXtiv2OPcWFVqKh8bA8WO8YxEp4yh5YVZkH8axsCypiASJ61qNuBlmwjpXSQnkirIsnddeZtxUnVjY1PXlz%2BFS2oVuTpJrpALVficD6xEw7m70kkVI4DP%2F0TIEChcBN486KLV8UPkl46qMS9f9wO8H8njibap%2F93LI4pKo8MU0Vf%2B1W4zVu%2FIH5DETlsHfDUmXNRej%2BOULTihVSrVIQ4%2BtZREmFsVaaYT91%2FSo%2Bohe0U7B1oVnV4LQySXtGK9a0W33yARIAqVPjuMMD8DqDvIQs6nHMJv1hVecmK1g1OEyGRgbSfIx2W1fGKSu4w3H5bF31s0EaA0EHTMfJHtogovE1YprpKgqPlL5NnyhJv%2FjmUdmgx0PpYPHwjHqroGiVOmFjG2jQFg0p2gydzysZgzYGD1lOYgZUkH%2FoQ2mbDGTQYxaZrQ3sP%2FgdA4B34R0MnewcQO8El5cp4kQQ9Bv2Zqyh3eTLAImSlDGihxsGcOhmrMLDI%2FgPTofri2yxq3V%2FnOgn9BR3oe3hYVgoy2eYhFLMLIcfAMKj598QGOqUBV39DIbsiJ0LB5FzXeLVMKRRhv3emeTPu%2FhjGsGYKynW2qMrzF36YLBeM9nwkey9m66ULzPc%2BaHwN%2BnJDS0D3RE2OlL3x%2FZc7qk9GGKTLgYRC8tRQ1ZT85JK%2Bb3dJVF7qVlseqgcSxE%2FWoQ%2BW35pcGGHrMrMnzp%2B617YbkVo2zSxzQGIHcLZBXfXrx410SjBWVJrNbwYL5CU6ZIXhQm5r2ttr0at5&X-Amz-Signature=45d57fa57610397c5f32a80cf836310237ad9d5db20a44867db31df4f846bc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLODNOUV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6cfYx6zHV7YJFmlZ5xUSs%2BNNJ1LOATKTWCMi4D2t3uAiEAudd4sATE42ug6eC5pUPO1zBL5ll8aYqQX0CuFrupAvMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCn6GwL2DaFAA3BlDCrcA%2BEXH0p4UNfoi%2FWRfFFogEpzKP4pxvOCVY%2BvVXbB2E9pAH2U4hzNGPbNisi3%2BADxt9xGwpKcgHEOIBAzXYANsIXzifrAEQfxuXtiv2OPcWFVqKh8bA8WO8YxEp4yh5YVZkH8axsCypiASJ61qNuBlmwjpXSQnkirIsnddeZtxUnVjY1PXlz%2BFS2oVuTpJrpALVficD6xEw7m70kkVI4DP%2F0TIEChcBN486KLV8UPkl46qMS9f9wO8H8njibap%2F93LI4pKo8MU0Vf%2B1W4zVu%2FIH5DETlsHfDUmXNRej%2BOULTihVSrVIQ4%2BtZREmFsVaaYT91%2FSo%2Bohe0U7B1oVnV4LQySXtGK9a0W33yARIAqVPjuMMD8DqDvIQs6nHMJv1hVecmK1g1OEyGRgbSfIx2W1fGKSu4w3H5bF31s0EaA0EHTMfJHtogovE1YprpKgqPlL5NnyhJv%2FjmUdmgx0PpYPHwjHqroGiVOmFjG2jQFg0p2gydzysZgzYGD1lOYgZUkH%2FoQ2mbDGTQYxaZrQ3sP%2FgdA4B34R0MnewcQO8El5cp4kQQ9Bv2Zqyh3eTLAImSlDGihxsGcOhmrMLDI%2FgPTofri2yxq3V%2FnOgn9BR3oe3hYVgoy2eYhFLMLIcfAMKj598QGOqUBV39DIbsiJ0LB5FzXeLVMKRRhv3emeTPu%2FhjGsGYKynW2qMrzF36YLBeM9nwkey9m66ULzPc%2BaHwN%2BnJDS0D3RE2OlL3x%2FZc7qk9GGKTLgYRC8tRQ1ZT85JK%2Bb3dJVF7qVlseqgcSxE%2FWoQ%2BW35pcGGHrMrMnzp%2B617YbkVo2zSxzQGIHcLZBXfXrx410SjBWVJrNbwYL5CU6ZIXhQm5r2ttr0at5&X-Amz-Signature=315173a3e3be3af145a7e6d2973064434fb80364b810857831c5222ef779d974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLODNOUV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6cfYx6zHV7YJFmlZ5xUSs%2BNNJ1LOATKTWCMi4D2t3uAiEAudd4sATE42ug6eC5pUPO1zBL5ll8aYqQX0CuFrupAvMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCn6GwL2DaFAA3BlDCrcA%2BEXH0p4UNfoi%2FWRfFFogEpzKP4pxvOCVY%2BvVXbB2E9pAH2U4hzNGPbNisi3%2BADxt9xGwpKcgHEOIBAzXYANsIXzifrAEQfxuXtiv2OPcWFVqKh8bA8WO8YxEp4yh5YVZkH8axsCypiASJ61qNuBlmwjpXSQnkirIsnddeZtxUnVjY1PXlz%2BFS2oVuTpJrpALVficD6xEw7m70kkVI4DP%2F0TIEChcBN486KLV8UPkl46qMS9f9wO8H8njibap%2F93LI4pKo8MU0Vf%2B1W4zVu%2FIH5DETlsHfDUmXNRej%2BOULTihVSrVIQ4%2BtZREmFsVaaYT91%2FSo%2Bohe0U7B1oVnV4LQySXtGK9a0W33yARIAqVPjuMMD8DqDvIQs6nHMJv1hVecmK1g1OEyGRgbSfIx2W1fGKSu4w3H5bF31s0EaA0EHTMfJHtogovE1YprpKgqPlL5NnyhJv%2FjmUdmgx0PpYPHwjHqroGiVOmFjG2jQFg0p2gydzysZgzYGD1lOYgZUkH%2FoQ2mbDGTQYxaZrQ3sP%2FgdA4B34R0MnewcQO8El5cp4kQQ9Bv2Zqyh3eTLAImSlDGihxsGcOhmrMLDI%2FgPTofri2yxq3V%2FnOgn9BR3oe3hYVgoy2eYhFLMLIcfAMKj598QGOqUBV39DIbsiJ0LB5FzXeLVMKRRhv3emeTPu%2FhjGsGYKynW2qMrzF36YLBeM9nwkey9m66ULzPc%2BaHwN%2BnJDS0D3RE2OlL3x%2FZc7qk9GGKTLgYRC8tRQ1ZT85JK%2Bb3dJVF7qVlseqgcSxE%2FWoQ%2BW35pcGGHrMrMnzp%2B617YbkVo2zSxzQGIHcLZBXfXrx410SjBWVJrNbwYL5CU6ZIXhQm5r2ttr0at5&X-Amz-Signature=93c606c8df0c0d29d19b2097033ba16d0d8e07ad8bbcf6a173416648d10cfb4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLODNOUV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6cfYx6zHV7YJFmlZ5xUSs%2BNNJ1LOATKTWCMi4D2t3uAiEAudd4sATE42ug6eC5pUPO1zBL5ll8aYqQX0CuFrupAvMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCn6GwL2DaFAA3BlDCrcA%2BEXH0p4UNfoi%2FWRfFFogEpzKP4pxvOCVY%2BvVXbB2E9pAH2U4hzNGPbNisi3%2BADxt9xGwpKcgHEOIBAzXYANsIXzifrAEQfxuXtiv2OPcWFVqKh8bA8WO8YxEp4yh5YVZkH8axsCypiASJ61qNuBlmwjpXSQnkirIsnddeZtxUnVjY1PXlz%2BFS2oVuTpJrpALVficD6xEw7m70kkVI4DP%2F0TIEChcBN486KLV8UPkl46qMS9f9wO8H8njibap%2F93LI4pKo8MU0Vf%2B1W4zVu%2FIH5DETlsHfDUmXNRej%2BOULTihVSrVIQ4%2BtZREmFsVaaYT91%2FSo%2Bohe0U7B1oVnV4LQySXtGK9a0W33yARIAqVPjuMMD8DqDvIQs6nHMJv1hVecmK1g1OEyGRgbSfIx2W1fGKSu4w3H5bF31s0EaA0EHTMfJHtogovE1YprpKgqPlL5NnyhJv%2FjmUdmgx0PpYPHwjHqroGiVOmFjG2jQFg0p2gydzysZgzYGD1lOYgZUkH%2FoQ2mbDGTQYxaZrQ3sP%2FgdA4B34R0MnewcQO8El5cp4kQQ9Bv2Zqyh3eTLAImSlDGihxsGcOhmrMLDI%2FgPTofri2yxq3V%2FnOgn9BR3oe3hYVgoy2eYhFLMLIcfAMKj598QGOqUBV39DIbsiJ0LB5FzXeLVMKRRhv3emeTPu%2FhjGsGYKynW2qMrzF36YLBeM9nwkey9m66ULzPc%2BaHwN%2BnJDS0D3RE2OlL3x%2FZc7qk9GGKTLgYRC8tRQ1ZT85JK%2Bb3dJVF7qVlseqgcSxE%2FWoQ%2BW35pcGGHrMrMnzp%2B617YbkVo2zSxzQGIHcLZBXfXrx410SjBWVJrNbwYL5CU6ZIXhQm5r2ttr0at5&X-Amz-Signature=9aee103551ed1a176c1973b68d9466246f3853bea4eeb5cc9910828855f34307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
