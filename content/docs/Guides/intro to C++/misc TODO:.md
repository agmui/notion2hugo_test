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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQK2YPN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn9nuktRzPQy50sLT%2FrGMJsgKpq3wl%2FUWra57BywmjiAiEA2vVQh8t6X8sNNK1hGqR805I3nCaVZs68KeFWmYiBfSEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmVDQudGDQBOVytbSrcA1CjwfXU0Jn7KD1swDnN0ARFayr5qCUdvduUBj%2B9rMPXb%2FewfI%2BBsy0tjr%2FayYzU7GKr5Sgn9yUDgToT3sQGCuVhWst%2F8jPlUPkE9lDdmBSCNO3HPNPnxG3PXhIDvZQs7hqVgRIPmpcLU6XQo11PRlgA9vdrh9btfXJIiKR91kiyrqBBZy1hJVk1HiNVaJiBSk8VK%2B4FW2JCMQMPLfdB63Zd66j%2F5heIGMV5X%2FmfsiTEhHSKOCGo0Sp8otqkm%2FOOdM7FU2DbttnnKizr8Mk9MvewDuMr6lSXojIvKY6YKTTPE4VnFlridkPYBiqSgsRzg8SVWKyw%2BDC0sqNMzrk86gOXd7FJZOq80bRasUAtrxvM042MeC74drD0l9xW832qZxvc8MhG5tFpq1kUsjxhAa%2FXMSEGfAXzwESScH12UxHX1kcGz8xCpmD0GF%2FWskeEV0St37oDcVA5ER3Z8J1q4%2BUhlsGfuIHj6F6Jufjx4tOXGKsmaSX2Eflaa%2FnIF3zZkCmUXwlsDii50ph6MHtvyBzW75BAwkSW0F8k3z5U%2Bn6ikQqe8zObW2HMOgF55pnC5YOAItuGaMDjA1Ml6ivov1h1lA48aCXe1rU2E1L9cxCrJKDSWF8tcW4VLiF7MIuc8rwGOqUBN3U7dm1qGARbCi0k%2FtBfko3p8U%2Fe%2B5QV1v6XZwG%2F%2BkVI%2BUWh64fMGRK73613m1xftYJxuIyK0%2FRtSdMS3K8NMwH07eYCsHW3a3pg9dBradcR%2FsjP3zP4ec8Bgr%2B9CNqrtdJgvA0dEdlj8yq%2FQgpuSpdH3sBnaSF26q2n4seDwxSlzHtj0Uvtj48R8vIlb165Z4xdMR%2BCVB9d8kJ9e8G5gEniCz%2FH&X-Amz-Signature=a24a4d2337cd5fcb809b4e0ee8af6a73c6317fc282dc4f6e5975d9e5b0c58f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQK2YPN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn9nuktRzPQy50sLT%2FrGMJsgKpq3wl%2FUWra57BywmjiAiEA2vVQh8t6X8sNNK1hGqR805I3nCaVZs68KeFWmYiBfSEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmVDQudGDQBOVytbSrcA1CjwfXU0Jn7KD1swDnN0ARFayr5qCUdvduUBj%2B9rMPXb%2FewfI%2BBsy0tjr%2FayYzU7GKr5Sgn9yUDgToT3sQGCuVhWst%2F8jPlUPkE9lDdmBSCNO3HPNPnxG3PXhIDvZQs7hqVgRIPmpcLU6XQo11PRlgA9vdrh9btfXJIiKR91kiyrqBBZy1hJVk1HiNVaJiBSk8VK%2B4FW2JCMQMPLfdB63Zd66j%2F5heIGMV5X%2FmfsiTEhHSKOCGo0Sp8otqkm%2FOOdM7FU2DbttnnKizr8Mk9MvewDuMr6lSXojIvKY6YKTTPE4VnFlridkPYBiqSgsRzg8SVWKyw%2BDC0sqNMzrk86gOXd7FJZOq80bRasUAtrxvM042MeC74drD0l9xW832qZxvc8MhG5tFpq1kUsjxhAa%2FXMSEGfAXzwESScH12UxHX1kcGz8xCpmD0GF%2FWskeEV0St37oDcVA5ER3Z8J1q4%2BUhlsGfuIHj6F6Jufjx4tOXGKsmaSX2Eflaa%2FnIF3zZkCmUXwlsDii50ph6MHtvyBzW75BAwkSW0F8k3z5U%2Bn6ikQqe8zObW2HMOgF55pnC5YOAItuGaMDjA1Ml6ivov1h1lA48aCXe1rU2E1L9cxCrJKDSWF8tcW4VLiF7MIuc8rwGOqUBN3U7dm1qGARbCi0k%2FtBfko3p8U%2Fe%2B5QV1v6XZwG%2F%2BkVI%2BUWh64fMGRK73613m1xftYJxuIyK0%2FRtSdMS3K8NMwH07eYCsHW3a3pg9dBradcR%2FsjP3zP4ec8Bgr%2B9CNqrtdJgvA0dEdlj8yq%2FQgpuSpdH3sBnaSF26q2n4seDwxSlzHtj0Uvtj48R8vIlb165Z4xdMR%2BCVB9d8kJ9e8G5gEniCz%2FH&X-Amz-Signature=5ff12713d7acfacb0b46eb31f187b1f236cd6bae457cb061515ac162704146c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
