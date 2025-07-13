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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBNWDZC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCFNX%2B4WgldQpmV%2B1Fg5LPWA1Hm%2FN1mN1tml156jD1SBAIgaZlQOGhQYEoIWWrQrpqv1bAan6iLQ5RhNJ8ClzbLIfUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJLJXqLQ0isMKOEtAircA1VtwfwVlCZ%2BApFopLIB56wWk2oqw1G6iRqU393129uPW85hLYw0yAh%2BUHyT4Y2SpmfkOCgTf061hWuBQbaZL58JrLdTWJ8AsaQTjVMg%2F2XXMH9w6HtgGvRKz0coeglqzSocL8qjylVpCbUlHXdku61GsixTDShmZmSaGxK%2F%2Fp6arlELDjwEGjmlBq5lXkDhS9mE7NsTYyfV%2BuoYR8PBPIv3GgFZRByM5IqmBfqC0UlaEjbY%2B729AEChrdrYf2%2FjDjy3ZwCTxoIgiJflDH6OQdkLCWC1I9EF%2FYcK9GYdnXM%2Bl3WXYDu5UfkY7yt44IfgHTfU%2BK7vJ43hNOEl3uYXbWBGXDrfd3lMthju1XhpaBUReiIFOObjtRI1ZChYbGVvbzPtR8SJEEbt6puwhqb6Cw2%2Fcj41WvV8bYzZ93sK17c5qWKeWO6S0WZ9QEKiW3sEFJ1hF72pl9Hb77lnM20KThGGoF7vRZKgcewZ8uWp%2FBra%2BuazRK6K8mPS4JYX6adZPY6s5GJ9ceNrQPCyE6Fy7nkBmbYyl%2BP4WdJzSRJBriNJGXvbacrRr8uJuMwt10cOc8FbO6OmfjhWSLyuJRaLW8pYlUWZ%2B9fq90xf5MoFZgl7kliEeuYdj8s69K32MNfI0MMGOqUB5IvaTrK3%2BK%2Bvc%2Fr7evFR%2BBbMI28OnbBAP43AbQkDbL%2FhXHXAUgGrNQLEt4BvxdkMoERLK6yoLeZlg8axoBJGZSgms7KvwZSbbM%2Fbc%2B%2BHFe8fpTpOkklNNFBmJNuqMmF%2F9rm90nve%2B9wSilEVFbTpsZ2DIXWo%2BE0khy0TU7iKhJDrVC9NSofzoIpEridCRMmj1Vy65cGuKp94WRXtvWbs%2Bat4aCqh&X-Amz-Signature=51962d011f467755c9e86eb21bc0311c7fbba17bd44379b30d9f5f0a05333f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBNWDZC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCFNX%2B4WgldQpmV%2B1Fg5LPWA1Hm%2FN1mN1tml156jD1SBAIgaZlQOGhQYEoIWWrQrpqv1bAan6iLQ5RhNJ8ClzbLIfUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJLJXqLQ0isMKOEtAircA1VtwfwVlCZ%2BApFopLIB56wWk2oqw1G6iRqU393129uPW85hLYw0yAh%2BUHyT4Y2SpmfkOCgTf061hWuBQbaZL58JrLdTWJ8AsaQTjVMg%2F2XXMH9w6HtgGvRKz0coeglqzSocL8qjylVpCbUlHXdku61GsixTDShmZmSaGxK%2F%2Fp6arlELDjwEGjmlBq5lXkDhS9mE7NsTYyfV%2BuoYR8PBPIv3GgFZRByM5IqmBfqC0UlaEjbY%2B729AEChrdrYf2%2FjDjy3ZwCTxoIgiJflDH6OQdkLCWC1I9EF%2FYcK9GYdnXM%2Bl3WXYDu5UfkY7yt44IfgHTfU%2BK7vJ43hNOEl3uYXbWBGXDrfd3lMthju1XhpaBUReiIFOObjtRI1ZChYbGVvbzPtR8SJEEbt6puwhqb6Cw2%2Fcj41WvV8bYzZ93sK17c5qWKeWO6S0WZ9QEKiW3sEFJ1hF72pl9Hb77lnM20KThGGoF7vRZKgcewZ8uWp%2FBra%2BuazRK6K8mPS4JYX6adZPY6s5GJ9ceNrQPCyE6Fy7nkBmbYyl%2BP4WdJzSRJBriNJGXvbacrRr8uJuMwt10cOc8FbO6OmfjhWSLyuJRaLW8pYlUWZ%2B9fq90xf5MoFZgl7kliEeuYdj8s69K32MNfI0MMGOqUB5IvaTrK3%2BK%2Bvc%2Fr7evFR%2BBbMI28OnbBAP43AbQkDbL%2FhXHXAUgGrNQLEt4BvxdkMoERLK6yoLeZlg8axoBJGZSgms7KvwZSbbM%2Fbc%2B%2BHFe8fpTpOkklNNFBmJNuqMmF%2F9rm90nve%2B9wSilEVFbTpsZ2DIXWo%2BE0khy0TU7iKhJDrVC9NSofzoIpEridCRMmj1Vy65cGuKp94WRXtvWbs%2Bat4aCqh&X-Amz-Signature=563b71337cf3668cb86200d540032b71a9f3e0f50117860854f89d643f29e7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBNWDZC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCFNX%2B4WgldQpmV%2B1Fg5LPWA1Hm%2FN1mN1tml156jD1SBAIgaZlQOGhQYEoIWWrQrpqv1bAan6iLQ5RhNJ8ClzbLIfUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJLJXqLQ0isMKOEtAircA1VtwfwVlCZ%2BApFopLIB56wWk2oqw1G6iRqU393129uPW85hLYw0yAh%2BUHyT4Y2SpmfkOCgTf061hWuBQbaZL58JrLdTWJ8AsaQTjVMg%2F2XXMH9w6HtgGvRKz0coeglqzSocL8qjylVpCbUlHXdku61GsixTDShmZmSaGxK%2F%2Fp6arlELDjwEGjmlBq5lXkDhS9mE7NsTYyfV%2BuoYR8PBPIv3GgFZRByM5IqmBfqC0UlaEjbY%2B729AEChrdrYf2%2FjDjy3ZwCTxoIgiJflDH6OQdkLCWC1I9EF%2FYcK9GYdnXM%2Bl3WXYDu5UfkY7yt44IfgHTfU%2BK7vJ43hNOEl3uYXbWBGXDrfd3lMthju1XhpaBUReiIFOObjtRI1ZChYbGVvbzPtR8SJEEbt6puwhqb6Cw2%2Fcj41WvV8bYzZ93sK17c5qWKeWO6S0WZ9QEKiW3sEFJ1hF72pl9Hb77lnM20KThGGoF7vRZKgcewZ8uWp%2FBra%2BuazRK6K8mPS4JYX6adZPY6s5GJ9ceNrQPCyE6Fy7nkBmbYyl%2BP4WdJzSRJBriNJGXvbacrRr8uJuMwt10cOc8FbO6OmfjhWSLyuJRaLW8pYlUWZ%2B9fq90xf5MoFZgl7kliEeuYdj8s69K32MNfI0MMGOqUB5IvaTrK3%2BK%2Bvc%2Fr7evFR%2BBbMI28OnbBAP43AbQkDbL%2FhXHXAUgGrNQLEt4BvxdkMoERLK6yoLeZlg8axoBJGZSgms7KvwZSbbM%2Fbc%2B%2BHFe8fpTpOkklNNFBmJNuqMmF%2F9rm90nve%2B9wSilEVFbTpsZ2DIXWo%2BE0khy0TU7iKhJDrVC9NSofzoIpEridCRMmj1Vy65cGuKp94WRXtvWbs%2Bat4aCqh&X-Amz-Signature=7bcbb18644fa395e280d8564dcf8bb6e0b088ac3d65ea18c041e885dec23da24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBNWDZC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCFNX%2B4WgldQpmV%2B1Fg5LPWA1Hm%2FN1mN1tml156jD1SBAIgaZlQOGhQYEoIWWrQrpqv1bAan6iLQ5RhNJ8ClzbLIfUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJLJXqLQ0isMKOEtAircA1VtwfwVlCZ%2BApFopLIB56wWk2oqw1G6iRqU393129uPW85hLYw0yAh%2BUHyT4Y2SpmfkOCgTf061hWuBQbaZL58JrLdTWJ8AsaQTjVMg%2F2XXMH9w6HtgGvRKz0coeglqzSocL8qjylVpCbUlHXdku61GsixTDShmZmSaGxK%2F%2Fp6arlELDjwEGjmlBq5lXkDhS9mE7NsTYyfV%2BuoYR8PBPIv3GgFZRByM5IqmBfqC0UlaEjbY%2B729AEChrdrYf2%2FjDjy3ZwCTxoIgiJflDH6OQdkLCWC1I9EF%2FYcK9GYdnXM%2Bl3WXYDu5UfkY7yt44IfgHTfU%2BK7vJ43hNOEl3uYXbWBGXDrfd3lMthju1XhpaBUReiIFOObjtRI1ZChYbGVvbzPtR8SJEEbt6puwhqb6Cw2%2Fcj41WvV8bYzZ93sK17c5qWKeWO6S0WZ9QEKiW3sEFJ1hF72pl9Hb77lnM20KThGGoF7vRZKgcewZ8uWp%2FBra%2BuazRK6K8mPS4JYX6adZPY6s5GJ9ceNrQPCyE6Fy7nkBmbYyl%2BP4WdJzSRJBriNJGXvbacrRr8uJuMwt10cOc8FbO6OmfjhWSLyuJRaLW8pYlUWZ%2B9fq90xf5MoFZgl7kliEeuYdj8s69K32MNfI0MMGOqUB5IvaTrK3%2BK%2Bvc%2Fr7evFR%2BBbMI28OnbBAP43AbQkDbL%2FhXHXAUgGrNQLEt4BvxdkMoERLK6yoLeZlg8axoBJGZSgms7KvwZSbbM%2Fbc%2B%2BHFe8fpTpOkklNNFBmJNuqMmF%2F9rm90nve%2B9wSilEVFbTpsZ2DIXWo%2BE0khy0TU7iKhJDrVC9NSofzoIpEridCRMmj1Vy65cGuKp94WRXtvWbs%2Bat4aCqh&X-Amz-Signature=1bee27c73d33f9496199be10f2c783e4b29b0ab5a931bbd32a4b49deb8b52d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBNWDZC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCFNX%2B4WgldQpmV%2B1Fg5LPWA1Hm%2FN1mN1tml156jD1SBAIgaZlQOGhQYEoIWWrQrpqv1bAan6iLQ5RhNJ8ClzbLIfUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJLJXqLQ0isMKOEtAircA1VtwfwVlCZ%2BApFopLIB56wWk2oqw1G6iRqU393129uPW85hLYw0yAh%2BUHyT4Y2SpmfkOCgTf061hWuBQbaZL58JrLdTWJ8AsaQTjVMg%2F2XXMH9w6HtgGvRKz0coeglqzSocL8qjylVpCbUlHXdku61GsixTDShmZmSaGxK%2F%2Fp6arlELDjwEGjmlBq5lXkDhS9mE7NsTYyfV%2BuoYR8PBPIv3GgFZRByM5IqmBfqC0UlaEjbY%2B729AEChrdrYf2%2FjDjy3ZwCTxoIgiJflDH6OQdkLCWC1I9EF%2FYcK9GYdnXM%2Bl3WXYDu5UfkY7yt44IfgHTfU%2BK7vJ43hNOEl3uYXbWBGXDrfd3lMthju1XhpaBUReiIFOObjtRI1ZChYbGVvbzPtR8SJEEbt6puwhqb6Cw2%2Fcj41WvV8bYzZ93sK17c5qWKeWO6S0WZ9QEKiW3sEFJ1hF72pl9Hb77lnM20KThGGoF7vRZKgcewZ8uWp%2FBra%2BuazRK6K8mPS4JYX6adZPY6s5GJ9ceNrQPCyE6Fy7nkBmbYyl%2BP4WdJzSRJBriNJGXvbacrRr8uJuMwt10cOc8FbO6OmfjhWSLyuJRaLW8pYlUWZ%2B9fq90xf5MoFZgl7kliEeuYdj8s69K32MNfI0MMGOqUB5IvaTrK3%2BK%2Bvc%2Fr7evFR%2BBbMI28OnbBAP43AbQkDbL%2FhXHXAUgGrNQLEt4BvxdkMoERLK6yoLeZlg8axoBJGZSgms7KvwZSbbM%2Fbc%2B%2BHFe8fpTpOkklNNFBmJNuqMmF%2F9rm90nve%2B9wSilEVFbTpsZ2DIXWo%2BE0khy0TU7iKhJDrVC9NSofzoIpEridCRMmj1Vy65cGuKp94WRXtvWbs%2Bat4aCqh&X-Amz-Signature=abb1099e846d3b335bf9fa23aef44c5e1a4b19fc29b23184532e8271d803fa1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBNWDZC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCFNX%2B4WgldQpmV%2B1Fg5LPWA1Hm%2FN1mN1tml156jD1SBAIgaZlQOGhQYEoIWWrQrpqv1bAan6iLQ5RhNJ8ClzbLIfUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJLJXqLQ0isMKOEtAircA1VtwfwVlCZ%2BApFopLIB56wWk2oqw1G6iRqU393129uPW85hLYw0yAh%2BUHyT4Y2SpmfkOCgTf061hWuBQbaZL58JrLdTWJ8AsaQTjVMg%2F2XXMH9w6HtgGvRKz0coeglqzSocL8qjylVpCbUlHXdku61GsixTDShmZmSaGxK%2F%2Fp6arlELDjwEGjmlBq5lXkDhS9mE7NsTYyfV%2BuoYR8PBPIv3GgFZRByM5IqmBfqC0UlaEjbY%2B729AEChrdrYf2%2FjDjy3ZwCTxoIgiJflDH6OQdkLCWC1I9EF%2FYcK9GYdnXM%2Bl3WXYDu5UfkY7yt44IfgHTfU%2BK7vJ43hNOEl3uYXbWBGXDrfd3lMthju1XhpaBUReiIFOObjtRI1ZChYbGVvbzPtR8SJEEbt6puwhqb6Cw2%2Fcj41WvV8bYzZ93sK17c5qWKeWO6S0WZ9QEKiW3sEFJ1hF72pl9Hb77lnM20KThGGoF7vRZKgcewZ8uWp%2FBra%2BuazRK6K8mPS4JYX6adZPY6s5GJ9ceNrQPCyE6Fy7nkBmbYyl%2BP4WdJzSRJBriNJGXvbacrRr8uJuMwt10cOc8FbO6OmfjhWSLyuJRaLW8pYlUWZ%2B9fq90xf5MoFZgl7kliEeuYdj8s69K32MNfI0MMGOqUB5IvaTrK3%2BK%2Bvc%2Fr7evFR%2BBbMI28OnbBAP43AbQkDbL%2FhXHXAUgGrNQLEt4BvxdkMoERLK6yoLeZlg8axoBJGZSgms7KvwZSbbM%2Fbc%2B%2BHFe8fpTpOkklNNFBmJNuqMmF%2F9rm90nve%2B9wSilEVFbTpsZ2DIXWo%2BE0khy0TU7iKhJDrVC9NSofzoIpEridCRMmj1Vy65cGuKp94WRXtvWbs%2Bat4aCqh&X-Amz-Signature=511a8bf0649564087b2af029abd9fcf024225b4b552959de73fe5e8e160e816f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBNWDZC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCFNX%2B4WgldQpmV%2B1Fg5LPWA1Hm%2FN1mN1tml156jD1SBAIgaZlQOGhQYEoIWWrQrpqv1bAan6iLQ5RhNJ8ClzbLIfUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJLJXqLQ0isMKOEtAircA1VtwfwVlCZ%2BApFopLIB56wWk2oqw1G6iRqU393129uPW85hLYw0yAh%2BUHyT4Y2SpmfkOCgTf061hWuBQbaZL58JrLdTWJ8AsaQTjVMg%2F2XXMH9w6HtgGvRKz0coeglqzSocL8qjylVpCbUlHXdku61GsixTDShmZmSaGxK%2F%2Fp6arlELDjwEGjmlBq5lXkDhS9mE7NsTYyfV%2BuoYR8PBPIv3GgFZRByM5IqmBfqC0UlaEjbY%2B729AEChrdrYf2%2FjDjy3ZwCTxoIgiJflDH6OQdkLCWC1I9EF%2FYcK9GYdnXM%2Bl3WXYDu5UfkY7yt44IfgHTfU%2BK7vJ43hNOEl3uYXbWBGXDrfd3lMthju1XhpaBUReiIFOObjtRI1ZChYbGVvbzPtR8SJEEbt6puwhqb6Cw2%2Fcj41WvV8bYzZ93sK17c5qWKeWO6S0WZ9QEKiW3sEFJ1hF72pl9Hb77lnM20KThGGoF7vRZKgcewZ8uWp%2FBra%2BuazRK6K8mPS4JYX6adZPY6s5GJ9ceNrQPCyE6Fy7nkBmbYyl%2BP4WdJzSRJBriNJGXvbacrRr8uJuMwt10cOc8FbO6OmfjhWSLyuJRaLW8pYlUWZ%2B9fq90xf5MoFZgl7kliEeuYdj8s69K32MNfI0MMGOqUB5IvaTrK3%2BK%2Bvc%2Fr7evFR%2BBbMI28OnbBAP43AbQkDbL%2FhXHXAUgGrNQLEt4BvxdkMoERLK6yoLeZlg8axoBJGZSgms7KvwZSbbM%2Fbc%2B%2BHFe8fpTpOkklNNFBmJNuqMmF%2F9rm90nve%2B9wSilEVFbTpsZ2DIXWo%2BE0khy0TU7iKhJDrVC9NSofzoIpEridCRMmj1Vy65cGuKp94WRXtvWbs%2Bat4aCqh&X-Amz-Signature=824f92027b35b5b95053ad409bb3f6b5a2e420b92159654f3410e1ccb59a225a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
