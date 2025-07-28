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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R7KUQ2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCbJPZPKLqbwHyoLT%2B5wJTaBsCvP%2BaQ1RPHVxlAVYi7kQIhAK1GevoaD8e1mfmJP1JSmoLbOBO9UAIOMk6tIK%2B8UXSyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpfcnS7DpQ72Dos9kq3AO8OWC3kwLVI2quctdab%2Bjmguhkn%2BFPAdigr9rI6kDMh5rU4ztlhfA%2FUMt6EmEI0sgOGBiEfUXQvSEXI6OCKtV0AN6j0i5ucG%2BBjs49kuVSQMiW%2FER54R6hbsQVJw9yJze4zb0ogP8DkH7aK7gMNwIRtjYpmD%2F4k45DPtIsnq9QGcu%2FLwwc6NDFMV6Ejnx9PJlUMzw2u2B%2BpVj4hJ8Lm4MaT9NAWRIBCQw9sTHcM8uw%2FKU5cU%2Ba%2BvARv1jB3kbwFeeAZyR83Nlny0s3hGfPbKyuqJpzBF%2Fc9zGNp%2FYh1xaLEslsgJIpZUKkMdPNpneUQGVjmZOR5bz5xThya%2BhvoONawZ9yfavnwzWLKspSV1aEzspgd2%2Fd%2Bjbijj04ubo2JoxFNs1LpLxu%2FU%2FMCR4wmMTLIq2KqSGszi2YT%2BcM3qAFlaLQ3GYvV7PEnTko2KZML2AWtAIDfaapKc4SOsJxuIMgzGdiahWnoH2RZjubVanp42PkyfnsrBp64Arxb2236SYQ6Z%2BXHhWOfZ4sBiVeGBdx7Y6WlbDi0meEhsAUQFbF%2Fo%2BpU81qWxAtH5eVD9R0ujrW7A36wFMnfU1gnzoy8TSffbg0IamvR9x6oJyVcGmrb3gNhZBxej4qtgbnpTDa%2FJ3EBjqkAUIB33YTSHZ69lBSBBhR1fSlcfyR8N8YHpy9op7VjWeFeakqtYHnO8b%2B%2BemjwpEaP3dsJv1ZepUQKH%2FtM2g2lfkiT7ZSHrD17cNLLpt9OFljsKgG3UV0PrtmjleUYv%2B0M3EKHjuymRfrxb%2Bsl3LcGxFDBNFYWBFdgfzShxb9Smo4E4YHQy%2F7VRJaLGSWNtf4%2FjivCttG8e5%2BnYJTz07H7NqgRj1K&X-Amz-Signature=c54cb3fdbc34e3f2d100ee9acfcd67b13c4134157feb3dc5882ce626a31e7d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R7KUQ2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCbJPZPKLqbwHyoLT%2B5wJTaBsCvP%2BaQ1RPHVxlAVYi7kQIhAK1GevoaD8e1mfmJP1JSmoLbOBO9UAIOMk6tIK%2B8UXSyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpfcnS7DpQ72Dos9kq3AO8OWC3kwLVI2quctdab%2Bjmguhkn%2BFPAdigr9rI6kDMh5rU4ztlhfA%2FUMt6EmEI0sgOGBiEfUXQvSEXI6OCKtV0AN6j0i5ucG%2BBjs49kuVSQMiW%2FER54R6hbsQVJw9yJze4zb0ogP8DkH7aK7gMNwIRtjYpmD%2F4k45DPtIsnq9QGcu%2FLwwc6NDFMV6Ejnx9PJlUMzw2u2B%2BpVj4hJ8Lm4MaT9NAWRIBCQw9sTHcM8uw%2FKU5cU%2Ba%2BvARv1jB3kbwFeeAZyR83Nlny0s3hGfPbKyuqJpzBF%2Fc9zGNp%2FYh1xaLEslsgJIpZUKkMdPNpneUQGVjmZOR5bz5xThya%2BhvoONawZ9yfavnwzWLKspSV1aEzspgd2%2Fd%2Bjbijj04ubo2JoxFNs1LpLxu%2FU%2FMCR4wmMTLIq2KqSGszi2YT%2BcM3qAFlaLQ3GYvV7PEnTko2KZML2AWtAIDfaapKc4SOsJxuIMgzGdiahWnoH2RZjubVanp42PkyfnsrBp64Arxb2236SYQ6Z%2BXHhWOfZ4sBiVeGBdx7Y6WlbDi0meEhsAUQFbF%2Fo%2BpU81qWxAtH5eVD9R0ujrW7A36wFMnfU1gnzoy8TSffbg0IamvR9x6oJyVcGmrb3gNhZBxej4qtgbnpTDa%2FJ3EBjqkAUIB33YTSHZ69lBSBBhR1fSlcfyR8N8YHpy9op7VjWeFeakqtYHnO8b%2B%2BemjwpEaP3dsJv1ZepUQKH%2FtM2g2lfkiT7ZSHrD17cNLLpt9OFljsKgG3UV0PrtmjleUYv%2B0M3EKHjuymRfrxb%2Bsl3LcGxFDBNFYWBFdgfzShxb9Smo4E4YHQy%2F7VRJaLGSWNtf4%2FjivCttG8e5%2BnYJTz07H7NqgRj1K&X-Amz-Signature=e70eb333977859dda2422f9c70d8e3c94f53c7166ea17a1d37b84102ce40e043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R7KUQ2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCbJPZPKLqbwHyoLT%2B5wJTaBsCvP%2BaQ1RPHVxlAVYi7kQIhAK1GevoaD8e1mfmJP1JSmoLbOBO9UAIOMk6tIK%2B8UXSyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpfcnS7DpQ72Dos9kq3AO8OWC3kwLVI2quctdab%2Bjmguhkn%2BFPAdigr9rI6kDMh5rU4ztlhfA%2FUMt6EmEI0sgOGBiEfUXQvSEXI6OCKtV0AN6j0i5ucG%2BBjs49kuVSQMiW%2FER54R6hbsQVJw9yJze4zb0ogP8DkH7aK7gMNwIRtjYpmD%2F4k45DPtIsnq9QGcu%2FLwwc6NDFMV6Ejnx9PJlUMzw2u2B%2BpVj4hJ8Lm4MaT9NAWRIBCQw9sTHcM8uw%2FKU5cU%2Ba%2BvARv1jB3kbwFeeAZyR83Nlny0s3hGfPbKyuqJpzBF%2Fc9zGNp%2FYh1xaLEslsgJIpZUKkMdPNpneUQGVjmZOR5bz5xThya%2BhvoONawZ9yfavnwzWLKspSV1aEzspgd2%2Fd%2Bjbijj04ubo2JoxFNs1LpLxu%2FU%2FMCR4wmMTLIq2KqSGszi2YT%2BcM3qAFlaLQ3GYvV7PEnTko2KZML2AWtAIDfaapKc4SOsJxuIMgzGdiahWnoH2RZjubVanp42PkyfnsrBp64Arxb2236SYQ6Z%2BXHhWOfZ4sBiVeGBdx7Y6WlbDi0meEhsAUQFbF%2Fo%2BpU81qWxAtH5eVD9R0ujrW7A36wFMnfU1gnzoy8TSffbg0IamvR9x6oJyVcGmrb3gNhZBxej4qtgbnpTDa%2FJ3EBjqkAUIB33YTSHZ69lBSBBhR1fSlcfyR8N8YHpy9op7VjWeFeakqtYHnO8b%2B%2BemjwpEaP3dsJv1ZepUQKH%2FtM2g2lfkiT7ZSHrD17cNLLpt9OFljsKgG3UV0PrtmjleUYv%2B0M3EKHjuymRfrxb%2Bsl3LcGxFDBNFYWBFdgfzShxb9Smo4E4YHQy%2F7VRJaLGSWNtf4%2FjivCttG8e5%2BnYJTz07H7NqgRj1K&X-Amz-Signature=9d3fe6ebd691ab6dcf24e7ca9a6392cba66785108b4acde2640207f3b3cd3155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R7KUQ2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCbJPZPKLqbwHyoLT%2B5wJTaBsCvP%2BaQ1RPHVxlAVYi7kQIhAK1GevoaD8e1mfmJP1JSmoLbOBO9UAIOMk6tIK%2B8UXSyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpfcnS7DpQ72Dos9kq3AO8OWC3kwLVI2quctdab%2Bjmguhkn%2BFPAdigr9rI6kDMh5rU4ztlhfA%2FUMt6EmEI0sgOGBiEfUXQvSEXI6OCKtV0AN6j0i5ucG%2BBjs49kuVSQMiW%2FER54R6hbsQVJw9yJze4zb0ogP8DkH7aK7gMNwIRtjYpmD%2F4k45DPtIsnq9QGcu%2FLwwc6NDFMV6Ejnx9PJlUMzw2u2B%2BpVj4hJ8Lm4MaT9NAWRIBCQw9sTHcM8uw%2FKU5cU%2Ba%2BvARv1jB3kbwFeeAZyR83Nlny0s3hGfPbKyuqJpzBF%2Fc9zGNp%2FYh1xaLEslsgJIpZUKkMdPNpneUQGVjmZOR5bz5xThya%2BhvoONawZ9yfavnwzWLKspSV1aEzspgd2%2Fd%2Bjbijj04ubo2JoxFNs1LpLxu%2FU%2FMCR4wmMTLIq2KqSGszi2YT%2BcM3qAFlaLQ3GYvV7PEnTko2KZML2AWtAIDfaapKc4SOsJxuIMgzGdiahWnoH2RZjubVanp42PkyfnsrBp64Arxb2236SYQ6Z%2BXHhWOfZ4sBiVeGBdx7Y6WlbDi0meEhsAUQFbF%2Fo%2BpU81qWxAtH5eVD9R0ujrW7A36wFMnfU1gnzoy8TSffbg0IamvR9x6oJyVcGmrb3gNhZBxej4qtgbnpTDa%2FJ3EBjqkAUIB33YTSHZ69lBSBBhR1fSlcfyR8N8YHpy9op7VjWeFeakqtYHnO8b%2B%2BemjwpEaP3dsJv1ZepUQKH%2FtM2g2lfkiT7ZSHrD17cNLLpt9OFljsKgG3UV0PrtmjleUYv%2B0M3EKHjuymRfrxb%2Bsl3LcGxFDBNFYWBFdgfzShxb9Smo4E4YHQy%2F7VRJaLGSWNtf4%2FjivCttG8e5%2BnYJTz07H7NqgRj1K&X-Amz-Signature=7eaf0cebbd12121c9f091aa02d742d200660af32f581d93513836a049928f76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R7KUQ2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCbJPZPKLqbwHyoLT%2B5wJTaBsCvP%2BaQ1RPHVxlAVYi7kQIhAK1GevoaD8e1mfmJP1JSmoLbOBO9UAIOMk6tIK%2B8UXSyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpfcnS7DpQ72Dos9kq3AO8OWC3kwLVI2quctdab%2Bjmguhkn%2BFPAdigr9rI6kDMh5rU4ztlhfA%2FUMt6EmEI0sgOGBiEfUXQvSEXI6OCKtV0AN6j0i5ucG%2BBjs49kuVSQMiW%2FER54R6hbsQVJw9yJze4zb0ogP8DkH7aK7gMNwIRtjYpmD%2F4k45DPtIsnq9QGcu%2FLwwc6NDFMV6Ejnx9PJlUMzw2u2B%2BpVj4hJ8Lm4MaT9NAWRIBCQw9sTHcM8uw%2FKU5cU%2Ba%2BvARv1jB3kbwFeeAZyR83Nlny0s3hGfPbKyuqJpzBF%2Fc9zGNp%2FYh1xaLEslsgJIpZUKkMdPNpneUQGVjmZOR5bz5xThya%2BhvoONawZ9yfavnwzWLKspSV1aEzspgd2%2Fd%2Bjbijj04ubo2JoxFNs1LpLxu%2FU%2FMCR4wmMTLIq2KqSGszi2YT%2BcM3qAFlaLQ3GYvV7PEnTko2KZML2AWtAIDfaapKc4SOsJxuIMgzGdiahWnoH2RZjubVanp42PkyfnsrBp64Arxb2236SYQ6Z%2BXHhWOfZ4sBiVeGBdx7Y6WlbDi0meEhsAUQFbF%2Fo%2BpU81qWxAtH5eVD9R0ujrW7A36wFMnfU1gnzoy8TSffbg0IamvR9x6oJyVcGmrb3gNhZBxej4qtgbnpTDa%2FJ3EBjqkAUIB33YTSHZ69lBSBBhR1fSlcfyR8N8YHpy9op7VjWeFeakqtYHnO8b%2B%2BemjwpEaP3dsJv1ZepUQKH%2FtM2g2lfkiT7ZSHrD17cNLLpt9OFljsKgG3UV0PrtmjleUYv%2B0M3EKHjuymRfrxb%2Bsl3LcGxFDBNFYWBFdgfzShxb9Smo4E4YHQy%2F7VRJaLGSWNtf4%2FjivCttG8e5%2BnYJTz07H7NqgRj1K&X-Amz-Signature=b830cc81e22e0b148507b761e77b010a2315f1d6d3e09bd8ffe7dfa8c2d7a17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R7KUQ2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCbJPZPKLqbwHyoLT%2B5wJTaBsCvP%2BaQ1RPHVxlAVYi7kQIhAK1GevoaD8e1mfmJP1JSmoLbOBO9UAIOMk6tIK%2B8UXSyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpfcnS7DpQ72Dos9kq3AO8OWC3kwLVI2quctdab%2Bjmguhkn%2BFPAdigr9rI6kDMh5rU4ztlhfA%2FUMt6EmEI0sgOGBiEfUXQvSEXI6OCKtV0AN6j0i5ucG%2BBjs49kuVSQMiW%2FER54R6hbsQVJw9yJze4zb0ogP8DkH7aK7gMNwIRtjYpmD%2F4k45DPtIsnq9QGcu%2FLwwc6NDFMV6Ejnx9PJlUMzw2u2B%2BpVj4hJ8Lm4MaT9NAWRIBCQw9sTHcM8uw%2FKU5cU%2Ba%2BvARv1jB3kbwFeeAZyR83Nlny0s3hGfPbKyuqJpzBF%2Fc9zGNp%2FYh1xaLEslsgJIpZUKkMdPNpneUQGVjmZOR5bz5xThya%2BhvoONawZ9yfavnwzWLKspSV1aEzspgd2%2Fd%2Bjbijj04ubo2JoxFNs1LpLxu%2FU%2FMCR4wmMTLIq2KqSGszi2YT%2BcM3qAFlaLQ3GYvV7PEnTko2KZML2AWtAIDfaapKc4SOsJxuIMgzGdiahWnoH2RZjubVanp42PkyfnsrBp64Arxb2236SYQ6Z%2BXHhWOfZ4sBiVeGBdx7Y6WlbDi0meEhsAUQFbF%2Fo%2BpU81qWxAtH5eVD9R0ujrW7A36wFMnfU1gnzoy8TSffbg0IamvR9x6oJyVcGmrb3gNhZBxej4qtgbnpTDa%2FJ3EBjqkAUIB33YTSHZ69lBSBBhR1fSlcfyR8N8YHpy9op7VjWeFeakqtYHnO8b%2B%2BemjwpEaP3dsJv1ZepUQKH%2FtM2g2lfkiT7ZSHrD17cNLLpt9OFljsKgG3UV0PrtmjleUYv%2B0M3EKHjuymRfrxb%2Bsl3LcGxFDBNFYWBFdgfzShxb9Smo4E4YHQy%2F7VRJaLGSWNtf4%2FjivCttG8e5%2BnYJTz07H7NqgRj1K&X-Amz-Signature=b09dd0c2078547b5cd5c95f80a16017a1d3a3d47092f8b552cd65e3f6b6502d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R7KUQ2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCbJPZPKLqbwHyoLT%2B5wJTaBsCvP%2BaQ1RPHVxlAVYi7kQIhAK1GevoaD8e1mfmJP1JSmoLbOBO9UAIOMk6tIK%2B8UXSyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpfcnS7DpQ72Dos9kq3AO8OWC3kwLVI2quctdab%2Bjmguhkn%2BFPAdigr9rI6kDMh5rU4ztlhfA%2FUMt6EmEI0sgOGBiEfUXQvSEXI6OCKtV0AN6j0i5ucG%2BBjs49kuVSQMiW%2FER54R6hbsQVJw9yJze4zb0ogP8DkH7aK7gMNwIRtjYpmD%2F4k45DPtIsnq9QGcu%2FLwwc6NDFMV6Ejnx9PJlUMzw2u2B%2BpVj4hJ8Lm4MaT9NAWRIBCQw9sTHcM8uw%2FKU5cU%2Ba%2BvARv1jB3kbwFeeAZyR83Nlny0s3hGfPbKyuqJpzBF%2Fc9zGNp%2FYh1xaLEslsgJIpZUKkMdPNpneUQGVjmZOR5bz5xThya%2BhvoONawZ9yfavnwzWLKspSV1aEzspgd2%2Fd%2Bjbijj04ubo2JoxFNs1LpLxu%2FU%2FMCR4wmMTLIq2KqSGszi2YT%2BcM3qAFlaLQ3GYvV7PEnTko2KZML2AWtAIDfaapKc4SOsJxuIMgzGdiahWnoH2RZjubVanp42PkyfnsrBp64Arxb2236SYQ6Z%2BXHhWOfZ4sBiVeGBdx7Y6WlbDi0meEhsAUQFbF%2Fo%2BpU81qWxAtH5eVD9R0ujrW7A36wFMnfU1gnzoy8TSffbg0IamvR9x6oJyVcGmrb3gNhZBxej4qtgbnpTDa%2FJ3EBjqkAUIB33YTSHZ69lBSBBhR1fSlcfyR8N8YHpy9op7VjWeFeakqtYHnO8b%2B%2BemjwpEaP3dsJv1ZepUQKH%2FtM2g2lfkiT7ZSHrD17cNLLpt9OFljsKgG3UV0PrtmjleUYv%2B0M3EKHjuymRfrxb%2Bsl3LcGxFDBNFYWBFdgfzShxb9Smo4E4YHQy%2F7VRJaLGSWNtf4%2FjivCttG8e5%2BnYJTz07H7NqgRj1K&X-Amz-Signature=025bedf9ff31608f5ccb196221082eaae3522976b88c15fdd515ff827deab544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
