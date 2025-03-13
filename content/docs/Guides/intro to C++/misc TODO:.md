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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNECLEEP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdmqQuDv0WO2Mw0oiS6DPHb7WEbzJpTGA53c%2B86GoTfAiEAgdFLU3D8L027QEhMHDYud3QCZtXc%2Btwxzmv4IdPwA%2FsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL23x2vyNAAs0vi%2FircAyCUOvaEcDaEhKe99rzqC6smo0t%2B4nRt3PC8uhNbJ3UYC7N0TmU2LG%2FS59pY%2FUfAMLLh7pmXLUUgpHKkn07awD%2FRNjc92C1HEREp2%2FiQYHbt0JJdnOf7ycwaloz2Qfvy1VTz2Z1IuRaleZU01dsG%2BJS3tMqY0KbQyRa7gFHco8RQi6kvoosfeplsNpnfQDYOV3onMYVpxbu75JUvSPtElhIapllPhpcIXjamk4zCEUjXc9EaEklW%2Bc2QPKoUhCe7GgamjTNRuKC3DYz20bS5LjXj6p0WcTgHx%2BXubMlnGqd89q7ib7rC5IEMki04Io3vCd6CfcOR4Q8XQ93eR3zIwHBVjeJ5nQkOcouRm1Xn5hr6kEe98vLc41gFdnw5JPZhFH%2B%2F3kNILKzbHwm9kPxFssA9zYbFZre8MnHAAWuN3R99DVXwjeL%2Bo2tbpIqPpPzTbUxwcEwPlv1eNCyrJrORyw0He5rnkOhcCGsUOWwFiKpg0QIyWcO%2F64x%2FM1J0zem3eAs2HWbSjTMIy9HSPXBcMI%2F8uqNX9ArqhaoB89kQvVMfcKGl46ACUY6s1IaVZdx6pkBHPjqcWbu17ujpExWimk7EFpWIaIj7gxQoUVVeOE%2FBjfhToX3sb%2FYaXwz2MJrhyL4GOqUBufSCx%2BEDHxBO9733poRCyri8j73rC1D6InvDz%2FzeWAl4LoCWClNvwrg4D6eOokHmW2zfOfhm%2FMhXRS%2F6XpW2DEmp68ggqUgg7LE8skTdDk4EYQEkL7tMz%2B3DhXZ0QYAijv80Xfs9f07EYslEm%2FCp%2B1zdvteMT%2F5JGDBa1se%2FMT0KT3FMa4WyWIdGg72d34cIN3R0DrViIhet2XaEBvyEabplvti1&X-Amz-Signature=0944bce61d1a6f928d2e0dbaceb98a845f2ac5a602cc98219d349addb662fccf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNECLEEP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdmqQuDv0WO2Mw0oiS6DPHb7WEbzJpTGA53c%2B86GoTfAiEAgdFLU3D8L027QEhMHDYud3QCZtXc%2Btwxzmv4IdPwA%2FsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL23x2vyNAAs0vi%2FircAyCUOvaEcDaEhKe99rzqC6smo0t%2B4nRt3PC8uhNbJ3UYC7N0TmU2LG%2FS59pY%2FUfAMLLh7pmXLUUgpHKkn07awD%2FRNjc92C1HEREp2%2FiQYHbt0JJdnOf7ycwaloz2Qfvy1VTz2Z1IuRaleZU01dsG%2BJS3tMqY0KbQyRa7gFHco8RQi6kvoosfeplsNpnfQDYOV3onMYVpxbu75JUvSPtElhIapllPhpcIXjamk4zCEUjXc9EaEklW%2Bc2QPKoUhCe7GgamjTNRuKC3DYz20bS5LjXj6p0WcTgHx%2BXubMlnGqd89q7ib7rC5IEMki04Io3vCd6CfcOR4Q8XQ93eR3zIwHBVjeJ5nQkOcouRm1Xn5hr6kEe98vLc41gFdnw5JPZhFH%2B%2F3kNILKzbHwm9kPxFssA9zYbFZre8MnHAAWuN3R99DVXwjeL%2Bo2tbpIqPpPzTbUxwcEwPlv1eNCyrJrORyw0He5rnkOhcCGsUOWwFiKpg0QIyWcO%2F64x%2FM1J0zem3eAs2HWbSjTMIy9HSPXBcMI%2F8uqNX9ArqhaoB89kQvVMfcKGl46ACUY6s1IaVZdx6pkBHPjqcWbu17ujpExWimk7EFpWIaIj7gxQoUVVeOE%2FBjfhToX3sb%2FYaXwz2MJrhyL4GOqUBufSCx%2BEDHxBO9733poRCyri8j73rC1D6InvDz%2FzeWAl4LoCWClNvwrg4D6eOokHmW2zfOfhm%2FMhXRS%2F6XpW2DEmp68ggqUgg7LE8skTdDk4EYQEkL7tMz%2B3DhXZ0QYAijv80Xfs9f07EYslEm%2FCp%2B1zdvteMT%2F5JGDBa1se%2FMT0KT3FMa4WyWIdGg72d34cIN3R0DrViIhet2XaEBvyEabplvti1&X-Amz-Signature=94bbd5d80e06d2e8f28e83f843a54499f88f4b0451f1eefc7b57cda49ec93185&X-Amz-SignedHeaders=host&x-id=GetObject)

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
