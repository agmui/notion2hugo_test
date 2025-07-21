---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTPSXWVL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFiLwyBEEBHZzJHEo03YqY%2FR8ojuFwXptod1ZPU0q9AiAlGIy7WmxuXkrFEdGphAfIUyJiqu%2FFhvKajXeb4S6HNCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGrjvxd4C27svKrEKtwDurUff9R4w3%2Fo8zCnwNZVTZubQ8NGavga3k8cJwSj2%2FrTAVtXFVqSpibtxKjfAmvi6m8wRZ8svFPc9oC3K3Hwe2tG2093CdFTSDh62yg%2ByfM4EpC%2BermEVhEspjnQ9JwWaLdvq6Imb0Uk%2FBKqAod%2B0NAw5HikWlCfE7DTKrbxdyBzfVRSiBRmBpSnIHHpKC4nBNVIpUea1FxUYq7ws7zBxOPyWafczqQZ4ugSgvesccfktvqvFdwa8qQCFZSUj03KPPw6A685i8%2F0jr4VVQU%2BZXlthzEei4cQ0Egw1%2F%2FCuVvnOhoF14tArj2XVLGXy6zRDneIWQ%2FTTcYBXbhsRQxtDKtzrC4a0wfMwRuYus1jHHm%2FYQJGgQprtIonz2KIekpx5pXWjUv4miEF0ONUIQF0GtK4jTNM%2BQTf%2B7YZajaynxWKblaeL6G%2ByADv9tlClByjECs%2B4buQp00fa7IojaQoBKaI5QzKOERAbph11T%2F5w%2FXLJ%2F3HrgMVMhoH9AEKF5qlEZ%2FY734E8OYpUQg3vAltwBvXZUghtMuBd5Dc9htk9tkZYh9KCE0YTCK%2B5w1RgOEFoXKYI5wijl5ndvVoFQwjMN7vfQCrYIruHpCb77sfe0bJdZQCnImPOVd3ESgwmdf6wwY6pgGiB%2Fj25pyCQp1xv2ZmKtDvmBpXqq9AiRoc0uKdzlOgKGW5QeM8Robc4rVBHZQiizOMHbLsCXX8JAz%2FEyhBGpqfUvN9mVN7mYZj%2BNpG5%2FgnBQRNZm%2Fqu9%2Bf4sPnBOVf%2FLOxf9IFP3G%2BRbmc3u7fvo20Mx3UVy2Sp89%2BPlhushJN4k0nJEZzIn44KwW79kfELk8Y3jQt6jHe84j3TnHETT3iLo5jRRP0&X-Amz-Signature=9539bc1ac2acbbcf676d1c2834272ae6e4b87204cc5b4c353cd4339875870214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTPSXWVL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFiLwyBEEBHZzJHEo03YqY%2FR8ojuFwXptod1ZPU0q9AiAlGIy7WmxuXkrFEdGphAfIUyJiqu%2FFhvKajXeb4S6HNCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGrjvxd4C27svKrEKtwDurUff9R4w3%2Fo8zCnwNZVTZubQ8NGavga3k8cJwSj2%2FrTAVtXFVqSpibtxKjfAmvi6m8wRZ8svFPc9oC3K3Hwe2tG2093CdFTSDh62yg%2ByfM4EpC%2BermEVhEspjnQ9JwWaLdvq6Imb0Uk%2FBKqAod%2B0NAw5HikWlCfE7DTKrbxdyBzfVRSiBRmBpSnIHHpKC4nBNVIpUea1FxUYq7ws7zBxOPyWafczqQZ4ugSgvesccfktvqvFdwa8qQCFZSUj03KPPw6A685i8%2F0jr4VVQU%2BZXlthzEei4cQ0Egw1%2F%2FCuVvnOhoF14tArj2XVLGXy6zRDneIWQ%2FTTcYBXbhsRQxtDKtzrC4a0wfMwRuYus1jHHm%2FYQJGgQprtIonz2KIekpx5pXWjUv4miEF0ONUIQF0GtK4jTNM%2BQTf%2B7YZajaynxWKblaeL6G%2ByADv9tlClByjECs%2B4buQp00fa7IojaQoBKaI5QzKOERAbph11T%2F5w%2FXLJ%2F3HrgMVMhoH9AEKF5qlEZ%2FY734E8OYpUQg3vAltwBvXZUghtMuBd5Dc9htk9tkZYh9KCE0YTCK%2B5w1RgOEFoXKYI5wijl5ndvVoFQwjMN7vfQCrYIruHpCb77sfe0bJdZQCnImPOVd3ESgwmdf6wwY6pgGiB%2Fj25pyCQp1xv2ZmKtDvmBpXqq9AiRoc0uKdzlOgKGW5QeM8Robc4rVBHZQiizOMHbLsCXX8JAz%2FEyhBGpqfUvN9mVN7mYZj%2BNpG5%2FgnBQRNZm%2Fqu9%2Bf4sPnBOVf%2FLOxf9IFP3G%2BRbmc3u7fvo20Mx3UVy2Sp89%2BPlhushJN4k0nJEZzIn44KwW79kfELk8Y3jQt6jHe84j3TnHETT3iLo5jRRP0&X-Amz-Signature=11858ac9d92a8db7291410152734a61e30bb60878d469e49b86a81cd65c1d975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
