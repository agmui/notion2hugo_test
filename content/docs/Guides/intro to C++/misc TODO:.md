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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAMNVAD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKN2uezbPJgGt5Xu2dRyNBdMFO2BnIW892ryeX%2BDzRwAiBZvcJaM8CbOhHJA7kT2VqgNJdWt4v9zVMflwA02JwFDiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgY5B8%2BRLrS3eZkLzKtwDe7B0vOA3vJWVr3hxkJ5gHUa4xpufC4FCln9zZbVTYIkuLnzRZShZ3bLgSAjVAz2DOcUUnsI22cIAoEhDVH%2FNh69YG7XhZv%2Bn8CIigwzZcVLO8Sl02YsUa%2F%2BWJIgU4%2BmpWTeUqLyaEHLJgsbAeI2rcEGcuB5elYh7TuLBCZ%2BskawT1sECnHOWElWGub4uSUFSc1AKkdp%2BEyIoFWP9bDnBlKaPUtDFteKOmKAldOwsYPf3Y175Kqzgxlm8wKuPw0IeOejsdNHiso6skknPAU7iTR6fLYojNj2lbzGT56EaK4xYXwwBaPCgGrqXKjNV%2BsU2vY9stV8tYqxezZXzEohEIpSfsgX%2FfHZTILL8BnVrquBJTrAMML0OPGToi%2FnbZM6U1sUy2MZxlMWYaB1b4OWY5uD%2Brk9SW6ABdKq%2FVu5hruiK3fWwDgY0WNBAx%2BY7FkZ4qEJ%2FBRcXvx%2BLEQ47RruQCdzr9s6jrNfznt62pzArBb3Ax832QCW5%2F8i2xGwHJUR5tDotjXkPzKd2H4JMV3o70CD%2F1fWjpM0IilWhuc1la98a3n%2BmLjq7qnjRCWaq2abLr2u7iQ4FuU88jcKEAfdGlRG11WSRt0%2FHAdIXL8s%2BFYNFxbTJcv%2B9dIFvdwwwmevOvgY6pgE7Yt977S%2FxOYRjEG1x%2FPDbBjG7VF43dz4V%2BCCIfntiqm5hl%2BrXgLh2HeqRc2%2BZ52eWOfR8XbVUWUmJ%2BSLharZ%2BtMKFwLT%2B9t3VuSIJwLWXsXt5IAS%2B8IyOmfmfq2POkjKLwQnRgkkHVIMDXPtCBZNdy8scJ2R7tFLeYWL%2FUH8YZMFm3CxBxbtNL0Rk4jLDHvxbM0sOs3hEBJEdmGRP%2B9iyfH6WBe9h&X-Amz-Signature=b08ed1376cb03b3dfc41e7a408f50977cb63f3d96375191a882f09d23505a184&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAMNVAD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKN2uezbPJgGt5Xu2dRyNBdMFO2BnIW892ryeX%2BDzRwAiBZvcJaM8CbOhHJA7kT2VqgNJdWt4v9zVMflwA02JwFDiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgY5B8%2BRLrS3eZkLzKtwDe7B0vOA3vJWVr3hxkJ5gHUa4xpufC4FCln9zZbVTYIkuLnzRZShZ3bLgSAjVAz2DOcUUnsI22cIAoEhDVH%2FNh69YG7XhZv%2Bn8CIigwzZcVLO8Sl02YsUa%2F%2BWJIgU4%2BmpWTeUqLyaEHLJgsbAeI2rcEGcuB5elYh7TuLBCZ%2BskawT1sECnHOWElWGub4uSUFSc1AKkdp%2BEyIoFWP9bDnBlKaPUtDFteKOmKAldOwsYPf3Y175Kqzgxlm8wKuPw0IeOejsdNHiso6skknPAU7iTR6fLYojNj2lbzGT56EaK4xYXwwBaPCgGrqXKjNV%2BsU2vY9stV8tYqxezZXzEohEIpSfsgX%2FfHZTILL8BnVrquBJTrAMML0OPGToi%2FnbZM6U1sUy2MZxlMWYaB1b4OWY5uD%2Brk9SW6ABdKq%2FVu5hruiK3fWwDgY0WNBAx%2BY7FkZ4qEJ%2FBRcXvx%2BLEQ47RruQCdzr9s6jrNfznt62pzArBb3Ax832QCW5%2F8i2xGwHJUR5tDotjXkPzKd2H4JMV3o70CD%2F1fWjpM0IilWhuc1la98a3n%2BmLjq7qnjRCWaq2abLr2u7iQ4FuU88jcKEAfdGlRG11WSRt0%2FHAdIXL8s%2BFYNFxbTJcv%2B9dIFvdwwwmevOvgY6pgE7Yt977S%2FxOYRjEG1x%2FPDbBjG7VF43dz4V%2BCCIfntiqm5hl%2BrXgLh2HeqRc2%2BZ52eWOfR8XbVUWUmJ%2BSLharZ%2BtMKFwLT%2B9t3VuSIJwLWXsXt5IAS%2B8IyOmfmfq2POkjKLwQnRgkkHVIMDXPtCBZNdy8scJ2R7tFLeYWL%2FUH8YZMFm3CxBxbtNL0Rk4jLDHvxbM0sOs3hEBJEdmGRP%2B9iyfH6WBe9h&X-Amz-Signature=8786863bdfd9f53dab437441cc0c5dfcb038e0be73949c0bd5227201702a641d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
