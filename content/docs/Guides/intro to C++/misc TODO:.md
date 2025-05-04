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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVVBABE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFgJJQvAIW3riaK0I%2FOqmZh%2BpdNVwysc7%2FlfDR8z7ZYSAiA704rMxorjvrayYcI2mfMGBjYE4WlFfJEqIPTHm8PZ9CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNxJGLf5XE%2B6yPRStKtwD8LQOUppNSN13Iy8%2BfINacOiW1zsgvG4A8xgTyqhi2vchKc%2B4Mj3NsNivHyXbcWZNT7dDlNaCPUKTO2Jm8a2niDV%2BN5T93%2FPVSkro5sJVJLbIW5w7yax8XfnxVsSBQf%2BySjxro5oCwaoZnQyRq77GgUvRDvSmf7264pwFkMqObjHTe5aeqTLu8gwPG%2BG%2Fpw2Gqx0%2Bwa%2Be1EGeEUe20qqK444NbeXq8cynNjEK8qMz2CmsCT9wqkLlVy0thj%2FdCy%2BAtORS3RCp%2F7kouACunA8ym3dz2BfPGt4gHwBBteFsE9eNTUOzytvq27lbowDPa2uo%2Fq%2BHYxyS9VP6%2B0%2BA6x%2BiQMxEETcs8YvReiR8XOAHHOzGKak6ZLeANEZz%2FtEjOtN9vVZD9VEVmKe5ExcIw84gqJPijn4n7pGodfhHUYq1vQijJpjD7ky7WSMG6Z5BO2hEhmn%2Faff3oN924uoF0n76tWJd%2FpusCEQd6idHY60om9Xwal3bxoU5yhk2ali6X6x2n18Gf%2FAmK0q3KMrOnMY360idv8rCUsoKcoh8sESoKPlZkRkJ%2FJyrzbSky%2FC%2FvkjTyonyHLIlOcRuvWSvo5%2F0d%2FVYn9jEW21LLflSjSmkLupLVcmPHAD8h1H%2Be5QwnuvbwAY6pgGCeQbCwKnjhXa65yLd3yZGVwS4pyUy%2BKGdgUyGp3YtihDD7Pk6HqZzBHAF7m6e54xcGS16nc5T7VT%2F7lr0ClZnpR8T3aPEMptC8yjGpMLVZC8ncF%2BY0r%2FUelPeenMoYe%2BnVqmBNULRUnECud9puyhCLqOqTCvX%2FBscrKvfZadbymvV%2B%2BKLXWsKtIUknUQxeQ%2FhuQADaXEBBdkKpvmYBVURUHXFS1qE&X-Amz-Signature=e25d064827040c99e313e63da0818c88a28c7a7454d1e8607f05fab1e5672c51&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVVBABE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFgJJQvAIW3riaK0I%2FOqmZh%2BpdNVwysc7%2FlfDR8z7ZYSAiA704rMxorjvrayYcI2mfMGBjYE4WlFfJEqIPTHm8PZ9CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNxJGLf5XE%2B6yPRStKtwD8LQOUppNSN13Iy8%2BfINacOiW1zsgvG4A8xgTyqhi2vchKc%2B4Mj3NsNivHyXbcWZNT7dDlNaCPUKTO2Jm8a2niDV%2BN5T93%2FPVSkro5sJVJLbIW5w7yax8XfnxVsSBQf%2BySjxro5oCwaoZnQyRq77GgUvRDvSmf7264pwFkMqObjHTe5aeqTLu8gwPG%2BG%2Fpw2Gqx0%2Bwa%2Be1EGeEUe20qqK444NbeXq8cynNjEK8qMz2CmsCT9wqkLlVy0thj%2FdCy%2BAtORS3RCp%2F7kouACunA8ym3dz2BfPGt4gHwBBteFsE9eNTUOzytvq27lbowDPa2uo%2Fq%2BHYxyS9VP6%2B0%2BA6x%2BiQMxEETcs8YvReiR8XOAHHOzGKak6ZLeANEZz%2FtEjOtN9vVZD9VEVmKe5ExcIw84gqJPijn4n7pGodfhHUYq1vQijJpjD7ky7WSMG6Z5BO2hEhmn%2Faff3oN924uoF0n76tWJd%2FpusCEQd6idHY60om9Xwal3bxoU5yhk2ali6X6x2n18Gf%2FAmK0q3KMrOnMY360idv8rCUsoKcoh8sESoKPlZkRkJ%2FJyrzbSky%2FC%2FvkjTyonyHLIlOcRuvWSvo5%2F0d%2FVYn9jEW21LLflSjSmkLupLVcmPHAD8h1H%2Be5QwnuvbwAY6pgGCeQbCwKnjhXa65yLd3yZGVwS4pyUy%2BKGdgUyGp3YtihDD7Pk6HqZzBHAF7m6e54xcGS16nc5T7VT%2F7lr0ClZnpR8T3aPEMptC8yjGpMLVZC8ncF%2BY0r%2FUelPeenMoYe%2BnVqmBNULRUnECud9puyhCLqOqTCvX%2FBscrKvfZadbymvV%2B%2BKLXWsKtIUknUQxeQ%2FhuQADaXEBBdkKpvmYBVURUHXFS1qE&X-Amz-Signature=322fb88ca601421ec579b36e89a746d476e034b93dc41e7a84c22c9e9170ef53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
