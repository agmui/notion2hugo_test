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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74HGJJV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAdBHNCXl5rehKd2%2Fv6BYuiiqV05N9sgLOKFXm71N5BVAiEA6L9qCWcQZmg4xdxHo7tcwehPbc84ku0%2FWOdNdFkgiVoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF3zn93a%2F4mwy80qcCrcA1itMW9IMJzKLtsNloSynd%2FjyBokf7C6xXRK%2FuQvGq1kQun3Qm5lCsmnBms%2BpdcRQp9XmMy82x%2F7oUw6%2FgboPkrKzWP6WCC7y1QkTFXRoO7uwIKe%2BN%2Faq2rCzDdoQCMSwCU0HpodLMxYT8BcrcfBt4ycT2RxkpgKFbAQ6gGatGRq6L2UC09%2B0FyHNHQwENnjoTwGphjruxLpIyrJNN7CiuYSdbM7blTCXmqnvBaoDeRUM48qtU7G5LGRpSuXGVCyh597WNNL8r55womcpLybjkPbneS750g7uIz646kEvTbF8Uz5aG2f31KlBkyDI5xLNk2bs2n6x9nVlXYsje4ojERxE5qZ4Eh%2BlIGpqmmeaRjFRBlK%2B0ykUPwmPH7HLVrUU8xVSvbQQJfeHNgk4SYBrF0aYd4K%2FITtOZFR%2Bp22awB%2BiQO6S0PMUnM%2F4QnNAtLp26wDmLH8R7cKEHo%2FIKr3pxqUUuwuFs4kz%2B3JiSm2txlQb9fPYl4DN0XYmM4fGFcOy4Y2XRfRjnBeSRBa9dsEMW7Fwryf6J7NMvGIzxuZortt4LiIaYx%2B5sar73az%2BUpKmBmUsw3TkH28JBDN5ul1Qk8gqoar1JltbrBk3xE4Brq9mzXTGrIOHTNaiPEHMOT31cMGOqUBLJRNWt7UUiDhhmcXnzqZ3cW7S5JkLdWrAw3TRyQi7xZBccxFWTOaQagClJo%2FII4sRF2HOBUr9WC4GSSpVpg2EmWX%2BaPddfhxP6hwh0CKXRnKNggJWxKtOaJyce%2FZEQaCGi0grFdkqgjIdKZFXozumf5BPvffUbktnF%2B7nbhI4SyWGsDe7hi7SrsLgMEMeju2q5j%2FmskSHP9b31hfa%2FyfeKcXHKkk&X-Amz-Signature=2dbdda18865c13ba7341cdec73a6ca796ed1bcc1567a6b7bbe4a3fb244c2d1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74HGJJV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAdBHNCXl5rehKd2%2Fv6BYuiiqV05N9sgLOKFXm71N5BVAiEA6L9qCWcQZmg4xdxHo7tcwehPbc84ku0%2FWOdNdFkgiVoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF3zn93a%2F4mwy80qcCrcA1itMW9IMJzKLtsNloSynd%2FjyBokf7C6xXRK%2FuQvGq1kQun3Qm5lCsmnBms%2BpdcRQp9XmMy82x%2F7oUw6%2FgboPkrKzWP6WCC7y1QkTFXRoO7uwIKe%2BN%2Faq2rCzDdoQCMSwCU0HpodLMxYT8BcrcfBt4ycT2RxkpgKFbAQ6gGatGRq6L2UC09%2B0FyHNHQwENnjoTwGphjruxLpIyrJNN7CiuYSdbM7blTCXmqnvBaoDeRUM48qtU7G5LGRpSuXGVCyh597WNNL8r55womcpLybjkPbneS750g7uIz646kEvTbF8Uz5aG2f31KlBkyDI5xLNk2bs2n6x9nVlXYsje4ojERxE5qZ4Eh%2BlIGpqmmeaRjFRBlK%2B0ykUPwmPH7HLVrUU8xVSvbQQJfeHNgk4SYBrF0aYd4K%2FITtOZFR%2Bp22awB%2BiQO6S0PMUnM%2F4QnNAtLp26wDmLH8R7cKEHo%2FIKr3pxqUUuwuFs4kz%2B3JiSm2txlQb9fPYl4DN0XYmM4fGFcOy4Y2XRfRjnBeSRBa9dsEMW7Fwryf6J7NMvGIzxuZortt4LiIaYx%2B5sar73az%2BUpKmBmUsw3TkH28JBDN5ul1Qk8gqoar1JltbrBk3xE4Brq9mzXTGrIOHTNaiPEHMOT31cMGOqUBLJRNWt7UUiDhhmcXnzqZ3cW7S5JkLdWrAw3TRyQi7xZBccxFWTOaQagClJo%2FII4sRF2HOBUr9WC4GSSpVpg2EmWX%2BaPddfhxP6hwh0CKXRnKNggJWxKtOaJyce%2FZEQaCGi0grFdkqgjIdKZFXozumf5BPvffUbktnF%2B7nbhI4SyWGsDe7hi7SrsLgMEMeju2q5j%2FmskSHP9b31hfa%2FyfeKcXHKkk&X-Amz-Signature=f138cdb0faf60e688be2a42bbfe6ddfdf7d517b74d4abfbb97291dab79f7e126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74HGJJV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAdBHNCXl5rehKd2%2Fv6BYuiiqV05N9sgLOKFXm71N5BVAiEA6L9qCWcQZmg4xdxHo7tcwehPbc84ku0%2FWOdNdFkgiVoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF3zn93a%2F4mwy80qcCrcA1itMW9IMJzKLtsNloSynd%2FjyBokf7C6xXRK%2FuQvGq1kQun3Qm5lCsmnBms%2BpdcRQp9XmMy82x%2F7oUw6%2FgboPkrKzWP6WCC7y1QkTFXRoO7uwIKe%2BN%2Faq2rCzDdoQCMSwCU0HpodLMxYT8BcrcfBt4ycT2RxkpgKFbAQ6gGatGRq6L2UC09%2B0FyHNHQwENnjoTwGphjruxLpIyrJNN7CiuYSdbM7blTCXmqnvBaoDeRUM48qtU7G5LGRpSuXGVCyh597WNNL8r55womcpLybjkPbneS750g7uIz646kEvTbF8Uz5aG2f31KlBkyDI5xLNk2bs2n6x9nVlXYsje4ojERxE5qZ4Eh%2BlIGpqmmeaRjFRBlK%2B0ykUPwmPH7HLVrUU8xVSvbQQJfeHNgk4SYBrF0aYd4K%2FITtOZFR%2Bp22awB%2BiQO6S0PMUnM%2F4QnNAtLp26wDmLH8R7cKEHo%2FIKr3pxqUUuwuFs4kz%2B3JiSm2txlQb9fPYl4DN0XYmM4fGFcOy4Y2XRfRjnBeSRBa9dsEMW7Fwryf6J7NMvGIzxuZortt4LiIaYx%2B5sar73az%2BUpKmBmUsw3TkH28JBDN5ul1Qk8gqoar1JltbrBk3xE4Brq9mzXTGrIOHTNaiPEHMOT31cMGOqUBLJRNWt7UUiDhhmcXnzqZ3cW7S5JkLdWrAw3TRyQi7xZBccxFWTOaQagClJo%2FII4sRF2HOBUr9WC4GSSpVpg2EmWX%2BaPddfhxP6hwh0CKXRnKNggJWxKtOaJyce%2FZEQaCGi0grFdkqgjIdKZFXozumf5BPvffUbktnF%2B7nbhI4SyWGsDe7hi7SrsLgMEMeju2q5j%2FmskSHP9b31hfa%2FyfeKcXHKkk&X-Amz-Signature=fe94ddc228feba268cbf338bef431c640e3895ff522bfda945e07fffe7eb21f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74HGJJV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAdBHNCXl5rehKd2%2Fv6BYuiiqV05N9sgLOKFXm71N5BVAiEA6L9qCWcQZmg4xdxHo7tcwehPbc84ku0%2FWOdNdFkgiVoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF3zn93a%2F4mwy80qcCrcA1itMW9IMJzKLtsNloSynd%2FjyBokf7C6xXRK%2FuQvGq1kQun3Qm5lCsmnBms%2BpdcRQp9XmMy82x%2F7oUw6%2FgboPkrKzWP6WCC7y1QkTFXRoO7uwIKe%2BN%2Faq2rCzDdoQCMSwCU0HpodLMxYT8BcrcfBt4ycT2RxkpgKFbAQ6gGatGRq6L2UC09%2B0FyHNHQwENnjoTwGphjruxLpIyrJNN7CiuYSdbM7blTCXmqnvBaoDeRUM48qtU7G5LGRpSuXGVCyh597WNNL8r55womcpLybjkPbneS750g7uIz646kEvTbF8Uz5aG2f31KlBkyDI5xLNk2bs2n6x9nVlXYsje4ojERxE5qZ4Eh%2BlIGpqmmeaRjFRBlK%2B0ykUPwmPH7HLVrUU8xVSvbQQJfeHNgk4SYBrF0aYd4K%2FITtOZFR%2Bp22awB%2BiQO6S0PMUnM%2F4QnNAtLp26wDmLH8R7cKEHo%2FIKr3pxqUUuwuFs4kz%2B3JiSm2txlQb9fPYl4DN0XYmM4fGFcOy4Y2XRfRjnBeSRBa9dsEMW7Fwryf6J7NMvGIzxuZortt4LiIaYx%2B5sar73az%2BUpKmBmUsw3TkH28JBDN5ul1Qk8gqoar1JltbrBk3xE4Brq9mzXTGrIOHTNaiPEHMOT31cMGOqUBLJRNWt7UUiDhhmcXnzqZ3cW7S5JkLdWrAw3TRyQi7xZBccxFWTOaQagClJo%2FII4sRF2HOBUr9WC4GSSpVpg2EmWX%2BaPddfhxP6hwh0CKXRnKNggJWxKtOaJyce%2FZEQaCGi0grFdkqgjIdKZFXozumf5BPvffUbktnF%2B7nbhI4SyWGsDe7hi7SrsLgMEMeju2q5j%2FmskSHP9b31hfa%2FyfeKcXHKkk&X-Amz-Signature=8e256fc94b747c8e63c9c5783c8fdee18f34c1a43df00befca7f031fb5914ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74HGJJV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAdBHNCXl5rehKd2%2Fv6BYuiiqV05N9sgLOKFXm71N5BVAiEA6L9qCWcQZmg4xdxHo7tcwehPbc84ku0%2FWOdNdFkgiVoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF3zn93a%2F4mwy80qcCrcA1itMW9IMJzKLtsNloSynd%2FjyBokf7C6xXRK%2FuQvGq1kQun3Qm5lCsmnBms%2BpdcRQp9XmMy82x%2F7oUw6%2FgboPkrKzWP6WCC7y1QkTFXRoO7uwIKe%2BN%2Faq2rCzDdoQCMSwCU0HpodLMxYT8BcrcfBt4ycT2RxkpgKFbAQ6gGatGRq6L2UC09%2B0FyHNHQwENnjoTwGphjruxLpIyrJNN7CiuYSdbM7blTCXmqnvBaoDeRUM48qtU7G5LGRpSuXGVCyh597WNNL8r55womcpLybjkPbneS750g7uIz646kEvTbF8Uz5aG2f31KlBkyDI5xLNk2bs2n6x9nVlXYsje4ojERxE5qZ4Eh%2BlIGpqmmeaRjFRBlK%2B0ykUPwmPH7HLVrUU8xVSvbQQJfeHNgk4SYBrF0aYd4K%2FITtOZFR%2Bp22awB%2BiQO6S0PMUnM%2F4QnNAtLp26wDmLH8R7cKEHo%2FIKr3pxqUUuwuFs4kz%2B3JiSm2txlQb9fPYl4DN0XYmM4fGFcOy4Y2XRfRjnBeSRBa9dsEMW7Fwryf6J7NMvGIzxuZortt4LiIaYx%2B5sar73az%2BUpKmBmUsw3TkH28JBDN5ul1Qk8gqoar1JltbrBk3xE4Brq9mzXTGrIOHTNaiPEHMOT31cMGOqUBLJRNWt7UUiDhhmcXnzqZ3cW7S5JkLdWrAw3TRyQi7xZBccxFWTOaQagClJo%2FII4sRF2HOBUr9WC4GSSpVpg2EmWX%2BaPddfhxP6hwh0CKXRnKNggJWxKtOaJyce%2FZEQaCGi0grFdkqgjIdKZFXozumf5BPvffUbktnF%2B7nbhI4SyWGsDe7hi7SrsLgMEMeju2q5j%2FmskSHP9b31hfa%2FyfeKcXHKkk&X-Amz-Signature=2ebd759bdd4c12c576791f9c74b6bf6738a698d2ff97073e5d24d10eff123b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74HGJJV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAdBHNCXl5rehKd2%2Fv6BYuiiqV05N9sgLOKFXm71N5BVAiEA6L9qCWcQZmg4xdxHo7tcwehPbc84ku0%2FWOdNdFkgiVoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF3zn93a%2F4mwy80qcCrcA1itMW9IMJzKLtsNloSynd%2FjyBokf7C6xXRK%2FuQvGq1kQun3Qm5lCsmnBms%2BpdcRQp9XmMy82x%2F7oUw6%2FgboPkrKzWP6WCC7y1QkTFXRoO7uwIKe%2BN%2Faq2rCzDdoQCMSwCU0HpodLMxYT8BcrcfBt4ycT2RxkpgKFbAQ6gGatGRq6L2UC09%2B0FyHNHQwENnjoTwGphjruxLpIyrJNN7CiuYSdbM7blTCXmqnvBaoDeRUM48qtU7G5LGRpSuXGVCyh597WNNL8r55womcpLybjkPbneS750g7uIz646kEvTbF8Uz5aG2f31KlBkyDI5xLNk2bs2n6x9nVlXYsje4ojERxE5qZ4Eh%2BlIGpqmmeaRjFRBlK%2B0ykUPwmPH7HLVrUU8xVSvbQQJfeHNgk4SYBrF0aYd4K%2FITtOZFR%2Bp22awB%2BiQO6S0PMUnM%2F4QnNAtLp26wDmLH8R7cKEHo%2FIKr3pxqUUuwuFs4kz%2B3JiSm2txlQb9fPYl4DN0XYmM4fGFcOy4Y2XRfRjnBeSRBa9dsEMW7Fwryf6J7NMvGIzxuZortt4LiIaYx%2B5sar73az%2BUpKmBmUsw3TkH28JBDN5ul1Qk8gqoar1JltbrBk3xE4Brq9mzXTGrIOHTNaiPEHMOT31cMGOqUBLJRNWt7UUiDhhmcXnzqZ3cW7S5JkLdWrAw3TRyQi7xZBccxFWTOaQagClJo%2FII4sRF2HOBUr9WC4GSSpVpg2EmWX%2BaPddfhxP6hwh0CKXRnKNggJWxKtOaJyce%2FZEQaCGi0grFdkqgjIdKZFXozumf5BPvffUbktnF%2B7nbhI4SyWGsDe7hi7SrsLgMEMeju2q5j%2FmskSHP9b31hfa%2FyfeKcXHKkk&X-Amz-Signature=4f31f231c880ea9b0566329358d57c817c9d55b90270641913da2ebf488ef983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74HGJJV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAdBHNCXl5rehKd2%2Fv6BYuiiqV05N9sgLOKFXm71N5BVAiEA6L9qCWcQZmg4xdxHo7tcwehPbc84ku0%2FWOdNdFkgiVoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF3zn93a%2F4mwy80qcCrcA1itMW9IMJzKLtsNloSynd%2FjyBokf7C6xXRK%2FuQvGq1kQun3Qm5lCsmnBms%2BpdcRQp9XmMy82x%2F7oUw6%2FgboPkrKzWP6WCC7y1QkTFXRoO7uwIKe%2BN%2Faq2rCzDdoQCMSwCU0HpodLMxYT8BcrcfBt4ycT2RxkpgKFbAQ6gGatGRq6L2UC09%2B0FyHNHQwENnjoTwGphjruxLpIyrJNN7CiuYSdbM7blTCXmqnvBaoDeRUM48qtU7G5LGRpSuXGVCyh597WNNL8r55womcpLybjkPbneS750g7uIz646kEvTbF8Uz5aG2f31KlBkyDI5xLNk2bs2n6x9nVlXYsje4ojERxE5qZ4Eh%2BlIGpqmmeaRjFRBlK%2B0ykUPwmPH7HLVrUU8xVSvbQQJfeHNgk4SYBrF0aYd4K%2FITtOZFR%2Bp22awB%2BiQO6S0PMUnM%2F4QnNAtLp26wDmLH8R7cKEHo%2FIKr3pxqUUuwuFs4kz%2B3JiSm2txlQb9fPYl4DN0XYmM4fGFcOy4Y2XRfRjnBeSRBa9dsEMW7Fwryf6J7NMvGIzxuZortt4LiIaYx%2B5sar73az%2BUpKmBmUsw3TkH28JBDN5ul1Qk8gqoar1JltbrBk3xE4Brq9mzXTGrIOHTNaiPEHMOT31cMGOqUBLJRNWt7UUiDhhmcXnzqZ3cW7S5JkLdWrAw3TRyQi7xZBccxFWTOaQagClJo%2FII4sRF2HOBUr9WC4GSSpVpg2EmWX%2BaPddfhxP6hwh0CKXRnKNggJWxKtOaJyce%2FZEQaCGi0grFdkqgjIdKZFXozumf5BPvffUbktnF%2B7nbhI4SyWGsDe7hi7SrsLgMEMeju2q5j%2FmskSHP9b31hfa%2FyfeKcXHKkk&X-Amz-Signature=2c85979cd8f33759eeeac5c1fc6abab8b3c894367b5673866ecdedde7f806e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
