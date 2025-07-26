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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRFEDBD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCMmMGB%2BC7yQwQYaBgwdEN2A2rwVroyR85tqbLEVQuVsQIhAKuPLVNDkeQ3DcmtRiCG7G%2BShQY1HBHHHoXlfjc9u4%2B%2FKv8DCFYQABoMNjM3NDIzMTgzODA1IgxVVNtY2dFW3eom%2FXAq3AMxmRn5sfmkm%2FpGOWoacYlBelyHDAioOrf%2BtNtVs9acB26qj3ky40ip9Cc%2Bf3g0UCChpx9JwwxrPnSLgSQBvCfx0KXq5JFkg0iRlK0hc5vlrE8c67XsNjzgdqa8bZxrL03AFUFEujZ0f5WWRzAD59MU5%2FCykkkxJzWGaSb85xvnRHm27mKwrgf9ZKfZKoTVW7UPWMUugsDbyZOAirkiduv0LcunYGEMgdo9jkawqDLStIWutOzKCgeo9pJH1yD0XKYGSCLLwlT71mzIzFvE1%2BHuk4QcCBZ2XVReFm8%2FYUa6fzd2aEh3d88PQuxOuZwNmkBoxp1zH%2B1ccfHzndcxaHLYWoNIA9nn1pZcMGPPZi0UFKinCLnAvUj8XAiT2SsTFZ8VKUYzi2O155L1HO9Qt6O0GTyfjhy05UWspS1PjVAs7cTfL3Qi7OF6ikEk%2B%2FumGwkcFBIsnuiB9RoB2jhaMyVhctTFXj3N4ixmvnzS7xne%2BO4mUAvN0IvyF4tjfBgz1hQU3K%2BksNPWu5mAq0wZtbDziwpCpEeqEL7ST1SArhlnNu2FwRr7OhC2LmFUeEHaWA7b1JP0dLLdvUx%2Fx4pT5FJXFrq0gZyZ6OuP2%2BF%2F46Ln6aaisfUElQKRYzdQ%2BTCovJHEBjqkAfkGJ3nYYPlIxbjvuVZXOp5Z7%2FZqYJteAHdnVHuJZfw2464BgtSpuTwONhGJTNP4l4AJOPTnQhbOvzD6pEpXezEukkyrte6wciRSxLomitOP4sExPS6EmgJcYfkuwsZgfmi3d%2F6GkAyU72pTEqP2W93RWjsyoo0F3hrZMxt8pBmUv26Yonx%2B9XU0IWUEbclCQ1%2FvYAdIRIdGZKIdZC%2BFWsQkxPK%2B&X-Amz-Signature=b4317e6fb23f48cff9b17e710c4324f9f21162d8d46d5ef322ab36ab5b03b506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRFEDBD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCMmMGB%2BC7yQwQYaBgwdEN2A2rwVroyR85tqbLEVQuVsQIhAKuPLVNDkeQ3DcmtRiCG7G%2BShQY1HBHHHoXlfjc9u4%2B%2FKv8DCFYQABoMNjM3NDIzMTgzODA1IgxVVNtY2dFW3eom%2FXAq3AMxmRn5sfmkm%2FpGOWoacYlBelyHDAioOrf%2BtNtVs9acB26qj3ky40ip9Cc%2Bf3g0UCChpx9JwwxrPnSLgSQBvCfx0KXq5JFkg0iRlK0hc5vlrE8c67XsNjzgdqa8bZxrL03AFUFEujZ0f5WWRzAD59MU5%2FCykkkxJzWGaSb85xvnRHm27mKwrgf9ZKfZKoTVW7UPWMUugsDbyZOAirkiduv0LcunYGEMgdo9jkawqDLStIWutOzKCgeo9pJH1yD0XKYGSCLLwlT71mzIzFvE1%2BHuk4QcCBZ2XVReFm8%2FYUa6fzd2aEh3d88PQuxOuZwNmkBoxp1zH%2B1ccfHzndcxaHLYWoNIA9nn1pZcMGPPZi0UFKinCLnAvUj8XAiT2SsTFZ8VKUYzi2O155L1HO9Qt6O0GTyfjhy05UWspS1PjVAs7cTfL3Qi7OF6ikEk%2B%2FumGwkcFBIsnuiB9RoB2jhaMyVhctTFXj3N4ixmvnzS7xne%2BO4mUAvN0IvyF4tjfBgz1hQU3K%2BksNPWu5mAq0wZtbDziwpCpEeqEL7ST1SArhlnNu2FwRr7OhC2LmFUeEHaWA7b1JP0dLLdvUx%2Fx4pT5FJXFrq0gZyZ6OuP2%2BF%2F46Ln6aaisfUElQKRYzdQ%2BTCovJHEBjqkAfkGJ3nYYPlIxbjvuVZXOp5Z7%2FZqYJteAHdnVHuJZfw2464BgtSpuTwONhGJTNP4l4AJOPTnQhbOvzD6pEpXezEukkyrte6wciRSxLomitOP4sExPS6EmgJcYfkuwsZgfmi3d%2F6GkAyU72pTEqP2W93RWjsyoo0F3hrZMxt8pBmUv26Yonx%2B9XU0IWUEbclCQ1%2FvYAdIRIdGZKIdZC%2BFWsQkxPK%2B&X-Amz-Signature=71c219d337b877dcbfd7cf6fa4188525de6f8aa67f86346a73241201f1c4d53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
