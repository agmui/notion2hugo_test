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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMXFX6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCW4E1%2BWqVYNQALnI9V8DTkNF7O88kSRje0NT28tEQfuAIhAN4kfu8TBhL8ehXAonjJmQw3LozZjmohtDb5%2FUwvdSNEKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd2IRBjxaF%2BH1%2BIu0q3AOko3MNjHuZptZSGO4bRPEcjotHPhKUtg6tFIyPhZ3%2BJBplSLHJ27dGg64aPwMoqpjNeHG5F8kTFSdiVoXTquhJhXWSZGGIim0RF4m6vo5LMpWtSV4gXRgph2PgIY9DXQQEQqXFuarlAHknS3VtzIKLS00z3wyUQEJBMCl0MEPkg3sxrCyVkzm0n%2FuXLlFNc3qcjhb3JRv4uyOImR40%2F%2F1%2BO0%2BjafC3hVRyfVXxV0fiOkNY5Aak0gq%2FC2pLjJH6y7cKzLBz1TgST9sW8jQgEHx5kQ3i9AYeH15vWMTuX65CROo3ycF1ggoy891EFbdL8f0cBJFjib4ZIsdBTdirbMQaZ25P2hTSHzM0LMRJoQQOIVPwfLMVgEDRXkoMvIcJfg11vZ5D2gfgB7f1XW8DM7mR5JUO%2FYb3tVizl7ruE5rrhyjODg%2Bf73Cs5Sqi3Iu4MHYWQLbpzpQllal4oKhxtcQUGRveAkjI0cabXXvy2BQqQ9Ie%2FqToqykzr3Zq2iSgYtlRUJj9SliyHNdVCg2%2FlNCliEZh4bObad5wHapyhhiYUlbSPjfdnimQCiD%2BusnF25UiT7n%2BQjt0cLZU9b2buYQcAQC4O7PW6xFSkv8gcLdO%2FHrP9zv7AmpMI2qTsDCT5PG%2BBjqkAe0rVBkdRmVnjMqAdcg3VqnwX%2BJytl42f0b3dxyWES8LLaE76G7kYXqTQMXewmtFE3wPFpOtHCce3Qbx11d3kwzyB88iu%2B0nfsEtYY3P4jWIJE%2BEGJiCfjadLZLRruLDFzwCAmQ1Lbc0E2RVVGXSKvfIlSaiGkq4iYJXQsU8mPCTWDfWmerpzVl%2FCava39GomU3b3PRewx8rhNU%2BVQnkbDg1d2ab&X-Amz-Signature=8e352210c4e30b9bd8ef06caadcab14f766ada700debb215f9d7f5a7121bae7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMXFX6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCW4E1%2BWqVYNQALnI9V8DTkNF7O88kSRje0NT28tEQfuAIhAN4kfu8TBhL8ehXAonjJmQw3LozZjmohtDb5%2FUwvdSNEKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd2IRBjxaF%2BH1%2BIu0q3AOko3MNjHuZptZSGO4bRPEcjotHPhKUtg6tFIyPhZ3%2BJBplSLHJ27dGg64aPwMoqpjNeHG5F8kTFSdiVoXTquhJhXWSZGGIim0RF4m6vo5LMpWtSV4gXRgph2PgIY9DXQQEQqXFuarlAHknS3VtzIKLS00z3wyUQEJBMCl0MEPkg3sxrCyVkzm0n%2FuXLlFNc3qcjhb3JRv4uyOImR40%2F%2F1%2BO0%2BjafC3hVRyfVXxV0fiOkNY5Aak0gq%2FC2pLjJH6y7cKzLBz1TgST9sW8jQgEHx5kQ3i9AYeH15vWMTuX65CROo3ycF1ggoy891EFbdL8f0cBJFjib4ZIsdBTdirbMQaZ25P2hTSHzM0LMRJoQQOIVPwfLMVgEDRXkoMvIcJfg11vZ5D2gfgB7f1XW8DM7mR5JUO%2FYb3tVizl7ruE5rrhyjODg%2Bf73Cs5Sqi3Iu4MHYWQLbpzpQllal4oKhxtcQUGRveAkjI0cabXXvy2BQqQ9Ie%2FqToqykzr3Zq2iSgYtlRUJj9SliyHNdVCg2%2FlNCliEZh4bObad5wHapyhhiYUlbSPjfdnimQCiD%2BusnF25UiT7n%2BQjt0cLZU9b2buYQcAQC4O7PW6xFSkv8gcLdO%2FHrP9zv7AmpMI2qTsDCT5PG%2BBjqkAe0rVBkdRmVnjMqAdcg3VqnwX%2BJytl42f0b3dxyWES8LLaE76G7kYXqTQMXewmtFE3wPFpOtHCce3Qbx11d3kwzyB88iu%2B0nfsEtYY3P4jWIJE%2BEGJiCfjadLZLRruLDFzwCAmQ1Lbc0E2RVVGXSKvfIlSaiGkq4iYJXQsU8mPCTWDfWmerpzVl%2FCava39GomU3b3PRewx8rhNU%2BVQnkbDg1d2ab&X-Amz-Signature=d4874a6686117991059e123e84ca3211a8cc1e1ce04912a156afceace9549752&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMXFX6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCW4E1%2BWqVYNQALnI9V8DTkNF7O88kSRje0NT28tEQfuAIhAN4kfu8TBhL8ehXAonjJmQw3LozZjmohtDb5%2FUwvdSNEKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd2IRBjxaF%2BH1%2BIu0q3AOko3MNjHuZptZSGO4bRPEcjotHPhKUtg6tFIyPhZ3%2BJBplSLHJ27dGg64aPwMoqpjNeHG5F8kTFSdiVoXTquhJhXWSZGGIim0RF4m6vo5LMpWtSV4gXRgph2PgIY9DXQQEQqXFuarlAHknS3VtzIKLS00z3wyUQEJBMCl0MEPkg3sxrCyVkzm0n%2FuXLlFNc3qcjhb3JRv4uyOImR40%2F%2F1%2BO0%2BjafC3hVRyfVXxV0fiOkNY5Aak0gq%2FC2pLjJH6y7cKzLBz1TgST9sW8jQgEHx5kQ3i9AYeH15vWMTuX65CROo3ycF1ggoy891EFbdL8f0cBJFjib4ZIsdBTdirbMQaZ25P2hTSHzM0LMRJoQQOIVPwfLMVgEDRXkoMvIcJfg11vZ5D2gfgB7f1XW8DM7mR5JUO%2FYb3tVizl7ruE5rrhyjODg%2Bf73Cs5Sqi3Iu4MHYWQLbpzpQllal4oKhxtcQUGRveAkjI0cabXXvy2BQqQ9Ie%2FqToqykzr3Zq2iSgYtlRUJj9SliyHNdVCg2%2FlNCliEZh4bObad5wHapyhhiYUlbSPjfdnimQCiD%2BusnF25UiT7n%2BQjt0cLZU9b2buYQcAQC4O7PW6xFSkv8gcLdO%2FHrP9zv7AmpMI2qTsDCT5PG%2BBjqkAe0rVBkdRmVnjMqAdcg3VqnwX%2BJytl42f0b3dxyWES8LLaE76G7kYXqTQMXewmtFE3wPFpOtHCce3Qbx11d3kwzyB88iu%2B0nfsEtYY3P4jWIJE%2BEGJiCfjadLZLRruLDFzwCAmQ1Lbc0E2RVVGXSKvfIlSaiGkq4iYJXQsU8mPCTWDfWmerpzVl%2FCava39GomU3b3PRewx8rhNU%2BVQnkbDg1d2ab&X-Amz-Signature=13b053924b904ffc7173d227aed97da9a81940922af6282db4ab8bcc168fde2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMXFX6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCW4E1%2BWqVYNQALnI9V8DTkNF7O88kSRje0NT28tEQfuAIhAN4kfu8TBhL8ehXAonjJmQw3LozZjmohtDb5%2FUwvdSNEKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd2IRBjxaF%2BH1%2BIu0q3AOko3MNjHuZptZSGO4bRPEcjotHPhKUtg6tFIyPhZ3%2BJBplSLHJ27dGg64aPwMoqpjNeHG5F8kTFSdiVoXTquhJhXWSZGGIim0RF4m6vo5LMpWtSV4gXRgph2PgIY9DXQQEQqXFuarlAHknS3VtzIKLS00z3wyUQEJBMCl0MEPkg3sxrCyVkzm0n%2FuXLlFNc3qcjhb3JRv4uyOImR40%2F%2F1%2BO0%2BjafC3hVRyfVXxV0fiOkNY5Aak0gq%2FC2pLjJH6y7cKzLBz1TgST9sW8jQgEHx5kQ3i9AYeH15vWMTuX65CROo3ycF1ggoy891EFbdL8f0cBJFjib4ZIsdBTdirbMQaZ25P2hTSHzM0LMRJoQQOIVPwfLMVgEDRXkoMvIcJfg11vZ5D2gfgB7f1XW8DM7mR5JUO%2FYb3tVizl7ruE5rrhyjODg%2Bf73Cs5Sqi3Iu4MHYWQLbpzpQllal4oKhxtcQUGRveAkjI0cabXXvy2BQqQ9Ie%2FqToqykzr3Zq2iSgYtlRUJj9SliyHNdVCg2%2FlNCliEZh4bObad5wHapyhhiYUlbSPjfdnimQCiD%2BusnF25UiT7n%2BQjt0cLZU9b2buYQcAQC4O7PW6xFSkv8gcLdO%2FHrP9zv7AmpMI2qTsDCT5PG%2BBjqkAe0rVBkdRmVnjMqAdcg3VqnwX%2BJytl42f0b3dxyWES8LLaE76G7kYXqTQMXewmtFE3wPFpOtHCce3Qbx11d3kwzyB88iu%2B0nfsEtYY3P4jWIJE%2BEGJiCfjadLZLRruLDFzwCAmQ1Lbc0E2RVVGXSKvfIlSaiGkq4iYJXQsU8mPCTWDfWmerpzVl%2FCava39GomU3b3PRewx8rhNU%2BVQnkbDg1d2ab&X-Amz-Signature=79ff9890d39b37f3095bb14f5bbe4c7b74fc38c636d8e7df834a0f9c62dd7d82&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMXFX6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCW4E1%2BWqVYNQALnI9V8DTkNF7O88kSRje0NT28tEQfuAIhAN4kfu8TBhL8ehXAonjJmQw3LozZjmohtDb5%2FUwvdSNEKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd2IRBjxaF%2BH1%2BIu0q3AOko3MNjHuZptZSGO4bRPEcjotHPhKUtg6tFIyPhZ3%2BJBplSLHJ27dGg64aPwMoqpjNeHG5F8kTFSdiVoXTquhJhXWSZGGIim0RF4m6vo5LMpWtSV4gXRgph2PgIY9DXQQEQqXFuarlAHknS3VtzIKLS00z3wyUQEJBMCl0MEPkg3sxrCyVkzm0n%2FuXLlFNc3qcjhb3JRv4uyOImR40%2F%2F1%2BO0%2BjafC3hVRyfVXxV0fiOkNY5Aak0gq%2FC2pLjJH6y7cKzLBz1TgST9sW8jQgEHx5kQ3i9AYeH15vWMTuX65CROo3ycF1ggoy891EFbdL8f0cBJFjib4ZIsdBTdirbMQaZ25P2hTSHzM0LMRJoQQOIVPwfLMVgEDRXkoMvIcJfg11vZ5D2gfgB7f1XW8DM7mR5JUO%2FYb3tVizl7ruE5rrhyjODg%2Bf73Cs5Sqi3Iu4MHYWQLbpzpQllal4oKhxtcQUGRveAkjI0cabXXvy2BQqQ9Ie%2FqToqykzr3Zq2iSgYtlRUJj9SliyHNdVCg2%2FlNCliEZh4bObad5wHapyhhiYUlbSPjfdnimQCiD%2BusnF25UiT7n%2BQjt0cLZU9b2buYQcAQC4O7PW6xFSkv8gcLdO%2FHrP9zv7AmpMI2qTsDCT5PG%2BBjqkAe0rVBkdRmVnjMqAdcg3VqnwX%2BJytl42f0b3dxyWES8LLaE76G7kYXqTQMXewmtFE3wPFpOtHCce3Qbx11d3kwzyB88iu%2B0nfsEtYY3P4jWIJE%2BEGJiCfjadLZLRruLDFzwCAmQ1Lbc0E2RVVGXSKvfIlSaiGkq4iYJXQsU8mPCTWDfWmerpzVl%2FCava39GomU3b3PRewx8rhNU%2BVQnkbDg1d2ab&X-Amz-Signature=c566f378702d251c87f8576d919a0bfa04f1de527996e49a6d738e22ac74d022&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMXFX6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCW4E1%2BWqVYNQALnI9V8DTkNF7O88kSRje0NT28tEQfuAIhAN4kfu8TBhL8ehXAonjJmQw3LozZjmohtDb5%2FUwvdSNEKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd2IRBjxaF%2BH1%2BIu0q3AOko3MNjHuZptZSGO4bRPEcjotHPhKUtg6tFIyPhZ3%2BJBplSLHJ27dGg64aPwMoqpjNeHG5F8kTFSdiVoXTquhJhXWSZGGIim0RF4m6vo5LMpWtSV4gXRgph2PgIY9DXQQEQqXFuarlAHknS3VtzIKLS00z3wyUQEJBMCl0MEPkg3sxrCyVkzm0n%2FuXLlFNc3qcjhb3JRv4uyOImR40%2F%2F1%2BO0%2BjafC3hVRyfVXxV0fiOkNY5Aak0gq%2FC2pLjJH6y7cKzLBz1TgST9sW8jQgEHx5kQ3i9AYeH15vWMTuX65CROo3ycF1ggoy891EFbdL8f0cBJFjib4ZIsdBTdirbMQaZ25P2hTSHzM0LMRJoQQOIVPwfLMVgEDRXkoMvIcJfg11vZ5D2gfgB7f1XW8DM7mR5JUO%2FYb3tVizl7ruE5rrhyjODg%2Bf73Cs5Sqi3Iu4MHYWQLbpzpQllal4oKhxtcQUGRveAkjI0cabXXvy2BQqQ9Ie%2FqToqykzr3Zq2iSgYtlRUJj9SliyHNdVCg2%2FlNCliEZh4bObad5wHapyhhiYUlbSPjfdnimQCiD%2BusnF25UiT7n%2BQjt0cLZU9b2buYQcAQC4O7PW6xFSkv8gcLdO%2FHrP9zv7AmpMI2qTsDCT5PG%2BBjqkAe0rVBkdRmVnjMqAdcg3VqnwX%2BJytl42f0b3dxyWES8LLaE76G7kYXqTQMXewmtFE3wPFpOtHCce3Qbx11d3kwzyB88iu%2B0nfsEtYY3P4jWIJE%2BEGJiCfjadLZLRruLDFzwCAmQ1Lbc0E2RVVGXSKvfIlSaiGkq4iYJXQsU8mPCTWDfWmerpzVl%2FCava39GomU3b3PRewx8rhNU%2BVQnkbDg1d2ab&X-Amz-Signature=1c4c8955dce25e75625cc96a1b3b92f4143eff296100190a3d8187f0b80bec75&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMXFX6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCW4E1%2BWqVYNQALnI9V8DTkNF7O88kSRje0NT28tEQfuAIhAN4kfu8TBhL8ehXAonjJmQw3LozZjmohtDb5%2FUwvdSNEKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd2IRBjxaF%2BH1%2BIu0q3AOko3MNjHuZptZSGO4bRPEcjotHPhKUtg6tFIyPhZ3%2BJBplSLHJ27dGg64aPwMoqpjNeHG5F8kTFSdiVoXTquhJhXWSZGGIim0RF4m6vo5LMpWtSV4gXRgph2PgIY9DXQQEQqXFuarlAHknS3VtzIKLS00z3wyUQEJBMCl0MEPkg3sxrCyVkzm0n%2FuXLlFNc3qcjhb3JRv4uyOImR40%2F%2F1%2BO0%2BjafC3hVRyfVXxV0fiOkNY5Aak0gq%2FC2pLjJH6y7cKzLBz1TgST9sW8jQgEHx5kQ3i9AYeH15vWMTuX65CROo3ycF1ggoy891EFbdL8f0cBJFjib4ZIsdBTdirbMQaZ25P2hTSHzM0LMRJoQQOIVPwfLMVgEDRXkoMvIcJfg11vZ5D2gfgB7f1XW8DM7mR5JUO%2FYb3tVizl7ruE5rrhyjODg%2Bf73Cs5Sqi3Iu4MHYWQLbpzpQllal4oKhxtcQUGRveAkjI0cabXXvy2BQqQ9Ie%2FqToqykzr3Zq2iSgYtlRUJj9SliyHNdVCg2%2FlNCliEZh4bObad5wHapyhhiYUlbSPjfdnimQCiD%2BusnF25UiT7n%2BQjt0cLZU9b2buYQcAQC4O7PW6xFSkv8gcLdO%2FHrP9zv7AmpMI2qTsDCT5PG%2BBjqkAe0rVBkdRmVnjMqAdcg3VqnwX%2BJytl42f0b3dxyWES8LLaE76G7kYXqTQMXewmtFE3wPFpOtHCce3Qbx11d3kwzyB88iu%2B0nfsEtYY3P4jWIJE%2BEGJiCfjadLZLRruLDFzwCAmQ1Lbc0E2RVVGXSKvfIlSaiGkq4iYJXQsU8mPCTWDfWmerpzVl%2FCava39GomU3b3PRewx8rhNU%2BVQnkbDg1d2ab&X-Amz-Signature=4124a6ba88b98569a168aecd4e28aba260a5ec65cc1154c5473c9477c7876243&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
