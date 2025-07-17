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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLE3DKRI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDoxfib0%2F0nxiJnf%2BO7rEyXCJdX3QB7%2B5y8QWmgoz%2FtaAIhAO8E4n1%2BN48eNiBoLHZ9mqoavWmuskUGZHrf2FU3VusfKv8DCGwQABoMNjM3NDIzMTgzODA1IgxPqWIXaD%2BvrPoBiBAq3ANcBc3ocOoUEFM%2FyLOotziHFPpcKvefVaq5MU1%2BAAeD1i7DC3iiHdjjDHR4X3IeOLPY234SZl6sIbe6uhGN40clqvJpb2S570FgImOM402vQ1j8AmPc25IXceKBj%2BIEM0o%2FGxpkXiGloZyq%2BmMshLeYBDFwLgAWmDzLEwjnEkuPyuFRWPEMoqfqk7iwddz5zZuJHne9vLO1gkPKlLsF2tXIG6lLiCRy%2FrT5HF0EkTEwikGsXBtE0DPsYk9admT2uajJ%2B2JDKm3zEQ8kOXcileQUSDEopeb2ovpE9Fb%2ByO05RsGAuu2QUqW%2BZMePMJyz0k5ME%2Bew7LYroTC2CtHXS9QjykfdiGYu5qwT102URKazeWhJVndts%2FbzFF1Tb32IkkOvZSZJ7%2FH8m57izF5WjeLa6%2FNXlLrWdFbcD8hCXAGHug64hCA8%2BoWeAvIxe1BsSfuw3r0DoCfCqgOj68WqItOCYgRIy0pFkGNlwer5hyvQojsLpednWXWfsAsaWEpCrzre2DvyL2W9Jmcz2AYSFzb8cViKGaaUWUfLGWscaCKuWdMNHKudY3bvhdhBazSgllLb5pYmU436zQ3IqObQAv%2B5waNCUwddgbWTnVTOB2o0CSGdnrqostS2rcCcITCKyOHDBjqkAWqldm%2FicWnOAggxWS6SL2lT%2BYBPCAKEtsnK%2BUv3N75QkeOnYM6LmNmGaO8h3F4mvkz2jxDTYoD%2Fli4PPW2QQurWOyULF5rWKxReGREpBtmWwo9HHbJVZuzyFK75JX5z1EBq6PZntBjhHh88Z7C0JZyCf%2BMj2MoMEGk8pqPdNpzRsAL%2FOG3RK8x18xPip4x5MITYUL0uUQx2bP%2BOfVwthsaCBBDy&X-Amz-Signature=b3eb1d3f46bb2e495b2eceb4d3d0ebc512c0972adb274d0bd77e238f8b555e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLE3DKRI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDoxfib0%2F0nxiJnf%2BO7rEyXCJdX3QB7%2B5y8QWmgoz%2FtaAIhAO8E4n1%2BN48eNiBoLHZ9mqoavWmuskUGZHrf2FU3VusfKv8DCGwQABoMNjM3NDIzMTgzODA1IgxPqWIXaD%2BvrPoBiBAq3ANcBc3ocOoUEFM%2FyLOotziHFPpcKvefVaq5MU1%2BAAeD1i7DC3iiHdjjDHR4X3IeOLPY234SZl6sIbe6uhGN40clqvJpb2S570FgImOM402vQ1j8AmPc25IXceKBj%2BIEM0o%2FGxpkXiGloZyq%2BmMshLeYBDFwLgAWmDzLEwjnEkuPyuFRWPEMoqfqk7iwddz5zZuJHne9vLO1gkPKlLsF2tXIG6lLiCRy%2FrT5HF0EkTEwikGsXBtE0DPsYk9admT2uajJ%2B2JDKm3zEQ8kOXcileQUSDEopeb2ovpE9Fb%2ByO05RsGAuu2QUqW%2BZMePMJyz0k5ME%2Bew7LYroTC2CtHXS9QjykfdiGYu5qwT102URKazeWhJVndts%2FbzFF1Tb32IkkOvZSZJ7%2FH8m57izF5WjeLa6%2FNXlLrWdFbcD8hCXAGHug64hCA8%2BoWeAvIxe1BsSfuw3r0DoCfCqgOj68WqItOCYgRIy0pFkGNlwer5hyvQojsLpednWXWfsAsaWEpCrzre2DvyL2W9Jmcz2AYSFzb8cViKGaaUWUfLGWscaCKuWdMNHKudY3bvhdhBazSgllLb5pYmU436zQ3IqObQAv%2B5waNCUwddgbWTnVTOB2o0CSGdnrqostS2rcCcITCKyOHDBjqkAWqldm%2FicWnOAggxWS6SL2lT%2BYBPCAKEtsnK%2BUv3N75QkeOnYM6LmNmGaO8h3F4mvkz2jxDTYoD%2Fli4PPW2QQurWOyULF5rWKxReGREpBtmWwo9HHbJVZuzyFK75JX5z1EBq6PZntBjhHh88Z7C0JZyCf%2BMj2MoMEGk8pqPdNpzRsAL%2FOG3RK8x18xPip4x5MITYUL0uUQx2bP%2BOfVwthsaCBBDy&X-Amz-Signature=da2405c18c8441fa6e24de34d63b228dc9591284893c03b3fd1eb37666a4a3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLE3DKRI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDoxfib0%2F0nxiJnf%2BO7rEyXCJdX3QB7%2B5y8QWmgoz%2FtaAIhAO8E4n1%2BN48eNiBoLHZ9mqoavWmuskUGZHrf2FU3VusfKv8DCGwQABoMNjM3NDIzMTgzODA1IgxPqWIXaD%2BvrPoBiBAq3ANcBc3ocOoUEFM%2FyLOotziHFPpcKvefVaq5MU1%2BAAeD1i7DC3iiHdjjDHR4X3IeOLPY234SZl6sIbe6uhGN40clqvJpb2S570FgImOM402vQ1j8AmPc25IXceKBj%2BIEM0o%2FGxpkXiGloZyq%2BmMshLeYBDFwLgAWmDzLEwjnEkuPyuFRWPEMoqfqk7iwddz5zZuJHne9vLO1gkPKlLsF2tXIG6lLiCRy%2FrT5HF0EkTEwikGsXBtE0DPsYk9admT2uajJ%2B2JDKm3zEQ8kOXcileQUSDEopeb2ovpE9Fb%2ByO05RsGAuu2QUqW%2BZMePMJyz0k5ME%2Bew7LYroTC2CtHXS9QjykfdiGYu5qwT102URKazeWhJVndts%2FbzFF1Tb32IkkOvZSZJ7%2FH8m57izF5WjeLa6%2FNXlLrWdFbcD8hCXAGHug64hCA8%2BoWeAvIxe1BsSfuw3r0DoCfCqgOj68WqItOCYgRIy0pFkGNlwer5hyvQojsLpednWXWfsAsaWEpCrzre2DvyL2W9Jmcz2AYSFzb8cViKGaaUWUfLGWscaCKuWdMNHKudY3bvhdhBazSgllLb5pYmU436zQ3IqObQAv%2B5waNCUwddgbWTnVTOB2o0CSGdnrqostS2rcCcITCKyOHDBjqkAWqldm%2FicWnOAggxWS6SL2lT%2BYBPCAKEtsnK%2BUv3N75QkeOnYM6LmNmGaO8h3F4mvkz2jxDTYoD%2Fli4PPW2QQurWOyULF5rWKxReGREpBtmWwo9HHbJVZuzyFK75JX5z1EBq6PZntBjhHh88Z7C0JZyCf%2BMj2MoMEGk8pqPdNpzRsAL%2FOG3RK8x18xPip4x5MITYUL0uUQx2bP%2BOfVwthsaCBBDy&X-Amz-Signature=5d18aa9ddcb00343b3b244b7ac386d155daa2d33796aa25fde2316144890a8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLE3DKRI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDoxfib0%2F0nxiJnf%2BO7rEyXCJdX3QB7%2B5y8QWmgoz%2FtaAIhAO8E4n1%2BN48eNiBoLHZ9mqoavWmuskUGZHrf2FU3VusfKv8DCGwQABoMNjM3NDIzMTgzODA1IgxPqWIXaD%2BvrPoBiBAq3ANcBc3ocOoUEFM%2FyLOotziHFPpcKvefVaq5MU1%2BAAeD1i7DC3iiHdjjDHR4X3IeOLPY234SZl6sIbe6uhGN40clqvJpb2S570FgImOM402vQ1j8AmPc25IXceKBj%2BIEM0o%2FGxpkXiGloZyq%2BmMshLeYBDFwLgAWmDzLEwjnEkuPyuFRWPEMoqfqk7iwddz5zZuJHne9vLO1gkPKlLsF2tXIG6lLiCRy%2FrT5HF0EkTEwikGsXBtE0DPsYk9admT2uajJ%2B2JDKm3zEQ8kOXcileQUSDEopeb2ovpE9Fb%2ByO05RsGAuu2QUqW%2BZMePMJyz0k5ME%2Bew7LYroTC2CtHXS9QjykfdiGYu5qwT102URKazeWhJVndts%2FbzFF1Tb32IkkOvZSZJ7%2FH8m57izF5WjeLa6%2FNXlLrWdFbcD8hCXAGHug64hCA8%2BoWeAvIxe1BsSfuw3r0DoCfCqgOj68WqItOCYgRIy0pFkGNlwer5hyvQojsLpednWXWfsAsaWEpCrzre2DvyL2W9Jmcz2AYSFzb8cViKGaaUWUfLGWscaCKuWdMNHKudY3bvhdhBazSgllLb5pYmU436zQ3IqObQAv%2B5waNCUwddgbWTnVTOB2o0CSGdnrqostS2rcCcITCKyOHDBjqkAWqldm%2FicWnOAggxWS6SL2lT%2BYBPCAKEtsnK%2BUv3N75QkeOnYM6LmNmGaO8h3F4mvkz2jxDTYoD%2Fli4PPW2QQurWOyULF5rWKxReGREpBtmWwo9HHbJVZuzyFK75JX5z1EBq6PZntBjhHh88Z7C0JZyCf%2BMj2MoMEGk8pqPdNpzRsAL%2FOG3RK8x18xPip4x5MITYUL0uUQx2bP%2BOfVwthsaCBBDy&X-Amz-Signature=fcd2ee46253fe70a39ff1eb86b7b436af5f7d3c1a00736359294f72932bb8b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLE3DKRI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDoxfib0%2F0nxiJnf%2BO7rEyXCJdX3QB7%2B5y8QWmgoz%2FtaAIhAO8E4n1%2BN48eNiBoLHZ9mqoavWmuskUGZHrf2FU3VusfKv8DCGwQABoMNjM3NDIzMTgzODA1IgxPqWIXaD%2BvrPoBiBAq3ANcBc3ocOoUEFM%2FyLOotziHFPpcKvefVaq5MU1%2BAAeD1i7DC3iiHdjjDHR4X3IeOLPY234SZl6sIbe6uhGN40clqvJpb2S570FgImOM402vQ1j8AmPc25IXceKBj%2BIEM0o%2FGxpkXiGloZyq%2BmMshLeYBDFwLgAWmDzLEwjnEkuPyuFRWPEMoqfqk7iwddz5zZuJHne9vLO1gkPKlLsF2tXIG6lLiCRy%2FrT5HF0EkTEwikGsXBtE0DPsYk9admT2uajJ%2B2JDKm3zEQ8kOXcileQUSDEopeb2ovpE9Fb%2ByO05RsGAuu2QUqW%2BZMePMJyz0k5ME%2Bew7LYroTC2CtHXS9QjykfdiGYu5qwT102URKazeWhJVndts%2FbzFF1Tb32IkkOvZSZJ7%2FH8m57izF5WjeLa6%2FNXlLrWdFbcD8hCXAGHug64hCA8%2BoWeAvIxe1BsSfuw3r0DoCfCqgOj68WqItOCYgRIy0pFkGNlwer5hyvQojsLpednWXWfsAsaWEpCrzre2DvyL2W9Jmcz2AYSFzb8cViKGaaUWUfLGWscaCKuWdMNHKudY3bvhdhBazSgllLb5pYmU436zQ3IqObQAv%2B5waNCUwddgbWTnVTOB2o0CSGdnrqostS2rcCcITCKyOHDBjqkAWqldm%2FicWnOAggxWS6SL2lT%2BYBPCAKEtsnK%2BUv3N75QkeOnYM6LmNmGaO8h3F4mvkz2jxDTYoD%2Fli4PPW2QQurWOyULF5rWKxReGREpBtmWwo9HHbJVZuzyFK75JX5z1EBq6PZntBjhHh88Z7C0JZyCf%2BMj2MoMEGk8pqPdNpzRsAL%2FOG3RK8x18xPip4x5MITYUL0uUQx2bP%2BOfVwthsaCBBDy&X-Amz-Signature=e50e124c5c72961162ee046c4949898ea20c10bebf5c4fff0178b6d52bd2de1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLE3DKRI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDoxfib0%2F0nxiJnf%2BO7rEyXCJdX3QB7%2B5y8QWmgoz%2FtaAIhAO8E4n1%2BN48eNiBoLHZ9mqoavWmuskUGZHrf2FU3VusfKv8DCGwQABoMNjM3NDIzMTgzODA1IgxPqWIXaD%2BvrPoBiBAq3ANcBc3ocOoUEFM%2FyLOotziHFPpcKvefVaq5MU1%2BAAeD1i7DC3iiHdjjDHR4X3IeOLPY234SZl6sIbe6uhGN40clqvJpb2S570FgImOM402vQ1j8AmPc25IXceKBj%2BIEM0o%2FGxpkXiGloZyq%2BmMshLeYBDFwLgAWmDzLEwjnEkuPyuFRWPEMoqfqk7iwddz5zZuJHne9vLO1gkPKlLsF2tXIG6lLiCRy%2FrT5HF0EkTEwikGsXBtE0DPsYk9admT2uajJ%2B2JDKm3zEQ8kOXcileQUSDEopeb2ovpE9Fb%2ByO05RsGAuu2QUqW%2BZMePMJyz0k5ME%2Bew7LYroTC2CtHXS9QjykfdiGYu5qwT102URKazeWhJVndts%2FbzFF1Tb32IkkOvZSZJ7%2FH8m57izF5WjeLa6%2FNXlLrWdFbcD8hCXAGHug64hCA8%2BoWeAvIxe1BsSfuw3r0DoCfCqgOj68WqItOCYgRIy0pFkGNlwer5hyvQojsLpednWXWfsAsaWEpCrzre2DvyL2W9Jmcz2AYSFzb8cViKGaaUWUfLGWscaCKuWdMNHKudY3bvhdhBazSgllLb5pYmU436zQ3IqObQAv%2B5waNCUwddgbWTnVTOB2o0CSGdnrqostS2rcCcITCKyOHDBjqkAWqldm%2FicWnOAggxWS6SL2lT%2BYBPCAKEtsnK%2BUv3N75QkeOnYM6LmNmGaO8h3F4mvkz2jxDTYoD%2Fli4PPW2QQurWOyULF5rWKxReGREpBtmWwo9HHbJVZuzyFK75JX5z1EBq6PZntBjhHh88Z7C0JZyCf%2BMj2MoMEGk8pqPdNpzRsAL%2FOG3RK8x18xPip4x5MITYUL0uUQx2bP%2BOfVwthsaCBBDy&X-Amz-Signature=1214381efdc4747843dde7d5f5414839bd6f3165b9e8fb4184a2160553ef8d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLE3DKRI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDoxfib0%2F0nxiJnf%2BO7rEyXCJdX3QB7%2B5y8QWmgoz%2FtaAIhAO8E4n1%2BN48eNiBoLHZ9mqoavWmuskUGZHrf2FU3VusfKv8DCGwQABoMNjM3NDIzMTgzODA1IgxPqWIXaD%2BvrPoBiBAq3ANcBc3ocOoUEFM%2FyLOotziHFPpcKvefVaq5MU1%2BAAeD1i7DC3iiHdjjDHR4X3IeOLPY234SZl6sIbe6uhGN40clqvJpb2S570FgImOM402vQ1j8AmPc25IXceKBj%2BIEM0o%2FGxpkXiGloZyq%2BmMshLeYBDFwLgAWmDzLEwjnEkuPyuFRWPEMoqfqk7iwddz5zZuJHne9vLO1gkPKlLsF2tXIG6lLiCRy%2FrT5HF0EkTEwikGsXBtE0DPsYk9admT2uajJ%2B2JDKm3zEQ8kOXcileQUSDEopeb2ovpE9Fb%2ByO05RsGAuu2QUqW%2BZMePMJyz0k5ME%2Bew7LYroTC2CtHXS9QjykfdiGYu5qwT102URKazeWhJVndts%2FbzFF1Tb32IkkOvZSZJ7%2FH8m57izF5WjeLa6%2FNXlLrWdFbcD8hCXAGHug64hCA8%2BoWeAvIxe1BsSfuw3r0DoCfCqgOj68WqItOCYgRIy0pFkGNlwer5hyvQojsLpednWXWfsAsaWEpCrzre2DvyL2W9Jmcz2AYSFzb8cViKGaaUWUfLGWscaCKuWdMNHKudY3bvhdhBazSgllLb5pYmU436zQ3IqObQAv%2B5waNCUwddgbWTnVTOB2o0CSGdnrqostS2rcCcITCKyOHDBjqkAWqldm%2FicWnOAggxWS6SL2lT%2BYBPCAKEtsnK%2BUv3N75QkeOnYM6LmNmGaO8h3F4mvkz2jxDTYoD%2Fli4PPW2QQurWOyULF5rWKxReGREpBtmWwo9HHbJVZuzyFK75JX5z1EBq6PZntBjhHh88Z7C0JZyCf%2BMj2MoMEGk8pqPdNpzRsAL%2FOG3RK8x18xPip4x5MITYUL0uUQx2bP%2BOfVwthsaCBBDy&X-Amz-Signature=4f4ca3fc0cc93d44d6a6c0c00792f6fca5be3c24740fc48cdaddf6d765eb3cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
