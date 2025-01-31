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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYYI7CN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0uRXhsvksjd5JDW%2F0SvoDB%2BkjewUjzIb3jZTI%2F1SBZAiEA%2F2IeR2p2TsweAkcthhVqYJtYRr4YatEyIQlcfB%2F4AqMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGegCfy7ukYYdqklWCrcAx8uP9vRE%2FxrVksKZHd7HD4M0nqAvoFH7kKqU9TfU2yDFuICut40wzhsw87HbMpx%2FBfdWjjP7pP%2BQ%2BN9nj%2FKLCc%2FdxyDrnPs1P3TtJDkcFwNgNkXQD0ykHcnQkWatf8G%2FBnH9Q9TyneqIT3oJa6%2Frxdg2D9NR0uw1fAwxRXkMU2ST6%2Bn%2FzX0vcNbuVpuDK%2FGFsMUXbnEl2NwEV5%2BPhsxvt13S5YoV%2FP6NnL%2FPc6WobzsS8az5cZswOrzkFh0TevIzpLjsVP31Ld%2FofoDBaBtwg%2FUvD%2Bstx%2FrHRXuT5TJPzWOOwfMqdSuoqIoqCo78veVCq%2F8GtKKQPLwv8e0IGS782fe1NS3akWeCk95wpiJsIvDPYNfSnbDd323vc1m6H%2FDbqgOcQW8Fs0FGpXeIYSDT1MkltZDBCTKFCBp65E6lg1Bp3oR5QoXUtwrdyHpndxnYHb4bTzTWb%2BYAwRLeg4Msg%2B2jA%2BFFJoiMDoribPl62bdZhZNl3QJSmCsWftHW8%2B2A7xvXrNbCuhcGu6kXOS7O2SjKGUCUANu8jxaHO2AMKSCwtbzESZbuYckbDk9hPn5SuJBF4crdM6Qlxj9R%2FISdwnC6MEdH9WPKgbcUod3xt88aXNXlGxPSG1ETAHcMKy58rwGOqUBo9%2FjjLXNer1auJZVRccYeVUgyHh8XQeeKL3edvnPTImDwRe0idKTK%2FTE8SBkvM%2BDtwqvrmpJxUVRXJDksGEutRIVMQzSSzsYbzc9bpcWypuvQ3YP%2FPBqlQTp83EU2T2PlP%2Bhn4GkFPnTESFQARyWOaXfSfMy3lAJRqcABVc4M%2FuuOxPRTQXvsjDTozupyuryGhwJvVZQ97quZ0ALHX5Mg4r2gS5t&X-Amz-Signature=6d6a959507fd41b140d7e78deebdd340a18df235beef4e0386692a7a8a2cb60e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYYI7CN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0uRXhsvksjd5JDW%2F0SvoDB%2BkjewUjzIb3jZTI%2F1SBZAiEA%2F2IeR2p2TsweAkcthhVqYJtYRr4YatEyIQlcfB%2F4AqMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGegCfy7ukYYdqklWCrcAx8uP9vRE%2FxrVksKZHd7HD4M0nqAvoFH7kKqU9TfU2yDFuICut40wzhsw87HbMpx%2FBfdWjjP7pP%2BQ%2BN9nj%2FKLCc%2FdxyDrnPs1P3TtJDkcFwNgNkXQD0ykHcnQkWatf8G%2FBnH9Q9TyneqIT3oJa6%2Frxdg2D9NR0uw1fAwxRXkMU2ST6%2Bn%2FzX0vcNbuVpuDK%2FGFsMUXbnEl2NwEV5%2BPhsxvt13S5YoV%2FP6NnL%2FPc6WobzsS8az5cZswOrzkFh0TevIzpLjsVP31Ld%2FofoDBaBtwg%2FUvD%2Bstx%2FrHRXuT5TJPzWOOwfMqdSuoqIoqCo78veVCq%2F8GtKKQPLwv8e0IGS782fe1NS3akWeCk95wpiJsIvDPYNfSnbDd323vc1m6H%2FDbqgOcQW8Fs0FGpXeIYSDT1MkltZDBCTKFCBp65E6lg1Bp3oR5QoXUtwrdyHpndxnYHb4bTzTWb%2BYAwRLeg4Msg%2B2jA%2BFFJoiMDoribPl62bdZhZNl3QJSmCsWftHW8%2B2A7xvXrNbCuhcGu6kXOS7O2SjKGUCUANu8jxaHO2AMKSCwtbzESZbuYckbDk9hPn5SuJBF4crdM6Qlxj9R%2FISdwnC6MEdH9WPKgbcUod3xt88aXNXlGxPSG1ETAHcMKy58rwGOqUBo9%2FjjLXNer1auJZVRccYeVUgyHh8XQeeKL3edvnPTImDwRe0idKTK%2FTE8SBkvM%2BDtwqvrmpJxUVRXJDksGEutRIVMQzSSzsYbzc9bpcWypuvQ3YP%2FPBqlQTp83EU2T2PlP%2Bhn4GkFPnTESFQARyWOaXfSfMy3lAJRqcABVc4M%2FuuOxPRTQXvsjDTozupyuryGhwJvVZQ97quZ0ALHX5Mg4r2gS5t&X-Amz-Signature=b25c9d321d93417d6cb0885835cf91d675a663d0749b54055569cd5bb6dc1485&X-Amz-SignedHeaders=host&x-id=GetObject)

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
