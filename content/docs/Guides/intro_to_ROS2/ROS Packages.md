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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWXZV2T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWsgWAHW1ichNfQUm3wV1v1Z2FAdy35DIXzdoIlGq5ZAiA10%2FhZhbFaKVWSjr9u1Z%2FcmGisTjlGCcf4vF4ToVreuCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbe4kM0CoxIOYYaQiKtwDvwpdjAtI1OncMCgDcO6XvVaf3xmSKGznhJp%2BrkuHeCFbDIF4Adk4Id4rXqYLhvngEPtVhpoWjtlbYtnIUZ%2FkDYsE%2FtJ0YC3%2FFrSY3v%2F%2Fi%2Bh3xcPzw25Dxgx0mdjCVXZvDKgtwVvRNnKtw9H1iv3CHiwYjr8hHFOx4YgrUcsFWGL%2BqRbnbbrHVs%2F8iUxtpi%2Bdx6KtFOU3RjCDfm%2FBHy9El0EgCWNh%2Faem3I0BaslJzP%2BnWta5sPXND1IC%2BhJ4%2FopXI6g1ll%2FUlqyryHUikq7Y34QzGEzJadLPOb0hm4pLuUCKfuLWmToMoWnfGPEjkvVDajm489H3PtDDvPKEH1zkQ%2F7u%2Bf%2BLufOQ2EVO98jzpVbERekpkyIy7PFUWvOlYLwYyTZ8fWTOPlVSQuwn3BrhsuHOhHIUT4fgDBn4cmVmGsQylxcBznIfTdHN448jaBCubC6YiLkO0rHTF%2Byvvs%2Ft0wR5NJlD9uRCZ4l4pNSa3ezmmvKUdu2Pcp9J7s4BqUtdT85qG7WpWowFNzNAgJwuSYRcPzEV1CYBHtOcatHR5ijRMv5%2BC4thkAcBIuOF7bEtJytO482oitiFNmq8K4%2FR1sb1kxq2BTfGB5eXXbjDPD9LvYF2vFd9uzd1MVww6vXvwwY6pgEU6jpYosh3yPbBWEHnOHQ2DV66tUk7E3fhUYlyHzqT02a%2BULIYoxRkTTJ%2FHPy5qBLDoqgfBZsoS6HyrbuUIiaMg0SNGAf%2FZJ1GviXTEupxHWtdnTZlWwql9mIBUZw4B7GcSqpPa439La8XtzzwkFItx%2BQBubdABlmp8OK3blb5i08Nfi4wkuFyT2L2yFXELdVk%2F4x1XGvIWBBYpScyMKYWDNV%2ByzaY&X-Amz-Signature=84b38b179bf9c0d944280ffb9ea0fbabc9c667cead8b4f65430c5e9ed6a1f707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWXZV2T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWsgWAHW1ichNfQUm3wV1v1Z2FAdy35DIXzdoIlGq5ZAiA10%2FhZhbFaKVWSjr9u1Z%2FcmGisTjlGCcf4vF4ToVreuCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbe4kM0CoxIOYYaQiKtwDvwpdjAtI1OncMCgDcO6XvVaf3xmSKGznhJp%2BrkuHeCFbDIF4Adk4Id4rXqYLhvngEPtVhpoWjtlbYtnIUZ%2FkDYsE%2FtJ0YC3%2FFrSY3v%2F%2Fi%2Bh3xcPzw25Dxgx0mdjCVXZvDKgtwVvRNnKtw9H1iv3CHiwYjr8hHFOx4YgrUcsFWGL%2BqRbnbbrHVs%2F8iUxtpi%2Bdx6KtFOU3RjCDfm%2FBHy9El0EgCWNh%2Faem3I0BaslJzP%2BnWta5sPXND1IC%2BhJ4%2FopXI6g1ll%2FUlqyryHUikq7Y34QzGEzJadLPOb0hm4pLuUCKfuLWmToMoWnfGPEjkvVDajm489H3PtDDvPKEH1zkQ%2F7u%2Bf%2BLufOQ2EVO98jzpVbERekpkyIy7PFUWvOlYLwYyTZ8fWTOPlVSQuwn3BrhsuHOhHIUT4fgDBn4cmVmGsQylxcBznIfTdHN448jaBCubC6YiLkO0rHTF%2Byvvs%2Ft0wR5NJlD9uRCZ4l4pNSa3ezmmvKUdu2Pcp9J7s4BqUtdT85qG7WpWowFNzNAgJwuSYRcPzEV1CYBHtOcatHR5ijRMv5%2BC4thkAcBIuOF7bEtJytO482oitiFNmq8K4%2FR1sb1kxq2BTfGB5eXXbjDPD9LvYF2vFd9uzd1MVww6vXvwwY6pgEU6jpYosh3yPbBWEHnOHQ2DV66tUk7E3fhUYlyHzqT02a%2BULIYoxRkTTJ%2FHPy5qBLDoqgfBZsoS6HyrbuUIiaMg0SNGAf%2FZJ1GviXTEupxHWtdnTZlWwql9mIBUZw4B7GcSqpPa439La8XtzzwkFItx%2BQBubdABlmp8OK3blb5i08Nfi4wkuFyT2L2yFXELdVk%2F4x1XGvIWBBYpScyMKYWDNV%2ByzaY&X-Amz-Signature=35d8b5a4779b744ea62ad66dfd6106eb6136ea68e3aaae261570130785dc8e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWXZV2T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWsgWAHW1ichNfQUm3wV1v1Z2FAdy35DIXzdoIlGq5ZAiA10%2FhZhbFaKVWSjr9u1Z%2FcmGisTjlGCcf4vF4ToVreuCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbe4kM0CoxIOYYaQiKtwDvwpdjAtI1OncMCgDcO6XvVaf3xmSKGznhJp%2BrkuHeCFbDIF4Adk4Id4rXqYLhvngEPtVhpoWjtlbYtnIUZ%2FkDYsE%2FtJ0YC3%2FFrSY3v%2F%2Fi%2Bh3xcPzw25Dxgx0mdjCVXZvDKgtwVvRNnKtw9H1iv3CHiwYjr8hHFOx4YgrUcsFWGL%2BqRbnbbrHVs%2F8iUxtpi%2Bdx6KtFOU3RjCDfm%2FBHy9El0EgCWNh%2Faem3I0BaslJzP%2BnWta5sPXND1IC%2BhJ4%2FopXI6g1ll%2FUlqyryHUikq7Y34QzGEzJadLPOb0hm4pLuUCKfuLWmToMoWnfGPEjkvVDajm489H3PtDDvPKEH1zkQ%2F7u%2Bf%2BLufOQ2EVO98jzpVbERekpkyIy7PFUWvOlYLwYyTZ8fWTOPlVSQuwn3BrhsuHOhHIUT4fgDBn4cmVmGsQylxcBznIfTdHN448jaBCubC6YiLkO0rHTF%2Byvvs%2Ft0wR5NJlD9uRCZ4l4pNSa3ezmmvKUdu2Pcp9J7s4BqUtdT85qG7WpWowFNzNAgJwuSYRcPzEV1CYBHtOcatHR5ijRMv5%2BC4thkAcBIuOF7bEtJytO482oitiFNmq8K4%2FR1sb1kxq2BTfGB5eXXbjDPD9LvYF2vFd9uzd1MVww6vXvwwY6pgEU6jpYosh3yPbBWEHnOHQ2DV66tUk7E3fhUYlyHzqT02a%2BULIYoxRkTTJ%2FHPy5qBLDoqgfBZsoS6HyrbuUIiaMg0SNGAf%2FZJ1GviXTEupxHWtdnTZlWwql9mIBUZw4B7GcSqpPa439La8XtzzwkFItx%2BQBubdABlmp8OK3blb5i08Nfi4wkuFyT2L2yFXELdVk%2F4x1XGvIWBBYpScyMKYWDNV%2ByzaY&X-Amz-Signature=e8959de5dd35aada6f0a79ccfe358b2d406efdc62af571717287140b58bf81b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWXZV2T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWsgWAHW1ichNfQUm3wV1v1Z2FAdy35DIXzdoIlGq5ZAiA10%2FhZhbFaKVWSjr9u1Z%2FcmGisTjlGCcf4vF4ToVreuCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbe4kM0CoxIOYYaQiKtwDvwpdjAtI1OncMCgDcO6XvVaf3xmSKGznhJp%2BrkuHeCFbDIF4Adk4Id4rXqYLhvngEPtVhpoWjtlbYtnIUZ%2FkDYsE%2FtJ0YC3%2FFrSY3v%2F%2Fi%2Bh3xcPzw25Dxgx0mdjCVXZvDKgtwVvRNnKtw9H1iv3CHiwYjr8hHFOx4YgrUcsFWGL%2BqRbnbbrHVs%2F8iUxtpi%2Bdx6KtFOU3RjCDfm%2FBHy9El0EgCWNh%2Faem3I0BaslJzP%2BnWta5sPXND1IC%2BhJ4%2FopXI6g1ll%2FUlqyryHUikq7Y34QzGEzJadLPOb0hm4pLuUCKfuLWmToMoWnfGPEjkvVDajm489H3PtDDvPKEH1zkQ%2F7u%2Bf%2BLufOQ2EVO98jzpVbERekpkyIy7PFUWvOlYLwYyTZ8fWTOPlVSQuwn3BrhsuHOhHIUT4fgDBn4cmVmGsQylxcBznIfTdHN448jaBCubC6YiLkO0rHTF%2Byvvs%2Ft0wR5NJlD9uRCZ4l4pNSa3ezmmvKUdu2Pcp9J7s4BqUtdT85qG7WpWowFNzNAgJwuSYRcPzEV1CYBHtOcatHR5ijRMv5%2BC4thkAcBIuOF7bEtJytO482oitiFNmq8K4%2FR1sb1kxq2BTfGB5eXXbjDPD9LvYF2vFd9uzd1MVww6vXvwwY6pgEU6jpYosh3yPbBWEHnOHQ2DV66tUk7E3fhUYlyHzqT02a%2BULIYoxRkTTJ%2FHPy5qBLDoqgfBZsoS6HyrbuUIiaMg0SNGAf%2FZJ1GviXTEupxHWtdnTZlWwql9mIBUZw4B7GcSqpPa439La8XtzzwkFItx%2BQBubdABlmp8OK3blb5i08Nfi4wkuFyT2L2yFXELdVk%2F4x1XGvIWBBYpScyMKYWDNV%2ByzaY&X-Amz-Signature=ea205e9529cea5016def790cd295bc3b4c30e210c22d7a21a3ff71041b3ccf74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWXZV2T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWsgWAHW1ichNfQUm3wV1v1Z2FAdy35DIXzdoIlGq5ZAiA10%2FhZhbFaKVWSjr9u1Z%2FcmGisTjlGCcf4vF4ToVreuCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbe4kM0CoxIOYYaQiKtwDvwpdjAtI1OncMCgDcO6XvVaf3xmSKGznhJp%2BrkuHeCFbDIF4Adk4Id4rXqYLhvngEPtVhpoWjtlbYtnIUZ%2FkDYsE%2FtJ0YC3%2FFrSY3v%2F%2Fi%2Bh3xcPzw25Dxgx0mdjCVXZvDKgtwVvRNnKtw9H1iv3CHiwYjr8hHFOx4YgrUcsFWGL%2BqRbnbbrHVs%2F8iUxtpi%2Bdx6KtFOU3RjCDfm%2FBHy9El0EgCWNh%2Faem3I0BaslJzP%2BnWta5sPXND1IC%2BhJ4%2FopXI6g1ll%2FUlqyryHUikq7Y34QzGEzJadLPOb0hm4pLuUCKfuLWmToMoWnfGPEjkvVDajm489H3PtDDvPKEH1zkQ%2F7u%2Bf%2BLufOQ2EVO98jzpVbERekpkyIy7PFUWvOlYLwYyTZ8fWTOPlVSQuwn3BrhsuHOhHIUT4fgDBn4cmVmGsQylxcBznIfTdHN448jaBCubC6YiLkO0rHTF%2Byvvs%2Ft0wR5NJlD9uRCZ4l4pNSa3ezmmvKUdu2Pcp9J7s4BqUtdT85qG7WpWowFNzNAgJwuSYRcPzEV1CYBHtOcatHR5ijRMv5%2BC4thkAcBIuOF7bEtJytO482oitiFNmq8K4%2FR1sb1kxq2BTfGB5eXXbjDPD9LvYF2vFd9uzd1MVww6vXvwwY6pgEU6jpYosh3yPbBWEHnOHQ2DV66tUk7E3fhUYlyHzqT02a%2BULIYoxRkTTJ%2FHPy5qBLDoqgfBZsoS6HyrbuUIiaMg0SNGAf%2FZJ1GviXTEupxHWtdnTZlWwql9mIBUZw4B7GcSqpPa439La8XtzzwkFItx%2BQBubdABlmp8OK3blb5i08Nfi4wkuFyT2L2yFXELdVk%2F4x1XGvIWBBYpScyMKYWDNV%2ByzaY&X-Amz-Signature=085f7b41be69a58694574e76b671e7a9ad64d9fc3196eb0d7da0ec855e61a4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWXZV2T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWsgWAHW1ichNfQUm3wV1v1Z2FAdy35DIXzdoIlGq5ZAiA10%2FhZhbFaKVWSjr9u1Z%2FcmGisTjlGCcf4vF4ToVreuCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbe4kM0CoxIOYYaQiKtwDvwpdjAtI1OncMCgDcO6XvVaf3xmSKGznhJp%2BrkuHeCFbDIF4Adk4Id4rXqYLhvngEPtVhpoWjtlbYtnIUZ%2FkDYsE%2FtJ0YC3%2FFrSY3v%2F%2Fi%2Bh3xcPzw25Dxgx0mdjCVXZvDKgtwVvRNnKtw9H1iv3CHiwYjr8hHFOx4YgrUcsFWGL%2BqRbnbbrHVs%2F8iUxtpi%2Bdx6KtFOU3RjCDfm%2FBHy9El0EgCWNh%2Faem3I0BaslJzP%2BnWta5sPXND1IC%2BhJ4%2FopXI6g1ll%2FUlqyryHUikq7Y34QzGEzJadLPOb0hm4pLuUCKfuLWmToMoWnfGPEjkvVDajm489H3PtDDvPKEH1zkQ%2F7u%2Bf%2BLufOQ2EVO98jzpVbERekpkyIy7PFUWvOlYLwYyTZ8fWTOPlVSQuwn3BrhsuHOhHIUT4fgDBn4cmVmGsQylxcBznIfTdHN448jaBCubC6YiLkO0rHTF%2Byvvs%2Ft0wR5NJlD9uRCZ4l4pNSa3ezmmvKUdu2Pcp9J7s4BqUtdT85qG7WpWowFNzNAgJwuSYRcPzEV1CYBHtOcatHR5ijRMv5%2BC4thkAcBIuOF7bEtJytO482oitiFNmq8K4%2FR1sb1kxq2BTfGB5eXXbjDPD9LvYF2vFd9uzd1MVww6vXvwwY6pgEU6jpYosh3yPbBWEHnOHQ2DV66tUk7E3fhUYlyHzqT02a%2BULIYoxRkTTJ%2FHPy5qBLDoqgfBZsoS6HyrbuUIiaMg0SNGAf%2FZJ1GviXTEupxHWtdnTZlWwql9mIBUZw4B7GcSqpPa439La8XtzzwkFItx%2BQBubdABlmp8OK3blb5i08Nfi4wkuFyT2L2yFXELdVk%2F4x1XGvIWBBYpScyMKYWDNV%2ByzaY&X-Amz-Signature=d74d3b8c7933f4f2933ffa4d4273109e4ce382dd5cdb8c41b89fe099fe2897b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWXZV2T%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWsgWAHW1ichNfQUm3wV1v1Z2FAdy35DIXzdoIlGq5ZAiA10%2FhZhbFaKVWSjr9u1Z%2FcmGisTjlGCcf4vF4ToVreuCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbe4kM0CoxIOYYaQiKtwDvwpdjAtI1OncMCgDcO6XvVaf3xmSKGznhJp%2BrkuHeCFbDIF4Adk4Id4rXqYLhvngEPtVhpoWjtlbYtnIUZ%2FkDYsE%2FtJ0YC3%2FFrSY3v%2F%2Fi%2Bh3xcPzw25Dxgx0mdjCVXZvDKgtwVvRNnKtw9H1iv3CHiwYjr8hHFOx4YgrUcsFWGL%2BqRbnbbrHVs%2F8iUxtpi%2Bdx6KtFOU3RjCDfm%2FBHy9El0EgCWNh%2Faem3I0BaslJzP%2BnWta5sPXND1IC%2BhJ4%2FopXI6g1ll%2FUlqyryHUikq7Y34QzGEzJadLPOb0hm4pLuUCKfuLWmToMoWnfGPEjkvVDajm489H3PtDDvPKEH1zkQ%2F7u%2Bf%2BLufOQ2EVO98jzpVbERekpkyIy7PFUWvOlYLwYyTZ8fWTOPlVSQuwn3BrhsuHOhHIUT4fgDBn4cmVmGsQylxcBznIfTdHN448jaBCubC6YiLkO0rHTF%2Byvvs%2Ft0wR5NJlD9uRCZ4l4pNSa3ezmmvKUdu2Pcp9J7s4BqUtdT85qG7WpWowFNzNAgJwuSYRcPzEV1CYBHtOcatHR5ijRMv5%2BC4thkAcBIuOF7bEtJytO482oitiFNmq8K4%2FR1sb1kxq2BTfGB5eXXbjDPD9LvYF2vFd9uzd1MVww6vXvwwY6pgEU6jpYosh3yPbBWEHnOHQ2DV66tUk7E3fhUYlyHzqT02a%2BULIYoxRkTTJ%2FHPy5qBLDoqgfBZsoS6HyrbuUIiaMg0SNGAf%2FZJ1GviXTEupxHWtdnTZlWwql9mIBUZw4B7GcSqpPa439La8XtzzwkFItx%2BQBubdABlmp8OK3blb5i08Nfi4wkuFyT2L2yFXELdVk%2F4x1XGvIWBBYpScyMKYWDNV%2ByzaY&X-Amz-Signature=d7babc100c6253452fdfe11bb69bb3daabb3c890c62b9be37669c43d70d3a270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
